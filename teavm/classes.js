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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.d1=f;}
function $rt_cls(cls){return T6(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gz(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cj.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AUR(t);}
function $rt_throwableCause(t){return A3_(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A9D());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IE();}
function $rt_setThread(t){return AT_(t);}
function $rt_createException(message){return A9E(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A9F());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BP=$rt_compare;var A9G=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var Jx=$rt_isInstance;var A9H=$rt_nativeThread;var A9I=$rt_suspending;var A9J=$rt_resuming;var A9K=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var Bc=$rt_imul;var E$=$rt_wrapException;var A9L=$rt_checkBounds;var A9M=$rt_checkUpperBound;var A9N=$rt_checkLowerBound;var A9O=$rt_wrapFunction0;var A9P=$rt_wrapFunction1;var A9Q=$rt_wrapFunction2;var A9R=$rt_wrapFunction3;var A9S=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AKV=$rt_createCharArrayFromData;var A7G=$rt_createByteArrayFromData;var A8e=$rt_createShortArrayFromData;var D6=$rt_createIntArrayFromData;var A9T=$rt_createBooleanArrayFromData;var A9U=$rt_createFloatArrayFromData;var A9V=$rt_createDoubleArrayFromData;var AKd=$rt_createLongArrayFromData;var A9C=$rt_createBooleanArray;var DS=$rt_createByteArray;var A9W=$rt_createShortArray;var B6=$rt_createCharArray;var BQ=$rt_createIntArray;var A9X=$rt_createLongArray;var ANu=$rt_createFloatArray;var A9Y
=$rt_createDoubleArray;var BP=$rt_compare;var A9Z=$rt_castToClass;var A90=$rt_castToInterface;var A91=Long_toNumber;var Bq=Long_fromInt;var A92=Long_fromNumber;var D=Long_create;var FV=Long_ZERO;var A93=Long_hi;var G_=Long_lo;
function B(){this.$id$=0;}
function BG(a){return T6(a.constructor);}
function ASD(a,b){return a!==b?0:1;}
function AGd(a){var b,c,d,e,f,g,h,i,j;b=M5(a);if(!b)c=C(0);else{d=(((32-Yj(b)|0)+4|0)-1|0)/4|0;e=B6(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=IB((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gz(e);}j=new J;L(j);H(H(j,C(1)),c);return K(j);}
function M5(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ARU(a){var b,c,d;if(!Jx(a,Ed)&&a.constructor.$meta.item===null){b=new Vk;X(b);N(b);}b=ANB(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function SG(){var a=this;B.call(a);a.CN=0;a.qZ=null;}
function A81(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AMv();AJO();AHl();AH7();AJu();AKD();AHv();AFL();AFH();AGY();AIU();AJN();AL1();AHT();AK_();AKH();AIw();AHN();AKP();AML();AHx();AKj();AG0();AL9();ALA();AJ5();AJm();ALH();AL6();AIP();c=(AFZ()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Ze(C(2),C(3));else{d=new SG;BF(d);e=new ACD;e.Bx=d;f=new XJ;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new P7;j.zp
=i;j.zq=g;j.zr=6;j.zs=e;j.zm=f;k=Bw(j,"f");i.onmessage=k;h=h+1|0;}l=I(Mr,[Fl(C(4),C(5),300),Fl(C(6),C(7),300),Fl(C(8),C(5),400),Fl(C(9),C(7),400),Fl(C(10),C(5),600),Fl(C(11),C(7),600),Fl(C(12),C(5),700),Fl(C(13),C(7),700)]);m=P(Mr,1);m.data[0]=AVm(C(14),FH(C(15),C(16)),C(5),400);b=(Mp(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.u8;f=c.uc;i=new J;L(i);Br(H(H(i,C(17)),f),41);i=K(i);f=c.t_;o=c.sF;c=A0l($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BF(d);c=new ACE;c.B8=d;g=new ACC;e.then(Bw(c,"f"),Bw(g,"f"));}}
function AIb(b){var c,d,e,f,g,h,i,j;c=new ABD;d=new Vj;d.zc=c;c.uO=d;d=new Vh;d.CV=c;c.oZ=d;e=new Vi;e.AR=c;c.wo=new $rt_globals.ResizeObserver(Bw(e,"f"));d=new Vg;d.r9=c;c.x3=d;c.lP=1;d=new ABm;d.mS=new Uy;e=new Zc;e.ES=null;e.mK=A94;d.s9=e;BF(e);f=new ABo;f.A8=e;d.CP=f;d.Cf=b;g=b.length;h=0;while(h<g){e=b[h];i=new ABp;i.Af=d;i.Ae=h;f=Bw(i,"f");e.onmessage=f;e=b[h];f=AK9();e.postMessage(f);h=h+1|0;}d.iO=0;d.pU=BQ(g);c.Cx=d;c.rg=(EG()).getElementById("canvasDiv");d=AFZ();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eC=d;c.rg.appendChild(d);b=c.eC;d=ATJ(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Ze(C(2),C(18));else{c.qo=A8N(c.eC,c.oZ);b=new U_;j=c.oZ;AMu(b,e,new AC9,1,2.25,0.625);b.EQ=new AC8;b.Ep=j;c.h6=b;AUu(c.wo,c.eC,AXO());d=$rt_globals.window;j=c.x3;d.addEventListener("resize",Bw(j,"handleEvent"));j=new Pf;b=c.h6;d=c.qo.cE;j.Q=b;j.n=d;j.bH=c;d=$rt_str($rt_globals.window.location.hash);if(Bk(C(19),d)){b=new PK;Et(b,j);d=$rt_globals.fetch("test.wasm");j
=new XR;d=d.then(Bw(j,"f"));j=new XQ;e=d.then(Bw(j,"f"));j=new XO;d=new XN;e.then(Bw(j,"f"),Bw(d,"f"));}else b=Bk(C(20),d)?A8I(j):(A47(M(d)<=0?C(21):DB(d,1))).Z(j);c.gZ=b;TR(c);}c.eC.focus();}
var XI=G(0);
var Xi=G(0);
function AD9(){var a=this;B.call(a);a.np=null;a.wq=null;a.dT=null;}
function T6(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AD9;c.dT=b;d=c;b.classObject=d;}return c;}
function Ka(a){if(a.np===null)a.np=AIt(a.dT);return a.np;}
function HT(a){var b,c,d,e;b=a.wq;if(b===null){if(AM2(a.dT)===null?0:1){b=HT(H_(a));c=new J;L(c);H(H(c,b),C(22));b=K(c);}else{b=a.dT.$meta.enclosingClass;if((b===null?null:T6(b))!==null){b=$rt_str(a.dT.$meta.simpleName);if(b===null)b=C(21);}else{b=AIt(a.dT);d=Sw(b,36);if(d==(-1)){e=Sw(b,46);if(e!=(-1))b=DB(b,e+1|0);}else{b=DB(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(21);}}}a.wq=b;}return b;}
function I9(a){return a.dT.$meta.primitive?1:0;}
function H_(a){return T6(AM2(a.dT));}
var AKn=G();
function Bw(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fq(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AKb=G();
function ANB(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ALU(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ALU(d[e],c))return 1;e=e+1|0;}return 0;}
function ATg(b){var c='$$enumConstants$$';Hr[c]=ANP;Ep[c]=ANt;Ik[c]=ASe;Cu[c]=AG7;Cx[c]=ALj;H2[c]=AUB;ED[c]=AXx;G4[c]=AJV;CC[c]=AMt;ATg=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return ATg(b);}
function AM2(b){return b.$meta.item;}
function AIt(b){return $rt_str(b.$meta.name);}
function Hh(){var a=this;B.call(a);a.jb=null;a.nR=null;a.k8=0;a.lr=0;}
function A95(){var a=new Hh();X(a);return a;}
function A96(a){var b=new Hh();Bp(b,a);return b;}
function X(a){a.k8=1;a.lr=1;}
function Bp(a,b){a.k8=1;a.lr=1;a.jb=b;}
function A0a(a){return a;}
function AUR(a){return a.jb;}
function A3_(a){var b;b=a.nR;if(b===a)b=null;return b;}
var EH=G(Hh);
function A97(){var a=new EH();AH1(a);return a;}
function AH1(a){X(a);}
var Bt=G(EH);
function A9E(a){var b=new Bt();A5E(b,a);return b;}
function A5E(a,b){Bp(a,b);}
var ALc=G(Bt);
var C1=G(0);
var CG=G(0);
var KG=G(0);
function BC(){var a=this;B.call(a);a.cj=null;a.kw=0;}
var A98=null;var A99=null;var A9$=null;function Fp(){Fp=Bm(BC);AVU();}
function AQS(){var a=new BC();AFJ(a);return a;}
function Gz(a){var b=new BC();JN(b,a);return b;}
function EO(a,b,c){var d=new BC();O$(d,a,b,c);return d;}
function AFJ(a){Fp();a.cj=A98;}
function JN(a,b){Fp();O$(a,b,0,b.data.length);}
function O$(a,b,c,d){var e;Fp();e=B6(d);a.cj=e;Da(b,c,e,0,d);}
function MV(b){var c;Fp();c=AQS();c.cj=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.cj.data;if(b<c.length)return c[b];}d=new Ix;X(d);N(d);}
function M(a){return a.cj.data.length;}
function GK(a){return a.cj.data.length?0:1;}
function Ry(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Da(a.cj,b,d,e,c);return;}}g=new BJ;X(g);N(g);}
function OU(a,b){var c,d,e;if(a===b)return 0;c=Be(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AC3(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function NY(a,b){if(a===b)return 1;return AC3(a,b,0);}
function DH(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Ki(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cj.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kb(b);h=Jy(b);while(true){f=a.cj.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function HK(a,b,c){var d,e,f,g,h;d=Be(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cj.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kb(b);g=Jy(b);while(true){if(d<1)return (-1);h=a.cj.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Sw(a,b){return HK(a,b,M(a)-1|0);}
function ZB(a,b,c){var d,e,f;d=Bd(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A2Z(a,b){return ZB(a,b,0);}
function Ru(a,b,c){var d,e;d=Be(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AG3(a,b){return Ru(a,b,M(a));}
function Cy(a,b,c){var d,e;d=BP(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d){Fp();return A99;}if(!b&&c==M(a))return a;return EO(a.cj,b,c-b|0);}
function DB(a,b){return Cy(a,b,M(a));}
function RE(a,b,c){return Cy(a,b,c);}
function FH(a,b){var c,d,e,f,g,h;if(GK(b))return a;if(GK(a))return b;c=B6(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return MV(c);}
function ADt(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Br(d,Q(a,f));}f=f+1|0;}H(d,DB(a,f));return K(d);}
function AA5(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cy(a,b,c+1|0);}
function AOO(a){return a;}
function GM(a){var b,c,d,e,f;b=a.cj.data;c=B6(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){Fp();return b===null?C(23):b.J();}
function N4(b){var c,d;Fp();c=new BC;d=B6(1);d.data[0]=b;JN(c,d);return c;}
function Do(b){var c;Fp();c=new J;L(c);return K(V(c,b));}
function Bk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function Kj(a){var b,c,d,e;a:{if(!a.kw){b=a.cj.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kw=(31*a.kw|0)+e|0;d=d+1|0;}}}return a.kw;}
function MF(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gh;Bp(b,C(24));N(b);}A9_=1;d=new AAE;d.ne=P(C6,10);d.ic=(-1);d.f0=(-1);d.bF=(-1);e=new Ho;e.fB=1;e.bW=b;e.bk=B6(M(b)+2|0);Da(GM(b),0,e.bk,0,M(b));f=e.bk.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.AK=g;e.hu=0;F6(e);F6(e);d.l=e;d.eb=0;d.n1=WL(d,(-1),0,null);if(!DJ(d.l)){b=new KC;h=d.l;Nd(b,C(21),h.bW,h.dE);N(b);}if(d.rC)d.n1.e3();b=BO();h=new ABt;h.kO=(-1);h.pI=(-1);h.DI=d;h.B$=d.n1;h.l5=a;h.kO=0;g=M(a);h.pI=g;e=new ADu;i=h.kO;j=d.ic;k=d.f0+1|0;l=d.bF
+1|0;e.jj=(-1);m=j+1|0;e.sf=m;e.em=BQ(m*2|0);f=BQ(l);e.ll=f;JS(f,(-1));if(k>0)e.p4=BQ(k);JS(e.em,(-1));AFf(e,a,i,g);h.cV=e;e.gT=1;n=0;m=0;if(!M(a)){f=P(BC,1);f.data[0]=C(21);}else{while(true){l=M(h.l5);if(!AFU(h))l=h.pI;e=h.cV;if(e.e0>=0&&AGU(e)==1){e=h.cV;e.e0=M4(e);if(M4(h.cV)==AH6(h.cV)){e=h.cV;e.e0=e.e0+1|0;}g=h.cV.e0;g=g<=l&&Pm(h,g)?1:0;}else g=Pm(h,h.kO);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BA(b,RE(a,m,AI_(h)));m=AKE(h);n=g;}a:{BA(b,RE(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BI(b,
g)))break a;EZ(b,g);}}if(g<0)g=0;f=GF(b,P(BC,g));}return f;}
function AQo(a,b){return OU(a,b);}
function AVU(){A98=B6(0);A99=AQS();A9$=new TB;}
var FK=G(Hh);
var IC=G(FK);
var AKR=G(IC);
var DG=G();
function HX(){DG.call(this);this.br=0;}
var A$a=null;var A$b=null;function A43(a){var b=new HX();AGw(b,a);return b;}
function AGw(a,b){a.br=b;}
function Ih(b){return (X2(A9u(20),b,10)).J();}
function K$(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dy;Bp(b,C(25));N(b);}d=M(b);if(0==d){b=new Dy;Bp(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dy;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Y_(Q(b,f));if(i<0){j=new Dy;k=Cy(b,0,d);b=new J;L(b);H(H(b,C(27)),k);Bp(j,K(b));N(j);}if(i>=c){j=new Dy;l=Cy(b,0,d);b=new J;L(b);H(H(V(H(b,C(28)),c),C(29)),l);Bp(j,K(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dy;k=Cy(b,0,d);b=new J;L(b);H(H(b,C(30)),k);Bp(j,K(b));N(j);}b=new Dy;j=new J;L(j);V(H(j,C(31)),c);Bp(b,K(j));N(b);}
function C4(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A$b===null){A$b=P(HX,256);c=0;while(true){d=A$b.data;if(c>=d.length)break a;d[c]=A43(c-128|0);c=c+1|0;}}}return A$b.data[b+128|0];}return A43(b);}
function AWg(a){return Ih(a.br);}
function A6h(a,b){if(a===b)return 1;return b instanceof HX&&b.br==a.br?1:0;}
function Yj(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Jm(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A1D(a,b){b=b;return BP(a.br,b.br);}
function AMv(){A$a=F($rt_intcls());}
function Hb(){var a=this;B.call(a);a.D=null;a.H=0;}
function A$c(){var a=new Hb();L(a);return a;}
function A9u(a){var b=new Hb();F7(b,a);return b;}
function L(a){F7(a,16);}
function F7(a,b){a.D=B6(b);}
function X2(a,b,c){return AK4(a,a.H,b,c);}
function AK4(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cp(a,b,b+1|0);else{Cp(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=IB(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cp(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=IB($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ALJ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BP(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$d;ALB(c,f);d=f.nz;g=f.nl;h=f.rL;i=1;j=1;if(h)j=2;k=9;l=AVo(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cp(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AKw(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BP(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$e;AHf(c,f);g=f.n2;h=f.m9;i=f.ry;j=1;k=1;if(i)k=2;l=18;m=ATY(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(APR(p,FV))d=0;else{d=G_(AIc(g,p));g=AXK(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AIc(p,Bq(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AVo(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ATY(b){var c,d,e,f,g;c=Bq(1);d=0;e=16;f=A$f.data;g=f.length-1|0;while(g>=0){if(I2(AXK(b,Cl(c,f[g])),FV)){d=d|e;c=Cl(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Br(a,b){return a.qF(a.H,b);}
function AE9(a,b,c){Cp(a,b,b+1|0);a.D.data[b]=c;return a;}
function Nn(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.D=K7(a.D,d);}
function K(a){return EO(a.D,0,a.H);}
function AER(a,b,c,d){return a.qn(a.H,b,c,d);}
function XC(a,b,c,d,e){var f,g,h,i;Cp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Km(a,b){return a.pN(b,0,b.data.length);}
function Cp(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.kp((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var J4=G(0);
var J=G(Hb);
function Mw(){var a=new J();A57(a);return a;}
function A6H(a){var b=new J();AXN(b,a);return b;}
function A57(a){L(a);}
function AXN(a,b){var c,d;a.D=B6(M(b));c=0;while(true){d=a.D.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.H=M(b);}
function H(a,b){MY(a,a.H,b===null?C(23):b.J());return a;}
function BM(a,b){MY(a,a.H,b);return a;}
function V(a,b){X2(a,b,10);return a;}
function H3(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(A7m(b,FV)){d=0;b=A80(b);}a:{if(DM(b,Bq(10))<0){if(d)Cp(a,c,c+1|0);else{Cp(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=IB(G_(b),10);}else{g=1;h=Bq(1);i=Di(Bq(-1),Bq(10));b:{while(true){j=Cl(h,Bq(10));if(DM(j,b)>0){j=h;break b;}g=g+1|0;if(DM(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cp(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(I2(j,FV))break a;e=a.D.data;c=f+1|0;e[f]=IB(G_((Di(b,j))),10);b=AJR(b,j);j=Di(j,Bq(10));f=c;}}}return a;}
function Df(a,b){ALJ(a,a.H,b);return a;}
function AFE(a,b){Br(a,b);return a;}
function Lt(a,b){var c;c=M(b);ACW(a,a.H,b,0,c);return a;}
function JR(a,b){MY(a,a.H,!b?C(32):C(33));return a;}
function AIY(a,b,c){var d,e,f,g,h,i;d=BP(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ix;X(i);N(i);}
function VS(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ix;X(f);N(f);}
function A1z(a,b,c,d,e){XC(a,b,c,d,e);return a;}
function APF(a,b,c,d){AER(a,b,c,d);return a;}
function ACW(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Cp(a,b,(b+e|0)-d|0);while(d<e){f=a.D.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BJ;X(c);N(c);}
function AJ6(a){return a.H;}
function Em(a){return K(a);}
function ART(a,b){Nn(a,b);}
function A1U(a,b,c){AE9(a,b,c);return a;}
function MY(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(23);else if(GK(c))break a;Nn(a,a.H+M(c)|0);d=a.H-1|0;while(d>=b){a.D.data[d+M(c)|0]=a.D.data[d];d=d+(-1)|0;}a.H=a.H+M(c)|0;d=0;while(d<M(c)){e=a.D.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new Ix;X(c);N(c);}
var Ff=G(IC);
var ALX=G(Ff);
function A$g(a){var b=new ALX();AOS(b,a);return b;}
function AOS(a,b){Bp(a,b);}
var AKM=G(Ff);
function A$h(a){var b=new AKM();AO4(b,a);return b;}
function AO4(a,b){Bp(a,b);}
var ACt=G(0);
var Ds=G(0);
function BY(b,c){if(b!==null)b.bV();return c;}
var Y9=G(0);
function Ky(){var a=this;B.call(a);a.jG=0;a.oo=0;a.nP=0;}
var A$i=0;function EK(a){A$i=A$i-1|0;}
function HM(a,b,c){KY(a,AKt(b,c,400,0));}
function LB(a,b){return LN(a,b,0.875);}
function LN(a,b,c){return Ev(a,b)+c|0;}
function AAU(){var a=this;Ky.call(a);a.jv=null;a.dk=null;a.xT=null;}
function E3(a){var b,c,d;b=a.dk;c=a.oo;d=a.nP;b.clearRect(0.0,0.0,c,d);}
function ABb(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dk;d="center";c.textAlign=d;break a;case 2:c=a.dk;d="right";c.textAlign=d;break a;default:break a;}d=a.dk;c="left";d.textAlign=c;}}
function Cr(a,b){KY(a,b.ro);}
function KY(a,b){var c;if(a.xT!==b){c=a.dk;a.xT=b;c.font=b;}}
function AKt(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.dk;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ev(a,b){var c;c=$rt_ustr(b);return a.dk.measureText(c).width;}
function Kq(a,b,c,d){var e,f;e=a.dk;f=$rt_ustr(Gz(AKV([35,Ib(b/16|0),Ib(b%16|0),Ib(c/16|0),Ib(c%16|0),Ib(d/16|0),Ib(d%16|0)])));e.fillStyle=f;}
function AYA(){return {alpha:false};}
var AJP=G();
var AMA=G();
function BR(b,c){if(b===c)return 1;return b!==null?b.bP(c):c!==null?0:1;}
function BF(b){if(b!==null)return b;b=new Gh;Bp(b,C(21));N(b);}
var BW=G(0);
function GG(b){return b;}
var Ch=G(0);
function ACD(){B.call(this);this.Bx=null;}
function A6z(a,b){var c;c=a.Bx;c.qZ=b;if(c.CN)AIb(b);}
var AHS=G();
function I6(b,c){return b.data[c];}
var ALp=G();
var AFV=G(0);
function Fl(b,c,d){return AVm(C(34),FH(C(15),b),c,d);}
var AMn=G(0);
var AIn=G(0);
function Mp(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C2(b,f+g|0);Da(c,0,d,f,g);return d;}
function LS(b,c,d){Da(b,c,d,0,d.data.length);return d;}
function AAM(b,c,d){var e;if(c>0)Da(b,0,d,0,c);e=d.data.length;if(c<e)Da(b,c+1|0,d,c,e-c|0);return d;}
function AGZ(b,c,d,e){var f;if(c>0)Da(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Da(b,d,e,c,f-d|0);}return e;}
function CN(b){var c;c=new Qn;c.kH=b;return c;}
function AGs(b,c){if(b.data.length!=c)b=C2(b,c);return b;}
function AIm(b,c,d){var e;e=c.data.length;if(e==d)c=C2(c,e*2|0);c.data[d]=b;return c;}
function ADo(b,c,d){var e;e=c.data.length;if(e==d)c=OQ(c,e*2|0);c.data[d]=b;return c;}
function OP(b){return K7(b,b.data.length);}
function Mr(){var a=this;B.call(a);a.u8=null;a.uc=null;a.t_=null;a.sF=0;}
function AVm(a,b,c,d){var e=new Mr();AUJ(e,a,b,c,d);return e;}
function AUJ(a,b,c,d,e){a.u8=b;a.uc=c;a.t_=d;a.sF=e;}
var AGn=G();
function A0l(b,c){return {style:b,weight:c};}
function ACE(){B.call(this);this.B8=null;}
function ANe(a,b){var c,d,e;c=a.B8;d=0;while(d<b.length){e=b[d];(EG()).fonts.add(e);d=d+1|0;}c.CN=1;b=c.qZ;if(b!==null)AIb(b);}
var ACC=G();
function A5j(a,b){$rt_globals.console.info("font load error "+b);}
var L6=G();
var A$j=null;var A$k=null;function Bj(){if(A$j===null)A$j=AS5(A$l,0);return A$j;}
function D0(){if(A$k===null)A$k=AS5(A$m,0);return A$k;}
function A7J(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Or(b)&&(e+f|0)<=Or(d)){a:{b:{if(b!==d){g=H_(BG(b));h=H_(BG(d));if(g!==null&&h!==null){if(g===h)break b;if(!I9(g)&&!I9(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dT;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ALU(n.constructor,o)?1:0)){N3(b,c,d,e,j);b=new Jz;X(b);N(b);}j=j+1|0;k=m;}N3(b,c,d,e,f);return;}if(!I9(g))break a;if(I9(h))break b;else break a;}b=new Jz;X(b);N(b);}}N3(b,c,
d,e,f);return;}b=new Jz;X(b);N(b);}b=new BJ;X(b);N(b);}d=new Gh;Bp(d,C(35));N(d);}
function Da(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Or(b)&&(e+f|0)<=Or(d)){N3(b,c,d,e,f);return;}b=new BJ;X(b);N(b);}
function N3(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EI(){return Long_fromNumber(new Date().getTime());}
function AH9(){return A92($rt_globals.performance.now()*1000000.0);}
var AIl=G();
var AKF=G();
function Ze(b,c){var d,e,f;d=(EG()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EG()).getElementById($rt_ustr(b)).appendChild(d);}
function AFZ(){return (EG()).createElement("canvas");}
function AI3(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ATJ(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ANb=G();
var XJ=G();
function A2R(a,b){var c;c=new Bt;Bp(c,$rt_str(b.message));N(c);}
var AIz=G();
function FT(b){return $rt_str(b);}
var AJ2=G();
function K7(b,c){var d,e,f,g;b=b.data;d=B6(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function OQ(b,c){var d,e,f,g;b=b.data;d=DS(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JD(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C2(b,c){var d,e,f,g;d=b.data;e=AH5(H_(BG(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AHY(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(37));V(c,e[d]);d=d+1|0;}BM(c,C(38));return K(c);}
function AUZ(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(37));Df(c,e[d]);d=d+1|0;}BM(c,C(38));return K(c);}
function AW$(b){var c,d,e,f;if(b===null)return C(23);c=new J;L(c);BM(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(37));f=e[d];AKw(c,c.H,f);d=d+1|0;}BM(c,C(38));return K(c);}
function JS(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BX;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AGh(b,c,d,e){var f,g;if(c>d){e=new BX;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Lp(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A94;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qM(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ALK(b,c){return ACI(b,0,b.data.length,c);}
function ACI(b,c,d,e){var f,g,h,i,j;f=BP(c,d);if(f>0){g=new BX;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ADN=G(0);
var ALe=G();
function A0K(a,b){return a.O4(b);}
function ASz(a){return a.SD();}
var AHd=G();
var Gx=G(0);
var TB=G();
var BJ=G(Bt);
var ALF=G();
function Or(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A$n());}return b.data.length;}
function AH5(b,c){if(b===null){b=new Gh;X(b);N(b);}if(b===F($rt_voidcls())){b=new BX;X(b);N(b);}if(c>=0)return AWm(b.dT,c);b=new AFx;X(b);N(b);}
function AWm(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gh=G(Bt);
var Jz=G(Bt);
function Dp(){B.call(this);this.nj=0;}
var A$o=null;var A$p=null;var A$q=null;var A$r=null;var A$s=null;var A$t=null;var A$u=null;var A$v=null;var A$w=null;var A$x=null;function AWR(a){var b=new Dp();AGO(b,a);return b;}
function AGO(a,b){a.nj=b;}
function P8(b){var c,d;c=A$t.data;if(b>=c.length)return AWR(b);d=c[b];if(d===null){d=AWR(b);A$t.data[b]=d;}return d;}
function Wq(b){var c,d;c=new BC;d=B6(1);d.data[0]=b;JN(c,d);return c;}
function MJ(b){return b>=65536&&b<=1114111?1:0;}
function CZ(b){return (b&64512)!=55296?0:1;}
function Dn(b){return (b&64512)!=56320?0:1;}
function O0(b){return !CZ(b)&&!Dn(b)?0:1;}
function JM(b,c){return CZ(b)&&Dn(c)?1:0;}
function E1(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kb(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jy(b){return (56320|b&1023)&65535;}
function FX(b){return Hm(b)&65535;}
function Hm(b){if(A$r===null){if(A$u===null)A$u=AL5();A$r=AG1((A$u.value!==null?$rt_str(A$u.value):null));}return Tp(A$r,b);}
function FA(b){return Hk(b)&65535;}
function Hk(b){if(A$q===null){if(A$v===null)A$v=AMw();A$q=AG1((A$v.value!==null?$rt_str(A$v.value):null));}return Tp(A$q,b);}
function Tp(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BP(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ADe(b,c){if(c>=2&&c<=36){b=Y_(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Y_(b){var c,d,e,f,g,h,i,j,k,l;if(A$p===null){if(A$w===null)A$w=AKT();c=(A$w.value!==null?$rt_str(A$w.value):null);d=AUT(GM(c));e=Nu(d);f=BQ(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+PH(d)|0;j=j+PH(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A$p=f;}g=A$p.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BP(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function IB(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GI(b){var c;if(b<65536){c=B6(1);c.data[0]=b&65535;return c;}return AKV([Kb(b),Jy(b)]);}
function CI(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&O0(b&65535))return 19;if(A$s===null){if(A$x===null)A$x=AJr();d=(A$x.value!==null?$rt_str(A$x.value):null);e=P(XV,16384);f=e.data;g=DS(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=NZ(Q(d,l));if(m==64){l=l+1|0;m=NZ(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,NZ(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=NZ(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AQm(k,k+i|0,OQ(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AQm(k,k+i|0,OQ(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A$s=C2(e,j);}e=A$s.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.ur)o=p+1|0;else{c=d.zn;if(b>=c)return d.zx.data[b-c|0];c=p-1|0;}}return 0;}
function K9(b){a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function H6(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CI(b)!=16?0:1;}
function Zt(b){switch(CI(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Sp(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Zt(b);}return 1;}
function AJO(){A$o=F($rt_charcls());A$t=P(Dp,128);}
function AL5(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AMw(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AKT(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AJr(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Xd=G(0);
var ABv=G(0);
var Fa=G(0);
var AJS=G();
function EG(){return $rt_globals.window.document;}
function A2w(a){return a.JT();}
function A4L(a,b){return a.LD($rt_str(b));}
function A4w(a,b){a.I6($rt_str(b));}
function AZr(a,b){return a.Pd($rt_str(b));}
function ANz(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function APy(a){return a.S0();}
function A4H(a,b,c){return a.RJ($rt_str(b),$rt_str(c));}
function ARF(a,b,c,d){a.Ee($rt_str(b),Fq(c,"handleEvent"),d?1:0);}
function AYq(a){return a.Qv();}
function A3i(a){return !!a.L3();}
function A5e(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ASU(a){return a.Jd();}
function ARi(a,b){a.RA($rt_str(b));}
function ATe(a){return !!a.IX();}
function AXd(a){return a.LM();}
function AR7(a){return $rt_ustr(a.GZ());}
function AOd(a,b){return a.Jp(b?1:0);}
function A6k(a){return a.L2();}
function A1b(a,b,c){return a.TB($rt_str(b),$rt_str(c));}
function ASN(a,b,c){return a.PP(b,c?1:0);}
function AWq(a,b,c){return !!a.Ld($rt_str(b),$rt_str(c));}
function AXG(a){return a.Kp();}
function AQ4(a){return $rt_ustr(a.M4());}
function API(a,b){return !!a.F8(b);}
function AQy(a,b){return a.Nv($rt_str(b));}
function A1k(a,b,c){return a.JR($rt_str(b),$rt_str(c));}
function ASf(a){return a.Og();}
function AYt(a,b){return a.S6($rt_str(b));}
function AQx(a){return $rt_ustr(a.NW());}
function AUk(a){a.IT();}
function ANl(a,b){return a.TE($rt_str(b));}
function AVN(a,b){return a.I_($rt_str(b));}
function AYP(a,b){return a.IR($rt_str(b));}
function A4$(a){return $rt_ustr(a.Os());}
function AYW(a,b,c){return a.Q_(b,c);}
function A3v(a,b){return a.GY(b);}
function AUO(a){return a.K1();}
function ATE(a,b,c){a.FD($rt_str(b),Fq(c,"handleEvent"));}
function ATm(a,b,c){return a.HR(b,c);}
function AVG(a){return !!a.SB();}
function AWP(a,b){return a.JM($rt_str(b));}
function A2G(a,b,c,d){a.Dx($rt_str(b),Fq(c,"handleEvent"),d?1:0);}
function APD(a){return a.K2();}
function AZc(a,b,c){return a.Jo($rt_str(b),$rt_str(c));}
function AX6(a){return $rt_ustr(a.OJ());}
function A6e(a){return a.N$();}
function ATC(a){return a.Ol();}
function AX4(a){return a.Le();}
function ATF(a,b,c){a.F7($rt_str(b),Fq(c,"handleEvent"));}
function AZA(a,b){return a.MP(b);}
function AQI(a,b){a.Hi($rt_str(b));}
function A38(a){return $rt_ustr(a.NP());}
function P7(){var a=this;B.call(a);a.zp=null;a.zq=null;a.zr=0;a.zs=null;a.zm=null;}
function AUf(a,b){var c,d,e,f,g;c=a.zp;d=a.zq;e=a.zr;f=a.zs;g=a.zm;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AK1=G();
function AU5(b){return Math.exp(b);}
function AJT(b){return Math.log(b);}
function JG(b,c){return A14(b,c);}
function A14(b,c){return Math.pow(b,c);}
function DX(){return AW2();}
function AW2(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AWr(b,c){return Math.max(b,c);}
function Xk(b){if(b<0)b= -b|0;return b;}
function AQO(b){return Math.abs(b);}
var Zm=G(0);
var Sy=G(0);
var AAI=G(0);
var T2=G(0);
var AEW=G(0);
var ADf=G(0);
var AKl=G();
function A2Y(a,b,c){a.F7($rt_str(b),Fq(c,"handleEvent"));}
function A1B(a,b,c){a.FD($rt_str(b),Fq(c,"handleEvent"));}
function AQ6(a,b,c,d){a.Dx($rt_str(b),Fq(c,"handleEvent"),d?1:0);}
function AOu(a,b){return !!a.F8(b);}
function AZR(a,b,c,d){a.Ee($rt_str(b),Fq(c,"handleEvent"),d?1:0);}
var BX=G(Bt);
var AFx=G(Bt);
var Ix=G(BJ);
var AKz=G();
function AK9(){return "ping";}
function AJo(b){return b===AK9()?1:0;}
var AAf=G(0);
var Y0=G(0);
function ABD(){var a=this;B.call(a);a.uO=null;a.oZ=null;a.rg=null;a.eC=null;a.wo=null;a.x3=null;a.qo=null;a.h6=null;a.lP=0;a.FM=0;a.AA=null;a.gZ=null;a.Cx=null;}
function GA(a,b){var c;c=EG();b=$rt_ustr(b);c.title=b;}
function TR(a){a.FM=$rt_globals.requestAnimationFrame(Bw(a.uO,"onAnimationFrame"));}
function JQ(a){a.lP=1;}
function ACf(a,b,c){var d,e;a.qo.eA=BK(b,c);d=a.eC;e=b;d.width=e;d=a.eC;e=c;d.height=e;d=a.h6;Y(d.dd,b,c);e=d.bc;d=d.dd;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gZ.cl(a.h6.dd,LK(a));a.gZ.bR();}
function AAT(a,b){var c,d,e;c=a.AA;d=a.eC;if(BR(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.AA=b;}
function Nj(a){return $rt_globals.performance.now()/1000.0;}
function LK(a){return $rt_globals.window.devicePixelRatio;}
function Gs(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AFO(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AEu;d.CX=b;b=A$y;c.then(Bw(d,"f"),Bw(b,"f"));}}
function FY(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AFO(b,null);else{c=new AE8;d=$rt_globals.window.showOpenFilePicker();e=new AE7;e.tq=b;d.then(Bw(e,"f"),Bw(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h;e=a.Cx;f=e.iO;if(f>0){g=e.pU.data;f=f-1|0;e.iO=f;Un(e,b,c,d,g[f]);}else{h=e.mS;e=new AEv;e.vv=b;e.BU=c;e.Bl=d;b=new Uo;b.rY=e;c=h.mR;b.BN=c;if(c===null)h.pM=b;else c.vc=b;h.mR=b;h.b7=h.b7+1|0;h.ly=h.ly+1|0;}}
function Sl(a,b,c){var d,e;if(!Mn()){b=new Bt;Bp(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new ABg;e.t8=b;b=AM$(c);d.then(Bw(e,"f"),Bw(b,"f"));}}
function Up(a,b,c,d){var e,f,g;if(!Mn()){b=new Bt;Bp(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=GM(b);A70();b=A$z;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ADS;e.wz=c;c=AM$(d);b.then(Bw(e,"f"),Bw(c,"f"));}}
function WC(a){return Mn()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AM$(b){var c;c=new Pp;c.Bu=b;return c;}
var BD=G(0);
var ALm=G();
var T=G(0);
var ALn=G();
var AAN=G(0);
function Vj(){B.call(this);this.zc=null;}
function A1a(a,b){var c,d;c=b;b=a.zc;if(!(!b.gZ.cF(c/1000.0)&&!b.lP)){d=b.h6.dd;if(Bc(d.a,d.b)){b.lP=0;b.gZ.bR();}}TR(b);}
function Vh(){B.call(this);this.CV=null;}
function DI(a){JQ(a.CV);}
var Z7=G(0);
function Vi(){B.call(this);this.AR=null;}
function APT(a,b,c){var d,e,f,g;c=a.AR;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eC){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=LK(c);ACf(c,G1(f.width*g),G1(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ACf(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AIJ=G();
function AXO(){return {box:'device-pixel-content-box'};}
function AUu(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CE=G(0);
function Vg(){B.call(this);this.r9=null;}
function AUj(a,b){b=a.r9;b.gZ.cl(b.h6.dd,LK(b));b.gZ.bR();}
function ABm(){var a=this;B.call(a);a.mS=null;a.Cf=null;a.s9=null;a.pU=null;a.x9=0;a.iO=0;a.CP=null;}
function Un(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.x9+1|0;a.x9=f;g=a.s9;h=C4(f);g.kr=OX(g,g.kr,h);h=ADh(g,h);Xg(h,b);Xg(h,b);g.mN=g.mN+1|0;b=a.Cf[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BC){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(Jx(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(Jx(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(Jx(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof LW)){if(!(c instanceof Oz)){b=new BX;c=Ka(BG(c));g=new J;L(g);H(H(g,C(40)),c);Bp(b,K(g));N(b);}c=c;e=j+1|0;g=c.iz;j;h[j]=g;f=e+1|0;c=Qd(c.fQ);e;h[e]=c;}else{c=c;g=c.iC;if(g===null){f=j+1|0;c=c.hv;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=Qd(c.im);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
var VU=G(0);
function AXn(a,b){var c;c=a.ce();while(c.cQ()){b.g(c.cg());}}
var HO=G(0);
function Mh(a){var b,c;b=new ABk;c=new RM;c.zl=a;b.BH=c;return b;}
function A1q(a,b){var c,d;c=a.ce();d=0;while(c.cQ()){if(b.bM(c.cg())){c.pW();d=1;}}return d;}
var FN=G();
function EP(a){return a.c1()?0:1;}
function GF(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=AH5(H_(BG(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B9(a);while(Cb(f)){g=b.data;h=e+1|0;g[e]=Cc(f);e=h;}return b;}
function A4k(a,b){var c;c=a.ce();while(c.cQ()){if(BR(c.cg(),b)){c.pW();return 1;}}return 0;}
function GP(a,b){var c,d;c=0;d=b.ce();while(d.cQ()){if(!a.qg(d.cg()))continue;c=1;}return c;}
var N6=G(0);
var M8=G(0);
function EA(){FN.call(this);this.b7=0;}
function AUz(a,b){a.oY(a.c1(),b);return 1;}
function B9(a){var b;b=new X_;b.jH=a;b.qL=a.b7;b.lY=a.c1();b.h9=(-1);return b;}
function ATU(a,b,c){var d,e;if(b>=0&&b<=a.c1()){if(c.eQ())return 0;d=c.ce();while(d.cQ()){e=b+1|0;a.oY(b,d.cg());b=e;}return 1;}c=new BX;X(c);N(c);}
function A44(a,b,c){c=new DU;X(c);N(c);}
function A3u(a,b){var c;c=new DU;X(c);N(c);}
function Lv(a,b){var c,d;c=a.c1();d=0;while(true){if(d>=c)return (-1);if(BR(b,a.i5(d)))break;d=d+1|0;}return d;}
function AS7(a,b){var c,d;if(!Jx(b,M8))return 0;c=b;if(a.p!=c.p)return 0;d=0;while(d<c.p){if(!BR(BI(a,d),BI(c,d)))return 0;d=d+1|0;}return 1;}
var MG=G(EA);
var Ph=G(0);
var AFg=G(0);
function Uy(){var a=this;MG.call(a);a.pM=null;a.mR=null;a.ly=0;}
var LT=G(0);
function En(){var a=this;B.call(a);a.pz=null;a.pG=null;}
var Ed=G(0);
var WB=G(0);
var PG=G(0);
function Zc(){var a=this;En.call(a);a.kr=null;a.mK=null;a.ES=null;a.mN=0;}
function AIQ(a,b){var c;c=ADh(a,b);if(c===null)return null;a.kr=Lr(a,a.kr,b);a.mN=a.mN+1|0;return c.kQ;}
function ADh(a,b){var c,d;c=a.kr;while(true){if(c===null)return null;d=Nk(a.mK,b,c.ml);if(!d)break;c=d>=0?c.ca:c.b0;}return c;}
function OX(a,b,c){var d,e;if(b===null){b=new K5;d=null;b.ml=c;b.kQ=d;b.g4=1;b.hb=1;return b;}e=Nk(a.mK,c,b.ml);if(!e)return b;if(e>=0)b.ca=OX(a,b.ca,c);else b.b0=OX(a,b.b0,c);Fb(b);return Nt(b);}
function Lr(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Nk(a.mK,c,b.ml);if(d<0)b.b0=Lr(a,b.b0,c);else if(d>0)b.ca=Lr(a,b.ca,c);else{e=b.ca;if(e===null)return b.b0;f=b.b0;g=P(K5,e.g4).data;h=0;while(true){b=e.b0;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.ca;while(h>0){h=h+(-1)|0;j=g[h];j.b0=b;Fb(j);b=Nt(j);}e.ca=b;e.b0=f;Fb(e);b=e;}Fb(b);return Nt(b);}
function ABo(){B.call(this);this.A8=null;}
function ABp(){var a=this;B.call(a);a.Af=null;a.Ae=0;}
function AXF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.Af;d=a.Ae;AJo(b.data);e=c.mS;f=e.pM;if(f===null)g=null;else{g=f.vc;e.pM=g;if(g!==null)g.BN=null;else e.mR=null;e.ly=e.ly-1|0;e.b7=e.b7+1|0;g=f.rY;}if(g!==null)Un(c,g.vv,g.BU,g.Bl,d);else{h=c.pU.data;i=c.iO;c.iO=i+1|0;h[i]=d;}c=c.CP;b=b.data;if(!AJo(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BX;X(b);N(b);}if(b.length<1){b=new BX;AH1(b);N(b);}e=C4(b[0]);f=AIQ(c.A8,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=FT(GG(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A7q(GG(e));else if(e instanceof $rt_globals.File?1:0)k[i]=ANw(GG(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ABs(GG(b[m]));k[i]=AIh(GG(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=GG(b[m]);k[i]=A8z(GG(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=C2(h,i);f.g(h);}}
function AGu(){var a=this;B.call(a);a.cE=null;a.jY=null;a.FY=null;a.eA=null;}
function A8N(a,b){var c=new AGu();A40(c,a,b);return c;}
function A40(a,b,c){var d,e,f,g;a.eA=null;a.jY=b;d=new ZJ;d.bA=CS(P(Cm,0));d.o2=CS(P(Cm,0));d.bY=CS(P(CH,0));d.fD=CS(P(EV,0));d.cA=CS(P(CQ,0));d.g7=CS(P(FL,0));d.hy=CS(P(F9,0));d.mI=CS(P(T,0));d.nh=CS(P(T,0));d.dC=c;a.cE=d;e=$rt_globals.window;f=P(Ds,14);g=f.data;d=new AEb;d.rA=a;g[0]=C9(a,b,C(41),d);d=new AEc;d.Bi=a;g[1]=C9(a,b,C(42),d);d=new AEd;d.y0=a;g[2]=C9(a,b,C(43),d);d=new AEe;d.w$=a;g[3]=C9(a,b,C(44),d);d=new AEf;d.uE=a;g[4]=C9(a,b,C(45),d);d=new AEg;d.rU=a;g[5]=C9(a,b,C(46),d);d=new AEh;d.C7=a;g[6]
=C9(a,b,C(47),d);d=new AEi;d.AT=a;g[7]=C9(a,b,C(48),d);d=new AEj;d.yA=a;g[8]=C9(a,b,C(49),d);d=new AEk;d.wC=a;g[9]=C9(a,b,C(50),d);d=new WR;d.v8=a;g[10]=C9(a,b,C(51),d);d=new WS;d.vl=a;e.addEventListener("paste",Bw(d,"handleEvent"),!!1);g[11]=Wm(a,e,C(52),d);d=new WT;d.xQ=a;g[12]=C9(a,e,C(53),d);d=new WU;d.CD=a;g[13]=C9(a,e,C(54),d);c=new RY;c.DT=f;a.FY=c;e=new AFc;e.zB=b;b.onpointerdown=Bw(e,"f");e=new AFd;e.yM=b;b.onpointerup=Bw(e,"f");}
function XD(){return (EG()).activeElement;}
function C9(a,b,c,d){b.addEventListener($rt_ustr(c),Bw(d,"handleEvent"));return Wm(a,b,c,d);}
function Wm(a,b,c,d){var e;e=new Z4;e.Fr=b;e.Ft=c;e.Fs=d;return e;}
function ACF(a,b){var c;c=new ADj;c.w9=b;return c;}
function Fk(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jY.getBoundingClientRect();e=BK(G1((b.clientX-d.left)*c),G1((b.clientY-d.top)*c));f=ALy(a.eA);d=new Pd;AC5(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.Fg=f;return d;}
function WX(a,b,c){var d,e,f,g;d=new QW;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AC5(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.pk=0;d.er=e;d.bh=f;d.kc=c;d.AY=g;return d;}
function Ef(a,b){b.stopPropagation();b.preventDefault();}
function Oj(){var a=this;B.call(a);a.p8=null;a.co=null;a.bc=null;a.mn=0;a.BM=null;a.FC=0;a.EC=0;a.lt=null;a.lj=null;a.EP=null;a.Gc=null;a.vM=null;a.ya=null;a.jc=null;a.ix=null;a.kl=null;a.EW=null;a.sG=null;a.dd=null;a.CI=null;a.qk=0;a.m2=0;a.oG=0;a.ov=0;a.lK=0;a.oB=null;a.oO=0.0;a.qr=0.0;}
function AMu(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dd=new Bh;a.qk=0;a.oB=new AEp;a.p8=c;a.mn=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(K(h)));a.bc=b;a.co=K3(c,4,4,1);i=ANu(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B6(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new RP;HQ();c=A$A;m.e4=b;m.il=c;m.uU=j.length/c.nB|0;m.CE
=l.length;n=b.createBuffer();m.x0=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.xa=null;n=b.createBuffer();m.wG=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sG=m;a.EC=NY(g,C(56));c=new Z5;c.ed=b;a.BM=c;a.oO=e;a.qr=f;d=b.getParameter(3379);a.FC=d;c=new J;L(c);V(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dk,9);i=k.data;c=A7v(b);a.lt=c;i[0]=c;c=A8o(b,C(58));a.lj=c;i[1]=c;c=new AAt;Io(c,b,C(59),
C(60),A$A);a.EP=c;i[2]=c;c=A9e(b);a.Gc=c;i[3]=c;c=new Qc;WJ(c,b,C(61),C(62));a.vM=c;i[4]=c;c=A9r(b);a.ya=c;i[5]=c;c=A75(b);a.jc=c;i[6]=c;c=A8_(b);a.ix=c;i[7]=c;c=A9a(b);a.kl=c;i[8]=c;a.EW=k;AE0(b,C(63));}
function II(a,b,c){return GS(a,b,c,400,0);}
function H1(a,b,c){return K3(a.p8,b,c,0);}
function Eb(a,b,c,d){return K3(a.p8,b,c,d);}
function AEF(a,b,c,d,e,f){var g,h;Cr(a.co,c);g=Eb(a,LB(a.co,b)+(d*2|0)|0,e,f);Cr(g,c);B1(g,b,d,L8(c,e));h=C3(a);CR(h,g);EK(g);return h;}
function EU(a,b){var c,d,e,f,g;c=a.bc;d=b.bp;e=b.bt;f=b.bi;g=b.bC;c.clearColor(d,e,f,g);a.bc.clear(16384);}
function Ca(a,b){var c;if(b==a.m2)return b;if(!b)a.bc.disable(3042);else{a.bc.enable(3042);a.bc.blendFuncSeparate(770,771,1,1);}c=a.m2;a.m2=b;return c;}
function N2(a,b,c){Mf(a,b.a,b.b,c);}
function Mf(a,b,c,d){var e,f;e=d.a;f=d.b;a.ov=1;a.lK=1;d=a.oB;d.uu=b;d.uv=c;d.ut=e;d.us=f;AC7(a);}
function Gq(a){a.ov=0;a.lK=0;AC7(a);}
function AC7(a){var b,c,d,e,f,g;b=a.oG;c=a.ov;if(b!=c){a.oG=c;if(!c)a.bc.disable(3089);else a.bc.enable(3089);}if(a.oG&&a.lK){a.lK=0;d=a.bc;e=a.oB;b=e.uu;c=a.dd.b-e.uv|0;f=e.us;c=c-f|0;g=e.ut;d.scissor(b,c,g,f);}}
function Gf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sG;c=a.qk;d=b.il.Br;e=b.e4;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.e4;h=b.x0;e.bindBuffer(34962,h);i=b.il.qW.data;g=i.length;j=0;while(j<g){k=i[j];l=b.e4;m=k.j3;n=k.gO;o=b.il.nB*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gO|0;j=j+1|0;}a:{e=b.xa;if(e!==null){c=0;b.e4.bindBuffer(34962,e);i=b.il.Ax.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.e4;j=e.j3;p=e.gO;m=e.sO;n=b.il.zz;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gO|0;g=g+1|0;}}}q=b.wG;if(q===null){c=b.uU;if(c>0)b.e4.drawArrays(4,0,c);}else{b.e4.bindBuffer(34963,q);k=b.e4;g=b.CE;k.drawElements(4,g,5123,0);}a.qk=d;}
function Bv(a,b,c,d,e){GO(a,a.lt);G0(a.lt,a.bc,b,c,d,a.dd);d=a.lt;FQ(a.bc,d.Cj,e);Gf(a);}
function AFz(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;GO(a,a.ix);G0(a.ix,a.bc,b,c,d,a.dd);j=a.ix;d=a.bc;k=j.xB;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.xA;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ix;FQ(a.bc,d.yn,i);Gf(a);}
function MA(a,b,c,d,e,f,g,h){var i,j;GO(a,a.kl);G0(a.kl,a.bc,b,c,d,a.dd);d=a.kl;i=a.bc;j=d.uR;i.uniform2f(j,e,f);FQ(i,d.zf,g);d=a.kl;FQ(a.bc,d.x2,h);Gf(a);}
function DP(a,b,c,d,e,f,g,h,i){var j;j=!i?a.vM:a.ya;GO(a,j);AMS(j,a.bc,!i?a.qr:a.oO);G0(j,a.bc,b,c,d,a.dd);Oo(j,a.bc,f);AFF(j,a.bc,f,e);ALI(j,a.bc,g,h);Gf(a);}
function C3(a){var b,c;b=new IL;c=a.BM;b.e2=new Bh;b.eT=c;b.gh=c.ed.createTexture();A$B=A$B+1|0;return b;}
function Nm(a,b){AE0(a.bc,b);}
function GO(a,b){var c,d;if(b!==a.CI){c=a.bc;d=b.bL;c.useProgram(d);a.CI=b;}}
function U_(){var a=this;Oj.call(a);a.Ep=null;a.EQ=null;}
function GS(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.co;g=AKt(b,c,d,e);KY(f,g);h=f.dk.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ev(f,C(64));m=Ev(f,C(65));h=new LX;n=g;h.oM=b;h.pw=c;h.DO=d;h.D4=e;h.ey=i;h.eR=j;h.DF=l;h.qD=k;h.ro=n;h.uf=C5(i);h.EJ=C5(h.eR);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.DK=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.DB=b;return h;}
function Cz(){B.call(this);this.C=null;}
function Et(a,b){a.C=b;}
function A6f(a,b){return 0;}
function ZJ(){var a=this;B.call(a);a.bA=null;a.o2=null;a.bY=null;a.fD=null;a.cA=null;a.g7=null;a.hy=null;a.mI=null;a.nh=null;a.dC=null;a.fh=null;a.yG=0;}
function Ui(a,b){var c,d,e,f;DI(a.dC);c=(B5(!b.kc?a.o2:a.bA)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].b_(b);if(f)break;if(b.pk)break;e=e+1|0;}return f;}
function Si(a,b,c){var d,e,f;DI(a.dC);d=(B5(a.g7)).data;e=d.length;f=0;while(f<e){if(d[f].f7(b,c))return 1;f=f+1|0;}return 0;}
function AEb(){B.call(this);this.rA=null;}
function A3b(a,b){var c;c=a.rA;if(Ui(c.cE,WX(c,b,1)))Ef(c,b);}
function AEc(){B.call(this);this.Bi=null;}
function A3o(a,b){var c;c=a.Bi;if(Ui(c.cE,WX(c,b,0)))Ef(c,b);}
function AEd(){B.call(this);this.y0=null;}
function ASS(a,b){var c,d,e,f,g,h,i;c=a.y0;if(c.eA!==null){a:{b:{d=Fk(c,b);e=c.cE;DI(e.dC);f=e.fh;if(f!==null)f.g(d);else{g=(B5(e.bY)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bZ(d))break a;i=i+1|0;}}}}Ef(c,b);}}
function AEe(){B.call(this);this.w$=null;}
function A1S(a,b){var c,d,e,f,g,h;c=a.w$;b.button;if(c.eA!==null)a:{d=Fk(c,b);c=c.cE;e=b.button;DI(c.dC);if(c.fh===null){f=(B5(c.bY)).data;g=f.length;h=0;while(h<g){b=f[h].cw(d,e);if(b!==null){c.fh=b;c.yG=e;break a;}h=h+1|0;}}}}
function AEf(){B.call(this);this.uE=null;}
function A16(a,b){var c,d,e,f,g,h,i;c=a.uE;b.button;if(c.eA!==null){d=Fk(c,b);e=c.cE;f=b.button;DI(e.dC);if(f==e.yG&&e.fh!==null)e.fh=null;g=(B5(e.bY)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dN(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Ef(c,b);}}
function AEg(){B.call(this);this.rU=null;}
function AUq(a,b){var c,d,e,f,g,h,i,j,k;c=a.rU;if(c.eA!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cE;f=Fk(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DI(e.dC);i=(B5(e.fD)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dL(f,d,h))break b;k=k+1|0;}}Ef(c,b);}}
function AEh(){B.call(this);this.C7=null;}
function AQ5(a,b){var c,d,e,f,g,h,i,j;c=a.C7;if(c.eA!==null){d=Fk(c,b);e=c.cE;f=b.button;g=b.detail;DI(e.dC);h=(B5(e.bY)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cM(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Ef(c,b);}}
function AEi(){B.call(this);this.AT=null;}
function A6L(a,b){var c,d,e,f,g,h,i;c=a.AT;if(c.eA!==null){d=Fk(c,b);e=c.cE;DI(e.dC);f=(B5(e.cA)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bM(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Ef(c,b);}}
function AEj(){B.call(this);this.yA=null;}
function AQu(a,b){var c,d,e,f,g,h;b=a.yA.cE;if(b.fh!==null){c=D0();d=BT(b.fh);e=new J;L(e);H(H(e,C(67)),d);Bf(c,K(e));}f=(B5(b.nh)).data;g=f.length;h=0;while(h<g){f[h].e();h=h+1|0;}DI(b.dC);}
function AEk(){B.call(this);this.wC=null;}
function AVc(a,b){var c,d,e;b=a.wC.cE;c=(B5(b.mI)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.fh!==null)b.fh=null;DI(b.dC);}
function WR(){B.call(this);this.v8=null;}
function A6g(a,b){var c;c=a.v8;if(c.eA!==null)Fk(c,b);}
function WS(){B.call(this);this.vl=null;}
function ASx(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vl;if(XD()===c.jY){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B5(c.cE.hy)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].b8();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cE.dC;m=new P0;m.wM=k;m.wN=l;g.getAsString(Bw(m,"accept"));Ef(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function WT(){B.call(this);this.xQ=null;}
function ASW(a,b){var c;c=a.xQ;if(XD()===c.jY&&Si(c.cE,ACF(c,b),0))Ef(c,b);}
function WU(){B.call(this);this.CD=null;}
function A3x(a,b){var c;c=a.CD;if(XD()===c.jY&&Si(c.cE,ACF(c,b),1))Ef(c,b);}
var ACZ=G(0);
var AC9=G();
function K3(a,b,c,d){var e,f,g,h,i;e=new AAU;e.jG=d;A$i=A$i+1|0;e.oo=b;e.nP=c;f=(EG()).createElement("canvas");e.jv=f;g=b;f.width=g;h=e.jv;f=c;h.height=f;if(!d)g=e.jv.getContext("2d");else{i=e.jv;h=AYA();g=i.getContext("2d",h);}e.dk=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AC8=G();
function ARK(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Pf(){var a=this;B.call(a);a.Q=null;a.n=null;a.bH=null;}
var KV=G();
var A94=null;function Nk(a,b,c){return b.mO(c);}
function AHl(){A94=new KV;}
function AIX(){var a=this;B.call(a);a.da=null;a.gr=null;a.cL=0;}
function CS(a){var b=new AIX();AQ0(b,a);return b;}
function AQ0(a,b){a.da=b;}
function FB(a,b){return a.da.data[b];}
function Z(a,b){var c,d,e;c=a.cL;d=a.da;if(c==d.data.length)a.da=C2(d,c+4|0);d=a.da.data;e=a.cL;a.cL=e+1|0;d[e]=b;a.gr=null;}
function S0(a,b){var c,d,e,f;c=0;while(true){d=a.da.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cL=a.cL-1|0;a.gr=null;}c=c+1|0;}}
function B5(a){var b;b=a.gr;if(!(b!==null&&b.data.length==a.cL))a.gr=C2(a.da,a.cL);return a.gr;}
var Cm=G(0);
var CH=G(0);
function A1v(a,b){return 0;}
function AV3(a,b,c){return null;}
function ANX(a,b,c){return 0;}
function A3K(a,b,c,d){return 0;}
var EV=G(0);
var DQ=G(0);
var CQ=G(0);
var FL=G(0);
var CL=G(0);
var F9=G(0);
function RY(){B.call(this);this.DT=null;}
function Bh(){var a=this;B.call(a);a.a=0;a.b=0;}
function BK(a,b){var c=new Bh();Rk(c,a,b);return c;}
function ALy(a){var b=new Bh();APC(b,a);return b;}
function Rk(a,b,c){a.a=b;a.b=c;}
function APC(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function Y(a,b,c){a.a=b;a.b=c;}
function AJw(a){var b,c,d;b=a.a;c=a.b;d=new J;L(d);V(H(V(H(d,C(70)),b),C(71)),c);return K(d);}
function ARA(a,b){var c;a:{b:{if(a!==b){if(BG(b)!==BG(a))break b;if(!Kg(a,b))break b;}c=1;break a;}c=0;}return c;}
function Kg(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AEp(){var a=this;B.call(a);a.uu=0;a.uv=0;a.ut=0;a.us=0;}
var AIp=G();
var AJ$=G(0);
function Z5(){B.call(this);this.ed=null;}
function Oy(){var a=this;B.call(a);a.bL=null;a.Gf=null;}
function ALM(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bf(Bj(),g);Bf(D0(),C(74));Bf(D0(),d);Bf(D0(),C(74));b=new Bt;Bp(b,g);N(b);}
function Dk(){var a=this;Oy.call(a);a.yz=null;a.td=null;a.ok=null;}
function A$C(a,b,c,d){var e=new Dk();Io(e,a,b,c,d);return e;}
function Io(a,b,c,d,e){var f,g,h,i,j,k;a.Gf=e;f=ALM(b,35633,c);d=ALM(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bL=g;h=e.u6.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bL;k=c.j3;c=c.tn;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bL;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AE0(b,C(75));a.ok=new Bh;c=a.bL;a.yz=b.getUniformLocation(c,"uResolution");c=a.bL;a.td=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new J;L(c);H(H(c,C(76)),d);Bp(b,K(c));N(b);}
function AGD(a,b,c){var d,e,f;if(!Kg(a.ok,c)){Ct(a.ok,c);d=a.yz;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function G0(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.td;b.uniform4f(e,i,l,h,j);AGD(a,b,f);}
function AMy(){Dk.call(this);this.Cj=null;}
function A7v(a){var b=new AMy();A1h(b,a);return b;}
function A1h(a,b){var c;HQ();Io(a,b,C(59),C(77),A$A);c=a.bL;a.Cj=b.getUniformLocation(c,"uColor");}
function FE(){Dk.call(this);this.uz=null;}
function A8o(a,b){var c=new FE();ACH(c,a,b);return c;}
function A$D(a,b,c){var d=new FE();ACL(d,a,b,c);return d;}
function ACH(a,b,c){ACL(a,b,C(59),c);}
function ACL(a,b,c,d){HQ();Io(a,b,c,d,A$A);c=a.bL;a.uz=b.getUniformLocation(c,"sDiffuse");}
function Oo(a,b,c){var d;d=a.uz;b.uniform1i(d,0);b.activeTexture(33984);c=c.gh;b.bindTexture(3553,c);}
var AAt=G(Dk);
function AHg(){FE.call(this);this.Du=null;}
function A9e(a){var b=new AHg();ATV(b,a);return b;}
function ATV(a,b){var c;ACH(a,b,C(78));c=a.bL;a.Du=b.getUniformLocation(c,"uContrast");}
function HI(){var a=this;FE.call(a);a.sv=null;a.tw=null;a.uP=null;a.BD=null;a.q7=0.0;}
function A$E(a,b,c){var d=new HI();WJ(d,a,b,c);return d;}
function WJ(a,b,c,d){ACL(a,b,c,d);c=a.bL;a.sv=b.getUniformLocation(c,"uTexTransform");c=a.bL;a.tw=b.getUniformLocation(c,"uColor");c=a.bL;a.uP=b.getUniformLocation(c,"uBgColor");c=a.bL;a.BD=b.getUniformLocation(c,"uTextPow");}
function AMS(a,b,c){var d;if(a.q7!==c){a.q7=c;d=a.BD;b.uniform2f(d,c,0.0);}}
function ALI(a,b,c,d){FQ(b,a.tw,c);FQ(b,a.uP,d);}
function AFF(a,b,c,d){var e,f,g,h,i,j;c=c.e2;e=c.a;f=c.b;g=d.bp;h=e;g=g/h;i=d.bt;j=f;i=i/j;h=d.bi/h;j=d.bC/j;c=a.sv;b.uniform4f(c,g,i,h,j);}
var Qc=G(HI);
var AJd=G(HI);
function A9r(a){var b=new AJd();AZ0(b,a);return b;}
function AZ0(a,b){WJ(a,b,C(61),C(79));}
function AKm(){var a=this;FE.call(a);a.xb=null;a.w_=null;a.tx=null;}
function A75(a){var b=new AKm();AP3(b,a);return b;}
function AP3(a,b){var c,d;ACH(a,b,C(80));c=a.bL;a.xb=b.getUniformLocation(c,"uColorB");d=a.bL;a.w_=b.getUniformLocation(d,"uColorF");d=a.bL;a.tx=b.getUniformLocation(d,"uContrast");}
function ALZ(){var a=this;Dk.call(a);a.yn=null;a.xB=null;a.xA=null;}
function A8_(a){var b=new ALZ();AZ4(b,a);return b;}
function AZ4(a,b){var c;HQ();Io(a,b,C(59),C(81),A$A);c=a.bL;a.yn=b.getUniformLocation(c,"uColor");c=a.bL;a.xB=b.getUniformLocation(c,"uPoints1");c=a.bL;a.xA=b.getUniformLocation(c,"uPoints2");}
function AF9(){var a=this;Dk.call(a);a.x2=null;a.uR=null;a.zf=null;}
function A9a(a){var b=new AF9();AYQ(b,a);return b;}
function AYQ(a,b){var c;HQ();Io(a,b,C(59),C(82),A$A);c=a.bL;a.x2=b.getUniformLocation(c,"uColor");c=a.bL;a.uR=b.getUniformLocation(c,"uBaseline");c=a.bL;a.zf=b.getUniformLocation(c,"uScaleHExp");}
var AA6=G(0);
var AM_=G(0);
function FQ(b,c,d){var e,f,g,h;e=d.bp;f=d.bt;g=d.bi;h=d.bC;b.uniform4f(c,e,f,g,h);}
function AE0(b,c){var d,e;d=b.getError();if(d){b=Bj();e=new J;L(e);V(H(e,c),d);Bf(b,K(e));}}
function Z4(){var a=this;B.call(a);a.Fr=null;a.Ft=null;a.Fs=null;}
function RP(){var a=this;B.call(a);a.e4=null;a.il=null;a.x0=null;a.xa=null;a.wG=null;a.uU=0;a.CE=0;}
function CD(){var a=this;B.call(a);a.Fp=null;a.fj=0;}
function Dt(a,b,c){a.Fp=b;a.fj=c;}
function Hr(){var a=this;CD.call(a);a.u6=null;a.qW=null;a.Ax=null;a.nB=0;a.zz=0;a.Br=0;}
var A$A=null;var A$F=null;function HQ(){HQ=Bm(Hr);ARm();}
function ANP(){HQ();return A$F.d1();}
function ARm(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hr;c=P(Ep,2);d=c.data;AMT();d[0]=A$G;d[1]=A$H;HQ();Dt(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.qB.fj){case 0:f=f+l.gO|0;h=h+1|0;break a;case 1:e=e+l.gO|0;g=g+1|0;break a;default:}}i=i|1<<l.j3;k=k+1|0;}b.u6=c;b.nB=e;b.zz=f;b.Br=i;c=P(Ep,g);m=c.data;b.qW=c;c=P(Ep,h);n=c.data;b.Ax=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.qB.fj){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A$A
=b;c=P(Hr,1);c.data[0]=b;A$F=c;}
var MQ=G(0);
var TU=G(0);
var ADd=G(0);
var Hd=G();
function Nh(){Hd.call(this);this.Dk=null;}
function AGW(){var a=this;Nh.call(a);a.Ez=0;a.nL=0;a.l0=null;a.nm=null;a.vH=null;}
function AS5(a,b){var c=new AGW();A5g(c,a,b);return c;}
function A5g(a,b,c){a.Dk=b;b=new J;L(b);a.l0=b;a.nm=B6(32);a.Ez=c;AGP();a.vH=A$I;}
function ACp(a,b,c,d){var e,$$je;e=a.Dk;if(e===null)a.nL=1;if(!(a.nL?0:1))return;a:{try{e.nf(b,c,d);break a;}catch($$e){$$je=E$($$e);if($$je instanceof Jq){}else{throw $$e;}}a.nL=1;}}
function YE(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ALk(b,c,d-c|0);e=DS(Bd(16,Be(e.length,1024)));g=AK8(e,0,e.data.length);h=a.vH;i=new Rd;b=DS(1);j=b.data;j[0]=63;HC();k=A$J;i.on=k;i.nQ=k;c=j.length;if(c&&c>=i.xz){i.Fo=h;i.tl=b.d1();i.Ev=2.0;i.xz=4.0;i.zk=B6(512);i.rS=DS(512);k=A$K;if(k===null){i=new BX;Bp(i,C(84));N(i);}i.on=k;i.nQ=k;a:while(true){if(i.lS==3){f=new Dc;X(f);N(f);}i.lS=2;b:{while(true){try{k=AF2(i,f,g);}catch($$e){$$je=E$($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Jk(k))
{d=Ck(f);if(d<=0)break b;k=EF(d);}else if(Iv(k))break;h=!MH(k)?i.on:i.nQ;c:{if(h!==A$K){if(h===A$L)break c;else break b;}d=Ck(g);b=i.tl;l=b.data.length;if(d<l){k=A$M;break b;}AED(g,b,0,l);}FI(f,f.bd+Ls(k)|0);}}l=Iv(k);ACp(a,e,0,g.bd);Qm(g);if(!l){while(true){d=i.lS;if(d!=2&&d!=4){f=new Dc;X(f);N(f);}f=A$N;if(f===f)i.lS=3;l=Iv(f);ACp(a,e,0,g.bd);Qm(g);if(!l)break;}return;}}N(AZx(f));}i=new BX;Bp(i,C(85));N(i);}
function Bf(a,b){var c,d,e,f,g,h,i,j;Br(BM(a.l0,b),10);b=a.l0;c=b.H;d=a.nm;if(c>d.data.length)d=B6(c);e=0;f=0;if(e>c){b=new BJ;Bp(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}YE(a,d,0,c);a.l0.H=0;}
function HW(){Hd.call(this);this.F2=null;}
function W5(a){a.F2=DS(1);}
var L5=G(HW);
var A$l=null;function ARD(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AH7(){var b;b=new L5;W5(b);A$l=b;}
function Ep(){var a=this;CD.call(a);a.tn=null;a.qB=null;a.gO=0;a.sO=0;a.j3=0;}
var A$G=null;var A$H=null;var A$O=null;function AMT(){AMT=Bm(Ep);A0I();}
function A7F(a,b,c,d,e,f,g){var h=new Ep();VQ(h,a,b,c,d,e,f,g);return h;}
function ANt(){AMT();return A$O.d1();}
function VQ(a,b,c,d,e,f,g,h){AMT();Dt(a,b,c);a.tn=d;a.qB=e;a.gO=f;a.sO=g;a.j3=h;}
function A0I(){var b;b=new Ep;AHB();VQ(b,C(87),0,C(88),A$P,2,0,0);A$G=b;b=A7F(C(89),1,C(90),A$P,2,0,1);A$H=b;A$O=I(Ep,[A$G,b]);}
function M_(){var a=this;B.call(a);a.Ff=null;a.FF=null;}
function AIe(b){var c,d;if(GK(b))N(AKK(b));if(!AMf(Q(b,0)))N(AKK(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AMf(d))break a;else N(AKK(b));}}c=c+1|0;}}
function AMf(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var MT=G(M_);
var A$I=null;function AGP(){AGP=Bm(MT);AP2();}
function AIr(a){var b,c;b=new T0;b.gM=C(91);HC();c=A$J;b.jM=c;b.ot=c;b.FA=a;b.xF=0.3333333432674408;b.D6=0.5;b.ys=DS(512);b.Bg=B6(512);return b;}
function AP2(){var b,c,d,e,f;b=new MT;AGP();c=P(BC,0);d=c.data;AIe(C(92));e=d.length;f=0;while(f<e){AIe(d[f]);f=f+1|0;}b.Ff=C(92);b.FF=c.d1();A$I=b;}
function Zg(){var a=this;B.call(a);a.gD=null;a.qQ=null;a.m3=null;a.Bw=null;a.s0=null;a.ti=null;}
function AKN(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gD,b,c));}
function Pw(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.qQ[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gD,b,d));f=e.data;Fp();d=f.length;AGP();g=A$I;h=AK8(e,0,d);a:{try{i=AIr(g);HC();g=AKf(AHK(AMN(i,A$K),A$K),h);break a;}catch($$e){$$je=E$($$e);if($$je instanceof Gw){g=$$je;}else{throw $$e;}}h=new AEL;h.k8=1;h.lr=1;h.jb=C(93);h.nR=g;N(h);}if(!g.bd&&g.ew==g.oP)c.cj=g.iV;else{f=B6(Ck(g));e=f.data;c.cj=f;PU(g,f,0,e.length);}return c;}
function XF(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.m3[e]){e=e+1|0;}d=e-d|0;JN(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gD,b,d)));return c;}
var Ik=G(CD);
var A$Q=null;var A$P=null;var A$R=null;function AHB(){AHB=Bm(Ik);AZK();}
function APX(a,b){var c=new Ik();AMq(c,a,b);return c;}
function ASe(){AHB();return A$R.d1();}
function AMq(a,b,c){AHB();Dt(a,b,c);}
function AZK(){var b;A$Q=APX(C(94),0);b=APX(C(95),1);A$P=b;A$R=I(Ik,[A$Q,b]);}
var N8=G(HW);
var A$m=null;function AQa(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AJu(){var b;b=new N8;W5(b);A$m=b;}
function AIk(){BX.call(this);this.DA=null;}
function AKK(a){var b=new AIk();AVx(b,a);return b;}
function AVx(a,b){X(a);a.DA=b;}
var Vk=G(EH);
var MS=G(0);
function AFc(){B.call(this);this.zB=null;}
function AUV(a,b){a.zB.setPointerCapture(b.pointerId);}
function AFd(){B.call(this);this.yM=null;}
function AOH(a,b){a.yM.releasePointerCapture(b.pointerId);}
function It(){var a=this;B.call(a);a.oP=0;a.bd=0;a.ew=0;a.j9=0;}
function ADY(a,b){a.j9=(-1);a.oP=b;a.ew=b;}
function FI(a,b){var c,d,e;if(b>=0&&b<=a.ew){a.bd=b;if(b<a.j9)a.j9=0;return a;}c=new BX;d=a.ew;e=new J;L(e);Br(V(H(V(H(e,C(96)),b),C(97)),d),93);Bp(c,K(e));N(c);}
function Ck(a){return a.ew-a.bd|0;}
function Eg(a){return a.bd>=a.ew?0:1;}
var ABi=G(0);
var LY=G(It);
function AJg(b){var c,d;if(b>=0)return AT8(0,b,B6(b),0,b,0);c=new BX;d=new J;L(d);V(H(d,C(98)),b);Bp(c,K(d));N(c);}
function ALk(b,c,d){return AT8(0,b.data.length,b,c,c+d|0,0);}
function PU(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BJ;i=new J;L(i);V(H(V(H(i,C(99)),g),C(100)),f);Bp(h,K(i));N(h);}if(Ck(a)<d){j=new OF;X(j);N(j);}if(d<0){j=new BJ;k=new J;L(k);H(V(H(k,C(101)),d),C(102));Bp(j,K(k));N(j);}g=a.bd;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iV.data[m+a.qE|0];l=l+1|0;c=n;m=o;}a.bd=g+d|0;return a;}}b=b.data;j=new BJ;d=b.length;k=new J;L(k);Br(V(H(V(H(k,C(103)),c),C(97)),d),41);Bp(j,K(k));N(j);}
function NK(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.qR){b=new KO;X(b);N(b);}e=d-c|0;if(Ck(a)<e){b=new J3;X(b);N(b);}if(c>M(b)){f=new BJ;d=M(b);b=new J;L(b);Br(V(H(V(H(b,C(104)),c),C(97)),d),41);Bp(f,K(b));N(f);}if(d>M(b)){f=new BJ;c=M(b);b=new J;L(b);V(H(V(H(b,C(105)),d),C(106)),c);Bp(f,K(b));N(f);}if(c>d){b=new BJ;f=new J;L(f);V(H(V(H(f,C(104)),c),C(107)),d);Bp(b,K(f));N(b);}g=a.bd;while(c<d){h=g+1|0;i=c+1|0;ABn(a,g,Q(b,c));g=h;c=i;}a.bd=a.bd+e|0;return a;}
function Nz(){var a=this;It.call(a);a.nK=0;a.qm=null;a.Eh=null;}
function AK8(b,c,d){var e,f,g;e=b.data;f=new AEC;g=e.length;d=c+d|0;ADY(f,g);A1j();f.Eh=A$S;f.nK=0;f.qm=b;f.bd=c;f.ew=d;f.El=0;f.xZ=0;return f;}
function AED(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.xZ){e=new KO;X(e);N(e);}if(Ck(a)<d){e=new J3;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BJ;j=new J;L(j);V(H(V(H(j,C(108)),h),C(100)),g);Bp(i,K(j));N(i);}if(d<0){e=new BJ;i=new J;L(i);H(V(H(i,C(101)),d),C(102));Bp(e,K(i));N(e);}h=a.bd;k=h+a.nK|0;l=0;while(l<d){b=a.qm.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bd=h+d|0;return a;}}b=b.data;e=new BJ;d=b.length;i=new J;L(i);Br(V(H(V(H(i,C(103)),c),C(97)),d),41);Bp(e,
K(i));N(e);}
function Qm(a){a.bd=0;a.ew=a.oP;a.j9=(-1);return a;}
function I1(){B.call(this);this.EY=null;}
var A$L=null;var A$K=null;var A$J=null;function HC(){HC=Bm(I1);ASB();}
function AI0(a){var b=new I1();AMd(b,a);return b;}
function AMd(a,b){HC();a.EY=b;}
function ASB(){A$L=AI0(C(109));A$K=AI0(C(110));A$J=AI0(C(111));}
var PK=G(Cz);
function ASq(a){}
function ARh(a,b,c){}
function H5(){var a=this;Cz.call(a);a.c4=null;a.q=null;}
function ADX(a,b){var c,d,e;Et(a,b);a.c4=AKs(0,0,64);c=new Us;c.bT=new Bh;c.di=CS(P(CM,0));c.d_=new Bh;c.qC=new Bh;c.mP=new B4;c.Dm=new B4;d=b.Q;c.bN=d;e=b.bH;c.cu=e;c.cN=d.mn;c.c3=Sa(e);d=b.n.nh;e=new Z0;e.uy=c;Z(d,e);d=b.n.mI;e=new ZZ;e.w6=c;Z(d,e);Z(b.n.g7,c);Z(b.n.hy,c);a.q=c;Z(b.n.bA,new AA8);b=b.n.bA;c=a.q;BF(c);d=new AA7;d.yr=c;Z(b,d);}
function HP(a){EU(a.C.Q,a.c4);}
function AHr(a,b,c){var d,e,f,g,h;a:{d=a.q;Ct(d.bT,b);e=d.cm;if(e!==c){d.cm=c;f=(B5(d.di)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eL(e,c);h=h+1|0;}}}}
function Cq(){H5.call(this);this.v=null;}
function Go(a,b){G8(a,b,1);}
function G8(a,b,c){var d,e,f;ADX(a,b);d=new AEQ;e=a.q;d.bx=CS(P(UE,0));d.V=e;a.v=d;Z(a.q.di,d);Z(b.n.bY,a.v);d=b.n.fD;e=a.v;BF(e);f=new Xf;f.wX=e;Z(d,f);d=b.n.cA;e=a.v;BF(e);f=new Xe;f.uh=e;Z(d,f);if(c){b=b.n.bY;f=a.q.c3;d=new X1;d.xx=f;Z(b,d);}}
function AP6(a){HP(a);J$(a.v);}
function IV(a,b,c){var d,e;AHr(a,b,c);d=(B5(a.v.bx)).data.length;e=0;while(e<d){e=e+1|0;}}
function Qw(a,b){var c,d,e,f,g;c=a.v;d=0;e=(B5(c.bx)).data;f=e.length;g=0;while(g<f){d=e[g].Y.cF(b)|d;g=g+1|0;}return d;}
var Fn=G(0);
function AI6(a){a.d6(IW());}
function JK(a){a.d6(Gu());}
function AJX(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Jf;c=new Kx;d=new HD;AIs();Lh(d,A$T);MU(c,d,B0(A$U),B0(A$V),B0(A$W),B0(A$U),B0(A$X),B0(A$Y),B0(A$Z),B0(A$0),B0(A$1),B0(A$2));e=ALd(S(C(112)));f=(AMt()).data;g=f.length;h=P(KM,g);i=h.data;j=0;while(j<g){i[j]=f[j].p2;j=j+1|0;}k=AL2(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new Jh;m=new Jo;AX5();d=A$3;O8(m,d,A$4,A$5,A$6,A$7,d);Mg(l,m,AMO(),AI9(S(C(117)),S(C(112)),Cs(0)),AMO(),AJx(1,0.07500000298023224),A$8,A$9);L7(b,c,e,h,k,l,AFI(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.d6(b);}
var JZ=G(0);
var EY=G(0);
function Lf(){var a=this;Cq.call(a);a.G=null;a.K=null;a.i8=null;a.jO=0;a.lv=null;a.mV=null;a.Az=null;a.nJ=null;a.fV=null;}
function A9b(a){var b=new Lf();AGS(b,a);return b;}
function AGS(a,b){var c,d,e;G8(a,b,0);a.fV=AYZ(a.q);c=IT(a.v);a.i8=c;a.G=GW(c);c=GW(a.i8);a.K=c;a.mV=AIT(a.G,c);c=a.G;c.b9=1;OH(a.fV,c,a.K);c=a.G;d=new UP;d.Cv=a;c.iM=d;c=a.K;d=new UQ;d.z4=a;c.iM=d;AIR(a,0);Nl(a.q,a.G);Z(b.n.fD,a);Z(b.n.bY,a);c=b.n.bA;d=new UR;d.x4=a;Z(c,d);c=b.n.bA;d=new GJ;e=new UN;e.vY=a;G5(d,b,e);Z(c,d);Z(b.n.g7,a);Z(b.n.hy,a);b=b.n.cA;c=new UO;c.tB=a;Z(b,c);JK(a);}
function W9(a,b){if(a.G===b)a.jO=a.jO|1;if(a.K===b)a.jO=a.jO|2;if((a.jO&3)==3)AMV(a);}
function AIR(a,b){Jg(a.G,b);Jg(a.K,b);}
function A5P(a,b,c){if(Dz(a.q,a.G))return Jt(a.G,b,c);if(!Dz(a.q,a.K))return 0;return Jt(a.K,b,c);}
function AHc(a){if(Dz(a.q,a.G))return WO(a,a.G);if(!Dz(a.q,a.K))return null;return WO(a,a.K);}
function WO(a,b){var c;c=new TL;c.s_=b;return c;}
function AGQ(a,b,c){var d;d=E5(c);if(b!==a.G)a.nJ=d;else a.Az=d;b=a.Az;if(b!==null&&a.nJ!==null)GA(a.C.bH,E5(c));else{if(b!==null)GA(a.C.bH,b);b=a.nJ;if(b!==null)GA(a.C.bH,b);}}
function AMV(a){var b,c,d;Bf(Bj(),C(122));b=a.G.d.h;c=a.K.d.h;d=new Wo;d.tj=a;AJ0(b,c,d,a.C.bH);}
function AUE(a,b){var c;c=Qw(a,b);return LZ(a.G,b)|LZ(a.K,b)|c;}
function A13(a){var b;HP(a);IF(a.G);IF(a.K);b=a.fV;AH3(b,b.i0.bN);J$(a.v);}
function A04(a){return EL(0);}
function AU4(a){JP(a.G);JP(a.K);}
function A1X(a){KQ(a.G);KQ(a.K);}
function AVL(a,b){IQ(a.G,b);IQ(a.K,b);}
function A2U(a,b){KR(a.q,b);}
function APn(a,b){if(GT(a.v,b)){Mj(a.G);Mj(a.K);}}
function ARV(a,b,c){IV(a,b,c);AHp(a,b,c);}
function AHp(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Cj(20.0,c);f=new Bh;g=b.a/2|0;h=e/2|0;Rk(f,g-h|0,b.b);MR(a.G,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;MR(a.K,d,f,c);Y(a.fV.i,f.a,d.b);Y(a.fV.k,d.a-f.a|0,f.b);}
function AN1(a,b){BF(b);F5(a.i8,b);E7(a.G,b);E7(a.K,b);a.fV.iE=b;}
function AIL(a,b){if(b.bh!=121)return 0;return 1;}
function AK7(a,b){var c,d,e,f;if(Dz(a.q,a.G)){c=a.i8;d=b.j;e=a.G;f=new PC;f.vT=a;I0(c,d,e,a,a,a,f);}if(Dz(a.q,a.K)){c=a.i8;b=b.j;d=a.K;e=new PB;e.u4=a;I0(c,b,d,a,a,a,e);}return 1;}
function A3f(a,b){var c,d;c=B3(a.G,b.j)&&Yw(a.G,b)?1:0;d=B3(a.K,b.j)&&Yw(a.K,b)?1:0;return !c&&!d?0:1;}
function A08(a,b,c,d){var e,f;e=B3(a.G,b.j)&&Py(a.G,b,c,d)?1:0;f=B3(a.K,b.j)&&Py(a.K,b,c,d)?1:0;return !e&&!f?0:1;}
function ASR(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.G,b.j);e=B3(a.K,b.j);f=a.q;g=f.cU;h=g!==null?0:1;i=a.G;j=g!==i?0:1;k=g!==a.K?0:1;if(d&&!(!h&&!k))CV(f,i);if(e&&!(!h&&!j))CV(a.q,a.K);if(d){i=Xo(a.G,b,c);if(i!==null)return i;}return !e?null:Xo(a.K,b,c);}
function A3M(a,b,c){var d,e,f,g;d=B3(a.G,b.j);e=B3(a.K,b.j);f=d&&TT(a.G,b,c)?1:0;g=e&&TT(a.K,b,c)?1:0;return !f&&!g?0:1;}
function AUb(a,b,c,d){var e,f,g,h;e=B3(a.G,b.j);f=B3(a.K,b.j);g=e&&Md(a.G,b,c,d)?1:0;h=f&&Md(a.K,b,c,d)?1:0;return !g&&!h?0:1;}
function A1y(a){return AHc(a);}
var AIu=G(Lf);
function A8I(a){var b=new AIu();A5C(b,a);return b;}
function A5C(a,b){var c;AGS(a,b);a.G.e9=1;a.K.e9=1;c=new Ud;c.x7=a;QN(a,c,C(123));c=new Uf;c.Bz=a;QN(a,c,C(124));}
function AS2(a){return EL(1);}
function QN(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Pq;d=d.then(Bw(e,"f"));f=new Ps;f.uB=b;f.uA=c;g=new Pr;d.then(Bw(f,"f"),Bw(g,"f"));}
var AIV=G();
function A47(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(Kj(b)){case -1570047148:if(!Bk(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bk(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bk(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bk(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bk(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bk(b,C(131)))break a;d=19;break a;case -811765794:if(!Bk(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bk(b,C(133)))break a;d=11;break a;case -695287066:if(!Bk(b,C(134)))break a;d=20;break a;case -643550180:if(!Bk(b,C(135)))break a;d=28;break a;case -631889171:if(!Bk(b,C(136)))break a;d=9;break a;case -536831301:if(!Bk(b,C(137)))break a;d=26;break a;case -439438829:if(!Bk(b,C(138)))break a;d=21;break a;case -357667878:if(!Bk(b,C(139)))break a;d=22;break a;case -223304637:if(!Bk(b,C(140)))break a;d=2;break a;case -193916863:if(!Bk(b,C(141)))break a;d=23;break a;case 2129957:if(!Bk(b,C(142)))break a;d=1;break a;case 3343967:if
(!Bk(b,C(143)))break a;d=10;break a;case 3556498:if(!Bk(b,C(144)))break a;d=4;break a;case 91636708:if(!Bk(b,C(145)))break a;d=25;break a;case 485517998:if(!Bk(b,C(146)))break a;d=7;break a;case 544901384:if(!Bk(b,C(147)))break a;d=3;break a;case 654963552:if(!Bk(b,C(148)))break a;d=24;break a;case 1030621992:if(!Bk(b,C(149)))break a;d=16;break a;case 1164939699:if(!Bk(b,C(150)))break a;d=29;break a;case 1465713255:if(!Bk(b,C(151)))break a;d=8;break a;case 1554501643:if(!Bk(b,C(152)))break a;d=15;break a;case 1609169232:if
(!Bk(b,C(153)))break a;d=12;break a;case 2090248989:if(!Bk(b,C(154)))break a;d=27;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Vy;break b;case 3:case 4:b=new Vv;break b;case 5:b=new Vu;break b;case 6:b=new Vx;break b;case 7:b=new Vw;break b;case 8:b=new VC;break b;case 9:case 10:b=new VB;break b;case 11:b=new VE;break b;case 12:b=new VD;break b;case 13:b=new AB8;break b;case 14:b=new AB7;break b;case 15:b=new AB6;break b;case 16:b=new ABT;break b;case 17:b=new ABS;break b;case 18:b=new ABQ;break b;case 19:b
=new ABP;break b;case 20:b=new ABO;break b;case 21:b=new ABN;break b;case 22:b=new ABM;break b;case 23:b=new ABX;break b;case 24:b=new ABW;break b;case 25:b=new ABV;break b;case 26:b=new ABU;break b;case 27:b=new AB1;break b;case 28:b=new AB0;break b;case 29:b=new ABZ;break b;default:b=new ABY;break b;}b=new Vz;}return b;}
var ALg=G();
var Lm=G(LY);
function AG_(){var a=this;Lm.call(a);a.qR=0;a.qE=0;a.iV=null;}
function AT8(a,b,c,d,e,f){var g=new AG_();AXe(g,a,b,c,d,e,f);return g;}
function AXe(a,b,c,d,e,f,g){ADY(a,c);a.bd=e;a.ew=f;a.qE=b;a.qR=g;a.iV=d;}
function ABn(a,b,c){a.iV.data[b+a.qE|0]=c;}
function LQ(){var a=this;B.call(a);a.Fo=null;a.tl=null;a.Ev=0.0;a.xz=0.0;a.on=null;a.nQ=null;a.lS=0;}
function OD(){var a=this;B.call(a);a.iq=0;a.kC=0;}
var A$N=null;var A$M=null;function AF5(a,b){var c=new OD();AKq(c,a,b);return c;}
function AKq(a,b,c){a.iq=b;a.kC=c;}
function Jk(a){return a.iq?0:1;}
function Iv(a){return a.iq!=1?0:1;}
function N7(a){return !Se(a)&&!MH(a)?0:1;}
function Se(a){return a.iq!=2?0:1;}
function MH(a){return a.iq!=3?0:1;}
function Ls(a){var b;if(N7(a))return a.kC;b=new DU;X(b);N(b);}
function EF(b){return AF5(2,b);}
function U9(a){var b,c;switch(a.iq){case 0:b=new RR;X(b);N(b);case 1:b=new Ww;X(b);N(b);case 2:b=new U4;c=a.kC;X(b);b.E9=c;N(b);case 3:b=new RJ;c=a.kC;X(b);b.Gy=c;N(b);default:}}
function AKD(){A$N=AF5(0,0);A$M=AF5(1,0);}
var AF0=G();
var Jn=G(0);
var XR=G();
function AQg(a,b){return b.arrayBuffer();}
var XQ=G();
function ATy(a,b){var c,d;c=new Zf;d=new Zd;return $rt_globals.WebAssembly.instantiate(b,ARJ(Bw(c,"f"),Bw(d,"f")));}
var XO=G();
function AT2(a,b){AOD(b);}
var XN=G();
function AZd(a,b){AI3(b);}
var W=G(0);
function Ud(){B.call(this);this.x7=null;}
function A6l(a,b){Ig(a.x7.G,b);}
function Uf(){B.call(this);this.Bz=null;}
function A1C(a,b){Ig(a.Bz.K,b);}
var Vz=G();
function AV1(a,b){return A9b(b);}
var Vy=G();
function ANJ(a,b){return A73(b);}
var Vv=G();
function AZU(a,b){return A8d(b);}
var Vu=G();
function A2S(a,b){var c,d,e,f,g;c=new ACq;Et(c,b);d=(IW()).bv.es;c.FQ=d;c.lz=AMW(d);c.jo=new Bh;c.ir=new Bh;c.dv=Lb();c.d8=Lb();c.nx=EL(1);b=b.n.bY;d=new Xw;d.mz=c;Z(b,d);b=c.nx.data[DX()*c.nx.data.length|0];d=II(c.C.Q,b,10);c.nk=d;Cr(c.C.Q.co,d);e=Ev(c.C.Q.co,C(155));d=c.C.Q.co;f=new J;L(f);Br(f,43);H(f,b);g=C5(e+Ev(d,K(f)));c.j1=g;c.i2=BY(c.i2,AFq(c,1,g,b,c.nk,c.C.Q));c.i1=BY(c.i1,AFq(c,0,c.j1,b,c.nk,c.C.Q));RV(c,c.dv,c.i2);RV(c,c.d8,c.i1);Cv(c.dv.bb,1.0,1.0,1.0,1.0);Fv(c.dv,c.lz);Cv(c.d8.bb,1.0,1.0,1.0,1.0);Fv(c.d8,
c.lz);b=Bj();g=c.j1;d=new J;L(d);V(H(d,C(156)),g);Bf(b,K(d));return c;}
var Vx=G();
function AP0(a,b){var c,d,e;c=new Yz;Go(c,b);d=new Xs;d.oi=new Bh;d.oL=new Bh;c.zI=d;c.fn=ALi();c.dQ=ALi();c.o5=DA(C(157),25.0);Z(c.q.di,c);d=b.n.bA;e=new ACS;e.vy=c;Z(d,e);Z(b.n.bY,c);b=b.n.cA;d=new ACO;d.wx=c;Z(b,d);AFt(c.dQ);BL(c.c4,Cs(43));b=Fs();J2(c.fn,b);J2(c.dQ,b);b=c.fn;b.lf=new ACP;d=c.dQ;d.lf=new ACQ;d.pE=new QJ;d.xE=new QK;NO(b,(Ss(0)).kH);NO(c.dQ,(Ss(0)).kH);return c;}
var Vw=G();
function AXk(a,b){var c,d,e;c=new ABR;Go(c,b);Z(c.q.di,c);BL(c.c4,Cs(43));d=b.n.bA;e=new Vo;e.DJ=c;Z(d,e);b=b.n.cA;d=new Vp;d.Ch=c;Z(b,d);return c;}
var VC=G();
function APE(a,b){var c,d,e;c=new XW;ADX(c,b);c.ig=BO();c.gy=BO();c.sC=S(C(158));c.kA=VT();c.ie=0;d=c.q.di;e=new PA;e.yZ=c;Z(d,e);Z(b.n.bY,c);d=b.n.bA;e=new Pz;e.wH=c;Z(d,e);b=II(b.Q,C(157),35);c.kF=b;c.mJ=AJY(Fh(b));BL(c.c4,S(C(159)));return c;}
var VB=G();
function ASi(a,b){var c,d,e,f;c=new TA;Et(c,b);c.ij=AI2();c.ff=0;c.vL=500;c.sD=IX(0,0,0,255,new B4);c.mX=20;c.yg=20;c.Bm=IW();d=b.n.bY;e=new XH;e.l8=c;f=new UM;f.Bf=e;e.sn=f;Z(d,e);d=b.n.fD;e=new AA9;e.BP=c;Z(d,e);c.eM=b.Q;c.yE=Sa(b.bH);ZI(c.ij,II(c.eM,C(157),c.yg),c.mX,c.eM.mn);c.jn=Jv();return c;}
var VE=G();
function A4m(a,b){var c,d;c=new RS;H7(c,b);b=b.n.bA;d=new Rm;d.tK=c;Z(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var VD=G();
function ANp(a,b){var c,d,e,f,g,h,i;c=new Yf;Go(c,b);d=b.n.cA;e=new Sh;e.y2=c;Z(d,e);d=b.bH;f=new Ql;f.EK=c;g=P(B,1);g.data[0]=C(160);CO(d,f,C(161),g);h=new Qk;h.FJ=c;g=P(B,1);g.data[0]=AKV([1,2,3,4,5]);CO(d,h,C(162),g);h=new Qh;h.GM=c;i=P(B,1);i.data[0]=A7G([1,2,3,4,5]);CO(d,h,C(163),i);h=new Qf;h.FT=c;g=P(B,1);g.data[0]=D6([1,2,3,4,5]);CO(d,h,C(164),g);d=b.n.bA;e=new GJ;h=new Sg;h.Bj=c;G5(e,b,h);Z(d,e);return c;}
var AB8=G();
function AND(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Xy;H7(c,b);c.fd=Ir(0,0,300,300);c.gY=TY(0,0,3,3);d=b.Q;b=b.n.bY;e=new AC2;e.nq=c;Z(b,e);b=AM3(d);c.B1=b;F3(c.fd,b);Gc(c.fd);b=c.fd.bq;FW();BL(b,A$$);BL(c.fd.bb,DD(204,120,50));AHD();e=A$_;f=DS((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C3(d);switch(e.fj){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Ff;X(b);N(b);}b:
{XK(m,5,5,h);b=m.eT.ed;switch(e.fj){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Ff;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.n9=m;Y(c.gY.u,BU(m),CT(c.n9));BL(c.gY.bq,c.qw);return c;}
var AB7=G();
function A1I(a,b){var c,d,e;c=new Ty;H7(c,b);c.hg=Ir(0,0,300,300);c.mU=new Bh;c.kW=new Bh;c.kf=new Bh;d=b.Q;b=b.n.bY;e=new YH;e.kS=c;Z(b,e);b=AM3(d);c.rw=b;F3(c.hg,b);Gc(c.hg);b=c.hg.bq;FW();BL(b,A$$);BL(c.hg.bb,DD(204,120,50));return c;}
var AB6=G();
function ATh(a,b){var c,d,e,f;c=new ABC;Et(c,b);c.EV=20;c.Gz=11;c.Fh=220;c.mx=new Bh;c.F1=5000;c.iF=1;c.g9=I(HD,[Cs(0),Cs(255)]);c.eV=b.Q;d=b.n.bY;e=new Zx;e.mk=c;f=new VP;f.ul=e;e.rl=f;Z(d,e);b=b.n.fD;d=new WW;d.r6=c;Z(b,d);b=H1(c.eV,200,220);c.pc=b;HM(b,C(157),20.0);b=H1(c.eV,200,20);c.g1=b;HM(b,C(157),20.0);c.iX=Jv();return c;}
var ABT=G();
function AQk(a,b){var c,d,e;c=new KK;H7(c,b);Z(b.n.bY,c);d=b.n.bA;e=new AEz;e.xD=c;Z(d,e);Z(b.n.g7,new AEy);d=b.n.g7;e=new AEx;e.ta=c;Z(d,e);Z(b.n.hy,new AEw);d=b.n.hy;e=new AEA;e.A2=c;Z(d,e);b=!WC(b.bH)?C(165):C(166);d=new J;L(d);H(H(d,C(167)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ABS=G();
function AXz(a,b){var c,d;c=new Th;H7(c,b);c.vd=Cs(20);c.gH=Ir(0,0,300,300);c.wL=DA(C(14),80.0);b=b.n.bA;d=new SY;d.E0=c;Z(b,d);return c;}
var ABQ=G();
function A5r(a,b){var c;c=new Uc;Pb(c,b);Hz(c.cr,0,0,300,300);Y(c.dz,300,300);return c;}
var ABP=G();
function ASs(a,b){var c;c=new Ub;Pb(c,b);c.gf=new Bh;c.gI=new Bh;Y(c.el,150,140);Y(c.dz,500,100);Y(c.fz,150,200);Y(c.eU,500,250);return c;}
var ABO=G();
function A4o(a,b){var c,d,e;c=new W4;Go(c,b);c.Dt=3;c.xc=DA(C(168),20.0);c.kt=VT();c.qU=1;Z(c.q.di,c);BL(c.c4,Cs(43));d=b.n.bA;e=new P1;e.Aj=c;Z(d,e);b=b.n.cA;d=new P3;d.wF=c;Z(b,d);return c;}
var ABN=G();
function ANh(a,b){return A8F(b);}
var ABM=G();
function A4b(a,b){var c,d,e,f;c=new Q5;Kw(c,b);BL(c.c4,Cs(43));c.my=IT(c.v);d=b.n.bA;e=new GJ;f=new P4;f.Cu=c;G5(e,b,f);Z(d,e);b=b.n.cA;d=new P5;d.Ag=c;Z(b,d);return c;}
var ABX=G();
function A3r(a,b){var c,d;c=new Sx;G8(c,b,1);c.ny=Gu();Z(c.q.di,c);BL(c.c4,Cs(43));b=b.n.cA;d=new YA;d.za=c;Z(b,d);return c;}
var ABW=G();
function AO_(a,b){var c,d,e,f;c=new RT;G8(c,b,1);c.m1=Gu();Z(c.q.di,c);BL(c.c4,Cs(43));d=b.n.bA;e=new GJ;f=new Qz;f.tP=c;G5(e,b,f);Z(d,e);b=b.n.cA;d=new Qy;d.wg=c;Z(b,d);return c;}
var ABV=G();
function A0O(a,b){var c;c=new ZP;Kw(c,b);c.wO=Gu();BL(c.c4,Cs(43));return c;}
var ABU=G();
function ARc(a,b){return A8f(b);}
var AB1=G();
function ARd(a,b){var c,d,e;c=new Qb;Kw(c,b);c.v_=Gu();BL(c.c4,Cs(43));d=b.n.cA;e=new Vt;e.DG=c;Z(d,e);b=b.n.bA;d=new Vs;d.uQ=c;Z(b,d);return c;}
var AB0=G();
function AYg(a,b){var c,d,e;c=new AAz;Kw(c,b);c.pD=Gu();BL(c.c4,Cs(43));d=b.n.cA;e=new Ro;e.Ck=c;Z(d,e);b=b.n.bA;d=new Rn;d.Ef=c;Z(b,d);return c;}
var ABZ=G();
function APo(a,b){var c,d;c=new UJ;Go(c,b);c.hk=Gu();Z(c.q.di,c);BL(c.c4,Cs(43));b=b.n.cA;d=new AB_;d.rp=c;Z(b,d);return c;}
var ABY=G();
function A3p(a,b){var c;c=new Pj;AJl(c,b);AMg(c.d7);return c;}
function AEv(){var a=this;B.call(a);a.vv=null;a.BU=null;a.Bl=null;}
function Iw(){var a=this;B.call(a);a.bJ=0;a.cv=0;a.dl=0;a.iZ=0;}
function A_a(a,b,c,d){var e=new Iw();AC5(e,a,b,c,d);return e;}
function AC5(a,b,c,d,e){a.bJ=d;a.cv=b;a.dl=c;a.iZ=e;}
function QW(){var a=this;Iw.call(a);a.er=null;a.bh=0;a.kc=0;a.AY=0;a.pk=0;}
var AIv=G();
function VY(b,c){return (b+(c/2|0)|0)/c|0;}
function ZL(b,c,d){if(b<(2147483647/c|0))return VY(Bc(b,c),d);return 0.5+c*b/d|0;}
function Iq(b,c){return ((b+c|0)-1|0)/c|0;}
function G1(b){return b+0.5|0;}
function C5(b){return b+0.5|0;}
function Fg(b,c,d){return Bd(b,Be(c,d));}
function Ny(b,c){return AJT(b)/AJT(c);}
function Pd(){var a=this;Iw.call(a);a.j=null;a.Fg=null;}
var Um=G(0);
function P0(){var a=this;B.call(a);a.wM=null;a.wN=null;}
function A1J(a,b){var c,d;c=a.wM;d=a.wN;$rt_globals.console.info("paste plain string "+b);c.g(FT(b));DI(d);}
function ADj(){B.call(this);this.w9=null;}
function AD7(a,b){a.w9.clipboardData.setData("text/plain",$rt_ustr(b));}
function AEC(){var a=this;Nz.call(a);a.El=0;a.xZ=0;}
function CF(){var a=this;B.call(a);a.i=null;a.k=null;a.bX=0.0;}
function AXj(){var a=new CF();Fe(a);return a;}
function Fe(a){a.i=new Bh;a.k=new Bh;}
function AUF(a){}
function A2I(a){return BK(0,0);}
function J9(a,b,c,d){var e;if(!Kg(a.i,b)){a.sb(b);Ct(a.i,b);}if(!Kg(a.k,c)){a.pu(c);Ct(a.k,c);}e=a.bX;if(e!==d){a.bX=d;a.lV(e,d);}}
function DE(a,b){return Cj(b,a.bX);}
function B3(a,b){return GB(b,a.i,a.k);}
function AMQ(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;ARe();Bv(b,d,e,f,A_b);}
function ADG(a,b){var c;c=a.i;Mf(b,c.a,c.b,a.k);}
function AY5(a,b){return 0;}
function ASl(a,b){}
function AWy(a,b){}
function A31(a,b,c){}
function AWF(a){}
function AQ$(a,b,c,d){return 0;}
function AOP(a,b,c){return null;}
function AS6(a,b,c){return 0;}
function AWi(a,b){return 0;}
function A3R(a,b,c,d){return 0;}
function AGG(){var a=this;CF.call(a);a.i0=null;a.lH=null;a.lI=null;a.lF=null;a.lG=null;a.eB=null;a.gP=null;a.gQ=null;a.iE=null;}
function AYZ(a){var b=new AGG();APe(b,a);return b;}
function APe(a,b){Fe(a);a.lH=new Bh;a.lI=new Bh;a.lF=new Bh;a.lG=new Bh;a.i0=b;}
function OH(a,b,c){a.gP=b;a.gQ=c;}
function AH3(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bv(b,c.a,c.b,a.k,a.iE.bv.es);if(a.eB===null)return;d=Cw(a.i0,2.0);e=G7(a.eB,a.gP.lE(),1);f=G7(a.eB,a.gP.kT(),1);g=G7(a.eB,a.gQ.lE(),0);h=G7(a.eB,a.gQ.kT(),0);i=Be(e,g);j=Bd(f,h);g=BP(i,j);if(g<=0)Ca(b,1);k=a.gP.lg();l=a.gP.mh();m=a.gQ.mh();n=a.gQ.lg();o=a.i0.qC;while(i<=j){p=a.eB.iI.data[i];if(p.pt){q=a.gP.hW(p.ip);r=a.gP.hW(p.ip+p.oK|0);s=a.gQ.hW(p.io);t=a.gQ.hW(p.io+p.oJ|0);Y(a.lH,a.i.a,q);Y(a.lF,a.i.a,r);Y(a.lI,a.i.a+a.k.a|0,s);Y(a.lG,
a.i.a+a.k.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.k.b|0);if(v>u){Y(o,a.k.a,v-u|0);c=a.iE;w=Kl(c.eg,c,p.pt);if(q==r)RQ(a,b,q,s,d,k.a,l.a,w,a.lH,a.lF);if(s==t)RQ(a,b,s,q,d,n.a,m.a,w,a.lI,a.lG);AFz(b,a.i.a,u,o,a.lH,a.lI,a.lF,a.lG,w);}}i=i+1|0;}if(g<=0)Ca(b,0);}
function RQ(a,b,c,d,e,f,g,h,i,j){var k;k=a.i0.d_;Y(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bv(b,f,c,k,h);}
function AHe(){var a=this;B.call(a);a.cf=null;a.dG=null;a.iP=null;}
function IT(a){var b=new AHe();AOf(b,a);return b;}
function AOf(a,b){a.cf=b;}
function F5(a,b){var c;a.iP=b;c=a.dG;if(c!==null)Eq(c,b.b$);c=a.cf.ek;if(c!==null)HF(c,b.b$,b.fM);}
function AAu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=ARq();i=c.p;j=0;while(j<i){if(f===null){k=(BI(c,j)).bs;l=AA5(FZ(Cg(g.h,k)));m=ABF(g.fx);}else{n=f.data;k=n[j].p9.nM;l=!BR(g.fx,n[j].mo)?C(21):AA5(FZ(Cg(g.h,k)));m=ABF(n[j].mo);}if(M(l)>153){o=Cy(l,0,150);n=new J;L(n);H(H(n,o),C(169));l=K(n);}if(M(m)>153){n=Cy(m,0,150);o=new J;L(o);H(H(o,n),C(169));m=K(o);}n=Do(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BI(c,j);}if(f!==null){q=new AEM;q.te=d;q.tf=p;}else{q=new AEN;q.CC=d;q.CB
=o;}Xb(h,m,n,l,q);j=j+1|0;}r=AEl(h);if(a.dG!==null)ACg(a);c=a.cf.V;g=new R5;f=new ABA;f.ri=a;f.rj=d;AMK(g,c,f);X9(g,r);d=a.iP;W7(g,d.b$,d.CL);d=AFM(c);a.dG=d;d.qp=d.qp|1;d=G2(g,c);f=a.iP.b$;JB(d,f.nn,f.pl);Ly(a.dG,d);Eq(a.dG,a.iP.b$);d=a.dG;f=new J;L(f);H(H(f,C(170)),e);CX(d,K(f));DV(a.cf,a.dG);d=a.dG;i=(d.R.k.b+Cw(d.bg,2.0)|0)+Cw(c,2.0)|0;s=(g.ef+g.eZ|0)+g.hV|0;t=Cw(g.b1,5.0);e=BK(Fg(t,b.a,g.b1.bT.a-s|0),Fg(i,b.b,g.b1.bT.b-g.cW.b|0));Zr(g);Lj(g);i=Er(g);s=g.cb.data.length;i=Bc(i,s)+Bc(g.d3,s+1|0)|0;Y(g.cW,
g.k.a,i);i=(g.ef+g.eZ|0)+g.hV|0;b=g.b1;s=(b.bT.a-e.a|0)-Cw(b,5.0)|0;b=g.b1;t=(b.bT.b-e.b|0)-Cw(b,5.0)|0;d=BK(Be(i,s),Be(g.cW.b,t));EE(a.dG,e,d);CV(c,g);}
function ACg(a){IJ(a.cf,a.dG);Kh(a.dG);a.dG=null;}
function Sq(a,b,c){var d,e;d=a.cf;e=a.iP;Fu(d,e.b$,e.fM,b,c);}
function I0(a,b,c,d,e,f,g){Sq(a,b,AAW(Jw(a,c,g,d,e,f),b));}
function Jw(a,b,c,d,e,f){var g;g=new TS;g.gJ=a;g.bz=b;g.r0=c;g.jz=e;g.oU=f;g.mL=d;return g;}
function AGo(b){var c;c=new SB;c.A5=b;return c;}
var F$=G(0);
function A2K(a){}
function AQq(a){}
function ANn(a,b,c){return 0;}
function AXf(a){return null;}
var RH=G(0);
var MP=G(0);
function AGM(){var a=this;CF.call(a);a.cd=null;a.bn=null;a.lc=null;a.C8=0;a.oS=null;a.d9=null;a.oc=0;a.hU=0.0;a.mE=null;a.Ek=null;a.gc=null;a.X=0;a.df=0;a.d=null;a.fJ=null;a.ez=null;a.e5=null;a.B7=0;a.AS=0;a.c9=0;a.cp=0;a.cx=0;a.iy=null;a.f9=null;a.fN=null;a.jT=0;a.kx=0;a.GD=0;a.DD=0;a.lo=0;a.mf=0;a.qu=0;a.eq=0;a.dm=null;a.fF=null;a.e9=0;a.b9=0;a.Dq=null;a.kv=null;a.Ad=null;a.vq=null;a.iM=null;a.bB=0;a.c5=null;a.yQ=null;a.tk=0;a.r2=null;a.v0=null;}
function GW(a){var b=new AGM();AUD(b,a);return b;}
function AUD(a,b){var c,d,e;Fe(a);a.C8=0;a.oS=P(T,10);a.d9=A0J();a.hU=16.0;a.mE=C(157);a.d=A8x(P(BC,0),null,null);c=new AE2;c.zt=CS(P(NS,0));c.C5=CS(P(NS,0));c.ra=CS(P(AB4,0));c.wA=CS(P(ZR,0));c.wb=CS(P(Gr,0));c.BX=CS(P(Tk,0));a.fJ=c;a.e5=P(FF,0);a.iy=BK(1,0);a.f9=Jv();a.fN=Jv();a.jT=0;a.kx=1;a.lo=1;a.mf=1;a.qu=1;a.eq=3;a.dm=AI2();a.fF=C(171);a.e9=0;a.b9=0;c=D0();BF(c);d=new Yr;d.EE=c;a.kv=d;a.bB=0;c=new Yq;c.q0=a;a.r2=c;c=new Yp;c.t7=a;a.v0=c;c=b.cf.V;a.cd=c;a.bn=c.bN;a.lc=b;b=AR4(c.cN);a.c5=b;a.gc=b.ho;e=
a.oS.data;b=new Yo;b.B_=a;e[1]=b;b=new Yv;b.yx=a;e[2]=b;b=new Yu;b.u0=a;e[3]=b;b=new Yt;b.xp=a;e[4]=b;b=new Ys;b.rN=a;e[5]=b;b=new Yn;b.Ay=a;e[6]=b;Lq(a.d,a,GY(a));}
function MR(a,b,c,d){J9(a,b,c,d);ABH(a,b,c,d);}
function ATK(a,b,c){Wj(a,a.mE,a.hU);Qt(a.c5,c);}
function A6m(a,b,c){a.Ad=b;a.vq=c;}
function ABH(a,b,c,d){var e;a.c9=Cj(80.0,d);a.cp=Cj(1.0,d);a.cx=Cj(10.0,d);e=!a.b9?b.a:(b.a+c.a|0)-IH(a)|0;Y(a.cd.d_,e,b.b);S6(a.dm,a.cd.d_,Be(IH(a),c.a),c.b,d);b=a.d9;e=Cj(2.0,d);b.e1.u.a=e;}
function A0d(a){a.oc=1;Op(a);}
function AX9(a){a.oc=0;}
function Op(a){ZD(a.d9,Nj(GY(a)));}
function E7(a,b){var c,d;a.ez=b;c=a.d9;d=b.bv.C4;BL(c.e1.bb,d);c=a.f9;d=b.bv;In(c,d.l2,d.l7);c=a.fN;b=b.bv;In(c,b.l2,b.l7);}
function JP(a){O1(a,a.c5.dj.oM,a.hU+1.0);}
function KQ(a){var b;b=a.hU;if(b<=7.0)return;O1(a,a.c5.dj.oM,b-1.0);}
function IQ(a,b){O1(a,b,a.hU);}
function AUs(a,b){KR(a.cd,b);}
function O1(a,b,c){if(a.cd.cm!==0.0){Wj(a,b,c);JQ(GY(a));}a.hU=c;a.mE=b;}
function Mj(a){var b,c,d;b=a.c5;c=a.cd.cN;d=a.bn;b.i$=c;if(b.hX.jG!=c&&b.ej)AFl(b,d);TM(a.e5);IU(a.dm);Ot(a);}
function Wj(a,b,c){var d,e,f,g,h,i,j;d=a.bX;e=c*d;Cj(c,d);f=a.c5.dj;d=f===null?0.0:f.pw;if(!(e===d&&BR(b,a.mE))){IU(a.dm);OV(a.e5);g=a.d.h.E.data;h=g.length;i=0;while(i<h){Fc(g[i]);i=i+1|0;}j=a.c5;f=a.bn;j.dj=AKG(b,e,300,600,j.ho,f);f=a.c5;a.Ek=f.dj;a.X=S$(f,1.25,a.bn);a.df=C5(a.c5.dj.qD);a.d9.e1.u.b=Fh(a.c5.dj);i=a.X;f=new J;L(f);b=H(H(f,C(172)),b);Br(b,32);V(H(Df(b,e),C(173)),i);$rt_globals.console.info($rt_ustr(K(f)));if(A_c){h=NH(a.c5.dj,a.X);b=new J;L(b);V(H(b,C(174)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iJ
=Hf(Ge(a),a.d.B,a.bn.co,a.gc);Ip(a);Ot(a);}}
function AYy(a){OV(a.e5);Zk(a.c5);IU(a.dm);}
function Pc(a){return Bc(CK(a.d.h)+5|0,a.X);}
function Li(a){return Bd(Pc(a)-a.k.b|0,0);}
function ACh(a){return Bd(a.jT-GC(a)|0,0);}
function GC(a){var b;b=!a.b9?0:a.df+a.cx|0;return Bd(1,(a.k.a-a.c9|0)-b|0);}
function IH(a){return a.b9?a.c9:a.c9-a.cx|0;}
function Es(a){return a.k.b;}
function LZ(a,b){var c,d,e;c=a.d.h;if(ACK(c)&&b-c.Bb>0.03125?1:0){d=a.tk;e=a.d.h.cB;if(d!=e){a.tk=e;AAP(a);}}if(a.X)ACb(a);d=ACT((a.bB+a.GD|0)-a.DD|0,Li(a));e=a.bB==d?0:1;if(e)Gg(a,d);return !ACj(a.d9,b)&&!e&&!a.C8?0:1;}
function I3(a,b){var c,d;b=ACT(b,ACh(a));c=a.d;d=b==c.d4?0:1;if(d)c.d4=b;if(d){c=a.Ad;if(c!==null)c.e();}}
function Gg(a,b){var c;if(AKU(a,b)){c=a.vq;if(c!==null)c.e();}}
function AKU(a,b){var c,d;c=ACT(b,Li(a));d=c==a.bB?0:1;if(d){a.bB=c;a.d.m4=c/a.X;}return d;}
function AIE(a){return BK((IH(a)+a.cp|0)+a.cx|0,a.X);}
function AVr(a){return a.X;}
function A2a(a,b){IF(a);}
function IF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=Iq(a.k.b,a.X)+7|0;c=a.e5;if(c.data.length<b)a.e5=AAi(b,c,a.c5,a.B7,a.AS,a.d.h);Ca(a.bn,0);N2(a.bn,a.i,a.k);b=a.X;d=a.d9;e=(b-d.e1.u.b|0)/2|0;b=a.d.iJ-(TO(d)/2|0)|0;d=a.d;f=b-d.d4|0;g=!a.b9?a.c9:(a.cp+a.cx|0)+a.df|0;U8(a.d9,g+f|0,(e+Bc(d.y,a.X)|0)-a.bB|0);h=CK(a.d.h);i=UG(a);j=UF(a);a.B7=i;a.AS=j;k=!a.b9?a.i.a+a.c9|0:((a.i.a+a.cp|0)+a.cx|0)+a.df|0;l=GC(a);m=a.d.lX;n=DE(a,40.0);o=i;while(o<=j&&o<h){p=Cg(a.d.h,o);q=ADI(a,o);YB(q,p,a.bn,a.X,l,
a.d.d4,o,o%a.e5.data.length|0);a.jT=Bd(a.jT,FS(p)+n|0);g=a.X;r=Bc(g,o)-a.bB|0;s=m===null?null:m.data[o];r=a.i.b+r|0;t=a.bn;u=a.d.d4;v=a.ez;d=ALT(Bl(a),o);if(d!==null){if(d.b==(-1))d.b=p.T;d.a=Hf(p,d.a,a.bn.co,a.gc);d.b=Hf(p,d.b,a.bn.co,a.gc);}w=a.d;QP(q,r,k,t,l,g,u,v,d,w.je,w.iY,w.y!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.cd.d_;o=i;while(o<=j&&o<h&&a.lo){q=ADI(a,o);r=Bc(a.X,o)-a.bB|0;w=Bl(a);if(!DC(w))u=0;else{d=Ez(w);w=Gk(w);u=d.N<=o&&o<w.N?1:0;}d=a.ez;w=d.bv;t=w.ty;x=a.d.y==o&&m===null?1:0;a:{if(u)t=w.lm;else
{if(m!==null){c=m.data;if(o<c.length&&c[o]!==null){t=Kl(d.eg,d,c[o].hr);break a;}}if(x)t=w.gL;}}AKk(q,a.bn,k,a.i.b+r|0,a.X,v,a.d.d4,l,t);o=o+1|0;}if(a.kx){y=Be(j+1|0,h);AL$(a,Bc(a.X,y)-a.bB|0,l);}AHZ(a);if(a.mf)AJh(a,i,j,h);if(a.oc&&f>=(( -TO(a.d9)|0)/2|0)&&ALN(a.d9,a.k))ADl(a.d9,a.bn,a.i);AHL(a);AHh(a);Gq(a.bn);AHu(a,i,j);}
function AJh(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lX;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.ez;h=Kl(h.eg,h,g.hr);}else h=e!==null?a.ez.bv.es:a.ez.bv.gL;if(!(a.d.y!=b&&g===null)){g=a.iy;i=a.b9;g.a=!i?(a.cx-a.cp|0)-a.eq|0:((a.cx+a.df|0)+a.cp|0)-a.eq|0;j=a.X;g.b=j;i=i?0:(a.c9-a.cx|0)+a.cp|0;j=Bc(j,b)-a.bB|0;k=a.bn;l=a.i;Bv(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AHu(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CK(a.d.h),a.X)-a.bB|0);f=a.dm;g=a.bB;h=a.d;i=h.lX===null?h.y:(-1);j=a.bn;k=a.ez;N2(j,f.gU,f.fE);TK(f,j,b,d);ACV(f,b,j);ACa(f,g,e,k,j);l=k.lA;if(e<d){h=f.gU;Bv(j,h.a,h.b+e|0,BK(f.fE.a,d-e|0),l.lu);}if(b<=i&&i<=c){k=k.lA;c=i/20|0;h=f.c_;l=BI(h,c%h.p|0);h=f.gU;d=Bc(f.c_.p,f.hC);c=l.fC.b;b=((l.qP.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CT(l.c0)|0)|0;c=i%l.eo|0;e=l.cG;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;Y(l.jC,l.fC.a,e);f=l.kk;c=i%l.eo|0;d=l.cG;Cv(f,0.0,
Bc(c,d),l.fC.a,d);NM(l,j,b,h,k.yF,k.q3);}Gq(j);}
function UG(a){return Be(a.bB/a.X|0,CK(a.d.h)-1|0);}
function UF(a){return Be(((a.bB+Es(a)|0)-1|0)/a.X|0,CK(a.d.h)-1|0);}
function AT9(a,b){return (Bc(a.X,b)-a.bB|0)+a.i.b|0;}
function ATX(a){return a.i;}
function AXc(a){return a.k;}
function Ot(a){ZI(a.dm,a.c5.dj,a.X,a.cd.cN);}
function ADI(a,b){var c;c=a.e5.data;return c[b%c.length|0];}
function AJa(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!DC(Bl(a)))DO(a,a.fF);else{b=Ez(Bl(a));c=Gk(Bl(a));d=c.N;e=b.N;f=(d-e|0)+1|0;g=BQ(f);h=g.data;i=P(BC,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.fF;e=e+1|0;k=f;}l=new AD0;m=a.d;ALq(l,m.y,m.B);m=new T7;m.vX=a;QA(a,g,0,0,i,l,m);b.be=b.be+M(a.fF)|0;c.be=c.be+M(a.fF)|0;MX(a,a.d.B+M(a.fF)|0);EJ(a);}return 1;}
function AFA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(!DC(Bl(a))){b=a.d;c=Cg(b.h,b.y);if(c.s.data.length>0){d=V7(a,c);if(d===null)return 1;e=a.d;f=e.h;g=e.y;b=DY(g,e.B);f.cB=f.cB+1|0;h=f.i6;i=P(Hs,1);i.data[0]=AVA(g,0,1,d,b.bs,b.bw);BA(h,i);NL(f,g,0,1,d);H4(c,0,M(d));MX(a,a.d.B-M(d)|0);}}else{b=Ez(Bl(a));d=Gk(Bl(a));j=d.N;k=b.N;j=(j-k|0)+1|0;l=BQ(j);m=l.data;n=P(BC,j);o=n.data;c=a.d;g=c.B;p=c.y;q=0;while(k<=d.N){c=Cg(a.d.h,k);if(c.s.data.length>0){c=V7(a,c);if(c!==null){m[q]=k;j=q+1|0;o[q]=c;q=j;}}k=k+1|0;}i
=JD(l,q);m=C2(n,q);j=0;while(j<q){l=i.data;c=m.data[j];k=l[j];if(k==b.N)b.be=Bd(0,b.be-M(c)|0);if(k==d.N){d.be=Bd(0,d.be-M(c)|0);MX(a,a.d.B-M(c)|0);}j=j+1|0;}b=DY(p,g);c=new U3;c.ue=a;QA(a,i,0,1,m,b,c);}EJ(a);return 1;}
function V7(a,b){var c,d,e,f;c=Fg(0,M(a.fF),PT(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BX;X(b);N(b);}if(c!=1){d=b.cj.data.length;if(d&&c){e=B6(Bc(d,c));d=0;f=0;while(f<c){Ry(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=MV(e);}else b=A99;}}return b;}
function QA(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BQ(i);k=A9C(i).data;JS(j,c);c=0;l=k.length;if(c>l){f=new BX;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cB=o.cB+1|0;p=P(Hs,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AVA(h[m],n[m],k[m],b[m],f.bs,f.bw);m=m+1|0;}BA(o.i6,p);c=0;while(c<i){b=e.data;NL(o,h[c],n[c],k[c],b[c]);g.qS(C4(h[c]),b[c]);c=c+1|0;}}
function AIF(a){var b,c,d,e,f,g,h,i,j;if(DC(Bl(a)))Hc(a);b=a.d;Fc(Cg(b.h,b.y));b=a.d;c=b.h;d=b.y;e=b.B;f=c.E;g=f.data;h=g[d];f=C2(f,g.length+1|0);g=f.data;c.E=f;i=g.length-1|0;while(true){j=i-1|0;if(j<=d)break;g[i]=g[j];i=i+(-1)|0;}if(!e){g[d]=Ee(P(CA,0));c.E.data[d+1|0]=h;}else if(e==h.T){g[d]=h;g[d+1|0]=Ee(P(CA,0));}else{f=(I_(h,e)).data;g=c.E.data;g[d]=f[0];g[d+1|0]=f[1];}Gj(c,d,e,0,C(175));EJ(a);return CU(a,a.d.y+1|0,0,0);}
function AM4(a){var b;if(DC(Bl(a)))Hc(a);else{b=a.d;Pv(b.h,b.y,b.B);}Ip(a);EJ(a);return 1;}
function AHb(a){var b,c,d;if(DC(Bl(a))){Hc(a);return 1;}b=a.d;c=b.B;if(!c&&!b.y)return 1;if(c){d=b.y;c=c-1|0;Pv(b.h,d,c);}else{d=b.y-1|0;c=GV(b.h,d);b=a.d.h;L1(b,d);Gj(b,d,GV(b,d),1,C(175));}EJ(a);return CU(a,d,c,0);}
function DO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e9)return 0;if(DC(Bl(a)))Hc(a);c=MF(ADt(b,C(176),C(21)),C(175),(-1));d=c.data;b=a.d;e=b.h;f=b.y;g=b.B;AFr(e,f,g,c);h=d.length;if(!h)b=A99;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B6(i+Bc(h-1|0,M(C(175)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(175))){m=l+1|0;c[l]=Q(C(175),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=MV(k);}Gj(e,f,g,0,b);b=a.d;f=b.y;m
=(f+h|0)-1|0;CU(a,m,m!=f?M(d[h-1|0]):b.B+M(d[0])|0,0);Gn(a);EJ(a);return 1;}
function Hc(a){var b,c,d;b=Ez(Bl(a));c=a.d.h;d=Bl(a);PD(c,d,VR(c,d));CU(a,b.N,b.be,0);Gn(a);EJ(a);}
function Gn(a){var b,c;(Bl(a)).dF=0;b=(Bl(a)).bS;c=a.d;Ci(b,c.y,c.B);b=(Bl(a)).bI;c=a.d;Ci(b,c.y,c.B);}
function AL$(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cd.d_;e.b=d-b|0;d=a.b9;e.a=!d?c+a.eq|0:c+a.cp|0;d=!d?(a.i.a+a.c9|0)-a.eq|0:(((a.i.a+a.cx|0)+a.df|0)+a.cp|0)-a.eq|0;Bv(a.bn,d,a.i.b+b|0,e,a.ez.bv.es);}}
function AHL(a){var b;b=a.b9?a.i.a+a.df|0:a.i.a+a.k.a|0;KJ(a.f9,a.bB,a.i.b,Es(a),Pc(a),b,a.df);b=!a.b9?a.i.a+a.c9|0:((a.i.a+a.cp|0)+a.cx|0)+a.df|0;Sb(a.fN,a.d.d4,b,GC(a),a.jT,a.i.b+Es(a)|0,a.df);}
function AHh(a){var b,c;b=AAy(a.f9);c=AAy(a.fN);if(!(!b&&!c)){Ca(a.bn,1);if(b)He(a.f9,a.bn);if(c)He(a.fN,a.bn);if(b)Hj(a.f9,a.bn);if(c)Hj(a.fN,a.bn);}}
function AHZ(a){var b,c,d,e,f;b=a.iy;c=a.k;b.b=c.b;b.a=a.cp;d=!a.b9?a.c9-a.cx|0:(c.a-IH(a)|0)-a.cp|0;b=a.bn;c=a.i;Bv(b,c.a+d|0,c.b,a.iy,a.ez.bv.vC);b=a.iy;d=a.b9;b.a=!d?(a.cx-a.cp|0)-a.eq|0:((a.cx+a.df|0)+a.cp|0)-a.eq|0;e=d?0:(a.c9-a.cx|0)+a.cp|0;c=a.bn;f=a.i;Bv(c,f.a+e|0,f.b,b,a.ez.bv.es);}
function ACT(b,c){return Be(Bd(0,b),c);}
function GY(a){return a.cd.cu;}
function F4(a,b,c){var d,e,f;d=E5(b);e=new J;L(e);H(H(e,C(177)),d);$rt_globals.console.info($rt_ustr(K(e)));CU(a,0,0,0);f=new AD6;f.z0=a;f.z1=b;f.zZ=c;c=D0();BF(c);d=new AD5;d.yw=c;V4(b,f,d);}
function JX(a,b,c,d,e){if(I$(a,e))return 1;if(c&&d)return 1;if(c)Gg(a,a.bB+((Bc(b,a.X)*12|0)/10|0)|0);else if(!d){IG(a,a.d.y+b|0,e);ACX(a);}return 1;}
function SV(a,b,c,d){var e,f,g;if(I$(a,d))return 1;e=Ge(a);if(!c)f=a.d.B+b|0;else if(b>=0)f=Hp(e,a.d.B);else{b=a.d.B;if(!b)f=(-1);else{c=KE(e,b);if(c>0&&e.eD.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eD.data[c-1|0];}}if(f>e.T){e=a.d;if((e.y+1|0)<CK(e.h))CU(a,a.d.y+1|0,0,d);}else if(f>=0)DF(a,f,d);else{e=a.d;b=e.y;if(b>0){g=(Cg(e.h,b-1|0)).T;CU(a,a.d.y-1|0,g,d);}}ADT(a);return 1;}
function I$(a,b){if(DC(Bl(a))&&!b){Gn(a);Ip(a);return 1;}if(!(b&&DC(Bl(a))))Gn(a);return 0;}
function CU(a,b,c,d){a.d.B=c;return IG(a,b,d);}
function IG(a,b,c){var d;d=a.d;d.y=Fg(0,b,CK(d.h)-1|0);return DF(a,a.d.B,c);}
function DF(a,b,c){var d,e;a.d.B=Fg(0,b,(Ge(a)).T);a.d.iJ=a.bX===0.0?0:Hf(Ge(a),a.d.B,a.bn.co,a.gc);Op(a);Ip(a);if(c)(Bl(a)).dF=1;d=Bl(a);e=a.d;Oq(d,e.y,e.B);(Bl(a)).dF=0;return 1;}
function MX(a,b){var c;c=AZp(Bl(a));DF(a,b,0);J6(Bl(a),c);}
function Ip(a){ACX(a);ADT(a);}
function ACX(a){var b,c,d,e,f;b=a.bB;c=b+Es(a)|0;d=a.d.y;e=a.X;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))Gg(a,d-e|0);else if(f>(c-e|0))Gg(a,(f-Es(a)|0)+a.X|0);}
function ADT(a){var b,c,d,e,f;b=C5(a.cd.cm*30.0);c=a.d.d4;d=c+GC(a)|0;e=a.d.iJ;f=e+b|0;if(e<(c+b|0))I3(a,e-b|0);else if(f>(d-b|0))I3(a,(f-GC(a)|0)+b|0);}
function Jd(a,b){var c,d;CU(a,b.bs,b.bw,0);c=Hp(Ge(a),a.d.B);Ci((Bl(a)).bI,a.d.y,c);b=(Bl(a)).bS;d=a.d;Ci(b,d.y,d.B);Ji(a.d);}
function FJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=Fg(0,((b.b-d.b|0)+a.bB|0)/a.X|0,CK(a.d.h)-1|0);g=!a.b9?a.c9:(a.cp+a.cx|0)+a.df|0;h=Bd(0,(e-g|0)+a.d.d4|0);b=Cg(a.d.h,f);d=a.bn.co;i=a.gc;if(!(b.e6!==null&&!b.hn))NX(b,d,i);j=b.e6;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.T;else{c=ACI(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.T;else{j=ABa(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.s.data[e].x)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A_d){b=new J;L(b);V(H(V(H(V(H(b,C(178)),e),C(179)),h),C(180)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DY(f,k);}
function WG(a,b){var c,d;c=a.d;d=b.bs;c.y=d;c.B=b.bw;c.iJ=Hf(Cg(c.h,d),a.d.B,a.bn.co,a.gc);Op(a);}
function Ge(a){var b;b=a.d;return Cg(b.h,b.y);}
function Md(a,b,c,d){var e,f;e=C5((a.X*4|0)*d/150.0);f=C5(c);if(e)Gg(a,a.bB+e|0);if(f)I3(a,a.d.d4+f|0);return 1;}
function TT(a,b,c){(Bl(a)).dF=0;return 1;}
function Xo(a,b,c){var d;if(!Dz(a.cd,a))CV(a.cd,a);if(c)return null;d=Gi(a.f9,b.j,a.r2,1);if(d!==null)return d;d=Gi(a.fN,b.j,a.v0,0);if(d!==null)return d;JA(a);WG(a,FJ(a,b.j));Ji(a.d);if(!b.bJ&&!(Bl(a)).dF){b=(Bl(a)).bS;d=a.d;Ci(b,d.y,d.B);}(Bl(a)).dF=1;b=Bl(a);d=a.d;Oq(b,d.y,d.B);b=new AEO;b.v$=a;return b;}
function Py(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cv){b=b.j;e=FJ(a,b);f=Ju(a.d.h,e.bs,e.bw);g=TC(a,f);h=OW(a.fJ,Ej(a.d),HU(a.d));if(h!==null){i=a.d;c=e.bs;d=e.bw;e=new AEr;e.D8=a;e.D9=b;e.D7=g;h.uF(i,c,d,e,a.kv);}else{e=CB(a.d.h.d0,f);if(e!==null){Jd(a,e);c=1;}else{e=CB(a.d.h.dR,f);if(e!==null&&!EP(e)){if(e.p!=1){AAu(a.lc,b,e,a,g);c=1;}else{Jd(a,BI(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FJ(a,b.j)).bs;g=Cg(a.d.h,c);c=G6(g,a.d.B);d=Hp(g,a.d.B);b=OM(g,c);if((d-1|0)==g.T){Ci((Bl(a)).bS,
a.d.y,PT(g));Ci((Bl(a)).bI,a.d.y,g.T);}else{if(b!==null){b=b.x;j=0;c:{while(true){k=b.cj.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.B;if(c==j){c=G6(g,c-1|0);d=Hp(g,c);}else{if(d!=j){Rl(Bl(a),a.d.y);break b;}c=G6(g,d+1|0);d=Hp(g,c);}}}Ci((Bl(a)).bS,a.d.y,c);(Bl(a)).dF=1;CU(a,a.d.y,d,0);(Bl(a)).dF=0;JA(a);}}break a;case 3:break;default:break a;}Rl(Bl(a),a.d.y);AAX(a.d.ih);JA(a);}}return 1;}
function Yw(a,b){var c,d,e,f,g,h,i,j;c=a.cd.c3;if(Gp(a.f9,b.j,c))return 1;if(Gp(a.fN,b.j,c))return 1;d=a.dm;if(GB(b.j,d.gU,d.fE)&&G3(c)?1:0)return 1;e=b.j;f=!a.b9?a.c9:(a.cx+a.cp|0)+a.df|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=GC(a);i=Es(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return G3(c);if(b.cv){e=FJ(a,b.j);e.bw=G6(Cg(a.d.h,e.bs),e.bw);b=a.d.h;if(!HL(b.d0,e)&&!HL(b.dR,e)?0:1)return D7(c,C(181));}return D7(c,C(182));}
function A5Y(a,b){var c,d,e;c=a.yQ;if(c!==null){if(AMo(b)){ABq(c);d=1;}else if(b.bh!=27)d=0;else{if(!b.cv&&!b.bJ&&!b.dl&&!b.iZ?1:0)Ym(c.h$);else{c=c.bf;e=c.bx.cL;if(e>1)UT(c,e-1|0);}d=1;}if(d)return 1;}d=b.cv;if(d&&b.bh==65){d=CK(a.d.h)-1|0;e=GV(a.d.h,d);Ci((Bl(a)).bS,0,0);Ci((Bl(a)).bI,CK(a.d.h)-1|0,e);return 1;}if(d&&b.bh==80){MM(a.d);return 1;}if(!a.e9&&d&&b.bh==90){if(DC(Bl(a)))Gn(a);b=AMi(a.d.h);if(b!==null){CU(a,b.a,b.b,0);EJ(a);}return 1;}if(!d&&!b.dl){if(Bk(b.er,C(183))){DO(a,C(184));DF(a,a.d.B-1|0,
0);d=1;}else if(Bk(b.er,C(185))){DO(a,C(186));DF(a,a.d.B-1|0,0);d=1;}else if(Bk(b.er,C(36))){DO(a,C(22));DF(a,a.d.B-1|0,0);d=1;}else if(Bk(b.er,C(187))){DO(a,C(188));DF(a,a.d.B-1|0,0);d=1;}else if(Bk(b.er,C(189))){DO(a,C(190));DF(a,a.d.B-1|0,0);d=1;}else if(!Bk(b.er,C(191)))d=0;else{DO(a,C(192));DF(a,a.d.B-1|0,0);d=1;}}else d=0;if(d)return 1;if(AIM(a,b))return 1;a:{switch(b.bh){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:d=0;break a;}d=1;}if(d)return 1;if(AK6(a,b))return 1;if
(a.e9)d=0;else b:{switch(b.bh){case 8:break;case 9:d=!b.bJ?AJa(a):AFA(a);break b;case 13:d=AIF(a);break b;case 46:d=AM4(a);break b;default:d=0;break b;}d=AHb(a);}if(d)return 1;if(b.cv&&b.bh==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AQ3(b.bh)&&b.bh!=27){if(!b.cv&&!b.dl&&!b.iZ)return M(b.er)>0&&DO(a,b.er)?1:0;return 0;}return 0;}
function ACb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=UG(a);d=UF(a);if(b.fm!=3&&b.gX==3){e=Mh(b.pX);f=new XL;f.zM=c;f.zL=d;g=new R7;g.s8=f;while(!g.nd&&Ou(e,g)){}if(!g.nd&&Bk(C(193),Ej(b))){c=Bd(0,c-100|0);d=Be(CK(b.h)-1|0,d+100|0);BA(b.pX,BK(c,d));h=BQ(3);i=h.data;i[0]=FR(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.E.data.length);k=0;while(k<d){j=j+GV(e,k)|0;if(k!=(e.E.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.BB=EI();e=b.fk;l=new ADU;l.sV=b;i=P(B,3);m=i.data;m[0]=Fm(b.h);m[1]=h;b=b.h.dq;g=BO();ACr(b,b.dn,
g);h=BQ(3*g.p|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BI(g,o);d=k+1|0;n[k]=b.b5;q=d+1|0;n[d]=b.b3;k=q+1|0;n[q]=b.f4;o=o+1|0;}m[2]=h;CO(e,l,C(194),i);}}}
function WE(a){MM(a.d);}
function AAP(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.f3){c=Fd(b);d=new J;L(d);H(H(d,c),C(195));$rt_globals.console.info($rt_ustr(K(d)));}c=Ej(b);if(c!==null&&!Bk(C(182),c)){d=b.h.dq;e=Rg(d,d.dn);if(e===null){OO(b);K4(b.h);}else{f=D6([Dq(e),Dh(e),e.b2.f4]);g=Fm(b.h);h=BQ(1);h.data[0]=AJG(c);d=b.h.fc;if(d.fO===null){i=BQ(0);j=B6(0);}else{c=AWX(AZi(e.ct,d.fl),e);X5(c);i=c.pf;j=c.ng;}k=b.h.cB;c=b.fk;d=new Pk;d.BF=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BQ(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CO(c,d,C(196),l);}}
else K4(b.h);}
function Jt(a,b,c){var d,e,f,g,h,i;if(c&&a.e9)return 0;d=Ez(Bl(a));e=d.N;if(DC(Bl(a))){f=a.d.h;g=Bl(a);h=VR(f,g);if(c)PD(f,g,h);if(c){CU(a,d.N,d.be,0);Gn(a);EJ(a);}}else{h=FH(FZ(a.d.h.E.data[e]),C(175));i=Be(CK(a.d.h)-1|0,e);Ci((Bl(a)).bI,i,0);if(e>=(CK(a.d.h)-1|0))Ci((Bl(a)).bI,i,GV(a.d.h,i));else Ci((Bl(a)).bS,i+1|0,0);if(c)Hc(a);else CU(a,e,0,0);}b.g(h);return 1;}
function AWn(a){var b;b=new U6;b.AZ=a;return b;}
function AK6(a,b){var c,d,e,f;a:{switch(b.bh){case 33:c=b.cv?IG(a,Iq(a.bB,a.X),b.bJ):JX(a,2-VY(Es(a),a.X)|0,0,b.dl,b.bJ);break a;case 34:c=!b.cv?JX(a,VY(Es(a),a.X)-2|0,0,b.dl,b.bJ):IG(a,((a.bB+Es(a)|0)/a.X|0)-1|0,b.bJ);break a;case 35:if(!I$(a,b.bJ)&&!DF(a,(Ge(a)).T,b.bJ)){c=0;break a;}c=1;break a;case 36:if(!I$(a,b.bJ)&&!DF(a,0,b.bJ)){c=0;break a;}c=1;break a;case 37:c=b.cv;if(c&&b.dl){JA(a);d=a.d.ih;e=d.dV;if(e<=0)d=null;else{f=d.fA.data;c=e-1|0;d.dV=c;d=f[c];}if(d===null)c=1;else{CU(a,Mt(d),Ld(d),0);J6(Bl(a),
d.pb);c=1;}break a;}c=SV(a,(-1),c,b.bJ);break a;case 38:c=JX(a,(-1),b.cv,b.dl,b.bJ);break a;case 39:c=b.cv;if(c&&b.dl){d=a.d.ih;e=d.dV;if(e==(d.fw-1|0))d=null;else{f=d.fA.data;c=e+1|0;d.dV=c;d=f[c];}if(d===null)c=1;else{CU(a,Mt(d),Ld(d),0);J6(Bl(a),d.pb);c=1;}break a;}c=SV(a,1,c,b.bJ);break a;case 40:c=JX(a,1,b.cv,b.dl,b.bJ);break a;default:}c=0;}if(c&&b.bJ){b=(Bl(a)).bI;d=a.d;Ci(b,d.y,d.B);}if(c)Ji(a.d);return c;}
function JA(a){var b,c,d,e,f,g,h;b=a.d;c=b.ih;d=c.dV;c=d<0?null:c.fA.data[d];if(c!==null&&b.y==Mt(c)&&a.d.B==Ld(c))return;c=a.d;e=c.ih;b=new Oe;d=c.y;f=c.B;c=Bl(a);b.p7=DY(d,f);g=AZp(c);b.pb=g;g.dF=0;f=e.dV;h=e.fw;if(f==(h-1|0))ADJ(e,b);else{d=f+1|0;while(d<h){AAX(e);d=d+1|0;}ADJ(e,b);}e.dV=e.dV+1|0;}
function AIM(a,b){var c,d,e;if(!(!b.dl&&!b.cv)){c=b.bh;if(c>=48&&c<=57){d=c-48|0;e=a.oS.data[d];if(e!==null)e.e();return 1;}}return 0;}
function EJ(a){a.d.h.Bb=Nj(GY(a));}
function Ig(a,b){var c,d,e,f;a.Dq=null;L$(a.dm,null);c=a.d;a.d=b;Lq(c,null,null);Lq(b,a,GY(a));d=(B5(a.fJ.wb)).data;e=d.length;f=0;while(f<e){d[f].qS(c,b);f=f+1|0;}a.bB=G1(b.m4*a.X);}
function TC(a,b){var c;c=Mo(a.d.h,b);if(c===null)return C(21);return c.x;}
function HR(a,b){var c,d,e,f,g;a.d.lX=b;if(b===null){Bf(Bj(),C(197));L$(a.dm,null);}else{b=b.data;c=DS(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.hr<<24>>24;e=e+1|0;}L$(a.dm,c);}}
function Jg(a,b){a.d.q2=b;}
function Bl(a){return a.d.r7;}
function Mm(a){var b;b=a.iM;if(b!==null)b.g(a);}
function AZH(a){var b,c,d;b=a.d.fx;c=AGd(a);if(b!==null){b=b.f8;d=new J;L(d);H(H(H(d,c),C(198)),b);c=K(d);}return c;}
function AJH(){var a=this;B.call(a);a.l3=null;a.oz=null;a.he=null;}
function AIT(a,b){var c=new AJH();AZy(c,a,b);return c;}
function AZy(a,b,c){var d,e;a.l3=b;a.oz=c;d=null;e=new VM;e.s$=a;b.pZ(d,e);b=null;d=new VN;d.sa=a;c.pZ(b,d);}
function ZE(a,b,c){var d,e,f,g,h,i,j;d=a.he;if(d!==null&&d.iI!==null){e=b!==a.l3?0:1;f=b.lE();g=(b.kT()+f|0)/2|0;h=g-f|0;d=a.he;d=d.iI.data[G7(d,g,e)];i=g-(!e?d.io:d.ip)|0;j= -(b.hW(f)-(b.lg()).b|0)|0;c.qN(Bc(((!e?d.ip:d.io)+i|0)-h|0,c.p6())+j|0);return;}}
function UP(){B.call(this);this.Cv=null;}
function AOa(a,b){W9(a.Cv,b);}
function UQ(){B.call(this);this.z4=null;}
function A4W(a,b){W9(a.z4,b);}
function UR(){B.call(this);this.x4=null;}
function ANf(a,b){return AIL(a.x4,b);}
function GJ(){var a=this;B.call(a);a.pg=null;a.tc=null;a.sw=null;}
function A_e(a,b){var c=new GJ();G5(c,a,b);return c;}
function G5(a,b,c){var d;d=null;a.pg=b.bH;a.tc=d;a.sw=c;}
function AQw(a,b){var c;if(!AMo(b))return 0;c=a.tc;if(c!==null&&b.bJ)Gs(a.pg,c);else FY(a.pg,a.sw);return 1;}
function AMo(b){return b.cv&&b.bh==79?1:0;}
function UN(){B.call(this);this.vY=null;}
function AST(a,b){var c,d,e;c=a.vY;d=Dz(c.q,c.G)?c.G:!Dz(c.q,c.K)?null:c.K;if(d!==null){e=new Sn;e.y6=c;e.y4=d;e.y5=b;F4(d,b,e);c.lv=null;c.mV.he=null;c.fV.eB=null;}}
function UO(){B.call(this);this.tB=null;}
function A5s(a,b){return AK7(a.tB,b);}
var CM=G(0);
function AEQ(){var a=this;B.call(a);a.V=null;a.bx=null;a.ek=null;}
function Fu(a,b,c,d,e){var f,g;f=Z8(a.V);HF(f,b,c);b=a.V;c=b.cU;g=new AD_;g.xW=b;g.xV=c;f.ko=g;SZ(f,d,e);HV(a,f);}
function HV(a,b){var c;c=a.ek;if(c!==b)a.ek=BY(c,b);}
function DR(a,b){var c;c=new ADW;c.rx=a;c.rz=b;return c;}
function ND(a,b){var c;c=new AE4;c.zi=a;c.zj=b;return c;}
function DZ(a){var b;b=a.ek;if(b!==null){MN(b);HV(a,null);}}
function DV(a,b){var c,d,e,f;c=a.bx;if(c.cL>0)Ll(FB(c,0));c=a.bx;d=c.cL;e=c.da;if(d==e.data.length)c.da=C2(e,d+4|0);d=c.cL;f=d;while(0<f){e=c.da.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.da.data[0]=b;c.cL=d+1|0;c.gr=null;K2(b);return b;}
function IJ(a,b){if(OY(a)!==b?0:1)Ll(b);S0(a.bx,b);b=a.bx;if(b.cL>0)K2(FB(b,0));}
function J$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B5(a.bx)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.V.bN;d.Y.dJ(e);f=d.R;g=d.gt.jB;if(!Sz(f)){if(!OG(f)&&!(!f.eS&&f.d$!==null)){f.eS=0;ADA(f);h=f.eH;i=(h.ey+h.eR+5.0)/10.0;j=Cw(f.gp,f.k$);h=e.co;k=f.eH;l=f.j6;m=i*2.0;Cr(h,k);n=j+LN(h,l,m)|0;f.iD=n;n=Fg(0,n,f.k.a);if(n){h=Eb(e,n,f.k.b,f.gp.cN);Cr(h,f.eH);k=f.j6;m=j;i=m+i;l=f.eH;o=l.ey;B1(h,k,i,m+o-(o+l.eR)/16.0);k=f.d$;if(k===null){k=C3(e);f.d$=k;}CR(k,h);EK(h);Cv(f.m6,0.0,0.0,BU(f.d$),CT(f.d$));}}h=g.mq;k
=f.d$;if(k===null)Rh(f,e,0,f.k.a,h);else{j=BU(k);g=g.oF;k=f.i;n=k.a;p=k.b;k=f.d$;DP(e,n,p,k.e2,f.m6,k,g,h,f.gp.cN);n=f.k.a;if(j<n)Rh(f,e,j,n-j|0,h);}}l=d.dr;if(l!==null){q=d.bg;h=d.R;k=d.gt.jB;if(l.ju!==null){if(l.dp===null)AHR(l,q);n=Cw(q,2.0);j=Bd(0,((h.k.b-CT(l.dp)|0)/2|0)-n|0);l.gu.a=(((h.i.a+h.k.a|0)-j|0)-BU(l.dp)|0)-n|0;f=l.gu;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.k3;j=BU(l.dp);r=n*2|0;Y(f,j+r|0,CT(l.dp)+r|0);f=q.bN;g=l.gu;Bv(f,g.a,g.b,l.k3,!l.ma?k.mq:k.j4);Cv(q.mP,0.0,0.0,BU(l.dp),CT(l.dp));f=q.bN;g=l.gu;n
=g.a+n|0;p=g.b+p|0;g=l.dp;DP(f,n,p,g.e2,q.mP,g,k.oF,!l.ma?k.mq:k.j4,0);}}Ca(e,1);j=Cw(d.bg,2.0);n=Sz(d.R);f=d.bg;g=f.d_;f=f.qC;p=n?0:d.R.k.b;h=d.Y.k;Y(f,h.a,h.b+p|0);AKx(e,f,!n?d.R.i:d.Y.i,d.gt.jB.j4, -j|0,g);f=d.Y;ALS(e,f.k,f.i,j,p,Zi(d.gt.lU,d.bg.cm),d.gt.lU.ou,g);c=c+(-1)|0;}f=a.ek;if(f!==null)AFN(f);}
function GT(a,b){var c,d,e,f;c=a.V;if(c.cN==b)d=0;else{c.cN=b;JQ(c.cu);d=1;}if(d){c=a.ek;if(c!==null){c=B9(c.cn);while(Cb(c)){OB(Cc(c));}}e=(B5(a.bx)).data;b=e.length;f=0;while(f<b){c=e[f];c.R.eS=1;c.Y.kB();f=f+1|0;}}return d;}
function AXL(a,b){var c,d,e,f,g,h,i,j,k;c=a.ek;if(c!==null){d=0;e=c.cn.p-1|0;a:{while(e>=0){d=Og(BI(c.cn,e),b.j,c.cZ.c3);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B5(a.bx)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(B3(h.R,c)){i=h.dr;if(i!==null)i.ma=T8(i,c);e=D7(h.bg.c3,null);}else{i=h.dr;if(i!==null)i.ma=0;e=Cw(h.bg,7.0);j=Cw(h.bg,25.0);if(Ns(h,c.a,e)){k=Yl(h,c.a,j);if(NC(h,c.b,e)){e=D7(h.bg.c3,Mu(k,C(199)));break b;}if(K8(h,c.b,e)){e=D7(h.bg.c3,Mu( -k|0,C(199)));break b;}}if(OJ(h,c.b,e)){j=AEG(h,
c.b,j);if(O6(h,c.a,e)){e=D7(h.bg.c3,Mu(j,C(200)));break b;}if(M9(h,c.a,e)){e=D7(h.bg.c3,Mu( -j|0,C(200)));break b;}}e=0;}}c:{d:{if(!e){if(!B3(h.Y,b.j))break d;if(!h.Y.bZ(b)&&!D7(h.bg.c3,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AOX(a,b,c,d){var e,f,g,h,i,j;e=a.ek;if(e!==null){f=0;g=e.cn.p-1|0;a:{while(g>=0){f=OE(BI(e.cn,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B5(a.bx)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B3(i.R,b.j)&&!Qi(i,b.j)){if(!MD(i,b))break c;if(!i.Y.cM(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AQ_(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.ek;if(d!==null){e=null;f=d.cn.p-1|0;a:{while(f>=0){e=BI(d.cn,f);g=b.j;h=Fo(e.cz,g);if(!h&&!Lz(e.cz)){e=e.lf;if(e!==null)e.e();}e=!h?null:A_f;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B5(a.bx);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.j;if(!c){c:{k=Cw(d.bg,7.0);l=Cw(d.bg,25.0);if(Ns(d,e.a,k)){m=Yl(d,e.a,l);if(NC(d,e.b,k)){g=Kp(d,e,m,(-1));break c;}if(K8(d,e.b,k)){g=Kp(d,e,m,1);break c;}}if(OJ(d,e.b,k)){f=AEG(d,e.b,l);if(O6(d,
e.a,k)){g=Kp(d,e,(-1),f);break c;}if(M9(d,e.a,k)){g=Kp(d,e,1,f);break c;}}g=null;}if(g!==null)break b;if(B3(d.R,e)){g=d.dr;if(g!==null&&T8(g,e)){d.dr.ju.e();g=A_f;break b;}g=d.Y.i;f=g.a;l=e.a;f=f-l|0;k=g.b;m=e.b;k=k-m|0;e=d.R.i;l=e.a-l|0;m=e.b-m|0;e=new Bh;g=new TQ;g.s6=d;g.s7=l;g.s1=m;g.s3=e;g.s4=f;g.s5=k;break b;}}g=null;}f=g===null&&!MD(d,b)?0:1;k=!c&&d!==OY(a)&&f?1:0;if(k){e=a.bx;l=0;j=e.da.data;m=j.length;d:{while(true){if(l>=m){l=(-1);break d;}if(d===j[l])break;l=l+1|0;}}if(l>0)UT(a,l);}if(g===null&&f)g
=d.Y.cw(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function UT(a,b){var c,d,e,f,g;Ll(FB(a.bx,0));c=a.bx;d=c.cL;if(d<=b){c=new OK;Bp(c,Ih(b));N(c);}if(b){e=c.da;f=e.data;g=f[b];while(b>0){f[b]=f[b-1|0];b=b+(-1)|0;}f[0]=g;f=c.gr;if(f!==null)Da(e,0,f,0,d);}K2(FB(a.bx,0));}
function A5R(a,b,c){var d,e,f,g,h;d=a.ek;if(d!==null&&JO(d))return 1;e=(B5(a.bx)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B3(d.R,b.j)){if(!MD(d,b))break b;if(!d.Y.dN(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A1t(a,b,c){var d,e,f,g,h;d=(B5(a.bx)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.Y;h.dM(h.i,h.k,c);h=g.R;if(h.hQ!==null){h.eH=null;h.iD=0;h.eS=1;}IK(g);h=g.dr;if(h!==null)Oh(h);f=f+1|0;}}
function OY(a){var b;b=a.bx;return b.cL<=0?null:FB(b,0);}
function Us(){var a=this;B.call(a);a.bN=null;a.cu=null;a.c3=null;a.bT=null;a.cm=0.0;a.cN=0;a.cU=null;a.di=null;a.d_=null;a.qC=null;a.mP=null;a.Dm=null;}
function K_(a){var b;b=a.cU;if(b!==null)b.vw();}
function Lo(a){var b;b=a.cU;if(b!==null)b.xn();}
function Nl(a,b){var c;c=a.cu.eC!==(EG()).activeElement?0:1;if(c)Lo(a);a.cU=b;if(c)K_(a);}
function CV(a,b){Lo(a);a.cU=b;K_(a);}
function ACG(a,b){if(a.cU===b)a.cU=null;}
function Dz(a,b){return b!==a.cU?0:1;}
function KF(a){return a.bN.co;}
function Fw(a,b){return GS(a.bN,b.is,b.hf*a.cm,b.ku,0);}
function Cw(a,b){return Cj(b,a.cm);}
function KR(a,b){var c;c=a.bN;if(!a.cN)c.qr=b;else c.oO=b;JQ(a.cu);}
function A4O(a,b,c){var d;d=a.cU;return d!==null&&d.f7(b,c)?1:0;}
function A2J(a){var b;b=a.cU;return b===null?null:b.Av();}
function Xf(){B.call(this);this.wX=null;}
function A5L(a,b,c,d){var e,f,g,h;e=(B5(a.wX.bx)).data;f=e.length;g=0;a:{while(g<f){if(e[g].Y.dL(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function Xe(){B.call(this);this.uh=null;}
function AOZ(a,b){var c,d,e,f;c=a.uh;b=b.j;d=0;e=c.bx.cL;a:{while(d<e){f=FB(c.bx,d);if(!B3(f.R,b)&&!Qi(f,b)&&!ADz(f,b)?0:1){c=FB(c.bx,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.xM;if(c!==null&&AJW(c.xy,b)?1:0){d=1;break b;}}d=0;}return d;}
function AGy(){var a=this;B.call(a);a.e1=null;a.pv=0.0;a.iU=0.0;a.hz=0;}
function A0J(){var a=new AGy();AT7(a);return a;}
function AT7(a){var b;b=TY(0,0,2,20);a.e1=b;a.pv=0.5;a.iU=0.0;IX(187,187,187,255,b.bb);}
function TO(a){return a.e1.u.a;}
function ACj(a,b){var c,d;a:{c=a.hz;if(b>a.iU)while(true){d=a.iU+a.pv;a.iU=d;a.hz=a.hz?0:1;if(b>d)continue;else break a;}}return a.hz==c?0:1;}
function U8(a,b,c){Y(a.e1.w,b,c);}
function ZD(a,b){a.iU=b+a.pv*1.25;a.hz=1;}
function ALN(a,b){return AGa(a.e1.w,0,0,b);}
function ADl(a,b,c){if(a.hz)AAR(a.e1,b,c.a,c.b);}
function AFa(){var a=this;B.call(a);a.fx=null;a.h=null;a.qq=null;a.r7=null;a.ih=null;a.jS=null;a.fk=null;a.lX=null;a.y=0;a.B=0;a.iJ=0;a.je=null;a.iY=null;a.pX=null;a.fm=0;a.gX=0;a.hc=0;a.jp=FV;a.BB=FV;a.Cb=FV;a.q2=0;a.FI=0;a.d4=0;a.m4=0.0;a.f3=0;}
function A8q(a,b,c){var d=new AFa();AMP(d,a,b,c);return d;}
function AP8(a,b){var c=new AFa();ATw(c,a,b);return c;}
function A8x(a,b,c){var d=new AFa();WA(d,a,b,c);return d;}
function AMP(a,b,c,d){WA(a,(AJ_(b)).kG,c,d);}
function ATw(a,b,c){WA(a,b,null,c);}
function WA(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.r7=AOr();f=new Uq;f.fA=P(Oe,16);f.fw=0;f.dV=(-1);a.ih=f;a.je=null;a.iY=BO();a.pX=BO();a.fm=1;a.gX=1;a.hc=1;a.d4=0;a.m4=0.0;a.f3=0;a.fx=d;a.qq=c;c=new AAS;g=e.length;b=P(DN,Bd(1,g));if(!g)b.data[0]=YP(C(21));h=b.data;i=0;while(i<g){h[i]=YP(e[i]);i=i+1|0;}d=new Zp;f=new Ob;Rq(f);d.fl=f;c.fc=d;c.d0=Kc();c.dR=Kc();c.i6=BO();if(!h.length){c=new BX;X(c);N(c);}c.E=b;j=ADx(c);c.dq=AIi(AV8(Le(0,j,0),null,null));a.h=c;}
function Ej(a){var b;b=a.qq;if(b===null){b=a.fx;b=b===null?C(182):AJn(b.f8);}return b;}
function HU(a){var b;b=a.fx;return b===null?null:b.kR;}
function MO(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gX=3;a.hc=3;a.fm=3;c=CW(b[0]);d=E2(b[1]);CW(b[2]);if(b.length<5)Ox(a.h,c,d);else{e=CW(b[3]);f=e.data;g=E2(b[4]);Yx(a.h,c,d,e,g,0);UB(a,JD(e,f.length),OP(g));}if(a.f3){h=Fd(a);i=J8(EI(),a.jp);j=new J;L(j);H(H3(H(H(j,h),C(201)),i),C(202));$rt_globals.console.info($rt_ustr(K(j)));}h=a.jS;if(h!==null)Mm(h);}
function Ji(a){var b;Tl(a,DY(a.y,a.B),Ju(a.h,a.y,a.B));if(!(a.je!==null&&!EP(a.iY))){b=a.B;if(b>0)Tl(a,DY(a.y,b-1|0),Ju(a.h,a.y,a.B-1|0));}}
function Tl(a,b,c){var d,e,f,g,h,i,j,k;a.je=null;IO(a.iY);d=CB(a.h.d0,c);if(d!==null)c=d;a:{e=CB(a.h.dR,c);if(e!==null){a.je=Mo(a.h,c);c=B9(e);while(true){if(!Cb(c))break a;f=Cc(c);BA(a.iY,Mo(a.h,f));}}}c=a.jS;if(c!==null){g=b.bs;h=b.bw;b=c.fJ;f=Ej(c.d);e=HU(c.d);i=(B5(b.wA)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Cq(f,e)){b=b.E4;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Po;e.Ec=c;e.Ed=f;e.Ea=g;e.Eb=h;b.uF(f,g,h,e,c.kv);}}}
function UB(a,b,c){var d,e,f,g,h;if(a.fk!==null){a.Cb=EI();d=a.h.cB;e=a.fk;f=new Zj;f.Ai=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BQ(1);b.data[0]=d;h[2]=b;CO(e,f,C(203),g);}}
function Lq(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jS=b;a.fk=c;if(c===null){d=a.h.E.data;e=d.length;f=0;while(f<e){Ua(d[f]);f=f+1|0;}}else if(a.fm==1){a.jp=EI();b=Ej(a);if(BR(b,C(182))){a.gX=3;a.hc=3;a.fm=3;b=a.jS;if(b!==null)Mm(b);}else{e=BR(b,C(193));f=BR(b,C(204));d=Fm(a.h);g=d.data.length;h=!e?5120:10240;i=AJG(b);if(f)J_(a,d,i);else if(g<=h)J_(a,d,i);else if(!e){Wr(a,OP(d),i);J_(a,d,i);}else{Wr(a,OP(d),i);j=OP(d);k=a.fk;c=new RI;c.Ak=a;l=P(B,2);m=l.data;m[0]=j;j=BQ(1);j.data[0]=i;m[1]=j;CO(k,c,C(205),l);a.gX=
2;J_(a,d,i);}}}}
function Wr(a,b,c){var d,e;d=a.fk;e=new V1;e.AD=a;CO(d,e,C(206),I(B,[b,D6([c,250])]));a.hc=2;}
function J_(a,b,c){var d,e,f,g;d=a.fk;e=new X6;e.yX=a;f=P(B,2);g=f.data;g[0]=b;b=BQ(1);b.data[0]=c;g[1]=b;CO(d,e,C(207),f);a.fm=2;}
function Fd(a){var b;b=a.fx;return b===null?C(21):ADD(b);}
function MM(a){var b,c,d,e,f;if(a.f3){b=Fd(a);c=new J;L(c);H(H(c,b),C(208));$rt_globals.console.info($rt_ustr(K(c)));}b=Ej(a);if(b===null)d=null;else{a:{e=(-1);switch(Kj(b)){case -1655966961:if(!Bk(b,C(204)))break a;e=3;break a;case 3401:if(!Bk(b,C(209)))break a;e=2;break a;case 98723:if(!Bk(b,C(210)))break a;e=1;break a;case 3254818:if(!Bk(b,C(193)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(211);break b;case 2:d=C(212);break b;case 3:d=C(213);break b;default:d=null;break b;}d=C(214);}}if
(d===null)Mm(a.jS);else{a.jp=EI();b=a.fk;c=new ACz;c.wc=a;f=P(B,1);f.data[0]=Fm(a.h);CO(b,c,d,f);}}
function OO(a){var b;b=AWX(a.h.fc,null);X5(b);UB(a,b.pf,b.ng);}
function AE2(){var a=this;B.call(a);a.zt=null;a.C5=null;a.ra=null;a.wA=null;a.wb=null;a.BX=null;}
function OW(a,b,c){return Sk(a,B5(a.zt),b,c);}
function AAe(a,b,c){return Sk(a,B5(a.C5),b,c);}
function Sk(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Cq(c,d))return g.FU;f=f+1|0;}return null;}
function AC1(a,b,c){var d,e,f,g;d=(B5(a.ra)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Cq(b,c))return g.FP;f=f+1|0;}return null;}
function FF(){var a=this;B.call(a);a.ci=0;a.dh=null;a.cR=null;a.eN=null;a.dU=0;}
var A_g=0;var A_c=0;function YB(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cR;j=i===b&&!i.jF?0:1;if(j){a.cR=b;NX(b,c.co,a.dh.ho);}k=Iq(Be(FS(b),e+2048|0),1024);l=a.eN;m=l.data.length;n=k<=m?0:1;if(n){a.eN=C2(l,k);while(m<k){a.eN.data[m]=C3(c);m=m+1|0;}}o=a.dh.hX;if(!(!j&&!n)){if(A_g){l=b.gG;$rt_globals.console.info("fMeasure"+l.data);A_g=0;}if(!A_c){c=o.dk;b="alphabetic";c.textBaseline=b;}else{b=o.dk;c="top";b.textBaseline=c;}a.dU=f/1024|0;p=0;while(p<k){KA(a,o,d,a.dU+p|0);p=p+1|0;}a.cR.jF=0;}e=a.eN.data.length;if
(e&&f<=FS(a.cR)){f=f/1024|0;g=a.dU;if(f!=g){if(Xk(f-g|0)>=e){g=0;while(g<e){KA(a,o,d,f+g|0);g=g+1|0;}a.dU=f;}else{while(true){g=a.dU;if(g>=f)break;KA(a,o,d,g+e|0);a.dU=a.dU+1|0;}while(true){g=a.dU;if(g<=f)break;KA(a,o,d,g-1|0);a.dU=a.dU-1|0;}}}}}
function KA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Zh(a,e);g=a.cR;if(f>=g.s.data.length)return;h=g.gG;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.ci;l=a.dh.ho;E3(b);a:{while(true){g=a.cR;if(f>=g.s.data.length)break a;m=l.data;g=Ke(g,f);n=m[KZ(g)];o=!A_c?L8(n,c):NH(n,c);m=h.data;Cr(b,n);B1(b,g.x,k,o);k=m[f]-j+a.ci;if(k>1024.0)break;f=f+1|0;}}h=a.eN.data;CR(h[d%h.length|0],b);}
function QP(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eN.data.length;if(!o)return;if(g>FS(a.cR))return;p=a.cR;q=p.e6;r=p.s;s=g/1024|0;t=Zh(a,g);u= -a.ci|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eN.data[s%o|0];bb=w[t];bc=z[t]+a.ci|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.ci|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.ci:2*a.ci|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.ci:2*a.ci|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bv.gL;if(bb===j)bo=h.bv.r3;if(k!==null){p=B9(k);d:{while(Cb(p)){if(BR(Cc(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bv.xm;}if(n!==null){w=n.n8;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AFv(h.eg,h,bi,n.hr);}if(!bn&&!bl){i.b=Be(i.b,FS(a.cR));AHs(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.ci:0)|0,(g
+bg|0)<=(i.b+(!y?a.ci:2*a.ci|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.ci:0)|0,g-x|0,bo);}else{bp=h.j_.data[bb.b4];p=bn?h.bv.lm:TV(bo,XT(h,bp.nc));Cv(a.dh.jR,g-x|0,0.0,bg,v);Y(a.dh.iA,bg,f);Hv(a.dh,d,ba,u+c|0,b,bp.hm,p);}if((bb.bG&12)>>2>0){bc=u+c|0;Ca(d,1);p=a.dh;bq=p.n$;bq.a=bg;x=b+p.u7|0;bk=x-p.CO|0;br=p.rk;bs=x+br;ba=p.hI;UU();MA(d,bc,bk,bq,br,bs,ba,A_h.lx.hm);Ca(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AHs(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.j_.data[h.b4];o=n.hm;p=TV(m,XT(f,n.nc));q=f.bv.lm;f=a.dh;r=f.jR;s=f.iA;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);Y(s,u,e);Hv(a.dh,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.dh;c=c+i|0;Hv(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);Y(s,i,e);Hv(a.dh,b,g,c-j|0,d,o,q);}
function TV(b,c){if(b!==null)c=b;return c;}
function Zh(a,b){var c,d,e,f,g,h,i;c=a.cR;d=c.gG;e=0;f=c.s.data.length;g=b;b=BP(e,f);if(b>0){c=new BX;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BP(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AFh(a){var b,c,d;b=a.eN.data;c=b.length;d=0;while(d<c){AHU(b[d]);d=d+1|0;}a.eN=a.dh.ol;a.cR=null;}
function AKk(a,b,c,d,e,f,g,h,i){var j,k;j=FS(a.cR);if(j)j=j+a.ci|0;if(!j)j=j-a.ci|0;k=Bd( -a.ci|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bv(b,c+k|0,d,f,i);}
function AAi(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FF,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.u$(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cR===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FF;g.ci=3;g.dU=0;g.dh=d;g.eN=d.ol;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AFh(q);j=j+1|0;}return i;}
function TM(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cR;if(e!==null)e.jF=1;d=d+1|0;}}
function OV(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AFh(b[d]);d=d+1|0;}}
function AHv(){A_c=0;}
function AI$(){var a=this;B.call(a);a.gk=null;a.dA=null;a.fe=null;a.fR=null;a.o9=null;a.oT=null;}
function Jv(){var a=new AI$();A1i(a);return a;}
function A1i(a){a.gk=new Bh;a.dA=new Bh;a.fe=new Bh;a.fR=new Bh;a.o9=new B4;a.oT=new B4;}
function AAy(a){var b;b=a.dA;return !Bc(b.a,b.b)?0:1;}
function I5(a,b){return GB(b,a.fe,a.fR);}
function Gi(a,b,c,d){var e,f,g,h,i;e=I5(a,b);f=GB(b,a.gk,a.dA);if(!e&&!f)return null;if(!f){if(!d)c.g(V9(a,b.a-a.fe.a|0));else c.g(Rj(a,b.b-a.fe.b|0));}g=!d?a.gk.a+(a.dA.a/2|0)|0:a.gk.b+(a.dA.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new S4;b.wR=a;b.wS=c;b.wQ=i;}else{b=new S3;b.sj=a;b.sh=c;b.si=i;}return b;}
function In(a,b,c){if(c!==null)BL(a.o9,c);if(b!==null)BL(a.oT,b);}
function AGJ(b,c){var d;d=new AC_;d.ug=b;d.Df=c;return d;}
function Rj(a,b){var c,d,e;c=a.fR.b;d=a.dA.b;e=c-d|0;return AGJ(Be(Bd(0,b-(d/2|0)|0),e),e);}
function V9(a,b){var c,d,e;c=a.fR.a;d=a.dA.a;e=c-d|0;return AGJ(Be(Bd(0,b-(d/2|0)|0),e),e);}
function KJ(a,b,c,d,e,f,g){We(a,b,c,d,e,f,g,1);}
function Sb(a,b,c,d,e,f,g){We(a,b,c,d,e,f,g,0);}
function We(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(ZL(d,d,e),i);e=e-d|0;i=d-j|0;i=i?ZL(b,i,e):0;if(!h){k=a.gk;k.a=i+c|0;k.b=f-g|0;l=a.dA;l.a=j;l.b=g;l=a.fe;l.a=c;l.b=k.b;k=a.fR;k.a=d;k.b=g;break a;}k=a.gk;k.a=f-g|0;k.b=i+c|0;l=a.dA;l.a=g;l.b=j;l=a.fe;l.a=k.a;l.b=c;k=a.fR;k.a=g;k.b=d;break a;}}Y(a.fR,0,0);Y(a.dA,0,0);}}
function Wt(a,b){He(a,b);Hj(a,b);}
function He(a,b){var c;c=a.fe;Bv(b,c.a,c.b,a.fR,a.o9);}
function Hj(a,b){var c,d;c=a.dA;c.a=c.a-2|0;c.b=c.b-2|0;d=a.gk;Bv(b,d.a+1|0,d.b+1|0,c,a.oT);b=a.dA;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gp(a,b,c){return I5(a,b)&&G3(c)?1:0;}
function AGx(){var a=this;B.call(a);a.F6=20;a.gU=null;a.fE=null;a.lQ=0.0;a.lN=null;a.jL=0;a.lh=0;a.hC=0;a.c_=null;a.o_=null;a.fq=null;a.g5=null;a.g3=0;}
function AI2(){var a=new AGx();A54(a);return a;}
function A54(a){a.F6=20;a.gU=new Bh;a.fE=new Bh;a.c_=BO();a.o_=DS(0);}
function ACV(a,b,c){var d,e,f,g,h;d=a.g3;if(b==d)return;e=a.c_.p;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){SA(a,b);a.g3=b;}else{YN(a,c);if(a.g3>=b)while(true){if(h<g)break a;a.g3=PV(BI(a.c_,h%e|0),a.fq,a.g5,a.g3,b,f,a.lQ);h=h+(-1)|0;}while(g<=h){a.g3=PV(BI(a.c_,g%e|0),a.fq,a.g5,a.g3,b,f,a.lQ);g=g+1|0;}}}}
function L$(a,b){if(b===null)b=DS(0);a.o_=b;}
function ACa(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hC;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c_;h=BI(h,g%h.p|0);i=a.gU;j=a.o_;k=h.fC.b;l=d.lA;m=b+f|0;n=h.cG;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&W1(d,j,r,l)!==l.lu?0:1){k=Bc((q-p|0)+1|0,h.cG);Y(h.jC,BU(h.c0),k);Cv(h.kk,0.0,Bc(p,h.cG),BU(h.c0),k);t=r;}else{u=W1(d,j,r,l);NM(h,e,f+Bc(p,h.cG)|0,i,l.py,u);Y(h.jC,BU(h.c0),h.cG);Cv(h.kk,0.0,Bc(q,h.cG),BU(h.c0),h.cG);p=q;}q=q+1|0;r=t;}u=W1(d,j,r,l);NM(h,
e,f+Bc(p,h.cG)|0,i,l.py,u);g=g+1|0;f=f+a.hC|0;}}
function TK(a,b,c,d){var e,f,g,h,i,j;e=a.c_.p;while(true){f=a.c_.p;g=Bc(f,a.hC);if(g>(d+a.lh|0))break;h=BK(0,g);i=new Rp;g=a.fE.a;f=a.lh;j=a.lN;i.jC=new Bh;i.kk=new B4;i.qP=h;i.eo=20;i.cG=f;i.fC=BK(g,20*f|0);i.hL=L8(j,f);if(i.c0===null)i.c0=C3(b);BA(a.c_,i);}if(f==e)return;YN(a,b);SA(a,c);}
function SA(a,b){var c,d,e,f,g,h,i,j,k;c=a.c_;d=c.p;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B9(c);while(Cb(c)){f=Cc(c);g=a.fq;h=a.lQ;E3(g);i=0;while(true){j=f.eo;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;G$(f,g,Do(e),Bc(f.cG,i)+f.hL|0,h);i=i+1|0;}CR(f.c0,g);f.xY=g.jG;}}
function ZI(a,b,c,d){a.lN=b;a.lh=c;a.hC=c*20|0;a.jL=d;ZK(a);}
function YN(a,b){var c;c=a.fq;if(!(c!==null&&c.jG==a.jL)){c=Eb(b,a.fE.a,a.hC,a.jL);a.fq=c;Cr(c,a.lN);ABb(a.fq,2);}c=a.g5;if(!(c!==null&&c.jG==a.jL)){b=Eb(b,a.fE.a,a.lh,a.jL);a.g5=b;Cr(b,a.lN);ABb(a.g5,2);}}
function IU(a){FG(a.c_,new AEV);IO(a.c_);ZK(a);}
function ZK(a){a.fq=BY(a.fq,null);a.g5=BY(a.g5,null);}
function S6(a,b,c,d,e){Ct(a.gU,b);Y(a.fE,c,d);a.lQ=e;}
function Yr(){B.call(this);this.EE=null;}
function Yq(){B.call(this);this.q0=null;}
function AOp(a,b){var c;c=a.q0;Gg(c,F_(b,Li(c)));}
function Yp(){B.call(this);this.t7=null;}
function ANF(a,b){var c;c=a.t7;I3(c,F_(b,ACh(c)));}
function ALV(){var a=this;B.call(a);a.jR=null;a.iA=null;a.n$=null;a.hI=null;a.ho=null;a.ol=null;a.dj=null;a.hX=null;a.rk=0.0;a.ej=0;a.u7=0;a.CO=0;a.i$=0;}
function AR4(a){var b=new ALV();AVS(b,a);return b;}
function AVS(a,b){var c;a.jR=new B4;a.iA=new Bh;a.n$=new Bh;c=new B4;a.hI=c;a.ho=P(LX,4);a.ol=P(IL,0);a.i$=b;L0(c);}
function Zk(a){a.hX=BY(a.hX,null);}
function S$(a,b,c){var d,e;d=C5(Fh(a.dj)*b);a.ej=d;e=a.dj;a.u7= -( -((d+e.ey+e.eR)/2.0)|0)|0;AFl(a,c);return a.ej;}
function Qt(a,b){var c,d;L0(a.hI);c=a.hI;VX(c,b,c);a.rk=X3(a.hI);c=a.hI;d=c.bt+c.bi+1.5|0;a.CO=d;Y(a.n$,0,d*2|0);}
function AFl(a,b){a.hX=BY(a.hX,Eb(b,1024,a.ej,a.i$));}
function Hv(a,b,c,d,e,f,g){var h,i;h=a.iA;if(h.a&&h.b){i=a.jR;if(i.bC!==0.0&&i.bi!==0.0){DP(b,d,e,h,i,c,f,g,a.i$);return;}}}
function Yo(){B.call(this);this.B_=null;}
function AXP(a){var b,c;b=a.B_;c=b.kx?0:1;b.kx=c;b=new J;L(b);JR(H(b,C(215)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Yv(){B.call(this);this.yx=null;}
function A0k(a){var b,c;b=a.yx;c=b.lo^1;b.lo=c;b=new J;L(b);JR(H(b,C(216)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Yu(){B.call(this);this.u0=null;}
function A63(a){var b,c,d,e,f;b=a.u0;c=(b.eq+3|0)%6|0;b.eq=c;d=b.e5.data;e=d.length;f=0;while(f<e){b=d[f];b.ci=c;b=b.cR;if(b!==null)b.jF=1;f=f+1|0;}}
function Yt(){B.call(this);this.xp=null;}
function ASa(a){var b;b=a.xp;b.b9=b.b9?0:1;IU(b.dm);b.dm=AI2();Ot(b);ABH(b,b.i,b.k,b.cd.cm);}
function Ys(){B.call(this);this.rN=null;}
function AT3(a){var b;b=a.rN;b.mf=b.mf?0:1;}
function Yn(){B.call(this);this.Ay=null;}
function A6o(a){var b;b=a.Ay;b.qu=b.qu?0:1;}
function VM(){B.call(this);this.s$=null;}
function ASd(a){var b;b=a.s$;ZE(b,b.l3,b.oz);}
function VN(){B.call(this);this.sa=null;}
function A3l(a){var b;b=a.sa;ZE(b,b.oz,b.l3);}
var AHM=G();
function NU(){B.call(this);this.Ex=null;}
var A$S=null;var A_i=null;function A1j(){A1j=Bm(NU);A6N();}
function APS(a){var b=new NU();AJy(b,a);return b;}
function AJy(a,b){A1j();a.Ex=b;}
function A6N(){A$S=APS(C(217));A_i=APS(C(218));}
var AF7=G(0);
function AKs(b,c,d){return IX(b,c,d,255,new B4);}
function IX(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Wk(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AQO(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bp=g+i;e.bt=h+i;e.bi=j+i;return e;}
function IN(b,c,d,e,f){f=Wk(b,c,d,f);f.bC=e;return f;}
function Ib(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var AA8=G();
function A6p(a,b){var c,d,e;c=b.cv;d=c&&!b.bJ&&!b.dl&&!b.iZ?1:0;a:{if(d){d=b.bh;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bJ&&!c&&!b.dl&&!b.iZ?1:0;d=d&&b.bh==46?1:0;}b:{if(!d){e=b.bh;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.pk=1;}return 0;}
function AA7(){B.call(this);this.yr=null;}
function AWp(a,b){var c;c=a.yr.cU;return c!==null&&c.iL(b)?1:0;}
function UE(){var a=this;B.call(a);a.bg=null;a.xM=null;a.iW=null;a.iS=null;a.R=null;a.dr=null;a.Y=null;a.gt=null;a.qp=0;}
function AFM(a){var b=new UE();ATS(b,a);return b;}
function A5$(a,b){var c=new UE();AGI(c,a,b);return c;}
function ATS(a,b){AGI(a,b,AXj());}
function AGI(a,b,c){var d;a.bg=b;d=new Vl;Fe(d);d.m6=new B4;d.gp=b;a.R=d;a.Y=c;}
function Ue(a,b){var c,d;if(a.dr===null){c=new Ri;c.gu=new Bh;c.k3=new Bh;a.dr=c;d=a.gt;if(d!==null)ABw(c,d);}a.dr.ju=b;}
function K2(a){var b;b=a.iW;if(b!==null)b.e();}
function Ll(a){var b;b=a.iS;if(b!==null)b.e();}
function CX(a,b){var c;c=a.R;c.eS=c.eS|(BR(c.j6,b)?0:1);c.j6=b;IK(a);}
function ABx(a,b,c){var d,e,f;d=a.R;e=BR(d.hQ,b)?0:1;f=c===d.k$?0:1;if(e){d.hQ=b;d.eH=null;Ra(d,0);}d.eS=d.eS|(!e&&!f?0:1);d.k$=c;d.iD=0;IK(a);}
function Eq(a,b){var c;a.gt=b;c=b.t9;BF(b);ABx(a,c,3.0);c=a.dr;if(c!==null)ABw(c,b);}
function Kh(a){var b;b=a.R;b.d$=BY(b.d$,null);b.eH=null;a.Y=BY(a.Y,null);b=a.dr;if(b!==null){Oh(b);b.ju=null;}}
function Ly(a,b){var c,d,e;c=a.Y;d=c.i;e=c.k;b=BY(c,b);a.Y=b;b.dM(d,e,a.bg.cm);}
function EE(a,b,c){a.Y.dM(b,c,a.bg.cm);IK(a);}
function IK(a){var b,c,d;if(a.bg.cm!==0.0){b=a.R;if(b.hQ!==null){c=a.Y.k.a;b.k.a=c;d=b.d$;if(d!==null&&c!=BU(d)&&!(c>=b.iD&&BU(b.d$)>=b.iD))b.eS=1;b=a.R;b.bX=a.bg.cm;if(OG(b))c=0;else{b=a.R;Ra(b,Wz(b));c=b.k.b;}b=a.R.i;d=a.Y.i;Y(b,d.a,d.b-c|0);b=a.dr;if(b!==null)Ct(b.gu,a.R.i);return;}}}
function ADQ(a){return Wz(a.R);}
function MD(a,b){return ADz(a,b.j);}
function ADz(a,b){var c;c=!(a.qp&1)?0:1;return !c&&!B3(a.Y,b)?0:1;}
function Mu(b,c){if(b<0)c=C(219);else if(b>0)c=C(220);return c;}
function O6(a,b,c){var d;d=a.R.i.a;return (d-c|0)<=b&&b<d?1:0;}
function M9(a,b,c){var d,e;d=a.R;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function NC(a,b,c){var d;d=a.R.i.b;return (d-c|0)<=b&&b<d?1:0;}
function K8(a,b,c){var d,e;d=a.Y;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OJ(a,b,c){var d,e,f;d=a.R.i.b-c|0;e=a.Y;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function AEG(a,b,c){var d,e;d=a.R.i.b+c|0;e=a.Y;return AKW(b,d,(e.i.b+e.k.b|0)-c|0);}
function Ns(a,b,c){var d,e,f;d=a.R;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Yl(a,b,c){var d,e;d=a.R;e=d.i.a;return AKW(b,e+c|0,(e+d.k.a|0)-c|0);}
function AKW(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BP(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Qi(a,b){var c;a:{b:{c:{c=Cw(a.bg,7.0);if(Ns(a,b.a,c)){if(NC(a,b.b,c))break c;if(K8(a,b.b,c))break c;}if(!OJ(a,b.b,c))break b;if(!O6(a,b.a,c)&&!M9(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function Kp(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.a;h=b.b;b=a.Y;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new UI;b.tX=a;b.tU=e;b.tT=f;b.tW=c;b.tV=g;b.t0=j;b.tZ=l;b.t2=d;b.t1=h;b.tY=k;b.sR=m;return b;}
function Ym(a){var b;b=a.dr;if(b!==null){b.ju.e();return;}b=new Gh;X(b);N(b);}
function KH(){var a=this;B.call(a);a.w=null;a.u=null;a.bb=null;a.bq=null;}
function Td(){var a=new KH();ADm(a);return a;}
function TY(a,b,c,d){var e=new KH();AO2(e,a,b,c,d);return e;}
function ADm(a){a.w=new Bh;a.u=new Bh;a.bb=new B4;a.bq=new B4;}
function AO2(a,b,c,d,e){a.w=new Bh;a.u=new Bh;a.bb=new B4;a.bq=new B4;Hz(a,b,c,d,e);}
function Hz(a,b,c,d,e){Y(a.w,b,c);Y(a.u,d,e);}
function ACk(a){Y(a.u,0,0);}
function Lz(a){var b;b=a.u;return Bc(b.a,b.b)?0:1;}
function Fo(a,b){return GB(b,a.w,a.u);}
function AAR(a,b,c,d){var e;e=a.w;Bv(b,e.a+c|0,e.b+d|0,a.u,a.bb);}
function WQ(a,b,c,d,e,f){var g,h,i,j;g=a.w;d=g.a+d|0;e=g.b+e|0;g=a.u;h=a.bq;i=a.bb;GO(b,b.jc);G0(b.jc,b.bc,d,e,g,b.dd);Oo(b.jc,b.bc,c);g=b.jc;j=b.bc;FQ(j,g.xb,h);FQ(j,g.w_,i);c=g.tx;j.uniform2f(c,f,0.0);Gf(b);}
var Fz=G();
function NS(){Fz.call(this);this.FU=null;}
function AB4(){Fz.call(this);this.FP=null;}
function ZR(){Fz.call(this);this.E4=null;}
var Gr=G(0);
var Tk=G(0);
function B4(){var a=this;B.call(a);a.bp=0.0;a.bt=0.0;a.bi=0.0;a.bC=0.0;}
function AE$(a,b,c,d){var e=new B4();A3Y(e,a,b,c,d);return e;}
function AMW(a){var b=new B4();ALW(b,a);return b;}
function A3Y(a,b,c,d,e){a.bp=b;a.bt=c;a.bi=d;a.bC=e;}
function Cv(a,b,c,d,e){a.bp=b;a.bt=c;a.bi=d;a.bC=e;}
function ALW(a,b){a.bp=b.bp;a.bt=b.bt;a.bi=b.bi;a.bC=b.bC;}
function BL(a,b){a.bp=b.bp;a.bt=b.bt;a.bi=b.bi;a.bC=b.bC;return a;}
function AW4(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BG(a)===BG(b)){b=b;if(b.bp===a.bp&&b.bt===a.bt&&b.bi===a.bi&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
function AOY(a){var b,c,d,e,f;b=a.bp;c=a.bt;d=a.bi;e=a.bC;f=new J;L(f);Df(H(Df(H(Df(H(Df(H(f,C(70)),b),C(71)),c),C(221)),d),C(222)),e);return K(f);}
var Jp=G(0);
function AJ3(){var a=this;EA.call(a);a.cq=null;a.p=0;}
function BO(){var a=new AJ3();AQs(a);return a;}
function AQs(a){a.cq=P(B,10);}
function Ne(a,b){var c,d;c=a.cq.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cq=C2(a.cq,d);}}
function BI(a,b){KW(a,b);return a.cq.data[b];}
function A22(a){return a.p;}
function BA(a,b){var c,d;Ne(a,a.p+1|0);c=a.cq.data;d=a.p;a.p=d+1|0;c[d]=b;a.b7=a.b7+1|0;return 1;}
function AK$(a,b,c){var d,e,f;Rc(a,b);Ne(a,a.p+1|0);d=a.p;e=d;while(e>b){f=a.cq.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cq.data[b]=c;a.p=d+1|0;a.b7=a.b7+1|0;}
function EZ(a,b){var c,d,e,f;KW(a,b);c=a.cq.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b7=a.b7+1|0;return d;}
function AIx(a,b){var c;c=Lv(a,b);if(c<0)return 0;EZ(a,c);return 1;}
function IO(a){AGh(a.cq,0,a.p,null);a.p=0;a.b7=a.b7+1|0;}
function AKe(a,b,c){var d,e,f,g,h,i;Rc(a,b);if(c.eQ())return 0;Ne(a,a.p+c.c1()|0);d=c.c1();e=a.p;f=e-1|0;while(f>=b){g=a.cq.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.p=e+d|0;h=c.ce();i=0;while(i<d){g=a.cq.data;e=b+1|0;g[b]=h.cg();i=i+1|0;b=e;}a.b7=a.b7+1|0;return 1;}
function KW(a,b){var c;if(b>=0&&b<a.p)return;c=new BJ;X(c);N(c);}
function Rc(a,b){var c;if(b>=0&&b<=a.p)return;c=new BJ;X(c);N(c);}
function FG(a,b){var c;c=0;while(c<a.p){b.g(a.cq.data[c]);c=c+1|0;}}
function AL0(a){var b,c,d,e;b=a.p;if(!b)return C(22);c=b-1|0;d=new J;F7(d,b*16|0);Br(d,91);b=0;while(b<c){e=a.cq.data;BM(H(d,e[b]!==a?e[b]:C(223)),C(37));b=b+1|0;}e=a.cq.data;H(d,e[c]!==a?e[c]:C(223));Br(d,93);return K(d);}
function LX(){var a=this;B.call(a);a.oM=null;a.DB=null;a.pw=0.0;a.DO=0;a.D4=0;a.uf=0;a.EJ=0;a.ey=0.0;a.eR=0.0;a.DF=0.0;a.qD=0.0;a.DK=0;a.ro=null;}
function L8(a,b){return NH(a,b)+a.uf|0;}
function NH(a,b){return (b-Fh(a)|0)/2|0;}
function Fh(a){return C5(a.ey+a.eR);}
function NI(a,b){return C5((a.ey+a.eR)*b);}
function IL(){var a=this;B.call(a);a.eT=null;a.gh=null;a.e2=null;}
var A$B=0;function AHU(a){var b;b=a.gh;if(b!==null){A$B=A$B-1|0;a.eT.ed.deleteTexture(b);a.gh=null;}}
function BU(a){return a.e2.a;}
function CT(a){return a.e2.b;}
function T3(a,b,c,d){var e;e=a.e2;e.a=b;e.b=c;OR(a);a.eT.ed.texStorage2D(3553,1,d,b,c);e=a.eT.ed;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function OR(a){var b,c;b=a.eT.ed;c=a.gh;b.bindTexture(3553,c);}
function CR(a,b){XK(a,b.oo,b.nP,32856);ZN(a,b,0,0);}
function XK(a,b,c,d){var e,f,g,h;a:{e=a.e2;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){OR(a);break a;}e=a.eT.ed;h=a.gh;e.deleteTexture(h);a.gh=a.eT.ed.createTexture();T3(a,b,c,d);break a;}}T3(a,b,c,d);}}
function J7(a,b,c,d){OR(a);ZN(a,b,c,d);}
function ZN(a,b,c,d){var e;e=a.eT.ed;b=b.jv;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var ZH=G(0);
var A_j=0.0;function L0(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function VX(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JG(b.bC,JG(c,A_j));Cv(d,b.bp/c,b.bt*c,AWr(b.bi*c,1.25),e);}
function X3(b){var c;c=b.bt;return c-(c|0)>=0.25?0.0:0.5;}
function AFL(){A_j=Ny(Ny(0.5,0.375),4.0);}
var Pa=G(0);
function G3(a){return D7(a,null);}
function Sa(b){var c;c=new AA1;c.ww=b;return c;}
function Z0(){B.call(this);this.uy=null;}
function A0V(a){K_(a.uy);}
function ZZ(){B.call(this);this.w6=null;}
function AXy(a){Lo(a.w6);}
function AMH(){var a=this;B.call(a);a.bS=null;a.bI=null;a.dF=0;}
function AOr(){var a=new AMH();A6v(a);return a;}
function AZp(a){var b=new AMH();ATd(b,a);return b;}
function A6v(a){a.bS=new Hy;a.bI=new Hy;}
function ATd(a,b){a.bS=new Hy;a.bI=new Hy;J6(a,b);}
function J6(a,b){ADc(a.bS,b.bS);ADc(a.bI,b.bI);a.dF=b.dF;}
function Oq(a,b,c){Ci(a.bI,b,c);if(!a.dF)Ci(a.bS,b,c);}
function Rl(a,b){Ci(a.bS,b,0);Ci(a.bI,b+1|0,0);}
function Ez(a){if(SF(a.bS,a.bI)>0)return a.bI;return a.bS;}
function Gk(a){if(SF(a.bS,a.bI)<0)return a.bI;return a.bS;}
function ALT(a,b){var c,d,e,f;c=a.bS;d=c.N;e=a.bI;if(d==e.N&&c.be==e.be?1:0)return null;c=Ez(a);e=Gk(a);d=c.N;if(d<=b){f=BP(b,e.N);if(f<=0)return BK(b<=d?c.be:0,f>=0?e.be:(-1));}return null;}
function DC(a){var b,c;b=a.bS;c=a.bI;return (b.N==c.N&&b.be==c.be?1:0)?0:1;}
function Uq(){var a=this;B.call(a);a.fA=null;a.fw=0;a.dV=0;}
function ADJ(a,b){var c,d,e;c=a.fw;d=a.fA;if(c==d.data.length)a.fA=C2(d,c+16|0);d=a.fA.data;e=a.fw;a.fw=e+1|0;d[e]=b;}
function AAX(a){var b,c,d,e;b=a.fw;if(b?0:1)return;c=a.dV;d=b-1|0;if(c==d)a.dV=c-1|0;e=a.fA.data;a.fw=d;e[d]=null;}
var Hi=G();
function AAS(){var a=this;Hi.call(a);a.E=null;a.dq=null;a.fc=null;a.d0=null;a.dR=null;a.i6=null;a.lZ=null;a.cB=0;a.nU=0;a.Bb=0.0;}
function Cg(a,b){return a.E.data[b];}
function CK(a){return a.E.data.length;}
function ADx(a){return FR(a,CK(a));}
function GV(a,b){return a.E.data[b].T;}
function L1(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=Ee(Mp(d.s,e.s));g=a.E;h=g.data.length;if(b<h&&b>=0){i=P(DN,h-1|0);c=i.data;AAM(g,b,i);c[b]=f;a.E=i;return;}d=new Bt;X(d);N(d);}
function Pv(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].T?0:1)){d=(Cg(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.x)){e=Q(h.x,g);break a;}g=g-M(h.x)|0;f=f+1|0;}e=0;}Gj(a,b,c,1,N4(e));h=a.E.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].x);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].x)==1)h.s=AAM(d,e,P(CA,f-1|0));else{j=i[e];if(c<=0)k=El(DB(j.x,1),j.b4,j.bG);else if(c>=(M(j.x)-1|0)){k=new CA;l=j.x;ACy(k,Cy(l,0,M(l)-1|0),j.b4,j.bG);}else{d=B6(M(j.x)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.x,b);b=b+1|0;}b=m.length;while(c<b){k=j.x;n=c+1|0;m[c]=Q(k,n);c=n;}k=El(Gz(d),j.b4,j.bG);}i[e]=k;}h.T=h.T-1|0;Fc(h);}else if(b!=(d.length-1|0)){Gj(a,b,c,1,C(175));L1(a,b);}}
function AFr(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){ABf(a.E.data[b],c,e[0]);return;}g=f-1|0;d=(I_(a.E.data[b],c)).data;h=d[0];i=d[1];d=a.E;j=C2(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:M(l[f-1|0].x);M1(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!GK(e[m])?YP(e[m]):Ee(P(CA,0));d[b+m|0]=k;m=m+1|0;}M1(i,0,0,e[g]);d[b+g|0]=i;a.E=j;}
function VR(a,b){var c,d,e,f,g,h,i;c=Ez(b);d=Gk(b);e=c.N;if(e==d.N)return Cy(FZ(a.E.data[e]),c.be,d.be);f=new J;L(f);b=a.E.data[c.N];e=c.be;Br(BM(f,DB(FZ(b),e)),10);g=a.E.data;e=c.N+1|0;h=d.N;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AFE(BM(f,FZ(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.E.data[d.N];h=d.be;BM(f,Cy(FZ(b),0,h));return K(f);}b=new OK;X(b);N(b);}
function PD(a,b,c){var d;AEa(a,b);d=Ez(b);Gj(a,d.N,d.be,1,c);}
function AEa(a,b){var c,d,e,f,g,h,i;a:{c=Ez(b);d=Gk(b);e=c.N;if(e==d.N)H4(a.E.data[e],c.be,d.be);else{b=a.E.data[e];H4(b,c.be,b.T);H4(a.E.data[d.N],0,d.be);e=c.N+1|0;f=d.N;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DN,(h-f|0)+e|0);AGZ(g,e,f,i);a.E=i;L1(a,c.N);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function Ju(a,b,c){return DY(b,G6(Cg(a,b),c));}
function AEE(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(Cg(a,c)).T|0)>=b)return BK(c,b-d|0);d=d+((Cg(a,c)).T+1|0)|0;c=c+1|0;}return BK(e,0);}
function FR(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+GV(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Mo(a,b){return OM(Cg(a,b.bs),b.bw);}
function Fm(a){var b,c,d,e,f,g,h,i,j;b=B6(ADx(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].x;Ry(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gj(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cB=a.cB+1|0;f=a.i6;g=P(Hs,1);h=new Hs;h.et=b;h.e$=c;i=MF(e,C(175),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BK(b,c+M(i[0])|0);break a;}k=BK((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BK(b,c);}i=g.data;h.p3=k;h.oC=d;h.ha=e;i[0]=h;BA(f,g);NL(a,b,c,d,e);}
function NL(a,b,c,d,e){var f;f=FR(a,b)+c|0;if(!d){YO(a.dq,f,M(e));Uz(a.fc,f,M(e));}else{V_(a.dq,f,M(e));PR(a.fc,f,M(e));}}
function AMi(a){var b,c,d,e;a.cB=a.cB+1|0;b=a.i6;c=b.p;if(!c)return null;d=(EZ(b,c-1|0)).data;b=XP(a,d[0]);e=1;while(e<d.length){XP(a,d[e]);e=e+1|0;}return b;}
function XP(a,b){var c,d,e;c=MF(b.ha,C(175),(-1));if(b.oC){AFr(a,b.et,b.e$,c);YO(a.dq,FR(a,b.et)+b.e$|0,M(b.ha));Uz(a.fc,FR(a,b.et)+b.e$|0,M(b.ha));}else{c=c.data;d=AOr();Ci(d.bS,b.et,b.e$);e=c.length;if(e==1)Ci(d.bI,b.et,b.e$+M(c[0])|0);else Ci(d.bI,(b.et+e|0)-1|0,M(c[e-1|0]));AEa(a,d);V_(a.dq,FR(a,b.et)+b.e$|0,M(b.ha));PR(a.fc,FR(a,b.et)+b.e$|0,M(b.ha));}return b.p3;}
function ACK(a){return a.nU==a.cB?0:1;}
function K4(a){a.nU=a.cB;}
function NG(a){var b,c,d;a.lZ=BQ(a.E.data.length+1|0);b=0;while(b<a.E.data.length){c=a.lZ.data;d=b+1|0;c[d]=(c[b]+(Cg(a,b)).T|0)+1|0;b=d;}}
function WK(a,b){var c,d,e,f,g,h;c=a.lZ;if(c===null){d=0;e=0;a:{while(true){c=a.E.data;f=c.length;if(e>=f)break;g=c[e].T;if(b<=(d+g|0)){h=DY(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DY(f,0);}return h;}d=ALK(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DY(d,b-(d<0?0:a.lZ.data[d])|0);if(h.bw>=(Cg(a,h.bs)).T){h.bs=h.bs+1|0;h.bw=0;}return h;}
var Mz=G(0);
function EN(a){return Vr(a.ud(),a.t());}
function Vr(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AHq(b,c,d));}
function AHq(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Br(BM(d,b[f]),47);f=f+1|0;}return BM(d,c);}
var Uv=G(0);
function LW(){var a=this;B.call(a);a.iC=null;a.hv=null;a.im=null;}
function AIh(a,b){var c=new LW();AY_(c,a,b);return c;}
function A_k(a,b,c){var d=new LW();Qo(d,a,b,c);return d;}
function ANw(b){var c,d,e,f,g,h,i;c=new LW;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BC,0);else{f=P(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FT(e[h]);h=h+1|0;}}}else f=P(BC,0);Qo(c,d,b,f);return c;}
function AY_(a,b,c){Qo(a,b,null,c);}
function Qo(a,b,c,d){a.iC=b;a.hv=c;a.im=d;}
function E5(a){var b;b=a.iC;return FT(b!==null?b.name:a.hv.name);}
function AN2(a){return a.im;}
function V4(a,b,c){var d,e,f;d=AMI(c);e=new Wb;e.tQ=b;b=a.hv;if(b!==null)b.text().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iC.getFile();f=new Wc;f.AP=e;f.AO=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function Ws(a,b,c){var d,e,f;d=AMI(c);e=new AEU;e.wV=b;b=a.hv;if(b!==null)b.arrayBuffer().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iC.getFile();f=new AET;f.uj=e;f.ui=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function AMI(b){var c;c=new TE;c.uV=b;return c;}
function N0(a){var b,c,d;if(a.hv===null)b=Vr(a.im,E5(a));else{b=HT(BG(a));c=a.im;d=E5(a);b=BM(A6H(b),C(29));AHq(c,d,b);b=K(b);}return b;}
var YW=G(0);
function Oz(){var a=this;B.call(a);a.iz=null;a.fQ=null;a.kL=null;}
var A$y=null;function A8z(a,b){var c=new Oz();AFR(c,a,b);return c;}
function A6E(a,b,c){var d=new Oz();AKJ(d,a,b,c);return d;}
function AFR(a,b,c){a.iz=b;if(c.length)a.fQ=ABs(c);else{a.fQ=P(BC,0);a.kL=P(BC,0);}}
function AKJ(a,b,c,d){a.iz=b;a.fQ=c;a.kL=d;}
function ABs(b){var c,d,e,f;if(!b.length)c=P(BC,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BC,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=FT(b[e]);e=e+1|0;}}}return c;}
function H0(a,b){var c,d;c=new ADL;d=a.iz.values();c.nG=a;c.zu=d;c.ls=b;ACA(c);}
function ZM(a){var b,c,d,e;b=a.kL;if(b===null){b=a.fQ;c=b.data;d=JE(a);e=c.length;b=C2(b,e+1|0);b.data[e]=d;b=b;a.kL=b;}return b;}
function JE(a){return FT(a.iz.name);}
function A5M(a){return a.fQ;}
function I7(a){return Vr(a.fQ,JE(a));}
function Qd(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AFH(){A$y=new VK;}
var AD2=G(0);
function ALx(){B.call(this);this.i7=null;}
function A7q(a){var b=new ALx();A2A(b,a);return b;}
function A2A(a,b){a.i7=b;}
function Y4(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.i7));}
function E2(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i7));}
function CW(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i7));}
function AZu(a){var b,c;b=a.i7.byteLength;c=new J;L(c);H(V(H(c,C(224)),b),C(225));return K(c);}
function AA1(){B.call(this);this.ww=null;}
function D7(a,b){AAT(a.ww,b);return 1;}
function Hy(){var a=this;B.call(a);a.N=0;a.be=0;}
function Ci(a,b,c){a.N=b;a.be=c;}
function ADc(a,b){a.N=b.N;a.be=b.be;}
function SF(a,b){var c;c=BP(a.N,b.N);if(c)return c;return BP(a.be,b.be);}
function Oe(){var a=this;B.call(a);a.p7=null;a.pb=null;}
function Mt(a){return a.p7.bs;}
function Ld(a){return a.p7.bw;}
function DN(){var a=this;B.call(a);a.s=null;a.T=0;a.gG=null;a.e6=null;a.eD=null;a.iB=null;a.hn=0;a.jF=0;a.j0=0;}
var A_l=0;var A_m=0;var A_d=0;function YP(a){var b=new DN();AL3(b,a);return b;}
function Ee(a){var b=new DN();AAq(b,a);return b;}
function AL3(a,b){var c;c=P(CA,1);c.data[0]=AKB(b);AAq(a,c);}
function AAq(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].x)|0;f=f+1|0;}a.T=d;Fc(a);}
function JL(a){return a.s.data.length;}
function Ke(a,b){return a.s.data[b];}
function G6(a,b){var c;c=KE(a,b);return c<=0?0:a.eD.data[c-1|0];}
function KE(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eD!==null&&!a.j0)){Wp(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+M(a.s.data[d].x)|0;a.eD.data[d]=e;d=d+1|0;}a.j0=0;}d=ACI(a.eD,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function OM(a,b){var c;c=a.s.data;if(!c.length)return null;return c[KE(a,b)];}
function H4(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.T){a.s=P(CA,0);Fc(a);a.T=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].x);i=M(a.s.data[f].x);j=BP(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==M(k.x)?1:0){g=a.s;a.s=AAM(g,e,P(CA,g.data.length-1|0));a.T=a.T-d|0;Fc(a);return;}a.s.data[e]=El(FH(Cy(k.x,0,b),DB(k.x,c)),k.b4,k.bG);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b
!=M(l.x))a.s.data[e]=El(Cy(l.x,0,b),l.b4,l.bG);e=e+1|0;}if(c==M(m.x))f=f+1|0;else if(c)a.s.data[f]=El(DB(m.x,c),m.b4,m.bG);g=a.s;a.s=AGZ(g,e,f,P(CA,(g.data.length-f|0)+e|0));}a.T=a.T-d|0;Fc(a);}
function I_(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DN,[Ee(P(CA,0)),a]);if(b>=a.T)return I(DN,[a,Ee(P(CA,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].x);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DN,[Ee(LS(c,0,P(CA,d))),Ee(LS(c,d,P(CA,f-d|0)))]);h=e[d];e=LS(c,0,P(CA,d+1|0));i=e.data;j=LS(c,d,P(CA,f-d|0));c=j.data;i[d]=El(Cy(h.x,0,b),h.b4,h.bG);c[0]=El(DB(h.x,b),h.b4,h.bG);return I(DN,[Ee(e),Ee(j)]);}
function ABf(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=M(f[d].x);if(b<=g)break;b=b-g|0;d=e;}}M1(a,d,b,c);}
function M1(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(GK(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=P(CA,1);h.data[0]=AKB(d);a.s=h;}else if(!b&&!c){h=P(CA,g+1|0);f=h.data;Da(e,0,h,1,g);f[0]=AKB(d);a.s=h;}else{i=f[b];if(c<=0)j=El(FH(d,i.x),i.b4,i.bG);else if(c>=M(i.x))j=El(FH(i.x,d),i.b4,i.bG);else{k=M(d);l=k+c|0;m=M(i.x)-c|0;e=B6(M(i.x)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.x,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.x,g+c|0);g=g+1|0;}j=El(Gz(e),i.b4,i.bG);}f[b]=j;}a.T=a.T
+M(d)|0;Fc(a);}
function PT(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<My(f)){if(Q(f.x,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function NX(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gG;if(!(e!==null&&e.data.length>=d)){a.gG=ANu(d);a.e6=BQ(d);a.hn=1;}Wp(a);if(!a.hn)A_m=A_m+1|0;else{f=0;g=0.0;A_l=A_l+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+M(j.x)|0;a.eD.data[h]=f;Cr(b,i[KZ(j)]);g=g+Ev(b,j.x);a.gG.data[h]=g;a.e6.data[h]=g+0.5|0;h=h+1|0;}a.T=f;a.hn=0;a.j0=0;}}
function Wp(a){var b;b=a.eD;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eD=BQ(a.s.data.length);a.j0=1;}}
function Ua(a){a.hn=1;a.iB=null;}
function Fc(a){Ua(a);a.jF=1;a.j0=1;}
function ABa(a,b,c,d){var e,f,g,h,i,j,k;if(a.iB===null)a.iB=P($rt_arraycls($rt_intcls()),a.s.data.length);e=a.iB.data[d];if(e===null){e=c.data;f=a.s.data[d];Cr(b,e[KZ(f)]);f=f.x;e=BQ(M(f)-1|0);c=GM(f);g=!d?0.0:a.gG.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;O$(f,c,0,k);h[i]=g+Ev(b,f)+0.5|0;i=k;}a.iB.data[d]=e;}return e;}
function Hf(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.hn&&a.e6!==null))NX(a,c,d);if(b>=a.T)return a.e6.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+M(g[f].x)|0;i=BP(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.e6.data[f];}return (ABa(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FS(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.e6.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hp(a,b){var c;if(b>=a.T)return b+1|0;c=KE(a,b);return a.eD.data[c];}
function FZ(a){var b,c,d,e;b=new J;F7(b,a.T);c=a.s.data;d=c.length;e=0;while(e<d){BM(b,c[e].x);e=e+1|0;}return K(b);}
function A3g(a){var b,c,d,e;b=a.s.data;c=b.length;if(c==1)d=AGT(b[0]);else{d=new J;L(d);BM(d,C(36));e=0;while(e<c){if(e>0)BM(d,C(37));H(d,b[e]);e=e+1|0;}BM(d,C(38));d=K(d);}return d;}
function AGY(){A_d=0;}
function Zp(){var a=this;B.call(a);a.fO=null;a.fl=null;}
function AZi(a,b){var c=new Zp();A0s(c,a,b);return c;}
function A0s(a,b,c){a.fO=b;a.fl=c;}
function Uz(a,b,c){var d;d=a.fO;if(d===null)return;AAk(a,d,b,c);}
function PR(a,b,c){var d;d=a.fO;if(d===null)return;ACN(a,d,b,c);}
function AAk(a,b,c,d){var e,f,g,h;e=b.e8.ce();while(e.cQ()){WN(a,e.cg(),c,d);}e=b.fP.ce();while(e.cQ()){f=e.cg();g=new T9;g.zY=a;E4(a,g,f,c,d);}h=b.h3.ce();while(h.cQ()){e=h.cg();WN(a,e.lM,c,d);f=new T$;f.x1=a;E4(a,f,e.le,c,d);}b=b.cX.ce();while(b.cQ()){AAk(a,b.cg(),c,d);}}
function WN(a,b,c,d){La(a,b.eh,c,d);}
function E4(a,b,c,d,e){var f,g;a:{if(c instanceof HZ){f=c.fH;g=new WZ;g.rR=a;g.rP=b;g.rO=d;g.rQ=e;FG(f,g);}else{if(!(c instanceof KB)){if(!(c instanceof JH))break a;f=c;E4(a,b,f.ik,d,e);E4(a,b,f.hP,d,e);return;}g=c.iw;f=new W0;f.Dc=a;f.Db=b;f.Da=d;f.C_=e;FG(g,f);}}if(c!==null){c=c.eJ;if(c!==null)b.me(c,C4(d),C4(e));}}
function La(a,b,c,d){var e;e=b.dt;if(e>=c)b.dt=e+d|0;}
function ACN(a,b,c,d){var e,f,g,h;e=b.e8.ce();while(e.cQ()){Kd(a,(e.cg()).eh,c,d);}e=b.fP.ce();while(e.cQ()){f=e.cg();g=new S9;g.v1=a;E4(a,g,f,c,d);}h=b.h3.ce();while(h.cQ()){e=h.cg();Kd(a,e.lM.eh,c,d);f=new S_;f.BA=a;E4(a,f,e.le,c,d);}b.e8.qd(new S8);b.fP.qd(new S7);b=b.cX.ce();while(b.cQ()){ACN(a,b.cg(),c,d);}}
function Kd(a,b,c,d){var e;e=b.dt;if(e>=c)b.dt=e-d|0;}
function LI(){var a=this;En.call(a);a.de=0;a.cc=null;a.c8=0;a.Dd=0.0;a.nI=0;}
function Kc(){var a=new LI();Rq(a);return a;}
function A0C(a,b){return P(Ia,b);}
function Rq(a){var b;b=AI4(16);a.de=0;a.cc=P(Ia,b);a.Dd=0.75;UC(a);}
function AI4(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E9(a){var b;if(a.de>0){a.de=0;b=a.cc;AGh(b,0,b.data.length,null);a.c8=a.c8+1|0;}}
function UC(a){a.nI=a.cc.data.length*a.Dd|0;}
function HL(a,b){return ACe(a,b)===null?0:1;}
function Ow(a){var b;b=new UD;b.Ac=a;return b;}
function CB(a,b){var c;c=ACe(a,b);if(c===null)return null;return c.cT;}
function ACe(a,b){var c,d;if(b===null)c=S2(a);else{d=b.qz();c=RU(a,b,d&(a.cc.data.length-1|0),d);}return c;}
function RU(a,b,c,d){var e;e=a.cc.data[c];while(e!==null&&!(e.mp==d&&AJU(b,e.cK))){e=e.c6;}return e;}
function S2(a){var b;b=a.cc.data[0];while(b!==null&&b.cK!==null){b=b.c6;}return b;}
function NB(a){var b;if(a.pz===null){b=new Q6;b.jI=a;a.pz=b;}return a.pz;}
function D2(a,b,c){var d,e,f,g;if(b===null){d=S2(a);if(d===null){a.c8=a.c8+1|0;d=Ux(a,null,0,0);e=a.de+1|0;a.de=e;if(e>a.nI)ADn(a);}}else{e=b.qz();f=e&(a.cc.data.length-1|0);d=RU(a,b,f,e);if(d===null){a.c8=a.c8+1|0;d=Ux(a,b,f,e);e=a.de+1|0;a.de=e;if(e>a.nI)ADn(a);}}g=d.cT;d.cT=c;return g;}
function Ux(a,b,c,d){var e,f;e=new Ia;WV(e,b,null);e.mp=d;f=a.cc.data;e.c6=f[c];f[c]=e;return e;}
function AKL(a,b){var c,d,e,f,g,h,i,j;c=AI4(!b?1:b<<1);d=P(Ia,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cc.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.mp&b;j=h.c6;h.c6=e[i];e[i]=h;h=j;}f=f+1|0;}a.cc=d;UC(a);}
function ADn(a){AKL(a,a.cc.data.length);}
function LU(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.cc.data[0];while(e!==null){if(e.cK===null)break a;b=e.c6;d=e;e=b;}}else{f=Kj(b);g=a.cc.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.mp==f&&AJU(b,e.cK))){h=e.c6;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.c6=e.c6;else a.cc.data[c]=e.c6;a.c8=a.c8+1|0;a.de=a.de-1|0;}if(e===null)return null;return e.cT;}
function AJU(b,c){return b!==c&&!b.bP(c)?0:1;}
var VK=G();
function A1s(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function CA(){var a=this;B.call(a);a.x=null;a.b4=0;a.bG=0;}
function AKB(a){var b=new CA();AZX(b,a);return b;}
function El(a,b,c){var d=new CA();ACy(d,a,b,c);return d;}
function AZX(a,b){ACy(a,b,0,0);}
function ACy(a,b,c,d){a.x=b;a.b4=c;a.bG=d;}
function KZ(a){return a.bG&3;}
function JI(b,c){return (!b?0:2)+(!c?0:1)|0;}
function My(a){return M(a.x);}
function AGT(a){var b,c,d,e;b=A6H(a.x);c=a.bG;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BM(b,C(226));if(d)BM(b,C(227));if(e)BM(b,C(228));return K(b);}
var Ob=G(LI);
function AAY(){var a=this;B.call(a);a.dn=null;a.fg=0;}
var A_n=null;function AIi(a){var b=new AAY();AIK(b,a);return b;}
function AIK(a,b){a.fg=0;a.dn=b;}
function Rg(a,b){var c;if(b.eY)return b;b=B9(b.bu);while(true){if(!Cb(b))return null;c=Rg(a,Cc(b));if(c!==null)break;}return c;}
function Yk(a,b,c){var d,e,f,g;d=N5(a,a.dn,b);if(d===null)return;b=c.ct;e=b===null?A_o:b.cX;f=c.bu;c=a.dn;if(d===c){if(c.ct===null)c.ct=b;b=new ABe;b.zV=a;FG(f,b);b=new ABd;b.vZ=a;e.fu(b);b=a.dn;b.bu=f;b.ct.cX=e;b.eY=0;return;}if(!EP(f)){c=d.hJ;if(c!==null){b=new YL;b.rV=c;FG(f,b);g=Lv(c.bu,d);if(g==(-1))GP(c.bu,f);else{EZ(c.bu,g);AKe(c.bu,g,f);}}}b=d.ct;if(b!==null){b=b.hD;c=new Tf;c.ts=b;e.fu(c);g=Lv(b.cX,d.ct);if(g==(-1))GP(b.cX,e);else{b.cX.mG(g);b.cX.vo(g,e);}}}
function N5(a,b,c){var d,e,f,g;d=b.b2;if(d.b5==c.b5&&d.b3==c.b3?1:0){d=B9(b.bu);while(Cb(d)){e=N5(a,Cc(d),c);if(e!==null)return e;}return b;}b=B9(b.bu);while(true){if(!Cb(b))return null;d=Cc(b);f=c.b5;g=c.b3;e=d.b2;if(e.b5<=f&&g<=e.b3?1:0){e=N5(a,d,c);if(e!==null)break;}}return e;}
function ACr(a,b,c){BA(c,b.b2);b=B9(b.bu);while(Cb(b)){ACr(a,Cc(b),c);}}
function YO(a,b,c){a.fg=0;LL(a,a.dn,b,c);}
function LL(a,b,c,d){var e;if(Dh(b)<c)return;a:{if(Dq(b)>c){Mk(b,d);HG(b,d);b=B9(b.bu);while(Cb(b)){LL(a,Cc(b),c,d);}}else{if(!Nc(b,c)){if(a.fg)break a;if(Dh(b)!=c)break a;}HG(b,d);if(Dq(b)==c&&a.fg)Mk(b,d);e=B9(b.bu);while(Cb(e)){LL(a,Cc(e),c,d);}if(!a.fg){b.eY=1;a.fg=1;}}}}
function V_(a,b,c){a.fg=0;Ng(a,a.dn,b,c);}
function Ng(a,b,c,d){var e,f,g,h,i,j;if(Dh(b)<c)return;e=Dq(b);f=c+d|0;if(e>f){e= -d|0;Mk(b,e);HG(b,e);g=B9(b.bu);while(Cb(g)){Ng(a,Cc(g),c,d);}b.bu=XB(a,b.bu);}else{h=b.b2;if(c<=h.b5&&h.b3<=f?1:0){if(b===a.dn){Ms(b,0);Nf(b,0);h=b.ct;if(h!==null)h.cX.jE();}else{Ms(b,(-1));Nf(b,(-1));h=b.ct;if(h!==null){AFb(h);b.ct=null;}}IO(b.bu);}else{e=Nc(b,c);f=Nc(b,f);if(e&&f)HG(b, -d|0);else if(e)Nf(b,c);else{if(!f)return;Ms(b,c);HG(b, -d|0);}h=B9(b.bu);while(Cb(h)){Ng(a,Cc(h),c,d);}h=Mh(b.bu);g=Y8(0);i=new SK;j=new ADw;j.GL
=i;j.k4=g;while(Ou(h,j)){}if(!j.k4.oR&&!a.fg)b.eY=1;else a.fg=1;b.bu=XB(a,b.bu);}}}
function XB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BO();d=null;e=A_n;f=b.cq;g=b.p;if(e===null)e=A94;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}Lp(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b7=b.b7+1|0;b=B9(b);while(Cb(b)){m=Cc(b);if(Dq(m)==Dh(m))continue;if(!m.eY){if(d!==null){BA(c,d);d=null;}BA(c,m);}else if(d===null)d=m;else{n=AV8(Le(Be(Dq(d),Dq(m)),Bd(Dh(d),Dh(m)),d.b2.f4),d.hJ,d.ct);n.eY=1;d=m.ct;if(d===null)d=n;else{AFb(d);d=n;}}}if(d!==null)BA(c,d);return c;}
function AEB(a,b,c,d){var e,f,g,h,i,j;if((Dh(c)-Dq(c)|0)<43)e=Cy(d,Dq(c),Dh(c));else{e=Cy(d,Dq(c),Dq(c)+20|0);f=Cy(d,Dh(c)-20|0,Dh(c));g=new J;L(g);H(H(H(g,e),C(169)),f);e=K(g);}e=ADt(e,C(175),C(229));f=Bj();g=BT(c);h=new J;L(h);i=V(h,b);Br(i,32);g=H(i,g);Br(g,9);H(g,e);Bf(f,K(h));c=B9(c.bu);j=b+1|0;while(Cb(c)){AEB(a,j,Cc(c),d);}}
function AIU(){A_n=new VZ;}
function AM1(){var a=this;B.call(a);a.b5=0;a.b3=0;a.f4=0;}
function Le(a,b,c){var d=new AM1();AZT(d,a,b,c);return d;}
function AZT(a,b,c,d){a.b5=b;a.b3=c;a.f4=d;}
function AVf(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.b5==c.b5&&a.b3==c.b3&&a.f4==c.f4?1:0;}return 0;}
function AJQ(a){var b,c,d,e;b=a.b5;c=a.b3;d=a.f4;e=new J;L(e);Br(e,40);Br(V(H(V(H(V(e,b),C(37)),c),C(37)),d),41);return K(e);}
function AY4(a,b){var c;b=b;c=BP(a.b5,b.b5);if(!c)c=BP(b.b3,a.b3);return c;}
var VZ=G();
function ASg(a,b,c){var d;b=b;c=c;b=b.b2;c=c.b2;d=BP(b.b5,c.b5);if(!d)d=BP(c.b3,b.b3);return d;}
function AAs(){var a=this;B.call(a);a.b2=null;a.hJ=null;a.bu=null;a.ct=null;a.eY=0;}
function AV8(a,b,c){var d=new AAs();AIg(d,a,b,c);return d;}
function AIg(a,b,c,d){a.eY=0;a.b2=b;a.hJ=c;a.bu=BO();a.ct=d;}
function AJc(b){return AAC(b,null);}
function AAC(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=Le(d,e,f);j=new AAs;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AIg(j,i,null,l);m=0;while(m<g){l=AAC(b,c);l.hJ=j;BA(j.bu,l);m=m+1|0;}return j;}
function AFY(b,c,d){var e,f,g,h,i;a:{e=b.b2;f=b.bu;g=e.b5;h=e.b3;i=e.f4;Bu(c,g);Hl(c,h,i);Bu(c,f.p);if(d!==null){e=b.ct;if(e!==null&&ADZ(d,e)){g=(OS(d,b.ct)).br;break a;}}g=(-1);}Bu(c,g);b=B9(f);while(Cb(b)){AFY(Cc(b),c,d);}}
function Dq(a){return a.b2.b5;}
function Dh(a){return a.b2.b3;}
function Ms(a,b){a.b2.b5=b;}
function Nf(a,b){a.b2.b3=b;}
function Mk(a,b){var c;c=a.b2;c.b5=c.b5+b|0;}
function HG(a,b){var c;c=a.b2;c.b3=c.b3+b|0;}
function Nc(a,b){return Dq(a)<=b&&b<Dh(a)?1:0;}
function ANZ(a){var b,c,d;b=AJQ(a.b2);c=a.eY;d=new J;L(d);JR(H(H(d,b),C(37)),c);return K(d);}
function AOL(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.b2,c.b2)&&BR(a.bu,c.bu)?1:0;}return 0;}
var JJ=G(0);
function Hg(){var a=this;B.call(a);a.cK=null;a.cT=null;}
function A_p(a,b){var c=new Hg();WV(c,a,b);return c;}
function WV(a,b,c){a.cK=b;a.cT=c;}
function AZw(a,b){var c,d;if(a===b)return 1;if(!Jx(b,JJ))return 0;a:{b:{c:{d:{c=b;b=a.cK;if(b!==null){if(!b.bP(c.cK))break c;else break d;}if(c.cK!==null)break c;}b=a.cT;if(b!==null){if(!b.bP(c.cT))break c;else break b;}if(c.cT===null)break b;}d=0;break a;}d=1;}return d;}
function APq(a){var b,c,d;b=a.cK;c=a.cT;d=new J;L(d);b=H(d,b);Br(b,61);H(b,c);return K(d);}
function Ia(){var a=this;Hg.call(a);a.mp=0;a.c6=null;}
function N$(){var a=this;LQ.call(a);a.zk=null;a.rS=null;}
function AF2(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.zk;e=0;f=0;g=a.rS;a:{while(true){if((e+32|0)>f&&Eg(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ck(b)+j|0,i.length);PU(b,d,j,f-j|0);e=0;}if(!Eg(c)){k=!Eg(b)&&e>=f?A$N:A$M;break a;}i=g.data;j=Be(Ck(c),i.length);l=new Yg;l.q4=b;l.zJ=c;k=AHk(a,d,e,f,g,0,j,l);e=l.v6;j=l.w3;if(k===null){if(!Eg(b)&&e>=f)k=A$N;else if(!Eg(c)&&e>=f)k=A$M;}AED(c,g,0,j);if(k!==null)break;}}FI(b,b.bd-(f-e|0)|0);return k;}
var Rd=G(N$);
function AHk(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(OC(h,2))break a;i=A$M;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!O0(l)){if((f+3|0)>g){j=j+(-1)|0;if(OC(h,3))break a;i=A$M;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CZ(l)){i=EF(1);break a;}if
(j>=d){if(Eg(h.q4))break a;i=A$N;break a;}c=j+1|0;m=k[j];if(!Dn(m)){j=c+(-2)|0;i=EF(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(OC(h,4))break a;i=A$M;break a;}k=e.data;o=E1(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.v6=j;h.w3=f;return i;}
var Jq=G(EH);
var Pq=G();
function AWT(a,b){return b.text();}
function Ps(){var a=this;B.call(a);a.uB=null;a.uA=null;}
function AWe(a,b){var c,d,e,f;c=a.uB;d=a.uA;e=b.length;f=new PY;f.BR=b;c.g(AP8((AMk(e,f)).kG,ADk(d)));}
var Pr=G();
function AYj(a,b){AI3(b);}
function Jf(){var a=this;B.call(a);a.bv=null;a.Gw=null;a.b$=null;a.j_=null;a.lA=null;a.eg=null;a.fM=null;a.CL=null;a.qe=null;a.po=null;}
function A_q(a,b,c,d,e,f){var g=new Jf();L7(g,a,b,c,d,e,f);return g;}
function IW(){var b,c,d,e,f,g,h,i,j;b=new Jf;c=new Kx;d=new HD;FW();Lh(d,A_r);MU(c,d,B0(A$$),B0(A_s),B0(A_t),B0(A$$),B0(A_u),B0(A_v),B0(A_w),B0(A_x),B0(A_y),B0(A_z));e=ALd(S(C(230)));f=(ALj()).data;g=f.length;h=P(KM,g);i=h.data;j=0;while(j<g){i[j]=f[j].os;j=j+1|0;}L7(b,c,e,h,AL2(S(C(231)),S(C(232)),S(C(233)),S(C(234))),Fs(),AFI(S(C(235)),S(C(236)),S(C(237)),S(C(238))));return b;}
function Gu(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new Jf;c=new Kx;d=new HD;AQe();Lh(d,A_A);MU(c,d,B0(A_B),B0(A_C),B0(A_D),B0(A_B),B0(A_E),B0(A_F),B0(A_G),B0(A_H),B0(A_I),B0(A_J));e=ALd(S(C(239)));f=(AG7()).data;g=f.length;h=P(KM,g);i=h.data;j=0;while(j<g){i[j]=f[j].lx;j=j+1|0;}k=AL2(S(C(240)),S(C(241)),S(C(242)),S(C(243)));l=new Jh;m=new Jo;AXT();n=A_K;O8(m,n,A_L,A_M,A_N,A_O,n);Mg(l,m,AIA(),AI9(S(C(244)),S(C(245)),S(C(246))),AIA(),AJx(1,0.17499999701976776),A_P,A_Q);L7(b,c,e,h,k,l,AFI(S(C(235)),S(C(236)),S(C(237)),
S(C(247))));return b;}
function L7(a,b,c,d,e,f,g){var h;h=d.data;a.fM=DA(C(168),17.0);a.CL=DA(C(157),15.0);a.qe=DA(C(168),15.0);a.po=DA(C(14),15.0);a.bv=b;a.Gw=c;a.j_=d;a.lA=e;if(h.length>=15){a.b$=f;a.eg=g;return;}b=new BX;X(b);N(b);}
function XT(a,b){if(b===null)b=a.bv.es;return b;}
function KS(){var a=this;Cq.call(a);a.d7=null;a.or=null;}
function A73(a){var b=new KS();AJl(b,a);return b;}
function AJl(a,b){var c,d,e,f;G8(a,b,0);c=IT(a.v);a.or=c;d=GW(c);a.d7=d;Nl(a.q,d);c=b.n.bA;d=new Zw;d.sk=a;Z(c,d);c=b.n.bA;d=new GJ;e=new Zu;e.CA=a;G5(d,b,e);Z(c,d);c=a.d7;d=b.n;f=new ADs;f.xk=c;Z(d.bY,c);Z(d.fD,f);b=b.n.cA;c=new Zv;c.yV=a;Z(b,c);JK(a);}
function AK3(a,b){var c,d;c=a.d7;d=new ACU;d.vU=a;d.vV=b;F4(c,b,d);}
function A02(a,b){if(GT(a.v,b))Mj(a.d7);}
function A4S(a,b){var c;c=Qw(a,b);return LZ(a.d7,b)|c;}
function AQU(a){HP(a);IF(a.d7);J$(a.v);}
function A6c(a){return EL(0);}
function ANo(a,b,c){var d;IV(a,b,c);d=a.d7;MR(d,d.i,b,c);}
function AZS(a,b){BF(b);F5(a.or,b);E7(a.d7,b);}
function AKO(a,b){if(b.bh!=121)return 0;return 1;}
function AF4(a,b){var c,d,e;if(Dz(a.q,a.d7)){c=a.or;b=b.j;d=a.d7;e=new ABz;e.Be=a;I0(c,b,d,a,d,a,e);}return 1;}
function AJK(){var a=this;Cz.call(a);a.zN=null;a.pA=null;a.kD=null;a.eu=null;a.md=null;a.hK=null;a.eK=null;a.jX=null;a.q1=null;a.jm=null;a.qG=null;a.qH=null;a.p0=null;a.z6=null;a.DW=null;a.tE=0;}
function A8d(a){var b=new AJK();A1W(b,a);return b;}
function A1W(a,b){var c,d,e,f;Et(a,b);c=(IW()).bv.es;a.zN=c;a.pA=AMW(c);a.kD=new Bh;a.eu=Lb();a.md=Lb();a.hK=TY(0,0,3,3);a.eK=Ir(0,0,300,300);a.jX=A0J();d=P(BC,4);e=d.data;e[0]=C(181);e[1]=C(182);e[2]=C(200);e[3]=C(199);a.q1=d;a.jm=P(KH,e.length);c=b.n.bY;f=new UK;f.fG=a;Z(c,f);c=b.n.bA;f=new ZX;f.De=a;Z(c,f);c=b.n.o2;f=new ZW;f.sY=a;Z(c,f);c=b.n.g7;f=new ZV;f.EH=a;Z(c,f);c=b.n.mI;f=new ZU;f.Fk=a;Z(c,f);c=b.n.cA;f=new ZT;f.FN=a;Z(c,f);b=b.n.fD;c=new ZS;c.BY=a;Z(b,c);a.qG=ADR(a,1);a.qH=ADR(a,0);SM(a,a.eu,a.qG);SM(a,
a.md,a.qH);a.p0=AE_(a,0);a.z6=AE_(a,1);F3(a.eK,a.p0);Gc(a.eK);HS(a.eK,DD(169,183,198));Fv(a.eK,a.zN);Cv(a.eu.bb,1.0,1.0,1.0,1.0);Fv(a.eu,a.eK.bq);BL(a.hK.bq,a.pA);}
function SM(a,b,c){F3(b,c);Gc(b);}
function Te(a,b){IN(DX(),0.5+DX()*0.5,0.5+DX()*0.5,1.0,b.bb);}
function ADR(a,b){var c,d;c=Eb(a.C.Q,200,100,b);HM(c,C(248),11.0);B1(c,C(249),0.0,20.0);Kq(c,255,0,0);B1(c,C(249),0.25,40.0);Kq(c,0,255,0);B1(c,C(249),0.5,60.0);Kq(c,0,0,255);B1(c,C(249),0.75,80.0);d=C3(a.C.Q);CR(d,c);EK(c);return d;}
function AE_(a,b){var c,d,e,f;c=Eb(a.C.Q,255,100,b);HM(c,C(168),10.0);d=Bj();e=$rt_str(c.dk.font);f=new J;L(f);H(H(f,C(250)),e);Bf(d,K(f));Ev(c,C(251));B1(c,C(251),0.0,20.0);B1(c,C(251),0.25,40.0);B1(c,C(251),0.5,60.0);B1(c,C(251),0.75,80.0);e=C3(a.C.Q);CR(e,c);EK(c);return e;}
function ANL(a,b){var c;a.tE=a.tE+1|0;c=b/5.0;IN(c-(c|0),1.0,1.0,1.0,a.hK.bb);return ACj(a.jX,b);}
function APH(a){var b,c,d,e,f,g,h,i;b=a.C.Q;EU(b,a.pA);c=a.jm.data;d=c.length;e=0;while(e<d){AAR(c[e],b,0,0);e=e+1|0;}f=a.eK;g=f.w;g.b=(a.kD.b-f.u.b|0)-5|0;g.a=0;Ca(b,0);h=0;while(h<7){f=a.eK;ER(f,b,a.p0,Bc(h,10+((10*f.u.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eK;f.w.b=(a.kD.b-(f.u.b*2|0)|0)-10|0;h=0;while(h<7){g=a.z6;f=a.eK;f.w.a=Bc(h,10+((10*f.u.a|0)/15|0)|0)+5|0;TD(f,b,g,1);h=h+1|0;}TD(a.eu,b,a.qG,1);Ca(b,1);g=a.md;f=a.qH;i=g.w;h=i.a;d=i.b;g=g.u;GO(b,b.lj);G0(b.lj,b.bc,h,d,g,b.dd);Oo(b.lj,b.bc,f);Gf(b);Ca(b,0);f
=a.DW;if(f!==null)WQ(a.hK,b,f,0,0,0.0);ADl(a.jX,b,new Bh);Nm(b,C(252));}
function ARZ(a,b,c){var d,e,f,g,h,i,j,k;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(253)),e);Bf(d,K(f));d=Bj();f=new J;L(f);Df(H(f,C(254)),c);Bf(d,K(f));g=Cj(30.0,c);h=Cj(10.0,c);i=0;while(true){j=a.jm.data;if(i>=j.length)break;k=1+i|0;j[i]=TY(Bc(h,k)+Bc(g,i)|0,g,g,g);Te(a,a.jm.data[i]);i=k;}Y(a.hK.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eu;Y(f.w,((b.a/2|0)-f.u.a|0)-10|0,50);Y(a.md.w,(b.a/2|0)+10|0,50);Ct(a.kD,b);}
function X0(a,b){var c,d,e,f,g;c=Bj();d=!b.kc?C(255):C(256);e=b.er;f=b.bh;g=b.AY;b=new J;L(b);JR(H(V(H(H(H(b,d),e),C(257)),f),C(258)),g);Bf(c,K(b));return 0;}
function ACq(){var a=this;Cz.call(a);a.FQ=null;a.lz=null;a.jo=null;a.ir=null;a.dv=null;a.d8=null;a.nx=null;a.nk=null;a.j1=0;a.i2=null;a.i1=null;}
function RV(a,b,c){F3(b,c);Gc(b);}
function AFq(a,b,c,d,e,f){var g,h;g=Eb(f,c,120,b);Cr(g,e);e=!b?C(259):C(260);h=new J;L(h);H(H(H(h,e),d),C(155));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C3(f);CR(h,g);EK(g);return h;}
function ATv(a,b){return 0;}
function AYU(a){var b,c,d,e,f,g,h,i;b=a.C.Q;EU(b,a.lz);Ca(b,0);c=a.jo;d=c.b;e=a.ir;f=d-e.b|0;g=c.a-e.a|0;Bv(b,0,0,e,a.dv.bq);Bv(b,g,0,a.ir,a.d8.bq);Bv(b,0,f,a.ir,a.dv.bb);Bv(b,g,f,a.ir,a.d8.bb);c=a.dv;e=c.w;h=e.b;i=((a.jo.b*3|0)/4|0)-(c.u.b/2|0)|0;IP(c,b,e.a,h,a.i2,0,1);c=a.dv;IP(c,b,c.w.a,i,a.i2,1,1);c=a.d8;IP(c,b,c.w.a,h,a.i1,0,0);e=a.d8;IP(e,b,e.w.a,i,a.i1,1,0);Nm(b,C(252));}
function A0c(a,b,c){var d,e;Ct(a.jo,b);Y(a.ir,b.a/2|0,b.b/2|0);d=a.jo.b/4|0;e=a.dv;d=d-(e.u.b/2|0)|0;Y(e.w,(b.a/4|0)-(a.j1/2|0)|0,d);Y(a.d8.w,((b.a*3|0)/4|0)-(a.j1/2|0)|0,d);}
function Yz(){var a=this;Cq.call(a);a.zI=null;a.fn=null;a.dQ=null;a.o5=null;}
function ARs(a,b,c){var d;d=Fw(a.q,a.o5);J0(a.fn,d,a.q);J0(a.dQ,d,a.q);}
function Ss(b){return Jl(b,VT());}
function Jl(b,c){var d;d=TW();OL(d,NP(b,Ku(c,25)),!b?null:Jl(b-1|0,c));OL(d,NP(b,Ku(c,20)),!b?null:Jl(b-1|0,c));OL(d,NP(b,Ku(c,15)),!b?null:Jl(b-1|0,c));OL(d,NP(b,Ku(c,10)),!b?null:Jl(b-1|0,c));return Je(d);}
function NP(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(29)),c);c=K(d);}return c;}
function OL(b,c,d){if(d!==null)Ij(b,c,d);else{d=new Wl;d.sH=c;EB(b,c,d);}}
function AQh(a,b,c){var d,e;IV(a,b,c);b=a.q.bT;d=EM(a.fn);e=EM(a.dQ);NJ(a.fn,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);NJ(a.dQ,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AZN(a){var b,c,d,e,f,g,h,i;HP(a);b=a.C.Q;Ca(b,1);c=a.zI;d=a.q;e=d.bT;Y(c.oi,e.a,Cj(2.0,d.cm));Y(c.oL,Cj(2.0,d.cm),e.b);FW();f=A_y;g=d.bN;h=e.b/2|0;i=c.oi;Bv(g,0,h-(i.b/2|0)|0,i,f);g=d.bN;h=e.a/2|0;c=c.oL;Bv(g,h-(c.a/2|0)|0,0,c,f);MC(a.fn,a.q);MC(a.dQ,a.q);J$(a.v);Ca(b,0);}
function AR1(a,b){var c,d;c=Og(a.fn,b.j,a.q.c3);d=Og(a.dQ,b.j,a.q.c3);return !c&&!d?0:1;}
function AOq(a,b,c,d){var e,f;e=OE(a.fn,b.j,c,d);f=OE(a.dQ,b.j,c,d);return !e&&!f?0:1;}
function ABR(){Cq.call(this);this.k2=null;}
function APw(a,b,c){if(b===0.0)Z6(a);}
function Z6(a){var b,c,d,e,f,g,h,i;b=a.k2;if(b!==null){IJ(a.v,b);Kh(b);}b=(IW()).b$;c=A9q(a.q,new V8);d=DA(C(157),14.0);e=ARq();f=0;while(f<300){g=Do(f);h=new Tu;h.Cg=C(261);h.Cd=g;h.Ce=C(262);Xb(e,C(261),g,C(262),h);f=f+1|0;}X9(c,AEl(e));W7(c,b,d);g=AFM(a.q);i=G2(c,a.q);JB(i,b.nn,b.pl);Ly(g,i);Eq(g,b);CX(g,C(146));a.k2=g;DV(a.v,g);Q$(a);}
function AOF(a,b,c){IV(a,b,c);Q$(a);}
function Q$(a){var b,c,d;b=a.q.bT;EE(a.k2,BK((b.a*2|0)/10|0,(b.b*4|0)/10|0),BK((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.k2;b=AJw(c.Y.k);d=new J;L(d);H(H(d,C(263)),b);CX(c,K(d));}
function XW(){var a=this;H5.call(a);a.mJ=null;a.ig=null;a.gy=null;a.kF=null;a.sC=null;a.kA=null;a.iu=null;a.h1=null;a.l4=0;a.ie=0;}
function P_(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.ig.p>0){d=DX();e=a.ig;f=d*(e.p-1|0)|0;e=EZ(e,f);EZ(a.gy,f);f=a.ie;g=e.u;a.ie=f-Bc(g.a,g.b)|0;Jj(a.mJ,e.dH);}c=c+1|0;}}
function Mq(a,b){var c,d,e,f,g,h,i,j;c=KF(a.q);Cr(c,a.kF);d=0;while(d<b){e=Ku(a.kA,1+(DX()*19.0|0)|0);f=Lb();g=f.dH;h=a.mJ;BF(c);i=new RO;i.vk=c;BL(g,KP(h,e,i));(Wk(DX(),1.0,1.0,f.bq)).bC=0.5;h=f.w;g=f.dH;Y(h,g.bp|0,g.bt|0);h=f.u;g=f.dH;Y(h,g.bi|0,g.bC|0);BA(a.gy,e);BA(a.ig,f);j=a.ie;h=f.u;a.ie=j+Bc(h.a,h.b)|0;d=d+1|0;}a.h1=Na(a.mJ);}
function A4l(a){var b,c,d,e,f,g,h,i;HP(a);b=a.C.Q;Ca(b,1);c=a.q.bN;if(a.gy.p){d=a.h1;d=H1(c,d.a,d.b);Cr(d,a.kF);e=a.kF.ey;Bv(c,0,0,a.h1,a.sC);f=0;while(f<a.gy.p){g=BI(a.ig,f);h=BI(a.gy,f);g=g.dH;B1(d,h,g.bp,g.bt+e);f=f+1|0;}g=a.iu;if(!(g!==null&&BU(g)==a.h1.a&&CT(a.iu)==a.h1.b))a.iu=BY(a.iu,C3(c));CR(a.iu,d);EK(d);i=0;while(i<a.gy.p){d=BI(a.ig,i);HS(d,Cs(0));ER(d,c,a.iu,0,0);i=i+1|0;}}Ca(b,0);}
function ANE(a,b){var c,d;if(a.l4){c=a.h1;d=Be(Bc(c.a,c.b),2211840);if(a.ie/d<=0.7)Mq(a,Ec(a.kA,5));else P_(a,Ec(a.kA,5));}return a.l4;}
function TA(){var a=this;Cz.call(a);a.eM=null;a.ij=null;a.jn=null;a.pr=null;a.ff=0;a.vL=0;a.sD=null;a.mX=0;a.yg=0;a.yE=null;a.Bm=null;}
function ANm(a){var b,c;b=a.ff;c=new J;L(c);V(H(c,C(264)),b);$rt_globals.console.info($rt_ustr(K(c)));EU(a.eM,a.sD);KJ(a.jn,a.ff,0,HJ(a),5000,a.pr.a,20);Ca(a.eM,1);Wt(a.jn,a.eM);Ca(a.eM,0);b=a.ff;c=new J;L(c);V(H(c,C(264)),b);$rt_globals.console.info($rt_ustr(K(c)));ACV(a.ij,a.ff/a.mX|0,a.eM);ACa(a.ij,a.ff,HJ(a),a.Bm,a.eM);}
function AXt(a,b,c){a.pr=b;S6(a.ij,BK(0,0),50,HJ(a),c);TK(a.ij,a.eM,0,HJ(a));}
function VL(a){return 5000-HJ(a)|0;}
function HJ(a){return Be(a.vL,a.pr.b);}
function Dw(){var a=this;Cz.call(a);a.qw=null;a.hd=null;a.rf=0.0;}
function A_R(a){var b=new Dw();H7(b,a);return b;}
function H7(a,b){Et(a,b);a.qw=AKs(0,0,64);a.hd=new Bh;GA(b.bH,Ka(BG(a)));}
function ABh(a){EU(a.C.Q,a.qw);}
function Tv(a,b,c){Ct(a.hd,b);a.rf=c;}
var RS=G(Dw);
var Yf=G(Cq);
function Hx(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.bH;f=new RN;f.Et=a;f.u1=b;g=P(B,1);h=g.data;i=BQ(1);i.data[0]=b;h[0]=i;CO(e,f,C(265),g);d=d+1|0;}}
function AMl(b){var c;c=b.data;AJZ(c[0],c[1],Y4(I6(b,2)));}
function AJZ(b,c,d){var e,f,g,h,i;d=d.data;e=Bj();b=BT(b);c=BT(c);f=new J;L(f);H(H(H(H(f,C(266)),b),C(267)),c);Bf(e,K(f));b=Bj();g=d.length;h=1;i=0;while(i<g){h=(31*h|0)+d[i]|0;i=i+1|0;}c=new J;L(c);V(H(V(H(c,C(268)),g),C(269)),h);Bf(b,K(c));}
function Xy(){var a=this;Dw.call(a);a.fd=null;a.gY=null;a.n9=null;a.B1=null;a.qV=null;}
function AQ9(a,b){b=b/5.0;IN(b-(b|0),1.0,1.0,1.0,a.gY.bb);return 0;}
function AZB(a){ABh(a);ER(a.fd,a.C.Q,a.B1,0,0);WQ(a.gY,a.C.Q,a.n9,0,0,0.0);Nm(a.C.Q,C(252));}
function A58(a,b,c){var d,e,f;Tv(a,b,c);Y(a.gY.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.fd;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Ty(){var a=this;Dw.call(a);a.hg=null;a.rw=null;a.mU=null;a.kW=null;a.kf=null;}
function A6O(a){var b,c,d,e,f,g;ABh(a);b=a.C.Q;c=a.kW;Mf(b,c.a,c.b,a.kf);b=a.hg;c=a.rw;d=a.hd;e=a.C.Q;f=0;while(true){g=0;while(true){ER(b,e,c,g,f);g=g+BU(c)|0;if(g>=d.a)break;}f=f+CT(c)|0;if(f>=d.b)break;}Gq(a.C.Q);}
function AQQ(a,b,c){Tv(a,b,c);Y(a.kf,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ABC(){var a=this;Cz.call(a);a.eV=null;a.pc=null;a.g1=null;a.ck=null;a.ft=0;a.iX=null;a.fT=0;a.EV=20;a.Gz=11;a.Fh=220;a.mx=null;a.F1=5000;a.iF=0;a.g9=null;}
function AWh(a){var b,c,d,e,f,g,h;b=a.iX;c=a.fT;d=a.mx;KJ(b,c,0,d.b,5000,d.a,20);Ca(a.eV,1);Wt(a.iX,a.eV);if(a.ck===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.pc,Do(e),0.0,c);}b=C3(a.eV);a.ck=b;CR(b,a.pc);}if(a.fT<=a.ft)while(true){f=a.ft;if(f<=a.fT)break;a.ft=f-20|0;b=a.g1;g=a.iF-1|0;a.iF=g;B1(b,Do(g),0.0,20.0);J7(a.ck,a.g1,0,a.ft%220|0);E3(a.g1);}else while(a.ft<(a.fT-20|0)){b=a.g1;g=a.iF+1|0;a.iF=g;B1(b,Do((g+11|0)-1|0),0.0,20.0);J7(a.ck,a.g1,0,a.ft%220|0);E3(a.g1);a.ft=a.ft+20|0;}b=Ir(0,0,BU(a.ck),CT(a.ck));IR(b,
0,0,BU(a.ck),CT(a.ck));HS(b,a.g9.data[0]);Fv(b,a.g9.data[1]);ER(b,a.eV,a.ck,400,0);g=a.fT%220|0;f=Be(CT(a.ck)-g|0,200);d=Ir(0,0,BU(a.ck),f);IR(d,0,g,BU(a.ck),f);HS(d,a.g9.data[0]);Fv(d,a.g9.data[1]);ER(d,a.eV,a.ck,0,0);h=Ir(0,f,BU(a.ck),(CT(a.ck)-f|0)-20|0);IR(h,0,0,BU(a.ck),(CT(a.ck)-f|0)-20|0);HS(h,a.g9.data[1]);Fv(h,a.g9.data[0]);ER(h,a.eV,a.ck,0,0);}
function AZP(a,b,c){Ct(a.mx,b);}
function A33(a,b){return 0;}
function AA$(a){return 5000-a.mx.b|0;}
function KK(){Dw.call(this);this.en=0;}
function AAQ(a){var b,c;b=a.C.bH;c=new Ve;c.yB=a;Sl(b,c,XA(a));}
function Q9(a){var b,c,d,e;b=a.en+1|0;a.en=b;c=Ka(F(KK));d=new J;L(d);H(H(V(H(d,C(270)),b),C(29)),c);e=K(d);c=a.C.bH;d=new WM;d.yN=e;Up(c,e,d,XA(a));}
function XA(a){var b;b=new Z1;b.CU=a;return b;}
function ARP(a,b,c,d){a:{switch(c){case 0:break;case 2:Q9(a);break a;default:break a;}AAQ(a);}return 1;}
function Th(){var a=this;Dw.call(a);a.vd=null;a.gH=null;a.lW=null;a.pT=null;a.wL=null;}
function AW3(a){var b,c,d,e,f,g,h,i;if(a.lW===null){b=a.C.Q;c=a.wL;d=II(b,c.is,Cj(c.hf,a.rf));Cr(b.co,d);e=C5(Ev(b.co,C(271)));f=Bj();g=d.pw;c=new J;L(c);Df(H(c,C(272)),g);Bf(f,K(c));h=NI(d,1.1799999475479126);c=Bj();i=new J;L(i);V(H(V(H(i,C(273)),e),C(173)),h);Bf(c,K(i));c=H1(b,e,h);a.pT=c;Cr(c,d);B1(a.pT,C(271),0.0,d.ey);b=C3(b);a.lW=b;CR(b,a.pT);F3(a.gH,a.lW);Gc(a.gH);b=a.gH.bq;FW();BL(b,A$$);BL(a.gH.bb,A_S);}b=a.C.Q;EU(b,a.vd);c=a.gH;i=c.w;f=a.hd;e=f.a;c=c.u;Y(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);ER(a.gH,b,
a.lW,0,0);}
function Hn(){var a=this;Cz.call(a);a.wa=null;a.cr=null;a.el=null;a.dz=null;a.fz=null;a.eU=null;}
function Pb(a,b){var c,d;Et(a,b);a.wa=Cs(20);a.cr=Td();a.el=new Bh;a.dz=new Bh;a.fz=new Bh;a.eU=new Bh;c=b.n.bA;d=new ADr;d.EL=a;Z(c,d);Z(b.n.bY,a);b=a.cr.bq;FW();BL(b,A$$);BL(a.cr.bb,A_S);}
function AGE(a){var b,c,d;b=a.C.Q;EU(b,a.wa);c=a.cr;d=c.w;Bv(b,d.a,d.b,c.u,c.bq);Ca(b,1);c=a.cr;d=c.w;AFz(b,d.a,d.b,c.u,a.el,a.dz,a.fz,a.eU,c.bb);Ca(b,0);}
function A1T(a,b){return 0;}
var Uc=G(Hn);
function A3O(a,b,c){var d,e,f;d=a.cr;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);Y(a.el,0,0);Y(a.dz,Be(b.a,b.b),Be(b.a,b.b));b=a.fz;d=a.el;Y(b,d.a,d.b+20|0);b=a.eU;d=a.dz;Y(b,d.a,d.b+40|0);}
function A4P(a,b){var c,d,e;Ct(a.el,b.j);b=a.dz;c=a.cr;d=c.w;e=d.a;c=c.u;Y(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fz;c=a.el;Y(b,c.a,c.b+20|0);b=a.eU;c=a.dz;Y(b,c.a,c.b+40|0);return 0;}
function Ub(){var a=this;Hn.call(a);a.gf=null;a.gI=null;}
function A6q(a,b){var c;c=a.dz;b=b.j;c.b=b.b-50|0;a.eU.b=b.b+100|0;return 1;}
function APs(a){var b,c,d,e,f,g,h;b=Bd(a.el.a,a.fz.a);c=Be(a.dz.a,a.eU.a);d=Be(a.el.b,a.dz.b)-50|0;e=Bd(a.fz.b,a.eU.b)+50|0;Hz(a.cr,b,d,c-b|0,e-d|0);AGE(a);f=a.cr.w.a-10|0;ABE(a,a.C.Q,10,f,a.el,a.fz);g=a.cr;h=g.w.a+g.u.a|0;ABE(a,a.C.Q,h,f,a.dz,a.eU);}
function ABE(a,b,c,d,e,f){var g;Y(a.gf,c,a.cr.w.b);Y(a.gI,d,e.b-a.cr.w.b|0);g=a.gf;Bv(b,g.a,g.b,a.gI,a.cr.bq);Y(a.gf,c,e.b);Y(a.gI,d,f.b-e.b|0);e=a.gf;Bv(b,e.a,e.b,a.gI,a.cr.bb);Y(a.gf,c,f.b);e=a.gI;g=a.cr;Y(e,d,(g.w.b+g.u.b|0)-f.b|0);e=a.gf;Bv(b,e.a,e.b,a.gI,a.cr.bq);}
function AN9(a,b,c){}
function W4(){var a=this;Cq.call(a);a.Dt=3;a.xc=null;a.kt=null;a.qU=0;}
function ARr(a,b,c){var d,e;if(b===0.0){DV(a.v,ZO(a));d=TN(a,0.5,0,C(274));e=a.q.bT;EE(DV(a.v,d),BK(e.a/10|0,e.b/10|0),BK((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function ZO(a){var b,c,d,e,f,g;b=a.qU+1|0;a.qU=b;c=new J;L(c);V(H(c,C(275)),b);c=TN(a,1.0,1,K(c));d=a.q.bT;e=d.a/10|0;f=e+Ec(a.kt,e)|0;e=d.b/20|0;e=e+Ec(a.kt,e)|0;b=d.a;b=((b*7|0)/10|0)+Ec(a.kt,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+Ec(a.kt,g/10|0)|0;EE(c,BK(f,e),BK(b,g));return c;}
function TN(a,b,c,d){var e,f,g;e=AFM(a.q);if(d===null)f=new AEX;else{f=new AEZ;f.vs=e;f.vt=d;}g=new QL;Mb(g);g.mD=new B4;g.qj=new Bh;g.zg=f;g.sE=b;if(c){d=G2(g,a.q);JB(d,A_T,A_U);g=d;}Ly(e,g);Eq(e,Fs());ABx(e,a.xc,3.0);d=new AEY;d.rd=a;d.re=e;Ue(e,d);return e;}
function Ey(){Cq.call(this);this.i4=null;}
function A8F(a){var b=new Ey();Kw(b,a);return b;}
function Kw(a,b){Go(a,b);Z(a.q.di,a);BL(a.c4,Cs(43));}
function AZj(a){return AXj();}
function AR9(a){return 1;}
function ADa(a,b){Eq(a.i4,b);}
function AKh(a,b){var c,d,e;c=a.q.bT;d=!a.p1()?0:ADQ(b);e=c.b-d|0;EE(b,BK(c.a/20|0,d+(e/20|0)|0),BK((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A4v(a,b,c){if(b===0.0){a.i4=A5$(a.q,a.jN());ADa(a,Fs());if(a.p1())CX(a.i4,HT(BG(a)));DV(a.v,a.i4);a.og(a.i4);}}
function Q5(){var a=this;Ey.call(a);a.my=null;a.gs=null;}
function AOJ(a){var b;b=GW(a.my);a.gs=b;AMg(b);Nl(a.q,a.gs);return a.gs;}
function AXU(a){return 0;}
function A6s(a,b){AKh(a,b);JK(a);}
function AU8(a,b){BF(b);F5(a.my,b);E7(a.gs,b);ADa(a,b.b$);}
function AUn(a,b){GT(a.v,b);}
function X1(){B.call(this);this.xx=null;}
function A4i(a,b){D7(a.xx,null);return 0;}
function AAz(){var a=this;Ey.call(a);a.pD=null;a.mC=null;}
function AQV(a){var b,c,d,e,f,g;b=AMB(a.q);a.mC=b;OI(b,a.pD);b=Il(C(276),1);c=new SO;c.uZ=a;b.cY=c;ET(b);c=Il(C(277),1);d=new SN;d.yJ=a;c.cY=d;ET(c);e=Il(C(276),1);d=new SQ;d.zo=a;e.cY=d;ET(e);f=Il(C(277),1);d=new SP;d.CY=a;f.cY=d;ET(f);d=AL7(C(278),0,I(C_,[b,c]));Ie(d);g=AL7(C(279),0,I(C_,[e,f]));Ie(g);D5(a.mC.dK,d);D5(a.mC.dI,g);return a.mC;}
function AB$(a){var b,c;b=a.v.V.cu;c=new U7;c.AN=a;Gs(b,c);}
function AEK(a){var b,c;b=a.v.V.cu;c=new ZA;c.yo=a;Gs(b,c);}
function AE1(a){var b,c;b=a.v.V.cu;c=new PN;c.xh=a;FY(b,c);}
function AAh(a){var b,c;b=a.v.V.cu;c=new P2;c.EB=a;FY(b,c);}
function Tx(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bj();f=HT(BG(d[c]));g=BT(d[c]);h=new J;L(h);H(H(H(H(V(H(h,C(280)),c),C(281)),f),C(29)),g);Bf(e,K(h));c=c+1|0;}}
function Sx(){Cq.call(this);this.ny=null;}
function AZQ(a,b,c){if(b===0.0)AC6(a);}
function AC6(a){AEm(new L9,a.v,a.ny,new AEn);}
function ADO(){var a=this;Cz.call(a);a.tR=null;a.nb=null;a.fr=null;a.pq=null;a.na=0.0;a.hs=null;a.xg=null;a.uG=null;a.y9=null;a.zS=null;a.sT=null;a.qY=null;a.Do=null;a.xG=null;a.l1=null;}
var A_V=0;function A8f(a){var b=new ADO();AWO(b,a);return b;}
function AWO(a,b){var c,d,e;Et(a,b);a.tR=new B4;a.nb=AE$(1.0,0.0,0.0,1.0);a.fr=Td();a.pq=new Bh;a.na=3.1415927410125732;c=ALu();a.hs=c;a.xg=HY(c,1.25);a.uG=HY(a.hs,1.3333333730697632);a.y9=HY(a.hs,1.5);a.zS=HY(a.hs,1.6666666269302368);a.sT=HY(a.hs,2.0);a.qY=AE$(a.na/24.0,15.0,3.0,0.5);c=AE$(a.na/12.0,25.0,3.0,0.5);a.Do=c;a.xG=D6([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.l1=I(B4,[a.hs,a.xg,a.uG,a.y9,a.zS,a.sT,a.qY,c]);c=b.n.bA;d=new Rv;d.Gx=a;Z(c,d);Z(b.n.bY,a);b=a.fr.bb;FW();BL(b,A$$);Hz(a.fr,0,0,600,60);e
=Ny(0.5,0.375);JG(0.375,e);JG(0.375,JG(3.0,Ny(e,3.0)));HY(ALu(),3.0);}
function A6j(a,b,c){var d,e,f;Ct(a.pq,b);d=a.fr;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HY(b,c){var d;d=new B4;VX(b,c,d);return d;}
function ALu(){var b;b=new B4;L0(b);return b;}
function A0U(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.Q;EU(b,a.tR);Ca(b,1);c=a.fr;d=c.w.a;e=c.u.b/2|0;f=0;while(true){g=a.l1.data;if(f>=g.length)break;h=a.xG.data[f];c=g[f];i=X3(c);j=a.fr;k=j.w;l=k.a;m=k.b;MA(b,l,m+h|0,j.u,d+i,((m+e|0)+h|0)+i,c,a.nb);f=f+1|0;}if(A_V){c=A78(1,2);n=0;while(n<1000){h=Ec(c,a.l1.data.length);l=Ec(c,a.pq.b-a.fr.u.b|0);j=a.l1.data[h];i=j.bt;i=i-(i|0)>=0.25?0.0:0.5;k=a.fr;MA(b,k.w.a,l,k.u,d+i,(e+l|0)+i,j,a.nb);n=n+1|0;}}Ca(b,0);}
function AUS(a,b){return A_V;}
var Pj=G(KS);
function AYX(a){return EL(1);}
function Qb(){var a=this;Ey.call(a);a.v_=null;a.f1=null;}
function AJ9(){var b;b=I(Mv,[NN(1,3,4,5,1),NN(5,6,10,2,2),NN(12,2,13,3,3),NN(15,3,17,2,4)]);return A89(P(GL,0),P(GL,0),b);}
function AZ9(a){var b,c,d,e;b=AMB(a.q);a.f1=b;OI(b,a.v_);c=a.f1.dK;BF(c);d=new ACm;d.rJ=c;b=Qa(C(282),4,d);d=a.f1.dI;BF(d);e=new ACn;e.ub=d;c=Qa(C(282),4,e);D5(a.f1.dK,b);D5(a.f1.dI,c);AB9(a.f1,AJ9());return a.f1;}
function UJ(){Cq.call(this);this.hk=null;}
function Oi(){return EL(1);}
function Z$(a){var b,c,d,e;b=new AAa;c=a.hk;Kv(b,a.v,c,new Wd);d=AMB(b.bf.V);b.dY=d;OI(d,c);c=Il(C(283),0);d=Il(C(284),0);ET(c);ET(d);e=new Tt;e.tz=b;c.cY=e;e=new Tr;e.v7=b;d.cY=e;D5(b.dY.dK,c);D5(b.dY.dI,d);d=KX(b,b.dY,0.0);b.jf=d;c=new Ts;c.yy=b;d.iW=c;c=new Tq;c.F3=b;d.iS=c;DV(b.bf,d);}
function AWL(a,b,c){if(b===0.0)Z$(a);}
function ZP(){var a=this;Ey.call(a);a.lT=null;a.wO=null;}
function A2z(a){var b,c,d,e;b=UL(a.q);a.lT=b;BF(b);c=new Ug;c.tM=b;b=Qa(C(282),4,c);d=Bj();e=Pe(b);c=new J;L(c);V(H(c,C(285)),e);Bf(d,K(c));D5(a.lT,b);Kt(a.lT,a.wO);b=a.lT;return J1(b,G2(b,a.q));}
function A3X(a,b){var c;c=a.q.bT;EE(b,BK(c.a/30|0,c.b/10|0),BK((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function RT(){Cq.call(this);this.m1=null;}
function A0x(a,b,c){if(b===0.0)Ln(a);}
function Ln(a){var b;b=A74(a.v,a.m1,new SE);CV(b.bf.V,b.dS);return b;}
function Kx(){var a=this;B.call(a);a.C4=null;a.es=null;a.vC=null;a.Es=null;a.ty=null;a.lm=null;a.r3=null;a.xm=null;a.l7=null;a.l2=null;a.gL=null;}
function A_W(a,b,c,d,e,f,g,h,i,j,k){var l=new Kx();MU(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function MU(a,b,c,d,e,f,g,h,i,j,k,l){a.C4=b;a.es=c;a.vC=d;a.Es=e;a.ty=f;a.lm=g;a.r3=h;a.xm=i;a.l7=j;a.l2=k;a.gL=l;}
function AG8(){B.call(this);this.Ga=null;}
function ALd(a){var b=new AG8();AXI(b,a);return b;}
function AXI(a,b){a.Ga=b;}
var AF6=G(0);
function AJE(){var a=this;B.call(a);a.py=null;a.lu=null;a.yF=null;a.q3=null;}
function AL2(a,b,c,d){var e=new AJE();A6x(e,a,b,c,d);return e;}
function A6x(a,b,c,d,e){a.py=b;a.lu=c;a.yF=d;a.q3=e;}
var AHz=G(0);
function Fs(){var b,c,d;b=new Jh;c=new Jo;A2f();d=A_X;O8(c,d,A_Y,A_Z,A_0,A_1,d);Mg(b,c,AIZ(),AI9(S(C(286)),S(C(245)),S(C(246))),AIZ(),AJx(1,0.125),A_2,A_3);return b;}
function AIZ(){var b,c;b=new KI;c=S(C(287));A2f();Lu(b,c,A_4,A_5);return b;}
function AIA(){var b,c;b=new KI;c=S(C(246));AXT();Lu(b,c,A_6,A_7);return b;}
function AMO(){var b,c;b=new KI;AIs();c=A_8;AX5();Lu(b,c,A_9,A_$);return b;}
function AJk(){var a=this;B.call(a);a.Ar=null;a.xw=null;a.vN=null;a.rc=null;}
function AFI(a,b,c,d){var e=new AJk();AYk(e,a,b,c,d);return e;}
function AYk(a,b,c,d,e){a.Ar=b;a.xw=c;a.vN=d;a.rc=e;}
function AFv(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.eg.xw;break a;case 3:if(c!=3){b=b.eg.rc;break a;}b=b.eg.vN;break a;default:b=b.bv.es;break a;}b=b.eg.Ar;}return b;}
function Kl(a,b,c){return AFv(a,b,0,c);}
function M0(){var a=this;B.call(a);a.ml=null;a.kQ=null;}
function Xg(a,b){var c;c=a.kQ;a.kQ=b;return c;}
function K5(){var a=this;M0.call(a);a.b0=null;a.ca=null;a.g4=0;a.hb=0;}
function Nt(a){var b;b=LR(a);if(b==2){if(LR(a.ca)<0)a.ca=PJ(a.ca);return QO(a);}if(b!=(-2))return a;if(LR(a.b0)>0)a.b0=QO(a.b0);return PJ(a);}
function LR(a){var b,c;b=a.ca;c=b===null?0:b.g4;b=a.b0;return c-(b===null?0:b.g4)|0;}
function PJ(a){var b;b=a.b0;a.b0=b.ca;b.ca=a;Fb(a);Fb(b);return b;}
function QO(a){var b;b=a.ca;a.ca=b.b0;b.b0=a;Fb(a);Fb(b);return b;}
function Fb(a){var b,c,d;b=a.ca;c=b===null?0:b.g4;b=a.b0;d=b===null?0:b.g4;a.g4=Bd(c,d)+1|0;a.hb=1;b=a.b0;if(b!==null)a.hb=1+b.hb|0;b=a.ca;if(b!==null)a.hb=a.hb+b.hb|0;}
var AMR=G();
function AOD(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Zg;c=c.buffer;d.gD=c;d.qQ=new $rt_globals.Int8Array(c);d.m3=new $rt_globals.Uint16Array(c);d.Bw=new $rt_globals.Int32Array(c);d.s0=new $rt_globals.Float32Array(c);d.ti=new $rt_globals.Float64Array(c);e=d.gD.byteLength;c=new J;L(c);V(H(c,C(288)),e);C0(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(289)),e);C0(K(c));f=b.callToCpp2();c=new J;L(c);Df(H(c,C(290)),f);C0(K(c));c=Pw(d,b.getC8String());g=new J;L(g);H(H(g,C(291)),c);C0(K(g));c
=XF(d,b.getC16String());g=new J;L(g);H(H(g,C(292)),c);C0(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gD,h,8));c=AHY(i);g=new J;L(g);H(H(g,C(293)),c);C0(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gD,h,8));c=AUZ(j);g=new J;L(g);H(H(g,C(294)),c);C0(K(g));k=AKN(d,b.getCDoubleArray8(),8);l=AW$(k);c=new J;L(c);H(H(c,C(295)),l);C0(Em(c));l=AW6(b.getC8String(),C(296),d);c=Mw();H(H(c,C(297)),l);C0(Em(c));l=ASF(b.getC16String(),C(298),
d);c=Mw();H(H(c,C(299)),l);C0(Em(c));c=A3n(i,d,b.getCIntArray8(),D6([11,22,33,44,55,66,77,88]));g=Mw();H(H(g,C(300)),c);C0(Em(g));c=AU_(j,d,b.getCFloatArray8(),100,D6([111,222,333,444,555,666,777,888]));g=Mw();H(H(g,C(301)),c);C0(Em(g));b=A4N(k,d,b.getCDoubleArray8(),1000,D6([1111,2222,3333,4444,5555,6666,7777,8888]));c=Mw();H(H(c,C(302)),b);C0(Em(c));}
function AU_(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(303);h=0;i=e;a:{while(h<g){if(C5(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.s0[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(304);}return C(305);}
function A4N(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(303);h=0;i=e;a:{while(h<g){if(G1(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.ti[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(304);}return C(305);}
function A3n(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(303);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Bw[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(304);}return C(305);}
function AW6(b,c,d){var e,f,g,h;e=Pw(d,b);if(!Bk(c,e))return C(306);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.qQ[h])return C(307);f=f+1|0;}return C(304);}
function ASF(b,c,d){var e,f,g,h;e=XF(d,b);if(!Bk(c,e))return C(306);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.m3[h>>>1|0]&65535))return C(307);f=f+1|0;}return C(304);}
function C0(b){Ze(C(2),b);}
function ARJ(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Zw(){B.call(this);this.sk=null;}
function A6W(a,b){return AKO(a.sk,b);}
function Zu(){B.call(this);this.CA=null;}
function A0n(a,b){AK3(a.CA,b);}
function Zv(){B.call(this);this.yV=null;}
function AVu(a,b){return AF4(a.yV,b);}
function AJf(){KH.call(this);this.dH=null;}
function Lb(){var a=new AJf();A52(a);return a;}
function Ir(a,b,c,d){var e=new AJf();A1r(e,a,b,c,d);return e;}
function A52(a){ADm(a);a.dH=new B4;}
function A1r(a,b,c,d,e){ADm(a);a.dH=new B4;Hz(a,b,c,d,e);}
function Gc(a){var b,c;b=a.u;c=a.dH;Y(b,c.bi-c.bp|0,c.bC-c.bt|0);}
function F3(a,b){IR(a,0,0,BU(b),CT(b));}
function IR(a,b,c,d,e){Cv(a.dH,b,c,d,e);}
function ER(a,b,c,d,e){var f;f=a.w;DP(b,f.a+d|0,f.b+e|0,a.u,a.dH,c,a.bb,a.bq,0);}
function TD(a,b,c,d){var e;e=a.w;DP(b,e.a,e.b,a.u,a.dH,c,a.bb,a.bq,d);}
function IP(a,b,c,d,e,f,g){DP(b,c,d,a.u,a.dH,e,!f?a.bb:a.bq,!f?a.bq:a.bb,g);}
function HS(a,b){BL(a.bb,b);}
function Fv(a,b){BL(a.bq,b);}
function UK(){B.call(this);this.fG=null;}
function AYV(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fG.hK;f=e.u;d=d-f.a|0;g=c.b-f.b|0;Y(e.w,d,g);c=a.fG;e=c.C.bH;b=b.j;d=0;a:{while(true){h=c.jm.data;if(d>=h.length)break;if(Fo(h[d],b)){b=c.q1.data[d];break a;}d=d+1|0;}b=null;}AAT(e,b);return 1;}
function ANy(a,b,c,d){if(!c&&d==2){b=a.fG;Te(b,b.eu);}return 1;}
function AYO(a,b,c){var d,e;d=Bj();e=new J;L(e);V(H(e,C(308)),c);Bf(d,K(e));if(c)return null;d=b.j;e=!Fo(a.fG.eu,d)?null:d;U8(a.fG.jX,d.a,d.b);b=a.fG;ZD(b.jX,Nj(b.C.bH));if(e===null)b=A_f;else{b=new ADy;b.tt=a;b.tu=e;}return b;}
function AYb(a,b,c){var d;b=Bj();d=new J;L(d);V(H(d,C(309)),c);Bf(b,K(d));return 1;}
function ZX(){B.call(this);this.De=null;}
function A0H(a,b){return X0(a.De,b);}
function ZW(){B.call(this);this.sY=null;}
function ATf(a,b){return X0(a.sY,b);}
function ZV(){B.call(this);this.EH=null;}
function A1A(a,b,c){var d,e;Bf(Bj(),C(310));d=!c?C(311):C(54);e=new J;L(e);H(H(H(e,C(312)),d),C(313));AD7(b,K(e));return 1;}
function ZU(){B.call(this);this.Fk=null;}
function AXJ(a){Bf(Bj(),C(314));}
function ZT(){B.call(this);this.FN=null;}
function ATD(a,b){Bf(Bj(),C(315));return 1;}
function ZS(){B.call(this);this.BY=null;}
function A5f(a,b,c,d){var e,f,g;b=a.BY;e=( -d|0)/10|0;b=b.eu;f=b.u;f.a=f.a+e|0;f.b=f.b+e|0;b=b.w;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function HD(){var a=this;B4.call(a);a.hE=0;a.hH=0;a.hF=0;a.hG=0;}
function Cs(a){var b=new HD();AWU(b,a);return b;}
function DD(a,b,c){var d=new HD();AZJ(d,a,b,c);return d;}
function S(a){var b=new HD();A4z(b,a);return b;}
function E_(a,b,c,d){var e=new HD();Sf(e,a,b,c,d);return e;}
function B0(a){var b=new HD();Lh(b,a);return b;}
function AWU(a,b){Sf(a,b,b,b,255);}
function AZJ(a,b,c,d){Sf(a,b,c,d,255);}
function A4z(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hE=KL(Q(b,1))*17|0;a.hH=KL(Q(b,2))*17|0;a.hF=KL(Q(b,3))*17|0;a.hG=255;}else{a.hE=Me(Q(b,1),Q(b,2));a.hH=Me(Q(b,3),Q(b,4));a.hF=Me(Q(b,5),Q(b,6));a.hG=M(b)!=9?255:Me(Q(b,7),Q(b,8));}IX(a.hE,a.hH,a.hF,a.hG,a);return;}}
function Sf(a,b,c,d,e){a.hE=b;a.hH=c;a.hF=d;a.hG=e;IX(b,c,d,e,a);}
function Lh(a,b){a.hE=b.hE;a.hH=b.hH;a.hF=b.hF;a.hG=b.hG;BL(a,b);}
function KL(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Me(b,c){return (16*KL(b)|0)+KL(c)|0;}
var AIa=G(0);
function EL(b){return !b?I(BC,[C(157),C(168),C(316)]):I(BC,[C(157),C(168),C(316),C(34)]);}
function Xw(){B.call(this);this.mz=null;}
function AP4(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mz.dv;e=DX();f=e-0.5+(DX()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DX()*0.3;h=0.5+DX()*0.5;IN(e,g,h,1.0,b.bb);IN(f,g,h,1.0,b.bq);b=a.mz;BL(b.d8.bb,b.dv.bb);b=a.mz;BL(b.d8.bq,b.dv.bq);}return 1;}
function Xs(){var a=this;B.call(a);a.oi=null;a.oL=null;}
function AHA(){var a=this;B.call(a);a.gj=null;a.cz=null;a.g_=null;a.ia=null;a.oq=null;a.cS=null;a.hY=null;a.c$=0;a.gm=0;a.oI=0;a.kM=0;a.kZ=0;a.h5=0;a.lf=null;a.pE=null;a.xE=null;a.oe=null;}
function ALi(){var a=new AHA();AVh(a);return a;}
function AVh(a){a.cz=Td();a.g_=new Bh;a.ia=new Bh;a.cS=A__;a.kM=(-1);a.kZ=1;}
function NO(a,b){OB(a);a.cS=b;}
function J0(a,b,c){a.gj=b;AD1(a,c);OB(a);}
function J2(a,b){var c;a.oq=b.lU;c=b.pH.ql;BL(a.cz.bb,c);c=b.jB.j4;BL(a.cz.bq,c);a.oe=b.pH;}
function Ni(a){a.hY=BY(a.hY,null);Y(a.g_,0,0);a.cS=A__;a.kM=(-1);ACk(a.cz);}
function AD1(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KF(b);d=b.cm;BF(a.gj);Cr(c,a.gj);e=NI(a.gj,1.25);f=0;a.c$=Cj(2.0,d);a.gm=Cj(3.0,d);a.oI=Cj(12.0,d);g=0;h=a.cS.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=LB(c,l.n5);n=a.oI;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fv;b.a=g;b.b=0;b=l.eF;b.a=n;b.b=e;Cv(l.kI,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.g_;b.a=g;b.b=e;b=a.cz.u;n=a.h5;if(!n){m=a.c$;m=(g+m|0)+Bc(m,a.cS.data.length)|0;}else m=(f+(a.c$*2|0)|0)+(a.gm*2|0)|0;b.a=m;if(!n)e=e+(a.c$*2|0)|0;else{n=a.c$;e=(Bc(e+n|0,a.cS.data.length)+n
|0)+(a.gm*2|0)|0;}b.b=e;}
function NJ(a,b,c){var d,e,f,g,h,i,j;Y(a.cz.w,b,c);d=a.c$+a.gm|0;e=a.cS.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fv;j.a=b+d|0;j.b=c+h|0;if(!a.h5){if(!i.eF.a)AFT();d=d+(i.eF.a+a.c$|0)|0;}else{if(!i.eF.b)AFT();h=h+(i.eF.b+a.c$|0)|0;}g=g+1|0;}}
function AFT(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EM(a){var b,c;b=a.g_;if(b.a&&b.b)return a.cz.u;c=new Bt;Bp(c,C(317));N(c);}
function OB(a){a.kZ=1;}
function MC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bN;if(!a.cS.data.length)return;if(a.hY===null)a.hY=C3(c);a:{if(!a.kZ){d=a.g_;if(Bc(d.a,d.b))break a;}d=a.g_;if(!Bc(d.a,d.b))AD1(a,b);d=a.g_;e=d.a;f=d.b;if(!Bc(e,f))return;d=Eb(c,e,f,b.cN);Cr(d,a.gj);g=NI(a.gj,0.125);h=a.gj;i=h.ey;g=g+i-(i+h.eR)/16.0;j=a.cS.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.n5,h.kI.bp+a.oI,g);f=f+1|0;}CR(a.hY,d);a.kZ=0;EK(d);}if(!Lz(a.cz)){d=a.cz;AKx(c,d.u,d.w,d.bq,a.c$,a.ia);d=a.cz;h=d.u;k=d.w;d=d.bb;e=a.c$;l=a.ia;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;Bv(c,k.a+e|0,k.b+e|0,l,d);if(a.h5){d=a.cz;ALS(c,d.u,d.w,0,0,Zi(a.oq,b.cm),a.oq.ou,a.ia);}}j=a.cS.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fv;e=h.a;f=h.b;h=d.eF;k=d.kI;l=a.hY;o=a.oe;DP(c,e,f,h,k,l,o.so,Wh(o,d.lw),b.cN);n=n+1|0;}b:{if(a.h5){j=a.cS.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.ia;e=(a.cz.u.a-(a.c$*2|0)|0)-(a.gm*2|0)|0;h=d.eF;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fv;Bv(c,k.a+h.a|0,k.b,b,Wh(a.oe,d.lw));}p=p+1|0;}}}}
function Og(a,b,c){var d,e,f,g,h,i;d=Fo(a.cz,b);e=!d?(-1):PZ(a,b);f=a.kM;if(f!=e){if(f>=0){g=a.cS.data[f];g.lw=0;if(a.xE!==null){h=Bj();g=BT(g);i=new J;L(i);H(H(V(H(i,C(318)),f),C(319)),g);Bf(h,K(i));}}if(e>=0){h=a.cS.data[e];g=a.pE;if(g!==null)g.xJ(b,e,h);h.lw=1;}a.kM=e;}return d&&G3(c)?1:0;}
function OE(a,b,c,d){var e,f;e=PZ(a,b);if(e>=0){f=a.cS.data[e];if(!ADp(f))f.ni.e();}return 1;}
function PZ(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cS.data;if(c>=d.length)return (-1);e=d[c];if(GB(b,e.fv,e.eF))return c;if(a.h5){f=e.fv;g=f.a;e=e.eF;h=e.a;g=g+h|0;i=f.b;f=a.ia;f.a=(a.cz.u.a-(a.c$*2|0)|0)-h|0;f.b=e.b;if(AGa(b,g,i,f))break;}c=c+1|0;}return c;}
function AFt(a){a.h5=1;}
function AKy(){var a=this;B.call(a);a.is=null;a.hf=0.0;a.ku=0;a.kK=0;}
function DA(a,b){var c=new AKy();ATT(c,a,b);return c;}
function ATT(a,b,c){a.is=b;a.hf=c;a.ku=400;a.kK=700;}
function A4s(a,b){if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){b=b;return a.hf===b.hf&&a.ku==b.ku&&a.kK==b.kK&&BR(a.is,b.is)?1:0;}return 0;}
function ACS(){B.call(this);this.vy=null;}
function ANq(a,b){var c;c=a.vy;if(b.bh==32)Ni(c.dQ);return 0;}
function ACO(){B.call(this);this.wx=null;}
function AVb(a,b){var c,d,e,f;c=a.wx;d=Z8(c.q);HF(d,Fs(),c.o5);b=b.j;e=Ss(4);f=new VJ;f.EI=c;M2(d,b,e,f);HV(c.v,d);return 1;}
var ACP=G();
function A6U(a){Bf(Bj(),C(320));}
var ACQ=G();
function AOi(a){Bf(Bj(),C(321));}
function By(){var a=this;B.call(a);a.ni=null;a.kI=null;a.fv=null;a.eF=null;a.nF=null;a.uD=null;a.lw=0;a.n5=null;}
function Ya(a,b){var c=new By();Ce(c,a,b);return c;}
function A8U(a,b,c,d){var e=new By();AKX(e,a,b,c,d);return e;}
function Ce(a,b,c){AKX(a,b,c,null,null);}
function AKX(a,b,c,d,e){a.kI=new B4;a.fv=new Bh;a.eF=new Bh;a.n5=c;a.uD=e;a.ni=b;a.nF=d;}
function ADp(a){return a.nF===null?0:1;}
function Vo(){B.call(this);this.DJ=null;}
function ASw(a,b){return b.kc&&b.bh==32?1:0;}
function Vp(){B.call(this);this.Ch=null;}
function ANY(a,b){var c,d,e,f,g,h;c=a.Ch;d=Z8(c.q);HF(d,Fs(),DA(C(157),25.0));b=b.j;e=P(By,1);f=e.data;g=new By;h=new AFk;h.Cz=c;Ce(g,h,C(322));f[0]=g;M2(d,b,CN(e),Baa);HV(c.v,d);return 1;}
function AIW(){var a=this;B.call(a);a.qv=0;a.qx=0;}
function VT(){var a=new AIW();AV9(a);return a;}
function A78(a,b){var c=new AIW();AMY(c,a,b);return c;}
function AV9(a){AMY(a,AME(G_((AH9()))),G_((AH9()))^(-559038737));}
function AMY(a,b,c){var d;a.qv=b;a.qx=c;d=0;while(d<19){N1(a);d=d+1|0;}}
function N1(a){var b,c;b=a.qv;c=a.qx;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.qv=c;a.qx=b;return b;}
function AME(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AMa(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Ec(a,b){return VV(a)*b|0;}
function VV(a){return 5.960464477539063E-8*(N1(a)&16777215);}
function RA(a,b){var c,d,e;c=AMa(N1(a));d=AU5( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function PA(){B.call(this);this.yZ=null;}
function ATl(a,b,c){var d;d=a.yZ;if(b===0.0)Mq(d,100);}
function Pz(){B.call(this);this.wH=null;}
function A05(a,b){var c,d,e;c=a.wH;d=b.bh;if(d==32){c.l4=c.l4?0:1;e=1;}else if(d==13){Mq(c,1);e=1;}else if(d!=8)e=0;else{P_(c,1);e=1;}return e;}
var AAO=G(0);
function AJF(b,c){var d;d=new VO;d.yL=b;d.yK=c;return d;}
function AJL(){var a=this;B.call(a);a.hT=null;a.it=0;a.mc=0;a.hA=0;}
function AJY(a){var b=new AJL();AQc(b,a);return b;}
function AQc(a,b){a.hT=BO();a.hA=0;a.mc=2048;a.it=b;}
function KP(a,b,c){var d,e,f,g,h,i;d=c.Ap(b);e=a.mc;if(d>e){c=new Bt;f=new J;L(f);Br(V(H(V(H(f,C(323)),d),C(324)),e),41);Bp(c,K(f));N(c);}if(!a.it){b=new BX;Bp(b,C(325));N(b);}a:{b=new B4;if(d){b:{c=a.hT;if(c.p>0){c=B9(c);g=d;while(true){if(!Cb(c))break b;f=Cc(c);if(f.bi>=g)break;}Cv(b,f.bp,f.bt,g,a.it);f.bp=f.bp+g;h=f.bi-g;f.bi=h;if(h===0.0)AIx(a.hT,f);break a;}}g=a.hA;i=d;Cv(b,0.0,g,i,a.it);BA(a.hT,AE$(i,a.hA,a.mc-d|0,a.it));a.hA=a.hA+a.it|0;}}return b;}
function Jj(a,b){var c,d,e,f,g,h,i;a:{c=AMW(b);b=a.hT;if(b.p>0){d=B9(b);while(true){if(!Cb(d))break a;e=Cc(d);if(e.bt===c.bt){f=e.bp;g=e.bi;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bi=c.bi+g;AAv(d);}else{h=c.bi;if(i+h===f){c.bi=h+g;AAv(d);}}}}}}BA(a.hT,c);}
function Na(a){return BK(a.mc,a.hA);}
function XH(){var a=this;B.call(a);a.sn=null;a.l8=null;}
function AXW(a,b,c){if(c)return A_f;return Gi(a.l8.jn,b.j,a.sn,1);}
function ANT(a,b,c){return 1;}
function AZ2(a,b){var c;c=a.l8;return Gp(c.jn,b.j,c.yE);}
function AA9(){B.call(this);this.BP=null;}
function ATj(a,b,c,d){var e,f;b=a.BP;e=(Xk(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ff=Be(Bd(0,b.ff+Bc(e,f)|0),VL(b));return 1;}
function Rm(){B.call(this);this.tK=null;}
function AYo(a,b){var c,d,e;c=a.tK;if(b.cv&&b.bh==79){if(!b.bJ){b=c.C.bH;d=new X8;d.vW=c;FY(b,d);}else{b=c.C.bH;d=new X7;d.yk=c;Gs(b,d);}e=1;}else e=0;return e;}
function Sh(){B.call(this);this.y2=null;}
function AW5(a,b){var c,d,e,f,g,h,i,j,k;c=a.y2;d=c.v;e=Fs();f=DA(C(157),25.0);g=b.j;h=P(By,5);i=h.data;b=new By;j=new UV;j.r8=c;Ce(b,j,C(326));i[0]=b;b=new By;j=new UW;j.sS=c;Ce(b,j,C(327));i[1]=b;b=new By;j=new UX;j.uw=c;Ce(b,j,C(328));i[2]=b;b=new By;j=new UY;j.yu=c;Ce(b,j,C(329));i[3]=b;b=new By;k=new UZ;k.y1=c;Ce(b,k,C(330));i[4]=b;Fu(d,e,f,g,CN(h));return 1;}
function Sg(){B.call(this);this.Bj=null;}
function A37(a,b){var c,d,e;c=a.Bj.C.bH;d=new YK;e=P(B,1);e.data[0]=b;CO(c,d,C(331),e);}
function AC2(){B.call(this);this.nq=null;}
function A3e(a,b){var c,d,e,f,g,h;c=a.nq;d=c.qV;if(d!==null){e=c.fd.w;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qV=g;}b=b.j;f=b.a;c=c.gY;d=c.u;f=f-d.a|0;h=b.b-d.b|0;Y(c.w,f,h);return 1;}
function AWS(a,b,c){var d;if(!c){d=b.j;b=a.nq;if(!Fo(b.fd,d))d=null;b.qV=d;}return A_f;}
var AHI=G();
function AM3(b){var c,d;c=H1(b,250,64);HM(c,C(248),25.0);Kq(c,187,187,187);B1(c,C(332),0.0,24.0);B1(c,C(332),0.25,56.0);d=C3(b);CR(d,c);EK(c);return d;}
var Dl=G(0);
var A_r=null;var A_S=null;var A_s=null;var A$$=null;var A_u=null;var A_t=null;var A_w=null;var A_v=null;var A_y=null;var A_x=null;var A_z=null;function FW(){FW=Bm(Dl);AW7();}
function AW7(){A_r=Cs(187);A_S=S(C(333));A_s=Cs(55);A$$=Cs(43);A_u=DD(33,66,131);A_t=DD(60,63,65);A_w=S(C(334));A_v=S(C(335));A_y=E_(85,85,85,128);A_x=E_(43,43,43,0);A_z=S(C(234));}
function Zx(){var a=this;B.call(a);a.rl=null;a.mk=null;}
function ARl(a,b,c){var d;if(!c){d=Gi(a.mk.iX,b.j,a.rl,1);if(d!==null)return d;}return A_f;}
function AX$(a,b,c){return 1;}
function AP9(a,b){var c;c=a.mk;return Gp(c.iX,b.j,Sa(c.C.bH));}
function WW(){B.call(this);this.r6=null;}
function A5c(a,b,c,d){var e,f;b=a.r6;e=(Xk(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fT=Be(Bd(0,b.fT+Bc(e,f)|0),AA$(b));return 1;}
function AEz(){B.call(this);this.xD=null;}
function AVn(a,b){var c,d;a:{c=a.xD;switch(b.bh){case 67:Q9(c);d=1;break a;case 86:AAQ(c);d=1;break a;default:}d=0;}return d;}
var AEy=G();
function A1H(a,b,c){return 0;}
function AEx(){B.call(this);this.ta=null;}
function APr(a,b,c){var d,e;d=a.ta;c=d.en+1|0;d.en=c;d=Ka(F(KK));e=new J;L(e);H(H(V(e,c),C(336)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));AD7(b,e);return 1;}
var AEw=G();
function ASy(a){return null;}
function AEA(){B.call(this);this.A2=null;}
function A4J(a){var b,c;b=a.A2;c=new WF;c.rh=b;return c;}
function SY(){B.call(this);this.E0=null;}
function AWb(a,b){return 0;}
function P1(){B.call(this);this.Aj=null;}
function AYF(a,b){var c;c=a.Aj;if(b.kc&&b.bh==27){b=OY(c.v);if(b!==null)Ym(b);}return 0;}
function P3(){B.call(this);this.wF=null;}
function A0P(a,b){var c,d,e,f,g,h,i;c=a.wF;d=Z8(c.q);HF(d,Fs(),DA(C(157),25.0));b=b.j;e=P(By,1);f=e.data;g=new By;h=c.v;i=new Yy;i.zR=c;Ce(g,DR(h,i),C(337));f[0]=g;M2(d,b,CN(e),Baa);HV(c.v,d);return 1;}
function P4(){B.call(this);this.Cu=null;}
function A3c(a,b){var c,d,e;c=a.Cu;d=c.gs;if(d!==null){e=new AB2;e.C9=c;e.C$=b;F4(d,b,e);}}
function P5(){B.call(this);this.Ag=null;}
function A45(a,b){var c,d,e;c=a.Ag;if(Dz(c.q,c.gs)){d=c.my;b=b.j;e=c.gs;I0(d,b,e,c,e,c,new XY);}return 1;}
function Ro(){B.call(this);this.Ck=null;}
function AT1(a,b){var c,d,e,f,g,h,i,j,k;c=a.Ck;d=c.v;e=c.pD;f=e.b$;g=e.fM;h=b.j;i=P(By,4);j=i.data;b=new By;e=new Ye;e.sz=c;Ce(b,DR(d,e),C(338));j[0]=b;b=new By;e=c.v;k=new Yc;k.rX=c;Ce(b,DR(e,k),C(339));j[1]=b;b=new By;e=c.v;k=new Yb;k.uS=c;Ce(b,DR(e,k),C(340));j[2]=b;e=new By;k=c.v;b=new Yd;b.z8=c;Ce(e,DR(k,b),C(341));j[3]=e;Fu(d,f,g,h,CN(i));return 1;}
function Rn(){B.call(this);this.Ef=null;}
function A4q(a,b){return b.bh!=32?0:1;}
function YA(){B.call(this);this.za=null;}
function APM(a,b){var c,d,e,f,g,h;c=a.za;d=P(By,1);e=d.data;f=new By;g=c.v;h=new SH;h.yC=c;Ce(f,DR(g,h),C(342));e[0]=f;f=CN(d);g=c.v;c=c.ny;Fu(g,c.b$,c.fM,b.j,f);return 1;}
function Rv(){B.call(this);this.Gx=null;}
function AXu(a,b){return 0;}
var AIH=G(0);
function AMg(b){Ig(b,A8q(C(343),C(193),ADk(C(344))));}
function Vt(){B.call(this);this.DG=null;}
function AUe(a,b){return 1;}
function Vs(){B.call(this);this.uQ=null;}
function AZa(a,b){var c,d;c=a.uQ;if(b.bh!=32)d=0;else{AB9(c.f1,AJ9());d=1;}return d;}
function AB_(){B.call(this);this.rp=null;}
function AUd(a,b){var c,d,e,f,g,h;c=a.rp;d=P(By,4);e=d.data;f=new By;g=c.v;h=new AAn;h.Bv=c;Ce(f,DR(g,h),C(345));e[0]=f;f=new By;h=c.v;g=new AAm;g.sy=c;Ce(f,DR(h,g),C(346));e[1]=f;f=new By;h=c.v;g=new AAp;g.w1=c;Ce(f,DR(h,g),C(342));e[2]=f;f=new By;h=c.v;g=new AAo;g.vB=c;Ce(f,DR(h,g),C(347));e[3]=f;f=CN(d);h=c.v;c=c.hk;Fu(h,c.b$,c.fM,b.j,f);return 1;}
function Qz(){B.call(this);this.tP=null;}
function A5h(a,b){LP(Ln(a.tP),b);}
function Qy(){B.call(this);this.wg=null;}
function AZ3(a,b){var c,d,e,f,g,h;c=a.wg;d=P(By,1);e=d.data;f=new By;g=c.v;h=new Y7;h.vK=c;Ce(f,DR(g,h),C(347));e[0]=f;f=CN(d);g=c.v;c=c.m1;Fu(g,c.b$,c.fM,b.j,f);return 1;}
var Dr=G(0);
var A_A=null;var Bab=null;var A_C=null;var A_B=null;var A_E=null;var A_D=null;var A_G=null;var A_F=null;var A_I=null;var A_H=null;var A_J=null;function AQe(){AQe=Bm(Dr);AVt();}
function AVt(){A_A=Cs(206);Bab=S(C(348));A_C=S(C(349));A_B=S(C(241));A_E=S(C(350));A_D=S(C(230));A_G=S(C(351));A_F=S(C(352));A_I=E_(107,106,107,128);A_H=E_(30,31,34,0);A_J=S(C(243));}
function Cu(){CD.call(this);this.lx=null;}
var Bac=null;var Bad=null;var Bae=null;var Baf=null;var Bag=null;var A_h=null;var Bah=null;var Bai=null;var Baj=null;var Bak=null;var Bal=null;var Bam=null;var Ban=null;var Bao=null;var Bap=null;var Baq=null;function UU(){UU=Bm(Cu);A1O();}
function D3(a,b,c){var d=new Cu();AA3(d,a,b,c);return d;}
function A8K(a,b,c,d){var e=new Cu();AEJ(e,a,b,c,d);return e;}
function AG7(){UU();return Baq.d1();}
function AA3(a,b,c,d){UU();Dt(a,b,c);a.lx=J5(d,null);}
function AEJ(a,b,c,d,e){UU();Dt(a,b,c);a.lx=J5(d,e);}
function A1O(){var b,c;b=new Cu;AQe();AA3(b,C(353),0,Bab);Bac=b;Bad=D3(C(354),1,S(C(355)));Bae=D3(C(356),2,S(C(357)));Baf=D3(C(358),3,S(C(359)));Bag=D3(C(360),4,Bab);A_h=D3(C(361),5,S(C(362)));Bah=D3(C(363),6,S(C(364)));Bai=D3(C(365),7,S(C(366)));Baj=D3(C(367),8,S(C(368)));c=new Cu;FW();AEJ(c,C(369),9,A_S,S(C(351)));Bak=c;Bal=A8K(C(370),10,A_S,S(C(244)));Bam=D3(C(371),11,S(C(372)));Ban=D3(C(373),12,S(C(374)));Bao=D3(C(375),13,Bab);b=D3(C(376),14,S(C(377)));Bap=b;Baq=I(Cu,[Bac,Bad,Bae,Baf,Bag,A_h,Bah,Bai,Baj,
Bak,Bal,Bam,Ban,Bao,b]);}
function KM(){var a=this;B.call(a);a.hm=null;a.nc=null;}
function J5(a,b){var c=new KM();A2i(c,a,b);return c;}
function A2i(a,b,c){a.hm=b;a.nc=c;}
function Jh(){var a=this;B.call(a);a.lU=null;a.t9=null;a.pa=null;a.Fn=3;a.jB=null;a.CK=null;a.GA=null;a.pH=null;a.nn=null;a.pl=null;}
function Bar(a,b,c,d,e,f,g){var h=new Jh();Mg(h,a,b,c,d,e,f,g);return h;}
function Mg(a,b,c,d,e,f,g,h){a.t9=DA(C(168),16.0);a.pa=DA(C(14),16.0);a.Fn=3;a.CK=b;a.GA=c;a.jB=d;a.pH=e;a.lU=f;a.nn=g;a.pl=h;}
function ALs(){var a=this;B.call(a);a.ou=null;a.t4=0;}
function AJx(a,b){var c=new ALs();A4x(c,a,b);return c;}
function A4x(a,b,c){var d;d=new B4;a.ou=d;a.t4=b;d.bC=c;}
function Zi(a,b){return Cj(a.t4,b);}
var DW=G(0);
var A_N=null;var A_O=null;var A_K=null;var A_L=null;var A_M=null;var A_6=null;var A_7=null;var A_P=null;var A_Q=null;function AXT(){AXT=Bm(DW);A3h();}
function A3h(){A_N=S(C(230));A_O=S(C(378));A_K=S(C(246));A_L=S(C(364));A_M=S(C(348));A_6=S(C(230));A_7=S(C(379));A_P=S(C(380));A_Q=DD(43,45,48);}
var Y5=G(0);
var Zf=G();
function A0r(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(381)),d),C(382)),e);C0(K(b));return d+e|0;}
var Y6=G(0);
var Zd=G();
function A1f(a,b,c){var d,e;d=b;e=c;b=new J;L(b);Df(H(Df(H(b,C(383)),d),C(382)),e);C0(K(b));return d+e;}
var AGp=G();
var AJJ=G(0);
function Wa(){B.call(this);this.oQ=null;}
var A__=null;function TW(){var a=new Wa();AKg(a);return a;}
function AKg(a){a.oQ=BO();}
function EB(a,b,c){Nx(a,Db(b,c));}
function Db(b,c){return Ya(c,b);}
function Ij(a,b,c){L3(a,b,c,null);}
function L3(a,b,c,d){Nx(a,A8U(null,b,c,d));}
function Nx(a,b){BA(a.oQ,b);}
function Je(a){return CN(GF(a.oQ,A__));}
function AJN(){A__=P(By,0);}
var D1=G(0);
var A_0=null;var A_1=null;var A_X=null;var A_Y=null;var A_Z=null;var A_4=null;var A_5=null;var A_2=null;var A_3=null;function A2f(){A2f=Bm(D1);A2X();}
function A2X(){A_0=S(C(239));A_1=S(C(384));A_X=S(C(287));A_Y=S(C(385));A_Z=S(C(333));A_4=S(C(239));A_5=S(C(384));A_2=E_(118,121,122,128);A_3=DD(63,66,68);}
var If=G(0);
var QJ=G();
function A3W(a,b,c,d){var e;b=Bj();d=BT(d);e=new J;L(e);H(H(V(H(e,C(386)),c),C(319)),d);Bf(b,K(e));}
var QK=G();
function UM(){B.call(this);this.Bf=null;}
function A2P(a,b){var c;c=a.Bf.l8;c.ff=F_(b,VL(c));}
function Ql(){B.call(this);this.EK=null;}
function APY(a,b){var c,d,e,f;c=b.data;b=Bj();d=BT(c[0]);e=new J;L(e);H(H(e,C(387)),d);Bf(b,K(e));b=Bj();f=c[1];d=new J;L(d);H(H(d,C(388)),f);Bf(b,K(d));}
function Qk(){B.call(this);this.FJ=null;}
function AOz(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(389)),e);Bf(d,K(f));g=E2(I6(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(37));Br(c,i[h]);h=h+1|0;}BM(c,C(38));c=K(c);}e=new J;L(e);H(H(H(H(e,C(390)),d),C(391)),c);Bf(b,K(e));}
function Qh(){B.call(this);this.GM=null;}
function ANG(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(392)),e);Bf(d,K(f));g=Y4(I6(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(37));V(c,i[h]);h=h+1|0;}BM(c,C(38));c=K(c);}e=new J;L(e);H(H(H(H(e,C(393)),d),C(394)),c);Bf(b,K(e));}
function Qf(){B.call(this);this.FT=null;}
function A6r(a,b){var c,d,e,f,g;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(395)),e);Bf(d,K(f));g=CW(I6(b,1));b=Bj();d=BT(c[1]);c=AHY(g);e=new J;L(e);H(H(H(H(e,C(171)),d),C(396)),c);Bf(b,K(e));}
var AJp=G();
function VP(){B.call(this);this.ul=null;}
function A1g(a,b){var c;c=a.ul.mk;c.fT=F_(b,AA$(c));}
function ADr(){B.call(this);this.EL=null;}
function A1_(a,b){return 0;}
function AMp(){var a=this;B.call(a);a.kR=null;a.px=null;a.f8=null;a.Gm=null;}
function ADk(a){var b=new AMp();A4n(b,a);return b;}
function A4n(a,b){var c,d,e;c=null;d=null;e=null;a.kR=c;a.px=d;a.f8=b;a.Gm=e;}
function ADD(a){var b,c;b=a.f8;if(b===null)return C(21);c=AG3(b,C(397));return c==(-1)?a.f8:DB(a.f8,c+1|0);}
function AZn(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.kR,c.kR)&&BR(a.px,c.px)&&BR(a.f8,c.f8)?1:0;}return 0;}
function Jo(){var a=this;B.call(a);a.u9=null;a.rB=null;a.sd=null;a.BJ=null;a.tr=null;a.lD=null;}
function Bas(a,b,c,d,e,f){var g=new Jo();O8(g,a,b,c,d,e,f);return g;}
function O8(a,b,c,d,e,f,g){a.u9=b;a.rB=c;a.sd=d;a.BJ=e;a.tr=f;a.lD=g;}
function KI(){var a=this;B.call(a);a.so=null;a.ql=null;a.vI=null;}
function Bat(a,b,c){var d=new KI();Lu(d,a,b,c);return d;}
function Lu(a,b,c,d){a.so=b;a.ql=c;a.vI=d;}
function Wh(a,b){return !b?a.ql:a.vI;}
function AKa(){var a=this;B.call(a);a.j4=null;a.mq=null;a.oF=null;}
function AI9(a,b,c){var d=new AKa();A5u(d,a,b,c);return d;}
function A5u(a,b,c,d){a.j4=b;a.mq=c;a.oF=d;}
function Cx(){CD.call(this);this.os=null;}
var Bau=null;var Bav=null;var Baw=null;var Bax=null;var Bay=null;var Baz=null;var BaA=null;var BaB=null;var BaC=null;var BaD=null;var BaE=null;var BaF=null;var BaG=null;var BaH=null;var BaI=null;var BaJ=null;function AGC(){AGC=Bm(Cx);A1l();}
function Ek(a,b,c){var d=new Cx();ACw(d,a,b,c);return d;}
function A4A(a,b,c,d){var e=new Cx();AII(e,a,b,c,d);return e;}
function ALj(){AGC();return BaJ.d1();}
function ACw(a,b,c,d){AGC();Dt(a,b,c);a.os=J5(d,null);}
function AII(a,b,c,d,e){AGC();Dt(a,b,c);a.os=J5(d,e);}
function A1l(){var b;b=new Cx;FW();ACw(b,C(353),0,A_S);Bau=b;Bav=Ek(C(354),1,S(C(398)));Baw=Ek(C(356),2,S(C(399)));Bax=Ek(C(358),3,S(C(400)));Bay=Ek(C(360),4,S(C(398)));Baz=Ek(C(361),5,DD(188,63,60));BaA=Ek(C(363),6,S(C(401)));BaB=Ek(C(365),7,S(C(402)));BaC=Ek(C(367),8,S(C(403)));BaD=A4A(C(369),9,A_S,DD(52,65,52));BaE=A4A(C(370),10,S(C(404)),S(C(405)));BaF=Ek(C(371),11,S(C(406)));BaG=Ek(C(373),12,S(C(407)));BaH=Ek(C(375),13,A_S);b=Ek(C(376),14,S(C(377)));BaI=b;BaJ=I(Cx,[Bau,Bav,Baw,Bax,Bay,Baz,BaA,BaB,BaC,BaD,
BaE,BaF,BaG,BaH,b]);}
var AMX=G();
function Ku(b,c){var d,e,f;if(c<=0)return C(21);d=B6(c);e=d.data;e[0]=AMb(Ec(b,52));f=1;while(f<c){e[f]=AMb(Ec(b,62));f=f+1|0;}return Gz(d);}
function AMb(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AGX=G();
function AM6(){var a=this;B.call(a);a.KN=null;a.Qm=null;a.J0=0;a.QV=0;}
var AFG=G(0);
function AMk(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BC,8);e=DS(8);f=B6(16);g=0;h=0;i=0;while(true){j=BP(i,b);if(j>0)break;k=j>=0?10:(c.Z(C4(i))).nj;if(k==10){d=AIm(EO(f,0,g),d,h);e=ADo(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=K7(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AIm(EO(f,0,g),d,h);j=i+1|0;if(j<b&&(c.Z(C4(j))).nj==10){e=ADo(1,e,h);i=j;}else e=ADo(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new AAF;d=AGs(d,h);if(m.length!=h)e=OQ(e,h);c.kG=d;c.DN=e;return c;}
function AJ_(b){var c,d;c=M(b);BF(b);d=new P9;d.u3=b;return AMk(c,d);}
var C8=G();
var ALL=G(C8);
var AL_=G(C8);
var AKp=G(C8);
var AKA=G(C8);
var AMs=G(C8);
function Wl(){B.call(this);this.sH=null;}
function ARH(a){var b;b=a.sH;Bf(Bj(),b);}
var H2=G(CD);
var BaK=null;var A$_=null;var BaL=null;function AHD(){AHD=Bm(H2);AZ8();}
function A6P(a,b){var c=new H2();AGg(c,a,b);return c;}
function AUB(){AHD();return BaL.d1();}
function AGg(a,b,c){AHD();Dt(a,b,c);}
function AZ8(){var b;BaK=A6P(C(408),0);b=A6P(C(409),1);A$_=b;BaL=I(H2,[BaK,b]);}
function P9(){B.call(this);this.u3=null;}
function AX_(a,b){return P8(Q(a.u3,b.br));}
function AAF(){var a=this;B.call(a);a.kG=null;a.DN=null;}
var AJ8=G();
function Cj(b,c){return C5(b*c);}
function GL(){var a=this;B.call(a);a.hr=0;a.n8=null;}
var AGN=G();
function Uo(){var a=this;B.call(a);a.rY=null;a.vc=null;a.BN=null;}
var AKc=G(0);
function AJn(b){if(b===null)return C(182);if(!DH(b,C(410))&&!DH(b,C(411))&&!DH(b,C(412))&&!DH(b,C(413))&&!DH(b,C(414))&&!DH(b,C(415))){if(DH(b,C(416)))return C(193);if(DH(b,C(417)))return C(209);if(DH(b,C(418)))return C(204);if(!DH(b,C(419))&&!DH(b,C(420)))return C(182);return C(421);}return C(210);}
function AJG(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kj(b)){case -1655966961:if(!Bk(b,C(204)))break a;c=4;break a;case 3401:if(!Bk(b,C(209)))break a;c=3;break a;case 98723:if(!Bk(b,C(210)))break a;c=2;break a;case 3213227:if(!Bk(b,C(421)))break a;c=5;break a;case 3254818:if(!Bk(b,C(193)))break a;c=1;break a;case 3556653:if(!Bk(b,C(182)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=D0();e
=new J;L(e);H(H(e,C(422)),b);Bf(d,K(e));c=0;break b;}c=0;}return c;}
function ADs(){B.call(this);this.xk=null;}
function AXM(a,b,c,d){return Md(a.xk,b,c,d);}
function YH(){B.call(this);this.kS=null;}
function A6Y(a,b){var c,d,e,f,g;c=a.kS;d=c.mU;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kW;e.a=Fg(0,e.a+f|0,c.hd.a-c.kf.a|0);c=a.kS;d=c.kW;d.b=Fg(0,d.b+g|0,c.hd.b-c.kf.b|0);}a.kS.mU=b.j;return 1;}
var AGV=G();
function Mn(){return "clipboard" in $rt_globals.navigator?1:0;}
function AIB(){var a=this;B.call(a);a.cZ=null;a.cn=null;a.kX=null;a.lb=null;a.ow=null;a.ko=null;}
function Z8(a){var b=new AIB();A3Q(b,a);return b;}
function A3Q(a,b){a.cn=BO();a.ko=Baa;a.cZ=b;Z(b.di,a);}
function HF(a,b,c){a.kX=c;a.ow=b;b=B9(a.cn);while(Cb(b)){J2(Cc(b),a.ow);}}
function M2(a,b,c,d){a.ko=d;SZ(a,b,c);}
function SZ(a,b,c){var d,e;d=a.cZ;e=d.bT;if(Bc(e.a,e.b)&&d.cm!==0.0){if(a.kX!==null&&!JO(a)){a.lb=Fw(a.cZ,a.kX);d=Wn(a,b,c,null,null);b=new SL;b.uW=a;d.lf=b;CV(a.cZ,a);return;}b=new BX;X(b);N(b);}c=new Dc;Bp(c,C(423));N(c);}
function MN(a){if(JO(a)){ACG(a.cZ,a);ACx(a,null);a.ko.e();a.ko=Baa;}}
function Wn(a,b,c,d,e){var f,g,h;f=ALi();AFt(f);NO(f,c.b8());J2(f,a.ow);J0(f,a.lb,a.cZ);if(d===null)g=b.a;else{g=b.a;g=a.cZ.bT.a<((g+(EM(d)).a|0)+(EM(f)).a|0)?g-(EM(f)).a|0:(g+(EM(d)).a|0)-d.gm|0;}h=b.b;b=a.cZ.bT;NJ(f,Bd(0,Be(g,b.a-(EM(f)).a|0)),Bd(0,Be(h,b.b-(EM(f)).b|0)));b=new ADb;b.wv=a;b.ws=f;b.wt=e;f.pE=b;BA(a.cn,f);return f;}
function A6y(a,b,c){var d;a.lb=Fw(a.cZ,a.kX);d=B9(a.cn);while(Cb(d)){J0(Cc(d),a.lb,a.cZ);}}
function AFN(a){var b,c;if(EP(a.cn))return;Ca(a.cZ.bN,1);b=0;while(true){c=a.cn;if(b>=c.p)break;MC(BI(c,b),a.cZ);b=b+1|0;}}
function ASm(a,b){var c;if(!JO(a))return 0;a:{switch(b.bh){case 27:MN(a);c=1;break a;default:}c=0;}return c;}
function ACx(a,b){var c,d;c=a.cn.p-1|0;a:{while(true){if(c<0)break a;d=BI(a.cn,c);if(b===d)break;EZ(a.cn,c);Ni(d);c=c+(-1)|0;}}}
function JO(a){return a.cn.p<=0?0:1;}
function AUl(a){var b,c;S0(a.cZ.di,a);ACG(a.cZ,a);b=a.cn;c=B9(b);while(Cb(c)){Ni(Cc(c));}IO(b);}
function X6(){B.call(this);this.yX=null;}
function AR5(a,b){MO(a.yX,b);}
function V1(){B.call(this);this.AD=null;}
function A5_(a,b){var c,d,e,f;c=a.AD;if(c.gX!=3&&c.fm!=3){b=b.data;c.hc=3;d=CW(b[0]);e=E2(b[1]);Ox(c.h,d,e);if(c.f3){b=Fd(c);f=J8(EI(),c.jp);c=new J;L(c);H(H3(H(H(c,b),C(424)),f),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}
function RI(){B.call(this);this.Ak=null;}
function AYH(a,b){var c,d,e,f,g,h;c=a.Ak;if(c.fm!=3){d=b.data;c.gX=3;if((CW(d[2])).data[0]!=1)MO(c,b);else{e=CW(d[0]);f=E2(d[1]);g=c.hc!=3?0:1;Sc(c.h,e,f,g);if(c.f3){b=Fd(c);h=J8(EI(),c.jp);c=new J;L(c);H(H3(H(H(c,b),C(425)),h),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function Qn(){B.call(this);this.kH=null;}
function AX0(a){return a.kH;}
var ALG=G(0);
var Mi=G(0);
function RO(){B.call(this);this.vk=null;}
function AY6(a,b){return LB(a.vk,b);}
function PY(){B.call(this);this.BR=null;}
function A5k(a,b){var c,d;c=a.BR;d=b.br;return P8(c.charCodeAt(d)&65535);}
var AH0=G();
function AKx(b,c,d,e,f,g){g.a=c.a;g.b=f;Bv(b,d.a,d.b,g,e);Bv(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bv(b,d.a,d.b+f|0,g,e);Bv(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ALS(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bv(b,j,k,i,h);Bv(b,j,k,i,h);Bv(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bv(b,l,j,i,h);Bv(b,l,j,i,h);Bv(b,l+g|0,j+g|0,i,h);}
function Rp(){var a=this;B.call(a);a.c0=null;a.qP=null;a.fC=null;a.eo=0;a.cG=0;a.jC=null;a.kk=null;a.hL=0;a.xY=0;}
function PV(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.eo;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}E3(c);j=d+(-1)|0;b=Do(d);d=Bc(j,a.cG)%a.fC.b|0;G$(a,c,b,a.hL,g);J7(a.c0,c,0,d);if(!(j%a.eo|0))break;d=j;}}else{E3(b);k=a.eo-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;G$(a,b,Do(j),Bc(a.cG,k)+a.hL|0,g);k=k+(-1)|0;j=h;}CR(a.c0,b);j=Bd(i,e);}return j;}k=a.eo;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}E3(c);b=Do((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cG)%a.fC.b|0;G$(a,c,b,a.hL,g);J7(a.c0,c,0,d);if(!(j%a.eo|0))break;d=j;}}else{E3(b);d=0;while(d<a.eo){h=h+1|0;G$(a,b,Do((h>e?h-f|0:h)+f|0),Bc(a.cG,d)+a.hL|0,g);d=d+1|0;}CR(a.c0,b);j=Be(i,e);}return j;}
function W1(b,c,d,e){c=c.data;return d<c.length&&c[d]?Kl(b.eg,b,c[d]):e.lu;}
function NM(a,b,c,d,e,f){DP(b,a.qP.a+d.a|0,c+d.b|0,a.jC,a.kk,a.c0,e,f,a.xY);}
function G$(a,b,c,d,e){B1(b,c,a.fC.a-20.0*e,d);}
var AFK=G();
function GB(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AGa(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function U5(){var a=this;B.call(a);a.qI=null;a.qJ=null;a.iI=null;}
function A89(a,b,c){var d=new U5();AHw(d,a,b,c);return d;}
function AHw(a,b,c,d){a.qI=b;a.qJ=c;a.iI=d;}
function G7(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iI.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.io:i.ip;k=!c?i.oJ:i.oK;l=BP(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function Mv(){var a=this;B.call(a);a.ip=0;a.oK=0;a.io=0;a.oJ=0;a.pt=0;}
function NN(a,b,c,d,e){var f=new Mv();A4C(f,a,b,c,d,e);return f;}
function A4C(a,b,c,d,e,f){a.ip=b;a.oK=c;a.io=d;a.oJ=e;a.pt=f;}
var Ti=G(0);
var A_f=null;function AL1(){A_f=new R_;}
function ADy(){var a=this;B.call(a);a.tt=null;a.tu=null;}
function AY7(a,b){var c,d,e;c=a.tt;d=a.tu;c=c.fG.eu.w;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
var Gw=G(Jq);
var AEL=G(FK);
function AEO(){B.call(this);this.v$=null;}
function AXE(a,b){var c,d;c=a.v$;WG(c,FJ(c,b.j));b=Bl(c);d=c.d;Oq(b,d.y,d.B);Ip(c);}
function Ve(){B.call(this);this.yB=null;}
function A5K(a,b){var c,d;c=a.yB;d=c.en+1|0;c.en=d;c=new J;L(c);H(H(V(c,d),C(426)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function WM(){B.call(this);this.yN=null;}
function A4c(a){var b,c;b=a.yN;c=new J;L(c);H(H(H(c,C(427)),b),C(428));$rt_globals.console.info($rt_ustr(K(c)));}
function Ew(){var a=this;B.call(a);a.bf=null;a.hq=null;a.gx=null;}
function Kv(a,b,c,d){a.bf=b;a.gx=c;a.hq=d;}
function KX(a,b,c){return T_(a,b,HT(BG(a)),c);}
function T_(a,b,c,d){var e,f,g,h,i,j,k;e=A5$(a.bf.V,b);Eq(e,a.gx.b$);CX(e,c);b=new Xr;b.wT=a;b.wU=e;Ue(e,b);b=new Xq;b.xy=a;e.xM=b;b=e.bg.bT;f=ADQ(e);g=Cw(e.bg,5.0);h=Cw(e.bg,d);i=h?h+f|0:0;c=BK(g+h|0,(g+i|0)+f|0);j=new Bh;k=b.a;g=g*2|0;Rk(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);EE(e,c,j);return e;}
function AJW(a,b){var c,d,e;c=a.mH(b);if(c!==null){d=a.bf;e=a.gx;Fu(d,e.b$,e.fM,b,c);}return c===null?0:1;}
var Lk=G(0);
function AOw(a,b,c){LV(b);}
function AMG(a,b){var c;c=new St;c.vi=a;c.vj=b;return c;}
function L9(){var a=this;Ew.call(a);a.k5=null;a.db=null;a.x6=null;a.iQ=null;a.fL=null;a.tp=null;}
function BaM(a,b,c){var d=new L9();AEm(d,a,b,c);return d;}
function AEm(a,b,c,d){var e,f;Kv(a,b,c,d);a.iQ=Kc();a.fL=Kc();e=new RB;Fe(e);e.jA=IT(b);d=UL(b.V);e.gK=d;e.la=G2(d,b.V);d=new P$;Fe(d);f=new B4;ARe();ALW(f,A_b);d.B6=f;e.pe=d;d=GW(e.jA);e.f_=d;e.Gd=a;MZ(e,I(CF,[e.la,e.pe,d]));e.DX=EL(1);a.db=e;V3(e,c);f=Il(C(429),0);ET(f);c=new ABJ;c.sr=a;f.cY=c;D5(a.db.gK,f);c=T_(a,a.db,C(430),0.0);a.k5=c;d=new ABI;d.w4=a;c.iW=d;d=new ABK;d.uH=a;c.iS=d;DV(b,c);}
function AY9(a,b){var c,d,e,f,g,h,i;if(B3(a.db.f_,b)){c=a.db;d=c.jA;c=c.f_;e=a.hq;f=a.bf;BF(f);g=new VH;g.C1=f;return AAW(Jw(d,c,e,a,c,g),b);}h=P(By,1);i=h.data;b=new By;c=new VG;c.q$=a;Ce(b,c,C(431));i[0]=b;return CN(h);}
function AEP(a){var b,c;b=a.bf.V.cu;c=new R3;c.q9=a;Gs(b,c);}
function A1F(a){a.k5=null;a.db=null;a.iQ=null;a.fL=null;}
function AZY(a,b){a.gx=b;Eq(a.k5,b.b$);V3(a.db,b);}
function AZW(a,b){var c,d,e;c=b.fU;d=EN(c);a.x6=d;e=CB(a.iQ,d);if(e!==null)RC(a,e);else{b=Bj();e=new J;L(e);H(H(e,C(432)),d);Bf(b,K(e));if(HL(a.fL,d)){b=new J;L(b);H(H(b,C(433)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D2(a.fL,d,d);b=new Re;b.v3=a;b.v4=d;e=new Rf;e.tG=a;e.tF=d;V4(c,b,e);}}}
function RC(a,b){Ig(a.db.f_,b);b=a.db;CV(b.jA.cf.V,b.f_);}
function AVe(a,b){var c;AES(b);if(JF(b)>0)EW(a.db.gK);c=b.gE.data;if(c.length==1&&!b.g$.data.length)c[0].cY.e();}
function A25(a,b){if(JF(b)>0)EW(a.db.gK);LH(b);}
function A2x(a,b,c){if(AJn(c)!==C(182))Rs(b);else LV(b);}
var AEn=G();
function AWQ(a){return EL(1);}
function AAa(){var a=this;Ew.call(a);a.jf=null;a.dY=null;a.hR=null;a.gW=null;}
function AOK(a){var b;a.jf=null;a.dY=null;b=null;a.gW=b;a.hR=b;}
function A0X(a,b){var c,d,e,f;if(B3(a.dY.dK,b))return AAZ(a,1,C(283));if(B3(a.dY.dI,b))return AAZ(a,0,C(284));c=P(By,2);d=c.data;b=new By;e=new AAx;e.q6=a;Ce(b,e,C(283));d[0]=b;b=new By;f=new AAw;f.wY=a;Ce(b,f,C(284));d[1]=b;return CN(c);}
function AAZ(a,b,c){var d,e,f,g;d=P(By,1);e=d.data;f=new By;g=new ADM;g.AU=a;g.AV=b;Ce(f,g,c);e[0]=f;return CN(d);}
function Im(a,b){var c,d;c=a.bf.V.cu;d=new Uk;d.CR=a;d.CS=b;Gs(c,d);}
var Wd=G();
function AWY(a){return Oi();}
function Ov(){var a=this;Ew.call(a);a.h$=null;a.k6=null;a.dS=null;a.nu=null;a.rb=null;}
function A74(a,b,c){var d=new Ov();ADE(d,a,b,c);return d;}
function ADE(a,b,c,d){Kv(a,b,c,d);d=IT(b);a.k6=d;b=GW(d);a.dS=b;b=KX(a,b,25.0);a.h$=b;d=new AEt;d.B5=a;b.iW=d;d=new AEs;d.rG=a;b.iS=d;a.dS.yQ=a;AM9(a,c);DV(a.bf,a.h$);}
function T4(a){return a.bf.V.cU;}
function AM9(a,b){Eq(a.h$,b.b$);F5(a.k6,b);E7(a.dS,b);}
function LP(a,b){var c,d;c=a.dS;CV(c.cd,c);c=a.dS;d=new RK;d.uo=a;d.un=b;F4(c,b,d);}
function AOT(a){var b;if(T4(a)===a.dS)CV(a.bf.V,null);b=a.rb;if(b!==null)b.g(a);a.h$=null;a.dS=null;a.k6=null;a.nu=null;a.rb=null;}
function A0E(a,b){var c,d,e,f,g,h;c=new By;d=new ADF;d.rK=a;Ce(c,d,C(434));e=a.k6;f=a.dS;d=a.hq;g=a.bf;BF(g);h=new ADH;h.AG=g;return NA(Jw(e,f,d,a,f,h),b,c);}
function ABq(a){var b,c,d;b=a.bf;c=b.V.cu;d=new ABj;d.yT=a;FY(c,ND(b,d));}
var SE=G();
function ATa(a){return EL(1);}
var AE5=G(DG);
var BaN=null;function Yi(b){var c;c=new J;L(c);return K(Df(c,b));}
function AHT(){BaN=F($rt_floatcls());}
var GQ=G();
var BaO=null;var BaP=null;var A$f=null;var A$e=null;var A$d=null;function AK_(){BaO=D6([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BaP=AKd([Bq(1),Bq(10),Bq(100),Bq(1000),Bq(10000),Bq(100000),Bq(1000000),Bq(10000000),Bq(100000000),Bq(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A$f=AKd([Bq(1),Bq(10),Bq(100),Bq(10000),Bq(100000000),
D(1874919424, 2328306)]);A$e=new ACR;A$d=new U$;}
var JY=G();
var BaQ=0;var BaR=null;var BaS=null;function ALB(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rL=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nz=0;c.nl=0;return;}if(f)d=e|8388608;else{d=e<<1;while(I2(Dj(Bq(d),Bq(8388608)),FV)){d=d<<1;f=f+(-1)|0;}}g=ALK(BaS,f);if(g<0)g= -g|0;h=BaS.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JV(d,BaR.data[e],i);if(j<BaQ){while($rt_ucmp(j,BaQ)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=BaS.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JV(d,
BaR.data[e],i);}e=d<<1;d=e+1|0;h=BaR.data;f=g+1|0;k=h[f];l=i-1|0;m=JV(d,k,l);n=JV(e-1|0,BaR.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DM(Bq(d),Bq(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.nz=d;c.nl=g-50|0;}
function JV(b,c,d){return G_(Gt(Cl(Dj(Bq(b),D(4294967295, 0)),Dj(Bq(c),D(4294967295, 0))),32-d|0));}
function AKH(){BaQ=$rt_udiv((-1),10);BaR=D6([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);BaS=D6([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function U$(){var a=this;B.call(a);a.nz=0;a.nl=0;a.rL=0;}
function OT(){var a=this;B.call(a);a.FA=null;a.xF=0.0;a.D6=0.0;a.gM=null;a.jM=null;a.ot=null;a.gq=0;}
function AMN(a,b){var c;if(b!==null){a.jM=b;return a;}c=new BX;Bp(c,C(435));N(c);}
function AHK(a,b){var c;if(b!==null){a.ot=b;return a;}c=new BX;Bp(c,C(435));N(c);}
function Z3(a,b,c,d){var e,f,g,$$je;e=a.gq;if(!(e==2&&!d)&&e!=3){a.gq=d?2:1;while(true){try{f=AIO(a,b,c);}catch($$e){$$je=E$($$e);if($$je instanceof Bt){g=$$je;N(AZx(g));}else{throw $$e;}}if(Iv(f))return f;if(Jk(f)){if(d&&Eg(b)){g=a.jM;HC();if(g===A$J)return EF(Ck(b));if(Ck(c)<=M(a.gM))return A$M;FI(b,b.bd+Ck(b)|0);if(a.jM===A$K)NK(c,a.gM);}return f;}if(Se(f)){g=a.jM;HC();if(g===A$J)return f;if(g===A$K){if(Ck(c)<M(a.gM))return A$M;NK(c,a.gM);}FI(b,b.bd+Ls(f)|0);}else if(MH(f)){g=a.ot;HC();if(g===A$J)break;if
(g===A$K){if(Ck(c)<M(a.gM))return A$M;NK(c,a.gM);}FI(b,b.bd+Ls(f)|0);}}return f;}b=new Dc;X(b);N(b);}
function AKf(a,b){var c,d,e,f;c=a.gq;if(c&&c!=3){b=new Dc;X(b);N(b);}if(!Ck(b))return AJg(0);if(a.gq)a.gq=0;d=AJg(Bd(8,Ck(b)*a.xF|0));while(true){e=Z3(a,b,d,0);if(Jk(e))break;if(Iv(e))d=ABy(a,d);if(!N7(e))continue;U9(e);}b=Z3(a,b,d,1);if(N7(b))U9(b);while(true){f=a.gq;if(f!=3&&f!=2)break;a.gq=3;if(Jk(A$N)){d.ew=d.bd;d.bd=0;d.j9=(-1);return d;}d=ABy(a,d);}b=new Dc;X(b);N(b);}
function ABy(a,b){var c,d,e;c=b.iV;d=K7(c,Bd(8,c.data.length*2|0));e=ALk(d,0,d.data.length);FI(e,b.bd);return e;}
function AD0(){var a=this;B.call(a);a.bs=0;a.bw=0;}
function DY(a,b){var c=new AD0();ALq(c,a,b);return c;}
function ALq(a,b,c){a.bs=b;a.bw=c;}
function ANH(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.bs==c.bs&&a.bw==c.bw?1:0;}return 0;}
function AUC(a){var b,c,d,e;b=P(B,2).data;b[0]=C4(a.bs);b[1]=C4(a.bw);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.br)|0;d=d+1|0;}return c;}
function AOe(a){var b,c,d;b=a.bs;c=a.bw;d=new J;L(d);Br(d,40);Br(V(H(V(d,b),C(37)),c),41);return K(d);}
function A3A(a,b){var c;b=b;c=BP(a.bs,b.bs);if(!c)c=BP(a.bw,b.bw);return c;}
var AG5=G(C8);
function VJ(){B.call(this);this.EI=null;}
function AOE(a){Bf(Bj(),C(436));}
var AFm=G(0);
var Baa=null;function AIw(){Baa=new Yh;}
function Ye(){B.call(this);this.sz=null;}
function A5G(a){AE1(a.sz);}
function Yc(){B.call(this);this.rX=null;}
function AQd(a){AB$(a.rX);}
function Yb(){B.call(this);this.uS=null;}
function AN8(a){AAh(a.uS);}
function Yd(){B.call(this);this.z8=null;}
function A6Z(a){AEK(a.z8);}
function SH(){B.call(this);this.yC=null;}
function A19(a){AC6(a.yC);}
function AAn(){B.call(this);this.Bv=null;}
function AVM(a){Z$(a.Bv);}
function AAm(){B.call(this);this.sy=null;}
function A1R(a){var b;b=a.sy;Ut(new Nw,b.v,b.hk,new Xa);}
function AAp(){B.call(this);this.w1=null;}
function A3j(a){var b;b=a.w1;AEm(new L9,b.v,b.hk,new QR);}
function AAo(){B.call(this);this.vB=null;}
function AVI(a){var b;b=a.vB;ADE(new Ov,b.v,b.hk,new Xt);}
function Y7(){B.call(this);this.vK=null;}
function ASr(a){Ln(a.vK);}
function Z1(){B.call(this);this.CU=null;}
function AYn(a,b){var c,d;c=a.CU;d=c.en+1|0;c.en=d;c=b.jb;b=new J;L(b);H(H(V(b,d),C(437)),c);$rt_globals.console.info($rt_ustr(K(b)));}
var R_=G();
function A2C(a,b){}
function Id(){CF.call(this);this.cs=null;}
function MZ(a,b){var c;if(a.cs===null){a.cs=b;return;}c=new DU;X(c);N(c);}
function A2F(a){var b,c,d;b=a.cs.data;c=b.length;d=0;while(d<c){b[d].bV();d=d+1|0;}}
function AS3(a,b){var c,d,e;c=a.cs.data;d=c.length;e=0;while(e<d){c[e].dJ(b);e=e+1|0;}}
function AX8(a,b){var c,d,e,f;c=0;d=a.cs.data;e=d.length;f=0;while(f<e){c=c|d[f].cF(b);f=f+1|0;}return c;}
function APz(a,b,c,d){J9(a,b,c,d);a.C0();}
function A5q(a,b,c,d){var e,f,g,h,i;e=0;f=a.cs.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.cM(b,c,d);h=h+1|0;}return e;}
function AVK(a,b,c){var d,e,f,g,h;d=a.cs.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.j)){h=g.cw(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A5B(a,b,c){var d,e,f,g,h;d=0;e=a.cs.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.j))d=d|h.dN(b,c);g=g+1|0;}return d;}
function A53(a,b){var c,d,e,f,g;c=0;d=a.cs.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.j))c=c|g.bZ(b);f=f+1|0;}return c;}
function AQb(a,b,c,d){var e,f,g,h,i;e=0;f=a.cs.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.dL(b,c,d);h=h+1|0;}return e;}
function A5O(a){var b,c,d;b=a.cs.data;c=b.length;d=0;while(d<c){b[d].kB();d=d+1|0;}}
function Iz(){Id.call(this);this.eO=null;}
function Qx(a,b){Fe(a);a.eO=AYZ(b);}
function AR_(a){var b,c,d,e;b=Cj(20.0,a.bX);c=(a.k.a-b|0)/2|0;d=ALy(a.i);e=BK(c,a.k.b);a.cs.data[0].dM(d,e,a.bX);d.a=(a.i.a+a.k.a|0)-c|0;a.cs.data[1].dM(d,e,a.bX);e.a=(a.k.a-c|0)-c|0;d.a=a.i.a+c|0;a.cs.data[2].dM(d,e,a.bX);}
function AHa(){var a=this;Iz.call(a);a.dK=null;a.dI=null;a.k1=null;a.mb=null;a.wk=null;}
function AMB(a){var b=new AHa();A2O(b,a);return b;}
function A2O(a,b){var c,d;Qx(a,b);a.dK=UL(b);a.dI=UL(b);a.k1=G2(a.dK,b);a.mb=G2(a.dI,b);c=ANW(a.k1,a.dK);d=ANW(a.mb,a.dI);OH(a.eO,c,d);a.wk=AIT(c,d);MZ(a,I(CF,[a.k1,a.mb,a.eO]));}
function OI(a,b){a.eO.iE=b;Kt(a.dK,b);J1(a.dK,a.k1);Kt(a.dI,b);J1(a.dI,a.mb);}
function AB9(a,b){a.wk.he=b;a.eO.eB=b;}
function FC(){var a=this;CF.call(a);a.cW=null;a.W=null;a.fo=null;}
function BaT(){var a=new FC();Mb(a);return a;}
function Mb(a){Fe(a);a.cW=new Bh;a.W=new Bh;}
function A0z(a,b){a.fo=b;}
function T5(a,b,c){Y(a.cW,b,c);}
function Uj(a){var b;b=a.fo;if(b!==null)ADK(b);}
function AG4(a){var b;b=a.W;b.a=XU(a,b.a);b=a.W;b.b=AD8(a,b.b);}
function AIf(a,b){var c,d;c=a.W.a;d=XU(a,b);a.W.a=d;return c==d?0:1;}
function ANa(a,b){var c,d;c=a.W.b;d=AD8(a,b);a.W.b=d;return c==d?0:1;}
function AD8(a,b){return Bd(0,Be(b,a.cW.b-a.k.b|0));}
function XU(a,b){return Bd(0,Be(b,a.cW.a-a.k.a|0));}
function R5(){var a=this;FC.call(a);a.b1=null;a.ei=null;a.iv=null;a.BS=null;a.ev=null;a.cb=null;a.fa=null;a.f2=null;a.d3=0;a.fZ=0;a.CZ=null;a.ef=0;a.eZ=0;a.hV=0;a.gn=0;a.gb=0;a.c2=0;a.fb=null;a.kN=null;a.zU=null;a.iT=null;}
function A9q(a,b){var c=new R5();AMK(c,a,b);return c;}
function AMK(a,b,c){Mb(a);a.ei=Td();a.iv=new Bh;a.cb=BaU;a.fa=P(Ko,0);a.ef=0;a.eZ=0;a.hV=0;a.gn=0;a.gb=0;a.fb=AJY(0);a.iT=Kc();a.b1=b;a.kN=c;a.CZ=c;Q4(a);}
function Q4(a){a.d3=Cj(2.0,a.b1.cm);}
function Wx(a){return a.cb.data.length?0:1;}
function X9(a,b){Uh(a);a.cb=b;}
function Uh(a){Y(a.iv,0,0);}
function W7(a,b,c){a.zU=b;a.BS=c;a.ev=null;a.fb=null;a.fZ=0;Uh(a);}
function A5I(a){a.f2=BY(a.f2,null);Y(a.iv,0,0);E9(a.iT);a.fb=null;a.cb=BaU;a.fa=null;a.ef=0;a.eZ=0;a.hV=0;ACk(a.ei);a.kN=null;}
function AZM(a,b,c){Zr(a);Q4(a);a.ev=null;a.fb=null;a.fZ=0;}
function AXV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KF(a.b1);if(Wx(a))return;Lj(a);Cr(c,a.ev);d=Er(a);e=AJF(c,a.fZ);f=Be(Iq(a.k.b,d),a.cb.data.length)+30|0;g=a.zU.CK;h=a.fa.data;d=h.length;if(d<f){a:{i=a.gn;j=a.gb;k=a.cb;l=a.fb;m=a.iT;n=P(Ko,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hh!==c){ADP(l,q,m);o[f]=Nb(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Nb(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Nb(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ADP(l,c,m);h[f]=null;}f=f+1|0;}a.fa=n;Ct(a.iv,Na(a.fb));ZF(a,a.b1.bN);}a.gn=Be((a.W.b+a.d3|0)/(Er(a)+a.d3|0)|0,a.cb.data.length-1|0);a.gb=Be((((a.W.b+a.ei.u.b|0)-1|0)+a.d3|0)/(Er(a)+a.d3|0)|0,a.cb.data.length-1|0);if(!a.fa.data.length)return;AJA(a,e);ADG(a,b);q=g.BJ;c=a.i;Bv(b,c.a,c.b,a.k,q);c=a.ei.w;i=c.a;j=c.b;p=Cw(a.b1,2.0);s=a.b1.d_;t=a.gn;u=i+p|0;while(t<=a.gb){l=Y3(a,t);d=Bc(t,Er(a));v
=t+1|0;w=d+Bc(v,a.d3)|0;x=u+a.ef|0;y=x+a.eZ|0;z=a.c2!=t?0:1;m=!z?q:g.tr;ba=!z?g.u9:g.lD;bb=!z?g.rB:g.lD;bc=!z?g.sd:g.lD;bd=(j+w|0)-a.W.b|0;DP(b,u,bd,l.jV,l.uk,a.f2,ba,m,a.b1.cN);DP(b,x,bd,l.kn,l.lB,a.f2,bb,m,a.b1.cN);DP(b,y,bd,l.jW,l.k_,a.f2,bc,m,a.b1.cN);d=l.jV.a;be=u+d|0;Y(s,Bd(0,a.ef-d|0),l.jV.b);Bv(b,be,bd,s,m);d=u+a.ef|0;f=l.kn.a;bf=d+f|0;Y(s,Bd(0,a.eZ-f|0),l.kn.b);Bv(b,bf,bd,s,m);d=l.jW.a;bg=y+d|0;Y(s,Bd(0,(((a.ei.u.a-d|0)-a.eZ|0)-a.ef|0)-p|0),l.jW.b);Bv(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;Y(s,p,Er(a)+a.d3
|0);Bv(b,bh,bd,s,q);t=v;}Gq(b);}
function AJA(a,b){var c,d,e,f,g,h;c=0;d=a.gn;while(d<=a.gb){e=Y3(a,d);if(!(e!==null&&e.hh===a.cb.data[d])){f=a.fa.data;g=a.cb;e=a.fb;h=a.iT;c=d%f.length|0;if(f[c]!==null)ADP(e,f[c],h);f[c]=Nb(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.iv,Na(a.fb));ZF(a,a.b1.bN);}}
function ZF(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.iv;c=Eb(b,c.a+150|0,c.b,a.b1.cN);Cr(c,a.ev);d=a.ev;e=d.ey;f=e-(e+d.eR)/16.0;g=a.fa.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hh.lR;k=d.lB;B1(c,j,k.bp+a.fZ,f+k.bt);j=d.hh.l9;d=d.k_;B1(c,j,d.bp+a.fZ,f+d.bt);}i=i+1|0;}a:{d=a.iT;if(d.de>0){h=d.c8;i=0;b:while(true){g=d.cc.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cK;l=j.cT;k=k;l=l.mw;B1(c,k,l.bp+a.fZ,f+l.bt);j=j.c6;if(h!=d.c8)break b;}i=i+1|0;}b=new Is;X(b);N(b);}}if(a.f2===null)a.f2=C3(b);CR(a.f2,
c);EK(c);}
function Y3(a,b){var c;c=a.fa.data;return c[b%c.length|0];}
function A3y(a,b){Ct(a.ei.u,b);}
function A4K(a,b){Ct(a.ei.w,b);}
function Zr(a){var b,c,d,e,f,g,h,i,j;b=KF(a.b1);if(Wx(a))return;Lj(a);Cr(b,a.ev);c=AJF(b,a.fZ);d=a.cb.data;e=d.length;f=0;while(f<e){g=d[f];h=NV(c,g.hZ);i=NV(c,g.lR);j=NV(c,g.l9);a.ef=Bd(a.ef,h);a.eZ=Bd(a.eZ,i);a.hV=Bd(a.hV,j);f=f+1|0;}}
function ASc(a,b){var c;c=ABl(a,b.j);if(c>=0)a.c2=c;return Fo(a.ei,a.i)&&G3(a.b1.c3)?1:0;}
function AQj(a,b,c){if(!Fo(a.ei,b.j)&&!Lz(a.ei)){b=a.CZ;if(b!==null)b.e();}return null;}
function AUt(a,b,c,d){var e;if(d==1){e=ABl(a,b.j);if(e>=0)VA(a,a.cb.data[e]);}return 1;}
function VA(a,b){a.kN.e();b.uY.e();}
function ABl(a,b){var c,d,e;if(!a.fa.data.length)return (-1);c=Er(a);d=(b.b-a.i.b|0)+a.W.b|0;e=a.d3;e=(d+e|0)/(c+e|0)|0;if(e<a.cb.data.length)return e;return (-1);}
function Er(a){return Fh(a.ev);}
function Lj(a){var b;if(a.ev===null){b=Fw(a.b1,a.BS);a.ev=b;a.fb=AJY(Fh(b));a.fZ=C5(a.ev.qD);}}
function A4X(a,b){var c,d,e;a:{switch(b.bh){case 13:VA(a,a.cb.data[a.c2]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.c2=a.gn;b=a.fo;c=a.W;JC(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.c2=a.gb;b=a.fo;c=a.W;JC(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.c2=a.cb.data.length-1|0;break a;case 36:case 37:a.c2=0;break a;case 38:d=a.c2;e=a.cb.data.length;a.c2=((d+e|0)
-1|0)%e|0;break a;case 40:a.c2=(a.c2+1|0)%a.cb.data.length|0;break a;default:break a;}a.kN.e();return 0;}e=a.c2;if(e<=a.gn)JC(a.fo,a.W.a,Bc(e,Er(a))+Bc(a.c2,a.d3)|0);else if(e>=a.gb)JC(a.fo,a.W.a,(Bc(e+1|0,Er(a))+Bc(a.c2+2|0,a.d3)|0)-a.k.b|0);return 0;}
var V8=G();
function AWA(a){}
function AGB(){var a=this;CF.call(a);a.oV=null;a.yO=null;a.BL=null;a.bU=null;a.dB=null;a.dP=null;a.vf=null;a.rI=null;a.wy=0.0;a.p5=null;a.pp=null;}
function G2(a,b){var c=new AGB();AXB(c,a,b);return c;}
function AXB(a,b,c){var d;c=c.c3;Fe(a);d=new Qv;d.zT=a;a.yO=d;d=new Qu;d.AH=a;a.BL=d;a.wy=10.0;a.bU=b;a.oV=c;b.fo=a;}
function AVg(a){var b;b=a.bU;b.fo=null;a.bU=BY(b,null);}
function JB(a,b,c){var d;a.pp=c;a.p5=b;d=a.dB;if(d!==null)In(d,b,c);b=a.dP;if(b!==null)In(b,a.p5,a.pp);}
function AQN(a,b,c,d){J9(a,b,c,d);J9(a.bU,b,c,d);if(d!==0.0)ADK(a);}
function JC(a,b,c){Lx(a,b);L4(a,c);}
function ADK(a){var b;AG4(a.bU);b=F2(a)*3|0;if(AAB(a,b))US(a);else a.dP=null;if(AFj(a,b))XM(a);else a.dB=null;}
function AFj(a,b){var c;c=a.k.b;return c>b&&a.bU.cW.b>c?1:0;}
function AAB(a,b){var c;c=a.k.a;return c>b&&a.bU.cW.a>c?1:0;}
function US(a){var b,c,d,e,f,g;b=a.dP;if(b===null)b=Jv();a.dP=b;PF(a,b);c=a.dP;b=a.bU;d=b.W.a;e=a.i;f=e.a;g=a.k;Sb(c,d,f,g.a,b.cW.a,e.b+g.b|0,F2(a));}
function XM(a){var b,c,d,e,f,g;b=a.dB;if(b===null)b=Jv();a.dB=b;PF(a,b);c=a.dB;b=a.bU;d=b.W.b;e=a.i;f=e.b;g=a.k;KJ(c,d,f,g.b,b.cW.b,e.a+g.a|0,F2(a));}
function F2(a){return DE(a,a.wy);}
function PF(a,b){In(b,a.p5,a.pp);}
function A34(a,b){var c;a.bU.dJ(b);if(!(a.dB===null&&a.dP===null)){Ca(b,1);c=a.dB;if(c!==null)He(c,b);c=a.dP;if(c!==null)He(c,b);c=a.dB;if(c!==null)Hj(c,b);c=a.dP;if(c!==null)Hj(c,b);Ca(b,0);}}
function Ur(a,b){var c,d;a:{b:{c=a.dB;if(!(c!==null&&I5(c,b))){c=a.dP;if(c===null)break b;if(!I5(c,b))break b;}d=1;break a;}d=0;}return d;}
function AVH(a,b,c,d){return !Ur(a,b.j)&&!a.bU.cM(b,c,d)?0:1;}
function Lx(a,b){var c;b=AIf(a.bU,b);if(AAB(a,F2(a)*3|0))US(a);if(b){c=a.vf;if(c!==null)c.e();}}
function L4(a,b){var c;if(AD$(a,b)){c=a.rI;if(c!==null)c.e();}}
function AD$(a,b){var c;c=ANa(a.bU,b);if(AFj(a,F2(a)*3|0))XM(a);return c;}
function AVi(a,b,c){var d,e;d=a.dB;if(d!==null){e=Gi(d,b.j,a.yO,1);if(e!==null)return e;}d=a.dP;if(d!==null){e=Gi(d,b.j,a.BL,0);if(e!==null)return e;}return a.bU.cw(b,c);}
function ATo(a,b,c){return Ur(a,b.j)?1:0;}
function AS$(a,b){var c,d,e;c=a.dB;d=c!==null&&Gp(c,b.j,a.oV)?1:0;c=a.dP;e=c!==null&&Gp(c,b.j,a.oV)?1:0;return !d&&!e&&!a.bU.bZ(b)?0:1;}
function AZ_(a,b,c,d){var e,f;if(!B3(a,b.j))return 0;e=Cj(d*0.5,a.bX);f=Cj(c*0.5,a.bX);if(b.bJ){f=f+e|0;e=0;}if(a.dB!==null&&e)L4(a,a.bU.W.b+e|0);if(a.dP!==null&&f)Lx(a,a.bU.W.a+f|0);return 1;}
function AJi(a){var b,c;b=F2(a);c=a.bU.h_();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var AEX=G();
function APA(a,b){}
function AEZ(){var a=this;B.call(a);a.vs=null;a.vt=null;}
function ANI(a,b){var c,d,e;c=a.vs;d=a.vt;b=BT(b);e=new J;L(e);H(H(H(e,d),C(29)),b);CX(c,K(e));}
function QL(){var a=this;FC.call(a);a.mD=null;a.qj=null;a.zg=null;a.sE=0.0;}
function AWI(a){var b;b=Cj(20.0,a.bX);return BK(b,b);}
function A3E(a,b){T5(a,b.a*3|0,b.b*5|0);a.zg.g(b);}
function AW1(a,b){var c,d,e,f,g,h,i,j,k,l,m;AMQ(a,b);ADG(a,b);c=Cj(30.0,a.bX);d=a.W;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.qj;d.b=c;d.a=c;a.mD.bC=1.0;while(h<=e){g=a.i.b-a.W.b|0;j=f;while(j<=i){k=a.i.a-a.W.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AME(l);m=m+1|0;}Wk(AMa(l),0.75,a.sE,a.mD);Bv(b,k+j|0,g+h|0,a.qj,a.mD);j=j+c|0;}h=h+c|0;}Gq(b);}
function ASJ(a,b,c){return A_f;}
function AEY(){var a=this;B.call(a);a.rd=null;a.re=null;}
function AVy(a){var b,c;b=a.rd;c=a.re;IJ(b.v,c);Kh(c);}
function Vl(){var a=this;CF.call(a);a.gp=null;a.hQ=null;a.j6=null;a.eH=null;a.k$=0.0;a.eS=0;a.iD=0;a.d$=null;a.m6=null;}
function Wz(a){var b;if(OG(a))return 0;ADA(a);b=Cw(a.gp,a.k$);return Fh(a.eH)+(b*2|0)|0;}
function Sz(a){var b;b=a.k;return b.a&&b.b?0:1;}
function OG(a){return a.hQ!==null&&a.j6!==null?0:1;}
function Ra(a,b){a.k.b=b;}
function Rh(a,b,c,d,e){var f,g;f=a.gp.d_;Y(f,d,a.k.b);g=a.i;Bv(b,g.a+c|0,g.b,f,e);}
function ADA(a){if(a.eH===null)a.eH=Fw(a.gp,a.hQ);}
function RB(){var a=this;Id.call(a);a.DX=null;a.Gd=null;a.jA=null;a.pe=null;a.la=null;a.gK=null;a.f_=null;}
function ARB(a){var b,c,d,e;b=a.k.a/4|0;c=b+DE(a,1.0)|0;d=ALy(a.i);e=BK(b,a.k.b);a.cs.data[0].dM(d,e,a.bX);d.a=a.i.a+b|0;e.a=c-b|0;a.cs.data[1].dM(d,e,a.bX);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.cs.data[2].dM(d,e,a.bX);}
function V3(a,b){Kt(a.gK,b);J1(a.gK,a.la);F5(a.jA,b);E7(a.f_,b);}
function A0S(a){var b,c;b=AIE(a.f_);c=AJi(a.la);return BK((b.a+a.pe.k.a|0)+c.a|0,b.b);}
function HE(){var a=this;B.call(a);a.cY=null;a.jD=null;a.o6=null;a.hB=null;a.ke=0;a.hO=0;a.hM=0;}
function BaV(a,b){var c=new HE();TP(c,a,b);return c;}
function TP(a,b,c){a.hB=YP(b);a.ke=c;a.hO=0;}
function Ei(a){return (Ke(a.hB,0)).x;}
function AFD(a){a.hO=60084;}
function Js(a){return a.hO!=60084?0:1;}
function AGA(a){a.hO=60086;}
function AGK(a){a.hM=60035;}
function LV(a){a.hM=60027;}
function Rs(a){a.hM=60137;}
function ET(a){a.hM=60151;}
function C_(){HE.call(this);this.fi=null;}
var BaW=null;var BaX=null;function Il(a,b){var c=new C_();Kr(c,a,b);return c;}
function AL7(a,b,c){var d=new C_();AMj(d,a,b,c);return d;}
function Kr(a,b,c){TP(a,b,c);a.fi=BaW;}
function AMj(a,b,c,d){TP(a,b,c);a.fi=BaW;a.fi=d;}
function A5W(a){return Ei(a);}
function AMM(a){var b,c,d;b=P(HE,AFe(a));c=b.data;if(RG(a,b,0)==c.length)return b;d=new Bt;X(d);N(d);}
function JF(a){return a.fi.data.length;}
function AFe(a){var b,c,d,e;b=1;if(Js(a)){c=a.fi.data;d=c.length;e=0;while(e<d){b=b+AFe(c[e])|0;e=e+1|0;}}return b;}
function Pe(a){var b,c,d,e;b=1;c=a.fi.data;d=c.length;e=0;while(e<d){b=b+Pe(c[e])|0;e=e+1|0;}return b;}
function RG(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(Js(a)){d=a.fi.data;c=d.length;f=0;while(f<c){e=RG(d[f],b,e);f=f+1|0;}}return e;}
function Ie(a){AFD(a);ET(a);}
function IY(a){AGA(a);AGK(a);}
function Vn(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=OU(Ei(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AHN(){BaW=P(C_,0);BaX=new AFs;}
function ABJ(){B.call(this);this.sr=null;}
function APK(a){AEP(a.sr);}
function ABI(){B.call(this);this.w4=null;}
function AUc(a){var b;b=a.w4;CV(b.bf.V,b.tp);}
function ABK(){B.call(this);this.uH=null;}
function A2s(a){var b,c;b=a.uH;c=b.bf.V.cU;if(b.db.f_!==c)c=null;b.tp=c;}
function Tt(){B.call(this);this.tz=null;}
function AYT(a){Im(a.tz,1);}
function Tr(){B.call(this);this.v7=null;}
function AXo(a){Im(a.v7,0);}
function Ts(){B.call(this);this.yy=null;}
function A07(a){CV(a.yy.bf.V,null);}
function Tq(){B.call(this);this.F3=null;}
function AVv(a){}
function AEt(){B.call(this);this.B5=null;}
function ARf(a){var b;b=a.B5;CV(b.bf.V,b.nu);}
function AEs(){B.call(this);this.rG=null;}
function AVD(a){var b;b=a.rG;b.nu=b.dS!==T4(b)?null:b.dS;}
var AA_=G(DG);
var BaY=null;function Di(b,c){return Long_udiv(b, c);}
function AJR(b,c){return Long_urem(b, c);}
function DM(b,c){return Long_ucompare(b, c);}
function AKP(){BaY=F($rt_longcls());}
function AFk(){B.call(this);this.Cz=null;}
function A1E(a){Z6(a.Cz);}
function Yy(){B.call(this);this.zR=null;}
function AYv(a){var b;b=a.zR;DV(b.v,ZO(b));}
function ACJ(){B.call(this);this.oE=null;}
var BaU=null;function ARq(){var a=new ACJ();AGl(a);return a;}
function AGl(a){a.oE=BO();}
function Xb(a,b,c,d,e){var f;f=new LA;f.uY=e;f.lR=c;f.l9=d;f.hZ=b;BA(a.oE,f);}
function AEl(a){return GF(a.oE,BaU);}
function ABF(b){return b===null?C(21):ADD(b);}
function AML(){BaU=P(LA,0);}
function Ko(){var a=this;B.call(a);a.uk=null;a.lB=null;a.k_=null;a.jV=null;a.kn=null;a.jW=null;a.hh=null;}
function Nb(b,c,d,e){var f,g,h;f=new Ko;f.jV=new Bh;f.kn=new Bh;f.jW=new Bh;f.hh=b;g=CB(e,b.hZ);if(g!==null)g.i_=g.i_+1|0;else{g=new ADV;h=KP(c,b.hZ,d);g.i_=1;g.mw=h;D2(e,b.hZ,g);}e=g.mw;f.uk=e;Y(f.jV,e.bi|0,e.bC|0);e=KP(c,b.lR,d);f.lB=e;Y(f.kn,e.bi|0,e.bC|0);b=KP(c,b.l9,d);f.k_=b;Y(f.jW,b.bi|0,b.bC|0);return f;}
function ADP(b,c,d){var e,f,g;e=c.hh.hZ;f=CB(d,e);g=f.i_-1|0;f.i_=g;if(!g){LU(d,e);Jj(b,f.mw);}Jj(b,c.lB);Jj(b,c.k_);}
var O4=G(0);
var A_T=null;var A_U=null;function AHx(){A_T=E_(40,40,40,200);A_U=E_(43,43,43,128);}
function LM(){var a=this;FC.call(a);a.gF=null;a.cD=null;a.e_=null;a.ib=null;a.gN=null;a.mg=null;a.m8=null;a.BV=0;a.rD=0;a.o4=null;a.gv=null;a.gw=null;a.hp=null;a.h2=null;a.h8=null;a.jK=null;a.g0=null;a.sg=0;a.kz=0;}
function ATW(a){OV(a.ib);Zk(a.cD);Pl(a);}
function Pl(a){a.gv=BY(a.gv,null);a.gw=BY(a.gw,null);a.hp=BY(a.hp,null);a.h2=BY(a.h2,null);a.h8=BY(a.h8,null);a.jK=BY(a.jK,null);a.g0=BY(a.g0,null);}
function X4(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hp;break a;case 60084:c=a.gw;break a;case 60086:c=a.gv;break a;case 60136:c=a.g0;break a;case 60137:c=a.jK;break a;case 60151:c=a.h2;break a;default:c=null;break a;}c=a.h8;}return c;}
function Kt(a,b){var c,d;a.gN=b;c=BR(a.mg,b.qe);d=BR(a.m8,b.po);if(!(c&&d)){a.mg=b.qe;a.m8=b.po;if(a.bX!==0.0)TF(a);}}
function AOm(a,b,c){Qt(a.cD,c);if(a.mg!==null)TF(a);}
function TF(a){var b,c,d,e,f;TM(a.ib);b=a.cD;c=a.mg;d=a.bX;e=a.gF.bN;f=b.ho;b.dj=AKG(c.is,c.hf*d,c.ku,c.kK,f,e);S$(a.cD,1.25,a.gF.bN);Pl(a);b=Fw(a.gF,a.m8);a.gv=BY(a.gv,FO(a,60086,b));a.gw=BY(a.gw,FO(a,60084,b));a.hp=BY(a.hp,FO(a,60035,b));a.h2=BY(a.h2,FO(a,60151,b));a.h8=BY(a.h8,FO(a,60027,b));a.jK=BY(a.jK,FO(a,60137,b));a.g0=BY(a.g0,FO(a,60136,b));a.sg=Bd(Bd(Bd(Bd(BU(a.hp),BU(a.h2)),BU(a.h8)),BU(a.g0)),BU(a.g0));a.kz=Bd(BU(a.gw),BU(a.gv));PS(a);}
function PS(a){T5(a,a.cW.a,Bc(a.e_.fI.data.length,a.cD.ej));Uj(a);}
function A2c(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;c=a.gN.bv.es;d=a.i;Bv(b,d.a,d.b,a.k,c);BF(a.cD.dj);e=a.cD.ej;f=a.e_.fI.data.length;if(!f)return;g=Be(f,Iq(a.k.b,e)+7|0);h=a.ib;if(h.data.length<g)a.ib=AAi(g,h,a.cD,a.BV,a.rD,a.e_);N2(b,a.i,a.k);i=a.W.b;j=f-1|0;k=AHJ(i,e,j);i=AHJ((a.W.b+a.k.b|0)-1|0,e,j);a.BV=k;a.rD=i;l=a.k.a;m=DE(a,4.0);n=DE(a,1.0)+a.kz|0;o=DE(a,3.0);p=DE(a,5.0);q=DE(a,1.0);r=0;s=a.i.a-a.W.a|0;t=DE(a,1.0);d=a.fo;u=t+(d===null?0:F2(d))|0;while(k<=i){v=a.e_.fI.data[k];h
=a.ib.data;t=k%h.length|0;w=h[t];YB(w,v.hB,b,e,l,0,k,t);x=Bc(e,k)-a.W.b|0;y=null;z=m+Bc(n,v.ke)|0;ba=a.o4!==v?0:1;if(ba){Y(a.gF.d_,a.k.a,e);d=a.i;Bv(b,d.a,d.b+x|0,a.gF.d_,a.gN.bv.gL);}bb=X4(a,v.hO);bc=X4(a,v.hM);if(bb!==null){d=a.gN;bd=d.j_.data[0];AFu(a,b,bb,s+z|0,(a.i.b+x|0)-q|0,!ba?c:d.bv.gL,bd.hm);}if(bc!==null){d=a.gN;bd=d.j_.data[0];AFu(a,b,bc,((s+z|0)+a.kz|0)+o|0,(a.i.b+x|0)-q|0,!ba?c:d.bv.gL,bd.hm);}be=FS(v.hB);bf=(((z+a.kz|0)+o|0)+a.sg|0)+p|0;r=Bd(r,(bf+be|0)+u|0);QP(w,a.i.b+x|0,s+bf|0,b,l,e,0,a.gN,
null,null,null,ba,0,y);k=k+1|0;}d=a.cW;if(d.a!=r){d.a=r;Uj(a);}Gq(b);}
function AFu(a,b,c,d,e,f,g){Cv(a.cD.jR,0.0,0.0,BU(c),CT(c));Ct(a.cD.iA,c.e2);Hv(a.cD,b,c,d,e,g,f);}
function A5b(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cD.ej;f=((b.j.b-a.i.b|0)+a.W.b|0)/e|0;if(f>=0){g=a.e_.fI.data;if(f<g.length){h=g[f];if(!Xv(a,b,f)){b=h.o6;if(b!==null)b.e();}}}}return 1;}
function APk(a,b,c){var d,e,f,g;d=a.cD.ej;e=((b.j.b-a.i.b|0)+a.W.b|0)/d|0;if(!c&&e>=0){f=a.e_.fI.data;if(e<f.length){g=f[e];if(Xv(a,b,e)){b=g.jD;if(b!==null)b.e();}else{a.o4=g;b=g.cY;if(b!==null)b.e();}}}return A_f;}
function Xv(a,b,c){var d,e,f,g,h,i,j;d=a.e_.fI.data[c];e=DE(a,4.0);f=DE(a,1.0);g=Bd(BU(a.gw),BU(a.gv));h=e+Bc(f+g|0,d.ke)|0;i=(a.i.a-a.W.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FO(a,b,c){var d,e,f;d=a.gF.bN;e=N4(b);f=a.cD;return AEF(d,e,c,1,f.ej,f.i$);}
function AHJ(b,c,d){return Be(b/c|0,d);}
function AK2(){LM.call(this);this.rT=null;}
function UL(a){var b=new AK2();AVV(b,a);return b;}
function AVV(a,b){Mb(a);a.e_=AOx(P(HE,0));a.ib=P(FF,0);a.gF=b;a.cD=AR4(b.cN);}
function EW(a){a.e_=AOx(AMM(a.rT));if(a.bX!==0.0)PS(a);}
function D5(a,b){a.rT=b;EW(a);}
function J1(a,b){var c;c=a.gN.bv;JB(b,c.l2,c.l7);return b;}
function P$(){CF.call(this);this.B6=null;}
function ANN(a,b){var c;c=a.i;Bv(b,c.a,c.b,a.k,a.B6);}
function AHt(){var a=this;B.call(a);a.n3=null;a.gd=null;}
function ANW(a,b){var c=new AHt();AO7(c,a,b);return c;}
function AO7(a,b,c){a.n3=b;a.gd=c;}
function AVs(a){return a.gd.W.b/M3(a)|0;}
function A5n(a){var b;b=a.gd;return Iq((b.W.b+b.k.b|0)-1|0,M3(a));}
function AWw(a,b){var c;b=Bc(b,M3(a));c=a.gd;return (b+c.i.b|0)-c.W.b|0;}
function AR0(a){return a.gd.i;}
function AYd(a){return a.gd.k;}
function ASC(a,b,c){var d;d=a.n3;d.vf=b;d.rI=c;}
function A2u(a,b){return AD$(a.n3,b);}
function M3(a){return a.gd.cD.ej;}
function ACR(){var a=this;B.call(a);a.n2=FV;a.m9=0;a.ry=0;}
var Yh=G();
function AWN(a){}
function Tu(){var a=this;B.call(a);a.Cg=null;a.Cd=null;a.Ce=null;}
function AR3(a){var b,c,d,e,f;b=a.Cg;c=a.Cd;d=a.Ce;e=Bj();f=new J;L(f);b=H(f,b);Br(b,9);b=H(b,c);Br(b,9);H(b,d);Bf(e,K(f));}
function Qv(){B.call(this);this.zT=null;}
function ANV(a,b){var c;c=a.zT;L4(c,F_(b,c.bU.cW.b-c.k.b|0));}
function Qu(){B.call(this);this.AH=null;}
function AOc(a,b){var c;c=a.AH;Lx(c,F_(b,c.bU.cW.a-c.k.a|0));}
var UA=G(0);
var A_b=null;function ARe(){ARe=Bm(UA);AWC();}
function AWC(){A_b=S(C(239));}
var AFs=G();
function AUU(a,b,c){b=b;c=c;return OU(Ei(b),Ei(c));}
function LA(){var a=this;B.call(a);a.uY=null;a.lR=null;a.l9=null;a.hZ=null;}
function AMU(){Hi.call(this);this.fI=null;}
function AOx(a){var b=new AMU();APZ(b,a);return b;}
function APZ(a,b){a.fI=b;}
function A6K(a,b){return a.fI.data[b].hB;}
var Dc=G(Bt);
var ALY=G(FK);
function AZx(a){var b=new ALY();ASQ(b,a);return b;}
function ASQ(a,b){a.k8=1;a.lr=1;a.nR=b;}
function AM0(){var a=this;B.call(a);a.pf=null;a.ng=null;a.eW=null;a.m5=null;a.bD=null;a.p$=null;a.oa=null;a.ga=null;a.g8=null;a.j7=null;}
function AWX(a,b){var c=new AM0();A18(c,a,b);return c;}
function A18(a,b,c){var d,e,f;a.eW=b;a.m5=c;a.bD=AYR();b=new J;L(b);a.j7=b;a.ga=Kc();b=new Tw;d=AMC(16);b.g2=0;b.ee=P(JW,d);b.yR=0.75;Vq(b);a.g8=b;b=new VF;c=a.bD;e=a.j7;f=a.ga;b.dO=c;b.mT=e;b.tI=f;a.p$=b;b=new Vm;b.c7=c;b.nH=e;b.sJ=f;a.oa=b;}
function X5(a){var b,c,d,e,f,g,h;a:{b=NB(a.eW.fl);c=b.jI;if(c.de>0){d=c.c8;e=0;b:while(true){f=b.jI.cc.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cK;if(HL(a.ga,g))CB(a.ga,g);else{h=a.ga;D2(h,g,C4(h.de));}c=c.c6;if(d!=b.jI.c8)break b;}e=e+1|0;}b=new Is;X(b);N(b);}}b=a.eW.fO;if(b!==null)AAK(a,b);Bu(a.bD,a.eW.fl.de);b=Tg(NB(a.eW.fl));while(FD(b)){c=QU(b);Hl(a.bD,a.j7.H,M(c));BM(a.j7,c);}b=Tg(NB(a.eW.fl));while(FD(b)){c=QU(b);c=CB(a.eW.fl,c);Bu(a.bD,c.p);c=B9(c);while(Cb(c)){g=Cc(c);g=CB(a.ga,g);Bu(a.bD,
g.br);}}if(a.eW.fO===null)Bu(a.bD,(-1));else{Bu(a.bD,a.g8.g2);ABr(a,a.eW.fO);}if(a.m5===null)Bu(a.bD,(-1));else{Bu(a.bD,1);AFY(a.m5,a.bD,a.g8);}a.pf=RD(a.bD);a.ng=GM(K(a.j7));}
function AAK(a,b){var c,d,e,f,g,h;if(ADZ(a.g8,b))OS(a.g8,b);else{c=a.g8;d=C4(c.g2);if(b===null){e=Z9(c);if(e===null){c.mv=c.mv+1|0;e=AD3(c,null,0,0);f=c.g2+1|0;c.g2=f;if(f>c.p_)XZ(c);}}else{g=M5(b);h=g&(c.ee.data.length-1|0);e=X$(c,b,h,g);if(e===null){c.mv=c.mv+1|0;e=AD3(c,b,h,g);f=c.g2+1|0;c.g2=f;if(f>c.p_)XZ(c);}}e.cT=d;}b=b.cX;if(b===null)return;c=new WP;c.sN=a;b.fu(c);}
function ABr(a,b){var c,d,e,f;c=(OS(a.g8,b)).br;Bu(a.bD,c);if(b instanceof Oa)Bu(a.bD,(-1));else if(!(b instanceof LC))Bu(a.bD,0);else Bu(a.bD,1);d=a.p$;Bu(d.dO,b.e8.c1());e=b.e8;f=new W_;f.w2=d;e.fu(f);d=a.oa;Bu(d.c7,b.fP.c1());e=b.fP;f=new U1;f.vE=d;e.fu(f);d=b.lL;Bu(a.bD,d.c1());e=new VW;e.B3=a;d.fu(e);d=b.h3;Bu(a.bD,d.c1());d=d.ce();while(d.cQ()){e=d.cg();PO(a.p$,e.lM);Hw(a.oa,e.le);Bu(a.bD,e.sl);}d=b.vz;if(d===null)Bu(a.bD,(-1));else Bu(a.bD,(CB(a.ga,d)).br);b=b.cX;Bu(a.bD,b.c1());d=new QQ;d.q5=a;b.fu(d);}
function Pk(){B.call(this);this.BF=null;}
function AXl(a,b){var c,d,e,f,g,h,i,j;c=a.BF;if(c.f3){d=Fd(c);e=new J;L(e);H(H(e,d),C(438));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CW(b[0]);g=E2(b[1]);h=(CW(b[2])).data[0];if(c.h.cB==h){i=null;j=null;if(b.length>=5){i=CW(b[3]);j=E2(b[4]);}b=Ej(c);if(!Bk(b,C(204))&&!Bk(b,C(421))?0:1)Ox(c.h,f,g);else{Xj(c.h,f,g,i,j);E9(c.h.dR);E9(c.h.d0);NG(c.h);K4(c.h);OO(c);}}}
function ADU(){B.call(this);this.sV=null;}
function A2n(a,b){var c,d,e,f;c=a.sV;if(c.fm!=3){b=b.data;d=CW(b[0]);e=E2(b[1]);Xj(c.h,d,e,null,null);if(c.f3){b=Fd(c);f=J8(EI(),c.BB);c=new J;L(c);H(H3(H(H(c,b),C(439)),f),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}
function S4(){var a=this;B.call(a);a.wR=null;a.wS=null;a.wQ=0;}
function AZV(a,b){var c,d,e;c=a.wR;d=a.wS;e=a.wQ;d.g(V9(c,(b.j.a+e|0)-c.fe.a|0));}
function S3(){var a=this;B.call(a);a.sj=null;a.sh=null;a.si=0;}
function A5H(a,b){var c,d,e;c=a.sj;d=a.sh;e=a.si;d.g(Rj(c,(b.j.b+e|0)-c.fe.b|0));}
var AI8=G();
var AIG=G();
function AFO(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EG()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Ul;d.addEventListener("change",Bw(e,"handleEvent"));d.click();}
var AH_=G();
function X8(){B.call(this);this.vW=null;}
function APg(a,b){var c,d,e;c=a.vW;d=BT(b);e=new J;L(e);H(H(e,C(440)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new ACY;d.D_=c;d.tS=b;e=new AC0;e.Gl=c;Ws(b,d,e);}
function X7(){B.call(this);this.yk=null;}
function AU7(a,b){var c,d,e;c=a.yk;d=BT(b);e=new J;L(e);H(H(e,C(441)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new Qe;d.Dr=c;H0(b,d);}
var Ft=G(0);
function X_(){var a=this;B.call(a);a.ki=0;a.qL=0;a.lY=0;a.h9=0;a.jH=null;}
function Cb(a){return a.ki>=a.lY?0:1;}
function Cc(a){var b,c;Q0(a);b=a.ki;a.h9=b;c=a.jH;a.ki=b+1|0;return c.i5(b);}
function AAv(a){var b,c,d;if(a.h9<0){b=new Dc;X(b);N(b);}Q0(a);a.jH.mG(a.h9);a.qL=a.jH.b7;c=a.h9;d=a.ki;if(c<d)a.ki=d-1|0;a.lY=a.lY-1|0;a.h9=(-1);}
function Q0(a){var b;if(a.qL>=a.jH.b7)return;b=new Is;X(b);N(b);}
function LF(){var a=this;OT.call(a);a.ys=null;a.Bg=null;}
function AIO(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.ys;e=0;f=0;g=a.Bg;a:{b:{while(true){if((e+32|0)>f&&Eg(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ck(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BJ;c=new J;L(c);V(H(V(H(c,C(442)),l),C(100)),h);Bp(b,K(c));N(b);}if(Ck(b)<m){b=new OF;X(b);N(b);}if(m<0){b=new BJ;c=new J;L(c);H(V(H(c,C(101)),m),C(102));Bp(b,K(c));N(b);}n=b.bd;h=n+b.nK|0;e=0;while(e<m){o=k+1|0;i=b.qm.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bd=n+m|0;e=0;}if(!Eg(c)){p=!Eg(b)&&e>=f?A$N:A$M;break a;}i=g.data;n=Ck(c);o=i.length;n=Be(n,o);q=new ADq;q.up=b;q.B0=c;p=AMZ(a,d,e,f,g,0,n,q);e=q.w8;if(p===null&&0==q.m_)p=A$N;k=q.m_;h=0;if(c.qR){b=new KO;X(b);N(b);}if(Ck(c)<k)break;if(h>o){b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(103)),h),C(97)),o),41);Bp(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BJ;c=new J;L(c);V(H(V(H(c,C(105)),l),C(100)),o);Bp(b,K(c));N(b);}if(k<0){b=new BJ;c=new J;L(c);H(V(H(c,C(101)),k),C(102));Bp(b,K(c));N(b);}o=c.bd;m=0;while
(m<k){l=o+1|0;n=h+1|0;ABn(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bd=c.bd+k|0;if(p!==null)break a;}b=new J3;X(b);N(b);}b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(103)),k),C(97)),h),41);Bp(b,K(c));N(b);}FI(b,b.bd-(f-e|0)|0);return p;}
var T0=G(LF);
function AMZ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NW(h,2))break a;i=A$N;break a;}c=k+1|0;n=j[k];if(!GU(a,n)){c=c+(-2)|0;i=EF(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NW(h,3))break a;i=A$N;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!GU(a,n))break b;if(!GU(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(O0(p)){c=k+(-3)|0;i=EF(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EF(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NW(h,4))break a;i=A$N;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ck(h.B0)<2?0:1)break a;i=A$M;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!GU(a,n))break c;if(!GU(a,o))break c;if(!GU(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Kb(r);m=c+1|0;j[c]=Jy(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EF(1);break a;}c=k+(-3)|0;i
=EF(1);}h.w8=c;h.m_=f;return i;}
function GU(a,b){return (b&192)!=128?0:1;}
function AEr(){var a=this;B.call(a);a.D8=null;a.D9=null;a.D7=null;}
function WF(){B.call(this);this.rh=null;}
function AV_(a,b){var c,d;c=a.rh;d=c.en+1|0;c.en=d;c=new J;L(c);H(H(V(c,d),C(443)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function PC(){B.call(this);this.vT=null;}
function AUw(a){return a.vT.ht();}
function PB(){B.call(this);this.u4=null;}
function AZF(a){return a.u4.ht();}
function ABz(){B.call(this);this.Be=null;}
function A29(a){return a.Be.ht();}
var XY=G();
function A3U(a){return EL(1);}
function ABg(){B.call(this);this.t8=null;}
function A55(a,b){a.t8.g(FT(b));}
var AG9=G();
function ADS(){B.call(this);this.wz=null;}
function AQv(a,b){a.wz.e();}
var OK=G(BJ);
function SO(){B.call(this);this.uZ=null;}
function AUy(a){AB$(a.uZ);}
function SN(){B.call(this);this.yJ=null;}
function A0b(a){AEK(a.yJ);}
function SQ(){B.call(this);this.zo=null;}
function A5F(a){AE1(a.zo);}
function SP(){B.call(this);this.CY=null;}
function AXw(a){AAh(a.CY);}
function ACm(){B.call(this);this.rJ=null;}
function ANg(a){EW(a.rJ);}
var AGq=G();
function Qa(b,c,d){return AH2(b,0,c,d,VT());}
function AH2(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BP(c,d);h=g>=0?0:1+RA(f,2.0)|0;i=g>0?0:1+RA(f,3.0)|0;j=P(C_,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(444)),g);k[g]=AH2(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new C_;n=new J;L(n);V(H(n,C(445)),g);Kr(m,K(n),l);n=new RZ;n.ux=m;m.o6=n;switch((l+g|0)%3|0){case 0:break;case 1:Rs(m);break a;case 2:m.hM=60136;break a;default:break a;}LV(m);}if(VV(f)<0.25){n=Ke(m.hB,0);n.bG=n.bG|2;}k[h+g|0]=m;g=g+1|0;}n=AL7(b,c,j);b=new XE;b.xo=n;b.xq=e;n.jD=b;n.cY
=b;if((c+c|0)>d)IY(n);else Ie(n);return n;}
function ACn(){B.call(this);this.ub=null;}
function AQY(a){EW(a.ub);}
function Ug(){B.call(this);this.tM=null;}
function AV5(a){EW(a.tM);}
function ADW(){var a=this;B.call(a);a.rx=null;a.rz=null;}
function A6a(a){var b,c;b=a.rx;c=a.rz;DZ(b);c.e();}
function Ri(){var a=this;B.call(a);a.gu=null;a.k3=null;a.ju=null;a.qT=null;a.dp=null;a.ma=0;}
function ABw(a,b){if(!BR(b.pa,a.qT)){a.qT=b.pa;Oh(a);}}
function Oh(a){a.dp=BY(a.dp,null);}
function AHR(a,b){var c,d;c=Fw(b,a.qT);d=Fh(c);a.dp=BY(a.dp,AEF(b.bN,N4(60088),c,0,d,0));}
function T8(a,b){return a.dp!==null&&GB(b,a.gu,a.k3)?1:0;}
function Xr(){var a=this;B.call(a);a.wT=null;a.wU=null;}
function A0i(a){var b,c;b=a.wT;c=a.wU;IJ(b.bf,c);Kh(c);b.bV();}
function Xq(){B.call(this);this.xy=null;}
var AI7=G();
var DU=G(Bt);
function AIy(){var a=this;B.call(a);a.jP=null;a.n_=0;a.gl=0;}
function AYR(){var a=new AIy();AWV(a);return a;}
function AWV(a){a.n_=0;a.jP=BQ(16);a.gl=0;}
function Hl(a,b,c){Bu(a,b);Bu(a,c);}
function Bu(a,b){var c,d;c=a.jP;d=c.data.length;if(d==a.gl)a.jP=JD(c,d*2|0);c=a.jP.data;d=a.gl;a.gl=d+1|0;c[d]=b;}
function RD(a){var b,c,d,e,f;b=a.n_;if(b&&a.gl!=b){c=D0();b=a.n_;d=a.gl;e=new J;L(e);H(V(H(V(H(e,C(446)),b),C(447)),d),C(448));Bf(c,K(e));}f=a.jP;b=f.data.length;d=a.gl;if(b!=d)f=JD(f,d);return f;}
function Tw(){var a=this;En.call(a);a.g2=0;a.ee=null;a.mv=0;a.yR=0.0;a.p_=0;}
function AMC(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vq(a){a.p_=a.ee.data.length*a.yR|0;}
function ADZ(a,b){return WH(a,b)===null?0:1;}
function OS(a,b){var c;c=WH(a,b);if(c===null)return null;return c.cT;}
function WH(a,b){var c,d;if(b===null)c=Z9(a);else{d=M5(b);c=X$(a,b,d&(a.ee.data.length-1|0),d);}return c;}
function X$(a,b,c,d){var e;e=a.ee.data[c];while(e!==null&&!(e.n6==d&&(b!==e.cK?0:1))){e=e.iG;}return e;}
function Z9(a){var b;b=a.ee.data[0];while(b!==null&&b.cK!==null){b=b.iG;}return b;}
function AD3(a,b,c,d){var e,f;e=new JW;WV(e,b,null);e.n6=d;f=a.ee.data;e.iG=f[c];f[c]=e;return e;}
function XZ(a){var b,c,d,e,f,g,h,i;b=a.ee.data.length;b=AMC(!b?1:b<<1);c=P(JW,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ee.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.n6&f;i=h.iG;h.iG=d[b];d[b]=h;h=i;}e=e+1|0;}a.ee=c;Vq(a);}
function VF(){var a=this;B.call(a);a.dO=null;a.mT=null;a.tI=null;}
function PO(a,b){var c;if(!(b instanceof MI)){Bu(a.dO,3);AEH(a,b);Bu(a.dO,b.jU);}else{c=b;Bu(a.dO,5);AEH(a,c);Bu(a.dO,c.jU);Bu(a.dO,c.xI);b=c.ln;Bu(a.dO,b.p);c=new XG;c.rH=a;FG(b,c);}}
function AEH(a,b){var c;c=b.eh.gR;Hl(a.dO,a.mT.H,M(c));Bu(a.dO,b.eh.dt);Pg(a,b.kh);BM(a.mT,c);}
function Pg(a,b){if(b===null)Bu(a.dO,(-1));else Bu(a.dO,(CB(a.tI,b)).br);}
function Vm(){var a=this;B.call(a);a.c7=null;a.nH=null;a.sJ=null;}
function Hw(a,b){var c,d,e;if(b instanceof HZ){c=b;Bu(a.c7,9);ZG(a,c.fH);}else if(b instanceof KB){d=b;Bu(a.c7,3);AAb(a,d);Bu(a.c7,d.q_);ZG(a,d.iw);}else if(b instanceof JH){e=b;Bu(a.c7,4);Hw(a,e.ik);Hw(a,e.hP);}else if(b===null)Bu(a.c7,(-1));else{Bu(a.c7,5);AAb(a,b);Bu(a.c7,b.A6);}}
function AAb(a,b){var c;c=b.eJ.gR;Hl(a.c7,a.nH.H,M(c));Bu(a.c7,b.eJ.dt);b=b.f6;if(b===null)Bu(a.c7,(-1));else Bu(a.c7,(CB(a.sJ,b)).br);BM(a.nH,c);}
function ZG(a,b){var c;Bu(a.c7,b.p);c=new WY;c.yl=a;FG(b,c);}
function XL(){var a=this;B.call(a);a.zM=0;a.zL=0;}
function TL(){B.call(this);this.s_=null;}
function AU9(a,b){var c;c=a.s_;DO(c,b);HR(c,null);WE(c);}
var AE8=G();
function A4j(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AE7(){B.call(this);this.tq=null;}
function AZE(a,b){var c,d,e;c=a.tq;d=0;e=b.length;while(d<e){c.g(AIh(b[d],P(BC,0)));d=d+1|0;}}
function AEu(){B.call(this);this.CX=null;}
function A0A(a,b){var c,d;c=a.CX;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A6E(b,P(BC,0),P(BC,0)));}
var Zy=G(DG);
var BaZ=null;function AKj(){BaZ=F($rt_doublecls());}
var Ks=G();
var Ba0=FV;var Ba1=null;var Ba2=null;function AHf(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.ry=I2(Dj(d,D(0, 2147483648)),FV)?0:1;e=Dj(d,D(4294967295, 1048575));f=G_(A8P(d,52))&2047;if(I2(e,FV)&&!f){c.n2=FV;c.m9=0;return;}if(f)e=A7p(e,D(0, 1048576));else{e=H8(e,1);while(I2(Dj(e,D(0, 1048576)),FV)){e=H8(e,1);f=f+(-1)|0;}}g=Ba2.data;h=f<<16>>16;i=0;j=g.length;k=BP(i,j);if(k>0){c=new BX;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BP(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jb(e,Ba1.data[h],i);if(APR(m,Ba0)){while(DM(m,Ba0)<=0){j=j+(-1)|0;m=CY(Cl(m,Bq(10)),Bq(9));}g=Ba2.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jb(e,Ba1.data[h],i);}e=H8(e,1);d=CY(e,Bq(1));g=Ba1.data;h=j+1|0;n=g[h];f=i-1|0;n=Jb(d,n,f);o=Jb(J8(e,Bq(1)),Ba1.data[h],f);p=Bq(1);while(true){q=Cl(p,Bq(10));if(DM(Di(m,q),Di(o,q))<=0)break;p=q;}r=Bq(1);while
(true){s=Cl(r,Bq(10));if(DM(Di(m,s),Di(n,s))>=0)break;r=s;}h=DM(p,r);e=h>0?Cl(Di(m,p),p):h<0?CY(Cl(Di(m,r),r),r):Cl(Di(CY(m,AIc(r,Bq(2))),r),r);if(DM(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Di(e,Bq(10));if(DM(e,D(2808348672, 232830643))<0)break;}else if(DM(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cl(e,Bq(10));}c.n2=e;c.m9=j-330|0;}
function Jb(b,c,d){var e,f,g,h,i,j,k,l;e=Dj(b,Bq(65535));f=Dj(Gt(b,16),Bq(65535));g=Dj(Gt(b,32),Bq(65535));h=Dj(Gt(b,48),Bq(65535));i=Dj(c,Bq(65535));j=Dj(Gt(c,16),Bq(65535));k=Dj(Gt(c,32),Bq(65535));l=Dj(Gt(c,48),Bq(65535));return CY(CY(CY(H8(Cl(l,h),32+d|0),H8(CY(Cl(l,g),Cl(k,h)),16+d|0)),H8(CY(CY(Cl(l,f),Cl(k,g)),Cl(j,h)),d)),Gt(CY(CY(CY(Cl(k,e),Cl(j,f)),Cl(i,g)),H8(CY(CY(CY(Cl(l,e),Cl(k,f)),Cl(j,g)),Cl(i,h)),16)),32-d|0));}
function AG0(){Ba0=Di(Bq(-1),Bq(10));Ba1=AKd([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);Ba2=A8e([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function UV(){B.call(this);this.r8=null;}
function AN0(a){Hx(a.r8,37,3);}
function UW(){B.call(this);this.sS=null;}
function AP_(a){Hx(a.sS,40,3);}
function UX(){B.call(this);this.uw=null;}
function A5J(a){Hx(a.uw,42,3);}
function UY(){B.call(this);this.yu=null;}
function ASt(a){Hx(a.yu,45,3);}
function UZ(){B.call(this);this.y1=null;}
function AUN(a){Hx(a.y1,45,5);}
function Pp(){B.call(this);this.Bu=null;}
function A62(a,b){var c,d;c=a.Bu;d=new Bt;Bp(d,$rt_str(b.message));c.g(d);}
var WI=G(0);
var A$z=null;function A70(){A70=Bm(WI);A3w();}
function A3w(){A$z=new $rt_globals.TextDecoder("utf-16");}
function AC_(){var a=this;B.call(a);a.ug=0;a.Df=0;}
function F_(a,b){var c;c=a.Df;if(c<=0)return 0;return ZL(a.ug,b,c);}
var Ul=G();
function AXX(a,b){}
function RZ(){B.call(this);this.ux=null;}
function A2r(a){var b,c,d;b=a.ux;c=Bj();d=Ei(b);b=new J;L(b);H(H(b,C(449)),d);Bf(c,K(b));}
function XE(){var a=this;B.call(a);a.xo=null;a.xq=null;}
function A2l(a){var b,c;b=a.xo;c=a.xq;if(!Js(b))Ie(b);else IY(b);c.e();}
function Yg(){var a=this;B.call(a);a.q4=null;a.zJ=null;a.v6=0;a.w3=0;}
function OC(a,b){return Ck(a.zJ)<b?0:1;}
function U6(){B.call(this);this.AZ=null;}
function A6b(a,b){DO(a.AZ,b);}
var AF$=G(0);
function AQ3(b){return 112<=b&&b<=123?1:0;}
function SL(){B.call(this);this.uW=null;}
function A00(a){MN(a.uW);}
function AD_(){var a=this;B.call(a);a.xW=null;a.xV=null;}
function AWJ(a){CV(a.xW,a.xV);}
var Zq=G();
var Ba3=null;function Ox(b,c,d){Sc(b,c,d,0);}
function Sc(b,c,d,e){Yx(b,c,d,null,null,e);}
function Yx(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Mx(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CK(b);c=b.E;if(c.data.length<i)b.E=AGs(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fp=h.fp+n|0;}else b.E.data[m]=Ee(Z2(h,d,0));m=m+1|0;}NG(b);if(j)b.dq=AIi(AJc(h));E9(b.d0);E9(b.dR);o=b.d0;g=0;while(g<k){D2(o,DY(Bb(h),Bb(h)),DY(Bb(h),Bb(h)));g=g+1|0;}p=b.d0;o=b.dR;q=Nq(Ow(p));while(FD(q)){r=O3(q);s=r.cK;p=r.cT;BF(Ba3);r=CB(o,p);if(r===null){r=BO();D2(o,p,r);}BA(r,s);}if(o.pG===null){p=new Q8;p.xe=o;o.pG=p;}p=o.pG;r=new AAG;Oc(r,
p.xe);while(FD(r)){On(r);o=r.hx.cT;p=A94;c=P(B,o.p);d=c.data;GF(o,c);Lp(c,p);g=0;t=d.length;while(g<t){p=d[g];KW(o,g);o.cq.data[g]=p;g=g+1|0;}}R$(h);if(e!==null&&f!==null){p=AS0(e,f);Qr(p);b.fc=AZi(p.pV,p.jd);b.dq=AIi(p.qh);}}
function Xj(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Mx(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=AEE(b,i);o=AEE(b,j);p=(I_(Cg(b,n.a),n.b)).data[0].s;q=(I_(Cg(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Z2(h,d,i);if(!r)g=Mp(p,g);if(r==s)g=Mp(g,q);t=n.a+r|0;u=Ee(g);c=b.E.data;v=c[t];c[t]=u;if(!k&&JL(v)==JL(u)){t=0;while(t<JL(v)){o=v.s.data[t];w=u.s.data[t];x=o.b4;y=x!=5?0:1;if(!y&&x&&!w.b4){w.b4=x;w.bG=o.bG;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AJc(h);w=Le(i,j,(-1));Yk(b.dq,w,u);}else if(e!==null&&f!==null){v=AS0(e,f);Qr(v);w=Le(i,j,(-1));Yk(b.dq,w,v.qh);n=b.fc;n.fO=b.dq.dn.ct;n.fl=v.jd;}}R$(h);}
function Z2(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=P(CA,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=El(EO(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AL9(){Ba3=new Wv;}
var AAj=G(0);
var PW=G(0);
var F0=G();
function ABk(){F0.call(this);this.BH=null;}
function Ou(a,b){var c,d,e;c=0;while(true){d=a.BH;if(d.kE===null)d.kE=B9(d.zl);if(!Cb(d.kE))e=0;else{c=b.bM(Cc(d.kE));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var R9=G(0);
function Po(){var a=this;B.call(a);a.Ec=null;a.Ed=null;a.Ea=0;a.Eb=0;}
var AEV=G();
function AOo(a,b){b=b;b.c0=BY(b.c0,null);}
var AHi=G(0);
function AKG(b,c,d,e,f,g){f=f.data;f[JI(0,0)]=GS(g,b,c,d,0);f[JI(0,1)]=GS(g,b,c,d,2);f[JI(1,0)]=GS(g,b,c,e,0);f[JI(1,1)]=GS(g,b,c,e,2);return f[JI(0,0)];}
function JW(){var a=this;Hg.call(a);a.n6=0;a.iG=null;}
var Is=G(Bt);
function TS(){var a=this;B.call(a);a.bz=null;a.r0=null;a.jz=null;a.oU=null;a.mL=null;a.gJ=null;}
function NA(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=TW();e=a.bz.d;f=Ej(e);e=HU(e);g=a.bz.fJ;if(AAe(g,f,e)!==null){h=new R2;h.ss=a;h.st=b;EB(d,C(450),h);}if(OW(g,f,e)!==null){h=new R0;h.A4=a;h.A3=b;EB(d,C(451),h);}if(AC1(g,f,e)!==null){e=new R4;e.zF=a;e.zG=b;EB(d,C(452),e);}e=new R1;e.Di=a;e.Dh=b;EB(d,C(453),e);H$(a);if(Mn()){if(!a.bz.e9){f=new Tb;f.vn=a;EB(d,C(454),f);}f=new Tc;f.xR=a;EB(d,C(455),f);if(!a.bz.e9&&WC(H$(a))){f=new Ta;f.su=a;EB(d,C(456),f);}}if(c!==null)Nx(d,c);f=TW();i=P(BC,5).data;i[0]=C(182);i[1]=
C(193);i[2]=C(210);i[3]=C(209);i[4]=C(204);j=i.length;k=0;while(k<j){b=i[k];e=new Sm;e.Au=a;e.At=b;EB(f,b,e);k=k+1|0;}Ij(d,C(457),Je(f));c=TW();i=P(By,3);l=i.data;g=a.mL;BF(g);m=new Q3;m.y7=g;l[0]=Db(C(458),m);g=a.mL;BF(g);m=new Q1;m.A_=g;l[1]=Db(C(459),m);g=a.mL;BF(g);m=new Q2;m.qX=g;l[2]=Db(C(460),m);L3(c,C(461),CN(i),Ba4);i=P(By,2);l=i.data;g=a.jz;BF(g);m=new U0;m.Bd=g;l[0]=Db(C(462),m);g=a.jz;BF(g);m=new U2;m.Dl=g;l[1]=Db(C(463),m);Ij(c,C(464),CN(i));g=new Z_;g.zW=a;L3(c,C(465),g,Ba4);if(a.bz.cd.bN.mn){i
=P(By,2);l=i.data;g=new AAL;g.sZ=a;l[0]=Db(C(466),g);g=new AAJ;g.BK=a;l[1]=Db(C(467),g);Ij(c,C(468),CN(i));}Ij(d,C(469),Je(c));return Je(d);}
function AAW(a,b){return NA(a,b,null);}
function H$(a){return a.bz.cd.cu;}
function W6(a){var b;b=new Sr;b.vh=a;return b;}
function A0R(a){var b,c,d,e,f;b=P(By,5);c=b.data;d=a.bz;BF(d);e=new TG;e.xf=d;c[0]=Db(C(470),e);e=a.bz;BF(e);f=new TH;f.sW=e;c[1]=Db(C(471),f);d=a.bz;BF(d);e=new TI;e.BC=d;c[2]=Db(C(472),e);d=a.bz;BF(d);e=new TJ;e.x_=d;c[3]=Db(C(473),e);d=a.bz;BF(d);e=new TZ;e.An=d;c[4]=Db(C(474),e);return CN(b);}
function QZ(a,b){var c;c=new Pi;c.yH=a;c.yI=b;return c;}
function K6(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DZ(a.gJ.cf);d=a.bz.d;e=Ej(d);f=HU(d);g=a.bz.fJ;if(c===null)h=null;else{A86();switch(Ba5.data[c.fj]){case 1:h=OW(g,e,f);break a;case 2:h=AAe(g,e,f);break a;default:}b=new Ff;X(b);N(b);}}c=a.bz;e=FJ(c,b);g=Ju(c.d.h,e.bs,e.bw);f=TC(c,g);if(h!==null){g=c.d;i=e.bs;j=e.bw;e=new ACo;e.Gr=c;e.Gq=b;e.Gp=f;h.uF(g,i,j,e,c.kv);}else{e=CB(c.d.h.d0,g);if(e!==null)Jd(c,e);else{e=CB(c.d.h.dR,g);if(e!==null&&!EP(e))AAu(c.lc,b,e,c,f);else{c=c.lc;k=P(By,1);l=k.data;e=new By;f=c.cf;BF(f);g
=new ACd;g.Co=f;Ce(e,g,C(475));l[0]=e;Sq(c,b,CN(k));}}}}
function ADb(){var a=this;B.call(a);a.wv=null;a.ws=null;a.wt=null;}
function AR8(a,b,c,d){var e,f,g,h;b=a.wv;e=a.ws;f=a.wt;ACx(b,e);if(f!==null)d.ni.e();if(ADp(d)){f=d.fv;g=e.c$;h=e.gm;Wn(b,BK((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nF,e,d.uD);}}
function AL4(){var a=this;B.call(a);a.iR=null;a.fp=0;}
function Mx(a){var b=new AL4();AXA(b,a);return b;}
function AXA(a,b){a.iR=b;a.fp=0;}
function Bb(a){var b,c;b=a.iR.data;c=a.fp;a.fp=c+1|0;return b[c];}
function R$(a){var b,c,d,e;if(a.fp!=a.iR.data.length){b=D0();c=a.iR.data.length;d=a.fp;e=new J;L(e);H(V(H(V(H(e,C(446)),c),C(476)),d),C(477));Bf(b,K(e));}}
function RN(){var a=this;B.call(a);a.Et=null;a.u1=0;}
function AYw(a,b){var c,d,e,f;c=a.u1;d=(CW(I6(b,0))).data;b=Bj();e=d[0];f=new J;L(f);V(H(V(H(f,C(478)),c),C(479)),e);Bf(b,K(f));b=Bj();e=d[1];f=new J;L(f);V(H(V(H(f,C(478)),c),C(480)),e);Bf(b,K(f));}
function AFS(){B.call(this);this.QL=null;}
var Wv=G();
var F1=G();
var Ba6=null;var Ba7=null;var A_o=null;var Ba8=null;var Ba9=null;var Ba$=null;function ALA(){Ba6=new Vf;Ba7=new Vc;A_o=new Vd;Ba8=new Va;Ba9=new Vb;Ba$=new W8;}
function AJ1(){var a=this;B.call(a);a.pV=null;a.qh=null;a.jd=null;a.cP=null;a.pj=null;a.nA=null;a.jy=null;a.od=null;a.qb=null;}
function AS0(a,b){var c=new AJ1();A5o(c,a,b);return c;}
function A5o(a,b,c){a.cP=Mx(b);a.pj=c;}
function Qr(a){var b,c,d,e,f,g,h,i;b=Bb(a.cP);c=new Ob;Rq(c);a.jd=c;a.jy=BO();d=0;while(d<b){e=Bb(a.cP);f=Bb(a.cP);g=EO(a.pj,e,f);D2(a.jd,g,BO());BA(a.jy,g);d=d+1|0;}c=Nq(Ow(a.jd));while(FD(c)){GP((O3(c)).cT,PQ(a));}d=Bb(a.cP);if(d==(-1))a.pV=null;else{a.nA=P(Gd,d);c=new Xu;h=a.cP;i=a.pj;g=a.jy;c.d2=h;c.Am=i;c.zQ=g;a.od=c;c=new So;c.eE=h;c.B4=i;c.Ci=g;a.qb=c;a.pV=Sd(a,null);}if(Bb(a.cP)!=(-1))a.qh=AAC(a.cP,a.nA);}
function Sd(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cP);d=Bb(a.cP);e=a.od;f=Bb(e.d2);g=BO();h=0;while(h<f){BA(g,Pu(e));h=h+1|0;}a:{switch(d){case -1:i=new Oa;i.hD=b;b=A_o;i.cX=b;i.fP=b;i.e8=b;i.lL=b;i.h3=b;break a;case 0:i=A8h(b);break a;case 1:i=new LC;AHC(i,b);GP(i.e8,g);break a;default:}b=new Dc;i=new J;L(i);V(H(i,C(481)),d);Bp(b,K(i));N(b);}i.e8=g;b=a.qb;d=Bb(b.eE);e=BO();j=0;while(j<d){BA(e,HH(b));j=j+1|0;}i.fP=e;i.lL=PQ(a);d=Bb(a.cP);b=BO();j=0;while(j<d){e=Pu(a.od);g=HH(a.qb);f=Bb(a.cP);k=new Rr;k.lM=e;k.le
=g;k.sl=f;BA(b,k);j=j+1|0;}i.h3=b;j=Bb(a.cP);i.vz=j==(-1)?null:BI(a.jy,j);d=Bb(a.cP);b=BO();j=0;while(j<d){BA(b,Sd(a,i));j=j+1|0;}i.cX=b;a.nA.data[c]=i;return i;}
function PQ(a){var b,c,d,e;b=Bb(a.cP);c=BO();d=0;while(d<b){e=Bb(a.cP);BA(c,BI(a.jy,e));d=d+1|0;}return c;}
function AGf(){var a=this;B.call(a);a.mo=null;a.p9=null;}
function AM8(){var a=this;B.call(a);a.FG=0;a.EZ=0;a.sc=0;a.nM=0;}
function AEM(){var a=this;B.call(a);a.te=null;a.tf=null;}
function AYe(a){var b,c,d,e,f,g;b=a.te;c=a.tf;if(BR(c.mo,b.d.fx)){c=c.p9;CU(b,c.nM,c.sc,0);Ci((Bl(b)).bS,c.nM,c.sc);Ci((Bl(b)).bI,c.EZ,c.FG);}else{d=(B5(b.fJ.BX)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GY(b);b=new YD;b.zD=g;b.zE=c;BF(b);c=new ZQ;c.xu=b;$rt_globals.setTimeout(Bw(c,"onTimer"),0);}}}
function AEN(){var a=this;B.call(a);a.CC=null;a.CB=null;}
function A0Z(a){Jd(a.CC,a.CB);}
function Gd(){var a=this;B.call(a);a.hD=null;a.cX=null;a.fP=null;a.e8=null;a.h3=null;a.lL=null;a.vz=null;}
function A8h(a){var b=new Gd();AHC(b,a);return b;}
function AHC(a,b){a.hD=b;a.cX=BO();a.fP=BO();a.e8=BO();a.lL=BO();a.h3=BO();}
function AFb(a){var b;b=a.hD;if(b!==null)b.cX.ru(a);}
function WP(){B.call(this);this.sN=null;}
function AQG(a,b){b=b;AAK(a.sN,b);}
var Oa=G(Gd);
var LC=G(Gd);
function VW(){B.call(this);this.B3=null;}
function AYh(a,b){var c;b=b;c=a.B3;Bu(c.bD,(CB(c.ga,b)).br);}
function Rr(){var a=this;B.call(a);a.lM=null;a.le=null;a.sl=0;}
function QQ(){B.call(this);this.q5=null;}
function A2d(a,b){b=b;ABr(a.q5,b);}
var QV=G(0);
var EC=G(FN);
var NQ=G(EC);
var Vf=G(NQ);
var Os=G(En);
var Vc=G(Os);
var ON=G(EA);
function AZz(a){var b;b=new DU;X(b);N(b);}
function ASO(a,b){var c;c=new DU;X(c);N(c);}
function ARL(a,b){b=new DU;X(b);N(b);}
var Vd=G(ON);
function ASV(a,b){var c;c=new BJ;X(c);N(c);}
function AR2(a){return 0;}
function APQ(a){return Ba8;}
function AN4(a){return 1;}
var Va=G();
function ANM(a){return 0;}
function A27(a){var b;b=new MW;X(b);N(b);}
function AUY(a){var b;b=new Dc;X(b);N(b);}
var Zo=G(0);
var Vb=G();
var W8=G();
function R7(){var a=this;B.call(a);a.nd=0;a.s8=null;}
function A64(a,b){var c,d,e;c=a.s8;b=b;d=c.zM;e=c.zL;d=b.a<=d&&e<=b.b?1:0;a.nd=d;return d?0:1;}
var KO=G(DU);
var J3=G(Bt);
var OF=G(Bt);
function Zj(){B.call(this);this.Ai=null;}
function A28(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.Ai;d=CW(c[0]);e=(CW(c[1])).data[0];if(!ACK(b.h)){c=b.h;if(c.cB==e){e=b.q2;f=Mx(d);E9(c.d0);E9(c.dR);NG(c);while(f.fp>=f.iR.data.length?0:1){if(Bb(f)==(-1))continue;g=WK(c,Bb(f));h=OM(Cg(c,g.bs),g.bw);if(Bb(f)==(-1)){if(!e)continue;h.b4=0;h.bG=h.bG|4;continue;}i=WK(c,Bb(f));j=Bb(f);k=Bb(f);D2(c.d0,g,i);l=c.dR;m=BO();if(CB(l,i)===null)D2(l,i,m);BA(CB(c.dR,i),g);h.b4=j;h.bG=k;}Ji(b);if(b.FI){n=J8(EI(),b.Cb);if(A7l(n,Bq(100))){b=Fd(b);c=new J;L(c);H(H3(H(H(c,
b),C(482)),n),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function AJq(){B.call(this);this.S7=null;}
function ACz(){B.call(this);this.wc=null;}
function ASE(a,b){MO(a.wc,b);}
function RM(){var a=this;B.call(a);a.zl=null;a.kE=null;}
function Wo(){B.call(this);this.tj=null;}
function A0$(a,b){var c,d;c=a.tj;c.lv=b;HR(c.G,b.qI);HR(c.K,c.lv.qJ);b=c.mV;d=c.lv;b.he=d;c.fV.eB=d;}
var AFX=G();
function AGi(b){var c,d,e,f,g,h,i,j;c=AYR();d=CK(b);Bu(c,d);e=0;f=0;while(f<d){g=Cg(b,f);h=JL(g);Bu(c,h);i=0;while(i<h){j=Ke(g,i);Hl(c,e,My(j));e=e+My(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RD(c);}
function AF3(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=P(GL,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new GL;j.hr=h;e[g]=j;}else{j=new GL;j.hr=h;j.n8=BQ(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].n8.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AJ0(b,c,d,e){var f,g,h,i;f=Fm(b);g=Fm(c);h=AGi(b);i=AGi(c);b=new ACc;b.Cn=d;CO(e,b,C(483),I(B,[f,h,g,i]));}
function ABA(){var a=this;B.call(a);a.ri=null;a.rj=null;}
function AYf(a){var b,c;b=a.ri;c=a.rj;CV(b.cf.V,c);ACg(b);}
function Hs(){var a=this;B.call(a);a.et=0;a.e$=0;a.p3=null;a.oC=0;a.ha=null;}
function AVA(a,b,c,d,e,f){var g=new Hs();A1N(g,a,b,c,d,e,f);return g;}
function A1N(a,b,c,d,e,f,g){a.et=b;a.e$=c;a.p3=BK(f,g);a.oC=d;a.ha=e;}
function Q6(){EC.call(this);this.jI=null;}
function Tg(a){var b;b=new ABL;Oc(b,a.jI);return b;}
function UD(){EC.call(this);this.Ac=null;}
function Nq(a){var b;b=new Uw;Oc(b,a.Ac);return b;}
function Q8(){FN.call(this);this.xe=null;}
function W_(){B.call(this);this.w2=null;}
function AZ5(a,b){b=b;PO(a.w2,b);}
function U1(){B.call(this);this.vE=null;}
function A1Q(a,b){b=b;Hw(a.vE,b);}
function KU(){var a=this;B.call(a);a.eh=null;a.kh=null;a.jU=0;}
function A7W(a,b,c){var d=new KU();AH8(d,a,b,c);return d;}
function AH8(a,b,c,d){a.eh=b;a.kh=c;a.jU=d;}
function A4y(a){var b,c,d;b=ALC(a.eh);c=a.kh;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function ALD(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.eh,c.eh)&&BR(a.kh,c.kh)&&BR(C4(a.jU),C4(c.jU))?1:0;}return 0;}
function MI(){var a=this;KU.call(a);a.ln=null;a.xI=0;}
function AYG(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!ALD(a,b))return 0;c=b;return BR(a.ln,c.ln);}return 0;}
function Fj(){var a=this;B.call(a);a.eJ=null;a.f6=null;a.A6=0;}
function A7k(a,b,c){var d=new Fj();Ol(d,a,b,c);return d;}
function Ol(a,b,c,d){a.eJ=b;a.f6=c;a.A6=d;}
function AWk(a){var b,c,d;b=BT(a.eJ);c=a.f6;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AJ4(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.eJ,c.eJ)&&BR(a.f6,c.f6)?1:0;}return 0;}
function HZ(){Fj.call(this);this.fH=null;}
function A2m(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=Mh(a.fH);c=new AAD;c.Cr=a;d=new Sj;d.tJ=b;d.sp=c;e=new ACs;e.xj=C(37);f=P(ED,0);g=new O2;g.n0=F(ED);h=F(ED).dT;h.$clinit();g.mM=BQ((((ATg(h)).data.length-1|0)/32|0)+1|0);BF(f);h=new PP;h.pY=f;if(h instanceof O2){i=h;if(g.n0===i.n0){j=0;while(true){f=g.mM.data;if(j>=f.length)break;k=f[j];l=i.mM.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}GP(g,h);}m=new J;L(m);while(true){h=new V$;h.yc=e;h.yd=m;g=d.tJ;i=new TX;i.sB=d;i.sA=h;if(!Ou(g,i))break;}ACW(m,
0,C(21),0,M(C(21)));return K(Lt(m,C(21)));}
function KB(){var a=this;Fj.call(a);a.iw=null;a.q_=0;}
function A5N(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!AJ4(a,b))return 0;c=b;return BR(a.iw,c.iw);}return 0;}
function JH(){var a=this;Fj.call(a);a.ik=null;a.hP=null;}
function AS_(a){var b,c,d;b=a.ik.eJ.gR;c=BT(a.hP);d=new J;L(d);b=H(d,b);Br(b,46);H(b,c);return K(d);}
function AX3(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.ik,c.ik)&&BR(a.hP,c.hP)?1:0;}return 0;}
function TQ(){var a=this;B.call(a);a.s6=null;a.s7=0;a.s1=0;a.s3=null;a.s4=0;a.s5=0;}
function AWx(a,b){var c,d,e,f,g,h,i,j;c=a.s6;d=a.s7;e=a.s1;f=a.s3;g=a.s4;h=a.s5;i=Cw(c.bg,5.0);d=Be((c.bg.bT.a-d|0)-i|0,Bd((i-d|0)-c.R.k.a|0,b.j.a));j=Be((c.bg.bT.b-e|0)-i|0,Bd((i-e|0)-c.R.k.b|0,b.j.b));Y(f,d+g|0,j+h|0);EE(c,f,c.Y.k);}
function AGL(){var a=this;F0.call(a);a.Sg=null;a.TJ=0;a.Lr=0;a.JI=0;}
function ACc(){B.call(this);this.Cn=null;}
function ATR(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Cn;d=CW(c[0]);c=Mx(d);e=new U5;d=AF3(c);f=AF3(c);g=Bb(c);h=P(Mv,g);i=h.data;j=0;while(j<g){i[j]=NN(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AHw(e,d,f,h);b.g(e);}
function PN(){B.call(this);this.xh=null;}
function A6B(a,b){var c,d,e,f,g;c=a.xh;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(484)),e);Bf(d,K(f));d=c.q.cu;e=new Rw;g=P(B,1);g.data[0]=b;CO(d,e,C(331),g);}
function U7(){B.call(this);this.AN=null;}
function A0f(a,b){var c,d,e,f,g;c=a.AN;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(485)),e);Bf(d,K(f));e=c.q.cu;d=new ABG;d.AJ=c;g=P(B,1);g.data[0]=b;CO(e,d,C(486),g);}
function P2(){B.call(this);this.EB=null;}
function ASK(a,b){var c,d,e;c=Bj();d=BT(b);e=new J;L(e);H(H(e,C(487)),d);Bf(c,K(e));d=new AFo;d.C6=b;c=D0();BF(c);e=new AFn;e.sQ=c;Ws(b,d,e);}
function ZA(){B.call(this);this.yo=null;}
function AVB(a,b){var c,d,e,f;c=a.yo;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(488)),e);Bf(d,K(f));d=new AC$;e=new S5;e.yS=c;d.kj=IE();c=BO();d.ep=c;d.jx=1;d.ji=0;d.sm=e;BA(c,I7(b));BA(d.ep,b);e=Bj();c=BT(d.kj);f=new J;L(f);H(H(f,C(489)),c);Bf(e,K(f));H0(b,d);}
function Nw(){var a=this;Ew.call(a);a.eX=null;a.hS=null;a.xN=null;a.nY=null;a.AL=null;}
function Ba_(a,b,c){var d=new Nw();Ut(d,a,b,c);return d;}
function Ut(a,b,c,d){var e;Kv(a,b,c,d);b=new VI;c=a.bf;Qx(b,c.V);d=IT(c);b.iK=d;b.dy=GW(d);c=GW(b.iK);b.dx=c;OH(b.eO,b.dy,c);e=new Pn;e.uL=b;c=b.dy;c.iM=e;b.dx.iM=e;Jg(c,0);Jg(b.dx,0);c=b.dy;c.b9=1;b.uK=AIT(c,b.dx);MZ(b,I(CF,[b.dy,b.dx,b.eO]));a.eX=b;ZY(b,a.gx);b=KX(a,a.eX,30.0);a.hS=b;c=new W3;c.vP=a;b.iW=c;c=new W2;c.vb=a;b.iS=c;DV(a.bf,b);}
function A4p(a,b){Eq(a.hS,b.b$);ZY(a.eX,b);}
function Nr(a,b,c){var d,e;d=!c?a.eX.dx:a.eX.dy;e=new RW;e.wl=a;e.wm=b;e.wn=c;F4(d,b,e);}
function A5t(a){a.hS=null;a.eX=null;}
function AYr(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.eX;d=c.dy;c=c.dx;e=B3(d,b);f=B3(c,b);if(!e&&!f)return CN(I(By,[Np(a,1,C(283)),Np(a,0,C(284))]));g=!e?C(284):C(283);if(e)c=d;d=Np(a,e,g);h=a.eX;i=h.iK;j=a.hq;k=new Q7;g=h.dy;h=h.dx;l=i.cf.V;k.mj=g;k.mi=h;k.y$=l;g=a.bf;BF(g);h=new Rb;h.zw=g;return NA(Jw(i,c,j,a,k,h),b,d);}
function Np(a,b,c){var d,e;d=new By;e=new AA4;e.tO=a;e.tN=b;Ce(d,e,c);return d;}
var Xa=G();
function A4U(a){return Oi();}
var QR=G();
function AQE(a){return Oi();}
var Xt=G();
function APi(a){return Oi();}
function T7(){B.call(this);this.vX=null;}
function AQD(a,b,c){var d,e;c=a.vX;d=c.d.h;e=b.br;b=c.fF;ABf(d.E.data[e],0,b);}
function Xu(){var a=this;B.call(a);a.d2=null;a.Am=null;a.zQ=null;}
function Pu(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.d2);switch(b){case 3:break;case 5:c=Qj(a);d=OA(a);b=Bb(a.d2);e=Bb(a.d2);f=Bb(a.d2);g=BO();h=0;while(h<f){BA(g,OA(a));h=h+1|0;}i=new MI;AH8(i,c,d,b);i.ln=g;i.xI=e;break a;default:c=new Dc;d=new J;L(d);V(H(d,C(490)),b);Bp(c,K(d));N(c);}i=A7W(Qj(a),OA(a),Bb(a.d2));}return i;}
function Qj(a){var b,c;b=Bb(a.d2);c=Bb(a.d2);return A0w(EO(a.Am,b,c),Bb(a.d2));}
function OA(a){var b;b=Bb(a.d2);if(b==(-1))return null;return BI(a.zQ,b);}
function So(){var a=this;B.call(a);a.eE=null;a.B4=null;a.Ci=null;}
function HH(a){var b,c,d,e,f;a:{b:{b=Bb(a.eE);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=XX(a);d=Rx(a);b=Bb(a.eE);e=Tj(a);f=new KB;Ol(f,c,d,2);f.q_=b;f.iw=e;break a;case 4:c=HH(a);d=HH(a);f=new JH;Ol(f,c.eJ,c.f6,9);f.ik=c;f.hP=d;break a;case 5:f=A7k(XX(a),Rx(a),Bb(a.eE));break a;case 9:c=Tj(a);f=new HZ;d=!EP(c)&&BI(c,0)!==null?(BI(c,0)).f6:null;Ol(f,null,null,7);f.fH=BO();c=B9(c);while(Cb(c)){e=Cc(c);if(!(e instanceof HZ))BA(f.fH,e);else{e=e;GP(f.fH,e.fH);}}f.f6=d;break a;default:break b;}f
=null;break a;}c=new Dc;d=new J;L(d);V(H(d,C(491)),b);Bp(c,K(d));N(c);}return f;}
function XX(a){var b,c;b=Bb(a.eE);c=Bb(a.eE);return A0w(EO(a.B4,b,c),Bb(a.eE));}
function Rx(a){var b;b=Bb(a.eE);if(b==(-1))return null;return BI(a.Ci,b);}
function Tj(a){var b,c,d;b=Bb(a.eE);c=BO();d=0;while(d<b){BA(c,HH(a));d=d+1|0;}return c;}
function UI(){var a=this;B.call(a);a.tX=null;a.tU=null;a.tT=null;a.tW=0;a.tV=0;a.t0=0;a.tZ=0;a.t2=0;a.t1=0;a.tY=0;a.sR=0;}
function A6n(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tX;d=a.tU;e=a.tT;f=a.tW;g=a.tV;h=a.t0;i=a.tZ;j=a.t2;k=a.t1;l=a.tY;m=a.sR;n=Cw(c.bg,5.0);o=c.Y.h_();Ct(d,c.Y.k);Ct(e,c.Y.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bg.bT.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.R.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bg.bT.b+c.R.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}EE(c,e,d);}
function VO(){var a=this;B.call(a);a.yL=null;a.yK=0.0;}
function NV(a,b){return LN(a.yL,b,a.yK*2.0+0.875);}
function VI(){var a=this;Iz.call(a);a.iK=null;a.dy=null;a.dx=null;a.uK=null;a.m$=null;a.kb=0;}
function ZY(a,b){F5(a.iK,b);a.eO.iE=b;E7(a.dy,b);E7(a.dx,b);}
function W3(){B.call(this);this.vP=null;}
function A1d(a){var b;b=a.vP;CV(b.bf.V,b.AL);}
function W2(){B.call(this);this.vb=null;}
function ASh(a){var b,c,d;b=a.vb;c=b.bf.V.cU;d=b.eX;if(d.dy!==c&&d.dx!==c)c=null;b.AL=c;}
function U3(){B.call(this);this.ue=null;}
function AUx(a,b,c){H4(Cg(a.ue.d.h,b.br),0,M(c));}
function Sn(){var a=this;B.call(a);a.y6=null;a.y4=null;a.y5=null;}
function A0t(a){AGQ(a.y6,a.y4,a.y5);}
var YK=G();
function ASY(a,b){AMl(b);}
function AB2(){var a=this;B.call(a);a.C9=null;a.C$=null;}
function AOk(a){var b,c;b=a.C9;c=a.C$;GA(b.C.bH,EN(c));}
function AI5(){var a=this;B.call(a);a.gR=null;a.dt=0;}
function A0w(a,b){var c=new AI5();ANj(c,a,b);return c;}
function ANj(a,b,c){a.gR=b;a.dt=c;}
function ATs(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.dt==c.dt&&BR(a.gR,c.gR)?1:0;}return 0;}
function ALC(a){var b,c,d;b=a.gR;c=a.dt;d=new J;L(d);b=H(d,b);Br(b,40);Br(V(b,c),41);return K(d);}
function XG(){B.call(this);this.rH=null;}
function A1P(a,b){b=b;Pg(a.rH,b);}
function WY(){B.call(this);this.yl=null;}
function A61(a,b){b=b;Hw(a.yl,b);}
function Pn(){B.call(this);this.uL=null;}
function A5w(a,b){var c,d,e;c=a.uL;d=c.dy;if(d===b)c.kb=c.kb|1;e=c.dx;if(e===b)c.kb=c.kb|2;if((c.kb&3)==3){b=d.d.h;d=e.d.h;e=new YI;e.xv=c;AJ0(b,d,e,c.iK.cf.V.cu);}}
function FU(){var a=this;B.call(a);a.kP=0;a.u2=0;a.kg=null;a.hx=null;a.zA=null;a.ms=null;}
function Bba(a){var b=new FU();Oc(b,a);return b;}
function Oc(a,b){a.ms=b;a.u2=b.c8;a.kg=null;}
function FD(a){var b,c;if(a.kg!==null)return 1;while(true){b=a.kP;c=a.ms.cc.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kP=b+1|0;}return 0;}
function AKv(a){var b;if(a.u2==a.ms.c8)return;b=new Is;X(b);N(b);}
function On(a){var b,c,d,e;AKv(a);if(!FD(a)){b=new MW;X(b);N(b);}b=a.kg;if(b!==null){c=a.hx;if(c!==null)a.zA=c;a.hx=b;a.kg=b.c6;}else{d=a.ms.cc.data;e=a.kP;a.kP=e+1|0;b=d[e];a.hx=b;a.kg=b.c6;a.zA=null;}}
var ABL=G(FU);
function QU(a){On(a);return a.hx.cK;}
var Uw=G(FU);
function O3(a){On(a);return a.hx;}
var AAG=G(FU);
function AD6(){var a=this;B.call(a);a.z0=null;a.z1=null;a.zZ=null;}
function ANk(a,b){var c,d,e,f,g;c=a.z0;d=a.z1;e=a.zZ;f=new AFa;g=ADk(E5(d));AMP(f,b,null,g);Ig(c,f);e.e();}
function AD5(){B.call(this);this.yw=null;}
function AVQ(a,b){Bf(a.yw,b);}
function AF8(){var a=this;B.call(a);a.Q0=null;a.Uj=0;}
function AAE(){var a=this;B.call(a);a.l=null;a.eb=0;a.ne=null;a.rC=0;a.ic=0;a.f0=0;a.bF=0;a.n1=null;}
function NE(a){return a.l.bW;}
function WL(a,b,c,d){var e,f,g,h,i,j;e=BO();f=a.eb;g=0;if(c!=f)a.eb=c;a:{switch(b){case -1073741784:h=new SJ;c=a.bF+1|0;a.bF=c;GH(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Rt;c=a.bF+1|0;a.bF=c;GH(h,c);break a;case -33554392:h=new Tz;c=a.bF+1|0;a.bF=c;GH(h,c);break a;default:c=a.ic+1|0;a.ic=c;if(d!==null)h=A9c(c);else{h=new Gl;GH(h,0);g=1;}c=a.ic;if(c<=(-1))break a;if(c>=10)break a;a.ne.data[c]=h;break a;}h=new AFi;GH(h,(-1));}while(true){if(Fx(a.l)&&a.l.m==(-536870788))
{d=A5l(Cn(a,2),Cn(a,64));while(!DJ(a.l)&&Fx(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CJ(d,Bo(i));i=a.l;if(i.bo!=(-536870788))continue;Bo(i);}i=LO(a,d);i.U(h);}else if(a.l.bo==(-536870788)){i=Ii(h);Bo(a.l);}else{i=Zb(a,h);d=a.l;if(d.bo==(-536870788))Bo(d);}if(i!==null)BA(e,i);if(DJ(a.l))break;if(a.l.bo==(-536870871))break;}if(a.l.ns==(-536870788))BA(e,Ii(h));if(a.eb!=f&&!g){a.eb=f;d=a.l;d.hu=f;d.m=d.bo;d.fy=d.fK;j=d.dE;d.z=j+1|0;d.jZ=j;F6(d);}switch(b){case -1073741784:break;case -536870872:d
=new Xm;Gm(d,e,h);return d;case -268435416:d=new AD4;Gm(d,e,h);return d;case -134217688:d=new AAH;Gm(d,e,h);return d;case -67108824:d=new T1;Gm(d,e,h);return d;case -33554392:d=new Eh;Gm(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return A85(BI(e,0),h);default:return A7E(e,h);}return Ii(h);}d=new KN;Gm(d,e,h);return d;}
function AMm(a){var b,c,d,e,f,g,h;b=BQ(4);c=(-1);d=(-1);if(!DJ(a.l)&&Fx(a.l)){e=b.data;c=Bo(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B6(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bo;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bo(f);f=a.l;g=f.bo;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bo(f);return A4_(e,3);}return A4_(e,2);}if(!Cn(a,2))return AGt(b[0]);if(Cn(a,64))return A3I(b[0]);return AY8(b[0]);}e=b.data;c=1;while(c<4&&!DJ(a.l)&&Fx(a.l)){h=c+1|0;e[c]=Bo(a.l);c=h;}if(c==1){h=e[0];if(!(Bbb.ET(h)==Bbc?0:1))return WD(a,e[0]);}if
(!Cn(a,2))return A9B(b,c);if(Cn(a,64)){f=new Wy;Qg(f,b,c);return f;}f=new ACB;Qg(f,b,c);return f;}
function Zb(a,b){var c,d,e,f,g,h,i;if(Fx(a.l)&&!Lg(a.l)&&NT(a.l.m)){if(Cn(a,128)){c=AMm(a);if(!DJ(a.l)){d=a.l;e=d.bo;if(!(e==(-536870871)&&!(b instanceof Gl))&&e!=(-536870788)&&!Fx(d))c=MK(a,b,c);}}else if(!YF(a.l)&&!ADv(a.l)){f=new Qs;L(f);while(!DJ(a.l)&&Fx(a.l)&&!YF(a.l)&&!ADv(a.l)){if(!(!Lg(a.l)&&!a.l.m)&&!(!Lg(a.l)&&NT(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bo(a.l);if(!MJ(e))Br(f,e&65535);else Km(f,GI(e));}if(!Cn(a,2)){c=new AAV;D9(c);c.cy
=K(f);e=f.H;c.bO=e;c.pF=A2D(e);c.n4=A2D(c.bO);h=0;while(h<(c.bO-1|0)){Sv(c.pF,Q(c.cy,h),(c.bO-h|0)-1|0);Sv(c.n4,Q(c.cy,(c.bO-h|0)-1|0),(c.bO-h|0)-1|0);h=h+1|0;}}else if(Cn(a,64))c=A9A(f);else{c=new PM;D9(c);c.h4=K(f);c.bO=f.H;}}else c=MK(a,b,AE6(a,b));}else{d=a.l;if(d.bo!=(-536870871))c=MK(a,b,AE6(a,b));else{if(b instanceof Gl)N(Co(C(21),d.bW,Qq(d)));c=Ii(b);}}a:{if(!DJ(a.l)){e=a.l.bo;if(!(e==(-536870871)&&!(b instanceof Gl))&&e!=(-536870788)){f=Zb(a,b);if(c instanceof Dg&&!(c instanceof F8)&&!(c instanceof C7)
&&!(c instanceof Fi)){i=c;if(!f.b6(i.O)){c=new V6;Fr(c,i.O,i.f,i.kd);c.O.U(c);}}if((f.jk()&65535)!=43)c.U(f);else c.U(f.O);break a;}}if(c===null)return null;c.U(b);}if((c.jk()&65535)!=43)return c;return c.O;}
function MK(a,b,c){var d,e,f,g,h;d=a.l;e=d.bo;if(c!==null&&!(c instanceof Cf)){switch(e){case -2147483606:Bo(d);d=new W$;Dx(d,c,b,e);O5();c.U(Bbd);return d;case -2147483605:Bo(d);d=new Zz;Dx(d,c,b,(-2147483606));O5();c.U(Bbd);return d;case -2147483585:Bo(d);d=new Q_;Dx(d,c,b,(-536870849));O5();c.U(Bbd);return d;case -2147483525:f=new PI;d=GD(d);g=a.f0+1|0;a.f0=g;M6(f,d,c,b,(-536870849),g);O5();c.U(Bbd);return f;case -1073741782:case -1073741781:Bo(d);d=new SC;Dx(d,c,b,e);c.U(d);return d;case -1073741761:Bo(d);d
=new AAd;Dx(d,c,b,(-536870849));c.U(b);return d;case -1073741701:h=new UH;d=GD(d);e=a.f0+1|0;a.f0=e;M6(h,d,c,b,(-536870849),e);c.U(h);return h;case -536870870:case -536870869:Bo(d);if(c.jk()!=(-2147483602)){d=new C7;Dx(d,c,b,e);}else if(Cn(a,32)){d=new SD;Dx(d,c,b,e);}else{d=new YM;f=Zl(a.eb);Dx(d,c,b,e);d.nr=f;}c.U(d);return d;case -536870849:Bo(d);d=new GZ;Dx(d,c,b,(-536870849));c.U(b);return d;case -536870789:h=new GE;d=GD(d);e=a.f0+1|0;a.f0=e;M6(h,d,c,b,(-536870849),e);c.U(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bo(d);d=new AFy;Fr(d,f,b,e);f.f=d;return d;case -2147483585:Bo(d);c=new V0;Fr(c,f,b,(-2147483585));return c;case -2147483525:c=new Za;S1(c,GD(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bo(d);d=new AAc;Fr(d,f,b,e);f.f=d;return d;case -1073741761:Bo(d);c=new ACM;Fr(c,f,b,(-1073741761));return c;case -1073741701:c=new Su;S1(c,GD(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bo(d);d=A7T(f,b,e);f.f=d;return d;case -536870849:Bo(d);c
=new Fi;Fr(c,f,b,(-536870849));return c;case -536870789:return A8D(GD(d),f,b,(-536870789));default:}return c;}
function AE6(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Gl;while(true){a:{e=a.l;f=e.bo;if((f&(-2147418113))==(-2147483608)){Bo(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.eb=g;else{if(f!=(-1073741784))g=a.eb;c=WL(a,f,g,b);e=a.l;if(e.bo!=(-536870871))N(Co(C(21),e.bW,e.dE));Bo(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bo(e);c
=A41(0);break a;case -2147483577:Bo(e);c=new YJ;B8(c);break a;case -2147483558:Bo(e);c=new Wu;h=a.bF+1|0;a.bF=h;AMx(c,h);break a;case -2147483550:Bo(e);c=A41(1);break a;case -2147483526:Bo(e);c=new AEq;B8(c);break a;case -536870876:Bo(e);a.bF=a.bF+1|0;if(Cn(a,8)){if(Cn(a,1)){c=A7w(a.bF);break a;}c=A7c(a.bF);break a;}if(Cn(a,1)){c=A7I(a.bF);break a;}c=A72(a.bF);break a;case -536870866:Bo(e);if(Cn(a,32)){c=A7$();break a;}c=A7Z(Zl(a.eb));break a;case -536870821:Bo(e);i=0;c=a.l;if(c.bo==(-536870818)){i=1;Bo(c);}c
=LO(a,HN(a,i));c.U(b);e=a.l;if(e.bo!=(-536870819))N(Co(C(21),e.bW,e.dE));Y2(e,1);Bo(a.l);break a;case -536870818:Bo(e);a.bF=a.bF+1|0;if(!Cn(a,8)){c=new LE;B8(c);break a;}c=new XS;e=Zl(a.eb);B8(c);c.Aq=e;break a;case 0:j=e.fK;if(j!==null)c=LO(a,j);else{if(DJ(e)){c=Ii(b);break a;}c=AGt(f&65535);}Bo(a.l);break a;default:break b;}Bo(e);c=new LE;B8(c);break a;}h=(f&2147483647)-48|0;if(a.ic<h)N(Co(C(21),Gb(e),Qq(a.l)));Bo(e);a.bF=a.bF+1|0;c=!Cn(a,2)?A8n(h,a.bF):Cn(a,64)?A7x(h,a.bF):A9y(h,a.bF);a.ne.data[h].ps=1;a.rC
=1;break a;}if(f>=0&&!Ht(e)){c=WD(a,f);Bo(a.l);}else if(f==(-536870788))c=Ii(b);else{if(f!=(-536870871)){b=new KC;c=!Ht(a.l)?Wq(f&65535):a.l.fK.J();e=a.l;Nd(b,c,e.bW,e.dE);N(b);}if(d){b=new KC;e=a.l;Nd(b,C(21),e.bW,e.dE);N(b);}c=Ii(b);}}}if(f!=(-16777176))break;}return c;}
function HN(a,b){var c,d,e,f,g,h,i,j,$$je;c=A5l(Cn(a,2),Cn(a,64));E0(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DJ(a.l))break a;h=a.l;b=h.bo;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CJ(c,d);d=Bo(a.l);h=a.l;if(h.bo!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bo(h);e=1;d=(-1);break d;}Bo(h);if(g){c=HN(a,0);break d;}if(a.l.bo==(-536870819))break d;Wg(c,HN(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bo(h);h=a.l;i=h.bo;if(Ht(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(NT(i))break e;i=i&65535;break e;}catch($$e){$$je=E$($$e);if($$je instanceof EH){break b;}else{throw $$e;}}}try{Cd(c,d,i);}catch($$e){$$je=E$($$e);if($$je instanceof EH){break b;}else{throw $$e;}}Bo(a.l);d=(-1);break d;}}if(d>=0)CJ(c,d);d=45;Bo(a.l);break d;case -536870821:if(d>=0){CJ(c,d);d=(-1);}Bo(a.l);j=0;h=a.l;if(h.bo==(-536870818)){Bo(h);j=1;}if(!e)AJC(c,HN(a,j));else Wg(c,HN(a,j));e=0;Bo(a.l);break d;case -536870819:if(d>=0)CJ(c,
d);d=93;Bo(a.l);break d;case -536870818:if(d>=0)CJ(c,d);d=94;Bo(a.l);break d;case 0:if(d>=0)CJ(c,d);h=a.l.fK;if(h===null)d=0;else{AM7(c,h);d=(-1);}Bo(a.l);break d;default:}if(d>=0)CJ(c,d);d=Bo(a.l);}g=0;}N(Co(C(21),NE(a),a.l.dE));}N(Co(C(21),NE(a),a.l.dE));}if(!f){if(d>=0)CJ(c,d);return c;}N(Co(C(21),NE(a),a.l.dE-1|0));}
function WD(a,b){var c,d,e;c=MJ(b);if(Cn(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AY8(b&65535);}if(Cn(a,64)&&b>128){if(c){d=new Xh;D9(d);d.bO=2;d.nO=Hm(Hk(b));return d;}if(QT(b))return ATp(b&65535);if(!Tm(b))return A3I(b&65535);return A1c(b&65535);}}if(!c){if(QT(b))return ATp(b&65535);if(!Tm(b))return AGt(b&65535);return A1c(b&65535);}d=new Eo;D9(d);d.bO=2;d.hi=b;e=(GI(b)).data;d.ks=e[0];d.jQ=e[1];return d;}
function LO(a,b){var c,d,e;if(!ALw(b)){if(!b.S){if(b.iH())return AQW(b);return AVE(b);}if(!b.iH())return A1u(b);c=new M7;AC4(c,b);return c;}c=AFW(b);d=new Pt;B8(d);d.nv=c;d.xO=c.bm;if(!b.S){if(b.iH())return AHV(AQW(JT(b)),d);return AHV(AVE(JT(b)),d);}if(!b.iH())return AHV(A1u(JT(b)),d);c=new RX;e=new M7;AC4(e,JT(b));AJe(c,e,d);return c;}
function JU(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cn(a,b){return (a.eb&b)!=b?0:1;}
function ABj(){B.call(this);this.yT=null;}
function AWW(a,b){LP(a.yT,b);}
function ABe(){B.call(this);this.zV=null;}
function ASM(a,b){b.hJ=a.zV.dn;}
function ABd(){B.call(this);this.vZ=null;}
function A3B(a,b){b.hD=a.vZ.dn.ct;}
function ACU(){var a=this;B.call(a);a.vU=null;a.vV=null;}
function A4Y(a){var b,c;b=a.vU;c=a.vV;GA(b.C.bH,EN(c));}
function ACY(){var a=this;B.call(a);a.D_=null;a.tS=null;}
function AZ1(a,b){var c,d,e,f;c=b.data;b=a.tS;d=Bj();b=BT(b);e=new J;L(e);H(H(e,C(492)),b);Bf(d,K(e));b=Bj();f=c.length;d=new J;L(d);V(H(d,C(493)),f);Bf(b,K(d));}
function AC0(){B.call(this);this.Gl=null;}
function A5D(a,b){$rt_globals.console.info($rt_ustr(b));}
var IM=G(0);
function Qe(){var a=this;B.call(a);a.lJ=0;a.Dr=null;}
function A3F(a,b){var c,d;c=BT(b);d=new J;L(d);H(H(d,C(494)),c);$rt_globals.console.info($rt_ustr(K(d)));a.lJ=a.lJ+1|0;H0(b,a);}
function A0W(a,b){var c;b=BT(b);c=new J;L(c);H(H(c,C(495)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AU3(a){var b;b=a.lJ-1|0;a.lJ=b;if(!b)Bf(Bj(),C(496));}
function RK(){var a=this;B.call(a);a.uo=null;a.un=null;}
function A11(a){var b,c;b=a.uo;c=EN(a.un);CX(b.h$,c);}
function YL(){B.call(this);this.rV=null;}
function AZs(a,b){b.hJ=a.rV;}
var Ic=G(0);
function T9(){B.call(this);this.zY=null;}
function A2e(a,b,c,d){La(a.zY,b,c.br,d.br);}
function T$(){B.call(this);this.x1=null;}
function A0Q(a,b,c,d){La(a.x1,b,c.br,d.br);}
function Jc(){B.call(this);this.oR=0;}
var Bbe=null;var Bbf=null;var Bbg=null;function ATZ(a){var b=new Jc();AHX(b,a);return b;}
function AHX(a,b){a.oR=b;}
function Y8(b){return !b?Bbf:Bbe;}
function AJ5(){Bbe=ATZ(1);Bbf=ATZ(0);Bbg=F($rt_booleancls());}
var Lc=G(0);
var SK=G();
var Nv=G(0);
var AHj=G();
function S9(){B.call(this);this.v1=null;}
function A2L(a,b,c,d){Kd(a.v1,b,c.br,d.br);}
var S8=G();
function AWu(a,b){return b.eh.dt>=0?0:1;}
var S7=G();
function AUm(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eJ;if(b===null)break b;if(b.dt>=0)break b;}c=1;break a;}c=0;}return c;}
function S_(){B.call(this);this.BA=null;}
function A2k(a,b,c,d){Kd(a.BA,b,c.br,d.br);}
function BV(){var a=this;B.call(a);a.f=null;a.cJ=0;a.pB=null;a.kd=0;}
var A9_=0;function B8(a){var b;b=A9_;A9_=b+1|0;a.pB=Ih(b);}
function N9(a,b){var c;c=A9_;A9_=c+1|0;a.pB=Ih(c);a.f=b;}
function IZ(a,b,c,d){var e;e=d.A;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function I8(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZk(a,b){a.kd=b;}
function AYS(a){return a.kd;}
function AHE(a){var b,c,d;b=a.pB;c=a.t();d=new J;L(d);Br(d,60);b=H(d,b);Br(b,58);Br(H(b,c),62);return K(d);}
function AUH(a){return AHE(a);}
function AU$(a){return a.f;}
function AVT(a,b){a.f=b;}
function A5d(a,b){return 1;}
function A56(a){return null;}
function KT(a){var b;a.cJ=1;b=a.f;if(b!==null){if(!b.cJ){b=b.gV();if(b!==null){a.f.cJ=1;a.f=b;}a.f.e3();}else if(b instanceof H9&&b.e7.ps)a.f=b.f;}}
function AJm(){A9_=1;}
var Rw=G();
function A09(a,b){AMl(b);}
function ABG(){B.call(this);this.AJ=null;}
function ARM(a,b){Tx(a.AJ,b);}
function AFo(){B.call(this);this.C6=null;}
function A4I(a,b){var c;c=a.C6;AJZ(N0(c),c,b);}
function AFn(){B.call(this);this.sQ=null;}
function AO$(a,b){Bf(a.sQ,b);}
function AC$(){var a=this;B.call(a);a.sm=null;a.kj=null;a.ep=null;a.jx=0;a.ji=0;}
function A4D(a,b){var c,d,e,f,g;if(a.kj!==IE()){b=new Bt;X(b);N(b);}BA(a.ep,I7(b));BA(a.ep,b);c=Bj();d=a.ji;a.ji=d+1|0;e=BT(b);f=a.ep.p;g=new J;L(g);V(H(H(H(V(H(g,C(497)),d),C(281)),e),C(498)),f);Bf(c,K(g));a.jx=a.jx+1|0;H0(b,a);}
function ATc(a,b){var c,d,e,f;if(a.kj!==IE()){b=new Bt;X(b);N(b);}BA(a.ep,N0(b));BA(a.ep,b);c=Bj();d=a.ji;a.ji=d+1|0;b=BT(b);e=a.ep.p;f=new J;L(f);V(H(H(H(V(H(f,C(499)),d),C(281)),b),C(498)),e);Bf(c,K(f));}
function AZI(a){var b,c,d,e,f,g;if(a.kj!==IE()){b=new Bt;X(b);N(b);}c=a.jx-1|0;a.jx=c;if(!c){b=Bj();c=a.ep.p;d=new J;L(d);V(H(d,C(500)),c);Bf(b,K(d));b=a.ep;d=a.sm;e=P(B,b.p);f=e.data;c=0;g=f.length;while(c<g){f[c]=BI(b,c);c=c+1|0;}Tx(d.yS,e);}}
function S5(){B.call(this);this.yS=null;}
function WZ(){var a=this;B.call(a);a.rR=null;a.rP=null;a.rO=0;a.rQ=0;}
function A2Q(a,b){b=b;E4(a.rR,a.rP,b,a.rO,a.rQ);}
function W0(){var a=this;B.call(a);a.Dc=null;a.Db=null;a.Da=0;a.C_=0;}
function AQn(a,b){b=b;E4(a.Dc,a.Db,b,a.Da,a.C_);}
function C6(){var a=this;BV.call(a);a.ps=0;a.ex=0;}
var Bbd=null;function O5(){O5=Bm(C6);AZ7();}
function A9c(a){var b=new C6();GH(b,a);return b;}
function GH(a,b){O5();B8(a);a.ex=b;}
function AOj(a,b,c,d){var e,f;e=Jr(d,a.ex);No(d,a.ex,b);f=a.f.c(b,c,d);if(f<0)No(d,a.ex,e);return f;}
function A12(a){return a.ex;}
function AQ1(a){return C(501);}
function AOB(a,b){return 0;}
function AZ7(){var b;b=new YG;B8(b);Bbd=b;}
function Ho(){var a=this;B.call(a);a.bk=null;a.hu=0;a.fB=0;a.wu=0;a.ns=0;a.bo=0;a.m=0;a.AK=0;a.fK=null;a.fy=null;a.z=0;a.kq=0;a.dE=0;a.jZ=0;a.bW=null;}
var Bbh=null;var Bbb=null;var Bbc=0;function Y2(a,b){if(b>0&&b<3)a.fB=b;if(b==1){a.m=a.bo;a.fy=a.fK;a.z=a.jZ;a.jZ=a.dE;F6(a);}}
function Ht(a){return a.fK===null?0:1;}
function Lg(a){return a.fy===null?0:1;}
function Bo(a){F6(a);return a.ns;}
function GD(a){var b;b=a.fK;F6(a);return b;}
function F6(a){var b,c,d,e,f,g,h,$$je;a.ns=a.bo;a.bo=a.m;a.fK=a.fy;a.dE=a.jZ;a.jZ=a.z;while(true){b=0;c=a.z>=a.bk.data.length?0:Ml(a);a.m=c;a.fy=null;if(a.fB==4){if(c!=92)return;c=a.z;d=a.bk.data;c=c>=d.length?0:d[B_(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.z=a.kq;return;}a.fB=a.wu;a.m=a.z>(a.bk.data.length-2|0)?0:Ml(a);}a:{c=a.m;if(c!=92){e=a.fB;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bk.data[a.z]!=63){a.m=(-2147483608);break a;}B_(a);c=a.bk.data[a.z];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B_(a);break b;default:N(Co(C(21),Gb(a),a.z));}a.m=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bk.data[a.z];e=1;break b;case 61:a.m=(-536870872);B_(a);break b;case 62:a.m=(-33554392);B_(a);break b;default:f=AM5(a);a.m=f;if(f<256){a.hu=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.hu=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B_(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.z;d=a.bk.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B_(a);break a;case 63:a.m=c|(-1073741824);B_(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);Y2(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fy=AIS(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.z>=(a.bk.data.length-2|0)?(-1):Ml(a);c:{a.m=c;switch(c){case -1:N(Co(C(21),Gb(a),a.z));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AHO(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fB!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Co(C(21),Gb(a),a.z));case 68:case 83:case 87:case 100:case 115:case 119:a.fy=SX(EO(a.bk,
a.kq,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.wu=a.fB;a.fB=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.z;d=a.bk.data;if(c>=(d.length-2|0))N(Co(C(21),Gb(a),a.z));a.m=d[B_(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=ZC(a,4);break a;case 120:a.m=ZC(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=ALE(a);h=0;if(a.m==80)h=1;try{a.fy=SX(g,h);}catch($$e){$$je=E$($$e);if($$je instanceof M$){N(Co(C(21),Gb(a),a.z));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function ALE(a){var b,c,d,e,f,g;b=new J;F7(b,10);c=a.z;d=a.bk;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EO(d,B_(a),1);f=new J;L(f);H(H(f,C(502)),b);return K(f);}B_(a);c=0;a:{while(true){g=a.z;d=a.bk.data;if(g>=(d.length-2|0))break;c=d[B_(a)];if(c==125)break a;Br(b,c);}}if(c!=125)N(Co(C(21),a.bW,a.z));}if(!b.H)N(Co(C(21),a.bW,a.z));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(502)),f);return K(b);}b:{c:{if(M(f)>3){if(NY(f,C(502)))break c;if(NY(f,C(503)))break c;}break b;}f=DB(f,2);}return f;}
function AIS(a,b){var c,d,e,f,g,$$je;c=new J;F7(c,4);d=(-1);e=2147483647;a:{while(true){f=a.z;g=a.bk.data;if(f>=g.length)break a;b=g[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=K$(Em(c),10);AIY(c,0,AJ6(c));continue;}catch($$e){$$je=E$($$e);if($$je instanceof Dy){break;}else{throw $$e;}}Br(c,b&65535);}N(Co(C(21),a.bW,a.z));}if(b!=125)N(Co(C(21),a.bW,a.z));if(c.H>0)b:{try{e=K$(Em(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E$($$e);if($$je instanceof Dy){}else{throw $$e;}}N(Co(C(21),a.bW,a.z));}else if
(d<0)N(Co(C(21),a.bW,a.z));if((d|e|(e-d|0))<0)N(Co(C(21),a.bW,a.z));b=a.z;g=a.bk.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B_(a);break c;case 63:a.m=(-1073741701);B_(a);break c;default:}a.m=(-536870789);}c=new Xz;c.fY=d;c.fX=e;return c;}
function Gb(a){return a.bW;}
function DJ(a){return !a.bo&&!a.m&&a.z==a.AK&&!Ht(a)?1:0;}
function NT(b){return b<0?0:1;}
function Fx(a){return !DJ(a)&&!Ht(a)&&NT(a.bo)?1:0;}
function YF(a){var b;b=a.bo;return b<=56319&&b>=55296?1:0;}
function ADv(a){var b;b=a.bo;return b<=57343&&b>=56320?1:0;}
function Tm(b){return b<=56319&&b>=55296?1:0;}
function QT(b){return b<=57343&&b>=56320?1:0;}
function ZC(a,b){var c,d,e,f,$$je;c=new J;F7(c,b);d=a.bk.data.length-2|0;e=0;while(true){f=BP(e,b);if(f>=0)break;if(a.z>=d)break;Br(c,a.bk.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=K$(Em(c),16);}catch($$e){$$je=E$($$e);if($$je instanceof Dy){break a;}else{throw $$e;}}return b;}N(Co(C(21),a.bW,a.z));}
function AHO(a){var b,c,d,e,f,g;b=3;c=1;d=a.bk.data;e=d.length-2|0;f=ADe(d[a.z],8);switch(f){case -1:break;default:if(f>3)b=2;B_(a);a:{while(true){if(c>=b)break a;g=a.z;if(g>=e)break a;g=ADe(a.bk.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B_(a);c=c+1|0;}}return f;}N(Co(C(21),a.bW,a.z));}
function AM5(a){var b,c,d,e;b=1;c=a.hu;a:while(true){d=a.z;e=a.bk.data;if(d>=e.length)N(Co(C(21),a.bW,d));b:{c:{switch(e[d]){case 41:B_(a);return c|256;case 45:if(!b)N(Co(C(21),a.bW,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c,d,e,f;b=a.z;a.kq=b;if(!(a.hu&4))a.z=b+1|0;else{c=a.bk.data.length-2|0;a.z=b+1|0;a:while(true){d=a.z;if(d<c&&Sp(a.bk.data[d])){a.z=a.z+1|0;continue;}d=a.z;if(d>=c)break;e=a.bk.data;if(e[d]!=35)break;a.z=d+1|0;while(true){f=a.z;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.z=f+1|0;}}}return a.kq;}
function AMF(b){return Bbh.Jr(b);}
function Ml(a){var b,c,d,e;b=a.bk.data[B_(a)];if(CZ(b)){c=a.kq+1|0;d=a.bk.data;if(c<d.length){e=d[c];if(Dn(e)){B_(a);return E1(b,e);}}}return b;}
function Qq(a){return a.dE;}
function KC(){var a=this;BX.call(a);a.ED=null;a.Em=null;a.tA=0;}
function Co(a,b,c){var d=new KC();Nd(d,a,b,c);return d;}
function Nd(a,b,c,d){X(a);a.tA=(-1);a.ED=b;a.Em=c;a.tA=d;}
function FP(){var a=this;B.call(a);a.GC=FV;a.FV=FV;a.Fq=null;a.DV=null;a.Fm=0;a.GI=null;}
var Bbi=null;var Bbj=null;var Bbk=0;var Bbl=0;var Bbm=null;function AJj(){AJj=Bm(FP);AOn();}
function AT_(b){AJj();if(Bbj!==b)Bbj=b;Bbj.FV=EI();}
function IE(){AJj();return Bbj;}
function AOn(){var b,c,d;b=new FP;AJj();c=null;b.Fq=new B;b.Fm=1;b.DV=C(504);b.GI=c;d=Bbk;Bbk=d+1|0;b.GC=Bq(d);Bbi=b;Bbj=b;Bbk=1;Bbl=1;Bbm=new SW;}
function YI(){B.call(this);this.xv=null;}
function AUQ(a,b){var c,d;c=a.xv;c.m$=b;HR(c.dy,b.qI);HR(c.dx,c.m$.qJ);b=c.uK;d=c.m$;b.he=d;c.eO.eB=d;}
var SJ=G(C6);
function AXY(a,b,c,d){var e;e=a.ex;B2(d,e,b-DK(d,e)|0);return a.f.c(b,c,d);}
function AZq(a){return C(505);}
function A3$(a,b){return 0;}
var AFi=G(C6);
function AZh(a,b,c,d){return b;}
function A1m(a){return C(506);}
var Rt=G(C6);
function AOG(a,b,c,d){if(DK(d,a.ex)!=b)b=(-1);return b;}
function A49(a){return C(507);}
function Tz(){C6.call(this);this.x8=0;}
function AX2(a,b,c,d){var e;e=a.ex;B2(d,e,b-DK(d,e)|0);a.x8=b;return b;}
function AVa(a){return C(508);}
function A2$(a,b){return 0;}
var Gl=G(C6);
function AV7(a,b,c,d){if(d.mu!=1&&b!=d.A)return (-1);d.kV=1;No(d,0,b);return b;}
function AY2(a){return C(509);}
function Cf(){BV.call(this);this.bO=0;}
function D9(a){B8(a);a.bO=1;}
function A6G(a,b,c,d){var e;if((b+a.ch()|0)>d.A){d.dW=1;return (-1);}e=a.bE(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A4R(a){return a.bO;}
function ARt(a,b){return 1;}
var AIC=G(Cf);
function Ii(a){var b=new AIC();A1$(b,a);return b;}
function A1$(a,b){N9(a,b);a.bO=1;a.kd=1;a.bO=0;}
function A4r(a,b,c){return 0;}
function AZ$(a,b,c,d){var e,f,g;e=d.A;f=d.dg;while(true){g=BP(b,e);if(g>0)return (-1);if(g<0&&Dn(Q(c,b))&&b>f&&CZ(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AZe(a,b,c,d,e){var f,g;f=e.A;g=e.dg;while(true){if(c<b)return (-1);if(c<f&&Dn(Q(d,c))&&c>g&&CZ(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AQ2(a){return C(510);}
function AX1(a,b){return 0;}
function B$(){var a=this;BV.call(a);a.bQ=null;a.e7=null;a.ba=0;}
function A7E(a,b){var c=new B$();Gm(c,a,b);return c;}
function Gm(a,b,c){B8(a);a.bQ=b;a.e7=c;a.ba=c.ex;}
function AQK(a,b,c,d){var e,f,g,h;if(a.bQ===null)return (-1);e=GR(d,a.ba);D8(d,a.ba,b);f=a.bQ.p;g=0;while(true){if(g>=f){D8(d,a.ba,e);return (-1);}h=(BI(a.bQ,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATN(a,b){a.e7.f=b;}
function ARC(a){return C(511);}
function A1M(a,b){var c;a:{c=a.bQ;if(c!==null){c=B9(c);while(true){if(!Cb(c))break a;if(!(Cc(c)).b6(b))continue;else return 1;}}}return 0;}
function AUh(a,b){return Jr(b,a.ba)>=0&&GR(b,a.ba)==Jr(b,a.ba)?0:1;}
function AO3(a){var b,c,d,e;a.cJ=1;b=a.e7;if(b!==null&&!b.cJ)KT(b);a:{b=a.bQ;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break a;b=BI(a.bQ,d);e=b.gV();if(e===null)e=b;else{b.cJ=1;EZ(a.bQ,d);AK$(a.bQ,d,e);}if(!e.cJ)e.e3();d=d+1|0;}}}if(a.f!==null)KT(a);}
var KN=G(B$);
function ATB(a,b,c,d){var e,f,g,h;e=DK(d,a.ba);B2(d,a.ba,b);f=a.bQ.p;g=0;while(true){if(g>=f){B2(d,a.ba,e);return (-1);}h=(BI(a.bQ,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ASj(a){return C(512);}
function A3N(a,b){return !DK(b,a.ba)?0:1;}
var Eh=G(KN);
function AZC(a,b,c,d){var e,f,g;e=DK(d,a.ba);B2(d,a.ba,b);f=a.bQ.p;g=0;while(g<f){if((BI(a.bQ,g)).c(b,c,d)>=0)return a.f.c(a.e7.x8,c,d);g=g+1|0;}B2(d,a.ba,e);return (-1);}
function A3G(a,b){a.f=b;}
function ANS(a){return C(512);}
var Xm=G(Eh);
function ATL(a,b,c,d){var e,f;e=a.bQ.p;f=0;while(f<e){if((BI(a.bQ,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AVY(a,b){return 0;}
function A51(a){return C(513);}
var AD4=G(Eh);
function AOy(a,b,c,d){var e,f;e=a.bQ.p;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bQ,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A4V(a,b){return 0;}
function AQF(a){return C(514);}
var AAH=G(Eh);
function AO1(a,b,c,d){var e,f,g,h;e=a.bQ.p;f=d.kY?0:d.dg;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.ba,b);h=0;while(true){if(h>=e)break a;if((BI(a.bQ,h)).cO(f,b,c,d)>=0){B2(d,a.ba,(-1));return g;}h=h+1|0;}}}return (-1);}
function A6X(a,b){return 0;}
function ATq(a){return C(515);}
var T1=G(Eh);
function AXC(a,b,c,d){var e,f;e=a.bQ.p;B2(d,a.ba,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bQ,f)).cO(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A30(a,b){return 0;}
function AOI(a){return C(516);}
function H9(){B$.call(this);this.ds=null;}
function A85(a,b){var c=new H9();AGr(c,a,b);return c;}
function AGr(a,b,c){B8(a);a.ds=b;a.e7=c;a.ba=c.ex;}
function ANK(a,b,c,d){var e,f;e=GR(d,a.ba);D8(d,a.ba,b);f=a.ds.c(b,c,d);if(f>=0)return f;D8(d,a.ba,e);return (-1);}
function ASo(a,b,c,d){var e;e=a.ds.cC(b,c,d);if(e>=0)D8(d,a.ba,e);return e;}
function A4a(a,b,c,d,e){var f;f=a.ds.cO(b,c,d,e);if(f>=0)D8(e,a.ba,f);return f;}
function A1K(a,b){return a.ds.b6(b);}
function A26(a){var b;b=new PE;AGr(b,a.ds,a.e7);a.f=b;return b;}
function AWB(a){var b;a.cJ=1;b=a.e7;if(b!==null&&!b.cJ)KT(b);b=a.ds;if(b!==null&&!b.cJ){b=b.gV();if(b!==null){a.ds.cJ=1;a.ds=b;}a.ds.e3();}}
var ACi=G(DG);
var Bbn=null;function ALH(){Bbn=F($rt_bytecls());}
var Hq=G();
function Ba(){var a=this;Hq.call(a);a.bm=0;a.cI=0;a.P=null;a.mB=null;a.m7=null;a.S=0;}
var Bbo=null;function QM(){QM=Bm(Ba);APm();}
function BB(a){var b;QM();b=new AEI;b.F=BQ(64);a.P=b;}
function AYB(a){return null;}
function AYc(a){return a.P;}
function ALw(a){var b,c,d,e,f;if(!a.cI)b=IA(a.P,0)>=2048?0:1;else{a:{c=a.P;b=0;d=c.by;if(b<d){e=c.F.data;f=(e[0]^(-1))>>>0|0;if(f)b=Jm(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Jm(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A0L(a){return a.S;}
function A4M(a){return a;}
function AFW(a){var b,c;if(a.m7===null){b=a.f5();c=new V5;c.Gn=a;c.yi=b;BB(c);a.m7=c;E0(c,a.cI);}return a.m7;}
function JT(a){var b,c;if(a.mB===null){b=a.f5();c=new V2;c.EG=a;c.BZ=b;c.wB=a;BB(c);a.mB=c;E0(c,a.bm);a.mB.S=a.S;}return a.mB;}
function A50(a){return 0;}
function E0(a,b){var c;c=a.bm;if(c^b){a.bm=c?0:1;a.cI=a.cI?0:1;}if(!a.S)a.S=1;return a;}
function AQf(a){return a.bm;}
function NR(b,c){QM();return b.o(c);}
function Kk(b,c){var d,e;QM();if(b.d5()!==null&&c.d5()!==null){b=b.d5();c=c.d5();d=Be(b.F.data.length,c.F.data.length);e=0;a:{while(e<d){if(b.F.data[e]&c.F.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function SX(b,c){var d,e,f;QM();d=0;while(true){AUL();e=Bbp.data;if(d>=e.length){f=new M$;Bp(f,C(21));f.E_=C(21);f.Gs=b;N(f);}e=e[d].data;if(Bk(b,e[0]))break;d=d+1|0;}return AMe(e[1],c);}
function APm(){var b;b=new HA;AUL();Bbo=b;}
function AGk(){var a=this;Ba.call(a);a.qa=0;a.rr=0;a.id=0;a.nN=0;a.eG=0;a.gS=0;a.M=null;a.bK=null;}
function DL(){var a=new AGk();AW8(a);return a;}
function A5l(a,b){var c=new AGk();APa(c,a,b);return c;}
function AW8(a){BB(a);a.M=A60();}
function APa(a,b,c){BB(a);a.M=A60();a.qa=b;a.rr=c;}
function CJ(a,b){a:{if(a.qa){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eG){O9(a.M,JU(b&65535));break a;}Mc(a.M,JU(b&65535));break a;}if(a.rr&&b>128){a.id=1;b=Hm(Hk(b));}}}if(!(!Tm(b)&&!QT(b))){if(a.nN)O9(a.P,b-55296|0);else Mc(a.P,b-55296|0);}if(a.eG)O9(a.M,b);else Mc(a.M,b);if(!a.S&&MJ(b))a.S=1;return a;}
function AM7(a,b){var c,d,e;if(!a.S&&b.S)a.S=1;if(a.nN){if(!b.cI)Gy(a.P,b.f5());else Du(a.P,b.f5());}else if(!b.cI)GX(a.P,b.f5());else{GN(a.P,b.f5());Du(a.P,b.f5());a.cI=a.cI?0:1;a.nN=1;}if(!a.gS&&b.d5()!==null){if(a.eG){if(!b.bm)Gy(a.M,b.d5());else Du(a.M,b.d5());}else if(!b.bm)GX(a.M,b.d5());else{GN(a.M,b.d5());Du(a.M,b.d5());a.bm=a.bm?0:1;a.eG=1;}}else{c=a.bm;d=a.bK;if(d!==null){if(!c){e=new YV;e.Fv=a;e.CH=c;e.wp=d;e.we=b;BB(e);a.bK=e;}else{e=new YX;e.GH=a;e.ua=c;e.z7=d;e.zH=b;BB(e);a.bK=e;}}else{if(c&&!a.eG
&&OZ(a.M)){d=new YS;d.FW=a;d.Aa=b;BB(d);a.bK=d;}else if(!c){d=new YQ;d.pL=a;d.o$=c;d.yP=b;BB(d);a.bK=d;}else{d=new YR;d.oh=a;d.mZ=c;d.wi=b;BB(d);a.bK=d;}a.gS=1;}}return a;}
function Cd(a,b,c){var d,e,f,g,h;if(b>c){d=new BX;X(d);N(d);}a:{b:{if(!a.qa){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CJ(a,b);b=b+1|0;}}if(!a.eG)Ja(a.M,b,c+1|0);else{d=a.M;c=c+1|0;if(b>c){d=new BJ;X(d);N(d);}e=d.by;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.F.data;h[g]=h[g]&(Kf(d,b)|I4(d,f));}else{h=d.F.data;h[g]=h[g]&Kf(d,b);e=g+1|0;while(e<c){d.F.data[e]=0;e=e+1|0;}if(f&31){h=d.F.data;h[c]=h[c]&I4(d,f);}}HB(d);}}}}return a;}
function AJC(a,b){var c,d,e;if(!a.S&&b.S)a.S=1;if(b.id)a.id=1;c=a.cI;if(!(c^b.cI)){if(!c)GX(a.P,b.P);else Du(a.P,b.P);}else if(c)Gy(a.P,b.P);else{GN(a.P,b.P);Du(a.P,b.P);a.cI=1;}if(!a.gS&&C$(b)!==null){c=a.bm;if(!(c^b.bm)){if(!c)GX(a.M,C$(b));else Du(a.M,C$(b));}else if(c)Gy(a.M,C$(b));else{GN(a.M,C$(b));Du(a.M,C$(b));a.bm=1;}}else{c=a.bm;d=a.bK;if(d!==null){if(!c){e=new QE;e.Dw=a;e.vG=c;e.B9=d;e.wI=b;BB(e);a.bK=e;}else{e=new QY;e.DM=a;e.Cw=c;e.q8=d;e.rt=b;BB(e);a.bK=e;}}else{if(!a.eG&&OZ(a.M)){if(!c){d=new YT;d.GJ
=a;d.s2=b;BB(d);a.bK=d;}else{d=new YU;d.Fy=a;d.Cm=b;BB(d);a.bK=d;}}else if(!c){d=new YY;d.vJ=a;d.um=b;d.z$=c;BB(d);a.bK=d;}else{d=new YZ;d.uJ=a;d.uT=b;d.Ba=c;BB(d);a.bK=d;}a.gS=1;}}}
function Wg(a,b){var c,d,e;if(!a.S&&b.S)a.S=1;if(b.id)a.id=1;c=a.cI;if(!(c^b.cI)){if(!c)Du(a.P,b.P);else GX(a.P,b.P);}else if(!c)Gy(a.P,b.P);else{GN(a.P,b.P);Du(a.P,b.P);a.cI=0;}if(!a.gS&&C$(b)!==null){c=a.bm;if(!(c^b.bm)){if(!c)Du(a.M,C$(b));else GX(a.M,C$(b));}else if(!c)Gy(a.M,C$(b));else{GN(a.M,C$(b));Du(a.M,C$(b));a.bm=0;}}else{c=a.bm;d=a.bK;if(d!==null){if(!c){e=new QG;e.Fu=a;e.BI=c;e.yh=d;e.t$=b;BB(e);a.bK=e;}else{e=new QH;e.Fz=a;e.Bn=c;e.xP=d;e.BE=b;BB(e);a.bK=e;}}else{if(!a.eG&&OZ(a.M)){if(!c){d=new QC;d.DP
=a;d.zh=b;BB(d);a.bK=d;}else{d=new QD;d.GF=a;d.sP=b;BB(d);a.bK=d;}}else if(!c){d=new QI;d.Dj=a;d.CF=b;d.uN=c;BB(d);a.bK=d;}else{d=new QB;d.uM=a;d.Bs=b;d.Al=c;BB(d);a.bK=d;}a.gS=1;}}}
function De(a,b){var c;c=a.bK;if(c!==null)return a.bm^c.o(b);return a.bm^D4(a.M,b);}
function C$(a){if(!a.gS)return a.M;return null;}
function AZ6(a){return a.P;}
function AVJ(a){var b,c;if(a.bK!==null)return a;b=C$(a);c=new QF;c.Fj=a;c.lO=b;BB(c);return E0(c,a.bm);}
function A2o(a){var b,c,d;b=new J;L(b);c=IA(a.M,0);while(c>=0){Km(b,GI(c));Br(b,124);c=IA(a.M,c+1|0);}d=b.H;if(d>0)VS(b,d-1|0);return K(b);}
function AQi(a){return a.id;}
function M$(){var a=this;Bt.call(a);a.E_=null;a.Gs=null;}
function Eu(){BV.call(this);this.O=null;}
function Dx(a,b,c,d){N9(a,c);a.O=b;a.kd=d;}
function A6M(a){return a.O;}
function AUW(a,b){return !a.O.b6(b)&&!a.f.b6(b)?0:1;}
function A5m(a,b){return 1;}
function ASI(a){var b;a.cJ=1;b=a.f;if(b!==null&&!b.cJ){b=b.gV();if(b!==null){a.f.cJ=1;a.f=b;}a.f.e3();}b=a.O;if(b!==null){if(!b.cJ){b=b.gV();if(b!==null){a.O.cJ=1;a.O=b;}a.O.e3();}else if(b instanceof H9&&b.e7.ps)a.O=b.f;}}
function Dg(){Eu.call(this);this.bj=null;}
function A7T(a,b,c){var d=new Dg();Fr(d,a,b,c);return d;}
function Fr(a,b,c,d){Dx(a,b,c,d);a.bj=b;}
function AXD(a,b,c,d){var e,f;e=0;a:{while((b+a.bj.ch()|0)<=d.A){f=a.bj.bE(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bj.ch()|0;e=e+(-1)|0;}return f;}
function AY$(a){return C(517);}
function F8(){Dg.call(this);this.jh=null;}
function A8D(a,b,c,d){var e=new F8();S1(e,a,b,c,d);return e;}
function S1(a,b,c,d,e){Fr(a,c,d,e);a.jh=b;}
function AYm(a,b,c,d){var e,f,g,h,i;e=a.jh;f=e.fY;g=e.fX;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bj.ch()|0)>d.A)break a;i=a.bj.bE(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bj.ch()|0;h=h+(-1)|0;}return i;}if((b+a.bj.ch()|0)>d.A){d.dW=1;return (-1);}i=a.bj.bE(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AYD(a){return ACl(a.jh);}
var C7=G(Eu);
function AXR(a,b,c,d){var e;if(!a.O.L(d))return a.f.c(b,c,d);e=a.O.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A06(a){return C(518);}
var Fi=G(Dg);
function A1Y(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AXg(a,b){a.f=b;a.O.U(b);}
var V6=G(Dg);
function A6A(a,b,c,d){while((b+a.bj.ch()|0)<=d.A&&a.bj.bE(b,c)>0){b=b+a.bj.ch()|0;}return a.f.c(b,c,d);}
function AS9(a,b,c,d){var e,f,g;e=a.f.cC(b,c,d);if(e<0)return (-1);f=e-a.bj.ch()|0;while(f>=b&&a.bj.bE(f,c)>0){g=f-a.bj.ch()|0;e=f;f=g;}return e;}
var PL=G(0);
var SW=G();
function Bg(){var a=this;B.call(a);a.oj=null;a.nw=null;}
function AMe(a,b){if(!b&&a.oj===null)a.oj=a.I();else if(b&&a.nw===null)a.nw=E0(a.I(),1);if(b)return a.nw;return a.oj;}
var Dy=G(BX);
function Xz(){var a=this;Hq.call(a);a.fY=0;a.fX=0;}
function ACl(a){var b,c,d,e,f;b=a.fY;c=a.fX;d=c!=2147483647?Ih(c):C(21);e=new J;L(e);Br(e,123);f=V(e,b);Br(f,44);Br(H(f,d),125);return K(e);}
var YG=G(BV);
function ARN(a,b,c,d){return b;}
function A20(a){return C(519);}
function A24(a,b){return 0;}
function AEI(){var a=this;B.call(a);a.F=null;a.by=0;}
function A60(){var a=new AEI();AY3(a);return a;}
function AY3(a){a.F=BQ(0);}
function Mc(a,b){var c,d;c=b/32|0;if(b>=a.by){Kn(a,c+1|0);a.by=b+1|0;}d=a.F.data;d[c]=d[c]|1<<(b%32|0);}
function Ja(a,b,c){var d,e,f,g,h;d=BP(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.by){Kn(a,f+1|0);a.by=c;}if(d==f){g=a.F.data;g[d]=g[d]|I4(a,b)&Kf(a,c);}else{g=a.F.data;g[d]=g[d]|I4(a,b);h=d+1|0;while(h<f){a.F.data[h]=(-1);h=h+1|0;}if(c&31){g=a.F.data;g[f]=g[f]|Kf(a,c);}}}
function I4(a,b){return (-1)<<(b%32|0);}
function Kf(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function O9(a,b){var c,d,e,f;c=b/32|0;d=a.F.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.by-1|0))HB(a);}}
function D4(a,b){var c,d;c=b/32|0;d=a.F.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function IA(a,b){var c,d,e,f;c=a.by;if(b>=c)return (-1);d=b/32|0;e=a.F.data;f=e[d]>>>(b%32|0)|0;if(f)return Jm(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Jm(e[f])|0;f=f+1|0;}return (-1);}
function Kn(a,b){var c;c=a.F.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.F=JD(a.F,c);}
function HB(a){var b,c,d;b=(a.by+31|0)/32|0;a.by=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Yj(a.F.data[c]);if(d<32)break;c=c+(-1)|0;a.by=a.by-32|0;}a.by=a.by-d|0;}}
function Du(a,b){var c,d,e,f;c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]&b.F.data[d];d=d+1|0;}while(true){f=a.F.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.by=Be(a.by,b.by);HB(a);}
function Gy(a,b){var c,d,e;c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]&(b.F.data[d]^(-1));d=d+1|0;}HB(a);}
function GX(a,b){var c,d,e;c=Bd(a.by,b.by);a.by=c;Kn(a,(c+31|0)/32|0);c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]|b.F.data[d];d=d+1|0;}}
function GN(a,b){var c,d,e;c=Bd(a.by,b.by);a.by=c;Kn(a,(c+31|0)/32|0);c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]^b.F.data[d];d=d+1|0;}HB(a);}
function OZ(a){return a.by?0:1;}
function Pt(){var a=this;B$.call(a);a.nv=null;a.xO=0;}
function A2_(a){var b,c,d;b=!a.xO?C(64):C(520);c=a.nv.J();d=new J;L(d);H(H(H(d,C(521)),b),c);return K(d);}
function RX(){var a=this;B$.call(a);a.li=null;a.mr=null;}
function AHV(a,b){var c=new RX();AJe(c,a,b);return c;}
function AJe(a,b,c){B8(a);a.li=b;a.mr=c;}
function AOg(a,b,c,d){var e,f,g,h,i;e=a.li.c(b,c,d);if(e<0)a:{f=a.mr;g=d.dg;e=d.A;h=b+1|0;e=BP(h,e);if(e>0){d.dW=1;e=(-1);}else{i=Q(c,b);if(!f.nv.o(i))e=(-1);else{if(CZ(i)){if(e<0&&Dn(Q(c,h))){e=(-1);break a;}}else if(Dn(i)&&b>g&&CZ(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A2W(a,b){a.f=b;a.mr.f=b;a.li.U(b);}
function A3k(a){var b,c,d;b=a.li;c=a.mr;d=new J;L(d);H(H(H(H(d,C(522)),b),C(523)),c);return K(d);}
function AOM(a,b){return 1;}
function AOA(a,b){return 1;}
function Ea(){var a=this;B$.call(a);a.dw=null;a.nV=0;}
function A1u(a){var b=new Ea();AC4(b,a);return b;}
function AC4(a,b){B8(a);a.dw=b.mm();a.nV=b.bm;}
function AZZ(a,b,c,d){var e,f,g,h;e=d.A;if(b<e){f=b+1|0;g=Q(c,b);if(a.o(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(JM(g,f)&&a.o(E1(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A5U(a){var b,c,d;b=!a.nV?C(64):C(520);c=a.dw.J();d=new J;L(d);H(H(H(d,C(521)),b),c);return K(d);}
function AQt(a,b){return a.dw.o(b);}
function AOb(a,b){if(b instanceof Eo)return NR(a.dw,b.hi);if(b instanceof EX)return NR(a.dw,b.du);if(b instanceof Ea)return Kk(a.dw,b.dw);if(!(b instanceof EQ))return 1;return Kk(a.dw,b.fS);}
function ARG(a){return a.dw;}
function A4F(a,b){a.f=b;}
function AP$(a,b){return 1;}
var M7=G(Ea);
function ARu(a,b){return a.dw.o(Hm(Hk(b)));}
function AWG(a){var b,c,d;b=!a.nV?C(64):C(520);c=a.dw.J();d=new J;L(d);H(H(H(d,C(524)),b),c);return K(d);}
function AGe(){var a=this;Cf.call(a);a.pS=null;a.th=0;}
function AQW(a){var b=new AGe();ATi(b,a);return b;}
function ATi(a,b){D9(a);a.pS=b.mm();a.th=b.bm;}
function A1x(a,b,c){return !a.pS.o(FX(FA(Q(c,b))))?(-1):1;}
function AYI(a){var b,c,d;b=!a.th?C(64):C(520);c=a.pS.J();d=new J;L(d);H(H(H(d,C(524)),b),c);return K(d);}
function EQ(){var a=this;Cf.call(a);a.fS=null;a.uX=0;}
function AVE(a){var b=new EQ();AT6(b,a);return b;}
function AT6(a,b){D9(a);a.fS=b.mm();a.uX=b.bm;}
function Xc(a,b,c){return !a.fS.o(Q(c,b))?(-1):1;}
function ARR(a){var b,c,d;b=!a.uX?C(64):C(520);c=a.fS.J();d=new J;L(d);H(H(H(d,C(521)),b),c);return K(d);}
function ATP(a,b){if(b instanceof EX)return NR(a.fS,b.du);if(b instanceof EQ)return Kk(a.fS,b.fS);if(!(b instanceof Ea)){if(!(b instanceof Eo))return 1;return 0;}return Kk(a.fS,b.dw);}
function Y1(){var a=this;B$.call(a);a.jw=null;a.qy=null;a.ld=0;}
function A4_(a,b){var c=new Y1();AXS(c,a,b);return c;}
function AXS(a,b,c){B8(a);a.jw=b;a.ld=c;}
function ASv(a,b){a.f=b;}
function Lw(a){if(a.qy===null)a.qy=Gz(a.jw);return a.qy;}
function AUP(a){var b,c;b=Lw(a);c=new J;L(c);H(H(c,C(525)),b);return K(c);}
function ANr(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.A;f=BQ(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?D6([k,l]):D6([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ld;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jw.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ld==3){k=f[0];m=a.jw.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ld==2){b=f[0];m=a.jw.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AYL(a,b){return b instanceof Y1&&!Bk(Lw(b),Lw(a))?0:1;}
function AVO(a,b){return 1;}
function EX(){Cf.call(this);this.du=0;}
function AGt(a){var b=new EX();AT$(b,a);return b;}
function AT$(a,b){D9(a);a.du=b;}
function A1n(a){return 1;}
function AQT(a,b,c){return a.du!=Q(c,b)?(-1):1;}
function APW(a,b,c,d){var e,f,g;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Ki(c,a.du,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ARI(a,b,c,d,e){var f;if(!(d instanceof BC))return I8(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HK(d,a.du,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AV0(a){var b,c;b=a.du;c=new J;L(c);Br(c,b);return K(c);}
function AVF(a,b){if(b instanceof EX)return b.du!=a.du?0:1;if(!(b instanceof EQ)){if(b instanceof Ea)return b.o(a.du);if(!(b instanceof Eo))return 1;return 0;}return Xc(b,0,Wq(a.du))<=0?0:1;}
function AI1(){Cf.call(this);this.o8=0;}
function A3I(a){var b=new AI1();A2j(b,a);return b;}
function A2j(a,b){D9(a);a.o8=FX(FA(b));}
function AXq(a,b,c){return a.o8!=FX(FA(Q(c,b)))?(-1):1;}
function A2V(a){var b,c;b=a.o8;c=new J;L(c);Br(H(c,C(526)),b);return K(c);}
function AFC(){var a=this;Cf.call(a);a.oN=0;a.yf=0;}
function AY8(a){var b=new AFC();AUI(b,a);return b;}
function AUI(a,b){D9(a);a.oN=b;a.yf=JU(b);}
function ANC(a,b,c){return a.oN!=Q(c,b)&&a.yf!=Q(c,b)?(-1):1;}
function AQ7(a){var b,c;b=a.oN;c=new J;L(c);Br(H(c,C(527)),b);return K(c);}
function Ga(){var a=this;B$.call(a);a.j8=0;a.no=null;a.mW=null;a.mQ=0;}
function A9B(a,b){var c=new Ga();Qg(c,a,b);return c;}
function Qg(a,b,c){B8(a);a.j8=1;a.mW=b;a.mQ=c;}
function A59(a,b){a.f=b;}
function ATA(a,b,c,d){var e,f,g,h,i,j,k,l;e=BQ(4);f=d.A;if(b>=f)return (-1);g=LG(a,b,c,f);h=b+a.j8|0;i=AMF(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Da(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LG(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AMF(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.j8|0;if(h>=f){b=k;break a;}g=LG(a,h,c,f);b=k;}}}if(b!=a.mQ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.mW.data[g])break;g=g+1|0;}return (-1);}
function ME(a){var b,c;if(a.no===null){b=new J;L(b);c=0;while(c<a.mQ){Km(b,GI(a.mW.data[c]));c=c+1|0;}a.no=K(b);}return a.no;}
function A2M(a){var b,c;b=ME(a);c=new J;L(c);H(H(c,C(528)),b);return K(c);}
function LG(a,b,c,d){var e,f,g;a.j8=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(JM(e,f)){g=B6(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CZ(g[0])&&Dn(g[1])?E1(g[0],g[1]):g[0];a.j8=2;}}return e;}
function ARO(a,b){return b instanceof Ga&&!Bk(ME(b),ME(a))?0:1;}
function A3H(a,b){return 1;}
var Wy=G(Ga);
var ACB=G(Ga);
var W$=G(C7);
function AZm(a,b,c,d){var e;while(true){e=a.O.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var Zz=G(C7);
function A2g(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.O.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var GZ=G(C7);
function A4B(a,b,c,d){var e;if(!a.O.L(d))return a.f.c(b,c,d);e=a.O.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A5z(a,b){a.f=b;a.O.U(b);}
var Q_=G(GZ);
function ARE(a,b,c,d){var e;e=a.O.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A2y(a,b){a.f=b;}
function GE(){var a=this;C7.call(a);a.go=null;a.dX=0;}
function Bbq(a,b,c,d,e){var f=new GE();M6(f,a,b,c,d,e);return f;}
function M6(a,b,c,d,e,f){Dx(a,c,d,e);a.go=b;a.dX=f;}
function A6T(a,b,c,d){var e,f;e=Xx(d,a.dX);if(!a.O.L(d))return a.f.c(b,c,d);if(e>=a.go.fX)return a.f.c(b,c,d);f=a.dX;e=e+1|0;E6(d,f,e);f=a.O.c(b,c,d);if(f>=0){E6(d,a.dX,0);return f;}f=a.dX;e=e+(-1)|0;E6(d,f,e);if(e>=a.go.fY)return a.f.c(b,c,d);E6(d,a.dX,0);return (-1);}
function AWc(a){return ACl(a.go);}
var PI=G(GE);
function ARa(a,b,c,d){var e,f,g;e=0;f=a.go.fX;a:{while(true){g=a.O.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.go.fY)return (-1);return a.f.c(b,c,d);}
var SC=G(C7);
function AWH(a,b,c,d){var e;if(!a.O.L(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.O.c(b,c,d);}
var AAd=G(GZ);
function AON(a,b,c,d){var e;if(!a.O.L(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.O.c(b,c,d);return e;}
var UH=G(GE);
function AX7(a,b,c,d){var e,f,g;e=Xx(d,a.dX);if(!a.O.L(d))return a.f.c(b,c,d);f=a.go;if(e>=f.fX){E6(d,a.dX,0);return a.f.c(b,c,d);}if(e<f.fY){E6(d,a.dX,e+1|0);g=a.O.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){E6(d,a.dX,0);return g;}E6(d,a.dX,e+1|0);g=a.O.c(b,c,d);}return g;}
var SD=G(Eu);
function A6I(a,b,c,d){var e;e=d.A;if(e>b)return a.f.cO(b,e,c,d);return a.f.c(b,c,d);}
function AVl(a,b,c,d){var e;e=d.A;if(a.f.cO(b,e,c,d)>=0)return b;return (-1);}
function A3q(a){return C(529);}
function YM(){Eu.call(this);this.nr=null;}
function ATQ(a,b,c,d){var e,f;e=d.A;f=ADi(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cO(b,e,c,d);return a.f.c(b,c,d);}
function ANs(a,b,c,d){var e,f,g,h;e=d.A;f=a.f.cC(b,c,d);if(f<0)return (-1);g=ADi(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.f.cO(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.nr.ja(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ADi(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nr.ja(Q(d,b)))break;b=b+1|0;}return b;}
function A36(a){return C(530);}
var FM=G();
var Bbr=null;var Bbs=null;function Zl(b){var c;if(!(b&1)){c=Bbs;if(c!==null)return c;c=new ADC;Bbs=c;return c;}c=Bbr;if(c!==null)return c;c=new ADB;Bbr=c;return c;}
var AFy=G(Dg);
function AN3(a,b,c,d){var e;a:{while(true){if((b+a.bj.ch()|0)>d.A)break a;e=a.bj.bE(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var V0=G(Fi);
function ASX(a,b,c,d){var e;if((b+a.bj.ch()|0)<=d.A){e=a.bj.bE(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var Za=G(F8);
function A4d(a,b,c,d){var e,f,g,h,i;e=a.jh;f=e.fY;g=e.fX;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bj.ch()|0)>d.A)break a;i=a.bj.bE(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bj.ch()|0)>d.A){d.dW=1;return (-1);}i=a.bj.bE(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var AAc=G(Dg);
function ATM(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bj.ch()|0)<=d.A){e=a.bj.bE(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ACM=G(Fi);
function AN_(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.O.c(b,c,d);}
var Su=G(F8);
function A4t(a,b,c,d){var e,f,g,h,i,j;e=a.jh;f=e.fY;g=e.fX;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bj.ch()|0)<=d.A){i=a.bj.bE(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bj.ch()|0)>d.A){d.dW=1;return (-1);}j=a.bj.bE(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LE=G(BV);
function A1L(a,b,c,d){if(b&&!(d.gT&&b==d.dg))return (-1);return a.f.c(b,c,d);}
function A1e(a,b){return 0;}
function ASZ(a){return C(531);}
function AGz(){BV.call(this);this.wr=0;}
function A41(a){var b=new AGz();ARx(b,a);return b;}
function ARx(a,b){B8(a);a.wr=b;}
function AYz(a,b,c,d){var e,f,g;e=b<d.A?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.kY?0:d.dg;return (e!=32&&!AAg(a,e,b,g,c)?0:1)^(f!=32&&!AAg(a,f,b-1|0,g,c)?0:1)^a.wr?(-1):a.f.c(b,c,d);}
function AYJ(a,b){return 0;}
function A6R(a){return C(532);}
function AAg(a,b,c,d,e){var f;if(!K9(b)&&b!=95){a:{if(CI(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(K9(f))return 0;if(CI(f)!=6)return 1;}}return 1;}return 0;}
var YJ=G(BV);
function ARw(a,b,c,d){if(b!=d.jj)return (-1);return a.f.c(b,c,d);}
function AW9(a,b){return 0;}
function AYp(a){return C(533);}
function Wu(){BV.call(this);this.hw=0;}
function A72(a){var b=new Wu();AMx(b,a);return b;}
function AMx(a,b){B8(a);a.hw=b;}
function A3t(a,b,c,d){var e,f,g;e=!d.gT?M(c):d.A;if(b>=e){B2(d,a.hw,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hw,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hw,0);return a.f.c(b,c,d);}
function AZf(a,b){var c;c=!DK(b,a.hw)?0:1;B2(b,a.hw,(-1));return c;}
function A1Z(a){return C(534);}
var AEq=G(BV);
function A2T(a,b,c,d){if(b<(d.kY?M(c):d.A))return (-1);d.dW=1;d.Gg=1;return a.f.c(b,c,d);}
function AXp(a,b){return 0;}
function AQJ(a){return C(535);}
function XS(){BV.call(this);this.Aq=null;}
function AZb(a,b,c,d){a:{if(b!=d.A){if(!b)break a;if(d.gT&&b==d.dg)break a;if(a.Aq.Bq(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function AQB(a,b){return 0;}
function AYi(a){return C(536);}
var AIN=G(B$);
function A7$(){var a=new AIN();A2H(a);return a;}
function A2H(a){B8(a);}
function AWK(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.dW=1;return (-1);}g=Q(c,b);if(CZ(g)){h=b+2|0;if(h<=e&&JM(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function APB(a){return C(537);}
function AYN(a,b){a.f=b;}
function A2E(a){return (-2147483602);}
function AYM(a,b){return 1;}
function AGj(){B$.call(this);this.nS=null;}
function A7Z(a){var b=new AGj();AO5(b,a);return b;}
function AO5(a,b){B8(a);a.nS=b;}
function A2N(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.dW=1;return (-1);}g=Q(c,b);if(CZ(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(JM(g,h))return a.nS.ja(E1(g,h))?(-1):a.f.c(b,c,d);}}return a.nS.ja(g)?(-1):a.f.c(f,c,d);}
function AZl(a){return C(65);}
function A35(a,b){a.f=b;}
function ANc(a){return (-2147483602);}
function AWZ(a,b){return 1;}
function AMD(){BV.call(this);this.j2=0;}
function A7I(a){var b=new AMD();A0q(b,a);return b;}
function A0q(a,b){B8(a);a.j2=b;}
function ARQ(a,b,c,d){var e;e=!d.gT?M(c):d.A;if(b>=e){B2(d,a.j2,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.j2,1);return a.f.c(b+1|0,c,d);}return (-1);}
function A0p(a,b){var c;c=!DK(b,a.j2)?0:1;B2(b,a.j2,(-1));return c;}
function AR$(a){return C(534);}
function ALz(){BV.call(this);this.i3=0;}
function A7w(a){var b=new ALz();A0M(b,a);return b;}
function A0M(a,b){B8(a);a.i3=b;}
function ATt(a,b,c,d){if((!d.gT?M(c)-b|0:d.A-b|0)<=0){B2(d,a.i3,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.i3,1);return a.f.c(b+1|0,c,d);}
function A0j(a,b){var c;c=!DK(b,a.i3)?0:1;B2(b,a.i3,(-1));return c;}
function ANQ(a){return C(538);}
function AJB(){BV.call(this);this.g6=0;}
function A7c(a){var b=new AJB();A6V(b,a);return b;}
function A6V(a,b){B8(a);a.g6=b;}
function A0_(a,b,c,d){var e,f,g;e=!d.gT?M(c)-b|0:d.A-b|0;if(!e){B2(d,a.g6,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.g6,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.g6,0);return a.f.c(b,c,d);}B2(d,a.g6,0);return a.f.c(b,c,d);default:}return (-1);}
function AO9(a,b){var c;c=!DK(b,a.g6)?0:1;B2(b,a.g6,(-1));return c;}
function AQC(a){return C(539);}
function Iu(){var a=this;B$.call(a);a.rm=0;a.hN=0;}
function A9y(a,b){var c=new Iu();QS(c,a,b);return c;}
function QS(a,b,c){B8(a);a.rm=b;a.hN=c;}
function AN6(a,b,c,d){var e,f,g,h;e=G9(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.hN,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&JU(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A3D(a,b){a.f=b;}
function G9(a,b){var c,d;c=a.rm;d=GR(b,c);c=Jr(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.nW)?Cy(b.nW,d,c):null;}
function AXZ(a){var b,c;b=a.ba;c=new J;L(c);V(H(c,C(540)),b);return K(c);}
function AUA(a,b){var c;c=!DK(b,a.hN)?0:1;B2(b,a.hN,(-1));return c;}
var AMJ=G(Iu);
function A8n(a,b){var c=new AMJ();A5p(c,a,b);return c;}
function A5p(a,b,c){QS(a,b,c);}
function APc(a,b,c,d){var e,f;e=G9(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=!AC3(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.hN,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AVW(a,b,c,d){var e,f;e=G9(a,d);f=d.dg;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=ZB(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ANR(a,b,c,d,e){var f,g;f=G9(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Ru(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A2b(a,b){return 1;}
function A5y(a){var b,c;b=a.ba;c=new J;L(c);V(H(c,C(541)),b);return K(c);}
function AKS(){Iu.call(this);this.Dy=0;}
function A7x(a,b){var c=new AKS();AQz(c,a,b);return c;}
function AQz(a,b,c){QS(a,b,c);}
function ASk(a,b,c,d){var e,f;e=G9(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.hN,M(e));return a.f.c(b+M(e)|0,c,d);}if(FX(FA(Q(e,f)))!=FX(FA(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AYK(a){var b,c;b=a.Dy;c=new J;L(c);V(H(c,C(542)),b);return K(c);}
var Qs=G(Hb);
function AQl(a,b,c,d,e){XC(a,b,c,d,e);return a;}
function AYC(a,b,c,d){AER(a,b,c,d);return a;}
function AY1(a,b){Nn(a,b);}
function A4Q(a,b,c){AE9(a,b,c);return a;}
function AAV(){var a=this;Cf.call(a);a.cy=null;a.pF=null;a.n4=null;}
function APu(a,b,c){return !LD(a,c,b)?(-1):a.bO;}
function AYx(a,b,c,d){var e,f,g;e=d.A;while(true){if(b>e)return (-1);f=Q(a.cy,a.bO-1|0);a:{while(true){g=a.bO;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&LD(a,c,b))break;b=b+ABB(a.pF,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bO|0,c,d)>=0)break;b=b+1|0;}return b;}
function A0u(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cy,0);g=(M(d)-c|0)-a.bO|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&LD(a,d,c))break;c=c-ABB(a.n4,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bO|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ATH(a){var b,c;b=a.cy;c=new J;L(c);H(H(c,C(543)),b);return K(c);}
function AQZ(a,b){var c;if(b instanceof EX)return b.du!=Q(a.cy,0)?0:1;if(b instanceof EQ)return Xc(b,0,Cy(a.cy,0,1))<=0?0:1;if(!(b instanceof Ea)){if(!(b instanceof Eo))return 1;return M(a.cy)>1&&b.hi==E1(Q(a.cy,0),Q(a.cy,1))?1:0;}a:{b:{b=b;if(!b.o(Q(a.cy,0))){if(M(a.cy)<=1)break b;if(!b.o(E1(Q(a.cy,0),Q(a.cy,1))))break b;}c=1;break a;}c=0;}return c;}
function LD(a,b,c){var d;d=0;while(d<a.bO){if(Q(b,d+c|0)!=Q(a.cy,d))return 0;d=d+1|0;}return 1;}
function AFB(){Cf.call(this);this.j5=null;}
function A9A(a){var b=new AFB();A46(b,a);return b;}
function A46(a,b){var c,d,e;D9(a);c=new J;L(c);d=0;while(true){e=BP(d,b.H);if(e>=0){a.j5=K(c);a.bO=c.H;return;}if(d<0)break;if(e>=0)break;Br(c,FX(FA(b.D.data[d])));d=d+1|0;}b=new BJ;X(b);N(b);}
function ASp(a,b,c){var d;d=0;while(true){if(d>=M(a.j5))return M(a.j5);if(Q(a.j5,d)!=FX(FA(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function AQ8(a){var b,c;b=a.j5;c=new J;L(c);H(H(c,C(544)),b);return K(c);}
function PM(){Cf.call(this);this.h4=null;}
function A4e(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.h4))return M(a.h4);e=Q(a.h4,d);f=b+d|0;if(e!=Q(c,f)&&JU(Q(a.h4,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A48(a){var b,c;b=a.h4;c=new J;L(c);H(H(c,C(545)),b);return K(c);}
var HA=G();
var Bbt=null;var Bbu=null;var Bbp=null;function AUL(){AUL=Bm(HA);APL();}
function APL(){Bbt=A76();Bbu=A8R();Bbp=I($rt_arraycls(B),[I(B,[C(546),A8b()]),I(B,[C(547),A7a()]),I(B,[C(548),A9k()]),I(B,[C(549),A9p()]),I(B,[C(550),Bbu]),I(B,[C(551),A8Y()]),I(B,[C(552),A7B()]),I(B,[C(553),A8p()]),I(B,[C(554),A8m()]),I(B,[C(555),A7h()]),I(B,[C(556),A7o()]),I(B,[C(557),A8s()]),I(B,[C(558),A7S()]),I(B,[C(559),A68()]),I(B,[C(560),A9n()]),I(B,[C(561),A7n()]),I(B,[C(562),A8W()]),I(B,[C(563),A8C()]),I(B,[C(564),A8X()]),I(B,[C(565),A7j()]),I(B,[C(566),A9s()]),I(B,[C(567),A8w()]),I(B,[C(568),A7K()]),
I(B,[C(569),A9i()]),I(B,[C(570),A9f()]),I(B,[C(571),A77()]),I(B,[C(572),A7i()]),I(B,[C(573),A8$()]),I(B,[C(574),Bbt]),I(B,[C(575),A7N()]),I(B,[C(576),A8r()]),I(B,[C(577),Bbt]),I(B,[C(578),A66()]),I(B,[C(579),Bbu]),I(B,[C(580),A7s()]),I(B,[C(581),R(0,127)]),I(B,[C(582),R(128,255)]),I(B,[C(583),R(256,383)]),I(B,[C(584),R(384,591)]),I(B,[C(585),R(592,687)]),I(B,[C(586),R(688,767)]),I(B,[C(587),R(768,879)]),I(B,[C(588),R(880,1023)]),I(B,[C(589),R(1024,1279)]),I(B,[C(590),R(1280,1327)]),I(B,[C(591),R(1328,1423)]),
I(B,[C(592),R(1424,1535)]),I(B,[C(593),R(1536,1791)]),I(B,[C(594),R(1792,1871)]),I(B,[C(595),R(1872,1919)]),I(B,[C(596),R(1920,1983)]),I(B,[C(597),R(2304,2431)]),I(B,[C(598),R(2432,2559)]),I(B,[C(599),R(2560,2687)]),I(B,[C(600),R(2688,2815)]),I(B,[C(601),R(2816,2943)]),I(B,[C(602),R(2944,3071)]),I(B,[C(603),R(3072,3199)]),I(B,[C(604),R(3200,3327)]),I(B,[C(605),R(3328,3455)]),I(B,[C(606),R(3456,3583)]),I(B,[C(607),R(3584,3711)]),I(B,[C(608),R(3712,3839)]),I(B,[C(609),R(3840,4095)]),I(B,[C(610),R(4096,4255)]),
I(B,[C(611),R(4256,4351)]),I(B,[C(612),R(4352,4607)]),I(B,[C(613),R(4608,4991)]),I(B,[C(614),R(4992,5023)]),I(B,[C(615),R(5024,5119)]),I(B,[C(616),R(5120,5759)]),I(B,[C(617),R(5760,5791)]),I(B,[C(618),R(5792,5887)]),I(B,[C(619),R(5888,5919)]),I(B,[C(620),R(5920,5951)]),I(B,[C(621),R(5952,5983)]),I(B,[C(622),R(5984,6015)]),I(B,[C(623),R(6016,6143)]),I(B,[C(624),R(6144,6319)]),I(B,[C(625),R(6400,6479)]),I(B,[C(626),R(6480,6527)]),I(B,[C(627),R(6528,6623)]),I(B,[C(628),R(6624,6655)]),I(B,[C(629),R(6656,6687)]),
I(B,[C(630),R(7424,7551)]),I(B,[C(631),R(7552,7615)]),I(B,[C(632),R(7616,7679)]),I(B,[C(633),R(7680,7935)]),I(B,[C(634),R(7936,8191)]),I(B,[C(635),R(8192,8303)]),I(B,[C(636),R(8304,8351)]),I(B,[C(637),R(8352,8399)]),I(B,[C(638),R(8400,8447)]),I(B,[C(639),R(8448,8527)]),I(B,[C(640),R(8528,8591)]),I(B,[C(641),R(8592,8703)]),I(B,[C(642),R(8704,8959)]),I(B,[C(643),R(8960,9215)]),I(B,[C(644),R(9216,9279)]),I(B,[C(645),R(9280,9311)]),I(B,[C(646),R(9312,9471)]),I(B,[C(647),R(9472,9599)]),I(B,[C(648),R(9600,9631)]),
I(B,[C(649),R(9632,9727)]),I(B,[C(650),R(9728,9983)]),I(B,[C(651),R(9984,10175)]),I(B,[C(652),R(10176,10223)]),I(B,[C(653),R(10224,10239)]),I(B,[C(654),R(10240,10495)]),I(B,[C(655),R(10496,10623)]),I(B,[C(656),R(10624,10751)]),I(B,[C(657),R(10752,11007)]),I(B,[C(658),R(11008,11263)]),I(B,[C(659),R(11264,11359)]),I(B,[C(660),R(11392,11519)]),I(B,[C(661),R(11520,11567)]),I(B,[C(662),R(11568,11647)]),I(B,[C(663),R(11648,11743)]),I(B,[C(664),R(11776,11903)]),I(B,[C(665),R(11904,12031)]),I(B,[C(666),R(12032,12255)]),
I(B,[C(667),R(12272,12287)]),I(B,[C(668),R(12288,12351)]),I(B,[C(669),R(12352,12447)]),I(B,[C(670),R(12448,12543)]),I(B,[C(671),R(12544,12591)]),I(B,[C(672),R(12592,12687)]),I(B,[C(673),R(12688,12703)]),I(B,[C(674),R(12704,12735)]),I(B,[C(675),R(12736,12783)]),I(B,[C(676),R(12784,12799)]),I(B,[C(677),R(12800,13055)]),I(B,[C(678),R(13056,13311)]),I(B,[C(679),R(13312,19893)]),I(B,[C(680),R(19904,19967)]),I(B,[C(681),R(19968,40959)]),I(B,[C(682),R(40960,42127)]),I(B,[C(683),R(42128,42191)]),I(B,[C(684),R(42752,
42783)]),I(B,[C(685),R(43008,43055)]),I(B,[C(686),R(44032,55203)]),I(B,[C(687),R(55296,56191)]),I(B,[C(688),R(56192,56319)]),I(B,[C(689),R(56320,57343)]),I(B,[C(690),R(57344,63743)]),I(B,[C(691),R(63744,64255)]),I(B,[C(692),R(64256,64335)]),I(B,[C(693),R(64336,65023)]),I(B,[C(694),R(65024,65039)]),I(B,[C(695),R(65040,65055)]),I(B,[C(696),R(65056,65071)]),I(B,[C(697),R(65072,65103)]),I(B,[C(698),R(65104,65135)]),I(B,[C(699),R(65136,65279)]),I(B,[C(700),R(65280,65519)]),I(B,[C(701),R(0,1114111)]),I(B,[C(702),
A8t()]),I(B,[C(703),B7(0,1)]),I(B,[C(704),KD(62,1)]),I(B,[C(705),B7(1,1)]),I(B,[C(706),B7(2,1)]),I(B,[C(707),B7(3,0)]),I(B,[C(708),B7(4,0)]),I(B,[C(709),B7(5,1)]),I(B,[C(710),KD(448,1)]),I(B,[C(711),B7(6,1)]),I(B,[C(712),B7(7,0)]),I(B,[C(713),B7(8,1)]),I(B,[C(714),KD(3584,1)]),I(B,[C(715),B7(9,1)]),I(B,[C(716),B7(10,1)]),I(B,[C(717),B7(11,1)]),I(B,[C(718),KD(28672,0)]),I(B,[C(719),B7(12,0)]),I(B,[C(720),B7(13,0)]),I(B,[C(721),B7(14,0)]),I(B,[C(722),A8O(983040,1,1)]),I(B,[C(723),B7(15,0)]),I(B,[C(724),B7(16,
1)]),I(B,[C(725),B7(18,1)]),I(B,[C(726),A7H(19,0,1)]),I(B,[C(727),KD(1643118592,1)]),I(B,[C(728),B7(20,0)]),I(B,[C(729),B7(21,0)]),I(B,[C(730),B7(22,0)]),I(B,[C(731),B7(23,0)]),I(B,[C(732),B7(24,1)]),I(B,[C(733),KD(2113929216,1)]),I(B,[C(734),B7(25,1)]),I(B,[C(735),B7(26,0)]),I(B,[C(736),B7(27,0)]),I(B,[C(737),B7(28,1)]),I(B,[C(738),B7(29,0)]),I(B,[C(739),B7(30,0)])]);}
function Xh(){Cf.call(this);this.nO=0;}
function AU2(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.nO!=Hm(Hk(E1(e,d)))?(-1):2;}
function A6Q(a){var b,c;b=Gz(GI(a.nO));c=new J;L(c);H(H(c,C(526)),b);return K(c);}
function Of(){B$.call(this);this.gz=0;}
function ATp(a){var b=new Of();AOQ(b,a);return b;}
function AOQ(a,b){B8(a);a.gz=b;}
function A21(a,b){a.f=b;}
function AZg(a,b,c,d){var e,f;e=b+1|0;if(e>d.A){d.dW=1;return (-1);}f=Q(c,b);if(b>d.dg&&CZ(Q(c,b-1|0)))return (-1);if(a.gz!=f)return (-1);return a.f.c(e,c,d);}
function AQX(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.dg;f=d.A;while(true){if(b>=f)return (-1);g=Ki(c,a.gz,b);if(g<0)return (-1);if(g>e&&CZ(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AZG(a,b,c,d,e){var f,g;if(!(d instanceof BC))return I8(a,b,c,d,e);f=e.dg;a:{while(true){if(c<b)return (-1);g=HK(d,a.gz,c);if(g<0)break a;if(g<b)break a;if(g>f&&CZ(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AVp(a){var b,c;b=a.gz;c=new J;L(c);Br(c,b);return K(c);}
function ANO(a,b){if(b instanceof EX)return 0;if(b instanceof EQ)return 0;if(b instanceof Ea)return 0;if(b instanceof Eo)return 0;if(b instanceof Om)return 0;if(!(b instanceof Of))return 1;return b.gz!=a.gz?0:1;}
function AVw(a,b){return 1;}
function Om(){B$.call(this);this.gi=0;}
function A1c(a){var b=new Om();ATr(b,a);return b;}
function ATr(a,b){B8(a);a.gi=b;}
function AY0(a,b){a.f=b;}
function ANx(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;g=BP(f,e);if(g>0){d.dW=1;return (-1);}h=Q(c,b);if(g<0&&Dn(Q(c,f)))return (-1);if(a.gi!=h)return (-1);return a.f.c(f,c,d);}
function A3d(a,b,c,d){var e,f;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Ki(c,a.gi,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dn(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AUX(a,b,c,d,e){var f,g;if(!(d instanceof BC))return I8(a,b,c,d,e);f=e.A;a:{while(true){if(c<b)return (-1);g=HK(d,a.gi,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dn(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A6i(a){var b,c;b=a.gi;c=new J;L(c);Br(c,b);return K(c);}
function APv(a,b){if(b instanceof EX)return 0;if(b instanceof EQ)return 0;if(b instanceof Ea)return 0;if(b instanceof Eo)return 0;if(b instanceof Of)return 0;if(!(b instanceof Om))return 1;return b.gi!=a.gi?0:1;}
function A3m(a,b){return 1;}
function Eo(){var a=this;Cf.call(a);a.ks=0;a.jQ=0;a.hi=0;}
function A3P(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.ks==e&&a.jQ==d?2:(-1);}
function A2p(a,b,c,d){var e,f;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.A;while(b<e){b=Ki(c,a.ks,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.jQ==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AOR(a,b,c,d,e){var f;if(!(d instanceof BC))return I8(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HK(d,a.jQ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.ks==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A5A(a){var b,c,d;b=a.ks;c=a.jQ;d=new J;L(d);Br(d,b);Br(d,c);return K(d);}
function A3J(a,b){if(b instanceof Eo)return b.hi!=a.hi?0:1;if(b instanceof Ea)return b.o(a.hi);if(b instanceof EX)return 0;if(!(b instanceof EQ))return 1;return 0;}
var ADB=G(FM);
function AOW(a,b){return b!=10?0:1;}
function AUv(a,b,c){return b!=10?0:1;}
var ADC=G(FM);
function A4u(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AWv(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AH$(){var a=this;B.call(a);a.oW=null;a.mY=null;a.jJ=0;a.xi=0;}
function A2D(a){var b=new AH$();ARv(b,a);return b;}
function ARv(a,b){var c,d;while(true){c=a.jJ;if(b<c)break;a.jJ=c<<1|1;}d=c<<1|1;a.jJ=d;d=d+1|0;a.oW=BQ(d);a.mY=BQ(d);a.xi=b;}
function Sv(a,b,c){var d,e,f,g;d=0;e=a.jJ;f=b&e;while(true){g=a.oW.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mY.data[f]=c;}
function ABB(a,b){var c,d,e,f;c=a.jJ;d=b&c;e=0;while(true){f=a.oW.data[d];if(!f)break;if(f==b)return a.mY.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xi;}
var AFP=G();
var Od=G(Bg);
function A76(){var a=new Od();ARb(a);return a;}
function ARb(a){}
function AK0(a){return CJ(Cd(DL(),9,13),32);}
var NF=G(Bg);
function A8R(){var a=new NF();AVq(a);return a;}
function AVq(a){}
function ALv(a){return Cd(DL(),48,57);}
var AH4=G(Bg);
function A8b(){var a=new AH4();AQL(a);return a;}
function AQL(a){}
function A39(a){return Cd(DL(),97,122);}
var AIo=G(Bg);
function A7a(){var a=new AIo();ARz(a);return a;}
function ARz(a){}
function AVz(a){return Cd(DL(),65,90);}
var AIq=G(Bg);
function A9k(){var a=new AIq();AOt(a);return a;}
function AOt(a){}
function AP1(a){return Cd(DL(),0,127);}
var N_=G(Bg);
function A9p(){var a=new N_();APf(a);return a;}
function APf(a){}
function AGm(a){return Cd(Cd(DL(),97,122),65,90);}
var Ma=G(N_);
function A8Y(){var a=new Ma();ARk(a);return a;}
function ARk(a){}
function AGR(a){return Cd(AGm(a),48,57);}
var AJs=G(Bg);
function A7B(){var a=new AJs();A2h(a);return a;}
function A2h(a){}
function A0N(a){return Cd(Cd(Cd(DL(),33,64),91,96),123,126);}
var O_=G(Ma);
function A8p(){var a=new O_();AUg(a);return a;}
function AUg(a){}
function AJz(a){return Cd(Cd(Cd(AGR(a),33,64),91,96),123,126);}
var ALa=G(O_);
function A8m(){var a=new ALa();AVk(a);return a;}
function AVk(a){}
function ASL(a){return CJ(AJz(a),32);}
var AHm=G(Bg);
function A7h(){var a=new AHm();A4f(a);return a;}
function A4f(a){}
function AZv(a){return CJ(CJ(DL(),32),9);}
var AGv=G(Bg);
function A7o(){var a=new AGv();A5Q(a);return a;}
function A5Q(a){}
function ASG(a){return CJ(Cd(DL(),0,31),127);}
var AKo=G(Bg);
function A8s(){var a=new AKo();AOC(a);return a;}
function AOC(a){}
function AWz(a){return Cd(Cd(Cd(DL(),48,57),97,102),65,70);}
var AMr=G(Bg);
function A7S(){var a=new AMr();AYl(a);return a;}
function AYl(a){}
function A2B(a){var b;b=new AB5;b.FS=a;BB(b);b.S=1;return b;}
var AJv=G(Bg);
function A68(){var a=new AJv();AUr(a);return a;}
function AUr(a){}
function AXv(a){var b;b=new Xp;b.FX=a;BB(b);b.S=1;return b;}
var AL8=G(Bg);
function A9n(){var a=new AL8();AOv(a);return a;}
function AOv(a){}
function ARg(a){var b;b=new SS;b.FH=a;BB(b);return b;}
var AHW=G(Bg);
function A7n(){var a=new AHW();ASH(a);return a;}
function ASH(a){}
function AUG(a){var b;b=new SR;b.DS=a;BB(b);return b;}
var AID=G(Bg);
function A8W(){var a=new AID();APb(a);return a;}
function APb(a){}
function AZt(a){var b;b=new Wi;b.EU=a;BB(b);Ja(b.P,0,2048);b.S=1;return b;}
var AF1=G(Bg);
function A8C(){var a=new AF1();AOU(a);return a;}
function AOU(a){}
function APG(a){var b;b=new Y$;b.F9=a;BB(b);b.S=1;return b;}
var AJI=G(Bg);
function A8X(){var a=new AJI();ASn(a);return a;}
function ASn(a){}
function A5T(a){var b;b=new Qp;b.Fb=a;BB(b);b.S=1;return b;}
var AMc=G(Bg);
function A7j(){var a=new AMc();AS1(a);return a;}
function AS1(a){}
function AXr(a){var b;b=new AAr;b.Eg=a;BB(b);return b;}
var AIj=G(Bg);
function A9s(){var a=new AIj();A0Y(a);return a;}
function A0Y(a){}
function ARS(a){var b;b=new Xl;b.Dn=a;BB(b);b.S=1;return b;}
var AKI=G(Bg);
function A8w(){var a=new AKI();ANU(a);return a;}
function ANU(a){}
function APN(a){var b;b=new Xn;b.Ew=a;BB(b);b.S=1;return b;}
var AHo=G(Bg);
function A7K(){var a=new AHo();AO0(a);return a;}
function AO0(a){}
function A0v(a){var b;b=new P6;b.ER=a;BB(b);b.S=1;return b;}
var AJb=G(Bg);
function A9i(){var a=new AJb();ARX(a);return a;}
function ARX(a){}
function A1G(a){var b;b=new Zn;b.Gv=a;BB(b);b.S=1;return b;}
var AMh=G(Bg);
function A9f(){var a=new AMh();A2v(a);return a;}
function A2v(a){}
function AVP(a){var b;b=new Zs;b.D0=a;BB(b);return b;}
var AG2=G(Bg);
function A77(){var a=new AG2();AOV(a);return a;}
function AOV(a){}
function AUa(a){var b;b=new ACv;b.F_=a;BB(b);return b;}
var AGH=G(Bg);
function A7i(){var a=new AGH();A3V(a);return a;}
function A3V(a){}
function ATb(a){var b;b=new ABu;b.Dp=a;BB(b);b.S=1;return b;}
var AJt=G(Bg);
function A8$(){var a=new AJt();A0T(a);return a;}
function A0T(a){}
function A32(a){var b;b=new Px;b.GK=a;BB(b);b.S=1;return b;}
var K1=G(Bg);
function A7N(){var a=new K1();APV(a);return a;}
function APV(a){}
function AHn(a){return CJ(Cd(Cd(Cd(DL(),97,122),65,90),48,57),95);}
var AMz=G(K1);
function A8r(){var a=new AMz();A01(a);return a;}
function A01(a){}
function AS4(a){var b;b=E0(AHn(a),1);b.S=1;return b;}
var ALf=G(Od);
function A66(){var a=new ALf();AWa(a);return a;}
function AWa(a){}
function AYu(a){var b;b=E0(AK0(a),1);b.S=1;return b;}
var AGF=G(NF);
function A7s(){var a=new AGF();A1w(a);return a;}
function A1w(a){}
function AQR(a){var b;b=E0(ALv(a),1);b.S=1;return b;}
function AKr(){var a=this;Bg.call(a);a.tD=0;a.Ao=0;}
function R(a,b){var c=new AKr();A5S(c,a,b);return c;}
function A5S(a,b,c){a.tD=b;a.Ao=c;}
function AR6(a){return Cd(DL(),a.tD,a.Ao);}
var AKC=G(Bg);
function A8t(){var a=new AKC();AWD(a);return a;}
function AWD(a){}
function AWj(a){return Cd(Cd(DL(),65279,65279),65520,65533);}
function AK5(){var a=this;Bg.call(a);a.qA=0;a.o7=0;a.yY=0;}
function B7(a,b){var c=new AK5();AO8(c,a,b);return c;}
function A7H(a,b,c){var d=new AK5();AWs(d,a,b,c);return d;}
function AO8(a,b,c){a.o7=c;a.qA=b;}
function AWs(a,b,c,d){a.yY=d;a.o7=c;a.qA=b;}
function A0g(a){var b;b=A8a(a.qA);if(a.yY)Ja(b.P,0,2048);b.S=a.o7;return b;}
function ALb(){var a=this;Bg.call(a);a.ox=0;a.m0=0;a.rs=0;}
function KD(a,b){var c=new ALb();APO(c,a,b);return c;}
function A8O(a,b,c){var d=new ALb();AXs(d,a,b,c);return d;}
function APO(a,b,c){a.m0=c;a.ox=b;}
function AXs(a,b,c,d){a.rs=d;a.m0=c;a.ox=b;}
function ANi(a){var b;b=new AA2;AHP(b,a.ox);if(a.rs)Ja(b.P,0,2048);b.S=a.m0;return b;}
var AKu=G();
var AGc=G();
function AG1(b){var c,d,e,f,g,h,i;c=AUT(GM(b));d=Nu(c);e=BQ(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Nu(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=PH(c);h=h+1|0;}return e;}
function NZ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function XV(){var a=this;B.call(a);a.zn=0;a.ur=0;a.zx=null;}
function AQm(a,b,c){var d=new XV();AVj(d,a,b,c);return d;}
function AVj(a,b,c,d){a.zn=b;a.ur=c;a.zx=d;}
function AId(){var a=this;B.call(a);a.yv=null;a.zX=0;}
function AUT(a){var b=new AId();AZD(b,a);return b;}
function AZD(a,b){a.yv=b;}
var AKQ=G();
function Nu(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.yv.data;f=b.zX;b.zX=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function PH(b){var c,d;c=Nu(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var MW=G(Bt);
function AKi(){B.call(this);this.UC=null;}
function Wb(){B.call(this);this.tQ=null;}
function AT5(a,b){a.tQ.g(FT(b));}
function Wc(){var a=this;B.call(a);a.AP=null;a.AO=null;}
function AUo(a,b){var c,d;c=a.AP;d=a.AO;b.text().then(Bw(c,"f"),Bw(d,"f"));}
function AE4(){var a=this;B.call(a);a.zi=null;a.zj=null;}
function A3T(a,b){var c,d;c=a.zi;d=a.zj;DZ(c);d.g(b);}
function Tf(){B.call(this);this.ts=null;}
function A0o(a,b){b.hD=a.ts;}
function AEU(){B.call(this);this.wV=null;}
function AV4(a,b){a.wV.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function AET(){var a=this;B.call(a);a.uj=null;a.ui=null;}
function ASP(a,b){var c,d;c=a.uj;d=a.ui;b.arrayBuffer().then(Bw(c,"f"),Bw(d,"f"));}
function ADL(){var a=this;B.call(a);a.zu=null;a.ls=null;a.nG=null;}
function ACA(a){var b,c;b=a.zu.next();c=A$y;b.then(Bw(a,"f"),Bw(c,"f"));}
function AUi(a,b){var c;if(b.done?1:0)a.ls.o3();else{ACA(a);c=b.value;if(c.kind==='file'?1:0){b=AIh(c,ZM(a.nG));a.ls.pm(b);}else{b=A6E(c,ZM(a.nG),null);a.ls.of(b);}}}
function ADw(){var a=this;B.call(a);a.GL=null;a.k4=null;}
function AP5(a,b){var c;c=a.k4;b=b;a.k4=Y8(!c.oR&&!b.eY?0:1);return 1;}
function V5(){var a=this;Ba.call(a);a.yi=null;a.Gn=null;}
function AP7(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cI^D4(a.yi,c):0;}
function V2(){var a=this;Ba.call(a);a.BZ=null;a.wB=null;a.EG=null;}
function AXQ(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cI^D4(a.BZ,c):0;return a.wB.o(b)&&!d?1:0;}
function QF(){var a=this;Ba.call(a);a.lO=null;a.Fj=null;}
function ARY(a,b){return a.bm^D4(a.lO,b);}
function A0y(a){var b,c,d;b=new J;L(b);c=IA(a.lO,0);while(c>=0){Km(b,GI(c));Br(b,124);c=IA(a.lO,c+1|0);}d=b.H;if(d>0)VS(b,d-1|0);return K(b);}
function YS(){var a=this;Ba.call(a);a.Aa=null;a.FW=null;}
function A3S(a,b){return a.Aa.o(b);}
function YQ(){var a=this;Ba.call(a);a.o$=0;a.yP=null;a.pL=null;}
function AU1(a,b){return !(a.o$^D4(a.pL.M,b))&&!(a.o$^a.pL.eG^a.yP.o(b))?0:1;}
function YR(){var a=this;Ba.call(a);a.mZ=0;a.wi=null;a.oh=null;}
function A1V(a,b){return !(a.mZ^D4(a.oh.M,b))&&!(a.mZ^a.oh.eG^a.wi.o(b))?1:0;}
function YV(){var a=this;Ba.call(a);a.CH=0;a.wp=null;a.we=null;a.Fv=null;}
function AZO(a,b){return a.CH^(!a.wp.o(b)&&!a.we.o(b)?0:1);}
function YX(){var a=this;Ba.call(a);a.ua=0;a.z7=null;a.zH=null;a.GH=null;}
function ANd(a,b){return a.ua^(!a.z7.o(b)&&!a.zH.o(b)?0:1)?0:1;}
function YT(){var a=this;Ba.call(a);a.s2=null;a.GJ=null;}
function AQM(a,b){return De(a.s2,b);}
function YU(){var a=this;Ba.call(a);a.Cm=null;a.Fy=null;}
function ASu(a,b){return De(a.Cm,b)?0:1;}
function YY(){var a=this;Ba.call(a);a.um=null;a.z$=0;a.vJ=null;}
function AVZ(a,b){return !De(a.um,b)&&!(a.z$^D4(a.vJ.M,b))?0:1;}
function YZ(){var a=this;Ba.call(a);a.uT=null;a.Ba=0;a.uJ=null;}
function AZo(a,b){return !De(a.uT,b)&&!(a.Ba^D4(a.uJ.M,b))?1:0;}
function QE(){var a=this;Ba.call(a);a.vG=0;a.B9=null;a.wI=null;a.Dw=null;}
function A65(a,b){return !(a.vG^a.B9.o(b))&&!De(a.wI,b)?0:1;}
function QY(){var a=this;Ba.call(a);a.Cw=0;a.q8=null;a.rt=null;a.DM=null;}
function AQP(a,b){return !(a.Cw^a.q8.o(b))&&!De(a.rt,b)?1:0;}
function QC(){var a=this;Ba.call(a);a.zh=null;a.DP=null;}
function APh(a,b){return De(a.zh,b);}
function QD(){var a=this;Ba.call(a);a.sP=null;a.GF=null;}
function A0m(a,b){return De(a.sP,b)?0:1;}
function QI(){var a=this;Ba.call(a);a.CF=null;a.uN=0;a.Dj=null;}
function ARy(a,b){return De(a.CF,b)&&a.uN^D4(a.Dj.M,b)?1:0;}
function QB(){var a=this;Ba.call(a);a.Bs=null;a.Al=0;a.uM=null;}
function A42(a,b){return De(a.Bs,b)&&a.Al^D4(a.uM.M,b)?0:1;}
function QG(){var a=this;Ba.call(a);a.BI=0;a.yh=null;a.t$=null;a.Fu=null;}
function AYE(a,b){return a.BI^a.yh.o(b)&&De(a.t$,b)?1:0;}
function QH(){var a=this;Ba.call(a);a.Bn=0;a.xP=null;a.BE=null;a.Fz=null;}
function AT4(a,b){return a.Bn^a.xP.o(b)&&De(a.BE,b)?0:1;}
function AAD(){B.call(this);this.Cr=null;}
var ALt=G();
var MB=G(0);
function ABt(){var a=this;B.call(a);a.DI=null;a.B$=null;a.l5=null;a.cV=null;a.kO=0;a.pI=0;}
function Pm(a,b){var c,d,e;c=M(a.l5);if(b>=0&&b<=c){AFf(a.cV,null,(-1),(-1));d=a.cV;d.mu=1;d.e0=b;c=d.jj;if(c<0)c=b;d.jj=c;b=a.B$.cC(b,a.l5,d);if(b==(-1))a.cV.dW=1;if(b>=0){d=a.cV;if(d.kV){e=d.em.data;if(e[0]==(-1)){c=d.e0;e[0]=c;e[1]=c;}d.jj=M4(d);return 1;}}a.cV.e0=(-1);return 0;}d=new BJ;Bp(d,Do(b));N(d);}
function AI_(a){return QX(a.cV,0);}
function AKE(a){return SU(a.cV,0);}
function AFU(a){return a.cV.kY;}
function R2(){var a=this;B.call(a);a.ss=null;a.st=null;}
function A3z(a){var b,c;b=a.ss;c=a.st;To();K6(b,c,Bbv);}
function R0(){var a=this;B.call(a);a.A4=null;a.A3=null;}
function AQH(a){var b,c;b=a.A4;c=a.A3;To();K6(b,c,Bbw);}
function R1(){var a=this;B.call(a);a.Di=null;a.Dh=null;}
function AV$(a){K6(a.Di,a.Dh,null);}
function R4(){var a=this;B.call(a);a.zF=null;a.zG=null;}
function ANA(a){var b,c,d,e,f,g,h;b=a.zF;c=a.zG;d=Ej(b.bz.d);e=HU(b.bz.d);d=AC1(b.bz.fJ,d,e);DZ(b.gJ.cf);b=b.bz;e=FJ(b,c);if(d!==null){f=b.d;g=e.bs;h=e.bw;e=new ADg;e.E5=b;e.E6=c;d.Lx(f,g,h,1,e,b.kv);}}
function Tc(){B.call(this);this.xR=null;}
function AVC(a){var b;b=a.xR;DZ(b.gJ.cf);Jt(b.bz,W6(b),0);}
function Tb(){B.call(this);this.vn=null;}
function A10(a){var b;b=a.vn;DZ(b.gJ.cf);Jt(b.bz,W6(b),1);}
function Ta(){B.call(this);this.su=null;}
function A3s(a){var b,c,d;b=a.su;DZ(b.gJ.cf);c=H$(b);b=b.bz;BF(b);d=new AEo;d.rZ=b;Sl(c,d,AGo(C(740)));}
function Sm(){var a=this;B.call(a);a.Au=null;a.At=null;}
function AXa(a){var b,c;b=a.Au;c=a.At;b=b.bz.d;b.qq=c;MM(b);}
var RL=G(0);
var Ba4=null;function AL6(){Ba4=new Uu;}
function AKY(){B.call(this);this.Gi=null;}
function A6u(a){var b,c,d,e;b=a.Gi;c=H$(b);d=b.gJ.cf;e=new ST;e.C2=b;FY(c,ND(d,e));}
function TE(){B.call(this);this.uV=null;}
function A4E(a,b){a.uV.g($rt_str(b.message));}
function ALh(){var a=this;B.call(a);a.Qr=null;a.Qp=null;a.Qs=0.0;}
function ACs(){B.call(this);this.xj=null;}
function ALQ(){B.call(this);this.H3=null;}
var ALR=G();
function ALP(){var a=this;B.call(a);a.Uq=null;a.Up=null;}
var ED=G(CD);
var Bbx=null;var Bby=null;var Bbz=null;var BbA=null;function AYY(){AYY=Bm(ED);ARo();}
function AKZ(a,b){var c=new ED();AG$(c,a,b);return c;}
function AXx(){AYY();return BbA.d1();}
function AG$(a,b,c){AYY();Dt(a,b,c);}
function ARo(){var b;Bbx=AKZ(C(741),0);Bby=AKZ(C(742),1);b=AKZ(C(743),2);Bbz=b;BbA=I(ED,[Bbx,Bby,b]);}
var YC=G(0);
function Q3(){B.call(this);this.y7=null;}
function AT0(a){AI6(a.y7);}
function Q1(){B.call(this);this.A_=null;}
function A0h(a){JK(a.A_);}
function Q2(){B.call(this);this.qX=null;}
function A5V(a){AJX(a.qX);}
function U0(){B.call(this);this.Bd=null;}
function A3L(a){a.Bd.qO();}
function U2(){B.call(this);this.Dl=null;}
function AS8(a){a.Dl.oX();}
function Z_(){B.call(this);this.zW=null;}
function A4T(a){var b,c,d,e,f,g,h,i;b=a.zW;c=(b.r0.b8()).data;d=P(By,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Rz;i.sM=b;i.sL=h;e[f]=Ya(i,h);f=f+1|0;}return d;}
function AAL(){B.call(this);this.sZ=null;}
function AN7(a){a.sZ.oU.gg(0);}
function AAJ(){B.call(this);this.BK=null;}
function APt(a){a.BK.oU.gg(1);}
function TG(){B.call(this);this.xf=null;}
function AWt(a){var b,c,d,e,f;b=a.xf.d.h;c=b.cB;d=new J;L(d);V(H(d,C(744)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.nU;d=new J;L(d);V(H(d,C(745)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dq;e=Gz(Fm(b));AEB(d,0,d.dn,e);b=Bj();f=b.nm;f.data[0]=10;YE(b,f,0,1);}
function TH(){B.call(this);this.sW=null;}
function AN5(a){AAP(a.sW);}
function TI(){B.call(this);this.BC=null;}
function APl(a){ACb(a.BC);}
function TJ(){B.call(this);this.x_=null;}
function AWd(a){OO(a.x_.d);}
function TZ(){B.call(this);this.An=null;}
function A17(a){WE(a.An);}
function AHG(){B.call(this);this.Gu=null;}
function A6w(a){var b,c,d,e,f,g,h;b=a.Gu;c=P(By,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Ya(QZ(b,g),Yi(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Ya(QZ(b,g),Yi(g));e=h;}return c;}
function ADV(){var a=this;B.call(a);a.mw=null;a.i_=0;}
var O7=G(EC);
function AHy(){var a=this;B.call(a);a.Ow=null;a.S9=null;a.MD=null;a.Kc=null;a.Pb=null;}
var Uu=G();
function O2(){var a=this;O7.call(a);a.n0=null;a.mM=null;}
function A3Z(a,b){var c,d,e,f;c=b.fj;d=c/32|0;e=1<<(c%32|0);f=a.mM.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function PP(){EA.call(this);this.pY=null;}
function AXm(a,b){return a.pY.data[b];}
function ATu(a){return a.pY.data.length;}
var PE=G(H9);
function AQp(a,b,c,d){var e,f,g;e=0;f=d.A;a:{while(true){if(b>f){b=e;break a;}g=GR(d,a.ba);D8(d,a.ba,b);e=a.ds.c(b,c,d);if(e>=0)break;D8(d,a.ba,g);b=b+1|0;}}return b;}
function A6S(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=GR(e,a.ba);D8(e,a.ba,c);f=a.ds.c(c,d,e);if(f>=0)break;D8(e,a.ba,g);c=c+(-1)|0;}}return c;}
function AO6(a){return null;}
var RR=G(Bt);
var Ww=G(Bt);
function U4(){Gw.call(this);this.E9=0;}
function RJ(){Gw.call(this);this.Gy=0;}
function ADq(){var a=this;B.call(a);a.up=null;a.B0=null;a.w8=0;a.m_=0;}
function NW(a,b){return Ck(a.up)<b?0:1;}
var AGb=G(0);
function VG(){B.call(this);this.q$=null;}
function AW0(a){AEP(a.q$);}
function VH(){B.call(this);this.C1=null;}
function AU0(a,b){GT(a.C1,b);}
function ADF(){B.call(this);this.rK=null;}
function AV2(a){ABq(a.rK);}
function ADH(){B.call(this);this.AG=null;}
function AXi(a,b){GT(a.AG,b);}
function LJ(){F0.call(this);this.tJ=null;}
function Sj(){LJ.call(this);this.sp=null;}
function YD(){var a=this;B.call(a);a.zD=null;a.zE=null;}
function ADu(){var a=this;B.call(a);a.em=null;a.ll=null;a.p4=null;a.nW=null;a.sf=0;a.kV=0;a.dg=0;a.A=0;a.e0=0;a.kY=0;a.gT=0;a.dW=0;a.Gg=0;a.jj=0;a.mu=0;}
function B2(a,b,c){a.ll.data[b]=c;}
function DK(a,b){return a.ll.data[b];}
function M4(a){return SU(a,0);}
function SU(a,b){AA0(a,b);return a.em.data[(b*2|0)+1|0];}
function D8(a,b,c){a.em.data[b*2|0]=c;}
function No(a,b,c){a.em.data[(b*2|0)+1|0]=c;}
function GR(a,b){return a.em.data[b*2|0];}
function Jr(a,b){return a.em.data[(b*2|0)+1|0];}
function AH6(a){return QX(a,0);}
function QX(a,b){AA0(a,b);return a.em.data[b*2|0];}
function Xx(a,b){return a.p4.data[b];}
function E6(a,b,c){a.p4.data[b]=c;}
function AA0(a,b){var c;if(!a.kV){c=new Dc;X(c);N(c);}if(b>=0&&b<a.sf)return;c=new BJ;Bp(c,Do(b));N(c);}
function AFf(a,b,c,d){a.kV=0;a.mu=2;JS(a.em,(-1));JS(a.ll,(-1));if(b!==null)a.nW=b;if(c>=0){a.dg=c;a.A=d;}a.e0=a.dg;}
function AGU(a){return a.mu;}
function R3(){B.call(this);this.q9=null;}
function A3a(a,b){var c,d,e,f,g;c=a.q9;DZ(c.bf);E9(c.iQ);d=Nq(Ow(c.fL));while(FD(d)){e=O3(d);f=c.fL;g=e.cK;e=null;if(HL(f,g))D2(f,g,e);}e=Bj();d=BT(b);f=new J;L(f);H(H(f,C(746)),d);Bf(e,K(f));e=AU6(b,c);D5(c.db.gK,e);e.jD.e();CX(c.k5,FH(EN(b),C(747)));}
function ADM(){var a=this;B.call(a);a.AU=null;a.AV=0;}
function A0G(a){Im(a.AU,a.AV);}
function AAx(){B.call(this);this.q6=null;}
function ASA(a){Im(a.q6,1);}
function AAw(){B.call(this);this.wY=null;}
function A23(a){Im(a.wY,0);}
function AA4(){var a=this;B.call(a);a.tO=null;a.tN=0;}
function AUp(a){var b,c,d,e,f;b=a.tO;c=a.tN;d=b.bf;e=d.V.cu;f=new RF;f.A$=b;f.A7=c;FY(e,ND(d,f));}
function Rb(){B.call(this);this.zw=null;}
function AXH(a,b){GT(a.zw,b);}
var G4=G(CD);
var Bbw=null;var Bbv=null;var BbB=null;function To(){To=Bm(G4);A6J();}
function A4h(a,b){var c=new G4();AG6(c,a,b);return c;}
function AJV(){To();return BbB.d1();}
function AG6(a,b,c){To();Dt(a,b,c);}
function A6J(){var b;Bbw=A4h(C(748),0);b=A4h(C(749),1);Bbv=b;BbB=I(G4,[Bbw,b]);}
function AEo(){B.call(this);this.rZ=null;}
function AQA(a,b){DO(a.rZ,b);}
function Uk(){var a=this;B.call(a);a.CR=null;a.CS=0;}
function A2q(a,b){var c,d,e,f,g,h;c=a.CR;d=a.CS;e=!d?c.dY.dI:c.dY.dK;DZ(c.bf);f=Bj();g=EN(b);h=new J;L(h);H(H(h,C(750)),g);Bf(f,K(h));f=new ABc;f.gB=c;f.jg=d;f.nD=e;g=AU6(b,f);if(!d)c.gW=g;else c.hR=g;g.cY.e();D5(e,g);b=c.hR;if(b!==null&&c.gW===null)CX(c.jf,Ei(b));if(c.hR===null){b=c.gW;if(b!==null)CX(c.jf,Ei(b));}b=c.hR;if(b!==null&&c.gW!==null){e=c.jf;b=Ei(b);g=Ei(c.gW);c=new J;L(c);H(H(H(c,b),C(751)),g);CX(e,K(c));}}
function Rz(){var a=this;B.call(a);a.sM=null;a.sL=null;}
function A0F(a){var b,c;b=a.sM;c=a.sL;b.jz.op(c);}
function Sr(){B.call(this);this.vh=null;}
function AOh(a,b){Up(H$(a.vh),b,Baa,AGo(C(752)));}
var ACu=G();
var Ba5=null;function A86(){A86=Bm(ACu);AYa();}
function AYa(){var b,c;b=BQ((AJV()).data.length);c=b.data;Ba5=b;c[Bbw.fj]=1;c[Bbv.fj]=2;}
function SB(){B.call(this);this.A5=null;}
function AQr(a,b){var c,d;c=a.A5;d=b.jb;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
function Pi(){var a=this;B.call(a);a.yH=null;a.yI=0.0;}
function A03(a){var b,c;b=a.yH;c=a.yI;b.jz.k0(c);}
function V$(){var a=this;B.call(a);a.yc=null;a.yd=null;}
function AB5(){Ba.call(this);this.FS=null;}
function AV6(a,b){return CI(b)!=2?0:1;}
function Xp(){Ba.call(this);this.FX=null;}
function AYs(a,b){return CI(b)!=1?0:1;}
function SS(){Ba.call(this);this.FH=null;}
function AN$(a,b){return Sp(b);}
function SR(){Ba.call(this);this.DS=null;}
function A0e(a,b){return 0;}
function Wi(){Ba.call(this);this.EU=null;}
function ARn(a,b){return !CI(b)?0:1;}
function Y$(){Ba.call(this);this.F9=null;}
function A5v(a,b){return CI(b)!=9?0:1;}
function Qp(){Ba.call(this);this.Fb=null;}
function ATG(a,b){return H6(b);}
function AAr(){Ba.call(this);this.Eg=null;}
function AUK(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Xl(){Ba.call(this);this.Dn=null;}
function A6C(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function Xn(){Ba.call(this);this.Ew=null;}
function APx(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function P6(){Ba.call(this);this.ER=null;}
function AWf(a,b){a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Zn(){Ba.call(this);this.Gv=null;}
function A15(a,b){return K9(b);}
function Zs(){Ba.call(this);this.D0=null;}
function A3C(a,b){return Zt(b);}
function ACv(){Ba.call(this);this.F_=null;}
function A5i(a,b){return CI(b)!=3?0:1;}
function ABu(){Ba.call(this);this.Dp=null;}
function AWE(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function Px(){Ba.call(this);this.GK=null;}
function APp(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function ML(){Ba.call(this);this.ob=0;}
function A8a(a){var b=new ML();AHP(b,a);return b;}
function AHP(a,b){BB(a);a.ob=b;}
function ATI(a,b){return a.bm^(a.ob!=CI(b&65535)?0:1);}
var AA2=G(ML);
function A4G(a,b){return a.bm^(!(a.ob>>CI(b&65535)&1)?0:1);}
var AE3=G(0);
function ZQ(){B.call(this);this.xu=null;}
function ASb(a){var b,c;b=a.xu;c=b.zD;b=b.zE;c.G8(b.mo,b.p9,null);}
var AHF=G(0);
function ST(){B.call(this);this.C2=null;}
function A4Z(a,b){F4(a.C2.bz,b,Baa);}
function Q7(){var a=this;B.call(a);a.mj=null;a.mi=null;a.y$=null;}
function APU(a){JP(a.mj);JP(a.mi);}
function ANv(a){KQ(a.mj);KQ(a.mi);}
function AVd(a,b){IQ(a.mj,b);IQ(a.mi,b);}
function ATx(a,b){KR(a.y$,b);}
function ACo(){var a=this;B.call(a);a.Gr=null;a.Gq=null;a.Gp=null;}
function ADg(){var a=this;B.call(a);a.E5=null;a.E6=null;}
function RF(){var a=this;B.call(a);a.A$=null;a.A7=0;}
function APd(a,b){Nr(a.A$,b,a.A7);}
var Dd=G(0);
var A$T=null;var A_8=null;var A$V=null;var A$U=null;var A$X=null;var A$W=null;var A$Z=null;var A$Y=null;var A$1=null;var A$0=null;var A$2=null;function AIs(){AIs=Bm(Dd);A5Z();}
function A5Z(){A$T=Cs(0);A_8=DD(8,8,8);A$V=S(C(753));A$U=DD(255,255,255);A$X=S(C(754));A$W=S(C(755));A$Z=S(C(756));A$Y=S(C(757));A$1=E_(205,205,205,153);A$0=E_(255,255,255,0);A$2=S(C(116));}
function CC(){CD.call(this);this.p2=null;}
var BbC=null;var BbD=null;var BbE=null;var BbF=null;var BbG=null;var BbH=null;var BbI=null;var BbJ=null;var BbK=null;var BbL=null;var BbM=null;var BbN=null;var BbO=null;var BbP=null;var BbQ=null;var BbR=null;function AHQ(){AHQ=Bm(CC);A6t();}
function DT(a,b,c){var d=new CC();AAA(d,a,b,c);return d;}
function A6d(a,b,c,d){var e=new CC();AF_(e,a,b,c,d);return e;}
function AMt(){AHQ();return BbR.d1();}
function AAA(a,b,c,d){AHQ();Dt(a,b,c);a.p2=J5(d,null);}
function AF_(a,b,c,d,e){AHQ();Dt(a,b,c);a.p2=J5(d,e);}
function A6t(){var b;b=new CC;AIs();AAA(b,C(353),0,A_8);BbC=b;BbD=DT(C(354),1,S(C(758)));BbE=DT(C(356),2,S(C(759)));BbF=DT(C(358),3,S(C(760)));BbG=DT(C(360),4,A_8);BbH=DT(C(361),5,S(C(761)));BbI=DT(C(363),6,S(C(406)));BbJ=DT(C(365),7,S(C(762)));BbK=DT(C(367),8,S(C(763)));BbL=A6d(C(369),9,A_8,DD(237,235,252));BbM=A6d(C(370),10,S(C(404)),S(C(764)));BbN=DT(C(371),11,S(C(406)));BbO=DT(C(373),12,S(C(407)));BbP=DT(C(375),13,S(C(765)));b=DT(C(376),14,S(C(377)));BbQ=b;BbR=I(CC,[BbC,BbD,BbE,BbF,BbG,BbH,BbI,BbJ,BbK,BbL,
BbM,BbN,BbO,BbP,b]);}
var D$=G(0);
var A$6=null;var A$7=null;var A$3=null;var A$4=null;var A$5=null;var A_9=null;var A_$=null;var A$8=null;var A$9=null;function AX5(){AX5=Bm(D$);AZL();}
function AZL(){A$6=S(C(114));A$7=S(C(766));A$3=S(C(767));A$4=S(C(768));A$5=S(C(769));A_9=S(C(114));A_$=S(C(766));A$8=E_(205,205,205,153);A$9=DD(247,248,250);}
function ID(){var a=this;C_.call(a);a.ii=null;a.h0=null;a.gE=null;a.g$=null;}
var BbS=null;var BbT=null;function AU6(a,b){var c=new ID();ALr(c,a,b);return c;}
function BbU(a,b,c){var d=new ID();L_(d,a,b,c);return d;}
function ALr(a,b,c){L_(a,b,0,c);}
function L_(a,b,c,d){Kr(a,JE(b),c);a.gE=BbS;a.g$=BbT;a.ii=b;a.h0=d;LH(a);IY(a);}
function AWl(a){return I7(a.ii);}
function R8(a,b){return Vn(a.gE,b);}
function LH(a){var b;b=new SI;b.tv=a;a.cY=b;a.jD=b;a.fi=BaW;}
function AES(a){var b;b=new AFw;b.uC=a;a.cY=b;a.jD=b;}
function AIP(){BbS=P(ID,0);BbT=P(K0,0);}
function ABc(){var a=this;B.call(a);a.jg=0;a.nD=null;a.gB=null;}
function ARW(a,b){var c,d,e,f,g;c=Bj();d=EN(b.fU);e=new J;L(e);H(H(e,C(770)),d);Bf(c,K(e));c=b.fU;d=R6(a,c.im);if(d===null)f=null;else{c=E5(c);f=Vn(d.g$,c);}if(f===null){c=new Ov;d=a.gB;ADE(c,d.bf,d.gx,d.hq);LP(c,b.fU);}else{L2(a,f);c=new Nw;g=a.gB;Ut(c,g.bf,g.gx,g.hq);Nr(c,b.fU,a.jg);Nr(c,f.fU,a.jg?0:1);}}
function AW_(a,b){var c,d,e;AES(b);c=Bj();d=I7(b.ii);e=new J;L(e);H(H(e,C(771)),d);Bf(c,K(e));c=AFp(a,b.ii);L2(a,c);if(c!==null&&(c.hO!=60086?0:1))c.cY.e();if(JF(b)>0)EW(a.nD);}
function L2(a,b){(!a.jg?a.gB.dY.dK:a.gB.dY.dI).o4=b;}
function AXh(a,b){var c;if(JF(b)>0)EW(a.nD);LH(b);c=AFp(a,b.ii);L2(a,c);if(c!==null&&Js(c))c.cY.e();}
function R6(a,b){var c,d,e;c=!a.jg?a.gB.hR:a.gB.gW;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=R8(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AFp(a,b){var c;c=R6(a,b.fQ);return c===null?null:R8(c,JE(b));}
function K0(){C_.call(this);this.fU=null;}
function APj(a){return N0(a.fU);}
function SI(){B.call(this);this.tv=null;}
function ATz(a){var b,c,d,e;b=a.tv;c=Bj();d=Ei(b);e=new J;L(e);H(H(e,C(772)),d);Bf(c,K(e));c=b.ii;e=new AB3;e.dc=b;e.l$=BO();e.mF=BO();H0(c,e);}
function ACd(){B.call(this);this.Co=null;}
function A1p(a){DZ(a.Co);}
function TX(){var a=this;B.call(a);a.sB=null;a.sA=null;}
function AOs(a,b){var c,d;b=a.sB;c=a.sA;d=AL0(b.sp.Cr.fH);b=c.yc;c=c.yd;b=b.xj;if(c.H>0)Lt(c,b);Lt(c,d);return 1;}
function RW(){var a=this;B.call(a);a.wl=null;a.wm=null;a.wn=0;}
function AOl(a){var b,c,d,e;b=a.wl;c=a.wm;d=a.wn;c=EN(c);if(!d)b.nY=c;else b.xN=c;e=b.xN;if(e!==null&&b.nY!==null)CX(b.hS,c);else{if(e!==null)CX(b.hS,e);c=b.nY;if(c!==null)CX(b.hS,c);}}
function AB3(){var a=this;B.call(a);a.l$=null;a.mF=null;a.dc=null;}
function A5a(a,b){var c,d;c=new ID;d=a.dc;L_(c,b,d.ke+1|0,d.h0);BA(a.l$,c);}
function AVX(a,b){var c,d;c=E5(b);d=new K0;Kr(d,c,a.dc.ke+1|0);d.fU=b;a.dc.h0.se(d,c);d.o6=AMG(a.dc.h0,d);BA(a.mF,d);}
function A5x(a){var b,c,d,e,f,g,h;if(!(EP(a.l$)&&EP(a.mF))){a.dc.gE=GF(a.l$,BbS);a.dc.g$=GF(a.mF,BbT);Lp(a.dc.gE,BaX);Lp(a.dc.g$,BaX);b=a.dc;c=b.gE;d=c.data;e=b.g$;f=e.data;g=d.length;h=f.length;d=P(C_,g+h|0);Da(c,0,d,0,g);Da(e,0,d,g,h);a.dc.fi=d;}Ie(a.dc);b=a.dc;b.h0.yp(b);}
var AJ7=G();
function St(){var a=this;B.call(a);a.vi=null;a.vj=null;}
function A5X(a){a.vi.AF(a.vj);}
function AFw(){B.call(this);this.uC=null;}
function A1o(a){var b;b=a.uC;IY(b);b.h0.vQ(b);b.gE=BbS;b.g$=BbT;}
function Re(){var a=this;B.call(a);a.v3=null;a.v4=null;}
function A0B(a,b){var c,d,e;c=a.v3;d=a.v4;LU(c.fL,d);b=AJ_(b);e=AP8(b.kG,ADk(d));D2(c.iQ,d,e);if(BR(c.x6,d))RC(c,e);}
function Rf(){var a=this;B.call(a);a.tG=null;a.tF=null;}
function A6D(a,b){var c,d,e;c=a.tG;d=a.tF;LU(c.fL,d);c=D0();e=new J;L(e);H(H(H(H(e,C(773)),d),C(29)),b);Bf(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",11,"menu",10,"parser",16,"common",17,"tree",17,"graph",19,"node",20,"ref",20,"decl",10,"ui",23,"window",23,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bP",A9P(ASD),"J",A9O(AGd)],SG,0,B,[],0,3,0,0,0,XI,0,B,[],3,3,0,0,0,Xi,0,B,[],3,3,0,0,0,AD9,0,B,[XI,Xi],0,3,0,0,0,AKn,0,B,[],4,0,0,0,0,AKb,0,B,[],4,3,0,0,0,Hh,0,B,[],0,3,0,0,0,EH,0,Hh,[],0,3,0,0,0,Bt,0,EH,[],0,3,0,0,0,ALc,0,Bt,[],0,3,0,0,0,C1,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,KG,0,B,[],3,3,0,0,0,BC,"String",3,B,[C1,CG,KG],0,3,[0,0,0],Fp,["J",A9O(AOO),"bP",A9P(Bk),"qz",A9O(Kj),"mO",A9P(AQo)],FK,0,Hh,[],0,3,0,0,0,IC,0,FK,[],0,3,0,0,0,AKR,0,IC,[],0,3,0,0,0,DG,0,B,[C1],1,3,0,0,
0,HX,0,DG,[CG],0,3,0,0,["J",A9O(AWg),"bP",A9P(A6h),"mO",A9P(A1D)],Hb,0,B,[C1,KG],0,0,0,0,["kp",A9P(Nn),"J",A9O(K)],J4,0,B,[],3,3,0,0,0,J,0,Hb,[J4],0,3,0,0,["qn",A9S(A1z),"pN",A9R(APF),"J",A9O(Em),"kp",A9P(ART),"qF",A9Q(A1U)],Ff,0,IC,[],0,3,0,0,0,ALX,0,Ff,[],0,3,0,0,0,AKM,0,Ff,[],0,3,0,0,0,ACt,0,B,[],3,3,0,0,0,Ds,0,B,[],3,3,0,0,0,Y9,0,B,[],3,0,0,0,0,Ky,0,B,[ACt,Ds,Y9],1,3,0,0,["bV",A9O(EK)],AAU,0,Ky,[],0,3,0,0,0,AJP,0,B,[],0,3,0,0,0,AMA,0,B,[],4,3,0,0,0,BW,0,B,[],3,3,0,0,0,Ch,0,B,[BW],3,3,0,0,0,ACD,0,B,[Ch],
0,3,0,0,["bl",A9P(A6z)],AHS,0,B,[],0,3,0,0,0,ALp,0,B,[BW],1,3,0,0,0,AFV,0,B,[],3,3,0,0,0,AMn,0,B,[],3,3,0,0,0,AIn,0,B,[],3,3,0,0,0,Mr,"FontConfigJs",26,B,[],0,3,[0,0,0],0,0,AGn,0,B,[BW],1,3,0,0,0,ACE,0,B,[Ch],0,3,0,0,["bl",A9P(ANe)],ACC,0,B,[Ch],0,3,0,0,["bl",A9P(A5j)],L6,0,B,[],4,3,0,0,0,AIl,0,B,[],4,3,0,0,0,AKF,0,B,[],0,3,0,0,0,ANb,0,B,[],4,3,0,0,0,XJ,0,B,[Ch],0,3,0,0,["bl",A9P(A2R)]]);
$rt_metadata([AIz,0,B,[BW],1,3,0,0,0,AJ2,0,B,[],0,3,0,0,0,ADN,0,B,[BW],3,3,0,0,0,ALe,0,B,[ADN],1,3,0,0,["MU",A9P(A0K),"Ty",A9O(ASz)],AHd,0,B,[BW],1,3,0,0,0,Gx,0,B,[],3,3,0,0,0,TB,0,B,[Gx],0,3,0,0,0,BJ,0,Bt,[],0,3,0,0,0,ALF,0,B,[],4,3,0,0,0,Gh,0,Bt,[],0,3,0,0,0,Jz,0,Bt,[],0,3,0,0,0,Dp,0,B,[CG],0,3,0,0,0,Xd,0,B,[BW],3,3,0,0,0,ABv,0,B,[Xd],3,3,0,0,0,Fa,0,B,[BW],3,3,0,0,0,AJS,0,B,[BW,ABv,Fa],1,3,0,0,["Ly",A9O(A2w),"L9",A9P(A4L),"Uo",A9P(A4w),"PA",A9P(AZr),"SQ",A9P(ANz),"N_",A9O(APy),"Tw",A9Q(A4H),"Mq",A9R(ARF),
"M3",A9O(AYq),"Nk",A9O(A3i),"RY",A9P(A5e),"Qf",A9O(ASU),"UJ",A9P(ARi),"Kb",A9O(ATe),"QU",A9O(AXd),"UD",A9O(AR7),"Hv",A9P(AOd),"Mv",A9O(A6k),"Si",A9Q(A1b),"P4",A9Q(ASN),"To",A9Q(AWq),"S5",A9O(AXG),"TQ",A9O(AQ4),"M8",A9P(API),"RG",A9P(AQy),"Pu",A9Q(A1k),"JQ",A9O(ASf),"MT",A9P(AYt),"Om",A9O(AQx),"Ns",A9O(AUk),"Ph",A9P(ANl),"Ka",A9P(AVN),"Uy",A9P(AYP),"Jn",A9O(A4$),"PU",A9Q(AYW),"Tk",A9P(A3v),"JF",A9O(AUO),"OG",A9Q(ATE),"H0",A9Q(ATm),"QE",A9O(AVG),"M9",A9P(AWP),"I4",A9R(A2G),"In",A9O(APD),"I8",A9Q(AZc),"P$",A9O(AX6),
"LR",A9O(A6e),"RV",A9O(ATC),"GR",A9O(AX4),"Lq",A9Q(ATF),"On",A9P(AZA),"RD",A9P(AQI),"Ig",A9O(A38)],P7,0,B,[Ch],0,3,0,0,["bl",A9P(AUf)],AK1,0,B,[],4,3,0,0,0,Zm,0,B,[Fa],3,3,0,0,0,Sy,0,B,[Fa],3,3,0,0,0,AAI,0,B,[Fa],3,3,0,0,0,T2,0,B,[Fa],3,3,0,0,0,AEW,0,B,[Fa],3,3,0,0,0,ADf,0,B,[Fa,Zm,Sy,AAI,T2,AEW],3,3,0,0,0,AKl,0,B,[BW,ADf],1,3,0,0,["Sx",A9Q(A2Y),"TW",A9Q(A1B),"Ip",A9R(AQ6),"PZ",A9P(AOu),"K0",A9R(AZR)],BX,0,Bt,[],0,3,0,0,0,AFx,0,Bt,[],0,3,0,0,0,Ix,0,BJ,[],0,3,0,0,0,AKz,0,B,[],0,3,0,0,0,AAf,0,B,[],3,3,0,0,0,Y0,
0,B,[AAf],3,3,0,0,0,ABD,0,B,[Y0],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,ALm,0,B,[BD],0,3,0,0,0,T,0,B,[],3,3,0,0,0,ALn,0,B,[T],0,3,0,0,0,AAN,0,B,[BW],3,3,0,0,0,Vj,0,B,[AAN],0,3,0,0,["Kd",A9P(A1a)],Vh,0,B,[T],0,3,0,0,0,Z7,0,B,[BW],3,3,0,0,0,Vi,0,B,[Z7],0,3,0,0,["CQ",A9Q(APT)],AIJ,0,B,[BW],1,3,0,0,0,CE,0,B,[BW],3,3,0,0,0,Vg,0,B,[CE],0,3,0,0,["cH",A9P(AUj)],ABm,0,B,[],0,3,0,0,0,VU,0,B,[],3,3,0,0,["fu",A9P(AXn)],HO,0,B,[VU],3,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],FN,0,B,[HO],1,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q),"eQ",A9O(EP),
"ru",A9P(A4k)],N6,0,B,[HO],3,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],M8,0,B,[N6],3,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)]]);
$rt_metadata([EA,0,FN,[M8],1,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q),"qg",A9P(AUz),"ce",A9O(B9),"vo",A9Q(ATU),"oY",A9Q(A44),"mG",A9P(A3u),"bP",A9P(AS7)],MG,0,EA,[],1,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],Ph,0,B,[HO],3,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],AFg,0,B,[Ph,N6],3,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],Uy,0,MG,[AFg],0,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],LT,0,B,[],3,3,0,0,0,En,0,B,[LT],1,3,0,0,0,Ed,0,B,[],3,3,0,0,0,WB,0,B,[LT],3,3,0,0,0,PG,0,B,[WB],3,3,0,0,0,Zc,0,En,[Ed,C1,PG],0,3,0,0,0,ABo,0,B,[BD],0,3,0,0,0,ABp,
0,B,[Ch],0,3,0,0,["bl",A9P(AXF)],AGu,0,B,[],0,3,0,0,0,Oj,0,B,[],1,3,0,0,0,U_,0,Oj,[],0,3,0,0,0,Cz,0,B,[Ds],1,3,0,0,["cF",A9P(A6f)],ZJ,0,B,[],0,3,0,0,0,AEb,0,B,[CE],0,3,0,0,["cH",A9P(A3b)],AEc,0,B,[CE],0,3,0,0,["cH",A9P(A3o)],AEd,0,B,[CE],0,3,0,0,["cH",A9P(ASS)],AEe,0,B,[CE],0,3,0,0,["cH",A9P(A1S)],AEf,0,B,[CE],0,3,0,0,["cH",A9P(A16)],AEg,0,B,[CE],0,3,0,0,["cH",A9P(AUq)],AEh,0,B,[CE],0,3,0,0,["cH",A9P(AQ5)],AEi,0,B,[CE],0,3,0,0,["cH",A9P(A6L)],AEj,0,B,[CE],0,3,0,0,["cH",A9P(AQu)],AEk,0,B,[CE],0,3,0,0,["cH",A9P(AVc)],WR,
0,B,[CE],0,3,0,0,["cH",A9P(A6g)],WS,0,B,[CE],0,3,0,0,["cH",A9P(ASx)],WT,0,B,[CE],0,3,0,0,["cH",A9P(ASW)],WU,0,B,[CE],0,3,0,0,["cH",A9P(A3x)],ACZ,0,B,[],3,3,0,0,0,AC9,0,B,[ACZ],0,3,0,0,0,AC8,0,B,[CE],0,3,0,0,["cH",A9P(ARK)],Pf,0,B,[],0,3,0,0,0,KV,0,B,[Gx],0,3,0,0,["qM",A9Q(Nk)],AIX,0,B,[],0,3,0,0,0,Cm,0,B,[],3,3,0,0,0,CH,0,B,[],3,3,0,0,["bZ",A9P(A1v),"cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K)],EV,0,B,[],3,3,0,0,0,DQ,0,B,[],3,3,0,0,0,CQ,0,B,[DQ],3,3,0,0,0,FL,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,F9,0,B,[CL],3,3,
0,0,0,RY,0,B,[Ds],0,3,0,0,0,Bh,"V2i",29,B,[],0,3,[0,0,0],0,["J",A9O(AJw),"bP",A9P(ARA)],AEp,0,B,[],0,3,0,0,0,AIp,0,B,[],0,3,0,0,0]);
$rt_metadata([AJ$,0,B,[],3,3,0,0,0,Z5,0,B,[],0,3,0,0,0,Oy,0,B,[],0,3,0,0,0,Dk,0,Oy,[],0,3,0,0,0,AMy,0,Dk,[],0,3,0,0,0,FE,0,Dk,[],0,3,0,0,0,AAt,0,Dk,[],0,3,0,0,0,AHg,0,FE,[],0,3,0,0,0,HI,0,FE,[],0,3,0,0,0,Qc,0,HI,[],0,3,0,0,0,AJd,0,HI,[],0,3,0,0,0,AKm,0,FE,[],0,3,0,0,0,ALZ,0,Dk,[],0,3,0,0,0,AF9,0,Dk,[],0,3,0,0,0,AA6,0,B,[BW],3,3,0,0,0,AM_,0,B,[AA6],3,3,0,0,0,Z4,0,B,[Ds],0,3,0,0,0,RP,0,B,[],0,3,0,0,0,CD,0,B,[CG,C1],1,3,0,0,0,Hr,0,CD,[],12,3,0,HQ,0,MQ,0,B,[],3,3,0,0,0,TU,0,B,[MQ],3,3,0,0,0,ADd,0,B,[],3,3,0,0,0,Hd,
0,B,[TU,ADd],1,3,0,0,0,Nh,0,Hd,[],0,3,0,0,0,AGW,0,Nh,[],0,3,0,0,0,HW,0,Hd,[],1,3,0,0,0,L5,0,HW,[],0,3,0,0,["nf",A9R(ARD)],Ep,0,CD,[],12,3,0,AMT,0,M_,0,B,[CG],1,3,0,0,0,MT,0,M_,[],0,3,0,AGP,0,Zg,0,B,[],0,3,0,0,0,Ik,0,CD,[],12,0,0,AHB,0,N8,0,HW,[],0,3,0,0,["nf",A9R(AQa)],AIk,0,BX,[],0,3,0,0,0,Vk,0,EH,[],0,3,0,0,0,MS,0,B,[BW],3,3,0,0,0,AFc,0,B,[MS],0,3,0,0,["bl",A9P(AUV)],AFd,0,B,[MS],0,3,0,0,["bl",A9P(AOH)],It,0,B,[],1,3,0,0,0,ABi,0,B,[],3,3,0,0,0,LY,0,It,[CG,J4,KG,ABi],1,3,0,0,0,Nz,0,It,[CG],1,3,0,0,0,I1,0,B,
[],0,3,0,HC,0,PK,0,Cz,[],0,3,0,0,["bR",A9O(ASq),"cl",A9Q(ARh)],H5,0,Cz,[],1,3,0,0,["cl",A9Q(AHr)],Cq,0,H5,[],1,3,0,0,["bR",A9O(AP6),"cl",A9Q(IV),"cF",A9P(Qw)],Fn,0,B,[],3,3,0,0,0,JZ,0,B,[],3,3,0,0,0,EY,0,B,[],3,3,0,0,0]);
$rt_metadata([Lf,"Diff0",11,Cq,[CH,Fn,JZ,EY,EV,FL,F9],0,3,[0,0,0],0,["f7",A9Q(A5P),"cF",A9P(AUE),"bR",A9O(A13),"ht",A9O(A04),"qO",A9O(AU4),"oX",A9O(A1X),"op",A9P(AVL),"k0",A9P(A2U),"gg",A9P(APn),"cl",A9Q(ARV),"d6",A9P(AN1),"bZ",A9P(A3f),"cM",A9R(A08),"cw",A9Q(ASR),"dN",A9Q(A3M),"dL",A9R(AUb),"b8",A9O(A1y)],AIu,"DiffDemoJs",11,Lf,[],0,3,[0,0,0],0,["ht",A9O(AS2)],AIV,0,B,[],0,3,0,0,0,ALg,0,B,[BW],1,3,0,0,0,Lm,0,LY,[],1,0,0,0,0,AG_,0,Lm,[],0,0,0,0,0,LQ,0,B,[],1,3,0,0,0,OD,0,B,[],0,3,0,0,0,AF0,0,B,[],0,3,0,0,0,Jn,
0,B,[BW],3,3,0,0,0,XR,0,B,[Jn],0,3,0,0,["bl",A9P(AQg)],XQ,0,B,[Jn],0,3,0,0,["bl",A9P(ATy)],XO,0,B,[Ch],0,3,0,0,["bl",A9P(AT2)],XN,0,B,[Ch],0,3,0,0,["bl",A9P(AZd)],W,0,B,[],3,3,0,0,0,Ud,0,B,[W],0,3,0,0,["g",A9P(A6l)],Uf,0,B,[W],0,3,0,0,["g",A9P(A1C)],Vz,0,B,[BD],0,3,0,0,["Z",A9P(AV1)],Vy,0,B,[BD],0,3,0,0,["Z",A9P(ANJ)],Vv,0,B,[BD],0,3,0,0,["Z",A9P(AZU)],Vu,0,B,[BD],0,3,0,0,["Z",A9P(A2S)],Vx,0,B,[BD],0,3,0,0,["Z",A9P(AP0)],Vw,0,B,[BD],0,3,0,0,["Z",A9P(AXk)],VC,0,B,[BD],0,3,0,0,["Z",A9P(APE)],VB,0,B,[BD],0,3,0,
0,["Z",A9P(ASi)],VE,0,B,[BD],0,3,0,0,["Z",A9P(A4m)],VD,0,B,[BD],0,3,0,0,["Z",A9P(ANp)],AB8,0,B,[BD],0,3,0,0,["Z",A9P(AND)],AB7,0,B,[BD],0,3,0,0,["Z",A9P(A1I)],AB6,0,B,[BD],0,3,0,0,["Z",A9P(ATh)],ABT,0,B,[BD],0,3,0,0,["Z",A9P(AQk)],ABS,0,B,[BD],0,3,0,0,["Z",A9P(AXz)],ABQ,0,B,[BD],0,3,0,0,["Z",A9P(A5r)],ABP,0,B,[BD],0,3,0,0,["Z",A9P(ASs)],ABO,0,B,[BD],0,3,0,0,["Z",A9P(A4o)],ABN,0,B,[BD],0,3,0,0,["Z",A9P(ANh)],ABM,0,B,[BD],0,3,0,0,["Z",A9P(A4b)],ABX,0,B,[BD],0,3,0,0,["Z",A9P(A3r)],ABW,0,B,[BD],0,3,0,0,["Z",A9P(AO_)],ABV,
0,B,[BD],0,3,0,0,["Z",A9P(A0O)],ABU,0,B,[BD],0,3,0,0,["Z",A9P(ARc)],AB1,0,B,[BD],0,3,0,0,["Z",A9P(ARd)],AB0,0,B,[BD],0,3,0,0,["Z",A9P(AYg)],ABZ,0,B,[BD],0,3,0,0,["Z",A9P(APo)],ABY,0,B,[BD],0,3,0,0,["Z",A9P(A3p)],AEv,0,B,[],0,0,0,0,0,Iw,0,B,[],0,3,0,0,0,QW,0,Iw,[],0,3,0,0,0,AIv,0,B,[],0,3,0,0,0,Pd,0,Iw,[],0,3,0,0,0]);
$rt_metadata([Um,0,B,[BW],3,3,0,0,0,P0,0,B,[Um],0,3,0,0,["Nd",A9P(A1J)],ADj,0,B,[W],0,3,0,0,["g",A9P(AD7)],AEC,0,Nz,[],0,0,0,0,0,CF,0,B,[Ds],0,3,0,0,["bV",A9O(AUF),"h_",A9O(A2I),"dM",A9R(J9),"dJ",A9P(AMQ),"cF",A9P(AY5),"sb",A9P(ASl),"pu",A9P(AWy),"lV",A9Q(A31),"kB",A9O(AWF),"cM",A9R(AQ$),"cw",A9Q(AOP),"dN",A9Q(AS6),"bZ",A9P(AWi),"dL",A9R(A3R)],AGG,0,CF,[],0,3,0,0,["dJ",A9P(AH3)],AHe,0,B,[],0,3,0,0,0,F$,0,B,[],3,3,0,0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf)],RH,0,B,[],3,0,0,0,0,MP,0,B,[F$],3,
3,0,0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf)],AGM,"EditorComponent",11,CF,[F$,CH,JZ,RH,MP],0,3,[0,0,0],0,["dM",A9R(MR),"lV",A9Q(ATK),"pZ",A9Q(A6m),"vw",A9O(A0d),"xn",A9O(AX9),"qO",A9O(JP),"oX",A9O(KQ),"op",A9P(IQ),"k0",A9P(AUs),"kB",A9O(Mj),"bV",A9O(AYy),"cF",A9P(LZ),"qN",A9P(AKU),"h_",A9O(AIE),"p6",A9O(AVr),"dJ",A9P(A2a),"lE",A9O(UG),"kT",A9O(UF),"hW",A9P(AT9),"lg",A9O(ATX),"mh",A9O(AXc),"dL",A9R(Md),"dN",A9Q(TT),"cw",A9Q(Xo),"cM",A9R(Py),"bZ",A9P(Yw),"iL",A9P(A5Y),"f7",A9Q(Jt),"Av",A9O(AWn),
"J",A9O(AZH)],AJH,0,B,[],0,3,0,0,0,UP,0,B,[W],0,3,0,0,["g",A9P(AOa)],UQ,0,B,[W],0,3,0,0,["g",A9P(A4W)],UR,"Diff0$<init>$lambda$_0_2",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(ANf)],GJ,"CtrlO",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AQw)],UN,0,B,[W],0,3,0,0,["g",A9P(AST)],UO,"Diff0$<init>$lambda$_0_4",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(A5s)],CM,0,B,[],3,3,0,0,0,AEQ,"WindowManager",24,B,[CH,CM],0,3,[0,0,0],0,["bZ",A9P(AXL),"cM",A9R(AOX),"cw",A9Q(AQ_),"dN",A9Q(A5R),"eL",A9Q(A1t)],Us,"UiContext",23,B,[FL,F9],0,3,[0,0,0],0,["f7",
A9Q(A4O),"b8",A9O(A2J)],Xf,"WindowScene$<init>$lambda$_1_0",11,B,[EV],0,3,[0,0,0],0,["dL",A9R(A5L)],Xe,"WindowScene$<init>$lambda$_1_1",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AOZ)],AGy,0,B,[],0,3,0,0,0,AFa,0,B,[],0,3,0,0,0,AE2,0,B,[],0,3,0,0,0,FF,0,B,[Ds],0,3,0,0,0,AI$,0,B,[],0,3,0,0,0,AGx,0,B,[Ds],0,3,0,0,0,Yr,0,B,[W],0,3,0,0,0,Yq,0,B,[W],0,3,0,0,["g",A9P(AOp)],Yp,0,B,[W],0,3,0,0,["g",A9P(ANF)],ALV,0,B,[],0,3,0,0,0,Yo,0,B,[T],0,3,0,0,["e",A9O(AXP)],Yv,0,B,[T],0,3,0,0,["e",A9O(A0k)],Yu,0,B,[T],0,3,0,0,["e",A9O(A63)],Yt,
0,B,[T],0,3,0,0,["e",A9O(ASa)],Ys,0,B,[T],0,3,0,0,["e",A9O(AT3)],Yn,0,B,[T],0,3,0,0,["e",A9O(A6o)],VM,0,B,[T],0,3,0,0,["e",A9O(ASd)],VN,0,B,[T],0,3,0,0,["e",A9O(A3l)],AHM,0,B,[BW],1,3,0,0,0,NU,0,B,[],4,3,0,A1j,0,AF7,0,B,[],3,3,0,0,0,AA8,"Scene1$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(A6p)],AA7,"Scene1$<init>$lambda$_0_1",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AWp)],UE,"Window",24,B,[],0,3,[0,0,0],0,0,KH,0,B,[],0,3,0,0,0,Fz,0,B,[],0,3,0,0,0,NS,0,Fz,[],0,3,0,0,0]);
$rt_metadata([AB4,0,Fz,[],0,3,0,0,0,ZR,0,Fz,[],0,3,0,0,0,Gr,0,B,[],3,3,0,0,0,Tk,0,B,[],3,3,0,0,0,B4,"V4f",29,B,[],0,3,[0,0,0],0,["bP",A9P(AW4),"J",A9O(AOY)],Jp,0,B,[],3,3,0,0,0,AJ3,0,EA,[Ed,C1,Jp],0,3,0,0,["qd",A9P(A1q),"i5",A9P(BI),"c1",A9O(A22),"qg",A9P(BA),"oY",A9Q(AK$),"mG",A9P(EZ),"ru",A9P(AIx),"jE",A9O(IO),"vo",A9Q(AKe),"fu",A9P(FG),"J",A9O(AL0)],LX,0,B,[],0,3,0,0,0,IL,"GL$Texture",10,B,[Ds],0,3,[AJ$,0,"Texture"],0,["bV",A9O(AHU)],ZH,0,B,[],3,0,0,0,0,Pa,0,B,[],3,3,0,0,0,Z0,"UiContext$<init>$lambda$_0_0",
23,B,[T],0,3,[0,0,0],0,["e",A9O(A0V)],ZZ,"UiContext$<init>$lambda$_0_1",23,B,[T],0,3,[0,0,0],0,["e",A9O(AXy)],AMH,0,B,[],0,3,0,0,0,Uq,0,B,[],0,3,0,0,0,Hi,0,B,[],1,3,0,0,0,AAS,0,Hi,[],0,3,0,0,["u$",A9P(Cg)],Mz,0,B,[],3,3,0,0,0,Uv,0,B,[Mz],3,3,0,0,0,LW,"JsFileHandle",27,B,[Uv],0,3,[0,0,0],0,["t",A9O(E5),"ud",A9O(AN2),"J",A9O(N0)],YW,0,B,[Mz],3,3,0,0,0,Oz,"JsDirectoryHandle",27,B,[YW],0,0,[0,0,0],0,["t",A9O(JE),"ud",A9O(A5M),"J",A9O(I7)],AD2,0,B,[],3,3,0,0,0,ALx,"JsArrayView",27,B,[AD2],0,3,[0,0,0],0,["J",A9O(AZu)],AA1,
0,B,[Pa],0,3,0,0,0,Hy,0,B,[CG],0,3,0,0,0,Oe,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DN,"CodeLine",11,B,[],0,3,[0,0,0],0,["J",A9O(A3g)],Zp,0,B,[],0,3,0,0,0,LI,0,En,[Ed,C1],0,3,0,0,0,VK,0,B,[Ch],0,3,0,0,["bl",A9P(A1s)],CA,"CodeElement",11,B,[],0,3,[0,0,0],0,["J",A9O(AGT)],Ob,0,LI,[],0,3,0,0,0,AAY,0,B,[],0,3,0,0,0,AM1,"Interval",16,B,[CG],0,3,[0,0,0],0,["bP",A9P(AVf),"J",A9O(AJQ),"mO",A9P(AY4)],VZ,0,B,[Gx],0,3,0,0,["qM",A9Q(ASg)],AAs,"IntervalNode",18,B,[],0,3,[0,0,0],0,["J",A9O(ANZ),"bP",A9P(AOL)],JJ,0,B,
[],3,3,0,0,0,Hg,0,B,[JJ,Ed],0,0,0,0,["bP",A9P(AZw),"J",A9O(APq)],Ia,"HashMap$HashEntry",1,Hg,[],0,0,[LI,0,0],0,0,N$,0,LQ,[],1,3,0,0,0,Rd,0,N$,[],0,3,0,0,0,Jq,0,EH,[],0,3,0,0,0,Pq,0,B,[Jn],0,3,0,0,["bl",A9P(AWT)],Ps,0,B,[Ch],0,3,0,0,["bl",A9P(AWe)],Pr,0,B,[Ch],0,3,0,0,["bl",A9P(AYj)],Jf,0,B,[],0,3,0,0,0,KS,0,Cq,[Fn,EY],0,3,0,0,["gg",A9P(A02),"cF",A9P(A4S),"bR",A9O(AQU),"ht",A9O(A6c),"cl",A9Q(ANo),"d6",A9P(AZS)],AJK,0,Cz,[],0,3,0,0,["cF",A9P(ANL),"bR",A9O(APH),"cl",A9Q(ARZ)],ACq,0,Cz,[],0,3,0,0,["cF",A9P(ATv),
"bR",A9O(AYU),"cl",A9Q(A0c)]]);
$rt_metadata([Yz,"ToolbarDemo",15,Cq,[CH,CM],0,3,[0,0,0],0,["cw",A9Q(AV3),"dN",A9Q(ANX),"eL",A9Q(ARs),"cl",A9Q(AQh),"bR",A9O(AZN),"bZ",A9P(AR1),"cM",A9R(AOq)],ABR,"FindUsagesDemo",15,Cq,[CM],0,3,[0,0,0],0,["eL",A9Q(APw),"cl",A9Q(AOF)],XW,"RegionTextureAllocatorDemo",11,H5,[CH],0,3,[0,0,0],0,["bZ",A9P(A1v),"cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"bR",A9O(A4l),"cF",A9P(ANE)],TA,0,Cz,[],0,3,0,0,["bR",A9O(ANm),"cl",A9Q(AXt)],Dw,0,Cz,[],0,3,0,0,["bR",A9O(ABh),"cl",A9Q(Tv)],RS,"SelectFileTest",11,Dw,[],0,3,0,0,
0,Yf,0,Cq,[],0,3,0,0,0,Xy,"RenderTexture",11,Dw,[],0,3,0,0,["cF",A9P(AQ9),"bR",A9O(AZB),"cl",A9Q(A58)],Ty,"ScissorDemo",11,Dw,[],0,3,0,0,["bR",A9O(A6O),"cl",A9Q(AQQ)],ABC,0,Cz,[],0,3,0,0,["bR",A9O(AWh),"cl",A9Q(AZP),"cF",A9P(A33)],KK,"ClipboardTest",11,Dw,[CH],0,3,[0,0,0],0,["bZ",A9P(A1v),"cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(ARP)],Th,"CodiconDemo",11,Dw,[],0,3,0,0,["bR",A9O(AW3)],Hn,0,Cz,[CH],1,3,0,0,["bZ",A9P(A1v),"cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"bR",A9O(AGE)],Uc,"LineShaderDemo1",11,Hn,[],0,3,[0,0,0],
0,["cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"cl",A9Q(A3O),"bZ",A9P(A4P)],Ub,"LineShaderDemo2",11,Hn,[],0,3,[0,0,0],0,["cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"bZ",A9P(A6q),"bR",A9O(APs),"cl",A9Q(AN9)],W4,"WindowsDemo",13,Cq,[CM],0,3,[0,0,0],0,["eL",A9Q(ARr)],Ey,"WindowDemo",23,Cq,[CM],0,3,[0,0,0],0,["jN",A9O(AZj),"p1",A9O(AR9),"og",A9P(AKh),"eL",A9Q(A4v)],Q5,"EditorInViewDemo",11,Ey,[CM,Fn,EY],0,3,[0,0,0],0,["jN",A9O(AOJ),"p1",A9O(AXU),"og",A9P(A6s),"d6",A9P(AU8),"gg",A9P(AUn)],X1,"UiContext$1",23,B,[CH],
0,0,[Us,0,0],0,["cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"bZ",A9P(A4i)],AAz,"FolderTransferDemo",28,Ey,[CM],0,3,[0,0,0],0,["jN",A9O(AQV)],Sx,"ProjectViewDemo",11,Cq,[CM],0,3,[0,0,0],0,["eL",A9Q(AZQ)],ADO,"SinDemo",11,Cz,[CH],0,3,[0,0,0],0,["bZ",A9P(A1v),"cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"cl",A9Q(A6j),"bR",A9O(A0U),"cF",A9P(AUS)],Pj,0,KS,[],0,3,0,0,["ht",A9O(AYX)],Qb,"DiffMiddleDemo",28,Ey,[CM],0,3,[0,0,0],0,["jN",A9O(AZ9)],UJ,"FolderDiff",28,Cq,[CM],0,3,[0,0,0],0,["eL",A9Q(AWL)],ZP,"FileViewDemo",23,
Ey,[CM],0,3,[0,0,0],0,["jN",A9O(A2z),"og",A9P(A3X)],RT,"EditorWindowDemo",11,Cq,[CM],0,3,[0,0,0],0,["eL",A9Q(A0x)],Kx,0,B,[],0,3,0,0,0,AG8,0,B,[],0,3,0,0,0,AF6,0,B,[],3,3,0,0,0,AJE,0,B,[],0,3,0,0,0,AHz,0,B,[],3,3,0,0,0,AJk,0,B,[],0,3,0,0,0,M0,0,B,[JJ,C1],0,3,0,0,0,K5,0,M0,[],0,0,0,0,0,AMR,0,B,[],0,3,0,0,0,Zw,"Editor0$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(A6W)],Zu,0,B,[W],0,3,0,0,["g",A9P(A0n)],Zv,"Editor0$<init>$lambda$_0_2",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AVu)],AJf,"TextRect",11,KH,[],0,3,
[0,0,0],0,0,UK,"DemoScene1$MyInputListener",11,B,[CH],0,0,[AJK,0,"MyInputListener"],0,["bZ",A9P(AYV),"cM",A9R(ANy),"cw",A9Q(AYO),"dN",A9Q(AYb)],ZX,"DemoScene1$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(A0H)],ZW,"DemoScene1$<init>$lambda$_0_1",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(ATf)],ZV,"DemoScene1$<init>$lambda$_0_2",11,B,[FL],0,3,[0,0,0],0,["f7",A9Q(A1A)],ZU,"DemoScene1$<init>$lambda$_0_3",11,B,[T],0,3,[0,0,0],0,["e",A9O(AXJ)],ZT,"DemoScene1$<init>$lambda$_0_4",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(ATD)],ZS,
"DemoScene1$<init>$lambda$_0_5",11,B,[EV],0,3,[0,0,0],0,["dL",A9R(A5f)],HD,0,B4,[],0,3,0,0,0,AIa,0,B,[],3,3,0,0,0,Xw,"CleartypeColors$MyInputListener",11,B,[CH],0,0,[ACq,0,"MyInputListener"],0,["bZ",A9P(A1v),"cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(AP4)]]);
$rt_metadata([Xs,0,B,[],0,3,0,0,0,AHA,"Toolbar",23,B,[],0,3,[0,0,0],0,0,AKy,0,B,[],0,3,0,0,["bP",A9P(A4s)],ACS,"ToolbarDemo$<init>$lambda$_0_0",15,B,[Cm],0,3,[0,0,0],0,["b_",A9P(ANq)],ACO,"ToolbarDemo$<init>$lambda$_0_1",15,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AVb)],ACP,0,B,[T],0,3,0,0,["e",A9O(A6U)],ACQ,0,B,[T],0,3,0,0,["e",A9O(AOi)],By,"ToolbarItem",23,B,[],0,3,[0,0,0],0,0,Vo,"FindUsagesDemo$<init>$lambda$_0_0",15,B,[Cm],0,3,[0,0,0],0,["b_",A9P(ASw)],Vp,"FindUsagesDemo$<init>$lambda$_0_1",15,B,[CQ],0,3,[0,0,0],
0,["bM",A9P(ANY)],AIW,0,B,[],0,3,0,0,0,PA,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",11,B,[CM],0,3,[0,0,0],0,["eL",A9Q(ATl)],Pz,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(A05)],AAO,0,B,[],3,3,0,0,0,AJL,0,B,[AAO],0,3,0,0,0,XH,"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CH],0,0,[TA,0,"LineNumbersInputListener"],0,["cM",A9R(A3K),"cw",A9Q(AXW),"dN",A9Q(ANT),"bZ",A9P(AZ2)],AA9,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[EV],0,3,[0,0,0],0,["dL",
A9R(ATj)],Rm,"SelectFileTest$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AYo)],Sh,"WorkerTest$<init>$lambda$_0_0",14,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AW5)],Sg,0,B,[W],0,3,0,0,["g",A9P(A37)],AC2,"RenderTexture$MyInputListener",11,B,[CH],0,0,[Xy,0,"MyInputListener"],0,["dN",A9Q(ANX),"cM",A9R(A3K),"bZ",A9P(A3e),"cw",A9Q(AWS)],AHI,0,B,[],0,3,0,0,0,Dl,0,B,[],3,3,0,FW,0,Zx,"TextureRegionTestScene$MListener",11,B,[CH],0,0,[ABC,0,"MListener"],0,["cM",A9R(A3K),"cw",A9Q(ARl),"dN",A9Q(AX$),"bZ",A9P(AP9)],WW,"TextureRegionTestScene$<init>$lambda$_0_0",
11,B,[EV],0,3,[0,0,0],0,["dL",A9R(A5c)],AEz,"ClipboardTest$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AVn)],AEy,"ClipboardTest$<init>$lambda$_0_1",11,B,[FL],0,3,[0,0,0],0,["f7",A9Q(A1H)],AEx,"ClipboardTest$<init>$lambda$_0_2",11,B,[FL],0,3,[0,0,0],0,["f7",A9Q(APr)],AEw,"ClipboardTest$<init>$lambda$_0_3",11,B,[F9],0,3,[0,0,0],0,["b8",A9O(ASy)],AEA,"ClipboardTest$<init>$lambda$_0_4",11,B,[F9],0,3,[0,0,0],0,["b8",A9O(A4J)],SY,"CodiconDemo$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AWb)],P1,
"WindowsDemo$<init>$lambda$_0_0",13,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AYF)],P3,"WindowsDemo$<init>$lambda$_0_1",13,B,[CQ],0,3,[0,0,0],0,["bM",A9P(A0P)],P4,0,B,[W],0,3,0,0,["g",A9P(A3c)],P5,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(A45)],Ro,"FolderTransferDemo$<init>$lambda$_0_0",28,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AT1)],Rn,"FolderTransferDemo$<init>$lambda$_0_1",28,B,[Cm],0,3,[0,0,0],0,["b_",A9P(A4q)],YA,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(APM)],Rv,
"SinDemo$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AXu)],AIH,0,B,[],3,3,0,0,0,Vt,"DiffMiddleDemo$<init>$lambda$_0_0",28,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AUe)],Vs,"DiffMiddleDemo$<init>$lambda$_0_1",28,B,[Cm],0,3,[0,0,0],0,["b_",A9P(AZa)],AB_,"FolderDiff$<init>$lambda$_0_0",28,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AUd)],Qz,0,B,[W],0,3,0,0,["g",A9P(A5h)],Qy,"EditorWindowDemo$<init>$lambda$_0_1",11,B,[CQ],0,3,[0,0,0],0,["bM",A9P(AZ3)],Dr,0,B,[],3,3,0,AQe,0,Cu,0,CD,[],12,3,0,UU,0,KM,0,B,[],0,3,0,0,0,Jh,0,B,[],
0,3,0,0,0,ALs,0,B,[],0,3,0,0,0]);
$rt_metadata([DW,0,B,[],3,3,0,AXT,0,Y5,0,B,[BW],3,3,0,0,0,Zf,0,B,[Y5],0,3,0,0,["CQ",A9Q(A0r)],Y6,0,B,[BW],3,3,0,0,0,Zd,0,B,[Y6],0,3,0,0,["CQ",A9Q(A1f)],AGp,0,B,[],0,3,0,0,0,AJJ,0,B,[BW],3,3,0,0,0,Wa,0,B,[],0,3,0,0,0,D1,0,B,[],3,3,0,A2f,0,If,0,B,[],3,3,0,0,0,QJ,0,B,[If],0,3,0,0,["xJ",A9R(A3W)],QK,0,B,[If],0,3,0,0,0,UM,0,B,[W],0,3,0,0,["g",A9P(A2P)],Ql,0,B,[W],0,3,0,0,["g",A9P(APY)],Qk,0,B,[W],0,3,0,0,["g",A9P(AOz)],Qh,0,B,[W],0,3,0,0,["g",A9P(ANG)],Qf,0,B,[W],0,3,0,0,["g",A9P(A6r)],AJp,0,B,[],0,3,0,0,0,VP,0,
B,[W],0,3,0,0,["g",A9P(A1g)],ADr,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Cm],0,3,[0,0,0],0,["b_",A9P(A1_)],AMp,0,B,[],0,3,0,0,["bP",A9P(AZn)],Jo,0,B,[],0,3,0,0,0,KI,0,B,[],4,3,0,0,0,AKa,0,B,[],0,3,0,0,0,Cx,0,CD,[],12,3,0,AGC,0,AMX,0,B,[],0,3,0,0,0,AGX,0,B,[BW],4,3,0,0,0,AM6,0,B,[],0,3,0,0,0,AFG,0,B,[],3,3,0,0,0,C8,0,B,[BW],1,3,0,0,0,ALL,0,C8,[],1,3,0,0,0,AL_,0,C8,[],1,3,0,0,0,AKp,0,C8,[],1,3,0,0,0,AKA,0,C8,[],1,3,0,0,0,AMs,0,C8,[],1,3,0,0,0,Wl,0,B,[T],0,3,0,0,["e",A9O(ARH)],H2,0,CD,[],12,3,0,AHD,0,P9,0,B,
[BD],0,3,0,0,["Z",A9P(AX_)],AAF,0,B,[],0,3,0,0,0,AJ8,0,B,[],0,3,0,0,0,GL,0,B,[],0,3,0,0,0,AGN,0,B,[],4,3,0,0,0,Uo,0,B,[],0,0,0,0,0,AKc,0,B,[],3,3,0,0,0,ADs,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[EV],0,3,[0,0,0],0,["dL",A9R(AXM)],YH,"ScissorDemo$1",11,B,[CH],0,0,[Ty,0,0],0,["cw",A9Q(AV3),"dN",A9Q(ANX),"cM",A9R(A3K),"bZ",A9P(A6Y)],AGV,0,B,[BW],1,3,0,0,0,AIB,"PopupMenu",23,B,[CM,F$,Ds],0,3,[0,0,0],0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf),"eL",A9Q(A6y),"iL",A9P(ASm),"bV",A9O(AUl)],X6,
0,B,[W],0,3,0,0,["g",A9P(AR5)],V1,0,B,[W],0,3,0,0,["g",A9P(A5_)]]);
$rt_metadata([RI,0,B,[W],0,3,0,0,["g",A9P(AYH)],Qn,0,B,[CL],0,3,0,0,["b8",A9O(AX0)],ALG,0,B,[],3,3,0,0,0,Mi,0,B,[],3,3,0,0,0,RO,0,B,[Mi],0,3,0,0,["Ap",A9P(AY6)],PY,0,B,[BD],0,3,0,0,["Z",A9P(A5k)],AH0,0,B,[],0,3,0,0,0,Rp,"LineNumbersTexture",11,B,[Ds],0,3,[0,0,0],0,0,AFK,0,B,[],0,3,0,0,0,U5,0,B,[],0,3,0,0,0,Mv,0,B,[],0,3,0,0,0,Ti,0,B,[],3,3,0,0,0,ADy,0,B,[W],0,3,0,0,["g",A9P(AY7)],Gw,0,Jq,[],0,3,0,0,0,AEL,0,FK,[],0,3,0,0,0,AEO,0,B,[W],0,3,0,0,["g",A9P(AXE)],Ve,0,B,[W],0,3,0,0,["g",A9P(A5K)],WM,0,B,[T],0,3,0,
0,["e",A9O(A4c)],Ew,0,B,[Fn],1,3,0,0,0,Lk,0,B,[],3,3,0,0,["se",A9Q(AOw)],L9,0,Ew,[Lk],0,3,0,0,["mH",A9P(AY9),"bV",A9O(A1F),"d6",A9P(AZY),"AF",A9P(AZW),"yp",A9P(AVe),"vQ",A9P(A25),"se",A9Q(A2x)],AEn,0,B,[CL],0,3,0,0,["b8",A9O(AWQ)],AAa,"FolderDiffWindow",28,Ew,[],0,3,[0,0,0],0,["bV",A9O(AOK),"mH",A9P(A0X)],Wd,0,B,[CL],0,3,0,0,["b8",A9O(AWY)],Ov,"EditorWindow",11,Ew,[Cm],0,3,[0,0,0],0,["d6",A9P(AM9),"bV",A9O(AOT),"mH",A9P(A0E)],SE,0,B,[CL],0,3,0,0,["b8",A9O(ATa)],AE5,0,DG,[CG],0,3,0,0,0,GQ,0,B,[],0,0,0,0,0,JY,
0,B,[],4,3,0,0,0,U$,0,B,[],0,3,0,0,0,OT,0,B,[],1,3,0,0,0,AD0,"Pos",17,B,[CG],0,3,[0,0,0],0,["bP",A9P(ANH),"qz",A9O(AUC),"J",A9O(AOe),"mO",A9P(A3A)],AG5,0,C8,[],1,3,0,0,0,VJ,0,B,[T],0,3,0,0,["e",A9O(AOE)],AFm,0,B,[],3,3,0,0,0,Ye,0,B,[T],0,3,0,0,["e",A9O(A5G)],Yc,0,B,[T],0,3,0,0,["e",A9O(AQd)],Yb,0,B,[T],0,3,0,0,["e",A9O(AN8)],Yd,0,B,[T],0,3,0,0,["e",A9O(A6Z)],SH,0,B,[T],0,3,0,0,["e",A9O(A19)],AAn,0,B,[T],0,3,0,0,["e",A9O(AVM)],AAm,0,B,[T],0,3,0,0,["e",A9O(A1R)],AAp,0,B,[T],0,3,0,0,["e",A9O(A3j)],AAo,0,B,[T],
0,3,0,0,["e",A9O(AVI)],Y7,0,B,[T],0,3,0,0,["e",A9O(ASr)],Z1,0,B,[W],0,3,0,0,["g",A9P(AYn)],R_,0,B,[W],0,3,0,0,["g",A9P(A2C)],Id,0,CF,[],1,3,0,0,["bV",A9O(A2F),"dJ",A9P(AS3),"cF",A9P(AX8),"dM",A9R(APz),"cM",A9R(A5q),"cw",A9Q(AVK),"dN",A9Q(A5B),"bZ",A9P(A53),"dL",A9R(AQb),"kB",A9O(A5O)],Iz,0,Id,[],1,0,0,0,["C0",A9O(AR_)],AHa,0,Iz,[Fn],0,0,0,0,0]);
$rt_metadata([FC,0,CF,[],0,3,0,0,0,R5,0,FC,[F$],0,3,0,0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf),"bV",A9O(A5I),"lV",A9Q(AZM),"dJ",A9P(AXV),"pu",A9P(A3y),"sb",A9P(A4K),"bZ",A9P(ASc),"cw",A9Q(AQj),"cM",A9R(AUt),"iL",A9P(A4X)],V8,0,B,[T],0,3,0,0,["e",A9O(AWA)],AGB,0,CF,[],0,3,0,0,["bV",A9O(AVg),"dM",A9R(AQN),"dJ",A9P(A34),"cM",A9R(AVH),"cw",A9Q(AVi),"dN",A9Q(ATo),"bZ",A9P(AS$),"dL",A9R(AZ_),"h_",A9O(AJi)],AEX,0,B,[W],0,3,0,0,["g",A9P(APA)],AEZ,0,B,[W],0,3,0,0,["g",A9P(ANI)],QL,0,FC,[],0,3,0,0,["h_",
A9O(AWI),"pu",A9P(A3E),"dJ",A9P(AW1),"cw",A9Q(ASJ)],AEY,0,B,[T],0,3,0,0,["e",A9O(AVy)],Vl,0,CF,[],0,3,0,0,0,RB,0,Id,[EY],0,3,0,0,["C0",A9O(ARB),"h_",A9O(A0S)],HE,0,B,[],0,3,0,0,0,C_,"FileTreeNode",23,HE,[],0,3,[0,0,0],0,0,ABJ,0,B,[T],0,3,0,0,["e",A9O(APK)],ABI,0,B,[T],0,3,0,0,["e",A9O(AUc)],ABK,0,B,[T],0,3,0,0,["e",A9O(A2s)],Tt,0,B,[T],0,3,0,0,["e",A9O(AYT)],Tr,0,B,[T],0,3,0,0,["e",A9O(AXo)],Ts,0,B,[T],0,3,0,0,["e",A9O(A07)],Tq,0,B,[T],0,3,0,0,["e",A9O(AVv)],AEt,0,B,[T],0,3,0,0,["e",A9O(ARf)],AEs,0,B,[T],0,
3,0,0,["e",A9O(AVD)],AA_,0,DG,[CG],0,3,0,0,0,AFk,0,B,[T],0,3,0,0,["e",A9O(A1E)],Yy,0,B,[T],0,3,0,0,["e",A9O(AYv)],ACJ,0,B,[],0,3,0,0,0,Ko,0,B,[],0,3,0,0,0,O4,0,B,[],3,3,0,0,0,LM,0,FC,[F$],0,3,0,0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf),"bV",A9O(ATW),"lV",A9Q(AOm),"dJ",A9P(A2c),"cM",A9R(A5b),"cw",A9Q(APk)],AK2,0,LM,[],0,3,0,0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf)],P$,0,CF,[],0,3,0,0,["dJ",A9P(ANN)],AHt,0,B,[MP],0,3,0,0,["xn",A9O(A2K),"vw",A9O(AQq),"f7",A9Q(ANn),"Av",A9O(AXf),
"lE",A9O(AVs),"kT",A9O(A5n),"hW",A9P(AWw),"lg",A9O(AR0),"mh",A9O(AYd),"pZ",A9Q(ASC),"qN",A9P(A2u),"p6",A9O(M3)],ACR,0,B,[],0,3,0,0,0,Yh,0,B,[T],0,3,0,0,["e",A9O(AWN)],Tu,0,B,[T],0,3,0,0,["e",A9O(AR3)],Qv,0,B,[W],0,3,0,0,["g",A9P(ANV)],Qu,0,B,[W],0,3,0,0,["g",A9P(AOc)],UA,0,B,[],3,3,0,ARe,0,AFs,0,B,[Gx],0,3,0,0,["qM",A9Q(AUU)],LA,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,AMU,0,Hi,[],0,0,0,0,["u$",A9P(A6K)],Dc,0,Bt,[],0,3,0,0,0,ALY,0,FK,[],0,3,0,0,0,AM0,0,B,[],0,3,0,0,0,Pk,0,B,[W],0,3,0,0,["g",A9P(AXl)],ADU,
0,B,[W],0,3,0,0,["g",A9P(A2n)],S4,0,B,[W],0,3,0,0,["g",A9P(AZV)],S3,0,B,[W],0,3,0,0,["g",A9P(A5H)],AI8,0,B,[BD],0,3,0,0,0,AIG,0,B,[],0,3,0,0,0,AH_,0,B,[BD],0,3,0,0,0]);
$rt_metadata([X8,0,B,[W],0,3,0,0,["g",A9P(APg)],X7,0,B,[W],0,3,0,0,["g",A9P(AU7)],Ft,0,B,[],3,3,0,0,0,X_,0,B,[Ft],0,0,0,0,["cQ",A9O(Cb),"cg",A9O(Cc),"pW",A9O(AAv)],LF,0,OT,[],1,3,0,0,0,T0,0,LF,[],0,3,0,0,0,AEr,0,B,[W],0,3,0,0,0,WF,0,B,[W],0,3,0,0,["g",A9P(AV_)],PC,0,B,[CL],0,3,0,0,["b8",A9O(AUw)],PB,0,B,[CL],0,3,0,0,["b8",A9O(AZF)],ABz,0,B,[CL],0,3,0,0,["b8",A9O(A29)],XY,0,B,[CL],0,3,0,0,["b8",A9O(A3U)],ABg,0,B,[Ch],0,3,0,0,["bl",A9P(A55)],AG9,0,B,[BW],1,3,0,0,0,ADS,0,B,[Ch],0,3,0,0,["bl",A9P(AQv)],OK,0,BJ,
[],0,3,0,0,0,SO,0,B,[T],0,3,0,0,["e",A9O(AUy)],SN,0,B,[T],0,3,0,0,["e",A9O(A0b)],SQ,0,B,[T],0,3,0,0,["e",A9O(A5F)],SP,0,B,[T],0,3,0,0,["e",A9O(AXw)],ACm,0,B,[T],0,3,0,0,["e",A9O(ANg)],AGq,0,B,[],0,3,0,0,0,ACn,0,B,[T],0,3,0,0,["e",A9O(AQY)],Ug,0,B,[T],0,3,0,0,["e",A9O(AV5)],ADW,0,B,[T],0,3,0,0,["e",A9O(A6a)],Ri,0,B,[],0,3,0,0,0,Xr,0,B,[T],0,3,0,0,["e",A9O(A0i)],Xq,0,B,[DQ],0,3,0,0,0,AI7,0,B,[],0,3,0,0,0,DU,0,Bt,[],0,3,0,0,0,AIy,0,B,[],0,3,0,0,0,Tw,0,En,[Ed,C1],0,3,0,0,0,VF,0,B,[],0,3,0,0,0,Vm,0,B,[],0,3,0,0,
0,XL,0,B,[DQ],0,3,0,0,0,TL,0,B,[W],0,3,0,0,["g",A9P(AU9)],AE8,0,B,[Ch],0,3,0,0,["bl",A9P(A4j)],AE7,0,B,[Ch],0,3,0,0,["bl",A9P(AZE)],AEu,0,B,[Ch],0,3,0,0,["bl",A9P(A0A)],Zy,0,DG,[CG],0,3,0,0,0,Ks,0,B,[],4,3,0,0,0,UV,0,B,[T],0,3,0,0,["e",A9O(AN0)],UW,0,B,[T],0,3,0,0,["e",A9O(AP_)],UX,0,B,[T],0,3,0,0,["e",A9O(A5J)],UY,0,B,[T],0,3,0,0,["e",A9O(ASt)],UZ,0,B,[T],0,3,0,0,["e",A9O(AUN)],Pp,0,B,[Ch],0,3,0,0,["bl",A9P(A62)],WI,0,B,[],3,3,0,A70,0,AC_,0,B,[],0,3,0,0,0,Ul,0,B,[CE],0,3,0,0,["cH",A9P(AXX)]]);
$rt_metadata([RZ,0,B,[T],0,3,0,0,["e",A9O(A2r)],XE,0,B,[T],0,3,0,0,["e",A9O(A2l)],Yg,0,B,[],0,3,0,0,0,U6,0,B,[W],0,3,0,0,["g",A9P(A6b)],AF$,0,B,[],3,3,0,0,0,SL,0,B,[T],0,3,0,0,["e",A9O(A00)],AD_,0,B,[T],0,3,0,0,["e",A9O(AWJ)],Zq,0,B,[],1,3,0,0,0,AAj,0,B,[MQ],3,3,0,0,0,PW,0,B,[AAj],3,3,0,0,0,F0,0,B,[PW],1,3,0,0,0,ABk,0,F0,[],0,3,0,0,0,R9,0,B,[],3,3,0,0,0,Po,0,B,[W],0,3,0,0,0,AEV,0,B,[W],0,3,0,0,["g",A9P(AOo)],AHi,0,B,[],3,3,0,0,0,JW,0,Hg,[],0,0,0,0,0,Is,0,Bt,[],0,3,0,0,0,TS,0,B,[],0,3,0,0,0,ADb,0,B,[If],0,3,
0,0,["xJ",A9R(AR8)],AL4,0,B,[],0,3,0,0,0,RN,0,B,[W],0,3,0,0,["g",A9P(AYw)],AFS,0,B,[W],0,3,0,0,0,Wv,0,B,[BD],0,3,0,0,0,F1,0,B,[],0,3,0,0,0,AJ1,0,B,[],0,3,0,0,0,AGf,0,B,[],0,3,0,0,0,AM8,0,B,[],0,3,0,0,0,AEM,0,B,[T],0,3,0,0,["e",A9O(AYe)],AEN,0,B,[T],0,3,0,0,["e",A9O(A0Z)],Gd,"ScopeNode",20,B,[],0,3,[0,0,0],0,0,WP,0,B,[W],0,3,0,0,["g",A9P(AQG)],Oa,"FakeNode",20,Gd,[],0,3,[0,0,0],0,0,LC,"MemberNode",20,Gd,[],0,3,[0,0,0],0,0,VW,0,B,[W],0,3,0,0,["g",A9P(AYh)],Rr,"InferenceNode",20,B,[],0,3,[0,0,0],0,0,QQ,0,B,[W],
0,3,0,0,["g",A9P(A2d)],QV,0,B,[HO],3,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],EC,0,FN,[QV],1,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],NQ,0,EC,[],1,0,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],Vf,0,NQ,[],0,0,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],Os,0,En,[],1,0,0,0,0,Vc,0,Os,[],0,0,0,0,0,ON,0,EA,[Jp],1,0,0,0,["fu",A9P(AXn),"jE",A9O(AZz),"mG",A9P(ASO),"qd",A9P(ARL)],Vd,0,ON,[],0,0,0,0,["fu",A9P(AXn),"i5",A9P(ASV),"c1",A9O(AR2),"ce",A9O(APQ),"eQ",A9O(AN4)],Va,0,B,[Ft],0,0,0,0,["cQ",A9O(ANM),"cg",A9O(A27),"pW",A9O(AUY)],Zo,0,B,[Ft],3,
3,0,0,0,Vb,0,B,[Zo],0,0,0,0,0,W8,0,B,[Gx],0,3,0,0,0,R7,0,B,[DQ],0,3,0,0,["bM",A9P(A64)]]);
$rt_metadata([KO,0,DU,[],0,3,0,0,0,J3,0,Bt,[],0,3,0,0,0,OF,0,Bt,[],0,3,0,0,0,Zj,0,B,[W],0,3,0,0,["g",A9P(A28)],AJq,0,B,[W],0,3,0,0,0,ACz,0,B,[W],0,3,0,0,["g",A9P(ASE)],RM,0,B,[R9],0,3,0,0,0,Wo,0,B,[W],0,3,0,0,["g",A9P(A0$)],AFX,0,B,[],0,3,0,0,0,ABA,0,B,[T],0,3,0,0,["e",A9O(AYf)],Hs,"Diff",11,B,[],0,3,[0,0,0],0,0,Q6,0,EC,[],0,0,0,0,["qd",A9P(A1q)],UD,0,EC,[],0,0,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],Q8,0,FN,[],0,0,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],W_,0,B,[W],0,3,0,0,["g",A9P(AZ5)],U1,0,B,[W],0,3,0,0,["g",A9P(A1Q)],KU,
"DeclNode",22,B,[],0,3,[0,0,0],0,["J",A9O(A4y),"bP",A9P(ALD)],MI,"MethodNode",22,KU,[],0,3,[0,0,0],0,["bP",A9P(AYG)],Fj,"RefNode",21,B,[],0,3,[0,0,0],0,["J",A9O(AWk),"bP",A9P(AJ4)],HZ,"ExprRefNode",21,Fj,[],0,3,[0,0,0],0,["J",A9O(A2m)],KB,"MethodCallNode",21,Fj,[],0,3,[0,0,0],0,["bP",A9P(A5N)],JH,"QualifiedRefNode",21,Fj,[],0,3,[0,0,0],0,["J",A9O(AS_),"bP",A9P(AX3)],TQ,0,B,[W],0,3,0,0,["g",A9P(AWx)],AGL,0,F0,[],0,3,0,0,0,ACc,0,B,[W],0,3,0,0,["g",A9P(ATR)],PN,0,B,[W],0,3,0,0,["g",A9P(A6B)],U7,0,B,[W],0,3,0,0,
["g",A9P(A0f)],P2,0,B,[W],0,3,0,0,["g",A9P(ASK)],ZA,0,B,[W],0,3,0,0,["g",A9P(AVB)],Nw,"FileDiffWindow",28,Ew,[],0,3,[0,0,0],0,["d6",A9P(A4p),"bV",A9O(A5t),"mH",A9P(AYr)],Xa,0,B,[CL],0,3,0,0,["b8",A9O(A4U)],QR,0,B,[CL],0,3,0,0,["b8",A9O(AQE)],Xt,0,B,[CL],0,3,0,0,["b8",A9O(APi)],T7,0,B,[Gr],0,3,0,0,["qS",A9Q(AQD)],Xu,0,B,[],0,3,0,0,0,So,0,B,[],0,3,0,0,0,UI,0,B,[W],0,3,0,0,["g",A9P(A6n)],VO,0,B,[Mi],0,3,0,0,["Ap",A9P(NV)],VI,0,Iz,[Fn],0,0,0,0,0,W3,0,B,[T],0,3,0,0,["e",A9O(A1d)],W2,0,B,[T],0,3,0,0,["e",A9O(ASh)],U3,
0,B,[Gr],0,3,0,0,["qS",A9Q(AUx)],Sn,0,B,[T],0,3,0,0,["e",A9O(A0t)],YK,0,B,[W],0,3,0,0,["g",A9P(ASY)],AB2,0,B,[T],0,3,0,0,["e",A9O(AOk)],AI5,0,B,[CG],0,3,0,0,["bP",A9P(ATs),"J",A9O(ALC)],XG,0,B,[W],0,3,0,0,["g",A9P(A1P)],WY,0,B,[W],0,3,0,0,["g",A9P(A61)],Pn,0,B,[W],0,3,0,0,["g",A9P(A5w)],FU,0,B,[],0,0,0,0,0]);
$rt_metadata([ABL,0,FU,[Ft],0,0,0,0,0,Uw,0,FU,[Ft],0,0,0,0,0,AAG,0,FU,[Ft],0,0,0,0,0,AD6,0,B,[W],0,3,0,0,["g",A9P(ANk)],AD5,0,B,[W],0,3,0,0,["g",A9P(AVQ)],AF8,0,B,[W],0,0,0,0,0,AAE,0,B,[C1],4,3,0,0,0,ABj,0,B,[W],0,3,0,0,["g",A9P(AWW)],ABe,0,B,[W],0,3,0,0,["g",A9P(ASM)],ABd,0,B,[W],0,3,0,0,["g",A9P(A3B)],ACU,0,B,[T],0,3,0,0,["e",A9O(A4Y)],ACY,0,B,[W],0,3,0,0,["g",A9P(AZ1)],AC0,0,B,[W],0,3,0,0,["g",A9P(A5D)],IM,0,B,[],3,3,0,0,0,Qe,0,B,[IM],0,0,0,0,["of",A9P(A3F),"pm",A9P(A0W),"o3",A9O(AU3)],RK,0,B,[T],0,3,0,0,
["e",A9O(A11)],YL,0,B,[W],0,3,0,0,["g",A9P(AZs)],Ic,0,B,[],3,3,0,0,0,T9,0,B,[Ic],0,3,0,0,["me",A9R(A2e)],T$,0,B,[Ic],0,3,0,0,["me",A9R(A0Q)],Jc,0,B,[C1,CG],0,3,0,0,0,Lc,0,B,[],3,3,0,0,0,SK,0,B,[Lc],0,3,0,0,0,Nv,0,B,[Lc],3,3,0,0,0,AHj,0,B,[Nv],0,3,0,0,0,S9,0,B,[Ic],0,3,0,0,["me",A9R(A2L)],S8,0,B,[DQ],0,3,0,0,["bM",A9P(AWu)],S7,0,B,[DQ],0,3,0,0,["bM",A9P(AUm)],S_,0,B,[Ic],0,3,0,0,["me",A9R(A2k)],BV,0,B,[],1,0,0,0,["cC",A9R(IZ),"cO",A9S(I8),"jk",A9O(AYS),"J",A9O(AUH),"U",A9P(AVT),"b6",A9P(A5d),"gV",A9O(A56),"e3",
A9O(KT)],Rw,0,B,[W],0,3,0,0,["g",A9P(A09)],ABG,0,B,[W],0,3,0,0,["g",A9P(ARM)],AFo,0,B,[W],0,3,0,0,["g",A9P(A4I)],AFn,0,B,[W],0,3,0,0,["g",A9P(AO$)],AC$,0,B,[IM],0,3,0,0,["of",A9P(A4D),"pm",A9P(ATc),"o3",A9O(AZI)],S5,0,B,[W],0,3,0,0,0,WZ,0,B,[W],0,3,0,0,["g",A9P(A2Q)],W0,0,B,[W],0,3,0,0,["g",A9P(AQn)],C6,"FSet",2,BV,[],0,0,[0,0,0],O5,["c",A9R(AOj),"t",A9O(AQ1),"L",A9P(AOB)],Ho,0,B,[],0,0,0,0,0,KC,0,BX,[],0,3,0,0,0,FP,0,B,[T],0,3,0,AJj,0,YI,0,B,[W],0,3,0,0,["g",A9P(AUQ)],SJ,"NonCapFSet",2,C6,[],0,0,[0,0,0],0,
["c",A9R(AXY),"t",A9O(AZq),"L",A9P(A3$)],AFi,"AheadFSet",2,C6,[],0,0,[0,0,0],0,["c",A9R(AZh),"t",A9O(A1m)],Rt,"BehindFSet",2,C6,[],0,0,[0,0,0],0,["c",A9R(AOG),"t",A9O(A49)],Tz,"AtomicFSet",2,C6,[],0,0,[0,0,0],0,["c",A9R(AX2),"t",A9O(AVa),"L",A9P(A2$)],Gl,"FinalSet",2,C6,[],0,0,[0,0,0],0,["c",A9R(AV7),"t",A9O(AY2)],Cf,0,BV,[],1,0,0,0,["c",A9R(A6G),"ch",A9O(A4R),"L",A9P(ARt)],AIC,"EmptySet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(A4r),"cC",A9R(AZ$),"cO",A9S(AZe),"t",A9O(AQ2),"L",A9P(AX1)]]);
$rt_metadata([B$,"JointSet",2,BV,[],0,0,[0,0,0],0,["c",A9R(AQK),"U",A9P(ATN),"t",A9O(ARC),"b6",A9P(A1M),"L",A9P(AUh),"e3",A9O(AO3)],KN,"NonCapJointSet",2,B$,[],0,0,[0,0,0],0,["c",A9R(ATB),"t",A9O(ASj),"L",A9P(A3N)],Eh,"AtomicJointSet",2,KN,[],0,0,[0,0,0],0,["c",A9R(AZC),"U",A9P(A3G),"t",A9O(ANS)],Xm,"PositiveLookAhead",2,Eh,[],0,0,[0,0,0],0,["c",A9R(ATL),"L",A9P(AVY),"t",A9O(A51)],AD4,"NegativeLookAhead",2,Eh,[],0,0,[0,0,0],0,["c",A9R(AOy),"L",A9P(A4V),"t",A9O(AQF)],AAH,"PositiveLookBehind",2,Eh,[],0,0,[0,0,0],
0,["c",A9R(AO1),"L",A9P(A6X),"t",A9O(ATq)],T1,"NegativeLookBehind",2,Eh,[],0,0,[0,0,0],0,["c",A9R(AXC),"L",A9P(A30),"t",A9O(AOI)],H9,"SingleSet",2,B$,[],0,0,[0,0,0],0,["c",A9R(ANK),"cC",A9R(ASo),"cO",A9S(A4a),"b6",A9P(A1K),"gV",A9O(A26),"e3",A9O(AWB)],ACi,0,DG,[CG],0,3,0,0,0,Hq,0,B,[],1,0,0,0,0,Ba,0,Hq,[],1,0,0,QM,["d5",A9O(AYB),"f5",A9O(AYc),"mm",A9O(A4M),"iH",A9O(A50)],AGk,0,Ba,[],0,0,0,0,["o",A9P(De),"d5",A9O(C$),"f5",A9O(AZ6),"mm",A9O(AVJ),"J",A9O(A2o),"iH",A9O(AQi)],M$,0,Bt,[],0,3,0,0,0,Eu,0,BV,[],1,0,
0,0,["b6",A9P(AUW),"L",A9P(A5m),"e3",A9O(ASI)],Dg,"LeafQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9R(AXD),"t",A9O(AY$)],F8,"CompositeQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9R(AYm),"t",A9O(AYD)],C7,"GroupQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9R(AXR),"t",A9O(A06)],Fi,"AltQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9R(A1Y),"U",A9P(AXg)],V6,"UnifiedQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9R(A6A),"cC",A9R(AS9)],PL,0,B,[],3,3,0,0,0,SW,0,B,[PL],0,3,0,0,0,Bg,0,B,[],1,0,0,0,0,Dy,0,BX,[],0,3,0,0,0,Xz,0,Hq,
[Ed],0,0,0,0,["J",A9O(ACl)],YG,"FSet$PossessiveFSet",2,BV,[],0,0,[C6,0,0],0,["c",A9R(ARN),"t",A9O(A20),"L",A9P(A24)],AEI,0,B,[Ed,C1],0,3,0,0,0,Pt,0,B$,[],0,0,0,0,["t",A9O(A2_)],RX,"CompositeRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A9R(AOg),"U",A9P(A2W),"t",A9O(A3k),"L",A9P(AOM),"b6",A9P(AOA)],Ea,"SupplRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A9R(AZZ),"t",A9O(A5U),"o",A9P(AQt),"b6",A9P(AOb),"U",A9P(A4F),"L",A9P(AP$)],M7,"UCISupplRangeSet",2,Ea,[],0,0,[0,0,0],0,["o",A9P(ARu),"t",A9O(AWG)],AGe,"UCIRangeSet",2,Cf,[],0,
0,[0,0,0],0,["bE",A9Q(A1x),"t",A9O(AYI)],EQ,"RangeSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(Xc),"t",A9O(ARR),"b6",A9P(ATP)],Y1,"HangulDecomposedCharSet",2,B$,[],0,0,[0,0,0],0,["U",A9P(ASv),"t",A9O(AUP),"c",A9R(ANr),"b6",A9P(AYL),"L",A9P(AVO)],EX,"CharSet",2,Cf,[],0,0,[0,0,0],0,["ch",A9O(A1n),"bE",A9Q(AQT),"cC",A9R(APW),"cO",A9S(ARI),"t",A9O(AV0),"b6",A9P(AVF)],AI1,"UCICharSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(AXq),"t",A9O(A2V)],AFC,"CICharSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(ANC),"t",A9O(AQ7)],Ga,"DecomposedCharSet",
2,B$,[],0,0,[0,0,0],0,["U",A9P(A59),"c",A9R(ATA),"t",A9O(A2M),"b6",A9P(ARO),"L",A9P(A3H)],Wy,"UCIDecomposedCharSet",2,Ga,[],0,0,[0,0,0],0,0,ACB,"CIDecomposedCharSet",2,Ga,[],0,0,[0,0,0],0,0,W$,"PossessiveGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9R(AZm)],Zz,"PosPlusGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9R(A2g)],GZ,"AltGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9R(A4B),"U",A9P(A5z)],Q_,"PosAltGroupQuantifierSet",2,GZ,[],0,0,[0,0,0],0,["c",A9R(ARE),"U",A9P(A2y)],GE,"CompositeGroupQuantifierSet",
2,C7,[],0,0,[0,0,0],0,["c",A9R(A6T),"t",A9O(AWc)],PI,"PosCompositeGroupQuantifierSet",2,GE,[],0,0,[0,0,0],0,["c",A9R(ARa)],SC,"ReluctantGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9R(AWH)],AAd,"RelAltGroupQuantifierSet",2,GZ,[],0,0,[0,0,0],0,["c",A9R(AON)],UH,"RelCompositeGroupQuantifierSet",2,GE,[],0,0,[0,0,0],0,["c",A9R(AX7)],SD,"DotAllQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9R(A6I),"cC",A9R(AVl),"t",A9O(A3q)],YM,"DotQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9R(ATQ),"cC",A9R(ANs),"t",A9O(A36)]]);
$rt_metadata([FM,0,B,[],1,0,0,0,0,AFy,"PossessiveQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9R(AN3)],V0,"PossessiveAltQuantifierSet",2,Fi,[],0,0,[0,0,0],0,["c",A9R(ASX)],Za,"PossessiveCompositeQuantifierSet",2,F8,[],0,0,[0,0,0],0,["c",A9R(A4d)],AAc,"ReluctantQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9R(ATM)],ACM,"ReluctantAltQuantifierSet",2,Fi,[],0,0,[0,0,0],0,["c",A9R(AN_)],Su,"ReluctantCompositeQuantifierSet",2,F8,[],0,0,[0,0,0],0,["c",A9R(A4t)],LE,"SOLSet",2,BV,[],4,0,[0,0,0],0,["c",A9R(A1L),"L",A9P(A1e),
"t",A9O(ASZ)],AGz,"WordBoundary",2,BV,[],0,0,[0,0,0],0,["c",A9R(AYz),"L",A9P(AYJ),"t",A9O(A6R)],YJ,"PreviousMatch",2,BV,[],0,0,[0,0,0],0,["c",A9R(ARw),"L",A9P(AW9),"t",A9O(AYp)],Wu,"EOLSet",2,BV,[],4,0,[0,0,0],0,["c",A9R(A3t),"L",A9P(AZf),"t",A9O(A1Z)],AEq,"EOISet",2,BV,[],0,0,[0,0,0],0,["c",A9R(A2T),"L",A9P(AXp),"t",A9O(AQJ)],XS,"MultiLineSOLSet",2,BV,[],0,0,[0,0,0],0,["c",A9R(AZb),"L",A9P(AQB),"t",A9O(AYi)],AIN,"DotAllSet",2,B$,[],0,0,[0,0,0],0,["c",A9R(AWK),"t",A9O(APB),"U",A9P(AYN),"jk",A9O(A2E),"L",A9P(AYM)],AGj,
"DotSet",2,B$,[],4,0,[0,0,0],0,["c",A9R(A2N),"t",A9O(AZl),"U",A9P(A35),"jk",A9O(ANc),"L",A9P(AWZ)],AMD,"UEOLSet",2,BV,[],4,0,[0,0,0],0,["c",A9R(ARQ),"L",A9P(A0p),"t",A9O(AR$)],ALz,"UMultiLineEOLSet",2,BV,[],0,0,[0,0,0],0,["c",A9R(ATt),"L",A9P(A0j),"t",A9O(ANQ)],AJB,"MultiLineEOLSet",2,BV,[],0,0,[0,0,0],0,["c",A9R(A0_),"L",A9P(AO9),"t",A9O(AQC)],Iu,"CIBackReferenceSet",2,B$,[],0,0,[0,0,0],0,["c",A9R(AN6),"U",A9P(A3D),"t",A9O(AXZ),"L",A9P(AUA)],AMJ,"BackReferenceSet",2,Iu,[],0,0,[0,0,0],0,["c",A9R(APc),"cC",A9R(AVW),
"cO",A9S(ANR),"b6",A9P(A2b),"t",A9O(A5y)],AKS,"UCIBackReferenceSet",2,Iu,[],0,0,[0,0,0],0,["c",A9R(ASk),"t",A9O(AYK)],Qs,0,Hb,[J4],0,3,0,0,["qn",A9S(AQl),"pN",A9R(AYC),"kp",A9P(AY1),"qF",A9Q(A4Q)],AAV,"SequenceSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(APu),"cC",A9R(AYx),"cO",A9S(A0u),"t",A9O(ATH),"b6",A9P(AQZ)],AFB,"UCISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(ASp),"t",A9O(AQ8)],PM,"CISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(A4e),"t",A9O(A48)],HA,0,B,[],4,0,0,AUL,0,Xh,"UCISupplCharSet",2,Cf,[],0,0,[0,0,0],
0,["bE",A9Q(AU2),"t",A9O(A6Q)],Of,"LowSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["U",A9P(A21),"c",A9R(AZg),"cC",A9R(AQX),"cO",A9S(AZG),"t",A9O(AVp),"b6",A9P(ANO),"L",A9P(AVw)],Om,"HighSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["U",A9P(AY0),"c",A9R(ANx),"cC",A9R(A3d),"cO",A9S(AUX),"t",A9O(A6i),"b6",A9P(APv),"L",A9P(A3m)],Eo,"SupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9Q(A3P),"cC",A9R(A2p),"cO",A9S(AOR),"t",A9O(A5A),"b6",A9P(A3J)],ADB,0,FM,[],0,0,0,0,["ja",A9P(AOW),"Bq",A9Q(AUv)],ADC,0,FM,[],0,0,0,0,["ja",A9P(A4u),
"Bq",A9Q(AWv)],AH$,0,B,[],0,0,0,0,0,AFP,0,B,[],0,0,0,0,0,Od,0,Bg,[],0,0,0,0,["I",A9O(AK0)],NF,0,Bg,[],0,0,0,0,["I",A9O(ALv)],AH4,0,Bg,[],0,0,0,0,["I",A9O(A39)],AIo,0,Bg,[],0,0,0,0,["I",A9O(AVz)],AIq,0,Bg,[],0,0,0,0,["I",A9O(AP1)],N_,0,Bg,[],0,0,0,0,["I",A9O(AGm)],Ma,0,N_,[],0,0,0,0,["I",A9O(AGR)],AJs,0,Bg,[],0,0,0,0,["I",A9O(A0N)],O_,0,Ma,[],0,0,0,0,["I",A9O(AJz)],ALa,0,O_,[],0,0,0,0,["I",A9O(ASL)],AHm,0,Bg,[],0,0,0,0,["I",A9O(AZv)],AGv,0,Bg,[],0,0,0,0,["I",A9O(ASG)],AKo,0,Bg,[],0,0,0,0,["I",A9O(AWz)],AMr,0,
Bg,[],0,0,0,0,["I",A9O(A2B)],AJv,0,Bg,[],0,0,0,0,["I",A9O(AXv)],AL8,0,Bg,[],0,0,0,0,["I",A9O(ARg)]]);
$rt_metadata([AHW,0,Bg,[],0,0,0,0,["I",A9O(AUG)],AID,0,Bg,[],0,0,0,0,["I",A9O(AZt)],AF1,0,Bg,[],0,0,0,0,["I",A9O(APG)],AJI,0,Bg,[],0,0,0,0,["I",A9O(A5T)],AMc,0,Bg,[],0,0,0,0,["I",A9O(AXr)],AIj,0,Bg,[],0,0,0,0,["I",A9O(ARS)],AKI,0,Bg,[],0,0,0,0,["I",A9O(APN)],AHo,0,Bg,[],0,0,0,0,["I",A9O(A0v)],AJb,0,Bg,[],0,0,0,0,["I",A9O(A1G)],AMh,0,Bg,[],0,0,0,0,["I",A9O(AVP)],AG2,0,Bg,[],0,0,0,0,["I",A9O(AUa)],AGH,0,Bg,[],0,0,0,0,["I",A9O(ATb)],AJt,0,Bg,[],0,0,0,0,["I",A9O(A32)],K1,0,Bg,[],0,0,0,0,["I",A9O(AHn)],AMz,0,K1,
[],0,0,0,0,["I",A9O(AS4)],ALf,0,Od,[],0,0,0,0,["I",A9O(AYu)],AGF,0,NF,[],0,0,0,0,["I",A9O(AQR)],AKr,0,Bg,[],0,0,0,0,["I",A9O(AR6)],AKC,0,Bg,[],0,0,0,0,["I",A9O(AWj)],AK5,0,Bg,[],0,0,0,0,["I",A9O(A0g)],ALb,0,Bg,[],0,0,0,0,["I",A9O(ANi)],AKu,0,B,[],4,0,0,0,0,AGc,0,B,[],4,3,0,0,0,XV,"UnicodeHelper$Range",8,B,[],0,3,[AGc,0,"Range"],0,0,AId,0,B,[],0,3,0,0,0,AKQ,0,B,[],4,3,0,0,0,MW,0,Bt,[],0,3,0,0,0,AKi,0,B,[DQ],0,3,0,0,0,Wb,0,B,[Ch],0,3,0,0,["bl",A9P(AT5)],Wc,0,B,[Ch],0,3,0,0,["bl",A9P(AUo)],AE4,0,B,[W],0,3,0,0,
["g",A9P(A3T)],Tf,0,B,[W],0,3,0,0,["g",A9P(A0o)],AEU,0,B,[Ch],0,3,0,0,["bl",A9P(AV4)],AET,0,B,[Ch],0,3,0,0,["bl",A9P(ASP)],ADL,0,B,[Ch],0,0,0,0,["bl",A9P(AUi)],ADw,0,B,[DQ],0,0,0,0,["bM",A9P(AP5)],V5,0,Ba,[],0,0,0,0,["o",A9P(AP7)],V2,0,Ba,[],0,0,0,0,["o",A9P(AXQ)],QF,0,Ba,[],0,0,0,0,["o",A9P(ARY),"J",A9O(A0y)],YS,0,Ba,[],0,0,0,0,["o",A9P(A3S)],YQ,0,Ba,[],0,0,0,0,["o",A9P(AU1)],YR,0,Ba,[],0,0,0,0,["o",A9P(A1V)],YV,0,Ba,[],0,0,0,0,["o",A9P(AZO)],YX,0,Ba,[],0,0,0,0,["o",A9P(ANd)],YT,0,Ba,[],0,0,0,0,["o",A9P(AQM)],YU,
0,Ba,[],0,0,0,0,["o",A9P(ASu)],YY,0,Ba,[],0,0,0,0,["o",A9P(AVZ)],YZ,0,Ba,[],0,0,0,0,["o",A9P(AZo)],QE,0,Ba,[],0,0,0,0,["o",A9P(A65)],QY,0,Ba,[],0,0,0,0,["o",A9P(AQP)]]);
$rt_metadata([QC,0,Ba,[],0,0,0,0,["o",A9P(APh)],QD,0,Ba,[],0,0,0,0,["o",A9P(A0m)],QI,0,Ba,[],0,0,0,0,["o",A9P(ARy)],QB,0,Ba,[],0,0,0,0,["o",A9P(A42)],QG,0,Ba,[],0,0,0,0,["o",A9P(AYE)],QH,0,Ba,[],0,0,0,0,["o",A9P(AT4)],AAD,0,B,[BD],0,3,0,0,0,ALt,0,B,[],4,3,0,0,0,MB,0,B,[],3,3,0,0,0,ABt,0,B,[MB],4,3,0,0,0,R2,0,B,[T],0,3,0,0,["e",A9O(A3z)],R0,0,B,[T],0,3,0,0,["e",A9O(AQH)],R1,0,B,[T],0,3,0,0,["e",A9O(AV$)],R4,0,B,[T],0,3,0,0,["e",A9O(ANA)],Tc,0,B,[T],0,3,0,0,["e",A9O(AVC)],Tb,0,B,[T],0,3,0,0,["e",A9O(A10)],Ta,
0,B,[T],0,3,0,0,["e",A9O(A3s)],Sm,0,B,[T],0,3,0,0,["e",A9O(AXa)],RL,0,B,[],3,3,0,0,0,AKY,0,B,[T],0,3,0,0,["e",A9O(A6u)],TE,0,B,[Ch],0,3,0,0,["bl",A9P(A4E)],ALh,0,B,[Gr],0,3,0,0,0,ACs,0,B,[Gr],0,3,0,0,0,ALQ,0,B,[Nv],0,3,0,0,0,ALR,0,B,[CL],0,3,0,0,0,ALP,0,B,[BD],0,3,0,0,0,ED,0,CD,[],12,3,0,AYY,0,YC,0,B,[],3,3,0,0,0,Q3,0,B,[T],0,3,0,0,["e",A9O(AT0)],Q1,0,B,[T],0,3,0,0,["e",A9O(A0h)],Q2,0,B,[T],0,3,0,0,["e",A9O(A5V)],U0,0,B,[T],0,3,0,0,["e",A9O(A3L)],U2,0,B,[T],0,3,0,0,["e",A9O(AS8)],Z_,0,B,[CL],0,3,0,0,["b8",A9O(A4T)],AAL,
0,B,[T],0,3,0,0,["e",A9O(AN7)],AAJ,0,B,[T],0,3,0,0,["e",A9O(APt)],TG,0,B,[T],0,3,0,0,["e",A9O(AWt)],TH,0,B,[T],0,3,0,0,["e",A9O(AN5)],TI,0,B,[T],0,3,0,0,["e",A9O(APl)],TJ,0,B,[T],0,3,0,0,["e",A9O(AWd)],TZ,0,B,[T],0,3,0,0,["e",A9O(A17)],AHG,0,B,[CL],0,3,0,0,["b8",A9O(A6w)],ADV,0,B,[],0,3,0,0,0,O7,0,EC,[Ed,C1],1,3,0,0,["fu",A9P(AXn),"qd",A9P(A1q)],AHy,0,B,[YC],0,0,0,0,0,Uu,0,B,[If],0,3,0,0,0,O2,0,O7,[],0,0,0,0,["fu",A9P(AXn),"qd",A9P(A1q),"qg",A9P(A3Z)],PP,0,EA,[Jp],0,0,0,0,["fu",A9P(AXn),"qd",A9P(A1q),"i5",A9P(AXm),
"c1",A9O(ATu)],PE,"BackReferencedSingleSet",2,H9,[],0,0,[0,0,0],0,["cC",A9R(AQp),"cO",A9S(A6S),"gV",A9O(AO6)],RR,0,Bt,[],0,3,0,0,0]);
$rt_metadata([Ww,0,Bt,[],0,3,0,0,0,U4,0,Gw,[],0,3,0,0,0,RJ,0,Gw,[],0,3,0,0,0,ADq,0,B,[],0,3,0,0,0,AGb,0,B,[],3,3,0,0,0,VG,0,B,[T],0,3,0,0,["e",A9O(AW0)],VH,0,B,[EY],0,3,0,0,["gg",A9P(AU0)],ADF,0,B,[T],0,3,0,0,["e",A9O(AV2)],ADH,0,B,[EY],0,3,0,0,["gg",A9P(AXi)],LJ,0,F0,[],1,3,0,0,0,Sj,0,LJ,[],0,3,0,0,0,YD,0,B,[T],0,3,0,0,0,ADu,0,B,[MB],0,0,0,0,0,R3,0,B,[W],0,3,0,0,["g",A9P(A3a)],ADM,0,B,[T],0,3,0,0,["e",A9O(A0G)],AAx,0,B,[T],0,3,0,0,["e",A9O(ASA)],AAw,0,B,[T],0,3,0,0,["e",A9O(A23)],AA4,0,B,[T],0,3,0,0,["e",A9O(AUp)],Rb,
0,B,[EY],0,3,0,0,["gg",A9P(AXH)],G4,0,CD,[],12,0,0,To,0,AEo,0,B,[W],0,3,0,0,["g",A9P(AQA)],Uk,0,B,[W],0,3,0,0,["g",A9P(A2q)],Rz,0,B,[T],0,3,0,0,["e",A9O(A0F)],Sr,0,B,[W],0,3,0,0,["g",A9P(AOh)],ACu,0,B,[],32,0,0,A86,0,SB,0,B,[W],0,3,0,0,["g",A9P(AQr)],Pi,0,B,[T],0,3,0,0,["e",A9O(A03)],V$,0,B,[DQ],0,3,0,0,0,AB5,0,Ba,[],0,0,0,0,["o",A9P(AV6)],Xp,0,Ba,[],0,0,0,0,["o",A9P(AYs)],SS,0,Ba,[],0,0,0,0,["o",A9P(AN$)],SR,0,Ba,[],0,0,0,0,["o",A9P(A0e)],Wi,0,Ba,[],0,0,0,0,["o",A9P(ARn)],Y$,0,Ba,[],0,0,0,0,["o",A9P(A5v)],Qp,
0,Ba,[],0,0,0,0,["o",A9P(ATG)],AAr,0,Ba,[],0,0,0,0,["o",A9P(AUK)],Xl,0,Ba,[],0,0,0,0,["o",A9P(A6C)],Xn,0,Ba,[],0,0,0,0,["o",A9P(APx)],P6,0,Ba,[],0,0,0,0,["o",A9P(AWf)],Zn,0,Ba,[],0,0,0,0,["o",A9P(A15)],Zs,0,Ba,[],0,0,0,0,["o",A9P(A3C)],ACv,0,Ba,[],0,0,0,0,["o",A9P(A5i)],ABu,0,Ba,[],0,0,0,0,["o",A9P(AWE)],Px,0,Ba,[],0,0,0,0,["o",A9P(APp)],ML,0,Ba,[],0,0,0,0,["o",A9P(ATI)],AA2,0,ML,[],0,0,0,0,["o",A9P(A4G)],AE3,0,B,[BW],3,3,0,0,0,ZQ,0,B,[AE3],0,3,0,0,["JL",A9O(ASb)],AHF,0,B,[BW],3,3,0,0,0,ST,0,B,[W],0,3,0,0,["g",
A9P(A4Z)]]);
$rt_metadata([Q7,0,B,[JZ],0,3,0,0,["qO",A9O(APU),"oX",A9O(ANv),"op",A9P(AVd),"k0",A9P(ATx)],ACo,0,B,[W],0,3,0,0,0,ADg,0,B,[W],0,3,0,0,0,RF,0,B,[W],0,3,0,0,["g",A9P(APd)],Dd,0,B,[],3,3,0,AIs,0,CC,0,CD,[],12,3,0,AHQ,0,D$,0,B,[],3,3,0,AX5,0,ID,"DirectoryNode",25,C_,[],0,3,[0,0,0],0,["J",A9O(AWl)],ABc,0,B,[Lk],0,0,0,0,["se",A9Q(AOw),"AF",A9P(ARW),"yp",A9P(AW_),"vQ",A9P(AXh)],K0,"FileNode",25,C_,[],0,3,[0,0,0],0,["J",A9O(APj)],SI,0,B,[T],0,3,0,0,["e",A9O(ATz)],ACd,0,B,[T],0,3,0,0,["e",A9O(A1p)],TX,0,B,[DQ],0,3,0,
0,["bM",A9P(AOs)],RW,0,B,[T],0,3,0,0,["e",A9O(AOl)],AB3,0,B,[IM],0,0,0,0,["of",A9P(A5a),"pm",A9P(AVX),"o3",A9O(A5x)],AJ7,0,B,[],0,0,0,0,0,St,0,B,[T],0,3,0,0,["e",A9O(A5X)],AFw,0,B,[T],0,3,0,0,["e",A9O(A1o)],Re,0,B,[W],0,3,0,0,["g",A9P(A0B)],Rf,0,B,[W],0,3,0,0,["g",A9P(A6D)]]);
function $rt_array(cls,data){this.YH=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument sent to worker ","keydown","keyup","mousemove",
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
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","ClassL.java","ClassR.java","selectScene ","CodiconDemo","RenderTexture","CleartypeColors",
"ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FolderTransferDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","EditorWindowDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\n","\r","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","ns-resize","ew-resize","/Full file parsed in ",
"ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize",", z = ",", w = ","(this Collection)","JsArrayView{ buffer.byteLength = "," }"," -"," bold"," italic","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232",
"#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","",
"codicon.pixel.size = ","w = ","Window 1","Window ","- to worker ","- to edt ","folder","file","objects[","] = ","Project root","Select left...","Select right...","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new project view","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","new folder diff window","new file diff window","new editor window","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",
", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ","WorkerTest: \n  got ","  methodWithStringResult = ","charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ",
"trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","Open project...","Project view","Open project ...","request new model, file = ","request in progress ","Open ...","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","showOpenFilePicker -> ","dir: ","The last byte in dst "," onPastePlainText: ","Folder ","ClassFile ","Expected "," ints to write, but ",
" written","open file ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","openFile: ","dir = ","asyncWithDir","openFileEdt: ",
"dir on edt = ","Thread.currentThread() = ","Unexpected type: ","Unexpected ref node type: ","file = ","file.content.length = ","  sub dir: ","  file: ","complete","dir[",", list.size = ","file[","asyncWithDir complete, size = ","fSet","Is","In","main","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet","^ ","range:","CompositeRangeSet:  <nonsurrogate> ",
" <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit",
"javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali",
"Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts",
"CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic",
"GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables",
"HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk",
"So","Pi","Pf","readClipboardText error: ","CONCURRENT","UNORDERED","IDENTITY_FINISH","Current Version: ","Last Parsed Version: ","openDirectory: "," - project view","DEF","DECL","open dir = "," ↔ ","writeClipboardText error: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","opening file ... ","folderOpened ","readDirectory: ","Error fetching file "]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AGd(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CY=Long_add;var J8=Long_sub;var Cl=Long_mul;var AIc=Long_div;var AXK=Long_rem;var A7p=Long_or;var Dj=Long_and;var BbV=Long_xor;var H8=Long_shl;var A8P=Long_shr;var Gt=Long_shru;var BbW=Long_compare;var I2=Long_eq;var BbX=Long_ne;var A7m=Long_lt;var APR=Long_le;var BbY=Long_gt;var A7l=Long_ge;var BbZ=Long_not;var A80=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A81);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ACD.prototype;c.f=c.bl;c=ACE.prototype;c.f=c.bl;c=ACC.prototype;c.f=c.bl;c=XJ.prototype;c.f=c.bl;c=ALe.prototype;c.get=c.MU;Object.defineProperty(c,"length",{get:c.Ty});c=AJS.prototype;c.createEntityReference=c.PA;c.getElementById=c.RY;c.createTextNode=c.RG;c.hasChildNodes=c.QE;c.querySelectorAll=c.Ph;c.removeChild=c.Tk;c.cloneNode=c.Hv;c.createComment=c.Uy;c.insertBefore=c.PU;c.getElementsByTagNameNS=c.Tw;c.hasAttributes=c.Kb;c.normalize=c.Ns;c.hasChildNodesJS=c.Nk;c.getElementsByTagName
=c.MT;c.appendChild=c.On;c.createAttributeNS=c.Si;c.dispatchEvent=c.M8;c.replaceChild=c.H0;c.createElementNS=c.I8;c.createCDATASection=c.L9;c.querySelector=c.Ka;c.createElement=c.SQ;c.isSupported=c.To;c.importNode=c.P4;c.removeEventListener=c.I4;c.createAttribute=c.M9;c.createDocumentFragment=c.GR;c.createProcessingInstruction=c.Pu;c.addEventListener=c.Lq;Object.defineProperty(c,"nodeName",{get:c.Om});Object.defineProperty(c,"documentElement",{get:c.JQ});Object.defineProperty(c,"childNodes",{get:c.LR});Object.defineProperty(c,
"prefix",{get:c.P$,set:c.UJ});Object.defineProperty(c,"implementation",{get:c.Mv});Object.defineProperty(c,"textContent",{get:c.UD,set:c.RD});Object.defineProperty(c,"parentNode",{get:c.RV});Object.defineProperty(c,"nextSibling",{get:c.JF});Object.defineProperty(c,"nodeType",{get:c.S5});Object.defineProperty(c,"doctype",{get:c.QU});Object.defineProperty(c,"localName",{get:c.TQ});Object.defineProperty(c,"nodeValue",{get:c.Jn,set:c.Uo});Object.defineProperty(c,"firstChild",{get:c.M3});Object.defineProperty(c,
"lastChild",{get:c.Ly});Object.defineProperty(c,"previousSibling",{get:c.N_});Object.defineProperty(c,"namespaceURI",{get:c.Ig});Object.defineProperty(c,"attributes",{get:c.Qf});Object.defineProperty(c,"ownerDocument",{get:c.In});c=P7.prototype;c.f=c.bl;c=AKl.prototype;c.removeEventListener=c.Ip;c.dispatchEvent=c.PZ;c.addEventListener=c.K0;c=Vj.prototype;c.onAnimationFrame=c.Kd;c=Vi.prototype;c.f=c.CQ;c=Vg.prototype;c.handleEvent=c.cH;c=ABp.prototype;c.f=c.bl;c=AEb.prototype;c.handleEvent=c.cH;c=AEc.prototype;c.handleEvent
=c.cH;c=AEd.prototype;c.handleEvent=c.cH;c=AEe.prototype;c.handleEvent=c.cH;c=AEf.prototype;c.handleEvent=c.cH;c=AEg.prototype;c.handleEvent=c.cH;c=AEh.prototype;c.handleEvent=c.cH;c=AEi.prototype;c.handleEvent=c.cH;c=AEj.prototype;c.handleEvent=c.cH;c=AEk.prototype;c.handleEvent=c.cH;c=WR.prototype;c.handleEvent=c.cH;c=WS.prototype;c.handleEvent=c.cH;c=WT.prototype;c.handleEvent=c.cH;c=WU.prototype;c.handleEvent=c.cH;c=AC8.prototype;c.handleEvent=c.cH;c=AFc.prototype;c.f=c.bl;c=AFd.prototype;c.f=c.bl;c=XR.prototype;c.f
=c.bl;c=XQ.prototype;c.f=c.bl;c=XO.prototype;c.f=c.bl;c=XN.prototype;c.f=c.bl;c=P0.prototype;c.accept=c.Nd;c=VK.prototype;c.f=c.bl;c=Pq.prototype;c.f=c.bl;c=Ps.prototype;c.f=c.bl;c=Pr.prototype;c.f=c.bl;c=Zf.prototype;c.f=c.CQ;c=Zd.prototype;c.f=c.CQ;c=ABg.prototype;c.f=c.bl;c=ADS.prototype;c.f=c.bl;c=AE8.prototype;c.f=c.bl;c=AE7.prototype;c.f=c.bl;c=AEu.prototype;c.f=c.bl;c=Pp.prototype;c.f=c.bl;c=Ul.prototype;c.handleEvent=c.cH;c=Wb.prototype;c.f=c.bl;c=Wc.prototype;c.f=c.bl;c=AEU.prototype;c.f=c.bl;c=AET.prototype;c.f
=c.bl;c=ADL.prototype;c.f=c.bl;c=TE.prototype;c.f=c.bl;c=ZQ.prototype;c.onTimer=c.JL;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);