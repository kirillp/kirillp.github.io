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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hu=f;}
function $rt_cls(cls){return S$(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hn(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b$.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASp(t);}
function $rt_throwableCause(t){return A0L(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A5L());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A5M(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A5N());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BL=$rt_compare;var A5O=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var I_=$rt_isInstance;var A5P=$rt_nativeThread;var A5Q=$rt_suspending;var A5R=$rt_resuming;var A5S=$rt_invalidPointer;var C=$rt_s;var Bo=$rt_eraseClinit;var Bb=$rt_imul;var EV=$rt_wrapException;var A5T=$rt_checkBounds;var A5U=$rt_checkUpperBound;var A5V=$rt_checkLowerBound;var A5W=$rt_wrapFunction0;var A5X=$rt_wrapFunction1;var A5Y=$rt_wrapFunction2;var A5Z=$rt_wrapFunction3;var A50=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AJd=$rt_createCharArrayFromData;var A3Q=$rt_createByteArrayFromData;var A4o=$rt_createShortArrayFromData;var DX=$rt_createIntArrayFromData;var A51=$rt_createBooleanArrayFromData;var A52=$rt_createFloatArrayFromData;var A53=$rt_createDoubleArrayFromData;var AIx=$rt_createLongArrayFromData;var A5K=$rt_createBooleanArray;var DM=$rt_createByteArray;var A54=$rt_createShortArray;var B7=$rt_createCharArray;var BO=$rt_createIntArray;var A55=$rt_createLongArray;var ALw=$rt_createFloatArray;var A56
=$rt_createDoubleArray;var BL=$rt_compare;var A57=$rt_castToClass;var A58=$rt_castToInterface;var A59=Long_toNumber;var Bq=Long_fromInt;var A5$=Long_fromNumber;var D=Long_create;var FE=Long_ZERO;var A5_=Long_hi;var GK=Long_lo;
function B(){this.$id$=0;}
function BE(a){return S$(a.constructor);}
function AQn(a,b){return a!==b?0:1;}
function AMM(a){var b,c,d,e,f,g,h,i,j;b=ME(a);if(!b)c=C(0);else{d=(((32-Xb(b)|0)+4|0)-1|0)/4|0;e=B7(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Ii((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hn(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function ME(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APH(a){var b,c,d;if(!I_(a,Ey)&&a.constructor.$meta.item===null){b=new Uj;X(b);N(b);}b=ALA(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RY(){var a=this;B.call(a);a.BD=0;a.qq=null;}
function A48(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AKA();AIb();AFW();AGD();AHT();AIX();AF6();AEp();AFz();AHm();AIa();AJ_();AGo();AJp();AI1();AG3();AI8();AKQ();AF8();AGj();AIC();AFB();AKg();AJP();AKe();AIn();AHM();AHi();c=(AEC()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Yc(C(2),C(3));else{d=new RY;BG(d);e=new ABi;e.z7=d;f=new WF;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new Pv;j.ya=i;j.yb=g;j.yc
=3;j.yd=e;j.x9=f;k=Bx(j,"f");i.onmessage=k;h=h+1|0;}l=I(L5,[E$(C(4),C(5),300),E$(C(6),C(7),300),E$(C(8),C(5),400),E$(C(9),C(7),400),E$(C(10),C(5),600),E$(C(11),C(7),600),E$(C(12),C(5),700),E$(C(13),C(7),700)]);m=Q(L5,1);m.data[0]=ASV(C(14),Fq(C(15),C(16)),C(5),400);b=(L1(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.t2;f=c.tj;i=new K;M(i);BM(H(H(i,C(17)),f),41);i=L(i);f=c.tf;o=c.r9;c=AXk($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BG(d);c=new ABj;c.AU=d;g=new ABh;e.then(Bx(c,"f"),Bx(g,"f"));}}
function AGJ(b){var c,d,e,f,g,h,i,j;c=new AAs;d=new Ui;d.xY=c;c.tM=d;d=new Ug;d.BJ=c;c.ot=d;e=new Uh;e.zo=c;c.u$=new $rt_globals.ResizeObserver(Bx(e,"f"));d=new Uf;d.rF=c;c.wS=d;c.ls=1;d=new AAd;d.mr=new TB;e=new Ya;e.DB=null;e.mi=A6a;d.su=e;BG(e);f=new AAh;f.zE=e;d.BF=f;d.A3=b;g=b.length;h=0;while(h<g){e=b[h];i=new AAi;i.y0=d;i.yZ=h;f=Bx(i,"f");e.onmessage=f;e=b[h];f=AJo();e.postMessage(f);h=h+1|0;}d.iy=0;d.pk=BO(g);c.Bg=d;c.qJ=(Ew()).getElementById("canvasDiv");d=AEC();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.er=d;c.qJ.appendChild(d);b=c.er;d=ARq(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Yc(C(2),C(18));else{c.pS=A4U(c.er,c.ot);b=new T$;j=c.ot;AKz(b,e,new ABO,1,2.25,0.625);b.Dz=new ABN;b.C9=j;c.hO=b;AR9(c.u$,c.er,AU3());d=$rt_globals.window;j=c.wS;d.addEventListener("resize",Bx(j,"handleEvent"));j=new OJ;b=c.hO;d=c.pS.cp;j.O=b;j.p=d;j.bV=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new Pa;Em(b,j);d=$rt_globals.fetch("test.wasm");j
=new WN;d=d.then(Bx(j,"f"));j=new WM;e=d.then(Bx(j,"f"));j=new WK;d=new WJ;e.then(Bx(j,"f"),Bx(d,"f"));}else b=Bj(C(20),d)?A4P(j):(A1C(J(d)<=0?C(21):Dw(d,1))).U(j);c.gx=b;ST(c);}c.er.focus();}
var WE=G(0);
var Wh=G(0);
function ACQ(){var a=this;B.call(a);a.m3=null;a.vd=null;a.d5=null;}
function S$(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ACQ;c.d5=b;d=c;b.classObject=d;}return c;}
function JO(a){if(a.m3===null)a.m3=AG0(a.d5);return a.m3;}
function X5(a){var b,c,d,e;b=a.vd;if(b===null){if(AK6(a.d5)===null?0:1){b=X5(HT(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d5.$meta.enclosingClass;if((b===null?null:S$(b))!==null){b=$rt_str(a.d5.$meta.simpleName);if(b===null)b=C(21);}else{b=AG0(a.d5);d=RL(b,36);if(d==(-1)){e=RL(b,46);if(e!=(-1))b=Dw(b,e+1|0);}else{b=Dw(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.vd=b;}return b;}
function IL(a){return a.d5.$meta.primitive?1:0;}
function HT(a){return S$(AK6(a.d5));}
var AIG=G();
function Bx(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fc(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AIv=G();
function ALA(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AJ5(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AJ5(d[e],c))return 1;e=e+1|0;}return 0;}
function AK6(b){return b.$meta.item;}
function AG0(b){return $rt_str(b.$meta.name);}
function GS(){var a=this;B.call(a);a.iT=null;a.nq=null;a.kF=0;a.k2=0;}
function A6b(){var a=new GS();X(a);return a;}
function A6c(a){var b=new GS();Bn(b,a);return b;}
function X(a){a.kF=1;a.k2=1;}
function Bn(a,b){a.kF=1;a.k2=1;a.iT=b;}
function AXc(a){return a;}
function ASp(a){return a.iT;}
function A0L(a){var b;b=a.nq;if(b===a)b=null;return b;}
var Ex=G(GS);
function A6d(){var a=new Ex();AGw(a);return a;}
function AGw(a){X(a);}
var Bw=G(Ex);
function A5M(a){var b=new Bw();A1$(b,a);return b;}
function A1$(a,b){Bn(a,b);}
var AJs=G(Bw);
var C5=G(0);
var CK=G(0);
var Ke=G(0);
function BK(){var a=this;B.call(a);a.b$=null;a.j4=0;}
var A6e=null;var A6f=null;var A6g=null;function Fb(){Fb=Bo(BK);ATn();}
function AOD(){var a=new BK();AEn(a);return a;}
function Hn(a){var b=new BK();Jq(b,a);return b;}
function EC(a,b,c){var d=new BK();OC(d,a,b,c);return d;}
function AEn(a){Fb();a.b$=A6e;}
function Jq(a,b){Fb();OC(a,b,0,b.data.length);}
function OC(a,b,c,d){var e;Fb();e=B7(d);a.b$=e;Dh(b,c,e,0,d);}
function Mx(b){var c;Fb();c=AOD();c.b$=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b$.data;if(b<c.length)return c[b];}d=new If;X(d);N(d);}
function J(a){return a.b$.data.length;}
function Gl(a){return a.b$.data.length?0:1;}
function QS(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dh(a.b$,b,d,e,c);return;}}g=new BI;X(g);N(g);}
function Oq(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ABJ(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Nw(a,b){if(a===b)return 1;return ABJ(a,b,0);}
function DD(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JV(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b$.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JP(b);h=Ja(b);while(true){f=a.b$.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hs(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b$.data[d]==e)break;d=d+(-1)|0;}return d;}f=JP(b);g=Ja(b);while(true){if(d<1)return (-1);h=a.b$.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RL(a,b){return Hs(a,b,J(a)-1|0);}
function YC(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AZK(a,b){return YC(a,b,0);}
function QP(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AFE(a,b){return QP(a,b,J(a));}
function Cs(a,b,c){var d,e;d=BL(b,c);if(d>0){e=new BI;X(e);N(e);}if(!d){Fb();return A6f;}if(!b&&c==J(a))return a;return EC(a.b$,b,c-b|0);}
function Dw(a,b){return Cs(a,b,J(a));}
function QX(a,b,c){return Cs(a,b,c);}
function Fq(a,b){var c,d,e,f,g,h;if(Gl(b))return a;if(Gl(a))return b;c=B7(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Mx(c);}
function AB9(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Dw(a,f));return L(d);}
function ZW(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cs(a,b,c+1|0);}
function AMK(a){return a;}
function Gn(a){var b,c,d,e,f;b=a.b$.data;c=B7(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Ck(b){Fb();return b===null?C(23):b.cK();}
function ZV(b){var c,d;Fb();c=new BK;d=B7(1);d.data[0]=b;Jq(c,d);return c;}
function Dm(b){var c;Fb();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BK))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function NU(a){var b,c,d,e;a:{if(!a.j4){b=a.b$.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j4=(31*a.j4|0)+e|0;d=d+1|0;}}}return a.j4;}
function Mh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GZ;Bn(b,C(24));N(b);}A6h=1;d=new Zw;d.mR=Q(CZ,10);d.hV=(-1);d.fL=(-1);d.bA=(-1);e=new G1;e.fr=1;e.bM=b;e.bg=B7(J(b)+2|0);Dh(Gn(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.zl=g;e.g5=0;FN(e);FN(e);d.l=e;d.dY=0;d.ny=VF(d,(-1),0,null);if(!DF(d.l)){b=new Ka;h=d.l;MO(b,C(21),h.bM,h.dr);N(b);}if(d.q$)d.ny.eR();b=BD();h=new AAk;h.kk=(-1);h.o$=(-1);h.Cq=d;h.AW=d.ny;h.lJ=a;h.kk=0;g=J(a);h.o$=g;e=new AB$;i=h.kk;j=d.hV;k=d.fL+1|0;l=d.bA
+1|0;e.iX=(-1);m=j+1|0;e.rN=m;e.d$=BO(m*2|0);f=BO(l);e.kW=f;Ju(f,(-1));if(k>0)e.pt=BO(k);Ju(e.d$,(-1));ADW(e,a,i,g);h.cE=e;e.gs=1;n=0;m=0;if(!J(a)){f=Q(BK,1);f.data[0]=C(21);}else{while(true){l=J(h.lJ);if(!AEw(h))l=h.o$;e=h.cE;if(e.eO>=0&&AFv(e)==1){e=h.cE;e.eO=MD(e);if(MD(h.cE)==AGC(h.cE)){e=h.cE;e.eO=e.eO+1|0;}g=h.cE.eO;g=g<=l&&OQ(h,g)?1:0;}else g=OQ(h,h.kk);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Br(b,QX(a,m,AHB(h)));m=AIY(h);n=g;}a:{Br(b,QX(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bv(b,
g)))break a;EL(b,g);}}if(g<0)g=0;f=Gj(b,Q(BK,g));}return f;}
function AOd(a,b){return Oq(a,b);}
function ATn(){A6e=B7(0);A6f=AOD();A6g=new SJ;}
var Fv=G(GS);
var Ij=G(Fv);
var AI_=G(Ij);
var Et=G();
function HC(){Et.call(this);this.bq=0;}
var A6i=null;var A6j=null;function A1y(a){var b=new HC();AE_(b,a);return b;}
function AE_(a,b){a.bq=b;}
function NX(b){return (WX(A5C(20),b,10)).cK();}
function KH(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dv;Bn(b,C(25));N(b);}d=J(b);if(0==d){b=new Dv;Bn(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dv;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=X9(P(b,f));if(i<0){j=new Dv;k=Cs(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bn(j,L(b));N(j);}if(i>=c){j=new Dv;l=Cs(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bn(j,L(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dv;k=Cs(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bn(j,L(b));N(j);}b=new Dv;j=new K;M(j);U(H(j,C(31)),c);Bn(b,L(j));N(b);}
function CX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A6j===null){A6j=Q(HC,256);c=0;while(true){d=A6j.data;if(c>=d.length)break a;d[c]=A1y(c-128|0);c=c+1|0;}}}return A6j.data[b+128|0];}return A1y(b);}
function AUQ(a){return a.bq;}
function A2F(a,b){if(a===b)return 1;return b instanceof HC&&b.bq==a.bq?1:0;}
function Xb(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I1(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AYu(a,b){b=b;return BL(a.bq,b.bq);}
function AKA(){A6i=F($rt_intcls());}
function GM(){var a=this;B.call(a);a.D=null;a.L=0;}
function A6k(){var a=new GM();M(a);return a;}
function A5C(a){var b=new GM();GF(b,a);return b;}
function M(a){GF(a,16);}
function GF(a,b){a.D=B7(b);}
function WX(a,b,c){return AJj(a,a.L,b,c);}
function AJj(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cp(a,b,b+1|0);else{Cp(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=Ii(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cp(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=Ii($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AJX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6l;AJQ(c,f);d=f.na;g=f.mZ;h=f.ri;i=1;j=1;if(h)j=2;k=9;l=ASW(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cp(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AIQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6m;AFP(c,f);g=f.nz;h=f.mJ;i=f.q6;j=1;k=1;if(i)k=2;l=18;m=ARE(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANG(p,FE))d=0;else{d=GK(AGK(g,p));g=AU1(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGK(p,Bq(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASW(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARE(b){var c,d,e,f,g;c=Bq(1);d=0;e=16;f=A6n.data;g=f.length-1|0;while(g>=0){if(IF(AU1(b,Ch(c,f[g])),FE)){d=d|e;c=Ch(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.p9(a.L,b);}
function ADL(a,b,c){Cp(a,b,b+1|0);a.D.data[b]=c;return a;}
function MZ(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.D=KD(a.D,d);}
function L(a){return EC(a.D,0,a.L);}
function ADz(a,b,c,d){return a.pR(a.L,b,c,d);}
function Wy(a,b,c,d,e){var f,g,h,i;Cp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JX(a,b){return a.pe(b,0,b.data.length);}
function Cp(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.jZ((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var JH=G(0);
var K=G(GM);
function L$(){var a=new K();A2x(a);return a;}
function A2x(a){M(a);}
function H(a,b){var c;c=a.L;if(b===null)b=C(23);Mz(a,c,b);return a;}
function BU(a,b){Mz(a,a.L,b);return a;}
function U(a,b){WX(a,b,10);return a;}
function HH(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(A3y(b,FE)){d=0;b=A47(b);}a:{if(DI(b,Bq(10))<0){if(d)Cp(a,c,c+1|0);else{Cp(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=Ii(GK(b),10);}else{g=1;h=Bq(1);i=De(Bq(-1),Bq(10));b:{while(true){j=Ch(h,Bq(10));if(DI(j,b)>0){j=h;break b;}g=g+1|0;if(DI(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cp(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(IF(j,FE))break a;e=a.D.data;c=f+1|0;e[f]=Ii(GK((De(b,j))),10);b=AId(b,j);j=De(j,Bq(10));f=c;}}}return a;}
function EF(a,b){AJX(a,a.L,b);return a;}
function Jt(a,b){Mz(a,a.L,!b?C(32):C(33));return a;}
function AHq(a,b,c){var d,e,f,g,h,i;d=BL(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new If;X(i);N(i);}
function UM(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new If;X(f);N(f);}
function AYp(a,b,c,d,e){Wy(a,b,c,d,e);return a;}
function ANv(a,b,c,d){ADz(a,b,c,d);return a;}
function AIo(a){return a.L;}
function Ee(a){return L(a);}
function APG(a,b){MZ(a,b);}
function AYL(a,b,c){ADL(a,b,c);return a;}
function Mz(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=C(23);else if(Gl(c))break a;MZ(a,a.L+J(c)|0);d=a.L-1|0;while(d>=b){a.D.data[d+J(c)|0]=a.D.data[d];d=d+(-1)|0;}a.L=a.L+J(c)|0;d=0;while(d<J(c)){e=a.D.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new If;X(c);N(c);}
var E3=G(Ij);
var AJ8=G(E3);
function A6o(a){var b=new AJ8();AMP(b,a);return b;}
function AMP(a,b){Bn(a,b);}
var AI5=G(E3);
function A6p(a){var b=new AI5();AM0(b,a);return b;}
function AM0(a,b){Bn(a,b);}
var AA9=G(0);
var C9=G(0);
function BY(b,c){if(b!==null)b.cD();return c;}
var X6=G(0);
function J8(){var a=this;B.call(a);a.jh=0;a.nV=0;a.no=0;}
var A6q=0;function EA(a){A6q=A6q-1|0;}
function Ht(a,b,c){Kt(a,AIM(b,c,400,0));}
function La(a,b){return Lp(a,b,0.875);}
function Lp(a,b,c){return Eq(a,b)+c|0;}
function ZL(){var a=this;J8.call(a);a.i9=null;a.db=null;a.wG=null;}
function EP(a){var b,c,d;b=a.db;c=a.nV;d=a.no;b.clearRect(0.0,0.0,c,d);}
function Z6(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.db;d="center";c.textAlign=d;break a;case 2:c=a.db;d="right";c.textAlign=d;break a;default:break a;}d=a.db;c="left";d.textAlign=c;}}
function Cm(a,b){Kt(a,b.qX);}
function Kt(a,b){var c;if(a.wG!==b){c=a.db;a.wG=b;c.font=b;}}
function AIM(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BW(a,b,c,d){var e,f,g;e=a.db;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eq(a,b){var c;c=$rt_ustr(b);return a.db.measureText(c).width;}
function J1(a,b,c,d){var e,f;e=a.db;f=$rt_ustr(Hn(AJd([35,HV(b/16|0),HV(b%16|0),HV(c/16|0),HV(c%16|0),HV(d/16|0),HV(d%16|0)])));e.fillStyle=f;}
function AVM(){return {alpha:false};}
var AIc=G();
var AKG=G();
function BN(b,c){if(b===c)return 1;return b!==null?b.bc(c):c!==null?0:1;}
function AFI(b){return b!==null?b.gz():0;}
function BG(b){if(b!==null)return b;b=new GZ;Bn(b,C(21));N(b);}
var BR=G(0);
function Nl(b){return b;}
var Cd=G(0);
function ABi(){B.call(this);this.z7=null;}
function A2S(a,b){var c;c=a.z7;c.qq=b;if(c.BD)AGJ(b);}
var AGn=G();
function K2(b,c){return b.data[c];}
var AJE=G();
var AEx=G(0);
function E$(b,c,d){return ASV(C(34),Fq(C(15),b),c,d);}
var AKu=G(0);
var AGU=G(0);
function L1(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C6(b,f+g|0);Dh(c,0,d,f,g);return d;}
function Lt(b,c,d){Dh(b,c,d,0,d.data.length);return d;}
function ZC(b,c,d){var e;if(c>0)Dh(b,0,d,0,c);e=d.data.length;if(c<e)Dh(b,c+1|0,d,c,e-c|0);return d;}
function AFA(b,c,d,e){var f;if(c>0)Dh(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dh(b,d,e,c,f-d|0);}return e;}
function DB(b){var c;c=new PO;c.ke=b;return c;}
function AE7(b,c){if(b.data.length!=c)b=C6(b,c);return b;}
function AGT(b,c,d){var e;e=c.data.length;if(e==d)c=C6(c,e*2|0);c.data[d]=b;return c;}
function AB4(b,c,d){var e;e=c.data.length;if(e==d)c=Om(c,e*2|0);c.data[d]=b;return c;}
function Ol(b){return KD(b,b.data.length);}
function L5(){var a=this;B.call(a);a.t2=null;a.tj=null;a.tf=null;a.r9=0;}
function ASV(a,b,c,d){var e=new L5();ASi(e,a,b,c,d);return e;}
function ASi(a,b,c,d,e){a.t2=b;a.tj=c;a.tf=d;a.r9=e;}
var AE2=G();
function AXk(b,c){return {style:b,weight:c};}
function ABj(){B.call(this);this.AU=null;}
function ALj(a,b){var c,d,e;c=a.AU;d=0;while(d<b.length){e=b[d];(Ew()).fonts.add(e);d=d+1|0;}c.BD=1;b=c.qq;if(b!==null)AGJ(b);}
var ABh=G();
function A1R(a,b){$rt_globals.console.info("font load error "+b);}
var LG=G();
var A6r=null;var A6s=null;function Bu(){if(A6r===null)A6r=AQO(A6t,0);return A6r;}
function Ep(){if(A6s===null)A6s=AQO(A6u,0);return A6s;}
function A3T(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N3(b)&&(e+f|0)<=N3(d)){a:{b:{if(b!==d){g=HT(BE(b));h=HT(BE(d));if(g!==null&&h!==null){if(g===h)break b;if(!IL(g)&&!IL(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d5;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AJ5(n.constructor,o)?1:0)){NA(b,c,d,e,j);b=new Jb;X(b);N(b);}j=j+1|0;k=m;}NA(b,c,d,e,f);return;}if(!IL(g))break a;if(IL(h))break b;else break a;}b=new Jb;X(b);N(b);}}NA(b,c,
d,e,f);return;}b=new Jb;X(b);N(b);}b=new BI;X(b);N(b);}d=new GZ;Bn(d,C(35));N(d);}
function Dh(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N3(b)&&(e+f|0)<=N3(d)){NA(b,c,d,e,f);return;}b=new BI;X(b);N(b);}
function NA(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E2(){return Long_fromNumber(new Date().getTime());}
function AGF(){return A5$($rt_globals.performance.now()*1000000.0);}
var AGS=G();
var AIZ=G();
function Yc(b,c){var d,e,f;d=(Ew()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ew()).getElementById($rt_ustr(b)).appendChild(d);}
function AEC(){return (Ew()).createElement("canvas");}
function AHv(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ARq(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ALg=G();
var WF=G();
function AZC(a,b){var c;c=new Bw;Bn(c,$rt_str(b.message));N(c);}
var AG5=G();
function H3(b){return $rt_str(b);}
var AIk=G();
function KD(b,c){var d,e,f,g;b=b.data;d=B7(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Om(b,c){var d,e,f,g;b=b.data;d=DM(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Jf(b,c){var d,e,f,g;b=b.data;d=BO(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C6(b,c){var d,e,f,g;d=b.data;e=AGB(HT(BE(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AGt(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));U(c,e[d]);d=d+1|0;}BU(c,C(38));return L(c);}
function ASy(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));EF(c,e[d]);d=d+1|0;}BU(c,C(38));return L(c);}
function AUu(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BU(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BU(c,C(37));f=e[d];AIQ(c,c.L,f);d=d+1|0;}BU(c,C(38));return L(c);}
function Ju(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BS;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AEW(b,c,d,e){var f,g;if(c>d){e=new BS;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function KZ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A6a;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qg(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AJY(b,c){return ABn(b,0,b.data.length,c);}
function ABn(b,c,d,e){var f,g,h,i,j;f=BL(c,d);if(f>0){g=new BS;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AGy(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AFI(e[d])|0;d=d+1|0;}return c;}
function Zb(b){return AQA(b,0,b.data.length);}
var ACs=G(0);
var AJu=G();
function AXD(a,b){return a.Nz(b);}
function AQk(a){return a.QT();}
var AFN=G();
var Gc=G(0);
var SJ=G();
var BI=G(Bw);
var AJU=G();
function N3(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6v());}return b.data.length;}
function AGB(b,c){if(b===null){b=new GZ;X(b);N(b);}if(b===F($rt_voidcls())){b=new BS;X(b);N(b);}if(c>=0)return ATP(b.d5,c);b=new AEd;X(b);N(b);}
function ATP(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GZ=G(Bw);
var Jb=G(Bw);
function Dn(){B.call(this);this.mX=0;}
var A6w=null;var A6x=null;var A6y=null;var A6z=null;var A6A=null;var A6B=null;var A6C=null;var A6D=null;var A6E=null;var A6F=null;function AUd(a){var b=new Dn();AFr(b,a);return b;}
function AFr(a,b){a.mX=b;}
function Pw(b){var c,d;c=A6B.data;if(b>=c.length)return AUd(b);d=c[b];if(d===null){d=AUd(b);A6B.data[b]=d;}return d;}
function Vi(b){var c,d;c=new BK;d=B7(1);d.data[0]=b;Jq(c,d);return c;}
function Ml(b){return b>=65536&&b<=1114111?1:0;}
function CR(b){return (b&64512)!=55296?0:1;}
function Dl(b){return (b&64512)!=56320?0:1;}
function Ov(b){return !CR(b)&&!Dl(b)?0:1;}
function Jp(b,c){return CR(b)&&Dl(c)?1:0;}
function EN(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JP(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ja(b){return (56320|b&1023)&65535;}
function FG(b){return GY(b)&65535;}
function GY(b){if(A6z===null){if(A6C===null)A6C=AKd();A6z=AFC((A6C.value!==null?$rt_str(A6C.value):null));}return SB(A6z,b);}
function Fk(b){return GX(b)&65535;}
function GX(b){if(A6y===null){if(A6D===null)A6D=AKB();A6y=AFC((A6D.value!==null?$rt_str(A6D.value):null));}return SB(A6y,b);}
function SB(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BL(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ABT(b,c){if(c>=2&&c<=36){b=X9(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function X9(b){var c,d,e,f,g,h,i,j,k,l;if(A6x===null){if(A6E===null)A6E=AJb();c=(A6E.value!==null?$rt_str(A6E.value):null);d=ASs(Gn(c));e=M3(d);f=BO(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+O8(d)|0;j=j+O8(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A6x=f;}g=A6x.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BL(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Ii(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HP(b){var c;if(b<65536){c=B7(1);c.data[0]=b&65535;return c;}return AJd([JP(b),Ja(b)]);}
function CD(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ov(b&65535))return 19;if(A6A===null){if(A6F===null)A6F=AHQ();d=(A6F.value!==null?$rt_str(A6F.value):null);e=Q(WR,16384);f=e.data;g=DM(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Nx(P(d,l));if(m==64){l=l+1|0;m=Nx(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Nx(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Nx(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOb(k,k+i|0,Om(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOb(k,k+i|0,Om(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A6A=C6(e,j);}e=A6A.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.tt)o=p+1|0;else{c=d.x$;if(b>=c)return d.yj.data[b-c|0];c=p-1|0;}}return 0;}
function KG(b){a:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HL(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CD(b)!=16?0:1;}
function Yu(b){switch(CD(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function RG(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Yu(b);}return 1;}
function AIb(){A6w=F($rt_charcls());A6B=Q(Dn,128);}
function AKd(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKB(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AJb(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHQ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Wd=G(0);
var AAm=G(0);
var EX=G(0);
var AIe=G();
function Ew(){return $rt_globals.window.document;}
function AZi(a){return a.IA();}
function A1h(a,b){return a.Kg($rt_str(b));}
function A08(a,b){a.HR($rt_str(b));}
function AWv(a,b){return a.NJ($rt_str(b));}
function ALz(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANp(a){return a.Rd();}
function A1e(a,b,c){return a.P8($rt_str(b),$rt_str(c));}
function APs(a,b,c,d){a.CY($rt_str(b),Fc(c,"handleEvent"),d?1:0);}
function AVE(a){return a.OZ();}
function AZ0(a){return !!a.KE();}
function A1N(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQD(a){return a.H0();}
function AO7(a,b){a.P0($rt_str(b));}
function AQY(a){return !!a.HH();}
function AUx(a){return a.Kp();}
function APU(a){return $rt_ustr(a.FJ());}
function AMa(a,b){return a.H_(b?1:0);}
function A2H(a){return a.KD();}
function AX1(a,b,c){return a.RP($rt_str(b),$rt_str(c));}
function AQu(a,b,c){return a.Of(b,c?1:0);}
function ATR(a,b,c){return !!a.JU($rt_str(b),$rt_str(c));}
function AUY(a){return a.I8();}
function AOO(a){return $rt_ustr(a.Ly());}
function ANy(a,b){return !!a.E1(b);}
function AOp(a,b){return a.L2($rt_str(b));}
function AX_(a,b,c){return a.Iy($rt_str(b),$rt_str(c));}
function AP3(a){return a.MO();}
function AVG(a,b){return a.Rj($rt_str(b));}
function AOo(a){return $rt_ustr(a.Mr());}
function ARZ(a){a.HD();}
function ALp(a,b){return a.RS($rt_str(b));}
function ATe(a,b){return a.HW($rt_str(b));}
function AVY(a,b){return a.HC($rt_str(b));}
function A1E(a){return $rt_ustr(a.M0());}
function AV4(a,b,c){return a.PC(b,c);}
function AZ9(a,b){return a.FI(b);}
function ASn(a){return a.JH();}
function ARm(a,b,c){a.Ey($rt_str(b),Fc(c,"handleEvent"));}
function AQ7(a,b,c){return a.Gz(b,c);}
function AS9(a){return !!a.QR();}
function AUc(a,b){return a.Iv($rt_str(b));}
function AZs(a,b,c,d){a.Cg($rt_str(b),Fc(c,"handleEvent"),d?1:0);}
function ANt(a){return a.JI();}
function AWg(a,b,c){return a.H$($rt_str(b),$rt_str(c));}
function AVj(a){return $rt_ustr(a.Nf());}
function A2C(a){return a.MF();}
function ARj(a){return a.MT();}
function AVh(a){return a.JV();}
function ARn(a,b,c){a.E0($rt_str(b),Fc(c,"handleEvent"));}
function AWE(a,b){return a.Ll(b);}
function AOv(a,b){a.F1($rt_str(b));}
function A0I(a){return $rt_ustr(a.Mk());}
function Pv(){var a=this;B.call(a);a.ya=null;a.yb=null;a.yc=0;a.yd=null;a.x9=null;}
function ARU(a,b){var c,d,e,f,g;c=a.ya;d=a.yb;e=a.yc;f=a.yd;g=a.x9;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AJh=G();
function ASD(b){return Math.exp(b);}
function AIf(b){return Math.log(b);}
function Jh(b,c){return AYU(b,c);}
function AYU(b,c){return Math.pow(b,c);}
function DS(){return AUl();}
function AUl(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ATS(b,c){return Math.max(b,c);}
function Wj(b){if(b<0)b= -b|0;return b;}
function AOz(b){return Math.abs(b);}
var Ym=G(0);
var RO=G(0);
var ZA=G(0);
var S7=G(0);
var ADC=G(0);
var ABU=G(0);
var AIE=G();
function AZJ(a,b,c){a.E0($rt_str(b),Fc(c,"handleEvent"));}
function AYs(a,b,c){a.Ey($rt_str(b),Fc(c,"handleEvent"));}
function AOQ(a,b,c,d){a.Cg($rt_str(b),Fc(c,"handleEvent"),d?1:0);}
function AMm(a,b){return !!a.E1(b);}
function AWV(a,b,c,d){a.CY($rt_str(b),Fc(c,"handleEvent"),d?1:0);}
var BS=G(Bw);
var AEd=G(Bw);
var If=G(BI);
var AIT=G();
function AJo(){return "ping";}
function AHO(b){return b===AJo()?1:0;}
var Ze=G(0);
var XV=G(0);
function AAs(){var a=this;B.call(a);a.tM=null;a.ot=null;a.qJ=null;a.er=null;a.u$=null;a.wS=null;a.pS=null;a.hO=null;a.ls=0;a.EI=0;a.zc=null;a.gx=null;a.Bg=null;}
function W1(a,b){var c;c=Ew();b=$rt_ustr(b);c.title=b;}
function ST(a){a.EI=$rt_globals.requestAnimationFrame(Bx(a.tM,"onAnimationFrame"));}
function Js(a){a.ls=1;}
function AAY(a,b,c){var d,e;a.pS.eo=BH(b,c);d=a.er;e=b;d.width=e;d=a.er;e=c;d.height=e;d=a.hO;V(d.c6,b,c);e=d.Y;d=d.c6;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gx.ca(a.hO.c6,Ll(a));a.gx.bP();}
function ZK(a,b){var c,d,e;c=a.zc;d=a.er;if(BN(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.zc=b;}
function MU(a){return $rt_globals.performance.now()/1000.0;}
function Ll(a){return $rt_globals.window.devicePixelRatio;}
function I$(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEr(null,b);else{c=new ADa;d=$rt_globals.window.showDirectoryPicker();e=new AC_;e.sm=b;e.sn=c;d.then(Bx(e,"f"),Bx(c,"f"));}}
function Oe(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEr(b,null);else{c=new ADK;d=$rt_globals.window.showOpenFilePicker();e=new ADJ;e.sK=b;d.then(Bx(e,"f"),Bx(c,"f"));}}
function CT(a,b,c,d){var e,f,g,h;e=a.Bg;f=e.iy;if(f>0){g=e.pk.data;f=f-1|0;e.iy=f;Tr(e,b,c,d,g[f]);}else{h=e.mr;e=new ADb;e.um=b;e.AG=c;e.zU=d;b=new LJ;b.j_=e;c=h.mq;b.p2=c;if(c===null)h.pd=b;else c.kE=b;h.mq=b;h.b0=h.b0+1|0;h.k$=h.k$+1|0;}}
function RE(a,b,c){var d,e;if(!LZ()){b=new Bw;Bn(b,C(39));c.f(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Z$;e.tc=b;b=ALd(c);d.then(Bx(e,"f"),Bx(b,"f"));}}
function Ts(a,b,c,d){var e,f,g;if(!LZ()){b=new Bw;Bn(b,C(39));d.f(b);}else{e=$rt_globals.navigator.clipboard;f=Gn(b);A3_();b=A6G;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ACz;e.vp=c;c=ALd(d);b.then(Bx(e,"f"),Bx(c,"f"));}}
function Vw(a){return LZ()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ALd(b){var c;c=new OS;c.z5=b;return c;}
var BC=G(0);
var AJB=G();
var Z=G(0);
var AJC=G();
var ZE=G(0);
function Ui(){B.call(this);this.xY=null;}
function AX0(a,b){var c,d;c=b;b=a.xY;if(!(!b.gx.cg(c/1000.0)&&!b.ls)){d=b.hO.c6;if(Bb(d.a,d.b)){b.ls=0;b.gx.bP();}}ST(b);}
function Ug(){B.call(this);this.BJ=null;}
function DE(a){Js(a.BJ);}
var Y7=G(0);
function Uh(){B.call(this);this.zo=null;}
function ANI(a,b,c){var d,e,f,g;c=a.zo;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.er){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Ll(c);AAY(c,Gz(f.width*g),Gz(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AAY(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AHc=G();
function AU3(){return {box:'device-pixel-content-box'};}
function AR9(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cy=G(0);
function Uf(){B.call(this);this.rF=null;}
function ARY(a,b){b=a.rF;b.gx.ca(b.hO.c6,Ll(b));b.gx.bP();}
function AAd(){var a=this;B.call(a);a.mr=null;a.A3=null;a.su=null;a.pk=null;a.w1=0;a.iy=0;a.BF=null;}
function Tr(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.w1+1|0;a.w1=f;g=a.su;h=CX(f);g.j2=Ot(g,g.j2,h);h=ABW(g,h);Wf(h,b);Wf(h,b);g.ml=g.ml+1|0;b=a.A3[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BK)g=$rt_ustr(c);else if(I_(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(I_(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(I_(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof SL)){b=new BS;c
=JO(BE(c));g=new K;M(g);H(H(g,C(40)),c);Bn(b,L(g));N(b);}c=c;g=c.io;if(g===null)g=c.f8;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var UO=G(0);
function AUF(a,b){var c;c=a.b5();while(c.cz()){b.f(c.b7());}}
var Hv=G(0);
function LU(a){var b,c;b=new AAb;c=new Q2;c.x8=a;b.Ag=c;return b;}
function AYe(a,b){var c,d;c=a.b5();d=0;while(c.cz()){if(b.A(c.b7())){c.pm();d=1;}}return d;}
var Fy=G();
function CJ(a){return a.c1()?0:1;}
function Gj(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AGB(HT(BE(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B1(a);while(B4(f)){g=b.data;h=e+1|0;g[e]=B6(f);e=h;}return b;}
function A0X(a,b){var c;c=a.b5();while(c.cz()){if(BN(c.b7(),b)){c.pm();return 1;}}return 0;}
function H1(a,b){var c,d;c=0;d=b.b5();while(d.cz()){if(!a.zz(d.b7()))continue;c=1;}return c;}
var NC=G(0);
var MH=G(0);
function Fm(){Fy.call(this);this.b0=0;}
function ASa(a,b){a.os(a.c1(),b);return 1;}
function B1(a){var b;b=new W6;b.ji=a;b.qd=a.b0;b.lB=a.c1();b.hR=(-1);return b;}
function ARA(a,b,c){var d,e;if(b>=0&&b<=a.c1()){if(c.eC())return 0;d=c.b5();while(d.cz()){e=b+1|0;a.os(b,d.b7());b=e;}return 1;}c=new BS;X(c);N(c);}
function A1z(a,b,c){c=new Eh;X(c);N(c);}
function K6(a,b){var c,d;c=a.c1();d=0;while(true){if(d>=c)return (-1);if(BN(b,a.nK(d)))break;d=d+1|0;}return d;}
function AQQ(a,b){var c,d;if(!I_(b,MH))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BN(Bv(a,d),Bv(c,d)))return 0;d=d+1|0;}return 1;}
var Mi=G(Fm);
var OM=G(0);
var ADX=G(0);
function TB(){var a=this;Mi.call(a);a.pd=null;a.mq=null;a.k$=0;}
var Lu=G(0);
function Ef(){var a=this;B.call(a);a.o2=null;a.o8=null;}
var Ey=G(0);
var Vv=G(0);
var O7=G(0);
function Ya(){var a=this;Ef.call(a);a.j2=null;a.mi=null;a.DB=null;a.ml=0;}
function AHj(a,b){var c;c=ABW(a,b);if(c===null)return null;a.j2=K3(a,a.j2,b);a.ml=a.ml+1|0;return c.km;}
function ABW(a,b){var c,d;c=a.j2;while(true){if(c===null)return null;d=MV(a.mi,b,c.lX);if(!d)break;c=d>=0?c.b1:c.bS;}return c;}
function Ot(a,b,c){var d,e;if(b===null){b=new KB;d=null;b.lX=c;b.km=d;b.gE=1;b.gO=1;return b;}e=MV(a.mi,c,b.lX);if(!e)return b;if(e>=0)b.b1=Ot(a,b.b1,c);else b.bS=Ot(a,b.bS,c);EY(b);return M2(b);}
function K3(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MV(a.mi,c,b.lX);if(d<0)b.bS=K3(a,b.bS,c);else if(d>0)b.b1=K3(a,b.b1,c);else{e=b.b1;if(e===null)return b.bS;f=b.bS;g=Q(KB,e.gE).data;h=0;while(true){b=e.bS;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b1;while(h>0){h=h+(-1)|0;j=g[h];j.bS=b;EY(j);b=M2(j);}e.b1=b;e.bS=f;EY(e);b=e;}EY(b);return M2(b);}
function AAh(){B.call(this);this.zE=null;}
function AAi(){var a=this;B.call(a);a.y0=null;a.yZ=0;}
function AUX(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.y0;d=a.yZ;AHO(b.data);e=c.mr;f=e.pd;if(f===null)e=null;else{g=f.kE;e.pd=g;if(g!==null)g.p2=null;else e.mq=null;e.k$=e.k$-1|0;e.b0=e.b0+1|0;e=f.j_;}e=e;if(e!==null)Tr(c,e.um,e.AG,e.zU,d);else{h=c.pk.data;i=c.iy;c.iy=i+1|0;h[i]=d;}c=c.BF;b=b.data;if(!AHO(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BS;X(b);N(b);}if(b.length<1){b=new BS;AGw(b);N(b);}e=CX(b[0]);g=AHj(c.zE,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;f=b[l];j[k]=(typeof f===
'string'?1:0)?H3(Nl(f)):(f instanceof $rt_globals.ArrayBuffer?1:0)?A3C(Nl(f)):(f instanceof $rt_globals.File?1:0)?AJ1(null,Nl(f)):!(f instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AJ1(Nl(f),null);k=l;}g.f(h);}}
function AE9(){var a=this;B.call(a);a.cp=null;a.jz=null;a.ES=null;a.eo=null;}
function A4U(a,b){var c=new AE9();A1v(c,a,b);return c;}
function A1v(a,b,c){var d,e,f,g;a.eo=null;a.jz=b;d=new YK;d.bG=CU(Q(Cq,0));d.ow=CU(Q(Cq,0));d.bO=CU(Q(CC,0));d.ft=CU(Q(EH,0));d.c4=CU(Q(C$,0));d.gH=CU(Q(Fw,0));d.g8=CU(Q(FQ,0));d.mg=CU(Q(Z,0));d.mU=CU(Q(Z,0));d.dp=c;a.cp=d;e=$rt_globals.window;f=Q(C9,14);g=f.data;d=new ACW;d.q7=a;g[0]=C3(a,b,C(41),d);d=new ACX;d.zR=a;g[1]=C3(a,b,C(42),d);d=new ACY;d.xP=a;g[2]=C3(a,b,C(43),d);d=new ACZ;d.vW=a;g[3]=C3(a,b,C(44),d);d=new AC0;d.tF=a;g[4]=C3(a,b,C(45),d);d=new AC1;d.rs=a;g[5]=C3(a,b,C(46),d);d=new AC2;d.BT=a;g[6]
=C3(a,b,C(47),d);d=new AC3;d.zq=a;g[7]=C3(a,b,C(48),d);d=new AC4;d.xt=a;g[8]=C3(a,b,C(49),d);d=new AC5;d.vs=a;g[9]=C3(a,b,C(50),d);d=new VS;d.uX=a;g[10]=C3(a,b,C(51),d);d=new VT;d.uf=a;e.addEventListener("paste",Bx(d,"handleEvent"),!!1);g[11]=Vf(a,e,C(52),d);d=new VU;d.wE=a;g[12]=C3(a,e,C(53),d);d=new VV;d.Bn=a;g[13]=C3(a,e,C(54),d);c=new Ra;c.CB=f;a.ES=c;e=new ADR;e.yn=b;b.onpointerdown=Bx(e,"f");e=new ADS;e.xD=b;b.onpointerup=Bx(e,"f");}
function Wz(){return (Ew()).activeElement;}
function C3(a,b,c,d){b.addEventListener($rt_ustr(c),Bx(d,"handleEvent"));return Vf(a,b,c,d);}
function Vf(a,b,c,d){var e;e=new Y4;e.Ei=b;e.Ek=c;e.Ej=d;return e;}
function ABk(a,b){var c;c=new ABY;c.vV=b;return c;}
function E9(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jz.getBoundingClientRect();e=BH(Gz((b.clientX-d.left)*c),Gz((b.clientY-d.top)*c));f=AJN(a.eo);d=new OH;ABL(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.D$=f;return d;}
function VZ(a,b,c){var d,e,f,g;d=new Ql;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ABL(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.oO=0;d.ee=e;d.bm=f;d.jM=c;d.zt=g;return d;}
function D9(a,b){b.stopPropagation();b.preventDefault();}
function NQ(){var a=this;B.call(a);a.pz=null;a.cd=null;a.Y=null;a.lZ=0;a.Ak=null;a.Ex=0;a.Dk=0;a.k4=null;a.kT=null;a.Dy=null;a.E6=null;a.uE=null;a.w4=null;a.iU=null;a.ih=null;a.jV=null;a.DG=null;a.r$=null;a.c6=null;a.Bv=null;a.pN=0;a.mB=0;a.ob=0;a.n2=0;a.ll=0;a.n9=null;a.oj=0.0;a.pV=0.0;}
function AKz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c6=new Bg;a.pN=0;a.n9=new AC8;a.pz=c;a.lZ=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.Y=b;a.cd=Kz(c,4,4,1);i=ALw(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B7(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Q6;Jv();c=A6H;m.eT=b;m.h5=c;m.tR=j.length/c.nd|0;m.Bp
=l.length;n=b.createBuffer();m.wP=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.vY=null;n=b.createBuffer();m.vw=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.r$=m;a.Dk=Nw(g,C(56));c=new Y5;c.d0=b;a.Ak=c;a.oj=e;a.pV=f;d=b.getParameter(3379);a.Ex=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Di,9);i=k.data;c=A3F(b);a.k4=c;i[0]=c;c=A4x(b,C(58));a.kT=c;i[1]=c;c=new Zp;H8(c,b,C(59),
C(60),A6H);a.Dy=c;i[2]=c;c=A5m(b);a.E6=c;i[3]=c;c=new PE;VD(c,b,C(61),C(62));a.uE=c;i[4]=c;c=A5z(b);a.w4=c;i[5]=c;c=A4d(b);a.iU=c;i[6]=c;c=A5h(b);a.ih=c;i[7]=c;c=A5i(b);a.jV=c;i[8]=c;a.DG=k;ADD(b,C(63));}
function TU(a,b,c,d){return Io(a,b,Cf(c,d));}
function Io(a,b,c){return H5(a,b,c,400,0);}
function HF(a,b,c){return Kz(a.pz,b,c,0);}
function D5(a,b,c,d){return Kz(a.pz,b,c,d);}
function EG(a,b){var c,d,e,f,g;c=a.Y;d=b.bn;e=b.bt;f=b.bf;g=b.bC;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B_(a,b){var c;if(b==a.mB)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.mB;a.mB=b;return c;}
function Nz(a,b,c){LS(a,b.a,b.b,c);}
function LS(a,b,c,d){var e,f;e=d.a;f=d.b;a.n2=1;a.ll=1;d=a.n9;d.tw=b;d.tx=c;d.tv=e;d.tu=f;ABM(a);}
function F9(a){a.n2=0;a.ll=0;ABM(a);}
function ABM(a){var b,c,d,e,f,g;b=a.ob;c=a.n2;if(b!=c){a.ob=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.ob&&a.ll){a.ll=0;d=a.Y;e=a.n9;b=e.tw;c=a.c6.b-e.tx|0;f=e.tu;c=c-f|0;g=e.tv;d.scissor(b,c,g,f);}}
function FZ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.r$;c=a.pN;d=b.h5.z2;e=b.eT;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eT;h=b.wP;e.bindBuffer(34962,h);i=b.h5.qn.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eT;m=k.jG;n=k.gp;o=b.h5.nd*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gp|0;j=j+1|0;}a:{e=b.vY;if(e!==null){c=0;b.eT.bindBuffer(34962,e);i=b.h5.za.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eT;j=e.jG;p=e.gp;m=e.se;n=b.h5.yl;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gp|0;g=g+1|0;}}}q=b.vw;if(q===null){c=b.tR;if(c>0)b.eT.drawArrays(4,0,c);}else{b.eT.bindBuffer(34963,q);k=b.eT;g=b.Bp;k.drawElements(4,g,5123,0);}a.pN=d;}
function Bt(a,b,c,d,e){Gp(a,a.k4);Gy(a.k4,a.Y,b,c,d,a.c6);d=a.k4;Fz(a.Y,d.A7,e);FZ(a);}
function AEf(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gp(a,a.ih);Gy(a.ih,a.Y,b,c,d,a.c6);j=a.ih;d=a.Y;k=j.wo;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.wn;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ih;Fz(a.Y,d.xg,i);FZ(a);}
function Mc(a,b,c,d,e,f,g,h){var i,j;Gp(a,a.jV);Gy(a.jV,a.Y,b,c,d,a.c6);d=a.jV;i=a.Y;j=d.tP;i.uniform2f(j,e,f);Fz(i,d.x1,g);d=a.jV;Fz(a.Y,d.wR,h);FZ(a);}
function D8(a,b,c,d,e,f,g,h,i){var j;j=!i?a.uE:a.w4;Gp(a,j);AKX(j,a.Y,!i?a.pV:a.oj);Gy(j,a.Y,b,c,d,a.c6);NZ(j,a.Y,f);AEk(j,a.Y,f,e);AJW(j,a.Y,g,h);FZ(a);}
function CW(a){var b,c;b=new Is;c=a.Ak;b.fz=new Bg;b.eI=c;b.f1=c.d0.createTexture();A6I=A6I+1|0;return b;}
function MY(a,b){ADD(a.Y,b);}
function Gp(a,b){var c,d;if(b!==a.Bv){c=a.Y;d=b.bE;c.useProgram(d);a.Bv=b;}}
function T$(){var a=this;NQ.call(a);a.C9=null;a.Dz=null;}
function H5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cd;g=AIM(b,c,d,e);Kt(f,g);h=f.db.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eq(f,C(64));m=Eq(f,C(65));h=new Ly;n=g;h.oi=b;h.oZ=c;h.Cw=d;h.CM=e;h.el=i;h.eF=j;h.Cn=l;h.p7=k;h.qX=n;h.tm=CY(i);h.Dr=CY(h.eF);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Cs=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Cj=b;return h;}
function Cu(){B.call(this);this.C=null;}
function Em(a,b){a.C=b;}
function A2D(a,b){return 0;}
function YK(){var a=this;B.call(a);a.bG=null;a.ow=null;a.bO=null;a.ft=null;a.c4=null;a.gH=null;a.g8=null;a.mg=null;a.mU=null;a.dp=null;a.e9=null;a.xy=0;}
function Tn(a,b){var c,d,e,f;DE(a.dp);c=(CA(!b.jM?a.ow:a.bG)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].A(b);if(f)break;if(b.oO)break;e=e+1|0;}return f;}
function RA(a,b,c){var d,e,f;DE(a.dp);d=(CA(a.gH)).data;e=d.length;f=0;while(f<e){if(d[f].h9(b,c))return 1;f=f+1|0;}return 0;}
function ACW(){B.call(this);this.q7=null;}
function AZT(a,b){var c;c=a.q7;if(Tn(c.cp,VZ(c,b,1)))D9(c,b);}
function ACX(){B.call(this);this.zR=null;}
function AZ4(a,b){var c;c=a.zR;if(Tn(c.cp,VZ(c,b,0)))D9(c,b);}
function ACY(){B.call(this);this.xP=null;}
function AQz(a,b){var c,d,e,f,g,h,i;c=a.xP;if(c.eo!==null){a:{b:{d=E9(c,b);e=c.cp;DE(e.dp);f=e.e9;if(f!==null)f.f(d);else{g=(CA(e.bO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}D9(c,b);}}
function ACZ(){B.call(this);this.vW=null;}
function AYJ(a,b){var c,d,e,f,g,h;c=a.vW;b.button;if(c.eo!==null)a:{d=E9(c,b);c=c.cp;e=b.button;DE(c.dp);if(c.e9===null){f=(CA(c.bO)).data;g=f.length;h=0;while(h<g){b=f[h].cv(d,e);if(b!==null){c.e9=b;c.xy=e;break a;}h=h+1|0;}}}}
function AC0(){B.call(this);this.tF=null;}
function AYW(a,b){var c,d,e,f,g,h,i;c=a.tF;b.button;if(c.eo!==null){d=E9(c,b);e=c.cp;f=b.button;DE(e.dp);if(f==e.xy&&e.e9!==null)e.e9=null;g=(CA(e.bO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dz(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D9(c,b);}}
function AC1(){B.call(this);this.rs=null;}
function AR3(a,b){var c,d,e,f,g,h,i,j,k;c=a.rs;if(c.eo!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cp;f=E9(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DE(e.dp);i=(CA(e.ft)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dx(f,d,h))break b;k=k+1|0;}}D9(c,b);}}
function AC2(){B.call(this);this.BT=null;}
function AOP(a,b){var c,d,e,f,g,h,i,j;c=a.BT;if(c.eo!==null){d=E9(c,b);e=c.cp;f=b.button;g=b.detail;DE(e.dp);h=(CA(e.bO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cu(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D9(c,b);}}
function AC3(){B.call(this);this.zq=null;}
function A20(a,b){var c,d,e,f,g,h,i;c=a.zq;if(c.eo!==null){d=E9(c,b);e=c.cp;DE(e.dp);f=(CA(e.c4)).data;g=f.length;h=0;a:{while(h<g){if(f[h].A(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D9(c,b);}}
function AC4(){B.call(this);this.xt=null;}
function AOm(a,b){var c,d,e,f,g,h;b=a.xt.cp;if(b.e9!==null){c=Ep();d=Ck(b.e9);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(CA(b.mU)).data;g=f.length;h=0;while(h<g){f[h].g();h=h+1|0;}DE(b.dp);}
function AC5(){B.call(this);this.vs=null;}
function ASL(a,b){var c,d,e;b=a.vs.cp;c=(CA(b.mg)).data;d=c.length;e=0;while(e<d){c[e].g();e=e+1|0;}if(b.e9!==null)b.e9=null;DE(b.dp);}
function VS(){B.call(this);this.uX=null;}
function A2E(a,b){var c;c=a.uX;if(c.eo!==null)E9(c,b);}
function VT(){B.call(this);this.uf=null;}
function AQh(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.uf;if(Wz()===c.jz){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(CA(c.cp.g8)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cY();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cp.dp;m=new Pr;m.vC=k;m.vD=l;g.getAsString(Bx(m,"accept"));D9(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function VU(){B.call(this);this.wE=null;}
function AQF(a,b){var c;c=a.wE;if(Wz()===c.jz&&RA(c.cp,ABk(c,b),0))D9(c,b);}
function VV(){B.call(this);this.Bn=null;}
function AZ_(a,b){var c;c=a.Bn;if(Wz()===c.jz&&RA(c.cp,ABk(c,b),1))D9(c,b);}
var ABD=G(0);
var ABO=G();
function Kz(a,b,c,d){var e,f,g,h,i;e=new ZL;e.jh=d;A6q=A6q+1|0;e.nV=b;e.no=c;f=(Ew()).createElement("canvas");e.i9=f;g=b;f.width=g;h=e.i9;f=c;h.height=f;if(!d)g=e.i9.getContext("2d");else{i=e.i9;h=AVM();g=i.getContext("2d",h);}e.db=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ABN=G();
function APx(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function OJ(){var a=this;B.call(a);a.O=null;a.p=null;a.bV=null;}
var Kr=G();
var A6a=null;function MV(a,b,c){return b.mn(c);}
function AFW(){A6a=new Kr;}
function AHp(){var a=this;B.call(a);a.g$=null;a.iD=null;a.gq=0;}
function CU(a){var b=new AHp();AOM(b,a);return b;}
function AOM(a,b){a.g$=b;}
function Bc(a,b){var c,d,e;c=a.gq;d=a.g$;if(c==d.data.length)a.g$=C6(d,c+4|0);d=a.g$.data;e=a.gq;a.gq=e+1|0;d[e]=b;a.iD=null;}
function CA(a){var b;b=a.iD;if(!(b!==null&&b.data.length==a.gq))a.iD=C6(a.g$,a.gq);return a.iD;}
var CV=G(0);
var Cq=G(0);
var CC=G(0);
function AYl(a,b){return 0;}
function ATw(a,b,c){return null;}
function ALV(a,b,c){return 0;}
function A0m(a,b,c,d){return 0;}
var EH=G(0);
var C$=G(0);
var Fw=G(0);
var DQ=G(0);
var FQ=G(0);
function Ra(){B.call(this);this.CB=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BH(a,b){var c=new Bg();QF(c,a,b);return c;}
function AJN(a){var b=new Bg();ANs(b,a);return b;}
function QF(a,b,c){a.a=b;a.b=c;}
function ANs(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function V(a,b,c){a.a=b;a.b=c;}
function AHV(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function APo(a,b){var c;a:{b:{if(a!==b){if(BE(b)!==BE(a))break b;if(!JU(a,b))break b;}c=1;break a;}c=0;}return c;}
function JU(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AC8(){var a=this;B.call(a);a.tw=0;a.tx=0;a.tv=0;a.tu=0;}
var AGW=G();
var AIs=G(0);
function Y5(){B.call(this);this.d0=null;}
function N8(){var a=this;B.call(a);a.bE=null;a.E8=null;}
function AJ0(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bu(),g);Bk(Ep(),C(74));Bk(Ep(),d);Bk(Ep(),C(74));b=new Bw;Bn(b,g);N(b);}
function Di(){var a=this;N8.call(a);a.xs=null;a.sA=null;a.nR=null;}
function A6J(a,b,c,d){var e=new Di();H8(e,a,b,c,d);return e;}
function H8(a,b,c,d,e){var f,g,h,i,j,k;a.E8=e;f=AJ0(b,35633,c);d=AJ0(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bE=g;h=e.t0.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bE;k=c.jG;c=c.sH;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bE;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADD(b,C(75));a.nR=new Bg;c=a.bE;a.xs=b.getUniformLocation(c,"uResolution");c=a.bE;a.sA=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bw;c=new K;M(c);H(H(c,C(76)),d);Bn(b,L(c));N(b);}
function AFg(a,b,c){var d,e,f;if(!JU(a.nR,c)){Ct(a.nR,c);d=a.xs;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gy(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sA;b.uniform4f(e,i,l,h,j);AFg(a,b,f);}
function AKE(){Di.call(this);this.A7=null;}
function A3F(a){var b=new AKE();AX8(b,a);return b;}
function AX8(a,b){var c;Jv();H8(a,b,C(59),C(77),A6H);c=a.bE;a.A7=b.getUniformLocation(c,"uColor");}
function Fn(){Di.call(this);this.tB=null;}
function A4x(a,b){var c=new Fn();ABm(c,a,b);return c;}
function A6K(a,b,c){var d=new Fn();ABq(d,a,b,c);return d;}
function ABm(a,b,c){ABq(a,b,C(59),c);}
function ABq(a,b,c,d){Jv();H8(a,b,c,d,A6H);c=a.bE;a.tB=b.getUniformLocation(c,"sDiffuse");}
function NZ(a,b,c){var d;d=a.tB;b.uniform1i(d,0);b.activeTexture(33984);c=c.f1;b.bindTexture(3553,c);}
var Zp=G(Di);
function AFQ(){Fn.call(this);this.Cd=null;}
function A5m(a){var b=new AFQ();ARB(b,a);return b;}
function ARB(a,b){var c;ABm(a,b,C(78));c=a.bE;a.Cd=b.getUniformLocation(c,"uContrast");}
function Hq(){var a=this;Fn.call(a);a.r2=null;a.sP=null;a.tN=null;a.Ac=null;a.qB=0.0;}
function A6L(a,b,c){var d=new Hq();VD(d,a,b,c);return d;}
function VD(a,b,c,d){ABq(a,b,c,d);c=a.bE;a.r2=b.getUniformLocation(c,"uTexTransform");c=a.bE;a.sP=b.getUniformLocation(c,"uColor");c=a.bE;a.tN=b.getUniformLocation(c,"uBgColor");c=a.bE;a.Ac=b.getUniformLocation(c,"uTextPow");}
function AKX(a,b,c){var d;if(a.qB!==c){a.qB=c;d=a.Ac;b.uniform2f(d,c,0.0);}}
function AJW(a,b,c,d){Fz(b,a.sP,c);Fz(b,a.tN,d);}
function AEk(a,b,c,d){var e,f,g,h,i,j;c=c.fz;e=c.a;f=c.b;g=d.bn;h=e;g=g/h;i=d.bt;j=f;i=i/j;h=d.bf/h;j=d.bC/j;c=a.r2;b.uniform4f(c,g,i,h,j);}
var PE=G(Hq);
var AHE=G(Hq);
function A5z(a){var b=new AHE();AW2(b,a);return b;}
function AW2(a,b){VD(a,b,C(61),C(79));}
function AIF(){var a=this;Fn.call(a);a.vZ=null;a.vX=null;a.sQ=null;}
function A4d(a){var b=new AIF();ANS(b,a);return b;}
function ANS(a,b){var c,d;ABm(a,b,C(80));c=a.bE;a.vZ=b.getUniformLocation(c,"uColorB");d=a.bE;a.vX=b.getUniformLocation(d,"uColorF");d=a.bE;a.sQ=b.getUniformLocation(d,"uContrast");}
function AJ$(){var a=this;Di.call(a);a.xg=null;a.wo=null;a.wn=null;}
function A5h(a){var b=new AJ$();AW5(b,a);return b;}
function AW5(a,b){var c;Jv();H8(a,b,C(59),C(81),A6H);c=a.bE;a.xg=b.getUniformLocation(c,"uColor");c=a.bE;a.wo=b.getUniformLocation(c,"uPoints1");c=a.bE;a.wn=b.getUniformLocation(c,"uPoints2");}
function AEN(){var a=this;Di.call(a);a.wR=null;a.tP=null;a.x1=null;}
function A5i(a){var b=new AEN();AVZ(b,a);return b;}
function AVZ(a,b){var c;Jv();H8(a,b,C(59),C(82),A6H);c=a.bE;a.wR=b.getUniformLocation(c,"uColor");c=a.bE;a.tP=b.getUniformLocation(c,"uBaseline");c=a.bE;a.x1=b.getUniformLocation(c,"uScaleHExp");}
var ZY=G(0);
var ALe=G(0);
function Fz(b,c,d){var e,f,g,h;e=d.bn;f=d.bt;g=d.bf;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ADD(b,c){var d,e;d=b.getError();if(d){b=Bu();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Y4(){var a=this;B.call(a);a.Ei=null;a.Ek=null;a.Ej=null;}
function Q6(){var a=this;B.call(a);a.eT=null;a.h5=null;a.wP=null;a.vY=null;a.vw=null;a.tR=0;a.Bp=0;}
function CG(){var a=this;B.call(a);a.Eh=null;a.fP=0;}
function DL(a,b,c){a.Eh=b;a.fP=c;}
function G4(){var a=this;CG.call(a);a.t0=null;a.qn=null;a.za=null;a.nd=0;a.yl=0;a.z2=0;}
var A6H=null;var A6M=null;function Jv(){Jv=Bo(G4);APb();}
function APb(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G4;c=Q(Ej,2);d=c.data;A15();d[0]=A6N;d[1]=A6O;Jv();DL(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.p5.fP){case 0:f=f+l.gp|0;h=h+1|0;break a;case 1:e=e+l.gp|0;g=g+1|0;break a;default:}}i=i|1<<l.jG;k=k+1|0;}b.t0=c;b.nd=e;b.yl=f;b.z2=i;c=Q(Ej,g);m=c.data;b.qn=c;c=Q(Ej,h);n=c.data;b.za=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.p5.fP){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A6H
=b;c=Q(G4,1);c.data[0]=b;A6M=c;}
var Ms=G(0);
var SZ=G(0);
var ABS=G(0);
var GO=G();
function MS(){GO.call(this);this.B6=null;}
function AFx(){var a=this;MS.call(a);a.Di=0;a.nk=0;a.lD=null;a.m0=null;a.uz=null;}
function AQO(a,b){var c=new AFx();A1P(c,a,b);return c;}
function A1P(a,b,c){a.B6=b;b=new K;M(b);a.lD=b;a.m0=B7(32);a.Di=c;AFs();a.uz=A6P;}
function AA6(a,b,c,d){var e,$$je;e=a.B6;if(e===null)a.nk=1;if(!(a.nk?0:1))return;a:{try{e.mS(b,c,d);break a;}catch($$e){$$je=EV($$e);if($$je instanceof I5){}else{throw $$e;}}a.nk=1;}}
function Xw(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AJz(b,c,d-c|0);e=DM(Bd(16,Be(e.length,1024)));g=AJn(e,0,e.data.length);h=a.uz;i=new QB;b=DM(1);j=b.data;j[0]=63;Hh();k=A6Q;i.nU=k;i.np=k;c=j.length;if(c&&c>=i.wm){i.Eg=h;i.sF=b.hu();i.Dd=2.0;i.wm=4.0;i.x6=B7(512);i.rp=DM(512);k=A6R;if(k===null){i=new BS;Bn(i,C(84));N(i);}i.nU=k;i.np=k;a:while(true){if(i.lv==3){f=new C8;X(f);N(f);}i.lv=2;b:{while(true){try{k=AEF(i,f,g);}catch($$e){$$je=EV($$e);if($$je instanceof Bw){f=$$je;break a;}else{throw $$e;}}if(IY(k))
{d=Cg(f);if(d<=0)break b;k=Ev(d);}else if(Ic(k))break;h=!Mj(k)?i.nU:i.np;c:{if(h!==A6R){if(h===A6S)break c;else break b;}d=Cg(g);b=i.sF;l=b.data.length;if(d<l){k=A6T;break b;}ADk(g,b,0,l);}Fs(f,f.Z+K4(k)|0);}}l=Ic(k);AA6(a,e,0,g.Z);PN(g);if(!l){while(true){d=i.lv;if(d!=2&&d!=4){f=new C8;X(f);N(f);}f=A6U;if(f===f)i.lv=3;l=Ic(f);AA6(a,e,0,g.Z);PN(g);if(!l)break;}return;}}N(AWB(f));}i=new BS;Bn(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BM(BU(a.lD,b),10);b=a.lD;c=b.L;d=a.m0;if(c>d.data.length)d=B7(c);e=0;f=0;if(e>c){b=new BI;Bn(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Xw(a,d,0,c);a.lD.L=0;}
function HA(){GO.call(this);this.EW=null;}
function V5(a){a.EW=DM(1);}
var LE=G(HA);
var A6t=null;function APq(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGD(){var b;b=new LE;V5(b);A6t=b;}
function Ej(){var a=this;CG.call(a);a.sH=null;a.p5=null;a.gp=0;a.se=0;a.jG=0;}
var A6N=null;var A6O=null;var A6V=null;function A15(){A15=Bo(Ej);AXB();}
function A3P(a,b,c,d,e,f,g){var h=new Ej();UK(h,a,b,c,d,e,f,g);return h;}
function UK(a,b,c,d,e,f,g,h){A15();DL(a,b,c);a.sH=d;a.p5=e;a.gp=f;a.se=g;a.jG=h;}
function AXB(){var b;b=new Ej;AQv();UK(b,C(87),0,C(88),A6W,2,0,0);A6N=b;b=A3P(C(89),1,C(90),A6W,2,0,1);A6O=b;A6V=I(Ej,[A6N,b]);}
function MK(){var a=this;B.call(a);a.D9=null;a.EA=null;}
function AGM(b){var c,d;if(Gl(b))N(AI3(b));if(!AKp(P(b,0)))N(AI3(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKp(d))break a;else N(AI3(b));}}c=c+1|0;}}
function AKp(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mv=G(MK);
var A6P=null;function AFs(){AFs=Bo(Mv);ANR();}
function AGY(a){var b,c;b=new S5;b.go=C(91);Hh();c=A6Q;b.jo=c;b.n0=c;b.Ev=a;b.wu=0.3333333432674408;b.CO=0.5;b.xk=DM(512);b.zP=B7(512);return b;}
function ANR(){var b,c,d,e,f;b=new Mv;AFs();c=Q(BK,0);d=c.data;AGM(C(92));e=d.length;f=0;while(f<e){AGM(d[f]);f=f+1|0;}b.D9=C(92);b.EA=c.hu();A6P=b;}
function Ye(){var a=this;B.call(a);a.gf=null;a.qj=null;a.mC=null;a.z6=null;a.sr=null;a.sD=null;}
function AI6(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gf,b,c));}
function OZ(a,b){var c,d,e,f,g,h,i,$$je;c=new BK;d=b;while(a.qj[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gf,b,d));f=e.data;Fb();d=f.length;AFs();g=A6P;h=AJn(e,0,d);a:{try{i=AGY(g);Hh();g=AIz(AGg(AKS(i,A6R),A6R),h);break a;}catch($$e){$$je=EV($$e);if($$je instanceof Ga){g=$$je;}else{throw $$e;}}h=new ADu;h.kF=1;h.k2=1;h.iT=C(93);h.nq=g;N(h);}if(!g.Z&&g.ej==g.ok)c.b$=g.iF;else{f=B7(Cg(g));e=f.data;c.b$=f;Pl(g,f,0,e.length);}return c;}
function WB(a,b){var c,d,e;c=new BK;d=b>>>1|0;e=d;while(a.mC[e]){e=e+1|0;}d=e-d|0;Jq(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gf,b,d)));return c;}
var H4=G(CG);
var A6X=null;var A6W=null;var A6Y=null;function AQv(){AQv=Bo(H4);AWO();}
function ANM(a,b){var c=new H4();AKw(c,a,b);return c;}
function AKw(a,b,c){AQv();DL(a,b,c);}
function AWO(){var b;A6X=ANM(C(94),0);b=ANM(C(95),1);A6W=b;A6Y=I(H4,[A6X,b]);}
var NE=G(HA);
var A6u=null;function AN1(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHT(){var b;b=new NE;V5(b);A6u=b;}
function AGR(){BS.call(this);this.Ci=null;}
function AI3(a){var b=new AGR();AS4(b,a);return b;}
function AS4(a,b){X(a);a.Ci=b;}
var Uj=G(Ex);
var Mu=G(0);
function ADR(){B.call(this);this.yn=null;}
function ASu(a,b){a.yn.setPointerCapture(b.pointerId);}
function ADS(){B.call(this);this.xD=null;}
function AMD(a,b){a.xD.releasePointerCapture(b.pointerId);}
function Ia(){var a=this;B.call(a);a.ok=0;a.Z=0;a.ej=0;a.jK=0;}
function ACE(a,b){a.jK=(-1);a.ok=b;a.ej=b;}
function Fs(a,b){var c,d,e;if(b>=0&&b<=a.ej){a.Z=b;if(b<a.jK)a.jK=0;return a;}c=new BS;d=a.ej;e=new K;M(e);BM(U(H(U(H(e,C(96)),b),C(97)),d),93);Bn(c,L(e));N(c);}
function Cg(a){return a.ej-a.Z|0;}
function D_(a){return a.Z>=a.ej?0:1;}
var AAa=G(0);
var Lz=G(Ia);
function AHH(b){var c,d;if(b>=0)return ARM(0,b,B7(b),0,b,0);c=new BS;d=new K;M(d);U(H(d,C(98)),b);Bn(c,L(d));N(c);}
function AJz(b,c,d){return ARM(0,b.data.length,b,c,c+d|0,0);}
function Pl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BI;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bn(h,L(i));N(h);}if(Cg(a)<d){j=new Od;X(j);N(j);}if(d<0){j=new BI;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bn(j,L(k));N(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iF.data[m+a.p8|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BI;d=b.length;k=new K;M(k);BM(U(H(U(H(k,C(103)),c),C(97)),d),41);Bn(j,L(k));N(j);}
function Nf(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.qk){b=new Km;X(b);N(b);}e=d-c|0;if(Cg(a)<e){b=new JG;X(b);N(b);}if(c>J(b)){f=new BI;d=J(b);b=new K;M(b);BM(U(H(U(H(b,C(104)),c),C(97)),d),41);Bn(f,L(b));N(f);}if(d>J(b)){f=new BI;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bn(f,L(b));N(f);}if(c>d){b=new BI;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bn(b,L(f));N(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;AAg(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function M6(){var a=this;Ia.call(a);a.nj=0;a.pQ=null;a.C1=null;}
function AJn(b,c,d){var e,f,g;e=b.data;f=new ADj;g=e.length;d=c+d|0;ACE(f,g);AX$();f.C1=A6Z;f.nj=0;f.pQ=b;f.Z=c;f.ej=d;f.C5=0;f.wO=0;return f;}
function ADk(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.wO){e=new Km;X(e);N(e);}if(Cg(a)<d){e=new JG;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BI;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bn(i,L(j));N(i);}if(d<0){e=new BI;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bn(e,L(i));N(e);}h=a.Z;k=h+a.nj|0;l=0;while(l<d){b=a.pQ.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BI;d=b.length;i=new K;M(i);BM(U(H(U(H(i,C(103)),c),C(97)),d),41);Bn(e,
L(i));N(e);}
function PN(a){a.Z=0;a.ej=a.ok;a.jK=(-1);return a;}
function IE(){B.call(this);this.DJ=null;}
var A6S=null;var A6R=null;var A6Q=null;function Hh(){Hh=Bo(IE);AQl();}
function AHs(a){var b=new IE();AKn(b,a);return b;}
function AKn(a,b){Hh();a.DJ=b;}
function AQl(){A6S=AHs(C(109));A6R=AHs(C(110));A6Q=AHs(C(111));}
var Pa=G(Cu);
function AQc(a){}
function AO6(a,b,c){}
function HJ(){var a=this;Cu.call(a);a.dS=null;a.q=null;}
function ACD(a,b){var c,d,e;Em(a,b);a.dS=AIL(0,0,64);c=new Tv;c.bR=new Bg;c.ep=CU(Q(C2,0));c.cW=new Bg;c.p6=new Bg;c.B8=new B0;c.B9=new B0;d=b.O;c.b4=d;e=b.bV;c.hA=e;c.cw=d.lZ;c.cR=Rk(e);d=b.p.mU;e=new Y0;e.tA=c;Bc(d,e);d=b.p.mg;e=new YZ;e.vS=c;Bc(d,e);a.q=c;Bc(b.p.bG,new Z0);b=b.p.bG;c=a.q;BG(c);d=new ZZ;d.xj=c;Bc(b,d);}
function Hx(a){EG(a.C.O,a.dS);}
function AF1(a,b,c){var d,e,f,g,h;a:{d=a.q;Ct(d.bR,b);e=d.cb;if(e!==c){d.cb=c;f=(CA(d.ep)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gI(e,c);h=h+1|0;}}}}
function CO(){HJ.call(this);this.bb=null;}
function G8(a,b){KM(a,b,1);}
function KM(a,b,c){var d,e,f;ACD(a,b);d=new ADy;e=a.q;d.cQ=BD();d.dM=e;a.bb=d;Bc(a.q.ep,d);Bc(b.p.bO,a.bb);e=b.p.ft;f=a.bb;BG(f);d=new We;d.vO=f;Bc(e,d);if(c){b=b.p.bO;d=a.q.cR;e=new WW;e.wl=d;Bc(b,e);}}
function ANV(a){Hx(a);JM(a.bb);}
function Iz(a,b,c){var d,e;AF1(a,b,c);b=a.bb;d=0;while(true){e=b.cQ;if(d>=e.m)break;Bv(e,d);d=d+1|0;}}
function AMv(a,b){var c,d,e,f;c=a.bb;d=0;e=0;while(true){f=c.cQ;if(e>=f.m)break;d=(Bv(f,e)).W.cg(b)|d;e=e+1|0;}return d;}
var GL=G(0);
function AHy(a){a.hK(IA());}
function Ho(a){a.hK(Mg());}
function AIh(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IU;c=new J7;d=new Hi;AGZ();KT(d,A60);Mw(c,d,BV(A61),BV(A62),BV(A63),BV(A61),BV(A64),BV(A65),BV(A66),BV(A67),BV(A68),BV(A69));e=AJt(S(C(112)));AGm();f=(A6$.hu()).data;g=f.length;h=Q(Kk,g);i=h.data;j=0;while(j<g){i[j]=f[j].pr;j=j+1|0;}k=AKa(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new IV;m=new I3;AVi();d=A6_;OA(m,d,A7a,A7b,A7c,A7d,d);LT(l,m,AKT(),AHz(S(C(117)),S(C(112)),CB(0)),AKT(),AHW(1,0.07500000298023224),A7e,A7f);LH(b,c,e,h,k,l,AEm(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.hK(b);}
var Nd=G(0);
var F8=G(0);
function KR(){var a=this;CO.call(a);a.F=null;a.H=null;a.iO=null;a.jp=0;a.k6=null;a.mu=null;a.fG=null;}
function A5j(a){var b=new KR();AFu(b,a);return b;}
function AFu(a,b){var c,d,e;KM(a,b,0);a.fG=AV6(a.q);c=P$(a.bb);a.iO=c;a.F=K7(a.q,c);c=K7(a.q,a.iO);a.H=c;a.mu=ATz(a.F,c);c=a.F;c.ce=1;ACS(a.fG,c,a.H);c=a.F;d=new TQ;d.Be=a;c.m5=d;c=a.H;d=new TR;d.yO=a;c.m5=d;AHk(a,0);MX(a.q,a.F);Bc(b.p.ft,a);Bc(b.p.bO,a);c=b.p.bG;d=new TS;d.wX=a;Bc(c,d);c=b.p.bG;d=new HQ;e=new TO;e.uO=a;Iq(d,b,e);Bc(c,d);Bc(b.p.gH,a);Bc(b.p.g8,a);b=b.p.c4;c=new TP;c.sT=a;Bc(b,c);Ho(a);}
function V$(a,b){if(a.F===b)a.jp=a.jp|1;if(a.H===b)a.jp=a.jp|2;if((a.jp&3)==3)AKZ(a);}
function AHk(a,b){Se(a.F,b);Se(a.H,b);}
function A2h(a,b,c){if(DO(a.q,a.F))return G$(a.F,b,c);if(!DO(a.q,a.H))return 0;return G$(a.H,b,c);}
function AFM(a){if(DO(a.q,a.F))return VN(a,a.F);if(!DO(a.q,a.H))return null;return VN(a,a.H);}
function VN(a,b){var c;c=new SP;c.sw=b;return c;}
function AKZ(a){var b,c,d,e,f,g;Bk(Bu(),C(122));b=a.F.d.h;c=a.H.d.h;d=E_(b);e=E_(c);f=AEX(b);g=AEX(c);b=a.C.bV;c=new Yo;c.xl=a;CT(b,c,C(123),I(B,[d,f,e,g]));}
function ASe(a,b){var c,d;c=IX(a.F,b);d=IX(a.H,b);return !c&&!d?0:1;}
function AYT(a){var b;Hx(a);Il(a.F);Il(a.H);b=a.fG;AGz(b,b.hc.b4);JM(a.bb);}
function AXV(a){return Gw(0);}
function ASC(a){W8(a.F);W8(a.H);}
function AYP(a){AD4(a.F);AD4(a.H);}
function ATc(a,b){PU(a.F,b);PU(a.H,b);}
function AZF(a,b){OK(a.q,b);}
function ANh(a,b){if(J6(a.bb,b)){LW(a.F);LW(a.H);}}
function API(a,b,c){Iz(a,b,c);AF0(a,b,c);}
function AF0(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cf(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;QF(f,g-h|0,b.b);Mt(a.F,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mt(a.H,d,f,c);V(a.fG.i,f.a,d.b);V(a.fG.k,d.a-f.a|0,f.b);}
function AL0(a,b){BG(b);Ip(a.iO,b);HB(a.F,b);HB(a.H,b);a.fG.kb=b;}
function AHe(a,b){if(b.bm!=121)return 0;return 1;}
function AJm(a,b){var c,d,e,f;if(DO(a.q,a.F)){c=a.iO;d=b.j;e=a.F;f=new Qc;f.qo=a;GI(c,d,e,a,a,a,f);}if(DO(a.q,a.H)){c=a.iO;b=b.j;d=a.H;e=new Qb;e.BA=a;GI(c,b,d,a,a,a,e);}return 1;}
function AZX(a,b){var c,d;c=B3(a.F,b.j)&&Xo(a.F,b)?1:0;d=B3(a.H,b.j)&&Xo(a.H,b)?1:0;return !c&&!d?0:1;}
function AXX(a,b,c,d){var e,f;e=B3(a.F,b.j)&&O1(a.F,b,c,d)?1:0;f=B3(a.H,b.j)&&O1(a.H,b,c,d)?1:0;return !e&&!f?0:1;}
function AQy(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.F,b.j);e=B3(a.H,b.j);f=a.q;g=f.d_;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.H?0:1;if(d&&!(!h&&!k))FI(f,i);if(e&&!(!h&&!j))FI(a.q,a.H);if(d){i=Wn(a.F,b,c);if(i!==null)return i;}return !e?null:Wn(a.H,b,c);}
function A0o(a,b,c){var d,e,f,g;d=B3(a.F,b.j);e=B3(a.H,b.j);f=d&&SY(a.F,b,c)?1:0;g=e&&SY(a.H,b,c)?1:0;return !f&&!g?0:1;}
function ARQ(a,b,c,d){var e,f,g,h;e=B3(a.F,b.j);f=B3(a.H,b.j);g=e&&LP(a.F,b,c,d)?1:0;h=f&&LP(a.H,b,c,d)?1:0;return !g&&!h?0:1;}
function AYo(a){return AFM(a);}
var AG1=G(KR);
function A4P(a){var b=new AG1();A18(b,a);return b;}
function A18(a,b){var c;AFu(a,b);a.F.eY=1;a.H.eY=1;c=new Tj;c.wZ=a;Qd(a,c,C(124));c=new Tk;c.z9=a;Qd(a,c,C(125));}
function AQL(a){return Gw(1);}
function Qd(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new OT;d=d.then(Bx(e,"f"));f=new OV;f.tD=b;f.tC=c;g=new OU;d.then(Bx(f,"f"),Bx(g,"f"));}
var AHn=G();
function A1C(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(126)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(NU(b)){case -1570047148:if(!Bj(b,C(127)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(128)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(129)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(130)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(131)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(132)))break a;d=19;break a;case -811765794:if(!Bj(b,C(133)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(134)))break a;d=11;break a;case -631889171:if(!Bj(b,C(135)))break a;d=9;break a;case -536831301:if(!Bj(b,C(136)))break a;d=25;break a;case -439438829:if(!Bj(b,C(137)))break a;d=21;break a;case -357667878:if(!Bj(b,C(138)))break a;d=22;break a;case -223304637:if(!Bj(b,C(139)))break a;d=2;break a;case -193916863:if(!Bj(b,C(140)))break a;d=23;break a;case 2129957:if(!Bj(b,C(141)))break a;d=1;break a;case 3343967:if(!Bj(b,C(142)))break a;d=10;break a;case 3556498:if(!Bj(b,C(143)))break a;d=4;break a;case 91636708:if
(!Bj(b,C(144)))break a;d=24;break a;case 485517998:if(!Bj(b,C(145)))break a;d=7;break a;case 544901384:if(!Bj(b,C(146)))break a;d=3;break a;case 675521850:if(!Bj(b,C(147)))break a;d=20;break a;case 1030621992:if(!Bj(b,C(148)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(149)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(150)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(151)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(152)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(153)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new Uv;break b;case 3:case 4:b=new Us;break b;case 5:b=new Ur;break b;case 6:b=new Uu;break b;case 7:b=new Ut;break b;case 8:b=new Uz;break b;case 9:case 10:b=new Uy;break b;case 11:b=new UB;break b;case 12:b=new UA;break b;case 13:b=new AAR;break b;case 14:b=new AAQ;break b;case 15:b=new AAP;break b;case 16:b=new AAE;break b;case 17:b=new AAD;break b;case 18:b=new AAB;break b;case 19:b=new AAA;break b;case 20:b=new AAz;break b;case 21:b=new AAy;break b;case 22:b=new AAx;break b;case 23:b
=new AAI;break b;case 24:b=new AAH;break b;case 25:b=new AAG;break b;case 26:b=new AAF;break b;case 27:b=new AAK;break b;default:b=new AAJ;break b;}b=new Uw;}return b;}
var AJw=G();
var KX=G(Lz);
function AFL(){var a=this;KX.call(a);a.qk=0;a.p8=0;a.iF=null;}
function ARM(a,b,c,d,e,f){var g=new AFL();AUz(g,a,b,c,d,e,f);return g;}
function AUz(a,b,c,d,e,f,g){ACE(a,c);a.Z=e;a.ej=f;a.p8=b;a.qk=g;a.iF=d;}
function AAg(a,b,c){a.iF.data[b+a.p8|0]=c;}
function Lr(){var a=this;B.call(a);a.Eg=null;a.sF=null;a.Dd=0.0;a.wm=0.0;a.nU=null;a.np=null;a.lv=0;}
function Oa(){var a=this;B.call(a);a.h8=0;a.j9=0;}
var A6U=null;var A6T=null;function AEJ(a,b){var c=new Oa();AIJ(c,a,b);return c;}
function AIJ(a,b,c){a.h8=b;a.j9=c;}
function IY(a){return a.h8?0:1;}
function Ic(a){return a.h8!=1?0:1;}
function ND(a){return !Rp(a)&&!Mj(a)?0:1;}
function Rp(a){return a.h8!=2?0:1;}
function Mj(a){return a.h8!=3?0:1;}
function K4(a){var b;if(ND(a))return a.j9;b=new Eh;X(b);N(b);}
function Ev(b){return AEJ(2,b);}
function T8(a){var b,c;switch(a.h8){case 0:b=new Q7;X(b);N(b);case 1:b=new Vq;X(b);N(b);case 2:b=new T3;c=a.j9;X(b);b.DU=c;N(b);case 3:b=new Q0;c=a.j9;X(b);b.Fn=c;N(b);default:}}
function AIX(){A6U=AEJ(0,0);A6T=AEJ(1,0);}
var AED=G();
var I2=G(0);
var WN=G();
function AN7(a,b){return b.arrayBuffer();}
var WM=G();
function ARg(a,b){var c,d;c=new Yd;d=new Yb;return $rt_globals.WebAssembly.instantiate(b,APw(Bx(c,"f"),Bx(d,"f")));}
var WK=G();
function ARG(a,b){AMx(b);}
var WJ=G();
function AWh(a,b){AHv(b);}
var W=G(0);
function Tj(){B.call(this);this.wZ=null;}
function A2I(a,b){H0(a.wZ.F,b);}
function Tk(){B.call(this);this.z9=null;}
function AYt(a,b){H0(a.z9.H,b);}
var Uw=G();
function ATt(a,b){return A5j(b);}
var Uv=G();
function ALH(a,b){return A4c(b);}
var Us=G();
function AWY(a,b){return A4n(b);}
var Ur=G();
function AZD(a,b){var c,d,e,f,g;c=new AA7;Em(c,b);d=(IA()).bs.ef;c.EL=d;c.k_=AK0(d);c.i2=new Bg;c.h$=new Bg;c.di=KK();c.dW=KK();c.m$=Gw(1);b=b.p.bO;d=new Ws;d.l_=c;Bc(b,d);b=c.m$.data[DS()*c.m$.data.length|0];d=Io(c.C.O,b,10);c.mY=d;Cm(c.C.O.cd,d);e=Eq(c.C.O.cd,C(154));d=c.C.O.cd;f=new K;M(f);BM(f,43);H(f,b);g=CY(e+Eq(d,L(f)));c.jD=g;c.iK=BY(c.iK,AD8(c,1,g,b,c.mY,c.C.O));c.iJ=BY(c.iJ,AD8(c,0,c.jD,b,c.mY,c.C.O));Q$(c,c.di,c.iK);Q$(c,c.dW,c.iJ);Cw(c.di.X,1.0,1.0,1.0,1.0);Ff(c.di,c.k_);Cw(c.dW.X,1.0,1.0,1.0,1.0);Ff(c.dW,
c.k_);b=Bu();g=c.jD;d=new K;M(d);U(H(d,C(155)),g);Bk(b,L(d));return c;}
var Uu=G();
function ANP(a,b){var c,d,e;c=new Xq;G8(c,b);d=new Wp;d.nP=new Bg;d.oh=new Bg;c.yt=d;c.fb=AJy();c.dC=AJy();c.oy=DP(C(156),25.0);Bc(c.q.ep,c);d=b.p.bG;e=new ABy;e.up=c;Bc(d,e);Bc(b.p.bO,c);b=b.p.c4;d=new ABu;d.vm=c;Bc(b,d);AD_(c.dC);BP(c.dS,CB(43));b=Fe();JF(c.fb,b);JF(c.dC,b);b=c.fb;b.kQ=new ABv;d=c.dC;d.kQ=new ABw;d.o5=new P8;d.ws=new P9;Nk(b,(RH(0)).ke);Nk(c.dC,(RH(0)).ke);return c;}
var Ut=G();
function AUC(a,b){var c,d,e;c=new AAC;G8(c,b);Bc(c.q.ep,c);BP(c.dS,CB(43));d=b.p.bG;e=new Um;e.Cr=c;Bc(d,e);b=b.p.c4;d=new Un;d.A5=c;Bc(b,d);return c;}
var Uz=G();
function ANu(a,b){var c,d,e;c=new WS;ACD(c,b);c.hY=BD();c.gb=BD();c.r6=S(C(157));c.j8=UN();c.hX=0;d=c.q.ep;e=new O3;e.xO=c;Bc(d,e);Bc(b.p.bO,c);d=b.p.bG;e=new O2;e.vx=c;Bc(d,e);b=Io(b.O,C(156),35);c.kc=b;c.mh=AIi(E6(b));BP(c.dS,S(C(158)));return c;}
var Uy=G();
function AP5(a,b){var c,d,e,f;c=new SI;Em(c,b);c.h4=AHu();c.e6=0;c.uC=500;c.r7=IB(0,0,0,255,new B0);c.mw=20;c.w8=20;c.zW=IA();d=b.p.bO;e=new WD;e.lM=c;f=new TN;f.zO=e;e.rV=f;Bc(d,e);d=b.p.ft;e=new Z1;e.Am=c;Bc(d,e);c.ez=b.O;c.xw=Rk(b.bV);YJ(c.h4,Io(c.ez,C(156),c.w8),c.mw,c.ez.lZ);c.i1=I9();return c;}
var UB=G();
function A0Z(a,b){var c,d;c=new Q8;HM(c,b);b=b.p.bG;d=new QH;d.s1=c;Bc(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var UA=G();
function ALs(a,b){var c,d,e,f,g,h,i;c=new W9;G8(c,b);d=b.p.c4;e=new Rw;e.xS=c;Bc(d,e);d=b.bV;f=new PM;f.Ds=c;g=Q(B,1);g.data[0]=C(159);CT(d,f,C(160),g);h=new PL;h.EF=c;g=Q(B,1);g.data[0]=AJd([1,2,3,4,5]);CT(d,h,C(161),g);h=new PJ;h.B7=c;i=Q(B,1);i.data[0]=A3Q([1,2,3,4,5]);CT(d,h,C(162),i);h=new PH;h.EO=c;g=Q(B,1);g.data[0]=DX([1,2,3,4,5]);CT(d,h,C(163),g);d=b.p.bG;e=new HQ;h=new Rv;h.zS=c;Iq(e,b,h);Bc(d,e);return c;}
var AAR=G();
function ALC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Wu;HM(c,b);c.e4=H_(0,0,300,300);c.gw=S4(0,0,3,3);d=b.O;b=b.p.bO;e=new ABI;e.m6=c;Bc(b,e);b=AK8(d);c.AN=b;FM(c.e4,b);FV(c.e4);b=c.e4.bl;FF();BP(b,A7g);BP(c.e4.X,Dy(204,120,50));AQC();e=A7h;f=DM((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CW(d);switch(e.fP){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new E3;X(b);N(b);}b:
{WG(m,5,5,h);b=m.eI.d0;switch(e.fP){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new E3;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nF=m;V(c.gw.t,BZ(m),Do(c.nF));BP(c.gw.bl,c.p0);return c;}
var AAQ=G();
function AYy(a,b){var c,d,e;c=new SG;HM(c,b);c.gS=H_(0,0,300,300);c.mt=new Bg;c.kv=new Bg;c.jQ=new Bg;d=b.O;b=b.p.bO;e=new Xz;e.ko=c;Bc(b,e);b=AK8(d);c.q5=b;FM(c.gS,b);FV(c.gS);b=c.gS.bl;FF();BP(b,A7g);BP(c.gS.X,Dy(204,120,50));return c;}
var AAP=G();
function AQ0(a,b){var c,d,e,f;c=new AAr;Em(c,b);c.DE=20;c.Fo=11;c.D_=220;c.l8=new Bg;c.EV=5000;c.ir=1;c.gL=I(Hi,[CB(0),CB(255)]);c.eK=b.O;d=b.p.bO;e=new Yy;e.lW=c;f=new UJ;f.tp=e;e.qO=f;Bc(d,e);b=b.p.ft;d=new VY;d.rC=c;Bc(b,d);b=HF(c.eK,200,220);c.oG=b;Ht(b,C(156),20.0);b=HF(c.eK,200,20);c.gA=b;Ht(b,C(156),20.0);c.iG=I9();return c;}
var AAE=G();
function AN_(a,b){var c,d,e;c=new Ki;HM(c,b);Bc(b.p.bO,c);d=b.p.bG;e=new ADf;e.wr=c;Bc(d,e);Bc(b.p.gH,new ADe);d=b.p.gH;e=new ADd;e.sx=c;Bc(d,e);Bc(b.p.g8,new ADc);d=b.p.g8;e=new ADh;e.zw=c;Bc(d,e);b=!Vw(b.bV)?C(164):C(165);d=new K;M(d);H(H(d,C(166)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var AAD=G();
function AUP(a,b){var c,d;c=new St;HM(c,b);c.t$=CB(20);c.gh=H_(0,0,300,300);c.vB=DP(C(14),80.0);b=b.p.bG;d=new Sc;d.DL=c;Bc(b,d);return c;}
var AAB=G();
function A1Z(a,b){var c;c=new Te;OF(c,b);Hd(c.ch,0,0,300,300);V(c.dj,300,300);return c;}
var AAA=G();
function AQd(a,b){var c;c=new Td;OF(c,b);c.f0=new Bg;c.gi=new Bg;V(c.d8,150,140);V(c.dj,500,100);V(c.fp,150,200);V(c.eJ,500,250);return c;}
var AAz=G();
function A02(a,b){var c,d,e;c=new XU;G8(c,b);c.Ep=3;c.yi=DP(C(167),20.0);Bc(c.q.ep,c);BP(c.dS,CB(43));d=b.p.bG;e=new Zn;e.Dt=c;Bc(d,e);b=b.p.c4;d=new Zm;d.w3=c;Bc(b,d);return c;}
var AAy=G();
function ALl(a,b){return A4M(b);}
var AAx=G();
function A0O(a,b){var c,d,e,f;c=new Qs;H7(c,b);BP(c.dS,CB(43));c.l9=P$(c.bb);d=b.p.bG;e=new HQ;f=new Ps;f.Bd=c;Iq(e,b,f);Bc(d,e);b=b.p.c4;d=new Pt;d.y1=c;Bc(b,d);return c;}
var AAI=G();
function AZ5(a,b){var c,d;c=new RM;H7(c,b);c.px=null;c.mI=JQ();c.jr=JQ();b=b.p.c4;d=new Xr;d.xX=c;Bc(b,d);return c;}
var AAH=G();
function AM7(a,b){var c;c=new YQ;H7(c,b);c.vF=Mg();BP(c.dS,CB(43));return c;}
var AAG=G();
function AXI(a,b){return A4p(b);}
var AAF=G();
function AO1(a,b){var c,d,e;c=new PD;H7(c,b);c.uZ=Mg();BP(c.dS,CB(43));d=b.p.c4;e=new Uq;e.Co=c;Bc(d,e);b=b.p.bG;d=new Up;d.tO=c;Bc(b,d);return c;}
var AAK=G();
function AO2(a,b){var c,d;c=new TK;H7(c,b);c.mL=Mg();c.Fq=new L4;BP(c.dS,CB(43));b=b.p.c4;d=new AAS;d.qY=c;Bc(b,d);return c;}
var AAJ=G();
function AVx(a,b){var c;c=new OO;AHL(c,b);AKq(c.dV);return c;}
function ADb(){var a=this;B.call(a);a.um=null;a.AG=null;a.zU=null;}
function Id(){var a=this;B.call(a);a.bJ=0;a.cJ=0;a.dy=0;a.ky=0;}
function A7i(a,b,c,d){var e=new Id();ABL(e,a,b,c,d);return e;}
function ABL(a,b,c,d,e){a.bJ=d;a.cJ=b;a.dy=c;a.ky=e;}
function Ql(){var a=this;Id.call(a);a.ee=null;a.bm=0;a.jM=0;a.zt=0;a.oO=0;}
var AG2=G();
function US(b,c){return (b+(c/2|0)|0)/c|0;}
function YN(b,c,d){if(b<(2147483647/c|0))return US(Bb(b,c),d);return 0.5+c*b/d|0;}
function H$(b,c){return ((b+c|0)-1|0)/c|0;}
function Gz(b){return b+0.5|0;}
function CY(b){return b+0.5|0;}
function E5(b,c,d){return Bd(b,Be(c,d));}
function M5(b,c){return AIf(b)/AIf(c);}
function OH(){var a=this;Id.call(a);a.j=null;a.D$=null;}
var Tq=G(0);
function Pr(){var a=this;B.call(a);a.vC=null;a.vD=null;}
function AYz(a,b){var c,d;c=a.vC;d=a.vD;$rt_globals.console.info("paste plain string "+b);c.f(H3(b));DE(d);}
function ABY(){B.call(this);this.vV=null;}
function ACO(a,b){a.vV.clipboardData.setData("text/plain",$rt_ustr(b));}
function ADj(){var a=this;M6.call(a);a.C5=0;a.wO=0;}
function CE(){var a=this;B.call(a);a.i=null;a.k=null;a.bN=0.0;}
function AUB(){var a=new CE();E1(a);return a;}
function E1(a){a.i=new Bg;a.k=new Bg;}
function ASf(a){}
function AZv(a){return BH(0,0);}
function HN(a,b,c,d){var e;if(!JU(a.i,b)){a.mV(b);Ct(a.i,b);}if(!JU(a.k,c)){a.oX(c);Ct(a.k,c);}e=a.bN;if(e!==d){a.bN=d;a.ly(e,d);}}
function Dz(a,b){return Cf(b,a.bN);}
function B3(a,b){return Hw(b,a.i,a.k);}
function AKV(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AO4();Bt(b,d,e,f,A7j);}
function ACl(a,b){var c;c=a.i;LS(b,c.a,c.b,a.k);}
function AV_(a,b){return 0;}
function AP9(a,b){}
function ATY(a,b){}
function A0A(a,b,c){}
function AT6(a){}
function AOU(a,b,c,d){return 0;}
function AML(a,b,c){return null;}
function AQP(a,b,c){return 0;}
function ATL(a,b){return 0;}
function A0t(a,b,c,d){return 0;}
function AFj(){var a=this;CE.call(a);a.hc=null;a.li=null;a.lj=null;a.lg=null;a.lh=null;a.e1=null;a.hE=null;a.hF=null;a.kb=null;}
function AV6(a){var b=new AFj();AM_(b,a);return b;}
function AM_(a,b){E1(a);a.li=new Bg;a.lj=new Bg;a.lg=new Bg;a.lh=new Bg;a.hc=b;}
function ACS(a,b,c){a.hE=b;a.hF=c;}
function AGz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.i;Bt(b,c.a,c.b,a.k,a.kb.bs.ef);if(a.e1===null)return;d=Cz(a.hc,2.0);e=GG(a.e1,a.hE.lf(),1);f=GG(a.e1,a.hE.kp(),1);g=GG(a.e1,a.hF.lf(),0);h=GG(a.e1,a.hF.kp(),0);i=Be(e,g);j=Bd(f,h);h=BL(i,j);if(h<=0)B_(b,1);k=a.hE.uW();l=a.hF.pD();m=a.hc.p6;while(i<=j){n=a.e1.iu.data[i];if(n.oW){o=a.hE.hC(n.h7);p=a.hE.hC(n.h7+n.of|0);q=a.hF.hC(n.h6);r=a.hF.hC(n.h6+n.oe|0);V(a.li,a.i.a,o);V(a.lg,a.i.a,p);V(a.lj,a.i.a+a.k.a|0,q);V(a.lh,a.i.a+a.k.a|0,r);s=Bd(Be(o,q),
a.i.b);t=Be(Bd(p,r),a.i.b+a.k.b|0);if(t>s){V(m,a.k.a,t-s|0);c=a.kb;u=HZ(c.dF,c,n.oW);if(o==p){n=a.hc.cW;V(n,a.i.a-k.a|0,d);if(q>=o){c=a.lg;V(c,c.a,c.b+d|0);g=o;}else{g=o-d|0;c=a.li;V(c,c.a,c.b-d|0);}Bt(b,k.a,g,n,u);}if(q==r){n=a.hc.cW;V(n,l.a,d);if(o>=q){c=a.lh;V(c,c.a,c.b+d|0);}else{q=q-d|0;c=a.lj;V(c,c.a,c.b-d|0);}Bt(b,a.i.a+a.k.a|0,q,n,u);}AEf(b,a.i.a,s,m,a.li,a.lj,a.lg,a.lh,u);}}i=i+1|0;}if(h<=0)B_(b,0);}
function AFO(){var a=this;B.call(a);a.b6=null;a.dt=null;a.iz=null;}
function P$(a){var b=new AFO();AMb(b,a);return b;}
function AMb(a,b){a.b6=b;}
function Ip(a,b){var c;a.iz=b;c=a.dt;if(c!==null)GT(c,b.dI);c=a.b6.d7;if(c!==null)Ge(c,b.dI,b.kU);}
function Zq(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=APf();i=c.m;j=0;while(j<i){if(f===null){k=(Bv(c,j)).br;l=ZW(FH(Cc(g.h,k)));m=AAu(g.f$);}else{n=f.data;k=n[j].pA.nl;l=!BN(g.f$,n[j].l0)?C(21):ZW(FH(Cc(g.h,k)));m=AAu(n[j].l0);}if(J(l)>153){o=Cs(l,0,150);n=new K;M(n);H(H(n,o),C(168));l=L(n);}if(J(m)>153){n=Cs(m,0,150);o=new K;M(o);H(H(o,n),C(168));m=L(o);}n=Dm(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=Bv(c,j);}if(f!==null){q=new ADv;q.sB=d;q.sC=p;}else{q=new ADw;q.Bm=d;q.Bl
=o;}Wb(h,m,n,l,q);j=j+1|0;}r=AC7(h);if(a.dt!==null)AAZ(a);c=a.b6.dM;g=new Rd;f=new AAp;f.qL=a;f.qM=d;AKP(g,c,f);W4(g,r);d=a.iz;V8(g,d.dI,d.Bz);d=AEq(c);a.dt=d;d.pT=d.pT|1;d=GA(g,c);f=a.iz.dI;Jd(d,f.m1,f.oP);K9(a.dt,d);GT(a.dt,a.iz.dI);d=a.dt;f=new K;M(f);H(H(f,C(169)),e);FP(d,L(f));GD(a.b6,a.dt);d=a.dt;i=(d.R.k.b+Cz(d.bp,2.0)|0)+Cz(c,2.0)|0;s=(g.d2+g.eN|0)+g.hz|0;t=Cz(g.bT,5.0);e=BH(E5(t,b.a,g.bT.bR.a-s|0),E5(i,b.b,g.bT.bR.b-g.cF.b|0));Ys(g);KV(g);i=Ek(g);s=g.b2.data.length;i=Bb(i,s)+Bb(g.dR,s+1|0)|0;V(g.cF,
g.k.a,i);i=(g.d2+g.eN|0)+g.hz|0;b=g.bT;s=(b.bR.a-e.a|0)-Cz(b,5.0)|0;b=g.bT;t=(b.bR.b-e.b|0)-Cz(b,5.0)|0;d=BH(Be(i,s),Be(g.cF.b,t));Eu(a.dt,e,d);FI(c,g);}
function AAZ(a){Ku(a.b6,a.dt);NP(a.dt);a.dt=null;}
function Ld(a,b,c){var d,e;d=a.b6;e=a.iz;d=Y9(d,e.dI,e.kU);Lo(d,b,c);Fp(a.b6,d);}
function GI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=new SV;h.gk=a;h.bv=c;h.rv=g;h.jc=e;h.op=f;h.mk=d;c=LA();e=h.bv.d;d=Eb(e);e=Hz(e);f=h.bv.fx;if(Zd(f,d,e)!==null){i=new R6;i.wV=h;i.wW=b;D2(c,C(170),i);}if(Os(f,d,e)!==null){i=new R7;i.yG=h;i.yH=b;D2(c,C(171),i);}if(ABF(f,d,e)!==null){e=new R5;e.qx=h;e.qz=b;D2(c,C(172),e);}e=new R4;e.u9=h;e.u8=b;D2(c,C(173),e);HS(h);if(LZ()){if(!h.bv.eY){e=new Ry;e.Bi=h;D2(c,C(174),e);}e=new Rz;e.rZ=h;D2(c,C(175),e);if(!h.bv.eY&&Vw(HS(h))){e=new Rx;e.zJ=h;D2(c,C(176),e);}}e=LA();j
=Q(BK,5).data;j[0]=C(177);j[1]=C(178);j[2]=C(179);j[3]=C(180);j[4]=C(181);k=j.length;l=0;while(l<k){f=j[l];g=new Qm;g.wT=h;g.wU=f;D2(e,f,g);l=l+1|0;}FC(c,C(182),GU(e));m=LA();j=Q(B5,3);n=j.data;f=h.mk;BG(f);g=new Pe;g.rK=f;n[0]=C7(C(183),g);f=h.mk;BG(f);g=new Pf;g.sq=f;n[1]=C7(C(184),g);f=h.mk;BG(f);g=new Pd;g.v6=f;n[2]=C7(C(185),g);I0(m,C(186),DB(j),A7k);j=Q(B5,2);n=j.data;g=h.jc;BG(g);i=new U6;i.yB=g;n[0]=C7(C(187),i);g=h.jc;BG(g);i=new U5;i.uS=g;n[1]=C7(C(188),i);FC(m,C(189),DB(j));g=new X8;g.rh=h;I0(m,C(190),
g,A7k);if(h.bv.cG.b4.lZ){j=Q(B5,2);n=j.data;g=new AAe;g.xq=h;n[0]=C7(C(191),g);g=new AAf;g.x_=h;n[1]=C7(C(192),g);FC(m,C(193),DB(j));}FC(c,C(194),GU(m));e=LA();FC(e,C(195),AI$(h));g=new YM;g.v9=h;D2(e,C(196),g);i=new ON;i.xA=h;I0(e,C(197),i,A7k);FC(c,C(198),GU(e));Ld(a,b,GU(c));}
function AE3(b){var c;c=new RT;c.zy=b;return c;}
var FR=G(0);
function AZw(a){}
function AOf(a){}
var QZ=G(0);
var Mr=G(0);
function AFp(){var a=this;CE.call(a);a.cG=null;a.bj=null;a.kL=null;a.BU=0;a.on=null;a.dc=null;a.nL=0;a.hy=0.0;a.me=null;a.C4=null;a.fY=null;a.V=0;a.c$=0;a.d=null;a.fx=null;a.em=null;a.eU=null;a.AT=0;a.zp=0;a.c0=0;a.cf=0;a.cj=0;a.ii=null;a.fT=null;a.fA=null;a.ju=0;a.j5=0;a.Fr=0;a.Cl=0;a.kZ=0;a.lU=0;a.pY=0;a.ed=0;a.dd=null;a.fv=null;a.eY=0;a.ce=0;a.Cb=null;a.j3=null;a.yY=null;a.uj=null;a.m5=null;a.bx=0;a.cI=null;a.sE=0;a.ry=null;a.uQ=null;}
function K7(a,b){var c=new AFp();AR8(c,a,b);return c;}
function AR8(a,b,c){var d,e,f;E1(a);a.BU=0;a.on=Q(Z,10);a.dc=AXC();a.hy=16.0;a.me=C(156);a.d=A4F(Q(BK,0),null,null);d=new ADE;d.ye=CU(Q(Nq,0));d.BS=CU(Q(Nq,0));d.qG=CU(Q(AAM,0));d.vq=CU(Q(YS,0));d.u1=CU(Q(Hb,0));d.AJ=CU(Q(Sw,0));a.fx=d;a.eU=Q(Fo,0);a.ii=BH(1,0);a.fT=I9();a.fA=I9();a.ju=0;a.j5=1;a.kZ=1;a.lU=1;a.pY=1;a.ed=3;a.dd=AHu();a.fv=C(199);a.eY=0;a.ce=0;e=Ep();BG(e);d=new Xj;d.Dm=e;a.j3=d;a.bx=0;e=new Xi;e.qr=a;a.ry=e;e=new Xh;e.s_=a;a.uQ=e;a.cG=b;a.bj=b.b4;a.kL=c;c=APS(b.cw);a.cI=c;a.fY=c.gZ;f=a.on.data;b
=new Xg;b.AX=a;f[1]=b;b=new Xn;b.xr=a;f[2]=b;b=new Xm;b.tU=a;f[3]=b;b=new Xl;b.we=a;f[4]=b;b=new Xk;b.rk=a;f[5]=b;b=new Xf;b.zb=a;f[6]=b;K0(a.d,a,FK(a));}
function S2(a,b,c){var d,e,f,g,h;d=!c?a:null;if(c)e=null;else{e=new Tg;e.q_=a;}f=new Tf;f.uF=a;g=new Ti;g.yk=a;if(d!==null)Bc(b.bO,d);if(e!==null)Bc(b.ft,e);Bc(b.gH,f);Bc(b.g8,g);h=new Th;h.D6=d;h.D4=b;h.D5=e;h.D7=f;h.D8=g;return h;}
function Mt(a,b,c,d){HN(a,b,c,d);AAv(a,b,c,d);}
function ARr(a,b,c){Vc(a,a.me,a.hy);PT(a.cI,c);}
function A2J(a,b,c){a.yY=b;a.uj=c;}
function AAv(a,b,c,d){var e;a.c0=Cf(80.0,d);a.cf=Cf(1.0,d);a.cj=Cf(10.0,d);e=!a.ce?b.a:(b.a+c.a|0)-In(a)|0;V(a.cG.cW,e,b.b);Sj(a.dd,a.cG.cW,Be(In(a),c.a),c.b,d);b=a.dc;e=Cf(2.0,d);b.eP.t.a=e;}
function AXe(a){a.nL=1;N1(a);}
function AVn(a){a.nL=0;}
function N1(a){YE(a.dc,MU(FK(a)));}
function HB(a,b){var c,d;a.em=b;c=a.dc;d=b.bs.BR;BP(c.eP.X,d);c=a.fT;d=b.bs;H6(c,d.lF,d.lL);c=a.fA;b=b.bs;H6(c,b.lF,b.lL);}
function W8(a){Ow(a,a.cI.cT.oi,a.hy+1.0);}
function AD4(a){var b;b=a.hy;if(b<=7.0)return;Ow(a,a.cI.cT.oi,b-1.0);}
function PU(a,b){Ow(a,b,a.hy);}
function AR6(a,b){OK(a.cG,b);}
function Ow(a,b,c){if(a.cG.cb!==0.0){Vc(a,b,c);Js(FK(a));}a.hy=c;a.me=b;}
function LW(a){var b,c,d;b=a.cI;c=a.cG.cw;d=a.bj;b.iQ=c;if(b.hD.jh!=c&&b.d4)AD3(b,d);SQ(a.eU);Iy(a.dd);N5(a);}
function Vc(a,b,c){var d,e,f,g,h,i,j,k;d=a.bN;e=c*d;Cf(c,d);f=a.cI.cT;d=f===null?0.0:f.oZ;if(!(e===d&&BN(b,a.me))){Iy(a.dd);Or(a.eU);g=a.d.h.B.data;h=g.length;i=0;while(i<h){EZ(g[i]);i=i+1|0;}j=a.cI;f=a.bj;j.cT=AI0(b,e,300,600,j.gZ,f);f=a.cI;a.C4=f.cT;a.V=Sn(f,1.25,a.bj);a.c$=CY(a.cI.cT.p7);a.dc.eP.t.b=E6(a.cI.cT);h=E6(a.cI.cT);i=a.V;k=Vk(a.dc);f=new K;M(f);b=H(H(f,C(200)),b);BM(b,32);U(H(U(H(U(H(EF(b,e),C(201)),h),C(202)),i),C(203)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A7l){h=Nb(a.cI.cT,a.V);b=new K;M(b);U(H(b,
C(204)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.iv=GQ(FY(a),a.d.z,a.bj.cd,a.fY);H9(a);N5(a);}}
function AVK(a){Or(a.eU);Yi(a.cI);Iy(a.dd);}
function OG(a){return Bb(CI(a.d.h)+5|0,a.V);}
function KU(a){return Bd(OG(a)-a.k.b|0,0);}
function AA0(a){return Bd(a.ju-Gg(a)|0,0);}
function Gg(a){var b;b=!a.ce?0:a.c$+a.cj|0;return Bd(1,(a.k.a-a.c0|0)-b|0);}
function In(a){return a.ce?a.c0:a.c0-a.cj|0;}
function El(a){return a.k.b;}
function IX(a,b){var c,d,e;c=a.d.h;if(ABp(c)&&b-c.zL>0.03125?1:0){d=a.sE;e=a.d.h.cl;if(d!=e){a.sE=e;ZG(a);}}if(a.V)AAV(a);d=ABz((a.bx+a.Fr|0)-a.Cl|0,KU(a));e=a.bx==d?0:1;if(e)F0(a,d);return !AA1(a.dc,b)&&!e&&!a.BU?0:1;}
function IG(a,b){var c,d;b=ABz(b,AA0(a));c=a.d;d=b==c.dT?0:1;if(d)c.dT=b;if(d){c=a.yY;if(c!==null)c.g();}}
function F0(a,b){var c;if(AJc(a,b)){c=a.uj;if(c!==null)c.g();}}
function AJc(a,b){var c,d;c=ABz(b,KU(a));d=c==a.bx?0:1;if(d){a.bx=c;a.d.mD=c/a.V;}return d;}
function AG$(a){return BH((In(a)+a.cf|0)+a.cj|0,a.V);}
function ASY(a){return a.V;}
function AYZ(a,b){Il(a);}
function Il(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H$(a.k.b,a.V)+7|0;c=a.eU;if(c.data.length<b)a.eU=Zg(b,c,a.cI,a.AT,a.zp,a.d.h);B_(a.bj,0);Nz(a.bj,a.i,a.k);d=(a.V-Vk(a.dc)|0)/2|0;b=a.d.iv-(SR(a.dc)/2|0)|0;e=a.d;f=b-e.dT|0;g=!a.ce?a.c0:(a.cf+a.cj|0)+a.c$|0;T7(a.dc,g+f|0,(d+Bb(e.w,a.V)|0)-a.bx|0);h=CI(a.d.h);i=TI(a);j=TH(a);a.AT=i;a.zp=j;k=!a.ce?a.i.a+a.c0|0:((a.i.a+a.cf|0)+a.cj|0)+a.c$|0;l=Gg(a);c=a.d.lA;m=Dz(a,40.0);n=i;while(n<=j&&n<h){o=Cc(a.d.h,n);p=ACm(a,n);Xt(p,o,a.bj,a.V,l,a.d.dT,n,
n%a.eU.data.length|0);a.ju=Bd(a.ju,FB(o)+m|0);b=a.V;q=Bb(b,n)-a.bx|0;r=c===null?null:c.data[n];d=a.i.b+q|0;e=a.bj;g=a.d.dT;s=a.em;t=AJ4(Bl(a),n);if(t!==null){if(t.b==(-1))t.b=o.S;t.a=GQ(o,t.a,a.bj.cd,a.fY);t.b=GQ(o,t.b,a.bj.cd,a.fY);}o=a.d;Qf(p,d,k,e,l,b,g,s,t,o.iW,o.iH,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cG.cW;n=i;while(n<=j&&n<h&&a.kZ){p=ACm(a,n);q=Bb(a.V,n)-a.bx|0;r=Bl(a);if(!Dx(r))u=0;else{o=Es(r);r=F3(r);u=o.K<=n&&n<r.K?1:0;}s=a.em;r=s.bs;v=r.sR;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.kX;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=HZ(s.dF,s,x[n].fl);break a;}}if(w)v=r.gm;}}AID(p,a.bj,k,a.i.b+q|0,a.V,e,a.d.dT,l,v);n=n+1|0;}if(a.j5){y=Be(j+1|0,h);AKh(a,Bb(a.V,y)-a.bx|0,l);}AGu(a);AF5(a,i,j);if(a.lU)AHI(a,i,j,h);if(a.nL&&f>=(( -SR(a.dc)|0)/2|0)){e=a.dc;p=a.k;if(AEQ(e.eP.u,0,0,p))AB1(a.dc,a.bj,a.i);}AGh(a);AFR(a);F9(a.bj);}
function AHI(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lA;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.em;h=HZ(h.dF,h,g.fl);}else h=e!==null?a.em.bs.ef:a.em.bs.gm;if(!(a.d.w!=b&&g===null)){g=a.ii;i=a.ce;g.a=!i?(a.cj-a.cf|0)-a.ed|0:((a.cj+a.c$|0)+a.cf|0)-a.ed|0;j=a.V;g.b=j;i=i?0:(a.c0-a.cj|0)+a.cf|0;j=Bb(j,b)-a.bx|0;k=a.bj;l=a.i;Bt(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AF5(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bb(CI(a.d.h),a.V)-a.bx|0);f=a.dd;g=a.bx;h=a.d;i=h.lA===null?h.w:(-1);j=a.bj;k=a.em;Nz(j,f.gu,f.fu);SO(f,j,b,d);ABA(f,b,j);AAU(f,g,e,k,j);l=k.la;if(e<d){h=f.gu;Bt(j,h.a,h.b+e|0,BH(f.fu.a,d-e|0),l.k5);}if(b<=i&&i<=c){k=k.la;c=i/20|0;h=f.c3;l=Bv(h,c%h.m|0);h=f.gu;d=Bb(f.c3.m,f.he);c=l.fs.b;b=((l.qi.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%Do(l.cL)|0)|0;c=i%l.ec|0;e=l.cq;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.jd,l.fs.a,e);f=l.jU;c=i%l.ec|0;d=l.cq;Cw(f,0.0,
Bb(c,d),l.fs.a,d);Ni(l,j,b,h,k.xx,k.qu);}F9(j);}
function TI(a){return Be(a.bx/a.V|0,CI(a.d.h)-1|0);}
function TH(a){return Be(((a.bx+El(a)|0)-1|0)/a.V|0,CI(a.d.h)-1|0);}
function ARN(a,b){return Bb(a.V,b)-a.bx|0;}
function ARD(a){return a.i;}
function AUw(a){return a.k;}
function N5(a){YJ(a.dd,a.cI.cT,a.V,a.cG.cw);}
function ACm(a,b){var c;c=a.eU.data;return c[b%c.length|0];}
function U0(a,b){var c,d,e,f;c=E5(0,J(a.fv),Pk(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BS;X(b);N(b);}if(c!=1){d=b.b$.data.length;if(d&&c){e=B7(Bb(d,c));d=0;f=0;while(f<c){QS(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mx(e);}else b=A6f;}}return b;}
function PZ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BO(i);k=A5K(i).data;Ju(j,c);c=0;l=k.length;if(c>l){f=new BS;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cl=o.cl+1|0;p=Q(G5,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AS6(h[m],n[m],k[m],b[m],f.br,f.bw);m=m+1|0;}Br(o.iM,p);c=0;while(c<i){b=e.data;Ng(o,h[c],n[c],k[c],b[c]);g.ql(CX(h[c]),b[c]);c=c+1|0;}}
function AK$(a){var b;if(Dx(Bl(a)))GN(a);else{b=a.d;OY(b.h,b.w,b.z);}H9(a);Ez(a);return 1;}
function DK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eY)return 0;if(Dx(Bl(a)))GN(a);c=Mh(AB9(b,C(205),C(21)),C(206),(-1));d=c.data;b=a.d;e=b.h;f=b.w;g=b.z;AD9(e,f,g,c);h=d.length;if(!h)b=A6f;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B7(i+Bb(h-1|0,J(C(206)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(206))){m=l+1|0;c[l]=P(C(206),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Mx(k);}F2(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CN(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);F6(a);Ez(a);return 1;}
function GN(a){var b,c,d;b=Es(Bl(a));c=a.d.h;d=Bl(a);O4(c,d,UL(c,d));CN(a,b.K,b.ba,0);F6(a);Ez(a);}
function F6(a){var b,c;(Bl(a)).ds=0;b=(Bl(a)).bK;c=a.d;Ce(b,c.w,c.z);b=(Bl(a)).bB;c=a.d;Ce(b,c.w,c.z);}
function AKh(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cG.cW;e.b=d-b|0;d=a.ce;e.a=!d?c+a.ed|0:c+a.cf|0;d=!d?(a.i.a+a.c0|0)-a.ed|0:(((a.i.a+a.cj|0)+a.c$|0)+a.cf|0)-a.ed|0;Bt(a.bj,d,a.i.b+b|0,e,a.em.bs.ef);}}
function AGh(a){var b;b=a.ce?a.i.a+a.c$|0:a.i.a+a.k.a|0;Kh(a.fT,a.bx,a.i.b,El(a),OG(a),b,a.c$);b=!a.ce?a.i.a+a.c0|0:((a.i.a+a.cf|0)+a.cj|0)+a.c$|0;Rl(a.fA,a.d.dT,b,Gg(a),a.ju,a.i.b+El(a)|0,a.c$);}
function AFR(a){var b,c;b=Zs(a.fT);c=Zs(a.fA);if(!(!b&&!c)){B_(a.bj,1);if(b)GP(a.fT,a.bj);if(c)GP(a.fA,a.bj);if(b)GW(a.fT,a.bj);if(c)GW(a.fA,a.bj);}}
function AGu(a){var b,c,d,e,f;b=a.ii;c=a.k;b.b=c.b;b.a=a.cf;d=!a.ce?a.c0-a.cj|0:(c.a-In(a)|0)-a.cf|0;b=a.bj;c=a.i;Bt(b,c.a+d|0,c.b,a.ii,a.em.bs.ut);b=a.ii;d=a.ce;b.a=!d?(a.cj-a.cf|0)-a.ed|0:((a.cj+a.c$|0)+a.cf|0)-a.ed|0;e=d?0:(a.c0-a.cj|0)+a.cf|0;c=a.bj;f=a.i;Bt(c,f.a+e|0,f.b,b,a.em.bs.ef);}
function ABz(b,c){return Be(Bd(0,b),c);}
function FK(a){return a.cG.hA;}
function Jn(a,b){var c,d,e;c=ER(b);d=new K;M(d);H(H(d,C(207)),c);$rt_globals.console.info($rt_ustr(L(d)));W1(FK(a),ER(b));CN(a,0,0,0);c=new ACM;c.yK=a;c.yL=b;d=Ep();BG(d);e=new ACL;e.xp=d;UX(b,c,e);}
function JB(a,b,c,d,e){if(IM(a,e))return 1;if(c&&d)return 1;if(c)F0(a,a.bx+((Bb(b,a.V)*12|0)/10|0)|0);else if(!d){Im(a,a.d.w+b|0,e);ABB(a);}return 1;}
function Sa(a,b,c,d){var e,f,g;if(IM(a,d))return 1;e=FY(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=G2(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=Kc(e,b);if(c>0&&e.es.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.es.data[c-1|0];}}if(f>e.S){e=a.d;if((e.w+1|0)<CI(e.h))CN(a,a.d.w+1|0,0,d);}else if(f>=0)DC(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cc(e.h,b-1|0)).S;CN(a,a.d.w-1|0,g,d);}}ACA(a);return 1;}
function IM(a,b){if(Dx(Bl(a))&&!b){F6(a);H9(a);return 1;}if(!(b&&Dx(Bl(a))))F6(a);return 0;}
function CN(a,b,c,d){a.d.z=c;return Im(a,b,d);}
function Im(a,b,c){var d;d=a.d;d.w=E5(0,b,CI(d.h)-1|0);return DC(a,a.d.z,c);}
function DC(a,b,c){var d,e;a.d.z=E5(0,b,(FY(a)).S);a.d.iv=a.bN===0.0?0:GQ(FY(a),a.d.z,a.bj.cd,a.fY);N1(a);H9(a);if(c)(Bl(a)).ds=1;d=Bl(a);e=a.d;N2(d,e.w,e.z);(Bl(a)).ds=0;return 1;}
function My(a,b){var c;c=AWu(Bl(a));DC(a,b,0);JJ(Bl(a),c);}
function H9(a){ABB(a);ACA(a);}
function ABB(a){var b,c,d,e,f;b=a.bx;c=b+El(a)|0;d=a.d.w;e=a.V;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))F0(a,d-e|0);else if(f>(c-e|0))F0(a,(f-El(a)|0)+a.V|0);}
function ACA(a){var b,c,d,e,f;b=CY(a.cG.cb*30.0);c=a.d.dT;d=c+Gg(a)|0;e=a.d.iv;f=e+b|0;if(e<(c+b|0))IG(a,e-b|0);else if(f>(d-b|0))IG(a,(f-Gg(a)|0)+b|0);}
function IT(a,b){var c,d;CN(a,b.br,b.bw,0);c=G2(FY(a),a.d.z);Ce((Bl(a)).bB,a.d.w,c);b=(Bl(a)).bK;d=a.d;Ce(b,d.w,d.z);}
function Ft(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E5(0,((b.b-d.b|0)+a.bx|0)/a.V|0,CI(a.d.h)-1|0);g=!a.ce?a.c0:(a.cf+a.cj|0)+a.c$|0;h=Bd(0,(e-g|0)+a.d.dT|0);b=Cc(a.d.h,f);d=a.bj.cd;i=a.fY;if(!(b.eV!==null&&!b.gY))Nv(b,d,i);j=b.eV;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=ABn(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.S;else{j=Z4(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A7m){b=new K;M(b);U(H(U(H(U(H(b,C(208)),e),C(209)),h),C(210)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DT(f,k);}
function VA(a,b){var c,d;c=a.d;d=b.br;c.w=d;c.z=b.bw;c.iv=GQ(Cc(c.h,d),a.d.z,a.bj.cd,a.fY);N1(a);}
function FY(a){var b;b=a.d;return Cc(b.h,b.w);}
function LP(a,b,c,d){var e,f;e=CY((a.V*4|0)*d/150.0);f=CY(c);if(e)F0(a,a.bx+e|0);if(f)IG(a,a.d.dT+f|0);return 1;}
function SY(a,b,c){(Bl(a)).ds=0;return 1;}
function Wn(a,b,c){var d;if(c)return null;d=F1(a.fT,b.j,a.ry,1);if(d!==null)return d;d=F1(a.fA,b.j,a.uQ,0);if(d!==null)return d;Jc(a);VA(a,Ft(a,b.j));Lw(a.d);if(!b.bJ&&!(Bl(a)).ds){b=(Bl(a)).bK;d=a.d;Ce(b,d.w,d.z);}(Bl(a)).ds=1;b=Bl(a);d=a.d;N2(b,d.w,d.z);b=new ADx;b.uY=a;return b;}
function O1(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cJ){b=b.j;e=Ft(a,b);f=I8(a.d.h,e.br,e.bw);g=SK(a,f);h=Os(a.fx,Eb(a.d),Hz(a.d));if(h!==null){i=a.d;c=e.br;d=e.bw;e=new AC$;e.CQ=a;e.CR=b;e.CP=g;h.tG(i,c,d,e,a.j3);}else{e=Co(a.d.h.dP,f);if(e!==null){IT(a,e);c=1;}else{e=Co(a.d.h.dE,f);if(e!==null&&!CJ(e)){if(e.m!=1){Zq(a.kL,b,e,a,g);c=1;}else{IT(a,Bv(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Ft(a,b.j)).br;g=Cc(a.d.h,c);c=GE(g,a.d.z);d=G2(g,a.d.z);b=Oi(g,c);if((d-1|0)==g.S){Ce((Bl(a)).bK,
a.d.w,Pk(g));Ce((Bl(a)).bB,a.d.w,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b$.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=GE(g,c-1|0);d=G2(g,c);}else{if(d!=j){QG(Bl(a),a.d.w);break b;}c=GE(g,d+1|0);d=G2(g,c);}}}Ce((Bl(a)).bK,a.d.w,c);(Bl(a)).ds=1;CN(a,a.d.w,d,0);(Bl(a)).ds=0;Jc(a);}}break a;case 3:break;default:break a;}QG(Bl(a),a.d.w);ZP(a.d.hZ);Jc(a);}}return 1;}
function Xo(a,b){var c,d,e,f,g,h,i,j;c=a.cG.cR;if(F7(a.fT,b.j,c))return 1;if(F7(a.fA,b.j,c))return 1;d=a.dd;if(Hw(b.j,d.gu,d.fu)&&GB(c)?1:0)return 1;e=b.j;f=!a.ce?a.c0:(a.cj+a.cf|0)+a.c$|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gg(a);i=El(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GB(c);if(b.cJ){e=Ft(a,b.j);e.bw=GE(Cc(a.d.h,e.br),e.bw);b=a.d.h;if(!MW(b.dP,e)&&!MW(b.dE,e)?0:1)return DY(c,C(211));}return DY(c,C(177));}
function A2p(a,b){var c,d,e,f,g;c=b.cJ;if(c&&b.bm==65){c=CI(a.d.h)-1|0;d=Gt(a.d.h,c);Ce((Bl(a)).bK,0,0);Ce((Bl(a)).bB,CI(a.d.h)-1|0,d);return 1;}if(c&&b.bm==80){Mo(a.d);return 1;}if(!a.eY&&c&&b.bm==90){if(Dx(Bl(a)))F6(a);b=a.d.h;b.cl=b.cl+1|0;e=b.iM;d=e.m;if(!d)e=null;else{f=(EL(e,d-1|0)).data;e=WL(b,f[0]);c=1;while(c<f.length){WL(b,f[c]);c=c+1|0;}}if(e!==null){CN(a,e.a,e.b,0);Ez(a);}return 1;}if(!c&&!b.dy){if(Bj(b.ee,C(212))){DK(a,C(213));DC(a,a.d.z-1|0,0);c=1;}else if(Bj(b.ee,C(214))){DK(a,C(215));DC(a,a.d.z
-1|0,0);c=1;}else if(Bj(b.ee,C(36))){DK(a,C(22));DC(a,a.d.z-1|0,0);c=1;}else if(Bj(b.ee,C(216))){DK(a,C(217));DC(a,a.d.z-1|0,0);c=1;}else if(Bj(b.ee,C(218))){DK(a,C(219));DC(a,a.d.z-1|0,0);c=1;}else if(!Bj(b.ee,C(220)))c=0;else{DK(a,C(221));DC(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dy&&!b.cJ)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.on.data[c];if(e!==null)e.g();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bm){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AJl(a,b))return 1;if(AGe(a,b))return 1;c=b.cJ;if(c&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bm;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dy&&!b.ky)return J(b.ee)>0&&DK(a,b.ee)?1:0;return 0;}return 0;}
function AAV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=TI(a);d=TH(a);if(b.fS!=3&&b.h2==3){e=LU(b.pn);f=new Yp;f.z$=c;f.z_=d;g=new Re;g.st=f;while(!g.mQ&&N6(e,g)){}if(!g.mQ&&Bj(C(178),Eb(b))){c=Bd(0,c-100|0);d=Be(CI(b.h)-1|0,d+100|0);Br(b.pn,BH(c,d));h=BO(3);i=h.data;i[0]=FA(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.B.data.length);k=0;while(k<d){j=j+Gt(e,k)|0;if(k!=(e.B.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Ab=E2();e=b.e_;l=new ABH;l.wv=b;i=Q(B,3);m=i.data;m[0]=E_(b.h);m[1]=h;b=b.h.dg;g=BD();AA8(b,b.de,
g);h=BO(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bv(g,o);d=k+1|0;n[k]=b.bY;q=d+1|0;n[d]=b.bW;k=q+1|0;n[q]=b.fO;o=o+1|0;}m[2]=h;CT(e,l,C(222),i);}}}
function Vy(a){Mo(a.d);}
function ZG(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fN){c=E0(b);d=new K;M(d);H(H(d,c),C(223));$rt_globals.console.info($rt_ustr(L(d)));}c=Eb(b);if(c!==null&&!Bj(C(177),c)){d=b.h.dg;e=QC(d,d.de);if(e===null){Ok(b);KA(b.h);}else{f=DX([Dp(e),Dd(e),e.bU.fO]);g=E_(b.h);h=BO(1);h.data[0]=AH5(c);d=b.h.e3;if(d.fB===null){i=BO(0);j=B7(0);}else{c=AUi(AWn(e.ci,d.fa),e);W0(c);i=c.oJ;j=c.mT;}k=b.h.cl;c=b.e_;d=new R_;d.vv=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BO(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CT(c,d,C(224),l);}}
else KA(b.h);}
function G$(a,b,c){var d,e,f,g,h,i;if(c&&a.eY)return 0;d=Es(Bl(a));e=d.K;if(Dx(Bl(a))){f=a.d.h;g=Bl(a);h=UL(f,g);if(c)O4(f,g,h);if(c){CN(a,d.K,d.ba,0);F6(a);Ez(a);}}else{h=Fq(FH(a.d.h.B.data[e]),C(206));i=Be(CI(a.d.h)-1|0,e);Ce((Bl(a)).bB,i,0);if(e>=(CI(a.d.h)-1|0))Ce((Bl(a)).bB,i,Gt(a.d.h,i));else Ce((Bl(a)).bK,i+1|0,0);if(c)GN(a);else CN(a,e,0,0);}b.f(h);return 1;}
function AGe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eY)return 0;a:{switch(b.bm){case 8:if(Dx(Bl(a))){GN(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OY(b.h,e,c);}else{e=b.w-1|0;c=Gt(b.h,e);b=a.d.h;LC(b,e);F2(b,e,Gt(b,e),1,C(206));}Ez(a);c=CN(a,e,c,0);}}break a;case 9:if(!b.bJ){if(!Dx(Bl(a)))DK(a,a.fv);else{f=Es(Bl(a));g=F3(Bl(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=BO(e);i=h.data;j=Q(BK,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fv;d=d+1|0;e=l;}b=new ACG;m=a.d;AJF(b,m.w,m.z);m=new S_;m.uN
=a;PZ(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fv)|0;g.ba=g.ba+J(a.fv)|0;My(a,a.d.z+J(a.fv)|0);Ez(a);}c=1;}else b:{if(!Dx(Bl(a))){b=a.d;f=Cc(b.h,b.w);if(f.s.data.length>0){g=U0(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.w;b=DT(e,m.z);n.cl=n.cl+1|0;o=n.iM;h=Q(G5,1);h.data[0]=AS6(e,0,1,g,b.br,b.bw);Br(o,h);Ng(n,e,0,1,g);HI(f,0,J(g));My(a,a.d.z-J(g)|0);}}else{b=Es(Bl(a));f=F3(Bl(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=BO(c);k=h.data;j=Q(BK,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.K){g=Cc(a.d.h,p);if(g.s.data.length>0){g=U0(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Jf(h,c);j=C6(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.K){f.ba=Bd(0,f.ba-J(g)|0);My(a,a.d.z-J(g)|0);}d=d+1|0;}b=DT(l,e);f=new T2;f.tl=a;PZ(a,h,0,1,j,b,f);}Ez(a);c=1;}break a;case 13:if(Dx(Bl(a)))GN(a);b=a.d;EZ(Cc(b.h,b.w));b=a.d;AKC(b.h,b.w,b.z);Ez(a);c=CN(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AK$(a);}return c;}
function AJl(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cJ?Im(a,H$(a.bx,a.V),b.bJ):JB(a,2-US(El(a),a.V)|0,0,b.dy,b.bJ);break a;case 34:c=!b.cJ?JB(a,US(El(a),a.V)-2|0,0,b.dy,b.bJ):Im(a,((a.bx+El(a)|0)/a.V|0)-1|0,b.bJ);break a;case 35:if(!IM(a,b.bJ)&&!DC(a,(FY(a)).S,b.bJ)){c=0;break a;}c=1;break a;case 36:if(!IM(a,b.bJ)&&!DC(a,0,b.bJ)){c=0;break a;}c=1;break a;case 37:c=b.cJ;if(c&&b.dy){Jc(a);d=a.d.hZ;e=d.dK;if(e<=0)d=null;else{f=d.fq.data;c=e-1|0;d.dK=c;d=f[c];}if(d===null)c=1;else{CN(a,L7(d),KN(d),0);JJ(Bl(a),
d.oF);c=1;}break a;}c=Sa(a,(-1),c,b.bJ);break a;case 38:c=JB(a,(-1),b.cJ,b.dy,b.bJ);break a;case 39:c=b.cJ;if(c&&b.dy){d=a.d.hZ;e=d.dK;if(e==(d.fn-1|0))d=null;else{f=d.fq.data;c=e+1|0;d.dK=c;d=f[c];}if(d===null)c=1;else{CN(a,L7(d),KN(d),0);JJ(Bl(a),d.oF);c=1;}break a;}c=Sa(a,1,c,b.bJ);break a;case 40:c=JB(a,1,b.cJ,b.dy,b.bJ);break a;default:}c=0;}if(c&&b.bJ){b=(Bl(a)).bB;d=a.d;Ce(b,d.w,d.z);}if(c)Lw(a.d);return c;}
function Jc(a){var b,c,d,e,f,g,h;b=a.d;c=b.hZ;d=c.dK;c=d<0?null:c.fq.data[d];if(c!==null&&b.w==L7(c)&&a.d.z==KN(c))return;c=a.d;e=c.hZ;b=new NM;d=c.w;f=c.z;c=Bl(a);b.py=DT(d,f);g=AWu(c);b.oF=g;g.ds=0;f=e.dK;h=e.fn;if(f==(h-1|0))ACn(e,b);else{d=f+1|0;while(d<h){ZP(e);d=d+1|0;}ACn(e,b);}e.dK=e.dK+1|0;}
function Ez(a){a.d.h.zL=MU(FK(a));}
function H0(a,b){var c,d,e,f;a.Cb=null;LK(a.dd,null);AD7(a.d);c=a.d;a.d=b;K0(c,null,null);K0(b,a,FK(a));d=(CA(a.fx.u1)).data;e=d.length;f=0;while(f<e){d[f].ql(c,b);f=f+1|0;}a.bx=Gz(b.mD*a.V);}
function SK(a,b){var c;c=L0(a.d.h,b);if(c===null)return C(21);return c.v;}
function M4(a,b){var c,d,e,f,g;a.d.lA=b;if(b===null){Bk(Bu(),C(225));LK(a.dd,null);}else{b=b.data;c=DM(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fl<<24>>24;e=e+1|0;}LK(a.dd,c);}}
function Se(a,b){a.d.qt=b;}
function Bl(a){return a.d.rD;}
function T6(a){var b;b=a.m5;if(b!==null)b.f(a);}
function AH6(){var a=this;B.call(a);a.lH=null;a.n6=null;a.ig=null;}
function ATz(a,b){var c=new AH6();AWC(c,a,b);return c;}
function AWC(a,b,c){var d,e;a.lH=b;a.n6=c;d=null;e=new UG;e.sv=a;b.po(d,e);b=null;d=new UH;d.rI=a;c.po(b,d);}
function YF(a,b,c){var d,e,f,g,h,i,j;d=a.ig;if(d!==null&&d.iu!==null){e=b!==a.lH?0:1;f=b.lf();g=(b.kp()+f|0)/2|0;h=g-f|0;d=a.ig;d=d.iu.data[GG(d,g,e)];i=g-(!e?d.h6:d.h7)|0;j= -b.hC(f)|0;c.qh(Bb(((!e?d.h7:d.h6)+i|0)-h|0,c.pw())+j|0);return;}}
function TQ(){B.call(this);this.Be=null;}
function AL9(a,b){V$(a.Be,b);}
function TR(){B.call(this);this.yO=null;}
function A1s(a,b){V$(a.yO,b);}
function TS(){B.call(this);this.wX=null;}
function APO(a,b){return AHe(a.wX,b);}
function HQ(){var a=this;B.call(a);a.oK=null;a.sz=null;a.r3=null;}
function A7n(a,b){var c=new HQ();Iq(c,a,b);return c;}
function Iq(a,b,c){var d;d=null;a.oK=b.bV;a.sz=d;a.r3=c;}
function AOj(a,b){var c,d;if(b.cJ&&b.bm==79){c=a.sz;if(c!==null&&b.bJ)I$(a.oK,c);else Oe(a.oK,a.r3);d=1;}else d=0;return d;}
function TO(){B.call(this);this.uO=null;}
function AQB(a,b){var c,d;c=a.uO;d=DO(c.q,c.F)?c.F:!DO(c.q,c.H)?null:c.H;if(d!==null){Jn(d,b);c.k6=null;c.mu.ig=null;c.fG.e1=null;}}
function TP(){B.call(this);this.sT=null;}
function A10(a,b){b=b;return AJm(a.sT,b);}
var C2=G(0);
function ADy(){var a=this;B.call(a);a.dM=null;a.cQ=null;a.d7=null;}
function Y9(a,b,c){var d,e;d=Nn(a.dM);Ge(d,b,c);b=a.dM;c=b.d_;e=new ACT;e.wK=b;e.wJ=c;d.jY=e;return d;}
function Fp(a,b){var c;c=a.d7;if(c!==b)a.d7=BY(c,b);}
function Eo(a){var b;b=a.d7;if(b!==null){Mp(b);Fp(a,null);}}
function GD(a,b){ZM(a.cQ,0,b);}
function Ku(a,b){UD(a.cQ,b);}
function JM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.cQ.m-1|0;while(b>=0){c=Bv(a.cQ,b);d=a.dM.b4;c.W.dv(d);e=c.R;f=c.iE.k8;if(!Lh(e)){if(!Of(e)&&!(!e.eG&&e.dX!==null)){e.eG=0;ACe(e);g=e.ew;h=(g.el+g.eF+5.0)/10.0;i=Cz(e.f7,e.kH);g=d.cd;j=e.ew;k=e.jH;l=h*2.0;Cm(g,j);m=i+Lp(g,k,l)|0;e.ip=m;m=E5(0,m,e.k.a);if(m){g=D5(d,m,e.k.b,e.f7.cw);Cm(g,e.ew);j=e.jH;l=i;h=l+h;k=e.ew;n=k.el;BW(g,j,h,l+n-(n+k.eF)/16.0);j=e.dX;if(j===null){j=CW(d);e.dX=j;}CM(j,g);EA(g);Cw(e.mF,0.0,0.0,BZ(e.dX),Do(e.dX));}}g=f.zx;j=e.dX;if(j===null)QD(e,
d,0,e.k.a,g);else{i=BZ(j);j=f.vo;k=e.i;m=k.a;o=k.b;k=e.dX;D8(d,m,o,k.fz,e.mF,k,j,g,e.f7.cw);m=e.k.a;if(i<m)QD(e,d,i,m-i|0,g);}}B_(d,1);i=Cz(c.bp,2.0);m=Lh(c.R);g=c.bp;j=g.cW;g=g.p6;o=m?0:c.R.k.b;k=c.W.k;V(g,k.a,k.b+o|0);AIR(d,g,!m?c.R.i:c.W.i,c.iE.k8.pv, -i|0,j);g=c.W;AJ3(d,g.k,g.i,i,o,Yg(c.iE.lx,c.bp.cb),c.iE.lx.n1,j);b=b+(-1)|0;}c=a.d7;if(c!==null&&!CJ(c.cc)){B_(c.cU.b4,1);b=0;while(true){g=c.cc;if(b>=g.m)break;Me(Bv(g,b),c.cU);b=b+1|0;}}}
function J6(a,b){var c,d;c=a.dM;if(c.cw==b)d=0;else{c.cw=b;Js(c.hA);d=1;}if(d){c=a.d7;if(c!==null){c=B1(c.cc);while(B4(c)){N$(B6(c));}}b=0;while(true){c=a.cQ;if(b>=c.m)break;c=Bv(c,b);c.R.eG=1;c.W.rq();b=b+1|0;}}return d;}
function AU2(a,b){var c,d,e,f,g,h;c=a.d7;if(c!==null){d=0;e=c.cc.m-1|0;a:{while(e>=0){d=NO(Bv(c.cc,e),b.j,c.cU.cR);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}e=0;while(true){c=a.cQ;if(e>=c.m)break;b:{c=Bv(c,e);f=b.j;if(B3(c.R,f))d=DY(c.bp.cR,null);else{d=Cz(c.bp,7.0);g=Cz(c.bp,25.0);if(M1(c,f.a,d)){h=Xd(c,f.a,g);if(M8(c,f.b,d)){d=DY(c.bp.cR,L8(h,C(226)));break b;}if(KF(c,f.b,d)){d=DY(c.bp.cR,L8( -h|0,C(226)));break b;}}if(Og(c,f.b,d)){g=ADn(c,f.b,g);if(Oz(c,f.a,d)){d=DY(c.bp.cR,L8(g,C(227)));break b;}if(MI(c,
f.a,d)){d=DY(c.bp.cR,L8( -g|0,C(227)));break b;}}d=0;}}c:{d:{if(!d){if(!B3(c.W,b.j))break d;if(!c.W.bQ(b)&&!DY(c.bp.cR,null))break d;}d=1;break c;}d=0;}if(d)return 1;e=e+1|0;}return 0;}
function AMU(a,b,c,d){var e,f,g,h,i;e=a.d7;if(e!==null){f=0;g=e.cc.m-1|0;a:{while(g>=0){f=Ob(Bv(e.cc,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=0;while(true){e=a.cQ;if(h>=e.m)break;b:{c:{i=Bv(e,h);if(!B3(i.R,b.j)){d:{e:{f:{e=b.j;f=Cz(i.bp,7.0);if(M1(i,e.a,f)){if(M8(i,e.b,f))break f;if(KF(i,e.b,f))break f;}if(!Og(i,e.b,f))break e;if(!Oz(i,e.a,f)&&!MI(i,e.a,f))break e;}f=1;break d;}f=0;}if(!f){if(!Mf(i,b))break c;if(!i.W.cu(b,c,d))break c;}}f=1;break b;}f=0;}if(f)return 1;h=h+1|0;}return 0;}
function AOY(a,b,c){var d,e,f,g,h,i,j,k;d=a.d7;if(d!==null){e=null;f=d.cc.m-1|0;a:{while(f>=0){e=Bv(d.cc,f);g=b.j;h=Fa(e.ck,g);if(!h&&!K$(e.ck)){e=e.kQ;if(e!==null)e.g();}e=!h?null:A7o;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=0;while(true){d=a.cQ;if(i>=d.m)return null;b:{g=Bv(d,i);if(!c){c:{d=b.j;if(!Lh(g.R)&&B3(g.R,d)){e=g.W.i;f=e.a;h=d.a;f=f-h|0;j=e.b;k=d.b;j=j-k|0;d=g.R.i;h=d.a-h|0;k=d.b-k|0;e=new Bg;d=new RZ;d.qW=g;d.qU=h;d.qV=k;d.qS=e;d.qT=f;d.qR=j;}else{f=Cz(g.bp,7.0);h=Cz(g.bp,25.0);if
(M1(g,d.a,f)){j=Xd(g,d.a,h);if(M8(g,d.b,f)){d=J0(g,d,j,(-1));break c;}if(KF(g,d.b,f)){d=J0(g,d,j,1);break c;}}if(Og(g,d.b,f)){h=ADn(g,d.b,h);if(Oz(g,d.a,f)){d=J0(g,d,(-1),h);break c;}if(MI(g,d.a,f)){d=J0(g,d,1,h);break c;}}d=null;}}if(d!==null)break b;}d=B3(g.R,b.j)?A7o:!Mf(g,b)?null:g.W.cv(b,c);}if(d!==null)break;i=i+1|0;}return d;}
function A2k(a,b,c){var d,e,f;d=a.d7;if(d!==null&&Jr(d))return 1;e=0;while(true){d=a.cQ;if(e>=d.m)break;a:{b:{d=Bv(d,e);if(!B3(d.R,b.j)){if(!Mf(d,b))break b;if(!d.W.dz(b,c))break b;}f=1;break a;}f=0;}if(f)return 1;e=e+1|0;}return 0;}
function AYi(a,b,c){var d,e,f;d=0;while(true){e=a.cQ;if(d>=e.m)break;f=Bv(e,d);e=f.W;e.e7(e.i,e.k,c);e=f.R;if(e.hw!==null){e.ew=null;e.ip=0;e.eG=1;}Ir(f);d=d+1|0;}}
function Tv(){var a=this;B.call(a);a.b4=null;a.hA=null;a.cR=null;a.bR=null;a.cb=0.0;a.cw=0;a.d_=null;a.ep=null;a.cW=null;a.p6=null;a.B8=null;a.B9=null;}
function KI(a){var b;b=a.d_;if(b!==null)b.un();}
function KY(a){var b;b=a.d_;if(b!==null)b.wc();}
function MX(a,b){var c;c=a.hA.er!==(Ew()).activeElement?0:1;if(c)KY(a);a.d_=b;if(c)KI(a);}
function FI(a,b){KY(a);a.d_=b;KI(a);}
function ABl(a,b){if(a.d_===b)a.d_=null;}
function DO(a,b){return b!==a.d_?0:1;}
function Kd(a){return a.b4.cd;}
function Gb(a,b){return TU(a.b4,b.h_,b.gR,a.cb);}
function Cz(a,b){return Cf(b,a.cb);}
function OK(a,b){var c;c=a.b4;if(!a.cw)c.pV=b;else c.oj=b;Js(a.hA);}
function We(){B.call(this);this.vO=null;}
function A2e(a,b,c,d){var e,f,g,h;e=a.vO;f=0;a:{while(true){g=e.cQ;if(f>=g.m)break;if((Bv(g,f)).W.dx(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function AFb(){var a=this;B.call(a);a.eP=null;a.oY=0.0;a.iC=0.0;a.g9=0;}
function AXC(){var a=new AFb();ARL(a);return a;}
function ARL(a){var b;b=S4(0,0,2,20);a.eP=b;a.oY=0.5;a.iC=0.0;IB(187,187,187,255,b.X);}
function Vk(a){return a.eP.t.b;}
function SR(a){return a.eP.t.a;}
function AA1(a,b){var c,d;a:{c=a.g9;if(b>a.iC)while(true){d=a.iC+a.oY;a.iC=d;a.g9=a.g9?0:1;if(b>d)continue;else break a;}}return a.g9==c?0:1;}
function T7(a,b,c){V(a.eP.u,b,c);}
function YE(a,b){a.iC=b+a.oY*1.25;a.g9=1;}
function AB1(a,b,c){if(a.g9)ZI(a.eP,b,c.a,c.b);}
function ADP(){var a=this;B.call(a);a.f$=null;a.h=null;a.pU=null;a.rD=null;a.hZ=null;a.lp=null;a.e_=null;a.lA=null;a.w=0;a.z=0;a.iv=0;a.iW=null;a.iH=null;a.pn=null;a.fS=0;a.h2=0;a.ie=0;a.i3=FE;a.Ab=FE;a.AZ=FE;a.qt=0;a.EE=0;a.dT=0;a.mD=0.0;a.fN=0;}
function A4z(a,b,c){var d=new ADP();AKU(d,a,b,c);return d;}
function ANX(a,b){var c=new ADP();ARf(c,a,b);return c;}
function A4F(a,b,c){var d=new ADP();Vu(d,a,b,c);return d;}
function AKU(a,b,c,d){Vu(a,(AIt(b)).kd,c,d);}
function ARf(a,b,c){Vu(a,b,null,c);}
function Vu(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rD=AMj();f=new Tt;f.fq=Q(NM,16);f.fn=0;f.dK=(-1);a.hZ=f;a.iW=null;a.iH=BD();a.pn=BD();a.fS=1;a.h2=1;a.ie=1;a.dT=0;a.mD=0.0;a.fN=0;a.f$=d;a.pU=c;c=new ZJ;g=e.length;b=Q(DJ,Bd(1,g));if(!g)b.data[0]=XI(C(21));h=b.data;i=0;while(i<g){h[i]=XI(e[i]);i=i+1|0;}d=new Yq;f=new NJ;QJ(f);d.fa=f;c.e3=d;c.dP=JQ();c.dE=JQ();c.iM=BD();if(!h.length){c=new BS;X(c);N(c);}c.B=b;j=ACc(c);c.dg=AGP(ATD(KP(0,j,0),null,null));a.h=c;}
function Eb(a){var b;b=a.pU;if(b===null){b=a.f$;b=b===null?C(177):AHN(b.gJ);}return b;}
function Hz(a){var b;b=a.f$;return b===null?null:b.kn;}
function Mq(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.h2=3;a.ie=3;a.fS=3;c=CP(b[0]);d=EO(b[1]);CP(b[2]);if(b.length<5)N7(a.h,c,d);else{e=CP(b[3]);f=e.data;g=EO(b[4]);Xp(a.h,c,d,e,g,0);TE(a,Jf(e,f.length),Ol(g));}if(a.fN){h=E0(a);i=JL(E2(),a.i3);j=new K;M(j);H(HH(H(H(j,h),C(228)),i),C(229));$rt_globals.console.info($rt_ustr(L(j)));}h=a.lp;if(h!==null)T6(h);}
function Lw(a){var b;Sx(a,DT(a.w,a.z),I8(a.h,a.w,a.z));if(!(a.iW!==null&&!CJ(a.iH))){b=a.z;if(b>0)Sx(a,DT(a.w,b-1|0),I8(a.h,a.w,a.z-1|0));}}
function Sx(a,b,c){var d,e,f,g,h,i,j,k;AD7(a);d=Co(a.h.dP,c);if(d!==null)c=d;a:{e=Co(a.h.dE,c);if(e!==null){a.iW=L0(a.h,c);c=B1(e);while(true){if(!B4(c))break a;f=B6(c);Br(a.iH,L0(a.h,f));}}}c=a.lp;if(c!==null){g=b.br;h=b.bw;b=c.fx;f=Eb(c.d);e=Hz(c.d);i=(CA(b.vq)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.A_(f,e)){b=b.DP;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new OR;e.CW=c;e.CX=f;e.CU=g;e.CV=h;b.tG(f,g,h,e,c.j3);}}}
function AD7(a){a.iW=null;Iu(a.iH);}
function TE(a,b,c){var d,e,f,g,h;if(a.e_!==null){a.AZ=E2();d=a.h.cl;e=a.e_;f=new Yh;f.y3=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BO(1);b.data[0]=d;h[2]=b;CT(e,f,C(230),g);}}
function K0(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.lp=b;a.e_=c;if(c===null){d=a.h.B.data;e=d.length;f=0;while(f<e){Tc(d[f]);f=f+1|0;}}else if(a.fS==1){a.i3=E2();b=Eb(a);e=BN(b,C(178));f=BN(b,C(181));d=E_(a.h);g=d.data.length;h=!e?5120:10240;i=AH5(b);if(f)JN(a,d,i);else if(g<=h)JN(a,d,i);else if(!e){Vj(a,Ol(d),i);JN(a,d,i);}else{Vj(a,Ol(d),i);j=Ol(d);c=a.e_;k=new ABG;k.zN=a;l=Q(B,2);m=l.data;m[0]=j;j=BO(1);j.data[0]=i;m[1]=j;CT(c,k,C(231),l);a.h2=2;JN(a,d,i);}}}
function Vj(a,b,c){var d,e;d=a.e_;e=new X0;e.uM=a;CT(d,e,C(232),I(B,[b,DX([c,250])]));a.ie=2;}
function JN(a,b,c){var d,e,f,g;d=a.e_;e=new V0;e.ra=a;f=Q(B,2);g=f.data;g[0]=b;b=BO(1);b.data[0]=c;g[1]=b;CT(d,e,C(233),f);a.fS=2;}
function E0(a){var b;b=a.f$;return b===null?C(21):ACh(b);}
function Mo(a){var b,c,d,e,f;if(a.fN){b=E0(a);c=new K;M(c);H(H(c,b),C(234));$rt_globals.console.info($rt_ustr(L(c)));}b=Eb(a);if(b===null)d=null;else{a:{e=(-1);switch(NU(b)){case -1655966961:if(!Bj(b,C(181)))break a;e=3;break a;case 3401:if(!Bj(b,C(180)))break a;e=2;break a;case 98723:if(!Bj(b,C(179)))break a;e=1;break a;case 3254818:if(!Bj(b,C(178)))break a;e=0;break a;case 3556653:if(!Bj(b,C(177)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(235);break b;case 2:d=C(236);break b;case 3:d
=C(237);break b;case 4:d=C(238);break b;default:d=null;break b;}d=C(239);}}if(d===null)T6(a.lp);else{a.i3=E2();b=a.e_;c=new ACi;c.wp=a;f=Q(B,1);f.data[0]=E_(a.h);CT(b,c,d,f);}}
function Ok(a){var b;b=AUi(a.h.e3,null);W0(b);TE(a,b.oJ,b.mT);}
function ADE(){var a=this;B.call(a);a.ye=null;a.BS=null;a.qG=null;a.vq=null;a.u1=null;a.AJ=null;}
function Os(a,b,c){return RC(a,CA(a.ye),b,c);}
function Zd(a,b,c){return RC(a,CA(a.BS),b,c);}
function RC(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.A_(c,d))return g.EP;f=f+1|0;}return null;}
function ABF(a,b,c){var d,e,f,g;d=(CA(a.qG)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.A_(b,c))return g.EK;f=f+1|0;}return null;}
function Fo(){var a=this;B.call(a);a.b9=0;a.da=null;a.cA=null;a.eB=null;a.dJ=0;}
var A7p=0;var A7l=0;function Xt(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cA;j=i===b&&!i.jg?0:1;if(j){a.cA=b;Nv(b,c.cd,a.da.gZ);}k=H$(Be(FB(b),e+2048|0),1024);l=a.eB;m=l.data.length;n=k<=m?0:1;if(n){a.eB=C6(l,k);while(m<k){a.eB.data[m]=CW(c);m=m+1|0;}}o=a.da.hD;if(!(!j&&!n)){if(A7p){l=b.gg;$rt_globals.console.info("fMeasure"+l.data);A7p=0;}if(!A7l){c=o.db;b="alphabetic";c.textBaseline=b;}else{b=o.db;c="top";b.textBaseline=c;}a.dJ=f/1024|0;p=0;while(p<k){J$(a,o,d,a.dJ+p|0);p=p+1|0;}a.cA.jg=0;}e=a.eB.data.length;if
(e&&f<=FB(a.cA)){f=f/1024|0;g=a.dJ;if(f!=g){if(Wj(f-g|0)>=e){g=0;while(g<e){J$(a,o,d,f+g|0);g=g+1|0;}a.dJ=f;}else{while(true){g=a.dJ;if(g>=f)break;J$(a,o,d,g+e|0);a.dJ=a.dJ+1|0;}while(true){g=a.dJ;if(g<=f)break;J$(a,o,d,g-1|0);a.dJ=a.dJ-1|0;}}}}}
function J$(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Yf(a,e);g=a.cA;if(f>=g.s.data.length)return;h=g.gg;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b9;l=a.da.gZ;EP(b);a:{while(true){g=a.cA;if(f>=g.s.data.length)break a;m=l.data;g=JS(g,f);n=m[Kv(g)];o=!A7l?LI(n,c):Nb(n,c);m=h.data;Cm(b,n);BW(b,g.v,k,o);k=m[f]-j+a.b9;if(k>1024.0)break;f=f+1|0;}}h=a.eB.data;CM(h[d%h.length|0],b);}
function Qf(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eB.data.length;if(!o)return;if(g>FB(a.cA))return;p=a.cA;q=p.eV;r=p.s;s=g/1024|0;t=Yf(a,g);u= -a.b9|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eB.data[s%o|0];bb=w[t];bc=z[t]+a.b9|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.b9|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b9:2*a.b9|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b9:2*a.b9|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bs.gm;if(bb===j)bo=h.bs.rz;if(k!==null){p=B1(k);d:{while(B4(p)){if(BN(B6(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bs.v_;}if(n!==null){w=n.eb;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AEc(h.dF,h,bi,n.fl);}if(!bn&&!bl){i.b=Be(i.b,FB(a.cA));AF2(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.b9:0)|0,(g
+bg|0)<=(i.b+(!y?a.b9:2*a.b9|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.b9:0)|0,g-x|0,bo);}else{bp=h.jL.data[bb.bX];p=bn?h.bs.kX:S0(bo,WP(h,bp.mP));Cw(a.da.js,g-x|0,0.0,bg,v);V(a.da.il,bg,f);G9(a.da,d,ba,u+c|0,b,bp.gX,p);}if((bb.bF&12)>>2>0){bc=u+c|0;B_(d,1);p=a.da;bq=p.nG;bq.a=bg;x=b+p.t1|0;bk=x-p.BE|0;br=p.qN;bs=x+br;ba=p.hl;TV();Mc(d,bc,bk,bq,br,bs,ba,A7q.k9.gX);B_(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AF2(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jL.data[h.bX];o=n.gX;p=S0(m,WP(f,n.mP));q=f.bs.kX;f=a.da;r=f.js;s=f.il;t=l;u=i-j|0;v=u;w=e;Cw(r,t,0.0,v,w);V(s,u,e);G9(a.da,b,g,c,d,o,p);l=l+i|0;Cw(r,l-k|0,0.0,k,w);V(s,k,e);f=a.da;c=c+i|0;G9(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cw(r,t,0.0,i,w);V(s,i,e);G9(a.da,b,g,c-j|0,d,o,q);}
function S0(b,c){if(b!==null)c=b;return c;}
function Yf(a,b){var c,d,e,f,g,h,i;c=a.cA;d=c.gg;e=0;f=c.s.data.length;g=b;b=BL(e,f);if(b>0){c=new BS;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BL(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ADY(a){var b,c,d;b=a.eB.data;c=b.length;d=0;while(d<c){AGp(b[d]);d=d+1|0;}a.eB=a.da.nS;a.cA=null;}
function AID(a,b,c,d,e,f,g,h,i){var j,k;j=FB(a.cA);if(j)j=j+a.b9|0;if(!j)j=j-a.b9|0;k=Bd( -a.b9|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bt(b,c+k|0,d,f,i);}
function Zg(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fo,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.t4(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cA===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fo;g.b9=3;g.dJ=0;g.da=d;g.eB=d.nS;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)ADY(q);j=j+1|0;}return i;}
function SQ(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cA;if(e!==null)e.jg=1;d=d+1|0;}}
function Or(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){ADY(b[d]);d=d+1|0;}}
function AF6(){A7l=0;}
function AHA(){var a=this;B.call(a);a.f3=null;a.dk=null;a.e5=null;a.fD=null;a.oB=null;a.oo=null;}
function I9(){var a=new AHA();AX9(a);return a;}
function AX9(a){a.f3=new Bg;a.dk=new Bg;a.e5=new Bg;a.fD=new Bg;a.oB=new B0;a.oo=new B0;}
function Zs(a){var b;b=a.dk;return !Bb(b.a,b.b)?0:1;}
function II(a,b){return Hw(b,a.e5,a.fD);}
function F1(a,b,c,d){var e,f,g,h,i;e=II(a,b);f=Hw(b,a.f3,a.dk);if(!e&&!f)return null;if(!f){if(!d)c.f(U2(a,b.a-a.e5.a|0));else c.f(QE(a,b.b-a.e5.b|0));}g=!d?a.f3.a+(a.dk.a/2|0)|0:a.f3.b+(a.dk.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Si;b.vJ=a;b.vK=c;b.vI=i;}else{b=new Sh;b.rR=a;b.rP=c;b.rQ=i;}return b;}
function H6(a,b,c){if(c!==null)BP(a.oB,c);if(b!==null)BP(a.oo,b);}
function AFm(b,c){var d;d=new ABP;d.tn=b;d.B2=c;return d;}
function QE(a,b){var c,d,e;c=a.fD.b;d=a.dk.b;e=c-d|0;return AFm(Be(Bd(0,b-(d/2|0)|0),e),e);}
function U2(a,b){var c,d,e;c=a.fD.a;d=a.dk.a;e=c-d|0;return AFm(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Kh(a,b,c,d,e,f,g){U7(a,b,c,d,e,f,g,1);}
function Rl(a,b,c,d,e,f,g){U7(a,b,c,d,e,f,g,0);}
function U7(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(YN(d,d,e),i);e=e-d|0;i=d-j|0;i=i?YN(b,i,e):0;if(!h){k=a.f3;k.a=i+c|0;k.b=f-g|0;l=a.dk;l.a=j;l.b=g;l=a.e5;l.a=c;l.b=k.b;k=a.fD;k.a=d;k.b=g;break a;}k=a.f3;k.a=f-g|0;k.b=i+c|0;l=a.dk;l.a=g;l.b=j;l=a.e5;l.a=k.a;l.b=c;k=a.fD;k.a=g;k.b=d;break a;}}V(a.fD,0,0);V(a.dk,0,0);}}
function Vl(a,b){GP(a,b);GW(a,b);}
function GP(a,b){var c;c=a.e5;Bt(b,c.a,c.b,a.fD,a.oB);}
function GW(a,b){var c,d;c=a.dk;c.a=c.a-2|0;c.b=c.b-2|0;d=a.f3;Bt(b,d.a+1|0,d.b+1|0,c,a.oo);b=a.dk;b.a=b.a+2|0;b.b=b.b+2|0;}
function F7(a,b,c){return II(a,b)&&GB(c)?1:0;}
function AFa(){var a=this;B.call(a);a.EZ=20;a.gu=null;a.fu=null;a.lt=0.0;a.lq=null;a.jn=0;a.kS=0;a.he=0;a.c3=null;a.oE=null;a.fg=null;a.gF=null;a.gD=0;}
function AHu(){var a=new AFa();A2u(a);return a;}
function A2u(a){a.EZ=20;a.gu=new Bg;a.fu=new Bg;a.c3=BD();a.oE=DM(0);}
function ABA(a,b,c){var d,e,f,g,h;d=a.gD;if(b==d)return;e=a.c3.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){RQ(a,b);a.gD=b;}else{XG(a,c);if(a.gD>=b)while(true){if(h<g)break a;a.gD=Pm(Bv(a.c3,h%e|0),a.fg,a.gF,a.gD,b,f,a.lt);h=h+(-1)|0;}while(g<=h){a.gD=Pm(Bv(a.c3,g%e|0),a.fg,a.gF,a.gD,b,f,a.lt);g=g+1|0;}}}}
function LK(a,b){if(b===null)b=DM(0);a.oE=b;}
function AAU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.he;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c3;h=Bv(h,g%h.m|0);i=a.gu;j=a.oE;k=h.fs.b;l=d.la;m=b+f|0;n=h.cq;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&V4(d,j,r,l)!==l.k5?0:1){k=Bb((q-p|0)+1|0,h.cq);V(h.jd,BZ(h.cL),k);Cw(h.jU,0.0,Bb(p,h.cq),BZ(h.cL),k);t=r;}else{u=V4(d,j,r,l);Ni(h,e,f+Bb(p,h.cq)|0,i,l.o1,u);V(h.jd,BZ(h.cL),h.cq);Cw(h.jU,0.0,Bb(q,h.cq),BZ(h.cL),h.cq);p=q;}q=q+1|0;r=t;}u=V4(d,j,r,l);Ni(h,
e,f+Bb(p,h.cq)|0,i,l.o1,u);g=g+1|0;f=f+a.he|0;}}
function SO(a,b,c,d){var e,f,g,h,i,j;e=a.c3.m;while(true){f=a.c3.m;g=Bb(f,a.he);if(g>(d+a.kS|0))break;h=BH(0,g);i=new QI;g=a.fu.a;f=a.kS;j=a.lq;i.jd=new Bg;i.jU=new B0;i.qi=h;i.ec=20;i.cq=f;i.fs=BH(g,20*f|0);i.hq=LI(j,f);if(i.cL===null)i.cL=CW(b);Br(a.c3,i);}if(f==e)return;XG(a,b);RQ(a,c);}
function RQ(a,b){var c,d,e,f,g,h,i,j,k;c=a.c3;d=c.m;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B1(c);while(B4(c)){f=B6(c);g=a.fg;h=a.lt;EP(g);i=0;while(true){j=f.ec;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;GJ(f,g,Dm(e),Bb(f.cq,i)+f.hq|0,h);i=i+1|0;}CM(f.cL,g);f.wN=g.jh;}}
function YJ(a,b,c,d){a.lq=b;a.kS=c;a.he=c*20|0;a.jn=d;YL(a);}
function XG(a,b){var c;c=a.fg;if(!(c!==null&&c.jh==a.jn)){c=D5(b,a.fu.a,a.he,a.jn);a.fg=c;Cm(c,a.lq);Z6(a.fg,2);}c=a.gF;if(!(c!==null&&c.jh==a.jn)){b=D5(b,a.fu.a,a.kS,a.jn);a.gF=b;Cm(b,a.lq);Z6(a.gF,2);}}
function Iy(a){CL(a.c3,new ADB);Iu(a.c3);YL(a);}
function YL(a){a.fg=BY(a.fg,null);a.gF=BY(a.gF,null);}
function Sj(a,b,c,d,e){Ct(a.gu,b);V(a.fu,c,d);a.lt=e;}
function Xj(){B.call(this);this.Dm=null;}
function Xi(){B.call(this);this.qr=null;}
function AMh(a,b){var c;c=a.qr;F0(c,FS(b,KU(c)));}
function Xh(){B.call(this);this.s_=null;}
function ALE(a,b){var c;c=a.s_;IG(c,FS(b,AA0(c)));}
function AJ6(){var a=this;B.call(a);a.js=null;a.il=null;a.nG=null;a.hl=null;a.gZ=null;a.nS=null;a.cT=null;a.hD=null;a.qN=0.0;a.d4=0;a.t1=0;a.BE=0;a.iQ=0;}
function APS(a){var b=new AJ6();ATl(b,a);return b;}
function ATl(a,b){var c;a.js=new B0;a.il=new Bg;a.nG=new Bg;c=new B0;a.hl=c;a.gZ=Q(Ly,4);a.nS=Q(Is,0);a.iQ=b;LB(c);}
function Yi(a){a.hD=BY(a.hD,null);}
function Sn(a,b,c){var d,e;d=CY(E6(a.cT)*b);a.d4=d;e=a.cT;a.t1= -( -((d+e.el+e.eF)/2.0)|0)|0;AD3(a,c);return a.d4;}
function PT(a,b){var c,d;LB(a.hl);c=a.hl;UR(c,b,c);a.qN=WY(a.hl);c=a.hl;d=c.bt+c.bf+1.5|0;a.BE=d;V(a.nG,0,d*2|0);}
function AD3(a,b){a.hD=BY(a.hD,D5(b,1024,a.d4,a.iQ));}
function G9(a,b,c,d,e,f,g){var h,i;h=a.il;if(h.a&&h.b){i=a.js;if(i.bC!==0.0&&i.bf!==0.0){D8(b,d,e,h,i,c,f,g,a.iQ);return;}}}
function Xg(){B.call(this);this.AX=null;}
function AU4(a){var b,c;b=a.AX;c=b.j5?0:1;b.j5=c;b=new K;M(b);Jt(H(b,C(240)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xn(){B.call(this);this.xr=null;}
function AXj(a){var b,c;b=a.xr;c=b.kZ^1;b.kZ=c;b=new K;M(b);Jt(H(b,C(241)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xm(){B.call(this);this.tU=null;}
function A3c(a){var b,c,d,e,f;b=a.tU;c=(b.ed+3|0)%6|0;b.ed=c;d=b.eU.data;e=d.length;f=0;while(f<e){b=d[f];b.b9=c;b=b.cA;if(b!==null)b.jg=1;f=f+1|0;}}
function Xl(){B.call(this);this.we=null;}
function APZ(a){var b;b=a.we;b.ce=b.ce?0:1;Iy(b.dd);b.dd=AHu();N5(b);AAv(b,b.i,b.k,b.cG.cb);}
function Xk(){B.call(this);this.rk=null;}
function ARH(a){var b;b=a.rk;b.lU=b.lU?0:1;}
function Xf(){B.call(this);this.zb=null;}
function A2K(a){var b;b=a.zb;b.pY=b.pY?0:1;}
function UG(){B.call(this);this.sv=null;}
function AP2(a){var b;b=a.sv;YF(b,b.lH,b.n6);}
function UH(){B.call(this);this.rI=null;}
function AZ1(a){var b;b=a.rI;YF(b,b.n6,b.lH);}
var AGi=G();
function Ns(){B.call(this);this.Dg=null;}
var A6Z=null;var A7r=null;function AX$(){AX$=Bo(Ns);A22();}
function ANH(a){var b=new Ns();AHX(b,a);return b;}
function AHX(a,b){AX$();a.Dg=b;}
function A22(){A6Z=ANH(C(242));A7r=ANH(C(243));}
var AEL=G(0);
function AIL(b,c,d){return IB(b,c,d,255,new B0);}
function IB(b,c,d,e,f){Cw(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Vd(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOz(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bt=h+i;e.bf=j+i;return e;}
function It(b,c,d,e,f){f=Vd(b,c,d,f);f.bC=e;return f;}
function HV(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Z0=G();
function AOE(a,b){var c,d,e;c=b.cJ;d=c&&!b.bJ&&!b.dy&&!b.ky?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bJ&&!c&&!b.dy&&!b.ky?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.oO=1;}return 0;}
function ZZ(){B.call(this);this.xj=null;}
function AWf(a,b){var c;c=a.xj.d_;return c!==null&&c.iw(b)?1:0;}
var LF=G(0);
function AIl(){var a=this;Fm.call(a);a.cn=null;a.m=0;}
function BD(){var a=new AIl();AOk(a);return a;}
function A5u(a){var b=new AIl();AEi(b,a);return b;}
function AOk(a){AEi(a,10);}
function AEi(a,b){a.cn=Q(B,b);}
function MP(a,b){var c,d;c=a.cn.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cn=C6(a.cn,d);}}
function Bv(a,b){Ks(a,b);return a.cn.data[b];}
function AZM(a){return a.m;}
function Br(a,b){var c,d;MP(a,a.m+1|0);c=a.cn.data;d=a.m;a.m=d+1|0;c[d]=b;a.b0=a.b0+1|0;return 1;}
function ZM(a,b,c){var d,e,f;QA(a,b);MP(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cn.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cn.data[b]=c;a.m=d+1|0;a.b0=a.b0+1|0;}
function EL(a,b){var c,d,e,f;Ks(a,b);c=a.cn.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b0=a.b0+1|0;return d;}
function UD(a,b){var c;c=K6(a,b);if(c<0)return 0;EL(a,c);return 1;}
function Iu(a){AEW(a.cn,0,a.m,null);a.m=0;a.b0=a.b0+1|0;}
function AIy(a,b,c){var d,e,f,g,h,i;QA(a,b);if(c.eC())return 0;MP(a,a.m+c.c1()|0);d=c.c1();e=a.m;f=e-1|0;while(f>=b){g=a.cn.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.b5();i=0;while(i<d){g=a.cn.data;e=b+1|0;g[b]=h.b7();i=i+1|0;b=e;}a.b0=a.b0+1|0;return 1;}
function Ks(a,b){var c;if(b>=0&&b<a.m)return;c=new BI;X(c);N(c);}
function QA(a,b){var c;if(b>=0&&b<=a.m)return;c=new BI;X(c);N(c);}
function CL(a,b){var c;c=0;while(c<a.m){b.f(a.cn.data[c]);c=c+1|0;}}
function Kf(){var a=this;B.call(a);a.u=null;a.t=null;a.X=null;a.bl=null;}
function Sp(){var a=new Kf();AB2(a);return a;}
function S4(a,b,c,d){var e=new Kf();AMX(e,a,b,c,d);return e;}
function AB2(a){a.u=new Bg;a.t=new Bg;a.X=new B0;a.bl=new B0;}
function AMX(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.X=new B0;a.bl=new B0;Hd(a,b,c,d,e);}
function Hd(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function AA2(a){V(a.t,0,0);}
function K$(a){var b;b=a.t;return Bb(b.a,b.b)?0:1;}
function Fa(a,b){return Hw(b,a.u,a.t);}
function ZI(a,b,c,d){var e;e=a.u;Bt(b,e.a+c|0,e.b+d|0,a.t,a.X);}
function VP(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bl;i=a.X;Gp(b,b.iU);Gy(b.iU,b.Y,d,e,g,b.c6);NZ(b.iU,b.Y,c);g=b.iU;j=b.Y;Fz(j,g.vZ,h);Fz(j,g.vX,i);c=g.sQ;j.uniform2f(c,f,0.0);FZ(b);}
var Fj=G();
function Nq(){Fj.call(this);this.EP=null;}
function AAM(){Fj.call(this);this.EK=null;}
function YS(){Fj.call(this);this.DP=null;}
var Hb=G(0);
var Sw=G(0);
function B0(){var a=this;B.call(a);a.bn=0.0;a.bt=0.0;a.bf=0.0;a.bC=0.0;}
function ADM(a,b,c,d){var e=new B0();A0y(e,a,b,c,d);return e;}
function AK0(a){var b=new B0();AJ7(b,a);return b;}
function A0y(a,b,c,d,e){a.bn=b;a.bt=c;a.bf=d;a.bC=e;}
function Cw(a,b,c,d,e){a.bn=b;a.bt=c;a.bf=d;a.bC=e;}
function AJ7(a,b){a.bn=b.bn;a.bt=b.bt;a.bf=b.bf;a.bC=b.bC;}
function BP(a,b){a.bn=b.bn;a.bt=b.bt;a.bf=b.bf;a.bC=b.bC;return a;}
function AUn(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BE(a)===BE(b)){b=b;if(b.bn===a.bn&&b.bt===a.bt&&b.bf===a.bf&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
function Ly(){var a=this;B.call(a);a.oi=null;a.Cj=null;a.oZ=0.0;a.Cw=0;a.CM=0;a.tm=0;a.Dr=0;a.el=0.0;a.eF=0.0;a.Cn=0.0;a.p7=0.0;a.Cs=0;a.qX=null;}
function LI(a,b){return Nb(a,b)+a.tm|0;}
function Nb(a,b){return (b-E6(a)|0)/2|0;}
function E6(a){return CY(a.el+a.eF);}
function Nc(a,b){return CY((a.el+a.eF)*b);}
function Is(){var a=this;B.call(a);a.eI=null;a.f1=null;a.fz=null;}
var A6I=0;function AGp(a){var b;b=a.f1;if(b!==null){A6I=A6I-1|0;a.eI.d0.deleteTexture(b);a.f1=null;}}
function BZ(a){return a.fz.a;}
function Do(a){return a.fz.b;}
function S8(a,b,c,d){var e;e=a.fz;e.a=b;e.b=c;On(a);a.eI.d0.texStorage2D(3553,1,d,b,c);e=a.eI.d0;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function On(a){var b,c;b=a.eI.d0;c=a.f1;b.bindTexture(3553,c);}
function CM(a,b){WG(a,b.nV,b.no,32856);YP(a,b,0,0);}
function WG(a,b,c,d){var e,f,g,h;a:{e=a.fz;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){On(a);break a;}e=a.eI.d0;h=a.f1;e.deleteTexture(h);a.f1=a.eI.d0.createTexture();S8(a,b,c,d);break a;}}S8(a,b,c,d);}}
function JK(a,b,c,d){On(a);YP(a,b,c,d);}
function YP(a,b,c,d){var e;e=a.eI.d0;b=b.i9;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var YI=G(0);
var A7s=0.0;function LB(b){Cw(b,1.0471975803375244,0.75,1.25,0.375);}
function UR(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jh(b.bC,Jh(c,A7s));Cw(d,b.bn/c,b.bt*c,ATS(b.bf*c,1.25),e);}
function WY(b){var c;c=b.bt;return c-(c|0)>=0.25?0.0:0.5;}
function AEp(){A7s=M5(M5(0.5,0.375),4.0);}
var OE=G(0);
function GB(a){return DY(a,null);}
function Rk(b){var c;c=new ZS;c.vk=b;return c;}
function Y0(){B.call(this);this.tA=null;}
function AXN(a){KI(a.tA);}
function YZ(){B.call(this);this.vS=null;}
function AUO(a){KY(a.vS);}
function AKM(){var a=this;B.call(a);a.bK=null;a.bB=null;a.ds=0;}
function AMj(){var a=new AKM();A2P(a);return a;}
function AWu(a){var b=new AKM();AQX(b,a);return b;}
function A2P(a){a.bK=new Hc;a.bB=new Hc;}
function AQX(a,b){a.bK=new Hc;a.bB=new Hc;JJ(a,b);}
function JJ(a,b){ABR(a.bK,b.bK);ABR(a.bB,b.bB);a.ds=b.ds;}
function N2(a,b,c){Ce(a.bB,b,c);if(!a.ds)Ce(a.bK,b,c);}
function QG(a,b){Ce(a.bK,b,0);Ce(a.bB,b+1|0,0);}
function Es(a){if(RX(a.bK,a.bB)>0)return a.bB;return a.bK;}
function F3(a){if(RX(a.bK,a.bB)<0)return a.bB;return a.bK;}
function AJ4(a,b){var c,d,e,f;c=a.bK;d=c.K;e=a.bB;if(d==e.K&&c.ba==e.ba?1:0)return null;c=Es(a);e=F3(a);d=c.K;if(d<=b){f=BL(b,e.K);if(f<=0)return BH(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dx(a){var b,c;b=a.bK;c=a.bB;return (b.K==c.K&&b.ba==c.ba?1:0)?0:1;}
function Tt(){var a=this;B.call(a);a.fq=null;a.fn=0;a.dK=0;}
function ACn(a,b){var c,d,e;c=a.fn;d=a.fq;if(c==d.data.length)a.fq=C6(d,c+16|0);d=a.fq.data;e=a.fn;a.fn=e+1|0;d[e]=b;}
function ZP(a){var b,c,d;b=a.dK;c=a.fn-1|0;if(b==c)a.dK=b-1|0;d=a.fq.data;a.fn=c;d[c]=null;}
var GV=G();
function ZJ(){var a=this;GV.call(a);a.B=null;a.dg=null;a.e3=null;a.dP=null;a.dE=null;a.iM=null;a.lC=null;a.cl=0;a.nu=0;a.zL=0.0;}
function Cc(a,b){return a.B.data[b];}
function CI(a){return a.B.data.length;}
function ACc(a){return FA(a,CI(a));}
function Gt(a,b){return a.B.data[b].S;}
function AKC(a,b,c){var d,e,f,g,h;d=a.B;e=d.data;f=e[b];d=C6(d,e.length+1|0);e=d.data;a.B=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D7(Q(Cv,0));a.B.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=D7(Q(Cv,0));}else{e=(IN(f,c)).data;d=a.B.data;d[b]=e[0];d[b+1|0]=e[1];}F2(a,b,c,0,C(206));}
function LC(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=D7(L1(d.s,e.s));g=a.B;h=g.data.length;if(b<h&&b>=0){i=Q(DJ,h-1|0);c=i.data;ZC(g,b,i);c[b]=f;a.B=i;return;}d=new Bw;X(d);N(d);}
function OY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].S?0:1)){d=(Cc(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F2(a,b,c,1,ZV(e));h=a.B.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=ZC(d,e,Q(Cv,f-1|0));else{j=i[e];if(c<=0)k=Ed(Dw(j.v,1),j.bX,j.bF);else if(c>=(J(j.v)-1|0)){k=new Cv;l=j.v;ABc(k,Cs(l,0,J(l)-1|0),j.bX,j.bF);}else{d=B7(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=Ed(Hn(d),j.bX,j.bF);}i[e]=k;}h.S=h.S-1|0;EZ(h);}else if(b!=(d.length-1|0)){F2(a,b,c,1,C(206));LC(a,b);}}
function AD9(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Z9(a.B.data[b],c,e[0]);return;}g=f-1|0;d=(IN(a.B.data[b],c)).data;h=d[0];i=d[1];d=a.B;j=C6(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);MB(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gl(e[m])?XI(e[m]):D7(Q(Cv,0));d[b+m|0]=k;m=m+1|0;}MB(i,0,0,e[g]);d[b+g|0]=i;a.B=j;}
function UL(a,b){var c,d,e,f,g,h,i,j,k;c=Es(b);d=F3(b);e=c.K;if(e==d.K)return Cs(FH(a.B.data[e]),c.ba,d.ba);f=new K;M(f);b=a.B.data[c.K];e=c.ba;BM(BU(f,Dw(FH(b),e)),10);g=a.B;h=g.data;e=c.K+1|0;i=d.K;j=h.length;if(e>=0&&i>=e&&i<=j){k=AQA(g,e,i);b=new VW;b.An=f;while(true){c=new X4;c.BP=b;if(!Jm(k,c))break;}b=a.B.data[d.K];i=d.ba;BU(f,Cs(FH(b),0,i));return L(f);}b=new AC6;X(b);N(b);}
function O4(a,b,c){var d;ACU(a,b);d=Es(b);F2(a,d.K,d.ba,1,c);}
function ACU(a,b){var c,d,e,f,g,h,i;a:{c=Es(b);d=F3(b);e=c.K;if(e==d.K)HI(a.B.data[e],c.ba,d.ba);else{b=a.B.data[e];HI(b,c.ba,b.S);HI(a.B.data[d.K],0,d.ba);e=c.K+1|0;f=d.K;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DJ,(h-f|0)+e|0);AFA(g,e,f,i);a.B=i;LC(a,c.K);break a;}b=new Bw;X(b);N(b);}b=new Bw;X(b);N(b);}}}
function I8(a,b,c){return DT(b,GE(Cc(a,b),c));}
function ADl(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(Cc(a,c)).S|0)>=b)return BH(c,b-d|0);d=d+((Cc(a,c)).S+1|0)|0;c=c+1|0;}return BH(e,0);}
function FA(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+Gt(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function L0(a,b){return Oi(Cc(a,b.br),b.bw);}
function E_(a){var b,c,d,e,f,g,h,i,j;b=B7(ACc(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;QS(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F2(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cl=a.cl+1|0;f=a.iM;g=Q(G5,1);h=new G5;h.eg=b;h.eZ=c;i=Mh(e,C(206),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BH(b,c+J(i[0])|0);break a;}k=BH((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BH(b,c);}i=g.data;h.ps=k;h.n$=d;h.gN=e;i[0]=h;Br(f,g);Ng(a,b,c,d,e);}
function Ng(a,b,c,d,e){var f;f=FA(a,b)+c|0;if(!d){XH(a.dg,f,J(e));TC(a.e3,f,J(e));}else{U3(a.dg,f,J(e));Pi(a.e3,f,J(e));}}
function WL(a,b){var c,d,e;c=Mh(b.gN,C(206),(-1));if(b.n$){AD9(a,b.eg,b.eZ,c);XH(a.dg,FA(a,b.eg)+b.eZ|0,J(b.gN));TC(a.e3,FA(a,b.eg)+b.eZ|0,J(b.gN));}else{c=c.data;d=AMj();Ce(d.bK,b.eg,b.eZ);e=c.length;if(e==1)Ce(d.bB,b.eg,b.eZ+J(c[0])|0);else Ce(d.bB,(b.eg+e|0)-1|0,J(c[e-1|0]));ACU(a,d);U3(a.dg,FA(a,b.eg)+b.eZ|0,J(b.gN));Pi(a.e3,FA(a,b.eg)+b.eZ|0,J(b.gN));}return b.ps;}
function ABp(a){return a.nu==a.cl?0:1;}
function KA(a){a.nu=a.cl;}
function Na(a){var b,c,d;a.lC=BO(a.B.data.length+1|0);b=0;while(b<a.B.data.length){c=a.lC.data;d=b+1|0;c[d]=(c[b]+(Cc(a,b)).S|0)+1|0;b=d;}}
function VE(a,b){var c,d,e,f,g,h;c=a.lC;if(c===null){d=0;e=0;a:{while(true){c=a.B.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DT(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DT(f,0);}return h;}d=AJY(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DT(d,b-(d<0?0:a.lC.data[d])|0);if(h.bw>=(Cc(a,h.br)).S){h.br=h.br+1|0;h.bw=0;}return h;}
var Mb=G(0);
function KQ(a){return L2(a.tk(),a.pa());}
function L2(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BM(BU(e,b[f]),47);f=f+1|0;}return L(BU(e,c));}
var Tx=G(0);
function SL(){var a=this;B.call(a);a.io=null;a.f8=null;a.jR=null;}
function AJ1(a,b){var c=new SL();APc(c,a,b);return c;}
function A3o(a,b,c){var d=new SL();AEI(d,a,b,c);return d;}
function APc(a,b,c){AEI(a,b,c,Q(BK,0));}
function AEI(a,b,c,d){a.io=b;a.f8=c;a.jR=d;}
function ER(a){var b;b=a.io;return H3(b!==null?b.name:a.f8.name);}
function AL1(a){return a.jR;}
function UX(a,b,c){var d,e,f;d=AKN(c);e=new Vo;e.q9=b;b=a.f8;if(b!==null)b.text().then(Bx(e,"f"),Bx(d,"f"));else{b=a.io.getFile();f=new Vp;f.r0=e;f.r1=d;b.then(Bx(f,"f"),Bx(d,"f"));}}
function AKN(b){var c;c=new Ty;c.x7=b;return c;}
function AYg(a){var b,c,d,e,f,g,h,i;if(a.f8===null)b=L2(a.jR,ER(a));else{c=a.jR;b=ER(a);d=a.f8.size;e=d|0;if(e!==d){f=ER(a);g=new K;M(g);H(H(g,C(244)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BU(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BU(g,C(37));H(g,i[h]);h=h+1|0;}BU(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(245)),b),C(246)),e);b=L(g);}return b;}
function ALM(a){return (AFI(ER(a))*31|0)+AGy(a.jR)|0;}
var ACI=G(0);
function AJM(){B.call(this);this.iN=null;}
function A3C(a){var b=new AJM();AZl(b,a);return b;}
function AZl(a,b){a.iN=b;}
function EO(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iN));}
function CP(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iN));}
function AWy(a){var b,c;b=a.iN.byteLength;c=new K;M(c);H(U(H(c,C(247)),b),C(248));return L(c);}
function ZS(){B.call(this);this.vk=null;}
function DY(a,b){ZK(a.vk,b);return 1;}
function Hc(){var a=this;B.call(a);a.K=0;a.ba=0;}
function Ce(a,b,c){a.K=b;a.ba=c;}
function ABR(a,b){a.K=b.K;a.ba=b.ba;}
function RX(a,b){var c;c=BL(a.K,b.K);if(c)return c;return BL(a.ba,b.ba);}
function NM(){var a=this;B.call(a);a.py=null;a.oF=null;}
function L7(a){return a.py.br;}
function KN(a){return a.py.bw;}
function DJ(){var a=this;B.call(a);a.s=null;a.S=0;a.gg=null;a.eV=null;a.es=null;a.im=null;a.gY=0;a.jg=0;a.jB=0;}
var A7t=0;var A7u=0;var A7m=0;function XI(a){var b=new DJ();AKb(b,a);return b;}
function D7(a){var b=new DJ();Zk(b,a);return b;}
function AKb(a,b){var c;c=Q(Cv,1);c.data[0]=AIV(b);Zk(a,c);}
function Zk(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;EZ(a);}
function Jo(a){return a.s.data.length;}
function JS(a,b){return a.s.data[b];}
function GE(a,b){var c;c=Kc(a,b);return c<=0?0:a.es.data[c-1|0];}
function Kc(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.es!==null&&!a.jB)){Vh(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.es.data[d]=e;d=d+1|0;}a.jB=0;}d=ABn(a.es,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Oi(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Kc(a,b)];}
function HI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.s=Q(Cv,0);EZ(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BL(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=ZC(g,e,Q(Cv,g.data.length-1|0));a.S=a.S-d|0;EZ(a);return;}a.s.data[e]=Ed(Fq(Cs(k.v,0,b),Dw(k.v,c)),k.bX,k.bF);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=Ed(Cs(l.v,0,b),l.bX,l.bF);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=Ed(Dw(m.v,c),m.bX,m.bF);g=a.s;a.s=AFA(g,e,f,Q(Cv,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;EZ(a);}
function IN(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DJ,[D7(Q(Cv,0)),a]);if(b>=a.S)return I(DJ,[a,D7(Q(Cv,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DJ,[D7(Lt(c,0,Q(Cv,d))),D7(Lt(c,d,Q(Cv,f-d|0)))]);h=e[d];e=Lt(c,0,Q(Cv,d+1|0));i=e.data;j=Lt(c,d,Q(Cv,f-d|0));c=j.data;i[d]=Ed(Cs(h.v,0,b),h.bX,h.bF);c[0]=Ed(Dw(h.v,b),h.bX,h.bF);return I(DJ,[D7(e),D7(j)]);}
function Z9(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}MB(a,d,b,c);}
function MB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gl(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cv,1);h.data[0]=AIV(d);a.s=h;}else if(!b&&!c){h=Q(Cv,g+1|0);f=h.data;Dh(e,0,h,1,g);f[0]=AIV(d);a.s=h;}else{i=f[b];if(c<=0)j=Ed(Fq(d,i.v),i.bX,i.bF);else if(c>=J(i.v))j=Ed(Fq(i.v,d),i.bX,i.bF);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B7(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=Ed(Hn(e),i.bX,i.bF);}f[b]=j;}a.S=a.S
+J(d)|0;EZ(a);}
function Pk(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Ma(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Nv(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gg;if(!(e!==null&&e.data.length>=d)){a.gg=ALw(d);a.eV=BO(d);a.gY=1;}Vh(a);if(!a.gY)A7u=A7u+1|0;else{f=0;g=0.0;A7t=A7t+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.es.data[h]=f;Cm(b,i[Kv(j)]);g=g+Eq(b,j.v);a.gg.data[h]=g;a.eV.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.gY=0;a.jB=0;}}
function Vh(a){var b;b=a.es;if(!(b!==null&&b.data.length>=a.s.data.length)){a.es=BO(a.s.data.length);a.jB=1;}}
function Tc(a){a.gY=1;a.im=null;}
function EZ(a){Tc(a);a.jg=1;a.jB=1;}
function Z4(a,b,c,d){var e,f,g,h,i,j,k;if(a.im===null)a.im=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.im.data[d];if(e===null){e=c.data;f=a.s.data[d];Cm(b,e[Kv(f)]);f=f.v;e=BO(J(f)-1|0);c=Gn(f);g=!d?0.0:a.gg.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BK;k=i+1|0;OC(f,c,0,k);h[i]=g+Eq(b,f)+0.5|0;i=k;}a.im.data[d]=e;}return e;}
function GQ(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gY&&a.eV!==null))Nv(a,c,d);if(b>=a.S)return a.eV.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BL(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eV.data[f];}return (Z4(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FB(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eV.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G2(a,b){var c;if(b>=a.S)return b+1|0;c=Kc(a,b);return a.es.data[c];}
function FH(a){var b,c,d,e;b=new K;GF(b,a.S);c=a.s.data;d=c.length;e=0;while(e<d){BU(b,c[e].v);e=e+1|0;}return L(b);}
function AFz(){A7m=0;}
function Yq(){var a=this;B.call(a);a.fB=null;a.fa=null;}
function AWn(a,b){var c=new Yq();AXr(c,a,b);return c;}
function AXr(a,b,c){a.fB=b;a.fa=c;}
function TC(a,b,c){var d;d=a.fB;if(d===null)return;Zi(a,d,b,c);}
function Pi(a,b,c){var d;d=a.fB;if(d===null)return;ABt(a,d,b,c);}
function Zi(a,b,c,d){var e,f,g,h;e=b.eX.b5();while(e.cz()){VL(a,e.b7(),c,d);}e=b.fC.b5();while(e.cz()){f=e.b7();g=new Ta;g.yJ=a;EQ(a,g,f,c,d);}h=b.hM.b5();while(h.cz()){e=h.b7();VL(a,e.lo,c,d);f=new Tb;f.wQ=a;EQ(a,f,e.kO,c,d);}b=b.cH.b5();while(b.cz()){Zi(a,b.b7(),c,d);}}
function VL(a,b,c,d){KJ(a,b.eD,c,d);}
function EQ(a,b,c,d,e){var f,g;a:{if(c instanceof HE){f=c.ho;g=new V2;g.ro=a;g.rm=b;g.rl=d;g.rn=e;CL(f,g);}else{if(!(c instanceof J_)){if(!(c instanceof Ji))break a;f=c;EQ(a,b,f.jP,d,e);EQ(a,b,f.ja,d,e);return;}g=c.id;f=new V3;f.BZ=a;f.BY=b;f.BX=d;f.BW=e;CL(g,f);}}if(c!==null){c=c.fR;if(c!==null)b.lS(c,CX(d),CX(e));}}
function KJ(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e+d|0;}
function ABt(a,b,c,d){var e,f,g,h;e=b.eX.b5();while(e.cz()){JR(a,(e.b7()).eD,c,d);}e=b.fC.b5();while(e.cz()){f=e.b7();g=new Sm;g.uR=a;EQ(a,g,f,c,d);}h=b.hM.b5();while(h.cz()){e=h.b7();JR(a,e.lo.eD,c,d);f=new So;f.Aa=a;EQ(a,f,e.kO,c,d);}b.eX.pH(new Sl);b.fC.pH(new Sk);b=b.cH.b5();while(b.cz()){ABt(a,b.b7(),c,d);}}
function JR(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e-d|0;}
function Lj(){var a=this;Ef.call(a);a.c8=0;a.b3=null;a.cZ=0;a.B0=0.0;a.ni=0;}
function JQ(){var a=new Lj();QJ(a);return a;}
function AXz(a,b){return Q(HU,b);}
function QJ(a){var b;b=AHw(16);a.c8=0;a.b3=Q(HU,b);a.B0=0.75;TF(a);}
function AHw(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fu(a){var b;if(a.c8>0){a.c8=0;b=a.b3;AEW(b,0,b.data.length,null);a.cZ=a.cZ+1|0;}}
function TF(a){a.ni=a.b3.data.length*a.B0|0;}
function MW(a,b){return AAX(a,b)===null?0:1;}
function AB6(a){var b;b=new TG;b.yX=a;return b;}
function Co(a,b){var c;c=AAX(a,b);if(c===null)return null;return c.cO;}
function AAX(a,b){var c,d;if(b===null)c=Sf(a);else{d=b.gz();c=Q9(a,b,d&(a.b3.data.length-1|0),d);}return c;}
function Q9(a,b,c,d){var e;e=a.b3.data[c];while(e!==null&&!(e.l1==d&&AIg(b,e.cS))){e=e.cV;}return e;}
function Sf(a){var b;b=a.b3.data[0];while(b!==null&&b.cS!==null){b=b.cV;}return b;}
function M7(a){var b;if(a.o2===null){b=new Qt;b.jj=a;a.o2=b;}return a.o2;}
function Er(a,b,c){var d,e,f,g;if(b===null){d=Sf(a);if(d===null){a.cZ=a.cZ+1|0;d=TA(a,null,0,0);e=a.c8+1|0;a.c8=e;if(e>a.ni)AB3(a);}}else{e=b.gz();f=e&(a.b3.data.length-1|0);d=Q9(a,b,f,e);if(d===null){a.cZ=a.cZ+1|0;d=TA(a,b,f,e);e=a.c8+1|0;a.c8=e;if(e>a.ni)AB3(a);}}g=d.cO;d.cO=c;return g;}
function TA(a,b,c,d){var e,f;e=new HU;VX(e,b,null);e.l1=d;f=a.b3.data;e.cV=f[c];f[c]=e;return e;}
function AI4(a,b){var c,d,e,f,g,h,i,j;c=AHw(!b?1:b<<1);d=Q(HU,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b3.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.l1&b;j=h.cV;h.cV=e[i];e[i]=h;h=j;}f=f+1|0;}a.b3=d;TF(a);}
function AB3(a){AI4(a,a.b3.data.length);}
function Lv(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b3.data[0];while(e!==null){if(e.cS===null)break a;b=e.cV;d=e;e=b;}}else{f=b.gz();g=a.b3.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.l1==f&&AIg(b,e.cS))){h=e.cV;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cV=e.cV;else a.b3.data[c]=e.cV;a.cZ=a.cZ+1|0;a.c8=a.c8-1|0;}if(e===null)return null;return e.cO;}
function AIg(b,c){return b!==c&&!b.bc(c)?0:1;}
function Cv(){var a=this;B.call(a);a.v=null;a.bX=0;a.bF=0;}
function AIV(a){var b=new Cv();AW0(b,a);return b;}
function Ed(a,b,c){var d=new Cv();ABc(d,a,b,c);return d;}
function AW0(a,b){ABc(a,b,0,0);}
function ABc(a,b,c,d){a.v=b;a.bX=c;a.bF=d;}
function Kv(a){return a.bF&3;}
function Jj(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ma(a){return J(a.v);}
var NJ=G(Lj);
function ZQ(){var a=this;B.call(a);a.de=null;a.e8=0;}
var A7v=null;function AGP(a){var b=new ZQ();AHd(b,a);return b;}
function AHd(a,b){a.e8=0;a.de=b;}
function QC(a,b){var c;if(b.eM)return b;b=B1(b.bo);while(true){if(!B4(b))return null;c=QC(a,B6(b));if(c!==null)break;}return c;}
function Xc(a,b,c){var d,e,f,g;d=NB(a,a.de,b);if(d===null)return;b=c.ci;e=b===null?A7w:b.cH;f=c.bo;c=a.de;if(d===c){if(c.ci===null)c.ci=b;b=new Z8;b.yF=a;CL(f,b);b=new Z7;b.uP=a;e.fk(b);b=a.de;b.bo=f;b.ci.cH=e;b.eM=0;return;}if(!CJ(f)){c=d.hm;if(c!==null){b=new XE;b.rt=c;CL(f,b);g=K6(c.bo,d);if(g==(-1))H1(c.bo,f);else{EL(c.bo,g);AIy(c.bo,g,f);}}}b=d.ci;if(b!==null){b=b.hf;c=new Sr;c.sM=b;e.fk(c);g=K6(b.cH,d.ci);if(g==(-1))H1(b.cH,e);else{b.cH.qf(g);b.cH.uh(g,e);}}}
function NB(a,b,c){var d,e,f,g;d=b.bU;if(d.bY==c.bY&&d.bW==c.bW?1:0){d=B1(b.bo);while(B4(d)){e=NB(a,B6(d),c);if(e!==null)return e;}return b;}b=B1(b.bo);while(true){if(!B4(b))return null;d=B6(b);f=c.bY;g=c.bW;e=d.bU;if(e.bY<=f&&g<=e.bW?1:0){e=NB(a,d,c);if(e!==null)break;}}return e;}
function AA8(a,b,c){Br(c,b.bU);b=B1(b.bo);while(B4(b)){AA8(a,B6(b),c);}}
function XH(a,b,c){a.e8=0;Lm(a,a.de,b,c);}
function Lm(a,b,c,d){var e;if(Dd(b)<c)return;a:{if(Dp(b)>c){LX(b,d);Hm(b,d);b=B1(b.bo);while(B4(b)){Lm(a,B6(b),c,d);}}else{if(!MN(b,c)){if(a.e8)break a;if(Dd(b)!=c)break a;}Hm(b,d);if(Dp(b)==c&&a.e8)LX(b,d);e=B1(b.bo);while(B4(e)){Lm(a,B6(e),c,d);}if(!a.e8){b.eM=1;a.e8=1;}}}}
function U3(a,b,c){a.e8=0;MR(a,a.de,b,c);}
function MR(a,b,c,d){var e,f,g,h,i,j;if(Dd(b)<c)return;e=Dp(b);f=c+d|0;if(e>f){e= -d|0;LX(b,e);Hm(b,e);g=B1(b.bo);while(B4(g)){MR(a,B6(g),c,d);}b.bo=Wx(a,b.bo);}else{h=b.bU;if(c<=h.bY&&h.bW<=f?1:0){if(b===a.de){L6(b,0);MQ(b,0);h=b.ci;if(h!==null)h.cH.jf();}else{L6(b,(-1));MQ(b,(-1));h=b.ci;if(h!==null){ADQ(h);b.ci=null;}}Iu(b.bo);}else{e=MN(b,c);f=MN(b,f);if(e&&f)Hm(b, -d|0);else if(e)MQ(b,c);else{if(!f)return;L6(b,c);Hm(b, -d|0);}h=B1(b.bo);while(B4(h)){MR(a,B6(h),c,d);}h=LU(b.bo);g=X3(0);i=new R1;j=new ACb;j.Fy
=i;j.kB=g;while(N6(h,j)){}if(!j.kB.om&&!a.e8)b.eM=1;else a.e8=1;b.bo=Wx(a,b.bo);}}}
function Wx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BD();d=null;e=A7v;f=b.cn;g=b.m;if(e===null)e=A6a;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}KZ(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b0=b.b0+1|0;b=B1(b);while(B4(b)){m=B6(b);if(Dp(m)==Dd(m))continue;if(!m.eM){if(d!==null){Br(c,d);d=null;}Br(c,m);}else if(d===null)d=m;else{n=ATD(KP(Be(Dp(d),Dp(m)),Bd(Dd(d),Dd(m)),d.bU.fO),d.hm,d.ci);n.eM=1;d=m.ci;if(d===null)d=n;else{ADQ(d);d=n;}}}if(d!==null)Br(c,d);return c;}
function ADi(a,b,c,d){var e,f,g,h,i,j;if((Dd(c)-Dp(c)|0)<43)e=Cs(d,Dp(c),Dd(c));else{e=Cs(d,Dp(c),Dp(c)+20|0);f=Cs(d,Dd(c)-20|0,Dd(c));g=new K;M(g);H(H(H(g,e),C(168)),f);e=L(g);}e=AB9(e,C(206),C(249));f=Bu();g=Ck(c);h=new K;M(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bk(f,L(h));c=B1(c.bo);j=b+1|0;while(B4(c)){ADi(a,j,B6(c),d);}}
function AHm(){A7v=new UT;}
function AK5(){var a=this;B.call(a);a.bY=0;a.bW=0;a.fO=0;}
function KP(a,b,c){var d=new AK5();AWX(d,a,b,c);return d;}
function AWX(a,b,c,d){a.bY=b;a.bW=c;a.fO=d;}
function ASM(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.bY==c.bY&&a.bW==c.bW&&a.fO==c.fO?1:0;}return 0;}
function AV$(a,b){var c;b=b;c=BL(a.bY,b.bY);if(!c)c=BL(b.bW,a.bW);return c;}
var UT=G();
function AP4(a,b,c){var d;b=b;c=c;b=b.bU;c=c.bU;d=BL(b.bY,c.bY);if(!d)d=BL(c.bW,b.bW);return d;}
function Zo(){var a=this;B.call(a);a.bU=null;a.hm=null;a.bo=null;a.ci=null;a.eM=0;}
function ATD(a,b,c){var d=new Zo();AGO(d,a,b,c);return d;}
function AGO(a,b,c,d){a.eM=0;a.bU=b;a.hm=c;a.bo=BD();a.ci=d;}
function AHD(b){return Zv(b,null);}
function Zv(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=KP(d,e,f);j=new Zo;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGO(j,i,null,l);m=0;while(m<g){l=Zv(b,c);l.hm=j;Br(j.bo,l);m=m+1|0;}return j;}
function AEB(b,c,d){var e,f,g,h,i;a:{e=b.bU;f=b.bo;g=e.bY;h=e.bW;i=e.fO;Bh(c,g);FX(c,h,i);Bh(c,f.m);if(d!==null){e=b.ci;if(e!==null&&ACF(d,e)){g=(Oo(d,b.ci)).bq;break a;}}g=(-1);}Bh(c,g);b=B1(f);while(B4(b)){AEB(B6(b),c,d);}}
function Dp(a){return a.bU.bY;}
function Dd(a){return a.bU.bW;}
function L6(a,b){a.bU.bY=b;}
function MQ(a,b){a.bU.bW=b;}
function LX(a,b){var c;c=a.bU;c.bY=c.bY+b|0;}
function Hm(a,b){var c;c=a.bU;c.bW=c.bW+b|0;}
function MN(a,b){return Dp(a)<=b&&b<Dd(a)?1:0;}
function ALX(a){var b,c,d,e,f;b=a.bU;c=b.bY;d=b.bW;e=b.fO;b=new K;M(b);BM(b,40);BM(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eM;f=new K;M(f);Jt(H(H(f,b),C(37)),c);return L(f);}
function AMF(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BN(a.bU,c.bU)&&BN(a.bo,c.bo)?1:0;}return 0;}
var Jl=G(0);
function GR(){var a=this;B.call(a);a.cS=null;a.cO=null;}
function A7x(a,b){var c=new GR();VX(c,a,b);return c;}
function VX(a,b,c){a.cS=b;a.cO=c;}
function AWA(a,b){var c,d;if(a===b)return 1;if(!I_(b,Jl))return 0;a:{b:{c:{d:{c=b;b=a.cS;if(b!==null){if(!b.bc(c.cS))break c;else break d;}if(c.cS!==null)break c;}b=a.cO;if(b!==null){if(!b.bc(c.cO))break c;else break b;}if(c.cO===null)break b;}d=0;break a;}d=1;}return d;}
function HU(){var a=this;GR.call(a);a.l1=0;a.cV=null;}
function NG(){var a=this;Lr.call(a);a.x6=null;a.rp=null;}
function AEF(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.x6;e=0;f=0;g=a.rp;a:{while(true){if((e+32|0)>f&&D_(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Cg(b)+j|0,i.length);Pl(b,d,j,f-j|0);e=0;}if(!D_(c)){k=!D_(b)&&e>=f?A6U:A6T;break a;}i=g.data;j=Be(Cg(c),i.length);l=new W$;l.qv=b;l.yu=c;k=AFV(a,d,e,f,g,0,j,l);e=l.uV;j=l.vR;if(k===null){if(!D_(b)&&e>=f)k=A6U;else if(!D_(c)&&e>=f)k=A6T;}ADk(c,g,0,j);if(k!==null)break;}}Fs(b,b.Z-(f-e|0)|0);return k;}
var QB=G(NG);
function AFV(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N_(h,2))break a;i=A6T;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ov(l)){if((f+3|0)>g){j=j+(-1)|0;if(N_(h,3))break a;i=A6T;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CR(l)){i=Ev(1);break a;}if
(j>=d){if(D_(h.qv))break a;i=A6U;break a;}c=j+1|0;m=k[j];if(!Dl(m)){j=c+(-2)|0;i=Ev(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N_(h,4))break a;i=A6T;break a;}k=e.data;o=EN(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.uV=j;h.vR=f;return i;}
var I5=G(Ex);
var OT=G();
function AUf(a,b){return b.text();}
function OV(){var a=this;B.call(a);a.tD=null;a.tC=null;}
function ATI(a,b){var c,d,e,f;c=a.tD;d=a.tC;e=b.length;f=new Pp;f.Ap=b;c.f(ANX((AKs(e,f)).kd,ABZ(d)));}
var OU=G();
function AVz(a,b){AHv(b);}
function IU(){var a=this;B.call(a);a.bs=null;a.Fl=null;a.dI=null;a.jL=null;a.la=null;a.dF=null;a.kU=null;a.Bz=null;a.pI=null;a.oR=null;}
function A7y(a,b,c,d,e,f){var g=new IU();LH(g,a,b,c,d,e,f);return g;}
function IA(){var b,c,d,e,f,g,h,i,j;b=new IU;c=new J7;d=new Hi;FF();KT(d,A7z);Mw(c,d,BV(A7g),BV(A7A),BV(A7B),BV(A7g),BV(A7C),BV(A7D),BV(A7E),BV(A7F),BV(A7G),BV(A7H));e=AJt(S(C(250)));AFf();f=(A7I.hu()).data;g=f.length;h=Q(Kk,g);i=h.data;j=0;while(j<g){i[j]=f[j].nZ;j=j+1|0;}LH(b,c,e,h,AKa(S(C(251)),S(C(252)),S(C(253)),S(C(254))),Fe(),AEm(S(C(255)),S(C(256)),S(C(257)),S(C(258))));return b;}
function Mg(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IU;c=new J7;d=new Hi;AN5();KT(d,A7J);Mw(c,d,BV(A7K),BV(A7L),BV(A7M),BV(A7K),BV(A7N),BV(A7O),BV(A7P),BV(A7Q),BV(A7R),BV(A7S));e=AJt(S(C(259)));TV();f=(A7T.hu()).data;g=f.length;h=Q(Kk,g);i=h.data;j=0;while(j<g){i[j]=f[j].k9;j=j+1|0;}k=AKa(S(C(260)),S(C(261)),S(C(262)),S(C(263)));l=new IV;d=new I3;AU8();m=A7U;OA(d,m,A7V,A7W,A7X,A7Y,m);LT(l,d,AG6(),AHz(S(C(264)),S(C(265)),S(C(266))),AG6(),AHW(1,0.17499999701976776),A7Z,A70);LH(b,c,e,h,k,l,AEm(S(C(255)),S(C(256)),
S(C(257)),S(C(267))));return b;}
function LH(a,b,c,d,e,f,g){var h;h=d.data;a.kU=DP(C(167),17.0);a.Bz=DP(C(156),15.0);a.pI=DP(C(167),15.0);a.oR=DP(C(14),15.0);a.bs=b;a.Fl=c;a.jL=d;a.la=e;if(h.length>=15){a.dI=f;a.dF=g;return;}b=new BS;X(b);N(b);}
function WP(a,b){if(b===null)b=a.bs.ef;return b;}
function Ko(){var a=this;CO.call(a);a.dV=null;a.nY=null;}
function A4c(a){var b=new Ko();AHL(b,a);return b;}
function AHL(a,b){var c,d,e,f;KM(a,b,0);c=P$(a.bb);a.nY=c;d=K7(a.q,c);a.dV=d;MX(a.q,d);c=b.p.bG;d=new Yx;d.rS=a;Bc(c,d);c=b.p.bG;d=new HQ;e=a.dV;BG(e);f=new Yv;f.Bk=e;Iq(d,b,f);Bc(c,d);S2(a.dV,b.p,0);b=b.p.c4;c=new Yw;c.xJ=a;Bc(b,c);Ho(a);}
function AXT(a,b){if(J6(a.bb,b))LW(a.dV);}
function A1o(a,b){return IX(a.dV,b);}
function AOG(a){Hx(a);Il(a.dV);JM(a.bb);}
function A2A(a){return Gw(0);}
function ALr(a,b,c){var d;Iz(a,b,c);d=a.dV;Mt(d,d.i,b,c);}
function AWW(a,b){BG(b);Ip(a.nY,b);HB(a.dV,b);}
function AI7(a,b){if(b.bm!=121)return 0;return 1;}
function AEH(a,b){var c,d,e;if(DO(a.q,a.dV)){c=a.nY;b=b.j;d=a.dV;e=new RP;e.t9=a;GI(c,b,d,a,d,a,e);}return 1;}
function AH9(){var a=this;Cu.call(a);a.yw=null;a.o3=null;a.j$=null;a.eh=null;a.lR=null;a.hn=null;a.ey=null;a.jy=null;a.qs=null;a.i0=null;a.p$=null;a.p_=null;a.pp=null;a.yQ=null;a.CE=null;a.sX=0;}
function A4n(a){var b=new AH9();AYO(b,a);return b;}
function AYO(a,b){var c,d,e,f;Em(a,b);c=(IA()).bs.ef;a.yw=c;a.o3=AK0(c);a.j$=new Bg;a.eh=KK();a.lR=KK();a.hn=S4(0,0,3,3);a.ey=H_(0,0,300,300);a.jy=AXC();d=Q(BK,4);e=d.data;e[0]=C(211);e[1]=C(177);e[2]=C(227);e[3]=C(226);a.qs=d;a.i0=Q(Kf,e.length);c=b.p.bO;f=new TL;f.fw=a;Bc(c,f);c=b.p.bG;f=new YY;f.B1=a;Bc(c,f);c=b.p.ow;f=new YX;f.sp=a;Bc(c,f);c=b.p.gH;f=new YW;f.Dp=a;Bc(c,f);c=b.p.mg;f=new YV;f.Ed=a;Bc(c,f);c=b.p.c4;f=new YU;f.EJ=a;Bc(c,f);b=b.p.ft;c=new YT;c.AK=a;Bc(b,c);a.p$=ACy(a,1);a.p_=ACy(a,0);R3(a,a.eh,
a.p$);R3(a,a.lR,a.p_);a.pp=ADN(a,0);a.yQ=ADN(a,1);FM(a.ey,a.pp);FV(a.ey);Hy(a.ey,Dy(169,183,198));Ff(a.ey,a.yw);Cw(a.eh.X,1.0,1.0,1.0,1.0);Ff(a.eh,a.ey.bl);BP(a.hn.bl,a.o3);}
function R3(a,b,c){FM(b,c);FV(b);}
function Sq(a,b){It(DS(),0.5+DS()*0.5,0.5+DS()*0.5,1.0,b.X);}
function ACy(a,b){var c,d;c=D5(a.C.O,200,100,b);Ht(c,C(268),11.0);BW(c,C(269),0.0,20.0);J1(c,255,0,0);BW(c,C(269),0.25,40.0);J1(c,0,255,0);BW(c,C(269),0.5,60.0);J1(c,0,0,255);BW(c,C(269),0.75,80.0);d=CW(a.C.O);CM(d,c);EA(c);return d;}
function ADN(a,b){var c,d,e,f;c=D5(a.C.O,255,100,b);Ht(c,C(167),10.0);d=Bu();e=$rt_str(c.db.font);f=new K;M(f);H(H(f,C(270)),e);Bk(d,L(f));Eq(c,C(271));BW(c,C(271),0.0,20.0);BW(c,C(271),0.25,40.0);BW(c,C(271),0.5,60.0);BW(c,C(271),0.75,80.0);e=CW(a.C.O);CM(e,c);EA(c);return e;}
function ALK(a,b){var c;a.sX=a.sX+1|0;c=b/5.0;It(c-(c|0),1.0,1.0,1.0,a.hn.X);return AA1(a.jy,b);}
function ANx(a){var b,c,d,e,f,g,h,i;b=a.C.O;EG(b,a.o3);c=a.i0.data;d=c.length;e=0;while(e<d){ZI(c[e],b,0,0);e=e+1|0;}f=a.ey;g=f.u;g.b=(a.j$.b-f.t.b|0)-5|0;g.a=0;B_(b,0);h=0;while(h<7){f=a.ey;EE(f,b,a.pp,Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.ey;f.u.b=(a.j$.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.yQ;f=a.ey;f.u.a=Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0;SM(f,b,g,1);h=h+1|0;}SM(a.eh,b,a.p$,1);B_(b,1);g=a.lR;f=a.p_;i=g.u;h=i.a;d=i.b;g=g.t;Gp(b,b.kT);Gy(b.kT,b.Y,h,d,g,b.c6);NZ(b.kT,b.Y,f);FZ(b);B_(b,0);f=
a.CE;if(f!==null)VP(a.hn,b,f,0,0,0.0);AB1(a.jy,b,new Bg);MY(b,C(272));}
function APM(a,b,c){var d,e,f,g,h,i,j,k;d=Bu();e=Ck(b);f=new K;M(f);H(H(f,C(273)),e);Bk(d,L(f));d=Bu();f=new K;M(f);EF(H(f,C(274)),c);Bk(d,L(f));g=Cf(30.0,c);h=Cf(10.0,c);i=0;while(true){j=a.i0.data;if(i>=j.length)break;k=1+i|0;j[i]=S4(Bb(h,k)+Bb(g,i)|0,g,g,g);Sq(a,a.i0.data[i]);i=k;}V(a.hn.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eh;V(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);V(a.lR.u,(b.a/2|0)+10|0,50);Ct(a.j$,b);}
function WV(a,b){var c,d,e,f,g;c=Bu();d=!b.jM?C(275):C(276);e=b.ee;f=b.bm;g=b.zt;b=new K;M(b);Jt(H(U(H(H(H(b,d),e),C(277)),f),C(278)),g);Bk(c,L(b));return 0;}
function AA7(){var a=this;Cu.call(a);a.EL=null;a.k_=null;a.i2=null;a.h$=null;a.di=null;a.dW=null;a.m$=null;a.mY=null;a.jD=0;a.iK=null;a.iJ=null;}
function Q$(a,b,c){FM(b,c);FV(b);}
function AD8(a,b,c,d,e,f){var g,h;g=D5(f,c,120,b);Cm(g,e);e=!b?C(279):C(280);h=new K;M(h);H(H(H(h,e),d),C(154));d=L(h);BW(g,d,0.0,20.0);BW(g,d,0.25,40.0);BW(g,d,0.5,60.0);BW(g,d,0.75,80.0);BW(g,d,1.0,100.0);h=CW(f);CM(h,g);EA(g);return h;}
function ARe(a,b){return 0;}
function AV2(a){var b,c,d,e,f,g,h,i;b=a.C.O;EG(b,a.k_);B_(b,0);c=a.i2;d=c.b;e=a.h$;f=d-e.b|0;g=c.a-e.a|0;Bt(b,0,0,e,a.di.bl);Bt(b,g,0,a.h$,a.dW.bl);Bt(b,0,f,a.h$,a.di.X);Bt(b,g,f,a.h$,a.dW.X);c=a.di;e=c.u;h=e.b;i=((a.i2.b*3|0)/4|0)-(c.t.b/2|0)|0;Iv(c,b,e.a,h,a.iK,0,1);c=a.di;Iv(c,b,c.u.a,i,a.iK,1,1);c=a.dW;Iv(c,b,c.u.a,h,a.iJ,0,0);e=a.dW;Iv(e,b,e.u.a,i,a.iJ,1,0);MY(b,C(272));}
function AXd(a,b,c){var d,e;Ct(a.i2,b);V(a.h$,b.a/2|0,b.b/2|0);d=a.i2.b/4|0;e=a.di;d=d-(e.t.b/2|0)|0;V(e.u,(b.a/4|0)-(a.jD/2|0)|0,d);V(a.dW.u,((b.a*3|0)/4|0)-(a.jD/2|0)|0,d);}
function Xq(){var a=this;CO.call(a);a.yt=null;a.fb=null;a.dC=null;a.oy=null;}
function APg(a,b,c){var d;d=Gb(a.q,a.oy);JD(a.fb,d,a.q);JD(a.dC,d,a.q);}
function RH(b){return IZ(b,UN());}
function IZ(b,c){var d;d=LA();Oh(d,Nm(b,J5(c,25)),!b?null:IZ(b-1|0,c));Oh(d,Nm(b,J5(c,20)),!b?null:IZ(b-1|0,c));Oh(d,Nm(b,J5(c,15)),!b?null:IZ(b-1|0,c));Oh(d,Nm(b,J5(c,10)),!b?null:IZ(b-1|0,c));return GU(d);}
function Nm(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function Oh(b,c,d){if(d!==null)FC(b,c,d);else{d=new Ve;d.r_=c;D2(b,c,d);}}
function AN8(a,b,c){var d,e;Iz(a,b,c);b=a.q.bR;d=EB(a.fb);e=EB(a.dC);Ne(a.fb,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Ne(a.dC,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AWR(a){var b,c,d,e,f,g,h,i;Hx(a);b=a.C.O;B_(b,1);c=a.yt;d=a.q;e=d.bR;V(c.nP,e.a,Cf(2.0,d.cb));V(c.oh,Cf(2.0,d.cb),e.b);FF();f=A7G;g=d.b4;h=e.b/2|0;i=c.nP;Bt(g,0,h-(i.b/2|0)|0,i,f);g=d.b4;h=e.a/2|0;c=c.oh;Bt(g,h-(c.a/2|0)|0,0,c,f);Me(a.fb,a.q);Me(a.dC,a.q);JM(a.bb);B_(b,0);}
function APP(a,b){var c,d;c=NO(a.fb,b.j,a.q.cR);d=NO(a.dC,b.j,a.q.cR);return !c&&!d?0:1;}
function AMi(a,b,c,d){var e,f;e=Ob(a.fb,b.j,c,d);f=Ob(a.dC,b.j,c,d);return !e&&!f?0:1;}
function AAC(){CO.call(this);this.kA=null;}
function ANn(a,b,c){if(b===0.0)Y6(a);}
function Y6(a){var b,c,d,e,f,g,h,i;b=a.kA;if(b!==null){Ku(a.bb,b);NP(b);}b=(IA()).dI;c=A5y(a.q,new U1);d=DP(C(156),14.0);e=APf();f=0;while(f<300){g=Dm(f);h=new SC;h.A4=C(281);h.A1=g;h.A2=C(282);Wb(e,C(281),g,C(282),h);f=f+1|0;}W4(c,AC7(e));V8(c,b,d);g=AEq(a.q);i=GA(c,a.q);Jd(i,b.m1,b.oP);K9(g,i);GT(g,b);FP(g,C(145));a.kA=g;GD(a.bb,g);Qx(a);}
function AMB(a,b,c){Iz(a,b,c);Qx(a);}
function Qx(a){var b,c,d;b=a.q.bR;Eu(a.kA,BH((b.a*2|0)/10|0,(b.b*4|0)/10|0),BH((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kA;b=AHV(c.W.k);d=new K;M(d);H(H(d,C(283)),b);FP(c,L(d));}
function WS(){var a=this;HJ.call(a);a.mh=null;a.hY=null;a.gb=null;a.kc=null;a.r6=null;a.j8=null;a.ib=null;a.hJ=null;a.lI=0;a.hX=0;}
function PB(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hY.m>0){d=DS();e=a.hY;f=d*(e.m-1|0)|0;e=EL(e,f);EL(a.gb,f);f=a.hX;g=e.t;a.hX=f-Bb(g.a,g.b)|0;IW(a.mh,e.du);}c=c+1|0;}}
function L3(a,b){var c,d,e,f,g,h,i,j;c=Kd(a.q);Cm(c,a.kc);d=0;while(d<b){e=J5(a.j8,1+(DS()*19.0|0)|0);f=KK();g=f.du;h=a.mh;BG(c);i=new Q4;i.ue=c;BP(g,Kn(h,e,i));(Vd(DS(),1.0,1.0,f.bl)).bC=0.5;h=f.u;g=f.du;V(h,g.bn|0,g.bt|0);h=f.t;g=f.du;V(h,g.bf|0,g.bC|0);Br(a.gb,e);Br(a.hY,f);j=a.hX;h=f.t;a.hX=j+Bb(h.a,h.b)|0;d=d+1|0;}a.hJ=ML(a.mh);}
function A0Y(a){var b,c,d,e,f,g,h,i;Hx(a);b=a.C.O;B_(b,1);c=a.q.b4;if(a.gb.m){d=a.hJ;d=HF(c,d.a,d.b);Cm(d,a.kc);e=a.kc.el;Bt(c,0,0,a.hJ,a.r6);f=0;while(f<a.gb.m){g=Bv(a.hY,f);h=Bv(a.gb,f);g=g.du;BW(d,h,g.bn,g.bt+e);f=f+1|0;}g=a.ib;if(!(g!==null&&BZ(g)==a.hJ.a&&Do(a.ib)==a.hJ.b))a.ib=BY(a.ib,CW(c));CM(a.ib,d);EA(d);i=0;while(i<a.gb.m){d=Bv(a.hY,i);Hy(d,CB(0));EE(d,c,a.ib,0,0);i=i+1|0;}}B_(b,0);}
function ALD(a,b){var c,d;if(a.lI){c=a.hJ;d=Be(Bb(c.a,c.b),2211840);if(a.hX/d<=0.7)L3(a,D6(a.j8,5));else PB(a,D6(a.j8,5));}return a.lI;}
function SI(){var a=this;Cu.call(a);a.ez=null;a.h4=null;a.i1=null;a.oU=null;a.e6=0;a.uC=0;a.r7=null;a.mw=0;a.w8=0;a.xw=null;a.zW=null;}
function ALq(a){var b,c;b=a.e6;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));EG(a.ez,a.r7);Kh(a.i1,a.e6,0,Hr(a),5000,a.oU.a,20);B_(a.ez,1);Vl(a.i1,a.ez);B_(a.ez,0);b=a.e6;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));ABA(a.h4,a.e6/a.mw|0,a.ez);AAU(a.h4,a.e6,Hr(a),a.zW,a.ez);}
function AUK(a,b,c){a.oU=b;Sj(a.h4,BH(0,0),50,Hr(a),c);SO(a.h4,a.ez,0,Hr(a));}
function UF(a){return 5000-Hr(a)|0;}
function Hr(a){return Be(a.uC,a.oU.b);}
function Dt(){var a=this;Cu.call(a);a.p0=null;a.gP=null;a.qI=0.0;}
function A71(a){var b=new Dt();HM(b,a);return b;}
function HM(a,b){Em(a,b);a.p0=AIL(0,0,64);a.gP=new Bg;W1(b.bV,JO(BE(a)));}
function Z_(a){EG(a.C.O,a.p0);}
function SE(a,b,c){Ct(a.gP,b);a.qI=c;}
var Q8=G(Dt);
var W9=G(CO);
function Ha(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.bV;f=new Q3;f.Db=a;f.tV=b;g=Q(B,1);h=g.data;i=BO(1);i.data[0]=b;h[0]=i;CT(e,f,C(285),g);d=d+1|0;}}
function ADt(a,b){var c,d,e,f,g,h;c=b.data;d=Bu();e=Ck(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((K2(b,1)).iN));d=Bu();e=Ck(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BU(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BU(f,C(37));U(f,c[g]);g=g+1|0;}BU(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(287)),e),C(288)),f);Bk(d,L(h));}
function Wu(){var a=this;Dt.call(a);a.e4=null;a.gw=null;a.nF=null;a.AN=null;a.qm=null;}
function AOS(a,b){b=b/5.0;It(b-(b|0),1.0,1.0,1.0,a.gw.X);return 0;}
function AWG(a){Z_(a);EE(a.e4,a.C.O,a.AN,0,0);VP(a.gw,a.C.O,a.nF,0,0,0.0);MY(a.C.O,C(272));}
function A2y(a,b,c){var d,e,f;SE(a,b,c);V(a.gw.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.e4;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function SG(){var a=this;Dt.call(a);a.gS=null;a.q5=null;a.mt=null;a.kv=null;a.jQ=null;}
function A23(a){var b,c,d,e,f,g;Z_(a);b=a.C.O;c=a.kv;LS(b,c.a,c.b,a.jQ);b=a.gS;c=a.q5;d=a.gP;e=a.C.O;f=0;while(true){g=0;while(true){EE(b,e,c,g,f);g=g+BZ(c)|0;if(g>=d.a)break;}f=f+Do(c)|0;if(f>=d.b)break;}F9(a.C.O);}
function AOB(a,b,c){SE(a,b,c);V(a.jQ,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AAr(){var a=this;Cu.call(a);a.eK=null;a.oG=null;a.gA=null;a.b_=null;a.fj=0;a.iG=null;a.fE=0;a.DE=20;a.Fo=11;a.D_=220;a.l8=null;a.EV=5000;a.ir=0;a.gL=null;}
function ATK(a){var b,c,d,e,f,g,h;b=a.iG;c=a.fE;d=a.l8;Kh(b,c,0,d.b,5000,d.a,20);B_(a.eK,1);Vl(a.iG,a.eK);if(a.b_===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BW(a.oG,Dm(e),0.0,c);}b=CW(a.eK);a.b_=b;CM(b,a.oG);}if(a.fE<=a.fj)while(true){f=a.fj;if(f<=a.fE)break;a.fj=f-20|0;b=a.gA;g=a.ir-1|0;a.ir=g;BW(b,Dm(g),0.0,20.0);JK(a.b_,a.gA,0,a.fj%220|0);EP(a.gA);}else while(a.fj<(a.fE-20|0)){b=a.gA;g=a.ir+1|0;a.ir=g;BW(b,Dm((g+11|0)-1|0),0.0,20.0);JK(a.b_,a.gA,0,a.fj%220|0);EP(a.gA);a.fj=a.fj+20|0;}b=H_(0,0,BZ(a.b_),Do(a.b_));Iw(b,
0,0,BZ(a.b_),Do(a.b_));Hy(b,a.gL.data[0]);Ff(b,a.gL.data[1]);EE(b,a.eK,a.b_,400,0);g=a.fE%220|0;f=Be(Do(a.b_)-g|0,200);d=H_(0,0,BZ(a.b_),f);Iw(d,0,g,BZ(a.b_),f);Hy(d,a.gL.data[0]);Ff(d,a.gL.data[1]);EE(d,a.eK,a.b_,0,0);h=H_(0,f,BZ(a.b_),(Do(a.b_)-f|0)-20|0);Iw(h,0,0,BZ(a.b_),(Do(a.b_)-f|0)-20|0);Hy(h,a.gL.data[1]);Ff(h,a.gL.data[0]);EE(h,a.eK,a.b_,0,0);}
function AWT(a,b,c){Ct(a.l8,b);}
function A0C(a,b){return 0;}
function Z2(a){return 5000-a.l8.b|0;}
function Ki(){Dt.call(this);this.ea=0;}
function ZH(a){var b,c;b=a.C.bV;c=new Ud;c.xu=a;RE(b,c,Ww(a));}
function Qv(a){var b,c,d,e;b=a.ea+1|0;a.ea=b;c=JO(F(Ki));d=new K;M(d);H(H(U(H(d,C(289)),b),C(29)),c);e=L(d);c=a.C.bV;d=new VG;d.xE=e;Ts(c,e,d,Ww(a));}
function Ww(a){var b;b=new Y1;b.BI=a;return b;}
function APB(a,b,c,d){a:{switch(c){case 0:break;case 2:Qv(a);break a;default:break a;}ZH(a);}return 1;}
function St(){var a=this;Dt.call(a);a.t$=null;a.gh=null;a.lz=null;a.pj=null;a.vB=null;}
function AUm(a){var b,c,d,e,f,g,h;if(a.lz===null){b=a.C.O;c=a.vB;c=TU(b,c.h_,c.gR,a.qI);Cm(b.cd,c);d=CY(Eq(b.cd,C(290)));e=Bu();f=c.oZ;g=new K;M(g);EF(H(g,C(291)),f);Bk(e,L(g));h=Nc(c,1.1799999475479126);e=Bu();g=new K;M(g);U(H(U(H(g,C(292)),d),C(202)),h);Bk(e,L(g));e=HF(b,d,h);a.pj=e;Cm(e,c);BW(a.pj,C(290),0.0,c.el);b=CW(b);a.lz=b;CM(b,a.pj);FM(a.gh,a.lz);FV(a.gh);b=a.gh.bl;FF();BP(b,A7g);BP(a.gh.X,A72);}b=a.C.O;EG(b,a.t$);c=a.gh;e=c.u;g=a.gP;d=g.a;c=c.t;V(e,(d-c.a|0)/2|0,(g.b-c.b|0)/2|0);EE(a.gh,b,a.lz,0,
0);}
function G0(){var a=this;Cu.call(a);a.u0=null;a.ch=null;a.d8=null;a.dj=null;a.fp=null;a.eJ=null;}
function OF(a,b){var c,d;Em(a,b);a.u0=CB(20);a.ch=Sp();a.d8=new Bg;a.dj=new Bg;a.fp=new Bg;a.eJ=new Bg;c=b.p.bG;d=new AB8;d.Du=a;Bc(c,d);Bc(b.p.bO,a);b=a.ch.bl;FF();BP(b,A7g);BP(a.ch.X,A72);}
function AFh(a){var b,c,d;b=a.C.O;EG(b,a.u0);c=a.ch;d=c.u;Bt(b,d.a,d.b,c.t,c.bl);B_(b,1);c=a.ch;d=c.u;AEf(b,d.a,d.b,c.t,a.d8,a.dj,a.fp,a.eJ,c.X);B_(b,0);}
function AYK(a,b){return 0;}
var Te=G(G0);
function A0q(a,b,c){var d,e,f;d=a.ch;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);V(a.d8,0,0);V(a.dj,Be(b.a,b.b),Be(b.a,b.b));b=a.fp;d=a.d8;V(b,d.a,d.b+20|0);b=a.eJ;d=a.dj;V(b,d.a,d.b+40|0);}
function A1k(a,b){var c,d,e;Ct(a.d8,b.j);b=a.dj;c=a.ch;d=c.u;e=d.a;c=c.t;V(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fp;c=a.d8;V(b,c.a,c.b+20|0);b=a.eJ;c=a.dj;V(b,c.a,c.b+40|0);return 0;}
function Td(){var a=this;G0.call(a);a.f0=null;a.gi=null;}
function A2L(a,b){var c;c=a.dj;b=b.j;c.b=b.b-50|0;a.eJ.b=b.b+100|0;return 1;}
function ANk(a){var b,c,d,e,f,g,h;b=Bd(a.d8.a,a.fp.a);c=Be(a.dj.a,a.eJ.a);d=Be(a.d8.b,a.dj.b)-50|0;e=Bd(a.fp.b,a.eJ.b)+50|0;Hd(a.ch,b,d,c-b|0,e-d|0);AFh(a);f=a.ch.u.a-10|0;AAt(a,a.C.O,10,f,a.d8,a.fp);g=a.ch;h=g.u.a+g.t.a|0;AAt(a,a.C.O,h,f,a.dj,a.eJ);}
function AAt(a,b,c,d,e,f){var g;V(a.f0,c,a.ch.u.b);V(a.gi,d,e.b-a.ch.u.b|0);g=a.f0;Bt(b,g.a,g.b,a.gi,a.ch.bl);V(a.f0,c,e.b);V(a.gi,d,f.b-e.b|0);e=a.f0;Bt(b,e.a,e.b,a.gi,a.ch.X);V(a.f0,c,f.b);e=a.gi;g=a.ch;V(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.f0;Bt(b,e.a,e.b,a.gi,a.ch.bl);}
function AL5(a,b,c){}
function XU(){var a=this;CO.call(a);a.Ep=3;a.yi=null;a.kt=null;a.ks=null;}
function A1r(a,b,c){if(b===0.0)ACB(a);}
function ACB(a){var b;ZD(a,a.kt);ZD(a,a.ks);a.kt=Qw(a,0.5,0,C(293));a.ks=Qw(a,1.0,1,C(294));GD(a.bb,a.kt);GD(a.bb,a.ks);b=a.q.bR;Eu(a.ks,BH((b.a*2|0)/10|0,(b.b*2|0)/10|0),BH((b.a*7|0)/10|0,(b.b*7|0)/10|0));Eu(a.kt,BH(b.a/10|0,b.b/10|0),BH((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function ZD(a,b){if(b!==null){Ku(a.bb,b);NP(b);}}
function Qw(a,b,c,d){var e,f,g;e=AEq(a.q);f=new P_;g=new RU;g.tb=e;g.ta=d;LN(f);f.md=new B0;f.pM=new Bg;f.x2=g;f.r8=b;if(c){d=GA(f,a.q);Jd(d,A73,A74);f=d;}K9(e,f);GT(e,Fe());AAn(e,a.yi,3.0);return e;}
function DA(){CO.call(this);this.hd=null;}
function A4M(a){var b=new DA();H7(b,a);return b;}
function H7(a,b){G8(a,b);Bc(a.q.ep,a);BP(a.dS,CB(43));}
function AWp(a){return AUB();}
function APW(a){return 1;}
function N0(a,b){GT(a.hd,b);}
function AIB(a,b){var c,d,e;c=a.q.bR;d=!a.pq()?0:ACx(b);e=c.b-d|0;Eu(b,BH(c.a/20|0,d+(e/20|0)|0),BH((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A07(a,b,c){if(b===0.0){a.hd=A5E(a.q,a.hB());N0(a,Fe());if(a.pq())FP(a.hd,X5(BE(a)));GD(a.bb,a.hd);a.kC(a.hd);}}
function Qs(){var a=this;DA.call(a);a.l9=null;a.eH=null;a.Et=null;}
function AWl(a,b){return IX(a.eH,b);}
function AME(a){var b;b=K7(a.q,a.l9);a.eH=b;a.Et=S2(b,a.C.p,1);AKq(a.eH);MX(a.q,a.eH);return a.eH;}
function AU$(a){return 0;}
function A2N(a,b){AIB(a,b);Ho(a);}
function ASG(a,b){BG(b);Ip(a.l9,b);HB(a.eH,b);N0(a,b.dI);}
function AR2(a,b){J6(a.bb,b);}
function WW(){B.call(this);this.wl=null;}
function A0V(a,b){DY(a.wl,null);return 0;}
var KW=G(0);
function AMo(a,b,c){Lx(b);}
function AKL(a,b){var c;c=new RI;c.uc=a;c.ud=b;return c;}
function RM(){var a=this;DA.call(a);a.c9=null;a.px=null;a.mI=null;a.jr=null;}
function AQ1(a){var b,c,d,e,f;b=new QU;c=a.bb;E1(b);b.gj=P$(c);d=TM(c.dM);b.gl=d;b.kJ=GA(d,c.dM);e=new Py;E1(e);d=new B0;AO4();AJ7(d,A7j);e.AS=d;b.oI=e;f=K7(c.dM,b.gj);b.fV=f;b.Ae=a;V7(b,I(CE,[b.kJ,b.oI,f]));b.sb=Gw(1);a.c9=b;b=AKi(C(295),0);IR(b);d=new RR;d.AP=a;b.eq=d;ES(a.c9.gl,b);return a.c9;}
function RS(a){var b,c;b=a.C.bV;c=new AB_;c.va=a;I$(b,c);}
function AQT(a,b){var c,d,e,f,g,h,i;c=a.q.bR;d=ACx(b);e=c.b-d|0;f=Cz(a.q,5.0);g=BH(f,f+d|0);h=new Bg;i=c.a;d=f*2|0;QF(h,i-d|0,e-d|0);Eu(b,g,h);Ho(a);}
function AY7(a,b){var c;N0(a,b.dI);c=a.c9;J4(c.gl,b);JE(c.gl,c.kJ);Ip(c.gj,b);HB(c.fV,b);}
function ASq(a,b){var c,d,e;c=b.o6;a.px=c;d=Co(a.mI,c);if(d!==null)ADI(a,d);else{b=Bu();d=Ck(c);e=new K;M(e);H(H(e,C(296)),d);Bk(b,L(e));if(Co(a.jr,c)!==null){b=Ck(c);c=new K;M(c);H(H(c,C(297)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Er(a.jr,c,KQ(c));b=new ACt;b.xR=a;b.xN=c;d=new ACu;d.Br=a;d.Bs=c;UX(c,b,d);}}}
function ADI(a,b){H0(a.c9.fV,b);b=a.c9;FI(b.gj.b6.dM,b.fV);}
function ALJ(a,b){ADA(b);if(Jg(b)>0)EI(a.c9.gl);}
function AOh(a,b){if(Jg(b)>0)EI(a.c9.gl);Li(b);}
function ASc(a,b,c){if(AHN(c)!==C(177))QN(b);else Lx(b);}
function YQ(){var a=this;DA.call(a);a.lw=null;a.vF=null;}
function AZk(a){var b,c,d,e;b=TM(a.q);a.lw=b;BG(b);c=new Tl;c.s4=b;b=PC(C(298),4,c);d=Bu();e=OI(b);c=new K;M(c);U(H(c,C(299)),e);Bk(d,L(c));ES(a.lw,b);J4(a.lw,a.vF);b=a.lw;return JE(b,GA(b,a.q));}
function A0x(a,b){var c;c=a.q.bR;Eu(b,BH(c.a/30|0,c.b/10|0),BH((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var OO=G(Ko);
function AV5(a){return Gw(1);}
function ACv(){var a=this;Cu.call(a);a.s5=null;a.mO=null;a.fh=null;a.oT=null;a.mN=0.0;a.g3=null;a.v4=null;a.tH=null;a.xV=null;a.yC=null;a.sj=null;a.qp=null;a.B_=null;a.ww=null;a.lE=null;}
var A75=0;function A4p(a){var b=new ACv();AUb(b,a);return b;}
function AUb(a,b){var c,d,e;Em(a,b);a.s5=new B0;a.mO=ADM(1.0,0.0,0.0,1.0);a.fh=Sp();a.oT=new Bg;a.mN=3.1415927410125732;c=AJJ();a.g3=c;a.v4=HD(c,1.25);a.tH=HD(a.g3,1.3333333730697632);a.xV=HD(a.g3,1.5);a.yC=HD(a.g3,1.6666666269302368);a.sj=HD(a.g3,2.0);a.qp=ADM(a.mN/24.0,15.0,3.0,0.5);c=ADM(a.mN/12.0,25.0,3.0,0.5);a.B_=c;a.ww=DX([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lE=I(B0,[a.g3,a.v4,a.tH,a.xV,a.yC,a.sj,a.qp,c]);c=b.p.bG;d=new QQ;d.Fm=a;Bc(c,d);Bc(b.p.bO,a);b=a.fh.X;FF();BP(b,A7g);Hd(a.fh,0,0,600,60);e
=M5(0.5,0.375);Jh(0.375,e);Jh(0.375,Jh(3.0,M5(e,3.0)));HD(AJJ(),3.0);}
function A2G(a,b,c){var d,e,f;Ct(a.oT,b);d=a.fh;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HD(b,c){var d;d=new B0;UR(b,c,d);return d;}
function AJJ(){var b;b=new B0;LB(b);return b;}
function AXM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.O;EG(b,a.s5);B_(b,1);c=a.fh;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lE.data;if(f>=g.length)break;h=a.ww.data[f];c=g[f];i=WY(c);j=a.fh;k=j.u;l=k.a;m=k.b;Mc(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mO);f=f+1|0;}if(A75){c=A4g(1,2);n=0;while(n<1000){h=D6(c,a.lE.data.length);l=D6(c,a.oT.b-a.fh.t.b|0);j=a.lE.data[h];i=j.bt;i=i-(i|0)>=0.25?0.0:0.5;k=a.fh;Mc(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mO);n=n+1|0;}}B_(b,0);}
function ASr(a,b){return A75;}
function TK(){var a=this;DA.call(a);a.mL=null;a.dw=null;a.sJ=null;a.wL=null;a.Fq=null;}
function ADV(a,b,c){var d,e,f,g;d=Q(B5,1);e=d.data;f=new B5;g=new RD;g.vM=a;g.vL=b;C_(f,g,c);e[0]=f;return DB(d);}
function Xu(a){var b,c,d,e,f,g,h,i,j,k;b=T4(a.dw.dn);c=T4(a.dw.dm);d=KO(ADm(Zb(b),new Ru),new Rr);e=d.data;f=KO(ADm(Zb(c),new Rs),new Rt);c=f.data;g=new L4;g.h0=Q(Gm,e.length);g.h1=Q(Gm,c.length);AB0(g,d);AB0(g,f);h=A1p(d,f);PY(h,Yz(h,ZO(h)));h=h.gd;g.oD=h;h=B1(h);while(B4(h)){i=B6(h);if(!(i instanceof Jx))continue;i=i;if(Oc(i)){i=i.cN;j=new Rc;j.BC=g;CL(i,j);}else if(Kx(i)){i=i.cM;j=new ADq;j.v7=g;CL(i,j);}else if(LQ(i)){j=i.cN;k=new SX;k.zC=g;CL(j,k);j=i.cM;k=new SW;k.xz=g;CL(j,k);i=A1p(AAO(g,i.cN),AAO(g,
i.cM));PY(i,Yz(i,ZO(i)));j=i.gd;i=new SU;i.vl=g;CL(j,i);}}h=a.dw;i=AIr();ADs(g,i,g.h0);ADs(g,i,g.h1);Bh(i,g.oD.m);g=B1(g.oD);while(B4(g)){j=B6(g);Bh(i,j.Ar);Bh(i,j.sY());Bh(i,j.Aq);Bh(i,j.zI());if(!(j instanceof Jx))Bh(i,0);else{j=j;Bh(i,Oc(j)?1:Kx(j)?2:!LQ(j)?0:3);}}PX(h,AJR(K1(i)));}
function Ie(a,b){var c,d;c=a.C.bV;d=new Pg;d.zh=a;d.zi=b;I$(c,d);}
function A1H(a){var b,c,d;b=AV0(a.q);a.dw=b;AD0(b,a.mL);b=AKi(C(300),0);c=AKi(C(301),0);IR(b);IR(c);d=new Yj;d.qD=a;b.eq=d;d=new Yk;d.BN=a;c.eq=d;ES(a.dw.dn,b);ES(a.dw.dm,c);return a.dw;}
function PD(){var a=this;DA.call(a);a.uZ=null;a.gt=null;}
function AW_(a){var b,c,d,e;b=AV0(a.q);a.gt=b;AD0(b,a.uZ);c=a.gt.dn;BG(c);d=new AA3;d.rg=c;b=PC(C(298),4,d);d=a.gt.dm;BG(d);e=new AA4;e.ti=d;c=PC(C(298),4,e);ES(a.gt.dn,b);ES(a.gt.dm,c);return a.gt;}
function J7(){var a=this;B.call(a);a.BR=null;a.ef=null;a.ut=null;a.Da=null;a.sR=null;a.kX=null;a.rz=null;a.v_=null;a.lL=null;a.lF=null;a.gm=null;}
function A76(a,b,c,d,e,f,g,h,i,j,k){var l=new J7();Mw(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mw(a,b,c,d,e,f,g,h,i,j,k,l){a.BR=b;a.ef=c;a.ut=d;a.Da=e;a.sR=f;a.kX=g;a.rz=h;a.v_=i;a.lL=j;a.lF=k;a.gm=l;}
function AFJ(){B.call(this);this.E5=null;}
function AJt(a){var b=new AFJ();AUZ(b,a);return b;}
function AUZ(a,b){a.E5=b;}
var AEK=G(0);
function AH3(){var a=this;B.call(a);a.o1=null;a.k5=null;a.xx=null;a.qu=null;}
function AKa(a,b,c,d){var e=new AH3();A2Q(e,a,b,c,d);return e;}
function A2Q(a,b,c,d,e){a.o1=b;a.k5=c;a.xx=d;a.qu=e;}
var AF9=G(0);
function Fe(){var b,c,d;b=new IV;c=new I3;AY4();d=A77;OA(c,d,A78,A79,A7$,A7_,d);LT(b,c,AHr(),AHz(S(C(302)),S(C(265)),S(C(266))),AHr(),AHW(1,0.125),A8a,A8b);return b;}
function AHr(){var b,c;b=new Kg;c=S(C(303));AY4();K5(b,c,A8c,A8d);return b;}
function AG6(){var b,c;b=new Kg;c=S(C(266));AU8();K5(b,c,A8e,A8f);return b;}
function AKT(){var b,c;b=new Kg;AGZ();c=A8g;AVi();K5(b,c,A8h,A8i);return b;}
function AHK(){var a=this;B.call(a);a.y9=null;a.wk=null;a.uG=null;a.qH=null;}
function AEm(a,b,c,d){var e=new AHK();AVA(e,a,b,c,d);return e;}
function AVA(a,b,c,d,e){a.y9=b;a.wk=c;a.uG=d;a.qH=e;}
function AEc(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dF.wk;break a;case 3:if(c!=3){b=b.dF.qH;break a;}b=b.dF.uG;break a;default:b=b.bs.ef;break a;}b=b.dF.y9;}return b;}
function HZ(a,b,c){return AEc(a,b,0,c);}
function MA(){var a=this;B.call(a);a.lX=null;a.km=null;}
function Wf(a,b){var c;c=a.km;a.km=b;return c;}
function KB(){var a=this;MA.call(a);a.bS=null;a.b1=null;a.gE=0;a.gO=0;}
function M2(a){var b;b=Ls(a);if(b==2){if(Ls(a.b1)<0)a.b1=O_(a.b1);return Qe(a);}if(b!=(-2))return a;if(Ls(a.bS)>0)a.bS=Qe(a.bS);return O_(a);}
function Ls(a){var b,c;b=a.b1;c=b===null?0:b.gE;b=a.bS;return c-(b===null?0:b.gE)|0;}
function O_(a){var b;b=a.bS;a.bS=b.b1;b.b1=a;EY(a);EY(b);return b;}
function Qe(a){var b;b=a.b1;a.b1=b.bS;b.bS=a;EY(a);EY(b);return b;}
function EY(a){var b,c,d;b=a.b1;c=b===null?0:b.gE;b=a.bS;d=b===null?0:b.gE;a.gE=Bd(c,d)+1|0;a.gO=1;b=a.bS;if(b!==null)a.gO=1+b.gO|0;b=a.b1;if(b!==null)a.gO=a.gO+b.gO|0;}
var AKW=G();
function AMx(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Ye;c=c.buffer;d.gf=c;d.qj=new $rt_globals.Int8Array(c);d.mC=new $rt_globals.Uint16Array(c);d.z6=new $rt_globals.Int32Array(c);d.sr=new $rt_globals.Float32Array(c);d.sD=new $rt_globals.Float64Array(c);e=d.gf.byteLength;c=new K;M(c);U(H(c,C(304)),e);CS(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(305)),e);CS(L(c));f=b.callToCpp2();c=new K;M(c);EF(H(c,C(306)),f);CS(L(c));c=OZ(d,b.getC8String());g=new K;M(g);H(H(g,C(307)),c);CS(L(g));c
=WB(d,b.getC16String());g=new K;M(g);H(H(g,C(308)),c);CS(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gf,h,8));c=AGt(i);g=new K;M(g);H(H(g,C(309)),c);CS(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gf,h,8));c=ASy(j);g=new K;M(g);H(H(g,C(310)),c);CS(L(g));k=AI6(d,b.getCDoubleArray8(),8);l=AUu(k);c=new K;M(c);H(H(c,C(311)),l);CS(Ee(c));l=AUq(b.getC8String(),C(312),d);c=L$();H(H(c,C(313)),l);CS(Ee(c));l=AQo(b.getC16String(),C(314),
d);c=L$();H(H(c,C(315)),l);CS(Ee(c));c=AZ3(i,d,b.getCIntArray8(),DX([11,22,33,44,55,66,77,88]));g=L$();H(H(g,C(316)),c);CS(Ee(g));c=ASJ(j,d,b.getCFloatArray8(),100,DX([111,222,333,444,555,666,777,888]));g=L$();H(H(g,C(317)),c);CS(Ee(g));b=A1j(k,d,b.getCDoubleArray8(),1000,DX([1111,2222,3333,4444,5555,6666,7777,8888]));c=L$();H(H(c,C(318)),b);CS(Ee(c));}
function ASJ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(CY(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sr[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function A1j(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(Gz(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sD[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function AZ3(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(319);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.z6[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(320);}return C(321);}
function AUq(b,c,d){var e,f,g,h;e=OZ(d,b);if(!Bj(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.qj[h])return C(323);f=f+1|0;}return C(320);}
function AQo(b,c,d){var e,f,g,h;e=WB(d,b);if(!Bj(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mC[h>>>1|0]&65535))return C(323);f=f+1|0;}return C(320);}
function CS(b){Yc(C(2),b);}
function APw(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Yx(){B.call(this);this.rS=null;}
function AVR(a,b){return AI7(a.rS,b);}
function Yv(){B.call(this);this.Bk=null;}
function AXm(a,b){Jn(a.Bk,b);}
function Yw(){B.call(this);this.xJ=null;}
function AS2(a,b){b=b;return AEH(a.xJ,b);}
function AHG(){Kf.call(this);this.du=null;}
function KK(){var a=new AHG();A2s(a);return a;}
function H_(a,b,c,d){var e=new AHG();AYf(e,a,b,c,d);return e;}
function A2s(a){AB2(a);a.du=new B0;}
function AYf(a,b,c,d,e){AB2(a);a.du=new B0;Hd(a,b,c,d,e);}
function FV(a){var b,c;b=a.t;c=a.du;V(b,c.bf-c.bn|0,c.bC-c.bt|0);}
function FM(a,b){Iw(a,0,0,BZ(b),Do(b));}
function Iw(a,b,c,d,e){Cw(a.du,b,c,d,e);}
function EE(a,b,c,d,e){var f;f=a.u;D8(b,f.a+d|0,f.b+e|0,a.t,a.du,c,a.X,a.bl,0);}
function SM(a,b,c,d){var e;e=a.u;D8(b,e.a,e.b,a.t,a.du,c,a.X,a.bl,d);}
function Iv(a,b,c,d,e,f,g){D8(b,c,d,a.t,a.du,e,!f?a.X:a.bl,!f?a.bl:a.X,g);}
function Hy(a,b){BP(a.X,b);}
function Ff(a,b){BP(a.bl,b);}
function TL(){B.call(this);this.fw=null;}
function AV3(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fw.hn;f=e.t;d=d-f.a|0;g=c.b-f.b|0;V(e.u,d,g);c=a.fw;e=c.C.bV;b=b.j;d=0;a:{while(true){h=c.i0.data;if(d>=h.length)break;if(Fa(h[d],b)){b=c.qs.data[d];break a;}d=d+1|0;}b=null;}ZK(e,b);return 1;}
function ALy(a,b,c,d){if(!c&&d==2){b=a.fw;Sq(b,b.eh);}return 1;}
function AVX(a,b,c){var d,e;d=Bu();e=new K;M(e);U(H(e,C(324)),c);Bk(d,L(e));if(c)return null;d=b.j;e=!Fa(a.fw.eh,d)?null:d;T7(a.fw.jy,d.a,d.b);b=a.fw;YE(b.jy,MU(b.C.bV));if(e===null)b=A7o;else{b=new ACd;b.sN=a;b.sO=e;}return b;}
function AVs(a,b,c){var d;b=Bu();d=new K;M(d);U(H(d,C(325)),c);Bk(b,L(d));return 1;}
function YY(){B.call(this);this.B1=null;}
function A1G(a,b){return WV(a.B1,b);}
function YX(){B.call(this);this.sp=null;}
function AZ6(a,b){return WV(a.sp,b);}
function YW(){B.call(this);this.Dp=null;}
function AYr(a,b,c){var d,e;Bk(Bu(),C(326));d=!c?C(327):C(54);e=new K;M(e);H(H(H(e,C(328)),d),C(329));ACO(b,L(e));return 1;}
function YV(){B.call(this);this.Ed=null;}
function AU0(a){Bk(Bu(),C(330));}
function YU(){B.call(this);this.EJ=null;}
function ARl(a,b){Bk(Bu(),C(331));return 1;}
function YT(){B.call(this);this.AK=null;}
function A1O(a,b,c,d){var e,f,g;b=a.AK;e=( -d|0)/10|0;b=b.eh;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hi(){var a=this;B0.call(a);a.hh=0;a.hk=0;a.hi=0;a.hj=0;}
function CB(a){var b=new Hi();AUg(b,a);return b;}
function Dy(a,b,c){var d=new Hi();AWN(d,a,b,c);return d;}
function S(a){var b=new Hi();A0$(b,a);return b;}
function EW(a,b,c,d){var e=new Hi();Rq(e,a,b,c,d);return e;}
function BV(a){var b=new Hi();KT(b,a);return b;}
function AUg(a,b){Rq(a,b,b,b,255);}
function AWN(a,b,c,d){Rq(a,b,c,d,255);}
function A0$(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.hh=Kj(P(b,1))*17|0;a.hk=Kj(P(b,2))*17|0;a.hi=Kj(P(b,3))*17|0;a.hj=255;}else{a.hh=LR(P(b,1),P(b,2));a.hk=LR(P(b,3),P(b,4));a.hi=LR(P(b,5),P(b,6));a.hj=J(b)!=9?255:LR(P(b,7),P(b,8));}IB(a.hh,a.hk,a.hi,a.hj,a);return;}}
function Rq(a,b,c,d,e){a.hh=b;a.hk=c;a.hi=d;a.hj=e;IB(b,c,d,e,a);}
function KT(a,b){a.hh=b.hh;a.hk=b.hk;a.hi=b.hi;a.hj=b.hj;BP(a,b);}
function Kj(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LR(b,c){return (16*Kj(b)|0)+Kj(c)|0;}
var AGI=G(0);
function Gw(b){return !b?I(BK,[C(156),C(167),C(332)]):I(BK,[C(156),C(167),C(332),C(34)]);}
function Ws(){B.call(this);this.l_=null;}
function ANT(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.l_.di;e=DS();f=e-0.5+(DS()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DS()*0.3;h=0.5+DS()*0.5;It(e,g,h,1.0,b.X);It(f,g,h,1.0,b.bl);b=a.l_;BP(b.dW.X,b.di.X);b=a.l_;BP(b.dW.bl,b.di.bl);}return 1;}
function Wp(){var a=this;B.call(a);a.nP=null;a.oh=null;}
function AF$(){var a=this;B.call(a);a.f2=null;a.ck=null;a.gM=null;a.hT=null;a.nX=null;a.cB=null;a.hG=null;a.c2=0;a.f5=0;a.od=0;a.ki=0;a.kz=0;a.hN=0;a.kQ=null;a.o5=null;a.ws=null;a.nN=null;}
function AJy(){var a=new AF$();ASP(a);return a;}
function ASP(a){a.ck=Sp();a.gM=new Bg;a.hT=new Bg;a.cB=A8j;a.ki=(-1);a.kz=1;}
function Nk(a,b){N$(a);a.cB=b;}
function JD(a,b,c){a.f2=b;ACH(a,c);N$(a);}
function JF(a,b){var c;a.nX=b.lx;c=b.o9.pO;BP(a.ck.X,c);c=b.k8.pv;BP(a.ck.bl,c);a.nN=b.o9;}
function MT(a){a.hG=BY(a.hG,null);V(a.gM,0,0);a.cB=A8j;a.ki=(-1);AA2(a.ck);}
function ACH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Kd(b);d=b.cb;BG(a.f2);Cm(c,a.f2);e=Nc(a.f2,1.25);f=0;a.c2=Cf(2.0,d);a.f5=Cf(3.0,d);a.od=Cf(12.0,d);g=0;h=a.cB.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=La(c,l.nC);n=a.od;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fm;b.a=g;b.b=0;b=l.eu;b.a=n;b.b=e;Cw(l.kf,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gM;b.a=g;b.b=e;b=a.ck.t;n=a.hN;if(!n){m=a.c2;m=(g+m|0)+Bb(m,a.cB.data.length)|0;}else m=(f+(a.c2*2|0)|0)+(a.f5*2|0)|0;b.a=m;if(!n)e=e+(a.c2*2|0)|0;else{n=a.c2;e=(Bb(e+n|0,a.cB.data.length)+n
|0)+(a.f5*2|0)|0;}b.b=e;}
function Ne(a,b,c){var d,e,f,g,h,i,j;V(a.ck.u,b,c);d=a.c2+a.f5|0;e=a.cB.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fm;j.a=b+d|0;j.b=c+h|0;if(!a.hN){if(!i.eu.a)AEv();d=d+(i.eu.a+a.c2|0)|0;}else{if(!i.eu.b)AEv();h=h+(i.eu.b+a.c2|0)|0;}g=g+1|0;}}
function AEv(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EB(a){var b,c;b=a.gM;if(b.a&&b.b)return a.ck.t;c=new Bw;Bn(c,C(333));N(c);}
function N$(a){a.kz=1;}
function Me(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.b4;if(!a.cB.data.length)return;if(a.hG===null)a.hG=CW(c);a:{if(!a.kz){d=a.gM;if(Bb(d.a,d.b))break a;}d=a.gM;if(!Bb(d.a,d.b))ACH(a,b);d=a.gM;e=d.a;f=d.b;if(!Bb(e,f))return;d=D5(c,e,f,b.cw);Cm(d,a.f2);g=Nc(a.f2,0.125);h=a.f2;i=h.el;g=g+i-(i+h.eF)/16.0;j=a.cB.data;e=j.length;f=0;while(f<e){h=j[f];BW(d,h.nC,h.kf.bn+a.od,g);f=f+1|0;}CM(a.hG,d);a.kz=0;EA(d);}if(!K$(a.ck)){d=a.ck;AIR(c,d.t,d.u,d.bl,a.c2,a.hT);d=a.ck;h=d.t;k=d.u;d=d.X;e=a.c2;l=a.hT;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bt(c,k.a+e|0,k.b+e|0,l,d);if(a.hN){d=a.ck;AJ3(c,d.t,d.u,0,0,Yg(a.nX,b.cb),a.nX.n1,a.hT);}}j=a.cB.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fm;e=h.a;f=h.b;h=d.eu;k=d.kf;l=a.hG;o=a.nN;D8(c,e,f,h,k,l,o.rW,U_(o,d.k7),b.cw);n=n+1|0;}b:{if(a.hN){j=a.cB.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hT;e=(a.ck.t.a-(a.c2*2|0)|0)-(a.f5*2|0)|0;h=d.eu;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fm;Bt(c,k.a+h.a|0,k.b,b,U_(a.nN,d.k7));}p=p+1|0;}}}}
function NO(a,b,c){var d,e,f,g,h,i;d=Fa(a.ck,b);e=!d?(-1):Pq(a,b);f=a.ki;if(f!=e){if(f>=0){g=a.cB.data[f];g.k7=0;if(a.ws!==null){h=Bu();g=Ck(g);i=new K;M(i);H(H(U(H(i,C(334)),f),C(335)),g);Bk(h,L(i));}}if(e>=0){h=a.cB.data[e];g=a.o5;if(g!==null)g.wz(b,e,h);h.k7=1;}a.ki=e;}return d&&GB(c)?1:0;}
function Ob(a,b,c,d){var e,f;e=Pq(a,b);if(e>=0){f=a.cB.data[e];if(!AB5(f))f.mW.g();}return 1;}
function Pq(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cB.data;if(c>=d.length)return (-1);e=d[c];if(Hw(b,e.fm,e.eu))return c;if(a.hN){f=e.fm;g=f.a;e=e.eu;h=e.a;g=g+h|0;i=f.b;f=a.hT;f.a=(a.ck.t.a-(a.c2*2|0)|0)-h|0;f.b=e.b;if(AEQ(b,g,i,f))break;}c=c+1|0;}return c;}
function AD_(a){a.hN=1;}
function AIS(){var a=this;B.call(a);a.h_=null;a.gR=0.0;a.mm=0;a.kh=0;}
function DP(a,b){var c=new AIS();ARz(c,a,b);return c;}
function ARz(a,b,c){a.h_=b;a.gR=c;a.mm=400;a.kh=700;}
function A04(a,b){if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){b=b;return a.gR===b.gR&&a.mm==b.mm&&a.kh==b.kh&&BN(a.h_,b.h_)?1:0;}return 0;}
function ABy(){B.call(this);this.up=null;}
function AQZ(a,b){var c;c=a.up;if(b.bm==32)MT(c.dC);return 0;}
function ABu(){B.call(this);this.vm=null;}
function ASK(a,b){var c,d,e,f;b=b;c=a.vm;d=Nn(c.q);Ge(d,Fe(),c.oy);b=b.j;e=RH(4);f=new UE;f.Dq=c;Jk(d,b,e,f);Fp(c.bb,d);return 1;}
var ABv=G();
function A27(a){Bk(Bu(),C(336));}
var ABw=G();
function AMd(a){Bk(Bu(),C(337));}
function B5(){var a=this;B.call(a);a.mW=null;a.kf=null;a.fm=null;a.eu=null;a.ng=null;a.tE=null;a.k7=0;a.nC=null;}
function W7(a,b){var c=new B5();C_(c,a,b);return c;}
function A41(a,b,c,d){var e=new B5();AJf(e,a,b,c,d);return e;}
function C_(a,b,c){AJf(a,b,c,null,null);}
function AJf(a,b,c,d,e){a.kf=new B0;a.fm=new Bg;a.eu=new Bg;a.nC=c;a.tE=e;a.mW=b;a.ng=d;}
function AB5(a){return a.ng===null?0:1;}
function Um(){B.call(this);this.Cr=null;}
function AYk(a,b){return b.jM&&b.bm==32?1:0;}
function Un(){B.call(this);this.A5=null;}
function ALW(a,b){var c,d,e,f,g,h;b=b;c=a.A5;d=Nn(c.q);Ge(d,Fe(),DP(C(156),25.0));b=b.j;e=Q(B5,1);f=e.data;g=new B5;h=new AD2;h.Bj=c;C_(g,h,C(338));f[0]=g;Jk(d,b,DB(e),A8k);Fp(c.bb,d);return 1;}
function AHo(){var a=this;B.call(a);a.pZ=0;a.p1=0;}
function UN(){var a=new AHo();ATE(a);return a;}
function A4g(a,b){var c=new AHo();AK2(c,a,b);return c;}
function ATE(a){AK2(a,AKJ(GK((AGF()))),GK((AGF()))^(-559038737));}
function AK2(a,b,c){var d;a.pZ=b;a.p1=c;d=0;while(d<19){Ny(a);d=d+1|0;}}
function Ny(a){var b,c;b=a.pZ;c=a.p1;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pZ=c;a.p1=b;return b;}
function AKJ(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AKk(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function D6(a,b){return UP(a)*b|0;}
function UP(a){return 5.960464477539063E-8*(Ny(a)&16777215);}
function QT(a,b){var c,d,e;c=AKk(Ny(a));d=ASD( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function O3(){B.call(this);this.xO=null;}
function AQ6(a,b,c){var d;d=a.xO;if(b===0.0)L3(d,100);}
function O2(){B.call(this);this.vx=null;}
function AZH(a,b){var c,d,e;c=a.vx;d=b.bm;if(d==32){c.lI=c.lI?0:1;e=1;}else if(d==13){L3(c,1);e=1;}else if(d!=8)e=0;else{PB(c,1);e=1;}return e;}
var ZF=G(0);
function AH4(b,c){var d;d=new UI;d.xC=b;d.xB=c;return d;}
function AH$(){var a=this;B.call(a);a.hx=null;a.ia=0;a.lQ=0;a.g_=0;}
function AIi(a){var b=new AH$();AN3(b,a);return b;}
function AN3(a,b){a.hx=BD();a.g_=0;a.lQ=2048;a.ia=b;}
function Kn(a,b,c){var d,e,f,g,h,i;d=c.y7(b);e=a.lQ;if(d>e){c=new Bw;f=new K;M(f);BM(U(H(U(H(f,C(339)),d),C(340)),e),41);Bn(c,L(f));N(c);}if(!a.ia){b=new BS;Bn(b,C(341));N(b);}a:{b=new B0;if(d){b:{c=a.hx;if(c.m>0){c=B1(c);g=d;while(true){if(!B4(c))break b;f=B6(c);if(f.bf>=g)break;}Cw(b,f.bn,f.bt,g,a.ia);f.bn=f.bn+g;h=f.bf-g;f.bf=h;if(h===0.0)UD(a.hx,f);break a;}}g=a.g_;i=d;Cw(b,0.0,g,i,a.ia);Br(a.hx,ADM(i,a.g_,a.lQ-d|0,a.ia));a.g_=a.g_+a.ia|0;}}return b;}
function IW(a,b){var c,d,e,f,g,h,i;a:{c=AK0(b);b=a.hx;if(b.m>0){d=B1(b);while(true){if(!B4(d))break a;e=B6(d);if(e.bt===c.bt){f=e.bn;g=e.bf;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bf=c.bf+g;Zr(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;Zr(d);}}}}}}Br(a.hx,c);}
function ML(a){return BH(a.lQ,a.g_);}
function WD(){var a=this;B.call(a);a.rV=null;a.lM=null;}
function AVa(a,b,c){if(c)return A7o;return F1(a.lM.i1,b.j,a.rV,1);}
function ALQ(a,b,c){return 1;}
function AW3(a,b){var c;c=a.lM;return F7(c.i1,b.j,c.xw);}
function Z1(){B.call(this);this.Am=null;}
function AQ4(a,b,c,d){var e,f;b=a.Am;e=(Wj(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e6=Be(Bd(0,b.e6+Bb(e,f)|0),UF(b));return 1;}
function QH(){B.call(this);this.s1=null;}
function AQS(a,b){var c,d,e;c=a.s1;if(b.cJ&&b.bm==79){if(!b.bJ){b=c.C.bV;d=new W3;d.uL=c;Oe(b,d);}else{b=c.C.bV;d=new W2;d.xb=c;I$(b,d);}e=1;}else e=0;return e;}
function Rw(){B.call(this);this.xS=null;}
function AUo(a,b){var c,d,e,f,g,h,i;b=b;c=a.xS;d=Nn(c.q);Ge(d,Fe(),DP(C(156),25.0));b=b.j;e=Q(B5,5);f=e.data;g=new B5;h=new TW;h.rE=c;C_(g,h,C(342));f[0]=g;g=new B5;h=new TX;h.sh=c;C_(g,h,C(343));f[1]=g;g=new B5;h=new TY;h.ty=c;C_(g,h,C(344));f[2]=g;h=new B5;i=new TZ;i.xn=c;C_(h,i,C(345));f[3]=h;h=new B5;i=new T0;i.xQ=c;C_(h,i,C(346));f[4]=h;Jk(d,b,DB(e),A8k);Fp(c.bb,d);return 1;}
function Rv(){B.call(this);this.zS=null;}
function A0H(a,b){var c,d,e,f;c=a.zS;d=c.C.bV;e=new XD;e.wH=c;f=Q(B,1);f.data[0]=b;CT(d,e,C(347),f);}
function ABI(){B.call(this);this.m6=null;}
function AZW(a,b){var c,d,e,f,g,h;c=a.m6;d=c.qm;if(d!==null){e=c.e4.u;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qm=g;}b=b.j;f=b.a;c=c.gw;d=c.t;f=f-d.a|0;h=b.b-d.b|0;V(c.u,f,h);return 1;}
function AUe(a,b,c){var d;if(!c){d=b.j;b=a.m6;if(!Fa(b.e4,d))d=null;b.qm=d;}return A7o;}
var AGd=G();
function AK8(b){var c,d;c=HF(b,250,64);Ht(c,C(268),25.0);J1(c,187,187,187);BW(c,C(348),0.0,24.0);BW(c,C(348),0.25,56.0);d=CW(b);CM(d,c);EA(c);return d;}
var Dj=G(0);
var A7z=null;var A72=null;var A7A=null;var A7g=null;var A7C=null;var A7B=null;var A7E=null;var A7D=null;var A7G=null;var A7F=null;var A7H=null;function FF(){FF=Bo(Dj);AUr();}
function AUr(){A7z=CB(187);A72=S(C(349));A7A=CB(55);A7g=CB(43);A7C=Dy(33,66,131);A7B=Dy(60,63,65);A7E=S(C(350));A7D=S(C(351));A7G=EW(85,85,85,128);A7F=EW(43,43,43,0);A7H=S(C(254));}
function Yy(){var a=this;B.call(a);a.qO=null;a.lW=null;}
function AO$(a,b,c){var d;if(!c){d=F1(a.lW.iG,b.j,a.qO,1);if(d!==null)return d;}return A7o;}
function AVo(a,b,c){return 1;}
function ANY(a,b){var c;c=a.lW;return F7(c.iG,b.j,Rk(c.C.bV));}
function VY(){B.call(this);this.rC=null;}
function A1L(a,b,c,d){var e,f;b=a.rC;e=(Wj(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fE=Be(Bd(0,b.fE+Bb(e,f)|0),Z2(b));return 1;}
function ADf(){B.call(this);this.wr=null;}
function ANd(a,b){var c,d;a:{c=a.wr;switch(b.bm){case 67:Qv(c);d=1;break a;case 86:ZH(c);d=1;break a;default:}d=0;}return d;}
var ADe=G();
function AYx(a,b,c){return 0;}
function ADd(){B.call(this);this.sx=null;}
function ANj(a,b,c){var d,e;d=a.sx;c=d.ea+1|0;d.ea=c;d=JO(F(Ki));e=new K;M(e);H(H(U(e,c),C(352)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ACO(b,e);return 1;}
var ADc=G();
function AQi(a){return null;}
function ADh(){B.call(this);this.zw=null;}
function A1f(a){var b,c;b=a.zw;c=new Vz;c.qK=b;return c;}
function Sc(){B.call(this);this.DL=null;}
function ATV(a,b){return 0;}
function Zn(){B.call(this);this.Dt=null;}
function ATv(a,b){return b.jM&&b.bm==32?1:0;}
function Zm(){B.call(this);this.w3=null;}
function APX(a,b){var c,d,e,f,g,h;b=b;c=a.w3;d=Nn(c.q);Ge(d,Fe(),DP(C(156),25.0));b=b.j;e=Q(B5,1);f=e.data;g=new B5;h=new ADU;h.B4=c;C_(g,h,C(338));f[0]=g;Jk(d,b,DB(e),A8k);Fp(c.bb,d);return 1;}
function Ps(){B.call(this);this.Bd=null;}
function AZU(a,b){var c;c=a.Bd.eH;if(c!==null)Jn(c,b);}
function Pt(){B.call(this);this.y1=null;}
function A1A(a,b){var c,d,e;b=b;c=a.y1;if(DO(c.q,c.eH)){d=c.l9;b=b.j;e=c.eH;GI(d,b,e,c,e,c,new XB);}return 1;}
function Xr(){B.call(this);this.xX=null;}
function ANB(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.xX;d=c.c9;if(d===null)e=1;else{if(!B3(d.fV,b.j)){d=c.c9.gj;f=b.j;g=Q(B5,1);h=g.data;b=new B5;i=new UU;i.vf=c;C_(b,i,C(353));h[0]=b;Ld(d,f,DB(g));}else{c=c.c9;b=b.j;if(B3(c.fV,b)){d=c.gj;f=c.fV;i=c.Ae;j=d.b6;BG(j);k=new QW;k.qE=j;j=new QV;j.BO=c;GI(d,b,f,i,f,k,j);}}e=1;}return e;}
var AHa=G(0);
function AKq(b){H0(b,A4z(C(354),C(178),ABZ(C(355))));}
function QQ(){B.call(this);this.Fm=null;}
function APC(a,b){return 0;}
function L4(){var a=this;B.call(a);a.h0=null;a.h1=null;a.oD=null;}
function AAO(a,b){var c,d;b=LU(b);c=new QL;d=new ACV;d.vc=b;d.Es=c;return KO(d,new QM);}
function AB0(a,b){var c,d,e;c=0;while(true){d=b.data;if(c>=d.length)break;d[c].i6=c;e=0;while(e<d[c].fe.data.length){d[c].fe.data[e].jt=c;d[c].fe.data[e].iI=e;e=e+1|0;}c=c+1|0;}}
function ADs(a,b,c){var d,e,f,g,h;c=c.data;d=c.length;Bh(b,d);e=0;while(e<d){a:{if(c[e]===null)Bh(b,(-1));else{FX(b,e,c[e].fl);if(c[e].eb===null)Bh(b,(-1));else{Bh(b,c[e].eb.data.length);f=c[e].eb.data;g=f.length;h=0;while(true){if(h>=g)break a;Bh(b,f[h]);h=h+1|0;}}}}e=e+1|0;}}
function AAS(){B.call(this);this.qY=null;}
function ARS(a,b){var c,d,e,f,g,h,i;b=b;c=a.qY;if(c.dw!==null){d=c.bb;e=c.mL;d=Y9(d,e.dI,e.kU);b=b.j;if(B3(c.dw.dn,b))e=ADV(c,1,C(300));else if(B3(c.dw.dm,b))e=ADV(c,0,C(301));else{f=Q(B5,2);g=f.data;h=new B5;i=new Pz;i.wA=c;C_(h,i,C(300));g[0]=h;e=new B5;h=new PA;h.BV=c;C_(e,h,C(301));g[1]=e;e=DB(f);}Lo(d,b,e);Fp(c.bb,d);}return 1;}
function Uq(){B.call(this);this.Co=null;}
function ART(a,b){return 1;}
function Up(){B.call(this);this.tO=null;}
function ARk(a,b){var c,d,e,f,g;c=a.tO;if(b.bm!=32)d=0;else{b=c.gt;e=Q(L9,4);f=e.data;g=UN();f[0]=Nj(1,3,4,5,D6(g,5));f[1]=Nj(5,6,10,2,D6(g,5));f[2]=Nj(12,2,13,3,D6(g,5));f[3]=Nj(15,3,17,2,D6(g,5));PX(b,A5f(Q(Gm,0),Q(Gm,0),e));d=1;}return d;}
var Dq=G(0);
var A7J=null;var A8l=null;var A7L=null;var A7K=null;var A7N=null;var A7M=null;var A7P=null;var A7O=null;var A7R=null;var A7Q=null;var A7S=null;function AN5(){AN5=Bo(Dq);AS1();}
function AS1(){A7J=CB(206);A8l=S(C(356));A7L=S(C(357));A7K=S(C(261));A7N=S(C(358));A7M=S(C(250));A7P=S(C(359));A7O=S(C(360));A7R=EW(107,106,107,128);A7Q=EW(30,31,34,0);A7S=S(C(263));}
function Cn(){CG.call(this);this.k9=null;}
var A8m=null;var A8n=null;var A8o=null;var A8p=null;var A8q=null;var A7q=null;var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A8x=null;var A8y=null;var A8z=null;var A7T=null;function TV(){TV=Bo(Cn);AYE();}
function DV(a,b,c){var d=new Cn();ZU(d,a,b,c);return d;}
function A4R(a,b,c,d){var e=new Cn();ADr(e,a,b,c,d);return e;}
function ZU(a,b,c,d){TV();DL(a,b,c);a.k9=JI(d,null);}
function ADr(a,b,c,d,e){TV();DL(a,b,c);a.k9=JI(d,e);}
function AYE(){var b,c;b=new Cn;AN5();ZU(b,C(361),0,A8l);A8m=b;A8n=DV(C(362),1,S(C(363)));A8o=DV(C(364),2,S(C(365)));A8p=DV(C(366),3,S(C(367)));A8q=DV(C(368),4,A8l);A7q=DV(C(369),5,S(C(370)));A8r=DV(C(371),6,S(C(372)));A8s=DV(C(373),7,S(C(374)));A8t=DV(C(375),8,S(C(376)));c=new Cn;FF();ADr(c,C(377),9,A72,S(C(359)));A8u=c;A8v=A4R(C(378),10,A72,S(C(264)));A8w=DV(C(379),11,S(C(380)));A8x=DV(C(381),12,S(C(382)));A8y=DV(C(383),13,A8l);b=DV(C(384),14,S(C(385)));A8z=b;A7T=I(Cn,[A8m,A8n,A8o,A8p,A8q,A7q,A8r,A8s,A8t,
A8u,A8v,A8w,A8x,A8y,b]);}
function Kk(){var a=this;B.call(a);a.gX=null;a.mP=null;}
function JI(a,b){var c=new Kk();AY8(c,a,b);return c;}
function AY8(a,b,c){a.gX=b;a.mP=c;}
function IV(){var a=this;B.call(a);a.lx=null;a.td=null;a.Ef=3;a.k8=null;a.By=null;a.Fp=null;a.o9=null;a.m1=null;a.oP=null;}
function A8A(a,b,c,d,e,f,g){var h=new IV();LT(h,a,b,c,d,e,f,g);return h;}
function LT(a,b,c,d,e,f,g,h){a.td=DP(C(167),16.0);a.Ef=3;a.By=b;a.Fp=c;a.k8=d;a.o9=e;a.lx=f;a.m1=g;a.oP=h;}
function AJI(){var a=this;B.call(a);a.n1=null;a.s8=0;}
function AHW(a,b){var c=new AJI();A09(c,a,b);return c;}
function A09(a,b,c){var d;d=new B0;a.n1=d;a.s8=b;d.bC=c;}
function Yg(a,b){return Cf(a.s8,b);}
var DR=G(0);
var A7X=null;var A7Y=null;var A7U=null;var A7V=null;var A7W=null;var A8e=null;var A8f=null;var A7Z=null;var A70=null;function AU8(){AU8=Bo(DR);AZY();}
function AZY(){A7X=S(C(250));A7Y=S(C(386));A7U=S(C(266));A7V=S(C(372));A7W=S(C(356));A8e=S(C(250));A8f=S(C(387));A7Z=S(C(388));A70=Dy(43,45,48);}
var X1=G(0);
var Yd=G();
function AXq(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(389)),d),C(390)),e);CS(L(b));return d+e|0;}
var X2=G(0);
var Yb=G();
function AX5(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EF(H(EF(H(b,C(391)),d),C(390)),e);CS(L(b));return d+e;}
var AE4=G();
var AH8=G(0);
function U4(){B.call(this);this.ol=null;}
var A8j=null;function LA(){var a=new U4();AIA(a);return a;}
function AIA(a){a.ol=BD();}
function D2(a,b,c){XY(a,C7(b,c));}
function C7(b,c){return W7(c,b);}
function FC(a,b,c){I0(a,b,c,null);}
function I0(a,b,c,d){XY(a,A41(null,b,c,d));}
function XY(a,b){Br(a.ol,b);}
function GU(a){return DB(Gj(a.ol,A8j));}
function AIa(){A8j=Q(B5,0);}
var DU=G(0);
var A7$=null;var A7_=null;var A77=null;var A78=null;var A79=null;var A8c=null;var A8d=null;var A8a=null;var A8b=null;function AY4(){AY4=Bo(DU);AZI();}
function AZI(){A7$=S(C(259));A7_=S(C(392));A77=S(C(303));A78=S(C(393));A79=S(C(349));A8c=S(C(259));A8d=S(C(392));A8a=EW(118,121,122,128);A8b=Dy(63,66,68);}
var HY=G(0);
var P8=G();
function A0w(a,b,c,d){var e;b=Bu();d=Ck(d);e=new K;M(e);H(H(U(H(e,C(394)),c),C(335)),d);Bk(b,L(e));}
var P9=G();
function TN(){B.call(this);this.zO=null;}
function AZA(a,b){var c;c=a.zO.lM;c.e6=FS(b,UF(c));}
function PM(){B.call(this);this.Ds=null;}
function ANN(a,b){var c,d,e,f;c=b.data;b=Bu();d=Ck(c[0]);e=new K;M(e);H(H(e,C(286)),d);Bk(b,L(e));b=Bu();f=c[1];d=new K;M(d);H(H(d,C(395)),f);Bk(b,L(d));}
function PL(){B.call(this);this.EF=null;}
function AMr(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bu();e=Ck(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=EO(K2(b,1));b=Bu();d=Ck(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BU(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BU(c,C(37));BM(c,i[h]);h=h+1|0;}BU(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(396)),d),C(397)),c);Bk(b,L(e));}
function PJ(){B.call(this);this.B7=null;}
function ALF(a,b){ADt(a.B7,b);}
function PH(){B.call(this);this.EO=null;}
function A2M(a,b){var c,d,e,f,g;c=b.data;d=Bu();e=Ck(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=CP(K2(b,1));b=Bu();d=Ck(c[1]);c=AGt(g);e=new K;M(e);H(H(H(H(e,C(398)),d),C(399)),c);Bk(b,L(e));}
var AHP=G();
function UJ(){B.call(this);this.tp=null;}
function AX7(a,b){var c;c=a.tp.lW;c.fE=FS(b,Z2(c));}
function AB8(){B.call(this);this.Du=null;}
function AON(a,b){return 0;}
function AKv(){var a=this;B.call(a);a.kn=null;a.o0=null;a.gJ=null;a.Fc=null;}
function ABZ(a){var b=new AKv();A00(b,a);return b;}
function A00(a,b){var c,d,e;c=null;d=null;e=null;a.kn=c;a.o0=d;a.gJ=b;a.Fc=e;}
function ACh(a){var b,c;b=a.gJ;if(b===null)return C(21);c=AFE(b,C(400));return c==(-1)?a.gJ:Dw(a.gJ,c+1|0);}
function AWs(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BN(a.kn,c.kn)&&BN(a.o0,c.o0)&&BN(a.gJ,c.gJ)?1:0;}return 0;}
function I3(){var a=this;B.call(a);a.t3=null;a.q8=null;a.rL=null;a.Ai=null;a.sL=null;a.le=null;}
function A8B(a,b,c,d,e,f){var g=new I3();OA(g,a,b,c,d,e,f);return g;}
function OA(a,b,c,d,e,f,g){a.t3=b;a.q8=c;a.rL=d;a.Ai=e;a.sL=f;a.le=g;}
function Kg(){var a=this;B.call(a);a.rW=null;a.pO=null;a.uA=null;}
function A8C(a,b,c){var d=new Kg();K5(d,a,b,c);return d;}
function K5(a,b,c,d){a.rW=b;a.pO=c;a.uA=d;}
function U_(a,b){return !b?a.pO:a.uA;}
function AIu(){var a=this;B.call(a);a.pv=null;a.zx=null;a.vo=null;}
function AHz(a,b,c){var d=new AIu();A12(d,a,b,c);return d;}
function A12(a,b,c,d){a.pv=b;a.zx=c;a.vo=d;}
function Cr(){CG.call(this);this.nZ=null;}
var A8D=null;var A8E=null;var A8F=null;var A8G=null;var A8H=null;var A8I=null;var A8J=null;var A8K=null;var A8L=null;var A8M=null;var A8N=null;var A8O=null;var A8P=null;var A8Q=null;var A8R=null;var A7I=null;function AFf(){AFf=Bo(Cr);AYa();}
function Ec(a,b,c){var d=new Cr();ABa(d,a,b,c);return d;}
function A0_(a,b,c,d){var e=new Cr();AHb(e,a,b,c,d);return e;}
function ABa(a,b,c,d){AFf();DL(a,b,c);a.nZ=JI(d,null);}
function AHb(a,b,c,d,e){AFf();DL(a,b,c);a.nZ=JI(d,e);}
function AYa(){var b;b=new Cr;FF();ABa(b,C(361),0,A72);A8D=b;A8E=Ec(C(362),1,S(C(401)));A8F=Ec(C(364),2,S(C(402)));A8G=Ec(C(366),3,S(C(403)));A8H=Ec(C(368),4,S(C(401)));A8I=Ec(C(369),5,Dy(188,63,60));A8J=Ec(C(371),6,S(C(404)));A8K=Ec(C(373),7,S(C(405)));A8L=Ec(C(375),8,S(C(406)));A8M=A0_(C(377),9,A72,Dy(52,65,52));A8N=A0_(C(378),10,S(C(407)),S(C(408)));A8O=Ec(C(379),11,S(C(409)));A8P=Ec(C(381),12,S(C(410)));A8Q=Ec(C(383),13,A72);b=Ec(C(384),14,S(C(385)));A8R=b;A7I=I(Cr,[A8D,A8E,A8F,A8G,A8H,A8I,A8J,A8K,A8L,A8M,
A8N,A8O,A8P,A8Q,b]);}
var AK1=G();
function J5(b,c){var d,e,f;if(c<=0)return C(21);d=B7(c);e=d.data;e[0]=AKl(D6(b,52));f=1;while(f<c){e[f]=AKl(D6(b,62));f=f+1|0;}return Hn(d);}
function AKl(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AFy=G();
function ALa(){var a=this;B.call(a);a.Js=null;a.OQ=null;a.IG=0;a.Pm=0;}
var AEl=G(0);
function AKs(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BK,8);e=DM(8);f=B7(16);g=0;h=0;i=0;while(true){j=BL(i,b);if(j>0)break;k=j>=0?10:(c.U(CX(i))).mX;if(k==10){d=AGT(EC(f,0,g),d,h);e=AB4(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=KD(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AGT(EC(f,0,g),d,h);j=i+1|0;if(j<b&&(c.U(CX(j))).mX==10){e=AB4(1,e,h);i=j;}else e=AB4(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Zx;d=AE7(d,h);if(m.length!=h)e=Om(e,h);c.kd=d;c.Cv=e;return c;}
function AIt(b){var c,d;c=J(b);BG(b);d=new Px;d.tY=b;return AKs(c,d);}
var C1=G();
var AJZ=G(C1);
var AKj=G(C1);
var AII=G(C1);
var AIU=G(C1);
var AKy=G(C1);
function Ve(){B.call(this);this.r_=null;}
function APu(a){var b;b=a.r_;Bk(Bu(),b);}
var HG=G(CG);
var A8S=null;var A7h=null;var A8T=null;function AQC(){AQC=Bo(HG);AW9();}
function A24(a,b){var c=new HG();AEV(c,a,b);return c;}
function AEV(a,b,c){AQC();DL(a,b,c);}
function AW9(){var b;A8S=A24(C(411),0);b=A24(C(412),1);A7h=b;A8T=I(HG,[A8S,b]);}
function Px(){B.call(this);this.tY=null;}
function AVp(a,b){return Pw(P(a.tY,b.bq));}
function Zx(){var a=this;B.call(a);a.kd=null;a.Cv=null;}
var AIq=G();
function Cf(b,c){return CY(b*c);}
function Gm(){var a=this;B.call(a);a.fl=0;a.eb=null;}
function AIO(a){var b=new Gm();AQj(b,a);return b;}
function AFS(a,b){var c=new Gm();AZS(c,a,b);return c;}
function AQj(a,b){a.fl=b;}
function AZS(a,b,c){a.fl=b;a.eb=BO(c);}
function AGG(){var a=this;B.call(a);a.bp=null;a.R=null;a.W=null;a.iE=null;a.pT=0;}
function AEq(a){var b=new AGG();ARy(b,a);return b;}
function A5E(a,b){var c=new AGG();AFl(c,a,b);return c;}
function ARy(a,b){AFl(a,b,AUB());}
function AFl(a,b,c){var d;a.bp=b;d=new Uk;E1(d);d.mF=new B0;d.f7=b;a.R=d;a.W=c;}
function FP(a,b){var c;c=a.R;c.eG=c.eG|(BN(c.jH,b)?0:1);c.jH=b;Ir(a);}
function AAn(a,b,c){var d,e,f;d=a.R;e=BN(d.hw,b)?0:1;f=c===d.kH?0:1;if(e){d.hw=b;d.ew=null;Qz(d,0);}d.eG=d.eG|(!e&&!f?0:1);d.kH=c;d.ip=0;Ir(a);}
function GT(a,b){var c;a.iE=b;c=b.td;BG(b);AAn(a,c,3.0);}
function NP(a){var b;b=a.R;b.dX=BY(b.dX,null);b.ew=null;a.W=BY(a.W,null);}
function K9(a,b){var c,d,e;c=a.W;d=c.i;e=c.k;b=BY(c,b);a.W=b;b.e7(d,e,a.bp.cb);}
function Eu(a,b,c){a.W.e7(b,c,a.bp.cb);Ir(a);}
function Ir(a){var b,c,d;if(a.bp.cb!==0.0){b=a.R;if(b.hw!==null){c=a.W.k.a;b.k.a=c;d=b.dX;if(d!==null&&c!=BZ(d)&&!(c>=b.ip&&BZ(b.dX)>=b.ip))b.eG=1;b=a.R;b.bN=a.bp.cb;if(Of(b))c=0;else{b=a.R;Qz(b,Vt(b));c=b.k.b;}b=a.R.i;d=a.W.i;V(b,d.a,d.b-c|0);return;}}}
function ACx(a){return Vt(a.R);}
function Mf(a,b){var c;c=!(a.pT&1)?0:1;return !c&&!B3(a.W,b.j)?0:1;}
function L8(b,c){if(b<0)c=C(413);else if(b>0)c=C(414);return c;}
function Oz(a,b,c){var d;d=a.R.i.a;return (d-c|0)<=b&&b<d?1:0;}
function MI(a,b,c){var d,e;d=a.R;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M8(a,b,c){var d;d=a.R.i.b;return (d-c|0)<=b&&b<d?1:0;}
function KF(a,b,c){var d,e;d=a.W;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Og(a,b,c){var d,e,f;d=a.R.i.b-c|0;e=a.W;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ADn(a,b,c){var d,e;d=a.R.i.b+c|0;e=a.W;return AJe(b,d,(e.i.b+e.k.b|0)-c|0);}
function M1(a,b,c){var d,e,f;d=a.R;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Xd(a,b,c){var d,e;d=a.R;e=d.i.a;return AJe(b,e+c|0,(e+d.k.a|0)-c|0);}
function AJe(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BL(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function J0(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.W;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new Xe;b.AB=a;b.AC=e;b.Az=f;b.AA=c;b.Ax=g;b.Ay=j;b.Av=l;b.Aw=d;b.At=h;b.Au=k;b.uD=m;return b;}
var AFq=G();
function LJ(){var a=this;B.call(a);a.j_=null;a.kE=null;a.p2=null;}
var AIw=G(0);
function AHN(b){if(b===null)return C(177);if(!DD(b,C(415))&&!DD(b,C(416))&&!DD(b,C(417))&&!DD(b,C(418))&&!DD(b,C(419))&&!DD(b,C(420))){if(DD(b,C(421)))return C(178);if(DD(b,C(422)))return C(180);if(DD(b,C(423)))return C(181);if(!DD(b,C(424))&&!DD(b,C(425)))return C(177);return C(426);}return C(179);}
function AH5(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(NU(b)){case -1655966961:if(!Bj(b,C(181)))break a;c=4;break a;case 3401:if(!Bj(b,C(180)))break a;c=3;break a;case 98723:if(!Bj(b,C(179)))break a;c=2;break a;case 3213227:if(!Bj(b,C(426)))break a;c=5;break a;case 3254818:if(!Bj(b,C(178)))break a;c=1;break a;case 3556653:if(!Bj(b,C(177)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=Ep();e
=new K;M(e);H(H(e,C(427)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function Tg(){B.call(this);this.q_=null;}
function ATF(a,b,c,d){return LP(a.q_,b,c,d);}
function Tf(){B.call(this);this.uF=null;}
function A2d(a,b,c){return G$(a.uF,b,c);}
function Ti(){B.call(this);this.yk=null;}
function AOT(a){var b,c;b=a.yk;c=new ABr;c.yr=b;return c;}
function Th(){var a=this;B.call(a);a.D6=null;a.D4=null;a.D5=null;a.D7=null;a.D8=null;}
function Xz(){B.call(this);this.ko=null;}
function A2$(a,b){var c,d,e,f,g;c=a.ko;d=c.mt;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kv;e.a=E5(0,e.a+f|0,c.gP.a-c.jQ.a|0);c=a.ko;d=c.kv;d.b=E5(0,d.b+g|0,c.gP.b-c.jQ.b|0);}a.ko.mt=b.j;return 1;}
var AFw=G();
function LZ(){return "clipboard" in $rt_globals.navigator?1:0;}
function AG7(){var a=this;B.call(a);a.cU=null;a.cc=null;a.kw=null;a.kK=null;a.n3=null;a.jY=null;}
function Nn(a){var b=new AG7();A0s(b,a);return b;}
function A0s(a,b){a.cc=BD();a.jY=A8k;a.cU=b;Bc(b.ep,a);}
function Ge(a,b,c){a.kw=c;a.n3=b;b=B1(a.cc);while(B4(b)){JF(B6(b),a.n3);}}
function Jk(a,b,c,d){a.jY=d;Lo(a,b,c);}
function Lo(a,b,c){var d,e;d=a.cU;e=d.bR;if(Bb(e.a,e.b)&&d.cb!==0.0){if(a.kw!==null&&!Jr(a)){a.kK=Gb(a.cU,a.kw);d=Vg(a,b,c,null,null);b=new R2;b.tS=a;d.kQ=b;FI(a.cU,a);return;}b=new BS;X(b);N(b);}c=new C8;Bn(c,C(428));N(c);}
function Mp(a){if(Jr(a)){ABl(a.cU,a);ABb(a,null);a.jY.g();a.jY=A8k;}}
function Vg(a,b,c,d,e){var f,g,h;f=AJy();AD_(f);Nk(f,c.cY());JF(f,a.n3);JD(f,a.kK,a.cU);if(d===null)g=b.a;else{g=b.a;g=a.cU.bR.a<((g+(EB(d)).a|0)+(EB(f)).a|0)?g-(EB(f)).a|0:(g+(EB(d)).a|0)-d.f5|0;}h=b.b;b=a.cU.bR;Ne(f,Bd(0,Be(g,b.a-(EB(f)).a|0)),Bd(0,Be(h,b.b-(EB(f)).b|0)));b=new ABQ;b.vj=a;b.vg=f;b.vh=e;f.o5=b;Br(a.cc,f);return f;}
function A2R(a,b,c){var d;a.kK=Gb(a.cU,a.kw);d=B1(a.cc);while(B4(d)){JD(B6(d),a.kK,a.cU);}}
function AP$(a,b){var c;if(!Jr(a))return 0;a:{switch(b.bm){case 27:Mp(a);c=1;break a;default:}c=0;}return c;}
function ABb(a,b){var c,d;c=a.cc.m-1|0;a:{while(true){if(c<0)break a;d=Bv(a.cc,c);if(b===d)break;EL(a.cc,c);MT(d);c=c+(-1)|0;}}}
function Jr(a){return a.cc.m<=0?0:1;}
function AR0(a){var b,c,d,e,f,g;b=a.cU;c=b.ep;d=0;while(true){e=c.g$.data;f=e.length;if(d>=f)break;if(e[d]===a){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.gq=c.gq-1|0;c.iD=null;}d=d+1|0;}ABl(b,a);b=a.cc;c=B1(b);while(B4(c)){MT(B6(c));}Iu(b);}
function V0(){B.call(this);this.ra=null;}
function AXU(a,b){Mq(a.ra,b);}
function X0(){B.call(this);this.uM=null;}
function AUp(a,b){var c,d,e,f;c=a.uM;if(c.h2!=3&&c.fS!=3){b=b.data;c.ie=3;d=CP(b[0]);e=EO(b[1]);N7(c.h,d,e);if(c.fN){b=E0(c);f=JL(E2(),c.i3);c=new K;M(c);H(HH(H(H(c,b),C(429)),f),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}
function ABG(){B.call(this);this.zN=null;}
function AZa(a,b){var c,d,e,f,g,h;c=a.zN;if(c.fS!=3){d=b.data;c.h2=3;if((CP(d[2])).data[0]!=1)Mq(c,b);else{e=CP(d[0]);f=EO(d[1]);g=c.ie!=3?0:1;Rn(c.h,e,f,g);if(c.fN){b=E0(c);h=JL(E2(),c.i3);c=new K;M(c);H(HH(H(H(c,b),C(430)),h),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function PO(){B.call(this);this.ke=null;}
function AVd(a){return a.ke;}
var AJV=G(0);
var LV=G(0);
function Q4(){B.call(this);this.ue=null;}
function AWa(a,b){return La(a.ue,b);}
function Pp(){B.call(this);this.Ap=null;}
function A1S(a,b){var c,d;c=a.Ap;d=b.bq;return Pw(c.charCodeAt(d)&65535);}
var AGv=G();
function AIR(b,c,d,e,f,g){g.a=c.a;g.b=f;Bt(b,d.a,d.b,g,e);Bt(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bt(b,d.a,d.b+f|0,g,e);Bt(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AJ3(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bt(b,j,k,i,h);Bt(b,j,k,i,h);Bt(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bt(b,l,j,i,h);Bt(b,l,j,i,h);Bt(b,l+g|0,j+g|0,i,h);}
function QI(){var a=this;B.call(a);a.cL=null;a.qi=null;a.fs=null;a.ec=0;a.cq=0;a.jd=null;a.jU=null;a.hq=0;a.wN=0;}
function Pm(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.ec;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EP(c);j=d+(-1)|0;b=Dm(d);d=Bb(j,a.cq)%a.fs.b|0;GJ(a,c,b,a.hq,g);JK(a.cL,c,0,d);if(!(j%a.ec|0))break;d=j;}}else{EP(b);k=a.ec-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GJ(a,b,Dm(j),Bb(a.cq,k)+a.hq|0,g);k=k+(-1)|0;j=h;}CM(a.cL,b);j=Bd(i,e);}return j;}k=a.ec;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EP(c);b=Dm((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cq)%a.fs.b|0;GJ(a,c,b,a.hq,g);JK(a.cL,c,0,d);if(!(j%a.ec|0))break;d=j;}}else{EP(b);d=0;while(d<a.ec){h=h+1|0;GJ(a,b,Dm((h>e?h-f|0:h)+f|0),Bb(a.cq,d)+a.hq|0,g);d=d+1|0;}CM(a.cL,b);j=Be(i,e);}return j;}
function V4(b,c,d,e){c=c.data;return d<c.length&&c[d]?HZ(b.dF,b,c[d]):e.k5;}
function Ni(a,b,c,d,e,f){D8(b,a.qi.a+d.a|0,c+d.b|0,a.jd,a.jU,a.cL,e,f,a.wN);}
function GJ(a,b,c,d,e){BW(b,c,a.fs.a-20.0*e,d);}
var AEo=G();
function Hw(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AEQ(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function T5(){var a=this;B.call(a);a.qa=null;a.qb=null;a.iu=null;}
function A5f(a,b,c){var d=new T5();AF7(d,a,b,c);return d;}
function AF7(a,b,c,d){a.qa=b;a.qb=c;a.iu=d;}
function GG(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iu.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.h6:i.h7;k=!c?i.oe:i.of;l=BL(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function L9(){var a=this;B.call(a);a.h7=0;a.of=0;a.h6=0;a.oe=0;a.oW=0;}
function Nj(a,b,c,d,e){var f=new L9();A1b(f,a,b,c,d,e);return f;}
function A1b(a,b,c,d,e,f){a.h7=b;a.of=c;a.h6=d;a.oe=e;a.oW=f;}
var Su=G(0);
var A7o=null;function AJ_(){A7o=new Ri;}
function ACd(){var a=this;B.call(a);a.sN=null;a.sO=null;}
function AWb(a,b){var c,d,e;c=a.sN;d=a.sO;c=c.fw.eh.u;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
var Ga=G(I5);
var ADu=G(Fv);
function ADx(){B.call(this);this.uY=null;}
function AUW(a,b){var c,d;c=a.uY;VA(c,Ft(c,b.j));b=Bl(c);d=c.d;N2(b,d.w,d.z);H9(c);}
function Ud(){B.call(this);this.xu=null;}
function A2c(a,b){var c,d;c=a.xu;d=c.ea+1|0;c.ea=d;c=new K;M(c);H(H(U(c,d),C(431)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function VG(){B.call(this);this.xE=null;}
function A0P(a){var b,c;b=a.xE;c=new K;M(c);H(H(H(c,C(432)),b),C(433));$rt_globals.console.info($rt_ustr(L(c)));}
var ADG=G(Et);
var A8U=null;function Xa(b){var c;c=new K;M(c);return L(EF(c,b));}
function AGo(){A8U=F($rt_floatcls());}
var Gq=G();
var A8V=null;var A8W=null;var A6n=null;var A6m=null;var A6l=null;function AJp(){A8V=DX([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A8W=AIx([Bq(1),Bq(10),Bq(100),Bq(1000),Bq(10000),Bq(100000),Bq(1000000),Bq(10000000),Bq(100000000),Bq(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A6n=AIx([Bq(1),Bq(10),Bq(100),Bq(10000),Bq(100000000),
D(1874919424, 2328306)]);A6m=new ABx;A6l=new T9;}
var JC=G();
var A8X=0;var A8Y=null;var A8Z=null;function AJQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.ri=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.na=0;c.mZ=0;return;}if(f)d=e|8388608;else{d=e<<1;while(IF(Df(Bq(d),Bq(8388608)),FE)){d=d<<1;f=f+(-1)|0;}}g=AJY(A8Z,f);if(g<0)g= -g|0;h=A8Z.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jz(d,A8Y.data[e],i);if(j<A8X){while($rt_ucmp(j,A8X)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A8Z.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jz(d,
A8Y.data[e],i);}e=d<<1;d=e+1|0;h=A8Y.data;f=g+1|0;k=h[f];l=i-1|0;m=Jz(d,k,l);n=Jz(e-1|0,A8Y.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DI(Bq(d),Bq(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.na=d;c.mZ=g-50|0;}
function Jz(b,c,d){return GK(F$(Ch(Df(Bq(b),D(4294967295, 0)),Df(Bq(c),D(4294967295, 0))),32-d|0));}
function AI1(){A8X=$rt_udiv((-1),10);A8Y=DX([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A8Z=DX([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function T9(){var a=this;B.call(a);a.na=0;a.mZ=0;a.ri=0;}
function Op(){var a=this;B.call(a);a.Ev=null;a.wu=0.0;a.CO=0.0;a.go=null;a.jo=null;a.n0=null;a.f9=0;}
function AKS(a,b){var c;if(b!==null){a.jo=b;return a;}c=new BS;Bn(c,C(434));N(c);}
function AGg(a,b){var c;if(b!==null){a.n0=b;return a;}c=new BS;Bn(c,C(434));N(c);}
function Y3(a,b,c,d){var e,f,g,$$je;e=a.f9;if(!(e==2&&!d)&&e!=3){a.f9=d?2:1;while(true){try{f=AHh(a,b,c);}catch($$e){$$je=EV($$e);if($$je instanceof Bw){g=$$je;N(AWB(g));}else{throw $$e;}}if(Ic(f))return f;if(IY(f)){if(d&&D_(b)){g=a.jo;Hh();if(g===A6Q)return Ev(Cg(b));if(Cg(c)<=J(a.go))return A6T;Fs(b,b.Z+Cg(b)|0);if(a.jo===A6R)Nf(c,a.go);}return f;}if(Rp(f)){g=a.jo;Hh();if(g===A6Q)return f;if(g===A6R){if(Cg(c)<J(a.go))return A6T;Nf(c,a.go);}Fs(b,b.Z+K4(f)|0);}else if(Mj(f)){g=a.n0;Hh();if(g===A6Q)break;if(g
===A6R){if(Cg(c)<J(a.go))return A6T;Nf(c,a.go);}Fs(b,b.Z+K4(f)|0);}}return f;}b=new C8;X(b);N(b);}
function AIz(a,b){var c,d,e,f;c=a.f9;if(c&&c!=3){b=new C8;X(b);N(b);}if(!Cg(b))return AHH(0);if(a.f9)a.f9=0;d=AHH(Bd(8,Cg(b)*a.wu|0));while(true){e=Y3(a,b,d,0);if(IY(e))break;if(Ic(e))d=AAo(a,d);if(!ND(e))continue;T8(e);}b=Y3(a,b,d,1);if(ND(b))T8(b);while(true){f=a.f9;if(f!=3&&f!=2)break;a.f9=3;if(IY(A6U)){d.ej=d.Z;d.Z=0;d.jK=(-1);return d;}d=AAo(a,d);}b=new C8;X(b);N(b);}
function AAo(a,b){var c,d,e;c=b.iF;d=KD(c,Bd(8,c.data.length*2|0));e=AJz(d,0,d.data.length);Fs(e,b.Z);return e;}
function ACG(){var a=this;B.call(a);a.br=0;a.bw=0;}
function DT(a,b){var c=new ACG();AJF(c,a,b);return c;}
function AJF(a,b,c){a.br=b;a.bw=c;}
function ALG(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.br==c.br&&a.bw==c.bw?1:0;}return 0;}
function ASd(a){return AGy(I(B,[CX(a.br),CX(a.bw)]));}
function A0b(a,b){var c;b=b;c=BL(a.br,b.br);if(!c)c=BL(a.bw,b.bw);return c;}
var AFG=G(C1);
function UE(){B.call(this);this.Dq=null;}
function AMz(a){Bk(Bu(),C(435));}
var AD5=G(0);
var A8k=null;function AG3(){A8k=new W_;}
function HX(){CE.call(this);this.c7=null;}
function V7(a,b){var c;if(a.c7===null){a.c7=b;return;}c=new Eh;X(c);N(c);}
function AZq(a){var b,c,d;b=a.c7.data;c=b.length;d=0;while(d<c){b[d].cD();d=d+1|0;}}
function AQM(a,b){var c,d,e;c=a.c7.data;d=c.length;e=0;while(e<d){c[e].dv(b);e=e+1|0;}}
function AVl(a,b){var c,d,e,f;c=0;d=a.c7.data;e=d.length;f=0;while(f<e){c=c|d[f].cg(b);f=f+1|0;}return c;}
function ANq(a,b,c,d){HN(a,b,c,d);a.BM();}
function A1Y(a,b,c,d){var e,f,g,h,i;e=0;f=a.c7.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.cu(b,c,d);h=h+1|0;}return e;}
function ATb(a,b,c){var d,e,f,g,h;d=a.c7.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.j)){h=g.cv(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A17(a,b,c){var d,e,f,g,h;d=0;e=a.c7.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.j))d=d|h.dz(b,c);g=g+1|0;}return d;}
function A2t(a,b){var c,d,e,f,g;c=0;d=a.c7.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.j))c=c|g.bQ(b);f=f+1|0;}return c;}
function AN2(a,b,c,d){var e,f,g,h,i;e=0;f=a.c7.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.dx(b,c,d);h=h+1|0;}return e;}
function QU(){var a=this;HX.call(a);a.sb=null;a.Ae=null;a.gj=null;a.oI=null;a.kJ=null;a.gl=null;a.fV=null;}
function APp(a){var b,c,d,e;b=a.k.a/4|0;c=b+Dz(a,1.0)|0;d=AJN(a.i);e=BH(b,a.k.b);a.c7.data[0].e7(d,e,a.bN);d.a=a.i.a+b|0;e.a=c-b|0;a.c7.data[1].e7(d,e,a.bN);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.c7.data[2].e7(d,e,a.bN);}
function AXK(a){var b,c;b=AG$(a.fV);c=AHJ(a.kJ);return BH((b.a+a.oI.k.a|0)+c.a|0,b.b);}
function Y1(){B.call(this);this.BI=null;}
function AVD(a,b){var c,d;c=a.BI;d=c.ea+1|0;c.ea=d;c=b.iT;b=new K;M(b);H(H(U(b,d),C(436)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var Ri=G();
function AZn(a,b){}
function Fl(){var a=this;CE.call(a);a.cF=null;a.Q=null;a.fc=null;}
function A80(){var a=new Fl();LN(a);return a;}
function LN(a){E1(a);a.cF=new Bg;a.Q=new Bg;}
function AXx(a,b){a.fc=b;}
function S9(a,b,c){V(a.cF,b,c);}
function To(a){var b;b=a.fc;if(b!==null)ACp(b);}
function AFF(a){var b;b=a.Q;b.a=WQ(a,b.a);b=a.Q;b.b=ACP(a,b.b);}
function AGN(a,b){var c,d;c=a.Q.a;d=WQ(a,b);a.Q.a=d;return c==d?0:1;}
function ALf(a,b){var c,d;c=a.Q.b;d=ACP(a,b);a.Q.b=d;return c==d?0:1;}
function ACP(a,b){return Bd(0,Be(b,a.cF.b-a.k.b|0));}
function WQ(a,b){return Bd(0,Be(b,a.cF.a-a.k.a|0));}
function Rd(){var a=this;Fl.call(a);a.bT=null;a.d3=null;a.ic=null;a.As=null;a.ei=null;a.b2=null;a.e0=null;a.fM=null;a.dR=0;a.fK=0;a.BL=null;a.d2=0;a.eN=0;a.hz=0;a.f6=0;a.fX=0;a.cP=0;a.e2=null;a.kj=null;a.yE=null;a.iB=null;}
function A5y(a,b){var c=new Rd();AKP(c,a,b);return c;}
function AKP(a,b,c){LN(a);a.d3=Sp();a.ic=new Bg;a.b2=A81;a.e0=Q(JZ,0);a.d2=0;a.eN=0;a.hz=0;a.f6=0;a.fX=0;a.e2=AIi(0);a.iB=JQ();a.bT=b;a.kj=c;a.BL=c;Qr(a);}
function Qr(a){a.dR=Cf(2.0,a.bT.cb);}
function Vr(a){return a.b2.data.length?0:1;}
function W4(a,b){Tm(a);a.b2=b;}
function Tm(a){V(a.ic,0,0);}
function V8(a,b,c){a.yE=b;a.As=c;a.ei=null;a.e2=null;a.fK=0;Tm(a);}
function A2a(a){a.fM=BY(a.fM,null);V(a.ic,0,0);Fu(a.iB);a.e2=null;a.b2=A81;a.e0=null;a.d2=0;a.eN=0;a.hz=0;AA2(a.d3);a.kj=null;}
function AWQ(a,b,c){Ys(a);Qr(a);a.ei=null;a.e2=null;a.fK=0;}
function AU_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Kd(a.bT);if(Vr(a))return;KV(a);Cm(c,a.ei);d=Ek(a);e=AH4(c,a.fK);f=Be(H$(a.k.b,d),a.b2.data.length)+30|0;g=a.yE.By;h=a.e0.data;d=h.length;if(d<f){a:{i=a.f6;j=a.fX;k=a.b2;l=a.e2;m=a.iB;n=Q(JZ,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gT!==c){ACw(l,q,m);o[f]=MM(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MM(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MM(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ACw(l,c,m);h[f]=null;}f=f+1|0;}a.e0=n;Ct(a.ic,ML(a.e2));YG(a,a.bT.b4);}a.f6=Be((a.Q.b+a.dR|0)/(Ek(a)+a.dR|0)|0,a.b2.data.length-1|0);a.fX=Be((((a.Q.b+a.d3.t.b|0)-1|0)+a.dR|0)/(Ek(a)+a.dR|0)|0,a.b2.data.length-1|0);if(!a.e0.data.length)return;AHZ(a,e);ACl(a,b);q=g.Ai;c=a.i;Bt(b,c.a,c.b,a.k,q);c=a.d3.u;i=c.a;j=c.b;p=Cz(a.bT,2.0);s=a.bT.cW;t=a.f6;u=i+p|0;while(t<=a.fX){l=XZ(a,t);d=Bb(t,Ek(a));v
=t+1|0;w=d+Bb(v,a.dR)|0;x=u+a.d2|0;y=x+a.eN|0;z=a.cP!=t?0:1;m=!z?q:g.sL;ba=!z?g.t3:g.le;bb=!z?g.q8:g.le;bc=!z?g.rL:g.le;bd=(j+w|0)-a.Q.b|0;D8(b,u,bd,l.jw,l.to,a.fM,ba,m,a.bT.cw);D8(b,x,bd,l.jX,l.lb,a.fM,bb,m,a.bT.cw);D8(b,y,bd,l.jx,l.kI,a.fM,bc,m,a.bT.cw);d=l.jw.a;be=u+d|0;V(s,Bd(0,a.d2-d|0),l.jw.b);Bt(b,be,bd,s,m);d=u+a.d2|0;f=l.jX.a;bf=d+f|0;V(s,Bd(0,a.eN-f|0),l.jX.b);Bt(b,bf,bd,s,m);d=l.jx.a;bg=y+d|0;V(s,Bd(0,(((a.d3.t.a-d|0)-a.eN|0)-a.d2|0)-p|0),l.jx.b);Bt(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;V(s,p,Ek(a)+a.dR
|0);Bt(b,bh,bd,s,q);t=v;}F9(b);}
function AHZ(a,b){var c,d,e,f,g,h;c=0;d=a.f6;while(d<=a.fX){e=XZ(a,d);if(!(e!==null&&e.gT===a.b2.data[d])){f=a.e0.data;g=a.b2;e=a.e2;h=a.iB;c=d%f.length|0;if(f[c]!==null)ACw(e,f[c],h);f[c]=MM(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.ic,ML(a.e2));YG(a,a.bT.b4);}}
function YG(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ic;c=D5(b,c.a+150|0,c.b,a.bT.cw);Cm(c,a.ei);d=a.ei;e=d.el;f=e-(e+d.eF)/16.0;g=a.e0.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gT.lu;k=d.lb;BW(c,j,k.bn+a.fK,f+k.bt);j=d.gT.lN;d=d.kI;BW(c,j,d.bn+a.fK,f+d.bt);}i=i+1|0;}a:{d=a.iB;if(d.c8>0){h=d.cZ;i=0;b:while(true){g=d.b3.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cS;l=j.cO;k=k;l=l.l7;BW(c,k,l.bn+a.fK,f+l.bt);j=j.cV;if(h!=d.cZ)break b;}i=i+1|0;}b=new Gu;X(b);N(b);}}if(a.fM===null)a.fM=CW(b);CM(a.fM,
c);EA(c);}
function XZ(a,b){var c;c=a.e0.data;return c[b%c.length|0];}
function A0a(a,b){Ct(a.d3.t,b);}
function A1g(a,b){Ct(a.d3.u,b);}
function Ys(a){var b,c,d,e,f,g,h,i,j;b=Kd(a.bT);if(Vr(a))return;KV(a);Cm(b,a.ei);c=AH4(b,a.fK);d=a.b2.data;e=d.length;f=0;while(f<e){g=d[f];h=Nt(c,g.hH);i=Nt(c,g.lu);j=Nt(c,g.lN);a.d2=Bd(a.d2,h);a.eN=Bd(a.eN,i);a.hz=Bd(a.hz,j);f=f+1|0;}}
function AP1(a,b){var c;c=AAc(a,b.j);if(c>=0)a.cP=c;return Fa(a.d3,a.i)&&GB(a.bT.cR)?1:0;}
function AN$(a,b,c){if(!Fa(a.d3,b.j)&&!K$(a.d3)){b=a.BL;if(b!==null)b.g();}return null;}
function AR7(a,b,c,d){var e;if(d==1){e=AAc(a,b.j);if(e>=0)Ux(a,a.b2.data[e]);}return 1;}
function Ux(a,b){a.kj.g();b.tT.g();}
function AAc(a,b){var c,d,e;if(!a.e0.data.length)return (-1);c=Ek(a);d=(b.b-a.i.b|0)+a.Q.b|0;e=a.dR;e=(d+e|0)/(c+e|0)|0;if(e<a.b2.data.length)return e;return (-1);}
function Ek(a){return E6(a.ei);}
function KV(a){var b;if(a.ei===null){b=Gb(a.bT,a.As);a.ei=b;a.e2=AIi(E6(b));a.fK=CY(a.ei.p7);}}
function A1t(a,b){var c,d,e;a:{switch(b.bm){case 13:Ux(a,a.b2.data[a.cP]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cP=a.f6;b=a.fc;c=a.Q;Je(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cP=a.fX;b=a.fc;c=a.Q;Je(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cP=a.b2.data.length-1|0;break a;case 36:case 37:a.cP=0;break a;case 38:d=a.cP;e=a.b2.data.length;a.cP=((d+e|0)
-1|0)%e|0;break a;case 40:a.cP=(a.cP+1|0)%a.b2.data.length|0;break a;default:break a;}a.kj.g();return 0;}e=a.cP;if(e<=a.f6)Je(a.fc,a.Q.a,Bb(e,Ek(a))+Bb(a.cP,a.dR)|0);else if(e>=a.fX)Je(a.fc,a.Q.a,(Bb(e+1|0,Ek(a))+Bb(a.cP+2|0,a.dR)|0)-a.k.b|0);return 0;}
var U1=G();
function AT0(a){}
function AFe(){var a=this;CE.call(a);a.oq=null;a.xF=null;a.Aj=null;a.bL=null;a.dl=null;a.dB=null;a.ua=null;a.rf=null;a.vn=0.0;a.pu=null;a.oS=null;}
function GA(a,b){var c=new AFe();AUT(c,a,b);return c;}
function AUT(a,b,c){var d;c=c.cR;E1(a);d=new PW;d.yD=a;a.xF=d;d=new PV;d.zj=a;a.Aj=d;a.vn=10.0;a.bL=b;a.oq=c;b.fc=a;}
function ASO(a){var b;b=a.bL;b.fc=null;a.bL=BY(b,null);}
function Jd(a,b,c){var d;a.oS=c;a.pu=b;d=a.dl;if(d!==null)H6(d,b,c);b=a.dB;if(b!==null)H6(b,a.pu,a.oS);}
function Rm(a,b,c,d){HN(a,b,c,d);HN(a.bL,b,c,d);if(d!==0.0)ACp(a);}
function Je(a,b,c){K8(a,b);LD(a,c);}
function ACp(a){var b;AFF(a.bL);b=FL(a)*3|0;if(Zu(a,b))TT(a);else a.dB=null;if(AD1(a,b))WH(a);else a.dl=null;}
function AD1(a,b){var c;c=a.k.b;return c>b&&a.bL.cF.b>c?1:0;}
function Zu(a,b){var c;c=a.k.a;return c>b&&a.bL.cF.a>c?1:0;}
function TT(a){var b,c,d,e,f,g;b=a.dB;if(b===null)b=I9();a.dB=b;O6(a,b);c=a.dB;b=a.bL;d=b.Q.a;e=a.i;f=e.a;g=a.k;Rl(c,d,f,g.a,b.cF.a,e.b+g.b|0,FL(a));}
function WH(a){var b,c,d,e,f,g;b=a.dl;if(b===null)b=I9();a.dl=b;O6(a,b);c=a.dl;b=a.bL;d=b.Q.b;e=a.i;f=e.b;g=a.k;Kh(c,d,f,g.b,b.cF.b,e.a+g.a|0,FL(a));}
function FL(a){return Dz(a,a.vn);}
function O6(a,b){H6(b,a.pu,a.oS);}
function A0F(a,b){var c;a.bL.dv(b);if(!(a.dl===null&&a.dB===null)){B_(b,1);c=a.dl;if(c!==null)GP(c,b);c=a.dB;if(c!==null)GP(c,b);c=a.dl;if(c!==null)GW(c,b);c=a.dB;if(c!==null)GW(c,b);B_(b,0);}}
function Tu(a,b){var c,d;a:{b:{c=a.dl;if(!(c!==null&&II(c,b))){c=a.dB;if(c===null)break b;if(!II(c,b))break b;}d=1;break a;}d=0;}return d;}
function AS$(a,b,c,d){return !Tu(a,b.j)&&!a.bL.cu(b,c,d)?0:1;}
function K8(a,b){var c;b=AGN(a.bL,b);if(Zu(a,FL(a)*3|0))TT(a);if(b){c=a.ua;if(c!==null)c.g();}}
function LD(a,b){var c;if(ACR(a,b)){c=a.rf;if(c!==null)c.g();}}
function ACR(a,b){var c;c=ALf(a.bL,b);if(AD1(a,FL(a)*3|0))WH(a);return c;}
function ASR(a,b,c){var d,e;d=a.dl;if(d!==null){e=F1(d,b.j,a.xF,1);if(e!==null)return e;}d=a.dB;if(d!==null){e=F1(d,b.j,a.Aj,0);if(e!==null)return e;}return a.bL.cv(b,c);}
function AQ9(a,b,c){return Tu(a,b.j)?1:0;}
function AQU(a,b){var c,d,e;c=a.dl;d=c!==null&&F7(c,b.j,a.oq)?1:0;c=a.dB;e=c!==null&&F7(c,b.j,a.oq)?1:0;return !d&&!e&&!a.bL.bQ(b)?0:1;}
function AXb(a,b,c,d){var e,f;if(!B3(a,b.j))return 0;e=Cf(d*0.5,a.bN);f=Cf(c*0.5,a.bN);if(b.bJ){f=f+e|0;e=0;}if(a.dl!==null&&e)LD(a,a.bL.Q.b+e|0);if(a.dB!==null&&f)K8(a,a.bL.Q.a+f|0);return 1;}
function AHJ(a){var b,c;b=FL(a);c=a.bL.hS();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
function P_(){var a=this;Fl.call(a);a.md=null;a.pM=null;a.x2=null;a.r8=0.0;}
function AT8(a){var b;b=Cf(20.0,a.bN);return BH(b,b);}
function A0g(a,b){var c,d,e;S9(a,b.a*3|0,b.b*5|0);c=a.x2;d=c.tb;c=c.ta;b=Ck(b);e=new K;M(e);H(H(H(e,c),C(29)),b);FP(d,L(e));}
function AUk(a,b){var c,d,e,f,g,h,i,j,k,l,m;AKV(a,b);ACl(a,b);c=Cf(30.0,a.bN);d=a.Q;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.k;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.pM;d.b=c;d.a=c;a.md.bC=1.0;while(h<=e){g=a.i.b-a.Q.b|0;j=f;while(j<=i){k=a.i.a-a.Q.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AKJ(l);m=m+1|0;}Vd(AKk(l),0.75,a.r8,a.md);Bt(b,k+j|0,g+h|0,a.pM,a.md);j=j+c|0;}h=h+c|0;}F9(b);}
function AVr(a,b){}
function RU(){var a=this;B.call(a);a.tb=null;a.ta=null;}
function Uk(){var a=this;CE.call(a);a.f7=null;a.hw=null;a.jH=null;a.ew=null;a.kH=0.0;a.eG=0;a.ip=0;a.dX=null;a.mF=null;}
function Vt(a){var b;if(Of(a))return 0;ACe(a);b=Cz(a.f7,a.kH);return E6(a.ew)+(b*2|0)|0;}
function Lh(a){var b;b=a.k;return b.a&&b.b?0:1;}
function Of(a){return a.hw!==null&&a.jH!==null?0:1;}
function Qz(a,b){a.k.b=b;}
function QD(a,b,c,d,e){var f,g;f=a.f7.cW;V(f,d,a.k.b);g=a.i;Bt(b,g.a+c|0,g.b,f,e);}
function ACe(a){if(a.ew===null)a.ew=Gb(a.f7,a.hw);}
var Z3=G(Et);
var A82=null;function De(b,c){return Long_udiv(b, c);}
function AId(b,c){return Long_urem(b, c);}
function DI(b,c){return Long_ucompare(b, c);}
function AI8(){A82=F($rt_longcls());}
function ABr(){B.call(this);this.yr=null;}
function APL(a,b){DK(a.yr,b);}
function AD2(){B.call(this);this.Bj=null;}
function AYv(a){Y6(a.Bj);}
function ADU(){B.call(this);this.B4=null;}
function A0c(a){ACB(a.B4);}
function UU(){B.call(this);this.vf=null;}
function A01(a){RS(a.vf);}
function AK7(){var a=this;HX.call(a);a.dn=null;a.dm=null;a.ik=null;a.ij=null;a.gQ=null;a.qy=null;}
function AV0(a){var b=new AK7();AMA(b,a);return b;}
function AMA(a,b){var c,d;E1(a);a.dn=TM(b);a.dm=TM(b);a.ik=GA(a.dn,b);a.ij=GA(a.dm,b);a.gQ=AV6(b);c=ALU(a.ik,a.dn);d=ALU(a.ij,a.dm);ACS(a.gQ,c,d);a.qy=ATz(c,d);V7(a,I(CE,[a.ik,a.gQ,a.ij]));}
function AD0(a,b){a.gQ.kb=b;J4(a.dn,b);JE(a.dn,a.ik);J4(a.dm,b);JE(a.dm,a.ij);}
function PX(a,b){a.qy.ig=b;a.dn.qe=b.qa;a.dm.qe=b.qb;a.gQ.e1=b;}
function APY(a){var b,c,d,e,f;b=Cf(20.0,a.bN);c=a.k.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AJN(a.i);f=BH(d,a.k.b);Rm(a.ik,e,f,a.bN);e.a=a.i.a+c|0;Rm(a.ij,e,f,a.bN);e.a=a.i.a+d|0;f.a=c-d|0;HN(a.gQ,e,f,a.bN);}
function ABo(){B.call(this);this.oa=null;}
var A81=null;function APf(){var a=new ABo();AE0(a);return a;}
function AE0(a){a.oa=BD();}
function Wb(a,b,c,d,e){var f;f=new K_;f.tT=e;f.lu=c;f.lN=d;f.hH=b;Br(a.oa,f);}
function AC7(a){return Gj(a.oa,A81);}
function AAu(b){return b===null?C(21):ACh(b);}
function AKQ(){A81=Q(K_,0);}
function JZ(){var a=this;B.call(a);a.to=null;a.lb=null;a.kI=null;a.jw=null;a.jX=null;a.jx=null;a.gT=null;}
function MM(b,c,d,e){var f,g,h;f=new JZ;f.jw=new Bg;f.jX=new Bg;f.jx=new Bg;f.gT=b;g=Co(e,b.hH);if(g!==null)g.iR=g.iR+1|0;else{g=new ACC;h=Kn(c,b.hH,d);g.iR=1;g.l7=h;Er(e,b.hH,g);}e=g.l7;f.to=e;V(f.jw,e.bf|0,e.bC|0);e=Kn(c,b.lu,d);f.lb=e;V(f.jX,e.bf|0,e.bC|0);b=Kn(c,b.lN,d);f.kI=b;V(f.jx,b.bf|0,b.bC|0);return f;}
function ACw(b,c,d){var e,f,g;e=c.gT.hH;f=Co(d,e);g=f.iR-1|0;f.iR=g;if(!g){Lv(d,e);IW(b,f.l7);}IW(b,c.lb);IW(b,c.kI);}
var Ox=G(0);
var A73=null;var A74=null;function AF8(){A73=EW(40,40,40,200);A74=EW(43,43,43,128);}
function ABx(){var a=this;B.call(a);a.nz=FE;a.mJ=0;a.q6=0;}
var W_=G();
function AUa(a){}
function RD(){var a=this;B.call(a);a.vM=null;a.vL=0;}
function AQ_(a){Ie(a.vM,a.vL);}
function Pz(){B.call(this);this.wA=null;}
function AWF(a){Ie(a.wA,1);}
function PA(){B.call(this);this.BV=null;}
function AUM(a){Ie(a.BV,0);}
function SC(){var a=this;B.call(a);a.A4=null;a.A1=null;a.A2=null;}
function APR(a){var b,c,d,e,f;b=a.A4;c=a.A1;d=a.A2;e=Bu();f=new K;M(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bk(e,L(f));}
function PW(){B.call(this);this.yD=null;}
function ALT(a,b){var c;c=a.yD;LD(c,FS(b,c.bL.cF.b-c.k.b|0));}
function PV(){B.call(this);this.zj=null;}
function AL_(a,b){var c;c=a.zj;K8(c,FS(b,c.bL.cF.a-c.k.a|0));}
function K_(){var a=this;B.call(a);a.tT=null;a.lu=null;a.lN=null;a.hH=null;}
var C8=G(Bw);
var AJ9=G(Fv);
function AWB(a){var b=new AJ9();AQx(b,a);return b;}
function AQx(a,b){a.kF=1;a.k2=1;a.nq=b;}
function AK4(){var a=this;B.call(a);a.oJ=null;a.mT=null;a.eL=null;a.mE=null;a.by=null;a.pB=null;a.nI=null;a.fW=null;a.gK=null;a.jI=null;}
function AUi(a,b){var c=new AK4();AYX(c,a,b);return c;}
function AYX(a,b,c){var d,e,f;a.eL=b;a.mE=c;a.by=AIr();b=new K;M(b);a.jI=b;a.fW=JQ();b=new SF;d=AKH(16);b.gC=0;b.d1=Q(JA,d);b.xH=0.75;Uo(b);a.gK=b;b=new UC;c=a.by;e=a.jI;f=a.fW;b.dA=c;b.ms=e;b.s0=f;a.pB=b;b=new Ul;b.cX=c;b.nh=e;b.sc=f;a.nI=b;}
function W0(a){var b,c,d,e,f,g,h;a:{b=M7(a.eL.fa);c=b.jj;if(c.c8>0){d=c.cZ;e=0;b:while(true){f=b.jj.b3.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cS;if(MW(a.fW,g))Co(a.fW,g);else{h=a.fW;Er(h,g,CX(h.c8));}c=c.cV;if(d!=b.jj.cZ)break b;}e=e+1|0;}b=new Gu;X(b);N(b);}}b=a.eL.fB;if(b!==null)ZB(a,b);Bh(a.by,a.eL.fa.c8);b=Ss(M7(a.eL.fa));while(Gf(b)){c=Qj(b);FX(a.by,a.jI.L,J(c));BU(a.jI,c);}b=Ss(M7(a.eL.fa));while(Gf(b)){c=Qj(b);c=Co(a.eL.fa,c);Bh(a.by,c.m);c=B1(c);while(B4(c)){g=B6(c);g=Co(a.fW,g);Bh(a.by,
g.bq);}}if(a.eL.fB===null)Bh(a.by,(-1));else{Bh(a.by,a.gK.gC);AAj(a,a.eL.fB);}if(a.mE===null)Bh(a.by,(-1));else{Bh(a.by,1);AEB(a.mE,a.by,a.gK);}a.oJ=K1(a.by);a.mT=Gn(L(a.jI));}
function ZB(a,b){var c,d,e,f,g,h;if(ACF(a.gK,b))Oo(a.gK,b);else{c=a.gK;d=CX(c.gC);if(b===null){e=Y8(c);if(e===null){c.l6=c.l6+1|0;e=ACJ(c,null,0,0);f=c.gC+1|0;c.gC=f;if(f>c.pC)WU(c);}}else{g=ME(b);h=g&(c.d1.data.length-1|0);e=W5(c,b,h,g);if(e===null){c.l6=c.l6+1|0;e=ACJ(c,b,h,g);f=c.gC+1|0;c.gC=f;if(f>c.pC)WU(c);}}e.cO=d;}b=b.cH;if(b===null)return;c=new VO;c.sd=a;b.fk(c);}
function AAj(a,b){var c,d,e,f;c=(Oo(a.gK,b)).bq;Bh(a.by,c);if(b instanceof NI)Bh(a.by,(-1));else if(!(b instanceof Lb))Bh(a.by,0);else Bh(a.by,1);d=a.pB;Bh(d.dA,b.eX.c1());e=b.eX;f=new Wa;f.vQ=d;e.fk(f);d=a.nI;Bh(d.cX,b.fC.c1());e=b.fC;f=new T1;f.uv=d;e.fk(f);d=b.lm;Bh(a.by,d.c1());e=new UQ;e.AQ=a;d.fk(e);d=b.hM;Bh(a.by,d.c1());d=d.b5();while(d.cz()){e=d.b7();Pc(a.pB,e.lo);G_(a.nI,e.kO);Bh(a.by,e.rT);}d=b.ur;if(d===null)Bh(a.by,(-1));else Bh(a.by,(Co(a.fW,d)).bq);b=b.cH;Bh(a.by,b.c1());d=new Qg;d.qw=a;b.fk(d);}
function R_(){B.call(this);this.vv=null;}
function AZr(a,b){var c,d,e,f,g,h,i,j;c=a.vv;if(c.fN){d=E0(c);e=new K;M(e);H(H(e,d),C(437));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CP(b[0]);g=EO(b[1]);h=(CP(b[2])).data[0];if(c.h.cl==h){i=null;j=null;if(b.length>=5){i=CP(b[3]);j=EO(b[4]);}b=Eb(c);if(!Bj(b,C(181))&&!Bj(b,C(426))?0:1)N7(c.h,f,g);else{Wi(c.h,f,g,i,j);Fu(c.h.dE);Fu(c.h.dP);Na(c.h);KA(c.h);Ok(c);}}}
function ABH(){B.call(this);this.wv=null;}
function AXZ(a,b){var c,d,e,f;c=a.wv;if(c.fS!=3){b=b.data;d=CP(b[0]);e=EO(b[1]);Wi(c.h,d,e,null,null);if(c.fN){b=E0(c);f=JL(E2(),c.Ab);c=new K;M(c);H(HH(H(H(c,b),C(438)),f),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}
function Si(){var a=this;B.call(a);a.vJ=null;a.vK=null;a.vI=0;}
function AWZ(a,b){var c,d,e;c=a.vJ;d=a.vK;e=a.vI;d.f(U2(c,(b.j.a+e|0)-c.e5.a|0));}
function Sh(){var a=this;B.call(a);a.rR=null;a.rP=null;a.rQ=0;}
function A1_(a,b){var c,d,e;c=a.rR;d=a.rP;e=a.rQ;d.f(QE(c,(b.j.b+e|0)-c.e5.b|0));}
var EK=G(0);
function W6(){var a=this;B.call(a);a.jT=0;a.qd=0;a.lB=0;a.hR=0;a.ji=null;}
function B4(a){return a.jT>=a.lB?0:1;}
function B6(a){var b,c;Qq(a);b=a.jT;a.hR=b;c=a.ji;a.jT=b+1|0;return c.nK(b);}
function Zr(a){var b,c,d;if(a.hR<0){b=new C8;X(b);N(b);}Qq(a);a.ji.qf(a.hR);a.qd=a.ji.b0;c=a.hR;d=a.jT;if(c<d)a.jT=d-1|0;a.lB=a.lB-1|0;a.hR=(-1);}
function Qq(a){var b;if(a.qd>=a.ji.b0)return;b=new Gu;X(b);N(b);}
function Lf(){var a=this;Op.call(a);a.xk=null;a.zP=null;}
function AHh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.xk;e=0;f=0;g=a.zP;a:{b:{while(true){if((e+32|0)>f&&D_(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cg(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BI;c=new K;M(c);U(H(U(H(c,C(439)),l),C(100)),h);Bn(b,L(c));N(b);}if(Cg(b)<m){b=new Od;X(b);N(b);}if(m<0){b=new BI;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bn(b,L(c));N(b);}n=b.Z;h=n+b.nj|0;e=0;while(e<m){o=k+1|0;i=b.pQ.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D_(c)){p=!D_(b)&&e>=f?A6U:A6T;break a;}i=g.data;n=Cg(c);o=i.length;n=Be(n,o);q=new AB7;q.tr=b;q.AM=c;p=AK3(a,d,e,f,g,0,n,q);e=q.vU;if(p===null&&0==q.mM)p=A6U;k=q.mM;h=0;if(c.qk){b=new Km;X(b);N(b);}if(Cg(c)<k)break;if(h>o){b=new BI;c=new K;M(c);BM(U(H(U(H(c,C(103)),h),C(97)),o),41);Bn(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BI;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bn(b,L(c));N(b);}if(k<0){b=new BI;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bn(b,L(c));N(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;AAg(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new JG;X(b);N(b);}b=new BI;c=new K;M(c);BM(U(H(U(H(c,C(103)),k),C(97)),h),41);Bn(b,L(c));N(b);}Fs(b,b.Z-(f-e|0)|0);return p;}
var S5=G(Lf);
function AK3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Nu(h,2))break a;i=A6U;break a;}c=k+1|0;n=j[k];if(!Gs(a,n)){c=c+(-2)|0;i=Ev(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Nu(h,3))break a;i=A6U;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gs(a,n))break b;if(!Gs(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ov(p)){c=k+(-3)|0;i=Ev(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ev(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Nu(h,4))break a;i=A6U;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cg(h.AM)<2?0:1)break a;i=A6T;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gs(a,n))break c;if(!Gs(a,o))break c;if(!Gs(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JP(r);m=c+1|0;j[c]=Ja(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ev(1);break a;}c=k+(-3)|0;i
=Ev(1);}h.vU=c;h.mM=f;return i;}
function Gs(a,b){return (b&192)!=128?0:1;}
function AC$(){var a=this;B.call(a);a.CQ=null;a.CR=null;a.CP=null;}
function Vz(){B.call(this);this.qK=null;}
function ATG(a,b){var c,d;c=a.qK;d=c.ea+1|0;c.ea=d;c=new K;M(c);H(H(U(c,d),C(440)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function Qc(){B.call(this);this.qo=null;}
function ALZ(a){return a.qo.g4();}
function Qb(){B.call(this);this.BA=null;}
function AN4(a){return a.BA.g4();}
function RP(){B.call(this);this.t9=null;}
function A1D(a){return a.t9.g4();}
var XB=G();
function AUL(a){return Gw(1);}
function Z$(){B.call(this);this.tc=null;}
function A2v(a,b){a.tc.f(H3(b));}
var AFK=G();
function ACz(){B.call(this);this.vp=null;}
function AOn(a,b){a.vp.g();}
var AJH=G();
var AGb=G();
function W3(){B.call(this);this.uL=null;}
function ANb(a,b){var c,d,e,f;c=a.uL;d=Ck(b);e=new K;M(e);H(H(e,C(441)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new ABC;d.CT=c;d.s6=b;e=new ABE;e.Fb=c;c=AKN(e);e=new ACo;e.xd=d;d=b.f8;if(d!==null)d.arrayBuffer().then(Bx(e,"f"),Bx(c,"f"));else{b=b.io.getFile();f=new ACq;f.AE=e;f.AF=c;b.then(Bx(f,"f"),Bx(c,"f"));}}
function W2(){B.call(this);this.xb=null;}
function ASF(a,b){var c,d,e;c=a.xb;d=Ck(b);e=new K;M(e);H(H(e,C(442)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new PG;d.Cc=c;Nh(b,d);}
function Hj(){var a=this;B.call(a);a.eq=null;a.je=null;a.oz=null;a.hb=null;a.jO=0;a.ht=0;a.hr=0;}
function A83(a,b){var c=new Hj();SS(c,a,b);return c;}
function SS(a,b,c){a.hb=XI(b);a.jO=c;a.ht=0;}
function E4(a){return (JS(a.hb,0)).v;}
function AEj(a){a.ht=60084;}
function I7(a){return a.ht!=60084?0:1;}
function AFd(a){a.ht=60086;}
function AFn(a){a.hr=60035;}
function Lx(a){a.hr=60027;}
function QN(a){a.hr=60137;}
function IR(a){a.hr=60151;}
function Dg(){Hj.call(this);this.e$=null;}
var A84=null;var A85=null;function AKi(a,b){var c=new Dg();J2(c,a,b);return c;}
function J2(a,b,c){SS(a,b,c);a.e$=A84;}
function A2n(a){return E4(a);}
function AKR(a){var b,c,d;b=Q(Hj,ADT(a));c=b.data;if(QY(a,b,0)==c.length)return b;d=new Bw;X(d);N(d);}
function Jg(a){return a.e$.data.length;}
function ADT(a){var b,c,d,e;b=1;if(I7(a)){c=a.e$.data;d=c.length;e=0;while(e<d){b=b+ADT(c[e])|0;e=e+1|0;}}return b;}
function OI(a){var b,c,d,e;b=1;c=a.e$.data;d=c.length;e=0;while(e<d){b=b+OI(c[e])|0;e=e+1|0;}return b;}
function QY(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(I7(a)){d=a.e$.data;c=d.length;f=0;while(f<c){e=QY(d[f],b,e);f=f+1|0;}}return e;}
function NT(a){AEj(a);IR(a);}
function IC(a){AFd(a);AFn(a);}
function AGj(){A84=Q(Dg,0);A85=new AD$;}
function RR(){B.call(this);this.AP=null;}
function AYH(a){RS(a.AP);}
function Ln(){var a=this;Fl.call(a);a.eS=null;a.co=null;a.en=null;a.hU=null;a.fF=null;a.lV=null;a.mH=null;a.AH=0;a.rb=0;a.ox=0;a.vb=null;a.f_=null;a.ga=null;a.g1=null;a.hL=null;a.hQ=null;a.jm=null;a.gy=null;a.rO=0;a.j7=0;a.qe=null;}
function ARC(a){Or(a.hU);Yi(a.co);OP(a);}
function OP(a){a.f_=BY(a.f_,null);a.ga=BY(a.ga,null);a.g1=BY(a.g1,null);a.hL=BY(a.hL,null);a.hQ=BY(a.hQ,null);a.jm=BY(a.jm,null);a.gy=BY(a.gy,null);}
function WZ(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.g1;break a;case 60084:c=a.ga;break a;case 60086:c=a.f_;break a;case 60136:c=a.gy;break a;case 60137:c=a.jm;break a;case 60151:c=a.hL;break a;default:c=null;break a;}c=a.hQ;}return c;}
function T4(a){return a.en.eQ;}
function J4(a,b){var c,d;a.fF=b;c=BN(a.lV,b.pI);d=BN(a.mH,b.oR);if(!(c&&d)){a.lV=b.pI;a.mH=b.oR;if(a.bN!==0.0)SN(a);}}
function AMf(a,b,c){PT(a.co,c);if(a.lV!==null)SN(a);}
function SN(a){var b,c,d,e,f;SQ(a.hU);b=a.co;c=a.lV;d=a.bN;e=a.eS.b4;f=b.gZ;b.cT=AI0(c.h_,c.gR*d,c.mm,c.kh,f,e);Sn(a.co,1.25,a.eS.b4);OP(a);a.vb=Gb(a.eS,a.mH);a.f_=BY(a.f_,Fi(a,60086));a.ga=BY(a.ga,Fi(a,60084));a.g1=BY(a.g1,Fi(a,60035));a.hL=BY(a.hL,Fi(a,60151));a.hQ=BY(a.hQ,Fi(a,60027));a.jm=BY(a.jm,Fi(a,60137));a.gy=BY(a.gy,Fi(a,60136));a.rO=Bd(Bd(Bd(Bd(BZ(a.g1),BZ(a.hL)),BZ(a.hQ)),BZ(a.gy)),BZ(a.gy));a.j7=Bd(BZ(a.ga),BZ(a.f_));Pj(a);}
function Pj(a){S9(a,a.cF.a,Bb(a.en.eQ.data.length,a.co.d4));To(a);}
function AY1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=a.fF.bs.ef;d=a.i;Bt(b,d.a,d.b,a.k,c);BG(a.co.cT);e=a.co.d4;f=a.en.eQ.data.length;if(!f)return;g=Be(f,H$(a.k.b,e)+7|0);h=a.hU;if(h.data.length<g)a.hU=Zg(g,h,a.co,a.AH,a.rb,a.en);Nz(b,a.i,a.k);i=a.Q.b;j=f-1|0;k=AGf(i,e,j);l=AGf((a.Q.b+a.k.b|0)-1|0,e,j);a.AH=k;a.rb=l;i=a.k.a;m=Dz(a,4.0);n=Dz(a,1.0)+a.j7|0;o=Dz(a,3.0);p=Dz(a,5.0);Dz(a,1.0);q=0;r=a.i.a-a.Q.a|0;s=Dz(a,1.0);d=a.fc;t=s+(d===null?0:FL(d))|0;while(k<=l){a:
{u=a.en.eQ.data[k];h=a.hU.data;s=k%h.length|0;v=h[s];Xt(v,u.hb,b,e,i,0,k,s);w=Bb(e,k);x=w-a.Q.b|0;h=a.qe;if(h!==null){y=h.data;if(k<y.length){z=y[k];break a;}}z=null;}if(z===null)ba=null;else{h=h.data;d=a.fF;ba=HZ(d.dF,d,h[k].fl);}bb=m+Bb(n,u.jO)|0;bc=a.ox!=k?0:1;if(z!==null){bd=w-a.Q.b|0;V(a.eS.cW,a.k.a,e);d=a.i;Bt(b,d.a,d.b+bd|0,a.eS.cW,ba);}else if(bc){bd=w-a.Q.b|0;V(a.eS.cW,a.k.a,e);d=a.i;Bt(b,d.a,d.b+bd|0,a.eS.cW,a.fF.bs.gm);}d=WZ(a,u.ht);be=WZ(a,u.hr);if(d!==null){bf=a.fF;bg=bf.jL.data[0];AEa(a,b,d,r+
bb|0,a.i.b+x|0,z!==null?ba:!bc?c:bf.bs.gm,bg.gX);}if(be!==null){d=a.fF;bf=d.jL.data[0];bh=((r+bb|0)+a.j7|0)+o|0;s=a.i.b+x|0;if(z===null)ba=!bc?c:d.bs.gm;AEa(a,b,be,bh,s,ba,bf.gX);}s=FB(u.hb);w=(((bb+a.j7|0)+o|0)+a.rO|0)+p|0;q=Bd(q,(w+s|0)+t|0);Qf(v,a.i.b+x|0,r+w|0,b,i,e,0,a.fF,null,null,null,bc,z===null?0:1,z);k=k+1|0;}d=a.cF;if(d.a!=q){d.a=q;To(a);}F9(b);}
function AEa(a,b,c,d,e,f,g){Cw(a.co.js,0.0,0.0,BZ(c),Do(c));Ct(a.co.il,c.fz);G9(a.co,b,c,d,e,g,f);}
function A1K(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.co.d4;f=((b.j.b-a.i.b|0)+a.Q.b|0)/e|0;if(f>=0){g=a.en.eQ.data;if(f<g.length){h=g[f];if(!Wr(a,b,f)){b=h.oz;if(b!==null)b.g();}}}}return 1;}
function ANe(a,b,c){var d,e,f,g;d=a.co.d4;e=((b.j.b-a.i.b|0)+a.Q.b|0)/d|0;if(!c&&e>=0){f=a.en.eQ.data;if(e<f.length){g=f[e];if(Wr(a,b,e)){b=g.je;if(b!==null)b.g();}else{a.ox=e;b=g.eq;if(b!==null)b.g();}}}return A7o;}
function Wr(a,b,c){var d,e,f,g,h,i,j;d=a.en.eQ.data[c];e=Dz(a,4.0);f=Dz(a,1.0);g=Bd(BZ(a.ga),BZ(a.f_));h=e+Bb(f+g|0,d.jO)|0;i=(a.i.a-a.Q.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function Fi(a,b){var c,d,e,f,g;c=a.eS.b4;d=ZV(b);e=a.vb;f=a.co;b=f.d4;g=f.iQ;Cm(c.cd,e);f=D5(c,La(c.cd,d)+2|0,b,g);Cm(f,e);BW(f,d,1.0,LI(e,b));c=CW(c);CM(c,f);EA(f);return c;}
function AGf(b,c,d){return Be(b/c|0,d);}
function AJi(){Ln.call(this);this.rr=null;}
function TM(a){var b=new AJi();ATo(b,a);return b;}
function ATo(a,b){LN(a);a.en=AMp(Q(Hj,0));a.hU=Q(Fo,0);a.ox=(-1);a.eS=b;a.co=APS(b.cw);}
function EI(a){a.en=AMp(AKR(a.rr));if(a.bN!==0.0)Pj(a);}
function ES(a,b){a.rr=b;EI(a);}
function JE(a,b){var c;c=a.fF.bs;Jd(b,c.lF,c.lL);return b;}
function Tl(){B.call(this);this.s4=null;}
function ATA(a){EI(a.s4);}
var AE5=G();
function PC(b,c,d){return AGx(b,0,c,d,UN());}
function AGx(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BL(c,d);h=g>=0?0:1+QT(f,2.0)|0;i=g>0?0:1+QT(f,3.0)|0;j=Q(Dg,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(443)),g);k[g]=AGx(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dg;n=new K;M(n);U(H(n,C(444)),g);J2(m,L(n),l);n=new Rb;n.tz=m;m.oz=n;switch((l+g|0)%3|0){case 0:break;case 1:QN(m);break a;case 2:m.hr=60136;break a;default:break a;}Lx(m);}if(UP(f)<0.25){n=JS(m.hb,0);n.bF=n.bF|2;}k[h+g|0]=m;g=g+1|0;}n=new Dg;SS(n,b,c);n.e$=A84;n.e$=j;b=new WA;b.wd
=n;b.wf=e;n.je=b;n.eq=b;if((c+c|0)>d)IC(n);else NT(n);return n;}
function Yj(){B.call(this);this.qD=null;}
function AOg(a){Ie(a.qD,1);}
function Yk(){B.call(this);this.BN=null;}
function AMG(a){Ie(a.BN,0);}
function AA3(){B.call(this);this.rg=null;}
function ALk(a){EI(a.rg);}
function AA4(){B.call(this);this.ti=null;}
function AOK(a){EI(a.ti);}
function AG4(){var a=this;B.call(a);a.jq=null;a.nH=0;a.f4=0;}
function AIr(){var a=new AG4();AUh(a);return a;}
function AUh(a){a.nH=0;a.jq=BO(16);a.f4=0;}
function FX(a,b,c){Bh(a,b);Bh(a,c);}
function Bh(a,b){var c,d;c=a.jq;d=c.data.length;if(d==a.f4)a.jq=Jf(c,d*2|0);c=a.jq.data;d=a.f4;a.f4=d+1|0;c[d]=b;}
function K1(a){var b,c,d,e,f;b=a.nH;if(b&&a.f4!=b){c=Ep();b=a.nH;d=a.f4;e=new K;M(e);H(U(H(U(H(e,C(445)),b),C(446)),d),C(447));Bk(c,L(e));}f=a.jq;b=f.data.length;d=a.f4;if(b!=d)f=Jf(f,d);return f;}
function SF(){var a=this;Ef.call(a);a.gC=0;a.d1=null;a.l6=0;a.xH=0.0;a.pC=0;}
function AKH(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Uo(a){a.pC=a.d1.data.length*a.xH|0;}
function ACF(a,b){return VB(a,b)===null?0:1;}
function Oo(a,b){var c;c=VB(a,b);if(c===null)return null;return c.cO;}
function VB(a,b){var c,d;if(b===null)c=Y8(a);else{d=ME(b);c=W5(a,b,d&(a.d1.data.length-1|0),d);}return c;}
function W5(a,b,c,d){var e;e=a.d1.data[c];while(e!==null&&!(e.nD==d&&(b!==e.cS?0:1))){e=e.is;}return e;}
function Y8(a){var b;b=a.d1.data[0];while(b!==null&&b.cS!==null){b=b.is;}return b;}
function ACJ(a,b,c,d){var e,f;e=new JA;VX(e,b,null);e.nD=d;f=a.d1.data;e.is=f[c];f[c]=e;return e;}
function WU(a){var b,c,d,e,f,g,h,i;b=a.d1.data.length;b=AKH(!b?1:b<<1);c=Q(JA,b);d=c.data;e=0;f=b-1|0;while(true){g=a.d1.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nD&f;i=h.is;h.is=d[b];d[b]=h;h=i;}e=e+1|0;}a.d1=c;Uo(a);}
function UC(){var a=this;B.call(a);a.dA=null;a.ms=null;a.s0=null;}
function Pc(a,b){var c;if(!(b instanceof Mk)){Bh(a.dA,3);ADo(a,b);Bh(a.dA,b.jv);}else{c=b;Bh(a.dA,5);ADo(a,c);Bh(a.dA,c.jv);Bh(a.dA,c.wy);b=c.kY;Bh(a.dA,b.m);c=new WC;c.re=a;CL(b,c);}}
function ADo(a,b){var c;c=b.eD.jE;FX(a.dA,a.ms.L,J(c));Bh(a.dA,b.eD.dG);OL(a,b.l$);BU(a.ms,c);}
function OL(a,b){if(b===null)Bh(a.dA,(-1));else Bh(a.dA,(Co(a.s0,b)).bq);}
function Ul(){var a=this;B.call(a);a.cX=null;a.nh=null;a.sc=null;}
function G_(a,b){var c,d,e;if(b instanceof HE){c=b;Bh(a.cX,9);YH(a,c.ho);}else if(b instanceof J_){d=b;Bh(a.cX,3);Y$(a,d);Bh(a.cX,d.qF);YH(a,d.id);}else if(b instanceof Ji){e=b;Bh(a.cX,4);G_(a,e.jP);G_(a,e.ja);}else if(b===null)Bh(a.cX,(-1));else{Bh(a.cX,5);Y$(a,b);Bh(a.cX,b.zA);}}
function Y$(a,b){var c;c=b.fR.jE;FX(a.cX,a.nh.L,J(c));Bh(a.cX,b.fR.dG);b=b.gB;if(b===null)Bh(a.cX,(-1));else Bh(a.cX,(Co(a.sc,b)).bq);BU(a.nh,c);}
function YH(a,b){var c;Bh(a.cX,b.m);c=new V1;c.xc=a;CL(b,c);}
function Yp(){var a=this;B.call(a);a.z$=0;a.z_=0;}
function SP(){B.call(this);this.sw=null;}
function ASH(a,b){var c;c=a.sw;DK(c,b);M4(c,null);Vy(c);}
var YA=G(Et);
var A86=null;function AIC(){A86=F($rt_doublecls());}
var J3=G();
var A87=FE;var A88=null;var A89=null;function AFP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.q6=IF(Df(d,D(0, 2147483648)),FE)?0:1;e=Df(d,D(4294967295, 1048575));f=GK(A4W(d,52))&2047;if(IF(e,FE)&&!f){c.nz=FE;c.mJ=0;return;}if(f)e=A3B(e,D(0, 1048576));else{e=HO(e,1);while(IF(Df(e,D(0, 1048576)),FE)){e=HO(e,1);f=f+(-1)|0;}}g=A89.data;h=f<<16>>16;i=0;j=g.length;k=BL(i,j);if(k>0){c=new BS;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BL(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IQ(e,A88.data[h],i);if(ANG(m,A87)){while(DI(m,A87)<=0){j=j+(-1)|0;m=CQ(Ch(m,Bq(10)),Bq(9));}g=A89.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IQ(e,A88.data[h],i);}e=HO(e,1);d=CQ(e,Bq(1));g=A88.data;h=j+1|0;n=g[h];f=i-1|0;n=IQ(d,n,f);o=IQ(JL(e,Bq(1)),A88.data[h],f);p=Bq(1);while(true){q=Ch(p,Bq(10));if(DI(De(m,q),De(o,q))<=0)break;p=q;}r=Bq(1);while
(true){s=Ch(r,Bq(10));if(DI(De(m,s),De(n,s))>=0)break;r=s;}h=DI(p,r);e=h>0?Ch(De(m,p),p):h<0?CQ(Ch(De(m,r),r),r):Ch(De(CQ(m,AGK(r,Bq(2))),r),r);if(DI(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=De(e,Bq(10));if(DI(e,D(2808348672, 232830643))<0)break;}else if(DI(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ch(e,Bq(10));}c.nz=e;c.mJ=j-330|0;}
function IQ(b,c,d){var e,f,g,h,i,j,k,l;e=Df(b,Bq(65535));f=Df(F$(b,16),Bq(65535));g=Df(F$(b,32),Bq(65535));h=Df(F$(b,48),Bq(65535));i=Df(c,Bq(65535));j=Df(F$(c,16),Bq(65535));k=Df(F$(c,32),Bq(65535));l=Df(F$(c,48),Bq(65535));return CQ(CQ(CQ(HO(Ch(l,h),32+d|0),HO(CQ(Ch(l,g),Ch(k,h)),16+d|0)),HO(CQ(CQ(Ch(l,f),Ch(k,g)),Ch(j,h)),d)),F$(CQ(CQ(CQ(Ch(k,e),Ch(j,f)),Ch(i,g)),HO(CQ(CQ(CQ(Ch(l,e),Ch(k,f)),Ch(j,g)),Ch(i,h)),16)),32-d|0));}
function AFB(){A87=De(Bq(-1),Bq(10));A88=AIx([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
D(3141732885, 4047385770),D(2513386308, 3237908616),D(1151715587, 2590326893),D(983751480, 4144523029),D(1645994643, 3315618423),D(3034782633, 2652494738),D(3996658754, 4243991581),D(2338333544, 3395193265),D(1870666835, 2716154612),D(4073513845, 2172923689),D(3940641775, 3476677903),D(575533043, 2781342323),D(2178413352, 2225073858),D(2626467905, 3560118173),D(3819161242, 2848094538),D(478348616, 2278475631),D(3342338164, 3645561009),D(3532863990, 2916448807),D(1108304273, 2333159046),D(55299919, 3733054474),
D(903233395, 2986443579),D(1581580175, 2389154863),D(1671534821, 3822647781),D(478234397, 3058118225),D(382587518, 2446494580),D(612140029, 3914391328),D(2207698941, 3131513062),D(48172235, 2505210450),D(77075576, 4008336720),D(61660460, 3206669376),D(3485302205, 2565335500),D(1281516232, 4104536801),D(166219527, 3283629441),D(3568949458, 2626903552),D(2274345296, 4203045684),D(2678469696, 3362436547),D(424788838, 2689949238),D(2057817989, 2151959390),D(3292508783, 3443135024),D(3493000485, 2754508019),D(3653393847, 2203606415),
D(1550462860, 3525770265),D(1240370288, 2820616212),D(3569276608, 2256492969),D(3133862195, 3610388751),D(1648096297, 2888311001),D(459483578, 2310648801),D(3312154103, 3697038081),D(1790729823, 2957630465),D(1432583858, 2366104372),D(3151127633, 3785766995),D(2520902106, 3028613596),D(1157728226, 2422890877),D(2711358621, 3876625403),D(3887073815, 3101300322),D(1391672133, 2481040258),D(1367681954, 3969664413),D(2812132482, 3175731530),D(2249705985, 2540585224),D(1022549199, 4064936359),D(1677032818, 3251949087),
D(3918606632, 2601559269),D(3692790234, 4162494831),D(2095238728, 3329995865),D(1676190982, 2663996692),D(3540899031, 4262394707),D(1114732307, 3409915766),D(32792386, 2727932613),D(1744220827, 2182346090),D(2790753324, 3491753744),D(3091596118, 2793402995),D(2473276894, 2234722396),D(2239256113, 3575555834),D(2650398349, 2860444667),D(402331761, 2288355734),D(2361717736, 3661369174),D(2748367648, 2929095339),D(3057687578, 2343276271),D(3174313206, 3749242034),D(3398444024, 2999393627),D(1000768301, 2399514902),
D(2460222741, 3839223843),D(3686165111, 3071379074),D(3807925548, 2457103259),D(3515700499, 3931365215),D(2812560399, 3145092172),D(532061401, 2516073738),D(4287272078, 4025717980),D(3429817663, 3220574384),D(3602847589, 2576459507),D(2328582306, 4122335212),D(144878926, 3297868170),D(115903141, 2638294536),D(2762425404, 4221271257),D(491953404, 3377017006),D(3829536560, 2701613604),D(3922622707, 2161290883),D(1122235577, 3458065414),D(1756781920, 2766452331),D(546432077, 2213161865),D(874291324, 3541058984),
D(1558426518, 2832847187),D(3823721592, 2266277749),D(3540974170, 3626044399),D(3691772795, 2900835519),D(3812411695, 2320668415),D(1804891416, 3713069465),D(1443913133, 2970455572),D(3732110884, 2376364457),D(2535403578, 3802183132),D(310335944, 3041746506),D(3684242592, 2433397204),D(3317807769, 3893435527),D(936259297, 3114748422),D(3325987815, 2491798737),D(1885606668, 3986877980),D(1508485334, 3189502384),D(2065781726, 2551601907),D(4164244222, 4082563051),D(2472401918, 3266050441),D(1118928075, 2612840353),
D(931291461, 4180544565),D(745033169, 3344435652),D(3173006913, 2675548521),D(3358824142, 4280877634),D(3546052773, 3424702107),D(1118855300, 2739761686),D(36090780, 2191809349),D(1775732167, 3506894958),D(3138572652, 2805515966),D(1651864662, 2244412773),D(1783990001, 3591060437),D(4004172378, 2872848349),D(4062331362, 2298278679),D(3922749802, 3677245887),D(1420212923, 2941796710),D(1136170338, 2353437368),D(958879082, 3765499789),D(1626096725, 3012399831),D(441883920, 2409919865),D(707014273, 3855871784),
D(1424604878, 3084697427),D(3716664280, 2467757941),D(4228675929, 3948412706),D(2523947284, 3158730165),D(2019157827, 2526984132),D(4089645983, 4043174611),D(2412723327, 3234539689),D(2789172121, 2587631751),D(2744688475, 4140210802),D(477763862, 3312168642),D(2959191467, 2649734913),D(3875712888, 4239575861),D(2241576851, 3391660689),D(2652254940, 2713328551),D(1262810493, 2170662841),D(302509870, 3473060546),D(3677981733, 2778448436),D(2083391927, 2222758749),D(756446706, 3556413999),D(1464150824, 2845131199),
D(2030314118, 2276104959),D(671522212, 3641767935),D(537217769, 2913414348),D(2147761134, 2330731478),D(2577424355, 3729170365),D(2061939484, 2983336292),D(4226531965, 2386669033),D(1608490388, 3818670454),D(2145785770, 3054936363),D(3434615534, 2443949090),D(1200417559, 3910318545),D(960334047, 3128254836),D(4204241074, 2502603868),D(1572824964, 4004166190),D(1258259971, 3203332952),D(3583588354, 2562666361),D(4015754449, 4100266178),D(635623181, 3280212943),D(2226485463, 2624170354),D(985396364, 4198672567),
D(3365297469, 3358938053),D(115257597, 2687150443),D(1810192996, 2149720354),D(319328417, 3439552567),D(2832443111, 2751642053),D(3983941407, 2201313642),D(2938332415, 3522101828),D(4068652850, 2817681462),D(1536935362, 2254145170),D(2459096579, 3606632272),D(249290345, 2885305818),D(1917419194, 2308244654),D(490890333, 3693191447),D(2969692644, 2954553157),D(657767197, 2363642526),D(3629407892, 3781828041),D(2044532855, 3025462433),D(3353613202, 2420369946),D(3647794205, 3872591914),D(3777228823, 3098073531),
D(2162789599, 2478458825),D(3460463359, 3965534120),D(2768370687, 3172427296),D(1355703090, 2537941837),D(3028118404, 4060706939),D(3281488183, 3248565551),D(1766197087, 2598852441),D(1107928421, 4158163906),D(27349277, 3326531125),D(21879422, 2661224900),D(35007075, 4257959840),D(28005660, 3406367872),D(2599384905, 2725094297),D(361521006, 2180075438),D(4014407446, 3488120700),D(3211525957, 2790496560),D(2569220766, 2232397248),D(3251759766, 3571835597),D(883420894, 2857468478),D(2424723634, 2285974782),D(443583977, 3657559652),
D(2931847559, 2926047721),D(1486484588, 2340838177),D(3237368801, 3745341083),D(12914663, 2996272867),D(2587312108, 2397018293),D(3280705914, 3835229269),D(3483558190, 3068183415),D(2786846552, 2454546732),D(1022980646, 3927274772),D(3395364895, 3141819817),D(998304997, 2513455854),D(3315274914, 4021529366),D(1793226472, 3217223493),D(3152568096, 2573778794),D(2467128576, 4118046071),D(1114709402, 3294436857),D(3468747899, 2635549485),D(1255029343, 4216879177),D(3581003852, 3373503341),D(2005809622, 2698802673),
D(3322634616, 2159042138),D(162254630, 3454467422),D(2706784082, 2763573937),D(447440347, 2210859150),D(715904555, 3537374640),D(572723644, 2829899712),D(3035159293, 2263919769),D(2279274491, 3622271631),D(964426134, 2897817305),D(771540907, 2318253844),D(2952452370, 3709206150),D(2361961896, 2967364920),D(1889569516, 2373891936),D(1305324308, 3798227098),D(2762246365, 3038581678),D(3927784010, 2430865342),D(2848480580, 3889384548),D(3996771382, 3111507638),D(620436728, 2489206111),D(3569679143, 3982729777),
D(1137756396, 3186183822),D(3487185494, 2548947057),D(2143522954, 4078315292),D(4291798741, 3262652233),D(856458615, 2610121787),D(2229327243, 4176194859),D(2642455254, 3340955887),D(395977285, 2672764710),D(633563656, 4276423536),D(3942824761, 3421138828),D(577279431, 2736911063),D(2179810463, 2189528850),D(3487696741, 3503246160),D(2790157393, 2802596928),D(3950112833, 2242077542),D(2884206696, 3587324068),D(4025352275, 2869859254),D(4079275279, 2295887403),D(1372879692, 3673419846),D(239310294, 2938735877),
D(2768428613, 2350988701),D(2711498862, 3761581922),D(451212171, 3009265538),D(2078956655, 2407412430),D(3326330649, 3851859888),D(84084141, 3081487911),D(3503241150, 2465190328),D(451225085, 3944304526),D(3796953905, 3155443620),D(3037563124, 2524354896),D(3142114080, 4038967834),D(3372684723, 3231174267),D(980160860, 2584939414),D(3286244294, 4135903062),D(911008517, 3308722450),D(728806813, 2646977960),D(1166090902, 4235164736),D(73879262, 3388131789),D(918096869, 2710505431),D(4170451332, 2168404344),D(4095741754, 3469446951),
D(2417599944, 2775557561),D(1075086496, 2220446049),D(3438125312, 3552713678),D(173519872, 2842170943),D(1856802816, 2273736754),D(393904128, 3637978807),D(2892103680, 2910383045),D(2313682944, 2328306436),D(1983905792, 3725290298),D(3305111552, 2980232238),D(67108864, 2384185791),D(2684354560, 3814697265),D(2147483648, 3051757812),D(0, 2441406250),D(0, 3906250000),D(0, 3125000000),D(0, 2500000000),D(0, 4000000000),D(0, 3200000000),D(0, 2560000000),D(0, 4096000000),D(0, 3276800000),D(0, 2621440000),D(0, 4194304000),
D(0, 3355443200),D(0, 2684354560),D(0, 2147483648),D(3435973836, 3435973836),D(1889785610, 2748779069),D(2370821947, 2199023255),D(3793315115, 3518437208),D(457671715, 2814749767),D(2943117749, 2251799813),D(3849994940, 3602879701),D(2221002492, 2882303761),D(917808535, 2305843009),D(3186480574, 3689348814),D(3408177918, 2951479051),D(1867548875, 2361183241),D(1270091283, 3777893186),D(157079567, 3022314549),D(984657113, 2417851639),D(3293438299, 3868562622),D(916763721, 3094850098),D(2451397895, 2475880078),
D(3063243173, 3961408125),D(2450594538, 3169126500),D(1960475630, 2535301200),D(3136761009, 4056481920),D(2509408807, 3245185536),D(1148533586, 2596148429),D(3555640657, 4153837486),D(1985519066, 3323069989),D(2447408712, 2658455991),D(2197867021, 4253529586),D(899300158, 3402823669),D(1578433585, 2722258935),D(1262746868, 2177807148),D(1161401530, 3484491437),D(3506101601, 2787593149),D(3663874740, 2230074519),D(3285219207, 3568119231),D(1769181906, 2854495385),D(1415345525, 2283596308),D(1405559381, 3653754093),
D(2842434423, 2923003274),D(3132940998, 2338402619),D(2435725219, 3741444191),D(1089586716, 2993155353),D(2589656291, 2394524282),D(707476229, 3831238852),D(3142961361, 3064991081),D(1655375629, 2451992865),D(2648601007, 3923188584),D(2977874265, 3138550867),D(664312493, 2510840694),D(2780886908, 4017345110),D(2224709526, 3213876088),D(3497754539, 2571100870),D(1301439967, 4113761393),D(2759138892, 3291009114),D(3066304573, 2632807291),D(3188100398, 4212491666),D(1691486859, 3369993333),D(3071176406, 2695994666),
D(1597947665, 2156795733),D(1697722806, 3450873173),D(3076165163, 2760698538),D(4178919049, 2208558830),D(2391303182, 3533694129),D(2772036005, 2826955303),D(3935615722, 2261564242),D(2861011319, 3618502788),D(4006795973, 2894802230),D(3205436779, 2315841784),D(2551718468, 3705346855),D(2041374775, 2964277484),D(2492093279, 2371421987),D(551375410, 3794275180),D(441100328, 3035420144),D(1211873721, 2428336115),D(1938997954, 3885337784),D(2410191822, 3108270227),D(210166539, 2486616182),D(1195259923, 3978585891),
D(97214479, 3182868713),D(1795758501, 2546294970),D(2873213602, 4074071952),D(580583963, 3259257562),D(3041447548, 2607406049),D(2289335700, 4171849679),D(2690462019, 3337479743),D(3870356534, 2669983794),D(3615590076, 4271974071),D(2033478602, 3417579257),D(4203763259, 2734063405),D(3363010607, 2187250724),D(2803836594, 3499601159),D(3102062734, 2799680927),D(763663269, 2239744742),D(2080854690, 3583591587),D(4241664129, 2866873269),D(4252324763, 2293498615),D(2508752324, 3669597785),D(2007001859, 2935678228),
D(3323588406, 2348542582),D(1881767613, 3757668132),D(4082394468, 3006134505),D(3265915574, 2404907604),D(2648484541, 3847852167),D(400800715, 3078281734),D(1179634031, 2462625387),D(2746407909, 3940200619),D(3056119786, 3152160495),D(2444895829, 2521728396),D(2193846408, 4034765434),D(2614070585, 3227812347),D(373269550, 2582249878),D(4033205117, 4131599804),D(4085557553, 3305279843),D(691465664, 2644223875),D(1106345063, 4230758200),D(885076050, 3384606560),D(708060840, 2707685248),D(2284435591, 2166148198),
D(2796103486, 3465837117),D(518895870, 2772669694),D(1274110155, 2218135755),D(2038576249, 3549017208),D(3348847917, 2839213766),D(1820084875, 2271371013),D(2053142340, 3634193621),D(783520413, 2907354897),D(3203796708, 2325883917),D(1690100896, 3721414268),D(3070067635, 2977131414),D(3315047567, 2381705131),D(3586089190, 3810728210),D(2868871352, 3048582568),D(4013084000, 2438866054),D(3843954022, 3902185687),D(1357176299, 3121748550),D(1085741039, 2497398840),D(1737185663, 3995838144),D(2248741989, 3196670515),
D(1798993591, 2557336412),D(3737383206, 4091738259),D(3848900024, 3273390607),D(1361133101, 2618712486),D(459826043, 4189939978),D(2085847752, 3351951982),D(4245658579, 2681561585),D(2498086431, 4290498537),D(280482227, 3432398830),D(224385781, 2745919064),D(1038502084, 2196735251),D(4238583712, 3514776401),D(2531873511, 2811821121),D(1166505349, 2249456897),D(2725402018, 3599131035),D(2180321615, 2879304828),D(3462244210, 2303443862),D(2103616899, 3685510180),D(1682893519, 2948408144),D(2205308275, 2358726515),
D(3528493240, 3773962424),D(3681788051, 3019169939),D(3804423900, 2415335951),D(74124026, 3864537523),D(1777286139, 3091630018),D(3139815829, 2473304014),D(2446724950, 3957286423),D(3675366878, 3165829138),D(363313125, 2532663311),D(3158281377, 4052261297),D(808638183, 3241809038),D(2364897465, 2593447230),D(3783835944, 4149515568),D(450088378, 3319612455),D(360070702, 2655689964),D(2294100042, 4249103942),D(117293115, 3399283154),D(952827951, 2719426523),D(2480249279, 2175541218),D(3109405388, 3480865949),
D(3346517769, 2784692759),D(3536207675, 2227754207),D(2221958443, 3564406732),D(59579836, 2851525386),D(3483637705, 2281220308),D(419859574, 3649952494),D(1194881118, 2919961995),D(955904894, 2335969596),D(4106428209, 3737551353),D(708162189, 2990041083),D(2284516670, 2392032866),D(1937239754, 3827252586),D(690798344, 3061802069),D(1411632134, 2449441655),D(2258611415, 3919106648),D(3524876050, 3135285318),D(242920462, 2508228255),D(388672740, 4013165208),D(2028925110, 3210532166),D(764146629, 2568425733),D(363641147, 4109481173),
D(2008899836, 3287584938),D(3325106787, 2630067950),D(1025203564, 4208108721),D(4256136688, 3366486976),D(2545915891, 2693189581),D(1177739254, 2154551665),D(1884382806, 3447282664),D(2366499704, 2757826131),D(1034206304, 2206260905),D(1654730086, 3530017448),D(3041770987, 2824013958),D(4151403708, 2259211166),D(629291719, 3614737867),D(3080413753, 2891790293),D(4182317920, 2313432234),D(4114728295, 3701491575),D(3291782636, 2961193260),D(2633426109, 2368954608),D(3354488315, 3790327373),D(106610275, 3032261899),
D(944281679, 2425809519),D(3228837605, 3881295230),D(2583070084, 3105036184),D(2925449526, 2484028947),D(1244745405, 3974446316),D(136802865, 3179557053),D(1827429210, 2543645642),D(3782880196, 4069833027),D(1308317238, 3255866422),D(3623634168, 2604693137),D(2361840832, 4167509020),D(1889472666, 3334007216),D(652584673, 2667205773),D(185142018, 4267529237),D(2725093992, 3414023389),D(3039068653, 2731218711),D(1572261463, 2184974969),D(4233605259, 3495959950),D(3386884207, 2796767960),D(2709507366, 2237414368),
D(3476218326, 3579862989),D(3639968120, 2863890391),D(2052981037, 2291112313),D(2425776200, 3665779701),D(1081627501, 2932623761),D(6308541, 2346099009),D(1728080585, 3753758414),D(2241457927, 3003006731),D(934172882, 2402405385),D(1494676612, 3843848616),D(336747830, 3075078893),D(1987385183, 2460063114),D(602835915, 3936100983),D(2200255650, 3148880786),D(901211061, 2519104629),D(3159924616, 4030567406),D(1668946233, 3224453925),D(1335156987, 2579563140),D(2136251179, 4127301024),D(2567994402, 3301840819),
D(2913388981, 2641472655),D(366455074, 4226356249),D(1152157518, 3381084999),D(1780719474, 2704867999),D(2283569038, 2163894399),D(1076730083, 3462231039),D(1720377526, 2769784831),D(517308561, 2215827865),D(827693699, 3545324584),D(1521148418, 2836259667),D(3793899112, 2269007733),D(916277824, 3630412374),D(1592015718, 2904329899),D(2132606034, 2323463919),D(835189277, 3717542271),D(4104125258, 2974033816),D(2424306747, 2379227053),D(3019897337, 3806763285),D(2415917869, 3045410628),D(3650721214, 2436328502),
D(2405180105, 3898125604),D(2783137543, 3118500483),D(3944496953, 2494800386),D(298240911, 3991680619),D(1097586188, 3193344495),D(878068950, 2554675596),D(3981890698, 4087480953),D(608532181, 3269984763),D(2204812663, 2615987810),D(3527700261, 4185580496),D(1963166749, 3348464397),D(4147513777, 2678771517),D(3200048207, 4286034428),D(4278025484, 3428827542),D(1704433468, 2743062034),D(2222540234, 2194449627),D(120090538, 3511119404),D(955065889, 2808895523),D(2482039630, 2247116418),D(3112269949, 3595386269),
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A89=A4o([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function TW(){B.call(this);this.rE=null;}
function ALY(a){Ha(a.rE,37,3);}
function TX(){B.call(this);this.sh=null;}
function AN0(a){Ha(a.sh,40,3);}
function TY(){B.call(this);this.ty=null;}
function A2b(a){Ha(a.ty,42,3);}
function TZ(){B.call(this);this.xn=null;}
function AQe(a){Ha(a.xn,45,3);}
function T0(){B.call(this);this.xQ=null;}
function ASm(a){Ha(a.xQ,45,5);}
function OS(){B.call(this);this.z5=null;}
function A3b(a,b){var c,d;c=a.z5;d=new Bw;Bn(d,$rt_str(b.message));c.f(d);}
var VC=G(0);
var A6G=null;function A3_(){A3_=Bo(VC);AZ$();}
function AZ$(){A6G=new $rt_globals.TextDecoder("utf-16");}
function Py(){CE.call(this);this.AS=null;}
function ALN(a,b){var c;c=a.i;Bt(b,c.a,c.b,a.k,a.AS);}
function AF4(){var a=this;B.call(a);a.nA=null;a.fZ=null;}
function ALU(a,b){var c=new AF4();AM4(c,a,b);return c;}
function AM4(a,b,c){a.nA=b;a.fZ=c;}
function AS0(a){return a.fZ.Q.b/MC(a)|0;}
function A1V(a){var b;b=a.fZ;return H$((b.Q.b+b.k.b|0)-1|0,MC(a));}
function ATX(a,b){var c;b=Bb(b,MC(a));c=a.fZ;return (b+c.i.b|0)-c.Q.b|0;}
function APN(a){return a.fZ.i;}
function AVu(a){return a.fZ.k;}
function AQm(a,b,c){var d;d=a.nA;d.ua=b;d.rf=c;}
function AZf(a,b){return ACR(a.nA,b);}
function MC(a){return a.fZ.co.d4;}
function ABP(){var a=this;B.call(a);a.tn=0;a.B2=0;}
function FS(a,b){var c;c=a.B2;if(c<=0)return 0;return YN(a.tn,b,c);}
var TD=G(0);
var A7j=null;function AO4(){AO4=Bo(TD);AT2();}
function AT2(){A7j=S(C(259));}
var AD$=G();
function ASt(a,b,c){b=b;c=c;return Oq(E4(b),E4(c));}
function AKY(){GV.call(this);this.eQ=null;}
function AMp(a){var b=new AKY();ANO(b,a);return b;}
function ANO(a,b){a.eQ=b;}
function A2Z(a,b){return a.eQ.data[b].hb;}
function Rb(){B.call(this);this.tz=null;}
function AZd(a){var b,c,d;b=a.tz;c=Bu();d=E4(b);b=new K;M(b);H(H(b,C(448)),d);Bk(c,L(b));}
function WA(){var a=this;B.call(a);a.wd=null;a.wf=null;}
function AY_(a){var b,c;b=a.wd;c=a.wf;if(!I7(b))NT(b);else IC(b);c.g();}
function QW(){B.call(this);this.qE=null;}
function A0E(a,b){J6(a.qE,b);}
function QV(){B.call(this);this.BO=null;}
function AWM(a){return a.BO.sb;}
function R2(){B.call(this);this.tS=null;}
function AXR(a){Mp(a.tS);}
var Eh=G(Bw);
function W$(){var a=this;B.call(a);a.qv=null;a.yu=null;a.uV=0;a.vR=0;}
function N_(a,b){return Cg(a.yu)<b?0:1;}
var AG_=G();
function AEz(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEr(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ew()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Tp;d.addEventListener("change",Bx(e,"handleEvent"));d.click();}
function SV(){var a=this;B.call(a);a.bv=null;a.rv=null;a.jc=null;a.op=null;a.mk=null;a.gk=null;}
function HS(a){return a.bv.cG.hA;}
function V6(a){var b;b=new SD;b.Bo=a;return b;}
function AI$(a){var b,c,d,e,f;b=Q(B5,5);c=b.data;d=a.bv;BG(d);e=new VM;e.zB=d;c[0]=C7(C(449),e);e=a.bv;BG(e);f=new VH;f.xe=e;c[1]=C7(C(450),f);d=a.bv;BG(d);e=new VI;e.xT=d;c[2]=C7(C(451),e);d=a.bv;BG(d);e=new VJ;e.vG=d;c[3]=C7(C(452),e);d=a.bv;BG(d);e=new VK;e.qA=d;c[4]=C7(C(453),e);return DB(b);}
function Qp(a,b){var c;c=new PF;c.v2=a;c.v3=b;return c;}
function KC(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Eo(a.gk.b6);d=a.bv.d;e=Eb(d);f=Hz(d);g=a.bv.fx;if(c===null)h=null;else{A5c();switch(A8$.data[c.fP]){case 1:h=Os(g,e,f);break a;case 2:h=Zd(g,e,f);break a;default:}b=new E3;X(b);N(b);}}c=a.bv;e=Ft(c,b);g=I8(c.d.h,e.br,e.bw);f=SK(c,g);if(h!==null){g=c.d;i=e.br;j=e.bw;e=new AA5;e.Fh=c;e.Fg=b;e.Ff=f;h.tG(g,i,j,e,c.j3);}else{e=Co(c.d.h.dP,g);if(e!==null)IT(c,e);else{e=Co(c.d.h.dE,g);if(e!==null&&!CJ(e))Zq(c.kL,b,e,c,f);else{c=c.kL;k=Q(B5,1);l=k.data;e=new B5;f=c.b6;BG(f);g
=new ACk;g.w9=f;C_(e,g,C(454));l[0]=e;Ld(c,b,DB(k));}}}}
var AEO=G(0);
function ACT(){var a=this;B.call(a);a.wK=null;a.wJ=null;}
function AT9(a){FI(a.wK,a.wJ);}
var Yr=G();
var A8_=null;function N7(b,c,d){Rn(b,c,d,0);}
function Rn(b,c,d,e){Xp(b,c,d,null,null,e);}
function Xp(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=L_(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CI(b);c=b.B;if(c.data.length<i)b.B=AE7(c,i);m=0;while(m<i){if(g&&m<l){n=4*Ba(h)|0;h.ff=h.ff+n|0;}else b.B.data[m]=D7(Y2(h,d,0));m=m+1|0;}Na(b);if(j)b.dg=AGP(AHD(h));Fu(b.dP);Fu(b.dE);o=b.dP;g=0;while(g<k){Er(o,DT(Ba(h),Ba(h)),DT(Ba(h),Ba(h)));g=g+1|0;}p=b.dP;o=b.dE;q=Xs(AB6(p));while(Gf(q)){r=ADO(q);s=r.cS;p=r.cO;BG(A8_);r=Co(o,p);if(r===null){r=BD();Er(o,p,r);}Br(r,s);}if(o.o8===null){p=new Qu;p.v1=o;o.o8=p;}p=o.o8;r=new Zy;NK(r,
p.v1);while(Gf(r)){NY(r);o=r.g7.cO;p=A6a;c=Q(B,o.m);d=c.data;Gj(o,c);KZ(c,p);g=0;t=d.length;while(g<t){p=d[g];Ks(o,g);o.cn.data[g]=p;g=g+1|0;}}Rh(h);if(e!==null&&f!==null){p=AQJ(e,f);PR(p);b.e3=AWn(p.pl,p.iV);b.dg=AGP(p.pK);}}
function Wi(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=L_(c);i=Ba(h);j=Ba(h);k=Ba(h)!=1?0:1;l=Ba(h);m=Ba(h);n=ADl(b,i);o=ADl(b,j);p=(IN(Cc(b,n.a),n.b)).data[0].s;q=(IN(Cc(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Y2(h,d,i);if(!r)g=L1(p,g);if(r==s)g=L1(g,q);t=n.a+r|0;u=D7(g);c=b.B.data;v=c[t];c[t]=u;if(!k&&Jo(v)==Jo(u)){t=0;while(t<Jo(v)){o=v.s.data[t];w=u.s.data[t];x=o.bX;y=x!=5?0:1;if(!y&&x&&!w.bX){w.bX=x;w.bF=o.bF;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AHD(h);w=KP(i,j,(-1));Xc(b.dg,w,u);}else if(e!==null&&f!==null){v=AQJ(e,f);PR(v);w=KP(i,j,(-1));Xc(b.dg,w,v.pK);n=b.e3;n.fB=b.dg.de.ci;n.fa=v.iV;}}Rh(h);}
function Y2(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=Q(Cv,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=Ed(EC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AKg(){A8_=new Vn;}
var Zh=G(0);
var Pn=G(0);
var D$=G();
function ADm(a,b){var c;c=new RB;c.nn=a;c.rX=b;return c;}
function KO(a,b){var c,d,e,f,g,h,i;c=a.si();if(c>=0){d=b.lG(c);e=new AAT;e.zF=d;while(a.jk(e)){}f=d.data;c=e.m_;if(c<f.length)d=C6(d,c);return d;}g=BD();while(true){BG(g);e=new O9;e.sV=g;if(!a.jk(e))break;}h=b.lG(g.m);i=0;while(true){b=h.data;if(i>=b.length)break;b[i]=Bv(g,i);i=i+1|0;}return h;}
function AYd(a){return (-1);}
function AAb(){D$.call(this);this.Ag=null;}
function N6(a,b){var c,d,e;c=0;while(true){d=a.Ag;if(d.ka===null)d.ka=B1(d.x8);if(!B4(d.ka))e=0;else{c=b.A(B6(d.ka));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Rg=G(0);
function OR(){var a=this;B.call(a);a.CW=null;a.CX=null;a.CU=0;a.CV=0;}
var ADB=G();
function AMg(a,b){b=b;b.cL=BY(b.cL,null);}
var AFT=G(0);
function AI0(b,c,d,e,f,g){f=f.data;f[Jj(0,0)]=H5(g,b,c,d,0);f[Jj(0,1)]=H5(g,b,c,d,2);f[Jj(1,0)]=H5(g,b,c,e,0);f[Jj(1,1)]=H5(g,b,c,e,2);return f[Jj(0,0)];}
function JA(){var a=this;GR.call(a);a.nD=0;a.is=null;}
var Gu=G(Bw);
function ABQ(){var a=this;B.call(a);a.vj=null;a.vg=null;a.vh=null;}
function APV(a,b,c,d){var e,f,g,h;b=a.vj;e=a.vg;f=a.vh;ABb(b,e);if(f!==null)d.mW.g();if(AB5(d)){f=d.fm;g=e.c2;h=e.f5;Vg(b,BH((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.ng,e,d.tE);}}
function AB_(){B.call(this);this.va=null;}
function ASZ(a,b){var c,d,e,f;c=a.va;Eo(c.c9.gj.b6);d=Bu();e=Ck(b);f=new K;M(f);H(H(f,C(455)),e);Bk(d,L(f));d=ASE(b,c);ES(c.c9.gl,d);d.je.g();b=L2(b.hv,Fq(Hk(b),C(456)));FP(c.hd,b);}
var ADK=G();
function A0W(a,b){AEz(b);}
function ADJ(){B.call(this);this.sK=null;}
function AWJ(a,b){var c,d,e;c=a.sK;d=0;e=b.length;while(d<e){c.f(AJ1(b[d],null));d=d+1|0;}}
var ADa=G();
function AXy(a,b){AEz(b);}
function AC_(){var a=this;B.call(a);a.sm=null;a.sn=null;}
function AX4(a,b){var c,d,e;c=a.sm;d=a.sn;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.f(A31(b,d,Q(BK,0),Q(BK,0)));}
function AKc(){var a=this;B.call(a);a.iA=null;a.ff=0;}
function L_(a){var b=new AKc();AUS(b,a);return b;}
function AUS(a,b){a.iA=b;a.ff=0;}
function Ba(a){var b,c;b=a.iA.data;c=a.ff;a.ff=c+1|0;return b[c];}
function Rh(a){var b,c,d,e;if(a.ff!=a.iA.data.length){b=Ep();c=a.iA.data.length;d=a.ff;e=new K;M(e);H(U(H(U(H(e,C(445)),c),C(457)),d),C(458));Bk(b,L(e));}}
function Q3(){var a=this;B.call(a);a.Db=null;a.tV=0;}
function AVI(a,b){var c,d,e,f;c=a.tV;d=(CP(K2(b,0))).data;b=Bu();e=d[0];f=new K;M(f);U(H(U(H(f,C(459)),c),C(460)),e);Bk(b,L(f));b=Bu();e=d[1];f=new K;M(f);U(H(U(H(f,C(459)),c),C(461)),e);Bk(b,L(f));}
function AEu(){B.call(this);this.Pc=null;}
function Pg(){var a=this;B.call(a);a.zh=null;a.zi=0;}
function AP6(a,b){var c,d,e,f,g,h,i;c=a.zh;d=a.zi;e=!d?c.dw.dm:c.dw.dn;Eo(c.bb);f=Bu();g=KQ(b);h=new K;M(h);H(H(h,C(462)),g);Bk(f,L(h));i=new AD6;i.i$=c;i.og=e;i.rU=d;f=ASE(b,i);if(!d)c.wL=f;else c.sJ=f;f.eq.g();ES(e,f);}
var Tp=G();
function AVb(a,b){}
var Vn=G();
var FJ=G();
var A9a=null;var A9b=null;var A7w=null;var A9c=null;var A9d=null;var A9e=null;function AJP(){A9a=new Ue;A9b=new Ub;A7w=new Uc;A9c=new T_;A9d=new Ua;A9e=new V9;}
function AIj(){var a=this;B.call(a);a.pl=null;a.pK=null;a.iV=null;a.cy=null;a.oN=null;a.nc=null;a.jb=null;a.nM=null;a.pF=null;}
function AQJ(a,b){var c=new AIj();A1W(c,a,b);return c;}
function A1W(a,b,c){a.cy=L_(b);a.oN=c;}
function PR(a){var b,c,d,e,f,g,h,i;b=Ba(a.cy);c=new NJ;QJ(c);a.iV=c;a.jb=BD();d=0;while(d<b){e=Ba(a.cy);f=Ba(a.cy);g=EC(a.oN,e,f);Er(a.iV,g,BD());Br(a.jb,g);d=d+1|0;}c=Xs(AB6(a.iV));while(Gf(c)){H1((ADO(c)).cO,Ph(a));}d=Ba(a.cy);if(d==(-1))a.pl=null;else{a.nc=Q(FW,d);c=new Wq;h=a.cy;i=a.oN;g=a.jb;c.dQ=h;c.y5=i;c.yA=g;a.nM=c;c=new RF;c.et=h;c.AR=i;c.A6=g;a.pF=c;a.pl=Ro(a,null);}if(Ba(a.cy)!=(-1))a.pK=Zv(a.cy,a.nc);}
function Ro(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cy);d=Ba(a.cy);e=a.nM;f=Ba(e.dQ);g=BD();h=0;while(h<f){Br(g,OX(e));h=h+1|0;}a:{switch(d){case -1:i=new NI;i.hf=b;b=A7w;i.cH=b;i.fC=b;i.eX=b;i.lm=b;i.hM=b;break a;case 0:i=A4q(b);break a;case 1:i=new Lb;AF_(i,b);H1(i.eX,g);break a;default:}b=new C8;i=new K;M(i);U(H(i,C(463)),d);Bn(b,L(i));N(b);}i.eX=g;b=a.pF;d=Ba(b.et);e=BD();j=0;while(j<d){Br(e,Hp(b));j=j+1|0;}i.fC=e;i.lm=Ph(a);d=Ba(a.cy);b=BD();j=0;while(j<d){e=OX(a.nM);g=Hp(a.pF);f=Ba(a.cy);k=new QK;k.lo=e;k.kO
=g;k.rT=f;Br(b,k);j=j+1|0;}i.hM=b;j=Ba(a.cy);i.ur=j==(-1)?null:Bv(a.jb,j);d=Ba(a.cy);b=BD();j=0;while(j<d){Br(b,Ro(a,i));j=j+1|0;}i.cH=b;a.nc.data[c]=i;return i;}
function Ph(a){var b,c,d,e;b=Ba(a.cy);c=BD();d=0;while(d<b){e=Ba(a.cy);Br(c,Bv(a.jb,e));d=d+1|0;}return c;}
function AEU(){var a=this;B.call(a);a.l0=null;a.pA=null;}
function ALc(){var a=this;B.call(a);a.EB=0;a.DK=0;a.rJ=0;a.nl=0;}
function ADv(){var a=this;B.call(a);a.sB=null;a.sC=null;}
function AVv(a){var b,c,d,e,f,g;b=a.sB;c=a.sC;if(BN(c.l0,b.d.f$)){c=c.pA;CN(b,c.nl,c.rJ,0);Ce((Bl(b)).bK,c.nl,c.rJ);Ce((Bl(b)).bB,c.DK,c.EB);}else{d=(CA(b.fx.AJ)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){FK(b);b=new Xv;b.yp=g;b.yq=c;BG(b);c=new YR;c.wj=b;$rt_globals.setTimeout(Bx(c,"onTimer"),0);}}}
function ADw(){var a=this;B.call(a);a.Bm=null;a.Bl=null;}
function AXQ(a){IT(a.Bm,a.Bl);}
function FW(){var a=this;B.call(a);a.hf=null;a.cH=null;a.fC=null;a.eX=null;a.hM=null;a.lm=null;a.ur=null;}
function A4q(a){var b=new FW();AF_(b,a);return b;}
function AF_(a,b){a.hf=b;a.cH=BD();a.fC=BD();a.eX=BD();a.lm=BD();a.hM=BD();}
function ADQ(a){var b;b=a.hf;if(b!==null)b.cH.q3(a);}
function VO(){B.call(this);this.sd=null;}
function AOu(a,b){b=b;ZB(a.sd,b);}
var NI=G(FW);
var Lb=G(FW);
function UQ(){B.call(this);this.AQ=null;}
function AVy(a,b){var c;b=b;c=a.AQ;Bh(c.by,(Co(c.fW,b)).bq);}
function QK(){var a=this;B.call(a);a.lo=null;a.kO=null;a.rT=0;}
function Qg(){B.call(this);this.qw=null;}
function AY2(a,b){b=b;AAj(a.qw,b);}
var Qk=G(0);
var Fr=G(Fy);
var No=G(Fr);
var Ue=G(No);
var N4=G(Ef);
var Ub=G(N4);
var Oj=G(Fm);
function AWD(a){var b;b=new Eh;X(b);N(b);}
function AQw(a,b){var c;c=new Eh;X(c);N(c);}
function APy(a,b){b=new Eh;X(b);N(b);}
var Uc=G(Oj);
function AQE(a,b){var c;c=new BI;X(c);N(c);}
function APQ(a){return 0;}
function ANF(a){return A9c;}
function AL3(a){return 1;}
var T_=G();
function ALL(a){return 0;}
function AZP(a){var b;b=new Hl;X(b);N(b);}
function ASx(a){var b;b=new C8;X(b);N(b);}
var M9=G(0);
var Ua=G();
var V9=G();
function Re(){var a=this;B.call(a);a.mQ=0;a.st=null;}
function A3d(a,b){var c,d,e;c=a.st;b=b;d=c.z$;e=c.z_;d=b.a<=d&&e<=b.b?1:0;a.mQ=d;return d?0:1;}
var Km=G(Eh);
var JG=G(Bw);
var Od=G(Bw);
function Yh(){B.call(this);this.y3=null;}
function AZQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.y3;d=CP(c[0]);e=(CP(c[1])).data[0];if(!ABp(b.h)){c=b.h;if(c.cl==e){e=b.qt;f=L_(d);Fu(c.dP);Fu(c.dE);Na(c);while(f.ff>=f.iA.data.length?0:1){if(Ba(f)==(-1))continue;g=VE(c,Ba(f));h=Oi(Cc(c,g.br),g.bw);if(Ba(f)==(-1)){if(!e)continue;h.bX=0;h.bF=h.bF|4;continue;}i=VE(c,Ba(f));j=Ba(f);k=Ba(f);Er(c.dP,g,i);l=c.dE;m=BD();if(Co(l,i)===null)Er(l,i,m);Br(Co(c.dE,i),g);h.bX=j;h.bF=k;}Lw(b);if(b.EE){n=JL(E2(),b.AZ);if(A3x(n,Bq(100))){b=E0(b);c=new K;M(c);H(HH(H(H(c,
b),C(464)),n),C(229));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function VW(){B.call(this);this.An=null;}
function ACi(){B.call(this);this.wp=null;}
function AMy(a,b){Mq(a.wp,b);}
function Q2(){var a=this;B.call(a);a.x8=null;a.ka=null;}
function AAp(){var a=this;B.call(a);a.qL=null;a.qM=null;}
function AVw(a){var b,c;b=a.qL;c=a.qM;FI(b.b6.dM,c);AAZ(b);}
function G5(){var a=this;B.call(a);a.eg=0;a.eZ=0;a.ps=null;a.n$=0;a.gN=null;}
function AS6(a,b,c,d,e,f){var g=new G5();AYD(g,a,b,c,d,e,f);return g;}
function AYD(a,b,c,d,e,f,g){a.eg=b;a.eZ=c;a.ps=BH(f,g);a.n$=d;a.gN=e;}
function Qt(){Fr.call(this);this.jj=null;}
function Ss(a){var b;b=new AAw;NK(b,a.jj);return b;}
function TG(){Fr.call(this);this.yX=null;}
function Xs(a){var b;b=new Tz;NK(b,a.yX);return b;}
function Qu(){Fy.call(this);this.v1=null;}
function Wa(){B.call(this);this.vQ=null;}
function AW6(a,b){b=b;Pc(a.vQ,b);}
function T1(){B.call(this);this.uv=null;}
function AYI(a,b){b=b;G_(a.uv,b);}
function Kq(){var a=this;B.call(a);a.eD=null;a.l$=null;a.jv=0;}
function A37(a,b,c){var d=new Kq();AGE(d,a,b,c);return d;}
function AGE(a,b,c,d){a.eD=b;a.l$=c;a.jv=d;}
function AJS(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BN(a.eD,c.eD)&&BN(a.l$,c.l$)&&BN(CX(a.jv),CX(c.jv))?1:0;}return 0;}
function Mk(){var a=this;Kq.call(a);a.kY=null;a.wy=0;}
function AVS(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AJS(a,b))return 0;c=b;return BN(a.kY,c.kY);}return 0;}
function E8(){var a=this;B.call(a);a.fR=null;a.gB=null;a.zA=0;}
function A3w(a,b,c){var d=new E8();NV(d,a,b,c);return d;}
function NV(a,b,c,d){a.fR=b;a.gB=c;a.zA=d;}
function AIm(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BN(a.fR,c.fR)&&BN(a.gB,c.gB)?1:0;}return 0;}
function HE(){E8.call(this);this.ho=null;}
function J_(){var a=this;E8.call(a);a.id=null;a.qF=0;}
function A2g(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AIm(a,b))return 0;c=b;return BN(a.id,c.id);}return 0;}
function Ji(){var a=this;E8.call(a);a.jP=null;a.ja=null;}
function AVg(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BN(a.jP,c.jP)&&BN(a.ja,c.ja)?1:0;}return 0;}
function AFo(){var a=this;D$.call(a);a.zV=null;a.mc=0;a.nW=0;a.tg=0;}
function AQA(a,b,c){var d=new AFo();A11(d,a,b,c);return d;}
function A11(a,b,c,d){a.zV=b;a.mc=c;a.nW=d;a.tg=d-c|0;}
function Jm(a,b){var c,d;a:{while(true){c=a.mc;if(c>=a.nW)break a;d=a.zV.data;a.mc=c+1|0;if(b.A(d[c]))continue;else break;}}return a.mc>=a.nW?0:1;}
function R6(){var a=this;B.call(a);a.wV=null;a.wW=null;}
function AO3(a){var b,c;b=a.wV;c=a.wW;SA();KC(b,c,A9f);}
function R7(){var a=this;B.call(a);a.yG=null;a.yH=null;}
function AMZ(a){var b,c;b=a.yG;c=a.yH;SA();KC(b,c,A9g);}
function R4(){var a=this;B.call(a);a.u9=null;a.u8=null;}
function AL7(a){KC(a.u9,a.u8,null);}
function R5(){var a=this;B.call(a);a.qx=null;a.qz=null;}
function AOX(a){var b,c,d,e,f,g,h;b=a.qx;c=a.qz;d=Eb(b.bv.d);e=Hz(b.bv.d);d=ABF(b.bv.fx,d,e);Eo(b.gk.b6);b=b.bv;e=Ft(b,c);if(d!==null){f=b.d;g=e.br;h=e.bw;e=new ABV;e.DQ=b;e.DR=c;d.Ka(f,g,h,1,e,b.j3);}}
function Rz(){B.call(this);this.rZ=null;}
function A0n(a){var b;b=a.rZ;Eo(b.gk.b6);G$(b.bv,V6(b),0);}
function Ry(){B.call(this);this.Bi=null;}
function AZz(a){var b;b=a.Bi;Eo(b.gk.b6);G$(b.bv,V6(b),1);}
function Rx(){B.call(this);this.zJ=null;}
function AUy(a){var b,c,d;b=a.zJ;Eo(b.gk.b6);c=HS(b);b=b.bv;BG(b);d=new AEb;d.yg=b;RE(c,d,AE3(C(465)));}
function Qm(){var a=this;B.call(a);a.wT=null;a.wU=null;}
function ARa(a){var b,c;b=a.wT;c=a.wU;b=b.bv.d;b.pU=c;Mo(b);}
var Q1=G(0);
var A7k=null;function AKe(){A7k=new Tw;}
function YM(){B.call(this);this.v9=null;}
function AMQ(a){var b,c,d;b=a.v9;Eo(b.gk.b6);c=HS(b);b=b.bv;BG(b);d=new RN;d.t7=b;Oe(c,d);}
function S_(){B.call(this);this.uN=null;}
function AOt(a,b,c){var d,e;c=a.uN;d=c.d.h;e=b.bq;b=c.fv;Z9(d.B.data[e],0,b);}
function Wq(){var a=this;B.call(a);a.dQ=null;a.y5=null;a.yA=null;}
function OX(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.dQ);switch(b){case 3:break;case 5:c=PK(a);d=N9(a);b=Ba(a.dQ);e=Ba(a.dQ);f=Ba(a.dQ);g=BD();h=0;while(h<f){Br(g,N9(a));h=h+1|0;}i=new Mk;AGE(i,c,d,b);i.kY=g;i.wy=e;break a;default:c=new C8;d=new K;M(d);U(H(d,C(466)),b);Bn(c,L(d));N(c);}i=A37(PK(a),N9(a),Ba(a.dQ));}return i;}
function PK(a){var b,c;b=Ba(a.dQ);c=Ba(a.dQ);return AXv(EC(a.y5,b,c),Ba(a.dQ));}
function N9(a){var b;b=Ba(a.dQ);if(b==(-1))return null;return Bv(a.yA,b);}
function RF(){var a=this;B.call(a);a.et=null;a.AR=null;a.A6=null;}
function Hp(a){var b,c,d,e,f;a:{b:{b=Ba(a.et);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=WT(a);d=QR(a);b=Ba(a.et);e=Sv(a);f=new J_;NV(f,c,d,2);f.qF=b;f.id=e;break a;case 4:c=Hp(a);d=Hp(a);f=new Ji;NV(f,c.fR,c.gB,9);f.jP=c;f.ja=d;break a;case 5:f=A3w(WT(a),QR(a),Ba(a.et));break a;case 9:c=Sv(a);f=new HE;d=!CJ(c)&&Bv(c,0)!==null?(Bv(c,0)).gB:null;NV(f,null,null,7);f.ho=BD();c=B1(c);while(B4(c)){e=B6(c);if(!(e instanceof HE))Br(f.ho,e);else{e=e;H1(f.ho,e.ho);}}f.gB=d;break a;default:break b;}f
=null;break a;}c=new C8;d=new K;M(d);U(H(d,C(467)),b);Bn(c,L(d));N(c);}return f;}
function WT(a){var b,c;b=Ba(a.et);c=Ba(a.et);return AXv(EC(a.AR,b,c),Ba(a.et));}
function QR(a){var b;b=Ba(a.et);if(b==(-1))return null;return Bv(a.A6,b);}
function Sv(a){var b,c,d;b=Ba(a.et);c=BD();d=0;while(d<b){Br(c,Hp(a));d=d+1|0;}return c;}
function RZ(){var a=this;B.call(a);a.qW=null;a.qU=0;a.qV=0;a.qS=null;a.qT=0;a.qR=0;}
function ARJ(a,b){var c,d,e,f,g,h,i,j;c=a.qW;d=a.qU;e=a.qV;f=a.qS;g=a.qT;h=a.qR;i=Cz(c.bp,5.0);d=Be((c.bp.bR.a-d|0)-i|0,Bd((i-d|0)-c.R.k.a|0,b.j.a));j=Be((c.bp.bR.b-e|0)-i|0,Bd((i-e|0)-c.R.k.b|0,b.j.b));V(f,d+g|0,j+h|0);Eu(c,f,c.W.k);}
function Xe(){var a=this;B.call(a);a.AB=null;a.AC=null;a.Az=null;a.AA=0;a.Ax=0;a.Ay=0;a.Av=0;a.Aw=0;a.At=0;a.Au=0;a.uD=0;}
function AWo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.AB;d=a.AC;e=a.Az;f=a.AA;g=a.Ax;h=a.Ay;i=a.Av;j=a.Aw;k=a.At;l=a.Au;m=a.uD;n=Cz(c.bp,5.0);o=c.W.hS();Ct(d,c.W.k);Ct(e,c.W.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bp.bR.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.R.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bp.bR.b+c.R.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}Eu(c,e,d);}
function UI(){var a=this;B.call(a);a.xC=null;a.xB=0.0;}
function Nt(a,b){return Lp(a.xC,b,a.xB*2.0+0.875);}
var AC6=G(BI);
function Pe(){B.call(this);this.rK=null;}
function AYc(a){AHy(a.rK);}
function Pf(){B.call(this);this.sq=null;}
function A1I(a){Ho(a.sq);}
function Pd(){B.call(this);this.v6=null;}
function AUD(a){AIh(a.v6);}
function U6(){B.call(this);this.yB=null;}
function AP8(a){a.yB.Bx();}
function U5(){B.call(this);this.uS=null;}
function A0D(a){a.uS.v8();}
function X8(){B.call(this);this.rh=null;}
function ANr(a){var b,c,d,e,f,g,h,i;b=a.rh;c=(b.rv.cY()).data;d=Q(B5,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new WI;i.x5=b;i.x4=h;e[f]=W7(i,h);f=f+1|0;}return d;}
function AAe(){B.call(this);this.xq=null;}
function AO_(a){a.xq.op.iq(0);}
function AAf(){B.call(this);this.x_=null;}
function A1u(a){a.x_.op.iq(1);}
function VM(){B.call(this);this.zB=null;}
function ALu(a){var b,c,d,e,f;b=a.zB.d.h;c=b.cl;d=new K;M(d);U(H(d,C(468)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.nu;d=new K;M(d);U(H(d,C(469)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dg;e=Hn(E_(b));ADi(d,0,d.de,e);b=Bu();f=b.m0;f.data[0]=10;Xw(b,f,0,1);}
function VH(){B.call(this);this.xe=null;}
function APa(a){ZG(a.xe);}
function VI(){B.call(this);this.xT=null;}
function AT4(a){AAV(a.xT);}
function VJ(){B.call(this);this.vG=null;}
function AYR(a){Ok(a.vG.d);}
function VK(){B.call(this);this.qA=null;}
function AXF(a){Vy(a.qA);}
function ON(){B.call(this);this.xA=null;}
function ATf(a){var b,c,d,e,f,g,h;b=a.xA;c=Q(B5,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=W7(Qp(b,g),Xa(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=W7(Qp(b,g),Xa(g));e=h;}return c;}
function T2(){B.call(this);this.tl=null;}
function AR_(a,b,c){HI(Cc(a.tl.d.h,b.bq),0,J(c));}
var XP=G(0);
function ACj(){var a=this;B.call(a);a.mz=null;a.pJ=null;a.hv=null;a.m4=null;}
function A31(a,b,c,d){var e=new ACj();AHg(e,a,b,c,d);return e;}
function AHg(a,b,c,d,e){a.mz=b;a.pJ=c;a.hv=d;a.m4=e;}
function Nh(a,b){var c,d;c=new ACr;d=a.mz.values();c.kq=a;c.yf=d;c.k3=b;ABd(c);}
function YO(a){var b,c,d,e;b=a.m4;if(b===null){b=a.hv;c=b.data;d=Hk(a);e=c.length;b=C6(b,e+1|0);b.data[e]=d;b=b;a.m4=b;}return b;}
function Hk(a){return H3(a.mz.name);}
function A2f(a){return a.hv;}
function Q5(a){return L2(a.hv,Hk(a));}
function AHx(){var a=this;B.call(a);a.jE=null;a.dG=0;}
function AXv(a,b){var c=new AHx();ALn(c,a,b);return c;}
function ALn(a,b,c){a.jE=b;a.dG=c;}
function ARc(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.dG==c.dG&&BN(a.jE,c.jE)?1:0;}return 0;}
function WC(){B.call(this);this.re=null;}
function AYG(a,b){b=b;OL(a.re,b);}
function V1(){B.call(this);this.xc=null;}
function A3a(a,b){b=b;G_(a.xc,b);}
var Tw=G();
function FD(){var a=this;B.call(a);a.kl=0;a.tX=0;a.jS=null;a.g7=null;a.ym=null;a.l2=null;}
function A9h(a){var b=new FD();NK(b,a);return b;}
function NK(a,b){a.l2=b;a.tX=b.cZ;a.jS=null;}
function Gf(a){var b,c;if(a.jS!==null)return 1;while(true){b=a.kl;c=a.l2.b3.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kl=b+1|0;}return 0;}
function AIP(a){var b;if(a.tX==a.l2.cZ)return;b=new Gu;X(b);N(b);}
function NY(a){var b,c,d,e;AIP(a);if(!Gf(a)){b=new Hl;X(b);N(b);}b=a.jS;if(b!==null){c=a.g7;if(c!==null)a.ym=c;a.g7=b;a.jS=b.cV;}else{d=a.l2.b3.data;e=a.kl;a.kl=e+1|0;b=d[e];a.g7=b;a.jS=b.cV;a.ym=null;}}
var AAw=G(FD);
function Qj(a){NY(a);return a.g7.cS;}
var Tz=G(FD);
function ADO(a){NY(a);return a.g7;}
var Zy=G(FD);
function AEM(){var a=this;B.call(a);a.Pr=null;a.Sv=0;}
function Zw(){var a=this;B.call(a);a.l=null;a.dY=0;a.mR=null;a.q$=0;a.hV=0;a.fL=0;a.bA=0;a.ny=null;}
function M$(a){return a.l.bM;}
function VF(a,b,c,d){var e,f,g,h,i,j;e=BD();f=a.dY;g=0;if(c!=f)a.dY=c;a:{switch(b){case -1073741784:h=new R0;c=a.bA+1|0;a.bA=c;Gk(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QO;c=a.bA+1|0;a.bA=c;Gk(h,c);break a;case -33554392:h=new SH;c=a.bA+1|0;a.bA=c;Gk(h,c);break a;default:c=a.hV+1|0;a.hV=c;if(d!==null)h=A5k(c);else{h=new F4;Gk(h,0);g=1;}c=a.hV;if(c<=(-1))break a;if(c>=10)break a;a.mR.data[c]=h;break a;}h=new ADZ;Gk(h,(-1));}while(true){if(Fg(a.l)&&a.l.n==(-536870788))
{d=A1T(Cj(a,2),Cj(a,64));while(!DF(a.l)&&Fg(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CH(d,Bm(i));i=a.l;if(i.bk!=(-536870788))continue;Bm(i);}i=Lq(a,d);i.T(h);}else if(a.l.bk==(-536870788)){i=H2(h);Bm(a.l);}else{i=X_(a,h);d=a.l;if(d.bk==(-536870788))Bm(d);}if(i!==null)Br(e,i);if(DF(a.l))break;if(a.l.bk==(-536870871))break;}if(a.l.m8==(-536870788))Br(e,H2(h));if(a.dY!=f&&!g){a.dY=f;d=a.l;d.g5=f;d.n=d.bk;d.fo=d.fy;j=d.dr;d.x=j+1|0;d.jA=j;FN(d);}switch(b){case -1073741784:break;case -536870872:d
=new Wl;F5(d,e,h);return d;case -268435416:d=new ACK;F5(d,e,h);return d;case -134217688:d=new Zz;F5(d,e,h);return d;case -67108824:d=new S6;F5(d,e,h);return d;case -33554392:d=new Ea;F5(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A5b(Bv(e,0),h);default:return A3O(e,h);}return H2(h);}d=new Kl;F5(d,e,h);return d;}
function AKt(a){var b,c,d,e,f,g,h;b=BO(4);c=(-1);d=(-1);if(!DF(a.l)&&Fg(a.l)){e=b.data;c=Bm(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B7(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bm(f);f=a.l;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bm(f);return A1F(e,3);}return A1F(e,2);}if(!Cj(a,2))return AE8(b[0]);if(Cj(a,64))return A0k(b[0]);return AWd(b[0]);}e=b.data;c=1;while(c<4&&!DF(a.l)&&Fg(a.l)){h=c+1|0;e[c]=Bm(a.l);c=h;}if(c==1){h=e[0];if(!(A9i.DC(h)==A9j?0:1))return Vx(a,e[0]);}if
(!Cj(a,2))return A5J(b,c);if(Cj(a,64)){f=new Vs;PI(f,b,c);return f;}f=new ABg;PI(f,b,c);return f;}
function X_(a,b){var c,d,e,f,g,h,i;if(Fg(a.l)&&!KS(a.l)&&Nr(a.l.n)){if(Cj(a,128)){c=AKt(a);if(!DF(a.l)){d=a.l;e=d.bk;if(!(e==(-536870871)&&!(b instanceof F4))&&e!=(-536870788)&&!Fg(d))c=Mm(a,b,c);}}else if(!Xx(a.l)&&!ACa(a.l)){f=new PS;M(f);while(!DF(a.l)&&Fg(a.l)&&!Xx(a.l)&&!ACa(a.l)){if(!(!KS(a.l)&&!a.l.n)&&!(!KS(a.l)&&Nr(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bm(a.l);if(!Ml(e))BM(f,e&65535);else JX(f,HP(e));}if(!Cj(a,2)){c=new ZN;D0(c);c.cC
=L(f);e=f.L;c.bH=e;c.o7=AZo(e);c.nB=AZo(c.bH);h=0;while(h<(c.bH-1|0)){RK(c.o7,P(c.cC,h),(c.bH-h|0)-1|0);RK(c.nB,P(c.cC,(c.bH-h|0)-1|0),(c.bH-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A5I(f);else{c=new Pb;D0(c);c.jC=L(f);c.bH=f.L;}}else c=Mm(a,b,ADH(a,b));}else{d=a.l;if(d.bk!=(-536870871))c=Mm(a,b,ADH(a,b));else{if(b instanceof F4)N(Cl(C(21),d.bM,PQ(d)));c=H2(b);}}a:{if(!DF(a.l)){e=a.l.bk;if(!(e==(-536870871)&&!(b instanceof F4))&&e!=(-536870788)){f=X_(a,b);if(c instanceof Dc&&!(c instanceof FO)&&!(c instanceof C0)
&&!(c instanceof E7)){i=c;if(!f.bZ(i.M)){c=new UZ;Fd(c,i.M,i.e,i.jN);c.M.T(c);}}if((f.iY()&65535)!=43)c.T(f);else c.T(f.M);break a;}}if(c===null)return null;c.T(b);}if((c.iY()&65535)!=43)return c;return c.M;}
function Mm(a,b,c){var d,e,f,g,h;d=a.l;e=d.bk;if(c!==null&&!(c instanceof Cb)){switch(e){case -2147483606:Bm(d);d=new V_;Du(d,c,b,e);Oy();c.T(A9k);return d;case -2147483605:Bm(d);d=new YB;Du(d,c,b,(-2147483606));Oy();c.T(A9k);return d;case -2147483585:Bm(d);d=new Qy;Du(d,c,b,(-536870849));Oy();c.T(A9k);return d;case -2147483525:f=new O$;d=Gh(d);g=a.fL+1|0;a.fL=g;MF(f,d,c,b,(-536870849),g);Oy();c.T(A9k);return f;case -1073741782:case -1073741781:Bm(d);d=new RV;Du(d,c,b,e);c.T(d);return d;case -1073741761:Bm(d);d
=new Zc;Du(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new TJ;d=Gh(d);e=a.fL+1|0;a.fL=e;MF(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bm(d);if(c.iY()!=(-2147483602)){d=new C0;Du(d,c,b,e);}else if(Cj(a,32)){d=new RW;Du(d,c,b,e);}else{d=new XF;f=Yl(a.dY);Du(d,c,b,e);d.m7=f;}c.T(d);return d;case -536870849:Bm(d);d=new Gx;Du(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new Gi;d=Gh(d);e=a.fL+1|0;a.fL=e;MF(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bm(d);d=new AEe;Fd(d,f,b,e);f.e=d;return d;case -2147483585:Bm(d);c=new UV;Fd(c,f,b,(-2147483585));return c;case -2147483525:c=new X$;Sd(c,Gh(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bm(d);d=new Y_;Fd(d,f,b,e);f.e=d;return d;case -1073741761:Bm(d);c=new ABs;Fd(c,f,b,(-1073741761));return c;case -1073741701:c=new RJ;Sd(c,Gh(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bm(d);d=A34(f,b,e);f.e=d;return d;case -536870849:Bm(d);c
=new E7;Fd(c,f,b,(-536870849));return c;case -536870789:return A4K(Gh(d),f,b,(-536870789));default:}return c;}
function ADH(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F4;while(true){a:{e=a.l;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bm(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dY=g;else{if(f!=(-1073741784))g=a.dY;c=VF(a,f,g,b);e=a.l;if(e.bk!=(-536870871))N(Cl(C(21),e.bM,e.dr));Bm(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bm(e);c
=A1w(0);break a;case -2147483577:Bm(e);c=new XC;B8(c);break a;case -2147483558:Bm(e);c=new Vm;h=a.bA+1|0;a.bA=h;AKD(c,h);break a;case -2147483550:Bm(e);c=A1w(1);break a;case -2147483526:Bm(e);c=new AC9;B8(c);break a;case -536870876:Bm(e);a.bA=a.bA+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A3G(a.bA);break a;}c=A3n(a.bA);break a;}if(Cj(a,1)){c=A3S(a.bA);break a;}c=A4b(a.bA);break a;case -536870866:Bm(e);if(Cj(a,32)){c=A4i();break a;}c=A3$(Yl(a.dY));break a;case -536870821:Bm(e);i=0;c=a.l;if(c.bk==(-536870818)){i=1;Bm(c);}c
=Lq(a,Hu(a,i));c.T(b);e=a.l;if(e.bk!=(-536870819))N(Cl(C(21),e.bM,e.dr));XX(e,1);Bm(a.l);break a;case -536870818:Bm(e);a.bA=a.bA+1|0;if(!Cj(a,8)){c=new Le;B8(c);break a;}c=new WO;e=Yl(a.dY);B8(c);c.y8=e;break a;case 0:j=e.fy;if(j!==null)c=Lq(a,j);else{if(DF(e)){c=H2(b);break a;}c=AE8(f&65535);}Bm(a.l);break a;default:break b;}Bm(e);c=new Le;B8(c);break a;}h=(f&2147483647)-48|0;if(a.hV<h)N(Cl(C(21),FU(e),PQ(a.l)));Bm(e);a.bA=a.bA+1|0;c=!Cj(a,2)?A4w(h,a.bA):Cj(a,64)?A3H(h,a.bA):A5H(h,a.bA);a.mR.data[h].oV=1;a.q$
=1;break a;}if(f>=0&&!G6(e)){c=Vx(a,f);Bm(a.l);}else if(f==(-536870788))c=H2(b);else{if(f!=(-536870871)){b=new Ka;c=!G6(a.l)?Vi(f&65535):a.l.fy.cK();e=a.l;MO(b,c,e.bM,e.dr);N(b);}if(d){b=new Ka;e=a.l;MO(b,C(21),e.bM,e.dr);N(b);}c=H2(b);}}}if(f!=(-16777176))break;}return c;}
function Hu(a,b){var c,d,e,f,g,h,i,j,$$je;c=A1T(Cj(a,2),Cj(a,64));EM(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DF(a.l))break a;h=a.l;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CH(c,d);d=Bm(a.l);h=a.l;if(h.bk!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bm(h);e=1;d=(-1);break d;}Bm(h);if(g){c=Hu(a,0);break d;}if(a.l.bk==(-536870819))break d;U$(c,Hu(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bm(h);h=a.l;i=h.bk;if(G6(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Nr(i))break e;i=i&65535;break e;}catch($$e){$$je=EV($$e);if($$je instanceof Ex){break b;}else{throw $$e;}}}try{Ca(c,d,i);}catch($$e){$$je=EV($$e);if($$je instanceof Ex){break b;}else{throw $$e;}}Bm(a.l);d=(-1);break d;}}if(d>=0)CH(c,d);d=45;Bm(a.l);break d;case -536870821:if(d>=0){CH(c,d);d=(-1);}Bm(a.l);j=0;h=a.l;if(h.bk==(-536870818)){Bm(h);j=1;}if(!e)AH1(c,Hu(a,j));else U$(c,Hu(a,j));e=0;Bm(a.l);break d;case -536870819:if(d>=0)CH(c,
d);d=93;Bm(a.l);break d;case -536870818:if(d>=0)CH(c,d);d=94;Bm(a.l);break d;case 0:if(d>=0)CH(c,d);h=a.l.fy;if(h===null)d=0;else{ALb(c,h);d=(-1);}Bm(a.l);break d;default:}if(d>=0)CH(c,d);d=Bm(a.l);}g=0;}N(Cl(C(21),M$(a),a.l.dr));}N(Cl(C(21),M$(a),a.l.dr));}if(!f){if(d>=0)CH(c,d);return c;}N(Cl(C(21),M$(a),a.l.dr-1|0));}
function Vx(a,b){var c,d,e;c=Ml(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AWd(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new Wg;D0(d);d.bH=2;d.s2=GY(GX(b));return d;}if(Qi(b))return AQ$(b&65535);if(!Sy(b))return A0k(b&65535);return AX2(b&65535);}}if(!c){if(Qi(b))return AQ$(b&65535);if(!Sy(b))return AE8(b&65535);return AX2(b&65535);}d=new Eg;D0(d);d.bH=2;d.gV=b;e=(HP(b)).data;d.mj=e[0];d.ln=e[1];return d;}
function Lq(a,b){var c,d,e;if(!AJL(b)){if(!b.P){if(b.it())return AOI(b);return AS7(b);}if(!b.it())return AYj(b);c=new MG;ABK(c,b);return c;}c=AEy(b);d=new OW;B8(d);d.sk=c;d.Eb=c.bi;if(!b.P){if(b.it())return AGq(AOI(Jw(b)),d);return AGq(AS7(Jw(b)),d);}if(!b.it())return AGq(AYj(Jw(b)),d);c=new Q_;e=new MG;ABK(e,Jw(b));AHF(c,e,d);return c;}
function Jy(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dY&b)!=b?0:1;}
function Z8(){B.call(this);this.yF=null;}
function AQt(a,b){b.hm=a.yF.de;}
function Z7(){B.call(this);this.uP=null;}
function A0d(a,b){b.hf=a.uP.de.ci;}
function XE(){B.call(this);this.rt=null;}
function AWw(a,b){b.hm=a.rt;}
var HW=G(0);
function Ta(){B.call(this);this.yJ=null;}
function AY3(a,b,c,d){KJ(a.yJ,b,c.bq,d.bq);}
function Tb(){B.call(this);this.wQ=null;}
function AXJ(a,b,c,d){KJ(a.wQ,b,c.bq,d.bq);}
function IS(){B.call(this);this.om=0;}
var A9l=null;var A9m=null;var A9n=null;function ARF(a){var b=new IS();AGs(b,a);return b;}
function AGs(a,b){a.om=b;}
function X3(b){return !b?A9m:A9l;}
function AIn(){A9l=ARF(1);A9m=ARF(0);A9n=F($rt_booleancls());}
var KL=G(0);
var R1=G();
var XT=G(0);
var AFU=G();
function Sm(){B.call(this);this.uR=null;}
function AZx(a,b,c,d){JR(a.uR,b,c.bq,d.bq);}
var Sl=G();
function ATU(a,b){return b.eD.dG>=0?0:1;}
var Sk=G();
function AR1(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fR;if(b===null)break b;if(b.dG>=0)break b;}c=1;break a;}c=0;}return c;}
function So(){B.call(this);this.Aa=null;}
function AY$(a,b,c,d){JR(a.Aa,b,c.bq,d.bq);}
var GC=G(CG);
var A9g=null;var A9f=null;var A9o=null;function SA(){SA=Bo(GC);A2Y();}
function A0U(a,b){var c=new GC();AFH(c,a,b);return c;}
function AFH(a,b,c){SA();DL(a,b,c);}
function A2Y(){var b;A9g=A0U(C(470),0);b=A0U(C(471),1);A9f=b;A9o=I(GC,[A9g,b]);}
function AEb(){B.call(this);this.yg=null;}
function AXg(a,b){DK(a.yg,b);}
function BQ(){var a=this;B.call(a);a.e=null;a.ct=0;a.xL=null;a.jN=0;}
var A6h=0;function B8(a){var b;b=A6h;A6h=b+1|0;a.xL=NX(b);}
function NF(a,b){var c;c=A6h;A6h=c+1|0;a.xL=NX(c);a.e=b;}
function ID(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IK(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWq(a,b){a.jN=b;}
function AV1(a){return a.jN;}
function ASI(a){return a.e;}
function ATm(a,b){a.e=b;}
function A1M(a,b){return 1;}
function A2w(a){return null;}
function Kp(a){var b;a.ct=1;b=a.e;if(b!==null){if(!b.ct){b=b.gv();if(b!==null){a.e.ct=1;a.e=b;}a.e.eR();}else if(b instanceof HR&&b.eW.oV)a.e=b.e;}}
function AHM(){A6h=1;}
function WI(){var a=this;B.call(a);a.x5=null;a.x4=null;}
function AOH(a){var b,c;b=a.x5;c=a.x4;b.jc.uy(c);}
function V2(){var a=this;B.call(a);a.ro=null;a.rm=null;a.rl=0;a.rn=0;}
function AZB(a,b){b=b;EQ(a.ro,a.rm,b,a.rl,a.rn);}
function V3(){var a=this;B.call(a);a.BZ=null;a.BY=null;a.BX=0;a.BW=0;}
function AOc(a,b){b=b;EQ(a.BZ,a.BY,b,a.BX,a.BW);}
function XD(){B.call(this);this.wH=null;}
function AQH(a,b){ADt(a.wH,b);}
function Ik(){var a=this;Dg.call(a);a.h3=null;a.hI=null;a.hp=null;a.j0=null;}
var A9p=null;var A9q=null;function ASE(a,b){var c=new Ik();AJG(c,a,b);return c;}
function A9r(a,b,c){var d=new Ik();LL(d,a,b,c);return d;}
function AJG(a,b,c){LL(a,b,0,c);}
function LL(a,b,c,d){J2(a,Hk(b),c);a.hp=A9p;a.j0=A9q;a.h3=b;a.hI=d;Li(a);IC(a);}
function Rf(a,b){var c,d,e,f,g,h;c=a.hp.data;d=0;e=c.length-1|0;a:{while(true){if(d>e){f=null;break a;}g=(d+e|0)>>>1|0;f=c[g];h=Oq(E4(f),b);if(h<0)d=g+1|0;else{if(h<=0)break;e=g-1|0;}}}return f;}
function Li(a){var b;b=new AAW;b.uq=a;a.eq=b;a.je=b;a.e$=A84;}
function ADA(a){var b;b=new ADg;b.Ba=a;a.eq=b;a.je=b;}
function AHi(){A9p=Q(Ik,0);A9q=Q(Kw,0);}
var AA$=G();
var A8$=null;function A5c(){A5c=Bo(AA$);AVq();}
function AVq(){var b,c;SA();b=BO((A9o.hu()).data.length);c=b.data;A8$=b;c[A9g.fP]=1;c[A9f.fP]=2;}
function SD(){B.call(this);this.Bo=null;}
function AR4(a,b){Ts(HS(a.Bo),b,A8k,AE3(C(472)));}
function RT(){B.call(this);this.zy=null;}
function AOi(a,b){var c,d;c=a.zy;d=b.iT;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function CZ(){var a=this;BQ.call(a);a.oV=0;a.ek=0;}
var A9k=null;function Oy(){Oy=Bo(CZ);AW8();}
function A5k(a){var b=new CZ();Gk(b,a);return b;}
function Gk(a,b){Oy();B8(a);a.ek=b;}
function AMe(a,b,c,d){var e,f;e=I6(d,a.ek);M0(d,a.ek,b);f=a.e.c(b,c,d);if(f<0)M0(d,a.ek,e);return f;}
function AYS(a){return a.ek;}
function AMu(a,b){return 0;}
function AW8(){var b;b=new Xy;B8(b);A9k=b;}
function G1(){var a=this;B.call(a);a.bg=null;a.g5=0;a.fr=0;a.vi=0;a.m8=0;a.bk=0;a.n=0;a.zl=0;a.fy=null;a.fo=null;a.x=0;a.j1=0;a.dr=0;a.jA=0;a.bM=null;}
var A9s=null;var A9i=null;var A9j=0;function XX(a,b){if(b>0&&b<3)a.fr=b;if(b==1){a.n=a.bk;a.fo=a.fy;a.x=a.jA;a.jA=a.dr;FN(a);}}
function G6(a){return a.fy===null?0:1;}
function KS(a){return a.fo===null?0:1;}
function Bm(a){FN(a);return a.m8;}
function Gh(a){var b;b=a.fy;FN(a);return b;}
function FN(a){var b,c,d,e,f,g,h,$$je;a.m8=a.bk;a.bk=a.n;a.fy=a.fo;a.dr=a.jA;a.jA=a.x;while(true){b=0;c=a.x>=a.bg.data.length?0:LY(a);a.n=c;a.fo=null;if(a.fr==4){if(c!=92)return;c=a.x;d=a.bg.data;c=c>=d.length?0:d[B$(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.x=a.j1;return;}a.fr=a.vi;a.n=a.x>(a.bg.data.length-2|0)?0:LY(a);}a:{c=a.n;if(c!=92){e=a.fr;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.bg.data[a.x]!=63){a.n=(-2147483608);break a;}B$(a);c=a.bg.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B$(a);break b;default:N(Cl(C(21),FU(a),a.x));}a.n=(-67108824);B$(a);}else{switch(c){case 33:break;case 60:B$(a);c=a.bg.data[a.x];e=1;break b;case 61:a.n=(-536870872);B$(a);break b;case 62:a.n=(-33554392);B$(a);break b;default:f=AK_(a);a.n=f;if(f<256){a.g5=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.g5=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B$(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B$(a);break a;case 63:a.n=c|(-1073741824);B$(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);XX(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.fo=AHl(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.x>=(a.bg.data.length-2|0)?(-1):LY(a);c:{a.n=c;switch(c){case -1:N(Cl(C(21),FU(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AGk(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fr!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cl(C(21),FU(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.fo=Sb(EC(a.bg,
a.j1,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.vi=a.fr;a.fr=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.x;d=a.bg.data;if(c>=(d.length-2|0))N(Cl(C(21),FU(a),a.x));a.n=d[B$(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=YD(a,4);break a;case 120:a.n=YD(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AJT(a);h=0;if(a.n==80)h=1;try{a.fo=Sb(g,h);}catch($$e){$$je=EV($$e);if($$je instanceof MJ){N(Cl(C(21),FU(a),a.x));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AJT(a){var b,c,d,e,f,g;b=new K;GF(b,10);c=a.x;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EC(d,B$(a),1);f=new K;M(f);H(H(f,C(473)),b);return L(f);}B$(a);c=0;a:{while(true){g=a.x;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B$(a)];if(c==125)break a;BM(b,c);}}if(c!=125)N(Cl(C(21),a.bM,a.x));}if(!b.L)N(Cl(C(21),a.bM,a.x));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(473)),f);return L(b);}b:{c:{if(J(f)>3){if(Nw(f,C(473)))break c;if(Nw(f,C(474)))break c;}break b;}f=Dw(f,2);}return f;}
function AHl(a,b){var c,d,e,f,g,$$je;c=new K;GF(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bg.data;if(f>=g.length)break a;b=g[B$(a)];if(b==125)break a;if(b==44&&d<0)try{d=KH(Ee(c),10);AHq(c,0,AIo(c));continue;}catch($$e){$$je=EV($$e);if($$je instanceof Dv){break;}else{throw $$e;}}BM(c,b&65535);}N(Cl(C(21),a.bM,a.x));}if(b!=125)N(Cl(C(21),a.bM,a.x));if(c.L>0)b:{try{e=KH(Ee(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EV($$e);if($$je instanceof Dv){}else{throw $$e;}}N(Cl(C(21),a.bM,a.x));}else if
(d<0)N(Cl(C(21),a.bM,a.x));if((d|e|(e-d|0))<0)N(Cl(C(21),a.bM,a.x));b=a.x;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B$(a);break c;case 63:a.n=(-1073741701);B$(a);break c;default:}a.n=(-536870789);}c=new Wv;c.fJ=d;c.fI=e;return c;}
function FU(a){return a.bM;}
function DF(a){return !a.bk&&!a.n&&a.x==a.zl&&!G6(a)?1:0;}
function Nr(b){return b<0?0:1;}
function Fg(a){return !DF(a)&&!G6(a)&&Nr(a.bk)?1:0;}
function Xx(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function ACa(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function Sy(b){return b<=56319&&b>=55296?1:0;}
function Qi(b){return b<=57343&&b>=56320?1:0;}
function YD(a,b){var c,d,e,f,$$je;c=new K;GF(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BL(e,b);if(f>=0)break;if(a.x>=d)break;BM(c,a.bg.data[B$(a)]);e=e+1|0;}if(!f)a:{try{b=KH(Ee(c),16);}catch($$e){$$je=EV($$e);if($$je instanceof Dv){break a;}else{throw $$e;}}return b;}N(Cl(C(21),a.bM,a.x));}
function AGk(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=ABT(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B$(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=ABT(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B$(a);c=c+1|0;}}return f;}N(Cl(C(21),a.bM,a.x));}
function AK_(a){var b,c,d,e;b=1;c=a.g5;a:while(true){d=a.x;e=a.bg.data;if(d>=e.length)N(Cl(C(21),a.bM,d));b:{c:{switch(e[d]){case 41:B$(a);return c|256;case 45:if(!b)N(Cl(C(21),a.bM,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B$(a);}B$(a);return c;}
function B$(a){var b,c,d,e,f;b=a.x;a.j1=b;if(!(a.g5&4))a.x=b+1|0;else{c=a.bg.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&RG(a.bg.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.j1;}
function AKK(b){return A9s.Ib(b);}
function LY(a){var b,c,d,e;b=a.bg.data[B$(a)];if(CR(b)){c=a.j1+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(Dl(e)){B$(a);return EN(b,e);}}}return b;}
function PQ(a){return a.dr;}
function Ka(){var a=this;BS.call(a);a.Dl=null;a.C6=null;a.sS=0;}
function Cl(a,b,c){var d=new Ka();MO(d,a,b,c);return d;}
function MO(a,b,c,d){X(a);a.sS=(-1);a.Dl=b;a.C6=c;a.sS=d;}
function PF(){var a=this;B.call(a);a.v2=null;a.v3=0.0;}
function AU9(a){var b,c;b=a.v2;c=a.v3;b.jc.nE(c);}
function AD6(){var a=this;B.call(a);a.og=null;a.rU=0;a.i$=null;}
function AWU(a,b){var c,d;c=Bu();b=KQ(b.o6);d=new K;M(d);H(H(d,C(475)),b);Bk(c,L(d));}
function ANf(a,b){var c,d,e;ADA(b);c=Bu();d=Q5(b.h3);e=new K;M(e);H(H(e,C(476)),d);Bk(c,L(e));c=ABf(a,b.h3);if(c!==null&&(c.ht!=60086?0:1))c.eq.g();if(Jg(b)>0){EI(a.og);Xu(a.i$);}}
function ANK(a,b){var c,d,e;c=Bu();d=Q5(b.h3);e=new K;M(e);H(H(e,C(477)),d);Bk(c,L(e));if(Jg(b)>0){EI(a.og);Xu(a.i$);}Li(b);c=ABf(a,b.h3);if(c!==null&&I7(c))c.eq.g();}
function ABf(a,b){var c,d,e,f;c=!a.rU?a.i$.sJ:a.i$.wL;if(c===null)return null;d=b.hv.data;e=d.length;f=0;while(true){if(f>=e)return Rf(c,Hk(b));c=Rf(c,d[f]);if(c===null)break;f=f+1|0;}return null;}
var R0=G(CZ);
function AVc(a,b,c,d){var e;e=a.ek;BX(d,e,b-DG(d,e)|0);return a.e.c(b,c,d);}
function A0K(a,b){return 0;}
var ADZ=G(CZ);
function AWm(a,b,c,d){return b;}
var QO=G(CZ);
function AMC(a,b,c,d){if(DG(d,a.ek)!=b)b=(-1);return b;}
function SH(){CZ.call(this);this.w0=0;}
function AVf(a,b,c,d){var e;e=a.ek;BX(d,e,b-DG(d,e)|0);a.w0=b;return b;}
function AZR(a,b){return 0;}
var F4=G(CZ);
function ATC(a,b,c,d){if(d.l5!=1&&b!=d.y)return (-1);d.ku=1;M0(d,0,b);return b;}
function Cb(){BQ.call(this);this.bH=0;}
function D0(a){B8(a);a.bH=1;}
function A2W(a,b,c,d){var e;if((b+a.b8()|0)>d.y){d.dL=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function A1n(a){return a.bH;}
function APh(a,b){return 1;}
var AG8=G(Cb);
function H2(a){var b=new AG8();AYY(b,a);return b;}
function AYY(a,b){NF(a,b);a.bH=1;a.jN=1;a.bH=0;}
function A03(a,b,c){return 0;}
function AXa(a,b,c,d){var e,f,g;e=d.y;f=d.c_;while(true){g=BL(b,e);if(g>0)return (-1);if(g<0&&Dl(P(c,b))&&b>f&&CR(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AWi(a,b,c,d,e){var f,g;f=e.y;g=e.c_;while(true){if(c<b)return (-1);if(c<f&&Dl(P(d,c))&&c>g&&CR(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AVe(a,b){return 0;}
function B9(){var a=this;BQ.call(a);a.bI=null;a.eW=null;a.bd=0;}
function A3O(a,b){var c=new B9();F5(c,a,b);return c;}
function F5(a,b,c){B8(a);a.bI=b;a.eW=c;a.bd=c.ek;}
function AOw(a,b,c,d){var e,f,g,h;if(a.bI===null)return (-1);e=Gr(d,a.bd);DZ(d,a.bd,b);f=a.bI.m;g=0;while(true){if(g>=f){DZ(d,a.bd,e);return (-1);}h=(Bv(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARu(a,b){a.eW.e=b;}
function AYC(a,b){var c;a:{c=a.bI;if(c!==null){c=B1(c);while(true){if(!B4(c))break a;if(!(B6(c)).bZ(b))continue;else return 1;}}}return 0;}
function ARW(a,b){return I6(b,a.bd)>=0&&Gr(b,a.bd)==I6(b,a.bd)?0:1;}
function AMY(a){var b,c,d,e;a.ct=1;b=a.eW;if(b!==null&&!b.ct)Kp(b);a:{b=a.bI;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bv(a.bI,d);e=b.gv();if(e===null)e=b;else{b.ct=1;EL(a.bI,d);ZM(a.bI,d,e);}if(!e.ct)e.eR();d=d+1|0;}}}if(a.e!==null)Kp(a);}
var Kl=G(B9);
function ARi(a,b,c,d){var e,f,g,h;e=DG(d,a.bd);BX(d,a.bd,b);f=a.bI.m;g=0;while(true){if(g>=f){BX(d,a.bd,e);return (-1);}h=(Bv(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A0p(a,b){return !DG(b,a.bd)?0:1;}
var Ea=G(Kl);
function AWH(a,b,c,d){var e,f,g;e=DG(d,a.bd);BX(d,a.bd,b);f=a.bI.m;g=0;while(g<f){if((Bv(a.bI,g)).c(b,c,d)>=0)return a.e.c(a.eW.w0,c,d);g=g+1|0;}BX(d,a.bd,e);return (-1);}
function A0i(a,b){a.e=b;}
var Wl=G(Ea);
function ARs(a,b,c,d){var e,f;e=a.bI.m;f=0;while(f<e){if((Bv(a.bI,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ATr(a,b){return 0;}
var ACK=G(Ea);
function AMq(a,b,c,d){var e,f;e=a.bI.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bv(a.bI,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A1q(a,b){return 0;}
var Zz=G(Ea);
function AMW(a,b,c,d){var e,f,g,h;e=a.bI.m;f=d.kx?0:d.c_;a:{g=a.e.c(b,c,d);if(g>=0){BX(d,a.bd,b);h=0;while(true){if(h>=e)break a;if((Bv(a.bI,h)).cx(f,b,c,d)>=0){BX(d,a.bd,(-1));return g;}h=h+1|0;}}}return (-1);}
function A29(a,b){return 0;}
var S6=G(Ea);
function AUU(a,b,c,d){var e,f;e=a.bI.m;BX(d,a.bd,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bv(a.bI,f)).cx(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0z(a,b){return 0;}
function HR(){B9.call(this);this.dh=null;}
function A5b(a,b){var c=new HR();AE6(c,a,b);return c;}
function AE6(a,b,c){B8(a);a.dh=b;a.eW=c;a.bd=c.ek;}
function ALI(a,b,c,d){var e,f;e=Gr(d,a.bd);DZ(d,a.bd,b);f=a.dh.c(b,c,d);if(f>=0)return f;DZ(d,a.bd,e);return (-1);}
function AQa(a,b,c,d){var e;e=a.dh.cm(b,c,d);if(e>=0)DZ(d,a.bd,e);return e;}
function A0N(a,b,c,d,e){var f;f=a.dh.cx(b,c,d,e);if(f>=0)DZ(e,a.bd,f);return f;}
function AYA(a,b){return a.dh.bZ(b);}
function AZO(a){var b;b=new O5;AE6(b,a.dh,a.eW);a.e=b;return b;}
function AT1(a){var b;a.ct=1;b=a.eW;if(b!==null&&!b.ct)Kp(b);b=a.dh;if(b!==null&&!b.ct){b=b.gv();if(b!==null){a.dh.ct=1;a.dh=b;}a.dh.eR();}}
function Kw(){Dg.call(this);this.o6=null;}
var G3=G();
function Y(){var a=this;G3.call(a);a.bi=0;a.cs=0;a.N=null;a.mb=null;a.mG=null;a.P=0;}
var A9t=null;function Qa(){Qa=Bo(Y);ANg();}
function BA(a){var b;Qa();b=new ADp;b.E=BO(64);a.N=b;}
function AVN(a){return null;}
function AVt(a){return a.N;}
function AJL(a){var b,c,d,e,f;if(!a.cs)b=Ih(a.N,0)>=2048?0:1;else{a:{c=a.N;b=0;d=c.bu;if(b<d){e=c.E.data;f=(e[0]^(-1))>>>0|0;if(f)b=I1(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I1(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AXE(a){return a.P;}
function A1i(a){return a;}
function AEy(a){var b,c;if(a.mG===null){b=a.fQ();c=new UY;c.Fd=a;c.xa=b;BA(c);a.mG=c;EM(c,a.cs);}return a.mG;}
function Jw(a){var b,c;if(a.mb===null){b=a.fQ();c=new UW;c.Do=a;c.AL=b;c.vr=a;BA(c);a.mb=c;EM(c,a.bi);a.mb.P=a.P;}return a.mb;}
function A2r(a){return 0;}
function EM(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cs=a.cs?0:1;}if(!a.P)a.P=1;return a;}
function AN6(a){return a.bi;}
function Np(b,c){Qa();return b.o(c);}
function JW(b,c){var d,e;Qa();if(b.dU()!==null&&c.dU()!==null){b=b.dU();c=c.dU();d=Be(b.E.data.length,c.E.data.length);e=0;a:{while(e<d){if(b.E.data[e]&c.E.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Sb(b,c){var d,e,f;Qa();d=0;while(true){ASk();e=A9u.data;if(d>=e.length){f=new MJ;Bn(f,C(21));f.DX=C(21);f.Fi=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AKo(e[1],c);}
function ANg(){var b;b=new He;ASk();A9t=b;}
function AEZ(){var a=this;Y.call(a);a.pE=0;a.q0=0;a.hW=0;a.nm=0;a.ev=0;a.gr=0;a.J=null;a.bD=null;}
function DH(){var a=new AEZ();AUs(a);return a;}
function A1T(a,b){var c=new AEZ();AM8(c,a,b);return c;}
function AUs(a){BA(a);a.J=A2_();}
function AM8(a,b,c){BA(a);a.J=A2_();a.pE=b;a.q0=c;}
function CH(a,b){a:{if(a.pE){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ev){OB(a.J,Jy(b&65535));break a;}LO(a.J,Jy(b&65535));break a;}if(a.q0&&b>128){a.hW=1;b=GY(GX(b));}}}if(!(!Sy(b)&&!Qi(b))){if(a.nm)OB(a.N,b-55296|0);else LO(a.N,b-55296|0);}if(a.ev)OB(a.J,b);else LO(a.J,b);if(!a.P&&Ml(b))a.P=1;return a;}
function ALb(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(a.nm){if(!b.cs)Gd(a.N,b.fQ());else Dr(a.N,b.fQ());}else if(!b.cs)Gv(a.N,b.fQ());else{Go(a.N,b.fQ());Dr(a.N,b.fQ());a.cs=a.cs?0:1;a.nm=1;}if(!a.gr&&b.dU()!==null){if(a.ev){if(!b.bi)Gd(a.J,b.dU());else Dr(a.J,b.dU());}else if(!b.bi)Gv(a.J,b.dU());else{Go(a.J,b.dU());Dr(a.J,b.dU());a.bi=a.bi?0:1;a.ev=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new XO;e.Em=a;e.Bu=c;e.u_=d;e.u3=b;BA(e);a.bD=e;}else{e=new XQ;e.Fv=a;e.th=c;e.yR=d;e.ys=b;BA(e);a.bD=e;}}else{if(c&&!a.ev
&&Ou(a.J)){d=new XL;d.EQ=a;d.yV=b;BA(d);a.bD=d;}else if(!c){d=new XJ;d.pc=a;d.oC=c;d.xG=b;BA(d);a.bD=d;}else{d=new XK;d.nO=a;d.my=c;d.u6=b;BA(d);a.bD=d;}a.gr=1;}}return a;}
function Ca(a,b,c){var d,e,f,g,h;if(b>c){d=new BS;X(d);N(d);}a:{b:{if(!a.pE){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CH(a,b);b=b+1|0;}}if(!a.ev)IO(a.J,b,c+1|0);else{d=a.J;c=c+1|0;if(b>c){d=new BI;X(d);N(d);}e=d.bu;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.E.data;h[g]=h[g]&(JT(d,b)|IH(d,f));}else{h=d.E.data;h[g]=h[g]&JT(d,b);e=g+1|0;while(e<c){d.E.data[e]=0;e=e+1|0;}if(f&31){h=d.E.data;h[c]=h[c]&IH(d,f);}}Hg(d);}}}}return a;}
function AH1(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hW)a.hW=1;c=a.cs;if(!(c^b.cs)){if(!c)Gv(a.N,b.N);else Dr(a.N,b.N);}else if(c)Gd(a.N,b.N);else{Go(a.N,b.N);Dr(a.N,b.N);a.cs=1;}if(!a.gr&&C4(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Gv(a.J,C4(b));else Dr(a.J,C4(b));}else if(c)Gd(a.J,C4(b));else{Go(a.J,C4(b));Dr(a.J,C4(b));a.bi=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P3;e.Cf=a;e.ux=c;e.AV=d;e.vy=b;BA(e);a.bD=e;}else{e=new Qo;e.Cu=a;e.Bf=c;e.qC=d;e.q2=b;BA(e);a.bD=e;}}else{if(!a.ev&&Ou(a.J)){if(!c){d=new XM;d.Fw
=a;d.ss=b;BA(d);a.bD=d;}else{d=new XN;d.Eq=a;d.A9=b;BA(d);a.bD=d;}}else if(!c){d=new XR;d.uB=a;d.tq=b;d.yT=c;BA(d);a.bD=d;}else{d=new XS;d.tJ=a;d.tQ=b;d.zK=c;BA(d);a.bD=d;}a.gr=1;}}}
function U$(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hW)a.hW=1;c=a.cs;if(!(c^b.cs)){if(!c)Dr(a.N,b.N);else Gv(a.N,b.N);}else if(!c)Gd(a.N,b.N);else{Go(a.N,b.N);Dr(a.N,b.N);a.cs=0;}if(!a.gr&&C4(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dr(a.J,C4(b));else Gv(a.J,C4(b));}else if(!c)Gd(a.J,C4(b));else{Go(a.J,C4(b));Dr(a.J,C4(b));a.bi=0;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P5;e.El=a;e.Ah=c;e.w$=d;e.te=b;BA(e);a.bD=e;}else{e=new P6;e.Eu=a;e.zX=c;e.wD=d;e.Ad=b;BA(e);a.bD=e;}}else{if(!a.ev&&Ou(a.J)){if(!c){d=new P1;d.Cx
=a;d.x3=b;BA(d);a.bD=d;}else{d=new P2;d.Ft=a;d.sf=b;BA(d);a.bD=d;}}else if(!c){d=new P7;d.B5=a;d.Bq=b;d.tL=c;BA(d);a.bD=d;}else{d=new P0;d.tK=a;d.z3=b;d.y4=c;BA(d);a.bD=d;}a.gr=1;}}}
function Db(a,b){var c;c=a.bD;if(c!==null)return a.bi^c.o(b);return a.bi^DW(a.J,b);}
function C4(a){if(!a.gr)return a.J;return null;}
function AW7(a){return a.N;}
function ATa(a){var b,c;if(a.bD!==null)return a;b=C4(a);c=new P4;c.Ec=a;c.lr=b;BA(c);return EM(c,a.bi);}
function AZb(a){var b,c,d;b=new K;M(b);c=Ih(a.J,0);while(c>=0){JX(b,HP(c));BM(b,124);c=Ih(a.J,c+1|0);}d=b.L;if(d>0)UM(b,d-1|0);return L(b);}
function AN9(a){return a.hW;}
function MJ(){var a=this;Bw.call(a);a.DX=null;a.Fi=null;}
function En(){BQ.call(this);this.M=null;}
function Du(a,b,c,d){NF(a,c);a.M=b;a.jN=d;}
function A21(a){return a.M;}
function ASv(a,b){return !a.M.bZ(b)&&!a.e.bZ(b)?0:1;}
function A1U(a,b){return 1;}
function AQr(a){var b;a.ct=1;b=a.e;if(b!==null&&!b.ct){b=b.gv();if(b!==null){a.e.ct=1;a.e=b;}a.e.eR();}b=a.M;if(b!==null){if(!b.ct){b=b.gv();if(b!==null){a.M.ct=1;a.M=b;}a.M.eR();}else if(b instanceof HR&&b.eW.oV)a.M=b.e;}}
function Dc(){En.call(this);this.be=null;}
function A34(a,b,c){var d=new Dc();Fd(d,a,b,c);return d;}
function Fd(a,b,c,d){Du(a,b,c,d);a.be=b;}
function AUV(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b8()|0)<=d.y){f=a.be.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.b8()|0;e=e+(-1)|0;}return f;}
function FO(){Dc.call(this);this.kP=null;}
function A4K(a,b,c,d){var e=new FO();Sd(e,a,b,c,d);return e;}
function Sd(a,b,c,d,e){Fd(a,c,d,e);a.kP=b;}
function AVC(a,b,c,d){var e,f,g,h,i;e=a.kP;f=e.fJ;g=e.fI;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b8()|0)>d.y)break a;i=a.be.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.b8()|0;h=h+(-1)|0;}return i;}if((b+a.be.b8()|0)>d.y){d.dL=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C0=G(En);
function AU6(a,b,c,d){var e;if(!a.M.I(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E7=G(Dc);
function AYQ(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AUA(a,b){a.e=b;a.M.T(b);}
var UZ=G(Dc);
function A2T(a,b,c,d){while((b+a.be.b8()|0)<=d.y&&a.be.bz(b,c)>0){b=b+a.be.b8()|0;}return a.e.c(b,c,d);}
function AQR(a,b,c,d){var e,f,g;e=a.e.cm(b,c,d);if(e<0)return (-1);f=e-a.be.b8()|0;while(f>=b&&a.be.bz(f,c)>0){g=f-a.be.b8()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nQ=null;a.m9=null;}
function AKo(a,b){if(!b&&a.nQ===null)a.nQ=a.G();else if(b&&a.m9===null)a.m9=EM(a.G(),1);if(b)return a.m9;return a.nQ;}
var Dv=G(BS);
function Wv(){var a=this;G3.call(a);a.fJ=0;a.fI=0;}
function AZh(a){var b,c,d,e,f;b=a.fJ;c=a.fI;d=c!=2147483647?NX(c):C(21);e=new K;M(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return L(e);}
var Xy=G(BQ);
function APz(a,b,c,d){return b;}
function AZN(a,b){return 0;}
function ADp(){var a=this;B.call(a);a.E=null;a.bu=0;}
function A2_(){var a=new ADp();AV9(a);return a;}
function AV9(a){a.E=BO(0);}
function LO(a,b){var c,d;c=b/32|0;if(b>=a.bu){JY(a,c+1|0);a.bu=b+1|0;}d=a.E.data;d[c]=d[c]|1<<(b%32|0);}
function IO(a,b,c){var d,e,f,g,h;d=BL(b,c);if(d>0){e=new BI;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bu){JY(a,f+1|0);a.bu=c;}if(d==f){g=a.E.data;g[d]=g[d]|IH(a,b)&JT(a,c);}else{g=a.E.data;g[d]=g[d]|IH(a,b);h=d+1|0;while(h<f){a.E.data[h]=(-1);h=h+1|0;}if(c&31){g=a.E.data;g[f]=g[f]|JT(a,c);}}}
function IH(a,b){return (-1)<<(b%32|0);}
function JT(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function OB(a,b){var c,d,e,f;c=b/32|0;d=a.E.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bu-1|0))Hg(a);}}
function DW(a,b){var c,d;c=b/32|0;d=a.E.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ih(a,b){var c,d,e,f;c=a.bu;if(b>=c)return (-1);d=b/32|0;e=a.E.data;f=e[d]>>>(b%32|0)|0;if(f)return I1(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I1(e[f])|0;f=f+1|0;}return (-1);}
function JY(a,b){var c;c=a.E.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.E=Jf(a.E,c);}
function Hg(a){var b,c,d;b=(a.bu+31|0)/32|0;a.bu=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Xb(a.E.data[c]);if(d<32)break;c=c+(-1)|0;a.bu=a.bu-32|0;}a.bu=a.bu-d|0;}}
function Dr(a,b){var c,d,e,f;c=Be(a.E.data.length,b.E.data.length);d=0;while(d<c){e=a.E.data;e[d]=e[d]&b.E.data[d];d=d+1|0;}while(true){f=a.E.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bu=Be(a.bu,b.bu);Hg(a);}
function Gd(a,b){var c,d,e;c=Be(a.E.data.length,b.E.data.length);d=0;while(d<c){e=a.E.data;e[d]=e[d]&(b.E.data[d]^(-1));d=d+1|0;}Hg(a);}
function Gv(a,b){var c,d,e;c=Bd(a.bu,b.bu);a.bu=c;JY(a,(c+31|0)/32|0);c=Be(a.E.data.length,b.E.data.length);d=0;while(d<c){e=a.E.data;e[d]=e[d]|b.E.data[d];d=d+1|0;}}
function Go(a,b){var c,d,e;c=Bd(a.bu,b.bu);a.bu=c;JY(a,(c+31|0)/32|0);c=Be(a.E.data.length,b.E.data.length);d=0;while(d<c){e=a.E.data;e[d]=e[d]^b.E.data[d];d=d+1|0;}Hg(a);}
function Ou(a){return a.bu?0:1;}
function OW(){var a=this;B9.call(a);a.sk=null;a.Eb=0;}
function Q_(){var a=this;B9.call(a);a.n7=null;a.pP=null;}
function AGq(a,b){var c=new Q_();AHF(c,a,b);return c;}
function AHF(a,b,c){B8(a);a.n7=b;a.pP=c;}
function AMc(a,b,c,d){var e,f,g,h,i;e=a.n7.c(b,c,d);if(e<0)a:{f=a.pP;g=d.c_;e=d.y;h=b+1|0;e=BL(h,e);if(e>0){d.dL=1;e=(-1);}else{i=P(c,b);if(!f.sk.o(i))e=(-1);else{if(CR(i)){if(e<0&&Dl(P(c,h))){e=(-1);break a;}}else if(Dl(i)&&b>g&&CR(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AZG(a,b){a.e=b;a.pP.e=b;a.n7.T(b);}
function AMI(a,b){return 1;}
function AMt(a,b){return 1;}
function D4(){var a=this;B9.call(a);a.d6=null;a.CZ=0;}
function AYj(a){var b=new D4();ABK(b,a);return b;}
function ABK(a,b){B8(a);a.d6=b.lY();a.CZ=b.bi;}
function AW1(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.o(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jp(g,f)&&a.o(EN(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOl(a,b){return a.d6.o(b);}
function AL$(a,b){if(b instanceof Eg)return Np(a.d6,b.gV);if(b instanceof EJ)return Np(a.d6,b.dH);if(b instanceof D4)return JW(a.d6,b.d6);if(!(b instanceof ED))return 1;return JW(a.d6,b.gn);}
function APt(a){return a.d6;}
function A1c(a,b){a.e=b;}
function ANZ(a,b){return 1;}
var MG=G(D4);
function APi(a,b){return a.d6.o(GY(GX(b)));}
function AET(){var a=this;Cb.call(a);a.yy=null;a.CI=0;}
function AOI(a){var b=new AET();AQ2(b,a);return b;}
function AQ2(a,b){D0(a);a.yy=b.lY();a.CI=b.bi;}
function AYn(a,b,c){return !a.yy.o(FG(Fk(P(c,b))))?(-1):1;}
function ED(){var a=this;Cb.call(a);a.gn=null;a.C_=0;}
function AS7(a){var b=new ED();ARK(b,a);return b;}
function ARK(a,b){D0(a);a.gn=b.lY();a.C_=b.bi;}
function Wc(a,b,c){return !a.gn.o(P(c,b))?(-1):1;}
function ARw(a,b){if(b instanceof EJ)return Np(a.gn,b.dH);if(b instanceof ED)return JW(a.gn,b.gn);if(!(b instanceof D4)){if(!(b instanceof Eg))return 1;return 0;}return JW(a.gn,b.d6);}
function XW(){var a=this;B9.call(a);a.i_=null;a.p3=null;a.kM=0;}
function A1F(a,b){var c=new XW();AU7(c,a,b);return c;}
function AU7(a,b,c){B8(a);a.i_=b;a.kM=c;}
function AQg(a,b){a.e=b;}
function Rj(a){if(a.p3===null)a.p3=Hn(a.i_);return a.p3;}
function ALt(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BO(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DX([k,l]):DX([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kM;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.i_.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kM==3){k=f[0];m=a.i_.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kM==2){b=f[0];m=a.i_.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AVU(a,b){return b instanceof XW&&!Bj(Rj(b),Rj(a))?0:1;}
function ATh(a,b){return 1;}
function EJ(){Cb.call(this);this.dH=0;}
function AE8(a){var b=new EJ();ARO(b,a);return b;}
function ARO(a,b){D0(a);a.dH=b;}
function AYb(a){return 1;}
function AOF(a,b,c){return a.dH!=P(c,b)?(-1):1;}
function ANL(a,b,c,d){var e,f,g;if(!(c instanceof BK))return ID(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JV(c,a.dH,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function APv(a,b,c,d,e){var f;if(!(d instanceof BK))return IK(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hs(d,a.dH,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AS8(a,b){if(b instanceof EJ)return b.dH!=a.dH?0:1;if(!(b instanceof ED)){if(b instanceof D4)return b.o(a.dH);if(!(b instanceof Eg))return 1;return 0;}return Wc(b,0,Vi(a.dH))<=0?0:1;}
function AHt(){Cb.call(this);this.wt=0;}
function A0k(a){var b=new AHt();AY9(b,a);return b;}
function AY9(a,b){D0(a);a.wt=FG(Fk(b));}
function AUH(a,b,c){return a.wt!=FG(Fk(P(c,b)))?(-1):1;}
function AEh(){var a=this;Cb.call(a);a.vE=0;a.w7=0;}
function AWd(a){var b=new AEh();ASh(b,a);return b;}
function ASh(a,b){D0(a);a.vE=b;a.w7=Jy(b);}
function ALB(a,b,c){return a.vE!=P(c,b)&&a.w7!=P(c,b)?(-1):1;}
function FT(){var a=this;B9.call(a);a.jJ=0;a.m2=null;a.mv=null;a.mo=0;}
function A5J(a,b){var c=new FT();PI(c,a,b);return c;}
function PI(a,b,c){B8(a);a.jJ=1;a.mv=b;a.mo=c;}
function A2z(a,b){a.e=b;}
function ARh(a,b,c,d){var e,f,g,h,i,j,k,l;e=BO(4);f=d.y;if(b>=f)return (-1);g=Lg(a,b,c,f);h=b+a.jJ|0;i=AKK(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dh(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lg(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AKK(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jJ|0;if(h>=f){b=k;break a;}g=Lg(a,h,c,f);b=k;}}}if(b!=a.mo)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.mv.data[g])break;g=g+1|0;}return (-1);}
function U8(a){var b,c;if(a.m2===null){b=new K;M(b);c=0;while(c<a.mo){JX(b,HP(a.mv.data[c]));c=c+1|0;}a.m2=L(b);}return a.m2;}
function Lg(a,b,c,d){var e,f,g;a.jJ=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jp(e,f)){g=B7(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CR(g[0])&&Dl(g[1])?EN(g[0],g[1]):g[0];a.jJ=2;}}return e;}
function APA(a,b){return b instanceof FT&&!Bj(U8(b),U8(a))?0:1;}
function A0j(a,b){return 1;}
var Vs=G(FT);
var ABg=G(FT);
var V_=G(C0);
function AWr(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var YB=G(C0);
function AY5(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gx=G(C0);
function A1a(a,b,c,d){var e;if(!a.M.I(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A16(a,b){a.e=b;a.M.T(b);}
var Qy=G(Gx);
function APr(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AZj(a,b){a.e=b;}
function Gi(){var a=this;C0.call(a);a.g2=null;a.dN=0;}
function A9v(a,b,c,d,e){var f=new Gi();MF(f,a,b,c,d,e);return f;}
function MF(a,b,c,d,e,f){Du(a,c,d,e);a.g2=b;a.dN=f;}
function A26(a,b,c,d){var e,f;e=Wt(d,a.dN);if(!a.M.I(d))return a.e.c(b,c,d);if(e>=a.g2.fI)return a.e.c(b,c,d);f=a.dN;e=e+1|0;ET(d,f,e);f=a.M.c(b,c,d);if(f>=0){ET(d,a.dN,0);return f;}f=a.dN;e=e+(-1)|0;ET(d,f,e);if(e>=a.g2.fJ)return a.e.c(b,c,d);ET(d,a.dN,0);return (-1);}
var O$=G(Gi);
function AOZ(a,b,c,d){var e,f,g;e=0;f=a.g2.fI;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.g2.fJ)return (-1);return a.e.c(b,c,d);}
var RV=G(C0);
function AT7(a,b,c,d){var e;if(!a.M.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Zc=G(Gx);
function AMJ(a,b,c,d){var e;if(!a.M.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var TJ=G(Gi);
function AVk(a,b,c,d){var e,f,g;e=Wt(d,a.dN);if(!a.M.I(d))return a.e.c(b,c,d);f=a.g2;if(e>=f.fI){ET(d,a.dN,0);return a.e.c(b,c,d);}if(e<f.fJ){ET(d,a.dN,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){ET(d,a.dN,0);return g;}ET(d,a.dN,e+1|0);g=a.M.c(b,c,d);}return g;}
var RW=G(En);
function A2X(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cx(b,e,c,d);return a.e.c(b,c,d);}
function ASU(a,b,c,d){var e;e=d.y;if(a.e.cx(b,e,c,d)>=0)return b;return (-1);}
function XF(){En.call(this);this.m7=null;}
function ARx(a,b,c,d){var e,f;e=d.y;f=ABX(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cx(b,e,c,d);return a.e.c(b,c,d);}
function ALv(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cm(b,c,d);if(f<0)return (-1);g=ABX(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cx(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.m7.iS(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ABX(a,b,c,d){while(true){if(b>=c)return (-1);if(a.m7.iS(P(d,b)))break;b=b+1|0;}return b;}
var Fx=G();
var A9w=null;var A9x=null;function Yl(b){var c;if(!(b&1)){c=A9x;if(c!==null)return c;c=new ACg;A9x=c;return c;}c=A9w;if(c!==null)return c;c=new ACf;A9w=c;return c;}
var AEe=G(Dc);
function AL2(a,b,c,d){var e;a:{while(true){if((b+a.be.b8()|0)>d.y)break a;e=a.be.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var UV=G(E7);
function AQG(a,b,c,d){var e;if((b+a.be.b8()|0)<=d.y){e=a.be.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var X$=G(FO);
function A0Q(a,b,c,d){var e,f,g,h,i;e=a.kP;f=e.fJ;g=e.fI;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b8()|0)>d.y)break a;i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.b8()|0)>d.y){d.dL=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Y_=G(Dc);
function ARt(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.b8()|0)<=d.y){e=a.be.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ABs=G(E7);
function AL8(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var RJ=G(FO);
function A05(a,b,c,d){var e,f,g,h,i,j;e=a.kP;f=e.fJ;g=e.fI;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.b8()|0)<=d.y){i=a.be.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b8()|0)>d.y){d.dL=1;return (-1);}j=a.be.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Le=G(BQ);
function AYB(a,b,c,d){if(b&&!(d.gs&&b==d.c_))return (-1);return a.e.c(b,c,d);}
function AX3(a,b){return 0;}
function AFc(){BQ.call(this);this.ve=0;}
function A1w(a){var b=new AFc();APl(b,a);return b;}
function APl(a,b){B8(a);a.ve=b;}
function AVL(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kx?0:d.c_;return (e!=32&&!Zf(a,e,b,g,c)?0:1)^(f!=32&&!Zf(a,f,b-1|0,g,c)?0:1)^a.ve?(-1):a.e.c(b,c,d);}
function AVT(a,b){return 0;}
function Zf(a,b,c,d,e){var f;if(!KG(b)&&b!=95){a:{if(CD(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KG(f))return 0;if(CD(f)!=6)return 1;}}return 1;}return 0;}
var XC=G(BQ);
function APk(a,b,c,d){if(b!=d.iX)return (-1);return a.e.c(b,c,d);}
function AUt(a,b){return 0;}
function Vm(){BQ.call(this);this.g6=0;}
function A4b(a){var b=new Vm();AKD(b,a);return b;}
function AKD(a,b){B8(a);a.g6=b;}
function AZ8(a,b,c,d){var e,f,g;e=!d.gs?J(c):d.y;if(b>=e){BX(d,a.g6,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BX(d,a.g6,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BX(d,a.g6,0);return a.e.c(b,c,d);}
function AWj(a,b){var c;c=!DG(b,a.g6)?0:1;BX(b,a.g6,(-1));return c;}
var AC9=G(BQ);
function AZE(a,b,c,d){if(b<(d.kx?J(c):d.y))return (-1);d.dL=1;d.E9=1;return a.e.c(b,c,d);}
function AUG(a,b){return 0;}
function WO(){BQ.call(this);this.y8=null;}
function AWe(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.gs&&b==d.c_)break a;if(a.y8.z0(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOs(a,b){return 0;}
var AHf=G(B9);
function A4i(){var a=new AHf();AZu(a);return a;}
function AZu(a){B8(a);}
function AT$(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dL=1;return (-1);}g=P(c,b);if(CR(g)){h=b+2|0;if(h<=e&&Jp(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AVW(a,b){a.e=b;}
function AZp(a){return (-2147483602);}
function AVV(a,b){return 1;}
function AEY(){B9.call(this);this.ns=null;}
function A3$(a){var b=new AEY();AM2(b,a);return b;}
function AM2(a,b){B8(a);a.ns=b;}
function AZy(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dL=1;return (-1);}g=P(c,b);if(CR(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jp(g,h))return a.ns.iS(EN(g,h))?(-1):a.e.c(b,c,d);}}return a.ns.iS(g)?(-1):a.e.c(f,c,d);}
function A0G(a,b){a.e=b;}
function ALh(a){return (-2147483602);}
function AUj(a,b){return 1;}
function AKI(){BQ.call(this);this.jF=0;}
function A3S(a){var b=new AKI();AXp(b,a);return b;}
function AXp(a,b){B8(a);a.jF=b;}
function APE(a,b,c,d){var e;e=!d.gs?J(c):d.y;if(b>=e){BX(d,a.jF,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BX(d,a.jF,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AXo(a,b){var c;c=!DG(b,a.jF)?0:1;BX(b,a.jF,(-1));return c;}
function AJO(){BQ.call(this);this.iL=0;}
function A3G(a){var b=new AJO();AXG(b,a);return b;}
function AXG(a,b){B8(a);a.iL=b;}
function ARd(a,b,c,d){if((!d.gs?J(c)-b|0:d.y-b|0)<=0){BX(d,a.iL,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BX(d,a.iL,1);return a.e.c(b+1|0,c,d);}
function AXi(a,b){var c;c=!DG(b,a.iL)?0:1;BX(b,a.iL,(-1));return c;}
function AH0(){BQ.call(this);this.gG=0;}
function A3n(a){var b=new AH0();A28(b,a);return b;}
function A28(a,b){B8(a);a.gG=b;}
function AXY(a,b,c,d){var e,f,g;e=!d.gs?J(c)-b|0:d.y-b|0;if(!e){BX(d,a.gG,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BX(d,a.gG,0);return a.e.c(b,c,d);case 13:if(g!=10){BX(d,a.gG,0);return a.e.c(b,c,d);}BX(d,a.gG,0);return a.e.c(b,c,d);default:}return (-1);}
function AM6(a,b){var c;c=!DG(b,a.gG)?0:1;BX(b,a.gG,(-1));return c;}
function Ib(){var a=this;B9.call(a);a.qP=0;a.hs=0;}
function A5H(a,b){var c=new Ib();Qh(c,a,b);return c;}
function Qh(a,b,c){B8(a);a.qP=b;a.hs=c;}
function AL4(a,b,c,d){var e,f,g,h;e=GH(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.hs,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Jy(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A0f(a,b){a.e=b;}
function GH(a,b){var c,d;c=a.qP;d=Gr(b,c);c=I6(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nv)?Cs(b.nv,d,c):null;}
function ASb(a,b){var c;c=!DG(b,a.hs)?0:1;BX(b,a.hs,(-1));return c;}
var AKO=G(Ib);
function A4w(a,b){var c=new AKO();A1X(c,a,b);return c;}
function A1X(a,b,c){Qh(a,b,c);}
function AM$(a,b,c,d){var e,f;e=GH(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!ABJ(c,e,b)?(-1):J(e);if(f<0)return (-1);BX(d,a.hs,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ATp(a,b,c,d){var e,f;e=GH(a,d);f=d.c_;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=YC(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ALP(a,b,c,d,e){var f,g;f=GH(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=QP(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AY0(a,b){return 1;}
var AJa=G(Ib);
function A3H(a,b){var c=new AJa();AOq(c,a,b);return c;}
function AOq(a,b,c){Qh(a,b,c);}
function AP7(a,b,c,d){var e,f;e=GH(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.hs,J(e));return a.e.c(b+J(e)|0,c,d);}if(FG(Fk(P(e,f)))!=FG(Fk(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PS=G(GM);
function AOa(a,b,c,d,e){Wy(a,b,c,d,e);return a;}
function AVO(a,b,c,d){ADz(a,b,c,d);return a;}
function AV8(a,b){MZ(a,b);}
function A1l(a,b,c){ADL(a,b,c);return a;}
function ZN(){var a=this;Cb.call(a);a.cC=null;a.o7=null;a.nB=null;}
function ANl(a,b,c){return !Lc(a,c,b)?(-1):a.bH;}
function AVJ(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cC,a.bH-1|0);a:{while(true){g=a.bH;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lc(a,c,b))break;b=b+AAq(a.o7,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bH|0,c,d)>=0)break;b=b+1|0;}return b;}
function AXs(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cC,0);g=(J(d)-c|0)-a.bH|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lc(a,d,c))break;c=c-AAq(a.nB,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bH|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOL(a,b){var c;if(b instanceof EJ)return b.dH!=P(a.cC,0)?0:1;if(b instanceof ED)return Wc(b,0,Cs(a.cC,0,1))<=0?0:1;if(!(b instanceof D4)){if(!(b instanceof Eg))return 1;return J(a.cC)>1&&b.gV==EN(P(a.cC,0),P(a.cC,1))?1:0;}a:{b:{b=b;if(!b.o(P(a.cC,0))){if(J(a.cC)<=1)break b;if(!b.o(EN(P(a.cC,0),P(a.cC,1))))break b;}c=1;break a;}c=0;}return c;}
function Lc(a,b,c){var d;d=0;while(d<a.bH){if(P(b,d+c|0)!=P(a.cC,d))return 0;d=d+1|0;}return 1;}
function AEg(){Cb.call(this);this.lT=null;}
function A5I(a){var b=new AEg();A1B(b,a);return b;}
function A1B(a,b){var c,d,e;D0(a);c=new K;M(c);d=0;while(true){e=BL(d,b.L);if(e>=0){a.lT=L(c);a.bH=c.L;return;}if(d<0)break;if(e>=0)break;BM(c,FG(Fk(b.D.data[d])));d=d+1|0;}b=new BI;X(b);N(b);}
function AQb(a,b,c){var d;d=0;while(true){if(d>=J(a.lT))return J(a.lT);if(P(a.lT,d)!=FG(Fk(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Pb(){Cb.call(this);this.jC=null;}
function A0R(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jC))return J(a.jC);e=P(a.jC,d);f=b+d|0;if(e!=P(c,f)&&Jy(P(a.jC,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var He=G();
var A9y=null;var A9z=null;var A9u=null;function ASk(){ASk=Bo(He);ANA();}
function ANA(){A9y=A4e();A9z=A4Y();A9u=I($rt_arraycls(B),[I(B,[C(478),A4l()]),I(B,[C(479),A3l()]),I(B,[C(480),A5s()]),I(B,[C(481),A5x()]),I(B,[C(482),A9z]),I(B,[C(483),A45()]),I(B,[C(484),A3L()]),I(B,[C(485),A4y()]),I(B,[C(486),A4v()]),I(B,[C(487),A3t()]),I(B,[C(488),A3A()]),I(B,[C(489),A4B()]),I(B,[C(490),A33()]),I(B,[C(491),A3h()]),I(B,[C(492),A5v()]),I(B,[C(493),A3z()]),I(B,[C(494),A43()]),I(B,[C(495),A4J()]),I(B,[C(496),A44()]),I(B,[C(497),A3v()]),I(B,[C(498),A5A()]),I(B,[C(499),A4E()]),I(B,[C(500),A3U()]),
I(B,[C(501),A5q()]),I(B,[C(502),A5n()]),I(B,[C(503),A4f()]),I(B,[C(504),A3u()]),I(B,[C(505),A5g()]),I(B,[C(506),A9y]),I(B,[C(507),A3X()]),I(B,[C(508),A4A()]),I(B,[C(509),A9y]),I(B,[C(510),A3f()]),I(B,[C(511),A9z]),I(B,[C(512),A3D()]),I(B,[C(513),R(0,127)]),I(B,[C(514),R(128,255)]),I(B,[C(515),R(256,383)]),I(B,[C(516),R(384,591)]),I(B,[C(517),R(592,687)]),I(B,[C(518),R(688,767)]),I(B,[C(519),R(768,879)]),I(B,[C(520),R(880,1023)]),I(B,[C(521),R(1024,1279)]),I(B,[C(522),R(1280,1327)]),I(B,[C(523),R(1328,1423)]),
I(B,[C(524),R(1424,1535)]),I(B,[C(525),R(1536,1791)]),I(B,[C(526),R(1792,1871)]),I(B,[C(527),R(1872,1919)]),I(B,[C(528),R(1920,1983)]),I(B,[C(529),R(2304,2431)]),I(B,[C(530),R(2432,2559)]),I(B,[C(531),R(2560,2687)]),I(B,[C(532),R(2688,2815)]),I(B,[C(533),R(2816,2943)]),I(B,[C(534),R(2944,3071)]),I(B,[C(535),R(3072,3199)]),I(B,[C(536),R(3200,3327)]),I(B,[C(537),R(3328,3455)]),I(B,[C(538),R(3456,3583)]),I(B,[C(539),R(3584,3711)]),I(B,[C(540),R(3712,3839)]),I(B,[C(541),R(3840,4095)]),I(B,[C(542),R(4096,4255)]),
I(B,[C(543),R(4256,4351)]),I(B,[C(544),R(4352,4607)]),I(B,[C(545),R(4608,4991)]),I(B,[C(546),R(4992,5023)]),I(B,[C(547),R(5024,5119)]),I(B,[C(548),R(5120,5759)]),I(B,[C(549),R(5760,5791)]),I(B,[C(550),R(5792,5887)]),I(B,[C(551),R(5888,5919)]),I(B,[C(552),R(5920,5951)]),I(B,[C(553),R(5952,5983)]),I(B,[C(554),R(5984,6015)]),I(B,[C(555),R(6016,6143)]),I(B,[C(556),R(6144,6319)]),I(B,[C(557),R(6400,6479)]),I(B,[C(558),R(6480,6527)]),I(B,[C(559),R(6528,6623)]),I(B,[C(560),R(6624,6655)]),I(B,[C(561),R(6656,6687)]),
I(B,[C(562),R(7424,7551)]),I(B,[C(563),R(7552,7615)]),I(B,[C(564),R(7616,7679)]),I(B,[C(565),R(7680,7935)]),I(B,[C(566),R(7936,8191)]),I(B,[C(567),R(8192,8303)]),I(B,[C(568),R(8304,8351)]),I(B,[C(569),R(8352,8399)]),I(B,[C(570),R(8400,8447)]),I(B,[C(571),R(8448,8527)]),I(B,[C(572),R(8528,8591)]),I(B,[C(573),R(8592,8703)]),I(B,[C(574),R(8704,8959)]),I(B,[C(575),R(8960,9215)]),I(B,[C(576),R(9216,9279)]),I(B,[C(577),R(9280,9311)]),I(B,[C(578),R(9312,9471)]),I(B,[C(579),R(9472,9599)]),I(B,[C(580),R(9600,9631)]),
I(B,[C(581),R(9632,9727)]),I(B,[C(582),R(9728,9983)]),I(B,[C(583),R(9984,10175)]),I(B,[C(584),R(10176,10223)]),I(B,[C(585),R(10224,10239)]),I(B,[C(586),R(10240,10495)]),I(B,[C(587),R(10496,10623)]),I(B,[C(588),R(10624,10751)]),I(B,[C(589),R(10752,11007)]),I(B,[C(590),R(11008,11263)]),I(B,[C(591),R(11264,11359)]),I(B,[C(592),R(11392,11519)]),I(B,[C(593),R(11520,11567)]),I(B,[C(594),R(11568,11647)]),I(B,[C(595),R(11648,11743)]),I(B,[C(596),R(11776,11903)]),I(B,[C(597),R(11904,12031)]),I(B,[C(598),R(12032,12255)]),
I(B,[C(599),R(12272,12287)]),I(B,[C(600),R(12288,12351)]),I(B,[C(601),R(12352,12447)]),I(B,[C(602),R(12448,12543)]),I(B,[C(603),R(12544,12591)]),I(B,[C(604),R(12592,12687)]),I(B,[C(605),R(12688,12703)]),I(B,[C(606),R(12704,12735)]),I(B,[C(607),R(12736,12783)]),I(B,[C(608),R(12784,12799)]),I(B,[C(609),R(12800,13055)]),I(B,[C(610),R(13056,13311)]),I(B,[C(611),R(13312,19893)]),I(B,[C(612),R(19904,19967)]),I(B,[C(613),R(19968,40959)]),I(B,[C(614),R(40960,42127)]),I(B,[C(615),R(42128,42191)]),I(B,[C(616),R(42752,
42783)]),I(B,[C(617),R(43008,43055)]),I(B,[C(618),R(44032,55203)]),I(B,[C(619),R(55296,56191)]),I(B,[C(620),R(56192,56319)]),I(B,[C(621),R(56320,57343)]),I(B,[C(622),R(57344,63743)]),I(B,[C(623),R(63744,64255)]),I(B,[C(624),R(64256,64335)]),I(B,[C(625),R(64336,65023)]),I(B,[C(626),R(65024,65039)]),I(B,[C(627),R(65040,65055)]),I(B,[C(628),R(65056,65071)]),I(B,[C(629),R(65072,65103)]),I(B,[C(630),R(65104,65135)]),I(B,[C(631),R(65136,65279)]),I(B,[C(632),R(65280,65519)]),I(B,[C(633),R(0,1114111)]),I(B,[C(634),
A4C()]),I(B,[C(635),B2(0,1)]),I(B,[C(636),Kb(62,1)]),I(B,[C(637),B2(1,1)]),I(B,[C(638),B2(2,1)]),I(B,[C(639),B2(3,0)]),I(B,[C(640),B2(4,0)]),I(B,[C(641),B2(5,1)]),I(B,[C(642),Kb(448,1)]),I(B,[C(643),B2(6,1)]),I(B,[C(644),B2(7,0)]),I(B,[C(645),B2(8,1)]),I(B,[C(646),Kb(3584,1)]),I(B,[C(647),B2(9,1)]),I(B,[C(648),B2(10,1)]),I(B,[C(649),B2(11,1)]),I(B,[C(650),Kb(28672,0)]),I(B,[C(651),B2(12,0)]),I(B,[C(652),B2(13,0)]),I(B,[C(653),B2(14,0)]),I(B,[C(654),A4V(983040,1,1)]),I(B,[C(655),B2(15,0)]),I(B,[C(656),B2(16,
1)]),I(B,[C(657),B2(18,1)]),I(B,[C(658),A3R(19,0,1)]),I(B,[C(659),Kb(1643118592,1)]),I(B,[C(660),B2(20,0)]),I(B,[C(661),B2(21,0)]),I(B,[C(662),B2(22,0)]),I(B,[C(663),B2(23,0)]),I(B,[C(664),B2(24,1)]),I(B,[C(665),Kb(2113929216,1)]),I(B,[C(666),B2(25,1)]),I(B,[C(667),B2(26,0)]),I(B,[C(668),B2(27,0)]),I(B,[C(669),B2(28,1)]),I(B,[C(670),B2(29,0)]),I(B,[C(671),B2(30,0)])]);}
function Wg(){Cb.call(this);this.s2=0;}
function ASA(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.s2!=GY(GX(EN(e,d)))?(-1):2;}
function NN(){B9.call(this);this.hg=0;}
function AQ$(a){var b=new NN();AMN(b,a);return b;}
function AMN(a,b){B8(a);a.hg=b;}
function AZL(a,b){a.e=b;}
function AWk(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dL=1;return (-1);}f=P(c,b);if(b>d.c_&&CR(P(c,b-1|0)))return (-1);if(a.hg!=f)return (-1);return a.e.c(e,c,d);}
function AOJ(a,b,c,d){var e,f,g,h;if(!(c instanceof BK))return ID(a,b,c,d);e=d.c_;f=d.y;while(true){if(b>=f)return (-1);g=JV(c,a.hg,b);if(g<0)return (-1);if(g>e&&CR(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AWK(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IK(a,b,c,d,e);f=e.c_;a:{while(true){if(c<b)return (-1);g=Hs(d,a.hg,c);if(g<0)break a;if(g<b)break a;if(g>f&&CR(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALO(a,b){if(b instanceof EJ)return 0;if(b instanceof ED)return 0;if(b instanceof D4)return 0;if(b instanceof Eg)return 0;if(b instanceof NW)return 0;if(!(b instanceof NN))return 1;return b.hg!=a.hg?0:1;}
function AS3(a,b){return 1;}
function NW(){B9.call(this);this.g0=0;}
function AX2(a){var b=new NW();ARb(b,a);return b;}
function ARb(a,b){B8(a);a.g0=b;}
function AV7(a,b){a.e=b;}
function ALx(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BL(f,e);if(g>0){d.dL=1;return (-1);}h=P(c,b);if(g<0&&Dl(P(c,f)))return (-1);if(a.g0!=h)return (-1);return a.e.c(f,c,d);}
function AZV(a,b,c,d){var e,f;if(!(c instanceof BK))return ID(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JV(c,a.g0,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dl(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ASw(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IK(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Hs(d,a.g0,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dl(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ANm(a,b){if(b instanceof EJ)return 0;if(b instanceof ED)return 0;if(b instanceof D4)return 0;if(b instanceof Eg)return 0;if(b instanceof NN)return 0;if(!(b instanceof NW))return 1;return b.g0!=a.g0?0:1;}
function AZ2(a,b){return 1;}
function Eg(){var a=this;Cb.call(a);a.mj=0;a.ln=0;a.gV=0;}
function A0r(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.mj==e&&a.ln==d?2:(-1);}
function AZc(a,b,c,d){var e,f;if(!(c instanceof BK))return ID(a,b,c,d);e=d.y;while(b<e){b=JV(c,a.mj,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.ln==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AMO(a,b,c,d,e){var f;if(!(d instanceof BK))return IK(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hs(d,a.ln,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.mj==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A0l(a,b){if(b instanceof Eg)return b.gV!=a.gV?0:1;if(b instanceof D4)return b.o(a.gV);if(b instanceof EJ)return 0;if(!(b instanceof ED))return 1;return 0;}
var ACf=G(Fx);
function AMT(a,b){return b!=10?0:1;}
function AR$(a,b,c){return b!=10?0:1;}
var ACg=G(Fx);
function A06(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ATW(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGH(){var a=this;B.call(a);a.or=null;a.mx=null;a.jl=0;a.v5=0;}
function AZo(a){var b=new AGH();APj(b,a);return b;}
function APj(a,b){var c,d;while(true){c=a.jl;if(b<c)break;a.jl=c<<1|1;}d=c<<1|1;a.jl=d;d=d+1|0;a.or=BO(d);a.mx=BO(d);a.v5=b;}
function RK(a,b,c){var d,e,f,g;d=0;e=a.jl;f=b&e;while(true){g=a.or.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mx.data[f]=c;}
function AAq(a,b){var c,d,e,f;c=a.jl;d=b&c;e=0;while(true){f=a.or.data[d];if(!f)break;if(f==b)return a.mx.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.v5;}
var AEs=G();
var NL=G(Bf);
function A4e(){var a=new NL();AO0(a);return a;}
function AO0(a){}
function AJg(a){return CH(Ca(DH(),9,13),32);}
var M_=G(Bf);
function A4Y(){var a=new M_();ASX(a);return a;}
function ASX(a){}
function AJK(a){return Ca(DH(),48,57);}
var AGA=G(Bf);
function A4l(){var a=new AGA();AOx(a);return a;}
function AOx(a){}
function A0J(a){return Ca(DH(),97,122);}
var AGV=G(Bf);
function A3l(){var a=new AGV();APn(a);return a;}
function APn(a){}
function AS5(a){return Ca(DH(),65,90);}
var AGX=G(Bf);
function A5s(){var a=new AGX();AMl(a);return a;}
function AMl(a){}
function ANQ(a){return Ca(DH(),0,127);}
var NH=G(Bf);
function A5x(){var a=new NH();ANa(a);return a;}
function ANa(a){}
function AE1(a){return Ca(Ca(DH(),97,122),65,90);}
var LM=G(NH);
function A45(){var a=new LM();AO9(a);return a;}
function AO9(a){}
function AFt(a){return Ca(AE1(a),48,57);}
var AHR=G(Bf);
function A3L(){var a=new AHR();AY6(a);return a;}
function AY6(a){}
function AXH(a){return Ca(Ca(Ca(DH(),33,64),91,96),123,126);}
var OD=G(LM);
function A4y(){var a=new OD();ARV(a);return a;}
function ARV(a){}
function AHY(a){return Ca(Ca(Ca(AFt(a),33,64),91,96),123,126);}
var AJq=G(OD);
function A4v(){var a=new AJq();AST(a);return a;}
function AST(a){}
function AQs(a){return CH(AHY(a),32);}
var AFX=G(Bf);
function A3t(){var a=new AFX();A0S(a);return a;}
function A0S(a){}
function AWz(a){return CH(CH(DH(),32),9);}
var AE$=G(Bf);
function A3A(){var a=new AE$();A2i(a);return a;}
function A2i(a){}
function AQp(a){return CH(Ca(DH(),0,31),127);}
var AIH=G(Bf);
function A4B(){var a=new AIH();AMw(a);return a;}
function AMw(a){}
function ATZ(a){return Ca(Ca(Ca(DH(),48,57),97,102),65,70);}
var AKx=G(Bf);
function A33(){var a=new AKx();AVB(a);return a;}
function AVB(a){}
function AZm(a){var b;b=new AAN;b.EN=a;BA(b);b.P=1;return b;}
var AHU=G(Bf);
function A3h(){var a=new AHU();AR5(a);return a;}
function AR5(a){}
function AUN(a){var b;b=new Wo;b.ER=a;BA(b);b.P=1;return b;}
var AKf=G(Bf);
function A5v(){var a=new AKf();AMn(a);return a;}
function AMn(a){}
function AO5(a){var b;b=new R9;b.EC=a;BA(b);return b;}
var AGr=G(Bf);
function A3z(){var a=new AGr();AQq(a);return a;}
function AQq(a){}
function ASg(a){var b;b=new R8;b.CA=a;BA(b);return b;}
var AG9=G(Bf);
function A43(){var a=new AG9();AM9(a);return a;}
function AM9(a){}
function AWx(a){var b;b=new Va;b.DD=a;BA(b);IO(b.N,0,2048);b.P=1;return b;}
var AEE=G(Bf);
function A4J(){var a=new AEE();AMR(a);return a;}
function AMR(a){}
function ANw(a){var b;b=new X7;b.E2=a;BA(b);b.P=1;return b;}
var AH7=G(Bf);
function A44(){var a=new AH7();AP_(a);return a;}
function AP_(a){}
function A2m(a){var b;b=new PP;b.DZ=a;BA(b);b.P=1;return b;}
var AKm=G(Bf);
function A3v(){var a=new AKm();AQK(a);return a;}
function AQK(a){}
function AUI(a){var b;b=new Zl;b.C0=a;BA(b);return b;}
var AGQ=G(Bf);
function A5A(){var a=new AGQ();AXP(a);return a;}
function AXP(a){}
function APF(a){var b;b=new Wk;b.B$=a;BA(b);b.P=1;return b;}
var AI2=G(Bf);
function A4E(){var a=new AI2();ALR(a);return a;}
function ALR(a){}
function ANC(a){var b;b=new Wm;b.De=a;BA(b);b.P=1;return b;}
var AFZ=G(Bf);
function A3U(){var a=new AFZ();AMV(a);return a;}
function AMV(a){}
function AXu(a){var b;b=new Pu;b.DA=a;BA(b);b.P=1;return b;}
var AHC=G(Bf);
function A5q(){var a=new AHC();APJ(a);return a;}
function APJ(a){}
function AYw(a){var b;b=new Yn;b.Fk=a;BA(b);b.P=1;return b;}
var AKr=G(Bf);
function A5n(){var a=new AKr();AZg(a);return a;}
function AZg(a){}
function ATi(a){var b;b=new Yt;b.CH=a;BA(b);return b;}
var AFD=G(Bf);
function A4f(){var a=new AFD();AMS(a);return a;}
function AMS(a){}
function ARP(a){var b;b=new AA_;b.E4=a;BA(b);return b;}
var AFk=G(Bf);
function A3u(){var a=new AFk();A0v(a);return a;}
function A0v(a){}
function AQV(a){var b;b=new AAl;b.Ca=a;BA(b);b.P=1;return b;}
var AHS=G(Bf);
function A5g(){var a=new AHS();AXL(a);return a;}
function AXL(a){}
function A0B(a){var b;b=new O0;b.Fx=a;BA(b);b.P=1;return b;}
var Ky=G(Bf);
function A3X(){var a=new Ky();ANJ(a);return a;}
function ANJ(a){}
function AFY(a){return CH(Ca(Ca(Ca(DH(),97,122),65,90),48,57),95);}
var AKF=G(Ky);
function A4A(){var a=new AKF();AXS(a);return a;}
function AXS(a){}
function AQN(a){var b;b=EM(AFY(a),1);b.P=1;return b;}
var AJv=G(NL);
function A3f(){var a=new AJv();ATH(a);return a;}
function ATH(a){}
function AVH(a){var b;b=EM(AJg(a),1);b.P=1;return b;}
var AFi=G(M_);
function A3D(){var a=new AFi();AYm(a);return a;}
function AYm(a){}
function AOC(a){var b;b=EM(AJK(a),1);b.P=1;return b;}
function AIK(){var a=this;Bf.call(a);a.sW=0;a.y6=0;}
function R(a,b){var c=new AIK();A2l(c,a,b);return c;}
function A2l(a,b,c){a.sW=b;a.y6=c;}
function APT(a){return Ca(DH(),a.sW,a.y6);}
var AIW=G(Bf);
function A4C(){var a=new AIW();AT3(a);return a;}
function AT3(a){}
function ATM(a){return Ca(Ca(DH(),65279,65279),65520,65533);}
function AJk(){var a=this;Bf.call(a);a.p4=0;a.oA=0;a.xM=0;}
function B2(a,b){var c=new AJk();AM5(c,a,b);return c;}
function A3R(a,b,c){var d=new AJk();ATT(d,a,b,c);return d;}
function AM5(a,b,c){a.oA=c;a.p4=b;}
function ATT(a,b,c,d){a.xM=d;a.oA=c;a.p4=b;}
function AXh(a){var b;b=A4k(a.p4);if(a.xM)IO(b.N,0,2048);b.P=a.oA;return b;}
function AJr(){var a=this;Bf.call(a);a.n4=0;a.mA=0;a.q1=0;}
function Kb(a,b){var c=new AJr();AND(c,a,b);return c;}
function A4V(a,b,c){var d=new AJr();AUJ(d,a,b,c);return d;}
function AND(a,b,c){a.mA=c;a.n4=b;}
function AUJ(a,b,c,d){a.q1=d;a.mA=c;a.n4=b;}
function ALm(a){var b;b=new ZT;AGl(b,a.n4);if(a.q1)IO(b.N,0,2048);b.P=a.mA;return b;}
var AIN=G();
var AES=G();
function AFC(b){var c,d,e,f,g,h,i;c=ASs(Gn(b));d=M3(c);e=BO(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+M3(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=O8(c);h=h+1|0;}return e;}
function Nx(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function WR(){var a=this;B.call(a);a.x$=0;a.tt=0;a.yj=null;}
function AOb(a,b,c){var d=new WR();ASS(d,a,b,c);return d;}
function ASS(a,b,c,d){a.x$=b;a.tt=c;a.yj=d;}
function AGL(){var a=this;B.call(a);a.xo=null;a.yI=0;}
function ASs(a){var b=new AGL();AWI(b,a);return b;}
function AWI(a,b){a.xo=b;}
var AI9=G();
function M3(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.xo.data;f=b.yI;b.yI=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function O8(b){var c,d;c=M3(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Hl=G(Bw);
function ACM(){var a=this;B.call(a);a.yK=null;a.yL=null;}
function ALo(a,b){var c,d,e,f;c=a.yK;d=a.yL;e=new ADP;f=ABZ(ER(d));AKU(e,b,null,f);H0(c,e);}
function ACL(){B.call(this);this.xp=null;}
function ATj(a,b){Bk(a.xp,b);}
function X4(){B.call(this);this.BP=null;}
function AZ7(a,b){var c;c=a.BP;b=b;BM(BU(c.An,FH(b)),10);return 1;}
function Sr(){B.call(this);this.sM=null;}
function AXn(a,b){b.hf=a.sM;}
function RN(){B.call(this);this.t7=null;}
function AM1(a,b){Jn(a.t7,b);}
function ACb(){var a=this;B.call(a);a.Fy=null;a.kB=null;}
function ANU(a,b){var c;c=a.kB;b=b;a.kB=X3(!c.om&&!b.eM?0:1);return 1;}
function ABC(){var a=this;B.call(a);a.CT=null;a.s6=null;}
function ABE(){B.call(this);this.Fb=null;}
function A19(a,b){$rt_globals.console.info($rt_ustr(b));}
var KE=G(0);
function PG(){var a=this;B.call(a);a.lk=0;a.Cc=null;}
function A0h(a,b){var c,d;c=Ck(b);d=new K;M(d);H(H(d,C(672)),c);$rt_globals.console.info($rt_ustr(L(d)));a.lk=a.lk+1|0;Nh(b,a);}
function AXO(a,b){var c;b=Ck(b);c=new K;M(c);H(H(c,C(673)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ASB(a){var b;b=a.lk-1|0;a.lk=b;if(!b)Bk(Bu(),C(674));}
function AA5(){var a=this;B.call(a);a.Fh=null;a.Fg=null;a.Ff=null;}
function ABV(){var a=this;B.call(a);a.DQ=null;a.DR=null;}
function AAW(){B.call(this);this.uq=null;}
function AW$(a){var b,c,d,e;b=a.uq;c=Bu();d=E4(b);e=new K;M(e);H(H(e,C(675)),d);Bk(c,L(e));c=b.h3;e=new AAL;e.c5=b;e.lO=BD();e.mf=BD();Nh(c,e);}
function UY(){var a=this;Y.call(a);a.xa=null;a.Fd=null;}
function ANW(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cs^DW(a.xa,c):0;}
function UW(){var a=this;Y.call(a);a.AL=null;a.vr=null;a.Do=null;}
function AU5(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cs^DW(a.AL,c):0;return a.vr.o(b)&&!d?1:0;}
function P4(){var a=this;Y.call(a);a.lr=null;a.Ec=null;}
function APK(a,b){return a.bi^DW(a.lr,b);}
function AXw(a){var b,c,d;b=new K;M(b);c=Ih(a.lr,0);while(c>=0){JX(b,HP(c));BM(b,124);c=Ih(a.lr,c+1|0);}d=b.L;if(d>0)UM(b,d-1|0);return L(b);}
function XL(){var a=this;Y.call(a);a.yV=null;a.EQ=null;}
function A0u(a,b){return a.yV.o(b);}
function XJ(){var a=this;Y.call(a);a.oC=0;a.xG=null;a.pc=null;}
function ASz(a,b){return !(a.oC^DW(a.pc.J,b))&&!(a.oC^a.pc.ev^a.xG.o(b))?0:1;}
function XK(){var a=this;Y.call(a);a.my=0;a.u6=null;a.nO=null;}
function AYM(a,b){return !(a.my^DW(a.nO.J,b))&&!(a.my^a.nO.ev^a.u6.o(b))?1:0;}
function XO(){var a=this;Y.call(a);a.Bu=0;a.u_=null;a.u3=null;a.Em=null;}
function AWS(a,b){return a.Bu^(!a.u_.o(b)&&!a.u3.o(b)?0:1);}
function XQ(){var a=this;Y.call(a);a.th=0;a.yR=null;a.ys=null;a.Fv=null;}
function ALi(a,b){return a.th^(!a.yR.o(b)&&!a.ys.o(b)?0:1)?0:1;}
function XM(){var a=this;Y.call(a);a.ss=null;a.Fw=null;}
function AOy(a,b){return Db(a.ss,b);}
function XN(){var a=this;Y.call(a);a.A9=null;a.Eq=null;}
function AQf(a,b){return Db(a.A9,b)?0:1;}
function XR(){var a=this;Y.call(a);a.tq=null;a.yT=0;a.uB=null;}
function ATs(a,b){return !Db(a.tq,b)&&!(a.yT^DW(a.uB.J,b))?0:1;}
function XS(){var a=this;Y.call(a);a.tQ=null;a.zK=0;a.tJ=null;}
function AWt(a,b){return !Db(a.tQ,b)&&!(a.zK^DW(a.tJ.J,b))?1:0;}
function P3(){var a=this;Y.call(a);a.ux=0;a.AV=null;a.vy=null;a.Cf=null;}
function A3e(a,b){return !(a.ux^a.AV.o(b))&&!Db(a.vy,b)?0:1;}
function Qo(){var a=this;Y.call(a);a.Bf=0;a.qC=null;a.q2=null;a.Cu=null;}
function AOA(a,b){return !(a.Bf^a.qC.o(b))&&!Db(a.q2,b)?1:0;}
function P1(){var a=this;Y.call(a);a.x3=null;a.Cx=null;}
function ANc(a,b){return Db(a.x3,b);}
function P2(){var a=this;Y.call(a);a.sf=null;a.Ft=null;}
function AXl(a,b){return Db(a.sf,b)?0:1;}
function P7(){var a=this;Y.call(a);a.Bq=null;a.tL=0;a.B5=null;}
function APm(a,b){return Db(a.Bq,b)&&a.tL^DW(a.B5.J,b)?1:0;}
function P0(){var a=this;Y.call(a);a.z3=null;a.y4=0;a.tK=null;}
function A1x(a,b){return Db(a.z3,b)&&a.y4^DW(a.tK.J,b)?0:1;}
function P5(){var a=this;Y.call(a);a.Ah=0;a.w$=null;a.te=null;a.El=null;}
function AVQ(a,b){return a.Ah^a.w$.o(b)&&Db(a.te,b)?1:0;}
function P6(){var a=this;Y.call(a);a.zX=0;a.wD=null;a.Ad=null;a.Eu=null;}
function ARI(a,b){return a.zX^a.wD.o(b)&&Db(a.Ad,b)?0:1;}
var Md=G(0);
function AAk(){var a=this;B.call(a);a.Cq=null;a.AW=null;a.lJ=null;a.cE=null;a.kk=0;a.o$=0;}
function OQ(a,b){var c,d,e;c=J(a.lJ);if(b>=0&&b<=c){ADW(a.cE,null,(-1),(-1));d=a.cE;d.l5=1;d.eO=b;c=d.iX;if(c<0)c=b;d.iX=c;b=a.AW.cm(b,a.lJ,d);if(b==(-1))a.cE.dL=1;if(b>=0){d=a.cE;if(d.ku){e=d.d$.data;if(e[0]==(-1)){c=d.eO;e[0]=c;e[1]=c;}d.iX=MD(d);return 1;}}a.cE.eO=(-1);return 0;}d=new BI;Bn(d,Dm(b));N(d);}
function AHB(a){return Qn(a.cE,0);}
function AIY(a){return R$(a.cE,0);}
function AEw(a){return a.cE.kx;}
function AJx(){var a=this;B.call(a);a.OV=null;a.OT=null;a.OW=0.0;}
var Da=G(0);
var A60=null;var A8g=null;var A62=null;var A61=null;var A64=null;var A63=null;var A66=null;var A65=null;var A68=null;var A67=null;var A69=null;function AGZ(){AGZ=Bo(Da);A2q();}
function A2q(){A60=CB(0);A8g=Dy(8,8,8);A62=S(C(676));A61=Dy(255,255,255);A64=S(C(677));A63=S(C(678));A66=S(C(679));A65=S(C(680));A68=EW(205,205,205,153);A67=EW(255,255,255,0);A69=S(C(116));}
function Cx(){CG.call(this);this.pr=null;}
var A9A=null;var A9B=null;var A9C=null;var A9D=null;var A9E=null;var A9F=null;var A9G=null;var A9H=null;var A9I=null;var A9J=null;var A9K=null;var A9L=null;var A9M=null;var A9N=null;var A9O=null;var A6$=null;function AGm(){AGm=Bo(Cx);A2O();}
function DN(a,b,c){var d=new Cx();Zt(d,a,b,c);return d;}
function A2B(a,b,c,d){var e=new Cx();AEP(e,a,b,c,d);return e;}
function Zt(a,b,c,d){AGm();DL(a,b,c);a.pr=JI(d,null);}
function AEP(a,b,c,d,e){AGm();DL(a,b,c);a.pr=JI(d,e);}
function A2O(){var b;b=new Cx;AGZ();Zt(b,C(361),0,A8g);A9A=b;A9B=DN(C(362),1,S(C(681)));A9C=DN(C(364),2,S(C(682)));A9D=DN(C(366),3,S(C(683)));A9E=DN(C(368),4,A8g);A9F=DN(C(369),5,S(C(684)));A9G=DN(C(371),6,S(C(409)));A9H=DN(C(373),7,S(C(685)));A9I=DN(C(375),8,S(C(686)));A9J=A2B(C(377),9,A8g,Dy(237,235,252));A9K=A2B(C(378),10,S(C(407)),S(C(687)));A9L=DN(C(379),11,S(C(409)));A9M=DN(C(381),12,S(C(410)));A9N=DN(C(383),13,S(C(688)));b=DN(C(384),14,S(C(385)));A9O=b;A6$=I(Cx,[A9A,A9B,A9C,A9D,A9E,A9F,A9G,A9H,A9I,A9J,
A9K,A9L,A9M,A9N,b]);}
var D1=G(0);
var A7c=null;var A7d=null;var A6_=null;var A7a=null;var A7b=null;var A8h=null;var A8i=null;var A7e=null;var A7f=null;function AVi(){AVi=Bo(D1);AWP();}
function AWP(){A7c=S(C(114));A7d=S(C(689));A6_=S(C(690));A7a=S(C(691));A7b=S(C(692));A8h=S(C(114));A8i=S(C(689));A7e=EW(205,205,205,153);A7f=Dy(247,248,250);}
function ACC(){var a=this;B.call(a);a.l7=null;a.iR=0;}
var O5=G(HR);
function AOe(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Gr(d,a.bd);DZ(d,a.bd,b);e=a.dh.c(b,c,d);if(e>=0)break;DZ(d,a.bd,g);b=b+1|0;}}return b;}
function A25(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gr(e,a.bd);DZ(e,a.bd,c);f=a.dh.c(c,d,e);if(f>=0)break;DZ(e,a.bd,g);c=c+(-1)|0;}}return c;}
function AM3(a){return null;}
var Q7=G(Bw);
var Vq=G(Bw);
function T3(){Ga.call(this);this.DU=0;}
function Q0(){Ga.call(this);this.Fn=0;}
function Vo(){B.call(this);this.q9=null;}
function AXt(a,b){a.q9.f(H3(b));}
function Vp(){var a=this;B.call(a);a.r0=null;a.r1=null;}
function AVP(a,b){var c,d;c=a.r0;d=a.r1;b.text().then(Bx(c,"f"),Bx(d,"f"));}
function AB7(){var a=this;B.call(a);a.tr=null;a.AM=null;a.vU=0;a.mM=0;}
function Nu(a,b){return Cg(a.tr)<b?0:1;}
var AER=G(0);
var AEA=G();
function AEX(b){var c,d,e,f,g,h,i,j;c=AIr();d=CI(b);Bh(c,d);e=0;f=0;while(f<d){g=Cc(b,f);h=Jo(g);Bh(c,h);i=0;while(i<h){j=JS(g,i);FX(c,e,Ma(j));e=e+Ma(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return K1(c);}
function AJR(b){var c,d,e,f,g,h,i;c=L_(b);d=new T5;b=AEG(c);e=AEG(c);f=Ba(c);g=Q(L9,f);h=g.data;i=0;while(i<f){h[i]=Nj(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));i=i+1|0;}AF7(d,b,e,g);return d;}
function AEG(b){var c,d,e,f,g,h,i,j;c=Ba(b);d=Q(Gm,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1))e[g]=AIO(h);else{e[g]=AFS(h,i);j=0;while(true){if(j>=i)break a;e[g].eb.data[j]=Ba(b);j=j+1|0;}}}}f=f+1|0;}return d;}
function Yo(){B.call(this);this.xl=null;}
function AYq(a,b){var c,d;c=b.data;b=a.xl;c=AJR(CP(c[0]));b.k6=c;M4(b.F,c.qa);M4(b.H,b.k6.qb);c=b.mu;d=b.k6;c.ig=d;b.fG.e1=d;}
function ACo(){B.call(this);this.xd=null;}
function ARR(a,b){var c,d,e,f;c=a.xd;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.s6;c=Bu();b=Ck(b);e=new K;M(e);H(H(e,C(693)),b);Bk(c,L(e));b=Bu();f=d.length;c=new K;M(c);U(H(c,C(694)),f);Bk(b,L(c));}
function ACq(){var a=this;B.call(a);a.AE=null;a.AF=null;}
function AQ3(a,b){var c,d;c=a.AE;d=a.AF;b.arrayBuffer().then(Bx(c,"f"),Bx(d,"f"));}
function ACr(){var a=this;B.call(a);a.yf=null;a.k3=null;a.kq=null;}
function ABd(a){var b,c;b=a.yf.next();c=a.kq.pJ;b.then(Bx(a,"f"),Bx(c,"f"));}
function ARX(a,b){var c,d;if(b.done?1:0)a.k3.wb();else{ABd(a);c=b.value;if(c.kind==='file'?1:0){b=A3o(c,null,YO(a.kq));a.k3.w_(b);}else{b=new ACj;d=a.kq;AHg(b,c,d.pJ,YO(d),null);a.k3.tW(b);}}}
function Xv(){var a=this;B.call(a);a.yp=null;a.yq=null;}
function AAL(){var a=this;B.call(a);a.lO=null;a.mf=null;a.c5=null;}
function A1J(a,b){var c,d;c=new Ik;d=a.c5;LL(c,b,d.jO+1|0,d.hI);Br(a.lO,c);}
function ATq(a,b){var c,d;c=ER(b);d=new Kw;J2(d,c,a.c5.jO+1|0);d.o6=b;a.c5.hI.rM(d,c);d.oz=AKL(a.c5.hI,d);Br(a.mf,d);}
function A14(a){var b,c,d,e,f,g,h;if(!(CJ(a.lO)&&CJ(a.mf))){a.c5.hp=Gj(a.lO,A9p);a.c5.j0=Gj(a.mf,A9q);KZ(a.c5.hp,A85);KZ(a.c5.j0,A85);b=a.c5;c=b.hp;d=c.data;e=b.j0;f=e.data;g=d.length;h=f.length;d=Q(Dg,g+h|0);Dh(c,0,d,0,g);Dh(e,0,d,g,h);a.c5.e$=d;}NT(a.c5);b=a.c5;b.hI.xh(b);}
function AB$(){var a=this;B.call(a);a.d$=null;a.kW=null;a.pt=null;a.nv=null;a.rN=0;a.ku=0;a.c_=0;a.y=0;a.eO=0;a.kx=0;a.gs=0;a.dL=0;a.E9=0;a.iX=0;a.l5=0;}
function BX(a,b,c){a.kW.data[b]=c;}
function DG(a,b){return a.kW.data[b];}
function MD(a){return R$(a,0);}
function R$(a,b){ZR(a,b);return a.d$.data[(b*2|0)+1|0];}
function DZ(a,b,c){a.d$.data[b*2|0]=c;}
function M0(a,b,c){a.d$.data[(b*2|0)+1|0]=c;}
function Gr(a,b){return a.d$.data[b*2|0];}
function I6(a,b){return a.d$.data[(b*2|0)+1|0];}
function AGC(a){return Qn(a,0);}
function Qn(a,b){ZR(a,b);return a.d$.data[b*2|0];}
function Wt(a,b){return a.pt.data[b];}
function ET(a,b,c){a.pt.data[b]=c;}
function ZR(a,b){var c;if(!a.ku){c=new C8;X(c);N(c);}if(b>=0&&b<a.rN)return;c=new BI;Bn(c,Dm(b));N(c);}
function ADW(a,b,c,d){a.ku=0;a.l5=2;Ju(a.d$,(-1));Ju(a.kW,(-1));if(b!==null)a.nv=b;if(c>=0){a.c_=c;a.y=d;}a.eO=a.c_;}
function AFv(a){return a.l5;}
function Ty(){B.call(this);this.x7=null;}
function AYF(a,b){a.x7.f($rt_str(b.message));}
function ACk(){B.call(this);this.w9=null;}
function AZZ(a){Eo(a.w9);}
function AAN(){Y.call(this);this.EN=null;}
function ATB(a,b){return CD(b)!=2?0:1;}
function Wo(){Y.call(this);this.ER=null;}
function AVF(a,b){return CD(b)!=1?0:1;}
function R9(){Y.call(this);this.EC=null;}
function AL6(a,b){return RG(b);}
function R8(){Y.call(this);this.CA=null;}
function AXf(a,b){return 0;}
function Va(){Y.call(this);this.DD=null;}
function APd(a,b){return !CD(b)?0:1;}
function X7(){Y.call(this);this.E2=null;}
function A13(a,b){return CD(b)!=9?0:1;}
function PP(){Y.call(this);this.DZ=null;}
function ARo(a,b){return HL(b);}
function Zl(){Y.call(this);this.C0=null;}
function ASj(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Wk(){Y.call(this);this.B$=null;}
function A2U(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HL(b);}return b;}
function Wm(){Y.call(this);this.De=null;}
function ANo(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HL(b);}return b;}
function Pu(){Y.call(this);this.DA=null;}
function ATJ(a,b){a:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Yn(){Y.call(this);this.Fk=null;}
function AYV(a,b){return KG(b);}
function Yt(){Y.call(this);this.CH=null;}
function A0e(a,b){return Yu(b);}
function AA_(){Y.call(this);this.E4=null;}
function A1Q(a,b){return CD(b)!=3?0:1;}
function AAl(){Y.call(this);this.Ca=null;}
function AT5(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HL(b);}return b;}
function O0(){Y.call(this);this.Fx=null;}
function ANi(a,b){a:{b:{switch(CD(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HL(b);}return b;}
function Mn(){Y.call(this);this.nJ=0;}
function A4k(a){var b=new Mn();AGl(b,a);return b;}
function AGl(a,b){BA(a);a.nJ=b;}
function ARp(a,b){return a.bi^(a.nJ!=CD(b&65535)?0:1);}
var ZT=G(Mn);
function A1d(a,b){return a.bi^(!(a.nJ>>CD(b&65535)&1)?0:1);}
var ADF=G(0);
function YR(){B.call(this);this.wj=null;}
function AP0(a){var b,c;b=a.wj;c=b.yp;b=b.yq;c.FR(b.l0,b.pA,null);}
var AGa=G(0);
function RI(){var a=this;B.call(a);a.uc=null;a.ud=null;}
function A2o(a){a.uc.zg(a.ud);}
var Ru=G();
function ATy(a,b){b=b;return ASo(E4(b));}
var I4=G(0);
var Rr=G();
function AOV(a,b){return Q(NR,b);}
function NR(){var a=this;B.call(a);a.fe=null;a.i6=0;}
function ASo(a){var b=new NR();ATu(b,a);return b;}
function ATu(a,b){var c,d,e;c=Q(IP,1);d=c.data;e=new IP;e.nb=b;d[0]=e;a.fe=c;}
function Sg(a){return a.fe.data.length;}
function ATg(a,b){var c,d,e,f,g,h;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){a:{c=b;d=a.fe;e=c.fe;if(d===e)f=1;else{if(d!==null&&e!==null){d=d.data;e=e.data;f=d.length;if(f==e.length){g=0;b:{while(true){if(g>=f){g=(-1);break b;}h=g+0|0;if(!BN(d[h],e[h]))break;g=g+1|0;}}f=g>=0?0:1;break a;}}f=0;}}return f;}return 0;}
var Rs=G();
function AMH(a,b){b=b;return ASo(E4(b));}
var Rt=G();
function AYN(a,b){return Q(NR,b);}
var AIp=G();
function Lk(){D$.call(this);this.nn=null;}
function APD(a,b){var c,d;c=a.nn;d=new S3;d.r5=a;d.r4=b;return Jm(c,d);}
function ATd(a){return a.nn.tg;}
function RB(){Lk.call(this);this.rX=null;}
function ADg(){B.call(this);this.Ba=null;}
function AW4(a){var b;b=a.Ba;IC(b);b.hI.uI(b);b.hp=A9p;b.j0=A9q;}
function AK9(){var a=this;B.call(a);a.dD=null;a.eA=null;a.gd=null;}
function A1p(a,b){var c=new AK9();ALS(c,a,b);return c;}
function ALS(a,b,c){a.dD=b;a.eA=c;}
function ZO(a){var b,c,d,e,f,g,h,i,j;b=a.dD.data.length+1|0;c=$rt_createIntMultiArray([a.eA.data.length+1|0,b]);d=c.data;b=1;while(b<(a.dD.data.length+1|0)){e=1;while(true){f=a.eA.data;if(e>=(f.length+1|0))break;g=a.dD.data;h=b-1|0;i=g[h];j=e-1|0;if(i.bc(f[j]))d[b].data[e]=1+d[h].data[j]|0;else d[b].data[e]=Bd(d[h].data[e],d[b].data[j]);e=e+1|0;}b=b+1|0;}return c;}
function Yz(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.dD.data.length;d=a.eA.data.length;e=0;f=null;g=0;while(c>0&&d>0){h=a.dD.data;i=c-1|0;j=h[i];h=a.eA.data;k=d-1|0;if(!j.bc(h[k])){h=b.data;if(h[i].data[d]<=h[c].data[k]){d=d+(-1)|0;continue;}c=c+(-1)|0;continue;}l=a.dD.data[i];j=new LJ;j.j_=l;j.kE=f;if(f!==null)f.p2=j;g=g+1|0;e=e+1|0;c=c+(-1)|0;d=d+(-1)|0;f=j;}j=A5u(e);m=0;while(true){b=j.cn.data;c=b.length;if(m>=c)break;if(g<g){l=new Gu;X(l);N(l);}if(f===null){l=new Hl;X(l);N(l);}l=f.j_;f=f.kE;b[m]=l;m=m+1|0;}j.m
=c;return j;}
function PY(a,b){var c,d,e,f,g,h,i,j,k,l,m;a.gd=BD();c=0;d=0;e=0;f=null;g=null;while(c<b.m&&d<a.dD.data.length&&e<a.eA.data.length){h=Bv(b,c);i=a.dD.data[d];j=a.eA.data[e];if(h.bc(i)&&h.bc(j)){if(g===null){g=new S1;XA(g,d,e);}if(f!==null)Br(a.gd,f);c=c+1|0;d=d+1|0;e=e+1|0;g.kR=g.kR+1|0;f=null;continue;}if(f===null)f=AMs(d,e);if(g!==null)Br(a.gd,g);g=null;if(h.bc(i)){Br(f.cM,j);e=e+1|0;}else if(h.bc(j)){Br(f.cN,i);d=d+1|0;}else{Br(f.cN,a.dD.data[d]);Br(f.cM,a.eA.data[e]);d=d+1|0;e=e+1|0;}}if(g!==null)Br(a.gd,
g);if(f===null)f=AMs(d,e);a:{while(true){k=a.dD.data;if(d>=k.length)break;l=a.eA.data;if(e>=l.length)break a;i=k[d];m=l[e];Br(f.cN,i);Br(f.cM,m);d=d+1|0;e=e+1|0;}}while(true){k=a.dD.data;if(d>=k.length)break;i=k[d];Br(f.cN,i);d=d+1|0;}while(true){k=a.eA.data;if(e>=k.length)break;m=k[e];Br(f.cM,m);e=e+1|0;}if(CJ(f.cN)&&CJ(f.cM)?0:1)Br(a.gd,f);}
function HK(){var a=this;B.call(a);a.Ar=0;a.Aq=0;}
function XA(a,b,c){a.Ar=b;a.Aq=c;}
function Jx(){var a=this;HK.call(a);a.cM=null;a.cN=null;}
function AMs(a,b){var c=new Jx();AWc(c,a,b);return c;}
function AWc(a,b,c){XA(a,b,c);a.cM=BD();a.cN=BD();}
function Oc(a){return !CJ(a.cN)&&CJ(a.cM)?1:0;}
function Kx(a){return CJ(a.cN)&&!CJ(a.cM)?1:0;}
function LQ(a){return !CJ(a.cN)&&!CJ(a.cM)?1:0;}
function AVm(a){return a.cN.m;}
function AXW(a){return a.cM.m;}
function IP(){var a=this;B.call(a);a.nb=null;a.jt=0;a.iI=0;}
function AOR(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BN(a.nb,c.nb);}return 0;}
function Rc(){B.call(this);this.BC=null;}
function ATO(a,b){b=b;a.BC.h0.data[b.i6]=AIO(1);}
function ADq(){B.call(this);this.v7=null;}
function AS_(a,b){b=b;a.v7.h1.data[b.i6]=AIO(2);}
function SX(){B.call(this);this.zC=null;}
function A0M(a,b){b=b;a.zC.h0.data[b.i6]=AFS(3,Sg(b));}
function SW(){B.call(this);this.xz=null;}
function AQI(a,b){b=b;a.xz.h1.data[b.i6]=AFS(3,Sg(b));}
function SU(){B.call(this);this.vl=null;}
function ATx(a,b){var c,d,e;b=b;c=a.vl;if(b instanceof Jx){b=b;if(Oc(b)){b=b.cN;d=new ACN;d.zG=c;CL(b,d);}else if(Kx(b)){b=b.cM;d=new Vb;d.rx=c;CL(b,d);}else if(LQ(b)){d=b.cN;e=new VQ;e.wa=c;CL(d,e);b=b.cM;d=new VR;d.t8=c;CL(b,d);}}}
var QL=G();
var QM=G();
function A2j(a,b){return Q(IP,b);}
function AAT(){var a=this;B.call(a);a.zF=null;a.m_=0;}
function AWL(a,b){var c,d;c=a.zF.data;d=a.m_;a.m_=d+1|0;c[d]=b;return 1;}
function O9(){B.call(this);this.sV=null;}
function ASN(a,b){return Br(a.sV,b);}
function S1(){HK.call(this);this.kR=0;}
function AOW(a){return a.kR;}
function AOr(a){return a.kR;}
function ACt(){var a=this;B.call(a);a.xR=null;a.xN=null;}
function AZt(a,b){var c,d,e,f;c=a.xR;d=a.xN;e=Lv(c.jr,d);b=AIt(b);f=ANX(b.kd,ABZ(e));Er(c.mI,d,f);if(BN(c.px,d))ADI(c,f);}
function ACu(){var a=this;B.call(a);a.Br=null;a.Bs=null;}
function AX6(a,b){var c,d,e;c=a.Br;d=a.Bs;c=Lv(c.jr,d);d=Ep();e=new K;M(e);H(H(H(H(e,C(695)),c),C(29)),b);Bk(d,L(e));}
function ACV(){var a=this;D$.call(a);a.vc=null;a.nr=0;a.ha=null;a.kN=null;a.Es=null;a.sg=0;}
function AUE(a,b){var c,d,e;if(a.ha===null){if(a.sg)return 0;a.nr=0;a:{while(true){if(a.nr)break a;c=a.vc;d=new ZX;d.zD=a;if(!N6(c,d))break;}a.sg=1;}if(a.ha===null)return 0;}b:{c=a.ha;if(c instanceof D$){if(Jm(c,b))return 1;a.ha=null;}else{d=new Za;d.mK=c;a.kN=d;while(true){c=a.kN;Z5(c);if(!(c.d9==3?0:1)){a.kN=null;a.ha=null;break b;}c=a.kN;Z5(c);e=c.d9;if(e==3){b=new Hl;X(b);N(b);}d=c.mp;c.mp=null;c.d9=e!=2?0:3;if(!b.A(d))break;}return 1;}}return 1;}
function ACN(){B.call(this);this.zG=null;}
function ATN(a,b){b=b;a.zG.h0.data[b.jt].eb.data[b.iI]=1;}
function Vb(){B.call(this);this.rx=null;}
function AUR(a,b){b=b;a.rx.h1.data[b.jt].eb.data[b.iI]=2;}
function VQ(){B.call(this);this.wa=null;}
function AYh(a,b){b=b;a.wa.h0.data[b.jt].eb.data[b.iI]=3;}
function VR(){B.call(this);this.t8=null;}
function ASQ(a,b){b=b;a.t8.h1.data[b.jt].eb.data[b.iI]=3;}
function ZX(){B.call(this);this.zD=null;}
function AQW(a,b){var c;c=a.zD;c.ha=Zb(b.fe);c.nr=1;return 0;}
function S3(){var a=this;B.call(a);a.r5=null;a.r4=null;}
function AMk(a,b){var c;c=a.r5;return a.r4.A(c.rX.U(b));}
function AF3(){var a=this;B.call(a);a.RM=null;a.RG=null;a.GL=null;a.Rf=0;a.IQ=0;a.Ny=null;}
function Za(){var a=this;B.call(a);a.mK=null;a.mp=null;a.d9=0;}
function Z5(a){var b,c;if(a.d9)return;a.d9=0;while(!a.d9){b=a.mK;c=new ABe;c.z1=a;if(!Jm(b,c)){if(a.d9)a.d9=2;else a.d9=3;a.mK=null;}}}
function ABe(){B.call(this);this.z1=null;}
function A1m(a,b){var c;c=a.z1;c.mp=b;c.d9=1;return 0;}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bc",A5X(AQn),"cK",A5W(AMM)],RY,0,B,[],0,3,0,0,0,WE,0,B,[],3,3,0,0,0,Wh,0,B,[],3,3,0,0,0,ACQ,0,B,[WE,Wh],0,3,0,0,0,AIG,0,B,[],4,0,0,0,0,AIv,0,B,[],4,3,0,0,0,GS,0,B,[],0,3,0,0,0,Ex,0,GS,[],0,3,0,0,0,Bw,0,Ex,[],0,3,0,0,0,AJs,0,Bw,[],0,3,0,0,0,C5,0,B,[],3,3,0,0,0,CK,0,B,[],3,3,0,0,0,Ke,0,B,[],3,3,0,0,0,BK,"String",1,B,[C5,CK,Ke],0,3,0,Fb,["cK",A5W(AMK),"bc",A5X(Bj),"gz",A5W(NU),"mn",A5X(AOd)],Fv,0,GS,[],0,3,0,0,0,Ij,0,Fv,[],0,3,0,0,0,AI_,0,Ij,[],0,3,0,0,0,Et,0,B,[C5],1,3,0,0,0,HC,
0,Et,[CK],0,3,0,0,["gz",A5W(AUQ),"bc",A5X(A2F),"mn",A5X(AYu)],GM,0,B,[C5,Ke],0,0,0,0,["jZ",A5X(MZ),"cK",A5W(L)],JH,0,B,[],3,3,0,0,0,K,0,GM,[JH],0,3,0,0,["pR",A50(AYp),"pe",A5Z(ANv),"cK",A5W(Ee),"jZ",A5X(APG),"p9",A5Y(AYL)],E3,0,Ij,[],0,3,0,0,0,AJ8,0,E3,[],0,3,0,0,0,AI5,0,E3,[],0,3,0,0,0,AA9,0,B,[],3,3,0,0,0,C9,0,B,[],3,3,0,0,0,X6,0,B,[],3,0,0,0,0,J8,0,B,[AA9,C9,X6],1,3,0,0,["cD",A5W(EA)],ZL,0,J8,[],0,3,0,0,0,AIc,0,B,[],0,3,0,0,0,AKG,0,B,[],4,3,0,0,0,BR,0,B,[],3,3,0,0,0,Cd,0,B,[BR],3,3,0,0,0,ABi,0,B,[Cd],0,3,
0,0,["bh",A5X(A2S)],AGn,0,B,[],0,3,0,0,0,AJE,0,B,[BR],1,3,0,0,0,AEx,0,B,[],3,3,0,0,0,AKu,0,B,[],3,3,0,0,0,AGU,0,B,[],3,3,0,0,0,L5,0,B,[],0,3,0,0,0,AE2,0,B,[BR],1,3,0,0,0,ABj,0,B,[Cd],0,3,0,0,["bh",A5X(ALj)],ABh,0,B,[Cd],0,3,0,0,["bh",A5X(A1R)],LG,0,B,[],4,3,0,0,0,AGS,0,B,[],4,3,0,0,0,AIZ,0,B,[],0,3,0,0,0,ALg,0,B,[],4,3,0,0,0,WF,0,B,[Cd],0,3,0,0,["bh",A5X(AZC)]]);
$rt_metadata([AG5,0,B,[BR],1,3,0,0,0,AIk,0,B,[],0,3,0,0,0,ACs,0,B,[BR],3,3,0,0,0,AJu,0,B,[ACs],1,3,0,0,["Lq",A5X(AXD),"RL",A5W(AQk)],AFN,0,B,[BR],1,3,0,0,0,Gc,0,B,[],3,3,0,0,0,SJ,0,B,[Gc],0,3,0,0,0,BI,0,Bw,[],0,3,0,0,0,AJU,0,B,[],4,3,0,0,0,GZ,0,Bw,[],0,3,0,0,0,Jb,0,Bw,[],0,3,0,0,0,Dn,0,B,[CK],0,3,0,0,0,Wd,0,B,[BR],3,3,0,0,0,AAm,0,B,[Wd],3,3,0,0,0,EX,0,B,[BR],3,3,0,0,0,AIe,0,B,[BR,AAm,EX],1,3,0,0,["Kb",A5W(AZi),"KK",A5X(A1h),"Sz",A5X(A08),"N4",A5X(AWv),"Q5",A5X(ALz),"MG",A5W(ANp),"RJ",A5Y(A1e),"K0",A5Z(APs),
"Lx",A5W(AVE),"LR",A5W(AZ0),"Qj",A5X(A1N),"OI",A5W(AQD),"SS",A5X(AO7),"IV",A5W(AQY),"Pl",A5W(AUx),"SL",A5W(APU),"Ge",A5X(AMa),"K4",A5W(A2H),"QA",A5Y(AX1),"Ov",A5Y(AQu),"RA",A5Y(ATR),"Ri",A5W(AUY),"R2",A5W(AOO),"LD",A5X(ANy),"P5",A5X(AOp),"NY",A5Y(AX_),"Ix",A5W(AP3),"Lp",A5X(AVG),"MU",A5W(AOo),"LZ",A5W(ARZ),"NM",A5X(ALp),"IU",A5X(ATe),"SH",A5X(AVY),"H9",A5W(A1E),"Ok",A5Y(AV4),"Rw",A5X(AZ9),"Ip",A5W(ASn),"Nc",A5Y(ARm),"GH",A5Y(AQ7),"O8",A5W(AS9),"LE",A5X(AUc),"HP",A5Z(AZs),"Ha",A5W(ANt),"HT",A5Y(AWg),"OB",A5W(AVj),
"Kt",A5W(A2C),"Qg",A5W(ARj),"FB",A5W(AVh),"J6",A5Y(ARn),"MV",A5X(AWE),"P3",A5X(AOv),"G3",A5W(A0I)],Pv,0,B,[Cd],0,3,0,0,["bh",A5X(ARU)],AJh,0,B,[],4,3,0,0,0,Ym,0,B,[EX],3,3,0,0,0,RO,0,B,[EX],3,3,0,0,0,ZA,0,B,[EX],3,3,0,0,0,S7,0,B,[EX],3,3,0,0,0,ADC,0,B,[EX],3,3,0,0,0,ABU,0,B,[EX,Ym,RO,ZA,S7,ADC],3,3,0,0,0,AIE,0,B,[BR,ABU],1,3,0,0,["QN",A5Y(AZJ),"R9",A5Y(AYs),"Hd",A5Z(AOQ),"Oq",A5X(AMm),"JG",A5Z(AWV)],BS,0,Bw,[],0,3,0,0,0,AEd,0,Bw,[],0,3,0,0,0,If,0,BI,[],0,3,0,0,0,AIT,0,B,[],0,3,0,0,0,Ze,0,B,[],3,3,0,0,0,XV,0,
B,[Ze],3,3,0,0,0,AAs,0,B,[XV],0,3,0,0,0,BC,0,B,[],3,3,0,0,0,AJB,0,B,[BC],0,3,0,0,0,Z,0,B,[],3,3,0,0,0,AJC,0,B,[Z],0,3,0,0,0,ZE,0,B,[BR],3,3,0,0,0,Ui,0,B,[ZE],0,3,0,0,["IW",A5X(AX0)],Ug,0,B,[Z],0,3,0,0,0,Y7,0,B,[BR],3,3,0,0,0,Uh,0,B,[Y7],0,3,0,0,["BG",A5Y(ANI)],AHc,0,B,[BR],1,3,0,0,0,Cy,0,B,[BR],3,3,0,0,0,Uf,0,B,[Cy],0,3,0,0,["cr",A5X(ARY)],AAd,0,B,[],0,3,0,0,0,UO,0,B,[],3,3,0,0,["fk",A5X(AUF)],Hv,0,B,[UO],3,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],Fy,0,B,[Hv],1,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe),"eC",A5W(CJ),"q3",
A5X(A0X)],NC,0,B,[Hv],3,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],MH,0,B,[NC],3,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)]]);
$rt_metadata([Fm,0,Fy,[MH],1,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe),"zz",A5X(ASa),"b5",A5W(B1),"uh",A5Y(ARA),"os",A5Y(A1z),"bc",A5X(AQQ)],Mi,0,Fm,[],1,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],OM,0,B,[Hv],3,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],ADX,0,B,[OM,NC],3,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],TB,0,Mi,[ADX],0,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],Lu,0,B,[],3,3,0,0,0,Ef,0,B,[Lu],1,3,0,0,0,Ey,0,B,[],3,3,0,0,0,Vv,0,B,[Lu],3,3,0,0,0,O7,0,B,[Vv],3,3,0,0,0,Ya,0,Ef,[Ey,C5,O7],0,3,0,0,0,AAh,0,B,[BC],0,3,0,0,0,AAi,0,B,[Cd],0,
3,0,0,["bh",A5X(AUX)],AE9,0,B,[],0,3,0,0,0,NQ,0,B,[],1,3,0,0,0,T$,0,NQ,[],0,3,0,0,0,Cu,0,B,[C9],1,3,0,0,["cg",A5X(A2D)],YK,0,B,[],0,3,0,0,0,ACW,0,B,[Cy],0,3,0,0,["cr",A5X(AZT)],ACX,0,B,[Cy],0,3,0,0,["cr",A5X(AZ4)],ACY,0,B,[Cy],0,3,0,0,["cr",A5X(AQz)],ACZ,0,B,[Cy],0,3,0,0,["cr",A5X(AYJ)],AC0,0,B,[Cy],0,3,0,0,["cr",A5X(AYW)],AC1,0,B,[Cy],0,3,0,0,["cr",A5X(AR3)],AC2,0,B,[Cy],0,3,0,0,["cr",A5X(AOP)],AC3,0,B,[Cy],0,3,0,0,["cr",A5X(A20)],AC4,0,B,[Cy],0,3,0,0,["cr",A5X(AOm)],AC5,0,B,[Cy],0,3,0,0,["cr",A5X(ASL)],VS,
0,B,[Cy],0,3,0,0,["cr",A5X(A2E)],VT,0,B,[Cy],0,3,0,0,["cr",A5X(AQh)],VU,0,B,[Cy],0,3,0,0,["cr",A5X(AQF)],VV,0,B,[Cy],0,3,0,0,["cr",A5X(AZ_)],ABD,0,B,[],3,3,0,0,0,ABO,0,B,[ABD],0,3,0,0,0,ABN,0,B,[Cy],0,3,0,0,["cr",A5X(APx)],OJ,0,B,[],0,3,0,0,0,Kr,0,B,[Gc],0,3,0,0,["qg",A5Y(MV)],AHp,0,B,[],0,3,0,0,0,CV,0,B,[],3,3,0,0,0,Cq,0,B,[CV],3,3,0,0,0,CC,0,B,[],3,3,0,0,["bQ",A5X(AYl),"cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m)],EH,0,B,[],3,3,0,0,0,C$,0,B,[CV],3,3,0,0,0,Fw,0,B,[],3,3,0,0,0,DQ,0,B,[],3,3,0,0,0,FQ,0,B,[DQ],3,
3,0,0,0,Ra,0,B,[C9],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cK",A5W(AHV),"bc",A5X(APo)],AC8,0,B,[],0,3,0,0,0,AGW,0,B,[],0,3,0,0,0]);
$rt_metadata([AIs,0,B,[],3,3,0,0,0,Y5,0,B,[],0,3,0,0,0,N8,0,B,[],0,3,0,0,0,Di,0,N8,[],0,3,0,0,0,AKE,0,Di,[],0,3,0,0,0,Fn,0,Di,[],0,3,0,0,0,Zp,0,Di,[],0,3,0,0,0,AFQ,0,Fn,[],0,3,0,0,0,Hq,0,Fn,[],0,3,0,0,0,PE,0,Hq,[],0,3,0,0,0,AHE,0,Hq,[],0,3,0,0,0,AIF,0,Fn,[],0,3,0,0,0,AJ$,0,Di,[],0,3,0,0,0,AEN,0,Di,[],0,3,0,0,0,ZY,0,B,[BR],3,3,0,0,0,ALe,0,B,[ZY],3,3,0,0,0,Y4,0,B,[C9],0,3,0,0,0,Q6,0,B,[],0,3,0,0,0,CG,0,B,[CK,C5],1,3,0,0,0,G4,0,CG,[],12,3,0,Jv,0,Ms,0,B,[],3,3,0,0,0,SZ,0,B,[Ms],3,3,0,0,0,ABS,0,B,[],3,3,0,0,0,GO,
0,B,[SZ,ABS],1,3,0,0,0,MS,0,GO,[],0,3,0,0,0,AFx,0,MS,[],0,3,0,0,0,HA,0,GO,[],1,3,0,0,0,LE,0,HA,[],0,3,0,0,["mS",A5Z(APq)],Ej,0,CG,[],12,3,0,A15,0,MK,0,B,[CK],1,3,0,0,0,Mv,0,MK,[],0,3,0,AFs,0,Ye,0,B,[],0,3,0,0,0,H4,0,CG,[],12,0,0,AQv,0,NE,0,HA,[],0,3,0,0,["mS",A5Z(AN1)],AGR,0,BS,[],0,3,0,0,0,Uj,0,Ex,[],0,3,0,0,0,Mu,0,B,[BR],3,3,0,0,0,ADR,0,B,[Mu],0,3,0,0,["bh",A5X(ASu)],ADS,0,B,[Mu],0,3,0,0,["bh",A5X(AMD)],Ia,0,B,[],1,3,0,0,0,AAa,0,B,[],3,3,0,0,0,Lz,0,Ia,[CK,JH,Ke,AAa],1,3,0,0,0,M6,0,Ia,[CK],1,3,0,0,0,IE,0,B,
[],0,3,0,Hh,0,Pa,0,Cu,[],0,3,0,0,["bP",A5W(AQc),"ca",A5Y(AO6)],HJ,0,Cu,[],1,3,0,0,["ca",A5Y(AF1)],CO,0,HJ,[],1,3,0,0,["bP",A5W(ANV),"ca",A5Y(Iz),"cg",A5X(AMv)],GL,0,B,[],3,3,0,0,0,Nd,0,B,[],3,3,0,0,0,F8,0,B,[],3,3,0,0,0]);
$rt_metadata([KR,0,CO,[CC,GL,Nd,F8,EH,Fw,FQ],0,3,0,0,["h9",A5Y(A2h),"cg",A5X(ASe),"bP",A5W(AYT),"g4",A5W(AXV),"Bx",A5W(ASC),"v8",A5W(AYP),"uy",A5X(ATc),"nE",A5X(AZF),"iq",A5X(ANh),"ca",A5Y(API),"hK",A5X(AL0),"bQ",A5X(AZX),"cu",A5Z(AXX),"cv",A5Y(AQy),"dz",A5Y(A0o),"dx",A5Z(ARQ),"cY",A5W(AYo)],AG1,0,KR,[],0,3,0,0,["g4",A5W(AQL)],AHn,0,B,[],0,3,0,0,0,AJw,0,B,[BR],1,3,0,0,0,KX,0,Lz,[],1,0,0,0,0,AFL,0,KX,[],0,0,0,0,0,Lr,0,B,[],1,3,0,0,0,Oa,0,B,[],0,3,0,0,0,AED,0,B,[],0,3,0,0,0,I2,0,B,[BR],3,3,0,0,0,WN,0,B,[I2],0,
3,0,0,["bh",A5X(AN7)],WM,0,B,[I2],0,3,0,0,["bh",A5X(ARg)],WK,0,B,[Cd],0,3,0,0,["bh",A5X(ARG)],WJ,0,B,[Cd],0,3,0,0,["bh",A5X(AWh)],W,0,B,[],3,3,0,0,0,Tj,0,B,[W],0,3,0,0,["f",A5X(A2I)],Tk,0,B,[W],0,3,0,0,["f",A5X(AYt)],Uw,0,B,[BC],0,3,0,0,["U",A5X(ATt)],Uv,0,B,[BC],0,3,0,0,["U",A5X(ALH)],Us,0,B,[BC],0,3,0,0,["U",A5X(AWY)],Ur,0,B,[BC],0,3,0,0,["U",A5X(AZD)],Uu,0,B,[BC],0,3,0,0,["U",A5X(ANP)],Ut,0,B,[BC],0,3,0,0,["U",A5X(AUC)],Uz,0,B,[BC],0,3,0,0,["U",A5X(ANu)],Uy,0,B,[BC],0,3,0,0,["U",A5X(AP5)],UB,0,B,[BC],0,3,
0,0,["U",A5X(A0Z)],UA,0,B,[BC],0,3,0,0,["U",A5X(ALs)],AAR,0,B,[BC],0,3,0,0,["U",A5X(ALC)],AAQ,0,B,[BC],0,3,0,0,["U",A5X(AYy)],AAP,0,B,[BC],0,3,0,0,["U",A5X(AQ0)],AAE,0,B,[BC],0,3,0,0,["U",A5X(AN_)],AAD,0,B,[BC],0,3,0,0,["U",A5X(AUP)],AAB,0,B,[BC],0,3,0,0,["U",A5X(A1Z)],AAA,0,B,[BC],0,3,0,0,["U",A5X(AQd)],AAz,0,B,[BC],0,3,0,0,["U",A5X(A02)],AAy,0,B,[BC],0,3,0,0,["U",A5X(ALl)],AAx,0,B,[BC],0,3,0,0,["U",A5X(A0O)],AAI,0,B,[BC],0,3,0,0,["U",A5X(AZ5)],AAH,0,B,[BC],0,3,0,0,["U",A5X(AM7)],AAG,0,B,[BC],0,3,0,0,["U",
A5X(AXI)],AAF,0,B,[BC],0,3,0,0,["U",A5X(AO1)],AAK,0,B,[BC],0,3,0,0,["U",A5X(AO2)],AAJ,0,B,[BC],0,3,0,0,["U",A5X(AVx)],ADb,0,B,[],0,0,0,0,0,Id,0,B,[],0,3,0,0,0,Ql,0,Id,[],0,3,0,0,0,AG2,0,B,[],0,3,0,0,0,OH,0,Id,[],0,3,0,0,0,Tq,0,B,[BR],3,3,0,0,0,Pr,0,B,[Tq],0,3,0,0,["LK",A5X(AYz)]]);
$rt_metadata([ABY,0,B,[W],0,3,0,0,["f",A5X(ACO)],ADj,0,M6,[],0,0,0,0,0,CE,0,B,[C9],0,3,0,0,["cD",A5W(ASf),"hS",A5W(AZv),"e7",A5Z(HN),"dv",A5X(AKV),"cg",A5X(AV_),"mV",A5X(AP9),"oX",A5X(ATY),"ly",A5Y(A0A),"rq",A5W(AT6),"cu",A5Z(AOU),"cv",A5Y(AML),"dz",A5Y(AQP),"bQ",A5X(ATL),"dx",A5Z(A0t)],AFj,0,CE,[],0,3,0,0,["dv",A5X(AGz)],AFO,0,B,[],0,0,0,0,0,FR,0,B,[],3,3,0,0,["wc",A5W(AZw),"un",A5W(AOf)],QZ,0,B,[],3,0,0,0,0,Mr,0,B,[FR],3,3,0,0,["wc",A5W(AZw),"un",A5W(AOf)],AFp,0,CE,[FR,CC,Nd,QZ,Mr],0,3,0,0,["e7",A5Z(Mt),"ly",
A5Y(ARr),"po",A5Y(A2J),"un",A5W(AXe),"wc",A5W(AVn),"Bx",A5W(W8),"v8",A5W(AD4),"uy",A5X(PU),"nE",A5X(AR6),"rq",A5W(LW),"cD",A5W(AVK),"cg",A5X(IX),"qh",A5X(AJc),"hS",A5W(AG$),"pw",A5W(ASY),"dv",A5X(AYZ),"lf",A5W(TI),"kp",A5W(TH),"hC",A5X(ARN),"uW",A5W(ARD),"pD",A5W(AUw),"dx",A5Z(LP),"dz",A5Y(SY),"cv",A5Y(Wn),"cu",A5Z(O1),"bQ",A5X(Xo),"iw",A5X(A2p)],AH6,0,B,[],0,3,0,0,0,TQ,0,B,[W],0,3,0,0,["f",A5X(AL9)],TR,0,B,[W],0,3,0,0,["f",A5X(A1s)],TS,0,B,[Cq],0,3,0,0,["A",A5X(APO)],HQ,0,B,[Cq],0,3,0,0,["A",A5X(AOj)],TO,0,
B,[W],0,3,0,0,["f",A5X(AQB)],TP,0,B,[C$],0,3,0,0,["A",A5X(A10)],C2,0,B,[],3,3,0,0,0,ADy,0,B,[CC,C2],0,3,0,0,["bQ",A5X(AU2),"cu",A5Z(AMU),"cv",A5Y(AOY),"dz",A5Y(A2k),"gI",A5Y(AYi)],Tv,0,B,[],0,3,0,0,0,We,0,B,[EH],0,3,0,0,["dx",A5Z(A2e)],AFb,0,B,[],0,3,0,0,0,ADP,0,B,[],0,3,0,0,0,ADE,0,B,[],0,3,0,0,0,Fo,0,B,[C9],0,3,0,0,0,AHA,0,B,[],0,3,0,0,0,AFa,0,B,[C9],0,3,0,0,0,Xj,0,B,[W],0,3,0,0,0,Xi,0,B,[W],0,3,0,0,["f",A5X(AMh)],Xh,0,B,[W],0,3,0,0,["f",A5X(ALE)],AJ6,0,B,[],0,3,0,0,0,Xg,0,B,[Z],0,3,0,0,["g",A5W(AU4)],Xn,
0,B,[Z],0,3,0,0,["g",A5W(AXj)],Xm,0,B,[Z],0,3,0,0,["g",A5W(A3c)],Xl,0,B,[Z],0,3,0,0,["g",A5W(APZ)],Xk,0,B,[Z],0,3,0,0,["g",A5W(ARH)],Xf,0,B,[Z],0,3,0,0,["g",A5W(A2K)],UG,0,B,[Z],0,3,0,0,["g",A5W(AP2)],UH,0,B,[Z],0,3,0,0,["g",A5W(AZ1)],AGi,0,B,[BR],1,3,0,0,0,Ns,0,B,[],4,3,0,AX$,0,AEL,0,B,[],3,3,0,0,0,Z0,0,B,[Cq],0,3,0,0,["A",A5X(AOE)],ZZ,0,B,[Cq],0,3,0,0,["A",A5X(AWf)],LF,0,B,[],3,3,0,0,0,AIl,0,Fm,[Ey,C5,LF],0,3,0,0,["pH",A5X(AYe),"nK",A5X(Bv),"c1",A5W(AZM),"zz",A5X(Br),"os",A5Y(ZM),"qf",A5X(EL),"q3",A5X(UD),
"jf",A5W(Iu),"uh",A5Y(AIy),"fk",A5X(CL)],Kf,0,B,[],0,3,0,0,0,Fj,0,B,[],0,3,0,0,0,Nq,0,Fj,[],0,3,0,0,0,AAM,0,Fj,[],0,3,0,0,0,YS,0,Fj,[],0,3,0,0,0]);
$rt_metadata([Hb,0,B,[],3,3,0,0,0,Sw,0,B,[],3,3,0,0,0,B0,0,B,[],0,3,0,0,["bc",A5X(AUn)],Ly,0,B,[],0,3,0,0,0,Is,0,B,[C9],0,3,0,0,["cD",A5W(AGp)],YI,0,B,[],3,0,0,0,0,OE,0,B,[],3,3,0,0,0,Y0,0,B,[Z],0,3,0,0,["g",A5W(AXN)],YZ,0,B,[Z],0,3,0,0,["g",A5W(AUO)],AKM,0,B,[],0,3,0,0,0,Tt,0,B,[],0,3,0,0,0,GV,0,B,[],1,3,0,0,0,ZJ,0,GV,[],0,3,0,0,["t4",A5X(Cc)],Mb,0,B,[],3,3,0,0,0,Tx,0,B,[Mb],3,3,0,0,0,SL,"JsFileHandle",7,B,[Tx],0,3,0,0,["pa",A5W(ER),"tk",A5W(AL1),"cK",A5W(AYg),"gz",A5W(ALM)],ACI,0,B,[],3,3,0,0,0,AJM,0,B,[ACI],
0,3,0,0,["cK",A5W(AWy)],ZS,0,B,[OE],0,3,0,0,0,Hc,0,B,[CK],0,3,0,0,0,NM,0,B,[],0,3,0,0,0,DJ,0,B,[],0,3,0,0,0,Yq,0,B,[],0,3,0,0,0,Lj,0,Ef,[Ey,C5],0,3,0,0,0,Cv,0,B,[],0,3,0,0,0,NJ,0,Lj,[],0,3,0,0,0,ZQ,0,B,[],0,3,0,0,0,AK5,0,B,[CK],0,3,0,0,["bc",A5X(ASM),"mn",A5X(AV$)],UT,0,B,[Gc],0,3,0,0,["qg",A5Y(AP4)],Zo,0,B,[],0,3,0,0,["cK",A5W(ALX),"bc",A5X(AMF)],Jl,0,B,[],3,3,0,0,0,GR,0,B,[Jl,Ey],0,0,0,0,["bc",A5X(AWA)],HU,0,GR,[],0,0,0,0,0,NG,0,Lr,[],1,3,0,0,0,QB,0,NG,[],0,3,0,0,0,I5,0,Ex,[],0,3,0,0,0,OT,0,B,[I2],0,3,0,0,
["bh",A5X(AUf)],OV,0,B,[Cd],0,3,0,0,["bh",A5X(ATI)],OU,0,B,[Cd],0,3,0,0,["bh",A5X(AVz)],IU,0,B,[],0,3,0,0,0,Ko,0,CO,[GL,F8],0,3,0,0,["iq",A5X(AXT),"cg",A5X(A1o),"bP",A5W(AOG),"g4",A5W(A2A),"ca",A5Y(ALr),"hK",A5X(AWW)],AH9,0,Cu,[],0,3,0,0,["cg",A5X(ALK),"bP",A5W(ANx),"ca",A5Y(APM)],AA7,0,Cu,[],0,3,0,0,["cg",A5X(ARe),"bP",A5W(AV2),"ca",A5Y(AXd)],Xq,0,CO,[CC,C2],0,3,0,0,["cv",A5Y(ATw),"dz",A5Y(ALV),"gI",A5Y(APg),"ca",A5Y(AN8),"bP",A5W(AWR),"bQ",A5X(APP),"cu",A5Z(AMi)],AAC,0,CO,[C2],0,3,0,0,["gI",A5Y(ANn),"ca",
A5Y(AMB)],WS,0,HJ,[CC],0,3,0,0,["bQ",A5X(AYl),"cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),"bP",A5W(A0Y),"cg",A5X(ALD)],SI,0,Cu,[],0,3,0,0,["bP",A5W(ALq),"ca",A5Y(AUK)],Dt,0,Cu,[],0,3,0,0,["bP",A5W(Z_),"ca",A5Y(SE)],Q8,"SelectFileTest",5,Dt,[],0,3,0,0,0,W9,0,CO,[],0,3,0,0,0]);
$rt_metadata([Wu,"RenderTexture",5,Dt,[],0,3,0,0,["cg",A5X(AOS),"bP",A5W(AWG),"ca",A5Y(A2y)],SG,"ScissorDemo",5,Dt,[],0,3,0,0,["bP",A5W(A23),"ca",A5Y(AOB)],AAr,0,Cu,[],0,3,0,0,["bP",A5W(ATK),"ca",A5Y(AWT),"cg",A5X(A0C)],Ki,"ClipboardTest",5,Dt,[CC],0,3,0,0,["bQ",A5X(AYl),"cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(APB)],St,"CodiconDemo",5,Dt,[],0,3,0,0,["bP",A5W(AUm)],G0,0,Cu,[CC],1,3,0,0,["bQ",A5X(AYl),"cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),"bP",A5W(AFh)],Te,0,G0,[],0,3,0,0,["cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),
"ca",A5Y(A0q),"bQ",A5X(A1k)],Td,0,G0,[],0,3,0,0,["cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),"bQ",A5X(A2L),"bP",A5W(ANk),"ca",A5Y(AL5)],XU,0,CO,[C2],0,3,0,0,["gI",A5Y(A1r)],DA,"WindowDemo",6,CO,[C2],0,3,[0,0,0],0,["hB",A5W(AWp),"pq",A5W(APW),"kC",A5X(AIB),"gI",A5Y(A07)],Qs,"EditorInViewDemo",5,DA,[C2,GL,F8],0,3,[0,0,0],0,["cg",A5X(AWl),"hB",A5W(AME),"pq",A5W(AU$),"kC",A5X(A2N),"hK",A5X(ASG),"iq",A5X(AR2)],WW,0,B,[CC],0,0,0,0,["cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),"bQ",A5X(A0V)],KW,0,B,[],3,3,0,0,["rM",A5Y(AMo)],RM,
"ProjectViewDemo",5,DA,[GL,KW],0,3,[0,0,0],0,["hB",A5W(AQ1),"kC",A5X(AQT),"hK",A5X(AY7),"zg",A5X(ASq),"xh",A5X(ALJ),"uI",A5X(AOh),"rM",A5Y(ASc)],YQ,"FileViewDemo",6,DA,[C2],0,3,[0,0,0],0,["hB",A5W(AZk),"kC",A5X(A0x)],OO,0,Ko,[],0,3,0,0,["g4",A5W(AV5)],ACv,0,Cu,[CC],0,3,0,0,["bQ",A5X(AYl),"cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),"ca",A5Y(A2G),"bP",A5W(AXM),"cg",A5X(ASr)],TK,"FolderDiff",8,DA,[C2],0,3,[0,0,0],0,["hB",A5W(A1H)],PD,"DiffMiddleDemo",8,DA,[C2],0,3,[0,0,0],0,["hB",A5W(AW_)],J7,0,B,[],0,3,0,0,0,AFJ,
0,B,[],0,3,0,0,0,AEK,0,B,[],3,3,0,0,0,AH3,0,B,[],0,3,0,0,0,AF9,0,B,[],3,3,0,0,0,AHK,0,B,[],0,3,0,0,0,MA,0,B,[Jl,C5],0,3,0,0,0,KB,0,MA,[],0,0,0,0,0,AKW,0,B,[],0,3,0,0,0,Yx,0,B,[Cq],0,3,0,0,["A",A5X(AVR)],Yv,0,B,[W],0,3,0,0,["f",A5X(AXm)],Yw,0,B,[C$],0,3,0,0,["A",A5X(AS2)],AHG,0,Kf,[],0,3,0,0,0,TL,0,B,[CC],0,0,0,0,["bQ",A5X(AV3),"cu",A5Z(ALy),"cv",A5Y(AVX),"dz",A5Y(AVs)],YY,0,B,[Cq],0,3,0,0,["A",A5X(A1G)],YX,0,B,[Cq],0,3,0,0,["A",A5X(AZ6)],YW,0,B,[Fw],0,3,0,0,["h9",A5Y(AYr)],YV,0,B,[Z],0,3,0,0,["g",A5W(AU0)],YU,
0,B,[C$],0,3,0,0,["A",A5X(ARl)],YT,0,B,[EH],0,3,0,0,["dx",A5Z(A1O)],Hi,0,B0,[],0,3,0,0,0,AGI,0,B,[],3,3,0,0,0,Ws,0,B,[CC],0,0,0,0,["bQ",A5X(AYl),"cv",A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(ANT)],Wp,0,B,[],0,3,0,0,0,AF$,0,B,[],0,3,0,0,0,AIS,0,B,[],0,3,0,0,["bc",A5X(A04)],ABy,0,B,[Cq],0,3,0,0,["A",A5X(AQZ)],ABu,0,B,[C$],0,3,0,0,["A",A5X(ASK)],ABv,0,B,[Z],0,3,0,0,["g",A5W(A27)],ABw,0,B,[Z],0,3,0,0,["g",A5W(AMd)],B5,0,B,[],0,3,0,0,0]);
$rt_metadata([Um,0,B,[Cq],0,3,0,0,["A",A5X(AYk)],Un,0,B,[C$],0,3,0,0,["A",A5X(ALW)],AHo,0,B,[],0,3,0,0,0,O3,0,B,[C2],0,3,0,0,["gI",A5Y(AQ6)],O2,0,B,[Cq],0,3,0,0,["A",A5X(AZH)],ZF,0,B,[],3,3,0,0,0,AH$,0,B,[ZF],0,3,0,0,0,WD,0,B,[CC],0,0,0,0,["cu",A5Z(A0m),"cv",A5Y(AVa),"dz",A5Y(ALQ),"bQ",A5X(AW3)],Z1,0,B,[EH],0,3,0,0,["dx",A5Z(AQ4)],QH,0,B,[Cq],0,3,0,0,["A",A5X(AQS)],Rw,0,B,[C$],0,3,0,0,["A",A5X(AUo)],Rv,0,B,[W],0,3,0,0,["f",A5X(A0H)],ABI,0,B,[CC],0,0,0,0,["dz",A5Y(ALV),"cu",A5Z(A0m),"bQ",A5X(AZW),"cv",A5Y(AUe)],AGd,
0,B,[],0,3,0,0,0,Dj,0,B,[],3,3,0,FF,0,Yy,0,B,[CC],0,0,0,0,["cu",A5Z(A0m),"cv",A5Y(AO$),"dz",A5Y(AVo),"bQ",A5X(ANY)],VY,0,B,[EH],0,3,0,0,["dx",A5Z(A1L)],ADf,0,B,[Cq],0,3,0,0,["A",A5X(ANd)],ADe,0,B,[Fw],0,3,0,0,["h9",A5Y(AYx)],ADd,0,B,[Fw],0,3,0,0,["h9",A5Y(ANj)],ADc,0,B,[FQ],0,3,0,0,["cY",A5W(AQi)],ADh,0,B,[FQ],0,3,0,0,["cY",A5W(A1f)],Sc,0,B,[Cq],0,3,0,0,["A",A5X(ATV)],Zn,0,B,[Cq],0,3,0,0,["A",A5X(ATv)],Zm,0,B,[C$],0,3,0,0,["A",A5X(APX)],Ps,0,B,[W],0,3,0,0,["f",A5X(AZU)],Pt,0,B,[C$],0,3,0,0,["A",A5X(A1A)],Xr,
0,B,[C$],0,3,0,0,["A",A5X(ANB)],AHa,0,B,[],3,3,0,0,0,QQ,0,B,[Cq],0,3,0,0,["A",A5X(APC)],L4,0,B,[],0,3,0,0,0,AAS,0,B,[C$],0,3,0,0,["A",A5X(ARS)],Uq,0,B,[C$],0,3,0,0,["A",A5X(ART)],Up,0,B,[Cq],0,3,0,0,["A",A5X(ARk)],Dq,0,B,[],3,3,0,AN5,0,Cn,0,CG,[],12,3,0,TV,0,Kk,0,B,[],0,3,0,0,0,IV,0,B,[],0,3,0,0,0,AJI,0,B,[],0,3,0,0,0,DR,0,B,[],3,3,0,AU8,0,X1,0,B,[BR],3,3,0,0,0,Yd,0,B,[X1],0,3,0,0,["BG",A5Y(AXq)],X2,0,B,[BR],3,3,0,0,0,Yb,0,B,[X2],0,3,0,0,["BG",A5Y(AX5)],AE4,0,B,[],0,3,0,0,0,AH8,0,B,[BR],3,3,0,0,0,U4,0,B,[],
0,3,0,0,0,DU,0,B,[],3,3,0,AY4,0,HY,0,B,[],3,3,0,0,0,P8,0,B,[HY],0,3,0,0,["wz",A5Z(A0w)]]);
$rt_metadata([P9,0,B,[HY],0,3,0,0,0,TN,0,B,[W],0,3,0,0,["f",A5X(AZA)],PM,0,B,[W],0,3,0,0,["f",A5X(ANN)],PL,0,B,[W],0,3,0,0,["f",A5X(AMr)],PJ,0,B,[W],0,3,0,0,["f",A5X(ALF)],PH,0,B,[W],0,3,0,0,["f",A5X(A2M)],AHP,0,B,[],0,3,0,0,0,UJ,0,B,[W],0,3,0,0,["f",A5X(AX7)],AB8,0,B,[Cq],0,3,0,0,["A",A5X(AON)],AKv,0,B,[],0,3,0,0,["bc",A5X(AWs)],I3,0,B,[],0,3,0,0,0,Kg,0,B,[],4,3,0,0,0,AIu,0,B,[],0,3,0,0,0,Cr,0,CG,[],12,3,0,AFf,0,AK1,0,B,[],0,3,0,0,0,AFy,0,B,[BR],4,3,0,0,0,ALa,0,B,[],0,3,0,0,0,AEl,0,B,[],3,3,0,0,0,C1,0,B,[BR],
1,3,0,0,0,AJZ,0,C1,[],1,3,0,0,0,AKj,0,C1,[],1,3,0,0,0,AII,0,C1,[],1,3,0,0,0,AIU,0,C1,[],1,3,0,0,0,AKy,0,C1,[],1,3,0,0,0,Ve,0,B,[Z],0,3,0,0,["g",A5W(APu)],HG,0,CG,[],12,3,0,AQC,0,Px,0,B,[BC],0,3,0,0,["U",A5X(AVp)],Zx,0,B,[],0,3,0,0,0,AIq,0,B,[],0,3,0,0,0,Gm,0,B,[],0,3,0,0,0,AGG,0,B,[],0,3,0,0,0,AFq,0,B,[],4,3,0,0,0,LJ,0,B,[],0,0,0,0,0,AIw,0,B,[],3,3,0,0,0,Tg,0,B,[EH],0,3,0,0,["dx",A5Z(ATF)],Tf,0,B,[Fw],0,3,0,0,["h9",A5Y(A2d)],Ti,0,B,[FQ],0,3,0,0,["cY",A5W(AOT)],Th,0,B,[C9],0,3,0,0,0,Xz,0,B,[CC],0,0,0,0,["cv",
A5Y(ATw),"dz",A5Y(ALV),"cu",A5Z(A0m),"bQ",A5X(A2$)],AFw,0,B,[BR],1,3,0,0,0,AG7,0,B,[C2,FR,C9],0,3,0,0,["wc",A5W(AZw),"un",A5W(AOf),"gI",A5Y(A2R),"iw",A5X(AP$),"cD",A5W(AR0)],V0,0,B,[W],0,3,0,0,["f",A5X(AXU)],X0,0,B,[W],0,3,0,0,["f",A5X(AUp)],ABG,0,B,[W],0,3,0,0,["f",A5X(AZa)],PO,0,B,[DQ],0,3,0,0,["cY",A5W(AVd)],AJV,0,B,[],3,3,0,0,0,LV,0,B,[],3,3,0,0,0,Q4,0,B,[LV],0,3,0,0,["y7",A5X(AWa)],Pp,0,B,[BC],0,3,0,0,["U",A5X(A1S)],AGv,0,B,[],0,3,0,0,0]);
$rt_metadata([QI,0,B,[C9],0,3,0,0,0,AEo,0,B,[],0,3,0,0,0,T5,0,B,[],0,3,0,0,0,L9,0,B,[],0,3,0,0,0,Su,0,B,[],3,3,0,0,0,ACd,0,B,[W],0,3,0,0,["f",A5X(AWb)],Ga,0,I5,[],0,3,0,0,0,ADu,0,Fv,[],0,3,0,0,0,ADx,0,B,[W],0,3,0,0,["f",A5X(AUW)],Ud,0,B,[W],0,3,0,0,["f",A5X(A2c)],VG,0,B,[Z],0,3,0,0,["g",A5W(A0P)],ADG,0,Et,[CK],0,3,0,0,0,Gq,0,B,[],0,0,0,0,0,JC,0,B,[],4,3,0,0,0,T9,0,B,[],0,3,0,0,0,Op,0,B,[],1,3,0,0,0,ACG,0,B,[CK],0,3,0,0,["bc",A5X(ALG),"gz",A5W(ASd),"mn",A5X(A0b)],AFG,0,C1,[],1,3,0,0,0,UE,0,B,[Z],0,3,0,0,["g",
A5W(AMz)],AD5,0,B,[],3,3,0,0,0,HX,0,CE,[],1,3,0,0,["cD",A5W(AZq),"dv",A5X(AQM),"cg",A5X(AVl),"e7",A5Z(ANq),"cu",A5Z(A1Y),"cv",A5Y(ATb),"dz",A5Y(A17),"bQ",A5X(A2t),"dx",A5Z(AN2)],QU,0,HX,[F8],0,3,0,0,["BM",A5W(APp),"hS",A5W(AXK)],Y1,0,B,[W],0,3,0,0,["f",A5X(AVD)],Ri,0,B,[W],0,3,0,0,["f",A5X(AZn)],Fl,0,CE,[],0,3,0,0,0,Rd,0,Fl,[FR],0,3,0,0,["wc",A5W(AZw),"un",A5W(AOf),"cD",A5W(A2a),"ly",A5Y(AWQ),"dv",A5X(AU_),"oX",A5X(A0a),"mV",A5X(A1g),"bQ",A5X(AP1),"cv",A5Y(AN$),"cu",A5Z(AR7),"iw",A5X(A1t)],U1,0,B,[Z],0,3,0,
0,["g",A5W(AT0)],AFe,0,CE,[],0,3,0,0,["cD",A5W(ASO),"e7",A5Z(Rm),"dv",A5X(A0F),"cu",A5Z(AS$),"cv",A5Y(ASR),"dz",A5Y(AQ9),"bQ",A5X(AQU),"dx",A5Z(AXb),"hS",A5W(AHJ)],P_,0,Fl,[],0,3,0,0,["hS",A5W(AT8),"oX",A5X(A0g),"dv",A5X(AUk),"mV",A5X(AVr)],RU,0,B,[W],0,3,0,0,0,Uk,0,CE,[],0,3,0,0,0,Z3,0,Et,[CK],0,3,0,0,0,ABr,0,B,[W],0,3,0,0,["f",A5X(APL)],AD2,0,B,[Z],0,3,0,0,["g",A5W(AYv)],ADU,0,B,[Z],0,3,0,0,["g",A5W(A0c)],UU,0,B,[Z],0,3,0,0,["g",A5W(A01)],AK7,0,HX,[],0,0,0,0,["BM",A5W(APY)],ABo,0,B,[],0,3,0,0,0,JZ,0,B,[],
0,3,0,0,0,Ox,0,B,[],3,3,0,0,0,ABx,0,B,[],0,3,0,0,0,W_,0,B,[Z],0,3,0,0,["g",A5W(AUa)],RD,0,B,[Z],0,3,0,0,["g",A5W(AQ_)],Pz,0,B,[Z],0,3,0,0,["g",A5W(AWF)],PA,0,B,[Z],0,3,0,0,["g",A5W(AUM)],SC,0,B,[Z],0,3,0,0,["g",A5W(APR)],PW,0,B,[W],0,3,0,0,["f",A5X(ALT)],PV,0,B,[W],0,3,0,0,["f",A5X(AL_)],K_,0,B,[],0,3,0,0,0,C8,0,Bw,[],0,3,0,0,0]);
$rt_metadata([AJ9,0,Fv,[],0,3,0,0,0,AK4,0,B,[],0,3,0,0,0,R_,0,B,[W],0,3,0,0,["f",A5X(AZr)],ABH,0,B,[W],0,3,0,0,["f",A5X(AXZ)],Si,0,B,[W],0,3,0,0,["f",A5X(AWZ)],Sh,0,B,[W],0,3,0,0,["f",A5X(A1_)],EK,0,B,[],3,3,0,0,0,W6,0,B,[EK],0,0,0,0,["cz",A5W(B4),"b7",A5W(B6),"pm",A5W(Zr)],Lf,0,Op,[],1,3,0,0,0,S5,0,Lf,[],0,3,0,0,0,AC$,0,B,[W],0,3,0,0,0,Vz,0,B,[W],0,3,0,0,["f",A5X(ATG)],Qc,0,B,[DQ],0,3,0,0,["cY",A5W(ALZ)],Qb,0,B,[DQ],0,3,0,0,["cY",A5W(AN4)],RP,0,B,[DQ],0,3,0,0,["cY",A5W(A1D)],XB,0,B,[DQ],0,3,0,0,["cY",A5W(AUL)],Z$,
0,B,[Cd],0,3,0,0,["bh",A5X(A2v)],AFK,0,B,[BR],1,3,0,0,0,ACz,0,B,[Cd],0,3,0,0,["bh",A5X(AOn)],AJH,0,B,[BC],0,3,0,0,0,AGb,0,B,[BC],0,3,0,0,0,W3,0,B,[W],0,3,0,0,["f",A5X(ANb)],W2,0,B,[W],0,3,0,0,["f",A5X(ASF)],Hj,0,B,[],0,3,0,0,0,Dg,0,Hj,[],0,3,0,0,0,RR,0,B,[Z],0,3,0,0,["g",A5W(AYH)],Ln,0,Fl,[FR],0,3,0,0,["wc",A5W(AZw),"un",A5W(AOf),"cD",A5W(ARC),"ly",A5Y(AMf),"dv",A5X(AY1),"cu",A5Z(A1K),"cv",A5Y(ANe)],AJi,0,Ln,[],0,3,0,0,["wc",A5W(AZw),"un",A5W(AOf)],Tl,0,B,[Z],0,3,0,0,["g",A5W(ATA)],AE5,0,B,[],0,3,0,0,0,Yj,0,
B,[Z],0,3,0,0,["g",A5W(AOg)],Yk,0,B,[Z],0,3,0,0,["g",A5W(AMG)],AA3,0,B,[Z],0,3,0,0,["g",A5W(ALk)],AA4,0,B,[Z],0,3,0,0,["g",A5W(AOK)],AG4,0,B,[],0,3,0,0,0,SF,0,Ef,[Ey,C5],0,3,0,0,0,UC,0,B,[],0,3,0,0,0,Ul,0,B,[],0,3,0,0,0,Yp,0,B,[CV],0,3,0,0,0,SP,0,B,[W],0,3,0,0,["f",A5X(ASH)],YA,0,Et,[CK],0,3,0,0,0,J3,0,B,[],4,3,0,0,0,TW,0,B,[Z],0,3,0,0,["g",A5W(ALY)],TX,0,B,[Z],0,3,0,0,["g",A5W(AN0)],TY,0,B,[Z],0,3,0,0,["g",A5W(A2b)],TZ,0,B,[Z],0,3,0,0,["g",A5W(AQe)],T0,0,B,[Z],0,3,0,0,["g",A5W(ASm)],OS,0,B,[Cd],0,3,0,0,["bh",
A5X(A3b)],VC,0,B,[],3,3,0,A3_,0,Py,0,CE,[],0,3,0,0,["dv",A5X(ALN)]]);
$rt_metadata([AF4,0,B,[Mr],0,3,0,0,["wc",A5W(AZw),"un",A5W(AOf),"lf",A5W(AS0),"kp",A5W(A1V),"hC",A5X(ATX),"uW",A5W(APN),"pD",A5W(AVu),"po",A5Y(AQm),"qh",A5X(AZf),"pw",A5W(MC)],ABP,0,B,[],0,3,0,0,0,TD,0,B,[],3,3,0,AO4,0,AD$,0,B,[Gc],0,3,0,0,["qg",A5Y(ASt)],AKY,0,GV,[],0,0,0,0,["t4",A5X(A2Z)],Rb,0,B,[Z],0,3,0,0,["g",A5W(AZd)],WA,0,B,[Z],0,3,0,0,["g",A5W(AY_)],QW,0,B,[F8],0,3,0,0,["iq",A5X(A0E)],QV,0,B,[DQ],0,3,0,0,["cY",A5W(AWM)],R2,0,B,[Z],0,3,0,0,["g",A5W(AXR)],Eh,0,Bw,[],0,3,0,0,0,W$,0,B,[],0,3,0,0,0,AG_,0,
B,[],0,3,0,0,0,SV,0,B,[],0,0,0,0,0,AEO,0,B,[],3,3,0,0,0,ACT,0,B,[Z],0,3,0,0,["g",A5W(AT9)],Yr,0,B,[],1,3,0,0,0,Zh,0,B,[Ms],3,3,0,0,0,Pn,0,B,[Zh],3,3,0,0,0,D$,0,B,[Pn],1,3,0,0,["si",A5W(AYd)],AAb,0,D$,[],0,3,0,0,0,Rg,0,B,[],3,3,0,0,0,OR,0,B,[W],0,3,0,0,0,ADB,0,B,[W],0,3,0,0,["f",A5X(AMg)],AFT,0,B,[],3,3,0,0,0,JA,0,GR,[],0,0,0,0,0,Gu,0,Bw,[],0,3,0,0,0,ABQ,0,B,[HY],0,3,0,0,["wz",A5Z(APV)],AB_,0,B,[W],0,3,0,0,["f",A5X(ASZ)],ADK,0,B,[Cd],0,3,0,0,["bh",A5X(A0W)],ADJ,0,B,[Cd],0,3,0,0,["bh",A5X(AWJ)],ADa,0,B,[Cd],0,
3,0,0,["bh",A5X(AXy)],AC_,0,B,[Cd],0,3,0,0,["bh",A5X(AX4)],AKc,0,B,[],0,3,0,0,0,Q3,0,B,[W],0,3,0,0,["f",A5X(AVI)],AEu,0,B,[W],0,3,0,0,0,Pg,0,B,[W],0,3,0,0,["f",A5X(AP6)],Tp,0,B,[Cy],0,3,0,0,["cr",A5X(AVb)],Vn,0,B,[BC],0,3,0,0,0,FJ,0,B,[],0,3,0,0,0,AIj,0,B,[],0,3,0,0,0,AEU,0,B,[],0,3,0,0,0,ALc,0,B,[],0,3,0,0,0,ADv,0,B,[Z],0,3,0,0,["g",A5W(AVv)],ADw,0,B,[Z],0,3,0,0,["g",A5W(AXQ)],FW,0,B,[],0,3,0,0,0,VO,0,B,[W],0,3,0,0,["f",A5X(AOu)],NI,0,FW,[],0,3,0,0,0,Lb,0,FW,[],0,3,0,0,0,UQ,0,B,[W],0,3,0,0,["f",A5X(AVy)]]);
$rt_metadata([QK,0,B,[],0,3,0,0,0,Qg,0,B,[W],0,3,0,0,["f",A5X(AY2)],Qk,0,B,[Hv],3,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],Fr,0,Fy,[Qk],1,3,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],No,0,Fr,[],1,0,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],Ue,0,No,[],0,0,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],N4,0,Ef,[],1,0,0,0,0,Ub,0,N4,[],0,0,0,0,0,Oj,0,Fm,[LF],1,0,0,0,["fk",A5X(AUF),"jf",A5W(AWD),"qf",A5X(AQw),"pH",A5X(APy)],Uc,0,Oj,[],0,0,0,0,["fk",A5X(AUF),"nK",A5X(AQE),"c1",A5W(APQ),"b5",A5W(ANF),"eC",A5W(AL3)],T_,0,B,[EK],0,0,0,0,["cz",A5W(ALL),
"b7",A5W(AZP),"pm",A5W(ASx)],M9,0,B,[EK],3,3,0,0,0,Ua,0,B,[M9],0,0,0,0,0,V9,0,B,[Gc],0,3,0,0,0,Re,0,B,[CV],0,3,0,0,["A",A5X(A3d)],Km,0,Eh,[],0,3,0,0,0,JG,0,Bw,[],0,3,0,0,0,Od,0,Bw,[],0,3,0,0,0,Yh,0,B,[W],0,3,0,0,["f",A5X(AZQ)],VW,0,B,[W],0,3,0,0,0,ACi,0,B,[W],0,3,0,0,["f",A5X(AMy)],Q2,0,B,[Rg],0,3,0,0,0,AAp,0,B,[Z],0,3,0,0,["g",A5W(AVw)],G5,0,B,[],0,3,0,0,0,Qt,0,Fr,[],0,0,0,0,["pH",A5X(AYe)],TG,0,Fr,[],0,0,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],Qu,0,Fy,[],0,0,0,0,["fk",A5X(AUF),"pH",A5X(AYe)],Wa,0,B,[W],0,3,0,0,
["f",A5X(AW6)],T1,0,B,[W],0,3,0,0,["f",A5X(AYI)],Kq,0,B,[],0,3,0,0,["bc",A5X(AJS)],Mk,0,Kq,[],0,3,0,0,["bc",A5X(AVS)],E8,0,B,[],0,3,0,0,["bc",A5X(AIm)],HE,0,E8,[],0,3,0,0,0,J_,0,E8,[],0,3,0,0,["bc",A5X(A2g)],Ji,0,E8,[],0,3,0,0,["bc",A5X(AVg)],AFo,0,D$,[],0,3,0,0,0,R6,0,B,[Z],0,3,0,0,["g",A5W(AO3)],R7,0,B,[Z],0,3,0,0,["g",A5W(AMZ)],R4,0,B,[Z],0,3,0,0,["g",A5W(AL7)],R5,0,B,[Z],0,3,0,0,["g",A5W(AOX)],Rz,0,B,[Z],0,3,0,0,["g",A5W(A0n)],Ry,0,B,[Z],0,3,0,0,["g",A5W(AZz)],Rx,0,B,[Z],0,3,0,0,["g",A5W(AUy)],Qm,0,B,[Z],
0,3,0,0,["g",A5W(ARa)],Q1,0,B,[],3,3,0,0,0,YM,0,B,[Z],0,3,0,0,["g",A5W(AMQ)],S_,0,B,[Hb],0,3,0,0,["ql",A5Y(AOt)],Wq,0,B,[],0,3,0,0,0,RF,0,B,[],0,3,0,0,0,RZ,0,B,[W],0,3,0,0,["f",A5X(ARJ)]]);
$rt_metadata([Xe,0,B,[W],0,3,0,0,["f",A5X(AWo)],UI,0,B,[LV],0,3,0,0,["y7",A5X(Nt)],AC6,0,BI,[],0,3,0,0,0,Pe,0,B,[Z],0,3,0,0,["g",A5W(AYc)],Pf,0,B,[Z],0,3,0,0,["g",A5W(A1I)],Pd,0,B,[Z],0,3,0,0,["g",A5W(AUD)],U6,0,B,[Z],0,3,0,0,["g",A5W(AP8)],U5,0,B,[Z],0,3,0,0,["g",A5W(A0D)],X8,0,B,[DQ],0,3,0,0,["cY",A5W(ANr)],AAe,0,B,[Z],0,3,0,0,["g",A5W(AO_)],AAf,0,B,[Z],0,3,0,0,["g",A5W(A1u)],VM,0,B,[Z],0,3,0,0,["g",A5W(ALu)],VH,0,B,[Z],0,3,0,0,["g",A5W(APa)],VI,0,B,[Z],0,3,0,0,["g",A5W(AT4)],VJ,0,B,[Z],0,3,0,0,["g",A5W(AYR)],VK,
0,B,[Z],0,3,0,0,["g",A5W(AXF)],ON,0,B,[DQ],0,3,0,0,["cY",A5W(ATf)],T2,0,B,[Hb],0,3,0,0,["ql",A5Y(AR_)],XP,0,B,[Mb],3,3,0,0,0,ACj,0,B,[XP],0,0,0,0,["pa",A5W(Hk),"tk",A5W(A2f),"cK",A5W(Q5)],AHx,0,B,[CK],0,3,0,0,["bc",A5X(ARc)],WC,0,B,[W],0,3,0,0,["f",A5X(AYG)],V1,0,B,[W],0,3,0,0,["f",A5X(A3a)],Tw,0,B,[HY],0,3,0,0,0,FD,0,B,[],0,0,0,0,0,AAw,0,FD,[EK],0,0,0,0,0,Tz,0,FD,[EK],0,0,0,0,0,Zy,0,FD,[EK],0,0,0,0,0,AEM,0,B,[W],0,0,0,0,0,Zw,0,B,[C5],4,3,0,0,0,Z8,0,B,[W],0,3,0,0,["f",A5X(AQt)],Z7,0,B,[W],0,3,0,0,["f",A5X(A0d)],XE,
0,B,[W],0,3,0,0,["f",A5X(AWw)],HW,0,B,[],3,3,0,0,0,Ta,0,B,[HW],0,3,0,0,["lS",A5Z(AY3)],Tb,0,B,[HW],0,3,0,0,["lS",A5Z(AXJ)],IS,0,B,[C5,CK],0,3,0,0,0,KL,0,B,[],3,3,0,0,0,R1,0,B,[KL],0,3,0,0,0,XT,0,B,[KL],3,3,0,0,0,AFU,0,B,[XT],0,3,0,0,0,Sm,0,B,[HW],0,3,0,0,["lS",A5Z(AZx)],Sl,0,B,[CV],0,3,0,0,["A",A5X(ATU)],Sk,0,B,[CV],0,3,0,0,["A",A5X(AR1)],So,0,B,[HW],0,3,0,0,["lS",A5Z(AY$)],GC,0,CG,[],12,0,0,SA,0,AEb,0,B,[W],0,3,0,0,["f",A5X(AXg)],BQ,0,B,[],1,0,0,0,["cm",A5Z(ID),"cx",A50(IK),"iY",A5W(AV1),"T",A5X(ATm),"bZ",
A5X(A1M),"gv",A5W(A2w),"eR",A5W(Kp)],WI,0,B,[Z],0,3,0,0,["g",A5W(AOH)],V2,0,B,[W],0,3,0,0,["f",A5X(AZB)]]);
$rt_metadata([V3,0,B,[W],0,3,0,0,["f",A5X(AOc)],XD,0,B,[W],0,3,0,0,["f",A5X(AQH)],Ik,0,Dg,[],0,3,0,0,0,AA$,0,B,[],32,0,0,A5c,0,SD,0,B,[W],0,3,0,0,["f",A5X(AR4)],RT,0,B,[W],0,3,0,0,["f",A5X(AOi)],CZ,0,BQ,[],0,0,0,Oy,["c",A5Z(AMe),"I",A5X(AMu)],G1,0,B,[],0,0,0,0,0,Ka,0,BS,[],0,3,0,0,0,PF,0,B,[Z],0,3,0,0,["g",A5W(AU9)],AD6,0,B,[KW],0,0,0,0,["rM",A5Y(AMo),"zg",A5X(AWU),"xh",A5X(ANf),"uI",A5X(ANK)],R0,0,CZ,[],0,0,0,0,["c",A5Z(AVc),"I",A5X(A0K)],ADZ,0,CZ,[],0,0,0,0,["c",A5Z(AWm)],QO,0,CZ,[],0,0,0,0,["c",A5Z(AMC)],SH,
0,CZ,[],0,0,0,0,["c",A5Z(AVf),"I",A5X(AZR)],F4,0,CZ,[],0,0,0,0,["c",A5Z(ATC)],Cb,0,BQ,[],1,0,0,0,["c",A5Z(A2W),"b8",A5W(A1n),"I",A5X(APh)],AG8,0,Cb,[],0,0,0,0,["bz",A5Y(A03),"cm",A5Z(AXa),"cx",A50(AWi),"I",A5X(AVe)],B9,0,BQ,[],0,0,0,0,["c",A5Z(AOw),"T",A5X(ARu),"bZ",A5X(AYC),"I",A5X(ARW),"eR",A5W(AMY)],Kl,0,B9,[],0,0,0,0,["c",A5Z(ARi),"I",A5X(A0p)],Ea,0,Kl,[],0,0,0,0,["c",A5Z(AWH),"T",A5X(A0i)],Wl,0,Ea,[],0,0,0,0,["c",A5Z(ARs),"I",A5X(ATr)],ACK,0,Ea,[],0,0,0,0,["c",A5Z(AMq),"I",A5X(A1q)],Zz,0,Ea,[],0,0,0,0,
["c",A5Z(AMW),"I",A5X(A29)],S6,0,Ea,[],0,0,0,0,["c",A5Z(AUU),"I",A5X(A0z)],HR,0,B9,[],0,0,0,0,["c",A5Z(ALI),"cm",A5Z(AQa),"cx",A50(A0N),"bZ",A5X(AYA),"gv",A5W(AZO),"eR",A5W(AT1)],Kw,0,Dg,[],0,3,0,0,0,G3,0,B,[],1,0,0,0,0,Y,0,G3,[],1,0,0,Qa,["dU",A5W(AVN),"fQ",A5W(AVt),"lY",A5W(A1i),"it",A5W(A2r)],AEZ,0,Y,[],0,0,0,0,["o",A5X(Db),"dU",A5W(C4),"fQ",A5W(AW7),"lY",A5W(ATa),"cK",A5W(AZb),"it",A5W(AN9)],MJ,0,Bw,[],0,3,0,0,0,En,0,BQ,[],1,0,0,0,["bZ",A5X(ASv),"I",A5X(A1U),"eR",A5W(AQr)],Dc,0,En,[],0,0,0,0,["c",A5Z(AUV)],FO,
0,Dc,[],0,0,0,0,["c",A5Z(AVC)],C0,0,En,[],0,0,0,0,["c",A5Z(AU6)],E7,0,Dc,[],0,0,0,0,["c",A5Z(AYQ),"T",A5X(AUA)],UZ,0,Dc,[],0,0,0,0,["c",A5Z(A2T),"cm",A5Z(AQR)],Bf,0,B,[],1,0,0,0,0,Dv,0,BS,[],0,3,0,0,0,Wv,0,G3,[Ey],0,0,0,0,["cK",A5W(AZh)],Xy,0,BQ,[],0,0,0,0,["c",A5Z(APz),"I",A5X(AZN)],ADp,0,B,[Ey,C5],0,3,0,0,0,OW,0,B9,[],0,0,0,0,0,Q_,0,B9,[],0,0,0,0,["c",A5Z(AMc),"T",A5X(AZG),"I",A5X(AMI),"bZ",A5X(AMt)],D4,0,B9,[],0,0,0,0,["c",A5Z(AW1),"o",A5X(AOl),"bZ",A5X(AL$),"T",A5X(A1c),"I",A5X(ANZ)],MG,0,D4,[],0,0,0,0,
["o",A5X(APi)],AET,0,Cb,[],0,0,0,0,["bz",A5Y(AYn)],ED,0,Cb,[],0,0,0,0,["bz",A5Y(Wc),"bZ",A5X(ARw)],XW,0,B9,[],0,0,0,0,["T",A5X(AQg),"c",A5Z(ALt),"bZ",A5X(AVU),"I",A5X(ATh)],EJ,0,Cb,[],0,0,0,0,["b8",A5W(AYb),"bz",A5Y(AOF),"cm",A5Z(ANL),"cx",A50(APv),"bZ",A5X(AS8)]]);
$rt_metadata([AHt,0,Cb,[],0,0,0,0,["bz",A5Y(AUH)],AEh,0,Cb,[],0,0,0,0,["bz",A5Y(ALB)],FT,0,B9,[],0,0,0,0,["T",A5X(A2z),"c",A5Z(ARh),"bZ",A5X(APA),"I",A5X(A0j)],Vs,0,FT,[],0,0,0,0,0,ABg,0,FT,[],0,0,0,0,0,V_,0,C0,[],0,0,0,0,["c",A5Z(AWr)],YB,0,C0,[],0,0,0,0,["c",A5Z(AY5)],Gx,0,C0,[],0,0,0,0,["c",A5Z(A1a),"T",A5X(A16)],Qy,0,Gx,[],0,0,0,0,["c",A5Z(APr),"T",A5X(AZj)],Gi,0,C0,[],0,0,0,0,["c",A5Z(A26)],O$,0,Gi,[],0,0,0,0,["c",A5Z(AOZ)],RV,0,C0,[],0,0,0,0,["c",A5Z(AT7)],Zc,0,Gx,[],0,0,0,0,["c",A5Z(AMJ)],TJ,0,Gi,[],
0,0,0,0,["c",A5Z(AVk)],RW,0,En,[],0,0,0,0,["c",A5Z(A2X),"cm",A5Z(ASU)],XF,0,En,[],0,0,0,0,["c",A5Z(ARx),"cm",A5Z(ALv)],Fx,0,B,[],1,0,0,0,0,AEe,0,Dc,[],0,0,0,0,["c",A5Z(AL2)],UV,0,E7,[],0,0,0,0,["c",A5Z(AQG)],X$,0,FO,[],0,0,0,0,["c",A5Z(A0Q)],Y_,0,Dc,[],0,0,0,0,["c",A5Z(ARt)],ABs,0,E7,[],0,0,0,0,["c",A5Z(AL8)],RJ,0,FO,[],0,0,0,0,["c",A5Z(A05)],Le,0,BQ,[],4,0,0,0,["c",A5Z(AYB),"I",A5X(AX3)],AFc,0,BQ,[],0,0,0,0,["c",A5Z(AVL),"I",A5X(AVT)],XC,0,BQ,[],0,0,0,0,["c",A5Z(APk),"I",A5X(AUt)],Vm,0,BQ,[],4,0,0,0,["c",A5Z(AZ8),
"I",A5X(AWj)],AC9,0,BQ,[],0,0,0,0,["c",A5Z(AZE),"I",A5X(AUG)],WO,0,BQ,[],0,0,0,0,["c",A5Z(AWe),"I",A5X(AOs)],AHf,0,B9,[],0,0,0,0,["c",A5Z(AT$),"T",A5X(AVW),"iY",A5W(AZp),"I",A5X(AVV)],AEY,0,B9,[],4,0,0,0,["c",A5Z(AZy),"T",A5X(A0G),"iY",A5W(ALh),"I",A5X(AUj)],AKI,0,BQ,[],4,0,0,0,["c",A5Z(APE),"I",A5X(AXo)],AJO,0,BQ,[],0,0,0,0,["c",A5Z(ARd),"I",A5X(AXi)],AH0,0,BQ,[],0,0,0,0,["c",A5Z(AXY),"I",A5X(AM6)],Ib,0,B9,[],0,0,0,0,["c",A5Z(AL4),"T",A5X(A0f),"I",A5X(ASb)],AKO,0,Ib,[],0,0,0,0,["c",A5Z(AM$),"cm",A5Z(ATp),"cx",
A50(ALP),"bZ",A5X(AY0)],AJa,0,Ib,[],0,0,0,0,["c",A5Z(AP7)],PS,0,GM,[JH],0,3,0,0,["pR",A50(AOa),"pe",A5Z(AVO),"jZ",A5X(AV8),"p9",A5Y(A1l)],ZN,0,Cb,[],0,0,0,0,["bz",A5Y(ANl),"cm",A5Z(AVJ),"cx",A50(AXs),"bZ",A5X(AOL)],AEg,0,Cb,[],0,0,0,0,["bz",A5Y(AQb)],Pb,0,Cb,[],0,0,0,0,["bz",A5Y(A0R)],He,0,B,[],4,0,0,ASk,0,Wg,0,Cb,[],0,0,0,0,["bz",A5Y(ASA)],NN,0,B9,[],0,0,0,0,["T",A5X(AZL),"c",A5Z(AWk),"cm",A5Z(AOJ),"cx",A50(AWK),"bZ",A5X(ALO),"I",A5X(AS3)],NW,0,B9,[],0,0,0,0,["T",A5X(AV7),"c",A5Z(ALx),"cm",A5Z(AZV),"cx",A50(ASw),
"bZ",A5X(ANm),"I",A5X(AZ2)],Eg,0,Cb,[],0,0,0,0,["bz",A5Y(A0r),"cm",A5Z(AZc),"cx",A50(AMO),"bZ",A5X(A0l)],ACf,0,Fx,[],0,0,0,0,["iS",A5X(AMT),"z0",A5Y(AR$)],ACg,0,Fx,[],0,0,0,0,["iS",A5X(A06),"z0",A5Y(ATW)],AGH,0,B,[],0,0,0,0,0,AEs,0,B,[],0,0,0,0,0]);
$rt_metadata([NL,0,Bf,[],0,0,0,0,["G",A5W(AJg)],M_,0,Bf,[],0,0,0,0,["G",A5W(AJK)],AGA,0,Bf,[],0,0,0,0,["G",A5W(A0J)],AGV,0,Bf,[],0,0,0,0,["G",A5W(AS5)],AGX,0,Bf,[],0,0,0,0,["G",A5W(ANQ)],NH,0,Bf,[],0,0,0,0,["G",A5W(AE1)],LM,0,NH,[],0,0,0,0,["G",A5W(AFt)],AHR,0,Bf,[],0,0,0,0,["G",A5W(AXH)],OD,0,LM,[],0,0,0,0,["G",A5W(AHY)],AJq,0,OD,[],0,0,0,0,["G",A5W(AQs)],AFX,0,Bf,[],0,0,0,0,["G",A5W(AWz)],AE$,0,Bf,[],0,0,0,0,["G",A5W(AQp)],AIH,0,Bf,[],0,0,0,0,["G",A5W(ATZ)],AKx,0,Bf,[],0,0,0,0,["G",A5W(AZm)],AHU,0,Bf,[],0,
0,0,0,["G",A5W(AUN)],AKf,0,Bf,[],0,0,0,0,["G",A5W(AO5)],AGr,0,Bf,[],0,0,0,0,["G",A5W(ASg)],AG9,0,Bf,[],0,0,0,0,["G",A5W(AWx)],AEE,0,Bf,[],0,0,0,0,["G",A5W(ANw)],AH7,0,Bf,[],0,0,0,0,["G",A5W(A2m)],AKm,0,Bf,[],0,0,0,0,["G",A5W(AUI)],AGQ,0,Bf,[],0,0,0,0,["G",A5W(APF)],AI2,0,Bf,[],0,0,0,0,["G",A5W(ANC)],AFZ,0,Bf,[],0,0,0,0,["G",A5W(AXu)],AHC,0,Bf,[],0,0,0,0,["G",A5W(AYw)],AKr,0,Bf,[],0,0,0,0,["G",A5W(ATi)],AFD,0,Bf,[],0,0,0,0,["G",A5W(ARP)],AFk,0,Bf,[],0,0,0,0,["G",A5W(AQV)],AHS,0,Bf,[],0,0,0,0,["G",A5W(A0B)],Ky,
0,Bf,[],0,0,0,0,["G",A5W(AFY)],AKF,0,Ky,[],0,0,0,0,["G",A5W(AQN)],AJv,0,NL,[],0,0,0,0,["G",A5W(AVH)],AFi,0,M_,[],0,0,0,0,["G",A5W(AOC)],AIK,0,Bf,[],0,0,0,0,["G",A5W(APT)],AIW,0,Bf,[],0,0,0,0,["G",A5W(ATM)],AJk,0,Bf,[],0,0,0,0,["G",A5W(AXh)],AJr,0,Bf,[],0,0,0,0,["G",A5W(ALm)],AIN,0,B,[],4,0,0,0,0,AES,0,B,[],4,3,0,0,0,WR,0,B,[],0,3,0,0,0,AGL,0,B,[],0,3,0,0,0,AI9,0,B,[],4,3,0,0,0,Hl,0,Bw,[],0,3,0,0,0,ACM,0,B,[W],0,3,0,0,["f",A5X(ALo)],ACL,0,B,[W],0,3,0,0,["f",A5X(ATj)],X4,0,B,[CV],0,3,0,0,["A",A5X(AZ7)],Sr,0,B,
[W],0,3,0,0,["f",A5X(AXn)],RN,0,B,[W],0,3,0,0,["f",A5X(AM1)],ACb,0,B,[CV],0,0,0,0,["A",A5X(ANU)],ABC,0,B,[W],0,3,0,0,0]);
$rt_metadata([ABE,0,B,[W],0,3,0,0,["f",A5X(A19)],KE,0,B,[],3,3,0,0,0,PG,0,B,[KE],0,0,0,0,["tW",A5X(A0h),"w_",A5X(AXO),"wb",A5W(ASB)],AA5,0,B,[W],0,3,0,0,0,ABV,0,B,[W],0,3,0,0,0,AAW,0,B,[Z],0,3,0,0,["g",A5W(AW$)],UY,0,Y,[],0,0,0,0,["o",A5X(ANW)],UW,0,Y,[],0,0,0,0,["o",A5X(AU5)],P4,0,Y,[],0,0,0,0,["o",A5X(APK),"cK",A5W(AXw)],XL,0,Y,[],0,0,0,0,["o",A5X(A0u)],XJ,0,Y,[],0,0,0,0,["o",A5X(ASz)],XK,0,Y,[],0,0,0,0,["o",A5X(AYM)],XO,0,Y,[],0,0,0,0,["o",A5X(AWS)],XQ,0,Y,[],0,0,0,0,["o",A5X(ALi)],XM,0,Y,[],0,0,0,0,["o",
A5X(AOy)],XN,0,Y,[],0,0,0,0,["o",A5X(AQf)],XR,0,Y,[],0,0,0,0,["o",A5X(ATs)],XS,0,Y,[],0,0,0,0,["o",A5X(AWt)],P3,0,Y,[],0,0,0,0,["o",A5X(A3e)],Qo,0,Y,[],0,0,0,0,["o",A5X(AOA)],P1,0,Y,[],0,0,0,0,["o",A5X(ANc)],P2,0,Y,[],0,0,0,0,["o",A5X(AXl)],P7,0,Y,[],0,0,0,0,["o",A5X(APm)],P0,0,Y,[],0,0,0,0,["o",A5X(A1x)],P5,0,Y,[],0,0,0,0,["o",A5X(AVQ)],P6,0,Y,[],0,0,0,0,["o",A5X(ARI)],Md,0,B,[],3,3,0,0,0,AAk,0,B,[Md],4,3,0,0,0,AJx,0,B,[Hb],0,3,0,0,0,Da,0,B,[],3,3,0,AGZ,0,Cx,0,CG,[],12,3,0,AGm,0,D1,0,B,[],3,3,0,AVi,0,ACC,0,
B,[],0,3,0,0,0,O5,0,HR,[],0,0,0,0,["cm",A5Z(AOe),"cx",A50(A25),"gv",A5W(AM3)],Q7,0,Bw,[],0,3,0,0,0,Vq,0,Bw,[],0,3,0,0,0,T3,0,Ga,[],0,3,0,0,0,Q0,0,Ga,[],0,3,0,0,0,Vo,0,B,[Cd],0,3,0,0,["bh",A5X(AXt)],Vp,0,B,[Cd],0,3,0,0,["bh",A5X(AVP)],AB7,0,B,[],0,3,0,0,0,AER,0,B,[],3,3,0,0,0,AEA,0,B,[],0,3,0,0,0,Yo,0,B,[W],0,3,0,0,["f",A5X(AYq)],ACo,0,B,[Cd],0,3,0,0,["bh",A5X(ARR)],ACq,0,B,[Cd],0,3,0,0,["bh",A5X(AQ3)],ACr,0,B,[Cd],0,0,0,0,["bh",A5X(ARX)],Xv,0,B,[Z],0,3,0,0,0,AAL,0,B,[KE],0,0,0,0,["tW",A5X(A1J),"w_",A5X(ATq),
"wb",A5W(A14)],AB$,0,B,[Md],0,0,0,0,0]);
$rt_metadata([Ty,0,B,[Cd],0,3,0,0,["bh",A5X(AYF)],ACk,0,B,[Z],0,3,0,0,["g",A5W(AZZ)],AAN,0,Y,[],0,0,0,0,["o",A5X(ATB)],Wo,0,Y,[],0,0,0,0,["o",A5X(AVF)],R9,0,Y,[],0,0,0,0,["o",A5X(AL6)],R8,0,Y,[],0,0,0,0,["o",A5X(AXf)],Va,0,Y,[],0,0,0,0,["o",A5X(APd)],X7,0,Y,[],0,0,0,0,["o",A5X(A13)],PP,0,Y,[],0,0,0,0,["o",A5X(ARo)],Zl,0,Y,[],0,0,0,0,["o",A5X(ASj)],Wk,0,Y,[],0,0,0,0,["o",A5X(A2U)],Wm,0,Y,[],0,0,0,0,["o",A5X(ANo)],Pu,0,Y,[],0,0,0,0,["o",A5X(ATJ)],Yn,0,Y,[],0,0,0,0,["o",A5X(AYV)],Yt,0,Y,[],0,0,0,0,["o",A5X(A0e)],AA_,
0,Y,[],0,0,0,0,["o",A5X(A1Q)],AAl,0,Y,[],0,0,0,0,["o",A5X(AT5)],O0,0,Y,[],0,0,0,0,["o",A5X(ANi)],Mn,0,Y,[],0,0,0,0,["o",A5X(ARp)],ZT,0,Mn,[],0,0,0,0,["o",A5X(A1d)],ADF,0,B,[BR],3,3,0,0,0,YR,0,B,[ADF],0,3,0,0,["Iu",A5W(AP0)],AGa,0,B,[BR],3,3,0,0,0,RI,0,B,[Z],0,3,0,0,["g",A5W(A2o)],Ru,0,B,[BC],0,3,0,0,["U",A5X(ATy)],I4,0,B,[],3,3,0,0,0,Rr,0,B,[I4],0,3,0,0,["lG",A5X(AOV)],NR,0,B,[],0,3,0,0,["bc",A5X(ATg)],Rs,0,B,[BC],0,3,0,0,["U",A5X(AMH)],Rt,0,B,[I4],0,3,0,0,["lG",A5X(AYN)],AIp,0,B,[],0,0,0,0,0,Lk,0,D$,[],1,3,
0,0,["jk",A5X(APD),"si",A5W(ATd)],RB,0,Lk,[],0,3,0,0,0,ADg,0,B,[Z],0,3,0,0,["g",A5W(AW4)],AK9,0,B,[],0,3,0,0,0,HK,0,B,[],1,3,0,0,0,Jx,0,HK,[],0,3,0,0,["sY",A5W(AVm),"zI",A5W(AXW)],IP,0,B,[],0,3,0,0,["bc",A5X(AOR)],Rc,0,B,[W],0,3,0,0,["f",A5X(ATO)],ADq,0,B,[W],0,3,0,0,["f",A5X(AS_)],SX,0,B,[W],0,3,0,0,["f",A5X(A0M)],SW,0,B,[W],0,3,0,0,["f",A5X(AQI)],SU,0,B,[W],0,3,0,0,["f",A5X(ATx)],QL,0,B,[BC],0,3,0,0,0,QM,0,B,[I4],0,3,0,0,["lG",A5X(A2j)],AAT,0,B,[CV],0,0,0,0,["A",A5X(AWL)],O9,0,B,[CV],0,3,0,0,["A",A5X(ASN)],S1,
0,HK,[],0,3,0,0,["sY",A5W(AOW),"zI",A5W(AOr)],ACt,0,B,[W],0,3,0,0,["f",A5X(AZt)],ACu,0,B,[W],0,3,0,0,["f",A5X(AX6)]]);
$rt_metadata([ACV,0,D$,[],0,3,0,0,["jk",A5X(AUE)],ACN,0,B,[W],0,3,0,0,["f",A5X(ATN)],Vb,0,B,[W],0,3,0,0,["f",A5X(AUR)],VQ,0,B,[W],0,3,0,0,["f",A5X(AYh)],VR,0,B,[W],0,3,0,0,["f",A5X(ASQ)],ZX,0,B,[CV],0,3,0,0,["A",A5X(AQW)],S3,0,B,[CV],0,3,0,0,["A",A5X(AMk)],AF3,0,B,[M9],0,0,0,0,0,Za,0,B,[EK],0,3,0,0,0,ABe,0,B,[CV],0,3,0,0,["A",A5X(A1m)]]);
function $rt_array(cls,data){this.WF=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument javaObject instanceof ","keydown","keyup","mousemove",
"mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish"," ",".","oblique","sendFocusEvent: dragLock != null ","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ",
"vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown",
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ","CodiconDemo",
"RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","TwoWindowsDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","js","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",
", ascent+descent = ",", lineHeight = ",", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile",
"ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |",
"paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ","w = ","Window 1","Window 2","Open project...","request new model, file = ","request in progress ","Project root","FileTreeView model size = ","Select left...","Select right...","#616161","#BBBBBB",
"wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana",
"toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'",
"\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","open dir = ","Unknown scope type: ","/Resolved in ","readClipboardText error: ",
"Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","opening file ... ","folderOpened ","folderClosed ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar",
"javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic",
"EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical",
"ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1",
"#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = ","Error fetching file "]);
BK.prototype.toString=function(){return $rt_ustr(this);};
BK.prototype.valueOf=BK.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AMM(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CQ=Long_add;var JL=Long_sub;var Ch=Long_mul;var AGK=Long_div;var AU1=Long_rem;var A3B=Long_or;var Df=Long_and;var A9P=Long_xor;var HO=Long_shl;var A4W=Long_shr;var F$=Long_shru;var A9Q=Long_compare;var IF=Long_eq;var A9R=Long_ne;var A3y=Long_lt;var ANG=Long_le;var A9S=Long_gt;var A3x=Long_ge;var A9T=Long_not;var A47=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A48);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ABi.prototype;c.f=c.bh;c=ABj.prototype;c.f=c.bh;c=ABh.prototype;c.f=c.bh;c=WF.prototype;c.f=c.bh;c=AJu.prototype;c.get=c.Lq;Object.defineProperty(c,"length",{get:c.RL});c=AIe.prototype;c.createEntityReference=c.N4;c.getElementById=c.Qj;c.createTextNode=c.P5;c.hasChildNodes=c.O8;c.querySelectorAll=c.NM;c.removeChild=c.Rw;c.cloneNode=c.Ge;c.createComment=c.SH;c.insertBefore=c.Ok;c.getElementsByTagNameNS=c.RJ;c.hasAttributes=c.IV;c.normalize=c.LZ;c.hasChildNodesJS=c.LR;c.getElementsByTagName
=c.Lp;c.appendChild=c.MV;c.createAttributeNS=c.QA;c.dispatchEvent=c.LD;c.replaceChild=c.GH;c.createElementNS=c.HT;c.createCDATASection=c.KK;c.querySelector=c.IU;c.createElement=c.Q5;c.isSupported=c.RA;c.importNode=c.Ov;c.removeEventListener=c.HP;c.createAttribute=c.LE;c.createDocumentFragment=c.FB;c.createProcessingInstruction=c.NY;c.addEventListener=c.J6;Object.defineProperty(c,"nodeName",{get:c.MU});Object.defineProperty(c,"documentElement",{get:c.Ix});Object.defineProperty(c,"childNodes",{get:c.Kt});Object.defineProperty(c,
"prefix",{get:c.OB,set:c.SS});Object.defineProperty(c,"implementation",{get:c.K4});Object.defineProperty(c,"textContent",{get:c.SL,set:c.P3});Object.defineProperty(c,"parentNode",{get:c.Qg});Object.defineProperty(c,"nextSibling",{get:c.Ip});Object.defineProperty(c,"nodeType",{get:c.Ri});Object.defineProperty(c,"doctype",{get:c.Pl});Object.defineProperty(c,"localName",{get:c.R2});Object.defineProperty(c,"nodeValue",{get:c.H9,set:c.Sz});Object.defineProperty(c,"firstChild",{get:c.Lx});Object.defineProperty(c,
"lastChild",{get:c.Kb});Object.defineProperty(c,"previousSibling",{get:c.MG});Object.defineProperty(c,"namespaceURI",{get:c.G3});Object.defineProperty(c,"attributes",{get:c.OI});Object.defineProperty(c,"ownerDocument",{get:c.Ha});c=Pv.prototype;c.f=c.bh;c=AIE.prototype;c.removeEventListener=c.Hd;c.dispatchEvent=c.Oq;c.addEventListener=c.JG;c=Ui.prototype;c.onAnimationFrame=c.IW;c=Uh.prototype;c.f=c.BG;c=Uf.prototype;c.handleEvent=c.cr;c=AAi.prototype;c.f=c.bh;c=ACW.prototype;c.handleEvent=c.cr;c=ACX.prototype;c.handleEvent
=c.cr;c=ACY.prototype;c.handleEvent=c.cr;c=ACZ.prototype;c.handleEvent=c.cr;c=AC0.prototype;c.handleEvent=c.cr;c=AC1.prototype;c.handleEvent=c.cr;c=AC2.prototype;c.handleEvent=c.cr;c=AC3.prototype;c.handleEvent=c.cr;c=AC4.prototype;c.handleEvent=c.cr;c=AC5.prototype;c.handleEvent=c.cr;c=VS.prototype;c.handleEvent=c.cr;c=VT.prototype;c.handleEvent=c.cr;c=VU.prototype;c.handleEvent=c.cr;c=VV.prototype;c.handleEvent=c.cr;c=ABN.prototype;c.handleEvent=c.cr;c=ADR.prototype;c.f=c.bh;c=ADS.prototype;c.f=c.bh;c=WN.prototype;c.f
=c.bh;c=WM.prototype;c.f=c.bh;c=WK.prototype;c.f=c.bh;c=WJ.prototype;c.f=c.bh;c=Pr.prototype;c.accept=c.LK;c=OT.prototype;c.f=c.bh;c=OV.prototype;c.f=c.bh;c=OU.prototype;c.f=c.bh;c=Yd.prototype;c.f=c.BG;c=Yb.prototype;c.f=c.BG;c=Z$.prototype;c.f=c.bh;c=ACz.prototype;c.f=c.bh;c=OS.prototype;c.f=c.bh;c=ADK.prototype;c.f=c.bh;c=ADJ.prototype;c.f=c.bh;c=ADa.prototype;c.f=c.bh;c=AC_.prototype;c.f=c.bh;c=Tp.prototype;c.handleEvent=c.cr;c=Vo.prototype;c.f=c.bh;c=Vp.prototype;c.f=c.bh;c=ACo.prototype;c.f=c.bh;c=ACq.prototype;c.f
=c.bh;c=ACr.prototype;c.f=c.bh;c=Ty.prototype;c.f=c.bh;c=YR.prototype;c.onTimer=c.Iu;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);