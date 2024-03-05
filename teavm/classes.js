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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hA=f;}
function $rt_cls(cls){return S3(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hr(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cc.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASi(t);}
function $rt_throwableCause(t){return A0w(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A5y());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A5z(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A5A());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BL=$rt_compare;var A5B=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var Jb=$rt_isInstance;var A5C=$rt_nativeThread;var A5D=$rt_suspending;var A5E=$rt_resuming;var A5F=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bc=$rt_imul;var EW=$rt_wrapException;var A5G=$rt_checkBounds;var A5H=$rt_checkUpperBound;var A5I=$rt_checkLowerBound;var A5J=$rt_wrapFunction0;var A5K=$rt_wrapFunction1;var A5L=$rt_wrapFunction2;var A5M=$rt_wrapFunction3;var A5N=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AJg=$rt_createCharArrayFromData;var A3F=$rt_createByteArrayFromData;var A4d=$rt_createShortArrayFromData;var DX=$rt_createIntArrayFromData;var A5O=$rt_createBooleanArrayFromData;var A5P=$rt_createFloatArrayFromData;var A5Q=$rt_createDoubleArrayFromData;var AIA=$rt_createLongArrayFromData;var A5x=$rt_createBooleanArray;var DL=$rt_createByteArray;var A5R=$rt_createShortArray;var B5=$rt_createCharArray;var BP=$rt_createIntArray;var A5S=$rt_createLongArray;var ALy=$rt_createFloatArray;var A5T
=$rt_createDoubleArray;var BL=$rt_compare;var A5U=$rt_castToClass;var A5V=$rt_castToInterface;var A5W=Long_toNumber;var Bp=Long_fromInt;var A5X=Long_fromNumber;var D=Long_create;var FH=Long_ZERO;var A5Y=Long_hi;var GR=Long_lo;
function B(){this.$id$=0;}
function BE(a){return S3(a.constructor);}
function AQh(a,b){return a!==b?0:1;}
function AMK(a){var b,c,d,e,f,g,h,i,j;b=MB(a);if(!b)c=C(0);else{d=(((32-Xa(b)|0)+4|0)-1|0)/4|0;e=B5(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Ik((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hr(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function MB(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APC(a){var b,c,d;if(!Jb(a,Ex)&&a.constructor.$meta.item===null){b=new Ua;Y(b);N(b);}b=ALC(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RU(){var a=this;B.call(a);a.BI=0;a.qr=null;}
function A4X(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AKE();AId();AFU();AGB();AHV();AI0();AF3();AEk();AFx();AHm();AIc();AKd();AGm();AJu();AI4();AG1();AGf();AI_();AKU();AF5();AIG();AFz();AKk();AJU();AKi();AIq();AHN();AHh();c=(AEy()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))X8(C(2),C(3));else{d=new RU;BJ(d);e=new ABi;e.An=d;f=new WD;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new Pz;j.yx=i;j.yy=g;j.yz
=3;j.yA=e;j.yu=f;k=Bv(j,"f");i.onmessage=k;h=h+1|0;}l=I(LZ,[E$(C(4),C(5),300),E$(C(6),C(7),300),E$(C(8),C(5),400),E$(C(9),C(7),400),E$(C(10),C(5),600),E$(C(11),C(7),600),E$(C(12),C(5),700),E$(C(13),C(7),700)]);m=Q(LZ,1);m.data[0]=ASM(C(14),Fs(C(15),C(16)),C(5),400);b=(LW(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.t8;f=c.tg;i=new K;M(i);BN(H(H(i,C(17)),f),41);i=L(i);f=c.td;o=c.r7;c=AW7($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BJ(d);c=new ABj;c.A1=d;g=new ABh;e.then(Bv(c,"f"),Bv(g,"f"));}}
function AGH(b){var c,d,e,f,g,h,i,j;c=new AAr;d=new T$;d.yh=c;c.tO=d;d=new T8;d.BQ=c;c.op=d;e=new T9;e.zN=c;c.vr=new $rt_globals.ResizeObserver(Bv(e,"f"));d=new T7;d.rE=c;c.w$=d;c.ls=1;d=new Z_;d.mr=new Tt;e=new X6;e.DJ=null;e.mj=A5Z;d.ss=e;BJ(e);f=new AAd;f.z0=e;d.BK=f;d.A$=b;g=b.length;h=0;while(h<g){e=b[h];i=new AAe;i.zj=d;i.zi=h;f=Bv(i,"f");e.onmessage=f;e=b[h];f=AJs();e.postMessage(f);h=h+1|0;}d.iw=0;d.pf=BP(g);c.Bo=d;c.qL=(Ev()).getElementById("canvasDiv");d=AEy();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.et=d;c.qL.appendChild(d);b=c.et;d=ARj(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)X8(C(2),C(18));else{c.pL=A4J(c.et,c.op);b=new T0;j=c.op;AKD(b,e,new ABO,1,2.25,0.625);b.DH=new ABN;b.C8=j;c.hQ=b;AR2(c.vr,c.et,AUP());d=$rt_globals.window;j=c.w$;d.addEventListener("resize",Bv(j,"handleEvent"));j=new OI;b=c.hQ;d=c.pL.ct;j.P=b;j.o=d;j.bw=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new Pd;El(b,j);d=$rt_globals.fetch("test.wasm");j
=new WM;d=d.then(Bv(j,"f"));j=new WL;e=d.then(Bv(j,"f"));j=new WJ;d=new WI;e.then(Bv(j,"f"),Bv(d,"f"));}else b=Bj(C(20),d)?A4E(j):(A1m(J(d)<=0?C(21):Dv(d,1))).bb(j);c.gE=b;SS(c);}c.et.focus();}
var WC=G(0);
var Wd=G(0);
function ACP(){var a=this;B.call(a);a.m1=null;a.vu=null;a.d5=null;}
function S3(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ACP;c.d5=b;d=c;b.classObject=d;}return c;}
function JO(a){if(a.m1===null)a.m1=AGY(a.d5);return a.m1;}
function M5(a){var b,c,d,e;b=a.vu;if(b===null){if(AK$(a.d5)===null?0:1){b=M5(HU(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d5.$meta.enclosingClass;if((b===null?null:S3(b))!==null){b=$rt_str(a.d5.$meta.simpleName);if(b===null)b=C(21);}else{b=AGY(a.d5);d=RJ(b,36);if(d==(-1)){e=RJ(b,46);if(e!=(-1))b=Dv(b,e+1|0);}else{b=Dv(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.vu=b;}return b;}
function IO(a){return a.d5.$meta.primitive?1:0;}
function HU(a){return S3(AK$(a.d5));}
var AIK=G();
function Bv(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fd(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AIy=G();
function ALC(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AJ9(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AJ9(d[e],c))return 1;e=e+1|0;}return 0;}
function AK$(b){return b.$meta.item;}
function AGY(b){return $rt_str(b.$meta.name);}
function GY(){var a=this;B.call(a);a.iQ=null;a.nn=null;a.kG=0;a.k3=0;}
function A50(){var a=new GY();Y(a);return a;}
function A51(a){var b=new GY();Bm(b,a);return b;}
function Y(a){a.kG=1;a.k3=1;}
function Bm(a,b){a.kG=1;a.k3=1;a.iQ=b;}
function AWZ(a){return a;}
function ASi(a){return a.iQ;}
function A0w(a){var b;b=a.nn;if(b===a)b=null;return b;}
var Ew=G(GY);
function A52(){var a=new Ew();AGu(a);return a;}
function AGu(a){Y(a);}
var Bu=G(Ew);
function A5z(a){var b=new Bu();A1V(b,a);return b;}
function A1V(a,b){Bm(a,b);}
var AJx=G(Bu);
var C7=G(0);
var CL=G(0);
var Kj=G(0);
function BK(){var a=this;B.call(a);a.cc=null;a.j6=0;}
var A53=null;var A54=null;var A55=null;function Fc(){Fc=Bn(BK);ATc();}
function AOA(){var a=new BK();AEi(a);return a;}
function Hr(a){var b=new BK();Jq(b,a);return b;}
function EC(a,b,c){var d=new BK();OB(d,a,b,c);return d;}
function AEi(a){Fc();a.cc=A53;}
function Jq(a,b){Fc();OB(a,b,0,b.data.length);}
function OB(a,b,c,d){var e;Fc();e=B5(d);a.cc=e;C6(b,c,e,0,d);}
function Ms(b){var c;Fc();c=AOA();c.cc=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.cc.data;if(b<c.length)return c[b];}d=new Ig;Y(d);N(d);}
function J(a){return a.cc.data.length;}
function Gq(a){return a.cc.data.length?0:1;}
function QT(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C6(a.cc,b,d,e,c);return;}}g=new BH;Y(g);N(g);}
function Oo(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ABJ(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Nw(a,b){if(a===b)return 1;return ABJ(a,b,0);}
function DA(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JW(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cc.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JP(b);h=Jc(b);while(true){f=a.cc.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hw(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cc.data[d]==e)break;d=d+(-1)|0;}return d;}f=JP(b);g=Jc(b);while(true){if(d<1)return (-1);h=a.cc.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RJ(a,b){return Hw(a,b,J(a)-1|0);}
function Yx(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AZv(a,b){return Yx(a,b,0);}
function QQ(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AFC(a,b){return QQ(a,b,J(a));}
function Cv(a,b,c){var d,e;d=BL(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d){Fc();return A54;}if(!b&&c==J(a))return a;return EC(a.cc,b,c-b|0);}
function Dv(a,b){return Cv(a,b,J(a));}
function QZ(a,b,c){return Cv(a,b,c);}
function Fs(a,b){var c,d,e,f,g,h;if(Gq(b))return a;if(Gq(a))return b;c=B5(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Ms(c);}
function AB$(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BN(d,P(a,f));}f=f+1|0;}H(d,Dv(a,f));return L(d);}
function ZS(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cv(a,b,c+1|0);}
function AMI(a){return a;}
function Gs(a){var b,c,d,e,f;b=a.cc.data;c=B5(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cl(b){Fc();return b===null?C(23):b.cO();}
function NB(b){var c,d;Fc();c=new BK;d=B5(1);d.data[0]=b;Jq(c,d);return c;}
function Dl(b){var c;Fc();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BK))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function NU(a){var b,c,d,e;a:{if(!a.j6){b=a.cc.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j6=(31*a.j6|0)+e|0;d=d+1|0;}}}return a.j6;}
function Mc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new F2;Bm(b,C(24));N(b);}A56=1;d=new Zt;d.mQ=Q(C0,10);d.hX=(-1);d.fL=(-1);d.bA=(-1);e=new G7;e.fr=1;e.bQ=b;e.bg=B5(J(b)+2|0);C6(Gs(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.zK=g;e.hc=0;FP(e);FP(e);d.l=e;d.dX=0;d.nv=Vz(d,(-1),0,null);if(!DC(d.l)){b=new Kf;h=d.l;MM(b,C(21),h.bQ,h.dt);N(b);}if(d.q8)d.nv.eU();b=BM();h=new AAh;h.kl=(-1);h.o5=(-1);h.Cw=d;h.A3=d.nv;h.lI=a;h.kl=0;g=J(a);h.o5=g;e=new AB_;i=h.kl;j=d.hX;k=d.fL+1|0;l=d.bA
+1|0;e.iU=(-1);m=j+1|0;e.rN=m;e.d_=BP(m*2|0);f=BP(l);e.kX=f;Ju(f,(-1));if(k>0)e.po=BP(k);Ju(e.d_,(-1));ADR(e,a,i,g);h.cI=e;e.gz=1;n=0;m=0;if(!J(a)){f=Q(BK,1);f.data[0]=C(21);}else{while(true){l=J(h.lI);if(!AEs(h))l=h.o5;e=h.cI;if(e.eQ>=0&&AFt(e)==1){e=h.cI;e.eQ=MA(e);if(MA(h.cI)==AGA(h.cI)){e=h.cI;e.eQ=e.eQ+1|0;}g=h.cI.eQ;g=g<=l&&OQ(h,g)?1:0;}else g=OQ(h,h.kl);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BB(b,QZ(a,m,AHC(h)));m=AI1(h);n=g;}a:{BB(b,QZ(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(BG(b,
g)))break a;EM(b,g);}}if(g<0)g=0;f=Go(b,Q(BK,g));}return f;}
function AOd(a,b){return Oo(a,b);}
function ATc(){A53=B5(0);A54=AOA();A55=new SH;}
var Fy=G(GY);
var Il=G(Fy);
var AJc=G(Il);
var Es=G();
function HF(){Es.call(this);this.bp=0;}
var A57=null;var A58=null;function A1h(a){var b=new HF();AE7(b,a);return b;}
function AE7(a,b){a.bp=b;}
function J0(b){return (WW(A5q(20),b,10)).cO();}
function KK(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dt;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Dt;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dt;Y(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=X3(P(b,f));if(i<0){j=new Dt;k=Cv(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Dt;l=Cv(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dt;k=Cv(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Dt;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CY(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A58===null){A58=Q(HF,256);c=0;while(true){d=A58.data;if(c>=d.length)break a;d[c]=A1h(c-128|0);c=c+1|0;}}}return A58.data[b+128|0];}return A1h(b);}
function AUE(a){return a.bp;}
function A2s(a,b){if(a===b)return 1;return b instanceof HF&&b.bp==a.bp?1:0;}
function Xa(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I4(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AYf(a,b){b=b;return BL(a.bp,b.bp);}
function AKE(){A57=F($rt_intcls());}
function GS(){var a=this;B.call(a);a.C=null;a.L=0;}
function A59(){var a=new GS();M(a);return a;}
function A5q(a){var b=new GS();GM(b,a);return b;}
function M(a){GM(a,16);}
function GM(a,b){a.C=B5(b);}
function WW(a,b,c){return AJn(a,a.L,b,c);}
function AJn(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cs(a,b,b+1|0);else{Cs(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Ik(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cs(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Ik($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AJ1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cs(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cs(a,b,b+8|0);d=b;}else{Cs(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A5$;AJV(c,f);d=f.m9;g=f.mX;h=f.re;i=1;j=1;if(h)j=2;k=9;l=ASO(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cs(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AIT(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cs(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cs(a,b,b+8|0);d=b;}else{Cs(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A5_;AFO(c,f);g=f.nw;h=f.mJ;i=f.q3;j=1;k=1;if(i)k=2;l=18;m=ARy(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cs(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANI(p,FH))d=0;else{d=GR(AGI(g,p));g=AUN(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGI(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASO(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARy(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A6a.data;g=f.length-1|0;while(g>=0){if(II(AUN(b,Ci(c,f[g])),FH)){d=d|e;c=Ci(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BN(a,b){return a.p2(a.L,b);}
function ADI(a,b,c){Cs(a,b,b+1|0);a.C.data[b]=c;return a;}
function MX(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=KG(a.C,d);}
function L(a){return EC(a.C,0,a.L);}
function ADs(a,b,c,d){return a.pK(a.L,b,c,d);}
function Ww(a,b,c,d,e){var f,g,h,i;Cs(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JZ(a,b){return a.o_(b,0,b.data.length);}
function Cs(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.j0((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var JG=G(0);
var K=G(GS);
function L4(){var a=new K();A2g(a);return a;}
function A2g(a){M(a);}
function H(a,b){var c;c=a.L;if(b===null)b=C(23);Mv(a,c,b);return a;}
function BY(a,b){Mv(a,a.L,b);return a;}
function U(a,b){WW(a,b,10);return a;}
function HK(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(A3n(b,FH)){d=0;b=A4W(b);}a:{if(DF(b,Bp(10))<0){if(d)Cs(a,c,c+1|0);else{Cs(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Ik(GR(b),10);}else{g=1;h=Bp(1);i=De(Bp(-1),Bp(10));b:{while(true){j=Ci(h,Bp(10));if(DF(j,b)>0){j=h;break b;}g=g+1|0;if(DF(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cs(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(II(j,FH))break a;e=a.C.data;c=f+1|0;e[f]=Ik(GR((De(b,j))),10);b=AIf(b,j);j=De(j,Bp(10));f=c;}}}return a;}
function EG(a,b){AJ1(a,a.L,b);return a;}
function AEe(a,b){BN(a,b);return a;}
function Jt(a,b){Mv(a,a.L,!b?C(32):C(33));return a;}
function AHq(a,b,c){var d,e,f,g,h,i;d=BL(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ig;Y(i);N(i);}
function UE(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ig;Y(f);N(f);}
function AYb(a,b,c,d,e){Ww(a,b,c,d,e);return a;}
function ANw(a,b,c,d){ADs(a,b,c,d);return a;}
function AIr(a){return a.L;}
function Ed(a){return L(a);}
function APB(a,b){MX(a,b);}
function AYx(a,b,c){ADI(a,b,c);return a;}
function Mv(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=C(23);else if(Gq(c))break a;MX(a,a.L+J(c)|0);d=a.L-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.L=a.L+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ig;Y(c);N(c);}
var E4=G(Il);
var AKa=G(E4);
function A6b(a){var b=new AKa();AMN(b,a);return b;}
function AMN(a,b){Bm(a,b);}
var AI8=G(E4);
function A6c(a){var b=new AI8();AMZ(b,a);return b;}
function AMZ(a,b){Bm(a,b);}
var AA$=G(0);
var C_=G(0);
function BV(b,c){if(b!==null)b.b5();return c;}
var X0=G(0);
function Ka(){var a=this;B.call(a);a.jf=0;a.nS=0;a.nl=0;}
var A6d=0;function Ez(a){A6d=A6d-1|0;}
function Hx(a,b,c){Ky(a,AIQ(b,c,400,0));}
function La(a,b){return Lm(a,b,0.875);}
function Lm(a,b,c){return Eo(a,b)+c|0;}
function ZI(){var a=this;Ka.call(a);a.i7=null;a.dc=null;a.wV=null;}
function EQ(a){var b,c,d;b=a.dc;c=a.nS;d=a.nl;b.clearRect(0.0,0.0,c,d);}
function Z0(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dc;d="center";c.textAlign=d;break a;case 2:c=a.dc;d="right";c.textAlign=d;break a;default:break a;}d=a.dc;c="left";d.textAlign=c;}}
function Cn(a,b){Ky(a,b.qT);}
function Ky(a,b){var c;if(a.wV!==b){c=a.dc;a.wV=b;c.font=b;}}
function AIQ(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B0(a,b,c,d){var e,f,g;e=a.dc;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.dc.measureText(c).width;}
function J4(a,b,c,d){var e,f;e=a.dc;f=$rt_ustr(Hr(AJg([35,HW(b/16|0),HW(b%16|0),HW(c/16|0),HW(c%16|0),HW(d/16|0),HW(d%16|0)])));e.fillStyle=f;}
function AVz(){return {alpha:false};}
var AIe=G();
var AKK=G();
function BO(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function AFG(b){return b!==null?b.gG():0;}
function BJ(b){if(b!==null)return b;b=new F2;Bm(b,C(21));N(b);}
var BT=G(0);
function Nl(b){return b;}
var Ce=G(0);
function ABi(){B.call(this);this.An=null;}
function A2G(a,b){var c;c=a.An;c.qr=b;if(c.BI)AGH(b);}
var AGl=G();
function K3(b,c){return b.data[c];}
var AJK=G();
var AEt=G(0);
function E$(b,c,d){return ASM(C(34),Fs(C(15),b),c,d);}
var AKy=G(0);
var AGS=G(0);
function LW(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C8(b,f+g|0);C6(c,0,d,f,g);return d;}
function Lq(b,c,d){C6(b,c,d,0,d.data.length);return d;}
function Zz(b,c,d){var e;if(c>0)C6(b,0,d,0,c);e=d.data.length;if(c<e)C6(b,c+1|0,d,c,e-c|0);return d;}
function AFy(b,c,d,e){var f;if(c>0)C6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C6(b,d,e,c,f-d|0);}return e;}
function CR(b){var c;c=new PR;c.kf=b;return c;}
function AE3(b,c){if(b.data.length!=c)b=C8(b,c);return b;}
function AGR(b,c,d){var e;e=c.data.length;if(e==d)c=C8(c,e*2|0);c.data[d]=b;return c;}
function AB5(b,c,d){var e;e=c.data.length;if(e==d)c=Ok(c,e*2|0);c.data[d]=b;return c;}
function Oj(b){return KG(b,b.data.length);}
function LZ(){var a=this;B.call(a);a.t8=null;a.tg=null;a.td=null;a.r7=0;}
function ASM(a,b,c,d){var e=new LZ();ASc(e,a,b,c,d);return e;}
function ASc(a,b,c,d,e){a.t8=b;a.tg=c;a.td=d;a.r7=e;}
var AEY=G();
function AW7(b,c){return {style:b,weight:c};}
function ABj(){B.call(this);this.A1=null;}
function ALl(a,b){var c,d,e;c=a.A1;d=0;while(d<b.length){e=b[d];(Ev()).fonts.add(e);d=d+1|0;}c.BI=1;b=c.qr;if(b!==null)AGH(b);}
var ABh=G();
function A1A(a,b){$rt_globals.console.info("font load error "+b);}
var LD=G();
var A6e=null;var A6f=null;function Bt(){if(A6e===null)A6e=AQI(A6g,0);return A6e;}
function En(){if(A6f===null)A6f=AQI(A6h,0);return A6f;}
function A3I(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N2(b)&&(e+f|0)<=N2(d)){a:{b:{if(b!==d){g=HU(BE(b));h=HU(BE(d));if(g!==null&&h!==null){if(g===h)break b;if(!IO(g)&&!IO(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d5;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AJ9(n.constructor,o)?1:0)){NA(b,c,d,e,j);b=new Jd;Y(b);N(b);}j=j+1|0;k=m;}NA(b,c,d,e,f);return;}if(!IO(g))break a;if(IO(h))break b;else break a;}b=new Jd;Y(b);N(b);}}NA(b,c,
d,e,f);return;}b=new Jd;Y(b);N(b);}b=new BH;Y(b);N(b);}d=new F2;Bm(d,C(35));N(d);}
function C6(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N2(b)&&(e+f|0)<=N2(d)){NA(b,c,d,e,f);return;}b=new BH;Y(b);N(b);}
function NA(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E3(){return Long_fromNumber(new Date().getTime());}
function AGD(){return A5X($rt_globals.performance.now()*1000000.0);}
var AGQ=G();
var AI2=G();
function X8(b,c){var d,e,f;d=(Ev()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ev()).getElementById($rt_ustr(b)).appendChild(d);}
function AEy(){return (Ev()).createElement("canvas");}
function AHv(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ARj(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ALi=G();
var WD=G();
function AZn(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AG4=G();
function H3(b){return $rt_str(b);}
var AIn=G();
function KG(b,c){var d,e,f,g;b=b.data;d=B5(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ok(b,c){var d,e,f,g;b=b.data;d=DL(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Jh(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C8(b,c){var d,e,f,g;d=b.data;e=AGz(HU(BE(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AGr(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));U(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function ASr(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));EG(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function AUe(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));f=e[d];AIT(c,c.L,f);d=d+1|0;}BY(c,C(38));return L(c);}
function Ju(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;Y(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AES(b,c,d,e){var f,g;if(c>d){e=new BU;Y(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function K1(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A5Z;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.p$(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AJ2(b,c){return ABn(b,0,b.data.length,c);}
function ABn(b,c,d,e){var f,g,h,i,j;f=BL(c,d);if(f>0){g=new BU;Y(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AGw(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AFG(e[d])|0;d=d+1|0;}return c;}
var ACt=G(0);
var AJz=G();
function AXp(a,b){return a.NA(b);}
function AQe(a){return a.Q0();}
var AFM=G();
var Ge=G(0);
var SH=G();
var BH=G(Bu);
var AJY=G();
function N2(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6i());}return b.data.length;}
function AGz(b,c){if(b===null){b=new F2;Y(b);N(b);}if(b===F($rt_voidcls())){b=new BU;Y(b);N(b);}if(c>=0)return ATw(b.d5,c);b=new AD$;Y(b);N(b);}
function ATw(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var F2=G(Bu);
var Jd=G(Bu);
function Dm(){B.call(this);this.mV=0;}
var A6j=null;var A6k=null;var A6l=null;var A6m=null;var A6n=null;var A6o=null;var A6p=null;var A6q=null;var A6r=null;var A6s=null;function ATZ(a){var b=new Dm();AFo(b,a);return b;}
function AFo(a,b){a.mV=b;}
function PA(b){var c,d;c=A6o.data;if(b>=c.length)return ATZ(b);d=c[b];if(d===null){d=ATZ(b);A6o.data[b]=d;}return d;}
function Vb(b){var c,d;c=new BK;d=B5(1);d.data[0]=b;Jq(c,d);return c;}
function Mg(b){return b>=65536&&b<=1114111?1:0;}
function CT(b){return (b&64512)!=55296?0:1;}
function Dk(b){return (b&64512)!=56320?0:1;}
function Ot(b){return !CT(b)&&!Dk(b)?0:1;}
function Jp(b,c){return CT(b)&&Dk(c)?1:0;}
function EO(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JP(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jc(b){return (56320|b&1023)&65535;}
function FJ(b){return G4(b)&65535;}
function G4(b){if(A6m===null){if(A6p===null)A6p=AKh();A6m=AFA((A6p.value!==null?$rt_str(A6p.value):null));}return Sx(A6m,b);}
function Fm(b){return G2(b)&65535;}
function G2(b){if(A6l===null){if(A6q===null)A6q=AKF();A6l=AFA((A6q.value!==null?$rt_str(A6q.value):null));}return Sx(A6l,b);}
function Sx(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BL(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ABU(b,c){if(c>=2&&c<=36){b=X3(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function X3(b){var c,d,e,f,g,h,i,j,k,l;if(A6k===null){if(A6r===null)A6r=AJe();c=(A6r.value!==null?$rt_str(A6r.value):null);d=ASl(Gs(c));e=M2(d);f=BP(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Pa(d)|0;j=j+Pa(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A6k=f;}g=A6k.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BL(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Ik(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HQ(b){var c;if(b<65536){c=B5(1);c.data[0]=b&65535;return c;}return AJg([JP(b),Jc(b)]);}
function CF(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ot(b&65535))return 19;if(A6n===null){if(A6s===null)A6s=AHS();d=(A6s.value!==null?$rt_str(A6s.value):null);e=Q(WQ,16384);f=e.data;g=DL(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Nx(P(d,l));if(m==64){l=l+1|0;m=Nx(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,Nx(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Nx(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOb(k,k+i|0,Ok(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOb(k,k+i|0,Ok(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A6n=C8(e,j);}e=A6n.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.ts)o=p+1|0;else{c=d.yv;if(b>=c)return d.yF.data[b-c|0];c=p-1|0;}}return 0;}
function KJ(b){a:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HN(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CF(b)!=16?0:1;}
function Yq(b){switch(CF(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function RE(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Yq(b);}return 1;}
function AId(){A6j=F($rt_charcls());A6o=Q(Dm,128);}
function AKh(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKF(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AJe(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHS(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var V$=G(0);
var AAj=G(0);
var EY=G(0);
var AIg=G();
function Ev(){return $rt_globals.window.document;}
function AY5(a){return a.Iz();}
function A03(a,b){return a.Kh($rt_str(b));}
function A0S(a,b){a.HO($rt_str(b));}
function AWj(a,b){return a.NK($rt_str(b));}
function ALB(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANo(a){return a.Rk();}
function A00(a,b,c){return a.P$($rt_str(b),$rt_str(c));}
function APm(a,b,c,d){a.CX($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
function AVp(a){return a.O0();}
function AZL(a){return !!a.KG();}
function A1w(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQy(a){return a.HX();}
function AOZ(a,b){a.P1($rt_str(b));}
function AQR(a){return !!a.HF();}
function AUi(a){return a.Kq();}
function APQ(a){return $rt_ustr(a.FL());}
function AMc(a,b){return a.H8(b?1:0);}
function A2u(a){return a.KF();}
function AXN(a,b,c){return a.RV($rt_str(b),$rt_str(c));}
function AQq(a,b,c){return a.Oi(b,c?1:0);}
function ATy(a,b,c){return !!a.JT($rt_str(b),$rt_str(c));}
function AUK(a){return a.I5();}
function AOK(a){return $rt_ustr(a.LB());}
function ANz(a,b){return !!a.E4(b);}
function AOn(a,b){return a.L2($rt_str(b));}
function AXX(a,b,c){return a.Ix($rt_str(b),$rt_str(c));}
function APY(a){return a.MP();}
function AVs(a,b){return a.Rq($rt_str(b));}
function AOm(a){return $rt_ustr(a.Ms());}
function ART(a){a.HB();}
function ALr(a,b){return a.RY($rt_str(b));}
function AS7(a,b){return a.HT($rt_str(b));}
function AVN(a,b){return a.Hz($rt_str(b));}
function A1o(a){return $rt_ustr(a.M1());}
function AVU(a,b,c){return a.PD(b,c);}
function AZT(a,b){return a.FK(b);}
function ASh(a){return a.JF();}
function ARf(a,b,c){a.EA($rt_str(b),Fd(c,"handleEvent"));}
function AQ0(a,b,c){return a.GB(b,c);}
function AS2(a){return !!a.QY();}
function ATY(a,b){return a.It($rt_str(b));}
function AZd(a,b,c,d){a.Cl($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
function ANu(a){return a.JG();}
function AV7(a,b,c){return a.H7($rt_str(b),$rt_str(c));}
function AU8(a){return $rt_ustr(a.Ng());}
function A2p(a){return a.MG();}
function ARc(a){return a.MU();}
function AU6(a){return a.JU();}
function ARg(a,b,c){a.E3($rt_str(b),Fd(c,"handleEvent"));}
function AWs(a,b){return a.Lo(b);}
function AOr(a,b){a.F4($rt_str(b));}
function A0t(a){return $rt_ustr(a.Ml());}
function Pz(){var a=this;B.call(a);a.yx=null;a.yy=null;a.yz=0;a.yA=null;a.yu=null;}
function ARO(a,b){var c,d,e,f,g;c=a.yx;d=a.yy;e=a.yz;f=a.yA;g=a.yu;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AJk=G();
function ASw(b){return Math.exp(b);}
function AIh(b){return Math.log(b);}
function Jj(b,c){return AYF(b,c);}
function AYF(b,c){return Math.pow(b,c);}
function DQ(){return AT7();}
function AT7(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ATz(b,c){return Math.max(b,c);}
function Wh(b){if(b<0)b= -b|0;return b;}
function AOw(b){return Math.abs(b);}
var Yh=G(0);
var RM=G(0);
var Zx=G(0);
var S0=G(0);
var ADv=G(0);
var ABW=G(0);
var AII=G();
function AZu(a,b,c){a.E3($rt_str(b),Fd(c,"handleEvent"));}
function AYd(a,b,c){a.EA($rt_str(b),Fd(c,"handleEvent"));}
function AOM(a,b,c,d){a.Cl($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
function AMo(a,b){return !!a.E4(b);}
function AWH(a,b,c,d){a.CX($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AD$=G(Bu);
var Ig=G(BH);
var AIW=G();
function AJs(){return "ping";}
function AHP(b){return b===AJs()?1:0;}
var Zd=G(0);
var XS=G(0);
function AAr(){var a=this;B.call(a);a.tO=null;a.op=null;a.qL=null;a.et=null;a.vr=null;a.w$=null;a.pL=null;a.hQ=null;a.ls=0;a.EK=0;a.zC=null;a.gE=null;a.Bo=null;}
function Gi(a,b){var c;c=Ev();b=$rt_ustr(b);c.title=b;}
function SS(a){a.EK=$rt_globals.requestAnimationFrame(Bv(a.tO,"onAnimationFrame"));}
function Js(a){a.ls=1;}
function AAY(a,b,c){var d,e;a.pL.eo=BF(b,c);d=a.et;e=b;d.width=e;d=a.et;e=c;d.height=e;d=a.hQ;X(d.c7,b,c);e=d.Y;d=d.c7;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gE.ce(a.hQ.c7,Lj(a));a.gE.bM();}
function ZH(a,b){var c,d,e;c=a.zC;d=a.et;if(BO(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.zC=b;}
function MS(a){return $rt_globals.performance.now()/1000.0;}
function Lj(a){return $rt_globals.window.devicePixelRatio;}
function Ja(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEn(null,b);else{c=new AC8;d=$rt_globals.window.showDirectoryPicker();e=new AC7;e.sj=b;e.sk=c;d.then(Bv(e,"f"),Bv(c,"f"));}}
function Kc(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEn(b,null);else{c=new ADH;d=$rt_globals.window.showOpenFilePicker();e=new ADG;e.sI=b;d.then(Bv(e,"f"),Bv(c,"f"));}}
function CV(a,b,c,d){var e,f,g,h;e=a.Bo;f=e.iw;if(f>0){g=e.pf.data;f=f-1|0;e.iw=f;Ti(e,b,c,d,g[f]);}else{h=e.mr;e=new AC9;e.uv=b;e.AN=c;e.Ac=d;b=new Tj;b.ru=e;c=h.mq;b.AD=c;if(c===null)h.o$=b;else c.uc=b;h.mq=b;h.b3=h.b3+1|0;h.k$=h.k$+1|0;}}
function RB(a,b,c){var d,e;if(!LU()){b=new Bu;Bm(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Z5;e.ta=b;b=ALf(c);d.then(Bv(e,"f"),Bv(b,"f"));}}
function Tk(a,b,c,d){var e,f,g;if(!LU()){b=new Bu;Bm(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=Gs(b);A30();b=A6t;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ACy;e.vE=c;c=ALf(d);b.then(Bv(e,"f"),Bv(c,"f"));}}
function Vq(a){return LU()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ALf(b){var c;c=new OS;c.Al=b;return c;}
var BD=G(0);
var AJG=G();
var V=G(0);
var AJH=G();
var ZA=G(0);
function T$(){B.call(this);this.yh=null;}
function AXM(a,b){var c,d;c=b;b=a.yh;if(!(!b.gE.cj(c/1000.0)&&!b.ls)){d=b.hQ.c7;if(Bc(d.a,d.b)){b.ls=0;b.gE.bM();}}SS(b);}
function T8(){B.call(this);this.BQ=null;}
function DB(a){Js(a.BQ);}
var Y5=G(0);
function T9(){B.call(this);this.zN=null;}
function ANK(a,b,c){var d,e,f,g;c=a.zN;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.et){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lj(c);AAY(c,GG(f.width*g),GG(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AAY(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AHb=G();
function AUP(){return {box:'device-pixel-content-box'};}
function AR2(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CA=G(0);
function T7(){B.call(this);this.rE=null;}
function ARS(a,b){b=a.rE;b.gE.ce(b.hQ.c7,Lj(b));b.gE.bM();}
function Z_(){var a=this;B.call(a);a.mr=null;a.A$=null;a.ss=null;a.pf=null;a.xh=0;a.iw=0;a.BK=null;}
function Ti(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.xh+1|0;a.xh=f;g=a.ss;h=CY(f);g.j2=Or(g,g.j2,h);h=ABX(g,h);Wb(h,b);Wb(h,b);g.mm=g.mm+1|0;b=a.A$[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BK)g=$rt_ustr(c);else if(Jb(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Jb(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Jb(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof SJ)){b=new BU;c
=JO(BE(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.ij;if(g===null)g=c.f9;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var UG=G(0);
function AUs(a,b){var c;c=a.b$();while(c.cD()){b.g(c.b_());}}
var Hz=G(0);
function TN(a){var b,c;b=new Z8;c=new Q5;c.yr=a;b.Ay=c;return b;}
function AX3(a,b){var c,d;c=a.b$();d=0;while(c.cD()){if(b.H(c.b_())){c.ph();d=1;}}return d;}
var FA=G();
function ED(a){return a.c2()?0:1;}
function Go(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=AGz(HU(BE(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B7(a);while(B_(f)){g=b.data;h=e+1|0;g[e]=Ca(f);e=h;}return b;}
function A0H(a,b){var c;c=a.b$();while(c.cD()){if(BO(c.b_(),b)){c.ph();return 1;}}return 0;}
function H1(a,b){var c,d;c=0;d=b.b$();while(d.cD()){if(!a.zX(d.b_()))continue;c=1;}return c;}
var ND=G(0);
var ME=G(0);
function Fo(){FA.call(this);this.b3=0;}
function AR5(a,b){a.oo(a.c2(),b);return 1;}
function B7(a){var b;b=new W5;b.jg=a;b.p8=a.b3;b.lB=a.c2();b.hT=(-1);return b;}
function ARu(a,b,c){var d,e;if(b>=0&&b<=a.c2()){if(c.eF())return 0;d=c.b$();while(d.cD()){e=b+1|0;a.oo(b,d.b_());b=e;}return 1;}c=new BU;Y(c);N(c);}
function A1i(a,b,c){c=new Eg;Y(c);N(c);}
function K7(a,b){var c,d;c=a.c2();d=0;while(true){if(d>=c)return (-1);if(BO(b,a.kA(d)))break;d=d+1|0;}return d;}
function AQK(a,b){var c,d;if(!Jb(b,ME))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BO(BG(a,d),BG(c,d)))return 0;d=d+1|0;}return 1;}
var Md=G(Fo);
var OL=G(0);
var ADS=G(0);
function Tt(){var a=this;Md.call(a);a.o$=null;a.mq=null;a.k$=0;}
var Lr=G(0);
function Ee(){var a=this;B.call(a);a.oY=null;a.o3=null;}
var Ex=G(0);
var Vp=G(0);
var O_=G(0);
function X6(){var a=this;Ee.call(a);a.j2=null;a.mj=null;a.DJ=null;a.mm=0;}
function AHi(a,b){var c;c=ABX(a,b);if(c===null)return null;a.j2=K4(a,a.j2,b);a.mm=a.mm+1|0;return c.kn;}
function ABX(a,b){var c,d;c=a.j2;while(true){if(c===null)return null;d=MT(a.mj,b,c.lZ);if(!d)break;c=d>=0?c.b6:c.bU;}return c;}
function Or(a,b,c){var d,e;if(b===null){b=new KE;d=null;b.lZ=c;b.kn=d;b.gL=1;b.gU=1;return b;}e=MT(a.mj,c,b.lZ);if(!e)return b;if(e>=0)b.b6=Or(a,b.b6,c);else b.bU=Or(a,b.bU,c);EZ(b);return M1(b);}
function K4(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MT(a.mj,c,b.lZ);if(d<0)b.bU=K4(a,b.bU,c);else if(d>0)b.b6=K4(a,b.b6,c);else{e=b.b6;if(e===null)return b.bU;f=b.bU;g=Q(KE,e.gL).data;h=0;while(true){b=e.bU;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b6;while(h>0){h=h+(-1)|0;j=g[h];j.bU=b;EZ(j);b=M1(j);}e.b6=b;e.bU=f;EZ(e);b=e;}EZ(b);return M1(b);}
function AAd(){B.call(this);this.z0=null;}
function AAe(){var a=this;B.call(a);a.zj=null;a.zi=0;}
function AUJ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.zj;d=a.zi;AHP(b.data);e=c.mr;f=e.o$;if(f===null)g=null;else{g=f.uc;e.o$=g;if(g!==null)g.AD=null;else e.mq=null;e.k$=e.k$-1|0;e.b3=e.b3+1|0;g=f.ru;}if(g!==null)Ti(c,g.uv,g.AN,g.Ac,d);else{h=c.pf.data;i=c.iw;c.iw=i+1|0;h[i]=d;}c=c.BK;b=b.data;if(!AHP(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;Y(b);N(b);}if(b.length<1){b=new BU;AGu(b);N(b);}e=CY(b[0]);c=AHi(c.z0,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?H3(Nl(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A3r(Nl(e)):(e instanceof $rt_globals.File?1:0)?AJ5(null,Nl(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AJ5(Nl(e),null);k=l;}c.g(h);}}
function AE5(){var a=this;B.call(a);a.ct=null;a.jx=null;a.EU=null;a.eo=null;}
function A4J(a,b){var c=new AE5();A1e(c,a,b);return c;}
function A1e(a,b,c){var d,e,f,g;a.eo=null;a.jx=b;d=new YG;d.bG=CN(Q(Ct,0));d.os=CN(Q(Ct,0));d.bS=CN(Q(CE,0));d.ft=CN(Q(EJ,0));d.cR=CN(Q(CX,0));d.gO=CN(Q(EV,0));d.hf=CN(Q(E8,0));d.mh=CN(Q(V,0));d.mT=CN(Q(V,0));d.dr=c;a.ct=d;e=$rt_globals.window;f=Q(C_,14);g=f.data;d=new ACU;d.q5=a;g[0]=C4(a,b,C(41),d);d=new ACV;d.z_=a;g[1]=C4(a,b,C(42),d);d=new ACW;d.x8=a;g[2]=C4(a,b,C(43),d);d=new ACX;d.wa=a;g[3]=C4(a,b,C(44),d);d=new ACY;d.tF=a;g[4]=C4(a,b,C(45),d);d=new ACZ;d.ro=a;g[5]=C4(a,b,C(46),d);d=new AC0;d.BY=a;g[6]
=C4(a,b,C(47),d);d=new AC1;d.zP=a;g[7]=C4(a,b,C(48),d);d=new AC2;d.xK=a;g[8]=C4(a,b,C(49),d);d=new AC3;d.vH=a;g[9]=C4(a,b,C(50),d);d=new VK;d.vd=a;g[10]=C4(a,b,C(51),d);d=new VL;d.um=a;e.addEventListener("paste",Bv(d,"handleEvent"),!!1);g[11]=U9(a,e,C(52),d);d=new VM;d.wT=a;g[12]=C4(a,e,C(53),d);d=new VN;d.Bv=a;g[13]=C4(a,e,C(54),d);c=new Rd;c.CH=f;a.EU=c;e=new ADO;e.yI=b;b.onpointerdown=Bv(e,"f");e=new ADP;e.xW=b;b.onpointerup=Bv(e,"f");}
function Wx(){return (Ev()).activeElement;}
function C4(a,b,c,d){b.addEventListener($rt_ustr(c),Bv(d,"handleEvent"));return U9(a,b,c,d);}
function U9(a,b,c,d){var e;e=new Y2;e.Ei=b;e.Ek=c;e.Ej=d;return e;}
function ABk(a,b){var c;c=new ABZ;c.v_=b;return c;}
function E9(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jx.getBoundingClientRect();e=BF(GG((b.clientX-d.left)*c),GG((b.clientY-d.top)*c));f=AJS(a.eo);d=new OG;ABL(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.D$=f;return d;}
function VQ(a,b,c){var d,e,f,g;d=new Qn;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ABL(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.oK=0;d.ee=e;d.bm=f;d.jO=c;d.zS=g;return d;}
function D8(a,b){b.stopPropagation();b.preventDefault();}
function NR(){var a=this;B.call(a);a.pt=null;a.ch=null;a.Y=null;a.l1=0;a.AC=null;a.Ez=0;a.Dm=0;a.k5=null;a.kV=null;a.DG=null;a.E9=null;a.uM=null;a.xj=null;a.iR=null;a.ie=null;a.jW=null;a.DO=null;a.r8=null;a.c7=null;a.BC=null;a.pG=0;a.mB=0;a.n$=0;a.nY=0;a.lm=0;a.n5=null;a.of=0.0;a.pO=0.0;}
function AKD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c7=new Bg;a.pG=0;a.n5=new AC5;a.pt=c;a.l1=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.Y=b;a.ch=KC(c,4,4,1);i=ALy(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B5(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Q8;Jv();c=A6u;m.eV=b;m.h3=c;m.tT=j.length/c.m_|0;m.Bx
=l.length;n=b.createBuffer();m.w7=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.wc=null;n=b.createBuffer();m.vN=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.r8=m;a.Dm=Nw(g,C(56));c=new Y3;c.dZ=b;a.AC=c;a.of=e;a.pO=f;d=b.getParameter(3379);a.Ez=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Dh,9);i=k.data;c=A3u(b);a.k5=c;i[0]=c;c=A4m(b,C(58));a.kV=c;i[1]=c;c=new Zm;H7(c,b,C(59),
C(60),A6u);a.DG=c;i[2]=c;c=A5b(b);a.E9=c;i[3]=c;c=new PG;Vx(c,b,C(61),C(62));a.uM=c;i[4]=c;c=A5n(b);a.xj=c;i[5]=c;c=A34(b);a.iR=c;i[6]=c;c=A48(b);a.ie=c;i[7]=c;c=A49(b);a.jW=c;i[8]=c;a.DO=k;ADz(b,C(63));}
function Iq(a,b,c){return Gx(a,b,c,400,0);}
function HI(a,b,c){return KC(a.pt,b,c,0);}
function D5(a,b,c,d){return KC(a.pt,b,c,d);}
function ADh(a,b,c,d,e,f){var g,h;Cn(a.ch,c);g=D5(a,La(a.ch,b)+(d*2|0)|0,e,f);Cn(g,c);B0(g,b,d,LF(c,e));h=CW(a);CM(h,g);Ez(g);return h;}
function EI(a,b){var c,d,e,f,g;c=a.Y;d=b.bn;e=b.bs;f=b.bf;g=b.bC;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B$(a,b){var c;if(b==a.mB)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.mB;a.mB=b;return c;}
function Nz(a,b,c){LN(a,b.a,b.b,c);}
function LN(a,b,c,d){var e,f;e=d.a;f=d.b;a.nY=1;a.lm=1;d=a.n5;d.tv=b;d.tw=c;d.tu=e;d.tt=f;ABM(a);}
function Ga(a){a.nY=0;a.lm=0;ABM(a);}
function ABM(a){var b,c,d,e,f,g;b=a.n$;c=a.nY;if(b!=c){a.n$=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.n$&&a.lm){a.lm=0;d=a.Y;e=a.n5;b=e.tv;c=a.c7.b-e.tw|0;f=e.tt;c=c-f|0;g=e.tu;d.scissor(b,c,g,f);}}
function F0(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.r8;c=a.pG;d=b.h3.Ai;e=b.eV;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eV;h=b.w7;e.bindBuffer(34962,h);i=b.h3.qn.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eV;m=k.jE;n=k.gu;o=b.h3.m_*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gu|0;j=j+1|0;}a:{e=b.wc;if(e!==null){c=0;b.eV.bindBuffer(34962,e);i=b.h3.zy.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eV;j=e.jE;p=e.gu;m=e.sc;n=b.h3.yG;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gu|0;g=g+1|0;}}}q=b.vN;if(q===null){c=b.tT;if(c>0)b.eV.drawArrays(4,0,c);}else{b.eV.bindBuffer(34963,q);k=b.eV;g=b.Bx;k.drawElements(4,g,5123,0);}a.pG=d;}
function Bs(a,b,c,d,e){Gu(a,a.k5);GF(a.k5,a.Y,b,c,d,a.c7);d=a.k5;FC(a.Y,d.Bc,e);F0(a);}
function AEa(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gu(a,a.ie);GF(a.ie,a.Y,b,c,d,a.c7);j=a.ie;d=a.Y;k=j.wE;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.wD;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ie;FC(a.Y,d.xz,i);F0(a);}
function L8(a,b,c,d,e,f,g,h){var i,j;Gu(a,a.jW);GF(a.jW,a.Y,b,c,d,a.c7);d=a.jW;i=a.Y;j=d.tR;i.uniform2f(j,e,f);FC(i,d.yk,g);d=a.jW;FC(a.Y,d.w9,h);F0(a);}
function DI(a,b,c,d,e,f,g,h,i){var j;j=!i?a.uM:a.xj;Gu(a,j);AK1(j,a.Y,!i?a.pO:a.of);GF(j,a.Y,b,c,d,a.c7);NY(j,a.Y,f);AEf(j,a.Y,f,e);AJ0(j,a.Y,g,h);F0(a);}
function CW(a){var b,c;b=new Iv;c=a.AC;b.eT=new Bg;b.eK=c;b.f2=c.dZ.createTexture();A6v=A6v+1|0;return b;}
function MW(a,b){ADz(a.Y,b);}
function Gu(a,b){var c,d;if(b!==a.BC){c=a.Y;d=b.bE;c.useProgram(d);a.BC=b;}}
function T0(){var a=this;NR.call(a);a.C8=null;a.DH=null;}
function Gx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ch;g=AIQ(b,c,d,e);Ky(f,g);h=f.dc.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,C(64));m=Eo(f,C(65));h=new Lv;n=g;h.oe=b;h.oV=c;h.CC=d;h.CS=e;h.em=i;h.eH=j;h.Cs=l;h.p0=k;h.qT=n;h.ti=CZ(i);h.Dw=CZ(h.eH);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Cy=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Co=b;return h;}
function Cw(){B.call(this);this.x=null;}
function El(a,b){a.x=b;}
function A2q(a,b){return 0;}
function YG(){var a=this;B.call(a);a.bG=null;a.os=null;a.bS=null;a.ft=null;a.cR=null;a.gO=null;a.hf=null;a.mh=null;a.mT=null;a.dr=null;a.e_=null;a.xS=0;}
function Td(a,b){var c,d,e,f;DB(a.dr);c=(B3(!b.jO?a.os:a.bG)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].H(b);if(f)break;if(b.oK)break;e=e+1|0;}return f;}
function Rz(a,b,c){var d,e,f;DB(a.dr);d=(B3(a.gO)).data;e=d.length;f=0;while(f<e){if(d[f].h8(b,c))return 1;f=f+1|0;}return 0;}
function ACU(){B.call(this);this.q5=null;}
function AZF(a,b){var c;c=a.q5;if(Td(c.ct,VQ(c,b,1)))D8(c,b);}
function ACV(){B.call(this);this.z_=null;}
function AZP(a,b){var c;c=a.z_;if(Td(c.ct,VQ(c,b,0)))D8(c,b);}
function ACW(){B.call(this);this.x8=null;}
function AQv(a,b){var c,d,e,f,g,h,i;c=a.x8;if(c.eo!==null){a:{b:{d=E9(c,b);e=c.ct;DB(e.dr);f=e.e_;if(f!==null)f.g(d);else{g=(B3(e.bS)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bT(d))break a;i=i+1|0;}}}}D8(c,b);}}
function ACX(){B.call(this);this.wa=null;}
function AYv(a,b){var c,d,e,f,g,h;c=a.wa;b.button;if(c.eo!==null)a:{d=E9(c,b);c=c.ct;e=b.button;DB(c.dr);if(c.e_===null){f=(B3(c.bS)).data;g=f.length;h=0;while(h<g){b=f[h].cn(d,e);if(b!==null){c.e_=b;c.xS=e;break a;}h=h+1|0;}}}}
function ACY(){B.call(this);this.tF=null;}
function AYH(a,b){var c,d,e,f,g,h,i;c=a.tF;b.button;if(c.eo!==null){d=E9(c,b);e=c.ct;f=b.button;DB(e.dr);if(f==e.xS&&e.e_!==null)e.e_=null;g=(B3(e.bS)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dB(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D8(c,b);}}
function ACZ(){B.call(this);this.ro=null;}
function ARX(a,b){var c,d,e,f,g,h,i,j,k;c=a.ro;if(c.eo!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=E9(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DB(e.dr);i=(B3(e.ft)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dy(f,d,h))break b;k=k+1|0;}}D8(c,b);}}
function AC0(){B.call(this);this.BY=null;}
function AOL(a,b){var c,d,e,f,g,h,i,j;c=a.BY;if(c.eo!==null){d=E9(c,b);e=c.ct;f=b.button;g=b.detail;DB(e.dr);h=(B3(e.bS)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cz(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D8(c,b);}}
function AC1(){B.call(this);this.zP=null;}
function A2O(a,b){var c,d,e,f,g,h,i;c=a.zP;if(c.eo!==null){d=E9(c,b);e=c.ct;DB(e.dr);f=(B3(e.cR)).data;g=f.length;h=0;a:{while(h<g){if(f[h].H(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D8(c,b);}}
function AC2(){B.call(this);this.xK=null;}
function AOk(a,b){var c,d,e,f,g,h;b=a.xK.ct;if(b.e_!==null){c=En();d=Cl(b.e_);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(B3(b.mT)).data;g=f.length;h=0;while(h<g){f[h].f();h=h+1|0;}DB(b.dr);}
function AC3(){B.call(this);this.vH=null;}
function ASE(a,b){var c,d,e;b=a.vH.ct;c=(B3(b.mh)).data;d=c.length;e=0;while(e<d){c[e].f();e=e+1|0;}if(b.e_!==null)b.e_=null;DB(b.dr);}
function VK(){B.call(this);this.vd=null;}
function A2r(a,b){var c;c=a.vd;if(c.eo!==null)E9(c,b);}
function VL(){B.call(this);this.um=null;}
function AQc(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.um;if(Wx()===c.jx){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B3(c.ct.hf)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cZ();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dr;m=new Pt;m.vT=k;m.vU=l;g.getAsString(Bv(m,"accept"));D8(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function VM(){B.call(this);this.wT=null;}
function AQA(a,b){var c;c=a.wT;if(Wx()===c.jx&&Rz(c.ct,ABk(c,b),0))D8(c,b);}
function VN(){B.call(this);this.Bv=null;}
function AZV(a,b){var c;c=a.Bv;if(Wx()===c.jx&&Rz(c.ct,ABk(c,b),1))D8(c,b);}
var ABF=G(0);
var ABO=G();
function KC(a,b,c,d){var e,f,g,h,i;e=new ZI;e.jf=d;A6d=A6d+1|0;e.nS=b;e.nl=c;f=(Ev()).createElement("canvas");e.i7=f;g=b;f.width=g;h=e.i7;f=c;h.height=f;if(!d)g=e.i7.getContext("2d");else{i=e.i7;h=AVz();g=i.getContext("2d",h);}e.dc=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ABN=G();
function APr(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function OI(){var a=this;B.call(a);a.P=null;a.o=null;a.bw=null;}
var Kw=G();
var A5Z=null;function MT(a,b,c){return b.mn(c);}
function AFU(){A5Z=new Kw;}
function AHp(){var a=this;B.call(a);a.dn=null;a.ga=null;a.db=0;}
function CN(a){var b=new AHp();AOI(b,a);return b;}
function AOI(a,b){a.dn=b;}
function MH(a,b){return a.dn.data[b];}
function Ba(a,b){var c,d,e;c=a.db;d=a.dn;if(c==d.data.length)a.dn=C8(d,c+4|0);d=a.dn.data;e=a.db;a.db=e+1|0;d[e]=b;a.ga=null;}
function Sa(a,b){var c,d,e,f;c=0;while(true){d=a.dn.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.db=a.db-1|0;a.ga=null;}c=c+1|0;}}
function B3(a){var b;b=a.ga;if(!(b!==null&&b.data.length==a.db))a.ga=C8(a.dn,a.db);return a.ga;}
var D$=G(0);
var Ct=G(0);
var CE=G(0);
function AX9(a,b){return 0;}
function ATj(a,b,c){return null;}
function ALY(a,b,c){return 0;}
function AZ8(a,b,c,d){return 0;}
var EJ=G(0);
var CX=G(0);
var EV=G(0);
var DO=G(0);
var E8=G(0);
function Rd(){B.call(this);this.CH=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BF(a,b){var c=new Bg();QI(c,a,b);return c;}
function AJS(a){var b=new Bg();ANt(b,a);return b;}
function QI(a,b,c){a.a=b;a.b=c;}
function ANt(a,b){a.a=b.a;a.b=b.b;}
function Co(a,b){a.a=b.a;a.b=b.b;}
function X(a,b,c){a.a=b;a.b=c;}
function AHX(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function APi(a,b){var c;a:{b:{if(a!==b){if(BE(b)!==BE(a))break b;if(!JU(a,b))break b;}c=1;break a;}c=0;}return c;}
function JU(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AC5(){var a=this;B.call(a);a.tv=0;a.tw=0;a.tu=0;a.tt=0;}
var AGU=G();
var AIv=G(0);
function Y3(){B.call(this);this.dZ=null;}
function N6(){var a=this;B.call(a);a.bE=null;a.E_=null;}
function AJ4(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bt(),g);Bk(En(),C(74));Bk(En(),d);Bk(En(),C(74));b=new Bu;Bm(b,g);N(b);}
function Dh(){var a=this;N6.call(a);a.xJ=null;a.sy=null;a.nO=null;}
function A6w(a,b,c,d){var e=new Dh();H7(e,a,b,c,d);return e;}
function H7(a,b,c,d,e){var f,g,h,i,j,k;a.E_=e;f=AJ4(b,35633,c);d=AJ4(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bE=g;h=e.t6.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bE;k=c.jE;c=c.sG;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bE;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADz(b,C(75));a.nO=new Bg;c=a.bE;a.xJ=b.getUniformLocation(c,"uResolution");c=a.bE;a.sy=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new K;M(c);H(H(c,C(76)),d);Bm(b,L(c));N(b);}
function AFc(a,b,c){var d,e,f;if(!JU(a.nO,c)){Co(a.nO,c);d=a.xJ;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GF(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sy;b.uniform4f(e,i,l,h,j);AFc(a,b,f);}
function AKI(){Dh.call(this);this.Bc=null;}
function A3u(a){var b=new AKI();AXU(b,a);return b;}
function AXU(a,b){var c;Jv();H7(a,b,C(59),C(77),A6u);c=a.bE;a.Bc=b.getUniformLocation(c,"uColor");}
function Fp(){Dh.call(this);this.tA=null;}
function A4m(a,b){var c=new Fp();ABm(c,a,b);return c;}
function A6x(a,b,c){var d=new Fp();ABq(d,a,b,c);return d;}
function ABm(a,b,c){ABq(a,b,C(59),c);}
function ABq(a,b,c,d){Jv();H7(a,b,c,d,A6u);c=a.bE;a.tA=b.getUniformLocation(c,"sDiffuse");}
function NY(a,b,c){var d;d=a.tA;b.uniform1i(d,0);b.activeTexture(33984);c=c.f2;b.bindTexture(3553,c);}
var Zm=G(Dh);
function AFP(){Fp.call(this);this.Ci=null;}
function A5b(a){var b=new AFP();ARv(b,a);return b;}
function ARv(a,b){var c;ABm(a,b,C(78));c=a.bE;a.Ci=b.getUniformLocation(c,"uContrast");}
function Hu(){var a=this;Fp.call(a);a.r0=null;a.sO=null;a.tP=null;a.At=null;a.qB=0.0;}
function A6y(a,b,c){var d=new Hu();Vx(d,a,b,c);return d;}
function Vx(a,b,c,d){ABq(a,b,c,d);c=a.bE;a.r0=b.getUniformLocation(c,"uTexTransform");c=a.bE;a.sO=b.getUniformLocation(c,"uColor");c=a.bE;a.tP=b.getUniformLocation(c,"uBgColor");c=a.bE;a.At=b.getUniformLocation(c,"uTextPow");}
function AK1(a,b,c){var d;if(a.qB!==c){a.qB=c;d=a.At;b.uniform2f(d,c,0.0);}}
function AJ0(a,b,c,d){FC(b,a.sO,c);FC(b,a.tP,d);}
function AEf(a,b,c,d){var e,f,g,h,i,j;c=c.eT;e=c.a;f=c.b;g=d.bn;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.bf/h;j=d.bC/j;c=a.r0;b.uniform4f(c,g,i,h,j);}
var PG=G(Hu);
var AHF=G(Hu);
function A5n(a){var b=new AHF();AWP(b,a);return b;}
function AWP(a,b){Vx(a,b,C(61),C(79));}
function AIJ(){var a=this;Fp.call(a);a.wd=null;a.wb=null;a.sP=null;}
function A34(a){var b=new AIJ();ANT(b,a);return b;}
function ANT(a,b){var c,d;ABm(a,b,C(80));c=a.bE;a.wd=b.getUniformLocation(c,"uColorB");d=a.bE;a.wb=b.getUniformLocation(d,"uColorF");d=a.bE;a.sP=b.getUniformLocation(d,"uContrast");}
function AKc(){var a=this;Dh.call(a);a.xz=null;a.wE=null;a.wD=null;}
function A48(a){var b=new AKc();AWR(b,a);return b;}
function AWR(a,b){var c;Jv();H7(a,b,C(59),C(81),A6u);c=a.bE;a.xz=b.getUniformLocation(c,"uColor");c=a.bE;a.wE=b.getUniformLocation(c,"uPoints1");c=a.bE;a.wD=b.getUniformLocation(c,"uPoints2");}
function AEJ(){var a=this;Dh.call(a);a.w9=null;a.tR=null;a.yk=null;}
function A49(a){var b=new AEJ();AVO(b,a);return b;}
function AVO(a,b){var c;Jv();H7(a,b,C(59),C(82),A6u);c=a.bE;a.w9=b.getUniformLocation(c,"uColor");c=a.bE;a.tR=b.getUniformLocation(c,"uBaseline");c=a.bE;a.yk=b.getUniformLocation(c,"uScaleHExp");}
var ZT=G(0);
var ALg=G(0);
function FC(b,c,d){var e,f,g,h;e=d.bn;f=d.bs;g=d.bf;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ADz(b,c){var d,e;d=b.getError();if(d){b=Bt();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Y2(){var a=this;B.call(a);a.Ei=null;a.Ek=null;a.Ej=null;}
function Q8(){var a=this;B.call(a);a.eV=null;a.h3=null;a.w7=null;a.wc=null;a.vN=null;a.tT=0;a.Bx=0;}
function CI(){var a=this;B.call(a);a.Eh=null;a.fQ=0;}
function DJ(a,b,c){a.Eh=b;a.fQ=c;}
function G$(){var a=this;CI.call(a);a.t6=null;a.qn=null;a.zy=null;a.m_=0;a.yG=0;a.Ai=0;}
var A6u=null;var A6z=null;function Jv(){Jv=Bn(G$);AO6();}
function AO6(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G$;c=Q(Ei,2);d=c.data;A1P();d[0]=A6A;d[1]=A6B;Jv();DJ(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.pY.fQ){case 0:f=f+l.gu|0;h=h+1|0;break a;case 1:e=e+l.gu|0;g=g+1|0;break a;default:}}i=i|1<<l.jE;k=k+1|0;}b.t6=c;b.m_=e;b.yG=f;b.Ai=i;c=Q(Ei,g);m=c.data;b.qn=c;c=Q(Ei,h);n=c.data;b.zy=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.pY.fQ){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A6u
=b;c=Q(G$,1);c.data[0]=b;A6z=c;}
var Mn=G(0);
var SV=G(0);
var ABT=G(0);
var GU=G();
function MQ(){GU.call(this);this.B_=null;}
function AFv(){var a=this;MQ.call(a);a.Dk=0;a.ni=0;a.lD=null;a.mY=null;a.uI=null;}
function AQI(a,b){var c=new AFv();A1y(c,a,b);return c;}
function A1y(a,b,c){a.B_=b;b=new K;M(b);a.lD=b;a.mY=B5(32);a.Dk=c;AFp();a.uI=A6C;}
function AA7(a,b,c,d){var e,$$je;e=a.B_;if(e===null)a.ni=1;if(!(a.ni?0:1))return;a:{try{e.mR(b,c,d);break a;}catch($$e){$$je=EW($$e);if($$je instanceof I7){}else{throw $$e;}}a.ni=1;}}
function Xv(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AJE(b,c,d-c|0);e=DL(Bd(16,Be(e.length,1024)));g=AJr(e,0,e.data.length);h=a.uI;i=new QD;b=DL(1);j=b.data;j[0]=63;Hm();k=A6D;i.nR=k;i.nm=k;c=j.length;if(c&&c>=i.wC){i.Eg=h;i.sE=b.hA();i.Df=2.0;i.wC=4.0;i.yp=B5(512);i.rl=DL(512);k=A6E;if(k===null){i=new BU;Bm(i,C(84));N(i);}i.nR=k;i.nm=k;a:while(true){if(i.lv==3){f=new C$;Y(f);N(f);}i.lv=2;b:{while(true){try{k=AEB(i,f,g);}catch($$e){$$je=EW($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(I1(k))
{d=Ch(f);if(d<=0)break b;k=Eu(d);}else if(Id(k))break;h=!Me(k)?i.nR:i.nm;c:{if(h!==A6E){if(h===A6F)break c;else break b;}d=Ch(g);b=i.sE;l=b.data.length;if(d<l){k=A6G;break b;}ADf(g,b,0,l);}Fv(f,f.Z+K5(k)|0);}}l=Id(k);AA7(a,e,0,g.Z);PQ(g);if(!l){while(true){d=i.lv;if(d!=2&&d!=4){f=new C$;Y(f);N(f);}f=A6H;if(f===f)i.lv=3;l=Id(f);AA7(a,e,0,g.Z);PQ(g);if(!l)break;}return;}}N(AWp(f));}i=new BU;Bm(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BN(BY(a.lD,b),10);b=a.lD;c=b.L;d=a.mY;if(c>d.data.length)d=B5(c);e=0;f=0;if(e>c){b=new BH;Bm(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Xv(a,d,0,c);a.lD.L=0;}
function HE(){GU.call(this);this.EZ=null;}
function V1(a){a.EZ=DL(1);}
var LB=G(HE);
var A6g=null;function APk(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGB(){var b;b=new LB;V1(b);A6g=b;}
function Ei(){var a=this;CI.call(a);a.sG=null;a.pY=null;a.gu=0;a.sc=0;a.jE=0;}
var A6A=null;var A6B=null;var A6I=null;function A1P(){A1P=Bn(Ei);AXn();}
function A3E(a,b,c,d,e,f,g){var h=new Ei();UC(h,a,b,c,d,e,f,g);return h;}
function UC(a,b,c,d,e,f,g,h){A1P();DJ(a,b,c);a.sG=d;a.pY=e;a.gu=f;a.sc=g;a.jE=h;}
function AXn(){var b;b=new Ei;AQr();UC(b,C(87),0,C(88),A6J,2,0,0);A6A=b;b=A3E(C(89),1,C(90),A6J,2,0,1);A6B=b;A6I=I(Ei,[A6A,b]);}
function MI(){var a=this;B.call(a);a.D9=null;a.EC=null;}
function AGK(b){var c,d;if(Gq(b))N(AI6(b));if(!AKt(P(b,0)))N(AI6(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKt(d))break a;else N(AI6(b));}}c=c+1|0;}}
function AKt(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mq=G(MI);
var A6C=null;function AFp(){AFp=Bn(Mq);ANS();}
function AGW(a){var b,c;b=new SY;b.gs=C(91);Hm();c=A6D;b.jl=c;b.nW=c;b.Ex=a;b.wJ=0.3333333432674408;b.CU=0.5;b.xD=DL(512);b.z9=B5(512);return b;}
function ANS(){var b,c,d,e,f;b=new Mq;AFp();c=Q(BK,0);d=c.data;AGK(C(92));e=d.length;f=0;while(f<e){AGK(d[f]);f=f+1|0;}b.D9=C(92);b.EC=c.hA();A6C=b;}
function X$(){var a=this;B.call(a);a.gi=null;a.qb=null;a.mC=null;a.Am=null;a.sp=null;a.sB=null;}
function AI9(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gi,b,c));}
function O0(a,b){var c,d,e,f,g,h,i,$$je;c=new BK;d=b;while(a.qb[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gi,b,d));f=e.data;Fc();d=f.length;AFp();g=A6C;h=AJr(e,0,d);a:{try{i=AGW(g);Hm();g=AIC(AGc(AKW(i,A6E),A6E),h);break a;}catch($$e){$$je=EW($$e);if($$je instanceof Gd){g=$$je;}else{throw $$e;}}h=new ADo;h.kG=1;h.k3=1;h.iQ=C(93);h.nn=g;N(h);}if(!g.Z&&g.ek==g.og)c.cc=g.iC;else{f=B5(Ch(g));e=f.data;c.cc=f;Pn(g,f,0,e.length);}return c;}
function Wz(a,b){var c,d,e;c=new BK;d=b>>>1|0;e=d;while(a.mC[e]){e=e+1|0;}d=e-d|0;Jq(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gi,b,d)));return c;}
var H4=G(CI);
var A6K=null;var A6J=null;var A6L=null;function AQr(){AQr=Bn(H4);AWB();}
function ANN(a,b){var c=new H4();AKA(c,a,b);return c;}
function AKA(a,b,c){AQr();DJ(a,b,c);}
function AWB(){var b;A6K=ANN(C(94),0);b=ANN(C(95),1);A6J=b;A6L=I(H4,[A6K,b]);}
var NF=G(HE);
var A6h=null;function AN2(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHV(){var b;b=new NF;V1(b);A6h=b;}
function AGP(){BU.call(this);this.Cn=null;}
function AI6(a){var b=new AGP();ASW(b,a);return b;}
function ASW(a,b){Y(a);a.Cn=b;}
var Ua=G(Ew);
var Mp=G(0);
function ADO(){B.call(this);this.yI=null;}
function ASn(a,b){a.yI.setPointerCapture(b.pointerId);}
function ADP(){B.call(this);this.xW=null;}
function AMC(a,b){a.xW.releasePointerCapture(b.pointerId);}
function Ia(){var a=this;B.call(a);a.og=0;a.Z=0;a.ek=0;a.jJ=0;}
function ACF(a,b){a.jJ=(-1);a.og=b;a.ek=b;}
function Fv(a,b){var c,d,e;if(b>=0&&b<=a.ek){a.Z=b;if(b<a.jJ)a.jJ=0;return a;}c=new BU;d=a.ek;e=new K;M(e);BN(U(H(U(H(e,C(96)),b),C(97)),d),93);Bm(c,L(e));N(c);}
function Ch(a){return a.ek-a.Z|0;}
function D9(a){return a.Z>=a.ek?0:1;}
var Z7=G(0);
var Lw=G(Ia);
function AHI(b){var c,d;if(b>=0)return ARF(0,b,B5(b),0,b,0);c=new BU;d=new K;M(d);U(H(d,C(98)),b);Bm(c,L(d));N(c);}
function AJE(b,c,d){return ARF(0,b.data.length,b,c,c+d|0,0);}
function Pn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BH;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bm(h,L(i));N(h);}if(Ch(a)<d){j=new Oa;Y(j);N(j);}if(d<0){j=new BH;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bm(j,L(k));N(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iC.data[m+a.p1|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BH;d=b.length;k=new K;M(k);BN(U(H(U(H(k,C(103)),c),C(97)),d),41);Bm(j,L(k));N(j);}
function Nf(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.qc){b=new Kr;Y(b);N(b);}e=d-c|0;if(Ch(a)<e){b=new JF;Y(b);N(b);}if(c>J(b)){f=new BH;d=J(b);b=new K;M(b);BN(U(H(U(H(b,C(104)),c),C(97)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BH;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bm(f,L(b));N(f);}if(c>d){b=new BH;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bm(b,L(f));N(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;AAc(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function M6(){var a=this;Ia.call(a);a.nh=0;a.pJ=null;a.C0=null;}
function AJr(b,c,d){var e,f,g;e=b.data;f=new ADe;g=e.length;d=c+d|0;ACF(f,g);AXW();f.C0=A6M;f.nh=0;f.pJ=b;f.Z=c;f.ek=d;f.C4=0;f.w6=0;return f;}
function ADf(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.w6){e=new Kr;Y(e);N(e);}if(Ch(a)<d){e=new JF;Y(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BH;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bm(i,L(j));N(i);}if(d<0){e=new BH;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bm(e,L(i));N(e);}h=a.Z;k=h+a.nh|0;l=0;while(l<d){b=a.pJ.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BH;d=b.length;i=new K;M(i);BN(U(H(U(H(i,C(103)),c),C(97)),d),41);Bm(e,
L(i));N(e);}
function PQ(a){a.Z=0;a.ek=a.og;a.jJ=(-1);return a;}
function IH(){B.call(this);this.DR=null;}
var A6F=null;var A6E=null;var A6D=null;function Hm(){Hm=Bn(IH);AQf();}
function AHs(a){var b=new IH();AKr(b,a);return b;}
function AKr(a,b){Hm();a.DR=b;}
function AQf(){A6F=AHs(C(109));A6E=AHs(C(110));A6D=AHs(C(111));}
var Pd=G(Cw);
function AP9(a){}
function AOY(a,b,c){}
function HM(){var a=this;Cw.call(a);a.dP=null;a.r=null;}
function ACE(a,b){var c,d,e;El(a,b);a.dP=AIP(0,0,64);c=new Tn;c.bO=new Bg;c.dR=CN(Q(C3,0));c.dV=new Bg;c.pZ=new Bg;c.mo=new B2;c.Cb=new B2;d=b.P;c.bH=d;e=b.bw;c.e2=e;c.cA=d.l1;c.cU=Rn(e);d=b.o.mT;e=new YY;e.tz=c;Ba(d,e);d=b.o.mh;e=new YX;e.v8=c;Ba(d,e);a.r=c;Ba(b.o.bG,new ZV);b=b.o.bG;c=a.r;BJ(c);d=new ZU;d.xC=c;Ba(b,d);}
function HA(a){EI(a.x.P,a.dP);}
function AFZ(a,b,c){var d,e,f,g,h;a:{d=a.r;Co(d.bO,b);e=d.cf;if(e!==c){d.cf=c;f=(B3(d.dR)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].fT(e,c);h=h+1|0;}}}}
function CH(){HM.call(this);this.M=null;}
function F9(a,b){KP(a,b,1);}
function KP(a,b,c){var d,e,f;ACE(a,b);d=new ADr;e=a.r;d.b8=CN(Q(Tz,0));d.ck=e;a.M=d;Ba(a.r.dR,d);Ba(b.o.bS,a.M);d=b.o.ft;e=a.M;BJ(e);f=new Wa;f.v3=e;Ba(d,f);d=b.o.cR;e=a.M;BJ(e);f=new V_;f.tk=e;Ba(d,f);if(c){b=b.o.bS;f=a.r.cU;d=new WV;d.wB=f;Ba(b,d);}}
function ANW(a){HA(a);JM(a.M);}
function IC(a,b,c){var d,e;AFZ(a,b,c);d=(B3(a.M.b8)).data.length;e=0;while(e<d){e=e+1|0;}}
function AMw(a,b){var c,d,e,f,g;c=a.M;d=0;e=(B3(c.b8)).data;f=e.length;g=0;while(g<f){d=e[g].W.cj(b)|d;g=g+1|0;}return d;}
var Fa=G(0);
function AHy(a){a.gx(ID());}
function Hs(a){a.gx(Mb());}
function AIj(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IW;c=new J_;d=new Hn;AGX();KV(d,A6N);Mr(c,d,BZ(A6O),BZ(A6P),BZ(A6Q),BZ(A6O),BZ(A6R),BZ(A6S),BZ(A6T),BZ(A6U),BZ(A6V),BZ(A6W));e=AJy(S(C(112)));AGj();f=(A6X.hA()).data;g=f.length;h=Q(Kp,g);i=h.data;j=0;while(j<g){i[j]=f[j].pm;j=j+1|0;}k=AKe(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new IY;m=new I6;AU7();d=A6Y;Oz(m,d,A6Z,A60,A61,A62,d);LO(l,m,AKX(),AHA(S(C(117)),S(C(112)),CD(0)),AKX(),AHY(1,0.07500000298023224),A63,A64);LE(b,c,e,h,k,l,AEh(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.gx(b);}
var Nd=G(0);
var F_=G(0);
function KS(){var a=this;CH.call(a);a.E=null;a.G=null;a.iL=null;a.jn=0;a.k7=null;a.mu=null;a.zB=null;a.ng=null;a.fG=null;}
function A4$(a){var b=new KS();AFs(b,a);return b;}
function AFs(a,b){var c,d,e;KP(a,b,0);a.fG=AVW(a.r);c=KU(a.M);a.iL=c;a.E=If(c);c=If(a.iL);a.G=c;a.mu=AHl(a.E,c);c=a.E;c.b4=1;Oc(a.fG,c,a.G);c=a.E;d=new TJ;d.Bm=a;c.iu=d;c=a.G;d=new TK;d.y9=a;c.iu=d;AHj(a,0);MV(a.r,a.E);Ba(b.o.ft,a);Ba(b.o.bS,a);c=b.o.bG;d=new TL;d.xd=a;Ba(c,d);c=b.o.bG;d=new HR;e=new TH;e.u2=a;Is(d,b,e);Ba(c,d);Ba(b.o.gO,a);Ba(b.o.hf,a);b=b.o.cR;c=new TI;c.sT=a;Ba(b,c);Hs(a);}
function V5(a,b){if(a.E===b)a.jn=a.jn|1;if(a.G===b)a.jn=a.jn|2;if((a.jn&3)==3)AK3(a);}
function AHj(a,b){IX(a.E,b);IX(a.G,b);}
function A13(a,b,c){if(DN(a.r,a.E))return Hd(a.E,b,c);if(!DN(a.r,a.G))return 0;return Hd(a.G,b,c);}
function AFL(a){if(DN(a.r,a.E))return VH(a,a.E);if(!DN(a.r,a.G))return null;return VH(a,a.G);}
function VH(a,b){var c;c=new SN;c.su=b;return c;}
function AFq(a,b,c){var d;d=DW(c);if(b!==a.E)a.ng=d;else a.zB=d;b=a.zB;if(b!==null&&a.ng!==null)Gi(a.x.bw,DW(c));else{if(b!==null)Gi(a.x.bw,b);b=a.ng;if(b!==null)Gi(a.x.bw,b);}}
function AK3(a){var b,c,d;Bk(Bt(),C(122));b=a.E.d.h;c=a.G.d.h;d=new U_;d.sC=a;AIl(b,c,d,a.x.bw);}
function AR$(a,b){var c,d;c=I0(a.E,b);d=I0(a.G,b);return !c&&!d?0:1;}
function AYE(a){var b;HA(a);In(a.E);In(a.G);b=a.fG;AGx(b,b.iF.bH);JM(a.M);}
function AXI(a){return GD(0);}
function ASv(a){W7(a.E);W7(a.G);}
function AYA(a){ADY(a.E);ADY(a.G);}
function AS6(a,b){PZ(a.E,b);PZ(a.G,b);}
function AZq(a,b){OJ(a.r,b);}
function ANg(a,b){if(J9(a.M,b)){LQ(a.E);LQ(a.G);}}
function APD(a,b,c){IC(a,b,c);AFY(a,b,c);}
function AFY(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cg(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;QI(f,g-h|0,b.b);Mo(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mo(a.G,d,f,c);X(a.fG.i,f.a,d.b);X(a.fG.k,d.a-f.a|0,f.b);}
function AL2(a,b){BJ(b);Ir(a.iL,b);Ft(a.E,b);Ft(a.G,b);a.fG.im=b;}
function AHd(a,b){if(b.bm!=121)return 0;return 1;}
function AJq(a,b){var c,d,e,f;if(DN(a.r,a.E)){c=a.iL;d=b.j;e=a.E;f=new O6;f.uS=a;GP(c,d,e,a,a,a,f);}if(DN(a.r,a.G)){c=a.iL;b=b.j;d=a.G;e=new O5;e.t4=a;GP(c,b,d,a,a,a,e);}return 1;}
function AZJ(a,b){var c,d;c=BW(a.E,b.j)&&Xm(a.E,b)?1:0;d=BW(a.G,b.j)&&Xm(a.G,b)?1:0;return !c&&!d?0:1;}
function AXJ(a,b,c,d){var e,f;e=BW(a.E,b.j)&&O2(a.E,b,c,d)?1:0;f=BW(a.G,b.j)&&O2(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function AQu(a,b,c){var d,e,f,g,h,i,j,k;d=BW(a.E,b.j);e=BW(a.G,b.j);f=a.r;g=f.ea;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FL(f,i);if(e&&!(!h&&!j))FL(a.r,a.G);if(d){i=Wl(a.E,b,c);if(i!==null)return i;}return !e?null:Wl(a.G,b,c);}
function AZ$(a,b,c){var d,e,f,g;d=BW(a.E,b.j);e=BW(a.G,b.j);f=d&&SU(a.E,b,c)?1:0;g=e&&SU(a.G,b,c)?1:0;return !f&&!g?0:1;}
function ARJ(a,b,c,d){var e,f,g,h;e=BW(a.E,b.j);f=BW(a.G,b.j);g=e&&LL(a.E,b,c,d)?1:0;h=f&&LL(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AYa(a){return AFL(a);}
var AGZ=G(KS);
function A4E(a){var b=new AGZ();A1T(b,a);return b;}
function A1T(a,b){var c;AFs(a,b);a.E.e0=1;a.G.e0=1;c=new S$;c.xf=a;Qf(a,c,C(123));c=new Ta;c.Ap=a;Qf(a,c,C(124));}
function AQF(a){return GD(1);}
function Qf(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new OT;d=d.then(Bv(e,"f"));f=new OV;f.tC=b;f.tB=c;g=new OU;d.then(Bv(f,"f"),Bv(g,"f"));}
var AHn=G();
function A1m(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(NU(b)){case -1570047148:if(!Bj(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(131)))break a;d=19;break a;case -811765794:if(!Bj(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(133)))break a;d=11;break a;case -695287066:if(!Bj(b,C(134)))break a;d=20;break a;case -631889171:if(!Bj(b,C(135)))break a;d=9;break a;case -536831301:if(!Bj(b,C(136)))break a;d=25;break a;case -439438829:if(!Bj(b,C(137)))break a;d=21;break a;case -357667878:if(!Bj(b,C(138)))break a;d=22;break a;case -223304637:if(!Bj(b,C(139)))break a;d=2;break a;case -193916863:if(!Bj(b,C(140)))break a;d=23;break a;case 2129957:if(!Bj(b,C(141)))break a;d=1;break a;case 3343967:if(!Bj(b,C(142)))break a;d=10;break a;case 3556498:if
(!Bj(b,C(143)))break a;d=4;break a;case 91636708:if(!Bj(b,C(144)))break a;d=24;break a;case 485517998:if(!Bj(b,C(145)))break a;d=7;break a;case 544901384:if(!Bj(b,C(146)))break a;d=3;break a;case 1030621992:if(!Bj(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new Un;break b;case 3:case 4:b=new Uk;break b;case 5:b=new Uj;break b;case 6:b=new Um;break b;case 7:b=new Ul;break b;case 8:b=new Ur;break b;case 9:case 10:b=new Uq;break b;case 11:b=new Ut;break b;case 12:b=new Us;break b;case 13:b=new AAQ;break b;case 14:b=new AAP;break b;case 15:b=new AAO;break b;case 16:b=new AAD;break b;case 17:b=new AAC;break b;case 18:b=new AAA;break b;case 19:b=new AAz;break b;case 20:b=new AAy;break b;case 21:b=new AAx;break b;case 22:b=new AAw;break b;case 23:b
=new AAH;break b;case 24:b=new AAG;break b;case 25:b=new AAF;break b;case 26:b=new AAE;break b;case 27:b=new AAJ;break b;default:b=new AAI;break b;}b=new Uo;}return b;}
var AJB=G();
var KZ=G(Lw);
function AFJ(){var a=this;KZ.call(a);a.qc=0;a.p1=0;a.iC=null;}
function ARF(a,b,c,d,e,f){var g=new AFJ();AUk(g,a,b,c,d,e,f);return g;}
function AUk(a,b,c,d,e,f,g){ACF(a,c);a.Z=e;a.ek=f;a.p1=b;a.qc=g;a.iC=d;}
function AAc(a,b,c){a.iC.data[b+a.p1|0]=c;}
function Lo(){var a=this;B.call(a);a.Eg=null;a.sE=null;a.Df=0.0;a.wC=0.0;a.nR=null;a.nm=null;a.lv=0;}
function N$(){var a=this;B.call(a);a.h7=0;a.ka=0;}
var A6H=null;var A6G=null;function AEF(a,b){var c=new N$();AIN(c,a,b);return c;}
function AIN(a,b,c){a.h7=b;a.ka=c;}
function I1(a){return a.h7?0:1;}
function Id(a){return a.h7!=1?0:1;}
function NE(a){return !Rs(a)&&!Me(a)?0:1;}
function Rs(a){return a.h7!=2?0:1;}
function Me(a){return a.h7!=3?0:1;}
function K5(a){var b;if(NE(a))return a.ka;b=new Eg;Y(b);N(b);}
function Eu(b){return AEF(2,b);}
function TY(a){var b,c;switch(a.h7){case 0:b=new Q$;Y(b);N(b);case 1:b=new Vj;Y(b);N(b);case 2:b=new TV;c=a.ka;Y(b);b.D0=c;N(b);case 3:b=new Q3;c=a.ka;Y(b);b.Fp=c;N(b);default:}}
function AI0(){A6H=AEF(0,0);A6G=AEF(1,0);}
var AEz=G();
var I5=G(0);
var WM=G();
function AN7(a,b){return b.arrayBuffer();}
var WL=G();
function AQ$(a,b){var c,d;c=new X9;d=new X7;return $rt_globals.WebAssembly.instantiate(b,APq(Bv(c,"f"),Bv(d,"f")));}
var WJ=G();
function ARA(a,b){AMy(b);}
var WI=G();
function AV8(a,b){AHv(b);}
var W=G(0);
function S$(){B.call(this);this.xf=null;}
function A2v(a,b){H0(a.xf.E,b);}
function Ta(){B.call(this);this.Ap=null;}
function AYe(a,b){H0(a.Ap.G,b);}
var Uo=G();
function ATi(a,b){return A4$(b);}
var Un=G();
function ALK(a,b){return A33(b);}
var Uk=G();
function AWK(a,b){return A4c(b);}
var Uj=G();
function AZo(a,b){var c,d,e,f,g;c=new AA8;El(c,b);d=(ID()).br.ef;c.EN=d;c.k_=AK4(d);c.iZ=new Bg;c.h9=new Bg;c.dl=KN();c.dT=KN();c.m8=GD(1);b=b.o.bS;d=new Wq;d.mb=c;Ba(b,d);b=c.m8.data[DQ()*c.m8.data.length|0];d=Iq(c.x.P,b,10);c.mW=d;Cn(c.x.P.ch,d);e=Eo(c.x.P.ch,C(153));d=c.x.P.ch;f=new K;M(f);BN(f,43);H(f,b);g=CZ(e+Eo(d,L(f)));c.jB=g;c.iH=BV(c.iH,AD2(c,1,g,b,c.mW,c.x.P));c.iG=BV(c.iG,AD2(c,0,c.jB,b,c.mW,c.x.P));Rb(c,c.dl,c.iH);Rb(c,c.dT,c.iG);Cr(c.dl.X,1.0,1.0,1.0,1.0);Fh(c.dl,c.k_);Cr(c.dT.X,1.0,1.0,1.0,1.0);Fh(c.dT,
c.k_);b=Bt();g=c.jB;d=new K;M(d);U(H(d,C(154)),g);Bk(b,L(d));return c;}
var Um=G();
function ANQ(a,b){var c,d,e;c=new Xp;F9(c,b);d=new Wn;d.nM=new Bg;d.od=new Bg;c.yL=d;c.fe=AJD();c.dE=AJD();c.ou=Du(C(155),25.0);Ba(c.r.dR,c);d=b.o.bG;e=new ABz;e.uy=c;Ba(d,e);Ba(b.o.bS,c);b=b.o.cR;d=new ABt;d.vC=c;Ba(b,d);AD5(c.dE);BR(c.dP,CD(43));b=Ff();JE(c.fe,b);JE(c.dE,b);b=c.fe;b.kS=new ABu;d=c.dE;d.kS=new ABv;d.o1=new Qb;d.wH=new Qc;Nk(b,(RF(0)).kf);Nk(c.dE,(RF(0)).kf);return c;}
var Ul=G();
function AUo(a,b){var c,d,e;c=new AAB;F9(c,b);Ba(c.r.dR,c);BR(c.dP,CD(43));d=b.o.bG;e=new Ue;e.Cx=c;Ba(d,e);b=b.o.cR;d=new Uf;d.Ba=c;Ba(b,d);return c;}
var Ur=G();
function ANv(a,b){var c,d,e;c=new WR;ACE(c,b);c.h0=BM();c.gg=BM();c.r4=S(C(156));c.j$=UF();c.hZ=0;d=c.r.dR;e=new O4;e.x7=c;Ba(d,e);Ba(b.o.bS,c);d=b.o.bG;e=new O3;e.vO=c;Ba(d,e);b=Iq(b.P,C(155),35);c.kd=b;c.mi=AIk(EA(b));BR(c.dP,S(C(157)));return c;}
var Uq=G();
function AP0(a,b){var c,d,e,f;c=new SG;El(c,b);c.h2=AHu();c.e9=0;c.uL=500;c.r5=IE(0,0,0,255,new B2);c.mw=20;c.xn=20;c.Ad=ID();d=b.o.bS;e=new WB;e.lL=c;f=new TG;f.z8=e;e.rU=f;Ba(d,e);d=b.o.ft;e=new ZW;e.AF=c;Ba(d,e);c.eB=b.P;c.xQ=Rn(b.bw);YF(c.h2,Iq(c.eB,C(155),c.xn),c.mw,c.eB.l1);c.iY=I_();return c;}
var Ut=G();
function A0J(a,b){var c,d;c=new Q_;HO(c,b);b=b.o.bG;d=new QK;d.s1=c;Ba(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var Us=G();
function ALu(a,b){var c,d,e,f,g,h,i;c=new W8;F9(c,b);d=b.o.cR;e=new Rv;e.x$=c;Ba(d,e);d=b.bw;f=new PP;f.Dx=c;g=Q(B,1);g.data[0]=C(158);CV(d,f,C(159),g);h=new PO;h.EH=c;g=Q(B,1);g.data[0]=AJg([1,2,3,4,5]);CV(d,h,C(160),g);h=new PL;h.Ca=c;i=Q(B,1);i.data[0]=A3F([1,2,3,4,5]);CV(d,h,C(161),i);h=new PJ;h.EQ=c;g=Q(B,1);g.data[0]=DX([1,2,3,4,5]);CV(d,h,C(162),g);d=b.o.bG;e=new HR;h=new Ru;h.Aa=c;Is(e,b,h);Ba(d,e);return c;}
var AAQ=G();
function ALE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Ws;HO(c,b);c.e7=H$(0,0,300,300);c.gD=SX(0,0,3,3);d=b.P;b=b.o.bS;e=new ABI;e.m4=c;Ba(b,e);b=AK_(d);c.AU=b;FO(c.e7,b);FW(c.e7);b=c.e7.bl;FI();BR(b,A65);BR(c.e7.X,Dx(204,120,50));AQx();e=A66;f=DL((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CW(d);switch(e.fQ){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new E4;Y(b);N(b);}b:
{WE(m,5,5,h);b=m.eK.dZ;switch(e.fQ){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new E4;Y(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nD=m;X(c.gD.t,BQ(m),CO(c.nD));BR(c.gD.bl,c.pT);return c;}
var AAP=G();
function AYj(a,b){var c,d,e;c=new SE;HO(c,b);c.gZ=H$(0,0,300,300);c.mt=new Bg;c.ku=new Bg;c.jS=new Bg;d=b.P;b=b.o.bS;e=new Xy;e.kp=c;Ba(b,e);b=AK_(d);c.q1=b;FO(c.gZ,b);FW(c.gZ);b=c.gZ.bl;FI();BR(b,A65);BR(c.gZ.X,Dx(204,120,50));return c;}
var AAO=G();
function AQT(a,b){var c,d,e,f;c=new AAq;El(c,b);c.DM=20;c.Fq=11;c.D_=220;c.l$=new Bg;c.EY=5000;c.io=1;c.gR=I(Hn,[CD(0),CD(255)]);c.eM=b.P;d=b.o.bS;e=new Yu;e.lY=c;f=new UB;f.tm=e;e.qQ=f;Ba(d,e);b=b.o.ft;d=new VP;d.rB=c;Ba(b,d);b=HI(c.eM,200,220);c.oC=b;Hx(b,C(155),20.0);b=HI(c.eM,200,20);c.gH=b;Hx(b,C(155),20.0);c.iD=I_();return c;}
var AAD=G();
function AN_(a,b){var c,d,e;c=new Kn;HO(c,b);Ba(b.o.bS,c);d=b.o.bG;e=new ADb;e.wG=c;Ba(d,e);Ba(b.o.gO,new ADa);d=b.o.gO;e=new AC_;e.sv=c;Ba(d,e);Ba(b.o.hf,new AC$);d=b.o.hf;e=new ADc;e.zW=c;Ba(d,e);b=!Vq(b.bw)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var AAC=G();
function AUD(a,b){var c,d;c=new Sp;HO(c,b);c.ud=CD(20);c.gl=H$(0,0,300,300);c.vS=Du(C(14),80.0);b=b.o.bG;d=new R$;d.DT=c;Ba(b,d);return c;}
var AAA=G();
function A1I(a,b){var c;c=new S9;OE(c,b);Hi(c.cl,0,0,300,300);X(c.dm,300,300);return c;}
var AAz=G();
function AP$(a,b){var c;c=new S8;OE(c,b);c.f1=new Bg;c.gm=new Bg;X(c.d$,150,140);X(c.dm,500,100);X(c.fp,150,200);X(c.eL,500,250);return c;}
var AAy=G();
function A0M(a,b){var c,d,e;c=new V0;F9(c,b);c.Ch=3;c.we=Du(C(166),20.0);c.j3=UF();c.qf=1;Ba(c.r.dR,c);BR(c.dP,CD(43));d=b.o.bG;e=new Pu;e.zn=c;Ba(d,e);b=b.o.cR;d=new Pv;d.vM=c;Ba(b,d);return c;}
var AAx=G();
function ALo(a,b){return A4B(b);}
var AAw=G();
function A0y(a,b){var c,d,e,f;c=new Qv;J$(c,b);BR(c.dP,CD(43));c.l_=KU(c.M);d=b.o.bG;e=new HR;f=new Pw;f.Bl=c;Is(e,b,f);Ba(d,e);b=b.o.cR;d=new Px;d.zk=c;Ba(b,d);return c;}
var AAH=G();
function AZQ(a,b){var c,d;c=new RK;J$(c,b);c.pr=null;c.mI=JQ();c.jp=JQ();b=b.o.cR;d=new Xq;d.yg=c;Ba(b,d);return c;}
var AAG=G();
function AM7(a,b){var c;c=new YO;J$(c,b);c.vW=Mb();BR(c.dP,CD(43));return c;}
var AAF=G();
function AXu(a,b){return A4e(b);}
var AAE=G();
function AOT(a,b){var c,d,e;c=new PF;J$(c,b);c.ve=Mb();BR(c.dP,CD(43));d=b.o.cR;e=new Ui;e.Ct=c;Ba(d,e);b=b.o.bG;d=new Uh;d.tQ=c;Ba(b,d);return c;}
var AAJ=G();
function AOU(a,b){var c,d;c=new TD;F9(c,b);c.j_=Mb();Ba(c.r.dR,c);BR(c.dP,CD(43));b=b.o.cR;d=new AAS;d.qU=c;Ba(b,d);return c;}
var AAI=G();
function AVi(a,b){var c;c=new ON;AHM(c,b);AKu(c.dx);return c;}
function AC9(){var a=this;B.call(a);a.uv=null;a.AN=null;a.Ac=null;}
function Ie(){var a=this;B.call(a);a.bL=0;a.cN=0;a.dA=0;a.kx=0;}
function A67(a,b,c,d){var e=new Ie();ABL(e,a,b,c,d);return e;}
function ABL(a,b,c,d,e){a.bL=d;a.cN=b;a.dA=c;a.kx=e;}
function Qn(){var a=this;Ie.call(a);a.ee=null;a.bm=0;a.jO=0;a.zS=0;a.oK=0;}
var AG0=G();
function UK(b,c){return (b+(c/2|0)|0)/c|0;}
function YJ(b,c,d){if(b<(2147483647/c|0))return UK(Bc(b,c),d);return 0.5+c*b/d|0;}
function H9(b,c){return ((b+c|0)-1|0)/c|0;}
function GG(b){return b+0.5|0;}
function CZ(b){return b+0.5|0;}
function E5(b,c,d){return Bd(b,Be(c,d));}
function M4(b,c){return AIh(b)/AIh(c);}
function OG(){var a=this;Ie.call(a);a.j=null;a.D$=null;}
var Th=G(0);
function Pt(){var a=this;B.call(a);a.vT=null;a.vU=null;}
function AYk(a,b){var c,d;c=a.vT;d=a.vU;$rt_globals.console.info("paste plain string "+b);c.g(H3(b));DB(d);}
function ABZ(){B.call(this);this.v_=null;}
function ACM(a,b){a.v_.clipboardData.setData("text/plain",$rt_ustr(b));}
function ADe(){var a=this;M6.call(a);a.C4=0;a.w6=0;}
function CB(){var a=this;B.call(a);a.i=null;a.k=null;a.bR=0.0;}
function AUn(){var a=new CB();E2(a);return a;}
function E2(a){a.i=new Bg;a.k=new Bg;}
function AR_(a){}
function AZf(a){return BF(0,0);}
function JL(a,b,c,d){var e;if(!JU(a.i,b)){a.rI(b);Co(a.i,b);}if(!JU(a.k,c)){a.oT(c);Co(a.k,c);}e=a.bR;if(e!==d){a.bR=d;a.ly(e,d);}}
function Dy(a,b){return Cg(b,a.bR);}
function BW(a,b){return Gj(b,a.i,a.k);}
function AKZ(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AOW();Bs(b,d,e,f,A68);}
function ACl(a,b){var c;c=a.i;LN(b,c.a,c.b,a.k);}
function AV1(a,b){return 0;}
function AP3(a,b){}
function ATF(a,b){}
function A0l(a,b,c){}
function ATP(a){}
function AOO(a,b,c,d){return 0;}
function AMJ(a,b,c){return null;}
function AQJ(a,b,c){return 0;}
function ATu(a,b){return 0;}
function A0d(a,b,c,d){return 0;}
function AFf(){var a=this;CB.call(a);a.iF=null;a.lj=null;a.lk=null;a.lh=null;a.li=null;a.ep=null;a.gv=null;a.gw=null;a.im=null;}
function AVW(a){var b=new AFf();AM_(b,a);return b;}
function AM_(a,b){E2(a);a.lj=new Bg;a.lk=new Bg;a.lh=new Bg;a.li=new Bg;a.iF=b;}
function Oc(a,b,c){a.gv=b;a.gw=c;}
function AGx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bs(b,c.a,c.b,a.k,a.im.br.ef);if(a.ep===null)return;d=Cy(a.iF,2.0);e=GN(a.ep,a.gv.lg(),1);f=GN(a.ep,a.gv.kq(),1);g=GN(a.ep,a.gw.lg(),0);h=GN(a.ep,a.gw.kq(),0);i=Be(e,g);j=Bd(f,h);g=BL(i,j);if(g<=0)B$(b,1);k=a.gv.kT();l=a.gv.lX();m=a.gw.lX();n=a.gw.kT();o=a.iF.pZ;while(i<=j){p=a.ep.ir.data[i];if(p.oS){q=a.gv.hG(p.h6);r=a.gv.hG(p.h6+p.oc|0);s=a.gw.hG(p.h5);t=a.gw.hG(p.h5+p.ob|0);X(a.lj,a.i.a,q);X(a.lh,a.i.a,r);X(a.lk,a.i.a+a.k.a|0,s);X(a.li,
a.i.a+a.k.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.k.b|0);if(v>u){X(o,a.k.a,v-u|0);c=a.im;w=JY(c.d2,c,p.oS);if(q==r)Q9(a,b,q,s,d,k.a,l.a,w,a.lj,a.lh);if(s==t)Q9(a,b,s,q,d,n.a,m.a,w,a.lk,a.li);AEa(b,a.i.a,u,o,a.lj,a.lk,a.lh,a.li,w);}}i=i+1|0;}if(g<=0)B$(b,0);}
function Q9(a,b,c,d,e,f,g,h,i,j){var k;k=a.iF.dV;X(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bs(b,f,c,k,h);}
function AFN(){var a=this;B.call(a);a.bY=null;a.dv=null;a.ix=null;}
function KU(a){var b=new AFN();AMd(b,a);return b;}
function AMd(a,b){a.bY=b;}
function Ir(a,b){var c;a.ix=b;c=a.dv;if(c!==null)FY(c,b.c5);c=a.bY.d9;if(c!==null)Gg(c,b.c5,b.i0);}
function Zn(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AO$();i=c.q;j=0;while(j<i){if(f===null){k=(BG(c,j)).bq;l=ZS(FK(Cd(g.h,k)));m=AAt(g.f_);}else{n=f.data;k=n[j].pu.nj;l=!BO(g.f_,n[j].l2)?C(21):ZS(FK(Cd(g.h,k)));m=AAt(n[j].l2);}if(J(l)>153){o=Cv(l,0,150);n=new K;M(n);H(H(n,o),C(167));l=L(n);}if(J(m)>153){n=Cv(m,0,150);o=new K;M(o);H(H(o,n),C(167));m=L(o);}n=Dl(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BG(c,j);}if(f!==null){q=new ADp;q.sz=d;q.sA=p;}else{q=new ADq;q.Bu=d;q.Bt
=o;}V8(h,m,n,l,q);j=j+1|0;}r=AC4(h);if(a.dv!==null)AAZ(a);c=a.bY.ck;g=new Rf;f=new AAo;f.qN=a;f.qO=d;AKT(g,c,f);W3(g,r);d=a.ix;V3(g,d.c5,d.BG);d=AEl(c);a.dv=d;d.pM=d.pM|1;d=GH(g,c);f=a.ix.c5;Jf(d,f.mZ,f.oL);K9(a.dv,d);FY(a.dv,a.ix.c5);d=a.dv;f=new K;M(f);H(H(f,C(168)),e);DK(d,L(f));EH(a.bY,a.dv);d=a.dv;i=(d.Q.k.b+Cy(d.bd,2.0)|0)+Cy(c,2.0)|0;s=(g.d1+g.eP|0)+g.hF|0;t=Cy(g.bV,5.0);e=BF(E5(t,b.a,g.bV.bO.a-s|0),E5(i,b.b,g.bV.bO.b-g.cJ.b|0));Yo(g);KX(g);i=Ej(g);s=g.b7.data.length;i=Bc(i,s)+Bc(g.dO,s+1|0)|0;X(g.cJ,
g.k.a,i);i=(g.d1+g.eP|0)+g.hF|0;b=g.bV;s=(b.bO.a-e.a|0)-Cy(b,5.0)|0;b=g.bV;t=(b.bO.b-e.b|0)-Cy(b,5.0)|0;d=BF(Be(i,s),Be(g.cJ.b,t));Et(a.dv,e,d);FL(c,g);}
function AAZ(a){It(a.bY,a.dv);JV(a.dv);a.dv=null;}
function Ld(a,b,c){var d,e;d=a.bY;e=a.ix;L9(d,e.c5,e.i0,b,c);}
function GP(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=new ST;h.go=a;h.bu=c;h.rv=g;h.i_=e;h.ol=f;h.ml=d;c=Lx();e=h.bu.d;d=Ea(e);e=HD(e);f=h.bu.fz;if(Zc(f,d,e)!==null){i=new R2;i.xb=h;i.xc=b;D2(c,C(169),i);}if(Oq(f,d,e)!==null){i=new R3;i.y3=h;i.y4=b;D2(c,C(170),i);}if(ABH(f,d,e)!==null){e=new R1;e.qy=h;e.qz=b;D2(c,C(171),e);}e=new R0;e.vq=h;e.vp=b;D2(c,C(172),e);HT(h);if(LU()){if(!h.bu.e0){e=new Rx;e.Bq=h;D2(c,C(173),e);}e=new Ry;e.rX=h;D2(c,C(174),e);if(!h.bu.e0&&Vq(HT(h))){e=new Rw;e.z2=h;D2(c,C(175),e);}}e=Lx();j
=Q(BK,5).data;j[0]=C(176);j[1]=C(177);j[2]=C(178);j[3]=C(179);j[4]=C(180);k=j.length;l=0;while(l<k){f=j[l];g=new Qo;g.w_=h;g.xa=f;D2(e,f,g);l=l+1|0;}FF(c,C(181),GZ(e));m=Lx();j=Q(BC,3);n=j.data;f=h.ml;BJ(f);g=new Ph;g.rK=f;n[0]=C9(C(182),g);f=h.ml;BJ(f);g=new Pi;g.sn=f;n[1]=C9(C(183),g);f=h.ml;BJ(f);g=new Pg;g.wl=f;n[2]=C9(C(184),g);I3(m,C(185),CR(j),A69);j=Q(BC,2);n=j.data;g=h.i_;BJ(g);i=new UZ;i.yX=g;n[0]=C9(C(186),i);g=h.i_;BJ(g);i=new UY;i.u$=g;n[1]=C9(C(187),i);FF(m,C(188),CR(j));g=new X2;g.rd=h;I3(m,C(189),
g,A69);if(h.bu.cK.bH.l1){j=Q(BC,2);n=j.data;g=new AAa;g.xH=h;n[0]=C9(C(190),g);g=new AAb;g.yw=h;n[1]=C9(C(191),g);FF(m,C(192),CR(j));}FF(c,C(193),GZ(m));e=Lx();FF(e,C(194),AJb(h));g=new YI;g.wn=h;D2(e,C(195),g);i=new OM;i.xT=h;I3(e,C(196),i,A69);FF(c,C(197),GZ(e));Ld(a,b,GZ(c));}
function AEZ(b){var c;c=new O7;c.uG=b;return c;}
var FS=G(0);
function AZg(a){}
function AOf(a){}
var Q1=G(0);
var Mm=G(0);
function AFl(){var a=this;CB.call(a);a.cK=null;a.bj=null;a.kN=null;a.BZ=0;a.oj=null;a.dd=null;a.nI=0;a.hE=0.0;a.mf=null;a.C3=null;a.fZ=null;a.V=0;a.c$=0;a.d=null;a.fz=null;a.en=null;a.eW=null;a.A0=0;a.zO=0;a.c1=0;a.ci=0;a.co=0;a.ig=null;a.fU=null;a.fB=null;a.js=0;a.j7=0;a.Fs=0;a.Cq=0;a.k0=0;a.lV=0;a.pR=0;a.ed=0;a.de=null;a.fw=null;a.e0=0;a.b4=0;a.Cf=null;a.j5=null;a.zh=null;a.uq=null;a.iu=null;a.bx=0;a.cM=null;a.sD=0;a.rx=null;a.u8=null;}
function If(a){var b=new AFl();AR9(b,a);return b;}
function AR9(a,b){var c,d,e;E2(a);a.BZ=0;a.oj=Q(V,10);a.dd=AXo();a.hE=16.0;a.mf=C(155);a.d=A4u(Q(BK,0),null,null);c=new ADA;c.yB=CN(Q(Nq,0));c.BX=CN(Q(Nq,0));c.qG=CN(Q(AAM,0));c.vF=CN(Q(YQ,0));c.vg=CN(Q(Hg,0));c.AQ=CN(Q(Ss,0));a.fz=c;a.eW=Q(Fq,0);a.ig=BF(1,0);a.fU=I_();a.fB=I_();a.js=0;a.j7=1;a.k0=1;a.lV=1;a.pR=1;a.ed=3;a.de=AHu();a.fw=C(198);a.e0=0;a.b4=0;c=En();BJ(c);d=new Xh;d.Do=c;a.j5=d;a.bx=0;c=new Xg;c.qs=a;a.rx=c;c=new Xf;c.s_=a;a.u8=c;c=b.bY.ck;a.cK=c;a.bj=c.bH;a.kN=b;b=APN(c.cA);a.cM=b;a.fZ=b.g7;e
=a.oj.data;b=new Xe;b.A4=a;e[1]=b;b=new Xl;b.xI=a;e[2]=b;b=new Xk;b.tW=a;e[3]=b;b=new Xj;b.wu=a;e[4]=b;b=new Xi;b.rg=a;e[5]=b;b=new Xd;b.zA=a;e[6]=b;K2(a.d,a,GC(a));}
function OZ(a,b){var c,d,e;c=new VW;c.wY=a;d=new VV;d.yM=a;Ba(b.gO,c);Ba(b.hf,d);e=new VX;e.DC=b;e.DD=c;e.DE=d;return e;}
function Mo(a,b,c,d){JL(a,b,c,d);AAu(a,b,c,d);}
function ARk(a,b,c){U6(a,a.mf,a.hE);PY(a.cM,c);}
function A2w(a,b,c){a.zh=b;a.uq=c;}
function AAu(a,b,c,d){var e;a.c1=Cg(80.0,d);a.ci=Cg(1.0,d);a.co=Cg(10.0,d);e=!a.b4?b.a:(b.a+c.a|0)-Ip(a)|0;X(a.cK.dV,e,b.b);Sf(a.de,a.cK.dV,Be(Ip(a),c.a),c.b,d);b=a.dd;e=Cg(2.0,d);b.eR.t.a=e;}
function AW1(a){a.nI=1;N0(a);}
function AU_(a){a.nI=0;}
function N0(a){Yz(a.dd,MS(GC(a)));}
function Ft(a,b){var c,d;a.en=b;c=a.dd;d=b.br.BW;BR(c.eR.X,d);c=a.fU;d=b.br;H6(c,d.lF,d.lK);c=a.fB;b=b.br;H6(c,b.lF,b.lK);}
function W7(a){Ov(a,a.cM.cW.oe,a.hE+1.0);}
function ADY(a){var b;b=a.hE;if(b<=7.0)return;Ov(a,a.cM.cW.oe,b-1.0);}
function PZ(a,b){Ov(a,b,a.hE);}
function AR0(a,b){OJ(a.cK,b);}
function Ov(a,b,c){if(a.cK.cf!==0.0){U6(a,b,c);Js(GC(a));}a.hE=c;a.mf=b;}
function LQ(a){var b,c,d;b=a.cM;c=a.cK.cA;d=a.bj;b.iN=c;if(b.hI.jf!=c&&b.d4)ADX(b,d);SO(a.eW);IB(a.de);N4(a);}
function U6(a,b,c){var d,e,f,g,h,i,j,k;d=a.bR;e=c*d;Cg(c,d);f=a.cM.cW;d=f===null?0.0:f.oV;if(!(e===d&&BO(b,a.mf))){IB(a.de);Op(a.eW);g=a.d.h.B.data;h=g.length;i=0;while(i<h){E0(g[i]);i=i+1|0;}j=a.cM;f=a.bj;j.cW=AI3(b,e,300,600,j.g7,f);f=a.cM;a.C3=f.cW;a.V=Sj(f,1.25,a.bj);a.c$=CZ(a.cM.cW.p0);a.dd.eR.t.b=EA(a.cM.cW);h=EA(a.cM.cW);i=a.V;k=Vd(a.dd);f=new K;M(f);b=H(H(f,C(199)),b);BN(b,32);U(H(U(H(U(H(EG(b,e),C(200)),h),C(201)),i),C(202)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A6$){h=Na(a.cM.cW,a.V);b=new K;M(b);U(H(b,
C(203)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.is=GW(FZ(a),a.d.A,a.bj.ch,a.fZ);H8(a);N4(a);}}
function AVx(a){Op(a.eW);Ye(a.cM);IB(a.de);}
function OF(a){return Bc(CK(a.d.h)+5|0,a.V);}
function KW(a){return Bd(OF(a)-a.k.b|0,0);}
function AA0(a){return Bd(a.js-Gk(a)|0,0);}
function Gk(a){var b;b=!a.b4?0:a.c$+a.co|0;return Bd(1,(a.k.a-a.c1|0)-b|0);}
function Ip(a){return a.b4?a.c1:a.c1-a.co|0;}
function Ek(a){return a.k.b;}
function I0(a,b){var c,d,e;c=a.d.h;if(ABp(c)&&b-c.z4>0.03125?1:0){d=a.sD;e=a.d.h.cq;if(d!=e){a.sD=e;ZD(a);}}if(a.V)AAU(a);d=ABA((a.bx+a.Fs|0)-a.Cq|0,KW(a));e=a.bx==d?0:1;if(e)F1(a,d);return !AA1(a.dd,b)&&!e&&!a.BZ?0:1;}
function IJ(a,b){var c,d;b=ABA(b,AA0(a));c=a.d;d=b==c.dQ?0:1;if(d)c.dQ=b;if(d){c=a.zh;if(c!==null)c.f();}}
function F1(a,b){var c;if(AJf(a,b)){c=a.uq;if(c!==null)c.f();}}
function AJf(a,b){var c,d;c=ABA(b,KW(a));d=c==a.bx?0:1;if(d){a.bx=c;a.d.mD=c/a.V;}return d;}
function AG9(a){return BF((Ip(a)+a.ci|0)+a.co|0,a.V);}
function ASQ(a){return a.V;}
function AYK(a,b){In(a);}
function In(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H9(a.k.b,a.V)+7|0;c=a.eW;if(c.data.length<b)a.eW=Zf(b,c,a.cM,a.A0,a.zO,a.d.h);B$(a.bj,0);Nz(a.bj,a.i,a.k);d=(a.V-Vd(a.dd)|0)/2|0;b=a.d.is-(SQ(a.dd)/2|0)|0;e=a.d;f=b-e.dQ|0;g=!a.b4?a.c1:(a.ci+a.co|0)+a.c$|0;TX(a.dd,g+f|0,(d+Bc(e.w,a.V)|0)-a.bx|0);h=CK(a.d.h);i=TB(a);j=TA(a);a.A0=i;a.zO=j;k=!a.b4?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c$|0;l=Gk(a);c=a.d.lA;m=Dy(a,40.0);n=i;while(n<=j&&n<h){o=Cd(a.d.h,n);p=ACm(a,n);Xs(p,o,a.bj,a.V,l,a.d.dQ,n,
n%a.eW.data.length|0);a.js=Bd(a.js,FE(o)+m|0);g=a.V;q=Bc(g,n)-a.bx|0;r=c===null?null:c.data[n];s=a.i.b+q|0;t=a.bj;q=a.d.dQ;u=a.en;e=AJ8(Bi(a),n);if(e!==null){if(e.b==(-1))e.b=o.S;e.a=GW(o,e.a,a.bj.ch,a.fZ);e.b=GW(o,e.b,a.bj.ch,a.fZ);}v=a.d;Qh(p,s,k,t,l,g,q,u,e,v.iT,v.iE,v.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cK.dV;n=i;while(n<=j&&n<h&&a.k0){v=ACm(a,n);q=Bc(a.V,n)-a.bx|0;p=Bi(a);if(!Dw(p))w=0;else{o=Er(p);p=F5(p);w=o.K<=n&&n<p.K?1:0;}o=a.en;p=o.br;t=p.sQ;x=a.d.w==n&&c===null?1:0;a:{if(w)t=p.kY;else{if(c!==null)
{y=c.data;if(n<y.length&&y[n]!==null){t=JY(o.d2,o,y[n].g_);break a;}}if(x)t=p.gq;}}AIH(v,a.bj,k,a.i.b+q|0,a.V,e,a.d.dQ,l,t);n=n+1|0;}if(a.j7){s=Be(j+1|0,h);AKl(a,Bc(a.V,s)-a.bx|0,l);}AGs(a);if(a.lV)AHJ(a,i,j,h);if(a.nI&&f>=(( -SQ(a.dd)|0)/2|0)){e=a.dd;v=a.k;if(AEM(e.eR.u,0,0,v))AB1(a.dd,a.bj,a.i);}AGd(a);AFQ(a);Ga(a.bj);AF2(a,i,j);}
function AHJ(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lA;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.en;h=JY(h.d2,h,g.g_);}else h=e!==null?a.en.br.ef:a.en.br.gq;if(!(a.d.w!=b&&g===null)){g=a.ig;i=a.b4;g.a=!i?(a.co-a.ci|0)-a.ed|0:((a.co+a.c$|0)+a.ci|0)-a.ed|0;j=a.V;g.b=j;i=i?0:(a.c1-a.co|0)+a.ci|0;j=Bc(j,b)-a.bx|0;k=a.bj;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AF2(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CK(a.d.h),a.V)-a.bx|0);f=a.de;g=a.bx;h=a.d;i=h.lA===null?h.w:(-1);j=a.bj;k=a.en;Nz(j,f.gA,f.fu);SM(f,j,b,d);ABC(f,b,j);AAT(f,g,e,k,j);l=k.la;if(e<d){h=f.gA;Bs(j,h.a,h.b+e|0,BF(f.fu.a,d-e|0),l.k6);}if(b<=i&&i<=c){k=k.la;c=i/20|0;h=f.c4;l=BG(h,c%h.q|0);h=f.gA;d=Bc(f.c4.q,f.hk);c=l.fs.b;b=((l.qa.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CO(l.cQ)|0)|0;c=i%l.ec|0;e=l.cu;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;X(l.jb,l.fs.a,e);f=l.jV;c=i%l.ec|0;d=l.cu;Cr(f,0.0,
Bc(c,d),l.fs.a,d);Ni(l,j,b,h,k.xR,k.qv);}Ga(j);}
function TB(a){return Be(a.bx/a.V|0,CK(a.d.h)-1|0);}
function TA(a){return Be(((a.bx+Ek(a)|0)-1|0)/a.V|0,CK(a.d.h)-1|0);}
function ARG(a,b){return (Bc(a.V,b)-a.bx|0)+a.i.b|0;}
function ARx(a){return a.i;}
function AUh(a){return a.k;}
function N4(a){YF(a.de,a.cM.cW,a.V,a.cK.cA);}
function ACm(a,b){var c;c=a.eW.data;return c[b%c.length|0];}
function UT(a,b){var c,d,e,f;c=E5(0,J(a.fw),Pm(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BU;Y(b);N(b);}if(c!=1){d=b.cc.data.length;if(d&&c){e=B5(Bc(d,c));d=0;f=0;while(f<c){QT(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Ms(e);}else b=A54;}}return b;}
function P3(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BP(i);k=A5x(i).data;Ju(j,c);c=0;l=k.length;if(c>l){f=new BU;Y(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cq=o.cq+1|0;p=Q(G_,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ASZ(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BB(o.iJ,p);c=0;while(c<i){b=e.data;Ng(o,h[c],n[c],k[c],b[c]);g.qd(CY(h[c]),b[c]);c=c+1|0;}}
function ALa(a){var b;if(Dw(Bi(a)))GT(a);else{b=a.d;OY(b.h,b.w,b.A);}H8(a);Ey(a);return 1;}
function DH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e0)return 0;if(Dw(Bi(a)))GT(a);c=Mc(AB$(b,C(204),C(21)),C(205),(-1));d=c.data;b=a.d;e=b.h;f=b.w;g=b.A;AD3(e,f,g,c);h=d.length;if(!h)b=A54;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B5(i+Bc(h-1|0,J(C(205)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(205))){m=l+1|0;c[l]=P(C(205),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Ms(k);}F4(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CP(a,m,m!=f?J(d[h-1|0]):b.A+J(d[0])|0,0);F8(a);Ey(a);return 1;}
function GT(a){var b,c,d;b=Er(Bi(a));c=a.d.h;d=Bi(a);O8(c,d,UD(c,d));CP(a,b.K,b.ba,0);F8(a);Ey(a);}
function F8(a){var b,c;(Bi(a)).du=0;b=(Bi(a)).bN;c=a.d;Cf(b,c.w,c.A);b=(Bi(a)).bB;c=a.d;Cf(b,c.w,c.A);}
function AKl(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cK.dV;e.b=d-b|0;d=a.b4;e.a=!d?c+a.ed|0:c+a.ci|0;d=!d?(a.i.a+a.c1|0)-a.ed|0:(((a.i.a+a.co|0)+a.c$|0)+a.ci|0)-a.ed|0;Bs(a.bj,d,a.i.b+b|0,e,a.en.br.ef);}}
function AGd(a){var b;b=a.b4?a.i.a+a.c$|0:a.i.a+a.k.a|0;Km(a.fU,a.bx,a.i.b,Ek(a),OF(a),b,a.c$);b=!a.b4?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c$|0;Ro(a.fB,a.d.dQ,b,Gk(a),a.js,a.i.b+Ek(a)|0,a.c$);}
function AFQ(a){var b,c;b=Zp(a.fU);c=Zp(a.fB);if(!(!b&&!c)){B$(a.bj,1);if(b)GV(a.fU,a.bj);if(c)GV(a.fB,a.bj);if(b)G1(a.fU,a.bj);if(c)G1(a.fB,a.bj);}}
function AGs(a){var b,c,d,e,f;b=a.ig;c=a.k;b.b=c.b;b.a=a.ci;d=!a.b4?a.c1-a.co|0:(c.a-Ip(a)|0)-a.ci|0;b=a.bj;c=a.i;Bs(b,c.a+d|0,c.b,a.ig,a.en.br.uB);b=a.ig;d=a.b4;b.a=!d?(a.co-a.ci|0)-a.ed|0:((a.co+a.c$|0)+a.ci|0)-a.ed|0;e=d?0:(a.c1-a.co|0)+a.ci|0;c=a.bj;f=a.i;Bs(c,f.a+e|0,f.b,b,a.en.br.ef);}
function ABA(b,c){return Be(Bd(0,b),c);}
function GC(a){return a.cK.e2;}
function GK(a,b,c){var d,e,f;d=DW(b);e=new K;M(e);H(H(e,C(206)),d);$rt_globals.console.info($rt_ustr(L(e)));CP(a,0,0,0);f=new Y9;f.w4=a;f.w3=b;f.w2=c;c=En();BJ(c);d=new Y8;d.As=c;UQ(b,f,d);}
function JA(a,b,c,d,e){if(IP(a,e))return 1;if(c&&d)return 1;if(c)F1(a,a.bx+((Bc(b,a.V)*12|0)/10|0)|0);else if(!d){Io(a,a.d.w+b|0,e);ABD(a);}return 1;}
function R8(a,b,c,d){var e,f,g;if(IP(a,d))return 1;e=FZ(a);if(!c)f=a.d.A+b|0;else if(b>=0)f=G8(e,a.d.A);else{b=a.d.A;if(!b)f=(-1);else{c=Kh(e,b);if(c>0&&e.eu.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eu.data[c-1|0];}}if(f>e.S){e=a.d;if((e.w+1|0)<CK(e.h))CP(a,a.d.w+1|0,0,d);}else if(f>=0)Dz(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cd(e.h,b-1|0)).S;CP(a,a.d.w-1|0,g,d);}}ACz(a);return 1;}
function IP(a,b){if(Dw(Bi(a))&&!b){F8(a);H8(a);return 1;}if(!(b&&Dw(Bi(a))))F8(a);return 0;}
function CP(a,b,c,d){a.d.A=c;return Io(a,b,d);}
function Io(a,b,c){var d;d=a.d;d.w=E5(0,b,CK(d.h)-1|0);return Dz(a,a.d.A,c);}
function Dz(a,b,c){var d,e;a.d.A=E5(0,b,(FZ(a)).S);a.d.is=a.bR===0.0?0:GW(FZ(a),a.d.A,a.bj.ch,a.fZ);N0(a);H8(a);if(c)(Bi(a)).du=1;d=Bi(a);e=a.d;N1(d,e.w,e.A);(Bi(a)).du=0;return 1;}
function Mu(a,b){var c;c=AWi(Bi(a));Dz(a,b,0);JI(Bi(a),c);}
function H8(a){ABD(a);ACz(a);}
function ABD(a){var b,c,d,e,f;b=a.bx;c=b+Ek(a)|0;d=a.d.w;e=a.V;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))F1(a,d-e|0);else if(f>(c-e|0))F1(a,(f-Ek(a)|0)+a.V|0);}
function ACz(a){var b,c,d,e,f;b=CZ(a.cK.cf*30.0);c=a.d.dQ;d=c+Gk(a)|0;e=a.d.is;f=e+b|0;if(e<(c+b|0))IJ(a,e-b|0);else if(f>(d-b|0))IJ(a,(f-Gk(a)|0)+b|0);}
function IV(a,b){var c,d;CP(a,b.bq,b.bv,0);c=G8(FZ(a),a.d.A);Cf((Bi(a)).bB,a.d.w,c);b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}
function Fw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E5(0,((b.b-d.b|0)+a.bx|0)/a.V|0,CK(a.d.h)-1|0);g=!a.b4?a.c1:(a.ci+a.co|0)+a.c$|0;h=Bd(0,(e-g|0)+a.d.dQ|0);b=Cd(a.d.h,f);d=a.bj.ch;i=a.fZ;if(!(b.eX!==null&&!b.g6))Nv(b,d,i);j=b.eX;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=ABn(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.S;else{j=ZZ(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A6_){b=new K;M(b);U(H(U(H(U(H(b,C(207)),e),C(208)),h),C(209)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DR(f,k);}
function Vu(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.A=b.bv;c.is=GW(Cd(c.h,d),a.d.A,a.bj.ch,a.fZ);N0(a);}
function FZ(a){var b;b=a.d;return Cd(b.h,b.w);}
function LL(a,b,c,d){var e,f;e=CZ((a.V*4|0)*d/150.0);f=CZ(c);if(e)F1(a,a.bx+e|0);if(f)IJ(a,a.d.dQ+f|0);return 1;}
function SU(a,b,c){(Bi(a)).du=0;return 1;}
function Wl(a,b,c){var d;if(c)return null;d=F3(a.fU,b.j,a.rx,1);if(d!==null)return d;d=F3(a.fB,b.j,a.u8,0);if(d!==null)return d;Je(a);Vu(a,Fw(a,b.j));Lt(a.d);if(!b.bL&&!(Bi(a)).du){b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}(Bi(a)).du=1;b=Bi(a);d=a.d;N1(b,d.w,d.A);b=new ACC;b.zz=a;return b;}
function O2(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cN){b=b.j;e=Fw(a,b);f=I$(a.d.h,e.bq,e.bv);g=SI(a,f);h=Oq(a.fz,Ea(a.d),HD(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new Yd;e.Dc=a;e.C_=b;e.Da=g;h.tG(i,c,d,e,a.j5);}else{e=Cq(a.d.h.dM,f);if(e!==null){IV(a,e);c=1;}else{e=Cq(a.d.h.dF,f);if(e!==null&&!ED(e)){if(e.q!=1){Zn(a.kN,b,e,a,g);c=1;}else{IV(a,BG(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fw(a,b.j)).bq;g=Cd(a.d.h,c);c=GL(g,a.d.A);d=G8(g,a.d.A);b=Og(g,c);if((d-1|0)==g.S){Cf((Bi(a)).bN,
a.d.w,Pm(g));Cf((Bi(a)).bB,a.d.w,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.cc.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.A;if(c==j){c=GL(g,c-1|0);d=G8(g,c);}else{if(d!=j){QJ(Bi(a),a.d.w);break b;}c=GL(g,d+1|0);d=G8(g,c);}}}Cf((Bi(a)).bN,a.d.w,c);(Bi(a)).du=1;CP(a,a.d.w,d,0);(Bi(a)).du=0;Je(a);}}break a;case 3:break;default:break a;}QJ(Bi(a),a.d.w);ZK(a.d.h1);Je(a);}}return 1;}
function Xm(a,b){var c,d,e,f,g,h,i,j;c=a.cK.cU;if(F$(a.fU,b.j,c))return 1;if(F$(a.fB,b.j,c))return 1;d=a.de;if(Gj(b.j,d.gA,d.fu)&&GI(c)?1:0)return 1;e=b.j;f=!a.b4?a.c1:(a.co+a.ci|0)+a.c$|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gk(a);i=Ek(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GI(c);if(b.cN){e=Fw(a,b.j);e.bv=GL(Cd(a.d.h,e.bq),e.bv);b=a.d.h;if(!MU(b.dM,e)&&!MU(b.dF,e)?0:1)return DY(c,C(210));}return DY(c,C(176));}
function A1$(a,b){var c,d,e,f,g;c=b.cN;if(c&&b.bm==65){c=CK(a.d.h)-1|0;d=Gz(a.d.h,c);Cf((Bi(a)).bN,0,0);Cf((Bi(a)).bB,CK(a.d.h)-1|0,d);return 1;}if(c&&b.bm==80){Mj(a.d);return 1;}if(!a.e0&&c&&b.bm==90){if(Dw(Bi(a)))F8(a);b=a.d.h;b.cq=b.cq+1|0;e=b.iJ;d=e.q;if(!d)e=null;else{f=(EM(e,d-1|0)).data;e=WK(b,f[0]);c=1;while(c<f.length){WK(b,f[c]);c=c+1|0;}}if(e!==null){CP(a,e.a,e.b,0);Ey(a);}return 1;}if(!c&&!b.dA){if(Bj(b.ee,C(211))){DH(a,C(212));Dz(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ee,C(213))){DH(a,C(214));Dz(a,a.d.A
-1|0,0);c=1;}else if(Bj(b.ee,C(36))){DH(a,C(22));Dz(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ee,C(215))){DH(a,C(216));Dz(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ee,C(217))){DH(a,C(218));Dz(a,a.d.A-1|0,0);c=1;}else if(!Bj(b.ee,C(219)))c=0;else{DH(a,C(220));Dz(a,a.d.A-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dA&&!b.cN)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.oj.data[c];if(e!==null)e.f();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bm){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AJp(a,b))return 1;if(AGa(a,b))return 1;c=b.cN;if(c&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bm;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dA&&!b.kx)return J(b.ee)>0&&DH(a,b.ee)?1:0;return 0;}return 0;}
function AAU(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=TB(a);d=TA(a);if(b.fd!=3&&b.gC==3){e=TN(b.pi);f=new WF;f.yQ=c;f.yP=d;g=new Rh;g.sr=f;while(!g.mP&&ABV(e,g)){}if(!g.mP&&Bj(C(177),Ea(b))){c=Bd(0,c-100|0);d=Be(CK(b.h)-1|0,d+100|0);BB(b.pi,BF(c,d));h=BP(3);i=h.data;i[0]=FD(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.B.data.length);k=0;while(k<d){j=j+Gz(e,k)|0;if(k!=(e.B.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Ar=E3();e=b.fb;l=new ACA;l.si=b;i=Q(B,3);m=i.data;m[0]=E_(b.h);m[1]=h;b=b.h.dh;g=BM();AA9(b,b.df,
g);h=BP(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BG(g,o);d=k+1|0;n[k]=b.b1;q=d+1|0;n[d]=b.bX;k=q+1|0;n[q]=b.fP;o=o+1|0;}m[2]=h;CV(e,l,C(221),i);}}}
function Vs(a){Mj(a.d);}
function ZD(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fO){c=E1(b);d=new K;M(d);H(H(d,c),C(222));$rt_globals.console.info($rt_ustr(L(d)));}c=Ea(b);if(c!==null&&!Bj(C(176),c)){d=b.h.dh;e=QE(d,d.df);if(e===null){Oi(b);KD(b.h);}else{f=DX([Dn(e),Dd(e),e.bW.fP]);g=E_(b.h);h=BP(1);h.data[0]=AH7(c);d=b.h.e6;if(d.fC===null){i=BP(0);j=B5(0);}else{c=AT4(AWc(e.cm,d.fc),e);WZ(c);i=c.oF;j=c.mS;}k=b.h.cq;c=b.fb;d=new OO;d.Aw=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BP(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CV(c,d,C(223),l);}}
else KD(b.h);}
function Hd(a,b,c){var d,e,f,g,h,i;if(c&&a.e0)return 0;d=Er(Bi(a));e=d.K;if(Dw(Bi(a))){f=a.d.h;g=Bi(a);h=UD(f,g);if(c)O8(f,g,h);if(c){CP(a,d.K,d.ba,0);F8(a);Ey(a);}}else{h=Fs(FK(a.d.h.B.data[e]),C(205));i=Be(CK(a.d.h)-1|0,e);Cf((Bi(a)).bB,i,0);if(e>=(CK(a.d.h)-1|0))Cf((Bi(a)).bB,i,Gz(a.d.h,i));else Cf((Bi(a)).bN,i+1|0,0);if(c)GT(a);else CP(a,e,0,0);}b.g(h);return 1;}
function AGa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.e0)return 0;a:{switch(b.bm){case 8:if(Dw(Bi(a))){GT(a);c=1;}else{b=a.d;d=b.A;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OY(b.h,e,c);}else{e=b.w-1|0;c=Gz(b.h,e);b=a.d.h;Lz(b,e);F4(b,e,Gz(b,e),1,C(205));}Ey(a);c=CP(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dw(Bi(a)))DH(a,a.fw);else{f=Er(Bi(a));g=F5(Bi(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=BP(e);i=h.data;j=Q(BK,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fw;d=d+1|0;e=l;}b=new ACH;m=a.d;AJL(b,m.w,m.A);m=new Z$;m.zv
=a;P3(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fw)|0;g.ba=g.ba+J(a.fw)|0;Mu(a,a.d.A+J(a.fw)|0);Ey(a);}c=1;}else b:{if(!Dw(Bi(a))){b=a.d;f=Cd(b.h,b.w);if(f.s.data.length>0){g=UT(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.w;b=DR(e,m.A);n.cq=n.cq+1|0;o=n.iJ;h=Q(G_,1);h.data[0]=ASZ(e,0,1,g,b.bq,b.bv);BB(o,h);Ng(n,e,0,1,g);HL(f,0,J(g));Mu(a,a.d.A-J(g)|0);}}else{b=Er(Bi(a));f=F5(Bi(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=BP(c);k=h.data;j=Q(BK,c);q=j.data;g=a.d;e=g.A;l=g.w;c=0;while(p<=f.K){g=Cd(a.d.h,p);if(g.s.data.length>0){g=UT(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Jh(h,c);j=C8(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.K){f.ba=Bd(0,f.ba-J(g)|0);Mu(a,a.d.A-J(g)|0);}d=d+1|0;}b=DR(l,e);f=new Rr;f.so=a;P3(a,h,0,1,j,b,f);}Ey(a);c=1;}break a;case 13:if(Dw(Bi(a)))GT(a);b=a.d;E0(Cd(b.h,b.w));b=a.d;AKG(b.h,b.w,b.A);Ey(a);c=CP(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ALa(a);}return c;}
function AJp(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cN?Io(a,H9(a.bx,a.V),b.bL):JA(a,2-UK(Ek(a),a.V)|0,0,b.dA,b.bL);break a;case 34:c=!b.cN?JA(a,UK(Ek(a),a.V)-2|0,0,b.dA,b.bL):Io(a,((a.bx+Ek(a)|0)/a.V|0)-1|0,b.bL);break a;case 35:if(!IP(a,b.bL)&&!Dz(a,(FZ(a)).S,b.bL)){c=0;break a;}c=1;break a;case 36:if(!IP(a,b.bL)&&!Dz(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cN;if(c&&b.dA){Je(a);d=a.d.h1;e=d.dJ;if(e<=0)d=null;else{f=d.fq.data;c=e-1|0;d.dJ=c;d=f[c];}if(d===null)c=1;else{CP(a,L1(d),KQ(d),0);JI(Bi(a),
d.oB);c=1;}break a;}c=R8(a,(-1),c,b.bL);break a;case 38:c=JA(a,(-1),b.cN,b.dA,b.bL);break a;case 39:c=b.cN;if(c&&b.dA){d=a.d.h1;e=d.dJ;if(e==(d.fn-1|0))d=null;else{f=d.fq.data;c=e+1|0;d.dJ=c;d=f[c];}if(d===null)c=1;else{CP(a,L1(d),KQ(d),0);JI(Bi(a),d.oB);c=1;}break a;}c=R8(a,1,c,b.bL);break a;case 40:c=JA(a,1,b.cN,b.dA,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bi(a)).bB;d=a.d;Cf(b,d.w,d.A);}if(c)Lt(a.d);return c;}
function Je(a){var b,c,d,e,f,g,h;b=a.d;c=b.h1;d=c.dJ;c=d<0?null:c.fq.data[d];if(c!==null&&b.w==L1(c)&&a.d.A==KQ(c))return;c=a.d;e=c.h1;b=new NN;d=c.w;f=c.A;c=Bi(a);b.ps=DR(d,f);g=AWi(c);b.oB=g;g.du=0;f=e.dJ;h=e.fn;if(f==(h-1|0))ACn(e,b);else{d=f+1|0;while(d<h){ZK(e);d=d+1|0;}ACn(e,b);}e.dJ=e.dJ+1|0;}
function Ey(a){a.d.h.z4=MS(GC(a));}
function H0(a,b){var c,d,e,f;a.Cf=null;LG(a.de,null);AD0(a.d);c=a.d;a.d=b;K2(c,null,null);K2(b,a,GC(a));d=(B3(a.fz.vg)).data;e=d.length;f=0;while(f<e){d[f].qd(c,b);f=f+1|0;}a.bx=GG(b.mD*a.V);}
function SI(a,b){var c;c=LV(a.d.h,b);if(c===null)return C(21);return c.v;}
function HB(a,b){var c,d,e,f,g;a.d.lA=b;if(b===null){Bk(Bt(),C(224));LG(a.de,null);}else{b=b.data;c=DL(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.g_<<24>>24;e=e+1|0;}LG(a.de,c);}}
function IX(a,b){a.d.qu=b;}
function Bi(a){return a.d.rC;}
function LT(a){var b;b=a.iu;if(b!==null)b.g(a);}
function AH8(){var a=this;B.call(a);a.lG=null;a.n2=null;a.gX=null;}
function AHl(a,b){var c=new AH8();AWq(c,a,b);return c;}
function AWq(a,b,c){var d,e;a.lG=b;a.n2=c;d=null;e=new Uy;e.st=a;b.pj(d,e);b=null;d=new Uz;d.rH=a;c.pj(b,d);}
function YB(a,b,c){var d,e,f,g,h,i,j;d=a.gX;if(d!==null&&d.ir!==null){e=b!==a.lG?0:1;f=b.lg();g=(b.kq()+f|0)/2|0;h=g-f|0;d=a.gX;d=d.ir.data[GN(d,g,e)];i=g-(!e?d.h5:d.h6)|0;j= -(b.hG(f)-(b.kT()).b|0)|0;c.p_(Bc(((!e?d.h6:d.h5)+i|0)-h|0,c.pq())+j|0);return;}}
function TJ(){B.call(this);this.Bm=null;}
function AL_(a,b){V5(a.Bm,b);}
function TK(){B.call(this);this.y9=null;}
function A1a(a,b){V5(a.y9,b);}
function TL(){B.call(this);this.xd=null;}
function APJ(a,b){return AHd(a.xd,b);}
function HR(){var a=this;B.call(a);a.oG=null;a.sx=null;a.r1=null;}
function A7a(a,b){var c=new HR();Is(c,a,b);return c;}
function Is(a,b,c){var d;d=null;a.oG=b.bw;a.sx=d;a.r1=c;}
function AOh(a,b){var c,d;if(b.cN&&b.bm==79){c=a.sx;if(c!==null&&b.bL)Ja(a.oG,c);else Kc(a.oG,a.r1);d=1;}else d=0;return d;}
function TH(){B.call(this);this.u2=null;}
function AQw(a,b){var c,d,e;c=a.u2;d=DN(c.r,c.E)?c.E:!DN(c.r,c.G)?null:c.G;if(d!==null){e=new RC;e.yc=c;e.ya=d;e.yb=b;GK(d,b,e);c.k7=null;c.mu.gX=null;c.fG.ep=null;}}
function TI(){B.call(this);this.sT=null;}
function A1J(a,b){b=b;return AJq(a.sT,b);}
var C3=G(0);
function ADr(){var a=this;B.call(a);a.ck=null;a.b8=null;a.d9=null;}
function L9(a,b,c,d,e){var f,g;f=Nn(a.ck);Gg(f,b,c);b=a.ck;c=b.ea;g=new ACR;g.w0=b;g.wZ=c;f.jZ=g;R_(f,d,e);Gm(a,f);}
function Gm(a,b){var c;c=a.d9;if(c!==b)a.d9=BV(c,b);}
function Ou(a,b){var c;c=new ACD;c.q2=a;c.q4=b;return c;}
function Yg(a,b){var c;c=new ADC;c.yn=a;c.yo=b;return c;}
function DS(a){var b;b=a.d9;if(b!==null){Mk(b);Gm(a,null);}}
function EH(a,b){var c,d,e,f;c=a.b8;d=c.db;e=c.dn;if(d==e.data.length)c.dn=C8(e,d+4|0);d=c.db;f=d;while(0<f){e=c.dn.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dn.data[0]=b;c.db=d+1|0;c.ga=null;return b;}
function It(a,b){Sa(a.b8,b);}
function JM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B3(a.b8)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.ck.bH;d.W.cy(e);f=d.Q;g=d.gb.ja;if(!RN(f)){if(!Ob(f)&&!(!f.eI&&f.dU!==null)){f.eI=0;ACg(f);h=f.ey;i=(h.em+h.eH+5.0)/10.0;j=Cy(f.f8,f.kI);h=e.ch;k=f.ey;l=f.jG;m=i*2.0;Cn(h,k);n=j+Lm(h,l,m)|0;f.ik=n;n=E5(0,n,f.k.a);if(n){h=D5(e,n,f.k.b,f.f8.cA);Cn(h,f.ey);k=f.jG;m=j;i=m+i;l=f.ey;o=l.em;B0(h,k,i,m+o-(o+l.eH)/16.0);k=f.dU;if(k===null){k=CW(e);f.dU=k;}CM(k,h);Ez(h);Cr(f.mF,0.0,0.0,BQ(f.dU),CO(f.dU));}}h=g.l4;k
=f.dU;if(k===null)QF(f,e,0,f.k.a,h);else{j=BQ(k);g=g.n9;k=f.i;n=k.a;p=k.b;k=f.dU;DI(e,n,p,k.eT,f.mF,k,g,h,f.f8.cA);n=f.k.a;if(j<n)QF(f,e,j,n-j|0,h);}}l=d.di;if(l!==null){q=d.bd;h=d.Q;k=d.gb.ja;if(l.i6!==null){if(l.dg===null)AGk(l,q);n=Cy(q,2.0);j=Bd(0,((h.k.b-CO(l.dg)|0)/2|0)-n|0);l.gc.a=(((h.i.a+h.k.a|0)-j|0)-BQ(l.dg)|0)-n|0;f=l.gc;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.kC;j=BQ(l.dg);r=n*2|0;X(f,j+r|0,CO(l.dg)+r|0);f=q.bH;g=l.gc;Bs(f,g.a,g.b,l.kC,!l.lP?k.l4:k.jF);Cr(q.mo,0.0,0.0,BQ(l.dg),CO(l.dg));f=q.bH;g=l.gc;n
=g.a+n|0;p=g.b+p|0;g=l.dg;DI(f,n,p,g.eT,q.mo,g,k.n9,!l.lP?k.l4:k.jF,0);}}B$(e,1);j=Cy(d.bd,2.0);n=RN(d.Q);f=d.bd;g=f.dV;f=f.pZ;p=n?0:d.Q.k.b;h=d.W.k;X(f,h.a,h.b+p|0);AIU(e,f,!n?d.Q.i:d.W.i,d.gb.ja.jF, -j|0,g);f=d.W;AJ7(e,f.k,f.i,j,p,Ya(d.gb.lx,d.bd.cf),d.gb.lx.nX,g);c=c+(-1)|0;}f=a.d9;if(f!==null)AEm(f);}
function J9(a,b){var c,d,e,f;c=a.ck;if(c.cA==b)d=0;else{c.cA=b;Js(c.e2);d=1;}if(d){c=a.d9;if(c!==null){c=B7(c.cg);while(B_(c)){N8(Ca(c));}}e=(B3(a.b8)).data;b=e.length;f=0;while(f<b){c=e[f];c.Q.eI=1;c.W.rm();f=f+1|0;}}return d;}
function AUO(a,b){var c,d,e,f,g,h,i,j,k;c=a.d9;if(c!==null){d=0;e=c.cg.q-1|0;a:{while(e>=0){d=NP(BG(c.cg,e),b.j,c.cP.cU);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B3(a.b8)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(BW(h.Q,c)){i=h.di;if(i!==null)i.lP=S4(i,c);e=DY(h.bd.cU,null);}else{i=h.di;if(i!==null)i.lP=0;e=Cy(h.bd,7.0);j=Cy(h.bd,25.0);if(M0(h,c.a,e)){k=Xc(h,c.a,j);if(M8(h,c.b,e)){e=DY(h.bd.cU,L2(k,C(225)));break b;}if(KI(h,c.b,e)){e=DY(h.bd.cU,L2( -k|0,C(225)));break b;}}if(Od(h,c.b,e)){j=ADi(h,
c.b,j);if(Oy(h,c.a,e)){e=DY(h.bd.cU,L2(j,C(226)));break b;}if(MF(h,c.a,e)){e=DY(h.bd.cU,L2( -j|0,C(226)));break b;}}e=0;}}c:{d:{if(!e){if(!BW(h.W,b.j))break d;if(!h.W.bT(b)&&!DY(h.bd.cU,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AMS(a,b,c,d){var e,f,g,h,i,j;e=a.d9;if(e!==null){f=0;g=e.cg.q-1|0;a:{while(g>=0){f=N_(BG(e.cg,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B3(a.b8)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!BW(i.Q,b.j)&&!PM(i,b.j)){if(!Ma(i,b))break c;if(!i.W.cz(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AOQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.d9;if(d!==null){e=null;f=d.cg.q-1|0;a:{while(f>=0){e=BG(d.cg,f);g=b.j;h=Fb(e.cp,g);if(!h&&!K$(e.cp)){e=e.kS;if(e!==null)e.f();}e=!h?null:A7b;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B3(a.b8);j=0;while(true){k=i.data;if(j>=k.length)break;b:{g=k[j];l=b.j;if(!c){c:{m=Cy(g.bd,7.0);n=Cy(g.bd,25.0);if(M0(g,l.a,m)){f=Xc(g,l.a,n);if(M8(g,l.b,m)){d=J3(g,l,f,(-1));break c;}if(KI(g,l.b,m)){d=J3(g,l,f,1);break c;}}if(Od(g,l.b,m)){h=ADi(g,l.b,n);if(Oy(g,l.a,
m)){d=J3(g,l,(-1),h);break c;}if(MF(g,l.a,m)){d=J3(g,l,1,h);break c;}}d=null;}if(d!==null)break b;if(BW(g.Q,l)){e=g.di;if(e!==null&&S4(e,l)){g.di.i6.f();d=A7b;break b;}e=g.W.i;f=e.a;h=l.a;f=f-h|0;m=e.b;n=l.b;m=m-n|0;e=g.Q.i;h=e.a-h|0;n=e.b-n|0;e=new Bg;d=new Yc;d.qk=g;d.qm=h;d.ql=n;d.qi=e;d.qh=f;d.qj=m;break b;}}d=!Ma(g,b)?null:g.W.cn(b,c);}if(d!==null){if(!c&&g!==ADn(a)){b=a.b8;f=0;k=b.dn;i=k.data;c=i.length;d:{while(true){if(f>=c){f=(-1);break d;}if(g===i[f])break;f=f+1|0;}}if(f>=0){h=b.db;if(h<=f){b=new Oe;Bm(b,
J0(f));N(b);}if(f){e=i[f];while(f>0){i[f]=i[f-1|0];f=f+(-1)|0;}i[0]=e;i=b.ga;if(i!==null)C6(k,0,i,0,h);}}}return d;}j=j+1|0;}return null;}
function A15(a,b,c){var d,e,f,g,h;d=a.d9;if(d!==null&&Jr(d))return 1;e=(B3(a.b8)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!BW(d.Q,b.j)){if(!Ma(d,b))break b;if(!d.W.dB(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function AX6(a,b,c){var d,e,f,g,h;d=(B3(a.b8)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.W;h.dz(h.i,h.k,c);h=g.Q;if(h.hC!==null){h.ey=null;h.ik=0;h.eI=1;}Iu(g);h=g.di;if(h!==null)NQ(h);f=f+1|0;}}
function ADn(a){var b;b=a.b8;return b.db<=0?null:MH(b,0);}
function Tn(){var a=this;B.call(a);a.bH=null;a.e2=null;a.cU=null;a.bO=null;a.cf=0.0;a.cA=0;a.ea=null;a.dR=null;a.dV=null;a.pZ=null;a.mo=null;a.Cb=null;}
function KL(a){var b;b=a.ea;if(b!==null)b.uw();}
function K0(a){var b;b=a.ea;if(b!==null)b.ws();}
function MV(a,b){var c;c=a.e2.et!==(Ev()).activeElement?0:1;if(c)K0(a);a.ea=b;if(c)KL(a);}
function FL(a,b){K0(a);a.ea=b;KL(a);}
function ABl(a,b){if(a.ea===b)a.ea=null;}
function DN(a,b){return b!==a.ea?0:1;}
function Ki(a){return a.bH.ch;}
function Fi(a,b){return Gx(a.bH,b.h$,b.gY*a.cf,b.j4,0);}
function Cy(a,b){return Cg(b,a.cf);}
function OJ(a,b){var c;c=a.bH;if(!a.cA)c.pO=b;else c.of=b;Js(a.e2);}
function Wa(){B.call(this);this.v3=null;}
function A10(a,b,c,d){var e,f,g,h;e=(B3(a.v3.b8)).data;f=e.length;g=0;a:{while(g<f){if(e[g].W.dy(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function V_(){B.call(this);this.tk=null;}
function AMT(a,b){var c,d,e,f;b=b;c=a.tk;b=b.j;d=0;e=c.b8.db;a:{while(d<e){f=MH(c.b8,d);if(!BW(f.Q,b)&&!PM(f,b)&&!ACf(f,b)?0:1){c=MH(c.b8,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.wQ;if(c!==null&&AGg(c.xL,b)?1:0){d=1;break b;}}d=0;}return d;}
function AE9(){var a=this;B.call(a);a.eR=null;a.oU=0.0;a.iB=0.0;a.hg=0;}
function AXo(){var a=new AE9();ARE(a);return a;}
function ARE(a){var b;b=SX(0,0,2,20);a.eR=b;a.oU=0.5;a.iB=0.0;IE(187,187,187,255,b.X);}
function Vd(a){return a.eR.t.b;}
function SQ(a){return a.eR.t.a;}
function AA1(a,b){var c,d;a:{c=a.hg;if(b>a.iB)while(true){d=a.iB+a.oU;a.iB=d;a.hg=a.hg?0:1;if(b>d)continue;else break a;}}return a.hg==c?0:1;}
function TX(a,b,c){X(a.eR.u,b,c);}
function Yz(a,b){a.iB=b+a.oU*1.25;a.hg=1;}
function AB1(a,b,c){if(a.hg)ZF(a.eR,b,c.a,c.b);}
function ADM(){var a=this;B.call(a);a.f_=null;a.h=null;a.pN=null;a.rC=null;a.h1=null;a.jr=null;a.fb=null;a.lA=null;a.w=0;a.A=0;a.is=0;a.iT=null;a.iE=null;a.pi=null;a.fd=0;a.gC=0;a.gV=0;a.i1=FH;a.Ar=FH;a.A6=FH;a.qu=0;a.EG=0;a.dQ=0;a.mD=0.0;a.fO=0;}
function A4o(a,b,c){var d=new ADM();AKY(d,a,b,c);return d;}
function ANY(a,b){var c=new ADM();AQ9(c,a,b);return c;}
function A4u(a,b,c){var d=new ADM();Vo(d,a,b,c);return d;}
function AKY(a,b,c,d){Vo(a,(AIw(b)).ke,c,d);}
function AQ9(a,b,c){Vo(a,b,null,c);}
function Vo(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rC=AMm();f=new Tl;f.fq=Q(NN,16);f.fn=0;f.dJ=(-1);a.h1=f;a.iT=null;a.iE=BM();a.pi=BM();a.fd=1;a.gC=1;a.gV=1;a.dQ=0;a.mD=0.0;a.fO=0;a.f_=d;a.pN=c;c=new ZG;g=e.length;b=Q(DG,Bd(1,g));if(!g)b.data[0]=XG(C(21));h=b.data;i=0;while(i<g){h[i]=XG(e[i]);i=i+1|0;}d=new Yl;f=new NK;QM(f);d.fc=f;c.e6=d;c.dM=JQ();c.dF=JQ();c.iJ=BM();if(!h.length){c=new BU;Y(c);N(c);}c.B=b;j=ACd(c);c.dh=AGN(ATn(KR(0,j,0),null,null));a.h=c;}
function Ea(a){var b;b=a.pN;if(b===null){b=a.f_;b=b===null?C(176):AHO(b.gP);}return b;}
function HD(a){var b;b=a.f_;return b===null?null:b.ko;}
function Ml(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gC=3;a.gV=3;a.fd=3;c=CQ(b[0]);d=EP(b[1]);CQ(b[2]);if(b.length<5)N5(a.h,c,d);else{e=CQ(b[3]);f=e.data;g=EP(b[4]);Xn(a.h,c,d,e,g,0);Tw(a,Jh(e,f.length),Oj(g));}if(a.fO){h=E1(a);i=JK(E3(),a.i1);j=new K;M(j);H(HK(H(H(j,h),C(227)),i),C(228));$rt_globals.console.info($rt_ustr(L(j)));}h=a.jr;if(h!==null)LT(h);}
function Lt(a){var b;St(a,DR(a.w,a.A),I$(a.h,a.w,a.A));if(!(a.iT!==null&&!ED(a.iE))){b=a.A;if(b>0)St(a,DR(a.w,b-1|0),I$(a.h,a.w,a.A-1|0));}}
function St(a,b,c){var d,e,f,g,h,i,j,k;AD0(a);d=Cq(a.h.dM,c);if(d!==null)c=d;a:{e=Cq(a.h.dF,c);if(e!==null){a.iT=LV(a.h,c);c=B7(e);while(true){if(!B_(c))break a;f=Ca(c);BB(a.iE,LV(a.h,f));}}}c=a.jr;if(c!==null){g=b.bq;h=b.bv;b=c.fz;f=Ea(c.d);e=HD(c.d);i=(B3(b.vF)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Bi(f,e)){b=b.DX;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new P4;e.Em=c;e.Eo=f;e.En=g;e.El=h;b.tG(f,g,h,e,c.j5);}}}
function AD0(a){a.iT=null;Ix(a.iE);}
function Tw(a,b,c){var d,e,f,g,h;if(a.fb!==null){a.A6=E3();d=a.h.cq;e=a.fb;f=new Yb;f.zm=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BP(1);b.data[0]=d;h[2]=b;CV(e,f,C(229),g);}}
function K2(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jr=b;a.fb=c;if(c===null){d=a.h.B.data;e=d.length;f=0;while(f<e){S7(d[f]);f=f+1|0;}}else if(a.fd==1){a.i1=E3();b=Ea(a);if(BO(b,C(176))){a.gC=3;a.gV=3;a.fd=3;b=a.jr;if(b!==null)LT(b);}else{e=BO(b,C(177));f=BO(b,C(180));d=E_(a.h);g=d.data.length;h=!e?5120:10240;i=AH7(b);if(f)JN(a,d,i);else if(g<=h)JN(a,d,i);else if(!e){Vc(a,Oj(d),i);JN(a,d,i);}else{Vc(a,Oj(d),i);j=Oj(d);k=a.fb;c=new Q2;c.zo=a;l=Q(B,2);m=l.data;m[0]=j;j=BP(1);j.data[0]=i;m[1]=j;CV(k,c,C(230),l);a.gC=
2;JN(a,d,i);}}}}
function Vc(a,b,c){var d,e;d=a.fb;e=new UO;e.zF=a;CV(d,e,C(231),I(B,[b,DX([c,250])]));a.gV=2;}
function JN(a,b,c){var d,e,f,g;d=a.fb;e=new W0;e.x5=a;f=Q(B,2);g=f.data;g[0]=b;b=BP(1);b.data[0]=c;g[1]=b;CV(d,e,C(232),f);a.fd=2;}
function E1(a){var b;b=a.f_;return b===null?C(21):ACj(b);}
function Mj(a){var b,c,d,e,f;if(a.fO){b=E1(a);c=new K;M(c);H(H(c,b),C(233));$rt_globals.console.info($rt_ustr(L(c)));}b=Ea(a);if(b===null)d=null;else{a:{e=(-1);switch(NU(b)){case -1655966961:if(!Bj(b,C(180)))break a;e=3;break a;case 3401:if(!Bj(b,C(179)))break a;e=2;break a;case 98723:if(!Bj(b,C(178)))break a;e=1;break a;case 3254818:if(!Bj(b,C(177)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(234);break b;case 2:d=C(235);break b;case 3:d=C(236);break b;default:d=null;break b;}d=C(237);}}if
(d===null)LT(a.jr);else{a.i1=E3();b=a.fb;c=new ABe;c.vh=a;f=Q(B,1);f.data[0]=E_(a.h);CV(b,c,d,f);}}
function Oi(a){var b;b=AT4(a.h.e6,null);WZ(b);Tw(a,b.oF,b.mS);}
function ADA(){var a=this;B.call(a);a.yB=null;a.BX=null;a.qG=null;a.vF=null;a.vg=null;a.AQ=null;}
function Oq(a,b,c){return RA(a,B3(a.yB),b,c);}
function Zc(a,b,c){return RA(a,B3(a.BX),b,c);}
function RA(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Bi(c,d))return g.ER;f=f+1|0;}return null;}
function ABH(a,b,c){var d,e,f,g;d=(B3(a.qG)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Bi(b,c))return g.EM;f=f+1|0;}return null;}
function Fq(){var a=this;B.call(a);a.cb=0;a.da=null;a.cE=null;a.eC=null;a.dI=0;}
var A7c=0;var A6$=0;function Xs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cE;j=i===b&&!i.je?0:1;if(j){a.cE=b;Nv(b,c.ch,a.da.g7);}k=H9(Be(FE(b),e+2048|0),1024);l=a.eC;m=l.data.length;n=k<=m?0:1;if(n){a.eC=C8(l,k);while(m<k){a.eC.data[m]=CW(c);m=m+1|0;}}o=a.da.hI;if(!(!j&&!n)){if(A7c){l=b.gk;$rt_globals.console.info("fMeasure"+l.data);A7c=0;}if(!A6$){c=o.dc;b="alphabetic";c.textBaseline=b;}else{b=o.dc;c="top";b.textBaseline=c;}a.dI=f/1024|0;p=0;while(p<k){Kd(a,o,d,a.dI+p|0);p=p+1|0;}a.cE.je=0;}e=a.eC.data.length;if
(e&&f<=FE(a.cE)){f=f/1024|0;g=a.dI;if(f!=g){if(Wh(f-g|0)>=e){g=0;while(g<e){Kd(a,o,d,f+g|0);g=g+1|0;}a.dI=f;}else{while(true){g=a.dI;if(g>=f)break;Kd(a,o,d,g+e|0);a.dI=a.dI+1|0;}while(true){g=a.dI;if(g<=f)break;Kd(a,o,d,g-1|0);a.dI=a.dI-1|0;}}}}}
function Kd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=X_(a,e);g=a.cE;if(f>=g.s.data.length)return;h=g.gk;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cb;l=a.da.g7;EQ(b);a:{while(true){g=a.cE;if(f>=g.s.data.length)break a;m=l.data;g=JS(g,f);n=m[Kz(g)];o=!A6$?LF(n,c):Na(n,c);m=h.data;Cn(b,n);B0(b,g.v,k,o);k=m[f]-j+a.cb;if(k>1024.0)break;f=f+1|0;}}h=a.eC.data;CM(h[d%h.length|0],b);}
function Qh(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eC.data.length;if(!o)return;if(g>FE(a.cE))return;p=a.cE;q=p.eX;r=p.s;s=g/1024|0;t=X_(a,g);u= -a.cb|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eC.data[s%o|0];bb=w[t];bc=z[t]+a.cb|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.cb|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cb:2*a.cb|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cb:2*a.cb|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gq;if(bb===j)bo=h.br.ry;if(k!==null){p=B7(k);d:{while(B_(p)){if(BO(Ca(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.wp;}if(n!==null){w=n.nC;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AD8(h.d2,h,bi,n.g_);}if(!bn&&!bl){i.b=Be(i.b,FE(a.cE));AF0(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.cb:0)|0,(g
+bg|0)<=(i.b+(!y?a.cb:2*a.cb|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.cb:0)|0,g-x|0,bo);}else{bp=h.jL.data[bb.bZ];p=bn?h.br.kY:SW(bo,WO(h,bp.mO));Cr(a.da.jq,g-x|0,0.0,bg,v);X(a.da.ih,bg,f);Hc(a.da,d,ba,u+c|0,b,bp.g5,p);}if((bb.bF&12)>>2>0){bc=u+c|0;B$(d,1);p=a.da;bq=p.nE;bq.a=bg;x=b+p.t7|0;bk=x-p.BJ|0;br=p.qP;bs=x+br;ba=p.hr;TO();L8(d,bc,bk,bq,br,bs,ba,A7d.k9.g5);B$(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AF0(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jL.data[h.bZ];o=n.g5;p=SW(m,WO(f,n.mO));q=f.br.kY;f=a.da;r=f.jq;s=f.ih;t=l;u=i-j|0;v=u;w=e;Cr(r,t,0.0,v,w);X(s,u,e);Hc(a.da,b,g,c,d,o,p);l=l+i|0;Cr(r,l-k|0,0.0,k,w);X(s,k,e);f=a.da;c=c+i|0;Hc(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cr(r,t,0.0,i,w);X(s,i,e);Hc(a.da,b,g,c-j|0,d,o,q);}
function SW(b,c){if(b!==null)c=b;return c;}
function X_(a,b){var c,d,e,f,g,h,i;c=a.cE;d=c.gk;e=0;f=c.s.data.length;g=b;b=BL(e,f);if(b>0){c=new BU;Y(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BL(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ADT(a){var b,c,d;b=a.eC.data;c=b.length;d=0;while(d<c){AGn(b[d]);d=d+1|0;}a.eC=a.da.nP;a.cE=null;}
function AIH(a,b,c,d,e,f,g,h,i){var j,k;j=FE(a.cE);if(j)j=j+a.cb|0;if(!j)j=j-a.cb|0;k=Bd( -a.cb|0,j-g|0);if(k>=h)return;X(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Zf(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fq,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.t$(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cE===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fq;g.cb=3;g.dI=0;g.da=d;g.eC=d.nP;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)ADT(q);j=j+1|0;}return i;}
function SO(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cE;if(e!==null)e.je=1;d=d+1|0;}}
function Op(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){ADT(b[d]);d=d+1|0;}}
function AF3(){A6$=0;}
function AHB(){var a=this;B.call(a);a.f4=null;a.dp=null;a.e8=null;a.fE=null;a.ox=null;a.ok=null;}
function I_(){var a=new AHB();AXV(a);return a;}
function AXV(a){a.f4=new Bg;a.dp=new Bg;a.e8=new Bg;a.fE=new Bg;a.ox=new B2;a.ok=new B2;}
function Zp(a){var b;b=a.dp;return !Bc(b.a,b.b)?0:1;}
function IL(a,b){return Gj(b,a.e8,a.fE);}
function F3(a,b,c,d){var e,f,g,h,i;e=IL(a,b);f=Gj(b,a.f4,a.dp);if(!e&&!f)return null;if(!f){if(!d)c.g(UV(a,b.a-a.e8.a|0));else c.g(QH(a,b.b-a.e8.b|0));}g=!d?a.f4.a+(a.dp.a/2|0)|0:a.f4.b+(a.dp.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Se;b.v0=a;b.v1=c;b.vZ=i;}else{b=new Sd;b.rR=a;b.rP=c;b.rQ=i;}return b;}
function H6(a,b,c){if(c!==null)BR(a.ox,c);if(b!==null)BR(a.ok,b);}
function AFi(b,c){var d;d=new ABP;d.tj=b;d.B8=c;return d;}
function QH(a,b){var c,d,e;c=a.fE.b;d=a.dp.b;e=c-d|0;return AFi(Be(Bd(0,b-(d/2|0)|0),e),e);}
function UV(a,b){var c,d,e;c=a.fE.a;d=a.dp.a;e=c-d|0;return AFi(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Km(a,b,c,d,e,f,g){U0(a,b,c,d,e,f,g,1);}
function Ro(a,b,c,d,e,f,g){U0(a,b,c,d,e,f,g,0);}
function U0(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(YJ(d,d,e),i);e=e-d|0;i=d-j|0;i=i?YJ(b,i,e):0;if(!h){k=a.f4;k.a=i+c|0;k.b=f-g|0;l=a.dp;l.a=j;l.b=g;l=a.e8;l.a=c;l.b=k.b;k=a.fE;k.a=d;k.b=g;break a;}k=a.f4;k.a=f-g|0;k.b=i+c|0;l=a.dp;l.a=g;l.b=j;l=a.e8;l.a=k.a;l.b=c;k=a.fE;k.a=g;k.b=d;break a;}}X(a.fE,0,0);X(a.dp,0,0);}}
function Ve(a,b){GV(a,b);G1(a,b);}
function GV(a,b){var c;c=a.e8;Bs(b,c.a,c.b,a.fE,a.ox);}
function G1(a,b){var c,d;c=a.dp;c.a=c.a-2|0;c.b=c.b-2|0;d=a.f4;Bs(b,d.a+1|0,d.b+1|0,c,a.ok);b=a.dp;b.a=b.a+2|0;b.b=b.b+2|0;}
function F$(a,b,c){return IL(a,b)&&GI(c)?1:0;}
function AE8(){var a=this;B.call(a);a.E2=20;a.gA=null;a.fu=null;a.lt=0.0;a.lq=null;a.jk=0;a.kU=0;a.hk=0;a.c4=null;a.oz=null;a.fh=null;a.gM=null;a.gK=0;}
function AHu(){var a=new AE8();A2d(a);return a;}
function A2d(a){a.E2=20;a.gA=new Bg;a.fu=new Bg;a.c4=BM();a.oz=DL(0);}
function ABC(a,b,c){var d,e,f,g,h;d=a.gK;if(b==d)return;e=a.c4.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){RO(a,b);a.gK=b;}else{XE(a,c);if(a.gK>=b)while(true){if(h<g)break a;a.gK=Po(BG(a.c4,h%e|0),a.fh,a.gM,a.gK,b,f,a.lt);h=h+(-1)|0;}while(g<=h){a.gK=Po(BG(a.c4,g%e|0),a.fh,a.gM,a.gK,b,f,a.lt);g=g+1|0;}}}}
function LG(a,b){if(b===null)b=DL(0);a.oz=b;}
function AAT(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hk;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c4;h=BG(h,g%h.q|0);i=a.gA;j=a.oz;k=h.fs.b;l=d.la;m=b+f|0;n=h.cu;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&VU(d,j,r,l)!==l.k6?0:1){k=Bc((q-p|0)+1|0,h.cu);X(h.jb,BQ(h.cQ),k);Cr(h.jV,0.0,Bc(p,h.cu),BQ(h.cQ),k);t=r;}else{u=VU(d,j,r,l);Ni(h,e,f+Bc(p,h.cu)|0,i,l.oX,u);X(h.jb,BQ(h.cQ),h.cu);Cr(h.jV,0.0,Bc(q,h.cu),BQ(h.cQ),h.cu);p=q;}q=q+1|0;r=t;}u=VU(d,j,r,l);Ni(h,
e,f+Bc(p,h.cu)|0,i,l.oX,u);g=g+1|0;f=f+a.hk|0;}}
function SM(a,b,c,d){var e,f,g,h,i,j;e=a.c4.q;while(true){f=a.c4.q;g=Bc(f,a.hk);if(g>(d+a.kU|0))break;h=BF(0,g);i=new QL;g=a.fu.a;f=a.kU;j=a.lq;i.jb=new Bg;i.jV=new B2;i.qa=h;i.ec=20;i.cu=f;i.fs=BF(g,20*f|0);i.hw=LF(j,f);if(i.cQ===null)i.cQ=CW(b);BB(a.c4,i);}if(f==e)return;XE(a,b);RO(a,c);}
function RO(a,b){var c,d,e,f,g,h,i,j,k;c=a.c4;d=c.q;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B7(c);while(B_(c)){f=Ca(c);g=a.fh;h=a.lt;EQ(g);i=0;while(true){j=f.ec;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;GQ(f,g,Dl(e),Bc(f.cu,i)+f.hw|0,h);i=i+1|0;}CM(f.cQ,g);f.w5=g.jf;}}
function YF(a,b,c,d){a.lq=b;a.kU=c;a.hk=c*20|0;a.jk=d;YH(a);}
function XE(a,b){var c;c=a.fh;if(!(c!==null&&c.jf==a.jk)){c=D5(b,a.fu.a,a.hk,a.jk);a.fh=c;Cn(c,a.lq);Z0(a.fh,2);}c=a.gM;if(!(c!==null&&c.jf==a.jk)){b=D5(b,a.fu.a,a.kU,a.jk);a.gM=b;Cn(b,a.lq);Z0(a.gM,2);}}
function IB(a){Fr(a.c4,new ADu);Ix(a.c4);YH(a);}
function YH(a){a.fh=BV(a.fh,null);a.gM=BV(a.gM,null);}
function Sf(a,b,c,d,e){Co(a.gA,b);X(a.fu,c,d);a.lt=e;}
function Xh(){B.call(this);this.Do=null;}
function Xg(){B.call(this);this.qs=null;}
function AMk(a,b){var c;c=a.qs;F1(c,FT(b,KW(c)));}
function Xf(){B.call(this);this.s_=null;}
function ALG(a,b){var c;c=a.s_;IJ(c,FT(b,AA0(c)));}
function AJ$(){var a=this;B.call(a);a.jq=null;a.ih=null;a.nE=null;a.hr=null;a.g7=null;a.nP=null;a.cW=null;a.hI=null;a.qP=0.0;a.d4=0;a.t7=0;a.BJ=0;a.iN=0;}
function APN(a){var b=new AJ$();ATa(b,a);return b;}
function ATa(a,b){var c;a.jq=new B2;a.ih=new Bg;a.nE=new Bg;c=new B2;a.hr=c;a.g7=Q(Lv,4);a.nP=Q(Iv,0);a.iN=b;Ly(c);}
function Ye(a){a.hI=BV(a.hI,null);}
function Sj(a,b,c){var d,e;d=CZ(EA(a.cW)*b);a.d4=d;e=a.cW;a.t7= -( -((d+e.em+e.eH)/2.0)|0)|0;ADX(a,c);return a.d4;}
function PY(a,b){var c,d;Ly(a.hr);c=a.hr;UJ(c,b,c);a.qP=WX(a.hr);c=a.hr;d=c.bs+c.bf+1.5|0;a.BJ=d;X(a.nE,0,d*2|0);}
function ADX(a,b){a.hI=BV(a.hI,D5(b,1024,a.d4,a.iN));}
function Hc(a,b,c,d,e,f,g){var h,i;h=a.ih;if(h.a&&h.b){i=a.jq;if(i.bC!==0.0&&i.bf!==0.0){DI(b,d,e,h,i,c,f,g,a.iN);return;}}}
function Xe(){B.call(this);this.A4=null;}
function AUQ(a){var b,c;b=a.A4;c=b.j7?0:1;b.j7=c;b=new K;M(b);Jt(H(b,C(238)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xl(){B.call(this);this.xI=null;}
function AW6(a){var b,c;b=a.xI;c=b.k0^1;b.k0=c;b=new K;M(b);Jt(H(b,C(239)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xk(){B.call(this);this.tW=null;}
function A23(a){var b,c,d,e,f;b=a.tW;c=(b.ed+3|0)%6|0;b.ed=c;d=b.eW.data;e=d.length;f=0;while(f<e){b=d[f];b.cb=c;b=b.cE;if(b!==null)b.je=1;f=f+1|0;}}
function Xj(){B.call(this);this.wu=null;}
function APU(a){var b;b=a.wu;b.b4=b.b4?0:1;IB(b.de);b.de=AHu();N4(b);AAu(b,b.i,b.k,b.cK.cf);}
function Xi(){B.call(this);this.rg=null;}
function ARB(a){var b;b=a.rg;b.lV=b.lV?0:1;}
function Xd(){B.call(this);this.zA=null;}
function A2x(a){var b;b=a.zA;b.pR=b.pR?0:1;}
function Uy(){B.call(this);this.st=null;}
function APX(a){var b;b=a.st;YB(b,b.lG,b.n2);}
function Uz(){B.call(this);this.rH=null;}
function AZM(a){var b;b=a.rH;YB(b,b.n2,b.lG);}
var AGe=G();
function Ns(){B.call(this);this.Dh=null;}
var A6M=null;var A7e=null;function AXW(){AXW=Bn(Ns);A2Q();}
function ANJ(a){var b=new Ns();AHZ(b,a);return b;}
function AHZ(a,b){AXW();a.Dh=b;}
function A2Q(){A6M=ANJ(C(240));A7e=ANJ(C(241));}
var AEH=G(0);
function AIP(b,c,d){return IE(b,c,d,255,new B2);}
function IE(b,c,d,e,f){Cr(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function U7(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOw(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bs=h+i;e.bf=j+i;return e;}
function Iw(b,c,d,e,f){f=U7(b,c,d,f);f.bC=e;return f;}
function HW(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var ZV=G();
function AOB(a,b){var c,d,e;c=b.cN;d=c&&!b.bL&&!b.dA&&!b.kx?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.dA&&!b.kx?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.oK=1;}return 0;}
function ZU(){B.call(this);this.xC=null;}
function AV6(a,b){var c;c=a.xC.ea;return c!==null&&c.it(b)?1:0;}
function Tz(){var a=this;B.call(a);a.bd=null;a.wQ=null;a.CJ=null;a.EX=null;a.Q=null;a.di=null;a.W=null;a.gb=null;a.pM=0;}
function AEl(a){var b=new Tz();ARs(b,a);return b;}
function A2k(a,b){var c=new Tz();AFh(c,a,b);return c;}
function ARs(a,b){AFh(a,b,AUn());}
function AFh(a,b,c){var d;a.bd=b;d=new Ub;E2(d);d.mF=new B2;d.f8=b;a.Q=d;a.W=c;}
function S_(a,b){var c,d;if(a.di===null){c=new QG;c.gc=new Bg;c.kC=new Bg;a.di=c;d=a.gb;if(d!==null)AAk(c,d);}a.di.i6=b;}
function DK(a,b){var c;c=a.Q;c.eI=c.eI|(BO(c.jG,b)?0:1);c.jG=b;Iu(a);}
function AAl(a,b,c){var d,e,f;d=a.Q;e=BO(d.hC,b)?0:1;f=c===d.kI?0:1;if(e){d.hC=b;d.ey=null;QB(d,0);}d.eI=d.eI|(!e&&!f?0:1);d.kI=c;d.ik=0;Iu(a);}
function FY(a,b){var c;a.gb=b;c=b.tb;BJ(b);AAl(a,c,3.0);c=a.di;if(c!==null)AAk(c,b);}
function JV(a){var b;b=a.Q;b.dU=BV(b.dU,null);b.ey=null;a.W=BV(a.W,null);b=a.di;if(b!==null){NQ(b);b.i6=null;}}
function K9(a,b){var c,d,e;c=a.W;d=c.i;e=c.k;b=BV(c,b);a.W=b;b.dz(d,e,a.bd.cf);}
function Et(a,b,c){a.W.dz(b,c,a.bd.cf);Iu(a);}
function Iu(a){var b,c,d;if(a.bd.cf!==0.0){b=a.Q;if(b.hC!==null){c=a.W.k.a;b.k.a=c;d=b.dU;if(d!==null&&c!=BQ(d)&&!(c>=b.ik&&BQ(b.dU)>=b.ik))b.eI=1;b=a.Q;b.bR=a.bd.cf;if(Ob(b))c=0;else{b=a.Q;QB(b,Vn(b));c=b.k.b;}b=a.Q.i;d=a.W.i;X(b,d.a,d.b-c|0);b=a.di;if(b!==null)Co(b.gc,a.Q.i);return;}}}
function ACw(a){return Vn(a.Q);}
function Ma(a,b){return ACf(a,b.j);}
function ACf(a,b){var c;c=!(a.pM&1)?0:1;return !c&&!BW(a.W,b)?0:1;}
function L2(b,c){if(b<0)c=C(242);else if(b>0)c=C(243);return c;}
function Oy(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function MF(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M8(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function KI(a,b,c){var d,e;d=a.W;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Od(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.W;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ADi(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.W;return AJh(b,d,(e.i.b+e.k.b|0)-c|0);}
function M0(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Xc(a,b,c){var d,e;d=a.Q;e=d.i.a;return AJh(b,e+c|0,(e+d.k.a|0)-c|0);}
function AJh(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BL(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function PM(a,b){var c;a:{b:{c:{c=Cy(a.bd,7.0);if(M0(a,b.a,c)){if(M8(a,b.b,c))break c;if(KI(a,b.b,c))break c;}if(!Od(a,b.b,c))break b;if(!Oy(a,b.a,c)&&!MF(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function J3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.W;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new Vk;b.uW=a;b.uX=e;b.u6=f;b.u7=c;b.u3=g;b.u4=j;b.u0=l;b.u1=d;b.uY=h;b.uZ=k;b.vK=m;return b;}
function Kk(){var a=this;B.call(a);a.u=null;a.t=null;a.X=null;a.bl=null;}
function Sl(){var a=new Kk();AB3(a);return a;}
function SX(a,b,c,d){var e=new Kk();AMW(e,a,b,c,d);return e;}
function AB3(a){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;}
function AMW(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;Hi(a,b,c,d,e);}
function Hi(a,b,c,d,e){X(a.u,b,c);X(a.t,d,e);}
function AA3(a){X(a.t,0,0);}
function K$(a){var b;b=a.t;return Bc(b.a,b.b)?0:1;}
function Fb(a,b){return Gj(b,a.u,a.t);}
function ZF(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.X);}
function VJ(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bl;i=a.X;Gu(b,b.iR);GF(b.iR,b.Y,d,e,g,b.c7);NY(b.iR,b.Y,c);g=b.iR;j=b.Y;FC(j,g.wd,h);FC(j,g.wb,i);c=g.sP;j.uniform2f(c,f,0.0);F0(b);}
var Fl=G();
function Nq(){Fl.call(this);this.ER=null;}
function AAM(){Fl.call(this);this.EM=null;}
function YQ(){Fl.call(this);this.DX=null;}
var Hg=G(0);
var Ss=G(0);
function B2(){var a=this;B.call(a);a.bn=0.0;a.bs=0.0;a.bf=0.0;a.bC=0.0;}
function ADJ(a,b,c,d){var e=new B2();A0j(e,a,b,c,d);return e;}
function AK4(a){var b=new B2();AJ_(b,a);return b;}
function A0j(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function Cr(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function AJ_(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;}
function BR(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;return a;}
function AT9(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BE(a)===BE(b)){b=b;if(b.bn===a.bn&&b.bs===a.bs&&b.bf===a.bf&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
var LC=G(0);
function AIo(){var a=this;Fo.call(a);a.cH=null;a.q=0;}
function BM(){var a=new AIo();AOi(a);return a;}
function AOi(a){a.cH=Q(B,10);}
function MN(a,b){var c,d;c=a.cH.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cH=C8(a.cH,d);}}
function BG(a,b){Kx(a,b);return a.cH.data[b];}
function AZx(a){return a.q;}
function BB(a,b){var c,d;MN(a,a.q+1|0);c=a.cH.data;d=a.q;a.q=d+1|0;c[d]=b;a.b3=a.b3+1|0;return 1;}
function AJt(a,b,c){var d,e,f;QC(a,b);MN(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cH.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cH.data[b]=c;a.q=d+1|0;a.b3=a.b3+1|0;}
function EM(a,b){var c,d,e,f;Kx(a,b);c=a.cH.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b3=a.b3+1|0;return d;}
function AG2(a,b){var c;c=K7(a,b);if(c<0)return 0;EM(a,c);return 1;}
function Ix(a){AES(a.cH,0,a.q,null);a.q=0;a.b3=a.b3+1|0;}
function AIB(a,b,c){var d,e,f,g,h,i;QC(a,b);if(c.eF())return 0;MN(a,a.q+c.c2()|0);d=c.c2();e=a.q;f=e-1|0;while(f>=b){g=a.cH.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.b$();i=0;while(i<d){g=a.cH.data;e=b+1|0;g[b]=h.b_();i=i+1|0;b=e;}a.b3=a.b3+1|0;return 1;}
function Kx(a,b){var c;if(b>=0&&b<a.q)return;c=new BH;Y(c);N(c);}
function QC(a,b){var c;if(b>=0&&b<=a.q)return;c=new BH;Y(c);N(c);}
function Fr(a,b){var c;c=0;while(c<a.q){b.g(a.cH.data[c]);c=c+1|0;}}
function Lv(){var a=this;B.call(a);a.oe=null;a.Co=null;a.oV=0.0;a.CC=0;a.CS=0;a.ti=0;a.Dw=0;a.em=0.0;a.eH=0.0;a.Cs=0.0;a.p0=0.0;a.Cy=0;a.qT=null;}
function LF(a,b){return Na(a,b)+a.ti|0;}
function Na(a,b){return (b-EA(a)|0)/2|0;}
function EA(a){return CZ(a.em+a.eH);}
function Nc(a,b){return CZ((a.em+a.eH)*b);}
function Iv(){var a=this;B.call(a);a.eK=null;a.f2=null;a.eT=null;}
var A6v=0;function AGn(a){var b;b=a.f2;if(b!==null){A6v=A6v-1|0;a.eK.dZ.deleteTexture(b);a.f2=null;}}
function BQ(a){return a.eT.a;}
function CO(a){return a.eT.b;}
function S1(a,b,c,d){var e;e=a.eT;e.a=b;e.b=c;Ol(a);a.eK.dZ.texStorage2D(3553,1,d,b,c);e=a.eK.dZ;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Ol(a){var b,c;b=a.eK.dZ;c=a.f2;b.bindTexture(3553,c);}
function CM(a,b){WE(a,b.nS,b.nl,32856);YM(a,b,0,0);}
function WE(a,b,c,d){var e,f,g,h;a:{e=a.eT;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Ol(a);break a;}e=a.eK.dZ;h=a.f2;e.deleteTexture(h);a.f2=a.eK.dZ.createTexture();S1(a,b,c,d);break a;}}S1(a,b,c,d);}}
function JJ(a,b,c,d){Ol(a);YM(a,b,c,d);}
function YM(a,b,c,d){var e;e=a.eK.dZ;b=b.i7;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var YE=G(0);
var A7f=0.0;function Ly(b){Cr(b,1.0471975803375244,0.75,1.25,0.375);}
function UJ(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jj(b.bC,Jj(c,A7f));Cr(d,b.bn/c,b.bs*c,ATz(b.bf*c,1.25),e);}
function WX(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function AEk(){A7f=M4(M4(0.5,0.375),4.0);}
var OD=G(0);
function GI(a){return DY(a,null);}
function Rn(b){var c;c=new ZP;c.vB=b;return c;}
function YY(){B.call(this);this.tz=null;}
function AXA(a){KL(a.tz);}
function YX(){B.call(this);this.v8=null;}
function AUC(a){K0(a.v8);}
function AKQ(){var a=this;B.call(a);a.bN=null;a.bB=null;a.du=0;}
function AMm(){var a=new AKQ();A2D(a);return a;}
function AWi(a){var b=new AKQ();AQQ(b,a);return b;}
function A2D(a){a.bN=new Hh;a.bB=new Hh;}
function AQQ(a,b){a.bN=new Hh;a.bB=new Hh;JI(a,b);}
function JI(a,b){ABS(a.bN,b.bN);ABS(a.bB,b.bB);a.du=b.du;}
function N1(a,b,c){Cf(a.bB,b,c);if(!a.du)Cf(a.bN,b,c);}
function QJ(a,b){Cf(a.bN,b,0);Cf(a.bB,b+1|0,0);}
function Er(a){if(RT(a.bN,a.bB)>0)return a.bB;return a.bN;}
function F5(a){if(RT(a.bN,a.bB)<0)return a.bB;return a.bN;}
function AJ8(a,b){var c,d,e,f;c=a.bN;d=c.K;e=a.bB;if(d==e.K&&c.ba==e.ba?1:0)return null;c=Er(a);e=F5(a);d=c.K;if(d<=b){f=BL(b,e.K);if(f<=0)return BF(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dw(a){var b,c;b=a.bN;c=a.bB;return (b.K==c.K&&b.ba==c.ba?1:0)?0:1;}
function Tl(){var a=this;B.call(a);a.fq=null;a.fn=0;a.dJ=0;}
function ACn(a,b){var c,d,e;c=a.fn;d=a.fq;if(c==d.data.length)a.fq=C8(d,c+16|0);d=a.fq.data;e=a.fn;a.fn=e+1|0;d[e]=b;}
function ZK(a){var b,c,d;b=a.dJ;c=a.fn-1|0;if(b==c)a.dJ=b-1|0;d=a.fq.data;a.fn=c;d[c]=null;}
var G0=G();
function ZG(){var a=this;G0.call(a);a.B=null;a.dh=null;a.e6=null;a.dM=null;a.dF=null;a.iJ=null;a.lC=null;a.cq=0;a.nq=0;a.z4=0.0;}
function Cd(a,b){return a.B.data[b];}
function CK(a){return a.B.data.length;}
function ACd(a){return FD(a,CK(a));}
function Gz(a,b){return a.B.data[b].S;}
function AKG(a,b,c){var d,e,f,g,h;d=a.B;e=d.data;f=e[b];d=C8(d,e.length+1|0);e=d.data;a.B=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D7(Q(Cx,0));a.B.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=D7(Q(Cx,0));}else{e=(IQ(f,c)).data;d=a.B.data;d[b]=e[0];d[b+1|0]=e[1];}F4(a,b,c,0,C(205));}
function Lz(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=D7(LW(d.s,e.s));g=a.B;h=g.data.length;if(b<h&&b>=0){i=Q(DG,h-1|0);c=i.data;Zz(g,b,i);c[b]=f;a.B=i;return;}d=new Bu;Y(d);N(d);}
function OY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].S?0:1)){d=(Cd(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F4(a,b,c,1,NB(e));h=a.B.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=Zz(d,e,Q(Cx,f-1|0));else{j=i[e];if(c<=0)k=Ec(Dv(j.v,1),j.bZ,j.bF);else if(c>=(J(j.v)-1|0)){k=new Cx;l=j.v;ABd(k,Cv(l,0,J(l)-1|0),j.bZ,j.bF);}else{d=B5(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=Ec(Hr(d),j.bZ,j.bF);}i[e]=k;}h.S=h.S-1|0;E0(h);}else if(b!=(d.length-1|0)){F4(a,b,c,1,C(205));Lz(a,b);}}
function AD3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Z4(a.B.data[b],c,e[0]);return;}g=f-1|0;d=(IQ(a.B.data[b],c)).data;h=d[0];i=d[1];d=a.B;j=C8(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);My(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gq(e[m])?XG(e[m]):D7(Q(Cx,0));d[b+m|0]=k;m=m+1|0;}My(i,0,0,e[g]);d[b+g|0]=i;a.B=j;}
function UD(a,b){var c,d,e,f,g,h,i;c=Er(b);d=F5(b);e=c.K;if(e==d.K)return Cv(FK(a.B.data[e]),c.ba,d.ba);f=new K;M(f);b=a.B.data[c.K];e=c.ba;BN(BY(f,Dv(FK(b),e)),10);g=a.B.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AEe(BY(f,FK(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.B.data[d.K];h=d.ba;BY(f,Cv(FK(b),0,h));return L(f);}b=new Oe;Y(b);N(b);}
function O8(a,b,c){var d;ACS(a,b);d=Er(b);F4(a,d.K,d.ba,1,c);}
function ACS(a,b){var c,d,e,f,g,h,i;a:{c=Er(b);d=F5(b);e=c.K;if(e==d.K)HL(a.B.data[e],c.ba,d.ba);else{b=a.B.data[e];HL(b,c.ba,b.S);HL(a.B.data[d.K],0,d.ba);e=c.K+1|0;f=d.K;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DG,(h-f|0)+e|0);AFy(g,e,f,i);a.B=i;Lz(a,c.K);break a;}b=new Bu;Y(b);N(b);}b=new Bu;Y(b);N(b);}}}
function I$(a,b,c){return DR(b,GL(Cd(a,b),c));}
function ADg(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(Cd(a,c)).S|0)>=b)return BF(c,b-d|0);d=d+((Cd(a,c)).S+1|0)|0;c=c+1|0;}return BF(e,0);}
function FD(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+Gz(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function LV(a,b){return Og(Cd(a,b.bq),b.bv);}
function E_(a){var b,c,d,e,f,g,h,i,j;b=B5(ACd(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;QT(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F4(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cq=a.cq+1|0;f=a.iJ;g=Q(G_,1);h=new G_;h.eg=b;h.e1=c;i=Mc(e,C(205),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BF(b,c+J(i[0])|0);break a;}k=BF((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BF(b,c);}i=g.data;h.pn=k;h.n6=d;h.gT=e;i[0]=h;BB(f,g);Ng(a,b,c,d,e);}
function Ng(a,b,c,d,e){var f;f=FD(a,b)+c|0;if(!d){XF(a.dh,f,J(e));Tu(a.e6,f,J(e));}else{UW(a.dh,f,J(e));Pk(a.e6,f,J(e));}}
function WK(a,b){var c,d,e;c=Mc(b.gT,C(205),(-1));if(b.n6){AD3(a,b.eg,b.e1,c);XF(a.dh,FD(a,b.eg)+b.e1|0,J(b.gT));Tu(a.e6,FD(a,b.eg)+b.e1|0,J(b.gT));}else{c=c.data;d=AMm();Cf(d.bN,b.eg,b.e1);e=c.length;if(e==1)Cf(d.bB,b.eg,b.e1+J(c[0])|0);else Cf(d.bB,(b.eg+e|0)-1|0,J(c[e-1|0]));ACS(a,d);UW(a.dh,FD(a,b.eg)+b.e1|0,J(b.gT));Pk(a.e6,FD(a,b.eg)+b.e1|0,J(b.gT));}return b.pn;}
function ABp(a){return a.nq==a.cq?0:1;}
function KD(a){a.nq=a.cq;}
function M_(a){var b,c,d;a.lC=BP(a.B.data.length+1|0);b=0;while(b<a.B.data.length){c=a.lC.data;d=b+1|0;c[d]=(c[b]+(Cd(a,b)).S|0)+1|0;b=d;}}
function Vy(a,b){var c,d,e,f,g,h;c=a.lC;if(c===null){d=0;e=0;a:{while(true){c=a.B.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DR(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DR(f,0);}return h;}d=AJ2(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DR(d,b-(d<0?0:a.lC.data[d])|0);if(h.bv>=(Cd(a,h.bq)).S){h.bq=h.bq+1|0;h.bv=0;}return h;}
var L7=G(0);
function FR(a){return LX(a.th(),a.o7());}
function LX(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BN(BY(e,b[f]),47);f=f+1|0;}return L(BY(e,c));}
var Tp=G(0);
function SJ(){var a=this;B.call(a);a.ij=null;a.f9=null;a.h4=null;}
function AJ5(a,b){var c=new SJ();AO7(c,a,b);return c;}
function A3d(a,b,c){var d=new SJ();AEE(d,a,b,c);return d;}
function AO7(a,b,c){AEE(a,b,c,Q(BK,0));}
function AEE(a,b,c,d){a.ij=b;a.f9=c;a.h4=d;}
function DW(a){var b;b=a.ij;return H3(b!==null?b.name:a.f9.name);}
function AL3(a){return a.h4;}
function UQ(a,b,c){var d,e,f;d=AKR(c);e=new Vh;e.q7=b;b=a.f9;if(b!==null)b.text().then(Bv(e,"f"),Bv(d,"f"));else{b=a.ij.getFile();f=new Vi;f.rY=e;f.rZ=d;b.then(Bv(f,"f"),Bv(d,"f"));}}
function AKR(b){var c;c=new Tq;c.yq=b;return c;}
function AX5(a){var b,c,d,e,f,g,h,i;if(a.f9===null)b=LX(a.h4,DW(a));else{c=a.h4;b=DW(a);d=a.f9.size;e=d|0;if(e!==d){f=DW(a);g=new K;M(g);H(H(g,C(244)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BY(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BY(g,C(37));H(g,i[h]);h=h+1|0;}BY(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(245)),b),C(246)),e);b=L(g);}return b;}
function ALQ(a){return (AFG(DW(a))*31|0)+AGw(a.h4)|0;}
var ACJ=G(0);
function AJR(){B.call(this);this.iK=null;}
function A3r(a){var b=new AJR();AY8(b,a);return b;}
function AY8(a,b){a.iK=b;}
function EP(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iK));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iK));}
function AWm(a){var b,c;b=a.iK.byteLength;c=new K;M(c);H(U(H(c,C(247)),b),C(248));return L(c);}
function ZP(){B.call(this);this.vB=null;}
function DY(a,b){ZH(a.vB,b);return 1;}
function Hh(){var a=this;B.call(a);a.K=0;a.ba=0;}
function Cf(a,b,c){a.K=b;a.ba=c;}
function ABS(a,b){a.K=b.K;a.ba=b.ba;}
function RT(a,b){var c;c=BL(a.K,b.K);if(c)return c;return BL(a.ba,b.ba);}
function NN(){var a=this;B.call(a);a.ps=null;a.oB=null;}
function L1(a){return a.ps.bq;}
function KQ(a){return a.ps.bv;}
function DG(){var a=this;B.call(a);a.s=null;a.S=0;a.gk=null;a.eX=null;a.eu=null;a.ii=null;a.g6=0;a.je=0;a.jz=0;}
var A7g=0;var A7h=0;var A6_=0;function XG(a){var b=new DG();AKf(b,a);return b;}
function D7(a){var b=new DG();Zj(b,a);return b;}
function AKf(a,b){var c;c=Q(Cx,1);c.data[0]=AIY(b);Zj(a,c);}
function Zj(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;E0(a);}
function Jo(a){return a.s.data.length;}
function JS(a,b){return a.s.data[b];}
function GL(a,b){var c;c=Kh(a,b);return c<=0?0:a.eu.data[c-1|0];}
function Kh(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eu!==null&&!a.jz)){Va(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.eu.data[d]=e;d=d+1|0;}a.jz=0;}d=ABn(a.eu,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Og(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Kh(a,b)];}
function HL(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.s=Q(Cx,0);E0(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BL(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=Zz(g,e,Q(Cx,g.data.length-1|0));a.S=a.S-d|0;E0(a);return;}a.s.data[e]=Ec(Fs(Cv(k.v,0,b),Dv(k.v,c)),k.bZ,k.bF);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=Ec(Cv(l.v,0,b),l.bZ,l.bF);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=Ec(Dv(m.v,c),m.bZ,m.bF);g=a.s;a.s=AFy(g,e,f,Q(Cx,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;E0(a);}
function IQ(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DG,[D7(Q(Cx,0)),a]);if(b>=a.S)return I(DG,[a,D7(Q(Cx,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DG,[D7(Lq(c,0,Q(Cx,d))),D7(Lq(c,d,Q(Cx,f-d|0)))]);h=e[d];e=Lq(c,0,Q(Cx,d+1|0));i=e.data;j=Lq(c,d,Q(Cx,f-d|0));c=j.data;i[d]=Ec(Cv(h.v,0,b),h.bZ,h.bF);c[0]=Ec(Dv(h.v,b),h.bZ,h.bF);return I(DG,[D7(e),D7(j)]);}
function Z4(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}My(a,d,b,c);}
function My(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gq(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cx,1);h.data[0]=AIY(d);a.s=h;}else if(!b&&!c){h=Q(Cx,g+1|0);f=h.data;C6(e,0,h,1,g);f[0]=AIY(d);a.s=h;}else{i=f[b];if(c<=0)j=Ec(Fs(d,i.v),i.bZ,i.bF);else if(c>=J(i.v))j=Ec(Fs(i.v,d),i.bZ,i.bF);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B5(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=Ec(Hr(e),i.bZ,i.bF);}f[b]=j;}a.S=a.S
+J(d)|0;E0(a);}
function Pm(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<L6(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Nv(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gk;if(!(e!==null&&e.data.length>=d)){a.gk=ALy(d);a.eX=BP(d);a.g6=1;}Va(a);if(!a.g6)A7h=A7h+1|0;else{f=0;g=0.0;A7g=A7g+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.eu.data[h]=f;Cn(b,i[Kz(j)]);g=g+Eo(b,j.v);a.gk.data[h]=g;a.eX.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.g6=0;a.jz=0;}}
function Va(a){var b;b=a.eu;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eu=BP(a.s.data.length);a.jz=1;}}
function S7(a){a.g6=1;a.ii=null;}
function E0(a){S7(a);a.je=1;a.jz=1;}
function ZZ(a,b,c,d){var e,f,g,h,i,j,k;if(a.ii===null)a.ii=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.ii.data[d];if(e===null){e=c.data;f=a.s.data[d];Cn(b,e[Kz(f)]);f=f.v;e=BP(J(f)-1|0);c=Gs(f);g=!d?0.0:a.gk.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BK;k=i+1|0;OB(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.ii.data[d]=e;}return e;}
function GW(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.g6&&a.eX!==null))Nv(a,c,d);if(b>=a.S)return a.eX.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BL(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eX.data[f];}return (ZZ(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FE(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eX.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G8(a,b){var c;if(b>=a.S)return b+1|0;c=Kh(a,b);return a.eu.data[c];}
function FK(a){var b,c,d,e;b=new K;GM(b,a.S);c=a.s.data;d=c.length;e=0;while(e<d){BY(b,c[e].v);e=e+1|0;}return L(b);}
function AFx(){A6_=0;}
function Yl(){var a=this;B.call(a);a.fC=null;a.fc=null;}
function AWc(a,b){var c=new Yl();AXc(c,a,b);return c;}
function AXc(a,b,c){a.fC=b;a.fc=c;}
function Tu(a,b,c){var d;d=a.fC;if(d===null)return;Zh(a,d,b,c);}
function Pk(a,b,c){var d;d=a.fC;if(d===null)return;ABs(a,d,b,c);}
function Zh(a,b,c,d){var e,f,g,h;e=b.eZ.b$();while(e.cD()){VF(a,e.b_(),c,d);}e=b.fD.b$();while(e.cD()){f=e.b_();g=new S5;g.y6=a;ER(a,g,f,c,d);}h=b.hO.b$();while(h.cD()){e=h.b_();VF(a,e.lp,c,d);f=new S6;f.w8=a;ER(a,f,e.kP,c,d);}b=b.cL.b$();while(b.cD()){Zh(a,b.b_(),c,d);}}
function VF(a,b,c,d){KM(a,b.eG,c,d);}
function ER(a,b,c,d,e){var f,g;a:{if(c instanceof HH){f=c.hu;g=new VS;g.rk=a;g.ri=b;g.rh=d;g.rj=e;Fr(f,g);}else{if(!(c instanceof Ke)){if(!(c instanceof Jk))break a;f=c;ER(a,b,f.jR,d,e);ER(a,b,f.i9,d,e);return;}g=c.id;f=new VT;f.B5=a;f.B4=b;f.B3=d;f.B2=e;Fr(g,f);}}if(c!==null){c=c.fS;if(c!==null)b.lT(c,CY(d),CY(e));}}
function KM(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e+d|0;}
function ABs(a,b,c,d){var e,f,g,h;e=b.eZ.b$();while(e.cD()){JR(a,(e.b_()).eG,c,d);}e=b.fD.b$();while(e.cD()){f=e.b_();g=new Si;g.u9=a;ER(a,g,f,c,d);}h=b.hO.b$();while(h.cD()){e=h.b_();JR(a,e.lp.eG,c,d);f=new Sk;f.Aq=a;ER(a,f,e.kP,c,d);}b.eZ.pA(new Sh);b.fD.pA(new Sg);b=b.cL.b$();while(b.cD()){ABs(a,b.b_(),c,d);}}
function JR(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e-d|0;}
function Li(){var a=this;Ee.call(a);a.c8=0;a.b9=null;a.c0=0;a.B6=0.0;a.nf=0;}
function JQ(){var a=new Li();QM(a);return a;}
function AXl(a,b){return Q(HV,b);}
function QM(a){var b;b=AHw(16);a.c8=0;a.b9=Q(HV,b);a.B6=0.75;Tx(a);}
function AHw(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fx(a){var b;if(a.c8>0){a.c8=0;b=a.b9;AES(b,0,b.data.length,null);a.c0=a.c0+1|0;}}
function Tx(a){a.nf=a.b9.data.length*a.B6|0;}
function MU(a,b){return AAX(a,b)===null?0:1;}
function AB7(a){var b;b=new Ty;b.zg=a;return b;}
function Cq(a,b){var c;c=AAX(a,b);if(c===null)return null;return c.cS;}
function AAX(a,b){var c,d;if(b===null)c=Sc(a);else{d=b.gG();c=Ra(a,b,d&(a.b9.data.length-1|0),d);}return c;}
function Ra(a,b,c,d){var e;e=a.b9.data[c];while(e!==null&&!(e.l3==d&&AIi(b,e.cV))){e=e.cX;}return e;}
function Sc(a){var b;b=a.b9.data[0];while(b!==null&&b.cV!==null){b=b.cX;}return b;}
function M7(a){var b;if(a.oY===null){b=new Qw;b.jh=a;a.oY=b;}return a.oY;}
function Ep(a,b,c){var d,e,f,g;if(b===null){d=Sc(a);if(d===null){a.c0=a.c0+1|0;d=Ts(a,null,0,0);e=a.c8+1|0;a.c8=e;if(e>a.nf)AB4(a);}}else{e=b.gG();f=e&(a.b9.data.length-1|0);d=Ra(a,b,f,e);if(d===null){a.c0=a.c0+1|0;d=Ts(a,b,f,e);e=a.c8+1|0;a.c8=e;if(e>a.nf)AB4(a);}}g=d.cS;d.cS=c;return g;}
function Ts(a,b,c,d){var e,f;e=new HV;VO(e,b,null);e.l3=d;f=a.b9.data;e.cX=f[c];f[c]=e;return e;}
function AI7(a,b){var c,d,e,f,g,h,i,j;c=AHw(!b?1:b<<1);d=Q(HV,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b9.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.l3&b;j=h.cX;h.cX=e[i];e[i]=h;h=j;}f=f+1|0;}a.b9=d;Tx(a);}
function AB4(a){AI7(a,a.b9.data.length);}
function Ls(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b9.data[0];while(e!==null){if(e.cV===null)break a;b=e.cX;d=e;e=b;}}else{f=b.gG();g=a.b9.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.l3==f&&AIi(b,e.cV))){h=e.cX;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cX=e.cX;else a.b9.data[c]=e.cX;a.c0=a.c0+1|0;a.c8=a.c8-1|0;}if(e===null)return null;return e.cS;}
function AIi(b,c){return b!==c&&!b.bJ(c)?0:1;}
function Cx(){var a=this;B.call(a);a.v=null;a.bZ=0;a.bF=0;}
function AIY(a){var b=new Cx();AWM(b,a);return b;}
function Ec(a,b,c){var d=new Cx();ABd(d,a,b,c);return d;}
function AWM(a,b){ABd(a,b,0,0);}
function ABd(a,b,c,d){a.v=b;a.bZ=c;a.bF=d;}
function Kz(a){return a.bF&3;}
function Jl(b,c){return (!b?0:2)+(!c?0:1)|0;}
function L6(a){return J(a.v);}
var NK=G(Li);
function ZL(){var a=this;B.call(a);a.df=null;a.e$=0;}
var A7i=null;function AGN(a){var b=new ZL();AHc(b,a);return b;}
function AHc(a,b){a.e$=0;a.df=b;}
function QE(a,b){var c;if(b.eO)return b;b=B7(b.bo);while(true){if(!B_(b))return null;c=QE(a,Ca(b));if(c!==null)break;}return c;}
function Xb(a,b,c){var d,e,f,g;d=NC(a,a.df,b);if(d===null)return;b=c.cm;e=b===null?A7j:b.cL;f=c.bo;c=a.df;if(d===c){if(c.cm===null)c.cm=b;b=new Z3;b.y2=a;Fr(f,b);b=new Z2;b.u5=a;e.fl(b);b=a.df;b.bo=f;b.cm.cL=e;b.eO=0;return;}if(!ED(f)){c=d.hs;if(c!==null){b=new XC;b.rp=c;Fr(f,b);g=K7(c.bo,d);if(g==(-1))H1(c.bo,f);else{EM(c.bo,g);AIB(c.bo,g,f);}}}b=d.cm;if(b!==null){b=b.hl;c=new Sn;c.sK=b;e.fl(c);g=K7(b.cL,d.cm);if(g==(-1))H1(b.cL,e);else{b.cL.p9(g);b.cL.uo(g,e);}}}
function NC(a,b,c){var d,e,f,g;d=b.bW;if(d.b1==c.b1&&d.bX==c.bX?1:0){d=B7(b.bo);while(B_(d)){e=NC(a,Ca(d),c);if(e!==null)return e;}return b;}b=B7(b.bo);while(true){if(!B_(b))return null;d=Ca(b);f=c.b1;g=c.bX;e=d.bW;if(e.b1<=f&&g<=e.bX?1:0){e=NC(a,d,c);if(e!==null)break;}}return e;}
function AA9(a,b,c){BB(c,b.bW);b=B7(b.bo);while(B_(b)){AA9(a,Ca(b),c);}}
function XF(a,b,c){a.e$=0;Lk(a,a.df,b,c);}
function Lk(a,b,c,d){var e;if(Dd(b)<c)return;a:{if(Dn(b)>c){LR(b,d);Hq(b,d);b=B7(b.bo);while(B_(b)){Lk(a,Ca(b),c,d);}}else{if(!ML(b,c)){if(a.e$)break a;if(Dd(b)!=c)break a;}Hq(b,d);if(Dn(b)==c&&a.e$)LR(b,d);e=B7(b.bo);while(B_(e)){Lk(a,Ca(e),c,d);}if(!a.e$){b.eO=1;a.e$=1;}}}}
function UW(a,b,c){a.e$=0;MP(a,a.df,b,c);}
function MP(a,b,c,d){var e,f,g,h,i,j;if(Dd(b)<c)return;e=Dn(b);f=c+d|0;if(e>f){e= -d|0;LR(b,e);Hq(b,e);g=B7(b.bo);while(B_(g)){MP(a,Ca(g),c,d);}b.bo=Wv(a,b.bo);}else{h=b.bW;if(c<=h.b1&&h.bX<=f?1:0){if(b===a.df){L0(b,0);MO(b,0);h=b.cm;if(h!==null)h.cL.jd();}else{L0(b,(-1));MO(b,(-1));h=b.cm;if(h!==null){ADN(h);b.cm=null;}}Ix(b.bo);}else{e=ML(b,c);f=ML(b,f);if(e&&f)Hq(b, -d|0);else if(e)MO(b,c);else{if(!f)return;L0(b,c);Hq(b, -d|0);}h=B7(b.bo);while(B_(h)){MP(a,Ca(h),c,d);}h=TN(b.bo);g=XZ(0);i=new RX;j=new ACc;j.Fz
=i;j.kD=g;while(ABV(h,j)){}if(!j.kD.oi&&!a.e$)b.eO=1;else a.e$=1;b.bo=Wv(a,b.bo);}}}
function Wv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BM();d=null;e=A7i;f=b.cH;g=b.q;if(e===null)e=A5Z;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}K1(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b3=b.b3+1|0;b=B7(b);while(B_(b)){m=Ca(b);if(Dn(m)==Dd(m))continue;if(!m.eO){if(d!==null){BB(c,d);d=null;}BB(c,m);}else if(d===null)d=m;else{n=ATn(KR(Be(Dn(d),Dn(m)),Bd(Dd(d),Dd(m)),d.bW.fP),d.hs,d.cm);n.eO=1;d=m.cm;if(d===null)d=n;else{ADN(d);d=n;}}}if(d!==null)BB(c,d);return c;}
function ADd(a,b,c,d){var e,f,g,h,i,j;if((Dd(c)-Dn(c)|0)<43)e=Cv(d,Dn(c),Dd(c));else{e=Cv(d,Dn(c),Dn(c)+20|0);f=Cv(d,Dd(c)-20|0,Dd(c));g=new K;M(g);H(H(H(g,e),C(167)),f);e=L(g);}e=AB$(e,C(205),C(249));f=Bt();g=Cl(c);h=new K;M(h);i=U(h,b);BN(i,32);g=H(i,g);BN(g,9);H(g,e);Bk(f,L(h));c=B7(c.bo);j=b+1|0;while(B_(c)){ADd(a,j,Ca(c),d);}}
function AHm(){A7i=new UL;}
function AK9(){var a=this;B.call(a);a.b1=0;a.bX=0;a.fP=0;}
function KR(a,b,c){var d=new AK9();AWJ(d,a,b,c);return d;}
function AWJ(a,b,c,d){a.b1=b;a.bX=c;a.fP=d;}
function ASF(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.b1==c.b1&&a.bX==c.bX&&a.fP==c.fP?1:0;}return 0;}
function AV0(a,b){var c;b=b;c=BL(a.b1,b.b1);if(!c)c=BL(b.bX,a.bX);return c;}
var UL=G();
function APZ(a,b,c){var d;b=b;c=c;b=b.bW;c=c.bW;d=BL(b.b1,c.b1);if(!d)d=BL(c.bX,b.bX);return d;}
function Zl(){var a=this;B.call(a);a.bW=null;a.hs=null;a.bo=null;a.cm=null;a.eO=0;}
function ATn(a,b,c){var d=new Zl();AGM(d,a,b,c);return d;}
function AGM(a,b,c,d){a.eO=0;a.bW=b;a.hs=c;a.bo=BM();a.cm=d;}
function AHE(b){return Zs(b,null);}
function Zs(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=KR(d,e,f);j=new Zl;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGM(j,i,null,l);m=0;while(m<g){l=Zs(b,c);l.hs=j;BB(j.bo,l);m=m+1|0;}return j;}
function AEx(b,c,d){var e,f,g,h,i;a:{e=b.bW;f=b.bo;g=e.b1;h=e.bX;i=e.fP;Bq(c,g);G3(c,h,i);Bq(c,f.q);if(d!==null){e=b.cm;if(e!==null&&ACG(d,e)){g=(Om(d,b.cm)).bp;break a;}}g=(-1);}Bq(c,g);b=B7(f);while(B_(b)){AEx(Ca(b),c,d);}}
function Dn(a){return a.bW.b1;}
function Dd(a){return a.bW.bX;}
function L0(a,b){a.bW.b1=b;}
function MO(a,b){a.bW.bX=b;}
function LR(a,b){var c;c=a.bW;c.b1=c.b1+b|0;}
function Hq(a,b){var c;c=a.bW;c.bX=c.bX+b|0;}
function ML(a,b){return Dn(a)<=b&&b<Dd(a)?1:0;}
function AL0(a){var b,c,d,e,f;b=a.bW;c=b.b1;d=b.bX;e=b.fP;b=new K;M(b);BN(b,40);BN(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eO;f=new K;M(f);Jt(H(H(f,b),C(37)),c);return L(f);}
function AMF(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.bW,c.bW)&&BO(a.bo,c.bo)?1:0;}return 0;}
var Jn=G(0);
function GX(){var a=this;B.call(a);a.cV=null;a.cS=null;}
function A7k(a,b){var c=new GX();VO(c,a,b);return c;}
function VO(a,b,c){a.cV=b;a.cS=c;}
function AWo(a,b){var c,d;if(a===b)return 1;if(!Jb(b,Jn))return 0;a:{b:{c:{d:{c=b;b=a.cV;if(b!==null){if(!b.bJ(c.cV))break c;else break d;}if(c.cV!==null)break c;}b=a.cS;if(b!==null){if(!b.bJ(c.cS))break c;else break b;}if(c.cS===null)break b;}d=0;break a;}d=1;}return d;}
function HV(){var a=this;GX.call(a);a.l3=0;a.cX=null;}
function NH(){var a=this;Lo.call(a);a.yp=null;a.rl=null;}
function AEB(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.yp;e=0;f=0;g=a.rl;a:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ch(b)+j|0,i.length);Pn(b,d,j,f-j|0);e=0;}if(!D9(c)){k=!D9(b)&&e>=f?A6H:A6G;break a;}i=g.data;j=Be(Ch(c),i.length);l=new W9;l.qw=b;l.yN=c;k=AFT(a,d,e,f,g,0,j,l);e=l.vb;j=l.v7;if(k===null){if(!D9(b)&&e>=f)k=A6H;else if(!D9(c)&&e>=f)k=A6G;}ADf(c,g,0,j);if(k!==null)break;}}Fv(b,b.Z-(f-e|0)|0);return k;}
var QD=G(NH);
function AFT(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N9(h,2))break a;i=A6G;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ot(l)){if((f+3|0)>g){j=j+(-1)|0;if(N9(h,3))break a;i=A6G;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CT(l)){i=Eu(1);break a;}if
(j>=d){if(D9(h.qw))break a;i=A6H;break a;}c=j+1|0;m=k[j];if(!Dk(m)){j=c+(-2)|0;i=Eu(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N9(h,4))break a;i=A6G;break a;}k=e.data;o=EO(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vb=j;h.v7=f;return i;}
var I7=G(Ew);
var OT=G();
function AT1(a,b){return b.text();}
function OV(){var a=this;B.call(a);a.tC=null;a.tB=null;}
function ATr(a,b){var c,d,e,f;c=a.tC;d=a.tB;e=b.length;f=new Pr;f.AH=b;c.g(ANY((AKw(e,f)).ke,AB0(d)));}
var OU=G();
function AVk(a,b){AHv(b);}
function IW(){var a=this;B.call(a);a.br=null;a.Fn=null;a.c5=null;a.jL=null;a.la=null;a.d2=null;a.i0=null;a.BG=null;a.pB=null;a.oN=null;}
function A7l(a,b,c,d,e,f){var g=new IW();LE(g,a,b,c,d,e,f);return g;}
function ID(){var b,c,d,e,f,g,h,i,j;b=new IW;c=new J_;d=new Hn;FI();KV(d,A7m);Mr(c,d,BZ(A65),BZ(A7n),BZ(A7o),BZ(A65),BZ(A7p),BZ(A7q),BZ(A7r),BZ(A7s),BZ(A7t),BZ(A7u));e=AJy(S(C(250)));AFb();f=(A7v.hA()).data;g=f.length;h=Q(Kp,g);i=h.data;j=0;while(j<g){i[j]=f[j].nV;j=j+1|0;}LE(b,c,e,h,AKe(S(C(251)),S(C(252)),S(C(253)),S(C(254))),Ff(),AEh(S(C(255)),S(C(256)),S(C(257)),S(C(258))));return b;}
function Mb(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IW;c=new J_;d=new Hn;AN5();KV(d,A7w);Mr(c,d,BZ(A7x),BZ(A7y),BZ(A7z),BZ(A7x),BZ(A7A),BZ(A7B),BZ(A7C),BZ(A7D),BZ(A7E),BZ(A7F));e=AJy(S(C(259)));TO();f=(A7G.hA()).data;g=f.length;h=Q(Kp,g);i=h.data;j=0;while(j<g){i[j]=f[j].k9;j=j+1|0;}k=AKe(S(C(260)),S(C(261)),S(C(262)),S(C(263)));l=new IY;d=new I6;AUU();m=A7H;Oz(d,m,A7I,A7J,A7K,A7L,m);LO(l,d,AG5(),AHA(S(C(264)),S(C(265)),S(C(266))),AG5(),AHY(1,0.17499999701976776),A7M,A7N);LE(b,c,e,h,k,l,AEh(S(C(255)),S(C(256)),
S(C(257)),S(C(267))));return b;}
function LE(a,b,c,d,e,f,g){var h;h=d.data;a.i0=Du(C(166),17.0);a.BG=Du(C(155),15.0);a.pB=Du(C(166),15.0);a.oN=Du(C(14),15.0);a.br=b;a.Fn=c;a.jL=d;a.la=e;if(h.length>=15){a.c5=f;a.d2=g;return;}b=new BU;Y(b);N(b);}
function WO(a,b){if(b===null)b=a.br.ef;return b;}
function Kt(){var a=this;CH.call(a);a.dx=null;a.nU=null;}
function A33(a){var b=new Kt();AHM(b,a);return b;}
function AHM(a,b){var c,d,e,f;KP(a,b,0);c=KU(a.M);a.nU=c;d=If(c);a.dx=d;MV(a.r,d);c=b.o.bG;d=new Yt;d.rS=a;Ba(c,d);c=b.o.bG;d=new HR;e=new Yr;e.Bs=a;Is(d,b,e);Ba(c,d);c=a.dx;d=b.o;f=new AA2;f.qE=c;Ba(d.bS,c);Ba(d.ft,f);OZ(a.dx,b.o);b=b.o.cR;c=new Ys;c.x2=a;Ba(b,c);Hs(a);}
function AJm(a,b){var c,d;c=a.dx;d=new ABB;d.uT=a;d.uU=b;GK(c,b,d);}
function AXH(a,b){if(J9(a.M,b))LQ(a.dx);}
function A09(a,b){return I0(a.dx,b);}
function AOD(a){HA(a);In(a.dx);JM(a.M);}
function A2n(a){return GD(0);}
function ALt(a,b,c){var d;IC(a,b,c);d=a.dx;Mo(d,d.i,b,c);}
function AWI(a,b){BJ(b);Ir(a.nU,b);Ft(a.dx,b);}
function AI$(a,b){if(b.bm!=121)return 0;return 1;}
function AED(a,b){var c,d,e;if(DN(a.r,a.dx)){c=a.nU;b=b.j;d=a.dx;e=new AAn;e.z7=a;GP(c,b,d,a,d,a,e);}return 1;}
function AH_(){var a=this;Cw.call(a);a.yR=null;a.oZ=null;a.kb=null;a.ei=null;a.lS=null;a.ht=null;a.eA=null;a.jw=null;a.qt=null;a.iX=null;a.p3=null;a.p4=null;a.pk=null;a.y_=null;a.CK=null;a.sW=0;}
function A4c(a){var b=new AH_();AYz(b,a);return b;}
function AYz(a,b){var c,d,e,f;El(a,b);c=(ID()).br.ef;a.yR=c;a.oZ=AK4(c);a.kb=new Bg;a.ei=KN();a.lS=KN();a.ht=SX(0,0,3,3);a.eA=H$(0,0,300,300);a.jw=AXo();d=Q(BK,4);e=d.data;e[0]=C(210);e[1]=C(176);e[2]=C(226);e[3]=C(225);a.qt=d;a.iX=Q(Kk,e.length);c=b.o.bS;f=new TE;f.fx=a;Ba(c,f);c=b.o.bG;f=new YW;f.B7=a;Ba(c,f);c=b.o.os;f=new YV;f.sm=a;Ba(c,f);c=b.o.gO;f=new YU;f.Dr=a;Ba(c,f);c=b.o.mh;f=new YT;f.Ed=a;Ba(c,f);c=b.o.cR;f=new YS;f.EL=a;Ba(c,f);b=b.o.ft;c=new YR;c.AR=a;Ba(b,c);a.p3=ACx(a,1);a.p4=ACx(a,0);RZ(a,a.ei,
a.p3);RZ(a,a.lS,a.p4);a.pk=ADK(a,0);a.y_=ADK(a,1);FO(a.eA,a.pk);FW(a.eA);HC(a.eA,Dx(169,183,198));Fh(a.eA,a.yR);Cr(a.ei.X,1.0,1.0,1.0,1.0);Fh(a.ei,a.eA.bl);BR(a.ht.bl,a.oZ);}
function RZ(a,b,c){FO(b,c);FW(b);}
function Sm(a,b){Iw(DQ(),0.5+DQ()*0.5,0.5+DQ()*0.5,1.0,b.X);}
function ACx(a,b){var c,d;c=D5(a.x.P,200,100,b);Hx(c,C(268),11.0);B0(c,C(269),0.0,20.0);J4(c,255,0,0);B0(c,C(269),0.25,40.0);J4(c,0,255,0);B0(c,C(269),0.5,60.0);J4(c,0,0,255);B0(c,C(269),0.75,80.0);d=CW(a.x.P);CM(d,c);Ez(c);return d;}
function ADK(a,b){var c,d,e,f;c=D5(a.x.P,255,100,b);Hx(c,C(166),10.0);d=Bt();e=$rt_str(c.dc.font);f=new K;M(f);H(H(f,C(270)),e);Bk(d,L(f));Eo(c,C(271));B0(c,C(271),0.0,20.0);B0(c,C(271),0.25,40.0);B0(c,C(271),0.5,60.0);B0(c,C(271),0.75,80.0);e=CW(a.x.P);CM(e,c);Ez(c);return e;}
function ALN(a,b){var c;a.sW=a.sW+1|0;c=b/5.0;Iw(c-(c|0),1.0,1.0,1.0,a.ht.X);return AA1(a.jw,b);}
function ANy(a){var b,c,d,e,f,g,h,i;b=a.x.P;EI(b,a.oZ);c=a.iX.data;d=c.length;e=0;while(e<d){ZF(c[e],b,0,0);e=e+1|0;}f=a.eA;g=f.u;g.b=(a.kb.b-f.t.b|0)-5|0;g.a=0;B$(b,0);h=0;while(h<7){f=a.eA;EF(f,b,a.pk,Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eA;f.u.b=(a.kb.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.y_;f=a.eA;f.u.a=Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0;SK(f,b,g,1);h=h+1|0;}SK(a.ei,b,a.p3,1);B$(b,1);g=a.lS;f=a.p4;i=g.u;h=i.a;d=i.b;g=g.t;Gu(b,b.kV);GF(b.kV,b.Y,h,d,g,b.c7);NY(b.kV,b.Y,f);F0(b);B$(b,0);f=
a.CK;if(f!==null)VJ(a.ht,b,f,0,0,0.0);AB1(a.jw,b,new Bg);MW(b,C(272));}
function APH(a,b,c){var d,e,f,g,h,i,j,k;d=Bt();e=Cl(b);f=new K;M(f);H(H(f,C(273)),e);Bk(d,L(f));d=Bt();f=new K;M(f);EG(H(f,C(274)),c);Bk(d,L(f));g=Cg(30.0,c);h=Cg(10.0,c);i=0;while(true){j=a.iX.data;if(i>=j.length)break;k=1+i|0;j[i]=SX(Bc(h,k)+Bc(g,i)|0,g,g,g);Sm(a,a.iX.data[i]);i=k;}X(a.ht.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.ei;X(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);X(a.lS.u,(b.a/2|0)+10|0,50);Co(a.kb,b);}
function WU(a,b){var c,d,e,f,g;c=Bt();d=!b.jO?C(275):C(276);e=b.ee;f=b.bm;g=b.zS;b=new K;M(b);Jt(H(U(H(H(H(b,d),e),C(277)),f),C(278)),g);Bk(c,L(b));return 0;}
function AA8(){var a=this;Cw.call(a);a.EN=null;a.k_=null;a.iZ=null;a.h9=null;a.dl=null;a.dT=null;a.m8=null;a.mW=null;a.jB=0;a.iH=null;a.iG=null;}
function Rb(a,b,c){FO(b,c);FW(b);}
function AD2(a,b,c,d,e,f){var g,h;g=D5(f,c,120,b);Cn(g,e);e=!b?C(279):C(280);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);B0(g,d,0.0,20.0);B0(g,d,0.25,40.0);B0(g,d,0.5,60.0);B0(g,d,0.75,80.0);B0(g,d,1.0,100.0);h=CW(f);CM(h,g);Ez(g);return h;}
function AQ8(a,b){return 0;}
function AVS(a){var b,c,d,e,f,g,h,i;b=a.x.P;EI(b,a.k_);B$(b,0);c=a.iZ;d=c.b;e=a.h9;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.dl.bl);Bs(b,g,0,a.h9,a.dT.bl);Bs(b,0,f,a.h9,a.dl.X);Bs(b,g,f,a.h9,a.dT.X);c=a.dl;e=c.u;h=e.b;i=((a.iZ.b*3|0)/4|0)-(c.t.b/2|0)|0;Iy(c,b,e.a,h,a.iH,0,1);c=a.dl;Iy(c,b,c.u.a,i,a.iH,1,1);c=a.dT;Iy(c,b,c.u.a,h,a.iG,0,0);e=a.dT;Iy(e,b,e.u.a,i,a.iG,1,0);MW(b,C(272));}
function AW0(a,b,c){var d,e;Co(a.iZ,b);X(a.h9,b.a/2|0,b.b/2|0);d=a.iZ.b/4|0;e=a.dl;d=d-(e.t.b/2|0)|0;X(e.u,(b.a/4|0)-(a.jB/2|0)|0,d);X(a.dT.u,((b.a*3|0)/4|0)-(a.jB/2|0)|0,d);}
function Xp(){var a=this;CH.call(a);a.yL=null;a.fe=null;a.dE=null;a.ou=null;}
function APa(a,b,c){var d;d=Fi(a.r,a.ou);JC(a.fe,d,a.r);JC(a.dE,d,a.r);}
function RF(b){return I2(b,UF());}
function I2(b,c){var d;d=Lx();Of(d,Nm(b,J8(c,25)),!b?null:I2(b-1|0,c));Of(d,Nm(b,J8(c,20)),!b?null:I2(b-1|0,c));Of(d,Nm(b,J8(c,15)),!b?null:I2(b-1|0,c));Of(d,Nm(b,J8(c,10)),!b?null:I2(b-1|0,c));return GZ(d);}
function Nm(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function Of(b,c,d){if(d!==null)FF(b,c,d);else{d=new U8;d.r9=c;D2(b,c,d);}}
function AN8(a,b,c){var d,e;IC(a,b,c);b=a.r.bO;d=EB(a.fe);e=EB(a.dE);Ne(a.fe,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Ne(a.dE,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AWE(a){var b,c,d,e,f,g,h,i;HA(a);b=a.x.P;B$(b,1);c=a.yL;d=a.r;e=d.bO;X(c.nM,e.a,Cg(2.0,d.cf));X(c.od,Cg(2.0,d.cf),e.b);FI();f=A7t;g=d.bH;h=e.b/2|0;i=c.nM;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bH;h=e.a/2|0;c=c.od;Bs(g,h-(c.a/2|0)|0,0,c,f);L_(a.fe,a.r);L_(a.dE,a.r);JM(a.M);B$(b,0);}
function APK(a,b){var c,d;c=NP(a.fe,b.j,a.r.cU);d=NP(a.dE,b.j,a.r.cU);return !c&&!d?0:1;}
function AMl(a,b,c,d){var e,f;e=N_(a.fe,b.j,c,d);f=N_(a.dE,b.j,c,d);return !e&&!f?0:1;}
function AAB(){CH.call(this);this.kB=null;}
function ANm(a,b,c){if(b===0.0)Y4(a);}
function Y4(a){var b,c,d,e,f,g,h,i;b=a.kB;if(b!==null){It(a.M,b);JV(b);}b=(ID()).c5;c=A5m(a.r,new UU);d=Du(C(155),14.0);e=AO$();f=0;while(f<300){g=Dl(f);h=new SA;h.A_=C(281);h.A8=g;h.A9=C(282);V8(e,C(281),g,C(282),h);f=f+1|0;}W3(c,AC4(e));V3(c,b,d);g=AEl(a.r);i=GH(c,a.r);Jf(i,b.mZ,b.oL);K9(g,i);FY(g,b);DK(g,C(145));a.kB=g;EH(a.M,g);Qz(a);}
function AMA(a,b,c){IC(a,b,c);Qz(a);}
function Qz(a){var b,c,d;b=a.r.bO;Et(a.kB,BF((b.a*2|0)/10|0,(b.b*4|0)/10|0),BF((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kB;b=AHX(c.W.k);d=new K;M(d);H(H(d,C(283)),b);DK(c,L(d));}
function WR(){var a=this;HM.call(a);a.mi=null;a.h0=null;a.gg=null;a.kd=null;a.r4=null;a.j$=null;a.ib=null;a.hM=null;a.lH=0;a.hZ=0;}
function PD(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.h0.q>0){d=DQ();e=a.h0;f=d*(e.q-1|0)|0;e=EM(e,f);EM(a.gg,f);f=a.hZ;g=e.t;a.hZ=f-Bc(g.a,g.b)|0;IZ(a.mi,e.dw);}c=c+1|0;}}
function LY(a,b){var c,d,e,f,g,h,i,j;c=Ki(a.r);Cn(c,a.kd);d=0;while(d<b){e=J8(a.j$,1+(DQ()*19.0|0)|0);f=KN();g=f.dw;h=a.mi;BJ(c);i=new Q7;i.uj=c;BR(g,Ks(h,e,i));(U7(DQ(),1.0,1.0,f.bl)).bC=0.5;h=f.u;g=f.dw;X(h,g.bn|0,g.bs|0);h=f.t;g=f.dw;X(h,g.bf|0,g.bC|0);BB(a.gg,e);BB(a.h0,f);j=a.hZ;h=f.t;a.hZ=j+Bc(h.a,h.b)|0;d=d+1|0;}a.hM=MJ(a.mi);}
function A0I(a){var b,c,d,e,f,g,h,i;HA(a);b=a.x.P;B$(b,1);c=a.r.bH;if(a.gg.q){d=a.hM;d=HI(c,d.a,d.b);Cn(d,a.kd);e=a.kd.em;Bs(c,0,0,a.hM,a.r4);f=0;while(f<a.gg.q){g=BG(a.h0,f);h=BG(a.gg,f);g=g.dw;B0(d,h,g.bn,g.bs+e);f=f+1|0;}g=a.ib;if(!(g!==null&&BQ(g)==a.hM.a&&CO(a.ib)==a.hM.b))a.ib=BV(a.ib,CW(c));CM(a.ib,d);Ez(d);i=0;while(i<a.gg.q){d=BG(a.h0,i);HC(d,CD(0));EF(d,c,a.ib,0,0);i=i+1|0;}}B$(b,0);}
function ALF(a,b){var c,d;if(a.lH){c=a.hM;d=Be(Bc(c.a,c.b),2211840);if(a.hZ/d<=0.7)LY(a,D6(a.j$,5));else PD(a,D6(a.j$,5));}return a.lH;}
function SG(){var a=this;Cw.call(a);a.eB=null;a.h2=null;a.iY=null;a.oQ=null;a.e9=0;a.uL=0;a.r5=null;a.mw=0;a.xn=0;a.xQ=null;a.Ad=null;}
function ALs(a){var b,c;b=a.e9;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));EI(a.eB,a.r5);Km(a.iY,a.e9,0,Hv(a),5000,a.oQ.a,20);B$(a.eB,1);Ve(a.iY,a.eB);B$(a.eB,0);b=a.e9;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));ABC(a.h2,a.e9/a.mw|0,a.eB);AAT(a.h2,a.e9,Hv(a),a.Ad,a.eB);}
function AUz(a,b,c){a.oQ=b;Sf(a.h2,BF(0,0),50,Hv(a),c);SM(a.h2,a.eB,0,Hv(a));}
function Ux(a){return 5000-Hv(a)|0;}
function Hv(a){return Be(a.uL,a.oQ.b);}
function Dr(){var a=this;Cw.call(a);a.pT=null;a.gW=null;a.qK=0.0;}
function A7O(a){var b=new Dr();HO(b,a);return b;}
function HO(a,b){El(a,b);a.pT=AIP(0,0,64);a.gW=new Bg;Gi(b.bw,JO(BE(a)));}
function Z6(a){EI(a.x.P,a.pT);}
function SC(a,b,c){Co(a.gW,b);a.qK=c;}
var Q_=G(Dr);
var W8=G(CH);
function Hf(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.x.bw;f=new Q6;f.Dd=a;f.tX=b;g=Q(B,1);h=g.data;i=BP(1);i.data[0]=b;h[0]=i;CV(e,f,C(285),g);d=d+1|0;}}
function ADm(a,b){var c,d,e,f,g,h;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((K3(b,1)).iK));d=Bt();e=Cl(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BY(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,C(37));U(f,c[g]);g=g+1|0;}BY(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(287)),e),C(288)),f);Bk(d,L(h));}
function Ws(){var a=this;Dr.call(a);a.e7=null;a.gD=null;a.nD=null;a.AU=null;a.qg=null;}
function AON(a,b){b=b/5.0;Iw(b-(b|0),1.0,1.0,1.0,a.gD.X);return 0;}
function AWt(a){Z6(a);EF(a.e7,a.x.P,a.AU,0,0);VJ(a.gD,a.x.P,a.nD,0,0,0.0);MW(a.x.P,C(272));}
function A2h(a,b,c){var d,e,f;SC(a,b,c);X(a.gD.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.e7;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function SE(){var a=this;Dr.call(a);a.gZ=null;a.q1=null;a.mt=null;a.ku=null;a.jS=null;}
function A2R(a){var b,c,d,e,f,g;Z6(a);b=a.x.P;c=a.ku;LN(b,c.a,c.b,a.jS);b=a.gZ;c=a.q1;d=a.gW;e=a.x.P;f=0;while(true){g=0;while(true){EF(b,e,c,g,f);g=g+BQ(c)|0;if(g>=d.a)break;}f=f+CO(c)|0;if(f>=d.b)break;}Ga(a.x.P);}
function AOy(a,b,c){SC(a,b,c);X(a.jS,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AAq(){var a=this;Cw.call(a);a.eM=null;a.oC=null;a.gH=null;a.cd=null;a.fk=0;a.iD=null;a.fF=0;a.DM=20;a.Fq=11;a.D_=220;a.l$=null;a.EY=5000;a.io=0;a.gR=null;}
function ATt(a){var b,c,d,e,f,g,h;b=a.iD;c=a.fF;d=a.l$;Km(b,c,0,d.b,5000,d.a,20);B$(a.eM,1);Ve(a.iD,a.eM);if(a.cd===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B0(a.oC,Dl(e),0.0,c);}b=CW(a.eM);a.cd=b;CM(b,a.oC);}if(a.fF<=a.fk)while(true){f=a.fk;if(f<=a.fF)break;a.fk=f-20|0;b=a.gH;g=a.io-1|0;a.io=g;B0(b,Dl(g),0.0,20.0);JJ(a.cd,a.gH,0,a.fk%220|0);EQ(a.gH);}else while(a.fk<(a.fF-20|0)){b=a.gH;g=a.io+1|0;a.io=g;B0(b,Dl((g+11|0)-1|0),0.0,20.0);JJ(a.cd,a.gH,0,a.fk%220|0);EQ(a.gH);a.fk=a.fk+20|0;}b=H$(0,0,BQ(a.cd),CO(a.cd));Iz(b,
0,0,BQ(a.cd),CO(a.cd));HC(b,a.gR.data[0]);Fh(b,a.gR.data[1]);EF(b,a.eM,a.cd,400,0);g=a.fF%220|0;f=Be(CO(a.cd)-g|0,200);d=H$(0,0,BQ(a.cd),f);Iz(d,0,g,BQ(a.cd),f);HC(d,a.gR.data[0]);Fh(d,a.gR.data[1]);EF(d,a.eM,a.cd,0,0);h=H$(0,f,BQ(a.cd),(CO(a.cd)-f|0)-20|0);Iz(h,0,0,BQ(a.cd),(CO(a.cd)-f|0)-20|0);HC(h,a.gR.data[1]);Fh(h,a.gR.data[0]);EF(h,a.eM,a.cd,0,0);}
function AWG(a,b,c){Co(a.l$,b);}
function A0n(a,b){return 0;}
function ZX(a){return 5000-a.l$.b|0;}
function Kn(){Dr.call(this);this.eb=0;}
function ZE(a){var b,c;b=a.x.bw;c=new T5;c.xM=a;RB(b,c,Wu(a));}
function Qy(a){var b,c,d,e;b=a.eb+1|0;a.eb=b;c=JO(F(Kn));d=new K;M(d);H(H(U(H(d,C(289)),b),C(29)),c);e=L(d);c=a.x.bw;d=new VA;d.xX=e;Tk(c,e,d,Wu(a));}
function Wu(a){var b;b=new YZ;b.BP=a;return b;}
function APx(a,b,c,d){a:{switch(c){case 0:break;case 2:Qy(a);break a;default:break a;}ZE(a);}return 1;}
function Sp(){var a=this;Dr.call(a);a.ud=null;a.gl=null;a.lz=null;a.pe=null;a.vS=null;}
function AT8(a){var b,c,d,e,f,g,h,i;if(a.lz===null){b=a.x.P;c=a.vS;d=Iq(b,c.h$,Cg(c.gY,a.qK));Cn(b.ch,d);e=CZ(Eo(b.ch,C(290)));f=Bt();g=d.oV;c=new K;M(c);EG(H(c,C(291)),g);Bk(f,L(c));h=Nc(d,1.1799999475479126);c=Bt();i=new K;M(i);U(H(U(H(i,C(292)),e),C(201)),h);Bk(c,L(i));c=HI(b,e,h);a.pe=c;Cn(c,d);B0(a.pe,C(290),0.0,d.em);b=CW(b);a.lz=b;CM(b,a.pe);FO(a.gl,a.lz);FW(a.gl);b=a.gl.bl;FI();BR(b,A65);BR(a.gl.X,A7P);}b=a.x.P;EI(b,a.ud);c=a.gl;i=c.u;f=a.gW;e=f.a;c=c.t;X(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EF(a.gl,b,a.lz,
0,0);}
function G6(){var a=this;Cw.call(a);a.vf=null;a.cl=null;a.d$=null;a.dm=null;a.fp=null;a.eL=null;}
function OE(a,b){var c,d;El(a,b);a.vf=CD(20);a.cl=Sl();a.d$=new Bg;a.dm=new Bg;a.fp=new Bg;a.eL=new Bg;c=b.o.bG;d=new AB9;d.Dy=a;Ba(c,d);Ba(b.o.bS,a);b=a.cl.bl;FI();BR(b,A65);BR(a.cl.X,A7P);}
function AFd(a){var b,c,d;b=a.x.P;EI(b,a.vf);c=a.cl;d=c.u;Bs(b,d.a,d.b,c.t,c.bl);B$(b,1);c=a.cl;d=c.u;AEa(b,d.a,d.b,c.t,a.d$,a.dm,a.fp,a.eL,c.X);B$(b,0);}
function AYw(a,b){return 0;}
var S9=G(G6);
function A0a(a,b,c){var d,e,f;d=a.cl;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);X(a.d$,0,0);X(a.dm,Be(b.a,b.b),Be(b.a,b.b));b=a.fp;d=a.d$;X(b,d.a,d.b+20|0);b=a.eL;d=a.dm;X(b,d.a,d.b+40|0);}
function A06(a,b){var c,d,e;Co(a.d$,b.j);b=a.dm;c=a.cl;d=c.u;e=d.a;c=c.t;X(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fp;c=a.d$;X(b,c.a,c.b+20|0);b=a.eL;c=a.dm;X(b,c.a,c.b+40|0);return 0;}
function S8(){var a=this;G6.call(a);a.f1=null;a.gm=null;}
function A2z(a,b){var c;c=a.dm;b=b.j;c.b=b.b-50|0;a.eL.b=b.b+100|0;return 1;}
function ANj(a){var b,c,d,e,f,g,h;b=Bd(a.d$.a,a.fp.a);c=Be(a.dm.a,a.eL.a);d=Be(a.d$.b,a.dm.b)-50|0;e=Bd(a.fp.b,a.eL.b)+50|0;Hi(a.cl,b,d,c-b|0,e-d|0);AFd(a);f=a.cl.u.a-10|0;AAs(a,a.x.P,10,f,a.d$,a.fp);g=a.cl;h=g.u.a+g.t.a|0;AAs(a,a.x.P,h,f,a.dm,a.eL);}
function AAs(a,b,c,d,e,f){var g;X(a.f1,c,a.cl.u.b);X(a.gm,d,e.b-a.cl.u.b|0);g=a.f1;Bs(b,g.a,g.b,a.gm,a.cl.bl);X(a.f1,c,e.b);X(a.gm,d,f.b-e.b|0);e=a.f1;Bs(b,e.a,e.b,a.gm,a.cl.X);X(a.f1,c,f.b);e=a.gm;g=a.cl;X(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.f1;Bs(b,e.a,e.b,a.gm,a.cl.bl);}
function AL7(a,b,c){}
function V0(){var a=this;CH.call(a);a.Ch=3;a.we=null;a.j3=null;a.qf=0;}
function AO_(a,b,c){var d,e;if(b===0.0){EH(a.M,YN(a));d=SP(a,0.5,0,C(293));e=a.r.bO;Et(EH(a.M,d),BF(e.a/10|0,e.b/10|0),BF((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function YN(a){var b,c,d,e,f,g;b=a.qf+1|0;a.qf=b;c=new K;M(c);U(H(c,C(294)),b);c=SP(a,1.0,1,L(c));d=a.r.bO;e=d.a/10|0;f=e+D6(a.j3,e)|0;e=d.b/20|0;e=e+D6(a.j3,e)|0;b=d.a;b=((b*7|0)/10|0)+D6(a.j3,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+D6(a.j3,g/10|0)|0;Et(c,BF(f,e),BF(b,g));return c;}
function SP(a,b,c,d){var e,f,g;e=AEl(a.r);if(d===null)f=new ADw;else{f=new ADy;f.us=e;f.ut=d;}g=new Qd;LJ(g);g.me=new B2;g.pF=new Bg;g.yl=f;g.r6=b;if(c){d=GH(g,a.r);Jf(d,A7Q,A7R);g=d;}K9(e,g);FY(e,Ff());AAl(e,a.we,3.0);d=new ADx;d.qI=a;d.qJ=e;S_(e,d);return e;}
function Eq(){CH.call(this);this.hj=null;}
function A4B(a){var b=new Eq();J$(b,a);return b;}
function J$(a,b){F9(a,b);Ba(a.r.dR,a);BR(a.dP,CD(43));}
function AWd(a){return AUn();}
function APS(a){return 1;}
function NZ(a,b){FY(a.hj,b);}
function AIE(a,b){var c,d,e;c=a.r.bO;d=!a.pl()?0:ACw(b);e=c.b-d|0;Et(b,BF(c.a/20|0,d+(e/20|0)|0),BF((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A0R(a,b,c){if(b===0.0){a.hj=A2k(a.r,a.jm());NZ(a,Ff());if(a.pl())DK(a.hj,M5(BE(a)));EH(a.M,a.hj);a.kE(a.hj);}}
function Qv(){var a=this;Eq.call(a);a.l_=null;a.eJ=null;a.Ev=null;}
function AWa(a,b){var c;c=a.eJ;return c!==null&&I0(c,b)?1:0;}
function AMD(a){var b;b=If(a.l_);a.eJ=b;a.Ev=OZ(b,a.x.o);AKu(a.eJ);MV(a.r,a.eJ);return a.eJ;}
function AUX(a){return 0;}
function A2B(a,b){AIE(a,b);Hs(a);}
function ASz(a,b){BJ(b);Ir(a.l_,b);Ft(a.eJ,b);NZ(a,b.c5);}
function ARW(a,b){J9(a.M,b);}
function WV(){B.call(this);this.wB=null;}
function A0F(a,b){DY(a.wB,null);return 0;}
function PF(){var a=this;Eq.call(a);a.ve=null;a.fM=null;}
function AIu(){var b;b=I(L3,[Nj(1,3,4,5,1),Nj(5,6,10,2,2),Nj(12,2,13,3,3),Nj(15,3,17,2,4)]);return A46(Q(Gr,0),Q(Gr,0),b);}
function AWW(a){var b,c,d,e;b=A0_(a.r);a.fM=b;ACT(b,a.ve);c=a.fM.es;BJ(c);d=new AA4;d.rc=c;b=PE(C(295),4,d);d=a.fM.eq;BJ(d);e=new AA5;e.tf=d;c=PE(C(295),4,e);ES(a.fM.es,b);ES(a.fM.eq,c);AAR(a.fM,AIu());return a.fM;}
function YO(){var a=this;Eq.call(a);a.lw=null;a.vW=null;}
function AY7(a){var b,c,d,e;b=TF(a.r);a.lw=b;BJ(b);c=new Tb;c.s4=b;b=PE(C(295),4,c);d=Bt();e=OH(b);c=new K;M(c);U(H(c,C(296)),e);Bk(d,L(c));ES(a.lw,b);J7(a.lw,a.vW);b=a.lw;return JD(b,GH(b,a.r));}
function A0i(a,b){var c;c=a.r.bO;Et(b,BF(c.a/30|0,c.b/10|0),BF((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var KY=G(0);
function AMq(a,b,c){Lu(b);}
function AKP(a,b){var c;c=new RG;c.uh=a;c.ui=b;return c;}
function RK(){var a=this;Eq.call(a);a.c9=null;a.pr=null;a.mI=null;a.jp=null;}
function AQU(a){var b,c,d,e;b=new QV;c=a.M;E2(b);b.gn=KU(c);d=TF(c.ck);b.gp=d;b.kL=GH(d,c.ck);e=new PC;E2(e);c=new B2;AOW();AJ_(c,A68);e.AZ=c;b.oE=e;d=If(b.gn);b.fW=d;b.Av=a;Mw(b,I(CB,[b.kL,b.oE,d]));b.r_=GD(1);a.c9=b;b=AKm(C(297),0);IT(b);c=new RP;c.AW=a;b.er=c;ES(a.c9.gp,b);return a.c9;}
function RQ(a){var b,c;b=a.x.bw;c=new ACa;c.vt=a;Ja(b,c);}
function AQN(a,b){AJI(b);Hs(a);}
function AJI(b){var c,d,e,f,g,h,i;c=b.bd.bO;d=ACw(b);e=c.b-d|0;f=Cy(b.bd,5.0);g=BF(f,f+d|0);h=new Bg;i=c.a;d=f*2|0;QI(h,i-d|0,e-d|0);Et(b,g,h);}
function AYS(a,b){var c;NZ(a,b.c5);c=a.c9;J7(c.gp,b);JD(c.gp,c.kL);Ir(c.gn,b);Ft(c.fW,b);}
function ASj(a,b){var c,d,e;c=b.hH;a.pr=c;d=Cq(a.mI,c);if(d!==null)ADF(a,d);else{b=Bt();d=Cl(c);e=new K;M(e);H(H(e,C(298)),d);Bk(b,L(e));if(Cq(a.jp,c)!==null){b=Cl(c);c=new K;M(c);H(H(c,C(299)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Ep(a.jp,c,FR(c));b=new ABx;b.tp=a;b.to=c;d=new ABw;d.xu=a;d.xw=c;UQ(c,b,d);}}}
function ADF(a,b){H0(a.c9.fW,b);b=a.c9;FL(b.gn.bY.ck,b.fW);}
function ALM(a,b){ADt(b);if(Ji(b)>0)EK(a.c9.gp);}
function AOg(a,b){if(Ji(b)>0)EK(a.c9.gp);Lh(b);}
function AR7(a,b,c){if(AHO(c)!==C(176))QO(b);else Lu(b);}
function ACu(){var a=this;Cw.call(a);a.s5=null;a.mN=null;a.fi=null;a.oP=null;a.mM=0.0;a.ha=null;a.wj=null;a.tH=null;a.ye=null;a.yZ=null;a.sf=null;a.qq=null;a.Cd=null;a.wK=null;a.lE=null;}
var A7S=0;function A4e(a){var b=new ACu();ATX(b,a);return b;}
function ATX(a,b){var c,d,e;El(a,b);a.s5=new B2;a.mN=ADJ(1.0,0.0,0.0,1.0);a.fi=Sl();a.oP=new Bg;a.mM=3.1415927410125732;c=AJO();a.ha=c;a.wj=HG(c,1.25);a.tH=HG(a.ha,1.3333333730697632);a.ye=HG(a.ha,1.5);a.yZ=HG(a.ha,1.6666666269302368);a.sf=HG(a.ha,2.0);a.qq=ADJ(a.mM/24.0,15.0,3.0,0.5);c=ADJ(a.mM/12.0,25.0,3.0,0.5);a.Cd=c;a.wK=DX([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lE=I(B2,[a.ha,a.wj,a.tH,a.ye,a.yZ,a.sf,a.qq,c]);c=b.o.bG;d=new QR;d.Fo=a;Ba(c,d);Ba(b.o.bS,a);b=a.fi.X;FI();BR(b,A65);Hi(a.fi,0,0,600,60);e
=M4(0.5,0.375);Jj(0.375,e);Jj(0.375,Jj(3.0,M4(e,3.0)));HG(AJO(),3.0);}
function A2t(a,b,c){var d,e,f;Co(a.oP,b);d=a.fi;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HG(b,c){var d;d=new B2;UJ(b,c,d);return d;}
function AJO(){var b;b=new B2;Ly(b);return b;}
function AXz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.x.P;EI(b,a.s5);B$(b,1);c=a.fi;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lE.data;if(f>=g.length)break;h=a.wK.data[f];c=g[f];i=WX(c);j=a.fi;k=j.u;l=k.a;m=k.b;L8(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mN);f=f+1|0;}if(A7S){c=A37(1,2);n=0;while(n<1000){h=D6(c,a.lE.data.length);l=D6(c,a.oP.b-a.fi.t.b|0);j=a.lE.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.fi;L8(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mN);n=n+1|0;}}B$(b,0);}
function ASk(a,b){return A7S;}
var ON=G(Kt);
function AVV(a){return GD(1);}
function TD(){CH.call(this);this.j_=null;}
function Y7(a){var b,c,d,e;b=new Y$;c=a.j_;ACN(b,a.M,c);d=A0_(b.dk.ck);b.eS=d;ACT(d,c);c=AKm(C(300),0);d=AKm(C(301),0);IT(c);IT(d);e=new Sz;e.sR=b;c.er=e;e=new Sy;e.vc=b;d.er=e;ES(b.eS.es,c);ES(b.eS.eq,d);EH(b.dk,WH(b,b.eS));}
function ATU(a,b,c){if(b===0.0)Y7(a);}
function J_(){var a=this;B.call(a);a.BW=null;a.ef=null;a.uB=null;a.Db=null;a.sQ=null;a.kY=null;a.ry=null;a.wp=null;a.lK=null;a.lF=null;a.gq=null;}
function A7T(a,b,c,d,e,f,g,h,i,j,k){var l=new J_();Mr(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mr(a,b,c,d,e,f,g,h,i,j,k,l){a.BW=b;a.ef=c;a.uB=d;a.Db=e;a.sQ=f;a.kY=g;a.ry=h;a.wp=i;a.lK=j;a.lF=k;a.gq=l;}
function AFH(){B.call(this);this.E8=null;}
function AJy(a){var b=new AFH();AUL(b,a);return b;}
function AUL(a,b){a.E8=b;}
var AEG=G(0);
function AH5(){var a=this;B.call(a);a.oX=null;a.k6=null;a.xR=null;a.qv=null;}
function AKe(a,b,c,d){var e=new AH5();A2E(e,a,b,c,d);return e;}
function A2E(a,b,c,d,e){a.oX=b;a.k6=c;a.xR=d;a.qv=e;}
var AF6=G(0);
function Ff(){var b,c,d;b=new IY;c=new I6;AYP();d=A7U;Oz(c,d,A7V,A7W,A7X,A7Y,d);LO(b,c,AHr(),AHA(S(C(302)),S(C(265)),S(C(266))),AHr(),AHY(1,0.125),A7Z,A70);return b;}
function AHr(){var b,c;b=new Kl;c=S(C(303));AYP();K6(b,c,A71,A72);return b;}
function AG5(){var b,c;b=new Kl;c=S(C(266));AUU();K6(b,c,A73,A74);return b;}
function AKX(){var b,c;b=new Kl;AGX();c=A75;AU7();K6(b,c,A76,A77);return b;}
function AHL(){var a=this;B.call(a);a.zu=null;a.wA=null;a.uN=null;a.qH=null;}
function AEh(a,b,c,d){var e=new AHL();AVl(e,a,b,c,d);return e;}
function AVl(a,b,c,d,e){a.zu=b;a.wA=c;a.uN=d;a.qH=e;}
function AD8(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d2.wA;break a;case 3:if(c!=3){b=b.d2.qH;break a;}b=b.d2.uN;break a;default:b=b.br.ef;break a;}b=b.d2.zu;}return b;}
function JY(a,b,c){return AD8(a,b,0,c);}
function Mx(){var a=this;B.call(a);a.lZ=null;a.kn=null;}
function Wb(a,b){var c;c=a.kn;a.kn=b;return c;}
function KE(){var a=this;Mx.call(a);a.bU=null;a.b6=null;a.gL=0;a.gU=0;}
function M1(a){var b;b=Lp(a);if(b==2){if(Lp(a.b6)<0)a.b6=Pc(a.b6);return Qg(a);}if(b!=(-2))return a;if(Lp(a.bU)>0)a.bU=Qg(a.bU);return Pc(a);}
function Lp(a){var b,c;b=a.b6;c=b===null?0:b.gL;b=a.bU;return c-(b===null?0:b.gL)|0;}
function Pc(a){var b;b=a.bU;a.bU=b.b6;b.b6=a;EZ(a);EZ(b);return b;}
function Qg(a){var b;b=a.b6;a.b6=b.bU;b.bU=a;EZ(a);EZ(b);return b;}
function EZ(a){var b,c,d;b=a.b6;c=b===null?0:b.gL;b=a.bU;d=b===null?0:b.gL;a.gL=Bd(c,d)+1|0;a.gU=1;b=a.bU;if(b!==null)a.gU=1+b.gU|0;b=a.b6;if(b!==null)a.gU=a.gU+b.gU|0;}
var AK0=G();
function AMy(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new X$;c=c.buffer;d.gi=c;d.qb=new $rt_globals.Int8Array(c);d.mC=new $rt_globals.Uint16Array(c);d.Am=new $rt_globals.Int32Array(c);d.sp=new $rt_globals.Float32Array(c);d.sB=new $rt_globals.Float64Array(c);e=d.gi.byteLength;c=new K;M(c);U(H(c,C(304)),e);CU(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(305)),e);CU(L(c));f=b.callToCpp2();c=new K;M(c);EG(H(c,C(306)),f);CU(L(c));c=O0(d,b.getC8String());g=new K;M(g);H(H(g,C(307)),c);CU(L(g));c
=Wz(d,b.getC16String());g=new K;M(g);H(H(g,C(308)),c);CU(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gi,h,8));c=AGr(i);g=new K;M(g);H(H(g,C(309)),c);CU(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gi,h,8));c=ASr(j);g=new K;M(g);H(H(g,C(310)),c);CU(L(g));k=AI9(d,b.getCDoubleArray8(),8);l=AUe(k);c=new K;M(c);H(H(c,C(311)),l);CU(Ed(c));l=AT_(b.getC8String(),C(312),d);c=L4();H(H(c,C(313)),l);CU(Ed(c));l=AQj(b.getC16String(),C(314),
d);c=L4();H(H(c,C(315)),l);CU(Ed(c));c=AZO(i,d,b.getCIntArray8(),DX([11,22,33,44,55,66,77,88]));g=L4();H(H(g,C(316)),c);CU(Ed(g));c=ASC(j,d,b.getCFloatArray8(),100,DX([111,222,333,444,555,666,777,888]));g=L4();H(H(g,C(317)),c);CU(Ed(g));b=A05(k,d,b.getCDoubleArray8(),1000,DX([1111,2222,3333,4444,5555,6666,7777,8888]));c=L4();H(H(c,C(318)),b);CU(Ed(c));}
function ASC(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(CZ(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sp[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function A05(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(GG(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sB[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function AZO(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(319);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Am[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(320);}return C(321);}
function AT_(b,c,d){var e,f,g,h;e=O0(d,b);if(!Bj(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.qb[h])return C(323);f=f+1|0;}return C(320);}
function AQj(b,c,d){var e,f,g,h;e=Wz(d,b);if(!Bj(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mC[h>>>1|0]&65535))return C(323);f=f+1|0;}return C(320);}
function CU(b){X8(C(2),b);}
function APq(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Yt(){B.call(this);this.rS=null;}
function AVF(a,b){return AI$(a.rS,b);}
function Yr(){B.call(this);this.Bs=null;}
function AW9(a,b){AJm(a.Bs,b);}
function Ys(){B.call(this);this.x2=null;}
function ASU(a,b){b=b;return AED(a.x2,b);}
function AHH(){Kk.call(this);this.dw=null;}
function KN(){var a=new AHH();A2b(a);return a;}
function H$(a,b,c,d){var e=new AHH();AX4(e,a,b,c,d);return e;}
function A2b(a){AB3(a);a.dw=new B2;}
function AX4(a,b,c,d,e){AB3(a);a.dw=new B2;Hi(a,b,c,d,e);}
function FW(a){var b,c;b=a.t;c=a.dw;X(b,c.bf-c.bn|0,c.bC-c.bs|0);}
function FO(a,b){Iz(a,0,0,BQ(b),CO(b));}
function Iz(a,b,c,d,e){Cr(a.dw,b,c,d,e);}
function EF(a,b,c,d,e){var f;f=a.u;DI(b,f.a+d|0,f.b+e|0,a.t,a.dw,c,a.X,a.bl,0);}
function SK(a,b,c,d){var e;e=a.u;DI(b,e.a,e.b,a.t,a.dw,c,a.X,a.bl,d);}
function Iy(a,b,c,d,e,f,g){DI(b,c,d,a.t,a.dw,e,!f?a.X:a.bl,!f?a.bl:a.X,g);}
function HC(a,b){BR(a.X,b);}
function Fh(a,b){BR(a.bl,b);}
function TE(){B.call(this);this.fx=null;}
function AVT(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fx.ht;f=e.t;d=d-f.a|0;g=c.b-f.b|0;X(e.u,d,g);c=a.fx;e=c.x.bw;b=b.j;d=0;a:{while(true){h=c.iX.data;if(d>=h.length)break;if(Fb(h[d],b)){b=c.qt.data[d];break a;}d=d+1|0;}b=null;}ZH(e,b);return 1;}
function ALA(a,b,c,d){if(!c&&d==2){b=a.fx;Sm(b,b.ei);}return 1;}
function AVM(a,b,c){var d,e;d=Bt();e=new K;M(e);U(H(e,C(324)),c);Bk(d,L(e));if(c)return null;d=b.j;e=!Fb(a.fx.ei,d)?null:d;TX(a.fx.jw,d.a,d.b);b=a.fx;Yz(b.jw,MS(b.x.bw));if(e===null)b=A7b;else{b=new ACe;b.sL=a;b.sM=e;}return b;}
function AVd(a,b,c){var d;b=Bt();d=new K;M(d);U(H(d,C(325)),c);Bk(b,L(d));return 1;}
function YW(){B.call(this);this.B7=null;}
function A1q(a,b){return WU(a.B7,b);}
function YV(){B.call(this);this.sm=null;}
function AZR(a,b){return WU(a.sm,b);}
function YU(){B.call(this);this.Dr=null;}
function AYc(a,b,c){var d,e;Bk(Bt(),C(326));d=!c?C(327):C(54);e=new K;M(e);H(H(H(e,C(328)),d),C(329));ACM(b,L(e));return 1;}
function YT(){B.call(this);this.Ed=null;}
function AUM(a){Bk(Bt(),C(330));}
function YS(){B.call(this);this.EL=null;}
function ARe(a,b){Bk(Bt(),C(331));return 1;}
function YR(){B.call(this);this.AR=null;}
function A1x(a,b,c,d){var e,f,g;b=a.AR;e=( -d|0)/10|0;b=b.ei;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hn(){var a=this;B2.call(a);a.hn=0;a.hq=0;a.ho=0;a.hp=0;}
function CD(a){var b=new Hn();AT2(b,a);return b;}
function Dx(a,b,c){var d=new Hn();AWA(d,a,b,c);return d;}
function S(a){var b=new Hn();A0U(b,a);return b;}
function EX(a,b,c,d){var e=new Hn();Rt(e,a,b,c,d);return e;}
function BZ(a){var b=new Hn();KV(b,a);return b;}
function AT2(a,b){Rt(a,b,b,b,255);}
function AWA(a,b,c,d){Rt(a,b,c,d,255);}
function A0U(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.hn=Ko(P(b,1))*17|0;a.hq=Ko(P(b,2))*17|0;a.ho=Ko(P(b,3))*17|0;a.hp=255;}else{a.hn=LM(P(b,1),P(b,2));a.hq=LM(P(b,3),P(b,4));a.ho=LM(P(b,5),P(b,6));a.hp=J(b)!=9?255:LM(P(b,7),P(b,8));}IE(a.hn,a.hq,a.ho,a.hp,a);return;}}
function Rt(a,b,c,d,e){a.hn=b;a.hq=c;a.ho=d;a.hp=e;IE(b,c,d,e,a);}
function KV(a,b){a.hn=b.hn;a.hq=b.hq;a.ho=b.ho;a.hp=b.hp;BR(a,b);}
function Ko(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LM(b,c){return (16*Ko(b)|0)+Ko(c)|0;}
var AGG=G(0);
function GD(b){return !b?I(BK,[C(155),C(166),C(332)]):I(BK,[C(155),C(166),C(332),C(34)]);}
function Wq(){B.call(this);this.mb=null;}
function ANU(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mb.dl;e=DQ();f=e-0.5+(DQ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DQ()*0.3;h=0.5+DQ()*0.5;Iw(e,g,h,1.0,b.X);Iw(f,g,h,1.0,b.bl);b=a.mb;BR(b.dT.X,b.dl.X);b=a.mb;BR(b.dT.bl,b.dl.bl);}return 1;}
function Wn(){var a=this;B.call(a);a.nM=null;a.od=null;}
function AF7(){var a=this;B.call(a);a.f3=null;a.cp=null;a.gS=null;a.hV=null;a.nT=null;a.cF=null;a.hJ=null;a.c3=0;a.f6=0;a.oa=0;a.kj=0;a.ky=0;a.hP=0;a.kS=null;a.o1=null;a.wH=null;a.nK=null;}
function AJD(){var a=new AF7();ASH(a);return a;}
function ASH(a){a.cp=Sl();a.gS=new Bg;a.hV=new Bg;a.cF=A78;a.kj=(-1);a.ky=1;}
function Nk(a,b){N8(a);a.cF=b;}
function JC(a,b,c){a.f3=b;ACI(a,c);N8(a);}
function JE(a,b){var c;a.nT=b.lx;c=b.o4.pH;BR(a.cp.X,c);c=b.ja.jF;BR(a.cp.bl,c);a.nK=b.o4;}
function MR(a){a.hJ=BV(a.hJ,null);X(a.gS,0,0);a.cF=A78;a.kj=(-1);AA3(a.cp);}
function ACI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Ki(b);d=b.cf;BJ(a.f3);Cn(c,a.f3);e=Nc(a.f3,1.25);f=0;a.c3=Cg(2.0,d);a.f6=Cg(3.0,d);a.oa=Cg(12.0,d);g=0;h=a.cF.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=La(c,l.nz);n=a.oa;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fm;b.a=g;b.b=0;b=l.ew;b.a=n;b.b=e;Cr(l.kg,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gS;b.a=g;b.b=e;b=a.cp.t;n=a.hP;if(!n){m=a.c3;m=(g+m|0)+Bc(m,a.cF.data.length)|0;}else m=(f+(a.c3*2|0)|0)+(a.f6*2|0)|0;b.a=m;if(!n)e=e+(a.c3*2|0)|0;else{n=a.c3;e=(Bc(e+n|0,a.cF.data.length)+n
|0)+(a.f6*2|0)|0;}b.b=e;}
function Ne(a,b,c){var d,e,f,g,h,i,j;X(a.cp.u,b,c);d=a.c3+a.f6|0;e=a.cF.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fm;j.a=b+d|0;j.b=c+h|0;if(!a.hP){if(!i.ew.a)AEr();d=d+(i.ew.a+a.c3|0)|0;}else{if(!i.ew.b)AEr();h=h+(i.ew.b+a.c3|0)|0;}g=g+1|0;}}
function AEr(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EB(a){var b,c;b=a.gS;if(b.a&&b.b)return a.cp.t;c=new Bu;Bm(c,C(333));N(c);}
function N8(a){a.ky=1;}
function L_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bH;if(!a.cF.data.length)return;if(a.hJ===null)a.hJ=CW(c);a:{if(!a.ky){d=a.gS;if(Bc(d.a,d.b))break a;}d=a.gS;if(!Bc(d.a,d.b))ACI(a,b);d=a.gS;e=d.a;f=d.b;if(!Bc(e,f))return;d=D5(c,e,f,b.cA);Cn(d,a.f3);g=Nc(a.f3,0.125);h=a.f3;i=h.em;g=g+i-(i+h.eH)/16.0;j=a.cF.data;e=j.length;f=0;while(f<e){h=j[f];B0(d,h.nz,h.kg.bn+a.oa,g);f=f+1|0;}CM(a.hJ,d);a.ky=0;Ez(d);}if(!K$(a.cp)){d=a.cp;AIU(c,d.t,d.u,d.bl,a.c3,a.hV);d=a.cp;h=d.t;k=d.u;d=d.X;e=a.c3;l=a.hV;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hP){d=a.cp;AJ7(c,d.t,d.u,0,0,Ya(a.nT,b.cf),a.nT.nX,a.hV);}}j=a.cF.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fm;e=h.a;f=h.b;h=d.ew;k=d.kg;l=a.hJ;o=a.nK;DI(c,e,f,h,k,l,o.rV,U4(o,d.k8),b.cA);n=n+1|0;}b:{if(a.hP){j=a.cF.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hV;e=(a.cp.t.a-(a.c3*2|0)|0)-(a.f6*2|0)|0;h=d.ew;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fm;Bs(c,k.a+h.a|0,k.b,b,U4(a.nK,d.k8));}p=p+1|0;}}}}
function NP(a,b,c){var d,e,f,g,h,i;d=Fb(a.cp,b);e=!d?(-1):Ps(a,b);f=a.kj;if(f!=e){if(f>=0){g=a.cF.data[f];g.k8=0;if(a.wH!==null){h=Bt();g=Cl(g);i=new K;M(i);H(H(U(H(i,C(334)),f),C(335)),g);Bk(h,L(i));}}if(e>=0){h=a.cF.data[e];g=a.o1;if(g!==null)g.wN(b,e,h);h.k8=1;}a.kj=e;}return d&&GI(c)?1:0;}
function N_(a,b,c,d){var e,f;e=Ps(a,b);if(e>=0){f=a.cF.data[e];if(!AB6(f))f.mU.f();}return 1;}
function Ps(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cF.data;if(c>=d.length)return (-1);e=d[c];if(Gj(b,e.fm,e.ew))return c;if(a.hP){f=e.fm;g=f.a;e=e.ew;h=e.a;g=g+h|0;i=f.b;f=a.hV;f.a=(a.cp.t.a-(a.c3*2|0)|0)-h|0;f.b=e.b;if(AEM(b,g,i,f))break;}c=c+1|0;}return c;}
function AD5(a){a.hP=1;}
function AIV(){var a=this;B.call(a);a.h$=null;a.gY=0.0;a.j4=0;a.ki=0;}
function Du(a,b){var c=new AIV();ARt(c,a,b);return c;}
function ARt(a,b,c){a.h$=b;a.gY=c;a.j4=400;a.ki=700;}
function A0O(a,b){if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){b=b;return a.gY===b.gY&&a.j4==b.j4&&a.ki==b.ki&&BO(a.h$,b.h$)?1:0;}return 0;}
function ABz(){B.call(this);this.uy=null;}
function AQS(a,b){var c;c=a.uy;if(b.bm==32)MR(c.dE);return 0;}
function ABt(){B.call(this);this.vC=null;}
function ASD(a,b){var c,d,e,f;b=b;c=a.vC;d=Nn(c.r);Gg(d,Ff(),c.ou);b=b.j;e=RF(4);f=new Uw;f.Ds=c;Jm(d,b,e,f);Gm(c.M,d);return 1;}
var ABu=G();
function A2W(a){Bk(Bt(),C(336));}
var ABv=G();
function AMf(a){Bk(Bt(),C(337));}
function BC(){var a=this;B.call(a);a.mU=null;a.kg=null;a.fm=null;a.ew=null;a.nd=null;a.tE=null;a.k8=0;a.nz=null;}
function W6(a,b){var c=new BC();CC(c,a,b);return c;}
function A4Q(a,b,c,d){var e=new BC();AJi(e,a,b,c,d);return e;}
function CC(a,b,c){AJi(a,b,c,null,null);}
function AJi(a,b,c,d,e){a.kg=new B2;a.fm=new Bg;a.ew=new Bg;a.nz=c;a.tE=e;a.mU=b;a.nd=d;}
function AB6(a){return a.nd===null?0:1;}
function Ue(){B.call(this);this.Cx=null;}
function AX8(a,b){return b.jO&&b.bm==32?1:0;}
function Uf(){B.call(this);this.Ba=null;}
function ALZ(a,b){var c,d,e,f,g,h;b=b;c=a.Ba;d=Nn(c.r);Gg(d,Ff(),Du(C(155),25.0));b=b.j;e=Q(BC,1);f=e.data;g=new BC;h=new ADW;h.Br=c;CC(g,h,C(338));f[0]=g;Jm(d,b,CR(e),A79);Gm(c.M,d);return 1;}
function AHo(){var a=this;B.call(a);a.pS=0;a.pU=0;}
function UF(){var a=new AHo();ATo(a);return a;}
function A37(a,b){var c=new AHo();AK6(c,a,b);return c;}
function ATo(a){AK6(a,AKN(GR((AGD()))),GR((AGD()))^(-559038737));}
function AK6(a,b,c){var d;a.pS=b;a.pU=c;d=0;while(d<19){Ny(a);d=d+1|0;}}
function Ny(a){var b,c;b=a.pS;c=a.pU;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pS=c;a.pU=b;return b;}
function AKN(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AKo(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function D6(a,b){return UH(a)*b|0;}
function UH(a){return 5.960464477539063E-8*(Ny(a)&16777215);}
function QU(a,b){var c,d,e;c=AKo(Ny(a));d=ASw( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function O4(){B.call(this);this.x7=null;}
function AQZ(a,b,c){var d;d=a.x7;if(b===0.0)LY(d,100);}
function O3(){B.call(this);this.vO=null;}
function AZs(a,b){var c,d,e;c=a.vO;d=b.bm;if(d==32){c.lH=c.lH?0:1;e=1;}else if(d==13){LY(c,1);e=1;}else if(d!=8)e=0;else{PD(c,1);e=1;}return e;}
var ZB=G(0);
function AH6(b,c){var d;d=new UA;d.xV=b;d.xU=c;return d;}
function AIa(){var a=this;B.call(a);a.hD=null;a.h_=0;a.lR=0;a.hh=0;}
function AIk(a){var b=new AIa();AN4(b,a);return b;}
function AN4(a,b){a.hD=BM();a.hh=0;a.lR=2048;a.h_=b;}
function Ks(a,b,c){var d,e,f,g,h,i;d=c.zs(b);e=a.lR;if(d>e){c=new Bu;f=new K;M(f);BN(U(H(U(H(f,C(339)),d),C(340)),e),41);Bm(c,L(f));N(c);}if(!a.h_){b=new BU;Bm(b,C(341));N(b);}a:{b=new B2;if(d){b:{c=a.hD;if(c.q>0){c=B7(c);g=d;while(true){if(!B_(c))break b;f=Ca(c);if(f.bf>=g)break;}Cr(b,f.bn,f.bs,g,a.h_);f.bn=f.bn+g;h=f.bf-g;f.bf=h;if(h===0.0)AG2(a.hD,f);break a;}}g=a.hh;i=d;Cr(b,0.0,g,i,a.h_);BB(a.hD,ADJ(i,a.hh,a.lR-d|0,a.h_));a.hh=a.hh+a.h_|0;}}return b;}
function IZ(a,b){var c,d,e,f,g,h,i;a:{c=AK4(b);b=a.hD;if(b.q>0){d=B7(b);while(true){if(!B_(d))break a;e=Ca(d);if(e.bs===c.bs){f=e.bn;g=e.bf;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bf=c.bf+g;Zo(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;Zo(d);}}}}}}BB(a.hD,c);}
function MJ(a){return BF(a.lR,a.hh);}
function WB(){var a=this;B.call(a);a.rU=null;a.lL=null;}
function AUZ(a,b,c){if(c)return A7b;return F3(a.lL.iY,b.j,a.rU,1);}
function ALU(a,b,c){return 1;}
function AWQ(a,b){var c;c=a.lL;return F$(c.iY,b.j,c.xQ);}
function ZW(){B.call(this);this.AF=null;}
function AQX(a,b,c,d){var e,f;b=a.AF;e=(Wh(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e9=Be(Bd(0,b.e9+Bc(e,f)|0),Ux(b));return 1;}
function QK(){B.call(this);this.s1=null;}
function AQM(a,b){var c,d,e;c=a.s1;if(b.cN&&b.bm==79){if(!b.bL){b=c.x.bw;d=new W2;d.uV=c;Kc(b,d);}else{b=c.x.bw;d=new W1;d.xs=c;Ja(b,d);}e=1;}else e=0;return e;}
function Rv(){B.call(this);this.x$=null;}
function AT$(a,b){var c,d,e,f,g,h,i;b=b;c=a.x$;d=Nn(c.r);Gg(d,Ff(),Du(C(155),25.0));b=b.j;e=Q(BC,5);f=e.data;g=new BC;h=new TP;h.rD=c;CC(g,h,C(342));f[0]=g;g=new BC;h=new TQ;h.se=c;CC(g,h,C(343));f[1]=g;g=new BC;h=new TR;h.tx=c;CC(g,h,C(344));f[2]=g;h=new BC;i=new TS;i.xF=c;CC(h,i,C(345));f[3]=h;h=new BC;i=new TT;i.x9=c;CC(h,i,C(346));f[4]=h;Jm(d,b,CR(e),A79);Gm(c.M,d);return 1;}
function Ru(){B.call(this);this.Aa=null;}
function A0s(a,b){var c,d,e,f;c=a.Aa;d=c.x.bw;e=new XB;e.wW=c;f=Q(B,1);f.data[0]=b;CV(d,e,C(347),f);}
function ABI(){B.call(this);this.m4=null;}
function AZI(a,b){var c,d,e,f,g,h;c=a.m4;d=c.qg;if(d!==null){e=c.e7.u;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qg=g;}b=b.j;f=b.a;c=c.gD;d=c.t;f=f-d.a|0;h=b.b-d.b|0;X(c.u,f,h);return 1;}
function AT0(a,b,c){var d;if(!c){d=b.j;b=a.m4;if(!Fb(b.e7,d))d=null;b.qg=d;}return A7b;}
var AF_=G();
function AK_(b){var c,d;c=HI(b,250,64);Hx(c,C(268),25.0);J4(c,187,187,187);B0(c,C(348),0.0,24.0);B0(c,C(348),0.25,56.0);d=CW(b);CM(d,c);Ez(c);return d;}
var Di=G(0);
var A7m=null;var A7P=null;var A7n=null;var A65=null;var A7p=null;var A7o=null;var A7r=null;var A7q=null;var A7t=null;var A7s=null;var A7u=null;function FI(){FI=Bn(Di);AUb();}
function AUb(){A7m=CD(187);A7P=S(C(349));A7n=CD(55);A65=CD(43);A7p=Dx(33,66,131);A7o=Dx(60,63,65);A7r=S(C(350));A7q=S(C(351));A7t=EX(85,85,85,128);A7s=EX(43,43,43,0);A7u=S(C(254));}
function Yu(){var a=this;B.call(a);a.qQ=null;a.lY=null;}
function AO2(a,b,c){var d;if(!c){d=F3(a.lY.iD,b.j,a.qQ,1);if(d!==null)return d;}return A7b;}
function AVa(a,b,c){return 1;}
function ANZ(a,b){var c;c=a.lY;return F$(c.iD,b.j,Rn(c.x.bw));}
function VP(){B.call(this);this.rB=null;}
function A1u(a,b,c,d){var e,f;b=a.rB;e=(Wh(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fF=Be(Bd(0,b.fF+Bc(e,f)|0),ZX(b));return 1;}
function ADb(){B.call(this);this.wG=null;}
function ANd(a,b){var c,d;a:{c=a.wG;switch(b.bm){case 67:Qy(c);d=1;break a;case 86:ZE(c);d=1;break a;default:}d=0;}return d;}
var ADa=G();
function AYi(a,b,c){return 0;}
function AC_(){B.call(this);this.sv=null;}
function ANi(a,b,c){var d,e;d=a.sv;c=d.eb+1|0;d.eb=c;d=JO(F(Kn));e=new K;M(e);H(H(U(e,c),C(352)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ACM(b,e);return 1;}
var AC$=G();
function AQd(a){return null;}
function ADc(){B.call(this);this.zW=null;}
function A01(a){var b,c;b=a.zW;c=new Vt;c.qM=b;return c;}
function R$(){B.call(this);this.DT=null;}
function ATC(a,b){return 0;}
function Pu(){B.call(this);this.zn=null;}
function ALP(a,b){var c;c=a.zn;if(b.jO&&b.bm==27){b=ADn(c.M);if(b!==null){b=b.di;if(b===null){b=new F2;Y(b);N(b);}b.i6.f();}}return 0;}
function Pv(){B.call(this);this.vM=null;}
function AXv(a,b){var c,d,e,f,g,h,i;b=b;c=a.vM;d=Nn(c.r);Gg(d,Ff(),Du(C(155),25.0));b=b.j;e=Q(BC,1);f=e.data;g=new BC;h=c.M;i=new Xo;i.yY=c;CC(g,Ou(h,i),C(353));f[0]=g;Jm(d,b,CR(e),A79);Gm(c.M,d);return 1;}
function Pw(){B.call(this);this.Bl=null;}
function AZG(a,b){var c,d,e;c=a.Bl;d=c.eJ;if(d!==null){e=new AAK;e.B0=c;e.B1=b;GK(d,b,e);}}
function Px(){B.call(this);this.zk=null;}
function A1k(a,b){var c,d,e;b=b;c=a.zk;if(DN(c.r,c.eJ)){d=c.l_;b=b.j;e=c.eJ;GP(d,b,e,c,e,c,new Xz);}return 1;}
function Ui(){B.call(this);this.Ct=null;}
function ARM(a,b){return 1;}
function Uh(){B.call(this);this.tQ=null;}
function ARd(a,b){var c,d;c=a.tQ;if(b.bm!=32)d=0;else{AAR(c.fM,AIu());d=1;}return d;}
function Xq(){B.call(this);this.yg=null;}
function AND(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.yg;d=c.c9;if(d===null)e=1;else{if(!BW(d.fW,b.j)){d=c.c9.gn;f=b.j;g=Q(BC,1);h=g.data;b=new BC;i=new UM;i.vw=c;CC(b,i,C(354));h[0]=b;Ld(d,f,CR(g));}else{c=c.c9;b=b.j;if(BW(c.fW,b)){d=c.gn;f=c.fW;i=c.Av;j=d.bY;BJ(j);k=new QX;k.qD=j;j=new QW;j.BU=c;GP(d,b,f,i,f,k,j);}}e=1;}return e;}
function QR(){B.call(this);this.Fo=null;}
function APy(a,b){return 0;}
var AG_=G(0);
function AKu(b){H0(b,A4o(C(355),C(177),AB0(C(356))));}
function AAS(){B.call(this);this.qU=null;}
function ARL(a,b){var c,d,e,f,g,h;b=b;c=a.qU;d=Q(BC,2);e=d.data;f=new BC;g=c.M;h=new Yk;h.wq=c;CC(f,Ou(g,h),C(357));e[0]=f;g=new BC;f=c.M;h=new Ym;h.t1=c;CC(g,Ou(f,h),C(358));e[1]=g;f=CR(d);h=c.M;c=c.j_;L9(h,c.c5,c.i0,b.j,f);return 1;}
var Do=G(0);
var A7w=null;var A7$=null;var A7y=null;var A7x=null;var A7A=null;var A7z=null;var A7C=null;var A7B=null;var A7E=null;var A7D=null;var A7F=null;function AN5(){AN5=Bn(Do);AST();}
function AST(){A7w=CD(206);A7$=S(C(359));A7y=S(C(360));A7x=S(C(261));A7A=S(C(361));A7z=S(C(250));A7C=S(C(362));A7B=S(C(363));A7E=EX(107,106,107,128);A7D=EX(30,31,34,0);A7F=S(C(263));}
function Cp(){CI.call(this);this.k9=null;}
var A7_=null;var A8a=null;var A8b=null;var A8c=null;var A8d=null;var A7d=null;var A8e=null;var A8f=null;var A8g=null;var A8h=null;var A8i=null;var A8j=null;var A8k=null;var A8l=null;var A8m=null;var A7G=null;function TO(){TO=Bn(Cp);AYq();}
function DU(a,b,c){var d=new Cp();ZR(d,a,b,c);return d;}
function A4G(a,b,c,d){var e=new Cp();ADl(e,a,b,c,d);return e;}
function ZR(a,b,c,d){TO();DJ(a,b,c);a.k9=JH(d,null);}
function ADl(a,b,c,d,e){TO();DJ(a,b,c);a.k9=JH(d,e);}
function AYq(){var b,c;b=new Cp;AN5();ZR(b,C(364),0,A7$);A7_=b;A8a=DU(C(365),1,S(C(366)));A8b=DU(C(367),2,S(C(368)));A8c=DU(C(369),3,S(C(370)));A8d=DU(C(371),4,A7$);A7d=DU(C(372),5,S(C(373)));A8e=DU(C(374),6,S(C(375)));A8f=DU(C(376),7,S(C(377)));A8g=DU(C(378),8,S(C(379)));c=new Cp;FI();ADl(c,C(380),9,A7P,S(C(362)));A8h=c;A8i=A4G(C(381),10,A7P,S(C(264)));A8j=DU(C(382),11,S(C(383)));A8k=DU(C(384),12,S(C(385)));A8l=DU(C(386),13,A7$);b=DU(C(387),14,S(C(388)));A8m=b;A7G=I(Cp,[A7_,A8a,A8b,A8c,A8d,A7d,A8e,A8f,A8g,
A8h,A8i,A8j,A8k,A8l,b]);}
function Kp(){var a=this;B.call(a);a.g5=null;a.mO=null;}
function JH(a,b){var c=new Kp();AYT(c,a,b);return c;}
function AYT(a,b,c){a.g5=b;a.mO=c;}
function IY(){var a=this;B.call(a);a.lx=null;a.tb=null;a.oA=null;a.Ef=3;a.ja=null;a.BF=null;a.Fr=null;a.o4=null;a.mZ=null;a.oL=null;}
function A8n(a,b,c,d,e,f,g){var h=new IY();LO(h,a,b,c,d,e,f,g);return h;}
function LO(a,b,c,d,e,f,g,h){a.tb=Du(C(166),16.0);a.oA=Du(C(14),16.0);a.Ef=3;a.BF=b;a.Fr=c;a.ja=d;a.o4=e;a.lx=f;a.mZ=g;a.oL=h;}
function AJN(){var a=this;B.call(a);a.nX=null;a.s8=0;}
function AHY(a,b){var c=new AJN();A0T(c,a,b);return c;}
function A0T(a,b,c){var d;d=new B2;a.nX=d;a.s8=b;d.bC=c;}
function Ya(a,b){return Cg(a.s8,b);}
var DP=G(0);
var A7K=null;var A7L=null;var A7H=null;var A7I=null;var A7J=null;var A73=null;var A74=null;var A7M=null;var A7N=null;function AUU(){AUU=Bn(DP);AZK();}
function AZK(){A7K=S(C(250));A7L=S(C(389));A7H=S(C(266));A7I=S(C(375));A7J=S(C(359));A73=S(C(250));A74=S(C(390));A7M=S(C(391));A7N=Dx(43,45,48);}
var XX=G(0);
var X9=G();
function AXb(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(392)),d),C(393)),e);CU(L(b));return d+e|0;}
var XY=G(0);
var X7=G();
function AXR(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EG(H(EG(H(b,C(394)),d),C(393)),e);CU(L(b));return d+e;}
var AE0=G();
var AH$=G(0);
function UX(){B.call(this);this.oh=null;}
var A78=null;function Lx(){var a=new UX();AID(a);return a;}
function AID(a){a.oh=BM();}
function D2(a,b,c){XV(a,C9(b,c));}
function C9(b,c){return W6(c,b);}
function FF(a,b,c){I3(a,b,c,null);}
function I3(a,b,c,d){XV(a,A4Q(null,b,c,d));}
function XV(a,b){BB(a.oh,b);}
function GZ(a){return CR(Go(a.oh,A78));}
function AIc(){A78=Q(BC,0);}
var DT=G(0);
var A7X=null;var A7Y=null;var A7U=null;var A7V=null;var A7W=null;var A71=null;var A72=null;var A7Z=null;var A70=null;function AYP(){AYP=Bn(DT);AZt();}
function AZt(){A7X=S(C(259));A7Y=S(C(395));A7U=S(C(303));A7V=S(C(396));A7W=S(C(349));A71=S(C(259));A72=S(C(395));A7Z=EX(118,121,122,128);A70=Dx(63,66,68);}
var HZ=G(0);
var Qb=G();
function A0h(a,b,c,d){var e;b=Bt();d=Cl(d);e=new K;M(e);H(H(U(H(e,C(397)),c),C(335)),d);Bk(b,L(e));}
var Qc=G();
function TG(){B.call(this);this.z8=null;}
function AZl(a,b){var c;c=a.z8.lL;c.e9=FT(b,Ux(c));}
function PP(){B.call(this);this.Dx=null;}
function ANO(a,b){var c,d,e,f;c=b.data;b=Bt();d=Cl(c[0]);e=new K;M(e);H(H(e,C(286)),d);Bk(b,L(e));b=Bt();f=c[1];d=new K;M(d);H(H(d,C(398)),f);Bk(b,L(d));}
function PO(){B.call(this);this.EH=null;}
function AMt(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=EP(K3(b,1));b=Bt();d=Cl(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BY(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,C(37));BN(c,i[h]);h=h+1|0;}BY(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(399)),d),C(400)),c);Bk(b,L(e));}
function PL(){B.call(this);this.Ca=null;}
function ALH(a,b){ADm(a.Ca,b);}
function PJ(){B.call(this);this.EQ=null;}
function A2A(a,b){var c,d,e,f,g;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=CQ(K3(b,1));b=Bt();d=Cl(c[1]);c=AGr(g);e=new K;M(e);H(H(H(H(e,C(401)),d),C(402)),c);Bk(b,L(e));}
var AHQ=G();
function UB(){B.call(this);this.tm=null;}
function AXS(a,b){var c;c=a.tm.lY;c.fF=FT(b,ZX(c));}
function AB9(){B.call(this);this.Dy=null;}
function AOJ(a,b){return 0;}
function AKz(){var a=this;B.call(a);a.ko=null;a.oW=null;a.gP=null;a.Ff=null;}
function AB0(a){var b=new AKz();A0K(b,a);return b;}
function A0K(a,b){var c,d,e;c=null;d=null;e=null;a.ko=c;a.oW=d;a.gP=b;a.Ff=e;}
function ACj(a){var b,c;b=a.gP;if(b===null)return C(21);c=AFC(b,C(403));return c==(-1)?a.gP:Dv(a.gP,c+1|0);}
function AWg(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.ko,c.ko)&&BO(a.oW,c.oW)&&BO(a.gP,c.gP)?1:0;}return 0;}
function I6(){var a=this;B.call(a);a.t9=null;a.q6=null;a.rL=null;a.AA=null;a.sJ=null;a.le=null;}
function A8o(a,b,c,d,e,f){var g=new I6();Oz(g,a,b,c,d,e,f);return g;}
function Oz(a,b,c,d,e,f,g){a.t9=b;a.q6=c;a.rL=d;a.AA=e;a.sJ=f;a.le=g;}
function Kl(){var a=this;B.call(a);a.rV=null;a.pH=null;a.uJ=null;}
function A8p(a,b,c){var d=new Kl();K6(d,a,b,c);return d;}
function K6(a,b,c,d){a.rV=b;a.pH=c;a.uJ=d;}
function U4(a,b){return !b?a.pH:a.uJ;}
function AIx(){var a=this;B.call(a);a.jF=null;a.l4=null;a.n9=null;}
function AHA(a,b,c){var d=new AIx();A1L(d,a,b,c);return d;}
function A1L(a,b,c,d){a.jF=b;a.l4=c;a.n9=d;}
function Cu(){CI.call(this);this.nV=null;}
var A8q=null;var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A8x=null;var A8y=null;var A8z=null;var A8A=null;var A8B=null;var A8C=null;var A8D=null;var A8E=null;var A7v=null;function AFb(){AFb=Bn(Cu);AXY();}
function Eb(a,b,c){var d=new Cu();ABb(d,a,b,c);return d;}
function A0V(a,b,c,d){var e=new Cu();AHa(e,a,b,c,d);return e;}
function ABb(a,b,c,d){AFb();DJ(a,b,c);a.nV=JH(d,null);}
function AHa(a,b,c,d,e){AFb();DJ(a,b,c);a.nV=JH(d,e);}
function AXY(){var b;b=new Cu;FI();ABb(b,C(364),0,A7P);A8q=b;A8r=Eb(C(365),1,S(C(404)));A8s=Eb(C(367),2,S(C(405)));A8t=Eb(C(369),3,S(C(406)));A8u=Eb(C(371),4,S(C(404)));A8v=Eb(C(372),5,Dx(188,63,60));A8w=Eb(C(374),6,S(C(407)));A8x=Eb(C(376),7,S(C(408)));A8y=Eb(C(378),8,S(C(409)));A8z=A0V(C(380),9,A7P,Dx(52,65,52));A8A=A0V(C(381),10,S(C(410)),S(C(411)));A8B=Eb(C(382),11,S(C(412)));A8C=Eb(C(384),12,S(C(413)));A8D=Eb(C(386),13,A7P);b=Eb(C(387),14,S(C(388)));A8E=b;A7v=I(Cu,[A8q,A8r,A8s,A8t,A8u,A8v,A8w,A8x,A8y,A8z,
A8A,A8B,A8C,A8D,b]);}
var AK5=G();
function J8(b,c){var d,e,f;if(c<=0)return C(21);d=B5(c);e=d.data;e[0]=AKp(D6(b,52));f=1;while(f<c){e[f]=AKp(D6(b,62));f=f+1|0;}return Hr(d);}
function AKp(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AFw=G();
function ALc(){var a=this;B.call(a);a.Jq=null;a.OR=null;a.IF=0;a.Pn=0;}
var AEg=G(0);
function AKw(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BK,8);e=DL(8);f=B5(16);g=0;h=0;i=0;while(true){j=BL(i,b);if(j>0)break;k=j>=0?10:(c.bb(CY(i))).mV;if(k==10){d=AGR(EC(f,0,g),d,h);e=AB5(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=KG(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AGR(EC(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bb(CY(j))).mV==10){e=AB5(1,e,h);i=j;}else e=AB5(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Zu;d=AE3(d,h);if(m.length!=h)e=Ok(e,h);c.ke=d;c.CB=e;return c;}
function AIw(b){var c,d;c=J(b);BJ(b);d=new PB;d.t3=b;return AKw(c,d);}
var C2=G();
var AJ3=G(C2);
var AKn=G(C2);
var AIM=G(C2);
var AIX=G(C2);
var AKC=G(C2);
function U8(){B.call(this);this.r9=null;}
function APo(a){var b;b=a.r9;Bk(Bt(),b);}
var HJ=G(CI);
var A8F=null;var A66=null;var A8G=null;function AQx(){AQx=Bn(HJ);AWV();}
function A2T(a,b){var c=new HJ();AER(c,a,b);return c;}
function AER(a,b,c){AQx();DJ(a,b,c);}
function AWV(){var b;A8F=A2T(C(414),0);b=A2T(C(415),1);A66=b;A8G=I(HJ,[A8F,b]);}
function PB(){B.call(this);this.t3=null;}
function AVb(a,b){return PA(P(a.t3,b.bp));}
function Zu(){var a=this;B.call(a);a.ke=null;a.CB=null;}
var AIt=G();
function Cg(b,c){return CZ(b*c);}
function Gr(){var a=this;B.call(a);a.g_=0;a.nC=null;}
var AFn=G();
function Tj(){var a=this;B.call(a);a.ru=null;a.uc=null;a.AD=null;}
var AIz=G(0);
function AHO(b){if(b===null)return C(176);if(!DA(b,C(416))&&!DA(b,C(417))&&!DA(b,C(418))&&!DA(b,C(419))&&!DA(b,C(420))&&!DA(b,C(421))){if(DA(b,C(422)))return C(177);if(DA(b,C(423)))return C(179);if(DA(b,C(424)))return C(180);if(!DA(b,C(425))&&!DA(b,C(426)))return C(176);return C(427);}return C(178);}
function AH7(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(NU(b)){case -1655966961:if(!Bj(b,C(180)))break a;c=4;break a;case 3401:if(!Bj(b,C(179)))break a;c=3;break a;case 98723:if(!Bj(b,C(178)))break a;c=2;break a;case 3213227:if(!Bj(b,C(427)))break a;c=5;break a;case 3254818:if(!Bj(b,C(177)))break a;c=1;break a;case 3556653:if(!Bj(b,C(176)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=En();e
=new K;M(e);H(H(e,C(428)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function AA2(){B.call(this);this.qE=null;}
function APt(a,b,c,d){return LL(a.qE,b,c,d);}
function VW(){B.call(this);this.wY=null;}
function A2j(a,b,c){return Hd(a.wY,b,c);}
function VV(){B.call(this);this.yM=null;}
function AP7(a){var b,c;b=a.yM;c=new AB2;c.vL=b;return c;}
function VX(){var a=this;B.call(a);a.DC=null;a.DD=null;a.DE=null;}
function Xy(){B.call(this);this.kp=null;}
function A2Z(a,b){var c,d,e,f,g;c=a.kp;d=c.mt;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.ku;e.a=E5(0,e.a+f|0,c.gW.a-c.jS.a|0);c=a.kp;d=c.ku;d.b=E5(0,d.b+g|0,c.gW.b-c.jS.b|0);}a.kp.mt=b.j;return 1;}
var AFu=G();
function LU(){return "clipboard" in $rt_globals.navigator?1:0;}
function AG6(){var a=this;B.call(a);a.cP=null;a.cg=null;a.kv=null;a.kM=null;a.nZ=null;a.jZ=null;}
function Nn(a){var b=new AG6();A0c(b,a);return b;}
function A0c(a,b){a.cg=BM();a.jZ=A79;a.cP=b;Ba(b.dR,a);}
function Gg(a,b,c){a.kv=c;a.nZ=b;b=B7(a.cg);while(B_(b)){JE(Ca(b),a.nZ);}}
function Jm(a,b,c,d){a.jZ=d;R_(a,b,c);}
function R_(a,b,c){var d,e;d=a.cP;e=d.bO;if(Bc(e.a,e.b)&&d.cf!==0.0){if(a.kv!==null&&!Jr(a)){a.kM=Fi(a.cP,a.kv);d=U$(a,b,c,null,null);b=new RY;b.tU=a;d.kS=b;FL(a.cP,a);return;}b=new BU;Y(b);N(b);}c=new C$;Bm(c,C(429));N(c);}
function Mk(a){if(Jr(a)){ABl(a.cP,a);ABc(a,null);a.jZ.f();a.jZ=A79;}}
function U$(a,b,c,d,e){var f,g,h;f=AJD();AD5(f);Nk(f,c.cZ());JE(f,a.nZ);JC(f,a.kM,a.cP);if(d===null)g=b.a;else{g=b.a;g=a.cP.bO.a<((g+(EB(d)).a|0)+(EB(f)).a|0)?g-(EB(f)).a|0:(g+(EB(d)).a|0)-d.f6|0;}h=b.b;b=a.cP.bO;Ne(f,Bd(0,Be(g,b.a-(EB(f)).a|0)),Bd(0,Be(h,b.b-(EB(f)).b|0)));b=new ABR;b.vA=a;b.vx=f;b.vy=e;f.o1=b;BB(a.cg,f);return f;}
function A2F(a,b,c){var d;a.kM=Fi(a.cP,a.kv);d=B7(a.cg);while(B_(d)){JC(Ca(d),a.kM,a.cP);}}
function AEm(a){var b,c;if(ED(a.cg))return;B$(a.cP.bH,1);b=0;while(true){c=a.cg;if(b>=c.q)break;L_(BG(c,b),a.cP);b=b+1|0;}}
function AP4(a,b){var c;if(!Jr(a))return 0;a:{switch(b.bm){case 27:Mk(a);c=1;break a;default:}c=0;}return c;}
function ABc(a,b){var c,d;c=a.cg.q-1|0;a:{while(true){if(c<0)break a;d=BG(a.cg,c);if(b===d)break;EM(a.cg,c);MR(d);c=c+(-1)|0;}}}
function Jr(a){return a.cg.q<=0?0:1;}
function ARU(a){var b,c;Sa(a.cP.dR,a);ABl(a.cP,a);b=a.cg;c=B7(b);while(B_(c)){MR(Ca(c));}Ix(b);}
function W0(){B.call(this);this.x5=null;}
function APO(a,b){Ml(a.x5,b);}
function UO(){B.call(this);this.zF=null;}
function A2l(a,b){var c,d,e,f;c=a.zF;if(c.gC!=3&&c.fd!=3){b=b.data;c.gV=3;d=CQ(b[0]);e=EP(b[1]);N5(c.h,d,e);if(c.fO){b=E1(c);f=JK(E3(),c.i1);c=new K;M(c);H(HK(H(H(c,b),C(430)),f),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}
function Q2(){B.call(this);this.zo=null;}
function AVH(a,b){var c,d,e,f,g,h;c=a.zo;if(c.fd!=3){d=b.data;c.gC=3;if((CQ(d[2])).data[0]!=1)Ml(c,b);else{e=CQ(d[0]);f=EP(d[1]);g=c.gV!=3?0:1;Rp(c.h,e,f,g);if(c.fO){b=E1(c);h=JK(E3(),c.i1);c=new K;M(c);H(HK(H(H(c,b),C(431)),h),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function PR(){B.call(this);this.kf=null;}
function AU2(a){return a.kf;}
var AJZ=G(0);
var LP=G(0);
function Q7(){B.call(this);this.uj=null;}
function AV2(a,b){return La(a.uj,b);}
function Pr(){B.call(this);this.AH=null;}
function A1B(a,b){var c,d;c=a.AH;d=b.bp;return PA(c.charCodeAt(d)&65535);}
var AGt=G();
function AIU(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AJ7(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function QL(){var a=this;B.call(a);a.cQ=null;a.qa=null;a.fs=null;a.ec=0;a.cu=0;a.jb=null;a.jV=null;a.hw=0;a.w5=0;}
function Po(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.ec;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EQ(c);j=d+(-1)|0;b=Dl(d);d=Bc(j,a.cu)%a.fs.b|0;GQ(a,c,b,a.hw,g);JJ(a.cQ,c,0,d);if(!(j%a.ec|0))break;d=j;}}else{EQ(b);k=a.ec-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GQ(a,b,Dl(j),Bc(a.cu,k)+a.hw|0,g);k=k+(-1)|0;j=h;}CM(a.cQ,b);j=Bd(i,e);}return j;}k=a.ec;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EQ(c);b=Dl((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cu)%a.fs.b|0;GQ(a,c,b,a.hw,g);JJ(a.cQ,c,0,d);if(!(j%a.ec|0))break;d=j;}}else{EQ(b);d=0;while(d<a.ec){h=h+1|0;GQ(a,b,Dl((h>e?h-f|0:h)+f|0),Bc(a.cu,d)+a.hw|0,g);d=d+1|0;}CM(a.cQ,b);j=Be(i,e);}return j;}
function VU(b,c,d,e){c=c.data;return d<c.length&&c[d]?JY(b.d2,b,c[d]):e.k6;}
function Ni(a,b,c,d,e,f){DI(b,a.qa.a+d.a|0,c+d.b|0,a.jb,a.jV,a.cQ,e,f,a.w5);}
function GQ(a,b,c,d,e){B0(b,c,a.fs.a-20.0*e,d);}
var AEj=G();
function Gj(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AEM(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function TW(){var a=this;B.call(a);a.p5=null;a.p6=null;a.ir=null;}
function A46(a,b,c){var d=new TW();AF4(d,a,b,c);return d;}
function AF4(a,b,c,d){a.p5=b;a.p6=c;a.ir=d;}
function GN(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.ir.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.h5:i.h6;k=!c?i.ob:i.oc;l=BL(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function L3(){var a=this;B.call(a);a.h6=0;a.oc=0;a.h5=0;a.ob=0;a.oS=0;}
function Nj(a,b,c,d,e){var f=new L3();A0X(f,a,b,c,d,e);return f;}
function A0X(a,b,c,d,e,f){a.h6=b;a.oc=c;a.h5=d;a.ob=e;a.oS=f;}
var Sq=G(0);
var A7b=null;function AKd(){A7b=new Rl;}
function ACe(){var a=this;B.call(a);a.sL=null;a.sM=null;}
function AV3(a,b){var c,d,e;c=a.sL;d=a.sM;c=c.fx.ei.u;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Co(d,b);}
var Gd=G(I7);
var ADo=G(Fy);
function ACC(){B.call(this);this.zz=null;}
function AUa(a,b){var c,d;c=a.zz;Vu(c,Fw(c,b.j));b=Bi(c);d=c.d;N1(b,d.w,d.A);H8(c);}
function T5(){B.call(this);this.xM=null;}
function A1Z(a,b){var c,d;c=a.xM;d=c.eb+1|0;c.eb=d;c=new K;M(c);H(H(U(c,d),C(432)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function VA(){B.call(this);this.xX=null;}
function A0z(a){var b,c;b=a.xX;c=new K;M(c);H(H(H(c,C(433)),b),C(434));$rt_globals.console.info($rt_ustr(L(c)));}
function G5(){var a=this;B.call(a);a.dk=null;a.iA=null;}
function ACN(a,b,c){a.dk=b;a.iA=c;}
function WH(a,b){var c;c=A2k(a.dk.ck,b);FY(c,a.iA.c5);DK(c,M5(BE(a)));AJI(c);b=new PS;b.tY=a;b.tZ=c;S_(c,b);b=new PT;b.xL=a;c.wQ=b;return c;}
function AGg(a,b){var c,d,e;c=a.BB(b);if(c!==null){d=a.dk;e=a.iA;L9(d,e.c5,e.i0,b,c);}return c===null?0:1;}
function Y$(){var a=this;G5.call(a);a.eS=null;a.oM=null;a.pV=null;}
function AME(a){var b;a.eS=null;b=null;a.pV=b;a.oM=b;}
function AXC(a,b){var c,d,e,f;if(BW(a.eS.es,b))return ZM(a,1,C(300));if(BW(a.eS.eq,b))return ZM(a,0,C(301));c=Q(BC,2);d=c.data;b=new BC;e=new Xt;e.zU=a;CC(b,e,C(300));d[0]=b;b=new BC;f=new Xu;f.r2=a;CC(b,f,C(301));d[1]=b;return CR(c);}
function ZM(a,b,c){var d,e,f,g;d=Q(BC,1);e=d.data;f=new BC;g=new AAf;g.qp=a;g.qo=b;CC(f,g,c);e[0]=f;return CR(d);}
function H5(a,b){var c,d;c=a.dk.ck.e2;d=new ZC;d.yt=a;d.ys=b;Ja(c,d);}
var ADD=G(Es);
var A8H=null;function W_(b){var c;c=new K;M(c);return L(EG(c,b));}
function AGm(){A8H=F($rt_floatcls());}
var Gv=G();
var A8I=null;var A8J=null;var A6a=null;var A5_=null;var A5$=null;function AJu(){A8I=DX([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A8J=AIA([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A6a=AIA([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A5_=new ABy;A5$=new TZ;}
var JB=G();
var A8K=0;var A8L=null;var A8M=null;function AJV(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.re=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.m9=0;c.mX=0;return;}if(f)d=e|8388608;else{d=e<<1;while(II(Df(Bp(d),Bp(8388608)),FH)){d=d<<1;f=f+(-1)|0;}}g=AJ2(A8M,f);if(g<0)g= -g|0;h=A8M.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jy(d,A8L.data[e],i);if(j<A8K){while($rt_ucmp(j,A8K)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A8M.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jy(d,
A8L.data[e],i);}e=d<<1;d=e+1|0;h=A8L.data;f=g+1|0;k=h[f];l=i-1|0;m=Jy(d,k,l);n=Jy(e-1|0,A8L.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DF(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.m9=d;c.mX=g-50|0;}
function Jy(b,c,d){return GR(Gb(Ci(Df(Bp(b),D(4294967295, 0)),Df(Bp(c),D(4294967295, 0))),32-d|0));}
function AI4(){A8K=$rt_udiv((-1),10);A8L=DX([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A8M=DX([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function TZ(){var a=this;B.call(a);a.m9=0;a.mX=0;a.re=0;}
function On(){var a=this;B.call(a);a.Ex=null;a.wJ=0.0;a.CU=0.0;a.gs=null;a.jl=null;a.nW=null;a.f$=0;}
function AKW(a,b){var c;if(b!==null){a.jl=b;return a;}c=new BU;Bm(c,C(435));N(c);}
function AGc(a,b){var c;if(b!==null){a.nW=b;return a;}c=new BU;Bm(c,C(435));N(c);}
function Y1(a,b,c,d){var e,f,g,$$je;e=a.f$;if(!(e==2&&!d)&&e!=3){a.f$=d?2:1;while(true){try{f=AHg(a,b,c);}catch($$e){$$je=EW($$e);if($$je instanceof Bu){g=$$je;N(AWp(g));}else{throw $$e;}}if(Id(f))return f;if(I1(f)){if(d&&D9(b)){g=a.jl;Hm();if(g===A6D)return Eu(Ch(b));if(Ch(c)<=J(a.gs))return A6G;Fv(b,b.Z+Ch(b)|0);if(a.jl===A6E)Nf(c,a.gs);}return f;}if(Rs(f)){g=a.jl;Hm();if(g===A6D)return f;if(g===A6E){if(Ch(c)<J(a.gs))return A6G;Nf(c,a.gs);}Fv(b,b.Z+K5(f)|0);}else if(Me(f)){g=a.nW;Hm();if(g===A6D)break;if(g
===A6E){if(Ch(c)<J(a.gs))return A6G;Nf(c,a.gs);}Fv(b,b.Z+K5(f)|0);}}return f;}b=new C$;Y(b);N(b);}
function AIC(a,b){var c,d,e,f;c=a.f$;if(c&&c!=3){b=new C$;Y(b);N(b);}if(!Ch(b))return AHI(0);if(a.f$)a.f$=0;d=AHI(Bd(8,Ch(b)*a.wJ|0));while(true){e=Y1(a,b,d,0);if(I1(e))break;if(Id(e))d=AAm(a,d);if(!NE(e))continue;TY(e);}b=Y1(a,b,d,1);if(NE(b))TY(b);while(true){f=a.f$;if(f!=3&&f!=2)break;a.f$=3;if(I1(A6H)){d.ek=d.Z;d.Z=0;d.jJ=(-1);return d;}d=AAm(a,d);}b=new C$;Y(b);N(b);}
function AAm(a,b){var c,d,e;c=b.iC;d=KG(c,Bd(8,c.data.length*2|0));e=AJE(d,0,d.data.length);Fv(e,b.Z);return e;}
function ACH(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DR(a,b){var c=new ACH();AJL(c,a,b);return c;}
function AJL(a,b,c){a.bq=b;a.bv=c;}
function ALI(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function AR8(a){return AGw(I(B,[CY(a.bq),CY(a.bv)]));}
function AZX(a,b){var c;b=b;c=BL(a.bq,b.bq);if(!c)c=BL(a.bv,b.bv);return c;}
var AFE=G(C2);
function Uw(){B.call(this);this.Ds=null;}
function AMz(a){Bk(Bt(),C(436));}
var ADZ=G(0);
var A79=null;function AG1(){A79=new W$;}
function HY(){CB.call(this);this.b0=null;}
function Mw(a,b){var c;if(a.b0===null){a.b0=b;return;}c=new Eg;Y(c);N(c);}
function AZc(a){var b,c,d;b=a.b0.data;c=b.length;d=0;while(d<c){b[d].b5();d=d+1|0;}}
function AQG(a,b){var c,d,e;c=a.b0.data;d=c.length;e=0;while(e<d){c[e].cy(b);e=e+1|0;}}
function AU$(a,b){var c,d,e,f;c=0;d=a.b0.data;e=d.length;f=0;while(f<e){c=c|d[f].cj(b);f=f+1|0;}return c;}
function ANp(a,b,c,d){JL(a,b,c,d);a.BT();}
function A1H(a,b,c,d){var e,f,g,h,i;e=0;f=a.b0.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.cz(b,c,d);h=h+1|0;}return e;}
function AS5(a,b,c){var d,e,f,g,h;d=a.b0.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(BW(g,b.j)){h=g.cn(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A1S(a,b,c){var d,e,f,g,h;d=0;e=a.b0.data;f=e.length;g=0;while(g<f){h=e[g];if(BW(h,b.j))d=d|h.dB(b,c);g=g+1|0;}return d;}
function A2c(a,b){var c,d,e,f,g;c=0;d=a.b0.data;e=d.length;f=0;while(f<e){g=d[f];if(BW(g,b.j))c=c|g.bT(b);f=f+1|0;}return c;}
function AN3(a,b,c,d){var e,f,g,h,i;e=0;f=a.b0.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.dy(b,c,d);h=h+1|0;}return e;}
function QV(){var a=this;HY.call(a);a.r_=null;a.Av=null;a.gn=null;a.oE=null;a.kL=null;a.gp=null;a.fW=null;}
function APj(a){var b,c,d,e;b=a.k.a/4|0;c=b+Dy(a,1.0)|0;d=AJS(a.i);e=BF(b,a.k.b);a.b0.data[0].dz(d,e,a.bR);d.a=a.i.a+b|0;e.a=c-b|0;a.b0.data[1].dz(d,e,a.bR);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.b0.data[2].dz(d,e,a.bR);}
function AXx(a){var b,c;b=AG9(a.fW);c=AHK(a.kL);return BF((b.a+a.oE.k.a|0)+c.a|0,b.b);}
function Yk(){B.call(this);this.wq=null;}
function AZ4(a){Y7(a.wq);}
function Ym(){B.call(this);this.t1=null;}
function AZb(a){var b;b=a.t1;T_(new M3,b.j_,b.M);}
function YZ(){B.call(this);this.BP=null;}
function AVo(a,b){var c,d;c=a.BP;d=c.eb+1|0;c.eb=d;c=b.iQ;b=new K;M(b);H(H(U(b,d),C(437)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var Rl=G();
function AY$(a,b){}
function Fn(){var a=this;CB.call(a);a.cJ=null;a.U=null;a.ff=null;}
function A8N(){var a=new Fn();LJ(a);return a;}
function LJ(a){E2(a);a.cJ=new Bg;a.U=new Bg;}
function AXj(a,b){a.ff=b;}
function S2(a,b,c){X(a.cJ,b,c);}
function Te(a){var b;b=a.ff;if(b!==null)ACp(b);}
function AFD(a){var b;b=a.U;b.a=WP(a,b.a);b=a.U;b.b=ACO(a,b.b);}
function AGL(a,b){var c,d;c=a.U.a;d=WP(a,b);a.U.a=d;return c==d?0:1;}
function ALh(a,b){var c,d;c=a.U.b;d=ACO(a,b);a.U.b=d;return c==d?0:1;}
function ACO(a,b){return Bd(0,Be(b,a.cJ.b-a.k.b|0));}
function WP(a,b){return Bd(0,Be(b,a.cJ.a-a.k.a|0));}
function Rf(){var a=this;Fn.call(a);a.bV=null;a.d3=null;a.ic=null;a.AJ=null;a.ej=null;a.b7=null;a.e4=null;a.fN=null;a.dO=0;a.fK=0;a.BS=null;a.d1=0;a.eP=0;a.hF=0;a.f7=0;a.fY=0;a.cT=0;a.e5=null;a.kk=null;a.y1=null;a.iz=null;}
function A5m(a,b){var c=new Rf();AKT(c,a,b);return c;}
function AKT(a,b,c){LJ(a);a.d3=Sl();a.ic=new Bg;a.b7=A8O;a.e4=Q(J2,0);a.d1=0;a.eP=0;a.hF=0;a.f7=0;a.fY=0;a.e5=AIk(0);a.iz=JQ();a.bV=b;a.kk=c;a.BS=c;Qu(a);}
function Qu(a){a.dO=Cg(2.0,a.bV.cf);}
function Vl(a){return a.b7.data.length?0:1;}
function W3(a,b){Tc(a);a.b7=b;}
function Tc(a){X(a.ic,0,0);}
function V3(a,b,c){a.y1=b;a.AJ=c;a.ej=null;a.e5=null;a.fK=0;Tc(a);}
function A1X(a){a.fN=BV(a.fN,null);X(a.ic,0,0);Fx(a.iz);a.e5=null;a.b7=A8O;a.e4=null;a.d1=0;a.eP=0;a.hF=0;AA3(a.d3);a.kk=null;}
function AWD(a,b,c){Yo(a);Qu(a);a.ej=null;a.e5=null;a.fK=0;}
function AUY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Ki(a.bV);if(Vl(a))return;KX(a);Cn(c,a.ej);d=Ej(a);e=AH6(c,a.fK);f=Be(H9(a.k.b,d),a.b7.data.length)+30|0;g=a.y1.BF;h=a.e4.data;d=h.length;if(d<f){a:{i=a.f7;j=a.fY;k=a.b7;l=a.e5;m=a.iz;n=Q(J2,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.g0!==c){ACv(l,q,m);o[f]=MK(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MK(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MK(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ACv(l,c,m);h[f]=null;}f=f+1|0;}a.e4=n;Co(a.ic,MJ(a.e5));YC(a,a.bV.bH);}a.f7=Be((a.U.b+a.dO|0)/(Ej(a)+a.dO|0)|0,a.b7.data.length-1|0);a.fY=Be((((a.U.b+a.d3.t.b|0)-1|0)+a.dO|0)/(Ej(a)+a.dO|0)|0,a.b7.data.length-1|0);if(!a.e4.data.length)return;AH1(a,e);ACl(a,b);q=g.AA;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.d3.u;i=c.a;j=c.b;p=Cy(a.bV,2.0);s=a.bV.dV;t=a.f7;u=i+p|0;while(t<=a.fY){l=XW(a,t);d=Bc(t,Ej(a));v
=t+1|0;w=d+Bc(v,a.dO)|0;x=u+a.d1|0;y=x+a.eP|0;z=a.cT!=t?0:1;m=!z?q:g.sJ;ba=!z?g.t9:g.le;bb=!z?g.q6:g.le;bc=!z?g.rL:g.le;bd=(j+w|0)-a.U.b|0;DI(b,u,bd,l.ju,l.tl,a.fN,ba,m,a.bV.cA);DI(b,x,bd,l.jY,l.lb,a.fN,bb,m,a.bV.cA);DI(b,y,bd,l.jv,l.kK,a.fN,bc,m,a.bV.cA);d=l.ju.a;be=u+d|0;X(s,Bd(0,a.d1-d|0),l.ju.b);Bs(b,be,bd,s,m);d=u+a.d1|0;f=l.jY.a;bf=d+f|0;X(s,Bd(0,a.eP-f|0),l.jY.b);Bs(b,bf,bd,s,m);d=l.jv.a;bg=y+d|0;X(s,Bd(0,(((a.d3.t.a-d|0)-a.eP|0)-a.d1|0)-p|0),l.jv.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;X(s,p,Ej(a)+a.dO
|0);Bs(b,bh,bd,s,q);t=v;}Ga(b);}
function AH1(a,b){var c,d,e,f,g,h;c=0;d=a.f7;while(d<=a.fY){e=XW(a,d);if(!(e!==null&&e.g0===a.b7.data[d])){f=a.e4.data;g=a.b7;e=a.e5;h=a.iz;c=d%f.length|0;if(f[c]!==null)ACv(e,f[c],h);f[c]=MK(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Co(a.ic,MJ(a.e5));YC(a,a.bV.bH);}}
function YC(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ic;c=D5(b,c.a+150|0,c.b,a.bV.cA);Cn(c,a.ej);d=a.ej;e=d.em;f=e-(e+d.eH)/16.0;g=a.e4.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.g0.lu;k=d.lb;B0(c,j,k.bn+a.fK,f+k.bs);j=d.g0.lM;d=d.kK;B0(c,j,d.bn+a.fK,f+d.bs);}i=i+1|0;}a:{d=a.iz;if(d.c8>0){h=d.c0;i=0;b:while(true){g=d.b9.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cV;l=j.cS;k=k;l=l.l9;B0(c,k,l.bn+a.fK,f+l.bs);j=j.cX;if(h!=d.c0)break b;}i=i+1|0;}b=new H_;Y(b);N(b);}}if(a.fN===null)a.fN=CW(b);CM(a.fN,
c);Ez(c);}
function XW(a,b){var c;c=a.e4.data;return c[b%c.length|0];}
function AZW(a,b){Co(a.d3.t,b);}
function A02(a,b){Co(a.d3.u,b);}
function Yo(a){var b,c,d,e,f,g,h,i,j;b=Ki(a.bV);if(Vl(a))return;KX(a);Cn(b,a.ej);c=AH6(b,a.fK);d=a.b7.data;e=d.length;f=0;while(f<e){g=d[f];h=Nt(c,g.hK);i=Nt(c,g.lu);j=Nt(c,g.lM);a.d1=Bd(a.d1,h);a.eP=Bd(a.eP,i);a.hF=Bd(a.hF,j);f=f+1|0;}}
function APW(a,b){var c;c=Z9(a,b.j);if(c>=0)a.cT=c;return Fb(a.d3,a.i)&&GI(a.bV.cU)?1:0;}
function AN$(a,b,c){if(!Fb(a.d3,b.j)&&!K$(a.d3)){b=a.BS;if(b!==null)b.f();}return null;}
function AR1(a,b,c,d){var e;if(d==1){e=Z9(a,b.j);if(e>=0)Up(a,a.b7.data[e]);}return 1;}
function Up(a,b){a.kk.f();b.tV.f();}
function Z9(a,b){var c,d,e;if(!a.e4.data.length)return (-1);c=Ej(a);d=(b.b-a.i.b|0)+a.U.b|0;e=a.dO;e=(d+e|0)/(c+e|0)|0;if(e<a.b7.data.length)return e;return (-1);}
function Ej(a){return EA(a.ej);}
function KX(a){var b;if(a.ej===null){b=Fi(a.bV,a.AJ);a.ej=b;a.e5=AIk(EA(b));a.fK=CZ(a.ej.p0);}}
function A1b(a,b){var c,d,e;a:{switch(b.bm){case 13:Up(a,a.b7.data[a.cT]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cT=a.f7;b=a.ff;c=a.U;Jg(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cT=a.fY;b=a.ff;c=a.U;Jg(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cT=a.b7.data.length-1|0;break a;case 36:case 37:a.cT=0;break a;case 38:d=a.cT;e=a.b7.data.length;a.cT=((d+e|0)
-1|0)%e|0;break a;case 40:a.cT=(a.cT+1|0)%a.b7.data.length|0;break a;default:break a;}a.kk.f();return 0;}e=a.cT;if(e<=a.f7)Jg(a.ff,a.U.a,Bc(e,Ej(a))+Bc(a.cT,a.dO)|0);else if(e>=a.fY)Jg(a.ff,a.U.a,(Bc(e+1|0,Ej(a))+Bc(a.cT+2|0,a.dO)|0)-a.k.b|0);return 0;}
var UU=G();
function ATH(a){}
function AFa(){var a=this;CB.call(a);a.om=null;a.xY=null;a.AB=null;a.bP=null;a.dq=null;a.dD=null;a.uf=null;a.rb=null;a.vD=0.0;a.pp=null;a.oO=null;}
function GH(a,b){var c=new AFa();AUG(c,a,b);return c;}
function AUG(a,b,c){var d;c=c.cU;E2(a);d=new P1;d.y0=a;a.xY=d;d=new P0;d.zI=a;a.AB=d;a.vD=10.0;a.bP=b;a.om=c;b.ff=a;}
function ASG(a){var b;b=a.bP;b.ff=null;a.bP=BV(b,null);}
function Jf(a,b,c){var d;a.oO=c;a.pp=b;d=a.dq;if(d!==null)H6(d,b,c);b=a.dD;if(b!==null)H6(b,a.pp,a.oO);}
function AOv(a,b,c,d){JL(a,b,c,d);JL(a.bP,b,c,d);if(d!==0.0)ACp(a);}
function Jg(a,b,c){K8(a,b);LA(a,c);}
function ACp(a){var b;AFD(a.bP);b=FN(a)*3|0;if(Zr(a,b))TM(a);else a.dD=null;if(ADV(a,b))WG(a);else a.dq=null;}
function ADV(a,b){var c;c=a.k.b;return c>b&&a.bP.cJ.b>c?1:0;}
function Zr(a,b){var c;c=a.k.a;return c>b&&a.bP.cJ.a>c?1:0;}
function TM(a){var b,c,d,e,f,g;b=a.dD;if(b===null)b=I_();a.dD=b;O$(a,b);c=a.dD;b=a.bP;d=b.U.a;e=a.i;f=e.a;g=a.k;Ro(c,d,f,g.a,b.cJ.a,e.b+g.b|0,FN(a));}
function WG(a){var b,c,d,e,f,g;b=a.dq;if(b===null)b=I_();a.dq=b;O$(a,b);c=a.dq;b=a.bP;d=b.U.b;e=a.i;f=e.b;g=a.k;Km(c,d,f,g.b,b.cJ.b,e.a+g.a|0,FN(a));}
function FN(a){return Dy(a,a.vD);}
function O$(a,b){H6(b,a.pp,a.oO);}
function A0q(a,b){var c;a.bP.cy(b);if(!(a.dq===null&&a.dD===null)){B$(b,1);c=a.dq;if(c!==null)GV(c,b);c=a.dD;if(c!==null)GV(c,b);c=a.dq;if(c!==null)G1(c,b);c=a.dD;if(c!==null)G1(c,b);B$(b,0);}}
function Tm(a,b){var c,d;a:{b:{c=a.dq;if(!(c!==null&&IL(c,b))){c=a.dD;if(c===null)break b;if(!IL(c,b))break b;}d=1;break a;}d=0;}return d;}
function AS3(a,b,c,d){return !Tm(a,b.j)&&!a.bP.cz(b,c,d)?0:1;}
function K8(a,b){var c;b=AGL(a.bP,b);if(Zr(a,FN(a)*3|0))TM(a);if(b){c=a.uf;if(c!==null)c.f();}}
function LA(a,b){var c;if(ACQ(a,b)){c=a.rb;if(c!==null)c.f();}}
function ACQ(a,b){var c;c=ALh(a.bP,b);if(ADV(a,FN(a)*3|0))WG(a);return c;}
function ASI(a,b,c){var d,e;d=a.dq;if(d!==null){e=F3(d,b.j,a.xY,1);if(e!==null)return e;}d=a.dD;if(d!==null){e=F3(d,b.j,a.AB,0);if(e!==null)return e;}return a.bP.cn(b,c);}
function AQ2(a,b,c){return Tm(a,b.j)?1:0;}
function AQO(a,b){var c,d,e;c=a.dq;d=c!==null&&F$(c,b.j,a.om)?1:0;c=a.dD;e=c!==null&&F$(c,b.j,a.om)?1:0;return !d&&!e&&!a.bP.bT(b)?0:1;}
function AWY(a,b,c,d){var e,f;if(!BW(a,b.j))return 0;e=Cg(d*0.5,a.bR);f=Cg(c*0.5,a.bR);if(b.bL){f=f+e|0;e=0;}if(a.dq!==null&&e)LA(a,a.bP.U.b+e|0);if(a.dD!==null&&f)K8(a,a.bP.U.a+f|0);return 1;}
function AHK(a){var b,c;b=FN(a);c=a.bP.hU();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var ADw=G();
function ANq(a,b){}
function ADy(){var a=this;B.call(a);a.us=null;a.ut=null;}
function ALJ(a,b){var c,d,e;c=a.us;d=a.ut;b=Cl(b);e=new K;M(e);H(H(H(e,d),C(29)),b);DK(c,L(e));}
function Qd(){var a=this;Fn.call(a);a.me=null;a.pF=null;a.yl=null;a.r6=0.0;}
function ATR(a){var b;b=Cg(20.0,a.bR);return BF(b,b);}
function AZ1(a,b){S2(a,b.a*3|0,b.b*5|0);a.yl.g(b);}
function AT6(a,b){var c,d,e,f,g,h,i,j,k,l,m;AKZ(a,b);ACl(a,b);c=Cg(30.0,a.bR);d=a.U;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.pF;d.b=c;d.a=c;a.me.bC=1.0;while(h<=e){g=a.i.b-a.U.b|0;j=f;while(j<=i){k=a.i.a-a.U.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AKN(l);m=m+1|0;}U7(AKo(l),0.75,a.r6,a.me);Bs(b,k+j|0,g+h|0,a.pF,a.me);j=j+c|0;}h=h+c|0;}Ga(b);}
function AQn(a,b,c){return A7b;}
function ADx(){var a=this;B.call(a);a.qI=null;a.qJ=null;}
function ASX(a){var b,c;b=a.qI;c=a.qJ;It(b.M,c);JV(c);}
function Ub(){var a=this;CB.call(a);a.f8=null;a.hC=null;a.jG=null;a.ey=null;a.kI=0.0;a.eI=0;a.ik=0;a.dU=null;a.mF=null;}
function Vn(a){var b;if(Ob(a))return 0;ACg(a);b=Cy(a.f8,a.kI);return EA(a.ey)+(b*2|0)|0;}
function RN(a){var b;b=a.k;return b.a&&b.b?0:1;}
function Ob(a){return a.hC!==null&&a.jG!==null?0:1;}
function QB(a,b){a.k.b=b;}
function QF(a,b,c,d,e){var f,g;f=a.f8.dV;X(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ACg(a){if(a.ey===null)a.ey=Fi(a.f8,a.hC);}
function Ii(){HY.call(this);this.eD=null;}
function P2(a,b){E2(a);a.eD=AVW(b);}
function AXT(a,b){a.b0.data[0].cy(b);a.b0.data[2].cy(b);a.b0.data[1].cy(b);}
function APT(a){var b,c,d,e,f;b=Cg(20.0,a.bR);c=a.k.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AJS(a.i);f=BF(d,a.k.b);a.b0.data[0].dz(e,f,a.bR);e.a=a.i.a+c|0;a.b0.data[2].dz(e,f,a.bR);e.a=a.i.a+d|0;f.a=c-d|0;a.b0.data[1].dz(e,f,a.bR);}
function AFK(){var a=this;Ii.call(a);a.es=null;a.eq=null;a.kz=null;a.lQ=null;a.vo=null;}
function A0_(a){var b=new AFK();AZj(b,a);return b;}
function AZj(a,b){var c,d;P2(a,b);a.es=TF(b);a.eq=TF(b);a.kz=GH(a.es,b);a.lQ=GH(a.eq,b);c=ALX(a.kz,a.es);d=ALX(a.lQ,a.eq);Oc(a.eD,c,d);a.vo=AHl(c,d);Mw(a,I(CB,[a.kz,a.eD,a.lQ]));}
function ACT(a,b){a.eD.im=b;J7(a.es,b);JD(a.es,a.kz);J7(a.eq,b);JD(a.eq,a.lQ);}
function AAR(a,b){a.vo.gX=b;a.eD.ep=b;}
function Ho(){var a=this;B.call(a);a.er=null;a.jc=null;a.ov=null;a.hi=null;a.jQ=0;a.hz=0;a.hx=0;}
function A8P(a,b){var c=new Ho();SR(c,a,b);return c;}
function SR(a,b,c){a.hi=XG(b);a.jQ=c;a.hz=0;}
function GB(a){return (JS(a.hi,0)).v;}
function AEd(a){a.hz=60084;}
function I9(a){return a.hz!=60084?0:1;}
function AE_(a){a.hz=60086;}
function AFj(a){a.hx=60035;}
function Lu(a){a.hx=60027;}
function QO(a){a.hx=60137;}
function IT(a){a.hx=60151;}
function Dg(){Ho.call(this);this.fa=null;}
var A8Q=null;var A8R=null;function AKm(a,b){var c=new Dg();J5(c,a,b);return c;}
function J5(a,b,c){SR(a,b,c);a.fa=A8Q;}
function A18(a){return GB(a);}
function AKV(a){var b,c,d;b=Q(Ho,ADQ(a));c=b.data;if(Q0(a,b,0)==c.length)return b;d=new Bu;Y(d);N(d);}
function Ji(a){return a.fa.data.length;}
function ADQ(a){var b,c,d,e;b=1;if(I9(a)){c=a.fa.data;d=c.length;e=0;while(e<d){b=b+ADQ(c[e])|0;e=e+1|0;}}return b;}
function OH(a){var b,c,d,e;b=1;c=a.fa.data;d=c.length;e=0;while(e<d){b=b+OH(c[e])|0;e=e+1|0;}return b;}
function Q0(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(I9(a)){d=a.fa.data;c=d.length;f=0;while(f<c){e=Q0(d[f],b,e);f=f+1|0;}}return e;}
function NT(a){AEd(a);IT(a);}
function IF(a){AE_(a);AFj(a);}
function Ud(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Oo(GB(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AGf(){A8Q=Q(Dg,0);A8R=new AD4;}
function Sz(){B.call(this);this.sR=null;}
function AVR(a){H5(a.sR,1);}
function Sy(){B.call(this);this.vc=null;}
function AUt(a){H5(a.vc,0);}
var ZY=G(Es);
var A8S=null;function De(b,c){return Long_udiv(b, c);}
function AIf(b,c){return Long_urem(b, c);}
function DF(b,c){return Long_ucompare(b, c);}
function AI_(){A8S=F($rt_longcls());}
function AB2(){B.call(this);this.vL=null;}
function A2y(a,b){DH(a.vL,b);}
function ADW(){B.call(this);this.Br=null;}
function AYg(a){Y4(a.Br);}
function Xo(){B.call(this);this.yY=null;}
function AVu(a){var b;b=a.yY;EH(b.M,YN(b));}
function UM(){B.call(this);this.vw=null;}
function A0L(a){RQ(a.vw);}
function ABo(){B.call(this);this.n8=null;}
var A8O=null;function AO$(){var a=new ABo();AEW(a);return a;}
function AEW(a){a.n8=BM();}
function V8(a,b,c,d,e){var f;f=new K_;f.tV=e;f.lu=c;f.lM=d;f.hK=b;BB(a.n8,f);}
function AC4(a){return Go(a.n8,A8O);}
function AAt(b){return b===null?C(21):ACj(b);}
function AKU(){A8O=Q(K_,0);}
function J2(){var a=this;B.call(a);a.tl=null;a.lb=null;a.kK=null;a.ju=null;a.jY=null;a.jv=null;a.g0=null;}
function MK(b,c,d,e){var f,g,h;f=new J2;f.ju=new Bg;f.jY=new Bg;f.jv=new Bg;f.g0=b;g=Cq(e,b.hK);if(g!==null)g.iO=g.iO+1|0;else{g=new ACB;h=Ks(c,b.hK,d);g.iO=1;g.l9=h;Ep(e,b.hK,g);}e=g.l9;f.tl=e;X(f.ju,e.bf|0,e.bC|0);e=Ks(c,b.lu,d);f.lb=e;X(f.jY,e.bf|0,e.bC|0);b=Ks(c,b.lM,d);f.kK=b;X(f.jv,b.bf|0,b.bC|0);return f;}
function ACv(b,c,d){var e,f,g;e=c.g0.hK;f=Cq(d,e);g=f.iO-1|0;f.iO=g;if(!g){Ls(d,e);IZ(b,f.l9);}IZ(b,c.lb);IZ(b,c.kK);}
var Ow=G(0);
var A7Q=null;var A7R=null;function AF5(){A7Q=EX(40,40,40,200);A7R=EX(43,43,43,128);}
function Ll(){var a=this;Fn.call(a);a.gj=null;a.cs=null;a.e3=null;a.hW=null;a.gt=null;a.lW=null;a.mH=null;a.AO=0;a.q9=0;a.ot=0;a.gd=null;a.ge=null;a.g9=null;a.hN=null;a.hS=null;a.jj=null;a.gF=null;a.rO=0;a.j9=0;}
function ARw(a){Op(a.hW);Ye(a.cs);OP(a);}
function OP(a){a.gd=BV(a.gd,null);a.ge=BV(a.ge,null);a.g9=BV(a.g9,null);a.hN=BV(a.hN,null);a.hS=BV(a.hS,null);a.jj=BV(a.jj,null);a.gF=BV(a.gF,null);}
function WY(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.g9;break a;case 60084:c=a.ge;break a;case 60086:c=a.gd;break a;case 60136:c=a.gF;break a;case 60137:c=a.jj;break a;case 60151:c=a.hN;break a;default:c=null;break a;}c=a.hS;}return c;}
function J7(a,b){var c,d;a.gt=b;c=BO(a.lW,b.pB);d=BO(a.mH,b.oN);if(!(c&&d)){a.lW=b.pB;a.mH=b.oN;if(a.bR!==0.0)SL(a);}}
function AMi(a,b,c){PY(a.cs,c);if(a.lW!==null)SL(a);}
function SL(a){var b,c,d,e,f;SO(a.hW);b=a.cs;c=a.lW;d=a.bR;e=a.gj.bH;f=b.g7;b.cW=AI3(c.h$,c.gY*d,c.j4,c.ki,f,e);Sj(a.cs,1.25,a.gj.bH);OP(a);b=Fi(a.gj,a.mH);a.gd=BV(a.gd,FB(a,60086,b));a.ge=BV(a.ge,FB(a,60084,b));a.g9=BV(a.g9,FB(a,60035,b));a.hN=BV(a.hN,FB(a,60151,b));a.hS=BV(a.hS,FB(a,60027,b));a.jj=BV(a.jj,FB(a,60137,b));a.gF=BV(a.gF,FB(a,60136,b));a.rO=Bd(Bd(Bd(Bd(BQ(a.g9),BQ(a.hN)),BQ(a.hS)),BQ(a.gF)),BQ(a.gF));a.j9=Bd(BQ(a.ge),BQ(a.gd));Pl(a);}
function Pl(a){S2(a,a.cJ.a,Bc(a.e3.fy.data.length,a.cs.d4));Te(a);}
function AYM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=a.gt.br.ef;d=a.i;Bs(b,d.a,d.b,a.k,c);BJ(a.cs.cW);e=a.cs.d4;f=a.e3.fy.data.length;if(!f)return;g=Be(f,H9(a.k.b,e)+7|0);h=a.hW;if(h.data.length<g)a.hW=Zf(g,h,a.cs,a.AO,a.q9,a.e3);Nz(b,a.i,a.k);i=a.U.b;j=f-1|0;k=AGb(i,e,j);i=AGb((a.U.b+a.k.b|0)-1|0,e,j);a.AO=k;a.q9=i;j=a.k.a;l=Dy(a,4.0);m=Dy(a,1.0)+a.j9|0;n=Dy(a,3.0);o=Dy(a,5.0);p=Dy(a,1.0);q=0;r=a.i.a-a.U.a|0;s=Dy(a,1.0);d=a.ff;t=s+(d===null?0:FN(d))|0;while(k<=i){u=a.e3.fy.data[k];h
=a.hW.data;s=k%h.length|0;v=h[s];Xs(v,u.hi,b,e,j,0,k,s);w=Bc(e,k)-a.U.b|0;x=null;y=l+Bc(m,u.jQ)|0;z=a.ot!=k?0:1;if(z){X(a.gj.dV,a.k.a,e);d=a.i;Bs(b,d.a,d.b+w|0,a.gj.dV,a.gt.br.gq);}ba=WY(a,u.hz);bb=WY(a,u.hx);if(ba!==null){d=a.gt;bc=d.jL.data[0];AD6(a,b,ba,r+y|0,(a.i.b+w|0)-p|0,!z?c:d.br.gq,bc.g5);}if(bb!==null){d=a.gt;bc=d.jL.data[0];AD6(a,b,bb,((r+y|0)+a.j9|0)+n|0,(a.i.b+w|0)-p|0,!z?c:d.br.gq,bc.g5);}bd=FE(u.hi);be=(((y+a.j9|0)+n|0)+a.rO|0)+o|0;q=Bd(q,(be+bd|0)+t|0);Qh(v,a.i.b+w|0,r+be|0,b,j,e,0,a.gt,null,
null,null,z,0,x);k=k+1|0;}d=a.cJ;if(d.a!=q){d.a=q;Te(a);}Ga(b);}
function AD6(a,b,c,d,e,f,g){Cr(a.cs.jq,0.0,0.0,BQ(c),CO(c));Co(a.cs.ih,c.eT);Hc(a.cs,b,c,d,e,g,f);}
function A1t(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cs.d4;f=((b.j.b-a.i.b|0)+a.U.b|0)/e|0;if(f>=0){g=a.e3.fy.data;if(f<g.length){h=g[f];if(!Wp(a,b,f)){b=h.ov;if(b!==null)b.f();}}}}return 1;}
function ANe(a,b,c){var d,e,f,g;d=a.cs.d4;e=((b.j.b-a.i.b|0)+a.U.b|0)/d|0;if(!c&&e>=0){f=a.e3.fy.data;if(e<f.length){g=f[e];if(Wp(a,b,e)){b=g.jc;if(b!==null)b.f();}else{a.ot=e;b=g.er;if(b!==null)b.f();}}}return A7b;}
function Wp(a,b,c){var d,e,f,g,h,i,j;d=a.e3.fy.data[c];e=Dy(a,4.0);f=Dy(a,1.0);g=Bd(BQ(a.ge),BQ(a.gd));h=e+Bc(f+g|0,d.jQ)|0;i=(a.i.a-a.U.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FB(a,b,c){var d,e,f;d=a.gj.bH;e=NB(b);f=a.cs;return ADh(d,e,c,1,f.d4,f.iN);}
function AGb(b,c,d){return Be(b/c|0,d);}
function AJl(){Ll.call(this);this.rn=null;}
function TF(a){var b=new AJl();ATd(b,a);return b;}
function ATd(a,b){LJ(a);a.e3=AMr(Q(Ho,0));a.hW=Q(Fq,0);a.ot=(-1);a.gj=b;a.cs=APN(b.cA);}
function EK(a){a.e3=AMr(AKV(a.rn));if(a.bR!==0.0)Pl(a);}
function ES(a,b){a.rn=b;EK(a);}
function JD(a,b){var c;c=a.gt.br;Jf(b,c.lF,c.lK);return b;}
function AF1(){var a=this;B.call(a);a.nx=null;a.f0=null;}
function ALX(a,b){var c=new AF1();AM4(c,a,b);return c;}
function AM4(a,b,c){a.nx=b;a.f0=c;}
function ASS(a){return a.f0.U.b/Mz(a)|0;}
function A1E(a){var b;b=a.f0;return H9((b.U.b+b.k.b|0)-1|0,Mz(a));}
function ATE(a,b){var c;b=Bc(b,Mz(a));c=a.f0;return (b+c.i.b|0)-c.U.b|0;}
function API(a){return a.f0.i;}
function AVf(a){return a.f0.k;}
function AQg(a,b,c){var d;d=a.nx;d.uf=b;d.rb=c;}
function AY2(a,b){return ACQ(a.nx,b);}
function Mz(a){return a.f0.cs.d4;}
function ABy(){var a=this;B.call(a);a.nw=FH;a.mJ=0;a.q3=0;}
var W$=G();
function ATW(a){}
function SA(){var a=this;B.call(a);a.A_=null;a.A8=null;a.A9=null;}
function APM(a){var b,c,d,e,f;b=a.A_;c=a.A8;d=a.A9;e=Bt();f=new K;M(f);b=H(f,b);BN(b,9);b=H(b,c);BN(b,9);H(b,d);Bk(e,L(f));}
function P1(){B.call(this);this.y0=null;}
function ALW(a,b){var c;c=a.y0;LA(c,FT(b,c.bP.cJ.b-c.k.b|0));}
function P0(){B.call(this);this.zI=null;}
function AMb(a,b){var c;c=a.zI;K8(c,FT(b,c.bP.cJ.a-c.k.a|0));}
var AD4=G();
function ASm(a,b,c){b=b;c=c;return Oo(GB(b),GB(c));}
function K_(){var a=this;B.call(a);a.tV=null;a.lu=null;a.lM=null;a.hK=null;}
function AK2(){G0.call(this);this.fy=null;}
function AMr(a){var b=new AK2();ANP(b,a);return b;}
function ANP(a,b){a.fy=b;}
function A2N(a,b){return a.fy.data[b].hi;}
var C$=G(Bu);
var AKb=G(Fy);
function AWp(a){var b=new AKb();AQt(b,a);return b;}
function AQt(a,b){a.kG=1;a.k3=1;a.nn=b;}
function AK8(){var a=this;B.call(a);a.oF=null;a.mS=null;a.eN=null;a.mE=null;a.by=null;a.pv=null;a.nG=null;a.fX=null;a.gQ=null;a.jH=null;}
function AT4(a,b){var c=new AK8();AYI(c,a,b);return c;}
function AYI(a,b,c){var d,e,f;a.eN=b;a.mE=c;a.by=AVP();b=new K;M(b);a.jH=b;a.fX=JQ();b=new SD;d=AKL(16);b.gJ=0;b.d0=Q(Jz,d);b.x0=0.75;Ug(b);a.gQ=b;b=new Uu;c=a.by;e=a.jH;f=a.fX;b.dC=c;b.ms=e;b.sY=f;a.pv=b;b=new Uc;b.cY=c;b.ne=e;b.sa=f;a.nG=b;}
function WZ(a){var b,c,d,e,f,g,h;a:{b=M7(a.eN.fc);c=b.jh;if(c.c8>0){d=c.c0;e=0;b:while(true){f=b.jh.b9.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cV;if(MU(a.fX,g))Cq(a.fX,g);else{h=a.fX;Ep(h,g,CY(h.c8));}c=c.cX;if(d!=b.jh.c0)break b;}e=e+1|0;}b=new H_;Y(b);N(b);}}b=a.eN.fC;if(b!==null)Zy(a,b);Bq(a.by,a.eN.fc.c8);b=So(M7(a.eN.fc));while(Gh(b)){c=Ql(b);G3(a.by,a.jH.L,J(c));BY(a.jH,c);}b=So(M7(a.eN.fc));while(Gh(b)){c=Ql(b);c=Cq(a.eN.fc,c);Bq(a.by,c.q);c=B7(c);while(B_(c)){g=Ca(c);g=Cq(a.fX,g);Bq(a.by,
g.bp);}}if(a.eN.fC===null)Bq(a.by,(-1));else{Bq(a.by,a.gQ.gJ);AAg(a,a.eN.fC);}if(a.mE===null)Bq(a.by,(-1));else{Bq(a.by,1);AEx(a.mE,a.by,a.gQ);}a.oF=QY(a.by);a.mS=Gs(L(a.jH));}
function Zy(a,b){var c,d,e,f,g,h;if(ACG(a.gQ,b))Om(a.gQ,b);else{c=a.gQ;d=CY(c.gJ);if(b===null){e=Y6(c);if(e===null){c.l8=c.l8+1|0;e=ACK(c,null,0,0);f=c.gJ+1|0;c.gJ=f;if(f>c.pw)WT(c);}}else{g=MB(b);h=g&(c.d0.data.length-1|0);e=W4(c,b,h,g);if(e===null){c.l8=c.l8+1|0;e=ACK(c,b,h,g);f=c.gJ+1|0;c.gJ=f;if(f>c.pw)WT(c);}}e.cS=d;}b=b.cL;if(b===null)return;c=new VI;c.sb=a;b.fl(c);}
function AAg(a,b){var c,d,e,f;c=(Om(a.gQ,b)).bp;Bq(a.by,c);if(b instanceof NJ)Bq(a.by,(-1));else if(!(b instanceof Lb))Bq(a.by,0);else Bq(a.by,1);d=a.pv;Bq(d.dC,b.eZ.c2());e=b.eZ;f=new V7;f.v6=d;e.fl(f);d=a.nG;Bq(d.cY,b.fD.c2());e=b.fD;f=new TU;f.uD=d;e.fl(f);d=b.ln;Bq(a.by,d.c2());e=new UI;e.AX=a;d.fl(e);d=b.hO;Bq(a.by,d.c2());d=d.b$();while(d.cD()){e=d.b_();Pf(a.pv,e.lp);He(a.nG,e.kP);Bq(a.by,e.rT);}d=b.uz;if(d===null)Bq(a.by,(-1));else Bq(a.by,(Cq(a.fX,d)).bp);b=b.cL;Bq(a.by,b.c2());d=new Qi;d.qx=a;b.fl(d);}
function OO(){B.call(this);this.Aw=null;}
function AUq(a,b){var c,d,e,f,g,h,i,j;c=a.Aw;if(c.fO){d=E1(c);e=new K;M(e);H(H(e,d),C(438));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CQ(b[0]);g=EP(b[1]);h=(CQ(b[2])).data[0];if(c.h.cq==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=EP(b[4]);}b=Ea(c);if(!Bj(b,C(180))&&!Bj(b,C(427))?0:1)N5(c.h,f,g);else{Wg(c.h,f,g,i,j);Fx(c.h.dF);Fx(c.h.dM);M_(c.h);KD(c.h);Oi(c);}}}
function ACA(){B.call(this);this.si=null;}
function AYX(a,b){var c,d,e,f;c=a.si;if(c.fd!=3){b=b.data;d=CQ(b[0]);e=EP(b[1]);Wg(c.h,d,e,null,null);if(c.fO){b=E1(c);f=JK(E3(),c.Ar);c=new K;M(c);H(HK(H(H(c,b),C(439)),f),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}
var Oe=G(BH);
function Se(){var a=this;B.call(a);a.v0=null;a.v1=null;a.vZ=0;}
function AWL(a,b){var c,d,e;c=a.v0;d=a.v1;e=a.vZ;d.g(UV(c,(b.j.a+e|0)-c.e8.a|0));}
function Sd(){var a=this;B.call(a);a.rR=null;a.rP=null;a.rQ=0;}
function A1W(a,b){var c,d,e;c=a.rR;d=a.rP;e=a.rQ;d.g(QH(c,(b.j.b+e|0)-c.e8.b|0));}
var Fg=G(0);
function W5(){var a=this;B.call(a);a.jU=0;a.p8=0;a.lB=0;a.hT=0;a.jg=null;}
function B_(a){return a.jU>=a.lB?0:1;}
function Ca(a){var b,c;Qt(a);b=a.jU;a.hT=b;c=a.jg;a.jU=b+1|0;return c.kA(b);}
function Zo(a){var b,c,d;if(a.hT<0){b=new C$;Y(b);N(b);}Qt(a);a.jg.p9(a.hT);a.p8=a.jg.b3;c=a.hT;d=a.jU;if(c<d)a.jU=d-1|0;a.lB=a.lB-1|0;a.hT=(-1);}
function Qt(a){var b;if(a.p8>=a.jg.b3)return;b=new H_;Y(b);N(b);}
function Lf(){var a=this;On.call(a);a.xD=null;a.z9=null;}
function AHg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.xD;e=0;f=0;g=a.z9;a:{b:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ch(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BH;c=new K;M(c);U(H(U(H(c,C(440)),l),C(100)),h);Bm(b,L(c));N(b);}if(Ch(b)<m){b=new Oa;Y(b);N(b);}if(m<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bm(b,L(c));N(b);}n=b.Z;h=n+b.nh|0;e=0;while(e<m){o=k+1|0;i=b.pJ.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D9(c)){p=!D9(b)&&e>=f?A6H:A6G;break a;}i=g.data;n=Ch(c);o=i.length;n=Be(n,o);q=new AB8;q.tq=b;q.AT=c;p=AK7(a,d,e,f,g,0,n,q);e=q.v$;if(p===null&&0==q.mL)p=A6H;k=q.mL;h=0;if(c.qc){b=new Kr;Y(b);N(b);}if(Ch(c)<k)break;if(h>o){b=new BH;c=new K;M(c);BN(U(H(U(H(c,C(103)),h),C(97)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BH;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bm(b,L(c));N(b);}if(k<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bm(b,L(c));N(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;AAc(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new JF;Y(b);N(b);}b=new BH;c=new K;M(c);BN(U(H(U(H(c,C(103)),k),C(97)),h),41);Bm(b,L(c));N(b);}Fv(b,b.Z-(f-e|0)|0);return p;}
var SY=G(Lf);
function AK7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Nu(h,2))break a;i=A6H;break a;}c=k+1|0;n=j[k];if(!Gy(a,n)){c=c+(-2)|0;i=Eu(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Nu(h,3))break a;i=A6H;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gy(a,n))break b;if(!Gy(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ot(p)){c=k+(-3)|0;i=Eu(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eu(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Nu(h,4))break a;i=A6H;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ch(h.AT)<2?0:1)break a;i=A6G;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gy(a,n))break c;if(!Gy(a,o))break c;if(!Gy(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JP(r);m=c+1|0;j[c]=Jc(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eu(1);break a;}c=k+(-3)|0;i
=Eu(1);}h.v$=c;h.mL=f;return i;}
function Gy(a,b){return (b&192)!=128?0:1;}
function Yd(){var a=this;B.call(a);a.Dc=null;a.C_=null;a.Da=null;}
function Vt(){B.call(this);this.qM=null;}
function ATp(a,b){var c,d;c=a.qM;d=c.eb+1|0;c.eb=d;c=new K;M(c);H(H(U(c,d),C(441)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function O6(){B.call(this);this.uS=null;}
function AR4(a){return a.uS.hb();}
function O5(){B.call(this);this.t4=null;}
function AWx(a){return a.t4.hb();}
function AAn(){B.call(this);this.z7=null;}
function AZC(a){return a.z7.hb();}
var Xz=G();
function AUA(a){return GD(1);}
function Z5(){B.call(this);this.ta=null;}
function A2e(a,b){a.ta.g(H3(b));}
var AFI=G();
function ACy(){B.call(this);this.vE=null;}
function AOl(a,b){a.vE.f();}
var AHz=G();
var AGF=G();
function W2(){B.call(this);this.uV=null;}
function ANb(a,b){var c,d,e,f;c=a.uV;d=Cl(b);e=new K;M(e);H(H(e,C(442)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new ABE;d.CW=c;d.s6=b;e=new ABG;e.Fe=c;c=AKR(e);e=new ACo;e.xv=d;d=b.f9;if(d!==null)d.arrayBuffer().then(Bv(e,"f"),Bv(c,"f"));else{b=b.ij.getFile();f=new ACq;f.AL=e;f.AM=c;b.then(Bv(f,"f"),Bv(c,"f"));}}
function W1(){B.call(this);this.xs=null;}
function ASy(a,b){var c,d,e;c=a.xs;d=Cl(b);e=new K;M(e);H(H(e,C(443)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new PI;d.Cg=c;Nh(b,d);}
function AA4(){B.call(this);this.rc=null;}
function ALm(a){EK(a.rc);}
var AE1=G();
function PE(b,c,d){return AGv(b,0,c,d,UF());}
function AGv(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BL(c,d);h=g>=0?0:1+QU(f,2.0)|0;i=g>0?0:1+QU(f,3.0)|0;j=Q(Dg,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(444)),g);k[g]=AGv(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dg;n=new K;M(n);U(H(n,C(445)),g);J5(m,L(n),l);n=new Re;n.ty=m;m.ov=n;switch((l+g|0)%3|0){case 0:break;case 1:QO(m);break a;case 2:m.hx=60136;break a;default:break a;}Lu(m);}if(UH(f)<0.25){n=JS(m.hi,0);n.bF=n.bF|2;}k[h+g|0]=m;g=g+1|0;}n=new Dg;SR(n,b,c);n.fa=A8Q;n.fa=j;b=new Wy;b.wt
=n;b.wv=e;n.jc=b;n.er=b;if((c+c|0)>d)IF(n);else NT(n);return n;}
function AA5(){B.call(this);this.tf=null;}
function AOG(a){EK(a.tf);}
function Tb(){B.call(this);this.s4=null;}
function ATk(a){EK(a.s4);}
function RP(){B.call(this);this.AW=null;}
function AYt(a){RQ(a.AW);}
function ACD(){var a=this;B.call(a);a.q2=null;a.q4=null;}
function A2m(a){var b,c;b=a.q2;c=a.q4;DS(b);c.f();}
function QG(){var a=this;B.call(a);a.gc=null;a.kC=null;a.i6=null;a.qe=null;a.dg=null;a.lP=0;}
function AAk(a,b){if(!BO(b.oA,a.qe)){a.qe=b.oA;NQ(a);}}
function NQ(a){a.dg=BV(a.dg,null);}
function AGk(a,b){var c,d;c=Fi(b,a.qe);d=EA(c);a.dg=BV(a.dg,ADh(b.bH,NB(60088),c,0,d,0));}
function S4(a,b){return a.dg!==null&&Gj(b,a.gc,a.kC)?1:0;}
function PS(){var a=this;B.call(a);a.tY=null;a.tZ=null;}
function ANC(a){var b,c;b=a.tY;c=a.tZ;It(b.dk,c);JV(c);b.b5();}
function PT(){B.call(this);this.xL=null;}
var Eg=G(Bu);
function AG3(){var a=this;B.call(a);a.jo=null;a.nF=0;a.f5=0;}
function AVP(){var a=new AG3();AT3(a);return a;}
function AT3(a){a.nF=0;a.jo=BP(16);a.f5=0;}
function G3(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.jo;d=c.data.length;if(d==a.f5)a.jo=Jh(c,d*2|0);c=a.jo.data;d=a.f5;a.f5=d+1|0;c[d]=b;}
function QY(a){var b,c,d,e,f;b=a.nF;if(b&&a.f5!=b){c=En();b=a.nF;d=a.f5;e=new K;M(e);H(U(H(U(H(e,C(446)),b),C(447)),d),C(448));Bk(c,L(e));}f=a.jo;b=f.data.length;d=a.f5;if(b!=d)f=Jh(f,d);return f;}
function SD(){var a=this;Ee.call(a);a.gJ=0;a.d0=null;a.l8=0;a.x0=0.0;a.pw=0;}
function AKL(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ug(a){a.pw=a.d0.data.length*a.x0|0;}
function ACG(a,b){return Vv(a,b)===null?0:1;}
function Om(a,b){var c;c=Vv(a,b);if(c===null)return null;return c.cS;}
function Vv(a,b){var c,d;if(b===null)c=Y6(a);else{d=MB(b);c=W4(a,b,d&(a.d0.data.length-1|0),d);}return c;}
function W4(a,b,c,d){var e;e=a.d0.data[c];while(e!==null&&!(e.nA==d&&(b!==e.cV?0:1))){e=e.ip;}return e;}
function Y6(a){var b;b=a.d0.data[0];while(b!==null&&b.cV!==null){b=b.ip;}return b;}
function ACK(a,b,c,d){var e,f;e=new Jz;VO(e,b,null);e.nA=d;f=a.d0.data;e.ip=f[c];f[c]=e;return e;}
function WT(a){var b,c,d,e,f,g,h,i;b=a.d0.data.length;b=AKL(!b?1:b<<1);c=Q(Jz,b);d=c.data;e=0;f=b-1|0;while(true){g=a.d0.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nA&f;i=h.ip;h.ip=d[b];d[b]=h;h=i;}e=e+1|0;}a.d0=c;Ug(a);}
function Uu(){var a=this;B.call(a);a.dC=null;a.ms=null;a.sY=null;}
function Pf(a,b){var c;if(!(b instanceof Mf)){Bq(a.dC,3);ADj(a,b);Bq(a.dC,b.jt);}else{c=b;Bq(a.dC,5);ADj(a,c);Bq(a.dC,c.jt);Bq(a.dC,c.wM);b=c.kZ;Bq(a.dC,b.q);c=new WA;c.ra=a;Fr(b,c);}}
function ADj(a,b){var c;c=b.eG.jC;G3(a.dC,a.ms.L,J(c));Bq(a.dC,b.eG.dG);OK(a,b.ma);BY(a.ms,c);}
function OK(a,b){if(b===null)Bq(a.dC,(-1));else Bq(a.dC,(Cq(a.sY,b)).bp);}
function Uc(){var a=this;B.call(a);a.cY=null;a.ne=null;a.sa=null;}
function He(a,b){var c,d,e;if(b instanceof HH){c=b;Bq(a.cY,9);YD(a,c.hu);}else if(b instanceof Ke){d=b;Bq(a.cY,3);Y_(a,d);Bq(a.cY,d.qF);YD(a,d.id);}else if(b instanceof Jk){e=b;Bq(a.cY,4);He(a,e.jR);He(a,e.i9);}else if(b===null)Bq(a.cY,(-1));else{Bq(a.cY,5);Y_(a,b);Bq(a.cY,b.zY);}}
function Y_(a,b){var c;c=b.fS.jC;G3(a.cY,a.ne.L,J(c));Bq(a.cY,b.fS.dG);b=b.gI;if(b===null)Bq(a.cY,(-1));else Bq(a.cY,(Cq(a.sa,b)).bp);BY(a.ne,c);}
function YD(a,b){var c;Bq(a.cY,b.q);c=new VR;c.xt=a;Fr(b,c);}
function WF(){var a=this;B.call(a);a.yQ=0;a.yP=0;}
function SN(){B.call(this);this.su=null;}
function ASA(a,b){var c;c=a.su;DH(c,b);HB(c,null);Vs(c);}
var Yv=G(Es);
var A8T=null;function AIG(){A8T=F($rt_doublecls());}
var J6=G();
var A8U=FH;var A8V=null;var A8W=null;function AFO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.q3=II(Df(d,D(0, 2147483648)),FH)?0:1;e=Df(d,D(4294967295, 1048575));f=GR(A4L(d,52))&2047;if(II(e,FH)&&!f){c.nw=FH;c.mJ=0;return;}if(f)e=A3q(e,D(0, 1048576));else{e=HP(e,1);while(II(Df(e,D(0, 1048576)),FH)){e=HP(e,1);f=f+(-1)|0;}}g=A8W.data;h=f<<16>>16;i=0;j=g.length;k=BL(i,j);if(k>0){c=new BU;Y(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BL(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IS(e,A8V.data[h],i);if(ANI(m,A8U)){while(DF(m,A8U)<=0){j=j+(-1)|0;m=CS(Ci(m,Bp(10)),Bp(9));}g=A8W.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IS(e,A8V.data[h],i);}e=HP(e,1);d=CS(e,Bp(1));g=A8V.data;h=j+1|0;n=g[h];f=i-1|0;n=IS(d,n,f);o=IS(JK(e,Bp(1)),A8V.data[h],f);p=Bp(1);while(true){q=Ci(p,Bp(10));if(DF(De(m,q),De(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ci(r,Bp(10));if(DF(De(m,s),De(n,s))>=0)break;r=s;}h=DF(p,r);e=h>0?Ci(De(m,p),p):h<0?CS(Ci(De(m,r),r),r):Ci(De(CS(m,AGI(r,Bp(2))),r),r);if(DF(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=De(e,Bp(10));if(DF(e,D(2808348672, 232830643))<0)break;}else if(DF(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ci(e,Bp(10));}c.nw=e;c.mJ=j-330|0;}
function IS(b,c,d){var e,f,g,h,i,j,k,l;e=Df(b,Bp(65535));f=Df(Gb(b,16),Bp(65535));g=Df(Gb(b,32),Bp(65535));h=Df(Gb(b,48),Bp(65535));i=Df(c,Bp(65535));j=Df(Gb(c,16),Bp(65535));k=Df(Gb(c,32),Bp(65535));l=Df(Gb(c,48),Bp(65535));return CS(CS(CS(HP(Ci(l,h),32+d|0),HP(CS(Ci(l,g),Ci(k,h)),16+d|0)),HP(CS(CS(Ci(l,f),Ci(k,g)),Ci(j,h)),d)),Gb(CS(CS(CS(Ci(k,e),Ci(j,f)),Ci(i,g)),HP(CS(CS(CS(Ci(l,e),Ci(k,f)),Ci(j,g)),Ci(i,h)),16)),32-d|0));}
function AFz(){A8U=De(Bp(-1),Bp(10));A8V=AIA([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A8W=A4d([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function TP(){B.call(this);this.rD=null;}
function AL1(a){Hf(a.rD,37,3);}
function TQ(){B.call(this);this.se=null;}
function AN1(a){Hf(a.se,40,3);}
function TR(){B.call(this);this.tx=null;}
function A1Y(a){Hf(a.tx,42,3);}
function TS(){B.call(this);this.xF=null;}
function AP_(a){Hf(a.xF,45,3);}
function TT(){B.call(this);this.x9=null;}
function ASg(a){Hf(a.x9,45,5);}
function OS(){B.call(this);this.Al=null;}
function A22(a,b){var c,d;c=a.Al;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var Vw=G(0);
var A6t=null;function A30(){A30=Bn(Vw);AZU();}
function AZU(){A6t=new $rt_globals.TextDecoder("utf-16");}
function PC(){CB.call(this);this.AZ=null;}
function ALR(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.AZ);}
function ABP(){var a=this;B.call(a);a.tj=0;a.B8=0;}
function FT(a,b){var c;c=a.B8;if(c<=0)return 0;return YJ(a.tj,b,c);}
function Re(){B.call(this);this.ty=null;}
function AY0(a){var b,c,d;b=a.ty;c=Bt();d=GB(b);b=new K;M(b);H(H(b,C(449)),d);Bk(c,L(b));}
var Tv=G(0);
var A68=null;function AOW(){AOW=Bn(Tv);ATJ();}
function ATJ(){A68=S(C(259));}
function Wy(){var a=this;B.call(a);a.wt=null;a.wv=null;}
function AYW(a){var b,c;b=a.wt;c=a.wv;if(!I9(b))NT(b);else IF(b);c.f();}
function QX(){B.call(this);this.qD=null;}
function A0p(a,b){J9(a.qD,b);}
function QW(){B.call(this);this.BU=null;}
function AWz(a){return a.BU.r_;}
function W9(){var a=this;B.call(a);a.qw=null;a.yN=null;a.vb=0;a.v7=0;}
function N9(a,b){return Ch(a.yN)<b?0:1;}
var AG$=G();
function AEv(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEn(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ev()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Tg;d.addEventListener("change",Bv(e,"handleEvent"));d.click();}
function ST(){var a=this;B.call(a);a.bu=null;a.rv=null;a.i_=null;a.ol=null;a.ml=null;a.go=null;}
function HT(a){return a.bu.cK.e2;}
function V2(a){var b;b=new SB;b.Bw=a;return b;}
function AJb(a){var b,c,d,e,f;b=Q(BC,5);c=b.data;d=a.bu;BJ(d);e=new VG;e.zZ=d;c[0]=C9(C(450),e);e=a.bu;BJ(e);f=new VB;f.xx=e;c[1]=C9(C(451),f);d=a.bu;BJ(d);e=new VC;e.x_=d;c[2]=C9(C(452),e);d=a.bu;BJ(d);e=new VD;e.vX=d;c[3]=C9(C(453),e);d=a.bu;BJ(d);e=new VE;e.qA=d;c[4]=C9(C(454),e);return CR(b);}
function Qs(a,b){var c;c=new PH;c.wh=a;c.wi=b;return c;}
function KF(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DS(a.go.bY);d=a.bu.d;e=Ea(d);f=HD(d);g=a.bu.fz;if(c===null)h=null;else{A43();switch(A8X.data[c.fQ]){case 1:h=Oq(g,e,f);break a;case 2:h=Zc(g,e,f);break a;default:}b=new E4;Y(b);N(b);}}c=a.bu;e=Fw(c,b);g=I$(c.d.h,e.bq,e.bv);f=SI(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new R4;e.Dv=c;e.Du=b;e.Dt=f;h.tG(g,i,j,e,c.j5);}else{e=Cq(c.d.h.dM,g);if(e!==null)IV(c,e);else{e=Cq(c.d.h.dF,g);if(e!==null&&!ED(e))Zn(c.kN,b,e,c,f);else{c=c.kN;k=Q(BC,1);l=k.data;e=new BC;f=c.bY;BJ(f);g
=new AAW;g.Bg=f;CC(e,g,C(455));l[0]=e;Ld(c,b,CR(k));}}}}
var AEK=G(0);
function RY(){B.call(this);this.tU=null;}
function AXF(a){Mk(a.tU);}
function ACR(){var a=this;B.call(a);a.w0=null;a.wZ=null;}
function ATS(a){FL(a.w0,a.wZ);}
var Yn=G();
var A8Y=null;function N5(b,c,d){Rp(b,c,d,0);}
function Rp(b,c,d,e){Xn(b,c,d,null,null,e);}
function Xn(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=L5(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CK(b);c=b.B;if(c.data.length<i)b.B=AE3(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fg=h.fg+n|0;}else b.B.data[m]=D7(Y0(h,d,0));m=m+1|0;}M_(b);if(j)b.dh=AGN(AHE(h));Fx(b.dM);Fx(b.dF);o=b.dM;g=0;while(g<k){Ep(o,DR(Bb(h),Bb(h)),DR(Bb(h),Bb(h)));g=g+1|0;}p=b.dM;o=b.dF;q=Xr(AB7(p));while(Gh(q)){r=ADL(q);s=r.cV;p=r.cS;BJ(A8Y);r=Cq(o,p);if(r===null){r=BM();Ep(o,p,r);}BB(r,s);}if(o.o3===null){p=new Qx;p.wg=o;o.o3=p;}p=o.o3;r=new Zv;NL(r,
p.wg);while(Gh(r)){NX(r);o=r.he.cS;p=A5Z;c=Q(B,o.q);d=c.data;Go(o,c);K1(c,p);g=0;t=d.length;while(g<t){p=d[g];Kx(o,g);o.cH.data[g]=p;g=g+1|0;}}Rk(h);if(e!==null&&f!==null){p=AQD(e,f);PW(p);b.e6=AWc(p.pg,p.iS);b.dh=AGN(p.pD);}}
function Wg(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=L5(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=ADg(b,i);o=ADg(b,j);p=(IQ(Cd(b,n.a),n.b)).data[0].s;q=(IQ(Cd(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Y0(h,d,i);if(!r)g=LW(p,g);if(r==s)g=LW(g,q);t=n.a+r|0;u=D7(g);c=b.B.data;v=c[t];c[t]=u;if(!k&&Jo(v)==Jo(u)){t=0;while(t<Jo(v)){o=v.s.data[t];w=u.s.data[t];x=o.bZ;y=x!=5?0:1;if(!y&&x&&!w.bZ){w.bZ=x;w.bF=o.bF;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AHE(h);w=KR(i,j,(-1));Xb(b.dh,w,u);}else if(e!==null&&f!==null){v=AQD(e,f);PW(v);w=KR(i,j,(-1));Xb(b.dh,w,v.pD);n=b.e6;n.fC=b.dh.df.cm;n.fc=v.iS;}}Rk(h);}
function Y0(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=Q(Cx,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=Ec(EC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AKk(){A8Y=new Vg;}
var Zg=G(0);
var Pp=G(0);
var Ib=G();
function Z8(){Ib.call(this);this.Ay=null;}
function ABV(a,b){var c,d,e;c=0;while(true){d=a.Ay;if(d.kc===null)d.kc=B7(d.yr);if(!B_(d.kc))e=0;else{c=b.H(Ca(d.kc));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Rj=G(0);
function P4(){var a=this;B.call(a);a.Em=null;a.Eo=null;a.En=0;a.El=0;}
var ADu=G();
function AMj(a,b){b=b;b.cQ=BV(b.cQ,null);}
var AFR=G(0);
function AI3(b,c,d,e,f,g){f=f.data;f[Jl(0,0)]=Gx(g,b,c,d,0);f[Jl(0,1)]=Gx(g,b,c,d,2);f[Jl(1,0)]=Gx(g,b,c,e,0);f[Jl(1,1)]=Gx(g,b,c,e,2);return f[Jl(0,0)];}
function Jz(){var a=this;GX.call(a);a.nA=0;a.ip=null;}
var H_=G(Bu);
function ACa(){B.call(this);this.vt=null;}
function ASR(a,b){var c,d,e,f;c=a.vt;DS(c.c9.gn.bY);d=Bt();e=Cl(b);f=new K;M(f);H(H(f,C(456)),e);Bk(d,L(f));d=ASx(b,c);ES(c.c9.gp,d);d.jc.f();b=LX(b.hB,Fs(Hp(b),C(457)));DK(c.hj,b);}
var ADH=G();
function A0G(a,b){AEv(b);}
function ADG(){B.call(this);this.sI=null;}
function AWw(a,b){var c,d,e;c=a.sI;d=0;e=b.length;while(d<e){c.g(AJ5(b[d],null));d=d+1|0;}}
var AC8=G();
function AXk(a,b){AEv(b);}
function AC7(){var a=this;B.call(a);a.sj=null;a.sk=null;}
function AXQ(a,b){var c,d,e;c=a.sj;d=a.sk;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.g(A3Q(b,d,Q(BK,0),Q(BK,0)));}
function ABR(){var a=this;B.call(a);a.vA=null;a.vx=null;a.vy=null;}
function APR(a,b,c,d){var e,f,g,h;b=a.vA;e=a.vx;f=a.vy;ABc(b,e);if(f!==null)d.mU.f();if(AB6(d)){f=d.fm;g=e.c3;h=e.f6;U$(b,BF((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nd,e,d.tE);}}
function AKg(){var a=this;B.call(a);a.iy=null;a.fg=0;}
function L5(a){var b=new AKg();AUF(b,a);return b;}
function AUF(a,b){a.iy=b;a.fg=0;}
function Bb(a){var b,c;b=a.iy.data;c=a.fg;a.fg=c+1|0;return b[c];}
function Rk(a){var b,c,d,e;if(a.fg!=a.iy.data.length){b=En();c=a.iy.data.length;d=a.fg;e=new K;M(e);H(U(H(U(H(e,C(446)),c),C(458)),d),C(459));Bk(b,L(e));}}
function Q6(){var a=this;B.call(a);a.Dd=null;a.tX=0;}
function AVv(a,b){var c,d,e,f;c=a.tX;d=(CQ(K3(b,0))).data;b=Bt();e=d[0];f=new K;M(f);U(H(U(H(f,C(460)),c),C(461)),e);Bk(b,L(f));b=Bt();e=d[1];f=new K;M(f);U(H(U(H(f,C(460)),c),C(462)),e);Bk(b,L(f));}
function AEq(){B.call(this);this.Pd=null;}
var Tg=G();
function AU0(a,b){}
var Vg=G();
var FM=G();
var A8Z=null;var A80=null;var A7j=null;var A81=null;var A82=null;var A83=null;function AJU(){A8Z=new T6;A80=new T3;A7j=new T4;A81=new T1;A82=new T2;A83=new V4;}
function AIm(){var a=this;B.call(a);a.pg=null;a.pD=null;a.iS=null;a.cC=null;a.oJ=null;a.m$=null;a.i$=null;a.nJ=null;a.py=null;}
function AQD(a,b){var c=new AIm();A1F(c,a,b);return c;}
function A1F(a,b,c){a.cC=L5(b);a.oJ=c;}
function PW(a){var b,c,d,e,f,g,h,i;b=Bb(a.cC);c=new NK;QM(c);a.iS=c;a.i$=BM();d=0;while(d<b){e=Bb(a.cC);f=Bb(a.cC);g=EC(a.oJ,e,f);Ep(a.iS,g,BM());BB(a.i$,g);d=d+1|0;}c=Xr(AB7(a.iS));while(Gh(c)){H1((ADL(c)).cS,Pj(a));}d=Bb(a.cC);if(d==(-1))a.pg=null;else{a.m$=Q(FX,d);c=new Wo;h=a.cC;i=a.oJ;g=a.i$;c.dN=h;c.zq=i;c.yW=g;a.nJ=c;c=new RD;c.ev=h;c.AY=i;c.Bb=g;a.py=c;a.pg=Rq(a,null);}if(Bb(a.cC)!=(-1))a.pD=Zs(a.cC,a.m$);}
function Rq(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cC);d=Bb(a.cC);e=a.nJ;f=Bb(e.dN);g=BM();h=0;while(h<f){BB(g,OX(e));h=h+1|0;}a:{switch(d){case -1:i=new NJ;i.hl=b;b=A7j;i.cL=b;i.fD=b;i.eZ=b;i.ln=b;i.hO=b;break a;case 0:i=A4f(b);break a;case 1:i=new Lb;AF8(i,b);H1(i.eZ,g);break a;default:}b=new C$;i=new K;M(i);U(H(i,C(463)),d);Bm(b,L(i));N(b);}i.eZ=g;b=a.py;d=Bb(b.ev);e=BM();j=0;while(j<d){BB(e,Ht(b));j=j+1|0;}i.fD=e;i.ln=Pj(a);d=Bb(a.cC);b=BM();j=0;while(j<d){e=OX(a.nJ);g=Ht(a.py);f=Bb(a.cC);k=new QN;k.lp=e;k.kP
=g;k.rT=f;BB(b,k);j=j+1|0;}i.hO=b;j=Bb(a.cC);i.uz=j==(-1)?null:BG(a.i$,j);d=Bb(a.cC);b=BM();j=0;while(j<d){BB(b,Rq(a,i));j=j+1|0;}i.cL=b;a.m$.data[c]=i;return i;}
function Pj(a){var b,c,d,e;b=Bb(a.cC);c=BM();d=0;while(d<b){e=Bb(a.cC);BB(c,BG(a.i$,e));d=d+1|0;}return c;}
function AEQ(){var a=this;B.call(a);a.l2=null;a.pu=null;}
function ALe(){var a=this;B.call(a);a.ED=0;a.DS=0;a.rJ=0;a.nj=0;}
function ADp(){var a=this;B.call(a);a.sz=null;a.sA=null;}
function AVg(a){var b,c,d,e,f,g;b=a.sz;c=a.sA;if(BO(c.l2,b.d.f_)){c=c.pu;CP(b,c.nj,c.rJ,0);Cf((Bi(b)).bN,c.nj,c.rJ);Cf((Bi(b)).bB,c.DS,c.ED);}else{d=(B3(b.fz.AQ)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GC(b);b=new YK;b.sZ=g;b.s0=c;BJ(b);c=new YP;c.wz=b;$rt_globals.setTimeout(Bv(c,"onTimer"),0);}}}
function ADq(){var a=this;B.call(a);a.Bu=null;a.Bt=null;}
function AXE(a){IV(a.Bu,a.Bt);}
function FX(){var a=this;B.call(a);a.hl=null;a.cL=null;a.fD=null;a.eZ=null;a.hO=null;a.ln=null;a.uz=null;}
function A4f(a){var b=new FX();AF8(b,a);return b;}
function AF8(a,b){a.hl=b;a.cL=BM();a.fD=BM();a.eZ=BM();a.ln=BM();a.hO=BM();}
function ADN(a){var b;b=a.hl;if(b!==null)b.cL.qZ(a);}
function VI(){B.call(this);this.sb=null;}
function AOq(a,b){b=b;Zy(a.sb,b);}
var NJ=G(FX);
var Lb=G(FX);
function UI(){B.call(this);this.AX=null;}
function AVj(a,b){var c;b=b;c=a.AX;Bq(c.by,(Cq(c.fX,b)).bp);}
function QN(){var a=this;B.call(a);a.lp=null;a.kP=null;a.rT=0;}
function Qi(){B.call(this);this.qx=null;}
function AYN(a,b){b=b;AAg(a.qx,b);}
var Qm=G(0);
var Fu=G(FA);
var No=G(Fu);
var T6=G(No);
var N3=G(Ee);
var T3=G(N3);
var Oh=G(Fo);
function AWr(a){var b;b=new Eg;Y(b);N(b);}
function AQs(a,b){var c;c=new Eg;Y(c);N(c);}
function APs(a,b){b=new Eg;Y(b);N(b);}
var T4=G(Oh);
function AQz(a,b){var c;c=new BH;Y(c);N(c);}
function APL(a){return 0;}
function ANH(a){return A81;}
function AL5(a){return 1;}
var T1=G();
function ALO(a){return 0;}
function AZA(a){var b;b=new Mt;Y(b);N(b);}
function ASq(a){var b;b=new C$;Y(b);N(b);}
var Yj=G(0);
var T2=G();
var V4=G();
function Rh(){var a=this;B.call(a);a.mP=0;a.sr=null;}
function A24(a,b){var c,d,e;c=a.sr;b=b;d=c.yQ;e=c.yP;d=b.a<=d&&e<=b.b?1:0;a.mP=d;return d?0:1;}
var Kr=G(Eg);
var JF=G(Bu);
var Oa=G(Bu);
function Yb(){B.call(this);this.zm=null;}
function AZB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.zm;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!ABp(b.h)){c=b.h;if(c.cq==e){e=b.qu;f=L5(d);Fx(c.dM);Fx(c.dF);M_(c);while(f.fg>=f.iy.data.length?0:1){if(Bb(f)==(-1))continue;g=Vy(c,Bb(f));h=Og(Cd(c,g.bq),g.bv);if(Bb(f)==(-1)){if(!e)continue;h.bZ=0;h.bF=h.bF|4;continue;}i=Vy(c,Bb(f));j=Bb(f);k=Bb(f);Ep(c.dM,g,i);l=c.dF;m=BM();if(Cq(l,i)===null)Ep(l,i,m);BB(Cq(c.dF,i),g);h.bZ=j;h.bF=k;}Lt(b);if(b.EG){n=JK(E3(),b.A6);if(A3m(n,Bp(100))){b=E1(b);c=new K;M(c);H(HK(H(H(c,
b),C(464)),n),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AHR(){B.call(this);this.Rr=null;}
function ABe(){B.call(this);this.vh=null;}
function AQi(a,b){Ml(a.vh,b);}
function Q5(){var a=this;B.call(a);a.yr=null;a.kc=null;}
function U_(){B.call(this);this.sC=null;}
function AXK(a,b){var c,d;c=a.sC;c.k7=b;HB(c.E,b.p5);HB(c.G,c.k7.p6);b=c.mu;d=c.k7;b.gX=d;c.fG.ep=d;}
var AEw=G();
function AET(b){var c,d,e,f,g,h,i,j;c=AVP();d=CK(b);Bq(c,d);e=0;f=0;while(f<d){g=Cd(b,f);h=Jo(g);Bq(c,h);i=0;while(i<h){j=JS(g,i);G3(c,e,L6(j));e=e+L6(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return QY(c);}
function AEC(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=Q(Gr,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new Gr;j.g_=h;e[g]=j;}else{j=new Gr;j.g_=h;j.nC=BP(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nC.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AIl(b,c,d,e){var f,g,h,i;f=E_(b);g=E_(c);h=AET(b);i=AET(c);b=new AAV;b.Bf=d;CV(e,b,C(465),I(B,[f,h,g,i]));}
function AAo(){var a=this;B.call(a);a.qN=null;a.qO=null;}
function AVh(a){var b,c;b=a.qN;c=a.qO;FL(b.bY.ck,c);AAZ(b);}
function G_(){var a=this;B.call(a);a.eg=0;a.e1=0;a.pn=null;a.n6=0;a.gT=null;}
function ASZ(a,b,c,d,e,f){var g=new G_();AYp(g,a,b,c,d,e,f);return g;}
function AYp(a,b,c,d,e,f,g){a.eg=b;a.e1=c;a.pn=BF(f,g);a.n6=d;a.gT=e;}
function Qw(){Fu.call(this);this.jh=null;}
function So(a){var b;b=new AAv;NL(b,a.jh);return b;}
function Ty(){Fu.call(this);this.zg=null;}
function Xr(a){var b;b=new Tr;NL(b,a.zg);return b;}
function Qx(){FA.call(this);this.wg=null;}
function V7(){B.call(this);this.v6=null;}
function AWS(a,b){b=b;Pf(a.v6,b);}
function TU(){B.call(this);this.uD=null;}
function AYu(a,b){b=b;He(a.uD,b);}
function Kv(){var a=this;B.call(a);a.eG=null;a.ma=null;a.jt=0;}
function A3W(a,b,c){var d=new Kv();AGC(d,a,b,c);return d;}
function AGC(a,b,c,d){a.eG=b;a.ma=c;a.jt=d;}
function AJW(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.eG,c.eG)&&BO(a.ma,c.ma)&&BO(CY(a.jt),CY(c.jt))?1:0;}return 0;}
function Mf(){var a=this;Kv.call(a);a.kZ=null;a.wM=0;}
function AVG(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AJW(a,b))return 0;c=b;return BO(a.kZ,c.kZ);}return 0;}
function E7(){var a=this;B.call(a);a.fS=null;a.gI=null;a.zY=0;}
function A3l(a,b,c){var d=new E7();NV(d,a,b,c);return d;}
function NV(a,b,c,d){a.fS=b;a.gI=c;a.zY=d;}
function AIp(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.fS,c.fS)&&BO(a.gI,c.gI)?1:0;}return 0;}
function HH(){E7.call(this);this.hu=null;}
function Ke(){var a=this;E7.call(a);a.id=null;a.qF=0;}
function A12(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AIp(a,b))return 0;c=b;return BO(a.id,c.id);}return 0;}
function Jk(){var a=this;E7.call(a);a.jR=null;a.i9=null;}
function AU5(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.jR,c.jR)&&BO(a.i9,c.i9)?1:0;}return 0;}
function Yc(){var a=this;B.call(a);a.qk=null;a.qm=0;a.ql=0;a.qi=null;a.qh=0;a.qj=0;}
function AZE(a,b){var c,d,e,f,g,h,i,j;c=a.qk;d=a.qm;e=a.ql;f=a.qi;g=a.qh;h=a.qj;i=Cy(c.bd,5.0);d=Be((c.bd.bO.a-d|0)-i|0,Bd((i-d|0)-c.Q.k.a|0,b.j.a));j=Be((c.bd.bO.b-e|0)-i|0,Bd((i-e|0)-c.Q.k.b|0,b.j.b));X(f,d+g|0,j+h|0);Et(c,f,c.W.k);}
function AFk(){var a=this;Ib.call(a);a.QF=null;a.R3=0;a.J7=0;a.Ip=0;}
function R2(){var a=this;B.call(a);a.xb=null;a.xc=null;}
function AOV(a){var b,c;b=a.xb;c=a.xc;Sw();KF(b,c,A84);}
function R3(){var a=this;B.call(a);a.y3=null;a.y4=null;}
function AMY(a){var b,c;b=a.y3;c=a.y4;Sw();KF(b,c,A85);}
function R0(){var a=this;B.call(a);a.vq=null;a.vp=null;}
function AL9(a){KF(a.vq,a.vp,null);}
function R1(){var a=this;B.call(a);a.qy=null;a.qz=null;}
function AOP(a){var b,c,d,e,f,g,h;b=a.qy;c=a.qz;d=Ea(b.bu.d);e=HD(b.bu.d);d=ABH(b.bu.fz,d,e);DS(b.go.bY);b=b.bu;e=Fw(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new AA6;e.Fj=b;e.Fi=c;d.Kb(f,g,h,1,e,b.j5);}}
function Ry(){B.call(this);this.rX=null;}
function AZ9(a){var b;b=a.rX;DS(b.go.bY);Hd(b.bu,V2(b),0);}
function Rx(){B.call(this);this.Bq=null;}
function AZk(a){var b;b=a.Bq;DS(b.go.bY);Hd(b.bu,V2(b),1);}
function Rw(){B.call(this);this.z2=null;}
function AUj(a){var b,c,d;b=a.z2;DS(b.go.bY);c=HT(b);b=b.bu;BJ(b);d=new AD7;d.yD=b;RB(c,d,AEZ(C(466)));}
function Qo(){var a=this;B.call(a);a.w_=null;a.xa=null;}
function AQ4(a){var b,c;b=a.w_;c=a.xa;b=b.bu.d;b.pN=c;Mj(b);}
var Q4=G(0);
var A69=null;function AKi(){A69=new To;}
function YI(){B.call(this);this.wn=null;}
function AMO(a){var b,c,d,e;b=a.wn;c=HT(b);d=b.go.bY;e=new RL;e.ub=b;Kc(c,Yg(d,e));}
function AAV(){B.call(this);this.Bf=null;}
function ARr(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Bf;d=CQ(c[0]);c=L5(d);e=new TW;d=AEC(c);f=AEC(c);g=Bb(c);h=Q(L3,g);i=h.data;j=0;while(j<g){i[j]=Nj(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AF4(e,d,f,h);b.g(e);}
function M3(){var a=this;G5.call(a);a.gf=null;a.lf=null;a.wR=null;a.nt=null;}
function A86(a,b){var c=new M3();T_(c,a,b);return c;}
function T_(a,b,c){var d,e;ACN(a,c,b);b=new Uv;c=a.dk;P2(b,c.ck);d=KU(c);b.m2=d;b.d8=If(d);c=If(b.m2);b.d7=c;Oc(b.eD,b.d8,c);e=new OR;e.tL=b;c=b.d8;c.iu=e;b.d7.iu=e;IX(c,0);IX(b.d7,0);c=b.d8;c.b4=1;b.tK=AHl(c,b.d7);Mw(b,I(CB,[b.d8,b.eD,b.d7]));a.gf=b;c=a.iA;b.eD.im=c;Ft(b.d8,c);Ft(b.d7,c);b=WH(a,a.gf);a.lf=b;c=new VZ;c.Dz=a;b.CJ=c;c=new VY;c.Dj=a;b.EX=c;EH(a.dk,b);}
function MZ(a,b,c){var d,e;d=!c?a.gf.d7:a.gf.d8;e=new ABQ;e.rs=a;e.rr=b;e.rq=c;GK(d,b,e);}
function A1K(a){a.gf=null;}
function AVq(a,b){var c,d,e,f;if(BW(a.gf.d8,b))return ZN(a,1,C(300));if(BW(a.gf.d7,b))return ZN(a,0,C(301));c=Q(BC,2);d=c.data;b=new BC;e=new We;e.yV=a;CC(b,e,C(300));d[0]=b;b=new BC;f=new Wf;f.AI=a;CC(b,f,C(301));d[1]=b;return CR(c);}
function ZN(a,b,c){var d,e,f,g;d=Q(BC,1);e=d.data;f=new BC;g=new YA;g.xP=a;g.xO=b;CC(f,g,c);e[0]=f;return CR(d);}
function Nb(a,b){var c,d,e;c=a.dk;d=c.ck.e2;e=new Tf;e.BN=a;e.BM=b;Kc(d,Yg(c,e));}
function Z$(){B.call(this);this.zv=null;}
function AUy(a,b,c){var d,e;c=a.zv;d=c.d.h;e=b.bp;b=c.fw;Z4(d.B.data[e],0,b);}
function Wo(){var a=this;B.call(a);a.dN=null;a.zq=null;a.yW=null;}
function OX(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.dN);switch(b){case 3:break;case 5:c=PN(a);d=N7(a);b=Bb(a.dN);e=Bb(a.dN);f=Bb(a.dN);g=BM();h=0;while(h<f){BB(g,N7(a));h=h+1|0;}i=new Mf;AGC(i,c,d,b);i.kZ=g;i.wM=e;break a;default:c=new C$;d=new K;M(d);U(H(d,C(467)),b);Bm(c,L(d));N(c);}i=A3W(PN(a),N7(a),Bb(a.dN));}return i;}
function PN(a){var b,c;b=Bb(a.dN);c=Bb(a.dN);return AXh(EC(a.zq,b,c),Bb(a.dN));}
function N7(a){var b;b=Bb(a.dN);if(b==(-1))return null;return BG(a.yW,b);}
function RD(){var a=this;B.call(a);a.ev=null;a.AY=null;a.Bb=null;}
function Ht(a){var b,c,d,e,f;a:{b:{b=Bb(a.ev);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=WS(a);d=QS(a);b=Bb(a.ev);e=Sr(a);f=new Ke;NV(f,c,d,2);f.qF=b;f.id=e;break a;case 4:c=Ht(a);d=Ht(a);f=new Jk;NV(f,c.fS,c.gI,9);f.jR=c;f.i9=d;break a;case 5:f=A3l(WS(a),QS(a),Bb(a.ev));break a;case 9:c=Sr(a);f=new HH;d=!ED(c)&&BG(c,0)!==null?(BG(c,0)).gI:null;NV(f,null,null,7);f.hu=BM();c=B7(c);while(B_(c)){e=Ca(c);if(!(e instanceof HH))BB(f.hu,e);else{e=e;H1(f.hu,e.hu);}}f.gI=d;break a;default:break b;}f
=null;break a;}c=new C$;d=new K;M(d);U(H(d,C(468)),b);Bm(c,L(d));N(c);}return f;}
function WS(a){var b,c;b=Bb(a.ev);c=Bb(a.ev);return AXh(EC(a.AY,b,c),Bb(a.ev));}
function QS(a){var b;b=Bb(a.ev);if(b==(-1))return null;return BG(a.Bb,b);}
function Sr(a){var b,c,d;b=Bb(a.ev);c=BM();d=0;while(d<b){BB(c,Ht(a));d=d+1|0;}return c;}
function Vk(){var a=this;B.call(a);a.uW=null;a.uX=null;a.u6=null;a.u7=0;a.u3=0;a.u4=0;a.u0=0;a.u1=0;a.uY=0;a.uZ=0;a.vK=0;}
function ALn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uW;d=a.uX;e=a.u6;f=a.u7;g=a.u3;h=a.u4;i=a.u0;j=a.u1;k=a.uY;l=a.uZ;m=a.vK;n=Cy(c.bd,5.0);o=c.W.hU();Co(d,c.W.k);Co(e,c.W.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bd.bO.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bd.bO.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}Et(c,e,d);}
function UA(){var a=this;B.call(a);a.xV=null;a.xU=0.0;}
function Nt(a,b){return Lm(a.xV,b,a.xU*2.0+0.875);}
function Ph(){B.call(this);this.rK=null;}
function AX0(a){AHy(a.rK);}
function Pi(){B.call(this);this.sn=null;}
function A1r(a){Hs(a.sn);}
function Pg(){B.call(this);this.wl=null;}
function AUp(a){AIj(a.wl);}
function UZ(){B.call(this);this.yX=null;}
function AP2(a){a.yX.BE();}
function UY(){B.call(this);this.u$=null;}
function A0o(a){a.u$.wm();}
function X2(){B.call(this);this.rd=null;}
function ANr(a){var b,c,d,e,f,g,h,i;b=a.rd;c=(b.rv.cZ()).data;d=Q(BC,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Qr;i.ul=b;i.uk=h;e[f]=W6(i,h);f=f+1|0;}return d;}
function AAa(){B.call(this);this.xH=null;}
function AO3(a){a.xH.ol.il(0);}
function AAb(){B.call(this);this.yw=null;}
function A1c(a){a.yw.ol.il(1);}
function VG(){B.call(this);this.zZ=null;}
function ALw(a){var b,c,d,e,f;b=a.zZ.d.h;c=b.cq;d=new K;M(d);U(H(d,C(469)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.nq;d=new K;M(d);U(H(d,C(470)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dh;e=Hr(E_(b));ADd(d,0,d.df,e);b=Bt();f=b.mY;f.data[0]=10;Xv(b,f,0,1);}
function VB(){B.call(this);this.xx=null;}
function AO4(a){ZD(a.xx);}
function VC(){B.call(this);this.x_=null;}
function ATL(a){AAU(a.x_);}
function VD(){B.call(this);this.vX=null;}
function AYC(a){Oi(a.vX.d);}
function VE(){B.call(this);this.qA=null;}
function AXr(a){Vs(a.qA);}
function OM(){B.call(this);this.xT=null;}
function AS8(a){var b,c,d,e,f,g,h;b=a.xT;c=Q(BC,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=W6(Qs(b,g),W_(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=W6(Qs(b,g),W_(g));e=h;}return c;}
function Uv(){var a=this;Ii.call(a);a.m2=null;a.d8=null;a.d7=null;a.tK=null;a.mK=null;a.jM=0;}
function VZ(){B.call(this);this.Dz=null;}
function VY(){B.call(this);this.Dj=null;}
function Rr(){B.call(this);this.so=null;}
function ANs(a,b,c){HL(Cd(a.so.d.h,b.bp),0,J(c));}
var XN=G(0);
function ACk(){var a=this;B.call(a);a.mz=null;a.pC=null;a.hB=null;a.m3=null;}
function A3Q(a,b,c,d){var e=new ACk();AHf(e,a,b,c,d);return e;}
function AHf(a,b,c,d,e){a.mz=b;a.pC=c;a.hB=d;a.m3=e;}
function Nh(a,b){var c,d;c=new ACs;d=a.mz.values();c.kr=a;c.yC=d;c.k4=b;ABf(c);}
function YL(a){var b,c,d,e;b=a.m3;if(b===null){b=a.hB;c=b.data;d=Hp(a);e=c.length;b=C8(b,e+1|0);b.data[e]=d;b=b;a.m3=b;}return b;}
function Hp(a){return H3(a.mz.name);}
function A11(a){return a.hB;}
function AFm(a){return LX(a.hB,Hp(a));}
function AHx(){var a=this;B.call(a);a.jC=null;a.dG=0;}
function AXh(a,b){var c=new AHx();ALq(c,a,b);return c;}
function ALq(a,b,c){a.jC=b;a.dG=c;}
function AQ6(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.dG==c.dG&&BO(a.jC,c.jC)?1:0;}return 0;}
function WA(){B.call(this);this.ra=null;}
function AYs(a,b){b=b;OK(a.ra,b);}
function VR(){B.call(this);this.xt=null;}
function A21(a,b){b=b;He(a.xt,b);}
var To=G();
function OR(){B.call(this);this.tL=null;}
function A1N(a,b){var c,d,e;c=a.tL;d=c.d8;if(d===b)c.jM=c.jM|1;e=c.d7;if(e===b)c.jM=c.jM|2;if((c.jM&3)==3){b=d.d.h;d=e.d.h;e=new ACr;e.z6=c;AIl(b,d,e,c.m2.bY.ck.e2);}}
function FG(){var a=this;B.call(a);a.km=0;a.t2=0;a.jT=null;a.he=null;a.yH=null;a.l5=null;}
function A87(a){var b=new FG();NL(b,a);return b;}
function NL(a,b){a.l5=b;a.t2=b.c0;a.jT=null;}
function Gh(a){var b,c;if(a.jT!==null)return 1;while(true){b=a.km;c=a.l5.b9.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.km=b+1|0;}return 0;}
function AIS(a){var b;if(a.t2==a.l5.c0)return;b=new H_;Y(b);N(b);}
function NX(a){var b,c,d,e;AIS(a);if(!Gh(a)){b=new Mt;Y(b);N(b);}b=a.jT;if(b!==null){c=a.he;if(c!==null)a.yH=c;a.he=b;a.jT=b.cX;}else{d=a.l5.b9.data;e=a.km;a.km=e+1|0;b=d[e];a.he=b;a.jT=b.cX;a.yH=null;}}
var AAv=G(FG);
function Ql(a){NX(a);return a.he.cV;}
var Tr=G(FG);
function ADL(a){NX(a);return a.he;}
var Zv=G(FG);
function AEI(){var a=this;B.call(a);a.Ps=null;a.SB=0;}
function Zt(){var a=this;B.call(a);a.l=null;a.dX=0;a.mQ=null;a.q8=0;a.hX=0;a.fL=0;a.bA=0;a.nv=null;}
function M9(a){return a.l.bQ;}
function Vz(a,b,c,d){var e,f,g,h,i,j;e=BM();f=a.dX;g=0;if(c!=f)a.dX=c;a:{switch(b){case -1073741784:h=new RW;c=a.bA+1|0;a.bA=c;Gp(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QP;c=a.bA+1|0;a.bA=c;Gp(h,c);break a;case -33554392:h=new SF;c=a.bA+1|0;a.bA=c;Gp(h,c);break a;default:c=a.hX+1|0;a.hX=c;if(d!==null)h=A4_(c);else{h=new F6;Gp(h,0);g=1;}c=a.hX;if(c<=(-1))break a;if(c>=10)break a;a.mQ.data[c]=h;break a;}h=new ADU;Gp(h,(-1));}while(true){if(Fj(a.l)&&a.l.m==(-536870788))
{d=A1C(Ck(a,2),Ck(a,64));while(!DC(a.l)&&Fj(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CJ(d,Bl(i));i=a.l;if(i.bk!=(-536870788))continue;Bl(i);}i=Ln(a,d);i.T(h);}else if(a.l.bk==(-536870788)){i=H2(h);Bl(a.l);}else{i=X5(a,h);d=a.l;if(d.bk==(-536870788))Bl(d);}if(i!==null)BB(e,i);if(DC(a.l))break;if(a.l.bk==(-536870871))break;}if(a.l.m6==(-536870788))BB(e,H2(h));if(a.dX!=f&&!g){a.dX=f;d=a.l;d.hc=f;d.m=d.bk;d.fo=d.fA;j=d.dt;d.y=j+1|0;d.jy=j;FP(d);}switch(b){case -1073741784:break;case -536870872:d
=new Wj;F7(d,e,h);return d;case -268435416:d=new ACL;F7(d,e,h);return d;case -134217688:d=new Zw;F7(d,e,h);return d;case -67108824:d=new SZ;F7(d,e,h);return d;case -33554392:d=new D_;F7(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A42(BG(e,0),h);default:return A3D(e,h);}return H2(h);}d=new Kq;F7(d,e,h);return d;}
function AKx(a){var b,c,d,e,f,g,h;b=BP(4);c=(-1);d=(-1);if(!DC(a.l)&&Fj(a.l)){e=b.data;c=Bl(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B5(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bl(f);f=a.l;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bl(f);return A1p(e,3);}return A1p(e,2);}if(!Ck(a,2))return AE4(b[0]);if(Ck(a,64))return AZ6(b[0]);return AV4(b[0]);}e=b.data;c=1;while(c<4&&!DC(a.l)&&Fj(a.l)){h=c+1|0;e[c]=Bl(a.l);c=h;}if(c==1){h=e[0];if(!(A88.DK(h)==A89?0:1))return Vr(a,e[0]);}if
(!Ck(a,2))return A5w(b,c);if(Ck(a,64)){f=new Vm;PK(f,b,c);return f;}f=new ABg;PK(f,b,c);return f;}
function X5(a,b){var c,d,e,f,g,h,i;if(Fj(a.l)&&!KT(a.l)&&Nr(a.l.m)){if(Ck(a,128)){c=AKx(a);if(!DC(a.l)){d=a.l;e=d.bk;if(!(e==(-536870871)&&!(b instanceof F6))&&e!=(-536870788)&&!Fj(d))c=Mh(a,b,c);}}else if(!Xw(a.l)&&!ACb(a.l)){f=new PX;M(f);while(!DC(a.l)&&Fj(a.l)&&!Xw(a.l)&&!ACb(a.l)){if(!(!KT(a.l)&&!a.l.m)&&!(!KT(a.l)&&Nr(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bl(a.l);if(!Mg(e))BN(f,e&65535);else JZ(f,HQ(e));}if(!Ck(a,2)){c=new ZJ;D0(c);c.cG
=L(f);e=f.L;c.bI=e;c.o2=AY_(e);c.ny=AY_(c.bI);h=0;while(h<(c.bI-1|0)){RI(c.o2,P(c.cG,h),(c.bI-h|0)-1|0);RI(c.ny,P(c.cG,(c.bI-h|0)-1|0),(c.bI-h|0)-1|0);h=h+1|0;}}else if(Ck(a,64))c=A5v(f);else{c=new Pe;D0(c);c.jA=L(f);c.bI=f.L;}}else c=Mh(a,b,ADE(a,b));}else{d=a.l;if(d.bk!=(-536870871))c=Mh(a,b,ADE(a,b));else{if(b instanceof F6)N(Cm(C(21),d.bQ,PV(d)));c=H2(b);}}a:{if(!DC(a.l)){e=a.l.bk;if(!(e==(-536870871)&&!(b instanceof F6))&&e!=(-536870788)){f=X5(a,b);if(c instanceof Dc&&!(c instanceof FQ)&&!(c instanceof C1)
&&!(c instanceof E6)){i=c;if(!f.b2(i.N)){c=new US;Fe(c,i.N,i.e,i.jP);c.N.T(c);}}if((f.iV()&65535)!=43)c.T(f);else c.T(f.N);break a;}}if(c===null)return null;c.T(b);}if((c.iV()&65535)!=43)return c;return c.N;}
function Mh(a,b,c){var d,e,f,g,h;d=a.l;e=d.bk;if(c!==null&&!(c instanceof Cc)){switch(e){case -2147483606:Bl(d);d=new V6;Ds(d,c,b,e);Ox();c.T(A8$);return d;case -2147483605:Bl(d);d=new Yw;Ds(d,c,b,(-2147483606));Ox();c.T(A8$);return d;case -2147483585:Bl(d);d=new QA;Ds(d,c,b,(-536870849));Ox();c.T(A8$);return d;case -2147483525:f=new Pb;d=Gl(d);g=a.fL+1|0;a.fL=g;MC(f,d,c,b,(-536870849),g);Ox();c.T(A8$);return f;case -1073741782:case -1073741781:Bl(d);d=new RR;Ds(d,c,b,e);c.T(d);return d;case -1073741761:Bl(d);d
=new Zb;Ds(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new TC;d=Gl(d);e=a.fL+1|0;a.fL=e;MC(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bl(d);if(c.iV()!=(-2147483602)){d=new C1;Ds(d,c,b,e);}else if(Ck(a,32)){d=new RS;Ds(d,c,b,e);}else{d=new XD;f=Yf(a.dX);Ds(d,c,b,e);d.m5=f;}c.T(d);return d;case -536870849:Bl(d);d=new GE;Ds(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new Gn;d=Gl(d);e=a.fL+1|0;a.fL=e;MC(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bl(d);d=new AD_;Fe(d,f,b,e);f.e=d;return d;case -2147483585:Bl(d);c=new UN;Fe(c,f,b,(-2147483585));return c;case -2147483525:c=new X4;Sb(c,Gl(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bl(d);d=new Za;Fe(d,f,b,e);f.e=d;return d;case -1073741761:Bl(d);c=new ABr;Fe(c,f,b,(-1073741761));return c;case -1073741701:c=new RH;Sb(c,Gl(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bl(d);d=A3T(f,b,e);f.e=d;return d;case -536870849:Bl(d);c
=new E6;Fe(c,f,b,(-536870849));return c;case -536870789:return A4z(Gl(d),f,b,(-536870789));default:}return c;}
function ADE(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F6;while(true){a:{e=a.l;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bl(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dX=g;else{if(f!=(-1073741784))g=a.dX;c=Vz(a,f,g,b);e=a.l;if(e.bk!=(-536870871))N(Cm(C(21),e.bQ,e.dt));Bl(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bl(e);c
=A1f(0);break a;case -2147483577:Bl(e);c=new XA;B6(c);break a;case -2147483558:Bl(e);c=new Vf;h=a.bA+1|0;a.bA=h;AKH(c,h);break a;case -2147483550:Bl(e);c=A1f(1);break a;case -2147483526:Bl(e);c=new AC6;B6(c);break a;case -536870876:Bl(e);a.bA=a.bA+1|0;if(Ck(a,8)){if(Ck(a,1)){c=A3v(a.bA);break a;}c=A3c(a.bA);break a;}if(Ck(a,1)){c=A3H(a.bA);break a;}c=A32(a.bA);break a;case -536870866:Bl(e);if(Ck(a,32)){c=A39();break a;}c=A3Z(Yf(a.dX));break a;case -536870821:Bl(e);i=0;c=a.l;if(c.bk==(-536870818)){i=1;Bl(c);}c
=Ln(a,Hy(a,i));c.T(b);e=a.l;if(e.bk!=(-536870819))N(Cm(C(21),e.bQ,e.dt));XU(e,1);Bl(a.l);break a;case -536870818:Bl(e);a.bA=a.bA+1|0;if(!Ck(a,8)){c=new Le;B6(c);break a;}c=new WN;e=Yf(a.dX);B6(c);c.zt=e;break a;case 0:j=e.fA;if(j!==null)c=Ln(a,j);else{if(DC(e)){c=H2(b);break a;}c=AE4(f&65535);}Bl(a.l);break a;default:break b;}Bl(e);c=new Le;B6(c);break a;}h=(f&2147483647)-48|0;if(a.hX<h)N(Cm(C(21),FV(e),PV(a.l)));Bl(e);a.bA=a.bA+1|0;c=!Ck(a,2)?A4l(h,a.bA):Ck(a,64)?A3w(h,a.bA):A5u(h,a.bA);a.mQ.data[h].oR=1;a.q8
=1;break a;}if(f>=0&&!Ha(e)){c=Vr(a,f);Bl(a.l);}else if(f==(-536870788))c=H2(b);else{if(f!=(-536870871)){b=new Kf;c=!Ha(a.l)?Vb(f&65535):a.l.fA.cO();e=a.l;MM(b,c,e.bQ,e.dt);N(b);}if(d){b=new Kf;e=a.l;MM(b,C(21),e.bQ,e.dt);N(b);}c=H2(b);}}}if(f!=(-16777176))break;}return c;}
function Hy(a,b){var c,d,e,f,g,h,i,j,$$je;c=A1C(Ck(a,2),Ck(a,64));EN(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DC(a.l))break a;h=a.l;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CJ(c,d);d=Bl(a.l);h=a.l;if(h.bk!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bl(h);e=1;d=(-1);break d;}Bl(h);if(g){c=Hy(a,0);break d;}if(a.l.bk==(-536870819))break d;U3(c,Hy(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bl(h);h=a.l;i=h.bk;if(Ha(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Nr(i))break e;i=i&65535;break e;}catch($$e){$$je=EW($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}}try{Cb(c,d,i);}catch($$e){$$je=EW($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}Bl(a.l);d=(-1);break d;}}if(d>=0)CJ(c,d);d=45;Bl(a.l);break d;case -536870821:if(d>=0){CJ(c,d);d=(-1);}Bl(a.l);j=0;h=a.l;if(h.bk==(-536870818)){Bl(h);j=1;}if(!e)AH3(c,Hy(a,j));else U3(c,Hy(a,j));e=0;Bl(a.l);break d;case -536870819:if(d>=0)CJ(c,
d);d=93;Bl(a.l);break d;case -536870818:if(d>=0)CJ(c,d);d=94;Bl(a.l);break d;case 0:if(d>=0)CJ(c,d);h=a.l.fA;if(h===null)d=0;else{ALd(c,h);d=(-1);}Bl(a.l);break d;default:}if(d>=0)CJ(c,d);d=Bl(a.l);}g=0;}N(Cm(C(21),M9(a),a.l.dt));}N(Cm(C(21),M9(a),a.l.dt));}if(!f){if(d>=0)CJ(c,d);return c;}N(Cm(C(21),M9(a),a.l.dt-1|0));}
function Vr(a,b){var c,d,e;c=Mg(b);if(Ck(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AV4(b&65535);}if(Ck(a,64)&&b>128){if(c){d=new Wc;D0(d);d.bI=2;d.s2=G4(G2(b));return d;}if(Qk(b))return AQ3(b&65535);if(!Su(b))return AZ6(b&65535);return AXO(b&65535);}}if(!c){if(Qk(b))return AQ3(b&65535);if(!Su(b))return AE4(b&65535);return AXO(b&65535);}d=new Ef;D0(d);d.bI=2;d.g2=b;e=(HQ(b)).data;d.mk=e[0];d.lo=e[1];return d;}
function Ln(a,b){var c,d,e;if(!AJQ(b)){if(!b.R){if(b.iq())return AOE(b);return AS0(b);}if(!b.iq())return AX7(b);c=new MD;ABK(c,b);return c;}c=AEu(b);d=new OW;B6(d);d.sg=c;d.Eb=c.bi;if(!b.R){if(b.iq())return AGo(AOE(Jw(b)),d);return AGo(AS0(Jw(b)),d);}if(!b.iq())return AGo(AX7(Jw(b)),d);c=new Rc;e=new MD;ABK(e,Jw(b));AHG(c,e,d);return c;}
function Jx(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ck(a,b){return (a.dX&b)!=b?0:1;}
function Z3(){B.call(this);this.y2=null;}
function AQp(a,b){b.hs=a.y2.df;}
function Z2(){B.call(this);this.u5=null;}
function AZY(a,b){b.hl=a.u5.df.cm;}
function XC(){B.call(this);this.rp=null;}
function AWk(a,b){b.hs=a.rp;}
var HX=G(0);
function S5(){B.call(this);this.y6=null;}
function AYO(a,b,c,d){KM(a.y6,b,c.bp,d.bp);}
function S6(){B.call(this);this.w8=null;}
function AXw(a,b,c,d){KM(a.w8,b,c.bp,d.bp);}
function IU(){B.call(this);this.oi=0;}
var A8_=null;var A9a=null;var A9b=null;function ARz(a){var b=new IU();AGq(b,a);return b;}
function AGq(a,b){a.oi=b;}
function XZ(b){return !b?A9a:A8_;}
function AIq(){A8_=ARz(1);A9a=ARz(0);A9b=F($rt_booleancls());}
var KO=G(0);
var RX=G();
var XR=G(0);
var AFS=G();
function Si(){B.call(this);this.u9=null;}
function AZh(a,b,c,d){JR(a.u9,b,c.bp,d.bp);}
var Sh=G();
function ATB(a,b){return b.eG.dG>=0?0:1;}
var Sg=G();
function ARV(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fS;if(b===null)break b;if(b.dG>=0)break b;}c=1;break a;}c=0;}return c;}
function Sk(){B.call(this);this.Aq=null;}
function AYV(a,b,c,d){JR(a.Aq,b,c.bp,d.bp);}
var GJ=G(CI);
var A85=null;var A84=null;var A9c=null;function Sw(){Sw=Bn(GJ);A2M();}
function A0E(a,b){var c=new GJ();AFF(c,a,b);return c;}
function AFF(a,b,c){Sw();DJ(a,b,c);}
function A2M(){var b;A85=A0E(C(471),0);b=A0E(C(472),1);A84=b;A9c=I(GJ,[A85,b]);}
function AD7(){B.call(this);this.yD=null;}
function AW3(a,b){DH(a.yD,b);}
function BS(){var a=this;B.call(a);a.e=null;a.cx=0;a.x4=null;a.jP=0;}
var A56=0;function B6(a){var b;b=A56;A56=b+1|0;a.x4=J0(b);}
function NG(a,b){var c;c=A56;A56=c+1|0;a.x4=J0(c);a.e=b;}
function IG(a,b,c,d){var e;e=d.z;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IN(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWe(a,b){a.jP=b;}
function AVQ(a){return a.jP;}
function ASB(a){return a.e;}
function ATb(a,b){a.e=b;}
function A1v(a,b){return 1;}
function A2f(a){return null;}
function Ku(a){var b;a.cx=1;b=a.e;if(b!==null){if(!b.cx){b=b.gB();if(b!==null){a.e.cx=1;a.e=b;}a.e.eU();}else if(b instanceof HS&&b.eY.oR)a.e=b.e;}}
function AHN(){A56=1;}
function Qr(){var a=this;B.call(a);a.ul=null;a.uk=null;}
function AUW(a){var b,c;b=a.ul;c=a.uk;b.i_.uH(c);}
function VS(){var a=this;B.call(a);a.rk=null;a.ri=null;a.rh=0;a.rj=0;}
function AZm(a,b){b=b;ER(a.rk,a.ri,b,a.rh,a.rj);}
function VT(){var a=this;B.call(a);a.B5=null;a.B4=null;a.B3=0;a.B2=0;}
function AOc(a,b){b=b;ER(a.B5,a.B4,b,a.B3,a.B2);}
function RC(){var a=this;B.call(a);a.yc=null;a.ya=null;a.yb=null;}
function AXd(a){AFq(a.yc,a.ya,a.yb);}
function XB(){B.call(this);this.wW=null;}
function AQC(a,b){ADm(a.wW,b);}
function AAK(){var a=this;B.call(a);a.B0=null;a.B1=null;}
function AMh(a){var b,c;b=a.B0;c=a.B1;Gi(b.x.bw,FR(c));}
function Im(){var a=this;Dg.call(a);a.jN=null;a.hL=null;a.hv=null;a.ia=null;}
var A9d=null;var A9e=null;function ASx(a,b){var c=new Im();AJM(c,a,b);return c;}
function A9f(a,b,c){var d=new Im();LH(d,a,b,c);return d;}
function AJM(a,b,c){LH(a,b,0,c);}
function LH(a,b,c,d){J5(a,Hp(b),c);a.hv=A9d;a.ia=A9e;a.jN=b;a.hL=d;Lh(a);IF(a);}
function Ri(a,b){return Ud(a.hv,b);}
function Lh(a){var b;b=new RV;b.sN=a;a.er=b;a.jc=b;a.fa=A8Q;}
function ADt(a){var b;b=new AD9;b.tD=a;a.er=b;a.jc=b;}
function AHh(){A9d=Q(Im,0);A9e=Q(KA,0);}
function SB(){B.call(this);this.Bw=null;}
function ARY(a,b){Tk(HT(a.Bw),b,A79,AEZ(C(473)));}
var AA_=G();
var A8X=null;function A43(){A43=Bn(AA_);AVc();}
function AVc(){var b,c;Sw();b=BP((A9c.hA()).data.length);c=b.data;A8X=b;c[A85.fQ]=1;c[A84.fQ]=2;}
function O7(){B.call(this);this.uG=null;}
function AO5(a,b){var c,d;c=a.uG;d=b.iQ;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function C0(){var a=this;BS.call(a);a.oR=0;a.el=0;}
var A8$=null;function Ox(){Ox=Bn(C0);AWU();}
function A4_(a){var b=new C0();Gp(b,a);return b;}
function Gp(a,b){Ox();B6(a);a.el=b;}
function AMg(a,b,c,d){var e,f;e=I8(d,a.el);MY(d,a.el,b);f=a.e.c(b,c,d);if(f<0)MY(d,a.el,e);return f;}
function AYD(a){return a.el;}
function AMv(a,b){return 0;}
function AWU(){var b;b=new Xx;B6(b);A8$=b;}
function G7(){var a=this;B.call(a);a.bg=null;a.hc=0;a.fr=0;a.vz=0;a.m6=0;a.bk=0;a.m=0;a.zK=0;a.fA=null;a.fo=null;a.y=0;a.j1=0;a.dt=0;a.jy=0;a.bQ=null;}
var A9g=null;var A88=null;var A89=0;function XU(a,b){if(b>0&&b<3)a.fr=b;if(b==1){a.m=a.bk;a.fo=a.fA;a.y=a.jy;a.jy=a.dt;FP(a);}}
function Ha(a){return a.fA===null?0:1;}
function KT(a){return a.fo===null?0:1;}
function Bl(a){FP(a);return a.m6;}
function Gl(a){var b;b=a.fA;FP(a);return b;}
function FP(a){var b,c,d,e,f,g,h,$$je;a.m6=a.bk;a.bk=a.m;a.fA=a.fo;a.dt=a.jy;a.jy=a.y;while(true){b=0;c=a.y>=a.bg.data.length?0:LS(a);a.m=c;a.fo=null;if(a.fr==4){if(c!=92)return;c=a.y;d=a.bg.data;c=c>=d.length?0:d[B9(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.y=a.j1;return;}a.fr=a.vz;a.m=a.y>(a.bg.data.length-2|0)?0:LS(a);}a:{c=a.m;if(c!=92){e=a.fr;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bg.data[a.y]!=63){a.m=(-2147483608);break a;}B9(a);c=a.bg.data[a.y];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B9(a);break b;default:N(Cm(C(21),FV(a),a.y));}a.m=(-67108824);B9(a);}else{switch(c){case 33:break;case 60:B9(a);c=a.bg.data[a.y];e=1;break b;case 61:a.m=(-536870872);B9(a);break b;case 62:a.m=(-33554392);B9(a);break b;default:f=ALb(a);a.m=f;if(f<256){a.hc=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.hc=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B9(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.y;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B9(a);break a;case 63:a.m=c|(-1073741824);B9(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);XU(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fo=AHk(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.y>=(a.bg.data.length-2|0)?(-1):LS(a);c:{a.m=c;switch(c){case -1:N(Cm(C(21),FV(a),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AGh(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fr!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cm(C(21),FV(a),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.fo=R9(EC(a.bg,
a.j1,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.vz=a.fr;a.fr=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.y;d=a.bg.data;if(c>=(d.length-2|0))N(Cm(C(21),FV(a),a.y));a.m=d[B9(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Yy(a,4);break a;case 120:a.m=Yy(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AJX(a);h=0;if(a.m==80)h=1;try{a.fo=R9(g,h);}catch($$e){$$je=EW($$e);if($$je instanceof MG){N(Cm(C(21),FV(a),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AJX(a){var b,c,d,e,f,g;b=new K;GM(b,10);c=a.y;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EC(d,B9(a),1);f=new K;M(f);H(H(f,C(474)),b);return L(f);}B9(a);c=0;a:{while(true){g=a.y;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B9(a)];if(c==125)break a;BN(b,c);}}if(c!=125)N(Cm(C(21),a.bQ,a.y));}if(!b.L)N(Cm(C(21),a.bQ,a.y));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(474)),f);return L(b);}b:{c:{if(J(f)>3){if(Nw(f,C(474)))break c;if(Nw(f,C(475)))break c;}break b;}f=Dv(f,2);}return f;}
function AHk(a,b){var c,d,e,f,g,$$je;c=new K;GM(c,4);d=(-1);e=2147483647;a:{while(true){f=a.y;g=a.bg.data;if(f>=g.length)break a;b=g[B9(a)];if(b==125)break a;if(b==44&&d<0)try{d=KK(Ed(c),10);AHq(c,0,AIr(c));continue;}catch($$e){$$je=EW($$e);if($$je instanceof Dt){break;}else{throw $$e;}}BN(c,b&65535);}N(Cm(C(21),a.bQ,a.y));}if(b!=125)N(Cm(C(21),a.bQ,a.y));if(c.L>0)b:{try{e=KK(Ed(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EW($$e);if($$je instanceof Dt){}else{throw $$e;}}N(Cm(C(21),a.bQ,a.y));}else if
(d<0)N(Cm(C(21),a.bQ,a.y));if((d|e|(e-d|0))<0)N(Cm(C(21),a.bQ,a.y));b=a.y;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B9(a);break c;case 63:a.m=(-1073741701);B9(a);break c;default:}a.m=(-536870789);}c=new Wt;c.fJ=d;c.fI=e;return c;}
function FV(a){return a.bQ;}
function DC(a){return !a.bk&&!a.m&&a.y==a.zK&&!Ha(a)?1:0;}
function Nr(b){return b<0?0:1;}
function Fj(a){return !DC(a)&&!Ha(a)&&Nr(a.bk)?1:0;}
function Xw(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function ACb(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function Su(b){return b<=56319&&b>=55296?1:0;}
function Qk(b){return b<=57343&&b>=56320?1:0;}
function Yy(a,b){var c,d,e,f,$$je;c=new K;GM(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BL(e,b);if(f>=0)break;if(a.y>=d)break;BN(c,a.bg.data[B9(a)]);e=e+1|0;}if(!f)a:{try{b=KK(Ed(c),16);}catch($$e){$$je=EW($$e);if($$je instanceof Dt){break a;}else{throw $$e;}}return b;}N(Cm(C(21),a.bQ,a.y));}
function AGh(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=ABU(d[a.y],8);switch(f){case -1:break;default:if(f>3)b=2;B9(a);a:{while(true){if(c>=b)break a;g=a.y;if(g>=e)break a;g=ABU(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B9(a);c=c+1|0;}}return f;}N(Cm(C(21),a.bQ,a.y));}
function ALb(a){var b,c,d,e;b=1;c=a.hc;a:while(true){d=a.y;e=a.bg.data;if(d>=e.length)N(Cm(C(21),a.bQ,d));b:{c:{switch(e[d]){case 41:B9(a);return c|256;case 45:if(!b)N(Cm(C(21),a.bQ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B9(a);}B9(a);return c;}
function B9(a){var b,c,d,e,f;b=a.y;a.j1=b;if(!(a.hc&4))a.y=b+1|0;else{c=a.bg.data.length-2|0;a.y=b+1|0;a:while(true){d=a.y;if(d<c&&RE(a.bg.data[d])){a.y=a.y+1|0;continue;}d=a.y;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.y=d+1|0;while(true){f=a.y;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.y=f+1|0;}}}return a.j1;}
function AKO(b){return A9g.H$(b);}
function LS(a){var b,c,d,e;b=a.bg.data[B9(a)];if(CT(b)){c=a.j1+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(Dk(e)){B9(a);return EO(b,e);}}}return b;}
function PV(a){return a.dt;}
function Kf(){var a=this;BU.call(a);a.Dn=null;a.C5=null;a.sS=0;}
function Cm(a,b,c){var d=new Kf();MM(d,a,b,c);return d;}
function MM(a,b,c,d){Y(a);a.sS=(-1);a.Dn=b;a.C5=c;a.sS=d;}
function PH(){var a=this;B.call(a);a.wh=null;a.wi=0.0;}
function AUV(a){var b,c;b=a.wh;c=a.wi;b.i_.nB(c);}
function ACr(){B.call(this);this.z6=null;}
function A1n(a,b){var c,d;c=a.z6;c.mK=b;HB(c.d8,b.p5);HB(c.d7,c.mK.p6);b=c.tK;d=c.mK;b.gX=d;c.eD.ep=d;}
var RW=G(C0);
function AU1(a,b,c,d){var e;e=a.el;B1(d,e,b-DD(d,e)|0);return a.e.c(b,c,d);}
function A0v(a,b){return 0;}
var ADU=G(C0);
function AWb(a,b,c,d){return b;}
var QP=G(C0);
function AMB(a,b,c,d){if(DD(d,a.el)!=b)b=(-1);return b;}
function SF(){C0.call(this);this.xg=0;}
function AU4(a,b,c,d){var e;e=a.el;B1(d,e,b-DD(d,e)|0);a.xg=b;return b;}
function AZD(a,b){return 0;}
var F6=G(C0);
function ATm(a,b,c,d){if(d.l7!=1&&b!=d.z)return (-1);d.kt=1;MY(d,0,b);return b;}
function Cc(){BS.call(this);this.bI=0;}
function D0(a){B6(a);a.bI=1;}
function A2K(a,b,c,d){var e;if((b+a.ca()|0)>d.z){d.dK=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function A08(a){return a.bI;}
function APb(a,b){return 1;}
var AG7=G(Cc);
function H2(a){var b=new AG7();AYJ(b,a);return b;}
function AYJ(a,b){NG(a,b);a.bI=1;a.jP=1;a.bI=0;}
function A0N(a,b,c){return 0;}
function AWX(a,b,c,d){var e,f,g;e=d.z;f=d.c_;while(true){g=BL(b,e);if(g>0)return (-1);if(g<0&&Dk(P(c,b))&&b>f&&CT(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AV9(a,b,c,d,e){var f,g;f=e.z;g=e.c_;while(true){if(c<b)return (-1);if(c<f&&Dk(P(d,c))&&c>g&&CT(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU3(a,b){return 0;}
function B8(){var a=this;BS.call(a);a.bK=null;a.eY=null;a.bc=0;}
function A3D(a,b){var c=new B8();F7(c,a,b);return c;}
function F7(a,b,c){B6(a);a.bK=b;a.eY=c;a.bc=c.el;}
function AOs(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=Gw(d,a.bc);DZ(d,a.bc,b);f=a.bK.q;g=0;while(true){if(g>=f){DZ(d,a.bc,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARn(a,b){a.eY.e=b;}
function AYo(a,b){var c;a:{c=a.bK;if(c!==null){c=B7(c);while(true){if(!B_(c))break a;if(!(Ca(c)).b2(b))continue;else return 1;}}}return 0;}
function ARQ(a,b){return I8(b,a.bc)>=0&&Gw(b,a.bc)==I8(b,a.bc)?0:1;}
function AMX(a){var b,c,d,e;a.cx=1;b=a.eY;if(b!==null&&!b.cx)Ku(b);a:{b=a.bK;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BG(a.bK,d);e=b.gB();if(e===null)e=b;else{b.cx=1;EM(a.bK,d);AJt(a.bK,d,e);}if(!e.cx)e.eU();d=d+1|0;}}}if(a.e!==null)Ku(a);}
var Kq=G(B8);
function ARb(a,b,c,d){var e,f,g,h;e=DD(d,a.bc);B1(d,a.bc,b);f=a.bK.q;g=0;while(true){if(g>=f){B1(d,a.bc,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZ_(a,b){return !DD(b,a.bc)?0:1;}
var D_=G(Kq);
function AWu(a,b,c,d){var e,f,g;e=DD(d,a.bc);B1(d,a.bc,b);f=a.bK.q;g=0;while(g<f){if((BG(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.eY.xg,c,d);g=g+1|0;}B1(d,a.bc,e);return (-1);}
function AZ3(a,b){a.e=b;}
var Wj=G(D_);
function ARl(a,b,c,d){var e,f;e=a.bK.q;f=0;while(f<e){if((BG(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ATg(a,b){return 0;}
var ACL=G(D_);
function AMs(a,b,c,d){var e,f;e=a.bK.q;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0$(a,b){return 0;}
var Zw=G(D_);
function AMV(a,b,c,d){var e,f,g,h;e=a.bK.q;f=d.kw?0:d.c_;a:{g=a.e.c(b,c,d);if(g>=0){B1(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((BG(a.bK,h)).cB(f,b,c,d)>=0){B1(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function A2Y(a,b){return 0;}
var SZ=G(D_);
function AUH(a,b,c,d){var e,f;e=a.bK.q;B1(d,a.bc,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).cB(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0k(a,b){return 0;}
function HS(){B8.call(this);this.dj=null;}
function A42(a,b){var c=new HS();AE2(c,a,b);return c;}
function AE2(a,b,c){B6(a);a.dj=b;a.eY=c;a.bc=c.el;}
function ALL(a,b,c,d){var e,f;e=Gw(d,a.bc);DZ(d,a.bc,b);f=a.dj.c(b,c,d);if(f>=0)return f;DZ(d,a.bc,e);return (-1);}
function AP6(a,b,c,d){var e;e=a.dj.cr(b,c,d);if(e>=0)DZ(d,a.bc,e);return e;}
function A0x(a,b,c,d,e){var f;f=a.dj.cB(b,c,d,e);if(f>=0)DZ(e,a.bc,f);return f;}
function AYl(a,b){return a.dj.b2(b);}
function AZz(a){var b;b=new O9;AE2(b,a.dj,a.eY);a.e=b;return b;}
function ATI(a){var b;a.cx=1;b=a.eY;if(b!==null&&!b.cx)Ku(b);b=a.dj;if(b!==null&&!b.cx){b=b.gB();if(b!==null){a.dj.cx=1;a.dj=b;}a.dj.eU();}}
function KA(){Dg.call(this);this.hH=null;}
var G9=G();
function Z(){var a=this;G9.call(a);a.bi=0;a.cw=0;a.O=null;a.md=null;a.mG=null;a.R=0;}
var A9h=null;function Qe(){Qe=Bn(Z);ANf();}
function By(a){var b;Qe();b=new ADk;b.D=BP(64);a.O=b;}
function AVA(a){return null;}
function AVe(a){return a.O;}
function AJQ(a){var b,c,d,e,f;if(!a.cw)b=Ij(a.O,0)>=2048?0:1;else{a:{c=a.O;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=I4(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I4(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AXq(a){return a.R;}
function A04(a){return a;}
function AEu(a){var b,c;if(a.mG===null){b=a.fR();c=new UR;c.Fg=a;c.xq=b;By(c);a.mG=c;EN(c,a.cw);}return a.mG;}
function Jw(a){var b,c;if(a.md===null){b=a.fR();c=new UP;c.Dq=a;c.AS=b;c.vG=a;By(c);a.md=c;EN(c,a.bi);a.md.R=a.R;}return a.md;}
function A2a(a){return 0;}
function EN(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cw=a.cw?0:1;}if(!a.R)a.R=1;return a;}
function AN6(a){return a.bi;}
function Np(b,c){Qe();return b.n(c);}
function JX(b,c){var d,e;Qe();if(b.dS()!==null&&c.dS()!==null){b=b.dS();c=c.dS();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function R9(b,c){var d,e,f;Qe();d=0;while(true){ASe();e=A9i.data;if(d>=e.length){f=new MG;Bm(f,C(21));f.D2=C(21);f.Fk=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AKs(e[1],c);}
function ANf(){var b;b=new Hj;ASe();A9h=b;}
function AEV(){var a=this;Z.call(a);a.px=0;a.qW=0;a.hY=0;a.nk=0;a.ex=0;a.gy=0;a.J=null;a.bD=null;}
function DE(){var a=new AEV();AUc(a);return a;}
function A1C(a,b){var c=new AEV();AM8(c,a,b);return c;}
function AUc(a){By(a);a.J=A20();}
function AM8(a,b,c){By(a);a.J=A20();a.px=b;a.qW=c;}
function CJ(a,b){a:{if(a.px){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ex){OA(a.J,Jx(b&65535));break a;}LK(a.J,Jx(b&65535));break a;}if(a.qW&&b>128){a.hY=1;b=G4(G2(b));}}}if(!(!Su(b)&&!Qk(b))){if(a.nk)OA(a.O,b-55296|0);else LK(a.O,b-55296|0);}if(a.ex)OA(a.J,b);else LK(a.J,b);if(!a.R&&Mg(b))a.R=1;return a;}
function ALd(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(a.nk){if(!b.cw)Gf(a.O,b.fR());else Dp(a.O,b.fR());}else if(!b.cw)GA(a.O,b.fR());else{Gt(a.O,b.fR());Dp(a.O,b.fR());a.cw=a.cw?0:1;a.nk=1;}if(!a.gy&&b.dS()!==null){if(a.ex){if(!b.bi)Gf(a.J,b.dS());else Dp(a.J,b.dS());}else if(!b.bi)GA(a.J,b.dS());else{Gt(a.J,b.dS());Dp(a.J,b.dS());a.bi=a.bi?0:1;a.ex=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new XM;e.Eq=a;e.BA=c;e.vs=d;e.vj=b;By(e);a.bD=e;}else{e=new XO;e.Fw=a;e.te=c;e.za=d;e.yK=b;By(e);a.bD=e;}}else{if(c&&!a.ex
&&Os(a.J)){d=new XJ;d.ES=a;d.ze=b;By(d);a.bD=d;}else if(!c){d=new XH;d.o9=a;d.oy=c;d.xZ=b;By(d);a.bD=d;}else{d=new XI;d.nL=a;d.my=c;d.vm=b;By(d);a.bD=d;}a.gy=1;}}return a;}
function Cb(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;Y(d);N(d);}a:{b:{if(!a.px){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CJ(a,b);b=b+1|0;}}if(!a.ex)IR(a.J,b,c+1|0);else{d=a.J;c=c+1|0;if(b>c){d=new BH;Y(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JT(d,b)|IK(d,f));}else{h=d.D.data;h[g]=h[g]&JT(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IK(d,f);}}Hl(d);}}}}return a;}
function AH3(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.hY)a.hY=1;c=a.cw;if(!(c^b.cw)){if(!c)GA(a.O,b.O);else Dp(a.O,b.O);}else if(c)Gf(a.O,b.O);else{Gt(a.O,b.O);Dp(a.O,b.O);a.cw=1;}if(!a.gy&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)GA(a.J,C5(b));else Dp(a.J,C5(b));}else if(c)Gf(a.J,C5(b));else{Gt(a.J,C5(b));Dp(a.J,C5(b));a.bi=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P8;e.Ck=a;e.uF=c;e.A2=d;e.vP=b;By(e);a.bD=e;}else{e=new Qq;e.CA=a;e.Bn=c;e.qC=d;e.qY=b;By(e);a.bD=e;}}else{if(!a.ex&&Os(a.J)){if(!c){d=new XK;d.Fx
=a;d.sq=b;By(d);a.bD=d;}else{d=new XL;d.Et=a;d.Be=b;By(d);a.bD=d;}}else if(!c){d=new XP;d.uK=a;d.tn=b;d.zc=c;By(d);a.bD=d;}else{d=new XQ;d.tJ=a;d.tS=b;d.z3=c;By(d);a.bD=d;}a.gy=1;}}}
function U3(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.hY)a.hY=1;c=a.cw;if(!(c^b.cw)){if(!c)Dp(a.O,b.O);else GA(a.O,b.O);}else if(!c)Gf(a.O,b.O);else{Gt(a.O,b.O);Dp(a.O,b.O);a.cw=0;}if(!a.gy&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dp(a.J,C5(b));else GA(a.J,C5(b));}else if(!c)Gf(a.J,C5(b));else{Gt(a.J,C5(b));Dp(a.J,C5(b));a.bi=0;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P$;e.Ep=a;e.Az=c;e.xo=d;e.tc=b;By(e);a.bD=e;}else{e=new P_;e.Ew=a;e.Ae=c;e.wS=d;e.Au=b;By(e);a.bD=e;}}else{if(!a.ex&&Os(a.J)){if(!c){d=new P6;d.CD
=a;d.ym=b;By(d);a.bD=d;}else{d=new P7;d.Fu=a;d.sd=b;By(d);a.bD=d;}}else if(!c){d=new Qa;d.B$=a;d.By=b;d.tN=c;By(d);a.bD=d;}else{d=new P5;d.tM=a;d.Aj=b;d.zp=c;By(d);a.bD=d;}a.gy=1;}}}
function Db(a,b){var c;c=a.bD;if(c!==null)return a.bi^c.n(b);return a.bi^DV(a.J,b);}
function C5(a){if(!a.gy)return a.J;return null;}
function AWT(a){return a.O;}
function AS4(a){var b,c;if(a.bD!==null)return a;b=C5(a);c=new P9;c.Ec=a;c.lr=b;By(c);return EN(c,a.bi);}
function AYY(a){var b,c,d;b=new K;M(b);c=Ij(a.J,0);while(c>=0){JZ(b,HQ(c));BN(b,124);c=Ij(a.J,c+1|0);}d=b.L;if(d>0)UE(b,d-1|0);return L(b);}
function AN9(a){return a.hY;}
function MG(){var a=this;Bu.call(a);a.D2=null;a.Fk=null;}
function Em(){BS.call(this);this.N=null;}
function Ds(a,b,c,d){NG(a,c);a.N=b;a.jP=d;}
function A2P(a){return a.N;}
function ASo(a,b){return !a.N.b2(b)&&!a.e.b2(b)?0:1;}
function A1D(a,b){return 1;}
function AQm(a){var b;a.cx=1;b=a.e;if(b!==null&&!b.cx){b=b.gB();if(b!==null){a.e.cx=1;a.e=b;}a.e.eU();}b=a.N;if(b!==null){if(!b.cx){b=b.gB();if(b!==null){a.N.cx=1;a.N=b;}a.N.eU();}else if(b instanceof HS&&b.eY.oR)a.N=b.e;}}
function Dc(){Em.call(this);this.be=null;}
function A3T(a,b,c){var d=new Dc();Fe(d,a,b,c);return d;}
function Fe(a,b,c,d){Ds(a,b,c,d);a.be=b;}
function AUI(a,b,c,d){var e,f;e=0;a:{while((b+a.be.ca()|0)<=d.z){f=a.be.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.ca()|0;e=e+(-1)|0;}return f;}
function FQ(){Dc.call(this);this.kR=null;}
function A4z(a,b,c,d){var e=new FQ();Sb(e,a,b,c,d);return e;}
function Sb(a,b,c,d,e){Fe(a,c,d,e);a.kR=b;}
function AVn(a,b,c,d){var e,f,g,h,i;e=a.kR;f=e.fJ;g=e.fI;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.ca()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.ca()|0;h=h+(-1)|0;}return i;}if((b+a.be.ca()|0)>d.z){d.dK=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C1=G(Em);
function AUS(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E6=G(Dc);
function AYB(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AUl(a,b){a.e=b;a.N.T(b);}
var US=G(Dc);
function A2H(a,b,c,d){while((b+a.be.ca()|0)<=d.z&&a.be.bz(b,c)>0){b=b+a.be.ca()|0;}return a.e.c(b,c,d);}
function AQL(a,b,c,d){var e,f,g;e=a.e.cr(b,c,d);if(e<0)return (-1);f=e-a.be.ca()|0;while(f>=b&&a.be.bz(f,c)>0){g=f-a.be.ca()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nN=null;a.m7=null;}
function AKs(a,b){if(!b&&a.nN===null)a.nN=a.F();else if(b&&a.m7===null)a.m7=EN(a.F(),1);if(b)return a.m7;return a.nN;}
var Dt=G(BU);
function Wt(){var a=this;G9.call(a);a.fJ=0;a.fI=0;}
function AY4(a){var b,c,d,e,f;b=a.fJ;c=a.fI;d=c!=2147483647?J0(c):C(21);e=new K;M(e);BN(e,123);f=U(e,b);BN(f,44);BN(H(f,d),125);return L(e);}
var Xx=G(BS);
function APu(a,b,c,d){return b;}
function AZy(a,b){return 0;}
function ADk(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A20(){var a=new ADk();AVZ(a);return a;}
function AVZ(a){a.D=BP(0);}
function LK(a,b){var c,d;c=b/32|0;if(b>=a.bt){J1(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IR(a,b,c){var d,e,f,g,h;d=BL(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){J1(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IK(a,b)&JT(a,c);}else{g=a.D.data;g[d]=g[d]|IK(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JT(a,c);}}}
function IK(a,b){return (-1)<<(b%32|0);}
function JT(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function OA(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))Hl(a);}}
function DV(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ij(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return I4(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I4(e[f])|0;f=f+1|0;}return (-1);}
function J1(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=Jh(a.D,c);}
function Hl(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Xa(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dp(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);Hl(a);}
function Gf(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hl(a);}
function GA(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J1(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gt(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J1(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hl(a);}
function Os(a){return a.bt?0:1;}
function OW(){var a=this;B8.call(a);a.sg=null;a.Eb=0;}
function Rc(){var a=this;B8.call(a);a.n3=null;a.pI=null;}
function AGo(a,b){var c=new Rc();AHG(c,a,b);return c;}
function AHG(a,b,c){B6(a);a.n3=b;a.pI=c;}
function AMe(a,b,c,d){var e,f,g,h,i;e=a.n3.c(b,c,d);if(e<0)a:{f=a.pI;g=d.c_;e=d.z;h=b+1|0;e=BL(h,e);if(e>0){d.dK=1;e=(-1);}else{i=P(c,b);if(!f.sg.n(i))e=(-1);else{if(CT(i)){if(e<0&&Dk(P(c,h))){e=(-1);break a;}}else if(Dk(i)&&b>g&&CT(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AZr(a,b){a.e=b;a.pI.e=b;a.n3.T(b);}
function AMG(a,b){return 1;}
function AMu(a,b){return 1;}
function D4(){var a=this;B8.call(a);a.d6=null;a.CY=0;}
function AX7(a){var b=new D4();ABK(b,a);return b;}
function ABK(a,b){B6(a);a.d6=b.l0();a.CY=b.bi;}
function AWO(a,b,c,d){var e,f,g,h;e=d.z;if(b<e){f=b+1|0;g=P(c,b);if(a.n(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jp(g,f)&&a.n(EO(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOj(a,b){return a.d6.n(b);}
function AMa(a,b){if(b instanceof Ef)return Np(a.d6,b.g2);if(b instanceof EL)return Np(a.d6,b.dH);if(b instanceof D4)return JX(a.d6,b.d6);if(!(b instanceof EE))return 1;return JX(a.d6,b.gr);}
function APn(a){return a.d6;}
function A0Y(a,b){a.e=b;}
function AN0(a,b){return 1;}
var MD=G(D4);
function APc(a,b){return a.d6.n(G4(G2(b)));}
function AEP(){var a=this;Cc.call(a);a.yT=null;a.CO=0;}
function AOE(a){var b=new AEP();AQV(b,a);return b;}
function AQV(a,b){D0(a);a.yT=b.l0();a.CO=b.bi;}
function AX_(a,b,c){return !a.yT.n(FJ(Fm(P(c,b))))?(-1):1;}
function EE(){var a=this;Cc.call(a);a.gr=null;a.C$=0;}
function AS0(a){var b=new EE();ARD(b,a);return b;}
function ARD(a,b){D0(a);a.gr=b.l0();a.C$=b.bi;}
function V9(a,b,c){return !a.gr.n(P(c,b))?(-1):1;}
function ARp(a,b){if(b instanceof EL)return Np(a.gr,b.dH);if(b instanceof EE)return JX(a.gr,b.gr);if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return 0;}return JX(a.gr,b.d6);}
function XT(){var a=this;B8.call(a);a.i8=null;a.pW=null;a.kO=0;}
function A1p(a,b){var c=new XT();AUT(c,a,b);return c;}
function AUT(a,b,c){B6(a);a.i8=b;a.kO=c;}
function AQb(a,b){a.e=b;}
function Rm(a){if(a.pW===null)a.pW=Hr(a.i8);return a.pW;}
function ALv(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.z;f=BP(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DX([k,l]):DX([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kO;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.i8.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kO==3){k=f[0];m=a.i8.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kO==2){b=f[0];m=a.i8.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AVJ(a,b){return b instanceof XT&&!Bj(Rm(b),Rm(a))?0:1;}
function AS9(a,b){return 1;}
function EL(){Cc.call(this);this.dH=0;}
function AE4(a){var b=new EL();ARH(b,a);return b;}
function ARH(a,b){D0(a);a.dH=b;}
function AXZ(a){return 1;}
function AOC(a,b,c){return a.dH!=P(c,b)?(-1):1;}
function ANM(a,b,c,d){var e,f,g;if(!(c instanceof BK))return IG(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=JW(c,a.dH,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function APp(a,b,c,d,e){var f;if(!(d instanceof BK))return IN(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hw(d,a.dH,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AS1(a,b){if(b instanceof EL)return b.dH!=a.dH?0:1;if(!(b instanceof EE)){if(b instanceof D4)return b.n(a.dH);if(!(b instanceof Ef))return 1;return 0;}return V9(b,0,Vb(a.dH))<=0?0:1;}
function AHt(){Cc.call(this);this.wI=0;}
function AZ6(a){var b=new AHt();AYU(b,a);return b;}
function AYU(a,b){D0(a);a.wI=FJ(Fm(b));}
function AUv(a,b,c){return a.wI!=FJ(Fm(P(c,b)))?(-1):1;}
function AEc(){var a=this;Cc.call(a);a.vV=0;a.xm=0;}
function AV4(a){var b=new AEc();ASb(b,a);return b;}
function ASb(a,b){D0(a);a.vV=b;a.xm=Jx(b);}
function ALD(a,b,c){return a.vV!=P(c,b)&&a.xm!=P(c,b)?(-1):1;}
function FU(){var a=this;B8.call(a);a.jI=0;a.m0=null;a.mv=null;a.mp=0;}
function A5w(a,b){var c=new FU();PK(c,a,b);return c;}
function PK(a,b,c){B6(a);a.jI=1;a.mv=b;a.mp=c;}
function A2i(a,b){a.e=b;}
function ARa(a,b,c,d){var e,f,g,h,i,j,k,l;e=BP(4);f=d.z;if(b>=f)return (-1);g=Lg(a,b,c,f);h=b+a.jI|0;i=AKO(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lg(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AKO(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jI|0;if(h>=f){b=k;break a;}g=Lg(a,h,c,f);b=k;}}}if(b!=a.mp)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.mv.data[g])break;g=g+1|0;}return (-1);}
function U1(a){var b,c;if(a.m0===null){b=new K;M(b);c=0;while(c<a.mp){JZ(b,HQ(a.mv.data[c]));c=c+1|0;}a.m0=L(b);}return a.m0;}
function Lg(a,b,c,d){var e,f,g;a.jI=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jp(e,f)){g=B5(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CT(g[0])&&Dk(g[1])?EO(g[0],g[1]):g[0];a.jI=2;}}return e;}
function APv(a,b){return b instanceof FU&&!Bj(U1(b),U1(a))?0:1;}
function AZ5(a,b){return 1;}
var Vm=G(FU);
var ABg=G(FU);
var V6=G(C1);
function AWf(a,b,c,d){var e;while(true){e=a.N.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Yw=G(C1);
function AYQ(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.N.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var GE=G(C1);
function A0W(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A1Q(a,b){a.e=b;a.N.T(b);}
var QA=G(GE);
function APl(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AY6(a,b){a.e=b;}
function Gn(){var a=this;C1.call(a);a.g$=null;a.dL=0;}
function A9j(a,b,c,d,e){var f=new Gn();MC(f,a,b,c,d,e);return f;}
function MC(a,b,c,d,e,f){Ds(a,c,d,e);a.g$=b;a.dL=f;}
function A2V(a,b,c,d){var e,f;e=Wr(d,a.dL);if(!a.N.I(d))return a.e.c(b,c,d);if(e>=a.g$.fI)return a.e.c(b,c,d);f=a.dL;e=e+1|0;ET(d,f,e);f=a.N.c(b,c,d);if(f>=0){ET(d,a.dL,0);return f;}f=a.dL;e=e+(-1)|0;ET(d,f,e);if(e>=a.g$.fJ)return a.e.c(b,c,d);ET(d,a.dL,0);return (-1);}
var Pb=G(Gn);
function AOR(a,b,c,d){var e,f,g;e=0;f=a.g$.fI;a:{while(true){g=a.N.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.g$.fJ)return (-1);return a.e.c(b,c,d);}
var RR=G(C1);
function ATQ(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var Zb=G(GE);
function AMH(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.N.c(b,c,d);return e;}
var TC=G(Gn);
function AU9(a,b,c,d){var e,f,g;e=Wr(d,a.dL);if(!a.N.I(d))return a.e.c(b,c,d);f=a.g$;if(e>=f.fI){ET(d,a.dL,0);return a.e.c(b,c,d);}if(e<f.fJ){ET(d,a.dL,e+1|0);g=a.N.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){ET(d,a.dL,0);return g;}ET(d,a.dL,e+1|0);g=a.N.c(b,c,d);}return g;}
var RS=G(Em);
function A2L(a,b,c,d){var e;e=d.z;if(e>b)return a.e.cB(b,e,c,d);return a.e.c(b,c,d);}
function ASL(a,b,c,d){var e;e=d.z;if(a.e.cB(b,e,c,d)>=0)return b;return (-1);}
function XD(){Em.call(this);this.m5=null;}
function ARq(a,b,c,d){var e,f;e=d.z;f=ABY(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cB(b,e,c,d);return a.e.c(b,c,d);}
function ALx(a,b,c,d){var e,f,g,h;e=d.z;f=a.e.cr(b,c,d);if(f<0)return (-1);g=ABY(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cB(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.m5.iP(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ABY(a,b,c,d){while(true){if(b>=c)return (-1);if(a.m5.iP(P(d,b)))break;b=b+1|0;}return b;}
var Fz=G();
var A9k=null;var A9l=null;function Yf(b){var c;if(!(b&1)){c=A9l;if(c!==null)return c;c=new ACi;A9l=c;return c;}c=A9k;if(c!==null)return c;c=new ACh;A9k=c;return c;}
var AD_=G(Dc);
function AL4(a,b,c,d){var e;a:{while(true){if((b+a.be.ca()|0)>d.z)break a;e=a.be.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var UN=G(E6);
function AQB(a,b,c,d){var e;if((b+a.be.ca()|0)<=d.z){e=a.be.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var X4=G(FQ);
function A0A(a,b,c,d){var e,f,g,h,i;e=a.kR;f=e.fJ;g=e.fI;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.ca()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.ca()|0)>d.z){d.dK=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Za=G(Dc);
function ARm(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.ca()|0)<=d.z){e=a.be.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ABr=G(E6);
function AL$(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var RH=G(FQ);
function A0P(a,b,c,d){var e,f,g,h,i,j;e=a.kR;f=e.fJ;g=e.fI;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.ca()|0)<=d.z){i=a.be.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.ca()|0)>d.z){d.dK=1;return (-1);}j=a.be.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Le=G(BS);
function AYn(a,b,c,d){if(b&&!(d.gz&&b==d.c_))return (-1);return a.e.c(b,c,d);}
function AXP(a,b){return 0;}
function AE$(){BS.call(this);this.vv=0;}
function A1f(a){var b=new AE$();APf(b,a);return b;}
function APf(a,b){B6(a);a.vv=b;}
function AVy(a,b,c,d){var e,f,g;e=b<d.z?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kw?0:d.c_;return (e!=32&&!Ze(a,e,b,g,c)?0:1)^(f!=32&&!Ze(a,f,b-1|0,g,c)?0:1)^a.vv?(-1):a.e.c(b,c,d);}
function AVI(a,b){return 0;}
function Ze(a,b,c,d,e){var f;if(!KJ(b)&&b!=95){a:{if(CF(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KJ(f))return 0;if(CF(f)!=6)return 1;}}return 1;}return 0;}
var XA=G(BS);
function APe(a,b,c,d){if(b!=d.iU)return (-1);return a.e.c(b,c,d);}
function AUd(a,b){return 0;}
function Vf(){BS.call(this);this.hd=0;}
function A32(a){var b=new Vf();AKH(b,a);return b;}
function AKH(a,b){B6(a);a.hd=b;}
function AZS(a,b,c,d){var e,f,g;e=!d.gz?J(c):d.z;if(b>=e){B1(d,a.hd,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){B1(d,a.hd,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B1(d,a.hd,0);return a.e.c(b,c,d);}
function AV$(a,b){var c;c=!DD(b,a.hd)?0:1;B1(b,a.hd,(-1));return c;}
var AC6=G(BS);
function AZp(a,b,c,d){if(b<(d.kw?J(c):d.z))return (-1);d.dK=1;d.Fa=1;return a.e.c(b,c,d);}
function AUu(a,b){return 0;}
function WN(){BS.call(this);this.zt=null;}
function AV5(a,b,c,d){a:{if(b!=d.z){if(!b)break a;if(d.gz&&b==d.c_)break a;if(a.zt.Ah(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOp(a,b){return 0;}
var AHe=G(B8);
function A39(){var a=new AHe();AZe(a);return a;}
function AZe(a){B6(a);}
function ATT(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dK=1;return (-1);}g=P(c,b);if(CT(g)){h=b+2|0;if(h<=e&&Jp(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AVL(a,b){a.e=b;}
function AZa(a){return (-2147483602);}
function AVK(a,b){return 1;}
function AEU(){B8.call(this);this.no=null;}
function A3Z(a){var b=new AEU();AM2(b,a);return b;}
function AM2(a,b){B6(a);a.no=b;}
function AZi(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dK=1;return (-1);}g=P(c,b);if(CT(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jp(g,h))return a.no.iP(EO(g,h))?(-1):a.e.c(b,c,d);}}return a.no.iP(g)?(-1):a.e.c(f,c,d);}
function A0r(a,b){a.e=b;}
function ALj(a){return (-2147483602);}
function AT5(a,b){return 1;}
function AKM(){BS.call(this);this.jD=0;}
function A3H(a){var b=new AKM();AXa(b,a);return b;}
function AXa(a,b){B6(a);a.jD=b;}
function APz(a,b,c,d){var e;e=!d.gz?J(c):d.z;if(b>=e){B1(d,a.jD,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){B1(d,a.jD,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AW_(a,b){var c;c=!DD(b,a.jD)?0:1;B1(b,a.jD,(-1));return c;}
function AJT(){BS.call(this);this.iI=0;}
function A3v(a){var b=new AJT();AXs(b,a);return b;}
function AXs(a,b){B6(a);a.iI=b;}
function AQ7(a,b,c,d){if((!d.gz?J(c)-b|0:d.z-b|0)<=0){B1(d,a.iI,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);B1(d,a.iI,1);return a.e.c(b+1|0,c,d);}
function AW5(a,b){var c;c=!DD(b,a.iI)?0:1;B1(b,a.iI,(-1));return c;}
function AH2(){BS.call(this);this.gN=0;}
function A3c(a){var b=new AH2();A2X(b,a);return b;}
function A2X(a,b){B6(a);a.gN=b;}
function AXL(a,b,c,d){var e,f,g;e=!d.gz?J(c)-b|0:d.z-b|0;if(!e){B1(d,a.gN,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B1(d,a.gN,0);return a.e.c(b,c,d);case 13:if(g!=10){B1(d,a.gN,0);return a.e.c(b,c,d);}B1(d,a.gN,0);return a.e.c(b,c,d);default:}return (-1);}
function AM6(a,b){var c;c=!DD(b,a.gN)?0:1;B1(b,a.gN,(-1));return c;}
function Ic(){var a=this;B8.call(a);a.qR=0;a.hy=0;}
function A5u(a,b){var c=new Ic();Qj(c,a,b);return c;}
function Qj(a,b,c){B6(a);a.qR=b;a.hy=c;}
function AL6(a,b,c,d){var e,f,g,h;e=GO(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hy,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Jx(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AZ0(a,b){a.e=b;}
function GO(a,b){var c,d;c=a.qR;d=Gw(b,c);c=I8(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nr)?Cv(b.nr,d,c):null;}
function AR6(a,b){var c;c=!DD(b,a.hy)?0:1;B1(b,a.hy,(-1));return c;}
var AKS=G(Ic);
function A4l(a,b){var c=new AKS();A1G(c,a,b);return c;}
function A1G(a,b,c){Qj(a,b,c);}
function AM$(a,b,c,d){var e,f;e=GO(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=!ABJ(c,e,b)?(-1):J(e);if(f<0)return (-1);B1(d,a.hy,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ATe(a,b,c,d){var e,f;e=GO(a,d);f=d.c_;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=Yx(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ALT(a,b,c,d,e){var f,g;f=GO(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=QQ(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AYL(a,b){return 1;}
var AJd=G(Ic);
function A3w(a,b){var c=new AJd();AOo(c,a,b);return c;}
function AOo(a,b,c){Qj(a,b,c);}
function AP1(a,b,c,d){var e,f;e=GO(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hy,J(e));return a.e.c(b+J(e)|0,c,d);}if(FJ(Fm(P(e,f)))!=FJ(Fm(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PX=G(GS);
function AOa(a,b,c,d,e){Ww(a,b,c,d,e);return a;}
function AVB(a,b,c,d){ADs(a,b,c,d);return a;}
function AVY(a,b){MX(a,b);}
function A07(a,b,c){ADI(a,b,c);return a;}
function ZJ(){var a=this;Cc.call(a);a.cG=null;a.o2=null;a.ny=null;}
function ANk(a,b,c){return !Lc(a,c,b)?(-1):a.bI;}
function AVw(a,b,c,d){var e,f,g;e=d.z;while(true){if(b>e)return (-1);f=P(a.cG,a.bI-1|0);a:{while(true){g=a.bI;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lc(a,c,b))break;b=b+AAp(a.o2,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bI|0,c,d)>=0)break;b=b+1|0;}return b;}
function AXe(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cG,0);g=(J(d)-c|0)-a.bI|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lc(a,d,c))break;c=c-AAp(a.ny,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bI|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOH(a,b){var c;if(b instanceof EL)return b.dH!=P(a.cG,0)?0:1;if(b instanceof EE)return V9(b,0,Cv(a.cG,0,1))<=0?0:1;if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return J(a.cG)>1&&b.g2==EO(P(a.cG,0),P(a.cG,1))?1:0;}a:{b:{b=b;if(!b.n(P(a.cG,0))){if(J(a.cG)<=1)break b;if(!b.n(EO(P(a.cG,0),P(a.cG,1))))break b;}c=1;break a;}c=0;}return c;}
function Lc(a,b,c){var d;d=0;while(d<a.bI){if(P(b,d+c|0)!=P(a.cG,d))return 0;d=d+1|0;}return 1;}
function AEb(){Cc.call(this);this.lU=null;}
function A5v(a){var b=new AEb();A1l(b,a);return b;}
function A1l(a,b){var c,d,e;D0(a);c=new K;M(c);d=0;while(true){e=BL(d,b.L);if(e>=0){a.lU=L(c);a.bI=c.L;return;}if(d<0)break;if(e>=0)break;BN(c,FJ(Fm(b.C.data[d])));d=d+1|0;}b=new BH;Y(b);N(b);}
function AP8(a,b,c){var d;d=0;while(true){if(d>=J(a.lU))return J(a.lU);if(P(a.lU,d)!=FJ(Fm(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Pe(){Cc.call(this);this.jA=null;}
function A0B(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jA))return J(a.jA);e=P(a.jA,d);f=b+d|0;if(e!=P(c,f)&&Jx(P(a.jA,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hj=G();
var A9m=null;var A9n=null;var A9i=null;function ASe(){ASe=Bn(Hj);ANB();}
function ANB(){A9m=A35();A9n=A4N();A9i=I($rt_arraycls(B),[I(B,[C(476),A4a()]),I(B,[C(477),A3a()]),I(B,[C(478),A5h()]),I(B,[C(479),A5l()]),I(B,[C(480),A9n]),I(B,[C(481),A4U()]),I(B,[C(482),A3A()]),I(B,[C(483),A4n()]),I(B,[C(484),A4k()]),I(B,[C(485),A3i()]),I(B,[C(486),A3p()]),I(B,[C(487),A4q()]),I(B,[C(488),A3S()]),I(B,[C(489),A28()]),I(B,[C(490),A5j()]),I(B,[C(491),A3o()]),I(B,[C(492),A4S()]),I(B,[C(493),A4y()]),I(B,[C(494),A4T()]),I(B,[C(495),A3k()]),I(B,[C(496),A5o()]),I(B,[C(497),A4t()]),I(B,[C(498),A3J()]),
I(B,[C(499),A5f()]),I(B,[C(500),A5c()]),I(B,[C(501),A36()]),I(B,[C(502),A3j()]),I(B,[C(503),A47()]),I(B,[C(504),A9m]),I(B,[C(505),A3M()]),I(B,[C(506),A4p()]),I(B,[C(507),A9m]),I(B,[C(508),A26()]),I(B,[C(509),A9n]),I(B,[C(510),A3s()]),I(B,[C(511),R(0,127)]),I(B,[C(512),R(128,255)]),I(B,[C(513),R(256,383)]),I(B,[C(514),R(384,591)]),I(B,[C(515),R(592,687)]),I(B,[C(516),R(688,767)]),I(B,[C(517),R(768,879)]),I(B,[C(518),R(880,1023)]),I(B,[C(519),R(1024,1279)]),I(B,[C(520),R(1280,1327)]),I(B,[C(521),R(1328,1423)]),
I(B,[C(522),R(1424,1535)]),I(B,[C(523),R(1536,1791)]),I(B,[C(524),R(1792,1871)]),I(B,[C(525),R(1872,1919)]),I(B,[C(526),R(1920,1983)]),I(B,[C(527),R(2304,2431)]),I(B,[C(528),R(2432,2559)]),I(B,[C(529),R(2560,2687)]),I(B,[C(530),R(2688,2815)]),I(B,[C(531),R(2816,2943)]),I(B,[C(532),R(2944,3071)]),I(B,[C(533),R(3072,3199)]),I(B,[C(534),R(3200,3327)]),I(B,[C(535),R(3328,3455)]),I(B,[C(536),R(3456,3583)]),I(B,[C(537),R(3584,3711)]),I(B,[C(538),R(3712,3839)]),I(B,[C(539),R(3840,4095)]),I(B,[C(540),R(4096,4255)]),
I(B,[C(541),R(4256,4351)]),I(B,[C(542),R(4352,4607)]),I(B,[C(543),R(4608,4991)]),I(B,[C(544),R(4992,5023)]),I(B,[C(545),R(5024,5119)]),I(B,[C(546),R(5120,5759)]),I(B,[C(547),R(5760,5791)]),I(B,[C(548),R(5792,5887)]),I(B,[C(549),R(5888,5919)]),I(B,[C(550),R(5920,5951)]),I(B,[C(551),R(5952,5983)]),I(B,[C(552),R(5984,6015)]),I(B,[C(553),R(6016,6143)]),I(B,[C(554),R(6144,6319)]),I(B,[C(555),R(6400,6479)]),I(B,[C(556),R(6480,6527)]),I(B,[C(557),R(6528,6623)]),I(B,[C(558),R(6624,6655)]),I(B,[C(559),R(6656,6687)]),
I(B,[C(560),R(7424,7551)]),I(B,[C(561),R(7552,7615)]),I(B,[C(562),R(7616,7679)]),I(B,[C(563),R(7680,7935)]),I(B,[C(564),R(7936,8191)]),I(B,[C(565),R(8192,8303)]),I(B,[C(566),R(8304,8351)]),I(B,[C(567),R(8352,8399)]),I(B,[C(568),R(8400,8447)]),I(B,[C(569),R(8448,8527)]),I(B,[C(570),R(8528,8591)]),I(B,[C(571),R(8592,8703)]),I(B,[C(572),R(8704,8959)]),I(B,[C(573),R(8960,9215)]),I(B,[C(574),R(9216,9279)]),I(B,[C(575),R(9280,9311)]),I(B,[C(576),R(9312,9471)]),I(B,[C(577),R(9472,9599)]),I(B,[C(578),R(9600,9631)]),
I(B,[C(579),R(9632,9727)]),I(B,[C(580),R(9728,9983)]),I(B,[C(581),R(9984,10175)]),I(B,[C(582),R(10176,10223)]),I(B,[C(583),R(10224,10239)]),I(B,[C(584),R(10240,10495)]),I(B,[C(585),R(10496,10623)]),I(B,[C(586),R(10624,10751)]),I(B,[C(587),R(10752,11007)]),I(B,[C(588),R(11008,11263)]),I(B,[C(589),R(11264,11359)]),I(B,[C(590),R(11392,11519)]),I(B,[C(591),R(11520,11567)]),I(B,[C(592),R(11568,11647)]),I(B,[C(593),R(11648,11743)]),I(B,[C(594),R(11776,11903)]),I(B,[C(595),R(11904,12031)]),I(B,[C(596),R(12032,12255)]),
I(B,[C(597),R(12272,12287)]),I(B,[C(598),R(12288,12351)]),I(B,[C(599),R(12352,12447)]),I(B,[C(600),R(12448,12543)]),I(B,[C(601),R(12544,12591)]),I(B,[C(602),R(12592,12687)]),I(B,[C(603),R(12688,12703)]),I(B,[C(604),R(12704,12735)]),I(B,[C(605),R(12736,12783)]),I(B,[C(606),R(12784,12799)]),I(B,[C(607),R(12800,13055)]),I(B,[C(608),R(13056,13311)]),I(B,[C(609),R(13312,19893)]),I(B,[C(610),R(19904,19967)]),I(B,[C(611),R(19968,40959)]),I(B,[C(612),R(40960,42127)]),I(B,[C(613),R(42128,42191)]),I(B,[C(614),R(42752,
42783)]),I(B,[C(615),R(43008,43055)]),I(B,[C(616),R(44032,55203)]),I(B,[C(617),R(55296,56191)]),I(B,[C(618),R(56192,56319)]),I(B,[C(619),R(56320,57343)]),I(B,[C(620),R(57344,63743)]),I(B,[C(621),R(63744,64255)]),I(B,[C(622),R(64256,64335)]),I(B,[C(623),R(64336,65023)]),I(B,[C(624),R(65024,65039)]),I(B,[C(625),R(65040,65055)]),I(B,[C(626),R(65056,65071)]),I(B,[C(627),R(65072,65103)]),I(B,[C(628),R(65104,65135)]),I(B,[C(629),R(65136,65279)]),I(B,[C(630),R(65280,65519)]),I(B,[C(631),R(0,1114111)]),I(B,[C(632),
A4r()]),I(B,[C(633),B4(0,1)]),I(B,[C(634),Kg(62,1)]),I(B,[C(635),B4(1,1)]),I(B,[C(636),B4(2,1)]),I(B,[C(637),B4(3,0)]),I(B,[C(638),B4(4,0)]),I(B,[C(639),B4(5,1)]),I(B,[C(640),Kg(448,1)]),I(B,[C(641),B4(6,1)]),I(B,[C(642),B4(7,0)]),I(B,[C(643),B4(8,1)]),I(B,[C(644),Kg(3584,1)]),I(B,[C(645),B4(9,1)]),I(B,[C(646),B4(10,1)]),I(B,[C(647),B4(11,1)]),I(B,[C(648),Kg(28672,0)]),I(B,[C(649),B4(12,0)]),I(B,[C(650),B4(13,0)]),I(B,[C(651),B4(14,0)]),I(B,[C(652),A4K(983040,1,1)]),I(B,[C(653),B4(15,0)]),I(B,[C(654),B4(16,
1)]),I(B,[C(655),B4(18,1)]),I(B,[C(656),A3G(19,0,1)]),I(B,[C(657),Kg(1643118592,1)]),I(B,[C(658),B4(20,0)]),I(B,[C(659),B4(21,0)]),I(B,[C(660),B4(22,0)]),I(B,[C(661),B4(23,0)]),I(B,[C(662),B4(24,1)]),I(B,[C(663),Kg(2113929216,1)]),I(B,[C(664),B4(25,1)]),I(B,[C(665),B4(26,0)]),I(B,[C(666),B4(27,0)]),I(B,[C(667),B4(28,1)]),I(B,[C(668),B4(29,0)]),I(B,[C(669),B4(30,0)])]);}
function Wc(){Cc.call(this);this.s2=0;}
function ASt(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.s2!=G4(G2(EO(e,d)))?(-1):2;}
function NO(){B8.call(this);this.hm=0;}
function AQ3(a){var b=new NO();AML(b,a);return b;}
function AML(a,b){B6(a);a.hm=b;}
function AZw(a,b){a.e=b;}
function AV_(a,b,c,d){var e,f;e=b+1|0;if(e>d.z){d.dK=1;return (-1);}f=P(c,b);if(b>d.c_&&CT(P(c,b-1|0)))return (-1);if(a.hm!=f)return (-1);return a.e.c(e,c,d);}
function AOF(a,b,c,d){var e,f,g,h;if(!(c instanceof BK))return IG(a,b,c,d);e=d.c_;f=d.z;while(true){if(b>=f)return (-1);g=JW(c,a.hm,b);if(g<0)return (-1);if(g>e&&CT(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AWy(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IN(a,b,c,d,e);f=e.c_;a:{while(true){if(c<b)return (-1);g=Hw(d,a.hm,c);if(g<0)break a;if(g<b)break a;if(g>f&&CT(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALS(a,b){if(b instanceof EL)return 0;if(b instanceof EE)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof NW)return 0;if(!(b instanceof NO))return 1;return b.hm!=a.hm?0:1;}
function ASV(a,b){return 1;}
function NW(){B8.call(this);this.g8=0;}
function AXO(a){var b=new NW();AQ5(b,a);return b;}
function AQ5(a,b){B6(a);a.g8=b;}
function AVX(a,b){a.e=b;}
function ALz(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;g=BL(f,e);if(g>0){d.dK=1;return (-1);}h=P(c,b);if(g<0&&Dk(P(c,f)))return (-1);if(a.g8!=h)return (-1);return a.e.c(f,c,d);}
function AZH(a,b,c,d){var e,f;if(!(c instanceof BK))return IG(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=JW(c,a.g8,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dk(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ASp(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IN(a,b,c,d,e);f=e.z;a:{while(true){if(c<b)return (-1);g=Hw(d,a.g8,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dk(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ANl(a,b){if(b instanceof EL)return 0;if(b instanceof EE)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof NO)return 0;if(!(b instanceof NW))return 1;return b.g8!=a.g8?0:1;}
function AZN(a,b){return 1;}
function Ef(){var a=this;Cc.call(a);a.mk=0;a.lo=0;a.g2=0;}
function A0b(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.mk==e&&a.lo==d?2:(-1);}
function AYZ(a,b,c,d){var e,f;if(!(c instanceof BK))return IG(a,b,c,d);e=d.z;while(b<e){b=JW(c,a.mk,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.lo==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AMM(a,b,c,d,e){var f;if(!(d instanceof BK))return IN(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hw(d,a.lo,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.mk==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AZ7(a,b){if(b instanceof Ef)return b.g2!=a.g2?0:1;if(b instanceof D4)return b.n(a.g2);if(b instanceof EL)return 0;if(!(b instanceof EE))return 1;return 0;}
var ACh=G(Fz);
function AMR(a,b){return b!=10?0:1;}
function AR3(a,b,c){return b!=10?0:1;}
var ACi=G(Fz);
function A0Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ATD(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGE(){var a=this;B.call(a);a.on=null;a.mx=null;a.ji=0;a.wk=0;}
function AY_(a){var b=new AGE();APd(b,a);return b;}
function APd(a,b){var c,d;while(true){c=a.ji;if(b<c)break;a.ji=c<<1|1;}d=c<<1|1;a.ji=d;d=d+1|0;a.on=BP(d);a.mx=BP(d);a.wk=b;}
function RI(a,b,c){var d,e,f,g;d=0;e=a.ji;f=b&e;while(true){g=a.on.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mx.data[f]=c;}
function AAp(a,b){var c,d,e,f;c=a.ji;d=b&c;e=0;while(true){f=a.on.data[d];if(!f)break;if(f==b)return a.mx.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wk;}
var AEo=G();
var NM=G(Bf);
function A35(){var a=new NM();AOS(a);return a;}
function AOS(a){}
function AJj(a){return CJ(Cb(DE(),9,13),32);}
var M$=G(Bf);
function A4N(){var a=new M$();ASP(a);return a;}
function ASP(a){}
function AJP(a){return Cb(DE(),48,57);}
var AGy=G(Bf);
function A4a(){var a=new AGy();AOt(a);return a;}
function AOt(a){}
function A0u(a){return Cb(DE(),97,122);}
var AGT=G(Bf);
function A3a(){var a=new AGT();APh(a);return a;}
function APh(a){}
function ASY(a){return Cb(DE(),65,90);}
var AGV=G(Bf);
function A5h(){var a=new AGV();AMn(a);return a;}
function AMn(a){}
function ANR(a){return Cb(DE(),0,127);}
var NI=G(Bf);
function A5l(){var a=new NI();ANa(a);return a;}
function ANa(a){}
function AEX(a){return Cb(Cb(DE(),97,122),65,90);}
var LI=G(NI);
function A4U(){var a=new LI();AO1(a);return a;}
function AO1(a){}
function AFr(a){return Cb(AEX(a),48,57);}
var AHT=G(Bf);
function A3A(){var a=new AHT();AYR(a);return a;}
function AYR(a){}
function AXt(a){return Cb(Cb(Cb(DE(),33,64),91,96),123,126);}
var OC=G(LI);
function A4n(){var a=new OC();ARP(a);return a;}
function ARP(a){}
function AH0(a){return Cb(Cb(Cb(AFr(a),33,64),91,96),123,126);}
var AJv=G(OC);
function A4k(){var a=new AJv();ASK(a);return a;}
function ASK(a){}
function AQo(a){return CJ(AH0(a),32);}
var AFV=G(Bf);
function A3i(){var a=new AFV();A0C(a);return a;}
function A0C(a){}
function AWn(a){return CJ(CJ(DE(),32),9);}
var AE6=G(Bf);
function A3p(){var a=new AE6();A14(a);return a;}
function A14(a){}
function AQk(a){return CJ(Cb(DE(),0,31),127);}
var AIL=G(Bf);
function A4q(){var a=new AIL();AMx(a);return a;}
function AMx(a){}
function ATG(a){return Cb(Cb(Cb(DE(),48,57),97,102),65,70);}
var AKB=G(Bf);
function A3S(){var a=new AKB();AVm(a);return a;}
function AVm(a){}
function AY9(a){var b;b=new AAN;b.EP=a;By(b);b.R=1;return b;}
var AHW=G(Bf);
function A28(){var a=new AHW();ARZ(a);return a;}
function ARZ(a){}
function AUB(a){var b;b=new Wm;b.ET=a;By(b);b.R=1;return b;}
var AKj=G(Bf);
function A5j(){var a=new AKj();AMp(a);return a;}
function AMp(a){}
function AOX(a){var b;b=new R6;b.EE=a;By(b);return b;}
var AGp=G(Bf);
function A3o(){var a=new AGp();AQl(a);return a;}
function AQl(a){}
function ASa(a){var b;b=new R5;b.CG=a;By(b);return b;}
var AG8=G(Bf);
function A4S(){var a=new AG8();AM9(a);return a;}
function AM9(a){}
function AWl(a){var b;b=new U5;b.DL=a;By(b);IR(b.O,0,2048);b.R=1;return b;}
var AEA=G(Bf);
function A4y(){var a=new AEA();AMP(a);return a;}
function AMP(a){}
function ANx(a){var b;b=new X1;b.E5=a;By(b);b.R=1;return b;}
var AH9=G(Bf);
function A4T(){var a=new AH9();AP5(a);return a;}
function AP5(a){}
function A17(a){var b;b=new PU;b.D4=a;By(b);b.R=1;return b;}
var AKq=G(Bf);
function A3k(){var a=new AKq();AQE(a);return a;}
function AQE(a){}
function AUw(a){var b;b=new Zk;b.CZ=a;By(b);return b;}
var AGO=G(Bf);
function A5o(){var a=new AGO();AXD(a);return a;}
function AXD(a){}
function APA(a){var b;b=new Wi;b.Cc=a;By(b);b.R=1;return b;}
var AI5=G(Bf);
function A4t(){var a=new AI5();ALV(a);return a;}
function ALV(a){}
function ANE(a){var b;b=new Wk;b.Dg=a;By(b);b.R=1;return b;}
var AFX=G(Bf);
function A3J(){var a=new AFX();AMU(a);return a;}
function AMU(a){}
function AXg(a){var b;b=new Py;b.DI=a;By(b);b.R=1;return b;}
var AHD=G(Bf);
function A5f(){var a=new AHD();APF(a);return a;}
function APF(a){}
function AYh(a){var b;b=new Yi;b.Fm=a;By(b);b.R=1;return b;}
var AKv=G(Bf);
function A5c(){var a=new AKv();AY3(a);return a;}
function AY3(a){}
function AS$(a){var b;b=new Yp;b.CN=a;By(b);return b;}
var AFB=G(Bf);
function A36(){var a=new AFB();AMQ(a);return a;}
function AMQ(a){}
function ARI(a){var b;b=new ABa;b.E7=a;By(b);return b;}
var AFg=G(Bf);
function A3j(){var a=new AFg();A0g(a);return a;}
function A0g(a){}
function AQP(a){var b;b=new AAi;b.Ce=a;By(b);b.R=1;return b;}
var AHU=G(Bf);
function A47(){var a=new AHU();AXy(a);return a;}
function AXy(a){}
function A0m(a){var b;b=new O1;b.Fy=a;By(b);b.R=1;return b;}
var KB=G(Bf);
function A3M(){var a=new KB();ANL(a);return a;}
function ANL(a){}
function AFW(a){return CJ(Cb(Cb(Cb(DE(),97,122),65,90),48,57),95);}
var AKJ=G(KB);
function A4p(){var a=new AKJ();AXG(a);return a;}
function AXG(a){}
function AQH(a){var b;b=EN(AFW(a),1);b.R=1;return b;}
var AJA=G(NM);
function A26(){var a=new AJA();ATq(a);return a;}
function ATq(a){}
function AVt(a){var b;b=EN(AJj(a),1);b.R=1;return b;}
var AFe=G(M$);
function A3s(){var a=new AFe();AX$(a);return a;}
function AX$(a){}
function AOz(a){var b;b=EN(AJP(a),1);b.R=1;return b;}
function AIO(){var a=this;Bf.call(a);a.sV=0;a.zr=0;}
function R(a,b){var c=new AIO();A16(c,a,b);return c;}
function A16(a,b,c){a.sV=b;a.zr=c;}
function APP(a){return Cb(DE(),a.sV,a.zr);}
var AIZ=G(Bf);
function A4r(){var a=new AIZ();ATK(a);return a;}
function ATK(a){}
function ATv(a){return Cb(Cb(DE(),65279,65279),65520,65533);}
function AJo(){var a=this;Bf.call(a);a.pX=0;a.ow=0;a.x6=0;}
function B4(a,b){var c=new AJo();AM5(c,a,b);return c;}
function A3G(a,b,c){var d=new AJo();ATA(d,a,b,c);return d;}
function AM5(a,b,c){a.ow=c;a.pX=b;}
function ATA(a,b,c,d){a.x6=d;a.ow=c;a.pX=b;}
function AW4(a){var b;b=A3_(a.pX);if(a.x6)IR(b.O,0,2048);b.R=a.ow;return b;}
function AJw(){var a=this;Bf.call(a);a.n0=0;a.mA=0;a.qX=0;}
function Kg(a,b){var c=new AJw();ANF(c,a,b);return c;}
function A4K(a,b,c){var d=new AJw();AUx(d,a,b,c);return d;}
function ANF(a,b,c){a.mA=c;a.n0=b;}
function AUx(a,b,c,d){a.qX=d;a.mA=c;a.n0=b;}
function ALp(a){var b;b=new ZQ;AGi(b,a.n0);if(a.qX)IR(b.O,0,2048);b.R=a.mA;return b;}
var AIR=G();
var AEO=G();
function AFA(b){var c,d,e,f,g,h,i;c=ASl(Gs(b));d=M2(c);e=BP(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+M2(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Pa(c);h=h+1|0;}return e;}
function Nx(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function WQ(){var a=this;B.call(a);a.yv=0;a.ts=0;a.yF=null;}
function AOb(a,b,c){var d=new WQ();ASJ(d,a,b,c);return d;}
function ASJ(a,b,c,d){a.yv=b;a.ts=c;a.yF=d;}
function AGJ(){var a=this;B.call(a);a.xG=null;a.y5=0;}
function ASl(a){var b=new AGJ();AWv(b,a);return b;}
function AWv(a,b){a.xG=b;}
var AJa=G();
function M2(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.xG.data;f=b.y5;b.y5=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Pa(b){var c,d;c=M2(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Mt=G(Bu);
function Y9(){var a=this;B.call(a);a.w4=null;a.w3=null;a.w2=null;}
function AYm(a,b){var c,d,e,f,g;c=a.w4;d=a.w3;e=a.w2;f=new ADM;g=AB0(DW(d));AKY(f,b,null,g);H0(c,f);e.f();}
function Y8(){B.call(this);this.As=null;}
function ATN(a,b){Bk(a.As,b);}
function AIF(){B.call(this);this.SS=null;}
function Sn(){B.call(this);this.sK=null;}
function AW$(a,b){b.hl=a.sK;}
function RL(){B.call(this);this.ub=null;}
function AM0(a,b){GK(a.ub.bu,b,A79);}
function ACc(){var a=this;B.call(a);a.Fz=null;a.kD=null;}
function ANV(a,b){var c;c=a.kD;b=b;a.kD=XZ(!c.oi&&!b.eO?0:1);return 1;}
function ABB(){var a=this;B.call(a);a.uT=null;a.uU=null;}
function A1d(a){var b,c;b=a.uT;c=a.uU;Gi(b.x.bw,FR(c));}
function ABE(){var a=this;B.call(a);a.CW=null;a.s6=null;}
function ABG(){B.call(this);this.Fe=null;}
function A1U(a,b){$rt_globals.console.info($rt_ustr(b));}
var KH=G(0);
function PI(){var a=this;B.call(a);a.ll=0;a.Cg=null;}
function AZ2(a,b){var c,d;c=Cl(b);d=new K;M(d);H(H(d,C(670)),c);$rt_globals.console.info($rt_ustr(L(d)));a.ll=a.ll+1|0;Nh(b,a);}
function AXB(a,b){var c;b=Cl(b);c=new K;M(c);H(H(c,C(671)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ASu(a){var b;b=a.ll-1|0;a.ll=b;if(!b)Bk(Bt(),C(672));}
function AA6(){var a=this;B.call(a);a.Fj=null;a.Fi=null;}
function R4(){var a=this;B.call(a);a.Dv=null;a.Du=null;a.Dt=null;}
function RV(){B.call(this);this.sN=null;}
function AQ_(a){var b,c,d,e;b=a.sN;c=Bt();d=GB(b);e=new K;M(e);H(H(e,C(673)),d);Bk(c,L(e));c=b.jN;e=new AAL;e.c6=b;e.lN=BM();e.mg=BM();Nh(c,e);}
function UR(){var a=this;Z.call(a);a.xq=null;a.Fg=null;}
function ANX(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cw^DV(a.xq,c):0;}
function UP(){var a=this;Z.call(a);a.AS=null;a.vG=null;a.Dq=null;}
function AUR(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cw^DV(a.AS,c):0;return a.vG.n(b)&&!d?1:0;}
function P9(){var a=this;Z.call(a);a.lr=null;a.Ec=null;}
function APG(a,b){return a.bi^DV(a.lr,b);}
function AXi(a){var b,c,d;b=new K;M(b);c=Ij(a.lr,0);while(c>=0){JZ(b,HQ(c));BN(b,124);c=Ij(a.lr,c+1|0);}d=b.L;if(d>0)UE(b,d-1|0);return L(b);}
function XJ(){var a=this;Z.call(a);a.ze=null;a.ES=null;}
function A0e(a,b){return a.ze.n(b);}
function XH(){var a=this;Z.call(a);a.oy=0;a.xZ=null;a.o9=null;}
function ASs(a,b){return !(a.oy^DV(a.o9.J,b))&&!(a.oy^a.o9.ex^a.xZ.n(b))?0:1;}
function XI(){var a=this;Z.call(a);a.my=0;a.vm=null;a.nL=null;}
function AYy(a,b){return !(a.my^DV(a.nL.J,b))&&!(a.my^a.nL.ex^a.vm.n(b))?1:0;}
function XM(){var a=this;Z.call(a);a.BA=0;a.vs=null;a.vj=null;a.Eq=null;}
function AWF(a,b){return a.BA^(!a.vs.n(b)&&!a.vj.n(b)?0:1);}
function XO(){var a=this;Z.call(a);a.te=0;a.za=null;a.yK=null;a.Fw=null;}
function ALk(a,b){return a.te^(!a.za.n(b)&&!a.yK.n(b)?0:1)?0:1;}
function XK(){var a=this;Z.call(a);a.sq=null;a.Fx=null;}
function AOu(a,b){return Db(a.sq,b);}
function XL(){var a=this;Z.call(a);a.Be=null;a.Et=null;}
function AQa(a,b){return Db(a.Be,b)?0:1;}
function XP(){var a=this;Z.call(a);a.tn=null;a.zc=0;a.uK=null;}
function ATh(a,b){return !Db(a.tn,b)&&!(a.zc^DV(a.uK.J,b))?0:1;}
function XQ(){var a=this;Z.call(a);a.tS=null;a.z3=0;a.tJ=null;}
function AWh(a,b){return !Db(a.tS,b)&&!(a.z3^DV(a.tJ.J,b))?1:0;}
function P8(){var a=this;Z.call(a);a.uF=0;a.A2=null;a.vP=null;a.Ck=null;}
function A25(a,b){return !(a.uF^a.A2.n(b))&&!Db(a.vP,b)?0:1;}
function Qq(){var a=this;Z.call(a);a.Bn=0;a.qC=null;a.qY=null;a.CA=null;}
function AOx(a,b){return !(a.Bn^a.qC.n(b))&&!Db(a.qY,b)?1:0;}
function P6(){var a=this;Z.call(a);a.ym=null;a.CD=null;}
function ANc(a,b){return Db(a.ym,b);}
function P7(){var a=this;Z.call(a);a.sd=null;a.Fu=null;}
function AW8(a,b){return Db(a.sd,b)?0:1;}
function Qa(){var a=this;Z.call(a);a.By=null;a.tN=0;a.B$=null;}
function APg(a,b){return Db(a.By,b)&&a.tN^DV(a.B$.J,b)?1:0;}
function P5(){var a=this;Z.call(a);a.Aj=null;a.zp=0;a.tM=null;}
function A1g(a,b){return Db(a.Aj,b)&&a.zp^DV(a.tM.J,b)?0:1;}
function P$(){var a=this;Z.call(a);a.Az=0;a.xo=null;a.tc=null;a.Ep=null;}
function AVD(a,b){return a.Az^a.xo.n(b)&&Db(a.tc,b)?1:0;}
function P_(){var a=this;Z.call(a);a.Ae=0;a.wS=null;a.Au=null;a.Ew=null;}
function ARC(a,b){return a.Ae^a.wS.n(b)&&Db(a.Au,b)?0:1;}
var L$=G(0);
function AAh(){var a=this;B.call(a);a.Cw=null;a.A3=null;a.lI=null;a.cI=null;a.kl=0;a.o5=0;}
function OQ(a,b){var c,d,e;c=J(a.lI);if(b>=0&&b<=c){ADR(a.cI,null,(-1),(-1));d=a.cI;d.l7=1;d.eQ=b;c=d.iU;if(c<0)c=b;d.iU=c;b=a.A3.cr(b,a.lI,d);if(b==(-1))a.cI.dK=1;if(b>=0){d=a.cI;if(d.kt){e=d.d_.data;if(e[0]==(-1)){c=d.eQ;e[0]=c;e[1]=c;}d.iU=MA(d);return 1;}}a.cI.eQ=(-1);return 0;}d=new BH;Bm(d,Dl(b));N(d);}
function AHC(a){return Qp(a.cI,0);}
function AI1(a){return R7(a.cI,0);}
function AEs(a){return a.cI.kw;}
function AJC(){var a=this;B.call(a);a.OW=null;a.OU=null;a.OX=0.0;}
var Da=G(0);
var A6N=null;var A75=null;var A6P=null;var A6O=null;var A6R=null;var A6Q=null;var A6T=null;var A6S=null;var A6V=null;var A6U=null;var A6W=null;function AGX(){AGX=Bn(Da);A1_();}
function A1_(){A6N=CD(0);A75=Dx(8,8,8);A6P=S(C(674));A6O=Dx(255,255,255);A6R=S(C(675));A6Q=S(C(676));A6T=S(C(677));A6S=S(C(678));A6V=EX(205,205,205,153);A6U=EX(255,255,255,0);A6W=S(C(116));}
function Cz(){CI.call(this);this.pm=null;}
var A9o=null;var A9p=null;var A9q=null;var A9r=null;var A9s=null;var A9t=null;var A9u=null;var A9v=null;var A9w=null;var A9x=null;var A9y=null;var A9z=null;var A9A=null;var A9B=null;var A9C=null;var A6X=null;function AGj(){AGj=Bn(Cz);A2C();}
function DM(a,b,c){var d=new Cz();Zq(d,a,b,c);return d;}
function A2o(a,b,c,d){var e=new Cz();AEL(e,a,b,c,d);return e;}
function Zq(a,b,c,d){AGj();DJ(a,b,c);a.pm=JH(d,null);}
function AEL(a,b,c,d,e){AGj();DJ(a,b,c);a.pm=JH(d,e);}
function A2C(){var b;b=new Cz;AGX();Zq(b,C(364),0,A75);A9o=b;A9p=DM(C(365),1,S(C(679)));A9q=DM(C(367),2,S(C(680)));A9r=DM(C(369),3,S(C(681)));A9s=DM(C(371),4,A75);A9t=DM(C(372),5,S(C(682)));A9u=DM(C(374),6,S(C(412)));A9v=DM(C(376),7,S(C(683)));A9w=DM(C(378),8,S(C(684)));A9x=A2o(C(380),9,A75,Dx(237,235,252));A9y=A2o(C(381),10,S(C(410)),S(C(685)));A9z=DM(C(382),11,S(C(412)));A9A=DM(C(384),12,S(C(413)));A9B=DM(C(386),13,S(C(686)));b=DM(C(387),14,S(C(388)));A9C=b;A6X=I(Cz,[A9o,A9p,A9q,A9r,A9s,A9t,A9u,A9v,A9w,A9x,
A9y,A9z,A9A,A9B,b]);}
var D1=G(0);
var A61=null;var A62=null;var A6Y=null;var A6Z=null;var A60=null;var A76=null;var A77=null;var A63=null;var A64=null;function AU7(){AU7=Bn(D1);AWC();}
function AWC(){A61=S(C(114));A62=S(C(687));A6Y=S(C(688));A6Z=S(C(689));A60=S(C(690));A76=S(C(114));A77=S(C(687));A63=EX(205,205,205,153);A64=Dx(247,248,250);}
function ACB(){var a=this;B.call(a);a.l9=null;a.iO=0;}
var O9=G(HS);
function AOe(a,b,c,d){var e,f,g;e=0;f=d.z;a:{while(true){if(b>f){b=e;break a;}g=Gw(d,a.bc);DZ(d,a.bc,b);e=a.dj.c(b,c,d);if(e>=0)break;DZ(d,a.bc,g);b=b+1|0;}}return b;}
function A2U(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gw(e,a.bc);DZ(e,a.bc,c);f=a.dj.c(c,d,e);if(f>=0)break;DZ(e,a.bc,g);c=c+(-1)|0;}}return c;}
function AM3(a){return null;}
var Q$=G(Bu);
var Vj=G(Bu);
function TV(){Gd.call(this);this.D0=0;}
function Q3(){Gd.call(this);this.Fp=0;}
function Vh(){B.call(this);this.q7=null;}
function AXf(a,b){a.q7.g(H3(b));}
function Vi(){var a=this;B.call(a);a.rY=null;a.rZ=null;}
function AVC(a,b){var c,d;c=a.rY;d=a.rZ;b.text().then(Bv(c,"f"),Bv(d,"f"));}
function AB8(){var a=this;B.call(a);a.tq=null;a.AT=null;a.v$=0;a.mL=0;}
function Nu(a,b){return Ch(a.tq)<b?0:1;}
function ADC(){var a=this;B.call(a);a.yn=null;a.yo=null;}
function A0f(a,b){var c,d;c=a.yn;d=a.yo;DS(c);d.g(b);}
var AEN=G(0);
function ACo(){B.call(this);this.xv=null;}
function ARK(a,b){var c,d,e,f;c=a.xv;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.s6;c=Bt();b=Cl(b);e=new K;M(e);H(H(e,C(691)),b);Bk(c,L(e));b=Bt();f=d.length;c=new K;M(c);U(H(c,C(692)),f);Bk(b,L(c));}
function ACq(){var a=this;B.call(a);a.AL=null;a.AM=null;}
function AQW(a,b){var c,d;c=a.AL;d=a.AM;b.arrayBuffer().then(Bv(c,"f"),Bv(d,"f"));}
function ACs(){var a=this;B.call(a);a.yC=null;a.k4=null;a.kr=null;}
function ABf(a){var b,c;b=a.yC.next();c=a.kr.pC;b.then(Bv(a,"f"),Bv(c,"f"));}
function ARR(a,b){var c,d;if(b.done?1:0)a.k4.wr();else{ABf(a);c=b.value;if(c.kind==='file'?1:0){b=A3d(c,null,YL(a.kr));a.k4.xp(b);}else{b=new ACk;d=a.kr;AHf(b,c,d.pC,YL(d),null);a.k4.t0(b);}}}
function YK(){var a=this;B.call(a);a.sZ=null;a.s0=null;}
function AAL(){var a=this;B.call(a);a.lN=null;a.mg=null;a.c6=null;}
function A1s(a,b){var c,d;c=new Im;d=a.c6;LH(c,b,d.jQ+1|0,d.hL);BB(a.lN,c);}
function ATf(a,b){var c,d;c=DW(b);d=new KA;J5(d,c,a.c6.jQ+1|0);d.hH=b;a.c6.hL.rM(d,c);d.ov=AKP(a.c6.hL,d);BB(a.mg,d);}
function A1O(a){var b,c,d,e,f,g,h;if(!(ED(a.lN)&&ED(a.mg))){a.c6.hv=Go(a.lN,A9d);a.c6.ia=Go(a.mg,A9e);K1(a.c6.hv,A8R);K1(a.c6.ia,A8R);b=a.c6;c=b.hv;d=c.data;e=b.ia;f=e.data;g=d.length;h=f.length;d=Q(Dg,g+h|0);C6(c,0,d,0,g);C6(e,0,d,g,h);a.c6.fa=d;}NT(a.c6);b=a.c6;b.hL.xA(b);}
function AB_(){var a=this;B.call(a);a.d_=null;a.kX=null;a.po=null;a.nr=null;a.rN=0;a.kt=0;a.c_=0;a.z=0;a.eQ=0;a.kw=0;a.gz=0;a.dK=0;a.Fa=0;a.iU=0;a.l7=0;}
function B1(a,b,c){a.kX.data[b]=c;}
function DD(a,b){return a.kX.data[b];}
function MA(a){return R7(a,0);}
function R7(a,b){ZO(a,b);return a.d_.data[(b*2|0)+1|0];}
function DZ(a,b,c){a.d_.data[b*2|0]=c;}
function MY(a,b,c){a.d_.data[(b*2|0)+1|0]=c;}
function Gw(a,b){return a.d_.data[b*2|0];}
function I8(a,b){return a.d_.data[(b*2|0)+1|0];}
function AGA(a){return Qp(a,0);}
function Qp(a,b){ZO(a,b);return a.d_.data[b*2|0];}
function Wr(a,b){return a.po.data[b];}
function ET(a,b,c){a.po.data[b]=c;}
function ZO(a,b){var c;if(!a.kt){c=new C$;Y(c);N(c);}if(b>=0&&b<a.rN)return;c=new BH;Bm(c,Dl(b));N(c);}
function ADR(a,b,c,d){a.kt=0;a.l7=2;Ju(a.d_,(-1));Ju(a.kX,(-1));if(b!==null)a.nr=b;if(c>=0){a.c_=c;a.z=d;}a.eQ=a.c_;}
function AFt(a){return a.l7;}
function Tq(){B.call(this);this.yq=null;}
function AYr(a,b){a.yq.g($rt_str(b.message));}
function AAf(){var a=this;B.call(a);a.qp=null;a.qo=0;}
function A2S(a){H5(a.qp,a.qo);}
function Xt(){B.call(this);this.zU=null;}
function ARN(a){H5(a.zU,1);}
function Xu(){B.call(this);this.r2=null;}
function APw(a){H5(a.r2,0);}
function YA(){var a=this;B.call(a);a.xP=null;a.xO=0;}
function A1R(a){Nb(a.xP,a.xO);}
function We(){B.call(this);this.yV=null;}
function ASN(a){Nb(a.yV,1);}
function Wf(){B.call(this);this.AI=null;}
function AVE(a){Nb(a.AI,0);}
function AAW(){B.call(this);this.Bg=null;}
function AX2(a){DS(a.Bg);}
function ZC(){var a=this;B.call(a);a.yt=null;a.ys=0;}
function A1j(a,b){var c,d,e,f,g,h,i;c=a.yt;d=a.ys;e=!d?c.eS.eq:c.eS.es;DS(c.dk);f=Bt();g=FR(b);h=new K;M(h);H(H(h,C(693)),g);Bk(f,L(h));i=new Z1;i.kJ=c;i.kQ=d;i.nb=e;f=ASx(b,i);if(!d)c.pV=f;else c.oM=f;f.er.f();ES(e,f);}
function AAN(){Z.call(this);this.EP=null;}
function ATl(a,b){return CF(b)!=2?0:1;}
function Wm(){Z.call(this);this.ET=null;}
function AVr(a,b){return CF(b)!=1?0:1;}
function R6(){Z.call(this);this.EE=null;}
function AL8(a,b){return RE(b);}
function R5(){Z.call(this);this.CG=null;}
function AW2(a,b){return 0;}
function U5(){Z.call(this);this.DL=null;}
function AO8(a,b){return !CF(b)?0:1;}
function X1(){Z.call(this);this.E5=null;}
function A1M(a,b){return CF(b)!=9?0:1;}
function PU(){Z.call(this);this.D4=null;}
function ARh(a,b){return HN(b);}
function Zk(){Z.call(this);this.CZ=null;}
function ASd(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Wi(){Z.call(this);this.Cc=null;}
function A2I(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function Wk(){Z.call(this);this.Dg=null;}
function ANn(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function Py(){Z.call(this);this.DI=null;}
function ATs(a,b){a:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Yi(){Z.call(this);this.Fm=null;}
function AYG(a,b){return KJ(b);}
function Yp(){Z.call(this);this.CN=null;}
function AZZ(a,b){return Yq(b);}
function ABa(){Z.call(this);this.E7=null;}
function A1z(a,b){return CF(b)!=3?0:1;}
function AAi(){Z.call(this);this.Ce=null;}
function ATM(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function O1(){Z.call(this);this.Fy=null;}
function ANh(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function Mi(){Z.call(this);this.nH=0;}
function A3_(a){var b=new Mi();AGi(b,a);return b;}
function AGi(a,b){By(a);a.nH=b;}
function ARi(a,b){return a.bi^(a.nH!=CF(b&65535)?0:1);}
var ZQ=G(Mi);
function A0Z(a,b){return a.bi^(!(a.nH>>CF(b&65535)&1)?0:1);}
var ADB=G(0);
function YP(){B.call(this);this.wz=null;}
function APV(a){var b,c;b=a.wz;c=b.sZ;b=b.s0;c.FT(b.l2,b.pu,null);}
function Tf(){var a=this;B.call(a);a.BN=null;a.BM=0;}
function AWN(a,b){MZ(a.BN,b,a.BM);}
function Z1(){var a=this;B.call(a);a.kQ=0;a.nb=null;a.kJ=null;}
function APE(a,b){var c,d,e;c=Bt();d=FR(b.hH);e=new K;M(e);H(H(e,C(694)),d);Bk(c,L(e));c=new M3;d=a.kJ;T_(c,d.iA,d.dk);MZ(c,b.hH,a.kQ);b=b.hH;d=Rg(a,b.h4);if(d===null)d=null;else{b=DW(b);d=Ud(d.ia,b);}if(d!==null)MZ(c,d.hH,a.kQ?0:1);}
function AUf(a,b){var c,d,e;ADt(b);c=Bt();d=AFm(b.jN);e=new K;M(e);H(H(e,C(695)),d);Bk(c,L(e));c=AD1(a,b.jN);if(c!==null&&(c.hz!=60086?0:1))c.er.f();if(Ji(b)>0)EK(a.nb);}
function AUm(a,b){var c;if(Ji(b)>0)EK(a.nb);Lh(b);c=AD1(a,b.jN);if(c!==null&&I9(c))c.er.f();}
function Rg(a,b){var c,d,e;c=!a.kQ?a.kJ.oM:a.kJ.pV;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Ri(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AD1(a,b){var c;c=Rg(a,b.hB);return c===null?null:Ri(c,Hp(b));}
var AF9=G(0);
function ABQ(){var a=this;B.call(a);a.rs=null;a.rr=null;a.rq=0;}
function AM1(a){var b,c,d,e;b=a.rs;c=a.rr;d=a.rq;c=FR(c);if(!d)b.nt=c;else b.wR=c;e=b.wR;if(e!==null&&b.nt!==null)DK(b.lf,c);else{if(e!==null)DK(b.lf,e);c=b.nt;if(c!==null)DK(b.lf,c);}}
function RG(){var a=this;B.call(a);a.uh=null;a.ui=null;}
function A19(a){a.uh.zH(a.ui);}
var AIs=G();
function AD9(){B.call(this);this.tD=null;}
function AX1(a){var b;b=a.tD;IF(b);b.hL.uP(b);b.hv=A9d;b.ia=A9e;}
function ABx(){var a=this;B.call(a);a.tp=null;a.to=null;}
function ATO(a,b){var c,d,e,f;c=a.tp;d=a.to;e=Ls(c.jp,d);b=AIw(b);f=ANY(b.ke,AB0(e));Ep(c.mI,d,f);if(BO(c.pr,d))ADF(c,f);}
function ABw(){var a=this;B.call(a);a.xu=null;a.xw=null;}
function AUr(a,b){var c,d,e;c=a.xu;d=a.xw;c=Ls(c.jp,d);d=En();e=new K;M(e);H(H(H(H(e,C(696)),c),C(29)),b);Bk(d,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A5K(AQh),"cO",A5J(AMK)],RU,0,B,[],0,3,0,0,0,WC,0,B,[],3,3,0,0,0,Wd,0,B,[],3,3,0,0,0,ACP,0,B,[WC,Wd],0,3,0,0,0,AIK,0,B,[],4,0,0,0,0,AIy,0,B,[],4,3,0,0,0,GY,0,B,[],0,3,0,0,0,Ew,0,GY,[],0,3,0,0,0,Bu,0,Ew,[],0,3,0,0,0,AJx,0,Bu,[],0,3,0,0,0,C7,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,Kj,0,B,[],3,3,0,0,0,BK,"String",1,B,[C7,CL,Kj],0,3,0,Fc,["cO",A5J(AMI),"bJ",A5K(Bj),"gG",A5J(NU),"mn",A5K(AOd)],Fy,0,GY,[],0,3,0,0,0,Il,0,Fy,[],0,3,0,0,0,AJc,0,Il,[],0,3,0,0,0,Es,0,B,[C7],1,3,0,0,0,HF,
0,Es,[CL],0,3,0,0,["gG",A5J(AUE),"bJ",A5K(A2s),"mn",A5K(AYf)],GS,0,B,[C7,Kj],0,0,0,0,["j0",A5K(MX),"cO",A5J(L)],JG,0,B,[],3,3,0,0,0,K,0,GS,[JG],0,3,0,0,["pK",A5N(AYb),"o_",A5M(ANw),"cO",A5J(Ed),"j0",A5K(APB),"p2",A5L(AYx)],E4,0,Il,[],0,3,0,0,0,AKa,0,E4,[],0,3,0,0,0,AI8,0,E4,[],0,3,0,0,0,AA$,0,B,[],3,3,0,0,0,C_,0,B,[],3,3,0,0,0,X0,0,B,[],3,0,0,0,0,Ka,0,B,[AA$,C_,X0],1,3,0,0,["b5",A5J(Ez)],ZI,0,Ka,[],0,3,0,0,0,AIe,0,B,[],0,3,0,0,0,AKK,0,B,[],4,3,0,0,0,BT,0,B,[],3,3,0,0,0,Ce,0,B,[BT],3,3,0,0,0,ABi,0,B,[Ce],0,3,
0,0,["bh",A5K(A2G)],AGl,0,B,[],0,3,0,0,0,AJK,0,B,[BT],1,3,0,0,0,AEt,0,B,[],3,3,0,0,0,AKy,0,B,[],3,3,0,0,0,AGS,0,B,[],3,3,0,0,0,LZ,0,B,[],0,3,0,0,0,AEY,0,B,[BT],1,3,0,0,0,ABj,0,B,[Ce],0,3,0,0,["bh",A5K(ALl)],ABh,0,B,[Ce],0,3,0,0,["bh",A5K(A1A)],LD,0,B,[],4,3,0,0,0,AGQ,0,B,[],4,3,0,0,0,AI2,0,B,[],0,3,0,0,0,ALi,0,B,[],4,3,0,0,0,WD,0,B,[Ce],0,3,0,0,["bh",A5K(AZn)]]);
$rt_metadata([AG4,0,B,[BT],1,3,0,0,0,AIn,0,B,[],0,3,0,0,0,ACt,0,B,[BT],3,3,0,0,0,AJz,0,B,[ACt],1,3,0,0,["Lt",A5K(AXp),"RS",A5J(AQe)],AFM,0,B,[BT],1,3,0,0,0,Ge,0,B,[],3,3,0,0,0,SH,0,B,[Ge],0,3,0,0,0,BH,0,Bu,[],0,3,0,0,0,AJY,0,B,[],4,3,0,0,0,F2,0,Bu,[],0,3,0,0,0,Jd,0,Bu,[],0,3,0,0,0,Dm,0,B,[CL],0,3,0,0,0,V$,0,B,[BT],3,3,0,0,0,AAj,0,B,[V$],3,3,0,0,0,EY,0,B,[BT],3,3,0,0,0,AIg,0,B,[BT,AAj,EY],1,3,0,0,["Kc",A5J(AY5),"KM",A5K(A03),"SG",A5K(A0S),"N6",A5K(AWj),"Ra",A5K(ALB),"MH",A5J(ANo),"RQ",A5L(A00),"K3",A5M(APm),
"LA",A5J(AVp),"LS",A5J(AZL),"Qn",A5K(A1w),"OK",A5J(AQy),"SZ",A5K(AOZ),"IS",A5J(AQR),"Pm",A5J(AUi),"ST",A5J(APQ),"Gg",A5K(AMc),"K7",A5J(A2u),"QH",A5L(AXN),"Ox",A5L(AQq),"RI",A5L(ATy),"Rp",A5J(AUK),"R$",A5J(AOK),"LE",A5K(ANz),"P7",A5K(AOn),"N0",A5L(AXX),"Iw",A5J(APY),"Ls",A5K(AVs),"MV",A5J(AOm),"LZ",A5J(ART),"NN",A5K(ALr),"IR",A5K(AS7),"SO",A5K(AVN),"H6",A5J(A1o),"On",A5L(AVU),"RE",A5K(AZT),"Im",A5J(ASh),"Nd",A5L(ARf),"GK",A5L(AQ0),"O8",A5J(AS2),"LF",A5K(ATY),"HM",A5M(AZd),"G9",A5J(ANu),"HQ",A5L(AV7),"OD",A5J(AU8),
"Ku",A5J(A2p),"Qk",A5J(ARc),"FC",A5J(AU6),"J6",A5L(ARg),"MW",A5K(AWs),"P4",A5K(AOr),"G2",A5J(A0t)],Pz,0,B,[Ce],0,3,0,0,["bh",A5K(ARO)],AJk,0,B,[],4,3,0,0,0,Yh,0,B,[EY],3,3,0,0,0,RM,0,B,[EY],3,3,0,0,0,Zx,0,B,[EY],3,3,0,0,0,S0,0,B,[EY],3,3,0,0,0,ADv,0,B,[EY],3,3,0,0,0,ABW,0,B,[EY,Yh,RM,Zx,S0,ADv],3,3,0,0,0,AII,0,B,[BT,ABW],1,3,0,0,["QU",A5L(AZu),"Se",A5L(AYd),"G_",A5M(AOM),"Os",A5K(AMo),"JE",A5M(AWH)],BU,0,Bu,[],0,3,0,0,0,AD$,0,Bu,[],0,3,0,0,0,Ig,0,BH,[],0,3,0,0,0,AIW,0,B,[],0,3,0,0,0,Zd,0,B,[],3,3,0,0,0,XS,0,
B,[Zd],3,3,0,0,0,AAr,0,B,[XS],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,AJG,0,B,[BD],0,3,0,0,0,V,0,B,[],3,3,0,0,0,AJH,0,B,[V],0,3,0,0,0,ZA,0,B,[BT],3,3,0,0,0,T$,0,B,[ZA],0,3,0,0,["IT",A5K(AXM)],T8,0,B,[V],0,3,0,0,0,Y5,0,B,[BT],3,3,0,0,0,T9,0,B,[Y5],0,3,0,0,["BL",A5L(ANK)],AHb,0,B,[BT],1,3,0,0,0,CA,0,B,[BT],3,3,0,0,0,T7,0,B,[CA],0,3,0,0,["cv",A5K(ARS)],Z_,0,B,[],0,3,0,0,0,UG,0,B,[],3,3,0,0,["fl",A5K(AUs)],Hz,0,B,[UG],3,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],FA,0,B,[Hz],1,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3),"eF",A5J(ED),"qZ",
A5K(A0H)],ND,0,B,[Hz],3,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],ME,0,B,[ND],3,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)]]);
$rt_metadata([Fo,0,FA,[ME],1,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3),"zX",A5K(AR5),"b$",A5J(B7),"uo",A5L(ARu),"oo",A5L(A1i),"bJ",A5K(AQK)],Md,0,Fo,[],1,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],OL,0,B,[Hz],3,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],ADS,0,B,[OL,ND],3,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],Tt,0,Md,[ADS],0,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],Lr,0,B,[],3,3,0,0,0,Ee,0,B,[Lr],1,3,0,0,0,Ex,0,B,[],3,3,0,0,0,Vp,0,B,[Lr],3,3,0,0,0,O_,0,B,[Vp],3,3,0,0,0,X6,0,Ee,[Ex,C7,O_],0,3,0,0,0,AAd,0,B,[BD],0,3,0,0,0,AAe,0,B,[Ce],0,
3,0,0,["bh",A5K(AUJ)],AE5,0,B,[],0,3,0,0,0,NR,0,B,[],1,3,0,0,0,T0,0,NR,[],0,3,0,0,0,Cw,0,B,[C_],1,3,0,0,["cj",A5K(A2q)],YG,0,B,[],0,3,0,0,0,ACU,0,B,[CA],0,3,0,0,["cv",A5K(AZF)],ACV,0,B,[CA],0,3,0,0,["cv",A5K(AZP)],ACW,0,B,[CA],0,3,0,0,["cv",A5K(AQv)],ACX,0,B,[CA],0,3,0,0,["cv",A5K(AYv)],ACY,0,B,[CA],0,3,0,0,["cv",A5K(AYH)],ACZ,0,B,[CA],0,3,0,0,["cv",A5K(ARX)],AC0,0,B,[CA],0,3,0,0,["cv",A5K(AOL)],AC1,0,B,[CA],0,3,0,0,["cv",A5K(A2O)],AC2,0,B,[CA],0,3,0,0,["cv",A5K(AOk)],AC3,0,B,[CA],0,3,0,0,["cv",A5K(ASE)],VK,
0,B,[CA],0,3,0,0,["cv",A5K(A2r)],VL,0,B,[CA],0,3,0,0,["cv",A5K(AQc)],VM,0,B,[CA],0,3,0,0,["cv",A5K(AQA)],VN,0,B,[CA],0,3,0,0,["cv",A5K(AZV)],ABF,0,B,[],3,3,0,0,0,ABO,0,B,[ABF],0,3,0,0,0,ABN,0,B,[CA],0,3,0,0,["cv",A5K(APr)],OI,0,B,[],0,3,0,0,0,Kw,0,B,[Ge],0,3,0,0,["p$",A5L(MT)],AHp,0,B,[],0,3,0,0,0,D$,0,B,[],3,3,0,0,0,Ct,0,B,[D$],3,3,0,0,0,CE,0,B,[],3,3,0,0,["bT",A5K(AX9),"cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8)],EJ,0,B,[],3,3,0,0,0,CX,0,B,[D$],3,3,0,0,0,EV,0,B,[],3,3,0,0,0,DO,0,B,[],3,3,0,0,0,E8,0,B,[DO],3,
3,0,0,0,Rd,0,B,[C_],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cO",A5J(AHX),"bJ",A5K(APi)],AC5,0,B,[],0,3,0,0,0,AGU,0,B,[],0,3,0,0,0]);
$rt_metadata([AIv,0,B,[],3,3,0,0,0,Y3,0,B,[],0,3,0,0,0,N6,0,B,[],0,3,0,0,0,Dh,0,N6,[],0,3,0,0,0,AKI,0,Dh,[],0,3,0,0,0,Fp,0,Dh,[],0,3,0,0,0,Zm,0,Dh,[],0,3,0,0,0,AFP,0,Fp,[],0,3,0,0,0,Hu,0,Fp,[],0,3,0,0,0,PG,0,Hu,[],0,3,0,0,0,AHF,0,Hu,[],0,3,0,0,0,AIJ,0,Fp,[],0,3,0,0,0,AKc,0,Dh,[],0,3,0,0,0,AEJ,0,Dh,[],0,3,0,0,0,ZT,0,B,[BT],3,3,0,0,0,ALg,0,B,[ZT],3,3,0,0,0,Y2,0,B,[C_],0,3,0,0,0,Q8,0,B,[],0,3,0,0,0,CI,0,B,[CL,C7],1,3,0,0,0,G$,0,CI,[],12,3,0,Jv,0,Mn,0,B,[],3,3,0,0,0,SV,0,B,[Mn],3,3,0,0,0,ABT,0,B,[],3,3,0,0,0,GU,
0,B,[SV,ABT],1,3,0,0,0,MQ,0,GU,[],0,3,0,0,0,AFv,0,MQ,[],0,3,0,0,0,HE,0,GU,[],1,3,0,0,0,LB,0,HE,[],0,3,0,0,["mR",A5M(APk)],Ei,0,CI,[],12,3,0,A1P,0,MI,0,B,[CL],1,3,0,0,0,Mq,0,MI,[],0,3,0,AFp,0,X$,0,B,[],0,3,0,0,0,H4,0,CI,[],12,0,0,AQr,0,NF,0,HE,[],0,3,0,0,["mR",A5M(AN2)],AGP,0,BU,[],0,3,0,0,0,Ua,0,Ew,[],0,3,0,0,0,Mp,0,B,[BT],3,3,0,0,0,ADO,0,B,[Mp],0,3,0,0,["bh",A5K(ASn)],ADP,0,B,[Mp],0,3,0,0,["bh",A5K(AMC)],Ia,0,B,[],1,3,0,0,0,Z7,0,B,[],3,3,0,0,0,Lw,0,Ia,[CL,JG,Kj,Z7],1,3,0,0,0,M6,0,Ia,[CL],1,3,0,0,0,IH,0,B,[],
0,3,0,Hm,0,Pd,0,Cw,[],0,3,0,0,["bM",A5J(AP9),"ce",A5L(AOY)],HM,0,Cw,[],1,3,0,0,["ce",A5L(AFZ)],CH,0,HM,[],1,3,0,0,["bM",A5J(ANW),"ce",A5L(IC),"cj",A5K(AMw)],Fa,0,B,[],3,3,0,0,0,Nd,0,B,[],3,3,0,0,0,F_,0,B,[],3,3,0,0,0]);
$rt_metadata([KS,0,CH,[CE,Fa,Nd,F_,EJ,EV,E8],0,3,0,0,["h8",A5L(A13),"cj",A5K(AR$),"bM",A5J(AYE),"hb",A5J(AXI),"BE",A5J(ASv),"wm",A5J(AYA),"uH",A5K(AS6),"nB",A5K(AZq),"il",A5K(ANg),"ce",A5L(APD),"gx",A5K(AL2),"bT",A5K(AZJ),"cz",A5M(AXJ),"cn",A5L(AQu),"dB",A5L(AZ$),"dy",A5M(ARJ),"cZ",A5J(AYa)],AGZ,0,KS,[],0,3,0,0,["hb",A5J(AQF)],AHn,0,B,[],0,3,0,0,0,AJB,0,B,[BT],1,3,0,0,0,KZ,0,Lw,[],1,0,0,0,0,AFJ,0,KZ,[],0,0,0,0,0,Lo,0,B,[],1,3,0,0,0,N$,0,B,[],0,3,0,0,0,AEz,0,B,[],0,3,0,0,0,I5,0,B,[BT],3,3,0,0,0,WM,0,B,[I5],0,
3,0,0,["bh",A5K(AN7)],WL,0,B,[I5],0,3,0,0,["bh",A5K(AQ$)],WJ,0,B,[Ce],0,3,0,0,["bh",A5K(ARA)],WI,0,B,[Ce],0,3,0,0,["bh",A5K(AV8)],W,0,B,[],3,3,0,0,0,S$,0,B,[W],0,3,0,0,["g",A5K(A2v)],Ta,0,B,[W],0,3,0,0,["g",A5K(AYe)],Uo,0,B,[BD],0,3,0,0,["bb",A5K(ATi)],Un,0,B,[BD],0,3,0,0,["bb",A5K(ALK)],Uk,0,B,[BD],0,3,0,0,["bb",A5K(AWK)],Uj,0,B,[BD],0,3,0,0,["bb",A5K(AZo)],Um,0,B,[BD],0,3,0,0,["bb",A5K(ANQ)],Ul,0,B,[BD],0,3,0,0,["bb",A5K(AUo)],Ur,0,B,[BD],0,3,0,0,["bb",A5K(ANv)],Uq,0,B,[BD],0,3,0,0,["bb",A5K(AP0)],Ut,0,B,
[BD],0,3,0,0,["bb",A5K(A0J)],Us,0,B,[BD],0,3,0,0,["bb",A5K(ALu)],AAQ,0,B,[BD],0,3,0,0,["bb",A5K(ALE)],AAP,0,B,[BD],0,3,0,0,["bb",A5K(AYj)],AAO,0,B,[BD],0,3,0,0,["bb",A5K(AQT)],AAD,0,B,[BD],0,3,0,0,["bb",A5K(AN_)],AAC,0,B,[BD],0,3,0,0,["bb",A5K(AUD)],AAA,0,B,[BD],0,3,0,0,["bb",A5K(A1I)],AAz,0,B,[BD],0,3,0,0,["bb",A5K(AP$)],AAy,0,B,[BD],0,3,0,0,["bb",A5K(A0M)],AAx,0,B,[BD],0,3,0,0,["bb",A5K(ALo)],AAw,0,B,[BD],0,3,0,0,["bb",A5K(A0y)],AAH,0,B,[BD],0,3,0,0,["bb",A5K(AZQ)],AAG,0,B,[BD],0,3,0,0,["bb",A5K(AM7)],AAF,
0,B,[BD],0,3,0,0,["bb",A5K(AXu)],AAE,0,B,[BD],0,3,0,0,["bb",A5K(AOT)],AAJ,0,B,[BD],0,3,0,0,["bb",A5K(AOU)],AAI,0,B,[BD],0,3,0,0,["bb",A5K(AVi)],AC9,0,B,[],0,0,0,0,0,Ie,0,B,[],0,3,0,0,0,Qn,0,Ie,[],0,3,0,0,0,AG0,0,B,[],0,3,0,0,0,OG,0,Ie,[],0,3,0,0,0,Th,0,B,[BT],3,3,0,0,0,Pt,0,B,[Th],0,3,0,0,["LL",A5K(AYk)]]);
$rt_metadata([ABZ,0,B,[W],0,3,0,0,["g",A5K(ACM)],ADe,0,M6,[],0,0,0,0,0,CB,0,B,[C_],0,3,0,0,["b5",A5J(AR_),"hU",A5J(AZf),"dz",A5M(JL),"cy",A5K(AKZ),"cj",A5K(AV1),"rI",A5K(AP3),"oT",A5K(ATF),"ly",A5L(A0l),"rm",A5J(ATP),"cz",A5M(AOO),"cn",A5L(AMJ),"dB",A5L(AQJ),"bT",A5K(ATu),"dy",A5M(A0d)],AFf,0,CB,[],0,3,0,0,["cy",A5K(AGx)],AFN,0,B,[],0,3,0,0,0,FS,0,B,[],3,3,0,0,["ws",A5J(AZg),"uw",A5J(AOf)],Q1,0,B,[],3,0,0,0,0,Mm,0,B,[FS],3,3,0,0,["ws",A5J(AZg),"uw",A5J(AOf)],AFl,0,CB,[FS,CE,Nd,Q1,Mm],0,3,0,0,["dz",A5M(Mo),"ly",
A5L(ARk),"pj",A5L(A2w),"uw",A5J(AW1),"ws",A5J(AU_),"BE",A5J(W7),"wm",A5J(ADY),"uH",A5K(PZ),"nB",A5K(AR0),"rm",A5J(LQ),"b5",A5J(AVx),"cj",A5K(I0),"p_",A5K(AJf),"hU",A5J(AG9),"pq",A5J(ASQ),"cy",A5K(AYK),"lg",A5J(TB),"kq",A5J(TA),"hG",A5K(ARG),"kT",A5J(ARx),"lX",A5J(AUh),"dy",A5M(LL),"dB",A5L(SU),"cn",A5L(Wl),"cz",A5M(O2),"bT",A5K(Xm),"it",A5K(A1$)],AH8,0,B,[],0,3,0,0,0,TJ,0,B,[W],0,3,0,0,["g",A5K(AL_)],TK,0,B,[W],0,3,0,0,["g",A5K(A1a)],TL,0,B,[Ct],0,3,0,0,["H",A5K(APJ)],HR,0,B,[Ct],0,3,0,0,["H",A5K(AOh)],TH,0,
B,[W],0,3,0,0,["g",A5K(AQw)],TI,0,B,[CX],0,3,0,0,["H",A5K(A1J)],C3,0,B,[],3,3,0,0,0,ADr,0,B,[CE,C3],0,3,0,0,["bT",A5K(AUO),"cz",A5M(AMS),"cn",A5L(AOQ),"dB",A5L(A15),"fT",A5L(AX6)],Tn,0,B,[],0,3,0,0,0,Wa,0,B,[EJ],0,3,0,0,["dy",A5M(A10)],V_,0,B,[CX],0,3,0,0,["H",A5K(AMT)],AE9,0,B,[],0,3,0,0,0,ADM,0,B,[],0,3,0,0,0,ADA,0,B,[],0,3,0,0,0,Fq,0,B,[C_],0,3,0,0,0,AHB,0,B,[],0,3,0,0,0,AE8,0,B,[C_],0,3,0,0,0,Xh,0,B,[W],0,3,0,0,0,Xg,0,B,[W],0,3,0,0,["g",A5K(AMk)],Xf,0,B,[W],0,3,0,0,["g",A5K(ALG)],AJ$,0,B,[],0,3,0,0,0,Xe,
0,B,[V],0,3,0,0,["f",A5J(AUQ)],Xl,0,B,[V],0,3,0,0,["f",A5J(AW6)],Xk,0,B,[V],0,3,0,0,["f",A5J(A23)],Xj,0,B,[V],0,3,0,0,["f",A5J(APU)],Xi,0,B,[V],0,3,0,0,["f",A5J(ARB)],Xd,0,B,[V],0,3,0,0,["f",A5J(A2x)],Uy,0,B,[V],0,3,0,0,["f",A5J(APX)],Uz,0,B,[V],0,3,0,0,["f",A5J(AZM)],AGe,0,B,[BT],1,3,0,0,0,Ns,0,B,[],4,3,0,AXW,0,AEH,0,B,[],3,3,0,0,0,ZV,0,B,[Ct],0,3,0,0,["H",A5K(AOB)],ZU,0,B,[Ct],0,3,0,0,["H",A5K(AV6)],Tz,0,B,[],0,3,0,0,0,Kk,0,B,[],0,3,0,0,0,Fl,0,B,[],0,3,0,0,0,Nq,0,Fl,[],0,3,0,0,0,AAM,0,Fl,[],0,3,0,0,0,YQ,0,
Fl,[],0,3,0,0,0]);
$rt_metadata([Hg,0,B,[],3,3,0,0,0,Ss,0,B,[],3,3,0,0,0,B2,0,B,[],0,3,0,0,["bJ",A5K(AT9)],LC,0,B,[],3,3,0,0,0,AIo,0,Fo,[Ex,C7,LC],0,3,0,0,["pA",A5K(AX3),"kA",A5K(BG),"c2",A5J(AZx),"zX",A5K(BB),"oo",A5L(AJt),"p9",A5K(EM),"qZ",A5K(AG2),"jd",A5J(Ix),"uo",A5L(AIB),"fl",A5K(Fr)],Lv,0,B,[],0,3,0,0,0,Iv,0,B,[C_],0,3,0,0,["b5",A5J(AGn)],YE,0,B,[],3,0,0,0,0,OD,0,B,[],3,3,0,0,0,YY,0,B,[V],0,3,0,0,["f",A5J(AXA)],YX,0,B,[V],0,3,0,0,["f",A5J(AUC)],AKQ,0,B,[],0,3,0,0,0,Tl,0,B,[],0,3,0,0,0,G0,0,B,[],1,3,0,0,0,ZG,0,G0,[],0,3,
0,0,["t$",A5K(Cd)],L7,0,B,[],3,3,0,0,0,Tp,0,B,[L7],3,3,0,0,0,SJ,"JsFileHandle",7,B,[Tp],0,3,0,0,["o7",A5J(DW),"th",A5J(AL3),"cO",A5J(AX5),"gG",A5J(ALQ)],ACJ,0,B,[],3,3,0,0,0,AJR,0,B,[ACJ],0,3,0,0,["cO",A5J(AWm)],ZP,0,B,[OD],0,3,0,0,0,Hh,0,B,[CL],0,3,0,0,0,NN,0,B,[],0,3,0,0,0,DG,0,B,[],0,3,0,0,0,Yl,0,B,[],0,3,0,0,0,Li,0,Ee,[Ex,C7],0,3,0,0,0,Cx,0,B,[],0,3,0,0,0,NK,0,Li,[],0,3,0,0,0,ZL,0,B,[],0,3,0,0,0,AK9,0,B,[CL],0,3,0,0,["bJ",A5K(ASF),"mn",A5K(AV0)],UL,0,B,[Ge],0,3,0,0,["p$",A5L(APZ)],Zl,0,B,[],0,3,0,0,["cO",
A5J(AL0),"bJ",A5K(AMF)],Jn,0,B,[],3,3,0,0,0,GX,0,B,[Jn,Ex],0,0,0,0,["bJ",A5K(AWo)],HV,0,GX,[],0,0,0,0,0,NH,0,Lo,[],1,3,0,0,0,QD,0,NH,[],0,3,0,0,0,I7,0,Ew,[],0,3,0,0,0,OT,0,B,[I5],0,3,0,0,["bh",A5K(AT1)],OV,0,B,[Ce],0,3,0,0,["bh",A5K(ATr)],OU,0,B,[Ce],0,3,0,0,["bh",A5K(AVk)],IW,0,B,[],0,3,0,0,0,Kt,0,CH,[Fa,F_],0,3,0,0,["il",A5K(AXH),"cj",A5K(A09),"bM",A5J(AOD),"hb",A5J(A2n),"ce",A5L(ALt),"gx",A5K(AWI)],AH_,0,Cw,[],0,3,0,0,["cj",A5K(ALN),"bM",A5J(ANy),"ce",A5L(APH)],AA8,0,Cw,[],0,3,0,0,["cj",A5K(AQ8),"bM",A5J(AVS),
"ce",A5L(AW0)],Xp,0,CH,[CE,C3],0,3,0,0,["cn",A5L(ATj),"dB",A5L(ALY),"fT",A5L(APa),"ce",A5L(AN8),"bM",A5J(AWE),"bT",A5K(APK),"cz",A5M(AMl)],AAB,0,CH,[C3],0,3,0,0,["fT",A5L(ANm),"ce",A5L(AMA)],WR,0,HM,[CE],0,3,0,0,["bT",A5K(AX9),"cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8),"bM",A5J(A0I),"cj",A5K(ALF)],SG,0,Cw,[],0,3,0,0,["bM",A5J(ALs),"ce",A5L(AUz)],Dr,0,Cw,[],0,3,0,0,["bM",A5J(Z6),"ce",A5L(SC)]]);
$rt_metadata([Q_,"SelectFileTest",5,Dr,[],0,3,0,0,0,W8,0,CH,[],0,3,0,0,0,Ws,"RenderTexture",5,Dr,[],0,3,0,0,["cj",A5K(AON),"bM",A5J(AWt),"ce",A5L(A2h)],SE,"ScissorDemo",5,Dr,[],0,3,0,0,["bM",A5J(A2R),"ce",A5L(AOy)],AAq,0,Cw,[],0,3,0,0,["bM",A5J(ATt),"ce",A5L(AWG),"cj",A5K(A0n)],Kn,"ClipboardTest",5,Dr,[CE],0,3,0,0,["bT",A5K(AX9),"cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(APx)],Sp,"CodiconDemo",5,Dr,[],0,3,0,0,["bM",A5J(AT8)],G6,0,Cw,[CE],1,3,0,0,["bT",A5K(AX9),"cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8),"bM",A5J(AFd)],S9,
0,G6,[],0,3,0,0,["cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8),"ce",A5L(A0a),"bT",A5K(A06)],S8,0,G6,[],0,3,0,0,["cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8),"bT",A5K(A2z),"bM",A5J(ANj),"ce",A5L(AL7)],V0,0,CH,[C3],0,3,0,0,["fT",A5L(AO_)],Eq,"WindowDemo",6,CH,[C3],0,3,[0,0,0],0,["jm",A5J(AWd),"pl",A5J(APS),"kE",A5K(AIE),"fT",A5L(A0R)],Qv,"EditorInViewDemo",5,Eq,[C3,Fa,F_],0,3,[0,0,0],0,["cj",A5K(AWa),"jm",A5J(AMD),"pl",A5J(AUX),"kE",A5K(A2B),"gx",A5K(ASz),"il",A5K(ARW)],WV,0,B,[CE],0,0,0,0,["cn",A5L(ATj),"dB",A5L(ALY),
"cz",A5M(AZ8),"bT",A5K(A0F)],PF,"DiffMiddleDemo",8,Eq,[C3],0,3,[0,0,0],0,["jm",A5J(AWW)],YO,"FileViewDemo",6,Eq,[C3],0,3,[0,0,0],0,["jm",A5J(AY7),"kE",A5K(A0i)],KY,0,B,[],3,3,0,0,["rM",A5L(AMq)],RK,"ProjectViewDemo",5,Eq,[Fa,KY],0,3,[0,0,0],0,["jm",A5J(AQU),"kE",A5K(AQN),"gx",A5K(AYS),"zH",A5K(ASj),"xA",A5K(ALM),"uP",A5K(AOg),"rM",A5L(AR7)],ACu,0,Cw,[CE],0,3,0,0,["bT",A5K(AX9),"cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8),"ce",A5L(A2t),"bM",A5J(AXz),"cj",A5K(ASk)],ON,0,Kt,[],0,3,0,0,["hb",A5J(AVV)],TD,0,CH,[C3],
0,3,0,0,["fT",A5L(ATU)],J_,0,B,[],0,3,0,0,0,AFH,0,B,[],0,3,0,0,0,AEG,0,B,[],3,3,0,0,0,AH5,0,B,[],0,3,0,0,0,AF6,0,B,[],3,3,0,0,0,AHL,0,B,[],0,3,0,0,0,Mx,0,B,[Jn,C7],0,3,0,0,0,KE,0,Mx,[],0,0,0,0,0,AK0,0,B,[],0,3,0,0,0,Yt,0,B,[Ct],0,3,0,0,["H",A5K(AVF)],Yr,0,B,[W],0,3,0,0,["g",A5K(AW9)],Ys,0,B,[CX],0,3,0,0,["H",A5K(ASU)],AHH,0,Kk,[],0,3,0,0,0,TE,0,B,[CE],0,0,0,0,["bT",A5K(AVT),"cz",A5M(ALA),"cn",A5L(AVM),"dB",A5L(AVd)],YW,0,B,[Ct],0,3,0,0,["H",A5K(A1q)],YV,0,B,[Ct],0,3,0,0,["H",A5K(AZR)],YU,0,B,[EV],0,3,0,0,["h8",
A5L(AYc)],YT,0,B,[V],0,3,0,0,["f",A5J(AUM)],YS,0,B,[CX],0,3,0,0,["H",A5K(ARe)],YR,0,B,[EJ],0,3,0,0,["dy",A5M(A1x)],Hn,0,B2,[],0,3,0,0,0,AGG,0,B,[],3,3,0,0,0,Wq,0,B,[CE],0,0,0,0,["bT",A5K(AX9),"cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(ANU)],Wn,0,B,[],0,3,0,0,0,AF7,0,B,[],0,3,0,0,0,AIV,0,B,[],0,3,0,0,["bJ",A5K(A0O)],ABz,0,B,[Ct],0,3,0,0,["H",A5K(AQS)],ABt,0,B,[CX],0,3,0,0,["H",A5K(ASD)],ABu,0,B,[V],0,3,0,0,["f",A5J(A2W)]]);
$rt_metadata([ABv,0,B,[V],0,3,0,0,["f",A5J(AMf)],BC,0,B,[],0,3,0,0,0,Ue,0,B,[Ct],0,3,0,0,["H",A5K(AX8)],Uf,0,B,[CX],0,3,0,0,["H",A5K(ALZ)],AHo,0,B,[],0,3,0,0,0,O4,0,B,[C3],0,3,0,0,["fT",A5L(AQZ)],O3,0,B,[Ct],0,3,0,0,["H",A5K(AZs)],ZB,0,B,[],3,3,0,0,0,AIa,0,B,[ZB],0,3,0,0,0,WB,0,B,[CE],0,0,0,0,["cz",A5M(AZ8),"cn",A5L(AUZ),"dB",A5L(ALU),"bT",A5K(AWQ)],ZW,0,B,[EJ],0,3,0,0,["dy",A5M(AQX)],QK,0,B,[Ct],0,3,0,0,["H",A5K(AQM)],Rv,0,B,[CX],0,3,0,0,["H",A5K(AT$)],Ru,0,B,[W],0,3,0,0,["g",A5K(A0s)],ABI,0,B,[CE],0,0,0,0,
["dB",A5L(ALY),"cz",A5M(AZ8),"bT",A5K(AZI),"cn",A5L(AT0)],AF_,0,B,[],0,3,0,0,0,Di,0,B,[],3,3,0,FI,0,Yu,0,B,[CE],0,0,0,0,["cz",A5M(AZ8),"cn",A5L(AO2),"dB",A5L(AVa),"bT",A5K(ANZ)],VP,0,B,[EJ],0,3,0,0,["dy",A5M(A1u)],ADb,0,B,[Ct],0,3,0,0,["H",A5K(ANd)],ADa,0,B,[EV],0,3,0,0,["h8",A5L(AYi)],AC_,0,B,[EV],0,3,0,0,["h8",A5L(ANi)],AC$,0,B,[E8],0,3,0,0,["cZ",A5J(AQd)],ADc,0,B,[E8],0,3,0,0,["cZ",A5J(A01)],R$,0,B,[Ct],0,3,0,0,["H",A5K(ATC)],Pu,0,B,[Ct],0,3,0,0,["H",A5K(ALP)],Pv,0,B,[CX],0,3,0,0,["H",A5K(AXv)],Pw,0,B,[W],
0,3,0,0,["g",A5K(AZG)],Px,0,B,[CX],0,3,0,0,["H",A5K(A1k)],Ui,0,B,[CX],0,3,0,0,["H",A5K(ARM)],Uh,0,B,[Ct],0,3,0,0,["H",A5K(ARd)],Xq,0,B,[CX],0,3,0,0,["H",A5K(AND)],QR,0,B,[Ct],0,3,0,0,["H",A5K(APy)],AG_,0,B,[],3,3,0,0,0,AAS,0,B,[CX],0,3,0,0,["H",A5K(ARL)],Do,0,B,[],3,3,0,AN5,0,Cp,0,CI,[],12,3,0,TO,0,Kp,0,B,[],0,3,0,0,0,IY,0,B,[],0,3,0,0,0,AJN,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AUU,0,XX,0,B,[BT],3,3,0,0,0,X9,0,B,[XX],0,3,0,0,["BL",A5L(AXb)],XY,0,B,[BT],3,3,0,0,0,X7,0,B,[XY],0,3,0,0,["BL",A5L(AXR)],AE0,0,B,[],0,
3,0,0,0,AH$,0,B,[BT],3,3,0,0,0,UX,0,B,[],0,3,0,0,0,DT,0,B,[],3,3,0,AYP,0,HZ,0,B,[],3,3,0,0,0]);
$rt_metadata([Qb,0,B,[HZ],0,3,0,0,["wN",A5M(A0h)],Qc,0,B,[HZ],0,3,0,0,0,TG,0,B,[W],0,3,0,0,["g",A5K(AZl)],PP,0,B,[W],0,3,0,0,["g",A5K(ANO)],PO,0,B,[W],0,3,0,0,["g",A5K(AMt)],PL,0,B,[W],0,3,0,0,["g",A5K(ALH)],PJ,0,B,[W],0,3,0,0,["g",A5K(A2A)],AHQ,0,B,[],0,3,0,0,0,UB,0,B,[W],0,3,0,0,["g",A5K(AXS)],AB9,0,B,[Ct],0,3,0,0,["H",A5K(AOJ)],AKz,0,B,[],0,3,0,0,["bJ",A5K(AWg)],I6,0,B,[],0,3,0,0,0,Kl,0,B,[],4,3,0,0,0,AIx,0,B,[],0,3,0,0,0,Cu,0,CI,[],12,3,0,AFb,0,AK5,0,B,[],0,3,0,0,0,AFw,0,B,[BT],4,3,0,0,0,ALc,0,B,[],0,3,
0,0,0,AEg,0,B,[],3,3,0,0,0,C2,0,B,[BT],1,3,0,0,0,AJ3,0,C2,[],1,3,0,0,0,AKn,0,C2,[],1,3,0,0,0,AIM,0,C2,[],1,3,0,0,0,AIX,0,C2,[],1,3,0,0,0,AKC,0,C2,[],1,3,0,0,0,U8,0,B,[V],0,3,0,0,["f",A5J(APo)],HJ,0,CI,[],12,3,0,AQx,0,PB,0,B,[BD],0,3,0,0,["bb",A5K(AVb)],Zu,0,B,[],0,3,0,0,0,AIt,0,B,[],0,3,0,0,0,Gr,0,B,[],0,3,0,0,0,AFn,0,B,[],4,3,0,0,0,Tj,0,B,[],0,0,0,0,0,AIz,0,B,[],3,3,0,0,0,AA2,0,B,[EJ],0,3,0,0,["dy",A5M(APt)],VW,0,B,[EV],0,3,0,0,["h8",A5L(A2j)],VV,0,B,[E8],0,3,0,0,["cZ",A5J(AP7)],VX,0,B,[C_],0,3,0,0,0,Xy,0,
B,[CE],0,0,0,0,["cn",A5L(ATj),"dB",A5L(ALY),"cz",A5M(AZ8),"bT",A5K(A2Z)],AFu,0,B,[BT],1,3,0,0,0,AG6,0,B,[C3,FS,C_],0,3,0,0,["ws",A5J(AZg),"uw",A5J(AOf),"fT",A5L(A2F),"it",A5K(AP4),"b5",A5J(ARU)],W0,0,B,[W],0,3,0,0,["g",A5K(APO)],UO,0,B,[W],0,3,0,0,["g",A5K(A2l)],Q2,0,B,[W],0,3,0,0,["g",A5K(AVH)],PR,0,B,[DO],0,3,0,0,["cZ",A5J(AU2)],AJZ,0,B,[],3,3,0,0,0,LP,0,B,[],3,3,0,0,0,Q7,0,B,[LP],0,3,0,0,["zs",A5K(AV2)],Pr,0,B,[BD],0,3,0,0,["bb",A5K(A1B)],AGt,0,B,[],0,3,0,0,0]);
$rt_metadata([QL,0,B,[C_],0,3,0,0,0,AEj,0,B,[],0,3,0,0,0,TW,0,B,[],0,3,0,0,0,L3,0,B,[],0,3,0,0,0,Sq,0,B,[],3,3,0,0,0,ACe,0,B,[W],0,3,0,0,["g",A5K(AV3)],Gd,0,I7,[],0,3,0,0,0,ADo,0,Fy,[],0,3,0,0,0,ACC,0,B,[W],0,3,0,0,["g",A5K(AUa)],T5,0,B,[W],0,3,0,0,["g",A5K(A1Z)],VA,0,B,[V],0,3,0,0,["f",A5J(A0z)],G5,0,B,[],1,0,0,0,0,Y$,"FolderDiffWindow",8,G5,[],0,3,[0,0,0],0,["b5",A5J(AME),"BB",A5K(AXC)],ADD,0,Es,[CL],0,3,0,0,0,Gv,0,B,[],0,0,0,0,0,JB,0,B,[],4,3,0,0,0,TZ,0,B,[],0,3,0,0,0,On,0,B,[],1,3,0,0,0,ACH,0,B,[CL],0,3,
0,0,["bJ",A5K(ALI),"gG",A5J(AR8),"mn",A5K(AZX)],AFE,0,C2,[],1,3,0,0,0,Uw,0,B,[V],0,3,0,0,["f",A5J(AMz)],ADZ,0,B,[],3,3,0,0,0,HY,0,CB,[],1,3,0,0,["b5",A5J(AZc),"cy",A5K(AQG),"cj",A5K(AU$),"dz",A5M(ANp),"cz",A5M(A1H),"cn",A5L(AS5),"dB",A5L(A1S),"bT",A5K(A2c),"dy",A5M(AN3)],QV,0,HY,[F_],0,3,0,0,["BT",A5J(APj),"hU",A5J(AXx)],Yk,0,B,[V],0,3,0,0,["f",A5J(AZ4)],Ym,0,B,[V],0,3,0,0,["f",A5J(AZb)],YZ,0,B,[W],0,3,0,0,["g",A5K(AVo)],Rl,0,B,[W],0,3,0,0,["g",A5K(AY$)],Fn,0,CB,[],0,3,0,0,0,Rf,0,Fn,[FS],0,3,0,0,["ws",A5J(AZg),
"uw",A5J(AOf),"b5",A5J(A1X),"ly",A5L(AWD),"cy",A5K(AUY),"oT",A5K(AZW),"rI",A5K(A02),"bT",A5K(APW),"cn",A5L(AN$),"cz",A5M(AR1),"it",A5K(A1b)],UU,0,B,[V],0,3,0,0,["f",A5J(ATH)],AFa,0,CB,[],0,3,0,0,["b5",A5J(ASG),"dz",A5M(AOv),"cy",A5K(A0q),"cz",A5M(AS3),"cn",A5L(ASI),"dB",A5L(AQ2),"bT",A5K(AQO),"dy",A5M(AWY),"hU",A5J(AHK)],ADw,0,B,[W],0,3,0,0,["g",A5K(ANq)],ADy,0,B,[W],0,3,0,0,["g",A5K(ALJ)],Qd,0,Fn,[],0,3,0,0,["hU",A5J(ATR),"oT",A5K(AZ1),"cy",A5K(AT6),"cn",A5L(AQn)],ADx,0,B,[V],0,3,0,0,["f",A5J(ASX)],Ub,0,CB,
[],0,3,0,0,0,Ii,0,HY,[],1,0,0,0,["cy",A5K(AXT),"BT",A5J(APT)],AFK,0,Ii,[Fa],0,0,0,0,0,Ho,0,B,[],0,3,0,0,0,Dg,0,Ho,[],0,3,0,0,0,Sz,0,B,[V],0,3,0,0,["f",A5J(AVR)],Sy,0,B,[V],0,3,0,0,["f",A5J(AUt)],ZY,0,Es,[CL],0,3,0,0,0,AB2,0,B,[W],0,3,0,0,["g",A5K(A2y)],ADW,0,B,[V],0,3,0,0,["f",A5J(AYg)],Xo,0,B,[V],0,3,0,0,["f",A5J(AVu)],UM,0,B,[V],0,3,0,0,["f",A5J(A0L)],ABo,0,B,[],0,3,0,0,0,J2,0,B,[],0,3,0,0,0]);
$rt_metadata([Ow,0,B,[],3,3,0,0,0,Ll,0,Fn,[FS],0,3,0,0,["ws",A5J(AZg),"uw",A5J(AOf),"b5",A5J(ARw),"ly",A5L(AMi),"cy",A5K(AYM),"cz",A5M(A1t),"cn",A5L(ANe)],AJl,0,Ll,[],0,3,0,0,["ws",A5J(AZg),"uw",A5J(AOf)],AF1,0,B,[Mm],0,3,0,0,["ws",A5J(AZg),"uw",A5J(AOf),"lg",A5J(ASS),"kq",A5J(A1E),"hG",A5K(ATE),"kT",A5J(API),"lX",A5J(AVf),"pj",A5L(AQg),"p_",A5K(AY2),"pq",A5J(Mz)],ABy,0,B,[],0,3,0,0,0,W$,0,B,[V],0,3,0,0,["f",A5J(ATW)],SA,0,B,[V],0,3,0,0,["f",A5J(APM)],P1,0,B,[W],0,3,0,0,["g",A5K(ALW)],P0,0,B,[W],0,3,0,0,["g",
A5K(AMb)],AD4,0,B,[Ge],0,3,0,0,["p$",A5L(ASm)],K_,0,B,[],0,3,0,0,0,AK2,0,G0,[],0,0,0,0,["t$",A5K(A2N)],C$,0,Bu,[],0,3,0,0,0,AKb,0,Fy,[],0,3,0,0,0,AK8,0,B,[],0,3,0,0,0,OO,0,B,[W],0,3,0,0,["g",A5K(AUq)],ACA,0,B,[W],0,3,0,0,["g",A5K(AYX)],Oe,0,BH,[],0,3,0,0,0,Se,0,B,[W],0,3,0,0,["g",A5K(AWL)],Sd,0,B,[W],0,3,0,0,["g",A5K(A1W)],Fg,0,B,[],3,3,0,0,0,W5,0,B,[Fg],0,0,0,0,["cD",A5J(B_),"b_",A5J(Ca),"ph",A5J(Zo)],Lf,0,On,[],1,3,0,0,0,SY,0,Lf,[],0,3,0,0,0,Yd,0,B,[W],0,3,0,0,0,Vt,0,B,[W],0,3,0,0,["g",A5K(ATp)],O6,0,B,[DO],
0,3,0,0,["cZ",A5J(AR4)],O5,0,B,[DO],0,3,0,0,["cZ",A5J(AWx)],AAn,0,B,[DO],0,3,0,0,["cZ",A5J(AZC)],Xz,0,B,[DO],0,3,0,0,["cZ",A5J(AUA)],Z5,0,B,[Ce],0,3,0,0,["bh",A5K(A2e)],AFI,0,B,[BT],1,3,0,0,0,ACy,0,B,[Ce],0,3,0,0,["bh",A5K(AOl)],AHz,0,B,[BD],0,3,0,0,0,AGF,0,B,[BD],0,3,0,0,0,W2,0,B,[W],0,3,0,0,["g",A5K(ANb)],W1,0,B,[W],0,3,0,0,["g",A5K(ASy)],AA4,0,B,[V],0,3,0,0,["f",A5J(ALm)],AE1,0,B,[],0,3,0,0,0,AA5,0,B,[V],0,3,0,0,["f",A5J(AOG)],Tb,0,B,[V],0,3,0,0,["f",A5J(ATk)],RP,0,B,[V],0,3,0,0,["f",A5J(AYt)],ACD,0,B,[V],
0,3,0,0,["f",A5J(A2m)],QG,0,B,[],0,3,0,0,0,PS,0,B,[V],0,3,0,0,["f",A5J(ANC)],PT,0,B,[D$],0,3,0,0,0,Eg,0,Bu,[],0,3,0,0,0,AG3,0,B,[],0,3,0,0,0,SD,0,Ee,[Ex,C7],0,3,0,0,0,Uu,0,B,[],0,3,0,0,0]);
$rt_metadata([Uc,0,B,[],0,3,0,0,0,WF,0,B,[D$],0,3,0,0,0,SN,0,B,[W],0,3,0,0,["g",A5K(ASA)],Yv,0,Es,[CL],0,3,0,0,0,J6,0,B,[],4,3,0,0,0,TP,0,B,[V],0,3,0,0,["f",A5J(AL1)],TQ,0,B,[V],0,3,0,0,["f",A5J(AN1)],TR,0,B,[V],0,3,0,0,["f",A5J(A1Y)],TS,0,B,[V],0,3,0,0,["f",A5J(AP_)],TT,0,B,[V],0,3,0,0,["f",A5J(ASg)],OS,0,B,[Ce],0,3,0,0,["bh",A5K(A22)],Vw,0,B,[],3,3,0,A30,0,PC,0,CB,[],0,3,0,0,["cy",A5K(ALR)],ABP,0,B,[],0,3,0,0,0,Re,0,B,[V],0,3,0,0,["f",A5J(AY0)],Tv,0,B,[],3,3,0,AOW,0,Wy,0,B,[V],0,3,0,0,["f",A5J(AYW)],QX,0,
B,[F_],0,3,0,0,["il",A5K(A0p)],QW,0,B,[DO],0,3,0,0,["cZ",A5J(AWz)],W9,0,B,[],0,3,0,0,0,AG$,0,B,[],0,3,0,0,0,ST,0,B,[],0,0,0,0,0,AEK,0,B,[],3,3,0,0,0,RY,0,B,[V],0,3,0,0,["f",A5J(AXF)],ACR,0,B,[V],0,3,0,0,["f",A5J(ATS)],Yn,0,B,[],1,3,0,0,0,Zg,0,B,[Mn],3,3,0,0,0,Pp,0,B,[Zg],3,3,0,0,0,Ib,0,B,[Pp],1,3,0,0,0,Z8,0,Ib,[],0,3,0,0,0,Rj,0,B,[],3,3,0,0,0,P4,0,B,[W],0,3,0,0,0,ADu,0,B,[W],0,3,0,0,["g",A5K(AMj)],AFR,0,B,[],3,3,0,0,0,Jz,0,GX,[],0,0,0,0,0,H_,0,Bu,[],0,3,0,0,0,ACa,0,B,[W],0,3,0,0,["g",A5K(ASR)],ADH,0,B,[Ce],
0,3,0,0,["bh",A5K(A0G)],ADG,0,B,[Ce],0,3,0,0,["bh",A5K(AWw)],AC8,0,B,[Ce],0,3,0,0,["bh",A5K(AXk)],AC7,0,B,[Ce],0,3,0,0,["bh",A5K(AXQ)],ABR,0,B,[HZ],0,3,0,0,["wN",A5M(APR)],AKg,0,B,[],0,3,0,0,0,Q6,0,B,[W],0,3,0,0,["g",A5K(AVv)],AEq,0,B,[W],0,3,0,0,0,Tg,0,B,[CA],0,3,0,0,["cv",A5K(AU0)],Vg,0,B,[BD],0,3,0,0,0,FM,0,B,[],0,3,0,0,0,AIm,0,B,[],0,3,0,0,0,AEQ,0,B,[],0,3,0,0,0]);
$rt_metadata([ALe,0,B,[],0,3,0,0,0,ADp,0,B,[V],0,3,0,0,["f",A5J(AVg)],ADq,0,B,[V],0,3,0,0,["f",A5J(AXE)],FX,0,B,[],0,3,0,0,0,VI,0,B,[W],0,3,0,0,["g",A5K(AOq)],NJ,0,FX,[],0,3,0,0,0,Lb,0,FX,[],0,3,0,0,0,UI,0,B,[W],0,3,0,0,["g",A5K(AVj)],QN,0,B,[],0,3,0,0,0,Qi,0,B,[W],0,3,0,0,["g",A5K(AYN)],Qm,0,B,[Hz],3,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],Fu,0,FA,[Qm],1,3,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],No,0,Fu,[],1,0,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],T6,0,No,[],0,0,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],N3,0,Ee,[],1,0,0,0,0,T3,
0,N3,[],0,0,0,0,0,Oh,0,Fo,[LC],1,0,0,0,["fl",A5K(AUs),"jd",A5J(AWr),"p9",A5K(AQs),"pA",A5K(APs)],T4,0,Oh,[],0,0,0,0,["fl",A5K(AUs),"kA",A5K(AQz),"c2",A5J(APL),"b$",A5J(ANH),"eF",A5J(AL5)],T1,0,B,[Fg],0,0,0,0,["cD",A5J(ALO),"b_",A5J(AZA),"ph",A5J(ASq)],Yj,0,B,[Fg],3,3,0,0,0,T2,0,B,[Yj],0,0,0,0,0,V4,0,B,[Ge],0,3,0,0,0,Rh,0,B,[D$],0,3,0,0,["H",A5K(A24)],Kr,0,Eg,[],0,3,0,0,0,JF,0,Bu,[],0,3,0,0,0,Oa,0,Bu,[],0,3,0,0,0,Yb,0,B,[W],0,3,0,0,["g",A5K(AZB)],AHR,0,B,[W],0,3,0,0,0,ABe,0,B,[W],0,3,0,0,["g",A5K(AQi)],Q5,0,
B,[Rj],0,3,0,0,0,U_,0,B,[W],0,3,0,0,["g",A5K(AXK)],AEw,0,B,[],0,3,0,0,0,AAo,0,B,[V],0,3,0,0,["f",A5J(AVh)],G_,0,B,[],0,3,0,0,0,Qw,0,Fu,[],0,0,0,0,["pA",A5K(AX3)],Ty,0,Fu,[],0,0,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],Qx,0,FA,[],0,0,0,0,["fl",A5K(AUs),"pA",A5K(AX3)],V7,0,B,[W],0,3,0,0,["g",A5K(AWS)],TU,0,B,[W],0,3,0,0,["g",A5K(AYu)],Kv,0,B,[],0,3,0,0,["bJ",A5K(AJW)],Mf,0,Kv,[],0,3,0,0,["bJ",A5K(AVG)],E7,0,B,[],0,3,0,0,["bJ",A5K(AIp)],HH,0,E7,[],0,3,0,0,0,Ke,0,E7,[],0,3,0,0,["bJ",A5K(A12)],Jk,0,E7,[],0,3,0,0,["bJ",
A5K(AU5)],Yc,0,B,[W],0,3,0,0,["g",A5K(AZE)],AFk,0,Ib,[],0,3,0,0,0,R2,0,B,[V],0,3,0,0,["f",A5J(AOV)],R3,0,B,[V],0,3,0,0,["f",A5J(AMY)],R0,0,B,[V],0,3,0,0,["f",A5J(AL9)]]);
$rt_metadata([R1,0,B,[V],0,3,0,0,["f",A5J(AOP)],Ry,0,B,[V],0,3,0,0,["f",A5J(AZ9)],Rx,0,B,[V],0,3,0,0,["f",A5J(AZk)],Rw,0,B,[V],0,3,0,0,["f",A5J(AUj)],Qo,0,B,[V],0,3,0,0,["f",A5J(AQ4)],Q4,0,B,[],3,3,0,0,0,YI,0,B,[V],0,3,0,0,["f",A5J(AMO)],AAV,0,B,[W],0,3,0,0,["g",A5K(ARr)],M3,"FileDiffWindow",8,G5,[],0,3,[0,0,0],0,["b5",A5J(A1K),"BB",A5K(AVq)],Z$,0,B,[Hg],0,3,0,0,["qd",A5L(AUy)],Wo,0,B,[],0,3,0,0,0,RD,0,B,[],0,3,0,0,0,Vk,0,B,[W],0,3,0,0,["g",A5K(ALn)],UA,0,B,[LP],0,3,0,0,["zs",A5K(Nt)],Ph,0,B,[V],0,3,0,0,["f",
A5J(AX0)],Pi,0,B,[V],0,3,0,0,["f",A5J(A1r)],Pg,0,B,[V],0,3,0,0,["f",A5J(AUp)],UZ,0,B,[V],0,3,0,0,["f",A5J(AP2)],UY,0,B,[V],0,3,0,0,["f",A5J(A0o)],X2,0,B,[DO],0,3,0,0,["cZ",A5J(ANr)],AAa,0,B,[V],0,3,0,0,["f",A5J(AO3)],AAb,0,B,[V],0,3,0,0,["f",A5J(A1c)],VG,0,B,[V],0,3,0,0,["f",A5J(ALw)],VB,0,B,[V],0,3,0,0,["f",A5J(AO4)],VC,0,B,[V],0,3,0,0,["f",A5J(ATL)],VD,0,B,[V],0,3,0,0,["f",A5J(AYC)],VE,0,B,[V],0,3,0,0,["f",A5J(AXr)],OM,0,B,[DO],0,3,0,0,["cZ",A5J(AS8)],Uv,0,Ii,[Fa],0,0,0,0,0,VZ,0,B,[EV],0,3,0,0,0,VY,0,B,[E8],
0,3,0,0,0,Rr,0,B,[Hg],0,3,0,0,["qd",A5L(ANs)],XN,0,B,[L7],3,3,0,0,0,ACk,0,B,[XN],0,0,0,0,["o7",A5J(Hp),"th",A5J(A11),"cO",A5J(AFm)],AHx,0,B,[CL],0,3,0,0,["bJ",A5K(AQ6)],WA,0,B,[W],0,3,0,0,["g",A5K(AYs)],VR,0,B,[W],0,3,0,0,["g",A5K(A21)],To,0,B,[HZ],0,3,0,0,0,OR,0,B,[W],0,3,0,0,["g",A5K(A1N)],FG,0,B,[],0,0,0,0,0,AAv,0,FG,[Fg],0,0,0,0,0,Tr,0,FG,[Fg],0,0,0,0,0,Zv,0,FG,[Fg],0,0,0,0,0,AEI,0,B,[W],0,0,0,0,0,Zt,0,B,[C7],4,3,0,0,0,Z3,0,B,[W],0,3,0,0,["g",A5K(AQp)],Z2,0,B,[W],0,3,0,0,["g",A5K(AZY)],XC,0,B,[W],0,3,0,
0,["g",A5K(AWk)],HX,0,B,[],3,3,0,0,0,S5,0,B,[HX],0,3,0,0,["lT",A5M(AYO)]]);
$rt_metadata([S6,0,B,[HX],0,3,0,0,["lT",A5M(AXw)],IU,0,B,[C7,CL],0,3,0,0,0,KO,0,B,[],3,3,0,0,0,RX,0,B,[KO],0,3,0,0,0,XR,0,B,[KO],3,3,0,0,0,AFS,0,B,[XR],0,3,0,0,0,Si,0,B,[HX],0,3,0,0,["lT",A5M(AZh)],Sh,0,B,[D$],0,3,0,0,["H",A5K(ATB)],Sg,0,B,[D$],0,3,0,0,["H",A5K(ARV)],Sk,0,B,[HX],0,3,0,0,["lT",A5M(AYV)],GJ,0,CI,[],12,0,0,Sw,0,AD7,0,B,[W],0,3,0,0,["g",A5K(AW3)],BS,0,B,[],1,0,0,0,["cr",A5M(IG),"cB",A5N(IN),"iV",A5J(AVQ),"T",A5K(ATb),"b2",A5K(A1v),"gB",A5J(A2f),"eU",A5J(Ku)],Qr,0,B,[V],0,3,0,0,["f",A5J(AUW)],VS,
0,B,[W],0,3,0,0,["g",A5K(AZm)],VT,0,B,[W],0,3,0,0,["g",A5K(AOc)],RC,0,B,[V],0,3,0,0,["f",A5J(AXd)],XB,0,B,[W],0,3,0,0,["g",A5K(AQC)],AAK,0,B,[V],0,3,0,0,["f",A5J(AMh)],Im,0,Dg,[],0,3,0,0,0,SB,0,B,[W],0,3,0,0,["g",A5K(ARY)],AA_,0,B,[],32,0,0,A43,0,O7,0,B,[W],0,3,0,0,["g",A5K(AO5)],C0,0,BS,[],0,0,0,Ox,["c",A5M(AMg),"I",A5K(AMv)],G7,0,B,[],0,0,0,0,0,Kf,0,BU,[],0,3,0,0,0,PH,0,B,[V],0,3,0,0,["f",A5J(AUV)],ACr,0,B,[W],0,3,0,0,["g",A5K(A1n)],RW,0,C0,[],0,0,0,0,["c",A5M(AU1),"I",A5K(A0v)],ADU,0,C0,[],0,0,0,0,["c",A5M(AWb)],QP,
0,C0,[],0,0,0,0,["c",A5M(AMB)],SF,0,C0,[],0,0,0,0,["c",A5M(AU4),"I",A5K(AZD)],F6,0,C0,[],0,0,0,0,["c",A5M(ATm)],Cc,0,BS,[],1,0,0,0,["c",A5M(A2K),"ca",A5J(A08),"I",A5K(APb)],AG7,0,Cc,[],0,0,0,0,["bz",A5L(A0N),"cr",A5M(AWX),"cB",A5N(AV9),"I",A5K(AU3)],B8,0,BS,[],0,0,0,0,["c",A5M(AOs),"T",A5K(ARn),"b2",A5K(AYo),"I",A5K(ARQ),"eU",A5J(AMX)],Kq,0,B8,[],0,0,0,0,["c",A5M(ARb),"I",A5K(AZ_)],D_,0,Kq,[],0,0,0,0,["c",A5M(AWu),"T",A5K(AZ3)],Wj,0,D_,[],0,0,0,0,["c",A5M(ARl),"I",A5K(ATg)],ACL,0,D_,[],0,0,0,0,["c",A5M(AMs),
"I",A5K(A0$)],Zw,0,D_,[],0,0,0,0,["c",A5M(AMV),"I",A5K(A2Y)],SZ,0,D_,[],0,0,0,0,["c",A5M(AUH),"I",A5K(A0k)],HS,0,B8,[],0,0,0,0,["c",A5M(ALL),"cr",A5M(AP6),"cB",A5N(A0x),"b2",A5K(AYl),"gB",A5J(AZz),"eU",A5J(ATI)],KA,0,Dg,[],0,3,0,0,0,G9,0,B,[],1,0,0,0,0,Z,0,G9,[],1,0,0,Qe,["dS",A5J(AVA),"fR",A5J(AVe),"l0",A5J(A04),"iq",A5J(A2a)],AEV,0,Z,[],0,0,0,0,["n",A5K(Db),"dS",A5J(C5),"fR",A5J(AWT),"l0",A5J(AS4),"cO",A5J(AYY),"iq",A5J(AN9)],MG,0,Bu,[],0,3,0,0,0,Em,0,BS,[],1,0,0,0,["b2",A5K(ASo),"I",A5K(A1D),"eU",A5J(AQm)],Dc,
0,Em,[],0,0,0,0,["c",A5M(AUI)]]);
$rt_metadata([FQ,0,Dc,[],0,0,0,0,["c",A5M(AVn)],C1,0,Em,[],0,0,0,0,["c",A5M(AUS)],E6,0,Dc,[],0,0,0,0,["c",A5M(AYB),"T",A5K(AUl)],US,0,Dc,[],0,0,0,0,["c",A5M(A2H),"cr",A5M(AQL)],Bf,0,B,[],1,0,0,0,0,Dt,0,BU,[],0,3,0,0,0,Wt,0,G9,[Ex],0,0,0,0,["cO",A5J(AY4)],Xx,0,BS,[],0,0,0,0,["c",A5M(APu),"I",A5K(AZy)],ADk,0,B,[Ex,C7],0,3,0,0,0,OW,0,B8,[],0,0,0,0,0,Rc,0,B8,[],0,0,0,0,["c",A5M(AMe),"T",A5K(AZr),"I",A5K(AMG),"b2",A5K(AMu)],D4,0,B8,[],0,0,0,0,["c",A5M(AWO),"n",A5K(AOj),"b2",A5K(AMa),"T",A5K(A0Y),"I",A5K(AN0)],MD,
0,D4,[],0,0,0,0,["n",A5K(APc)],AEP,0,Cc,[],0,0,0,0,["bz",A5L(AX_)],EE,0,Cc,[],0,0,0,0,["bz",A5L(V9),"b2",A5K(ARp)],XT,0,B8,[],0,0,0,0,["T",A5K(AQb),"c",A5M(ALv),"b2",A5K(AVJ),"I",A5K(AS9)],EL,0,Cc,[],0,0,0,0,["ca",A5J(AXZ),"bz",A5L(AOC),"cr",A5M(ANM),"cB",A5N(APp),"b2",A5K(AS1)],AHt,0,Cc,[],0,0,0,0,["bz",A5L(AUv)],AEc,0,Cc,[],0,0,0,0,["bz",A5L(ALD)],FU,0,B8,[],0,0,0,0,["T",A5K(A2i),"c",A5M(ARa),"b2",A5K(APv),"I",A5K(AZ5)],Vm,0,FU,[],0,0,0,0,0,ABg,0,FU,[],0,0,0,0,0,V6,0,C1,[],0,0,0,0,["c",A5M(AWf)],Yw,0,C1,[],
0,0,0,0,["c",A5M(AYQ)],GE,0,C1,[],0,0,0,0,["c",A5M(A0W),"T",A5K(A1Q)],QA,0,GE,[],0,0,0,0,["c",A5M(APl),"T",A5K(AY6)],Gn,0,C1,[],0,0,0,0,["c",A5M(A2V)],Pb,0,Gn,[],0,0,0,0,["c",A5M(AOR)],RR,0,C1,[],0,0,0,0,["c",A5M(ATQ)],Zb,0,GE,[],0,0,0,0,["c",A5M(AMH)],TC,0,Gn,[],0,0,0,0,["c",A5M(AU9)],RS,0,Em,[],0,0,0,0,["c",A5M(A2L),"cr",A5M(ASL)],XD,0,Em,[],0,0,0,0,["c",A5M(ARq),"cr",A5M(ALx)],Fz,0,B,[],1,0,0,0,0,AD_,0,Dc,[],0,0,0,0,["c",A5M(AL4)],UN,0,E6,[],0,0,0,0,["c",A5M(AQB)],X4,0,FQ,[],0,0,0,0,["c",A5M(A0A)],Za,0,Dc,
[],0,0,0,0,["c",A5M(ARm)],ABr,0,E6,[],0,0,0,0,["c",A5M(AL$)],RH,0,FQ,[],0,0,0,0,["c",A5M(A0P)],Le,0,BS,[],4,0,0,0,["c",A5M(AYn),"I",A5K(AXP)],AE$,0,BS,[],0,0,0,0,["c",A5M(AVy),"I",A5K(AVI)],XA,0,BS,[],0,0,0,0,["c",A5M(APe),"I",A5K(AUd)],Vf,0,BS,[],4,0,0,0,["c",A5M(AZS),"I",A5K(AV$)],AC6,0,BS,[],0,0,0,0,["c",A5M(AZp),"I",A5K(AUu)],WN,0,BS,[],0,0,0,0,["c",A5M(AV5),"I",A5K(AOp)],AHe,0,B8,[],0,0,0,0,["c",A5M(ATT),"T",A5K(AVL),"iV",A5J(AZa),"I",A5K(AVK)],AEU,0,B8,[],4,0,0,0,["c",A5M(AZi),"T",A5K(A0r),"iV",A5J(ALj),
"I",A5K(AT5)],AKM,0,BS,[],4,0,0,0,["c",A5M(APz),"I",A5K(AW_)],AJT,0,BS,[],0,0,0,0,["c",A5M(AQ7),"I",A5K(AW5)]]);
$rt_metadata([AH2,0,BS,[],0,0,0,0,["c",A5M(AXL),"I",A5K(AM6)],Ic,0,B8,[],0,0,0,0,["c",A5M(AL6),"T",A5K(AZ0),"I",A5K(AR6)],AKS,0,Ic,[],0,0,0,0,["c",A5M(AM$),"cr",A5M(ATe),"cB",A5N(ALT),"b2",A5K(AYL)],AJd,0,Ic,[],0,0,0,0,["c",A5M(AP1)],PX,0,GS,[JG],0,3,0,0,["pK",A5N(AOa),"o_",A5M(AVB),"j0",A5K(AVY),"p2",A5L(A07)],ZJ,0,Cc,[],0,0,0,0,["bz",A5L(ANk),"cr",A5M(AVw),"cB",A5N(AXe),"b2",A5K(AOH)],AEb,0,Cc,[],0,0,0,0,["bz",A5L(AP8)],Pe,0,Cc,[],0,0,0,0,["bz",A5L(A0B)],Hj,0,B,[],4,0,0,ASe,0,Wc,0,Cc,[],0,0,0,0,["bz",A5L(ASt)],NO,
0,B8,[],0,0,0,0,["T",A5K(AZw),"c",A5M(AV_),"cr",A5M(AOF),"cB",A5N(AWy),"b2",A5K(ALS),"I",A5K(ASV)],NW,0,B8,[],0,0,0,0,["T",A5K(AVX),"c",A5M(ALz),"cr",A5M(AZH),"cB",A5N(ASp),"b2",A5K(ANl),"I",A5K(AZN)],Ef,0,Cc,[],0,0,0,0,["bz",A5L(A0b),"cr",A5M(AYZ),"cB",A5N(AMM),"b2",A5K(AZ7)],ACh,0,Fz,[],0,0,0,0,["iP",A5K(AMR),"Ah",A5L(AR3)],ACi,0,Fz,[],0,0,0,0,["iP",A5K(A0Q),"Ah",A5L(ATD)],AGE,0,B,[],0,0,0,0,0,AEo,0,B,[],0,0,0,0,0,NM,0,Bf,[],0,0,0,0,["F",A5J(AJj)],M$,0,Bf,[],0,0,0,0,["F",A5J(AJP)],AGy,0,Bf,[],0,0,0,0,["F",
A5J(A0u)],AGT,0,Bf,[],0,0,0,0,["F",A5J(ASY)],AGV,0,Bf,[],0,0,0,0,["F",A5J(ANR)],NI,0,Bf,[],0,0,0,0,["F",A5J(AEX)],LI,0,NI,[],0,0,0,0,["F",A5J(AFr)],AHT,0,Bf,[],0,0,0,0,["F",A5J(AXt)],OC,0,LI,[],0,0,0,0,["F",A5J(AH0)],AJv,0,OC,[],0,0,0,0,["F",A5J(AQo)],AFV,0,Bf,[],0,0,0,0,["F",A5J(AWn)],AE6,0,Bf,[],0,0,0,0,["F",A5J(AQk)],AIL,0,Bf,[],0,0,0,0,["F",A5J(ATG)],AKB,0,Bf,[],0,0,0,0,["F",A5J(AY9)],AHW,0,Bf,[],0,0,0,0,["F",A5J(AUB)],AKj,0,Bf,[],0,0,0,0,["F",A5J(AOX)],AGp,0,Bf,[],0,0,0,0,["F",A5J(ASa)],AG8,0,Bf,[],0,0,
0,0,["F",A5J(AWl)],AEA,0,Bf,[],0,0,0,0,["F",A5J(ANx)],AH9,0,Bf,[],0,0,0,0,["F",A5J(A17)],AKq,0,Bf,[],0,0,0,0,["F",A5J(AUw)],AGO,0,Bf,[],0,0,0,0,["F",A5J(APA)],AI5,0,Bf,[],0,0,0,0,["F",A5J(ANE)],AFX,0,Bf,[],0,0,0,0,["F",A5J(AXg)],AHD,0,Bf,[],0,0,0,0,["F",A5J(AYh)],AKv,0,Bf,[],0,0,0,0,["F",A5J(AS$)],AFB,0,Bf,[],0,0,0,0,["F",A5J(ARI)],AFg,0,Bf,[],0,0,0,0,["F",A5J(AQP)],AHU,0,Bf,[],0,0,0,0,["F",A5J(A0m)],KB,0,Bf,[],0,0,0,0,["F",A5J(AFW)],AKJ,0,KB,[],0,0,0,0,["F",A5J(AQH)],AJA,0,NM,[],0,0,0,0,["F",A5J(AVt)],AFe,
0,M$,[],0,0,0,0,["F",A5J(AOz)]]);
$rt_metadata([AIO,0,Bf,[],0,0,0,0,["F",A5J(APP)],AIZ,0,Bf,[],0,0,0,0,["F",A5J(ATv)],AJo,0,Bf,[],0,0,0,0,["F",A5J(AW4)],AJw,0,Bf,[],0,0,0,0,["F",A5J(ALp)],AIR,0,B,[],4,0,0,0,0,AEO,0,B,[],4,3,0,0,0,WQ,0,B,[],0,3,0,0,0,AGJ,0,B,[],0,3,0,0,0,AJa,0,B,[],4,3,0,0,0,Mt,0,Bu,[],0,3,0,0,0,Y9,0,B,[W],0,3,0,0,["g",A5K(AYm)],Y8,0,B,[W],0,3,0,0,["g",A5K(ATN)],AIF,0,B,[D$],0,3,0,0,0,Sn,0,B,[W],0,3,0,0,["g",A5K(AW$)],RL,0,B,[W],0,3,0,0,["g",A5K(AM0)],ACc,0,B,[D$],0,0,0,0,["H",A5K(ANV)],ABB,0,B,[V],0,3,0,0,["f",A5J(A1d)],ABE,
0,B,[W],0,3,0,0,0,ABG,0,B,[W],0,3,0,0,["g",A5K(A1U)],KH,0,B,[],3,3,0,0,0,PI,0,B,[KH],0,0,0,0,["t0",A5K(AZ2),"xp",A5K(AXB),"wr",A5J(ASu)],AA6,0,B,[W],0,3,0,0,0,R4,0,B,[W],0,3,0,0,0,RV,0,B,[V],0,3,0,0,["f",A5J(AQ_)],UR,0,Z,[],0,0,0,0,["n",A5K(ANX)],UP,0,Z,[],0,0,0,0,["n",A5K(AUR)],P9,0,Z,[],0,0,0,0,["n",A5K(APG),"cO",A5J(AXi)],XJ,0,Z,[],0,0,0,0,["n",A5K(A0e)],XH,0,Z,[],0,0,0,0,["n",A5K(ASs)],XI,0,Z,[],0,0,0,0,["n",A5K(AYy)],XM,0,Z,[],0,0,0,0,["n",A5K(AWF)],XO,0,Z,[],0,0,0,0,["n",A5K(ALk)],XK,0,Z,[],0,0,0,0,["n",
A5K(AOu)],XL,0,Z,[],0,0,0,0,["n",A5K(AQa)],XP,0,Z,[],0,0,0,0,["n",A5K(ATh)],XQ,0,Z,[],0,0,0,0,["n",A5K(AWh)],P8,0,Z,[],0,0,0,0,["n",A5K(A25)],Qq,0,Z,[],0,0,0,0,["n",A5K(AOx)],P6,0,Z,[],0,0,0,0,["n",A5K(ANc)],P7,0,Z,[],0,0,0,0,["n",A5K(AW8)],Qa,0,Z,[],0,0,0,0,["n",A5K(APg)],P5,0,Z,[],0,0,0,0,["n",A5K(A1g)],P$,0,Z,[],0,0,0,0,["n",A5K(AVD)],P_,0,Z,[],0,0,0,0,["n",A5K(ARC)],L$,0,B,[],3,3,0,0,0,AAh,0,B,[L$],4,3,0,0,0,AJC,0,B,[Hg],0,3,0,0,0,Da,0,B,[],3,3,0,AGX,0,Cz,0,CI,[],12,3,0,AGj,0,D1,0,B,[],3,3,0,AU7,0]);
$rt_metadata([ACB,0,B,[],0,3,0,0,0,O9,0,HS,[],0,0,0,0,["cr",A5M(AOe),"cB",A5N(A2U),"gB",A5J(AM3)],Q$,0,Bu,[],0,3,0,0,0,Vj,0,Bu,[],0,3,0,0,0,TV,0,Gd,[],0,3,0,0,0,Q3,0,Gd,[],0,3,0,0,0,Vh,0,B,[Ce],0,3,0,0,["bh",A5K(AXf)],Vi,0,B,[Ce],0,3,0,0,["bh",A5K(AVC)],AB8,0,B,[],0,3,0,0,0,ADC,0,B,[W],0,3,0,0,["g",A5K(A0f)],AEN,0,B,[],3,3,0,0,0,ACo,0,B,[Ce],0,3,0,0,["bh",A5K(ARK)],ACq,0,B,[Ce],0,3,0,0,["bh",A5K(AQW)],ACs,0,B,[Ce],0,0,0,0,["bh",A5K(ARR)],YK,0,B,[V],0,3,0,0,0,AAL,0,B,[KH],0,0,0,0,["t0",A5K(A1s),"xp",A5K(ATf),
"wr",A5J(A1O)],AB_,0,B,[L$],0,0,0,0,0,Tq,0,B,[Ce],0,3,0,0,["bh",A5K(AYr)],AAf,0,B,[V],0,3,0,0,["f",A5J(A2S)],Xt,0,B,[V],0,3,0,0,["f",A5J(ARN)],Xu,0,B,[V],0,3,0,0,["f",A5J(APw)],YA,0,B,[V],0,3,0,0,["f",A5J(A1R)],We,0,B,[V],0,3,0,0,["f",A5J(ASN)],Wf,0,B,[V],0,3,0,0,["f",A5J(AVE)],AAW,0,B,[V],0,3,0,0,["f",A5J(AX2)],ZC,0,B,[W],0,3,0,0,["g",A5K(A1j)],AAN,0,Z,[],0,0,0,0,["n",A5K(ATl)],Wm,0,Z,[],0,0,0,0,["n",A5K(AVr)],R6,0,Z,[],0,0,0,0,["n",A5K(AL8)],R5,0,Z,[],0,0,0,0,["n",A5K(AW2)],U5,0,Z,[],0,0,0,0,["n",A5K(AO8)],X1,
0,Z,[],0,0,0,0,["n",A5K(A1M)],PU,0,Z,[],0,0,0,0,["n",A5K(ARh)],Zk,0,Z,[],0,0,0,0,["n",A5K(ASd)],Wi,0,Z,[],0,0,0,0,["n",A5K(A2I)],Wk,0,Z,[],0,0,0,0,["n",A5K(ANn)],Py,0,Z,[],0,0,0,0,["n",A5K(ATs)],Yi,0,Z,[],0,0,0,0,["n",A5K(AYG)],Yp,0,Z,[],0,0,0,0,["n",A5K(AZZ)],ABa,0,Z,[],0,0,0,0,["n",A5K(A1z)],AAi,0,Z,[],0,0,0,0,["n",A5K(ATM)],O1,0,Z,[],0,0,0,0,["n",A5K(ANh)],Mi,0,Z,[],0,0,0,0,["n",A5K(ARi)],ZQ,0,Mi,[],0,0,0,0,["n",A5K(A0Z)],ADB,0,B,[BT],3,3,0,0,0,YP,0,B,[ADB],0,3,0,0,["Is",A5J(APV)],Tf,0,B,[W],0,3,0,0,["g",
A5K(AWN)],Z1,0,B,[KY],0,0,0,0,["rM",A5L(AMq),"zH",A5K(APE),"xA",A5K(AUf),"uP",A5K(AUm)],AF9,0,B,[BT],3,3,0,0,0,ABQ,0,B,[V],0,3,0,0,["f",A5J(AM1)]]);
$rt_metadata([RG,0,B,[V],0,3,0,0,["f",A5J(A19)],AIs,0,B,[],0,0,0,0,0,AD9,0,B,[V],0,3,0,0,["f",A5J(AX1)],ABx,0,B,[W],0,3,0,0,["g",A5K(ATO)],ABw,0,B,[W],0,3,0,0,["g",A5K(AUr)]]);
function $rt_array(cls,data){this.WN=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","ClassL.java","ClassR.java","selectScene ","CodiconDemo","RenderTexture","CleartypeColors",
"ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas","#e3c8ab","#39322b","hello string","withString",
"withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","js","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",
", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile",
"JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ",
"clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ","w = ","Window 1","Window ","Project root","FileTreeView model size = ","Open project...","request new model, file = ","request in progress ","Select left...","Select right...","#616161","#BBBBBB","wasm memory size = ",
"callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown",
"onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","new folder diff window","new file diff window","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ",
"jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: ",
" writeClipboardText \'","\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs",
"readClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1",
"#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = ","open dir = ","opening file ... ","folderOpened ","Error fetching file "]);
BK.prototype.toString=function(){return $rt_ustr(this);};
BK.prototype.valueOf=BK.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AMK(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CS=Long_add;var JK=Long_sub;var Ci=Long_mul;var AGI=Long_div;var AUN=Long_rem;var A3q=Long_or;var Df=Long_and;var A9D=Long_xor;var HP=Long_shl;var A4L=Long_shr;var Gb=Long_shru;var A9E=Long_compare;var II=Long_eq;var A9F=Long_ne;var A3n=Long_lt;var ANI=Long_le;var A9G=Long_gt;var A3m=Long_ge;var A9H=Long_not;var A4W=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A4X);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ABi.prototype;c.f=c.bh;c=ABj.prototype;c.f=c.bh;c=ABh.prototype;c.f=c.bh;c=WD.prototype;c.f=c.bh;c=AJz.prototype;c.get=c.Lt;Object.defineProperty(c,"length",{get:c.RS});c=AIg.prototype;c.createEntityReference=c.N6;c.getElementById=c.Qn;c.createTextNode=c.P7;c.hasChildNodes=c.O8;c.querySelectorAll=c.NN;c.removeChild=c.RE;c.cloneNode=c.Gg;c.createComment=c.SO;c.insertBefore=c.On;c.getElementsByTagNameNS=c.RQ;c.hasAttributes=c.IS;c.normalize=c.LZ;c.hasChildNodesJS=c.LS;c.getElementsByTagName
=c.Ls;c.appendChild=c.MW;c.createAttributeNS=c.QH;c.dispatchEvent=c.LE;c.replaceChild=c.GK;c.createElementNS=c.HQ;c.createCDATASection=c.KM;c.querySelector=c.IR;c.createElement=c.Ra;c.isSupported=c.RI;c.importNode=c.Ox;c.removeEventListener=c.HM;c.createAttribute=c.LF;c.createDocumentFragment=c.FC;c.createProcessingInstruction=c.N0;c.addEventListener=c.J6;Object.defineProperty(c,"nodeName",{get:c.MV});Object.defineProperty(c,"documentElement",{get:c.Iw});Object.defineProperty(c,"childNodes",{get:c.Ku});Object.defineProperty(c,
"prefix",{get:c.OD,set:c.SZ});Object.defineProperty(c,"implementation",{get:c.K7});Object.defineProperty(c,"textContent",{get:c.ST,set:c.P4});Object.defineProperty(c,"parentNode",{get:c.Qk});Object.defineProperty(c,"nextSibling",{get:c.Im});Object.defineProperty(c,"nodeType",{get:c.Rp});Object.defineProperty(c,"doctype",{get:c.Pm});Object.defineProperty(c,"localName",{get:c.R$});Object.defineProperty(c,"nodeValue",{get:c.H6,set:c.SG});Object.defineProperty(c,"firstChild",{get:c.LA});Object.defineProperty(c,
"lastChild",{get:c.Kc});Object.defineProperty(c,"previousSibling",{get:c.MH});Object.defineProperty(c,"namespaceURI",{get:c.G2});Object.defineProperty(c,"attributes",{get:c.OK});Object.defineProperty(c,"ownerDocument",{get:c.G9});c=Pz.prototype;c.f=c.bh;c=AII.prototype;c.removeEventListener=c.G_;c.dispatchEvent=c.Os;c.addEventListener=c.JE;c=T$.prototype;c.onAnimationFrame=c.IT;c=T9.prototype;c.f=c.BL;c=T7.prototype;c.handleEvent=c.cv;c=AAe.prototype;c.f=c.bh;c=ACU.prototype;c.handleEvent=c.cv;c=ACV.prototype;c.handleEvent
=c.cv;c=ACW.prototype;c.handleEvent=c.cv;c=ACX.prototype;c.handleEvent=c.cv;c=ACY.prototype;c.handleEvent=c.cv;c=ACZ.prototype;c.handleEvent=c.cv;c=AC0.prototype;c.handleEvent=c.cv;c=AC1.prototype;c.handleEvent=c.cv;c=AC2.prototype;c.handleEvent=c.cv;c=AC3.prototype;c.handleEvent=c.cv;c=VK.prototype;c.handleEvent=c.cv;c=VL.prototype;c.handleEvent=c.cv;c=VM.prototype;c.handleEvent=c.cv;c=VN.prototype;c.handleEvent=c.cv;c=ABN.prototype;c.handleEvent=c.cv;c=ADO.prototype;c.f=c.bh;c=ADP.prototype;c.f=c.bh;c=WM.prototype;c.f
=c.bh;c=WL.prototype;c.f=c.bh;c=WJ.prototype;c.f=c.bh;c=WI.prototype;c.f=c.bh;c=Pt.prototype;c.accept=c.LL;c=OT.prototype;c.f=c.bh;c=OV.prototype;c.f=c.bh;c=OU.prototype;c.f=c.bh;c=X9.prototype;c.f=c.BL;c=X7.prototype;c.f=c.BL;c=Z5.prototype;c.f=c.bh;c=ACy.prototype;c.f=c.bh;c=OS.prototype;c.f=c.bh;c=ADH.prototype;c.f=c.bh;c=ADG.prototype;c.f=c.bh;c=AC8.prototype;c.f=c.bh;c=AC7.prototype;c.f=c.bh;c=Tg.prototype;c.handleEvent=c.cv;c=Vh.prototype;c.f=c.bh;c=Vi.prototype;c.f=c.bh;c=ACo.prototype;c.f=c.bh;c=ACq.prototype;c.f
=c.bh;c=ACs.prototype;c.f=c.bh;c=Tq.prototype;c.f=c.bh;c=YP.prototype;c.onTimer=c.Is;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);