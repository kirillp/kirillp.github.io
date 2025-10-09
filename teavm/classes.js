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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.d3=f;}
function $rt_cls(cls){return Mo(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return EC(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.be.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AWC(t);}
function $rt_throwableCause(t){return A48(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A9h());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IF();}
function $rt_setThread(t){return AV3(t);}
function $rt_createException(message){return A9i(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A9j());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BG=$rt_compare;var A9k=$rt_nullCheck;var H=$rt_cls;var K=$rt_createArray;var Do=$rt_isInstance;var A9l=$rt_nativeThread;var A9m=$rt_suspending;var A9n=$rt_resuming;var A9o=$rt_invalidPointer;var C=$rt_s;var Bg=$rt_eraseClinit;var U=$rt_imul;var Kk=$rt_wrapException;var A9p=$rt_checkBounds;var A9q=$rt_checkUpperBound;var A9r=$rt_checkLowerBound;var A9s=$rt_wrapFunction0;var A9t=$rt_wrapFunction1;var A9u=$rt_wrapFunction2;var A9v=$rt_wrapFunction3;var A9w=$rt_wrapFunction4;var G=$rt_classWithoutFields;var BA
=$rt_createArrayFromData;var AN9=$rt_createCharArrayFromData;var A7Q=$rt_createByteArrayFromData;var A8k=$rt_createShortArrayFromData;var Cf=$rt_createIntArrayFromData;var A9x=$rt_createBooleanArrayFromData;var A9y=$rt_createFloatArrayFromData;var A9z=$rt_createDoubleArrayFromData;var AA3=$rt_createLongArrayFromData;var A9g=$rt_createBooleanArray;var CG=$rt_createByteArray;var A9A=$rt_createShortArray;var B2=$rt_createCharArray;var BC=$rt_createIntArray;var A9B=$rt_createLongArray;var AIK=$rt_createFloatArray;var AKA
=$rt_createDoubleArray;var BG=$rt_compare;var A9C=$rt_castToClass;var A9D=$rt_castToInterface;var A9E=Long_toNumber;var Bh=Long_fromInt;var A9F=Long_fromNumber;var D=Long_create;var CY=Long_ZERO;var A9G=Long_hi;var DV=Long_lo;
function B(){this.$id$=0;}
function A9H(){var a=new B();Pu(a);return a;}
function Pu(a){}
function Bv(a){return Mo(a.constructor);}
function A0E(a){return Hz(a);}
function AKG(a,b){return a!==b?0:1;}
function AJo(a){var b,c;b=P3(Hz(a));c=J();F(F(c,C(0)),b);return I(c);}
function Hz(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKv(a){var b,c,d;if(!Do(a,DC)&&a.constructor.$meta.item===null){b=new MQ;W(b);L(b);}b=AQI(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Uj(){var a=this;B.call(a);a.G6=0;a.tq=null;}
function A8V(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;APE();AMZ();AKu();ALp();AME();ANP();ANg();AKF();AIU();AJ1();AL9();APg();AOe();AKI();AMX();AK4();APf();ALR();ALd();AOn();ANU();AN2();APS();ANt();ANe();ANw();AJ5();AJR();APn();AOP();AOW();APj();AL7();ALe();AM7();AMB();c=(AI6()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))ABh(C(1),C(2));else{d=new Uj;Bs(d);e=new AE$;e.Fs=d;f=new SU;c="teavm/worker.js";g=new Vf;Bv(H(Nf));A9I=g;g=new $rt_globals.Array();h
=0;while(h<6){i=new $rt_globals.Worker(c);j=new YH;j.Gc=i;j.Gb=g;j.Ge=6;j.Gd=e;j.F_=f;k=BB(j,"f");i.onmessage=k;j=new YG;j.E3=f;k=BB(j,"f");i.onerror=k;h=h+1|0;}l=BA(MW,[Fn(C(3),C(4),300),Fn(C(5),C(6),300),Fn(C(7),C(4),400),Fn(C(8),C(6),400),Fn(C(9),C(4),600),Fn(C(10),C(6),600),Fn(C(11),C(4),700),Fn(C(12),C(6),700)]);m=K(MW,1);m.data[0]=AW8(C(13),FK(C(14),C(15)),C(4),400);b=(MT(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.x7;f=c.wT;i=J();Bj(F(F(i,C(16)),f),41);i=I(i);f=c.wQ;o=c.vp;c
=A1E($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);Bs(d);c=new AE_;c.Gj=d;g=new AE9;e.then(BB(c,"f"),BB(g,"f"));}}
function ALw(b){var c,d,e,f,g,h,i,j;c=new AEh;d="canvasDiv";e=new UH;f=new Mz;Pu(f);e.sa=f;f=new Mz;Pu(f);e.r_=f;f=A4$();e.vR=f;Bs(f);g=new AD9;g.EV=f;e.G8=g;e.s3=b;h=b.length;i=0;while(i<h){f=e.s3[i];j=new AEx;j.B5=e;j.B4=i;g=BB(j,"f");f.onmessage=g;f=b[i];g=AOm();f.postMessage(g);i=i+1|0;}e.j4=0;e.r4=BC(h);b=new WN;b.yL=c;c.xM=b;b=new WO;b.Bv=c;c.q6=b;f=new WK;f.F0=c;c.zJ=new $rt_globals.ResizeObserver(BB(f,"f"));b=new WM;b.Fp=c;c.Bt=b;c.nt=1;c.rC=d;c.cS=e;b=AI6();e=0;b.tabIndex=e;g=b.style;g.setProperty("width",
"100%");g.setProperty("height","100%");g.setProperty("outline","none");c.ez=b;f=AVG(!!0,!!0,!!1,!!1);f=b.getContext("webgl2",f);if(f!==null){if(c.ez.parentNode!==null)T(B0(),C(17));else{if((d?1:0)?1:0)c.rC=d;b=EK();d=c.rC;e=b.getElementById(d);if(e!==null){b=c.ez;e.appendChild(b);Mi(c);}}c.sC=A8K(c.ez,c.q6);b=new W6;d=c.q6;APD(b,f,new AFH,1,2.25,0.625);b.Jz=new AFF;b.IV=d;c.gJ=b;AWl(c.zJ,c.ez,AZa());e=$rt_globals.window;d=c.Bt;e.addEventListener("resize",BB(d,"handleEvent"));}b=c.gJ;if(b!==null){d=new Qj;e=
c.sC.cr;d.z=b;d.j=e;d.bt=c;e=$rt_str($rt_globals.window.location.hash);c.h5=Bf(C(18),e)?A7R(d):!Bf(C(19),e)&&!C_(e)?(A5W(C_(e)?C(20):C0(e,1))).G(d):A8F(d);Mi(c);}if(!(c.gJ===null?0:1))ABh(C(1),C(21));ALz(c);}
var ZX=G(0);
var ZE=G(0);
function AG1(){var a=this;B.call(a);a.pg=null;a.zL=null;a.c9=null;}
function Mo(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AG1;c.c9=b;d=c;b.classObject=d;}return c;}
function AUg(a){var b,c;b=Hz(a);c=J();P(F(c,C(22)),b);return I(c);}
function Gx(a){if(a.pg===null)a.pg=ALM(a.c9);return a.pg;}
function Gr(a){var b,c,d,e;b=a.zL;if(b===null){if(AQb(a.c9)===null?0:1){b=Gr(E_(a));c=J();F(F(c,b),C(23));b=I(c);}else{b=a.c9.$meta.enclosingClass;if((b===null?null:Mo(b))!==null){b=$rt_str(a.c9.$meta.simpleName);if(b===null)b=C(20);}else{b=ALM(a.c9);d=LW(b,36);if(d==(-1)){e=LW(b,46);if(e!=(-1))b=C0(b,e+1|0);}else{b=C0(b,d+1|0);if(Be(b,0)>=48&&Be(b,0)<=57)b=C(20);}}}a.zL=b;}return b;}
function I8(a){return a.c9.$meta.primitive?1:0;}
function E_(a){return Mo(AQb(a.c9));}
function WQ(a){return Mo(a.c9.$meta.superclass);}
var AND=G();
function BB(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fs(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ANm=G();
function AQI(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AEZ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AEZ(d[e],c))return 1;e=e+1|0;}return 0;}
function AVg(b){var c='$$enumConstants$$';Hi[c]=AQW;Eu[c]=AQC;Il[c]=AUk;Cq[c]=AKa;H0[c]=AWp;Cu[c]=AOu;GL[c]=AM5;EG[c]=AY0;Cz[c]=APC;DO[c]=A5K;AVg=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return AVg(b);}
function AQb(b){return b.$meta.item;}
function ALM(b){return $rt_str(b.$meta.name);}
function G9(){var a=this;B.call(a);a.kw=null;a.pD=null;a.mC=0;a.m2=0;}
function A9J(){var a=new G9();W(a);return a;}
function A9K(a){var b=new G9();Bd(b,a);return b;}
function W(a){a.mC=1;a.m2=1;}
function Bd(a,b){a.mC=1;a.m2=1;a.kw=b;}
function A1t(a){return a;}
function AWC(a){return a.kw;}
function A48(a){var b;b=a.pD;if(b===a)b=null;return b;}
var FX=G(G9);
function A9L(){var a=new FX();ALm(a);return a;}
function ALm(a){W(a);}
var Bt=G(FX);
function A9M(){var a=new Bt();AIV(a);return a;}
function A9i(a){var b=new Bt();A6o(b,a);return b;}
function AIV(a){W(a);}
function A6o(a,b){Bd(a,b);}
var ADz=G(Bt);
var CO=G(0);
var CB=G(0);
var KQ=G(0);
function BH(){var a=this;B.call(a);a.be=null;a.lJ=0;}
var A9N=null;var A9O=null;var A9P=null;function Ew(){Ew=Bg(BH);AXz();}
function ATi(){var a=new BH();AIS(a);return a;}
function EC(a){var b=new BH();JU(b,a);return b;}
function F5(a,b,c){var d=new BH();P8(d,a,b,c);return d;}
function AIS(a){Ew();a.be=A9N;}
function JU(a,b){Ew();P8(a,b,0,b.data.length);}
function P8(a,b,c,d){var e;Ew();e=B2(d);a.be=e;BE(b,c,e,0,d);}
function Ni(b){var c;Ew();c=ATi();c.be=b;return c;}
function Be(a,b){var c,d;if(b>=0){c=a.be.data;if(b<c.length)return c[b];}d=new KV;W(d);L(d);}
function N(a){return a.be.data.length;}
function C_(a){return a.be.data.length?0:1;}
function SX(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=N(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){BE(a.be,b,d,e,c);return;}}g=new BU;W(g);L(g);}
function PO(a,b){var c,d,e;if(a===b)return 0;c=Bc(N(a),N(b));d=0;while(true){if(d>=c)return N(a)-N(b)|0;e=Be(a,d)-Be(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AOr(a,b){var c,d,e,f;if(a===b)return 1;a:{c=0;if((c+N(b)|0)>N(a))c=0;else{d=0;while(d<N(b)){e=Be(b,d);f=c+1|0;if(e!=Be(a,c)){c=0;break a;}d=d+1|0;c=f;}c=1;}}return c;}
function CW(a,b){var c,d,e,f;if(a===b)return 1;if(N(b)>N(a))return 0;c=0;d=N(a)-N(b)|0;while(d<N(a)){e=Be(a,d);f=c+1|0;if(e!=Be(b,c))return 0;d=d+1|0;c=f;}return 1;}
function O4(a,b,c){var d,e,f,g,h;d=Z(0,c);if(b<65536){e=b&65535;while(true){f=a.be.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Ia(b);h=Hr(b);while(true){f=a.be.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function LW(a,b){var c,d,e,f;a:{c=Bc(N(a)-1|0,N(a)-1|0);if(b<65536){b=b&65535;while(true){if(c<0){c=(-1);break a;}if(a.be.data[c]==b)break;c=c+(-1)|0;}}else{d=Ia(b);e=Hr(b);while(c>=1){f=a.be.data;if(f[c]==e){b=c-1|0;if(f[b]==d){c=b;break a;}}c=c+(-1)|0;}c=(-1);}}return c;}
function A36(a,b){var c,d,e;c=Z(0,0);d=N(a)-N(b)|0;a:{b:while(true){if(c>d){c=(-1);break a;}e=0;while(true){if(e>=N(b))break b;if(Be(a,c+e|0)!=Be(b,e))break;e=e+1|0;}c=c+1|0;}}return c;}
function AJ8(a,b){var c,d;c=Bc(N(a),N(a)-N(b)|0);a:{b:while(true){if(c<0){c=(-1);break a;}d=0;while(true){if(d>=N(b))break b;if(Be(a,c+d|0)!=Be(b,d))break;d=d+1|0;}c=c+(-1)|0;}}return c;}
function Cv(a,b,c){var d,e;d=BG(b,c);if(d>0){e=new BU;W(e);L(e);}if(!d){Ew();return A9O;}if(!b&&c==N(a))return a;return F5(a.be,b,c-b|0);}
function C0(a,b){return Cv(a,b,N(a));}
function FK(a,b){var c,d,e,f,g,h;if(C_(b))return a;if(C_(a))return b;c=B2(N(a)+N(b)|0);d=c.data;e=0;f=0;while(f<N(a)){g=e+1|0;d[e]=Be(a,f);f=f+1|0;e=g;}g=0;while(g<N(b)){h=e+1|0;d[e]=Be(b,g);g=g+1|0;e=h;}return Ni(c);}
function ADJ(a){var b,c;b=0;c=N(a)-1|0;a:{while(b<=c){if(Be(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Be(a,c)<=32){c=c+(-1)|0;}return Cv(a,b,c+1|0);}
function ARM(a){return a;}
function H7(a){var b,c,d,e,f;b=a.be.data;c=B2(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BL(b){Ew();return b===null?C(24):b.I();}
function Dy(b){var c,d;Ew();c=new BH;d=B2(1);d.data[0]=b;JU(c,d);return c;}
function GB(b){Ew();return I(P(J(),b));}
function Bf(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BH))return 0;c=b;if(N(c)!=N(a))return 0;d=0;while(d<N(c)){if(Be(a,d)!=Be(c,d))return 0;d=d+1|0;}return 1;}
function Kt(a){var b,c,d,e;a:{if(!a.lJ){b=a.be.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.lJ=(31*a.lJ|0)+e|0;d=d+1|0;}}}return a.lJ;}
function Yz(b,c){var d,e,$$je;Ew();d=new AGC;e=Z1();d.lN=J();d.Kl=e;YE(d);a:{try{if(c===null)c=K(B,1);ANJ(A7K(d,d.lN,e,b,c));break a;}catch($$e){$$je=Kk($$e);if($$je instanceof Hk){b=$$je;}else{throw $$e;}}d.Lw=b;}YE(d);return I(d.lN);}
function ASZ(a,b){return PO(a,b);}
function AXz(){A9N=B2(0);A9O=ATi();A9P=new Vh;}
var FQ=G(G9);
var ID=G(FQ);
var AN6=G(ID);
var C$=G();
function E6(){C$.call(this);this.O=0;}
var A9Q=null;var A9R=null;function A5R(a){var b=new E6();AJB(b,a);return b;}
function AJB(a,b){a.O=b;}
function P3(b){return K6(b,4);}
function Pe(b){return (AAd(A9c(20),b,10)).I();}
function Ck(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A9R===null){A9R=K(E6,256);c=0;while(true){d=A9R.data;if(c>=d.length)break a;d[c]=A5R(c-128|0);c=c+1|0;}}}return A9R.data[b+128|0];}return A5R(b);}
function AZI(a){return a.O;}
function AXR(a){return Pe(a.O);}
function AMM(a){return a.O;}
function A6X(a,b){if(a===b)return 1;return b instanceof E6&&b.O==a.O?1:0;}
function A2R(a,b){b=b;return BG(a.O,b.O);}
function APE(){A9Q=H($rt_intcls());}
function LO(){var a=this;B.call(a);a.A=null;a.J=0;}
function A9c(a){var b=new LO();IM(b,a);return b;}
function IM(a,b){a.A=B2(b);}
function AAd(a,b,c){return AOh(a,a.J,b,c);}
function AOh(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ct(a,b,b+1|0);else{Ct(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=Fj(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=U(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ct(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=Fj($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AO0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Ct(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ct(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ct(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ct(a,b,b+8|0);d=b;}else{Ct(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A9S;AOQ(c,f);d=f.pn;g=f.pb;h=f.uf;i=1;j=1;if(h)j=2;k=9;l=AW9(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Z(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ct(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.A.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.A.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.A.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.A.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ANL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Ct(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ct(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ct(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ct(a,b,b+8|0);d=b;}else{Ct(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A9T;AKi(c,f);g=f.pR;h=f.oY;i=f.t0;j=1;k=1;if(i)k=2;l=18;m=AVU(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Z(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ct(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.A.data;b=k+1|0;e[k]
=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ASz(p,CY))d=0;else{d=DV(ALx(g,p));g=AY8(g,p);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=ALx(p,Bh(10));q=q+1|0;}if(h){e=a.A.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AW9(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AVU(b){var c,d,e,f,g;c=Bh(1);d=0;e=16;f=A9U.data;g=f.length-1|0;while(g>=0){if(Er(AY8(b,Cg(c,f[g])),CY)){d=d|e;c=Cg(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function AAQ(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.A=IP(a.A,d);}
function I(a){return F5(a.A,0,a.J);}
function Ct(a,b,c){var d,e,f,g;d=a.J;e=d-b|0;a.th((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.J=a.J+(c-b|0)|0;}
var Ou=G(0);
var Km=G(LO);
function J(){var a=new Km();A6P(a);return a;}
function A7d(a){var b=new Km();AY_(b,a);return b;}
function A6P(a){IM(a,16);}
function AY_(a,b){var c,d;a.A=B2(N(b));c=0;while(true){d=a.A.data;if(c>=d.length)break;d[c]=Be(b,c);c=c+1|0;}a.J=N(b);}
function F(a,b){Nk(a,a.J,b===null?C(24):b.I());return a;}
function By(a,b){Nk(a,a.J,b);return a;}
function P(a,b){AAd(a,b,10);return a;}
function Os(a,b){var c,d,e,f,g,h,i,j;c=a.J;d=1;if(A7E(b,CY)){d=0;b=A3r(b);}a:{if(DP(b,Bh(10))<0){if(d)Ct(a,c,c+1|0);else{Ct(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=Fj(DV(b),10);}else{g=1;h=Bh(1);i=Dn(Bh(-1),Bh(10));b:{while(true){j=Cg(h,Bh(10));if(DP(j,b)>0){j=h;break b;}g=g+1|0;if(DP(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ct(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(Er(j,CY))break a;e=a.A.data;c=f+1|0;e[f]=Fj(DV((Dn(b,j))),10);b=AM2(b,j);j=Dn(j,Bh(10));f=c;}}}return a;}
function Dj(a,b){AO0(a,a.J,b);return a;}
function HR(a,b){ANL(a,a.J,b);return a;}
function Bj(a,b){var c;c=a.J;Ct(a,c,c+1|0);a.A.data[c]=b;return a;}
function Et(a,b){var c;c=b.dy();AFv(a,a.J,b,0,c);return a;}
function FG(a,b){Nk(a,a.J,!b?C(25):C(26));return a;}
function AFv(a,b,c,d,e){var f,g;if(d<=e&&e<=c.dy()&&d>=0){Ct(a,b,(b+e|0)-d|0);while(d<e){f=a.A.data;g=b+1|0;f[b]=c.FF(d);d=d+1|0;b=g;}return a;}c=new BU;W(c);L(c);}
function A5Z(a,b){var c;if(b>=0&&b<a.J)return a.A.data[b];c=new BU;W(c);L(c);}
function ANf(a){return a.J;}
function GS(a){return I(a);}
function AT4(a,b){AAQ(a,b);}
function Nk(a,b,c){var d,e,f;if(b>=0&&b<=a.J){a:{if(c===null)c=C(24);else if(C_(c))break a;AAQ(a,a.J+N(c)|0);d=a.J-1|0;while(d>=b){a.A.data[d+N(c)|0]=a.A.data[d];d=d+(-1)|0;}a.J=a.J+N(c)|0;d=0;while(d<N(c)){e=a.A.data;f=b+1|0;e[b]=Be(c,d);d=d+1|0;b=f;}}return a;}c=new KV;W(c);L(c);}
var Fh=G(ID);
var APa=G(Fh);
function A9V(a){var b=new APa();ARQ(b,a);return b;}
function ARQ(a,b){Bd(a,b);}
var AN0=G(Fh);
function A9W(a){var b=new AN0();AR1(b,a);return b;}
function AR1(a,b){Bd(a,b);}
var AEX=G(0);
var De=G(0);
function T9(b){if(b!==null)V8(b);return null;}
function BI(b,c){if(b!==null)b.bx();return c;}
var ABb=G(0);
function KD(){var a=this;B.call(a);a.ng=0;a.qg=0;a.pB=0;}
var A9X=0;function Em(a){A9X=A9X-1|0;}
function HJ(a,b,c){K$(a,ANH(b,c,400,0));}
function GK(a,b,c,d){Cm(a,b);return Jg(a,c,d);}
function TS(a,b){return Jg(a,b,0.46875);}
function Jg(a,b,c){return D5(a,b)+c+0.5|0;}
function ADt(){var a=this;KD.call(a);a.kN=null;a.dG=null;a.Bi=null;}
function JQ(a){var b,c,d;b=a.dG;c=a.qg;d=a.pB;b.clearRect(0.0,0.0,c,d);}
function Cm(a,b){K$(a,b.tQ);}
function K$(a,b){var c;if(a.Bi!==b){c=a.dG;a.Bi=b;c.font=b;}}
function ANH(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BX(a,b,c,d){var e,f,g;e=a.dG;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function D5(a,b){var c;c=$rt_ustr(b);return a.dG.measureText(c).width;}
function Kw(a,b,c,d){var e,f;e=a.dG;f=$rt_ustr(EC(AN9([35,Id(b/16|0),Id(b%16|0),Id(c/16|0),Id(c%16|0),Id(d/16|0),Id(d%16|0)])));e.fillStyle=f;}
function AZ2(){return {alpha:false};}
var AM0=G();
var APK=G();
function BN(b,c){if(b===c)return 1;return b!==null?b.U(c):c!==null?0:1;}
function Bs(b){if(b!==null)return b;b=new EW;Bd(b,C(20));L(b);}
var BV=G(0);
function ANW(b){return b;}
var B8=G(0);
function AE$(){B.call(this);this.Fs=null;}
function A68(a,b){var c;c=a.Fs;c.tq=b;if(c.G6)ALw(b);}
var ALa=G();
var Yo=G(0);
var AKW=G();
function AY$(a,b){a.Ua(b);}
function A1o(a,b,c){a.Od(b,c);}
var AI2=G(0);
function Fn(b,c,d){return AW8(C(27),FK(C(14),b),c,d);}
var APy=G(0);
var ALI=G(0);
function MT(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=B_(b,f+g|0);BE(c,0,d,f,g);return d;}
function Ma(b,c,d){BE(b,c,d,0,d.data.length);return d;}
function AC5(b,c,d){var e;if(c>0)BE(b,0,d,0,c);e=d.data.length;if(c<e)BE(b,c+1|0,d,c,e-c|0);return d;}
function AJ4(b,c,d,e){var f;if(c>0)BE(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)BE(b,d,e,c,f-d|0);}return e;}
function ALo(b,c){var d,e;d=b.data.length;e=B_(b,d+1|0);e.data[d]=c;return e;}
function Cx(b){var c;c=new TP;c.mf=b;return c;}
function AJx(b,c){if(b.data.length!=c)b=B_(b,c);return b;}
function W3(b,c,d){var e;e=c.data.length;if(e==d)c=B_(c,e*2|0);c.data[d]=b;return c;}
function AF4(b,c,d){var e;e=c.data.length;if(e==d)c=APW(c,e*2|0);c.data[d]=b;return c;}
function Vt(b,c,d){var e,f,g;e=c.data.length;f=BC(e+1|0);g=f.data;BE(c,0,f,0,d);g[d]=b;BE(c,d,f,d+1|0,e-d|0);return f;}
function Kg(b,c){var d,e;d=b.data.length;e=BC(d-1|0);if(c>0)BE(b,0,e,0,c);if((c-1|0)<d)BE(b,c+1|0,e,c,(d-c|0)-1|0);return e;}
function ANT(b,c,d){var e;b=b.data;e=b[c];b[c]=b[d];b[d]=e;}
function AEk(b,c,d){var e;b=b.data;e=b[c];b[c]=b[d];b[d]=e;}
function MW(){var a=this;B.call(a);a.x7=null;a.wT=null;a.wQ=null;a.vp=0;}
function AW8(a,b,c,d){var e=new MW();AWt(e,a,b,c,d);return e;}
function AWt(a,b,c,d,e){a.x7=b;a.wT=c;a.wQ=d;a.vp=e;}
var AJu=G();
function A1E(b,c){return {style:b,weight:c};}
function AE_(){B.call(this);this.Gj=null;}
function AQs(a,b){var c,d,e;c=a.Gj;d=0;while(d<b.length){e=b[d];(EK()).fonts.add(e);d=d+1|0;}c.G6=1;b=c.tq;if(b!==null)ALw(b);}
var AE9=G();
function A5_(a,b){$rt_globals.console.info("font load error "+b);}
var Mu=G();
var A9Y=null;var A9Z=null;function X(){if(A9Y===null)A9Y=AU5(A90,0);return A9Y;}
function B0(){if(A9Z===null)A9Z=AU5(A91,0);return A9Z;}
function A7T(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Pi(b)&&(e+f|0)<=Pi(d)){a:{b:{if(b!==d){g=E_(Bv(b));h=E_(Bv(d));if(g!==null&&h!==null){if(g===h)break b;if(!I8(g)&&!I8(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.c9;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AEZ(n.constructor,o)?1:0)){OF(b,c,d,e,j);b=new JF;W(b);L(b);}j=j+1|0;k=m;}OF(b,c,d,e,f);return;}if(!I8(g))break a;if(I8(h))break b;else break a;}b=new JF;W(b);L(b);}}OF(b,c,
d,e,f);return;}b=new JF;W(b);L(b);}b=new BU;W(b);L(b);}d=new EW;Bd(d,C(28));L(d);}
function BE(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Pi(b)&&(e+f|0)<=Pi(d)){OF(b,c,d,e,f);return;}b=new BU;W(b);L(b);}
function OF(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function DQ(){return Long_fromNumber(new Date().getTime());}
function ALr(){return A9F($rt_globals.performance.now()*1000000.0);}
var ALH=G();
function K6(b,c){var d,e,f,g,h,i,j,k;if(!b)return C(29);d=1<<c;e=d-1|0;if(!b)f=32;else{g=0;f=b>>>16|0;if(f)g=16;else f=b;h=f>>>8|0;if(!h)h=f;else g=g|8;f=h>>>4|0;if(!f)f=h;else g=g|4;h=f>>>2|0;if(!h)h=f;else g=g|2;if(h>>>1|0)g=g|1;f=(32-g|0)-1|0;}i=(((32-f|0)+c|0)-1|0)/c|0;j=B2(i);k=j.data;f=U(i-1|0,c);g=0;while(f>=0){h=g+1|0;k[g]=Fj((b>>>f|0)&e,d);f=f-c|0;g=h;}return EC(j);}
var ANR=G();
function ABh(b,c){var d,e,f;d=(EK()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EK()).getElementById($rt_ustr(b)).appendChild(d);}
function AI6(){return (EK()).createElement("canvas");}
function AMe(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AVG(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
function AXs(b,c){return new $rt_globals.Error(b,{cause:c});}
var AQo=G();
var SU=G();
function A6u(a,b){var c;c=new Bt;Bd(c,$rt_str(b.message));L(c);}
var ALU=G();
function Fd(b){return $rt_str(b);}
var ANa=G();
function IP(b,c){var d,e,f,g;b=b.data;d=B2(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function APW(b,c){var d,e,f,g;b=b.data;d=CG(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JO(b,c){var d,e,f,g;b=b.data;d=BC(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function B_(b,c){var d,e,f,g;d=b.data;e=MB(E_(Bv(b)),c);f=Bc(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AOl(b,c,d){var e,f,g,h;e=BC(d-c|0);f=e.data;g=c;while(g<d){h=b.data;f[g-c|0]=h[g];g=g+1|0;}return e;}
function AL4(b,c,d,e){var f,g,h,i,j,k,l,m;f=MB(E_(e),d-c|0);g=c;while(g<d){h=b.data;i=g-c|0;j=E_(e);k=h[g];if(k!==null&&!AEZ((Bv(k)).c9,j.c9)){e=new ADz;k=Gx(Bv(k));l=Gx(j);m=J();F(F(F(m,k),C(30)),l);Bd(e,I(m));L(e);}f.data[i]=k;g=g+1|0;}return f;}
function AJy(b){var c,d,e;if(b===null)return C(24);c=J();By(c,C(31));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)By(c,C(32));F(c,e[d]);d=d+1|0;}By(c,C(33));return I(c);}
function ALh(b){var c,d,e;if(b===null)return C(24);c=J();By(c,C(31));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)By(c,C(32));P(c,e[d]);d=d+1|0;}By(c,C(33));return I(c);}
function AWH(b){var c,d,e;if(b===null)return C(24);c=J();By(c,C(31));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)By(c,C(32));Dj(c,e[d]);d=d+1|0;}By(c,C(33));return I(c);}
function AYF(b){var c,d,e;if(b===null)return C(24);c=J();By(c,C(31));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)By(c,C(32));HR(c,e[d]);d=d+1|0;}By(c,C(33));return I(c);}
function RS(b,c,d,e){var f,g;if(c>d){e=new Bq;W(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AMC(b,c){RS(b,0,b.data.length,c);}
function LE(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A92;e=K(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bc(j,h+f|0);l=h+(2*f|0)|0;m=Bc(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.ta(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function DB(b,c){return AFd(b,0,b.data.length,c);}
function AFd(b,c,d,e){var f,g,h,i,j;f=BG(c,d);if(f>0){g=new Bq;W(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function ALZ(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;f=BG(d,e);if(f>0){g=new Bq;W(g);L(g);}a:{if(!f)e=(-1);else{f=e-1|0;while(true){e=(d+f|0)/2|0;h=BG(b[e],c);if(!h)break;if(h<=0){d=e+1|0;if(d>f){e=( -e|0)-2|0;break a;}}else{f=e-1|0;if(f<d){e=( -e|0)-1|0;break a;}}}}}return e;}
function AII(b,c){var d,e,f;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;if(b[f]!=c[f])break;e=e+1|0;}}return e>=0?0:1;}}return 0;}
function AIN(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+e[d]|0;d=d+1|0;}return c;}
var AGu=G(0);
var AOo=G();
function A11(a,b){return a.Vq(b);}
function AUz(a){return a.Zm();}
var AKh=G();
var Gk=G(0);
var Vh=G();
var BU=G(Bt);
var AOU=G();
function Pi(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A93());}return b.data.length;}
function MB(b,c){if(b===null){b=new EW;W(b);L(b);}if(b===H($rt_voidcls())){b=new Bq;W(b);L(b);}if(c>=0)return AXZ(b.c9,c);b=new AID;W(b);L(b);}
function AXZ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var EW=G(Bt);
var JF=G(Bt);
function FW(){B.call(this);this.o_=0;}
var A94=null;var A95=null;var A96=null;var A97=null;function AYl(a){var b=new FW();AJP(b,a);return b;}
function AJP(a,b){a.o_=b;}
function Rj(b){var c,d;c=A96.data;if(b>=c.length)return AYl(b);d=c[b];if(d===null){d=AYl(b);A96.data[b]=d;}return d;}
function NK(b){return (b&64512)!=55296?0:1;}
function O1(b){return (b&64512)!=56320?0:1;}
function AHZ(b){return !NK(b)&&!O1(b)?0:1;}
function Ym(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Ia(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Hr(b){return (56320|b&1023)&65535;}
function UP(b){var c,d,e,f,g,h,i,j,k,l,m;if(A95===null){if(A97===null)A97=APF();c=(A97.value!==null?$rt_str(A97.value):null);d=new WX;d.Cd=H7(c);e=AAY(d);f=BC(e*2|0);g=f.data;h=0;i=0;while(i<e){h=h+AAY(d)|0;j=i*2|0;g[j]=h;k=j+1|0;j=AAY(d);l=j/2|0;if(j%2|0)l= -l|0;g[k]=l;i=i+1|0;}A95=f;}f=A95.data;j=0;e=f.length/2|0;h=e-1|0;a:{while(true){l=(j+h|0)/2|0;m=BG(f[l*2|0],b);if(!m)break;if(m<=0){j=l+1|0;if(j>h)break a;}else{l=l-1|0;if(l<j)break a;h=l;}}}return l>=0&&l<e?b+f[(l*2|0)+1|0]|0:0;}
function Fj(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function AMZ(){A94=H($rt_charcls());A96=K(FW,128);}
function APF(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
var Zz=G(0);
var AEb=G(0);
var Fa=G(0);
var AM3=G();
function EK(){return $rt_globals.window.document;}
function A3K(a){return a.PI();}
function A5D(a,b){return a.Rz($rt_str(b));}
function A5o(a,b){a.OJ($rt_str(b));}
function A0B(a,b){return a.VD($rt_str(b));}
function AQG(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ASk(a){return a.ZN();}
function A5z(a,b,c){return a.Yv($rt_str(b),$rt_str(c));}
function ATS(a,b,c,d){a.IJ($rt_str(b),Fs(c,"handleEvent"),d?1:0);}
function AZR(a){return a.W8();}
function A4k(a){return !!a.R4();}
function A57(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AUW(a){return a.OZ();}
function ATC(a,b){a.Yj($rt_str(b));}
function AVf(a){return !!a.Oy();}
function AYK(a){return a.RM();}
function AUc(a){return $rt_ustr(a.L4());}
function ARj(a,b){return a.O_(b?1:0);}
function A6Z(a){return a.R3();}
function A2i(a,b,c){return a.a0u($rt_str(b),$rt_str(c));}
function AUO(a,b,c){return a.Wm(b,c?1:0);}
function AX6(a,b,c){return !!a.Ra($rt_str(b),$rt_str(c));}
function AY5(a){return a.Qe();}
function ATq(a){return $rt_ustr(a.Ta());}
function ASs(a,b){return !!a.K8(b);}
function AS6(a,b){return a.TG($rt_str(b));}
function A2u(a,b,c){return a.PH($rt_str(b),$rt_str(c));}
function AUl(a){return a.Uy();}
function AZU(a,b){return a.ZW($rt_str(b));}
function AS5(a){return $rt_ustr(a.T5());}
function AWb(a){a.Os();}
function AQy(a,b){return a.a0x($rt_str(b));}
function AXv(a,b){return a.OS($rt_str(b));}
function AZ_(a,b){return a.Oq($rt_str(b));}
function A52(a){return $rt_ustr(a.UR());}
function A0h(a,b,c){return a.XV(b,c);}
function A4w(a,b){return a.L3(b);}
function AWz(a){return a.QU();}
function AVD(a,b,c){a.Kz($rt_str(b),Fs(c,"handleEvent"));}
function AVn(a,b,c){return a.M_(b,c);}
function AXp(a){return !!a.Zk();}
function AYj(a,b){return a.PC($rt_str(b));}
function A3S(a,b,c,d){a.HU($rt_str(b),Fs(c,"handleEvent"),d?1:0);}
function ASo(a){return a.QV();}
function A0r(a,b,c){return a.O$($rt_str(b),$rt_str(c));}
function AZo(a){return $rt_ustr(a.U9());}
function A6U(a){return a.Ur();}
function AVB(a){return a.UD();}
function AZl(a){return a.Rc();}
function AVE(a,b,c){a.K7($rt_str(b),Fs(c,"handleEvent"));}
function A0K(a,b){return a.SS(b);}
function ATa(a,b){a.Mr($rt_str(b));}
function A46(a){return $rt_ustr(a.TY());}
var AGy=G(0);
var Vf=G();
function ALu(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!(b instanceof $rt_globals.File?1:0)){if(b instanceof $rt_globals.FileSystemFileHandle?1:0){e=e.data;g=d+1|0;e[f]=ALF(b,AOJ(c[d]));}else if(!(b instanceof $rt_globals.FileSystemDirectoryHandle?1:0))g=d;else{g=d+1|0;h=c[d];c=new Po;c.ik=b;if(h.length)c.gy=AOJ(h);else{c.gy=K(BH,0);c.l$=K(BH,0);}e.data[f]=c;}}else{c=new Mf;h=null;i=b.webkitRelativePath;if(!(typeof i==='undefined'?1:0)&&i!==null&&i.length){j=i.split("/");if(!j.length)k=K(BH,0);else{k=K(BH,j.length-
1|0);l=k.data;g=0;m=l.length;while(g<m){l[g]=Fd(j[g]);g=g+1|0;}}}else k=K(BH,0);e=e.data;RB(c,h,b,k);e[f]=c;g=d;}return g;}
var ABF=G();
var A9I=null;function AOm(){return "ping";}
function AMz(b){return b===AOm()?1:0;}
function YH(){var a=this;B.call(a);a.Gc=null;a.Gb=null;a.Ge=0;a.Gd=null;a.F_=null;}
function ARB(a,b){var c,d,e,f,g;c=a.Gc;d=a.Gb;e=a.Ge;f=a.Gd;g=a.F_;if(!(b.data==="started"?1:0)){b=new $rt_globals.Error("worker is not started");g.f(b);}else{b=null;c.onmessage=b;b=new AIE;g=BB(b,"f");c.onerror=g;g=BB(b,"f");c.onmessageerror=g;d.push(c);if(d.length==e)f.f(d);}}
function YG(){B.call(this);this.E3=null;}
function AQX(a,b){var c;c=a.E3;b=AXs("worker start error",b);c.f(b);}
var AOb=G();
function AWK(b){return Math.exp(b);}
function AAr(b){return Math.log(b);}
function A7c(b){return Math.sqrt(b);}
function JR(b,c){return A3i(b,c);}
function A3i(b,c){return Math.pow(b,c);}
function D1(){return AYt();}
function AYt(){return Math.random();}
function Bc(b,c){if(b<c)c=b;return c;}
function Z(b,c){if(b>c)c=b;return c;}
function ASi(b,c){return Math.min(b,c);}
function AN4(b,c){return ASi(b,c);}
function AX7(b,c){return Math.max(b,c);}
function E2(b){if(b<0)b= -b|0;return b;}
function ATc(b){return Math.abs(b);}
function AWc(b){return Math.sign(b);}
function AKq(b){return AWc(b);}
function AJ2(b,c){return A7c(b*b+c*c);}
var ABv=G(0);
var T6=G(0);
var ACR=G(0);
var VC=G(0);
var AHX=G(0);
var AFT=G(0);
var ANy=G();
function A35(a,b,c){a.K7($rt_str(b),Fs(c,"handleEvent"));}
function A2P(a,b,c){a.Kz($rt_str(b),Fs(c,"handleEvent"));}
function ATs(a,b,c,d){a.HU($rt_str(b),Fs(c,"handleEvent"),d?1:0);}
function ARw(a,b){return !!a.K8(b);}
function A03(a,b,c,d){a.IJ($rt_str(b),Fs(c,"handleEvent"),d?1:0);}
var Nf=G(0);
var A98=null;function A7$(){A7$=Bg(Nf);A4x();}
function A4x(){A98=new $rt_globals.TextDecoder("utf-16");}
var Bq=G(Bt);
var AID=G(Bt);
var KV=G(BU);
var AIE=G();
function A0P(a,b){$rt_globals.console.error("unhandled worker error",b);}
var AA2=G(0);
function AEh(){var a=this;B.call(a);a.xM=null;a.q6=null;a.ez=null;a.zJ=null;a.Bt=null;a.rC=null;a.sC=null;a.gJ=null;a.nt=0;a.KN=0;a.Ec=null;a.h5=null;a.cS=null;}
function ALz(a){a.ez.focus();}
function NH(a,b){var c;c=EK();b=$rt_ustr(b);c.title=b;}
function Mi(a){a.KN=$rt_globals.requestAnimationFrame(BB(a.xM,"onAnimationFrame"));}
function Dt(a){a.nt=1;}
function AEI(a,b,c){var d,e,f,g,h,i;a.sC.es=BR(b,c);d=b&&c?1:0;if(d){e=a.ez;f=b;e.width=f;f=a.ez;g=c;f.height=g;}f=a.gJ;V(f.dg,b,c);e=f.X;f=f.dg;h=f.b;i=f.a;e.viewport(0,0,h,i);a.h5.bX(a.gJ.dg,L3(a));if(d)a.h5.bP();}
function OC(a,b){var c,d,e;c=a.Ec;d=a.ez;if(BN(b,c))b=c;else{e=d.style;if(b!==null&&N(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.Ec=b;}
function HF(a){return $rt_globals.performance.now()/1000.0;}
function L3(a){return $rt_globals.window.devicePixelRatio;}
function Gh(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AIZ(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AHq;d.Hg=b;e=new AHp;c.then(BB(d,"f"),BB(e,"f"));}}
function EM(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AIZ(b,null);else{c=new AH7;d=$rt_globals.window.showOpenFilePicker();e=new AH6;e.wc=b;d.then(BB(e,"f"),BB(c,"f"));}}
function TT(a,b,c){var d,e;if(!MN()){b=new Bt;Bd(b,C(34));c.e(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new AHS;e.uC=b;b=AQk(c);d.then(BB(e,"f"),BB(b,"f"));}}
function Wb(a,b,c,d){var e;if(!MN()){b=new Bt;Bd(b,C(34));d.e(b);}else{e=$rt_globals.navigator.clipboard;b=AMU(H7(b));b=e.writeText(b);e=new R5;e.Dr=c;c=AQk(d);b.then(BB(e,"f"),BB(c,"f"));}}
function YQ(a){return MN()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AQk(b){var c;c=new Vj;c.wU=b;return c;}
var Bx=G(0);
var AOw=G();
var Q=G(0);
var AOx=G();
var ACn=G(0);
function Dg(a,b,c,d){DJ(a,0,b,c,d);}
function OP(){var a=this;B.call(a);a.s3=null;a.sa=null;a.r_=null;a.vR=null;a.r4=null;a.Bz=0;a.j4=0;a.G8=null;}
function DJ(a,b,c,d,e){var f,g,h,i;f=a.j4;if(f>0){g=a.r4.data;b=f-1|0;a.j4=b;V7(a,c,d,e,g[b]);}else{h=!b?a.sa:a.r_;i=new AHr;i.yE=c;i.FX=d;i.Fd=e;c=new V$;c.ut=i;d=h.oB;c.FM=d;if(d===null)h.r1=c;else d.yf=c;h.oB=c;h.bZ=h.bZ+1|0;h.nb=h.nb+1|0;}}
function V7(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=a.Bz+1|0;a.Bz=f;AIA(a.vR,Ck(f),b);b=a.s3[e];if(b===null){c=$rt_ustr(c);$rt_globals.console.error("sendToWorker after shutdown, method = "+c);}else{d=d.data;g=d.length;h=new $rt_globals.Array(g+2|0);i=f;0;h[0]=i;c=$rt_ustr(c);1;h[1]=c;j=2;i=new $rt_globals.Array();e=0;while(e<g){c=d[e];if(c===null){f=j+1|0;c=null;j;h[j]=c;}else if(c instanceof BH){c=c;f=j+1|0;c=AMU(H7(c));j;h[j]=c;}else if(Do(c,$rt_arraycls($rt_bytecls()))){k=c;f=j+1|0;c=k.data.buffer;j;h[j]=c;}else if
(Do(c,$rt_arraycls($rt_charcls()))){k=c;f=j+1|0;c=k.data.buffer;j;h[j]=c;}else if(Do(c,$rt_arraycls($rt_intcls()))){k=c;f=j+1|0;c=k.data.buffer;j;h[j]=c;}else if(Do(c,$rt_arraycls($rt_doublecls()))){k=c;f=j+1|0;c=k.data.buffer;j;h[j]=c;}else if(!(c instanceof Mf)){if(!(c instanceof Po)){b=new Bq;c=Gx(Bv(c));h=J();F(F(h,C(35)),c);Bd(b,I(h));L(b);}c=c;l=j+1|0;m=c.ik;j;h[j]=m;f=l+1|0;c=AJb(c.gy);l;h[l]=c;}else{c=c;m=c.lO;if(m===null){f=j+1|0;c=c.kb;j;h[j]=c;}else{l=j+1|0;j;h[j]=m;f=l+1|0;c=AJb(c.jA);l;h[l]=c;}}c
=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)i.push(c);e=e+1|0;j=f;}b.postMessage(h,i);}}
var UH=G(OP);
var AC6=G(0);
function WN(){B.call(this);this.yL=null;}
function A3x(a,b){var c,d;c=b;b=a.yL;if(!(!b.h5.cX(c/1000.0)&&!b.nt)){d=b.gJ.dg;if(U(d.b,d.a)){b.nt=0;b.h5.bP();}}Mi(b);}
function WO(){B.call(this);this.Bv=null;}
function DA(a){Dt(a.Bv);}
var ACe=G(0);
function WK(){B.call(this);this.F0=null;}
function AV8(a,b,c){var d,e,f,g;c=a.F0;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ez){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=L3(c);AEI(c,Fl(f.width*g),Fl(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AEI(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AL5=G();
function AZa(){return {box:'device-pixel-content-box'};}
function AWl(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cs=G(0);
function WM(){B.call(this);this.Fp=null;}
function A4s(a,b){var c;b=a.Fp;b.h5.bX(b.gJ.dg,L3(b));c=b.gJ.dg;if(U(c.b,c.a))b.h5.bP();}
function AJA(){var a=this;B.call(a);a.cr=null;a.lc=null;a.KZ=null;a.es=null;}
function A8K(a,b){var c=new AJA();A5Q(c,a,b);return c;}
function A5Q(a,b,c){var d,e,f,g;a.es=null;a.lc=b;d=new ABQ;d.bS=CL(K(Ch,0));d.q9=CL(K(Ch,0));d.b3=CL(K(CJ,0));d.fz=CL(K(Ey,0));d.cF=CL(K(CT,0));d.jC=CL(K(Gw,0));d.kd=CL(K(GT,0));d.ov=CL(K(Q,0));d.o9=CL(K(Q,0));d.cZ=c;a.cr=d;e=$rt_globals.window;f=K(De,16);g=f.data;d=new AG7;d.t2=a;g[0]=CV(a,b,C(36),d);d=new AG8;d.E$=a;g[1]=CV(a,b,C(37),d);d=new AG9;d.CQ=a;g[2]=CV(a,b,C(38),d);d=new AG$;d.Ar=a;g[3]=CV(a,b,C(39),d);d=new AG_;d.xn=a;g[4]=CV(a,b,C(40),d);d=new AHa;d.H4=a;g[5]=CV(a,b,C(41),d);d=new AHb;d.Hs=a;g[6]
=CV(a,b,C(42),d);d=new AHc;d.EI=a;g[7]=CV(a,b,C(43),d);d=new AHd;d.Ck=a;g[8]=CV(a,b,C(44),d);d=new AHe;d.zX=a;g[9]=CV(a,b,C(45),d);d=new Y7;d.zq=a;g[10]=CV(a,b,C(46),d);d=new Y8;d.yv=a;g[11]=CV(a,b,C(47),d);d=new Y9;d.Bf=a;g[12]=CV(a,b,C(48),d);d=new Y$;d.GX=a;e.addEventListener("paste",BB(d,"handleEvent"),!!1);g[13]=Yw(a,e,C(49),d);d=new Y5;d.uY=a;g[14]=CV(a,e,C(50),d);d=new Y6;d.uc=a;g[15]=CV(a,e,C(51),d);c=new Ti;c.Il=f;a.KZ=c;e=new ABd;e.FD=b;b.onpointerdown=BB(e,"f");e=new ABe;e.Gu=b;b.onpointerup=BB(e,
"f");}
function ZT(){return (EK()).activeElement;}
function CV(a,b,c,d){b.addEventListener($rt_ustr(c),BB(d,"handleEvent"));return Yw(a,b,c,d);}
function Yw(a,b,c,d){var e;e=new ACb;e.Kg=b;e.Ki=c;e.Kh=d;return e;}
function AFa(a,b){var c;c=new AIn;c.yJ=b;return c;}
function ET(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.lc.getBoundingClientRect();e=BR(Fl((b.clientX-d.left)*c),Fl((b.clientY-d.top)*c));f=AON(a.es);d=new Qg;AFC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.J2=f;return d;}
function Zb(a,b,c){var d,e,f,g;d=new R4;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AFC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.nd=0;d.e1=e;d.Q=f;d.h4=c;d.su=g;return d;}
function Ej(a,b){b.stopPropagation();b.preventDefault();}
function O5(){var a=this;B.call(a);a.sf=null;a.bE=null;a.X=null;a.nZ=0;a.FL=null;a.Ky=0;a.Jd=0;a.m7=null;a.mT=null;a.Jx=null;a.Li=null;a.yY=null;a.BF=null;a.ky=null;a.jO=null;a.lx=null;a.JD=null;a.vr=null;a.dg=null;a.G1=null;a.sy=0;a.oO=0;a.qI=0;a.qu=0;a.nl=0;a.qE=null;a.qS=0.0;a.sE=0.0;}
function APD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dg=new Y;a.sy=0;a.qE=new AHj;a.sf=c;a.nZ=d;g=$rt_str(b.getParameter(7938));h=J();F(F(h,C(52)),g);$rt_globals.console.info($rt_ustr(I(h)));a.X=b;a.bE=Ld(c,4,4,1);i=AIK(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B2(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Tb;HL();c=A99;m.fD=b;m.jz=c;m.xU=j.length/c.pq|0;m.GY=l.length;n
=b.createBuffer();m.Bq=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.At=null;n=b.createBuffer();m.z2=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}c=null;b.bindBuffer(34962,c);c=null;b.bindBuffer(34963,c);a.vr=m;a.Jd=AOr(g,C(53));c=new ACc;c.eJ=b;a.FL=c;a.qS=e;a.sE=f;d=b.getParameter(3379);a.Ky=d;c=J();P(F(c,C(54)),d);$rt_globals.console.info($rt_ustr(I(c)));k=K(Ds,9);i=k.data;c=new AGV;Ip(c,b,C(55),C(56),A99);g=c.bQ;c.Gz=b.getUniformLocation(g,"uColor");a.m7=c;i[0]
=c;c=A8p(b);a.mT=c;i[1]=c;c=A7V(b);a.Jx=c;i[2]=c;c=A84(b);a.Li=c;i[3]=c;c=A9f(b);a.yY=c;i[4]=c;c=A9b(b);a.BF=c;i[5]=c;c=A8d(b);a.ky=c;i[6]=c;c=A82(b);a.jO=c;i[7]=c;c=A83(b);a.lx=c;i[8]=c;a.JD=k;AHY(b,C(57));}
function WH(a,b,c,d){return Fe(a,b,BF(c,d),400,0);}
function K9(a,b,c){return Fe(a,b,c,400,0);}
function HZ(a,b,c){return Ld(a.sf,b,c,0);}
function Ef(a,b,c,d){return Ld(a.sf,b,c,d);}
function Pd(a,b,c,d,e,f,g,h){var i,j;Cm(a.bE,c);i=Ef(a,Jg(a.bE,b,d+e),f,h);Cm(i,c);BX(i,b,d,Mv(c,f)+g|0);j=Y1(a,i);Em(i);return j;}
function Ex(a,b){var c,d,e,f,g;c=a.X;d=b.ba;e=b.bj;f=b.S;g=b.bd;c.clearColor(d,e,f,g);a.X.clear(16384);}
function BM(a,b){var c;if(b==a.oO)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.oO;a.oO=b;return c;}
function H9(a,b,c){MF(a,b.b,b.a,c);}
function MF(a,b,c,d){var e,f;e=d.b;f=d.a;a.qu=1;a.nl=1;d=a.qE;d.w8=b;d.w9=c;d.w7=e;d.w6=f;AFE(a);}
function EA(a){a.qu=0;a.nl=0;AFE(a);}
function AFE(a){var b,c,d,e,f,g;b=a.qI;c=a.qu;if(b!=c){a.qI=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.qI&&a.nl){a.nl=0;d=a.X;e=a.qE;b=e.w8;c=a.dg.a-e.w9|0;f=e.w6;c=c-f|0;g=e.w7;d.scissor(b,c,g,f);}}
function Gb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.vr;c=a.sy;d=b.jz.Fm;e=b.fD;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.fD;h=b.Bq;e.bindBuffer(34962,h);i=b.jz.to.data;g=i.length;j=0;while(j<g){k=i[j];l=b.fD;m=k.lh;n=k.hT;o=b.jz.pq*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.hT|0;j=j+1|0;}a:{e=b.At;if(e!==null){c=0;b.fD.bindBuffer(34962,e);i=b.jz.D9.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.fD;j=e.lh;p=e.hT;m=e.vB;n=b.jz.Dh;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.hT|0;g=g+1|0;}}}q=b.z2;if(q===null){c=b.xU;if(c>0)b.fD.drawArrays(4,0,c);}else{b.fD.bindBuffer(34963,q);k=b.fD;g=b.GY;k.drawElements(4,g,5123,0);}a.sy=d;}
function Bi(a,b,c,d,e){Gz(a,a.m7);GJ(a.m7,a.X,b,c,d,a.dg);d=a.m7;FT(a.X,d.Gz,e);Gb(a);}
function P_(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gz(a,a.jO);GJ(a.jO,a.X,b,c,d,a.dg);j=a.jO;d=a.X;k=j.A2;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.A1;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.jO;FT(a.X,d.BX,i);Gb(a);}
function J3(a,b,c,d,e,f,g,h,i){var j,k;Gz(a,a.lx);GJ(a.lx,a.X,b,c,d,a.dg);d=a.lx;j=a.X;k=d.xR;j.uniform4f(k,e,f,i,0.0);FT(j,d.C2,g);d=a.lx;FT(a.X,d.Bs,h);Gb(a);}
function LH(a,b,c,d,e){Gz(a,a.mT);GJ(a.mT,a.X,b,c,d,a.dg);Pg(a.mT,a.X,e);Gb(a);}
function Dd(a,b,c,d,e,f,g,h,i){var j;j=!i?a.yY:a.BF;Gz(a,j);AP1(j,a.X,!i?a.sE:a.qS);GJ(j,a.X,b,c,d,a.dg);Pg(j,a.X,f);AIQ(j,a.X,f,e);AOY(j,a.X,g,h);Gb(a);}
function Y1(a,b){var c;c=CS(a);Da(c,b);return c;}
function CS(a){var b,c;b=new Le;c=a.FL;b.el=new Y;b.eg=c;b.hc=c.eJ.createTexture();c.l_=c.l_+1|0;return b;}
function NN(a,b){AHY(a.X,b);}
function Gz(a,b){var c,d;if(b!==a.G1){c=a.X;d=b.bQ;c.useProgram(d);a.G1=b;}}
function W6(){var a=this;O5.call(a);a.IV=null;a.Jz=null;}
function Fe(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.bE;g=ANH(b,c,d,e);K$(f,g);h=f.dG.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=D5(f,C(58));m=D5(f,C(59));h=new Mg;n=g;h.qO=b;h.rG=c;h.If=d;h.IF=e;h.er=i;h.eQ=j;h.H7=l;h.Gk=k;h.tQ=n;h.wW=DG(i);h.Jk=DG(h.eQ);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Ib=d;switch(e){case 1:break;case 2:b=C(6);break a;default:b=C(4);break a;}b=C(60);}h.H1=b;return h;}
var XU=G(0);
function AYX(a,b){var c;c=a.bu();while(c.b0()){b.e(c.bG());}}
var HK=G(0);
function WI(a){var b,c;b=new AD4;c=new S7;c.rW=a;b.sP=c;return b;}
function A2A(a,b){var c,d;c=a.bu();d=0;while(c.b0()){if(b.bn(c.bG())){c.r6();d=1;}}return d;}
var EH=G();
function F6(a){return a.cT()?0:1;}
function Mb(a,b){var c;c=a.bu();while(c.b0()){if(BN(c.bG(),b))return 1;}return 0;}
function E5(a,b){var c,d,e,f,g,h;c=b.data;d=a.l;e=c.length;if(e<d)b=MB(E_(Bv(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B4(a);while(B6(f)){g=b.data;h=e+1|0;g[e]=B7(f);e=h;}return b;}
function A5c(a,b){var c;c=a.bu();while(c.b0()){if(BN(c.bG(),b)){c.r6();return 1;}}return 0;}
function FU(a,b){var c,d;c=0;d=b.bu();while(d.b0()){if(!a.hZ(d.bG()))continue;c=1;}return c;}
var OH=G(0);
var Nu=G(0);
function EF(){EH.call(this);this.bZ=0;}
function AWo(a,b){a.q4(a.cT(),b);return 1;}
function B4(a){var b;b=new AAi;b.kY=a;b.s9=a.bZ;b.nz=a.cT();b.jk=(-1);return b;}
function AVQ(a,b,c){var d,e;if(b>=0&&b<=a.cT()){if(c.dv())return 0;d=c.bu();while(d.b0()){e=b+1|0;a.q4(b,d.bG());b=e;}return 1;}c=new Bq;W(c);L(c);}
function A5S(a,b,c){c=new Di;W(c);L(c);}
function A4u(a,b){var c;c=new Di;W(c);L(c);}
function LM(a,b){var c,d;c=a.cT();d=0;while(true){if(d>=c)return (-1);if(BN(b,a.kp(d)))break;d=d+1|0;}return d;}
function AU7(a,b){var c,d;if(!Do(b,Nu))return 0;c=b;if(a.l!=c.l)return 0;d=0;while(d<c.l){if(!BN(B1(a,d),B1(c,d)))return 0;d=d+1|0;}return 1;}
var M5=G(EF);
var Qn=G(0);
var PV=G(0);
function Mz(){var a=this;M5.call(a);a.r1=null;a.oB=null;a.nb=0;}
function ZL(a){var b,c;b=a.r1;if(b===null)b=null;else{c=b.yf;a.r1=c;if(c!==null)c.FM=null;else a.oB=null;a.nb=a.nb-1|0;a.bZ=a.bZ+1|0;b=b.ut;}return b;}
var Mc=G(0);
function Tm(a,b,c){var d;d=B5(a,b);if(d===null)d=DL(a,b,c);return d;}
function Eq(){var a=this;B.call(a);a.i8=null;a.rU=null;}
var DC=G(0);
var YP=G(0);
var QT=G(0);
function ANx(){var a=this;Eq.call(a);a.fo=null;a.ie=null;a.JA=null;a.jK=0;a.rz=null;}
function A4$(){var a=new ANx();ARy(a);return a;}
function ARy(a){a.JA=null;a.ie=A92;}
function AIA(a,b,c){var d,e;a.fo=PQ(a,a.fo,b);d=AFV(a,b);e=ZB(d,c);ZB(d,c);a.jK=a.jK+1|0;return e;}
function Yn(a,b){var c;c=AFV(a,b);if(c===null)return null;a.fo=LG(a,a.fo,b);a.jK=a.jK+1|0;return c.hi;}
function AFV(a,b){var c,d;c=a.fo;while(true){if(c===null)return null;d=Gq(a.ie,b,c.eB);if(!d)break;c=d>=0?c.b1:c.bR;}return c;}
function AIr(a,b,c){var d,e,f,g,h;d=K(F4,P$(a));e=d.data;f=0;g=a.fo;a:{while(g!==null){h=Gq(a.ie,b,g.eB);if(c)h= -h|0;if(!h){c=f+1|0;e[f]=g;break a;}if(h>=0)g=Nr(g,c);else{h=f+1|0;e[f]=g;g=Kq(g,c);f=h;}}c=f;}return B_(d,c);}
function RI(a,b,c){var d,e,f,g,h;d=K(F4,P$(a));e=d.data;f=0;g=a.fo;while(g!==null){h=Gq(a.ie,b,g.eB);if(c)h= -h|0;if(h>=0)g=Nr(g,c);else{h=f+1|0;e[f]=g;g=Kq(g,c);f=h;}}return B_(d,f);}
function AGW(a,b){var c,d,e,f,g;c=K(F4,P$(a));d=c.data;e=0;f=a.fo;while(f!==null){g=e+1|0;d[e]=f;f=Kq(f,b);e=g;}return B_(c,e);}
function PQ(a,b,c){var d,e;if(b===null){b=new F4;d=null;b.eB=c;b.hi=d;b.fX=1;b.ig=1;return b;}e=Gq(a.ie,c,b.eB);if(!e)return b;if(e>=0)b.b1=PQ(a,b.b1,c);else b.bR=PQ(a,b.bR,c);Fb(b);return NZ(b);}
function LG(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Gq(a.ie,c,b.eB);if(d<0)b.bR=LG(a,b.bR,c);else if(d>0)b.b1=LG(a,b.b1,c);else{e=b.b1;if(e===null)return b.bR;f=b.bR;g=K(F4,e.fX).data;h=0;while(true){b=e.bR;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b1;while(h>0){h=h+(-1)|0;j=g[h];j.bR=b;Fb(j);b=NZ(j);}e.b1=b;e.bR=f;Fb(e);b=e;}Fb(b);return NZ(b);}
function P$(a){var b;b=a.fo;return b===null?0:b.fX;}
function AD9(){B.call(this);this.EV=null;}
function ABQ(){var a=this;B.call(a);a.bS=null;a.q9=null;a.b3=null;a.fz=null;a.cF=null;a.jC=null;a.kd=null;a.ov=null;a.o9=null;a.cZ=null;a.h3=null;a.Cq=0;}
function V1(a,b){var c,d,e,f;DA(a.cZ);c=(BY(!b.h4?a.q9:a.bS)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bo(b);if(f)break;if(b.nd)break;e=e+1|0;}return f;}
function RA(a,b){var c,d,e,f;a:{DA(a.cZ);c=a.h3;if(c!==null)c.e(b);else{d=(BY(a.b3)).data;e=d.length;f=0;while(true){if(f>=e)break a;if(d[f].dI(b))return;f=f+1|0;}}}}
function TN(a,b,c){var d,e,f;DA(a.cZ);d=(BY(a.jC)).data;e=d.length;f=0;while(f<e){if(d[f].g0(b,c))return 1;f=f+1|0;}return 0;}
function AG7(){B.call(this);this.t2=null;}
function A4d(a,b){var c;c=a.t2;if(V1(c.cr,Zb(c,b,1)))Ej(c,b);}
function AG8(){B.call(this);this.E$=null;}
function A4o(a,b){var c;c=a.E$;if(V1(c.cr,Zb(c,b,0)))Ej(c,b);}
function AG9(){B.call(this);this.CQ=null;}
function AUS(a,b){var c,d,e,f,g;c=a.CQ;if(c.es!==null){d=ET(c,b);e=b.clientX;f=b.clientY;g=J();P(Bj(P(F(g,C(61)),e),32),f);I(g);RA(c.cr,d);Ej(c,b);}}
function AG$(){B.call(this);this.Ar=null;}
function A29(a,b){var c,d,e,f,g,h;c=a.Ar;b.button;if(c.es!==null)a:{d=ET(c,b);c=c.cr;e=b.button;DA(c.cZ);if(c.h3===null){f=(BY(c.b3)).data;g=f.length;h=0;while(h<g){b=f[h].ce(d,e);if(b!==null){c.h3=b;c.Cq=e;break a;}h=h+1|0;}}}}
function AG_(){B.call(this);this.xn=null;}
function A3j(a,b){var c,d,e,f,g,h,i;c=a.xn;b.button;if(c.es!==null){d=ET(c,b);e=c.cr;f=b.button;DA(e.cZ);if(f==e.Cq&&e.h3!==null)e.h3=null;g=(BY(e.b3)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cP(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Ej(c,b);}}
function AHa(){B.call(this);this.H4=null;}
function AWi(a,b){}
function AHb(){B.call(this);this.Hs=null;}
function ATr(a,b){var c,d;c=a.Hs;if(c.es!==null){b=ET(c,b);d=b.i;d.b=(-1);d.a=(-1);RA(c.cr,b);}}
function AHc(){B.call(this);this.EI=null;}
function A7h(a,b){var c,d,e,f,g,h,i,j,k;c=a.EI;if(c.es!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cr;f=ET(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DA(e.cZ);i=(BY(e.fz)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dE(f,d,h))break b;k=k+1|0;}}Ej(c,b);}}
function AHd(){B.call(this);this.Ck=null;}
function AS4(a,b){var c,d,e,f,g,h,i,j;c=a.Ck;if(c.es!==null){d=ET(c,b);e=c.cr;f=b.button;g=b.detail;DA(e.cZ);h=(BY(e.b3)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cL(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Ej(c,b);}}
function AHe(){B.call(this);this.zX=null;}
function AWU(a,b){var c,d,e,f,g,h,i;c=a.zX;if(c.es!==null){d=ET(c,b);e=c.cr;DA(e.cZ);f=(BY(e.cF)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bn(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Ej(c,b);}}
function Y7(){B.call(this);this.zq=null;}
function A6W(a,b){var c,d,e;b=a.zq.cr;c=(BY(b.o9)).data;d=c.length;e=0;while(e<d){c[e].d();e=e+1|0;}DA(b.cZ);}
function Y8(){B.call(this);this.yv=null;}
function AUw(a,b){var c,d,e;b=a.yv.cr;c=(BY(b.ov)).data;d=c.length;e=0;while(e<d){c[e].d();e=e+1|0;}if(b.h3!==null)b.h3=null;DA(b.cZ);}
function Y9(){B.call(this);this.Bf=null;}
function AUY(a,b){var c;c=a.Bf;if(c.es!==null)ET(c,b);}
function Y$(){B.call(this);this.GX=null;}
function A4y(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.GX;if(ZT()===c.lc){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(BY(c.cr.kd)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].bK();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cr.cZ;m=new Tw;m.wH=k;m.wG=l;g.getAsString(BB(m,"accept"));Ej(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=J();F(F(F(F(l,C(62)),k),C(63)),g);$rt_globals.console.info($rt_ustr(I(l)));}e=e+1|0;}}}
function Y5(){B.call(this);this.uY=null;}
function ATF(a,b){var c;c=a.uY;if(ZT()===c.lc&&TN(c.cr,AFa(c,b),0))Ej(c,b);}
function Y6(){B.call(this);this.uc=null;}
function AX1(a,b){var c;c=a.uc;if(ZT()===c.lc&&TN(c.cr,AFa(c,b),1))Ej(c,b);}
var AFz=G(0);
var AFH=G();
function Ld(a,b,c,d){var e,f,g,h,i;e=new ADt;e.ng=d;A9X=A9X+1|0;e.qg=b;e.pB=c;f=(EK()).createElement("canvas");e.kN=f;g=b;f.width=g;h=e.kN;f=c;h.height=f;if(!d)g=e.kN.getContext("2d");else{i=e.kN;h=AZ2();g=i.getContext("2d",h);}e.dG=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AFF=G();
function ATV(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function AMa(){var a=this;B.call(a);a.dB=null;a.ho=null;a.cK=0;}
function CL(a){var b=new AMa();ATn(b,a);return b;}
function ATn(a,b){a.dB=b;}
function D$(a,b){return a.dB.data[b];}
function Bb(a,b){var c,d,e;c=a.cK;d=a.dB;if(c==d.data.length)a.dB=B_(d,c+4|0);d=a.dB.data;e=a.cK;a.cK=e+1|0;d[e]=b;a.ho=null;}
function UC(a,b){var c,d,e,f;c=0;while(true){d=a.dB.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cK=a.cK-1|0;a.ho=null;}c=c+1|0;}}
function BY(a){var b;b=a.ho;if(!(b!==null&&b.data.length==a.cK))a.ho=B_(a.dB,a.cK);return a.ho;}
function AA_(a,b){var c,d,e;c=0;d=a.dB.data;e=d.length;while(true){if(c>=e)return (-1);if(b===d[c])break;c=c+1|0;}return c;}
var Ch=G(0);
var CJ=G(0);
function A2L(a,b){return 0;}
function AXH(a,b,c){return null;}
function AQ2(a,b,c){return 0;}
function A4H(a,b,c,d){return 0;}
var Ey=G(0);
var DE=G(0);
var CT=G(0);
var Gw=G(0);
var Cp=G(0);
var GT=G(0);
function Ti(){B.call(this);this.Il=null;}
function Y(){var a=this;B.call(a);a.b=0;a.a=0;}
function BR(a,b){var c=new Y();Sz(c,a,b);return c;}
function AON(a){var b=new Y();ASn(b,a);return b;}
function Sz(a,b,c){a.b=b;a.a=c;}
function ASn(a,b){a.b=b.b;a.a=b.a;}
function CA(a,b){a.b=b.b;a.a=b.a;}
function V(a,b,c){a.b=b;a.a=c;}
function AMG(a){var b,c,d;b=a.b;c=a.a;d=J();P(F(P(F(d,C(64)),b),C(65)),c);return I(d);}
function ATP(a,b){var c;a:{b:{if(a!==b){if(Bv(b)!==Bv(a))break b;if(!AEB(a,b))break b;}c=1;break a;}c=0;}return c;}
function AEB(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function ADO(a,b,c){return a.b==b&&a.a==c?1:0;}
function AHj(){var a=this;B.call(a);a.w8=0;a.w9=0;a.w7=0;a.w6=0;}
var ALJ=G();
var ANk=G(0);
function ACc(){var a=this;B.call(a);a.eJ=null;a.l_=0;a.gN=0;}
function Pn(){var a=this;B.call(a);a.bQ=null;a.Lm=null;}
function AO2(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(66):C(67);g=$rt_str(b.getShaderInfoLog(e));h=J();F(F(h,f),g);g=I(h);b.deleteShader(e);T(X(),g);T(B0(),C(68));T(B0(),d);T(B0(),C(68));b=new Bt;Bd(b,g);L(b);}
function Ds(){var a=this;Pn.call(a);a.Cj=null;a.vZ=null;a.qb=null;}
function A9$(a,b,c,d){var e=new Ds();Ip(e,a,b,c,d);return e;}
function Ip(a,b,c,d,e){var f,g,h,i,j,k;a.Lm=e;f=AO2(b,35633,c);d=AO2(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bQ=g;h=e.x5.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bQ;k=c.lh;c=c.v_;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bQ;b.linkProgram(c);if(!b.getProgramParameter(c,35714)){d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b=new Bt;c=J();F(F(c,C(69)),d);Bd(b,I(c));L(b);}AHY(b,C(70));a.qb=new Y;c=a.bQ;a.Cj=b.getUniformLocation(c,
"uResolution");c=a.bQ;a.vZ=b.getUniformLocation(c,"uSizePos");}
function AJH(a,b,c){var d,e,f;if(!AEB(a.qb,c)){CA(a.qb,c);d=a.Cj;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function GJ(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.vZ;b.uniform4f(e,i,l,h,j);AJH(a,b,f);}
function AGV(){Ds.call(this);this.Gz=null;}
function FI(){Ds.call(this);this.xe=null;}
function A8p(a){var b=new FI();A2H(b,a);return b;}
function A9_(a,b){var c=new FI();Pb(c,a,b);return c;}
function A$a(a,b,c){var d=new FI();AFh(d,a,b,c);return d;}
function A2H(a,b){Pb(a,b,C(71));}
function Pb(a,b,c){AFh(a,b,C(55),c);}
function AFh(a,b,c,d){HL();Ip(a,b,c,d,A99);c=a.bQ;a.xe=b.getUniformLocation(c,"sDiffuse");}
function Pg(a,b,c){var d;d=a.xe;b.uniform1i(d,0);b.activeTexture(33984);c=c.hc;b.bindTexture(3553,c);}
var AN5=G(Ds);
function A7V(a){var b=new AN5();AXV(b,a);return b;}
function AXV(a,b){HL();Ip(a,b,C(55),C(72),A99);}
function AKk(){FI.call(this);this.HP=null;}
function A84(a){var b=new AKk();AVR(b,a);return b;}
function AVR(a,b){var c;Pb(a,b,C(73));c=a.bQ;a.HP=b.getUniformLocation(c,"uContrast");}
function HE(){var a=this;FI.call(a);a.vd=null;a.wi=null;a.xN=null;a.FG=null;a.tD=0.0;}
function A$b(a,b,c){var d=new HE();YU(d,a,b,c);return d;}
function YU(a,b,c,d){AFh(a,b,c,d);c=a.bQ;a.vd=b.getUniformLocation(c,"uTexTransform");c=a.bQ;a.wi=b.getUniformLocation(c,"uColor");c=a.bQ;a.xN=b.getUniformLocation(c,"uBgColor");c=a.bQ;a.FG=b.getUniformLocation(c,"uTextPow");}
function AP1(a,b,c){var d;if(a.tD!==c){a.tD=c;d=a.FG;b.uniform2f(d,c,0.0);}}
function AOY(a,b,c,d){FT(b,a.wi,c);FT(b,a.xN,d);}
function AIQ(a,b,c,d){var e,f,g,h,i,j;c=c.el;e=c.b;f=c.a;g=d.ba;h=e;g=g/h;i=d.bj;j=f;i=i/j;h=d.S/h;j=d.bd/j;c=a.vd;b.uniform4f(c,g,i,h,j);}
var AJa=G(HE);
function A9f(a){var b=new AJa();A21(b,a);return b;}
function A21(a,b){YU(a,b,C(74),C(75));}
var AMo=G(HE);
function A9b(a){var b=new AMo();A1d(b,a);return b;}
function A1d(a,b){YU(a,b,C(74),C(76));}
function ANB(){var a=this;FI.call(a);a.Au=null;a.As=null;a.wl=null;}
function A8d(a){var b=new ANB();ASH(b,a);return b;}
function ASH(a,b){var c,d;Pb(a,b,C(77));c=a.bQ;a.Au=b.getUniformLocation(c,"uColorB");d=a.bQ;a.As=b.getUniformLocation(d,"uColorF");d=a.bQ;a.wl=b.getUniformLocation(d,"uContrast");}
function APc(){var a=this;Ds.call(a);a.BX=null;a.A2=null;a.A1=null;}
function A82(a){var b=new APc();A1g(b,a);return b;}
function A1g(a,b){var c;HL();Ip(a,b,C(55),C(78),A99);c=a.bQ;a.BX=b.getUniformLocation(c,"uColor");c=a.bQ;a.A2=b.getUniformLocation(c,"uPoints1");c=a.bQ;a.A1=b.getUniformLocation(c,"uPoints2");}
function AJi(){var a=this;Ds.call(a);a.Bs=null;a.xR=null;a.C2=null;}
function A83(a){var b=new AJi();A0c(b,a);return b;}
function A0c(a,b){var c;HL();Ip(a,b,C(55),C(79),A99);c=a.bQ;a.Bs=b.getUniformLocation(c,"uColor");c=a.bQ;a.xR=b.getUniformLocation(c,"uBaseline");c=a.bQ;a.C2=b.getUniformLocation(c,"uScaleHExp");}
var ADM=G(0);
var AQl=G(0);
function FT(b,c,d){var e,f,g,h;e=d.ba;f=d.bj;g=d.S;h=d.bd;b.uniform4f(c,e,f,g,h);}
function AHY(b,c){var d,e;d=b.getError();if(d){b=X();e=J();P(F(e,c),d);T(b,I(e));}}
var K5=G();
var A92=null;function Gq(a,b,c){return b.jL(c);}
function AKu(){A92=new K5;}
function ACb(){var a=this;B.call(a);a.Kg=null;a.Ki=null;a.Kh=null;}
function Tb(){var a=this;B.call(a);a.fD=null;a.jz=null;a.Bq=null;a.At=null;a.z2=null;a.xU=0;a.GY=0;}
function Cj(){var a=this;B.call(a);a.BM=null;a.d$=0;}
function Df(a,b,c){a.BM=b;a.d$=c;}
function AW5(a){return a.d$;}
function A1X(a){return a.BM;}
function AQ$(a,b){return a!==b?0:1;}
function JG(a){var b;b=Bv(a);if(!AKG(WQ(b),H(Cj)))b=WQ(b);return b;}
function AIJ(a,b){var c,d,e;if(JG(b)===JG(a))return BG(a.d$,b.d$);c=new Bq;d=JG(a);b=JG(b);e=J();F(F(F(F(e,C(80)),d),C(81)),b);Bd(c,I(e));L(c);}
function ATY(a,b){return AIJ(a,b);}
function Hi(){var a=this;Cj.call(a);a.x5=null;a.to=null;a.D9=null;a.pq=0;a.Dh=0;a.Fm=0;}
var A99=null;var A$c=null;function HL(){HL=Bg(Hi);ATI();}
function AQW(){HL();return A$c.d3();}
function ATI(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hi;c=K(Eu,2);d=c.data;AP4();d[0]=A$d;d[1]=A$e;HL();Df(b,C(82),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.sZ.d$){case 0:f=f+l.hT|0;h=h+1|0;break a;case 1:e=e+l.hT|0;g=g+1|0;break a;default:}}i=i|1<<l.lh;k=k+1|0;}b.x5=c;b.pq=e;b.Dh=f;b.Fm=i;c=K(Eu,g);m=c.data;b.to=c;c=K(Eu,h);n=c.data;b.D9=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.sZ.d$){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A99
=b;c=K(Hi,1);c.data[0]=b;A$c=c;}
var Ne=G(0);
var Mj=G(0);
var Pk=G(0);
var G3=G();
function NF(){G3.call(this);this.HG=null;}
function AJX(){var a=this;NF.call(a);a.Jb=0;a.pw=0;a.nB=null;a.pd=null;a.yT=null;}
function AU5(a,b){var c=new AJX();A59(c,a,b);return c;}
function A59(a,b,c){a.HG=b;a.nB=J();a.pd=B2(32);a.Jb=c;AJS();a.yT=A$f;}
function AER(a,b,c,d){var e,$$je;e=a.HG;if(e===null)a.pw=1;if(!(a.pw?0:1))return;a:{try{e.o4(b,c,d);break a;}catch($$e){$$je=Kk($$e);if($$je instanceof Hk){}else{throw $$e;}}a.pw=1;}}
function AAT(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AOv(b,c,d-c|0);e=CG(Z(16,Bc(e.length,1024)));g=AOk(e,0,e.data.length);h=a.yT;i=new Sr;b=CG(1);j=b.data;j[0]=63;Hs();k=A$g;i.qd=k;i.pC=k;c=j.length;if(c&&c>=i.A0){i.Kc=h;i.v$=b.d3();i.I$=2.0;i.A0=4.0;i.C8=B2(512);i.uo=CG(512);k=A$h;if(k===null){i=new Bq;Bd(i,C(83));L(i);}i.qd=k;i.pC=k;a:while(true){if(i.nv==3){f=new CP;W(f);L(f);}i.nv=2;b:{while(true){try{k=AI9(i,f,g);}catch($$e){$$je=Kk($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Jn(k))
{d=Ce(f);if(d<=0)break b;k=EI(d);}else if(Iz(k))break;h=!M6(k)?i.qd:i.pC;c:{if(h!==A$h){if(h===A$i)break c;else break b;}d=Ce(g);b=i.v$;l=b.data.length;if(d<l){k=A$j;break b;}AHA(g,b,0,l);}FM(f,f.Y+LI(k)|0);}}l=Iz(k);AER(a,e,0,g.Y);Rz(g);if(!l){while(true){d=i.nv;if(d!=2&&d!=4){f=new CP;W(f);L(f);}f=A$k;if(f===f)i.nv=3;l=Iz(f);AER(a,e,0,g.Y);Rz(g);if(!l)break;}return;}}L(A0H(f));}i=new Bq;Bd(i,C(84));L(i);}
function T(a,b){var c,d,e,f,g,h,i,j;Bj(By(a.nB,b),10);b=a.nB;c=b.J;d=a.pd;if(c>d.data.length)d=B2(c);e=0;f=0;if(e>c){b=new BU;Bd(b,C(85));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}AAT(a,d,0,c);a.nB.J=0;}
function HV(){G3.call(this);this.K3=null;}
function Zk(a){a.K3=CG(1);}
var Ms=G(HV);
var A90=null;function ATR(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ALp(){var b;b=new Ms;Zk(b);A90=b;}
function Eu(){var a=this;Cj.call(a);a.v_=null;a.sZ=null;a.hT=0;a.vB=0;a.lh=0;}
var A$d=null;var A$e=null;var A$l=null;function AP4(){AP4=Bg(Eu);A1Y();}
function A7O(a,b,c,d,e,f,g){var h=new Eu();XN(h,a,b,c,d,e,f,g);return h;}
function AQC(){AP4();return A$l.d3();}
function XN(a,b,c,d,e,f,g,h){AP4();Df(a,b,c);a.v_=d;a.sZ=e;a.hT=f;a.vB=g;a.lh=h;}
function A1Y(){var b;b=new Eu;AKM();XN(b,C(86),0,C(87),A$m,2,0,0);A$d=b;b=A7O(C(88),1,C(89),A$m,2,0,1);A$e=b;A$l=BA(Eu,[A$d,b]);}
function Nx(){var a=this;B.call(a);a.J1=null;a.KC=null;}
function ALB(b){var c,d;if(C_(b))L(ANX(b));if(!APs(Be(b,0)))L(ANX(b));c=1;while(c<N(b)){a:{d=Be(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(APs(d))break a;else L(ANX(b));}}c=c+1|0;}}
function APs(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Nh=G(Nx);
var A$f=null;function AJS(){AJS=Bg(Nh);ASG();}
function ALK(a){var b,c;b=new VB;b.hQ=C(90);Hs();c=A$g;b.k3=c;b.qq=c;b.Ku=a;b.A8=0.3333333432674408;b.IG=0.5;b.B_=CG(512);b.E8=B2(512);return b;}
function ASG(){var b,c,d,e,f;b=new Nh;AJS();c=K(BH,0);d=c.data;ALB(C(91));e=d.length;f=0;while(f<e){ALB(d[f]);f=f+1|0;}b.J1=C(91);b.KC=c.d3();A$f=b;}
function ABk(){var a=this;B.call(a);a.hC=null;a.tj=null;a.oP=null;a.Fr=null;a.vN=null;a.v3=null;}
function QJ(a,b){var c,d,e,f,g,h,i,$$je;c=new BH;d=b;while(a.tj[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.hC,b,d));f=e.data;Ew();d=f.length;AJS();g=A$f;h=AOk(e,0,d);a:{try{i=ALK(g);Hs();g=ANq(AK0(APT(i,A$h),A$h),h);break a;}catch($$e){$$je=Kk($$e);if($$je instanceof Gj){g=$$je;}else{throw $$e;}}L(A1p(C(92),g));}if(!g.Y&&g.e5==g.qT)c.be=g.kg;else{f=B2(Ce(g));e=f.data;c.be=f;Q8(g,f,0,e.length);}return c;}
function ZV(a,b){var c,d,e;c=new BH;d=b>>>1|0;e=d;while(a.oP[e]){e=e+1|0;}d=e-d|0;JU(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hC,b,d)));return c;}
function AGY(b){var c,d,e,f;c=b.data;d=c.buffer;e=c.byteOffset;f=c.byteLength;return new $rt_globals.Uint8Array(d,e,f);}
var Il=G(Cj);
var A$n=null;var A$m=null;var A$o=null;function AKM(){AKM=Bg(Il);A0T();}
function ASC(a,b){var c=new Il();APA(c,a,b);return c;}
function AUk(){AKM();return A$o.d3();}
function APA(a,b,c){AKM();Df(a,b,c);}
function A0T(){var b;A$n=ASC(C(93),0);b=ASC(C(94),1);A$m=b;A$o=BA(Il,[A$n,b]);}
var OJ=G(HV);
var A91=null;function ASO(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AME(){var b;b=new OJ;Zk(b);A91=b;}
function ALG(){Bq.call(this);this.HZ=null;}
function ANX(a){var b=new ALG();AXf(b,a);return b;}
function AXf(a,b){W(a);a.HZ=b;}
var MQ=G(FX);
function CU(){B.call(this);this.p=null;}
function Fq(a,b){a.p=b;}
function A6V(a,b){return 0;}
function AEx(){var a=this;B.call(a);a.B5=null;a.B4=0;}
function AWA(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.B5;d=a.B4;b=b.data;AMz(b);e=ZL(c.r_);if(e===null)e=ZL(c.sa);if(e!==null)V7(c,e.yE,e.FX,e.Fd,d);else{f=c.r4.data;g=c.j4;c.j4=g+1|0;f[g]=d;}c=c.G8;if(!AMz(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new Bq;W(b);L(b);}if(b.length<1){b=new Bq;ALm(b);L(b);}e=Ck(b[0]);h=Yn(c.EV,e);d=1;i=b.length;f=K(B,i-d|0);j=f.data;g=0;while(d<i){k=g+1|0;l=d+1|0;e=b[d];if(e===null)j[g]=null;else if(typeof e==='string'?1:0)j[g]=Fd(ANW(e));else if(!(e instanceof $rt_globals.ArrayBuffer
?1:0))l=ALu(A9I,e,b,l,f,g);else j[g]=A7G(ANW(e));g=k;d=l;}if(g!=j.length)f=B_(f,g);h.e(f);}}
var Ng=G(0);
function ABd(){B.call(this);this.FD=null;}
function A6v(a,b){a.FD.setPointerCapture(b.pointerId);}
function ABe(){B.call(this);this.Gu=null;}
function A5x(a,b){a.Gu.releasePointerCapture(b.pointerId);}
function Iy(){var a=this;B.call(a);a.qT=0;a.Y=0;a.e5=0;a.ll=0;}
function AGP(a,b){a.ll=(-1);a.qT=b;a.e5=b;}
function FM(a,b){var c,d,e;if(b>=0&&b<=a.e5){a.Y=b;if(b<a.ll)a.ll=0;return a;}c=new Bq;d=a.e5;e=J();Bj(P(F(P(F(e,C(95)),b),C(96)),d),93);Bd(c,I(e));L(c);}
function Ce(a){return a.e5-a.Y|0;}
function El(a){return a.Y>=a.e5?0:1;}
var AD3=G(0);
var Mh=G(Iy);
function AMq(b){var c,d;if(b>=0)return AV1(0,b,B2(b),0,b,0);c=new Bq;d=J();P(F(d,C(97)),b);Bd(c,I(d));L(c);}
function AOv(b,c,d){return AV1(0,b.data.length,b,c,c+d|0,0);}
function Q8(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BU;i=J();P(F(P(F(i,C(98)),g),C(99)),f);Bd(h,I(i));L(h);}if(Ce(a)<d){j=new Px;W(j);L(j);}if(d<0){j=new BU;k=J();F(P(F(k,C(100)),d),C(101));Bd(j,I(k));L(j);}g=a.Y;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.kg.data[m+a.s1|0];l=l+1|0;c=n;m=o;}a.Y=g+d|0;return a;}}b=b.data;j=new BU;d=b.length;k=J();Bj(P(F(P(F(k,C(102)),c),C(96)),d),41);Bd(j,I(k));L(j);}
function Oj(a,b){var c,d,e,f,g,h,i;c=0;d=N(b);if(a.tk){b=new KZ;W(b);L(b);}e=d-c|0;if(Ce(a)<e){b=new Kb;W(b);L(b);}if(c>N(b)){f=new BU;d=N(b);b=J();Bj(P(F(P(F(b,C(103)),c),C(96)),d),41);Bd(f,I(b));L(f);}if(d>N(b)){f=new BU;c=N(b);b=J();P(F(P(F(b,C(104)),d),C(105)),c);Bd(f,I(b));L(f);}if(c>d){b=new BU;f=J();P(F(P(F(f,C(103)),c),C(106)),d);Bd(b,I(f));L(b);}g=a.Y;while(c<d){h=g+1|0;i=c+1|0;AD7(a,g,Be(b,c));g=h;c=i;}a.Y=a.Y+e|0;return a;}
function N8(){var a=this;Iy.call(a);a.pv=0;a.sB=null;a.IL=null;}
function AOk(b,c,d){var e,f,g;e=b.data;f=new AHz;g=e.length;d=c+d|0;AGP(f,g);A2t();f.IL=A$p;f.pv=0;f.sB=b;f.Y=c;f.e5=d;f.IS=0;f.Bp=0;return f;}
function AHA(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.Bp){e=new KZ;W(e);L(e);}if(Ce(a)<d){e=new Kb;W(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BU;j=J();P(F(P(F(j,C(107)),h),C(99)),g);Bd(i,I(j));L(i);}if(d<0){e=new BU;i=J();F(P(F(i,C(100)),d),C(101));Bd(e,I(i));L(e);}h=a.Y;k=h+a.pv|0;l=0;while(l<d){b=a.sB.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Y=h+d|0;return a;}}b=b.data;e=new BU;d=b.length;i=J();Bj(P(F(P(F(i,C(102)),c),C(96)),d),41);Bd(e,I(i));L(e);}
function Rz(a){a.Y=0;a.e5=a.qT;a.ll=(-1);return a;}
function I1(){B.call(this);this.JH=null;}
var A$i=null;var A$h=null;var A$g=null;function Hs(){Hs=Bg(I1);AUC();}
function AMd(a){var b=new I1();APr(b,a);return b;}
function APr(a,b){Hs();a.JH=b;}
function AUC(){A$i=AMd(C(108));A$h=AMd(C(109));A$g=AMd(C(110));}
function IA(){var a=this;B.call(a);a.bw=0;a.cb=0;a.dH=0;a.kj=0;}
function A$q(a,b,c,d){var e=new IA();AFC(e,a,b,c,d);return e;}
function AFC(a,b,c,d,e){a.bw=d;a.cb=b;a.dH=c;a.kj=e;}
function AE1(a){return a.cb&&!a.bw&&!a.dH&&!a.kj?1:0;}
function On(a){return !a.cb&&!a.bw&&!a.dH&&!a.kj?1:0;}
function Qg(){var a=this;IA.call(a);a.i=null;a.J2=null;}
var AOs=G();
var LB=G(Mh);
function AKe(){var a=this;LB.call(a);a.tk=0;a.s1=0;a.kg=null;}
function AV1(a,b,c,d,e,f){var g=new AKe();AYM(g,a,b,c,d,e,f);return g;}
function AYM(a,b,c,d,e,f,g){AGP(a,c);a.Y=e;a.e5=f;a.s1=b;a.tk=g;a.kg=d;}
function AD7(a,b,c){a.kg.data[b+a.s1|0]=c;}
function L$(){var a=this;B.call(a);a.Kc=null;a.v$=null;a.I$=0.0;a.A0=0.0;a.qd=null;a.pC=null;a.nv=0;}
function Pv(){var a=this;B.call(a);a.jB=0;a.lY=0;}
var A$k=null;var A$j=null;function AJd(a,b){var c=new Pv();ANF(c,a,b);return c;}
function ANF(a,b,c){a.jB=b;a.lY=c;}
function Jn(a){return a.jB?0:1;}
function Iz(a){return a.jB!=1?0:1;}
function OI(a){return !TH(a)&&!M6(a)?0:1;}
function TH(a){return a.jB!=2?0:1;}
function M6(a){return a.jB!=3?0:1;}
function LI(a){var b;if(OI(a))return a.lY;b=new Di;W(b);L(b);}
function EI(b){return AJd(2,b);}
function W2(a){var b,c;switch(a.jB){case 0:b=new Td;W(b);L(b);case 1:b=new YJ;W(b);L(b);case 2:b=new WY;c=a.lY;W(b);b.JR=c;L(b);case 3:b=new S4;c=a.lY;W(b);b.LC=c;L(b);default:}}
function ANP(){A$k=AJd(0,0);A$j=AJd(1,0);}
function R4(){var a=this;IA.call(a);a.e1=null;a.Q=0;a.h4=0;a.su=0;a.nd=0;}
function Lz(a){return a.h4&&!a.su?1:0;}
var ALO=G();
function AL1(b,c){return (b+(c/2|0)|0)/c|0;}
function Zq(b,c,d){return 0.5+b*c/d|0;}
function GE(b,c){return ((b+c|0)-1|0)/c|0;}
function Fl(b){return b+0.5|0;}
function DG(b){return b+0.5|0;}
function DS(b,c,d){return Z(b,Bc(c,d));}
function N7(b,c){return AAr(b)/AAr(c);}
function APM(b){var c,d;c=1;d=10;while(c<10&&b>=d){c=c+1|0;d=d*10|0;}return c;}
var V5=G(0);
function Tw(){var a=this;B.call(a);a.wH=null;a.wG=null;}
function AXD(a,b){var c,d;c=a.wH;d=a.wG;$rt_globals.console.info("paste plain string "+b);c.e(Fd(b));DA(d);}
var R=G(0);
function AIn(){B.call(this);this.yJ=null;}
function OV(a,b){a.yJ.clipboardData.setData("text/plain",$rt_ustr(b));}
function AHz(){var a=this;N8.call(a);a.IS=0;a.Bp=0;}
function Ow(){B.call(this);this.I_=null;}
var A$p=null;var A$r=null;function A2t(){A2t=Bg(Ow);A7i();}
function ASA(a){var b=new Ow();AMH(b,a);return b;}
function AMH(a,b){A2t();a.I_=b;}
function A7i(){A$p=ASA(C(111));A$r=ASA(C(112));}
function Qj(){var a=this;B.call(a);a.z=null;a.j=null;a.bt=null;}
function ON(){var a=this;L$.call(a);a.C8=null;a.uo=null;}
function AI9(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.C8;e=0;f=0;g=a.uo;a:{while(true){if((e+32|0)>f&&El(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bc(Ce(b)+j|0,i.length);Q8(b,d,j,f-j|0);e=0;}if(!El(c)){k=!El(b)&&e>=f?A$k:A$j;break a;}i=g.data;j=Bc(Ce(c),i.length);l=new AAt;l.tz=b;l.Dt=c;k=AKs(a,d,e,f,g,0,j,l);e=l.zm;j=l.Ag;if(k===null){if(!El(b)&&e>=f)k=A$k;else if(!El(c)&&e>=f)k=A$j;}AHA(c,g,0,j);if(k!==null)break;}}FM(b,b.Y-(f-e|0)|0);return k;}
var Sr=G(ON);
function AKs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ps(h,2))break a;i=A$j;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!AHZ(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ps(h,3))break a;i=A$j;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!NK(l)){i=EI(1);break a;}if
(j>=d){if(El(h.tz))break a;i=A$k;break a;}c=j+1|0;m=k[j];if(!O1(m)){j=c+(-2)|0;i=EI(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ps(h,4))break a;i=A$j;break a;}k=e.data;o=Ym(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.zm=j;h.Ag=f;return i;}
var Hk=G(FX);
var AIW=G(CU);
function A7R(a){var b=new AIW();A2d(b,a);return b;}
function A2d(a,b){var c,d;Fq(a,b);b=$rt_globals.fetch("test.wasm");c=new Z7;b=b.then(BB(c,"f"));c=new Z6;b=b.then(BB(c,"f"));c=new Z5;d=new Z4;b.then(BB(c,"f"),BB(d,"f"));}
function AUs(a){}
function ATA(a,b,c){}
function H2(){var a=this;CU.call(a);a.di=null;a.w=null;}
function AGO(a,b){var c,d;Fq(a,b);a.di=ANG(0,0,64);a.w=AXk(b);Bb(b.j.bS,new ADQ);b=b.j.bS;c=a.w;Bs(c);d=new ADP;d.B$=c;Bb(b,d);}
function JY(a){Ex(a.p.z,a.di);}
function AKC(a,b,c){var d,e,f,g,h;a:{d=a.w;CA(d.bD,b);e=d.cf;if(e!==c){d.cf=c;f=(BY(d.dl)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eG(e,c);h=h+1|0;}}}}
function B9(){H2.call(this);this.k=null;}
function Dm(a,b){var c,d,e;AGO(a,b);c=new AHT;d=a.w;c.bi=CL(K(Wt,0));c.cM=(-1);c.oT=1;c.lS=new Y;c.m=d;a.k=c;Bb(a.w.dl,c);Bb(b.j.b3,a.k);c=b.j.fz;d=a.k;Bs(d);e=new ACD;e.Cs=d;Bb(c,e);b=b.j.cF;c=a.k;Bs(c);d=new ACE;d.Gy=c;Bb(b,d);}
function ASJ(a){JY(a);OB(a.k);}
function GU(a,b,c){var d,e,f;AKC(a,b,c);d=(BY(a.k.bi)).data;e=d.length;f=0;while(f<e){b=d[f];if(Uz(b)){if(!(!YM(b,2)?0:1))Qb(b);else ABR(b);}f=f+1|0;}}
function AJg(a,b){var c,d,e,f,g;c=a.k;d=0;e=(BY(c.bi)).data;f=e.length;g=0;while(g<f){d=e[g].P.cX(b)|d;g=g+1|0;}return d;}
function PW(){B9.call(this);this.l5=null;}
function A7X(a){var b=new PW();AJt(b,a);return b;}
function AJt(a,b){var c,d,e;Dm(a,b);b=D7();c=new HN;d=a.k;e=new Uu;e.Dm=a;I0(c,d,b,e,0,1);a.l5=c;c.sR=0;}
function AXJ(a){return En(1);}
function A6w(a,b,c){var d;d=a.k.m.cf!==0.0?0:1;GU(a,b,c);if(d)AB9(a.l5.gA);}
var ALN=G(PW);
function A8F(a){var b=new ALN();A6m(b,a);return b;}
function A6m(a,b){var c;AJt(a,b);c=new VV;c.By=a;RT(a,c,C(113));c=new VX;c.Fx=a;RT(a,c,C(114));}
function AU2(a){return En(1);}
function RT(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new QB;d=d.then(BB(e,"f"));f=new QD;f.xg=b;f.xf=c;g=new QC;d.then(BB(f,"f"),BB(g,"f"));}
var AL$=G();
function A5W(b){var c,d;if(N(b)>0){c=J();F(F(c,C(115)),b);$rt_globals.console.info($rt_ustr(I(c)));}a:{d=(-1);switch(Kt(b)){case -1570047148:if(!Bf(b,C(116)))break a;d=16;break a;case -1351411913:if(!Bf(b,C(117)))break a;d=5;break a;case -1073555521:if(!Bf(b,C(118)))break a;d=13;break a;case -1045861099:if(!Bf(b,C(119)))break a;d=17;break a;case -1045861098:if(!Bf(b,C(120)))break a;d=18;break a;case -811765794:if(!Bf(b,C(121)))break a;d=6;break a;case -785237654:if(!Bf(b,C(122)))break a;d=10;break a;case -695287066:if
(!Bf(b,C(123)))break a;d=19;break a;case -671368255:if(!Bf(b,C(124)))break a;d=32;break a;case -643550180:if(!Bf(b,C(125)))break a;d=29;break a;case -593968005:if(!Bf(b,C(126)))break a;d=21;break a;case -536831301:if(!Bf(b,C(127)))break a;d=27;break a;case -439438829:if(!Bf(b,C(128)))break a;d=20;break a;case -357667878:if(!Bf(b,C(129)))break a;d=23;break a;case -223304637:if(!Bf(b,C(130)))break a;d=1;break a;case -223304636:if(!Bf(b,C(131)))break a;d=2;break a;case -193916863:if(!Bf(b,C(132)))break a;d=24;break a;case 3556498:if
(!Bf(b,C(133)))break a;d=4;break a;case 28947978:if(!Bf(b,C(134)))break a;d=30;break a;case 281958493:if(!Bf(b,C(135)))break a;d=26;break a;case 485517998:if(!Bf(b,C(136)))break a;d=7;break a;case 544901384:if(!Bf(b,C(137)))break a;d=3;break a;case 654963552:if(!Bf(b,C(138)))break a;d=25;break a;case 702449737:if(!Bf(b,C(139)))break a;d=12;break a;case 1030621992:if(!Bf(b,C(140)))break a;d=15;break a;case 1465713255:if(!Bf(b,C(141)))break a;d=8;break a;case 1554501643:if(!Bf(b,C(142)))break a;d=14;break a;case 1609169232:if
(!Bf(b,C(143)))break a;d=11;break a;case 1726873928:if(!Bf(b,C(144)))break a;d=9;break a;case 1826008729:if(!Bf(b,C(145)))break a;d=31;break a;case 2090248989:if(!Bf(b,C(146)))break a;d=28;break a;case 2140756469:if(!Bf(b,C(147)))break a;d=22;break a;default:}}b:{switch(d){case 1:break;case 2:b=new X$;break b;case 3:case 4:b=new X9;break b;case 5:b=new Ya;break b;case 6:b=new X_;break b;case 7:b=new Ye;break b;case 8:b=new Yd;break b;case 9:b=new Yg;break b;case 10:b=new Yf;break b;case 11:b=new Yc;break b;case 12:b
=new AC$;break b;case 13:b=new AC_;break b;case 14:b=new ADa;break b;case 15:b=new ADb;break b;case 16:b=new ADj;break b;case 17:b=new ADk;break b;case 18:b=new ADl;break b;case 19:b=new ADm;break b;case 20:b=new ADn;break b;case 21:b=new ADo;break b;case 22:b=new ADe;break b;case 23:b=new ADf;break b;case 24:b=new ADg;break b;case 25:b=new ADh;break b;case 26:b=new ADi;break b;case 27:b=new ACV;break b;case 28:b=new ACW;break b;case 29:b=new ACX;break b;case 30:b=new ACY;break b;case 31:b=new ACZ;break b;case 32:b
=new ACU;break b;default:b=new Zs;break b;}b=new Yb;}return b;}
var AI7=G();
var Jr=G(0);
var Z7=G();
function AST(a,b){return b.arrayBuffer();}
var Z6=G();
function AVz(a,b){var c,d;c=new ABi;d=new ABg;return $rt_globals.WebAssembly.instantiate(b,ATU(BB(c,"f"),BB(d,"f")));}
var Z5=G();
function AVX(a,b){ARE(b);}
var Z4=G();
function A0t(a,b){AMe(b);}
function VV(){B.call(this);this.By=null;}
function A60(a,b){Ik(a.By.l5.bU.B,b);}
function VX(){B.call(this);this.Fx=null;}
function A2Q(a,b){Ik(a.Fx.l5.bU.N,b);}
var Yb=G();
function A40(a,b){return A8b(b);}
var X$=G();
function AUI(a,b){var c,d,e;c=new Qo;AMx(c,b);APt(c.cN);d=c.cN.kG.data;e=new Wm;e.u_=c;d[7]=e;b=b.j.bS;e=new Wn;e.ui=c;Bb(b,e);b=c.cN;e=new Wo;e.IP=c;b.l9=e;return c;}
var X9=G();
function A1m(a,b){return A8j(b);}
var Ya=G();
function AT3(a,b){var c,d,e,f,g;c=new AES;Fq(c,b);S_();d=A$s;c.KT=d;c.nc=AP7(d);c.kE=new Y;c.jF=new Y;c.dS=Lk();c.ey=Lk();c.pk=En(1);b=b.j.b3;d=new ZM;d.oi=c;Bb(b,d);b=c.pk.data[D1()*c.pk.data.length|0];d=K9(c.p.z,b,10);c.pa=d;Cm(c.p.z.bE,d);e=D5(c.p.z.bE,C(148));d=c.p.z.bE;f=J();F(Bj(f,43),b);g=DG(e+D5(d,I(f)));c.lf=g;c.kn=BI(c.kn,AIx(c,1,g,b,c.pa,c.p.z));c.km=BI(c.km,AIx(c,0,c.lf,b,c.pa,c.p.z));Th(c,c.dS,c.kn);Th(c,c.ey,c.km);Cb(c.dS.bb,1.0,1.0,1.0,1.0);Fz(c.dS,c.nc);Cb(c.ey.bb,1.0,1.0,1.0,1.0);Fz(c.ey,c.nc);b
=X();g=c.lf;d=J();P(F(d,C(149)),g);T(b,I(d));return c;}
var X_=G();
function A1Q(a,b){var c,d,e;c=new AAO;Dm(c,b);d=new ZI;d.p_=new Y;d.qN=new Y;c.Dp=d;c.f1=AOt();c.ec=AOt();c.q_=Dk(C(150),25.0);Bb(c.w.dl,c);d=b.j.bS;e=new AFq;e.yH=c;Bb(d,e);Bb(b.j.b3,c);b=b.j.cF;d=new AFl;d.zP=c;Bb(b,d);AIB(c.ec);BO(c.di,Co(43));b=EZ();Ka(c.f1,b);Ka(c.ec,b);b=c.f1;b.mO=new AFm;d=c.ec;d.mO=new AFo;d.rQ=new RJ;d.A7=new RK;Om(b,(TY(0)).mf);Om(c.ec,(TY(0)).mf);return c;}
var Ye=G();
function A3u(a,b){var c,d,e;c=new AEr;Dm(c,b);Bb(c.w.dl,c);BO(c.di,Co(43));d=b.j.bS;e=new Xj;e.H_=c;Bb(d,e);b=b.j.cF;d=new Xm;d.Gv=c;Bb(b,d);return c;}
var Yd=G();
function AWS(a,b){var c,d,e;c=new Z9;AGO(c,b);c.jq=BQ();c.hx=BQ();c.vn=M(C(151));c.lU=Hq();c.jo=0;d=c.w.dl;e=new QM;e.CP=c;Bb(d,e);Bb(b.j.b3,c);d=b.j.bS;e=new QL;e.z3=c;Bb(d,e);b=K9(b.z,C(150),35);c.l2=b;c.ow=AM9(Fk(b));BO(c.di,M(C(152)));return c;}
var Yg=G();
function AZK(a,b){var c,d,e;c=new Q1;E9(c,b);c.ed=AXT();c.jE=Gg();d=new ABs;d.Dq=c;c.vP=d;c.mK=D7();c.gF=0;c.jV=20;c.w_=20;P7(0,c.fS);d=b.j.b3;e=new XK;e.rc=c;Bb(d,e);d=b.j.fz;e=new ABt;e.zr=c;Bb(d,e);c.dQ=b.z;c.Ey=I6(b.bt);ABP(c.ed,K9(c.dQ,C(150),c.w_),c.jV,c.dQ.nZ);Lb(c.jE);return c;}
var Yf=G();
function AWN(a,b){var c,d,e;c=new LK;Dm(c,b);c.C7=ANQ();c.oC=CG(16384);d=A$t.data.length;c.mt=BC(d);c.p4=BC(d);b=b.j.cF;e=new SF;e.wB=c;Bb(b,e);b=c.w.dl;e=new SE;e.Fu=c;Bb(b,e);return c;}
var Yc=G();
function A28(a,b){var c,d,e,f,g,h,i;c=new AAs;Dm(c,b);d=b.j.cF;e=new TL;e.CS=c;Bb(d,e);f=b.bt.cS;g=new Ry;g.Jm=c;h=K(B,1);h.data[0]=C(153);Dg(f,g,C(154),h);e=new Rw;e.KI=c;h=K(B,1);h.data[0]=AN9([1,2,3,4,5]);Dg(f,e,C(155),h);e=new Rs;e.LU=c;i=K(B,1);i.data[0]=A7Q([1,2,3,4,5]);Dg(f,e,C(156),i);e=new Rr;e.KW=c;h=K(B,1);h.data[0]=Cf([1,2,3,4,5]);Dg(f,e,C(157),h);d=b.j.bS;e=new H6;g=new TK;g.E_=c;IJ(e,b,g);Bb(d,e);return c;}
var AC$=G();
function A1h(a,b){var c,d,e,f,g,h,i,j,k,l;c=new YY;E9(c,b);c.f0=Iv(0,0,300,300);c.h2=AKX(0,0,3,3);c.sh=new Y;d=b.z;b=b.j.b3;e=new QE;e.qQ=c;Bb(b,e);b=AQc(d);c.A3=b;F3(c.f0,b);F7(c.f0);b=c.f0.bm;FZ();BO(b,A$u);BO(c.f0.bb,C7(204,120,50));b=ANV(5,5);f=b.k_;g=0;h=0;while(g<5){i=0;while(i<5){j=(i^g)&1?0:255;k=f.data;j=j<<24>>24;l=h+1|0;k[h]=j;h=l+1|0;k[l]=j;l=h+1|0;k[h]=j;h=l+1|0;k[l]=(-1);i=i+1|0;}g=g+1|0;}e=CS(d);Nw(e,b);c.qV=e;V(c.h2.q,Bz(e),CM(c.qV));BO(c.h2.bm,c.fS);b=ANV(1,300);e=YC(10,20);k=b.k_;Vo(e,k);g
=0;while(g<300){k.data[(g*4|0)+3|0]=(-1);g=g+1|0;}g=0;while(g<300){f=k.data;h=g*4|0;f[h+3|0]=0;f[h+7|0]=0;f[h+11|0]=0;g=g+15|0;}d=CS(d);Nw(d,b);c.FN=d;b=c.sh;b.b=10;b.a=CM(d);return c;}
var AC_=G();
function AVs(a,b){var c,d,e;c=new Vb;E9(c,b);c.im=Iv(0,0,300,300);c.oF=new Y;c.ml=new Y;c.lq=new Y;d=b.z;b=b.j.b3;e=new AAU;e.mg=c;Bb(b,e);b=AQc(d);c.tY=b;F3(c.im,b);F7(c.im);b=c.im.bm;FZ();BO(b,A$u);BO(c.im.bb,C7(204,120,50));return c;}
var ADa=G();
function AR8(a,b){var c,d,e,f;c=new AEg;Fq(c,b);c.JB=20;c.LE=11;c.J3=220;c.of=new Y;c.K2=5000;c.jZ=1;c.ib=BA(Gi,[Co(0),Co(255)]);c.fw=b.z;d=b.j.b3;e=new ABE;e.nX=c;f=new XH;f.wZ=e;e.tP=f;Bb(d,e);b=b.j.fz;d=new Za;d.uH=c;Bb(b,d);b=HZ(c.fw,200,220);c.rh=b;HJ(b,C(150),20.0);b=HZ(c.fw,200,20);c.h8=b;HJ(b,C(150),20.0);c.kh=Gg();return c;}
var ADb=G();
function AY6(a,b){var c,d,e;c=new KW;E9(c,b);Bb(b.j.b3,c);d=b.j.bS;e=new AHv;e.A6=c;Bb(d,e);Bb(b.j.jC,new AHu);d=b.j.jC;e=new AHt;e.vW=c;Bb(d,e);Bb(b.j.kd,new AHs);d=b.j.kd;e=new AHw;e.ES=c;Bb(d,e);b=!YQ(b.bt)?C(158):C(159);d=J();F(F(d,C(160)),b);$rt_globals.console.info($rt_ustr(I(d)));return c;}
var ADj=G();
function A5m(a,b){var c,d;c=new UY;E9(c,b);c.yh=Co(20);c.hG=Iv(0,0,300,300);c.z_=Dk(C(13),80.0);b=b.j.bS;d=new UA;d.JJ=c;Bb(b,d);return c;}
var ADk=G();
function AYR(a,b){var c;c=new VQ;Qe(c,b);JD(c.ct,0,0,300,300);V(c.dV,300,300);return c;}
var ADl=G();
function A5i(a,b){var c;c=new VP;Qe(c,b);c.hb=new Y;c.hH=new Y;c.J0=16.0;c.rE=0;V(c.eh,150,140);V(c.dV,500,100);V(c.fu,150,200);V(c.fv,500,250);return c;}
var ADm=G();
function AQT(a,b){var c,d,e;c=new Zh;Dm(c,b);c.HO=3;c.qZ=Dk(C(161),20.0);c.lG=Hq();c.lF=1;Bb(c.w.dl,c);BO(c.di,Co(43));d=b.j.bS;e=new Rd;e.D0=c;Bb(d,e);b=b.j.cF;d=new Rf;d.z0=c;Bb(b,d);return c;}
var ADn=G();
function A00(a,b){return A8D(b);}
var ADo=G();
function AUq(a,b){var c,d,e,f,g,h,i,j,k,l;c=new ACz;E9(c,b);c.dT=APk(1);c.dA=APk(1);c.dL=APk(1);d=Sl();c.H2=d;c.mj=MC(d);c.jy=Gg();c.g7=0;c.iz=0;c.j2=100;d=new AGv;d.ts=c;c.tN=d;c.mP=AKz(1);c.gX=I6(b.bt);Lb(c.jy);Bb(b.j.b3,c);d=b.j.fz;e=new AGw;e.Ak=c;Bb(d,e);b=b.j.bS;d=new AGx;d.KF=c;Bb(b,d);b=Hq();d=AYS(c.j2,b);e=new Tn;f=c.j2;g=f/4|0;e.sj=K(GW,g);h=BC(g);i=h.data;e.oE=h;g=i.length;j=f/(1+g|0)|0;f=0;k=0;while(f<g){e.oE.data[f]=k;i=e.sj.data;l=new TD;l.AY=e;l.AX=k;i[f]=l;k=k+(1+CC(b,j)|0)|0;f=f+1|0;}c.dT.fY
=OU(1);c.dA.fY=OU(0);c.dL.fY=AMm(0);IO(c.dT,d.cC,d.cI);IO(c.dA,d.cC,d.cI);Y0(c.dL,e.sj,e.oE);i=CG(c.j2);h=i.data;j=0;f=h.length;while(j<f){h[j]=CC(b,4)<<24>>24;j=j+1|0;}EY(c.dT,i);EY(c.dA,i);EY(c.dL,i);return c;}
var ADe=G();
function AQ7(a,b){var c,d,e;c=new WC;E9(c,b);c.jn=Gg();c.gB=UV();c.jG=0;c.rr=5000;d=new XR;d.xs=c;c.D6=d;P7(0,c.fS);P7(100,c.gB.bb);Bb(b.j.b3,c);d=b.j.fz;e=new XQ;e.AA=c;Bb(d,e);c.iP=b.z;c.Cg=I6(b.bt);Lb(c.jn);return c;}
var ADf=G();
function A2n(a,b){var c,d,e,f;c=new Sa;KB(c,b);BO(c.di,Co(43));c.og=Lq(c.k);d=b.j.bS;e=new H6;f=new Rh;f.GN=c;IJ(e,b,f);Bb(d,e);b=b.j.cF;d=new Ri;d.DW=c;Bb(b,d);return c;}
var ADg=G();
function AT7(a,b){var c,d;c=new T3;Dm(c,b);c.pl=D7();Bb(c.w.dl,c);BO(c.di,Co(43));b=b.j.cF;d=new AAP;d.CX=c;Bb(b,d);return c;}
var ADh=G();
function AS$(a,b){var c,d,e,f;c=new Te;Dm(c,b);c.oM=D7();Bb(c.w.dl,c);BO(c.di,Co(43));d=b.j.bS;e=new H6;f=new RG;f.wE=c;IJ(e,b,f);Bb(d,e);b=b.j.cF;d=new RF;d.zE=c;Bb(b,d);return c;}
var ADi=G();
function AZ7(a,b){var c;c=new Vn;KB(c,b);c.tT=D7();BO(c.di,Co(43));return c;}
var ACV=G();
function ARD(a,b){var c,d,e,f,g,h,i;c=new Pt;E9(c,b);c.o1=AH8(1.0,0.0,0.0,1.0);c.eR=UV();c.Ee=new SZ;d=new XP;d.rM=3.1415927410125732;e=AQp();d.jD=e;d.Bu=FL(e,1.25);d.BY=FL(d.jD,1.3333333730697632);d.z5=FL(d.jD,1.5);d.xi=FL(d.jD,1.6666666269302368);d.Hh=FL(d.jD,2.0);d.y9=AH8(d.rM/24.0,15.0,3.0,0.5);e=AH8(d.rM/12.0,25.0,3.0,0.5);d.Jt=e;f=K(BS,8);g=f.data;g[0]=d.jD;g[1]=d.Bu;g[2]=d.BY;g[3]=d.z5;g[4]=d.xi;g[5]=d.Hh;g[6]=d.y9;g[7]=e;d.Gq=f;c.C$=d;c.jf=K(BS,g.length);c.uS=new Y;c.sg=new Y;c.pX=new Y;Cb(c.fS,0.0,
0.0,0.0,1.0);d=b.j.bS;e=c.Ee;Bs(e);h=new ST;h.GM=e;Bb(d,h);Bb(b.j.b3,c);b=c.eR.bb;FZ();BO(b,A$u);i=N7(0.5,0.375);JR(0.375,i);JR(0.375,JR(3.0,N7(i,3.0)));FL(AQp(),3.0);return c;}
var ACW=G();
function A33(a,b){var c,d,e;c=new Rp;KB(c,b);c.zy=D7();BO(c.di,Co(43));d=b.j.cF;e=new Xq;e.H8=c;Bb(d,e);b=b.j.bS;d=new Xp;d.xP=c;Bb(b,d);return c;}
var ACX=G();
function AXU(a,b){var c,d,e;c=new ACH;KB(c,b);c.rP=D7();BO(c.di,Co(43));d=b.j.cF;e=new SK;e.GA=c;Bb(d,e);b=b.j.bS;d=new SJ;d.IK=c;Bb(b,d);return c;}
var ACY=G();
function A6N(a,b){return A3l(b);}
var ACZ=G();
function AZW(a,b){var c,d,e,f;c=new ZQ;Dm(c,b);b=D7();d=new Oq;e=c.k;f=new Rn;f.LQ=c;Sk(d,b,e,f);c.Hm=d;return c;}
var ACU=G();
function AU_(a,b){return A7X(b);}
var Zs=G();
function A2p(a,b){return A3l(b);}
function Jf(){var a=this;B.call(a);a.bC=null;a.ea=null;a.ch=null;a.n8=null;a.hJ=null;a.fV=null;a.Cn=null;a.D$=null;a.gr=null;a.G4=null;a.qa=null;a.ru=null;a.lz=null;}
function A$v(a,b,c,d,e,f,g){var h=new Jf();OA(h,a,b,c,d,e,f,g);return h;}
function Sl(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=new Jf;c=new KC;d=new Gi;FZ();IY(d,A$w);O3(c,d,BZ(A$u),BZ(A$x),BZ(A$y),BZ(A$z),BZ(A$A),BZ(A$B),BZ(A$C),BZ(A$D),BZ(A$E));e=new I_;d=M(C(162));f=M(C(163));g=M(C(164));h=M(C(165));i=M(C(166));j=M(C(167));k=new Gl;l=M(C(168));m=M(C(169));n=M(C(170));H4(k,l,m,n,n,M(C(171)));MV(e,d,f,g,h,i,j,k);o=(AOu()).data;p=o.length;q=K(KY,p);r=q.data;s=0;while(s<p){r[s]=o[s].qo;s=s+1|0;}OA(b,c,e,q,AIL(M(C(172)),M(C(173)),BZ(A$E),M(C(174)),M(C(175)),M(C(176)),M(C(177))),
EZ(),AIw(M(C(178)),M(C(179)),M(C(180)),M(C(181)),M(C(171))),ANc());return b;}
function D7(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=new Jf;c=new KC;d=new Gi;S_();IY(d,A$F);O3(c,d,BZ(A$s),BZ(A$G),BZ(A$H),BZ(A$I),BZ(A$J),BZ(A$K),BZ(A$L),BZ(A$M),BZ(A$N));e=new I_;d=M(C(182));f=M(C(183));g=M(C(184));h=M(C(184));i=M(C(185));j=M(C(167));k=new Gl;l=M(C(186));m=M(C(187));n=M(C(188));H4(k,l,m,n,n,M(C(189)));MV(e,d,f,g,h,i,j,k);o=(AKa()).data;p=o.length;q=K(KY,p);r=q.data;s=0;while(s<p){r[s]=o[s].i1;s=s+1|0;}OA(b,c,e,q,AIL(M(C(190)),M(C(191)),BZ(A$N),M(C(174)),M(C(175)),M(C(176)),M(C(177))),
ANQ(),AIw(M(C(178)),M(C(179)),M(C(192)),M(C(181)),M(C(189))),ANc());return b;}
function OA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=d.data;j=Dk(C(161),17.0);k=Dk(C(150),15.0);l=Dk(C(13),15.0);m=Dk(C(150),16.0);n=Dk(C(161),15.0);a.bC=b;a.ea=c;a.n8=d;a.hJ=e;if(i.length<15){b=new Bq;W(b);L(b);}a.ch=f;a.fV=g;a.Cn=h;a.gr=j;a.G4=k;a.ru=l;a.lz=m;a.qa=n;c=c.pp;b=new ADE;e=AIw(FA(g.s7,c),FA(g.rH,c),FA(g.s_,c),FA(g.mA,c),FA(g.pF,c));f=FA(a.ea.jp,c);c=FA(a.ea.mD,c);b.JW=e;b.E6=f;b.JN=c;a.D$=b;}
function MC(a){var b,c,d,e;b=new O0;c=null;d=a.fV;e=a.hJ;T4(b,c,d,e.rI,a.bC.df,e.tx);return b;}
function AF0(a){var b,c;b=new O0;c=a.ea;T4(b,c.sJ,null,c.rT,c.jp,c.pp);return b;}
function Pl(a,b,c){b=b.data;return c<b.length&&b[c]?GH(a.fV,b[c],a.bC.df):a.bC.df;}
var I5=G(0);
function AMh(a){a.fa(Sl());}
function Nt(a){a.fa(D7());}
function AM8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;b=new Jf;c=new KC;d=new Gi;ALL();IY(d,A$O);O3(c,d,BZ(A$P),BZ(A$Q),BZ(A$R),BZ(A$S),BZ(A$T),BZ(A$U),BZ(A$V),BZ(A$W),BZ(A$X));e=new I_;d=M(C(193));f=M(C(194));g=M(C(195));h=M(C(195));i=M(C(184));j=M(C(196));k=new Gl;l=M(C(197));m=M(C(198));n=M(C(199));H4(k,l,m,n,n,M(C(200)));MV(e,d,f,g,h,i,j,k);o=(APC()).data;p=o.length;q=K(KY,p);r=q.data;s=0;while(s<p){r[s]=o[s].sb;s=s+1|0;}g=AIL(M(C(201)),M(C(202)),BZ(A$X),M(C(174)),M(C(175)),M(C(176)),M(C(177)));f=new Ji;j
=new Js;AZn();d=A$Y;P5(j,d,A$Z,A$0,A$1,A$2,d);MG(f,j,APV(),AMj(M(C(203)),M(C(193)),Co(0)),APV(),AMI(1,0.07500000298023224),A$3,A$4);j=AIw(M(C(204)),M(C(205)),M(C(206)),M(C(207)),M(C(200)));d=new Gl;l=M(C(208));k=M(C(209));h=M(C(210));H4(d,l,k,h,h,M(C(200)));OA(b,c,e,q,g,f,j,d);a.fa(b);}
function DM(){var a=this;B.call(a);a.v=null;a.iC=null;a.fx=null;a.Ie=null;}
function Im(a,b,c,d){a.v=b;a.fx=c;a.iC=d;}
function II(a,b,c){return VN(a,b,a.AP(),c);}
function AQe(a){return Gr(Bv(a));}
function VN(a,b,c,d){var e,f,g,h,i,j,k;e=A6Q(a.v.m,b);DX(e,a.fx.ch);CN(e,c);b=new Wi;b.xk=a;b.xj=e;VW(e,b);b=new Wj;b.Ap=a;e.Be=b;b=e.M;if(b.cf!==0.0){b=b.bD;f=AGA(e);g=Ci(e.M,5.0);h=Ci(e.M,d);i=h?h+f|0:0;c=BR(g+h|0,(g+i|0)+f|0);j=new Y;k=b.b;g=g*2|0;Sz(j,(k-g|0)-h|0,((b.a-f|0)-g|0)-i|0);Ee(e,c,j);}return e;}
function ANY(a,b){var c;c=a.Ie;if(c!==null)c.d();IK(a.v,b);Kr(b);a.bx();}
function AM6(a,b){var c,d,e;c=a.ly(b);if(c!==null){d=a.v;e=a.fx;E1(d,e.ch,e.gr,b,c);}return c===null?0:1;}
var ES=G(0);
function A3Y(a){}
function AS0(a){}
function AQz(a,b,c){return 0;}
function AYN(a){return null;}
function HN(){var a=this;DM.call(a);a.bU=null;a.gA=null;a.re=null;a.mn=null;a.sq=null;a.HW=null;a.sR=0;a.l4=0;}
function A$5(a,b,c,d,e){var f=new HN();I0(f,a,b,c,d,e);return f;}
function I0(a,b,c,d,e,f){Im(a,b,c,d);a.sR=1;a.l4=1;b=A8x(a.v,e,f);a.bU=b;AB3(b,a.fx);b=II(a,a.bU,30.0);a.gA=b;c=new Zg;c.y2=a;b.iI=c;c=new Zf;c.ye=a;b.iF=c;DY(a.v,b);b=a.bU;b.B.no=a;b.N.no=a;Cn(a.v.m,a);}
function A2Y(a){return !a.bU.ql?AQe(a):C(211);}
function ABa(a,b){var c;c=a.bU;return c.B!==b&&c.N!==b&&a!==b?0:1;}
function YF(a){return ABa(a,a.v.m.bT);}
function A5f(a,b){a.fx=b;DX(a.gA,b.ch);AB3(a.bU,b);}
function NV(a,b,c){var d,e,f;d=FF(b);e=J();F(F(e,C(212)),d);$rt_globals.console.info($rt_ustr(I(e)));f=new Yk;f.wt=a;f.ws=b;f.wr=c;d=B0();Bs(d);e=new Yl;e.Gl=d;VS(b,f,e);}
function ACs(a){var b;if(a.re!==null&&a.mn!==null){JZ(a.bU,1);b=a.HW;if(b!==null)b.e(a);}}
function A6e(a){if(YF(a))Cn(a.v.m,null);a.gA=null;a.bU=null;}
function AZS(a,b){var c,d,e,f,g,h,i,j,k;c=O_(a);if(c===null)return !a.l4?null:Cx(BA(Bn,[NR(a,1,C(213)),NR(a,0,C(214))]));d=c!==a.bU.B?0:1;e=!a.l4?null:NR(a,d,!d?C(214):C(213));f=a.bU;g=f.ft;h=a.iC;i=new Sb;j=f.B;f=f.N;k=g.bF.m;i.nW=j;i.nV=f;i.CV=k;f=a.v;Bs(f);j=new AHI;j.Hb=f;return N9(Jz(g,c,h,a,i,j),b,e);}
function NR(a,b,c){var d,e;d=new Bn;e=new Zl;e.vT=a;e.vS=b;BT(d,e,c);return d;}
function ABH(a,b){var c,d,e;c=a.v;d=c.m.bk;e=new Zo;e.Av=a;e.Aw=b;EM(d,J0(c,e));}
function A6f(a,b){var c,d,e,f,g,h,i,j,k;if(a.l4&&AGl(b)){c=a.v.m.bT;b=a.bU;d=b.B;if(!(d!==c&&b.N!==c))ABH(a,d!==c?0:1);return 1;}if(b.cb&&b.Q==90){d=a.bU;e=b.bw;b=d.m$;c=d.B;d=d.N;if(e){if(!PY(b.eH)){f=c.c.g;g=d.c.g;f=B5(b.eH,f);b=B5(b.eH,g);e=f!==null&&YX(f)?0:1;h=b!==null&&YX(b)?0:1;i=e?2147483647:(AA4(f)).ix.O;j=h?2147483647:(AA4(b)).ix.O;if(!(e&&h)){g=null;k=null;if(j>=i)d=g;else k=(AEm(b)).gl;if(i>=j)c=d;else k=(AEm(f)).gl;if(c!==null&&k!==null){b=(Mq(c.c.g,k,1)).i9;CE(c,b.b,b.a,0);}}}}else if(!PY(b.eH))
{f=c.c.g;g=d.c.g;f=B5(b.eH,f);b=B5(b.eH,g);e=f!==null&&!Oe(f)?0:1;h=b!==null&&!Oe(b)?0:1;i=e?(-1):(ACy(f)).ix.O;j=h?(-1):(ACy(b)).ix.O;if(!(e&&h)){g=null;k=null;if(j<=i)d=g;else k=(MS(b)).gl;if(i<=j)c=d;else k=(MS(f)).gl;if(c!==null&&k!==null){b=(Mq(c.c.g,k,0)).nF;CE(c,b.b,b.a,0);}}}return 1;}if(a.sR&&b.Q==27){if(!On(b))P0(a.v);else JX(a.gA);return 1;}if(b.Q==112&&Lz(b)){d=a.bU;XW(d,d.s0?0:1);}if(b.Q==118&&Lz(b)){if(b.bw)AMK(a.bU,O_(a));else{b=a.bU;d=O_(a);e=Gn(d);h=d!==b.B?0:1;e=EQ(b.br,e,h)+1|0;a:{while(true)
{k=b.br.H.data;if(e>=k.length)break;if(k[e].ca){N$(b,k[e]);break a;}e=e+1|0;}}}}return 0;}
function O_(a){var b,c,d;b=a.v.m.bT;c=a.bU;d=c.B;if(b===d)return d;c=c.N;if(b===c)return c;if(a.sq===c)d=c;return d;}
function Uu(){B.call(this);this.Dm=null;}
function AVt(a){return a.Dm.j9();}
var CI=G(0);
function AHT(){var a=this;B.call(a);a.m=null;a.bi=null;a.eU=null;a.cM=0;a.oT=0;a.lS=null;}
function E1(a,b,c,d,e){var f,g;f=ACh(a.m);Hx(f,b,c);b=a.m;c=b.bT;g=new AG4;g.Bm=b;g.Bl=c;f.lE=g;UB(f,d,e);HS(a,f);}
function HS(a,b){var c;c=a.eU;if(c!==b)a.eU=BI(c,b);}
function C6(a,b){var c;c=new AGM;c.tZ=a;c.t1=b;return c;}
function J0(a,b){var c;c=new AH3;c.C5=a;c.C6=b;return c;}
function DK(a){var b;b=a.eU;if(b!==null){Nb(b);HS(a,null);}}
function DY(a,b){var c,d,e,f,g,h;c=a.bi;if(c.cK>0)LA(D$(c,0));if(a.cM>=0){if(Oy(b,a.lS))Zp(a);else a.cM=a.cM+1|0;}c=a.bi;d=c.cK;e=c.dB;if(d==e.data.length)c.dB=B_(e,d+4|0);f=c.cK;g=f;while(0<g){h=c.dB.data;h[g]=h[g-1|0];g=g+(-1)|0;}c.dB.data[0]=b;c.cK=f+1|0;c.ho=null;Lc(b);return b;}
function Zp(a){var b;b=a.cM;if(b>=0){NY(D$(a.bi,b));a.cM=(-1);}}
function IK(a,b){var c,d;if(AHL(a)!==b?0:1){if(!a.cM)NY(b);LA(b);}c=AA_(a.bi,b);d=a.cM;if(c==d)a.cM=(-1);else if(d>c)a.cM=d-1|0;UC(a.bi,b);b=a.bi;if(b.cK>0)Lc(D$(b,0));}
function OB(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(BY(a.bi)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.m.bM;d.P.dm(e);if(d.P.f.a>0){f=d.K;g=d.hq.kS;if(!T$(f)){if(!PA(f)&&!(!f.fr&&f.eE!==null)){f.fr=0;AGf(f);h=f.fi;i=(h.er+h.eQ+5.0)/10.0;j=Ci(f.hj,f.mG);k=j+GK(e.bE,f.fi,f.lj,i*2.0)|0;f.jX=k;k=DS(0,k,f.h.b);if(k){l=Ef(e,k,f.h.a,f.hj.cO);Cm(l,f.fi);h=f.lj;m=j;n=m+i;o=f.fi;p=o.er;BX(l,h,n,m+p-(p+o.eQ)/16.0);h=f.eE;if(h===null){h=CS(e);f.eE=h;}Da(h,l);Em(l);Cb(f.oS,0.0,0.0,Bz(f.eE),CM(f.eE));}}h=g.n4;l=f.eE;if
(l===null)Sw(f,e,0,f.h.b,h);else{j=Bz(l);l=g.qH;g=f.f;k=g.b;q=g.a;g=f.eE;Dd(e,k,q,g.el,f.oS,g,l,h,f.hj.cO);k=f.h.b;if(j<k)Sw(f,e,j,k-j|0,h);}}f=d.dM;if(f!==null){g=d.M;o=d.K;h=d.hq.kS;if(f.kL!==null){if(f.dK===null)AK$(f,g);k=Ci(g,2.0);j=Z(0,((o.h.a-CM(f.dK)|0)/2|0)-k|0);f.hr.b=(((o.f.b+o.h.b|0)-j|0)-Bz(f.dK)|0)-k|0;l=f.hr;q=o.f.a+j|0;j=k/2|0;l.a=q-j|0;l=f.mx;q=Bz(f.dK);r=k*2|0;V(l,q+r|0,CM(f.dK)+r|0);l=g.bM;o=f.hr;Bi(l,o.b,o.a,f.mx,!f.nM?h.n4:h.li);Cb(g.oA,0.0,0.0,Bz(f.dK),CM(f.dK));l=g.bM;o=f.hr;k=o.b+k|0;q
=o.a+j|0;o=f.dK;Dd(l,k,q,o.el,g.oA,o,h.qH,!f.nM?h.n4:h.li,0);}}}if(!Uz(d)){j=Ci(d.M,2.0);k=T$(d.K);h=d.M;l=h.cp;h=h.h$;q=k?0:d.K.h.a;f=d.P.h;V(h,f.b,f.a+q|0);BM(e,1);Od(e,h,!k?d.K.f:d.P.f,d.hq.kS.li, -j|0,l);h=d.P;AO8(e,h.h,h.f,j,q,ABn(d.hq.nw,d.M.cf),d.hq.nw.qs,l);}c=c+(-1)|0;}h=a.eU;if(h!==null)AIX(h);}
function In(a,b){var c,d,e,f;c=a.m;if(c.cO==b)d=0;else{c.cO=b;Dt(c.bk);d=1;}if(d){c=a.eU;if(c!==null){c=B4(c.cq);while(B6(c)){Pq(B7(c));}}e=(BY(a.bi)).data;b=e.length;f=0;while(f<b){c=e[f];c.K.fr=1;c.P.lW();f=f+1|0;}}return d;}
function AY9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;a:{c=a.eU;if(c!==null){d=0;e=c.cq.l-1|0;while(e>=0){d=d|OW(B1(c.cq,e),b.i,c.c3.dd);e=e+(-1)|0;}if(d){d=1;break a;}}d=0;}b:{f=0;CA(a.lS,b.i);if(d)f=(-1);else{c=a.m.dd;g=BY(a.bi);while(true){h=g.data;if(f>=h.length){f=(-1);break b;}c:{i=h[f];j=b.i;if(Cd(i.K,j)){k=i.dM;if(k!==null)k.nM=VG(k,j);e=CH(i.M.dd,null);}else{k=i.dM;if(k!==null)k.nM=0;l=Ci(i.M,7.0);m=Ci(i.M,25.0);if(NW(i,j.b,l)){e=AAx(i,j.b,m);if(Ob(i,j.a,l)){e=CH(i.M.dd,MZ(e,C(215)));break c;}if(Lh(i,j.a,l))
{e=CH(i.M.dd,MZ( -e|0,C(215)));break c;}}if(PD(i,j.a,l)){e=AHC(i,j.a,m);if(P2(i,j.b,l)){e=CH(i.M.dd,MZ(e,C(216)));break c;}if(Nv(i,j.b,l)){e=CH(i.M.dd,MZ( -e|0,C(216)));break c;}}e=0;}}n=Cd(i.P,b.i);i.P.ev(b,c);if(!e&&!n?0:1)break;f=f+1|0;}}}e=a.cM;if(e!=f){if(e>=0)NY(D$(a.bi,e));a.cM=f;}if(a.oT&&!d&&f<0)OC(a.m.bk,null);return !d&&f<0?0:1;}
function ARV(a,b,c,d){var e,f,g,h,i,j,k;e=a.eU;if(e!==null){f=0;g=e.cq.l-1|0;a:{while(g>=0){f=Pw(B1(e.cq,g),b.i,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(BY(a.bi)).data;f=h.length;g=0;i=BG(d,2);while(g<f){j=h[g];k=Cd(j.K,b.i);if(k&&!i){AFr(j,4);Qb(j);k=1;}else b:{c:{if(!k&&!Rt(j,b.i)){if(!M3(j,b))break c;if(!j.P.cL(b,c,d))break c;}k=1;break b;}k=0;}if(k)return 1;g=g+1|0;}return 0;}
function ATy(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.eU;if(d!==null){e=null;f=d.cq.l-1|0;a:{while(f>=0){e=B1(d.cq,f);g=b.i;h=G4(e.cE,g);if(!h&&!TJ(e.cE)){e=e.mO;if(e!==null)e.d();}e=!h?null:A$6;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=BY(a.bi);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.i;if(!c){c:{f=Ci(d.M,7.0);k=Ci(d.M,25.0);if(NW(d,e.b,f)){l=AAx(d,e.b,k);if(Ob(d,e.a,f)){g=Kv(d,e,l,(-1));break c;}if(Lh(d,e.a,f)){g=Kv(d,e,l,1);break c;}}if(PD(d,e.a,f)){k=AHC(d,e.a,k);if(P2(d,
e.b,f)){g=Kv(d,e,(-1),k);break c;}if(Nv(d,e.b,f)){g=Kv(d,e,1,k);break c;}}g=null;}if(g!==null)break b;if(Cd(d.K,e)){g=d.dM;if(g!==null&&VG(g,e)){d.dM.kL.d();g=A$6;break b;}g=d.P.f;f=g.b;l=e.b;f=f-l|0;k=g.a;m=e.a;k=k-m|0;e=d.K.f;l=e.b-l|0;m=e.a-m|0;e=new Y;g=new AFc;g.AT=d;g.AU=l;g.AR=m;g.AS=e;g.AV=f;g.AW=k;break b;}}g=null;}f=g===null&&!M3(d,b)?0:1;k=!c&&h&&f?1:0;if(k){l=AA_(a.bi,d);if(l>0)WL(a,l);}if(g===null&&f)g=d.P.ce(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function WL(a,b){var c,d,e,f,g,h;LA(D$(a.bi,0));c=a.cM;if(c==b)a.cM=0;else if(c>=0){if(Oy(D$(a.bi,b),a.lS))Zp(a);else{d=a.cM;if(d<b)a.cM=d+1|0;}}e=a.bi;c=e.cK;if(c<=b){e=new PE;Bd(e,Pe(b));L(e);}if(b){f=e.dB;g=f.data;h=g[b];while(b>0){g[b]=g[b-1|0];b=b+(-1)|0;}g[0]=h;g=e.ho;if(g!==null)BE(f,0,g,0,c);}Lc(D$(a.bi,0));}
function P0(a){var b;b=a.bi.cK;if(b>1)WL(a,b-1|0);}
function A6F(a,b,c){var d,e,f,g,h;d=a.eU;if(d!==null&&JW(d))return 1;e=(BY(a.bi)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!Cd(d.K,b.i)){if(!M3(d,b))break b;if(!d.P.cP(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A2G(a,b,c){var d,e,f,g,h;d=(BY(a.bi)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.P;h.cz(h.f,h.h,c);h=g.K;if(h.i3!==null){h.fi=null;h.jX=0;h.fr=1;}IN(g);h=g.dM;if(h!==null)OY(h);f=f+1|0;}}
function AHL(a){var b;b=a.bi;return b.cK<=0?null:D$(b,0);}
function ALj(){var a=this;B.call(a);a.bM=null;a.bk=null;a.dd=null;a.GO=null;a.bD=null;a.cf=0.0;a.cO=0;a.bT=null;a.dl=null;a.cp=null;a.h$=null;a.oA=null;a.HI=null;}
function AXk(a){var b=new ALj();AT6(b,a);return b;}
function AT6(a,b){var c,d;a.bD=new Y;a.dl=CL(K(CI,0));a.cp=new Y;a.h$=new Y;a.oA=new BS;a.HI=new BS;c=b.z;a.bM=c;d=b.bt;a.bk=d;a.GO=b.j.cZ;a.cO=c.nZ;a.dd=I6(d);c=b.j.o9;d=new AB6;d.xc=a;Bb(c,d);c=b.j.ov;d=new AB5;d.Am=a;Bb(c,d);Bb(b.j.jC,a);Bb(b.j.kd,a);}
function Li(a){var b;b=a.bT;if(b!==null)b.qe();}
function LD(a){var b;b=a.bT;if(b!==null)b.q$();}
function AAJ(a,b){var c;c=a.bk.ez!==(EK()).activeElement?0:1;if(c)LD(a);a.bT=b;if(c)Li(a);}
function Cn(a,b){if(a.bT!==b){LD(a);a.bT=b;Li(a);}}
function AFb(a,b){if(a.bT===b)a.bT=null;}
function LQ(a,b){return b!==a.bT?0:1;}
function KO(a){return a.bM.bE;}
function FC(a,b){return Fe(a.bM,b.fn,b.eN*a.cf,b.ih,0);}
function Ci(a,b){return BF(b,a.cf);}
function Ql(a,b){var c;c=a.bM;if(!a.cO)c.sE=b;else c.qS=b;Dt(a.bk);}
function A5F(a,b,c){var d;d=a.bT;return d!==null&&d.g0(b,c)?1:0;}
function A3X(a){var b;b=a.bT;return b===null?null:b.D5();}
function ACD(){B.call(this);this.Cs=null;}
function AWn(a,b,c,d){var e,f,g,h;e=(BY(a.Cs.bi)).data;f=e.length;g=0;a:{while(g<f){if(e[g].P.dE(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function ACE(){B.call(this);this.Gy=null;}
function AXB(a,b){var c,d,e;c=a.Gy;b=b.i;d=0;e=c.bi.cK;a:{while(d<e){if(Oy(D$(c.bi,d),b)){c=D$(c.bi,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.Be;if(c!==null&&AM6(c.Ap,b)?1:0){d=1;break b;}}d=0;}return d;}
function KC(){var a=this;B.call(a);a.Hp=null;a.df=null;a.qi=null;a.I0=null;a.mV=null;a.o5=null;a.q7=null;a.lg=null;a.lb=null;a.nk=null;}
function A$7(a,b,c,d,e,f,g,h,i,j){var k=new KC();O3(k,a,b,c,d,e,f,g,h,i,j);return k;}
function O3(a,b,c,d,e,f,g,h,i,j,k){a.Hp=b;a.df=c;a.qi=d;a.I0=e;a.mV=f;a.o5=g;a.q7=h;a.lg=i;a.lb=j;a.nk=k;}
function I_(){var a=this;B.call(a);a.jp=null;a.mD=null;a.rT=null;a.sJ=null;a.D2=null;a.ue=null;a.pp=null;}
function A$8(a,b,c,d,e,f,g){var h=new I_();MV(h,a,b,c,d,e,f,g);return h;}
function MV(a,b,c,d,e,f,g,h){a.jp=b;a.mD=c;a.rT=d;a.sJ=h;a.D2=e;a.ue=f;a.pp=g;}
var AJe=G(0);
function AMP(){var a=this;B.call(a);a.nm=null;a.rI=null;a.tx=null;a.so=null;a.ti=null;a.qr=null;a.tg=null;}
function AIL(a,b,c,d,e,f,g){var h=new AMP();A3e(h,a,b,c,d,e,f,g);return h;}
function A3e(a,b,c,d,e,f,g,h){a.nm=b;a.rI=c;a.tx=d;a.so=e;a.ti=f;a.qr=g;a.tg=h;}
var AKK=G(0);
function EZ(){var b,c,d;b=new Ji;c=new Js;A3t();d=A$9;P5(c,d,A$$,A$_,A_a,A_b,d);MG(b,c,AMc(),AMj(M(C(217)),M(C(218)),M(C(184))),AMc(),AMI(1,0.125),A_c,A_d);return b;}
function ANQ(){var b,c,d;b=new Ji;c=new Js;AZc();d=A_e;P5(c,d,A_f,A_g,A_h,A_i,d);MG(b,c,ALV(),AMj(M(C(185)),M(C(218)),M(C(184))),ALV(),AMI(1,0.17499999701976776),A_j,A_k);return b;}
function AMc(){var b,c;b=new KU;c=M(C(164));A3t();LL(b,c,A_l,A_m);return b;}
function ALV(){var b,c;b=new KU;c=M(C(184));AZc();LL(b,c,A_n,A_o);return b;}
function APV(){var b,c;b=new KU;ALL();c=A_p;AZn();LL(b,c,A_q,A_r);return b;}
function Gl(){var a=this;B.call(a);a.s7=null;a.rH=null;a.s_=null;a.mA=null;a.pF=null;}
function AIw(a,b,c,d,e){var f=new Gl();H4(f,a,b,c,d,e);return f;}
function H4(a,b,c,d,e,f){a.s7=b;a.rH=c;a.s_=d;a.mA=e;a.pF=f;}
function ANc(){var b,c,d,e;b=new Gl;c=M(C(219));d=M(C(220));e=M(C(221));H4(b,c,d,e,e,M(C(189)));return b;}
function PB(a,b,c,d){if(c)return a.pF;a:{switch(b){case 1:d=a.s7;break a;case 2:d=a.rH;break a;case 3:d=a.s_;break a;case 4:d=a.mA;break a;default:}}return d;}
function GH(a,b,c){return PB(a,b,0,c);}
function AE8(a,b,c){return PB(a,c,0,b.bC.df);}
function CD(){var a=this;B.call(a);a.f=null;a.h=null;a.E=0.0;}
function AYU(){var a=new CD();Fg(a);return a;}
function Fg(a){a.f=new Y;a.h=new Y;}
function AWs(a){}
function A3V(a){return BR(0,0);}
function FP(a,b,c,d){CA(a.f,b);CA(a.h,c);a.E=d;}
function Ca(a,b){return BF(b,a.E);}
function Cd(a,b){return FH(b,a.f,a.h);}
function APZ(a,b){var c,d,e,f;c=a.f;d=c.b;e=c.a;f=a.h;ATz();Bi(b,d,e,f,A_s);}
function AGk(a,b){var c;c=a.f;MF(b,c.b,c.a,a.h);}
function A0l(a,b){return 0;}
function AYd(a){}
function ATu(a,b,c,d){return 0;}
function ARN(a,b,c){return null;}
function AU6(a,b,c){return 0;}
function A5M(a,b,c){}
function AQt(a){}
function A4R(a,b,c,d){return 0;}
function Ig(){CD.call(this);this.ck=null;}
function Nm(a,b){var c;if(a.ck===null){a.ck=b;return;}c=new Di;W(c);L(c);}
function A3R(a){var b,c,d;b=a.ck.data;c=b.length;d=0;while(d<c){b[d].bx();d=d+1|0;}}
function AU3(a,b){var c,d,e;c=a.ck.data;d=c.length;e=0;while(e<d){c[e].dm(b);e=e+1|0;}}
function AZr(a,b){var c,d,e,f;c=0;d=a.ck.data;e=d.length;f=0;while(f<e){c=c|d[f].cX(b);f=f+1|0;}return c;}
function ASl(a,b,c,d){FP(a,b,c,d);a.Hk();}
function A6d(a,b,c,d){var e,f,g,h,i;e=0;f=a.ck.data;g=f.length;h=0;while(h<g){i=f[h];if(Cd(i,b.i))e=e|i.cL(b,c,d);h=h+1|0;}return e;}
function AXt(a,b,c){var d,e,f,g,h;d=a.ck.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(Cd(g,b.i)){h=g.ce(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A6l(a,b,c){var d,e,f,g,h;d=0;e=a.ck.data;f=e.length;g=0;while(g<f){h=e[g];if(Cd(h,b.i))d=d|h.cP(b,c);g=g+1|0;}return d;}
function A2T(a,b,c){var d,e,f;d=a.ck.data;e=d.length;f=0;while(f<e){d[f].ev(b,c);f=f+1|0;}}
function AUT(a){var b,c,d;b=a.ck.data;c=b.length;d=0;while(d<c){b[d].gU();d=d+1|0;}}
function ASP(a,b,c,d){var e,f,g,h,i;e=0;f=a.ck.data;g=f.length;h=0;while(h<g){i=f[h];if(Cd(i,b.i))e=e|i.dE(b,c,d);h=h+1|0;}return e;}
function A6B(a){var b,c,d;b=a.ck.data;c=b.length;d=0;while(d<c){b[d].lW();d=d+1|0;}}
function IC(){Ig.call(this);this.eL=null;}
function RE(a,b){var c;Fg(a);c=new S5;Fg(c);c.hN=new Y;c.hO=new Y;c.hL=new Y;c.hM=new Y;c.sO=(-1);c.jt=(-1);c.js=(-1);c.kk=ARO(K(GY,2),new So);c.h1=ARO(K(GY,4),new Sq);c.hv=b;a.eL=c;}
function AUh(a){var b,c,d,e;b=BF(20.0,a.E);c=(a.h.b-b|0)/2|0;d=AON(a.f);e=BR(c,a.h.a);a.ck.data[0].cz(d,e,a.E);d.b=(a.f.b+a.h.b|0)-c|0;a.ck.data[1].cz(d,e,a.E);e.b=(a.h.b-c|0)-c|0;d.b=a.f.b+c|0;a.ck.data[2].cz(d,e,a.E);}
function ALQ(){var a=this;IC.call(a);a.ft=null;a.B=null;a.N=null;a.xy=null;a.br=null;a.lp=0;a.s0=0;a.IH=null;a.Kd=null;a.l7=0;a.Ls=0;a.Iv=null;a.ql=0;a.m$=null;a.kf=CY;a.s4=CY;a.JP=1;}
function A8x(a,b,c){var d=new ALQ();AZG(d,a,b,c);return d;}
function AZG(a,b,c,d){var e,f,g,h,i,j,k;RE(a,b.m);a.l7=0;a.Ls=0;a.kf=DQ();a.s4=DQ();a.JP=1;e=Lq(b);a.ft=e;a.ql=d;a.B=KM(e);b=KM(a.ft);a.N=b;AG3(a.eL,a.B,b);a.m$=AUU();f=new Qw;f.xB=a;g=new Qv;g.DG=a;e=new ABc;b=new Qy;b.Gg=a;e.ox=(-1);e.kH=(-1);e.cu=BC(0);e.b$=BC(0);e.dO=(-1);e.ef=(-1);e.sl=b;b=a.B;b.rm=f;b.mQ=g;h=new Qx;h.Fk=a;b.l9=h;h=new QA;h.tr=a;b.qm=h;UF(b,0);b=a.B;b.cD=1;YK(b,e,1);XM(a.B,c);T2(a.B,a.m$);b=a.N;b.rm=f;b.mQ=g;g=new Qz;g.Ab=a;b.l9=g;g=new Qs;g.CK=a;b.qm=g;UF(b,0);YK(a.N,e,0);XM(a.N,c);T2(a.N,
a.m$);a.xy=ARp(a.B,a.N,1);b=a.eL;g=new Qr;g.Ke=a;g.BL=e;b.uV=g;g=new Qu;g.LT=a;g.HC=e;b.yd=g;b.nE=e;Nm(a,BA(CD,[a.B,a.N,b]));b=HT(0);e=HT(0);g=J$(0,1,0,1,0);f=new ML;i=K(Dx,1);i.data[0]=b;j=K(Dx,1);j.data[0]=e;k=K(Fw,1);k.data[0]=g;Va(f,i,j,k);Mt(a,f,L4(a));a.l7=0;}
function Uh(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=c.iV^d;f=b!==a.B?0:1;if(!e){g=a.br;if(g!==null){d=c.c0;e=KH(c);if(!f)g.ds=SD(g,d,e,g.ds);else g.dr=SD(g,d,e,g.dr);h=EQ(g,d,f);if(!f){c=g.H.data[h];c.bA=c.bA+e|0;}else{c=g.H.data[h];c.bB=c.bB+e|0;}h=h+1|0;while(true){i=g.H.data;if(h>=i.length)break;if(!f){c=i[h];c.V=c.V+e|0;}else{c=i[h];c.W=c.W+e|0;}h=h+1|0;}i=!f?g.e3:g.fC;if(i!==null){j=i.data;AJJ(d,e,i);h=j.length;if(h>0){c=j[h-1|0];h=c.cA;if(h==d)c.cA=h+e|0;}c=LJ(i);if(!f)g.gK=c;else g.gL=c;}}}else{g=a.br;if(g!==
null){k=c.c0;l=KH(c);if(!f)g.ds=AF_(g,k,l,g.ds);else g.dr=AF_(g,k,l,g.dr);d=EQ(g,k,f);e=EQ(g,k+l|0,f);if(d==e){if(!f){c=g.H.data[d];c.bA=c.bA-l|0;}else{c=g.H.data[d];c.bB=c.bB-l|0;}}else{if(!f){i=g.H.data;h=k-i[d].V|0;m=l-(i[d].bA-h|0)|0;i[d].bA=h;}else{i=g.H.data;h=k-i[d].W|0;m=l-(i[d].bB-h|0)|0;i[d].bB=h;}d=d+1|0;while(d<e){c=g.H.data[d];if(!f){c.V=k;m=m-c.bA|0;c.bA=0;}else{c.W=k;m=m-c.bB|0;c.bB=0;}d=d+1|0;}if(!f){i=g.H.data;i[e].V=k;c=i[e];c.bA=c.bA-m|0;}else{i=g.H.data;i[e].W=k;c=i[e];c.bB=c.bB-m|0;}}d=
e+1|0;while(true){i=g.H.data;if(d>=i.length)break;if(!f){c=i[d];c.V=c.V-l|0;}else{c=i[d];c.W=c.W-l|0;}d=d+1|0;}i=!f?g.e3:g.fC;if(i!==null){AJJ(k, -l|0,i);c=LJ(i);if(!f)g.gK=c;else g.gL=c;}}}c=a.br;if(c!==null){N4(b,!f?c.ds:c.dr);b=a.eL;c=a.br;b.i$=c;if(c.fC===null&&c.e3===null?0:1){b=new Sv;b.BW=a;P6(a,Ts(c,b));}}}
function ACv(a,b){var c;c=a.B;if(b!==c?0:1){b=a.IH;if(b!==null)b.e(c.c);}else{b=a.Kd;if(b!==null)b.e(a.N.c);}}
function AB3(a,b){var c,d,e,f;GM(a.ft,b);c=a.eL;d=b.fV;e=b.bC.df;f=b.hJ;AFB(c,d,e,f.so,f.tg,f.ti,f.qr);Gt(a.B,b);Gt(a.N,b);}
function Mt(a,b,c){var d,e,f,g,h,i,j,k;if(!AII(c,L4(a)))return;d=DQ();e=X();f=AC4(d,a.kf);g=J();F(Os(F(g,C(222)),f),C(223));T(e,I(g));a.kf=d;h=a.s0;a.br=b;N4(a.B,b.dr);N4(a.N,a.br.ds);e=a.xy;g=a.br;e.ii=g;a.eL.i$=g;e=a.B;i=e.fL;j=a.N.fL;c=VY(e);k=VY(a.N);e=new X3;e.zI=a;c=(AVJ(b,i,j,c,k,e)).gl.data;g=c[0];e=c[1];UR(a.B,g.cC,null,g.cI,0);UR(a.N,e.cC,null,e.cI,a.ql);if(!a.l7){c=a.br.H.data;i=c.length;j=0;a:{b:{while(true){if(j>=i)break b;b=c[j];if(b.ca)break;j=j+1|0;}i=Gn(a.B);j=Gn(a.N);if(!QO(b,i,1)&&!QO(b,j,
0)){N$(a,b);a.l7=1;}else break a;}}}b=a.Iv;if(b!==null)b.d();if(h&&!Zw(a.br))WZ(a);Dt(a.ft.bF.m.bk);}
function JZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;a.kf=DQ();c=Xk(a.B);d=c.data;e=Xk(a.N);if(d.length!=e.data.length)return;f=a.B.c.g;g=a.N.c.g;h=new AFO;h.w1=a;i=a.ft.bF.m.bk.cS;d=DW(f);j=DW(g);k=AP2(f,b);l=AP2(g,b);m=BC(3);b=!b?0:1;n=m.data;n[0]=b;n[1]=f.R;n[2]=g.R;f=new Q9;f.F4=h;DJ(i,1,f,C(224),BA(B,[d,k,j,l,c,e,m]));}
function AMK(a,b){var c,d,e,f,g,h;c=Gn(b);d=b!==a.B?0:1;b=a.br;e=EQ(b,c,d);while(true){f=e-1|0;if(f<0)break;g=b.H.data[f];if((!d?g.V:g.W)!=c)break;e=e+(-1)|0;}while(f>=0){h=a.br.H.data;if(h[f].ca){N$(a,h[f]);return;}f=f+(-1)|0;}}
function N$(a,b){var c,d,e;AD8(a.B,0,b.W);GR(a.B,b.W);AD8(a.N,0,b.V);GR(a.N,b.V);Dt(a.ft.bF.m.bk);c=X();d=b.W+1|0;e=b.V+1|0;b=J();P(F(P(F(b,C(225)),d),C(226)),e);T(c,I(b));}
function XW(a,b){var c;a.s0=b;if(!b){c=a.br;c.fC=null;c.e3=null;c.gL=null;c.gK=null;Kf(a.B);Kf(a.N);c=a.B;GR(c,Gn(c));c=a.N;GR(c,Gn(c));}else if(!Zw(a.br))WZ(a);Dt(a.ft.bF.m.bk);}
function L4(a){return Cf([VH(a.B),VH(a.N)]);}
function WZ(a){var b,c,d,e,f,g,h,i,j,k;b=a.br;c=new Sj;c.um=a;d=b.H.data.length;e=K(JV,d);f=e.data;g=K(JV,d);h=g.data;i=0;while(i<d){j=b.H.data[i];f[i]=VZ(j.W,D8(j),!j.ca?0:1);h[i]=VZ(j.V,Ea(j),!j.ca?0:1);i=i+1|0;}k=0;while(k<d){if(!b.H.data[k].ca)AK_(3,k,e,g);k=k+1|0;}b.fC=e;b.e3=g;AIj(b,c);}
function P6(a,b){KJ(a.B,a.br.gL,b);KJ(a.N,a.br.gK,b);}
function Zg(){B.call(this);this.y2=null;}
function A2j(a){var b;b=a.y2;Cn(b.v.m,b.sq);ACs(b);}
function Zf(){B.call(this);this.ye=null;}
function AUm(a){var b,c;b=a.ye;c=b.v.m.bT;if(!ABa(b,c))c=null;b.sq=c;}
var AJf=G(0);
function P7(b,c){return Ly(b,b,b,255,c);}
function ANG(b,c,d){return Ly(b,c,d,255,new BS);}
function Ly(b,c,d,e,f){Cb(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Yu(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ATc(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.ba=g+i;e.bj=h+i;e.S=j+i;return e;}
function IS(b,c,d,e,f){f=Yu(b,c,d,f);f.bd=e;return f;}
function Id(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var ADQ=G();
function AVF(a,b){var c,d;a:{if(AE1(b)){c=b.Q;if(!(c!=67&&c!=88&&c!=86&&c!=45)){c=1;break a;}}c=b.bw&&!b.cb&&!b.dH&&!b.kj?1:0;c=c&&b.Q==46?1:0;}b:{if(!c){d=b.Q;if(!(d!=122&&d!=123&&d!=116?0:1))break b;}b.nd=1;}return 0;}
function ADP(){B.call(this);this.B$=null;}
function AYO(a,b){var c;c=a.B$.bT;return c!==null&&c.bo(b)?1:0;}
function Wt(){var a=this;B.call(a);a.M=null;a.Be=null;a.iI=null;a.iF=null;a.LM=null;a.K=null;a.dM=null;a.P=null;a.hq=null;a.gR=0;}
function QX(a){var b=new Wt();AVN(b,a);return b;}
function A6Q(a,b){var c=new Wt();AJK(c,a,b);return c;}
function AVN(a,b){AJK(a,b,AYU());}
function AJK(a,b,c){var d;a.M=b;d=new Xe;Fg(d);d.oS=new BS;d.hj=b;a.K=d;a.P=c;}
function VW(a,b){var c,d;if(a.dM===null){c=new Sx;c.hr=new Y;c.mx=new Y;a.dM=c;d=a.hq;if(d!==null)AEc(c,d);}a.dM.kL=b;}
function Lc(a){var b;b=a.iI;if(b!==null)b.d();}
function LA(a){var b;b=a.iF;if(b!==null)b.d();}
function NY(a){var b;a.P.gU();b=a.LM;if(b!==null)b.d();}
function CN(a,b){var c;c=a.K;c.fr=c.fr|(BN(c.lj,b)?0:1);c.lj=b;IN(a);}
function OT(a,b,c){var d,e,f;d=a.K;e=BN(d.i3,b)?0:1;f=c===d.mG?0:1;if(e){d.i3=b;d.fi=null;Sh(d,0);}d.fr=d.fr|(!e&&!f?0:1);d.mG=c;d.jX=0;IN(a);}
function DX(a,b){var c;a.hq=b;c=b.pH;Bs(b);OT(a,c,3.0);c=a.dM;if(c!==null)AEc(c,b);}
function AFr(a,b){a.gR=a.gR|b;}
function YM(a,b){return a.gR&b;}
function Kr(a){var b;b=a.K;b.eE=BI(b.eE,null);b.fi=null;a.P=BI(a.P,null);b=a.dM;if(b!==null){OY(b);b.kL=null;}}
function I7(a,b){var c,d,e;c=a.P;d=c.f;e=c.h;b=BI(c,b);a.P=b;b.cz(d,e,a.M.cf);}
function Ee(a,b,c){a.P.cz(b,c,a.M.cf);IN(a);}
function IN(a){var b,c,d;if(a.M.cf!==0.0){b=a.K;if(b.i3!==null){c=a.P.h.b;b.h.b=c;d=b.eE;if(d!==null&&c!=Bz(d)&&!(c>=b.jX&&Bz(b.eE)>=b.jX))b.fr=1;b=a.K;b.E=a.M.cf;if(PA(b))c=0;else{b=a.K;Sh(b,M_(b));c=b.h.a;}b=a.K.f;d=a.P.f;V(b,d.b,d.a-c|0);b=a.dM;if(b!==null)CA(b.hr,a.K.f);return;}}}
function AGA(a){return M_(a.K);}
function M3(a,b){return AGe(a,b.i);}
function AGe(a,b){var c;c=!(a.gR&1)?0:1;return !c&&!Cd(a.P,b)?0:1;}
function MZ(b,c){if(b<0)c=C(227);else if(b>0)c=C(228);return c;}
function Oy(a,b){return !Cd(a.K,b)&&!Rt(a,b)&&!AGe(a,b)?0:1;}
function P2(a,b,c){var d;d=a.K.f.b;return (d-c|0)<=b&&b<d?1:0;}
function Nv(a,b,c){var d,e;d=a.K;e=d.f.b+d.h.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Ob(a,b,c){var d;d=a.K.f.a;return (d-c|0)<=b&&b<d?1:0;}
function Lh(a,b,c){var d,e;d=a.P;e=d.f.a+d.h.a|0;return e<=b&&b<(e+c|0)?1:0;}
function PD(a,b,c){var d,e,f;d=a.K.f.a-c|0;e=a.P;f=(e.f.a+e.h.a|0)+c|0;return d<=b&&b<f?1:0;}
function AHC(a,b,c){var d,e;d=a.K.f.a+c|0;e=a.P;return AN$(b,d,(e.f.a+e.h.a|0)-c|0);}
function NW(a,b,c){var d,e,f;d=a.K;e=d.f.b;f=e-c|0;e=(e+d.h.b|0)+c|0;return f<=b&&b<e?1:0;}
function AAx(a,b,c){var d,e;d=a.K;e=d.f.b;return AN$(b,e+c|0,(e+d.h.b|0)-c|0);}
function AN$(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BG(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Rt(a,b){var c;a:{b:{c:{c=Ci(a.M,7.0);if(NW(a,b.b,c)){if(Ob(a,b.a,c))break c;if(Lh(a,b.a,c))break c;}if(!PD(a,b.a,c))break b;if(!P2(a,b.b,c)&&!Nv(a,b.b,c))break b;}c=1;break a;}c=0;}return c;}
function Kv(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Y;f=new Y;g=b.b;h=b.a;b=a.P;i=b.f;j=i.b;k=i.a;b=b.h;l=b.b;m=b.a;b=new Ta;b.xG=a;b.xF=e;b.xE=f;b.xK=c;b.xJ=g;b.xI=j;b.xH=l;b.xD=d;b.xC=h;b.xA=k;b.DZ=m;return b;}
function JX(a){var b;b=a.dM;if(b!==null){b.kL.d();return;}b=new EW;W(b);L(b);}
function Uz(a){return !YM(a,6)?0:1;}
function AB9(a){AFr(a,2);ABR(a);}
function ABR(a){var b,c;b=a.M;c=b.bD;V(b.cp,0,0);Ee(a,a.M.cp,c);}
function Qb(a){var b,c;b=M_(a.K);c=a.M.bD;Ee(a,BR(0,b),BR(c.b,c.a-b|0));}
function BS(){var a=this;B.call(a);a.ba=0.0;a.bj=0.0;a.S=0.0;a.bd=0.0;}
function AH8(a,b,c,d){var e=new BS();A4X(e,a,b,c,d);return e;}
function AP7(a){var b=new BS();AO_(b,a);return b;}
function A4X(a,b,c,d,e){a.ba=b;a.bj=c;a.S=d;a.bd=e;}
function Cb(a,b,c,d,e){a.ba=b;a.bj=c;a.S=d;a.bd=e;}
function AO_(a,b){a.ba=b.ba;a.bj=b.bj;a.S=b.S;a.bd=b.bd;}
function BO(a,b){a.ba=b.ba;a.bj=b.bj;a.S=b.S;a.bd=b.bd;return a;}
function AYw(a,b){var c;if(a===b)return 1;a:{if(b!==null&&Bv(a)===Bv(b)){b=b;if(b.ba===a.ba&&b.bj===a.bj&&b.S===a.S&&b.bd===a.bd?1:0){c=1;break a;}}c=0;}return c;}
function ARX(a){var b,c,d,e,f;b=a.ba;c=a.bj;d=a.S;e=a.bd;f=J();Dj(F(Dj(F(Dj(F(Dj(F(f,C(64)),b),C(65)),c),C(229)),d),C(230)),e);return I(f);}
function Gi(){var a=this;BS.call(a);a.gg=0;a.gi=0;a.gh=0;a.e0=0;}
function Co(a){var b=new Gi();AYo(b,a);return b;}
function C7(a,b,c){var d=new Gi();A0S(d,a,b,c);return d;}
function M(a){var b=new Gi();A5s(b,a);return b;}
function Ed(a,b,c,d){var e=new Gi();TI(e,a,b,c,d);return e;}
function BZ(a){var b=new Gi();IY(b,a);return b;}
function AYo(a,b){TI(a,b,b,b,255);}
function A0S(a,b,c,d){TI(a,b,c,d,255);}
function A5s(a,b){if(!(N(b)!=4&&N(b)!=7&&N(b)!=9)&&Be(b,0)==35){if(N(b)==4){a.gg=KX(Be(b,1))*17|0;a.gi=KX(Be(b,2))*17|0;a.gh=KX(Be(b,3))*17|0;a.e0=255;}else{a.gg=ME(Be(b,1),Be(b,2));a.gi=ME(Be(b,3),Be(b,4));a.gh=ME(Be(b,5),Be(b,6));a.e0=N(b)!=9?255:ME(Be(b,7),Be(b,8));}Ly(a.gg,a.gi,a.gh,a.e0,a);return;}}
function TI(a,b,c,d,e){a.gg=b;a.gi=c;a.gh=d;a.e0=e;Ly(b,c,d,e,a);}
function IY(a,b){a.gg=b.gg;a.gi=b.gi;a.gh=b.gh;a.e0=b.e0;BO(a,b);}
function KX(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function ME(b,c){return (16*KX(b)|0)+KX(c)|0;}
var DD=G(0);
var A$F=null;var A_t=null;var A$G=null;var A$s=null;var A$I=null;var A$H=null;var A$K=null;var A$J=null;var A$M=null;var A$L=null;var A$N=null;function S_(){S_=Bg(DD);AXc();}
function AXc(){A$F=Co(206);A_t=M(C(231));A$G=M(C(232));A$s=M(C(233));A$I=M(C(234));A$H=M(C(182));A$K=M(C(235));A$J=M(C(236));A$M=Ed(107,106,107,128);A$L=Ed(30,31,34,0);A$N=M(C(237));}
function Cq(){Cj.call(this);this.i1=null;}
var A_u=null;var A_v=null;var A_w=null;var A_x=null;var A_y=null;var A_z=null;var A_A=null;var A_B=null;var A_C=null;var A_D=null;var A_E=null;var A_F=null;var A_G=null;var A_H=null;var A_I=null;var A_J=null;function Jx(){Jx=Bg(Cq);A24();}
function D9(a,b,c){var d=new Cq();ADI(d,a,b,c);return d;}
function A8H(a,b,c,d){var e=new Cq();AHG(e,a,b,c,d);return e;}
function AKa(){Jx();return A_J.d3();}
function ADI(a,b,c,d){Jx();Df(a,b,c);a.i1=Kc(d,null);}
function AHG(a,b,c,d,e){Jx();Df(a,b,c);a.i1=Kc(d,e);}
function A24(){var b,c;b=new Cq;S_();ADI(b,C(238),0,A_t);A_u=b;A_v=D9(C(239),1,M(C(240)));A_w=D9(C(241),2,M(C(242)));A_x=D9(C(243),3,M(C(244)));A_y=D9(C(245),4,A_t);A_z=D9(C(246),5,M(C(247)));A_A=D9(C(248),6,M(C(186)));A_B=D9(C(249),7,M(C(250)));A_C=D9(C(251),8,M(C(252)));c=new Cq;FZ();AHG(c,C(253),9,A_K,M(C(235)));A_D=c;A_E=A8H(C(254),10,A_K,M(C(185)));A_F=D9(C(255),11,M(C(256)));A_G=D9(C(257),12,M(C(258)));A_H=D9(C(259),13,A_t);b=D9(C(260),14,M(C(261)));A_I=b;A_J=BA(Cq,[A_u,A_v,A_w,A_x,A_y,A_z,A_A,A_B,A_C,
A_D,A_E,A_F,A_G,A_H,b]);}
function KY(){var a=this;B.call(a);a.f9=null;a.o2=null;}
function Kc(a,b){var c=new KY();A3v(c,a,b);return c;}
function A3v(a,b,c){a.f9=b;a.o2=c;}
function Ji(){var a=this;B.call(a);a.nw=null;a.pH=null;a.rf=null;a.Ka=3;a.kS=null;a.G3=null;a.LF=null;a.rV=null;a.pe=null;a.rq=null;}
function A_L(a,b,c,d,e,f,g){var h=new Ji();MG(h,a,b,c,d,e,f,g);return h;}
function MG(a,b,c,d,e,f,g,h){a.pH=Dk(C(161),16.0);a.rf=Dk(C(13),16.0);a.Ka=3;a.G3=b;a.LF=c;a.kS=d;a.rV=e;a.nw=f;a.pe=g;a.rq=h;}
function AOH(){var a=this;B.call(a);a.qs=null;a.wL=0;}
function AMI(a,b){var c=new AOH();A5q(c,a,b);return c;}
function A5q(a,b,c){var d;d=new BS;a.qs=d;a.wL=b;d.bd=c;}
function ABn(a,b){return BF(a.wL,b);}
var D0=G(0);
var A_h=null;var A_i=null;var A_e=null;var A_f=null;var A_g=null;var A_n=null;var A_o=null;var A_j=null;var A_k=null;function AZc(){AZc=Bg(D0);A4j();}
function A4j(){A_h=M(C(182));A_i=M(C(183));A_e=M(C(184));A_f=M(C(186));A_g=M(C(231));A_n=M(C(182));A_o=M(C(262));A_j=M(C(263));A_k=C7(43,45,48);}
function ANM(){var a=this;B.call(a);a.fn=null;a.eN=0.0;a.ih=0;a.j1=0;}
function Dk(a,b){var c=new ANM();AVO(c,a,b);return c;}
function A81(a,b,c,d){var e=new ANM();AQm(e,a,b,c,d);return e;}
function AVO(a,b,c){AQm(a,b,c,400,700);}
function AQm(a,b,c,d,e){a.fn=b;a.eN=c;a.ih=d;a.j1=e;}
function A5j(a,b){if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){b=b;return a.eN===b.eN&&a.ih==b.ih&&a.j1==b.j1&&BN(a.fn,b.fn)?1:0;}return 0;}
function T7(){var a=this;B.call(a);a.bF=null;a.d5=null;a.j5=null;}
var A_M=0;function Lq(a){var b=new T7();AI3(b,a);return b;}
function AI3(a,b){a.bF=b;}
function GM(a,b){var c;a.j5=b;c=a.d5;if(c!==null)DX(c,b.ch);c=a.bF.eU;if(c!==null)Hx(c,b.ch,b.gr);}
function ACC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.c;h=ATM();i=c.l;j=0;while(j<i){if(f===null){k=(B1(c,j)).bp;l=ADJ(Ek(B3(g.g,k)));m=AEj(g.gd);}else{n=f.data;k=n[j].si.pz;l=!BN(g.gd,n[j].n1)?C(20):ADJ(Ek(B3(g.g,k)));m=AEj(n[j].n1);}if(N(l)>153){o=Cv(l,0,150);n=J();F(F(n,o),C(264));l=I(n);}if(N(m)>153){n=Cv(m,0,150);o=J();F(F(o,n),C(264));m=I(o);}n=GB(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=B1(c,j);}if(f!==null){q=new AHN;q.v0=d;q.v1=p;}else{q=new AHO;q.GW=d;q.GV=o;}Zx(h,m,
n,l,q);j=j+1|0;}r=AHf(h);if(a.d5!==null)AEJ(a);c=a.bF.m;g=new To;f=new AEe;f.tL=a;f.tM=d;APR(g,c,f);AAg(g,r);d=a.j5;Zm(g,d.ch,d.G4);d=QX(c);a.d5=d;d.gR=d.gR|1;d=FR(g);f=a.j5.ch;Hu(d,f.pe,f.rq);I7(a.d5,d);DX(a.d5,a.j5.ch);d=a.d5;f=J();F(F(f,C(265)),e);CN(d,I(f));DY(a.bF,a.d5);d=a.d5;i=(d.K.h.a+Ci(d.M,2.0)|0)+Ci(c,2.0)|0;s=(g.eM+g.fB|0)+g.i6|0;t=Ci(g.cg,5.0);e=BR(DS(t,b.b,g.cg.bD.b-s|0),DS(i,b.a,g.cg.bD.a-g.cW.a|0));ABB(g);i=Fo(g);s=g.ci.data.length;i=U(i,s)+U(g.eq,s+1|0)|0;V(g.cW,g.h.b,i);i=(g.eM+g.fB|0)+g.i6
|0;b=g.cg;s=(b.bD.b-e.b|0)-Ci(b,5.0)|0;b=g.cg;t=(b.bD.a-e.a|0)-Ci(b,5.0)|0;d=BR(Bc(i,s),Bc(g.cW.a,t));Ee(a.d5,e,d);Cn(c,g);}
function AEJ(a){IK(a.bF,a.d5);Kr(a.d5);a.d5=null;}
function TX(a,b,c){var d,e;d=a.bF;e=a.j5;E1(d,e.ch,e.gr,b,c);}
function SA(a,b,c,d,e,f,g){TX(a,b,ADA(Jz(a,c,g,d,e,f),b));}
function Jz(a,b,c,d,e,f){var g;g=new Vu;g.gx=a;g.T=b;g.ux=c;g.kQ=e;g.q0=f;g.oy=d;return g;}
function R6(b){var c;c=new Ub;c.ET=b;return c;}
function ANg(){A_M=0;}
var Og=G(0);
var S2=G(0);
var Nd=G(0);
function AJN(){var a=this;CD.call(a);a.bN=null;a.C=null;a.mM=null;a.Ht=0;a.kG=null;a.eD=null;a.pN=0;a.p5=0;a.hK=0.0;a.lw=null;a.IR=null;a.g8=null;a.x=0;a.k0=0;a.c=null;a.go=null;a.cx=null;a.oW=null;a.qX=null;a.fE=null;a.Gi=0;a.EH=0;a.dw=0;a.em=0;a.jR=0;a.g6=0;a.i5=0;a.eZ=0;a.oK=null;a.fZ=null;a.fG=null;a.k7=0;a.lQ=0;a.lC=0;a.jW=0;a.mY=0;a.nR=0;a.oj=0;a.sI=0;a.bJ=null;a.bq=null;a.gj=null;a.fL=0;a.cD=0;a.HL=null;a.lI=null;a.DT=null;a.yA=null;a.rm=null;a.mQ=null;a.l9=null;a.qm=null;a.bc=0;a.dU=0;a.cw=null;a.no
=null;a.eC=null;a.ha=null;a.b2=null;a.zh=null;a.dF=null;a.kx=0;a.pI=0;a.dc=null;a.t4=null;a.pE=0;a.y1=null;a.tG=0;a.v6=0;a.uD=null;a.zd=null;}
function KM(a){var b=new AJN();AWr(b,a);return b;}
function AWr(a,b){var c,d,e;Fg(a);a.Ht=0;a.kG=K(Q,10);a.eD=A1Z();a.hK=16.0;a.lw=C(150);a.c=A8w(K(BH,0),null,null);c=new AH1;c.Db=CL(K(Or,0));c.Hq=CL(K(Or,0));c.tJ=CL(K(AEu,0));c.zV=CL(K(ABW,0));c.zA=CL(K(C8,0));c.FZ=CL(K(U1,0));a.go=c;a.fE=K(FJ,0);a.eZ=3;a.oK=new Y;a.fZ=Gg();a.fG=Gg();a.k7=0;a.lQ=1;a.mY=1;a.nR=1;a.oj=0;a.sI=1;a.bJ=AXT();a.gj=C(266);a.fL=0;a.cD=0;c=B0();Bs(c);d=new AAF;d.Je=c;a.lI=d;a.bc=0;a.dU=0;a.ha=new Y;a.b2=ASY(a.c);a.dF=BC(0);a.kx=(-1);a.t4=BR((-1),(-1));a.pE=0;c=new AAE;c.tt=a;a.uD=c;c
=new AAD;c.wO=a;a.zd=c;c=b.bF.m;a.bN=c;a.C=c.bM;a.mM=b;b=AKz(c.cO);a.cw=b;a.g8=b.iA;e=a.kG.data;b=new AAC;b.Gm=a;e[1]=b;b=new AAK;b.Ch=a;e[2]=b;b=new AAI;b.xZ=a;e[3]=b;b=new AAH;b.AM=a;e[4]=b;b=new AAG;b.uh=a;e[5]=b;b=new AAB;b.Eb=a;e[6]=b;b=new AAA;b.GQ=a;e[8]=b;LF(a.c,a,(DF(a)).cS);}
function AMw(a,b,c,d){var e;e=a.E===d?0:1;FP(a,b,c,d);if(e){Yt(a,a.lw,a.hK);AE0(a.cw,a.E);}G0(a);}
function A5X(a,b,c){a.DT=b;a.yA=c;}
function G0(a){var b,c,d,e,f,g,h,i,j,k,l,m;a.g6=Ca(a,1.0);a.i5=Ca(a,10.0);a.k0=Ca(a,12.0);b=a.bq;c=b===null?0:1;d=!c?0:Iw(b,a.g8.data[2],a.C.bE,a.E);e=APM(Cl(a.c.g));a.tG=e;b=a.bJ;f=a.C.bE;g=b.ns;if(g===null){T(B0(),C(267));h=0;}else{i=B2(e);j=i.data;k=0;h=j.length;if(k>h){b=new Bq;W(b);L(b);}while(k<h){l=k+1|0;j[k]=48;k=l;}h=GK(f,g,EC(i),5.0);}e=a.cD;k=e?a.i5+a.k0|0:((h+d|0)+a.g6|0)+a.i5|0;a.dw=k;a.jR=a.f.b+(!e?h+d|0:((a.h.b-a.g6|0)-d|0)-h|0)|0;a.em=Z(1,(!e?a.h.b:((a.h.b-a.g6|0)-h|0)-d|0)-k|0);l=!a.cD?a.f.b
:(a.f.b+a.h.b|0)-h|0;m=Bc(h,a.h.b);Vg(a.bJ,l,a.f.a,m,a.h.a,a.E);if(c){e=a.cD?l-d|0:a.f.b+h|0;HU(a.bq,e,a.f.a,d,a.h.a,a.E);a.bq.fK=a.bc;}a.eD.iJ.b=Ca(a,2.0);a.ha.b=Bc(a.h.b,Ca(a,15.0));a.ha.a=a.h.a;if(Xc(a.c)&&a.h.a>0){b=a.eC;if(!(b!==null&&CM(b)==a.h.a))H$(a);}}
function A1x(a){a.p5=1;AFM(a);}
function AZt(a){a.p5=0;}
function AFM(a){ABJ(a.eD,HF(DF(a)));}
function Gt(a,b){var c,d,e;a.cx=b;c=new O6;d=b.bC;Wd(c,d.nk,d.o5,d.q7,d.mV,d.df,b.n8,b.fV);a.oW=c;c=a.cx;if(c!==null)a.qX=MC(c);c=a.eD;d=b.bC.Hp;BO(c.o8,d);c=a.fZ;d=b.bC;GD(c,d.lb,d.lg);c=a.fG;d=b.bC;GD(c,d.lb,d.lg);c=b.lz;d=a.lw;e=a.hK;if(!(c.eN===e&&Bf(c.fn,d)?1:0)){b=b.lz;KS(a,b.fn,b.eN);}if(a.eC!==null)H$(a);}
function QN(a){var b,c,d,e,f;b=(a.eZ+3|0)%6|0;a.eZ=b;c=a.fE.data;d=c.length;e=0;while(e<d){f=c[e];f.cm=b;f=f.c7;if(f!==null)f.kV=1;e=e+1|0;}}
function Z2(a){var b,c;b=a.mY^1;a.mY=b;c=J();FG(F(c,C(268)),b);$rt_globals.console.info($rt_ustr(I(c)));}
function AAm(a){KS(a,a.cw.dn.qO,a.hK+1.0);}
function AIp(a){var b;b=a.hK;if(b<=7.0)return;KS(a,a.cw.dn.qO,b-1.0);}
function AH$(a,b){return (b+4|0)%20|0;}
function RD(a,b){KS(a,b,a.hK);}
function AWj(a,b){Ql(a.bN,b);}
function KS(a,b,c){if(a.bN.cf!==0.0){Yt(a,b,c);Dt(DF(a));}a.hK=c;a.lw=b;}
function ALy(a){var b,c,d,e,f;b=a.cw;c=a.bN.cO;d=a.C;b.gk=c;if(b.ja.ng!=c&&b.dz)AIo(b,d);e=a.fE.data;c=e.length;f=0;while(f<c){b=e[f].c7;if(b!==null)b.kV=1;f=f+1|0;}Lu(a.bJ);AFS(a);}
function Yt(a,b,c){var d,e,f,g,h,i,j;d=c*a.E;e=a.cw.dn;f=e===null?0.0:e.rG;if(!(d===f&&BN(b,a.lw))){Lu(a.bJ);KL(a.fE);g=a.c.g.u.data;h=g.length;i=0;while(i<h){EJ(g[i]);i=i+1|0;}j=a.cw;e=a.C;j.dn=ANS(b,d,300,600,j.iA,e);e=a.cw;a.IR=e.dn;a.x=UM(e,1.25,a.C);a.eD.iJ.a=Fk(a.cw.dn);i=a.x;e=J();P(F(Dj(Bj(F(F(e,C(269)),b),32),d),C(270)),i);$rt_globals.console.info($rt_ustr(I(e)));if(A_N){h=Of(a.cw.dn,a.x);b=J();P(F(b,C(271)),h);$rt_globals.console.info($rt_ustr(I(b)));}PF(a);if(a.bq!==null)NQ(a);AFS(a);G0(a);Ir(a);}}
function AZZ(a){AFR(a);KL(a.fE);ABq(a.cw);Lu(a.bJ);a.bq=BI(a.bq,null);}
function Qf(a){return U(J9(a)+5|0,a.x);}
function Lw(a){return Z(Qf(a)-a.h.a|0,0);}
function AEK(a){return Z(a.k7-a.em|0,0);}
function DZ(a){return a.h.a;}
function AKR(a,b){var c,d,e;c=a.c.g;if(AFg(c)&&b-c.E2>0.03125?1:0){d=a.v6;e=a.c.g.R;if(d!=e){a.v6=e;ADp(a);}}if(a.x)AEC(a);d=AFt((a.bc+a.lC|0)-a.jW|0,Lw(a));e=a.bc==d?0:1;if(e)Fp(a,d);return !AEN(a.eD,b)&&!e&&!a.Ht?0:1;}
function I2(a,b){var c;if(ALf(a,b)){c=a.DT;if(c!==null)c.f5(a.dU);}}
function Fp(a,b){var c,d;c=b-a.bc|0;if(AN7(a,b)){d=a.yA;if(d!==null)d.f5(c);}}
function ALf(a,b){var c,d;c=AFt(b,AEK(a));d=c==a.dU?0:1;if(d)a.dU=c;return d;}
function AN7(a,b){var c,d;c=AFt(b,Lw(a));d=c==a.bc?0:1;if(d){a.bc=c;a.c.oQ=c/a.x;}return d;}
function ALX(a){return BR((OK(a.bJ)+a.g6|0)+a.i5|0,a.x);}
function AW_(a){return a.x;}
function A3n(a,b){Qh(a);}
function Qh(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;a.pI=a.pI+1|0;b=GE(a.h.a,a.x)+7|0;c=a.fE;if(c.data.length<b)a.fE=ACp(b,c,a.cw,a.Gi,a.EH,a.c.g);BM(a.C,0);H9(a.C,a.f,a.h);d=WB(a);e=Wy(a)+1|0;a.Gi=d;a.EH=e;f=a.c.d7;g=Ca(a,40.0);h=a.dF.data.length;b=e-d|0;if(h<b)a.dF=BC(b);h=Bc(e,a.b2.dy());a.b2.oG(d,h,a.dF);i=d;while(i<h){j=a.dF.data[i-d|0];if(j>=0){a:{k=B3(a.c.g,j);l=AGm(a,i);b=a.x;m=U(b,i)-a.bc|0;n=AAR(l,k,a.C,b,a.em,a.dU,j,i%a.fE.data.length|0);a.k7=Z(a.k7,n+g|0);if(f!==null){c=f.data;if(j<c.length)
{o=c[j];break a;}}o=null;}p=a.bN.h$;q=a.f;b=q.a+m|0;m=q.b+a.dw|0;q=a.C;r=a.em;n=a.x;s=a.dU;t=a.oW;p=AOj(a,j,k,p);k=a.c;ADc(l,b,m,q,r,n,s,t,p,k.kA,k.ki,k.r!=j?0:1,null,null,o);}i=i+1|0;}b=a.f.b+a.dw|0;o=a.bN.cp;m=d;while(m<h){g=a.dF.data[m-d|0];j=a.x;r=U(j,m)-a.bc|0;p=a.cx.bC.df;if(g>=0){q=AGm(a,m);l=Bm(a);if(!DI(l))i=0;else{k=ED(l);l=Gd(l);i=k.L<=g&&g<l.L?1:0;}if(i)p=a.cx.bC.mV;else{b:{if(f!==null){c=f.data;if(g<c.length){k=c[g];break b;}}k=null;}if(k!==null){l=a.cx;p=AE8(l.fV,l,k.c$);}else if(a.c.r!=g?0:1)p
=a.cx.bC.nk;}if(a.mY)APU(q,a.C,b,a.f.a+r|0,a.x,o,a.dU,a.em,p);}else if(g!=(-1)){V(o,a.em+a.eZ|0,j);Bi(a.C,b-a.eZ|0,a.f.a+r|0,o,p);}m=m+1|0;}if(a.lQ)AKr(a,U(a.x,h)-a.bc|0);ALi(a);if(!a.cD&&a.nR)AMY(a,d,h);c=a.dF;b=h-d|0;i=0;c:{while(i<b){if(c.data[i]<(-1)){r=1;break c;}i=i+1|0;}r=0;}if(r)ALc(a,d,h);AO3(a);if(a.eC!==null)AK7(a);AK1(a);AKl(a);EA(a.C);AKE(a,d,e);k=a.bq;if(k!==null){k.fK=a.bc;Ii(k,d,e-1|0,a.c.r,a.C,a.qX,a.cw,a.dF);}if(a.oj)AI8(a);}
function ALc(a,b,c){var d,e,f,g,h,i,j,k;d=(a.f.b+a.dw|0)-a.i5|0;e=a.bN.cp;BM(a.C,1);V(e,(a.cD?a.jR:a.f.b+a.h.b|0)-d|0,a.x);f=d;g=b;while(g<c){h=a.dF.data[g-b|0];if(h<(-1)){i=U(a.x,g)-a.bc|0;j=a.kx!=ER(h)?0:1;k=a.C;h=a.f.a+i|0;J3(k,d,h,e,f,h+a.x*0.5,!j?a.cw.qP:a.cw.qD,a.oW.od.data[11].f9,0.0);}g=g+1|0;}BM(a.C,0);}
function AI8(a){var b,c,d;b=a.bN.cp;c=a.f;V(b,c.b+a.dw|0,c.a);V(a.bN.h$,a.em,a.h.a);Jx();b=A_z.i1.f9;c=a.C;d=a.bN;Od(c,d.h$,d.cp,b,1,a.cw.jS);}
function AO3(a){var b,c,d,e,f;if(a.p5){b=a.eD;if(b.hm){c=(a.x-b.iJ.a|0)/2|0;d=(a.pN-a.dU|0)-(Vr(b)/2|0)|0;e=a.b2.n5(a.c.r);if(e>=0){AB8(a.eD,a.dw+d|0,(c+U(e,a.x)|0)-a.bc|0);if(d>=(( -Vr(a.eD)|0)/2|0)){b=a.eD;f=a.h;if(RL(b.l1,0,0,f))AFY(a.eD,a.C,a.f);}}}}}
function AK7(a){BM(a.C,1);LH(a.C,Q$(a),Zr(a),a.ha,a.eC);}
function Q$(a){return a.f.b+(a.cD?0:a.h.b-a.ha.b|0)|0;}
function Zr(a){return a.f.a;}
function AMY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.c.d7;e=a.dw;f=e-a.i5|0;g=e-a.eZ|0;h=a.bN.cp;V(h,g-f|0,a.x);e=b;while(e<c){i=a.dF.data[e-b|0];if(i>=0){a:{if(d!==null){j=d.data;if(i<j.length){k=j[i];break a;}}k=null;}if(!(a.c.r!=i&&k===null)){b:{if(k!==null){g=k.c$;if(g){l=a.cx;l=AE8(l.fV,l,g);break b;}}l=a.cx.bC.nk;}m=U(a.x,e)-a.bc|0;k=a.C;n=a.f;Bi(k,n.b+f|0,n.a+m|0,h,l);}}e=e+1|0;}}
function AOj(a,b,c,d){var e,f,g,h,i;e=Bm(a);f=e.bY;g=f.L;h=e.bO;g=g==h.L&&f.Z==h.Z?1:0;a:{if(g)d=null;else{f=ED(e);h=Gd(e);g=f.L;if(g<=b){i=BG(b,h.L);if(i<=0){V(d,b<=g?f.Z:0,i>=0?h.Z:(-1));break a;}}d=null;}}if(d!==null){if(d.a==(-1))d.a=c.F;d.b=LX(c,d.b,a.C.bE,a.g8);d.a=LX(c,d.a,a.C.bE,a.g8);}return d;}
function AKE(a,b,c){var d,e,f,g,h,i;if(!a.dF.data.length)return;Vz(a.bJ,a.C,a.pI);d=a.dF.data[0];e=b+1|0;f=b;while(e<c){g=a.dF.data[e-b|0];if(!(g<0?(d>=0?0:1):(g+f|0)!=(d+e|0)?0:1)){AF2(a,f,d,e);f=e;d=g;}e=e+1|0;}if(f!=c)AF2(a,f,d,c);h=a.b2.k6(a.c.r);if(h>=0&&h>=b&&h<c)QI(a.bJ, -a.bc|0,h,a.c.r,a.cx,a.C);f=U(c,a.x)-a.bc|0;i=a.bJ;if(f<(i.fR.a+i.db.a|0))Ve(i,f,a.C,a.cx);EA(a.C);}
function AF2(a,b,c,d){var e,f,g;e=a.x;f=U(b,e);g=a.bc;f=f-g|0;if(c>=0)Um(a.bJ,f,c,(c+d|0)-b|0,a.C,a.cx);else{e=U(d,e)-g|0;ACg(a.bJ,f,e,a.C,a.cx);}}
function J9(a){return a.b2.dy();}
function WB(a){return Bc(a.bc/a.x|0,J9(a)-1|0);}
function Wy(a){return Bc(((a.bc+DZ(a)|0)-1|0)/a.x|0,J9(a)-1|0);}
function AV2(a,b){return (U(a.x,b)-a.bc|0)+a.f.a|0;}
function AVT(a){return a.f;}
function AYJ(a){return a.h;}
function ATB(a){var b;b=OK(a.bJ);if(!a.cD)b=b+a.bq.e9.b|0;return b;}
function AFS(a){ABP(a.bJ,a.cw.dn,a.x,a.bN.cO);}
function AGm(a,b){var c;c=a.fE.data;return c[b%c.length|0];}
function X1(a,b){var c,d,e,f;c=DS(0,N(a.gj),Q7(b));if(!c)b=null;else{b=C(58);if(c<0){b=new Bq;W(b);L(b);}if(c!=1){d=b.be.data.length;if(d&&c){e=B2(U(d,c));d=0;f=0;while(f<c){SX(b,0,N(b),e,d);d=d+N(b)|0;f=f+1|0;}b=Ni(e);}else b=A9O;}}return b;}
function RH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;h=b.data;i=h.length;if(!i)return;j=BC(i).data;k=A9g(i);l=0;m=j.length;if(l>m){f=new Bq;W(f);L(f);}while(l<m){n=l+1|0;j[l]=c;l=n;}o=k.data;l=0;m=o.length;if(l>m){f=new Bq;W(f);L(f);}while(l<m){c=l+1|0;o[l]=d;l=c;}p=a.c.g;p.R=p.R+1|0;b=K(Hj,i);k=b.data;c=0;while(c<i){q=e.data;k[c]=AXh(h[c],j[c],o[c],q[c],f.bp,f.bz);c=c+1|0;}JK(p.hw,p,b);c=0;while(c<i){b=e.data;f=AHl(h[c],j[c],o[c],b[c]);Iq(p,f);g.fp(Ck(h[c]),b[c]);F8(p,f,0);c=c+1|0;}}
function ALY(a){var b,c,d,e,f,g,h,i,j;if(DI(Bm(a)))G2(a);b=a.c;EJ(B3(b.g,b.r));b=a.c;c=b.g;d=b.r;e=b.y;f=c.u;g=f.data;h=g[d];f=B_(f,g.length+1|0);g=f.data;c.u=f;i=g.length-1|0;while(true){j=i-1|0;if(j<=d)break;g[i]=g[j];i=i+(-1)|0;}if(!e){g[d]=Ei(K(Cw,0));c.u.data[d+1|0]=h;}else if(e==h.F){g[d]=h;g[d+1|0]=Ei(K(Cw,0));}else{f=(I$(h,e)).data;g=c.u.data;g[d]=f[0];g[d+1|0]=f[1];}Gc(c,d,e,0,C(272));Fy(c);EL(a);return CE(a,a.c.r+1|0,0,0);}
function Eh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.fL)return 0;if(DI(Bm(a)))G2(a);c=AEH(b);d=c.data;b=a.c;e=b.g;f=b.r;g=b.y;AIy(e,f,g,c);Ew();h=d.length;if(!h)b=A9O;else{i=0;j=0;while(j<h){i=i+N(d[j])|0;j=j+1|0;}c=B2(i+U(h-1|0,N(C(272)))|0);k=c.data;l=0;b=d[0];m=0;while(m<N(b)){j=l+1|0;k[l]=Be(b,m);m=m+1|0;l=j;}n=1;while(n<h){m=0;while(m<N(C(272))){j=l+1|0;k[l]=Be(C(272),m);m=m+1|0;l=j;}b=d[n];j=0;while(j<N(b)){i=l+1|0;k[l]=Be(b,j);j=j+1|0;l=i;}n=n+1|0;}b=Ni(c);}Gc(e,f,g,0,b);Fy(e);b=a.c;f=b.r;j=(f+h|0)-1|0;CE(a,
j,j!=f?N(d[h-1|0]):b.y+N(d[0])|0,0);Gf(a);EL(a);return 1;}
function G2(a){var b,c,d;b=ED(Bm(a));c=a.c.g;d=Bm(a);QQ(c,d,XO(c,d));CE(a,b.L,b.Z,0);Gf(a);EL(a);}
function Gf(a){var b,c;(Bm(a)).d4=0;b=(Bm(a)).bY;c=a.c;Cc(b,c.r,c.y);b=(Bm(a)).bO;c=a.c;Cc(b,c.r,c.y);}
function AKr(a,b){var c,d,e,f,g;c=a.h.a;if(b<c){d=a.bN.cp;e=a.f;f=e.b+a.dw|0;g=a.eZ;f=f-g|0;d.b=!a.cD?a.em+g|0:a.jR-f|0;d.a=c-b|0;Bi(a.C,f,e.a+b|0,d,a.cx.bC.df);}}
function AK1(a){var b,c,d;b=a.cD?a.f.b+a.k0|0:a.f.b+a.h.b|0;GI(a.fZ,a.bc,a.f.a,DZ(a),Qf(a),b,a.k0);c=a.fG;b=a.dU;d=a.f;TC(c,b,d.b+a.dw|0,a.em,a.k7,d.a+DZ(a)|0,a.k0);}
function AKl(a){var b,c;b=ACF(a.fZ);c=ACF(a.fG);if(!(!b&&!c)){BM(a.C,1);if(b)G5(a.fZ,a.C);if(c)G5(a.fG,a.C);if(b)Hb(a.fZ,a.C);if(c)Hb(a.fG,a.C);}}
function ALi(a){var b,c,d;b=a.oK;b.a=a.h.a;b.b=a.g6;Bi(a.C,a.jR,a.f.a,b,a.cx.bC.qi);c=a.cD;d=c?a.f.b:a.jR+a.g6|0;b=a.oK;b.b=c?a.dw-a.eZ|0:((a.f.b+a.dw|0)-a.eZ|0)-d|0;Bi(a.C,d,a.f.a,b,a.cx.bC.df);}
function AFt(b,c){return Bc(Z(0,b),c);}
function DF(a){return a.bN.bk;}
function IH(a,b,c){var d,e,f;d=FF(b);e=J();F(F(e,C(212)),d);$rt_globals.console.info($rt_ustr(I(e)));d=new ABw;d.Fy=a;d.FB=b;d.Fz=c;c=B0();Bs(c);f=new ABx;f.vu=c;VS(b,d,f);}
function ACt(a,b,c,d){var e,f;CE(a,0,0,0);e=new AIc;f=AFX(c);APY(e,b,null,f);e.xa=d;Ik(a,e);}
function J6(a,b,c,d,e){if(I9(a,e))return 1;if(c&&d)return 1;if(c)Fp(a,a.bc+((U(b,a.x)*12|0)/10|0)|0);else if(!d){IG(a,a.c.r+b|0,e);AFw(a);}return 1;}
function Uw(a,b,c,d){var e,f,g;if(I9(a,d))return 1;e=Hc(a);if(!c)f=a.c.y+b|0;else if(b>=0)f=Hh(e,a.c.y);else{b=a.c.y;if(!b)f=(-1);else{c=KN(e,b);if(c>0&&e.fc.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.fc.data[c-1|0];}}if(f>e.F){e=a.c;if((e.r+1|0)<Cl(e.g))CE(a,a.c.r+1|0,0,d);}else if(f>=0)DN(a,f,d);else{e=a.c;b=e.r;if(b>0){g=(B3(e.g,b-1|0)).F;CE(a,a.c.r-1|0,g,d);}}AGD(a);return 1;}
function I9(a,b){if(DI(Bm(a))&&!b){Gf(a);Ir(a);return 1;}if(!(b&&DI(Bm(a))))Gf(a);return 0;}
function CE(a,b,c,d){a.c.y=c;return IG(a,b,d);}
function IG(a,b,c){var d;d=a.c;d.r=DS(0,b,Cl(d.g)-1|0);return DN(a,a.c.y,c);}
function DN(a,b,c){var d,e;a.c.y=DS(0,b,(Hc(a)).F);PF(a);Ir(a);if(c)(Bm(a)).d4=1;d=Bm(a);e=a.c;Ph(d,e.r,e.y);(Bm(a)).d4=0;return 1;}
function Nj(a,b){var c;c=A0A(Bm(a));DN(a,b,0);Ke(Bm(a),c);}
function Ir(a){AFw(a);AGD(a);}
function AFw(a){var b,c,d,e,f,g;b=a.bc;c=b+DZ(a)|0;d=a.b2.k6(a.c.r);if(d<0)return;e=a.x;f=U(d,e);g=f+e|0;if(f<(b+e|0))Fp(a,f-e|0);else if(g>(c-e|0))Fp(a,(g-DZ(a)|0)+a.x|0);}
function AGD(a){var b,c,d,e,f,g;b=DG(a.bN.cf*30.0);c=a.dU;d=a.em;e=c+d|0;f=a.pN;g=f+b|0;if(f<(c+b|0))I2(a,f-b|0);else if(g>(e-b|0))I2(a,(g-d|0)+b|0);}
function Je(a,b){var c,d;CE(a,b.bp,b.bz,0);c=Hh(Hc(a),a.c.y);Cc((Bm(a)).bO,a.c.r,c);b=(Bm(a)).bY;d=a.c;Cc(b,d.r,d.y);Jj(a.c);}
function Gu(a,b){var c,d;c=DS(0,KR(a,b.a),J9(a)-1|0);d=a.b2.iq(c);return d>=0?AA8(a,b,d):null;}
function AA8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=Z(0,((b.b-a.f.b|0)-a.dw|0)+a.dU|0);b=B3(a.c.g,c);e=a.C.bE;f=a.g8;if(!(b.fF!==null&&!b.iy))OD(b,e,f);g=b.fF;h=b.o.data.length;if(!h)i=0;else if(d<=0)i=0;else{j=g.data;if(d>=j[h-1|0])i=b.F;else{k=AFd(g,0,h,d);if(k<0)k=( -k|0)-1|0;if(k==b.o.data.length)i=b.F;else{g=ADS(b,e,f,k);i=0;l=0;while(l<k){i=i+N(b.o.data[l].t)|0;l=l+1|0;}l=!k?0:j[k-1|0];h=j[k];m=0;a:{while(true){f=g.data;if(m>=f.length){k=h;break a;}k=f[m];if(d<k)break;i=i+1|0;m=m+1|0;h=k;l=k;}}if(A_O){b=J();P(F(P(F(P(F(b,
C(273)),l),C(274)),d),C(275)),k);$rt_globals.console.info($rt_ustr(I(b)));n=i;$rt_globals.console.info(" pos = "+n);}if((d-l|0)>(k-d|0))i=i+1|0;}}}return D2(c,i);}
function KR(a,b){return ((b-a.f.a|0)+a.bc|0)/a.x|0;}
function YS(a,b){var c;c=a.c;c.r=b.bp;c.y=b.bz;PF(a);}
function PF(a){a.pN=a.E===0.0?0:LX(Hc(a),a.c.y,a.C.bE,a.g8);AFM(a);}
function Hc(a){var b;b=a.c;return B3(b.g,b.r);}
function ALt(a,b,c,d){var e,f;e=DG((a.x*4|0)*d/150.0);f=DG(c);if(e)Fp(a,a.bc+e|0);if(f)I2(a,a.dU+f|0);return 1;}
function AU9(a,b,c){var d,e,f,g,h,i;d=a.bq;if(d!==null&&GV(d,b,c))return 1;(Bm(a)).d4=0;if(L8(a,b.i)){e=a.b2.iq(KR(a,b.i.a));if(e<(-1)){f=ER(e);if(f==a.kx){b=a.zh;if(b!==null){a:{d=b.FW;b=b.FV;g=d.fC;h=g.data;c=BG(h.length,1);if(c<=0){i=d.e3.data;e=BG(i.length,1);if(e<=0){if(!c)h[0].e7=1;if(e)break a;i[0].e7=1;break a;}}AK_(3,f,g,d.e3);}AIj(d,b);}}}}return 1;}
function AY3(a,b,c){var d,e,f,g;if(!LQ(a.bN,a))Cn(a.bN,a);CA(a.t4,b.i);if(!c){d=a.bq;if(d!==null){e=Hg(d,b,c,a.bN.dd);if(e!==null)return e;}d=b.i;f=ABr(a,d);if(!(f>=0&&!L0(a.fZ,d))){e=EX(a.fZ,d,a.uD,1);if(e!==null)return e;}if(!(f>=0&&!L0(a.fG,d))){e=EX(a.fG,d,a.zd,0);if(e!==null)return e;}if(f>=0){GR(a,f);return A$6;}if(NI(a.bJ,d))return A$6;if(L8(a,b.i)){if(a.b2.iq(KR(a,b.i.a))<(-1)){b=new Zi;b.vk=a;return b;}JI(a);g=Gu(a,d);if(g===null)return A$6;YS(a,g);Jj(a.c);if(!b.bw&&!(Bm(a)).d4){b=(Bm(a)).bY;d=a.c;Cc(b,
d.r,d.y);}(Bm(a)).d4=1;b=Bm(a);d=a.c;Ph(b,d.r,d.y);b=new Zj;b.GS=a;return b;}}return A$6;}
function AQR(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){if(NI(a.bJ,b.i)){e=a.dc;if(e!==null&&N1(e)){f=Ja(a,b.i);X4(a.dc,f);}return 1;}e=b.i;g=a.bq;if(g!==null&&OZ(g,e)?1:0)return 1;switch(d){case 1:if(b.cb){b=b.i;e=Gu(a,b);if(e!==null){h=Jy(a.c.g,e.bp,e.bz);i=Vi(a,h);g=PP(a.go,CR(a.c),HQ(a.c));if(g!==null){h=a.c;c=e.bp;d=e.bz;e=new Rx;e.LI=a;e.LJ=b;e.LK=i;g.xt(h,c,d,e,a.lI);}else{e=B5(a.c.g.en,h);if(e!==null){Je(a,e);c=1;}else{e=B5(a.c.g.ee,h);if(e!==null&&!e.dv()){if(e.l!=1){ACC(a.mM,b,e,a,i);c=1;}else{Je(a,B1(e,0));c
=1;}}else c=0;}}}}break a;case 2:b:{b=Gu(a,b.i);if(b!==null){c=b.bp;g=B3(a.c.g,c);c=GN(g,a.c.y);d=Hh(g,a.c.y);b=PH(g,c);if((d-1|0)==g.F){Cc((Bm(a)).bY,a.c.r,Q7(g));Cc((Bm(a)).bO,a.c.r,g.F);}else{if(b!==null){b=b.t;f=0;c:{while(true){j=b.be.data;if(f>=j.length)break;if(j[f]!=32){f=0;break c;}f=f+1|0;}f=1;}if(f){f=a.c.y;if(c==f){c=GN(g,c-1|0);d=Hh(g,c);}else{if(d!=f){SB(Bm(a),a.c.r);break b;}c=GN(g,d+1|0);d=Hh(g,c);}}}Cc((Bm(a)).bY,a.c.r,c);(Bm(a)).d4=1;CE(a,a.c.r,d,0);(Bm(a)).d4=0;JI(a);}}}break a;case 3:break;default:break a;}SB(Bm(a),
a.c.r);ADD(a.c.jr);JI(a);}}return 1;}
function ANb(a,b){AJU(a,b,a.bN.dd);return 0;}
function AKp(a){var b;b=a.bq;if(b!==null)b.fb=(-1);}
function ABr(a,b){var c,d,e,f,g,h,i;if(a.eC!==null&&a.c.d7!==null)a:{c=Q$(a);d=Zr(a);e=a.ha;f=Cl(a.c.g);g=a.c.d7;if(!RL(b,c,d,e))c=(-1);else{c=e.a;d=b.a-d|0;h=Uv(d-1|0,c,f);i=Uv(d,c,f);d=Uv(d+1|0,c,f);c=i;while(true){if(c>d){while(h<i){if(g.data[h]!==null){c=h;break a;}h=h+1|0;}c=(-1);break a;}if(g.data[c]!==null)break;c=c+1|0;}}}else c=(-1);return c;}
function AJU(a,b,c){var d,e,f,g,h,i,j,k;d=b.i;e=a.dc;if(e!==null&&N1(e))e.cB.kH=(-1);a.kx=(-1);f=ABr(a,d)>=0&&CH(c,C(276))?1:0;g=!f&&E0(a.fZ,d,c)|E0(a.fG,d,c)?1:0;if(!g&&!f){e=a.bq;h=e!==null&&G7(e,b,c)?1:0;i=NI(a.bJ,b.i);if(i){e=a.dc;if(e!==null&&N1(e)){a.dc.cB.kH=Ja(a,b.i);if(!h)CH(c,C(276));}else if(!h)EN(c);}if(!(h|i)&&Cd(a,d)){if(!L8(a,d))EN(c);else{j=a.b2.iq(KR(a,d.a));if(!b.cb){if(j>=(-1))CH(c,C(277));else{a.kx=ER(j);CH(c,C(276));}}else if(j>=0){e=AA8(a,d,j);e.bz=GN(B3(a.c.g,e.bp),e.bz);k=a.c.g;CH(c,
!(!HH(k.en,e)&&!HH(k.ee,e)?0:1)?C(277):C(276));}}}}else AKp(a);}
function A6K(a,b){var c,d,e;c=a.no;if(c!==null){if(c.bo(b))return 1;if(b.nd)return 0;}d=b.Q;e=112<=d&&d<=123?1:0;if(!e&&d!=27&&d!=93){e=b.cb;if(e&&d==65){e=Cl(a.c.g)-1|0;d=GG(a.c.g,e);Cc((Bm(a)).bY,0,0);Cc((Bm(a)).bO,Cl(a.c.g)-1|0,d);return 1;}if(!a.fL&&e&&d==90){e=b.bw;if(DI(Bm(a)))Gf(a);b=a.c.g;c=b.hw;if(PY(c.eH))b=null;else{c=B5(c.eH,b);b=c!==null&&!Oe(c)?Mq(b,(MS(c)).gl,e):null;}if(b!==null){b=!e?b.nF:b.i9;CE(a,b.b,b.a,0);EL(a);Si(a);}return 1;}if(!e&&!b.dH){if(Bf(b.e1,C(278))){Eh(a,C(279));DN(a,a.c.y-1
|0,0);e=1;}else if(Bf(b.e1,C(280))){Eh(a,C(281));DN(a,a.c.y-1|0,0);e=1;}else if(Bf(b.e1,C(31))){Eh(a,C(23));DN(a,a.c.y-1|0,0);e=1;}else if(Bf(b.e1,C(282))){Eh(a,C(283));DN(a,a.c.y-1|0,0);e=1;}else if(Bf(b.e1,C(284))){Eh(a,C(285));DN(a,a.c.y-1|0,0);e=1;}else if(!Bf(b.e1,C(286)))e=0;else{Eh(a,C(287));DN(a,a.c.y-1|0,0);e=1;}}else e=0;if(e)return 1;a:{if(!(!b.dH&&!b.cb)){d=b.Q;if(d>=48&&d<=57){e=d-48|0;c=a.kG.data[e];if(c!==null)c.d();e=1;break a;}}e=0;}if(e)return 1;b:{switch(b.Q){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:e
=0;break b;}e=1;}if(e)return 1;if(AOi(a,b))return 1;if(AKV(a,b))return 1;e=b.cb;if(e&&b.Q==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!e&&!b.dH&&!b.kj)return N(b.e1)>0&&Eh(a,b.e1)?1:0;return 0;}return 0;}
function AEC(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=a.c;c=WB(a);d=Wy(a);if(b.fl!=3&&b.ju==3){e=WI(b.r7);f=new WP;f.wn=c;f.wm=d;g=new Tq;g.vQ=f;while(!g.o3&&APm(e,g)){}if(!g.o3&&Bf(C(288),CR(b))){c=Z(0,c-100|0);d=Bc(Cl(b.g)-1|0,d+100|0);Bp(b.r7,BR(c,d));h=BC(3);i=h.data;i[0]=GA(b.g,c);e=b.g;j=0;d=Bc(d+1|0,e.u.data.length);k=0;while(k<d){j=j+GG(e,k)|0;if(k!=(e.u.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Lh=DQ();e=b.fj;l=new ZA;l.uX=b;m=K(B,4);n=m.data;n[0]=DW(b.g);n[1]=h;o=b.g.dt;g=BQ();AET(o,
o.dq,g);h=BC(3*g.l|0);i=h.data;p=0;q=0;r=i.length;while(p<r){s=B1(g,q);t=p+1|0;i[p]=s.cd;j=t+1|0;i[t]=s.b8;p=j+1|0;i[j]=s.gY;q=q+1|0;}n[2]=h;n[3]=Cf([E3(CR(b)),b.g.R]);DJ(e,1,l,C(289),m);}}}
function ADp(a){ALA(a.c);}
function ALC(a,b,c){var d,e,f,g,h,i;if(c&&a.fL)return 0;d=ED(Bm(a));e=d.L;if(DI(Bm(a))){f=a.c.g;g=Bm(a);h=XO(f,g);if(c)QQ(f,g,h);if(c){CE(a,d.L,d.Z,0);Gf(a);EL(a);}}else{h=FK(Ek(a.c.g.u.data[e]),C(272));i=Bc(Cl(a.c.g)-1|0,e);Cc((Bm(a)).bO,i,0);if(e>=(Cl(a.c.g)-1|0))Cc((Bm(a)).bO,i,GG(a.c.g,i));else Cc((Bm(a)).bY,i+1|0,0);if(c)G2(a);else CE(a,e,0,0);}b.e(h);return 1;}
function AX2(a){var b;b=new Rg;b.Bj=a;return b;}
function L8(a,b){var c,d,e;c=a.f;d=c.b+a.dw|0;e=a.eZ;return AOG(b,d-e|0,c.a,a.em+e|0,DZ(a));}
function AKV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(a.fL)return 0;a:{switch(b.Q){case 8:if(DI(Bm(a))){G2(a);c=1;}else{b=a.c;d=b.y;if(!d&&!b.r)c=1;else{if(d){e=b.r;c=d-1|0;QH(b.g,e,c);}else{e=b.r-1|0;c=GG(b.g,e);b=a.c.g;Ml(b,e);Gc(b,e,GG(b,e),1,C(272));Fy(b);}EL(a);c=CE(a,e,c,0);}}break a;case 9:if(!b.bw){if(!DI(Bm(a)))Eh(a,a.gj);else{f=ED(Bm(a));g=Gd(Bm(a));c=g.L;d=f.L;e=(c-d|0)+1|0;h=BC(e);i=h.data;j=K(BH,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.gj;d=d+1|0;e=l;}b=new AGR;m=a.c;AOD(b,m.r,m.y);m
=new VM;m.z4=a;RH(a,h,0,0,j,b,m);f.Z=f.Z+N(a.gj)|0;g.Z=g.Z+N(a.gj)|0;Nj(a,a.c.y+N(a.gj)|0);EL(a);}c=1;}else b:{if(!DI(Bm(a))){b=a.c;f=B3(b.g,b.r);if(f.o.data.length>0){g=X1(a,f);if(g===null){c=1;break b;}m=a.c;n=m.g;e=m.r;b=D2(e,m.y);n.R=n.R+1|0;m=AXh(e,0,1,g,b.bp,b.bz);b=n.hw;h=K(Hj,1);h.data[0]=m;JK(b,n,h);Iq(n,m);F8(n,m,0);H1(f,0,N(g));Nj(a,a.c.y-N(g)|0);}}else{b=ED(Bm(a));f=Gd(Bm(a));c=f.L;d=b.L;c=(c-d|0)+1|0;k=BC(c);j=k.data;o=K(BH,c);i=o.data;g=a.c;p=g.y;q=g.r;r=0;while(d<=f.L){g=B3(a.c.g,d);if(g.o.data.length
>0){g=X1(a,g);if(g!==null){j[r]=d;c=r+1|0;i[r]=g;r=c;}}d=d+1|0;}i=JO(k,r);k=B_(o,r);s=0;while(s<r){j=i.data;g=k.data[s];c=j[s];if(c==b.L)b.Z=Z(0,b.Z-N(g)|0);if(c==f.L){f.Z=Z(0,f.Z-N(g)|0);Nj(a,a.c.y-N(g)|0);}s=s+1|0;}b=D2(q,p);f=new W0;f.uO=a;RH(a,i,0,1,k,b,f);}EL(a);c=1;}break a;case 13:break;case 46:if(DI(Bm(a)))G2(a);else{b=a.c;QH(b.g,b.r,b.y);}Ir(a);EL(a);c=1;break a;default:c=0;break a;}c=ALY(a);}return c;}
function AOi(a,b){var c,d,e,f;a:{switch(b.Q){case 33:c=b.cb?IG(a,GE(a.bc,a.x),b.bw):J6(a,2-AL1(DZ(a),a.x)|0,0,b.dH,b.bw);break a;case 34:c=!b.cb?J6(a,AL1(DZ(a),a.x)-2|0,0,b.dH,b.bw):IG(a,((a.bc+DZ(a)|0)/a.x|0)-1|0,b.bw);break a;case 35:if(!I9(a,b.bw)&&!DN(a,(Hc(a)).F,b.bw)){c=0;break a;}c=1;break a;case 36:if(!I9(a,b.bw)&&!DN(a,0,b.bw)){c=0;break a;}c=1;break a;case 37:c=b.cb;if(c&&b.dH){JI(a);d=a.c.jr;e=d.ej;if(e<=0)d=null;else{f=d.ge.data;c=e-1|0;d.ej=c;d=f[c];}if(d===null)c=1;else{CE(a,MY(d),Lm(d),0);Ke(Bm(a),
d.rg);c=1;}break a;}c=Uw(a,(-1),c,b.bw);break a;case 38:c=J6(a,(-1),b.cb,b.dH,b.bw);break a;case 39:c=b.cb;if(c&&b.dH){d=a.c.jr;e=d.ej;if(e==(d.gc-1|0))d=null;else{f=d.ge.data;c=e+1|0;d.ej=c;d=f[c];}if(d===null)c=1;else{CE(a,MY(d),Lm(d),0);Ke(Bm(a),d.rg);c=1;}break a;}c=Uw(a,1,c,b.bw);break a;case 40:c=J6(a,1,b.cb,b.dH,b.bw);break a;default:}c=0;}if(c&&b.bw){b=(Bm(a)).bO;d=a.c;Cc(b,d.r,d.y);}if(c)Jj(a.c);return c;}
function JI(a){var b,c,d,e,f,g,h;b=a.c;c=b.jr;d=c.ej;c=d<0?null:c.ge.data[d];if(c!==null&&b.r==MY(c)&&a.c.y==Lm(c))return;c=a.c;e=c.jr;b=new OS;d=c.r;f=c.y;c=Bm(a);b.se=D2(d,f);g=A0A(c);b.rg=g;g.d4=0;f=e.ej;h=e.gc;if(f==(h-1|0))AGn(e,b);else{d=f+1|0;while(d<h){ADD(e);d=d+1|0;}AGn(e,b);}e.ej=e.ej+1|0;}
function EL(a){a.c.g.E2=HF(DF(a));}
function AD8(a,b,c){CE(a,c,b,0);}
function Gn(a){return a.c.r;}
function Ik(a,b){var c,d,e,f,g;a.HL=null;My(a.bJ,null);c=a.bq;if(c!==null)EY(c,a.bJ.hI);d=a.c;a.c=b;Kf(a);LF(d,null,null);LF(b,a,(DF(a)).cS);AGX(b,a.y1);e=(BY(a.go.zA)).data;f=e.length;g=0;while(g<f){e[g].fp(d,b);g=g+1|0;}a.bc=Fl(b.oQ*a.x);AHW(a);}
function Ja(a,b){var c,d,e,f;c=b.a-a.f.a|0;d=a.b2.n5(Cl(a.c.g)-1|0)+1|0;e=DS(0,(c+a.bc|0)/a.x|0,d);if(e==d)return Cl(a.c.g);f=a.b2.iq(e);if(f<(-1)){b=a.b2;if(b instanceof AFZ)f=b.dZ.data[ER(f)].b9;}return f;}
function VY(a){return QG(a.dc);}
function Xk(a){var b;b=QG(a.dc);return JO(b,b.data.length);}
function RM(a){var b;b=a.dc;return !b.f2?(!b.cB.b$.data.length?0:1):!b.cB.cu.data.length?0:1;}
function GR(a,b){var c;c=a.b2.n5(b);if(c<0)return;Fp(a,U(a.x,(c-(DZ(a)/(a.x*2|0)|0)|0)-1|0));}
function Vi(a,b){var c;c=MP(a.c.g,b);if(c===null)return C(20);return c.t;}
function N4(a,b){var c,d,e,f,g,h;c=a.c;c.d7=b;if(!Xc(c)){My(a.bJ,null);c=a.bq;if(c!==null)EY(c,a.bJ.hI);}else{d=a.c.d7.data;e=CG(d.length);f=e.data;g=0;h=f.length;while(g<h){c=d[g];f[g]=c===null?0:c.c$<<24>>24;g=g+1|0;}My(a.bJ,e);c=a.bq;if(c!==null)EY(c,e);}if(!ACT(b))AFR(a);else if(a.h.a>0)H$(a);}
function UF(a,b){a.c.tw=b;}
function Bm(a){return a.c.uI;}
function Iu(a){var b,c,d,e,f,g;b=a.rm;if(b!==null){b=b.xB;c=DQ();d=X();e=b.B!==a?0:1;f=AC4(c,b.s4);g=J();F(Os(F(FG(F(g,C(290)),e),C(291)),f),C(223));T(d,I(g));b.s4=c;if(b.B===a)b.lp=b.lp|1;if(b.N===a)b.lp=b.lp|2;if((b.lp&3)==3)JZ(b,0);}Dt(DF(a));}
function Si(a){var b,c;Cl(a.c.g);b=a.c.d7;if(a.h.a>0&&ACT(b))H$(a);c=a.qm;if(c!==null)c.e(a);AHW(a);Dt(DF(a));}
function AHW(a){if(a.E===0.0)return;if(APM(Cl(a.c.g))!=a.tG)G0(a);}
function YK(a,b,c){var d;d=new AEM;d.cB=b;d.f2=c;a.dc=d;}
function A0O(a){var b,c,d;b=a.c.gd;c=AJo(a);if(b!==null){b=b.g1;d=J();F(F(F(d,c),C(292)),b);c=I(d);}return c;}
function NQ(a){HA(a.bq,a.x,a.g8.data[2]);}
function UR(a,b,c,d,e){var f;if(a.bq===null){f=AQZ();a.bq=f;f.fY=!e?OU(a.cD):AMm(a.cD?0:1);f=a.cx;if(f!==null)a.qX=MC(f);if(a.E!==0.0){NQ(a);G0(a);}}if(b!==null)IO(a.bq,b,d);else if(c!==null)Y0(a.bq,c,d);EY(a.bq,a.bJ.hI);a.bq.pL=a.b2;}
function T2(a,b){a.y1=b;AGX(a.c,b);}
function H$(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(a.c.d7===null)return;if(a.eC===null)a.eC=CS(a.C);b=a.b2.dy();c=Bc(a.h.a,U(a.x,b));b=Bc(b,a.c.d7.data.length);d=BC(b);e=d.data;a.b2.oG(0,b,d);d=a.c.d7;f=a.cx.Cn;g=ANV(1,c);h=CG(c).data;i=0;j=e.length;k=Bc(j,c)/2|0;l=0;while(true){if(l>=c){m=h.length;b=BG(m,2);if(b>=0){n=h[0];o=h[1];if(!b){if(!n&&o)h[0]=o;if(!o&&n)h[1]=n;}else{if(!n&&o)h[0]=o;b=1;p=m-1|0;while(b<p){q=b+1|0;j=h[q];if(!o&&n|j){if(!n)n=j;h[b]=n;}n=o;o=j;b=q;}if(!o&&n)h[p]=n;}}if(g.nH==m
&&g.mo==1){d=g.k_;r=Ed(0,0,0,0);b=0;n=0;while(b<m){s=d.data;t=GH(f,h[b],r);o=n+1|0;s[n]=t.gg<<24>>24;n=o+1|0;s[o]=t.gi<<24>>24;o=n+1|0;s[n]=t.gh<<24>>24;n=o+1|0;s[o]=t.e0<<24>>24;b=b+1|0;}}else T(B0(),C(293));Nw(a.eC,g);a.ha.a=c;return;}b=((U(j,l)+j|0)+k|0)/c|0;n=0;o=0;p=0;m=i;while(true){q=e[m];r=q<0?null:d.data[q];if(r!==null){q=r.c$;if(q==1)n=n+1|0;else if(q==2)o=o+1|0;else if(q==3)p=p+1|0;}m=m+1|0;if(m>=b)break;}if((m-i|0)!=(i!=b?b-i|0:1))break;h[l]=!(n|o|p)?0:(n<=p?(o<=p?3:2):n<=o?2:1)<<24>>24;l=l+1|0;i
=b;}r=new Bt;W(r);L(r);}
function AFR(a){var b;b=a.eC;if(b!==null)a.eC=BI(b,null);}
function XM(a,b){var c,d;c=X();d=J();FG(F(d,C(294)),b);T(c,I(d));a.pE=b;}
function KJ(a,b,c){a.b2=b;a.zh=c;c=a.bq;if(c!==null)c.pL=b;if(a.eC!==null&&a.c.d7!==null)H$(a);}
function Kf(a){KJ(a,ASY(a.c),null);}
function ACk(a,b){var c;c=new ABj;c.B6=a;ALC(a,c,b);}
function VH(a){return a.c.g.R;}
function AOB(){var a=this;B.call(a);a.eH=null;a.s2=0;}
function AUU(){var a=new AOB();ATh(a);return a;}
function ATh(a){a.eH=Gy();a.s2=0;}
function JK(a,b,c){var d,e,f;d=a.eH;e=new Uc;AJT(e);e.d1=0;Tm(d,b,e);b=B5(a.eH,b);f=a.s2;a.s2=f+1|0;Xa(b,AJ6(c,Ck(f)));}
function Qw(){B.call(this);this.xB=null;}
var Eg=G(0);
function Qv(){B.call(this);this.DG=null;}
function AQr(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=a.DG;f=c.O;g=d.O;h=b!==e.B?0:1;if(e.br!==null){f=(KK(b.c.g,f)).b;g=(KK(b.c.g,g)).b;b=e.br;f=EQ(b,f,h);while(true){i=f-1|0;if(i<0)break;c=b.H.data[i];if(!h?c.bA:c.bB)break;f=f+(-1)|0;}b=e.br;i=EQ(b,g,h);while(true){g=i+1|0;j=b.H.data;if(g>=j.length)break;c=j[g];if(!h?c.bA:c.bB)break;i=g;}if(f&&e.br.H.data[f].ca)f=f+(-1)|0;j=e.br.H.data;if(i==(j.length-1|0))g=i;else if(!j[i].ca)g=i;b=j[f];c=j[g];h=b.W;f=D8(c);i=b.V;k=Ea(c);if(!RM(e.B)&&!RM(e.N)){e.kf=DQ();b
=e.B.c.g;c=e.N.c.g;l=new AIm;l.Em=e;l.Eo=h;l.En=f;l.Eq=i;l.Ep=k;d=e.ft.bF.m.bk.cS;j=J1(b,h,f);m=J1(c,i,k);n=T0(b,h,f,0);o=T0(c,i,k,0);p=BC(0);q=BC(0);r=Cf([0,b.R,c.R]);b=new VU;b.v9=l;DJ(d,1,b,C(224),BA(B,[j,n,m,o,p,q,r]));}else JZ(e,0);}}
function ABc(){var a=this;B.call(a);a.cu=null;a.b$=null;a.ef=0;a.dO=0;a.ox=0;a.kH=0;a.sl=null;}
function ZY(a,b){return a.ef!=b&&DB(a.cu,b)<0?0:1;}
function AGd(a,b){return a.dO!=b&&DB(a.b$,b)<0?0:1;}
function M4(a,b){if(b==(-1))return;a.cu=Kg(a.cu,b);a.b$=Kg(a.b$,b);if(a.ox==b)a.ox=(-1);AHy(a.sl);}
function AFy(a){var b,c,d,e,f,g,h,i,j;b=a.ef;if(b!=(-1)&&a.dO!=(-1)){c=( -DB(a.cu,b)|0)-1|0;b=( -DB(a.b$,a.dO)|0)-1|0;if(c==b){a.cu=Vt(a.ef,a.cu,c);a.b$=Vt(a.dO,a.b$,b);}else{d=Bc(c,b);e=Z(c,b);f=a.cu;b=f.data.length;c=e-d|0;g=BC((b-c|0)+1|0);h=g.data;i=BC((a.b$.data.length-c|0)+1|0);j=i.data;BE(f,0,g,0,d);BE(a.b$,0,i,0,d);h[d]=a.ef;j[d]=a.dO;j=a.cu;f=j.data;c=d+1|0;BE(j,e,g,c,f.length-e|0);f=a.b$;BE(f,e,i,c,f.data.length-e|0);a.cu=g;a.b$=i;}a.dO=(-1);a.ef=(-1);AHy(a.sl);return;}}
function Qy(){B.call(this);this.Gg=null;}
function AHy(a){JZ(a.Gg,0);}
function Qx(){B.call(this);this.Fk=null;}
function AVL(a,b,c,d){Uh(a.Fk,b,c,d.kF);}
function QA(){B.call(this);this.tr=null;}
function A3U(a,b){ACv(a.tr,b);}
function Qz(){B.call(this);this.Ab=null;}
function A1c(a,b,c,d){Uh(a.Ab,b,c,d.kF);}
function Qs(){B.call(this);this.CK=null;}
function AWf(a,b){ACv(a.CK,b);}
function AMS(){var a=this;B.call(a);a.ld=null;a.qy=null;a.ii=null;}
function ARp(a,b,c){var d=new AMS();AR6(d,a,b,c);return d;}
function AR6(a,b,c,d){var e,f;a.ld=b;a.qy=c;if(!d)e=null;else{Bs(c);e=new XB;e.vU=c;}f=new XC;f.uN=a;b.sQ(e,f);if(!d)b=null;else{e=a.ld;Bs(e);b=new Xz;b.xQ=e;}e=new XA;e.DO=a;c.sQ(b,e);}
function Rc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi;e=a.ii;if(e!==null&&e.H!==null){f=c!==a.ld?0:1;g=!f?e.gK:e.gL;h=f?e.gK:e.gL;i=!f?e.e3:e.fC;j=f?e.e3:e.fC;k=c.kX();l=c.ke();m=d.kX();n=d.ke();o=(l+k|0)/2|0;p=Xt(a,g,i,o);Xt(a,h,j,(n+m|0)/2|0);q=EQ(a.ii,p,f);e=a.ii.H.data[q];r= -(c.dk(k)-(c.iU()).a|0)|0;s= -(d.dk(m)-(d.iU()).a|0)|0;q=!f?e.V:e.W;t=U(HI(a,g,i,q)-k|0,c.gI())+r|0;q=!f?Ea(e):D8(e);u=U(HI(a,g,i,q)-k|0,c.gI())+r|0;q=f?e.V:e.W;v=U(HI(a,h,j,q)-m|0,d.gI())+s
|0;q=f?Ea(e):D8(e);w=U(HI(a,h,j,q)-m|0,d.gI())+s|0;x=V3(a,t,v,w,u);V3(a,v,t,u,w);y=o-k|0;z=p-(!f?e.V:e.W)|0;ba=f?e.V:e.W;bb=HI(a,h,j,ba+z|0)-y|0;if(x)return;bc=U(bb,d.gI())+r|0;bd= -((d.dk(m)-U(m,d.gI())|0)-(d.iU()).a|0)|0;be=bc-bd|0;if(AKq(b)!==AKq(be))return;if(!b)d.ou(bc);else{bf=E2(b);bg=U(bf,bf);bh=E2(be);bi=be<=0?0:1;d.ou(bd+U(Bc(bh,Z(bg,AAr(Z(e.bB,e.bA))*bh/bf|0)),!bi?(-1):1)|0);}return;}}
function Xt(a,b,c,d){var e;if(b!==null&&c!==null){e=AJ0(b,d);d=BG(e,(-1));if(d>0)return e;if(d>=0)return (-1);return c.data[ER(e)].b9;}return d;}
function HI(a,b,c,d){var e,f;if(b!==null&&c!==null){e=FV(b,d);d=BG(e,(-1));if(d>0)return e;if(d<0){f=Pa(b,c.data[ER(e)].cA+1|0);if(f>(-1))return f-1|0;}return (-1);}return d;}
function V3(a,b,c,d,e){return b<=c&&d<=e?1:0;}
var Es=G(0);
function Qr(){var a=this;B.call(a);a.Ke=null;a.BL=null;}
function Qu(){var a=this;B.call(a);a.LT=null;a.HC=null;}
function Qd(){B.call(this);this.u8=null;}
function CH(a,b){OC(a.u8,b);return 1;}
function EN(a){return CH(a,null);}
function I6(b){var c;c=new Qd;c.u8=b;return c;}
function AB6(){B.call(this);this.xc=null;}
function A19(a){Li(a.xc);}
function AB5(){B.call(this);this.Am=null;}
function AY1(a){LD(a.Am);}
function Js(){var a=this;B.call(a);a.x9=null;a.t3=null;a.uQ=null;a.FI=null;a.wd=null;a.ni=null;}
function A_P(a,b,c,d,e,f){var g=new Js();P5(g,a,b,c,d,e,f);return g;}
function P5(a,b,c,d,e,f,g){a.x9=b;a.t3=c;a.uQ=d;a.FI=e;a.wd=f;a.ni=g;}
function KU(){var a=this;B.call(a);a.u4=null;a.sA=null;a.yU=null;}
function A_Q(a,b,c){var d=new KU();LL(d,a,b,c);return d;}
function LL(a,b,c,d){a.u4=b;a.sA=c;a.yU=d;}
function Ys(a,b){return !b?a.sA:a.yU;}
function ANl(){var a=this;B.call(a);a.li=null;a.n4=null;a.qH=null;}
function AMj(a,b,c){var d=new ANl();A6h(d,a,b,c);return d;}
function A6h(a,b,c,d){a.li=b;a.n4=c;a.qH=d;}
function S5(){var a=this;CD.call(a);a.hv=null;a.hN=null;a.hO=null;a.hL=null;a.hM=null;a.i$=null;a.ew=null;a.ex=null;a.pc=null;a.EQ=null;a.rA=null;a.qt=null;a.BO=null;a.qW=null;a.nE=null;a.sO=0;a.jt=0;a.js=0;a.lP=0;a.uV=null;a.yd=null;a.kk=null;a.h1=null;}
function AG3(a,b,c){a.ew=b;a.ex=c;}
function AFB(a,b,c,d,e,f,g){a.qW=b;a.pc=c;a.EQ=d;a.BO=e;a.rA=f;a.qt=g;}
function ZD(a,b,c,d,e){V(a.hN,a.f.b,b);V(a.hL,a.f.b,c);V(a.hO,a.f.b+a.h.b|0,d);V(a.hM,a.f.b+a.h.b|0,e);}
function AV5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=a.f;Bi(b,c.b,c.a,a.h,a.pc);if(a.i$!==null&&a.qW!==null){AKt(a);if(!a.kk.e$&&!a.h1.e$&&a.jt==(-1)&&a.js==(-1))return;BM(b,1);c=a.ew.iU();d=a.ex.iU();e=a.ew.nU();f=a.ex.nU();g=a.hv;h=g.h$;i=Ci(g,2.0);g=a.kk;j=g.hz;k=0;l=g.e$;while(k<l){m=j.data[k];n=a.ew.dk(m.ip);o=a.ew.dk(m.ip+m.zT|0);p=a.ex.dk(m.io);q=a.ex.dk(m.io+m.zU|0);ZD(a,n,o,p,q);r=Z(Bc(n,p),a.f.a);s=Bc(Z(o,q),a.f.a+a.h.a|0);if(s>r){V(h,a.h.b,s-r|0);t=GH(a.qW,m.wp,a.pc);if(n==o)Tc(a,b,n,p,i,c.b,
e.b,t,a.hN,a.hL);if(p==q)Tc(a,b,p,n,i,d.b,f.b,t,a.hO,a.hM);P_(b,a.f.b,r,h,a.hN,a.hO,a.hL,a.hM,t);}k=k+1|0;}ANz(a,b);BM(b,0);return;}}
function ANz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;a:{c=a.h1.e$;d=a.ew.oL();e=a.ex.oL();f=Ci(a.hv,3.0);g=a.hv.h$;if(c>0){h=a.h1.hz;i=0;while(true){if(i>=c)break a;j=h.data[i];k=a.ew.dk(j.ip);l=a.ex.dk(j.io);m=k+f|0;n=l+f|0;ZD(a,k,m,l,n);o=Z(Bc(k,l),a.f.a);p=Bc(Z(m,n),a.f.a+a.h.a|0);q=f/2|0;r=BG(k,l);if(r>0){s=a.hO;s.b=s.b-q|0;s=a.hL;s.b=s.b+(f-q|0)|0;}else if(r<0){s=a.hN;s.b=s.b+q|0;s=a.hM;s.b=s.b-(f-q|0)|0;}V(g,a.h.b,p-o|0);s=i!=a.sO?a.EQ:a.BO;P_(b,a.f.b,o,g,a.hN,a.hO,a.hL,a.hM,s);t=a.hv.cp;t.b=d;r=
a.hL.a;j=a.hN;t.a=r-j.a|0;Bi(b,j.b-d|0,j.a,t,s);t.b=e;p=a.hM.a;j=a.hO;t.a=p-j.a|0;Bi(b,j.b,j.a,t,s);i=i+1|0;}}}r=a.jt;if(r!=(-1)){r=a.ew.dk(r);g.b=d;g.a=f;Bi(b,a.f.b-d|0,r,g,!a.lP?a.qt:a.rA);}d=a.js;if(d!=(-1)){l=a.ex.dk(d);g.b=e;g.a=f;Bi(b,a.f.b+a.h.b|0,l,g,!a.lP?a.rA:a.qt);}}
function Tc(a,b,c,d,e,f,g,h,i,j){var k;k=a.hv.cp;V(k,g,e);if(d>=c)j.a=j.a+e|0;else{c=c-e|0;i.a=i.a-e|0;}Bi(b,f,c,k,h);}
function AKt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;b=a.i$;c=b.gL;b=b.gK;d=a.ew.kX();e=a.ew.ke();f=a.ex.kX();g=a.ex.ke();AIb(a.kk);h=a.i$.H.data;i=h.length;j=0;while(j<i){k=h[j];if(k.ca){l=c===null?k.W:Pa(c,k.W);if(l>=0){m=b===null?k.V:Pa(b,k.V);if(m>=0){n=k.bB;o=k.bA;p=d<=(l+n|0)&&l<=e?1:0;q=f<=(m+o|0)&&m<=g?1:0;if(!(!p&&!q)){r=AHF(a.kk);r.ip=l;r.zT=n;r.io=m;r.zU=o;r.wp=k.ca;}}}}j=j+1|0;}AIb(a.h1);s=a.nE;if(s===null)return;t=s.cu;u=s.b$;i=0;while(true){h=t.data;if(i>=h.length)break;v=u.data;j
=h[i];w=v[i];if(c!==null)j=FV(c,j);if(b!==null)w=FV(b,w);if(!(j<d&&w<f)&&!(j>e&&w>g)){s=AHF(a.h1);s.ip=j;s.io=w;}i=i+1|0;}s=a.nE;x=s.ef;y=s.dO;z=s.kH;a.jt=(-1);a.js=(-1);if(x!=(-1)){a.lP=1;if(c!==null)x=FV(c,x);if(d<=x&&x<=e)a.jt=x;if(z!=(-1)){if(b!==null)z=FV(b,z);if(f<=z&&z<=g)a.js=z;}}if(y!=(-1)){a.lP=0;if(b!==null)y=FV(b,y);if(f<=y&&y<=g)a.js=y;if(z!=(-1)){if(c!==null)z=FV(c,z);if(d<=z&&z<=e)a.jt=z;}}}
function ARH(a,b,c){var d;if(!Cd(a,b.i))Lr(a,(-1));else{d=Vv(a,b.i);Lr(a,d);if(d==(-1)?0:1)CH(c,C(276));else{CH(c,null);Lr(a,(-1));}}}
function AX$(a,b,c){return A$6;}
function AXd(a,b,c,d){var e;if(Cd(a,b.i)){e=Vv(a,b.i);if(e!=(-1)){b=a.yd;if(b!==null)M4(b.HC,e);return 1;}}return 0;}
function Vv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(a.nE===null)return (-1);c=Infinity;d=(-1);e=Ci(a.hv,2.0);f=e/2|0;g=a.h1;h=g.e$;i=g.hz;j=0;k=5*e|0;while(j<h){g=i.data[j];l=a.ew.dk(g.ip);m=l-f|0;n=m+e|0;o=a.ex.dk(g.io);p=o-f|0;q=p+e|0;r=Z(Bc(m,p),a.f.a);s=Bc(Z(n,q),a.f.a+a.h.a|0);m=b.a;if(r<=m&&m<=s){s=b.b;n=a.f.b;p=(n+a.h.b|0)-n|0;q=U(p,l-m|0);m=o-l|0;t=E2(q-U(m,n-s|0)|0)/AJ2(m,p);}else t=AN4(V6(a,b.b,m,a.f.b,l),V6(a,b.b,b.a,a.f.b+a.h.b|0,o));if(t<=k&&t<c){d=j;c=t;}j=j+1|0;}return d;}
function V6(a,b,c,d,e){return AJ2(d-b|0,e-c|0);}
function Lr(a,b){var c;a.sO=b;c=a.uV;if(c!==null)c.BL.ox=b;}
function AJD(){var a=this;B.call(a);a.l1=null;a.iJ=null;a.o8=null;a.hm=0;a.rF=0.0;a.kc=0.0;}
function A1Z(){var a=new AJD();AV0(a);return a;}
function AV0(a){var b;a.l1=new Y;a.iJ=BR(2,20);b=new BS;a.o8=b;a.rF=0.5;a.kc=0.0;P7(187,b);}
function Vr(a){return a.iJ.b;}
function AEN(a,b){var c,d;a:{c=a.hm;if(b>a.kc)while(true){d=a.kc+a.rF;a.kc=d;a.hm=a.hm?0:1;if(b>d)continue;else break a;}}return a.hm==c?0:1;}
function AB8(a,b,c){V(a.l1,b,c);}
function ABJ(a,b){a.kc=b+a.rF*1.25;a.hm=1;}
function AFY(a,b,c){var d;d=a.l1;Bi(b,d.b+c.b|0,d.a+c.a|0,a.iJ,a.o8);}
function AIc(){var a=this;B.call(a);a.gd=null;a.g=null;a.sD=null;a.xa=null;a.uI=null;a.jr=null;a.eu=null;a.JX=null;a.fj=null;a.d7=null;a.r=0;a.y=0;a.kA=null;a.ki=null;a.r7=null;a.ln=0;a.ju=0;a.fl=0;a.qL=CY;a.Lh=CY;a.Ly=CY;a.tw=0;a.KG=0;a.oQ=0.0;a.jv=0;}
function A8t(a,b,c){var d=new AIc();APY(d,a,b,c);return d;}
function ASL(a,b){var c=new AIc();AVx(c,a,b);return c;}
function A8w(a,b,c){var d=new AIc();YO(d,a,b,c);return d;}
function APY(a,b,c,d){YO(a,(AA1(b)).jY,c,d);}
function AVx(a,b,c){YO(a,b,null,c);}
function YO(a,b,c,d){var e,f,g,h,i;e=b.data;a.uI=ARu();f=new Wc;f.ge=K(OS,16);f.gc=0;f.ej=(-1);a.jr=f;a.kA=null;a.ki=BQ();a.r7=BQ();a.ln=1;a.ju=1;a.fl=1;a.oQ=0.0;a.jv=0;a.gd=d;a.sD=c;c=new ADs;g=e.length;b=K(C5,Z(1,g));if(!g)b.data[0]=N0(C(20));h=b.data;i=0;while(i<g){h[i]=N0(e[i]);i=i+1|0;}d=new ABz;f=new OQ;SM(f);d.fW=f;c.fO=d;c.en=Gy();c.ee=Gy();c.hw=AUU();if(!h.length){c=new Bq;W(c);L(c);}c.u=b;g=AGb(c);c.dt=A6i(IV(0,g,0));a.g=c;d=new TF;d.FA=a;c.HE=d;d=new TG;d.tE=a;c.BK=d;}
function CR(a){var b;b=a.sD;if(b===null){b=a.gd;b=b===null?C(277):AMy(b.g1);}return b;}
function HQ(a){var b;b=a.gd;return b===null?null:b.md;}
function Nc(a,b){var c,d,e,f,g;c=NM(b);d=c.iu;e=a.g;if(d!=e.R){UU(a);return;}Py(e,c);f=c.nr;if(f!==null&&c.jQ!==null?1:0){g=JO(f,f.data.length);b=c.jQ;Wq(a,g,IP(b,b.data.length));}GZ(a,C(295));if(a.ln!=3){c=a.eu;if(c!==null)Iu(c);}a.ju=3;a.ln=3;a.fl=3;}
function GZ(a,b){var c,d,e;if(!a.jv)return;c=AC4(DQ(),a.qL);d=K(B,3);e=d.data;e[0]=Ky(a);e[1]=b;b=new H_;b.iY=c;e[2]=b;$rt_globals.console.info($rt_ustr(Yz(C(296),d)));}
function Jj(a){var b;U2(a,D2(a.r,a.y),Jy(a.g,a.r,a.y));if(!(a.kA!==null&&!F6(a.ki))){b=a.y;if(b>0)U2(a,D2(a.r,b-1|0),Jy(a.g,a.r,a.y-1|0));}}
function U2(a,b,c){var d,e,f,g,h,i,j,k;a.kA=null;GP(a.ki);d=B5(a.g.en,c);if(d!==null)c=d;a:{e=B5(a.g.ee,c);if(e!==null){a.kA=MP(a.g,c);c=B4(e);while(true){if(!B6(c))break a;f=B7(c);Bp(a.ki,MP(a.g,f));}}}c=a.eu;if(c!==null){g=b.bp;h=b.bz;b=c.go;f=CR(c.c);e=HQ(c.c);i=(BY(b.zV)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.GG(f,e)){b=b.JM;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new AFi;e.Iy=c;e.IA=f;e.Iz=g;e.Ix=h;b.xt(f,g,h,e,c.lI);}}}
function Wq(a,b,c){var d,e,f,g,h;if(a.fj!==null){a.Ly=DQ();d=a.g.R;e=a.fj;f=new AGj;f.Fg=a;g=K(B,3);h=g.data;h[0]=b;h[1]=c;b=BC(1);b.data[0]=d;h[2]=b;DJ(e,1,f,C(297),g);}}
function LF(a,b,c){var d,e,f;a.eu=b;a.fj=c;if(c===null){d=a.g.u.data;e=d.length;f=0;while(f<e){VO(d[f]);f=f+1|0;}}else if(a.fl==1)UU(a);}
function AGX(a,b){a.g.hw=b;}
function AG0(a){var b;a.ju=3;a.ln=3;a.fl=3;b=a.eu;if(b!==null)Iu(b);}
function UU(a){var b,c,d,e,f,g,h,i,j,k;if(a.jv)T(X(),C(298));if(a.fj===null)return;if(Cl(a.g)==1&&HB(B3(a.g,0))==1&&!JC(Ib(B3(a.g,0),0))?1:0){AG0(a);return;}a.qL=DQ();b=CR(a);c=E3(b);d=DW(a.g);if(JE(a)){Ki(a,d,c);return;}e=d.data;f=BN(b,C(299));g=BN(b,C(288));h=BN(b,C(300));i=BN(b,C(301));j=e.length;k=g?10240:!h&&!i?5120:51200;if(j>k&&!f)Ki(a,d,c);else ADC(a,d,c);}
function Ki(a,b,c){var d,e;d=a.fj;e=new V2;e.zf=a;DJ(d,1,e,C(302),BA(B,[b,Cf([c,2147483647,a.g.R])]));a.fl=2;}
function ADC(a,b,c){var d,e;d=a.fj;e=new SN;e.Cy=a;DJ(d,1,e,C(303),BA(B,[b,Cf([c,a.g.R])]));a.fl=2;}
function Ky(a){var b;b=a.gd;return b===null?C(20):AGg(b);}
function Na(a){var b,c,d,e,f,g;if(a.jv){b=Ky(a);c=J();F(F(c,b),C(304));$rt_globals.console.info($rt_ustr(I(c)));}d=DW(a.g);if(JE(a)){Ki(a,d,E3(CR(a)));return;}b=CR(a);if(b===null)e=null;else{a:{f=(-1);switch(Kt(b)){case -1655966961:if(!Bf(b,C(299)))break a;f=4;break a;case 3401:if(!Bf(b,C(305)))break a;f=2;break a;case 3711:if(!Bf(b,C(306)))break a;f=3;break a;case 98723:if(!Bf(b,C(307)))break a;f=1;break a;case 3213227:if(!Bf(b,C(301)))break a;f=5;break a;case 3254818:if(!Bf(b,C(288)))break a;f=0;break a;case 3271912:if
(!Bf(b,C(300)))break a;f=6;break a;default:}}b:{switch(f){case 0:break;case 1:e=C(308);break b;case 2:e=C(309);break b;case 3:e=C(310);break b;case 4:e=C(311);break b;case 5:e=C(312);break b;case 6:e=C(313);break b;default:e=C(314);break b;}e=C(315);}}if(e===null){b=a.eu;if(b!==null)Iu(b);}else{a.qL=DQ();b=a.fj;g=new Xi;g.FT=a;DJ(b,1,g,e,BA(B,[d,Cf([E3(CR(a)),a.g.R])]));}}
function ALA(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;if(a.jv){b=Ky(a);c=J();F(F(c,b),C(316));$rt_globals.console.info($rt_ustr(I(c)));}if(a.fl!=3)return;b=CR(a);if(JE(a)){Ki(a,DW(a.g),E3(b));return;}c=a.g.dt;d=Su(c,c.dq);if(d===null){PJ(a);Lf(a.g);b=a.eu;if(b!==null)Iu(b);return;}e=Dc(d);f=Dl(d);g=Cf([e,f,AAW(d)]);h=DW(a.g);i=BC(1);i.data[0]=E3(b);c=a.g.fO;if(c.gu===null){j=BC(0);k=B2(0);}else{l=AYq(A0x(d.cv,c.fW),d);AAf(l);j=l.rk;k=l.o6;}m=a.g.R;b=a.fj;n=new XZ;n.ym=a;n.yq=e;n.yp=f;DJ(b,1,n,C(317),BA(B,[h,i,g,Cf([E3(CR(a)),
m]),j,k]));}
function PJ(a){var b;b=AYq(a.g.fO,null);AAf(b);Wq(a,b.rk,b.o6);}
function JE(a){var b;b=a.eu;return b===null?0:b.pE;}
function Xc(a){return ACT(a.d7);}
function AH1(){var a=this;B.call(a);a.Db=null;a.Hq=null;a.tJ=null;a.zV=null;a.zA=null;a.FZ=null;}
function PP(a,b,c){return TR(a,BY(a.Db),b,c);}
function ACm(a,b,c){return TR(a,BY(a.Hq),b,c);}
function TR(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.GG(c,d))return g.KX;f=f+1|0;}return null;}
function AFA(a,b,c){var d,e,f,g;d=(BY(a.tJ)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.GG(b,c))return g.KS;f=f+1|0;}return null;}
function FJ(){var a=this;B.call(a);a.cm=0;a.dD=null;a.c7=null;a.fq=null;a.ei=0;}
var A_R=0;var A_N=0;function AAR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=a.c7;j=i===b&&!i.kV?0:1;if(j){a.c7=b;OD(b,c.bE,a.dD.iA);}k=Ks(b);l=GE(Bc(k,e+2048|0),1024);m=a.fq;n=m.data.length;o=l<=n?0:1;if(o){a.fq=B_(m,l);while(n<l){a.fq.data[n]=CS(c);n=n+1|0;}}p=a.dD.ja;if(!(!j&&!o)){if(A_R){m=b.hE;$rt_globals.console.info("fMeasure"+m.data);A_R=0;}if(!A_N){c=p.dG;b="alphabetic";c.textBaseline=b;}else{b=p.dG;c="top";b.textBaseline=c;}a.ei=f/1024|0;q=0;while(q<l){KE(a,p,d,a.ei+q|0);q=q+1|0;}a.c7.kV=0;}e=a.fq.data.length;if
(e&&f<=Ks(a.c7)){f=f/1024|0;g=a.ei;if(f!=g){if(E2(f-g|0)>=e){g=0;while(g<e){KE(a,p,d,f+g|0);g=g+1|0;}a.ei=f;}else{while(true){g=a.ei;if(g>=f)break;KE(a,p,d,g+e|0);a.ei=a.ei+1|0;}while(true){g=a.ei;if(g<=f)break;KE(a,p,d,g-1|0);a.ei=a.ei-1|0;}}}}return k;}
function KE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=ABl(a,e);g=a.c7;if(f>=g.o.data.length)return;h=g.hE;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cm;l=a.dD.iA;JQ(b);a:{while(true){g=a.c7;if(f>=g.o.data.length)break a;m=l.data;g=Ib(g,f);n=m[K_(g)];o=!A_N?Mv(n,c):Of(n,c);m=h.data;Cm(b,n);BX(b,g.t,k,o);k=m[f]-j+a.cm;if(k>1024.0)break;f=f+1|0;}}h=a.fq.data;Da(h[d%h.length|0],b);}
function ADc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;p=Ks(a.c7);if(p&&g<p){q=a.c7;r=q.fF;s=q.o;t=g/1024|0;u=ABl(a,g);v= -a.cm|0;w=a.fq.data.length;x=f;a:{while(true){y=s.data;z=y.length;if(u>=z)break a;z=u!=(z-1|0)?0:1;if(v>=e)break;ba=r.data;q=a.fq.data[t%w|0];bb=y[u];bc=ba[u]+a.cm|0;bd=t*1024|0;be=(bc-bd|0)>1024?0:1;bf=t+1|0;bg=bf*1024|0;bh=Bc(bg,bc)-g|0;if(be&&z)bh=bh+a.cm|0;bi=i!==null?0:1;b:{if(!bi){bj=!z?a.cm:2*a.cm|0;bk=i.b;bl=
i.a;if(!(bk<bl&&g<=bl&&(g+bh|0)>(bk+bj|0)?0:1)){bk=0;break b;}}bk=1;}c:{if(!bi){bj=!z?a.cm:2*a.cm|0;if(g>=i.b&&(g+bh|0)<=(i.a+bj|0)?1:0){bl=1;break c;}}bl=0;}bm=null;if(m!==null)bm=m;else{if(l)bm=h.AF;if(bb===j)bm=h.wF;if(k!==null&&Mb(k,bb))bm=h.Az;if(o!==null){d:{y=o.pZ;if(y!==null){y=y.data;if(u<y.length){bn=y[u];break d;}}bn=0;}if(!bn)bn=o.c$;else if(bn==3&&o.c$==3)bn=4;bm=GH(h.Ev,bn,h.lX);}}if(!bl&&!bk){i.a=Bc(i.a,p);AN1(a,d,v+c|0,b,f,h,q,bb,bh,g>=i.b?bh:(Bc(bc,bg)-i.b|0)-(!z?a.cm:0)|0,(g+bh|0)<=(i.a+(!z
?a.cm:2*a.cm|0)|0)?0:(Bc(bc,bg)-i.a|0)-(!z?a.cm:0)|0,g-bd|0,bm,n);}else{bo=h.od.data[bb.b_];if(bl)bp=h.tf;else{bp=bo.o2;if(bp===null)bp=h.lX;bp=Vw(bm,bp);}Cb(a.dD.i_,g-bd|0,0.0,bh,x);V(a.dD.jS,bh,f);bq=n===null?bo.f9:n;Jw(a.dD,d,q,v+c|0,b,bq,bp);}if((bb.bL&12)>>2>0){z=v+c|0;BM(d,1);q=a.dD;bo=q.p0;bo.b=bh;bj=b+q.x6|0;bi=bj-q.G7|0;br=q.tO;bs=bj+br;bp=q.iQ;Jx();J3(d,z,bi,bo,br,bs,bp,A_z.i1.f9,0.0);BM(d,0);}g=g+bh|0;v=v+bh|0;if(!be){u=u+(-1)|0;t=bf;}u=u+1|0;}}return;}}
function AN1(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w;o=f.od.data[h.b_];if(n===null)n=o.f9;h=o.o2;if(h===null)h=f.lX;p=Vw(m,h);q=f.tf;f=a.dD;r=f.i_;s=f.jS;t=l;u=i-j|0;v=u;w=e;Cb(r,t,0.0,v,w);V(s,u,e);Jw(a.dD,b,g,c,d,n,p);l=l+i|0;Cb(r,l-k|0,0.0,k,w);V(s,k,e);f=a.dD;c=c+i|0;Jw(f,b,g,c-k|0,d,n,p);t=l-j|0;i=j-k|0;Cb(r,t,0.0,i,w);V(s,i,e);Jw(a.dD,b,g,c-j|0,d,n,q);}
function Vw(b,c){if(b!==null)c=b;return c;}
function ABl(a,b){var c,d,e,f,g,h,i;c=a.c7;d=c.hE;e=0;f=c.o.data.length;g=b;b=BG(e,f);if(b>0){c=new Bq;W(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BG(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AIh(a){var b,c,d;b=a.fq.data;c=b.length;d=0;while(d<c){V8(b[d]);d=d+1|0;}a.fq=a.dD.qc;a.c7=null;}
function APU(a,b,c,d,e,f,g,h,i){var j,k;j=Ks(a.c7);if(j)j=j+a.cm|0;if(!j)j=j-a.cm|0;k=Z( -a.cm|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bi(b,c+k|0,d,f,i);}
function ACp(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=K(FJ,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>=f)break a;l=g.x$(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.c7===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FJ;g.cm=3;g.ei=0;g.dD=d;g.fq=d.qc;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AIh(q);j=j+1|0;}return i;}
function KL(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AIh(b[d]);d=d+1|0;}}
function AKF(){A_N=0;}
function AMk(){var a=this;B.call(a);a.he=null;a.dW=null;a.fQ=null;a.gC=null;a.rd=null;a.qY=null;}
function Gg(){var a=new AMk();A2s(a);return a;}
function A2s(a){a.he=new Y;a.dW=new Y;a.fQ=new Y;a.gC=new Y;a.rd=new BS;a.qY=new BS;}
function ACF(a){var b;b=a.dW;return !U(b.b,b.a)?0:1;}
function I3(a,b){return FH(b,a.fQ,a.gC);}
function L0(a,b){return FH(b,a.he,a.dW);}
function EX(a,b,c,d){var e,f,g,h,i;e=I3(a,b);f=L0(a,b);if(!e&&!f)return null;if(!f){if(!d)c.e(X6(a,b.b-a.fQ.b|0));else c.e(Sy(a,b.a-a.fQ.a|0));}g=!d?a.he.b+(a.dW.b/2|0)|0:a.he.a+(a.dW.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new AEV;b.B7=a;b.B9=c;b.B8=i;}else{b=new AEW;b.xq=a;b.xp=c;b.xr=i;}return b;}
function GD(a,b,c){if(c!==null)BO(a.rd,c);if(b!==null)BO(a.qY,b);}
function AJL(b,c){var d;d=new AFJ;d.wX=b;d.HD=c;return d;}
function Sy(a,b){var c,d,e;c=a.gC.a;d=a.dW.a;e=c-d|0;return AJL(Bc(Z(0,b-(d/2|0)|0),e),e);}
function X6(a,b){var c,d,e;c=a.gC.b;d=a.dW.b;e=c-d|0;return AJL(Bc(Z(0,b-(d/2|0)|0),e),e);}
function GI(a,b,c,d,e,f,g){Yq(a,b,c,d,e,f,g,1);}
function TC(a,b,c,d,e,f,g){Yq(a,b,c,d,e,f,g,0);}
function Yq(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bc(i,d);j=Z(Zq(d,d,e),i);e=e-d|0;i=d-j|0;i=i?Zq(b,i,e):0;if(!h){k=a.he;k.b=i+c|0;k.a=f-g|0;l=a.dW;l.b=j;l.a=g;l=a.fQ;l.b=c;l.a=k.a;k=a.gC;k.b=d;k.a=g;break a;}k=a.he;k.b=f-g|0;k.a=i+c|0;l=a.dW;l.b=g;l.a=j;l=a.fQ;l.b=k.b;l.a=c;k=a.gC;k.b=g;k.a=d;break a;}}V(a.gC,0,0);V(a.dW,0,0);}}
function JJ(a,b){G5(a,b);Hb(a,b);}
function G5(a,b){var c;c=a.fQ;Bi(b,c.b,c.a,a.gC,a.rd);}
function Hb(a,b){var c,d;c=a.dW;c.b=c.b-2|0;c.a=c.a-2|0;d=a.he;Bi(b,d.b+1|0,d.a+1|0,c,a.qY);b=a.dW;b.b=b.b+2|0;b.a=b.a+2|0;}
function E0(a,b,c){return I3(a,b)&&EN(c)?1:0;}
function AJC(){var a=this;B.call(a);a.fR=null;a.db=null;a.vK=null;a.ka=0.0;a.ns=null;a.rJ=0;a.mR=0;a.xz=0;a.hI=null;a.iv=null;a.fs=null;a.hW=null;a.Gx=0;}
function AXT(){var a=new AJC();A6O(a);return a;}
function A6O(a){var b;a.fR=new Y;a.db=new Y;a.vK=new Y;a.hI=CG(0);a.fs=BQ();b=new AFG;b.eS=K(B,9);a.hW=b;}
function Vg(a,b,c,d,e,f){V(a.fR,b,c);if(ADO(a.db,d,e)&&a.ka===f?0:1){V(a.db,d,e);a.ka=f;AE4(a);Oi(a);}}
function OK(a){return a.db.b;}
function My(a,b){if(b===null)b=CG(0);a.hI=b;}
function Um(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;g=c;while(g<d){h=g/20|0;i=h*20|0;j=YA(a,e,i);k=Z(i,c);l=Bc(i+20|0,d);m=a.fR;n=a.hI;g=j.mS;if((g+20|0)>=k&&l>=g){o=f.hJ;i=U(k%20|0,j.dY);g=0;p=Pl(f,n,k);q=0;r=l-k|0;while(q<r){s=Pl(f,n,k+q|0);if(s===p){t=U((q-g|0)+1|0,j.dY);V(j.kT,Bz(j.fg),t);Cb(j.lv,0.0,i+U(g,j.dY)|0,Bz(j.fg),t);s=p;}else{Ol(j,e,b+U(g,j.dY)|0,m,o.nm,p);V(j.kT,Bz(j.fg),j.dY);Cb(j.lv,0.0,i+U(q,j.dY)|0,Bz(j.fg),j.dY);g=q;}q=q+1|0;p=s;}Ol(j,e,b+U(g,j.dY)|0,m,o.nm,p);}j.B1=a.Gx;b=b+U(l-k|0,
a.mR)|0;g=(h+1|0)*20|0;}}
function ACg(a,b,c,d,e){var f,g;f=e.bC.df;g=a.vK;e=a.db;g.b=e.b;g.a=c-b|0;if(b<e.a){e=a.fR;Bi(d,e.b,e.a+b|0,g,f);}}
function Ve(a,b,c,d){ACg(a,b,a.db.a,c,d);}
function QI(a,b,c,d,e,f){var g,h,i,j,k,l,m;g=a.mR;h=b+U(c,g)|0;i=h+g|0;if(h<a.db.a&&0<i?1:0){j=YA(a,f,d);k=a.fR;l=a.hI;c=j.mS;if((c+20|0)>=d&&d>=c){b=U(d%20|0,j.dY);m=Pl(e,l,d);V(j.kT,j.kl.b,j.dY);Cb(j.lv,0.0,b,j.kl.b,j.dY);Ol(j,f,h,k,e.hJ.rI,m);}}}
function Vz(a,b,c){var d,e;d=a.iv;if(!(d!==null&&d.ng==a.rJ))a:{d=BI(d,Ef(b,a.db.b,a.xz,a.rJ));a.iv=d;Cm(d,a.ns);d=a.iv;switch(2){case 0:break;case 1:d=d.dG;e="center";d.textAlign=e;break a;case 2:d=d.dG;e="right";d.textAlign=e;break a;default:break a;}e=d.dG;d="left";e.textAlign=d;}H9(b,a.fR,a.db);a.Gx=c;b=B4(a.fs);while(B6(b)){d=B7(b);if((c-d.B1|0)>=2)AMl(a.hW,d);}b=a.fs;d=a.hW;b=B4(b);while(B6(b)){if(Mb(d,B7(b)))Ov(b);}}
function YA(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=(c/20|0)*20|0;e=B4(a.fs);while(true){if(!B6(e)){f=a.hW;g=f.hS;c=BG(g,f.hu);if(c?0:1){h=new SL;h.kl=new Y;h.kT=new Y;h.lv=new BS;}else{if(!c)e=null;else{i=f.eS.data;e=i[g];i[g]=null;f.hS=AFQ(g,i.length);f.i0=f.i0+1|0;}if(e===null){b=new Go;W(b);L(b);}h=e;}c=OK(a);g=a.mR;f=a.iv;e=a.ns;j=a.ka;JQ(f);h.mS=d;h.dY=g;k=h.kl;k.b=c;k.a=20*g|0;l=Mv(e,g);if(h.fg===null)h.fg=BI(null,CS(b));m=0;j=2.0*j;while(m<20){e=GB((d+m|0)+1|0);n=U(g,m)+l|0;BX(f,e,h.kl.b-j,n);m=m+1|0;}Da(h.fg,
f);h.Bo=f.ng;Bp(a.fs,h);return h;}h=B7(e);if(h.mS==d)break;}return h;}
function ABP(a,b,c,d){a.ns=b;a.mR=c;a.xz=c*20|0;a.rJ=d;Oi(a);FU(a.hW,a.fs);GP(a.fs);}
function Lu(a){AE4(a);Oi(a);}
function AE4(a){var b;b=AK5(a.hW);while(AJl(b)){YN(AJY(b));}b=B4(a.fs);while(B6(b)){YN(B7(b));}GP(a.fs);b=a.hW;AMC(b.eS,null);b.hS=b.hu;}
function Oi(a){a.iv=BI(a.iv,null);}
function NI(a,b){return FH(b,a.fR,a.db);}
function AAF(){B.call(this);this.Je=null;}
var H3=G();
function ER(b){return ( -b|0)-2|0;}
function ADT(){H3.call(this);this.qM=null;}
function ASY(a){var b=new ADT();AVM(b,a);return b;}
function AVM(a,b){a.qM=b;}
function AS3(a){return Cl(a.qM.g);}
function AQK(a,b){return b;}
function AYL(a,b){return b;}
function A1K(a,b){if(!(0<=b&&b<Cl(a.qM.g)))b=(-1);return b;}
function ARx(a,b,c,d){var e;e=b;while(e<c){d.data[e-b|0]=e;e=e+1|0;}}
function AAE(){B.call(this);this.tt=null;}
function ARs(a,b){var c;c=a.tt;Fp(c,EU(b,Lw(c)));}
function AAD(){B.call(this);this.wO=null;}
function AQL(a,b){var c;c=a.wO;I2(c,EU(b,AEK(c)));}
function AO$(){var a=this;B.call(a);a.i_=null;a.jS=null;a.p0=null;a.iQ=null;a.wz=null;a.iA=null;a.qc=null;a.dn=null;a.ja=null;a.tO=0.0;a.dz=0;a.x6=0;a.G7=0;a.gk=0;a.qP=null;a.qD=null;}
function AKz(a){var b=new AO$();AXy(b,a);return b;}
function AXy(a,b){a.i_=new BS;a.jS=new Y;a.p0=new Y;a.iQ=new BS;a.wz=HT(0);a.iA=K(Mg,4);a.qc=K(Le,0);a.qP=new BS;a.qD=new BS;a.gk=b;Me(a.iQ,1.0);}
function ABq(a){a.ja=BI(a.ja,null);}
function UM(a,b,c){var d,e;d=HW(a.dn,b);a.dz=d;e=a.dn;a.x6= -( -((d+e.er+e.eQ)/2.0)|0)|0;AIo(a,c);AIi(a.qP,a.dz,0);AIi(a.qD,a.dz,1);return a.dz;}
function AE0(a,b){var c;Me(a.iQ,b);a.tO=NG(a.iQ);c=Jd(a.iQ);a.G7=c;V(a.p0,0,c*2|0);}
function AIo(a,b){a.ja=BI(a.ja,Ef(b,1024,a.dz,a.gk));}
function Jw(a,b,c,d,e,f,g){var h,i;h=a.jS;if(h.b&&h.a){i=a.i_;if(i.bd!==0.0&&i.S!==0.0){Dd(b,d,e,h,i,c,f,g,a.gk);return;}}}
function Kp(a,b,c,d,e,f,g){if(Bz(c)&&CM(c)){Cb(a.i_,0.0,0.0,Bz(c),CM(c));Dd(b,d,e,c.el,a.i_,c,g,f,a.gk);return;}}
function AAC(){B.call(this);this.Gm=null;}
function AZb(a){var b,c;b=a.Gm;c=b.lQ?0:1;b.lQ=c;b=J();FG(F(b,C(318)),c);$rt_globals.console.info($rt_ustr(I(b)));}
function AAK(){B.call(this);this.Ch=null;}
function A1B(a){Z2(a.Ch);}
function AAI(){B.call(this);this.xZ=null;}
function A7r(a){QN(a.xZ);}
function AAH(){B.call(this);this.AM=null;}
function AUi(a){var b;b=a.AM;b.cD=b.cD?0:1;if(b.bq!==null&&b.x)NQ(b);G0(b);}
function AAG(){B.call(this);this.uh=null;}
function AVY(a){var b;b=a.uh;b.nR=b.nR?0:1;}
function AAB(){B.call(this);this.Eb=null;}
function A61(a){var b;b=a.Eb;b.sI=b.sI?0:1;}
function AAA(){B.call(this);this.GQ=null;}
function AQE(a){var b;b=a.GQ;b.oj=b.oj?0:1;}
function L1(){var a=this;Eq.call(a);a.dj=0;a.cj=null;a.du=0;a.HA=0.0;a.pu=0;}
function Gy(){var a=new L1();SM(a);return a;}
function A1U(a,b){return K(Ic,b);}
function SM(a){var b;b=AMf(16);a.dj=0;a.cj=K(Ic,b);a.HA=0.75;Wr(a);}
function AMf(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E8(a){if(a.dj>0){a.dj=0;AMC(a.cj,null);a.du=a.du+1|0;}}
function Wr(a){a.pu=a.cj.data.length*a.HA|0;}
function HH(a,b){return AEE(a,b)===null?0:1;}
function Pm(a){var b;b=new Ws;b.DS=a;return b;}
function B5(a,b){var c;c=AEE(a,b);if(c===null)return null;return c.c_;}
function AEE(a,b){var c,d;if(b===null)c=UG(a);else{d=b.h7();c=Tg(a,b,d&(a.cj.data.length-1|0),d);}return c;}
function Tg(a,b,c,d){var e;e=a.cj.data[c];while(e!==null&&!(e.n2==d&&AM4(b,e.c2))){e=e.dp;}return e;}
function UG(a){var b;b=a.cj.data[0];while(b!==null&&b.c2!==null){b=b.dp;}return b;}
function PY(a){return a.dj?0:1;}
function Oa(a){var b;if(a.i8===null){b=new Sc;b.kZ=a;a.i8=b;}return a.i8;}
function DL(a,b,c){var d,e,f,g;if(b===null){d=UG(a);if(d===null){a.du=a.du+1|0;d=Wk(a,null,0,0);e=a.dj+1|0;a.dj=e;if(e>a.pu)AF3(a);}}else{e=b.h7();f=e&(a.cj.data.length-1|0);d=Tg(a,b,f,e);if(d===null){a.du=a.du+1|0;d=Wk(a,b,f,e);e=a.dj+1|0;a.dj=e;if(e>a.pu)AF3(a);}}g=d.c_;d.c_=c;return g;}
function Wk(a,b,c,d){var e,f;e=new Ic;Y_(e,b,null);e.n2=d;f=a.cj.data;e.dp=f[c];f[c]=e;return e;}
function ANZ(a,b){var c,d,e,f,g,h,i,j;c=AMf(!b?1:b<<1);d=K(Ic,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cj.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.n2&b;j=h.dp;h.dp=e[i];e[i]=h;h=j;}f=f+1|0;}a.cj=d;Wr(a);}
function AF3(a){ANZ(a,a.cj.data.length);}
function Md(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.cj.data[0];while(e!==null){if(e.c2===null)break a;b=e.dp;d=e;e=b;}}else{f=Kt(b);g=a.cj.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.n2==f&&AM4(b,e.c2))){h=e.dp;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.dp=e.dp;else a.cj.data[c]=e.dp;a.du=a.du+1|0;a.dj=a.dj-1|0;}if(e===null)return null;return e.c_;}
function AM4(b,c){return b!==c&&!b.U(c)?0:1;}
function XB(){B.call(this);this.vU=null;}
function AUv(a,b){a.vU.oI(b);}
function XC(){B.call(this);this.uN=null;}
function A4l(a,b){var c;c=a.uN;Rc(c,b,c.ld,c.qy);}
function Xz(){B.call(this);this.xQ=null;}
function A4N(a,b){a.xQ.oI(b);}
function XA(){B.call(this);this.DO=null;}
function AXG(a,b){var c;c=a.DO;Rc(c,b,c.qy,c.ld);}
var Du=G(0);
var A$w=null;var A_K=null;var A$x=null;var A$u=null;var A$z=null;var A$y=null;var A$B=null;var A$A=null;var A$D=null;var A$C=null;var A$E=null;function FZ(){FZ=Bg(Du);AYC();}
function AYC(){A$w=Co(187);A_K=M(C(319));A$x=Co(55);A$u=Co(43);A$z=C7(33,66,131);A$y=C7(60,63,65);A$B=M(C(320));A$A=M(C(321));A$D=Ed(85,85,85,128);A$C=Ed(43,43,43,0);A$E=M(C(322));}
function ADE(){var a=this;B.call(a);a.JW=null;a.E6=null;a.JN=null;}
var ANv=G();
function FA(b,c){var d,e,f,g,h,i;d=c.bd;e=Ed(0,0,0,0);f=1.0-d;g=b.ba*f+c.ba*d;e.ba=g;h=b.bj*f+c.bj*d;e.bj=h;i=b.S*f+c.S*d;e.S=i;d=b.bd*f+c.bd*d;e.bd=d;e.gg=g*255.0+0.5|0;e.gi=h*255.0+0.5|0;e.gh=i*255.0+0.5|0;e.e0=d*255.0+0.5|0;e.e0=b.e0;e.bd=b.bd;return e;}
function AP3(){var a=this;B.call(a);a.e$=0;a.hz=null;a.tv=null;}
function ARO(a,b){var c=new AP3();AZ1(c,a,b);return c;}
function AZ1(a,b,c){a.hz=b;a.tv=c;}
function AIb(a){a.e$=0;}
function AHF(a){var b,c,d,e;b=a.e$;c=a.hz;d=c.data.length;if(b==d)a.hz=B_(c,d*2|0);c=a.hz.data;b=a.e$;e=c[b];if(e===null){e=a.tv.bK();c[b]=e;}a.e$=a.e$+1|0;return e;}
function GY(){var a=this;B.call(a);a.ip=0;a.zT=0;a.io=0;a.zU=0;a.wp=0;}
var So=G();
function AW7(a){return new GY;}
var Sq=G();
function AUB(a){return new GY;}
var FE=G();
function Or(){FE.call(this);this.KX=null;}
function AEu(){FE.call(this);this.KS=null;}
function ABW(){FE.call(this);this.JM=null;}
var C8=G(0);
var U1=G(0);
var Jt=G(0);
function NP(){var a=this;EF.call(a);a.b6=null;a.l=0;}
function BQ(){var a=new NP();AJT(a);return a;}
function A8$(a){var b=new NP();AIM(b,a);return b;}
function AJT(a){AIM(a,10);}
function AIM(a,b){a.b6=K(B,b);}
function NC(a,b){var c,d;c=a.b6.data.length;if(c<b){d=c>=1073741823?2147483647:Z(b,Z(c*2|0,5));a.b6=B_(a.b6,d);}}
function B1(a,b){K7(a,b);return a.b6.data[b];}
function APd(a){return a.l;}
function AKQ(a,b,c){var d,e;K7(a,b);d=a.b6.data;e=d[b];d[b]=c;return e;}
function Bp(a,b){var c,d;NC(a,a.l+1|0);c=a.b6.data;d=a.l;a.l=d+1|0;c[d]=b;a.bZ=a.bZ+1|0;return 1;}
function A2r(a,b,c){var d,e,f;Sn(a,b);NC(a,a.l+1|0);d=a.l;e=d;while(e>b){f=a.b6.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.b6.data[b]=c;a.l=d+1|0;a.bZ=a.bZ+1|0;}
function Hn(a,b){var c,d,e,f;K7(a,b);c=a.b6.data;d=c[b];e=a.l-1|0;a.l=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.bZ=a.bZ+1|0;return d;}
function ALS(a,b){var c;c=LM(a,b);if(c<0)return 0;Hn(a,c);return 1;}
function GP(a){RS(a.b6,0,a.l,null);a.l=0;a.bZ=a.bZ+1|0;}
function ANp(a,b,c){var d,e,f,g,h,i;Sn(a,b);if(c.dv())return 0;NC(a,a.l+c.cT()|0);d=c.cT();e=a.l;f=e-1|0;while(f>=b){g=a.b6.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.l=e+d|0;h=c.bu();i=0;while(i<d){g=a.b6.data;e=b+1|0;g[b]=h.bG();i=i+1|0;b=e;}a.bZ=a.bZ+1|0;return 1;}
function K7(a,b){var c;if(b>=0&&b<a.l)return;c=new BU;W(c);L(c);}
function Sn(a,b){var c;if(b>=0&&b<=a.l)return;c=new BU;W(c);L(c);}
function Gs(a,b){var c;c=0;while(c<a.l){b.e(a.b6.data[c]);c=c+1|0;}}
function APe(a){var b,c,d,e,f;b=a.l;if(!b)return C(23);c=b-1|0;d=new Km;IM(d,b*16|0);Bj(d,91);e=0;while(e<c){f=a.b6.data;By(F(d,f[e]!==a?f[e]:C(323)),C(32));e=e+1|0;}f=a.b6.data;F(d,f[c]!==a?f[c]:C(323));return I(Bj(d,93));}
function AFG(){var a=this;EH.call(a);a.i0=0;a.eS=null;a.hS=0;a.hu=0;}
function AMl(a,b){var c,d,e,f,g,h,i;Bs(b);c=AEO(a)+1|0;d=a.eS.data.length;if(c>=d){c=Z(d*2|0,((c*3|0)/2|0)+1|0);if(c<1)c=2147483647;e=K(B,c);d=0;f=a.hS;g=a.hu;if(f<=g){h=e.data;while(f<g){c=d+1|0;h[d]=a.eS.data[f];f=f+1|0;d=c;}}else{i=e.data;while(true){h=a.eS.data;if(f>=h.length)break;c=d+1|0;i[d]=h[f];f=f+1|0;d=c;}c=0;while(c<g){f=d+1|0;i[d]=h[c];c=c+1|0;d=f;}}a.hS=0;a.hu=d;a.eS=e;}e=a.eS.data;c=a.hu;e[c]=b;a.hu=AFQ(c,e.length);a.i0=a.i0+1|0;return 1;}
function AEO(a){var b,c;b=a.hu;c=a.hS;return b>=c?b-c|0:(a.eS.data.length-c|0)+b|0;}
function AFQ(b,c){b=b+1|0;if(b==c)b=0;return b;}
function AK5(a){var b;b=new ACf;b.Fq=a;b.xT=a.i0;b.ry=a.hS;b.E5=(-1);b.n3=AEO(a);return b;}
function Dx(){var a=this;B.call(a);a.c$=0;a.pZ=null;}
function HT(a){var b=new Dx();AUy(b,a);return b;}
function AUy(a,b){a.c$=b;}
function ATg(a){var b;a:{switch(a.c$){case 0:break;case 1:b=C(324);break a;case 2:b=C(325);break a;case 3:b=C(326);break a;default:b=null;break a;}b=C(327);}return b;}
function ACT(b){var c;a:{b:{if(b!==null){b=b.data;if(b.length>1)break b;if(b[0]!==null&&b[0].c$)break b;}c=0;break a;}c=1;}return c;}
function Mg(){var a=this;B.call(a);a.qO=null;a.H1=null;a.rG=0.0;a.If=0;a.IF=0;a.wW=0;a.Jk=0;a.er=0.0;a.eQ=0.0;a.H7=0.0;a.Gk=0.0;a.Ib=0;a.tQ=null;}
function Mv(a,b){return Of(a,b)+a.wW|0;}
function Of(a,b){return (b-Fk(a)|0)/2|0;}
function Fk(a){return DG(a.er+a.eQ);}
function HW(a,b){return DG((a.er+a.eQ)*b);}
function Le(){var a=this;B.call(a);a.eg=null;a.hc=null;a.el=null;a.lH=0;}
function V8(a){var b,c;b=a.hc;if(b!==null){c=a.eg;c.l_=c.l_-1|0;c.gN=c.gN-a.lH|0;c.eJ.deleteTexture(b);a.hc=null;a.lH=0;}}
function Bz(a){return a.el.b;}
function CM(a){return a.el.a;}
function AMv(b,c,d){var e;a:{switch(d){case 32856:break;case 33321:e=1;break a;default:e=0;break a;}e=4;}return U(U(b,c),e);}
function VD(a,b,c,d){var e;e=a.el;e.b=b;e.a=c;PK(a);a.eg.eJ.texStorage2D(3553,1,d,b,c);e=a.eg.eJ;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function PK(a){var b,c;b=a.eg.eJ;c=a.hc;b.bindTexture(3553,c);}
function Nw(a,b){var c,d,e,f,g,h,i;a:{c=b.mo;d=b.nH;switch(b.p7.d$){case 0:e=33321;break a;case 1:e=32856;break a;default:}b=new Fh;W(b);L(b);}b:{ZZ(a,c,d,e);f=a.eg.eJ;g=b.mo;h=b.nH;switch(b.p7.d$){case 0:e=6403;break b;case 1:e=6408;break b;default:}b=new Fh;W(b);L(b);}i=AGY(b.k_);f.texSubImage2D(3553,0,0,0,g,h,e,5121,i);}
function Da(a,b){ZZ(a,b.qg,b.pB,32856);ABU(a,b,0,0);}
function ZZ(a,b,c,d){var e,f;e=a.el;if(e.b&&e.a){if(ADO(e,b,c))PK(a);else{e=a.eg;e.gN=e.gN-a.lH|0;e=e.eJ;f=a.hc;e.deleteTexture(f);a.hc=a.eg.eJ.createTexture();VD(a,b,c,d);e=a.el;b=AMv(e.b,e.a,d);a.lH=b;e=a.eg;e.gN=e.gN+b|0;}}else{VD(a,b,c,d);e=a.el;b=AMv(e.b,e.a,d);a.lH=b;e=a.eg;e.gN=e.gN+b|0;}}
function ACG(a,b,c,d){PK(a);ABU(a,b,c,d);}
function ABU(a,b,c,d){var e;e=a.eg.eJ;b=b.kN;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var ABO=G(0);
var A_S=0.0;function Me(b,c){Cb(b,1.0471975803375244,0.75,1.25,0.375);QY(b,c,b);}
function AIi(b,c,d){Cb(b,2.5132741928100586,0.5,!d?0.25:0.4375,0.375);Ut(b,c*0.25,b,0.5);}
function QY(b,c,d){Ut(b,c,d,1.25);}
function Ut(b,c,d,e){var f;if(c<0.5)c=0.25;f=c>=4.0?0.5:JR(b.bd,JR(c,A_S));Cb(d,b.ba/c,b.bj*c,AX7(b.S*c,e),f);}
function NG(b){var c;c=b.bj;return c-(c|0)>=0.25?0.0:0.5;}
function Jd(b){return b.bj+b.S+1.5|0;}
function AIU(){A_S=N7(N7(0.5,0.375),4.0);}
function APQ(){var a=this;B.call(a);a.bY=null;a.bO=null;a.d4=0;}
function ARu(){var a=new APQ();A66(a);return a;}
function A0A(a){var b=new APQ();AVe(b,a);return b;}
function A66(a){a.bY=new Hp;a.bO=new Hp;}
function AVe(a,b){a.bY=new Hp;a.bO=new Hp;Ke(a,b);}
function Ke(a,b){AFP(a.bY,b.bY);AFP(a.bO,b.bO);a.d4=b.d4;}
function Ph(a,b,c){Cc(a.bO,b,c);if(!a.d4)Cc(a.bY,b,c);}
function SB(a,b){Cc(a.bY,b,0);Cc(a.bO,b+1|0,0);}
function ED(a){if(Uf(a.bY,a.bO)>0)return a.bO;return a.bY;}
function Gd(a){if(Uf(a.bY,a.bO)<0)return a.bO;return a.bY;}
function DI(a){var b,c;b=a.bY;c=a.bO;return (b.L==c.L&&b.Z==c.Z?1:0)?0:1;}
function Wc(){var a=this;B.call(a);a.ge=null;a.gc=0;a.ej=0;}
function AGn(a,b){var c,d,e;c=a.gc;d=a.ge;if(c==d.data.length)a.ge=B_(d,c+16|0);d=a.ge.data;e=a.gc;a.gc=e+1|0;d[e]=b;}
function ADD(a){var b,c,d,e;b=a.gc;if(b?0:1)return;c=a.ej;d=b-1|0;if(c==d)a.ej=c-1|0;e=a.ge.data;a.gc=d;e[d]=null;}
var Ha=G();
function ADs(){var a=this;Ha.call(a);a.u=null;a.dt=null;a.fO=null;a.en=null;a.ee=null;a.nA=null;a.R=0;a.pJ=0;a.E2=0.0;a.HE=null;a.BK=null;a.hw=null;}
function B3(a,b){return a.u.data[b];}
function Cl(a){return a.u.data.length;}
function AGb(a){return Ls(a,0,a.u.data.length);}
function GG(a,b){return a.u.data[b].F;}
function Ml(a,b){var c,d,e,f,g,h,i,j;c=b+1|0;if(c>=Cl(a))return;d=a.u.data;e=d[b];f=d[c];g=Ei(MT(e.o,f.o));h=a.u;i=h.data.length;if(b<i&&b>=0){j=K(C5,i-1|0);d=j.data;AC5(h,b,j);a.u=j;d[b]=g;return;}e=new Bt;W(e);L(e);}
function AKx(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=c.data;e=d.length;if(!e)return null;f=b?0:1;g=J();if(!f)Bj(g,10);h=0;i=e-1|0;while(h<i){By(By(g,Ek(d[h])),C(272));h=h+1|0;}By(g,Ek(d[i]));j=I(g);i=f?b:b-1|0;k=f?0:(B3(a,b-1|0)).F;l=AHl(i,k,0,j);Iq(a,l);d=a.u;m=K(C5,d.data.length+e|0);BE(d,0,m,0,b);BE(c,0,m,b,e);c=a.u;d=c.data;BE(c,b,m,b+e|0,d.length-b|0);a.u=m;F8(a,l,0);return l;}
function T_(a,b,c){var d,e,f,g;d=a.u;e=d.data.length;if(b<e&&b>=0){if(c<=e&&c>=0){f=K(C5,(e-c|0)+b|0);AJ4(d,b,c,f);a.u=f;return;}g=new Bt;W(g);L(g);}g=new Bt;W(g);L(g);}
function QH(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.u.data;if(!(c<d[b].F?0:1)){d=(B3(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<N(h.t)){e=Be(h.t,g);break a;}g=g-N(h.t)|0;f=f+1|0;}e=0;}Gc(a,b,c,1,Dy(e));h=a.u.data[b];d=h.o;i=0;b:{while(true){j=d.data;e=j.length;if(i>=e)break b;f=N(j[i].t);if(c<f)break;c=c-f|0;i=i+1|0;}}if(N(j[i].t)==1)h.o=AC5(d,i,K(Cw,e-1|0));else{k=j[i];if(c<=0)l=Ep(C0(k.t,1),k.b_,k.bL);else if(c>=(N(k.t)-1|0)){l=new Cw;m=k.t;AE6(l,Cv(m,0,N(m)-1|0),k.b_,k.bL);}else{d=B2(N(k.t)-1
|0);n=d.data;b=0;while(b<c){n[b]=Be(k.t,b);b=b+1|0;}b=n.length;while(c<b){m=k.t;e=c+1|0;n[c]=Be(m,e);c=e;}l=Ep(EC(d),k.b_,k.bL);}j[i]=l;}h.F=h.F-1|0;EJ(h);}else if(b!=(d.length-1|0)){Gc(a,b,c,1,C(272));Ml(a,b);}Fy(a);}
function AIy(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AD0(a.u.data[b],c,e[0]);return;}g=f-1|0;d=(I$(a.u.data[b],c)).data;h=d[0];i=d[1];d=a.u;j=B_(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.o.data;f=l.length;c=!f?0:N(l[f-1|0].t);No(h,h.o.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!C_(e[m])?N0(e[m]):Ei(K(Cw,0));d[b+m|0]=k;m=m+1|0;}No(i,0,0,e[g]);d[b+g|0]=i;a.u=j;}
function XO(a,b){var c,d,e,f,g,h,i,j,k;c=ED(b);d=Gd(b);e=c.L;if(e==d.L)return Cv(Ek(a.u.data[e]),c.Z,d.Z);f=J();b=a.u.data[c.L];e=c.Z;Bj(By(f,C0(Ek(b),e)),10);g=a.u;h=g.data;e=c.L+1|0;i=d.L;j=h.length;if(e>=0&&i>=e&&i<=j){k=AUV(g,e,i);b=new AGN;b.tV=f;while(true){c=new AA$;c.Hn=b;if(!AML(k,c))break;}b=a.u.data[d.L];i=d.Z;By(f,Cv(Ek(b),0,i));return I(f);}b=new PE;W(b);L(b);}
function QQ(a,b,c){var d;AG5(a,b);d=ED(b);Gc(a,d.L,d.Z,1,c);Fy(a);}
function AG5(a,b){var c,d,e,f;c=ED(b);d=Gd(b);e=c.L;if(e==d.L)H1(a.u.data[e],c.Z,d.Z);else{b=a.u.data[e];H1(b,c.Z,b.F);f=d.Z;if(f)H1(a.u.data[d.L],0,f);T_(a,c.L+1|0,d.L);Ml(a,c.L);}}
function Jy(a,b,c){return D2(b,GN(B3(a,b),c));}
function KK(a,b){var c,d,e;c=0;d=0;while(true){e=a.u.data.length;if(c>=e)break;if((d+(B3(a,c)).F|0)>=b)return BR(c,b-d|0);d=d+((B3(a,c)).F+1|0)|0;c=c+1|0;}return BR(e,0);}
function GA(a,b){return Ls(a,0,b);}
function Ls(a,b,c){var d,e;d=0;e=a.u.data.length;while(b<c){d=d+GG(a,b)|0;b=b+1|0;if(b>=e)continue;d=d+1|0;}return d;}
function MP(a,b){return PH(B3(a,b.bp),b.bz);}
function DW(a){return J1(a,0,a.u.data.length);}
function J1(a,b,c){var d,e,f,g,h,i,j,k;d=B2(Ls(a,b,c));e=d.data;f=0;while(b<c){g=a.u.data[b].o.data;h=g.length;i=0;while(i<h){j=g[i].t;SX(j,0,N(j),d,f);f=f+N(j)|0;i=i+1|0;}b=b+1|0;if(b>=Cl(a))continue;k=f+1|0;e[f]=10;f=k;}return d;}
function Gc(a,b,c,d,e){var f,g;f=AHl(b,c,d,e);a.R=a.R+1|0;e=a.hw;g=K(Hj,1);g.data[0]=f;JK(e,a,g);Iq(a,f);F8(a,f,0);}
function Iq(a,b){var c;c=GA(a,b.c0)+b.e8|0;if(!b.iV){AAZ(a.dt,c,N(b.dN));Wl(a.fO,c,N(b.dN));}else{X8(a.dt,c,N(b.dN));Q6(a.fO,c,N(b.dN));}}
function Mq(a,b,c){var d,e,f;a.R=a.R+1|0;if(c){b=B_(b,b.data.length);d=0;while(true){e=b.data.length;if(d>=(e/2|0))break;AEk(b,d,(e-d|0)-1|0);d=d+1|0;}b=b;}b=b.data;f=b[0];AEf(a,f,c);d=1;while(d<b.length){AEf(a,b[d],c);d=d+1|0;}Fy(a);return f;}
function AEf(a,b,c){var d,e,f;d=AEH(b.dN);if(b.iV^c){AIy(a,b.c0,b.e8,d);AAZ(a.dt,GA(a,b.c0)+b.e8|0,N(b.dN));Wl(a.fO,GA(a,b.c0)+b.e8|0,N(b.dN));}else{d=d.data;e=ARu();Cc(e.bY,b.c0,b.e8);f=d.length;if(f==1)Cc(e.bO,b.c0,b.e8+N(d[0])|0);else Cc(e.bO,(b.c0+f|0)-1|0,N(d[f-1|0]));AG5(a,e);X8(a.dt,GA(a,b.c0)+b.e8|0,N(b.dN));Q6(a.fO,GA(a,b.c0)+b.e8|0,N(b.dN));}F8(a,b,c?0:1);}
function AFg(a){return a.pJ==a.R?0:1;}
function Lf(a){a.pJ=a.R;}
function Oc(a){var b,c,d;a.nA=BC(a.u.data.length+1|0);b=0;while(b<a.u.data.length){c=a.nA.data;d=b+1|0;c[d]=(c[b]+(B3(a,b)).F|0)+1|0;b=d;}}
function YV(a,b){var c,d,e,f,g,h;c=a.nA;if(c===null){d=0;e=0;a:{while(true){c=a.u.data;f=c.length;if(e>=f)break;g=c[e].F;if(b<=(d+g|0)){h=D2(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=D2(f,0);}return h;}d=DB(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=D2(d,b-(d<0?0:a.nA.data[d])|0);if(h.bz>=(B3(a,h.bp)).F){h.bp=h.bp+1|0;h.bz=0;}return h;}
function F8(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.HE;if(d!==null){e=HP(c);d=d.FA;c=e.kF;d=d.eu;if(d!==null){e=d.l9;if(e!==null)e.eA(d,b,HP(c));e=d.dc;if(e!==null){f=e.cB;g=!e.f2?f.b$:f.cu;h=b.c0;i=KH(b);j=b.iV^c;k=0;while(true){l=g.data;if(k>=l.length)break;if(j){if(h<=l[k]){m=Bc(i,l[k]-h|0);if(!c)b.nQ=m;l[k]=l[k]-m|0;}}else if(h<l[k]){a:{if(c){m=b.nQ;if(m!=(-1))break a;}m=i;}l[k]=l[k]+m|0;}k=k+1|0;}j=1;while(true){l=f.cu;g=l.data;if(j>=g.length)break;c=g[j];h=j-1|0;if(c!=g[h]){g=f.b$.data;if(g[j]!=g[h]){j=j+1
|0;continue;}}f.cu=Kg(l,h);f.b$=Kg(f.b$,h);}}Dt(DF(d));}}}
function Fy(a){var b,c;b=a.BK;if(b!==null){b=b.tE;c=b.eu;if(c!==null)Si(c);b=b.JX;if(b!==null)b.d();}}
function TF(){B.call(this);this.FA=null;}
function TG(){B.call(this);this.tE=null;}
function Hp(){var a=this;B.call(a);a.L=0;a.Z=0;}
function Cc(a,b,c){a.L=b;a.Z=c;}
function AFP(a,b){a.L=b.L;a.Z=b.Z;}
function Uf(a,b){var c;c=BG(a.L,b.L);if(c)return c;return BG(a.Z,b.Z);}
function OS(){var a=this;B.call(a);a.se=null;a.rg=null;}
function MY(a){return a.se.bp;}
function Lm(a){return a.se.bz;}
function C5(){var a=this;B.call(a);a.o=null;a.F=0;a.hE=null;a.fF=null;a.fc=null;a.jT=null;a.iy=0;a.kV=0;a.le=0;}
var A_T=0;var A_U=0;var A_O=0;function N0(a){var b=new C5();APh(b,a);return b;}
function Ei(a){var b=new C5();ACx(b,a);return b;}
function APh(a,b){var c;c=K(Cw,1);c.data[0]=ANO(b);ACx(a,c);}
function ACx(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+N(c[f].t)|0;f=f+1|0;}a.F=d;EJ(a);}
function HB(a){return a.o.data.length;}
function Ib(a,b){return a.o.data[b];}
function GN(a,b){var c;c=KN(a,b);return c<=0?0:a.fc.data[c-1|0];}
function KN(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.fc!==null&&!a.le)){Yy(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+N(a.o.data[d].t)|0;a.fc.data[d]=e;d=d+1|0;}a.le=0;}d=AFd(a.fc,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function PH(a,b){var c;c=a.o.data;if(!c.length)return null;return c[KN(a,b)];}
function H1(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.F){a.o=K(Cw,0);EJ(a);a.F=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=N(g[e].t);i=N(a.o.data[f].t);j=BG(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==N(k.t)?1:0){g=a.o;a.o=AC5(g,e,K(Cw,g.data.length-1|0));a.F=a.F-d|0;EJ(a);return;}a.o.data[e]=Ep(FK(Cv(k.t,0,b),C0(k.t,c)),k.b_,k.bL);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b
!=N(l.t))a.o.data[e]=Ep(Cv(l.t,0,b),l.b_,l.bL);e=e+1|0;}if(c==N(m.t))f=f+1|0;else if(c)a.o.data[f]=Ep(C0(m.t,c),m.b_,m.bL);g=a.o;a.o=AJ4(g,e,f,K(Cw,(g.data.length-f|0)+e|0));}a.F=a.F-d|0;EJ(a);}
function I$(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return BA(C5,[Ei(K(Cw,0)),a]);if(b>=a.F)return BA(C5,[a,Ei(K(Cw,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=N(e[d].t);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return BA(C5,[Ei(Ma(c,0,K(Cw,d))),Ei(Ma(c,d,K(Cw,f-d|0)))]);h=e[d];e=Ma(c,0,K(Cw,d+1|0));i=e.data;j=Ma(c,d,K(Cw,f-d|0));c=j.data;i[d]=Ep(Cv(h.t,0,b),h.b_,h.bL);c[0]=Ep(C0(h.t,b),h.b_,h.bL);return BA(C5,[Ei(e),Ei(j)]);}
function AD0(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=N(f[d].t);if(b<=g)break;b=b-g|0;d=e;}}No(a,d,b,c);}
function No(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(C_(d))return;e=a.o;f=e.data;g=f.length;if(!g){h=K(Cw,1);h.data[0]=ANO(d);a.o=h;}else if(!b&&!c){h=K(Cw,g+1|0);f=h.data;BE(e,0,h,1,g);f[0]=ANO(d);a.o=h;}else{i=f[b];if(c<=0)j=Ep(FK(d,i.t),i.b_,i.bL);else if(c>=N(i.t))j=Ep(FK(i.t,d),i.b_,i.bL);else{k=N(d);l=k+c|0;m=N(i.t)-c|0;e=B2(N(i.t)+k|0);h=e.data;n=0;while(n<c){h[n]=Be(i.t,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Be(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Be(i.t,g+c|0);g=g+1|0;}j=Ep(EC(e),i.b_,i.bL);}f[b]=j;}a.F
=a.F+N(d)|0;EJ(a);}
function Q7(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<JC(f)){if(Be(f.t,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function OD(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.hE;if(!(e!==null&&e.data.length>=d)){a.hE=AIK(d);a.fF=BC(d);a.iy=1;}Yy(a);if(!a.iy)A_U=A_U+1|0;else{f=0;g=0.0;A_T=A_T+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+N(j.t)|0;a.fc.data[h]=f;Cm(b,i[K_(j)]);g=g+D5(b,j.t);a.hE.data[h]=g;a.fF.data[h]=g+0.5|0;h=h+1|0;}a.F=f;a.iy=0;a.le=0;}}
function Yy(a){var b;b=a.fc;if(!(b!==null&&b.data.length>=a.o.data.length)){a.fc=BC(a.o.data.length);a.le=1;}}
function VO(a){a.iy=1;a.jT=null;}
function EJ(a){VO(a);a.kV=1;a.le=1;}
function ADS(a,b,c,d){var e,f,g,h,i,j,k;if(a.jT===null)a.jT=K($rt_arraycls($rt_intcls()),a.o.data.length);e=a.jT.data[d];if(e===null){e=c.data;f=a.o.data[d];Cm(b,e[K_(f)]);f=f.t;e=BC(N(f)-1|0);c=H7(f);g=!d?0.0:a.hE.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BH;k=i+1|0;P8(f,c,0,k);h[i]=g+D5(b,f)+0.5|0;i=k;}a.jT.data[d]=e;}return e;}
function LX(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.iy&&a.fF!==null))OD(a,c,d);if(b>=a.F)return a.fF.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+N(g[f].t)|0;i=BG(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.fF.data[f];}return (ADS(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Ks(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.fF.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hh(a,b){var c;if(b>=a.F)return b+1|0;c=KN(a,b);return a.fc.data[c];}
function Ek(a){var b,c,d,e;b=new Km;IM(b,a.F);c=a.o.data;d=c.length;e=0;while(e<d){By(b,c[e].t);e=e+1|0;}return I(b);}
function A4i(a){var b,c;b=a.o;c=b.data;return c.length!=1?AJy(b):AJV(c[0]);}
function AJ1(){A_O=0;}
function ABz(){var a=this;B.call(a);a.gu=null;a.fW=null;}
function A0x(a,b){var c=new ABz();A1J(c,a,b);return c;}
function A1J(a,b,c){a.gu=b;a.fW=c;}
function Wl(a,b,c){var d;d=a.gu;if(d===null)return;ACr(a,d,b,c);}
function Q6(a,b,c){var d;d=a.gu;if(d===null)return;AFk(a,d,b,c);}
function ACr(a,b,c,d){var e,f,g,h;e=b.fI.bu();while(e.b0()){Y2(a,e.bG(),c,d);}e=b.gw.bu();while(e.b0()){f=e.bG();g=new VK;g.DH=a;E4(a,g,f,c,d);}h=b.jh.bu();while(h.b0()){e=h.bG();Y2(a,e.nq,c,d);f=new VL;f.Br=a;E4(a,f,e.mN,c,d);}b=b.c1.bu();while(b.b0()){ACr(a,b.bG(),c,d);}}
function Y2(a,b,c,d){Lj(a,b.eP,c,d);}
function E4(a,b,c,d,e){var f,g;a:{if(c instanceof HX){f=c.gn;g=new Zd;g.un=a;g.uk=b;g.uj=d;g.ul=e;Gs(f,g);}else{if(!(c instanceof KF)){if(!(c instanceof JS))break a;f=c;E4(a,b,f.jx,d,e);E4(a,b,f.iZ,d,e);return;}g=c.jN;f=new Ze;f.Hz=a;f.Hy=b;f.Hx=d;f.Hw=e;Gs(g,f);}}if(c!==null){c=c.fk;if(c!==null)b.eA(c,Ck(d),Ck(e));}}
function Lj(a,b,c,d){var e;e=b.dP;if(e>=c)b.dP=e+d|0;}
function AFk(a,b,c,d){var e,f,g,h;e=b.fI.bu();while(e.b0()){Kn(a,(e.bG()).eP,c,d);}e=b.gw.bu();while(e.b0()){f=e.bG();g=new UL;g.ze=a;E4(a,g,f,c,d);}h=b.jh.bu();while(h.b0()){e=h.bG();Kn(a,e.nq.eP,c,d);f=new UN;f.FC=a;E4(a,f,e.mN,c,d);}b.fI.st(new UK);b.gw.st(new UJ);b=b.c1.bu();while(b.b0()){AFk(a,b.bG(),c,d);}}
function Kn(a,b,c,d){var e;e=b.dP;if(e>=c)b.dP=e-d|0;}
function Cw(){var a=this;B.call(a);a.t=null;a.b_=0;a.bL=0;}
function ANO(a){var b=new Cw();A08(b,a);return b;}
function Ep(a,b,c){var d=new Cw();AE6(d,a,b,c);return d;}
function A08(a,b){AE6(a,b,0,0);}
function AE6(a,b,c,d){a.t=b;a.b_=c;a.bL=d;}
function K_(a){return a.bL&3;}
function JT(b,c){return (!b?0:2)+(!c?0:1)|0;}
function JC(a){return N(a.t);}
function AJV(a){var b,c,d,e;b=A7d(a.t);c=a.bL;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))By(b,C(328));if(d)By(b,C(329));if(e)By(b,C(330));return I(b);}
var OQ=G(L1);
function ADF(){var a=this;B.call(a);a.dq=null;a.gV=0;}
var A_V=null;function A6i(a){var b=new ADF();AKm(b,a);return b;}
function AWx(a){var b=new ADF();X5(b,a);return b;}
function AKm(a,b){X5(a,AXM(b,null,null));}
function X5(a,b){a.gV=0;a.dq=b;}
function Su(a,b){var c;if(b.eW)return b;b=B4(b.bf);while(true){if(!B6(b))return null;c=Su(a,B7(b));if(c!==null)break;}return c;}
function AAw(a,b,c){var d,e,f,g;d=OG(a,a.dq,b);if(d===null)return;b=c.cv;e=b===null?A_W:b.c1;f=c.bf;c=a.dq;if(d===c){if(c.cv===null)c.cv=b;b=new ADZ;b.DD=a;Gs(f,b);b=new ADY;b.za=a;e.eT(b);b=a.dq;b.bf=f;c=b.cv;if(c!==null)c.c1=e;b.eW=0;return;}if(!F6(f)){c=d.iR;if(c!==null){b=new AAX;b.uq=c;Gs(f,b);g=LM(c.bf,d);if(g==(-1))FU(c.bf,f);else{Hn(c.bf,g);ANp(c.bf,g,f);}}}b=d.cv;if(b!==null){b=b.iL;c=new UX;c.we=b;e.eT(c);g=LM(b.c1,d.cv);if(g==(-1))FU(b.c1,e);else{b.c1.os(g);b.c1.yy(g,e);}}}
function OG(a,b,c){var d,e,f,g;d=b.b5;if(d.cd==c.cd&&d.b8==c.b8?1:0){d=B4(b.bf);while(B6(d)){e=OG(a,B7(d),c);if(e!==null)return e;}return b;}b=B4(b.bf);while(true){if(!B6(b))return null;d=B7(b);f=c.cd;g=c.b8;e=d.b5;if(e.cd<=f&&g<=e.b8?1:0){e=OG(a,d,c);if(e!==null)break;}}return e;}
function AET(a,b,c){Bp(c,b.b5);b=B4(b.bf);while(B6(b)){AET(a,B7(b),c);}}
function AAZ(a,b,c){var d;d=a.dq;if(d.bf.l){a.gV=0;L5(a,d,b,c);}else{Gp(d,c);a.dq.eW=1;}}
function L5(a,b,c,d){var e;if(Dl(b)<c)return;a:{if(Dc(b)>c){MI(b,d);Gp(b,d);b=B4(b.bf);while(B6(b)){L5(a,B7(b),c,d);}}else{if(!NB(b,c)){if(a.gV)break a;if(Dl(b)!=c)break a;}Gp(b,d);if(Dc(b)==c&&a.gV)MI(b,d);e=B4(b.bf);while(B6(e)){L5(a,B7(e),c,d);}if(!a.gV){b.eW=1;a.gV=1;}}}}
function X8(a,b,c){a.gV=0;NE(a,a.dq,b,c);}
function NE(a,b,c,d){var e,f,g,h;if(Dl(b)<c)return;e=Dc(b);f=c+d|0;if(e>f){e= -d|0;MI(b,e);Gp(b,e);g=B4(b.bf);while(B6(g)){NE(a,B7(g),c,d);}b.bf=ZS(a,b.bf);}else{g=b.b5;if(c<=g.cd&&g.b8<=f?1:0){if(b===a.dq){MX(b,0);ND(b,0);g=b.cv;if(g!==null)g.c1.i2();}else{MX(b,(-1));ND(b,(-1));g=b.cv;if(g!==null){AId(g);b.cv=null;}}GP(b.bf);b.eW=1;a.gV=1;}else{h=NB(b,c);f=NB(b,f);e=b.bf.l?0:1;if(h&&f)Gp(b, -d|0);else if(h)ND(b,c);else{if(!f)return;MX(b,c);Gp(b, -d|0);}a:{if(!(!e&&!(!b.bf.l?1:AAW(b)!=3?0:Dc(B1(b.bf,0))<=c?
0:1)))b.eW=1;else{g=B4(b.bf);while(true){if(!B6(g))break a;NE(a,B7(g),c,d);}}}b.bf=ZS(a,b.bf);}}}
function ZS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BQ();d=null;e=A_V;f=b.b6;g=b.l;if(e===null)e=A92;h=K(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}LE(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.bZ=b.bZ+1|0;b=B4(b);while(B6(b)){m=B7(b);if(Dc(m)==Dl(m))continue;if(!m.eW){if(d!==null){Bp(c,d);d=null;}Bp(c,m);}else if(d===null)d=m;else{n=AXM(IV(Bc(Dc(d),Dc(m)),Z(Dl(d),Dl(m)),d.b5.gY),d.iR,d.cv);n.eW=1;d=m.cv;if(d===null)d=n;else{AId(d);d=n;}}}if(d!==null)Bp(c,d);return c;}
function AHx(a,b,c,d){var e,f,g,h,i,j,k,l;if((Dl(c)-Dc(c)|0)<43)e=Cv(d,Dc(c),Dl(c));else{e=Cv(d,Dc(c),Dc(c)+20|0);f=Cv(d,Dl(c)-20|0,Dl(c));g=J();F(F(F(g,e),C(264)),f);e=I(g);}h=J();i=N(e)-N(C(272))|0;j=0;while(j<=i){k=0;a:{while(true){if(k>=N(C(272))){F(h,C(331));j=j+(N(C(272))-1|0)|0;break a;}if(Be(e,j+k|0)!=Be(C(272),k))break;k=k+1|0;}Bj(h,Be(e,j));}j=j+1|0;}F(h,C0(e,j));h=I(h);e=X();f=BL(c);l=J();F(Bj(F(Bj(P(l,b),32),f),9),h);T(e,I(l));c=B4(c.bf);i=b+1|0;while(B6(c)){AHx(a,i,B7(c),d);}}
function AL9(){A_V=new RP;}
function AQa(){var a=this;B.call(a);a.cd=0;a.b8=0;a.gY=0;}
function IV(a,b,c){var d=new AQa();A05(d,a,b,c);return d;}
function A05(a,b,c,d){a.cd=b;a.b8=c;a.gY=d;}
function AWZ(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return a.cd==c.cd&&a.b8==c.b8&&a.gY==c.gY?1:0;}return 0;}
function AM1(a){var b,c,d,e;b=a.cd;c=a.b8;d=a.gY;e=J();Bj(P(F(P(F(P(Bj(e,40),b),C(32)),c),C(32)),d),41);return I(e);}
function A0k(a,b){var c;b=b;c=BG(a.cd,b.cd);if(!c)c=BG(b.b8,a.b8);return c;}
var RP=G();
function A0b(a,b,c){var d;b=b;c=c;b=b.b5;c=c.b5;d=BG(b.cd,c.cd);if(!d)d=BG(c.b8,b.b8);return d;}
function ACA(){var a=this;B.call(a);a.b5=null;a.iR=null;a.bf=null;a.cv=null;a.eW=0;}
function AXM(a,b,c){var d=new ACA();ALE(d,a,b,c);return d;}
function ALE(a,b,c,d){a.eW=0;a.b5=b;a.iR=c;a.bf=BQ();a.cv=d;}
function AMn(b){return ACL(b,null);}
function ACL(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=IV(d,e,f);j=new ACA;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ALE(j,i,null,l);m=0;while(m<g){l=ACL(b,c);l.iR=j;Bp(j.bf,l);m=m+1|0;}return j;}
function AI5(b,c,d){var e,f,g,h,i;a:{e=b.b5;f=b.bf;g=e.cd;h=e.b8;i=e.gY;Br(c,g);Ga(c,h,i);Br(c,f.l);if(d!==null){e=b.cv;if(e!==null&&AGQ(d,e)){g=(PM(d,b.cv)).O;break a;}}g=(-1);}Br(c,g);b=B4(f);while(B6(b)){AI5(B7(b),c,d);}}
function Dc(a){return a.b5.cd;}
function Dl(a){return a.b5.b8;}
function AAW(a){return a.b5.gY;}
function MX(a,b){a.b5.cd=b;}
function ND(a,b){a.b5.b8=b;}
function MI(a,b){var c;c=a.b5;c.cd=c.cd+b|0;}
function Gp(a,b){var c;c=a.b5;c.b8=c.b8+b|0;}
function NB(a,b){return Dc(a)<=b&&b<Dl(a)?1:0;}
function AQ4(a){var b,c,d;b=AM1(a.b5);c=a.eW;d=J();FG(F(F(d,b),C(32)),c);return I(d);}
function ARL(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return BN(a.b5,c.b5)&&BN(a.bf,c.bf)?1:0;}return 0;}
var Hy=G(0);
function G8(){var a=this;B.call(a);a.c2=null;a.c_=null;}
function A_X(a,b){var c=new G8();Y_(c,a,b);return c;}
function Y_(a,b,c){a.c2=b;a.c_=c;}
function A0G(a,b){var c,d;if(a===b)return 1;if(!Do(b,Hy))return 0;a:{b:{c:{d:{c=b;b=a.c2;if(b!==null){if(!b.U(c.lB()))break c;else break d;}if(c.lB()!==null)break c;}b=a.c_;if(b!==null){if(!b.U(c.kt()))break c;else break b;}if(c.kt()===null)break b;}d=0;break a;}d=1;}return d;}
function ATx(a){return a.c2;}
function AYi(a){return a.c_;}
function AR_(a){var b,c,d;b=a.c2;c=a.c_;d=J();F(Bj(F(d,b),61),c);return I(d);}
function Ic(){var a=this;G8.call(a);a.n2=0;a.dp=null;}
var AJO=G();
function AHr(){var a=this;B.call(a);a.yE=null;a.FX=null;a.Fd=null;}
var QB=G();
function AYm(a,b){return b.text();}
function QD(){var a=this;B.call(a);a.xg=null;a.xf=null;}
function AXQ(a,b){var c,d,e,f;c=a.xg;d=a.xf;e=b.length;f=new Ra;f.FQ=b;c.e(ASL((APv(e,f)).jY,AFX(d)));}
var QC=G();
function AZO(a,b){AMe(b);}
function AEM(){var a=this;B.call(a);a.cB=null;a.f2=0;}
function QG(a){return !a.f2?a.cB.b$:a.cB.cu;}
function V9(a,b){return !a.f2?AGd(a.cB,b):ZY(a.cB,b);}
function N1(a){return (!a.f2?a.cB.ef:a.cB.dO)==(-1)?0:1;}
function X4(a,b){var c;if(!a.f2){c=a.cB;if(!AGd(c,b)){c.dO=b;AFy(c);}}else{c=a.cB;if(!ZY(c,b)){c.ef=b;AFy(c);}}a.cB.kH=(-1);}
var Di=G(Bt);
function Fw(){var a=this;B.call(a);a.W=0;a.bB=0;a.V=0;a.bA=0;a.ca=0;}
function J$(a,b,c,d,e){var f=new Fw();APG(f,a,b,c,d,e);return f;}
function APG(a,b,c,d,e,f){a.W=b;a.bB=c;a.V=d;a.bA=e;a.ca=f;}
function D8(a){return a.W+a.bB|0;}
function Ea(a){return a.V+a.bA|0;}
function QO(a,b,c){a:{b:{if(!(c&&a.W<=b&&b<D8(a))){if(c)break b;if(a.V>b)break b;if(b>=Ea(a))break b;}b=1;break a;}b=0;}return b;}
function AU4(a){return Yz(C(332),BA(B,[Ck(a.W),Ck(a.W+a.bB|0),Ck(a.V),Ck(a.V+a.bA|0)]));}
function ML(){var a=this;B.call(a);a.dr=null;a.ds=null;a.fC=null;a.e3=null;a.gL=null;a.gK=null;a.H=null;}
function A4D(a,b,c){var d=new ML();Va(d,a,b,c);return d;}
function Va(a,b,c,d){a.dr=b;a.ds=c;a.H=d;}
function Zw(a){return a.H.data.length>=2?0:1;}
function AIj(a,b){a.gL=LJ(a.fC);a.gK=LJ(a.e3);b.e(Ts(a,b));}
function Ts(a,b){var c;c=new XG;c.FW=a;c.FV=b;return c;}
function EQ(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.H.data;f=e.length-1|0;if(f){g=e[f-1|0];if((!c?Ea(g):D8(g))==b)return f;}while(true){if(d>f)return Bc(d,a.H.data.length-1|0);h=(d+f|0)>>>1|0;i=a.H.data[h];j=!c?i.V:i.W;k=!c?i.bA:i.bB;l=BG(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;f=h-1|0;}}return h;}
function SD(a,b,c,d){var e,f,g,h,i,j;e=d.data;f=e.length;g=K(Dx,f+c|0);h=K(Dx,c);i=b<f&&e[b]!==null?e[b].c$:0;e=h.data;j=0;while(j<c){e[j]=HT(i);j=j+1|0;}BE(d,0,g,0,b);BE(h,0,g,b,c);BE(d,b,g,b+c|0,f-b|0);return g;}
function AF_(a,b,c,d){var e,f;e=d.data.length;f=K(Dx,e-c|0);BE(d,0,f,0,b);c=b+c|0;BE(d,c,f,b,e-c|0);return f;}
var Fu=G(0);
function K1(){var a=this;B9.call(a);a.cN=null;a.qn=null;}
function A8b(a){var b=new K1();AMx(b,a);return b;}
function AMx(a,b){var c,d,e,f;Dm(a,b);c=a.k;c.oT=0;d=Lq(c);a.qn=d;c=KM(d);a.cN=c;AAJ(a.w,c);c=b.j.bS;d=new H6;e=new ABD;e.uZ=a;IJ(d,b,e);Bb(c,d);c=a.cN;d=b.j;f=new SQ;f.uB=c;Bb(d.b3,c);Bb(d.fz,f);b=b.j.cF;c=new ABC;c.GU=a;Bb(b,c);Nt(a);}
function AOg(a,b){var c,d;c=a.cN;d=new AFu;d.y$=a;d.y_=b;IH(c,b,d);}
function A2e(a,b){if(In(a.k,b))ALy(a.cN);}
function A5I(a,b){var c;c=AJg(a,b);return AKR(a.cN,b)|c;}
function ATj(a){JY(a);Qh(a.cN);OB(a.k);}
function A6S(a){return En(0);}
function AQA(a,b,c){var d;GU(a,b,c);d=a.cN;AMw(d,d.f,b,c);}
function A04(a,b){Bs(b);GM(a.qn,b);Gt(a.cN,b);}
function AJc(a,b){var c,d,e;if(LQ(a.w,a.cN)){c=a.qn;b=b.i;d=a.cN;e=new T8;e.yg=a;SA(c,b,d,a,d,a,e);}return 1;}
var Qo=G(K1);
function A0i(a){return En(1);}
function AMV(){var a=this;CU.call(a);a.Dv=null;a.rN=null;a.lZ=null;a.e4=null;a.nP=null;a.iT=null;a.fm=null;a.la=null;a.tu=null;a.kD=null;a.s5=null;a.s6=null;a.r9=null;a.DL=null;a.Ip=null;a.wu=0;}
function A8j(a){var b=new AMV();A3c(b,a);return b;}
function A3c(a,b){var c,d,e,f;Fq(a,b);c=new Gi;S_();IY(c,A$s);a.Dv=c;a.rN=AP7(c);a.lZ=new Y;a.e4=Lk();a.nP=Lk();a.iT=AKX(0,0,3,3);a.fm=Iv(0,0,300,300);a.la=A1Z();d=K(BH,4);e=d.data;e[0]=C(276);e[1]=C(277);e[2]=C(216);e[3]=C(215);a.tu=d;a.kD=K(KT,e.length);f=b.j.b3;c=new WD;c.gm=a;Bb(f,c);f=b.j.bS;c=new AB2;c.HB=a;Bb(f,c);f=b.j.q9;c=new AB1;c.vL=a;Bb(f,c);f=b.j.jC;c=new AB0;c.Jg=a;Bb(f,c);f=b.j.ov;c=new ABZ;c.J9=a;Bb(f,c);f=b.j.cF;c=new ABY;c.KP=a;Bb(f,c);b=b.j.fz;f=new ABX;f.F1=a;Bb(b,f);a.s5=AGB(a,1);a.s6=
AGB(a,0);Uo(a,a.e4,a.s5);Uo(a,a.nP,a.s6);a.r9=AIa(a,0);a.DL=AIa(a,1);F3(a.fm,a.r9);F7(a.fm);HO(a.fm,C7(169,183,198));Fz(a.fm,a.Dv);Cb(a.e4.bb,1.0,1.0,1.0,1.0);Fz(a.e4,a.fm.bm);BO(a.iT.bm,a.rN);}
function Uo(a,b,c){F3(b,c);F7(b);}
function UW(a,b){IS(D1(),0.5+D1()*0.5,0.5+D1()*0.5,1.0,b.bb);}
function AGB(a,b){var c,d;c=Ef(a.p.z,200,100,b);HJ(c,C(333),11.0);BX(c,C(334),0.0,20.0);Kw(c,255,0,0);BX(c,C(334),0.25,40.0);Kw(c,0,255,0);BX(c,C(334),0.5,60.0);Kw(c,0,0,255);BX(c,C(334),0.75,80.0);d=CS(a.p.z);Da(d,c);Em(c);return d;}
function AIa(a,b){var c,d,e,f;c=Ef(a.p.z,255,100,b);HJ(c,C(161),10.0);d=X();e=$rt_str(c.dG.font);f=J();F(F(f,C(335)),e);T(d,I(f));D5(c,C(336));BX(c,C(336),0.0,20.0);BX(c,C(336),0.25,40.0);BX(c,C(336),0.5,60.0);BX(c,C(336),0.75,80.0);d=CS(a.p.z);Da(d,c);Em(c);return d;}
function AQS(a,b){var c;a.wu=a.wu+1|0;c=b/5.0;IS(c-(c|0),1.0,1.0,1.0,a.iT.bb);return AEN(a.la,b);}
function ASr(a){var b,c,d,e,f,g,h;b=a.p.z;Ex(b,a.rN);c=a.kD.data;d=c.length;e=0;while(e<d){ADr(c[e],b,0,0);e=e+1|0;}f=a.fm;g=f.s;g.a=(a.lZ.a-f.q.a|0)-5|0;g.b=0;BM(b,0);d=0;while(d<7){f=a.fm;EV(f,b,a.r9,U(d,10+((10*f.q.b|0)/15|0)|0)+5|0,0);d=d+1|0;}f=a.fm;f.s.a=(a.lZ.a-(f.q.a*2|0)|0)-10|0;d=0;while(d<7){g=a.DL;f=a.fm;f.s.b=U(d,10+((10*f.q.b|0)/15|0)|0)+5|0;Vk(f,b,g,1);d=d+1|0;}Vk(a.e4,b,a.s5,1);BM(b,1);f=a.nP;g=a.s6;h=f.s;LH(b,h.b,h.a,f.q,g);BM(b,0);f=a.Ip;if(f!==null)Y4(a.iT,b,f,0,0,0.0);f=a.la;if(f.hm)AFY(f,
b,new Y);NN(b,C(337));}
function AT9(a,b,c){var d,e,f,g,h,i,j,k;d=X();e=BL(b);f=J();F(F(f,C(338)),e);T(d,I(f));d=X();f=J();Dj(F(f,C(339)),c);T(d,I(f));g=BF(30.0,c);h=BF(10.0,c);i=0;while(true){j=a.kD.data;if(i>=j.length)break;k=1+i|0;j[i]=AKX(U(h,k)+U(g,i)|0,g,g,g);UW(a,a.kD.data[i]);i=k;}V(a.iT.s,(b.b/2|0)-1|0,(b.a/2|0)-1|0);f=a.e4;V(f.s,((b.b/2|0)-f.q.b|0)-10|0,50);V(a.nP.s,(b.b/2|0)+10|0,50);CA(a.lZ,b);}
function AAc(a,b){var c,d,e,f,g;c=X();d=!b.h4?C(340):C(341);e=b.e1;f=b.Q;g=b.su;b=J();FG(F(P(F(F(F(b,d),e),C(342)),f),C(343)),g);T(c,I(b));return 0;}
function AES(){var a=this;CU.call(a);a.KT=null;a.nc=null;a.kE=null;a.jF=null;a.dS=null;a.ey=null;a.pk=null;a.pa=null;a.lf=0;a.kn=null;a.km=null;}
function Th(a,b,c){F3(b,c);F7(b);}
function AIx(a,b,c,d,e,f){var g,h;g=Ef(f,c,120,b);Cm(g,e);e=!b?C(344):C(345);h=J();F(F(F(h,e),d),C(148));d=I(h);BX(g,d,0.0,20.0);BX(g,d,0.25,40.0);BX(g,d,0.5,60.0);BX(g,d,0.75,80.0);BX(g,d,1.0,100.0);h=CS(f);Da(h,g);Em(g);return h;}
function AVw(a,b){return 0;}
function A0f(a){var b,c,d,e,f,g,h,i;b=a.p.z;Ex(b,a.nc);BM(b,0);c=a.kE;d=c.a;e=a.jF;f=d-e.a|0;g=c.b-e.b|0;Bi(b,0,0,e,a.dS.bm);Bi(b,g,0,a.jF,a.ey.bm);Bi(b,0,f,a.jF,a.dS.bb);Bi(b,g,f,a.jF,a.ey.bb);c=a.dS;e=c.s;h=e.a;i=((a.kE.a*3|0)/4|0)-(c.q.a/2|0)|0;IU(c,b,e.b,h,a.kn,0,1);c=a.dS;IU(c,b,c.s.b,i,a.kn,1,1);c=a.ey;IU(c,b,c.s.b,h,a.km,0,0);e=a.ey;IU(e,b,e.s.b,i,a.km,1,0);NN(b,C(337));}
function A1v(a,b,c){var d,e;CA(a.kE,b);V(a.jF,b.b/2|0,b.a/2|0);d=a.kE.a/4|0;e=a.dS;d=d-(e.q.a/2|0)|0;V(e.s,(b.b/4|0)-(a.lf/2|0)|0,d);V(a.ey.s,((b.b*3|0)/4|0)-(a.lf/2|0)|0,d);}
function AAO(){var a=this;B9.call(a);a.Dp=null;a.f1=null;a.ec=null;a.q_=null;}
function ATO(a,b,c){var d;d=FC(a.w,a.q_);J8(a.f1,d,a.w);J8(a.ec,d,a.w);}
function TY(b){return Jo(b,Hq());}
function Jo(b,c){var d;d=Mk();PG(d,Oo(b,KA(c,25)),!b?null:Jo(b-1|0,c));PG(d,Oo(b,KA(c,20)),!b?null:Jo(b-1|0,c));PG(d,Oo(b,KA(c,15)),!b?null:Jo(b-1|0,c));PG(d,Oo(b,KA(c,10)),!b?null:Jo(b-1|0,c));return G_(d);}
function Oo(b,c){var d;if(b){d=J();F(F(P(d,b),C(346)),c);c=I(d);}return c;}
function PG(b,c,d){if(d!==null)Fc(b,c,d);else{d=new Yv;d.vt=c;Dv(b,c,d);}}
function ASV(a,b,c){var d,e;GU(a,b,c);b=a.w.bD;d=EO(a.f1);e=EO(a.ec);Oh(a.f1,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);Oh(a.ec,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function A0W(a){var b,c,d,e,f,g,h,i;JY(a);b=a.p.z;BM(b,1);c=a.Dp;d=a.w;e=d.bD;V(c.p_,e.b,BF(2.0,d.cf));V(c.qN,BF(2.0,d.cf),e.a);FZ();f=A$D;g=d.bM;h=e.a/2|0;i=c.p_;Bi(g,0,h-(i.a/2|0)|0,i,f);g=d.bM;h=e.b/2|0;c=c.qN;Bi(g,h-(c.b/2|0)|0,0,c,f);M2(a.f1,a.w);M2(a.ec,a.w);OB(a.k);BM(b,0);}
function AT_(a,b){var c,d;c=OW(a.f1,b.i,a.w.dd);d=OW(a.ec,b.i,a.w.dd);return !c&&!d?0:1;}
function ARt(a,b,c,d){var e,f;e=Pw(a.f1,b.i,c,d);f=Pw(a.ec,b.i,c,d);return !e&&!f?0:1;}
function AEr(){B9.call(this);this.mv=null;}
function ASg(a,b,c){if(b===0.0)ACd(a);}
function ACd(a){var b,c,d,e,f,g,h,i;b=a.mv;if(b!==null){IK(a.k,b);Kr(b);}b=(Sl()).ch;c=A9a(a.w,new X2);d=Dk(C(150),14.0);e=ATM();f=0;while(f<300){g=GB(f);h=new U9;h.Gt=C(347);h.Gr=g;h.Gs=C(348);Zx(e,C(347),g,C(348),h);f=f+1|0;}AAg(c,AHf(e));Zm(c,b,d);g=QX(a.w);i=FR(c);Hu(i,b.pe,b.rq);I7(g,i);DX(g,b);CN(g,C(136));a.mv=g;DY(a.k,g);Sf(a);}
function ARI(a,b,c){GU(a,b,c);Sf(a);}
function Sf(a){var b,c,d;b=a.w.bD;Ee(a.mv,BR((b.b*2|0)/10|0,(b.a*4|0)/10|0),BR((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.mv;b=AMG(c.P.h);d=J();F(F(d,C(349)),b);CN(c,I(d));}
function Z9(){var a=this;H2.call(a);a.ow=null;a.jq=null;a.hx=null;a.l2=null;a.vn=null;a.lU=null;a.jI=null;a.je=null;a.nD=0;a.jo=0;}
function Rm(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.jq.l>0){d=D1();e=a.jq;f=d*(e.l-1|0)|0;e=Hn(e,f);Hn(a.hx,f);f=a.jo;g=e.q;a.jo=f-U(g.b,g.a)|0;Jl(a.ow,e.d6);}c=c+1|0;}}
function MU(a,b){var c,d,e,f,g,h,i,j;c=KO(a.w);Cm(c,a.l2);d=0;while(d<b){e=KA(a.lU,1+(D1()*19.0|0)|0);f=Lk();g=f.d6;h=a.ow;Bs(c);i=new S$;i.yu=c;BO(g,K0(h,e,i));(Yu(D1(),1.0,1.0,f.bm)).bd=0.5;h=f.s;g=f.d6;V(h,g.ba|0,g.bj|0);h=f.q;g=f.d6;V(h,g.S|0,g.bd|0);Bp(a.hx,e);Bp(a.jq,f);j=a.jo;h=f.q;a.jo=j+U(h.b,h.a)|0;d=d+1|0;}a.je=Nz(a.ow);}
function A5d(a){var b,c,d,e,f,g,h,i;JY(a);b=a.p.z;BM(b,1);c=a.w.bM;if(a.hx.l){d=a.je;d=HZ(c,d.b,d.a);Cm(d,a.l2);e=a.l2.er;Bi(c,0,0,a.je,a.vn);f=0;while(f<a.hx.l){g=B1(a.jq,f);h=B1(a.hx,f);g=g.d6;BX(d,h,g.ba,g.bj+e);f=f+1|0;}g=a.jI;if(!(g!==null&&Bz(g)==a.je.b&&CM(a.jI)==a.je.a))a.jI=BI(a.jI,CS(c));Da(a.jI,d);Em(d);i=0;while(i<a.hx.l){d=B1(a.jq,i);HO(d,Co(0));EV(d,c,a.jI,0,0);i=i+1|0;}}BM(b,0);}
function AQJ(a,b){var c,d;if(a.nD){c=a.je;d=Bc(U(c.b,c.a),2211840);if(a.jo/d<=0.7)MU(a,CC(a.lU,5));else Rm(a,CC(a.lU,5));}return a.nD;}
function CF(){var a=this;CU.call(a);a.fS=null;a.eO=null;a.f3=0.0;}
function A_Y(a){var b=new CF();E9(b,a);return b;}
function E9(a,b){Fq(a,b);a.fS=ANG(0,0,64);a.eO=new Y;NH(b.bt,Gx(Bv(a)));}
function OM(a){Ex(a.p.z,a.fS);}
function Hd(a,b,c){CA(a.eO,b);a.f3=c;}
function Q1(){var a=this;CF.call(a);a.dQ=null;a.Ey=null;a.ed=null;a.jE=null;a.vP=null;a.mK=null;a.gF=0;a.jV=0;a.w_=0;}
function A2K(a){var b,c,d,e,f,g,h,i,j,k,l,m;Ex(a.dQ,a.fS);b=a.ed.db.a;BM(a.dQ,1);c=BF(20.0,a.ed.ka);d=BF(22.0,a.ed.ka);e=a.jE;f=a.gF;g=a.ed;h=g.fR;i=h.a;g=g.db;GI(e,f,i,g.a,5000,(h.b+g.b|0)+d|0,c);JJ(a.jE,a.dQ);BM(a.dQ,0);j= -(a.gF%a.jV|0)|0;Vz(a.ed,a.dQ,0);k=a.gF;l=a.jV;k=k/l|0;l=(2*b|0)/l|0;Um(a.ed,j,k,l,a.dQ,a.mK);m=j+U(l-k|0,a.jV)|0;Ve(a.ed,m,a.dQ,a.mK);QI(a.ed, -a.gF|0,10,10,a.mK,a.dQ);EA(a.dQ);}
function A0a(a,b,c){var d,e,f;Hd(a,b,c);d=BF(80.0,c);e=BF(20.0,c);f=BF(20.0,c);Vg(a.ed,f,e,d,b.a/2|0,c);}
function AEa(a){return 5000-a.ed.db.a|0;}
function LK(){var a=this;B9.call(a);a.C7=null;a.np=0;a.ks=0;a.oC=null;a.mt=null;a.p4=null;}
var A$t=null;function UD(a,b){var c,d,e,f,g,h,i,j;c=a.k;d=a.C7;e=d.pH;f=K(Bn,3);g=f.data;h=new Bn;i=new R7;i.wj=a;BT(h,i,C(350));g[0]=h;j=new Bn;h=new R9;h.zl=a;BT(j,h,C(351));g[1]=j;j=new Bn;h=new R8;h.x_=a;BT(j,h,C(352));g[2]=j;E1(c,d,e,b,Cx(f));return 1;}
function APg(){A$t=Cf([(-738792947),60747247,(-1998097526),1828170894,(-887988090),947829193,(-1999687713),(-701152478),(-2000527343),(-1881496555),540327628,290384918,566113323,(-1809286035),815515802,(-530444145),(-436772899)]);}
var AAs=G(B9);
function Ho(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.p.bt.cS;f=new S9;f.I4=a;f.x0=b;g=K(B,1);h=g.data;i=BC(1);i.data[0]=b;h[0]=i;Dg(e,f,C(353),g);d=d+1|0;}}
function APw(b){var c;c=b.data;AM$(c[0],c[1],N6(HG(b,2)));}
function AM$(b,c,d){var e,f,g,h,i;e=d.data;f=X();b=BL(b);c=BL(c);g=J();F(F(F(F(g,C(354)),b),C(355)),c);T(f,I(g));b=X();h=e.length;i=AIN(d);c=J();P(F(P(F(c,C(356)),h),C(357)),i);T(b,I(c));}
function YY(){var a=this;CF.call(a);a.f0=null;a.h2=null;a.qV=null;a.A3=null;a.FN=null;a.sh=null;a.r0=null;}
function AS_(a,b){b=b/5.0;IS(b-(b|0),1.0,1.0,1.0,a.h2.bb);return 0;}
function AZv(a){var b;OM(a);b=a.p.z;EV(a.f0,b,a.A3,0,0);BM(b,1);LH(b,10,10,a.sh,a.FN);BM(b,0);Y4(a.h2,b,a.qV,0,0,0.0);NN(b,C(337));}
function A2N(a,b,c){var d,e,f;Hd(a,b,c);V(a.h2.s,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.f0;e=d.s;f=b.b;d=d.q;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Vb(){var a=this;CF.call(a);a.im=null;a.tY=null;a.oF=null;a.ml=null;a.lq=null;}
function A7j(a){var b,c,d,e,f,g;OM(a);b=a.p.z;c=a.ml;MF(b,c.b,c.a,a.lq);b=a.im;c=a.tY;d=a.eO;e=a.p.z;f=0;while(true){g=0;while(true){EV(b,e,c,g,f);g=g+Bz(c)|0;if(g>=d.b)break;}f=f+CM(c)|0;if(f>=d.a)break;}EA(a.p.z);}
function ATe(a,b,c){Hd(a,b,c);V(a.lq,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function AEg(){var a=this;CU.call(a);a.fw=null;a.rh=null;a.h8=null;a.cn=null;a.f_=0;a.kh=null;a.gD=0;a.JB=20;a.LE=11;a.J3=220;a.of=null;a.K2=5000;a.jZ=0;a.ib=null;}
function AXS(a){var b,c,d,e,f,g,h;b=a.kh;c=a.gD;d=a.of;GI(b,c,0,d.a,5000,d.b,20);BM(a.fw,1);JJ(a.kh,a.fw);if(a.cn===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BX(a.rh,GB(e),0.0,c);}b=CS(a.fw);a.cn=b;Da(b,a.rh);}if(a.gD<=a.f_)while(true){f=a.f_;if(f<=a.gD)break;a.f_=f-20|0;b=a.h8;g=a.jZ-1|0;a.jZ=g;BX(b,GB(g),0.0,20.0);ACG(a.cn,a.h8,0,a.f_%220|0);JQ(a.h8);}else while(a.f_<(a.gD-20|0)){b=a.h8;g=a.jZ+1|0;a.jZ=g;BX(b,GB((g+11|0)-1|0),0.0,20.0);ACG(a.cn,a.h8,0,a.f_%220|0);JQ(a.h8);a.f_=a.f_+20|0;}b=Iv(0,0,Bz(a.cn),CM(a.cn));IW(b,
0,0,Bz(a.cn),CM(a.cn));HO(b,a.ib.data[0]);Fz(b,a.ib.data[1]);EV(b,a.fw,a.cn,400,0);g=a.gD%220|0;f=Bc(CM(a.cn)-g|0,200);d=Iv(0,0,Bz(a.cn),f);IW(d,0,g,Bz(a.cn),f);HO(d,a.ib.data[0]);Fz(d,a.ib.data[1]);EV(d,a.fw,a.cn,0,0);h=Iv(0,f,Bz(a.cn),(CM(a.cn)-f|0)-20|0);IW(h,0,0,Bz(a.cn),(CM(a.cn)-f|0)-20|0);HO(h,a.ib.data[1]);Fz(h,a.ib.data[0]);EV(h,a.fw,a.cn,0,0);}
function A0Z(a,b,c){CA(a.of,b);}
function A41(a,b){return 0;}
function ADR(a){return 5000-a.of.a|0;}
function KW(){CF.call(this);this.eV=0;}
function ADq(a){var b,c;b=a.p.bt;c=new W_;c.Cl=a;TT(b,c,ZR(a));}
function Se(a){var b,c,d,e;b=a.eV+1|0;a.eV=b;c=Gx(H(KW));d=J();F(F(P(F(d,C(358)),b),C(346)),c);e=I(d);c=a.p.bt;d=new YZ;d.Cx=e;Wb(c,e,d,ZR(a));}
function ZR(a){var b;b=new AB7;b.Hd=a;return b;}
function AT0(a,b,c,d){a:{switch(c){case 0:break;case 2:Se(a);break a;default:break a;}ADq(a);}return 1;}
function UY(){var a=this;CF.call(a);a.yh=null;a.hG=null;a.ny=null;a.r3=null;a.z_=null;}
function AYu(a){var b,c,d,e,f,g,h;if(a.ny===null){b=a.p.z;c=a.z_;c=WH(b,c.fn,c.eN,a.f3);Cm(b.bE,c);d=DG(D5(b.bE,C(359)));e=X();f=c.rG;g=J();Dj(F(g,C(360)),f);T(e,I(g));h=HW(c,1.1799999475479126);e=X();g=J();P(F(P(F(g,C(361)),d),C(270)),h);T(e,I(g));e=HZ(b,d,h);a.r3=e;Cm(e,c);BX(a.r3,C(359),0.0,c.er);b=CS(b);a.ny=b;Da(b,a.r3);F3(a.hG,a.ny);F7(a.hG);b=a.hG.bm;FZ();BO(b,A$u);BO(a.hG.bb,A_K);}b=a.p.z;Ex(b,a.yh);c=a.hG;e=c.s;g=a.eO;d=g.b;c=c.q;V(e,(d-c.b|0)/2|0,(g.a-c.a|0)/2|0);EV(a.hG,b,a.ny,0,0);}
function Hf(){var a=this;CU.call(a);a.zz=null;a.ct=null;a.eh=null;a.dV=null;a.fu=null;a.fv=null;}
function Qe(a,b){var c,d;Fq(a,b);a.zz=Co(20);a.ct=UV();a.eh=new Y;a.dV=new Y;a.fu=new Y;a.fv=new Y;c=b.j.bS;d=new AF9;d.Jp=a;Bb(c,d);Bb(b.j.b3,a);b=a.ct.bm;FZ();BO(b,A$u);BO(a.ct.bb,A_K);}
function AJI(a){var b,c,d;b=a.p.z;Ex(b,a.zz);c=a.ct;d=c.s;Bi(b,d.b,d.a,c.q,c.bm);BM(b,1);c=a.ct;d=c.s;P_(b,d.b,d.a,c.q,a.eh,a.dV,a.fu,a.fv,c.bb);BM(b,0);}
function A3a(a,b){return 0;}
var VQ=G(Hf);
function A4P(a,b,c){var d,e,f;d=a.ct;e=d.s;f=b.b;d=d.q;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);V(a.eh,0,0);V(a.dV,Bc(b.b,b.a),Bc(b.b,b.a));b=a.fu;d=a.eh;V(b,d.b,d.a+20|0);b=a.fv;d=a.dV;V(b,d.b,d.a+40|0);}
function A5G(a,b){var c,d,e;CA(a.eh,b.i);b=a.dV;c=a.ct;d=c.s;e=d.b;c=c.q;V(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.fu;c=a.eh;V(b,c.b,c.a+20|0);b=a.fv;c=a.dV;V(b,c.b,c.a+40|0);return 0;}
function VP(){var a=this;Hf.call(a);a.hb=null;a.hH=null;a.J0=16.0;a.rE=0;}
function A62(a,b){var c,d,e,f;c=a.dV;d=b.i.a;e=a.rE;f=d-(e/2|0)|0;c.a=f;a.fv.a=f+e|0;return 1;}
function ARf(a,b,c){var d,e,f;a.rE=BF(80.0,c);d=BF(48.0,c);e=(b.a-d|0)/2|0;f=e+d|0;V(a.eh,150,e);V(a.fu,150,f);}
function ASc(a){var b,c,d,e,f,g,h;b=Z(a.eh.b,a.fu.b);c=Bc(a.dV.b,a.fv.b);d=Bc(a.eh.a,a.dV.a)-50|0;e=Z(a.fu.a,a.fv.a)+50|0;JD(a.ct,b,d,c-b|0,e-d|0);AJI(a);f=a.ct.s.b-10|0;AEi(a,a.p.z,10,f,a.eh,a.fu);g=a.ct;h=g.s.b+g.q.b|0;AEi(a,a.p.z,h,f,a.dV,a.fv);}
function AEi(a,b,c,d,e,f){var g;V(a.hb,c,a.ct.s.a);V(a.hH,d,e.a-a.ct.s.a|0);g=a.hb;Bi(b,g.b,g.a,a.hH,a.ct.bm);V(a.hb,c,e.a);V(a.hH,d,f.a-e.a|0);e=a.hb;Bi(b,e.b,e.a,a.hH,a.ct.bb);V(a.hb,c,f.a);e=a.hH;g=a.ct;V(e,d,(g.s.a+g.q.a|0)-f.a|0);e=a.hb;Bi(b,e.b,e.a,a.hH,a.ct.bm);}
function Zh(){var a=this;B9.call(a);a.HO=3;a.qZ=null;a.lG=null;a.lF=0;}
function ATN(a,b,c){if(b===0.0)Xg(a);}
function Xg(a){var b,c,d,e,f,g,h,i;b=a.k;c=a.lF+1|0;a.lF=c;d=J();P(F(d,C(362)),c);e=I(d);f=QX(a.w);d=AQv(AXk(a.p));g=Hq();h=AXr(10485760+CC(g,1048576)|0,CC(g,1024)+1|0);i=AXr(10485760+CC(g,1048576)|0,CC(g,1024)+1|0);OX(d,h,a.p.j.cZ,1);OX(d,i,a.p.j.cZ,0);I7(f,FR(d));DX(f,EZ());OT(f,a.qZ,3.0);CN(f,e);AC7(a,f);AH_(a,f);DY(b,f);}
function AH_(a,b){var c,d,e,f,g,h;c=a.w.bD;d=c.b/10|0;e=d+CC(a.lG,d)|0;d=c.a/20|0;f=d+CC(a.lG,d)|0;g=c.b;d=((g*7|0)/10|0)+CC(a.lG,g/10|0)|0;h=c.a;h=((h*7|0)/10|0)+CC(a.lG,h/10|0)|0;Ee(b,BR(e,f),BR(d,h));}
function AC7(a,b){var c;c=new AG6;c.u9=a;c.u$=b;VW(b,c);}
function EB(){B9.call(this);this.ko=null;}
function A8D(a){var b=new EB();KB(b,a);return b;}
function KB(a,b){Dm(a,b);Bb(a.w.dl,a);BO(a.di,Co(43));}
function A0y(a){return AYU();}
function AUe(a){return 1;}
function AFL(a,b){DX(a.ko,b);}
function ANu(a,b){var c,d,e;c=a.w.bD;d=!a.r$()?0:AGA(b);e=c.a-d|0;Ee(b,BR(c.b/20|0,d+(e/20|0)|0),BR((c.b*9|0)/10|0,(e*9|0)/10|0));}
function A5n(a,b,c){if(b===0.0){a.ko=A6Q(a.w,a.k4());AFL(a,EZ());if(a.r$())CN(a.ko,Gr(Bv(a)));DY(a.k,a.ko);a.p$(a.ko);}}
function ACz(){var a=this;CF.call(a);a.gX=null;a.dT=null;a.dA=null;a.dL=null;a.H2=null;a.mj=null;a.hn=0;a.jy=null;a.g7=0;a.iz=0;a.j2=0;a.sK=0;a.g9=null;a.tN=null;a.mP=null;}
function AHQ(a){return a.sK-a.hn|0;}
function AZM(a,b,c){var d,e,f,g,h,i,j;Hd(a,b,c);BF(20.0,c);d=BF(20.0,c);e=BF(20.0,c);a.hn=a.eO.a/2|0;b=WH(a.p.z,C(150),20.0,c);a.g9=b;f=(Fk(b)*125|0)/100|0;a.iz=f;HA(a.dT,f,a.g9);HA(a.dA,a.iz,a.g9);HA(a.dL,a.iz,a.g9);f=Iw(a.dT,a.g9,a.p.z.bE,c);g=Iw(a.dA,a.g9,a.p.z.bE,c);h=Iw(a.dL,a.g9,a.p.z.bE,c);HU(a.dT,e,d,f,a.hn,c);b=a.dA;i=(e+f|0)+2|0;HU(b,i,d,g,a.hn,c);HU(a.dL,(i+g|0)+2|0,d,h,a.hn,c);b=X();j=J();P(F(P(F(j,C(363)),f),C(364)),g);T(b,I(j));a.sK=U(a.j2,a.iz);}
function AXo(a){var b,c,d,e,f,g,h;OM(a);b=a.dT;c=a.g7;b.fK=c;a.dA.fK=c;a.dL.fK=c;d=a.iz;e=c/d|0;c=GE(c+a.hn|0,d);f=a.dT;d=(e+c|0)/2|0;Ii(f,e,c,d,a.p.z,a.mj,a.mP,null);Ii(a.dA,e,c,d,a.p.z,a.mj,a.mP,null);Ii(a.dL,e,c,d,a.p.z,a.mj,a.mP,null);b=a.p.z;BM(b,1);c=BF(20.0,a.f3);d=BF(22.0,a.f3);f=a.dL;e=f.cG.b+f.e9.b|0;f=a.jy;g=a.g7;h=a.dA;GI(f,g,h.cG.a,h.e9.a,a.sK,e+d|0,c);JJ(a.jy,b);BM(b,0);}
function AXE(a,b,c){var d,e,f;if(c)return A$6;d=EX(a.jy,b.i,a.tN,1);if(d!==null)return d;e=Hg(a.dT,b,c,a.gX);if(e!==null)return e;f=Hg(a.dA,b,c,a.gX);if(f!==null)return f;return Hg(a.dL,b,c,a.gX);}
function A2w(a,b,c){var d,e,f;d=GV(a.dT,b,c);e=GV(a.dA,b,c);f=GV(a.dL,b,c);return !d&&!e&&!f?0:1;}
function A1q(a,b){var c,d,e;c=G7(a.dT,b,a.gX);d=G7(a.dA,b,a.gX);e=G7(a.dL,b,a.gX);return !E0(a.jy,b.i,a.gX)&&!c&&!d&&!e?0:1;}
function Te(){B9.call(this);this.oM=null;}
function A1P(a,b,c){if(b===0.0)LC(a);}
function LC(a){var b;b=AW3(a.k,a.oM,new Ue);K2(b);return b;}
function Pt(){var a=this;CF.call(a);a.o1=null;a.eR=null;a.Ee=null;a.C$=null;a.jf=null;a.uS=null;a.sg=null;a.pX=null;}
var A_Z=0;function A6Y(a,b,c){var d,e,f;a.f3=c;CA(a.eO,b);V(a.eR.q,BF(600.0,c),0);d=a.eR;V(d.s,(b.b-d.q.b|0)/2|0,0);e=0;while(true){f=a.jf.data;if(e>=f.length)break;f[e]=FL(a.C$.Gq.data[e],c);e=e+1|0;}}
function A18(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.p.z;Ex(b,a.fS);BM(b,1);c=BF(10.0,a.f3);d=a.jf.data;e=d.length;f=e<=0?0: -c|0;g=0;while(g<e){f=f+((((Jd(d[g])*2|0)*4|0)/3|0)+c|0)|0;g=g+1|0;}h=a.eR.s.b;e=(a.eO.a-f|0)/2|0;g=0;i=e;while(true){d=a.jf.data;if(g>=d.length)break;j=d[g];k=Jd(j);l=k*2|0;m=(l*4|0)/3|0;l=l+2|0;n=i+((m-l|0)/2|0)|0;o=NG(j);p=a.eR;q=p.q;q.a=l;J3(b,p.s.b,n,q,h+o,(n+k|0)+o,j,a.o1,0.0);i=i+(m+c|0)|0;g=g+1|0;}V(a.pX,a.eR.q.b+4|0,f+4|0);V(a.sg,a.eR.s.b-2|0,e-2|0);j=a.pX;q=a.sg;Jx();Od(b,
j,q,A_A.i1.f9,1,a.uS);if(A_Z){i=(a.eO.a-f|0)/2|0;p=YC(1,2);k=0;while(k<1000){c=CC(p,a.jf.data.length);r=a.jf.data[c];c=Jd(r);e=c*2|0;g=CC(p,f-e|0);a.eR.q.a=e;o=NG(r);j=a.eR;e=j.s.b;g=g+i|0;J3(b,e,g,j.q,h+o,(g+c|0)+o,r,a.o1,0.0);k=k+1|0;}}BM(b,0);}
function AWD(a,b){return A_Z;}
function FL(b,c){var d;d=new BS;QY(b,c,d);return d;}
function AOe(){A_Z=0;}
function ZQ(){B9.call(this);this.Hm=null;}
function ASf(a,b,c){var d;d=a.k.m.cf!==0.0?0:1;GU(a,b,c);if(d)AB9(a.Hm.ek);}
function Sa(){var a=this;EB.call(a);a.og=null;a.hp=null;}
function ARJ(a){var b;b=KM(a.og);a.hp=b;APt(b);AAJ(a.w,a.hp);return a.hp;}
function AZd(a){return 0;}
function A64(a,b){ANu(a,b);Nt(a);}
function AWM(a,b){Bs(b);GM(a.og,b);Gt(a.hp,b);AFL(a,b.ch);}
function AWg(a,b){In(a.k,b);}
function ACH(){var a=this;EB.call(a);a.rP=null;a.ok=null;}
function ATk(a){var b,c,d,e,f,g;b=APL(a.w);a.ok=b;PC(b,a.rP);b=Ff(C(365),1);c=new Uq;c.xY=a;b.cy=c;Ev(b);c=Ff(C(366),1);d=new Up;d.Ct=a;c.cy=d;Ev(c);e=Ff(C(365),1);d=new Us;d.C_=a;e.cy=d;Ev(e);f=Ff(C(366),1);d=new Ur;d.Hi=a;f.cy=d;Ev(f);d=APl(C(367),0,BA(Dr,[b,c]));Ih(d);g=APl(C(368),0,BA(Dr,[e,f]));Ih(g);D_(a.ok.bW,d);D_(a.ok.bV,g);return a.ok;}
function AEw(a){var b,c;b=a.k.m.bk;c=new W1;c.ED=a;Gh(b,c);}
function AHH(a){var b,c;b=a.k.m.bk;c=new ABI;c.BZ=a;Gh(b,c);}
function AH0(a){var b,c;b=a.k.m.bk;c=new Q0;c.AB=a;EM(b,c);}
function ACo(a){var b,c;b=a.k.m.bk;c=new Re;c.Jc=a;EM(b,c);}
function U_(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=X();f=Gr(Bv(d[c]));g=BL(d[c]);h=J();F(F(F(F(P(F(h,C(369)),c),C(370)),f),C(346)),g);T(e,I(h));c=c+1|0;}}
function Vn(){var a=this;EB.call(a);a.kU=null;a.tT=null;}
function AZ9(a){var b,c,d,e;a.kU=WE(a.w);b=new UT;b.zW=a;c=Ro(C(371),4,b);b=X();d=Qi(c);e=J();P(F(e,C(372)),d);T(b,I(e));D_(a.kU,c);IR(a.kU,a.tT);c=a.kU;return J_(c,FR(c));}
function ASS(a,b){var c;c=a.w.bD;Ee(b,BR(c.b/30|0,c.a/10|0),BR((c.b*3|0)/10|0,(c.a*8|0)/10|0));}
function AKc(){B9.call(this);this.gQ=null;}
function A3l(a){var b=new AKc();AYQ(b,a);return b;}
function AYQ(a,b){var c;Dm(a,b);a.gQ=D7();Bb(a.w.dl,a);BO(a.di,Co(43));b=b.j.cF;c=new WF;c.Ef=a;Bb(b,c);}
function Ie(){return En(1);}
function AFj(a,b){var c,d,e,f,g;c=K(Bn,6);d=c.data;e=new Bn;f=a.k;g=new ADu;g.A4=a;BT(e,C6(f,g),C(373));d[0]=e;e=new Bn;f=a.k;g=new ADx;g.Fn=a;BT(e,C6(f,g),C(374));d[1]=e;e=new Bn;f=a.k;g=new ADy;g.vv=a;BT(e,C6(f,g),C(375));d[2]=e;e=new Bn;f=a.k;g=new ADv;g.Ai=a;BT(e,C6(f,g),C(376));d[3]=e;e=new Bn;f=a.k;g=new ADw;g.xO=a;BT(e,C6(f,g),C(377));d[4]=e;e=new Bn;f=a.k;g=new ADB;g.Cf=a;BT(e,C6(f,g),C(378));d[5]=e;e=Cx(c);f=a.k;g=a.gQ;E1(f,g.ch,g.gr,b,e);return 1;}
function A4F(a,b,c){var d;if(b===0.0){d=a.k.m.bD;AFj(a,BR(d.b/3|0,d.a/3|0));}}
function T3(){B9.call(this);this.pl=null;}
function A02(a,b,c){if(b===0.0)AFD(a);}
function AFD(a){AHh(new Mx,a.k,a.pl,new AHi);}
function WC(){var a=this;CF.call(a);a.iP=null;a.Cg=null;a.jn=null;a.gB=null;a.jG=0;a.rr=0;a.D6=null;}
function AQQ(a){var b,c,d,e,f,g,h,i;Ex(a.iP,a.fS);ADr(a.gB,a.iP,0,0);BM(a.iP,1);b=BF(20.0,a.f3);c=BF(22.0,a.f3);d=a.jn;e=a.jG;f=a.gB.s.a;g=AHJ(a);h=a.rr;i=a.gB;GI(d,e,f,g,h,(i.s.b+i.q.b|0)+c|0,b);JJ(a.jn,a.iP);BM(a.iP,0);}
function A32(a,b,c){var d;Hd(a,b,c);d=BF(20.0,c);V(a.gB.q,d,b.a/2|0);}
function A6J(a,b,c){if(c)return A$6;return EX(a.jn,b.i,a.D6,1);}
function A4c(a,b,c){return 1;}
function ARY(a,b){return E0(a.jn,b.i,a.Cg);}
function AB4(a){return a.rr-AHJ(a)|0;}
function AHJ(a){return a.gB.q.a;}
function Rp(){var a=this;EB.call(a);a.zy=null;a.gP=null;}
function ANj(){var b;b=BA(Fw,[J$(1,3,4,5,1),J$(5,6,10,2,2),J$(12,2,13,3,3),J$(15,3,17,2,4)]);return A4D(K(Dx,0),K(Dx,0),b);}
function A1r(a){var b,c,d,e;b=APL(a.w);a.gP=b;PC(b,a.zy);c=a.gP.bW;Bs(c);d=new AEP;d.ub=c;b=Ro(C(371),4,d);d=a.gP.bV;Bs(d);e=new AEQ;e.wS=d;c=Ro(C(371),4,e);D_(a.gP.bW,b);D_(a.gP.bV,c);Ko(a.gP,ANj());return a.gP;}
var AP0=G();
function ARE(b){var c,d,e,f,g,h,i,j,k;b=b.instance.exports;c=b.memory;d=new ABk;c=c.buffer;d.hC=c;d.tj=new $rt_globals.Int8Array(c);d.oP=new $rt_globals.Uint16Array(c);d.Fr=new $rt_globals.Int32Array(c);d.vN=new $rt_globals.Float32Array(c);d.v3=new $rt_globals.Float64Array(c);e=d.hC.byteLength;c=J();P(F(c,C(379)),e);C4(I(c));e=b.callToCpp1();c=J();P(F(c,C(380)),e);C4(I(c));f=b.callToCpp2();c=J();Dj(F(c,C(381)),f);C4(I(c));c=QJ(d,b.getC8String());g=J();F(F(g,C(382)),c);C4(I(g));c=ZV(d,b.getC16String());g=J();F(F(g,
C(383)),c);C4(I(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.hC,h,8));c=ALh(i);g=J();F(F(g,C(384)),c);C4(I(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.hC,h,8));c=AWH(j);g=J();F(F(g,C(385)),c);C4(I(g));h=b.getCDoubleArray8();k=$rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(d.hC,h,8));c=AYF(k);g=J();F(F(g,C(386)),c);C4(I(g));c=AYA(b.getC8String(),C(387),d);g=J();F(F(g,C(388)),c);C4(I(g));c=AUG(b.getC16String(),C(389),
d);g=J();F(F(g,C(390)),c);C4(GS(g));c=A4n(i,d,b.getCIntArray8(),Cf([11,22,33,44,55,66,77,88]));g=J();F(F(g,C(391)),c);C4(GS(g));c=AWQ(j,d,b.getCFloatArray8(),100,Cf([111,222,333,444,555,666,777,888]));g=J();F(F(g,C(392)),c);C4(GS(g));b=A5E(k,d,b.getCDoubleArray8(),1000,Cf([1111,2222,3333,4444,5555,6666,7777,8888]));c=J();F(F(c,C(393)),b);C4(GS(c));}
function AWQ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(394);h=0;i=e;a:{while(h<g){if(DG(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.vN[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(395);}return C(396);}
function A5E(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(394);h=0;i=e;a:{while(h<g){if(Fl(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.v3[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(395);}return C(396);}
function A4n(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(394);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Fr[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(395);}return C(396);}
function AYA(b,c,d){var e,f,g,h;e=QJ(d,b);if(!Bf(c,e))return C(397);f=0;while(f<N(e)){g=Be(e,f);h=b+f|0;if(g!=d.tj[h])return C(398);f=f+1|0;}return C(395);}
function AUG(b,c,d){var e,f,g,h;e=ZV(d,b);if(!Bf(c,e))return C(397);f=0;while(f<N(e)){g=Be(e,f);h=b+(f*2|0)|0;if(g!=(d.oP[h>>>1|0]&65535))return C(398);f=f+1|0;}return C(395);}
function C4(b){ABh(C(1),b);}
function ATU(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function H6(){var a=this;B.call(a);a.rl=null;a.vY=null;a.vg=null;}
function A_0(a,b){var c=new H6();IJ(c,a,b);return c;}
function IJ(a,b,c){var d;d=null;a.rl=b.bt;a.vY=d;a.vg=c;}
function AUN(a,b){var c;if(!AGl(b))return 0;c=a.vY;if(c!==null&&b.bw)Gh(a.rl,c);else EM(a.rl,a.vg);return 1;}
function AGl(b){return b.cb&&b.Q==79?1:0;}
function ABD(){B.call(this);this.uZ=null;}
function A3f(a,b){AOg(a.uZ,b);}
function ABC(){B.call(this);this.GU=null;}
function AVa(a,b){return AJc(a.GU,b);}
var AL2=G(0);
function APt(b){Ik(b,A8t(C(399),C(288),AFX(C(400))));}
function Wm(){B.call(this);this.u_=null;}
function AZN(a){var b,c,d,e;b=a.u_;c=b.cN;if(!(c.b2 instanceof ADT))Kf(c);else{d=BA(JV,[Is(0,1),Kj(1,9),Kj(9,12),Is(12,19),Kj(19,32),Is(32,35),Kj(35,37),Is(37,46),Kj(46,58),Is(58,70),Is(70,76)]);c=b.cN;b=null;KJ(c,LJ(d),b);b=X();c=AJy(d);e=J();F(F(e,C(401)),c);T(b,I(e));}}
function Wn(){B.call(this);this.ui=null;}
function A5J(a,b){var c,d;c=a.ui;if(b.Q==121){$rt_globals.console.info("Window.addChild is not for web");d=1;}else if(AE1(b)&&b.Q==80){T(X(),C(402));Na(c.cN.c);d=1;}else d=0;return d;}
function Wo(){B.call(this);this.IP=null;}
function AVj(a,b,c,d){var e,f;b=X();e=c.c0;f=KH(c);c=J();P(F(P(F(c,C(403)),e),C(404)),f);T(b,I(c));}
function KT(){var a=this;B.call(a);a.s=null;a.q=null;a.bb=null;a.bm=null;}
function UV(){var a=new KT();AF1(a);return a;}
function AKX(a,b,c,d){var e=new KT();ARZ(e,a,b,c,d);return e;}
function AF1(a){a.s=new Y;a.q=new Y;a.bb=new BS;a.bm=new BS;}
function ARZ(a,b,c,d,e){a.s=new Y;a.q=new Y;a.bb=new BS;a.bm=new BS;JD(a,b,c,d,e);}
function JD(a,b,c,d,e){V(a.s,b,c);V(a.q,d,e);}
function TJ(a){var b;b=a.q;return U(b.b,b.a)?0:1;}
function G4(a,b){return FH(b,a.s,a.q);}
function ADr(a,b,c,d){var e;e=a.s;Bi(b,e.b+c|0,e.a+d|0,a.q,a.bb);}
function Y4(a,b,c,d,e,f){var g,h,i,j;g=a.s;d=g.b+d|0;e=g.a+e|0;g=a.q;h=a.bm;i=a.bb;Gz(b,b.ky);GJ(b.ky,b.X,d,e,g,b.dg);Pg(b.ky,b.X,c);g=b.ky;j=b.X;FT(j,g.Au,h);FT(j,g.As,i);c=g.wl;j.uniform2f(c,f,0.0);Gb(b);}
function AMp(){KT.call(this);this.d6=null;}
function Lk(){var a=new AMp();A6M(a);return a;}
function Iv(a,b,c,d){var e=new AMp();A2B(e,a,b,c,d);return e;}
function A6M(a){AF1(a);a.d6=new BS;}
function A2B(a,b,c,d,e){AF1(a);a.d6=new BS;JD(a,b,c,d,e);}
function F7(a){var b,c;b=a.q;c=a.d6;V(b,c.S-c.ba|0,c.bd-c.bj|0);}
function F3(a,b){IW(a,0,0,Bz(b),CM(b));}
function IW(a,b,c,d,e){Cb(a.d6,b,c,d,e);}
function EV(a,b,c,d,e){var f;f=a.s;Dd(b,f.b+d|0,f.a+e|0,a.q,a.d6,c,a.bb,a.bm,0);}
function Vk(a,b,c,d){var e;e=a.s;Dd(b,e.b,e.a,a.q,a.d6,c,a.bb,a.bm,d);}
function IU(a,b,c,d,e,f,g){Dd(b,c,d,a.q,a.d6,e,!f?a.bb:a.bm,!f?a.bm:a.bb,g);}
function HO(a,b){BO(a.bb,b);}
function Fz(a,b){BO(a.bm,b);}
function WD(){B.call(this);this.gm=null;}
function A0g(a,b){var c,d,e,f,g,h;c=b.i;d=c.b;e=a.gm.iT;f=e.q;d=d-f.b|0;g=c.a-f.a|0;V(e.s,d,g);c=a.gm;e=c.p.bt;b=b.i;d=0;a:{while(true){h=c.kD.data;if(d>=h.length)break;if(G4(h[d],b)){b=c.tu.data[d];break a;}d=d+1|0;}b=null;}OC(e,b);return 1;}
function AQF(a,b,c,d){if(!c&&d==2){b=a.gm;UW(b,b.e4);}return 1;}
function AZ$(a,b,c){var d,e;d=X();e=J();P(F(e,C(405)),c);T(d,I(e));if(c)return null;d=b.i;e=!G4(a.gm.e4,d)?null:d;AB8(a.gm.la,d.b,d.a);b=a.gm;ABJ(b.la,HF(b.p.bt));if(e===null)b=A$6;else{b=new AGc;b.wf=a;b.wg=e;}return b;}
function AZz(a,b,c){var d;b=X();d=J();P(F(d,C(406)),c);T(b,I(d));return 1;}
function AB2(){B.call(this);this.HB=null;}
function A1L(a,b){return AAc(a.HB,b);}
function AB1(){B.call(this);this.vL=null;}
function AS1(a,b){return AAc(a.vL,b);}
function AB0(){B.call(this);this.Jg=null;}
function A2O(a,b,c){var d,e;T(X(),C(407));d=!c?C(408):C(51);e=J();F(F(F(e,C(409)),d),C(410));OV(b,I(e));return 1;}
function ABZ(){B.call(this);this.J9=null;}
function AY7(a){T(X(),C(411));}
function ABY(){B.call(this);this.KP=null;}
function AVC(a,b){T(X(),C(412));return 1;}
function ABX(){B.call(this);this.F1=null;}
function A58(a,b,c,d){var e,f,g;b=a.F1;e=( -d|0)/10|0;b=b.e4;f=b.q;f.b=f.b+e|0;f.a=f.a+e|0;b=b.s;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
var ALv=G(0);
function En(b){return !b?BA(BH,[C(150),C(161),C(413)]):BA(BH,[C(150),C(161),C(413),C(27)]);}
function ZM(){B.call(this);this.oi=null;}
function ASI(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.oi.dS;e=D1();f=e-0.5+(D1()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+D1()*0.3;h=0.5+D1()*0.5;IS(e,g,h,1.0,b.bb);IS(f,g,h,1.0,b.bm);b=a.oi;BO(b.ey.bb,b.dS.bb);b=a.oi;BO(b.ey.bm,b.dS.bm);}return 1;}
function ZI(){var a=this;B.call(a);a.p_=null;a.qN=null;}
function AKL(){var a=this;B.call(a);a.hd=null;a.cE=null;a.id=null;a.jm=null;a.qk=null;a.cU=null;a.jb=null;a.dx=0;a.hg=0;a.qK=0;a.ma=0;a.mr=0;a.ji=0;a.mO=null;a.rQ=null;a.A7=null;a.p8=null;}
function AOt(){var a=new AKL();AW2(a);return a;}
function AW2(a){a.cE=UV();a.id=new Y;a.jm=new Y;a.cU=A_1;a.ma=(-1);a.mr=1;}
function Om(a,b){Pq(a);a.cU=b;}
function J8(a,b,c){a.hd=b;AGS(a,c);Pq(a);}
function Ka(a,b){var c;a.qk=b.nw;c=b.rV.sA;BO(a.cE.bb,c);c=b.kS.li;BO(a.cE.bm,c);a.p8=b.rV;}
function NJ(a){a.jb=BI(a.jb,null);V(a.id,0,0);a.cU=A_1;a.ma=(-1);V(a.cE.q,0,0);}
function AGS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KO(b);d=b.cf;Bs(a.hd);Cm(c,a.hd);e=HW(a.hd,1.25);f=0;a.dx=BF(2.0,d);a.hg=BF(3.0,d);a.qK=BF(12.0,d);g=0;h=a.cU.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=TS(c,l.pU);n=a.qK;n=(n+m|0)+n|0;f=Z(f,n);b=l.ga;b.b=g;b.a=0;b=l.ff;b.b=n;b.a=e;Cb(l.l6,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.id;b.b=g;b.a=e;b=a.cE.q;n=a.ji;if(!n){m=a.dx;m=(g+m|0)+U(m,a.cU.data.length)|0;}else m=(f+(a.dx*2|0)|0)+(a.hg*2|0)|0;b.b=m;if(!n)e=e+(a.dx*2|0)|0;else{n=a.dx;e=(U(e+n|0,a.cU.data.length)+n|0)
+(a.hg*2|0)|0;}b.a=e;}
function Oh(a,b,c){var d,e,f,g,h,i,j;V(a.cE.s,b,c);d=a.dx+a.hg|0;e=a.cU.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.ga;j.b=b+d|0;j.a=c+h|0;if(!a.ji){if(!i.ff.b)AI1();d=d+(i.ff.b+a.dx|0)|0;}else{if(!i.ff.a)AI1();h=h+(i.ff.a+a.dx|0)|0;}g=g+1|0;}}
function AI1(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EO(a){var b,c;b=a.id;if(b.b&&b.a)return a.cE.q;c=new Bt;Bd(c,C(414));L(c);}
function Pq(a){a.mr=1;}
function M2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bM;if(!a.cU.data.length)return;if(a.jb===null)a.jb=CS(c);a:{if(!a.mr){d=a.id;if(U(d.b,d.a))break a;}d=a.id;if(!U(d.b,d.a))AGS(a,b);d=a.id;e=d.b;f=d.a;if(!U(e,f))return;d=Ef(c,e,f,b.cO);Cm(d,a.hd);g=HW(a.hd,0.125);h=a.hd;i=h.er;g=g+i-(i+h.eQ)/16.0;j=a.cU.data;e=j.length;f=0;while(f<e){h=j[f];BX(d,h.pU,h.l6.ba+a.qK,g);f=f+1|0;}Da(a.jb,d);a.mr=0;Em(d);}if(!TJ(a.cE)){d=a.cE;Od(c,d.q,d.s,d.bm,a.dx,a.jm);d=a.cE;h=d.q;k=d.s;d=d.bb;e=a.dx;l=a.jm;l.b=(h.b-e|0)-e|0;l.a
=(h.a-e|0)-e|0;Bi(c,k.b+e|0,k.a+e|0,l,d);if(a.ji){d=a.cE;AO8(c,d.q,d.s,0,0,ABn(a.qk,b.cf),a.qk.qs,a.jm);}}j=a.cU.data;m=j.length;n=0;while(n<m){d=j[n];h=d.ga;e=h.b;f=h.a;h=d.ff;k=d.l6;l=a.jb;o=a.p8;Dd(c,e,f,h,k,l,o.u4,Ys(o,d.na),b.cO);n=n+1|0;}b:{if(a.ji){j=a.cU.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.jm;e=(a.cE.q.b-(a.dx*2|0)|0)-(a.hg*2|0)|0;h=d.ff;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.ga;Bi(c,k.b+h.b|0,k.a,b,Ys(a.p8,d.na));}p=p+1|0;}}}}
function OW(a,b,c){var d,e,f,g,h,i;d=G4(a.cE,b);e=!d?(-1):Rb(a,b);f=a.ma;if(f!=e){if(f>=0){g=a.cU.data[f];g.na=0;if(a.A7!==null){h=X();g=BL(g);i=J();F(F(P(F(i,C(415)),f),C(416)),g);T(h,I(i));}}if(e>=0){h=a.cU.data[e];g=a.rQ;if(g!==null)g.Ba(b,e,h);h.na=1;}a.ma=e;}return d&&EN(c)?1:0;}
function Pw(a,b,c,d){var e,f;e=Rb(a,b);if(e>=0){f=a.cU.data[e];if(!AF5(f))f.o$.d();}return 1;}
function Rb(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cU.data;if(c>=d.length)return (-1);e=d[c];if(FH(b,e.ga,e.ff))return c;if(a.ji){f=e.ga;g=f.b;e=e.ff;h=e.b;g=g+h|0;i=f.a;f=a.jm;f.b=(a.cE.q.b-(a.dx*2|0)|0)-h|0;f.a=e.a;if(RL(b,g,i,f))break;}c=c+1|0;}return c;}
function AIB(a){a.ji=1;}
function AFq(){B.call(this);this.yH=null;}
function AUH(a,b){var c;c=a.yH;if(b.Q==32)NJ(c.ec);return 0;}
function AFl(){B.call(this);this.zP=null;}
function AWT(a,b){var c,d,e,f;c=a.zP;d=ACh(c.w);Hx(d,EZ(),c.q_);b=b.i;e=TY(4);f=new Xy;f.Ji=c;Np(d,b,e,f);HS(c.k,d);return 1;}
var AFm=G();
function A7m(a){T(X(),C(417));}
var AFo=G();
function ARm(a){T(X(),C(418));}
function Bn(){var a=this;B.call(a);a.o$=null;a.l6=null;a.ga=null;a.ff=null;a.ps=null;a.xl=null;a.na=0;a.pU=null;}
function AAj(a,b){var c=new Bn();BT(c,a,b);return c;}
function A8P(a,b,c,d){var e=new Bn();AN_(e,a,b,c,d);return e;}
function BT(a,b,c){AN_(a,b,c,null,null);}
function AN_(a,b,c,d,e){a.l6=new BS;a.ga=new Y;a.ff=new Y;a.pU=c;a.xl=e;a.o$=b;a.ps=d;}
function AF5(a){return a.ps===null?0:1;}
function Xj(){B.call(this);this.H_=null;}
function AYx(a,b){return b.h4&&b.Q==32?1:0;}
function Xm(){B.call(this);this.Gv=null;}
function AQ3(a,b){var c,d,e,f,g,h;c=a.Gv;d=ACh(c.w);Hx(d,EZ(),Dk(C(150),25.0));b=b.i;e=K(Bn,1);f=e.data;g=new Bn;h=new AIl;h.GT=c;BT(g,h,C(419));f[0]=g;Np(d,b,Cx(e),A_2);HS(c.k,d);return 1;}
function AL_(){var a=this;B.call(a);a.sL=0;a.sM=0;}
function Hq(){var a=new AL_();AXN(a);return a;}
function YC(a,b){var c=new AL_();AP9(c,a,b);return c;}
function AXN(a){AP9(a,APO(DV((ALr()))),DV((ALr()))^(-559038737));}
function AP9(a,b,c){var d;a.sL=b;a.sM=c;d=0;while(d<19){H8(a);d=d+1|0;}}
function H8(a){var b,c;b=a.sL;c=a.sM;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.sL=c;a.sM=b;return b;}
function APO(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function APp(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function CC(a,b){return M0(a)*b|0;}
function M0(a){return 5.960464477539063E-8*(H8(a)&16777215);}
function Vo(a,b){var c,d,e,f;b=b.data;c=b.length;d=(c/4|0)*4|0;e=0;while(e<d){f=H8(a);b[e]=f<<24>>24;b[e+1|0]=(f>>>8|0)<<24>>24;b[e+2|0]=(f>>>16|0)<<24>>24;b[e+3|0]=(f>>>24|0)<<24>>24;e=e+4|0;}a:{if(d<c){f=H8(a);while(true){if(d>=c)break a;b[d]=f<<24>>24;f=f>>>8|0;d=d+1|0;}}}}
function GX(a,b){var c,d,e;c=APp(H8(a));d=AWK( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function QM(){B.call(this);this.CP=null;}
function AVl(a,b,c){var d;d=a.CP;if(b===0.0)MU(d,100);}
function QL(){B.call(this);this.z3=null;}
function ATw(a,b){var c,d,e;c=a.z3;d=b.Q;if(d==32){c.nD=c.nD?0:1;e=1;}else if(d==13){MU(c,1);e=1;}else if(d!=8)e=0;else{Rm(c,1);e=1;}return e;}
var AC8=G(0);
function AMQ(b,c){var d;d=new XE;d.Cw=b;d.Cv=c;return d;}
function AMW(){var a=this;B.call(a);a.i4=null;a.jH=0;a.nO=0;a.iH=0;}
function AM9(a){var b=new AMW();ASQ(b,a);return b;}
function ASQ(a,b){a.i4=BQ();a.iH=0;a.nO=2048;a.jH=b;}
function K0(a,b,c){var d,e,f,g,h,i;d=c.D3(b);e=a.nO;if(d>e){c=new Bt;f=J();Bj(P(F(P(F(f,C(420)),d),C(421)),e),41);Bd(c,I(f));L(c);}if(!a.jH){b=new Bq;Bd(b,C(422));L(b);}a:{b=new BS;if(d){b:{c=a.i4;if(c.l>0){c=B4(c);g=d;while(true){if(!B6(c))break b;f=B7(c);if(f.S>=g)break;}Cb(b,f.ba,f.bj,g,a.jH);f.ba=f.ba+g;h=f.S-g;f.S=h;if(h===0.0)ALS(a.i4,f);break a;}}g=a.iH;i=d;Cb(b,0.0,g,i,a.jH);Bp(a.i4,AH8(i,a.iH,a.nO-d|0,a.jH));a.iH=a.iH+a.jH|0;}}return b;}
function Jl(a,b){var c,d,e,f,g,h,i;a:{c=AP7(b);b=a.i4;if(b.l>0){d=B4(b);while(true){if(!B6(d))break a;e=B7(d);if(e.bj===c.bj){f=e.ba;g=e.S;h=f+g;i=c.ba;if(h===i){c.ba=f;c.S=c.S+g;Ov(d);}else{h=c.S;if(i+h===f){c.S=h+g;Ov(d);}}}}}}Bp(a.i4,c);}
function Nz(a){return BR(a.nO,a.iH);}
function ABs(){B.call(this);this.Dq=null;}
function A3N(a,b){var c;c=a.Dq;c.gF=EU(b,AEa(c));}
function XK(){B.call(this);this.rc=null;}
function A3d(a,b,c){var d;if(c)return A$6;d=a.rc;return EX(d.jE,b.i,d.vP,1);}
function AW$(a,b,c){return 1;}
function A6E(a,b){var c;c=a.rc;return E0(c.jE,b.i,c.Ey);}
function ABt(){B.call(this);this.zr=null;}
function A0X(a,b,c,d){var e,f;b=a.zr;e=(E2(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.gF=Bc(Z(0,b.gF+U(e,f)|0),AEa(b));return 1;}
var PZ=G(0);
var A_3=null;var A_4=null;function Lb(b){GD(b,A_3,A_4);}
function AKI(){A_3=Ed(40,40,40,200);A_4=Ed(43,43,43,128);}
function SF(){B.call(this);this.wB=null;}
function AU$(a,b){return UD(a.wB,b.i);}
function SE(){B.call(this);this.Fu=null;}
function AYE(a,b,c){var d,e;d=a.Fu;if(b===0.0){e=d.k.m.bD;UD(d,BR(e.b/3|0,e.a/3|0));}}
function TL(){B.call(this);this.CS=null;}
function AYy(a,b){var c,d,e,f,g,h,i,j,k;c=a.CS;d=c.k;e=EZ();f=Dk(C(150),25.0);g=b.i;h=K(Bn,5);i=h.data;b=new Bn;j=new WR;j.uJ=c;BT(b,j,C(423));i[0]=b;b=new Bn;j=new WS;j.vF=c;BT(b,j,C(424));i[1]=b;b=new Bn;j=new WT;j.w$=c;BT(b,j,C(425));i[2]=b;b=new Bn;j=new WU;j.Cc=c;BT(b,j,C(426));i[3]=b;b=new Bn;k=new WV;k.CR=c;BT(b,k,C(427));i[4]=b;E1(d,e,f,g,Cx(h));return 1;}
function TK(){B.call(this);this.E_=null;}
function A45(a,b){var c,d,e;c=a.E_.p.bt.cS;d=new AAV;e=K(B,1);e.data[0]=b;Dg(c,d,C(428),e);}
function QE(){B.call(this);this.qQ=null;}
function A6n(a,b){var c,d,e,f,g,h;c=a.qQ;d=c.r0;if(d!==null){e=c.f0.s;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.r0=g;}b=b.i;f=b.b;c=c.h2;d=c.q;f=f-d.b|0;h=b.a-d.a|0;V(c.s,f,h);return 1;}
function AQY(a,b,c){var d;if(!c){d=b.i;b=a.qQ;if(!G4(b.f0,d))d=null;b.r0=d;}return A$6;}
var AKU=G();
function AQc(b){var c,d;c=HZ(b,250,64);HJ(c,C(333),25.0);Kw(c,187,187,187);BX(c,C(429),0.0,24.0);BX(c,C(429),0.25,56.0);d=CS(b);Da(d,c);Em(c);return d;}
function ABE(){var a=this;B.call(a);a.tP=null;a.nX=null;}
function ATE(a,b,c){var d;if(!c){d=EX(a.nX.kh,b.i,a.tP,1);if(d!==null)return d;}return A$6;}
function AZu(a,b,c){return 1;}
function ASM(a,b){var c;c=a.nX;E0(c.kh,b.i,I6(c.p.bt));return 0;}
function Za(){B.call(this);this.uH=null;}
function A56(a,b,c,d){var e,f;b=a.uH;e=(E2(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.gD=Bc(Z(0,b.gD+U(e,f)|0),ADR(b));return 1;}
function AHv(){B.call(this);this.A6=null;}
function ATH(a,b){var c,d;a:{c=a.A6;switch(b.Q){case 67:Se(c);d=1;break a;case 86:ADq(c);d=1;break a;default:}d=0;}return d;}
var AHu=G();
function A2X(a,b,c){return 0;}
function AHt(){B.call(this);this.vW=null;}
function ASa(a,b,c){var d,e;d=a.vW;c=d.eV+1|0;d.eV=c;d=Gx(H(KW));e=J();F(F(P(e,c),C(430)),d);e=I(e);$rt_globals.console.info($rt_ustr(e));OV(b,e);return 1;}
var AHs=G();
function AUx(a){return null;}
function AHw(){B.call(this);this.ES=null;}
function A5B(a){var b,c;b=a.ES;c=new YR;c.tK=b;return c;}
function UA(){B.call(this);this.JJ=null;}
function AR4(a,b){return 0;}
function Rd(){B.call(this);this.D0=null;}
function A3P(a,b){var c;c=a.D0;if(b.h4&&b.Q==27){b=AHL(c.k);if(b!==null)JX(b);}return 0;}
function Rf(){B.call(this);this.z0=null;}
function A12(a,b){var c,d,e,f,g,h,i;c=a.z0;d=ACh(c.w);Hx(d,EZ(),Dk(C(150),25.0));b=b.i;e=K(Bn,2);f=e.data;g=new Bn;h=c.k;i=new AAM;i.Dz=c;BT(g,C6(h,i),C(431));f[0]=g;h=new Bn;i=c.k;g=new AAN;g.zD=c;BT(h,C6(i,g),C(432));f[1]=h;Np(d,b,Cx(e),A_2);HS(c.k,d);return 1;}
function APX(){var a=this;B.call(a);a.cG=null;a.e9=null;a.y3=0.0;a.pi=null;a.lM=null;a.iD=null;a.z1=null;a.fh=null;a.fJ=null;a.ku=null;a.w4=null;a.is=0;a.fK=0;a.sT=0;a.rS=0;a.fb=0;a.hk=0;a.hR=0;a.p1=0;a.fY=0;a.vw=null;a.pL=null;}
function AQZ(){var a=new APX();A2J(a);return a;}
function APk(a){var b=new APX();AUA(b,a);return b;}
function A2J(a){a.cG=new Y;a.e9=new Y;a.ku=new Y;a.w4=new Y;a.fb=(-1);a.hk=(-1);a.hR=1;a.p1=0;}
function AUA(a,b){a.cG=new Y;a.e9=new Y;a.ku=new Y;a.w4=new Y;a.fb=(-1);a.hk=(-1);a.hR=1;a.p1=b;}
function HU(a,b,c,d,e,f){V(a.cG,b,c);V(a.e9,d,e);a.y3=f;}
function OU(b){return !b?8810:8811;}
function AMm(b){return !b?10006:10004;}
function HA(a,b,c){a.is=b;a.vw=c;Ll(a);}
function IO(a,b,c){a.iD=c;a.pi=b;a.lM=null;}
function Y0(a,b,c){a.iD=c;a.lM=b;a.pi=null;}
function JB(a){return a.lM===null?0:1;}
function EY(a,b){if(b===null)b=CG(0);a.z1=b;}
function Ii(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(a.p1){i=a.cG;Bi(e,i.b,i.a,a.e9,f.nC);}a.sT=b;a.rS=c;if(a.iD===null)return;j=JB(a);if(a.fh===null)a.fh=Ud(a,e,g.gk,a.fY,4.0,!j?4.0:2.0);if(j&&a.fJ===null)a.fJ=Ud(a,e,g.gk,10004,2.0,4.0);H9(e,a.cG,a.e9);k=a.cG.b;V(a.ku,Bz(a.fh)+(!j?0:Bz(a.fJ))|0,a.is);l=f.lL;m=f.Hc;n=a.fY;o=n!=10004?0:1;n=n!=10006?0:1;p=b;while(p<=c){q=(a.cG.a+U(p,a.is)|0)-a.fK|0;r=h===null?p:h.data[p-b|0];a:{if(r>=0){s=a.z1.data;if(r<s.length){t=s[r];break a;}}t=0;}i=t&&l!==
null?GH(l,t,null):f.nC;if(!(r>=0&&DB(a.iD,r)>=0?1:0))Bi(e,k,q,a.ku,i);else{u=t&&m!==null?GH(m,t,null):f.tB;v=a.fb==r&&a.hR?1:0;b:{c:{if(v){if(f.lL===null)break c;if(!t)break c;}w=i;break b;}w=f.sN;}x=v&&o?f.o7:v&&n?f.sY:u;Kp(g,e,a.fh,k,q,w,x);if(j){y=a.fb==r&&!a.hR?1:0;d:{e:{if(y){if(f.lL===null)break e;if(!t)break e;}break d;}i=f.sN;}if(y&&o)u=f.sY;else if(y&&n)u=f.o7;Kp(g,e,a.fJ,k+Bz(a.fh)|0,q,i,u);}}p=p+1|0;}EA(e);q=U(c+1|0,a.is)-a.fK|0;b=a.e9.a;if(q<b){g=a.ku;g.a=b-q|0;i=f.nC;Bi(e,k,a.cG.a+q|0,g,i);}}
function G6(a,b,c,d,e){var f,g;f=a.cG.a;g=a.is;return AOG(b,d,(f+U(c,g)|0)-a.fK|0,e,g);}
function G7(a,b,c){var d,e,f,g,h,i,j,k,l;a.fb=(-1);d=b.i;if(!OZ(a,d))return 0;b=a.fh;e=b===null?0:Bz(b);b=a.fJ;f=b===null?0:Bz(b);g=a.cG.b;h=a.iD.data;i=h.length;j=0;while(j<i){k=h[j];l=Pc(a,k);if(l>=0&&a.sT<=l&&l<=a.rS&&G6(a,d,l,g,e+f|0)){a.hR=JB(a)&&!G6(a,d,l,g,e)?0:1;a.fb=k;return CH(c,C(276));}j=j+1|0;}return EN(c);}
function Hg(a,b,c,d){var e,f,g,h,i,j,k;if(c)return null;if(!OZ(a,b.i))return null;e=a.cG.b;f=a.fh;g=f===null?0:Bz(f);f=a.fJ;h=f===null?0:Bz(f);i=0;while(true){j=a.iD.data;if(i>=j.length){a.hk=(-1);a.fb=(-1);return A$6;}k=Pc(a,j[i]);if(k>=0&&a.sT<=k&&k<=a.rS&&G6(a,b.i,k,e,g+h|0)?1:0)break;i=i+1|0;}a.hk=i;EN(d);return A$6;}
function Pc(a,b){var c;c=a.pL;if(c!==null)b=c.k6(b);return b;}
function GV(a,b,c){var d,e,f,g,h,i;d=null;e=null;if(!c){c=a.fb;if(c>=0){f=Pc(a,c);g=b.i;b=a.fh;h=b===null?0:Bz(b);b=a.fJ;i=b===null?0:Bz(b);if(f>=0&&G6(a,g,f,a.cG.b,h+i|0)){if(!JB(a))d=a.pi.data[a.hk];else if(a.hR==G6(a,g,f,a.cG.b,h))e=a.lM.data[a.hk];}}}a.hk=(-1);a.fb=(-1);if(d!==null)d.d();if(e!==null){c=a.hR;b=e.AY;f=e.AX;e=X();i=b.Ac+1|0;b.Ac=i;b=J();P(F(FG(F(P(Bj(b,91),i),C(433)),c),C(434)),f);T(e,I(b));}return d===null?0:1;}
function OZ(a,b){return FH(b,a.cG,a.e9);}
function Ud(a,b,c,d,e,f){var g,h,i;g=Dy(d);h=a.vw;i=a.y3;return Pd(b,g,h,e*i,f*i,a.is,0,c);}
function Iw(a,b,c,d){var e,f;if(!JB(a)){e=8.0*d;return GK(c,b,Dy(a.fY),e);}f=6.0*d;return GK(c,b,Dy(a.fY),f)+GK(c,b,Dy(10004),f)|0;}
function Ll(a){a.fh=T9(a.fh);a.fJ=T9(a.fJ);}
function A0I(a){Ll(a);}
function AGv(){B.call(this);this.ts=null;}
function A4a(a,b){var c,d,e;c=a.ts;c.g7=EU(b,AHQ(c));b=X();d=c.g7;e=d+c.hn|0;c=J();P(F(P(F(c,C(435)),d),C(436)),e);T(b,I(c));}
function AGw(){B.call(this);this.Ak=null;}
function AX4(a,b,c,d){var e,f;b=a.Ak;e=(E2(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.g7=Bc(Z(0,b.g7+U(e,f)|0),AHQ(b));return 1;}
function AGx(){B.call(this);this.KF=null;}
function A6x(a,b){return 0;}
function GQ(){var a=this;B.call(a);a.cI=null;a.cC=null;}
function JL(a){var b=new GQ();AKS(b,a);return b;}
function AKS(a,b){a.cC=K(Q,b);a.cI=BC(b);}
function AVJ(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;h=0;i=b.H.data;j=i.length;k=0;while(k<j){if(i[k].ca)h=h+1|0;k=k+1|0;}l=JL(!d?h:0);m=JL(!c?h:0);if(c&&d)h=0;n=K(GW,h);o=n.data;p=0;i=b.H.data;q=i.length;r=0;while(r<q){s=i[r];if(s.ca){t=DB(e,D8(s));u=DB(f,Ea(s));if(t<0)t=( -t|0)-1|0;if(u<0)u=( -u|0)-1|0;if(!d){j=s.W;if(s.ca==1&&t>u)j=j+(-1)|0;l.cI.data[p]=Lp(j,b.dr.data.length);v=l.cC.data;w=new SI;w.F8=g;w.F7=s;v[p]=w;if(p>0){v=l.cI;x=v.data;j=p-1|0;if(x[j]>x[p]){ANT(v,p,j);AEk(l.cC,p,j);}}}if
(!c){k=s.V;if(s.ca==2&&u>t)k=k+(-1)|0;m.cI.data[p]=Lp(k,b.ds.data.length);v=m.cC.data;w=new SG;w.xo=g;w.xm=s;v[p]=w;if(p>0){v=m.cI;x=v.data;h=p-1|0;if(x[h]>x[p]){ANT(v,p,h);AEk(m.cC,p,h);}}}y=m.cC.data[p];z=l.cC.data[p];w=new SH;w.Kj=y;w.Kk=z;o[p]=w;p=p+1|0;}r=r+1|0;}return AJ6(BA(GQ,[l,m]),n);}
function ATK(b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u;if(h)j=JL(0);else{k=0;l=0;while(l<b.dr.data.length){if(Jq(c.data[l]))k=k+1|0;l=l+1|0;}j=JL(k);m=0;n=0;while(m<b.dr.data.length){o=c.data[m];if(Jq(o)){p=e.data;j.cI.data[n]=Lp(m,b.dr.data.length);q=j.cC.data;r=new TB;r.CA=o;r.CB=i;q[n]=r;p[m]=b.dr.data[m].c$<<24>>24;n=n+1|0;}m=m+1|0;}}if(g)s=JL(0);else{t=0;l=0;while(l<b.ds.data.length){if(Jq(d.data[l]))t=t+1|0;l=l+1|0;}s=JL(t);m=0;n=0;while(m<b.ds.data.length){r=d.data[m];if(Jq(r)){q=f.data;s.cI.data[n]
=Lp(m,b.ds.data.length);c=s.cC.data;u=new TA;u.Df=r;u.Dg=i;c[n]=u;q[m]=b.ds.data[m].c$<<24>>24;n=n+1|0;}m=m+1|0;}}return BA(GQ,[j,s]);}
function AK8(b,c,d){if(d===null)return;d.fp(b,HP(c));}
function Lp(b,c){return DS(0,b,c-1|0);}
function AKw(){GQ.call(this);this.FE=0;}
function AYS(a,b){var c=new AKw();AZq(c,a,b);return c;}
function AZq(a,b,c){var d,e,f,g,h,i;AKS(a,b/4|0);d=a.cI.data.length;e=b/(1+d|0)|0;f=0;g=0;while(f<d){a.cI.data[f]=g;h=a.cC.data;i=new Sp;i.zp=a;i.zt=g;h[f]=i;g=g+(1+CC(c,e)|0)|0;f=f+1|0;}}
function Ns(){var a=this;B.call(a);a.oE=null;a.sj=null;}
function Tn(){Ns.call(this);this.Ac=0;}
function RG(){B.call(this);this.wE=null;}
function A5$(a,b){L9(LC(a.wE),b);}
function RF(){B.call(this);this.zE=null;}
function A1e(a,b){var c,d,e,f,g,h;c=a.zE;d=K(Bn,1);e=d.data;f=new Bn;g=c.k;h=new AA9;h.yV=c;BT(f,C6(g,h),C(377));e[0]=f;f=Cx(d);g=c.k;c=c.oM;E1(g,c.ch,c.gr,b.i,f);return 1;}
function SZ(){var a=this;B.call(a);a.m8=0;a.m9=0;}
function XP(){var a=this;B.call(a);a.rM=0.0;a.jD=null;a.Bu=null;a.BY=null;a.z5=null;a.xi=null;a.Hh=null;a.y9=null;a.Jt=null;a.Gq=null;}
function AQp(){var b;b=new BS;Me(b,1.0);return b;}
function ST(){B.call(this);this.GM=null;}
function ARg(a,b){var c;a:{c=a.GM;if(b.h4){switch(b.Q){case 37:break;case 38:c.m9=c.m9-1|0;break a;case 39:c.m8=c.m8+1|0;break a;case 40:c.m9=c.m9+1|0;break a;default:break a;}c.m8=c.m8-1|0;}}return 0;}
function Oq(){var a=this;DM.call(a);a.ek=null;a.vO=null;a.bv=null;a.dC=null;a.dJ=null;a.jP=null;a.pG=0;a.n6=0;a.qj=0.0;a.G$=0;}
function A_5(a,b,c){var d=new Oq();Sk(d,a,b,c);return d;}
function Sk(a,b,c,d){var e,f;Im(a,c,b,d);a.n6=0;a.G$=0;c=APL(a.v.m);a.bv=c;PC(c,b);e=Ff(C(213),0);f=Ff(C(214),0);Ev(e);Ev(f);b=new U8;b.wo=a;e.cy=b;b=new U6;b.zn=a;f.cy=b;D_(a.bv.bW,e);D_(a.bv.bV,f);c=II(a,a.bv,0.0);a.ek=c;b=new U7;b.Ci=a;c.iI=b;b=new U5;b.EF=a;c.iF=b;DY(a.v,c);N_();a.jP=A_6;}
function ARK(a){var b;a.ek=null;a.bv=null;b=null;a.dJ=b;a.dC=b;}
function A1_(a,b){var c,d,e,f;if(Cd(a.bv.bW,b))return ADG(a,1,C(213));if(Cd(a.bv.bV,b))return ADG(a,0,C(214));c=K(Bn,2);d=c.data;b=new Bn;e=new AEz;e.GP=a;BT(b,e,C(213));d[0]=b;b=new Bn;f=new AEA;f.E1=a;BT(b,f,C(214));d[1]=b;return Cx(c);}
function ADG(a,b,c){var d,e,f,g;d=K(Bn,1);e=d.data;f=new Bn;g=new AHK;g.uv=a;g.uw=b;BT(f,g,c);e[0]=f;return Cx(d);}
function O7(a,b){var c,d,e,f,g,h,i,j,k;c=a.bv;if(c.bW!==null&&c.bV!==null){if(a.dC!==null&&a.dJ!==null){a.n6=a.n6+1|0;Pr(a);d=Ft(a.bv.bW);e=Ft(a.bv.bV);Ko(a.bv,AJ3(d,e));SC(a.bv,null);Dt(a.ek.M.bk);if(Fv(a.jP)){f=HF(a.ek.M.bk)-a.qj;if(!a.pG){b=b.data;g=CZ(a.dC);c=CZ(a.dJ);h=Fl(f);i=b[0];j=b[1];k=J();P(F(P(F(P(F(F(F(F(k,g),C(437)),c),C(438)),h),C(439)),i),C(440)),j);g=I(k);CN(a.ek,g);a.pG=1;b=(BY(a.bv.zb)).data;j=b.length;h=0;while(h<j){b[h].f5(1);h=h+1|0;}}c=X();j=Fl(1000.0*f);g=J();F(P(F(g,C(441)),j),C(442));T(c,
I(g));c=X();j=a.n6;g=J();P(F(g,C(443)),j);T(c,I(g));}return;}return;}}
function Pr(a){var b;Jm(a.bv.bW,a.jP,a.dJ,1);Jm(a.bv.bV,a.jP,a.dC,2);b=a.bv;Ko(b,AJ3(Ft(b.bW),Ft(a.bv.bV)));SC(a.bv,null);ABV(a,a.bv.bW,1);ABV(a,a.bv.bV,0);}
function ABV(a,b,c){var d,e;d=(Ft(b)).data.length;e=AYS(d,Hq());Mp(b,e.cC,e.cI,CG(d),c);}
function Io(a,b){var c,d;c=a.v.m.bk;d=new AIs;d.DV=a;d.DU=b;Gh(c,d);}
function Rn(){B.call(this);this.LQ=null;}
function A5T(a){return En(0);}
function Rh(){B.call(this);this.GN=null;}
function A4f(a,b){var c,d,e;c=a.GN;d=c.hp;if(d!==null){e=new AEs;e.Hu=c;e.Hv=b;IH(d,b,e);}}
function Ri(){B.call(this);this.DW=null;}
function A5U(a,b){var c,d,e;c=a.DW;if(LQ(c.w,c.hp)){d=c.og;b=b.i;e=c.hp;SA(d,b,e,c,e,c,new AAa);}return 1;}
function SK(){B.call(this);this.GA=null;}
function AVW(a,b){var c,d,e,f,g,h,i,j,k;c=a.GA;d=c.k;e=c.rP;f=e.ch;g=e.gr;h=b.i;i=K(Bn,4);j=i.data;b=new Bn;e=new AAq;e.vj=c;BT(b,C6(d,e),C(444));j[0]=b;b=new Bn;e=c.k;k=new AAo;k.us=c;BT(b,C6(e,k),C(445));j[1]=b;b=new Bn;e=c.k;k=new AAn;k.xS=c;BT(b,C6(e,k),C(446));j[2]=b;e=new Bn;k=c.k;b=new AAp;b.DM=c;BT(e,C6(k,b),C(447));j[3]=e;E1(d,f,g,h,Cx(i));return 1;}
function SJ(){B.call(this);this.IK=null;}
function A2q(a,b){return b.Q!=32?0:1;}
function WF(){B.call(this);this.Ef=null;}
function A3C(a,b){return AFj(a.Ef,b.i);}
function AAP(){B.call(this);this.CX=null;}
function ASw(a,b){var c,d,e,f,g,h;c=a.CX;d=K(Bn,1);e=d.data;f=new Bn;g=c.k;h=new Uk;h.Cm=c;BT(f,C6(g,h),C(376));e[0]=f;f=Cx(d);g=c.k;c=c.pl;E1(g,c.ch,c.gr,b.i,f);return 1;}
function XR(){B.call(this);this.xs=null;}
function AUD(a,b){var c,d,e;c=a.xs;c.jG=EU(b,AB4(c));b=X();d=c.jG;e=d+c.gB.q.a|0;c=J();P(F(P(F(c,C(435)),d),C(436)),e);T(b,I(c));}
function XQ(){B.call(this);this.AA=null;}
function AX5(a,b,c,d){var e,f;b=a.AA;e=(E2(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.jG=Bc(Z(0,b.jG+U(e,f)|0),AB4(b));return 1;}
function Xq(){B.call(this);this.H8=null;}
function AV7(a,b){return 1;}
function Xp(){B.call(this);this.xP=null;}
function A5Y(a,b){var c,d;c=a.xP;if(b.Q!=32)d=0;else{Ko(c.gP,ANj());d=1;}return d;}
var AK2=G();
var AA6=G(0);
var ABi=G();
function A1I(a,b,c){var d,e;d=b;e=c;b=J();P(F(P(F(b,C(448)),d),C(449)),e);C4(I(b));return d+e|0;}
var AA7=G(0);
var ABg=G();
function A2m(a,b,c){var d,e;d=b;e=c;b=J();Dj(F(Dj(F(b,C(450)),d),C(449)),e);C4(I(b));return d+e;}
var AJv=G();
var AMT=G(0);
function APz(){var a=this;B.call(a);a.md=null;a.rK=null;a.g1=null;a.Lx=null;}
function AFX(a){var b=new APz();A5e(b,a);return b;}
function A5e(a,b){var c,d,e;c=null;d=null;e=null;a.md=c;a.rK=d;a.g1=b;a.Lx=e;}
function AGg(a){var b,c;b=a.g1;if(b===null)return C(20);c=AJ8(b,C(451));return c==(-1)?a.g1:C0(a.g1,c+1|0);}
function A0z(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return BN(a.md,c.md)&&BN(a.rK,c.rK)&&BN(a.g1,c.g1)?1:0;}return 0;}
function Yi(){B.call(this);this.qU=null;}
var A_1=null;function Mk(){var a=new Yi();ANr(a);return a;}
function ANr(a){a.qU=BQ();}
function Dv(a,b,c){N5(a,Cy(b,c));}
function Cy(b,c){return AAj(c,b);}
function Fc(a,b,c){Jp(a,b,c,null);}
function Jp(a,b,c,d){N5(a,A8P(null,b,c,d));}
function N5(a,b){Bp(a.qU,b);}
function G_(a){return Cx(E5(a.qU,A_1));}
function AMX(){A_1=K(Bn,0);}
var D4=G(0);
var A_a=null;var A_b=null;var A$9=null;var A$$=null;var A$_=null;var A_l=null;var A_m=null;var A_c=null;var A_d=null;function A3t(){A3t=Bg(D4);A34();}
function A34(){A_a=M(C(162));A_b=M(C(163));A$9=M(C(164));A$$=M(C(452));A$_=M(C(319));A_l=M(C(162));A_m=M(C(163));A_c=Ed(118,121,122,128);A_d=C7(63,66,68);}
var Ij=G(0);
var RJ=G();
function A4V(a,b,c,d){var e;b=X();d=BL(d);e=J();F(F(P(F(e,C(453)),c),C(416)),d);T(b,I(e));}
var RK=G();
function Ry(){B.call(this);this.Jm=null;}
function ASD(a,b){var c,d,e;c=b.data;d=X();c=BL(c[0]);e=J();F(F(e,C(454)),c);T(d,I(e));d=X();b=Jh(b,1);c=J();F(F(c,C(455)),b);T(d,I(c));}
function Rw(){B.call(this);this.KI=null;}
function ARA(a,b){var c,d,e,f,g,h,i;c=b.data;d=X();e=BL(c[0]);f=J();F(F(f,C(456)),e);T(d,I(f));g=Yp(HG(b,1));b=X();d=BL(c[1]);if(g===null)c=C(24);else{c=J();By(c,C(31));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)By(c,C(32));Bj(c,i[h]);h=h+1|0;}By(c,C(33));c=I(c);}e=J();F(F(F(F(e,C(457)),d),C(458)),c);T(b,I(e));}
function Rs(){B.call(this);this.LU=null;}
function AQM(a,b){var c,d,e,f,g,h,i;c=b.data;d=X();e=BL(c[0]);f=J();F(F(f,C(459)),e);T(d,I(f));g=N6(HG(b,1));b=X();d=BL(c[1]);if(g===null)c=C(24);else{c=J();By(c,C(31));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)By(c,C(32));P(c,i[h]);h=h+1|0;}By(c,C(33));c=I(c);}e=J();F(F(F(F(e,C(460)),d),C(461)),c);T(b,I(e));}
function Rr(){B.call(this);this.KW=null;}
function A63(a,b){var c,d,e,f,g;c=b.data;d=X();e=BL(c[0]);f=J();F(F(f,C(462)),e);T(d,I(f));g=KP(HG(b,1));b=X();d=BL(c[1]);c=ALh(g);e=J();F(F(F(F(e,C(266)),d),C(463)),c);T(b,I(e));}
var AMA=G();
function AQd(){var a=this;B.call(a);a.p7=null;a.k_=null;a.mo=0;a.nH=0;}
function ANV(a,b){var c=new AQd();AZ8(c,a,b);return c;}
function AZ8(a,b,c){var d;AKO();d=A_7;a.p7=d;a.mo=b;a.nH=c;a.k_=CG(U(d===d?b*4|0:(b+3|0)&(-4),c));}
function XH(){B.call(this);this.wZ=null;}
function A2o(a,b){var c;c=a.wZ.nX;c.gD=EU(b,ADR(c));}
function AF9(){B.call(this);this.Jp=null;}
function AY4(a,b){return 0;}
function AKg(){var a=this;IC.call(a);a.zb=null;a.JS=null;a.bW=null;a.bV=null;a.mu=null;a.nN=null;a.Jn=0;a.IW=0;a.qC=null;}
function APL(a){var b=new AKg();A30(b,a);return b;}
function A30(a,b){var c,d;RE(a,b);a.zb=CL(K(Es,0));a.JS=CL(K(SP,0));a.bW=WE(b);a.bV=WE(b);b=FR(a.bW);a.mu=b;b.jU=0;a.nN=FR(a.bV);c=AQ1(a.mu,a.bW);d=AQ1(a.nN,a.bV);AG3(a.eL,c,d);a.qC=ARp(c,d,0);Nm(a,BA(CD,[a.mu,a.nN,a.eL]));}
function PC(a,b){var c,d,e,f;c=a.eL;d=null;e=b.ea.jp;f=b.hJ;AFB(c,d,e,f.so,f.tg,f.ti,f.qr);IR(a.bW,b);J_(a.bW,a.mu);IR(a.bV,b);J_(a.bV,a.nN);}
function Ko(a,b){a.qC.ii=b;a.eL.i$=b;}
function SC(a,b){var c,d,e,f,g,h,i,j,k;c=a.qC.ii;d=CG((Ft(a.bW)).data.length);e=d.data;f=CG((Ft(a.bV)).data.length);g=f.data;h=ATK(c,AC3(a.bW),AC3(a.bV),d,f,a.Jn,a.IW,b);i=Bc(e.length,g.length);j=0;while(j<i){k=e[j];if(k==1)e[j]=2;else if(k==2)e[j]=1;j=j+1|0;}h=h.data;Mp(a.bW,h[0].cC,h[0].cI,d,1);Mp(a.bV,h[1].cC,h[1].cI,f,0);}
function Ht(){var a=this;B.call(a);a.cy=null;a.gv=null;a.m6=null;a.iK=null;a.fT=0;a.iX=0;a.hD=0;a.eX=0;}
function A_8(a,b){var c=new Ht();Vs(c,a,b);return c;}
function Vs(a,b,c){a.iK=N0(b);a.fT=c;a.iX=0;}
function CZ(a){return (Ib(a.iK,0)).t;}
function AIO(a){a.iX=60084;}
function Ez(a){return a.iX!=60084?0:1;}
function LP(a){return a.iX!=60086?0:1;}
function AJE(a){a.iX=60086;}
function S8(a){a.hD=60035;}
function Jk(a){a.hD=60027;}
function SR(a){a.hD=60137;}
function Ev(a){a.hD=60151;}
function AIY(a){a.hD=60215;}
function ALb(a){var b;b=a.cy;if(b===null){b=a.m6;if(b===null)b=a.gv;}return b;}
function ANC(a){return C_(CZ(a));}
function ARW(a){return CZ(a);}
function Dr(){Ht.call(this);this.cQ=null;}
var A_9=null;var A_$=null;function Ff(a,b){var c=new Dr();Kx(c,a,b);return c;}
function APl(a,b,c){var d=new Dr();APu(d,a,b,c);return d;}
function Kx(a,b,c){Vs(a,b,c);a.cQ=A_9;}
function APu(a,b,c,d){Vs(a,b,c);a.cQ=A_9;a.cQ=d;}
function A6H(a){return CZ(a);}
function AN8(a,b,c,d){var e,f,g,h,i;e=O9(a,b,c,d);f=K(Ht,e);g=f.data;h=K(FO,e);i=K3(a,f,h,b,c,d,0);d=g.length;if(i==d)return A7s(f,h);b=new Bt;c=J();P(F(P(F(c,C(464)),i),C(465)),d);Bd(b,I(c));L(b);}
function UE(a,b){return a.cQ.data[b];}
function Hv(a){return a.cQ.data.length;}
function PU(a){var b,c,d,e;b=1;if(Ez(a)){c=a.cQ.data;d=c.length;e=0;while(e<d){b=b+PU(c[e])|0;e=e+1|0;}}return b;}
function Qi(a){var b,c,d,e;b=1;c=a.cQ.data;d=c.length;e=0;while(e<d){b=b+Qi(c[e])|0;e=e+1|0;}return b;}
function O9(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=1;if(Ez(a)){f=b.c8;if(f===null)return PU(a);f=f.data;g=0;h=0;i=f.length;j=0;while(j<i){k=f[j];if(!ZN(k,d)){l=h+1|0;m=Kh(c,h);if(m!==null){e=e+PU(m)|0;n=g;}else{e=e+1|0;n=g;}}else{if(!Yh(k)){o=a.cQ.data;n=g+1|0;g=O9(o[g],k,null,d);l=h;}else{o=a.cQ.data;n=g+1|0;b=o[g];l=h+1|0;g=O9(b,k,Kh(c,h),d);}e=e+g|0;}j=j+1|0;g=n;h=l;}}return e;}
function K3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=b.data;i=c.data;a.eX=Db(d);h[g]=a;j=g+1|0;i[g]=d;AB$(a,Fv(d));if(Ez(a)){k=d.c8;if(k===null){c=a.cQ.data;f=c.length;g=0;while(g<f){j=Qt(c[g],b,a.eX,j,Fv(d));g=g+1|0;}}else{l=k.data;m=0;n=0;o=l.length;p=0;while(p<o){q=l[p];if(!ZN(q,f)){r=n+1|0;s=Kh(e,n);if(s!==null){j=Ug(s,b,c,q,j);g=m;}else{h[j]=AD6(Db(q),a.fT);g=j+1|0;i[j]=q;j=g;g=m;}}else if(!Yh(q)){k=a.cQ.data;g=m+1|0;j=K3(k[m],b,c,q,null,f,j);r=n;}else{k=a.cQ.data;g=m+1|0;d=k[m];r=n+1|0;j=K3(d,b,c,
q,Kh(e,n),f,j);}p=p+1|0;m=g;n=r;}}}return j;}
function Qt(a,b,c,d,e){var f,g,h;f=b.data;a.eX=c;g=d+1|0;f[d]=a;AB$(a,e);if(Ez(a)){f=a.cQ.data;h=f.length;d=0;while(d<h){g=Qt(f[d],b,c,g,e);d=d+1|0;}}return g;}
function Ug(a,b,c,d,e){var f,g,h;f=c.data;b.data[e]=AD6(Db(d),a.fT);g=e+1|0;f[e]=d;if(Ez(a)){h=0;while(h<a.cQ.data.length){g=Ug(UE(a,h),b,c,d.c4(h),g);h=h+1|0;}}return g;}
function AD6(b,c){var d;d=Ff(C(20),c);d.eX=b;return d;}
function Kh(b,c){return b!==null&&c<Hv(b)?UE(b,c):null;}
function AB$(b,c){if(LP(b)&&!c)AIY(b);else b.oH();}
function Ih(a){AIO(a);Ev(a);}
function IZ(a){AJE(a);S8(a);}
function Xh(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;a:{while(true){if(d>e){f=null;break a;}g=(d+e|0)>>>1|0;f=b[g];h=PO(CZ(f),c);if(h<0)d=g+1|0;else{if(h<=0)break;e=g-1|0;}}}return f;}
function AXl(a){}
function AK4(){A_9=K(Dr,0);A_$=new AGh;}
function U8(){B.call(this);this.wo=null;}
function A0e(a){Io(a.wo,1);}
function U6(){B.call(this);this.zn=null;}
function AYY(a){Io(a.zn,0);}
function U7(){B.call(this);this.Ci=null;}
function A2g(a){var b;b=a.Ci;Cn(b.v.m,b.vO);}
function U5(){B.call(this);this.EF=null;}
function AXe(a){var b,c,d;b=a.EF;c=b.v.m.bT;d=b.bv;if(!(d.bW!==c&&d.bV!==c))b.vO=c;}
function FO(){var a=this;B.call(a);a.jw=null;a.c8=null;a.f8=0;a.cV=0;a.hY=0;}
var A_6=null;function N_(){N_=Bg(FO);A3A();}
function MK(a){var b=new FO();ADN(b,a);return b;}
function ADN(a,b){N_();a.hY=(-1);a.jw=b;}
function AOf(a,b){var c,d,e;a:{c=b.c8;a.c8=c;if(c!==null){c=c.data;d=c.length;e=0;while(true){if(e>=d)break a;c[e].jw=a;e=e+1|0;}}}a.f8=b.f8;a.cV=b.cV;a.hY=b.hY;if(Fv(a)){b=a.jw;if(b!==null)MR(b);}}
function P1(a){var b;if(Fv(a)){if(Xx(a))return 0;T(B0(),C(466));}NU(a,1);b=a.jw;return b!==null&&!MR(b)?0:1;}
function MR(a){var b;if(Fv(a))return 0;a.f8=a.f8+1|0;if(!AKH(a))return 0;NU(a,1);b=a.jw;if(b!==null)MR(b);return 1;}
function AKH(a){if(a.f8>a.c8.data.length)T(B0(),C(467));return a.c8.data.length!=a.f8?0:1;}
function AT1(a,b){return a.c8.data[b];}
function PX(a,b){var c;LZ(a,1);It(a,b);c=a.jw;if(c!==null)PX(c,b);}
function MJ(a,b){var c,d,e;a:{LZ(a,2);It(a,b);c=a.c8;if(c!==null){c=c.data;d=c.length;e=0;while(true){if(e>=d)break a;MJ(c[e],b);e=e+1|0;}}}}
function NU(a,b){var c;c=!b?0:1;a.cV=a.cV&(-2)|c;}
function LZ(a,b){a.cV=a.cV&(-13)|b<<2;}
function It(a,b){a.cV=a.cV&(-49)|b<<4;}
function NT(a,b){a.cV=a.cV&(-193)|b<<6;}
function Fv(a){return (a.cV&1)!=1?0:1;}
function Db(a){return a.cV>>4&3;}
function AOp(a){return a.cV>>6&3;}
function Xx(a){return (a.cV>>8&1)!=1?0:1;}
function Yh(a){var b;b=Db(a);return b&&b!=3?0:1;}
function AMD(a){return Db(a)==2?0:1;}
function AL8(a){return Db(a)==1?0:1;}
function ZN(a,b){a:{switch(b){case 1:break;case 2:b=AL8(a);break a;default:b=1;break a;}b=AMD(a);}return b;}
function Jq(a){return Db(a)&&Fv(a)?1:0;}
function A3A(){var b;N_();b=MK(null);LZ(b,2);It(b,0);NU(b,1);A_6=b;}
var AIR=G(0);
function APv(b,c){var d,e,f,g,h,i,j,k,l,m;d=K(BH,8);e=CG(8);f=B2(16);g=0;h=0;i=0;while(true){j=BG(i,b);if(j>0)break;k=j>=0?10:(c.G(Ck(i))).o_;if(k==10){d=W3(F5(f,0,g),d,h);e=AF4(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=IP(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=W3(F5(f,0,g),d,h);j=i+1|0;if(j<b&&(c.G(Ck(j))).o_==10){e=AF4(1,e,h);i=j;}else e=AF4(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ACO;d=AJx(d,h);if(m.length!=h)e=APW(e,h);c.jY=d;c.Id=e;return c;}
function AEH(b){return (AA1(b)).jY;}
function AA1(b){var c,d;c=N(b);Bs(b);d=new Rk;d.x3=b;return APv(c,d);}
var AP8=G();
function KA(b,c){var d,e,f;if(c<=0)return C(20);d=B2(c);e=d.data;e[0]=APq(CC(b,52));f=1;while(f<c){e[f]=APq(CC(b,62));f=f+1|0;}return EC(d);}
function APq(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AJZ=G();
var H0=G(Cj);
var A__=null;var A_7=null;var Baa=null;function AKO(){AKO=Bg(H0);A1k();}
function A7k(a,b){var c=new H0();AJr(c,a,b);return c;}
function AWp(){AKO();return Baa.d3();}
function AJr(a,b,c){AKO();Df(a,b,c);}
function A1k(){var b;A__=A7k(C(468),0);b=A7k(C(469),1);A_7=b;Baa=BA(H0,[A__,b]);}
function Cu(){Cj.call(this);this.qo=null;}
var Bab=null;var Bac=null;var Bad=null;var Bae=null;var Baf=null;var Bag=null;var Bah=null;var Bai=null;var Baj=null;var Bak=null;var Bal=null;var Bam=null;var Ban=null;var Bao=null;var Bap=null;var Baq=null;function AJG(){AJG=Bg(Cu);A2v();}
function Eo(a,b,c){var d=new Cu();AE2(d,a,b,c);return d;}
function A5t(a,b,c,d){var e=new Cu();AL3(e,a,b,c,d);return e;}
function AOu(){AJG();return Baq.d3();}
function AE2(a,b,c,d){AJG();Df(a,b,c);a.qo=Kc(d,null);}
function AL3(a,b,c,d,e){AJG();Df(a,b,c);a.qo=Kc(d,e);}
function A2v(){var b;b=new Cu;FZ();AE2(b,C(238),0,A_K);Bab=b;Bac=Eo(C(239),1,M(C(470)));Bad=Eo(C(241),2,M(C(471)));Bae=Eo(C(243),3,M(C(472)));Baf=Eo(C(245),4,M(C(470)));Bag=Eo(C(246),5,C7(188,63,60));Bah=Eo(C(248),6,M(C(473)));Bai=Eo(C(249),7,M(C(170)));Baj=Eo(C(251),8,M(C(474)));Bak=A5t(C(253),9,A_K,C7(52,65,52));Bal=A5t(C(254),10,M(C(475)),M(C(476)));Bam=Eo(C(255),11,M(C(477)));Ban=Eo(C(257),12,M(C(478)));Bao=Eo(C(259),13,A_K);b=Eo(C(260),14,M(C(261)));Bap=b;Baq=BA(Cu,[Bab,Bac,Bad,Bae,Baf,Bag,Bah,Bai,Baj,
Bak,Bal,Bam,Ban,Bao,b]);}
var GW=G(0);
var SP=G(0);
function EE(){var a=this;CD.call(a);a.cW=null;a.D=null;a.eI=null;}
function Bar(){var a=new EE();Jv(a);return a;}
function Jv(a){Fg(a);a.cW=new Y;a.D=new Y;}
function A1R(a,b){a.eI=b;}
function Mn(a,b,c){V(a.cW,b,c);Ge(a);}
function Ge(a){var b;b=a.eI;if(b!==null)AGp(b);}
function AJ9(a){var b;b=a.D;b.b=Z8(a,b.b);b=a.D;b.a=AGZ(a,b.a);}
function ALD(a,b){var c,d;c=a.D.b;d=Z8(a,b);a.D.b=d;return c==d?0:1;}
function P9(a,b){var c,d;c=a.D.a;d=AGZ(a,b);a.D.a=d;return c==d?0:1;}
function AGZ(a,b){return Z(0,Bc(b,a.cW.a-a.h.a|0));}
function Z8(a,b){return Z(0,Bc(b,a.cW.b-a.h.b|0));}
function L7(){var a=this;EE.call(a);a.d0=null;a.b7=null;a.f4=0.0;a.cc=null;a.h0=null;a.et=null;a.Ds=null;a.nT=null;a.oX=null;a.sX=0;a.oV=0;a.co=0;a.gt=0;a.IB=null;a.hs=null;a.ht=null;a.iB=null;a.jg=null;a.jj=null;a.k2=null;a.h6=null;a.kr=null;a.uT=0;a.lT=0;a.ms=0;}
function Gm(a){var b;b=a.co;return b<0?null:a.cc.cs.data[b];}
function Qp(a){a.hs=BI(a.hs,null);a.ht=BI(a.ht,null);a.iB=BI(a.iB,null);a.jg=BI(a.jg,null);a.jj=BI(a.jj,null);a.k2=BI(a.k2,null);a.h6=BI(a.h6,null);a.kr=BI(a.kr,null);}
function AAe(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.iB;break a;case 60084:c=a.ht;break a;case 60086:c=a.hs;break a;case 60136:c=a.h6;break a;case 60137:c=a.k2;break a;case 60151:c=a.jg;break a;case 60215:c=a.kr;break a;default:c=null;break a;}c=a.jj;}return c;}
function Ft(a){return a.cc.cs;}
function AC3(a){return a.cc.pr;}
function A4E(a,b,c,d){FP(a,b,c,d);AE0(a.b7,d);if(a.nT!==null)AHV(a);}
function AGK(a){Mn(a,a.cW.b,U(a.cc.cs.data.length,a.b7.dz));}
function ABM(a){a.co=a.cc.cs.data.length<=0?(-1):0;}
function AOO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl;c=a.et.ea.jp;d=a.f;Bi(b,d.b,d.a,a.h,c);Bs(a.b7.dn);e=a.b7.dz;f=a.cc.cs.data.length;if(!f)return;g=Bc(f,GE(a.h.a,e)+7|0);h=a.h0;if(h.data.length<g)a.h0=ACp(g,h,a.b7,a.sX,a.oV+1|0,a.cc);H9(b,a.f,a.h);i=a.D.a;j=f-1|0;k=AKY(i,e,j);i=AKY((a.D.a+a.h.a|0)-1|0,e,j);a.sX=k;a.oV=i;j=a.h.b;l=Ca(a,a.f4);m=Ca(a,1.0)+a.lT|0;n=Ca(a,3.0);o=Ca(a,5.0);Ca(a,1.0);p=0;q=a.f.b-a.D.b|0;r=Ca(a,1.0);d=a.eI;s=r+(d===null?0:Fi(d))
|0;while(k<=i){d=a.cc;t=d.cs.data[k];u=t.eX;v=d.pr.data[k];w=v!==null&&Xx(v)?1:0;x=U(e,k);y=x-a.D.a|0;z=a.et.ea.jp;a.b7.wz.c$=u;ba=l+U(m,t.fT)|0;bb=a.co!=k?0:1;bc=a.gt!=k?0:1;if(u){V(a.d0.cp,a.h.b,e);d=a.f;Bi(b,d.b,d.a+y|0,a.d0.cp,z);}bd=!bb?(!bc?c:a.et.D$.E6):!a.ms?a.et.ea.ue:a.et.ea.mD;if(bb&&a.ms)be=a.et.ea.D2;else{d=a.et.ea;be=PB(d.sJ,u,w,d.rT);}if(!(!bb&&!bc)){x=x-a.D.a|0;bf=Ca(a,10.0);V(a.d0.cp,a.h.b-bf|0,e);d=a.f;Bi(b,d.b,d.a+x|0,a.d0.cp,bd);}d=AAe(a,t.iX);bg=AAe(a,t.hD);if(d!==null){bh=q+ba|0;Kp(a.b7,
b,d,bh,a.f.a+y|0,bd,be);}if(bg!==null){bi=((q+ba|0)+a.lT|0)+n|0;Kp(a.b7,b,bg,bi,a.f.a+y|0,bd,be);}bj=t.iK;if(bj.F){h=a.h0.data;r=k%h.length|0;bk=h[r];r=AAR(bk,bj,b,e,j,0,k,r);bl=(((ba+a.lT|0)+n|0)+a.uT|0)+o|0;p=Z(p,(bl+r|0)+s|0);ADc(bk,a.f.a+y|0,q+bl|0,b,j,e,0,a.Ds,null,null,null,bb,bd,be,null);}k=k+1|0;}d=a.cW;if(d.b!=p){d.b=p;Ge(a);}EA(b);}
function NX(a,b){var c;b=b.i;c=a.b7.dz;return ((b.a-a.f.a|0)+a.D.a|0)/c|0;}
function AXu(a){a.gt=(-1);}
function A55(a,b,c,d){var e,f,g;if(!c&&d==2){e=NX(a,b);if(e>=0){f=a.cc.cs.data;if(e<f.length){g=f[e];if(!ZK(a,b,e)){b=g.m6;if(b!==null)b.d();}}}}return 1;}
function ZK(a,b,c){var d,e,f,g,h,i,j;d=a.cc.cs.data[c];e=Ca(a,a.f4);f=Ca(a,1.0);g=Z(Bz(a.ht),Bz(a.hs));h=e+U(f+g|0,d.fT)|0;i=(a.f.b-a.D.b|0)+h|0;j=i+g|0;c=b.i.b;return i<=c&&c<j?1:0;}
function E$(a,b,c){var d,e,f;d=a.d0.bM;e=Dy(b);f=a.b7;return Pd(d,e,c,1.0,1.0,f.dz,0,f.gk);}
function AKY(b,c,d){return Bc(b/c|0,d);}
function ATd(a,b){var c,d,e,f;a:{switch(b.Q){case 13:if(a.co>=0){b=ALb(Gm(a));if(b!==null)b.d();}c=1;break a;case 33:if(b.cb){d=a.f4+1.0;a.f4=d;if(d>0.0){c=1;break a;}}c=0;break a;case 34:if(b.cb){d=a.f4-1.0;a.f4=d;if(d>0.0){c=1;break a;}}c=0;break a;case 37:b=Gm(a);if(b!==null&&Ez(b)){b=b.gv;if(b!==null)b.d();c=1;}else b:{c=a.co;if(c<0)c=0;else{e=a.cc.cs.data;f=e[c].fT-1|0;if(f<0)c=0;else{c=c+(-1)|0;while(c>=0){if(e[c].fT==f){a.co=c;MO(a,c);G1(a,c);c=1;break b;}c=c+(-1)|0;}c=0;}}}break a;case 38:c=a.co-1|0;if
(c<0)c=0;else{a.co=c;MO(a,c);G1(a,c);c=1;}break a;case 39:b=Gm(a);if(b!==null&&LP(b)){b=b.gv;if(b!==null)b.d();c=1;}else c=ADd(a);break a;case 40:break;default:c=0;break a;}c=ADd(a);}return c;}
function ADd(a){var b;b=a.co+1|0;if(b>=a.cc.cs.data.length)return 0;a.co=b;MO(a,b);G1(a,b);return 1;}
function MO(a,b){var c,d;c=a.b7.dz;d=U(b,c);if(d<a.D.a){P9(a,d);Ge(a);}b=d+c|0;c=a.D.a;d=a.h.a;if(b>(c+d|0)){P9(a,b-d|0);Ge(a);}}
function G1(a,b){var c;c=a.IB;if(c!==null)c.e(Ck(b));}
function A1F(a,b,c){if(Gm(a)===null)return 0;OV(b,CZ(Gm(a)));return 1;}
function AXw(a){a.ms=1;}
function AXI(a){a.ms=0;}
function AOd(){var a=this;L7.call(a);a.up=null;a.cJ=null;a.nx=null;a.ot=0;a.lK=0;}
function WE(a){var b=new AOd();AXA(b,a);return b;}
function AXA(a,b){Jv(a);a.f4=4.0;a.cc=A7s(K(Ht,0),K(FO,0));a.h0=K(FJ,0);a.co=(-1);a.gt=(-1);a.d0=b;a.b7=AKz(b.cO);}
function AWO(a){var b;KL(a.h0);ABq(a.b7);Qp(a);b=a.cJ;if(b!==null){Ll(b);a.cJ=null;}}
function IR(a,b){var c,d,e,f,g;a.et=b;c=new O6;d=b.ea.mD;e=b.bC;Wd(c,d,e.o5,e.q7,e.mV,e.df,b.n8,b.fV);a.Ds=c;f=BN(a.nT,b.qa);g=BN(a.oX,b.ru);if(!(f&&g)){a.nT=b.qa;a.oX=b.ru;if(a.E!==0.0)AHV(a);}if(a.nx!==null)a.nx=AF0(a.et);}
function He(a){N_();Jm(a,A_6,null,0);}
function Jm(a,b,c,d){b=AN8(a.up,b,c,d);c=Gm(a);a.cc=b;if(!(c!==null&&ANC(c)?1:0))a.co=YB(b,c);else a.co=Bc(a.co,a.h0.data.length-1|0);if(a.E!==0.0)AGK(a);}
function Mp(a,b,c,d,e){a.lK=e;if(a.cJ===null){a.cJ=AQZ();a.nx=AF0(a.et);if(a.E!==0.0)AGt(a);}IO(a.cJ,b,c);EY(a.cJ,d);}
function D_(a,b){a.up=b;He(a);ABM(a);}
function J_(a,b){var c;c=a.et.bC;Hu(b,c.lb,c.lg);return b;}
function AHV(a){var b,c,d,e,f,g,h;b=a.cc.cs.data;c=b.length;d=0;while(d<c){EJ(b[d].iK);d=d+1|0;}KL(a.h0);e=a.b7;f=a.nT;g=a.E;h=a.d0.bM;b=e.iA;e.dn=ANS(f.fn,f.eN*g,f.ih,f.j1,b,h);UM(a.b7,1.25,a.d0.bM);Qp(a);e=FC(a.d0,a.oX);a.hs=BI(a.hs,E$(a,60086,e));a.ht=BI(a.ht,E$(a,60084,e));a.iB=BI(a.iB,E$(a,60035,e));a.jg=BI(a.jg,E$(a,60151,e));a.jj=BI(a.jj,E$(a,60027,e));a.k2=BI(a.k2,E$(a,60137,e));a.h6=BI(a.h6,E$(a,60136,e));a.uT=Z(Z(Z(Z(Bz(a.iB),Bz(a.jg)),Bz(a.jj)),Bz(a.h6)),Bz(a.h6));a.kr=BI(a.kr,E$(a,60215,e));a.lT
=Z(Bz(a.ht),Bz(a.hs));AGK(a);if(a.cJ!==null)AGt(a);}
function AGt(a){var b,c,d,e,f;a.cJ.fY=OU(a.lK);b=a.cJ;c=a.b7;HA(b,c.dz,c.dn);d=Iw(a.cJ,a.b7.dn,a.d0.bM.bE,a.E);a.ot=d;if(a.lK)e=4.0;else{f=a.E;e=f===0.0?0.0:d/f;}a.f4=e;}
function ARh(a,b){var c,d;AOO(a,b);c=a.cJ;if(c!==null){if(!a.ot){b=new CP;Bd(b,C(479));L(b);}c.fK=a.D.a;Ge(a);if(!a.lK)d=a.f.b;else{d=a.f.b+a.h.b|0;c=a.eI;d=(d-(c!==null?Fi(c):0)|0)-a.ot|0;}HU(a.cJ,d,a.f.a,a.ot,a.h.a,a.E);Ii(a.cJ,a.sX,a.oV,a.co,b,a.nx,a.b7,null);}}
function A4G(a,b,c){var d,e,f;d=a.cJ;if(d!==null){d=Hg(d,b,c,a.d0.dd);if(d!==null)return d;}Cn(a.d0,a);e=NX(a,b);if(c){if(c==2&&e>=0&&e<a.cc.cs.data.length){a.co=e;G1(a,e);}}else if(e>=0){f=a.cc.cs.data;if(e<f.length){d=f[e];if(ZK(a,b,e)){b=d.gv;if(b!==null)b.d();}else{a.co=e;G1(a,e);b=d.cy;if(b!==null)b.d();}}}return A$6;}
function AWE(a,b,c){var d;d=a.cJ;if(d!==null&&GV(d,b,c))return 1;return 0;}
function A5h(a,b,c){var d,e;d=a.cJ;if(d!==null&&G7(d,b,c)?1:0)a.gt=(-1);else if(Cd(a,b.i)){e=NX(a,b);if(e>=0&&e<a.cc.cs.data.length){a.gt=e;CH(c,C(276));}else{a.gt=(-1);EN(c);}}else if(a.gt>=0)a.gt=(-1);}
function AJF(){var a=this;CD.call(a);a.Cz=null;a.FK=null;a.bs=null;a.dX=null;a.eb=null;a.yk=null;a.ua=null;a.zQ=0.0;a.sd=null;a.rw=null;a.jU=0;a.ol=0;}
function FR(a){var b=new AJF();A5g(b,a);return b;}
function A5g(a,b){var c;Fg(a);c=new TU;c.yi=a;a.Cz=c;c=new TV;c.Bc=a;a.FK=c;a.zQ=10.0;a.jU=1;a.ol=1;a.bs=b;b.eI=a;}
function AW1(a){var b;b=a.bs;b.eI=null;a.bs=BI(b,null);}
function Hu(a,b,c){var d;a.rw=c;a.sd=b;d=a.dX;if(d!==null)GD(d,b,c);b=a.eb;if(b!==null)GD(b,a.sd,a.rw);}
function ATb(a,b,c,d){FP(a,b,c,d);a.bs.cz(b,c,d);if(d!==0.0)AGp(a);}
function A2_(a){a.bs.gU();}
function JN(a,b,c){LN(a,b);Mr(a,c);}
function AGp(a){var b;AJ9(a.bs);b=Fi(a)*3|0;if(ACJ(a,b))WG(a);else a.eb=null;if(AIk(a,b))Z0(a);else a.dX=null;}
function AIk(a,b){var c;c=a.h.a;return c>b&&a.bs.cW.a>c?1:0;}
function ACJ(a,b){var c;c=a.h.b;return c>b&&a.bs.cW.b>c?1:0;}
function WG(a){var b,c,d,e,f,g;b=a.eb;if(b===null)b=Gg();a.eb=b;QS(a,b);c=a.eb;b=a.bs;d=b.D.b;e=a.f;f=e.b;g=a.h;TC(c,d,f,g.b,b.cW.b,e.a+g.a|0,Fi(a));}
function Z0(a){var b,c,d,e,f,g;b=a.dX;if(b===null)b=Gg();a.dX=b;QS(a,b);c=a.dX;b=a.bs;d=b.D.a;e=a.f;f=e.a;g=a.h;GI(c,d,f,g.a,b.cW.a,e.b+g.b|0,Fi(a));}
function Fi(a){return Ca(a,a.zQ);}
function QS(a,b){GD(b,a.sd,a.rw);}
function A42(a,b){var c;a.bs.dm(b);if(a.dX===null&&a.eb===null)return;if(!a.jU&&!a.ol)return;BM(b,1);if(a.jU){c=a.dX;if(c!==null)G5(c,b);}if(a.ol){c=a.eb;if(c!==null)G5(c,b);}if(a.jU){c=a.dX;if(c!==null)Hb(c,b);}if(a.ol){c=a.eb;if(c!==null)Hb(c,b);}BM(b,0);}
function We(a,b){var c,d;a:{b:{c=a.dX;if(!(c!==null&&I3(c,b))){c=a.eb;if(c===null)break b;if(!I3(c,b))break b;}d=1;break a;}d=0;}return d;}
function AXq(a,b,c,d){return !We(a,b.i)&&!a.bs.cL(b,c,d)?0:1;}
function LN(a,b){var c;b=ALD(a.bs,b);if(ACJ(a,Fi(a)*3|0))WG(a);if(b){c=a.yk;if(c!==null)c.f5(a.bs.D.b);}}
function Mr(a,b){var c,d;c=a.bs.D.a;if(AG2(a,b)){d=a.ua;if(d!==null)d.f5(a.bs.D.a-c|0);}}
function AG2(a,b){var c;c=P9(a.bs,b);if(AIk(a,Fi(a)*3|0))Z0(a);return c;}
function AW4(a,b,c){var d,e;d=a.dX;if(d!==null){e=EX(d,b.i,a.Cz,1);if(e!==null)return e;}d=a.eb;if(d!==null){e=EX(d,b.i,a.FK,0);if(e!==null)return e;}return a.bs.ce(b,c);}
function AVp(a,b,c){return !We(a,b.i)&&!a.bs.cP(b,c)?0:1;}
function A0Y(a,b,c){var d,e,f;d=b.i;e=a.dX;f=e!==null&&E0(e,d,c)?1:0;e=a.eb;if(!((e!==null&&E0(e,d,c)?1:0)|f))a.bs.ev(b,c);}
function A1s(a,b,c,d){var e,f;if(!Cd(a,b.i))return 0;e=BF(d*0.5,a.E);f=BF(c*0.5,a.E);if(b.bw){f=f+e|0;e=0;}if(a.dX!==null&&e)Mr(a,a.bs.D.a+e|0);if(a.eb!==null&&f)LN(a,a.bs.D.b+f|0);return 1;}
function AMs(a){var b,c;b=Fi(a);c=a.bs.hX();c.b=Z(c.b,b);c.a=Z(c.a,b);return c;}
function AKD(){var a=this;B.call(a);a.pS=null;a.g$=null;}
function AQ1(a,b){var c=new AKD();AR2(c,a,b);return c;}
function AR2(a,b,c){a.pS=b;a.g$=c;}
function AXa(a){return a.g$.D.a/Nq(a)|0;}
function A6b(a){var b;b=a.g$;return GE((b.D.a+b.h.a|0)-1|0,Nq(a));}
function AX9(a,b){var c;b=U(b,Nq(a));c=a.g$;return (b+c.f.a|0)-c.D.a|0;}
function AT$(a){return a.g$.f;}
function AZD(a){return a.g$.h;}
function AZy(a,b,c){var d;d=a.pS;d.yk=b;d.ua=c;}
function A3J(a,b){return AG2(a.pS,b);}
function ARC(a,b){return 0;}
function Nq(a){return a.g$.b7.dz;}
function A1H(a){return 0;}
var AGT=G(0);
function AOL(){B.call(this);this.iO=null;}
function A7G(a){var b=new AOL();A3M(b,a);return b;}
function A3M(a,b){a.iO=b;}
function N6(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.iO));}
function Yp(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iO));}
function KP(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iO));}
function A0F(a){var b,c;b=a.iO.byteLength;c=J();F(P(F(c,C(480)),b),C(481));return I(c);}
var C9=G();
var AO1=G(C9);
var APo=G(C9);
var ANE=G(C9);
var ANN=G(C9);
var APB=G(C9);
function Rk(){B.call(this);this.x3=null;}
function AZw(a,b){return Rj(Be(a.x3,b.O));}
function ACO(){var a=this;B.call(a);a.jY=null;a.Id=null;}
function Yv(){B.call(this);this.vt=null;}
function ATT(a){var b;b=a.vt;T(X(),b);}
function TU(){B.call(this);this.yi=null;}
function A1O(a,b){var c;c=a.yi;Mr(c,EU(b,c.bs.cW.a-c.h.a|0));}
function TV(){B.call(this);this.Bc=null;}
function A6_(a,b){var c;c=a.Bc;LN(c,EU(b,c.bs.cW.b-c.h.b|0));}
var AGh=G();
function A2f(a,b,c){b=b;c=c;return PO(CZ(b),CZ(c));}
var AKb=G();
function AMU(b){var c,d;A7$();c=A98;d=b.data;return c.decode(d);}
function AP5(){var a=this;Ha.call(a);a.cs=null;a.pr=null;}
function A7s(a,b){var c=new AP5();A1j(c,a,b);return c;}
function A1j(a,b,c){a.cs=b;a.pr=c;}
function A7g(a,b){return a.cs.data[b].iK;}
function YB(a,b){var c,d;if(b===null)return (-1);c=0;while(true){d=a.cs.data;if(c>=d.length)return (-1);if(d[c]===b)break;c=c+1|0;}return c;}
function O0(){var a=this;B.call(a);a.Hc=null;a.lL=null;a.tB=null;a.o7=null;a.sY=null;a.nC=null;a.sN=null;a.Ig=null;}
function Bas(a,b,c,d,e){var f=new O0();T4(f,a,b,c,d,e);return f;}
function T4(a,b,c,d,e,f){a.o7=C7(0,255,0);a.sY=C7(255,0,0);a.Hc=b;a.lL=c;a.tB=d;a.nC=e;a.Ig=f;a.sN=FA(e,f);}
var ANh=G();
function BF(b,c){return DG(b*c);}
var ALl=G();
function Od(b,c,d,e,f,g){g.b=c.b;g.a=f;Bi(b,d.b,d.a,g,e);Bi(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bi(b,d.b,d.a+f|0,g,e);Bi(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AO8(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bi(b,j,k,i,h);Bi(b,j,k,i,h);Bi(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bi(b,l,j,i,h);Bi(b,l,j,i,h);Bi(b,l+g|0,j+g|0,i,h);}
function Wi(){var a=this;B.call(a);a.xk=null;a.xj=null;}
function AUr(a){ANY(a.xk,a.xj);}
function Wj(){B.call(this);this.Ap=null;}
var AMi=G();
function X3(){B.call(this);this.zI=null;}
function Ww(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.zI;e=c.kF;if(b.ca){c=!e?d.N.c:d.B.c;f=!e?b.V:b.W;g=!e?Ea(b):D8(b);h=c.g.u;i=h.data;c=MB(E_(Bv(h)),g-f|0);j=f;while(j<g){c.data[j-f|0]=i[j];j=j+1|0;}h=c;c=AHB(AUV(h,0,h.data.length),new Wf);f=c.pA.vH();if(f<0){k=BQ();while(true){Bs(k);l=new QU;l.wq=k;if(!L6(c,l))break;}h=K(C5,k.l);i=h.data;f=0;g=i.length;while(f<g){i[f]=B1(k,f);f=f+1|0;}}else{h=K(C5,f);k=new AEy;k.EW=h;while(L6(c,k)){}i=h.data;f=k.pm;if(f<i.length)h=B_(h,f);}h=h;f=e?b.V:b.W;m=e?Ea(b):D8(b);c=(e
?d.N.c:d.B.c).g;if(f>=m)k=null;else{n=f?0:1;e=m!=Cl(c)?0:1;d=J();if(!n)Bj(d,10);By(d,EC(J1(c,f,m)));if(!n&&!e){e=d.J;g=e-1|0;if(g>=0&&g<e){d.J=g;j=g;while(j<g){i=d.A.data;e=j+1|0;i[j]=i[e];j=e;}}else{b=new KV;AIV(b);L(b);}}k=AHl(n?f:f-1|0,n?0:(B3(c,f-1|0)).F,1,I(d));T_(c,f,m);Iq(c,k);F8(c,k,0);}b=AKx(c,f,h);if(!(k===null&&b===null)){Fy(c);h=K(Hj,2);if(b===null)g=0;else{i=h.data;g=1;i[0]=b;}if(k===null)f=g;else{i=h.data;f=g+1|0;i[g]=k;}h=B_(h,f);JK(c.hw,c,h);c.R=c.R+1|0;}}}
function AFn(){var a=this;B.call(a);a.gl=null;a.ix=null;}
function AJ6(b,c){var d;d=new AFn;d.gl=b;d.ix=c;return d;}
function A4L(a){var b,c,d;b=BL(a.gl);c=BL(a.ix);d=J();Bj(F(F(F(Bj(d,40),b),C(32)),c),41);return I(d);}
var ANn=G(0);
function AMy(b){if(b===null)return C(277);if(!CW(b,C(482))&&!CW(b,C(483))&&!CW(b,C(484))&&!CW(b,C(485))&&!CW(b,C(486))&&!CW(b,C(487))){if(CW(b,C(488)))return C(288);if(!CW(b,C(489))&&!CW(b,C(490))&&!CW(b,C(491))){if(CW(b,C(492)))return C(306);if(CW(b,C(493)))return C(299);if(!CW(b,C(494))&&!CW(b,C(495))){if(!CW(b,C(496)))return C(277);return C(300);}return C(301);}return C(305);}return C(307);}
function E3(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kt(b)){case -1655966961:if(!Bf(b,C(299)))break a;c=5;break a;case 3401:if(!Bf(b,C(305)))break a;c=3;break a;case 3711:if(!Bf(b,C(306)))break a;c=4;break a;case 98723:if(!Bf(b,C(307)))break a;c=2;break a;case 3213227:if(!Bf(b,C(301)))break a;c=6;break a;case 3254818:if(!Bf(b,C(288)))break a;c=1;break a;case 3271912:if(!Bf(b,C(300)))break a;c=7;break a;case 3556653:if(!Bf(b,C(277)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c
=2;break b;case 3:c=3;break b;case 4:c=6;break b;case 5:c=4;break b;case 6:c=5;break b;case 7:c=7;break b;default:d=B0();e=J();F(F(e,C(497)),b);T(d,I(e));c=0;break b;}c=0;}return c;}
function SQ(){B.call(this);this.uB=null;}
function AUj(a,b,c,d){return ALt(a.uB,b,c,d);}
function AAU(){B.call(this);this.mg=null;}
function A7n(a,b){var c,d,e,f,g;c=a.mg;d=c.oF;if(d!==null){e=b.i;f=e.b-d.b|0;g=e.a-d.a|0;e=c.ml;e.b=DS(0,e.b+f|0,c.eO.b-c.lq.b|0);c=a.mg;d=c.ml;d.a=DS(0,d.a+g|0,c.eO.a-c.lq.a|0);}a.mg.oF=b.i;return 1;}
var AJW=G();
function MN(){return "clipboard" in $rt_globals.navigator?1:0;}
function Sp(){var a=this;B.call(a);a.zp=null;a.zt=0;}
function A53(a){var b,c,d,e;b=a.zp;c=a.zt;d=X();e=b.FE+1|0;b.FE=e;b=J();P(F(P(Bj(b,91),e),C(498)),c);T(d,I(b));}
function TD(){var a=this;B.call(a);a.AY=null;a.AX=0;}
var Fx=G(0);
function DT(a){return Xo(a.wV(),a.rY());}
function Xo(b,c){if(!b.data.length)return c;return I(AKB(b,c,J()));}
function AKB(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Bj(By(d,b[f]),47);f=f+1|0;}return By(d,c);}
var Ju=G(0);
function QW(a,b,c){var d,e;d=new ZG;d.zK=c;e=new Qk;e.CH=b;b=a.kb;if(b!==null)AEL(a,0.0,(-1),e,d,b);else{b=a.lO.getFile();c=new AGo;c.BQ=a;c.BR=0.0;c.BS=(-1);c.BT=e;c.BU=d;b.then(BB(c,"f"),BB(d,"f"));}}
function VS(b,c,d){var e;e=new AC9;e.tC=c;QW(b,e,d);}
function SS(b,c){var d;b=b.data;d=b[c];return 1.073741824E9*b[c+1|0]+d;}
function AOq(b){return Bf(C(499),b);}
function Mf(){var a=this;B.call(a);a.lO=null;a.kb=null;a.jA=null;}
function ALF(a,b){var c=new Mf();A0q(c,a,b);return c;}
function Bat(a,b,c){var d=new Mf();RB(d,a,b,c);return d;}
function A0q(a,b,c){RB(a,b,null,c);}
function RB(a,b,c,d){a.lO=b;a.kb=c;a.jA=d;}
function FF(a){var b;b=a.lO;return Fd(b!==null?b.name:a.kb.name);}
function AQ_(a){return a.jA;}
function AEL(a,b,c,d,e,f){var g;if(c>=0){g=b+c;f=f.slice(b,g);}else if(b!==0.0)f=f.slice(b);f.arrayBuffer().then(BB(d,"f"),BB(e,"f"));}
function OE(a){var b,c,d;if(a.kb===null)b=Xo(a.jA,FF(a));else{b=Gr(Bv(a));c=a.jA;d=FF(a);b=Bj(A7d(b),58);AKB(c,d,b);b=I(b);}return b;}
var HM=G(0);
function Po(){var a=this;B.call(a);a.ik=null;a.gy=null;a.l$=null;}
function A7a(a,b,c){var d=new Po();A1C(d,a,b,c);return d;}
function A1C(a,b,c,d){a.ik=b;a.gy=c;a.l$=d;}
function AOJ(b){var c,d,e,f;if(!b.length)c=K(BH,0);else{b=b.split('/');if(b===null)c=null;else{c=K(BH,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=Fd(b[e]);e=e+1|0;}}}return c;}
function HY(a,b){var c,d,e;c=new AGr;d=a.ik.values();c.mi=a;e=new Vd;e.FR=c;c.wJ=e;c.Dc=d;c.kM=b;AE7(c);}
function ABT(a){var b;b=a.l$;if(b===null){b=ALo(a.gy,JP(a));a.l$=b;}return b;}
function JP(a){return Fd(a.ik.name);}
function A6y(a){return a.gy;}
function I4(a){return Xo(a.gy,JP(a));}
function AJb(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
var UZ=G(0);
var A$6=null;function APf(){A$6=new Tv;}
function AGc(){var a=this;B.call(a);a.wf=null;a.wg=null;}
function A0n(a,b){var c,d,e;c=a.wf;d=a.wg;c=c.gm.e4.s;e=c.b;b=b.i;c.b=e+(b.b-d.b|0)|0;c.a=c.a+(b.a-d.a|0)|0;CA(d,b);}
function ALW(){var a=this;B.call(a);a.c3=null;a.cq=null;a.mm=null;a.mL=null;a.qv=null;a.lE=null;}
function ACh(a){var b=new ALW();A4Q(b,a);return b;}
function A4Q(a,b){a.cq=BQ();a.lE=A_2;a.c3=b;Bb(b.dl,a);}
function Hx(a,b,c){a.mm=c;a.qv=b;b=B4(a.cq);while(B6(b)){Ka(B7(b),a.qv);}}
function Np(a,b,c,d){a.lE=d;UB(a,b,c);}
function UB(a,b,c){var d,e;d=a.c3;e=d.bD;if(U(e.b,e.a)&&d.cf!==0.0){if(a.mm!==null&&!JW(a)){a.mL=FC(a.c3,a.mm);d=Yx(a,b,c,null,null);b=new Un;b.xW=a;d.mO=b;Cn(a.c3,a);return;}b=new Bq;W(b);L(b);}c=new CP;Bd(c,C(500));L(c);}
function Nb(a){if(JW(a)){AFb(a.c3,a);AE5(a,null);a.lE.d();a.lE=A_2;}}
function Yx(a,b,c,d,e){var f,g,h;f=AOt();AIB(f);Om(f,c.bK());Ka(f,a.qv);J8(f,a.mL,a.c3);if(d===null)g=b.b;else{g=b.b;g=a.c3.bD.b<((g+(EO(d)).b|0)+(EO(f)).b|0)?g-(EO(f)).b|0:(g+(EO(d)).b|0)-d.hg|0;}h=b.a;b=a.c3.bD;Oh(f,Z(0,Bc(g,b.b-(EO(f)).b|0)),Z(0,Bc(h,b.a-(EO(f)).a|0)));b=new AFN;b.zO=a;b.zM=f;b.zN=e;f.rQ=b;Bp(a.cq,f);return f;}
function A67(a,b,c){var d;a.mL=FC(a.c3,a.mm);d=B4(a.cq);while(B6(d)){J8(B7(d),a.mL,a.c3);}}
function AIX(a){var b,c;if(F6(a.cq))return;BM(a.c3.bM,1);b=0;while(true){c=a.cq;if(b>=c.l)break;M2(B1(c,b),a.c3);b=b+1|0;}}
function AUp(a,b){var c;if(!JW(a))return 0;a:{switch(b.Q){case 27:Nb(a);c=1;break a;default:}c=0;}return c;}
function AE5(a,b){var c,d;c=a.cq.l-1|0;a:{while(true){if(c<0)break a;d=B1(a.cq,c);if(b===d)break;Hn(a.cq,c);NJ(d);c=c+(-1)|0;}}}
function JW(a){return a.cq.l<=0?0:1;}
function AWd(a){var b,c;UC(a.c3.dl,a);AFb(a.c3,a);b=a.cq;c=B4(b);while(B6(c)){NJ(B7(c));}GP(b);}
function Xe(){var a=this;CD.call(a);a.hj=null;a.i3=null;a.lj=null;a.fi=null;a.mG=0.0;a.fr=0;a.jX=0;a.eE=null;a.oS=null;}
function M_(a){var b;if(PA(a))return 0;AGf(a);b=Ci(a.hj,a.mG);return Fk(a.fi)+(b*2|0)|0;}
function T$(a){var b;b=a.h;return b.b&&b.a?0:1;}
function PA(a){return a.i3!==null&&a.lj!==null?0:1;}
function Sh(a,b){a.h.a=b;}
function Sw(a,b,c,d,e){var f,g;f=a.hj.cp;V(f,d,a.h.a);g=a.f;Bi(b,g.b+c|0,g.a,f,e);}
function AGf(a){if(a.fi===null)a.fi=FC(a.hj,a.i3);}
function SI(){var a=this;B.call(a);a.F8=null;a.F7=null;}
function ATf(a){Ww(a.F8,a.F7,HP(1));}
function SH(){var a=this;B.call(a);a.Kj=null;a.Kk=null;}
function SG(){var a=this;B.call(a);a.xo=null;a.xm=null;}
function AUF(a){Ww(a.xo,a.xm,HP(0));}
function Sj(){B.call(this);this.um=null;}
function A5H(a,b){P6(a.um,b);}
function V2(){B.call(this);this.zf=null;}
function AXb(a,b){var c,d,e,f,g;c=a.zf;d=NM(b);e=d.iu;b=c.g;if(e==b.R){Py(b,d);GZ(c,C(501));if(JE(c))AG0(c);else{b=c.eu;if(b!==null)Iu(b);f=DW(c.g);e=E3(CR(c));if(e==1){g=c.fj;d=new Zy;d.Dn=c;DJ(g,1,d,C(502),BA(B,[f,Cf([e,c.g.R])]));c.ju=2;}ADC(c,DW(c.g),E3(CR(c)));}}}
function SN(){B.call(this);this.Cy=null;}
function A7l(a,b){Nc(a.Cy,b);}
function Nn(){var a=this;B.call(a);a.eB=null;a.hi=null;}
function AWh(a){return a.hi;}
function ZB(a,b){var c;c=a.hi;a.hi=b;return c;}
function ATZ(a){return a.eB;}
function A06(a,b){var c,d;if(!Do(b,Hy))return 0;a:{c=b;d=a.eB;if(d===null){if(c.lB()===null)break a;}else if(d.U(c.lB()))break a;return 0;}b=a.hi;return b!==null?b.U(c.kt()):c.kt()!==null?0:1;}
function AS8(a){var b,c,d;b=a.eB;c=a.hi;d=J();F(Bj(F(d,b),61),c);return I(d);}
function F4(){var a=this;Nn.call(a);a.bR=null;a.b1=null;a.fX=0;a.ig=0;}
function NZ(a){var b;b=L_(a);if(b==2){if(L_(a.b1)<0)a.b1=QV(a.b1);return RU(a);}if(b!=(-2))return a;if(L_(a.bR)>0)a.bR=RU(a.bR);return QV(a);}
function L_(a){var b,c;b=a.b1;c=b===null?0:b.fX;b=a.bR;return c-(b===null?0:b.fX)|0;}
function QV(a){var b;b=a.bR;a.bR=b.b1;b.b1=a;Fb(a);Fb(b);return b;}
function RU(a){var b;b=a.b1;a.b1=b.bR;b.bR=a;Fb(a);Fb(b);return b;}
function Fb(a){var b,c,d;b=a.b1;c=b===null?0:b.fX;b=a.bR;d=b===null?0:b.fX;a.fX=Z(c,d)+1|0;a.ig=1;b=a.bR;if(b!==null)a.ig=1+b.ig|0;b=a.b1;if(b!==null)a.ig=a.ig+b.ig|0;}
function Kq(a,b){return b?a.b1:a.bR;}
function Nr(a,b){return b?a.bR:a.b1;}
function TP(){B.call(this);this.mf=null;}
function AYB(a){return a.mf;}
function W_(){B.call(this);this.Cl=null;}
function A6t(a,b){var c,d;c=a.Cl;d=c.eV+1|0;c.eV=d;c=J();F(F(P(c,d),C(503)),b);$rt_globals.console.info($rt_ustr(I(c)));}
function YZ(){B.call(this);this.Cx=null;}
function A49(a){var b,c;b=a.Cx;c=J();F(F(F(c,C(504)),b),C(505));$rt_globals.console.info($rt_ustr(I(c)));}
var Tv=G();
function A3O(a,b){}
function AA9(){B.call(this);this.yV=null;}
function AUt(a){LC(a.yV);}
var AIq=G(0);
var A_2=null;function ALR(){A_2=new AAu;}
function AAq(){B.call(this);this.vj=null;}
function A6q(a){AH0(a.vj);}
function AAo(){B.call(this);this.us=null;}
function ASR(a){AEw(a.us);}
function AAn(){B.call(this);this.xS=null;}
function ARe(a){ACo(a.xS);}
function AAp(){B.call(this);this.DM=null;}
function A7o(a){AHH(a.DM);}
function Xy(){B.call(this);this.Ji=null;}
function ARG(a){T(X(),C(506));}
function Uk(){B.call(this);this.Cm=null;}
function A3m(a){AFD(a.Cm);}
function AB7(){B.call(this);this.Hd=null;}
function AZP(a,b){var c,d;c=a.Hd;d=c.eV+1|0;c.eV=d;c=b.kw;b=J();F(F(P(b,d),C(507)),c);$rt_globals.console.info($rt_ustr(I(b)));}
var AOV=G(0);
function R7(){B.call(this);this.wj=null;}
function A1D(a){var b,c,d;b=a.wj;c=b.p.bt;d=new YW;d.Cr=b;Gh(c,d);}
function R9(){B.call(this);this.zl=null;}
function A6G(a){var b,c,d;b=a.zl;c=b.p.bt;d=new AEF;d.wD=b;EM(c,d);}
function R8(){B.call(this);this.x_=null;}
function AUE(a){var b,c,d;b=a.x_;T(X(),C(508));T(X(),C(509));c=b.p.bt;d=new AH5;d.BA=b;EM(c,d);}
function ADu(){B.call(this);this.A4=null;}
function ASU(a){var b;b=a.A4;Sk(new Oq,b.gQ,b.k,new T1);}
function ADx(){B.call(this);this.Fn=null;}
function AVS(a){var b;b=a.Fn;I0(new HN,b.k,b.gQ,new ABS,0,0);}
function ADy(){B.call(this);this.vv=null;}
function A3T(a){var b;b=a.vv;I0(new HN,b.k,b.gQ,new ADL,0,1);}
function ADv(){B.call(this);this.Ai=null;}
function A2F(a){var b;b=a.Ai;AHh(new Mx,b.k,b.gQ,new ZC);}
function ADw(){B.call(this);this.xO=null;}
function AZ5(a){var b;b=a.xO;K2(AW3(b.k,b.gQ,new AHP));}
function ADB(){B.call(this);this.Cf=null;}
function AZg(a){var b,c,d,e;b=a.Cf;c=new AEv;d=b.k;b=b.gQ;Im(c,d,b,new Qq);c.GK=1;e=AQv(d.m);c.mH=e;e.gb=b;if(!BN(e.AQ,b.lz)&&e.E!==0.0)Yj(e);b=II(c,FR(c.mH),30.0);c.sF=b;d=new AAk;d.yc=c;b.iI=d;d=new AAl;d.ve=c;b.iF=d;DY(c.v,b);Cn(c.v.m,c);}
function AAM(){B.call(this);this.Dz=null;}
function AZX(a){var b,c,d,e,f;b=a.Dz;c=b.lF+1|0;b.lF=c;d=J();P(F(d,C(510)),c);e=I(d);d=QX(b.w);if(e===null)f=new QR;else{f=new QP;f.zv=d;f.zu=e;}e=new Lt;Jv(e);e.op=new BS;e.sx=new Y;e.C4=f;e.vo=1.0;f=FR(e);Hu(f,A_3,A_4);I7(d,f);DX(d,EZ());OT(d,b.qZ,3.0);AC7(b,d);AH_(b,d);DY(b.k,d);}
function AAN(){B.call(this);this.zD=null;}
function A0_(a){Xg(a.zD);}
function AIl(){B.call(this);this.GT=null;}
function A2U(a){ACd(a.GT);}
var MH=G(0);
function S$(){B.call(this);this.yu=null;}
function A0m(a,b){return TS(a.yu,b);}
function Ra(){B.call(this);this.FQ=null;}
function A6a(a,b){var c,d;c=a.FQ;d=b.O;return Rj(c.charCodeAt(d)&65535);}
var AAu=G();
function AYh(a){}
var CP=G(Bt);
var APb=G(FQ);
function A0H(a){var b=new APb();AUR(b,a);return b;}
function AUR(a,b){a.mC=1;a.m2=1;a.pD=b;}
function Sx(){var a=this;B.call(a);a.hr=null;a.mx=null;a.kL=null;a.tl=null;a.dK=null;a.nM=0;}
function AEc(a,b){if(!BN(b.rf,a.tl)){a.tl=b.rf;OY(a);}}
function OY(a){a.dK=BI(a.dK,null);}
function AK$(a,b){var c,d;c=FC(b,a.tl);d=Fk(c);a.dK=BI(a.dK,Pd(b.bM,Dy(60088),c,0.0,0.0,d,0,0));}
function VG(a,b){return a.dK!==null&&FH(b,a.hr,a.mx)?1:0;}
function SL(){var a=this;B.call(a);a.fg=null;a.kl=null;a.dY=0;a.kT=null;a.lv=null;a.Bo=0;a.mS=0;a.B1=0;}
function Ol(a,b,c,d,e,f){Dd(b,d.b,c+d.a|0,a.kT,a.lv,a.fg,e,f,a.Bo);}
function YN(a){a.fg=BI(a.fg,null);}
function V$(){var a=this;B.call(a);a.ut=null;a.yf=null;a.FM=null;}
function O6(){var a=this;B.call(a);a.AF=null;a.wF=null;a.Az=null;a.tf=null;a.lX=null;a.od=null;a.Ev=null;}
function Bau(a,b,c,d,e,f,g){var h=new O6();Wd(h,a,b,c,d,e,f,g);return h;}
function Wd(a,b,c,d,e,f,g,h){a.AF=b;a.wF=c;a.Az=d;a.tf=e;a.lX=f;a.od=g;a.Ev=h;}
var AJQ=G();
function Uv(b,c,d){return DS(0,(U(b,d)+(Bc(c,d)/2|0)|0)/c|0,d-1|0);}
var AIT=G();
function FH(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function RL(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function AOG(b,c,d,e,f){var g;a:{g=b.b;if(c<=g&&g<(c+e|0)){c=b.a;if(d<=c&&c<(d+f|0)){c=1;break a;}}c=0;}return c;}
var AKo=G();
var AL0=G();
function AIZ(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EK()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new V4;d.addEventListener("change",BB(e,"handleEvent"));d.click();}
function AEV(){var a=this;B.call(a);a.B7=null;a.B9=null;a.B8=0;}
function ATl(a,b){var c,d,e;c=a.B7;d=a.B9;e=a.B8;d.e(X6(c,(b.i.b+e|0)-c.fQ.b|0));}
function AEW(){var a=this;B.call(a);a.xq=null;a.xp=null;a.xr=0;}
function AWY(a,b){var c,d,e;c=a.xq;d=a.xp;e=a.xr;d.e(Sy(c,(b.i.a+e|0)-c.fQ.a|0));}
var PE=G(BU);
function JV(){var a=this;B.call(a);a.b9=0;a.cA=0;a.e7=0;}
function VZ(a,b,c){var d=new JV();AUo(d,a,b,c);return d;}
function AUo(a,b,c,d){a.b9=b;a.cA=c;a.e7=d;}
function Gv(a){return a.cA-a.b9|0;}
function R2(a,b){return a.b9<=b&&b<a.cA?1:0;}
function AX_(a){var b,c,d,e;b=a.b9;c=a.cA;d=!a.e7?C(20):C(511);e=J();F(Bj(P(F(P(Bj(e,91),b),C(32)),c),41),d);return I(e);}
function ABu(b,c){var d,e,f,g;c=c.data;d=0;e=c.length-1|0;while(d<=e){f=(d+e|0)>>>1|0;g=c[f];if(g.cA<=b)d=f+1|0;else{if(b>=g.b9)return f;e=f-1|0;}}return d;}
function AJJ(b,c,d){var e,f,g,h,i,j;e=d.data;f=e.length;if(!f)return;g=ABu(b,d);while(g<f){h=e[g];i=h.b9;if(b<i)h.b9=Z(b,i+c|0);j=h.cA;if(b<j)h.cA=Z(b,j+c|0);g=g+1|0;}}
function API(b,c,d){var e,f,g,h,i;d=d.data;e=d[c];f=c?0:1;g=c!=(d.length-1|0)?0:1;h=!f&&!g?(b*2|0)+1|0:b+1|0;a:{if(Gv(e)<=h)e.e7=1;else{b:{if(!f){e=d[c];i=d[c-1|0];if(Gv(e)>=b){h=i.cA;f=e.b9;if(h==f){i.cA=h+b|0;e.b9=f+b|0;break b;}}e=new Di;W(e);L(e);}}if(!g){e=d[c];i=d[c+1|0];if(Gv(e)>=b){c=e.cA;h=i.b9;if(c==h){e.cA=c-b|0;i.b9=h-b|0;break a;}}e=new Di;W(e);L(e);}}}}
function AK_(b,c,d,e){API(b,c,d);API(b,c,e);}
function T8(){B.call(this);this.yg=null;}
function A50(a){return a.yg.j9();}
function YR(){B.call(this);this.tK=null;}
function AXO(a,b){var c,d;c=a.tK;d=c.eV+1|0;c.eV=d;c=J();F(F(P(c,d),C(512)),b);$rt_globals.console.info($rt_ustr(I(c)));}
var AAa=G();
function A4U(a){return En(1);}
function AHS(){B.call(this);this.uC=null;}
function ASb(a,b){a.uC.e(Fd(b));}
function R5(){B.call(this);this.Dr=null;}
function ASq(a,b){a.Dr.d();}
function AGM(){var a=this;B.call(a);a.tZ=null;a.t1=null;}
function A6R(a){var b,c;b=a.tZ;c=a.t1;DK(b);c.d();}
var Gj=G(Hk);
var AP6=G(FQ);
function A1p(a,b){var c=new AP6();ASj(c,a,b);return c;}
function ASj(a,b,c){a.mC=1;a.m2=1;a.kw=b;a.pD=c;}
function Zi(){B.call(this);this.vk=null;}
function AWP(a,b){ANb(a.vk,b);}
function Zj(){B.call(this);this.GS=null;}
function AZ0(a,b){var c,d;c=a.GS;b=Gu(c,b.i);if(b!==null){YS(c,b);b=Bm(c);d=c.c;Ph(b,d.r,d.y);Ir(c);}}
var AJj=G(0);
function AFc(){var a=this;B.call(a);a.AT=null;a.AU=0;a.AR=0;a.AS=null;a.AV=0;a.AW=0;}
function AZT(a,b){var c,d,e,f,g,h,i;c=a.AT;d=a.AU;e=a.AR;f=a.AS;g=a.AV;h=a.AW;i=Ci(c.M,5.0);d=Bc((c.M.bD.b-d|0)-i|0,Z((i-d|0)-c.K.h.b|0,b.i.b));e=Bc((c.M.bD.a-e|0)-i|0,Z((i-e|0)-c.K.h.a|0,b.i.a));V(f,d+g|0,e+h|0);c.gR=c.gR&(-5);Ee(c,f,c.P.h);}
function AFU(){var a=this;DM.call(a);a.jl=null;a.mz=null;a.dR=null;a.pj=null;a.LR=null;a.KQ=null;}
function AW3(a,b,c){var d=new AFU();APx(d,a,b,c);return d;}
function APx(a,b,c,d){Im(a,b,c,d);d=Lq(b);a.mz=d;b=KM(d);a.dR=b;d=new AHo;d.Ga=a;b.mQ=d;b=II(a,b,25.0);a.jl=b;d=new AHm;d.t9=a;b.iI=d;d=new AHn;d.w0=a;b.iF=d;a.dR.no=a;AQj(a,c);DY(a.v,a.jl);}
function K2(a){T(X(),C(513));Cn(a.v.m,a.dR);}
function VE(a){return a.v.m.bT;}
function AQj(a,b){a.fx=b;DX(a.jl,b.ch);GM(a.mz,b);Gt(a.dR,b);}
function L9(a,b){var c,d;c=a.dR;Cn(c.bN,c);c=a.dR;d=new AFs;d.z7=a;d.z8=b;IH(c,b,d);}
function ARR(a){if(VE(a)===a.dR)Cn(a.v.m,null);a.jl=null;a.dR=null;a.mz=null;a.pj=null;}
function A1V(a,b){var c,d,e,f,g,h;c=new Bn;d=new Vm;d.z9=a;BT(c,d,C(514));e=a.mz;f=a.dR;d=a.iC;g=a.v;Bs(g);h=new Vl;h.t5=g;return N9(Jz(e,f,d,a,f,h),b,c);}
function AD$(a){var b,c,d;b=a.v;c=b.m.bk;d=new XD;d.EX=a;EM(c,J0(b,d));}
function A3I(a,b){if(AGl(b)){AD$(a);return 1;}if(b.Q!=27)return 0;if(!On(b))P0(a.v);else JX(a.jl);return 1;}
var Ue=G();
function AVc(a){return En(1);}
var Lx=G(0);
function ARz(a,b,c){Jk(b);}
function APP(a,b){var c;c=new TZ;c.yr=a;c.ys=b;return c;}
function Mx(){var a=this;DM.call(a);a.my=null;a.cH=null;a.Bx=null;a.j7=null;a.gp=null;a.wb=null;}
function Bav(a,b,c){var d=new Mx();AHh(d,a,b,c);return d;}
function AHh(a,b,c,d){var e,f,g;Im(a,b,c,d);a.j7=Gy();a.gp=Gy();e=new SY;Fg(e);e.kR=Lq(b);d=WE(b.m);e.e6=d;e.mJ=FR(d);f=new Rl;Fg(f);d=new BS;ATz();AO_(d,A_s);f.Gh=d;e.rj=f;d=KM(e.kR);e.g3=d;e.Lk=a;Nm(e,BA(CD,[e.mJ,e.rj,d]));e.Iq=En(1);a.cH=e;X0(e,c);g=Ff(C(515),0);Ev(g);c=new AEo;c.u7=a;g.cy=c;D_(a.cH.e6,g);ABM(a.cH.e6);c=VN(a,a.cH,C(516),0.0);a.my=c;d=new AEn;d.Ah=a;c.iI=d;d=new AEp;d.xu=a;c.iF=d;DY(b,c);Cn(b.m,a.cH.e6);}
function A0p(a,b){var c,d,e,f,g,h,i;if(Cd(a.cH.g3,b)){c=a.cH;d=c.kR;c=c.g3;e=a.iC;f=a.v;Bs(f);g=new Xw;g.Hl=f;return ADA(Jz(d,c,e,a,c,g),b);}h=K(Bn,1);i=h.data;b=new Bn;c=new Xv;c.tH=a;BT(b,c,C(517));i[0]=b;return Cx(h);}
function AHR(a){var b,c;b=a.v.m.bk;c=new Tl;c.tF=a;Gh(b,c);}
function A2W(a){a.my=null;a.cH=null;a.j7=null;a.gp=null;}
function A1a(a,b){a.fx=b;DX(a.my,b.ch);X0(a.cH,b);}
function A07(a,b){var c,d,e;c=b.gE;d=DT(c);a.Bx=d;e=B5(a.j7,d);if(e!==null)S0(a,e);else{b=X();e=J();F(F(e,C(518)),d);T(b,I(e));if(HH(a.gp,d)){b=J();F(F(b,C(519)),d);$rt_globals.console.info($rt_ustr(I(b)));}else{DL(a.gp,d,d);b=new Ss;b.zi=a;b.zj=d;e=new St;e.ww=a;e.wv=d;VS(c,b,e);}}}
function S0(a,b){Ik(a.cH.g3,b);b=a.cH;Cn(b.kR.bF.m,b.g3);}
function AWW(a,b){var c;AHU(b);if(Hv(b)>0)He(a.cH.e6);c=b.gq.data;if(c.length==1&&!b.g2.data.length)c[0].cy.d();}
function A3$(a,b){if(Hv(b)>0)He(a.cH.e6);LY(b);}
function A3L(a,b,c){if(AMy(c)!==C(277))SR(b);else Jk(b);}
var AHi=G();
function AYk(a){return En(1);}
var AH4=G(C$);
var Baw=null;function AAv(b){return I(Dj(J(),b));}
function ALd(){Baw=H($rt_floatcls());}
var GC=G();
var Bax=null;var Bay=null;var A9U=null;var A9T=null;var A9S=null;function AOn(){Bax=Cf([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bay=AA3([Bh(1),Bh(10),Bh(100),Bh(1000),Bh(10000),Bh(100000),Bh(1000000),Bh(10000000),Bh(100000000),Bh(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A9U=AA3([Bh(1),Bh(10),Bh(100),Bh(10000),Bh(100000000),
D(1874919424, 2328306)]);A9T=new AFp;A9S=new W5;}
var J7=G();
var Baz=0;var BaA=null;var BaB=null;function AOQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.uf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.pn=0;c.pb=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Er(Dq(Bh(d),Bh(8388608)),CY)){d=d<<1;f=f+(-1)|0;}}g=DB(BaB,f);if(g<0)g= -g|0;h=BaB.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=J2(d,BaA.data[e],i);if(j<Baz){while($rt_ucmp(j,Baz)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=BaB.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=J2(d,
BaA.data[e],i);}e=d<<1;d=e+1|0;h=BaA.data;f=g+1|0;k=h[f];l=i-1|0;m=J2(d,k,l);n=J2(e-1|0,BaA.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?U($rt_udiv(j,o),o):q<0?U($rt_udiv(j,k),k)+k|0:U($rt_udiv((j+(k/2|0)|0),k),k);if(DP(Bh(d),Bh(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.pn=d;c.pb=g-50|0;}
function J2(b,c,d){return DV(C2(Cg(Dq(Bh(b),D(4294967295, 0)),Dq(Bh(c),D(4294967295, 0))),32-d|0));}
function ANU(){Baz=$rt_udiv((-1),10);BaA=Cf([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);BaB=Cf([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function W5(){var a=this;B.call(a);a.pn=0;a.pb=0;a.uf=0;}
var AH7=G();
function A5b(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AH6(){B.call(this);this.wc=null;}
function A0M(a,b){var c,d,e;c=a.wc;d=0;e=b.length;while(d<e){c.e(ALF(b[d],K(BH,0)));d=d+1|0;}}
function AHq(){B.call(this);this.Hg=null;}
function A1S(a,b){var c,d;c=a.Hg;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.e(A7a(b,K(BH,0),K(BH,0)));}
var AHp=G();
function A2l(a,b){$rt_globals.console.info("showDirectoryPicker error: "+b);}
function AFZ(){var a=this;H3.call(a);a.dZ=null;a.e_=null;a.n9=0;}
function LJ(a){var b=new AFZ();A2V(b,a);return b;}
function A2V(a,b){var c,d,e,f,g;c=b.data;a.dZ=b;d=c.length;a.e_=BC(d);a.n9=0;e=0;while(e<d){b=a.e_.data;f=a.n9;b[e]=f;g=c[e];a.n9=f+(!g.e7?1:Gv(g))|0;e=e+1|0;}}
function A0u(a){return a.n9;}
function Pa(a,b){var c,d,e;c=ABu(b,a.dZ);d=a.dZ.data;if(c>=d.length)return (-1);e=d[c];if(!R2(e,b))return (-1);return !e.e7?ER(c):(a.e_.data[c]+b|0)-e.b9|0;}
function FV(a,b){var c,d,e,f;c=ABu(b,a.dZ);d=a.dZ.data;if(c>=d.length)return (-1);e=d[c];if(!R2(e,b))return (-1);f=a.e_.data[c];if(e.e7)f=(f+b|0)-e.b9|0;return f;}
function AJ0(a,b){var c,d,e,f,g,h;if(b<0){c=new Bq;Bd(c,C(520));L(c);}d=DB(a.e_,b);if(d<0){e=( -d|0)-2|0;if(e>=0){f=a.dZ.data;if(e<f.length){c=f[e];g=b-a.e_.data[e]|0;h=c.b9+g|0;if(h>=c.cA)h=(-1);return h;}}return (-1);}c=a.dZ.data[d];while(true){b=d+1|0;if(b>=a.e_.data.length)break;if(Gv(c))break;c=a.dZ.data[b];d=b;}return !c.e7?ER(d):c.b9;}
function AWB(a,b,c,d){var e,f,g,h,i,j,k,l;if(b<0){e=new Bq;Bd(e,C(520));L(e);}f=b;while(f<c){g=DB(a.e_,f);if(g>=0){e=a.dZ.data[g];while(true){h=g+1|0;if(h>=a.e_.data.length)break;if(Gv(e))break;e=a.dZ.data[h];g=h;}if(e.e7)f=AK3(b,f,c,d,e.b9,e.cA);else d.data[f-b|0]=ER(g);}else a:{h=( -g|0)-2|0;if(h>=0){i=a.dZ.data;if(h<i.length){e=i[h];j=f-a.e_.data[h]|0;k=e.b9+j|0;l=e.cA;if(k<l){f=AK3(b,f,c,d,k,l);break a;}d.data[f-b|0]=(-1);break a;}}d.data[f-b|0]=(-1);}f=f+1|0;}}
function AK3(b,c,d,e,f,g){var h,i,j;while(true){h=e.data;i=c-b|0;j=f+1|0;h[i]=f;c=c+1|0;if(c>=d)break;if(j>=g)break;f=j;}return c-1|0;}
function WR(){B.call(this);this.uJ=null;}
function AQ5(a){Ho(a.uJ,37,3);}
function WS(){B.call(this);this.vF=null;}
function ASN(a){Ho(a.vF,40,3);}
function WT(){B.call(this);this.w$=null;}
function A6s(a){Ho(a.w$,42,3);}
function WU(){B.call(this);this.Cc=null;}
function AUu(a){Ho(a.Cc,45,3);}
function WV(){B.call(this);this.CR=null;}
function AWw(a){Ho(a.CR,45,5);}
function Vj(){B.call(this);this.wU=null;}
function AZV(a,b){var c,d;c=a.wU;d=new Bt;Bd(d,$rt_str(b.message));c.e(d);}
function PN(){var a=this;B.call(a);a.Ku=null;a.A8=0.0;a.IG=0.0;a.hQ=null;a.k3=null;a.qq=null;a.hl=0;}
function APT(a,b){var c;if(b!==null){a.k3=b;return a;}c=new Bq;Bd(c,C(521));L(c);}
function AK0(a,b){var c;if(b!==null){a.qq=b;return a;}c=new Bq;Bd(c,C(521));L(c);}
function ACa(a,b,c,d){var e,f,g,$$je;e=a.hl;if(!(e==2&&!d)&&e!=3){a.hl=d?2:1;while(true){try{f=AL6(a,b,c);}catch($$e){$$je=Kk($$e);if($$je instanceof Bt){g=$$je;L(A0H(g));}else{throw $$e;}}if(Iz(f))return f;if(Jn(f)){if(d&&El(b)){g=a.k3;Hs();if(g===A$g)return EI(Ce(b));if(Ce(c)<=N(a.hQ))return A$j;FM(b,b.Y+Ce(b)|0);if(a.k3===A$h)Oj(c,a.hQ);}return f;}if(TH(f)){g=a.k3;Hs();if(g===A$g)return f;if(g===A$h){if(Ce(c)<N(a.hQ))return A$j;Oj(c,a.hQ);}FM(b,b.Y+LI(f)|0);}else if(M6(f)){g=a.qq;Hs();if(g===A$g)break;if
(g===A$h){if(Ce(c)<N(a.hQ))return A$j;Oj(c,a.hQ);}FM(b,b.Y+LI(f)|0);}}return f;}b=new CP;W(b);L(b);}
function ANq(a,b){var c,d,e,f;c=a.hl;if(c&&c!=3){b=new CP;W(b);L(b);}if(!Ce(b))return AMq(0);if(a.hl)a.hl=0;d=AMq(Z(8,Ce(b)*a.A8|0));while(true){e=ACa(a,b,d,0);if(Jn(e))break;if(Iz(e))d=AEd(a,d);if(!OI(e))continue;W2(e);}b=ACa(a,b,d,1);if(OI(b))W2(b);while(true){f=a.hl;if(f!=3&&f!=2)break;a.hl=3;if(Jn(A$k)){d.e5=d.Y;d.Y=0;d.ll=(-1);return d;}d=AEd(a,d);}b=new CP;W(b);L(b);}
function AEd(a,b){var c,d,e;c=b.kg;d=IP(c,Z(8,c.data.length*2|0));e=AOv(d,0,d.data.length);FM(e,b.Y);return e;}
function AGR(){var a=this;B.call(a);a.bp=0;a.bz=0;}
function D2(a,b){var c=new AGR();AOD(c,a,b);return c;}
function AOD(a,b,c){a.bp=b;a.bz=c;}
function AQN(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return a.bp==c.bp&&a.bz==c.bz?1:0;}return 0;}
function AWq(a){var b,c,d,e;b=K(B,2).data;b[0]=Ck(a.bp);b[1]=Ck(a.bz);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e!==null?AMM(e):0)|0;d=d+1|0;}return c;}
function ARk(a){var b,c,d;b=a.bp;c=a.bz;d=J();Bj(P(F(P(Bj(d,40),b),C(32)),c),41);return I(d);}
function A4A(a,b){var c;b=b;c=BG(a.bp,b.bp);if(!c)c=BG(a.bz,b.bz);return c;}
function Hj(){var a=this;B.call(a);a.c0=0;a.e8=0;a.iV=0;a.nF=null;a.i9=null;a.nQ=0;a.dN=null;}
function AHl(a,b,c,d){var e=new Hj();A4Z(e,a,b,c,d);return e;}
function AXh(a,b,c,d,e,f){var g=new Hj();A23(g,a,b,c,d,e,f);return g;}
function A4Z(a,b,c,d,e){var f;a.nQ=(-1);a.c0=b;a.e8=c;f=NO(a,b,c,d,e);a.nF=f;a.iV=d;a.dN=e;if(!d)a.i9=f;a.i9=NO(a,f.b,f.a,d,e);}
function A23(a,b,c,d,e,f,g){var h;a.nQ=(-1);a.c0=b;a.e8=c;h=BR(f,g);a.nF=h;a.iV=d;a.dN=e;if(!d)a.i9=h;a.i9=NO(a,h.b,h.a,d,e);}
function KH(a){var b,c;b=0;c=0;while(c<N(a.dN)){if(Be(a.dN,c)==10)b=b+1|0;c=c+1|0;}return b;}
function NO(a,b,c,d,e){var f,g;if(!d&&!C_(e)){f=(AEH(e)).data;g=new Y;d=f.length-1|0;Sz(g,d,N(f[d]));d=g.b;if(d)return BR(b+d|0,g.a);return BR(b,c+g.a|0);}return BR(b,c);}
var AJ$=G(C9);
function Ta(){var a=this;B.call(a);a.xG=null;a.xF=null;a.xE=null;a.xK=0;a.xJ=0;a.xI=0;a.xH=0;a.xD=0;a.xC=0;a.xA=0;a.DZ=0;}
function A4W(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.xG;d=a.xF;e=a.xE;f=a.xK;g=a.xJ;h=a.xI;i=a.xH;j=a.xD;k=a.xC;l=a.xA;m=a.DZ;n=Ci(c.M,5.0);o=c.P.hX();CA(d,c.P.h);CA(e,c.P.f);switch(f){case -1:f=Bc(h+(b.i.b-g|0)|0,c.M.bD.b-n|0);g=o.b;h=h+i|0;f=Z(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Z((i+b.i.b|0)-g|0,Z(o.b,n-c.K.f.b|0));}b:{switch(j){case -1:f=Z(n,Bc(l+(b.i.a-k|0)|0,(c.M.bD.a+c.K.h.a|0)-n|0));g=o.a;h=l+m|0;f=Z(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a=
Z((m+b.i.a|0)-k|0,o.a);}Ee(c,e,d);}
function To(){var a=this;EE.call(a);a.cg=null;a.jJ=null;a.FS=null;a.eo=null;a.ci=null;a.fM=null;a.gS=null;a.eq=0;a.gM=0;a.Hj=null;a.eM=0;a.fB=0;a.i6=0;a.hh=0;a.g5=0;a.da=0;a.fN=null;a.mb=null;a.DC=null;a.j_=null;}
function A9a(a,b){var c=new To();APR(c,a,b);return c;}
function APR(a,b,c){Jv(a);a.jJ=new Y;a.ci=BaC;a.fM=K(Ku,0);a.eM=0;a.fB=0;a.i6=0;a.hh=0;a.g5=0;a.fN=AM9(0);a.j_=Gy();a.cg=b;a.mb=c;a.Hj=c;}
function YL(a){return a.ci.data.length?0:1;}
function AAg(a,b){V0(a);a.ci=b;}
function V0(a){V(a.jJ,0,0);}
function Zm(a,b,c){a.DC=b;a.FS=c;a.eo=null;a.fN=null;a.gM=0;V0(a);}
function A6r(a){a.gS=BI(a.gS,null);V(a.jJ,0,0);E8(a.j_);a.fN=null;a.ci=BaC;a.fM=null;a.eM=0;a.fB=0;a.i6=0;a.mb=null;}
function AQ9(a,b,c,d){var e;e=a.E===d?0:1;FP(a,b,c,d);a.eq=BF(2.0,a.E);if(e){a.eo=null;a.gM=0;a.fN=null;ABB(a);}}
function AZe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=KO(a.cg);if(YL(a))return;Sg(a);Cm(c,a.eo);d=Fo(a);e=AMQ(c,a.gM);f=Bc(GE(a.h.a,d),a.ci.data.length)+30|0;g=a.DC.G3;h=a.fM.data;i=h.length;if(i<f){a:{j=a.hh;k=a.g5;l=a.ci;m=a.fN;n=a.j_;o=K(Ku,f);if(i>0){p=o.data;while(j<=k){c=l.data[j];f=j%p.length|0;q=j%i|0;r=h[q];if(r!==null&&r.ir!==c){AGz(m,r,n);p[f]=NA(c,m,e,n);h[q]=null;}else if(r!==null&&p[f]===null){p[f]=r;h[q]=null;}else p[f]=NA(c,m,e,n);j=j+1|0;}}else if(f>0)
{p=o.data;while(true){if(j>k)break a;p[j%p.length|0]=NA(l.data[j],m,e,n);j=j+1|0;}}}f=0;while(f<i){c=h[f];if(c!==null){AGz(m,c,n);h[f]=null;}f=f+1|0;}a.fM=o;CA(a.jJ,Nz(a.fN));ABK(a,a.cg.bM);}a.hh=Bc((a.D.a+a.eq|0)/(Fo(a)+a.eq|0)|0,a.ci.data.length-1|0);a.g5=Bc((((a.D.a+a.h.a|0)-1|0)+a.eq|0)/(Fo(a)+a.eq|0)|0,a.ci.data.length-1|0);if(!a.fM.data.length)return;AMJ(a,e);AGk(a,b);r=g.FI;c=a.f;Bi(b,c.b,c.a,a.h,r);c=a.f;q=c.b;i=c.a;j=Ci(a.cg,2.0);s=a.cg.cp;t=a.hh;u=q+j|0;while(t<=a.g5){m=AA5(a,t);f=U(t,d);v=t+1|0;w
=f+U(v,a.eq)|0;x=u+a.eM|0;y=x+a.fB|0;z=a.da!=t?0:1;ba=!z?r:g.wd;n=!z?g.x9:g.ni;bb=!z?g.t3:g.ni;bc=!z?g.uQ:g.ni;bd=(i+w|0)-a.D.a|0;Dd(b,u,bd,m.k9,m.wY,a.gS,n,ba,a.cg.cO);Dd(b,x,bd,m.lD,m.ne,a.gS,bb,ba,a.cg.cO);Dd(b,y,bd,m.k$,m.mI,a.gS,bc,ba,a.cg.cO);be=m.k9.b;k=u+be|0;V(s,Z(0,a.eM-be|0),m.k9.a);Bi(b,k,bd,s,ba);f=u+a.eM|0;k=m.lD.b;bf=f+k|0;V(s,Z(0,a.fB-k|0),m.lD.a);Bi(b,bf,bd,s,ba);f=m.k$.b;be=y+f|0;V(s,Z(0,(((a.h.b-f|0)-a.fB|0)-a.eM|0)-j|0),m.k$.a);Bi(b,be,bd,s,ba);bg=(q+a.h.b|0)-j|0;V(s,j,d+a.eq|0);Bi(b,bg,
bd,s,r);t=v;}EA(b);}
function AMJ(a,b){var c,d,e,f,g,h;c=0;d=a.hh;while(d<=a.g5){e=AA5(a,d);if(!(e!==null&&e.ir===a.ci.data[d])){f=a.fM.data;g=a.ci;e=a.fN;h=a.j_;c=d%f.length|0;if(f[c]!==null)AGz(e,f[c],h);f[c]=NA(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){CA(a.jJ,Nz(a.fN));ABK(a,a.cg.bM);}}
function ABK(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.jJ;c=Ef(b,c.b+150|0,c.a,a.cg.cO);Cm(c,a.eo);d=a.eo;e=d.er;f=e-(e+d.eQ)/16.0;g=a.fM.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.ir.nu;k=d.ne;BX(c,j,k.ba+a.gM,f+k.bj);j=d.ir.nJ;d=d.mI;BX(c,j,d.ba+a.gM,f+d.bj);}i=i+1|0;}a:{d=a.j_;if(d.dj>0){h=d.du;i=0;b:while(true){g=d.cj.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.c2;l=j.c_;k=k;l=l.oe;BX(c,k,l.ba+a.gM,f+l.bj);j=j.dp;if(h!=d.du)break b;}i=i+1|0;}b=new F0;W(b);L(b);}}if(a.gS===null)a.gS=CS(b);Da(a.gS,
c);Em(c);}
function AA5(a,b){var c;c=a.fM.data;return c[b%c.length|0];}
function ABB(a){var b,c,d,e,f,g,h,i,j;if(YL(a))return;Sg(a);b=KO(a.cg);Cm(b,a.eo);c=AMQ(b,a.gM);d=a.ci.data;e=d.length;f=0;while(f<e){g=d[f];h=Ox(c,g.jc);i=Ox(c,g.nu);j=Ox(c,g.nJ);a.eM=Z(a.eM,h);a.fB=Z(a.fB,i);a.i6=Z(a.i6,j);f=f+1|0;}}
function A4z(a,b,c){var d;if(Cd(a,b.i)){d=AD5(a,b.i);if(d>=0)a.da=d;EN(a.cg.dd);}}
function ASW(a,b,c){if(!Cd(a,b.i)){b=a.Hj;if(b!==null)b.d();}return A$6;}
function AWk(a,b,c,d){var e;if(d==1){e=AD5(a,b.i);if(e>=0)Xr(a,a.ci.data[e]);}return 1;}
function Xr(a,b){a.mb.d();b.xX.d();}
function AD5(a,b){var c,d,e;if(!a.fM.data.length)return (-1);c=Fo(a);d=(b.a-a.f.a|0)+a.D.a|0;e=a.eq;e=(d+e|0)/(c+e|0)|0;if(e<a.ci.data.length)return e;return (-1);}
function Fo(a){return Fk(a.eo);}
function Sg(a){var b;if(a.eo===null){b=FC(a.cg,a.FS);a.eo=b;a.fN=AM9(Fk(b));a.gM=DG(a.eo.Gk);}}
function A5N(a,b){var c,d,e;a:{switch(b.Q){case 13:Xr(a,a.ci.data[a.da]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.da=a.hh;b=a.eI;c=a.D;JN(b,c.b,c.a-(a.h.a/2|0)|0);return 0;case 34:a.da=a.g5;b=a.eI;c=a.D;JN(b,c.b,c.a+(a.h.a/2|0)|0);return 0;case 35:case 39:a.da=a.ci.data.length-1|0;break a;case 36:case 37:a.da=0;break a;case 38:d=a.da;e=a.ci.data.length;a.da=((d+e|0)
-1|0)%e|0;break a;case 40:a.da=(a.da+1|0)%a.ci.data.length|0;break a;default:break a;}a.mb.d();return 0;}if(a.eo===null)T(X(),C(522));else{e=a.da;if(e<=a.hh)JN(a.eI,a.D.b,U(e,Fo(a))+U(a.da,a.eq)|0);else if(e>=a.g5)JN(a.eI,a.D.b,(U(e+1|0,Fo(a))+U(a.da+2|0,a.eq)|0)-a.h.a|0);}return 0;}
var X2=G();
function AYa(a){}
function AHo(){B.call(this);this.Ga=null;}
function AVK(a,b,c,d){b=a.Ga;c=b.KQ;if(c!==null)c.e(b.dR.c);}
function AHm(){B.call(this);this.t9=null;}
function AXm(a){var b,c;b=a.t9;Cn(b.v.m,b.pj);c=b.LR;if(c!==null)c.e(b);}
function AHn(){B.call(this);this.w0=null;}
function AR$(a){var b;b=a.w0;b.pj=!(b.dR!==VE(b)?0:1)?null:b.dR;}
function SY(){var a=this;Ig.call(a);a.Iq=null;a.Lk=null;a.kR=null;a.rj=null;a.mJ=null;a.e6=null;a.g3=null;}
function ATQ(a){var b,c,d,e;b=a.h.b/4|0;c=b+Ca(a,1.0)|0;d=AON(a.f);e=BR(b,a.h.a);a.ck.data[0].cz(d,e,a.E);d.b=a.f.b+b|0;e.b=c-b|0;a.ck.data[1].cz(d,e,a.E);d.b=a.f.b+c|0;e.b=a.h.b-c|0;a.ck.data[2].cz(d,e,a.E);}
function X0(a,b){IR(a.e6,b);J_(a.e6,a.mJ);GM(a.kR,b);Gt(a.g3,b);}
function A15(a){var b,c;b=ALX(a.g3);c=AMs(a.mJ);return BR((b.b+a.rj.h.b|0)+c.b|0,b.a);}
function AEo(){B.call(this);this.u7=null;}
function ASu(a){AHR(a.u7);}
function AEn(){B.call(this);this.Ah=null;}
function AV4(a){var b;b=a.Ah;Cn(b.v.m,b.wb);}
function AEp(){B.call(this);this.xu=null;}
function A3G(a){var b,c;b=a.xu;c=b.v.m.bT;if(b.cH.g3!==c)c=null;b.wb=c;}
function H_(){C$.call(this);this.iY=CY;}
var BaD=null;function AQP(a){return DV(a.iY);}
function VA(b){return I(Os(J(),b));}
function AXg(a){return VA(a.iY);}
function AQw(a){var b;b=a.iY;return DV(b)^A9G(b);}
function Dn(b,c){return Long_udiv(b, c);}
function AM2(b,c){return Long_urem(b, c);}
function DP(b,c){return Long_ucompare(b, c);}
function AN2(){BaD=H($rt_longcls());}
var V4=G();
function AZf(a,b){}
function AFJ(){var a=this;B.call(a);a.wX=0;a.HD=0;}
function EU(a,b){var c;c=a.HD;if(c<=0)return 0;return Zq(a.wX,b,c);}
function AFf(){B.call(this);this.qG=null;}
var BaC=null;function ATM(){var a=new AFf();AJs(a);return a;}
function AJs(a){a.qG=BQ();}
function Zx(a,b,c,d,e){var f;f=new LS;f.xX=e;f.nu=c;f.nJ=d;f.jc=b;Bp(a.qG,f);}
function AHf(a){return E5(a.qG,BaC);}
function AEj(b){return b===null?C(20):AGg(b);}
function APS(){BaC=K(LS,0);}
function Ku(){var a=this;B.call(a);a.wY=null;a.ne=null;a.mI=null;a.k9=null;a.lD=null;a.k$=null;a.ir=null;}
function NA(b,c,d,e){var f,g,h;f=new Ku;f.k9=new Y;f.lD=new Y;f.k$=new Y;f.ir=b;g=B5(e,b.jc);if(g!==null)g.kv=g.kv+1|0;else{g=new AGL;h=K0(c,b.jc,d);g.kv=1;g.oe=h;DL(e,b.jc,g);}e=g.oe;f.wY=e;V(f.k9,e.S|0,e.bd|0);e=K0(c,b.nu,d);f.ne=e;V(f.lD,e.S|0,e.bd|0);b=K0(c,b.nJ,d);f.mI=b;V(f.k$,b.S|0,b.bd|0);return f;}
function AGz(b,c,d){var e,f,g;e=c.ir.jc;f=B5(d,e);g=f.kv-1|0;f.kv=g;if(!g){Md(d,e);Jl(b,f.oe);}Jl(b,c.ne);Jl(b,c.mI);}
function M1(){var a=this;EE.call(a);a.AD=null;a.gb=null;a.fP=null;a.kW=null;a.te=null;a.K$=null;a.ic=null;a.kJ=0;a.C9=0;a.qA=0.0;a.qz=0.0;a.AQ=null;a.ob=null;a.nI=null;a.td=null;a.tb=null;a.E7=null;}
var BaE=0;var BaF=0;function AQv(a){var b=new M1();AKy(b,a);return b;}
function AKy(a,b){Jv(a);a.gb=D7();a.fP=new Y;a.kW=new Y;a.te=new BS;a.K$=new BS;a.ic=new V_;a.kJ=16;a.AD=b;}
function OX(a,b,c,d){var e,f,g,h;e=new ZH;f=BaE;e.e2=AKA(0);e.gH=K($rt_arraycls($rt_bytecls()),0);e.gs=BC(0);e.j3=(-1.0);g=new Nl;g.mk=A4$();e.l3=g;g=new AEG;g.gT=e;e.G_=g;e.G0=b;e.lV=f;e.DE=c;e.vf=a.E7;if(!d){a.tb=e;a.qz=0.0;}else{a.td=e;a.qA=0.0;}g=new ADW;g.EZ=a;g.E0=d;if(!d){h=new ADV;h.tp=a;}else{h=new ADU;h.wP=a;}c=new Sm;c.xw=e;c.xx=g;b.wk(c,h);if(a.E!==0.0)MM(a);}
function ACu(a,b){var c;c=a.E7;if(c!==null)c.e(b);else T(B0(),b);}
function AZm(a){a.nI=T9(a.nI);}
function A2k(a,b,c,d){var e;e=a.E===d?0:1;FP(a,b,c,d);if(e&&a.gb!==null)Yj(a);}
function MM(a){var b,c,d,e,f,g,h,i;if(a.E===0.0)T(B0(),C(523));b=Ca(a,2.0);c=Ca(a,10.0);d=Ca(a,3.0);e=a.kJ;d=U(e-1|0,d);f=a.fP.b;g=d+U(e,f)|0;f=((((((((f*4|0)+c|0)+b|0)+c|0)+g|0)+c|0)+(b*3|0)|0)+c|0)+g|0;h=a.qA;i=e;b=Z((h+i-1.0)/i|0,(a.qz+i-1.0)/i|0);a.C9=b;Mn(a,f,U(a.fP.a,b+5|0));Ge(a);}
function IT(b){return (b<10?b+48|0:(b-10|0)+65|0)&65535;}
function Yj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.gb.lz;c=A81(b.fn,b.eN*1.0,b.ih,b.j1);a.AQ=c;b=a.AD.bM;d=a.E;c=Fe(b,c.fn,BF(c.eN,d),c.ih,0);a.ob=c;e=B2(2);f=e.data;g=AIK(256).data;h=0;Cm(b.bE,c);i=0;while(i<16){f[0]=IT(i);j=0;while(j<16){f[1]=IT(j);c=EC(e);k=D5(b.bE,c);g[(i*16|0)+j|0]=k;h=Z(h,k+0.9375|0);j=j+1|0;}i=i+1|0;}l=HW(a.ob,1.0);c=a.ob;m=(l+c.er-c.eQ)*0.5;c=a.fP;c.a=l;c.b=h;n=Ef(b,h*16|0,l*16|0,1);Cm(n,a.ob);i=0;while(i<16){f[0]=IT(i);o=0;while(o<16){f[1]=IT(o);BX(n,EC(e),U(o,h)+0.5*(h-g[o*17|0]),
m+U(i,l));o=o+1|0;}i=i+1|0;}a.nI=Y1(b,n);Em(n);MM(a);}
function AS7(a){var b;b=BF(20.0,a.E);return BR(b,b);}
function AVq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=Ca(a,2.0);d=Ca(a,10.0);e=Ca(a,3.0);f=a.f.b;g=a.fP;h=g.b;i=(f+(h*4|0)|0)+d|0;f=(i+c|0)+d|0;j=a.kJ;j=(((f+U(j,h)|0)+U(j,e)|0)-e|0)+d|0;k=j+(c*2|0)|0;l=(k+c|0)+d|0;m=a.D.a;h=g.a;n=m/h|0;o=Bc((((m+a.h.a|0)+h|0)-1|0)/h|0,a.C9);p=a.eI;if(p!==null){g=a.gb.bC;Hu(p,g.lb,g.lg);}H9(b,a.f,a.h);g=a.f;Bi(b,g.b,g.a,a.h,a.gb.bC.df);while(n<o){AKZ(a,b,n,(U(n,a.fP.a)-m|0)+a.f.a|0,f,l,e);n=n+1|0;}V(a.kW,c,a.h.a);g=a.gb.bC.qi;Bi(b,i,a.f.a,a.kW,g);Bi(b,j,a.f.a,a.kW,g);Bi(b,k,a.f.a,
a.kW,g);EA(b);b=a.td;if(b!==null)AAz(b,BaF);b=a.tb;if(b!==null)AAz(b,BaF);}
function AKZ(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd;h=c*a.kJ;i=a.f.b;j=a.fP.b;k=a.gb;l=k.bC.df;m=k.hJ.nm;n=k.n8.data[0].f9;o=k.fV.mA;k=a.td;p=k!==null&&ABL(k,h,a.ic)?1:0;q=!p?null:a.ic.hP;r=!p?0:a.ic.gf;k=a.tb;s=k!==null&&ABL(k,h,a.ic)?1:0;t=!s?null:a.ic.hP;u=!s?0:a.ic.gf;v=0;while(v<4){w=h%256.0|0;Ok(a,b,i+U((4-v|0)-1|0,j)|0,d,w,m,l);h=(h-w)/256.0;v=v+1|0;}x=0;g=j+g|0;while(x<a.kJ){y=q!==null&&(r+x|0)<q.data.length?1:0;z=t!==null&&(u+x|0)<t.data.length?1:0;ba=!y?(-1):255&q.data[r
+x|0];bb=!z?(-1):255&t.data[u+x|0];bc=ba!=bb?0:1;bd=U(x,g);if(y)Ok(a,b,e+bd|0,d,ba,n,!bc?o:l);if(z)Ok(a,b,f+bd|0,d,bb,n,!bc?o:l);x=x+1|0;}}
function Ok(a,b,c,d,e,f,g){var h,i,j,k,l;h=e&15;i=e>>4&15;j=a.te;k=a.fP;e=k.b;l=U(h,e);h=k.a;Cb(j,l,U(i,h),e,h);Dd(b,c,d,a.fP,a.te,a.nI,f,g,1);}
function AYc(a,b,c){if(Cd(a,b.i))CH(c,null);}
function ANt(){BaE=262144;BaF=8388608;}
var LR=G(0);
function AMO(){var a=this;B.call(a);a.nS=0.0;a.qp=null;}
function AXr(a,b){var c=new AMO();AWu(c,a,b);return c;}
function AWu(a,b,c){a.nS=b;a.qp=YC(c,1-c|0);}
function ARi(a,b,c){U3(b,a.nS);}
function AZ4(a,b,c,d){var e,f,g,h,i,j,k;e=BaE;f=(b/e|0)+7|0;g=(b%e|0)+17|0;if(b>=a.nS)AF$(d,b,C(499));else{h=YC(f,g);i=CG(AN4(c,a.nS-b)|0);j=i.data;Vo(h,i);k=0;c=j.length;while(k<c){if(M0(a.qp)<0.03125)j[k]=CC(a.qp,255)<<24>>24;k=k+1|0;}AE3(d,b,i);}}
function Rl(){CD.call(this);this.Gh=null;}
function AQV(a,b){var c;c=a.f;Bi(b,c.b,c.a,a.h,a.Gh);}
function AFp(){var a=this;B.call(a);a.pR=CY;a.oY=0;a.t0=0;}
function U9(){var a=this;B.call(a);a.Gt=null;a.Gr=null;a.Gs=null;}
function AUb(a){var b,c,d,e,f;b=a.Gt;c=a.Gr;d=a.Gs;e=X();f=J();F(Bj(F(Bj(F(f,b),9),c),9),d);T(e,I(f));}
function V_(){var a=this;B.call(a);a.hP=null;a.gf=0;}
function AG6(){var a=this;B.call(a);a.u9=null;a.u$=null;}
function A4I(a){var b,c;b=a.u9;c=a.u$;IK(b.k,c);Kr(c);}
var Wp=G(0);
var A_s=null;function ATz(){ATz=Bg(Wp);AYb();}
function AYb(){A_s=M(C(162));}
function LS(){var a=this;B.call(a);a.xX=null;a.nu=null;a.nJ=null;a.jc=null;}
function AAt(){var a=this;B.call(a);a.tz=null;a.Dt=null;a.zm=0;a.Ag=0;}
function Ps(a,b){return Ce(a.Dt)<b?0:1;}
function Rg(){B.call(this);this.Bj=null;}
function ARS(a,b){Eh(a.Bj,b);}
var D3=G(0);
function AAi(){var a=this;B.call(a);a.lu=0;a.s9=0;a.nz=0;a.jk=0;a.kY=null;}
function B6(a){return a.lu>=a.nz?0:1;}
function B7(a){var b,c;R_(a);b=a.lu;a.jk=b;c=a.kY;a.lu=b+1|0;return c.kp(b);}
function Ov(a){var b,c,d;if(a.jk<0){b=new CP;W(b);L(b);}R_(a);a.kY.os(a.jk);a.s9=a.kY.bZ;c=a.jk;d=a.lu;if(c<d)a.lu=d-1|0;a.nz=a.nz-1|0;a.jk=(-1);}
function R_(a){var b;if(a.s9>=a.kY.bZ)return;b=new F0;W(b);L(b);}
function Xi(){B.call(this);this.FT=null;}
function AV9(a,b){Nc(a.FT,b);}
function AG4(){var a=this;B.call(a);a.Bm=null;a.Bl=null;}
function AYf(a){Cn(a.Bm,a.Bl);}
function Un(){B.call(this);this.xW=null;}
function A2b(a){Nb(a.xW);}
function LV(){var a=this;PN.call(a);a.B_=null;a.E8=null;}
function AL6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.B_;e=0;f=0;g=a.E8;a:{b:{while(true){if((e+32|0)>f&&El(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ce(b)+k|0;h=j.length;f=Bc(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BU;c=J();P(F(P(F(c,C(524)),l),C(99)),h);Bd(b,I(c));L(b);}if(Ce(b)<m){b=new Px;W(b);L(b);}if(m<0){b=new BU;c=J();F(P(F(c,C(100)),m),C(101));Bd(b,I(c));L(b);}n=b.Y;h=n+b.pv|0;e=0;while(e<m){o=k+1|0;i=b.sB.data;l=h+1|0;j[k]=i[h];e=e+1|0;k=o;h=l;}b.Y
=n+m|0;e=0;}if(!El(c)){p=!El(b)&&e>=f?A$k:A$j;break a;}i=g.data;n=Ce(c);o=i.length;n=Bc(n,o);q=new AF8;q.w2=b;q.F2=c;p=AP$(a,d,e,f,g,0,n,q);e=q.Aq;if(p===null&&0==q.oZ)p=A$k;k=q.oZ;h=0;if(c.tk){b=new KZ;W(b);L(b);}if(Ce(c)<k)break;if(h>o){b=new BU;c=J();Bj(P(F(P(F(c,C(102)),h),C(96)),o),41);Bd(b,I(c));L(b);}l=h+k|0;if(l>o){b=new BU;c=J();P(F(P(F(c,C(104)),l),C(99)),o);Bd(b,I(c));L(b);}if(k<0){b=new BU;c=J();F(P(F(c,C(100)),k),C(101));Bd(b,I(c));L(b);}o=c.Y;m=0;while(m<k){l=o+1|0;n=h+1|0;AD7(c,o,i[h]);m=m+1|
0;o=l;h=n;}c.Y=c.Y+k|0;if(p!==null)break a;}b=new Kb;W(b);L(b);}b=new BU;c=J();Bj(P(F(P(F(c,C(102)),k),C(96)),h),41);Bd(b,I(c));L(b);}FM(b,b.Y-(f-e|0)|0);return p;}
var VB=G(LV);
function AP$(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Oz(h,2))break a;i=A$k;break a;}c=k+1|0;n=j[k];if(!GF(a,n)){c=c+(-2)|0;i=EI(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Oz(h,3))break a;i=A$k;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!GF(a,n))break b;if(!GF(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(AHZ(p)){c=k+(-3)|0;i=EI(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EI(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Oz(h,4))break a;i=A$k;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ce(h.F2)<2?0:1)break a;i=A$j;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!GF(a,n))break c;if(!GF(a,o))break c;if(!GF(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Ia(r);m=c+1|0;j[c]=Hr(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EI(1);break a;}c=k+(-3)|0;i
=EI(1);}h.Aq=c;h.oZ=f;return i;}
function GF(a,b){return (b&192)!=128?0:1;}
function Rx(){var a=this;B.call(a);a.LI=null;a.LJ=null;a.LK=null;}
var Go=G(Bt);
function ACf(){var a=this;B.call(a);a.xT=0;a.ry=0;a.E5=0;a.n3=0;a.Fq=null;}
function AJl(a){return a.n3<=0?0:1;}
function AJY(a){var b,c,d;b=a.n3-1|0;a.n3=b;if(b<0){c=new Go;W(c);L(c);}c=a.Fq;if(c.i0>a.xT){c=new F0;W(c);L(c);}b=a.ry;a.E5=b;d=c.eS.data;c=d[b];a.ry=AFQ(b,d.length);return c;}
function Uq(){B.call(this);this.xY=null;}
function AWm(a){AEw(a.xY);}
function Up(){B.call(this);this.Ct=null;}
function A1u(a){AHH(a.Ct);}
function Us(){B.call(this);this.C_=null;}
function A6p(a){AH0(a.C_);}
function Ur(){B.call(this);this.Hi=null;}
function AYZ(a){ACo(a.Hi);}
function UT(){B.call(this);this.zW=null;}
function AW6(a){var b;b=a.zW.kU;N_();Jm(b,A_6,null,0);}
var AJw=G();
function Ro(b,c,d){return ALn(b,0,c,d,Hq());}
function ALn(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=BG(c,d);h=g>=0?0:1+GX(f,2.0)|0;g=g>0?0:1+GX(f,3.0)|0;i=GX(f,4.0);j=A8$(h+g|0);k=0;l=c+1|0;while(k<h){if(i<=0){Bp(j,Ff(C(20),0));i=GX(f,4.0);continue;}i=i+(-1)|0;m=J();P(F(m,C(525)),k);Bp(j,ALn(I(m),l,d,e,f));k=k+1|0;}k=0;while(k<g){a:{n=new Dr;o=J();P(F(o,C(526)),k);Kx(n,I(o),l);o=new Tj;o.xb=n;n.m6=o;switch((l+k|0)%3|0){case 0:break;case 1:SR(n);break a;case 2:n.hD=60136;break a;default:break a;}Jk(n);}if(M0(f)<0.25){o=Ib(n.iK,0);o.bL=o.bL|2;}if(i>0){i=i+(-1)
|0;Bp(j,n);k=k+1|0;}else{Bp(j,Ff(C(20),0));i=GX(f,4.0);}k=k+1|0;}o=APl(b,c,E5(j,A_9));b=new ZU;b.AL=o;b.AN=e;o.gv=b;o.cy=b;if((c+c|0)>d)IZ(o);else Ih(o);return o;}
function AEP(){B.call(this);this.ub=null;}
function AQu(a){He(a.ub);}
function AEQ(){B.call(this);this.wS=null;}
function ATm(a){He(a.wS);}
function XG(){var a=this;B.call(a);a.FW=null;a.FV=null;}
var AKn=G(0);
function ANS(b,c,d,e,f,g){f=f.data;f[JT(0,0)]=Fe(g,b,c,d,0);f[JT(0,1)]=Fe(g,b,c,d,2);f[JT(1,0)]=Fe(g,b,c,e,0);f[JT(1,1)]=Fe(g,b,c,e,2);return f[JT(0,0)];}
function ZH(){var a=this;B.call(a);a.DE=null;a.G0=null;a.e2=null;a.gH=null;a.gs=null;a.lV=0;a.kq=0;a.mh=0;a.j3=0.0;a.l3=null;a.G_=null;a.vf=null;}
function AAz(a,b){var c,d,e,f,g,h,i,j,k;a.kq=a.kq+1|0;while(true){c=a.gs.data;d=c.length;if(d<=0)break;e=a.mh;if(e<=b)break;f=d-1|0;g=c[f];h=0;i=f;while(h<f){j=c[h];if(j<g){i=h;g=j;}h=h+1|0;}a.mh=e-a.gH.data[i].data.length|0;c=a.e2;d=c.data.length;k=AKA(d-1|0);if(i>0)BE(c,0,k,0,i);e=i-1|0;if(e<d)BE(c,i+1|0,k,i,(d-i|0)-1|0);a.e2=k;c=a.gH;d=c.data.length;k=B_(c,d-1|0);if(e<d)BE(c,i+1|0,k,i,(d-i|0)-1|0);a.gH=k;a.gs=Kg(a.gs,i);}}
function ABL(a,b,c){var d,e,f,g,h,i,j,k;d=a.j3;if(d>=0.0&&b>=d){c.hP=null;c.gf=a.lV;return 0;}e=ALZ(a.e2,b);if(e>=0){c.hP=a.gH.data[e];c.gf=a.e2.data[e]-b|0;a.gs.data[e]=a.kq;return 1;}f=( -e|0)-1|0;e=a.lV;g=e;d=b-b%g;if(f>0){h=f-1|0;i=a.e2.data;if(h<i.length){j=i[h];i=a.gH.data[h];if(j<b&&b<j+i.data.length){c.hP=i;c.gf=b-j|0;a.gs.data[h]=a.kq;return 1;}if(j===d){c.hP=null;c.gf=d+g-b|0;return 0;}}}c.hP=null;i=a.e2.data;if(i.length<=f)c.gf=e;else c.gf=i[f]-b|0;k=XI(d);if(!Mb(a.l3,k)){AIA(a.l3.mk,k,k);a.G0.uW(d,
a.lV,a.G_);}return 0;}
var PL=G(0);
function ADW(){var a=this;B.call(a);a.EZ=null;a.E0=0;}
function ADV(){B.call(this);this.tp=null;}
function A17(a,b){var c,d;c=a.tp;d=J();F(F(d,C(527)),b);ACu(c,I(d));}
function ADU(){B.call(this);this.wP=null;}
function AWR(a,b){var c,d;c=a.wP;d=J();F(F(d,C(528)),b);ACu(c,I(d));}
function Zo(){var a=this;B.call(a);a.Av=null;a.Aw=0;}
function A44(a,b){NV(a.Av,b,a.Aw);}
function YW(){B.call(this);this.Cr=null;}
function A6k(a,b){var c,d,e;c=a.Cr;d=BL(b);e=J();F(F(e,C(529)),d);$rt_globals.console.info($rt_ustr(I(e)));d=new Rq;d.HM=c;HY(b,d);}
function AEF(){B.call(this);this.wD=null;}
function A3w(a,b){var c,d,e,f;c=a.wD;d=BL(b);e=J();F(F(e,C(530)),d);$rt_globals.console.info($rt_ustr(I(e)));f=c.p.bt.cS;d=new AD2;d.IZ=c;d.xV=b;e=new AD1;e.JO=c;Ot(f,b,0.0,(-1),d,e);}
function G$(){B.call(this);this.kF=0;}
var BaG=null;var BaH=null;var BaI=null;function AVV(a){var b=new G$();ALg(b,a);return b;}
function ALg(a,b){a.kF=b;}
function HP(b){return !b?BaH:BaG;}
function ANe(){BaG=AVV(1);BaH=AVV(0);BaI=H($rt_booleancls());}
function J4(){C$.call(this);this.iM=0.0;}
var BaJ=null;function XI(b){var c;c=new J4;c.iM=b;return c;}
function AZA(a){var b;b=a.iM;return I(HR(J(),b));}
function A7q(a,b){if(a===b)return 1;return b instanceof J4&&Er(N3(b.iM),N3(a.iM))?1:0;}
function N3(b){if(!($rt_globals.isNaN(b)?1:0))return $rt_doubleToRawLongBits(b);return D(0, 2146959360);}
function A2D(a,b){var c,d,e,f,g;b=b;c=a.iM;d=b.iM;e=(c<=d?0:1)-(d<=c?0:1)|0;if(!e){f=1.0/c;g=1.0/d;e=(((f<=g?0:1)-(g<=f?0:1)|0)+(d!==d?0:1)|0)-(c!==c?0:1)|0;}return e;}
function ANw(){BaJ=H($rt_doublecls());}
var Kz=G();
var BaK=CY;var BaL=null;var BaM=null;function AKi(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=N3(b);c.t0=Er(Dq(d,D(0, 2147483648)),CY)?0:1;e=Dq(d,D(4294967295, 1048575));f=DV(A8L(d,52))&2047;if(Er(e,CY)&&!f){c.pR=CY;c.oY=0;return;}if(f)e=A7F(e,D(0, 1048576));else{e=H5(e,1);while(Er(Dq(e,D(0, 1048576)),CY)){e=H5(e,1);f=f+(-1)|0;}}g=BaM.data;h=f<<16>>16;i=0;j=g.length;k=BG(i,j);if(k>0){c=new Bq;W(c);L(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true){j=(i+k|0)/2|0;l=BG(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j
=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;i=j+1|0;h=12+(f-g[i]|0)|0;m=Jb(e,BaL.data[i],h);if(ASz(m,BaK)){while(DP(m,BaK)<=0){j=j+(-1)|0;m=C3(Cg(m,Bh(10)),Bh(9));}g=BaM.data;i=j+1|0;h=12+(f-g[i]|0)|0;m=Jb(e,BaL.data[i],h);}e=H5(e,1);d=C3(e,Bh(1));g=BaL.data;i=j+1|0;n=g[i];f=h-1|0;n=Jb(d,n,f);o=Jb(AC4(e,Bh(1)),BaL.data[i],f);p=Bh(1);while(true){q=Cg(p,Bh(10));if(DP(Dn(m,q),Dn(o,q))<=0)break;p=q;}r=Bh(1);while(true){s=Cg(r,Bh(10));if(DP(Dn(m,s),Dn(n,s))>=0)break;r=s;}i
=DP(p,r);e=i>0?Cg(Dn(m,p),p):i<0?C3(Cg(Dn(m,r),r),r):Cg(Dn(C3(m,ALx(r,Bh(2))),r),r);if(DP(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dn(e,Bh(10));if(DP(e,D(2808348672, 232830643))<0)break;}else if(DP(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cg(e,Bh(10));}c.pR=e;c.oY=j-330|0;}
function Jb(b,c,d){var e,f,g,h,i,j,k,l;e=Dq(b,Bh(65535));f=Dq(C2(b,16),Bh(65535));g=Dq(C2(b,32),Bh(65535));h=Dq(C2(b,48),Bh(65535));i=Dq(c,Bh(65535));j=Dq(C2(c,16),Bh(65535));k=Dq(C2(c,32),Bh(65535));l=Dq(C2(c,48),Bh(65535));return C3(C3(C3(H5(Cg(l,h),32+d|0),H5(C3(Cg(l,g),Cg(k,h)),16+d|0)),H5(C3(C3(Cg(l,f),Cg(k,g)),Cg(j,h)),d)),C2(C3(C3(C3(Cg(k,e),Cg(j,f)),Cg(i,g)),H5(C3(C3(C3(Cg(l,e),Cg(k,f)),Cg(j,g)),Cg(i,h)),16)),32-d|0));}
function AJ5(){BaK=Dn(Bh(-1),Bh(10));BaL=AA3([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);BaM=A8k([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Vu(){var a=this;B.call(a);a.T=null;a.ux=null;a.kQ=null;a.q0=null;a.oy=null;a.gx=null;}
function N9(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Mk();e=a.T.c;f=CR(e);e=HQ(e);g=a.T.go;if(ACm(g,f,e)!==null){h=new RX;h.D_=a;h.Ea=b;Dv(d,C(531),h);}if(PP(g,f,e)!==null){h=new RY;h.t8=a;h.t$=b;Dv(d,C(532),h);}if(AFA(g,f,e)!==null){e=new R0;e.DB=a;e.DA=b;Dv(d,C(533),e);}e=new RZ;e.zw=a;e.zx=b;Dv(d,C(534),e);OL(a);if(MN()){if(!a.T.fL){e=new UQ;e.yx=a;Dv(d,C(535),e);}e=new US;e.Bg=a;Dv(d,C(536),e);if(!a.T.fL&&YQ(OL(a))){e=new UO;e.vc=a;Dv(d,C(537),e);}}f=a.T;i=Ja(f,b);f=f.dc;if(!(f!==null&&V9(f,i)?1:0)){e=new TM;e.CO
=a;e.CN=b;Dv(d,C(538),e);}else{e=new TO;e.yn=a;e.yo=b;Dv(d,C(539),e);}if(c!==null)N5(d,c);if(A_M)Fc(d,C(540),AOy(a));f=Mk();j=K(BH,8).data;j[0]=C(277);j[1]=C(288);j[2]=C(307);j[3]=C(305);j[4]=C(306);j[5]=C(301);j[6]=C(300);j[7]=C(299);i=j.length;k=0;while(k<i){e=j[k];g=new QK;g.v5=a;g.v4=e;Dv(f,e,g);k=k+1|0;}Fc(d,C(541),G_(f));f=Mk();j=K(Bn,3);l=j.data;m=a.oy;Bs(m);h=new Ty;h.xL=m;l[0]=Cy(C(542),h);m=a.oy;Bs(m);h=new Tz;h.Al=m;l[1]=Cy(C(543),h);e=a.oy;Bs(e);h=new Tx;h.C3=e;l[2]=Cy(C(544),h);Jp(f,C(545),Cx(j),
BaN);j=K(Bn,2);l=j.data;m=a.kQ;Bs(m);h=new VR;h.uz=m;l[0]=Cy(C(546),h);m=a.kQ;Bs(m);h=new VT;h.zc=m;l[1]=Cy(C(547),h);Fc(f,C(548),Cx(j));m=new ADK;m.x1=a;Jp(f,C(549),m,BaN);if(a.T.bN.bM.nZ){l=K(Bn,2);j=l.data;g=new AC1;g.vM=a;j[0]=Cy(C(550),g);m=new AC0;m.FJ=a;j[1]=Cy(C(551),m);Fc(f,C(552),Cx(l));}Fc(d,C(553),G_(f));if(A_M)Fc(d,C(554),AOE(a,c!==null?0:1));return G_(d);}
function ADA(a,b){return N9(a,b,null);}
function ABp(a,b){var c,d;DK(a.gx.bF);c=a.T;d=Ja(c,b);if(!V9(c.dc,d))X4(c.dc,d);else{b=c.dc;if(!b.f2){b=b.cB;if(d==b.dO)b.dO=(-1);else M4(b,DB(b.b$,d));}else{b=b.cB;if(d==b.ef)b.ef=(-1);else M4(b,DB(b.cu,d));}}}
function OL(a){return a.T.bN.bk;}
function AOE(a,b){var c,d,e,f,g;c=Mk();d=K(Bn,5);e=d.data;f=a.T;Bs(f);g=new Wx;g.BV=f;e[0]=Cy(C(555),g);f=a.T;Bs(f);g=new Wz;g.w5=f;e[1]=Cy(C(556),g);f=a.T;Bs(f);g=new WA;g.Ao=f;e[2]=Cy(C(557),g);f=a.T;Bs(f);g=new Wu;g.vq=f;e[3]=Cy(C(558),g);f=a.T;Bs(f);g=new Wv;g.EJ=f;e[4]=Cy(C(559),g);Fc(c,C(560),Cx(d));if(b){f=new ZO;f.xd=a;Dv(c,C(561),f);}g=new ADH;g.x8=a;Jp(c,C(562),g,BaN);return G_(c);}
function AOy(a){var b,c,d,e;b=K(Bn,5);c=b.data;d=a.T;Bs(d);e=new AGH;e.A9=d;c[0]=Cy(C(563),e);d=a.T;Bs(d);e=new AGE;e.Dy=d;c[1]=Cy(C(564),e);d=a.T;Bs(d);e=new AGG;e.zB=d;c[2]=Cy(C(565),e);d=a.T;Bs(d);e=new AGI;e.uu=d;c[3]=Cy(C(566),e);d=a.T;Bs(d);e=new AGJ;e.EC=d;c[4]=Cy(C(567),e);b=b;c=a.T.kG.data;if(c[7]!==null)b=ALo(b,Cy(C(568),c[7]));return Cx(b);}
function R$(a,b){var c;c=new Vp;c.GC=a;c.GD=b;return c;}
function Lg(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DK(a.gx.bF);d=a.T.c;e=CR(d);f=HQ(d);g=a.T.go;if(c===null)h=null;else{A8Y();switch(BaO.data[c.d$]){case 1:h=PP(g,e,f);break a;case 2:h=ACm(g,e,f);break a;default:}b=new Fh;W(b);L(b);}}c=a.T;e=Gu(c,b);if(e!==null){g=Jy(c.c.g,e.bp,e.bz);f=Vi(c,g);if(h!==null){g=c.c;i=e.bp;j=e.bz;e=new Z3;e.I6=c;e.I7=b;e.I8=f;h.xt(g,i,j,e,c.lI);}else{e=B5(c.c.g.en,g);if(e!==null)Je(c,e);else{e=B5(c.c.g.ee,g);if(e!==null&&!e.dv())ACC(c.mM,b,e,c,f);else{c=c.mM;k=K(Bn,1);l=k.data;e=new Bn;f
=c.bF;Bs(f);g=new AED;g.GE=f;BT(e,g,C(569));l[0]=e;TX(c,b,Cx(k));}}}}}
function AFN(){var a=this;B.call(a);a.zO=null;a.zM=null;a.zN=null;}
function AUd(a,b,c,d){var e,f,g,h;b=a.zO;e=a.zM;f=a.zN;AE5(b,e);if(f!==null)d.o$.d();if(AF5(d)){f=d.ga;g=e.dx;h=e.hg;Yx(b,BR((f.b-(g*3|0)|0)-h|0,(f.a-g|0)-h|0),d.ps,e,d.xl);}}
function VM(){B.call(this);this.z4=null;}
function A4S(a,b,c){var d,e;c=a.z4;d=c.c.g;e=b.O;b=c.gj;AD0(d.u.data[e],0,b);}
var Lv=G(0);
var CX=G(EH);
var ABo=G(0);
var Xs=G(0);
function Nl(){CX.call(this);this.mk=null;}
var BaP=null;function AZL(a){var b,c;b=a.mk;if(b.i8===null){c=new AIg;c.Fe=b;b.i8=c;}return b.i8.bu();}
function AJR(){BaP=new B;}
function S9(){var a=this;B.call(a);a.I4=null;a.x0=0;}
function AZY(a,b){var c,d,e,f;c=a.x0;d=(KP(HG(b,0))).data;b=X();e=d[0];f=J();P(F(P(F(f,C(570)),c),C(571)),e);T(b,I(f));b=X();e=d[1];f=J();P(F(P(F(f,C(570)),c),C(572)),e);T(b,I(f));}
function Tj(){B.call(this);this.xb=null;}
function A3F(a){var b,c,d;b=a.xb;c=X();d=CZ(b);b=J();F(F(b,C(573)),d);T(c,I(b));}
function W0(){B.call(this);this.uO=null;}
function A3W(a,b,c){H1(B3(a.uO.c.g,b.O),0,N(c));}
var Zt=G(0);
function AEG(){B.call(this);this.gT=null;}
function AE3(a,b,c){var d,e,f,g,h,i,j,k,l;d=( -ALZ(a.gT.e2,b)|0)-1|0;if(d<0){e=B0();f=J();HR(F(f,C(574)),b);T(e,I(f));}else{g=c.data;e=a.gT;h=e.e2;i=h.data.length;j=AKA(i+1|0);k=j.data;BE(h,0,j,0,d);k[d]=b;l=d+1|0;BE(h,d,j,l,i-d|0);e.e2=j;e=a.gT;j=e.gH;i=j.data.length;k=B_(j,i+1|0);k.data[d]=c;BE(j,d,k,l,i-d|0);e.gH=k;e=a.gT;e.gs=Vt(e.kq,e.gs,d);e=a.gT;e.mh=e.mh+g.length|0;e=e.l3;f=XI(b);if(!(Yn(e.mk,f)!==BaP?0:1))T(B0(),C(575));DA(a.gT.DE);}}
function AF$(a,b,c){var d,e;if(AOq(c)){d=a.gT;if(d.j3<0.0)d.j3=b;else{d=d.vf;if(d!==null)d.e(c);else{d=B0();e=J();F(F(HR(F(e,C(576)),b),C(346)),c);T(d,I(e));}}}}
function ZU(){var a=this;B.call(a);a.AL=null;a.AN=null;}
function A3B(a){var b,c;b=a.AL;c=a.AN;if(!Ez(b))Ih(b);else IZ(b);c.d();}
var F0=G(Bt);
var KZ=G(Di);
var Kb=G(Bt);
var Px=G(Bt);
function AGN(){B.call(this);this.tV=null;}
function AP_(){var a=this;B.call(a);a.rk=null;a.o6=null;a.fy=null;a.oR=null;a.bH=null;a.sk=null;a.p3=null;a.g4=null;a.h_=null;a.lk=null;}
function AYq(a,b){var c=new AP_();A3k(c,a,b);return c;}
function A3k(a,b,c){var d,e,f;a.fy=b;a.oR=c;a.bH=A0d();a.lk=J();a.g4=Gy();b=new U$;d=APN(16);b.h9=0;b.eK=K(J5,d);b.CC=0.75;Xn(b);a.h_=b;b=new Xu;c=a.bH;e=a.lk;f=a.g4;b.d9=c;b.oD=e;b.wy=f;a.sk=b;b=new Xf;b.c5=c;b.pt=e;b.vy=f;a.p3=b;}
function AAf(a){var b,c,d;b=Oa(a.fy.fW);c=new Q5;c.DN=a;b.eT(c);b=a.fy.gu;if(b!==null)AC2(a,b);Br(a.bH,a.fy.fW.dj);b=(Oa(a.fy.fW)).bu();while(b.b0()){c=b.bG();Ga(a.bH,a.lk.J,N(c));By(a.lk,c);}b=(Oa(a.fy.fW)).bu();while(b.b0()){c=b.bG();c=B5(a.fy.fW,c);Br(a.bH,c.l);c=B4(c);while(B6(c)){d=B7(c);d=B5(a.g4,d);Br(a.bH,d.O);}}if(a.fy.gu===null)Br(a.bH,(-1));else{Br(a.bH,a.h_.h9);AD_(a,a.fy.gu);}if(a.oR===null)Br(a.bH,(-1));else{Br(a.bH,1);AI5(a.oR,a.bH,a.h_);}a.rk=S1(a.bH);a.o6=H7(I(a.lk));}
function AC2(a,b){var c,d,e,f,g,h;if(AGQ(a.h_,b))PM(a.h_,b);else{c=a.h_;d=Ck(c.h9);if(b===null){e=ACi(c);if(e===null){c.oc=c.oc+1|0;e=AGU(c,null,0,0);f=c.h9+1|0;c.h9=f;if(f>c.sn)AAb(c);}}else{g=Hz(b);h=g&(c.eK.data.length-1|0);e=AAh(c,b,h,g);if(e===null){c.oc=c.oc+1|0;e=AGU(c,b,h,g);f=c.h9+1|0;c.h9=f;if(f>c.sn)AAb(c);}}e.c_=d;}b=b.c1;if(b===null)return;c=new Y3;c.vA=a;b.eT(c);}
function AD_(a,b){var c,d,e,f;c=(PM(a.h_,b)).O;Br(a.bH,c);if(b instanceof OO)Br(a.bH,(-1));else if(!(b instanceof LT))Br(a.bH,0);else Br(a.bH,1);d=a.sk;Br(d.d9,b.fI.cT());e=b.fI;f=new Zu;f.Af=d;e.eT(f);d=a.p3;Br(d.c5,b.gw.cT());e=b.gw;f=new WW;f.yO=d;e.eT(f);d=b.nn;Br(a.bH,d.cT());e=new XV;e.F9=a;d.eT(e);d=b.jh;Br(a.bH,d.cT());d=d.bu();while(d.b0()){e=d.bG();Q2(a.sk,e.nq);Hm(a.p3,e.mN);Br(a.bH,e.u0);}d=b.yK;if(d===null)Br(a.bH,(-1));else Br(a.bH,(B5(a.g4,d)).O);b=b.c1;Br(a.bH,b.cT());d=new RV;d.tA=a;b.eT(d);}
function XZ(){var a=this;B.call(a);a.ym=null;a.yq=0;a.yp=0;}
function AQ0(a,b){var c,d,e,f,g;c=a.ym;d=a.yq;e=a.yp;if(c.jv){f=Ky(c);g=J();F(F(g,f),C(577));$rt_globals.console.info($rt_ustr(I(g)));}f=NM(b);if(f.iu==c.g.R){g=CR(c);if(!Bf(g,C(299))&&!Bf(g,C(301))&&!Bf(g,C(300))&&!Bf(g,C(277))?0:1){Py(c.g,f);Lf(c.g);}else{AF7(c.g,f);E8(c.g.ee);E8(c.g.en);Oc(c.g);Lf(c.g);PJ(c);}b=c.eu;if(b!==null){c=b.mQ;if(c!==null)c.eA(b,Ck(d),Ck(e));Dt(DF(b));}}}
function ZA(){B.call(this);this.uX=null;}
function A39(a,b){var c,d,e;c=a.uX;if(c.fl!=3){d=NM(b);e=d.iu;b=c.g;if(e==b.R){AF7(b,d);GZ(c,C(578));}}}
function AH5(){B.call(this);this.BA=null;}
function A1y(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.BA;d=BL(b);e=J();F(F(e,C(579)),d);$rt_globals.console.info($rt_ustr(I(e)));f=0;while(f<A$t.data.length){g=4080+f|0;h=c.oC.data.length;i=U(g,h);j=c.p.bt.cS;k=i;e=new AIF;e.El=c;e.Er=f;e.Es=g;d=B0();Bs(d);l=new AIG;l.uK=d;Ot(j,b,k,h,e,l);f=f+1|0;}l=c.p.bt.cS;d=new XY;d.Fw=c;d.Fv=b;c=B0();Bs(c);e=new XX;e.Gp=c;AQf(l,b,d,e);}
function Uc(){NP.call(this);this.d1=0;}
function Oe(a){return a.d1?0:1;}
function YX(a){return a.d1>=a.l?0:1;}
function Xa(a,b){var c,d,e,f,g,h,i;c=a.d1;d=a.l;e=BG(c,d);if(e>0){b=new Bq;W(b);L(b);}if(c>=0&&d<=d){if(e){f=d;g=d;while(g<d){h=a.b6.data;e=c+1|0;i=f+1|0;h[c]=h[f];g=g+1|0;c=e;f=i;}RS(a.b6,c,f,null);a.l=a.l-(f-c|0)|0;a.bZ=a.bZ+1|0;}a.d1=a.d1+1|0;return Bp(a,b);}b=new BU;W(b);L(b);}
function MS(a){var b,c;b=a.d1;if(!b)return null;c=b-1|0;a.d1=c;return B1(a,c);}
function ACy(a){var b;b=a.d1;if(!b)return null;return B1(a,b-1|0);}
function AEm(a){var b;b=a.d1;if(b==a.l)return null;a.d1=b+1|0;return B1(a,b);}
function AA4(a){var b;b=a.d1;if(b==a.l)return null;return B1(a,b);}
function AQH(a,b){return Xa(a,b);}
var AMb=G();
function Kj(b,c){return VZ(b,c,1);}
function Is(b,c){return VZ(b,c,0);}
function XD(){B.call(this);this.EX=null;}
function A1l(a,b){L9(a.EX,b);}
function Sm(){var a=this;B.call(a);a.xw=null;a.xx=null;}
function U3(a,b){var c,d;c=a.xw;d=a.xx;c.j3=b;c=d.EZ;if(!d.E0)c.qz=b;else c.qA=b;if(c.E!==0.0)MM(c);}
function AH3(){var a=this;B.call(a);a.C5=null;a.C6=null;}
function A4T(a,b){var c,d;c=a.C5;d=a.C6;DK(c);d.e(b);}
function AFi(){var a=this;B.call(a);a.Iy=null;a.IA=null;a.Iz=0;a.Ix=0;}
function AFO(){B.call(this);this.w1=null;}
var AI4=G();
function T0(b,c,d,e){var f,g,h,i,j,k;f=A0d();Br(f,d-c|0);g=0;while(c<d){h=B3(b,c);if(e){Br(f,1);Ga(f,g,h.F);g=g+h.F|0;}else{i=HB(h);Br(f,i);j=0;while(j<i){k=Ib(h,j);Ga(f,g,JC(k));g=g+JC(k)|0;j=j+1|0;}}g=g+1|0;c=c+1|0;}return S1(f);}
function AP2(b,c){return T0(b,0,Cl(b),c);}
function AOS(b){var c,d,e,f,g,h,i;c=JA(b);d=new ML;b=AI$(c);e=AI$(c);f=Ba(c);g=K(Fw,f);h=g.data;i=0;while(i<f){h[i]=J$(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));i=i+1|0;}Va(d,b,e,g);return d;}
function AI$(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=K(Dx,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1))e[g]=HT(h);else{j=new Dx;j.c$=h;j.pZ=BC(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].pZ.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
var ACq=G(0);
var Q_=G(0);
var F1=G();
function AHB(a,b){var c;c=new TQ;c.pA=a;c.u5=b;return c;}
function AJM(){var a=this;F1.call(a);a.Ff=null;a.on=0;a.qh=0;a.wR=0;}
function AUV(a,b,c){var d=new AJM();A6g(d,a,b,c);return d;}
function A6g(a,b,c,d){a.Ff=b;a.on=c;a.qh=d;a.wR=d-c|0;}
function AML(a,b){var c,d;a:{while(true){c=a.on;if(c>=a.qh)break a;d=a.Ff.data;a.on=c+1|0;if(b.bn(d[c]))continue;else break;}}return a.on>=a.qh?0:1;}
function AQO(a){return a.wR;}
function ALT(){var a=this;B.call(a);a.k5=null;a.p2=0;a.hf=0;}
function A0d(){var a=new ALT();AYp(a);return a;}
function AYp(a){a.p2=0;a.k5=BC(16);a.hf=0;}
function Ga(a,b,c){Br(a,b);Br(a,c);}
function Br(a,b){var c,d;c=a.k5;d=c.data.length;if(d==a.hf)a.k5=JO(c,d*2|0);c=a.k5.data;d=a.hf;a.hf=d+1|0;c[d]=b;}
function S1(a){var b,c,d,e,f;b=a.p2;if(b&&a.hf!=b){c=B0();b=a.p2;d=a.hf;e=J();F(P(F(P(F(e,C(580)),b),C(581)),d),C(582));T(c,I(e));}f=a.k5;b=f.data.length;d=a.hf;if(b!=d)f=JO(f,d);return f;}
function U$(){var a=this;Eq.call(a);a.h9=0;a.eK=null;a.oc=0;a.CC=0.0;a.sn=0;}
function APN(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Xn(a){a.sn=a.eK.data.length*a.CC|0;}
function AGQ(a,b){return YT(a,b)===null?0:1;}
function PM(a,b){var c;c=YT(a,b);if(c===null)return null;return c.c_;}
function YT(a,b){var c,d;if(b===null)c=ACi(a);else{d=Hz(b);c=AAh(a,b,d&(a.eK.data.length-1|0),d);}return c;}
function AAh(a,b,c,d){var e;e=a.eK.data[c];while(e!==null&&!(e.pV==d&&(b!==e.c2?0:1))){e=e.j0;}return e;}
function ACi(a){var b;b=a.eK.data[0];while(b!==null&&b.c2!==null){b=b.j0;}return b;}
function AGU(a,b,c,d){var e,f;e=new J5;Y_(e,b,null);e.pV=d;f=a.eK.data;e.j0=f[c];f[c]=e;return e;}
function AAb(a){var b,c,d,e,f,g,h,i;b=a.eK.data.length;b=APN(!b?1:b<<1);c=K(J5,b);d=c.data;e=0;f=b-1|0;while(true){g=a.eK.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.pV&f;i=h.j0;h.j0=d[b];d[b]=h;h=i;}e=e+1|0;}a.eK=c;Xn(a);}
function Xu(){var a=this;B.call(a);a.d9=null;a.oD=null;a.wy=null;}
function Q2(a,b){var c;if(!(b instanceof M7)){Br(a.d9,3);AHD(a,b);Br(a.d9,b.k8);}else{c=b;Br(a.d9,5);AHD(a,c);Br(a.d9,c.k8);Br(a.d9,c.A_);b=c.mX;Br(a.d9,b.l);c=new ZW;c.t_=a;Gs(b,c);}}
function AHD(a,b){var c;c=b.eP.hV;Ga(a.d9,a.oD.J,N(c));Br(a.d9,b.eP.dP);Qm(a,b.ls);By(a.oD,c);}
function Qm(a,b){if(b===null)Br(a.d9,(-1));else Br(a.d9,(B5(a.wy,b)).O);}
function Xf(){var a=this;B.call(a);a.c5=null;a.pt=null;a.vy=null;}
function Hm(a,b){var c,d,e;if(b instanceof HX){c=b;Br(a.c5,9);ABN(a,c.gn);}else if(b instanceof KF){d=b;Br(a.c5,3);ACj(a,d);Br(a.c5,d.tI);ABN(a,d.jN);}else if(b instanceof JS){e=b;Br(a.c5,4);Hm(a,e.jx);Hm(a,e.iZ);}else if(b===null)Br(a.c5,(-1));else{Br(a.c5,5);ACj(a,b);Br(a.c5,b.EU);}}
function ACj(a,b){var c;c=b.fk;if(c===null){Br(a.c5,(-1));XF(a,b.fU);}else{c=c.hV;Ga(a.c5,a.pt.J,N(c));Br(a.c5,b.fk.dP);XF(a,b.fU);By(a.pt,c);}}
function XF(a,b){if(b===null)Br(a.c5,(-1));else Br(a.c5,(B5(a.vy,b)).O);}
function ABN(a,b){var c;Br(a.c5,b.l);c=new Zc;c.BP=a;Gs(b,c);}
function WP(){var a=this;B.call(a);a.wn=0;a.wm=0;}
function Q0(){B.call(this);this.AB=null;}
function A69(a,b){var c,d,e,f,g;c=a.AB;d=X();e=BL(b);f=J();F(F(f,C(583)),e);T(d,I(f));e=c.w.bk.cS;d=new SV;g=K(B,1);g.data[0]=b;Dg(e,d,C(428),g);}
function W1(){B.call(this);this.ED=null;}
function A1z(a,b){var c,d,e,f,g;c=a.ED;d=X();e=BL(b);f=J();F(F(f,C(584)),e);T(d,I(f));e=c.w.bk.cS;d=new AEl;d.Ex=c;g=K(B,1);g.data[0]=b;Dg(e,d,C(585),g);}
function Re(){B.call(this);this.Jc=null;}
function AUK(a,b){var c,d,e;c=X();d=BL(b);e=J();F(F(e,C(586)),d);T(c,I(e));d=new AIu;d.Hr=b;c=B0();Bs(c);e=new AIt;e.vC=c;QW(b,d,e);}
function ABI(){B.call(this);this.BZ=null;}
function AXi(a,b){var c,d,e,f;c=a.BZ;d=X();e=BL(b);f=J();F(F(f,C(587)),e);T(d,I(f));d=new AFI;e=new UI;e.CE=c;d.oo=IF();c=BQ();d.eY=c;d.kO=1;d.kB=0;d.u1=e;Bp(c,I4(b));Bp(d.eY,b);e=X();A8Q();c=BaQ;f=J();F(F(f,C(588)),c);T(e,I(f));HY(b,d);}
var T1=G();
function AXF(a){return Ie();}
var ABS=G();
function ASv(a){return Ie();}
var ADL=G();
function AZ3(a){return Ie();}
var ZC=G();
function ATt(a){return Ie();}
var AHP=G();
function A3o(a){return Ie();}
function AEv(){var a=this;DM.call(a);a.mH=null;a.sF=null;a.zo=null;a.GK=0;}
function RN(a,b){return a!==b?0:1;}
function A5v(a){if(RN(a,a.v.m.bT))Cn(a.v.m,null);a.sF=null;a.mH=null;}
function A0$(a,b){return Cx(BA(Bn,[AFx(a,C(589),1),AFx(a,C(590),0)]));}
function AFx(a,b,c){var d,e;d=new Bn;e=new Qa;e.zR=a;e.zS=c;BT(d,e,b);return d;}
function AZp(a,b){if(a.GK&&b.Q==27){if(!On(b))P0(a.v);else JX(a.sF);return 1;}b.Q==118&&Lz(b)&&!b.bw;return 0;}
var Qq=G();
function AYV(a){return Ie();}
function Q9(){B.call(this);this.F4=null;}
function A4h(a,b){var c,d,e;c=a.F4;d=Dp(b,0);e=Dp(b,1);b=AOS(d);Mt(c.w1,b,e);}
function AAk(){B.call(this);this.yc=null;}
function A10(a){var b;b=a.yc;Cn(b.v.m,b.zo);}
function AAl(){B.call(this);this.ve=null;}
function A7e(a){var b,c;b=a.ve;c=b.v.m.bT;if(!RN(b,c))c=null;b.zo=c;}
var QR=G();
function A2M(a,b){}
function QP(){var a=this;B.call(a);a.zv=null;a.zu=null;}
function AX0(a,b){var c,d,e;c=a.zv;d=a.zu;b=BL(b);e=J();F(F(F(e,d),C(346)),b);CN(c,I(e));}
function Lt(){var a=this;EE.call(a);a.op=null;a.sx=null;a.C4=null;a.vo=0.0;}
var BaR=0;function AYe(a){var b;b=BF(20.0,a.E);return BR(b,b);}
function AYP(a,b,c,d){FP(a,b,c,d);Mn(a,c.b*3|0,c.a*5|0);a.C4.e(c);}
function AYs(a,b){var c,d,e,f,g,h,i,j,k,l,m;APZ(a,b);AGk(a,b);c=BF(30.0,a.E);d=a.D;e=d.b;f=U(e/c|0,c);g=d.a;h=U(g/c|0,c);d=a.h;i=U(((e+d.b|0)-1|0)/c|0,c);e=U(((g+d.a|0)-1|0)/c|0,c);d=a.sx;d.a=c;d.b=c;a.op.bd=1.0;while(h<=e){g=a.f.a-a.D.a|0;j=f;while(j<=i){k=a.f.b-a.D.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=APO(l);m=m+1|0;}Yu(APp(l),0.75,a.vo,a.op);Bi(b,k+j|0,g+h|0,a.sx,a.op);j=j+c|0;}h=h+c|0;}EA(b);}
function AUJ(a,b,c){return A$6;}
function A2S(a){var b,c,d,e;b=X();c=BaR+1|0;BaR=c;d=BL(a);e=J();F(F(P(Bj(e,91),c),C(591)),d);T(b,I(e));}
function A1n(a,b,c){if(Cd(a,b.i))CH(c,null);}
function AJq(){var a=this;B.call(a);a.n1=null;a.si=null;}
function AQi(){var a=this;B.call(a);a.KD=0;a.JI=0;a.uP=0;a.pz=0;}
function AHN(){var a=this;B.call(a);a.v0=null;a.v1=null;}
function AZE(a){var b,c,d,e,f,g;b=a.v0;c=a.v1;if(BN(c.n1,b.c.gd)){c=c.si;CE(b,c.pz,c.uP,0);Cc((Bm(b)).bY,c.pz,c.uP);Cc((Bm(b)).bO,c.JI,c.KD);}else{d=(BY(b.go.FZ)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){DF(b);b=new Tk;b.AK=g;b.AJ=c;Bs(b);c=new AGq;c.Ew=b;$rt_globals.setTimeout(BB(c,"onTimer"),0);}}}
function AHO(){var a=this;B.call(a);a.GW=null;a.GV=null;}
function A2a(a){Je(a.GW,a.GV);}
var AAV=G();
function AUZ(a,b){APw(b);}
function AEs(){var a=this;B.call(a);a.Hu=null;a.Hv=null;}
function ARo(a){var b,c;b=a.Hu;c=a.Hv;NH(b.p.bt,DT(c));}
var AOK=G();
function HG(b,c){return b.data[c];}
function Dp(b,c){return KP(b.data[c]);}
function APJ(b,c){return Yp(b.data[c]);}
function Jh(b,c){return b.data[c];}
function AEe(){var a=this;B.call(a);a.tL=null;a.tM=null;}
function AZF(a){var b,c;b=a.tL;c=a.tM;Cn(b.bF.m,c);AEJ(b);}
function AMt(){var a=this;B.call(a);a.pO=null;a.sS=null;a.B0=0;a.iu=0;a.nr=null;a.jQ=null;}
function NM(a){var b=new AMt();A5C(b,a);return b;}
function A5C(a,b){var c,d,e;c=b.data.length;if(c<3){d=new Bq;Bd(d,C(592));L(d);}a.pO=Dp(b,0);a.sS=APJ(b,1);e=(Dp(b,2)).data;a.B0=e[0];a.iu=e[1];if(c>=5){a.nr=Dp(b,3);a.jQ=APJ(b,4);}}
var ABA=G();
var BaS=null;function Py(b,c){AGs(b,c,0);}
function AGs(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.pO;f=c.sS;g=c.nr;h=c.jQ;i=JA(e);j=Ba(i);k=Ba(i);l=Ba(i);m=Cl(b);e=b.u;if(e.data.length<j)b.u=AJx(e,j);n=0;while(n<j){if(d&&n<m){o=4*Ba(i)|0;i.f7=i.f7+o|0;}else b.u.data[n]=Ei(AB_(i,f,0));n=n+1|0;}Oc(b);if(k)b.dt=AWx(AMn(i));E8(b.en);E8(b.ee);p=b.en;d=0;while(d<l){DL(p,D2(Ba(i),Ba(i)),D2(Ba(i),Ba(i)));d=d+1|0;}c=b.en;q=b.ee;r=NS(Pm(c));while(HD(r)){c=PT(r);p=c.c2;s=c.c_;Bs(BaS);c=B5(q,s);if(c===null){c=BQ();DL(q,s,c);}c.hZ(p);}if(q.rU===null){c=new Sd;c.Ay
=q;q.rU=c;}c=q.rU;p=new ACP;OR(p,c.Ay);while(HD(p)){Pf(p);c=p.iG.c_;r=A92;e=K(B,c.l);f=e.data;E5(c,e);LE(e,r);d=0;j=f.length;while(d<j){AKQ(c,d,f[d]);d=d+1|0;}}Tu(i);if(g!==null&&h!==null){c=AU1(g,h);RC(c);b.fO=A0x(c.r5,c.kz);b.dt=AWx(c.sw);}else b.dt=A6i(IV(0,AGb(b),0));}
function AF7(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;d=c.pO;e=d.data;f=c.sS;g=c.nr;h=c.jQ;if(!(e.length==1&&e[0]==(-1))){i=JA(d);j=Ba(i);k=Ba(i);l=Ba(i)!=1?0:1;m=Ba(i);n=Ba(i);c=KK(b,j);o=KK(b,k);p=(I$(B3(b,c.b),c.a)).data[0].o;e=(I$(B3(b,o.b),o.a)).data[1].o;q=0;r=m-1|0;while(q<m){d=AB_(i,f,j);if(!q)d=MT(p,d);if(q==r)d=MT(d,e);s=c.b+q|0;o=Ei(d);d=b.u.data;t=d[s];d[s]=o;if(!l&&HB(t)==HB(o)){u=0;while(u<HB(t)){v=t.o.data[u];w=o.o.data[u];x=v.b_;s=x!=5?0:1;if(!s&&x&&!w.b_){w.b_=x;w.bL=v.bL;}u=u+1|0;}}q
=q+1|0;}if(l){if(n){c=AMn(i);o=IV(j,k,(-1));AAw(b.dt,o,c);}else if(g!==null&&h!==null){c=AU1(g,h);RC(c);o=IV(j,k,(-1));AAw(b.dt,o,c.sw);o=b.fO;o.gu=b.dt.dq.cv;o.fW=c.kz;}}Tu(i);}}
function AB_(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=K(Cw,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=Ep(F5(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function APn(){BaS=new YD;}
function AD4(){F1.call(this);this.sP=null;}
function APm(a,b){var c,d,e;c=0;while(true){d=a.sP;if(d.l0===null)d.l0=B4(d.rW);if(!B6(d.l0))e=0;else{c=b.bn(B7(d.l0));e=1;}if(!e)return 0;if(!c)break;}return 1;}
function AXY(a){return DV(Bh(a.sP.rW.l));}
var Tt=G(0);
var IQ=G(0);
function AVh(a,b){var c,d,e;c=B0();d=Gr(Bv(a));e=J();F(F(F(e,d),C(593)),b);T(c,I(e));a.m4();}
function Rq(){var a=this;B.call(a);a.nj=0;a.HM=null;}
function A4C(a,b){var c,d;c=BL(b);d=J();F(F(d,C(594)),c);$rt_globals.console.info($rt_ustr(I(d)));a.nj=a.nj+1|0;HY(b,a);}
function A1$(a,b){var c;b=BL(b);c=J();F(F(c,C(595)),b);$rt_globals.console.info($rt_ustr(I(c)));}
function AWJ(a){var b;b=a.nj-1|0;a.nj=b;if(!b)T(X(),C(596));}
function AD2(){var a=this;B.call(a);a.IZ=null;a.xV=null;}
function AZB(a,b){var c,d,e,f;c=b.data;b=a.xV;d=X();b=BL(b);e=J();F(F(e,C(597)),b);T(d,I(e));b=X();f=c.length;d=J();P(F(d,C(598)),f);T(b,I(d));}
function AD1(){B.call(this);this.JO=null;}
function A0V(a,b){$rt_globals.console.info($rt_ustr(b));}
var ALs=G(0);
function Ot(b,c,d,e,f,g){var h,i,j;h=d%1.073741824E9|0;i=d/1.073741824E9|0;j=new AIz;j.Dl=g;j.Dk=f;DJ(b,1,j,C(599),BA(B,[c,Cf([e,h,i])]));}
function AQf(b,c,d,e){var f,g;f=new S3;f.yW=e;f.yX=d;g=K(B,1);g.data[0]=c;Dg(b,f,C(600),g);}
function AFu(){var a=this;B.call(a);a.y$=null;a.y_=null;}
function A5P(a){var b,c;b=a.y$;c=a.y_;NH(b.p.bt,DT(c));}
var Wf=G();
function A4m(a,b){b=b;return N0(Ek(b));}
var Mw=G(0);
var ALk=G();
function AFs(){var a=this;B.call(a);a.z7=null;a.z8=null;}
function AYn(a){var b,c;b=a.z7;c=DT(a.z8);CN(b.jl,c);}
function ABw(){var a=this;B.call(a);a.Fy=null;a.FB=null;a.Fz=null;}
function A1T(a,b,c){var d,e,f;d=a.Fy;e=a.FB;f=a.Fz;ACt(d,b,DT(e),c);f.d();}
function ABx(){B.call(this);this.vu=null;}
function AYD(a,b){T(a.vu,b);}
function J5(){var a=this;G8.call(a);a.pV=0;a.j0=null;}
function XE(){var a=this;B.call(a);a.Cw=null;a.Cv=0.0;}
function Ox(a,b){return Jg(a.Cw,b,a.Cv*2.0+0.875);}
function AOZ(){var a=this;B.call(a);a.Ni=null;a.Ng=null;a.Nh=0.0;}
function AIz(){var a=this;B.call(a);a.Dl=null;a.Dk=null;}
function A0o(a,b){var c,d,e;c=b.data;d=a.Dl;e=a.Dk;if(c[0] instanceof BH)d.e(Jh(b,0));else e.e(N6(c[0]));}
function AC9(){B.call(this);this.tC=null;}
function AVZ(a,b){var c,d,e,f,g,h;a:{c=a.tC;if(!APH(b,1)){d=b.data;e=0;f=d.length;g=f-1|0;b:{c:{d:{while(e<f){h=d[e];if(h<0){if(h==(-128))break c;if(h==(-1))break c;if(e==g){e=0;break b;}e=e+1|0;h=d[e];if(h>(-2)&&h<64)break d;if(h==127)break d;}e=e+1|0;}e=1;break b;}e=0;break b;}e=0;}if(e){e=1;break a;}}e=0;}if(!e){d=new $rt_globals.TextDecoder();b=AGY(b);c.fp(Fd(d.decode(b)),BaT);}else{d=new $rt_globals.TextDecoder("gbk");b=AGY(b);c.fp(Fd(d.decode(b)),C(601));}}
function AGL(){var a=this;B.call(a);a.oe=null;a.kv=0;}
function Q5(){B.call(this);this.DN=null;}
function ANi(a,b){var c;b=b;c=a.DN;if(HH(c.g4,b))B5(c.g4,b);else{c=c.g4;DL(c,b,Ck(c.dj));}}
function AIF(){var a=this;B.call(a);a.El=null;a.Er=0;a.Es=0;}
function A4J(a,b){var c,d,e,f,g,h,i;c=b.data;d=a.El;e=a.Er;f=a.Es;g=AIN(b);d.mt.data[e]=g;d.p4.data[e]=c.length;h=A$t.data;if(h[f-4080|0]!=g)d.ks=d.ks+1|0;else d.np=d.np+1|0;if((d.np+d.ks|0)==h.length){e=0;while(e<d.mt.data.length){b=X();f=4080+e|0;i=P3(d.mt.data[e]);g=d.p4.data[e];c=J();P(F(F(F(P(Bj(c,91),f),C(602)),i),C(603)),g);T(b,I(c));e=e+1|0;}if(!d.ks)T(X(),C(604));else{b=X();e=d.np;c=J();P(F(c,C(605)),e);T(b,I(c));b=X();e=d.ks;d=J();P(F(d,C(606)),e);T(b,I(d));}}}
function AIG(){B.call(this);this.uK=null;}
function A51(a,b){T(a.uK,b);}
var YD=G();
function AGC(){var a=this;B.call(a);a.Kl=null;a.lN=null;a.Lw=null;}
function YE(a){var b;if(a.lN!==null)return;b=new Zv;W(b);L(b);}
function Zy(){B.call(this);this.Dn=null;}
function ARP(a,b){var c,d,e,f;c=a.Dn;if(c.fl!=3){c.ju=3;d=NM(b);e=d.iu;f=c.g;if(e==f.R){if(d.B0!=1)Nc(c,b);else{AGs(f,d,c.ln!=3?0:1);GZ(c,C(607));}}}}
var SV=G();
function A2h(a,b){APw(b);}
function AEl(){B.call(this);this.Ex=null;}
function ATX(a,b){U_(a.Ex,b);}
function AIu(){B.call(this);this.Hr=null;}
function A5A(a,b){var c;c=a.Hr;AM$(OE(c),c,b);}
function AIt(){B.call(this);this.vC=null;}
function AR3(a,b){T(a.vC,b);}
function AFI(){var a=this;B.call(a);a.u1=null;a.oo=null;a.eY=null;a.kO=0;a.kB=0;}
function A5y(a,b){var c,d,e,f,g;if(a.oo!==IF()){b=new Bt;W(b);L(b);}Bp(a.eY,I4(b));Bp(a.eY,b);c=X();d=a.kB;a.kB=d+1|0;e=BL(b);f=a.eY.l;g=J();P(F(F(F(P(F(g,C(608)),d),C(370)),e),C(609)),f);T(c,I(g));a.kO=a.kO+1|0;HY(b,a);}
function AVd(a,b){var c,d,e,f;if(a.oo!==IF()){b=new Bt;W(b);L(b);}Bp(a.eY,OE(b));Bp(a.eY,b);c=X();d=a.kB;a.kB=d+1|0;b=BL(b);e=a.eY.l;f=J();P(F(F(F(P(F(f,C(610)),d),C(370)),b),C(609)),e);T(c,I(f));}
function A0Q(a){var b,c,d,e,f,g;if(a.oo!==IF()){b=new Bt;W(b);L(b);}c=a.kO-1|0;a.kO=c;if(!c){b=X();c=a.eY.l;d=J();P(F(d,C(611)),c);T(b,I(d));b=a.eY;d=a.u1;e=K(B,b.l);f=e.data;c=0;g=f.length;while(c<g){f[c]=B1(b,c);c=c+1|0;}U_(d.CE,e);}}
function UI(){B.call(this);this.CE=null;}
function F9(){var a=this;B.call(a);a.iL=null;a.c1=null;a.gw=null;a.fI=null;a.jh=null;a.nn=null;a.yK=null;}
function A8n(a){var b=new F9();AKN(b,a);return b;}
function AKN(a,b){a.iL=b;a.c1=BQ();a.gw=BQ();a.fI=BQ();a.nn=BQ();a.jh=BQ();}
function AId(a){var b;b=a.iL;if(b!==null)b.c1.tU(a);}
function Y3(){B.call(this);this.vA=null;}
function AS9(a,b){b=b;AC2(a.vA,b);}
var OO=G(F9);
var LT=G(F9);
function XY(){var a=this;B.call(a);a.Fw=null;a.Fv=null;}
function A1f(a,b){var c,d,e;c=a.Fw;d=a.Fv;e=b.rL;Ot(c.p.bt.cS,d,e,c.oC.data.length,new XS,new XT);}
function XX(){B.call(this);this.Gp=null;}
function AXP(a,b){T(a.Gp,b);}
function APi(){var a=this;B.call(a);a.j8=null;a.f7=0;}
function JA(a){var b=new APi();AY2(b,a);return b;}
function AY2(a,b){a.j8=b;a.f7=0;}
function Ba(a){var b,c;b=a.j8.data;c=a.f7;a.f7=c+1|0;return b[c];}
function Tu(a){var b,c,d,e;if(a.f7!=a.j8.data.length){b=B0();c=a.j8.data.length;d=a.f7;e=J();F(P(F(P(F(e,C(580)),c),C(612)),d),C(613));T(b,I(e));}}
function B$(){var a=this;B.call(a);a.j$=null;a.k1=null;a.vs=null;}
var BaU=null;var BaV=null;var BaW=null;var BaX=null;var BaY=null;var BaZ=null;var Ba0=null;var Ba1=null;var Ba2=null;var Ba3=null;var Ba4=null;var Ba5=null;var Ba6=null;var Ba7=null;var Ba8=null;var Ba9=null;var Ba$=null;var Ba_=null;var Bba=null;var Bbb=null;var Bbc=null;var Bbd=null;var Bbe=null;function AOM(){AOM=Bg(B$);ATG();}
function Cr(a,b){var c=new B$();AOA(c,a,b);return c;}
function A74(a,b,c){var d=new B$();AFW(d,a,b,c);return d;}
function AOA(a,b,c){AOM();AFW(a,b,c,C(20));}
function AFW(a,b,c,d){AOM();if(b!==null&&c!==null&&d!==null){if(!N(b)&&!N(c)){a.k1=C(20);a.j$=C(20);a.vs=d;return;}a.k1=b;a.j$=c;a.vs=d;return;}b=new EW;W(b);L(b);}
function Z1(){AOM();return BaU;}
function ATG(){var b,c;BaV=Cr(C(614),C(615));BaW=Cr(C(616),C(615));BaX=Cr(C(617),C(618));BaY=Cr(C(617),C(20));BaZ=Cr(C(614),C(20));Ba0=Cr(C(616),C(619));Ba1=Cr(C(616),C(20));Ba2=Cr(C(620),C(20));Ba3=Cr(C(620),C(621));Ba4=Cr(C(622),C(20));Ba5=Cr(C(622),C(623));Ba6=Cr(C(624),C(625));Ba7=Cr(C(624),C(20));Ba8=Cr(C(626),C(627));Ba9=Cr(C(626),C(20));Ba$=Cr(C(617),C(618));Ba_=Cr(C(617),C(618));Bba=Cr(C(617),C(628));Bbb=Cr(C(617),C(628));Bbc=Cr(C(614),C(629));Bbd=Cr(C(614),C(630));Bbe=Cr(C(20),C(20));if(Bbf===null)Bbf
=AVm();b=(Bbf.value!==null?$rt_str(Bbf.value):null);c=O4(b,95,0);BaU=A74(Cv(b,0,c),C0(b,c+1|0),C(20));}
function FS(){var a=this;B.call(a);a.LH=CY;a.KY=CY;a.Kf=null;a.Io=null;a.J$=0;a.LP=null;}
var Bbg=null;var Bbh=null;var Bbi=0;var Bbj=0;var Bbk=null;function AMu(){AMu=Bg(FS);ARr();}
function AV3(b){AMu();if(Bbh!==b)Bbh=b;Bbh.KY=DQ();}
function IF(){AMu();return Bbh;}
function ARr(){var b,c,d;b=new FS;AMu();c=null;b.Kf=new B;b.J$=1;b.Io=C(631);b.LP=c;d=Bbi;Bbi=d+1|0;b.LH=Bh(d);Bbg=b;Bbh=b;Bbi=1;Bbj=1;Bbk=new Uy;}
var YI=G();
var BaQ=null;function A8Q(){A8Q=Bg(YI);A0L();}
function A0L(){BaQ=C(631);}
function XV(){B.call(this);this.F9=null;}
function AZH(a,b){var c;b=b;c=a.F9;Br(c.bH,(B5(c.g4,b)).O);}
function SO(){var a=this;B.call(a);a.nq=null;a.mN=null;a.u0=0;}
function RV(){B.call(this);this.tA=null;}
function A3q(a,b){b=b;AD_(a.tA,b);}
function S3(){var a=this;B.call(a);a.yW=null;a.yX=null;}
function A5k(a,b){var c,d,e,f,g,h,i,j;c=b.data;d=a.yW;e=a.yX;f=c[0];if(f instanceof BH)d.e(f);else{f=$rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array((HG(b,0)).iO)).data;g=f[0]|0;b=new AHk;h=!(g&1)?0:1;i=!(g&2)?0:1;g=!(g&4)?0:1;j=f[1];b.KM=h;b.Jl=i;b.HS=g;b.rL=j;e.e(b);}}
var F2=G();
var Bbl=null;var Bbm=null;var A_W=null;var Bbn=null;var Bbo=null;var Bbp=null;function AOP(){Bbl=new Xb;Bbm=new W9;A_W=new W$;Bbn=new W7;Bbo=new W8;Bbp=new Zn;}
function AM_(){var a=this;B.call(a);a.r5=null;a.sw=null;a.kz=null;a.cR=null;a.ro=null;a.po=null;a.kP=null;a.p6=null;a.sp=null;}
function AU1(a,b){var c=new AM_();A6c(c,a,b);return c;}
function A6c(a,b,c){a.cR=JA(b);a.ro=c;}
function RC(a){var b,c,d,e,f,g,h,i;b=Ba(a.cR);c=new OQ;SM(c);a.kz=c;a.kP=BQ();d=0;while(d<b){e=Ba(a.cR);f=Ba(a.cR);g=F5(a.ro,e,f);DL(a.kz,g,BQ());Bp(a.kP,g);d=d+1|0;}c=NS(Pm(a.kz));while(HD(c)){FU((PT(c)).c_,Q4(a));}d=Ba(a.cR);if(d==(-1))a.r5=null;else{a.po=K(F9,d);c=new ZJ;h=a.cR;i=a.ro;g=a.kP;c.ep=h;c.D1=i;c.Dx=g;a.p6=c;c=new TW;c.fe=h;c.F$=i;c.Gw=g;a.sp=c;a.r5=TE(a,null);}if(Ba(a.cR)!=(-1))a.sw=ACL(a.cR,a.po);}
function TE(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cR);d=Ba(a.cR);e=a.p6;f=Ba(e.ep);g=BQ();h=0;while(h<f){Bp(g,QF(e));h=h+1|0;}a:{switch(d){case -1:i=new OO;i.iL=b;b=A_W;i.c1=b;i.gw=b;i.fI=b;i.nn=b;i.jh=b;break a;case 0:i=A8n(b);break a;case 1:i=new LT;AKN(i,b);FU(i.fI,g);break a;default:}b=new CP;i=J();P(F(i,C(632)),d);Bd(b,I(i));L(b);}i.fI=g;b=a.sp;d=Ba(b.fe);e=BQ();j=0;while(j<d){Bp(e,HC(b));j=j+1|0;}i.gw=e;i.nn=Q4(a);d=Ba(a.cR);b=BQ();j=0;while(j<d){e=QF(a.p6);g=HC(a.sp);f=Ba(a.cR);k=new SO;k.nq=e;k.mN=g;k.u0
=f;Bp(b,k);j=j+1|0;}i.jh=b;j=Ba(a.cR);i.yK=j==(-1)?null:B1(a.kP,j);d=Ba(a.cR);b=BQ();j=0;while(j<d){Bp(b,TE(a,i));j=j+1|0;}i.c1=b;a.po.data[c]=i;return i;}
function Q4(a){var b,c,d,e;b=Ba(a.cR);c=BQ();d=0;while(d<b){e=Ba(a.cR);Bp(c,B1(a.kP,e));d=d+1|0;}return c;}
var If=G(C$);
var Bbq=null;function AOW(){Bbq=H($rt_bytecls());}
var GO=G();
var Bbr=null;var Bbf=null;var Bbs=null;var Bbt=null;function ANs(b,c){var d;if(!C_(c)){d=J();F(Bj(F(d,b),45),c);b=I(d);}return b;}
function ASh(){return {"ksh":{"value":"ksh-Latn-DE"},"ksj":{"value":"ksj-Latn-ZZ"},"tdu":{"value":"tdu-Latn-MY"},"cch":{"value":"cch-Latn-NG"},"und-Khar":{"value":"pra-Khar-PK"},"gkn":{"value":"gkn-Latn-ZZ"},"ksr":{"value":"ksr-Latn-ZZ"},"und-Mani":{"value":"xmn-Mani-CN"},"gkp":{"value":"gkp-Latn-ZZ"},"xmf":{"value":"xmf-Geor-GE"},"ccp":{"value":"ccp-Cakm-BD"},"ted":{"value":"ted-Latn-ZZ"},"und-Mand":{"value":"myz-Mand-IR"},"ktb":{"value":"ktb-Ethi-ZZ"},"xmn":{"value":"xmn-Mani-CN"},"sd-Sind":{"value":"sd-Sind-IN"}
,"xmr":{"value":"xmr-Merc-SD"},"tem":{"value":"tem-Latn-SL"},"und-Mroo":{"value":"mro-Mroo-BD"},"teo":{"value":"teo-Latn-UG"},"tet":{"value":"tet-Latn-TL"},"ktm":{"value":"ktm-Latn-ZZ"},"glk":{"value":"glk-Arab-IR"},"kto":{"value":"kto-Latn-ZZ"},"ktr":{"value":"ktr-Latn-MY"},"und-Soyo":{"value":"cmg-Soyo-MN"},"xna":{"value":"xna-Narb-SA"},"tfi":{"value":"tfi-Latn-ZZ"},"kub":{"value":"kub-Latn-ZZ"},"kue":{"value":"kue-Latn-ZZ"},"kud":{"value":"kud-Latn-ZZ"},"xnr":{"value":"xnr-Deva-IN"},"ceb":{"value":"ceb-Latn-PH"}
,"kuj":{"value":"kuj-Latn-ZZ"},"kum":{"value":"kum-Cyrl-RU"},"kun":{"value":"kun-Latn-ZZ"},"gmm":{"value":"gmm-Latn-ZZ"},"kup":{"value":"kup-Latn-ZZ"},"kus":{"value":"kus-Latn-ZZ"},"gmv":{"value":"gmv-Ethi-ZZ"},"tgc":{"value":"tgc-Latn-ZZ"},"xog":{"value":"xog-Latn-UG"},"und-Arab-YT":{"value":"swb-Arab-YT"},"und-Latn-ET":{"value":"en-Latn-ET"},"xon":{"value":"xon-Latn-ZZ"},"ha-CM":{"value":"ha-Arab-CM"},"gnd":{"value":"gnd-Latn-ZZ"},"kvg":{"value":"kvg-Latn-ZZ"},"tgo":{"value":"tgo-Latn-ZZ"},"cfa":{"value":
"cfa-Latn-ZZ"},"gng":{"value":"gng-Latn-ZZ"},"tgu":{"value":"tgu-Latn-ZZ"},"und-Latn-GE":{"value":"ku-Latn-GE"},"kvr":{"value":"kvr-Latn-ID"},"kvx":{"value":"kvx-Arab-PK"},"und-Gujr":{"value":"gu-Gujr-IN"},"thl":{"value":"thl-Deva-NP"},"xpr":{"value":"xpr-Prti-IR"},"thq":{"value":"thq-Deva-NP"},"god":{"value":"god-Latn-ZZ"},"gof":{"value":"gof-Ethi-ZZ"},"kwj":{"value":"kwj-Latn-ZZ"},"ky-Arab":{"value":"ky-Arab-CN"},"thr":{"value":"thr-Deva-NP"},"goi":{"value":"goi-Latn-ZZ"},"cgg":{"value":"cgg-Latn-UG"},"kwo":
{"value":"kwo-Latn-ZZ"},"gom":{"value":"gom-Deva-IN"},"kwq":{"value":"kwq-Latn-ZZ"},"gon":{"value":"gon-Telu-IN"},"gos":{"value":"gos-Latn-NL"},"gor":{"value":"gor-Latn-ID"},"und-Latn-CY":{"value":"tr-Latn-CY"},"got":{"value":"got-Goth-UA"},"tif":{"value":"tif-Latn-ZZ"},"tig":{"value":"tig-Ethi-ER"},"kxa":{"value":"kxa-Latn-ZZ"},"kxc":{"value":"kxc-Ethi-ZZ"},"pag":{"value":"pag-Latn-PH"},"tik":{"value":"tik-Latn-ZZ"},"kxe":{"value":"kxe-Latn-ZZ"},"tim":{"value":"tim-Latn-ZZ"},"pal":{"value":"pal-Phli-IR"},"tio":
{"value":"tio-Latn-ZZ"},"pam":{"value":"pam-Latn-PH"},"und-Marc":{"value":"bo-Marc-CN"},"pap":{"value":"pap-Latn-AW"},"und-Latn-CN":{"value":"za-Latn-CN"},"tiv":{"value":"tiv-Latn-NG"},"kxm":{"value":"kxm-Thai-TH"},"kxp":{"value":"kxp-Arab-PK"},"pau":{"value":"pau-Latn-PW"},"chk":{"value":"chk-Latn-FM"},"chm":{"value":"chm-Cyrl-RU"},"xrb":{"value":"xrb-Latn-ZZ"},"chp":{"value":"chp-Latn-CA"},"cho":{"value":"cho-Latn-US"},"kxw":{"value":"kxw-Latn-ZZ"},"und-Latn-DZ":{"value":"fr-Latn-DZ"},"chr":{"value":"chr-Cher-US"}
,"kxz":{"value":"kxz-Latn-ZZ"},"und-Batk":{"value":"bbc-Batk-ID"},"und-Bass":{"value":"bsq-Bass-LR"},"kye":{"value":"kye-Latn-ZZ"},"pbi":{"value":"pbi-Latn-ZZ"},"und-Deva-MU":{"value":"bho-Deva-MU"},"cic":{"value":"cic-Latn-US"},"und-Sgnw":{"value":"ase-Sgnw-US"},"xsa":{"value":"xsa-Sarb-YE"},"kyx":{"value":"kyx-Latn-ZZ"},"xsi":{"value":"xsi-Latn-ZZ"},"pcd":{"value":"pcd-Latn-FR"},"und-Latn-AM":{"value":"ku-Latn-AM"},"xsm":{"value":"xsm-Latn-ZZ"},"tkl":{"value":"tkl-Latn-TK"},"und-Thai-CN":{"value":"lcp-Thai-CN"}
,"grb":{"value":"grb-Latn-ZZ"},"xsr":{"value":"xsr-Deva-NP"},"und-Latn-AF":{"value":"tk-Latn-AF"},"grc":{"value":"grc-Cprt-CY"},"kzj":{"value":"kzj-Latn-MY"},"tkr":{"value":"tkr-Latn-AZ"},"cja":{"value":"cja-Arab-KH"},"pcm":{"value":"pcm-Latn-NG"},"tkt":{"value":"tkt-Deva-NP"},"und-Olck":{"value":"sat-Olck-IN"},"kzr":{"value":"kzr-Latn-ZZ"},"kzt":{"value":"kzt-Latn-MY"},"cjm":{"value":"cjm-Cham-VN"},"grt":{"value":"grt-Beng-IN"},"und-Arab-TJ":{"value":"fa-Arab-TJ"},"und-Arab-TG":{"value":"apd-Arab-TG"},"und-Arab-TH":
{"value":"mfa-Arab-TH"},"und-Deva-PK":{"value":"btv-Deva-PK"},"grw":{"value":"grw-Latn-ZZ"},"cjv":{"value":"cjv-Latn-ZZ"},"pdc":{"value":"pdc-Latn-US"},"tlf":{"value":"tlf-Latn-ZZ"},"und-Arab-TR":{"value":"az-Arab-TR"},"ckb":{"value":"ckb-Arab-IQ"},"tly":{"value":"tly-Latn-AZ"},"pdt":{"value":"pdt-Latn-CA"},"tlx":{"value":"tlx-Latn-ZZ"},"ckl":{"value":"ckl-Latn-ZZ"},"cko":{"value":"cko-Latn-ZZ"},"gsw":{"value":"gsw-Latn-CH"},"ped":{"value":"ped-Latn-ZZ"},"tmh":{"value":"tmh-Latn-NE"},"cky":{"value":"cky-Latn-ZZ"}
,"kk-Arab":{"value":"kk-Arab-CN"},"und-Runr":{"value":"non-Runr-SE"},"cla":{"value":"cla-Latn-ZZ"},"peo":{"value":"peo-Xpeo-IR"},"tmy":{"value":"tmy-Latn-ZZ"},"pex":{"value":"pex-Latn-ZZ"},"ky-TR":{"value":"ky-Latn-TR"},"tnh":{"value":"tnh-Latn-ZZ"},"guc":{"value":"guc-Latn-CO"},"gub":{"value":"gub-Latn-BR"},"gud":{"value":"gud-Latn-ZZ"},"pfl":{"value":"pfl-Latn-DE"},"cme":{"value":"cme-Latn-ZZ"},"cmg":{"value":"cmg-Soyo-MN"},"gur":{"value":"gur-Latn-GH"},"xwe":{"value":"xwe-Latn-ZZ"},"guw":{"value":"guw-Latn-ZZ"}
,"tof":{"value":"tof-Latn-ZZ"},"gux":{"value":"gux-Latn-ZZ"},"guz":{"value":"guz-Latn-KE"},"tog":{"value":"tog-Latn-MW"},"gvf":{"value":"gvf-Latn-ZZ"},"toq":{"value":"toq-Latn-ZZ"},"gvr":{"value":"gvr-Deva-NP"},"und-Guru":{"value":"pa-Guru-IN"},"gvs":{"value":"gvs-Latn-ZZ"},"tpi":{"value":"tpi-Latn-PG"},"tpm":{"value":"tpm-Latn-ZZ"},"und-Tfng":{"value":"zgh-Tfng-MA"},"gwc":{"value":"gwc-Arab-ZZ"},"und-Arab-PK":{"value":"ur-Arab-PK"},"phl":{"value":"phl-Arab-ZZ"},"und-Aghb":{"value":"lez-Aghb-RU"},"phn":{"value"
:"phn-Phnx-LB"},"gwi":{"value":"gwi-Latn-CA"},"tpz":{"value":"tpz-Latn-ZZ"},"cop":{"value":"cop-Copt-EG"},"gwt":{"value":"gwt-Arab-ZZ"},"lab":{"value":"lab-Lina-GR"},"lad":{"value":"lad-Hebr-IL"},"lah":{"value":"lah-Arab-PK"},"pil":{"value":"pil-Latn-ZZ"},"lag":{"value":"lag-Latn-TZ"},"tqo":{"value":"tqo-Latn-ZZ"},"laj":{"value":"laj-Latn-UG"},"pip":{"value":"pip-Latn-ZZ"},"und-Khmr":{"value":"km-Khmr-KH"},"las":{"value":"las-Latn-ZZ"},"sd-Deva":{"value":"sd-Deva-IN"},"und-Khoj":{"value":"sd-Khoj-IN"},"cps":
{"value":"cps-Latn-PH"},"kk-AF":{"value":"kk-Arab-AF"},"und-Arab-MU":{"value":"ur-Arab-MU"},"lbe":{"value":"lbe-Cyrl-RU"},"und-Arab-NG":{"value":"ha-Arab-NG"},"gyi":{"value":"gyi-Latn-ZZ"},"tru":{"value":"tru-Latn-TR"},"trw":{"value":"trw-Arab-ZZ"},"trv":{"value":"trv-Latn-TW"},"lbu":{"value":"lbu-Latn-ZZ"},"lbw":{"value":"lbw-Latn-ID"},"tsd":{"value":"tsd-Grek-GR"},"tsf":{"value":"tsf-Deva-NP"},"pka":{"value":"pka-Brah-IN"},"tsg":{"value":"tsg-Latn-PH"},"tsj":{"value":"tsj-Tibt-BT"},"und-Deva-FJ":{"value":
"hif-Deva-FJ"},"pko":{"value":"pko-Latn-KE"},"lcm":{"value":"lcm-Latn-ZZ"},"crh":{"value":"crh-Cyrl-UA"},"lcp":{"value":"lcp-Thai-CN"},"tsw":{"value":"tsw-Latn-ZZ"},"crj":{"value":"crj-Cans-CA"},"crl":{"value":"crl-Cans-CA"},"und-Arab-MN":{"value":"kk-Arab-MN"},"crk":{"value":"crk-Cans-CA"},"crm":{"value":"crm-Cans-CA"},"und-Arab-MM":{"value":"rhg-Arab-MM"},"pla":{"value":"pla-Latn-ZZ"},"tte":{"value":"tte-Latn-ZZ"},"crs":{"value":"crs-Latn-SC"},"ttd":{"value":"ttd-Latn-ZZ"},"ldb":{"value":"ldb-Latn-ZZ"},"ttj":
{"value":"ttj-Latn-UG"},"kk-CN":{"value":"kk-Arab-CN"},"und-Yiii":{"value":"ii-Yiii-CN"},"tts":{"value":"tts-Thai-TH"},"csb":{"value":"csb-Latn-PL"},"ttr":{"value":"ttr-Latn-ZZ"},"ttt":{"value":"ttt-Latn-AZ"},"csw":{"value":"csw-Cans-CA"},"tuh":{"value":"tuh-Latn-ZZ"},"led":{"value":"led-Latn-ZZ"},"tul":{"value":"tul-Latn-ZZ"},"lee":{"value":"lee-Latn-ZZ"},"tum":{"value":"tum-Latn-MW"},"und-Arab-KH":{"value":"cja-Arab-KH"},"tuq":{"value":"tuq-Latn-ZZ"},"ctd":{"value":"ctd-Pauc-MM"},"lem":{"value":"lem-Latn-ZZ"}
,"lep":{"value":"lep-Lepc-IN"},"pms":{"value":"pms-Latn-IT"},"leq":{"value":"leq-Latn-ZZ"},"und-Pauc":{"value":"ctd-Pauc-MM"},"und-Sogo":{"value":"sog-Sogo-UZ"},"leu":{"value":"leu-Latn-ZZ"},"lez":{"value":"lez-Cyrl-RU"},"tvd":{"value":"tvd-Latn-ZZ"},"mn-CN":{"value":"mn-Mong-CN"},"sr-TR":{"value":"sr-Latn-TR"},"png":{"value":"png-Latn-ZZ"},"tvl":{"value":"tvl-Latn-TV"},"und-Brah":{"value":"pka-Brah-IN"},"und-Brai":{"value":"fr-Brai-FR"},"pnn":{"value":"pnn-Latn-ZZ"},"tvu":{"value":"tvu-Latn-ZZ"},"pnt":{"value"
:"pnt-Grek-GR"},"uz-CN":{"value":"uz-Cyrl-CN"},"ha-SD":{"value":"ha-Arab-SD"},"twh":{"value":"twh-Latn-ZZ"},"und-Takr":{"value":"doi-Takr-IN"},"lgg":{"value":"lgg-Latn-ZZ"},"pon":{"value":"pon-Latn-FM"},"twq":{"value":"twq-Latn-NE"},"und-Arab-ID":{"value":"ms-Arab-ID"},"und-Arab-IN":{"value":"ur-Arab-IN"},"ppa":{"value":"ppa-Deva-IN"},"txg":{"value":"txg-Tang-CN"},"yam":{"value":"yam-Latn-ZZ"},"und-Talu":{"value":"khb-Talu-CN"},"yao":{"value":"yao-Latn-MZ"},"yap":{"value":"yap-Latn-FM"},"yas":{"value":"yas-Latn-ZZ"}
,"yat":{"value":"yat-Latn-ZZ"},"ppo":{"value":"ppo-Latn-ZZ"},"yav":{"value":"yav-Latn-CM"},"yay":{"value":"yay-Latn-ZZ"},"yaz":{"value":"yaz-Latn-ZZ"},"und-Tale":{"value":"tdd-Tale-CN"},"ybb":{"value":"ybb-Latn-CM"},"yba":{"value":"yba-Latn-ZZ"},"tya":{"value":"tya-Latn-ZZ"},"lia":{"value":"lia-Latn-ZZ"},"lid":{"value":"lid-Latn-ZZ"},"und-Latn-TW":{"value":"trv-Latn-TW"},"lif":{"value":"lif-Deva-NP"},"lih":{"value":"lih-Latn-ZZ"},"lig":{"value":"lig-Latn-ZZ"},"lij":{"value":"lij-Latn-IT"},"hag":{"value":"hag-Latn-ZZ"}
,"und-Latn-TN":{"value":"fr-Latn-TN"},"tyv":{"value":"tyv-Cyrl-RU"},"yby":{"value":"yby-Latn-ZZ"},"und-Arab-GB":{"value":"ks-Arab-GB"},"hak":{"value":"hak-Hans-CN"},"und-Taml":{"value":"ta-Taml-IN"},"ham":{"value":"ham-Latn-ZZ"},"lis":{"value":"lis-Lisu-CN"},"und-Latn-SY":{"value":"fr-Latn-SY"},"ky-Latn":{"value":"ky-Latn-TR"},"pra":{"value":"pra-Khar-PK"},"haw":{"value":"haw-Latn-US"},"haz":{"value":"haz-Arab-AF"},"ku-LB":{"value":"ku-Arab-LB"},"prd":{"value":"prd-Arab-IR"},"prg":{"value":"prg-Latn-001"},"tzm":
{"value":"tzm-Latn-MA"},"hbb":{"value":"hbb-Latn-ZZ"},"und-Latn-UA":{"value":"pl-Latn-UA"},"ljp":{"value":"ljp-Latn-ID"},"und-Tang":{"value":"txg-Tang-CN"},"yue-Hans":{"value":"yue-Hans-CN"},"und-Latn-RU":{"value":"krl-Latn-RU"},"lki":{"value":"lki-Arab-IR"},"pss":{"value":"pss-Latn-ZZ"},"lkt":{"value":"lkt-Latn-US"},"sr-RO":{"value":"sr-Latn-RO"},"und-Arab-CN":{"value":"ug-Arab-CN"},"lle":{"value":"lle-Latn-ZZ"},"und-Cyrl":{"value":"ru-Cyrl-RU"},"uz-AF":{"value":"uz-Arab-AF"},"yer":{"value":"yer-Latn-ZZ"},
"und-Beng":{"value":"bn-Beng-BD"},"ptp":{"value":"ptp-Latn-ZZ"},"lln":{"value":"lln-Latn-ZZ"},"sr-RU":{"value":"sr-Latn-RU"},"hdy":{"value":"hdy-Ethi-ZZ"},"unr-NP":{"value":"unr-Deva-NP"},"und-Mend":{"value":"men-Mend-SL"},"lmn":{"value":"lmn-Telu-IN"},"lmp":{"value":"lmp-Latn-ZZ"},"lmo":{"value":"lmo-Latn-IT"},"puu":{"value":"puu-Latn-GA"},"und-Arab-CC":{"value":"ms-Arab-CC"},"pal-Phlp":{"value":"pal-Phlp-CN"},"ygr":{"value":"ygr-Latn-ZZ"},"ygw":{"value":"ygw-Latn-ZZ"},"lns":{"value":"lns-Latn-ZZ"},"ky-CN":
{"value":"ky-Arab-CN"},"lnu":{"value":"lnu-Latn-ZZ"},"pwa":{"value":"pwa-Latn-ZZ"},"und-Chrs":{"value":"xco-Chrs-UZ"},"und-Mahj":{"value":"hi-Mahj-IN"},"rif-NL":{"value":"rif-Latn-NL"},"loj":{"value":"loj-Latn-ZZ"},"lol":{"value":"lol-Latn-CD"},"lok":{"value":"lok-Latn-ZZ"},"lor":{"value":"lor-Latn-ZZ"},"und-Sora":{"value":"srb-Sora-IN"},"los":{"value":"los-Latn-ZZ"},"loz":{"value":"loz-Latn-ZM"},"und-202":{"value":"en-Latn-NG"},"und-Latn-MR":{"value":"fr-Latn-MR"},"ku-Yezi":{"value":"ku-Yezi-GE"},"hhy":{"value"
:"hhy-Latn-ZZ"},"hia":{"value":"hia-Latn-ZZ"},"hif":{"value":"hif-Latn-FJ"},"dad":{"value":"dad-Latn-ZZ"},"hih":{"value":"hih-Latn-ZZ"},"hig":{"value":"hig-Latn-ZZ"},"daf":{"value":"daf-Latn-ZZ"},"ubu":{"value":"ubu-Latn-ZZ"},"dah":{"value":"dah-Latn-ZZ"},"hil":{"value":"hil-Latn-PH"},"dag":{"value":"dag-Latn-ZZ"},"und-Mero":{"value":"xmr-Mero-SD"},"dak":{"value":"dak-Latn-US"},"und-Merc":{"value":"xmr-Merc-SD"},"dar":{"value":"dar-Cyrl-RU"},"dav":{"value":"dav-Latn-KE"},"lrc":{"value":"lrc-Arab-IR"},"yko":
{"value":"yko-Latn-ZZ"},"und-Latn-MK":{"value":"sq-Latn-MK"},"und-Latn-MM":{"value":"kac-Latn-MM"},"dbd":{"value":"dbd-Latn-ZZ"},"und-Latn-MO":{"value":"pt-Latn-MO"},"und-Latn-MA":{"value":"fr-Latn-MA"},"und-Bali":{"value":"ban-Bali-ID"},"und-Tavt":{"value":"blt-Tavt-VN"},"dbq":{"value":"dbq-Latn-ZZ"},"yle":{"value":"yle-Latn-ZZ"},"ylg":{"value":"ylg-Latn-ZZ"},"und-Maka":{"value":"mak-Maka-ID"},"yll":{"value":"yll-Latn-ZZ"},"udm":{"value":"udm-Cyrl-RU"},"dcc":{"value":"dcc-Arab-IN"},"yml":{"value":"yml-Latn-ZZ"}
,"hla":{"value":"hla-Latn-ZZ"},"und-Latn-IR":{"value":"tk-Latn-IR"},"ltg":{"value":"ltg-Latn-LV"},"und-Latn-KM":{"value":"fr-Latn-KM"},"ddn":{"value":"ddn-Latn-ZZ"},"hlu":{"value":"hlu-Hluw-TR"},"lua":{"value":"lua-Latn-CD"},"und-Bamu":{"value":"bax-Bamu-CM"},"hmd":{"value":"hmd-Plrd-CN"},"ded":{"value":"ded-Latn-ZZ"},"luo":{"value":"luo-Latn-KE"},"und-142":{"value":"zh-Hans-CN"},"und-143":{"value":"uz-Latn-UZ"},"den":{"value":"den-Latn-CA"},"und-Gran":{"value":"sa-Gran-IN"},"hmt":{"value":"hmt-Latn-ZZ"},"uga":
{"value":"uga-Ugar-SY"},"luz":{"value":"luz-Arab-IR"},"luy":{"value":"luy-Latn-KE"},"und-145":{"value":"ar-Arab-SA"},"und-Cakm":{"value":"ccp-Cakm-BD"},"und-Dupl":{"value":"fr-Dupl-FR"},"yon":{"value":"yon-Latn-ZZ"},"ug-MN":{"value":"ug-Cyrl-MN"},"hne":{"value":"hne-Deva-IN"},"hnd":{"value":"hnd-Arab-PK"},"hnj":{"value":"hnj-Hmng-LA"},"hno":{"value":"hno-Arab-PK"},"hnn":{"value":"hnn-Latn-PH"},"ug-KZ":{"value":"ug-Cyrl-KZ"},"und-154":{"value":"en-Latn-GB"},"und-155":{"value":"de-Latn-DE"},"und-150":{"value"
:"ru-Cyrl-RU"},"und-151":{"value":"ru-Cyrl-RU"},"und-Sylo":{"value":"syl-Sylo-BD"},"hoc":{"value":"hoc-Deva-IN"},"dga":{"value":"dga-Latn-ZZ"},"lwl":{"value":"lwl-Thai-TH"},"und-Ital":{"value":"ett-Ital-IT"},"hoj":{"value":"hoj-Deva-IN"},"dgh":{"value":"dgh-Latn-ZZ"},"dgi":{"value":"dgi-Latn-ZZ"},"dgl":{"value":"dgl-Arab-ZZ"},"hot":{"value":"hot-Latn-ZZ"},"dgr":{"value":"dgr-Latn-CA"},"dgz":{"value":"dgz-Latn-ZZ"},"yrb":{"value":"yrb-Latn-ZZ"},"yre":{"value":"yre-Latn-ZZ"},"und-Lyci":{"value":"xlc-Lyci-TR"}
,"und-Cans":{"value":"cr-Cans-CA"},"und-Hluw":{"value":"hlu-Hluw-TR"},"und-Nand":{"value":"sa-Nand-IN"},"yrl":{"value":"yrl-Latn-BR"},"dia":{"value":"dia-Latn-ZZ"},"und-Grek":{"value":"el-Grek-GR"},"und-Mong":{"value":"mn-Mong-CN"},"und-Lydi":{"value":"xld-Lydi-TR"},"yss":{"value":"yss-Latn-ZZ"},"und-Newa":{"value":"new-Newa-NP"},"lzh":{"value":"lzh-Hans-CN"},"dje":{"value":"dje-Latn-NE"},"lzz":{"value":"lzz-Latn-TR"},"uli":{"value":"uli-Latn-FM"},"hsb":{"value":"hsb-Latn-DE"},"und-Xsux":{"value":"akk-Xsux-IQ"}
,"hsn":{"value":"hsn-Hans-CN"},"und-Cari":{"value":"xcr-Cari-TR"},"und-Syrc":{"value":"syr-Syrc-IQ"},"yua":{"value":"yua-Latn-MX"},"yue":{"value":"yue-Hant-HK"},"umb":{"value":"umb-Latn-AO"},"yuj":{"value":"yuj-Latn-ZZ"},"yut":{"value":"yut-Latn-ZZ"},"yuw":{"value":"yuw-Latn-ZZ"},"und-Bopo":{"value":"zh-Bopo-TW"},"und-Yezi":{"value":"ku-Yezi-GE"},"und":{"value":"en-Latn-US"},"und-Egyp":{"value":"egy-Egyp-EG"},"und-Tglg":{"value":"fil-Tglg-PH"},"unr":{"value":"unr-Beng-IN"},"hui":{"value":"hui-Latn-ZZ"},"und-Elba":
{"value":"sq-Elba-AL"},"unx":{"value":"unx-Beng-IN"},"und-Narb":{"value":"xna-Narb-SA"},"pa-PK":{"value":"pa-Arab-PK"},"und-Hebr-CA":{"value":"yi-Hebr-CA"},"uok":{"value":"uok-Latn-ZZ"},"und-Geor":{"value":"ka-Geor-GE"},"und-Shrd":{"value":"sa-Shrd-IN"},"dnj":{"value":"dnj-Latn-CI"},"und-Diak":{"value":"dv-Diak-MV"},"dob":{"value":"dob-Latn-ZZ"},"und-Mymr-TH":{"value":"mnw-Mymr-TH"},"doi":{"value":"doi-Arab-IN"},"dop":{"value":"dop-Latn-ZZ"},"und-Sund":{"value":"su-Sund-ID"},"dow":{"value":"dow-Latn-ZZ"},"sr-ME":
{"value":"sr-Latn-ME"},"und-Hung":{"value":"hu-Hung-HU"},"mad":{"value":"mad-Latn-ID"},"mag":{"value":"mag-Deva-IN"},"maf":{"value":"maf-Latn-CM"},"mai":{"value":"mai-Deva-IN"},"mak":{"value":"mak-Latn-ID"},"man":{"value":"man-Latn-GM"},"mas":{"value":"mas-Latn-KE"},"maw":{"value":"maw-Latn-ZZ"},"maz":{"value":"maz-Latn-MX"},"uri":{"value":"uri-Latn-ZZ"},"mbh":{"value":"mbh-Latn-ZZ"},"urt":{"value":"urt-Latn-ZZ"},"mbo":{"value":"mbo-Latn-ZZ"},"urw":{"value":"urw-Latn-ZZ"},"mbq":{"value":"mbq-Latn-ZZ"},"mbu":
{"value":"mbu-Latn-ZZ"},"und-Hebr-GB":{"value":"yi-Hebr-GB"},"usa":{"value":"usa-Latn-ZZ"},"mbw":{"value":"mbw-Latn-ZZ"},"mci":{"value":"mci-Latn-ZZ"},"dri":{"value":"dri-Latn-ZZ"},"mcq":{"value":"mcq-Latn-ZZ"},"drh":{"value":"drh-Mong-CN"},"mcp":{"value":"mcp-Latn-ZZ"},"mcr":{"value":"mcr-Latn-ZZ"},"mcu":{"value":"mcu-Latn-ZZ"},"drs":{"value":"drs-Ethi-ZZ"},"mda":{"value":"mda-Latn-ZZ"},"mdf":{"value":"mdf-Cyrl-RU"},"mde":{"value":"mde-Arab-ZZ"},"mdh":{"value":"mdh-Latn-PH"},"dsb":{"value":"dsb-Latn-DE"},"mdj":
{"value":"mdj-Latn-ZZ"},"utr":{"value":"utr-Latn-ZZ"},"mdr":{"value":"mdr-Latn-ID"},"mdx":{"value":"mdx-Ethi-ZZ"},"mee":{"value":"mee-Latn-ZZ"},"med":{"value":"med-Latn-ZZ"},"mek":{"value":"mek-Latn-ZZ"},"men":{"value":"men-Latn-SL"},"az-RU":{"value":"az-Cyrl-RU"},"mis-Medf":{"value":"mis-Medf-NG"},"mer":{"value":"mer-Latn-KE"},"dtm":{"value":"dtm-Latn-ML"},"meu":{"value":"meu-Latn-ZZ"},"met":{"value":"met-Latn-ZZ"},"dtp":{"value":"dtp-Latn-MY"},"dts":{"value":"dts-Latn-ZZ"},"uvh":{"value":"uvh-Latn-ZZ"},"dty":
{"value":"dty-Deva-NP"},"mfa":{"value":"mfa-Arab-TH"},"uvl":{"value":"uvl-Latn-ZZ"},"mfe":{"value":"mfe-Latn-MU"},"dua":{"value":"dua-Latn-CM"},"dud":{"value":"dud-Latn-ZZ"},"duc":{"value":"duc-Latn-ZZ"},"mfn":{"value":"mfn-Latn-ZZ"},"dug":{"value":"dug-Latn-ZZ"},"mfo":{"value":"mfo-Latn-ZZ"},"mfq":{"value":"mfq-Latn-ZZ"},"und-Phag":{"value":"lzh-Phag-CN"},"dva":{"value":"dva-Latn-ZZ"},"mgh":{"value":"mgh-Latn-MZ"},"mgl":{"value":"mgl-Latn-ZZ"},"mgo":{"value":"mgo-Latn-CM"},"mgp":{"value":"mgp-Deva-NP"},"mgy":
{"value":"mgy-Latn-TZ"},"zag":{"value":"zag-Latn-SD"},"mhi":{"value":"mhi-Latn-ZZ"},"mhl":{"value":"mhl-Latn-ZZ"},"dww":{"value":"dww-Latn-ZZ"},"mif":{"value":"mif-Latn-ZZ"},"und-Mymr-IN":{"value":"kht-Mymr-IN"},"min":{"value":"min-Latn-ID"},"mis":{"value":"mis-Hatr-IQ"},"ian":{"value":"ian-Latn-ZZ"},"miw":{"value":"miw-Latn-ZZ"},"iar":{"value":"iar-Latn-ZZ"},"uz-Arab":{"value":"uz-Arab-AF"},"ibb":{"value":"ibb-Latn-NG"},"iba":{"value":"iba-Latn-MY"},"dyo":{"value":"dyo-Latn-SN"},"dyu":{"value":"dyu-Latn-BF"}
,"iby":{"value":"iby-Latn-ZZ"},"zdj":{"value":"zdj-Arab-KM"},"ica":{"value":"ica-Latn-ZZ"},"mki":{"value":"mki-Arab-ZZ"},"und-Wcho":{"value":"nnp-Wcho-IN"},"ich":{"value":"ich-Latn-ZZ"},"mkl":{"value":"mkl-Latn-ZZ"},"dzg":{"value":"dzg-Latn-ZZ"},"mkp":{"value":"mkp-Latn-ZZ"},"zea":{"value":"zea-Latn-NL"},"mkw":{"value":"mkw-Latn-ZZ"},"mle":{"value":"mle-Latn-ZZ"},"idd":{"value":"idd-Latn-ZZ"},"idi":{"value":"idi-Latn-ZZ"},"lif-Limb":{"value":"lif-Limb-IN"},"mlp":{"value":"mlp-Latn-ZZ"},"mls":{"value":"mls-Latn-SD"}
,"idu":{"value":"idu-Latn-ZZ"},"quc":{"value":"quc-Latn-GT"},"qug":{"value":"qug-Latn-EC"},"und-Jamo":{"value":"ko-Jamo-KR"},"mmo":{"value":"mmo-Latn-ZZ"},"mmu":{"value":"mmu-Latn-ZZ"},"mmx":{"value":"mmx-Latn-ZZ"},"zgh":{"value":"zgh-Tfng-MA"},"mna":{"value":"mna-Latn-ZZ"},"mnf":{"value":"mnf-Latn-ZZ"},"ife":{"value":"ife-Latn-TG"},"mni":{"value":"mni-Beng-IN"},"mnw":{"value":"mnw-Mymr-MM"},"moa":{"value":"moa-Latn-ZZ"},"moe":{"value":"moe-Latn-CA"},"igb":{"value":"igb-Latn-ZZ"},"ige":{"value":"ige-Latn-ZZ"}
,"moh":{"value":"moh-Latn-CA"},"und-Hebr-SE":{"value":"yi-Hebr-SE"},"zhx":{"value":"zhx-Nshu-CN"},"mos":{"value":"mos-Latn-BF"},"und-Shaw":{"value":"en-Shaw-GB"},"zia":{"value":"zia-Latn-ZZ"},"mox":{"value":"mox-Latn-ZZ"},"vag":{"value":"vag-Latn-ZZ"},"vai":{"value":"vai-Vaii-LR"},"van":{"value":"van-Latn-ZZ"},"mpp":{"value":"mpp-Latn-ZZ"},"mpt":{"value":"mpt-Latn-ZZ"},"mps":{"value":"mps-Latn-ZZ"},"mpx":{"value":"mpx-Latn-ZZ"},"und-Hebr-US":{"value":"yi-Hebr-US"},"hi-Latn":{"value":"hi-Latn-IN"},"mql":{"value"
:"mql-Latn-ZZ"},"und-Hebr-UA":{"value":"yi-Hebr-UA"},"mrd":{"value":"mrd-Deva-NP"},"zkt":{"value":"zkt-Kits-CN"},"mrj":{"value":"mrj-Cyrl-RU"},"ijj":{"value":"ijj-Latn-ZZ"},"mro":{"value":"mro-Mroo-BD"},"und-Modi":{"value":"mr-Modi-IN"},"ebu":{"value":"ebu-Latn-KE"},"zlm":{"value":"zlm-Latn-TG"},"arc-Palm":{"value":"arc-Palm-SY"},"ikk":{"value":"ikk-Latn-ZZ"},"ikt":{"value":"ikt-Latn-CA"},"ikw":{"value":"ikw-Latn-ZZ"},"vec":{"value":"vec-Latn-IT"},"ikx":{"value":"ikx-Latn-ZZ"},"zmi":{"value":"zmi-Latn-MY"},
"mtc":{"value":"mtc-Latn-ZZ"},"mtf":{"value":"mtf-Latn-ZZ"},"vep":{"value":"vep-Latn-RU"},"zh-Bopo":{"value":"zh-Bopo-TW"},"mti":{"value":"mti-Latn-ZZ"},"und-Ethi":{"value":"am-Ethi-ET"},"mtr":{"value":"mtr-Deva-IN"},"und-Thai-LA":{"value":"kdt-Thai-LA"},"ilo":{"value":"ilo-Latn-PH"},"zne":{"value":"zne-Latn-ZZ"},"mua":{"value":"mua-Latn-CM"},"und-Thai-KH":{"value":"kdt-Thai-KH"},"imo":{"value":"imo-Latn-ZZ"},"mus":{"value":"mus-Latn-US"},"mur":{"value":"mur-Latn-ZZ"},"mva":{"value":"mva-Latn-ZZ"},"inh":{"value"
:"inh-Cyrl-RU"},"mvn":{"value":"mvn-Latn-ZZ"},"efi":{"value":"efi-Latn-NG"},"mvy":{"value":"mvy-Arab-PK"},"und-Java":{"value":"jv-Java-ID"},"mwk":{"value":"mwk-Latn-ML"},"mwr":{"value":"mwr-Deva-IN"},"und-021":{"value":"en-Latn-US"},"egl":{"value":"egl-Latn-IT"},"mww":{"value":"mww-Hmnp-US"},"mwv":{"value":"mwv-Latn-ID"},"iou":{"value":"iou-Latn-ZZ"},"und-029":{"value":"es-Latn-CU"},"vic":{"value":"vic-Latn-SX"},"egy":{"value":"egy-Egyp-EG"},"und-Ugar":{"value":"uga-Ugar-SY"},"mxc":{"value":"mxc-Latn-ZW"},"raj":
{"value":"raj-Deva-IN"},"rai":{"value":"rai-Latn-ZZ"},"rao":{"value":"rao-Latn-ZZ"},"viv":{"value":"viv-Latn-ZZ"},"mxm":{"value":"mxm-Latn-ZZ"},"und-034":{"value":"hi-Deva-IN"},"und-030":{"value":"zh-Hans-CN"},"und-039":{"value":"it-Latn-IT"},"und-035":{"value":"id-Latn-ID"},"ug-Cyrl":{"value":"ug-Cyrl-KZ"},"myk":{"value":"myk-Latn-ZZ"},"mym":{"value":"mym-Ethi-ZZ"},"aai":{"value":"aai-Latn-ZZ"},"aak":{"value":"aak-Latn-ZZ"},"myw":{"value":"myw-Latn-ZZ"},"myv":{"value":"myv-Cyrl-RU"},"myx":{"value":"myx-Latn-UG"}
,"myz":{"value":"myz-Mand-IR"},"und-Sinh":{"value":"si-Sinh-LK"},"und-Sind":{"value":"sd-Sind-IN"},"aau":{"value":"aau-Latn-ZZ"},"rcf":{"value":"rcf-Latn-RE"},"und-Orkh":{"value":"otk-Orkh-MN"},"mzk":{"value":"mzk-Latn-ZZ"},"mzn":{"value":"mzn-Arab-IR"},"iri":{"value":"iri-Latn-ZZ"},"mzm":{"value":"mzm-Latn-ZZ"},"mzp":{"value":"mzp-Latn-ZZ"},"und-053":{"value":"en-Latn-AU"},"abi":{"value":"abi-Latn-ZZ"},"und-054":{"value":"en-Latn-PG"},"mzw":{"value":"mzw-Latn-ZZ"},"mzz":{"value":"mzz-Latn-ZZ"},"abr":{"value"
:"abr-Latn-GH"},"abq":{"value":"abq-Cyrl-ZZ"},"abt":{"value":"abt-Latn-ZZ"},"und-057":{"value":"en-Latn-GU"},"aby":{"value":"aby-Latn-ZZ"},"eka":{"value":"eka-Latn-ZZ"},"vls":{"value":"vls-Latn-BE"},"ace":{"value":"ace-Latn-ID"},"acd":{"value":"acd-Latn-ZZ"},"ach":{"value":"ach-Latn-UG"},"vmf":{"value":"vmf-Latn-DE"},"eky":{"value":"eky-Kali-MM"},"rej":{"value":"rej-Latn-ID"},"rel":{"value":"rel-Latn-ZZ"},"ada":{"value":"ada-Latn-GH"},"res":{"value":"res-Latn-ZZ"},"vmw":{"value":"vmw-Latn-MZ"},"ade":{"value"
:"ade-Latn-ZZ"},"adj":{"value":"adj-Latn-ZZ"},"und-Hira":{"value":"ja-Hira-JP"},"adp":{"value":"adp-Tibt-BT"},"adz":{"value":"adz-Latn-ZZ"},"ady":{"value":"ady-Cyrl-RU"},"ema":{"value":"ema-Latn-ZZ"},"und-Deva":{"value":"hi-Deva-IN"},"aeb":{"value":"aeb-Arab-TN"},"emi":{"value":"emi-Latn-ZZ"},"und-009":{"value":"en-Latn-AU"},"aey":{"value":"aey-Latn-ZZ"},"und-002":{"value":"en-Latn-NG"},"und-003":{"value":"en-Latn-US"},"und-005":{"value":"pt-Latn-BR"},"rgn":{"value":"rgn-Latn-IT"},"vot":{"value":"vot-Latn-RU"}
,"enn":{"value":"enn-Latn-ZZ"},"enq":{"value":"enq-Latn-ZZ"},"und-011":{"value":"en-Latn-NG"},"rhg":{"value":"rhg-Arab-MM"},"und-017":{"value":"sw-Latn-CD"},"und-018":{"value":"en-Latn-ZA"},"und-019":{"value":"en-Latn-US"},"und-013":{"value":"es-Latn-MX"},"und-014":{"value":"sw-Latn-TZ"},"und-015":{"value":"ar-Arab-EG"},"agc":{"value":"agc-Latn-ZZ"},"und-Zanb":{"value":"cmg-Zanb-MN"},"iwm":{"value":"iwm-Latn-ZZ"},"agd":{"value":"agd-Latn-ZZ"},"agg":{"value":"agg-Latn-ZZ"},"iws":{"value":"iws-Latn-ZZ"},"agm":
{"value":"agm-Latn-ZZ"},"ago":{"value":"ago-Latn-ZZ"},"agq":{"value":"agq-Latn-CM"},"ria":{"value":"ria-Latn-IN"},"rif":{"value":"rif-Tfng-MA"},"nac":{"value":"nac-Latn-ZZ"},"naf":{"value":"naf-Latn-ZZ"},"nak":{"value":"nak-Latn-ZZ"},"nan":{"value":"nan-Hans-CN"},"aha":{"value":"aha-Latn-ZZ"},"nap":{"value":"nap-Latn-IT"},"naq":{"value":"naq-Latn-NA"},"zza":{"value":"zza-Latn-TR"},"nas":{"value":"nas-Latn-ZZ"},"ahl":{"value":"ahl-Latn-ZZ"},"en-Shaw":{"value":"en-Shaw-GB"},"und-Copt":{"value":"cop-Copt-EG"},
"aho":{"value":"aho-Ahom-IN"},"vro":{"value":"vro-Latn-EE"},"rjs":{"value":"rjs-Deva-NP"},"nca":{"value":"nca-Latn-ZZ"},"ncf":{"value":"ncf-Latn-ZZ"},"nce":{"value":"nce-Latn-ZZ"},"nch":{"value":"nch-Latn-MX"},"izh":{"value":"izh-Latn-RU"},"izi":{"value":"izi-Latn-ZZ"},"rkt":{"value":"rkt-Beng-BD"},"nco":{"value":"nco-Latn-ZZ"},"eri":{"value":"eri-Latn-ZZ"},"ajg":{"value":"ajg-Latn-ZZ"},"ncu":{"value":"ncu-Latn-ZZ"},"ndc":{"value":"ndc-Latn-MZ"},"esg":{"value":"esg-Gonm-IN"},"nds":{"value":"nds-Latn-DE"},"akk":
{"value":"akk-Xsux-IQ"},"esu":{"value":"esu-Latn-US"},"neb":{"value":"neb-Latn-ZZ"},"rmf":{"value":"rmf-Latn-FI"},"und-061":{"value":"sm-Latn-WS"},"und-Limb":{"value":"lif-Limb-IN"},"vun":{"value":"vun-Latn-TZ"},"ff-Adlm":{"value":"ff-Adlm-GN"},"vut":{"value":"vut-Latn-ZZ"},"rmo":{"value":"rmo-Latn-CH"},"ala":{"value":"ala-Latn-ZZ"},"rmt":{"value":"rmt-Arab-IR"},"rmu":{"value":"rmu-Latn-SE"},"ali":{"value":"ali-Latn-ZZ"},"nex":{"value":"nex-Latn-ZZ"},"new":{"value":"new-Deva-NP"},"aln":{"value":"aln-Latn-XK"}
,"etr":{"value":"etr-Latn-ZZ"},"und-Rohg":{"value":"rhg-Rohg-MM"},"ett":{"value":"ett-Ital-IT"},"rna":{"value":"rna-Latn-ZZ"},"etu":{"value":"etu-Latn-ZZ"},"alt":{"value":"alt-Cyrl-RU"},"etx":{"value":"etx-Latn-ZZ"},"rng":{"value":"rng-Latn-MZ"},"und-Linb":{"value":"grc-Linb-GR"},"und-Lina":{"value":"lab-Lina-GR"},"und-Jpan":{"value":"ja-Jpan-JP"},"man-GN":{"value":"man-Nkoo-GN"},"nfr":{"value":"nfr-Latn-ZZ"},"amm":{"value":"amm-Latn-ZZ"},"und-Arab":{"value":"ar-Arab-EG"},"amo":{"value":"amo-Latn-NG"},"amn":
{"value":"amn-Latn-ZZ"},"rob":{"value":"rob-Latn-ID"},"amp":{"value":"amp-Latn-ZZ"},"ngb":{"value":"ngb-Latn-ZZ"},"rof":{"value":"rof-Latn-TZ"},"nga":{"value":"nga-Latn-ZZ"},"ngl":{"value":"ngl-Latn-MZ"},"roo":{"value":"roo-Latn-ZZ"},"anc":{"value":"anc-Latn-ZZ"},"ank":{"value":"ank-Latn-ZZ"},"ann":{"value":"ann-Latn-ZZ"},"und-Bhks":{"value":"sa-Bhks-IN"},"nhb":{"value":"nhb-Latn-ZZ"},"nhe":{"value":"nhe-Latn-MX"},"any":{"value":"any-Latn-ZZ"},"und-Orya":{"value":"or-Orya-IN"},"ewo":{"value":"ewo-Latn-CM"},
"nhw":{"value":"nhw-Latn-MX"},"aoj":{"value":"aoj-Latn-ZZ"},"aom":{"value":"aom-Latn-ZZ"},"zh-Hanb":{"value":"zh-Hanb-TW"},"und-Kits":{"value":"zkt-Kits-CN"},"jab":{"value":"jab-Latn-ZZ"},"nif":{"value":"nif-Latn-ZZ"},"aoz":{"value":"aoz-Latn-ID"},"nij":{"value":"nij-Latn-ID"},"nii":{"value":"nii-Latn-ZZ"},"zh-PH":{"value":"zh-Hant-PH"},"nin":{"value":"nin-Latn-ZZ"},"zh-Hant":{"value":"zh-Hant-TW"},"zh-PF":{"value":"zh-Hant-PF"},"und-Ahom":{"value":"aho-Ahom-IN"},"apd":{"value":"apd-Arab-TG"},"apc":{"value"
:"apc-Arab-ZZ"},"ape":{"value":"ape-Latn-ZZ"},"jam":{"value":"jam-Latn-JM"},"zh-PA":{"value":"zh-Hant-PA"},"niu":{"value":"niu-Latn-NU"},"niz":{"value":"niz-Latn-ZZ"},"niy":{"value":"niy-Latn-ZZ"},"ext":{"value":"ext-Latn-ES"},"apr":{"value":"apr-Latn-ZZ"},"aps":{"value":"aps-Latn-ZZ"},"apz":{"value":"apz-Latn-ZZ"},"rro":{"value":"rro-Latn-ZZ"},"njo":{"value":"njo-Latn-IN"},"jbo":{"value":"jbo-Latn-001"},"jbu":{"value":"jbu-Latn-ZZ"},"zh-MO":{"value":"zh-Hant-MO"},"nkg":{"value":"nkg-Latn-ZZ"},"zh-MY":{"value"
:"zh-Hant-MY"},"arc":{"value":"arc-Armi-IR"},"nko":{"value":"nko-Latn-ZZ"},"arh":{"value":"arh-Latn-ZZ"},"pa-Arab":{"value":"pa-Arab-PK"},"und-Mtei":{"value":"mni-Mtei-IN"},"arn":{"value":"arn-Latn-CL"},"aro":{"value":"aro-Latn-BO"},"und-Cyrl-RO":{"value":"bg-Cyrl-RO"},"arq":{"value":"arq-Arab-DZ"},"ars":{"value":"ars-Arab-SA"},"arz":{"value":"arz-Arab-EG"},"ary":{"value":"ary-Arab-MA"},"rtm":{"value":"rtm-Latn-FJ"},"asa":{"value":"asa-Latn-TZ"},"und-Grek-TR":{"value":"bgx-Grek-TR"},"ase":{"value":"ase-Sgnw-US"}
,"asg":{"value":"asg-Latn-ZZ"},"aso":{"value":"aso-Latn-ZZ"},"ast":{"value":"ast-Latn-ES"},"rue":{"value":"rue-Cyrl-UA"},"rug":{"value":"rug-Latn-SB"},"nmg":{"value":"nmg-Latn-CM"},"ata":{"value":"ata-Latn-ZZ"},"jen":{"value":"jen-Latn-ZZ"},"atg":{"value":"atg-Latn-ZZ"},"atj":{"value":"atj-Latn-CA"},"nmz":{"value":"nmz-Latn-ZZ"},"unr-Deva":{"value":"unr-Deva-NP"},"nnf":{"value":"nnf-Latn-ZZ"},"nnh":{"value":"nnh-Latn-CM"},"nnk":{"value":"nnk-Latn-ZZ"},"nnm":{"value":"nnm-Latn-ZZ"},"nnp":{"value":"nnp-Wcho-IN"}
,"az-IR":{"value":"az-Arab-IR"},"und-Adlm":{"value":"ff-Adlm-GN"},"az-IQ":{"value":"az-Arab-IQ"},"und-Nbat":{"value":"arc-Nbat-JO"},"sd-Khoj":{"value":"sd-Khoj-IN"},"nod":{"value":"nod-Lana-TH"},"auy":{"value":"auy-Latn-ZZ"},"noe":{"value":"noe-Deva-IN"},"rwk":{"value":"rwk-Latn-TZ"},"und-Cyrl-MD":{"value":"uk-Cyrl-MD"},"rwo":{"value":"rwo-Latn-ZZ"},"non":{"value":"non-Runr-SE"},"nop":{"value":"nop-Latn-ZZ"},"jgk":{"value":"jgk-Latn-ZZ"},"jgo":{"value":"jgo-Latn-CM"},"und-Vaii":{"value":"vai-Vaii-LR"},"nou":
{"value":"nou-Latn-ZZ"},"avl":{"value":"avl-Arab-ZZ"},"avn":{"value":"avn-Latn-ZZ"},"wae":{"value":"wae-Latn-CH"},"avt":{"value":"avt-Latn-ZZ"},"avu":{"value":"avu-Latn-ZZ"},"waj":{"value":"waj-Latn-ZZ"},"wal":{"value":"wal-Ethi-ET"},"wan":{"value":"wan-Latn-ZZ"},"zh-HK":{"value":"zh-Hant-HK"},"war":{"value":"war-Latn-PH"},"awa":{"value":"awa-Deva-IN"},"und-Plrd":{"value":"hmd-Plrd-CN"},"awb":{"value":"awb-Latn-ZZ"},"awo":{"value":"awo-Latn-ZZ"},"und-Knda":{"value":"kn-Knda-IN"},"zh-ID":{"value":"zh-Hant-ID"}
,"jib":{"value":"jib-Latn-ZZ"},"awx":{"value":"awx-Latn-ZZ"},"wbp":{"value":"wbp-Latn-AU"},"und-Sidd":{"value":"sa-Sidd-IN"},"fab":{"value":"fab-Latn-ZZ"},"wbr":{"value":"wbr-Deva-IN"},"faa":{"value":"faa-Latn-ZZ"},"wbq":{"value":"wbq-Telu-IN"},"und-Kali":{"value":"eky-Kali-MM"},"fag":{"value":"fag-Latn-ZZ"},"nqo":{"value":"nqo-Nkoo-GN"},"fai":{"value":"fai-Latn-ZZ"},"ryu":{"value":"ryu-Kana-JP"},"fan":{"value":"fan-Latn-GQ"},"wci":{"value":"wci-Latn-ZZ"},"nrb":{"value":"nrb-Latn-ZZ"},"und-Phlp":{"value":"pal-Phlp-CN"}
,"ayb":{"value":"ayb-Latn-ZZ"},"und-Phli":{"value":"pal-Phli-IR"},"cu-Glag":{"value":"cu-Glag-BG"},"und-Cyrl-XK":{"value":"sr-Cyrl-XK"},"az-Arab":{"value":"az-Arab-IR"},"ks-Deva":{"value":"ks-Deva-IN"},"und-Thai":{"value":"th-Thai-TH"},"nsk":{"value":"nsk-Cans-CA"},"nsn":{"value":"nsn-Latn-ZZ"},"nso":{"value":"nso-Latn-ZA"},"und-Thaa":{"value":"dv-Thaa-MV"},"und-Nshu":{"value":"zhx-Nshu-CN"},"nss":{"value":"nss-Latn-ZZ"},"zh-VN":{"value":"zh-Hant-VN"},"und-Hmnp":{"value":"mww-Hmnp-US"},"und-Kana":{"value":"ja-Kana-JP"}
,"und-Hmng":{"value":"hnj-Hmng-LA"},"wer":{"value":"wer-Latn-ZZ"},"zh-TW":{"value":"zh-Hant-TW"},"ntm":{"value":"ntm-Latn-ZZ"},"ntr":{"value":"ntr-Latn-ZZ"},"zh-US":{"value":"zh-Hant-US"},"und-Xpeo":{"value":"peo-Xpeo-IR"},"jmc":{"value":"jmc-Latn-TZ"},"nui":{"value":"nui-Latn-ZZ"},"jml":{"value":"jml-Deva-NP"},"nup":{"value":"nup-Latn-ZZ"},"und-Cyrl-SK":{"value":"uk-Cyrl-SK"},"nus":{"value":"nus-Latn-SS"},"nuv":{"value":"nuv-Latn-ZZ"},"nux":{"value":"nux-Latn-ZZ"},"zh-TH":{"value":"zh-Hant-TH"},"wgi":{"value"
:"wgi-Latn-ZZ"},"und-Phnx":{"value":"phn-Phnx-LB"},"und-Cyrl-TR":{"value":"kbd-Cyrl-TR"},"ffi":{"value":"ffi-Latn-ZZ"},"und-Elym":{"value":"arc-Elym-IR"},"ffm":{"value":"ffm-Latn-ML"},"und-Rjng":{"value":"rej-Rjng-ID"},"whg":{"value":"whg-Latn-ZZ"},"nwb":{"value":"nwb-Latn-ZZ"},"zh-SR":{"value":"zh-Hant-SR"},"wib":{"value":"wib-Latn-ZZ"},"und-Hebr":{"value":"he-Hebr-IL"},"saf":{"value":"saf-Latn-GH"},"sah":{"value":"sah-Cyrl-RU"},"saq":{"value":"saq-Latn-KE"},"wiu":{"value":"wiu-Latn-ZZ"},"sas":{"value":"sas-Latn-ID"}
,"wiv":{"value":"wiv-Latn-ZZ"},"nxq":{"value":"nxq-Latn-CN"},"sat":{"value":"sat-Olck-IN"},"nxr":{"value":"nxr-Latn-ZZ"},"sav":{"value":"sav-Latn-SN"},"saz":{"value":"saz-Saur-IN"},"wja":{"value":"wja-Latn-ZZ"},"sba":{"value":"sba-Latn-ZZ"},"sbe":{"value":"sbe-Latn-ZZ"},"wji":{"value":"wji-Latn-ZZ"},"mn-Mong":{"value":"mn-Mong-CN"},"und-419":{"value":"es-Latn-419"},"fia":{"value":"fia-Arab-SD"},"sbp":{"value":"sbp-Latn-TZ"},"und-NO":{"value":"nb-Latn-NO"},"nyn":{"value":"nyn-Latn-UG"},"nym":{"value":"nym-Latn-TZ"}
,"und-NL":{"value":"nl-Latn-NL"},"und-NP":{"value":"ne-Deva-NP"},"fil":{"value":"fil-Latn-PH"},"bal":{"value":"bal-Arab-PK"},"ban":{"value":"ban-Latn-ID"},"bap":{"value":"bap-Deva-NP"},"fit":{"value":"fit-Latn-SE"},"bar":{"value":"bar-Latn-AT"},"bas":{"value":"bas-Latn-CM"},"bav":{"value":"bav-Latn-ZZ"},"bax":{"value":"bax-Bamu-CM"},"jra":{"value":"jra-Latn-ZZ"},"sck":{"value":"sck-Deva-IN"},"nzi":{"value":"nzi-Latn-GH"},"scl":{"value":"scl-Arab-ZZ"},"sco":{"value":"sco-Latn-GB"},"scn":{"value":"scn-Latn-IT"}
,"aa":{"value":"aa-Latn-ET"},"bba":{"value":"bba-Latn-ZZ"},"und-MN":{"value":"mn-Cyrl-MN"},"ab":{"value":"ab-Cyrl-GE"},"und-MM":{"value":"my-Mymr-MM"},"und-Osma":{"value":"so-Osma-SO"},"bbc":{"value":"bbc-Latn-ID"},"scs":{"value":"scs-Latn-CA"},"und-ML":{"value":"bm-Latn-ML"},"bbb":{"value":"bbb-Latn-ZZ"},"und-MK":{"value":"mk-Cyrl-MK"},"ae":{"value":"ae-Avst-IR"},"und-MR":{"value":"ar-Arab-MR"},"af":{"value":"af-Latn-ZA"},"bbd":{"value":"bbd-Latn-ZZ"},"und-MQ":{"value":"fr-Latn-MQ"},"und-Wara":{"value":"hoc-Wara-IN"}
,"und-MO":{"value":"zh-Hant-MO"},"und-MV":{"value":"dv-Thaa-MV"},"und-MU":{"value":"mfe-Latn-MU"},"ak":{"value":"ak-Latn-GH"},"und-MT":{"value":"mt-Latn-MT"},"bbj":{"value":"bbj-Latn-CM"},"am":{"value":"am-Ethi-ET"},"und-MZ":{"value":"pt-Latn-MZ"},"an":{"value":"an-Latn-ES"},"und-MY":{"value":"ms-Latn-MY"},"und-MX":{"value":"es-Latn-MX"},"ar":{"value":"ar-Arab-EG"},"bbp":{"value":"bbp-Latn-ZZ"},"as":{"value":"as-Beng-IN"},"bbr":{"value":"bbr-Latn-ZZ"},"sdc":{"value":"sdc-Latn-IT"},"und-NC":{"value":"fr-Latn-NC"}
,"av":{"value":"av-Cyrl-RU"},"sdh":{"value":"sdh-Arab-IR"},"und-NA":{"value":"af-Latn-NA"},"ay":{"value":"ay-Latn-BO"},"az":{"value":"az-Latn-AZ"},"und-NE":{"value":"ha-Latn-NE"},"und-NI":{"value":"es-Latn-NI"},"ba":{"value":"ba-Cyrl-RU"},"wls":{"value":"wls-Latn-WF"},"und-Kore":{"value":"ko-Kore-KR"},"und-LK":{"value":"si-Sinh-LK"},"be":{"value":"be-Cyrl-BY"},"bcf":{"value":"bcf-Latn-ZZ"},"bg":{"value":"bg-Cyrl-BG"},"bch":{"value":"bch-Latn-ZZ"},"bi":{"value":"bi-Latn-VU"},"und-LU":{"value":"fr-Latn-LU"},"bci":
{"value":"bci-Latn-CI"},"und-LT":{"value":"lt-Latn-LT"},"und-LS":{"value":"st-Latn-LS"},"bm":{"value":"bm-Latn-ML"},"bcn":{"value":"bcn-Latn-ZZ"},"bn":{"value":"bn-Beng-BD"},"und-LY":{"value":"ar-Arab-LY"},"bcm":{"value":"bcm-Latn-ZZ"},"bo":{"value":"bo-Tibt-CN"},"bco":{"value":"bco-Latn-ZZ"},"und-LV":{"value":"lv-Latn-LV"},"br":{"value":"br-Latn-FR"},"bcq":{"value":"bcq-Ethi-ZZ"},"bs":{"value":"bs-Latn-BA"},"bcu":{"value":"bcu-Latn-ZZ"},"sef":{"value":"sef-Latn-CI"},"und-MA":{"value":"ar-Arab-MA"},"sei":{"value"
:"sei-Latn-MX"},"seh":{"value":"seh-Latn-MZ"},"und-MF":{"value":"fr-Latn-MF"},"wmo":{"value":"wmo-Latn-ZZ"},"und-ME":{"value":"sr-Latn-ME"},"und-MD":{"value":"ro-Latn-MD"},"und-MC":{"value":"fr-Latn-MC"},"ca":{"value":"ca-Latn-ES"},"und-MG":{"value":"mg-Latn-MG"},"ses":{"value":"ses-Latn-ML"},"ce":{"value":"ce-Cyrl-RU"},"und-Cyrl-BA":{"value":"sr-Cyrl-BA"},"bdd":{"value":"bdd-Latn-ZZ"},"und-KP":{"value":"ko-Kore-KP"},"ch":{"value":"ch-Latn-GU"},"und-KM":{"value":"ar-Arab-KM"},"und-KR":{"value":"ko-Kore-KR"}
,"co":{"value":"co-Latn-FR"},"flr":{"value":"flr-Latn-ZZ"},"und-KW":{"value":"ar-Arab-KW"},"wnc":{"value":"wnc-Latn-ZZ"},"und-Dogr":{"value":"doi-Dogr-IN"},"cr":{"value":"cr-Cans-CA"},"cs":{"value":"cs-Latn-CZ"},"cu":{"value":"cu-Cyrl-RU"},"und-KZ":{"value":"ru-Cyrl-KZ"},"cv":{"value":"cv-Cyrl-RU"},"wni":{"value":"wni-Arab-KM"},"und-LA":{"value":"lo-Laoo-LA"},"cy":{"value":"cy-Latn-GB"},"und-LB":{"value":"ar-Arab-LB"},"und-LI":{"value":"de-Latn-LI"},"da":{"value":"da-Latn-DK"},"und-Cyrl-AL":{"value":"mk-Cyrl-AL"}
,"wnu":{"value":"wnu-Latn-ZZ"},"de":{"value":"de-Latn-DE"},"bef":{"value":"bef-Latn-ZZ"},"beh":{"value":"beh-Latn-ZZ"},"und-JO":{"value":"ar-Arab-JO"},"bej":{"value":"bej-Arab-SD"},"fmp":{"value":"fmp-Latn-ZZ"},"jut":{"value":"jut-Latn-DK"},"bem":{"value":"bem-Latn-ZM"},"und-JP":{"value":"ja-Jpan-JP"},"wob":{"value":"wob-Latn-ZZ"},"sga":{"value":"sga-Ogam-IE"},"bet":{"value":"bet-Latn-ZZ"},"dv":{"value":"dv-Thaa-MV"},"bex":{"value":"bex-Latn-ZZ"},"bew":{"value":"bew-Latn-ID"},"bez":{"value":"bez-Latn-TZ"},"dz":
{"value":"dz-Tibt-BT"},"ms-ID":{"value":"ms-Latn-ID"},"wos":{"value":"wos-Latn-ZZ"},"und-KH":{"value":"km-Khmr-KH"},"und-KG":{"value":"ky-Cyrl-KG"},"sgs":{"value":"sgs-Latn-LT"},"und-KE":{"value":"sw-Latn-KE"},"ee":{"value":"ee-Latn-GH"},"bfd":{"value":"bfd-Latn-CM"},"sgw":{"value":"sgw-Ethi-ZZ"},"und-IN":{"value":"hi-Deva-IN"},"und-IL":{"value":"he-Hebr-IL"},"el":{"value":"el-Grek-GR"},"sgz":{"value":"sgz-Latn-ZZ"},"und-IR":{"value":"fa-Arab-IR"},"en":{"value":"en-Latn-US"},"und-IQ":{"value":"ar-Arab-IQ"},
"und-Perm":{"value":"kv-Perm-RU"},"eo":{"value":"eo-Latn-001"},"bfq":{"value":"bfq-Taml-IN"},"es":{"value":"es-Latn-ES"},"und-IT":{"value":"it-Latn-IT"},"et":{"value":"et-Latn-EE"},"und-IS":{"value":"is-Latn-IS"},"eu":{"value":"eu-Latn-ES"},"bft":{"value":"bft-Arab-PK"},"bfy":{"value":"bfy-Deva-IN"},"shi":{"value":"shi-Tfng-MA"},"shk":{"value":"shk-Latn-ZZ"},"shn":{"value":"shn-Mymr-MM"},"fod":{"value":"fod-Latn-ZZ"},"fa":{"value":"fa-Arab-IR"},"bgc":{"value":"bgc-Deva-IN"},"ff":{"value":"ff-Latn-SN"},"shu":
{"value":"shu-Arab-ZZ"},"fi":{"value":"fi-Latn-FI"},"fj":{"value":"fj-Latn-FJ"},"fon":{"value":"fon-Latn-BJ"},"und-HM":{"value":"und-Latn-HM"},"und-HK":{"value":"zh-Hant-HK"},"bgn":{"value":"bgn-Arab-PK"},"for":{"value":"for-Latn-ZZ"},"fo":{"value":"fo-Latn-FO"},"und-HN":{"value":"es-Latn-HN"},"fr":{"value":"fr-Latn-FR"},"und-HU":{"value":"hu-Latn-HU"},"und-HT":{"value":"ht-Latn-HT"},"ku-Arab":{"value":"ku-Arab-IQ"},"sid":{"value":"sid-Latn-ET"},"und-HR":{"value":"hr-Latn-HR"},"sig":{"value":"sig-Latn-ZZ"},
"bgx":{"value":"bgx-Grek-TR"},"fy":{"value":"fy-Latn-NL"},"sim":{"value":"sim-Latn-ZZ"},"sil":{"value":"sil-Latn-ZZ"},"fpe":{"value":"fpe-Latn-ZZ"},"ga":{"value":"ga-Latn-IE"},"bhb":{"value":"bhb-Deva-IN"},"gd":{"value":"gd-Latn-GB"},"und-ID":{"value":"id-Latn-ID"},"und-IC":{"value":"es-Latn-IC"},"bhg":{"value":"bhg-Latn-ZZ"},"und-GH":{"value":"ak-Latn-GH"},"bhi":{"value":"bhi-Deva-IN"},"und-GF":{"value":"fr-Latn-GF"},"und-GE":{"value":"ka-Geor-GE"},"und-GL":{"value":"kl-Latn-GL"},"gl":{"value":"gl-Latn-ES"}
,"bhl":{"value":"bhl-Latn-ZZ"},"gn":{"value":"gn-Latn-PY"},"bho":{"value":"bho-Deva-IN"},"und-GP":{"value":"fr-Latn-GP"},"und-GN":{"value":"fr-Latn-GN"},"und-GT":{"value":"es-Latn-GT"},"und-GS":{"value":"und-Latn-GS"},"gu":{"value":"gu-Gujr-IN"},"und-GR":{"value":"el-Grek-GR"},"gv":{"value":"gv-Latn-IM"},"und-GQ":{"value":"es-Latn-GQ"},"und-Palm":{"value":"arc-Palm-SY"},"und-GW":{"value":"pt-Latn-GW"},"bhy":{"value":"bhy-Latn-ZZ"},"ha":{"value":"ha-Latn-NG"},"wrs":{"value":"wrs-Latn-ZZ"},"bib":{"value":"bib-Latn-ZZ"}
,"sjr":{"value":"sjr-Latn-ZZ"},"he":{"value":"he-Hebr-IL"},"big":{"value":"big-Latn-ZZ"},"hi":{"value":"hi-Deva-IN"},"und-Cyrl-GE":{"value":"ab-Cyrl-GE"},"bik":{"value":"bik-Latn-PH"},"bin":{"value":"bin-Latn-NG"},"und-Cham":{"value":"cjm-Cham-VN"},"und-FI":{"value":"fi-Latn-FI"},"bim":{"value":"bim-Latn-ZZ"},"ho":{"value":"ho-Latn-PG"},"tg-PK":{"value":"tg-Arab-PK"},"und-FO":{"value":"fo-Latn-FO"},"bio":{"value":"bio-Latn-ZZ"},"fqs":{"value":"fqs-Latn-ZZ"},"hr":{"value":"hr-Latn-HR"},"skc":{"value":"skc-Latn-ZZ"}
,"wsg":{"value":"wsg-Gong-IN"},"biq":{"value":"biq-Latn-ZZ"},"ht":{"value":"ht-Latn-HT"},"hu":{"value":"hu-Latn-HU"},"und-FR":{"value":"fr-Latn-FR"},"wsk":{"value":"wsk-Latn-ZZ"},"hy":{"value":"hy-Armn-AM"},"hz":{"value":"hz-Latn-NA"},"frc":{"value":"frc-Latn-US"},"ia":{"value":"ia-Latn-001"},"sks":{"value":"sks-Latn-ZZ"},"id":{"value":"id-Latn-ID"},"skr":{"value":"skr-Arab-PK"},"ig":{"value":"ig-Latn-NG"},"und-GA":{"value":"fr-Latn-GA"},"bji":{"value":"bji-Ethi-ZZ"},"ii":{"value":"ii-Yiii-CN"},"bjh":{"value"
:"bjh-Latn-ZZ"},"und-EE":{"value":"et-Latn-EE"},"ik":{"value":"ik-Latn-US"},"bjj":{"value":"bjj-Deva-IN"},"und-EC":{"value":"es-Latn-EC"},"und-Cprt":{"value":"grc-Cprt-CY"},"frp":{"value":"frp-Latn-FR"},"in":{"value":"in-Latn-ID"},"bjo":{"value":"bjo-Latn-ZZ"},"frs":{"value":"frs-Latn-DE"},"io":{"value":"io-Latn-001"},"und-EH":{"value":"ar-Arab-EH"},"bjn":{"value":"bjn-Latn-ID"},"frr":{"value":"frr-Latn-DE"},"und-EG":{"value":"ar-Arab-EG"},"is":{"value":"is-Latn-IS"},"sld":{"value":"sld-Latn-ZZ"},"bjr":{"value"
:"bjr-Latn-ZZ"},"it":{"value":"it-Latn-IT"},"iu":{"value":"iu-Cans-CA"},"und-ER":{"value":"ti-Ethi-ER"},"bjt":{"value":"bjt-Latn-SN"},"iw":{"value":"iw-Hebr-IL"},"und-Tirh":{"value":"mai-Tirh-IN"},"sli":{"value":"sli-Latn-PL"},"und-EU":{"value":"en-Latn-GB"},"wtm":{"value":"wtm-Deva-IN"},"sll":{"value":"sll-Latn-ZZ"},"und-ET":{"value":"am-Ethi-ET"},"bjz":{"value":"bjz-Latn-ZZ"},"und-ES":{"value":"es-Latn-ES"},"und-EZ":{"value":"de-Latn-EZ"},"ja":{"value":"ja-Jpan-JP"},"zh-GF":{"value":"zh-Hant-GF"},"bkc":{"value"
:"bkc-Latn-ZZ"},"zh-GB":{"value":"zh-Hant-GB"},"und-Cyrl-GR":{"value":"mk-Cyrl-GR"},"ji":{"value":"ji-Hebr-UA"},"und-DE":{"value":"de-Latn-DE"},"sly":{"value":"sly-Latn-ID"},"bkm":{"value":"bkm-Latn-CM"},"sma":{"value":"sma-Latn-SE"},"bkq":{"value":"bkq-Latn-ZZ"},"und-DK":{"value":"da-Latn-DK"},"und-DJ":{"value":"aa-Latn-DJ"},"bkv":{"value":"bkv-Latn-ZZ"},"jv":{"value":"jv-Latn-ID"},"bku":{"value":"bku-Latn-PH"},"jw":{"value":"jw-Latn-ID"},"und-DO":{"value":"es-Latn-DO"},"smj":{"value":"smj-Latn-SE"},"smn":
{"value":"smn-Latn-FI"},"ka":{"value":"ka-Geor-GE"},"smq":{"value":"smq-Latn-ZZ"},"wuu":{"value":"wuu-Hans-CN"},"smp":{"value":"smp-Samr-IL"},"sms":{"value":"sms-Latn-FI"},"wuv":{"value":"wuv-Latn-ZZ"},"und-DZ":{"value":"ar-Arab-DZ"},"kg":{"value":"kg-Latn-CD"},"und-EA":{"value":"es-Latn-EA"},"ki":{"value":"ki-Latn-KE"},"kj":{"value":"kj-Latn-NA"},"kk":{"value":"kk-Cyrl-KZ"},"man-Nkoo":{"value":"man-Nkoo-GN"},"und-CD":{"value":"sw-Latn-CD"},"kl":{"value":"kl-Latn-GL"},"und-Telu":{"value":"te-Telu-IN"},"km":
{"value":"km-Khmr-KH"},"kn":{"value":"kn-Knda-IN"},"ko":{"value":"ko-Kore-KR"},"und-CH":{"value":"de-Latn-CH"},"und-CG":{"value":"fr-Latn-CG"},"und-CF":{"value":"fr-Latn-CF"},"kr":{"value":"kr-Latn-ZZ"},"ks":{"value":"ks-Arab-IN"},"und-CL":{"value":"es-Latn-CL"},"snc":{"value":"snc-Latn-ZZ"},"ku":{"value":"ku-Latn-TR"},"blt":{"value":"blt-Tavt-VN"},"kv":{"value":"kv-Cyrl-RU"},"und-CI":{"value":"fr-Latn-CI"},"kw":{"value":"kw-Latn-GB"},"und-CP":{"value":"und-Latn-CP"},"und-CO":{"value":"es-Latn-CO"},"ky":{"value"
:"ky-Cyrl-KG"},"und-CN":{"value":"zh-Hans-CN"},"und-CM":{"value":"fr-Latn-CM"},"snk":{"value":"snk-Latn-ML"},"fub":{"value":"fub-Arab-CM"},"und-CR":{"value":"es-Latn-CR"},"fud":{"value":"fud-Latn-WF"},"snp":{"value":"snp-Latn-ZZ"},"la":{"value":"la-Latn-VA"},"und-CW":{"value":"pap-Latn-CW"},"fuf":{"value":"fuf-Latn-GN"},"lb":{"value":"lb-Latn-LU"},"und-CV":{"value":"pt-Latn-CV"},"fue":{"value":"fue-Latn-ZZ"},"und-CU":{"value":"es-Latn-CU"},"fuh":{"value":"fuh-Latn-ZZ"},"und-CZ":{"value":"cs-Latn-CZ"},"lg":{"value"
:"lg-Latn-UG"},"und-CY":{"value":"el-Grek-CY"},"bmh":{"value":"bmh-Latn-ZZ"},"snx":{"value":"snx-Latn-ZZ"},"li":{"value":"li-Latn-NL"},"sny":{"value":"sny-Latn-ZZ"},"wwa":{"value":"wwa-Latn-ZZ"},"bmk":{"value":"bmk-Latn-ZZ"},"und-Cher":{"value":"chr-Cher-US"},"fur":{"value":"fur-Latn-IT"},"ln":{"value":"ln-Latn-CD"},"und-BA":{"value":"bs-Latn-BA"},"fuq":{"value":"fuq-Latn-NE"},"lo":{"value":"lo-Laoo-LA"},"und-BG":{"value":"bg-Cyrl-BG"},"und-BF":{"value":"fr-Latn-BF"},"fuv":{"value":"fuv-Latn-NG"},"und-BE":{"value"
:"nl-Latn-BE"},"bmq":{"value":"bmq-Latn-ML"},"und-BD":{"value":"bn-Beng-BD"},"lt":{"value":"lt-Latn-LT"},"lu":{"value":"lu-Latn-CD"},"und-BJ":{"value":"fr-Latn-BJ"},"lv":{"value":"lv-Latn-LV"},"ogc":{"value":"ogc-Latn-ZZ"},"sog":{"value":"sog-Sogd-UZ"},"und-BI":{"value":"rn-Latn-BI"},"bmu":{"value":"bmu-Latn-ZZ"},"fuy":{"value":"fuy-Latn-ZZ"},"und-BH":{"value":"ar-Arab-BH"},"und-BO":{"value":"es-Latn-BO"},"und-BN":{"value":"ms-Latn-BN"},"sok":{"value":"sok-Latn-ZZ"},"und-BL":{"value":"fr-Latn-BL"},"und-BR":
{"value":"pt-Latn-BR"},"und-BQ":{"value":"pap-Latn-BQ"},"soq":{"value":"soq-Latn-ZZ"},"und-BV":{"value":"und-Latn-BV"},"und-BT":{"value":"dz-Tibt-BT"},"sou":{"value":"sou-Thai-TH"},"bng":{"value":"bng-Latn-ZZ"},"mg":{"value":"mg-Latn-MG"},"und-BY":{"value":"be-Cyrl-BY"},"und-Glag":{"value":"cu-Glag-BG"},"mh":{"value":"mh-Latn-MH"},"mi":{"value":"mi-Latn-NZ"},"soy":{"value":"soy-Latn-ZZ"},"mk":{"value":"mk-Cyrl-MK"},"ml":{"value":"ml-Mlym-IN"},"bnm":{"value":"bnm-Latn-ZZ"},"mn":{"value":"mn-Cyrl-MN"},"mo":{"value"
:"mo-Latn-RO"},"und-Prti":{"value":"xpr-Prti-IR"},"fvr":{"value":"fvr-Latn-SD"},"und-AF":{"value":"fa-Arab-AF"},"bnp":{"value":"bnp-Latn-ZZ"},"mr":{"value":"mr-Deva-IN"},"und-AE":{"value":"ar-Arab-AE"},"ms":{"value":"ms-Latn-MY"},"spd":{"value":"spd-Latn-ZZ"},"und-AD":{"value":"ca-Latn-AD"},"mt":{"value":"mt-Latn-MT"},"my":{"value":"my-Mymr-MM"},"zh-BN":{"value":"zh-Hant-BN"},"und-AM":{"value":"hy-Armn-AM"},"spl":{"value":"spl-Latn-ZZ"},"und-AL":{"value":"sq-Latn-AL"},"und-AR":{"value":"es-Latn-AR"},"und-AQ":
{"value":"und-Latn-AQ"},"na":{"value":"na-Latn-NR"},"und-AO":{"value":"pt-Latn-AO"},"nb":{"value":"nb-Latn-NO"},"nd":{"value":"nd-Latn-ZW"},"und-AT":{"value":"de-Latn-AT"},"ne":{"value":"ne-Deva-NP"},"sps":{"value":"sps-Latn-ZZ"},"und-AS":{"value":"sm-Latn-AS"},"und-AZ":{"value":"az-Latn-AZ"},"ng":{"value":"ng-Latn-NA"},"und-AX":{"value":"sv-Latn-AX"},"und-AW":{"value":"nl-Latn-AW"},"boj":{"value":"boj-Latn-ZZ"},"nl":{"value":"nl-Latn-NL"},"bon":{"value":"bon-Latn-ZZ"},"nn":{"value":"nn-Latn-NO"},"bom":{"value"
:"bom-Latn-ZZ"},"no":{"value":"no-Latn-NO"},"nr":{"value":"nr-Latn-ZA"},"arc-Nbat":{"value":"arc-Nbat-JO"},"und-Medf":{"value":"mis-Medf-NG"},"nv":{"value":"nv-Latn-US"},"kaa":{"value":"kaa-Cyrl-UZ"},"ny":{"value":"ny-Latn-MW"},"kac":{"value":"kac-Latn-MM"},"kab":{"value":"kab-Latn-DZ"},"kad":{"value":"kad-Latn-ZZ"},"kai":{"value":"kai-Latn-ZZ"},"oc":{"value":"oc-Latn-FR"},"zh-AU":{"value":"zh-Hant-AU"},"kaj":{"value":"kaj-Latn-NG"},"kam":{"value":"kam-Latn-KE"},"und-Tagb":{"value":"tbw-Tagb-PH"},"kao":{"value"
:"kao-Latn-ML"},"und-Ogam":{"value":"sga-Ogam-IE"},"om":{"value":"om-Latn-ET"},"srb":{"value":"srb-Sora-IN"},"or":{"value":"or-Orya-IN"},"tg-Arab":{"value":"tg-Arab-PK"},"os":{"value":"os-Cyrl-GE"},"und-Sogd":{"value":"sog-Sogd-UZ"},"bpy":{"value":"bpy-Beng-IN"},"kbd":{"value":"kbd-Cyrl-RU"},"srn":{"value":"srn-Latn-SR"},"pa":{"value":"pa-Guru-IN"},"srr":{"value":"srr-Latn-SN"},"bqc":{"value":"bqc-Latn-ZZ"},"und-Kthi":{"value":"bho-Kthi-IN"},"kbm":{"value":"kbm-Latn-ZZ"},"kbp":{"value":"kbp-Latn-ZZ"},"srx":
{"value":"srx-Deva-IN"},"bqi":{"value":"bqi-Arab-IR"},"kbq":{"value":"kbq-Latn-ZZ"},"pl":{"value":"pl-Latn-PL"},"bqp":{"value":"bqp-Latn-ZZ"},"kbx":{"value":"kbx-Latn-ZZ"},"kby":{"value":"kby-Arab-NE"},"ps":{"value":"ps-Arab-AF"},"pt":{"value":"pt-Latn-BR"},"ssd":{"value":"ssd-Latn-ZZ"},"und-Nkoo":{"value":"man-Nkoo-GN"},"bqv":{"value":"bqv-Latn-CI"},"ssg":{"value":"ssg-Latn-ZZ"},"und-Mymr":{"value":"my-Mymr-MM"},"kcg":{"value":"kcg-Latn-NG"},"bra":{"value":"bra-Deva-IN"},"kck":{"value":"kck-Latn-ZW"},"kcl":
{"value":"kcl-Latn-ZZ"},"okr":{"value":"okr-Latn-ZZ"},"ssy":{"value":"ssy-Latn-ER"},"brh":{"value":"brh-Arab-PK"},"okv":{"value":"okv-Latn-ZZ"},"kct":{"value":"kct-Latn-ZZ"},"und-Hani":{"value":"zh-Hani-CN"},"und-Bugi":{"value":"bug-Bugi-ID"},"und-Hang":{"value":"ko-Hang-KR"},"qu":{"value":"qu-Latn-PE"},"brx":{"value":"brx-Deva-IN"},"und-Samr":{"value":"smp-Samr-IL"},"brz":{"value":"brz-Latn-ZZ"},"stk":{"value":"stk-Latn-ZZ"},"und-Hano":{"value":"hnn-Hano-PH"},"kde":{"value":"kde-Latn-TZ"},"kdh":{"value":"kdh-Arab-TG"}
,"stq":{"value":"stq-Latn-DE"},"kdl":{"value":"kdl-Latn-ZZ"},"bsj":{"value":"bsj-Latn-ZZ"},"und-Hanb":{"value":"zh-Hanb-TW"},"kdt":{"value":"kdt-Thai-TH"},"rm":{"value":"rm-Latn-CH"},"rn":{"value":"rn-Latn-BI"},"ro":{"value":"ro-Latn-RO"},"sua":{"value":"sua-Latn-ZZ"},"und-Deva-BT":{"value":"ne-Deva-BT"},"bsq":{"value":"bsq-Bass-LR"},"bst":{"value":"bst-Ethi-ZZ"},"sue":{"value":"sue-Latn-ZZ"},"bss":{"value":"bss-Latn-CM"},"ru":{"value":"ru-Cyrl-RU"},"und-Buhd":{"value":"bku-Buhd-PH"},"rw":{"value":"rw-Latn-RW"}
,"kea":{"value":"kea-Latn-CV"},"suk":{"value":"suk-Latn-TZ"},"grc-Linb":{"value":"grc-Linb-GR"},"sa":{"value":"sa-Deva-IN"},"sc":{"value":"sc-Latn-IT"},"sus":{"value":"sus-Latn-GN"},"sd":{"value":"sd-Arab-PK"},"sur":{"value":"sur-Latn-ZZ"},"se":{"value":"se-Latn-NO"},"sg":{"value":"sg-Latn-CF"},"ken":{"value":"ken-Latn-CM"},"si":{"value":"si-Sinh-LK"},"und-Hant":{"value":"zh-Hant-TW"},"und-Hans":{"value":"zh-Hans-CN"},"sk":{"value":"sk-Latn-SK"},"sl":{"value":"sl-Latn-SI"},"sm":{"value":"sm-Latn-WS"},"sn":{"value"
:"sn-Latn-ZW"},"bto":{"value":"bto-Latn-PH"},"so":{"value":"so-Latn-SO"},"sq":{"value":"sq-Latn-AL"},"sr":{"value":"sr-Cyrl-RS"},"ss":{"value":"ss-Latn-ZA"},"kez":{"value":"kez-Latn-ZZ"},"st":{"value":"st-Latn-ZA"},"su":{"value":"su-Latn-ID"},"btt":{"value":"btt-Latn-ZZ"},"sv":{"value":"sv-Latn-SE"},"sw":{"value":"sw-Latn-TZ"},"btv":{"value":"btv-Deva-PK"},"ong":{"value":"ong-Latn-ZZ"},"ta":{"value":"ta-Taml-IN"},"onn":{"value":"onn-Latn-ZZ"},"bua":{"value":"bua-Cyrl-RU"},"bud":{"value":"bud-Latn-ZZ"},"buc":
{"value":"buc-Latn-YT"},"te":{"value":"te-Telu-IN"},"tg":{"value":"tg-Cyrl-TJ"},"th":{"value":"th-Thai-TH"},"und-Gong":{"value":"wsg-Gong-IN"},"bug":{"value":"bug-Latn-ID"},"kfo":{"value":"kfo-Latn-CI"},"ons":{"value":"ons-Latn-ZZ"},"ti":{"value":"ti-Ethi-ET"},"kfr":{"value":"kfr-Deva-IN"},"tk":{"value":"tk-Latn-TM"},"tl":{"value":"tl-Latn-PH"},"und-Lisu":{"value":"lis-Lisu-CN"},"buk":{"value":"buk-Latn-ZZ"},"tn":{"value":"tn-Latn-ZA"},"bum":{"value":"bum-Latn-CM"},"to":{"value":"to-Latn-TO"},"buo":{"value"
:"buo-Latn-ZZ"},"swc":{"value":"swc-Latn-CD"},"tr":{"value":"tr-Latn-TR"},"und-Gonm":{"value":"esg-Gonm-IN"},"kfy":{"value":"kfy-Deva-IN"},"swb":{"value":"swb-Arab-YT"},"ts":{"value":"ts-Latn-ZA"},"tt":{"value":"tt-Cyrl-RU"},"bus":{"value":"bus-Latn-ZZ"},"swg":{"value":"swg-Latn-DE"},"buu":{"value":"buu-Latn-ZZ"},"ty":{"value":"ty-Latn-PF"},"kge":{"value":"kge-Latn-ID"},"kgf":{"value":"kgf-Latn-ZZ"},"swp":{"value":"swp-Latn-ZZ"},"bvb":{"value":"bvb-Latn-GQ"},"ug":{"value":"ug-Arab-CN"},"swv":{"value":"swv-Deva-IN"}
,"kgp":{"value":"kgp-Latn-BR"},"uk":{"value":"uk-Cyrl-UA"},"ur":{"value":"ur-Arab-PK"},"kk-IR":{"value":"kk-Arab-IR"},"khb":{"value":"khb-Talu-CN"},"kha":{"value":"kha-Latn-IN"},"uz":{"value":"uz-Latn-UZ"},"sxn":{"value":"sxn-Latn-ID"},"xav":{"value":"xav-Latn-BR"},"opm":{"value":"opm-Latn-ZZ"},"bwd":{"value":"bwd-Latn-ZZ"},"und-Mlym":{"value":"ml-Mlym-IN"},"ve":{"value":"ve-Latn-ZA"},"khn":{"value":"khn-Deva-IN"},"sxw":{"value":"sxw-Latn-ZZ"},"vi":{"value":"vi-Latn-VN"},"khq":{"value":"khq-Latn-ML"},"kht":
{"value":"kht-Mymr-IN"},"khs":{"value":"khs-Latn-ZZ"},"vo":{"value":"vo-Latn-001"},"khw":{"value":"khw-Arab-PK"},"bwr":{"value":"bwr-Latn-ZZ"},"khz":{"value":"khz-Latn-ZZ"},"und-ZW":{"value":"sn-Latn-ZW"},"xbi":{"value":"xbi-Latn-ZZ"},"gaa":{"value":"gaa-Latn-GH"},"syl":{"value":"syl-Beng-BD"},"wa":{"value":"wa-Latn-BE"},"gag":{"value":"gag-Latn-MD"},"gaf":{"value":"gaf-Latn-ZZ"},"kij":{"value":"kij-Latn-ZZ"},"syr":{"value":"syr-Syrc-IQ"},"und-YE":{"value":"ar-Arab-YE"},"gah":{"value":"gah-Latn-ZZ"},"gaj":{"value"
:"gaj-Latn-ZZ"},"gam":{"value":"gam-Latn-ZZ"},"bxh":{"value":"bxh-Latn-ZZ"},"gan":{"value":"gan-Hans-CN"},"kiu":{"value":"kiu-Latn-TR"},"kiw":{"value":"kiw-Latn-ZZ"},"wo":{"value":"wo-Latn-SN"},"gaw":{"value":"gaw-Latn-ZZ"},"und-Sarb":{"value":"xsa-Sarb-YE"},"gay":{"value":"gay-Latn-ID"},"und-YT":{"value":"fr-Latn-YT"},"kjd":{"value":"kjd-Latn-ZZ"},"szl":{"value":"szl-Latn-PL"},"xco":{"value":"xco-Chrs-UZ"},"xcr":{"value":"xcr-Cari-TR"},"gba":{"value":"gba-Latn-ZZ"},"und-Mult":{"value":"skr-Mult-PK"},"kjg":
{"value":"kjg-Laoo-LA"},"gbf":{"value":"gbf-Latn-ZZ"},"oro":{"value":"oro-Latn-ZZ"},"und-Hatr":{"value":"mis-Hatr-IQ"},"bye":{"value":"bye-Latn-ZZ"},"xh":{"value":"xh-Latn-ZA"},"gbm":{"value":"gbm-Deva-IN"},"oru":{"value":"oru-Arab-ZZ"},"kjs":{"value":"kjs-Latn-ZZ"},"byn":{"value":"byn-Ethi-ER"},"und-XK":{"value":"sq-Latn-XK"},"yue-CN":{"value":"yue-Hans-CN"},"und-Lepc":{"value":"lep-Lepc-IN"},"byr":{"value":"byr-Latn-ZZ"},"kjy":{"value":"kjy-Latn-ZZ"},"osa":{"value":"osa-Osge-US"},"bys":{"value":"bys-Latn-ZZ"}
,"byv":{"value":"byv-Latn-CM"},"gbz":{"value":"gbz-Arab-IR"},"gby":{"value":"gby-Latn-ZZ"},"byx":{"value":"byx-Latn-ZZ"},"kkc":{"value":"kkc-Latn-ZZ"},"und-VU":{"value":"bi-Latn-VU"},"bza":{"value":"bza-Latn-ZZ"},"und-Goth":{"value":"got-Goth-UA"},"kkj":{"value":"kkj-Latn-CM"},"bze":{"value":"bze-Latn-ML"},"und-Avst":{"value":"ae-Avst-IR"},"bzf":{"value":"bzf-Latn-ZZ"},"yi":{"value":"yi-Hebr-001"},"bzh":{"value":"bzh-Latn-ZZ"},"und-WF":{"value":"fr-Latn-WF"},"yo":{"value":"yo-Latn-NG"},"gcr":{"value":"gcr-Latn-GF"}
,"ota":{"value":"ota-Arab-ZZ"},"und-WS":{"value":"sm-Latn-WS"},"bzw":{"value":"bzw-Latn-ZZ"},"und-UZ":{"value":"uz-Latn-UZ"},"und-UY":{"value":"es-Latn-UY"},"otk":{"value":"otk-Orkh-MN"},"xes":{"value":"xes-Latn-ZZ"},"za":{"value":"za-Latn-CN"},"gde":{"value":"gde-Latn-ZZ"},"kln":{"value":"kln-Latn-KE"},"und-VA":{"value":"it-Latn-VA"},"zh":{"value":"zh-Hans-CN"},"gdn":{"value":"gdn-Latn-ZZ"},"klq":{"value":"klq-Latn-ZZ"},"und-Saur":{"value":"saz-Saur-IN"},"klt":{"value":"klt-Latn-ZZ"},"und-VE":{"value":"es-Latn-VE"}
,"gdr":{"value":"gdr-Latn-ZZ"},"klx":{"value":"klx-Latn-ZZ"},"und-VN":{"value":"vi-Latn-VN"},"kk-MN":{"value":"kk-Arab-MN"},"zu":{"value":"zu-Latn-ZA"},"und-Armn":{"value":"hy-Armn-AM"},"kmb":{"value":"kmb-Latn-AO"},"und-TR":{"value":"tr-Latn-TR"},"geb":{"value":"geb-Latn-ZZ"},"und-TW":{"value":"zh-Hant-TW"},"kmh":{"value":"kmh-Latn-ZZ"},"und-TV":{"value":"tvl-Latn-TV"},"und-TZ":{"value":"sw-Latn-TZ"},"kmo":{"value":"kmo-Latn-ZZ"},"gej":{"value":"gej-Latn-ZZ"},"und-UA":{"value":"uk-Cyrl-UA"},"gel":{"value":
"gel-Latn-ZZ"},"kms":{"value":"kms-Latn-ZZ"},"kmu":{"value":"kmu-Latn-ZZ"},"kmw":{"value":"kmw-Latn-ZZ"},"und-Tibt":{"value":"bo-Tibt-CN"},"und-UG":{"value":"sw-Latn-UG"},"und-Armi":{"value":"arc-Armi-IR"},"gez":{"value":"gez-Ethi-ET"},"und-ST":{"value":"pt-Latn-ST"},"knf":{"value":"knf-Latn-GW"},"und-SR":{"value":"nl-Latn-SR"},"und-SV":{"value":"es-Latn-SV"},"und-SY":{"value":"ar-Arab-SY"},"knp":{"value":"knp-Latn-ZZ"},"gfk":{"value":"gfk-Latn-ZZ"},"und-TD":{"value":"fr-Latn-TD"},"und-TH":{"value":"th-Thai-TH"}
,"und-TG":{"value":"fr-Latn-TG"},"und-TF":{"value":"fr-Latn-TF"},"und-TM":{"value":"tk-Latn-TM"},"und-TL":{"value":"pt-Latn-TL"},"und-TK":{"value":"tkl-Latn-TK"},"und-TJ":{"value":"tg-Cyrl-TJ"},"und-TO":{"value":"to-Latn-TO"},"und-TN":{"value":"ar-Arab-TN"},"und-RS":{"value":"sr-Cyrl-RS"},"koi":{"value":"koi-Cyrl-RU"},"und-RW":{"value":"rw-Latn-RW"},"kok":{"value":"kok-Deva-IN"},"und-RU":{"value":"ru-Cyrl-RU"},"kol":{"value":"kol-Latn-ZZ"},"kos":{"value":"kos-Latn-FM"},"ggn":{"value":"ggn-Deva-NP"},"und-SD":
{"value":"ar-Arab-SD"},"und-SC":{"value":"fr-Latn-SC"},"und-SA":{"value":"ar-Arab-SA"},"koz":{"value":"koz-Latn-ZZ"},"und-SE":{"value":"sv-Latn-SE"},"und-SK":{"value":"sk-Latn-SK"},"und-SJ":{"value":"nb-Latn-SJ"},"und-SI":{"value":"sl-Latn-SI"},"taj":{"value":"taj-Deva-NP"},"und-SO":{"value":"so-Latn-SO"},"tal":{"value":"tal-Latn-ZZ"},"und-SN":{"value":"fr-Latn-SN"},"und-Osge":{"value":"osa-Osge-US"},"und-SM":{"value":"it-Latn-SM"},"kpf":{"value":"kpf-Latn-ZZ"},"tan":{"value":"tan-Latn-ZZ"},"kpe":{"value":"kpe-Latn-LR"}
,"und-QO":{"value":"en-Latn-DG"},"taq":{"value":"taq-Latn-ZZ"},"kpo":{"value":"kpo-Latn-ZZ"},"kpr":{"value":"kpr-Latn-ZZ"},"kpx":{"value":"kpx-Latn-ZZ"},"ghs":{"value":"ghs-Latn-ZZ"},"und-Lana":{"value":"nod-Lana-TH"},"tbc":{"value":"tbc-Latn-ZZ"},"und-RE":{"value":"fr-Latn-RE"},"tbd":{"value":"tbd-Latn-ZZ"},"tbg":{"value":"tbg-Latn-ZZ"},"tbf":{"value":"tbf-Latn-ZZ"},"und-RO":{"value":"ro-Latn-RO"},"kqb":{"value":"kqb-Latn-ZZ"},"tbo":{"value":"tbo-Latn-ZZ"},"kqf":{"value":"kqf-Latn-ZZ"},"und-PT":{"value":"pt-Latn-PT"}
,"und-PS":{"value":"ar-Arab-PS"},"cad":{"value":"cad-Latn-US"},"und-PR":{"value":"es-Latn-PR"},"tbw":{"value":"tbw-Latn-PH"},"und-PY":{"value":"gn-Latn-PY"},"gim":{"value":"gim-Latn-ZZ"},"und-PW":{"value":"pau-Latn-PW"},"gil":{"value":"gil-Latn-KI"},"kqs":{"value":"kqs-Latn-ZZ"},"tbz":{"value":"tbz-Latn-ZZ"},"und-Laoo":{"value":"lo-Laoo-LA"},"can":{"value":"can-Latn-ZZ"},"und-QA":{"value":"ar-Arab-QA"},"kqy":{"value":"kqy-Ethi-ZZ"},"ms-CC":{"value":"ms-Arab-CC"},"tci":{"value":"tci-Latn-ZZ"},"krc":{"value":
"krc-Cyrl-RU"},"krj":{"value":"krj-Latn-PH"},"kri":{"value":"kri-Latn-SL"},"ozm":{"value":"ozm-Latn-ZZ"},"und-OM":{"value":"ar-Arab-OM"},"krl":{"value":"krl-Latn-RU"},"gjk":{"value":"gjk-Arab-PK"},"cbj":{"value":"cbj-Latn-ZZ"},"gjn":{"value":"gjn-Latn-ZZ"},"tcy":{"value":"tcy-Knda-IN"},"xla":{"value":"xla-Latn-ZZ"},"krs":{"value":"krs-Latn-ZZ"},"xlc":{"value":"xlc-Lyci-TR"},"kru":{"value":"kru-Deva-IN"},"und-PA":{"value":"es-Latn-PA"},"xld":{"value":"xld-Lydi-TR"},"gju":{"value":"gju-Arab-PK"},"und-PE":{"value"
:"es-Latn-PE"},"tdd":{"value":"tdd-Tale-CN"},"tdg":{"value":"tdg-Deva-NP"},"tdh":{"value":"tdh-Deva-NP"},"und-PH":{"value":"fil-Latn-PH"},"und-PG":{"value":"tpi-Latn-PG"},"ksb":{"value":"ksb-Latn-TZ"},"und-PF":{"value":"fr-Latn-PF"},"und-PM":{"value":"fr-Latn-PM"},"ksd":{"value":"ksd-Latn-ZZ"},"und-PL":{"value":"pl-Latn-PL"},"und-PK":{"value":"ur-Arab-PK"},"ksf":{"value":"ksf-Latn-CM"}};}
function AVm(){return {"value":"en_GB"};}
function A3E(){return {"root":{"value":"#,##0.###"},"en":{"value":"#,##0.###"}};}
function AR9(){return {"root":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"naN":"NaN","infinity":"∞","groupingSeparator":44,"percent":37},"en":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"naN":"NaN","infinity":"∞","groupingSeparator":44,"percent":37}};}
var ANI=G();
var QZ=G(0);
var Uy=G();
var Op=G(CX);
var Xb=G(Op);
var Pj=G(Eq);
var W9=G(Pj);
var PI=G(EF);
function A0J(a){var b;b=new Di;W(b);L(b);}
function AUP(a,b){var c;c=new Di;W(c);L(c);}
function ATW(a,b){b=new Di;W(b);L(b);}
var W$=G(PI);
function AUX(a,b){var c;c=new BU;W(c);L(c);}
function AUa(a){return 0;}
function ASy(a){return Bbn;}
function ARb(a){return 1;}
var W7=G();
function AQU(a){return 0;}
function A3_(a){var b;b=new Go;W(b);L(b);}
function AWG(a){var b;b=new CP;W(b);L(b);}
var ABy=G(0);
var W8=G();
var Zn=G();
function Tq(){var a=this;B.call(a);a.o3=0;a.vQ=null;}
function A7t(a,b){var c,d,e;c=a.vQ;b=b;d=c.wn;e=c.wm;d=b.b<=d&&e<=b.a?1:0;a.o3=d;return d?0:1;}
function L2(){F1.call(this);this.pA=null;}
function L6(a,b){var c,d;c=a.pA;d=new Vx;d.vm=a;d.vl=b;return c.rB(d);}
function TQ(){L2.call(this);this.u5=null;}
function AA$(){B.call(this);this.Hn=null;}
function A4r(a,b){var c;c=a.Hn;b=b;Bj(By(c.tV,Ek(b)),10);return 1;}
function AGj(){B.call(this);this.Fg=null;}
function AT5(a,b){var c,d,e,f,g,h,i,j,k;c=a.Fg;d=Dp(b,0);e=(Dp(b,1)).data[0];if(!AFg(c.g)){b=c.g;if(b.R==e){e=c.tw;f=JA(d);E8(b.en);E8(b.ee);Oc(b);while(f.f7>=f.j8.data.length?0:1){if(Ba(f)==(-1))continue;g=YV(b,Ba(f));h=PH(B3(b,g.bp),g.bz);if(Ba(f)==(-1)){if(!e)continue;h.b_=0;h.bL=h.bL|4;continue;}i=YV(b,Ba(f));j=Ba(f);k=Ba(f);DL(b.en,g,i);Tm(b.ee,i,BQ());(B5(b.ee,i)).hZ(g);h.b_=j;h.bL=k;}Jj(c);if(c.KG)GZ(c,C(633));}}}
function S7(){var a=this;B.call(a);a.rW=null;a.l0=null;}
function AGr(){var a=this;B.call(a);a.wJ=null;a.Dc=null;a.kM=null;a.mi=null;}
function AE7(a){var b,c;b=a.Dc.next();c=a.wJ;b.then(BB(a,"f"),BB(c,"f"));}
function AV_(a,b){var c;if(b.done?1:0)a.kM.m4();else{AE7(a);c=b.value;if(c.kind==='file'?1:0){b=ALF(c,ABT(a.mi));a.kM.rt(b);}else{b=A7a(c,ABT(a.mi),null);a.kM.p9(b);}}}
function Sc(){CX.call(this);this.kZ=null;}
function AUf(a){var b;b=new AEq;OR(b,a.kZ);return b;}
function A1A(a,b){var c,d,e,f,g;a:{c=a.kZ;if(c.dj>0){d=c.du;e=0;while(true){f=a.kZ.cj.data;if(e>=f.length)break a;g=f[e];while(g!==null){ANi(b,g.c2);g=g.dp;if(d!=a.kZ.du){b=new F0;W(b);L(b);}}e=e+1|0;}}}}
function Zu(){B.call(this);this.Af=null;}
function A1i(a,b){b=b;Q2(a.Af,b);}
function WW(){B.call(this);this.yO=null;}
function A26(a,b){b=b;Hm(a.yO,b);}
function K4(){var a=this;B.call(a);a.eP=null;a.ls=null;a.k8=0;}
function A78(a,b,c){var d=new K4();ALq(d,a,b,c);return d;}
function ALq(a,b,c,d){a.eP=b;a.ls=c;a.k8=d;}
function A5r(a){var b,c,d;b=AOR(a.eP);c=a.ls;d=J();F(F(F(d,b),C(346)),c);return I(d);}
function AOT(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return BN(a.eP,c.eP)&&BN(a.ls,c.ls)&&BN(Ck(a.k8),Ck(c.k8))?1:0;}return 0;}
function M7(){var a=this;K4.call(a);a.mX=null;a.A_=0;}
function AZ6(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){if(!AOT(a,b))return 0;c=b;return BN(a.mX,c.mX);}return 0;}
function Fm(){var a=this;B.call(a);a.fk=null;a.fU=null;a.EU=0;}
function A7D(a,b,c){var d=new Fm();O$(d,a,b,c);return d;}
function O$(a,b,c,d){a.fk=b;a.fU=c;a.EU=d;}
function AXW(a){var b,c,d;b=BL(a.fk);c=a.fU;d=J();F(F(F(d,b),C(346)),c);return I(d);}
function ANd(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return BN(a.fk,c.fk)&&BN(a.fU,c.fU)?1:0;}return 0;}
function HX(){Fm.call(this);this.gn=null;}
function A3D(a){var b,c,d,e,f,g,h,i,j,k,l;a:{b=WI(a.gn);c=new ACN;c.GH=a;d=AHB(b,c);e=new AEU;e.AG=C(32);f=K(EG,0);g=new PS;g.pQ=H(EG);h=H(EG).c9;h.$clinit();g.oz=BC((((AVg(h)).data.length-1|0)/32|0)+1|0);Bs(f);h=new Q3;h.r8=f;if(h instanceof PS){i=h;if(g.pQ===i.pQ){j=0;while(true){f=g.oz.data;if(j>=f.length)break;k=f[j];l=i.oz.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}FU(g,h);}g=J();while(true){h=new X7;h.BH=e;h.BI=g;if(!L6(d,h))break;}AFv(g,0,C(20),0,N(C(20)));return I(Et(g,C(20)));}
function KF(){var a=this;Fm.call(a);a.jN=null;a.tI=0;}
function A6A(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){if(!ANd(a,b))return 0;c=b;return BN(a.jN,c.jN);}return 0;}
function JS(){var a=this;Fm.call(a);a.jx=null;a.iZ=null;}
function AVb(a){var b,c,d;b=a.jx.fk.hV;c=BL(a.iZ);d=J();F(Bj(F(d,b),46),c);return I(d);}
function AZk(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return BN(a.jx,c.jx)&&BN(a.iZ,c.iZ)?1:0;}return 0;}
function Ws(){CX.call(this);this.DS=null;}
function NS(a){var b;b=new Wh;OR(b,a.DS);return b;}
function Sd(){EH.call(this);this.Ay=null;}
function Tl(){B.call(this);this.tF=null;}
function A4b(a,b){var c,d,e,f,g;c=a.tF;DK(c.v);E8(c.j7);d=NS(Pm(c.gp));while(HD(d)){e=PT(d);f=c.gp;g=e.c2;e=null;if(HH(f,g))DL(f,g,e);}e=X();d=BL(b);f=J();F(F(f,C(634)),d);T(e,I(f));e=AWL(b,c);D_(c.cH.e6,e);e.gv.d();CN(c.my,FK(DT(b),C(635)));Cn(c.v.m,c.cH.e6);}
function RX(){var a=this;B.call(a);a.D_=null;a.Ea=null;}
function AUQ(a){var b,c;b=a.D_;c=a.Ea;U4();Lg(b,c,Bbu);}
function RY(){var a=this;B.call(a);a.t8=null;a.t$=null;}
function ATp(a){var b,c;b=a.t8;c=a.t$;U4();Lg(b,c,Bbv);}
function RZ(){var a=this;B.call(a);a.zw=null;a.zx=null;}
function A5p(a){Lg(a.zw,a.zx,null);}
function R0(){var a=this;B.call(a);a.DB=null;a.DA=null;}
function ARn(a){var b,c,d,e,f,g,h;b=a.DB;c=a.DA;d=CR(b.T.c);e=HQ(b.T.c);d=AFA(b.T.go,d,e);DK(b.gx.bF);b=b.T;e=Gu(b,c);if(e!==null&&d!==null){f=b.c;g=e.bp;h=e.bz;e=new ABm;e.Lt=b;e.Lu=c;d.Rs(f,g,h,1,e,b.lI);}}
function US(){B.call(this);this.Bg=null;}
function AXj(a){var b;b=a.Bg;DK(b.gx.bF);ACk(b.T,0);}
function UQ(){B.call(this);this.yx=null;}
function A3g(a){var b;b=a.yx;DK(b.gx.bF);ACk(b.T,1);}
function UO(){B.call(this);this.vc=null;}
function A4t(a){var b,c,d;b=a.vc;DK(b.gx.bF);b=b.T;c=DF(b);d=new ACl;d.Fb=b;TT(c,d,R6(C(636)));}
function TM(){var a=this;B.call(a);a.CO=null;a.CN=null;}
function A6D(a){ABp(a.CO,a.CN);}
function TO(){var a=this;B.call(a);a.yn=null;a.yo=null;}
function A2E(a){ABp(a.yn,a.yo);}
function QK(){var a=this;B.call(a);a.v5=null;a.v4=null;}
function A4v(a){var b,c;b=a.v5;c=a.v4;b=b.T.c;b.sD=c;Na(b);}
var S6=G(0);
var BaN=null;function APj(){BaN=new Wg;}
function AGH(){B.call(this);this.A9=null;}
function A20(a){var b;b=a.A9;b.lC=AH$(b,b.lC);b.jW=0;}
function AGE(){B.call(this);this.Dy=null;}
function AZi(a){var b;b=a.Dy;b.lC=0;b.jW=0;}
function AGG(){B.call(this);this.zB=null;}
function A5u(a){var b;b=a.zB;b.jW=AH$(b,b.jW);b.lC=0;}
function AGI(){B.call(this);this.uu=null;}
function A14(a){QN(a.uu);}
function AGJ(){B.call(this);this.EC=null;}
function AVi(a){Z2(a.EC);}
function ZO(){B.call(this);this.xd=null;}
function ARc(a){var b,c,d,e;b=a.xd;c=OL(b);d=b.gx.bF;e=new Vy;e.uE=b;EM(c,J0(d,e));}
function VK(){B.call(this);this.DH=null;}
function A3s(a,b,c,d){Lj(a.DH,b,c.O,d.O);}
function VL(){B.call(this);this.Br=null;}
function A13(a,b,c,d){Lj(a.Br,b,c.O,d.O);}
function UL(){B.call(this);this.ze=null;}
function A3Z(a,b,c,d){Kn(a.ze,b,c.O,d.O);}
var UK=G();
function AX8(a,b){return b.eP.dP>=0?0:1;}
var UJ=G();
function AWe(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fk;if(b===null)break b;if(b.dP>=0)break b;}c=1;break a;}c=0;}return c;}
function UN(){B.call(this);this.FC=null;}
function A3z(a,b,c,d){Kn(a.FC,b,c.O,d.O);}
function Vd(){B.call(this);this.FR=null;}
function A4p(a,b){var c,d;c=a.FR;$rt_globals.console.info("JsDirectoryHandle onError:");d=c.mi.ik.name;$rt_globals.console.info("  name  = "+d);$rt_globals.console.info("  error = "+b);c.kM.rb($rt_str(b.message));}
function ZJ(){var a=this;B.call(a);a.ep=null;a.D1=null;a.Dx=null;}
function QF(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.ep);switch(b){case 3:break;case 5:c=Ru(a);d=Pp(a);b=Ba(a.ep);e=Ba(a.ep);f=Ba(a.ep);g=BQ();h=0;while(h<f){Bp(g,Pp(a));h=h+1|0;}i=new M7;ALq(i,c,d,b);i.mX=g;i.A_=e;break a;default:c=new CP;d=J();P(F(d,C(637)),b);Bd(c,I(d));L(c);}i=A78(Ru(a),Pp(a),Ba(a.ep));}return i;}
function Ru(a){var b,c;b=Ba(a.ep);c=Ba(a.ep);return A1N(F5(a.D1,b,c),Ba(a.ep));}
function Pp(a){var b;b=Ba(a.ep);if(b==(-1))return null;return B1(a.Dx,b);}
function TW(){var a=this;B.call(a);a.fe=null;a.F$=null;a.Gw=null;}
function HC(a){var b,c,d,e,f;a:{b:{b=Ba(a.fe);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Z$(a);d=SW(a);b=Ba(a.fe);e=U0(a);f=new KF;O$(f,c,d,2);f.tI=b;f.jN=e;break a;case 4:c=HC(a);d=HC(a);f=new JS;O$(f,c.fk,c.fU,9);f.jx=c;f.iZ=d;break a;case 5:f=A7D(Z$(a),SW(a),Ba(a.fe));break a;case 9:c=U0(a);f=new HX;d=!F6(c)&&B1(c,0)!==null?(B1(c,0)).fU:null;O$(f,null,null,7);f.gn=BQ();c=B4(c);while(B6(c)){e=B7(c);if(!(e instanceof HX))Bp(f.gn,e);else{e=e;FU(f.gn,e.gn);}}f.fU=d;break a;default:break b;}f
=null;break a;}c=new CP;d=J();P(F(d,C(638)),b);Bd(c,I(d));L(c);}return f;}
function Z$(a){var b,c;b=Ba(a.fe);if(b==(-1))return null;c=Ba(a.fe);return A1N(F5(a.F$,b,c),Ba(a.fe));}
function SW(a){var b;b=Ba(a.fe);if(b==(-1))return null;return B1(a.Gw,b);}
function U0(a){var b,c,d;b=Ba(a.fe);c=BQ();d=0;while(d<b){Bp(c,HC(a));d=d+1|0;}return c;}
function AIs(){var a=this;B.call(a);a.DV=null;a.DU=0;}
function A0w(a,b){var c,d,e,f,g,h,i,j;c=a.DV;d=a.DU;e=!d?c.bv.bV:c.bv.bW;DK(c.v);f=X();g=DT(b);h=J();F(F(h,C(639)),g);T(f,I(h));g=new ADX;g.cY=c;g.iS=d;f=AWL(b,g);if(!d)c.dJ=f;else c.dC=f;f.cy.d();D_(e,f);b=c.dC;if(b!==null&&c.dJ===null)CN(c.ek,CZ(b));if(c.dC===null){b=c.dJ;if(b!==null)CN(c.ek,CZ(b));}if(c.dC!==null&&c.dJ!==null){c.qj=HF(c.ek.M.bk);b=X();i=c.qj;e=J();HR(F(e,C(640)),i);T(b,I(e));e=CZ(c.dC);g=CZ(c.dJ);b=J();F(F(F(F(b,e),C(437)),g),C(641));e=I(b);CN(c.ek,e);c.pG=0;e=MK(null);c.jP=e;b=new Vq;f=
c.dC.gW;g=c.dJ.gW;j=c.ek.M.bk.cS;h=new AGi;h.zH=c;b.Jw=e;b.y0=f;b.Ei=g;b.Lj=j;b.ss=h;c=new Ui;c.iE=0;c.gz=0;c.gO=0;c.i7=0;c.f6=0;c.jM=0;c.il=0;c.ij=0;c.m5=0;f=B0();Bs(f);g=new VI;g.uA=f;c.HH=g;c.hU=0;c.KO=e;c.j6=j;c.GI=1;f=new XJ;f.C1=b;c.F3=f;f=new XL;f.Fl=b;c.ty=f;AF6(c,e,b.y0,b.Ei);}}
function Ty(){B.call(this);this.xL=null;}
function A27(a){AMh(a.xL);}
function Tz(){B.call(this);this.Al=null;}
function A2Z(a){Nt(a.Al);}
function Tx(){B.call(this);this.C3=null;}
function AXK(a){AM8(a.C3);}
function VR(){B.call(this);this.uz=null;}
function A2y(a){a.uz.G2();}
function VT(){B.call(this);this.zc=null;}
function A3h(a){a.zc.AE();}
function ADK(){B.call(this);this.x1=null;}
function A3Q(a){var b,c,d,e,f,g,h,i;b=a.x1;c=(b.ux.bK()).data;d=K(Bn,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new AFK;i.EN=b;i.EO=h;e[f]=AAj(i,h);f=f+1|0;}return d;}
function AC1(){B.call(this);this.vM=null;}
function ARd(a){a.vM.q0.iw(0);}
function AC0(){B.call(this);this.FJ=null;}
function ASd(a){a.FJ.q0.iw(1);}
function Wx(){B.call(this);this.BV=null;}
function A5L(a){var b,c,d,e,f;b=a.BV.c.g;c=b.R;d=J();P(F(d,C(642)),c);$rt_globals.console.info($rt_ustr(I(d)));c=b.pJ;d=J();P(F(d,C(643)),c);$rt_globals.console.info($rt_ustr(I(d)));d=b.dt;e=EC(DW(b));AHx(d,0,d.dq,e);b=X();f=b.pd;f.data[0]=10;AAT(b,f,0,1);}
function Wz(){B.call(this);this.w5=null;}
function AR5(a){ADp(a.w5);}
function WA(){B.call(this);this.Ao=null;}
function ATo(a){AEC(a.Ao);}
function Wu(){B.call(this);this.vq=null;}
function A5w(a){PJ(a.vq.c);}
function Wv(){B.call(this);this.EJ=null;}
function AV$(a){Na(a.EJ.c);}
function ADH(){B.call(this);this.x8=null;}
function A3y(a){var b,c,d,e,f,g,h;b=a.x8;c=K(Bn,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=AAj(R$(b,g),AAv(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=AAj(R$(b,g),AAv(g));e=h;}return c;}
function Zd(){var a=this;B.call(a);a.un=null;a.uk=null;a.uj=0;a.ul=0;}
function A31(a,b){b=b;E4(a.un,a.uk,b,a.uj,a.ul);}
function Ze(){var a=this;B.call(a);a.Hz=null;a.Hy=null;a.Hx=0;a.Hw=0;}
function ASX(a,b){b=b;E4(a.Hz,a.Hy,b,a.Hx,a.Hw);}
function AMg(){var a=this;B.call(a);a.hV=null;a.dP=0;}
function A1N(a,b){var c=new AMg();AQx(c,a,b);return c;}
function AQx(a,b,c){a.hV=b;a.dP=c;}
function AVu(a,b){var c;if(a===b)return 1;if(b!==null&&Bv(a)===Bv(b)){c=b;return a.dP==c.dP&&BN(a.hV,c.hV)?1:0;}return 0;}
function AOR(a){var b,c,d;b=a.hV;c=a.dP;d=J();Bj(P(Bj(F(d,b),40),c),41);return I(d);}
function ZW(){B.call(this);this.t_=null;}
function A25(a,b){b=b;Qm(a.t_,b);}
function Zc(){B.call(this);this.BP=null;}
function A7p(a,b){b=b;Hm(a.BP,b);}
var Wg=G();
function AHk(){var a=this;B.call(a);a.KM=0;a.Jl=0;a.HS=0;a.rL=0.0;}
function AEy(){var a=this;B.call(a);a.EW=null;a.pm=0;}
function A0R(a,b){var c,d;c=a.EW.data;d=a.pm;a.pm=d+1|0;c[d]=b;return 1;}
function QU(){B.call(this);this.wq=null;}
function AW0(a,b){return Bp(a.wq,b);}
function FY(){var a=this;B.call(a);a.mc=0;a.x2=0;a.lr=null;a.iG=null;a.Di=null;a.n7=null;}
function Bbw(a){var b=new FY();OR(b,a);return b;}
function OR(a,b){a.n7=b;a.x2=b.du;a.lr=null;}
function HD(a){var b,c;if(a.lr!==null)return 1;while(true){b=a.mc;c=a.n7.cj.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.mc=b+1|0;}return 0;}
function ANK(a){var b;if(a.x2==a.n7.du)return;b=new F0;W(b);L(b);}
function Pf(a){var b,c,d,e;ANK(a);if(!HD(a)){b=new Go;W(b);L(b);}b=a.lr;if(b!==null){c=a.iG;if(c!==null)a.Di=c;a.iG=b;a.lr=b.dp;}else{d=a.n7.cj.data;e=a.mc;a.mc=e+1|0;b=d[e];a.iG=b;a.lr=b.dp;a.Di=null;}}
var AEq=G(FY);
function AR0(a){Pf(a);return a.iG.c2;}
var Wh=G(FY);
function PT(a){Pf(a);return a.iG;}
var ACP=G(FY);
function AJh(){var a=this;B.call(a);a.XI=null;a.a1f=0;}
function Vm(){B.call(this);this.z9=null;}
function A0N(a){AD$(a.z9);}
function Vl(){B.call(this);this.t5=null;}
function ASm(a,b){In(a.t5,b);}
function Xv(){B.call(this);this.tH=null;}
function AYr(a){AHR(a.tH);}
function Xw(){B.call(this);this.Hl=null;}
function AWI(a,b){In(a.Hl,b);}
function AGo(){var a=this;B.call(a);a.BQ=null;a.BR=0.0;a.BS=0;a.BT=null;a.BU=null;}
function AV6(a,b){AEL(a.BQ,a.BR,a.BS,a.BT,a.BU,b);}
function AMR(){var a=this;B.call(a);a.Ae=null;a.iW=null;a.ph=null;a.bI=null;a.hA=null;a.bg=0;a.wA=0;a.Fj=0;a.d8=0;a.wI=0;a.fd=0;a.iN=0;a.c6=0;}
function A7K(a,b,c,d,e){var f=new AMR();A38(f,a,b,c,d,e);return f;}
function A38(a,b,c,d,e,f){a.Ae=b;a.iW=c;a.ph=d;a.bI=e;a.hA=f;}
function ANJ(a){var b,c,d;a:while(true){b=O4(a.bI,37,a.bg);if(b<0){Et(a.iW,C0(a.bI,a.bg));return;}Et(a.iW,Cv(a.bI,a.bg,b));b=b+1|0;a.bg=b;a.wA=b;c=AOX(a);if(a.c6&256)a.d8=Z(0,a.wI);if(a.d8==(-1)){d=a.Fj;a.Fj=d+1|0;a.d8=d;}b:{a.wI=a.d8;switch(c){case 66:break;case 67:ACw(a,c,1);break b;case 68:AAy(a,c,1);break b;case 69:case 70:case 71:case 73:case 74:case 75:case 76:case 77:case 78:case 80:case 81:case 82:case 84:case 85:case 86:case 87:case 89:case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:case 101:case 102:case 103:case 105:case 106:case 107:case 108:case 109:case 110:case 112:case 113:case 114:case 116:case 117:case 118:case 119:break a;case 72:Vc(a,
c,1);break b;case 79:Kl(a,c,3,1);break b;case 83:ABG(a,c,1);break b;case 88:Kl(a,c,4,1);break b;case 98:Z_(a,c,0);break b;case 99:ACw(a,c,0);break b;case 100:AAy(a,c,0);break b;case 104:Vc(a,c,0);break b;case 111:Kl(a,c,3,0);break b;case 115:ABG(a,c,0);break b;case 120:Kl(a,c,4,0);break b;default:break a;}Z_(a,c,1);}}L(A22(Dy(c)));}
function Z_(a,b,c){var d;MD(a,b);d=a.hA.data[a.d8];Fr(a,c,!(d instanceof G$?d.V7():d===null?0:1)?C(25):C(26));}
function Vc(a,b,c){var d;MD(a,b);d=a.hA.data[a.d8];Fr(a,c,d===null?C(24):P3(d.h7()));}
function ABG(a,b,c){var d,e;MD(a,b);d=a.hA.data[a.d8];if(!Do(d,Ua))Fr(a,c,BL(d));else{e=a.c6&7;if(c)e=e|2;d.OH(a.Ae,e,a.fd,a.iN);}}
function ACw(a,b,c){var d,e,f,g;IL(a,b,259);d=a.hA.data[a.d8];e=a.iN;if(e>=0)L(A16(e));if(d instanceof FW)e=d.PV();else if(d instanceof If)e=d.Jj()&65535;else if(d instanceof Hw)e=d.Jr()&65535;else{if(!(d instanceof E6)){if(d===null){Fr(a,c,C(24));return;}L(AKf(b,Bv(d)));}e=d.O;if(!(e>=0&&e<=1114111?1:0)){d=new ACB;f=J();F(P(F(f,C(644)),e),C(645));Bd(d,I(f));d.J6=e;L(d);}}d=new BH;if(e<65536){g=B2(1);g.data[0]=e&65535;}else g=AN9([Ia(e),Hr(e)]);JU(d,g);Fr(a,c,d);}
function AAy(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$$je;IL(a,b,507);W4(a);d=a.hA.data[a.d8];if(d instanceof H_){e=d.iY;b=AT2(e,CY);if(b<0)e=A3r(e);f=VA(e);g=b>=0?0:1;}else{if(!(d instanceof E6)&&!(d instanceof If)&&!(d instanceof Hw))L(AKf(b,d===null?null:Bv(d)));h=d.AC();f=Pe(E2(h));g=h>=0?0:1;}i=0;j=J();if(g){if(!(a.c6&128)){Bj(j,45);i=1;}else{Bj(j,40);i=2;}}else{b=a.c6;if(b&8){Bj(j,43);i=1;}else if(b&16){Bj(j,32);i=1;}}k=J();if(!(a.c6&64))By(k,f);else{l=(AVH(a.ph)).tX;d=a.ph;m=d.k1;n=d.j$;if(Bbs
===null)Bbs=A3E();o=Bbs;p=ANs(m,n);p=o.hasOwnProperty($rt_ustr(p))?o[$rt_ustr(p)]:o.hasOwnProperty($rt_ustr(m))?o[$rt_ustr(m)]:o.root;m=(p.value!==null?$rt_str(p.value):null);o=new Jc;p=AVH(d);o.u2=1;o.mw=40;o.pf=1;o.me=3;AOC();o.Ih=Bbx;d=Z1();if(d===null){d=new EW;W(d);L(d);}n=d.k1;q=d.j$;if(C_(q)){if(Bbr===null)Bbr=ASh();d=Bbr;if(d.hasOwnProperty($rt_ustr(n)))n=(d[$rt_ustr(n)].value!==null?$rt_str(d[$rt_ustr(n)].value):null);h=LW(n,95);q=h<=0?C(20):C0(n,h+1|0);}if(Bby===null)Bby=AYv();d=Bby;if(!d.hasOwnProperty($rt_ustr(q)))d
=null;else{n=(d[$rt_ustr(q)].value!==null?$rt_str(d[$rt_ustr(q)].value):null);if(n===null){d=new EW;W(d);L(d);}AXL();d=B5(Bbz,n);if(d===null){d=new Bq;f=J();F(F(f,C(646)),n);Bd(d,I(f));L(d);}}o.JZ=d;o.He=K(Dw,0);r=K(Dw,1);r.data[0]=JM(C(344));o.or=r;o.vV=K(Dw,0);o.Cu=K(Dw,0);o.Do=1;a:{try{d=AKv(p);break a;}catch($$e){$$je=Kk($$e);if($$je instanceof MQ){f=$$je;}else{throw $$e;}}L(A1p(C(647),f));}o.Jq=d;AQh(o,m);s=o.yF;t=N(f)%s|0;if(!t)t=s;u=0;while(t<N(f)){By(k,Cv(f,u,t));Bj(k,l);v=t+s|0;u=t;t=v;}By(k,C0(f,u));}b:
{if(a.c6&32){t=ANf(k)+i|0;while(true){if(t>=a.fd)break b;Bj(j,Fj(0,10));t=t+1|0;}}}Et(j,k);if(g&&a.c6&128)Bj(j,41);Fr(a,c,GS(j));}
function Kl(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;IL(a,b,423);W4(a);e=a.hA.data[a.d8];if(!(e instanceof H_)){if(e instanceof E6)f=K6(e.O,c);else if(e instanceof Hw)f=K6(e.Jr()&65535,c);else{if(!(e instanceof If))L(AKf(b,e===null?null:Bv(e)));f=K6(e.Jj()&255,c);}}else{g=e.iY;b=AT2(g,CY);if(!b)f=C(29);else{h=1<<c;i=h-1|0;if(!b)b=64;else{j=0;k=C2(g,32);if(ASK(k,CY))j=32;else k=g;l=C2(k,16);if(Er(l,CY))l=k;else j=j|16;k=C2(l,8);if(Er(k,CY))k=l;else j=j|8;l=C2(k,4);if(Er(l,CY))l=k;else j=j|4;k=C2(l,2);if(Er(k,CY))k
=l;else j=j|2;if(ASK(C2(k,1),CY))j=j|1;b=(64-j|0)-1|0;}b=(((64-b|0)+c|0)-1|0)/c|0;m=B2(b);n=m.data;b=U(b-1|0,c);j=0;while(b>=0){o=j+1|0;n[j]=Fj(DV(C2(g,b))&i,h);b=b-c|0;j=o;}f=EC(m);}}p=J();if(a.c6&4){q=c!=4?C(29):C(648);e=J();F(F(e,q),f);f=I(e);}a:{if(a.c6&32){h=N(f);while(true){if(h>=a.fd)break a;Bj(p,Fj(0,10));h=h+1|0;}}}By(p,f);Fr(a,d,I(p));}
function W4(a){var b,c,d,e,f;b=a.c6;if(b&8&&b&16)L(AUL(C(649)));if(b&32&&b&1)L(AUL(C(650)));c=a.iN;if(c>=0)L(A16(c));if(b&1&&a.fd<0){d=new T5;e=Cv(a.bI,a.wA,a.bg);f=J();F(F(f,C(651)),e);Bd(d,I(f));d.HT=e;L(d);}}
function Fr(a,b,c){var d,e,f,g,h,i,j,k;d=a.iN;if(d>0)c=Cv(c,0,d);if(b&&!C_(c)){e=BC(c.be.data.length).data;f=0;b=0;while(true){g=c.be.data;d=g.length;if(b>=d)break;a:{if(b!=(d-1|0)&&NK(g[b])){g=c.be.data;h=b+1|0;if(O1(g[h])){d=f+1|0;g=c.be.data;e[f]=UP(Ym(g[b],g[h]));b=h;break a;}}d=f+1|0;e[f]=UP(c.be.data[b])&65535;}b=b+1|0;f=d;}c=new BH;b=0;c.be=B2(f*2|0);i=0;j=0;while(j<f){d=b+1|0;b=e[b];if(b<65536){g=c.be.data;h=i+1|0;g[i]=b&65535;}else{g=c.be.data;k=i+1|0;g[i]=Ia(b);g=c.be.data;h=k+1|0;g[k]=Hr(b);}j=j+
1|0;b=d;i=h;}e=c.be;if(i<e.data.length)c.be=IP(e,i);}if(!(a.c6&1)){AHM(a,c);Et(a.iW,c);}else{Et(a.iW,c);AHM(a,c);}}
function MD(a,b){IL(a,b,263);}
function IL(a,b,c){var d,e,f,g,h;d=a.c6;if((d|c)==c)return;e=new AFe;c=d&(c^(-1));if(!c)c=32;else{f=0;d=c<<16;if(d)f=16;else d=c;c=d<<8;if(!c)c=d;else f=f|8;d=c<<4;if(!d)d=c;else f=f|4;c=d<<2;if(!c)c=d;else f=f|2;if(c<<1)f=f|1;c=(32-f|0)-1|0;}g=Dy(Be(C(652),c));h=J();Bj(F(F(F(h,C(653)),g),C(654)),b);Bd(e,I(h));e.Ik=g;e.Ld=b;L(e);}
function AHM(a,b){var c,d,e;if(a.fd>N(b)){c=a.fd-N(b)|0;d=new Km;IM(d,c);e=0;while(e<c){Bj(d,32);e=e+1|0;}Et(a.iW,d);}}
function AOX(a){var b,c,d,e,f,g;a.c6=0;a.d8=(-1);a.fd=(-1);a.iN=(-1);b=Be(a.bI,a.bg);if(b!=48&&M9(b)){c=Pz(a);if(a.bg<N(a.bI)&&Be(a.bI,a.bg)==36){a.bg=a.bg+1|0;a.d8=c-1|0;}else a.fd=c;}a:{b:{while(true){if(a.bg>=N(a.bI))break a;c:{b=Be(a.bI,a.bg);switch(b){case 32:break;case 33:case 34:case 36:case 37:case 38:case 39:case 41:case 42:case 46:case 47:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:break b;case 35:c=4;break c;case 40:c=128;break c;case 43:c=8;break c;case 44:c
=64;break c;case 45:c=1;break c;case 48:c=32;break c;case 60:c=256;break c;default:break b;}c=16;}d=a.c6;if(d&c)break;a.c6=d|c;a.bg=a.bg+1|0;}e=new Qc;f=Dy(b);g=J();F(F(g,C(655)),f);Bd(e,I(g));e.Kn=f;L(e);}}if(a.fd<0&&a.bg<N(a.bI)&&M9(Be(a.bI,a.bg)))a.fd=Pz(a);if(a.bg<N(a.bI)&&Be(a.bI,a.bg)==46){b=a.bg+1|0;a.bg=b;if(b<N(a.bI)&&M9(Be(a.bI,a.bg)))a.iN=Pz(a);else L(A22(Dy(Be(a.bI,a.bg-1|0))));}if(a.bg<N(a.bI)){e=a.bI;c=a.bg;a.bg=c+1|0;return Be(e,c);}e=new RW;f=a.bI;AQg(e,Dy(Be(f,N(f)-1|0)));L(e);}
function Pz(a){var b,c,d,e;b=0;while(a.bg<N(a.bI)&&M9(Be(a.bI,a.bg))){c=b*10|0;d=a.bI;e=a.bg;a.bg=e+1|0;b=c+(Be(d,e)-48|0)|0;}return b;}
function M9(b){return b>=48&&b<=57?1:0;}
function Tk(){var a=this;B.call(a);a.AK=null;a.AJ=null;}
function Yk(){var a=this;B.call(a);a.wt=null;a.ws=null;a.wr=0;}
function AU8(a,b,c){var d,e,f;d=a.wt;e=a.ws;f=a.wr;e=DT(e);ACt(!f?d.bU.N:d.bU.B,b,e,c);if(!f)d.mn=e;else d.re=e;b=d.re;if(b!==null&&d.mn!==null)CN(d.gA,e);else{if(b!==null)CN(d.gA,b);b=d.mn;if(b!==null)CN(d.gA,b);}if(YF(d))ACs(d);}
function Yl(){B.call(this);this.Gl=null;}
function A4g(a,b){T(a.Gl,b);}
function ADZ(){B.call(this);this.DD=null;}
function AUM(a,b){b.iR=a.DD.dq;}
function ADY(){B.call(this);this.za=null;}
function A4B(a,b){b.iL=a.za.dq.cv;}
function Zl(){var a=this;B.call(a);a.vT=null;a.vS=0;}
function A4O(a){ABH(a.vT,a.vS);}
function AHI(){B.call(this);this.Hb=null;}
function ARF(a,b){In(a.Hb,b);}
function AHK(){var a=this;B.call(a);a.uv=null;a.uw=0;}
function A1b(a){Io(a.uv,a.uw);}
function AEz(){B.call(this);this.GP=null;}
function A37(a){Io(a.GP,1);}
function AEA(){B.call(this);this.E1=null;}
function AYz(a){Io(a.E1,0);}
function Qa(){var a=this;B.call(a);a.zR=null;a.zS=0;}
function A09(a){var b,c,d,e,f;b=a.zR;c=a.zS;d=b.v;e=d.m.bk;f=new Xl;f.va=b;f.vb=c;EM(e,J0(d,f));}
function ZG(){B.call(this);this.zK=null;}
function A4M(a,b){a.zK.e($rt_str(b.message));}
function Qk(){B.call(this);this.CH=null;}
function A4K(a,b){a.CH.e($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
var Zv=G(CP);
function AAX(){B.call(this);this.uq=null;}
function A0C(a,b){b.iR=a.uq;}
var GL=G(Cj);
var Bbv=null;var Bbu=null;var BbA=null;function U4(){U4=Bg(GL);A7f();}
function A5a(a,b){var c=new GL();AJ_(c,a,b);return c;}
function AM5(){U4();return BbA.d3();}
function AJ_(a,b,c){U4();Df(a,b,c);}
function A7f(){var b;Bbv=A5a(C(656),0);b=A5a(C(657),1);Bbu=b;BbA=BA(GL,[Bbv,b]);}
function Sv(){B.call(this);this.BW=null;}
function A6C(a,b){P6(a.BW,b);}
function IE(){var a=this;Dr.call(a);a.gW=null;a.jd=null;a.gq=null;a.g2=null;}
var BbB=null;var BbC=null;function AWL(a,b){var c=new IE();AOF(c,a,b);return c;}
function BbD(a,b,c){var d=new IE();MA(d,a,b,c);return d;}
function AOF(a,b,c){MA(a,b,0,c);}
function MA(a,b,c,d){Kx(a,JP(b),c);a.gq=BbB;a.g2=BbC;a.gW=b;a.jd=d;LY(a);IZ(a);}
function AXX(a){return I4(a.gW);}
function Tr(a,b){return Xh(a.gq,b);}
function LY(a){var b;b=new Ul;b.wh=a;a.cy=b;a.gv=b;a.cQ=A_9;}
function AHU(a){var b;b=new AIC;b.xh=a;a.cy=b;a.gv=b;}
function AYH(a){if(!Ez(a))S8(a);else Ev(a);}
function AL7(){BbB=K(IE,0);BbC=K(La,0);}
function AFK(){var a=this;B.call(a);a.EN=null;a.EO=null;}
function AQ8(a){var b,c;b=a.EN;c=a.EO;b.kQ.yS(c);}
var AEY=G();
var BaO=null;function A8Y(){A8Y=Bg(AEY);AZx();}
function AZx(){var b,c;b=BC((AM5()).data.length);c=b.data;BaO=b;c[Bbv.d$]=1;c[Bbu.d$]=2;}
function Vp(){var a=this;B.call(a);a.GC=null;a.GD=0.0;}
function A1w(a){var b,c;b=a.GC;c=a.GD;b.kQ.pY(c);}
var XS=G();
function A2c(a,b){var c,d;c=b.data;b=B0();d=c.length;c=J();P(F(c,C(658)),d);T(b,I(c));}
var XT=G();
function A5l(a,b){var c,d;c=X();d=J();F(F(d,C(659)),b);T(c,I(d));if(!AOq(b))T(B0(),b);else T(X(),C(660));}
function La(){Dr.call(this);this.gE=null;}
function AR7(a){return OE(a.gE);}
function AZs(a){Jk(a);}
var Td=G(Bt);
var YJ=G(Bt);
function WY(){Gj.call(this);this.JR=0;}
function S4(){Gj.call(this);this.LC=0;}
function AF8(){var a=this;B.call(a);a.w2=null;a.F2=null;a.Aq=0;a.oZ=0;}
function Oz(a,b){return Ce(a.w2)<b?0:1;}
function AIg(){CX.call(this);this.Fe=null;}
function ASF(a){var b,c,d,e,f;b=a.Fe;if(b.rz===null){c=new Tf;d=null;e=null;c.I3=(-1);c.fH=b;c.om=d;c.qR=1;c.sW=0;c.oh=e;c.oJ=1;c.pT=0;c.EG=0;b.rz=c;}e=b.rz;if(e.EG){f=!e.pT?AGW(e.fH,1):!e.oJ?RI(e.fH,e.oh,1):AIr(e.fH,e.oh,1);c=A1W(e.fH,f,e.om,e.qR,e.sW,1);}else{f=!e.sW?AGW(e.fH,0):!e.qR?RI(e.fH,e.om,0):AIr(e.fH,e.om,0);c=A1W(e.fH,f,e.oh,e.pT,e.oJ,0);}b=new VJ;b.KA=a;b.rs=c;return b;}
var AH2=G(0);
function AGq(){B.call(this);this.Ew=null;}
function AZj(a){var b,c;b=a.Ew;c=b.AK;b=b.AJ;c.Mc(b.n1,b.si,null);}
var AKP=G(0);
function UX(){B.call(this);this.we=null;}
function A1G(a,b){b.iL=a.we;}
function ACN(){B.call(this);this.GH=null;}
function A5O(a,b){return APe(a.GH.gn);}
var AOI=G();
function Vy(){B.call(this);this.uE=null;}
function AWX(a,b){IH(a.uE.T,b,A_2);}
function Sb(){var a=this;B.call(a);a.nW=null;a.nV=null;a.CV=null;}
function ASB(a){AAm(a.nW);AAm(a.nV);}
function AQD(a){AIp(a.nW);AIp(a.nV);}
function AWV(a,b){RD(a.nW,b);RD(a.nV,b);}
function AVy(a,b){Ql(a.CV,b);}
function ACl(){B.call(this);this.Fb=null;}
function ART(a,b){Eh(a.Fb,b);}
function ABj(){B.call(this);this.B6=null;}
function ARa(a,b){Wb(DF(a.B6),b,A_2,R6(C(661)));}
function Z3(){var a=this;B.call(a);a.I6=null;a.I7=null;a.I8=null;}
function ABm(){var a=this;B.call(a);a.Lt=null;a.Lu=null;}
function ADX(){var a=this;B.call(a);a.iS=0;a.cY=null;}
function AT8(a,b){var c,d,e,f,g;c=X();d=DT(b.gE);e=J();F(F(e,C(662)),d);T(c,I(e));c=b.gE;d=Tp(a,c.jA);if(d===null)f=null;else{c=FF(c);f=Xh(d.g2,c);}if(f===null){c=new AFU;d=a.cY;APx(c,d.v,d.fx,d.iC);L9(c,b.gE);K2(c);}else{Mm(a,f);c=new HN;g=a.cY;I0(c,g.v,g.fx,g.iC,g.G$,0);NV(c,b.gE,a.iS);NV(c,f.gE,a.iS?0:1);XW(c.bU,1);}}
function AYG(a,b){var c,d,e,f;AHU(b);c=X();d=I4(b.gW);e=J();F(F(e,C(663)),d);T(c,I(e));c=VF(a,b);Mm(a,c);if(c!==null&&LP(c))c.cy.d();if(Hv(b)>0)Pr(a.cY);O7(a.cY,Cf([0,0]));f=b.gq.data;if(f.length==1&&!b.g2.data.length)f[0].cy.d();}
function Mm(a,b){var c;c=!a.iS?a.cY.bv.bW:a.cY.bv.bV;c.co=YB(c.cc,b);}
function AYT(a,b){var c;if(Hv(b)>0)Pr(a.cY);LY(b);c=VF(a,b);Mm(a,c);if(c!==null&&Ez(c))c.cy.d();O7(a.cY,Cf([0,0]));}
function VF(a,b){var c,d;a:{c=a.iS;if(!(c&&b===a.cY.dC)){if(c)break a;if(b!==a.cY.dJ)break a;}return !c?a.cY.dC:a.cY.dJ;}b=b.gW;d=Tp(a,b.gy);return d===null?null:Tr(d,JP(b));}
function Tp(a,b){var c,d,e;c=!a.iS?a.cY.dC:a.cY.dJ;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Tr(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function Vq(){var a=this;B.call(a);a.Jw=null;a.y0=null;a.Ei=null;a.Lj=null;a.ss=null;}
var Lo=G(0);
function AGi(){B.call(this);this.zH=null;}
function WJ(a,b){O7(a.zH,b);}
function Ul(){B.call(this);this.wh=null;}
function AVA(a){var b,c,d,e;b=a.wh;c=X();d=CZ(b);e=J();F(F(e,C(664)),d);T(c,I(e));c=b.gW;e=new AEt;e.de=b;e.nK=BQ();e.oq=BQ();HY(c,e);}
var CK=G(Bq);
function RW(){CK.call(this);this.LO=null;}
function A22(a){var b=new RW();AQg(b,a);return b;}
function AQg(a,b){var c;c=J();F(F(c,C(665)),b);Bd(a,I(c));a.LO=b;}
function AEU(){B.call(this);this.AG=null;}
var Rv=G(0);
var AA0=G(0);
function AO6(){B.call(this);this.Nt=null;}
var AO7=G();
function AO5(){var a=this;B.call(a);a.a1l=null;a.a1k=null;}
var EG=G(Cj);
var BbE=null;var BbF=null;var BbG=null;var BbH=null;function A0j(){A0j=Bg(EG);ATJ();}
function AOa(a,b){var c=new EG();AKd(c,a,b);return c;}
function AY0(){A0j();return BbH.d3();}
function AKd(a,b,c){A0j();Df(a,b,c);}
function ATJ(){var b;BbE=AOa(C(666),0);BbF=AOa(C(667),1);b=AOa(C(668),2);BbG=b;BbH=BA(EG,[BbE,BbF,b]);}
var AAS=G(0);
function Ub(){B.call(this);this.ET=null;}
function AS2(a,b){var c,d;c=a.ET;d=b.kw;b=J();F(F(b,c),d);$rt_globals.console.info($rt_ustr(I(b)));}
function Xl(){var a=this;B.call(a);a.va=null;a.vb=0;}
function A0v(a,b){var c,d,e,f,g;c=a.va;d=a.vb;e=FF(b);f=J();F(F(f,C(212)),e);$rt_globals.console.info($rt_ustr(I(f)));f=c.v.m;e=f.bk.cS;g=new RQ;g.sV=b;g.sU=e;OX(c.mH,g,f.GO,d);}
var Dh=G(0);
var A$O=null;var A_p=null;var A$Q=null;var A$P=null;var A$S=null;var A$R=null;var A$U=null;var A$T=null;var A$W=null;var A$V=null;var A$X=null;function ALL(){ALL=Bg(Dh);A6L();}
function A6L(){A$O=Co(0);A_p=C7(8,8,8);A$Q=M(C(669));A$P=C7(255,255,255);A$S=M(C(670));A$R=M(C(671));A$U=M(C(672));A$T=M(C(673));A$W=Ed(205,205,205,153);A$V=Ed(255,255,255,0);A$X=M(C(674));}
function Cz(){Cj.call(this);this.sb=null;}
var BbI=null;var BbJ=null;var BbK=null;var BbL=null;var BbM=null;var BbN=null;var BbO=null;var BbP=null;var BbQ=null;var BbR=null;var BbS=null;var BbT=null;var BbU=null;var BbV=null;var BbW=null;var BbX=null;function AK9(){AK9=Bg(Cz);A65();}
function DU(a,b,c){var d=new Cz();ACI(d,a,b,c);return d;}
function A6T(a,b,c,d){var e=new Cz();AJk(e,a,b,c,d);return e;}
function APC(){AK9();return BbX.d3();}
function ACI(a,b,c,d){AK9();Df(a,b,c);a.sb=Kc(d,null);}
function AJk(a,b,c,d,e){AK9();Df(a,b,c);a.sb=Kc(d,e);}
function A65(){var b;b=new Cz;ALL();ACI(b,C(238),0,A_p);BbI=b;BbJ=DU(C(239),1,M(C(675)));BbK=DU(C(241),2,M(C(676)));BbL=DU(C(243),3,M(C(677)));BbM=DU(C(245),4,A_p);BbN=DU(C(246),5,M(C(678)));BbO=DU(C(248),6,M(C(477)));BbP=DU(C(249),7,M(C(679)));BbQ=DU(C(251),8,M(C(680)));BbR=A6T(C(253),9,A_p,C7(237,235,252));BbS=A6T(C(254),10,M(C(475)),M(C(681)));BbT=DU(C(255),11,M(C(477)));BbU=DU(C(257),12,M(C(478)));BbV=DU(C(259),13,M(C(682)));b=DU(C(260),14,M(C(261)));BbW=b;BbX=BA(Cz,[BbI,BbJ,BbK,BbL,BbM,BbN,BbO,BbP,BbQ,
BbR,BbS,BbT,BbU,BbV,b]);}
var Eb=G(0);
var A$1=null;var A$2=null;var A$Y=null;var A$Z=null;var A$0=null;var A_q=null;var A_r=null;var A$3=null;var A$4=null;function AZn(){AZn=Bg(Eb);A0U();}
function A0U(){A$1=M(C(683));A$2=M(C(194));A$Y=M(C(195));A$Z=M(C(684));A$0=M(C(685));A_q=M(C(683));A_r=M(C(194));A$3=Ed(205,205,205,153);A$4=C7(247,248,250);}
function Qc(){CK.call(this);this.Kn=null;}
function AMr(){CK.call(this);this.II=0;}
function A16(a){var b=new AMr();AZJ(b,a);return b;}
function AZJ(a,b){var c;c=J();P(F(c,C(686)),b);Bd(a,I(c));a.II=b;}
var Hw=G(C$);
var BbY=null;function ALe(){BbY=H($rt_shortcls());}
function ACB(){CK.call(this);this.J6=0;}
function AIP(){var a=this;CK.call(a);a.HK=0;a.Ks=null;}
function AKf(a,b){var c=new AIP();AXn(c,a,b);return c;}
function AXn(a,b,c){var d;d=J();F(Bj(F(F(F(d,C(687)),c),C(688)),b),C(689));Bd(a,I(d));a.HK=b;a.Ks=c;}
function AI_(){var a=this;B.call(a);a.HY=null;a.K1=0;a.tX=0;a.Is=0;a.I5=0;a.HR=0;a.Le=0;a.LB=0;a.Kb=null;a.Lg=null;a.Jh=0;a.IM=0;a.J8=null;}
function AVH(a){var b=new AI_();A6z(b,a);return b;}
function A6z(a,b){var c,d,e;a.HY=b;c=b.k1;d=b.j$;if(Bbt===null)Bbt=AR9();e=Bbt;b=ANs(c,d);e=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)]:e.hasOwnProperty($rt_ustr(c))?e[$rt_ustr(c)]:e.root;a.K1=48;a.tX=e.groupingSeparator&65535;a.Is=e.decimalSeparator&65535;a.I5=e.perMille&65535;a.HR=e.percent&65535;a.Le=35;a.LB=59;a.Kb=(e.naN!==null?$rt_str(e.naN):null);a.Lg=(e.infinity!==null?$rt_str(e.infinity):null);a.Jh=e.minusSign&65535;a.IM=e.decimalSeparator&65535;a.J8=(e.exponentSeparator!==null?$rt_str(e.exponentSeparator)
:null);}
var K8=G();
function Ny(){var a=this;K8.call(a);a.u2=0;a.mw=0;a.pf=0;a.me=0;a.yI=0;a.Ih=null;a.JZ=null;}
function Jc(){var a=this;Ny.call(a);a.Jq=null;a.He=null;a.or=null;a.vV=null;a.Cu=null;a.Do=0;a.yF=0;a.Kt=0;a.J_=0;a.K_=null;}
var BbZ=null;var Bb0=null;function AQh(a,b){var c,d,e,f,g,h;c=new ZP;c.mp=0;c.sc=0;c.rD=0;c.py=0;c.mq=0;c.oa=1;c.bl=b;c.n=0;c.Cp=Kd(c,0,0);if(c.n==N(b)){c=new Bq;d=J();F(F(d,C(690)),b);Bd(c,I(d));L(c);}AHE(c,1);c.qw=null;c.pK=null;if(c.n<N(b)&&Be(b,c.n)!=59)c.rR=Kd(c,1,0);if(c.n<N(b)){e=c.n;c.n=e+1|0;if(Be(b,e)!=59){d=new Bq;f=c.n;c=J();F(F(P(F(c,C(691)),f),C(692)),b);Bd(d,I(c));L(d);}c.qw=Kd(c,0,1);AHE(c,0);c.pK=Kd(c,1,1);}g=c.Cp;a.He=g;a.vV=c.rR;h=c.qw;if(h!==null)a.or=h;else{e=g.data.length;h=K(Dw,e+1|0);a.or
=h;BE(g,0,h,1,e);a.or.data[0]=new KI;}g=c.pK;if(g===null)g=c.rR;a.Cu=g;f=c.mp;a.yF=f;a.u2=f<=0?0:1;e=!c.mq?c.qf:Z(1,c.qf);if(e<0)e=0;a.pf=e;if(a.mw<e)a.mw=e;f=c.tR;if(f<0)f=0;a.mw=f;if(f<e)a.pf=f;f=c.sc;if(f<0)f=0;a.yI=f;if(a.me<f)a.me=f;e=c.rD;if(e<0)e=0;a.me=e;if(e<f)a.yI=e;a.Kt=c.mq;a.J_=c.py;a.Do=c.oa;a.K_=b;}
function AM7(){BbZ=AA3([Bh(1),Bh(10),Bh(100),Bh(1000),Bh(10000),Bh(100000),Bh(1000000),Bh(10000000),Bh(100000000),Bh(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);Bb0=Cf([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);}
var Ua=G(0);
var P4=G(CX);
function AKJ(){var a=this;B.call(a);a.UV=null;a.ZY=null;a.SH=null;a.P5=null;a.VC=null;}
function AFe(){var a=this;CK.call(a);a.Ik=null;a.Ld=0;}
function AJp(){CK.call(this);this.JC=null;}
function AUL(a){var b=new AJp();A3p(b,a);return b;}
function A3p(a,b){var c;c=J();F(F(c,C(693)),b);Bd(a,I(c));a.JC=b;}
function T5(){CK.call(this);this.HT=null;}
function PS(){var a=this;P4.call(a);a.pQ=null;a.oz=null;}
function A4Y(a,b){var c,d,e,f;c=b.d$;d=c/32|0;e=1<<(c%32|0);f=a.oz.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function Q3(){EF.call(this);this.r8=null;}
function AYW(a,b){return a.r8.data[b];}
function AVv(a){return a.r8.data.length;}
var Dw=G(0);
function ZF(){B.call(this);this.sm=null;}
function JM(a){var b=new ZF();AWy(b,a);return b;}
function AWy(a,b){a.sm=b;}
function A0s(a,b){var c;if(a===b)return 1;if(!(b instanceof ZF))return 0;c=b;return Bf(a.sm,c.sm);}
function DO(){Cj.call(this);this.Jy=0;}
var Bb1=null;var Bb2=null;var Bb3=null;var Bb4=null;var Bb5=null;var Bb6=null;var Bbx=null;var Bb7=null;var Bb8=null;function AOC(){AOC=Bg(DO);AXx();}
function F_(a,b,c){var d=new DO();AKj(d,a,b,c);return d;}
function A5K(){AOC();return Bb8.d3();}
function AKj(a,b,c,d){AOC();Df(a,b,c);a.Jy=d;}
function AXx(){var b;Bb1=F_(C(694),0,0);Bb2=F_(C(695),1,1);Bb3=F_(C(696),2,2);Bb4=F_(C(697),3,3);Bb5=F_(C(698),4,4);Bb6=F_(C(699),5,5);Bbx=F_(C(700),6,6);b=F_(C(701),7,7);Bb7=b;Bb8=BA(DO,[Bb1,Bb2,Bb3,Bb4,Bb5,Bb6,Bbx,b]);}
function NL(){B.call(this);this.Ce=null;}
var Bbz=null;function AXL(){var b,c,d,e,f,g;if(Bbz!==null)return;Bbz=Gy();if(Bb9===null)Bb9=ATv();b=Bb9;c=0;while(c<b.length){d=b[c];e=Bbz;f=(d.code!==null?$rt_str(d.code):null);g=new NL;g.Ce=d;DL(e,f,g);c=c+1|0;}}
function AQq(a){return (a.Ce.code!==null?$rt_str(a.Ce.code):null);}
var PR=G();
var Bb9=null;var Bby=null;function ATv(){return [{"code":"AFN","fractionDigits":2,"numericCode":971},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ALL","fractionDigits":2,"numericCode":8},{"code":"DZD","fractionDigits":2,"numericCode":12},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AOA","fractionDigits":2,"numericCode":973},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":null,"fractionDigits":0,"numericCode":0},{"code"
:"XCD","fractionDigits":2,"numericCode":951},{"code":"ARS","fractionDigits":2,"numericCode":32},{"code":"AMD","fractionDigits":2,"numericCode":51},{"code":"AWG","fractionDigits":2,"numericCode":533},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AZN","fractionDigits":2,"numericCode":944},{"code":"BSD","fractionDigits":2,"numericCode":44},{"code":"BHD","fractionDigits":3,"numericCode":48},{"code":"BDT","fractionDigits":2,"numericCode":50},{"code"
:"BBD","fractionDigits":2,"numericCode":52},{"code":"BYR","fractionDigits":0,"numericCode":974},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"BZD","fractionDigits":2,"numericCode":84},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"BMD","fractionDigits":2,"numericCode":60},{"code":"BTN","fractionDigits":2,"numericCode":64},{"code":"INR","fractionDigits":2,"numericCode":356},{"code":"BOB","fractionDigits":2,"numericCode":68},{"code":"BOV","fractionDigits":2,"numericCode":984},{"code"
:"USD","fractionDigits":2,"numericCode":840},{"code":"BAM","fractionDigits":2,"numericCode":977},{"code":"BWP","fractionDigits":2,"numericCode":72},{"code":"NOK","fractionDigits":2,"numericCode":578},{"code":"BRL","fractionDigits":2,"numericCode":986},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"BND","fractionDigits":2,"numericCode":96},{"code":"BGN","fractionDigits":2,"numericCode":975},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"BIF","fractionDigits":0,"numericCode":108},{"code"
:"KHR","fractionDigits":2,"numericCode":116},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CAD","fractionDigits":2,"numericCode":124},{"code":"CVE","fractionDigits":2,"numericCode":132},{"code":"KYD","fractionDigits":2,"numericCode":136},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CLF","fractionDigits":4,"numericCode":990},{"code":"CLP","fractionDigits":0,"numericCode":152},{"code":"CNY","fractionDigits":2,"numericCode":156}
,{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"COP","fractionDigits":2,"numericCode":170},{"code":"COU","fractionDigits":2,"numericCode":970},{"code":"KMF","fractionDigits":0,"numericCode":174},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"CDF","fractionDigits":2,"numericCode":976},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"CRC","fractionDigits":2,"numericCode":188},{"code":"XOF","fractionDigits":0,"numericCode"
:952},{"code":"HRK","fractionDigits":2,"numericCode":191},{"code":"CUC","fractionDigits":2,"numericCode":931},{"code":"CUP","fractionDigits":2,"numericCode":192},{"code":"ANG","fractionDigits":2,"numericCode":532},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"CZK","fractionDigits":2,"numericCode":203},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"DJF","fractionDigits":0,"numericCode":262},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"DOP","fractionDigits":2,"numericCode"
:214},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EGP","fractionDigits":2,"numericCode":818},{"code":"SVC","fractionDigits":2,"numericCode":222},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"ERN","fractionDigits":2,"numericCode":232},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ETB","fractionDigits":2,"numericCode":230},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"FKP","fractionDigits":2,"numericCode"
:238},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"FJD","fractionDigits":2,"numericCode":242},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XAF","fractionDigits":0,"numericCode":950},{"code":"GMD","fractionDigits":2,"numericCode":270},{"code":"GEL","fractionDigits":2,"numericCode"
:981},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"GHS","fractionDigits":2,"numericCode":936},{"code":"GIP","fractionDigits":2,"numericCode":292},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"DKK","fractionDigits":2,"numericCode":208},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"GTQ","fractionDigits":2,"numericCode":320},{"code":"GBP","fractionDigits":2,"numericCode"
:826},{"code":"GNF","fractionDigits":0,"numericCode":324},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"GYD","fractionDigits":2,"numericCode":328},{"code":"HTG","fractionDigits":2,"numericCode":332},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"HNL","fractionDigits":2,"numericCode":340},{"code":"HKD","fractionDigits":2,"numericCode":344},{"code":"HUF","fractionDigits":2,"numericCode"
:348},{"code":"ISK","fractionDigits":0,"numericCode":352},{"code":"INR","fractionDigits":2,"numericCode":356},{"code":"IDR","fractionDigits":2,"numericCode":360},{"code":"XDR","fractionDigits":-1,"numericCode":960},{"code":"IRR","fractionDigits":2,"numericCode":364},{"code":"IQD","fractionDigits":3,"numericCode":368},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"ILS","fractionDigits":2,"numericCode":376},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"JMD","fractionDigits":2,"numericCode":388},{"code":"JPY","fractionDigits":0,"numericCode":392},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"JOD","fractionDigits":3,"numericCode":400},{"code":"KZT","fractionDigits":2,"numericCode":398},{"code":"KES","fractionDigits":2,"numericCode":404},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"KPW","fractionDigits":2,"numericCode":408},{"code":"KRW","fractionDigits":0,"numericCode":410},{"code":"KWD","fractionDigits":3,"numericCode"
:414},{"code":"KGS","fractionDigits":2,"numericCode":417},{"code":"LAK","fractionDigits":2,"numericCode":418},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"LBP","fractionDigits":2,"numericCode":422},{"code":"LSL","fractionDigits":2,"numericCode":426},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":"LRD","fractionDigits":2,"numericCode":430},{"code":"LYD","fractionDigits":3,"numericCode":434},{"code":"CHF","fractionDigits":2,"numericCode":756},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"MOP","fractionDigits":2,"numericCode":446},{"code":"MKD","fractionDigits":2,"numericCode":807},{"code":"MGA","fractionDigits":2,"numericCode":969},{"code":"MWK","fractionDigits":2,"numericCode":454},{"code":"MYR","fractionDigits":2,"numericCode":458},{"code":"MVR","fractionDigits":2,"numericCode":462},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode"
:840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"MRO","fractionDigits":2,"numericCode":478},{"code":"MUR","fractionDigits":2,"numericCode":480},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XUA","fractionDigits":-1,"numericCode":965},{"code":"MXN","fractionDigits":2,"numericCode":484},{"code":"MXV","fractionDigits":2,"numericCode":979},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"MDL","fractionDigits":2,"numericCode":498},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"MNT","fractionDigits":2,"numericCode":496},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"MAD","fractionDigits":2,"numericCode":504},{"code":"MZN","fractionDigits":2,"numericCode":943},{"code":"MMK","fractionDigits":2,"numericCode":104},{"code":"NAD","fractionDigits":2,"numericCode":516},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"NPR","fractionDigits":2,"numericCode"
:524},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"NIO","fractionDigits":2,"numericCode":558},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"NGN","fractionDigits":2,"numericCode":566},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"NOK","fractionDigits":2,"numericCode"
:578},{"code":"OMR","fractionDigits":3,"numericCode":512},{"code":"PKR","fractionDigits":2,"numericCode":586},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":null,"fractionDigits":0,"numericCode":0},{"code":"PAB","fractionDigits":2,"numericCode":590},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"PGK","fractionDigits":2,"numericCode":598},{"code":"PYG","fractionDigits":0,"numericCode":600},{"code":"PEN","fractionDigits":2,"numericCode":604},{"code":"PHP","fractionDigits":2,"numericCode"
:608},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"PLN","fractionDigits":2,"numericCode":985},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"QAR","fractionDigits":2,"numericCode":634},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"RON","fractionDigits":2,"numericCode":946},{"code":"RUB","fractionDigits":2,"numericCode":643},{"code":"RWF","fractionDigits":0,"numericCode":646},{"code":"EUR","fractionDigits":2,"numericCode"
:978},{"code":"SHP","fractionDigits":2,"numericCode":654},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":"WST","fractionDigits":2,"numericCode":882},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"STD","fractionDigits":2,"numericCode":678},{"code":"SAR","fractionDigits":2,"numericCode"
:682},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"RSD","fractionDigits":2,"numericCode":941},{"code":"SCR","fractionDigits":2,"numericCode":690},{"code":"SLL","fractionDigits":2,"numericCode":694},{"code":"SGD","fractionDigits":2,"numericCode":702},{"code":"ANG","fractionDigits":2,"numericCode":532},{"code":"XSU","fractionDigits":-1,"numericCode":994},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"SBD","fractionDigits":2,"numericCode"
:90},{"code":"SOS","fractionDigits":2,"numericCode":706},{"code":"ZAR","fractionDigits":2,"numericCode":710},{"code":null,"fractionDigits":0,"numericCode":0},{"code":"SSP","fractionDigits":2,"numericCode":728},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"LKR","fractionDigits":2,"numericCode":144},{"code":"SDG","fractionDigits":2,"numericCode":938},{"code":"SRD","fractionDigits":2,"numericCode":968},{"code":"NOK","fractionDigits":2,"numericCode":578},{"code":"SZL","fractionDigits":2,"numericCode"
:748},{"code":"SEK","fractionDigits":2,"numericCode":752},{"code":"CHE","fractionDigits":2,"numericCode":947},{"code":"CHF","fractionDigits":2,"numericCode":756},{"code":"CHW","fractionDigits":2,"numericCode":948},{"code":"SYP","fractionDigits":2,"numericCode":760},{"code":"TWD","fractionDigits":2,"numericCode":901},{"code":"TJS","fractionDigits":2,"numericCode":972},{"code":"TZS","fractionDigits":2,"numericCode":834},{"code":"THB","fractionDigits":2,"numericCode":764},{"code":"USD","fractionDigits":2,"numericCode"
:840},{"code":"XOF","fractionDigits":0,"numericCode":952},{"code":"NZD","fractionDigits":2,"numericCode":554},{"code":"TOP","fractionDigits":2,"numericCode":776},{"code":"TTD","fractionDigits":2,"numericCode":780},{"code":"TND","fractionDigits":3,"numericCode":788},{"code":"TRY","fractionDigits":2,"numericCode":949},{"code":"TMT","fractionDigits":2,"numericCode":934},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"AUD","fractionDigits":2,"numericCode":36},{"code":"UGX","fractionDigits":0,"numericCode"
:800},{"code":"UAH","fractionDigits":2,"numericCode":980},{"code":"AED","fractionDigits":2,"numericCode":784},{"code":"GBP","fractionDigits":2,"numericCode":826},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"USN","fractionDigits":2,"numericCode":997},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"UYI","fractionDigits":0,"numericCode":940},{"code":"UYU","fractionDigits":2,"numericCode":858},{"code":"UZS","fractionDigits":2,"numericCode":860},{"code":"VUV","fractionDigits":0,"numericCode"
:548},{"code":"VEF","fractionDigits":2,"numericCode":937},{"code":"VND","fractionDigits":0,"numericCode":704},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"XPF","fractionDigits":0,"numericCode":953},{"code":"MAD","fractionDigits":2,"numericCode":504},{"code":"YER","fractionDigits":2,"numericCode":886},{"code":"ZMW","fractionDigits":2,"numericCode":967},{"code":"ZWL","fractionDigits":2,"numericCode":932},{"code":"XBA","fractionDigits":-1,"numericCode"
:955},{"code":"XBB","fractionDigits":-1,"numericCode":956},{"code":"XBC","fractionDigits":-1,"numericCode":957},{"code":"XBD","fractionDigits":-1,"numericCode":958},{"code":"XTS","fractionDigits":-1,"numericCode":963},{"code":"XXX","fractionDigits":-1,"numericCode":999},{"code":"XAU","fractionDigits":-1,"numericCode":959},{"code":"XPD","fractionDigits":-1,"numericCode":964},{"code":"XPT","fractionDigits":-1,"numericCode":962},{"code":"XAG","fractionDigits":-1,"numericCode":961}];}
function AYv(){return {"":{"value":"CYP"},"PR":{"value":"USD"},"PT":{"value":"EUR"},"PW":{"value":"USD"},"PY":{"value":"PYG"},"QA":{"value":"QAR"},"AC":{"value":"SHP"},"AD":{"value":"EUR"},"AE":{"value":"AED"},"AF":{"value":"AFN"},"AG":{"value":"XCD"},"AI":{"value":"XCD"},"AL":{"value":"ALL"},"AM":{"value":"AMD"},"AN":{"value":"ANG"},"AO":{"value":"AOA"},"242":{"value":"Brazzaville"},"AQ":{"value":""},"AR":{"value":"ARS"},"243":{"value":"Kinshasa"},"AS":{"value":"USD"},"AT":{"value":"EUR"},"RE":{"value":"EUR"}
,"AU":{"value":""},"AW":{"value":"AWG"},"AX":{"value":"EUR"},"AZ":{"value":"AMD"},"RO":{"value":"RON"},"BA":{"value":"BAM"},"BB":{"value":"BBD"},"RS":{"value":"RSD"},"BD":{"value":"BDT"},"BE":{"value":"EUR"},"RU":{"value":"RUB"},"BF":{"value":"XOF"},"BG":{"value":"BGN"},"RW":{"value":"RWF"},"27":{"value":""},"BH":{"value":"BHD"},"BI":{"value":"BIF"},"BJ":{"value":"XOF"},"BM":{"value":"BMD"},"BN":{"value":"BND"},"BO":{"value":"BOB"},"SA":{"value":"SAR"},"SB":{"value":"SBD"},"BR":{"value":"BRL"},"SC":{"value"
:"SCR"},"SD":{"value":"SDD"},"BT":{"value":"BTN"},"SE":{"value":"SEK"},"SG":{"value":"SGD"},"BV":{"value":""},"BW":{"value":"BWP"},"SH":{"value":"SHP"},"SI":{"value":"EUR"},"BY":{"value":"BYR"},"SJ":{"value":"NOK"},"BZ":{"value":"BZD"},"SK":{"value":"SKK"},"SL":{"value":"SLL"},"SM":{"value":"EUR"},"SN":{"value":"XOF"},"SO":{"value":""},"CA":{"value":"CAD"},"SR":{"value":"SRD"},"CC":{"value":"AUD"},"ST":{"value":"STD"},"CF":{"value":"XAF"},"SV":{"value":"USD"},"CH":{"value":"CHF"},"CI":{"value":"XOF"},"SY":{"value"
:"SYP"},"SZ":{"value":"SZL"},"CK":{"value":"NZD"},"CL":{"value":"CLP"},"CM":{"value":"XAF"},"CO":{"value":"COP"},"TA":{"value":"SHP"},"CR":{"value":"CRC"},"TC":{"value":"USD"},"TD":{"value":"XAF"},"CU":{"value":"CUP"},"TF":{"value":""},"CV":{"value":"CVE"},"TG":{"value":"XOF"},"TH":{"value":"THB"},"CX":{"value":"AUD"},"CY":{"value":"TRY"},"TJ":{"value":"TJS"},"CZ":{"value":"CZK"},"TK":{"value":"NZD"},"TL":{"value":"USD"},"TM":{"value":"TMM"},"TN":{"value":"TND"},"TO":{"value":"TOP"},"TR":{"value":"TRY"},"TT":
{"value":"TTD"},"DE":{"value":"EUR"},"TV":{"value":"AUD"},"DJ":{"value":"DJF"},"TZ":{"value":"TZS"},"DK":{"value":"DKK"},"DM":{"value":"XCD"},"DO":{"value":"DOP"},"UA":{"value":"UAH"},"UG":{"value":"UGX"},"DZ":{"value":"DZD"},"UM":{"value":""},"EC":{"value":"USD"},"US":{"value":"USD"},"EE":{"value":"EEK"},"EG":{"value":"EGP"},"UY":{"value":"UYU"},"UZ":{"value":"UZS"},"VA":{"value":"EUR"},"ER":{"value":"ERN"},"VC":{"value":"XCD"},"ES":{"value":"EUR"},"ET":{"value":"ETB"},"VE":{"value":"VEB"},"VG":{"value":"USD"}
,"VI":{"value":"USD"},"VN":{"value":"VND"},"VU":{"value":"VUV"},"FI":{"value":"EUR"},"FJ":{"value":"FJD"},"FK":{"value":"FKP"},"FM":{"value":"USD"},"FO":{"value":"DKK"},"FR":{"value":"EUR"},"WF":{"value":"XPF"},"850":{"value":"Pyongyang"},"GA":{"value":"XAF"},"GB":{"value":"GBP"},"WS":{"value":"WST"},"GD":{"value":"XCD"},"GE":{"value":"RUB and GEL"},"GF":{"value":"EUR"},"GG":{"value":"GGP"},"GH":{"value":"GHC"},"GI":{"value":"GIP"},"GL":{"value":"DKK"},"GN":{"value":"GNF"},"GP":{"value":"EUR"},"GQ":{"value"
:"XAF"},"GR":{"value":"EUR"},"GS":{"value":""},"GT":{"value":"GTQ"},"GU":{"value":"USD"},"GW":{"value":"XOF"},"GY":{"value":"GYD"},"-241":{"value":"Nassau"},"82":{"value":"Seoul"},"86":{"value":"Beijing"},"HK":{"value":"HKD"},"HM":{"value":""},"HN":{"value":"HNL"},"HR":{"value":"HRK"},"HT":{"value":"HTG"},"YE":{"value":"YER"},"HU":{"value":"HUF"},"ID":{"value":"IDR"},"YT":{"value":"EUR"},"IE":{"value":"EUR"},"IL":{"value":"ILS"},"IM":{"value":"IMP"},"IN":{"value":"INR"},"IO":{"value":""},"IQ":{"value":"IQD"}
,"IR":{"value":"IRR"},"IS":{"value":"ISK"},"IT":{"value":"EUR"},"ZM":{"value":"ZMK"},"886":{"value":"Taipei"},"JE":{"value":"JEP"},"ZW":{"value":"ZWD"},"JM":{"value":"JMD"},"JO":{"value":"JOD"},"JP":{"value":"JPY"},"KE":{"value":"KES"},"KG":{"value":"KGS"},"KH":{"value":"KHR"},"KI":{"value":"AUD"},"KM":{"value":"KMF"},"KN":{"value":"XCD"},"KW":{"value":"KWD"},"KY":{"value":"KYD"},"KZ":{"value":"KZT"},"LA":{"value":"LAK"},"LB":{"value":"LBP"},"LC":{"value":"XCD"},"LI":{"value":"CHF"},"LK":{"value":"LKR"},"LR":
{"value":"LRD"},"LS":{"value":"LSL"},"LT":{"value":"LTL"},"LU":{"value":"EUR"},"LV":{"value":"LVL"},"LY":{"value":"LYD"},"MA":{"value":"MAD"},"MC":{"value":"EUR"},"MD":{"value":""},"ME":{"value":"EUR"},"MG":{"value":"MGA"},"MH":{"value":"USD"},"MK":{"value":"MKD"},"ML":{"value":"XOF"},"MM":{"value":"MMK"},"MN":{"value":"MNT"},"MO":{"value":"MOP"},"MP":{"value":"USD"},"MQ":{"value":"EUR"},"MR":{"value":"MRO"},"MS":{"value":"XCD"},"MT":{"value":"MTL"},"MU":{"value":"MUR"},"MV":{"value":"MVR"},"MW":{"value":"MWK"}
,"MX":{"value":"MXN"},"MY":{"value":"MYR"},"MZ":{"value":"MZM"},"NA":{"value":"NAD"},"NC":{"value":"XPF"},"NE":{"value":"XOF"},"NF":{"value":"AUD"},"NG":{"value":"NGN"},"NI":{"value":"NIO"},"NL":{"value":"EUR"},"NO":{"value":"NOK"},"NP":{"value":"NPR"},"NR":{"value":"AUD"},"NU":{"value":"NZD"},"NZ":{"value":"NZD"},"OM":{"value":"OMR"},"220":{"value":"Banjul"},"PA":{"value":"PAB"},"PE":{"value":"PEN"},"PF":{"value":""},"PG":{"value":"PGK"},"PH":{"value":"PHP"},"PK":{"value":"PKR"},"PL":{"value":"PLN"},"PM":{"value"
:"EUR"},"PN":{"value":"NZD"}};}
function VJ(){var a=this;B.call(a);a.rs=null;a.KA=null;}
function AWa(a){return a.rs.fA<=0?0:1;}
function A2C(a){var b,c,d,e,f;b=a.rs;if(b.Da!=b.s$.jK){b=new F0;W(b);L(b);}c=b.fA;if(!c){b=new Go;W(b);L(b);}a:{d=b.mZ.data;e=c-1|0;b.fA=e;f=d[e];b.u3=f;f=Nr(f,b.n_);if(f!==null)while(true){if(f===null)break a;d=b.mZ.data;c=b.fA;b.fA=c+1|0;d[c]=f;f=Kq(f,b.n_);}}ACS(b);return b.u3.eB;}
var AQn=G(0);
function Vx(){var a=this;B.call(a);a.vm=null;a.vl=null;}
function ARv(a,b){var c;c=a.vm;return a.vl.bn(c.u5.G(b));}
function X7(){var a=this;B.call(a);a.BH=null;a.BI=null;}
function AUn(a,b){var c,d;c=a.BH;d=a.BI;b=b;c=c.AG;if(d.J>0)Et(d,c);Et(d,b);return 1;}
var AJm=G(0);
function Ui(){var a=this;B.call(a);a.iE=0;a.gz=0;a.gO=0;a.i7=0;a.f6=0;a.jM=0;a.il=0;a.ij=0;a.m5=0;a.ty=null;a.HH=null;a.KO=null;a.j6=null;a.GI=0;a.F3=null;a.hU=0;}
function AF6(a,b,c,d){var e,f,g,h;a:{a.hU=a.hU+1|0;if(Do(c,HM)){e=c;if(Do(d,HM)){f=d;c=a.j6;d=new AHg;d.v8=a;d.v7=b;Dg(c,d,C(702),BA(B,[e,f]));break a;}}if(Do(c,Ju)){g=c;if(Do(d,Ju)){h=d;if(!a.GI){c=a.j6;d=new AIf;d.yR=a;d.yQ=b;e=new ACQ;e.D8=d;Dg(c,e,C(703),BA(B,[g,h]));}else{c=a.j6;e=new AIe;e.BD=a;e.BE=b;d=new ACM;d.AI=e;Dg(c,d,C(704),BA(B,[g,h]));}break a;}}b=new Bq;W(b);L(b);}}
function AJz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.data;a.iE=a.iE+1|0;a.i7=a.i7+1|0;a.jM=a.jM+1|0;e=KP(d[0]);if(ABf(a,e)){AIv(a,d[1]);return;}d=e.data;f=d[0];g=d[1];h=d[2];i=3+f|0;j=(AOl(e,3,i)).data;k=AOl(e,i,3+(2*f|0)|0);g=1+g|0;l=AL4(c,1,g,H($rt_arraycls(Fx)));m=AL4(c,g,g+h|0,H($rt_arraycls(Fx)));n=j.length;b.c8=K(FO,n);b.f8=0;o=0;p=0;i=0;q=0;r=0;while(i<n){s=k.data[i];if(j[i]==1){d=l.data;q=1;b.c8.data[i]=MK(b);(b.c4(i)).hY=i;NT(b.c4(i),s);It(b.c4(i),1);MJ(b.c4(i),1);RO(a,b.c4(i),d[o]);i=i+1|0;o
=o+1|0;}else if(j[i]!=2){e=m.data;d=l.data;b.c8.data[i]=MK(b);(b.c4(i)).hY=i;NT(b.c4(i),s);AF6(a,b.c4(i),d[o],e[p]);i=i+1|0;o=o+1|0;p=p+1|0;}else{c=m.data;q=1;b.c8.data[i]=MK(b);(b.c4(i)).hY=i;NT(b.c4(i),s);It(b.c4(i),2);MJ(b.c4(i),2);RO(a,b.c4(i),c[p]);i=i+1|0;p=p+1|0;}}if(!n)P1(b);if(q){PX(b,3);r=Db(b)?0:1;}N2(a,r);}
function RR(a,b,c,d){if(d!==null)T(B0(),d);a.gO=a.gO+1|0;a.f6=a.f6+1|0;a.gz=a.gz+1|0;if(!c){a.m5=a.m5+1|0;PX(b,3);}N2(a,P1(b));}
function RO(a,b,c){var d,e;if(Do(c,HM)){d=c;a.hU=a.hU+1|0;c=a.j6;e=new AGa;e.EL=a;e.EK=b;Dg(c,e,C(705),BA(B,[d,Cf([Db(b),AOp(b),0])]));}else{if(Db(b)==2){a.il=a.il+1|0;a.f6=a.f6+1|0;}else if(Db(b)==1){a.ij=a.ij+1|0;a.gO=a.gO+1|0;}a.gz=a.gz+1|0;P1(b);}}
function N2(a,b){var c,d,e;c=a.hU-1|0;a.hU=c;if(c<0){d=new CP;Bd(d,C(706));L(d);}if(!c){d=a.ty;e=Cf([a.iE,a.gz,a.gO,a.i7,a.f6,a.jM,a.il,a.ij,a.m5]);WJ(d.Fl.ss,e);}else if(b)WJ(a.F3.C1.ss,Cf([0,0]));}
function AIv(a,b){T(a.HH.uA,b);}
function ABf(a,b){b=b.data;return b.length==1&&b[0]==(-1)?1:0;}
function XJ(){B.call(this);this.C1=null;}
function XL(){B.call(this);this.Fl=null;}
function AIm(){var a=this;B.call(a);a.Em=null;a.Eo=0;a.En=0;a.Eq=0;a.Ep=0;}
function ZP(){var a=this;B.call(a);a.Cp=null;a.rR=null;a.qw=null;a.pK=null;a.mp=0;a.qf=0;a.tR=0;a.sc=0;a.rD=0;a.py=0;a.mq=0;a.bl=null;a.n=0;a.oa=0;}
function Kd(a,b,c){var d,e,f,g,h,i;d=BQ();e=J();a:{b:{c:while(true){if(a.n>=N(a.bl))break a;d:{f=Be(a.bl,a.n);switch(f){case 35:case 48:if(!b)break a;d=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(707)),b),C(692)),g);Bd(d,I(h));L(d);case 37:if(e.J>0){Bp(d,JM(I(e)));e.J=0;}Bp(d,new M8);a.n=a.n+1|0;a.oa=100;break d;case 39:f=a.n+1|0;a.n=f;i=O4(a.bl,39,f);if(i<0){d=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(708)),b),C(709)),g);Bd(d,I(h));L(d);}f=a.n;if(i==f)Bj(e,39);else By(e,Cv(a.bl,f,i));a.n=i+1|0;break d;case 45:if(e.J
>0){Bp(d,JM(I(e)));e.J=0;}Bp(d,new KI);a.n=a.n+1|0;break d;case 46:case 69:break c;case 59:break b;case 164:if(e.J>0){Bp(d,JM(I(e)));e.J=0;}Bp(d,new LU);a.n=a.n+1|0;break d;case 8240:if(e.J>0){Bp(d,JM(I(e)));e.J=0;}Bp(d,new O2);a.n=a.n+1|0;a.oa=1000;break d;default:}Bj(e,f);a.n=a.n+1|0;}}d=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(707)),b),C(692)),g);Bd(d,I(h));L(d);}if(c){d=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(707)),b),C(692)),g);Bd(d,I(h));L(d);}}if(e.J>0)Bp(d,JM(I(e)));return E5(d,K(Dw,d.l));}
function AHE(a,b){var c,d,e,f,g,h;ALP(a,b);if(a.n<N(a.bl)&&Be(a.bl,a.n)==46){a.n=a.n+1|0;c=0;d=0;e=0;a:{b:while(true){if(a.n>=N(a.bl))break a;c:{switch(Be(a.bl,a.n)){case 35:break;case 44:f=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(710)),b),C(692)),g);Bd(f,I(h));L(f);case 46:f=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(711)),b),C(692)),g);Bd(f,I(h));L(f);case 48:if(c)break b;d=d+1|0;e=e+1|0;break c;default:break a;}d=d+1|0;c=1;}a.n=a.n+1|0;}f=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(712)),b),C(692)),g);Bd(f,I(h));L(f);}if
(b){a.rD=d;a.sc=e;a.mq=d?0:1;}}if(a.n<N(a.bl)&&Be(a.bl,a.n)==69){a.n=a.n+1|0;c=0;d:{e:while(true){if(a.n>=N(a.bl))break d;switch(Be(a.bl,a.n)){case 35:case 44:case 46:case 69:break e;case 48:break;default:break d;}c=c+1|0;a.n=a.n+1|0;}f=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(713)),b),C(692)),g);Bd(f,I(h));L(f);}if(!c){f=new Bq;b=a.n;g=a.bl;h=J();F(F(P(F(h,C(714)),b),C(692)),g);Bd(f,I(h));L(f);}if(b)a.py=c;}}
function ALP(a,b){var c,d,e,f,g,h,i,j,k;c=a.n;d=1;e=0;f=0;g=c;a:{b:while(true){if(a.n>=N(a.bl))break a;c:{d:{switch(Be(a.bl,a.n)){case 35:if(!d){h=new Bq;b=a.n;i=a.bl;j=J();F(F(P(F(j,C(715)),b),C(692)),i);Bd(h,I(j));L(h);}e=e+1|0;break c;case 44:break d;case 48:break;default:break a;}d=0;e=e+1|0;f=f+1|0;break c;}k=a.n;if(g==k)break b;if(b)a.mp=k-g|0;g=k+1|0;}a.n=a.n+1|0;}h=new Bq;i=a.bl;j=J();F(F(P(F(j,C(716)),k),C(692)),i);Bd(h,I(j));L(h);}if(!e){h=new Bq;b=a.n;i=a.bl;j=J();F(F(P(F(j,C(717)),b),C(692)),i);Bd(h,
I(j));L(h);}d=a.n;if(g==d){h=new Bq;i=a.bl;j=J();F(F(P(F(j,C(718)),d),C(692)),i);Bd(h,I(j));L(h);}if(b&&g>c)a.mp=d-g|0;if(b){a.tR=e;a.qf=f;}}
function AEt(){var a=this;B.call(a);a.nK=null;a.oq=null;a.de=null;}
function A54(a,b){var c,d;c=new IE;d=a.de;MA(c,b,d.fT+1|0,d.jd);Bp(a.nK,c);}
function AXC(a,b){var c,d;c=FF(b);d=new La;Kx(d,c,a.de.fT+1|0);d.gE=b;a.de.jd.uR(d,c);d.m6=APP(a.de.jd,d);Bp(a.oq,d);}
function A6j(a){var b,c,d,e,f,g,h;if(!(F6(a.nK)&&F6(a.oq))){a.de.gq=E5(a.nK,BbB);a.de.g2=E5(a.oq,BbC);LE(a.de.gq,A_$);LE(a.de.g2,A_$);b=a.de;c=b.gq;d=c.data;e=b.g2;f=e.data;g=d.length;h=f.length;d=K(Dr,g+h|0);BE(c,0,d,0,g);BE(e,0,d,g,h);a.de.cQ=d;}Ih(a.de);b=a.de;b.jd.B2(b);}
function A2$(a,b){var c,d;c=DT(a.de.gW);d=J();F(F(F(F(d,C(719)),c),C(346)),b);c=I(d);T(B0(),c);}
function AED(){B.call(this);this.GE=null;}
function A2z(a){DK(a.GE);}
function VI(){B.call(this);this.uA=null;}
function VU(){B.call(this);this.v9=null;}
function A01(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.v9;d=Dp(b,0);e=Dp(b,1);b=AOS(d);f=c.Em;g=c.Eo;h=c.En;i=c.Eq;j=c.Ep;if(AII(e,L4(f))){c=f.br;BE(b.dr,0,c.dr,g,h-g|0);BE(b.ds,0,c.ds,i,j-i|0);k=BQ();l=0;while(true){d=c.H.data;if(l>=d.length)break;if(d[l].W==g&&d[l].V==i)break;Bp(k,d[l]);l=l+1|0;}d=b.H.data;m=d.length;n=0;while(n<m){b=d[n];b.W=b.W+g|0;b.V=b.V+i|0;Bp(k,b);n=n+1|0;}a:{while(true){d=c.H.data;if(l>=d.length)break;if(D8(d[l])>h)break a;if(Ea(c.H.data[l])>j)break a;l=l+1|0;}}while(true){d=c.H.data;if
(l>=d.length)break;h=l+1|0;o=d[l];b=B1(k,APd(k)-1|0);p=b.ca;g=o.ca;if(!p){if(g)Bp(k,o);else{b.bB=b.bB+o.bB|0;b.bA=b.bA+o.bA|0;}}else if(!g)Bp(k,o);else{b.bB=b.bB+o.bB|0;b.bA=b.bA+o.bA|0;b.ca=3;}l=h;}b=new AGF;Pu(b);c.H=E5(k,AIH(b,0));Mt(f,f.br,e);}}
var Xd=G(0);
var BaT=null;function APH(b,c){var d,e,f,g,h,i,j,k,l;a:{b=b.data;d=0;e=b.length;if(!c)while(d<e){if(b[d]>(-65))break a;d=d+1|0;}else if(e>=3&&b[0]==(-17)&&b[1]==(-69)&&b[2]==(-65))d=3;}f=e-1|0;g=e-2|0;b:{c:{while(d<e){h=b[d];if(h<0){if(d>=f)return 0;d=d+1|0;i=b[d];if(i>(-65))return 0;if((-64)<=h&&h<(-32)){j=((h&31)<<6)+(i&63)|0;if(j&&j<128)return 0;}else{if(d>=g)return 0;d=d+1|0;k=b[d];if(k>(-65))return 0;if((-32)<=h&&h<(-16)){j=(((h&15)<<12)+((i&63)<<6)|0)+(k&63)|0;if(j&&j<2048)return 0;}else{if((-16)>h)break b;if
(h>(-12))break b;d=d+1|0;l=b[d];if(l>(-65))return 0;j=((((h&7)<<18)+((i&63)<<12)|0)+((k&63)<<6)|0)+(l&63)|0;if(j){if(j<65536)break c;if(j>1114111)break c;}}}}d=d+1|0;}return 1;}return 0;}return 0;}
function AMB(){BaT=null;}
var AK6=G(0);
var AJn=G();
function WX(){var a=this;B.call(a);a.Cd=null;a.DF=0;}
var AN3=G();
function AAY(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.Cd.data;f=b.DF;b.DF=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+U(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Tf(){var a=this;CX.call(a);a.I3=0;a.fH=null;a.om=null;a.qR=0;a.sW=0;a.oh=null;a.oJ=0;a.pT=0;a.EG=0;}
var KI=G();
function AVr(a,b){return b instanceof KI;}
function RQ(){var a=this;B.call(a);a.sV=null;a.sU=null;}
function ASp(a,b,c){var d,e,f;d=a.sU;e=a.sV;f=new ACK;f.vh=b;AQf(d,e,f,c);}
function A4e(a,b,c,d){var e,f,g,h;e=a.sU;f=a.sV;g=new R3;g.CF=d;g.CD=b;h=new R1;h.EB=d;h.EA=b;Ot(e,f,b,c,g,h);}
var O2=G();
function AZC(a,b){return b instanceof O2;}
var LU=G();
function ARU(a,b){return b instanceof LU;}
var M8=G();
function ASE(a,b){return b instanceof M8;}
function TZ(){var a=this;B.call(a);a.yr=null;a.ys=null;}
function A6I(a){a.yr.Ek(a.ys);}
function ACK(){B.call(this);this.vh=null;}
function A1M(a,b){U3(a.vh,b.rL);}
function R3(){var a=this;B.call(a);a.CF=null;a.CD=0.0;}
function AVP(a,b){AE3(a.CF,a.CD,b);}
function R1(){var a=this;B.call(a);a.EB=null;a.EA=0.0;}
function A3b(a,b){AF$(a.EB,a.EA,b);}
function AMF(){var a=this;B.call(a);a.Da=0;a.s$=null;a.mZ=null;a.u3=null;a.y5=null;a.F6=0;a.yZ=0;a.fA=0;a.n_=0;}
function A1W(a,b,c,d,e,f){var g=new AMF();AZh(g,a,b,c,d,e,f);return g;}
function AZh(a,b,c,d,e,f,g){var h,i;a.s$=b;a.Da=b.jK;b=b.fo;h=b!==null?b.fX:0;i=c.data;a.mZ=B_(c,h);a.fA=i.length;a.y5=d;a.F6=e;a.yZ=f;a.n_=g;ACS(a);}
function ACS(a){var b,c;if(a.F6){b=a.fA;if(b){c=Gq(a.s$.ie,a.mZ.data[b-1|0].eB,a.y5);if(a.n_)c= -c|0;if(!a.yZ){if(c>=0)a.fA=0;}else if(c>0)a.fA=0;return;}}}
var AOc=G();
function AJ3(b,c){var d,e,f,g,h,i,j,k,l,m,n;b=b.data;c=c.data;d=K(Fw,1);e=b.length;f=K(Dx,e);g=f.data;h=c.length;i=K(Dx,h);j=0;while(j<e){g[j]=HT(b[j].eX);j=j+1|0;}g=i.data;j=0;while(j<h){g[j]=HT(c[j].eX);j=j+1|0;}h=0;j=0;while(j<e){k=j;while(k<e&&b[j].eX==b[k].eX){k=k+1|0;}l=b[j].eX;m=new Fw;n=k-j|0;APG(m,j,n,j,n,l);l=h+1|0;d=W3(m,d,h);j=k;h=l;}return A4D(f,i,B_(d,h));}
function AHg(){var a=this;B.call(a);a.v8=null;a.v7=null;}
function AWF(a,b){AJz(a.v8,a.v7,b);}
var AH9=G(0);
function AIf(){var a=this;B.call(a);a.yR=null;a.yQ=null;}
var AO9=G(0);
var Ux=G(0);
function AIe(){var a=this;B.call(a);a.BD=null;a.BE=null;}
function AAL(a,b,c,d,e){var f,g,h;a:{b:{f=a.BD;g=a.BE;if(b===c){if(d<0.0)break b;if(d===1.073741824E9)break b;}h=0;break a;}h=1;}RR(f,g,h,e);}
function AIC(){B.call(this);this.xh=null;}
function A2x(a){var b;b=a.xh;IZ(b);b.jd.y6(b);b.gq=BbB;b.g2=BbC;}
function ACQ(){B.call(this);this.D8=null;}
function AQ6(a,b){var c,d,e,f;c=a.D8;d=(Dp(b,0)).data;b=Jh(b,1);e=d[0];f=d[1];RR(c.yR,c.yQ,e!==f?0:1,b);}
function ACM(){B.call(this);this.AI=null;}
function AZQ(a,b){var c,d,e;c=b.data;d=a.AI;if(c[0] instanceof BH)AAL(d,0.0,0.0,0.0,Jh(b,0));else{e=Dp(b,0);AAL(d,SS(e,0),SS(e,2),SS(e,4),null);}}
function TB(){var a=this;B.call(a);a.CA=null;a.CB=null;}
function A0D(a){AK8(a.CA,1,a.CB);}
function TA(){var a=this;B.call(a);a.Df=null;a.Dg=null;}
function A5V(a){AK8(a.Df,0,a.Dg);}
var AGF=G();
function AIH(a,b){return K(Fw,b);}
function Ss(){var a=this;B.call(a);a.zi=null;a.zj=null;}
function A47(a,b,c){var d,e,f,g,h;d=a.zi;e=a.zj;Md(d.gp,e);f=X();g=J();F(F(F(F(g,C(720)),e),C(721)),c);T(f,I(g));b=AA1(b);h=ASL(b.jY,AFX(e));h.xa=c;DL(d.j7,e,h);if(BN(d.Bx,e))S0(d,h);}
function St(){var a=this;B.call(a);a.ww=null;a.wv=null;}
function A6$(a,b){var c,d,e;c=a.ww;d=a.wv;Md(c.gp,d);c=B0();e=J();F(F(F(F(e,C(722)),d),C(346)),b);T(c,I(e));}
function AGa(){var a=this;B.call(a);a.EL=null;a.EK=null;}
function ASe(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.EL;d=a.EK;e=Dp(b,0);if(ABf(c,e))AIv(c,Jh(b,1));f=(Dp(b,1)).data;g=K(BH,f[0]);h=K(Fx,f[1]);i=f[2];j=f[3];c.iE=c.iE+i|0;c.gz=c.gz+j|0;if(Db(d)==2){c.il=c.il+j|0;c.f6=c.f6+j|0;c.jM=c.jM+i|0;}else if(Db(d)==1){c.ij=c.ij+j|0;c.gO=c.gO+j|0;c.i7=c.i7+i|0;}k=g.data;j=0;while(j<f[0]){k[j]=b.data[j+2|0];j=j+1|0;}l=h.data;j=0;while(j<f[1]){l[j]=b.data[(f[0]+j|0)+2|0];j=j+1|0;}AOf(d,ANo(JA(e),g,h,null));N2(c,0);}
function M$(){FO.call(this);this.Gf=null;}
function Ln(){M$.call(this);this.CM=null;}
function ANo(b,c,d,e){var f,g,h,i,j,k,l;f=c.data;g=new Ln;h=null;ADN(g,e);g.Gf=h;g.CM=BA(Fx,[null,null]);g.cV=Ba(b);g.f8=Ba(b);g.hY=Ba(b);g.Gf=f[Ba(b)];i=0;while(i<2){j=Ba(b);if(j!=(-1))g.CM.data[i]=d.data[j];i=i+1|0;}k=Ba(b);if(k!=(-1)){f=K(Ln,k);l=f.data;i=0;while(i<k){l[i]=ANo(b,c,d,g);i=i+1|0;}g.c8=f;}return g;}
function ARl(a,b){return a.c8.data[b];}
$rt_packages([-1,"java",0,"util",1,"stream",0,"math",0,"text",0,"lang",-1,"org",6,"sudu",7,"experiments",8,"editor",9,"ui",10,"window",10,"colors",9,"menu",9,"worker",14,"diff",8,"parser",16,"common",17,"tree",17,"graph",19,"node",20,"ref",20,"decl",8,"ui",23,"window",23,"fs",8,"fonts",8,"js",8,"diff",8,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["h7",A9s(A0E),"U",A9t(AKG),"I",A9s(AJo)],Uj,0,B,[],0,3,0,0,0,ZX,0,B,[],3,3,0,0,0,ZE,0,B,[],3,3,0,0,0,AG1,0,B,[ZX,ZE],0,3,0,0,["I",A9s(AUg)],AND,0,B,[],4,0,0,0,0,ANm,0,B,[],4,3,0,0,0,G9,0,B,[],0,3,0,0,0,FX,0,G9,[],0,3,0,0,0,Bt,0,FX,[],0,3,0,0,0,ADz,0,Bt,[],0,3,0,0,0,CO,0,B,[],3,3,0,0,0,CB,0,B,[],3,3,0,0,0,KQ,0,B,[],3,3,0,0,0,BH,"String",5,B,[CO,CB,KQ],0,3,[0,0,0],Ew,["FF",A9t(Be),"dy",A9s(N),"I",A9s(ARM),"U",A9t(Bf),"h7",A9s(Kt),"jL",A9t(ASZ)],FQ,0,G9,[],0,3,0,0,0,ID,0,FQ,[],0,
3,0,0,0,AN6,0,ID,[],0,3,0,0,0,C$,0,B,[CO],1,3,0,0,0,E6,0,C$,[CB],0,3,0,0,["AC",A9s(AZI),"I",A9s(AXR),"h7",A9s(AMM),"U",A9t(A6X),"jL",A9t(A2R)],LO,0,B,[CO,KQ],0,0,0,0,["th",A9t(AAQ),"I",A9s(I)],Ou,0,B,[],3,3,0,0,0,Km,0,LO,[Ou],0,3,0,0,["FF",A9t(A5Z),"dy",A9s(ANf),"I",A9s(GS),"th",A9t(AT4)],Fh,0,ID,[],0,3,0,0,0,APa,0,Fh,[],0,3,0,0,0,AN0,0,Fh,[],0,3,0,0,0,AEX,0,B,[],3,3,0,0,0,De,0,B,[],3,3,0,0,0,ABb,0,B,[],3,0,0,0,0,KD,0,B,[AEX,De,ABb],1,3,0,0,["bx",A9s(Em)],ADt,0,KD,[],0,3,0,0,0,AM0,0,B,[],0,3,0,0,0,APK,0,B,[],
4,3,0,0,0,BV,0,B,[],3,3,0,0,0,B8,0,B,[BV],3,3,0,0,0,AE$,0,B,[B8],0,3,0,0,["bh",A9t(A68)],ALa,0,B,[],0,3,0,0,0,Yo,0,B,[BV],3,3,0,0,0,AKW,0,B,[Yo],1,3,0,0,["Uu",A9t(AY$),"Pf",A9u(A1o)],AI2,0,B,[],3,3,0,0,0,APy,0,B,[],3,3,0,0,0,ALI,0,B,[],3,3,0,0,0,MW,"FontConfigJs",26,B,[],0,3,[0,0,0],0,0,AJu,0,B,[BV],1,3,0,0,0,AE_,0,B,[B8],0,3,0,0,["bh",A9t(AQs)],AE9,0,B,[B8],0,3,0,0,["bh",A9t(A5_)],Mu,0,B,[],4,3,0,0,0,ALH,0,B,[],4,3,0,0,0,ANR,0,B,[],0,3,0,0,0,AQo,0,B,[],4,3,0,0,0]);
$rt_metadata([SU,0,B,[B8],0,3,0,0,["bh",A9t(A6u)],ALU,0,B,[BV],1,3,0,0,0,ANa,0,B,[],0,3,0,0,0,AGu,0,B,[BV],3,3,0,0,0,AOo,0,B,[AGu],1,3,0,0,["SW",A9t(A11),"a0q",A9s(AUz)],AKh,0,B,[BV],1,3,0,0,0,Gk,0,B,[],3,3,0,0,0,Vh,0,B,[Gk],0,3,0,0,0,BU,0,Bt,[],0,3,0,0,0,AOU,0,B,[],4,3,0,0,0,EW,0,Bt,[],0,3,0,0,0,JF,0,Bt,[],0,3,0,0,0,FW,0,B,[CB],0,3,0,0,0,Zz,0,B,[BV],3,3,0,0,0,AEb,0,B,[Zz],3,3,0,0,0,Fa,0,B,[BV],3,3,0,0,0,AM3,0,B,[BV,AEb,Fa],1,3,0,0,["Rt",A9s(A3K),"Sa",A9t(A5D),"a1i",A9t(A5o),"V4",A9t(A0B),"Zy",A9t(AQG),"Us",
A9s(ASk),"a0m",A9u(A5z),"Su",A9v(ATS),"S9",A9s(AZR),"Tv",A9s(A4k),"YL",A9t(A57),"WV",A9s(AUW),"a1M",A9t(ATC),"P4",A9s(AVf),"XB",A9s(AYK),"a1A",A9s(AUc),"MF",A9t(ARj),"SA",A9s(A6Z),"Y4",A9u(A2i),"WH",A9u(AUO),"a0c",A9u(AX6),"ZU",A9s(AY5),"a0J",A9s(ATq),"Tj",A9t(ASs),"Yr",A9t(AS6),"VZ",A9u(A2u),"PG",A9s(AUl),"SV",A9t(AZU),"UE",A9s(AS5),"TC",A9s(AWb),"VI",A9t(AQy),"P3",A9t(AXv),"a1s",A9t(AZ_),"O9",A9s(A52),"Wt",A9u(A0h),"Z8",A9t(A4w),"Pv",A9s(AWz),"U5",A9u(AVD),"Nq",A9u(AVn),"Xj",A9s(AXp),"Tk",A9t(AYj),"OG",A9v(A3S),
"NX",A9s(ASo),"OL",A9u(A0r),"WP",A9s(AZo),"RT",A9s(A6U),"YI",A9s(AVB),"LY",A9s(AZl),"Ro",A9u(AVE),"UF",A9t(A0K),"Yn",A9t(ATa),"NM",A9s(A46)],AGy,0,B,[],3,3,0,0,0,Vf,0,B,[AGy],0,3,0,0,0,ABF,0,B,[],0,3,0,0,0,YH,0,B,[B8],0,3,0,0,["bh",A9t(ARB)],YG,0,B,[B8],0,3,0,0,["bh",A9t(AQX)],AOb,0,B,[],4,3,0,0,0,ABv,0,B,[Fa],3,3,0,0,0,T6,0,B,[Fa],3,3,0,0,0,ACR,0,B,[Fa],3,3,0,0,0,VC,0,B,[Fa],3,3,0,0,0,AHX,0,B,[Fa],3,3,0,0,0,AFT,0,B,[Fa,ABv,T6,ACR,VC,AHX],3,3,0,0,0,ANy,0,B,[BV,AFT],1,3,0,0,["Zh",A9u(A35),"a0O",A9u(A2P),"N2",
A9v(ATs),"Wy",A9t(ARw),"QR",A9v(A03)],Nf,0,B,[],3,3,0,A7$,0,Bq,0,Bt,[],0,3,0,0,0,AID,0,Bt,[],0,3,0,0,0,KV,0,BU,[],0,3,0,0,0,AIE,0,B,[B8],0,3,0,0,["bh",A9t(A0P)],AA2,0,B,[],3,3,0,0,0,AEh,0,B,[AA2],0,3,0,0,0,Bx,0,B,[],3,3,0,0,0,AOw,0,B,[Bx],0,3,0,0,0,Q,0,B,[],3,3,0,0,0,AOx,0,B,[Q],0,3,0,0,0,ACn,0,B,[],3,3,0,0,0,OP,0,B,[ACn],1,3,0,0,0,UH,0,OP,[],0,3,0,0,0,AC6,0,B,[BV],3,3,0,0,0,WN,0,B,[AC6],0,3,0,0,["P7",A9t(A3x)],WO,0,B,[Q],0,3,0,0,0,ACe,0,B,[BV],3,3,0,0,0,WK,0,B,[ACe],0,3,0,0,["G9",A9u(AV8)],AL5,0,B,[BV],1,3,
0,0,0]);
$rt_metadata([Cs,0,B,[BV],3,3,0,0,0,WM,0,B,[Cs],0,3,0,0,["cl",A9t(A4s)],AJA,0,B,[],0,3,0,0,0,O5,0,B,[],1,3,0,0,0,W6,0,O5,[],0,3,0,0,0,XU,0,B,[],3,3,0,0,["eT",A9t(AYX)],HK,0,B,[XU],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],EH,0,B,[HK],1,3,0,0,["eT",A9t(AYX),"st",A9t(A2A),"dv",A9s(F6),"tU",A9t(A5c)],OH,0,B,[HK],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Nu,0,B,[OH],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],EF,0,EH,[Nu],1,3,0,0,["eT",A9t(AYX),"st",A9t(A2A),"hZ",A9t(AWo),"bu",A9s(B4),"yy",A9u(AVQ),"q4",A9u(A5S),"os",A9t(A4u),
"U",A9t(AU7)],M5,0,EF,[],1,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Qn,0,B,[HK],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],PV,0,B,[Qn,OH],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Mz,0,M5,[PV],0,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Mc,0,B,[],3,3,0,0,0,Eq,0,B,[Mc],1,3,0,0,0,DC,0,B,[],3,3,0,0,0,YP,0,B,[Mc],3,3,0,0,0,QT,0,B,[YP],3,3,0,0,0,ANx,0,Eq,[DC,CO,QT],0,3,0,0,0,AD9,0,B,[Bx],0,3,0,0,0,ABQ,0,B,[],0,3,0,0,0,AG7,0,B,[Cs],0,3,0,0,["cl",A9t(A4d)],AG8,0,B,[Cs],0,3,0,0,["cl",A9t(A4o)],AG9,0,B,[Cs],0,3,0,0,["cl",A9t(AUS)],AG$,
0,B,[Cs],0,3,0,0,["cl",A9t(A29)],AG_,0,B,[Cs],0,3,0,0,["cl",A9t(A3j)],AHa,0,B,[Cs],0,3,0,0,["cl",A9t(AWi)],AHb,0,B,[Cs],0,3,0,0,["cl",A9t(ATr)],AHc,0,B,[Cs],0,3,0,0,["cl",A9t(A7h)],AHd,0,B,[Cs],0,3,0,0,["cl",A9t(AS4)],AHe,0,B,[Cs],0,3,0,0,["cl",A9t(AWU)],Y7,0,B,[Cs],0,3,0,0,["cl",A9t(A6W)],Y8,0,B,[Cs],0,3,0,0,["cl",A9t(AUw)],Y9,0,B,[Cs],0,3,0,0,["cl",A9t(AUY)],Y$,0,B,[Cs],0,3,0,0,["cl",A9t(A4y)],Y5,0,B,[Cs],0,3,0,0,["cl",A9t(ATF)],Y6,0,B,[Cs],0,3,0,0,["cl",A9t(AX1)],AFz,0,B,[],3,3,0,0,0,AFH,0,B,[AFz],0,3,0,
0,0,AFF,0,B,[Cs],0,3,0,0,["cl",A9t(ATV)],AMa,0,B,[],0,3,0,0,0,Ch,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,["dI",A9t(A2L),"ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H)],Ey,0,B,[],3,3,0,0,0,DE,0,B,[],3,3,0,0,0,CT,0,B,[DE],3,3,0,0,0,Gw,0,B,[],3,3,0,0,0,Cp,0,B,[],3,3,0,0,0]);
$rt_metadata([GT,0,B,[Cp],3,3,0,0,0,Ti,0,B,[De],0,3,0,0,0,Y,"V2i",29,B,[],0,3,[0,0,0],0,["I",A9s(AMG),"U",A9t(ATP)],AHj,0,B,[],0,3,0,0,0,ALJ,0,B,[],0,3,0,0,0,ANk,0,B,[],3,3,0,0,0,ACc,0,B,[],0,3,0,0,0,Pn,0,B,[],0,3,0,0,0,Ds,0,Pn,[],0,3,0,0,0,AGV,0,Ds,[],0,3,0,0,0,FI,0,Ds,[],0,3,0,0,0,AN5,0,Ds,[],0,3,0,0,0,AKk,0,FI,[],0,3,0,0,0,HE,0,FI,[],0,3,0,0,0,AJa,0,HE,[],0,3,0,0,0,AMo,0,HE,[],0,3,0,0,0,ANB,0,FI,[],0,3,0,0,0,APc,0,Ds,[],0,3,0,0,0,AJi,0,Ds,[],0,3,0,0,0,ADM,0,B,[BV],3,3,0,0,0,AQl,0,B,[ADM],3,3,0,0,0,K5,0,B,
[Gk],0,3,0,0,["ta",A9u(Gq)],ACb,0,B,[De],0,3,0,0,0,Tb,0,B,[],0,3,0,0,0,Cj,0,B,[CB,CO],1,3,0,0,["I",A9s(A1X),"U",A9t(AQ$),"jL",A9t(ATY)],Hi,"GL$VertexLayout",8,Cj,[],12,3,[ANk,0,"VertexLayout"],HL,0,Ne,0,B,[],3,3,0,0,0,Mj,0,B,[Ne],3,3,0,0,0,Pk,0,B,[],3,3,0,0,0,G3,0,B,[Mj,Pk],1,3,0,0,0,NF,0,G3,[],0,3,0,0,0,AJX,0,NF,[],0,3,0,0,0,HV,0,G3,[],1,3,0,0,0,Ms,0,HV,[],0,3,0,0,["o4",A9v(ATR)],Eu,"GL$VertexAttribute",8,Cj,[],12,3,[ANk,0,"VertexAttribute"],AP4,0,Nx,0,B,[CB],1,3,0,0,0,Nh,0,Nx,[],0,3,0,AJS,0,ABk,0,B,[],0,3,
0,0,0,Il,"GL$VertexAttribute$Type",8,Cj,[],12,0,[Eu,0,"Type"],AKM,0,OJ,0,HV,[],0,3,0,0,["o4",A9v(ASO)],ALG,0,Bq,[],0,3,0,0,0,MQ,0,FX,[],0,3,0,0,0,CU,0,B,[De],1,3,0,0,["cX",A9t(A6V)],AEx,0,B,[B8],0,3,0,0,["bh",A9t(AWA)],Ng,0,B,[BV],3,3,0,0,0,ABd,0,B,[Ng],0,3,0,0,["bh",A9t(A6v)],ABe,0,B,[Ng],0,3,0,0,["bh",A9t(A5x)],Iy,0,B,[],1,3,0,0,0,AD3,0,B,[],3,3,0,0,0,Mh,0,Iy,[CB,Ou,KQ,AD3],1,3,0,0,0]);
$rt_metadata([N8,0,Iy,[CB],1,3,0,0,0,I1,0,B,[],0,3,0,Hs,0,IA,0,B,[],0,3,0,0,0,Qg,0,IA,[],0,3,0,0,0,AOs,0,B,[BV],1,3,0,0,0,LB,0,Mh,[],1,0,0,0,0,AKe,0,LB,[],0,0,0,0,0,L$,0,B,[],1,3,0,0,0,Pv,0,B,[],0,3,0,0,0,R4,0,IA,[],0,3,0,0,0,ALO,0,B,[],0,3,0,0,0,V5,0,B,[BV],3,3,0,0,0,Tw,0,B,[V5],0,3,0,0,["Tr",A9t(AXD)],R,0,B,[],3,3,0,0,0,AIn,0,B,[R],0,3,0,0,["e",A9t(OV)],AHz,0,N8,[],0,0,0,0,0,Ow,0,B,[],4,3,0,A2t,0,Qj,0,B,[],0,3,0,0,0,ON,0,L$,[],1,3,0,0,0,Sr,0,ON,[],0,3,0,0,0,Hk,0,FX,[],0,3,0,0,0,AIW,0,CU,[],0,3,0,0,["bP",A9s(AUs),
"bX",A9u(ATA)],H2,0,CU,[],1,3,0,0,["bX",A9u(AKC)],B9,0,H2,[],1,3,0,0,["bP",A9s(ASJ),"bX",A9u(GU),"cX",A9t(AJg)],PW,0,B9,[],0,3,0,0,["j9",A9s(AXJ),"bX",A9u(A6w)],ALN,0,PW,[],0,3,0,0,["j9",A9s(AU2)],AL$,0,B,[],0,3,0,0,0,AI7,0,B,[],0,3,0,0,0,Jr,0,B,[BV],3,3,0,0,0,Z7,0,B,[Jr],0,3,0,0,["bh",A9t(AST)],Z6,0,B,[Jr],0,3,0,0,["bh",A9t(AVz)],Z5,0,B,[B8],0,3,0,0,["bh",A9t(AVX)],Z4,0,B,[B8],0,3,0,0,["bh",A9t(A0t)],VV,0,B,[R],0,3,0,0,["e",A9t(A60)],VX,0,B,[R],0,3,0,0,["e",A9t(A2Q)],Yb,0,B,[Bx],0,3,0,0,["G",A9t(A40)],X$,0,
B,[Bx],0,3,0,0,["G",A9t(AUI)],X9,0,B,[Bx],0,3,0,0,["G",A9t(A1m)],Ya,0,B,[Bx],0,3,0,0,["G",A9t(AT3)],X_,0,B,[Bx],0,3,0,0,["G",A9t(A1Q)],Ye,0,B,[Bx],0,3,0,0,["G",A9t(A3u)],Yd,0,B,[Bx],0,3,0,0,["G",A9t(AWS)],Yg,0,B,[Bx],0,3,0,0,["G",A9t(AZK)],Yf,0,B,[Bx],0,3,0,0,["G",A9t(AWN)],Yc,0,B,[Bx],0,3,0,0,["G",A9t(A28)],AC$,0,B,[Bx],0,3,0,0,["G",A9t(A1h)],AC_,0,B,[Bx],0,3,0,0,["G",A9t(AVs)],ADa,0,B,[Bx],0,3,0,0,["G",A9t(AR8)],ADb,0,B,[Bx],0,3,0,0,["G",A9t(AY6)],ADj,0,B,[Bx],0,3,0,0,["G",A9t(A5m)]]);
$rt_metadata([ADk,0,B,[Bx],0,3,0,0,["G",A9t(AYR)],ADl,0,B,[Bx],0,3,0,0,["G",A9t(A5i)],ADm,0,B,[Bx],0,3,0,0,["G",A9t(AQT)],ADn,0,B,[Bx],0,3,0,0,["G",A9t(A00)],ADo,0,B,[Bx],0,3,0,0,["G",A9t(AUq)],ADe,0,B,[Bx],0,3,0,0,["G",A9t(AQ7)],ADf,0,B,[Bx],0,3,0,0,["G",A9t(A2n)],ADg,0,B,[Bx],0,3,0,0,["G",A9t(AT7)],ADh,0,B,[Bx],0,3,0,0,["G",A9t(AS$)],ADi,0,B,[Bx],0,3,0,0,["G",A9t(AZ7)],ACV,0,B,[Bx],0,3,0,0,["G",A9t(ARD)],ACW,0,B,[Bx],0,3,0,0,["G",A9t(A33)],ACX,0,B,[Bx],0,3,0,0,["G",A9t(AXU)],ACY,0,B,[Bx],0,3,0,0,["G",A9t(A6N)],ACZ,
0,B,[Bx],0,3,0,0,["G",A9t(AZW)],ACU,0,B,[Bx],0,3,0,0,["G",A9t(AU_)],Zs,0,B,[Bx],0,3,0,0,["G",A9t(A2p)],Jf,0,B,[],0,3,0,0,0,I5,0,B,[],3,3,0,0,0,DM,0,B,[I5],1,3,0,0,["AP",A9s(AQe)],ES,0,B,[Ch],3,3,0,0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN)],HN,"FileDiffWindow",28,DM,[ES],0,3,[0,0,0],0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN),"AP",A9s(A2Y),"fa",A9t(A5f),"bx",A9s(A6e),"ly",A9t(AZS),"bo",A9t(A6f)],Uu,0,B,[Cp],0,3,0,0,["bK",A9s(AVt)],CI,0,B,[],3,3,0,0,0,AHT,"WindowManager",24,B,[CJ,
CI],0,3,[0,0,0],0,["dI",A9t(AY9),"cL",A9v(ARV),"ce",A9u(ATy),"cP",A9u(A6F),"eG",A9u(A2G)],ALj,"UiContext",23,B,[Gw,GT],0,3,[0,0,0],0,["g0",A9u(A5F),"bK",A9s(A3X)],ACD,"WindowScene$<init>$lambda$_0_0",9,B,[Ey],0,3,[0,0,0],0,["dE",A9v(AWn)],ACE,"WindowScene$<init>$lambda$_0_1",9,B,[CT],0,3,[0,0,0],0,["bn",A9t(AXB)],KC,0,B,[],0,3,0,0,0,I_,0,B,[],0,3,0,0,0,AJe,0,B,[],3,3,0,0,0,AMP,0,B,[],0,3,0,0,0,AKK,0,B,[],3,3,0,0,0,Gl,0,B,[],0,3,0,0,0,CD,0,B,[De],0,3,0,0,["bx",A9s(AWs),"hX",A9s(A3V),"cz",A9v(FP),"dm",A9t(APZ),
"cX",A9t(A0l),"lW",A9s(AYd),"cL",A9v(ATu),"ce",A9u(ARN),"cP",A9u(AU6),"ev",A9u(A5M),"gU",A9s(AQt),"dE",A9v(A4R)],Ig,0,CD,[],1,3,0,0,["bx",A9s(A3R),"dm",A9t(AU3),"cX",A9t(AZr),"cz",A9v(ASl),"cL",A9v(A6d),"ce",A9u(AXt),"cP",A9u(A6l),"ev",A9u(A2T),"gU",A9s(AUT),"dE",A9v(ASP),"lW",A9s(A6B)],IC,0,Ig,[],1,0,0,0,["Hk",A9s(AUh)],ALQ,0,IC,[],0,0,0,0,0,Zg,0,B,[Q],0,3,0,0,["d",A9s(A2j)],Zf,0,B,[Q],0,3,0,0,["d",A9s(AUm)],AJf,0,B,[],3,3,0,0,0,ADQ,"Scene1$<init>$lambda$_0_0",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AVF)],ADP,"Scene1$<init>$lambda$_0_1",
9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AYO)],Wt,"Window",24,B,[],0,3,[0,0,0],0,0,BS,"V4f",29,B,[],0,3,[0,0,0],0,["U",A9t(AYw),"I",A9s(ARX)],Gi,0,BS,[],0,3,0,0,0,DD,0,B,[],3,3,0,S_,0,Cq,"IdeaCodeColors$ElementsDark",12,Cj,[],12,3,[AJe,0,"ElementsDark"],Jx,0,KY,0,B,[],0,3,0,0,0,Ji,0,B,[],0,3,0,0,0]);
$rt_metadata([AOH,0,B,[],0,3,0,0,0,D0,0,B,[],3,3,0,AZc,0,ANM,0,B,[],0,3,0,0,["U",A9t(A5j)],T7,0,B,[],0,3,0,0,0,Og,0,B,[],3,3,0,0,0,S2,0,B,[],3,0,0,0,0,Nd,0,B,[ES],3,3,0,0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN)],AJN,"EditorComponent",9,CD,[ES,CJ,Og,S2,Nd],0,3,[0,0,0],0,["cz",A9v(AMw),"sQ",A9u(A5X),"qe",A9s(A1x),"q$",A9s(AZt),"G2",A9s(AAm),"AE",A9s(AIp),"yS",A9t(RD),"pY",A9t(AWj),"lW",A9s(ALy),"bx",A9s(AZZ),"cX",A9t(AKR),"oI",A9t(ALf),"ou",A9t(AN7),"hX",A9s(ALX),"gI",A9s(AW_),"dm",A9t(A3n),"kX",
A9s(WB),"ke",A9s(Wy),"dk",A9t(AV2),"iU",A9s(AVT),"nU",A9s(AYJ),"oL",A9s(ATB),"dE",A9v(ALt),"cP",A9u(AU9),"ce",A9u(AY3),"cL",A9v(AQR),"dI",A9t(ANb),"gU",A9s(AKp),"ev",A9u(AJU),"bo",A9t(A6K),"g0",A9u(ALC),"D5",A9s(AX2),"I",A9s(A0O)],AOB,0,B,[],0,3,0,0,0,Qw,0,B,[R],0,3,0,0,0,Eg,0,B,[],3,3,0,0,0,Qv,0,B,[Eg],0,3,0,0,["eA",A9v(AQr)],ABc,0,B,[],0,3,0,0,0,Qy,0,B,[Q],0,3,0,0,0,Qx,0,B,[Eg],0,3,0,0,["eA",A9v(AVL)],QA,0,B,[R],0,3,0,0,["e",A9t(A3U)],Qz,0,B,[Eg],0,3,0,0,["eA",A9v(A1c)],Qs,0,B,[R],0,3,0,0,["e",A9t(AWf)],AMS,
0,B,[],0,3,0,0,0,Es,0,B,[],3,3,0,0,0,Qr,0,B,[Es],0,3,0,0,0,Qu,0,B,[Es],0,3,0,0,0,Qd,0,B,[],0,3,0,0,0,AB6,"UiContext$<init>$lambda$_0_0",23,B,[Q],0,3,[0,0,0],0,["d",A9s(A19)],AB5,"UiContext$<init>$lambda$_0_1",23,B,[Q],0,3,[0,0,0],0,["d",A9s(AY1)],Js,0,B,[],0,3,0,0,0,KU,0,B,[],4,3,0,0,0,ANl,0,B,[],0,3,0,0,0,S5,0,CD,[],0,3,0,0,["dm",A9t(AV5),"ev",A9u(ARH),"ce",A9u(AX$),"cL",A9v(AXd)],AJD,0,B,[],0,3,0,0,0,AIc,0,B,[],0,3,0,0,0,AH1,0,B,[],0,3,0,0,0,FJ,0,B,[De],0,3,0,0,0,AMk,0,B,[],0,3,0,0,0,AJC,0,B,[De],0,3,0,0,
0,AAF,0,B,[R],0,3,0,0,0,H3,0,B,[],1,3,0,0,0,ADT,0,H3,[],0,0,0,0,["dy",A9s(AS3),"k6",A9t(AQK),"n5",A9t(AYL),"iq",A9t(A1K),"oG",A9v(ARx)],AAE,0,B,[R],0,3,0,0,["e",A9t(ARs)],AAD,0,B,[R],0,3,0,0,["e",A9t(AQL)],AO$,0,B,[],0,3,0,0,0,AAC,0,B,[Q],0,3,0,0,["d",A9s(AZb)],AAK,0,B,[Q],0,3,0,0,["d",A9s(A1B)],AAI,0,B,[Q],0,3,0,0,["d",A9s(A7r)],AAH,0,B,[Q],0,3,0,0,["d",A9s(AUi)],AAG,0,B,[Q],0,3,0,0,["d",A9s(AVY)],AAB,0,B,[Q],0,3,0,0,["d",A9s(A61)],AAA,0,B,[Q],0,3,0,0,["d",A9s(AQE)],L1,0,Eq,[DC,CO],0,3,0,0,0,XB,0,B,[Es],0,
3,0,0,["f5",A9t(AUv)]]);
$rt_metadata([XC,0,B,[Es],0,3,0,0,["f5",A9t(A4l)],Xz,0,B,[Es],0,3,0,0,["f5",A9t(A4N)],XA,0,B,[Es],0,3,0,0,["f5",A9t(AXG)],Du,0,B,[],3,3,0,FZ,0,ADE,0,B,[],0,3,0,0,0,ANv,0,B,[],0,3,0,0,0,AP3,0,B,[],0,3,0,0,0,GY,"MiddleLine$Visible",9,B,[],0,0,[S5,0,"Visible"],0,0,So,0,B,[Cp],0,3,0,0,["bK",A9s(AW7)],Sq,0,B,[Cp],0,3,0,0,["bK",A9s(AUB)],FE,0,B,[],0,3,0,0,0,Or,0,FE,[],0,3,0,0,0,AEu,0,FE,[],0,3,0,0,0,ABW,0,FE,[],0,3,0,0,0,C8,0,B,[],3,3,0,0,0,U1,0,B,[],3,3,0,0,0,Jt,0,B,[],3,3,0,0,0,NP,0,EF,[DC,CO,Jt],0,3,0,0,["st",
A9t(A2A),"kp",A9t(B1),"cT",A9s(APd),"hZ",A9t(Bp),"q4",A9u(A2r),"os",A9t(Hn),"tU",A9t(ALS),"i2",A9s(GP),"yy",A9u(ANp),"eT",A9t(Gs),"I",A9s(APe)],AFG,0,EH,[PV,DC,CO],0,3,0,0,["eT",A9t(AYX),"st",A9t(A2A),"hZ",A9t(AMl),"bu",A9s(AK5)],Dx,"LineDiff",28,B,[],0,3,[0,0,0],0,["I",A9s(ATg)],Mg,0,B,[],0,3,0,0,0,Le,"GL$Texture",8,B,[De],0,3,[ANk,0,"Texture"],0,["bx",A9s(V8)],ABO,0,B,[],3,0,0,0,0,APQ,0,B,[],0,3,0,0,0,Wc,0,B,[],0,3,0,0,0,Ha,0,B,[],1,3,0,0,0,ADs,0,Ha,[],0,3,0,0,["x$",A9t(B3)],TF,0,B,[C8],0,3,0,0,0,TG,0,B,[Q],
0,3,0,0,0,Hp,0,B,[CB],0,3,0,0,0,OS,"NavigationContext",9,B,[],0,3,[0,0,0],0,0,C5,"CodeLine",9,B,[],0,3,[0,0,0],0,["I",A9s(A4i)],ABz,0,B,[],0,3,0,0,0,Cw,"CodeElement",9,B,[],0,3,[0,0,0],0,["I",A9s(AJV)],OQ,0,L1,[],0,3,0,0,0,ADF,0,B,[],0,3,0,0,0,AQa,"Interval",16,B,[CB],0,3,[0,0,0],0,["U",A9t(AWZ),"I",A9s(AM1),"jL",A9t(A0k)],RP,0,B,[Gk],0,3,0,0,["ta",A9u(A0b)],ACA,"IntervalNode",18,B,[],0,3,[0,0,0],0,["I",A9s(AQ4),"U",A9t(ARL)],Hy,0,B,[],3,3,0,0,0,G8,0,B,[Hy,DC],0,0,0,0,["U",A9t(A0G),"lB",A9s(ATx),"kt",A9s(AYi),
"I",A9s(AR_)],Ic,"HashMap$HashEntry",1,G8,[],0,0,[L1,0,0],0,0,AJO,0,B,[],4,3,0,0,0,AHr,0,B,[],0,0,0,0,0,QB,0,B,[Jr],0,3,0,0,["bh",A9t(AYm)],QD,0,B,[B8],0,3,0,0,["bh",A9t(AXQ)],QC,0,B,[B8],0,3,0,0,["bh",A9t(AZO)],AEM,0,B,[],0,3,0,0,0,Di,0,Bt,[],0,3,0,0,0,Fw,"DiffRange",15,B,[],0,3,[0,0,0],0,["I",A9s(AU4)]]);
$rt_metadata([ML,0,B,[],0,3,0,0,0,Fu,0,B,[],3,3,0,0,0,K1,0,B9,[I5,Fu],0,3,0,0,["iw",A9t(A2e),"cX",A9t(A5I),"bP",A9s(ATj),"j9",A9s(A6S),"bX",A9u(AQA),"fa",A9t(A04)],Qo,0,K1,[],0,3,0,0,["j9",A9s(A0i)],AMV,0,CU,[],0,3,0,0,["cX",A9t(AQS),"bP",A9s(ASr),"bX",A9u(AT9)],AES,0,CU,[],0,3,0,0,["cX",A9t(AVw),"bP",A9s(A0f),"bX",A9u(A1v)],AAO,"ToolbarDemo",13,B9,[CJ,CI],0,3,[0,0,0],0,["ce",A9u(AXH),"cP",A9u(AQ2),"eG",A9u(ATO),"bX",A9u(ASV),"bP",A9s(A0W),"dI",A9t(AT_),"cL",A9v(ARt)],AEr,"FindUsagesDemo",13,B9,[CI],0,3,[0,0,0],
0,["eG",A9u(ASg),"bX",A9u(ARI)],Z9,"RegionTextureAllocatorDemo",9,H2,[CJ],0,3,[0,0,0],0,["dI",A9t(A2L),"ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H),"bP",A9s(A5d),"cX",A9t(AQJ)],CF,0,CU,[],0,3,0,0,["bP",A9s(OM),"bX",A9u(Hd)],Q1,"LineNumbersTest",9,CF,[],0,3,0,0,["bP",A9s(A2K),"bX",A9u(A0a)],LK,0,B9,[],0,3,0,0,0,AAs,0,B9,[],0,3,0,0,0,YY,"DrawTextureTest",9,CF,[],0,3,0,0,["cX",A9t(AS_),"bP",A9s(AZv),"bX",A9u(A2N)],Vb,"ScissorDemo",9,CF,[],0,3,0,0,["bP",A9s(A7j),"bX",A9u(ATe)],AEg,0,CU,[],0,3,0,0,["bP",A9s(AXS),"bX",
A9u(A0Z),"cX",A9t(A41)],KW,"ClipboardTest",9,CF,[CJ],0,3,[0,0,0],0,["dI",A9t(A2L),"ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(AT0)],UY,"CodiconDemo",9,CF,[],0,3,0,0,["bP",A9s(AYu)],Hf,0,CU,[CJ],1,3,0,0,["dI",A9t(A2L),"ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H),"bP",A9s(AJI)],VQ,"LineShaderDemo1",9,Hf,[],0,3,[0,0,0],0,["ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H),"bX",A9u(A4P),"dI",A9t(A5G)],VP,"LineShaderDemo2",9,Hf,[],0,3,[0,0,0],0,["ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H),"dI",A9t(A62),"bX",A9u(ARf),"bP",A9s(ASc)],Zh,
"WindowsDemo",11,B9,[CI],0,3,[0,0,0],0,["eG",A9u(ATN)],EB,"WindowDemo",23,B9,[CI],0,3,[0,0,0],0,["k4",A9s(A0y),"r$",A9s(AUe),"p$",A9t(ANu),"eG",A9u(A5n)],ACz,"MergeButtonsTest",23,CF,[CJ],0,3,[0,0,0],0,["cL",A9v(A4H),"bX",A9u(AZM),"bP",A9s(AXo),"ce",A9u(AXE),"cP",A9u(A2w),"dI",A9t(A1q)],Te,"EditorWindowDemo",9,B9,[CI],0,3,[0,0,0],0,["eG",A9u(A1P)],Pt,"SinDemo",9,CF,[CJ],0,3,[0,0,0],0,["dI",A9t(A2L),"ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H),"bX",A9u(A6Y),"bP",A9s(A18),"cX",A9t(AWD)],ZQ,0,B9,[],0,3,0,0,["bX",
A9u(ASf)],Sa,"EditorInViewDemo",9,EB,[CI,I5,Fu],0,3,[0,0,0],0,["k4",A9s(ARJ),"r$",A9s(AZd),"p$",A9t(A64),"fa",A9t(AWM),"iw",A9t(AWg)],ACH,"FolderTransferDemo",28,EB,[CI],0,3,[0,0,0],0,["k4",A9s(ATk)],Vn,"FileTreeDemo",23,EB,[CI],0,3,[0,0,0],0,["k4",A9s(AZ9),"p$",A9t(ASS)],AKc,"UiToolsDemo",28,B9,[CI],0,3,[0,0,0],0,["eG",A9u(A4F)],T3,"ProjectViewDemo",9,B9,[CI],0,3,[0,0,0],0,["eG",A9u(A02)],WC,"VScrollTest",9,CF,[CJ],0,3,[0,0,0],0,["cL",A9v(A4H),"bP",A9s(AQQ),"bX",A9u(A32),"ce",A9u(A6J),"cP",A9u(A4c),"dI",A9t(ARY)],Rp,
"DiffMiddleDemo",28,EB,[CI],0,3,[0,0,0],0,["k4",A9s(A1r)],AP0,0,B,[],0,3,0,0,0,H6,"CtrlO",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AUN)],ABD,0,B,[R],0,3,0,0,["e",A9t(A3f)],ABC,"Editor0$<init>$lambda$_0_1",9,B,[CT],0,3,[0,0,0],0,["bn",A9t(AVa)],AL2,0,B,[],3,3,0,0,0,Wm,0,B,[Q],0,3,0,0,["d",A9s(AZN)],Wn,"Editor1$<init>$lambda$_0_1",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(A5J)],Wo,0,B,[Eg],0,3,0,0,["eA",A9v(AVj)],KT,0,B,[],0,3,0,0,0,AMp,"TextRect",9,KT,[],0,3,[0,0,0],0,0,WD,"DemoScene1$MyInputListener",9,B,[CJ],0,0,[AMV,0,"MyInputListener"],
0,["dI",A9t(A0g),"cL",A9v(AQF),"ce",A9u(AZ$),"cP",A9u(AZz)],AB2,"DemoScene1$<init>$lambda$_0_0",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(A1L)],AB1,"DemoScene1$<init>$lambda$_0_1",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AS1)],AB0,"DemoScene1$<init>$lambda$_0_2",9,B,[Gw],0,3,[0,0,0],0,["g0",A9u(A2O)],ABZ,"DemoScene1$<init>$lambda$_0_3",9,B,[Q],0,3,[0,0,0],0,["d",A9s(AY7)],ABY,"DemoScene1$<init>$lambda$_0_4",9,B,[CT],0,3,[0,0,0],0,["bn",A9t(AVC)]]);
$rt_metadata([ABX,"DemoScene1$<init>$lambda$_0_5",9,B,[Ey],0,3,[0,0,0],0,["dE",A9v(A58)],ALv,0,B,[],3,3,0,0,0,ZM,"CleartypeColors$MyInputListener",9,B,[CJ],0,0,[AES,0,"MyInputListener"],0,["dI",A9t(A2L),"ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(ASI)],ZI,0,B,[],0,3,0,0,0,AKL,"Toolbar",23,B,[],0,3,[0,0,0],0,0,AFq,"ToolbarDemo$<init>$lambda$_0_0",13,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AUH)],AFl,"ToolbarDemo$<init>$lambda$_0_1",13,B,[CT],0,3,[0,0,0],0,["bn",A9t(AWT)],AFm,0,B,[Q],0,3,0,0,["d",A9s(A7m)],AFo,0,B,[Q],0,3,0,0,
["d",A9s(ARm)],Bn,"ToolbarItem",23,B,[],0,3,[0,0,0],0,0,Xj,"FindUsagesDemo$<init>$lambda$_0_0",13,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AYx)],Xm,"FindUsagesDemo$<init>$lambda$_0_1",13,B,[CT],0,3,[0,0,0],0,["bn",A9t(AQ3)],AL_,0,B,[],0,3,0,0,0,QM,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",9,B,[CI],0,3,[0,0,0],0,["eG",A9u(AVl)],QL,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(ATw)],AC8,0,B,[],3,3,0,0,0,AMW,0,B,[AC8],0,3,0,0,0,ABs,0,B,[R],0,3,0,0,["e",A9t(A3N)],XK,"LineNumbersTest$LineNumbersInputListener",
9,B,[CJ],0,0,[Q1,0,"LineNumbersInputListener"],0,["cL",A9v(A4H),"ce",A9u(A3d),"cP",A9u(AW$),"dI",A9t(A6E)],ABt,"LineNumbersTest$<init>$lambda$_0_1",9,B,[Ey],0,3,[0,0,0],0,["dE",A9v(A0X)],PZ,0,B,[],3,3,0,0,0,SF,"SelectFileTest$<init>$lambda$_0_0",9,B,[CT],0,3,[0,0,0],0,["bn",A9t(AU$)],SE,"SelectFileTest$<init>$lambda$_0_1",9,B,[CI],0,3,[0,0,0],0,["eG",A9u(AYE)],TL,"WorkerTest$<init>$lambda$_0_0",14,B,[CT],0,3,[0,0,0],0,["bn",A9t(AYy)],TK,0,B,[R],0,3,0,0,["e",A9t(A45)],QE,"DrawTextureTest$MyInputListener",9,B,
[CJ],0,0,[YY,0,"MyInputListener"],0,["cP",A9u(AQ2),"cL",A9v(A4H),"dI",A9t(A6n),"ce",A9u(AQY)],AKU,0,B,[],0,3,0,0,0,ABE,"TextureRegionTestScene$MListener",9,B,[CJ],0,0,[AEg,0,"MListener"],0,["cL",A9v(A4H),"ce",A9u(ATE),"cP",A9u(AZu),"dI",A9t(ASM)],Za,"TextureRegionTestScene$<init>$lambda$_0_0",9,B,[Ey],0,3,[0,0,0],0,["dE",A9v(A56)],AHv,"ClipboardTest$<init>$lambda$_0_0",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(ATH)],AHu,"ClipboardTest$<init>$lambda$_0_1",9,B,[Gw],0,3,[0,0,0],0,["g0",A9u(A2X)],AHt,"ClipboardTest$<init>$lambda$_0_2",
9,B,[Gw],0,3,[0,0,0],0,["g0",A9u(ASa)],AHs,"ClipboardTest$<init>$lambda$_0_3",9,B,[GT],0,3,[0,0,0],0,["bK",A9s(AUx)],AHw,"ClipboardTest$<init>$lambda$_0_4",9,B,[GT],0,3,[0,0,0],0,["bK",A9s(A5B)],UA,"CodiconDemo$<init>$lambda$_0_0",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AR4)],Rd,"WindowsDemo$<init>$lambda$_0_0",11,B,[Ch],0,3,[0,0,0],0,["bo",A9t(A3P)],Rf,"WindowsDemo$<init>$lambda$_0_1",11,B,[CT],0,3,[0,0,0],0,["bn",A9t(A12)],APX,0,B,[De],0,3,0,0,["bx",A9s(A0I)],AGv,0,B,[R],0,3,0,0,["e",A9t(A4a)],AGw,"MergeButtonsTest$<init>$lambda$_0_1",
23,B,[Ey],0,3,[0,0,0],0,["dE",A9v(AX4)],AGx,"MergeButtonsTest$<init>$lambda$_0_2",23,B,[Ch],0,3,[0,0,0],0,["bo",A9t(A6x)],GQ,"MergeButtonsModel",9,B,[],0,3,[0,0,0],0,0,AKw,0,GQ,[],0,3,0,0,0,Ns,0,B,[],0,3,0,0,0,Tn,0,Ns,[],0,3,0,0,0,RG,0,B,[R],0,3,0,0,["e",A9t(A5$)],RF,"EditorWindowDemo$<init>$lambda$_0_1",9,B,[CT],0,3,[0,0,0],0,["bn",A9t(A1e)],SZ,0,B,[],0,3,0,0,0,XP,0,B,[],0,0,0,0,0,ST,"SinDemo$<init>$lambda$_0_0",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(ARg)]]);
$rt_metadata([Oq,"FolderDiffWindow",28,DM,[],0,3,[0,0,0],0,["bx",A9s(ARK),"ly",A9t(A1_)],Rn,0,B,[Cp],0,3,0,0,["bK",A9s(A5T)],Rh,0,B,[R],0,3,0,0,["e",A9t(A4f)],Ri,"EditorInViewDemo$<init>$lambda$_0_1",9,B,[CT],0,3,[0,0,0],0,["bn",A9t(A5U)],SK,"FolderTransferDemo$<init>$lambda$_0_0",28,B,[CT],0,3,[0,0,0],0,["bn",A9t(AVW)],SJ,"FolderTransferDemo$<init>$lambda$_0_1",28,B,[Ch],0,3,[0,0,0],0,["bo",A9t(A2q)],WF,"UiToolsDemo$<init>$lambda$_0_0",28,B,[CT],0,3,[0,0,0],0,["bn",A9t(A3C)],AAP,"ProjectViewDemo$<init>$lambda$_0_0",
9,B,[CT],0,3,[0,0,0],0,["bn",A9t(ASw)],XR,0,B,[R],0,3,0,0,["e",A9t(AUD)],XQ,"VScrollTest$<init>$lambda$_0_1",9,B,[Ey],0,3,[0,0,0],0,["dE",A9v(AX5)],Xq,"DiffMiddleDemo$<init>$lambda$_0_0",28,B,[CT],0,3,[0,0,0],0,["bn",A9t(AV7)],Xp,"DiffMiddleDemo$<init>$lambda$_0_1",28,B,[Ch],0,3,[0,0,0],0,["bo",A9t(A5Y)],AK2,0,B,[BV],1,3,0,0,0,AA6,0,B,[BV],3,3,0,0,0,ABi,0,B,[AA6],0,3,0,0,["G9",A9u(A1I)],AA7,0,B,[BV],3,3,0,0,0,ABg,0,B,[AA7],0,3,0,0,["G9",A9u(A2m)],AJv,0,B,[],0,3,0,0,0,AMT,0,B,[BV],3,3,0,0,0,APz,0,B,[],0,3,0,
0,["U",A9t(A0z)],Yi,0,B,[],0,3,0,0,0,D4,0,B,[],3,3,0,A3t,0,Ij,0,B,[],3,3,0,0,0,RJ,0,B,[Ij],0,3,0,0,["Ba",A9v(A4V)],RK,0,B,[Ij],0,3,0,0,0,Ry,0,B,[R],0,3,0,0,["e",A9t(ASD)],Rw,0,B,[R],0,3,0,0,["e",A9t(ARA)],Rs,0,B,[R],0,3,0,0,["e",A9t(AQM)],Rr,0,B,[R],0,3,0,0,["e",A9t(A63)],AMA,0,B,[],0,3,0,0,0,AQd,0,B,[],0,3,0,0,0,XH,0,B,[R],0,3,0,0,["e",A9t(A2o)],AF9,"LineShaderDemo0$<init>$lambda$_0_0",9,B,[Ch],0,3,[0,0,0],0,["bo",A9t(AY4)],AKg,0,IC,[],0,0,0,0,0,Ht,0,B,[],0,3,0,0,["I",A9s(ARW)],Dr,"FileTreeNode",23,Ht,[],0,
3,[0,0,0],0,["oH",A9s(AXl)],U8,0,B,[Q],0,3,0,0,["d",A9s(A0e)],U6,0,B,[Q],0,3,0,0,["d",A9s(AYY)],U7,0,B,[Q],0,3,0,0,["d",A9s(A2g)],U5,0,B,[Q],0,3,0,0,["d",A9s(AXe)],FO,0,B,[],0,3,0,N_,["c4",A9t(AT1)],AIR,0,B,[],3,3,0,0,0,AP8,0,B,[],0,3,0,0,0,AJZ,0,B,[BV],4,3,0,0,0,H0,"GL$ImageData$Format",8,Cj,[],12,3,[AQd,0,"Format"],AKO,0,Cu,"IdeaCodeColors$ElementsDarcula",12,Cj,[],12,3,[AJe,0,"ElementsDarcula"],AJG,0,GW,0,B,[],3,3,0,0,0,SP,0,B,[],3,3,0,0,0,EE,0,CD,[],0,3,0,0,0,L7,0,EE,[ES],0,3,0,0,["D5",A9s(AYN),"cz",A9v(A4E),
"gU",A9s(AXu),"cL",A9v(A55),"bo",A9t(ATd),"g0",A9u(A1F),"qe",A9s(AXw),"q$",A9s(AXI)]]);
$rt_metadata([AOd,0,L7,[],0,3,0,0,["D5",A9s(AYN),"bx",A9s(AWO),"dm",A9t(ARh),"ce",A9u(A4G),"cP",A9u(AWE),"ev",A9u(A5h)],AJF,0,CD,[],0,3,0,0,["bx",A9s(AW1),"cz",A9v(ATb),"gU",A9s(A2_),"dm",A9t(A42),"cL",A9v(AXq),"ce",A9u(AW4),"cP",A9u(AVp),"ev",A9u(A0Y),"dE",A9v(A1s),"hX",A9s(AMs)],AKD,0,B,[Nd],0,3,0,0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN),"kX",A9s(AXa),"ke",A9s(A6b),"dk",A9t(AX9),"iU",A9s(AT$),"nU",A9s(AZD),"sQ",A9u(AZy),"ou",A9t(A3J),"oI",A9t(ARC),"gI",A9s(Nq),"oL",A9s(A1H)],AGT,0,B,[],3,
3,0,0,0,AOL,"JsArrayView",27,B,[AGT],0,3,[0,0,0],0,["I",A9s(A0F)],C9,0,B,[BV],1,3,0,0,0,AO1,0,C9,[],1,3,0,0,0,APo,0,C9,[],1,3,0,0,0,ANE,0,C9,[],1,3,0,0,0,ANN,0,C9,[],1,3,0,0,0,APB,0,C9,[],1,3,0,0,0,Rk,0,B,[Bx],0,3,0,0,["G",A9t(AZw)],ACO,0,B,[],0,3,0,0,0,Yv,0,B,[Q],0,3,0,0,["d",A9s(ATT)],TU,0,B,[R],0,3,0,0,["e",A9t(A1O)],TV,0,B,[R],0,3,0,0,["e",A9t(A6_)],AGh,0,B,[Gk],0,3,0,0,["ta",A9u(A2f)],AKb,0,B,[BV],1,3,0,0,0,AP5,0,Ha,[],0,0,0,0,["x$",A9t(A7g)],O0,0,B,[],0,3,0,0,0,ANh,0,B,[],0,3,0,0,0,ALl,0,B,[],0,3,0,0,
0,Wi,0,B,[Q],0,3,0,0,["d",A9s(AUr)],Wj,0,B,[DE],0,3,0,0,0,AMi,0,B,[],0,3,0,0,0,X3,0,B,[C8],0,3,0,0,0,AFn,"Pair",17,B,[],0,3,[0,0,0],0,["I",A9s(A4L)],ANn,0,B,[],3,3,0,0,0,SQ,"EditorComponent$registerMouse$lambda$_1_0",9,B,[Ey],0,3,[0,0,0],0,["dE",A9v(AUj)],AAU,"ScissorDemo$1",9,B,[CJ],0,0,[Vb,0,0],0,["ce",A9u(AXH),"cP",A9u(AQ2),"cL",A9v(A4H),"dI",A9t(A7n)],AJW,0,B,[BV],1,3,0,0,0,Sp,"MergeButtonsModel$TestModel$action$lambda$_2_0",9,B,[Q],0,3,[0,0,0],0,["d",A9s(A53)],TD,0,B,[GW],0,3,0,0,0,Fx,"FsItem",8,B,[],3,
3,0,0,0,Ju,0,B,[Fx],3,3,0,0,0,Mf,"JsFileHandle",27,B,[Ju],0,3,[0,0,0],0,["rY",A9s(FF),"wV",A9s(AQ_),"I",A9s(OE)],HM,0,B,[Fx],3,3,0,0,0,Po,"JsDirectoryHandle",27,B,[HM],0,0,[0,0,0],0,["rY",A9s(JP),"wV",A9s(A6y),"I",A9s(I4)],UZ,0,B,[],3,3,0,0,0,AGc,0,B,[R],0,3,0,0,["e",A9t(A0n)],ALW,"PopupMenu",23,B,[CI,ES,De],0,3,[0,0,0],0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN),"eG",A9u(A67),"bo",A9t(AUp),"bx",A9s(AWd)],Xe,0,CD,[],0,3,0,0,0,SI,"MergeButtonsModel$getModels$lambda$_1_0",9,B,[Q],0,3,[0,0,0],0,
["d",A9s(ATf)],SH,"MergeButtonsModel$getModels$lambda$_1_1",9,B,[GW],0,3,[0,0,0],0,0,SG,"MergeButtonsModel$getModels$lambda$_1_2",9,B,[Q],0,3,[0,0,0],0,["d",A9s(AUF)],Sj,0,B,[R],0,3,0,0,["e",A9t(A5H)],V2,0,B,[R],0,3,0,0,["e",A9t(AXb)],SN,0,B,[R],0,3,0,0,["e",A9t(A7l)],Nn,0,B,[Hy,CO],0,3,0,0,["kt",A9s(AWh),"lB",A9s(ATZ),"U",A9t(A06),"I",A9s(AS8)],F4,"TreeMap$TreeNode",1,Nn,[],0,0,[ANx,0,0],0,0]);
$rt_metadata([TP,0,B,[Cp],0,3,0,0,["bK",A9s(AYB)],W_,0,B,[R],0,3,0,0,["e",A9t(A6t)],YZ,0,B,[Q],0,3,0,0,["d",A9s(A49)],Tv,0,B,[R],0,3,0,0,["e",A9t(A3O)],AA9,0,B,[Q],0,3,0,0,["d",A9s(AUt)],AIq,0,B,[],3,3,0,0,0,AAq,0,B,[Q],0,3,0,0,["d",A9s(A6q)],AAo,0,B,[Q],0,3,0,0,["d",A9s(ASR)],AAn,0,B,[Q],0,3,0,0,["d",A9s(ARe)],AAp,0,B,[Q],0,3,0,0,["d",A9s(A7o)],Xy,0,B,[Q],0,3,0,0,["d",A9s(ARG)],Uk,0,B,[Q],0,3,0,0,["d",A9s(A3m)],AB7,0,B,[R],0,3,0,0,["e",A9t(AZP)],AOV,0,B,[],3,3,0,0,0,R7,0,B,[Q],0,3,0,0,["d",A9s(A1D)],R9,0,B,
[Q],0,3,0,0,["d",A9s(A6G)],R8,0,B,[Q],0,3,0,0,["d",A9s(AUE)],ADu,0,B,[Q],0,3,0,0,["d",A9s(ASU)],ADx,0,B,[Q],0,3,0,0,["d",A9s(AVS)],ADy,0,B,[Q],0,3,0,0,["d",A9s(A3T)],ADv,0,B,[Q],0,3,0,0,["d",A9s(A2F)],ADw,0,B,[Q],0,3,0,0,["d",A9s(AZ5)],ADB,0,B,[Q],0,3,0,0,["d",A9s(AZg)],AAM,0,B,[Q],0,3,0,0,["d",A9s(AZX)],AAN,0,B,[Q],0,3,0,0,["d",A9s(A0_)],AIl,0,B,[Q],0,3,0,0,["d",A9s(A2U)],MH,0,B,[],3,3,0,0,0,S$,0,B,[MH],0,3,0,0,["D3",A9t(A0m)],Ra,0,B,[Bx],0,3,0,0,["G",A9t(A6a)],AAu,0,B,[Q],0,3,0,0,["d",A9s(AYh)],CP,0,Bt,[],
0,3,0,0,0,APb,0,FQ,[],0,3,0,0,0,Sx,0,B,[],0,3,0,0,0,SL,"LineNumbersTexture",9,B,[De],0,3,[0,0,0],0,0,V$,0,B,[],0,0,0,0,0,O6,0,B,[],0,3,0,0,0,AJQ,0,B,[],0,0,0,0,0,AIT,0,B,[],0,3,0,0,0,AKo,0,B,[Bx],0,3,0,0,0,AL0,0,B,[],0,3,0,0,0,AEV,0,B,[R],0,3,0,0,["e",A9t(ATl)],AEW,0,B,[R],0,3,0,0,["e",A9t(AWY)],PE,0,BU,[],0,3,0,0,0,JV,0,B,[],0,3,0,0,["I",A9s(AX_)],T8,0,B,[Cp],0,3,0,0,["bK",A9s(A50)],YR,0,B,[R],0,3,0,0,["e",A9t(AXO)],AAa,0,B,[Cp],0,3,0,0,["bK",A9s(A4U)],AHS,0,B,[B8],0,3,0,0,["bh",A9t(ASb)],R5,0,B,[B8],0,3,0,
0,["bh",A9t(ASq)],AGM,0,B,[Q],0,3,0,0,["d",A9s(A6R)]]);
$rt_metadata([Gj,0,Hk,[],0,3,0,0,0,AP6,0,FQ,[],0,3,0,0,0,Zi,0,B,[R],0,3,0,0,["e",A9t(AWP)],Zj,0,B,[R],0,3,0,0,["e",A9t(AZ0)],AJj,0,B,[],3,3,0,0,0,AFc,0,B,[R],0,3,0,0,["e",A9t(AZT)],AFU,"EditorWindow",9,DM,[Ch],0,3,[0,0,0],0,["fa",A9t(AQj),"bx",A9s(ARR),"ly",A9t(A1V),"bo",A9t(A3I)],Ue,0,B,[Cp],0,3,0,0,["bK",A9s(AVc)],Lx,0,B,[],3,3,0,0,["uR",A9u(ARz)],Mx,0,DM,[Lx],0,3,0,0,["ly",A9t(A0p),"bx",A9s(A2W),"fa",A9t(A1a),"Ek",A9t(A07),"B2",A9t(AWW),"y6",A9t(A3$),"uR",A9u(A3L)],AHi,0,B,[Cp],0,3,0,0,["bK",A9s(AYk)],AH4,
0,C$,[CB],0,3,0,0,0,GC,0,B,[],0,0,0,0,0,J7,0,B,[],4,3,0,0,0,W5,0,B,[],0,3,0,0,0,AH7,0,B,[B8],0,3,0,0,["bh",A9t(A5b)],AH6,0,B,[B8],0,3,0,0,["bh",A9t(A0M)],AHq,0,B,[B8],0,3,0,0,["bh",A9t(A1S)],AHp,0,B,[B8],0,3,0,0,["bh",A9t(A2l)],AFZ,0,H3,[],0,3,0,0,["dy",A9s(A0u),"k6",A9t(Pa),"n5",A9t(FV),"iq",A9t(AJ0),"oG",A9v(AWB)],WR,0,B,[Q],0,3,0,0,["d",A9s(AQ5)],WS,0,B,[Q],0,3,0,0,["d",A9s(ASN)],WT,0,B,[Q],0,3,0,0,["d",A9s(A6s)],WU,0,B,[Q],0,3,0,0,["d",A9s(AUu)],WV,0,B,[Q],0,3,0,0,["d",A9s(AWw)],Vj,0,B,[B8],0,3,0,0,["bh",
A9t(AZV)],PN,0,B,[],1,3,0,0,0,AGR,"Pos",17,B,[CB],0,3,[0,0,0],0,["U",A9t(AQN),"h7",A9s(AWq),"I",A9s(ARk),"jL",A9t(A4A)],Hj,"Diff",9,B,[],0,3,[0,0,0],0,0,AJ$,0,C9,[],1,3,0,0,0,Ta,0,B,[R],0,3,0,0,["e",A9t(A4W)],To,0,EE,[ES],0,3,0,0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN),"bx",A9s(A6r),"cz",A9v(AQ9),"dm",A9t(AZe),"ev",A9u(A4z),"ce",A9u(ASW),"cL",A9v(AWk),"bo",A9t(A5N)],X2,0,B,[Q],0,3,0,0,["d",A9s(AYa)],AHo,0,B,[Eg],0,3,0,0,["eA",A9v(AVK)],AHm,0,B,[Q],0,3,0,0,["d",A9s(AXm)],AHn,0,B,[Q],0,3,0,0,
["d",A9s(AR$)],SY,0,Ig,[Fu],0,3,0,0,["Hk",A9s(ATQ),"hX",A9s(A15)],AEo,0,B,[Q],0,3,0,0,["d",A9s(ASu)],AEn,0,B,[Q],0,3,0,0,["d",A9s(AV4)],AEp,0,B,[Q],0,3,0,0,["d",A9s(A3G)],H_,0,C$,[CB],0,3,0,0,["AC",A9s(AQP),"I",A9s(AXg),"h7",A9s(AQw)],V4,0,B,[Cs],0,3,0,0,["cl",A9t(AZf)],AFJ,0,B,[],0,3,0,0,0,AFf,0,B,[],0,3,0,0,0,Ku,0,B,[],0,3,0,0,0,M1,0,EE,[],0,3,0,0,["bx",A9s(AZm),"cz",A9v(A2k),"hX",A9s(AS7),"dm",A9t(AVq),"ev",A9u(AYc)],LR,0,B,[],3,3,0,0,0,AMO,0,B,[LR],0,3,0,0,["wk",A9u(ARi),"uW",A9v(AZ4)],Rl,0,CD,[],0,3,0,
0,["dm",A9t(AQV)],AFp,0,B,[],0,3,0,0,0]);
$rt_metadata([U9,0,B,[Q],0,3,0,0,["d",A9s(AUb)],V_,0,B,[],0,3,0,0,0,AG6,0,B,[Q],0,3,0,0,["d",A9s(A4I)],Wp,0,B,[],3,3,0,ATz,0,LS,"FindUsagesItemData",10,B,[],0,3,[0,0,0],0,0,AAt,0,B,[],0,3,0,0,0,Rg,0,B,[R],0,3,0,0,["e",A9t(ARS)],D3,0,B,[],3,3,0,0,0,AAi,0,B,[D3],0,0,0,0,["b0",A9s(B6),"bG",A9s(B7),"r6",A9s(Ov)],Xi,0,B,[R],0,3,0,0,["e",A9t(AV9)],AG4,0,B,[Q],0,3,0,0,["d",A9s(AYf)],Un,0,B,[Q],0,3,0,0,["d",A9s(A2b)],LV,0,PN,[],1,3,0,0,0,VB,0,LV,[],0,3,0,0,0,Rx,0,B,[R],0,3,0,0,0,Go,0,Bt,[],0,3,0,0,0,ACf,0,B,[D3],0,
0,0,0,["b0",A9s(AJl),"bG",A9s(AJY)],Uq,0,B,[Q],0,3,0,0,["d",A9s(AWm)],Up,0,B,[Q],0,3,0,0,["d",A9s(A1u)],Us,0,B,[Q],0,3,0,0,["d",A9s(A6p)],Ur,0,B,[Q],0,3,0,0,["d",A9s(AYZ)],UT,0,B,[Q],0,3,0,0,["d",A9s(AW6)],AJw,0,B,[],0,3,0,0,0,AEP,0,B,[Q],0,3,0,0,["d",A9s(AQu)],AEQ,0,B,[Q],0,3,0,0,["d",A9s(ATm)],XG,0,B,[Es],0,3,0,0,0,AKn,0,B,[],3,3,0,0,0,ZH,0,B,[],0,3,0,0,0,PL,0,B,[],3,3,0,0,0,ADW,0,B,[PL],0,3,0,0,0,ADV,0,B,[R],0,3,0,0,["e",A9t(A17)],ADU,0,B,[R],0,3,0,0,["e",A9t(AWR)],Zo,0,B,[R],0,3,0,0,["e",A9t(A44)],YW,0,
B,[R],0,3,0,0,["e",A9t(A6k)],AEF,0,B,[R],0,3,0,0,["e",A9t(A3w)],G$,0,B,[CO,CB],0,3,0,0,0,J4,0,C$,[CB],0,3,0,0,["I",A9s(AZA),"U",A9t(A7q),"jL",A9t(A2D)],Kz,0,B,[],4,3,0,0,0,Vu,0,B,[],0,3,0,0,0,AFN,0,B,[Ij],0,3,0,0,["Ba",A9v(AUd)],VM,0,B,[C8],0,3,0,0,["fp",A9u(A4S)],Lv,0,B,[HK],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],CX,0,EH,[Lv],1,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],ABo,0,B,[Lv],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Xs,0,B,[ABo],3,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Nl,0,CX,[Xs],0,3,0,0,["eT",A9t(AYX),"st",A9t(A2A),
"bu",A9s(AZL)],S9,0,B,[R],0,3,0,0,["e",A9t(AZY)],Tj,0,B,[Q],0,3,0,0,["d",A9s(A3F)],W0,0,B,[C8],0,3,0,0,["fp",A9u(A3W)],Zt,0,B,[],3,3,0,0,0]);
$rt_metadata([AEG,0,B,[Zt],0,0,0,0,0,ZU,0,B,[Q],0,3,0,0,["d",A9s(A3B)],F0,0,Bt,[],0,3,0,0,0,KZ,0,Di,[],0,3,0,0,0,Kb,0,Bt,[],0,3,0,0,0,Px,0,Bt,[],0,3,0,0,0,AGN,0,B,[R],0,3,0,0,0,AP_,0,B,[],0,3,0,0,0,XZ,0,B,[R],0,3,0,0,["e",A9t(AQ0)],ZA,0,B,[R],0,3,0,0,["e",A9t(A39)],AH5,0,B,[R],0,3,0,0,["e",A9t(A1y)],Uc,0,NP,[],0,3,0,0,["st",A9t(A2A),"dv",A9s(Oe),"hZ",A9t(AQH)],AMb,0,B,[],0,3,0,0,0,XD,0,B,[R],0,3,0,0,["e",A9t(A1l)],Sm,0,B,[PL],0,3,0,0,0,AH3,0,B,[R],0,3,0,0,["e",A9t(A4T)],AFi,0,B,[R],0,3,0,0,0,AFO,0,B,[C8],0,
3,0,0,0,AI4,0,B,[],0,3,0,0,0,ACq,0,B,[Ne],3,3,0,0,0,Q_,0,B,[ACq],3,3,0,0,0,F1,0,B,[Q_],1,3,0,0,0,AJM,0,F1,[],0,3,0,0,["rB",A9t(AML),"vH",A9s(AQO)],ALT,0,B,[],0,3,0,0,0,U$,0,Eq,[DC,CO],0,3,0,0,0,Xu,0,B,[],0,3,0,0,0,Xf,0,B,[],0,3,0,0,0,WP,0,B,[DE],0,3,0,0,0,Q0,0,B,[R],0,3,0,0,["e",A9t(A69)],W1,0,B,[R],0,3,0,0,["e",A9t(A1z)],Re,0,B,[R],0,3,0,0,["e",A9t(AUK)],ABI,0,B,[R],0,3,0,0,["e",A9t(AXi)],T1,0,B,[Cp],0,3,0,0,["bK",A9s(AXF)],ABS,0,B,[Cp],0,3,0,0,["bK",A9s(ASv)],ADL,0,B,[Cp],0,3,0,0,["bK",A9s(AZ3)],ZC,0,B,[Cp],
0,3,0,0,["bK",A9s(ATt)],AHP,0,B,[Cp],0,3,0,0,["bK",A9s(A3o)],AEv,"BinaryDiffWindow",28,DM,[ES],0,3,[0,0,0],0,["q$",A9s(A3Y),"qe",A9s(AS0),"g0",A9u(AQz),"D5",A9s(AYN),"bx",A9s(A5v),"ly",A9t(A0$),"bo",A9t(AZp)],Qq,0,B,[Cp],0,3,0,0,["bK",A9s(AYV)],Q9,0,B,[R],0,3,0,0,["e",A9t(A4h)],AAk,0,B,[Q],0,3,0,0,["d",A9s(A10)],AAl,0,B,[Q],0,3,0,0,["d",A9s(A7e)],QR,0,B,[R],0,3,0,0,["e",A9t(A2M)],QP,0,B,[R],0,3,0,0,["e",A9t(AX0)],Lt,0,EE,[],0,3,0,0,["hX",A9s(AYe),"cz",A9v(AYP),"dm",A9t(AYs),"ce",A9u(AUJ),"gU",A9s(A2S),"ev",
A9u(A1n)],AJq,0,B,[],0,3,0,0,0,AQi,0,B,[],0,3,0,0,0,AHN,0,B,[Q],0,3,0,0,["d",A9s(AZE)],AHO,0,B,[Q],0,3,0,0,["d",A9s(A2a)],AAV,0,B,[R],0,3,0,0,["e",A9t(AUZ)]]);
$rt_metadata([AEs,0,B,[Q],0,3,0,0,["d",A9s(ARo)],AOK,0,B,[],0,3,0,0,0,AEe,0,B,[Q],0,3,0,0,["d",A9s(AZF)],AMt,0,B,[],0,3,0,0,0,ABA,0,B,[],1,3,0,0,0,AD4,0,F1,[],0,3,0,0,["rB",A9t(APm),"vH",A9s(AXY)],Tt,0,B,[],3,3,0,0,0,IQ,0,B,[],3,3,0,0,["rb",A9t(AVh)],Rq,"SelectFileTest$1",9,B,[IQ],0,0,[LK,0,0],0,["rb",A9t(AVh),"p9",A9t(A4C),"rt",A9t(A1$),"m4",A9s(AWJ)],AD2,0,B,[R],0,3,0,0,["e",A9t(AZB)],AD1,0,B,[R],0,3,0,0,["e",A9t(A0V)],ALs,0,B,[],3,3,0,0,0,AFu,0,B,[Q],0,3,0,0,["d",A9s(A5P)],Wf,0,B,[Bx],0,3,0,0,["G",A9t(A4m)],Mw,
0,B,[],3,3,0,0,0,ALk,0,B,[Mw],0,3,0,0,0,AFs,0,B,[Q],0,3,0,0,["d",A9s(AYn)],ABw,0,B,[C8],0,3,0,0,["fp",A9u(A1T)],ABx,0,B,[R],0,3,0,0,["e",A9t(AYD)],J5,0,G8,[],0,0,0,0,0,XE,0,B,[MH],0,3,0,0,["D3",A9t(Ox)],AOZ,0,B,[C8],0,3,0,0,0,AIz,0,B,[R],0,3,0,0,["e",A9t(A0o)],AC9,0,B,[R],0,3,0,0,["e",A9t(AVZ)],AGL,0,B,[],0,3,0,0,0,Q5,0,B,[R],0,3,0,0,["e",A9t(ANi)],AIF,0,B,[R],0,3,0,0,["e",A9t(A4J)],AIG,0,B,[R],0,3,0,0,["e",A9t(A51)],YD,0,B,[Bx],0,3,0,0,0,AGC,0,B,[Mj,Pk],4,3,0,0,0,Zy,0,B,[R],0,3,0,0,["e",A9t(ARP)],SV,0,B,[R],
0,3,0,0,["e",A9t(A2h)],AEl,0,B,[R],0,3,0,0,["e",A9t(ATX)],AIu,0,B,[R],0,3,0,0,["e",A9t(A5A)],AIt,0,B,[R],0,3,0,0,["e",A9t(AR3)],AFI,"TestWalker",14,B,[IQ],0,3,[0,0,0],0,["rb",A9t(AVh),"p9",A9t(A5y),"rt",A9t(AVd),"m4",A9s(A0Q)],UI,0,B,[R],0,3,0,0,0,F9,"ScopeNode",20,B,[],0,3,[0,0,0],0,0,Y3,0,B,[R],0,3,0,0,["e",A9t(AS9)],OO,"FakeNode",20,F9,[],0,3,[0,0,0],0,0,LT,"MemberNode",20,F9,[],0,3,[0,0,0],0,0,XY,0,B,[R],0,3,0,0,["e",A9t(A1f)],XX,0,B,[R],0,3,0,0,["e",A9t(AXP)],APi,0,B,[],0,3,0,0,0,B$,0,B,[DC,CO],4,3,0,AOM,
0,FS,0,B,[Q],0,3,0,AMu,0,YI,0,B,[],0,3,0,A8Q,0,XV,0,B,[R],0,3,0,0,["e",A9t(AZH)],SO,"InferenceNode",20,B,[],0,3,[0,0,0],0,0,RV,0,B,[R],0,3,0,0,["e",A9t(A3q)]]);
$rt_metadata([S3,0,B,[R],0,3,0,0,["e",A9t(A5k)],F2,0,B,[],0,3,0,0,0,AM_,0,B,[],0,3,0,0,0,If,0,C$,[CB],0,3,0,0,0,GO,0,B,[],4,3,0,0,0,ANI,0,B,[],4,0,0,0,0,QZ,0,B,[],3,3,0,0,0,Uy,0,B,[QZ],0,3,0,0,0,Op,0,CX,[],1,0,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Xb,0,Op,[],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Pj,0,Eq,[],1,0,0,0,0,W9,0,Pj,[],0,0,0,0,0,PI,0,EF,[Jt],1,0,0,0,["eT",A9t(AYX),"i2",A9s(A0J),"os",A9t(AUP),"st",A9t(ATW)],W$,0,PI,[],0,0,0,0,["eT",A9t(AYX),"kp",A9t(AUX),"cT",A9s(AUa),"bu",A9s(ASy),"dv",A9s(ARb)],W7,0,B,
[D3],0,0,0,0,["b0",A9s(AQU),"bG",A9s(A3_),"r6",A9s(AWG)],ABy,0,B,[D3],3,3,0,0,0,W8,0,B,[ABy],0,0,0,0,0,Zn,0,B,[Gk],0,3,0,0,0,Tq,0,B,[DE],0,3,0,0,["bn",A9t(A7t)],L2,0,F1,[],1,3,0,0,0,TQ,0,L2,[],0,3,0,0,0,AA$,0,B,[DE],0,3,0,0,["bn",A9t(A4r)],AGj,0,B,[R],0,3,0,0,["e",A9t(AT5)],S7,0,B,[Tt],0,3,0,0,0,AGr,0,B,[B8],0,0,0,0,["bh",A9t(AV_)],Sc,0,CX,[],0,0,0,0,["st",A9t(A2A),"bu",A9s(AUf),"eT",A9t(A1A)],Zu,0,B,[R],0,3,0,0,["e",A9t(A1i)],WW,0,B,[R],0,3,0,0,["e",A9t(A26)],K4,"DeclNode",22,B,[],0,3,[0,0,0],0,["I",A9s(A5r),
"U",A9t(AOT)],M7,"MethodNode",22,K4,[],0,3,[0,0,0],0,["U",A9t(AZ6)],Fm,"RefNode",21,B,[],0,3,[0,0,0],0,["I",A9s(AXW),"U",A9t(ANd)],HX,"ExprRefNode",21,Fm,[],0,3,[0,0,0],0,["I",A9s(A3D)],KF,"MethodCallNode",21,Fm,[],0,3,[0,0,0],0,["U",A9t(A6A)],JS,"QualifiedRefNode",21,Fm,[],0,3,[0,0,0],0,["I",A9s(AVb),"U",A9t(AZk)],Ws,0,CX,[],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Sd,0,EH,[],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A)],Tl,0,B,[R],0,3,0,0,["e",A9t(A4b)],RX,0,B,[Q],0,3,0,0,["d",A9s(AUQ)],RY,0,B,[Q],0,3,0,0,["d",A9s(ATp)],RZ,
0,B,[Q],0,3,0,0,["d",A9s(A5p)],R0,0,B,[Q],0,3,0,0,["d",A9s(ARn)],US,0,B,[Q],0,3,0,0,["d",A9s(AXj)],UQ,0,B,[Q],0,3,0,0,["d",A9s(A3g)],UO,0,B,[Q],0,3,0,0,["d",A9s(A4t)],TM,0,B,[Q],0,3,0,0,["d",A9s(A6D)],TO,0,B,[Q],0,3,0,0,["d",A9s(A2E)],QK,0,B,[Q],0,3,0,0,["d",A9s(A4v)],S6,0,B,[],3,3,0,0,0,AGH,0,B,[Q],0,3,0,0,["d",A9s(A20)],AGE,0,B,[Q],0,3,0,0,["d",A9s(AZi)]]);
$rt_metadata([AGG,0,B,[Q],0,3,0,0,["d",A9s(A5u)],AGI,0,B,[Q],0,3,0,0,["d",A9s(A14)],AGJ,0,B,[Q],0,3,0,0,["d",A9s(AVi)],ZO,0,B,[Q],0,3,0,0,["d",A9s(ARc)],VK,0,B,[Eg],0,3,0,0,["eA",A9v(A3s)],VL,0,B,[Eg],0,3,0,0,["eA",A9v(A13)],UL,0,B,[Eg],0,3,0,0,["eA",A9v(A3Z)],UK,0,B,[DE],0,3,0,0,["bn",A9t(AX8)],UJ,0,B,[DE],0,3,0,0,["bn",A9t(AWe)],UN,0,B,[Eg],0,3,0,0,["eA",A9v(A3z)],Vd,0,B,[B8],0,3,0,0,["bh",A9t(A4p)],ZJ,0,B,[],0,3,0,0,0,TW,0,B,[],0,3,0,0,0,AIs,0,B,[R],0,3,0,0,["e",A9t(A0w)],Ty,0,B,[Q],0,3,0,0,["d",A9s(A27)],Tz,
0,B,[Q],0,3,0,0,["d",A9s(A2Z)],Tx,0,B,[Q],0,3,0,0,["d",A9s(AXK)],VR,0,B,[Q],0,3,0,0,["d",A9s(A2y)],VT,0,B,[Q],0,3,0,0,["d",A9s(A3h)],ADK,0,B,[Cp],0,3,0,0,["bK",A9s(A3Q)],AC1,0,B,[Q],0,3,0,0,["d",A9s(ARd)],AC0,0,B,[Q],0,3,0,0,["d",A9s(ASd)],Wx,0,B,[Q],0,3,0,0,["d",A9s(A5L)],Wz,0,B,[Q],0,3,0,0,["d",A9s(AR5)],WA,0,B,[Q],0,3,0,0,["d",A9s(ATo)],Wu,0,B,[Q],0,3,0,0,["d",A9s(A5w)],Wv,0,B,[Q],0,3,0,0,["d",A9s(AV$)],ADH,0,B,[Cp],0,3,0,0,["bK",A9s(A3y)],Zd,0,B,[R],0,3,0,0,["e",A9t(A31)],Ze,0,B,[R],0,3,0,0,["e",A9t(ASX)],AMg,
0,B,[CB],0,3,0,0,["U",A9t(AVu),"I",A9s(AOR)],ZW,0,B,[R],0,3,0,0,["e",A9t(A25)],Zc,0,B,[R],0,3,0,0,["e",A9t(A7p)],Wg,0,B,[Ij],0,3,0,0,0,AHk,0,B,[],0,3,0,0,0,AEy,0,B,[DE],0,0,0,0,["bn",A9t(A0R)],QU,0,B,[DE],0,3,0,0,["bn",A9t(AW0)],FY,0,B,[],0,0,0,0,["b0",A9s(HD)],AEq,0,FY,[D3],0,0,0,0,["bG",A9s(AR0)],Wh,0,FY,[D3],0,0,0,0,0,ACP,0,FY,[D3],0,0,0,0,0,AJh,0,B,[R],0,0,0,0,0,Vm,0,B,[Q],0,3,0,0,["d",A9s(A0N)],Vl,0,B,[Fu],0,3,0,0,["iw",A9t(ASm)],Xv,0,B,[Q],0,3,0,0,["d",A9s(AYr)],Xw,0,B,[Fu],0,3,0,0,["iw",A9t(AWI)],AGo,
0,B,[B8],0,3,0,0,["bh",A9t(AV6)],AMR,0,B,[],0,0,0,0,0,Tk,0,B,[Q],0,3,0,0,0,Yk,0,B,[C8],0,3,0,0,["fp",A9u(AU8)]]);
$rt_metadata([Yl,0,B,[R],0,3,0,0,["e",A9t(A4g)],ADZ,0,B,[R],0,3,0,0,["e",A9t(AUM)],ADY,0,B,[R],0,3,0,0,["e",A9t(A4B)],Zl,0,B,[Q],0,3,0,0,["d",A9s(A4O)],AHI,0,B,[Fu],0,3,0,0,["iw",A9t(ARF)],AHK,0,B,[Q],0,3,0,0,["d",A9s(A1b)],AEz,0,B,[Q],0,3,0,0,["d",A9s(A37)],AEA,0,B,[Q],0,3,0,0,["d",A9s(AYz)],Qa,0,B,[Q],0,3,0,0,["d",A9s(A09)],ZG,0,B,[B8],0,3,0,0,["bh",A9t(A4M)],Qk,0,B,[B8],0,3,0,0,["bh",A9t(A4K)],Zv,0,CP,[],0,3,0,0,0,AAX,0,B,[R],0,3,0,0,["e",A9t(A0C)],GL,"DefDeclProvider$Type",9,Cj,[],12,0,[Or,0,"Type"],U4,
0,Sv,0,B,[R],0,3,0,0,["e",A9t(A6C)],IE,"DirectoryNode",25,Dr,[],0,3,[0,0,0],0,["I",A9s(AXX),"oH",A9s(AYH)],AFK,0,B,[Q],0,3,0,0,["d",A9s(AQ8)],AEY,0,B,[],32,0,0,A8Y,0,Vp,0,B,[Q],0,3,0,0,["d",A9s(A1w)],XS,0,B,[R],0,3,0,0,["e",A9t(A2c)],XT,0,B,[R],0,3,0,0,["e",A9t(A5l)],La,"FileNode",25,Dr,[],0,3,[0,0,0],0,["I",A9s(AR7),"oH",A9s(AZs)],Td,0,Bt,[],0,3,0,0,0,YJ,0,Bt,[],0,3,0,0,0,WY,0,Gj,[],0,3,0,0,0,S4,0,Gj,[],0,3,0,0,0,AF8,0,B,[],0,3,0,0,0,AIg,0,CX,[],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A),"bu",A9s(ASF)],AH2,0,B,[BV],
3,3,0,0,0,AGq,0,B,[AH2],0,3,0,0,["PA",A9s(AZj)],AKP,0,B,[BV],3,3,0,0,0,UX,0,B,[R],0,3,0,0,["e",A9t(A1G)],ACN,0,B,[Bx],0,3,0,0,["G",A9t(A5O)],AOI,0,B,[],4,3,0,0,0,Vy,0,B,[R],0,3,0,0,["e",A9t(AWX)],Sb,0,B,[Og],0,3,0,0,["G2",A9s(ASB),"AE",A9s(AQD),"yS",A9t(AWV),"pY",A9t(AVy)],ACl,0,B,[R],0,3,0,0,["e",A9t(ART)],ABj,0,B,[R],0,3,0,0,["e",A9t(ARa)],Z3,0,B,[R],0,3,0,0,0,ABm,0,B,[R],0,3,0,0,0,ADX,0,B,[Lx],0,0,0,0,["uR",A9u(ARz),"Ek",A9t(AT8),"B2",A9t(AYG),"y6",A9t(AYT)],Vq,0,B,[],0,3,0,0,0,Lo,0,B,[],3,3,0,0,0,AGi,0,
B,[Lo],0,3,0,0,0,Ul,0,B,[Q],0,3,0,0,["d",A9s(AVA)],CK,0,Bq,[],0,3,0,0,0,RW,0,CK,[],0,3,0,0,0,AEU,0,B,[C8],0,3,0,0,0,Rv,0,B,[],3,3,0,0,0,AA0,0,B,[Rv],3,3,0,0,0]);
$rt_metadata([AO6,0,B,[AA0],0,3,0,0,0,AO7,0,B,[Cp],0,3,0,0,0,AO5,0,B,[Bx],0,3,0,0,0,EG,"Collector$Characteristics",2,Cj,[],12,3,[AAS,0,0],A0j,0,AAS,0,B,[],3,3,0,0,0,Ub,0,B,[R],0,3,0,0,["e",A9t(AS2)],Xl,0,B,[R],0,3,0,0,["e",A9t(A0v)],Dh,0,B,[],3,3,0,ALL,0,Cz,"IdeaCodeColors$ElementsLight",12,Cj,[],12,3,[AJe,0,"ElementsLight"],AK9,0,Eb,0,B,[],3,3,0,AZn,0,Qc,0,CK,[],0,3,0,0,0,AMr,0,CK,[],0,3,0,0,0,Hw,0,C$,[CB],0,3,0,0,0,ACB,0,CK,[],0,3,0,0,0,AIP,0,CK,[],0,3,0,0,0,AI_,0,B,[DC],0,3,0,0,0,K8,0,B,[CO,DC],1,3,0,0,0,Ny,
0,K8,[],1,3,0,0,0,Jc,0,Ny,[],0,3,0,0,0,Ua,0,B,[],3,3,0,0,0,P4,0,CX,[DC,CO],1,3,0,0,["eT",A9t(AYX),"st",A9t(A2A)],AKJ,0,B,[AAS],0,0,0,0,0,AFe,0,CK,[],0,3,0,0,0,AJp,0,CK,[],0,3,0,0,0,T5,0,CK,[],0,3,0,0,0,PS,0,P4,[],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A),"hZ",A9t(A4Y)],Q3,0,EF,[Jt],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A),"kp",A9t(AYW),"cT",A9s(AVv)],Dw,0,B,[],3,0,0,0,0,ZF,"DecimalFormat$TextField",4,B,[Dw],0,0,[Jc,0,0],0,["U",A9t(A0s)],DO,"RoundingMode",3,Cj,[],12,3,[0,0,0],AOC,0,NL,0,B,[CO],4,3,0,0,["I",A9s(AQq)],PR,
0,B,[],4,3,0,0,0,VJ,0,B,[D3],0,0,0,0,["b0",A9s(AWa),"bG",A9s(A2C)],AQn,0,B,[],3,3,0,0,0,Vx,0,B,[DE],0,3,0,0,["bn",A9t(ARv)],X7,0,B,[DE],0,3,0,0,["bn",A9t(AUn)],AJm,0,B,[],3,3,0,0,0,Ui,0,B,[],0,3,0,0,0,XJ,0,B,[Q],0,3,0,0,0,XL,0,B,[Lo],0,3,0,0,0,AIm,0,B,[C8],0,3,0,0,0,ZP,0,B,[],0,0,0,0,0,AEt,"DirectoryNode$1",25,B,[IQ],0,0,[IE,0,0],0,["p9",A9t(A54),"rt",A9t(AXC),"m4",A9s(A6j),"rb",A9t(A2$)],AED,0,B,[Q],0,3,0,0,["d",A9s(A2z)],VI,0,B,[R],0,3,0,0,0,VU,0,B,[R],0,3,0,0,["e",A9t(A01)],Xd,0,B,[],3,3,0,0,0,AK6,0,B,[],
3,3,0,0,0,AJn,0,B,[],4,3,0,0,0,WX,0,B,[],0,3,0,0,0]);
$rt_metadata([AN3,0,B,[],4,3,0,0,0,Tf,0,CX,[],0,0,0,0,["eT",A9t(AYX),"st",A9t(A2A)],KI,"DecimalFormat$MinusField",4,B,[Dw],0,0,[Jc,0,0],0,["U",A9t(AVr)],RQ,0,B,[LR],0,3,0,0,["wk",A9u(ASp),"uW",A9v(A4e)],O2,"DecimalFormat$PerMillField",4,B,[Dw],0,0,[Jc,0,0],0,["U",A9t(AZC)],LU,"DecimalFormat$CurrencyField",4,B,[Dw],0,0,[Jc,0,0],0,["U",A9t(ARU)],M8,"DecimalFormat$PercentField",4,B,[Dw],0,0,[Jc,0,0],0,["U",A9t(ASE)],TZ,0,B,[Q],0,3,0,0,["d",A9s(A6I)],ACK,0,B,[R],0,3,0,0,["e",A9t(A1M)],R3,0,B,[R],0,3,0,0,["e",A9t(AVP)],R1,
0,B,[R],0,3,0,0,["e",A9t(A3b)],AMF,0,B,[D3],0,0,0,0,0,AOc,0,B,[],0,3,0,0,0,AHg,0,B,[R],0,3,0,0,["e",A9t(AWF)],AH9,0,B,[],3,3,0,0,0,AIf,0,B,[AH9],0,3,0,0,0,AO9,0,B,[],3,3,0,0,0,Ux,0,B,[],3,3,0,0,0,AIe,0,B,[Ux],0,3,0,0,0,AIC,0,B,[Q],0,3,0,0,["d",A9s(A2x)],ACQ,0,B,[R],0,3,0,0,["e",A9t(AQ6)],ACM,0,B,[R],0,3,0,0,["e",A9t(AZQ)],TB,"MergeButtonsModel$getFolderModels$lambda$_2_0",9,B,[Q],0,3,[0,0,0],0,["d",A9s(A0D)],TA,"MergeButtonsModel$getFolderModels$lambda$_2_1",9,B,[Q],0,3,[0,0,0],0,["d",A9s(A5V)],AGF,0,B,[Mw],
0,3,0,0,0,Ss,0,B,[C8],0,3,0,0,["fp",A9u(A47)],St,0,B,[R],0,3,0,0,["e",A9t(A6$)],AGa,0,B,[R],0,3,0,0,["e",A9t(ASe)],M$,0,FO,[],0,3,0,0,0,Ln,0,M$,[],0,3,0,0,["c4",A9t(ARl)]]);
function $rt_array(cls,data){this.a6o=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","connectToDom: called on already connected","#wasmDemo","#diffDemo","","FATAL: WebGL is not enabled in the browser","javaClass@","[]","null","false","true","JetBrains Mono","Either src or dest is null","0"," is not subtype of ","[",", ","]","navigator.clipboard is undefined","Illegal argument sent to worker ","keydown","keyup","mousemove","mousedown","mouseup","mouseenter","mouseleave","wheel","click","contextmenu","focus","blur","drop",
"paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","WebGraphics::ctor finish"," ",".","oblique","mousemove position = ","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","----","vs <-> ps link error: ","compileProgram exit: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float debug = uBaseline.z;\n  float alpha = pow(1. - clamp(v + .5 + debug, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","Can\'t compare "," to ","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds",
"POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","classL.java","classR.java","selectScene ","CodiconDemo","CleartypeColors","ScissorDemo","LineShaderDemo1",
"LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FileDiff","FolderTransferDemo","MergeButtonsTest","SinDemo","WindowDemo","EditorInViewDemo","Editor0","Editor1","ProjectViewDemo","test","UiToolsDemo","FileTreeDemo","FindUsagesDemo","DemoScene1","EditorWindowDemo","DrawTextureTest","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","LineNumbersTest","FolderDiffScene","DiffMiddleDemo","VScrollTest"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n",
"measured = ","Consolas","#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","#3C3F41","#4B6EAF","#BBBBBB","#DEDEDE","#0D293E","#ffffff11","#6C6C6C","#629755","#6897BB","#848504","#606366","#A4A3A3","#ff0000","#00ff00","#0000ff","#8c000f","#484A4A","#294436","#303C47","#385570","#2B2D30","#2E436E","#DFE1E5","#43454A","#6F737A","#73BD79","#70AEFF","#D69A6B","#4B5059","#A1A3AB","#283541","#F7F8FA","#D4E2FF","#000000","#00000011",
"#6C707E","#067D17","#0033B3","#8C4F00","#AEB3C2","#767A8A","#B9BDC9","#D6D6D6","#BEE6BE","#E7EFFA","#C2D8F2","#C8C8C8","#AADEAA","#B6D2F2","Code review","opening file ","Select left...","Select right...","ns-resize","ew-resize","#616161","#393B40","#656E76","#447152","#43698D","FileDiffRootView.setDiffModel: time = ","ms","DiffUtils.findDiffs","Navigated on lines "," and ","nwse-resize","nesw-resize",", z = ",", w = ","#BCBEC4","#313438","#1E1F22","#214283","#373B39","#402F33","#26282E","defaultText","keyword",
"#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E426D","#4D4E51","...","Usages of ","  ","LineNumbersComponent.measureDigits: fontDesk is null","drawTails = ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\n","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java",
"JavaProxy.parseViewport","FileDiffRootView.fullFileParseListener: left = ",", time = "," - ","Diff image size mismatch","EditorComponent.setDisableParser: ","Full file parsed","%s/%s in %dms","ScopeUtils.resolveAll","Model.requestParseFile","activity","json","html","asyncLexer","asyncFullParseFile","/Model::parseFullFile","js","ts","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","TypeScriptProxy.parseFullFile","ActivityParser.parseFullFile","HtmlProxy.parseFullFile","JsonProxy.parseFullFile",
"TextProxy.parseFullFile","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","#A9B7C6","#344134","#40332B","#323232","(this Collection)","DELETED","INSERTED","EDITED","DEFAULT"," -"," bold"," italic","\\n","[%d: %d) |-> [%d: %d)","Courier New","✔✖ ✔️❌ \ud83d\uddd9 jsCanvas","canvas.getFont() = ","✔✖ ✔️❌ \ud83d\uddd9 ХуавэЙ 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+",": ","main.java",
"private static void foo (...);","Window 1: ","open folder ...","open file ...","read file in pages","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","","codicon.pixel.size = ","w = ","BinView ","measured1 = ",", measured2 = ","- to worker ","- to edt ","folder","file","objects[","] = ","Project root","FileTreeView model size = ","new folder diff window","new file diff window","new code review window","new project view","new editor window","new binary diff",
"wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","setCompactViewModel: ","Ctrl P -> parseFullFile","onDiffMade: line=",", lineCount = ","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.",
"fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text"," on Copy","addWindow","addBinDiff","] BooleanConsumer(",") #","scrollPos = "," ... "," ↔ "," - finished in ","s, foldersCompared: ",", filesCompared: ","Compared in "," ms","Total updates ","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","/","#787878","onEnter item ","WorkerTest: \n  got ","  methodWithStringResult = ",
"charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","Wrong number of lines: ",", expected: ","File is already compared","childrenComparedCnt cannot be greater than children.length","GRAYSCALE","RGBA","#CC7832","#9876AA","#6A8759","#72737A","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","draw: mbWidth == 0","JsArrayView{ buffer.byteLength = "," }",".cpp",".cc",".cxx",".hpp",".c",".h",".java",
".js",".mjs",".cjs",".ts",".activity",".html",".xml",".json","Illegal language: ","] Runnable #","eof","trying to display with unknown screen size and dpr","Full file lexed","asyncParseFile"," readClipboardText: "," writeClipboardText \'","\' ok","onPopupClosed"," error: ","pageIndex = 4080","point to the file generated by org.sudu.experiments.FileTestGen","Window "," visible"," onPastePlainText: ","EditorWindow.focus","Open ...","Open project...","Project view","Open project ...","request new model, file = ",
"request in progress ","viewLine < 0","newAction must be non-null","FindUsagesView.onKeyPress: font is null","BinaryDiffView.layout: dpr == 0","The last byte in dst ","Folder ","ClassFile ","error reading size of right file: ","error reading size of left file: ","dir: ","showOpenFilePicker -> ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Align With...","Remove Diff Alignment","rendering debug","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease",
"Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Development >","Int","Iter","VP","Resolve","Rep","parser >","open ...","font pow >","↓ move","■ stop","↑ move","toggleXOffset","toggleTails","toggleCodeLineRemap","No definition or usages","fib(",") result = ",") time = ","open file ","BinDataCache: double fetch at address ","requestMap.remove(address) failed","BinDataCache: error fetching data at ","/Model::onFileIterativeParsed","Viewport parsed","readLargeFilePages -> ","Expected ",
" ints to write, but "," written","openFile: ","dir = ","asyncWithDir","openFileEdt: ","dir on edt = ","TestWalker: Thread.currentThread() = ","open left","open right","] ScrollContentDemo.onMouseLeaveWindow: ","Illegal length of parser result array"," read directory error: ","  sub dir: ","  file: ","complete","file = ","file.content.length = ","asyncReadBinFile","asyncStats","gbk","]: hash = 0x",", l = ","hash test passed","passCnt = ","failCnt = ","File structure parsed","dir[",", list.size = ","file[","asyncWithDir complete, size = ",
" ints to read, but "," read","en","CA","fr","zh","CN","FR","de","DE","it","IT","ja","JP","ko","KR","TW","GB","US","main","Unknown scope type: ","Resolved","openDirectory: "," - project view","readClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","open dir = ","startTime = "," - scan in progress ...","Current Version: ","Last Parsed Version: ","Can\'t convert code point "," to char","Currency not found: ","This exception should not been thrown","0x","+ ","0-","Missing format with for specifier ",
"--#+ 0,(<","Illegal format flags "," for conversion ","Duplicate format flags: ","DEF","DECL","unexpected bytes length: ","SelectFileTest.readAfterEndOfFile: ","eof test passed","writeClipboardText error: ","opening file ... ","folderOpened ","readDirectory: ","Unknown format conversion: ","CONCURRENT","UNORDERED","IDENTITY_FINISH","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#F5F8FE","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#FFFFFF","#818594","#080808","Illegal precision: ",
"Can\'t format argument of "," using "," conversion","Positive number pattern not found in ","Expected \';\' at "," in ","Illegal format flags: ","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY","asyncCompareFolders","asyncSizeScanner","asyncCompareFiles","asyncReadFolder","inComparing cannot be negative","Prefix contains special character at ","Quote opened at "," was not closed in ","Group separator found at fractional part at ","Unexpected second decimal separator at ","Unexpected \'0\' at optional digit part at ",
"Unexpected char at exponent at ","Pattern does not specify exponent digits at ","Unexpected \'#\' at non-optional digit part at ","Two group separators at ","Pattern does not specify integer digits at ","Group separator at the end of number at ","DirectoryNode.onError: error while reading folder ","fullPath = ",", encoding = ","Error fetching file "]);
BH.prototype.toString=function(){return $rt_ustr(this);};
BH.prototype.valueOf=BH.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AJo(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var C3=Long_add;var AC4=Long_sub;var Cg=Long_mul;var ALx=Long_div;var AY8=Long_rem;var A7F=Long_or;var Dq=Long_and;var Bb$=Long_xor;var H5=Long_shl;var A8L=Long_shr;var C2=Long_shru;var AT2=Long_compare;var Er=Long_eq;var ASK=Long_ne;var A7E=Long_lt;var ASz=Long_le;var Bb_=Long_gt;var Bca=Long_ge;var Bcb=Long_not;var A3r=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A8V);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AE$.prototype;c.f=c.bh;c=AKW.prototype;c.postMessage=c.Pf;c=AE_.prototype;c.f=c.bh;c=AE9.prototype;c.f=c.bh;c=SU.prototype;c.f=c.bh;c=AOo.prototype;c.get=c.SW;Object.defineProperty(c,"length",{get:c.a0q});c=AM3.prototype;c.createEntityReference=c.V4;c.getElementById=c.YL;c.createTextNode=c.Yr;c.hasChildNodes=c.Xj;c.querySelectorAll=c.VI;c.removeChild=c.Z8;c.cloneNode=c.MF;c.createComment=c.a1s;c.insertBefore=c.Wt;c.getElementsByTagNameNS=c.a0m;c.hasAttributes=c.P4;c.normalize=c.TC;c.hasChildNodesJS
=c.Tv;c.getElementsByTagName=c.SV;c.appendChild=c.UF;c.createAttributeNS=c.Y4;c.dispatchEvent=c.Tj;c.replaceChild=c.Nq;c.createElementNS=c.OL;c.createCDATASection=c.Sa;c.querySelector=c.P3;c.createElement=c.Zy;c.isSupported=c.a0c;c.importNode=c.WH;c.removeEventListener=c.OG;c.createAttribute=c.Tk;c.createDocumentFragment=c.LY;c.createProcessingInstruction=c.VZ;c.addEventListener=c.Ro;Object.defineProperty(c,"nodeName",{get:c.UE});Object.defineProperty(c,"documentElement",{get:c.PG});Object.defineProperty(c,
"childNodes",{get:c.RT});Object.defineProperty(c,"prefix",{get:c.WP,set:c.a1M});Object.defineProperty(c,"implementation",{get:c.SA});Object.defineProperty(c,"textContent",{get:c.a1A,set:c.Yn});Object.defineProperty(c,"parentNode",{get:c.YI});Object.defineProperty(c,"nextSibling",{get:c.Pv});Object.defineProperty(c,"nodeType",{get:c.ZU});Object.defineProperty(c,"doctype",{get:c.XB});Object.defineProperty(c,"localName",{get:c.a0J});Object.defineProperty(c,"nodeValue",{get:c.O9,set:c.a1i});Object.defineProperty(c,
"firstChild",{get:c.S9});Object.defineProperty(c,"lastChild",{get:c.Rt});Object.defineProperty(c,"previousSibling",{get:c.Us});Object.defineProperty(c,"namespaceURI",{get:c.NM});Object.defineProperty(c,"attributes",{get:c.WV});Object.defineProperty(c,"ownerDocument",{get:c.NX});c=YH.prototype;c.f=c.bh;c=YG.prototype;c.f=c.bh;c=ANy.prototype;c.removeEventListener=c.N2;c.dispatchEvent=c.Wy;c.addEventListener=c.QR;c=AIE.prototype;c.f=c.bh;c=WN.prototype;c.onAnimationFrame=c.P7;c=WK.prototype;c.f=c.G9;c=WM.prototype;c.handleEvent
=c.cl;c=AG7.prototype;c.handleEvent=c.cl;c=AG8.prototype;c.handleEvent=c.cl;c=AG9.prototype;c.handleEvent=c.cl;c=AG$.prototype;c.handleEvent=c.cl;c=AG_.prototype;c.handleEvent=c.cl;c=AHa.prototype;c.handleEvent=c.cl;c=AHb.prototype;c.handleEvent=c.cl;c=AHc.prototype;c.handleEvent=c.cl;c=AHd.prototype;c.handleEvent=c.cl;c=AHe.prototype;c.handleEvent=c.cl;c=Y7.prototype;c.handleEvent=c.cl;c=Y8.prototype;c.handleEvent=c.cl;c=Y9.prototype;c.handleEvent=c.cl;c=Y$.prototype;c.handleEvent=c.cl;c=Y5.prototype;c.handleEvent
=c.cl;c=Y6.prototype;c.handleEvent=c.cl;c=AFF.prototype;c.handleEvent=c.cl;c=AEx.prototype;c.f=c.bh;c=ABd.prototype;c.f=c.bh;c=ABe.prototype;c.f=c.bh;c=Tw.prototype;c.accept=c.Tr;c=Z7.prototype;c.f=c.bh;c=Z6.prototype;c.f=c.bh;c=Z5.prototype;c.f=c.bh;c=Z4.prototype;c.f=c.bh;c=QB.prototype;c.f=c.bh;c=QD.prototype;c.f=c.bh;c=QC.prototype;c.f=c.bh;c=ABi.prototype;c.f=c.G9;c=ABg.prototype;c.f=c.G9;c=AHS.prototype;c.f=c.bh;c=R5.prototype;c.f=c.bh;c=AH7.prototype;c.f=c.bh;c=AH6.prototype;c.f=c.bh;c=AHq.prototype;c.f
=c.bh;c=AHp.prototype;c.f=c.bh;c=Vj.prototype;c.f=c.bh;c=V4.prototype;c.handleEvent=c.cl;c=AGr.prototype;c.f=c.bh;c=Vd.prototype;c.f=c.bh;c=AGo.prototype;c.f=c.bh;c=ZG.prototype;c.f=c.bh;c=Qk.prototype;c.f=c.bh;c=AGq.prototype;c.onTimer=c.PA;})();
})(typeof self!=='undefined'?self:typeof global!=='undefined'?global:this,typeof self!=='undefined'?self:typeof global!=='undefined'?global:this);