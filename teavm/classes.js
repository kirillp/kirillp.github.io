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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.fs=f;}
function $rt_cls(cls){return AEN(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gd(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b_.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASe(t);}
function $rt_throwableCause(t){return ASm(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AYz());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AYA(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AYB());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BG=$rt_compare;var AYC=$rt_nullCheck;var F=$rt_cls;var R=$rt_createArray;var Jg=$rt_isInstance;var AYD=$rt_nativeThread;var AYE=$rt_suspending;var AYF=$rt_resuming;var AYG=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var W=$rt_imul;var Er=$rt_wrapException;var AYH=$rt_checkBounds;var AYI=$rt_checkUpperBound;var AYJ=$rt_checkLowerBound;var AYK=$rt_wrapFunction0;var AYL=$rt_wrapFunction1;var AYM=$rt_wrapFunction2;var AYN=$rt_wrapFunction3;var AYO=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ADw=$rt_createCharArrayFromData;var AXd=$rt_createByteArrayFromData;var AYv=$rt_createShortArrayFromData;var Em=$rt_createIntArrayFromData;var AYP=$rt_createBooleanArrayFromData;var AYQ=$rt_createFloatArrayFromData;var AYR=$rt_createDoubleArrayFromData;var ABO=$rt_createLongArrayFromData;var AYy=$rt_createBooleanArray;var D7=$rt_createByteArray;var AYS=$rt_createShortArray;var BU=$rt_createCharArray;var BM=$rt_createIntArray;var AYT=$rt_createLongArray;var AHP=$rt_createFloatArray;var AYU
=$rt_createDoubleArray;var BG=$rt_compare;var AYV=$rt_castToClass;var AYW=$rt_castToInterface;var AYX=Long_toNumber;var Bp=Long_fromInt;var AYY=Long_fromNumber;var D=Long_create;var E$=Long_ZERO;var AYZ=Long_hi;var GB=Long_lo;
function B(){this.$id$=0;}
function AY0(){var a=new B();AF1(a);return a;}
function AF1(a){}
function BI(a){return AEN(a.constructor);}
function AO1(a,b){return a!==b?0:1;}
function AJM(a){var b,c,d,e,f,g,h,i,j;b=JK(a);if(!b)c=C(0);else{d=(((32-O1(b)|0)+4|0)-1|0)/4|0;e=BU(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HL((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gd(e);}j=new M;O(j);H(H(j,C(1)),c);return N(j);}
function JK(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOf(a){var b,c,d;if(!Jg(a,Ef)&&a.constructor.$meta.item===null){b=new Xm;Y(b);K(b);}b=AHZ(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tj(){var a=this;B.call(a);a.w9=0;a.sK=null;}
function AXu(b){var c,d,e,f,g,h,i,j,k,l;AFZ();AA0();AD8();AFi();AHq();ACF();AEh();AF2();AC$();AEj();AAX();AE3();AE5();ADO();ACM();ADf();AGp();AB0();ADh();AA_();AEt();AFa();ABr();AHb();c=(ABe()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))QM(C(2),C(3));else{d=new Tj;BP(d);e=new Vp;e.up=d;f=new Oi;c=new $rt_globals.Worker("teavm/worker.js");g=new O5;g.qO=c;g.qP=e;g.qQ=f;e=Bl(g,"f");c.onmessage=e;h=I(Mt,[Kz(C(4),C(5),400),Kz(C(6),C(7),400),
Kz(C(8),C(5),700),Kz(C(9),C(7),700)]);b=R(Mt,1);b.data[0]=ATl(C(10),Fr(C(11),C(12)),C(5),400);b=(Mo(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.tQ;f=c.sB;k=new M;O(k);BL(H(H(k,C(13)),f),41);k=N(k);f=c.sv;l=c.qx;f=AL6($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BP(d);c=new Vq;c.vO=d;g=new Vo;e.then(Bl(c,"f"),Bl(g,"f"));}}
function ADT(b){var c,d,e,f,g,h,i,j,k;c=new Ui;d=new Tt;c.rD=new $rt_globals.TextDecoder("utf-16");e=new Xl;e.qs=c;c.ts=e;e=new Xi;e.xp=c;c.nD=e;f=new Xj;f.tm=c;c.v0=new $rt_globals.ResizeObserver(Bl(f,"f"));e=new Xg;e.pP=c;c.ox=e;c.jh=1;f=new QK;f.z$=null;f.kx=AY1;c.na=f;c.r9=b;f=new Xh;f.we=c;e=Bl(f,"f");b.onmessage=e;e=ADN();b.postMessage(e);c.op=(Ei()).getElementById("canvasDiv");b=ABe();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.d6
=b;c.op.appendChild(b);f=c.d6;e=AQq(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)QM(C(2),C(14));else{g=new Rc;e=c.d6;f=c.nD;g.d1=null;g.hT=e;g.ct=AXE(f);h=$rt_globals.window;i=R(Dw,14);j=i.data;k=new Ys;k.oY=g;j[0]=CX(g,e,C(15),k);f=new Yt;f.tY=g;j[1]=CX(g,e,C(16),f);f=new Yu;f.qh=g;j[2]=CX(g,e,C(17),f);f=new Yv;f.xi=g;j[3]=CX(g,e,C(18),f);f=new Yw;f.tf=g;j[4]=CX(g,e,C(19),f);f=new Yx;f.pn=g;j[5]=CX(g,e,C(20),f);k=new Yy;k.xA=g;j[6]=CX(g,e,C(21),k);k=new Yz;k.to=g;j[7]=CX(g,e,C(22),k);k=new YA;k.pA
=g;j[8]=CX(g,e,C(23),k);k=new YB;k.wo=g;j[9]=CX(g,e,C(24),k);k=new Z8;k.vE=g;j[10]=CX(g,e,C(25),k);k=new Z9;k.uj=g;j[11]=AEX(g,h,C(26),k,1);k=new Z$;k.n8=g;j[12]=CX(g,h,C(27),k);k=new Z_;k.wN=g;j[13]=CX(g,h,C(28),k);g.zt=AUM(i);ACX(g,e);c.mL=g;c.gN=AWZ(b,c.nD);ASQ(c.v0,c.d6);e=$rt_globals.window;g=c.ox;e.addEventListener("resize",Bl(g,"handleEvent"));c.fY=AD5(d,ACO(c));UY(c);}AFz(c);}
var Oc=G(0);
var Ns=G(0);
function Yn(){var a=this;B.call(a);a.lx=null;a.gw=null;}
function AEN(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Yn;c.gw=b;d=c;b.classObject=d;}return c;}
function IF(a){if(a.lx===null)a.lx=$rt_str(a.gw.$meta.name);return a.lx;}
function In(a){return a.gw.$meta.primitive?1:0;}
function IL(a){return AEN(a.gw.$meta.item);}
var AB6=G();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function LX(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ABI=G();
function AHZ(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AEQ(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AEQ(d[e],c))return 1;e=e+1|0;}return 0;}
function GW(){var a=this;B.call(a);a.ic=null;a.l9=null;a.j2=0;a.kC=0;}
function AY2(){var a=new GW();Y(a);return a;}
function AY3(a){var b=new GW();Bi(b,a);return b;}
function Y(a){a.j2=1;a.kC=1;}
function Bi(a,b){a.j2=1;a.kC=1;a.ic=b;}
function ALH(a){return a;}
function ASe(a){return a.ic;}
function ASm(a){var b;b=a.l9;if(b===a)b=null;return b;}
var Ee=G(GW);
var Bu=G(Ee);
function AYA(a){var b=new Bu();AUp(b,a);return b;}
function AUp(a,b){Bi(a,b);}
var ADR=G(Bu);
var CN=G(0);
var CG=G(0);
var Jq=G(0);
function BA(){var a=this;B.call(a);a.b_=null;a.iI=0;}
var AY4=null;var AY5=null;var AY6=null;function FC(){FC=Bq(BA);ATX();}
function AMB(){var a=new BA();AAP(a);return a;}
function Gd(a){var b=new BA();HW(b,a);return b;}
function EP(a,b,c){var d=new BA();Nb(d,a,b,c);return d;}
function AAP(a){FC();a.b_=AY4;}
function HW(a,b){FC();Nb(a,b,0,b.data.length);}
function Nb(a,b,c,d){var e;FC();e=BU(d);a.b_=e;DB(b,c,e,0,d);}
function M7(b){var c;FC();c=AMB();c.b_=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b_.data;if(b<c.length)return c[b];}d=new HJ;Y(d);K(d);}
function J(a){return a.b_.data.length;}
function Fy(a){return a.b_.data.length?0:1;}
function RE(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DB(a.b_,b,d,e,c);return;}}g=new BD;Y(g);K(g);}
function V0(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lh(a,b){if(a===b)return 1;return V0(a,b,0);}
function Eo(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function G8(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b_.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=IJ(b);h=Jj(b);while(true){f=a.b_.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Gl(a,b,c){var d,e,f,g,h;d=Bb(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b_.data[d]==e)break;d=d+(-1)|0;}return d;}f=IJ(b);g=Jj(b);while(true){if(d<1)return (-1);h=a.b_.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function ACw(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function RC(a,b,c){var d,e;d=Bb(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Cg(a,b,c){var d,e;d=BG(b,c);if(d>0){e=new BD;Y(e);K(e);}if(!d){FC();return AY5;}if(!b&&c==J(a))return a;return EP(a.b_,b,c-b|0);}
function Do(a,b){return Cg(a,b,J(a));}
function RQ(a,b,c){return Cg(a,b,c);}
function Fr(a,b){var c,d,e,f,g,h;if(Fy(b))return a;if(Fy(a))return b;c=BU(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return M7(c);}
function WT(a,b,c){var d,e,f,g;d=new M;O(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BL(d,P(a,f));}f=f+1|0;}H(d,Do(a,f));return N(d);}
function Tv(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cg(a,b,c+1|0);}
function AJJ(a){return a;}
function Fz(a){var b,c,d,e,f;b=a.b_.data;c=BU(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function C8(b){var c;FC();c=new M;O(c);return N(V(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BA))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function IV(a){var b,c,d,e;a:{if(!a.iI){b=a.b_.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.iI=(31*a.iI|0)+e|0;d=d+1|0;}}}return a.iI;}
function MK(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new G3;Bi(b,C(29));K(b);}AY7=1;d=new ST;d.lh=R(CT,10);d.gW=(-1);d.fe=(-1);d.bB=(-1);e=new G_;e.e_=1;e.bU=b;e.bi=BU(J(b)+2|0);DB(Fz(b),0,e.bi,0,J(b));f=e.bi.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.th=g;e.gD=0;Fj(e);Fj(e);d.h=e;d.dN=0;d.mh=ZU(d,(-1),0,null);if(!Dn(d.h)){b=new Jl;h=d.h;J4(b,C(30),h.bU,h.dn);K(b);}if(d.o3)d.mh.eK();b=BH();h=new T4;h.jd=(-1);h.lC=(-1);h.yo=d;h.vX=d.mh;h.jy=a;h.jd=0;g=J(a);h.lC=g;e=new WV;i=h.jd;j=d.gW;k=d.fe+1|0;l=d.bB+
1|0;e.im=(-1);m=j+1|0;e.p3=m;e.d5=BM(m*2|0);f=BM(l);e.ko=f;H1(f,(-1));if(k>0)e.l$=BM(k);H1(e.d5,(-1));ZN(e,a,i,g);h.cD=e;e.fP=1;n=0;m=0;if(!J(a)){f=R(BA,1);f.data[0]=C(30);}else{while(true){l=J(h.jy);if(!AA5(h))l=h.lC;e=h.cD;if(e.eD>=0&&AC3(e)==1){e=h.cD;e.eD=JH(e);if(JH(h.cD)==AFh(h.cD)){e=h.cD;e.eD=e.eD+1|0;}g=h.cD.eD;g=g<=l&&NA(h,g)?1:0;}else g=NA(h,h.jd);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BC(b,RQ(a,m,AG0(h)));m=ACJ(h);n=g;}a:{BC(b,RQ(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Br(b,
g)))break a;Ey(b,g);}}if(g<0)g=0;f=Id(b,R(BA,g));}return f;}
function ALX(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bb(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ATX(){AY4=BU(0);AY5=AMB();AY6=new UJ;}
var EY=G(GW);
var HM=G(EY);
var ADp=G(HM);
var D6=G();
function GC(){D6.call(this);this.bD=0;}
var AY8=null;var AY9=null;function ATG(a){var b=new GC();ACr(b,a);return b;}
function ACr(a,b){a.bD=b;}
function L5(b){return (OB(AYj(20),b,10)).cM();}
function Ke(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dj;Bi(b,C(31));K(b);}d=J(b);if(0==d){b=new Dj;Bi(b,C(32));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dj;Y(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=QG(P(b,f));if(i<0){j=new Dj;k=Cg(b,0,d);b=new M;O(b);H(H(b,C(33)),k);Bi(j,N(b));K(j);}if(i>=c){j=new Dj;l=Cg(b,0,d);b=new M;O(b);H(H(V(H(b,C(34)),c),C(35)),l);Bi(j,N(b));K(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dj;k=Cg(b,0,d);b=new M;O(b);H(H(b,C(36)),k);Bi(j,N(b));K(j);}b=new Dj;j=new M;O(j);V(H(j,C(37)),c);Bi(b,N(j));K(b);}
function Dh(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AY9===null){AY9=R(GC,256);c=0;while(true){d=AY9.data;if(c>=d.length)break a;d[c]=ATG(c-128|0);c=c+1|0;}}}return AY9.data[b+128|0];}return ATG(b);}
function AVa(a,b){if(a===b)return 1;return b instanceof GC&&b.bD==a.bD?1:0;}
function O1(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IY(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AN9(a,b){b=b;return BG(a.bD,b.bD);}
function AFZ(){AY8=F($rt_intcls());}
function GG(){var a=this;B.call(a);a.B=null;a.I=0;}
function AY$(){var a=new GG();O(a);return a;}
function AYj(a){var b=new GG();Gj(b,a);return b;}
function O(a){Gj(a,16);}
function Gj(a,b){a.B=BU(b);}
function OB(a,b,c){return ADF(a,a.I,b,c);}
function ADF(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ci(a,b,b+1|0);else{Ci(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=HL(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ci(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=HL($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AED(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ci(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ci(a,b,b+8|0);d=b;}else{Ci(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AY_;AEu(c,f);d=f.lH;g=f.lp;h=f.pg;i=1;j=1;if(h)j=2;k=9;l=ATq(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ci(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ACm(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ci(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ci(a,b,b+8|0);d=b;}else{Ci(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AZa;ADJ(c,f);g=f.mj;h=f.k_;i=f.oX;j=1;k=1;if(i)k=2;l=18;m=AQV(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ci(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ALf(p,E$))d=0;else{d=GB(AFs(g,p));g=AH4(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFs(p,Bp(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ATq(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQV(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=AZb.data;g=f.length-1|0;while(g>=0){if(H_(AH4(b,Ca(c,f[g])),E$)){d=d|e;c=Ca(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BL(a,b){return a.ni(a.I,b);}
function ZF(a,b,c){Ci(a,b,b+1|0);a.B.data[b]=c;return a;}
function Ki(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.B=OU(a.B,d);}
function N(a){return EP(a.B,0,a.I);}
function Zm(a,b,c,d){return a.mK(a.I,b,c,d);}
function N6(a,b,c,d,e){var f,g,h,i;Ci(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function I1(a,b){return a.lQ(b,0,b.data.length);}
function Ci(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.iz((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var Iu=G(0);
var M=G(GG);
function My(){var a=new M();AUY(a);return a;}
function AUY(a){O(a);}
function H(a,b){M9(a,a.I,b===null?C(38):b.cM());return a;}
function BT(a,b){M9(a,a.I,b);return a;}
function V(a,b){OB(a,b,10);return a;}
function GH(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(AWH(b,E$)){d=0;b=AXo(b);}a:{if(Dt(b,Bp(10))<0){if(d)Ci(a,c,c+1|0);else{Ci(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=HL(GB(b),10);}else{g=1;h=Bp(1);i=Dc(Bp(-1),Bp(10));b:{while(true){j=Ca(h,Bp(10));if(Dt(j,b)>0){j=h;break b;}g=g+1|0;if(Dt(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ci(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(H_(j,E$))break a;e=a.B.data;c=f+1|0;e[f]=HL(GB((Dc(b,j))),10);b=AA4(b,j);j=Dc(j,Bp(10));f=c;}}}return a;}
function Fw(a,b){AED(a,a.I,b);return a;}
function AAK(a,b){BL(a,b);return a;}
function Gr(a,b){M9(a,a.I,!b?C(39):C(40));return a;}
function AGH(a,b,c){var d,e,f,g,h,i;d=BG(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HJ;Y(i);K(i);}
function X6(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HJ;Y(f);K(f);}
function AN3(a,b,c,d,e){N6(a,b,c,d,e);return a;}
function AK0(a,b,c,d){Zm(a,b,c,d);return a;}
function ABs(a){return a.I;}
function D3(a){return N(a);}
function AOb(a,b){Ki(a,b);}
function AOJ(a,b,c){ZF(a,b,c);return a;}
function M9(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(38);else if(Fy(c))break a;Ki(a,a.I+J(c)|0);d=a.I-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.I=a.I+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HJ;Y(c);K(c);}
var EB=G(HM);
var AEV=G(EB);
function AZc(a){var b=new AEV();AJW(b,a);return b;}
function AJW(a,b){Bi(a,b);}
var AC8=G(EB);
function AZd(a){var b=new AC8();AKc(b,a);return b;}
function AKc(a,b){Bi(a,b);}
var Ve=G(0);
var Dw=G(0);
function AUM(b){var c;c=new Sc;c.yB=b;return c;}
function CK(b,c){if(b!==null)b.em();return c;}
var QA=G(0);
function Jd(){var a=this;B.call(a);a.mY=0;a.l5=0;}
var AZe=0;function F8(a){AZe=AZe-1|0;}
function Gn(a,b,c){JY(a,ACg(b,c,400,0));}
function SP(a,b){return Lp(a,b,0.875);}
function Lp(a,b,c){return EA(a,b)+c|0;}
function Tc(){var a=this;Jd.call(a);a.kE=null;a.bv=null;a.of=null;}
function EH(a){var b,c,d;b=a.bv;c=a.mY;d=a.l5;b.clearRect(0.0,0.0,c,d);}
function TK(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bv;d="center";c.textAlign=d;break a;case 2:c=a.bv;d="right";c.textAlign=d;break a;default:break a;}d=a.bv;c="left";d.textAlign=c;}}
function CC(a,b){JY(a,Gw(b.oD));}
function JY(a,b){var c;if(!(a.of==b?1:0)){c=a.bv;a.of=b;c.font=b;}}
function ACg(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bv;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EA(a,b){var c;c=$rt_ustr(b);return a.bv.measureText(c).width;}
function L7(a,b,c,d){var e,f;e=a.bv;f=$rt_ustr(Gd(ADw([35,G5(b/16|0),G5(b%16|0),G5(c/16|0),G5(c%16|0),G5(d/16|0),G5(d%16|0)])));e.fillStyle=f;}
var AA1=G();
var AGd=G();
function B1(b,c){if(b===c)return 1;return b!==null?b.bT(c):c!==null?0:1;}
function BP(b){if(b!==null)return b;b=new G3;Bi(b,C(30));K(b);}
var Z=G(0);
function Vp(){B.call(this);this.up=null;}
var By=G(0);
var AD3=G();
var AA8=G(0);
function Kz(b,c,d){return ATl(C(41),Fr(C(11),b),c,d);}
var AFP=G(0);
var AFL=G(0);
function Mo(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dp(b,f+g|0);DB(c,0,d,f,g);return d;}
function LD(b,c,d){DB(b,c,d,0,d.data.length);return d;}
function S3(b,c,d){var e;if(c>0)DB(b,0,d,0,c);e=d.data.length;if(c<e)DB(b,c+1|0,d,c,e-c|0);return d;}
function ADg(b,c,d,e){var f;if(c>0)DB(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DB(b,d,e,c,f-d|0);}return e;}
function F_(b){var c;c=new XR;c.jI=b;return c;}
function QZ(b,c){if(b.data.length!=c)b=Dp(b,c);return b;}
function AFK(b,c,d){var e;e=c.data.length;if(e==d)c=Dp(c,e*2|0);c.data[d]=b;return c;}
function Mt(){var a=this;B.call(a);a.tQ=null;a.sB=null;a.sv=null;a.qx=0;}
function ATl(a,b,c,d){var e=new Mt();AR0(e,a,b,c,d);return e;}
function AR0(a,b,c,d,e){a.tQ=b;a.sB=c;a.sv=d;a.qx=e;}
var AB2=G();
function AL6(b,c){return {style:b,weight:c};}
var BX=G(0);
function Vq(){B.call(this);this.vO=null;}
function AHv(a,b){var c,d,e;c=a.vO;d=0;while(d<b.length){e=b[d];(Ei()).fonts.add(e);d=d+1|0;}c.w9=1;b=c.sK;if(b!==null)ADT(b);}
var Vo=G();
function AT4(a,b){$rt_globals.console.info("font load error "+b);}
var L4=G();
var AZf=null;var AZg=null;function Bz(){if(AZf===null)AZf=APw(AZh,0);return AZf;}
function E_(){if(AZg===null)AZg=APw(AZi,0);return AZg;}
function AXh(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L$(b)&&(e+f|0)<=L$(d)){a:{b:{if(b!==d){g=IL(BI(b));h=IL(BI(d));if(g!==null&&h!==null){if(g===h)break b;if(!In(g)&&!In(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gw;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AEQ(n.constructor,o)?1:0)){Lj(b,c,d,e,j);b=new Jk;Y(b);K(b);}j=j+1|0;k=m;}Lj(b,c,d,e,f);return;}if(!In(g))break a;if(In(h))break b;else break a;}b=new Jk;Y(b);K(b);}}Lj(b,c,
d,e,f);return;}b=new Jk;Y(b);K(b);}b=new BD;Y(b);K(b);}d=new G3;Bi(d,C(42));K(d);}
function DB(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L$(b)&&(e+f|0)<=L$(d)){Lj(b,c,d,e,f);return;}b=new BD;Y(b);K(b);}
function Lj(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ez(){return Long_fromNumber(new Date().getTime());}
function AFk(){return AYY($rt_globals.performance.now()*1000000.0);}
var AFI=G();
var ACK=G();
function QM(b,c){var d,e,f;d=(Ei()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ei()).getElementById($rt_ustr(b)).appendChild(d);}
function ABe(){return (Ei()).createElement("canvas");}
function AGO(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AQq(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AHp=G();
var Oi=G();
function AP$(a,b){var c;c=new Bu;Bi(c,$rt_str(b.message));K(c);}
var AF4=G();
function FR(b){return $rt_str(b);}
var ABj=G();
function OU(b,c){var d,e,f,g;b=b.data;d=BU(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AGA(b,c){var d,e,f,g;b=b.data;d=D7(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function MZ(b,c){var d,e,f,g;b=b.data;d=BM(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dp(b,c){var d,e,f,g;d=b.data;e=AFg(IL(BI(b)),c);f=Bb(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ACd(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));H(c,e[d]);d=d+1|0;}BT(c,C(45));return N(c);}
function AFb(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));V(c,e[d]);d=d+1|0;}BT(c,C(45));return N(c);}
function ASB(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));Fw(c,e[d]);d=d+1|0;}BT(c,C(45));return N(c);}
function AVR(b){var c,d,e,f;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));f=e[d];ACm(c,c.I,f);d=d+1|0;}BT(c,C(45));return N(c);}
function H1(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BE;Y(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ABP(b,c,d,e){var f,g;if(c>d){e=new BE;Y(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ACH(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AY1;e=R(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bb(j,h+f|0);l=h+(2*f|0)|0;m=Bb(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.wV(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AEE(b,c){return VA(b,0,b.data.length,c);}
function VA(b,c,d,e){var f,g,h,i,j;f=BG(c,d);if(f>0){g=new BE;Y(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Xy=G(0);
var ADS=G();
function AMH(a,b){return a.Da(b);}
function AOZ(a){return a.zV();}
var ADE=G();
var HI=G(0);
var UJ=G();
var BD=G(Bu);
var AEA=G();
function L$(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AZj());}return b.data.length;}
function AFg(b,c){if(b===null){b=new G3;Y(b);K(b);}if(b===F($rt_voidcls())){b=new BE;Y(b);K(b);}if(c>=0)return AUC(b.gw,c);b=new AAs;Y(b);K(b);}
function AUC(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var G3=G(Bu);
var Jk=G(Bu);
var C_=G();
var AZk=null;var AZl=null;var AZm=null;var AZn=null;var AZo=null;var AZp=null;var AZq=null;var AZr=null;var AZs=null;var AZt=null;function Y9(b){var c,d;c=new BA;d=BU(1);d.data[0]=b;HW(c,d);return c;}
function MP(b){return b>=65536&&b<=1114111?1:0;}
function CI(b){return (b&64512)!=55296?0:1;}
function C7(b){return (b&64512)!=56320?0:1;}
function MT(b){return !CI(b)&&!C7(b)?0:1;}
function HU(b,c){return CI(b)&&C7(c)?1:0;}
function ED(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IJ(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jj(b){return (56320|b&1023)&65535;}
function Fb(b){return G2(b)&65535;}
function G2(b){if(AZn===null){if(AZq===null)AZq=AE_();AZn=ADj((AZq.value!==null?$rt_str(AZq.value):null));}return Uc(AZn,b);}
function EK(b){return GZ(b)&65535;}
function GZ(b){if(AZm===null){if(AZr===null)AZr=AF0();AZm=ADj((AZr.value!==null?$rt_str(AZr.value):null));}return Uc(AZm,b);}
function Uc(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BG(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Wm(b,c){if(c>=2&&c<=36){b=QG(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function QG(b){var c,d,e,f,g,h,i,j,k,l;if(AZl===null){if(AZs===null)AZs=ADr();c=(AZs.value!==null?$rt_str(AZs.value):null);d=ASn(Fz(c));e=Kt(d);f=BM(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Od(d)|0;j=j+Od(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AZl=f;}g=AZl.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BG(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HL(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GS(b){var c;if(b<65536){c=BU(1);c.data[0]=b&65535;return c;}return ADw([IJ(b),Jj(b)]);}
function Cy(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&MT(b&65535))return 19;if(AZo===null){if(AZt===null)AZt=AHh();d=(AZt.value!==null?$rt_str(AZt.value):null);e=R(Ou,16384);f=e.data;g=D7(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Li(P(d,l));if(m==64){l=l+1|0;m=Li(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,Li(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Li(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ALT(k,k+i|0,AGA(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ALT(k,k+i|0,AGA(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AZo=Dp(e,j);}e=AZo.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.sZ)o=p+1|0;else{c=d.qM;if(b>=c)return d.q1.data[b-c|0];c=p-1|0;}}return 0;}
function Kc(b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GJ(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cy(b)!=16?0:1;}
function Rf(b){switch(Cy(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function SV(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Rf(b);}return 1;}
function AA0(){AZk=F($rt_charcls());AZp=R(C_,128);}
function AE_(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AF0(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ADr(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHh(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Nn=G(0);
var Ub=G(0);
var Es=G(0);
var AGc=G(0);
function Ei(){return $rt_globals.window.document;}
function O5(){var a=this;B.call(a);a.qO=null;a.qP=null;a.qQ=null;}
function ARk(a,b){var c,d,e;c=a.qO;d=a.qP;e=a.qQ;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Gw(Ll(c));c=d.up;c.sK=b;if(c.w9)ADT(b);}}
var ADz=G();
function FI(){return AVB();}
function AVB(){return Math.random();}
function Bb(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AUH(b,c){return Math.max(b,c);}
function Nx(b){if(b<0)b= -b|0;return b;}
function AMu(b){return Math.abs(b);}
var Q7=G(0);
var S_=G(0);
var S0=G(0);
var Vc=G(0);
var Zp=G(0);
var Wn=G(0);
var Qe=G(0);
var QB=G(0);
var AA7=G();
function AQj(a,b){b=a.jT(b);La();return b===null?null:b instanceof $rt_objcls()&&b instanceof Ex?Gw(b):b;}
function AS5(a,b,c){a.Hk($rt_str(b),LX(c,"handleEvent"));}
function ASp(a,b,c){a.Ea($rt_str(b),LX(c,"handleEvent"));}
function AQe(a,b,c,d){a.Cb($rt_str(b),LX(c,"handleEvent"),d?1:0);}
function AUn(a,b){return !!a.Hq(b);}
function AJ5(a){return a.zV();}
function AHY(a,b,c,d){a.FT($rt_str(b),LX(c,"handleEvent"),d?1:0);}
var BE=G(Bu);
var AAs=G(Bu);
function Ex(){B.call(this);this.t2=null;}
var AZu=null;var AZv=null;var AZw=null;var AZx=null;var AZy=null;var AZz=null;function La(){La=Bq(Ex);AKa();}
function NS(a){var b=new Ex();AEl(b,a);return b;}
function AEl(a,b){La();a.t2=b;}
function Ll(b){var c,d,e,f,g,h;La();if(b===null)return null;a:{c=b;if(AZv!==null){d=$rt_str(typeof c);if(!Bn(d,C(46))&&!Bn(d,C(47))){if(Bn(d,C(48))){e=AZw.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NS(c);h=g;AZw.set(c,new $rt_globals.WeakRef(h));OT(AZy,h,c);return g;}if(!Bn(d,C(49)))break a;else{e=AZx.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NS(c);h=g;AZx.set(c,new $rt_globals.WeakRef(h));OT(AZz,
h,c);return g;}}e=AZv.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NS(c);AZv.set(c,new $rt_globals.WeakRef(g));return g;}}return NS(c);}
function Gw(b){La();if(b!==null)return b.t2;return null;}
function Um(b){La();if(b===null)return null;return b instanceof $rt_objcls()?b:Ll(b);}
function AKa(){AZu=new $rt_globals.WeakMap();AZv=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AZw=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZx=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZy=AZw===null?null:new $rt_globals.FinalizationRegistry(Bl(new Qu,"accept"));AZz=AZx===null?null:new $rt_globals.FinalizationRegistry(Bl(new Qv,"accept"));}
function OT(b,c,d){return b.register(c,d);}
var AGX=G();
var AC2=G();
var AHk=G();
var KB=G(0);
var Qu=G();
function AJ3(a,b){var c;b=Um(b);c=AZw;b=Gw(b);c.delete(b);}
var ADn=G();
var Qv=G();
function AH0(a,b){var c;b=Um(b);c=AZx;b=Gw(b);c.delete(b);}
var HJ=G(BD);
var ACs=G();
function ADN(){return "ping";}
var Qd=G(0);
function Ui(){var a=this;B.call(a);a.rD=null;a.ts=null;a.nD=null;a.op=null;a.d6=null;a.v0=null;a.ox=null;a.mL=null;a.gN=null;a.jh=0;a.y8=0;a.sT=null;a.fY=null;a.r9=null;a.na=null;a.uv=0;}
function AFz(a){a.d6.focus();}
function OF(a,b){var c;c=Ei();b=$rt_ustr(b);c.title=b;}
function ACO(a){var b,c,d;b=new No;c=a.gN;d=a.mL.ct;b.bf=c;b.m=d;b.b0=a;return b;}
function UY(a){a.y8=$rt_globals.requestAnimationFrame(Bl(a.ts,"onAnimationFrame"));}
function Gq(a){a.jh=1;}
function UW(a,b,c){var d,e;a.mL.d1=B$(b,c);d=a.d6;e=b;d.width=e;d=a.d6;e=c;d.height=e;d=a.gN;U(d.dK,b,c);e=d.bu;d=d.dK;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fY.cc(a.gN.dK,Lk(a));a.fY.bH();}
function GT(a,b){var c,d,e;c=a.sT;d=a.d6;if(B1(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.sT=b;}
function Ka(a){return $rt_globals.performance.now()/1000.0;}
function Lk(a){return $rt_globals.window.devicePixelRatio;}
function XS(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGV(b,1);else{c=new YK;d=$rt_globals.window.showDirectoryPicker();e=new YJ;e.qT=b;e.qU=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function MD(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGV(b,0);else{c=new ZE;d=$rt_globals.window.showOpenFilePicker();e=new ZD;e.rA=b;e.rz=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CU(a,b,c,d){var e,f,g,h,i,j;d=d.data;e=a.uv+1|0;a.uv=e;f=a.na;g=Dh(e);f.iD=MR(f,f.iD,g);g=Wv(f,g);Np(g,b);Np(g,b);f.kD=f.kD+1|0;b=a.r9;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;0;g[0]=f;c=$rt_ustr(c);1;g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof BA)f=$rt_ustr(c);else if(Jg(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Jg(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Jg(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof LH)){b=new BE;c
=IF(BI(c));f=new M;O(f);H(H(f,C(50)),c);Bi(b,N(f));K(b);}c=c;f=c.ho;if(f===null)f=c.fL;}j=e+2|0;j;g[j]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function SR(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new SJ;e.oH=b;b=AHm(c);d.then(Bl(e,"f"),Bl(b,"f"));}
function V2(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.rD;b=(Fz(b)).data;f=f.decode(b);b=e.writeText(f);e=new Wh;e.t1=c;c=AHm(d);b.then(Bl(e,"f"),Bl(c,"f"));}
function ZL(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AHm(b){var c;c=new NG;c.ug=b;return c;}
var B9=G(0);
var Tt=G();
function AD5(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(C(51),c)){d=new Oh;Eu(d,b);b=$rt_globals.fetch("test.wasm");e=new Or;b=b.then(Bl(e,"f"));e=new Oq;b=b.then(Bl(e,"f"));e=new Oo;f=new On;b.then(Bl(e,"f"),Bl(f,"f"));}else if(!Bn(C(52),c))d=(ATM(J(c)<=0?C(30):Do(c,1))).bX(b);else{d=new Xz;AC0(d,b);d.F.ei=1;d.E.ei=1;c=new Vs;c.oK=d;Qn(d,c,C(53));c=new Vt;c.ut=d;Qn(d,c,C(54));}return d;}
var Bj=G(0);
var AD0=G();
var ADv=G();
var S4=G(0);
function Xl(){B.call(this);this.qs=null;}
function ANb(a,b){var c,d;c=b;b=a.qs;if(!(!b.fY.c1(c/1000.0)&&!b.jh)){d=b.gN.dK;if(W(d.b,d.a)){b.jh=0;b.fY.bH();}}UY(b);}
function Xi(){B.call(this);this.xp=null;}
function Dm(a){Gq(a.xp);}
var R7=G(0);
function Xj(){B.call(this);this.tm=null;}
function ALh(a,b,c){var d,e,f,g;c=a.tm;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.d6){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lk(c);UW(c,HN(f.width*g),HN(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];UW(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGk=G();
function ASQ(b,c){ARG(b,c,AH$());}
function AH$(){return {box:'device-pixel-content-box'};}
function ARG(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cp=G(0);
function Xg(){B.call(this);this.pP=null;}
function ARs(a,b){b=a.pP;b.fY.cc(b.gN.dK,Lk(b));b.fY.bH();}
var LG=G(0);
function Sd(a,b,c){var d;d=Cl(a,b);if(d===null)d=F2(a,b,c);return d;}
function D4(){var a=this;B.call(a);a.lr=null;a.lB=null;}
var Ef=G(0);
var ZK=G(0);
var Oa=G(0);
function QK(){var a=this;D4.call(a);a.iD=null;a.kx=null;a.z$=null;a.kD=0;}
function Wv(a,b){var c,d;c=a.iD;while(true){if(c===null)return null;d=Kd(a.kx,b,c.jP);if(!d)break;c=d>=0?c.ca:c.bW;}return c;}
function MR(a,b,c){var d,e;if(b===null){b=new J_;d=null;b.jP=c;b.jk=d;b.f4=1;b.gh=1;return b;}e=Kd(a.kx,c,b.jP);if(!e)return b;if(e>=0)b.ca=MR(a,b.ca,c);else b.bW=MR(a,b.bW,c);Et(b);return Ks(b);}
function KR(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Kd(a.kx,c,b.jP);if(d<0)b.bW=KR(a,b.bW,c);else if(d>0)b.ca=KR(a,b.ca,c);else{e=b.ca;if(e===null)return b.bW;f=b.bW;g=R(J_,e.f4).data;h=0;while(true){b=e.bW;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.ca;while(h>0){h=h+(-1)|0;j=g[h];j.bW=b;Et(j);b=Ks(j);}e.ca=b;e.bW=f;Et(e);b=e;}Et(b);return Ks(b);}
function Xh(){B.call(this);this.we=null;}
function ASO(a,b){var c,d,e,f,g,h,i,j,k;c=a.we.na;b=b.data;if(!(b===ADN()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BE;Y(b);K(b);}if(b.length<1){b=new BE;Y(b);K(b);}d=Dh(b[0]);e=Wv(c,d);if(e===null)c=null;else{c.iD=KR(c,c.iD,d);c.kD=c.kD+1|0;c=e.jk;}f=R(B,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FR(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Uu;AF1(e);e.h9=k;}else e=(k instanceof $rt_globals.File?1:0)?AEH(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AEH(k,null);g[h]=e;h=j;}c.g(f);}}
function Rc(){var a=this;B.call(a);a.ct=null;a.hT=null;a.zt=null;a.d1=null;}
function N8(){return (Ei()).activeElement;}
function CX(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return YZ(a,b,c,d);}
function AEX(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"),!!e);return YZ(a,b,c,d);}
function YZ(a,b,c,d){var e;e=new R3;e.yc=b;e.ye=c;e.yd=d;return e;}
function Vr(a,b){var c;c=new Wx;c.xh=b;return c;}
function EQ(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hT.getBoundingClientRect();e=B$(HN((b.clientX-d.left)*c),HN((b.clientY-d.top)*c));f=new Bf;g=a.d1;f.b=g.b;f.a=g.a;d=new Nl;V4(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.xW=f;return d;}
function AAe(a,b,c){var d,e,f,g;d=new QF;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;V4(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k6=0;d.ea=e;d.bl=f;d.ig=c;d.tt=g;return d;}
function DT(a,b){b.stopPropagation();b.preventDefault();}
function ACX(a,b){var c;c=new ZI;c.q_=b;b.onpointerdown=Bl(c,"f");c=new ZJ;c.pV=b;b.onpointerup=Bl(c,"f");}
function LS(){var a=this;B.call(a);a.sQ=null;a.cR=null;a.bu=null;a.uZ=null;a.yH=0;a.zR=0;a.kG=null;a.At=null;a.z7=null;a.y5=null;a.gS=null;a.ie=null;a.hm=null;a.Af=null;a.qy=null;a.dK=null;a.wW=null;a.mG=0;a.kZ=0;a.nk=0;a.m5=0;a.i8=0;a.nf=null;}
function HT(a,b,c){return Hk(a,b,c,400,0);}
function CO(a,b,c){return Nv(a.sQ,b,c);}
function FD(a,b){var c,d,e,f,g;c=a.bu;d=b.br;e=b.bN;f=b.bm;g=b.bO;c.clearColor(d,e,f,g);a.bu.clear(16384);}
function Cw(a,b){var c;if(b==a.kZ)return b;if(!b)a.bu.disable(3042);else{a.bu.enable(3042);a.bu.blendFuncSeparate(770,771,1,1);}c=a.kZ;a.kZ=b;return c;}
function Tm(a,b,c){Mf(a,b.b,b.a,c);}
function Mf(a,b,c,d){var e,f;e=d.b;f=d.a;a.m5=1;a.i8=1;d=a.nf;d.s4=b;d.s6=c;d.s3=e;d.s2=f;V5(a);}
function Hp(a){a.m5=0;a.i8=0;V5(a);}
function V5(a){var b,c,d,e,f,g;b=a.nk;c=a.m5;if(b!=c){a.nk=c;if(!c)a.bu.disable(3089);else a.bu.enable(3089);}if(a.nk&&a.i8){a.i8=0;d=a.bu;e=a.nf;b=e.s4;c=a.dK.a-e.s6|0;f=e.s2;c=c-f|0;g=e.s3;d.scissor(b,c,g,f);}}
function IM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.qy;c=a.mG;d=b.g7.ud;e=b.eO;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eO;h=b.ot;e.bindBuffer(34962,h);i=b.g7.nL.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eO;m=k.h1;n=k.fK;o=b.g7.lM*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fK|0;j=j+1|0;}a:{e=b.xk;if(e!==null){c=0;b.eO.bindBuffer(34962,e);i=b.g7.sN.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eO;j=e.h1;p=e.fK;m=e.qI;n=b.g7.q5;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fK|0;g=g+1|0;}}}q=b.wz;if(q===null){c=b.ty;if(c>0)b.eO.drawArrays(4,0,c);}else{b.eO.bindBuffer(34963,q);k=b.eO;g=b.wP;k.drawElements(4,g,5123,0);}a.mG=d;}
function Bx(a,b,c,d,e){IT(a,a.kG);JC(a.kG,a.bu,b,c,d,a.dK);d=a.kG;G6(a.bu,d.wd,e);IM(a);}
function AAw(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IT(a,a.hm);JC(a.hm,a.bu,b,c,d,a.dK);j=a.hm;d=a.bu;k=j.nO;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.nN;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.hm;G6(a.bu,d.pm,i);IM(a);}
function EZ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IT(a,a.gS);JC(a.gS,a.bu,b,c,d,a.dK);VZ(a.gS,a.bu,f);d=a.gS;j=a.bu;f=f.f7;b=f.b;c=f.a;k=e.br;l=b;m=k/l;k=e.bN;n=c;o=k/n;k=e.bm/l;l=e.bO/n;d=d.vG;j.uniform4f(d,m,o,k,l);d=a.gS;e=a.bu;G6(e,d.rj,g);G6(e,d.o5,h);d=d.qn;e.uniform2f(d,i,0.0);IM(a);}
function CZ(a){var b,c;b=new J9;c=a.uZ;b.f7=new Bf;b.eu=c;b.fz=c.dR.createTexture();AZA=AZA+1|0;return b;}
function Pk(a,b){Zr(a.bu,b);}
function IT(a,b){var c,d;if(b!==a.wW){c=a.bu;d=b.b5;c.useProgram(d);a.wW=b;}}
function AFO(){var a=this;LS.call(a);a.zw=null;a.z8=null;}
function AWZ(a,b){var c=new AFO();ANt(c,a,b);return c;}
function ANt(a,b,c){var d,e,f,g,h,i,j,k,l;d=new V7;a.dK=new Bf;a.mG=0;a.nf=new YF;a.sQ=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);H(H(f,C(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bu=b;a.cR=Nv(d,4,4);g=AHP(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BU(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new R4;Ko();k=AZB;f.eO=b;f.g7=k;f.ty=h.length/k.lM|0;f.wP
=j.length;k=b.createBuffer();f.ot=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.xk=null;k=b.createBuffer();f.wz=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.qy=f;a.zR=Lh(e,C(56));f=new R5;f.dR=b;a.uZ=f;l=b.getParameter(3379);a.yH=l;f=new M;O(f);V(H(f,C(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DC,7);i=g.data;d=new X9;Jb(d,b,C(58),C(59),AZB);f=d.b5;d.wd=b.getUniformLocation(f,"uColor");a.kG=d;i[0]
=d;f=AWq(b,C(60));a.At=f;i[1]=f;f=AXr(b);a.z7=f;i[2]=f;f=AXX(b);a.y5=f;i[3]=f;f=AW0(b);a.gS=f;i[4]=f;f=AX9(b);a.ie=f;i[5]=f;f=AXS(b);a.hm=f;i[6]=f;a.Af=g;Zr(b,C(61));a.z8=new V6;a.zw=c;}
function Hk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cR;g=ACg(b,c,d,e);JY(f,g);h=f.bv.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EA(f,C(62));m=EA(f,C(63));h=new LI;n=Ll(g);h.nr=b;h.ym=c;o=c|0;if(o!==c){b=new M;O(b);Fw(H(b,C(64)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.qD=o;h.yu=d;h.y3=e;h.du=i;h.eW=j;h.yl=l;h.nb=k;h.oD=n;h.sG=Dl(i);h.z0=Dl(h.eW);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.yr=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b
=C(65);}h.yb=b;return h;}
function Cz(){B.call(this);this.bd=null;}
function Eu(a,b){a.bd=b;}
function AU9(a,b){return 0;}
var JQ=G();
var AY1=null;function Kd(a,b,c){return b.kF(c);}
function AD8(){AY1=new JQ;}
function ACC(){var a=this;B.call(a);a.b$=null;a.nF=null;a.bz=null;a.dD=null;a.e0=null;a.f8=null;a.gH=null;a.kq=null;a.lm=null;a.dj=null;a.id=null;a.pM=0;}
function AXE(a){var b=new ACC();AQS(b,a);return b;}
function AQS(a,b){a.b$=CM(R(Cr,0));a.nF=CM(R(Cr,0));a.bz=CM(R(Cu,0));a.dD=CM(R(DO,0));a.e0=CM(R(EI,0));a.f8=CM(R(E0,0));a.gH=CM(R(Fn,0));a.kq=CM(R(Bj,0));a.lm=CM(R(Bj,0));a.dj=b;}
function VC(a,b){var c,d,e,f;Dm(a.dj);c=(Cs(!b.ig?a.nF:a.b$)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].X(b);if(f)break;if(b.k6)break;e=e+1|0;}return f;}
function SK(a,b,c){var d,e,f;Dm(a.dj);d=(Cs(a.f8)).data;e=d.length;f=0;while(f<e){if(d[f].g$(b,c))return 1;f=f+1|0;}return 0;}
function Ys(){B.call(this);this.oY=null;}
function AQO(a,b){var c;c=a.oY;if(VC(c.ct,AAe(c,b,1)))DT(c,b);}
function Yt(){B.call(this);this.tY=null;}
function AQ6(a,b){var c;c=a.tY;if(VC(c.ct,AAe(c,b,0)))DT(c,b);}
function Yu(){B.call(this);this.qh=null;}
function APe(a,b){var c,d,e,f,g,h,i;c=a.qh;if(c.d1!==null){a:{b:{d=EQ(c,b);e=c.ct;Dm(e.dj);f=e.id;if(f!==null)f.g(d);else{g=(Cs(e.bz)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}DT(c,b);}}
function Yv(){B.call(this);this.xi=null;}
function AOF(a,b){var c,d,e,f,g,h;c=a.xi;b.button;if(c.d1!==null)a:{d=EQ(c,b);c=c.ct;e=b.button;Dm(c.dj);if(c.id===null){f=(Cs(c.bz)).data;g=f.length;h=0;while(h<g){b=f[h].ci(d,e);if(b!==null){c.id=b;c.pM=e;break a;}h=h+1|0;}}}}
function Yw(){B.call(this);this.tf=null;}
function AO6(a,b){var c,d,e,f,g,h,i;c=a.tf;b.button;if(c.d1!==null){d=EQ(c,b);e=c.ct;f=b.button;Dm(e.dj);if(f==e.pM&&e.id!==null)e.id=null;g=(Cs(e.bz)).data;h=g.length;i=0;a:{while(i<h){if(g[i].c4(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DT(c,b);}}
function Yx(){B.call(this);this.pn=null;}
function ARC(a,b){var c,d,e,f,g,h,i,j,k;c=a.pn;if(c.d1!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=EQ(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dm(e.dj);i=(Cs(e.dD)).data;j=i.length;k=0;b:{while(k<j){if(i[k].de(f,d,h))break b;k=k+1|0;}}DT(c,b);}}
function Yy(){B.call(this);this.xA=null;}
function AMX(a,b){var c,d,e,f,g,h,i,j;c=a.xA;if(c.d1!==null){d=EQ(c,b);e=c.ct;f=b.button;g=b.detail;Dm(e.dj);h=(Cs(e.bz)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cB(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DT(c,b);}}
function Yz(){B.call(this);this.to=null;}
function AVH(a,b){var c,d,e,f,g,h,i;c=a.to;if(c.d1!==null){d=EQ(c,b);e=c.ct;Dm(e.dj);f=(Cs(e.e0)).data;g=f.length;h=0;a:{while(h<g){if(f[h].X(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DT(c,b);}}
function YA(){B.call(this);this.pA=null;}
function AL5(a,b){var c,d,e;b=a.pA.ct;c=(Cs(b.lm)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dj);}
function YB(){B.call(this);this.wo=null;}
function ASY(a,b){var c,d,e;b=a.wo.ct;c=(Cs(b.kq)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dj);}
function Z8(){B.call(this);this.vE=null;}
function AU$(a,b){var c;c=a.vE;if(c.d1!==null)EQ(c,b);}
function Z9(){B.call(this);this.uj=null;}
function AOX(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.uj;if(N8()===c.hT){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cs(c.ct.gH)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dQ();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dj;m=new OY;m.wF=k;m.wG=l;g.getAsString(Bl(m,"accept"));DT(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);H(H(H(H(l,C(66)),k),C(67)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Z$(){B.call(this);this.n8=null;}
function APk(a,b){var c;c=a.n8;if(N8()===c.hT&&SK(c.ct,Vr(c,b),0))DT(c,b);}
function Z_(){B.call(this);this.wN=null;}
function ARm(a,b){var c;c=a.wN;if(N8()===c.hT&&SK(c.ct,Vr(c,b),1))DT(c,b);}
var VP=G(0);
var V7=G();
function Nv(a,b,c){var d,e,f;d=new Tc;AZe=AZe+1|0;d.mY=b;d.l5=c;e=(Ei()).createElement("canvas");d.kE=e;f=b;e.width=f;e=d.kE;f=c;e.height=f;d.bv=d.kE.getContext("2d");return d;}
var V6=G();
function ANQ(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function No(){var a=this;B.call(a);a.bf=null;a.m=null;a.b0=null;}
function AGG(){var a=this;B.call(a);a.hY=null;a.jx=null;a.hJ=0;}
function CM(a){var b=new AGG();AMR(b,a);return b;}
function AMR(a,b){a.hY=b;}
function Ba(a,b){var c,d,e;c=a.hJ;d=a.hY;if(c==d.data.length)a.hY=Dp(d,c+4|0);d=a.hY.data;e=a.hJ;a.hJ=e+1|0;d[e]=b;a.jx=null;}
function Cs(a){var b;b=a.jx;if(!(b!==null&&b.data.length==a.hJ))a.jx=Dp(a.hY,a.hJ);return a.jx;}
var Eh=G(0);
var Cr=G(0);
var Cu=G(0);
function ANW(a,b){return 0;}
function AT6(a,b,c){return null;}
function AIx(a,b,c){return 0;}
function ARB(a,b,c,d){return 0;}
var DO=G(0);
var EI=G(0);
var E0=G(0);
var E2=G(0);
var Fn=G(0);
function Sc(){B.call(this);this.yB=null;}
function Bf(){var a=this;B.call(a);a.b=0;a.a=0;}
function B$(a,b){var c=new Bf();Rm(c,a,b);return c;}
function Rm(a,b,c){a.b=b;a.a=c;}
function Cx(a,b){a.b=b.b;a.a=b.a;}
function U(a,b,c){a.b=b;a.a=c;}
function AAx(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);V(H(V(H(d,C(68)),b),C(69)),c);return N(d);}
function LM(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function YF(){var a=this;B.call(a);a.s4=0;a.s6=0;a.s3=0;a.s2=0;}
var AFN=G();
var ABD=G(0);
function R5(){B.call(this);this.dR=null;}
function Mj(){var a=this;B.call(a);a.b5=null;a.z2=null;}
function AEG(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(70):C(71);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);H(H(h,f),g);g=N(h);b.deleteShader(e);Bt(Bz(),g);Bt(E_(),C(72));Bt(E_(),d);Bt(E_(),C(72));b=new Bu;Bi(b,g);K(b);}
function DC(){var a=this;Mj.call(a);a.pz=null;a.rg=null;a.mO=null;}
function AZC(a,b,c,d){var e=new DC();Jb(e,a,b,c,d);return e;}
function Jb(a,b,c,d,e){var f,g,h,i,j,k;a.z2=e;f=AEG(b,35633,c);d=AEG(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.b5=g;h=e.tK.data;i=h.length;j=0;while(j<i){c=h[j];d=a.b5;k=c.h1;c=c.rr;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.b5;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Zr(b,C(73));a.mO=new Bf;c=a.b5;a.pz=b.getUniformLocation(c,"uResolution");c=a.b5;a.rg=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new M;O(c);H(H(c,C(74)),d);Bi(b,N(c));K(b);}
function ACE(a,b,c){var d,e,f;if(!LM(a.mO,c)){Cx(a.mO,c);d=a.pz;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function JC(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rg;b.uniform4f(e,i,l,h,j);ACE(a,b,f);}
function X9(){DC.call(this);this.wd=null;}
function EO(){DC.call(this);this.ta=null;}
function AWq(a,b){var c=new EO();Vy(c,a,b);return c;}
function AZD(a,b,c){var d=new EO();VD(d,a,b,c);return d;}
function Vy(a,b,c){VD(a,b,C(58),c);}
function VD(a,b,c,d){Ko();Jb(a,b,c,d,AZB);c=a.b5;a.ta=b.getUniformLocation(c,"sDiffuse");}
function VZ(a,b,c){var d;d=a.ta;b.uniform1i(d,0);b.activeTexture(33984);c=c.fz;b.bindTexture(3553,c);}
var ADk=G(DC);
function AXr(a){var b=new ADk();AUA(b,a);return b;}
function AUA(a,b){Ko();Jb(a,b,C(58),C(75),AZB);}
function AFv(){EO.call(this);this.yN=null;}
function AXX(a){var b=new AFv();AL_(b,a);return b;}
function AL_(a,b){var c;Vy(a,b,C(76));c=a.b5;a.yN=b.getUniformLocation(c,"uContrast");}
function AE1(){var a=this;EO.call(a);a.vG=null;a.rj=null;a.o5=null;a.qn=null;}
function AW0(a){var b=new AE1();ARx(b,a);return b;}
function ARx(a,b){var c;VD(a,b,C(77),C(78));c=a.b5;a.vG=b.getUniformLocation(c,"uTexTransform");c=a.b5;a.rj=b.getUniformLocation(c,"uColor");c=a.b5;a.o5=b.getUniformLocation(c,"uBgColor");c=a.b5;a.qn=b.getUniformLocation(c,"uContrast");}
function AB5(){var a=this;EO.call(a);a.xl=null;a.xj=null;a.rI=null;}
function AX9(a){var b=new AB5();ALt(b,a);return b;}
function ALt(a,b){var c,d;Vy(a,b,C(79));c=a.b5;a.xl=b.getUniformLocation(c,"uColorB");d=a.b5;a.xj=b.getUniformLocation(d,"uColorF");d=a.b5;a.rI=b.getUniformLocation(d,"uContrast");}
function AE0(){var a=this;DC.call(a);a.pm=null;a.nO=null;a.nN=null;}
function AXS(a){var b=new AE0();ALv(b,a);return b;}
function ALv(a,b){var c;Ko();Jb(a,b,C(58),C(80),AZB);c=a.b5;a.pm=b.getUniformLocation(c,"uColor");c=a.b5;a.nO=b.getUniformLocation(c,"uPoints1");c=a.b5;a.nN=b.getUniformLocation(c,"uPoints2");}
var Tz=G(0);
var AHn=G(0);
function G6(b,c,d){var e,f,g,h;e=d.br;f=d.bN;g=d.bm;h=d.bO;b.uniform4f(c,e,f,g,h);}
function Zr(b,c){var d,e;d=b.getError();if(d){b=Bz();e=new M;O(e);V(H(e,c),d);Bt(b,N(e));}}
function R3(){var a=this;B.call(a);a.yc=null;a.ye=null;a.yd=null;}
function R4(){var a=this;B.call(a);a.eO=null;a.g7=null;a.ot=null;a.xk=null;a.wz=null;a.ty=0;a.wP=0;}
function Co(){var a=this;B.call(a);a.x$=null;a.di=0;}
function Dd(a,b,c){a.x$=b;a.di=c;}
function Hd(){var a=this;Co.call(a);a.tK=null;a.nL=null;a.sN=null;a.lM=0;a.q5=0;a.ud=0;}
var AZB=null;var AZE=null;function Ko(){Ko=Bq(Hd);ANl();}
function ANl(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hd;c=R(Ea,2);d=c.data;AUj();d[0]=AZF;d[1]=AZG;Ko();Dd(b,C(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];AA6();switch(AZH.data[l.m8.di]){case 1:f=f+l.fK|0;h=h+1|0;break a;case 2:e=e+l.fK|0;g=g+1|0;break a;default:}}i=i|1<<l.h1;k=k+1|0;}b.tK=c;b.lM=e;b.q5=f;b.ud=i;c=R(Ea,g);m=c.data;b.nL=c;c=R(Ea,h);n=c.data;b.sN=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];AA6();switch(AZH.data[l.m8.di]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AZB=b;c=R(Hd,1);c.data[0]=b;AZE=c;}
var M1=G(0);
var U2=G(0);
var Wi=G(0);
var GN=G();
function J8(){GN.call(this);this.xO=null;}
function AC5(){var a=this;J8.call(a);a.zO=0;a.l0=0;a.jt=null;a.lq=null;a.uO=null;}
function APw(a,b){var c=new AC5();AT0(c,a,b);return c;}
function AT0(a,b,c){a.xO=b;b=new M;O(b);a.jt=b;a.lq=BU(32);a.zO=c;ACW();a.uO=AZI;}
function U$(a,b,c,d){var e,$$je;e=a.xO;if(e===null)a.l0=1;if(!(a.l0?0:1))return;a:{try{e.li(b,c,d);break a;}catch($$e){$$je=Er($$e);if($$je instanceof I7){}else{throw $$e;}}a.l0=1;}}
function Pw(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ADY(b,c,d-c|0);e=D7(Bd(16,Bb(e.length,1024)));g=ADL(e,0,e.data.length);h=a.uO;i=new Ra;b=D7(1);j=b.data;j[0]=63;HD();k=AZJ;i.mT=k;i.l6=k;c=j.length;if(c&&c>=i.nM){i.x7=h;i.ro=b.fs();i.zI=2.0;i.nM=4.0;i.qH=BU(512);i.pk=D7(512);k=AZK;if(k===null){i=new BE;Bi(i,C(82));K(i);}i.mT=k;i.l6=k;a:while(true){if(i.jp==3){f=new CL;Y(f);K(f);}i.jp=2;b:{while(true){try{k=ABk(i,f,g);}catch($$e){$$je=Er($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(IS(k))
{d=Cb(f);if(d<=0)break b;k=Ec(d);}else if(Hz(k))break;h=!MN(k)?i.mT:i.l6;c:{if(h!==AZK){if(h===AZL)break c;else break b;}d=Cb(g);b=i.ro;l=b.data.length;if(d<l){k=AZM;break b;}Y2(g,b,0,l);}EV(f,f.Z+KT(k)|0);}}l=Hz(k);U$(a,e,0,g.Z);Pt(g);if(!l){while(true){d=i.jp;if(d!=2&&d!=4){f=new CL;Y(f);K(f);}f=AZN;if(f===f)i.jp=3;l=Hz(f);U$(a,e,0,g.Z);Pt(g);if(!l)break;}return;}}K(AKI(f));}i=new BE;Bi(i,C(83));K(i);}
function Bt(a,b){var c,d,e,f,g,h,i,j;BL(BT(a.jt,b),10);b=a.jt;c=b.I;d=a.lq;if(c>d.data.length)d=BU(c);e=0;f=0;if(e>c){b=new BD;Bi(b,C(84));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Pw(a,d,0,c);a.jt.I=0;}
function GA(){GN.call(this);this.zy=null;}
function AAj(a){a.zy=D7(1);}
var L2=G(GA);
var AZh=null;function ANF(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFi(){var b;b=new L2;AAj(b);AZh=b;}
function Ea(){var a=this;Co.call(a);a.rr=null;a.m8=null;a.fK=0;a.qI=0;a.h1=0;}
var AZF=null;var AZG=null;var AZO=null;function AUj(){AUj=Bq(Ea);AMC();}
function AXc(a,b,c,d,e,f,g){var h=new Ea();X1(h,a,b,c,d,e,f,g);return h;}
function X1(a,b,c,d,e,f,g,h){AUj();Dd(a,b,c);a.rr=d;a.m8=e;a.fK=f;a.qI=g;a.h1=h;}
function AMC(){var b;b=new Ea;AEo();X1(b,C(85),0,C(86),AZP,2,0,0);AZF=b;b=AXc(C(87),1,C(88),AZP,2,0,1);AZG=b;AZO=I(Ea,[AZF,b]);}
function J0(){var a=this;B.call(a);a.xV=null;a.yP=null;}
function AFC(b){var c,d;if(Fy(b))K(ACZ(b));if(!AFE(P(b,0)))K(ACZ(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AFE(d))break a;else K(ACZ(b));}}c=c+1|0;}}
function AFE(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var M5=G(J0);
var AZI=null;function ACW(){ACW=Bq(M5);ALr();}
function AFR(a){var b,c;b=new U_;b.fE=C(89);HD();c=AZJ;b.hC=c;b.m1=c;b.yE=a;b.nU=0.3333333432674408;b.y7=0.5;b.pt=D7(512);b.tW=BU(512);return b;}
function ALr(){var b,c,d,e,f;b=new M5;ACW();c=R(BA,0);d=c.data;AFC(C(90));e=d.length;f=0;while(f<e){AFC(d[f]);f=f+1|0;}b.xV=C(90);b.yP=c.fs();AZI=b;}
var K8=G();
var AZQ=null;var AZH=null;function AA6(){AA6=Bq(K8);AQy();}
function AQy(){var b,c;AEo();b=BM((AZR.fs()).data.length);c=b.data;AZH=b;c[AZS.di]=1;c[AZP.di]=2;AEq();c=BM((AZT.fs()).data.length);b=c.data;AZQ=c;b[AZU.di]=1;b[AZV.di]=2;}
function QP(){var a=this;B.call(a);a.f3=null;a.ny=null;a.k2=null;a.uo=null;a.q4=null;a.rk=null;}
function ADa(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f3,b,c));}
function NT(a,b){var c,d,e,f,g,h,i,$$je;c=new BA;d=b;while(a.ny[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f3,b,d));f=e.data;FC();d=f.length;ACW();g=AZI;h=ADL(e,0,d);a:{try{i=AFR(g);HD();g=ABT(AEK(AGs(i,AZK),AZK),h);break a;}catch($$e){$$je=Er($$e);if($$je instanceof F7){g=$$je;}else{throw $$e;}}h=new Zi;h.j2=1;h.kC=1;h.ic=C(91);h.l9=g;K(h);}if(!g.Z&&g.dU==g.nt)c.b_=g.h0;else{f=BU(Cb(g));e=f.data;c.b_=f;OD(g,f,0,e.length);}return c;}
function N$(a,b){var c,d,e;c=new BA;d=b>>>1|0;e=d;while(a.k2[e]){e=e+1|0;}d=e-d|0;HW(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f3,b,d)));return c;}
var Hj=G(Co);
var AZS=null;var AZP=null;var AZR=null;function AEo(){AEo=Bq(Hj);AKY();}
function ALn(a,b){var c=new Hj();AFU(c,a,b);return c;}
function AFU(a,b,c){AEo();Dd(a,b,c);}
function AKY(){var b;AZS=ALn(C(92),0);b=ALn(C(93),1);AZP=b;AZR=I(Hj,[AZS,b]);}
var GE=G(Co);
var AZU=null;var AZV=null;var AZT=null;function AEq(){AEq=Bq(GE);ALB();}
function AVP(a,b){var c=new GE();ABN(c,a,b);return c;}
function ABN(a,b,c){AEq();Dd(a,b,c);}
function ALB(){var b;AZU=AVP(C(94),0);b=AVP(C(95),1);AZV=b;AZT=I(GE,[AZU,b]);}
var Ln=G(GA);
var AZi=null;function ALD(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHq(){var b;b=new Ln;AAj(b);AZi=b;}
var Xm=G(Ee);
function AFH(){BE.call(this);this.x9=null;}
function ACZ(a){var b=new AFH();ATw(b,a);return b;}
function ATw(a,b){Y(a);a.x9=b;}
var M4=G(0);
function ZI(){B.call(this);this.q_=null;}
function ASo(a,b){a.q_.setPointerCapture(b.pointerId);}
function ZJ(){B.call(this);this.pV=null;}
function AJD(a,b){a.pV.releasePointerCapture(b.pointerId);}
function Hv(){var a=this;B.call(a);a.nt=0;a.Z=0;a.dU=0;a.h8=0;}
function XX(a,b){a.h8=(-1);a.nt=b;a.dU=b;}
function EV(a,b){var c,d,e;if(b>=0&&b<=a.dU){a.Z=b;if(b<a.h8)a.h8=0;return a;}c=new BE;d=a.dU;e=new M;O(e);BL(V(H(V(H(e,C(96)),b),C(97)),d),93);Bi(c,N(e));K(c);}
function Cb(a){return a.dU-a.Z|0;}
function DV(a){return a.Z>=a.dU?0:1;}
var TS=G(0);
var LJ=G(Hv);
function AG5(b){var c,d;if(b>=0)return ARb(0,b,BU(b),0,b,0);c=new BE;d=new M;O(d);V(H(d,C(98)),b);Bi(c,N(d));K(c);}
function ADY(b,c,d){return ARb(0,b.data.length,b,c,c+d|0,0);}
function OD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BD;i=new M;O(i);V(H(V(H(i,C(99)),g),C(100)),f);Bi(h,N(i));K(h);}if(Cb(a)<d){j=new MA;Y(j);K(j);}if(d<0){j=new BD;k=new M;O(k);H(V(H(k,C(101)),d),C(102));Bi(j,N(k));K(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.h0.data[m+a.nd|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BD;d=b.length;k=new M;O(k);BL(V(H(V(H(k,C(103)),c),C(97)),d),41);Bi(j,N(k));K(j);}
function KQ(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.nA){b=new JD;Y(b);K(b);}e=d-c|0;if(Cb(a)<e){b=new Is;Y(b);K(b);}if(c>J(b)){f=new BD;d=J(b);b=new M;O(b);BL(V(H(V(H(b,C(104)),c),C(97)),d),41);Bi(f,N(b));K(f);}if(d>J(b)){f=new BD;c=J(b);b=new M;O(b);V(H(V(H(b,C(105)),d),C(106)),c);Bi(f,N(b));K(f);}if(c>d){b=new BD;f=new M;O(f);V(H(V(H(f,C(104)),c),C(107)),d);Bi(b,N(f));K(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;TY(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function KA(){var a=this;Hv.call(a);a.lZ=0;a.mJ=null;a.zl=null;}
function ADL(b,c,d){var e,f,g;e=b.data;f=new Y1;g=e.length;d=c+d|0;XX(f,g);ANr();f.zl=AZW;f.lZ=0;f.mJ=b;f.Z=c;f.dU=d;f.zp=0;f.oo=0;return f;}
function Y2(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.oo){e=new JD;Y(e);K(e);}if(Cb(a)<d){e=new Is;Y(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BD;j=new M;O(j);V(H(V(H(j,C(108)),h),C(100)),g);Bi(i,N(j));K(i);}if(d<0){e=new BD;i=new M;O(i);H(V(H(i,C(101)),d),C(102));Bi(e,N(i));K(e);}h=a.Z;k=h+a.lZ|0;l=0;while(l<d){b=a.mJ.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BD;d=b.length;i=new M;O(i);BL(V(H(V(H(i,C(103)),c),C(97)),d),41);Bi(e,N(i));K(e);}
function Pt(a){a.Z=0;a.dU=a.nt;a.h8=(-1);return a;}
function H$(){B.call(this);this.Am=null;}
var AZL=null;var AZK=null;var AZJ=null;function HD(){HD=Bq(H$);AO0();}
function AGK(a){var b=new H$();AFy(b,a);return b;}
function AFy(a,b){HD();a.Am=b;}
function AO0(){AZL=AGK(C(109));AZK=AGK(C(110));AZJ=AGK(C(111));}
var Oh=G(Cz);
function AOQ(a){}
function ANe(a,b,c){}
function CP(){var a=this;Cz.call(a);a.gl=null;a.t=null;}
function FV(a,b){var c,d,e;Eu(a,b);a.gl=ACe(0,0,64);c=new V_;c.cj=new Bf;c.en=CM(R(EF,0));c.dI=new Bf;c.vH=new Bf;c.xS=new B_;c.xT=new B_;c.c6=b.bf;d=b.b0;c.i9=d;c.cN=Sp(d);d=b.m.lm;e=new RX;e.s$=c;Ba(d,e);d=b.m.kq;e=new RV;e.xc=c;Ba(d,e);a.t=c;Ba(b.m.b$,new TF);b=b.m.b$;c=a.t;BP(c);d=new TE;d.ps=c;Ba(b,d);}
function FO(a){FD(a.bd.bf,a.gl);}
function G1(a,b,c){var d,e,f,g,h;a:{d=a.t;Cx(d.cj,b);e=d.b4;if(e!==c){d.b4=c;f=(Cs(d.en)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].g_(e,c);h=h+1|0;}}}}
var Qb=G(0);
var KJ=G(0);
function AG9(a){a.jo(KF());}
function KU(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IH;c=new Jc;d=new HF;ALK();Kx(d,AZX);M6(c,d,BO(AZY),BO(AZZ),BO(AZ0),BO(AZY),BO(AZ1),BO(AZ2),BO(AZ3),BO(AZ4),BO(AZ5),BO(AZ6));AFx();e=(AZ7.fs()).data;f=e.length;g=R(Jz,f);h=g.data;i=0;while(i<f){h[i]=e[i].kY;i=i+1|0;}j=AE4(S(C(112)),S(C(113)),S(C(114)),S(C(115)));k=new IO;l=new I3;AIh();m=AZ8;M$(l,m,AZ9,AZ$,AZ_,A0a,m);Mg(k,l,AF5(),AGY(S(C(116)),S(C(117)),S(C(118))),AF5(),AAz(1,0.17499999701976776),A0b,A0c);JJ(b,c,g,j,k,AAO(S(C(119)),S(C(120)),S(C(121)),S(C(122))));a.jo(b);}
function AD2(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IH;c=new Jc;d=new HF;AFT();Kx(d,A0d);M6(c,d,BO(A0e),BO(A0f),BO(A0g),BO(A0e),BO(A0h),BO(A0i),BO(A0j),BO(A0k),BO(A0l),BO(A0m));AEW();e=(A0n.fs()).data;f=e.length;g=R(Jz,f);h=g.data;i=0;while(i<f){h[i]=e[i].l7;i=i+1|0;}j=AE4(S(C(123)),S(C(124)),S(C(125)),S(C(126)));k=new IO;l=new I3;AIA();m=A0o;M$(l,m,A0p,A0q,A0r,A0s,m);Mg(k,l,AGv(),AGY(S(C(127)),S(C(128)),CQ(0)),AGv(),AAz(1,0.07500000298023224),A0t,A0u);JJ(b,c,g,j,k,AAO(S(C(129)),S(C(130)),S(C(131)),S(C(132))));a.jo(b);}
var KM=G(0);
function Kp(){var a=this;CP.call(a);a.F=null;a.E=null;a.eB=null;a.hE=0;a.gi=null;a.je=null;a.xe=null;}
function AXT(a){var b=new Kp();AC0(b,a);return b;}
function AC0(a,b){var c,d,e;FV(a,b);c=new RW;c.dl=new Bf;c.e2=new Bf;c.i4=new Bf;c.i5=new Bf;c.i2=new Bf;c.i3=new Bf;a.je=c;a.xe=TU();c=ASV(a.t);a.eB=c;a.F=AC9(a.t,c);a.E=AC9(a.t,a.eB);c=a.F;c.bS=1;d=new WI;d.wv=a;e=new WJ;e.r6=a;Yp(c,d,d);Yp(a.E,e,e);c=a.F;d=new WK;d.oC=a;c.jf=d;d=a.E;e=new WD;e.vp=a;d.jf=e;Pd(a.t,c);Ba(b.m.bz,a.eB);Ba(b.m.dD,a.eB);Ba(b.m.dD,a);Ba(b.m.bz,a);c=b.m.b$;d=new WF;d.rL=a;Ba(c,d);c=b.m.b$;d=new IA;e=new WG;e.og=a;N5(d,b,e);Ba(c,d);Ba(b.m.f8,a);Ba(b.m.gH,a);b=b.m.e0;c=new WH;c.tM=
a;Ba(b,c);KU(a);}
function AAp(a,b){if(a.F===b)a.hE=a.hE|1;if(a.E===b)a.hE=a.hE|2;if((a.hE&3)==3)AGJ(a);}
function AUD(a,b,c){if(D_(a.t,a.F))return Hm(a.F,b,c);if(!D_(a.t,a.E))return 0;return Hm(a.E,b,c);}
function ADC(a){if(D_(a.t,a.F))return ZZ(a,a.F);if(!D_(a.t,a.E))return null;return ZZ(a,a.E);}
function ZZ(a,b){var c;c=new WP;c.rU=b;return c;}
function Xx(a,b,c){var d,e,f,g,h,i,j;d=a.gi;if(d!==null&&d.gt!==null){e=b!==a.F?0:1;f=FS(b);g=(Hi(b)+f|0)/2|0;h=g-f|0;d=a.gi;d=d.gt.data[Gp(d,g,e)];i=g-(!e?d.ir:d.is)|0;j=b.bp-W(f,b.R)|0;c.bp=L1(W(((!e?d.is:d.ir)+i|0)-h|0,c.R)+j|0,H6(c));return;}}
function AGJ(a){var b,c,d,e,f,g;Bt(Bz(),C(133));b=a.F.e;c=a.E.e;d=ES(b.f);e=ES(c.f);f=ABS(b.f);g=ABS(c.f);b=a.bd.b0;c=new AAa;c.td=a;CU(b,c,C(134),I(B,[d,f,e,g]));}
function ARS(a,b){var c,d;c=LL(a.F,b);d=LL(a.E,b);return !c&&!d?0:1;}
function AO4(a){FO(a);JG(a.F);JG(a.E);AG_(a.je,a.gi,a.t,a.F,a.E,a.xe,a.eB.Y);Z7(a.eB);}
function AM7(a){return M0(0);}
function ASG(a){OS(a.F);OS(a.E);}
function AOV(a){Z5(a.F);Z5(a.E);}
function ATO(a,b){PF(a.F,b);PF(a.E,b);}
function AOg(a,b,c){G1(a,b,c);AEd(a,b,c);}
function AEd(a,b,c){var d,e,f,g,h,i;d=new Bf;e=Cc(20.0,c);f=new Bf;g=b.b/2|0;h=e/2|0;Rm(f,g-h|0,b.a);JV(a.F,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;JV(a.E,d,f,c);U(a.je.dl,f.b,d.a);U(a.je.e2,d.b-f.b|0,f.a);}
function AIC(a,b){BP(b);NY(a.eB,b);KP(a.F,b);KP(a.E,b);}
function AGq(a,b){if(b.bl!=121)return 0;return 1;}
function ADK(a,b){var c,d,e;if(D_(a.t,a.F)){c=a.eB;d=a.F;e=new Qk;e.nX=a;MV(c,b,d,a,a,e);}if(D_(a.t,a.E)){c=a.eB;d=a.E;e=new Qj;e.w6=a;MV(c,b,d,a,a,e);}return 1;}
function AQU(a,b){var c,d;c=DR(a.F,b.i)&&Pg(a.F,b)?1:0;d=DR(a.E,b.i)&&Pg(a.E,b)?1:0;return !c&&!d?0:1;}
function AM$(a,b,c,d){var e,f;e=DR(a.F,b.i)&&NW(a.F,b,c,d)?1:0;f=DR(a.E,b.i)&&NW(a.E,b,c,d)?1:0;return !e&&!f?0:1;}
function APd(a,b,c){var d,e,f,g,h,i,j,k;d=DR(a.F,b.i);e=DR(a.E,b.i);f=a.t;g=f.ex;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.E?0:1;if(d&&!(!h&&!k))F4(f,i);if(e&&!(!h&&!j))F4(a.t,a.E);if(d){i=ND(a.F,b,c);if(i!==null)return i;}return !e?null:ND(a.E,b,c);}
function ARJ(a,b,c){var d,e,f,g;d=DR(a.F,b.i);e=DR(a.E,b.i);f=d&&U0(a.F,b,c)?1:0;g=e&&U0(a.E,b,c)?1:0;return !f&&!g?0:1;}
function ARg(a,b,c,d){var e,f,g,h;e=DR(a.F,b.i);f=DR(a.E,b.i);g=e&&Kv(a.F,c,d)?1:0;h=f&&Kv(a.E,c,d)?1:0;return !g&&!h?0:1;}
function AN2(a){return ADC(a);}
var Xz=G(Kp);
function APr(a){return M0(1);}
function Qn(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new NH;d=d.then(Bl(e,"f"));f=new NK;f.tc=b;f.tb=c;g=new NI;d.then(Bl(f,"f"),Bl(g,"f"));}
var AGE=G();
function ATM(b){var c,d;if(J(b)>0){c=new M;O(c);H(H(c,C(135)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(IV(b)){case -1570047148:if(!Bn(b,C(136)))break a;d=16;break a;case -1509980539:if(!Bn(b,C(137)))break a;d=12;break a;case -1073555521:if(!Bn(b,C(138)))break a;d=13;break a;case -1045861099:if(!Bn(b,C(139)))break a;d=17;break a;case -1045861098:if(!Bn(b,C(140)))break a;d=18;break a;case -811765794:if(!Bn(b,C(141)))break a;d=5;break a;case -785237654:if(!Bn(b,C(142)))break a;d=10;break a;case -631889171:if
(!Bn(b,C(143)))break a;d=8;break a;case -439438829:if(!Bn(b,C(144)))break a;d=19;break a;case -223304637:if(!Bn(b,C(145)))break a;d=2;break a;case 2129957:if(!Bn(b,C(146)))break a;d=1;break a;case 3343967:if(!Bn(b,C(147)))break a;d=9;break a;case 3556498:if(!Bn(b,C(148)))break a;d=4;break a;case 485517998:if(!Bn(b,C(149)))break a;d=6;break a;case 544901384:if(!Bn(b,C(150)))break a;d=3;break a;case 1030621992:if(!Bn(b,C(151)))break a;d=15;break a;case 1465713255:if(!Bn(b,C(152)))break a;d=7;break a;case 1554501643:if
(!Bn(b,C(153)))break a;d=14;break a;case 1609169232:if(!Bn(b,C(154)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new XF;break b;case 3:case 4:b=new XC;break b;case 5:b=new XB;break b;case 6:b=new XE;break b;case 7:b=new XD;break b;case 8:case 9:b=new XJ;break b;case 10:b=new XI;break b;case 11:b=new XL;break b;case 12:b=new XK;break b;case 13:b=new UO;break b;case 14:b=new UN;break b;case 15:b=new UM;break b;case 16:b=new UF;break b;case 17:b=new UE;break b;case 18:b=new UC;break b;case 19:b
=new UB;break b;default:b=new UA;break b;}b=new XG;}return b;}
var ADV=G();
var KK=G(LJ);
function ADA(){var a=this;KK.call(a);a.nA=0;a.nd=0;a.h0=null;}
function ARb(a,b,c,d,e,f){var g=new ADA();AVX(g,a,b,c,d,e,f);return g;}
function AVX(a,b,c,d,e,f,g){XX(a,c);a.Z=e;a.dU=f;a.nd=b;a.nA=g;a.h0=d;}
function TY(a,b,c){a.h0.data[b+a.nd|0]=c;}
function Lv(){var a=this;B.call(a);a.x7=null;a.ro=null;a.zI=0.0;a.nM=0.0;a.mT=null;a.l6=null;a.jp=0;}
function Mr(){var a=this;B.call(a);a.g9=0;a.i1=0;}
var AZN=null;var AZM=null;function ABu(a,b){var c=new Mr();ACb(c,a,b);return c;}
function ACb(a,b,c){a.g9=b;a.i1=c;}
function IS(a){return a.g9?0:1;}
function Hz(a){return a.g9!=1?0:1;}
function Lm(a){return !SA(a)&&!MN(a)?0:1;}
function SA(a){return a.g9!=2?0:1;}
function MN(a){return a.g9!=3?0:1;}
function KT(a){var b;if(Lm(a))return a.i1;b=new D$;Y(b);K(b);}
function Ec(b){return ABu(2,b);}
function W7(a){var b,c;switch(a.g9){case 0:b=new R8;Y(b);K(b);case 1:b=new Zq;Y(b);K(b);case 2:b=new WX;c=a.i1;Y(b);b.AJ=c;K(b);case 3:b=new RT;c=a.i1;Y(b);b.AB=c;K(b);default:}}
function ACF(){AZN=ABu(0,0);AZM=ABu(1,0);}
var ABf=G();
var I2=G(0);
var Or=G();
function ALM(a,b){return b.arrayBuffer();}
var Oq=G();
function AQc(a,b){var c,d;c=new QN;d=new QL;return $rt_globals.WebAssembly.instantiate(b,ANO(Bl(c,"f"),Bl(d,"f")));}
var Oo=G();
function AQ1(a,b){AJu(b);}
var On=G();
function AKb(a,b){AGO(b);}
function Vs(){B.call(this);this.oK=null;}
function AVb(a,b){LZ(a.oK.F,b);}
function Vt(){B.call(this);this.ut=null;}
function AN8(a,b){LZ(a.ut.E,b);}
var XG=G();
function AT5(a,b){return AXT(b);}
var XF=G();
function AId(a,b){return AX3(b);}
var XC=G();
function ALi(a,b){return AYu(b);}
var XB=G();
function AQa(a,b){var c,d,e;c=new Pn;FV(c,b);d=new NJ;d.mM=new Bf;d.nq=new Bf;c.rn=d;c.ee=ADX();c.c8=ADX();c.eA=Sa(c.t);Ba(c.t.en,c);d=b.m.b$;e=new VK;e.uw=c;Ba(d,e);Ba(b.m.bz,c);b=b.m.e0;d=new VG;d.v6=c;Ba(b,d);AAm(c.c8);c.nG=EW(C(155),25.0);JF(c.eA,Hh(),c.nG);BJ(c.gl,CQ(43));b=Hh();Il(c.ee,b);Il(c.c8,b);b=c.ee;b.kc=new VH;d=c.c8;d.kc=new VI;d.ly=new P0;d.nS=new P1;KV(b,(SW(0)).jI);KV(c.c8,(SW(0)).jI);return c;}
var XE=G();
function ALo(a,b){var c,d,e;c=new UD;FV(c,b);c.lk=EW(C(156),15.0);d=AEC();c.fk=d;Ba(c.t.en,d);Ba(c.t.en,c);BJ(c.gl,CQ(43));d=Sa(c.t);c.iE=d;JF(d,Hh(),EW(C(155),25.0));d=b.m.b$;e=new Xu;e.yp=c;Ba(d,e);d=b.m.e0;e=new Xw;e.v7=c;Ba(d,e);Ba(b.m.bz,ACy(c.iE));Ba(b.m.bz,c.fk);b=b.m.dD;d=c.fk;BP(d);e=new Xv;e.r8=d;Ba(b,e);return c;}
var XD=G();
function AHu(a,b){var c,d,e;c=new Ow;FV(c,b);c.g3=BH();c.fS=BH();c.qu=S(C(157));c.iW=ATs();c.g2=0;d=c.t.en;e=new NZ;e.qg=c;Ba(d,e);Ba(b.m.bz,c);d=b.m.b$;e=new NX;e.wA=c;Ba(d,e);b=HT(b.bf,C(155),35);c.i7=b;c.kv=ABh(Fi(b));BJ(c.gl,S(C(158)));return c;}
var XJ=G();
function AKW(a,b){var c,d,e,f;c=new Uz;Eu(c,b);c.g5=AGN();c.et=0;c.uS=500;c.qv=H7(0,0,0,255,new B_);c.kR=20;c.o8=20;c.t3=KF();d=b.m.bz;e=new Ob;e.jA=c;f=new WC;f.tU=e;e.qi=f;Ba(d,e);d=b.m.dD;e=new TG;e.u2=c;Ba(d,e);c.eP=b.bf;c.pJ=Sp(b.b0);Tf(c.g5,HT(c.eP,C(155),c.o8),c.kR,c.eP);c.iu=Ja();return c;}
var XI=G();
function AOE(a,b){var c,d;c=new R9;GM(c,b);b=b.m.b$;d=new Rq;d.rY=c;Ba(b,d);return c;}
var XL=G();
function ASI(a,b){return AYl(b);}
var XK=G();
function AHH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new NU;GM(c,b);c.er=FY(0,0,300,300);c.fX=U7(0,0,3,3);d=b.bf;b=b.m.bz;e=new VV;e.lD=c;Ba(b,e);b=AG8(d);c.vu=b;Gb(c.er,b);GF(c.er);b=c.er.bx;FZ();BJ(b,A0v);BJ(c.er.bo,CR(204,120,50));AEq();e=AZV;f=D7((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CZ(d);AA6();switch(AZQ.data[e.di]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b
=new EB;Y(b);K(b);}b:{Oj(m,5,5,h);b=m.eu.dR;switch(AZQ.data[e.di]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new EB;Y(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.mq=m;U(c.fX.s,BS(m),Da(c.mq));BJ(c.fX.bx,c.mW);return c;}
var UO=G();
function AH6(a,b){var c,d,e;c=new Ut;GM(c,b);c.gk=FY(0,0,300,300);c.kL=new Bf;c.jB=new Bf;c.ik=new Bf;d=b.bf;b=b.m.bz;e=new PE;e.jq=c;Ba(b,e);b=AG8(d);c.oW=b;Gb(c.gk,b);GF(c.gk);b=c.gk.bx;FZ();BJ(b,A0v);BJ(c.gk.bo,CR(204,120,50));return c;}
var UN=G();
function AOe(a,b){var c,d,e,f;c=new Uh;Eu(c,b);c.Ac=20;c.AD=11;c.xY=220;c.kg=new Bf;c.zx=5000;c.hy=1;c.ga=I(HF,[CQ(0),CQ(255)]);c.ew=b.bf;d=b.m.bz;e=new Rn;e.jO=c;f=new XZ;f.sP=e;e.oz=f;Ba(d,e);b=b.m.dD;d=new AAc;d.pO=c;Ba(b,d);b=CO(c.ew,200,220);c.kS=b;Gn(b,C(155),20.0);b=CO(c.ew,200,20);c.fZ=b;Gn(b,C(155),20.0);c.h3=Ja();return c;}
var UM=G();
function APN(a,b){var c,d,e;c=new Ju;GM(c,b);Ba(b.m.bz,c);d=b.m.b$;e=new YU;e.nQ=c;Ba(d,e);Ba(b.m.f8,new YT);d=b.m.f8;e=new YS;e.rb=c;Ba(d,e);Ba(b.m.gH,new YQ);d=b.m.gH;e=new YV;e.tw=c;Ba(d,e);b=!ZL(b.b0)?C(159):C(160);d=new M;O(d);H(H(d,C(161)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var UF=G();
function ALR(a,b){var c,d,e,f,g,h;c=new TZ;Eu(c,b);c.ua=CQ(20);c.gd=FY(0,0,300,300);d=b.m.b$;e=new TD;e.Av=c;Ba(d,e);b=b.bf;d=HT(b,C(10),88);CC(b.cR,d);f=Dl(AUH(EA(b.cR,C(162)),EA(b.cR,C(163))));g=KL(d,1.1799999475479126);h=Bz();e=new M;O(e);V(H(V(H(e,C(164)),f),C(165)),g);Bt(h,N(e));e=CO(b,f,g*3|0);c.hS=e;CC(e,d);Ch(c.hS,C(162),0.0,d.du);Ch(c.hS,C(163),0.0,g+d.du);Ch(c.hS,C(166),0.0,(g*2|0)+d.du);b=CZ(b);c.lO=b;CS(b,c.hS);Gb(c.gd,c.lO);GF(c.gd);b=c.gd.bx;FZ();BJ(b,A0v);BJ(c.gd.bo,A0w);return c;}
var UE=G();
function AHO(a,b){var c;c=new Vk;Ni(c,b);Hu(c.ck,0,0,300,300);U(c.dc,300,300);return c;}
var UC=G();
function AUb(a,b){var c;c=new Vj;Ni(c,b);c.fy=new Bf;c.gf=new Bf;U(c.d4,150,140);U(c.dc,500,100);U(c.e7,150,200);U(c.ev,500,250);return c;}
var UB=G();
function AOR(a,b){var c,d,e,f;c=new Ze;FV(c,b);c.pW=EW(C(156),20.0);d=AEC();c.ey=d;Ba(c.t.en,d);Ba(c.t.en,c);BJ(c.gl,CQ(43));d=Sa(c.t);c.hW=d;JF(d,Hh(),EW(C(155),25.0));d=b.m.b$;e=new Z2;e.zz=c;Ba(d,e);d=b.m.e0;e=new Z4;e.rW=c;Ba(d,e);Ba(b.m.bz,ACy(c.hW));Ba(b.m.bz,c.ey);d=b.m.bz;e=c.t.cN;f=new Ug;f.u7=e;Ba(d,f);b=b.m.dD;d=c.ey;BP(d);e=new Z3;e.vF=d;Ba(b,e);return c;}
var UA=G();
function ASK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Nw;AHa(c,b);d=c.cZ;e=new Jv;f=ARy(C(167));g=R(BA,8);h=J(C(168));i=0;j=0;k=h+1|0;while(true){l=G8(C(168),10,j);m=l>=0?Cg(C(168),j,l):Do(C(168),j);n=i+1|0;g=AFK(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}ZH(e,QZ(g,n),C(169),f);LZ(d,e);return c;}
function HB(){var a=this;B.call(a);a.bP=0;a.cq=0;a.dg=0;a.jH=0;}
function A0x(a,b,c,d){var e=new HB();V4(e,a,b,c,d);return e;}
function V4(a,b,c,d,e){a.bP=d;a.cq=b;a.dg=c;a.jH=e;}
function QF(){var a=this;HB.call(a);a.ea=null;a.bl=0;a.ig=0;a.tt=0;a.k6=0;}
var AFY=G();
function Ye(b,c){return (b+(c/2|0)|0)/c|0;}
function RF(b,c,d){if(b<(2147483647/c|0))return Ye(W(b,c),d);return 0.5+c*b/d|0;}
function Jf(b,c){return ((b+c|0)-1|0)/c|0;}
function HN(b){return b+0.5|0;}
function Dl(b){return b+0.5|0;}
function EG(b,c,d){return Bd(b,Bb(c,d));}
function Nl(){var a=this;HB.call(a);a.i=null;a.xW=null;}
var VS=G(0);
function OY(){var a=this;B.call(a);a.wF=null;a.wG=null;}
function AOj(a,b){var c,d;c=a.wF;d=a.wG;$rt_globals.console.info("paste plain string "+b);c.g(FR(b));Dm(d);}
function Wx(){B.call(this);this.xh=null;}
function X_(a,b){a.xh.clipboardData.setData("text/plain",$rt_ustr(b));}
function Y1(){var a=this;KA.call(a);a.zp=0;a.oo=0;}
function RW(){var a=this;B.call(a);a.dl=null;a.e2=null;a.i4=null;a.i5=null;a.i2=null;a.i3=null;}
function AG_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=c.c6;i=a.dl;Bx(h,i.b,i.a,a.e2,g.b7.fi);if(b!==null&&b.gt!==null){j=CF(c,2.0);k=Gp(b,FS(d),1);l=Gp(b,Hi(d),1);m=Gp(b,FS(e),0);n=Gp(b,Hi(e),0);o=Bb(k,m);p=Bd(l,n);n=BG(o,p);if(n<=0)Cw(h,1);while(o<=p){q=b.gt.data[o];if(q.lf){k=d.R;r=W(k,q.is)-d.bp|0;s=r+W(q.no,k)|0;k=e.R;t=W(k,q.ir)-e.bp|0;u=t+W(q.nn,k)|0;U(a.i4,a.dl.b,r);U(a.i2,a.dl.b,s);U(a.i5,a.dl.b+a.e2.b|0,t);U(a.i3,a.dl.b+a.e2.b|0,u);v=Bd(Bb(r,t),a.dl.a);w=Bb(Bd(s,u),a.dl.a+a.e2.a|0);Hu(f,
a.dl.b,v,a.e2.b,w-v|0);BJ(f.bx,g.hp.hi);BJ(f.bo,IZ(g.dY,g,q.lf));if(r==s){x=c.dI;U(x,a.dl.b-d.ba.b|0,j);if(t>=r){i=a.i2;U(i,i.b,i.a+j|0);k=r;}else{k=r-j|0;i=a.i4;U(i,i.b,i.a-j|0);}Bx(h,d.ba.b,k,x,f.bo);}if(t==u){i=c.dI;U(i,e.cz.b,j);if(r>=t){x=a.i3;U(x,x.b,x.a+j|0);}else{t=t-j|0;x=a.i5;U(x,x.b,x.a-j|0);}Bx(h,a.dl.b+a.e2.b|0,t,i,f.bo);}i=f.A;AAw(h,i.b,i.a,f.s,a.i4,a.i5,a.i2,a.i3,f.bo);}o=o+1|0;}if(n<=0)Cw(h,0);return;}}
function Js(){var a=this;B.call(a);a.A=null;a.s=null;a.bo=null;a.bx=null;}
function TU(){var a=new Js();WB(a);return a;}
function U7(a,b,c,d){var e=new Js();AJ7(e,a,b,c,d);return e;}
function WB(a){a.A=new Bf;a.s=new Bf;a.bo=new B_;a.bx=new B_;}
function AJ7(a,b,c,d,e){a.A=new Bf;a.s=new Bf;a.bo=new B_;a.bx=new B_;Hu(a,b,c,d,e);}
function Hu(a,b,c,d,e){U(a.A,b,c);U(a.s,d,e);}
function U6(a){U(a.s,0,0);}
function K2(a){var b;b=a.s;return W(b.b,b.a)?0:1;}
function Eq(a,b){return Gu(b,a.A,a.s);}
function S$(a,b,c,d){var e;e=a.A;Bx(b,e.b+c|0,e.a+d|0,a.s,a.bo);}
function Z1(a,b,c,d,e,f){var g,h,i,j;g=a.A;d=g.b+d|0;e=g.a+e|0;g=a.s;h=a.bx;i=a.bo;IT(b,b.ie);JC(b.ie,b.bu,d,e,g,b.dK);VZ(b.ie,b.bu,c);g=b.ie;j=b.bu;G6(j,g.xl,h);G6(j,g.xj,i);c=g.rI;j.uniform2f(c,f,0.0);IM(b);}
function ADI(){var a=this;B.call(a);a.eG=null;a.eM=null;a.dq=null;a.ch=null;a.Y=null;}
function ASV(a){var b=new ADI();ARd(b,a);return b;}
function ARd(a,b){a.eM=AEC();a.eG=b;a.ch=Sa(b);}
function NY(a,b){var c;a.Y=b;c=a.dq;if(c!==null)c.e8=b.U;JF(a.ch,b.U,b.wq);}
function Z7(a){LP(a.eM,a.eG.c6);HV(a.ch);}
function AQZ(a,b){return !AAN(a.eM,b)&&!LC(a.ch,b)?0:1;}
function AUw(a,b,c,d){return !ABQ(a.eM,b,c,d)&&!Ky(a.ch,b,c,d)?0:1;}
function AR$(a,b,c){var d;d=M3(a.ch,b,c);if(d!==null)return d;return ADD(a.eM,b,c);}
function AOq(a,b,c){return !AGT(a.eM,b,c)&&!DD(a.ch)?0:1;}
function SM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANs();i=c.j;j=0;while(j<i){if(f===null){k=(Br(c,j)).by;l=Tv(Fc(BV(g.f,k)));m=Uo(g.gK);}else{n=f.data;k=n[j].mi.l3;l=!B1(g.gK,n[j].jR)?C(30):Tv(Fc(BV(g.f,k)));m=Uo(n[j].jR);}if(J(l)>153){o=Cg(l,0,150);n=new M;O(n);H(H(n,o),C(170));l=N(n);}if(J(m)>153){o=Cg(m,0,150);n=new M;O(n);H(H(n,o),C(170));m=N(n);}p=C8(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Br(c,j);}if(f!==null){q=new Zj;q.rh=d;q.ri=o;}else{q=new Zk;q.wJ=d;q.wI=n;}Ng(h,
m,p,l,q);j=j+1|0;}r=YD(h);if(a.dq!==null)UX(a);c=new Se;n=a.eG;o=new P9;o.u9=a;o.u8=d;AGo(c,n,o);OK(c,r);d=a.Y;AAn(c,d.U,d.w4);a.dq=AAT(a.eG);d=AAy(c,a.eG);n=a.Y.U;AAg(d,n.ls,n.k7);K1(a.dq,d);d=a.dq;n=new M;O(n);H(H(n,C(171)),e);Iq(d,N(n),a.Y.vD,4.0);d=a.dq;d.e8=a.Y.U;HS(a.eM,d);d=a.dq;s=(d.T.r.a+CF(d.bC,2.0)|0)+CF(a.eG,2.0)|0;i=(c.dT+c.eC|0)+c.gr|0;t=CF(c.cx,5.0);e=B$(EG(t,b.b,c.cx.cj.b-i|0),EG(s,b.a,c.cx.cj.a-c.c0.a|0));Rd(c);AB7(c);s=(c.dT+c.eC|0)+c.gr|0;b=c.cx;i=(b.cj.b-e.b|0)-CF(b,5.0)|0;b=c.cx;t=(b.cj.a
-e.a|0)-CF(b,5.0)|0;d=B$(Bb(s,i),Bb(c.c0.a,t));FH(a.dq,e,d);F4(a.eG,c);}
function UX(a){JZ(a.eM,a.dq);LR(a.dq);a.dq=null;}
function Su(a,b){var c;c=new Tp;c.qK=a;c.qL=b;return c;}
function MV(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DD(a.ch)){g=a.ch;h=b.i;b=new UZ;b.W=a;b.bK=c;b.pr=f;b.iJ=e;b.kB=d;i=U3();e=b.bK.e;d=DX(e);e=Gv(e);f=b.bK.fl;if(Sn(f,d,e)!==null){j=b.W.Y.U.bg;k=new VX;k.u4=b;k.u5=h;D2(i,C(172),j,k);}if(MQ(f,d,e)!==null){j=b.W.Y.U.bg;k=new VY;k.va=b;k.vb=h;D2(i,C(173),j,k);}if(VT(f,d,e)!==null){e=b.W.Y.U.bg;f=new VW;f.s1=b;f.s0=h;D2(i,C(174),e,f);}e=b.W.Y.U.bg;f=new VU;f.rw=b;f.rv=h;D2(i,C(175),e,f);if(!b.bK.ei){e=b.W.Y.U.bg;f=new Vx;f.po=b;D2(i,C(176),e,f);}e=b.W.Y.U.bg;f
=new Vv;f.sU=b;D2(i,C(177),e,f);if(!b.bK.ei&&ZL(II(b))){e=b.W.Y.U.bg;f=new Vw;f.vC=b;D2(i,C(178),e,f);}l=b.W.Y.U.bg;d=U3();m=b.W.Y.U.bg;n=R(C$,3);o=n.data;k=b.kB;BP(k);e=new Yb;e.tB=k;o[0]=DL(C(179),m,e);k=b.W.Y.U.bg;p=b.kB;BP(p);e=new Ya;e.p4=p;o[1]=DL(C(180),k,e);e=b.W.Y.U.bg;j=b.kB;BP(j);k=new Yd;k.rt=j;o[2]=DL(C(181),e,k);Kn(d,C(182),m,F_(n),A0y);f=b.W.Y.U.bg;n=R(C$,2);o=n.data;k=b.iJ;BP(k);j=new Zo;j.wf=k;o[0]=DL(C(183),f,j);j=b.W.Y.U.bg;k=b.iJ;BP(k);p=new Zn;p.rC=k;o[1]=DL(C(184),j,p);GO(d,C(185),f,F_(n));f
=b.W.Y.U.bg;j=new Pm;j.vd=b;Kn(d,C(186),f,j,A0y);GO(i,C(187),l,IG(d));k=b.W.Y.U.bg;d=U3();GO(d,C(188),b.W.Y.U.bg,ADl(b));f=b.W.Y.U.bg;m=new AAh;m.p5=b;D2(d,C(189),f,m);GO(i,C(190),k,IG(d));GD(g,h,IG(i),Su(a,c));}}
function ASy(a,b,c,d){return LK(a.eM,b,c,d);}
function AB4(b){var c;c=new U5;c.wj=b;return c;}
var H4=G(0);
function AP3(a){}
function ALZ(a){}
function ACU(){var a=this;B.call(a);a.ba=null;a.cz=null;a.cE=null;a.V=null;a.j$=null;a.xC=0;a.nx=null;a.c3=null;a.u=0;a.y=0;a.h_=0;a.mA=0;a.gq=0;a.km=null;a.fQ=null;a.cH=null;a.R=0;a.e=null;a.eI=null;a.fl=null;a.q=null;a.he=null;a.dZ=null;a.kJ=null;a.hd=null;a.vL=0;a.tn=0;a.cT=0;a.cl=0;a.cu=0;a.fw=null;a.fo=null;a.fq=null;a.bp=0;a.dz=0;a.hK=0;a.iM=0;a.iS=0;a.AN=0;a.yg=0;a.ku=0;a.jM=0;a.j4=0;a.d_=0;a.dh=null;a.kk=0;a.iZ=0;a.fg=null;a.ei=0;a.bS=0;a.h4=null;a.hj=null;a.x2=null;a.iG=null;a.so=null;a.un=null;a.jf
=null;a.lN=0;a.xK=null;a.fv=E$;a.pG=null;a.vr=null;}
function AC9(a,b){var c=new ACU();ARF(c,a,b);return c;}
function ARF(a,b,c){var d,e,f,g;a.ba=new Bf;a.cz=new Bf;a.xC=0;a.nx=R(Bj,10);a.c3=AMD();a.gq=16;a.km=C(155);a.cH=R(LI,4);d=new Jv;e=new Ld;e.dO=IK();e.dr=IK();e.gR=BH();e.z=VL(C(30));e.h2=0;e.cK=0;e.c7=VM(e);e.d2=ASa();d.f=e;d.j0=C(191);d.gK=null;a.e=d;f=new Zv;f.qS=CM(R(KZ,0));f.xz=CM(R(KZ,0));f.om=CM(R(UH,0));f.wk=CM(R(RI,0));f.vK=CM(R(FU,0));f.vm=CM(R(T2,0));a.fl=f;a.q=AI_();e=new V3;e.e9=R(LB,16);e.e3=0;e.dB=(-1);a.he=e;a.hd=R(ER,0);a.fw=B$(1,0);a.fo=Ja();a.fq=Ja();a.bp=0;a.dz=0;a.hK=0;a.iS=1;a.ku=1;a.jM
=1;a.j4=0;a.d_=3;a.dh=AGN();a.fg=C(192);a.ei=0;a.bS=0;a.h4=null;a.hj=BH();e=E_();BP(e);f=new O_;f.zT=e;a.iG=f;a.xK=new B_;e=new O$;e.n2=a;a.pG=e;e=new O9;e.sm=a;a.vr=e;a.cE=b;a.V=b.c6;a.j$=c;g=a.nx.data;b=new O8;b.vY=a;g[0]=b;b=new Pe;b.px=a;g[1]=b;b=new Pc;b.tE=a;g[2]=b;b=new Pb;b.xH=a;g[3]=b;b=new Pa;b.pj=a;g[4]=b;b=new O7;b.sS=a;g[5]=b;b=new O6;b.wx=a;g[6]=b;AH9();a.iM=A0z===A0A?0:1;}
function JV(a,b,c,d){Cx(a.ba,b);Cx(a.cz,c);Uv(a,b,c,d);}
function Yp(a,b,c){a.so=b;a.un=c;}
function Uv(a,b,c,d){var e;a.cT=Cc(80.0,d);a.cl=Cc(1.0,d);a.cu=Cc(10.0,d);if(!a.bS)Cx(a.cE.dI,a.ba);else U(a.cE.dI,(b.b+c.b|0)-JO(a)|0,b.a);TQ(a.dh,a.cE.dI,JO(a),c.a,d);b=a.c3;e=Cc(2.0,d);b.eF.s.b=e;SL(a,a.km,a.gq);Wl(a);}
function ALN(a){a.mA=1;L8(a);}
function AIG(a){a.mA=0;}
function L8(a){Rt(a.c3,Ka(Ct(a)));}
function KP(a,b){var c,d;a.dZ=b;c=a.c3;d=b.b7.xy;BJ(c.eF.bo,d);c=a.fo;d=b.b7;Hl(c,d.l2,d.l_);c=a.fq;b=b.b7;Hl(c,b.l2,b.l_);}
function OS(a){JN(a,a.fQ.nr,a.gq+1|0);}
function Z5(a){var b;b=a.gq;if(b<=7)return;JN(a,a.fQ.nr,b-1|0);}
function PF(a,b){JN(a,b,a.gq);}
function JN(a,b,c){if(a.cE.b4!==0.0){SL(a,b,c);Gq(Ct(a));}a.gq=c;a.km=b;}
function SL(a,b,c){var d,e,f,g,h,i;d=Cc(c,a.cE.b4);e=a.fQ;f=e!==null?e.qD:0;if(!(d==f&&B1(b,a.km))){Qw(a.dh);g=a.hd.data;c=g.length;f=0;while(f<c){ZO(g[f]);f=f+1|0;}g=a.e.f.z.data;c=g.length;f=0;while(f<c){Ev(g[f]);f=f+1|0;}g=a.cH.data;c=HO(0,0);e=a.V;h=d;g[c]=Hk(e,b,h,400,0);a.cH.data[HO(0,1)]=Hk(a.V,b,h,400,2);a.cH.data[HO(1,0)]=Hk(a.V,b,h,700,0);a.cH.data[HO(1,1)]=Hk(a.V,b,h,700,2);e=a.cH.data[HO(0,0)];a.fQ=e;c=Fi(e);a.R=Dl(c*1.25);a.c3.eF.s.a=Fi(a.fQ);a.kJ=CK(a.kJ,CO(a.V,1024,a.R));f=a.R;i=Y_(a.c3);e=new M;O(e);b
=H(H(e,C(193)),b);BL(b,32);V(H(V(H(V(H(V(b,d),C(194)),c),C(165)),f),C(195)),i);$rt_globals.console.info($rt_ustr(N(e)));if(A0B){c=Lr(a.fQ,a.R);b=new M;O(b);V(H(b,C(196)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.h_=GQ(FE(a),a.y,a.V.cR,a.cH);Hq(a);Wl(a);}}
function Nk(a){return W(CB(a.e.f)+5|0,a.R);}
function H6(a){return Bd(Nk(a)-a.cz.a|0,0);}
function U1(a){return Bd(a.hK-Dk(a)|0,0);}
function Dk(a){var b;b=!a.bS?0:C9(a)+a.cu|0;return Bd(1,(a.cz.b-a.cT|0)-b|0);}
function JO(a){return a.bS?a.cT:a.cT-a.cu|0;}
function DP(a){return a.cz.a;}
function LL(a,b){var c,d,e;c=a.e.f;d=c.h2;e=c.cK;d=d!=e&&b-c.tN>0.03125?1:0;if(d&&a.lN!=e){a.lN=e;S8(a);}d=L1((a.bp+a.AN|0)-a.yg|0,H6(a));e=a.bp==d?0:1;if(e)FW(a,d);return !U4(a.c3,b)&&!e&&!a.xC?0:1;}
function FW(a,b){var c,d;c=L1(b,H6(a));if(c!=a.bp){a.bp=c;d=a.un;if(d!==null)d.iY(c);}}
function Ji(a,b){var c,d;c=L1(b,U1(a));if(c!=a.dz){a.dz=c;d=a.so;if(d!==null)d.iY(c);}}
function JG(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=Jf(a.cz.a,a.R)+7|0;c=a.hd;if(c.data.length<b)a.hd=ACL(b,c,a.vL,a.tn,a.e.f);Cw(a.V,0);Tm(a.V,a.ba,a.cz);d=(a.R-Y_(a.c3)|0)/2|0;e=(a.h_-(UV(a.c3)/2|0)|0)-a.dz|0;f=!a.bS?a.cT:(a.cl+a.cu|0)+C9(a)|0;W6(a.c3,f+e|0,(d+W(a.u,a.R)|0)-a.bp|0);g=CB(a.e.f);h=FS(a);i=Hi(a);a.vL=h;a.tn=i;j=a.cE.dI;U(j,Dk(a),a.R);k=!a.bS?a.ba.b+a.cT|0:((a.ba.b+a.cl|0)+a.cu|0)+C9(a)|0;l=h;while(l<=i&&l<g){m=BV(a.e.f,l);n=Xn(a,l);ABL(n,m,a.kJ,a.cH,a.V,a.R,Dk(a),a.dz);o=n.b6;a.hK
=Bd(a.hK,E6(m)+(40.0*a.cE.b4|0)|0);p=W(a.R,l)-a.bp|0;c=a.eI;q=c===null?null:c.data[l];b=a.ba.a+p|0;m=a.V;r=a.xK;s=!a.iM?0.0:0.5;d=Dk(a);f=a.R;p=a.dz;t=a.dZ;u=AEP(a.q,l);if(u!==null){if(u.a==(-1))u.a=o.M;u.b=GQ(o,u.b,a.V.cR,a.cH);u.a=GQ(o,u.a,a.V.cR,a.cH);}AFq(n,b,k,m,r,j,s,d,f,p,t,u,a.h4,a.hj,a.u!=l?0:1,a.eI===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.ku){n=Xn(a,l);p=W(a.R,l)-a.bp|0;v=AFX(a.q,l);m=a.dZ;q=m.b7;r=q.rJ;w=a.u==l&&a.eI===null?1:0;a:{if(v)r=q.nu;else{c=a.eI;if(c!==null){c=c.data;if(l<c.length&&
c[l]!==null){r=IZ(m.dY,m,c[l].gx);break a;}}if(w)r=q.i6;}}AB1(n,a.V,k,a.ba.a+p|0,a.R,j,a.dz,Dk(a),r);l=l+1|0;}if(a.iS){x=Bb(i+1|0,g);AD6(a,W(a.R,x)-a.bp|0);}AFc(a);AEg(a,h,i);if(a.jM)AG7(a,h,i,g);if(a.mA&&e>=(( -UV(a.c3)|0)/2|0)){n=a.c3;m=a.cz;if(ABF(n.eF.A,0,0,m))WA(a.c3,a.V,a.ba);}AEL(a);ADM(a);Hp(a.V);}
function AG7(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.eI;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dZ;h=IZ(h.dY,h,g.gx);}else h=e!==null?a.dZ.b7.fi:a.dZ.b7.i6;if(!(a.u!=b&&g===null)){a.fw.b=!a.bS?(a.cu-a.cl|0)-a.d_|0:((a.cu+C9(a)|0)+a.cl|0)-a.d_|0;i=a.fw;j=a.R;i.a=j;k=a.bS?0:(a.cT-a.cu|0)+a.cl|0;j=W(j,b)-a.bp|0;g=a.V;l=a.ba;Bx(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function AEg(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cz.a;e=Bb(d,W(CB(a.e.f),a.R)-a.bp|0);f=a.dh;g=a.bp;h=a.eI===null?a.u:(-1);i=a.V;j=a.dZ;Tm(i,f.fU,f.ff);LN(f,i,b,d);Vg(f,b);US(f,g,e,j,i);k=j.hp;if(e<d){l=f.fU;Bx(i,l.b,l.a+e|0,B$(f.ff.b,d-e|0),k.hi);}if(b<=h&&h<=c){m=j.hp;c=h/20|0;l=f.cJ;j=Br(l,c%l.j|0);k=f.fU;e=W(f.cJ.j,f.jU);b=j.fc.a;d=((j.kr.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%Da(j.bs)|0)|0;b=h%j.d$|0;c=j.O;d=d+W(b,c)|0;if(d<( -c|0))d=d+e|0;U(j.dW,j.fc.b,c);f=j.eN;b=h%j.d$|0;c=j.O;Cv(f,0.0,W(b,c),j.fc.b,
c);EU(j,i,d,k,m.pK,m.n7);}Hp(i);}
function FS(a){return Bb(a.bp/a.R|0,CB(a.e.f)-1|0);}
function Hi(a){return Bb(((a.bp+DP(a)|0)-1|0)/a.R|0,CB(a.e.f)-1|0);}
function Wl(a){Tf(a.dh,a.cH.data[0],a.R,a.V);LN(a.dh,a.V,FS(a),DP(a));}
function Xn(a,b){var c;c=a.hd.data;return c[b%c.length|0];}
function AG1(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.q))Dv(a,a.fg);else{b=D1(a.q);c=FK(a.q);d=c.P;e=b.P;f=(d-e|0)+1|0;g=BM(f);h=g.data;i=R(BA,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.fg;e=e+1|0;k=f;}l=Du(a.u,a.y);m=new Y7;m.nR=a;PK(a,g,0,0,i,l,m);b.bh=b.bh+J(a.fg)|0;c.bh=c.bh+J(a.fg)|0;Ms(a,a.y+J(a.fg)|0,0);Eg(a);}return 1;}
function AAD(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.q)){b=BV(a.e.f,a.u);if(b.p.data.length>0){c=Ym(a,b);if(c===null)return 1;d=a.e.f;e=a.u;f=Du(e,a.y);d.cK=d.cK+1|0;g=d.gR;h=R(He,1);h.data[0]=ATA(e,0,1,c,f.by,f.bI);BC(g,h);KS(d,e,0,1,c);GI(b,0,J(c));Ms(a,a.y-J(c)|0,0);}}else{f=D1(a.q);c=FK(a.q);i=c.P;j=f.P;i=(i-j|0)+1|0;k=BM(i);h=k.data;l=R(BA,i);m=l.data;e=a.y;n=a.u;o=0;while(j<=c.P){b=BV(a.e.f,j);if(b.p.data.length>0){b=Ym(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=MZ(k,o);h=Dp(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.P)f.bh=Bd(0,f.bh-J(b)|0);if(j==c.P){c.bh=Bd(0,c.bh-J(b)|0);Ms(a,a.y-J(b)|0,0);}i=i+1|0;}f=Du(n,e);b=new Yc;b.vB=a;PK(a,p,0,1,h,f,b);}Eg(a);return 1;}
function Ym(a,b){var c,d,e,f;c=EG(0,J(a.fg),OC(b));if(!c)b=null;else{b=C(62);if(c<0){b=new BE;Y(b);K(b);}if(c!=1){d=b.b_.data.length;if(d&&c){e=BU(W(d,c));d=0;f=0;while(f<c){RE(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=M7(e);}else b=AY5;}}return b;}
function PK(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BM(i);k=AYy(i).data;H1(j,c);c=0;l=k.length;if(c>l){f=new BE;Y(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cK=o.cK+1|0;p=R(He,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ATA(h[m],n[m],k[m],b[m],f.by,f.bI);m=m+1|0;}BC(o.gR,p);c=0;while(c<i){b=e.data;KS(o,h[c],n[c],k[c],b[c]);g.kw(Dh(h[c]),b[c]);c=c+1|0;}}
function AF_(a){var b,c,d,e,f,g,h,i;if(Dq(a.q))GL(a);Ev(BV(a.e.f,a.u));b=a.e.f;c=a.u;d=a.y;e=b.z;f=e.data;g=f[c];e=Dp(e,f.length+1|0);f=e.data;b.z=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DS(R(Ce,0));b.z.data[c+1|0]=g;}else if(d==g.M){f[c]=g;f[c+1|0]=DS(R(Ce,0));}else{f=(It(g,d)).data;e=b.z.data;e[c]=f[0];e[c+1|0]=f[1];}FJ(b,c,d,0,C(197));Eg(a);return CE(a,a.u+1|0,0,0);}
function AHc(a){if(Dq(a.q))GL(a);else NQ(a.e.f,a.u,a.y);Hq(a);Eg(a);return 1;}
function ADB(a){var b,c,d;if(Dq(a.q)){GL(a);return 1;}b=a.y;if(!b&&!a.u)return 1;if(b){c=a.u;b=b-1|0;NQ(a.e.f,c,b);}else{c=a.u-1|0;b=F0(a.e.f,c);d=a.e.f;LQ(d,c);FJ(d,c,F0(d,c),1,C(197));}Eg(a);return CE(a,c,b,0);}
function Dv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ei)return 0;if(Dq(a.q))GL(a);c=MK(WT(b,C(198),C(30)),C(197),(-1));d=c.data;b=a.e.f;e=a.u;f=a.y;AAk(b,e,f,c);g=d.length;if(!g)h=AY5;else{i=0;j=0;while(j<g){i=i+J(d[j])|0;j=j+1|0;}k=BU(i+W(g-1|0,J(C(197)))|0);c=k.data;l=0;h=d[0];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<J(C(197))){m=l+1|0;c[l]=P(C(197),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=n+1|0;}h=M7(k);}FJ(b,e,f,0,h);e=a.u;m=(e+g|0)-1|
0;CE(a,m,m!=e?J(d[g-1|0]):a.y+J(d[0])|0,0);FP(a);Eg(a);return 1;}
function GL(a){var b,c,d;b=D1(a.q);c=a.e.f;d=a.q;N7(c,d,X4(c,d));CE(a,b.P,b.bh,0);FP(a);Eg(a);}
function FP(a){var b;b=a.q;b.dp=0;B7(b.b1,a.u,a.y);B7(a.q.bL,a.u,a.y);}
function C9(a){return a.fQ.nb|0;}
function AD6(a,b){var c,d;c=a.cz.a;if(b<c){d=a.cE.dI;d.a=c-b|0;d.b=!a.bS?Dk(a)+a.d_|0:Dk(a)+a.cl|0;c=!a.bS?(a.ba.b+a.cT|0)-a.d_|0:(((a.ba.b+a.cu|0)+C9(a)|0)+a.cl|0)-a.d_|0;Bx(a.V,c,a.ba.a+b|0,d,a.dZ.b7.fi);}}
function AEL(a){var b;b=a.bS?a.ba.b+C9(a)|0:a.ba.b+a.cz.b|0;Jt(a.fo,a.bp,a.ba.a,DP(a),Nk(a),b,C9(a));b=!a.bS?a.ba.b+a.cT|0:((a.ba.b+a.cl|0)+a.cu|0)+C9(a)|0;Sr(a.fq,a.dz,b,Dk(a),a.hK,a.ba.a+DP(a)|0,C9(a));}
function ADM(a){var b,c;b=SQ(a.fo);c=SQ(a.fq);if(!(!b&&!c)){Cw(a.V,1);if(b)GP(a.fo,a.V);if(c)GP(a.fq,a.V);if(b)GY(a.fo,a.V);if(c)GY(a.fq,a.V);}}
function AFc(a){var b,c,d,e;b=a.fw;c=a.cz;b.a=c.a;b.b=a.cl;d=!a.bS?a.cT-a.cu|0:(c.b-JO(a)|0)-a.cl|0;b=a.V;c=a.ba;Bx(b,c.b+d|0,c.a,a.fw,a.dZ.b7.uz);a.fw.b=!a.bS?(a.cu-a.cl|0)-a.d_|0:((a.cu+C9(a)|0)+a.cl|0)-a.d_|0;e=a.bS?0:(a.cT-a.cu|0)+a.cl|0;b=a.V;c=a.ba;Bx(b,c.b+e|0,c.a,a.fw,a.dZ.b7.fi);}
function L1(b,c){return Bb(Bd(0,b),c);}
function IN(a,b){var c,d,e,f,g,h,i;b=b.data;$rt_globals.console.info("onFileParsed");a.kk=1;a.iZ=1;c=Dy(b[0]);d=EE(b[1]);e=(Dy(b[2])).data[0];if(b.length<5)AFw(a.e.f,c,d);else{f=Dy(b[3]);g=EE(b[4]);ABo(a.e.f,c,d,f,g,0);Ij(a);}Wt(a,ADo(e));GT(Ct(a),A0C);Gq(Ct(a));h=Iz(Ez(),a.fv);i=new M;O(i);H(GH(H(i,C(199)),h),C(200));$rt_globals.console.info($rt_ustr(N(i)));i=a.jf;if(i!==null)i.g(a);}
function Ij(a){var b,c,d,e,f,g;b=Ez();c=a.e.f;if(c.gE===null)Rb(c);c=a.e.f;d=c.d2;BP(c);e=new WN;e.rT=c;f=d.eS;if(f!==null){c=new Pj;c.iH=d;c.k9=e;UQ(d,f,c);}g=Ez();if(a.j4){c=Bz();b=Iz(g,b);d=new M;O(d);H(GH(H(d,C(201)),b),C(202));Bt(c,N(d));}}
function Wt(a,b){var c,d;c=DX(a.e);if(!B1(c,b)){d=new M;O(d);H(H(H(H(d,C(203)),c),C(204)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.j0=b;}}
function Ct(a){return a.cE.i9;}
function JM(a,b){var c,d,e,f,g,h;c=EM(b);d=new M;O(d);H(H(d,C(205)),c);$rt_globals.console.info($rt_ustr(N(d)));OF(Ct(a),EM(b));CE(a,0,0,0);a.fv=Ez();a.kk=0;a.iZ=0;a.eI=null;Mb(a.dh,null);e=new Jv;f=R(BA,1);f.data[0]=C(30);AEU(e,f,AWB(C(30),C(30),EM(b),null));a.e=e;CE(a,0,0,0);c=EM(b);g=Gl(c,46,J(c)-1|0);if(g!=(-1))c=Do(c,g);h=!Bn(c,C(206))?5120:10240;c=new TW;c.qo=a;c.qp=h;c.qq=b;d=b.fL;if(d!==null)L0(c,Kl(b,d.size));else{d=b.ho.getFile();e=new U9;e.nJ=b;e.nK=c;b=new Va;b.wR=c;d.then(Bl(e,"f"),Bl(b,"f"));}}
function Ib(a,b,c,d,e){if(Ir(a,e))return 1;if(c&&d)return 1;if(c)FW(a,a.bp+((W(b,a.R)*12|0)/10|0)|0);else if(!d){HR(a,a.u+b|0,e);VN(a);}return 1;}
function TB(a,b,c,d){var e,f,g;if(Ir(a,d))return 1;e=FE(a);if(!c)f=a.y+b|0;else if(b>=0)f=Ha(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=Jo(e,f);if(c>0&&e.d7.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.d7.data[c-1|0];}}if(f>e.M){if((a.u+1|0)<CB(a.e.f))CE(a,a.u+1|0,0,d);}else if(f>=0)Dg(a,f,d);else{b=a.u;if(b>0){g=(BV(a.e.f,b-1|0)).M;CE(a,a.u-1|0,g,d);}}XP(a);return 1;}
function Ir(a,b){if(Dq(a.q)&&!b){FP(a);Hq(a);return 1;}if(!(b&&Dq(a.q)))FP(a);return 0;}
function CE(a,b,c,d){a.y=c;return HR(a,b,d);}
function HR(a,b,c){a.u=EG(0,b,CB(a.e.f)-1|0);return Dg(a,a.y,c);}
function Dg(a,b,c){a.y=EG(0,b,(FE(a)).M);a.h_=a.cE.b4===0.0?0:GQ(FE(a),a.y,a.V.cR,a.cH);L8(a);Hq(a);if(c)a.q.dp=1;L9(a.q,a.u,a.y);a.q.dp=0;return 1;}
function Ms(a,b,c){var d;d=QY(a.q);Dg(a,b,c);a.q=d;}
function Hq(a){VN(a);XP(a);}
function VN(a){var b,c,d,e,f;b=a.bp;c=b+DP(a)|0;d=a.u;e=a.R;d=W(d,e);f=d+e|0;if(d<(b+e|0))FW(a,d-e|0);else if(f>(c-e|0))FW(a,(f-DP(a)|0)+a.R|0);}
function XP(a){var b,c,d,e,f;b=Dl(a.cE.b4*30.0);c=a.dz;d=c+Dk(a)|0;e=a.h_;f=e+b|0;if(e<(c+b|0))Ji(a,e-b|0);else if(f>(d-b|0))Ji(a,(f-Dk(a)|0)+b|0);}
function AAf(a){var b;LO(a,Du(a.u,a.y),Ho(a.e.f,a.u,a.y));if(!(a.h4!==null&&!D9(a.hj))){b=a.y;if(b>0)LO(a,Du(a.u,b-1|0),Ho(a.e.f,a.u,a.y-1|0));}}
function LO(a,b,c){var d,e,f,g,h,i,j,k,l;UI(a);d=a.e.f;e=Cl(d.dO,c);if(e!==null)c=e;a:{f=Cl(d.dr,c);if(f!==null){a.h4=Mn(d,c);c=BY(f);while(true){if(!B0(c))break a;g=B3(c);BC(a.hj,Mn(d,g));}}}h=b.by;i=b.bI;b=a.fl;c=DX(a.e);d=Gv(a.e);j=(Cs(b.wk)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.wn(c,d)){d=b.AC;break b;}l=l+1|0;}d=null;}if(d!==null){g=a.e;c=new NF;c.zf=a;c.zh=g;c.zd=h;c.ze=i;d.tg(g,h,i,c,a.iG);}}
function IE(a,b){var c;CE(a,b.by,b.bI,0);c=Ha(FE(a),a.y);B7(a.q.bL,a.u,c);B7(a.q.b1,a.u,a.y);}
function EX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ba;e=c-d.b|0;f=EG(0,((b.a-d.a|0)+a.bp|0)/a.R|0,CB(a.e.f)-1|0);g=!a.bS?a.cT:(a.cl+a.cu|0)+C9(a)|0;h=Bd(0,(e-g|0)+a.dz|0);b=BV(a.e.f,f);d=a.V.cR;i=a.cH;if(!(b.eQ!==null&&!b.gs))Lf(b,d,i);j=b.eQ;e=b.p.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.M;else{c=VA(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.p.data.length)k=b.M;else{j=TJ(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.p.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(A0D){d=new M;O(d);V(H(V(H(V(H(d,C(207)),e),C(208)),h),C(209)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return Du(f,k);}
function ZR(a,b){var c;c=b.by;a.u=c;a.y=b.bI;a.h_=GQ(BV(a.e.f,c),a.y,a.V.cR,a.cH);L8(a);}
function FE(a){return BV(a.e.f,a.u);}
function Kv(a,b,c){var d,e;d=Dl((a.R*4|0)*c/150.0);e=Dl(b);if(d)FW(a,a.bp+d|0);if(e)Ji(a,a.dz+e|0);return 1;}
function U0(a,b,c){a.q.dp=0;return 1;}
function ND(a,b,c){var d,e,f;if(c)return null;d=FG(a.fo,b.i,a.pG,1);if(d!==null)return d;d=FG(a.fq,b.i,a.vr,0);if(d!==null)return d;Jn(a);e=EX(a,b.i);f=Ho(a.e.f,e.by,e.bI);ZR(a,e);LO(a,e,f);if(!b.bP){b=a.q;if(!b.dp)B7(b.b1,a.u,a.y);}b=a.q;b.dp=1;L9(b,a.u,a.y);b=new Zl;b.vI=a;return b;}
function NW(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cq){b=b.i;e=EX(a,b);f=Ho(a.e.f,e.by,e.bI);g=UK(a,f);h=MQ(a.fl,DX(a.e),Gv(a.e));if(h!==null){f=a.e;c=e.by;d=e.bI;e=new YH;e.y$=a;e.y_=b;e.y9=g;h.tg(f,c,d,e,a.iG);}else{e=Cl(a.e.f.dO,f);if(e!==null){IE(a,e);c=1;}else{e=Cl(a.e.f.dr,f);if(e!==null&&!D9(e)){if(e.j!=1){SM(a.j$,b,e,a,g);c=1;}else{IE(a,Br(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EX(a,b.i)).by;e=BV(a.e.f,c);c=Gh(e,a.y);d=Ha(e,a.y);b=MH(e,c);if((d-1|0)==e.M){B7(a.q.b1,a.u,OC(e));B7(a.q.bL,
a.u,e.M);}else{if(b!==null){b=b.v;i=0;c:{while(true){j=b.b_.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=Gh(e,c-1|0);d=Ha(e,c);}else{if(d!=i){Ro(a.q,a.u);break b;}c=Gh(e,d+1|0);d=Ha(e,c);}}}B7(a.q.b1,a.u,c);a.q.dp=1;CE(a,a.u,d,0);a.q.dp=0;Jn(a);}}break a;case 3:break;default:break a;}Ro(a.q,a.u);Tk(a.he);Jn(a);}}return 1;}
function Pg(a,b){var c,d,e,f,g,h,i,j,k;c=a.cE.cN;if(FT(a.fo,b.i,c))return 1;if(FT(a.fq,b.i,c))return 1;d=a.dh;if(Gu(b.i,d.fU,d.ff)&&Ge(c)?1:0)return 1;e=b.i;f=!a.bS?a.ba.b+a.cT|0:((a.ba.b+a.cu|0)+a.cl|0)+C9(a)|0;a:{g=a.ba.a;h=Dk(a);i=DP(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Ge(c);if(b.cq){e=EX(a,b.i);e.bI=Gh(BV(a.e.f,e.by),e.bI);b=a.e.f;if(!Gm(b.dO,e)&&!Gm(b.dr,e)?0:1)return DE(c,C(210));}return DE(c,C(191));}
function AUP(a,b){var c,d,e,f;c=b.cq;if(c&&b.bl==65){c=CB(a.e.f)-1|0;d=F0(a.e.f,c);B7(a.q.b1,0,0);B7(a.q.bL,CB(a.e.f)-1|0,d);return 1;}if(c&&b.bl==80){JA(a);return 1;}if(!a.ei&&c&&b.bl==90){if(Dq(a.q))FP(a);b=a.e.f;b.cK=b.cK+1|0;e=b.gR;d=e.j;if(!d)e=null;else{f=(Ey(e,d-1|0)).data;e=Op(b,f[0]);c=1;while(c<f.length){Op(b,f[c]);c=c+1|0;}}if(e!==null){CE(a,e.b,e.a,0);Eg(a);}return 1;}if(!c&&!b.dg){if(Bn(b.ea,C(211))){Dv(a,C(212));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.ea,C(213))){Dv(a,C(214));Dg(a,a.y-1|0,0);c=1;}else if
(Bn(b.ea,C(43))){Dv(a,C(215));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.ea,C(216))){Dv(a,C(217));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.ea,C(218))){Dv(a,C(219));Dg(a,a.y-1|0,0);c=1;}else if(!Bn(b.ea,C(220)))c=0;else{Dv(a,C(221));Dg(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dg&&!b.cq)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.nx.data[c];if(e!==null)e.o();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ADH(a,b))return 1;if(a.ei)c=0;else c:{switch(b.bl){case 8:break;case 9:c=!b.bP?AG1(a):AAD(a);break c;case 13:c=AF_(a);break c;case 46:c=AHc(a);break c;default:c=0;break c;}c=ADB(a);}if(c)return 1;if(b.cq&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AMT(b.bl)&&b.bl!=27){if(!b.cq&&!b.dg&&!b.jH)return J(b.ea)>0&&Dv(a,b.ea)?1:0;return 0;}return 0;}
function UT(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(C(169),DX(a.e))){b=Ct(a);c=new Pr;c.uC=a;d=R(B,3);e=d.data;e[0]=ES(a.e.f);f=FS(a);g=Hi(a);h=Bd(0,f-100|0);f=Bb(CB(a.e.f)-1|0,g+100|0);i=BM(3);j=i.data;j[0]=E5(a.e.f,h);k=a.e.f;l=0;f=Bb(f+1|0,k.z.data.length);m=0;while(m<f){l=l+F0(k,m)|0;if(m!=(k.z.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c7;k=BH();Nj(n,n.c$,k);i=BM(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Br(k,m);h=p+1|0;o[p]=q.bZ;l=h+1|0;o[h]=q.b3;p=l+1|0;o[l]=q.fh;m=m+
1|0;}e[2]=i;CU(b,c,C(222),d);}}
function JA(a){var b,c,d,e;b=ACf(DX(a.e));if(b===null){b=a.jf;if(b!==null)b.g(a);}else{a.fv=Ez();c=Ct(a);d=new Wz;d.pF=a;e=R(B,1);e.data[0]=ES(a.e.f);CU(c,d,b,e);}}
function S8(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=DX(a.e);if(b!==null&&!Bn(C(191),b)){c=a.e.f.c7;d=WM(c,c.c$);if(d===null){Ij(a);J$(a.e.f);return;}a:{e=Em([C1(d),C6(d),d.bY.fh]);f=ES(a.e.f);g=BM(1);h=(-1);switch(IV(b)){case 3401:if(!Bn(b,C(223)))break a;h=3;break a;case 98723:if(!Bn(b,C(224)))break a;h=2;break a;case 3254818:if(!Bn(b,C(169)))break a;h=1;break a;case 3556653:if(!Bn(b,C(191)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=
(-1);break b;}h=0;}g.data[0]=h;c=a.e.f.d2;if(c.eS===null){i=BM(0);j=BU(0);}else{c:{k=AKn(d.db,c.dJ);l=new Zt;l.ez=k;l.o1=d;l.bV=AJE();b=new M;O(b);l.h5=b;l.fr=IK();b=new Uk;m=AGf(16);b.f0=0;b.dS=R(Ia,m);b.p1=0.75;XA(b);l.f$=b;b=new XO;c=l.bV;k=l.h5;d=l.fr;b.dF=c;b.kK=k;b.rS=d;l.mn=b;b=new Xr;b.cQ=c;b.lX=k;b.qF=d;l.mv=b;b=KD(l.ez.dJ);c=b.ht;if(c.cU>0){m=c.cS;h=0;d:while(true){i=b.ht.ce.data;if(h>=i.length)break c;c=i[h];while(c!==null){k=c.cI;if(Gm(l.fr,k))Cl(l.fr,k);else{d=l.fr;F2(d,k,Dh(d.cU));}c=c.cO;if(m
!=b.ht.cS)break d;}h=h+1|0;}b=new Ht;Y(b);K(b);}}b=l.ez.eS;if(b!==null)S2(l,b);Bs(l.bV,l.ez.dJ.cU);b=TX(KD(l.ez.dJ));while(Fk(b)){c=QD(b);G0(l.bV,l.h5.I,J(c));BT(l.h5,c);}AD4(l);AC_(l);AEI(l.o1,l.bV,l.f$);l.ru=RP(l.bV);j=Fz(N(l.h5));l.AY=j;i=l.ru;}b=Ct(a);k=new ZV;k.p$=a;CU(b,k,C(225),I(B,[f,g,e,i,j]));}else J$(a.e.f);}
function Hm(a,b,c){var d,e,f,g,h,i;if(c&&a.ei)return 0;d=D1(a.q);e=d.P;if(Dq(a.q)){f=a.e.f;g=a.q;h=X4(f,g);if(c)N7(f,g,h);if(c){CE(a,d.P,d.bh,0);FP(a);Eg(a);}}else{h=Fr(Fc(a.e.f.z.data[e]),C(197));i=Bb(CB(a.e.f)-1|0,e);B7(a.q.bL,i,0);if(e>=(CB(a.e.f)-1|0))B7(a.q.bL,i,F0(a.e.f,i));else B7(a.q.b1,i+1|0,0);if(c)GL(a);else CE(a,e,0,0);}b.g(h);return 1;}
function ADH(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cq?HR(a,Jf(a.bp,a.R),b.bP):Ib(a,2-Ye(DP(a),a.R)|0,0,b.dg,b.bP);break a;case 34:c=!b.cq?Ib(a,Ye(DP(a),a.R)-2|0,0,b.dg,b.bP):HR(a,((a.bp+DP(a)|0)/a.R|0)-1|0,b.bP);break a;case 35:if(!Ir(a,b.bP)&&!Dg(a,(FE(a)).M,b.bP)){c=0;break a;}c=1;break a;case 36:if(!Ir(a,b.bP)&&!Dg(a,0,b.bP)){c=0;break a;}c=1;break a;case 37:c=b.cq;if(c&&b.dg){Jn(a);d=a.he;e=d.dB;if(e<=0)d=null;else{f=d.e9.data;c=e-1|0;d.dB=c;d=f[c];}if(d===null)c=1;else{CE(a,Mu(d),Kk(d),0);a.q=QY(d.kQ);c
=1;}break a;}c=TB(a,(-1),c,b.bP);break a;case 38:c=Ib(a,(-1),b.cq,b.dg,b.bP);break a;case 39:c=b.cq;if(c&&b.dg){d=a.he;c=d.dB;if(c==(d.e3-1|0))d=null;else{f=d.e9.data;c=c+1|0;d.dB=c;d=f[c];}if(d===null)c=1;else{CE(a,Mu(d),Kk(d),0);a.q=QY(d.kQ);c=1;}break a;}c=TB(a,1,c,b.bP);break a;case 40:c=Ib(a,1,b.cq,b.dg,b.bP);break a;default:}c=0;}if(c&&b.bP)B7(a.q.bL,a.u,a.y);if(c)AAf(a);return c;}
function Jn(a){var b,c,d,e,f,g,h;b=a.he;c=b.dB;b=c<0?null:b.e9.data[c];if(b!==null&&a.u==Mu(b)&&a.y==Kk(b))return;d=a.he;b=new LB;c=a.u;e=a.y;f=a.q;b.me=Du(c,e);g=QY(f);b.kQ=g;g.dp=0;e=d.dB;h=d.e3;if(e==(h-1|0))Xp(d,b);else{c=e+1|0;while(c<h){Tk(d);c=c+1|0;}Xp(d,b);}d.dB=d.dB+1|0;}
function Eg(a){a.e.f.tN=Ka(Ct(a));}
function LZ(a,b){var c,d,e,f,g,h,i;a.x2=null;UI(a);c=a.e;a.e=b;a.fv=Ez();d=ACf(DX(a.e));if(d!==null){e=Ct(a);f=new Ta;f.uc=a;g=R(B,1);g.data[0]=ES(a.e.f);CU(e,f,d,g);}g=(Cs(a.fl.vK)).data;h=g.length;i=0;while(i<h){g[i].kw(c,b);i=i+1|0;}}
function UI(a){a.h4=null;H0(a.hj);}
function ACf(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(IV(b)){case 3401:if(!Bn(b,C(223)))break a;c=2;break a;case 98723:if(!Bn(b,C(224)))break a;c=1;break a;case 3254818:if(!Bn(b,C(169)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=C(226);break b;case 2:b=C(227);break b;default:b=null;break b;}b=C(228);}}return b;}
function UK(a,b){var c;c=Mn(a.e.f,b);if(c===null)return C(30);return c.v;}
function DR(a,b){return Gu(b,a.ba,a.cz);}
function Kw(a,b){var c,d,e,f,g;a.eI=b;Bt(Bz(),C(229));b=a.eI;if(b===null){Bt(Bz(),C(230));Mb(a.dh,null);}else{b=b.data;c=D7(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gx<<24>>24;e=e+1|0;}Mb(a.dh,c);}}
var Ig=G(0);
function WI(){B.call(this);this.wv=null;}
function AN$(a,b){var c;c=a.wv;Xx(c,c.F,c.E);}
function WJ(){B.call(this);this.r6=null;}
function AIU(a,b){var c;c=a.r6;Xx(c,c.E,c.F);}
function WK(){B.call(this);this.oC=null;}
function AOn(a,b){AAp(a.oC,b);}
function WD(){B.call(this);this.vp=null;}
function APg(a,b){AAp(a.vp,b);}
function WF(){B.call(this);this.rL=null;}
function AUc(a,b){return AGq(a.rL,b);}
function IA(){var a=this;B.call(a);a.k0=null;a.rd=null;a.qr=null;}
function A0E(a,b){var c=new IA();N5(c,a,b);return c;}
function A0F(a,b,c){var d=new IA();Zh(d,a,b,c);return d;}
function N5(a,b,c){Zh(a,b,null,c);}
function Zh(a,b,c,d){a.k0=b.b0;a.rd=c;a.qr=d;}
function AL2(a,b){var c,d;if(b.cq&&b.bl==79){c=a.rd;if(c!==null&&b.bP)XS(a.k0,c);else MD(a.k0,a.qr);d=1;}else d=0;return d;}
function WG(){B.call(this);this.og=null;}
function ASZ(a,b){var c,d;c=a.og;d=D_(c.t,c.F)?c.F:!D_(c.t,c.E)?null:c.E;if(d!==null){JM(d,b);c.gi=null;}}
function WH(){B.call(this);this.tM=null;}
function AKV(a,b){b=b;return ADK(a.tM,b);}
var AEM=G();
var ABy=G(0);
function ACe(b,c,d){return H7(b,c,d,255,new B_);}
function H7(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function YX(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AMu(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.br=g+i;e.bN=h+i;e.bm=j+i;return e;}
function Kf(b,c,d,e,f){f=YX(b,c,d,f);f.bO=e;return f;}
function G5(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function V_(){var a=this;B.call(a);a.c6=null;a.i9=null;a.cN=null;a.cj=null;a.b4=0.0;a.ex=null;a.en=null;a.dI=null;a.vH=null;a.xS=null;a.xT=null;}
function Kg(a){var b;b=a.ex;if(b!==null)b.us();}
function KO(a){var b;b=a.ex;if(b!==null)b.xG();}
function Pd(a,b){var c;c=a.i9.d6!==(Ei()).activeElement?0:1;if(c)KO(a);a.ex=b;if(c)Kg(a);}
function F4(a,b){KO(a);a.ex=b;Kg(a);}
function D_(a,b){return b!==a.ex?0:1;}
function Jp(a){return a.c6.cR;}
function HH(a,b){return HT(a.c6,b.kp,Cc(b.iO,a.b4));}
function CF(a,b){return Cc(b,a.b4);}
var TF=G();
function AMF(a,b){var c,d,e;c=b.cq;d=c&&!b.bP&&!b.dg&&!b.jH?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bP&&!c&&!b.dg&&!b.jH?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.k6=1;}return 0;}
function TE(){B.call(this);this.ps=null;}
function AJ$(a,b){var c;c=a.ps.ex;return c!==null&&c.hH(b)?1:0;}
function B_(){var a=this;B.call(a);a.br=0.0;a.bN=0.0;a.bm=0.0;a.bO=0.0;}
function AUy(a){var b=new B_();AP6(b,a);return b;}
function Cv(a,b,c,d,e){a.br=b;a.bN=c;a.bm=d;a.bO=e;}
function AP6(a,b){a.br=b.br;a.bN=b.bN;a.bm=b.bm;a.bO=b.bO;}
function BJ(a,b){a.br=b.br;a.bN=b.bN;a.bm=b.bm;a.bO=b.bO;return a;}
function AVD(a,b){if(a===b)return 1;return b!==null&&BI(a)===BI(b)&&Lc(a,b)?1:0;}
function Lc(a,b){return b.br===a.br&&b.bN===a.bN&&b.bm===a.bm&&b.bO===a.bO?1:0;}
var EF=G(0);
function AGR(){B.call(this);this.c2=null;}
function AEC(){var a=new AGR();ASb(a);return a;}
function ASb(a){a.c2=BH();}
function HS(a,b){Td(a.c2,0,b);}
function JZ(a,b){XQ(a.c2,b);}
function LP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.c2.j-1|0;while(c>=0){d=Br(a.c2,c);d.S.fJ(b);e=d.T;f=d.e8.iN;if(!Le(e)){if(!Yl(e)&&!(!e.hR&&e.dE!==null)){e.hR=0;W1(e);g=e.eH;h=(g.du+g.eW+5.0)/10.0;i=CF(e.hL,e.j5);g=b.cR;j=e.eH;k=e.hu;l=h*2.0;CC(g,j);m=i+Lp(g,k,l)|0;e.hv=m;m=EG(0,m,e.r.b);if(m){j=CO(b,m,e.r.a);CC(j,e.eH);g=e.hu;l=i;h=l+h;k=e.eH;n=k.du;Ch(j,g,h,l+n-(n+k.eW)/16.0);g=e.dE;if(g===null){g=CZ(b);e.dE=g;}CS(g,j);F8(j);Cv(e.k5,0.0,0.0,BS(e.dE),Da(e.dE));}}g=f.tz;j=e.dE;if(j===null)Rg(e,b,0,e.r.b,
g);else{i=BS(j);f=f.wa;j=e.G;m=j.b;o=j.a;j=e.dE;EZ(b,m,o,j.f7,e.k5,j,f,g,0.0);m=e.r.b;if(i<m)Rg(e,b,i,m-i|0,g);}}Cw(b,1);i=CF(d.bC,2.0);m=Le(d.T);f=d.bC;e=f.dI;f=f.vH;p=m?0:d.T.r.a;g=d.S.r;U(f,g.b,g.a+p|0);ACp(b,f,!m?d.T.G:d.S.G,d.e8.iN.mc, -i|0,e);f=d.S;AEO(b,f.r,f.G,i,p,QS(d.e8.jr,d.bC.b4),d.e8.jr.m4,e);c=c+(-1)|0;}}
function AAN(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c2;if(c>=d.j)break;a:{e=Br(d,c);f=b.i;if(DN(e.T,f))g=DE(e.bC.cN,null);else{g=CF(e.bC,7.0);h=CF(e.bC,25.0);if(PA(e,f.b,g)){i=O2(e,f.b,h);if(Q1(e,f.a,g)){g=DE(e.bC.cN,Mv(i,C(231)));break a;}if(OV(e,f.a,g)){g=DE(e.bC.cN,Mv( -i|0,C(231)));break a;}}if(Yr(e,f.a,g)){h=Y5(e,f.a,h);if(AAd(e,f.b,g)){g=DE(e.bC.cN,Mv(h,C(232)));break a;}if(N0(e,f.b,g)){g=DE(e.bC.cN,Mv( -h|0,C(232)));break a;}}g=0;}}b:{c:{if(!g){if(!DN(e.S,b.i))break c;if(!e.S.bQ(b)&&!DE(e.bC.cN,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABQ(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.c2;if(e>=f.j)break;a:{b:{g=Br(f,e);if(!DN(g.T,b.i)){if(!DN(g.S,b.i))break b;if(!g.S.cB(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function ADD(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.c2;if(d>=e.j)return null;a:{f=Br(e,d);if(!c){b:{e=b.i;if(!Le(f.T)&&DN(f.T,e)){g=f.S.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.T.G;i=e.b-i|0;k=e.a-k|0;e=new Bf;g=new O4;g.oP=f;g.oQ=i;g.oR=k;g.oS=e;g.oL=h;g.oN=j;}else{h=CF(f.bC,7.0);i=CF(f.bC,25.0);if(PA(f,e.b,h)){j=O2(f,e.b,i);if(Q1(f,e.a,h)){g=I6(f,e,j,(-1));break b;}if(OV(f,e.a,h)){g=I6(f,e,j,1);break b;}}if(Yr(f,e.a,h)){i=Y5(f,e.a,i);if(AAd(f,e.b,h)){g=I6(f,e,(-1),i);break b;}if(N0(f,e.b,h)){g
=I6(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DN(f.T,b.i)?A0G:f.S.ci(b,c);e=f.S;if(e===null)g=null;else if(g===null)g=!DN(e,b.i)?null:A0G;}if(g!==null)break;d=d+1|0;}return g;}
function AGT(a,b,c){var d,e,f,g;d=0;while(true){e=a.c2;if(d>=e.j)break;a:{b:{f=Br(e,d);if(!DN(f.T,b.i)){if(!DN(f.S,b.i))break b;if(!f.S.c4(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function LK(a,b,c,d){var e,f;e=0;while(true){f=a.c2;if(e>=f.j)break;if((Br(f,e)).S.de(b,c,d))return 1;e=e+1|0;}return 0;}
function ANS(a,b,c){var d,e,f;d=0;while(true){e=a.c2;if(d>=e.j)break;f=Br(e,d);e=f.S;e.jY(e.G,e.r,c);e=f.T;if(e.hq!==null){e.eH=null;e.hv=0;e.hR=1;}J7(f);d=d+1|0;}}
function RR(a,b){var c,d,e;c=0;d=0;while(true){e=a.c2;if(d>=e.j)break;Br(e,d);c=0|c;d=d+1|0;}return c;}
function ZT(a,b,c){var d;d=0;while(true){b=a.c2;if(d>=b.j)break;Br(b,d);d=d+1|0;}}
function AF6(){var a=this;B.call(a);a.c5=null;a.cw=null;a.jE=null;a.j9=null;a.il=null;a.kt=null;}
function Sa(a){var b=new AF6();ARP(b,a);return b;}
function ARP(a,b){a.cw=BH();a.kt=A0H;a.c5=b;Ba(b.en,a);}
function JF(a,b,c){a.jE=c;a.il=b;b=BY(a.cw);while(B0(b)){Il(B3(b),a.il);}}
function GD(a,b,c,d){var e,f;e=a.c5;f=e.cj;if(W(f.b,f.a)&&e.b4!==0.0){if(a.jE!==null&&!DD(a)){a.kt=d;a.j9=HH(a.c5,a.jE);e=PJ(a,b,c,null);b=new XN;b.tR=a;e.kc=b;F4(a.c5,a);return;}b=new BE;Y(b);K(b);}c=new CL;Bi(c,C(233));K(c);}
function DY(a){var b;if(DD(a)){b=a.c5;if(b.ex===a)b.ex=null;Vl(a,null);a.kt.o();a.kt=A0H;}}
function Y0(a,b,c,d,e){var f,g,h;f=ADX();AAm(f);KV(f,c.dQ());Il(f,a.il);Ii(f,a.j9);Hs(f,a.c5);if(d===null)g=b.b;else{g=b.b;g=a.c5.cj.b<((g+(Ek(d)).b|0)+(Ek(f)).b|0)?g-(Ek(f)).b|0:(g+(Ek(d)).b|0)-d.fH|0;}h=b.a;b=a.c5.cj;KN(f,Bd(0,Bb(g,b.b-(Ek(f)).b|0)),Bd(0,Bb(h,b.a-(Ek(f)).a|0)));b=new ZX;b.s7=a;b.s8=f;b.s9=e;f.ly=b;BC(a.cw,f);return f;}
function PJ(a,b,c,d){return Y0(a,b,c,d,null);}
function AVn(a,b,c){var d,e;a.j9=HH(a.c5,a.jE);d=BY(a.cw);while(B0(d)){e=B3(d);Ii(e,a.j9);Hs(e,a.c5);}}
function HV(a){var b,c;if(D9(a.cw))return;Cw(a.c5.c6,1);b=0;while(true){c=a.cw;if(b>=c.j)break;MF(Br(c,b),a.c5);b=b+1|0;}}
function LC(a,b){var c,d;c=0;d=a.cw.j-1|0;a:{while(d>=0){c=LF(Br(a.cw,d),b.i,a.c5.cN);if(c)break a;d=d+(-1)|0;}}return c;}
function Ky(a,b,c,d){var e,f;e=0;f=a.cw.j-1|0;a:{while(f>=0){e=Mw(Br(a.cw,f),b.i,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function M3(a,b,c){var d,e,f;d=null;e=a.cw.j-1|0;a:{while(e>=0){f=Br(a.cw,e);d=b.i;c=Eq(f.cr,d);if(!c&&!K2(f.cr)){d=f.kc;if(d!==null)d.o();}d=!c?null:A0G;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AOL(a,b){var c;if(!DD(a))return 0;a:{switch(b.bl){case 27:DY(a);c=1;break a;default:}c=0;}return c;}
function ADc(b,c){var d,e,f;d=b.dy;e=c.cX;f=c.fH;b=new Bf;c=d.A;Rm(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function Vl(a,b){var c,d;c=a.cw.j-1|0;a:{while(true){if(c<0)break a;d=Br(a.cw,c);if(b===d)break;Ey(a.cw,c);OP(d);c=c+(-1)|0;}}}
function DD(a){return a.cw.j<=0?0:1;}
function ACv(){var a=this;B.call(a);a.eF=null;a.lj=0.0;a.hP=0.0;a.gJ=0;}
function AMD(){var a=new ACv();AQ8(a);return a;}
function AQ8(a){var b;b=U7(0,0,2,20);a.eF=b;a.lj=0.5;a.hP=0.0;H7(187,187,187,255,b.bo);}
function Y_(a){return a.eF.s.a;}
function UV(a){return a.eF.s.b;}
function U4(a,b){var c,d;a:{c=a.gJ;if(b>a.hP)while(true){d=a.hP+a.lj;a.hP=d;a.gJ=a.gJ?0:1;if(b>d)continue;else break a;}}return a.gJ==c?0:1;}
function W6(a,b,c){U(a.eF.A,b,c);}
function Rt(a,b){a.hP=b+a.lj*1.25;a.gJ=1;}
function WA(a,b,c){if(a.gJ)S$(a.eF,b,c.b,c.a);}
function LI(){var a=this;B.call(a);a.nr=null;a.yb=null;a.ym=0.0;a.qD=0;a.yu=0;a.y3=0;a.sG=0;a.z0=0;a.du=0.0;a.eW=0.0;a.yl=0.0;a.nb=0.0;a.yr=0;a.oD=null;}
function Fi(a){return Dl(a.du+a.eW);}
function KL(a,b){return Dl((a.du+a.eW)*b);}
function Jv(){var a=this;B.call(a);a.gK=null;a.f=null;a.j0=null;a.u$=null;}
function AWO(a,b){var c=new Jv();AEU(c,a,b);return c;}
function A0I(a,b,c){var d=new Jv();ZH(d,a,b,c);return d;}
function AEU(a,b,c){ZH(a,b,null,c);}
function ZH(a,b,c,d){var e,f,g,h,i,j,k;a.gK=d;a.j0=c;if(d===null)c=null;else{c=d.f9;c=c===null?null:!Eo(c,C(234))&&!Eo(c,C(235))&&!Eo(c,C(236))&&!Eo(c,C(237))&&!Eo(c,C(238))&&!Eo(c,C(239))?(Eo(c,C(206))?C(169):!Eo(c,C(240))?null:C(223)):C(224);}e=b.data;a.u$=c;c=new Ld;f=e.length;if(!f)g=VL(C(30));else{g=R(CD,f);h=g.data;i=0;while(i<f){j=new CD;k=R(Ce,1);k.data[0]=Rv(e[i]);Ip(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.dO=IK();c.dr=IK();c.gR=BH();if(!b.length){c=new BE;Y(c);K(c);}c.z=g;c.h2=0;c.cK=0;c.c7=VM(c);c.d2=ASa();a.f
=c;}
function DX(a){var b;b=a.j0;if(b===null)b=a.u$;return b;}
function Gv(a){var b;b=a.gK;return b===null?null:b.jm;}
function Zv(){var a=this;B.call(a);a.qS=null;a.xz=null;a.om=null;a.wk=null;a.vK=null;a.vm=null;}
function MQ(a,b,c){return SN(a,Cs(a.qS),b,c);}
function Sn(a,b,c){return SN(a,Cs(a.xz),b,c);}
function SN(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.wn(c,d))return g.zm;f=f+1|0;}return null;}
function VT(a,b,c){var d,e,f,g;d=(Cs(a.om)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.wn(b,c))return g.zg;f=f+1|0;}return null;}
function AGl(){var a=this;B.call(a);a.b1=null;a.bL=null;a.dp=0;}
function AI_(){var a=new AGl();AVl(a);return a;}
function QY(a){var b=new AGl();APK(b,a);return b;}
function AVl(a){a.b1=new Hr;a.bL=new Hr;}
function APK(a,b){var c;c=new Hr;a.b1=c;a.bL=new Hr;We(c,b.b1);We(a.bL,b.bL);a.dp=b.dp;}
function L9(a,b,c){B7(a.bL,b,c);if(!a.dp)B7(a.b1,b,c);}
function Ro(a,b){B7(a.b1,b,0);B7(a.bL,b+1|0,0);}
function D1(a){if(Th(a.b1,a.bL)>0)return a.bL;return a.b1;}
function FK(a){if(Th(a.b1,a.bL)<0)return a.bL;return a.b1;}
function AEP(a,b){var c,d,e,f;c=D1(a);d=FK(a);e=c.P;if(e<=b){f=BG(b,d.P);if(f<=0)return B$(b<=e?c.bh:0,f>=0?d.bh:(-1));}return null;}
function Dq(a){var b,c;b=a.b1;c=a.bL;return (b===c?1:c!==null&&BI(b)===BI(c)?(b.P==c.P&&b.bh==c.bh?1:0):0)?0:1;}
function AFX(a,b){var c,d;if(!Dq(a))return 0;c=D1(a);d=FK(a);return c.P<=b&&b<d.P?1:0;}
function V3(){var a=this;B.call(a);a.e9=null;a.e3=0;a.dB=0;}
function Xp(a,b){var c,d,e;c=a.e3;d=a.e9;if(c==d.data.length)a.e9=Dp(d,c+16|0);d=a.e9.data;e=a.e3;a.e3=e+1|0;d[e]=b;}
function Tk(a){var b,c,d;b=a.dB;c=a.e3-1|0;if(b==c)a.dB=b-1|0;d=a.e9.data;a.e3=c;d[c]=null;}
function ER(){var a=this;B.call(a);a.b9=0;a.b6=null;a.fb=null;a.d9=0;a.dA=0;}
var A0J=0;var A0K=0;var A0B=0;function ABL(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.b6;j=i===b&&!i.iU?0:1;if(j){a.b6=b;Lf(b,e.cR,d);}i=a.b6;k=i===null?0:E6(i)<g?Jf(E6(a.b6),1024):Jf(g,1024)+1|0;l=k<=a.d9?0:1;if(l)a.d9=k;if(!(!j&&!l)){if(A0J){m=b.gb;$rt_globals.console.info("fMeasure"+m.data);A0J=0;}if(!A0B){i=c.bv;b="alphabetic";i.textBaseline=b;}else{b=c.bv;i="top";b.textBaseline=i;}a.dA=h/1024|0;while(true){i=a.fb;if(i.j>=a.d9)break;BC(i,CZ(e));}k=0;while(k<a.d9){Je(a,c,f,d,a.dA+k|0);k=k+1|0;}a.b6.iU=0;}if(!D9(a.fb)
&&h<=E6(a.b6)){k=h/1024|0;g=a.dA;if(k!=g){if(Nx(k-g|0)>=a.d9){g=0;while(g<a.d9){Je(a,c,f,d,k+g|0);g=g+1|0;}a.dA=k;}else{while(true){h=a.dA;if(h>=k)break;Je(a,c,f,d,h+a.d9|0);a.dA=a.dA+1|0;}while(true){h=a.dA;if(h<=k)break;Je(a,c,f,d,h-1|0);a.dA=a.dA-1|0;}}}}}
function Lr(b,c){return (c-Fi(b)|0)/2|0;}
function N1(b,c){return Lr(b,c)+b.sG|0;}
function Je(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;EH(b);f=a.b6.gb;g=e*1024|0;h=QR(a,g);if(h>=a.b6.p.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.b9;a:{while(true){l=a.b6;if(h>=l.p.data.length)break a;l=UP(l,h);m=!A0B?N1(d.data[l.cf],c):Lr(d.data[l.cf],c);n=d.data;o=f.data;CC(b,n[l.cf]);Ch(b,l.v,k,m);k=o[h]-j+a.b9;if(k>1024.0)break;h=h+1|0;}}CS(Br(a.fb,e%a.d9|0),b);}
function AFq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(D9(a.fb))return;if(!a.d9)return;if(j>E6(a.b6))return;r=a.b6;s=r.eQ;t=r.p;u=j/1024|0;v=QR(a,j);w= -a.b9|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Br(a.fb,u%a.d9|0);bc=y[v];bd=bb[v]+a.b9|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Bb(bh,bd)-j|0;if(bf&&ba)bi=bi+a.b9|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:{if
(!bj){bk=!ba?a.b9:2*a.b9|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.b9:2*a.b9|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b7.i6;if(bc===m)bo=k.b7.pI;bp=BY(n);d:{while(B0(bp)){if(B1(B3(bp),bc)){bj=1;break d;}}bj=0;}if(bj)bo=k.b7.xB;if(q!==null){y=q.mp;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=AAr(k.dY,k,z,q.gx);}if(!bn&&!bl){l.a=Bb(l.a,E6(a.b6));bk=j>=l.b?bi:(Bb(bd,bh)-l.b|0)-(!ba?a.b9:0)|0;bh=(j+bi|0)<=
(l.a+(!ba?a.b9:2*a.b9|0)|0)?0:(Bb(bd,bh)-l.a|0)-(!ba?a.b9:0)|0;bm=j-be|0;bl=w+c|0;bq=bm;bj=bi-bk|0;Cv(e,bq,0.0,bj,x);U(f,bj,i);Io(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Cv(e,bj-bh|0,0.0,bh,x);U(f,bh,i);z=bl+bi|0;Io(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);br=bj-bk|0;bj=bk-bh|0;Cv(e,br,0.0,bj,x);U(f,bj,i);Io(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Cv(e,j-be|0,0.0,bi,x);U(f,bi,i);Io(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=bg;}v=v+1|0;}}}
function Io(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bO!==0.0&&f.bm!==0.0){m=j.t_.data[g.cG];if(k)n=j.b7.nu;else{g=m.pw;if(g===null)g=j.b7.fi;if(l===null)l=BP(g);n=l;}g=m.py;if(A0K)i=0.0;EZ(b,c,d,e,f,h,g,n,i);return;}return;}}
function QR(a,b){var c,d,e,f,g,h,i;c=a.b6;d=c.gb;e=0;f=c.p.data.length;g=b;b=BG(e,f);if(b>0){c=new BE;Y(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BG(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ZO(a){a.b6=null;D8(a.fb,new Yi);H0(a.fb);}
function AB1(a,b,c,d,e,f,g,h,i){var j,k;j=E6(a.b6);if(j)j=j+a.b9|0;if(!j)j=j-a.b9|0;k=Bd( -a.b9|0,j-g|0);if(k>=h)return;U(f,h-k|0,e);Bx(b,c+k|0,d,f,i);}
function ACL(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(ER,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=BV(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.b6===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new ER;f.b9=3;f.fb=BH();f.dA=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)ZO(o);h=h+1|0;}return g;}
function AEh(){A0B=0;}
function AGZ(){var a=this;B.call(a);a.fD=null;a.dd=null;a.es=null;a.eV=null;a.iP=null;a.iQ=null;}
function Ja(){var a=new AGZ();ANp(a);return a;}
function ANp(a){a.fD=new Bf;a.dd=new Bf;a.es=new Bf;a.eV=new Bf;a.iP=new B_;a.iQ=new B_;}
function SQ(a){var b;b=a.dd;return !W(b.b,b.a)?0:1;}
function If(a,b){return Gu(b,a.es,a.eV);}
function FG(a,b,c,d){var e,f,g,h,i;e=If(a,b);f=Gu(b,a.fD,a.dd);if(!e&&!f)return null;if(!f){if(!d)c.g(Yq(a,b.b-a.es.b|0));else c.g(Rl(a,b.a-a.es.a|0));}g=!d?a.fD.b+(a.dd.b/2|0)|0:a.fD.a+(a.dd.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new TO;b.wL=a;b.wM=c;b.wK=i;}else{b=new TN;b.qb=a;b.p_=c;b.qa=i;}return b;}
function Hl(a,b,c){if(b!==null&&c!==null){BJ(a.iP,c);BJ(a.iQ,b);return;}}
function ACQ(b,c){var d;d=new V8;d.sI=b;d.xJ=c;return d;}
function Rl(a,b){var c,d,e;c=a.eV.a;d=a.dd.a;e=c-d|0;return ACQ(Bb(Bd(0,b-(d/2|0)|0),e),e);}
function Yq(a,b){var c,d,e;c=a.eV.b;d=a.dd.b;e=c-d|0;return ACQ(Bb(Bd(0,b-(d/2|0)|0),e),e);}
function Jt(a,b,c,d,e,f,g){YL(a,b,c,d,e,f,g,1);}
function Sr(a,b,c,d,e,f,g){YL(a,b,c,d,e,f,g,0);}
function YL(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){U(a.eV,0,0);U(a.dd,0,0);}else{i=Bb(g*3|0,d);j=Bd(RF(d,d,e),i);e=e-d|0;i=d-j|0;i=i?RF(b,i,e):0;if(!h){k=a.fD;k.b=i+c|0;k.a=f-g|0;l=a.dd;l.b=j;l.a=g;l=a.es;l.b=c;l.a=k.a;k=a.eV;k.b=d;k.a=g;}else{k=a.fD;k.b=f-g|0;k.a=i+c|0;l=a.dd;l.b=g;l.a=j;l=a.es;l.b=k.b;l.a=c;k=a.eV;k.b=g;k.a=d;}}}
function Zc(a,b){GP(a,b);GY(a,b);}
function GP(a,b){var c;c=a.es;Bx(b,c.b,c.a,a.eV,a.iP);}
function GY(a,b){var c,d;c=a.dd;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fD;Bx(b,d.b+1|0,d.a+1|0,c,a.iQ);b=a.dd;b.b=b.b+2|0;b.a=b.a+2|0;}
function FT(a,b,c){return If(a,b)&&Ge(c)?1:0;}
function ACt(){var a=this;B.call(a);a.zB=20;a.fU=null;a.ff=null;a.ja=null;a.m$=0;a.jU=0;a.jj=0.0;a.cJ=null;a.kP=null;a.eU=null;a.f5=null;a.f1=0;}
function AGN(){var a=new ACt();AUW(a);return a;}
function AUW(a){a.zB=20;a.fU=new Bf;a.ff=new Bf;a.cJ=BH();a.kP=D7(0);}
function Vg(a,b){var c,d,e,f,g;c=a.f1;if(b==c)return;d=a.cJ.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bd(0,(c-1|0)/20|0);f=Bd(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){Tb(a,b);a.f1=b;}else{if(a.f1>=b)while(true){if(g<f)break a;a.f1=OM(Br(a.cJ,g%d|0),a.eU,a.f5,a.f1,b,e,a.jj);g=g+(-1)|0;}while(f<=g){a.f1=OM(Br(a.cJ,f%d|0),a.eU,a.f5,a.f1,b,e,a.jj);f=f+1|0;}}}}
function Mb(a,b){if(b===null)b=D7(0);a.kP=b;}
function US(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=BY(a.cJ);while(B0(f)){g=B3(f);h=a.fU;i=W(a.cJ.j,a.jU);j=a.kP;k=g.fc.a;l=((g.kr.a-(b%i|0)|0)+i|0)%i|0;m=d.hp;n=b+l|0;o=g.O;n=n/o|0;p=l+k|0;q=BG(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(MJ(g,j,q,i,d,m)){i=W((p-k|0)+1|0,g.O);U(g.dW,BS(g.bs),i);Cv(g.eN,0.0,W(k,g.O),BS(g.bs),i);i=q;}else{r=Ga(d,j,q,m);EU(g,e,l+W(k,g.O)|0,h,m.fA,r);U(g.dW,BS(g.bs),g.O);Cv(g.eN,0.0,W(p,g.O),BS(g.bs),g.O);k=p;}p=p+1|0;q=i;}r=Ga(d,j,q,m);EU(g,e,l+W(k,g.O)|
0,h,m.fA,r);}else{if(q>0&&l<c){o=Bd(c-l|0,0);k=g.O;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(MJ(g,j,u,v,d,m)){o=W((t-s|0)+1|0,g.O);U(g.dW,BS(g.bs),o);Cv(g.eN,0.0,W(s,g.O),BS(g.bs),o);v=u;}else{r=Ga(d,j,u,m);EU(g,e,l+W(s,g.O)|0,h,m.fA,r);U(g.dW,BS(g.bs),g.O);Cv(g.eN,0.0,W(t,g.O),BS(g.bs),g.O);s=t;}t=t+1|0;u=v;}r=Ga(d,j,u,m);EU(g,e,l+W(s,g.O)|0,h,m.fA,r);}if(p>i){n=b/g.O|0;o=Bb(p%i|0,c);U(g.dW,BS(g.bs),g.O);k=b%Da(g.bs)|0;l=g.O;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(MJ(g,
j,i,n+(o-k|0)|0,d,m)){l=W((o-s|0)+1|0,g.O);U(g.dW,BS(g.bs),l);Cv(g.eN,0.0,W(s,g.O),BS(g.bs),l);}else{r=Ga(d,j,i,m);l=s-k|0;q=g.O;EU(g,e,W(l,q)-(b%q|0)|0,h,m.fA,r);i=(n+o|0)-k|0;U(g.dW,BS(g.bs),g.O);Cv(g.eN,0.0,W(o,g.O),BS(g.bs),g.O);s=o;}o=o+1|0;}r=Ga(d,j,i,m);n=s-k|0;o=g.O;EU(g,e,W(n,o)-(b%o|0)|0,h,m.fA,r);}}}}
function LN(a,b,c,d){var e,f,g,h,i,j;e=a.cJ.j;while(true){f=a.cJ.j;g=W(f,a.jU);if(g>(d+a.m$|0))break;h=B$(0,g);i=new Rw;g=a.ff.b;f=a.m$;j=a.ja;i.dW=new Bf;i.eN=new B_;i.kr=h;i.d$=20;i.O=f;i.fc=B$(g,20*f|0);i.ha=N1(j,f);if(i.bs===null)i.bs=CZ(b);BC(a.cJ,i);}if(f==e)return;Tb(a,c);}
function Tb(a,b){var c,d,e,f,g,h,i,j;c=a.cJ;d=c.j;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=BY(c);while(B0(c)){f=B3(c);g=a.eU;h=a.jj;EH(g);i=0;while(true){j=f.d$;if(i>=j)break;j=e-W(d,j)|0;if(j<b)j=e;e=j+1|0;Gz(f,g,C8(e),W(f.O,i)+f.ha|0,h);i=i+1|0;}CS(f.bs,g);}}
function Tf(a,b,c,d){var e;a.ja=b;a.m$=c;e=c*20|0;a.jU=e;b=CK(a.eU,CO(d,a.ff.b,e));a.eU=b;CC(b,a.ja);TK(a.eU,2);b=CK(a.f5,CO(d,a.ff.b,c));a.f5=b;CC(b,a.ja);TK(a.f5,2);}
function Qw(a){D8(a.cJ,new Nu);H0(a.cJ);a.eU=CK(a.eU,null);a.f5=CK(a.f5,null);}
function TQ(a,b,c,d,e){Cx(a.fU,b);U(a.ff,c,d);a.jj=e;}
var X8=G(0);
function AHw(a,b){var c;c=a.bt();while(c.bE()){b.g(c.bq());}}
var HZ=G(0);
function ANK(a,b){var c,d;c=a.bt();d=0;while(c.bE()){if(b.X(c.bq())){c.rM();d=1;}}return d;}
var E3=G();
function D9(a){return a.cV()?0:1;}
function Id(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=AFg(IL(BI(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BY(a);while(B0(f)){g=b.data;h=e+1|0;g[e]=B3(f);e=h;}return b;}
function I0(a,b){var c,d;c=0;d=b.bt();while(d.bE()){if(!a.tA(d.bq()))continue;c=1;}return c;}
var Tw=G(0);
var JU=G(0);
function Gt(){E3.call(this);this.cF=0;}
function ARL(a,b){a.nC(a.cV(),b);return 1;}
function BY(a){var b;b=new ON;b.hs=a;b.np=a.cF;b.js=a.cV();b.gP=(-1);return b;}
function AQM(a,b,c){var d,e;if(b>=0&&b<=a.cV()){if(c.eh())return 0;d=c.bt();while(d.bE()){e=b+1|0;a.nC(b,d.bq());b=e;}return 1;}c=new BE;Y(c);K(c);}
function ATH(a,b,c){c=new D$;Y(c);K(c);}
function K0(a,b){var c,d;c=a.cV();d=0;while(true){if(d>=c)return (-1);if(B1(b,a.jT(d)))break;d=d+1|0;}return d;}
function APz(a,b){var c,d;if(!Jg(b,JU))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!B1(Br(a,d),Br(c,d)))return 0;d=d+1|0;}return 1;}
var L3=G(0);
function ABn(){var a=this;Gt.call(a);a.cC=null;a.j=0;}
function BH(){var a=new ABn();AL3(a);return a;}
function AL3(a){a.cC=R(B,10);}
function J5(a,b){var c,d;c=a.cC.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cC=Dp(a.cC,d);}}
function Br(a,b){JS(a,b);return a.cC.data[b];}
function AQt(a){return a.j;}
function BC(a,b){var c,d;J5(a,a.j+1|0);c=a.cC.data;d=a.j;a.j=d+1|0;c[d]=b;a.cF=a.cF+1|0;return 1;}
function Td(a,b,c){var d,e,f;Q9(a,b);J5(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cC.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cC.data[b]=c;a.j=d+1|0;a.cF=a.cF+1|0;}
function Ey(a,b){var c,d,e,f;JS(a,b);c=a.cC.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cF=a.cF+1|0;return d;}
function XQ(a,b){var c;c=K0(a,b);if(c<0)return 0;Ey(a,c);return 1;}
function H0(a){ABP(a.cC,0,a.j,null);a.j=0;a.cF=a.cF+1|0;}
function ABR(a,b,c){var d,e,f,g,h,i;Q9(a,b);if(c.eh())return 0;J5(a,a.j+c.cV()|0);d=c.cV();e=a.j;f=e-1|0;while(f>=b){g=a.cC.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bt();i=0;while(i<d){g=a.cC.data;e=b+1|0;g[b]=h.bq();i=i+1|0;b=e;}a.cF=a.cF+1|0;return 1;}
function JS(a,b){var c;if(b>=0&&b<a.j)return;c=new BD;Y(c);K(c);}
function Q9(a,b){var c;if(b>=0&&b<=a.j)return;c=new BD;Y(c);K(c);}
function D8(a,b){var c;c=0;while(c<a.j){b.g(a.cC.data[c]);c=c+1|0;}}
function O_(){B.call(this);this.zT=null;}
function O$(){B.call(this);this.n2=null;}
function AI8(a,b){var c;c=a.n2;FW(c,Fp(b,H6(c)));}
function O9(){B.call(this);this.sm=null;}
function AIa(a,b){var c;c=a.sm;Ji(c,Fp(b,U1(c)));}
function O8(){B.call(this);this.vY=null;}
function AH_(a){var b,c;b=a.vY;c=b.iM?0:1;b.iM=c;b=new M;O(b);Gr(H(b,C(241)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pe(){B.call(this);this.px=null;}
function AL1(a){var b,c;b=a.px;c=b.iS?0:1;b.iS=c;b=new M;O(b);Gr(H(b,C(242)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pc(){B.call(this);this.tE=null;}
function AV6(a){var b,c;b=a.tE;c=b.ku^1;b.ku=c;b=new M;O(b);Gr(H(b,C(243)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pb(){B.call(this);this.xH=null;}
function AOA(a){var b,c,d,e,f;b=a.xH;c=(b.d_+3|0)%6|0;b.d_=c;d=b.hd.data;e=d.length;f=0;while(f<e){b=d[f];b.b9=c;b=b.b6;if(b!==null)b.iU=1;f=f+1|0;}}
function Pa(){B.call(this);this.pj=null;}
function AQ2(a){var b;b=a.pj;b.bS=b.bS?0:1;Qw(b.dh);b.dh=AGN();Uv(b,b.ba,b.cz,b.cE.b4);}
function O7(){B.call(this);this.sS=null;}
function AVe(a){var b;b=a.sS;b.jM=b.jM?0:1;}
function O6(){B.call(this);this.wx=null;}
function AHU(a){var b;b=a.wx;b.j4=b.j4?0:1;}
var FB=G(Co);
var A0z=null;var A0L=null;var A0A=null;var A0M=null;function AH9(){AH9=Bq(FB);APB();}
function AEv(a,b){var c=new FB();AEf(c,a,b);return c;}
function AEf(a,b,c){AH9();Dd(a,b,c);}
function APB(){var b;A0z=AEv(C(244),0);A0L=AEv(C(245),1);b=AEv(C(246),2);A0A=b;A0M=I(FB,[A0z,A0L,b]);}
function K5(){B.call(this);this.zL=null;}
var AZW=null;var A0N=null;function ANr(){ANr=Bq(K5);AVM();}
function ALg(a){var b=new K5();AAA(b,a);return b;}
function AAA(a,b){ANr();a.zL=b;}
function AVM(){AZW=ALg(C(247));A0N=ALg(C(248));}
var Nf=G(0);
function Ge(a){return DE(a,null);}
function Sp(b){var c;c=new Tq;c.v5=b;return c;}
function RX(){B.call(this);this.s$=null;}
function AMV(a){Kg(a.s$);}
function RV(){B.call(this);this.xc=null;}
function AHM(a){KO(a.xc);}
var Z6=G(0);
var A0H=null;function AF2(){A0H=new OZ;}
function Ld(){var a=this;B.call(a);a.z=null;a.c7=null;a.d2=null;a.dO=null;a.dr=null;a.gR=null;a.gE=null;a.cK=0;a.h2=0;a.tN=0.0;}
function VM(a){var b;b=WZ(a);return AGP(AJt(Km(0,b,0),null,null));}
function BV(a,b){return a.z.data[b];}
function CB(a){return a.z.data.length;}
function WZ(a){return E5(a,CB(a));}
function F0(a,b){return a.z.data[b].M;}
function LQ(a,b){var c,d,e,f,g,h,i;c=a.z.data;d=c[b];e=c[b+1|0];f=DS(Mo(d.p,e.p));g=a.z;h=g.data.length;if(b<h&&b>=0){i=R(CD,h-1|0);c=i.data;S3(g,b,i);c[b]=f;a.z=i;return;}d=new Bu;Y(d);K(d);}
function NQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.z.data;if(!(c<d[b].M?0:1)){d=(BV(a,b)).p.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){f=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}f=0;}FC();h=new BA;d=BU(1);d.data[0]=f;HW(h,d);FJ(a,b,c,1,h);h=a.z.data[b];i=h.p;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=J(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(J(d[j].v)==1)h.p=S3(i,j,R(Ce,e-1|0));else{k=d[j];if(c<=0)l=Dz(Do(k.v,1),k.cG,k.cf);else if(c>=(J(k.v)-1|0)){l=new Ce;m=k.v;Vm(l,Cg(m,0,J(m)-
1|0),k.cG,k.cf);}else{i=BU(J(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=P(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=P(m,e);c=e;}l=Dz(Gd(i),k.cG,k.cf);}d[j]=l;}h.M=h.M-1|0;Ev(h);}else if(b!=(d.length-1|0)){FJ(a,b,c,1,C(197));LQ(a,b);}}
function AAk(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){TP(a.z.data[b],c,e[0]);return;}g=f-1|0;h=It(a.z.data[b],c);d=a.z;i=Dp(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.p.data;m=l.length;c=!m?0:J(l[m-1|0].v);Nd(j,j.p.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fy(e[m]))j=DS(R(Ce,0));else{j=new CD;l=R(Ce,1);l.data[0]=Dz(e[m],0,0);Ip(j,l);}d[b+m|0]=j;m=m+1|0;}Nd(h[1],0,0,e[g]);d[b+g|0]=h[1];a.z
=i;}
function X4(a,b){var c,d,e,f,g,h,i;c=D1(b);d=FK(b);e=c.P;if(e==d.P)return Cg(Fc(a.z.data[e]),c.bh,d.bh);f=new M;O(f);b=a.z.data[c.P];e=c.bh;BL(BT(f,Do(Fc(b),e)),10);g=a.z.data;e=c.P+1|0;h=d.P;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AAK(BT(f,Fc(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.z.data[d.P];h=d.bh;BT(f,Cg(Fc(b),0,h));return N(f);}b=new YC;Y(b);K(b);}
function N7(a,b,c){var d;Yo(a,b);d=D1(b);FJ(a,d.P,d.bh,1,c);}
function Yo(a,b){var c,d,e,f,g,h,i;a:{c=D1(b);d=FK(b);e=c.P;if(e==d.P)GI(a.z.data[e],c.bh,d.bh);else{b=a.z.data[e];GI(b,c.bh,b.M);GI(a.z.data[d.P],0,d.bh);e=c.P+1|0;f=d.P;g=a.z;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CD,(h-f|0)+e|0);ADg(g,e,f,i);a.z=i;LQ(a,c.P);break a;}b=new Bu;Y(b);K(b);}b=new Bu;Y(b);K(b);}}}
function Ho(a,b,c){return Du(b,Gh(BV(a,b),c));}
function Y3(a,b){var c,d,e;c=0;d=0;while(true){e=a.z.data.length;if(c>=e)break;if((d+(BV(a,c)).M|0)>=b)return B$(c,b-d|0);d=d+((BV(a,c)).M+1|0)|0;c=c+1|0;}return B$(e,0);}
function E5(a,b){var c,d,e;c=0;d=a.z.data.length;e=0;while(e<b){c=c+F0(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Mn(a,b){return MH(BV(a,b.by),b.bI);}
function ES(a){var b,c,d,e,f,g,h,i,j;b=BU(WZ(a));c=b.data;d=a.z.data.length;e=0;f=0;while(e<d){g=a.z.data[e].p.data;h=g.length;i=0;while(i<h){j=g[i].v;RE(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FJ(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cK=a.cK+1|0;f=a.gR;g=R(He,1);h=new He;h.ed=b;h.ej=c;i=MK(e,C(197),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B$(b,c+J(i[0])|0);break a;}k=B$((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=B$(b,c);}i=g.data;h.l8=k;h.ng=d;h.ge=e;i[0]=h;BC(f,g);KS(a,b,c,d,e);}
function KS(a,b,c,d,e){var f;f=E5(a,b)+c|0;if(!d){Qg(a.c7,f,J(e));Wj(a.d2,f,J(e));}else{RS(a.c7,f,J(e));Oy(a.d2,f,J(e));}}
function Op(a,b){var c,d,e;c=MK(b.ge,C(197),(-1));if(b.ng){AAk(a,b.ed,b.ej,c);Qg(a.c7,E5(a,b.ed)+b.ej|0,J(b.ge));Wj(a.d2,E5(a,b.ed)+b.ej|0,J(b.ge));}else{c=c.data;d=AI_();B7(d.b1,b.ed,b.ej);e=c.length;if(e==1)B7(d.bL,b.ed,b.ej+J(c[0])|0);else B7(d.bL,(b.ed+e|0)-1|0,J(c[e-1|0]));Yo(a,d);RS(a.c7,E5(a,b.ed)+b.ej|0,J(b.ge));Oy(a.d2,E5(a,b.ed)+b.ej|0,J(b.ge));}return b.l8;}
function J$(a){a.h2=a.cK;}
function Q_(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.z.data;f=e.length;if(d>=f)break;g=e[d].M;if(b<=(c+g|0))return Du(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Du(f,0);}
function Rb(a){var b,c,d;a.gE=BM(a.z.data.length+1|0);b=0;while(b<a.z.data.length){c=a.gE.data;d=b+1|0;c[d]=(c[b]+(BV(a,b)).M|0)+1|0;b=d;}}
var Fh=G();
function KZ(){Fh.call(this);this.zm=null;}
function UH(){Fh.call(this);this.zg=null;}
function RI(){Fh.call(this);this.AC=null;}
var FU=G(0);
var T2=G(0);
function Hr(){var a=this;B.call(a);a.P=0;a.bh=0;}
function B7(a,b,c){a.P=b;a.bh=c;}
function We(a,b){a.P=b.P;a.bh=b.bh;}
function Th(a,b){var c;c=BG(a.P,b.P);if(c)return c;return BG(a.bh,b.bh);}
function LB(){var a=this;B.call(a);a.me=null;a.kQ=null;}
function Mu(a){return a.me.by;}
function Kk(a){return a.me.bI;}
var X2=G(0);
function Uu(){B.call(this);this.h9=null;}
function EE(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.h9));}
function Dy(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.h9));}
function AKE(a){var b,c;b=a.h9.byteLength;c=new M;O(c);H(V(H(c,C(249)),b),C(250));return N(c);}
var Wc=G(0);
function LH(){var a=this;B.call(a);a.ho=null;a.fL=null;a.m_=null;}
function AEH(a,b){var c=new LH();ANm(c,a,b);return c;}
function AWk(a,b,c){var d=new LH();Pu(d,a,b,c);return d;}
function AAJ(b){var c,d,e,f,g,h,i;c=new LH;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=R(BA,0);else{f=R(BA,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FR(e[h]);h=h+1|0;}}}else f=R(BA,0);Pu(c,d,b,f);return c;}
function ANm(a,b,c){Pu(a,b,c,R(BA,0));}
function Pu(a,b,c,d){a.ho=b;a.fL=c;a.m_=d;}
function Kl(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EM(a);e=new M;O(e);H(H(e,C(251)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EM(a){var b;b=a.ho;return FR(b!==null?b.name:a.fL.name);}
function ANN(a){var b,c,d,e,f;if(a.fL===null){b=a.m_;c=EM(a);d=ACd(b);e=new M;O(e);H(H(H(e,d),C(252)),c);c=N(e);}else{b=a.m_;c=EM(a);f=Kl(a,a.fL.size);d=ACd(b);e=new M;O(e);V(H(H(H(H(e,d),C(252)),c),C(253)),f);c=N(e);}return c;}
function Tq(){B.call(this);this.v5=null;}
function DE(a,b){GT(a.v5,b);return 1;}
function Lg(){var a=this;D4.call(a);a.cU=0;a.ce=null;a.cS=0;a.xE=0.0;a.lY=0;}
function IK(){var a=new Lg();Rx(a);return a;}
function AMv(a,b){return R(G4,b);}
function Rx(a){var b;b=AGQ(16);a.cU=0;a.ce=R(G4,b);a.xE=0.75;Wp(a);}
function AGQ(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function GK(a){var b;if(a.cU>0){a.cU=0;b=a.ce;ABP(b,0,b.data.length,null);a.cS=a.cS+1|0;}}
function Wp(a){a.lY=a.ce.data.length*a.xE|0;}
function Gm(a,b){return UU(a,b)===null?0:1;}
function WO(a){var b;b=new Wq;b.sn=a;return b;}
function Cl(a,b){var c;c=UU(a,b);if(c===null)return null;return c.cY;}
function UU(a,b){var c,d;if(b===null)c=TM(a);else{d=b.m3();c=R$(a,b,d&(a.ce.data.length-1|0),d);}return c;}
function R$(a,b,c,d){var e;e=a.ce.data[c];while(e!==null&&!(e.jS==d&&ABa(b,e.cI))){e=e.cO;}return e;}
function TM(a){var b;b=a.ce.data[0];while(b!==null&&b.cI!==null){b=b.cO;}return b;}
function KD(a){var b;if(a.lr===null){b=new QV;b.ht=a;a.lr=b;}return a.lr;}
function F2(a,b,c){var d,e,f,g;if(b===null){d=TM(a);if(d===null){a.cS=a.cS+1|0;d=Wg(a,null,0,0);e=a.cU+1|0;a.cU=e;if(e>a.lY)WE(a);}}else{e=b.m3();f=e&(a.ce.data.length-1|0);d=R$(a,b,f,e);if(d===null){a.cS=a.cS+1|0;d=Wg(a,b,f,e);e=a.cU+1|0;a.cU=e;if(e>a.lY)WE(a);}}g=d.cY;d.cY=c;return g;}
function Wg(a,b,c,d){var e,f;e=new G4;AAb(e,b,null);e.jS=d;f=a.ce.data;e.cO=f[c];f[c]=e;return e;}
function AC6(a,b){var c,d,e,f,g,h,i,j;c=AGQ(!b?1:b<<1);d=R(G4,c);e=d.data;f=0;b=c-1|0;while(true){g=a.ce.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.jS&b;j=h.cO;h.cO=e[i];e[i]=h;h=j;}f=f+1|0;}a.ce=d;Wp(a);}
function WE(a){AC6(a,a.ce.data.length);}
function ABa(b,c){return b!==c&&!b.bT(c)?0:1;}
function CD(){var a=this;B.call(a);a.p=null;a.M=0;a.gb=null;a.eQ=null;a.d7=null;a.hn=null;a.gs=0;a.iU=0;a.hV=0;}
var A0O=0;var A0P=0;var A0D=0;function DS(a){var b=new CD();Ip(b,a);return b;}
function Ip(a,b){var c,d,e,f;c=b.data;a.p=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.M=d;Ev(a);}
function UP(a,b){return a.p.data[b];}
function Gh(a,b){var c;c=Jo(a,b);return c<=0?0:a.d7.data[c-1|0];}
function Jo(a,b){var c,d,e,f;c=a.p.data.length;if(!c)return (-1);if(!(a.d7!==null&&!a.hV)){Y4(a);d=0;e=0;f=a.p.data.length;while(d<f){e=e+J(a.p.data[d].v)|0;a.d7.data[d]=e;d=d+1|0;}a.hV=0;}d=VA(a.d7,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function MH(a,b){var c;c=a.p.data;if(!c.length)return null;return c[Jo(a,b)];}
function GI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.M){a.p=R(Ce,0);Ev(a);a.M=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.p.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.p.data[f].v);j=BG(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.p.data[f];if(!b&&c==J(k.v)?1:0){g=a.p;a.p=S3(g,e,R(Ce,g.data.length-1|0));a.M=a.M-d|0;Ev(a);return;}a.p.data[e]=Dz(Fr(Cg(k.v,0,b),Do(k.v,c)),k.cG,k.cf);}else{g=a.p.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.p.data[e]=Dz(Cg(l.v,0,b),l.cG,l.cf);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.p.data[f]=Dz(Do(m.v,c),m.cG,m.cf);g=a.p;a.p=ADg(g,e,f,R(Ce,(g.data.length-f|0)+e|0));}a.M=a.M-d|0;Ev(a);}
function It(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(CD,[DS(R(Ce,0)),a]);if(b>=a.M)return I(CD,[a,DS(R(Ce,0))]);c=a.p;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(CD,[DS(LD(c,0,R(Ce,d))),DS(LD(c,d,R(Ce,f-d|0)))]);h=e[d];e=LD(c,0,R(Ce,d+1|0));i=e.data;j=LD(c,d,R(Ce,f-d|0));c=j.data;i[d]=Dz(Cg(h.v,0,b),h.cG,h.cf);c[0]=Dz(Do(h.v,b),h.cG,h.cf);return I(CD,[DS(e),DS(j)]);}
function TP(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.p.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}Nd(a,d,b,c);}
function Nd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.p;f=e.data;g=f.length;if(!g){h=R(Ce,1);h.data[0]=Rv(d);a.p=h;}else if(!b&&!c){i=R(Ce,g+1|0);h=i.data;DB(e,0,i,1,g);h[0]=Rv(d);a.p=i;}else{j=f[b];if(c<=0)k=Dz(Fr(d,j.v),j.cG,j.cf);else if(c>=J(j.v))k=Dz(Fr(j.v,d),j.cG,j.cf);else{l=J(d);m=l+c|0;n=J(j.v)-c|0;h=BU(J(j.v)+l|0);i=h.data;o=0;while(o<c){i[o]=P(j.v,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=P(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=P(j.v,g+c|0);g=g+1|0;}k=Dz(Gd(h),j.cG,j.cf);}f[b]=k;}a.M=a.M+J(d)|0;Ev(a);}
function OC(a){var b,c,d,e,f,g;b=0;c=a.p.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MC(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lf(a,b,c){var d,e,f,g,h,i,j;d=a.p.data.length;e=a.gb;if(!(e!==null&&e.data.length>=d)){a.gb=AHP(d);a.eQ=BM(d);a.gs=1;}Y4(a);if(!a.gs)A0P=A0P+1|0;else{f=0;g=0.0;A0O=A0O+1|0;h=0;while(h<d){i=c.data;j=a.p.data[h];f=f+J(j.v)|0;a.d7.data[h]=f;CC(b,i[j.cf]);g=g+EA(b,j.v);a.gb.data[h]=g;a.eQ.data[h]=g+0.5|0;h=h+1|0;}a.M=f;a.gs=0;a.hV=0;}}
function Y4(a){var b;b=a.d7;if(!(b!==null&&b.data.length>=a.p.data.length)){a.d7=BM(a.p.data.length);a.hV=1;}}
function Ev(a){a.gs=1;a.iU=1;a.hV=1;a.hn=null;}
function TJ(a,b,c,d){var e,f,g,h,i,j,k;if(a.hn===null)a.hn=R($rt_arraycls($rt_intcls()),a.p.data.length);e=a.hn.data[d];if(e===null){e=c.data;f=a.p.data[d];CC(b,e[f.cf]);f=f.v;e=BM(J(f)-1|0);c=Fz(f);g=!d?0.0:a.gb.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BA;k=i+1|0;Nb(f,c,0,k);h[i]=g+EA(b,f)+0.5|0;i=k;}a.hn.data[d]=e;}return e;}
function GQ(a,b,c,d){var e,f,g,h,i;if(a.p.data.length&&b){if(!(!a.gs&&a.eQ!==null))Lf(a,c,d);if(b>=a.M)return a.eQ.data[a.p.data.length-1|0];e=0;f=0;a:{while(true){g=a.p.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BG(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eQ.data[f];}return (TJ(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E6(a){var b,c,d;a:{b=a.p.data.length;if(b){c=a.eQ.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Ha(a,b){var c;if(b>=a.M)return b+1|0;c=Jo(a,b);return a.d7.data[c];}
function Fc(a){var b,c,d,e;b=new M;Gj(b,a.M);c=a.p.data;d=c.length;e=0;while(e<d){BT(b,c[e].v);e=e+1|0;}return N(b);}
function VL(b){var c,d,e,f;c=R(CD,1);d=c.data;e=new CD;f=R(Ce,1);f.data[0]=Rv(b);Ip(e,f);d[0]=e;return c;}
function AC$(){A0D=0;}
function ACi(){var a=this;B.call(a);a.eS=null;a.dJ=null;}
function ASa(){var a=new ACi();AH1(a);return a;}
function AKn(a,b){var c=new ACi();AMc(c,a,b);return c;}
function AH1(a){var b;b=new Ly;Rx(b);a.dJ=b;}
function AMc(a,b,c){a.eS=b;a.dJ=c;}
function UQ(a,b,c){var d;d=new NN;d.xa=c;d.w$=b;AGw(b,d);b=b.cg;d=new NO;d.n1=a;d.n0=c;b.ep(d);}
function Wj(a,b,c){var d;d=a.eS;if(d===null)return;Ss(a,d,b,c);}
function Oy(a,b,c){var d;d=a.eS;if(d===null)return;VF(a,d,b,c);}
function Ss(a,b,c,d){var e,f,g,h;e=b.dt.bt();while(e.bE()){ZY(a,e.bq(),c,d);}e=b.eg.bt();while(e.bE()){f=e.bq();g=new W0;g.t7=a;Ej(a,g,f,c,d);}h=b.e4.bt();while(h.bE()){e=h.bq();ZY(a,e.fG,c,d);f=new WY;f.qj=a;Ej(a,f,e.ij,c,d);}b=b.cg.bt();while(b.bE()){Ss(a,b.bq(),c,d);}}
function ZY(a,b,c,d){Kh(a,b.c_,c,d);}
function Ej(a,b,c,d,e){var f,g;a:{if(c instanceof Ft){f=c.kd;g=new OG;g.r1=a;g.r2=b;g.r3=d;g.r4=e;D8(f,g);}else{if(!(c instanceof Fd)){if(!(c instanceof EJ))break a;f=c;Ej(a,b,f.eE,d,e);Ej(a,b,f.gj,d,e);return;}g=c.fu;f=new OI;f.wc=a;f.v$=b;f.v_=d;f.wb=e;D8(g,f);}}if(c!==null){c=c.dL;if(c!==null)b.jJ(c,Dh(d),Dh(e));}}
function Kh(a,b,c,d){var e;e=b.cy;if(e>=c)b.cy=e+d|0;}
function VF(a,b,c,d){var e,f,g,h;e=b.dt.bt();while(e.bE()){IP(a,(e.bq()).c_,c,d);}e=b.eg.bt();while(e.bE()){f=e.bq();g=new T_;g.xR=a;Ej(a,g,f,c,d);}h=b.e4.bt();while(h.bE()){e=h.bq();IP(a,e.fG.c_,c,d);f=new T7;f.nW=a;Ej(a,f,e.ij,c,d);}b.dt.mz(new T9);b.eg.mz(new T8);b=b.cg.bt();while(b.bE()){VF(a,b.bq(),c,d);}}
function IP(a,b,c,d){var e;e=b.cy;if(e>=c)b.cy=e-d|0;}
var OZ=G();
function AVi(a){}
function Ce(){var a=this;B.call(a);a.v=null;a.cG=0;a.cf=0;}
function Rv(a){var b=new Ce();ALl(b,a);return b;}
function Dz(a,b,c){var d=new Ce();Vm(d,a,b,c);return d;}
function ALl(a,b){Vm(a,b,0,0);}
function Vm(a,b,c,d){a.v=b;a.cG=c;a.cf=d;}
function HO(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MC(a){return J(a.v);}
function Ol(){var a=this;B.call(a);a.c$=null;a.eL=0;}
var A0Q=null;function AGP(a){var b=new Ol();ACo(b,a);return b;}
function ACo(a,b){a.eL=0;a.c$=b;}
function WM(a,b){var c;if(b.ek)return b;b=BY(b.bn);while(true){if(!B0(b))return null;c=WM(a,B3(b));if(c!==null)break;}return c;}
function Wr(a,b,c){var d,e,f,g;d=KC(a,a.c$,b);if(d===null)return;e=c.db.cg;f=c.bn;if(d===a.c$){b=new Us;b.pQ=a;D8(f,b);b=new UG;b.vP=a;e.ep(b);b=a.c$;b.bn=f;b.db.cg=e;b.ek=0;return;}if(!D9(f)){b=d.gT;if(b!==null){c=new W_;c.qe=b;D8(f,c);g=K0(b.bn,d);if(g==(-1))I0(b.bn,f);else{Ey(b.bn,g);ABR(b.bn,g,f);}}}b=d.db.fd;c=new YR;c.oc=b;e.ep(c);g=K0(b.cg,d.db);if(g==(-1))I0(b.cg,e);else{b.cg.ns(g);b.cg.ul(g,e);}}
function KC(a,b,c){var d,e,f,g;d=b.bY;if(d.bZ==c.bZ&&d.b3==c.b3?1:0){d=BY(b.bn);while(B0(d)){e=KC(a,B3(d),c);if(e!==null)return e;}return b;}b=BY(b.bn);while(true){if(!B0(b))return null;d=B3(b);f=c.bZ;g=c.b3;e=d.bY;if(e.bZ<=f&&g<=e.b3?1:0){e=KC(a,d,c);if(e!==null)break;}}return e;}
function Nj(a,b,c){BC(c,b.bY);b=BY(b.bn);while(B0(b)){Nj(a,B3(b),c);}}
function Qg(a,b,c){a.eL=0;Lw(a,a.c$,b,c);}
function Lw(a,b,c,d){var e;if(C6(b)<c)return;a:{if(C1(b)>c){MU(b,d);GX(b,d);b=BY(b.bn);while(B0(b)){Lw(a,B3(b),c,d);}}else{if(!LT(b,c)){if(a.eL)break a;if(C6(b)!=c)break a;}GX(b,d);if(C1(b)==c&&a.eL)MU(b,d);e=BY(b.bn);while(B0(e)){Lw(a,B3(e),c,d);}if(!a.eL){b.ek=1;a.eL=1;}}}}
function RS(a,b,c){a.eL=0;Ku(a,a.c$,b,c);}
function Ku(a,b,c,d){var e,f,g,h,i,j;if(C6(b)<c)return;e=C1(b);f=c+d|0;if(e>f){e= -d|0;MU(b,e);GX(b,e);g=BY(b.bn);while(B0(g)){Ku(a,B3(g),c,d);}b.bn=Zs(a,b.bn);}else{g=b.bY;if(c<=g.bZ&&g.b3<=f?1:0){if(b!==a.c$){Ma(b,(-1));KI(b,(-1));}else{Ma(b,0);KI(b,0);}H0(b.bn);b.db.cg.iR();}else{e=LT(b,c);f=LT(b,f);if(e&&f)GX(b, -d|0);else if(e)KI(b,c);else{if(!f)return;Ma(b,c);GX(b, -d|0);}g=BY(b.bn);while(B0(g)){Ku(a,B3(g),c,d);}g=b.bn;h=null;i=Qt(0);while(true){d=0;a:{while(true){if(h===null)h=BY(g);if(!B0(h))c=0;else
{j=B3(h);i=Qt(!ADb(i)&&!j.ek?0:1);c=1;d=1;}if(!c){c=0;break a;}if(!d)break;}c=1;}if(!c)break;}if(!i.nw&&!a.eL)b.ek=1;else a.eL=1;b.bn=Zs(a,b.bn);}}}
function Zs(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BH();d=null;e=A0Q;f=b.cC;g=b.j;if(e===null)e=AY1;h=R(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ACH(h,e);j=0;while(j<g){f.data[j]=i[j-0|0];j=j+1|0;}b.cF=b.cF+1|0;b=BY(b);while(B0(b)){l=B3(b);if(C1(l)==C6(l))continue;if(!l.ek){if(d!==null){BC(c,d);d=null;}BC(c,l);}else if(d===null)d=l;else{j=Bb(C1(d),C1(l));m=Bd(C6(d),C6(l));e=d.db;if(e===null)e=l.db;n=AJt(Km(j,m,d.bY.fh),d.gT,e);n.ek=1;d=n;}}if(d!==null)BC(c,d);return c;}
function Y$(a,b,c,d){var e,f,g,h,i;if((C6(c)-C1(c)|0)<43)e=Cg(d,C1(c),C6(c));else{e=Cg(d,C1(c),C1(c)+20|0);f=Cg(d,C6(c)-20|0,C6(c));g=new M;O(g);H(H(H(g,e),C(170)),f);e=N(g);}e=WT(e,C(197),C(254));f=Bz();g=new M;O(g);h=V(g,b);BL(h,32);h=H(h,c);BL(h,9);H(h,e);Bt(f,N(g));c=BY(c.bn);i=b+1|0;while(B0(c)){Y$(a,i,B3(c),d);}}
function AEj(){A0Q=new Sg;}
var Ly=G(Lg);
function MB(a,b,c){var d;if(b!==null&&c!==null){if(!Gm(a,b)){c=new BE;d=new M;O(d);H(H(d,C(255)),b);Bi(c,N(d));K(c);}if(!Gm(a,c)){b=new BE;d=new M;O(d);H(H(d,C(255)),c);Bi(b,N(d));K(b);}if(Bn(b,c))return 1;c=BY(Cl(a,c));while(B0(c)){if(MB(a,b,B3(c)))return 1;}return 0;}return 1;}
function AGW(){var a=this;B.call(a);a.bZ=0;a.b3=0;a.fh=0;}
function Km(a,b,c){var d=new AGW();ALe(d,a,b,c);return d;}
function ALe(a,b,c,d){a.bZ=b;a.b3=c;a.fh=d;}
function AS6(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bZ==c.bZ&&a.b3==c.b3&&a.fh==c.fh?1:0;}return 0;}
function AJV(a,b){var c;b=b;c=BG(a.bZ,b.bZ);if(!c)c=BG(b.b3,a.b3);return c;}
var Sg=G();
function AQK(a,b,c){var d;b=b;c=c;b=b.bY;c=c.bY;d=BG(b.bZ,c.bZ);if(!d)d=BG(c.b3,b.b3);return d;}
function W$(){var a=this;B.call(a);a.bY=null;a.gT=null;a.bn=null;a.db=null;a.ek=0;}
function AJt(a,b,c){var d=new W$();AGm(d,a,b,c);return d;}
function AGm(a,b,c,d){a.ek=0;a.bY=b;a.gT=c;a.bn=BH();a.db=d;}
function ABE(b){return AAu(b,null);}
function AAu(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Be(b);e=Be(b);f=Be(b);g=Be(b);h=Be(b);i=Km(d,e,f);j=new W$;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGm(j,i,null,l);m=0;while(m<g){l=AAu(b,c);l.gT=j;BC(j.bn,l);m=m+1|0;}return j;}
function AEI(b,c,d){var e,f,g,h,i;a:{e=b.bY;f=b.bn;g=e.bZ;h=e.b3;i=e.fh;Bs(c,g);G0(c,h,i);Bs(c,f.j);if(d!==null){e=b.db;if(e!==null&&X0(d,e)){g=(MM(d,b.db)).bD;break a;}}g=(-1);}Bs(c,g);b=BY(f);while(B0(b)){AEI(B3(b),c,d);}}
function C1(a){return a.bY.bZ;}
function C6(a){return a.bY.b3;}
function Ma(a,b){a.bY.bZ=b;}
function KI(a,b){a.bY.b3=b;}
function MU(a,b){var c;c=a.bY;c.bZ=c.bZ+b|0;}
function GX(a,b){var c;c=a.bY;c.b3=c.b3+b|0;}
function LT(a,b){return C1(a)<=b&&b<C6(a)?1:0;}
function AM4(a){var b,c,d,e,f;b=a.bY;c=b.bZ;d=b.b3;e=b.fh;b=new M;O(b);BL(b,40);BL(V(H(V(H(V(b,c),C(44)),d),C(44)),e),41);b=N(b);c=a.ek;f=new M;O(f);Gr(H(H(f,b),C(44)),c);return N(f);}
function ASg(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return B1(a.bY,c.bY)&&B1(a.bn,c.bn)?1:0;}return 0;}
var HQ=G(0);
function GU(){var a=this;B.call(a);a.cI=null;a.cY=null;}
function A0R(a,b){var c=new GU();AAb(c,a,b);return c;}
function AAb(a,b,c){a.cI=b;a.cY=c;}
function AKH(a,b){var c,d;if(a===b)return 1;if(!Jg(b,HQ))return 0;a:{b:{c:{d:{c=b;b=a.cI;if(b!==null){if(!b.bT(c.cI))break c;else break d;}if(c.cI!==null)break c;}b=a.cY;if(b!==null){if(!b.bT(c.cY))break c;else break b;}if(c.cY===null)break b;}d=0;break a;}d=1;}return d;}
function G4(){var a=this;GU.call(a);a.jS=0;a.cO=null;}
function Ls(){var a=this;Lv.call(a);a.qH=null;a.pk=null;}
function ABk(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.qH;e=0;f=0;g=a.pk;a:{while(true){if((e+32|0)>f&&DV(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bb(Cb(b)+j|0,i.length);OD(b,d,j,f-j|0);e=0;}if(!DV(c)){k=!DV(b)&&e>=f?AZN:AZM;break a;}i=g.data;j=Bb(Cb(c),i.length);l=new OX;l.n_=b;l.rx=c;k=AD7(a,d,e,f,g,0,j,l);e=l.vy;j=l.w8;if(k===null){if(!DV(b)&&e>=f)k=AZN;else if(!DV(c)&&e>=f)k=AZM;}Y2(c,g,0,j);if(k!==null)break;}}EV(b,b.Z-(f-e|0)|0);return k;}
var Ra=G(Ls);
function AD7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Mp(h,2))break a;i=AZM;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!MT(l)){if((f+3|0)>g){j=j+(-1)|0;if(Mp(h,3))break a;i=AZM;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CI(l)){i=Ec(1);break a;}if
(j>=d){if(DV(h.n_))break a;i=AZN;break a;}c=j+1|0;m=k[j];if(!C7(m)){j=c+(-2)|0;i=Ec(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Mp(h,4))break a;i=AZM;break a;}k=e.data;o=ED(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vy=j;h.w8=f;return i;}
var I7=G(Ee);
var NH=G();
function AVq(a,b){return b.text();}
function NK(){var a=this;B.call(a);a.tc=null;a.tb=null;}
function AUo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.tc;d=a.tb;e=R(BA,8);f=BU(16);g=0;h=0;i=b.length;j=0;while(true){k=BG(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=EP(f,0,g);m=h+1|0;e=AFK(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=OU(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.g(AWO(QZ(e,h),ARy(d)));}
var NI=G();
function AIW(a,b){AGO(b);}
function IH(){var a=this;B.call(a);a.b7=null;a.U=null;a.t_=null;a.hp=null;a.dY=null;a.vD=null;a.wq=null;a.w4=null;}
function A0S(a,b,c,d,e){var f=new IH();JJ(f,a,b,c,d,e);return f;}
function KF(){var b,c,d,e,f,g,h,i;b=new IH;c=new Jc;d=new HF;FZ();Kx(d,A0T);M6(c,d,BO(A0v),BO(A0U),BO(A0V),BO(A0v),BO(A0W),BO(A0X),BO(A0Y),BO(A0Z),BO(A00),BO(A01));ACA();e=(A02.fs()).data;f=e.length;g=R(Jz,f);h=g.data;i=0;while(i<f){h[i]=e[i].m0;i=i+1|0;}JJ(b,c,g,AE4(S(C(256)),S(C(257)),S(C(258)),S(C(259))),Hh(),AAO(S(C(119)),S(C(120)),S(C(121)),S(C(260))));return b;}
function JJ(a,b,c,d,e,f){var g;g=c.data;a.vD=EW(C(156),16.0);a.wq=EW(C(156),17.0);a.w4=EW(C(155),15.0);a.b7=b;a.t_=c;a.hp=d;if(g.length>=15){a.U=e;a.dY=f;return;}b=new BE;Y(b);K(b);}
function JI(){var a=this;CP.call(a);a.cZ=null;a.g4=null;}
function AX3(a){var b=new JI();AHa(b,a);return b;}
function AHa(a,b){var c,d,e,f;FV(a,b);c=ASV(a.t);a.g4=c;d=AC9(a.t,c);a.cZ=d;Pd(a.t,d);Ba(b.m.bz,a.g4);Ba(b.m.dD,a.g4);Ba(b.m.bz,a.cZ);c=b.m.b$;d=new Rk;d.qc=a;Ba(c,d);c=b.m.b$;d=new IA;e=a.cZ;BP(e);f=new Rh;f.wE=e;N5(d,b,f);Ba(c,d);c=b.m.f8;d=a.cZ;BP(d);e=new Ri;e.p7=d;Ba(c,e);c=b.m.gH;d=new Ph;d.q3=a;Ba(c,d);c=b.m.dD;d=new Pi;d.xw=a;Ba(c,d);b=b.m.e0;c=new Pf;c.oG=a;Ba(b,c);KU(a);}
function ATp(a,b){return LL(a.cZ,b);}
function AMI(a){FO(a);JG(a.cZ);Z7(a.g4);}
function AU5(a){return M0(0);}
function AHG(a,b,c){G1(a,b,c);a.mf(b,c);}
function AEZ(a,b,c){JV(a.cZ,new Bf,b,c);}
function AK_(a,b){BP(b);NY(a.g4,b);KP(a.cZ,b);}
function ADe(a,b){if(b.bl!=121)return 0;return 1;}
function ABp(a,b){var c,d,e;if(D_(a.t,a.cZ)){c=a.g4;d=a.cZ;e=new Ue;e.tS=a;MV(c,b,d,a,d,e);}return 1;}
function AAV(){var a=this;Cz.call(a);a.lR=null;a.lt=null;a.dw=null;a.g6=null;a.fR=null;a.hQ=null;a.n3=null;a.it=null;a.wi=null;a.mk=null;a.yI=null;a.yK=null;a.gI=null;a.mP=null;a.rP=0;}
function AYu(a){var b=new AAV();AOT(b,a);return b;}
function AOT(a,b){var c,d,e,f,g,h,i;Eu(a,b);c=(KF()).b7.fi;a.lR=c;a.lt=AUy(c);a.dw=FY(0,0,300,300);a.g6=U7(0,0,3,3);a.fR=FY(0,0,300,300);a.hQ=AMD();d=R(BA,4);e=d.data;e[0]=C(210);e[1]=C(191);e[2]=C(232);e[3]=C(231);a.n3=d;a.it=R(Js,e.length);c=b.bf;f=b.m.bz;g=new Wy;g.fW=a;Ba(f,g);f=b.m.b$;g=new RO;g.xF=a;Ba(f,g);f=b.m.nF;g=new RN;g.q0=a;Ba(f,g);f=b.m.f8;g=new RM;g.zX=a;Ba(f,g);f=b.m.kq;g=new RL;g.x4=a;Ba(f,g);f=b.m.e0;g=new RK;g.za=a;Ba(f,g);b=b.m.dD;f=new RJ;f.vo=a;Ba(b,f);h=CO(a.bd.bf,300,300);f=h.bv;b="white";f.fillStyle
=b;b=h.bv;f="white";b.strokeStyle=f;b=h.bv;f=10.0;b.lineWidth=f;h.bv.strokeRect(75.0,140.0,150.0,110.0);h.bv.fillRect(130.0,190.0,40.0,60.0);h.bv.beginPath();h.bv.moveTo(50.0,140.0);h.bv.lineTo(150.0,60.0);h.bv.lineTo(250.0,140.0);h.bv.closePath();h.bv.stroke();Gn(h,C(261),11.0);L7(h,187,187,187);Ru(a,C(262),h);b=CZ(a.bd.bf);CS(b,h);F8(h);a.wi=b;Gb(a.dw,b);GF(a.dw);BJ(a.dw.bx,a.lR);BJ(a.dw.bo,CR(204,120,50));b=CO(c,255,100);a.gI=b;Gn(b,C(156),11.0);b=Bz();i=$rt_str(a.gI.bv.font);g=new M;O(g);H(H(g,C(263)),i);Bt(b,
N(g));EA(a.gI,C(264));L7(a.gI,169,183,198);Ru(a,C(264),a.gI);b=CZ(c);a.mk=b;CS(b,a.gI);Gb(a.fR,a.mk);GF(a.fR);HE(a.fR,CQ(255));HP(a.fR,a.lR);a.yI=CZ(c);BJ(a.g6.bx,a.lt);}
function Ru(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function TV(a,b){Kf(FI(),0.5+FI()*0.5,0.5+FI()*0.5,1.0,b.bo);}
function AIi(a,b){var c;a.rP=a.rP+1|0;c=b/5.0;Kf(c-(c|0),1.0,1.0,1.0,a.g6.bo);return U4(a.hQ,b);}
function AK5(a){var b,c,d,e,f,g;b=a.bd.bf;FD(b,a.lt);c=a.it.data;d=c.length;e=0;while(e<d){S$(c[e],b,0,0);e=e+1|0;}DG(a.dw,b,a.wi,0,0,0.5);f=a.mk;d=0;while(d<7){g=a.fR;DG(g,b,f,W(d,10+((10*g.s.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.yK;if(g!==null)Z1(a.g6,b,g,0,0,0.0);WA(a.hQ,b,new Bf);Pk(b,C(265));}
function AOm(a,b,c){var d,e,f,g,h,i,j;d=Bz();e=new M;O(e);H(H(e,C(266)),b);Bt(d,N(e));d=Bz();e=new M;O(e);Fw(H(e,C(267)),c);Bt(d,N(e));f=Cc(30.0,c);g=Cc(10.0,c);h=0;while(true){i=a.it.data;if(h>=i.length)break;j=1+h|0;i[h]=U7(W(g,j)+W(f,h)|0,f,f,f);TV(a,a.it.data[h]);h=j;}U(a.g6.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dw;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fR;d.A.a=b.a-d.s.a|0;}
function OA(a,b){var c,d,e,f,g;c=Bz();d=!b.ig?C(268):C(269);e=b.ea;f=b.bl;g=b.tt;b=new M;O(b);Gr(H(V(H(H(H(b,d),e),C(270)),f),C(271)),g);Bt(c,N(b));return 0;}
function Pn(){var a=this;CP.call(a);a.rn=null;a.ee=null;a.c8=null;a.eA=null;a.nG=null;}
function ANv(a,b,c){var d;d=HH(a.t,a.nG);Ii(a.ee,d);Ii(a.c8,d);Hs(a.ee,a.t);Hs(a.c8,a.t);}
function SW(b){return IU(b,ATs());}
function IU(b,c){var d;d=U3();MG(d,KW(b,I$(c,25)),!b?null:IU(b-1|0,c));MG(d,KW(b,I$(c,20)),!b?null:IU(b-1|0,c));MG(d,KW(b,I$(c,15)),!b?null:IU(b-1|0,c));MG(d,KW(b,I$(c,10)),!b?null:IU(b-1|0,c));return IG(d);}
function KW(b,c){var d;if(b){d=new M;O(d);H(H(V(d,b),C(35)),c);c=N(d);}return c;}
function MG(b,c,d){var e,f;e=new HG;f=Kf(FI(),1.0,1.0,1.0,new B_);AEs();Ik(e,f,A03,A04);if(d!==null)GO(b,c,e,d);else{d=new YY;d.qB=c;D2(b,c,e,d);}}
function ALO(a,b,c){var d,e;G1(a,b,c);b=a.t.cj;d=Ek(a.ee);e=Ek(a.c8);KN(a.ee,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);KN(a.c8,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AK6(a){var b,c,d,e,f,g,h,i;FO(a);b=a.bd.bf;Cw(b,1);c=a.rn;d=a.t;e=d.cj;U(c.mM,e.b,Cc(2.0,d.b4));U(c.nq,Cc(2.0,d.b4),e.a);FZ();f=A00;g=d.c6;h=e.a/2|0;i=c.mM;Bx(g,0,h-(i.a/2|0)|0,i,f);g=d.c6;h=e.b/2|0;c=c.nq;Bx(g,h-(c.b/2|0)|0,0,c,f);MF(a.ee,a.t);MF(a.c8,a.t);HV(a.eA);Cw(b,0);}
function AOo(a,b){var c,d,e;c=LC(a.eA,b);d=LF(a.ee,b.i,a.t.cN);e=LF(a.c8,b.i,a.t.cN);return !c&&!d&&!e?0:1;}
function ATC(a,b,c){return M3(a.eA,b,c);}
function ASS(a,b,c){return DD(a.eA);}
function AI9(a,b,c,d){var e,f,g;e=Ky(a.eA,b,c,d);f=Mw(a.ee,b.i,c,d);g=Mw(a.c8,b.i,c,d);return !e&&!f&&!g?0:1;}
function UD(){var a=this;CP.call(a);a.iE=null;a.fk=null;a.jV=null;a.lk=null;}
function AKO(a,b,c){if(b===0.0)R6(a);}
function AQL(a){var b;FO(a);b=a.bd.bf;LP(a.fk,b);HV(a.iE);}
function R6(a){var b,c,d,e,f,g,h;b=a.jV;if(b!==null){JZ(a.fk,b);LR(b);}b=(KF()).U;c=AYe(a.t,new Of);d=EW(C(155),14.0);e=ANs();f=0;while(f<300){g=C8(f);h=new Uw;h.pd=C(272);h.pc=g;h.pb=C(273);Ng(e,C(272),g,C(273),h);f=f+1|0;}OK(c,YD(e));AAn(c,b,d);g=AAT(a.t);h=AAy(c,a.t);AAg(h,b.ls,b.k7);K1(g,h);g.e8=b;Iq(g,C(274),a.lk,2.0);a.jV=g;HS(a.fk,g);Q0(a);}
function AJw(a,b,c){G1(a,b,c);ZT(a.fk,b,c);Q0(a);}
function Q0(a){var b,c,d;b=a.t.cj;FH(a.jV,B$((b.b*2|0)/10|0,(b.a*4|0)/10|0),B$((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.jV;b=AAx(c.S.r);d=new M;O(d);H(H(d,C(275)),b);Iq(c,N(d),a.lk,2.0);}
function AKZ(a,b){return RR(a.fk,b);}
function Ow(){var a=this;CP.call(a);a.kv=null;a.g3=null;a.fS=null;a.i7=null;a.qu=null;a.iW=null;a.hf=null;a.gB=null;a.jw=0;a.g2=0;}
function Pl(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.g3.j>0){d=FI();e=a.g3;f=d*(e.j-1|0)|0;e=Ey(e,f);Ey(a.fS,f);f=a.g2;g=e.s;a.g2=f-W(g.b,g.a)|0;IQ(a.kv,e.da);}c=c+1|0;}}
function Mq(a,b){var c,d,e,f,g,h,i,j;c=Jp(a.t);CC(c,a.i7);d=0;while(d<b){e=I$(a.iW,1+(FI()*19.0|0)|0);f=AI$();g=f.da;h=a.kv;BP(c);i=new R2;i.uh=c;BJ(g,JE(h,e,i));(YX(FI(),1.0,1.0,f.bx)).bO=0.5;h=f.A;g=f.da;U(h,g.br|0,g.bN|0);h=f.s;g=f.da;U(h,g.bm|0,g.bO|0);BC(a.fS,e);BC(a.g3,f);j=a.g2;h=f.s;a.g2=j+W(h.b,h.a)|0;d=d+1|0;}a.gB=J1(a.kv);}
function ASH(a){var b,c,d,e,f,g,h,i;FO(a);b=a.bd.bf;Cw(b,1);c=a.t.c6;if(a.fS.j){d=a.gB;d=CO(c,d.b,d.a);CC(d,a.i7);e=a.i7.du;Bx(c,0,0,a.gB,a.qu);f=0;while(f<a.fS.j){g=Br(a.g3,f);h=Br(a.fS,f);g=g.da;Ch(d,h,g.br,g.bN+e);f=f+1|0;}g=a.hf;if(!(g!==null&&BS(g)==a.gB.b&&Da(a.hf)==a.gB.a))a.hf=CK(a.hf,CZ(c));CS(a.hf,d);F8(d);i=0;while(i<a.fS.j){d=Br(a.g3,i);HE(d,CQ(0));DG(d,c,a.hf,0,0,0.0);i=i+1|0;}}Cw(b,0);}
function AH7(a,b){var c,d;if(a.jw){c=a.gB;d=Bb(W(c.b,c.a),2211840);if(a.g2/d<=0.7)Mq(a,IX(a.iW,5));else Pl(a,IX(a.iW,5));}return a.jw;}
function Uz(){var a=this;Cz.call(a);a.eP=null;a.g5=null;a.iu=null;a.la=null;a.et=0;a.uS=0;a.qv=null;a.kR=0;a.o8=0;a.pJ=null;a.t3=null;}
function AHF(a){var b,c;b=a.et;c=new M;O(c);V(H(c,C(276)),b);$rt_globals.console.info($rt_ustr(N(c)));FD(a.eP,a.qv);Jt(a.iu,a.et,0,Gk(a),5000,a.la.b,20);Cw(a.eP,1);Zc(a.iu,a.eP);Cw(a.eP,0);b=a.et;c=new M;O(c);V(H(c,C(276)),b);$rt_globals.console.info($rt_ustr(N(c)));Vg(a.g5,a.et/a.kR|0);US(a.g5,a.et,Gk(a),a.t3,a.eP);}
function AHE(a,b,c){a.la=b;TQ(a.g5,B$(0,0),50,Gk(a),c);LN(a.g5,a.eP,0,Gk(a));}
function XU(a){return 5000-Gk(a)|0;}
function Gk(a){return Bb(a.uS,a.la.a);}
function Df(){var a=this;Cz.call(a);a.mW=null;a.hk=null;a.x5=0.0;}
function A05(a){var b=new Df();GM(b,a);return b;}
function GM(a,b){Eu(a,b);a.mW=ACe(0,0,64);a.hk=new Bf;OF(b.b0,IF(BI(a)));}
function TR(a){FD(a.bd.bf,a.mW);}
function Uj(a,b,c){Cx(a.hk,b);a.x5=c;}
var R9=G(Df);
var AA9=G(Df);
function AYl(a){var b=new AA9();AQ9(b,a);return b;}
function AQ9(a,b){var c,d,e,f,g,h;GM(a,b);c=b.b0;d=new SG;d.yx=a;e=R(B,1);e.data[0]=C(277);CU(c,d,C(278),e);f=b.b0;g=new SF;g.zM=a;h=R(B,1);h.data[0]=ADw([1,2,3,4,5]);CU(f,g,C(279),h);f=b.b0;g=new SI;g.n5=a;h=R(B,1);h.data[0]=AXd([1,2,3,4,5]);CU(f,g,C(280),h);f=b.b0;g=new SH;g.y6=a;h=R(B,1);h.data[0]=Em([1,2,3,4,5]);CU(f,g,C(281),h);f=b.m.b$;d=new IA;g=new SE;g.z_=a;c=new SD;c.pE=a;Zh(d,b,g,c);Ba(f,d);}
function Zf(a,b){var c,d,e,f,g,h;c=b.data;d=Bz();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RY(b,1)).h9));d=Bz();e=c[1];if(b===null)f=C(38);else{f=new M;O(f);BT(f,C(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BT(f,C(44));V(f,c[g]);g=g+1|0;}BT(f,C(45));f=N(f);}h=new M;O(h);H(H(H(H(h,C(283)),e),C(284)),f);Bt(d,N(h));}
function NU(){var a=this;Df.call(a);a.er=null;a.fX=null;a.mq=null;a.vu=null;a.nH=null;}
function AM3(a,b){b=b/5.0;Kf(b-(b|0),1.0,1.0,1.0,a.fX.bo);return 0;}
function AKP(a){TR(a);DG(a.er,a.bd.bf,a.vu,0,0,0.5);Z1(a.fX,a.bd.bf,a.mq,0,0,0.0);Pk(a.bd.bf,C(265));}
function AUZ(a,b,c){var d,e,f;Uj(a,b,c);U(a.fX.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.er;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Ut(){var a=this;Df.call(a);a.gk=null;a.oW=null;a.kL=null;a.jB=null;a.ik=null;}
function AVO(a){var b,c,d,e,f,g;TR(a);b=a.bd.bf;c=a.jB;Mf(b,c.b,c.a,a.ik);b=a.gk;c=a.oW;d=a.hk;e=a.bd.bf;f=0;while(true){g=0;while(true){DG(b,e,c,g,f,0.5);g=g+BS(c)|0;if(g>=d.b)break;}f=f+Da(c)|0;if(f>=d.a)break;}Hp(a.bd.bf);}
function AMy(a,b,c){Uj(a,b,c);U(a.ik,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function Uh(){var a=this;Cz.call(a);a.ew=null;a.kS=null;a.fZ=null;a.cb=null;a.eZ=0;a.h3=null;a.eY=0;a.Ac=20;a.AD=11;a.xY=220;a.kg=null;a.zx=5000;a.hy=0;a.ga=null;}
function AUt(a){var b,c,d,e,f,g,h;b=a.h3;c=a.eY;d=a.kg;Jt(b,c,0,d.a,5000,d.b,20);Cw(a.ew,1);Zc(a.h3,a.ew);if(a.cb===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.kS,C8(e),0.0,c);}b=CZ(a.ew);a.cb=b;CS(b,a.kS);}if(a.eY<=a.eZ)while(true){f=a.eZ;if(f<=a.eY)break;a.eZ=f-20|0;b=a.fZ;g=a.hy-1|0;a.hy=g;Ch(b,C8(g),0.0,20.0);Iy(a.cb,a.fZ,0,a.eZ%220|0);EH(a.fZ);}else while(a.eZ<(a.eY-20|0)){b=a.fZ;g=a.hy+1|0;a.hy=g;Ch(b,C8((g+11|0)-1|0),0.0,20.0);Iy(a.cb,a.fZ,0,a.eZ%220|0);EH(a.fZ);a.eZ=a.eZ+20|0;}b=FY(0,0,BS(a.cb),Da(a.cb));H3(b,
0,0,BS(a.cb),Da(a.cb));HE(b,a.ga.data[0]);HP(b,a.ga.data[1]);DG(b,a.ew,a.cb,400,0,1.0);g=a.eY%220|0;f=Bb(Da(a.cb)-g|0,200);d=FY(0,0,BS(a.cb),f);H3(d,0,g,BS(a.cb),f);HE(d,a.ga.data[0]);HP(d,a.ga.data[1]);DG(d,a.ew,a.cb,0,0,1.0);h=FY(0,f,BS(a.cb),(Da(a.cb)-f|0)-20|0);H3(h,0,0,BS(a.cb),(Da(a.cb)-f|0)-20|0);HE(h,a.ga.data[1]);HP(h,a.ga.data[0]);DG(h,a.ew,a.cb,0,0,1.0);}
function AK9(a,b,c){Cx(a.kg,b);}
function ASc(a,b){return 0;}
function TH(a){return 5000-a.kg.a|0;}
function Ju(){Df.call(this);this.d8=0;}
function S9(a){var b,c;b=a.bd.b0;c=new Xe;c.pD=a;SR(b,c,N3(a));}
function QX(a){var b,c,d,e;b=a.d8+1|0;a.d8=b;c=IF(F(Ju));d=new M;O(d);H(H(V(H(d,C(285)),b),C(35)),c);e=N(d);c=a.bd.b0;d=new ZW;d.pX=e;V2(c,e,d,N3(a));}
function N3(a){var b;b=new RZ;b.xo=a;return b;}
function AN4(a,b,c,d){a:{switch(c){case 0:break;case 2:QX(a);break a;default:break a;}S9(a);}return 1;}
function TZ(){var a=this;Cz.call(a);a.ua=null;a.gd=null;a.lO=null;a.hS=null;}
function AVC(a){var b;b=a.bd.bf;FD(b,a.ua);DG(a.gd,b,a.lO,0,0,0.5);}
function AQd(a,b,c){var d,e,f;d=a.gd;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function G9(){var a=this;Cz.call(a);a.vJ=null;a.ck=null;a.d4=null;a.dc=null;a.e7=null;a.ev=null;}
function Ni(a,b){var c,d;Eu(a,b);a.vJ=CQ(20);a.ck=TU();a.d4=new Bf;a.dc=new Bf;a.e7=new Bf;a.ev=new Bf;c=b.m.b$;d=new WR;d.z1=a;Ba(c,d);Ba(b.m.bz,a);b=a.ck.bx;FZ();BJ(b,A0v);BJ(a.ck.bo,A0w);}
function ACG(a){var b,c,d;b=a.bd.bf;FD(b,a.vJ);c=a.ck;d=c.A;Bx(b,d.b,d.a,c.s,c.bx);Cw(b,1);c=a.ck;d=c.A;AAw(b,d.b,d.a,c.s,a.d4,a.dc,a.e7,a.ev,c.bo);Cw(b,0);}
function AOI(a,b){return 0;}
var Vk=G(G9);
function ARM(a,b,c){var d,e,f;d=a.ck;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);U(a.d4,0,0);U(a.dc,Bb(b.b,b.a),Bb(b.b,b.a));b=a.e7;d=a.d4;U(b,d.b,d.a+20|0);b=a.ev;d=a.dc;U(b,d.b,d.a+40|0);}
function ATm(a,b){var c,d,e;Cx(a.d4,b.i);b=a.dc;c=a.ck;d=c.A;e=d.b;c=c.s;U(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.e7;c=a.d4;U(b,c.b,c.a+20|0);b=a.ev;c=a.dc;U(b,c.b,c.a+40|0);return 0;}
function Vj(){var a=this;G9.call(a);a.fy=null;a.gf=null;}
function AVh(a,b){var c;c=a.dc;b=b.i;c.a=b.a-50|0;a.ev.a=b.a+100|0;return 1;}
function AKK(a){var b,c,d,e,f,g,h;b=Bd(a.d4.b,a.e7.b);c=Bb(a.dc.b,a.ev.b);d=Bb(a.d4.a,a.dc.a)-50|0;e=Bd(a.e7.a,a.ev.a)+50|0;Hu(a.ck,b,d,c-b|0,e-d|0);ACG(a);f=a.ck.A.b-10|0;Ul(a,a.bd.bf,10,f,a.d4,a.e7);g=a.ck;h=g.A.b+g.s.b|0;Ul(a,a.bd.bf,h,f,a.dc,a.ev);}
function Ul(a,b,c,d,e,f){var g;U(a.fy,c,a.ck.A.a);U(a.gf,d,e.a-a.ck.A.a|0);g=a.fy;Bx(b,g.b,g.a,a.gf,a.ck.bx);U(a.fy,c,e.a);U(a.gf,d,f.a-e.a|0);e=a.fy;Bx(b,e.b,e.a,a.gf,a.ck.bo);U(a.fy,c,f.a);e=a.gf;g=a.ck;U(e,d,(g.A.a+g.s.a|0)-f.a|0);e=a.fy;Bx(b,e.b,e.a,a.gf,a.ck.bx);}
function AIK(a,b,c){}
function Ze(){var a=this;CP.call(a);a.hW=null;a.ey=null;a.iK=null;a.iL=null;a.pW=null;}
function ALJ(a,b,c){if(b===0.0)V$(a);}
function AT9(a){var b;FO(a);b=a.bd.bf;LP(a.ey,b);HV(a.hW);}
function V$(a){S6(a,a.iK);S6(a,a.iL);a.iK=Zb(a,0.5,0,C(286));a.iL=Zb(a,1.0,1,C(287));HS(a.ey,a.iK);HS(a.ey,a.iL);X7(a);}
function S6(a,b){if(b!==null){JZ(a.ey,b);LR(b);}}
function Zb(a,b,c,d){var e,f,g;e=AAT(a.t);f=new Qc;g=new YE;g.q8=a;g.q9=e;g.q7=d;Wo(f);f.kj=new B_;f.mE=new Bf;f.qz=g;f.qw=b;if(c)f=AAy(f,a.t);K1(e,f);e.e8=Hh();return e;}
function ATh(a,b,c){G1(a,b,c);ZT(a.ey,b,c);X7(a);}
function X7(a){var b;b=a.t.cj;FH(a.iL,B$((b.b*2|0)/10|0,(b.a*2|0)/10|0),B$((b.b*7|0)/10|0,(b.a*7|0)/10|0));FH(a.iK,B$(b.b/10|0,b.a/10|0),B$((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AMz(a,b){return RR(a.ey,b);}
var Nw=G(JI);
function AJN(a){return M0(1);}
function AV0(a,b,c){AEZ(a,b,c);}
function Jc(){var a=this;B.call(a);a.xy=null;a.fi=null;a.uz=null;a.zE=null;a.rJ=null;a.nu=null;a.pI=null;a.xB=null;a.l_=null;a.l2=null;a.i6=null;}
function A06(a,b,c,d,e,f,g,h,i,j,k){var l=new Jc();M6(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function M6(a,b,c,d,e,f,g,h,i,j,k,l){a.xy=b;a.fi=c;a.uz=d;a.zE=e;a.rJ=f;a.nu=g;a.pI=h;a.xB=i;a.l_=j;a.l2=k;a.i6=l;}
var ABx=G(0);
function AAL(){var a=this;B.call(a);a.fA=null;a.hi=null;a.pK=null;a.n7=null;}
function AE4(a,b,c,d){var e=new AAL();AVm(e,a,b,c,d);return e;}
function AVm(a,b,c,d,e){a.fA=b;a.hi=c;a.pK=d;a.n7=e;}
var AEk=G(0);
function Hh(){var b,c,d;b=new IO;c=new I3;AEs();d=A07;M$(c,d,A08,A09,A0$,A0_,d);Mg(b,c,AGI(),AGY(S(C(288)),S(C(117)),S(C(118))),AGI(),AAz(1,0.125),A1a,A1b);return b;}
function AGI(){var b,c;b=new HG;c=S(C(289));AEs();Ik(b,c,A03,A04);return b;}
function AF5(){var b,c;b=new HG;c=S(C(118));AIh();Ik(b,c,A1c,A1d);return b;}
function AGv(){var b,c;b=new HG;AFT();c=A1e;AIA();Ik(b,c,A1f,A1g);return b;}
function AG$(){var a=this;B.call(a);a.sH=null;a.nI=null;a.u0=null;a.on=null;}
function AAO(a,b,c,d){var e=new AG$();AIX(e,a,b,c,d);return e;}
function AIX(a,b,c,d,e){a.sH=b;a.nI=c;a.u0=d;a.on=e;}
function AAr(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dY.nI;break a;case 3:if(c!=3){b=b.dY.on;break a;}b=b.dY.u0;break a;default:b=b.b7.fi;break a;}b=b.dY.sH;}return b;}
function IZ(a,b,c){return AAr(a,b,0,c);}
function M_(){var a=this;B.call(a);a.jP=null;a.jk=null;}
function Np(a,b){var c;c=a.jk;a.jk=b;return c;}
function J_(){var a=this;M_.call(a);a.bW=null;a.ca=null;a.f4=0;a.gh=0;}
function Ks(a){var b;b=Lx(a);if(b==2){if(Lx(a.ca)<0)a.ca=Og(a.ca);return Qp(a);}if(b!=(-2))return a;if(Lx(a.bW)>0)a.bW=Qp(a.bW);return Og(a);}
function Lx(a){var b,c;b=a.ca;c=b===null?0:b.f4;b=a.bW;return c-(b===null?0:b.f4)|0;}
function Og(a){var b;b=a.bW;a.bW=b.ca;b.ca=a;Et(a);Et(b);return b;}
function Qp(a){var b;b=a.ca;a.ca=b.bW;b.bW=a;Et(a);Et(b);return b;}
function Et(a){var b,c,d;b=a.ca;c=b===null?0:b.f4;b=a.bW;d=b===null?0:b.f4;a.f4=Bd(c,d)+1|0;a.gh=1;b=a.bW;if(b!==null)a.gh=1+b.gh|0;b=a.ca;if(b!==null)a.gh=a.gh+b.gh|0;}
var AGC=G();
function AJu(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new QP;c=c.buffer;d.f3=c;d.ny=new $rt_globals.Int8Array(c);d.k2=new $rt_globals.Uint16Array(c);d.uo=new $rt_globals.Int32Array(c);d.q4=new $rt_globals.Float32Array(c);d.rk=new $rt_globals.Float64Array(c);e=d.f3.byteLength;c=new M;O(c);V(H(c,C(290)),e);CJ(N(c));e=b.callToCpp1();c=new M;O(c);V(H(c,C(291)),e);CJ(N(c));f=b.callToCpp2();c=new M;O(c);Fw(H(c,C(292)),f);CJ(N(c));c=NT(d,b.getC8String());g=new M;O(g);H(H(g,C(293)),c);CJ(N(g));c
=N$(d,b.getC16String());g=new M;O(g);H(H(g,C(294)),c);CJ(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f3,h,8));c=AFb(i);g=new M;O(g);H(H(g,C(295)),c);CJ(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f3,h,8));c=ASB(j);g=new M;O(g);H(H(g,C(296)),c);CJ(N(g));k=ADa(d,b.getCDoubleArray8(),8);l=AVR(k);c=new M;O(c);H(H(c,C(297)),l);CJ(D3(c));l=AVE(b.getC8String(),C(298),d);c=My();H(H(c,C(299)),l);CJ(D3(c));l=AO3(b.getC16String(),C(300),
d);c=My();H(H(c,C(301)),l);CJ(D3(c));c=AQ5(i,d,b.getCIntArray8(),Em([11,22,33,44,55,66,77,88]));g=My();H(H(g,C(302)),c);CJ(D3(g));c=ASU(j,d,b.getCFloatArray8(),100,Em([111,222,333,444,555,666,777,888]));g=My();H(H(g,C(303)),c);CJ(D3(g));b=ATi(k,d,b.getCDoubleArray8(),1000,Em([1111,2222,3333,4444,5555,6666,7777,8888]));c=My();H(H(c,C(304)),b);CJ(D3(c));}
function ASU(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(305);h=0;i=e;a:{while(h<g){if(Dl(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.q4[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(306);}return C(307);}
function ATi(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(305);h=0;i=e;a:{while(h<g){if(HN(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rk[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(306);}return C(307);}
function AQ5(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(305);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.uo[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(306);}return C(307);}
function AVE(b,c,d){var e,f,g,h;e=NT(d,b);if(!Bn(c,e))return C(308);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.ny[h])return C(309);f=f+1|0;}return C(306);}
function AO3(b,c,d){var e,f,g,h;e=N$(d,b);if(!Bn(c,e))return C(308);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.k2[h>>>1|0]&65535))return C(309);f=f+1|0;}return C(306);}
function CJ(b){QM(C(2),b);}
function ANO(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Rk(){B.call(this);this.qc=null;}
function AJp(a,b){return ADe(a.qc,b);}
function Rh(){B.call(this);this.wE=null;}
function AL9(a,b){JM(a.wE,b);}
function Ri(){B.call(this);this.p7=null;}
function ATB(a,b,c){return Hm(a.p7,b,c);}
function Ph(){B.call(this);this.q3=null;}
function ARa(a){var b,c;b=a.q3.cZ;BP(b);c=new Pq;c.o2=b;return c;}
function Pi(){B.call(this);this.xw=null;}
function ANP(a,b,c,d){return Kv(a.xw.cZ,c,d);}
function Pf(){B.call(this);this.oG=null;}
function AOG(a,b){b=b;return ABp(a.oG,b);}
function AG4(){Js.call(this);this.da=null;}
function AI$(){var a=new AG4();AUV(a);return a;}
function FY(a,b,c,d){var e=new AG4();ANL(e,a,b,c,d);return e;}
function AUV(a){WB(a);a.da=new B_;}
function ANL(a,b,c,d,e){WB(a);a.da=new B_;Hu(a,b,c,d,e);}
function GF(a){var b,c;b=a.s;c=a.da;U(b,c.bm-c.br|0,c.bO-c.bN|0);}
function Gb(a,b){H3(a,0,0,BS(b),Da(b));}
function H3(a,b,c,d,e){Cv(a.da,b,c,d,e);}
function DG(a,b,c,d,e,f){var g;g=a.A;EZ(b,g.b+d|0,g.a+e|0,a.s,a.da,c,a.bo,a.bx,f);}
function HE(a,b){BJ(a.bo,b);}
function HP(a,b){BJ(a.bx,b);}
function Wy(){B.call(this);this.fW=null;}
function AJH(a,b){var c,d,e,f,g,h,i;c=a.fW;d=c.mP;if(d!==null){e=c.dw.A;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.mP=g;}d=b.i;f=d.b;c=c.g6;e=c.s;h=f-e.b|0;f=d.a-e.a|0;U(c.A,h,f);c=a.fW;d=c.bd.b0;b=b.i;f=0;a:{while(true){i=c.it.data;if(f>=i.length)break;if(Eq(i[f],b)){b=c.n3.data[f];break a;}f=f+1|0;}b=null;}GT(d,b);return 1;}
function AHW(a,b,c,d){if(!c&&d==2){b=a.fW;TV(b,b.dw);}return 1;}
function AJB(a,b,c){var d,e;d=Bz();e=new M;O(e);V(H(e,C(310)),c);Bt(d,N(e));if(!c){d=b.i;b=a.fW;b.mP=!Eq(b.dw,d)?null:d;W6(a.fW.hQ,d.b,d.a);b=a.fW;Rt(b.hQ,Ka(b.bd.b0));}return A0G;}
function AIM(a,b,c){var d;b=Bz();d=new M;O(d);V(H(d,C(311)),c);Bt(b,N(d));return 1;}
function RO(){B.call(this);this.xF=null;}
function ATR(a,b){return OA(a.xF,b);}
function RN(){B.call(this);this.q0=null;}
function ARc(a,b){return OA(a.q0,b);}
function RM(){B.call(this);this.zX=null;}
function AN5(a,b,c){var d,e;Bt(Bz(),C(312));d=!c?C(313):C(28);e=new M;O(e);H(H(H(e,C(314)),d),C(315));X_(b,N(e));return 1;}
function RL(){B.call(this);this.x4=null;}
function AH2(a){Bt(Bz(),C(316));}
function RK(){B.call(this);this.za=null;}
function AQi(a,b){Bt(Bz(),C(317));return 1;}
function RJ(){B.call(this);this.vo=null;}
function ATZ(a,b,c,d){var e,f,g;b=a.vo;e=( -d|0)/10|0;b=b.dw;f=b.s;f.b=f.b+e|0;f.a=f.a+e|0;b=b.A;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function HF(){var a=this;B_.call(a);a.gY=0;a.g1=0;a.gZ=0;a.g0=0;}
function CQ(a){var b=new HF();AVs(b,a);return b;}
function CR(a,b,c){var d=new HF();AKX(d,a,b,c);return d;}
function S(a){var b=new HF();AS0(b,a);return b;}
function FF(a,b,c,d){var e=new HF();SC(e,a,b,c,d);return e;}
function BO(a){var b=new HF();Kx(b,a);return b;}
function AVs(a,b){SC(a,b,b,b,255);}
function AKX(a,b,c,d){SC(a,b,c,d,255);}
function AS0(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.gY=Jw(P(b,1))*17|0;a.g1=Jw(P(b,2))*17|0;a.gZ=Jw(P(b,3))*17|0;a.g0=255;}else{a.gY=Me(P(b,1),P(b,2));a.g1=Me(P(b,3),P(b,4));a.gZ=Me(P(b,5),P(b,6));a.g0=J(b)!=9?255:Me(P(b,7),P(b,8));}H7(a.gY,a.g1,a.gZ,a.g0,a);return;}}
function SC(a,b,c,d,e){a.gY=b;a.g1=c;a.gZ=d;a.g0=e;H7(b,c,d,e,a);}
function Kx(a,b){a.gY=b.gY;a.g1=b.g1;a.gZ=b.gZ;a.g0=b.g0;BJ(a,b);}
function Jw(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Me(b,c){return (16*Jw(b)|0)+Jw(c)|0;}
function NJ(){var a=this;B.call(a);a.mM=null;a.nq=null;}
function AEm(){var a=this;B.call(a);a.fC=null;a.cr=null;a.fp=null;a.gQ=null;a.mZ=null;a.co=null;a.gy=null;a.cX=0;a.fH=0;a.nm=0;a.hI=0;a.gM=0;a.kc=null;a.ly=null;a.nS=null;}
function ADX(){var a=new AEm();AS$(a);return a;}
function AS$(a){a.cr=TU();a.fp=new Bf;a.gQ=new Bf;a.co=A1h;a.hI=(-1);}
function KV(a,b){Xs(a);a.co=b;}
function Ii(a,b){a.fC=b;Xs(a);}
function Il(a,b){var c,d,e,f,g;a.mZ=b.jr;c=b.bg.h$;BJ(a.cr.bo,c);c=b.iN.mc;BJ(a.cr.bx,c);d=0;while(true){e=a.co.data;if(d>=e.length)break;c=e[d];f=b.bg;c.ki=f;c=c.dy;g=f.lv;f=f.h$;BJ(c.bo,g);BJ(c.bx,f);d=d+1|0;}}
function OP(a){a.gy=CK(a.gy,null);U(a.fp,0,0);a.co=A1h;a.hI=(-1);U6(a.cr);}
function Hs(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Jp(b);d=b.b4;BP(a.fC);CC(c,a.fC);e=KL(a.fC,1.25);f=0;a.cX=Cc(2.0,d);a.fH=Cc(3.0,d);a.nm=Cc(12.0,d);g=0;h=a.co.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=SP(c,l.mm);n=a.nm;n=(n+m|0)+n|0;f=Bd(f,n);b=l.dy;l=b.A;l.b=g;l.a=0;l=b.s;l.b=n;l.a=e;Cv(b.da,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.fp;b.b=g;b.a=e;b=a.cr.s;n=a.gM;if(!n){m=a.cX;m=(g+m|0)+W(m,a.co.data.length)|0;}else m=(f+(a.cX*2|0)|0)+(a.fH*2|0)|0;b.b=m;if(!n)e=e+(a.cX*2|0)|0;else{n=a.cX;e=(W(e+n|0,a.co.data.length)
+n|0)+(a.fH*2|0)|0;}b.a=e;}
function KN(a,b,c){var d,e,f,g,h,i,j;U(a.cr.A,b,c);d=a.cX+a.fH|0;e=a.co.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dy;j=i.A;j.b=b+d|0;j.a=c+h|0;if(!a.gM){if(!i.s.b)AA3();d=d+(i.s.b+a.cX|0)|0;}else{if(!i.s.a)AA3();h=h+(i.s.a+a.cX|0)|0;}g=g+1|0;}}
function AA3(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ek(a){var b,c;b=a.fp;if(b.b&&b.a)return a.cr.s;c=new Bu;Bi(c,C(318));K(c);}
function Xs(a){U(a.fp,0,0);}
function MF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.c6;if(!a.co.data.length)return;a:{if(a.gy!==null){d=a.fp;if(W(d.b,d.a))break a;}d=a.fp;if(!W(d.b,d.a))Hs(a,b);d=a.fp;e=d.b;f=d.a;if(!W(e,f))return;d=CO(c,e,f);CC(d,a.fC);g=KL(a.fC,0.125);h=a.fC;i=h.du;j=g+i-(i+h.eW)/16.0;k=a.co.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.mm,h.dy.da.br+a.nm,j);l=l+1|0;}h=CK(a.gy,CZ(c));a.gy=h;CS(h,d);F8(d);}if(!K2(a.cr)){d=a.cr;ACp(c,d.s,d.A,d.bx,a.cX,a.gQ);d=a.cr;h=d.s;m=d.A;d=d.bo;e=a.cX;n=a.gQ;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bx(c,m.b+e|0,m.a+e|0,n,d);if(a.gM){d=a.cr;AEO(c,d.s,d.A,0,0,QS(a.mZ,b.b4),a.mZ.m4,a.gQ);}}k=a.co.data;l=k.length;o=0;while(o<l){DG(k[o].dy,c,a.gy,0,0,0.0);o=o+1|0;}b:{if(a.gM){k=a.co.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dy;m=a.gQ;e=(a.cr.s.b-(a.cX*2|0)|0)-(a.fH*2|0)|0;b=h.s;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.A;Bx(c,d.b+b.b|0,d.a,m,h.bx);}o=o+1|0;}}}}
function LF(a,b,c){var d,e,f,g,h,i,j;d=Eq(a.cr,b);e=!d?(-1):OW(a,b);f=a.hI;if(f!=e){if(f>=0){g=a.co.data[f];WS(g,0);if(a.nS!==null){h=a.hI;i=Bz();j=new M;O(j);H(H(V(H(j,C(319)),h),C(320)),g);Bt(i,N(j));}}if(e>=0){i=a.co.data[e];g=a.ly;if(g!==null)g.nY(b,e,i);WS(i,1);}a.hI=e;}return d&&Ge(c)?1:0;}
function Mw(a,b,c,d){var e,f;e=OW(a,b);if(e>=0){f=a.co.data[e];if(!WL(f))f.lo.o();}return 1;}
function OW(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.co.data;if(c>=d.length)return (-1);e=d[c].dy;if(Eq(e,b))return c;if(a.gM){f=e.A;g=f.b;e=e.s;h=e.b;g=g+h|0;i=f.a;f=a.gQ;f.b=(a.cr.s.b-(a.cX*2|0)|0)-h|0;f.a=e.a;if(ABF(b,g,i,f))break;}c=c+1|0;}return c;}
function AAm(a){a.gM=1;}
function VK(){B.call(this);this.uw=null;}
function APM(a,b){var c;c=a.uw;if(b.bl==32)OP(c.c8);return 0;}
function VG(){B.call(this);this.v6=null;}
function ASW(a,b){var c,d,e,f;b=b;c=a.v6;Bt(Bz(),C(321));if(!DD(c.eA)){d=c.eA;b=b.i;e=SW(4);f=new UR;f.yX=c;GD(d,b,e,f);}return 1;}
function ACq(){var a=this;B.call(a);a.kp=null;a.iO=0.0;}
function EW(a,b){var c=new ACq();AQJ(c,a,b);return c;}
function AQJ(a,b,c){a.kp=b;a.iO=c;}
function ASM(a,b){if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){b=b;return a.iO===b.iO&&B1(a.kp,b.kp)?1:0;}return 0;}
var VH=G();
function AVW(a){Bt(Bz(),C(322));}
var VI=G();
function AIZ(a){Bt(Bz(),C(323));}
function C$(){var a=this;B.call(a);a.dy=null;a.lo=null;a.ki=null;a.ju=null;a.mt=null;a.mm=null;}
function AFd(a,b,c){var d=new C$();Mk(d,a,b,c);return d;}
function AXI(a,b,c,d,e){var f=new C$();ABv(f,a,b,c,d,e);return f;}
function Mk(a,b,c,d){ABv(a,b,c,d,null,null);}
function ABv(a,b,c,d,e,f){var g;g=AI$();a.dy=g;a.mm=c;a.ki=d;a.mt=f;a.lo=b;BJ(g.bo,d.lv);BJ(a.dy.bx,d.h$);a.ju=e;}
function WL(a){return a.ju===null?0:1;}
function WS(a,b){BJ(a.dy.bx,!b?a.ki.h$:a.ki.uP);}
function Xu(){B.call(this);this.yp=null;}
function ANV(a,b){return b.ig&&b.bl==32?1:0;}
function Xw(){B.call(this);this.v7=null;}
function AIy(a,b){var c,d,e,f,g,h;b=b;c=a.v7;if(!DD(c.iE)){d=c.iE;b=b.i;e=R(C$,1);f=e.data;g=new C$;h=new Qy;h.ou=c;Mk(g,h,C(324),d.il.bg);f[0]=g;GD(d,b,F_(e),A0H);}return 1;}
var AEy=G();
function AG8(b){var c,d;c=CO(b,250,64);Gn(c,C(261),25.0);L7(c,187,187,187);Ch(c,C(325),0.0,24.0);Ch(c,C(325),0.25,56.0);d=CZ(b);CS(d,c);F8(c);return d;}
function ACy(b){var c;c=new Ts;c.iw=b;return c;}
function Xv(){B.call(this);this.r8=null;}
function ARI(a,b,c,d){return LK(a.r8,b,c,d);}
function AGF(){var a=this;B.call(a);a.mV=0;a.mX=0;}
function ATs(){var a=new AGF();AUi(a);return a;}
function AUi(a){var b,c;b=AGi(GB((AFk())));c=GB((AFk()))^(-559038737);a.mV=b;a.mX=c;c=0;while(c<19){Tl(a);c=c+1|0;}}
function Tl(a){var b,c;b=a.mV;c=a.mX;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.mV=c;a.mX=b;return b;}
function AGi(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function IX(a,b){return 5.9604644775390625E-8*(Tl(a)&16777215)*b|0;}
function NZ(){B.call(this);this.qg=null;}
function APX(a,b,c){var d;d=a.qg;if(b===0.0)Mq(d,100);}
function NX(){B.call(this);this.wA=null;}
function AQk(a,b){var c,d,e;c=a.wA;d=b.bl;if(d==32){c.jw=c.jw?0:1;e=1;}else if(d==13){Mq(c,1);e=1;}else if(d!=8)e=0;else{Pl(c,1);e=1;}return e;}
var S7=G(0);
function AAM(b,c){var d;d=new XV;d.pU=b;d.pT=c;return d;}
function AAW(){var a=this;B.call(a);a.gp=null;a.hc=0;a.jF=0;a.gL=0;}
function ABh(a){var b=new AAW();ALG(b,a);return b;}
function ALG(a,b){a.gp=BH();a.gL=0;a.jF=2048;a.hc=b;}
function JE(a,b,c){var d,e,f,g,h,i,j;d=c.sE(b);e=a.jF;if(d>e){c=new Bu;f=new M;O(f);BL(V(H(V(H(f,C(326)),d),C(327)),e),41);Bi(c,N(f));K(c);}if(!a.hc){b=new BE;Bi(b,C(328));K(b);}a:{b=new B_;if(d){b:{c=a.gp;if(c.j>0){c=BY(c);g=d;while(true){if(!B0(c))break b;f=B3(c);if(f.bm>=g)break;}Cv(b,f.br,f.bN,g,a.hc);f.br=f.br+g;h=f.bm-g;f.bm=h;if(h===0.0)XQ(a.gp,f);break a;}}g=a.gL;i=d;Cv(b,0.0,g,i,a.hc);c=a.gp;f=new B_;h=a.gL;g=a.jF-d|0;j=a.hc;f.br=i;f.bN=h;f.bm=g;f.bO=j;BC(c,f);a.gL=a.gL+a.hc|0;}}return b;}
function IQ(a,b){var c,d,e,f,g,h,i;a:{c=AUy(b);b=a.gp;if(b.j>0){d=BY(b);while(true){if(!B0(d))break a;e=B3(d);if(e.bN===c.bN){f=e.br;g=e.bm;h=f+g;i=c.br;if(h===i){c.br=f;c.bm=c.bm+g;SO(d);}else{h=c.bm;if(i+h===f){c.bm=h+g;SO(d);}}}}}}BC(a.gp,c);}
function J1(a){return B$(a.jF,a.gL);}
function Ob(){var a=this;B.call(a);a.qi=null;a.jA=null;}
function AIm(a,b,c){if(c)return A0G;return FG(a.jA.iu,b.i,a.qi,1);}
function AIr(a,b,c){return 1;}
function ALs(a,b){var c;c=a.jA;return FT(c.iu,b.i,c.pJ);}
function TG(){B.call(this);this.u2=null;}
function APU(a,b,c,d){var e,f;b=a.u2;e=(Nx(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.et=Bb(Bd(0,b.et+W(e,f)|0),XU(b));return 1;}
function Rq(){B.call(this);this.rY=null;}
function APC(a,b){var c,d,e;c=a.rY;if(b.cq&&b.bl==79){if(!b.bP){b=c.bd.b0;d=new OJ;d.vn=c;MD(b,d);}else{b=c.bd.b0;d=new OH;d.ya=c;XS(b,d);}e=1;}else e=0;return e;}
function SG(){B.call(this);this.yx=null;}
function APx(a,b){var c,d,e;c=b.data;b=Bz();d=c[0];e=new M;O(e);H(H(e,C(282)),d);Bt(b,N(e));b=Bz();c=c[1];e=new M;O(e);H(H(e,C(329)),c);Bt(b,N(e));}
function SF(){B.call(this);this.zM=null;}
function ASj(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bz();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));e=EE(RY(b,1));b=Bz();g=c[1];if(e===null)d=C(38);else{d=new M;O(d);BT(d,C(43));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BT(d,C(44));BL(d,i[h]);h=h+1|0;}BT(d,C(45));d=N(d);}c=new M;O(c);H(H(H(H(c,C(330)),g),C(331)),d);Bt(b,N(c));}
function SI(){B.call(this);this.n5=null;}
function AJP(a,b){Zf(a.n5,b);}
function SH(){B.call(this);this.y6=null;}
function AIY(a,b){var c,d,e,f,g;c=b.data;d=Bz();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));e=Dy(RY(b,1));b=Bz();g=c[1];d=AFb(e);c=new M;O(c);H(H(H(H(c,C(332)),g),C(333)),d);Bt(b,N(c));}
function SE(){B.call(this);this.z_=null;}
function AUQ(a,b){var c,d;c=E_();d=new M;O(d);H(H(d,C(334)),b);Bt(c,N(d));b=new D$;Y(b);K(b);}
function SD(){B.call(this);this.pE=null;}
function ANE(a,b){var c,d,e,f;c=a.pE;d=c.bd.b0;e=new W8;e.ui=c;f=R(B,1);f.data[0]=b;CU(d,e,C(335),f);}
function VV(){B.call(this);this.lD=null;}
function AQT(a,b){var c,d,e,f,g,h;c=a.lD;d=c.nH;if(d!==null){e=c.er.A;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.nH=g;}b=b.i;f=b.b;c=c.fX;d=c.s;f=f-d.b|0;h=b.a-d.a|0;U(c.A,f,h);return 1;}
function AVo(a,b,c){var d;if(!c){d=b.i;b=a.lD;if(!Eq(b.er,d))d=null;b.nH=d;}return A0G;}
var C3=G(0);
var A0T=null;var A0w=null;var A0U=null;var A0v=null;var A0W=null;var A0V=null;var A0Y=null;var A0X=null;var A00=null;var A0Z=null;var A01=null;function FZ(){FZ=Bq(C3);AVI();}
function AVI(){A0T=CQ(187);A0w=S(C(336));A0U=CQ(55);A0v=CQ(43);A0W=CR(33,66,131);A0V=CR(60,63,65);A0Y=S(C(337));A0X=S(C(338));A00=FF(85,85,85,128);A0Z=FF(43,43,43,0);A01=S(C(259));}
function Rn(){var a=this;B.call(a);a.oz=null;a.jO=null;}
function ANg(a,b,c){var d;if(!c){d=FG(a.jO.h3,b.i,a.oz,1);if(d!==null)return d;}return A0G;}
function AIH(a,b,c){return 1;}
function ALA(a,b){var c;c=a.jO;return FT(c.h3,b.i,Sp(c.bd.b0));}
function AAc(){B.call(this);this.pO=null;}
function ATU(a,b,c,d){var e,f;b=a.pO;e=(Nx(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eY=Bb(Bd(0,b.eY+W(e,f)|0),TH(b));return 1;}
function YU(){B.call(this);this.nQ=null;}
function AKz(a,b){var c,d;a:{c=a.nQ;switch(b.bl){case 67:QX(c);d=1;break a;case 86:S9(c);d=1;break a;default:}d=0;}return d;}
var YT=G();
function AOd(a,b,c){return 0;}
function YS(){B.call(this);this.rb=null;}
function AKG(a,b,c){var d,e;d=a.rb;c=d.d8+1|0;d.d8=c;d=IF(F(Ju));e=new M;O(e);H(H(V(e,c),C(339)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));X_(b,e);return 1;}
var YQ=G();
function AOY(a){return null;}
function YV(){B.call(this);this.tw=null;}
function ATb(a){var b,c;b=a.tw;c=new ZQ;c.ov=b;return c;}
function TD(){B.call(this);this.Av=null;}
function AUN(a,b){return 0;}
function Z2(){B.call(this);this.zz=null;}
function AKi(a,b){return b.ig&&b.bl==32?1:0;}
function Z4(){B.call(this);this.rW=null;}
function AIt(a,b){var c,d,e,f,g,h;b=b;c=a.rW;if(!DD(c.hW)){d=c.hW;b=b.i;e=R(C$,1);f=e.data;g=new C$;h=new OR;h.ob=c;Mk(g,h,C(324),d.il.bg);f[0]=g;GD(d,b,F_(e),A0H);}return 1;}
function Z3(){B.call(this);this.vF=null;}
function ASh(a,b,c,d){return LK(a.vF,b,c,d);}
function AFS(){var a=this;B.call(a);a.jm=null;a.ll=null;a.f9=null;a.Ai=null;}
function ARy(a){var b=new AFS();ASJ(b,a);return b;}
function AWB(a,b,c,d){var e=new AFS();AAU(e,a,b,c,d);return e;}
function ASJ(a,b){AAU(a,null,null,b,null);}
function AAU(a,b,c,d,e){a.jm=b;a.ll=c;a.f9=d;a.Ai=e;}
function AKt(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return B1(a.jm,c.jm)&&B1(a.ll,c.ll)&&B1(a.f9,c.f9)?1:0;}return 0;}
var Db=G(0);
var AZX=null;var A1i=null;var AZZ=null;var AZY=null;var AZ1=null;var AZ0=null;var AZ3=null;var AZ2=null;var AZ5=null;var AZ4=null;var AZ6=null;function ALK(){ALK=Bq(Db);ATt();}
function ATt(){AZX=CQ(206);A1i=S(C(340));AZZ=S(C(341));AZY=S(C(113));AZ1=S(C(342));AZ0=S(C(343));AZ3=S(C(344));AZ2=S(C(345));AZ5=FF(107,106,107,128);AZ4=FF(30,31,34,0);AZ6=S(C(115));}
function Cj(){Co.call(this);this.kY=null;}
var A1j=null;var A1k=null;var A1l=null;var A1m=null;var A1n=null;var A1o=null;var A1p=null;var A1q=null;var A1r=null;var A1s=null;var A1t=null;var A1u=null;var A1v=null;var A1w=null;var A1x=null;var AZ7=null;function AFx(){AFx=Bq(Cj);AOx();}
function D0(a,b,c){var d=new Cj();Tu(d,a,b,c);return d;}
function AWW(a,b,c,d){var e=new Cj();Za(e,a,b,c,d);return e;}
function Tu(a,b,c,d){AFx();Dd(a,b,c);a.kY=Iw(d,null);}
function Za(a,b,c,d,e){AFx();Dd(a,b,c);a.kY=Iw(d,e);}
function AOx(){var b,c;b=new Cj;ALK();Tu(b,C(346),0,A1i);A1j=b;A1k=D0(C(347),1,S(C(348)));A1l=D0(C(349),2,S(C(350)));A1m=D0(C(48),3,S(C(351)));A1n=D0(C(352),4,A1i);A1o=D0(C(353),5,S(C(354)));A1p=D0(C(355),6,S(C(356)));A1q=D0(C(49),7,S(C(357)));A1r=D0(C(358),8,S(C(359)));c=new Cj;FZ();Za(c,C(360),9,A0w,S(C(344)));A1s=c;A1t=AWW(C(361),10,A0w,S(C(116)));A1u=D0(C(362),11,S(C(363)));A1v=D0(C(364),12,S(C(365)));A1w=D0(C(366),13,A1i);b=D0(C(367),14,S(C(368)));A1x=b;AZ7=I(Cj,[A1j,A1k,A1l,A1m,A1n,A1o,A1p,A1q,A1r,A1s,
A1t,A1u,A1v,A1w,b]);}
function Jz(){var a=this;B.call(a);a.py=null;a.pw=null;}
function Iw(a,b){var c=new Jz();APq(c,a,b);return c;}
function APq(a,b,c){a.py=b;a.pw=c;}
function IO(){var a=this;B.call(a);a.jr=null;a.iN=null;a.w1=null;a.wO=null;a.bg=null;a.ls=null;a.k7=null;}
function A1y(a,b,c,d,e,f,g){var h=new IO();Mg(h,a,b,c,d,e,f,g);return h;}
function Mg(a,b,c,d,e,f,g,h){a.w1=b;a.wO=c;a.iN=d;a.bg=e;a.jr=f;a.ls=g;a.k7=h;}
function AEb(){var a=this;B.call(a);a.m4=null;a.sg=0;}
function AAz(a,b){var c=new AEb();ASX(c,a,b);return c;}
function ASX(a,b,c){var d;d=new B_;a.m4=d;a.sg=b;d.bO=c;}
function QS(a,b){return Cc(a.sg,b);}
var DQ=G(0);
var AZ_=null;var A0a=null;var AZ8=null;var AZ9=null;var AZ$=null;var A1c=null;var A1d=null;var A0b=null;var A0c=null;function AIh(){AIh=Bq(DQ);AQX();}
function AQX(){AZ_=S(C(343));A0a=S(C(369));AZ8=S(C(118));AZ9=S(C(356));AZ$=S(C(340));A1c=S(C(343));A1d=S(C(370));A0b=S(C(371));A0c=CR(43,45,48);}
var Qr=G(0);
var QN=G();
function AMb(a,b,c){var d,e;d=b;e=c;b=new M;O(b);V(H(V(H(b,C(372)),d),C(373)),e);CJ(N(b));return d+e|0;}
var Qs=G(0);
var QL=G();
function ANj(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fw(H(Fw(H(b,C(374)),d),C(373)),e);CJ(N(b));return d+e;}
var AB8=G();
var AAS=G(0);
function J9(){var a=this;B.call(a);a.eu=null;a.fz=null;a.f7=null;}
var AZA=0;function AE6(a){var b;b=a.fz;if(b!==null){AZA=AZA-1|0;a.eu.dR.deleteTexture(b);a.fz=null;}}
function BS(a){return a.f7.b;}
function Da(a){return a.f7.a;}
function Vd(a,b,c,d){var e;e=a.f7;e.b=b;e.a=c;ML(a);a.eu.dR.texStorage2D(3553,1,d,b,c);e=a.eu.dR;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function ML(a){var b,c;b=a.eu.dR;c=a.fz;b.bindTexture(3553,c);}
function CS(a,b){Oj(a,b.mY,b.l5,32856);RG(a,b,0,0);}
function Oj(a,b,c,d){var e,f,g,h;a:{e=a.f7;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){ML(a);break a;}e=a.eu.dR;h=a.fz;e.deleteTexture(h);a.fz=a.eu.dR.createTexture();Vd(a,b,c,d);break a;}}Vd(a,b,c,d);}}
function Iy(a,b,c,d){ML(a);RG(a,b,c,d);}
function RG(a,b,c,d){var e;e=a.eu.dR;b=b.kE;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function YI(){B.call(this);this.nv=null;}
var A1h=null;function U3(){var a=new YI();ABU(a);return a;}
function ABU(a){a.nv=BH();}
function D2(a,b,c,d){Qm(a,AFd(d,b,c));}
function DL(b,c,d){return AFd(d,b,c);}
function GO(a,b,c,d){Kn(a,b,c,d,null);}
function Kn(a,b,c,d,e){Qm(a,AXI(null,b,c,d,e));}
function Qm(a,b){BC(a.nv,b);}
function IG(a){return F_(Id(a.nv,A1h));}
function AAX(){A1h=R(C$,0);}
var DU=G(0);
var A0$=null;var A0_=null;var A07=null;var A08=null;var A09=null;var A03=null;var A04=null;var A1a=null;var A1b=null;function AEs(){AEs=Bq(DU);AQl();}
function AQl(){A0$=S(C(375));A0_=S(C(376));A07=S(C(289));A08=S(C(377));A09=S(C(336));A03=S(C(375));A04=S(C(376));A1a=FF(118,121,122,128);A1b=CR(63,66,68);}
var G$=G(0);
var P0=G();
function AR1(a,b,c,d){var e;b=Bz();e=new M;O(e);H(H(V(H(e,C(378)),c),C(320)),d);Bt(b,N(e));}
var P1=G();
function Ts(){B.call(this);this.iw=null;}
function AVx(a,b){return LC(a.iw,b);}
function ARl(a,b,c,d){return Ky(a.iw,b,c,d);}
function AVj(a,b,c){return M3(a.iw,b,c);}
function APh(a,b,c){return DD(a.iw);}
function WC(){B.call(this);this.tU=null;}
function AP9(a,b){var c;c=a.tU.jA;c.et=Fp(b,XU(c));}
var AHg=G();
function XZ(){B.call(this);this.sP=null;}
function ANk(a,b){var c;c=a.sP.jO;c.eY=Fp(b,TH(c));}
function WR(){B.call(this);this.z1=null;}
function AMS(a,b){return 0;}
function Ug(){B.call(this);this.u7=null;}
function AVf(a,b){return DE(a.u7,null);}
var AB_=G();
function I3(){var a=this;B.call(a);a.tT=null;a.oZ=null;a.p2=null;a.uU=null;a.rB=null;a.i0=null;}
function A1z(a,b,c,d,e,f){var g=new I3();M$(g,a,b,c,d,e,f);return g;}
function M$(a,b,c,d,e,f,g){a.tT=b;a.oZ=c;a.p2=d;a.uU=e;a.rB=f;a.i0=g;}
function HG(){var a=this;B.call(a);a.lv=null;a.h$=null;a.uP=null;}
function A1A(a,b,c){var d=new HG();Ik(d,a,b,c);return d;}
function Ik(a,b,c,d){a.lv=b;a.h$=c;a.uP=d;}
function ABG(){var a=this;B.call(a);a.mc=null;a.tz=null;a.wa=null;}
function AGY(a,b,c){var d=new ABG();AUg(d,a,b,c);return d;}
function AUg(a,b,c,d){a.mc=b;a.tz=c;a.wa=d;}
function Ck(){Co.call(this);this.m0=null;}
var A1B=null;var A1C=null;var A1D=null;var A1E=null;var A1F=null;var A1G=null;var A1H=null;var A1I=null;var A1J=null;var A1K=null;var A1L=null;var A1M=null;var A1N=null;var A1O=null;var A1P=null;var A02=null;function ACA(){ACA=Bq(Ck);ANu();}
function DZ(a,b,c){var d=new Ck();Vi(d,a,b,c);return d;}
function AS1(a,b,c,d){var e=new Ck();AGh(e,a,b,c,d);return e;}
function Vi(a,b,c,d){ACA();Dd(a,b,c);a.m0=Iw(d,null);}
function AGh(a,b,c,d,e){ACA();Dd(a,b,c);a.m0=Iw(d,e);}
function ANu(){var b;b=new Ck;FZ();Vi(b,C(346),0,A0w);A1B=b;A1C=DZ(C(347),1,S(C(379)));A1D=DZ(C(349),2,S(C(380)));A1E=DZ(C(48),3,S(C(381)));A1F=DZ(C(352),4,S(C(379)));A1G=DZ(C(353),5,CR(188,63,60));A1H=DZ(C(355),6,S(C(382)));A1I=DZ(C(49),7,S(C(383)));A1J=DZ(C(358),8,S(C(384)));A1K=AS1(C(360),9,A0w,CR(52,65,52));A1L=AS1(C(361),10,S(C(385)),S(C(386)));A1M=DZ(C(362),11,S(C(387)));A1N=DZ(C(364),12,S(C(388)));A1O=DZ(C(366),13,A0w);b=DZ(C(367),14,S(C(368)));A1P=b;A02=I(Ck,[A1B,A1C,A1D,A1E,A1F,A1G,A1H,A1I,A1J,A1K,
A1L,A1M,A1N,A1O,b]);}
var AGM=G();
function I$(b,c){var d,e,f;if(c<=0)return C(30);d=BU(c);e=d.data;e[0]=AFt(IX(b,52));f=1;while(f<c){e[f]=AFt(IX(b,62));f=f+1|0;}return Gd(d);}
function AFt(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AC7=G();
function AHf(){var a=this;B.call(a);a.HG=null;a.E6=null;a.Gm=0;a.FQ=0;}
var ABK=G(0);
function ADo(b){var c;a:{switch(b){case 0:break;case 1:c=C(169);break a;case 2:c=C(224);break a;case 3:c=C(223);break a;default:c=null;break a;}c=C(191);}return c;}
var CW=G();
var AEF=G(CW);
var AFr=G(CW);
var ACa=G(CW);
var ACu=G(CW);
var AFW=G(CW);
function YY(){B.call(this);this.qB=null;}
function ANJ(a){var b;b=a.qB;Bt(Bz(),b);}
var ABw=G();
function Cc(b,c){return Dl(b*c);}
function IC(){var a=this;B.call(a);a.gx=0;a.mp=null;}
function W5(){var a=this;B.call(a);a.Az=null;a.wt=null;a.gt=null;}
function Gp(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.gt.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bb(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.ir:i.is;k=!c?i.nn:i.no;if(j<=k&&k<(j+k|0))return h;j=BG(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Mx(){var a=this;B.call(a);a.is=0;a.no=0;a.ir=0;a.nn=0;a.lf=0;}
var ACV=G();
function PE(){B.call(this);this.jq=null;}
function AV1(a,b){var c,d,e,f,g;c=a.jq;d=c.kL;if(d!==null){e=b.i;f=e.b-d.b|0;g=e.a-d.a|0;e=c.jB;e.b=EG(0,e.b+f|0,c.hk.b-c.ik.b|0);c=a.jq;d=c.jB;d.a=EG(0,d.a+g|0,c.hk.a-c.ik.a|0);}a.jq.kL=b.i;return 1;}
var AC4=G();
function Ta(){B.call(this);this.uc=null;}
function AJf(a,b){IN(a.uc,b);}
function XR(){B.call(this);this.jI=null;}
function AVr(a){return a.jI;}
function AFl(){var a=this;B.call(a);a.bC=null;a.T=null;a.S=null;a.e8=null;}
function AAT(a){var b=new AFl();AQI(b,a);return b;}
function AQI(a,b){var c;a.S=AV8();a.bC=b;c=new Xo;Ml(c);c.k5=new B_;c.hL=b;a.T=c;}
function Iq(a,b,c,d){var e,f,g,h;e=a.T;f=B1(e.hq,c)?0:1;g=B1(e.hu,b)?0:1;h=d===e.j5?0:1;if(f){e.hq=c;e.eH=null;Q3(e,0);}e.hR=!f&&!g&&!h?0:1;e.hu=b;e.j5=d;e.hv=0;J7(a);}
function LR(a){var b;b=a.T;b.dE=CK(b.dE,null);a.S=CK(a.S,null);}
function K1(a,b){var c,d,e;c=a.S;d=c.G;e=c.r;b=CK(c,b);a.S=b;b.jY(d,e,a.bC.b4);}
function FH(a,b,c){var d;d=a.S;d.jY(b,c,d.el);J7(a);}
function J7(a){var b,c,d,e;b=a.T;c=a.S.r.b;b.r.b=c;d=b.dE;if(d!==null&&c!=BS(d)&&!(c>=b.hv&&BS(b.dE)>=b.hv))b.hR=1;b=a.T;b.el=a.bC.b4;if(Yl(b))c=0;else{b=a.T;W1(b);e=CF(b.hL,b.j5);Q3(b,Fi(b.eH)+(e*2|0)|0);c=b.r.a;}b=a.T.G;d=a.S.G;U(b,d.b,d.a-c|0);}
function Mv(b,c){if(b<0)c=C(389);else if(b>0)c=C(390);return c;}
function AAd(a,b,c){var d;d=a.T.G.b;return (d-c|0)<=b&&b<d?1:0;}
function N0(a,b,c){var d,e;d=a.T;e=d.G.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Q1(a,b,c){var d;d=a.T.G.a;return (d-c|0)<=b&&b<d?1:0;}
function OV(a,b,c){var d,e;d=a.S;e=d.G.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Yr(a,b,c){var d,e,f;d=a.T.G.a-c|0;e=a.S;f=(e.G.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function Y5(a,b,c){var d,e;d=a.T.G.a+c|0;e=a.S;return ADx(b,d,(e.G.a+e.r.a|0)-c|0);}
function PA(a,b,c){var d,e,f;d=a.T;e=d.G.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function O2(a,b,c){var d,e;d=a.T;e=d.G.b;return ADx(b,e+c|0,(e+d.r.b|0)-c|0);}
function ADx(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BG(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function I6(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.b;h=b.a;b=a.S;i=b.G;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new XW;b.uL=a;b.uN=e;b.uM=f;b.uH=c;b.uG=g;b.uK=j;b.uI=l;b.uW=d;b.uV=h;b.uX=k;b.vw=m;return b;}
var AEB=G(0);
var Mh=G(0);
function R2(){B.call(this);this.uh=null;}
function AJY(a,b){return SP(a.uh,b);}
var Yi=G();
function APV(a,b){AE6(b);}
var AFe=G();
function ACp(b,c,d,e,f,g){g.b=c.b;g.a=f;Bx(b,d.b,d.a,g,e);Bx(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bx(b,d.b,d.a+f|0,g,e);Bx(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AEO(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bx(b,j,k,i,h);Bx(b,j,k,i,h);Bx(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bx(b,l,j,i,h);Bx(b,l,j,i,h);Bx(b,l+g|0,j+g|0,i,h);}
function Rw(){var a=this;B.call(a);a.bs=null;a.kr=null;a.fc=null;a.d$=0;a.O=0;a.dW=null;a.eN=null;a.ha=0;}
function OM(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d$;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EH(c);j=d+(-1)|0;b=C8(d);d=W(j,a.O)%a.fc.a|0;Gz(a,c,b,a.ha,g);Iy(a.bs,c,0,d);if(!(j%a.d$|0))break;d=j;}}else{EH(b);k=a.d$-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Gz(a,b,C8(j),W(a.O,k)+a.ha|0,g);k=k+(-1)|0;j=h;}CS(a.bs,b);j=Bd(i,e);}return j;}k=a.d$;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bb(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EH(c);b=C8((d+f|0)+1|0);j=d+1|0;d
=W(d,a.O)%a.fc.a|0;Gz(a,c,b,a.ha,g);Iy(a.bs,c,0,d);if(!(j%a.d$|0))break;d=j;}}else{EH(b);d=0;while(d<a.d$){h=h+1|0;Gz(a,b,C8((h>e?h-f|0:h)+f|0),W(a.O,d)+a.ha|0,g);d=d+1|0;}CS(a.bs,b);j=Bb(i,e);}return j;}
function MJ(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Ga(e,b,c,f)!==f.hi?0:1;}
function Ga(b,c,d,e){c=c.data;return d<c.length&&c[d]?IZ(b.dY,b,c[d]):e.hi;}
function EU(a,b,c,d,e,f){EZ(b,a.kr.b+d.b|0,c+d.a|0,a.dW,a.eN,a.bs,e,f,0.0);}
function Gz(a,b,c,d,e){Ch(b,c,a.fc.b-20.0*e,d);}
function Zt(){var a=this;B.call(a);a.ez=null;a.o1=null;a.ru=null;a.AY=null;a.bV=null;a.mn=null;a.mv=null;a.fr=null;a.f$=null;a.h5=null;}
function S2(a,b){var c,d,e,f,g,h;if(X0(a.f$,b))MM(a.f$,b);else{c=a.f$;d=Dh(c.f0);if(b===null){e=Sb(c);if(e===null){c.ke=c.ke+1|0;e=X3(c,null,0,0);f=c.f0+1|0;c.f0=f;if(f>c.mr)Oz(c);}}else{g=JK(b);h=g&(c.dS.data.length-1|0);e=OL(c,b,h,g);if(e===null){c.ke=c.ke+1|0;e=X3(c,b,h,g);f=c.f0+1|0;c.f0=f;if(f>c.mr)Oz(c);}}e.cY=d;}b=b.cg;if(b===null)return;c=new Z0;c.qG=a;b.ep(c);}
function AD4(a){var b,c,d,e,f;b=TX(KD(a.ez.dJ));while(Fk(b)){c=QD(b);d=Cl(a.ez.dJ,c);Bs(a.bV,d.j);c=BY(d);while(B0(c)){e=B3(c);f=Cl(a.fr,e);Bs(a.bV,f.bD);}}}
function AC_(a){if(a.ez.eS===null){Bs(a.bV,(-1));return;}Bs(a.bV,a.f$.f0);T3(a,a.ez.eS);}
function T3(a,b){var c,d,e,f;c=(MM(a.f$,b)).bD;Bs(a.bV,c);if(b instanceof Lu)Bs(a.bV,(-1));else if(!(b instanceof Ix))Bs(a.bV,0);else Bs(a.bV,1);d=a.mn;Bs(d.dF,b.dt.cV());e=b.dt;f=new Ne;f.w5=d;e.ep(f);d=a.mv;Bs(d.cQ,b.eg.cV());e=b.eg;f=new WU;f.uB=d;e.ep(f);d=b.hD;Bs(a.bV,d.cV());e=new X$;e.vz=a;d.ep(e);d=b.e4;Bs(a.bV,d.cV());d=d.bt();while(d.bE()){e=d.bq();Om(a.mn,e.fG);Hn(a.mv,e.ij);}d=b.j8;if(d===null)Bs(a.bV,(-1));else Bs(a.bV,(Cl(a.fr,d)).bD);b=b.cg;Bs(a.bV,b.cV());d=new Qq;d.oa=a;b.ep(d);}
function ZV(){B.call(this);this.p$=null;}
function ALu(a,b){var c,d,e,f,g;c=a.p$;if(c.e.f.cK==c.lN){b=b.data;d=Dy(b[0]);e=EE(b[1]);f=null;g=null;if(b.length>=4){f=Dy(b[2]);g=EE(b[3]);}AAH(c.e.f,d,e,f,g);GK(c.e.f.dr);GK(c.e.f.dO);Rb(c.e.f);Ij(c);J$(c.e.f);AAf(c);}}
var AAQ=G();
function Gu(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ABF(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function AF9(){var a=this;B.call(a);a.by=0;a.bI=0;}
function Du(a,b){var c=new AF9();AOp(c,a,b);return c;}
function AOp(a,b,c){a.by=b;a.bI=c;}
function AIc(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.by==c.by&&a.bI==c.bI?1:0;}return 0;}
function ARR(a){var b,c,d,e;b=R(B,2).data;b[0]=Dh(a.by);b[1]=Dh(a.bI);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bD)|0;d=d+1|0;}return c;}
function ARq(a,b){var c;b=b;c=BG(a.by,b.by);if(!c)c=BG(a.bI,b.bI);return c;}
function Zl(){B.call(this);this.vI=null;}
function AHX(a,b){var c;c=a.vI;ZR(c,EX(c,b.i));L9(c.q,c.u,c.y);Hq(c);}
var T0=G(0);
var A0G=null;function AE3(){A0G=new Sk;}
var E8=G(0);
function ON(){var a=this;B.call(a);a.iv=0;a.np=0;a.js=0;a.gP=0;a.hs=null;}
function B0(a){return a.iv>=a.js?0:1;}
function B3(a){var b,c;QT(a);b=a.iv;a.gP=b;c=a.hs;a.iv=b+1|0;return c.jT(b);}
function SO(a){var b,c,d;if(a.gP<0){b=new CL;Y(b);K(b);}QT(a);a.hs.ns(a.gP);a.np=a.hs.cF;c=a.gP;d=a.iv;if(c<d)a.iv=d-1|0;a.js=a.js-1|0;a.gP=(-1);}
function QT(a){var b;if(a.np>=a.hs.cF)return;b=new Ht;Y(b);K(b);}
var F7=G(I7);
var Zi=G(EY);
function AF3(){var a=this;B.call(a);a.hF=null;a.ms=0;a.fF=0;}
function AJE(){var a=new AF3();AVu(a);return a;}
function AVu(a){a.ms=0;a.hF=BM(16);a.fF=0;}
function G0(a,b,c){Bs(a,b);Bs(a,c);}
function Bs(a,b){var c,d;c=a.hF;d=c.data.length;if(d==a.fF)a.hF=MZ(c,d*2|0);c=a.hF.data;d=a.fF;a.fF=d+1|0;c[d]=b;}
function RP(a){var b,c,d,e,f;b=a.ms;if(b&&a.fF!=b){c=E_();b=a.ms;d=a.fF;e=new M;O(e);H(V(H(V(H(e,C(391)),b),C(392)),d),C(393));Bt(c,N(e));}f=a.hF;b=f.data.length;d=a.fF;if(b!=d)f=MZ(f,d);return f;}
function Uk(){var a=this;D4.call(a);a.f0=0;a.dS=null;a.ke=0;a.p1=0.0;a.mr=0;}
function AGf(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function XA(a){a.mr=a.dS.data.length*a.p1|0;}
function X0(a,b){return ZS(a,b)===null?0:1;}
function MM(a,b){var c;c=ZS(a,b);if(c===null)return null;return c.cY;}
function ZS(a,b){var c,d;if(b===null)c=Sb(a);else{d=JK(b);c=OL(a,b,d&(a.dS.data.length-1|0),d);}return c;}
function OL(a,b,c,d){var e;e=a.dS.data[c];while(e!==null&&!(e.mo==d&&(b!==e.cI?0:1))){e=e.hz;}return e;}
function Sb(a){var b;b=a.dS.data[0];while(b!==null&&b.cI!==null){b=b.hz;}return b;}
function X3(a,b,c,d){var e,f;e=new Ia;AAb(e,b,null);e.mo=d;f=a.dS.data;e.hz=f[c];f[c]=e;return e;}
function Oz(a){var b,c,d,e,f,g,h,i;b=a.dS.data.length;b=AGf(!b?1:b<<1);c=R(Ia,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dS.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.mo&f;i=h.hz;h.hz=d[b];d[b]=h;h=i;}e=e+1|0;}a.dS=c;XA(a);}
function XO(){var a=this;B.call(a);a.dF=null;a.kK=null;a.rS=null;}
function Om(a,b){var c;if(!(b instanceof HC)){Bs(a.dF,3);Y6(a,b);Bs(a.dF,b.gC);}else{c=b;Bs(a.dF,5);Y6(a,c);Bs(a.dF,c.kN);b=c.gc;Bs(a.dF,b.j);c=new N_;c.o$=a;D8(b,c);}}
function Y6(a,b){var c;c=b.c_.fN;G0(a.dF,a.kK.I,J(c));Bs(a.dF,b.c_.cy);Nq(a,b.fn);BT(a.kK,c);}
function Nq(a,b){if(b===null)Bs(a.dF,(-1));else Bs(a.dF,(Cl(a.rS,b)).bD);}
function Xr(){var a=this;B.call(a);a.cQ=null;a.lX=null;a.qF=null;}
function Hn(a,b){var c,d,e;if(b instanceof Ft){c=b;Bs(a.cQ,9);RB(a,c.kd);}else if(b instanceof Fd){d=b;Bs(a.cQ,3);Sf(a,d);Bs(a.cQ,d.kW);RB(a,d.fu);}else if(b instanceof EJ){e=b;Bs(a.cQ,4);Hn(a,e.eE);Hn(a,e.gj);}else if(b===null)Bs(a.cQ,(-1));else{Bs(a.cQ,5);Sf(a,b);Bs(a.cQ,b.jX);}}
function Sf(a,b){var c;c=b.dL.fN;G0(a.cQ,a.lX.I,J(c));Bs(a.cQ,b.dL.cy);b=b.dH;if(b===null)Bs(a.cQ,(-1));else Bs(a.cQ,(Cl(a.qF,b)).bD);BT(a.lX,c);}
function RB(a,b){var c;Bs(a.cQ,b.j);c=new AAi;c.pf=a;D8(b,c);}
function Xe(){B.call(this);this.pD=null;}
function AUu(a,b){var c,d;c=a.pD;d=c.d8+1|0;c.d8=d;c=new M;O(c);H(H(V(c,d),C(394)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function ZW(){B.call(this);this.pX=null;}
function ASt(a){var b,c;b=a.pX;c=new M;O(c);H(H(H(c,C(395)),b),C(396));$rt_globals.console.info($rt_ustr(N(c)));}
var Zy=G(D6);
var A1Q=null;function AE5(){A1Q=F($rt_floatcls());}
var FN=G();
var A1R=null;var A1S=null;var AZb=null;var AZa=null;var AY_=null;function ADO(){A1R=Em([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A1S=ABO([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);AZb=ABO([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);AZa=new VJ;AY_=new W9;}
var Ic=G();
var A1T=0;var A1U=null;var A1V=null;function AEu(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.pg=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.lH=0;c.lp=0;return;}if(f)d=e|8388608;else{d=e<<1;while(H_(C0(Bp(d),Bp(8388608)),E$)){d=d<<1;f=f+(-1)|0;}}g=AEE(A1V,f);if(g<0)g= -g|0;h=A1V.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H8(d,A1U.data[e],i);if(j<A1T){while($rt_ucmp(j,A1T)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A1V.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H8(d,
A1U.data[e],i);}e=d<<1;d=e+1|0;h=A1U.data;f=g+1|0;k=h[f];l=i-1|0;m=H8(d,k,l);n=H8(e-1|0,A1U.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?W($rt_udiv(j,o),o):q<0?W($rt_udiv(j,k),k)+k|0:W($rt_udiv((j+(k/2|0)|0),k),k);if(Dt(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.lH=d;c.lp=g-50|0;}
function H8(b,c,d){return GB(F1(Ca(C0(Bp(b),D(4294967295, 0)),C0(Bp(c),D(4294967295, 0))),32-d|0));}
function ACM(){A1T=$rt_udiv((-1),10);A1U=Em([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A1V=Em([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function W9(){var a=this;B.call(a);a.lH=0;a.lp=0;a.pg=0;}
function MO(){var a=this;B.call(a);a.yE=null;a.nU=0.0;a.y7=0.0;a.fE=null;a.hC=null;a.m1=null;a.fM=0;}
function AGs(a,b){var c;if(b!==null){a.hC=b;return a;}c=new BE;Bi(c,C(397));K(c);}
function AEK(a,b){var c;if(b!==null){a.m1=b;return a;}c=new BE;Bi(c,C(397));K(c);}
function R1(a,b,c,d){var e,f,g,$$je;e=a.fM;if(!(e==2&&!d)&&e!=3){a.fM=d?2:1;while(true){try{f=AGu(a,b,c);}catch($$e){$$je=Er($$e);if($$je instanceof Bu){g=$$je;K(AKI(g));}else{throw $$e;}}if(Hz(f))return f;if(IS(f)){if(d&&DV(b)){g=a.hC;HD();if(g===AZJ)return Ec(Cb(b));if(Cb(c)<=J(a.fE))return AZM;EV(b,b.Z+Cb(b)|0);if(a.hC===AZK)KQ(c,a.fE);}return f;}if(SA(f)){g=a.hC;HD();if(g===AZJ)return f;if(g===AZK){if(Cb(c)<J(a.fE))return AZM;KQ(c,a.fE);}EV(b,b.Z+KT(f)|0);}else if(MN(f)){g=a.m1;HD();if(g===AZJ)break;if(g
===AZK){if(Cb(c)<J(a.fE))return AZM;KQ(c,a.fE);}EV(b,b.Z+KT(f)|0);}}return f;}b=new CL;Y(b);K(b);}
function ABT(a,b){var c,d,e,f;c=a.fM;if(c&&c!=3){b=new CL;Y(b);K(b);}if(!Cb(b))return AG5(0);if(a.fM)a.fM=0;d=AG5(Bd(8,Cb(b)*a.nU|0));while(true){e=R1(a,b,d,0);if(IS(e))break;if(Hz(e))d=Ud(a,d);if(!Lm(e))continue;W7(e);}b=R1(a,b,d,1);if(Lm(b))W7(b);while(true){f=a.fM;if(f!=3&&f!=2)break;a.fM=3;if(IS(AZN)){d.dU=d.Z;d.Z=0;d.h8=(-1);return d;}d=Ud(a,d);}b=new CL;Y(b);K(b);}
function Ud(a,b){var c,d,e;c=b.h0;d=OU(c,Bd(8,c.data.length*2|0));e=ADY(d,0,d.data.length);EV(e,b.Z);return e;}
var ADt=G(CW);
function Pq(){B.call(this);this.o2=null;}
function AJl(a,b){Dv(a.o2,b);}
function RZ(){B.call(this);this.xo=null;}
function AI3(a,b){var c,d;c=a.xo;d=c.d8+1|0;c.d8=d;c=b.ic;b=new M;O(b);H(H(V(b,d),C(398)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Sk=G();
function APP(a,b){}
function Fa(){var a=this;B.call(a);a.G=null;a.r=null;a.el=0.0;}
function AV8(){var a=new Fa();Ml(a);return a;}
function Ml(a){a.G=new Bf;a.r=new Bf;}
function ARV(a){}
function AP2(a){return B$(0,0);}
function S5(a,b,c,d){var e;if(!LM(a.G,b)){a.ln(b);Cx(a.G,b);}if(!LM(a.r,c)){a.lg(c);Cx(a.r,c);}e=a.el;if(e!==d){a.el=d;a.rl(e,d);}}
function DN(a,b){return Gu(b,a.G,a.r);}
function AGB(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.r;AW5();Bx(b,d,e,f,A1W);}
function Xk(a,b){var c;c=a.G;Mf(b,c.b,c.a,a.r);}
function AJX(a,b){return 0;}
function AOK(a,b){}
function AUS(a,b){}
function AR9(a,b,c){}
function AM5(a,b,c,d){return 0;}
function AJL(a,b,c){return null;}
function APy(a,b,c){return 0;}
function AUv(a,b){return 0;}
function ARQ(a,b,c,d){return 0;}
function Gg(){var a=this;Fa.call(a);a.c0=null;a.bF=null;a.gg=null;}
function A1X(){var a=new Gg();Wo(a);return a;}
function Wo(a){Ml(a);a.c0=new Bf;a.bF=new Bf;}
function AMo(a,b){a.gg=b;}
function ADs(a){var b;b=a.bF;b.b=J3(a,b.b);b=a.bF;b.a=Mz(a,b.a);}
function W2(a,b){a.bF.b=J3(a,b);}
function AAq(a,b){a.bF.a=Mz(a,b);}
function AG6(a,b,c){a.bF.b=J3(a,b);a.bF.a=Mz(a,c);}
function Mz(a,b){return Bd(0,Bb(b,a.c0.a-a.r.a|0));}
function J3(a,b){return Bd(0,Bb(b,a.c0.b-a.r.b|0));}
function Se(){var a=this;Gg.call(a);a.cx=null;a.d0=null;a.hg=null;a.vf=null;a.ef=null;a.cd=null;a.eo=null;a.fT=null;a.ds=0;a.fa=0;a.xs=null;a.dT=0;a.eC=0;a.gr=0;a.fI=0;a.ft=0;a.cL=0;a.eq=null;a.jb=null;a.rQ=null;a.hN=null;}
function AYe(a,b){var c=new Se();AGo(c,a,b);return c;}
function AGo(a,b,c){Wo(a);a.d0=TU();a.hg=new Bf;a.cd=A1Y;a.eo=R(I5,0);a.dT=0;a.eC=0;a.gr=0;a.fI=0;a.ft=0;a.eq=ABh(0);a.hN=IK();a.cx=b;a.jb=c;a.xs=c;QU(a);}
function QU(a){a.ds=Cc(2.0,a.cx.b4);}
function Zw(a){return a.cd.data.length?0:1;}
function OK(a,b){Vz(a);a.cd=b;}
function Vz(a){U(a.hg,0,0);}
function AAn(a,b,c){a.rQ=b;a.vf=c;a.ef=null;a.eq=null;a.fa=0;Vz(a);}
function AUs(a){a.fT=CK(a.fT,null);U(a.hg,0,0);GK(a.hN);a.eq=null;a.cd=A1Y;a.eo=null;a.dT=0;a.eC=0;a.gr=0;U6(a.d0);a.jb=null;}
function AK4(a,b,c){Rd(a);QU(a);a.ef=null;a.eq=null;a.fa=0;}
function AIk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=Jp(a.cx);if(Zw(a))return;KE(a);CC(c,a.ef);d=Eb(a);e=AAM(c,a.fa);f=Bb(Jf(a.r.a,d),a.cd.data.length)+30|0;g=a.rQ.w1;h=a.eo.data;i=h.length;if(i<f){a:{j=a.fI;k=a.ft;l=a.cd;m=a.eq;n=a.hN;o=R(I5,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gm!==q){XM(m,t,n);p[r]=J2(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=J2(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=J2(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){XM(m,q,n);h[j]=null;}j=j+1|0;}a.eo=o;Cx(a.hg,J1(a.eq));Rz(a,a.cx.c6);}a.fI=Bb((a.bF.a+a.ds|0)/(Eb(a)+a.ds|0)|0,a.cd.data.length-1|0);a.ft=Bb((((a.bF.a+a.d0.s.a|0)-1|0)+a.ds|0)/(Eb(a)+a.ds|0)|0,a.cd.data.length-1|0);if(!a.eo.data.length)return;AAC(a,e);Xk(a,b);t=g.uU;m=a.G;Bx(b,m.b,m.a,a.r,t);m=a.d0.A;u=m.b;v=m.a;w=CF(a.cx,2.0);m=a.cx.dI;x=a.fI;j=u+w|0;while(x<=a.ft){n=Qo(a,x);k=W(x,Eb(a));i=x
+1|0;y=k+W(i,a.ds)|0;k=j+a.dT|0;r=k+a.eC|0;z=a.cL!=x?0:1;ba=!z?t:g.rB;q=!z?g.tT:g.i0;bb=!z?g.oZ:g.i0;bc=!z?g.p2:g.i0;bd=(v+y|0)-a.bF.a|0;EZ(b,j,bd,n.hM,n.sO,a.fT,q,ba,0.0);EZ(b,k,bd,n.iy,n.iV,a.fT,bb,ba,0.0);EZ(b,r,bd,n.hO,n.j7,a.fT,bc,ba,0.0);k=n.hM.b;s=j+k|0;U(m,Bd(0,a.dT-k|0),n.hM.a);Bx(b,s,bd,m,ba);k=j+a.dT|0;s=n.iy.b;be=k+s|0;U(m,Bd(0,a.eC-s|0),n.iy.a);Bx(b,be,bd,m,ba);k=n.hO.b;bf=r+k|0;U(m,Bd(0,(((a.d0.s.b-k|0)-a.eC|0)-a.dT|0)-w|0),n.hO.a);Bx(b,bf,bd,m,ba);bg=(u+a.r.b|0)-w|0;U(m,w,Eb(a)+a.ds|0);Bx(b,bg,
bd,m,t);x=i;}Hp(b);}
function AAC(a,b){var c,d,e,f,g,h;c=0;d=a.fI;while(d<=a.ft){e=Qo(a,d);if(!(e!==null&&e.gm===a.cd.data[d])){f=a.eo.data;g=a.cd;e=a.eq;h=a.hN;c=d%f.length|0;if(f[c]!==null)XM(e,f[c],h);f[c]=J2(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cx(a.hg,J1(a.eq));Rz(a,a.cx.c6);}}
function Rz(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hg;c=CO(b,c.b+150|0,c.a);CC(c,a.ef);d=a.ef;e=d.du;f=e-(e+d.eW)/16.0;g=a.eo.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gm.jn;k=d.iV;Ch(c,j,k.br+a.fa,f+k.bN);j=d.gm.jC;d=d.j7;Ch(c,j,d.br+a.fa,f+d.bN);}i=i+1|0;}a:{d=a.hN;if(d.cU>0){h=d.cS;i=0;b:while(true){g=d.ce.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cI;l=j.cY;k=k;l=l.kf;Ch(c,k,l.br+a.fa,f+l.bN);j=j.cO;if(h!=d.cS)break b;}i=i+1|0;}b=new Ht;Y(b);K(b);}}b=CK(a.fT,CZ(b));a.fT=b;CS(b,c);F8(c);}
function Qo(a,b){var c;c=a.eo.data;return c[b%c.length|0];}
function ARn(a,b){Cx(a.d0.s,b);}
function ATd(a,b){Cx(a.d0.A,b);}
function AB7(a){var b,c;KE(a);b=Eb(a);c=a.cd.data.length;b=W(b,c)+W(a.ds,c+1|0)|0;U(a.c0,a.r.b,b);}
function Rd(a){var b,c,d,e,f,g,h,i,j;b=Jp(a.cx);if(Zw(a))return;KE(a);CC(b,a.ef);c=AAM(b,a.fa);d=a.cd.data;e=d.length;f=0;while(f<e){g=d[f];h=K6(c,g.gz);i=K6(c,g.jn);j=K6(c,g.jC);a.dT=Bd(a.dT,h);a.eC=Bd(a.eC,i);a.gr=Bd(a.gr,j);f=f+1|0;}}
function AOD(a,b){var c;c=TT(a,b.i);if(c>=0)a.cL=c;return Eq(a.d0,a.G)&&Ge(a.cx.cN)?1:0;}
function ALQ(a,b,c){if(!Eq(a.d0,b.i)&&!K2(a.d0)){b=a.xs;if(b!==null)b.o();}return null;}
function ARE(a,b,c,d){var e;if(d==1){e=TT(a,b.i);if(e>=0)XH(a,a.cd.data[e]);}return 1;}
function XH(a,b){a.jb.o();b.tC.o();}
function TT(a,b){var c,d,e;if(!a.eo.data.length)return (-1);c=Eb(a);d=(b.a-a.G.a|0)+a.bF.a|0;e=a.ds;e=(d+e|0)/(c+e|0)|0;if(e<a.cd.data.length)return e;return (-1);}
function Eb(a){return Fi(a.ef);}
function KE(a){var b;if(a.ef===null){b=HH(a.cx,a.vf);a.ef=b;a.eq=ABh(Fi(b));a.fa=Dl(a.ef.nb);}}
function ATz(a,b){var c,d,e;a:{switch(b.bl){case 13:XH(a,a.cd.data[a.cL]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cL=a.fI;b=a.gg;c=a.bF;Jx(b,c.b,c.a-(a.r.a/2|0)|0);return 0;case 34:a.cL=a.ft;b=a.gg;c=a.bF;Jx(b,c.b,c.a+(a.r.a/2|0)|0);return 0;case 35:case 39:a.cL=a.cd.data.length-1|0;break a;case 36:case 37:a.cL=0;break a;case 38:d=a.cL;e=a.cd.data.length;a.cL=((d+e
|0)-1|0)%e|0;break a;case 40:a.cL=(a.cL+1|0)%a.cd.data.length|0;break a;default:break a;}a.jb.o();return 0;}e=a.cL;if(e<=a.fI)Jx(a.gg,a.bF.b,W(e,Eb(a))+W(a.cL,a.ds)|0);else if(e>=a.ft)Jx(a.gg,a.bF.b,(W(e+1|0,Eb(a))+W(a.cL+2|0,a.ds)|0)-a.r.a|0);return 0;}
var Of=G();
function AMg(a){}
function ACz(){var a=this;Fa.call(a);a.nz=null;a.pZ=null;a.uY=null;a.bG=null;a.df=null;a.dk=null;a.v9=0.0;a.w2=null;a.wX=null;}
function AAy(a,b){var c=new ACz();AHR(c,a,b);return c;}
function AHR(a,b,c){var d;c=c.cN;Ml(a);d=new PH;d.rN=a;a.pZ=d;d=new PG;d.s_=a;a.uY=d;a.v9=10.0;a.bG=b;a.nz=c;b.gg=a;}
function AS9(a){var b;b=a.bG;b.gg=null;a.bG=CK(b,null);}
function AAg(a,b,c){var d;a.w2=b;a.wX=c;d=a.df;if(d!==null)Hl(d,b,c);d=a.dk;if(d!==null)Hl(d,b,c);}
function AMs(a,b,c,d){S5(a,b,c,d);S5(a.bG,b,c,d);if(d!==0.0){a.bG.xb();ADs(a.bG);if(XY(a))I_(a);else a.dk=null;if(PM(a))HX(a);else a.df=null;}}
function Jx(a,b,c){AG6(a.bG,b,c);if(XY(a))I_(a);if(PM(a))HX(a);}
function PM(a){var b;b=a.r.a;return b>0&&a.bG.c0.a>b?1:0;}
function XY(a){var b;b=a.r.b;return b>0&&a.bG.c0.b>b?1:0;}
function I_(a){var b,c,d,e,f,g;b=a.dk;if(b===null)b=Ja();a.dk=b;Sz(a,b);c=a.dk;b=a.bG;d=b.bF.b;e=a.G;f=e.b;g=a.r;Sr(c,d,f,g.b,b.c0.b,e.a+g.a|0,MW(a));}
function HX(a){var b,c,d,e,f,g;b=a.df;if(b===null)b=Ja();a.df=b;Sz(a,b);c=a.df;b=a.bG;d=b.bF.a;e=a.G;f=e.a;g=a.r;Jt(c,d,f,g.a,b.c0.a,e.b+g.b|0,MW(a));}
function MW(a){return Cc(a.v9,a.el);}
function Sz(a,b){var c,d;c=a.w2;d=a.wX;if(!(c!==null&&d!==null?(Lc(b.iP,c)&&Lc(b.iQ,d)?1:0):0))Hl(b,c,d);}
function ASd(a,b){var c;a.bG.fJ(b);if(!(a.df===null&&a.dk===null)){Cw(b,1);c=a.df;if(c!==null)GP(c,b);c=a.dk;if(c!==null)GP(c,b);c=a.df;if(c!==null)GY(c,b);c=a.dk;if(c!==null)GY(c,b);Cw(b,0);}}
function V9(a,b){var c,d;a:{b:{c=a.df;if(!(c!==null&&If(c,b))){c=a.dk;if(c===null)break b;if(!If(c,b))break b;}d=1;break a;}d=0;}return d;}
function ATL(a,b,c,d){return !V9(a,b.i)&&!a.bG.cB(b,c,d)?0:1;}
function ATc(a,b,c){var d,e;d=a.df;if(d!==null){e=FG(d,b.i,a.pZ,1);if(e!==null)return e;}d=a.dk;if(d!==null){e=FG(d,b.i,a.uY,0);if(e!==null)return e;}return a.bG.ci(b,c);}
function APZ(a,b,c){return V9(a,b.i)?1:0;}
function APD(a,b){var c,d,e;c=a.df;d=c!==null&&FT(c,b.i,a.nz)?1:0;c=a.dk;e=c!==null&&FT(c,b.i,a.nz)?1:0;return !d&&!e&&!a.bG.bQ(b)?0:1;}
function ALF(a,b,c,d){var e,f;if(!DN(a,b.i))return 0;e=Cc(d*0.25,a.el);f=Cc(c*0.25,a.el);if(b.bP){f=f+e|0;e=0;}if(a.df!==null&&e){b=a.bG;AAq(b,b.bF.a+e|0);HX(a);}if(a.dk!==null&&f){b=a.bG;W2(b,b.bF.b+f|0);I_(a);}return 1;}
function AU_(a){var b,c;b=MW(a);c=a.bG.jW();c.b=Bd(c.b,b);c.a=Bd(c.a,b);return c;}
function Qc(){var a=this;Gg.call(a);a.kj=null;a.mE=null;a.qz=null;a.qw=0.0;}
function AKB(a){var b,c;b=a.c0;c=a.r;U(b,c.b*3|0,c.a*5|0);}
function AVc(a){var b;b=Cc(20.0,a.el);return B$(b,b);}
function ARu(a,b){var c,d,e,f;c=a.qz;d=c.q8;e=c.q9;c=c.q7;f=new M;O(f);H(H(H(f,c),C(35)),b);Iq(e,N(f),d.pW,3.0);}
function AVA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;AGB(a,b);Xk(a,b);c=Cc(30.0,a.el);d=a.bF;e=d.b;f=W(e/c|0,c);g=d.a;h=W(g/c|0,c);d=a.r;i=W(((e+d.b|0)-1|0)/c|0,c);e=W(((g+d.a|0)-1|0)/c|0,c);d=a.mE;d.a=c;d.b=c;a.kj.bO=1.0;while(h<=e){g=a.G.a-a.bF.a|0;j=f;while(j<=i){k=a.G.b-a.bF.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AGi(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;YX(n,0.75,a.qw,a.kj);Bx(b,k+j|0,g+h|0,a.mE,a.kj);j=j+c|0;}h=h+c|0;}Hp(b);}
function AIL(a,b){}
function YE(){var a=this;B.call(a);a.q8=null;a.q9=null;a.q7=null;}
var TI=G(D6);
var A1Z=null;function Dc(b,c){return Long_udiv(b, c);}
function AA4(b,c){return Long_urem(b, c);}
function Dt(b,c){return Long_ucompare(b, c);}
function ADf(){A1Z=F($rt_longcls());}
function Qy(){B.call(this);this.ou=null;}
function ATk(a){R6(a.ou);}
function OR(){B.call(this);this.ob=null;}
function AJ9(a){V$(a.ob);}
function VB(){B.call(this);this.nj=null;}
var A1Y=null;function ANs(){var a=new VB();ABY(a);return a;}
function ABY(a){a.nj=BH();}
function Ng(a,b,c,d,e){var f;f=new K4;f.tC=e;f.jn=c;f.jC=d;f.gz=b;BC(a.nj,f);}
function YD(a){return Id(a.nj,A1Y);}
function Uo(b){var c,d;if(b===null)b=C(30);else{c=b.f9;if(c===null)b=C(30);else{d=RC(c,C(399),J(c));b=d==(-1)?b.f9:Do(b.f9,d+1|0);}}return b;}
function AGp(){A1Y=R(K4,0);}
function I5(){var a=this;B.call(a);a.sO=null;a.iV=null;a.j7=null;a.hM=null;a.iy=null;a.hO=null;a.gm=null;}
function J2(b,c,d,e){var f,g,h;f=new I5;f.hM=new Bf;f.iy=new Bf;f.hO=new Bf;f.gm=b;g=Cl(e,b.gz);if(g!==null)g.ia=g.ia+1|0;else{g=new XT;h=JE(c,b.gz,d);g.ia=1;g.kf=h;F2(e,b.gz,g);}e=g.kf;f.sO=e;U(f.hM,e.bm|0,e.bO|0);e=JE(c,b.jn,d);f.iV=e;U(f.iy,e.bm|0,e.bO|0);b=JE(c,b.jC,d);f.j7=b;U(f.hO,b.bm|0,b.bO|0);return f;}
function XM(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gm.gz;f=Cl(d,e);g=f.ia-1|0;f.ia=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ce.data[0];while(j!==null){if(j.cI===null)break a;e=j.cO;i=j;j=e;}}else{k=IV(e);l=d.ce.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.jS==k&&ABa(e,j.cI))){m=j.cO;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cO=j.cO;else d.ce.data[h]=j.cO;d.cS=d.cS+1|0;d.cU=d.cU-1|0;}IQ(b,f.kf);}IQ(b,c.iV);IQ(b,c.j7);}
function Xo(){var a=this;Fa.call(a);a.hL=null;a.hu=null;a.hq=null;a.eH=null;a.j5=0.0;a.hR=0;a.hv=0;a.dE=null;a.k5=null;}
function Le(a){var b;b=a.r;return b.b&&b.a?0:1;}
function Yl(a){var b,c;a:{if(a.hq!==null){b=a.hu;if(b!==null&&!Fy(b)){c=0;break a;}}c=1;}return c;}
function Q3(a,b){a.r.a=b;}
function Rg(a,b,c,d,e){var f,g;f=a.hL.dI;U(f,d,a.r.a);g=a.G;Bx(b,g.b+c|0,g.a,f,e);}
function W1(a){if(a.eH===null)a.eH=HH(a.hL,a.hq);}
function VJ(){var a=this;B.call(a);a.mj=E$;a.k_=0;a.oX=0;}
function Uw(){var a=this;B.call(a);a.pd=null;a.pc=null;a.pb=null;}
function AJj(a){var b,c,d,e,f;b=a.pd;c=a.pc;d=a.pb;e=Bz();f=new M;O(f);b=H(f,b);BL(b,9);b=H(b,c);BL(b,9);H(b,d);Bt(e,N(f));}
function PH(){B.call(this);this.rN=null;}
function AIv(a,b){var c,d;c=a.rN;d=Fp(b,c.bG.c0.a-c.r.a|0);AAq(c.bG,d);HX(c);}
function PG(){B.call(this);this.s_=null;}
function AIT(a,b){var c,d;c=a.s_;d=Fp(b,c.bG.c0.b-c.r.b|0);W2(c.bG,d);I_(c);}
function K4(){var a=this;B.call(a);a.tC=null;a.jn=null;a.jC=null;a.gz=null;}
var CL=G(Bu);
var AEY=G(EY);
function AKI(a){var b=new AEY();APb(b,a);return b;}
function APb(a,b){a.j2=1;a.kC=1;a.l9=b;}
function WN(){B.call(this);this.rT=null;}
function St(a,b,c){var d,e,f,g,h,i;d=a.rT;e=b.dL.cy;f=d.gE;if(f===null)b=Q_(d,e);else{g=AEE(f,e);if(g<0)g=( -g|0)-1|0;g=g-1|0;b=Du(g,e-(g<0?0:d.gE.data[g])|0);}h=MH(BV(d,b.by),b.bI);if(c===null)h.cG=5;else{e=c.gC!=3?0:2;g=!(c instanceof HC)?0:2;i=Q_(d,c.c_.cy);F2(d.dO,b,i);Sd(d.dr,i,BH());BC(Cl(d.dr,i),b);h.cG=e;h.cf=g;}}
function YH(){var a=this;B.call(a);a.y$=null;a.y_=null;a.y9=null;}
function TO(){var a=this;B.call(a);a.wL=null;a.wM=null;a.wK=0;}
function ALk(a,b){var c,d,e;c=a.wL;d=a.wM;e=a.wK;d.g(Yq(c,(b.i.b+e|0)-c.es.b|0));}
function TN(){var a=this;B.call(a);a.qb=null;a.p_=null;a.qa=0;}
function AUr(a,b){var c,d,e;c=a.qb;d=a.p_;e=a.qa;d.g(Rl(c,(b.i.a+e|0)-c.es.a|0));}
function K$(){var a=this;MO.call(a);a.pt=null;a.tW=null;}
function AGu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.pt;e=0;f=0;g=a.tW;a:{b:{while(true){if((e+32|0)>f&&DV(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cb(b)+k|0;h=j.length;f=Bb(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BD;c=new M;O(c);V(H(V(H(c,C(400)),l),C(100)),h);Bi(b,N(c));K(b);}if(Cb(b)<m){b=new MA;Y(b);K(b);}if(m<0){b=new BD;c=new M;O(c);H(V(H(c,C(101)),m),C(102));Bi(b,N(c));K(b);}n=b.Z;h=n+b.lZ|0;e=0;while(e<m){o=k+1|0;i=b.mJ.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!DV(c)){p=!DV(b)&&e>=f?AZN:AZM;break a;}i=g.data;n=Cb(c);o=i.length;n=Bb(n,o);q=new WQ;q.sW=b;q.vt=c;p=AGU(a,d,e,f,g,0,n,q);e=q.xg;if(p===null&&0==q.lb)p=AZN;k=q.lb;h=0;if(c.nA){b=new JD;Y(b);K(b);}if(Cb(c)<k)break;if(h>o){b=new BD;c=new M;O(c);BL(V(H(V(H(c,C(103)),h),C(97)),o),41);Bi(b,N(c));K(b);}l=h+k|0;if(l>o){b=new BD;c=new M;O(c);V(H(V(H(c,C(105)),l),C(100)),o);Bi(b,N(c));K(b);}if(k<0){b=new BD;c=new M;O(c);H(V(H(c,C(101)),k),C(102));Bi(b,N(c));K(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;TY(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new Is;Y(b);K(b);}b=new BD;c=new M;O(c);BL(V(H(V(H(c,C(103)),k),C(97)),h),41);Bi(b,N(c));K(b);}EV(b,b.Z-(f-e|0)|0);return p;}
var U_=G(K$);
function AGU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(K_(h,2))break a;i=AZN;break a;}c=k+1|0;n=j[k];if(!FX(a,n)){c=c+(-2)|0;i=Ec(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(K_(h,3))break a;i=AZN;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FX(a,n))break b;if(!FX(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(MT(p)){c=k+(-3)|0;i=Ec(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ec(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(K_(h,4))break a;i=AZN;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cb(h.vt)<2?0:1)break a;i=AZM;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FX(a,n))break c;if(!FX(a,o))break c;if(!FX(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=IJ(r);m=c+1|0;j[c]=Jj(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ec(1);break a;}c=k+(-3)|0;i
=Ec(1);}h.xg=c;h.lb=f;return i;}
function FX(a,b){return (b&192)!=128?0:1;}
function ZQ(){B.call(this);this.ov=null;}
function AUl(a,b){var c,d;c=a.ov;d=c.d8+1|0;c.d8=d;c=new M;O(c);H(H(V(c,d),C(401)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Qk(){B.call(this);this.nX=null;}
function AIB(a){return a.nX.gA();}
function Qj(){B.call(this);this.w6=null;}
function ALI(a){return a.w6.gA();}
function Ue(){B.call(this);this.tS=null;}
function AQE(a){return a.tS.gA();}
function UR(){B.call(this);this.yX=null;}
function AUd(a){Bt(Bz(),C(402));}
function SJ(){B.call(this);this.oH=null;}
function AHK(a,b){a.oH.g(FR(b));}
function Wh(){B.call(this);this.t1=null;}
function AU6(a,b){a.t1.o();}
function NF(){var a=this;B.call(a);a.zf=null;a.zh=null;a.zd=0;a.ze=0;}
var AEa=G();
var AFo=G();
function OJ(){B.call(this);this.vn=null;}
function AKv(a,b){var c,d,e,f;c=a.vn;d=new M;O(d);H(H(d,C(403)),b);$rt_globals.console.info($rt_ustr(N(d)));d=new VO;d.zc=c;d.sb=b;e=new VR;e.Ah=c;f=new Wd;f.yL=e;e=new Xq;e.pi=d;c=b.fL;if(c!==null)c.arrayBuffer().then(Bl(e,"f"),Bl(f,"f"));else{b=b.ho.getFile();c=new Xt;c.vj=e;c.vk=f;b.then(Bl(c,"f"),Bl(f,"f"));}}
function OH(){B.call(this);this.ya=null;}
function ASN(a,b){var c;c=new M;O(c);H(H(c,C(404)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Nu=G();
function AS_(a,b){b=b;b.bs=CK(b.bs,null);}
function XN(){B.call(this);this.tR=null;}
function AJA(a){DY(a.tR);}
function Ia(){var a=this;GU.call(a);a.mo=0;a.hz=null;}
var Ht=G(Bu);
function WP(){B.call(this);this.rU=null;}
function AQn(a,b){var c;c=a.rU;Dv(c,b);Kw(c,null);JA(c);}
var Rp=G(D6);
var A10=null;function AB0(){A10=F($rt_doublecls());}
var I8=G();
var A11=E$;var A12=null;var A13=null;function ADJ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.oX=H_(C0(d,D(0, 2147483648)),E$)?0:1;e=C0(d,D(4294967295, 1048575));f=GB(AW6(d,52))&2047;if(H_(e,E$)&&!f){c.mj=E$;c.k_=0;return;}if(f)e=AWM(e,D(0, 1048576));else{e=GR(e,1);while(H_(C0(e,D(0, 1048576)),E$)){e=GR(e,1);f=f+(-1)|0;}}g=A13.data;h=f<<16>>16;i=0;j=g.length;k=BG(i,j);if(k>0){c=new BE;Y(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BG(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IB(e,A12.data[h],i);if(ALf(m,A11)){while(Dt(m,A11)<=0){j=j+(-1)|0;m=CH(Ca(m,Bp(10)),Bp(9));}g=A13.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IB(e,A12.data[h],i);}e=GR(e,1);d=CH(e,Bp(1));g=A12.data;h=j+1|0;n=g[h];f=i-1|0;n=IB(d,n,f);o=IB(Iz(e,Bp(1)),A12.data[h],f);p=Bp(1);while(true){q=Ca(p,Bp(10));if(Dt(Dc(m,q),Dc(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ca(r,Bp(10));if(Dt(Dc(m,s),Dc(n,s))>=0)break;r=s;}h=Dt(p,r);e=h>0?Ca(Dc(m,p),p):h<0?CH(Ca(Dc(m,r),r),r):Ca(Dc(CH(m,AFs(r,Bp(2))),r),r);if(Dt(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dc(e,Bp(10));if(Dt(e,D(2808348672, 232830643))<0)break;}else if(Dt(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ca(e,Bp(10));}c.mj=e;c.k_=j-330|0;}
function IB(b,c,d){var e,f,g,h,i,j,k,l;e=C0(b,Bp(65535));f=C0(F1(b,16),Bp(65535));g=C0(F1(b,32),Bp(65535));h=C0(F1(b,48),Bp(65535));i=C0(c,Bp(65535));j=C0(F1(c,16),Bp(65535));k=C0(F1(c,32),Bp(65535));l=C0(F1(c,48),Bp(65535));return CH(CH(CH(GR(Ca(l,h),32+d|0),GR(CH(Ca(l,g),Ca(k,h)),16+d|0)),GR(CH(CH(Ca(l,f),Ca(k,g)),Ca(j,h)),d)),F1(CH(CH(CH(Ca(k,e),Ca(j,f)),Ca(i,g)),GR(CH(CH(CH(Ca(l,e),Ca(k,f)),Ca(j,g)),Ca(i,h)),16)),32-d|0));}
function ADh(){A11=Dc(Bp(-1),Bp(10));A12=ABO([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A13=AYv([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function NG(){B.call(this);this.ug=null;}
function AV5(a,b){var c,d;c=a.ug;d=new Bu;Bi(d,$rt_str(b.message));c.g(d);}
function AA2(){B.call(this);this.FC=null;}
function V8(){var a=this;B.call(a);a.sI=0;a.xJ=0;}
function Fp(a,b){return RF(a.sI,b,a.xJ);}
function ZX(){var a=this;B.call(a);a.s7=null;a.s8=null;a.s9=null;}
function AR3(a,b,c,d){var e,f;b=a.s7;e=a.s8;f=a.s9;Vl(b,e);if(f!==null)d.lo.o();if(WL(d)){if(d.mt===null)PJ(b,ADc(d,e),d.ju,e);else Y0(b,ADc(d,e),d.ju,e,d.mt);}}
function Fv(){var a=this;B.call(a);a.fd=null;a.cg=null;a.eg=null;a.dt=null;a.e4=null;a.hD=null;a.j8=null;}
function AWb(a){var b=new Fv();AEp(b,a);return b;}
function AEp(a,b){a.fd=b;a.cg=BH();a.eg=BH();a.dt=BH();a.hD=BH();a.e4=BH();}
function AGw(a,b){var c,d,e;c=a.e4.bt();while(c.bE()){d=c.bq();e=Zu(b,d.ij);if(e!==null){e=e.fn;if(e!==null)d.fG.fn=e;}}c=a.eg.bt();while(c.bE()){Zu(b,c.bq());}}
function Ur(a,b){var c,d,e,f;c=a.e4.bt();while(true){if(!c.bE()){c=a.dt.bt();while(true){if(!c.bE()){c=a.cg.bt();a:while(true){if(!c.bE())return null;d=c.bq();if(!(d instanceof Ix))continue;e=d.dt.bt();while(e.bE()){f=e.bq();if(b.X(f))break a;}}return f;}e=c.bq();if(b.X(e))break;}return e;}e=c.bq();if(b.X(e.fG))break;}return e.fG;}
function Z0(){B.call(this);this.qG=null;}
function AMl(a,b){b=b;S2(a.qG,b);}
var Lu=G(Fv);
function Ix(){Fv.call(this);this.yU=null;}
function X$(){B.call(this);this.vz=null;}
function AIS(a,b){var c;b=b;c=a.vz;Bs(c.bV,(Cl(c.fr,b)).bD);}
function Ry(){var a=this;B.call(a);a.fG=null;a.ij=null;}
function Qq(){B.call(this);this.oa=null;}
function APi(a,b){b=b;T3(a.oa,b);}
var D$=G(Bu);
function OX(){var a=this;B.call(a);a.n_=null;a.rx=null;a.vy=0;a.w8=0;}
function Mp(a,b){return Cb(a.rx)<b?0:1;}
function Pj(){var a=this;B.call(a);a.iH=null;a.k9=null;}
function Gy(a,b,c){var d,e;if(c===null)return null;d=c.jX;if(d!=4&&d!=5){e=LY(a,b,c);if(e!==null){b=e.fn;if(b!==null)c.dH=b;}if(c.jX!=3&&!(c instanceof EJ)&&!(c instanceof Ft))St(a.k9,c,e);return e;}a:{while(true){if(b===null){e=null;break a;}e=b.j8;if(e!==null)break;b=b.fd;}}c.dH=e;return null;}
function LY(a,b,c){var d,e,f,g,h;if(c instanceof Ft){c=c.kd;d=new Zx;d.sr=a;d.ss=b;D8(c,d);return null;}if(c instanceof Fd){e=c;Nt(a,b,e);return HY(a,b,e);}if(c instanceof EJ){f=c;c=BH();JX(f,c);Gy(a,b,f.eE);d=Kq(a,f.eE.dH);g=1;while(g<c.j){e=Br(c,g);if(!(e instanceof Fd)){Gy(a,d,e);d=Kq(a,f.eE.dH);}else{e=e;Nt(a,b,e);h=HY(a,d,e);St(a.k9,e,h);}g=g+1|0;}return null;}if(b===null)d=null;else{d=new Q5;d.vR=a;d.vS=c;d=Ur(b,d);if(d===null){d=new Q4;d.sc=a;d=N4(a,b,c,d);}}if(d!==null)return d;if(b===null)return null;b
=b.fd;return b===null?null:LY(a,b,c);}
function Nt(a,b,c){c=BY(c.fu);while(B0(c)){Gy(a,b,B3(c));}}
function HY(a,b,c){var d,e;if(b===null)return null;d=new Sw;d.n9=a;d.n$=c;d=Ur(b,d);if(d!==null)return d;d=new Sy;d.tO=a;e=N4(a,b,c,d);if(e!==null)return e;b=b.fd;return b===null?null:HY(a,b,c);}
function N4(a,b,c,d){var e,f;b=b.hD.bt();while(true){if(!b.bE())return null;e=Kq(a,b.bq());if(e===null)continue;f=d.pa(e,c);if(f!==null)break;}return f;}
function Kq(a,b){if(b===null)return null;return QQ(a,a.iH.eS,b);}
function QQ(a,b,c){var d,e;d=b.j8;if(d!==null&&Bn(d,c))return b;b=b.cg.bt();while(true){if(!b.bE())return null;e=QQ(a,b.bq(),c);if(e!==null)break;}return e;}
var AGa=G();
function Wa(b,c,d,e){var f,g;f=b.next();g=new ZC;g.or=b;g.oq=c;g.ow=d;g.os=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function ABc(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AGV(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ei()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Zz;f.sh=b;f.si=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function ABm(b,c){var d;if(c.isFile?1:0)b.g(AAJ(c.file()));else{c=c.createReader();d=new Zg;d.vQ=b;c.readEntries(Bl(d,"f"));}}
function UZ(){var a=this;B.call(a);a.bK=null;a.pr=null;a.iJ=null;a.kB=null;a.W=null;}
function II(a){return a.bK.cE.i9;}
function AAl(a){var b;b=new Vu;b.pe=a;return b;}
function ADl(a){var b,c,d,e,f,g;b=R(C$,5);c=b.data;d=a.W.Y.U.bg;e=a.bK;BP(e);f=new PO;f.sq=e;c[0]=DL(C(405),d,f);d=a.W.Y.U.bg;e=a.bK;BP(e);f=new PP;f.wp=e;c[1]=DL(C(406),d,f);e=a.W.Y.U.bg;f=a.bK;BP(f);g=new PQ;g.ux=f;c[2]=DL(C(407),e,g);e=a.W.Y.U.bg;f=a.bK;BP(f);g=new PL;g.oI=f;c[3]=DL(C(408),e,g);e=a.W.Y.U.bg;f=a.bK;BP(f);g=new PN;g.xt=f;c[4]=DL(C(409),e,g);return F_(b);}
function Kb(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DY(a.W.ch);d=a.bK.e;e=DX(d);f=Gv(d);g=a.bK.fl;if(c===null)h=null;else{AXD();switch(A14.data[c.di]){case 1:h=MQ(g,e,f);break a;case 2:h=Sn(g,e,f);break a;default:}b=new EB;Y(b);K(b);}}c=a.bK;e=EX(c,b);f=Ho(c.e.f,e.by,e.bI);g=UK(c,f);if(h!==null){f=c.e;i=e.by;j=e.bI;e=new U8;e.Ap=c;e.Ao=b;e.An=g;h.tg(f,i,j,e,c.iG);}else{e=Cl(c.e.f.dO,f);if(e!==null)IE(c,e);else{e=Cl(c.e.f.dr,f);if(e!==null&&!D9(e))SM(c.j$,b,e,c,g);else{g=c.j$;DY(g.ch);h=g.ch;k=R(C$,1);l=k.data;d=new C$;BP(h);f
=new OE;f.od=h;Mk(d,f,C(410),g.Y.U.wO);l[0]=d;GD(h,b,F_(k),Su(g,c));}}}}
var ABA=G(0);
function AMT(b){return 112<=b&&b<=123?1:0;}
var QE=G(0);
var ET=G(E3);
function QV(){ET.call(this);this.ht=null;}
function TX(a){var b;b=new Ux;Lz(b,a.ht);return b;}
function Ne(){B.call(this);this.w5=null;}
function ALx(a,b){b=b;Om(a.w5,b);}
function WU(){B.call(this);this.uB=null;}
function AOB(a,b){b=b;Hn(a.uB,b);}
function JP(){var a=this;B.call(a);a.c_=null;a.fn=null;a.gC=0;}
function AXN(a,b,c){var d=new JP();AFj(d,a,b,c);return d;}
function AFj(a,b,c,d){a.c_=b;a.fn=c;a.gC=d;}
function Rj(a,b,c){var d,e,f,g;a:{d=b.dL;if(d!==null){e=a.c_;if(!Bn(d.fN,e.fN)){f=0;break a;}}f=1;}d=b.dH;g=d!==null&&!MB(c,a.fn,d)?0:1;if(f&&g){if(a.gC!=1)return 1;b=b.dL;return b!==null&&a.c_.cy<b.cy?1:0;}return 0;}
function AEw(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return B1(a.c_,c.c_)&&B1(a.fn,c.fn)&&B1(Dh(a.gC),Dh(c.gC))?1:0;}return 0;}
function HC(){var a=this;JP.call(a);a.gc=null;a.kN=0;}
function AJq(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AEw(a,b))return 0;c=b;return B1(a.gc,c.gc);}return 0;}
function EN(){var a=this;B.call(a);a.dL=null;a.dH=null;a.jX=0;}
function AWA(a,b,c){var d=new EN();LV(d,a,b,c);return d;}
function LV(a,b,c,d){a.dL=b;a.dH=c;a.jX=d;}
function ABq(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return B1(a.dL,c.dL)&&B1(a.dH,c.dH)?1:0;}return 0;}
function Ft(){EN.call(this);this.kd=null;}
function Fd(){var a=this;EN.call(a);a.fu=null;a.kW=0;}
function AUB(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!ABq(a,b))return 0;c=b;return B1(a.fu,c.fu);}return 0;}
function EJ(){var a=this;EN.call(a);a.eE=null;a.gj=null;}
function JX(a,b){var c;c=a.eE;if(!(c instanceof EJ))BC(b,c);else JX(c,b);c=a.gj;if(!(c instanceof EJ))BC(b,c);else JX(c,b);}
function AIz(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return B1(a.eE,c.eE)&&B1(a.gj,c.gj)?1:0;}return 0;}
function NN(){var a=this;B.call(a);a.xa=null;a.w$=null;}
function Zu(a,b){return Gy(a.xa,a.w$,b);}
function NO(){var a=this;B.call(a);a.n1=null;a.n0=null;}
function AM_(a,b){b=b;UQ(a.n1,b,a.n0);}
var ZE=G();
function ASF(a,b){ABc(b);}
function ZD(){var a=this;B.call(a);a.rA=null;a.rz=null;}
function AKS(a,b){var c,d,e,f,g,h,i;c=a.rA;d=a.rz;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new RU;i.pC=c;i.pB=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var YK=G();
function AMt(a,b){ABc(b);}
function YJ(){var a=this;B.call(a);a.qT=null;a.qU=null;}
function ANi(a,b){var c,d,e,f,g;c=a.qT;d=a.qU;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(BA,1);g.data[0]=FR(b.name);Wa(f,c,d,g);}
var ACj=G();
function AFw(b,c,d){ADd(b,c,d,0);}
function ADd(b,c,d,e){ABo(b,c,d,null,null,e);}
function ABo(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u;h=Yg(c);i=Be(h);j=Be(h);k=Be(h);l=CB(b);m=BM(i+1|0);n=!g?R(CD,i):QZ(b.z,i);c=m.data;b.z=n;o=0;while(o<i){if(g&&o<l){p=4*Be(h)|0;h.fx=h.fx+p|0;c[o+1|0]=(c[o]+(BV(b,o)).M|0)+1|0;}else{b.z.data[o]=DS(ACS(h,d,0));c[o+1|0]=(c[o]+(BV(b,o)).M|0)+1|0;}o=o+1|0;}if(j)b.c7=AGP(ABE(h));b.gE=m;GK(b.dO);GK(b.dr);q=b.dO;g=0;while(g<k){F2(q,Du(Be(h),Be(h)),Du(Be(h),Be(h)));g=g+1|0;}r=b.dO;s=b.dr;r=Ps(WO(r));while(Fk(r)){t=ZG(r);q=t.cI;t=t.cY;Sd(s,t,BH());BC(Cl(s,t),
q);}if(s.lB===null){r=new QW;r.xn=s;s.lB=r;}r=s.lB;q=new SX;Lz(q,r.xn);while(Fk(q)){L6(q);r=q.gG.cY;t=AY1;c=R(B,r.j);d=c.data;Id(r,c);ACH(c,t);g=0;u=d.length;while(g<u){t=d[g];JS(r,g);r.cC.data[g]=t;g=g+1|0;}}Sj(h);if(e!==null&&f!==null){r=APn(e,f);PB(r);b.d2=AKn(r.l1,r.ii);b.c7=AGP(r.mC);}}
function AAH(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Yg(c);i=Be(h);j=Be(h);k=Be(h);l=Be(h);m=Y3(b,i);n=Y3(b,j);o=(It(BV(b,m.b),m.a)).data[0].p;p=(It(BV(b,n.b),n.a)).data[1].p;q=0;r=k-1|0;while(q<k){g=ACS(h,d,i);if(!q)g=Mo(o,g);if(q==r)g=Mo(g,p);s=m.b+q|0;t=DS(g);b.z.data[s]=t;q=q+1|0;}if(l){u=ABE(h);v=Km(i,j,(-1));Wr(b.c7,v,u);}else if(e!==null&&f!==null){t=APn(e,f);PB(t);v=Km(i,j,(-1));Wr(b.c7,v,t.mC);b.d2.dJ=t.ii;}Sj(h);}
function ACS(b,c,d){var e,f,g,h,i,j,k,l;e=Be(b);f=R(Ce,e);g=f.data;h=0;while(h<e){i=Be(b);j=Be(b);k=Be(b);l=Be(b);g[h]=Dz(EP(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var YW=G(0);
var A0C=null;function AA_(){A0C=null;}
function Zz(){var a=this;B.call(a);a.sh=null;a.si=null;}
function AMh(a,b){var c,d,e,f,g,h;b=a.sh;c=a.si;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new NB;h.ok=b;h.oj=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=AAJ(d.item(f));g=new Nm;g.tF=b;g.tG=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function ABM(){var a=this;B.call(a);a.jR=null;a.mi=null;}
function AHl(){var a=this;B.call(a);a.yQ=0;a.As=0;a.pY=0;a.l3=0;}
function Zj(){var a=this;B.call(a);a.rh=null;a.ri=null;}
function AIP(a){var b,c,d,e,f,g;b=a.rh;c=a.ri;if(B1(c.jR,b.e.gK)){c=c.mi;CE(b,c.l3,c.pY,0);B7(b.q.b1,c.l3,c.pY);B7(b.q.bL,c.As,c.yQ);}else{d=(Cs(b.fl.vm)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ct(b);b=new Pv;b.re=g;b.rf=c;BP(b);c=new RH;c.xQ=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function Zk(){var a=this;B.call(a);a.wJ=null;a.wI=null;}
function AMZ(a){IE(a.wJ,a.wI);}
function AGS(){var a=this;B.call(a);a.fN=null;a.cy=0;}
function AMj(a,b){var c=new AGS();AHD(c,a,b);return c;}
function AHD(a,b,c){a.fN=b;a.cy=c;}
function AP8(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.cy==c.cy&&B1(a.fN,c.fN)?1:0;}return 0;}
function N_(){B.call(this);this.o$=null;}
function AOz(a,b){b=b;Nq(a.o$,b);}
function AAi(){B.call(this);this.pf=null;}
function AV3(a,b){b=b;Hn(a.pf,b);}
function AE9(){var a=this;B.call(a);a.jl=null;a.fx=0;}
function Yg(a){var b=new AE9();AHQ(b,a);return b;}
function AHQ(a,b){a.jl=b;a.fx=0;}
function Be(a){var b,c;b=a.jl.data;c=a.fx;a.fx=c+1|0;return b[c];}
function Sj(a){var b,c,d,e;if(a.fx!=a.jl.data.length){b=E_();c=a.jl.data.length;d=a.fx;e=new M;O(e);H(V(H(V(H(e,C(391)),c),C(411)),d),C(412));Bt(b,N(e));}}
var Fe=G();
var A15=null;var A16=null;var A17=null;var A18=null;var A19=null;var A1$=null;function AEt(){A15=new Xf;A16=new Xc;A17=new Xd;A18=new Xa;A19=new Xb;A1$=new AAo;}
function ABi(){var a=this;B.call(a);a.cP=null;a.k4=null;a.lJ=null;a.mB=null;a.mw=null;a.l1=null;a.mC=null;a.hl=null;a.ii=null;}
function APn(a,b){var c=new ABi();AT_(c,a,b);return c;}
function AT_(a,b,c){a.cP=Yg(b);a.k4=c;}
function PB(a){var b,c,d,e,f,g,h,i;b=Be(a.cP);c=new Ly;Rx(c);a.ii=c;a.hl=BH();d=0;while(d<b){e=Be(a.cP);f=Be(a.cP);g=EP(a.k4,e,f);F2(a.ii,g,BH());BC(a.hl,g);d=d+1|0;}c=Ps(WO(a.ii));while(Fk(c)){I0((ZG(c)).cY,Ov(a));}d=Be(a.cP);if(d==(-1))a.l1=null;else{a.lJ=R(Fv,d);c=new NL;h=a.cP;i=a.k4;g=a.hl;c.dX=h;c.sy=i;c.rH=g;a.mB=c;c=new SU;c.eb=h;c.vA=i;c.v8=g;a.mw=c;a.l1=Sx(a,null);}a.mC=AAu(a.cP,a.lJ);}
function Sx(a,b){var c,d,e,f,g,h,i,j;c=Be(a.cP);d=Be(a.cP);e=a.mB;f=Be(e.dX);g=BH();h=0;while(h<f){BC(g,NP(e));h=h+1|0;}a:{switch(d){case -1:e=new Lu;e.fd=b;b=A17;e.cg=b;e.eg=b;e.dt=b;e.hD=b;e.e4=b;break a;case 0:e=AWb(b);break a;case 1:e=new Ix;AEp(e,b);if(D9(g)){b=new CL;Bi(b,C(413));K(b);}e.yU=Br(g,0);I0(e.dt,g);break a;default:}b=new CL;e=new M;O(e);V(H(e,C(414)),d);Bi(b,N(e));K(b);}e.dt=g;b=a.mw;d=Be(b.eb);g=BH();h=0;while(h<d){BC(g,Gi(b));h=h+1|0;}e.eg=g;e.hD=Ov(a);d=Be(a.cP);b=BH();h=0;while(h<d){g=NP(a.mB);i
=Gi(a.mw);j=new Ry;j.fG=g;j.ij=i;BC(b,j);h=h+1|0;}e.e4=b;h=Be(a.cP);e.j8=h==(-1)?null:Br(a.hl,h);d=Be(a.cP);b=BH();h=0;while(h<d){BC(b,Sx(a,e));h=h+1|0;}e.cg=b;a.lJ.data[c]=e;return e;}
function Ov(a){var b,c,d,e;b=Be(a.cP);c=BH();d=0;while(d<b){e=Be(a.cP);BC(c,Br(a.hl,e));d=d+1|0;}return c;}
var KX=G(ET);
var Xf=G(KX);
var L_=G(D4);
var Xc=G(L_);
var MI=G(Gt);
function AKJ(a){var b;b=new D$;Y(b);K(b);}
function APa(a,b){var c;c=new D$;Y(c);K(c);}
function ANR(a,b){b=new D$;Y(b);K(b);}
var Xd=G(MI);
function APj(a,b){var c;c=new BD;Y(c);K(c);}
function AOs(a){return 0;}
function ALd(a){return A18;}
function AIF(a){return 1;}
var Xa=G();
function AIl(a){return 0;}
function AQD(a){var b;b=new M8;Y(b);K(b);}
function ASw(a){var b;b=new CL;Y(b);K(b);}
var Q$=G(0);
var Xb=G();
var AAo=G();
function E9(){var a=this;B.call(a);a.ji=0;a.tI=0;a.io=null;a.gG=null;a.q$=null;a.jZ=null;}
function A1_(a){var b=new E9();Lz(b,a);return b;}
function Lz(a,b){a.jZ=b;a.tI=b.cS;a.io=null;}
function Fk(a){var b,c;if(a.io!==null)return 1;while(true){b=a.ji;c=a.jZ.ce.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.ji=b+1|0;}return 0;}
function ACl(a){var b;if(a.tI==a.jZ.cS)return;b=new Ht;Y(b);K(b);}
function L6(a){var b,c,d,e;ACl(a);if(!Fk(a)){b=new M8;Y(b);K(b);}b=a.io;if(b!==null){c=a.gG;if(c!==null)a.q$=c;a.gG=b;a.io=b.cO;}else{d=a.jZ.ce.data;e=a.ji;a.ji=e+1|0;b=d[e];a.gG=b;a.io=b.cO;a.q$=null;}}
var Ux=G(E9);
function QD(a){L6(a);return a.gG.cI;}
var JD=G(D$);
var Is=G(Bu);
var MA=G(Bu);
function AGD(){B.call(this);this.A9=null;}
function Tp(){var a=this;B.call(a);a.qK=null;a.qL=null;}
function AQQ(a){var b,c;b=a.qK;c=a.qL;F4(b.eG,c);}
function Wz(){B.call(this);this.pF=null;}
function AMn(a,b){IN(a.pF,b);}
function P9(){var a=this;B.call(a);a.u9=null;a.u8=null;}
function AJS(a){var b,c;b=a.u9;c=a.u8;F4(b.eG,c);UX(b);}
var AE2=G();
function RY(b,c){return b.data[c];}
function He(){var a=this;B.call(a);a.ed=0;a.ej=0;a.l8=null;a.ng=0;a.ge=null;}
function ATA(a,b,c,d,e,f){var g=new He();AOv(g,a,b,c,d,e,f);return g;}
function AOv(a,b,c,d,e,f,g){a.ed=b;a.ej=c;a.l8=B$(f,g);a.ng=d;a.ge=e;}
function Wq(){ET.call(this);this.sn=null;}
function Ps(a){var b;b=new Wf;Lz(b,a.sn);return b;}
function QW(){E3.call(this);this.xn=null;}
var Sq=G(0);
var OO=G(0);
var Hw=G();
function ACT(){var a=this;Hw.call(a);a.H1=null;a.Kb=0;a.ID=0;a.F2=0;}
function VX(){var a=this;B.call(a);a.u4=null;a.u5=null;}
function AKL(a){var b,c;b=a.u4;c=a.u5;Ua();Kb(b,c,A2a);}
function VY(){var a=this;B.call(a);a.va=null;a.vb=null;}
function AHJ(a){var b,c;b=a.va;c=a.vb;Ua();Kb(b,c,A2b);}
function VU(){var a=this;B.call(a);a.rw=null;a.rv=null;}
function ANY(a){Kb(a.rw,a.rv,null);}
function VW(){var a=this;B.call(a);a.s1=null;a.s0=null;}
function AQ_(a){var b,c,d,e,f,g,h;b=a.s1;c=a.s0;d=DX(b.bK.e);e=Gv(b.bK.e);d=VT(b.bK.fl,d,e);DY(b.W.ch);b=b.bK;e=EX(b,c);if(d!==null){f=b.e;g=e.by;h=e.bI;e=new Ws;e.AF=b;e.AG=c;d.IN(f,g,h,1,e,b.iG);}}
function Vv(){B.call(this);this.sU=null;}
function APf(a){var b;b=a.sU;DY(b.W.ch);Hm(b.bK,AAl(b),0);}
function Vx(){B.call(this);this.po=null;}
function AQ$(a){var b;b=a.po;DY(b.W.ch);Hm(b.bK,AAl(b),1);}
function Vw(){B.call(this);this.vC=null;}
function ATI(a){var b,c,d;b=a.vC;DY(b.W.ch);c=II(b);b=b.bK;BP(b);d=new O0;d.sp=b;SR(c,d,AB4(C(415)));}
var R0=G(0);
var A0y=null;function AFa(){A0y=new Wb;}
function AAh(){B.call(this);this.p5=null;}
function AR6(a){var b,c,d;b=a.p5;DY(b.W.ch);c=II(b);b=b.bK;BP(b);d=new Qf;d.sA=b;MD(c,d);}
function Y7(){B.call(this);this.nR=null;}
function ANG(a,b,c){var d,e;c=a.nR;d=c.e.f;e=b.bD;b=c.fg;TP(d.z.data[e],0,b);}
function NL(){var a=this;B.call(a);a.dX=null;a.sy=null;a.rH=null;}
function NP(a){var b,c,d,e,f,g,h;a:{b=Be(a.dX);switch(b){case 3:break;case 5:c=Pp(a);d=Mm(a);b=Be(a.dX);e=Be(a.dX);f=BH();g=0;while(g<e){BC(f,Mm(a));g=g+1|0;}h=new HC;AFj(h,c,d,4);h.gc=f;h.kN=b;break a;default:c=new CL;d=new M;O(d);V(H(d,C(416)),b);Bi(c,N(d));K(c);}h=AXN(Pp(a),Mm(a),Be(a.dX));}return h;}
function Pp(a){var b,c;b=Be(a.dX);c=Be(a.dX);return AMj(EP(a.sy,b,c),Be(a.dX));}
function Mm(a){var b;b=Be(a.dX);if(b==(-1))return null;return Br(a.rH,b);}
function SU(){var a=this;B.call(a);a.eb=null;a.vA=null;a.v8=null;}
function Gi(a){var b,c,d,e,f;a:{b:{b=Be(a.eb);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Ox(a);d=RD(a);b=Be(a.eb);e=T1(a);f=new Fd;LV(f,c,d,2);f.kW=b;f.fu=e;break a;case 4:c=Gi(a);d=Gi(a);f=new EJ;LV(f,c.dL,c.dH,(-1));f.eE=c;f.gj=d;break a;case 5:f=AWA(Ox(a),RD(a),Be(a.eb));break a;case 9:c=T1(a);f=new Ft;LV(f,null,null,(-1));if(D9(c)){c=new BE;Bi(c,C(417));K(c);}f.kd=c;break a;default:break b;}f=null;break a;}c=new CL;d=new M;O(d);V(H(d,C(418)),b);Bi(c,N(d));K(c);}return f;}
function Ox(a){var b,c;b=Be(a.eb);c=Be(a.eb);return AMj(EP(a.vA,b,c),Be(a.eb));}
function RD(a){var b;b=Be(a.eb);if(b==(-1))return null;return Br(a.v8,b);}
function T1(a){var b,c,d;b=Be(a.eb);c=BH();d=0;while(d<b){BC(c,Gi(a));d=d+1|0;}return c;}
function O4(){var a=this;B.call(a);a.oP=null;a.oQ=0;a.oR=0;a.oS=null;a.oL=0;a.oN=0;}
function APs(a,b){var c,d,e,f,g,h,i,j;c=a.oP;d=a.oQ;e=a.oR;f=a.oS;g=a.oL;h=a.oN;i=CF(c.bC,5.0);d=Bb((c.bC.cj.b-d|0)-i|0,Bd((i-d|0)-c.T.r.b|0,b.i.b));j=Bb((c.bC.cj.a-e|0)-i|0,Bd((i-e|0)-c.T.r.a|0,b.i.a));U(f,d+g|0,j+h|0);FH(c,f,c.S.r);}
function XW(){var a=this;B.call(a);a.uL=null;a.uN=null;a.uM=null;a.uH=0;a.uG=0;a.uK=0;a.uI=0;a.uW=0;a.uV=0;a.uX=0;a.vw=0;}
function AMk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uL;d=a.uN;e=a.uM;f=a.uH;g=a.uG;h=a.uK;i=a.uI;j=a.uW;k=a.uV;l=a.uX;m=a.vw;n=CF(c.bC,5.0);o=c.S.jW();Cx(d,c.S.r);Cx(e,c.S.G);switch(f){case -1:f=Bb(h+(b.i.b-g|0)|0,c.bC.cj.b-n|0);g=o.b;h=h+i|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bd((i+b.i.b|0)-g|0,Bd(o.b,n-c.T.G.b|0));}b:{switch(j){case -1:f=Bd(n,Bb(l+(b.i.a-k|0)|0,(c.bC.cj.a+c.T.r.a|0)-n|0));g=o.a;h=l+m|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bd((m+b.i.a|0)-k|0,o.a);}FH(c,e,d);}
function XV(){var a=this;B.call(a);a.pU=null;a.pT=0.0;}
function K6(a,b){return Lp(a.pU,b,a.pT*2.0+0.875);}
var YC=G(BD);
function Yb(){B.call(this);this.tB=null;}
function AJo(a){AG9(a.tB);}
function Ya(){B.call(this);this.p4=null;}
function AIj(a){KU(a.p4);}
function Yd(){B.call(this);this.rt=null;}
function ANU(a){AD2(a.rt);}
function Zo(){B.call(this);this.wf=null;}
function ARX(a){a.wf.wZ();}
function Zn(){B.call(this);this.rC=null;}
function AMW(a){a.rC.xv();}
function Pm(){B.call(this);this.vd=null;}
function ATy(a){var b,c,d,e,f,g,h,i;b=a.vd;c=(b.pr.dQ()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Os;i.vi=b;i.vh=h;e[f]=AFd(i,h,b.W.Y.U.bg);f=f+1|0;}return d;}
function PO(){B.call(this);this.sq=null;}
function ALV(a){var b,c,d,e,f;b=a.sq.e.f;c=b.cK;d=new M;O(d);V(H(d,C(419)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.h2;d=new M;O(d);V(H(d,C(420)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c7;e=Gd(ES(b));Y$(d,0,d.c$,e);b=Bz();f=b.lq;f.data[0]=10;Pw(b,f,0,1);}
function PP(){B.call(this);this.wp=null;}
function AUz(a){S8(a.wp);}
function PQ(){B.call(this);this.ux=null;}
function AR2(a){UT(a.ux);}
function PL(){B.call(this);this.oI=null;}
function AME(a){Ij(a.oI);}
function PN(){B.call(this);this.xt=null;}
function AVz(a){JA(a.xt);}
function Yc(){B.call(this);this.vB=null;}
function APt(a,b,c){GI(BV(a.vB.e.f,b.bD),0,J(c));}
function RU(){var a=this;B.call(a);a.pC=null;a.pB=null;}
function AK3(a,b){a.pC.g(AEH(a.pB,b));}
var Jr=G(0);
function NB(){var a=this;B.call(a);a.ok=null;a.oj=null;}
function ANn(a){ABm(a.ok,a.oj);}
function Nm(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function AHy(a){a.tF.g(a.tG);}
var Wb=G();
function ZC(){var a=this;B.call(a);a.or=null;a.oq=null;a.ow=null;a.os=null;}
function AMP(a,b){var c,d,e,f,g,h,i;c=a.or;d=a.oq;e=a.ow;f=a.os;if(!(b.done?1:0)){Wa(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new VQ;c.qW=d;c.qX=g;c.qY=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=FR(g.name);i=h.length;f=Dp(f,i+1|0);f.data[i]=b;Wa(c,d,e,f);}}}
var Wf=G(E9);
function ZG(a){L6(a);return a.gG;}
var SX=G(E9);
var Wk=G(0);
var A1W=null;function AW5(){AW5=Bq(Wk);AU2();}
function AU2(){A1W=S(C(375));}
function ST(){var a=this;B.call(a);a.h=null;a.dN=0;a.lh=null;a.o3=0;a.gW=0;a.fe=0;a.bB=0;a.mh=null;}
function KG(a){return a.h.bU;}
function ZU(a,b,c,d){var e,f,g,h,i,j;e=BH();f=a.dN;g=0;if(c!=f)a.dN=c;a:{switch(b){case -1073741784:h=new Tn;c=a.bB+1|0;a.bB=c;Fx(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RA;c=a.bB+1|0;a.bB=c;Fx(h,c);break a;case -33554392:h=new Uy;c=a.bB+1|0;a.bB=c;Fx(h,c);break a;default:c=a.gW+1|0;a.gW=c;if(d!==null)h=AXU(c);else{h=new FL;Fx(h,0);g=1;}c=a.gW;if(c<=(-1))break a;if(c>=10)break a;a.lh.data[c]=h;break a;}h=new ZP;Fx(h,(-1));}while(true){if(Ff(a.h)&&a.h.k==(-536870788))
{d=AT8(Cf(a,2),Cf(a,64));while(!Dn(a.h)&&Ff(a.h)){i=a.h;j=i.k;if(j&&j!=(-536870788)&&j!=(-536870871))break;CA(d,Bk(i));i=a.h;if(i.bk!=(-536870788))continue;Bk(i);}i=Lq(a,d);i.Q(h);}else if(a.h.bk==(-536870788)){i=Hc(h);Bk(a.h);}else{i=QJ(a,h);d=a.h;if(d.bk==(-536870788))Bk(d);}if(i!==null)BC(e,i);if(Dn(a.h))break;if(a.h.bk==(-536870871))break;}if(a.h.lF==(-536870788))BC(e,Hc(h));if(a.dN!=f&&!g){a.dN=f;d=a.h;d.gD=f;d.k=d.bk;d.e6=d.fm;j=d.dn;d.w=j+1|0;d.hU=j;Fj(d);}switch(b){case -1073741784:break;case -536870872:d
=new Nz;FM(d,e,h);return d;case -268435416:d=new X5;FM(d,e,h);return d;case -134217688:d=new SY;FM(d,e,h);return d;case -67108824:d=new Vb;FM(d,e,h);return d;case -33554392:d=new DW;FM(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AXC(Br(e,0),h);default:return AXb(e,h);}return Hc(h);}d=new JB;FM(d,e,h);return d;}
function AFJ(a){var b,c,d,e,f,g,h;b=BM(4);c=(-1);d=(-1);if(!Dn(a.h)&&Ff(a.h)){e=b.data;c=Bk(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BU(3);b=e.data;b[0]=c&65535;f=a.h;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.h;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return ATQ(e,3);}return ATQ(e,2);}if(!Cf(a,2))return ACk(b[0]);if(Cf(a,64))return ARz(b[0]);return AJ1(b[0]);}e=b.data;c=1;while(c<4&&!Dn(a.h)&&Ff(a.h)){h=c+1|0;e[c]=Bk(a.h);c=h;}if(c==1){h=e[0];if(!(A2c.Aa(h)==A2d?0:1))return ZM(a,e[0]);}if
(!Cf(a,2))return AYx(b,c);if(Cf(a,64)){f=new ZB;Po(f,b,c);return f;}f=new Vn;Po(f,b,c);return f;}
function QJ(a,b){var c,d,e,f,g,h,i;if(Ff(a.h)&&!Kr(a.h)&&K3(a.h.k)){if(Cf(a,128)){c=AFJ(a);if(!Dn(a.h)){d=a.h;e=d.bk;if(!(e==(-536870871)&&!(b instanceof FL))&&e!=(-536870788)&&!Ff(d))c=MX(a,b,c);}}else if(!Pz(a.h)&&!WW(a.h)){f=new PC;O(f);while(!Dn(a.h)&&Ff(a.h)&&!Pz(a.h)&&!WW(a.h)){if(!(!Kr(a.h)&&!a.h.k)&&!(!Kr(a.h)&&K3(a.h.k))){g=a.h.k;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.h);if(!MP(e))BL(f,e&65535);else I1(f,GS(e));}if(!Cf(a,2)){c=new Ti;DH(c);c.cA
=N(f);e=f.I;c.bR=e;c.lz=APQ(e);c.ml=APQ(c.bR);h=0;while(h<(c.bR-1|0)){S1(c.lz,P(c.cA,h),(c.bR-h|0)-1|0);S1(c.ml,P(c.cA,(c.bR-h|0)-1|0),(c.bR-h|0)-1|0);h=h+1|0;}}else if(Cf(a,64))c=AYw(f);else{c=new Ok;DH(c);c.hX=N(f);c.bR=f.I;}}else c=MX(a,b,ZA(a,b));}else{d=a.h;if(d.bk!=(-536870871))c=MX(a,b,ZA(a,b));else{if(b instanceof FL)K(Cd(C(30),d.bU,Py(d)));c=Hc(b);}}a:{if(!Dn(a.h)){e=a.h.bk;if(!(e==(-536870871)&&!(b instanceof FL))&&e!=(-536870788)){f=QJ(a,b);if(c instanceof C5&&!(c instanceof Fl)&&!(c instanceof CV)
&&!(c instanceof EL)){i=c;if(!f.b2(i.K)){c=new Yk;E7(c,i.K,i.d,i.ih);c.K.Q(c);}}if((f.ip()&65535)!=43)c.Q(f);else c.Q(f.K);break a;}}if(c===null)return null;c.Q(b);}if((c.ip()&65535)!=43)return c;return c.K;}
function MX(a,b,c){var d,e,f,g,h;d=a.h;e=d.bk;if(c!==null&&!(c instanceof B6)){switch(e){case -2147483606:Bk(d);d=new AAt;Di(d,c,b,e);M2();c.Q(A2e);return d;case -2147483605:Bk(d);d=new Rr;Di(d,c,b,(-2147483606));M2();c.Q(A2e);return d;case -2147483585:Bk(d);d=new Q2;Di(d,c,b,(-536870849));M2();c.Q(A2e);return d;case -2147483525:f=new Oe;d=Fo(d);g=a.fe+1|0;a.fe=g;JR(f,d,c,b,(-536870849),g);M2();c.Q(A2e);return f;case -1073741782:case -1073741781:Bk(d);d=new Te;Di(d,c,b,e);c.Q(d);return d;case -1073741761:Bk(d);d
=new Sl;Di(d,c,b,(-536870849));c.Q(b);return d;case -1073741701:h=new Wu;d=Fo(d);e=a.fe+1|0;a.fe=e;JR(h,d,c,b,(-536870849),e);c.Q(h);return h;case -536870870:case -536870869:Bk(d);if(c.ip()!=(-2147483602)){d=new CV;Di(d,c,b,e);}else if(Cf(a,32)){d=new Tg;Di(d,c,b,e);}else{d=new PR;f=Q6(a.dN);Di(d,c,b,e);d.lE=f;}c.Q(d);return d;case -536870849:Bk(d);d=new F9;Di(d,c,b,(-536870849));c.Q(b);return d;case -536870789:h=new Fq;d=Fo(d);e=a.fe+1|0;a.fe=e;JR(h,d,c,b,(-536870849),e);c.Q(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new AAv;E7(d,f,b,e);f.d=d;return d;case -2147483585:Bk(d);c=new Yf;E7(c,f,b,(-2147483585));return c;case -2147483525:c=new QI;TL(c,Fo(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new Sh;E7(d,f,b,e);f.d=d;return d;case -1073741761:Bk(d);c=new VE;E7(c,f,b,(-1073741761));return c;case -1073741701:c=new SZ;TL(c,Fo(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=AXK(f,b,e);f.d=d;return d;case -536870849:Bk(d);c
=new EL;E7(c,f,b,(-536870849));return c;case -536870789:return AWJ(Fo(d),f,b,(-536870789));default:}return c;}
function ZA(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FL;while(true){a:{e=a.h;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dN=g;else{if(f!=(-1073741784))g=a.dN;c=ZU(a,f,g,b);e=a.h;if(e.bk!=(-536870871))K(Cd(C(30),e.bU,e.dn));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=ATD(0);break a;case -2147483577:Bk(e);c=new PI;BW(c);break a;case -2147483558:Bk(e);c=new Zd;h=a.bB+1|0;a.bB=h;AF8(c,h);break a;case -2147483550:Bk(e);c=ATD(1);break a;case -2147483526:Bk(e);c=new YG;BW(c);break a;case -536870876:Bk(e);a.bB=a.bB+1|0;if(Cf(a,8)){if(Cf(a,1)){c=AW1(a.bB);break a;}c=AWj(a.bB);break a;}if(Cf(a,1)){c=AXg(a.bB);break a;}c=AX0(a.bB);break a;case -536870866:Bk(e);if(Cf(a,32)){c=AYh();break a;}c=AXR(Q6(a.dN));break a;case -536870821:Bk(e);i=0;c=a.h;if(c.bk==(-536870818)){i=1;Bk(c);}c
=Lq(a,Go(a,i));c.Q(b);e=a.h;if(e.bk!=(-536870819))K(Cd(C(30),e.bU,e.dn));Ql(e,1);Bk(a.h);break a;case -536870818:Bk(e);a.bB=a.bB+1|0;if(!Cf(a,8)){c=new K9;BW(c);break a;}c=new Ot;e=Q6(a.dN);BW(c);c.sF=e;break a;case 0:j=e.fm;if(j!==null)c=Lq(a,j);else{if(Dn(e)){c=Hc(b);break a;}c=ACk(f&65535);}Bk(a.h);break a;default:break b;}Bk(e);c=new K9;BW(c);break a;}h=(f&2147483647)-48|0;if(a.gW<h)K(Cd(C(30),Fu(e),Py(a.h)));Bk(e);a.bB=a.bB+1|0;c=!Cf(a,2)?AWo(h,a.bB):Cf(a,64)?AW2(h,a.bB):AYr(h,a.bB);a.lh.data[h].le=1;a.o3
=1;break a;}if(f>=0&&!Hf(e)){c=ZM(a,f);Bk(a.h);}else if(f==(-536870788))c=Hc(b);else{if(f!=(-536870871)){b=new Jl;c=!Hf(a.h)?Y9(f&65535):a.h.fm.cM();e=a.h;J4(b,c,e.bU,e.dn);K(b);}if(d){b=new Jl;e=a.h;J4(b,C(30),e.bU,e.dn);K(b);}c=Hc(b);}}}if(f!=(-16777176))break;}return c;}
function Go(a,b){var c,d,e,f,g,h,i,j,$$je;c=AT8(Cf(a,2),Cf(a,64));EC(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dn(a.h))break a;h=a.h;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CA(c,d);d=Bk(a.h);h=a.h;if(h.bk!=(-536870874)){d=38;break d;}if(h.k==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=Go(a,0);break d;}if(a.h.bk==(-536870819))break d;YO(c,Go(a,0));break d;case -536870867:if(!g){b=h.k;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.h;i=h.bk;if(Hf(h))break c;if
(i<0){j=a.h.k;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(K3(i))break e;i=i&65535;break e;}catch($$e){$$je=Er($$e);if($$je instanceof Ee){break b;}else{throw $$e;}}}try{B4(c,d,i);}catch($$e){$$je=Er($$e);if($$je instanceof Ee){break b;}else{throw $$e;}}Bk(a.h);d=(-1);break d;}}if(d>=0)CA(c,d);d=45;Bk(a.h);break d;case -536870821:if(d>=0){CA(c,d);d=(-1);}Bk(a.h);j=0;h=a.h;if(h.bk==(-536870818)){Bk(h);j=1;}if(!e)AAG(c,Go(a,j));else YO(c,Go(a,j));e=0;Bk(a.h);break d;case -536870819:if(d>=0)CA(c,
d);d=93;Bk(a.h);break d;case -536870818:if(d>=0)CA(c,d);d=94;Bk(a.h);break d;case 0:if(d>=0)CA(c,d);h=a.h.fm;if(h===null)d=0;else{AHj(c,h);d=(-1);}Bk(a.h);break d;default:}if(d>=0)CA(c,d);d=Bk(a.h);}g=0;}K(Cd(C(30),KG(a),a.h.dn));}K(Cd(C(30),KG(a),a.h.dn));}if(!f){if(d>=0)CA(c,d);return c;}K(Cd(C(30),KG(a),a.h.dn-1|0));}
function ZM(a,b){var c,d,e;c=MP(b);if(Cf(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AJ1(b&65535);}if(Cf(a,64)&&b>128){if(c){d=new Nr;DH(d);d.bR=2;d.r0=G2(GZ(b));return d;}if(Qz(b))return AP0(b&65535);if(!T6(b))return ARz(b&65535);return ANc(b&65535);}}if(!c){if(Qz(b))return AP0(b&65535);if(!T6(b))return ACk(b&65535);return ANc(b&65535);}d=new D5;DH(d);d.bR=2;d.gn=b;e=(GS(b)).data;d.kz=e[0];d.i_=e[1];return d;}
function Lq(a,b){var c,d,e;if(!AEi(b)){if(!b.N){if(b.hA())return AML(b);return ATE(b);}if(!b.hA())return ANT(b);c=new JT;V1(c,b);return c;}c=ABb(b);d=new NM;BW(d);d.qN=c;d.x0=c.bj;if(!b.N){if(b.hA())return AE7(AML(H2(b)),d);return AE7(ATE(H2(b)),d);}if(!b.hA())return AE7(ANT(H2(b)),d);c=new R_;e=new JT;V1(e,H2(b));AG3(c,e,d);return c;}
function H5(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cf(a,b){return (a.dN&b)!=b?0:1;}
function Us(){B.call(this);this.pQ=null;}
function AI6(a,b){b.gT=a.pQ.c$;}
function UG(){B.call(this);this.vP=null;}
function AS2(a,b){b.fd=a.vP.c$.db;}
var Gf=G(Co);
var A2b=null;var A2a=null;var A2f=null;function Ua(){Ua=Bq(Gf);AVG();}
function ASC(a,b){var c=new Gf();ADu(c,a,b);return c;}
function ADu(a,b,c){Ua();Dd(a,b,c);}
function AVG(){var b;A2b=ASC(C(421),0);b=ASC(C(422),1);A2a=b;A2f=I(Gf,[A2b,b]);}
function O0(){B.call(this);this.sp=null;}
function AM2(a,b){Dv(a.sp,b);}
function W_(){B.call(this);this.qe=null;}
function AKl(a,b){b.gT=a.qe;}
var G7=G(0);
function W0(){B.call(this);this.t7=null;}
function AN6(a,b,c,d){Kh(a.t7,b,c.bD,d.bD);}
function WY(){B.call(this);this.qj=null;}
function AJc(a,b,c,d){Kh(a.qj,b,c.bD,d.bD);}
function ID(){B.call(this);this.nw=0;}
var A2g=null;var A2h=null;var A2i=null;function AQW(a){var b=new ID();AE$(b,a);return b;}
function AE$(a,b){a.nw=b;}
function ADb(a){return a.nw;}
function Qt(b){return !b?A2h:A2g;}
function ABr(){A2g=AQW(1);A2h=AQW(0);A2i=F($rt_booleancls());}
var Gs=G(0);
var AGx=G();
var Qa=G(0);
var AGy=G();
function T_(){B.call(this);this.xR=null;}
function AQF(a,b,c,d){IP(a.xR,b,c.bD,d.bD);}
var T9=G();
function AOl(a,b){return b.c_.cy>=0?0:1;}
var T8=G();
function AS3(a,b){var c;a:{b:{b=b;if(b!==null){b=b.dL;if(b===null)break b;if(b.cy>=0)break b;}c=1;break a;}c=0;}return c;}
function T7(){B.call(this);this.nW=null;}
function ARh(a,b,c,d){IP(a.nW,b,c.bD,d.bD);}
function BK(){var a=this;B.call(a);a.d=null;a.cp=0;a.qd=null;a.ih=0;}
var AY7=0;function BW(a){var b;b=AY7;AY7=b+1|0;a.qd=L5(b);}
function Lo(a,b){var c;c=AY7;AY7=c+1|0;a.qd=L5(c);a.d=b;}
function H9(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Im(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AKp(a,b){a.ih=b;}
function AJF(a){return a.ih;}
function AST(a){return a.d;}
function ATW(a,b){a.d=b;}
function ATV(a,b){return 1;}
function AUX(a){return null;}
function JL(a){var b;a.cp=1;b=a.d;if(b!==null){if(!b.cp){b=b.fV();if(b!==null){a.d.cp=1;a.d=b;}a.d.eK();}else if(b instanceof GV&&b.eR.le)a.d=b.d;}}
function AHb(){AY7=1;}
var Vf=G();
var A14=null;function AXD(){AXD=Bq(Vf);AII();}
function AII(){var b,c;Ua();b=BM((A2f.fs()).data.length);c=b.data;A14=b;c[A2b.di]=1;c[A2a.di]=2;}
function Vu(){B.call(this);this.pe=null;}
function AJv(a,b){V2(II(a.pe),b,A0H,AB4(C(423)));}
function U5(){B.call(this);this.wj=null;}
function AVS(a,b){var c,d;c=a.wj;d=b.ic;b=new M;O(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function Os(){var a=this;B.call(a);a.vi=null;a.vh=null;}
function AT7(a){var b,c;b=a.vi;c=a.vh;b.iJ.uJ(c);}
function OG(){var a=this;B.call(a);a.r1=null;a.r2=null;a.r3=0;a.r4=0;}
function AKx(a,b){b=b;Ej(a.r1,a.r2,b,a.r3,a.r4);}
function OI(){var a=this;B.call(a);a.wc=null;a.v$=null;a.v_=0;a.wb=0;}
function AQN(a,b){b=b;Ej(a.wc,a.v$,b,a.v_,a.wb);}
function CT(){var a=this;BK.call(a);a.le=0;a.dV=0;}
var A2e=null;function M2(){M2=Bq(CT);ALz();}
function AXU(a){var b=new CT();Fx(b,a);return b;}
function Fx(a,b){M2();BW(a);a.dV=b;}
function AI0(a,b,c,d){var e,f;e=I9(d,a.dV);Kj(d,a.dV,b);f=a.d.c(b,c,d);if(f<0)Kj(d,a.dV,e);return f;}
function AO2(a){return a.dV;}
function AJm(a,b){return 0;}
function ALz(){var b;b=new PD;BW(b);A2e=b;}
function G_(){var a=this;B.call(a);a.bi=null;a.gD=0;a.e_=0;a.v4=0;a.lF=0;a.bk=0;a.k=0;a.th=0;a.fm=null;a.e6=null;a.w=0;a.iA=0;a.dn=0;a.hU=0;a.bU=null;}
var A2j=null;var A2c=null;var A2d=0;function Ql(a,b){if(b>0&&b<3)a.e_=b;if(b==1){a.k=a.bk;a.e6=a.fm;a.w=a.hU;a.hU=a.dn;Fj(a);}}
function Hf(a){return a.fm===null?0:1;}
function Kr(a){return a.e6===null?0:1;}
function Bk(a){Fj(a);return a.lF;}
function Fo(a){var b;b=a.fm;Fj(a);return b;}
function Fj(a){var b,c,d,e,f,g,h,$$je;a.lF=a.bk;a.bk=a.k;a.fm=a.e6;a.dn=a.hU;a.hU=a.w;while(true){b=0;c=a.w>=a.bi.data.length?0:Mi(a);a.k=c;a.e6=null;if(a.e_==4){if(c!=92)return;c=a.w;d=a.bi.data;c=c>=d.length?0:d[B5(a)];a.k=c;switch(c){case 69:break;default:a.k=92;a.w=a.iA;return;}a.e_=a.v4;a.k=a.w>(a.bi.data.length-2|0)?0:Mi(a);}a:{c=a.k;if(c!=92){e=a.e_;if(e==1)switch(c){case 36:a.k=(-536870876);break a;case 40:if(a.bi.data[a.w]!=63){a.k=(-2147483608);break a;}B5(a);c=a.bi.data[a.w];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.k=(-134217688);B5(a);break b;default:K(Cd(C(30),Fu(a),a.w));}a.k=(-67108824);B5(a);}else{switch(c){case 33:break;case 60:B5(a);c=a.bi.data[a.w];e=1;break b;case 61:a.k=(-536870872);B5(a);break b;case 62:a.k=(-33554392);B5(a);break b;default:f=AHd(a);a.k=f;if(f<256){a.gD=f;f=f<<16;a.k=f;a.k=(-1073741784)|f;break b;}f=f&255;a.k=f;a.gD=f;f=f<<16;a.k=f;a.k=(-16777176)|f;break b;}a.k=(-268435416);B5(a);}}if(!e)break;}break a;case 41:a.k=(-536870871);break a;case 42:case 43:case 63:e
=a.w;d=a.bi.data;switch(e>=d.length?42:d[e]){case 43:a.k=c|(-2147483648);B5(a);break a;case 63:a.k=c|(-1073741824);B5(a);break a;default:}a.k=c|(-536870912);break a;case 46:a.k=(-536870866);break a;case 91:a.k=(-536870821);Ql(a,2);break a;case 93:if(e!=2)break a;a.k=(-536870819);break a;case 94:a.k=(-536870818);break a;case 123:a.e6=AGz(a,c);break a;case 124:a.k=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.k=(-536870874);break a;case 45:a.k=(-536870867);break a;case 91:a.k=(-536870821);break a;case 93:a.k
=(-536870819);break a;case 94:a.k=(-536870818);break a;default:}}else{c=a.w>=(a.bi.data.length-2|0)?(-1):Mi(a);c:{a.k=c;switch(c){case -1:K(Cd(C(30),Fu(a),a.w));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.k
=AER(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.e_!=1)break a;a.k=(-2147483648)|c;break a;case 65:a.k=(-2147483583);break a;case 66:a.k=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Cd(C(30),Fu(a),a.w));case 68:case 83:case 87:case 100:case 115:case 119:a.e6=TC(EP(a.bi,
a.iA,1),0);a.k=0;break a;case 71:a.k=(-2147483577);break a;case 80:case 112:break c;case 81:a.v4=a.e_;a.e_=4;b=1;break a;case 90:a.k=(-2147483558);break a;case 97:a.k=7;break a;case 98:a.k=(-2147483550);break a;case 99:c=a.w;d=a.bi.data;if(c>=(d.length-2|0))K(Cd(C(30),Fu(a),a.w));a.k=d[B5(a)]&31;break a;case 101:a.k=27;break a;case 102:a.k=12;break a;case 110:a.k=10;break a;case 114:a.k=13;break a;case 116:a.k=9;break a;case 117:a.k=Rs(a,4);break a;case 120:a.k=Rs(a,2);break a;case 122:a.k=(-2147483526);break a;default:}break a;}g
=AEz(a);h=0;if(a.k==80)h=1;try{a.e6=TC(g,h);}catch($$e){$$je=Er($$e);if($$je instanceof JW){K(Cd(C(30),Fu(a),a.w));}else{throw $$e;}}a.k=0;}}if(b)continue;else break;}}
function AEz(a){var b,c,d,e,f,g;b=new M;Gj(b,10);c=a.w;d=a.bi;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EP(d,B5(a),1);f=new M;O(f);H(H(f,C(424)),b);return N(f);}B5(a);c=0;a:{while(true){g=a.w;d=a.bi.data;if(g>=(d.length-2|0))break;c=d[B5(a)];if(c==125)break a;BL(b,c);}}if(c!=125)K(Cd(C(30),a.bU,a.w));}if(!b.I)K(Cd(C(30),a.bU,a.w));f=N(b);if(J(f)==1){b=new M;O(b);H(H(b,C(424)),f);return N(b);}b:{c:{if(J(f)>3){if(Lh(f,C(424)))break c;if(Lh(f,C(425)))break c;}break b;}f=Do(f,2);}return f;}
function AGz(a,b){var c,d,e,f,g,$$je;c=new M;Gj(c,4);d=(-1);e=2147483647;a:{while(true){f=a.w;g=a.bi.data;if(f>=g.length)break a;b=g[B5(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ke(D3(c),10);AGH(c,0,ABs(c));continue;}catch($$e){$$je=Er($$e);if($$je instanceof Dj){break;}else{throw $$e;}}BL(c,b&65535);}K(Cd(C(30),a.bU,a.w));}if(b!=125)K(Cd(C(30),a.bU,a.w));if(c.I>0)b:{try{e=Ke(D3(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Er($$e);if($$je instanceof Dj){}else{throw $$e;}}K(Cd(C(30),a.bU,a.w));}else if
(d<0)K(Cd(C(30),a.bU,a.w));if((d|e|(e-d|0))<0)K(Cd(C(30),a.bU,a.w));b=a.w;g=a.bi.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.k=(-2147483525);B5(a);break c;case 63:a.k=(-1073741701);B5(a);break c;default:}a.k=(-536870789);}c=new N2;c.e$=d;c.e5=e;return c;}
function Fu(a){return a.bU;}
function Dn(a){return !a.bk&&!a.k&&a.w==a.th&&!Hf(a)?1:0;}
function K3(b){return b<0?0:1;}
function Ff(a){return !Dn(a)&&!Hf(a)&&K3(a.bk)?1:0;}
function Pz(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function WW(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function T6(b){return b<=56319&&b>=55296?1:0;}
function Qz(b){return b<=57343&&b>=56320?1:0;}
function Rs(a,b){var c,d,e,f,$$je;c=new M;Gj(c,b);d=a.bi.data.length-2|0;e=0;while(true){f=BG(e,b);if(f>=0)break;if(a.w>=d)break;BL(c,a.bi.data[B5(a)]);e=e+1|0;}if(!f)a:{try{b=Ke(D3(c),16);}catch($$e){$$je=Er($$e);if($$je instanceof Dj){break a;}else{throw $$e;}}return b;}K(Cd(C(30),a.bU,a.w));}
function AER(a){var b,c,d,e,f,g;b=3;c=1;d=a.bi.data;e=d.length-2|0;f=Wm(d[a.w],8);switch(f){case -1:break;default:if(f>3)b=2;B5(a);a:{while(true){if(c>=b)break a;g=a.w;if(g>=e)break a;g=Wm(a.bi.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B5(a);c=c+1|0;}}return f;}K(Cd(C(30),a.bU,a.w));}
function AHd(a){var b,c,d,e;b=1;c=a.gD;a:while(true){d=a.w;e=a.bi.data;if(d>=e.length)K(Cd(C(30),a.bU,d));b:{c:{switch(e[d]){case 41:B5(a);return c|256;case 45:if(!b)K(Cd(C(30),a.bU,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B5(a);}B5(a);return c;}
function B5(a){var b,c,d,e,f;b=a.w;a.iA=b;if(!(a.gD&4))a.w=b+1|0;else{c=a.bi.data.length-2|0;a.w=b+1|0;a:while(true){d=a.w;if(d<c&&SV(a.bi.data[d])){a.w=a.w+1|0;continue;}d=a.w;if(d>=c)break;e=a.bi.data;if(e[d]!=35)break;a.w=d+1|0;while(true){f=a.w;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.w=f+1|0;}}}return a.iA;}
function AGj(b){return A2j.Fy(b);}
function Mi(a){var b,c,d,e;b=a.bi.data[B5(a)];if(CI(b)){c=a.iA+1|0;d=a.bi.data;if(c<d.length){e=d[c];if(C7(e)){B5(a);return ED(b,e);}}}return b;}
function Py(a){return a.dn;}
function Jl(){var a=this;BE.call(a);a.zS=null;a.zr=null;a.rK=0;}
function Cd(a,b,c){var d=new Jl();J4(d,a,b,c);return d;}
function J4(a,b,c,d){Y(a);a.rK=(-1);a.zS=b;a.zr=c;a.rK=d;}
function Zg(){B.call(this);this.vQ=null;}
function AQY(a,b){var c,d;c=a.vQ;d=0;while(d<b.length){ABm(c,b[d]);d=d+1|0;}}
var AEr=G(0);
function VQ(){var a=this;B.call(a);a.qW=null;a.qX=null;a.qY=null;}
function AQv(a,b){a.qW.g(AWk(a.qX,b,a.qY));}
var Tn=G(CT);
function AIo(a,b,c,d){var e;e=a.dV;BQ(d,e,b-Dr(d,e)|0);return a.d.c(b,c,d);}
function ASl(a,b){return 0;}
var ZP=G(CT);
function AKm(a,b,c,d){return b;}
var RA=G(CT);
function AJC(a,b,c,d){if(Dr(d,a.dV)!=b)b=(-1);return b;}
function Uy(){CT.call(this);this.oM=0;}
function AIw(a,b,c,d){var e;e=a.dV;BQ(d,e,b-Dr(d,e)|0);a.oM=b;return b;}
function AQH(a,b){return 0;}
var FL=G(CT);
function AUf(a,b,c,d){if(d.kb!=1&&b!=d.x)return (-1);d.jz=1;Kj(d,0,b);return b;}
function B6(){BK.call(this);this.bR=0;}
function DH(a){BW(a);a.bR=1;}
function AVy(a,b,c,d){var e;if((b+a.b8()|0)>d.x){d.dC=1;return (-1);}e=a.bA(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ATo(a){return a.bR;}
function ANw(a,b){return 1;}
var AF7=G(B6);
function Hc(a){var b=new AF7();AO_(b,a);return b;}
function AO_(a,b){Lo(a,b);a.bR=1;a.ih=1;a.bR=0;}
function ASL(a,b,c){return 0;}
function ALE(a,b,c,d){var e,f,g;e=d.x;f=d.cW;while(true){g=BG(b,e);if(g>0)return (-1);if(g<0&&C7(P(c,b))&&b>f&&CI(P(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AKd(a,b,c,d,e){var f,g;f=e.x;g=e.cW;while(true){if(c<b)return (-1);if(c<f&&C7(P(d,c))&&c>g&&CI(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIu(a,b){return 0;}
function B2(){var a=this;BK.call(a);a.bM=null;a.eR=null;a.bb=0;}
function AXb(a,b){var c=new B2();FM(c,a,b);return c;}
function FM(a,b,c){BW(a);a.bM=b;a.eR=c;a.bb=c.dV;}
function AMp(a,b,c,d){var e,f,g,h;if(a.bM===null)return (-1);e=FQ(d,a.bb);DF(d,a.bb,b);f=a.bM.j;g=0;while(true){if(g>=f){DF(d,a.bb,e);return (-1);}h=(Br(a.bM,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQx(a,b){a.eR.d=b;}
function AOt(a,b){var c;a:{c=a.bM;if(c!==null){c=BY(c);while(true){if(!B0(c))break a;if(!(B3(c)).b2(b))continue;else return 1;}}}return 0;}
function ARp(a,b){return I9(b,a.bb)>=0&&FQ(b,a.bb)==I9(b,a.bb)?0:1;}
function AJ_(a){var b,c,d,e;a.cp=1;b=a.eR;if(b!==null&&!b.cp)JL(b);a:{b=a.bM;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Br(a.bM,d);e=b.fV();if(e===null)e=b;else{b.cp=1;Ey(a.bM,d);Td(a.bM,d,e);}if(!e.cp)e.eK();d=d+1|0;}}}if(a.d!==null)JL(a);}
var JB=G(B2);
function AQh(a,b,c,d){var e,f,g,h;e=Dr(d,a.bb);BQ(d,a.bb,b);f=a.bM.j;g=0;while(true){if(g>=f){BQ(d,a.bb,e);return (-1);}h=(Br(a.bM,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARK(a,b){return !Dr(b,a.bb)?0:1;}
var DW=G(JB);
function AKQ(a,b,c,d){var e,f,g;e=Dr(d,a.bb);BQ(d,a.bb,b);f=a.bM.j;g=0;while(g<f){if((Br(a.bM,g)).c(b,c,d)>=0)return a.d.c(a.eR.oM,c,d);g=g+1|0;}BQ(d,a.bb,e);return (-1);}
function ARv(a,b){a.d=b;}
var Nz=G(DW);
function AQs(a,b,c,d){var e,f;e=a.bM.j;f=0;while(f<e){if((Br(a.bM,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AT1(a,b){return 0;}
var X5=G(DW);
function AJg(a,b,c,d){var e,f;e=a.bM.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bM,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ATu(a,b){return 0;}
var SY=G(DW);
function AJ6(a,b,c,d){var e,f,g,h;e=a.bM.j;f=d.jG?0:d.cW;a:{g=a.d.c(b,c,d);if(g>=0){BQ(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((Br(a.bM,h)).cv(f,b,c,d)>=0){BQ(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function AVZ(a,b){return 0;}
var Vb=G(DW);
function AHS(a,b,c,d){var e,f;e=a.bM.j;BQ(d,a.bb,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bM,f)).cv(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AR8(a,b){return 0;}
function GV(){B2.call(this);this.c9=null;}
function AXC(a,b){var c=new GV();AB$(c,a,b);return c;}
function AB$(a,b,c){BW(a);a.c9=b;a.eR=c;a.bb=c.dV;}
function AIf(a,b,c,d){var e,f;e=FQ(d,a.bb);DF(d,a.bb,b);f=a.c9.c(b,c,d);if(f>=0)return f;DF(d,a.bb,e);return (-1);}
function AON(a,b,c,d){var e;e=a.c9.cs(b,c,d);if(e>=0)DF(d,a.bb,e);return e;}
function ASq(a,b,c,d,e){var f;f=a.c9.cv(b,c,d,e);if(f>=0)DF(e,a.bb,f);return f;}
function AOk(a,b){return a.c9.b2(b);}
function AQB(a){var b;b=new N9;AB$(b,a.c9,a.eR);a.d=b;return b;}
function AU1(a){var b;a.cp=1;b=a.eR;if(b!==null&&!b.cp)JL(b);b=a.c9;if(b!==null&&!b.cp){b=b.fV();if(b!==null){a.c9.cp=1;a.c9=b;}a.c9.eK();}}
var Hb=G();
function X(){var a=this;Hb.call(a);a.bj=0;a.cn=0;a.L=null;a.kh=null;a.k8=null;a.N=0;}
var A2k=null;function Qh(){Qh=Bq(X);AKA();}
function Bv(a){var b;Qh();b=new Y8;b.C=BM(64);a.L=b;}
function AJi(a){return null;}
function AIN(a){return a.L;}
function AEi(a){var b,c,d,e,f;if(!a.cn)b=HK(a.L,0)>=2048?0:1;else{a:{c=a.L;b=0;d=c.bw;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=IY(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IY(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AMK(a){return a.N;}
function ATg(a){return a;}
function ABb(a){var b,c;if(a.k8===null){b=a.fj();c=new Yj;c.Aj=a;c.o_=b;Bv(c);a.k8=c;EC(c,a.cn);}return a.k8;}
function H2(a){var b,c;if(a.kh===null){b=a.fj();c=new Yh;c.zW=a;c.vq=b;c.wl=a;Bv(c);a.kh=c;EC(c,a.bj);a.kh.N=a.N;}return a.kh;}
function AUU(a){return 0;}
function EC(a,b){var c;c=a.bj;if(c^b){a.bj=c?0:1;a.cn=a.cn?0:1;}if(!a.N)a.N=1;return a;}
function ALL(a){return a.bj;}
function KY(b,c){Qh();return b.l(c);}
function IW(b,c){var d,e;Qh();if(b.dx()!==null&&c.dx()!==null){b=b.dx();c=c.dx();d=Bb(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function TC(b,c){var d,e,f;Qh();d=0;while(true){AR5();e=A2l.data;if(d>=e.length){f=new JW;Bi(f,C(30));f.AL=C(30);f.Aq=b;K(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return AFD(e[1],c);}
function AKA(){var b;b=new Hx;AR5();A2k=b;}
function ABX(){var a=this;X.call(a);a.mu=0;a.oJ=0;a.gX=0;a.l4=0;a.ec=0;a.fO=0;a.H=null;a.bJ=null;}
function Ds(){var a=new ABX();AVK(a);return a;}
function AT8(a,b){var c=new ABX();AKo(c,a,b);return c;}
function AVK(a){Bv(a);a.H=AV2();}
function AKo(a,b,c){Bv(a);a.H=AV2();a.mu=b;a.oJ=c;}
function CA(a,b){a:{if(a.mu){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ec){Na(a.H,H5(b&65535));break a;}Md(a.H,H5(b&65535));break a;}if(a.oJ&&b>128){a.gX=1;b=G2(GZ(b));}}}if(!(!T6(b)&&!Qz(b))){if(a.l4)Na(a.L,b-55296|0);else Md(a.L,b-55296|0);}if(a.ec)Na(a.H,b);else Md(a.H,b);if(!a.N&&MP(b))a.N=1;return a;}
function AHj(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(a.l4){if(!b.cn)F$(a.L,b.fj());else De(a.L,b.fj());}else if(!b.cn)F6(a.L,b.fj());else{FA(a.L,b.fj());De(a.L,b.fj());a.cn=a.cn?0:1;a.l4=1;}if(!a.fO&&b.dx()!==null){if(a.ec){if(!b.bj)F$(a.H,b.dx());else De(a.H,b.dx());}else if(!b.bj)F6(a.H,b.dx());else{FA(a.H,b.dx());De(a.H,b.dx());a.bj=a.bj?0:1;a.ec=1;}}else{c=a.bj;d=a.bJ;if(d!==null){if(!c){e=new P7;e.yk=a;e.wU=c;e.v1=d;e.vM=b;Bv(e);a.bJ=e;}else{e=new P8;e.AU=a;e.sw=c;e.r_=d;e.rm=b;Bv(e);a.bJ=e;}}else{if(c&&!a.ec
&&MS(a.H)){d=new P4;d.zq=a;d.sk=b;Bv(d);a.bJ=d;}else if(!c){d=new P2;d.lK=a;d.kM=c;d.p0=b;Bv(d);a.bJ=d;}else{d=new P3;d.mH=a;d.kV=c;d.vV=b;Bv(d);a.bJ=d;}a.fO=1;}}return a;}
function B4(a,b,c){var d,e,f,g,h;if(b>c){d=new BE;Y(d);K(d);}a:{b:{if(!a.mu){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CA(a,b);b=b+1|0;}}if(!a.ec)Iv(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new BD;Y(d);K(d);}e=d.bw;if(b<e){f=Bb(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(IR(d,b)|Ie(d,f));}else{h=d.C.data;h[g]=h[g]&IR(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&Ie(d,f);}}HA(d);}}}}return a;}
function AAG(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(b.gX)a.gX=1;c=a.cn;if(!(c^b.cn)){if(!c)F6(a.L,b.L);else De(a.L,b.L);}else if(c)F$(a.L,b.L);else{FA(a.L,b.L);De(a.L,b.L);a.cn=1;}if(!a.fO&&CY(b)!==null){c=a.bj;if(!(c^b.bj)){if(!c)F6(a.H,CY(b));else De(a.H,CY(b));}else if(c)F$(a.H,CY(b));else{FA(a.H,CY(b));De(a.H,CY(b));a.bj=1;}}else{c=a.bj;d=a.bJ;if(d!==null){if(!c){e=new PV;e.x6=a;e.uF=c;e.vU=d;e.wB=b;Bv(e);a.bJ=e;}else{e=new QO;e.yt=a;e.ww=c;e.oi=d;e.oT=b;Bv(e);a.bJ=e;}}else{if(!a.ec&&MS(a.H)){if(!c){d=new P5;d.AV
=a;d.q6=b;Bv(d);a.bJ=d;}else{d=new P6;d.yw=a;d.wh=b;Bv(d);a.bJ=d;}}else if(!c){d=new P$;d.uQ=a;d.sR=b;d.sd=c;Bv(d);a.bJ=d;}else{d=new P_;d.tj=a;d.tx=b;d.tL=c;Bv(d);a.bJ=d;}a.fO=1;}}}
function YO(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(b.gX)a.gX=1;c=a.cn;if(!(c^b.cn)){if(!c)De(a.L,b.L);else F6(a.L,b.L);}else if(!c)F$(a.L,b.L);else{FA(a.L,b.L);De(a.L,b.L);a.cn=0;}if(!a.fO&&CY(b)!==null){c=a.bj;if(!(c^b.bj)){if(!c)De(a.H,CY(b));else F6(a.H,CY(b));}else if(!c)F$(a.H,CY(b));else{FA(a.H,CY(b));De(a.H,CY(b));a.bj=0;}}else{c=a.bj;d=a.bJ;if(d!==null){if(!c){e=new PX;e.yi=a;e.uT=c;e.o9=d;e.st=b;Bv(e);a.bJ=e;}else{e=new PY;e.yD=a;e.t5=c;e.n6=d;e.uD=b;Bv(e);a.bJ=e;}}else{if(!a.ec&&MS(a.H)){if(!c){d=new PT;d.yy
=a;d.qA=b;Bv(d);a.bJ=d;}else{d=new PU;d.AR=a;d.qJ=b;Bv(d);a.bJ=d;}}else if(!c){d=new PZ;d.xN=a;d.wQ=b;d.tr=c;Bv(d);a.bJ=d;}else{d=new PS;d.tp=a;d.ue=b;d.sx=c;Bv(d);a.bJ=d;}a.fO=1;}}}
function C4(a,b){var c;c=a.bJ;if(c!==null)return a.bj^c.l(b);return a.bj^DA(a.H,b);}
function CY(a){if(!a.fO)return a.H;return null;}
function ALy(a){return a.L;}
function ATN(a){var b,c;if(a.bJ!==null)return a;b=CY(a);c=new PW;c.x1=a;c.jc=b;Bv(c);return EC(c,a.bj);}
function APE(a){var b,c,d;b=new M;O(b);c=HK(a.H,0);while(c>=0){I1(b,GS(c));BL(b,124);c=HK(a.H,c+1|0);}d=b.I;if(d>0)X6(b,d-1|0);return N(b);}
function ALP(a){return a.gX;}
function JW(){var a=this;Bu.call(a);a.AL=null;a.Aq=null;}
function Ed(){BK.call(this);this.K=null;}
function Di(a,b,c,d){Lo(a,c);a.K=b;a.ih=d;}
function AVJ(a){return a.K;}
function ASs(a,b){return !a.K.b2(b)&&!a.d.b2(b)?0:1;}
function AT$(a,b){return 1;}
function AO9(a){var b;a.cp=1;b=a.d;if(b!==null&&!b.cp){b=b.fV();if(b!==null){a.d.cp=1;a.d=b;}a.d.eK();}b=a.K;if(b!==null){if(!b.cp){b=b.fV();if(b!==null){a.K.cp=1;a.K=b;}a.K.eK();}else if(b instanceof GV&&b.eR.le)a.K=b.d;}}
function C5(){Ed.call(this);this.be=null;}
function AXK(a,b,c){var d=new C5();E7(d,a,b,c);return d;}
function E7(a,b,c,d){Di(a,b,c,d);a.be=b;}
function AHV(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b8()|0)<=d.x){f=a.be.bA(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.be.b8()|0;e=e+(-1)|0;}return f;}
function Fl(){C5.call(this);this.ka=null;}
function AWJ(a,b,c,d){var e=new Fl();TL(e,a,b,c,d);return e;}
function TL(a,b,c,d,e){E7(a,c,d,e);a.ka=b;}
function AI2(a,b,c,d){var e,f,g,h,i;e=a.ka;f=e.e$;g=e.e5;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b8()|0)>d.x)break a;i=a.be.bA(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.be.b8()|0;h=h+(-1)|0;}return i;}if((b+a.be.b8()|0)>d.x){d.dC=1;return (-1);}i=a.be.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CV=G(Ed);
function AIe(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.K.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EL=G(C5);
function AOW(a,b,c,d){var e;e=a.K.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AV4(a,b){a.d=b;a.K.Q(b);}
var Yk=G(C5);
function AVp(a,b,c,d){while((b+a.be.b8()|0)<=d.x&&a.be.bA(b,c)>0){b=b+a.be.b8()|0;}return a.d.c(b,c,d);}
function APA(a,b,c,d){var e,f,g;e=a.d.cs(b,c,d);if(e<0)return (-1);f=e-a.be.b8()|0;while(f>=b&&a.be.bA(f,c)>0){g=f-a.be.b8()|0;e=f;f=g;}return e;}
function Bc(){var a=this;B.call(a);a.mN=null;a.lG=null;}
function AFD(a,b){if(!b&&a.mN===null)a.mN=a.D();else if(b&&a.lG===null)a.lG=EC(a.D(),1);if(b)return a.lG;return a.mN;}
var Dj=G(BE);
function N2(){var a=this;Hb.call(a);a.e$=0;a.e5=0;}
function APJ(a){var b,c,d,e,f;b=a.e$;c=a.e5;d=c!=2147483647?L5(c):C(30);e=new M;O(e);BL(e,123);f=V(e,b);BL(f,44);BL(H(f,d),125);return N(e);}
var PD=G(BK);
function ANZ(a,b,c,d){return b;}
function AQw(a,b){return 0;}
function Y8(){var a=this;B.call(a);a.C=null;a.bw=0;}
function AV2(){var a=new Y8();AJU(a);return a;}
function AJU(a){a.C=BM(0);}
function Md(a,b){var c,d;c=b/32|0;if(b>=a.bw){I4(a,c+1|0);a.bw=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function Iv(a,b,c){var d,e,f,g,h;d=BG(b,c);if(d>0){e=new BD;Y(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bw){I4(a,f+1|0);a.bw=c;}if(d==f){g=a.C.data;g[d]=g[d]|Ie(a,b)&IR(a,c);}else{g=a.C.data;g[d]=g[d]|Ie(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|IR(a,c);}}}
function Ie(a,b){return (-1)<<(b%32|0);}
function IR(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Na(a,b){var c,d,e,f;c=b/32|0;d=a.C.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bw-1|0))HA(a);}}
function DA(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HK(a,b){var c,d,e,f;c=a.bw;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return IY(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IY(e[f])|0;f=f+1|0;}return (-1);}
function I4(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.C=MZ(a.C,c);}
function HA(a){var b,c,d;b=(a.bw+31|0)/32|0;a.bw=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=O1(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.bw=a.bw-32|0;}a.bw=a.bw-d|0;}}
function De(a,b){var c,d,e,f;c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bw=Bb(a.bw,b.bw);HA(a);}
function F$(a,b){var c,d,e;c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}HA(a);}
function F6(a,b){var c,d,e;c=Bd(a.bw,b.bw);a.bw=c;I4(a,(c+31|0)/32|0);c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function FA(a,b){var c,d,e;c=Bd(a.bw,b.bw);a.bw=c;I4(a,(c+31|0)/32|0);c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}HA(a);}
function MS(a){return a.bw?0:1;}
function NM(){var a=this;B2.call(a);a.qN=null;a.x0=0;}
function R_(){var a=this;B2.call(a);a.nc=null;a.mI=null;}
function AE7(a,b){var c=new R_();AG3(c,a,b);return c;}
function AG3(a,b,c){BW(a);a.nc=b;a.mI=c;}
function AIV(a,b,c,d){var e,f,g,h,i;e=a.nc.c(b,c,d);if(e<0)a:{f=a.mI;g=d.cW;e=d.x;h=b+1|0;e=BG(h,e);if(e>0){d.dC=1;e=(-1);}else{i=P(c,b);if(!f.qN.l(i))e=(-1);else{if(CI(i)){if(e<0&&C7(P(c,h))){e=(-1);break a;}}else if(C7(i)&&b>g&&CI(P(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AQf(a,b){a.d=b;a.mI.d=b;a.nc.Q(b);}
function AJG(a,b){return 1;}
function AJh(a,b){return 1;}
function DM(){var a=this;B2.call(a);a.d3=null;a.zj=0;}
function ANT(a){var b=new DM();V1(b,a);return b;}
function V1(a,b){BW(a);a.d3=b.jQ();a.zj=b.bj;}
function ALp(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=P(c,b);if(a.l(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(HU(g,f)&&a.l(ED(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AL4(a,b){return a.d3.l(b);}
function AIR(a,b){if(b instanceof D5)return KY(a.d3,b.gn);if(b instanceof Ew)return KY(a.d3,b.dv);if(b instanceof DM)return IW(a.d3,b.d3);if(!(b instanceof Ep))return 1;return IW(a.d3,b.fB);}
function ANI(a){return a.d3;}
function AS7(a,b){a.d=b;}
function ALC(a,b){return 1;}
var JT=G(DM);
function ANx(a,b){return a.d3.l(G2(GZ(b)));}
function ABJ(){var a=this;B6.call(a);a.rF=null;a.yW=0;}
function AML(a){var b=new ABJ();APR(b,a);return b;}
function APR(a,b){DH(a);a.rF=b.jQ();a.yW=b.bj;}
function AN0(a,b,c){return !a.rF.l(Fb(EK(P(c,b))))?(-1):1;}
function Ep(){var a=this;B6.call(a);a.fB=null;a.zD=0;}
function ATE(a){var b=new Ep();AQ7(b,a);return b;}
function AQ7(a,b){DH(a);a.fB=b.jQ();a.zD=b.bj;}
function Nh(a,b,c){return !a.fB.l(P(c,b))?(-1):1;}
function AQA(a,b){if(b instanceof Ew)return KY(a.fB,b.dv);if(b instanceof Ep)return IW(a.fB,b.fB);if(!(b instanceof DM)){if(!(b instanceof D5))return 1;return 0;}return IW(a.fB,b.d3);}
function Qi(){var a=this;B2.call(a);a.hh=null;a.m2=null;a.j_=0;}
function ATQ(a,b){var c=new Qi();AIg(c,a,b);return c;}
function AIg(a,b,c){BW(a);a.hh=b;a.j_=c;}
function AOU(a,b){a.d=b;}
function Sm(a){if(a.m2===null)a.m2=Gd(a.hh);return a.m2;}
function AHI(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BM(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Em([k,l]):Em([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.j_;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.hh.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.j_==3){k=f[0];m=a.hh.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.j_==2){b=f[0];m=a.hh.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AJx(a,b){return b instanceof Qi&&!Bn(Sm(b),Sm(a))?0:1;}
function ATP(a,b){return 1;}
function Ew(){B6.call(this);this.dv=0;}
function ACk(a){var b=new Ew();ARe(b,a);return b;}
function ARe(a,b){DH(a);a.dv=b;}
function AND(a){return 1;}
function AMG(a,b,c){return a.dv!=P(c,b)?(-1):1;}
function ALm(a,b,c,d){var e,f,g;if(!(c instanceof BA))return H9(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=G8(c,a.dv,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ANM(a,b,c,d,e){var f;if(!(d instanceof BA))return Im(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gl(d,a.dv,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATJ(a,b){if(b instanceof Ew)return b.dv!=a.dv?0:1;if(!(b instanceof Ep)){if(b instanceof DM)return b.l(a.dv);if(!(b instanceof D5))return 1;return 0;}return Nh(b,0,Y9(a.dv))<=0?0:1;}
function AGL(){B6.call(this);this.nT=0;}
function ARz(a){var b=new AGL();APv(b,a);return b;}
function APv(a,b){DH(a);a.nT=Fb(EK(b));}
function AHz(a,b,c){return a.nT!=Fb(EK(P(c,b)))?(-1):1;}
function AAI(){var a=this;B6.call(a);a.wH=0;a.o6=0;}
function AJ1(a){var b=new AAI();ARZ(b,a);return b;}
function ARZ(a,b){DH(a);a.wH=b;a.o6=H5(b);}
function AH5(a,b,c){return a.wH!=P(c,b)&&a.o6!=P(c,b)?(-1):1;}
function Fs(){var a=this;B2.call(a);a.h7=0;a.lw=null;a.kO=null;a.kI=0;}
function AYx(a,b){var c=new Fs();Po(c,a,b);return c;}
function Po(a,b,c){BW(a);a.h7=1;a.kO=b;a.kI=c;}
function AU0(a,b){a.d=b;}
function AQg(a,b,c,d){var e,f,g,h,i,j,k,l;e=BM(4);f=d.x;if(b>=f)return (-1);g=Lb(a,b,c,f);h=b+a.h7|0;i=AGj(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DB(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lb(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AGj(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.h7|0;if(h>=f){b=k;break a;}g=Lb(a,h,c,f);b=k;}}}if(b!=a.kI)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.kO.data[g])break;g=g+1|0;}return (-1);}
function YM(a){var b,c;if(a.lw===null){b=new M;O(b);c=0;while(c<a.kI){I1(b,GS(a.kO.data[c]));c=c+1|0;}a.lw=N(b);}return a.lw;}
function Lb(a,b,c,d){var e,f,g;a.h7=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(HU(e,f)){g=BU(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CI(g[0])&&C7(g[1])?ED(g[0],g[1]):g[0];a.h7=2;}}return e;}
function AN1(a,b){return b instanceof Fs&&!Bn(YM(b),YM(a))?0:1;}
function ARw(a,b){return 1;}
var ZB=G(Fs);
var Vn=G(Fs);
var AAt=G(CV);
function AKs(a,b,c,d){var e;while(true){e=a.K.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Rr=G(CV);
function APm(a,b,c,d){var e;e=a.K.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.K.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var F9=G(CV);
function AS4(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.K.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AUk(a,b){a.d=b;a.K.Q(b);}
var Q2=G(F9);
function ANH(a,b,c,d){var e;e=a.K.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function APL(a,b){a.d=b;}
function Fq(){var a=this;CV.call(a);a.gv=null;a.dG=0;}
function A2m(a,b,c,d,e){var f=new Fq();JR(f,a,b,c,d,e);return f;}
function JR(a,b,c,d,e,f){Di(a,c,d,e);a.gv=b;a.dG=f;}
function AVV(a,b,c,d){var e,f;e=NR(d,a.dG);if(!a.K.J(d))return a.d.c(b,c,d);if(e>=a.gv.e5)return a.d.c(b,c,d);f=a.dG;e=e+1|0;En(d,f,e);f=a.K.c(b,c,d);if(f>=0){En(d,a.dG,0);return f;}f=a.dG;e=e+(-1)|0;En(d,f,e);if(e>=a.gv.e$)return a.d.c(b,c,d);En(d,a.dG,0);return (-1);}
var Oe=G(Fq);
function AM8(a,b,c,d){var e,f,g;e=0;f=a.gv.e5;a:{while(true){g=a.K.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gv.e$)return (-1);return a.d.c(b,c,d);}
var Te=G(CV);
function AU8(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.K.c(b,c,d);}
var Sl=G(F9);
function AJI(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.K.c(b,c,d);return e;}
var Wu=G(Fq);
function AID(a,b,c,d){var e,f,g;e=NR(d,a.dG);if(!a.K.J(d))return a.d.c(b,c,d);f=a.gv;if(e>=f.e5){En(d,a.dG,0);return a.d.c(b,c,d);}if(e<f.e$){En(d,a.dG,e+1|0);g=a.K.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){En(d,a.dG,0);return g;}En(d,a.dG,e+1|0);g=a.K.c(b,c,d);}return g;}
var Tg=G(Ed);
function AVF(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cv(b,e,c,d);return a.d.c(b,c,d);}
function ATj(a,b,c,d){var e;e=d.x;if(a.d.cv(b,e,c,d)>=0)return b;return (-1);}
function PR(){Ed.call(this);this.lE=null;}
function AQC(a,b,c,d){var e,f;e=d.x;f=Ww(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cv(b,e,c,d);return a.d.c(b,c,d);}
function AHN(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cs(b,c,d);if(f<0)return (-1);g=Ww(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.d.cv(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.lE.ib(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Ww(a,b,c,d){while(true){if(b>=c)return (-1);if(a.lE.ib(P(d,b)))break;b=b+1|0;}return b;}
var E1=G();
var A2n=null;var A2o=null;function Q6(b){var c;if(!(b&1)){c=A2o;if(c!==null)return c;c=new W4;A2o=c;return c;}c=A2n;if(c!==null)return c;c=new W3;A2n=c;return c;}
var AAv=G(C5);
function AIE(a,b,c,d){var e;a:{while(true){if((b+a.be.b8()|0)>d.x)break a;e=a.be.bA(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var Yf=G(EL);
function APl(a,b,c,d){var e;if((b+a.be.b8()|0)<=d.x){e=a.be.bA(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var QI=G(Fl);
function ASu(a,b,c,d){var e,f,g,h,i;e=a.ka;f=e.e$;g=e.e5;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b8()|0)>d.x)break a;i=a.be.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.be.b8()|0)>d.x){d.dC=1;return (-1);}i=a.be.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Sh=G(C5);
function AQu(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.be.b8()|0)<=d.x){e=a.be.bA(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var VE=G(EL);
function AIQ(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.K.c(b,c,d);}
var SZ=G(Fl);
function ASP(a,b,c,d){var e,f,g,h,i,j;e=a.ka;f=e.e$;g=e.e5;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.be.b8()|0)<=d.x){i=a.be.bA(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b8()|0)>d.x){d.dC=1;return (-1);}j=a.be.bA(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var K9=G(BK);
function AOr(a,b,c,d){if(b&&!(d.fP&&b==d.cW))return (-1);return a.d.c(b,c,d);}
function ANh(a,b){return 0;}
function ACx(){BK.call(this);this.v3=0;}
function ATD(a){var b=new ACx();ANA(b,a);return b;}
function ANA(a,b){BW(a);a.v3=b;}
function AJe(a,b,c,d){var e,f,g;e=b<d.x?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.jG?0:d.cW;return (e!=32&&!So(a,e,b,g,c)?0:1)^(f!=32&&!So(a,f,b-1|0,g,c)?0:1)^a.v3?(-1):a.d.c(b,c,d);}
function AJs(a,b){return 0;}
function So(a,b,c,d,e){var f;if(!Kc(b)&&b!=95){a:{if(Cy(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kc(f))return 0;if(Cy(f)!=6)return 1;}}return 1;}return 0;}
var PI=G(BK);
function ANz(a,b,c,d){if(b!=d.im)return (-1);return a.d.c(b,c,d);}
function AVQ(a,b){return 0;}
function Zd(){BK.call(this);this.gF=0;}
function AX0(a){var b=new Zd();AF8(b,a);return b;}
function AF8(a,b){BW(a);a.gF=b;}
function ARj(a,b,c,d){var e,f,g;e=!d.fP?J(c):d.x;if(b>=e){BQ(d,a.gF,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BQ(d,a.gF,0);return a.d.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BQ(d,a.gF,0);return a.d.c(b,c,d);}
function AKg(a,b){var c;c=!Dr(b,a.gF)?0:1;BQ(b,a.gF,(-1));return c;}
var YG=G(BK);
function AQb(a,b,c,d){if(b<(d.jG?J(c):d.x))return (-1);d.dC=1;d.z5=1;return a.d.c(b,c,d);}
function AHx(a,b){return 0;}
function Ot(){BK.call(this);this.sF=null;}
function AJ8(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fP&&b==d.cW)break a;if(a.sF.t$(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AMf(a,b){return 0;}
var AGt=G(B2);
function AYh(){var a=new AGt();AP1(a);return a;}
function AP1(a){BW(a);}
function AVd(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dC=1;return (-1);}g=P(c,b);if(CI(g)){h=b+2|0;if(h<=e&&HU(g,P(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AJz(a,b){a.d=b;}
function APS(a){return (-2147483602);}
function AJy(a,b){return 1;}
function ABV(){B2.call(this);this.ma=null;}
function AXR(a){var b=new ABV();AKe(b,a);return b;}
function AKe(a,b){BW(a);a.ma=b;}
function AP4(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dC=1;return (-1);}g=P(c,b);if(CI(g)){b=b+2|0;if(b<=e){h=P(c,f);if(HU(g,h))return a.ma.ib(ED(g,h))?(-1):a.d.c(b,c,d);}}return a.ma.ib(g)?(-1):a.d.c(f,c,d);}
function ASf(a,b){a.d=b;}
function AHs(a){return (-2147483602);}
function AVv(a,b){return 1;}
function AGg(){BK.call(this);this.hZ=0;}
function AXg(a){var b=new AGg();AMa(b,a);return b;}
function AMa(a,b){BW(a);a.hZ=b;}
function AN7(a,b,c,d){var e;e=!d.fP?J(c):d.x;if(b>=e){BQ(d,a.hZ,0);return a.d.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BQ(d,a.hZ,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AL$(a,b){var c;c=!Dr(b,a.hZ)?0:1;BQ(b,a.hZ,(-1));return c;}
function AEn(){BK.call(this);this.h6=0;}
function AW1(a){var b=new AEn();AMM(b,a);return b;}
function AMM(a,b){BW(a);a.h6=b;}
function AP_(a,b,c,d){if((!d.fP?J(c)-b|0:d.x-b|0)<=0){BQ(d,a.h6,0);return a.d.c(b,c,d);}if(P(c,b)!=10)return (-1);BQ(d,a.h6,1);return a.d.c(b+1|0,c,d);}
function AL0(a,b){var c;c=!Dr(b,a.h6)?0:1;BQ(b,a.h6,(-1));return c;}
function AAF(){BK.call(this);this.f6=0;}
function AWj(a){var b=new AAF();AVY(b,a);return b;}
function AVY(a,b){BW(a);a.f6=b;}
function ANa(a,b,c,d){var e,f,g;e=!d.fP?J(c)-b|0:d.x-b|0;if(!e){BQ(d,a.f6,0);return a.d.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BQ(d,a.f6,0);return a.d.c(b,c,d);case 13:if(g!=10){BQ(d,a.f6,0);return a.d.c(b,c,d);}BQ(d,a.f6,0);return a.d.c(b,c,d);default:}return (-1);}
function AKk(a,b){var c;c=!Dr(b,a.f6)?0:1;BQ(b,a.f6,(-1));return c;}
function Hy(){var a=this;B2.call(a);a.oA=0;a.hb=0;}
function AYr(a,b){var c=new Hy();Qx(c,a,b);return c;}
function Qx(a,b,c){BW(a);a.oA=b;a.hb=c;}
function AIJ(a,b,c,d){var e,f,g,h;e=Gx(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BQ(d,a.hb,J(e));return a.d.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&H5(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ARt(a,b){a.d=b;}
function Gx(a,b){var c,d;c=a.oA;d=FQ(b,c);c=I9(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.md)?Cg(b.md,d,c):null;}
function ARN(a,b){var c;c=!Dr(b,a.hb)?0:1;BQ(b,a.hb,(-1));return c;}
var AGn=G(Hy);
function AWo(a,b){var c=new AGn();AUa(c,a,b);return c;}
function AUa(a,b,c){Qx(a,b,c);}
function AKr(a,b,c,d){var e,f;e=Gx(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=!V0(c,e,b)?(-1):J(e);if(f<0)return (-1);BQ(d,a.hb,f);return a.d.c(b+f|0,c,d);}return (-1);}
function ATY(a,b,c,d){var e,f;e=Gx(a,d);f=d.cW;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=ACw(c,e,b);if(b<0)return (-1);if(a.d.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AIq(a,b,c,d,e){var f,g;f=Gx(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=RC(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function APc(a,b){return 1;}
var ADq=G(Hy);
function AW2(a,b){var c=new ADq();AL8(c,a,b);return c;}
function AL8(a,b,c){Qx(a,b,c);}
function AOH(a,b,c,d){var e,f;e=Gx(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BQ(d,a.hb,J(e));return a.d.c(b+J(e)|0,c,d);}if(Fb(EK(P(e,f)))!=Fb(EK(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PC=G(GG);
function ALS(a,b,c,d,e){N6(a,b,c,d,e);return a;}
function AJk(a,b,c,d){Zm(a,b,c,d);return a;}
function AJT(a,b){Ki(a,b);}
function ATn(a,b,c){ZF(a,b,c);return a;}
function Ti(){var a=this;B6.call(a);a.cA=null;a.lz=null;a.ml=null;}
function AKM(a,b,c){return !K7(a,c,b)?(-1):a.bR;}
function AJa(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=P(a.cA,a.bR-1|0);a:{while(true){g=a.bR;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&K7(a,c,b))break;b=b+Uf(a.lz,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bR|0,c,d)>=0)break;b=b+1|0;}return b;}
function AMd(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cA,0);g=(J(d)-c|0)-a.bR|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&K7(a,d,c))break;c=c-Uf(a.ml,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bR|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMQ(a,b){var c;if(b instanceof Ew)return b.dv!=P(a.cA,0)?0:1;if(b instanceof Ep)return Nh(b,0,Cg(a.cA,0,1))<=0?0:1;if(!(b instanceof DM)){if(!(b instanceof D5))return 1;return J(a.cA)>1&&b.gn==ED(P(a.cA,0),P(a.cA,1))?1:0;}a:{b:{b=b;if(!b.l(P(a.cA,0))){if(J(a.cA)<=1)break b;if(!b.l(ED(P(a.cA,0),P(a.cA,1))))break b;}c=1;break a;}c=0;}return c;}
function K7(a,b,c){var d;d=0;while(d<a.bR){if(P(b,d+c|0)!=P(a.cA,d))return 0;d=d+1|0;}return 1;}
function AAE(){B6.call(this);this.jK=null;}
function AYw(a){var b=new AAE();ATK(b,a);return b;}
function ATK(a,b){var c,d,e;DH(a);c=new M;O(c);d=0;while(true){e=BG(d,b.I);if(e>=0){a.jK=N(c);a.bR=c.I;return;}if(d<0)break;if(e>=0)break;BL(c,Fb(EK(b.B.data[d])));d=d+1|0;}b=new BD;Y(b);K(b);}
function AOP(a,b,c){var d;d=0;while(true){if(d>=J(a.jK))return J(a.jK);if(P(a.jK,d)!=Fb(EK(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Ok(){B6.call(this);this.hX=null;}
function ASx(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.hX))return J(a.hX);e=P(a.hX,d);f=b+d|0;if(e!=P(c,f)&&H5(P(a.hX,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hx=G();
var A2p=null;var A2q=null;var A2l=null;function AR5(){AR5=Bq(Hx);AK$();}
function AK$(){A2p=AX$();A2q=AXa();A2l=I($rt_arraycls(B),[I(B,[C(426),AYs()]),I(B,[C(427),AWg()]),I(B,[C(428),AX7()]),I(B,[C(429),AYc()]),I(B,[C(430),A2q]),I(B,[C(431),AXl()]),I(B,[C(432),AW$()]),I(B,[C(433),AWr()]),I(B,[C(434),AWn()]),I(B,[C(435),AWw()]),I(B,[C(436),AWL()]),I(B,[C(437),AWu()]),I(B,[C(438),AXJ()]),I(B,[C(439),AWa()]),I(B,[C(440),AX_()]),I(B,[C(441),AWK()]),I(B,[C(442),AXj()]),I(B,[C(443),AWI()]),I(B,[C(444),AXk()]),I(B,[C(445),AWz()]),I(B,[C(446),AYg()]),I(B,[C(447),AWD()]),I(B,[C(448),AXp()]),
I(B,[C(449),AX5()]),I(B,[C(450),AX1()]),I(B,[C(451),AYd()]),I(B,[C(452),AWy()]),I(B,[C(453),AXP()]),I(B,[C(454),A2p]),I(B,[C(455),AXw()]),I(B,[C(456),AWs()]),I(B,[C(457),A2p]),I(B,[C(458),AV$()]),I(B,[C(459),A2q]),I(B,[C(460),AWU()]),I(B,[C(461),Q(0,127)]),I(B,[C(462),Q(128,255)]),I(B,[C(463),Q(256,383)]),I(B,[C(464),Q(384,591)]),I(B,[C(465),Q(592,687)]),I(B,[C(466),Q(688,767)]),I(B,[C(467),Q(768,879)]),I(B,[C(468),Q(880,1023)]),I(B,[C(469),Q(1024,1279)]),I(B,[C(470),Q(1280,1327)]),I(B,[C(471),Q(1328,1423)]),
I(B,[C(472),Q(1424,1535)]),I(B,[C(473),Q(1536,1791)]),I(B,[C(474),Q(1792,1871)]),I(B,[C(475),Q(1872,1919)]),I(B,[C(476),Q(1920,1983)]),I(B,[C(477),Q(2304,2431)]),I(B,[C(478),Q(2432,2559)]),I(B,[C(479),Q(2560,2687)]),I(B,[C(480),Q(2688,2815)]),I(B,[C(481),Q(2816,2943)]),I(B,[C(482),Q(2944,3071)]),I(B,[C(483),Q(3072,3199)]),I(B,[C(484),Q(3200,3327)]),I(B,[C(485),Q(3328,3455)]),I(B,[C(486),Q(3456,3583)]),I(B,[C(487),Q(3584,3711)]),I(B,[C(488),Q(3712,3839)]),I(B,[C(489),Q(3840,4095)]),I(B,[C(490),Q(4096,4255)]),
I(B,[C(491),Q(4256,4351)]),I(B,[C(492),Q(4352,4607)]),I(B,[C(493),Q(4608,4991)]),I(B,[C(494),Q(4992,5023)]),I(B,[C(495),Q(5024,5119)]),I(B,[C(496),Q(5120,5759)]),I(B,[C(497),Q(5760,5791)]),I(B,[C(498),Q(5792,5887)]),I(B,[C(499),Q(5888,5919)]),I(B,[C(500),Q(5920,5951)]),I(B,[C(501),Q(5952,5983)]),I(B,[C(502),Q(5984,6015)]),I(B,[C(503),Q(6016,6143)]),I(B,[C(504),Q(6144,6319)]),I(B,[C(505),Q(6400,6479)]),I(B,[C(506),Q(6480,6527)]),I(B,[C(507),Q(6528,6623)]),I(B,[C(508),Q(6624,6655)]),I(B,[C(509),Q(6656,6687)]),
I(B,[C(510),Q(7424,7551)]),I(B,[C(511),Q(7552,7615)]),I(B,[C(512),Q(7616,7679)]),I(B,[C(513),Q(7680,7935)]),I(B,[C(514),Q(7936,8191)]),I(B,[C(515),Q(8192,8303)]),I(B,[C(516),Q(8304,8351)]),I(B,[C(517),Q(8352,8399)]),I(B,[C(518),Q(8400,8447)]),I(B,[C(519),Q(8448,8527)]),I(B,[C(520),Q(8528,8591)]),I(B,[C(521),Q(8592,8703)]),I(B,[C(522),Q(8704,8959)]),I(B,[C(523),Q(8960,9215)]),I(B,[C(524),Q(9216,9279)]),I(B,[C(525),Q(9280,9311)]),I(B,[C(526),Q(9312,9471)]),I(B,[C(527),Q(9472,9599)]),I(B,[C(528),Q(9600,9631)]),
I(B,[C(529),Q(9632,9727)]),I(B,[C(530),Q(9728,9983)]),I(B,[C(531),Q(9984,10175)]),I(B,[C(532),Q(10176,10223)]),I(B,[C(533),Q(10224,10239)]),I(B,[C(534),Q(10240,10495)]),I(B,[C(535),Q(10496,10623)]),I(B,[C(536),Q(10624,10751)]),I(B,[C(537),Q(10752,11007)]),I(B,[C(538),Q(11008,11263)]),I(B,[C(539),Q(11264,11359)]),I(B,[C(540),Q(11392,11519)]),I(B,[C(541),Q(11520,11567)]),I(B,[C(542),Q(11568,11647)]),I(B,[C(543),Q(11648,11743)]),I(B,[C(544),Q(11776,11903)]),I(B,[C(545),Q(11904,12031)]),I(B,[C(546),Q(12032,12255)]),
I(B,[C(547),Q(12272,12287)]),I(B,[C(548),Q(12288,12351)]),I(B,[C(549),Q(12352,12447)]),I(B,[C(550),Q(12448,12543)]),I(B,[C(551),Q(12544,12591)]),I(B,[C(552),Q(12592,12687)]),I(B,[C(553),Q(12688,12703)]),I(B,[C(554),Q(12704,12735)]),I(B,[C(555),Q(12736,12783)]),I(B,[C(556),Q(12784,12799)]),I(B,[C(557),Q(12800,13055)]),I(B,[C(558),Q(13056,13311)]),I(B,[C(559),Q(13312,19893)]),I(B,[C(560),Q(19904,19967)]),I(B,[C(561),Q(19968,40959)]),I(B,[C(562),Q(40960,42127)]),I(B,[C(563),Q(42128,42191)]),I(B,[C(564),Q(42752,
42783)]),I(B,[C(565),Q(43008,43055)]),I(B,[C(566),Q(44032,55203)]),I(B,[C(567),Q(55296,56191)]),I(B,[C(568),Q(56192,56319)]),I(B,[C(569),Q(56320,57343)]),I(B,[C(570),Q(57344,63743)]),I(B,[C(571),Q(63744,64255)]),I(B,[C(572),Q(64256,64335)]),I(B,[C(573),Q(64336,65023)]),I(B,[C(574),Q(65024,65039)]),I(B,[C(575),Q(65040,65055)]),I(B,[C(576),Q(65056,65071)]),I(B,[C(577),Q(65072,65103)]),I(B,[C(578),Q(65104,65135)]),I(B,[C(579),Q(65136,65279)]),I(B,[C(580),Q(65280,65519)]),I(B,[C(581),Q(0,1114111)]),I(B,[C(582),
AWv()]),I(B,[C(583),BR(0,1)]),I(B,[C(584),Jm(62,1)]),I(B,[C(585),BR(1,1)]),I(B,[C(586),BR(2,1)]),I(B,[C(587),BR(3,0)]),I(B,[C(588),BR(4,0)]),I(B,[C(589),BR(5,1)]),I(B,[C(590),Jm(448,1)]),I(B,[C(591),BR(6,1)]),I(B,[C(592),BR(7,0)]),I(B,[C(593),BR(8,1)]),I(B,[C(594),Jm(3584,1)]),I(B,[C(595),BR(9,1)]),I(B,[C(596),BR(10,1)]),I(B,[C(597),BR(11,1)]),I(B,[C(598),Jm(28672,0)]),I(B,[C(599),BR(12,0)]),I(B,[C(600),BR(13,0)]),I(B,[C(601),BR(14,0)]),I(B,[C(602),AW4(983040,1,1)]),I(B,[C(603),BR(15,0)]),I(B,[C(604),BR(16,
1)]),I(B,[C(605),BR(18,1)]),I(B,[C(606),AXf(19,0,1)]),I(B,[C(607),Jm(1643118592,1)]),I(B,[C(608),BR(20,0)]),I(B,[C(609),BR(21,0)]),I(B,[C(610),BR(22,0)]),I(B,[C(611),BR(23,0)]),I(B,[C(612),BR(24,1)]),I(B,[C(613),Jm(2113929216,1)]),I(B,[C(614),BR(25,1)]),I(B,[C(615),BR(26,0)]),I(B,[C(616),BR(27,0)]),I(B,[C(617),BR(28,1)]),I(B,[C(618),BR(29,0)]),I(B,[C(619),BR(30,0)])]);}
function Nr(){B6.call(this);this.r0=0;}
function ASE(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.r0!=G2(GZ(ED(e,d)))?(-1):2;}
function LE(){B2.call(this);this.gU=0;}
function AP0(a){var b=new LE();AJO(b,a);return b;}
function AJO(a,b){BW(a);a.gU=b;}
function AQr(a,b){a.d=b;}
function AKh(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dC=1;return (-1);}f=P(c,b);if(b>d.cW&&CI(P(c,b-1|0)))return (-1);if(a.gU!=f)return (-1);return a.d.c(e,c,d);}
function AMO(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return H9(a,b,c,d);e=d.cW;f=d.x;while(true){if(b>=f)return (-1);g=G8(c,a.gU,b);if(g<0)return (-1);if(g>e&&CI(P(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AKU(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Im(a,b,c,d,e);f=e.cW;a:{while(true){if(c<b)return (-1);g=Gl(d,a.gU,c);if(g<0)break a;if(g<b)break a;if(g>f&&CI(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIn(a,b){if(b instanceof Ew)return 0;if(b instanceof Ep)return 0;if(b instanceof DM)return 0;if(b instanceof D5)return 0;if(b instanceof LW)return 0;if(!(b instanceof LE))return 1;return b.gU!=a.gU?0:1;}
function ATv(a,b){return 1;}
function LW(){B2.call(this);this.gu=0;}
function ANc(a){var b=new LW();AP7(b,a);return b;}
function AP7(a,b){BW(a);a.gu=b;}
function AJR(a,b){a.d=b;}
function AHT(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BG(f,e);if(g>0){d.dC=1;return (-1);}h=P(c,b);if(g<0&&C7(P(c,f)))return (-1);if(a.gu!=h)return (-1);return a.d.c(f,c,d);}
function AQR(a,b,c,d){var e,f;if(!(c instanceof BA))return H9(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=G8(c,a.gu,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C7(P(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function ASv(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Im(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=Gl(d,a.gu,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C7(P(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKN(a,b){if(b instanceof Ew)return 0;if(b instanceof Ep)return 0;if(b instanceof DM)return 0;if(b instanceof D5)return 0;if(b instanceof LE)return 0;if(!(b instanceof LW))return 1;return b.gu!=a.gu?0:1;}
function AQ4(a,b){return 1;}
function D5(){var a=this;B6.call(a);a.kz=0;a.i_=0;a.gn=0;}
function ARO(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.kz==e&&a.i_==d?2:(-1);}
function APF(a,b,c,d){var e,f;if(!(c instanceof BA))return H9(a,b,c,d);e=d.x;while(b<e){b=G8(c,a.kz,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.i_==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AJQ(a,b,c,d,e){var f;if(!(d instanceof BA))return Im(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gl(d,a.i_,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kz==P(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARA(a,b){if(b instanceof D5)return b.gn!=a.gn?0:1;if(b instanceof DM)return b.l(a.gn);if(b instanceof Ew)return 0;if(!(b instanceof Ep))return 1;return 0;}
var W3=G(E1);
function AJ2(a,b){return b!=10?0:1;}
function ARH(a,b,c){return b!=10?0:1;}
var W4=G(E1);
function ASR(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUO(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFm(){var a=this;B.call(a);a.nB=null;a.kU=null;a.hx=0;a.xu=0;}
function APQ(a){var b=new AFm();ANy(b,a);return b;}
function ANy(a,b){var c,d;while(true){c=a.hx;if(b<c)break;a.hx=c<<1|1;}d=c<<1|1;a.hx=d;d=d+1|0;a.nB=BM(d);a.kU=BM(d);a.xu=b;}
function S1(a,b,c){var d,e,f,g;d=0;e=a.hx;f=b&e;while(true){g=a.nB.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.kU.data[f]=c;}
function Uf(a,b){var c,d,e,f;c=a.hx;d=b&c;e=0;while(true){f=a.nB.data[d];if(!f)break;if(f==b)return a.kU.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xu;}
var AAY=G();
var LA=G(Bc);
function AX$(){var a=new LA();AM9(a);return a;}
function AM9(a){}
function ADy(a){return CA(B4(Ds(),9,13),32);}
var KH=G(Bc);
function AXa(){var a=new KH();ATr(a);return a;}
function ATr(a){}
function AEe(a){return B4(Ds(),48,57);}
var AFf=G(Bc);
function AYs(){var a=new AFf();AMq(a);return a;}
function AMq(a){}
function ASk(a){return B4(Ds(),97,122);}
var AFM=G(Bc);
function AWg(){var a=new AFM();ANC(a);return a;}
function ANC(a){}
function ATx(a){return B4(Ds(),65,90);}
var AFQ=G(Bc);
function AX7(){var a=new AFQ();AJb(a);return a;}
function AJb(a){}
function ALq(a){return B4(Ds(),0,127);}
var Lt=G(Bc);
function AYc(){var a=new Lt();AKu(a);return a;}
function AKu(a){}
function ABZ(a){return B4(B4(Ds(),97,122),65,90);}
var Mc=G(Lt);
function AXl(){var a=new Mc();ANf(a);return a;}
function ANf(a){}
function ACY(a){return B4(ABZ(a),48,57);}
var AHi=G(Bc);
function AW$(){var a=new AHi();APo(a);return a;}
function APo(a){}
function AMN(a){return B4(B4(B4(Ds(),33,64),91,96),123,126);}
var Nc=G(Mc);
function AWr(){var a=new Nc();ARo(a);return a;}
function ARo(a){}
function AAB(a){return B4(B4(B4(ACY(a),33,64),91,96),123,126);}
var ADP=G(Nc);
function AWn(){var a=new ADP();ATf(a);return a;}
function ATf(a){}
function AO$(a){return CA(AAB(a),32);}
var AD9=G(Bc);
function AWw(){var a=new AD9();ASz(a);return a;}
function ASz(a){}
function AKF(a){return CA(CA(Ds(),32),9);}
var ACn=G(Bc);
function AWL(){var a=new ACn();AUE(a);return a;}
function AUE(a){}
function AO7(a){return CA(B4(Ds(),0,31),127);}
var AB9=G(Bc);
function AWu(){var a=new AB9();AJr(a);return a;}
function AJr(a){}
function AUT(a){return B4(B4(B4(Ds(),48,57),97,102),65,70);}
var AFV=G(Bc);
function AXJ(){var a=new AFV();AI1(a);return a;}
function AI1(a){}
function APO(a){var b;b=new UL;b.zi=a;Bv(b);b.N=1;return b;}
var AHr=G(Bc);
function AWa(){var a=new AHr();ARD(a);return a;}
function ARD(a){}
function AHL(a){var b;b=new NE;b.zs=a;Bv(b);b.N=1;return b;}
var AFn=G(Bc);
function AX_(){var a=new AFn();AJd(a);return a;}
function AJd(a){}
function ANd(a){var b;b=new Ty;b.yT=a;Bv(b);return b;}
var AE8=G(Bc);
function AWK(){var a=new AE8();AO8(a);return a;}
function AO8(a){}
function ARW(a){var b;b=new Tx;b.yA=a;Bv(b);return b;}
var AF$=G(Bc);
function AXj(){var a=new AF$();AKq(a);return a;}
function AKq(a){}
function AKC(a){var b;b=new YP;b.Ab=a;Bv(b);Iv(b.L,0,2048);b.N=1;return b;}
var ABg=G(Bc);
function AWI(){var a=new ABg();AJZ(a);return a;}
function AJZ(a){}
function AK2(a){var b;b=new QC;b.zF=a;Bv(b);b.N=1;return b;}
var AAR=G(Bc);
function AXk(){var a=new AAR();AOM(a);return a;}
function AOM(a){}
function AUJ(a){var b;b=new Px;b.AO=a;Bv(b);b.N=1;return b;}
var AFu=G(Bc);
function AWz(){var a=new AFu();APp(a);return a;}
function APp(a){}
function AHA(a){var b;b=new SB;b.zk=a;Bv(b);return b;}
var AFG=G(Bc);
function AYg(){var a=new AFG();AMY(a);return a;}
function AMY(a){}
function AOa(a){var b;b=new Ny;b.xU=a;Bv(b);b.N=1;return b;}
var ACP=G(Bc);
function AWD(){var a=new ACP();AIs(a);return a;}
function AIs(a){}
function ALa(a){var b;b=new NC;b.zJ=a;Bv(b);b.N=1;return b;}
var AEc=G(Bc);
function AXp(){var a=new AEc();AJ4(a);return a;}
function AJ4(a){}
function AMi(a){var b;b=new O3;b.z9=a;Bv(b);b.N=1;return b;}
var AG2=G(Bc);
function AX5(){var a=new AG2();AOh(a);return a;}
function AOh(a){}
function AOc(a){var b;b=new Q8;b.Au=a;Bv(b);b.N=1;return b;}
var AFF=G(Bc);
function AX1(){var a=new AFF();API(a);return a;}
function API(a){}
function ATS(a){var b;b=new Re;b.yV=a;Bv(b);return b;}
var ADm=G(Bc);
function AYd(){var a=new ADm();AJ0(a);return a;}
function AJ0(a){}
function ARf(a){var b;b=new Vh;b.zQ=a;Bv(b);return b;}
var ACN=G(Bc);
function AWy(){var a=new ACN();ARY(a);return a;}
function ARY(a){}
function APG(a){var b;b=new T5;b.xX=a;Bv(b);b.N=1;return b;}
var AHo=G(Bc);
function AXP(){var a=new AHo();AMU(a);return a;}
function AMU(a){}
function AR_(a){var b;b=new NV;b.AW=a;Bv(b);b.N=1;return b;}
var J6=G(Bc);
function AXw(){var a=new J6();ALj(a);return a;}
function ALj(a){}
function AD_(a){return CA(B4(B4(B4(Ds(),97,122),65,90),48,57),95);}
var AGb=G(J6);
function AWs(){var a=new AGb();AM1(a);return a;}
function AM1(a){}
function APu(a){var b;b=EC(AD_(a),1);b.N=1;return b;}
var ADU=G(LA);
function AV$(){var a=new ADU();AUm(a);return a;}
function AUm(a){}
function AI7(a){var b;b=EC(ADy(a),1);b.N=1;return b;}
var ACI=G(KH);
function AWU(){var a=new ACI();ANX(a);return a;}
function ANX(a){}
function AMA(a){var b;b=EC(AEe(a),1);b.N=1;return b;}
function ACc(){var a=this;Bc.call(a);a.rO=0;a.sz=0;}
function Q(a,b){var c=new ACc();AUG(c,a,b);return c;}
function AUG(a,b,c){a.rO=b;a.sz=c;}
function AOu(a){return B4(Ds(),a.rO,a.sz);}
var ACD=G(Bc);
function AWv(){var a=new ACD();AU3(a);return a;}
function AU3(a){}
function AUx(a){return B4(B4(Ds(),65279,65279),65520,65533);}
function ADG(){var a=this;Bc.call(a);a.m7=0;a.kH=0;a.qf=0;}
function BR(a,b){var c=new ADG();AKj(c,a,b);return c;}
function AXf(a,b,c){var d=new ADG();AUI(d,a,b,c);return d;}
function AKj(a,b,c){a.kH=c;a.m7=b;}
function AUI(a,b,c,d){a.qf=d;a.kH=c;a.m7=b;}
function ALW(a){var b;b=AYo(a.m7);if(a.qf)Iv(b.L,0,2048);b.N=a.kH;return b;}
function ADQ(){var a=this;Bc.call(a);a.m6=0;a.kX=0;a.oO=0;}
function Jm(a,b){var c=new ADQ();ALb(c,a,b);return c;}
function AW4(a,b,c){var d=new ADQ();AHC(d,a,b,c);return d;}
function ALb(a,b,c){a.kX=c;a.m6=b;}
function AHC(a,b,c,d){a.oO=d;a.kX=c;a.m6=b;}
function AHB(a){var b;b=new Tr;AET(b,a.m6);if(a.oO)Iv(b.L,0,2048);b.N=a.kX;return b;}
var ACh=G();
var ABH=G();
function ADj(b){var c,d,e,f,g,h,i;c=ASn(Fz(b));d=Kt(c);e=BM(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Kt(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Od(c);h=h+1|0;}return e;}
function Li(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ou(){var a=this;B.call(a);a.qM=0;a.sZ=0;a.q1=null;}
function ALT(a,b,c){var d=new Ou();ATe(d,a,b,c);return d;}
function ATe(a,b,c,d){a.qM=b;a.sZ=c;a.q1=d;}
function AFA(){var a=this;B.call(a);a.pv=null;a.rV=0;}
function ASn(a){var b=new AFA();AKR(b,a);return b;}
function AKR(a,b){a.pv=b;}
var ADi=G();
function Kt(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.pv.data;f=b.rV;b.rV=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Od(b){var c,d;c=Kt(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var M8=G(Bu);
function ABW(){B.call(this);this.Ld=null;}
function Pr(){B.call(this);this.uC=null;}
function AUK(a,b){var c,d,e,f;c=b.data;b=a.uC;d=Dy(c[0]);e=EE(c[1]);AAH(b.e.f,d,e,null,null);GT(Ct(b),A0C);Gq(Ct(b));f=Iz(Ez(),b.fv);b=new M;O(b);H(GH(H(b,C(620)),f),C(200));$rt_globals.console.info($rt_ustr(N(b)));}
function Qf(){B.call(this);this.sA=null;}
function AM6(a,b){JM(a.sA,b);}
function YR(){B.call(this);this.oc=null;}
function AQP(a,b){b.fd=a.oc;}
var ABd=G();
function ABS(b){var c,d,e,f,g,h,i,j;c=AJE();d=CB(b);Bs(c,d);e=0;f=0;while(f<d){g=BV(b,f);h=g.p.data.length;Bs(c,h);i=0;while(i<h){j=UP(g,i);G0(c,e,MC(j));e=e+MC(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RP(c);}
function ABl(b){var c,d,e,f,g,h,i,j,k;c=Be(b);d=R(IC,c);e=d.data;f=0;while(f<c){a:{g=Be(b);if(g!=(-1)){h=Be(b);i=Be(b);if(i==(-1)){j=new IC;j.gx=h;e[g]=j;}else{j=new IC;j.gx=h;j.mp=BM(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].mp.data[k]=Be(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AAa(){B.call(this);this.td=null;}
function AP5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.td;d=Dy(c[0]);c=Yg(d);e=new W5;d=ABl(c);f=ABl(c);g=Be(c);h=R(Mx,g);i=h.data;j=0;while(j<g){k=Be(c);l=Be(c);m=Be(c);n=Be(c);o=Be(c);p=new Mx;p.is=k;p.no=l;p.ir=m;p.nn=n;p.lf=o;i[j]=p;j=j+1|0;}e.Az=d;e.wt=f;e.gt=h;b.gi=e;Kw(b.F,d);Kw(b.E,b.gi.wt);}
function AD$(){Hw.call(this);this.IQ=null;}
var Si=G(0);
function U8(){var a=this;B.call(a);a.Ap=null;a.Ao=null;a.An=null;}
function Ws(){var a=this;B.call(a);a.AF=null;a.AG=null;}
function Yj(){var a=this;X.call(a);a.o_=null;a.Aj=null;}
function ALw(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cn^DA(a.o_,c):0;}
function Yh(){var a=this;X.call(a);a.vq=null;a.wl=null;a.zW=null;}
function AIb(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cn^DA(a.vq,c):0;return a.wl.l(b)&&!d?1:0;}
function PW(){var a=this;X.call(a);a.jc=null;a.x1=null;}
function AOi(a,b){return a.bj^DA(a.jc,b);}
function AMm(a){var b,c,d;b=new M;O(b);c=HK(a.jc,0);while(c>=0){I1(b,GS(c));BL(b,124);c=HK(a.jc,c+1|0);}d=b.I;if(d>0)X6(b,d-1|0);return N(b);}
function P4(){var a=this;X.call(a);a.sk=null;a.zq=null;}
function ART(a,b){return a.sk.l(b);}
function P2(){var a=this;X.call(a);a.kM=0;a.p0=null;a.lK=null;}
function ASD(a,b){return !(a.kM^DA(a.lK.H,b))&&!(a.kM^a.lK.ec^a.p0.l(b))?0:1;}
function P3(){var a=this;X.call(a);a.kV=0;a.vV=null;a.mH=null;}
function AOO(a,b){return !(a.kV^DA(a.mH.H,b))&&!(a.kV^a.mH.ec^a.vV.l(b))?1:0;}
function P7(){var a=this;X.call(a);a.wU=0;a.v1=null;a.vM=null;a.yk=null;}
function AK7(a,b){return a.wU^(!a.v1.l(b)&&!a.vM.l(b)?0:1);}
function P8(){var a=this;X.call(a);a.sw=0;a.r_=null;a.rm=null;a.AU=null;}
function AHt(a,b){return a.sw^(!a.r_.l(b)&&!a.rm.l(b)?0:1)?0:1;}
function P5(){var a=this;X.call(a);a.q6=null;a.AV=null;}
function AMr(a,b){return C4(a.q6,b);}
function P6(){var a=this;X.call(a);a.wh=null;a.yw=null;}
function AOS(a,b){return C4(a.wh,b)?0:1;}
function P$(){var a=this;X.call(a);a.sR=null;a.sd=0;a.uQ=null;}
function AT2(a,b){return !C4(a.sR,b)&&!(a.sd^DA(a.uQ.H,b))?0:1;}
function P_(){var a=this;X.call(a);a.tx=null;a.tL=0;a.tj=null;}
function AKy(a,b){return !C4(a.tx,b)&&!(a.tL^DA(a.tj.H,b))?1:0;}
function PV(){var a=this;X.call(a);a.uF=0;a.vU=null;a.wB=null;a.x6=null;}
function AV7(a,b){return !(a.uF^a.vU.l(b))&&!C4(a.wB,b)?0:1;}
function QO(){var a=this;X.call(a);a.ww=0;a.oi=null;a.oT=null;a.yt=null;}
function AMx(a,b){return !(a.ww^a.oi.l(b))&&!C4(a.oT,b)?1:0;}
function PT(){var a=this;X.call(a);a.qA=null;a.yy=null;}
function AKw(a,b){return C4(a.qA,b);}
function PU(){var a=this;X.call(a);a.qJ=null;a.AR=null;}
function AL7(a,b){return C4(a.qJ,b)?0:1;}
function PZ(){var a=this;X.call(a);a.wQ=null;a.tr=0;a.xN=null;}
function ANB(a,b){return C4(a.wQ,b)&&a.tr^DA(a.xN.H,b)?1:0;}
function PS(){var a=this;X.call(a);a.ue=null;a.sx=0;a.tp=null;}
function ATF(a,b){return C4(a.ue,b)&&a.sx^DA(a.tp.H,b)?0:1;}
function PX(){var a=this;X.call(a);a.uT=0;a.o9=null;a.st=null;a.yi=null;}
function AJn(a,b){return a.uT^a.o9.l(b)&&C4(a.st,b)?1:0;}
function PY(){var a=this;X.call(a);a.t5=0;a.n6=null;a.uD=null;a.yD=null;}
function AQ3(a,b){return a.t5^a.n6.l(b)&&C4(a.uD,b)?0:1;}
var ME=G(0);
function T4(){var a=this;B.call(a);a.yo=null;a.vX=null;a.jy=null;a.cD=null;a.jd=0;a.lC=0;}
function NA(a,b){var c,d,e;c=J(a.jy);if(b>=0&&b<=c){ZN(a.cD,null,(-1),(-1));d=a.cD;d.kb=1;d.eD=b;c=d.im;if(c<0)c=b;d.im=c;b=a.vX.cs(b,a.jy,d);if(b==(-1))a.cD.dC=1;if(b>=0){d=a.cD;if(d.jz){e=d.d5.data;if(e[0]==(-1)){c=d.eD;e[0]=c;e[1]=c;}d.im=JH(d);return 1;}}a.cD.eD=(-1);return 0;}d=new BD;Bi(d,C8(b));K(d);}
function AG0(a){return QH(a.cD,0);}
function ACJ(a){return TA(a.cD,0);}
function AA5(a){return a.cD.jG;}
function ADW(){var a=this;B.call(a);a.Fa=null;a.E$=null;a.Fd=0.0;}
var C2=G(0);
var A0d=null;var A1e=null;var A0f=null;var A0e=null;var A0h=null;var A0g=null;var A0j=null;var A0i=null;var A0l=null;var A0k=null;var A0m=null;function AFT(){AFT=Bq(C2);AUR();}
function AUR(){A0d=CQ(0);A1e=CR(0,0,0);A0f=S(C(621));A0e=CR(255,255,255);A0h=CR(166,214,255);A0g=S(C(622));A0j=S(C(623));A0i=S(C(624));A0l=FF(205,205,205,153);A0k=FF(255,255,255,0);A0m=S(C(126));}
function Cn(){Co.call(this);this.l7=null;}
var A2r=null;var A2s=null;var A2t=null;var A2u=null;var A2v=null;var A2w=null;var A2x=null;var A2y=null;var A2z=null;var A2A=null;var A2B=null;var A2C=null;var A2D=null;var A2E=null;var A2F=null;var A0n=null;function AEW(){AEW=Bq(Cn);AVk();}
function DJ(a,b,c){var d=new Cn();SS(d,a,b,c);return d;}
function AU7(a,b,c,d){var e=new Cn();ABB(e,a,b,c,d);return e;}
function SS(a,b,c,d){AEW();Dd(a,b,c);a.l7=Iw(d,null);}
function ABB(a,b,c,d,e){AEW();Dd(a,b,c);a.l7=Iw(d,e);}
function AVk(){var b;b=new Cn;AFT();SS(b,C(346),0,A1e);A2r=b;A2s=DJ(C(347),1,CR(0,49,191));A2t=DJ(C(349),2,S(C(625)));A2u=DJ(C(48),3,S(C(626)));A2v=DJ(C(352),4,A1e);A2w=DJ(C(353),5,S(C(627)));A2x=DJ(C(355),6,S(C(387)));A2y=DJ(C(49),7,S(C(628)));A2z=DJ(C(358),8,S(C(629)));A2A=AU7(C(360),9,A1e,CR(237,235,252));A2B=AU7(C(361),10,S(C(385)),S(C(630)));A2C=DJ(C(362),11,S(C(387)));A2D=DJ(C(364),12,S(C(388)));A2E=DJ(C(366),13,S(C(631)));b=DJ(C(367),14,S(C(368)));A2F=b;A0n=I(Cn,[A2r,A2s,A2t,A2u,A2v,A2w,A2x,A2y,A2z,A2A,
A2B,A2C,A2D,A2E,b]);}
var DI=G(0);
var A0r=null;var A0s=null;var A0o=null;var A0p=null;var A0q=null;var A1f=null;var A1g=null;var A0t=null;var A0u=null;function AIA(){AIA=Bq(DI);AK1();}
function AK1(){A0r=S(C(124));A0s=S(C(632));A0o=S(C(633));A0p=S(C(634));A0q=S(C(635));A1f=S(C(124));A1g=S(C(632));A0t=FF(205,205,205,153);A0u=CR(247,248,250);}
function XT(){var a=this;B.call(a);a.kf=null;a.ia=0;}
function W8(){B.call(this);this.ui=null;}
function AOw(a,b){Zf(a.ui,b);}
var N9=G(GV);
function ALY(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FQ(d,a.bb);DF(d,a.bb,b);e=a.c9.c(b,c,d);if(e>=0)break;DF(d,a.bb,g);b=b+1|0;}}return b;}
function AVU(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FQ(e,a.bb);DF(e,a.bb,c);f=a.c9.c(c,d,e);if(f>=0)break;DF(e,a.bb,g);c=c+(-1)|0;}}return c;}
function AKf(a){return null;}
var R8=G(Bu);
var Zq=G(Bu);
function WX(){F7.call(this);this.AJ=0;}
function RT(){F7.call(this);this.AB=0;}
function AFB(){var a=this;B.call(a);a.Ln=null;a.Ho=null;}
function WQ(){var a=this;B.call(a);a.sW=null;a.vt=null;a.xg=0;a.lb=0;}
function K_(a,b){return Cb(a.sW)<b?0:1;}
function ACR(){var a=this;B.call(a);a.El=null;a.CN=null;}
function Pv(){var a=this;B.call(a);a.re=null;a.rf=null;}
function VO(){var a=this;B.call(a);a.zc=null;a.sb=null;}
function VR(){B.call(this);this.Ah=null;}
var AFp=G(0);
function M0(b){return !b?I(BA,[C(155),C(156),C(636)]):I(BA,[C(155),C(156),C(636),C(41)]);}
var AA$=G();
function TW(){var a=this;B.call(a);a.qo=null;a.qp=0;a.qq=null;}
function L0(a,b){var c,d,e,f,g,h,i,j,k;c=a.qo;d=a.qp;e=a.qq;if(b<=d){f=Ct(c);g=new Un;g.u_=c;h=R(B,1);h.data[0]=e;CU(f,g,C(637),h);}else{i=Ct(c);g=new Up;g.p9=c;j=R(B,2);k=j.data;k[0]=e;h=BM(1);h.data[0]=250;k[1]=h;CU(i,g,C(638),j);f=Ct(c);g=new Uq;g.rp=c;h=R(B,1);h.data[0]=e;CU(f,g,C(639),h);}}
function WV(){var a=this;B.call(a);a.d5=null;a.ko=null;a.l$=null;a.md=null;a.p3=0;a.jz=0;a.cW=0;a.x=0;a.eD=0;a.jG=0;a.fP=0;a.dC=0;a.z5=0;a.im=0;a.kb=0;}
function BQ(a,b,c){a.ko.data[b]=c;}
function Dr(a,b){return a.ko.data[b];}
function JH(a){return TA(a,0);}
function TA(a,b){To(a,b);return a.d5.data[(b*2|0)+1|0];}
function DF(a,b,c){a.d5.data[b*2|0]=c;}
function Kj(a,b,c){a.d5.data[(b*2|0)+1|0]=c;}
function FQ(a,b){return a.d5.data[b*2|0];}
function I9(a,b){return a.d5.data[(b*2|0)+1|0];}
function AFh(a){return QH(a,0);}
function QH(a,b){To(a,b);return a.d5.data[b*2|0];}
function NR(a,b){return a.l$.data[b];}
function En(a,b,c){a.l$.data[b]=c;}
function To(a,b){var c;if(!a.jz){c=new CL;Y(c);K(c);}if(b>=0&&b<a.p3)return;c=new BD;Bi(c,C8(b));K(c);}
function ZN(a,b,c,d){a.jz=0;a.kb=2;H1(a.d5,(-1));H1(a.ko,(-1));if(b!==null)a.md=b;if(c>=0){a.cW=c;a.x=d;}a.eD=a.cW;}
function AC3(a){return a.kb;}
function OE(){B.call(this);this.od=null;}
function ATa(a){DY(a.od);}
function Zx(){var a=this;B.call(a);a.sr=null;a.ss=null;}
function AVN(a,b){b=b;Gy(a.sr,a.ss,b);}
function Sw(){var a=this;B.call(a);a.n9=null;a.n$=null;}
function AQp(a,b){var c,d,e,f,g;a:{c=a.n9;d=a.n$;if(b instanceof HC){b:{b=b;c=c.iH.dJ;if(d instanceof Fd&&d.kW==b.kN&&Rj(b,d,c)){c:{d=d.fu;if(b.gc.j!=d.j)e=0;else{e=0;while(e<b.gc.j){f=Br(d,e);g=Br(b.gc,e);if(f!==null){f=f.dH;if(f!==null&&!MB(c,f,g)){e=0;break c;}}e=e+1|0;}e=1;}}if(e){e=1;break b;}}e=0;}if(e){e=1;break a;}}e=0;}return e;}
function Sy(){B.call(this);this.tO=null;}
function AMe(a,b,c){c=c;return HY(a.tO,b,c);}
function Q5(){var a=this;B.call(a);a.vR=null;a.vS=null;}
function AN_(a,b){var c;c=a.vR;return Rj(b,a.vS,c.iH.dJ);}
function Q4(){B.call(this);this.sc=null;}
function AIp(a,b,c){return LY(a.sc,b,c);}
function UL(){X.call(this);this.zi=null;}
function AUe(a,b){return Cy(b)!=2?0:1;}
function NE(){X.call(this);this.zs=null;}
function AI5(a,b){return Cy(b)!=1?0:1;}
function Ty(){X.call(this);this.yT=null;}
function AIO(a,b){return SV(b);}
function Tx(){X.call(this);this.yA=null;}
function ALU(a,b){return 0;}
function YP(){X.call(this);this.Ab=null;}
function ANo(a,b){return !Cy(b)?0:1;}
function QC(){X.call(this);this.zF=null;}
function AUh(a,b){return Cy(b)!=9?0:1;}
function Px(){X.call(this);this.AO=null;}
function AQm(a,b){return GJ(b);}
function SB(){X.call(this);this.zk=null;}
function AR4(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Ny(){X.call(this);this.xU=null;}
function AVt(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function NC(){X.call(this);this.zJ=null;}
function AKT(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function O3(){X.call(this);this.z9=null;}
function AUq(a,b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Q8(){X.call(this);this.Au=null;}
function AO5(a,b){return Kc(b);}
function Re(){X.call(this);this.yV=null;}
function ARr(a,b){return Rf(b);}
function Vh(){X.call(this);this.zQ=null;}
function AT3(a,b){return Cy(b)!=3?0:1;}
function T5(){X.call(this);this.xX=null;}
function AU4(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function NV(){X.call(this);this.AW=null;}
function AKD(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function MY(){X.call(this);this.mx=0;}
function AYo(a){var b=new MY();AET(b,a);return b;}
function AET(a,b){Bv(a);a.mx=b;}
function AQo(a,b){return a.bj^(a.mx!=Cy(b&65535)?0:1);}
var Tr=G(MY);
function AS8(a,b){return a.bj^(!(a.mx>>Cy(b&65535)&1)?0:1);}
function ABz(){var a=this;B.call(a);a.FY=null;a.KY=0;}
function RH(){B.call(this);this.xQ=null;}
function AOC(a){var b,c;b=a.xQ;c=b.re;b=b.rf;c.Bf(b.jR,b.mi,null);}
function Xq(){B.call(this);this.pi=null;}
function ARi(a,b){var c,d,e,f;c=a.pi;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.sb;c=Bz();e=new M;O(e);H(H(e,C(640)),b);Bt(c,N(e));b=Bz();f=d.length;c=new M;O(c);V(H(c,C(641)),f);Bt(b,N(c));}
function Xt(){var a=this;B.call(a);a.vj=null;a.vk=null;}
function APT(a,b){var c,d;c=a.vj;d=a.vk;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function U9(){var a=this;B.call(a);a.nJ=null;a.nK=null;}
function AMJ(a,b){var c;c=a.nJ;L0(a.nK,Kl(c,b.size));}
function Va(){B.call(this);this.wR=null;}
function AH3(a,b){var c;c=a.wR;Bt(E_(),$rt_str(b.message));L0(c,0);}
function Wd(){B.call(this);this.yL=null;}
function AOy(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Up(){B.call(this);this.p9=null;}
function AI4(a,b){var c,d,e,f;c=a.p9;if(!c.kk){b=b.data;d=Dy(b[0]);e=EE(b[1]);AFw(c.e.f,d,e);c.iZ=1;f=Iz(Ez(),c.fv);b=new M;O(b);H(GH(H(b,C(642)),f),C(200));$rt_globals.console.info($rt_ustr(N(b)));}}
function Uq(){B.call(this);this.rp=null;}
function AJK(a,b){var c,d,e,f,g,h;c=b.data;d=a.rp;e=(Dy(c[2])).data[0];if(e!=1)IN(d,b);else{d.kk=1;f=Dy(c[0]);g=EE(c[1]);ADd(d.e.f,f,g,d.iZ);Wt(d,ADo(e));GT(Ct(d),A0C);Gq(Ct(d));h=Iz(Ez(),d.fv);b=new M;O(b);H(GH(H(b,C(643)),h),C(200));$rt_globals.console.info($rt_ustr(N(b)));UT(d);JA(d);}}
function Un(){B.call(this);this.u_=null;}
function ARU(a,b){IN(a.u_,b);}
var ABt=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",5,"worker",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bT",AYL(AO1),"cM",AYK(AJM)],Tj,0,B,[],0,3,0,0,0,Oc,0,B,[],3,3,0,0,0,Ns,0,B,[],3,3,0,0,0,Yn,0,B,[Oc,Ns],0,3,0,0,0,AB6,0,B,[],4,0,0,0,0,ABI,0,B,[],4,3,0,0,0,GW,0,B,[],0,3,0,0,0,Ee,0,GW,[],0,3,0,0,0,Bu,0,Ee,[],0,3,0,0,0,ADR,0,Bu,[],0,3,0,0,0,CN,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,Jq,0,B,[],3,3,0,0,0,BA,"String",1,B,[CN,CG,Jq],0,3,0,FC,["cM",AYK(AJJ),"bT",AYL(Bn),"m3",AYK(IV),"kF",AYL(ALX)],EY,0,GW,[],0,3,0,0,0,HM,0,EY,[],0,3,0,0,0,ADp,0,HM,[],0,3,0,0,0,D6,0,B,[CN],1,3,0,0,0,GC,
0,D6,[CG],0,3,0,0,["bT",AYL(AVa),"kF",AYL(AN9)],GG,0,B,[CN,Jq],0,0,0,0,["iz",AYL(Ki),"cM",AYK(N)],Iu,0,B,[],3,3,0,0,0,M,0,GG,[Iu],0,3,0,0,["mK",AYO(AN3),"lQ",AYN(AK0),"cM",AYK(D3),"iz",AYL(AOb),"ni",AYM(AOJ)],EB,0,HM,[],0,3,0,0,0,AEV,0,EB,[],0,3,0,0,0,AC8,0,EB,[],0,3,0,0,0,Ve,0,B,[],3,3,0,0,0,Dw,0,B,[],3,3,0,0,0,QA,0,B,[],3,0,0,0,0,Jd,0,B,[Ve,Dw,QA],1,3,0,0,["em",AYK(F8)],Tc,0,Jd,[],0,3,0,0,0,AA1,0,B,[],0,3,0,0,0,AGd,0,B,[],4,3,0,0,0,Z,0,B,[],3,3,0,0,0,Vp,0,B,[Z],0,3,0,0,0,By,0,B,[],3,3,0,0,0,AD3,0,B,[By],1,
3,0,0,0,AA8,0,B,[],3,3,0,0,0,AFP,0,B,[],3,3,0,0,0,AFL,0,B,[],3,3,0,0,0,Mt,0,B,[],0,3,0,0,0,AB2,0,B,[By],1,3,0,0,0,BX,0,B,[By],3,3,0,0,0,Vq,0,B,[BX],0,3,0,0,["bc",AYL(AHv)],Vo,0,B,[BX],0,3,0,0,["bc",AYL(AT4)],L4,0,B,[],4,3,0,0,0,AFI,0,B,[],4,3,0,0,0,ACK,0,B,[],0,3,0,0,0,AHp,0,B,[],4,3,0,0,0,Oi,0,B,[BX],0,3,0,0,["bc",AYL(AP$)]]);
$rt_metadata([AF4,0,B,[By],1,3,0,0,0,ABj,0,B,[],0,3,0,0,0,Xy,0,B,[By],3,3,0,0,0,ADS,0,B,[Xy],1,3,0,0,["AE",AYL(AMH),"JS",AYK(AOZ)],ADE,0,B,[By],1,3,0,0,0,HI,0,B,[],3,3,0,0,0,UJ,0,B,[HI],0,3,0,0,0,BD,0,Bu,[],0,3,0,0,0,AEA,0,B,[],4,3,0,0,0,G3,0,Bu,[],0,3,0,0,0,Jk,0,Bu,[],0,3,0,0,0,C_,0,B,[CG],0,3,0,0,0,Nn,0,B,[By],3,3,0,0,0,Ub,0,B,[Nn],3,3,0,0,0,Es,0,B,[By],3,3,0,0,0,AGc,0,B,[Ub,Es],3,3,0,0,0,O5,0,B,[BX],0,3,0,0,["bc",AYL(ARk)],ADz,0,B,[],4,3,0,0,0,Q7,0,B,[Es],3,3,0,0,0,S_,0,B,[Es],3,3,0,0,0,S0,0,B,[Es],3,3,0,
0,0,Vc,0,B,[Es],3,3,0,0,0,Zp,0,B,[Es],3,3,0,0,0,Wn,0,B,[Es,Q7,S_,S0,Vc,Zp],3,3,0,0,0,Qe,0,B,[],3,3,0,0,0,QB,0,B,[By],3,3,0,0,0,AA7,0,B,[By,Wn,Qe,QB],1,3,0,0,["AE",AYL(AQj),"Du",AYM(AS5),"Kt",AYM(ASp),"GJ",AYN(AQe),"Ey",AYL(AUn),"EI",AYK(AJ5),"CM",AYN(AHY)],BE,0,Bu,[],0,3,0,0,0,AAs,0,Bu,[],0,3,0,0,0,Ex,0,B,[],4,3,0,La,0,AGX,0,B,[By],1,3,0,0,0,AC2,0,B,[By],1,3,0,0,0,AHk,0,B,[By],1,3,0,0,0,KB,0,B,[By],3,3,0,0,0,Qu,0,B,[KB],0,3,0,0,["xr",AYL(AJ3)],ADn,0,B,[By],1,3,0,0,0,Qv,0,B,[KB],0,3,0,0,["xr",AYL(AH0)],HJ,0,
BD,[],0,3,0,0,0,ACs,0,B,[],0,3,0,0,0,Qd,0,B,[],3,3,0,0,0,Ui,0,B,[Qd],0,3,0,0,0,B9,0,B,[],3,3,0,0,0,Tt,0,B,[B9],0,3,0,0,0,Bj,0,B,[],3,3,0,0,0,AD0,0,B,[Bj],0,3,0,0,0,ADv,0,B,[By],1,3,0,0,0,S4,0,B,[By],3,3,0,0,0,Xl,0,B,[S4],0,3,0,0,["GN",AYL(ANb)],Xi,0,B,[Bj],0,3,0,0,0,R7,0,B,[By],3,3,0,0,0]);
$rt_metadata([Xj,0,B,[R7],0,3,0,0,["w_",AYM(ALh)],AGk,0,B,[By],1,3,0,0,0,Cp,0,B,[By],3,3,0,0,0,Xg,0,B,[Cp],0,3,0,0,["cm",AYL(ARs)],LG,0,B,[],3,3,0,0,0,D4,0,B,[LG],1,3,0,0,0,Ef,0,B,[],3,3,0,0,0,ZK,0,B,[LG],3,3,0,0,0,Oa,0,B,[ZK],3,3,0,0,0,QK,0,D4,[Ef,CN,Oa],0,3,0,0,0,Xh,0,B,[BX],0,3,0,0,["bc",AYL(ASO)],Rc,0,B,[],0,3,0,0,0,LS,0,B,[],1,3,0,0,0,AFO,0,LS,[],0,3,0,0,0,Cz,0,B,[Dw],1,3,0,0,["c1",AYL(AU9)],JQ,0,B,[HI],0,3,0,0,["wV",AYM(Kd)],ACC,0,B,[],0,3,0,0,0,Ys,0,B,[Cp],0,3,0,0,["cm",AYL(AQO)],Yt,0,B,[Cp],0,3,0,0,
["cm",AYL(AQ6)],Yu,0,B,[Cp],0,3,0,0,["cm",AYL(APe)],Yv,0,B,[Cp],0,3,0,0,["cm",AYL(AOF)],Yw,0,B,[Cp],0,3,0,0,["cm",AYL(AO6)],Yx,0,B,[Cp],0,3,0,0,["cm",AYL(ARC)],Yy,0,B,[Cp],0,3,0,0,["cm",AYL(AMX)],Yz,0,B,[Cp],0,3,0,0,["cm",AYL(AVH)],YA,0,B,[Cp],0,3,0,0,["cm",AYL(AL5)],YB,0,B,[Cp],0,3,0,0,["cm",AYL(ASY)],Z8,0,B,[Cp],0,3,0,0,["cm",AYL(AU$)],Z9,0,B,[Cp],0,3,0,0,["cm",AYL(AOX)],Z$,0,B,[Cp],0,3,0,0,["cm",AYL(APk)],Z_,0,B,[Cp],0,3,0,0,["cm",AYL(ARm)],VP,0,B,[],3,3,0,0,0,V7,0,B,[VP],0,3,0,0,0,V6,0,B,[Cp],0,3,0,0,["cm",
AYL(ANQ)],No,0,B,[],0,3,0,0,0,AGG,0,B,[],0,3,0,0,0,Eh,0,B,[],3,3,0,0,0,Cr,0,B,[Eh],3,3,0,0,0,Cu,0,B,[],3,3,0,0,["bQ",AYL(ANW),"ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB)],DO,0,B,[],3,3,0,0,0,EI,0,B,[Eh],3,3,0,0,0,E0,0,B,[],3,3,0,0,0,E2,0,B,[],3,3,0,0,0,Fn,0,B,[E2],3,3,0,0,0,Sc,0,B,[Dw],0,3,0,0,0,Bf,0,B,[],0,3,0,0,["cM",AYK(AAx)],YF,0,B,[],0,3,0,0,0,AFN,0,B,[],0,3,0,0,0,ABD,0,B,[],3,3,0,0,0,R5,0,B,[],0,3,0,0,0]);
$rt_metadata([Mj,0,B,[],0,3,0,0,0,DC,0,Mj,[],0,3,0,0,0,X9,0,DC,[],0,3,0,0,0,EO,0,DC,[],0,3,0,0,0,ADk,0,DC,[],0,3,0,0,0,AFv,0,EO,[],0,3,0,0,0,AE1,0,EO,[],0,3,0,0,0,AB5,0,EO,[],0,3,0,0,0,AE0,0,DC,[],0,3,0,0,0,Tz,0,B,[By],3,3,0,0,0,AHn,0,B,[Tz],3,3,0,0,0,R3,0,B,[Dw],0,3,0,0,0,R4,0,B,[],0,3,0,0,0,Co,0,B,[CG,CN],1,3,0,0,0,Hd,0,Co,[],12,3,0,Ko,0,M1,0,B,[],3,3,0,0,0,U2,0,B,[M1],3,3,0,0,0,Wi,0,B,[],3,3,0,0,0,GN,0,B,[U2,Wi],1,3,0,0,0,J8,0,GN,[],0,3,0,0,0,AC5,0,J8,[],0,3,0,0,0,GA,0,GN,[],1,3,0,0,0,L2,0,GA,[],0,3,0,0,
["li",AYN(ANF)],Ea,0,Co,[],12,3,0,AUj,0,J0,0,B,[CG],1,3,0,0,0,M5,0,J0,[],0,3,0,ACW,0,K8,0,B,[],32,0,0,AA6,0,QP,0,B,[],0,3,0,0,0,Hj,0,Co,[],12,0,0,AEo,0,GE,0,Co,[],12,0,0,AEq,0,Ln,0,GA,[],0,3,0,0,["li",AYN(ALD)],Xm,0,Ee,[],0,3,0,0,0,AFH,0,BE,[],0,3,0,0,0,M4,0,B,[By],3,3,0,0,0,ZI,0,B,[M4],0,3,0,0,["bc",AYL(ASo)],ZJ,0,B,[M4],0,3,0,0,["bc",AYL(AJD)],Hv,0,B,[],1,3,0,0,0,TS,0,B,[],3,3,0,0,0,LJ,0,Hv,[CG,Iu,Jq,TS],1,3,0,0,0,KA,0,Hv,[CG],1,3,0,0,0,H$,0,B,[],0,3,0,HD,0,Oh,0,Cz,[],0,3,0,0,["bH",AYK(AOQ),"cc",AYM(ANe)],CP,
0,Cz,[],1,3,0,0,["cc",AYM(G1)],Qb,0,B,[],3,3,0,0,0,KJ,0,B,[Qb],3,3,0,0,0,KM,0,B,[],3,3,0,0,0,Kp,0,CP,[Cu,KJ,KM,DO,E0,Fn],0,3,0,0,["g$",AYM(AUD),"c1",AYL(ARS),"bH",AYK(AO4),"gA",AYK(AM7),"wZ",AYK(ASG),"xv",AYK(AOV),"uJ",AYL(ATO),"cc",AYM(AOg),"jo",AYL(AIC),"bQ",AYL(AQU),"cB",AYN(AM$),"ci",AYM(APd),"c4",AYM(ARJ),"de",AYN(ARg),"dQ",AYK(AN2)],Xz,0,Kp,[],0,3,0,0,["gA",AYK(APr)],AGE,0,B,[],0,3,0,0,0,ADV,0,B,[By],1,3,0,0,0]);
$rt_metadata([KK,0,LJ,[],1,0,0,0,0,ADA,0,KK,[],0,0,0,0,0,Lv,0,B,[],1,3,0,0,0,Mr,0,B,[],0,3,0,0,0,ABf,0,B,[],0,3,0,0,0,I2,0,B,[By],3,3,0,0,0,Or,0,B,[I2],0,3,0,0,["bc",AYL(ALM)],Oq,0,B,[I2],0,3,0,0,["bc",AYL(AQc)],Oo,0,B,[BX],0,3,0,0,["bc",AYL(AQ1)],On,0,B,[BX],0,3,0,0,["bc",AYL(AKb)],Vs,0,B,[Z],0,3,0,0,["g",AYL(AVb)],Vt,0,B,[Z],0,3,0,0,["g",AYL(AN8)],XG,0,B,[B9],0,3,0,0,["bX",AYL(AT5)],XF,0,B,[B9],0,3,0,0,["bX",AYL(AId)],XC,0,B,[B9],0,3,0,0,["bX",AYL(ALi)],XB,0,B,[B9],0,3,0,0,["bX",AYL(AQa)],XE,0,B,[B9],0,3,
0,0,["bX",AYL(ALo)],XD,0,B,[B9],0,3,0,0,["bX",AYL(AHu)],XJ,0,B,[B9],0,3,0,0,["bX",AYL(AKW)],XI,0,B,[B9],0,3,0,0,["bX",AYL(AOE)],XL,0,B,[B9],0,3,0,0,["bX",AYL(ASI)],XK,0,B,[B9],0,3,0,0,["bX",AYL(AHH)],UO,0,B,[B9],0,3,0,0,["bX",AYL(AH6)],UN,0,B,[B9],0,3,0,0,["bX",AYL(AOe)],UM,0,B,[B9],0,3,0,0,["bX",AYL(APN)],UF,0,B,[B9],0,3,0,0,["bX",AYL(ALR)],UE,0,B,[B9],0,3,0,0,["bX",AYL(AHO)],UC,0,B,[B9],0,3,0,0,["bX",AYL(AUb)],UB,0,B,[B9],0,3,0,0,["bX",AYL(AOR)],UA,0,B,[B9],0,3,0,0,["bX",AYL(ASK)],HB,0,B,[],0,3,0,0,0,QF,0,
HB,[],0,3,0,0,0,AFY,0,B,[],0,3,0,0,0,Nl,0,HB,[],0,3,0,0,0,VS,0,B,[By],3,3,0,0,0,OY,0,B,[VS],0,3,0,0,["xr",AYL(AOj)],Wx,0,B,[Z],0,3,0,0,["g",AYL(X_)],Y1,0,KA,[],0,0,0,0,0,RW,0,B,[],0,3,0,0,0,Js,0,B,[],0,3,0,0,0,ADI,0,B,[Cu,DO],0,0,0,0,["bQ",AYL(AQZ),"cB",AYN(AUw),"ci",AYM(AR$),"c4",AYM(AOq),"de",AYN(ASy)],H4,0,B,[],3,3,0,0,["xG",AYK(AP3),"us",AYK(ALZ)],ACU,0,B,[H4,Cu,KM],0,3,0,0,["us",AYK(ALN),"xG",AYK(AIG),"wZ",AYK(OS),"xv",AYK(Z5),"uJ",AYL(PF),"c4",AYM(U0),"ci",AYM(ND),"cB",AYN(NW),"bQ",AYL(Pg),"hH",AYL(AUP)],Ig,
0,B,[],3,3,0,0,0,WI,0,B,[Ig],0,3,0,0,["iY",AYL(AN$)],WJ,0,B,[Ig],0,3,0,0,["iY",AYL(AIU)],WK,0,B,[Z],0,3,0,0,["g",AYL(AOn)],WD,0,B,[Z],0,3,0,0,["g",AYL(APg)],WF,0,B,[Cr],0,3,0,0,["X",AYL(AUc)],IA,0,B,[Cr],0,3,0,0,["X",AYL(AL2)]]);
$rt_metadata([WG,0,B,[Z],0,3,0,0,["g",AYL(ASZ)],WH,0,B,[EI],0,3,0,0,["X",AYL(AKV)],AEM,0,B,[By],1,3,0,0,0,ABy,0,B,[],3,3,0,0,0,V_,0,B,[],0,3,0,0,0,TF,0,B,[Cr],0,3,0,0,["X",AYL(AMF)],TE,0,B,[Cr],0,3,0,0,["X",AYL(AJ$)],B_,0,B,[],0,3,0,0,["bT",AYL(AVD)],EF,0,B,[],3,3,0,0,0,AGR,0,B,[Cu,EF],0,3,0,0,["bQ",AYL(AAN),"cB",AYN(ABQ),"ci",AYM(ADD),"c4",AYM(AGT),"g_",AYM(ANS)],AF6,0,B,[EF,H4],0,3,0,0,["xG",AYK(AP3),"us",AYK(ALZ),"g_",AYM(AVn),"hH",AYL(AOL)],ACv,0,B,[],0,3,0,0,0,LI,0,B,[],0,3,0,0,0,Jv,0,B,[],0,3,0,0,0,Zv,
0,B,[],0,3,0,0,0,AGl,0,B,[],0,3,0,0,0,V3,0,B,[],0,3,0,0,0,ER,0,B,[Dw],0,0,0,0,0,AGZ,0,B,[],0,3,0,0,0,ACt,0,B,[Dw],0,3,0,0,0,X8,0,B,[],3,3,0,0,["ep",AYL(AHw)],HZ,0,B,[X8],3,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],E3,0,B,[HZ],1,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK),"eh",AYK(D9)],Tw,0,B,[HZ],3,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],JU,0,B,[Tw],3,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],Gt,0,E3,[JU],1,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK),"tA",AYL(ARL),"bt",AYK(BY),"ul",AYM(AQM),"nC",AYM(ATH),"bT",AYL(APz)],L3,0,B,[],3,3,0,0,0,ABn,
0,Gt,[Ef,CN,L3],0,3,0,0,["mz",AYL(ANK),"jT",AYL(Br),"cV",AYK(AQt),"tA",AYL(BC),"nC",AYM(Td),"ns",AYL(Ey),"iR",AYK(H0),"ul",AYM(ABR),"ep",AYL(D8)],O_,0,B,[Z],0,3,0,0,0,O$,0,B,[Z],0,3,0,0,["g",AYL(AI8)],O9,0,B,[Z],0,3,0,0,["g",AYL(AIa)],O8,0,B,[Bj],0,3,0,0,["o",AYK(AH_)],Pe,0,B,[Bj],0,3,0,0,["o",AYK(AL1)],Pc,0,B,[Bj],0,3,0,0,["o",AYK(AV6)],Pb,0,B,[Bj],0,3,0,0,["o",AYK(AOA)],Pa,0,B,[Bj],0,3,0,0,["o",AYK(AQ2)],O7,0,B,[Bj],0,3,0,0,["o",AYK(AVe)],O6,0,B,[Bj],0,3,0,0,["o",AYK(AHU)],FB,0,Co,[],12,3,0,AH9,0,K5,0,B,[],
4,3,0,ANr,0,Nf,0,B,[],3,3,0,0,0,RX,0,B,[Bj],0,3,0,0,["o",AYK(AMV)],RV,0,B,[Bj],0,3,0,0,["o",AYK(AHM)],Z6,0,B,[],3,3,0,0,0,Ld,0,B,[],0,3,0,0,0,Fh,0,B,[],0,3,0,0,0,KZ,0,Fh,[],0,3,0,0,0,UH,0,Fh,[],0,3,0,0,0,RI,0,Fh,[],0,3,0,0,0,FU,0,B,[],3,3,0,0,0]);
$rt_metadata([T2,0,B,[],3,3,0,0,0,Hr,0,B,[CG],0,3,0,0,0,LB,0,B,[],0,3,0,0,0,X2,0,B,[],3,3,0,0,0,Uu,0,B,[X2],0,3,0,0,["cM",AYK(AKE)],Wc,0,B,[],3,3,0,0,0,LH,"JsFileHandle",7,B,[Wc],0,3,0,0,["cM",AYK(ANN)],Tq,0,B,[Nf],0,3,0,0,0,Lg,0,D4,[Ef,CN],0,3,0,0,0,CD,0,B,[],0,3,0,0,0,ACi,0,B,[],0,3,0,0,0,OZ,0,B,[Bj],0,3,0,0,["o",AYK(AVi)],Ce,0,B,[],0,3,0,0,0,Ol,0,B,[],0,3,0,0,0,Ly,0,Lg,[],0,3,0,0,0,AGW,0,B,[CG],0,3,0,0,["bT",AYL(AS6),"kF",AYL(AJV)],Sg,0,B,[HI],0,3,0,0,["wV",AYM(AQK)],W$,0,B,[],0,3,0,0,["cM",AYK(AM4),"bT",
AYL(ASg)],HQ,0,B,[],3,3,0,0,0,GU,0,B,[HQ,Ef],0,0,0,0,["bT",AYL(AKH)],G4,0,GU,[],0,0,0,0,0,Ls,0,Lv,[],1,3,0,0,0,Ra,0,Ls,[],0,3,0,0,0,I7,0,Ee,[],0,3,0,0,0,NH,0,B,[I2],0,3,0,0,["bc",AYL(AVq)],NK,0,B,[BX],0,3,0,0,["bc",AYL(AUo)],NI,0,B,[BX],0,3,0,0,["bc",AYL(AIW)],IH,0,B,[],0,3,0,0,0,JI,0,CP,[KJ],0,3,0,0,["c1",AYL(ATp),"bH",AYK(AMI),"gA",AYK(AU5),"cc",AYM(AHG),"mf",AYM(AEZ),"jo",AYL(AK_)],AAV,0,Cz,[],0,3,0,0,["c1",AYL(AIi),"bH",AYK(AK5),"cc",AYM(AOm)],Pn,0,CP,[Cu,EF],0,3,0,0,["g_",AYM(ANv),"cc",AYM(ALO),"bH",AYK(AK6),
"bQ",AYL(AOo),"ci",AYM(ATC),"c4",AYM(ASS),"cB",AYN(AI9)],UD,0,CP,[EF],0,3,0,0,["g_",AYM(AKO),"bH",AYK(AQL),"cc",AYM(AJw),"c1",AYL(AKZ)],Ow,0,CP,[Cu],0,3,0,0,["bQ",AYL(ANW),"ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB),"bH",AYK(ASH),"c1",AYL(AH7)],Uz,0,Cz,[],0,3,0,0,["bH",AYK(AHF),"cc",AYM(AHE)],Df,0,Cz,[],0,3,0,0,["bH",AYK(TR),"cc",AYM(Uj)],R9,"SelectFileTest",5,Df,[],0,3,0,0,0,AA9,"WorkerTest",6,Df,[],0,3,0,0,0,NU,"RenderTexture",5,Df,[],0,3,0,0,["c1",AYL(AM3),"bH",AYK(AKP),"cc",AYM(AUZ)],Ut,"ScissorDemo",5,Df,
[],0,3,0,0,["bH",AYK(AVO),"cc",AYM(AMy)],Uh,0,Cz,[],0,3,0,0,["bH",AYK(AUt),"cc",AYM(AK9),"c1",AYL(ASc)],Ju,"ClipboardTest",5,Df,[Cu],0,3,0,0,["bQ",AYL(ANW),"ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(AN4)],TZ,0,Cz,[],0,3,0,0,["bH",AYK(AVC),"cc",AYM(AQd)],G9,0,Cz,[Cu],1,3,0,0,["bQ",AYL(ANW),"ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB),"bH",AYK(ACG)],Vk,0,G9,[],0,3,0,0,["ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB),"cc",AYM(ARM),"bQ",AYL(ATm)],Vj,0,G9,[],0,3,0,0,["ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB),"bQ",AYL(AVh),"bH",
AYK(AKK),"cc",AYM(AIK)],Ze,0,CP,[EF],0,3,0,0,["g_",AYM(ALJ),"bH",AYK(AT9),"cc",AYM(ATh),"c1",AYL(AMz)],Nw,0,JI,[],0,3,0,0,["gA",AYK(AJN),"mf",AYM(AV0)],Jc,0,B,[],0,3,0,0,0,ABx,0,B,[],3,3,0,0,0,AAL,0,B,[],0,3,0,0,0]);
$rt_metadata([AEk,0,B,[],3,3,0,0,0,AG$,0,B,[],0,3,0,0,0,M_,0,B,[HQ,CN],0,3,0,0,0,J_,0,M_,[],0,0,0,0,0,AGC,0,B,[],0,3,0,0,0,Rk,0,B,[Cr],0,3,0,0,["X",AYL(AJp)],Rh,0,B,[Z],0,3,0,0,["g",AYL(AL9)],Ri,0,B,[E0],0,3,0,0,["g$",AYM(ATB)],Ph,0,B,[Fn],0,3,0,0,["dQ",AYK(ARa)],Pi,0,B,[DO],0,3,0,0,["de",AYN(ANP)],Pf,0,B,[EI],0,3,0,0,["X",AYL(AOG)],AG4,0,Js,[],0,3,0,0,0,Wy,0,B,[Cu],0,0,0,0,["bQ",AYL(AJH),"cB",AYN(AHW),"ci",AYM(AJB),"c4",AYM(AIM)],RO,0,B,[Cr],0,3,0,0,["X",AYL(ATR)],RN,0,B,[Cr],0,3,0,0,["X",AYL(ARc)],RM,0,B,
[E0],0,3,0,0,["g$",AYM(AN5)],RL,0,B,[Bj],0,3,0,0,["o",AYK(AH2)],RK,0,B,[EI],0,3,0,0,["X",AYL(AQi)],RJ,0,B,[DO],0,3,0,0,["de",AYN(ATZ)],HF,0,B_,[],0,3,0,0,0,NJ,0,B,[],0,3,0,0,0,AEm,0,B,[],0,3,0,0,0,VK,0,B,[Cr],0,3,0,0,["X",AYL(APM)],VG,0,B,[EI],0,3,0,0,["X",AYL(ASW)],ACq,0,B,[],0,3,0,0,["bT",AYL(ASM)],VH,0,B,[Bj],0,3,0,0,["o",AYK(AVW)],VI,0,B,[Bj],0,3,0,0,["o",AYK(AIZ)],C$,0,B,[],0,3,0,0,0,Xu,0,B,[Cr],0,3,0,0,["X",AYL(ANV)],Xw,0,B,[EI],0,3,0,0,["X",AYL(AIy)],AEy,0,B,[],0,3,0,0,0,Xv,0,B,[DO],0,3,0,0,["de",AYN(ARI)],AGF,
0,B,[],0,3,0,0,0,NZ,0,B,[EF],0,3,0,0,["g_",AYM(APX)],NX,0,B,[Cr],0,3,0,0,["X",AYL(AQk)],S7,0,B,[],3,3,0,0,0,AAW,0,B,[S7],0,3,0,0,0,Ob,0,B,[Cu],0,0,0,0,["cB",AYN(ARB),"ci",AYM(AIm),"c4",AYM(AIr),"bQ",AYL(ALs)],TG,0,B,[DO],0,3,0,0,["de",AYN(APU)],Rq,0,B,[Cr],0,3,0,0,["X",AYL(APC)],SG,0,B,[Z],0,3,0,0,["g",AYL(APx)],SF,0,B,[Z],0,3,0,0,["g",AYL(ASj)],SI,0,B,[Z],0,3,0,0,["g",AYL(AJP)],SH,0,B,[Z],0,3,0,0,["g",AYL(AIY)],SE,0,B,[Z],0,3,0,0,["g",AYL(AUQ)],SD,0,B,[Z],0,3,0,0,["g",AYL(ANE)],VV,0,B,[Cu],0,0,0,0,["c4",AYM(AIx),
"cB",AYN(ARB),"bQ",AYL(AQT),"ci",AYM(AVo)],C3,0,B,[],3,3,0,FZ,0,Rn,0,B,[Cu],0,0,0,0,["cB",AYN(ARB),"ci",AYM(ANg),"c4",AYM(AIH),"bQ",AYL(ALA)],AAc,0,B,[DO],0,3,0,0,["de",AYN(ATU)]]);
$rt_metadata([YU,0,B,[Cr],0,3,0,0,["X",AYL(AKz)],YT,0,B,[E0],0,3,0,0,["g$",AYM(AOd)],YS,0,B,[E0],0,3,0,0,["g$",AYM(AKG)],YQ,0,B,[Fn],0,3,0,0,["dQ",AYK(AOY)],YV,0,B,[Fn],0,3,0,0,["dQ",AYK(ATb)],TD,0,B,[Cr],0,3,0,0,["X",AYL(AUN)],Z2,0,B,[Cr],0,3,0,0,["X",AYL(AKi)],Z4,0,B,[EI],0,3,0,0,["X",AYL(AIt)],Z3,0,B,[DO],0,3,0,0,["de",AYN(ASh)],AFS,0,B,[],0,3,0,0,["bT",AYL(AKt)],Db,0,B,[],3,3,0,ALK,0,Cj,0,Co,[],12,3,0,AFx,0,Jz,0,B,[],0,3,0,0,0,IO,0,B,[],0,3,0,0,0,AEb,0,B,[],0,3,0,0,0,DQ,0,B,[],3,3,0,AIh,0,Qr,0,B,[By],3,
3,0,0,0,QN,0,B,[Qr],0,3,0,0,["w_",AYM(AMb)],Qs,0,B,[By],3,3,0,0,0,QL,0,B,[Qs],0,3,0,0,["w_",AYM(ANj)],AB8,0,B,[],0,3,0,0,0,AAS,0,B,[By],3,3,0,0,0,J9,0,B,[Dw],0,3,0,0,["em",AYK(AE6)],YI,0,B,[],0,3,0,0,0,DU,0,B,[],3,3,0,AEs,0,G$,0,B,[],3,3,0,0,0,P0,0,B,[G$],0,3,0,0,["nY",AYN(AR1)],P1,0,B,[G$],0,3,0,0,0,Ts,0,B,[Cu],0,0,0,0,["bQ",AYL(AVx),"cB",AYN(ARl),"ci",AYM(AVj),"c4",AYM(APh)],WC,0,B,[Z],0,3,0,0,["g",AYL(AP9)],AHg,0,B,[],0,3,0,0,0,XZ,0,B,[Z],0,3,0,0,["g",AYL(ANk)],WR,0,B,[Cr],0,3,0,0,["X",AYL(AMS)],Ug,0,B,[Cu],
0,0,0,0,["ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB),"bQ",AYL(AVf)],AB_,0,B,[],0,3,0,0,0,I3,0,B,[],0,3,0,0,0,HG,0,B,[],4,3,0,0,0,ABG,0,B,[],0,3,0,0,0,Ck,0,Co,[],12,3,0,ACA,0,AGM,0,B,[],0,3,0,0,0,AC7,0,B,[By],4,3,0,0,0,AHf,0,B,[],0,3,0,0,0,ABK,0,B,[],3,3,0,0,0,CW,0,B,[By],1,3,0,0,0,AEF,0,CW,[],1,3,0,0,0,AFr,0,CW,[],1,3,0,0,0,ACa,0,CW,[],1,3,0,0,0,ACu,0,CW,[],1,3,0,0,0,AFW,0,CW,[],1,3,0,0,0,YY,0,B,[Bj],0,3,0,0,["o",AYK(ANJ)]]);
$rt_metadata([ABw,0,B,[],0,3,0,0,0,IC,0,B,[],0,3,0,0,0,W5,0,B,[],0,3,0,0,0,Mx,0,B,[],0,3,0,0,0,ACV,0,B,[],4,3,0,0,0,PE,0,B,[Cu],0,0,0,0,["ci",AYM(AT6),"c4",AYM(AIx),"cB",AYN(ARB),"bQ",AYL(AV1)],AC4,0,B,[By],1,3,0,0,0,Ta,0,B,[Z],0,3,0,0,["g",AYL(AJf)],XR,0,B,[E2],0,3,0,0,["dQ",AYK(AVr)],AFl,0,B,[],0,3,0,0,0,AEB,0,B,[],3,3,0,0,0,Mh,0,B,[],3,3,0,0,0,R2,0,B,[Mh],0,3,0,0,["sE",AYL(AJY)],Yi,0,B,[Z],0,3,0,0,["g",AYL(APV)],AFe,0,B,[],0,3,0,0,0,Rw,0,B,[Dw],0,3,0,0,0,Zt,0,B,[],0,3,0,0,0,ZV,0,B,[Z],0,3,0,0,["g",AYL(ALu)],AAQ,
0,B,[],0,3,0,0,0,AF9,0,B,[CG],0,3,0,0,["bT",AYL(AIc),"m3",AYK(ARR),"kF",AYL(ARq)],Zl,0,B,[Z],0,3,0,0,["g",AYL(AHX)],T0,0,B,[],3,3,0,0,0,E8,0,B,[],3,3,0,0,0,ON,0,B,[E8],0,0,0,0,["bE",AYK(B0),"bq",AYK(B3),"rM",AYK(SO)],F7,0,I7,[],0,3,0,0,0,Zi,0,EY,[],0,3,0,0,0,AF3,0,B,[],0,3,0,0,0,Uk,0,D4,[Ef,CN],0,3,0,0,0,XO,0,B,[],0,3,0,0,0,Xr,0,B,[],0,3,0,0,0,Xe,0,B,[Z],0,3,0,0,["g",AYL(AUu)],ZW,0,B,[Bj],0,3,0,0,["o",AYK(ASt)],Zy,0,D6,[CG],0,3,0,0,0,FN,0,B,[],0,0,0,0,0,Ic,0,B,[],4,3,0,0,0,W9,0,B,[],0,3,0,0,0,MO,0,B,[],1,3,
0,0,0,ADt,0,CW,[],1,3,0,0,0,Pq,0,B,[Z],0,3,0,0,["g",AYL(AJl)],RZ,0,B,[Z],0,3,0,0,["g",AYL(AI3)],Sk,0,B,[Z],0,3,0,0,["g",AYL(APP)],Fa,0,B,[Dw],0,3,0,0,["em",AYK(ARV),"jW",AYK(AP2),"jY",AYN(S5),"fJ",AYL(AGB),"ln",AYL(AOK),"lg",AYL(AUS),"rl",AYM(AR9),"cB",AYN(AM5),"ci",AYM(AJL),"c4",AYM(APy),"bQ",AYL(AUv),"de",AYN(ARQ)],Gg,0,Fa,[],0,3,0,0,0,Se,0,Gg,[H4],0,3,0,0,["xG",AYK(AP3),"us",AYK(ALZ),"em",AYK(AUs),"rl",AYM(AK4),"fJ",AYL(AIk),"lg",AYL(ARn),"ln",AYL(ATd),"xb",AYK(AB7),"bQ",AYL(AOD),"ci",AYM(ALQ),"cB",AYN(ARE),
"hH",AYL(ATz)],Of,0,B,[Bj],0,3,0,0,["o",AYK(AMg)],ACz,0,Fa,[],0,3,0,0,["em",AYK(AS9),"jY",AYN(AMs),"fJ",AYL(ASd),"cB",AYN(ATL),"ci",AYM(ATc),"c4",AYM(APZ),"bQ",AYL(APD),"de",AYN(ALF),"jW",AYK(AU_)],Qc,0,Gg,[],0,3,0,0,["xb",AYK(AKB),"jW",AYK(AVc),"lg",AYL(ARu),"fJ",AYL(AVA),"ln",AYL(AIL)],YE,0,B,[Z],0,3,0,0,0,TI,0,D6,[CG],0,3,0,0,0,Qy,0,B,[Bj],0,3,0,0,["o",AYK(ATk)]]);
$rt_metadata([OR,0,B,[Bj],0,3,0,0,["o",AYK(AJ9)],VB,0,B,[],0,3,0,0,0,I5,0,B,[],0,3,0,0,0,Xo,0,Fa,[],0,3,0,0,0,VJ,0,B,[],0,3,0,0,0,Uw,0,B,[Bj],0,3,0,0,["o",AYK(AJj)],PH,0,B,[Z],0,3,0,0,["g",AYL(AIv)],PG,0,B,[Z],0,3,0,0,["g",AYL(AIT)],K4,0,B,[],0,3,0,0,0,CL,0,Bu,[],0,3,0,0,0,AEY,0,EY,[],0,3,0,0,0,WN,0,B,[FU],0,3,0,0,0,YH,0,B,[Z],0,3,0,0,0,TO,0,B,[Z],0,3,0,0,["g",AYL(ALk)],TN,0,B,[Z],0,3,0,0,["g",AYL(AUr)],K$,0,MO,[],1,3,0,0,0,U_,0,K$,[],0,3,0,0,0,ZQ,0,B,[Z],0,3,0,0,["g",AYL(AUl)],Qk,0,B,[E2],0,3,0,0,["dQ",AYK(AIB)],Qj,
0,B,[E2],0,3,0,0,["dQ",AYK(ALI)],Ue,0,B,[E2],0,3,0,0,["dQ",AYK(AQE)],UR,0,B,[Bj],0,3,0,0,["o",AYK(AUd)],SJ,0,B,[BX],0,3,0,0,["bc",AYL(AHK)],Wh,0,B,[BX],0,3,0,0,["bc",AYL(AU6)],NF,0,B,[Z],0,3,0,0,0,AEa,0,B,[B9],0,3,0,0,0,AFo,0,B,[B9],0,3,0,0,0,OJ,0,B,[Z],0,3,0,0,["g",AYL(AKv)],OH,0,B,[Z],0,3,0,0,["g",AYL(ASN)],Nu,0,B,[Z],0,3,0,0,["g",AYL(AS_)],XN,0,B,[Bj],0,3,0,0,["o",AYK(AJA)],Ia,0,GU,[],0,0,0,0,0,Ht,0,Bu,[],0,3,0,0,0,WP,0,B,[Z],0,3,0,0,["g",AYL(AQn)],Rp,0,D6,[CG],0,3,0,0,0,I8,0,B,[],4,3,0,0,0,NG,0,B,[BX],0,
3,0,0,["bc",AYL(AV5)],AA2,0,B,[Z],0,3,0,0,0,V8,0,B,[],0,3,0,0,0,ZX,0,B,[G$],0,3,0,0,["nY",AYN(AR3)],Fv,0,B,[],0,3,0,0,0,Z0,0,B,[Z],0,3,0,0,["g",AYL(AMl)],Lu,0,Fv,[],0,3,0,0,0,Ix,0,Fv,[],0,3,0,0,0,X$,0,B,[Z],0,3,0,0,["g",AYL(AIS)],Ry,0,B,[],0,3,0,0,0,Qq,0,B,[Z],0,3,0,0,["g",AYL(APi)],D$,0,Bu,[],0,3,0,0,0,OX,0,B,[],0,3,0,0,0,Pj,0,B,[],0,3,0,0,0]);
$rt_metadata([AGa,0,B,[],0,3,0,0,0,UZ,0,B,[],0,0,0,0,0,ABA,0,B,[],3,3,0,0,0,QE,0,B,[HZ],3,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],ET,0,E3,[QE],1,3,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],QV,0,ET,[],0,0,0,0,["mz",AYL(ANK)],Ne,0,B,[Z],0,3,0,0,["g",AYL(ALx)],WU,0,B,[Z],0,3,0,0,["g",AYL(AOB)],JP,0,B,[],0,3,0,0,["bT",AYL(AEw)],HC,0,JP,[],0,3,0,0,["bT",AYL(AJq)],EN,0,B,[],0,3,0,0,["bT",AYL(ABq)],Ft,0,EN,[],0,3,0,0,0,Fd,0,EN,[],0,3,0,0,["bT",AYL(AUB)],EJ,0,EN,[],0,3,0,0,["bT",AYL(AIz)],NN,0,B,[B9],0,3,0,0,0,NO,0,B,[Z],0,3,0,
0,["g",AYL(AM_)],ZE,0,B,[BX],0,3,0,0,["bc",AYL(ASF)],ZD,0,B,[BX],0,3,0,0,["bc",AYL(AKS)],YK,0,B,[BX],0,3,0,0,["bc",AYL(AMt)],YJ,0,B,[BX],0,3,0,0,["bc",AYL(ANi)],ACj,0,B,[],1,3,0,0,0,YW,0,B,[],3,3,0,0,0,Zz,0,B,[Cp],0,3,0,0,["cm",AYL(AMh)],ABM,0,B,[],0,3,0,0,0,AHl,0,B,[],0,3,0,0,0,Zj,0,B,[Bj],0,3,0,0,["o",AYK(AIP)],Zk,0,B,[Bj],0,3,0,0,["o",AYK(AMZ)],AGS,0,B,[CG],0,3,0,0,["bT",AYL(AP8)],N_,0,B,[Z],0,3,0,0,["g",AYL(AOz)],AAi,0,B,[Z],0,3,0,0,["g",AYL(AV3)],AE9,0,B,[],0,3,0,0,0,Fe,0,B,[],0,3,0,0,0,ABi,0,B,[],0,3,
0,0,0,KX,0,ET,[],1,0,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],Xf,0,KX,[],0,0,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],L_,0,D4,[],1,0,0,0,0,Xc,0,L_,[],0,0,0,0,0,MI,0,Gt,[L3],1,0,0,0,["ep",AYL(AHw),"iR",AYK(AKJ),"ns",AYL(APa),"mz",AYL(ANR)],Xd,0,MI,[],0,0,0,0,["ep",AYL(AHw),"jT",AYL(APj),"cV",AYK(AOs),"bt",AYK(ALd),"eh",AYK(AIF)],Xa,0,B,[E8],0,0,0,0,["bE",AYK(AIl),"bq",AYK(AQD),"rM",AYK(ASw)],Q$,0,B,[E8],3,3,0,0,0,Xb,0,B,[Q$],0,0,0,0,0,AAo,0,B,[HI],0,3,0,0,0,E9,0,B,[],0,0,0,0,0,Ux,0,E9,[E8],0,0,0,0,0,JD,0,D$,[],0,3,0,0,0,Is,
0,Bu,[],0,3,0,0,0,MA,0,Bu,[],0,3,0,0,0,AGD,0,B,[Z],0,3,0,0,0,Tp,0,B,[Bj],0,3,0,0,["o",AYK(AQQ)]]);
$rt_metadata([Wz,0,B,[Z],0,3,0,0,["g",AYL(AMn)],P9,0,B,[Bj],0,3,0,0,["o",AYK(AJS)],AE2,0,B,[],0,3,0,0,0,He,0,B,[],0,3,0,0,0,Wq,0,ET,[],0,0,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],QW,0,E3,[],0,0,0,0,["ep",AYL(AHw),"mz",AYL(ANK)],Sq,0,B,[M1],3,3,0,0,0,OO,0,B,[Sq],3,3,0,0,0,Hw,0,B,[OO],1,3,0,0,0,ACT,0,Hw,[],0,3,0,0,0,VX,0,B,[Bj],0,3,0,0,["o",AYK(AKL)],VY,0,B,[Bj],0,3,0,0,["o",AYK(AHJ)],VU,0,B,[Bj],0,3,0,0,["o",AYK(ANY)],VW,0,B,[Bj],0,3,0,0,["o",AYK(AQ_)],Vv,0,B,[Bj],0,3,0,0,["o",AYK(APf)],Vx,0,B,[Bj],0,3,0,0,["o",AYK(AQ$)],Vw,
0,B,[Bj],0,3,0,0,["o",AYK(ATI)],R0,0,B,[],3,3,0,0,0,AAh,0,B,[Bj],0,3,0,0,["o",AYK(AR6)],Y7,0,B,[FU],0,3,0,0,["kw",AYM(ANG)],NL,0,B,[],0,3,0,0,0,SU,0,B,[],0,3,0,0,0,O4,0,B,[Z],0,3,0,0,["g",AYL(APs)],XW,0,B,[Z],0,3,0,0,["g",AYL(AMk)],XV,0,B,[Mh],0,3,0,0,["sE",AYL(K6)],YC,0,BD,[],0,3,0,0,0,Yb,0,B,[Bj],0,3,0,0,["o",AYK(AJo)],Ya,0,B,[Bj],0,3,0,0,["o",AYK(AIj)],Yd,0,B,[Bj],0,3,0,0,["o",AYK(ANU)],Zo,0,B,[Bj],0,3,0,0,["o",AYK(ARX)],Zn,0,B,[Bj],0,3,0,0,["o",AYK(AMW)],Pm,0,B,[E2],0,3,0,0,["dQ",AYK(ATy)],PO,0,B,[Bj],0,
3,0,0,["o",AYK(ALV)],PP,0,B,[Bj],0,3,0,0,["o",AYK(AUz)],PQ,0,B,[Bj],0,3,0,0,["o",AYK(AR2)],PL,0,B,[Bj],0,3,0,0,["o",AYK(AME)],PN,0,B,[Bj],0,3,0,0,["o",AYK(AVz)],Yc,0,B,[FU],0,3,0,0,["kw",AYM(APt)],RU,0,B,[BX],0,3,0,0,["bc",AYL(AK3)],Jr,0,B,[By],3,3,0,0,0,NB,0,B,[Jr],0,3,0,0,["sC",AYK(ANn)],Nm,0,B,[Jr],0,3,0,0,["sC",AYK(AHy)],Wb,0,B,[G$],0,3,0,0,0,ZC,0,B,[BX],0,3,0,0,["bc",AYL(AMP)],Wf,0,E9,[E8],0,0,0,0,0,SX,0,E9,[E8],0,0,0,0,0,Wk,0,B,[],3,3,0,AW5,0,ST,0,B,[CN],4,3,0,0,0,Us,0,B,[Z],0,3,0,0,["g",AYL(AI6)],UG,
0,B,[Z],0,3,0,0,["g",AYL(AS2)]]);
$rt_metadata([Gf,0,Co,[],12,0,0,Ua,0,O0,0,B,[Z],0,3,0,0,["g",AYL(AM2)],W_,0,B,[Z],0,3,0,0,["g",AYL(AKl)],G7,0,B,[],3,3,0,0,0,W0,0,B,[G7],0,3,0,0,["jJ",AYN(AN6)],WY,0,B,[G7],0,3,0,0,["jJ",AYN(AJc)],ID,0,B,[CN,CG],0,3,0,0,0,Gs,0,B,[],3,3,0,0,0,AGx,0,B,[Gs],0,3,0,0,0,Qa,0,B,[Gs],3,3,0,0,0,AGy,0,B,[Qa],0,3,0,0,0,T_,0,B,[G7],0,3,0,0,["jJ",AYN(AQF)],T9,0,B,[Eh],0,3,0,0,["X",AYL(AOl)],T8,0,B,[Eh],0,3,0,0,["X",AYL(AS3)],T7,0,B,[G7],0,3,0,0,["jJ",AYN(ARh)],BK,0,B,[],1,0,0,0,["cs",AYN(H9),"cv",AYO(Im),"ip",AYK(AJF),"Q",
AYL(ATW),"b2",AYL(ATV),"fV",AYK(AUX),"eK",AYK(JL)],Vf,0,B,[],32,0,0,AXD,0,Vu,0,B,[Z],0,3,0,0,["g",AYL(AJv)],U5,0,B,[Z],0,3,0,0,["g",AYL(AVS)],Os,0,B,[Bj],0,3,0,0,["o",AYK(AT7)],OG,0,B,[Z],0,3,0,0,["g",AYL(AKx)],OI,0,B,[Z],0,3,0,0,["g",AYL(AQN)],CT,0,BK,[],0,0,0,M2,["c",AYN(AI0),"J",AYL(AJm)],G_,0,B,[],0,0,0,0,0,Jl,0,BE,[],0,3,0,0,0,Zg,0,B,[BX],0,3,0,0,["bc",AYL(AQY)],AEr,0,B,[By],3,3,0,0,0,VQ,0,B,[BX],0,3,0,0,["bc",AYL(AQv)],Tn,0,CT,[],0,0,0,0,["c",AYN(AIo),"J",AYL(ASl)],ZP,0,CT,[],0,0,0,0,["c",AYN(AKm)],RA,
0,CT,[],0,0,0,0,["c",AYN(AJC)],Uy,0,CT,[],0,0,0,0,["c",AYN(AIw),"J",AYL(AQH)],FL,0,CT,[],0,0,0,0,["c",AYN(AUf)],B6,0,BK,[],1,0,0,0,["c",AYN(AVy),"b8",AYK(ATo),"J",AYL(ANw)],AF7,0,B6,[],0,0,0,0,["bA",AYM(ASL),"cs",AYN(ALE),"cv",AYO(AKd),"J",AYL(AIu)],B2,0,BK,[],0,0,0,0,["c",AYN(AMp),"Q",AYL(AQx),"b2",AYL(AOt),"J",AYL(ARp),"eK",AYK(AJ_)],JB,0,B2,[],0,0,0,0,["c",AYN(AQh),"J",AYL(ARK)],DW,0,JB,[],0,0,0,0,["c",AYN(AKQ),"Q",AYL(ARv)],Nz,0,DW,[],0,0,0,0,["c",AYN(AQs),"J",AYL(AT1)],X5,0,DW,[],0,0,0,0,["c",AYN(AJg),
"J",AYL(ATu)],SY,0,DW,[],0,0,0,0,["c",AYN(AJ6),"J",AYL(AVZ)],Vb,0,DW,[],0,0,0,0,["c",AYN(AHS),"J",AYL(AR8)],GV,0,B2,[],0,0,0,0,["c",AYN(AIf),"cs",AYN(AON),"cv",AYO(ASq),"b2",AYL(AOk),"fV",AYK(AQB),"eK",AYK(AU1)],Hb,0,B,[],1,0,0,0,0,X,0,Hb,[],1,0,0,Qh,["dx",AYK(AJi),"fj",AYK(AIN),"jQ",AYK(ATg),"hA",AYK(AUU)],ABX,0,X,[],0,0,0,0,["l",AYL(C4),"dx",AYK(CY),"fj",AYK(ALy),"jQ",AYK(ATN),"cM",AYK(APE),"hA",AYK(ALP)],JW,0,Bu,[],0,3,0,0,0,Ed,0,BK,[],1,0,0,0,["b2",AYL(ASs),"J",AYL(AT$),"eK",AYK(AO9)],C5,0,Ed,[],0,0,0,0,
["c",AYN(AHV)],Fl,0,C5,[],0,0,0,0,["c",AYN(AI2)]]);
$rt_metadata([CV,0,Ed,[],0,0,0,0,["c",AYN(AIe)],EL,0,C5,[],0,0,0,0,["c",AYN(AOW),"Q",AYL(AV4)],Yk,0,C5,[],0,0,0,0,["c",AYN(AVp),"cs",AYN(APA)],Bc,0,B,[],1,0,0,0,0,Dj,0,BE,[],0,3,0,0,0,N2,0,Hb,[Ef],0,0,0,0,["cM",AYK(APJ)],PD,0,BK,[],0,0,0,0,["c",AYN(ANZ),"J",AYL(AQw)],Y8,0,B,[Ef,CN],0,3,0,0,0,NM,0,B2,[],0,0,0,0,0,R_,0,B2,[],0,0,0,0,["c",AYN(AIV),"Q",AYL(AQf),"J",AYL(AJG),"b2",AYL(AJh)],DM,0,B2,[],0,0,0,0,["c",AYN(ALp),"l",AYL(AL4),"b2",AYL(AIR),"Q",AYL(AS7),"J",AYL(ALC)],JT,0,DM,[],0,0,0,0,["l",AYL(ANx)],ABJ,
0,B6,[],0,0,0,0,["bA",AYM(AN0)],Ep,0,B6,[],0,0,0,0,["bA",AYM(Nh),"b2",AYL(AQA)],Qi,0,B2,[],0,0,0,0,["Q",AYL(AOU),"c",AYN(AHI),"b2",AYL(AJx),"J",AYL(ATP)],Ew,0,B6,[],0,0,0,0,["b8",AYK(AND),"bA",AYM(AMG),"cs",AYN(ALm),"cv",AYO(ANM),"b2",AYL(ATJ)],AGL,0,B6,[],0,0,0,0,["bA",AYM(AHz)],AAI,0,B6,[],0,0,0,0,["bA",AYM(AH5)],Fs,0,B2,[],0,0,0,0,["Q",AYL(AU0),"c",AYN(AQg),"b2",AYL(AN1),"J",AYL(ARw)],ZB,0,Fs,[],0,0,0,0,0,Vn,0,Fs,[],0,0,0,0,0,AAt,0,CV,[],0,0,0,0,["c",AYN(AKs)],Rr,0,CV,[],0,0,0,0,["c",AYN(APm)],F9,0,CV,[],
0,0,0,0,["c",AYN(AS4),"Q",AYL(AUk)],Q2,0,F9,[],0,0,0,0,["c",AYN(ANH),"Q",AYL(APL)],Fq,0,CV,[],0,0,0,0,["c",AYN(AVV)],Oe,0,Fq,[],0,0,0,0,["c",AYN(AM8)],Te,0,CV,[],0,0,0,0,["c",AYN(AU8)],Sl,0,F9,[],0,0,0,0,["c",AYN(AJI)],Wu,0,Fq,[],0,0,0,0,["c",AYN(AID)],Tg,0,Ed,[],0,0,0,0,["c",AYN(AVF),"cs",AYN(ATj)],PR,0,Ed,[],0,0,0,0,["c",AYN(AQC),"cs",AYN(AHN)],E1,0,B,[],1,0,0,0,0,AAv,0,C5,[],0,0,0,0,["c",AYN(AIE)],Yf,0,EL,[],0,0,0,0,["c",AYN(APl)],QI,0,Fl,[],0,0,0,0,["c",AYN(ASu)],Sh,0,C5,[],0,0,0,0,["c",AYN(AQu)],VE,0,EL,
[],0,0,0,0,["c",AYN(AIQ)],SZ,0,Fl,[],0,0,0,0,["c",AYN(ASP)],K9,0,BK,[],4,0,0,0,["c",AYN(AOr),"J",AYL(ANh)],ACx,0,BK,[],0,0,0,0,["c",AYN(AJe),"J",AYL(AJs)],PI,0,BK,[],0,0,0,0,["c",AYN(ANz),"J",AYL(AVQ)],Zd,0,BK,[],4,0,0,0,["c",AYN(ARj),"J",AYL(AKg)],YG,0,BK,[],0,0,0,0,["c",AYN(AQb),"J",AYL(AHx)],Ot,0,BK,[],0,0,0,0,["c",AYN(AJ8),"J",AYL(AMf)],AGt,0,B2,[],0,0,0,0,["c",AYN(AVd),"Q",AYL(AJz),"ip",AYK(APS),"J",AYL(AJy)],ABV,0,B2,[],4,0,0,0,["c",AYN(AP4),"Q",AYL(ASf),"ip",AYK(AHs),"J",AYL(AVv)],AGg,0,BK,[],4,0,0,0,
["c",AYN(AN7),"J",AYL(AL$)],AEn,0,BK,[],0,0,0,0,["c",AYN(AP_),"J",AYL(AL0)],AAF,0,BK,[],0,0,0,0,["c",AYN(ANa),"J",AYL(AKk)]]);
$rt_metadata([Hy,0,B2,[],0,0,0,0,["c",AYN(AIJ),"Q",AYL(ARt),"J",AYL(ARN)],AGn,0,Hy,[],0,0,0,0,["c",AYN(AKr),"cs",AYN(ATY),"cv",AYO(AIq),"b2",AYL(APc)],ADq,0,Hy,[],0,0,0,0,["c",AYN(AOH)],PC,0,GG,[Iu],0,3,0,0,["mK",AYO(ALS),"lQ",AYN(AJk),"iz",AYL(AJT),"ni",AYM(ATn)],Ti,0,B6,[],0,0,0,0,["bA",AYM(AKM),"cs",AYN(AJa),"cv",AYO(AMd),"b2",AYL(AMQ)],AAE,0,B6,[],0,0,0,0,["bA",AYM(AOP)],Ok,0,B6,[],0,0,0,0,["bA",AYM(ASx)],Hx,0,B,[],4,0,0,AR5,0,Nr,0,B6,[],0,0,0,0,["bA",AYM(ASE)],LE,0,B2,[],0,0,0,0,["Q",AYL(AQr),"c",AYN(AKh),
"cs",AYN(AMO),"cv",AYO(AKU),"b2",AYL(AIn),"J",AYL(ATv)],LW,0,B2,[],0,0,0,0,["Q",AYL(AJR),"c",AYN(AHT),"cs",AYN(AQR),"cv",AYO(ASv),"b2",AYL(AKN),"J",AYL(AQ4)],D5,0,B6,[],0,0,0,0,["bA",AYM(ARO),"cs",AYN(APF),"cv",AYO(AJQ),"b2",AYL(ARA)],W3,0,E1,[],0,0,0,0,["ib",AYL(AJ2),"t$",AYM(ARH)],W4,0,E1,[],0,0,0,0,["ib",AYL(ASR),"t$",AYM(AUO)],AFm,0,B,[],0,0,0,0,0,AAY,0,B,[],0,0,0,0,0,LA,0,Bc,[],0,0,0,0,["D",AYK(ADy)],KH,0,Bc,[],0,0,0,0,["D",AYK(AEe)],AFf,0,Bc,[],0,0,0,0,["D",AYK(ASk)],AFM,0,Bc,[],0,0,0,0,["D",AYK(ATx)],AFQ,
0,Bc,[],0,0,0,0,["D",AYK(ALq)],Lt,0,Bc,[],0,0,0,0,["D",AYK(ABZ)],Mc,0,Lt,[],0,0,0,0,["D",AYK(ACY)],AHi,0,Bc,[],0,0,0,0,["D",AYK(AMN)],Nc,0,Mc,[],0,0,0,0,["D",AYK(AAB)],ADP,0,Nc,[],0,0,0,0,["D",AYK(AO$)],AD9,0,Bc,[],0,0,0,0,["D",AYK(AKF)],ACn,0,Bc,[],0,0,0,0,["D",AYK(AO7)],AB9,0,Bc,[],0,0,0,0,["D",AYK(AUT)],AFV,0,Bc,[],0,0,0,0,["D",AYK(APO)],AHr,0,Bc,[],0,0,0,0,["D",AYK(AHL)],AFn,0,Bc,[],0,0,0,0,["D",AYK(ANd)],AE8,0,Bc,[],0,0,0,0,["D",AYK(ARW)],AF$,0,Bc,[],0,0,0,0,["D",AYK(AKC)],ABg,0,Bc,[],0,0,0,0,["D",AYK(AK2)],AAR,
0,Bc,[],0,0,0,0,["D",AYK(AUJ)],AFu,0,Bc,[],0,0,0,0,["D",AYK(AHA)],AFG,0,Bc,[],0,0,0,0,["D",AYK(AOa)],ACP,0,Bc,[],0,0,0,0,["D",AYK(ALa)],AEc,0,Bc,[],0,0,0,0,["D",AYK(AMi)],AG2,0,Bc,[],0,0,0,0,["D",AYK(AOc)],AFF,0,Bc,[],0,0,0,0,["D",AYK(ATS)],ADm,0,Bc,[],0,0,0,0,["D",AYK(ARf)],ACN,0,Bc,[],0,0,0,0,["D",AYK(APG)],AHo,0,Bc,[],0,0,0,0,["D",AYK(AR_)],J6,0,Bc,[],0,0,0,0,["D",AYK(AD_)],AGb,0,J6,[],0,0,0,0,["D",AYK(APu)],ADU,0,LA,[],0,0,0,0,["D",AYK(AI7)],ACI,0,KH,[],0,0,0,0,["D",AYK(AMA)],ACc,0,Bc,[],0,0,0,0,["D",AYK(AOu)]]);
$rt_metadata([ACD,0,Bc,[],0,0,0,0,["D",AYK(AUx)],ADG,0,Bc,[],0,0,0,0,["D",AYK(ALW)],ADQ,0,Bc,[],0,0,0,0,["D",AYK(AHB)],ACh,0,B,[],4,0,0,0,0,ABH,0,B,[],4,3,0,0,0,Ou,0,B,[],0,3,0,0,0,AFA,0,B,[],0,3,0,0,0,ADi,0,B,[],4,3,0,0,0,M8,0,Bu,[],0,3,0,0,0,ABW,0,B,[Eh],0,3,0,0,0,Pr,0,B,[Z],0,3,0,0,["g",AYL(AUK)],Qf,0,B,[Z],0,3,0,0,["g",AYL(AM6)],YR,0,B,[Z],0,3,0,0,["g",AYL(AQP)],ABd,0,B,[],0,3,0,0,0,AAa,0,B,[Z],0,3,0,0,["g",AYL(AP5)],AD$,0,Hw,[],0,3,0,0,0,Si,0,B,[],3,3,0,0,0,U8,0,B,[Z],0,3,0,0,0,Ws,0,B,[Z],0,3,0,0,0,Yj,
0,X,[],0,0,0,0,["l",AYL(ALw)],Yh,0,X,[],0,0,0,0,["l",AYL(AIb)],PW,0,X,[],0,0,0,0,["l",AYL(AOi),"cM",AYK(AMm)],P4,0,X,[],0,0,0,0,["l",AYL(ART)],P2,0,X,[],0,0,0,0,["l",AYL(ASD)],P3,0,X,[],0,0,0,0,["l",AYL(AOO)],P7,0,X,[],0,0,0,0,["l",AYL(AK7)],P8,0,X,[],0,0,0,0,["l",AYL(AHt)],P5,0,X,[],0,0,0,0,["l",AYL(AMr)],P6,0,X,[],0,0,0,0,["l",AYL(AOS)],P$,0,X,[],0,0,0,0,["l",AYL(AT2)],P_,0,X,[],0,0,0,0,["l",AYL(AKy)],PV,0,X,[],0,0,0,0,["l",AYL(AV7)],QO,0,X,[],0,0,0,0,["l",AYL(AMx)],PT,0,X,[],0,0,0,0,["l",AYL(AKw)],PU,0,X,
[],0,0,0,0,["l",AYL(AL7)],PZ,0,X,[],0,0,0,0,["l",AYL(ANB)],PS,0,X,[],0,0,0,0,["l",AYL(ATF)],PX,0,X,[],0,0,0,0,["l",AYL(AJn)],PY,0,X,[],0,0,0,0,["l",AYL(AQ3)],ME,0,B,[],3,3,0,0,0,T4,0,B,[ME],4,3,0,0,0,ADW,0,B,[FU],0,3,0,0,0,C2,0,B,[],3,3,0,AFT,0,Cn,0,Co,[],12,3,0,AEW,0,DI,0,B,[],3,3,0,AIA,0,XT,0,B,[],0,3,0,0,0,W8,0,B,[Z],0,3,0,0,["g",AYL(AOw)],N9,0,GV,[],0,0,0,0,["cs",AYN(ALY),"cv",AYO(AVU),"fV",AYK(AKf)],R8,0,Bu,[],0,3,0,0,0,Zq,0,Bu,[],0,3,0,0,0]);
$rt_metadata([WX,0,F7,[],0,3,0,0,0,RT,0,F7,[],0,3,0,0,0,AFB,0,B,[Eh],0,0,0,0,0,WQ,0,B,[],0,3,0,0,0,ACR,0,B,[Si],0,3,0,0,0,Pv,0,B,[Bj],0,3,0,0,0,VO,0,B,[Z],0,3,0,0,0,VR,0,B,[Z],0,3,0,0,0,AFp,0,B,[],3,3,0,0,0,AA$,0,B,[],0,3,0,0,0,TW,0,B,[Ig],0,3,0,0,0,WV,0,B,[ME],0,0,0,0,0,OE,0,B,[Bj],0,3,0,0,["o",AYK(ATa)],Zx,0,B,[Z],0,3,0,0,["g",AYL(AVN)],Sw,0,B,[Eh],0,3,0,0,["X",AYL(AQp)],Sy,0,B,[Gs],0,3,0,0,["pa",AYM(AMe)],Q5,0,B,[Eh],0,3,0,0,["X",AYL(AN_)],Q4,0,B,[Gs],0,3,0,0,["pa",AYM(AIp)],UL,0,X,[],0,0,0,0,["l",AYL(AUe)],NE,
0,X,[],0,0,0,0,["l",AYL(AI5)],Ty,0,X,[],0,0,0,0,["l",AYL(AIO)],Tx,0,X,[],0,0,0,0,["l",AYL(ALU)],YP,0,X,[],0,0,0,0,["l",AYL(ANo)],QC,0,X,[],0,0,0,0,["l",AYL(AUh)],Px,0,X,[],0,0,0,0,["l",AYL(AQm)],SB,0,X,[],0,0,0,0,["l",AYL(AR4)],Ny,0,X,[],0,0,0,0,["l",AYL(AVt)],NC,0,X,[],0,0,0,0,["l",AYL(AKT)],O3,0,X,[],0,0,0,0,["l",AYL(AUq)],Q8,0,X,[],0,0,0,0,["l",AYL(AO5)],Re,0,X,[],0,0,0,0,["l",AYL(ARr)],Vh,0,X,[],0,0,0,0,["l",AYL(AT3)],T5,0,X,[],0,0,0,0,["l",AYL(AU4)],NV,0,X,[],0,0,0,0,["l",AYL(AKD)],MY,0,X,[],0,0,0,0,["l",
AYL(AQo)],Tr,0,MY,[],0,0,0,0,["l",AYL(AS8)],ABz,0,B,[Z],0,0,0,0,0,RH,0,B,[Jr],0,3,0,0,["sC",AYK(AOC)],Xq,0,B,[BX],0,3,0,0,["bc",AYL(ARi)],Xt,0,B,[BX],0,3,0,0,["bc",AYL(APT)],U9,0,B,[BX],0,3,0,0,["bc",AYL(AMJ)],Va,0,B,[BX],0,3,0,0,["bc",AYL(AH3)],Wd,0,B,[BX],0,3,0,0,["bc",AYL(AOy)],Up,0,B,[Z],0,3,0,0,["g",AYL(AI4)],Uq,0,B,[Z],0,3,0,0,["g",AYL(AJK)],Un,0,B,[Z],0,3,0,0,["g",AYL(ARU)],ABt,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.OZ=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ",
"x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","RenderTexture","ScissorDemo","LineShaderDemo1","LineShaderDemo2",
"ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Editor0","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n"
+"  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n    }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    "
+"}\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\n","\r","Full file parsed in ","ms","Resolving all in "," ms","change model language: from = "," to = ","opening file ",".java","prev = ",
" pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parseScopes","setDiffModel","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ","renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = ",
" }","File is too large: "," name: ",", size = ","\\n","Cannot find type: ","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",
", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=",
"onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134",
"#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","#6AAB73","comma","error","#F75464","unused","#6F737A","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D",
"#808080","#BBB529","nwse-resize","nesw-resize","Expected "," ints to write, but "," written"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","Member should contains at least 1 decl","Unknown scope type: ","readClipboardText error: ","Unexpected type: ","Empty Expression",
"Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in ","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile","asyncParseFirstLines",
"asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
BA.prototype.toString=function(){return $rt_ustr(this);};
BA.prototype.valueOf=BA.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AJM(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CH=Long_add;var Iz=Long_sub;var Ca=Long_mul;var AFs=Long_div;var AH4=Long_rem;var AWM=Long_or;var C0=Long_and;var A2G=Long_xor;var GR=Long_shl;var AW6=Long_shr;var F1=Long_shru;var A2H=Long_compare;var H_=Long_eq;var A2I=Long_ne;var AWH=Long_lt;var ALf=Long_le;var A2J=Long_gt;var A2K=Long_ge;var A2L=Long_not;var AXo=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AXu);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Vq.prototype;c.f=c.bc;c=Vo.prototype;c.f=c.bc;c=Oi.prototype;c.f=c.bc;c=ADS.prototype;c.get=c.AE;Object.defineProperty(c,"length",{get:c.JS});c=O5.prototype;c.f=c.bc;c=AA7.prototype;c.removeEventListener=c.GJ;c.dispatchEvent=c.Ey;c.get=c.AE;c.addEventListener=c.CM;Object.defineProperty(c,"length",{get:c.EI});c=Qu.prototype;c.accept=c.xr;c=Qv.prototype;c.accept=c.xr;c=Xl.prototype;c.onAnimationFrame=c.GN;c=Xj.prototype;c.f=c.w_;c=Xg.prototype;c.handleEvent=c.cm;c=Xh.prototype;c.f=c.bc;c=Ys.prototype;c.handleEvent
=c.cm;c=Yt.prototype;c.handleEvent=c.cm;c=Yu.prototype;c.handleEvent=c.cm;c=Yv.prototype;c.handleEvent=c.cm;c=Yw.prototype;c.handleEvent=c.cm;c=Yx.prototype;c.handleEvent=c.cm;c=Yy.prototype;c.handleEvent=c.cm;c=Yz.prototype;c.handleEvent=c.cm;c=YA.prototype;c.handleEvent=c.cm;c=YB.prototype;c.handleEvent=c.cm;c=Z8.prototype;c.handleEvent=c.cm;c=Z9.prototype;c.handleEvent=c.cm;c=Z$.prototype;c.handleEvent=c.cm;c=Z_.prototype;c.handleEvent=c.cm;c=V6.prototype;c.handleEvent=c.cm;c=ZI.prototype;c.f=c.bc;c=ZJ.prototype;c.f
=c.bc;c=Or.prototype;c.f=c.bc;c=Oq.prototype;c.f=c.bc;c=Oo.prototype;c.f=c.bc;c=On.prototype;c.f=c.bc;c=OY.prototype;c.accept=c.xr;c=NH.prototype;c.f=c.bc;c=NK.prototype;c.f=c.bc;c=NI.prototype;c.f=c.bc;c=QN.prototype;c.f=c.w_;c=QL.prototype;c.f=c.w_;c=SJ.prototype;c.f=c.bc;c=Wh.prototype;c.f=c.bc;c=NG.prototype;c.f=c.bc;c=ZE.prototype;c.f=c.bc;c=ZD.prototype;c.f=c.bc;c=YK.prototype;c.f=c.bc;c=YJ.prototype;c.f=c.bc;c=Zz.prototype;c.handleEvent=c.cm;c=RU.prototype;c.f=c.bc;c=NB.prototype;c.onTimer=c.sC;c=Nm.prototype;c.onTimer
=c.sC;c=ZC.prototype;c.f=c.bc;c=Zg.prototype;c.f=c.bc;c=VQ.prototype;c.f=c.bc;c=RH.prototype;c.onTimer=c.sC;c=Xq.prototype;c.f=c.bc;c=Xt.prototype;c.f=c.bc;c=U9.prototype;c.f=c.bc;c=Va.prototype;c.f=c.bc;c=Wd.prototype;c.f=c.bc;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);