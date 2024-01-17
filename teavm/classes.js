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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hh=f;}
function $rt_cls(cls){return AFz(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FD(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b9.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ATT(t);}
function $rt_throwableCause(t){return AT1(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A0A());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A0B(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A0C());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BH=$rt_compare;var A0D=$rt_nullCheck;var F=$rt_cls;var R=$rt_createArray;var Jl=$rt_isInstance;var A0E=$rt_nativeThread;var A0F=$rt_suspending;var A0G=$rt_resuming;var A0H=$rt_invalidPointer;var C=$rt_s;var Bs=$rt_eraseClinit;var W=$rt_imul;var EE=$rt_wrapException;var A0I=$rt_checkBounds;var A0J=$rt_checkUpperBound;var A0K=$rt_checkLowerBound;var A0L=$rt_wrapFunction0;var A0M=$rt_wrapFunction1;var A0N=$rt_wrapFunction2;var A0O=$rt_wrapFunction3;var A0P=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AEm=$rt_createCharArrayFromData;var AZf=$rt_createByteArrayFromData;var A0v=$rt_createShortArrayFromData;var DB=$rt_createIntArrayFromData;var A0Q=$rt_createBooleanArrayFromData;var A0R=$rt_createFloatArrayFromData;var A0S=$rt_createDoubleArrayFromData;var ACS=$rt_createLongArrayFromData;var A0y=$rt_createBooleanArray;var DD=$rt_createByteArray;var A0T=$rt_createShortArray;var B1=$rt_createCharArray;var BD=$rt_createIntArray;var A0U=$rt_createLongArray;var AIH=$rt_createFloatArray;var A0V
=$rt_createDoubleArray;var BH=$rt_compare;var A0W=$rt_castToClass;var A0X=$rt_castToInterface;var A0Y=Long_toNumber;var Bo=Long_fromInt;var A0Z=Long_fromNumber;var D=Long_create;var Fq=Long_ZERO;var A00=Long_hi;var GK=Long_lo;
function B(){this.$id$=0;}
function BJ(a){return AFz(a.constructor);}
function AQo(a,b){return a!==b?0:1;}
function AKK(a){var b,c,d,e,f,g,h,i,j;b=JT(a);if(!b)c=C(0);else{d=(((32-Pr(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HQ((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FD(e);}j=new L;N(j);H(H(j,C(1)),c);return M(j);}
function JT(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APC(a){var b,c,d;if(!Jl(a,Em)&&a.constructor.$meta.item===null){b=new X4;Z(b);K(b);}b=AIP(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function TY(){var a=this;B.call(a);a.yx=0;a.oK=null;}
function AZv(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AGM();AB6();AEY();AF4();AId();ADG();AE9();AGO();ABX();AD5();AHm();AB3();AFL();AFN();AEF();ADM();AD9();AHa();AC5();AD_();AF$();AFV();AFf();ACv();AH0();c=(ACi()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Q$(C(2),C(3));else{d=new TY;BO(d);e=new We;e.vS=d;f=new OE;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new Pw;j.r8=i;j.r9=g;j.r$=3;j.r_=e;j.r2=f;k
=Bl(j,"f");i.onmessage=k;h=h+1|0;}l=I(MK,[E4(C(4),C(5),300),E4(C(6),C(7),300),E4(C(8),C(5),400),E4(C(9),C(7),400),E4(C(10),C(5),600),E4(C(11),C(7),600),E4(C(12),C(5),700),E4(C(13),C(7),700)]);m=R(MK,1);m.data[0]=AUZ(C(14),FO(C(15),C(16)),C(5),400);b=(MG(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.vh;f=c.t4;i=new L;N(i);BL(H(H(i,C(17)),f),41);i=M(i);f=c.tY;o=c.rL;c=ANg($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);BO(d);c
=new Wf;c.xg=d;g=new Wd;e.then(Bl(c,"f"),Bl(g,"f"));}}
function AGb(b){var c,d,e,f,g,h,i,j;c=new U_;d=new X3;d.rE=c;c.uM=d;d=new X0;d.yO=c;c.ol=d;e=new X1;e.uG=c;c.xs=new $rt_globals.ResizeObserver(Bl(e,"f"));d=new XZ;d.qW=c;c.pp=d;c.jC=1;d=new UL;d.k3=new W2;e=new Q8;e.BS=null;e.kR=A01;d.sw=e;BO(e);f=new UR;f.u5=e;d.yy=f;d.nS=b;g=b.length;h=0;while(h<g){e=b[h];i=new US;i.tU=d;i.tT=h;f=Bl(i,"f");e.onmessage=f;e=b[h];f=AEE();e.postMessage(f);h=h+1|0;}d.hL=0;d.mr=BD(g);d.l0=BD(g);c.n6=d;c.pf=(Ej()).getElementById("canvasDiv");d=ACi();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.dX=d;c.pf.appendChild(d);b=c.dX;d=AR$(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Q$(C(2),C(18));else{c.nl=AY3(c.dX,c.ol);b=new XS;j=c.ol;AGL(b,e,new WP,1,2.25,0.625);b.BP=new WO;b.A8=j;c.gO=b;ATl(c.xs,c.dX,AIX());d=$rt_globals.window;j=c.pp;d.addEventListener("resize",Bl(j,"handleEvent"));j=new NK;b=c.gO;d=c.nl.ct;j.G=b;j.l=d;j.cb=c;d=$rt_str($rt_globals.window.location.hash);if(!Bp(C(19),d))b=Bp(C(20),d)?AYU(j):(AVr(J(d)<=
0?C(21):Ee(d,1))).bw(j);else{b=new OD;DS(b,j);d=$rt_globals.fetch("test.wasm");j=new OO;e=d.then(Bl(j,"f"));d=new ON;i=e.then(Bl(d,"f"));e=new OL;f=new OK;i.then(Bl(e,"f"),Bl(f,"f"));}c.fX=b;VJ(c);}AGi(c);}
var Oy=G(0);
var NP=G(0);
function Y6(){var a=this;B.call(a);a.lW=null;a.gz=null;}
function AFz(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Y6;c.gz=b;d=c;b.classObject=d;}return c;}
function IO(a){if(a.lW===null)a.lW=$rt_str(a.gz.$meta.name);return a.lW;}
function Ix(a){return a.gz.$meta.primitive?1:0;}
function IR(a){return AFz(a.gz.$meta.item);}
var ADa=G();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fj(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ACN=G();
function AIP(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AFC(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AFC(d[e],c))return 1;e=e+1|0;}return 0;}
function G2(){var a=this;B.call(a);a.ik=null;a.mE=null;a.kl=0;a.kW=0;}
function A02(){var a=new G2();Z(a);return a;}
function A03(a){var b=new G2();Bm(b,a);return b;}
function Z(a){a.kl=1;a.kW=1;}
function Bm(a,b){a.kl=1;a.kW=1;a.ik=b;}
function AMS(a){return a;}
function ATT(a){return a.ik;}
function AT1(a){var b;b=a.mE;if(b===a)b=null;return b;}
var El=G(G2);
function A04(){var a=new El();AF0(a);return a;}
function AF0(a){Z(a);}
var Bu=G(El);
function A0B(a){var b=new Bu();AWd(b,a);return b;}
function AWd(a,b){Bm(a,b);}
var AEI=G(Bu);
var CR=G(0);
var CG=G(0);
var Jy=G(0);
function BC(){var a=this;B.call(a);a.b9=null;a.iV=0;}
var A05=null;var A06=null;var A07=null;function Fe(){Fe=Bs(BC);AVH();}
function ANR(){var a=new BC();ABU(a);return a;}
function FD(a){var b=new BC();H0(b,a);return b;}
function Ev(a,b,c){var d=new BC();Ny(d,a,b,c);return d;}
function ABU(a){Fe();a.b9=A05;}
function H0(a,b){Fe();Ny(a,b,0,b.data.length);}
function Ny(a,b,c,d){var e;Fe();e=B1(d);a.b9=e;DA(b,c,e,0,d);}
function Nq(b){var c;Fe();c=ANR();c.b9=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b9.data;if(b<c.length)return c[b];}d=new HM;Z(d);K(d);}
function J(a){return a.b9.data.length;}
function Fc(a){return a.b9.data.length?0:1;}
function R4(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DA(a.b9,b,d,e,c);return;}}g=new BG;Z(g);K(g);}
function WI(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lu(a,b){if(a===b)return 1;return WI(a,b,0);}
function Eb(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function I0(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.b9.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=IQ(b);h=Jq(b);while(true){f=a.b9.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function H3(a,b,c){var d,e,f,g,h;d=Bc(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b9.data[d]==e)break;d=d+(-1)|0;}return d;}f=IQ(b);g=Jq(b);while(true){if(d<1)return (-1);h=a.b9.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RN(a,b,c){var d,e,f;d=Be(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AR8(a,b){return RN(a,b,0);}
function R0(a,b,c){var d,e;d=Bc(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AEf(a,b){return R0(a,b,J(a));}
function Cp(a,b,c){var d,e;d=BH(b,c);if(d>0){e=new BG;Z(e);K(e);}if(!d){Fe();return A06;}if(!b&&c==J(a))return a;return Ev(a.b9,b,c-b|0);}
function Ee(a,b){return Cp(a,b,J(a));}
function Sf(a,b,c){return Cp(a,b,c);}
function FO(a,b){var c,d,e,f,g,h;if(Fc(b))return a;if(Fc(a))return b;c=B1(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Nq(c);}
function XA(a,b,c){var d,e,f,g;d=new L;N(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BL(d,P(a,f));}f=f+1|0;}H(d,Ee(a,f));return M(d);}
function Ud(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cp(a,b,c+1|0);}
function AKI(a){return a;}
function FV(a){var b,c,d,e,f;b=a.b9.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CC(b){Fe();return b===null?C(22):b.cM();}
function C_(b){var c;Fe();c=new L;N(c);return M(U(c,b));}
function Bp(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function I1(a){var b,c,d,e;a:{if(!a.iV){b=a.b9.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.iV=(31*a.iV|0)+e|0;d=d+1|0;}}}return a.iV;}
function M6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new G$;Bm(b,C(23));K(b);}A08=1;d=new Tq;d.lE=R(CU,10);d.gU=(-1);d.fc=(-1);d.bA=(-1);e=new He;e.e$=1;e.bQ=b;e.bh=B1(J(b)+2|0);DA(FV(b),0,e.bh,0,J(b));f=e.bh.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.uB=g;e.gG=0;FE(e);FE(e);d.h=e;d.dI=0;d.mR=AAR(d,(-1),0,null);if(!Do(d.h)){b=new Jt;h=d.h;Kc(b,C(21),h.bQ,h.dm);K(b);}if(d.p2)d.mR.eI();b=BI();h=new UY;h.jA=(-1);h.l5=(-1);h.z4=d;h.xm=d.mR;h.jU=a;h.jA=0;g=J(a);h.l5=g;e=new XC;i=h.jA;j=d.gU;k=d.fc+1|0;l=d.bA
+1|0;e.iu=(-1);m=j+1|0;e.ra=m;e.dW=BD(m*2|0);f=BD(l);e.kH=f;H8(f,(-1));if(k>0)e.mF=BD(k);H8(e.dW,(-1));AAC(e,a,i,g);h.cF=e;e.fQ=1;n=0;m=0;if(!J(a)){f=R(BC,1);f.data[0]=C(21);}else{while(true){l=J(h.jU);if(!AB_(h))l=h.l5;e=h.cF;if(e.eC>=0&&ADY(e)==1){e=h.cF;e.eC=JQ(e);if(JQ(h.cF)==AF3(h.cF)){e=h.cF;e.eC=e.eC+1|0;}g=h.cF.eC;g=g<=l&&N0(h,g)?1:0;}else g=N0(h,h.jA);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BF(b,Sf(a,m,AHM(h)));m=ADK(h);n=g;}a:{BF(b,Sf(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bt(b,
g)))break a;EN(b,g);}}if(g<0)g=0;f=Iq(b,R(BC,g));}return f;}
function AM9(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bc(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AVH(){A05=B1(0);A06=ANR();A07=new Vt;}
var Fa=G(G2);
var HR=G(Fa);
var AEe=G(HR);
var Ea=G();
function GL(){Ea.call(this);this.bt=0;}
var A09=null;var A0$=null;function AVl(a){var b=new GL();ADv(b,a);return b;}
function ADv(a,b){a.bt=b;}
function Mh(b){return (O2(A0l(20),b,10)).cM();}
function Ks(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dm;Bm(b,C(24));K(b);}d=J(b);if(0==d){b=new Dm;Bm(b,C(25));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dm;Z(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=Q3(P(b,f));if(i<0){j=new Dm;k=Cp(b,0,d);b=new L;N(b);H(H(b,C(26)),k);Bm(j,M(b));K(j);}if(i>=c){j=new Dm;l=Cp(b,0,d);b=new L;N(b);H(H(U(H(b,C(27)),c),C(28)),l);Bm(j,M(b));K(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dm;k=Cp(b,0,d);b=new L;N(b);H(H(b,C(29)),k);Bm(j,M(b));K(j);}b=new Dm;j=new L;N(j);U(H(j,C(30)),c);Bm(b,M(j));K(b);}
function CQ(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A0$===null){A0$=R(GL,256);c=0;while(true){d=A0$.data;if(c>=d.length)break a;d[c]=AVl(c-128|0);c=c+1|0;}}}return A0$.data[b+128|0];}return AVl(b);}
function AW2(a,b){if(a===b)return 1;return b instanceof GL&&b.bt==a.bt?1:0;}
function Pr(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I3(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function APv(a,b){b=b;return BH(a.bt,b.bt);}
function AGM(){A09=F($rt_intcls());}
function GQ(){var a=this;B.call(a);a.B=null;a.K=0;}
function A0_(){var a=new GQ();N(a);return a;}
function A0l(a){var b=new GQ();Gy(b,a);return b;}
function N(a){Gy(a,16);}
function Gy(a,b){a.B=B1(b);}
function O2(a,b,c){return AEv(a,a.K,b,c);}
function AEv(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cl(a,b,b+1|0);else{Cl(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=HQ(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cl(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=HQ($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AFq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BH(c,0.0);if(!d){if(1.0/c===Infinity){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cl(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cl(a,b,b+8|0);d=b;}else{Cl(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A1a;AFg(c,f);d=f.ma;g=f.lP;h=f.qf;i=1;j=1;if(h)j=2;k=9;l=AU6(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cl(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ADq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BH(c,0.0);if(!d){if(1.0/c===Infinity){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cl(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cl(a,b,b+8|0);d=b;}else{Cl(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A1b;AEz(c,f);g=f.mT;h=f.ls;i=f.pV;j=1;k=1;if(i)k=2;l=18;m=ASy(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cl(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AMn(p,Fq))d=0;else{d=GK(AGe(g,p));g=AIT(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGe(p,Bo(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AU6(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ASy(b){var c,d,e,f,g;c=Bo(1);d=0;e=16;f=A1c.data;g=f.length-1|0;while(g>=0){if(Il(AIT(b,Cd(c,f[g])),Fq)){d=d|e;c=Cd(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BL(a,b){return a.nW(a.K,b);}
function AAr(a,b,c){Cl(a,b,b+1|0);a.B.data[b]=c;return a;}
function Ky(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.B=Ko(a.B,d);}
function M(a){return Ev(a.B,0,a.K);}
function Z$(a,b,c,d){return a.nk(a.K,b,c,d);}
function Oq(a,b,c,d,e){var f,g,h,i;Cl(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function I6(a,b){return a.mi(b,0,b.data.length);}
function Cl(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.iL((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var IC=G(0);
var L=G(GQ);
function MQ(){var a=new L();AWK(a);return a;}
function AWK(a){N(a);}
function H(a,b){var c;c=a.K;if(b===null)b=C(22);Nu(a,c,b);return a;}
function B0(a,b){Nu(a,a.K,b);return a;}
function U(a,b){O2(a,b,10);return a;}
function GR(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(AYJ(b,Fq)){d=0;b=AZr(b);}a:{if(Du(b,Bo(10))<0){if(d)Cl(a,c,c+1|0);else{Cl(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=HQ(GK(b),10);}else{g=1;h=Bo(1);i=Dg(Bo(-1),Bo(10));b:{while(true){j=Cd(h,Bo(10));if(Du(j,b)>0){j=h;break b;}g=g+1|0;if(Du(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cl(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(Il(j,Fq))break a;e=a.B.data;c=f+1|0;e[f]=HQ(GK((Dg(b,j))),10);b=AB$(b,j);j=Dg(j,Bo(10));f=c;}}}return a;}
function E8(a,b){AFq(a,a.K,b);return a;}
function ABM(a,b){BL(a,b);return a;}
function H6(a,b){Nu(a,a.K,!b?C(31):C(32));return a;}
function AHr(a,b,c){var d,e,f,g,h,i;d=BH(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HM;Z(i);K(i);}
function YR(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HM;Z(f);K(f);}
function APo(a,b,c,d,e){Oq(a,b,c,d,e);return a;}
function AL6(a,b,c,d){Z$(a,b,c,d);return a;}
function ACw(a){return a.K;}
function D9(a){return M(a);}
function APy(a,b){Ky(a,b);}
function AP7(a,b,c){AAr(a,b,c);return a;}
function Nu(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(22);else if(Fc(c))break a;Ky(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HM;Z(c);K(c);}
var EP=G(HR);
var AFF=G(EP);
function A1d(a){var b=new AFF();AKU(b,a);return b;}
function AKU(a,b){Bm(a,b);}
var AD3=G(EP);
function A1e(a){var b=new AD3();ALb(b,a);return b;}
function ALb(a,b){Bm(a,b);}
var V0=G(0);
var Dx=G(0);
function CM(b,c){if(b!==null)b.ej();return c;}
var QX=G(0);
function Jj(){var a=this;B.call(a);a.lq=0;a.nz=0;a.mA=0;}
var A1f=0;function EU(a){A1f=A1f-1|0;}
function GB(a,b,c){J6(a,ADl(b,c,400,0));}
function Tl(a,b){return LF(a,b,0.875);}
function LF(a,b,c){return D0(a,b)+c|0;}
function TS(){var a=this;Jj.call(a);a.iS=null;a.c0=null;a.oZ=null;}
function EX(a){var b,c,d;b=a.c0;c=a.nz;d=a.mA;b.clearRect(0.0,0.0,c,d);}
function Ur(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c0;d="center";c.textAlign=d;break a;case 2:c=a.c0;d="right";c.textAlign=d;break a;default:break a;}d=a.c0;c="left";d.textAlign=c;}}
function Cv(a,b){J6(a,b.pA);}
function J6(a,b){var c;if(a.oZ!==b){c=a.c0;a.oZ=b;c.font=b;}}
function ADl(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BQ(a,b,c,d){var e,f,g;e=a.c0;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function D0(a,b){var c;c=$rt_ustr(b);return a.c0.measureText(c).width;}
function Ja(a,b,c,d){var e,f;e=a.c0;f=$rt_ustr(FD(AEm([35,Ha(b/16|0),Ha(b%16|0),Ha(c/16|0),Ha(c%16|0),Ha(d/16|0),Ha(d%16|0)])));e.fillStyle=f;}
function AJ9(){return {alpha:false};}
var AB7=G();
var AG0=G();
function BW(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function BO(b){if(b!==null)return b;b=new G$;Bm(b,C(21));K(b);}
var BM=G(0);
function K7(b){return b;}
var BY=G(0);
function We(){B.call(this);this.vS=null;}
function AXk(a,b){var c;c=a.vS;c.oK=b;if(c.yx)AGb(b);}
var AFK=G();
function It(b,c){return b.data[c];}
var AEV=G();
var ACb=G(0);
function E4(b,c,d){return AUZ(C(33),FO(C(15),b),c,d);}
var AGA=G(0);
var AGx=G(0);
function MG(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dp(b,f+g|0);DA(c,0,d,f,g);return d;}
function LU(b,c,d){DA(b,c,d,0,d.data.length);return d;}
function TC(b,c,d){var e;if(c>0)DA(b,0,d,0,c);e=d.data.length;if(c<e)DA(b,c+1|0,d,c,e-c|0);return d;}
function AD$(b,c,d,e){var f;if(c>0)DA(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DA(b,d,e,c,f-d|0);}return e;}
function EV(b){var c;c=new Yz;c.j5=b;return c;}
function ADf(b,c){if(b.data.length!=c)b=Dp(b,c);return b;}
function AGw(b,c,d){var e;e=c.data.length;if(e==d)c=Dp(c,e*2|0);c.data[d]=b;return c;}
function Xs(b,c,d){var e;e=c.data.length;if(e==d)c=M5(c,e*2|0);c.data[d]=b;return c;}
function M4(b){return Ko(b,b.data.length);}
function MK(){var a=this;B.call(a);a.vh=null;a.t4=null;a.tY=null;a.rL=0;}
function AUZ(a,b,c,d){var e=new MK();ATE(e,a,b,c,d);return e;}
function ATE(a,b,c,d,e){a.vh=b;a.t4=c;a.tY=d;a.rL=e;}
var AC7=G();
function ANg(b,c){return {style:b,weight:c};}
function Wf(){B.call(this);this.xg=null;}
function AIj(a,b){var c,d,e;c=a.xg;d=0;while(d<b.length){e=b[d];(Ej()).fonts.add(e);d=d+1|0;}c.yx=1;b=c.oK;if(b!==null)AGb(b);}
var Wd=G();
function AVP(a,b){$rt_globals.console.info("font load error "+b);}
var Mf=G();
var A1g=null;var A1h=null;function BA(){if(A1g===null)A1g=AQ4(A1i,0);return A1g;}
function DX(){if(A1h===null)A1h=AQ4(A1j,0);return A1h;}
function AZk(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mm(b)&&(e+f|0)<=Mm(d)){a:{b:{if(b!==d){g=IR(BJ(b));h=IR(BJ(d));if(g!==null&&h!==null){if(g===h)break b;if(!Ix(g)&&!Ix(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gz;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AFC(n.constructor,o)?1:0)){Lw(b,c,d,e,j);b=new Js;Z(b);K(b);}j=j+1|0;k=m;}Lw(b,c,d,e,f);return;}if(!Ix(g))break a;if(Ix(h))break b;else break a;}b=new Js;Z(b);K(b);}}Lw(b,c,
d,e,f);return;}b=new Js;Z(b);K(b);}b=new BG;Z(b);K(b);}d=new G$;Bm(d,C(34));K(d);}
function DA(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mm(b)&&(e+f|0)<=Mm(d)){Lw(b,c,d,e,f);return;}b=new BG;Z(b);K(b);}
function Lw(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EO(){return Long_fromNumber(new Date().getTime());}
function AF6(){return A0Z($rt_globals.performance.now()*1000000.0);}
var AGt=G();
var ADL=G();
function Q$(b,c){var d,e,f;d=(Ej()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ej()).getElementById($rt_ustr(b)).appendChild(d);}
function ACi(){return (Ej()).createElement("canvas");}
function AHA(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AR$(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AIc=G();
var OE=G();
function ARO(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));K(c);}
var AGQ=G();
function Fn(b){return $rt_str(b);}
var ACn=G();
function Ko(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function M5(b,c){var d,e,f,g;b=b.data;d=DD(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JI(b,c){var d,e,f,g;b=b.data;d=BD(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dp(b,c){var d,e,f,g;d=b.data;e=AF2(IR(BJ(b)),c);f=Bc(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ADj(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));H(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AFW(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));U(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AUd(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));E8(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AXQ(b){var c,d,e,f;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));f=e[d];ADq(c,c.K,f);d=d+1|0;}B0(c,C(37));return M(c);}
function H8(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BP;Z(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ACT(b,c,d,e){var f,g;if(c>d){e=new BP;Z(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ADI(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A01;e=R(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bc(j,h+f|0);l=h+(2*f|0)|0;m=Bc(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.yj(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AFr(b,c){return Wl(b,0,b.data.length,c);}
function Wl(b,c,d,e){var f,g,h,i,j;f=BH(c,d);if(f>0){g=new BP;Z(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Ye=G(0);
var AEJ=G();
function ANW(a,b){return a.Fa(b);}
function AQl(a){return a.KY();}
var AEu=G();
var HL=G(0);
var Vt=G();
var BG=G(Bu);
var AFl=G();
function Mm(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A1k());}return b.data.length;}
function AF2(b,c){if(b===null){b=new G$;Z(b);K(b);}if(b===F($rt_voidcls())){b=new BP;Z(b);K(b);}if(c>=0)return AWo(b.gz,c);b=new ABv;Z(b);K(b);}
function AWo(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var G$=G(Bu);
var Js=G(Bu);
function Dc(){B.call(this);this.lN=0;}
var A1l=null;var A1m=null;var A1n=null;var A1o=null;var A1p=null;var A1q=null;var A1r=null;var A1s=null;var A1t=null;var A1u=null;function AXh(a){var b=new Dc();ADT(b,a);return b;}
function ADT(a,b){a.lN=b;}
function Px(b){var c,d;c=A1q.data;if(b>=c.length)return AXh(b);d=c[b];if(d===null){d=AXh(b);A1q.data[b]=d;}return d;}
function ZT(b){var c,d;c=new BC;d=B1(1);d.data[0]=b;H0(c,d);return c;}
function Nb(b){return b>=65536&&b<=1114111?1:0;}
function CK(b){return (b&64512)!=55296?0:1;}
function C$(b){return (b&64512)!=56320?0:1;}
function Nf(b){return !CK(b)&&!C$(b)?0:1;}
function HZ(b,c){return CK(b)&&C$(c)?1:0;}
function ES(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IQ(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jq(b){return (56320|b&1023)&65535;}
function Fu(b){return G9(b)&65535;}
function G9(b){if(A1o===null){if(A1r===null)A1r=AFU();A1o=AEb((A1r.value!==null?$rt_str(A1r.value):null));}return U4(A1o,b);}
function EY(b){return G6(b)&65535;}
function G6(b){if(A1n===null){if(A1s===null)A1s=AGN();A1n=AEb((A1s.value!==null?$rt_str(A1s.value):null));}return U4(A1n,b);}
function U4(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BH(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function W7(b,c){if(c>=2&&c<=36){b=Q3(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Q3(b){var c,d,e,f,g,h,i,j,k,l;if(A1m===null){if(A1t===null)A1t=AEh();c=(A1t.value!==null?$rt_str(A1t.value):null);d=AT2(FV(c));e=KG(d);f=BD(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Oz(d)|0;j=j+Oz(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A1m=f;}g=A1m.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BH(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HQ(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GZ(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return AEm([IQ(b),Jq(b)]);}
function Cy(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Nf(b&65535))return 19;if(A1p===null){if(A1u===null)A1u=AH7();d=(A1u.value!==null?$rt_str(A1u.value):null);e=R(OU,16384);f=e.data;g=DD(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Lv(P(d,l));if(m==64){l=l+1|0;m=Lv(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,Lv(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Lv(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AM4(k,k+i|0,M5(g,i));j=c;}k=k+(i+n|0)|0;i=0;}else
{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AM4(k,k+i|0,M5(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A1p=Dp(e,j);}e=A1p.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.um)o=p+1|0;else{c=d.r4;if(b>=c)return d.sn.data[b-c|0];c=p-1|0;}}return 0;}
function Kp(b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GT(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cy(b)!=16?0:1;}
function RB(b){switch(Cy(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Tt(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return RB(b);}return 1;}
function AB6(){A1l=F($rt_charcls());A1q=R(Dc,128);}
function AFU(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AGN(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AEh(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AH7(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var NJ=G(0);
var U3=G(0);
var EI=G(0);
var ACa=G();
function Ej(){return $rt_globals.window.document;}
function ARh(a){return a.IA();}
function AUS(a,b){return a.LC($rt_str(b));}
function AUz(a,b){a.GS($rt_str(b));}
function ALz(a,b){return a.Fx($rt_str(b));}
function AIO(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ALX(a){return a.LG();}
function AUK(a,b,c){return a.JK($rt_str(b),$rt_str(c));}
function AO6(a,b,c,d){a.AS($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
function AJW(a){return a.Hz();}
function ASC(a){return !!a.Mf();}
function AVG(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQP(a){return a.Hl();}
function AOy(a,b){a.Jx($rt_str(b));}
function ARj(a){return !!a.Gw();}
function AXS(a){return a.LT();}
function APU(a){return $rt_ustr(a.CS());}
function AJL(a,b){return a.HP(b?1:0);}
function AW4(a){return a.Me();}
function AOu(a,b,c){return a.MQ($rt_str(b),$rt_str(c));}
function AQD(a,b,c){return a.Gu(b,c?1:0);}
function AWt(a,b,c){return !!a.K0($rt_str(b),$rt_str(c));}
function AIR(a){return a.Jl();}
function AOc(a){return $rt_ustr(a.Nz());}
function AMa(a,b){return !!a.Bi(b);}
function ANi(a,b){return a.Oy($rt_str(b));}
function AOR(a,b,c){return a.Ix($rt_str(b),$rt_str(c));}
function APZ(a){return a.D1();}
function AJY(a,b){return a.LO($rt_str(b));}
function ANh(a){return $rt_ustr(a.Dc());}
function AS$(a){a.Gp();}
function AIv(a,b){return a.MV($rt_str(b));}
function AVu(a,b){return a.G5($rt_str(b));}
function AKy(a,b){return a.Go($rt_str(b));}
function AVx(a){return $rt_ustr(a.Eg());}
function AKL(a,b,c){return a.IF(b,c);}
function ASX(a,b){return a.CR(b);}
function ATM(a){return a.Ky();}
function AR2(a,b,c){a.Am($rt_str(b),Fj(c,"handleEvent"));}
function ARx(a,b,c){return a.Eh(b,c);}
function AVp(a){return !!a.KW();}
function AXe(a,b){return a.Ir($rt_str(b));}
function ARB(a,b,c,d){a.zF($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
function AL0(a){return a.KD();}
function AK$(a,b,c){return a.HN($rt_str(b),$rt_str(c));}
function AJq(a){return $rt_ustr(a.EI());}
function AWX(a){return a.DJ();}
function AR0(a){return a.D7();}
function AJn(a){return a.K1();}
function AR3(a,b,c){a.Bf($rt_str(b),Fj(c,"handleEvent"));}
function ALN(a,b){return a.Nj(b);}
function ANE(a,b){a.Di($rt_str(b));}
function ATX(a){return $rt_ustr(a.C1());}
function Pw(){var a=this;B.call(a);a.r8=null;a.r9=null;a.r$=0;a.r_=null;a.r2=null;}
function ASW(a,b){var c,d,e,f,g;c=a.r8;d=a.r9;e=a.r$;f=a.r_;g=a.r2;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AEq=G();
function ACc(b){return Math.log(b);}
function JN(b,c){return AQt(b,c);}
function AQt(b,c){return Math.pow(b,c);}
function DR(){return AXz();}
function AXz(){return Math.random();}
function Bc(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function AWv(b,c){return Math.max(b,c);}
function ACM(b,c){return AWv(b,c);}
function NW(b){if(b<0)b= -b|0;return b;}
function ANK(b){return Math.abs(b);}
var Rs=G(0);
var TN=G(0);
var Ty=G(0);
var VW=G(0);
var AAe=G(0);
var W9=G(0);
var AC8=G();
function AR7(a,b,c){a.Bf($rt_str(b),Fj(c,"handleEvent"));}
function APt(a,b,c){a.Am($rt_str(b),Fj(c,"handleEvent"));}
function AOe(a,b,c,d){a.zF($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
function AJ5(a,b){return !!a.Bi(b);}
function AMg(a,b,c,d){a.AS($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
var BP=G(Bu);
var ABv=G(Bu);
var HM=G(BG);
var ADw=G();
function AEE(){return "ping";}
function AH4(b){return b===AEE()?1:0;}
var ST=G(0);
var QI=G(0);
function U_(){var a=this;B.call(a);a.uM=null;a.ol=null;a.pf=null;a.dX=null;a.xs=null;a.pp=null;a.nl=null;a.gO=null;a.jC=0;a.AJ=0;a.ug=null;a.fX=null;a.n6=null;}
function AGi(a){a.dX.focus();}
function O8(a,b){var c;c=Ej();b=$rt_ustr(b);c.title=b;}
function VJ(a){a.AJ=$rt_globals.requestAnimationFrame(Bl(a.uM,"onAnimationFrame"));}
function H5(a){a.jC=1;}
function VH(a,b,c){var d,e;a.nl.dT=B7(b,c);d=a.dX;e=b;d.width=e;d=a.dX;e=c;d.height=e;d=a.gO;V(d.c6,b,c);e=d.Y;d=d.c6;b=d.a;c=d.b;e.viewport(0,0,b,c);a.fX.bR(a.gO.c6,Lx(a));a.fX.br();}
function TQ(a,b){var c,d,e;c=a.ug;d=a.dX;if(BW(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.ug=b;}
function Km(a){return $rt_globals.performance.now()/1000.0;}
function Lx(a){return $rt_globals.window.devicePixelRatio;}
function YA(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AHH(b,1);else{c=new Zt;d=$rt_globals.window.showDirectoryPicker();e=new Zs;e.sd=b;e.se=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function MV(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AHH(b,0);else{c=new AAq;d=$rt_globals.window.showOpenFilePicker();e=new AAp;e.sV=b;e.sU=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h;e=a.n6;f=e.hL;if(f>0){g=e.mr.data;f=f-1|0;e.hL=f;Mg(e,b,c,d,g[f]);}else{h=e.k3;e=new Zu;e.vV=b;e.wN=c;e.vs=d;b=new WH;b.qv=e;c=h.k2;b.wy=c;if(c===null)h.mh=b;else c.vw=b;h.k2=b;h.b2=h.b2+1|0;h.i2=h.i2+1|0;}}
function Jr(a,b,c,d,e){var f,g;f=a.n6;if(c>=f.nS.length)c=0;g=f.l0.data;g[c]=g[c]+1|0;Mg(f,b,d,e,c);}
function Tn(a,b,c){var d,e;if(!MB()){b=new Bu;Bm(b,C(38));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Tb;e.pE=b;b=AH_(c);d.then(Bl(e,"f"),Bl(b,"f"));}}
function WK(a,b,c,d){var e,f,g;if(!MB()){b=new Bu;Bm(b,C(38));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=FV(b);AZU();b=A1v;g=f.data;g=b.decode(g);b=e.writeText(g);e=new W1;e.vu=c;c=AH_(d);b.then(Bl(e,"f"),Bl(c,"f"));}}
function AAA(a){return MB()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AH_(b){var c;c=new Z_;c.p_=b;return c;}
var BS=G(0);
var AER=G();
var Bg=G(0);
var AES=G();
var TD=G(0);
function X3(){B.call(this);this.rE=null;}
function AOt(a,b){var c,d;c=b;b=a.rE;if(!(!b.fX.cG(c/1000.0)&&!b.jC)){d=b.gO.c6;if(W(d.a,d.b)){b.jC=0;b.fX.br();}}VJ(b);}
function X0(){B.call(this);this.yO=null;}
function Dn(a){H5(a.yO);}
var Sz=G(0);
function X1(){B.call(this);this.uG=null;}
function AMp(a,b,c){var d,e,f,g;c=a.uG;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dX){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lx(c);VH(c,Gq(f.width*g),Gq(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];VH(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AG6=G();
function AIX(){return {box:'device-pixel-content-box'};}
function ATl(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cu=G(0);
function XZ(){B.call(this);this.qW=null;}
function AS7(a,b){b=a.qW;b.fX.bR(b.gO.c6,Lx(b));b.fX.br();}
function UL(){var a=this;B.call(a);a.k3=null;a.nS=null;a.sw=null;a.mr=null;a.l0=null;a.pP=0;a.hL=0;a.yy=null;}
function Mg(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.pP+1|0;a.pP=f;g=a.sw;h=CQ(f);g.iP=Nd(g,g.iP,h);h=Xd(g,h);NL(h,b);NL(h,b);g.kX=g.kX+1|0;b=a.nS[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BC)g=$rt_ustr(c);else if(Jl(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Jl(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Jl(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof LZ)){b=new BP;c
=IO(BJ(c));g=new L;N(g);H(H(g,C(39)),c);Bm(b,M(g));K(b);}c=c;g=c.hs;if(g===null)g=c.fM;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var YT=G(0);
function AIl(a,b){var c;c=a.cd();while(c.cy()){b.g(c.b5());}}
var GD=G(0);
function Xu(a){var b,c;b=new UH;c=new Sq;c.r1=a;b.wn=c;return b;}
function AO9(a,b){var c,d;c=a.cd();d=0;while(c.cy()){if(b.X(c.b5())){c.mv();d=1;}}return d;}
var Ff=G();
function Ey(a){return a.cU()?0:1;}
function Iq(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=AF2(IR(BJ(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B5(a);while(B6(f)){g=b.data;h=e+1|0;g[e]=B9(f);e=h;}return b;}
function AUj(a,b){var c;c=a.cd();while(c.cy()){if(BW(c.b5(),b)){c.mv();return 1;}}return 0;}
function Hf(a,b){var c,d;c=0;d=b.cd();while(d.cy()){if(!a.uZ(d.b5()))continue;c=1;}return c;}
var LA=G(0);
var J3=G(0);
function E0(){Ff.call(this);this.b2=0;}
function ATr(a,b){a.ok(a.cU(),b);return 1;}
function B5(a){var b;b=new Pc;b.hx=a;b.n5=a.b2;b.jM=a.cU();b.gQ=(-1);return b;}
function ASs(a,b,c){var d,e;if(b>=0&&b<=a.cU()){if(c.ec())return 0;d=c.cd();while(d.cy()){e=b+1|0;a.ok(b,d.b5());b=e;}return 1;}c=new BP;Z(c);K(c);}
function AVm(a,b,c){c=new Ec;Z(c);K(c);}
function Lc(a,b){var c,d;c=a.cU();d=0;while(true){if(d>=c)return (-1);if(BW(b,a.m9(d)))break;d=d+1|0;}return d;}
function AQ7(a,b){var c,d;if(!Jl(b,J3))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!BW(Bt(a,d),Bt(c,d)))return 0;d=d+1|0;}return 1;}
var M8=G(E0);
var NQ=G(0);
var AAD=G(0);
function W2(){var a=this;M8.call(a);a.mh=null;a.k2=null;a.i2=0;}
var LX=G(0);
function D$(){var a=this;B.call(a);a.lR=null;a.l3=null;}
var Em=G(0);
var AAz=G(0);
var Ow=G(0);
function Q8(){var a=this;D$.call(a);a.iP=null;a.kR=null;a.BS=null;a.kX=0;}
function AHg(a,b){var c;c=Xd(a,b);if(c===null)return null;a.iP=K2(a,a.iP,b);a.kX=a.kX+1|0;return c.jF;}
function Xd(a,b){var c,d;c=a.iP;while(true){if(c===null)return null;d=Kr(a.kR,b,c.j_);if(!d)break;c=d>=0?c.b$:c.bT;}return c;}
function Nd(a,b,c){var d,e;if(b===null){b=new Kl;d=null;b.j_=c;b.jF=d;b.f4=1;b.gh=1;return b;}e=Kr(a.kR,c,b.j_);if(!e)return b;if(e>=0)b.b$=Nd(a,b.b$,c);else b.bT=Nd(a,b.bT,c);EJ(b);return KF(b);}
function K2(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Kr(a.kR,c,b.j_);if(d<0)b.bT=K2(a,b.bT,c);else if(d>0)b.b$=K2(a,b.b$,c);else{e=b.b$;if(e===null)return b.bT;f=b.bT;g=R(Kl,e.f4).data;h=0;while(true){b=e.bT;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b$;while(h>0){h=h+(-1)|0;j=g[h];j.bT=b;EJ(j);b=KF(j);}e.b$=b;e.bT=f;EJ(e);b=e;}EJ(b);return KF(b);}
function UR(){B.call(this);this.u5=null;}
function US(){var a=this;B.call(a);a.tU=null;a.tT=0;}
function AIQ(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.tU;d=a.tT;AH4(b.data);e=c.l0.data;f=e[d];if(f>0)e[d]=f-1|0;else{g=c.k3;h=g.mh;if(h===null)i=null;else{i=h.vw;g.mh=i;if(i!==null)i.wy=null;else g.k2=null;g.i2=g.i2-1|0;g.b2=g.b2+1|0;i=h.qv;}if(i!==null)Mg(c,i.vV,i.wN,i.vs,d);else{e=c.mr.data;j=c.hL;c.hL=j+1|0;e[j]=d;}}c=c.yy;b=b.data;if(!AH4(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BP;Z(b);K(b);}if(b.length<1){b=new BP;AF0(b);K(b);}g=CQ(b[0]);h=AHg(c.u5,g);e=R(B,b.length-1|0);k=e.data;f=0;j=k.length;while
(f<j){l=f+1|0;g=b[l];k[f]=(typeof g==='string'?1:0)?Fn(K7(g)):(g instanceof $rt_globals.ArrayBuffer?1:0)?AYT(K7(g)):(g instanceof $rt_globals.File?1:0)?AFu(null,K7(g)):!(g instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AFu(K7(g),null);f=l;}h.g(e);}}
function ADo(){var a=this;B.call(a);a.ct=null;a.hW=null;a.A5=null;a.dT=null;}
function AY3(a,b){var c=new ADo();AVh(c,a,b);return c;}
function AVh(a,b,c){var d,e,f,g;a.dT=null;a.hW=b;d=new RZ;d.bZ=CP(R(Cr,0));d.oo=CP(R(Cr,0));d.bm=CP(R(Cq,0));d.dC=CP(R(DO,0));d.eo=CP(R(Er,0));d.f8=CP(R(Fb,0));d.gJ=CP(R(FJ,0));d.kL=CP(R(Bg,0));d.lK=CP(R(Bg,0));d.dg=c;a.ct=d;e=$rt_globals.window;f=R(Dx,14);g=f.data;d=new Y_;d.pW=a;g[0]=CY(a,b,C(40),d);d=new Za;d.vp=a;g[1]=CY(a,b,C(41),d);d=new Zb;d.rq=a;g[2]=CY(a,b,C(42),d);d=new Zc;d.yH=a;g[3]=CY(a,b,C(43),d);d=new Zd;d.uy=a;g[4]=CY(a,b,C(44),d);d=new Ze;d.qr=a;g[5]=CY(a,b,C(45),d);d=new Zf;d.y2=a;g[6]=CY(a,
b,C(46),d);d=new Zg;d.uI=a;g[7]=CY(a,b,C(47),d);d=new Zh;d.qG=a;g[8]=CY(a,b,C(48),d);d=new Zi;d.xN=a;g[9]=CY(a,b,C(49),d);d=new AA8;d.w9=a;g[10]=CY(a,b,C(50),d);d=new AA9;d.vL=a;e.addEventListener("paste",Bl(d,"handleEvent"),!!1);g[11]=ZK(a,e,C(51),d);d=new AA$;d.oU=a;g[12]=CY(a,e,C(52),d);d=new AA_;d.yb=a;g[13]=CY(a,e,C(53),d);c=new SH;c.Ag=f;a.A5=c;e=new AAx;e.sz=b;b.onpointerdown=Bl(e,"f");e=new AAy;e.q2=b;b.onpointerup=Bl(e,"f");}
function Os(){return (Ej()).activeElement;}
function CY(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return ZK(a,b,c,d);}
function ZK(a,b,c,d){var e;e=new Sv;e.zR=b;e.zU=c;e.zT=d;return e;}
function Wg(a,b){var c;c=new Xf;c.yG=b;return c;}
function E3(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hW.getBoundingClientRect();e=B7(Gq((b.clientX-d.left)*c),Gq((b.clientY-d.top)*c));f=new Bd;g=a.dT;f.a=g.a;f.b=g.b;d=new NH;WM(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.zq=f;return d;}
function ABf(a,b,c){var d,e,f,g;d=new Q2;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;WM(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.ln=0;d.d4=e;d.bo=f;d.io=c;d.uP=g;return d;}
function DY(a,b){b.stopPropagation();b.preventDefault();}
function L$(){var a=this;B.call(a);a.mP=null;a.ci=null;a.Y=null;a.kb=0;a.ww=null;a.Al=0;a.Bx=0;a.kZ=null;a.kD=null;a.BO=null;a.BD=null;a.wr=null;a.pY=null;a.im=null;a.hp=null;a.iG=null;a.BY=null;a.rM=null;a.c6=null;a.yk=null;a.ne=0;a.lf=0;a.nY=0;a.nG=0;a.jp=0;a.nT=null;a.n9=0.0;a.no=0.0;}
function AGL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c6=new Bd;a.ne=0;a.nT=new Zm;a.mP=c;a.kb=d;g=$rt_str(b.getParameter(7938));h=new L;N(h);H(H(h,C(54)),g);$rt_globals.console.info($rt_ustr(M(h)));a.Y=b;a.ci=Kj(c,4,4,1);i=AIH(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B1(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Sw;H$();c=A1w;m.eL=b;m.g9=c;m.uX=j.length/c.me|0;m.ye
=l.length;n=b.createBuffer();m.pj=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.yJ=null;n=b.createBuffer();m.xW=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.rM=m;a.Bx=Lu(g,C(55));c=new Sx;c.dL=b;a.ww=c;a.n9=e;a.no=f;d=b.getParameter(3379);a.Al=d;c=new L;N(c);U(H(c,C(56)),d);$rt_globals.console.info($rt_ustr(M(c)));k=R(C2,9);i=k.data;c=AY0(b);a.kZ=c;i[0]=c;c=AYr(b,C(57));a.kD=c;i[1]=c;c=new Tf;Hu(c,b,C(58),
C(59),A1w);a.BO=c;i[2]=c;c=AZZ(b);a.BD=c;i[3]=c;c=new PV;AAO(c,b,C(60),C(61));a.wr=c;i[4]=c;c=A0f(b);a.pY=c;i[5]=c;c=AZ9(b);a.im=c;i[6]=c;c=AZS(b);a.hp=c;i[7]=c;c=AZT(b);a.iG=c;i[8]=c;a.BY=k;AAg(b,C(62));}
function Gt(a,b,c){return Hp(a,b,c,400,0);}
function GO(a,b,c){return Kj(a.mP,b,c,0);}
function Eh(a,b,c,d){return Kj(a.mP,b,c,d);}
function EG(a,b){var c,d,e,f,g;c=a.Y;d=b.bl;e=b.bq;f=b.bf;g=b.bF;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B4(a,b){var c;if(b==a.lf)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.lf;a.lf=b;return c;}
function T2(a,b,c){Mt(a,b.a,b.b,c);}
function Mt(a,b,c,d){var e,f;e=d.a;f=d.b;a.nG=1;a.jp=1;d=a.nT;d.up=b;d.ur=c;d.uo=e;d.un=f;WN(a);}
function Hv(a){a.nG=0;a.jp=0;WN(a);}
function WN(a){var b,c,d,e,f,g;b=a.nY;c=a.nG;if(b!=c){a.nY=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.nY&&a.jp){a.jp=0;d=a.Y;e=a.nT;b=e.up;c=a.c6.b-e.ur|0;f=e.un;c=c-f|0;g=e.uo;d.scissor(b,c,g,f);}}
function FY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.rM;c=a.ne;d=b.g9.vG;e=b.eL;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eL;h=b.pj;e.bindBuffer(34962,h);i=b.g9.os.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eL;m=k.h6;n=k.fK;o=b.g9.me*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fK|0;j=j+1|0;}a:{e=b.yJ;if(e!==null){c=0;b.eL.bindBuffer(34962,e);i=b.g9.ub.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eL;j=e.h6;p=e.fK;m=e.rY;n=b.g9.sr;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fK|0;g=g+1|0;}}}q=b.xW;if(q===null){c=b.uX;if(c>0)b.eL.drawArrays(4,0,c);}else{b.eL.bindBuffer(34963,q);k=b.eL;g=b.ye;k.drawElements(4,g,5123,0);}a.ne=d;}
function Bx(a,b,c,d,e){F0(a,a.kZ);Gn(a.kZ,a.Y,b,c,d,a.c6);d=a.kZ;Fg(a.Y,d.xG,e);FY(a);}
function ABy(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;F0(a,a.hp);Gn(a.hp,a.Y,b,c,d,a.c6);j=a.hp;d=a.Y;k=j.ov;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.ou;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.hp;Fg(a.Y,d.qq,i);FY(a);}
function MW(a,b,c,d,e,f,g,h){var i,j;F0(a,a.iG);Gn(a.iG,a.Y,b,c,d,a.c6);d=a.iG;i=a.Y;j=d.uU;i.uniform2f(j,e,f);Fg(i,d.rJ,g);d=a.iG;Fg(a.Y,d.po,h);FY(a);}
function DW(a,b,c,d,e,f,g,h,i){var j;j=!i?a.wr:a.pY;F0(a,j);AHn(j,a.Y,!i?a.no:a.n9);Gn(j,a.Y,b,c,d,a.c6);Mj(j,a.Y,f);ABO(j,a.Y,f,e);AFn(j,a.Y,g,h);FY(a);}
function C0(a){var b,c;b=new Kk;c=a.ww;b.f7=new Bd;b.es=c;b.fz=c.dL.createTexture();A1x=A1x+1|0;return b;}
function Kv(a,b){AAg(a.Y,b);}
function F0(a,b){var c,d;if(b!==a.yk){c=a.Y;d=b.bI;c.useProgram(d);a.yk=b;}}
function XS(){var a=this;L$.call(a);a.A8=null;a.BP=null;}
function Hp(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ci;g=ADl(b,c,d,e);J6(f,g);h=f.c0.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=D0(f,C(63));m=D0(f,C(64));h=new L0;n=g;h.n8=b;h.z1=c;o=c|0;if(o!==c){b=new L;N(b);E8(H(b,C(65)),c);$rt_globals.console.info($rt_ustr(M(b)));}h.rQ=o;h.z_=d;h.AD=e;h.c9=i;h.eg=j;h.z0=l;h.nO=k;h.pA=n;h.t8=C6(i);h.BG=C6(h.eg);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.z7=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b
=C(66);}h.zQ=b;return h;}
function Cj(){B.call(this);this.C=null;}
function DS(a,b){a.C=b;}
function AWZ(a,b){return 0;}
function RZ(){var a=this;B.call(a);a.bZ=null;a.oo=null;a.bm=null;a.dC=null;a.eo=null;a.f8=null;a.gJ=null;a.kL=null;a.lK=null;a.dg=null;a.il=null;a.qS=0;}
function Wo(a,b){var c,d,e,f;Dn(a.dg);c=(Cx(!b.io?a.oo:a.bZ)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].X(b);if(f)break;if(b.ln)break;e=e+1|0;}return f;}
function Tg(a,b,c){var d,e,f;Dn(a.dg);d=(Cx(a.f8)).data;e=d.length;f=0;while(f<e){if(d[f].g_(b,c))return 1;f=f+1|0;}return 0;}
function Y_(){B.call(this);this.pW=null;}
function ASu(a,b){var c;c=a.pW;if(Wo(c.ct,ABf(c,b,1)))DY(c,b);}
function Za(){B.call(this);this.vp=null;}
function ASK(a,b){var c;c=a.vp;if(Wo(c.ct,ABf(c,b,0)))DY(c,b);}
function Zb(){B.call(this);this.rq=null;}
function AQK(a,b){var c,d,e,f,g,h,i;c=a.rq;if(c.dT!==null){a:{b:{d=E3(c,b);e=c.ct;Dn(e.dg);f=e.il;if(f!==null)f.g(d);else{g=(Cx(e.bm)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bN(d))break a;i=i+1|0;}}}}DY(c,b);}}
function Zc(){B.call(this);this.yH=null;}
function AP2(a,b){var c,d,e,f,g,h;c=a.yH;b.button;if(c.dT!==null)a:{d=E3(c,b);c=c.ct;e=b.button;Dn(c.dg);if(c.il===null){f=(Cx(c.bm)).data;g=f.length;h=0;while(h<g){b=f[h].ce(d,e);if(b!==null){c.il=b;c.qS=e;break a;}h=h+1|0;}}}}
function Zd(){B.call(this);this.uy=null;}
function AQv(a,b){var c,d,e,f,g,h,i;c=a.uy;b.button;if(c.dT!==null){d=E3(c,b);e=c.ct;f=b.button;Dn(e.dg);if(f==e.qS&&e.il!==null)e.il=null;g=(Cx(e.bm)).data;h=g.length;i=0;a:{while(i<h){if(g[i].c2(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DY(c,b);}}
function Ze(){B.call(this);this.qr=null;}
function ATf(a,b){var c,d,e,f,g,h,i,j,k;c=a.qr;if(c.dT!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=E3(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dn(e.dg);i=(Cx(e.dC)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dc(f,d,h))break b;k=k+1|0;}}DY(c,b);}}
function Zf(){B.call(this);this.y2=null;}
function AOd(a,b){var c,d,e,f,g,h,i,j;c=a.y2;if(c.dT!==null){d=E3(c,b);e=c.ct;f=b.button;g=b.detail;Dn(e.dg);h=(Cx(e.bm)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cq(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DY(c,b);}}
function Zg(){B.call(this);this.uI=null;}
function AXI(a,b){var c,d,e,f,g,h,i;c=a.uI;if(c.dT!==null){d=E3(c,b);e=c.ct;Dn(e.dg);f=(Cx(e.eo)).data;g=f.length;h=0;a:{while(h<g){if(f[h].X(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DY(c,b);}}
function Zh(){B.call(this);this.qG=null;}
function ANf(a,b){var c,d,e;b=a.qG.ct;c=(Cx(b.lK)).data;d=c.length;e=0;while(e<d){c[e].n();e=e+1|0;}Dn(b.dg);}
function Zi(){B.call(this);this.xN=null;}
function AUC(a,b){var c,d,e;b=a.xN.ct;c=(Cx(b.kL)).data;d=c.length;e=0;while(e<d){c[e].n();e=e+1|0;}Dn(b.dg);}
function AA8(){B.call(this);this.w9=null;}
function AW0(a,b){var c;c=a.w9;if(c.dT!==null)E3(c,b);}
function AA9(){B.call(this);this.vL=null;}
function AQj(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vL;if(Os()===c.hW){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cx(c.ct.gJ)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dj();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dg;m=new Po;m.x3=k;m.x4=l;g.getAsString(Bl(m,"accept"));DY(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new L;N(l);H(H(H(H(l,C(67)),k),C(68)),g);$rt_globals.console.info($rt_ustr(M(l)));}e=e+1
|0;}}}
function AA$(){B.call(this);this.oU=null;}
function AQR(a,b){var c;c=a.oU;if(Os()===c.hW&&Tg(c.ct,Wg(c,b),0))DY(c,b);}
function AA_(){B.call(this);this.yb=null;}
function AS0(a,b){var c;c=a.yb;if(Os()===c.hW&&Tg(c.ct,Wg(c,b),1))DY(c,b);}
var WB=G(0);
var WP=G();
function Kj(a,b,c,d){var e,f,g,h,i;e=new TS;e.lq=d;A1f=A1f+1|0;e.nz=b;e.mA=c;f=(Ej()).createElement("canvas");e.iS=f;g=b;f.width=g;h=e.iS;f=c;h.height=f;if(!d)g=e.iS.getContext("2d");else{i=e.iS;h=AJ9();g=i.getContext("2d",h);}e.c0=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var WO=G();
function APd(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function NK(){var a=this;B.call(a);a.G=null;a.l=null;a.cb=null;}
var JZ=G();
var A01=null;function Kr(a,b,c){return b.kY(c);}
function AEY(){A01=new JZ;}
function AHq(){var a=this;B.call(a);a.h3=null;a.jT=null;a.hN=0;}
function CP(a){var b=new AHq();AN9(b,a);return b;}
function AN9(a,b){a.h3=b;}
function Ba(a,b){var c,d,e;c=a.hN;d=a.h3;if(c==d.data.length)a.h3=Dp(d,c+4|0);d=a.h3.data;e=a.hN;a.hN=e+1|0;d[e]=b;a.jT=null;}
function Cx(a){var b;b=a.jT;if(!(b!==null&&b.data.length==a.hN))a.jT=Dp(a.h3,a.hN);return a.jT;}
var Ep=G(0);
var Cr=G(0);
var Cq=G(0);
function APi(a,b){return 0;}
function AVT(a,b,c){return null;}
function AJj(a,b,c){return 0;}
function ATe(a,b,c,d){return 0;}
var DO=G(0);
var Er=G(0);
var Fb=G(0);
var EF=G(0);
var FJ=G(0);
function SH(){B.call(this);this.Ag=null;}
function Bd(){var a=this;B.call(a);a.a=0;a.b=0;}
function B7(a,b){var c=new Bd();ADs(c,a,b);return c;}
function ADs(a,b,c){a.a=b;a.b=c;}
function Ci(a,b){a.a=b.a;a.b=b.b;}
function V(a,b,c){a.a=b;a.b=c;}
function ABz(a){var b,c,d;b=a.a;c=a.b;d=new L;N(d);U(H(U(H(d,C(69)),b),C(70)),c);return M(d);}
function AO1(a,b){var c;a:{b:{if(a!==b){if(BJ(b)!==BJ(a))break b;if(!IW(a,b))break b;}c=1;break a;}c=0;}return c;}
function IW(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function Zm(){var a=this;B.call(a);a.up=0;a.ur=0;a.uo=0;a.un=0;}
var AGz=G();
var ACH=G(0);
function Sx(){B.call(this);this.dL=null;}
function MA(){var a=this;B.call(a);a.bI=null;a.BI=null;}
function AFt(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(71):C(72);g=$rt_str(b.getShaderInfoLog(e));h=new L;N(h);H(H(h,f),g);g=M(h);b.deleteShader(e);Bq(BA(),g);Bq(DX(),C(73));Bq(DX(),d);Bq(DX(),C(73));b=new Bu;Bm(b,g);K(b);}
function C2(){var a=this;MA.call(a);a.qF=null;a.sF=null;a.nq=null;}
function A1y(a,b,c,d){var e=new C2();Hu(e,a,b,c,d);return e;}
function Hu(a,b,c,d,e){var f,g,h,i,j,k;a.BI=e;f=AFt(b,35633,c);d=AFt(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bI=g;h=e.vc.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bI;k=c.h6;c=c.sQ;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bI;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AAg(b,C(74));a.nq=new Bd;c=a.bI;a.qF=b.getUniformLocation(c,"uResolution");c=a.bI;a.sF=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new L;N(c);H(H(c,C(75)),d);Bm(b,M(c));K(b);}
function ADF(a,b,c){var d,e,f;if(!IW(a.nq,c)){Ci(a.nq,c);d=a.qF;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gn(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sF;b.uniform4f(e,i,l,h,j);ADF(a,b,f);}
function AGX(){C2.call(this);this.xG=null;}
function AY0(a){var b=new AGX();AOL(b,a);return b;}
function AOL(a,b){var c;H$();Hu(a,b,C(58),C(76),A1w);c=a.bI;a.xG=b.getUniformLocation(c,"uColor");}
function E2(){C2.call(this);this.uu=null;}
function AYr(a,b){var c=new E2();Wj(c,a,b);return c;}
function A1z(a,b,c){var d=new E2();Wq(d,a,b,c);return d;}
function Wj(a,b,c){Wq(a,b,C(58),c);}
function Wq(a,b,c,d){H$();Hu(a,b,c,d,A1w);c=a.bI;a.uu=b.getUniformLocation(c,"sDiffuse");}
function Mj(a,b,c){var d;d=a.uu;b.uniform1i(d,0);b.activeTexture(33984);c=c.fz;b.bindTexture(3553,c);}
var Tf=G(C2);
function AEB(){E2.call(this);this.zy=null;}
function AZZ(a){var b=new AEB();ASt(b,a);return b;}
function ASt(a,b){var c;Wj(a,b,C(77));c=a.bI;a.zy=b.getUniformLocation(c,"uContrast");}
function Gz(){var a=this;E2.call(a);a.rC=null;a.s7=null;a.uO=null;a.v3=null;a.o4=0.0;}
function A1A(a,b,c){var d=new Gz();AAO(d,a,b,c);return d;}
function AAO(a,b,c,d){Wq(a,b,c,d);c=a.bI;a.rC=b.getUniformLocation(c,"uTexTransform");c=a.bI;a.s7=b.getUniformLocation(c,"uColor");c=a.bI;a.uO=b.getUniformLocation(c,"uBgColor");c=a.bI;a.v3=b.getUniformLocation(c,"uTextPow");}
function AHn(a,b,c){var d;if(a.o4!==c){a.o4=c;d=a.v3;b.uniform2f(d,c,0.0);}}
function AFn(a,b,c,d){Fg(b,a.s7,c);Fg(b,a.uO,d);}
function ABO(a,b,c,d){var e,f,g,h,i,j;c=c.f7;e=c.a;f=c.b;g=d.bl;h=e;g=g/h;i=d.bq;j=f;i=i/j;h=d.bf/h;j=d.bF/j;c=a.rC;b.uniform4f(c,g,i,h,j);}
var PV=G(Gz);
var AHP=G(Gz);
function A0f(a){var b=new AHP();AMA(b,a);return b;}
function AMA(a,b){AAO(a,b,C(60),C(78));}
function AC$(){var a=this;E2.call(a);a.yK=null;a.yI=null;a.s_=null;}
function AZ9(a){var b=new AC$();AMD(b,a);return b;}
function AMD(a,b){var c,d;Wj(a,b,C(79));c=a.bI;a.yK=b.getUniformLocation(c,"uColorB");d=a.bI;a.yI=b.getUniformLocation(d,"uColorF");d=a.bI;a.s_=b.getUniformLocation(d,"uContrast");}
function AFJ(){var a=this;C2.call(a);a.qq=null;a.ov=null;a.ou=null;}
function AZS(a){var b=new AFJ();AMG(b,a);return b;}
function AMG(a,b){var c;H$();Hu(a,b,C(58),C(80),A1w);c=a.bI;a.qq=b.getUniformLocation(c,"uColor");c=a.bI;a.ov=b.getUniformLocation(c,"uPoints1");c=a.bI;a.ou=b.getUniformLocation(c,"uPoints2");}
function ACD(){var a=this;C2.call(a);a.po=null;a.uU=null;a.rJ=null;}
function AZT(a){var b=new ACD();AKA(b,a);return b;}
function AKA(a,b){var c;H$();Hu(a,b,C(58),C(81),A1w);c=a.bI;a.po=b.getUniformLocation(c,"uColor");c=a.bI;a.uU=b.getUniformLocation(c,"uBaseline");c=a.bI;a.rJ=b.getUniformLocation(c,"uScaleHExp");}
var Ug=G(0);
var AIa=G(0);
function Fg(b,c,d){var e,f,g,h;e=d.bl;f=d.bq;g=d.bf;h=d.bF;b.uniform4f(c,e,f,g,h);}
function AAg(b,c){var d,e;d=b.getError();if(d){b=BA();e=new L;N(e);U(H(e,c),d);Bq(b,M(e));}}
function Sv(){var a=this;B.call(a);a.zR=null;a.zU=null;a.zT=null;}
function Sw(){var a=this;B.call(a);a.eL=null;a.g9=null;a.pj=null;a.yJ=null;a.xW=null;a.uX=0;a.ye=0;}
function CA(){var a=this;B.call(a);a.zJ=null;a.fj=0;}
function Dy(a,b,c){a.zJ=b;a.fj=c;}
function Hj(){var a=this;CA.call(a);a.vc=null;a.os=null;a.ub=null;a.me=0;a.sr=0;a.vG=0;}
var A1w=null;var A1B=null;function H$(){H$=Bs(Hj);AOI();}
function AOI(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hj;c=R(Ef,2);d=c.data;AV8();d[0]=A1C;d[1]=A1D;H$();Dy(b,C(82),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.nK.fj){case 0:f=f+l.fK|0;h=h+1|0;break a;case 1:e=e+l.fK|0;g=g+1|0;break a;default:}}i=i|1<<l.h6;k=k+1|0;}b.vc=c;b.me=e;b.sr=f;b.vG=i;c=R(Ef,g);m=c.data;b.os=c;c=R(Ef,h);n=c.data;b.ub=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.nK.fj){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A1w
=b;c=R(Hj,1);c.data[0]=b;A1B=c;}
var Nk=G(0);
var VN=G(0);
var W3=G(0);
var GV=G();
function Ki(){GV.call(this);this.zj=null;}
function AD0(){var a=this;Ki.call(a);a.Bu=0;a.ms=0;a.jO=null;a.lQ=null;a.wi=null;}
function AQ4(a,b){var c=new AD0();AVK(c,a,b);return c;}
function AVK(a,b,c){a.zj=b;b=new L;N(b);a.jO=b;a.lQ=B1(32);a.Bu=c;ADU();a.wi=A1E;}
function VT(a,b,c,d){var e,$$je;e=a.zj;if(e===null)a.ms=1;if(!(a.ms?0:1))return;a:{try{e.lF(b,c,d);break a;}catch($$e){$$je=EE($$e);if($$je instanceof Jb){}else{throw $$e;}}a.ms=1;}}
function P5(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AEO(b,c,d-c|0);e=DD(Be(16,Bc(e.length,1024)));g=AEC(e,0,e.data.length);h=a.wi;i=new Rx;b=DD(1);j=b.data;j[0]=63;HI();k=A1F;i.nv=k;i.mB=k;c=j.length;if(c&&c>=i.ot){i.zE=h;i.sO=b.hh();i.Bo=2.0;i.ot=4.0;i.rX=B1(512);i.qo=DD(512);k=A1G;if(k===null){i=new BP;Bm(i,C(83));K(i);}i.nv=k;i.mB=k;a:while(true){if(i.jJ==3){f=new CT;Z(f);K(f);}i.jJ=2;b:{while(true){try{k=ACo(i,f,g);}catch($$e){$$je=EE($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(IX(k))
{d=Ce(f);if(d<=0)break b;k=Ei(d);}else if(HF(k))break;h=!M$(k)?i.nv:i.mB;c:{if(h!==A1G){if(h===A1H)break c;else break b;}d=Ce(g);b=i.sO;l=b.data.length;if(d<l){k=A1I;break b;}ZN(g,b,0,l);}E7(f,f.ba+K4(k)|0);}}l=HF(k);VT(a,e,0,g.ba);P3(g);if(!l){while(true){d=i.jJ;if(d!=2&&d!=4){f=new CT;Z(f);K(f);}f=A1J;if(f===f)i.jJ=3;l=HF(f);VT(a,e,0,g.ba);P3(g);if(!l)break;}return;}}K(ALK(f));}i=new BP;Bm(i,C(84));K(i);}
function Bq(a,b){var c,d,e,f,g,h,i,j;BL(B0(a.jO,b),10);b=a.jO;c=b.K;d=a.lQ;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BG;Bm(b,C(85));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}P5(a,d,0,c);a.jO.K=0;}
function GJ(){GV.call(this);this.Ba=null;}
function ABk(a){a.Ba=DD(1);}
var Md=G(GJ);
var A1i=null;function AO4(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AF4(){var b;b=new Md;ABk(b);A1i=b;}
function Ef(){var a=this;CA.call(a);a.sQ=null;a.nK=null;a.fK=0;a.rY=0;a.h6=0;}
var A1C=null;var A1D=null;var A1K=null;function AV8(){AV8=Bs(Ef);ANS();}
function AZe(a,b,c,d,e,f,g){var h=new Ef();YL(h,a,b,c,d,e,f,g);return h;}
function YL(a,b,c,d,e,f,g,h){AV8();Dy(a,b,c);a.sQ=d;a.nK=e;a.fK=f;a.rY=g;a.h6=h;}
function ANS(){var b;b=new Ef;AQF();YL(b,C(86),0,C(87),A1L,2,0,0);A1C=b;b=AZe(C(88),1,C(89),A1L,2,0,1);A1D=b;A1K=I(Ef,[A1C,b]);}
function J8(){var a=this;B.call(a);a.zp=null;a.Ap=null;}
function AGl(b){var c,d;if(Fc(b))K(ADW(b));if(!AGn(P(b,0)))K(ADW(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AGn(d))break a;else K(ADW(b));}}c=c+1|0;}}
function AGn(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var No=G(J8);
var A1E=null;function ADU(){ADU=Bs(No);AMB();}
function AGC(a){var b,c;b=new VU;b.fE=C(90);HI();c=A1F;b.hF=c;b.nC=c;b.Ai=a;b.oA=0.3333333432674408;b.AI=0.5;b.qy=DD(512);b.vn=B1(512);return b;}
function AMB(){var b,c,d,e,f;b=new No;ADU();c=R(BC,0);d=c.data;AGl(C(91));e=d.length;f=0;while(f<e){AGl(d[f]);f=f+1|0;}b.zp=C(91);b.Ap=c.hh();A1E=b;}
function Rb(){var a=this;B.call(a);a.f3=null;a.of=null;a.li=null;a.vR=null;a.sq=null;a.sI=null;}
function AD6(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f3,b,c));}
function Od(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.of[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f3,b,d));f=e.data;Fe();d=f.length;ADU();g=A1E;h=AEC(e,0,d);a:{try{i=AGC(g);HI();g=ACX(AFw(AHc(i,A1G),A1G),h);break a;}catch($$e){$$je=EE($$e);if($$je instanceof Gl){g=$$je;}else{throw $$e;}}h=new Z7;h.kl=1;h.kW=1;h.ik=C(92);h.mE=g;K(h);}if(!g.ba&&g.dO==g.n_)c.b9=g.h5;else{f=B1(Ce(g));e=f.data;c.b9=f;O4(g,f,0,e.length);}return c;}
function Ou(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.li[e]){e=e+1|0;}d=e-d|0;H0(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f3,b,d)));return c;}
var Ho=G(CA);
var A1M=null;var A1L=null;var A1N=null;function AQF(){AQF=Bs(Ho);AL4();}
function AMw(a,b){var c=new Ho();AGF(c,a,b);return c;}
function AGF(a,b,c){AQF();Dy(a,b,c);}
function AL4(){var b;A1M=AMw(C(93),0);b=AMw(C(94),1);A1L=b;A1N=I(Ho,[A1M,b]);}
var LD=G(GJ);
var A1j=null;function AMO(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AId(){var b;b=new LD;ABk(b);A1j=b;}
function AGs(){BP.call(this);this.zI=null;}
function ADW(a){var b=new AGs();AVa(b,a);return b;}
function AVa(a,b){Z(a);a.zI=b;}
var X4=G(El);
var Nn=G(0);
function AAx(){B.call(this);this.sz=null;}
function AT3(a,b){a.sz.setPointerCapture(b.pointerId);}
function AAy(){B.call(this);this.q2=null;}
function AKz(a,b){a.q2.releasePointerCapture(b.pointerId);}
function HB(){var a=this;B.call(a);a.n_=0;a.ba=0;a.dO=0;a.ie=0;}
function YG(a,b){a.ie=(-1);a.n_=b;a.dO=b;}
function E7(a,b){var c,d,e;if(b>=0&&b<=a.dO){a.ba=b;if(b<a.ie)a.ie=0;return a;}c=new BP;d=a.dO;e=new L;N(e);BL(U(H(U(H(e,C(95)),b),C(96)),d),93);Bm(c,M(e));K(c);}
function Ce(a){return a.dO-a.ba|0;}
function D1(a){return a.ba>=a.dO?0:1;}
var UG=G(0);
var L1=G(HB);
function AHS(b){var c,d;if(b>=0)return ASO(0,b,B1(b),0,b,0);c=new BP;d=new L;N(d);U(H(d,C(97)),b);Bm(c,M(d));K(c);}
function AEO(b,c,d){return ASO(0,b.data.length,b,c,c+d|0,0);}
function O4(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BG;i=new L;N(i);U(H(U(H(i,C(98)),g),C(99)),f);Bm(h,M(i));K(h);}if(Ce(a)<d){j=new MT;Z(j);K(j);}if(d<0){j=new BG;k=new L;N(k);H(U(H(k,C(100)),d),C(101));Bm(j,M(k));K(j);}g=a.ba;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.h5.data[m+a.nQ|0];l=l+1|0;c=n;m=o;}a.ba=g+d|0;return a;}}b=b.data;j=new BG;d=b.length;k=new L;N(k);BL(U(H(U(H(k,C(102)),c),C(96)),d),41);Bm(j,M(k));K(j);}
function K1(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.oh){b=new JL;Z(b);K(b);}e=d-c|0;if(Ce(a)<e){b=new IA;Z(b);K(b);}if(c>J(b)){f=new BG;d=J(b);b=new L;N(b);BL(U(H(U(H(b,C(103)),c),C(96)),d),41);Bm(f,M(b));K(f);}if(d>J(b)){f=new BG;c=J(b);b=new L;N(b);U(H(U(H(b,C(104)),d),C(105)),c);Bm(f,M(b));K(f);}if(c>d){b=new BG;f=new L;N(f);U(H(U(H(f,C(103)),c),C(106)),d);Bm(b,M(f));K(b);}g=a.ba;while(c<d){h=g+1|0;i=c+1|0;UP(a,g,P(b,c));g=h;c=i;}a.ba=a.ba+e|0;return a;}
function KN(){var a=this;HB.call(a);a.mq=0;a.nj=null;a.AX=null;}
function AEC(b,c,d){var e,f,g;e=b.data;f=new ZM;g=e.length;d=c+d|0;YG(f,g);AOP();f.AX=A1O;f.mq=0;f.nj=b;f.ba=c;f.dO=d;f.A1=0;f.pe=0;return f;}
function ZN(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.pe){e=new JL;Z(e);K(e);}if(Ce(a)<d){e=new IA;Z(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BG;j=new L;N(j);U(H(U(H(j,C(107)),h),C(99)),g);Bm(i,M(j));K(i);}if(d<0){e=new BG;i=new L;N(i);H(U(H(i,C(100)),d),C(101));Bm(e,M(i));K(e);}h=a.ba;k=h+a.mq|0;l=0;while(l<d){b=a.nj.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.ba=h+d|0;return a;}}b=b.data;e=new BG;d=b.length;i=new L;N(i);BL(U(H(U(H(i,C(102)),c),C(96)),d),41);Bm(e,
M(i));K(e);}
function P3(a){a.ba=0;a.dO=a.n_;a.ie=(-1);return a;}
function Ij(){B.call(this);this.B5=null;}
var A1H=null;var A1G=null;var A1F=null;function HI(){HI=Bs(Ij);AQm();}
function AHv(a){var b=new Ij();AGh(b,a);return b;}
function AGh(a,b){HI();a.B5=b;}
function AQm(){A1H=AHv(C(108));A1G=AHv(C(109));A1F=AHv(C(110));}
var OD=G(Cj);
function AQc(a){}
function AOx(a,b,c){}
function CH(){var a=this;Cj.call(a);a.gk=null;a.r=null;}
function Fs(a,b){var c,d,e;DS(a,b);a.gk=ADk(0,0,64);c=new WT;c.cf=new Bd;c.ek=CP(R(ET,0));c.dG=new Bd;c.w_=new Bd;c.zl=new BZ;c.zm=new BZ;d=b.G;c.cH=d;e=b.cb;c.gt=e;c.cu=d.kb;c.cO=SV(e);d=b.l.lK;e=new Sn;e.us=c;Ba(d,e);d=b.l.kL;e=new Sl;e.yB=c;Ba(d,e);a.r=c;Ba(b.l.bZ,new Um);b=b.l.bZ;c=a.r;BO(c);d=new Ul;d.qx=c;Ba(b,d);}
function Fl(a){EG(a.C.G,a.gk);}
function G8(a,b,c){var d,e,f,g,h;a:{d=a.r;Ci(d.cf,b);e=d.b3;if(e!==c){d.b3=c;f=(Cx(d.ek)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].ha(e,c);h=h+1|0;}}}}
var QG=G(0);
var KT=G(0);
function AHW(a){a.jI(If());}
function K5(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IP;c=new Ji;d=new HJ;AMV();KJ(d,A1P);Np(c,d,BR(A1Q),BR(A1R),BR(A1S),BR(A1Q),BR(A1T),BR(A1U),BR(A1V),BR(A1W),BR(A1X),BR(A1Y));Xz();e=(A1Z.hh()).data;f=e.length;g=R(JH,f);h=g.data;i=0;while(i<f){h[i]=e[i].i1;i=i+1|0;}j=AFM(S(C(111)),S(C(112)),S(C(113)),S(C(114)));k=new IS;l=new I8;AI6();m=A10;Nv(l,m,A11,A12,A13,A14,m);Mu(k,l,AGR(),AHK(S(C(115)),S(C(116)),S(C(117))),AGR(),ABC(1,0.17499999701976776),A15,A16);JS(b,c,g,j,k,ABT(S(C(118)),S(C(119)),S(C(120)),S(C(121))));a.jI(b);}
function AEU(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IP;c=new Ji;d=new HJ;AGE();KJ(d,A17);Np(c,d,BR(A18),BR(A19),BR(A1$),BR(A18),BR(A1_),BR(A2a),BR(A2b),BR(A2c),BR(A2d),BR(A2e));AFG();e=(A2f.hh()).data;f=e.length;g=R(JH,f);h=g.data;i=0;while(i<f){h[i]=e[i].mC;i=i+1|0;}j=AFM(S(C(122)),S(C(123)),S(C(124)),S(C(125)));k=new IS;l=new I8;AJo();m=A2g;Nv(l,m,A2h,A2i,A2j,A2k,m);Mu(k,l,AHf(),AHK(S(C(126)),S(C(127)),C8(0)),AHf(),ABC(1,0.07500000298023224),A2l,A2m);JS(b,c,g,j,k,ABT(S(C(128)),S(C(129)),S(C(130)),S(C(131))));a.jI(b);}
var KW=G(0);
var My=G(0);
function KD(){var a=this;CH.call(a);a.A=null;a.E=null;a.d2=null;a.hG=0;a.gi=null;a.jB=null;a.yD=null;}
function AZV(a){var b=new KD();ADX(b,a);return b;}
function ADX(a,b){var c,d,e;Fs(a,b);c=new Sm;c.di=new Bd;c.e2=new Bd;c.ji=new Bd;c.jj=new Bd;c.jf=new Bd;c.jg=new Bd;a.jB=c;a.yD=LM();c=AUy(a.r);a.d2=c;a.A=AD4(a.r,c);a.E=AD4(a.r,a.d2);c=a.A;c.bP=1;d=new Xp;d.xT=a;e=new Xq;e.tx=a;Y8(c,d,d);Y8(a.E,e,e);c=a.A;d=new Xr;d.pz=a;c.l2=d;c=a.E;d=new Xk;d.wS=a;c.l2=d;AHh(a,0);PH(a.r,a.A);Ba(b.l.bm,a.d2);Ba(b.l.dC,a.d2);Ba(b.l.dC,a);Ba(b.l.bm,a);c=b.l.bZ;d=new Xm;d.tc=a;Ba(c,d);c=b.l.bZ;d=new IJ;e=new Xn;e.o2=a;Op(d,b,e);Ba(c,d);Ba(b.l.f8,a);Ba(b.l.gJ,a);b=b.l.eo;c=new Xo;c.ve
=a;Ba(b,c);K5(a);}
function ABr(a,b){if(a.A===b)a.hG=a.hG|1;if(a.E===b)a.hG=a.hG|2;if((a.hG&3)==3)AHu(a);}
function AHh(a,b){Ut(a.A,b);Ut(a.E,b);}
function AWp(a,b,c){if(Ed(a.r,a.A))return Hq(a.A,b,c);if(!Ed(a.r,a.E))return 0;return Hq(a.E,b,c);}
function AEs(a){if(Ed(a.r,a.A))return AAZ(a,a.A);if(!Ed(a.r,a.E))return null;return AAZ(a,a.E);}
function AAZ(a,b){var c;c=new VF;c.sA=b;return c;}
function Yd(a,b,c){var d,e,f,g,h,i,j;d=a.gi;if(d!==null&&d.gu!==null){e=b!==a.A?0:1;f=F_(b);g=(Hn(b)+f|0)/2|0;h=g-f|0;d=a.gi;d=d.gu.data[GE(d,g,e)];i=g-(!e?d.iy:d.iz)|0;j=b.bk-W(f,b.N)|0;e=Mc(W(((!e?d.iz:d.iy)+i|0)-h|0,c.N)+j|0,Ie(c));c.bk=e;c.d.i4=e/c.N;return;}}
function AHu(a){var b,c,d,e,f,g;Bq(BA(),C(132));b=a.A.d;c=a.E.d;d=Ez(b.f);e=Ez(c.f);f=ACW(b.f);g=ACW(c.f);b=a.C.cb;c=new R7;c.tE=a;CO(b,c,C(133),I(B,[d,f,e,g]));}
function ATy(a,b){var c,d;c=L3(a.A,b);d=L3(a.E,b);return !c&&!d?0:1;}
function AQs(a){Fl(a);JP(a.A);JP(a.E);AHY(a.jB,a.gi,a.r,a.A,a.E,a.yD,a.d2.gy);AA7(a.d2);}
function AOm(a){return JJ(0);}
function AUi(a){Pi(a.A);Pi(a.E);}
function AQh(a){AA5(a.A);AA5(a.E);}
function AVt(a,b){Qc(a.A,b);Qc(a.E,b);}
function ARU(a,b){NM(a.r,b);}
function ALB(a,b){if(ZH(a.r,b)){TJ(a.d2);LB(a.A,b);LB(a.E,b);}}
function APD(a,b,c){G8(a,b,c);AE4(a,b,c);}
function AE4(a,b,c){var d,e,f,g,h,i;d=new Bd;e=Cf(20.0,c);f=new Bd;g=b.a/2|0;h=e/2|0;ADs(f,g-h|0,b.b);J4(a.A,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;J4(a.E,d,f,c);V(a.jB.di,f.a,d.b);V(a.jB.e2,d.a-f.a|0,f.b);}
function AJp(a,b){BO(b);Oi(a.d2,b);KZ(a.A,b);KZ(a.E,b);}
function AHb(a,b){if(b.bo!=121)return 0;return 1;}
function AEA(a,b){var c,d,e;if(Ed(a.r,a.A)){c=a.d2;d=a.A;e=new AAG;e.q$=a;Kq(c,b,d,a,a,a,e);}if(Ed(a.r,a.E)){c=a.d2;d=a.E;e=new AAF;e.rV=a;Kq(c,b,d,a,a,a,e);}return 1;}
function ASx(a,b){var c,d;c=DT(a.A,b.i)&&PK(a.A,b)?1:0;d=DT(a.E,b.i)&&PK(a.E,b)?1:0;return !c&&!d?0:1;}
function AOq(a,b,c,d){var e,f;e=DT(a.A,b.i)&&Og(a.A,b,c,d)?1:0;f=DT(a.E,b.i)&&Og(a.E,b,c,d)?1:0;return !e&&!f?0:1;}
function AQJ(a,b,c){var d,e,f,g,h,i,j,k;d=DT(a.A,b.i);e=DT(a.E,b.i);f=a.r;g=f.ev;h=g!==null?0:1;i=a.A;j=g!==i?0:1;k=g!==a.E?0:1;if(d&&!(!h&&!k))Gh(f,i);if(e&&!(!h&&!j))Gh(a.r,a.E);if(d){i=N3(a.A,b,c);if(i!==null)return i;}return !e?null:N3(a.E,b,c);}
function ATp(a,b,c){var d,e,f,g;d=DT(a.A,b.i);e=DT(a.E,b.i);f=d&&VL(a.A,b,c)?1:0;g=e&&VL(a.E,b,c)?1:0;return !f&&!g?0:1;}
function AST(a,b,c,d){var e,f,g,h;e=DT(a.A,b.i);f=DT(a.E,b.i);g=e&&KH(a.A,c,d)?1:0;h=f&&KH(a.E,c,d)?1:0;return !g&&!h?0:1;}
function APn(a){return AEs(a);}
var AGJ=G(KD);
function AYU(a){var b=new AGJ();AWa(b,a);return b;}
function AWa(a,b){var c;ADX(a,b);a.A.ef=1;a.E.ef=1;c=new Wh;c.pG=a;QN(a,c,C(134));c=new Wi;c.vY=a;QN(a,c,C(135));}
function AQ0(a){return JJ(1);}
function QN(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new N5;d=d.then(Bl(e,"f"));f=new N8;f.uw=b;f.uv=c;g=new N6;d.then(Bl(f,"f"),Bl(g,"f"));}
var AHo=G();
function AVr(b){var c,d;if(J(b)>0){c=new L;N(c);H(H(c,C(136)),b);$rt_globals.console.info($rt_ustr(M(c)));}a:{d=(-1);switch(I1(b)){case -1570047148:if(!Bp(b,C(137)))break a;d=17;break a;case -1509980539:if(!Bp(b,C(138)))break a;d=13;break a;case -1351411913:if(!Bp(b,C(139)))break a;d=5;break a;case -1073555521:if(!Bp(b,C(140)))break a;d=14;break a;case -1045861099:if(!Bp(b,C(141)))break a;d=18;break a;case -1045861098:if(!Bp(b,C(142)))break a;d=19;break a;case -811765794:if(!Bp(b,C(143)))break a;d=6;break a;case -785237654:if
(!Bp(b,C(144)))break a;d=11;break a;case -631889171:if(!Bp(b,C(145)))break a;d=9;break a;case -536831301:if(!Bp(b,C(146)))break a;d=21;break a;case -439438829:if(!Bp(b,C(147)))break a;d=20;break a;case -223304637:if(!Bp(b,C(148)))break a;d=2;break a;case 2129957:if(!Bp(b,C(149)))break a;d=1;break a;case 3343967:if(!Bp(b,C(150)))break a;d=10;break a;case 3556498:if(!Bp(b,C(151)))break a;d=4;break a;case 485517998:if(!Bp(b,C(152)))break a;d=7;break a;case 544901384:if(!Bp(b,C(153)))break a;d=3;break a;case 1030621992:if
(!Bp(b,C(154)))break a;d=16;break a;case 1465713255:if(!Bp(b,C(155)))break a;d=8;break a;case 1554501643:if(!Bp(b,C(156)))break a;d=15;break a;case 1609169232:if(!Bp(b,C(157)))break a;d=12;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Yk;break b;case 3:case 4:b=new Yh;break b;case 5:b=new Yg;break b;case 6:b=new Yj;break b;case 7:b=new Yi;break b;case 8:b=new Yp;break b;case 9:case 10:b=new Yo;break b;case 11:b=new Yr;break b;case 12:b=new Yq;break b;case 13:b=new Vy;break b;case 14:b=new Vx;break b;case 15:b
=new Vw;break b;case 16:b=new Vr;break b;case 17:b=new Vq;break b;case 18:b=new Vo;break b;case 19:b=new Vn;break b;case 20:b=new Vm;break b;case 21:b=new Vl;break b;default:b=new Vk;break b;}b=new Ym;}return b;}
var AEL=G();
var KU=G(L1);
function AEr(){var a=this;KU.call(a);a.oh=0;a.nQ=0;a.h5=null;}
function ASO(a,b,c,d,e,f){var g=new AEr();AXX(g,a,b,c,d,e,f);return g;}
function AXX(a,b,c,d,e,f,g){YG(a,c);a.ba=e;a.dO=f;a.nQ=b;a.oh=g;a.h5=d;}
function UP(a,b,c){a.h5.data[b+a.nQ|0]=c;}
function LN(){var a=this;B.call(a);a.zE=null;a.sO=null;a.Bo=0.0;a.ot=0.0;a.nv=null;a.mB=null;a.jJ=0;}
function MJ(){var a=this;B.call(a);a.g$=0;a.je=0;}
var A1J=null;var A1I=null;function ACy(a,b){var c=new MJ();ADh(c,a,b);return c;}
function ADh(a,b,c){a.g$=b;a.je=c;}
function IX(a){return a.g$?0:1;}
function HF(a){return a.g$!=1?0:1;}
function LC(a){return !S5(a)&&!M$(a)?0:1;}
function S5(a){return a.g$!=2?0:1;}
function M$(a){return a.g$!=3?0:1;}
function K4(a){var b;if(LC(a))return a.je;b=new Ec;Z(b);K(b);}
function Ei(b){return ACy(2,b);}
function XQ(a){var b,c;switch(a.g$){case 0:b=new SA;Z(b);K(b);case 1:b=new AAf;Z(b);K(b);case 2:b=new XE;c=a.je;Z(b);b.Cl=c;K(b);case 3:b=new Sj;c=a.je;Z(b);b.Cf=c;K(b);default:}}
function ADG(){A1J=ACy(0,0);A1I=ACy(1,0);}
var ACj=G();
var I7=G(0);
var OO=G();
function AMX(a,b){return b.arrayBuffer();}
var ON=G();
function ARV(a,b){var c,d;c=new Q_;d=new Q9;return $rt_globals.WebAssembly.instantiate(b,APb(Bl(c,"f"),Bl(d,"f")));}
var OL=G();
function ASF(a,b){AKp(b);}
var OK=G();
function ALa(a,b){AHA(b);}
var X=G(0);
function Wh(){B.call(this);this.pG=null;}
function AW5(a,b){I5(a.pG.A,b);}
function Wi(){B.call(this);this.vY=null;}
function APu(a,b){I5(a.vY.E,b);}
var Ym=G();
function AVQ(a,b){return AZV(b);}
var Yk=G();
function AI2(a,b){return AZ3(b);}
var Yh=G();
function AMq(a,b){return A0u(b);}
var Yg=G();
function ARR(a,b){var c,d,e,f,g;c=new VX;DS(c,b);d=(If()).bD.eD;c.AQ=d;c.i3=AHx(d);c.iC=new Bd;c.hc=new Bd;c.c_=Kx();c.dz=Kx();c.l_=JJ(1);b=b.l.bm;d=new Oa;d.kA=c;Ba(b,d);b=c.l_.data[DR()*c.l_.data.length|0];d=Gt(c.C.G,b,10);c.lO=d;Cv(c.C.G.ci,d);e=D0(c.C.G.ci,C(158));d=c.C.G.ci;f=new L;N(f);BL(f,43);H(f,b);g=C6(e+D0(d,M(f)));c.h1=g;c.h_=CM(c.h_,ABl(c,1,g,b,c.lO,c.C.G));c.h$=CM(c.h$,ABl(c,0,c.h1,b,c.lO,c.C.G));SE(c,c.c_,c.h_);SE(c,c.dz,c.h$);Cc(c.c_.P,1.0,1.0,1.0,1.0);Fw(c.c_,c.i3);Cc(c.dz.P,1.0,1.0,1.0,1.0);Fw(c.dz,
c.i3);b=BA();g=c.h1;d=new L;N(d);U(H(d,C(159)),g);Bq(b,M(d));return c;}
var Yj=G();
function AMx(a,b){var c,d,e;c=new PX;Fs(c,b);d=new N7;d.nm=new Bd;d.n7=new Bd;c.sN=d;c.eN=AEN();c.dk=AEN();c.ez=K9(c.r);Ba(c.r.ek,c);d=b.l.bZ;e=new Wy;e.v0=c;Ba(d,e);Ba(b.l.bm,c);b=b.l.eo;d=new Wu;d.xB=c;Ba(b,d);ABo(c.dk);c.op=ED(C(160),25.0);HS(c.ez,F$(),c.op);BU(c.gk,C8(43));b=F$();Iv(c.eN,b);Iv(c.dk,b);b=c.eN;b.kv=new Wv;d=c.dk;d.kv=new Ww;d.lX=new Qt;d.oy=new Qu;K6(b,(Tu(0)).j5);K6(c.dk,(Tu(0)).j5);return c;}
var Yi=G();
function AIh(a,b){var c,d,e;c=new Vp;Fs(c,b);c.lI=ED(C(161),15.0);d=AFo();c.fl=d;Ba(c.r.ek,d);Ba(c.r.ek,c);BU(c.gk,C8(43));d=K9(c.r);c.iQ=d;HS(d,F$(),ED(C(160),25.0));d=b.l.bZ;e=new X_;e.z5=c;Ba(d,e);d=b.l.eo;e=new Yb;e.xC=c;Ba(d,e);Ba(b.l.bm,RQ(c.iQ));Ba(b.l.bm,c.fl);b=b.l.dC;d=c.fl;BO(d);e=new Ya;e.tA=d;Ba(b,e);return c;}
var Yp=G();
function AL2(a,b){var c,d,e;c=new OW;Fs(c,b);c.g1=BI();c.fR=BI();c.rH=S(C(162));c.ja=AU8();c.g0=0;d=c.r.ek;e=new Oj;e.rp=c;Ba(d,e);Ba(b.l.bm,c);d=b.l.bZ;e=new Oh;e.xY=c;Ba(d,e);b=Gt(b.G,C(160),35);c.jn=b;c.kQ=ACl(FB(b));BU(c.gk,S(C(163)));return c;}
var Yo=G();
function AP1(a,b){var c,d,e,f,g;c=new Vj;DS(c,b);c.g4=AHz();c.er=0;c.wo=500;c.rI=Ig(0,0,0,255,new BZ);c.k$=20;c.p6=20;c.vv=If();d=b.l.bm;e=new Ox;e.jW=c;f=new Xj;f.vl=e;e.rs=f;Ba(d,e);d=b.l.dC;e=new Un;e.wA=c;Ba(d,e);c.eM=b.G;c.qP=SV(b.cb);b=c.g4;d=Gt(c.eM,C(160),c.p6);g=c.k$;e=c.eM;Rm(b,d,g,e.kb,e);c.iB=Jh();return c;}
var Yr=G();
function AUl(a,b){var c,d;c=new SB;IH(c,b);b=b.l.bZ;d=new RL;d.tt=c;Ba(b,d);return c;}
var Yq=G();
function AIy(a,b){var c,d,e,f,g,h,i;c=new Pk;Fs(c,b);d=K9(c.r);c.iK=d;HS(d,F$(),ED(C(160),25.0));Ba(b.l.bm,RQ(c.iK));e=b.l.eo;d=new S_;d.rr=c;Ba(e,d);e=b.cb;f=new AAb;f.zH=c;g=R(B,1);g.data[0]=C(164);CO(e,f,C(165),g);h=new AAa;h.Cx=c;g=R(B,1);g.data[0]=AEm([1,2,3,4,5]);CO(e,h,C(166),g);h=new AAd;h.si=c;g=R(B,1);g.data[0]=AZf([1,2,3,4,5]);CO(e,h,C(167),g);h=new AAc;h.z2=c;g=R(B,1);g.data[0]=DB([1,2,3,4,5]);CO(e,h,C(168),g);e=b.cb;i=0;while(i<3){AHt(e,i,0);i=i+1|0;}e=b.l.bZ;d=new IJ;h=new S$;h.Bs=c;f=new Ta;f.oO
=c;Z5(d,b,h,f);Ba(e,d);return c;}
var Vy=G();
function AIV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Oe;IH(c,b);c.ep=Hz(0,0,300,300);c.fW=VS(0,0,3,3);d=b.G;b=b.l.bm;e=new WG;e.l6=c;Ba(b,e);b=AHV(d);c.w0=b;FC(c.ep,b);FS(c.ep);b=c.ep.bg;Ft();BU(b,A2n);BU(c.ep.P,Dr(204,120,50));AQN();e=A2o;f=DD((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C0(d);switch(e.fj){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EP;Z(b);K(b);}b:
{OF(m,5,5,h);b=m.es.dL;switch(e.fj){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EP;Z(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.m0=m;V(c.fW.q,BX(m),Dd(c.m0));BU(c.fW.bg,c.nx);return c;}
var Vx=G();
function APB(a,b){var c,d,e;c=new Ve;IH(c,b);c.gj=Hz(0,0,300,300);c.k5=new Bd;c.jX=new Bd;c.it=new Bd;d=b.G;b=b.l.bm;e=new Qb;e.jK=c;Ba(b,e);b=AHV(d);c.pU=b;FC(c.gj,b);FS(c.gj);b=c.gj.bg;Ft();BU(b,A2n);BU(c.gj.P,Dr(204,120,50));return c;}
var Vw=G();
function ARn(a,b){var c,d,e,f;c=new U$;DS(c,b);c.BV=20;c.Ch=11;c.zt=220;c.ky=new Bd;c.A_=5000;c.hC=1;c.f_=I(HJ,[C8(0),C8(255)]);c.eu=b.G;d=b.l.bm;e=new RI;e.j$=c;f=new YI;f.ud=e;e.pu=f;Ba(d,e);b=b.l.dC;d=new ABd;d.qU=c;Ba(b,d);b=GO(c.eu,200,220);c.k_=b;GB(b,C(160),20.0);b=GO(c.eu,200,20);c.fY=b;GB(b,C(160),20.0);c.h7=Jh();return c;}
var Vr=G();
function AM2(a,b){var c,d,e;c=new JD;IH(c,b);Ba(b.l.bm,c);d=b.l.bZ;e=new ZE;e.ox=c;Ba(d,e);Ba(b.l.f8,new ZD);d=b.l.f8;e=new ZC;e.sC=c;Ba(d,e);Ba(b.l.gJ,new ZB);d=b.l.gJ;e=new ZF;e.uV=c;Ba(d,e);b=!AAA(b.cb)?C(169):C(170);d=new L;N(d);H(H(d,C(171)),b);$rt_globals.console.info($rt_ustr(M(d)));return c;}
var Vq=G();
function AIG(a,b){var c,d,e,f,g,h;c=new UQ;DS(c,b);c.vD=C8(20);c.gb=Hz(0,0,300,300);d=b.l.bZ;e=new Uk;e.B$=c;Ba(d,e);b=b.G;d=Gt(b,C(14),88);Cv(b.ci,d);f=C6(ACM(D0(b.ci,C(172)),D0(b.ci,C(173))));g=KV(d,1.1799999475479126);h=BA();e=new L;N(e);U(H(U(H(e,C(174)),f),C(175)),g);Bq(h,M(e));e=GO(b,f,g*3|0);c.hV=e;Cv(e,d);BQ(c.hV,C(172),0.0,d.c9);BQ(c.hV,C(173),0.0,g+d.c9);BQ(c.hV,C(176),0.0,(g*2|0)+d.c9);b=C0(b);c.mf=b;CN(b,c.hV);FC(c.gb,c.mf);FS(c.gb);b=c.gb.bg;Ft();BU(b,A2n);BU(c.gb.P,A2p);return c;}
var Vo=G();
function AVZ(a,b){var c;c=new V9;NF(c,b);Ge(c.ch,0,0,300,300);V(c.da,300,300);return c;}
var Vn=G();
function AQd(a,b){var c;c=new V8;NF(c,b);c.fy=new Bd;c.gf=new Bd;V(c.dV,150,140);V(c.da,500,100);V(c.e6,150,200);V(c.et,500,250);return c;}
var Vm=G();
function AUn(a,b){var c,d,e,f;c=new Z0;Fs(c,b);c.qD=EH(40,40,40,200);c.oB=EH(43,43,43,128);c.q3=ED(C(161),20.0);d=AFo();c.ew=d;Ba(c.r.ek,d);Ba(c.r.ek,c);BU(c.gk,C8(43));d=K9(c.r);c.hZ=d;HS(d,F$(),ED(C(160),25.0));d=b.l.bZ;e=new AA2;e.Bb=c;Ba(d,e);d=b.l.eo;e=new AA4;e.tq=c;Ba(d,e);Ba(b.l.bm,RQ(c.hZ));Ba(b.l.bm,c.ew);d=b.l.bm;e=c.r.cO;f=new U8;f.wD=e;Ba(d,f);b=b.l.dC;d=c.ew;BO(d);e=new AA3;e.w$=d;Ba(b,e);return c;}
var Vl=G();
function AIp(a,b){return A0z(b);}
var Vk=G();
function AT6(a,b){var c;c=new NT;AHZ(c,b);I5(c.cL,AYt(C(177),C(178),AGc(C(179))));return c;}
function Zu(){var a=this;B.call(a);a.vV=null;a.wN=null;a.vs=null;}
function HH(){var a=this;B.call(a);a.bL=0;a.cD=0;a.de=0;a.j3=0;}
function A2q(a,b,c,d){var e=new HH();WM(e,a,b,c,d);return e;}
function WM(a,b,c,d,e){a.bL=d;a.cD=b;a.de=c;a.j3=e;}
function Q2(){var a=this;HH.call(a);a.d4=null;a.bo=0;a.io=0;a.uP=0;a.ln=0;}
var AGK=G();
function YX(b,c){return (b+(c/2|0)|0)/c|0;}
function R5(b,c,d){if(b<(2147483647/c|0))return YX(W(b,c),d);return 0.5+c*b/d|0;}
function Jk(b,c){return ((b+c|0)-1|0)/c|0;}
function Gq(b){return b+0.5|0;}
function C6(b){return b+0.5|0;}
function EW(b,c,d){return Be(b,Bc(c,d));}
function KL(b,c){return ACc(b)/ACc(c);}
function NH(){var a=this;HH.call(a);a.i=null;a.zq=null;}
var WE=G(0);
function Po(){var a=this;B.call(a);a.x3=null;a.x4=null;}
function APG(a,b){var c,d;c=a.x3;d=a.x4;$rt_globals.console.info("paste plain string "+b);c.g(Fn(b));Dn(d);}
function Xf(){B.call(this);this.yG=null;}
function YW(a,b){a.yG.clipboardData.setData("text/plain",$rt_ustr(b));}
function ZM(){var a=this;KN.call(a);a.A1=0;a.pe=0;}
function Sm(){var a=this;B.call(a);a.di=null;a.e2=null;a.ji=null;a.jj=null;a.jf=null;a.jg=null;}
function AHY(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=c.cH;i=a.di;Bx(h,i.a,i.b,a.e2,g.bD.eD);if(b!==null&&b.gu!==null){j=CE(c,2.0);k=GE(b,F_(d),1);l=GE(b,Hn(d),1);m=GE(b,F_(e),0);n=GE(b,Hn(e),0);o=Bc(k,m);p=Be(l,n);n=BH(o,p);if(n<=0)B4(h,1);while(o<=p){q=b.gu.data[o];if(q.ly){k=d.N;r=W(k,q.iz)-d.bk|0;s=r+W(q.n2,k)|0;k=e.N;t=W(k,q.iy)-e.bk|0;u=t+W(q.n1,k)|0;V(a.ji,a.di.a,r);V(a.jf,a.di.a,s);V(a.jj,a.di.a+a.e2.a|0,t);V(a.jg,a.di.a+a.e2.a|0,u);v=Be(Bc(r,t),a.di.b);w=Bc(Be(s,u),a.di.b+a.e2.b|0);Ge(f,
a.di.a,v,a.e2.a,w-v|0);BU(f.bg,g.ht.hj);BU(f.P,I4(g.dR,g,q.ly));if(r==s){x=c.dG;V(x,a.di.a-d.bc.a|0,j);if(t>=r){i=a.jf;V(i,i.a,i.b+j|0);k=r;}else{k=r-j|0;i=a.ji;V(i,i.a,i.b-j|0);}Bx(h,d.bc.a,k,x,f.P);}if(t==u){i=c.dG;V(i,e.cB.a,j);if(r>=t){x=a.jg;V(x,x.a,x.b+j|0);}else{t=t-j|0;x=a.jj;V(x,x.a,x.b-j|0);}Bx(h,a.di.a+a.e2.a|0,t,i,f.P);}i=f.s;ABy(h,i.a,i.b,f.q,a.ji,a.jj,a.jf,a.jg,f.P);}o=o+1|0;}if(n<=0)B4(h,0);return;}}
function JA(){var a=this;B.call(a);a.s=null;a.q=null;a.P=null;a.bg=null;}
function LM(){var a=new JA();Xi(a);return a;}
function VS(a,b,c,d){var e=new JA();AK5(e,a,b,c,d);return e;}
function Xi(a){a.s=new Bd;a.q=new Bd;a.P=new BZ;a.bg=new BZ;}
function AK5(a,b,c,d,e){a.s=new Bd;a.q=new Bd;a.P=new BZ;a.bg=new BZ;Ge(a,b,c,d,e);}
function Ge(a,b,c,d,e){V(a.s,b,c);V(a.q,d,e);}
function VR(a){V(a.q,0,0);}
function Le(a){var b;b=a.q;return W(b.a,b.b)?0:1;}
function E_(a,b){return FI(b,a.s,a.q);}
function TM(a,b,c,d){var e;e=a.s;Bx(b,e.a+c|0,e.b+d|0,a.q,a.P);}
function AA1(a,b,c,d,e,f){var g,h,i,j;g=a.s;d=g.a+d|0;e=g.b+e|0;g=a.q;h=a.bg;i=a.P;F0(b,b.im);Gn(b.im,b.Y,d,e,g,b.c6);Mj(b.im,b.Y,c);g=b.im;j=b.Y;Fg(j,g.yK,h);Fg(j,g.yI,i);c=g.s_;j.uniform2f(c,f,0.0);FY(b);}
function AEy(){var a=this;B.call(a);a.eF=null;a.d_=null;a.dp=null;a.b8=null;a.gy=null;}
function AUy(a){var b=new AEy();ASQ(b,a);return b;}
function ASQ(a,b){a.d_=AFo();a.eF=b;a.b8=K9(b);}
function Oi(a,b){var c;a.gy=b;c=a.dp;if(c!==null)c.e7=b.fG;HS(a.b8,b.fG,b.xO);}
function TJ(a){var b,c,d;b=B5(a.b8.cg);while(B6(b)){MF(B9(b));}b=a.d_;c=0;while(true){d=b.cN;if(c>=d.j)break;(Bt(d,c)).U.gw=1;c=c+1|0;}}
function AA7(a){L6(a.d_,a.eF.cH);Gw(a.b8);}
function ASE(a,b){return !ABS(a.d_,b)&&!LT(a.b8,b)?0:1;}
function AWk(a,b,c,d){return !ACU(a.d_,b,c,d)&&!KK(a.b8,b,c,d)?0:1;}
function ATN(a,b,c){var d;d=Nm(a.b8,b,c);if(d!==null)return d;return AEt(a.d_,b,c);}
function APL(a,b,c){return !AHE(a.d_,b,c)&&!Dj(a.b8)?0:1;}
function Ti(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AOQ();i=c.j;j=0;while(j<i){if(f===null){k=(Bt(c,j)).bp;l=Ud(Fv(B3(g.f,k)));m=Vd(g.fO);}else{n=f.data;k=n[j].mS.mw;l=!BW(g.fO,n[j].kc)?C(21):Ud(Fv(B3(g.f,k)));m=Vd(n[j].kc);}if(J(l)>153){o=Cp(l,0,150);n=new L;N(n);H(H(n,o),C(180));l=M(n);}if(J(m)>153){o=Cp(m,0,150);n=new L;N(n);H(H(n,o),C(180));m=M(n);}p=C_(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bt(c,j);}if(f!==null){q=new Z8;q.sG=d;q.sH=o;}else{q=new Z9;q.x7=d;q.x6=n;}ND(h,
m,p,l,q);j=j+1|0;}r=Zk(h);if(a.dp!==null)VI(a);c=new SI;n=a.eF;o=new Sr;o.oQ=a;o.oR=d;AG$(c,n,o);O_(c,r);d=a.gy;ABp(c,d.fG,d.yt);a.dp=ABZ(a.eF);d=ABB(c,a.eF);n=a.gy.fG;Nr(d,n.lS,n.lo);Ld(a.dp,d);d=a.dp;n=new L;N(n);H(H(n,C(181)),e);Iy(d,M(n),a.gy.w8,4.0);d=a.dp;d.e7=a.gy.fG;HX(a.d_,d);d=a.dp;s=(d.U.t.b+CE(d.bB,2.0)|0)+CE(a.eF,2.0)|0;i=(c.dN+c.eA|0)+c.gr|0;t=CE(c.bV,5.0);e=B7(EW(t,b.a,c.bV.cf.a-i|0),EW(s,b.b,c.bV.cf.b-c.cZ.b|0));Rz(c);ADb(c);s=(c.dN+c.eA|0)+c.gr|0;b=c.bV;i=(b.cf.a-e.a|0)-CE(b,5.0)|0;b=c.bV;t
=(b.cf.b-e.b|0)-CE(b,5.0)|0;d=B7(Bc(s,i),Bc(c.cZ.b,t));F1(a.dp,e,d);Gh(a.eF,c);}
function VI(a){J7(a.d_,a.dp);L9(a.dp);a.dp=null;}
function SZ(a,b){var c;c=new SC;c.pq=a;c.pr=b;return c;}
function Kq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!Dj(a.b8)){h=a.b8;i=b.i;b=new VK;b.fx=a;b.bu=c;b.qw=g;b.hq=e;b.oe=f;b.kV=d;j=L5();e=b.bu.d;d=Eq(e);e=GG(e);f=b.bu.fm;if(SS(f,d,e)!==null){k=new Ub;k.pv=b;k.pw=i;DJ(j,C(182),k);}if(Nc(f,d,e)!==null){k=new Uc;k.tn=b;k.to=i;DJ(j,C(183),k);}if(WF(f,d,e)!==null){e=new Ua;e.o0=b;e.o1=i;DJ(j,C(184),e);}e=new T_;e.xr=b;e.xq=i;DJ(j,C(185),e);G4(b);if(MB()){if(!b.bu.ef){e=new Td;e.xX=b;DJ(j,C(186),e);}e=new Te;e.rw=b;DJ(j,C(187),e);if(!b.bu.ef&&AAA(G4(b))){e=new Tc;e.u_
=b;DJ(j,C(188),e);}}e=L5();l=R(BC,4).data;l[0]=C(189);l[1]=C(178);l[2]=C(190);l[3]=C(191);m=l.length;n=0;while(n<m){f=l[n];g=new Q4;g.ps=b;g.pt=f;DJ(e,f,g);n=n+1|0;}Fm(j,C(192),G3(e));d=L5();l=R(Cm,3);o=l.data;g=b.kV;BO(g);p=new OQ;p.q6=g;o[0]=CS(C(193),p);g=b.kV;BO(g);p=new OR;p.so=g;o[1]=CS(C(194),p);g=b.kV;BO(g);p=new OP;p.yV=g;o[2]=CS(C(195),p);IZ(d,C(196),EV(l),A2r);l=R(Cm,2);o=l.data;g=b.hq;BO(g);p=new Zr;p.s9=g;o[0]=CS(C(197),p);g=b.hq;BO(g);p=new Zq;p.wX=g;o[1]=CS(C(198),p);Fm(d,C(199),EV(l));g=new QZ;g.qd
=b;IZ(d,C(200),g,A2r);if(b.bu.bS.cH.kb){l=R(Cm,2);o=l.data;g=new UN;g.qC=b;o[0]=CS(C(201),g);g=new UO;g.r7=b;o[1]=CS(C(202),g);Fm(d,C(203),EV(l));}Fm(j,C(204),G3(d));g=L5();Fm(g,C(205),AEc(b));e=new R3;e.yY=b;DJ(g,C(206),e);e=new NR;e.qX=b;IZ(g,C(207),e,A2r);Fm(j,C(208),G3(g));FQ(h,i,G3(j),SZ(a,c));}}
function AUa(a,b,c,d){return L2(a.d_,b,c,d);}
function AC9(b){var c;c=new AAM;c.oH=b;return c;}
var Ic=G(0);
function ARE(a){}
function AM_(a){}
var Sh=G(0);
function ADR(){var a=this;B.call(a);a.bc=null;a.cB=null;a.bS=null;a.W=null;a.kq=null;a.y5=0;a.od=null;a.c1=null;a.m_=0;a.gp=0;a.kG=null;a.h9=null;a.cl=null;a.N=0;a.d=null;a.fm=null;a.cV=null;a.iU=null;a.gc=null;a.xc=0;a.uH=0;a.cS=0;a.ck=0;a.cv=0;a.fw=null;a.fq=null;a.fs=null;a.hO=0;a.i8=0;a.Cp=0;a.zW=0;a.kP=0;a.j8=0;a.nu=0;a.d3=0;a.c3=null;a.ff=null;a.ef=0;a.bP=0;a.zx=null;a.iT=null;a.tS=null;a.vP=null;a.l2=null;a.bk=0;a.hw=null;a.sJ=0;a.qL=null;a.wV=null;}
function AD4(a,b){var c=new ADR();ATk(c,a,b);return c;}
function ATk(a,b,c){var d,e,f,g;a.bc=new Bd;a.cB=new Bd;a.y5=0;a.od=R(Bg,10);a.c1=ANT();a.gp=16;a.kG=C(160);a.cl=R(L0,4);a.d=AYE(R(BC,0),null,null);d=new AAi;d.sb=CP(R(La,0));d.y1=CP(R(La,0));d.pb=CP(R(Vs,0));d.xJ=CP(R(R9,0));d.xb=CP(R(Hx,0));d.wP=CP(R(UV,0));a.fm=d;a.gc=R(FL,0);a.fw=B7(1,0);a.fq=Jh();a.fs=Jh();a.hO=0;a.i8=1;a.kP=1;a.j8=1;a.nu=1;a.d3=3;a.c3=AHz();a.ff=C(209);a.ef=0;a.bP=0;e=DX();BO(e);d=new PD;d.Bz=e;a.iT=d;a.bk=0;e=new PC;e.oL=a;a.qL=e;e=new PB;e.tQ=a;a.wV=e;a.bS=b;a.W=b.cH;a.kq=c;c=new Xx;f
=a.cl;g=b.cu;c.kI=new BZ;c.kB=new Bd;c.lZ=new Bd;b=new BZ;c.g8=b;c.l1=f;c.ob=g;L7(b);a.hw=c;f=a.od.data;b=new PA;b.xn=a;f[1]=b;b=new PI;b.qE=a;f[2]=b;b=new PG;b.u3=a;f[3]=b;b=new PF;b.zb=a;f[4]=b;b=new PE;b.qi=a;f[5]=b;b=new Pz;b.uf=a;f[6]=b;}
function J4(a,b,c,d){var e,f,g;e=a.hw;L7(e.g8);f=e.g8;YV(f,d,f);e.u4=O5(e.g8);f=e.g8;g=f.bq+f.bf+1.5|0;e.yr=g;V(e.lZ,0,g*2|0);Ci(a.bc,b);Ci(a.cB,c);Vf(a,b,c,d);}
function Y8(a,b,c){a.tS=b;a.vP=c;}
function Vf(a,b,c,d){var e;a.cS=Cf(80.0,d);a.ck=Cf(1.0,d);a.cv=Cf(10.0,d);if(!a.bP)Ci(a.bS.dG,a.bc);else V(a.bS.dG,(b.a+c.a|0)-JX(a)|0,b.b);UA(a.c3,a.bS.dG,JX(a),c.b,d);b=a.c1;e=Cf(2.0,d);b.eE.q.a=e;Th(a,a.kG,a.gp);Mq(a);}
function AMY(a){a.m_=1;Mk(a);}
function AJu(a){a.m_=0;}
function Mk(a){RP(a.c1,Km(Gk(a)));}
function KZ(a,b){var c,d;a.cV=b;c=a.c1;d=b.bD.y0;BU(c.eE.P,d);c=a.fq;d=b.bD;Hr(c,d.mu,d.mG);c=a.fs;b=b.bD;Hr(c,b.mu,b.mG);}
function Pi(a){JW(a,a.h9.n8,a.gp+1|0);}
function AA5(a){var b;b=a.gp;if(b<=7)return;JW(a,a.h9.n8,b-1|0);}
function SM(a){a.iU=CM(a.iU,Eh(a.W,1024,a.N,a.bS.cu));}
function Qc(a,b){JW(a,b,a.gp);}
function ATi(a,b){NM(a.bS,b);}
function JW(a,b,c){if(a.bS.b3!==0.0){Th(a,b,c);H5(Gk(a));}a.gp=c;a.kG=b;}
function LB(a,b){var c,d,e,f;c=a.hw;b=a.bS.cu;c.ob=b;if(a.iU.lq!=b)SM(a);d=a.gc.data;b=d.length;e=0;while(e<b){f=d[e].bU;if(f!==null)f.hu=1;e=e+1|0;}KM(a.c3);Mq(a);}
function Th(a,b,c){var d,e,f,g,h,i,j;d=Cf(c,a.bS.b3);e=a.h9;f=e!==null?e.rQ:0;if(!(d==f&&BW(b,a.kG))){KM(a.c3);g=a.gc.data;c=g.length;f=0;while(f<c){AAE(g[f]);f=f+1|0;}g=a.d.f.z.data;c=g.length;f=0;while(f<c){EK(g[f]);f=f+1|0;}g=a.cl.data;h=HU(0,0);e=a.W;i=d;g[h]=Hp(e,b,i,300,0);a.cl.data[HU(0,1)]=Hp(a.W,b,i,300,2);a.cl.data[HU(1,0)]=Hp(a.W,b,i,600,0);a.cl.data[HU(1,1)]=Hp(a.W,b,i,600,2);e=a.cl.data[HU(0,0)];a.h9=e;c=FB(e);f=C6(c*1.25);a.N=f;e=a.hw;e.zn=f;g=a.cl.data;j=g[0];e.yd= -( -((f+j.c9+j.eg)/2.0)|0)|
0;a.c1.eE.q.b=FB(g[0]);SM(a);f=a.N;h=ZV(a.c1);e=new L;N(e);b=H(H(e,C(210)),b);BL(b,32);U(H(U(H(U(H(U(b,d),C(211)),c),C(175)),f),C(212)),h);$rt_globals.console.info($rt_ustr(M(e)));if(A2s){c=LI(a.cl.data[0],a.N);b=new L;N(b);U(H(b,C(213)),c);$rt_globals.console.info($rt_ustr(M(b)));}a.d.hI=GX(FX(a),a.d.y,a.W.ci,a.cl);Hw(a);Mq(a);}}
function NG(a){return W(CD(a.d.f)+5|0,a.N);}
function Ie(a){return Be(NG(a)-a.cB.b|0,0);}
function VM(a){return Be(a.hO-DC(a)|0,0);}
function DC(a){var b;b=!a.bP?0:Da(a)+a.cv|0;return Be(1,(a.cB.a-a.cS|0)-b|0);}
function JX(a){return a.bP?a.cS:a.cS-a.cv|0;}
function DP(a){return a.cB.b;}
function L3(a,b){var c,d,e;c=a.d.f;if(Wp(c)&&b-c.vf>0.03125?1:0){d=a.sJ;e=a.d.f.cr;if(d!=e){a.sJ=e;TK(a);}}VD(a);d=Mc((a.bk+a.Cp|0)-a.zW|0,Ie(a));e=a.bk==d?0:1;if(e)Gb(a,d);return !VQ(a.c1,b)&&!e&&!a.y5?0:1;}
function Gb(a,b){var c,d;c=Mc(b,Ie(a));if(c!=a.bk){a.bk=c;a.d.i4=c/a.N;d=a.vP;if(d!==null)d.lr(c);}}
function Jp(a,b){var c,d;c=Mc(b,VM(a));d=a.d;if(c!=d.du){d.du=c;d=a.tS;if(d!==null)d.lr(c);}}
function JP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=Jk(a.cB.b,a.N)+7|0;c=a.gc;if(c.data.length<b)a.gc=AC_(b,c,a.hw,a.xc,a.uH,a.d.f);B4(a.W,0);T2(a.W,a.bc,a.cB);d=(a.N-ZV(a.c1)|0)/2|0;e=(a.d.hI-(VG(a.c1)/2|0)|0)-a.d.du|0;f=!a.bP?a.cS:(a.ck+a.cv|0)+Da(a)|0;XP(a.c1,f+e|0,(d+W(a.d.u,a.N)|0)-a.bk|0);g=CD(a.d.f);h=F_(a);i=Hn(a);a.xc=h;a.uH=i;j=!a.bP?a.bc.a+a.cS|0:((a.bc.a+a.ck|0)+a.cv|0)+Da(a)|0;k=h;while(k<=i&&k<g){l=B3(a.d.f,k);m=X5(a,k);ABA(m,l,a.iU,a.W,a.N,DC(a),a.d.du);n=m.bU;a.hO=Be(a.hO,Fi(l)+(40.0
*a.bS.b3|0)|0);o=W(a.N,k)-a.bk|0;p=CW(a)===null?null:(CW(a)).data[k];b=a.bc.b+o|0;q=a.W;d=DC(a);f=a.N;o=a.d.du;l=a.cV;r=AFB(Bj(a),k);if(r!==null){if(r.b==(-1))r.b=n.S;r.a=GX(n,r.a,a.W.ci,a.cl);r.b=GX(n,r.b,a.W.ci,a.cl);}n=a.d;ACY(m,b,j,q,d,f,o,l,r,n.ir,n.h8,n.u!=k?0:1,CW(a)===null?0:1,p);k=k+1|0;}s=a.bS.dG;k=h;while(k<=i&&k<g&&a.kP){m=X5(a,k);o=W(a.N,k)-a.bk|0;t=AGI(Bj(a),k);q=a.cV.bD.ta;u=a.d.u==k&&CW(a)===null?1:0;if(t)q=a.cV.bD.kJ;else if(CW(a)!==null&&k<(CW(a)).data.length&&(CW(a)).data[k]!==null){q=a.cV;q
=I4(q.dR,q,(CW(a)).data[k].gA);}else if(u)q=a.cV.bD.jm;AC6(m,a.W,j,a.bc.b+o|0,a.N,s,a.d.du,DC(a),q);k=k+1|0;}if(a.i8){v=Bc(i+1|0,g);AEW(a,W(a.N,v)-a.bk|0);}AFX(a);AE8(a,h,i);if(a.j8)AHU(a,h,i,g);if(a.m_&&e>=(( -VG(a.c1)|0)/2|0)){m=a.c1;q=a.cB;if(ACI(m.eE.s,0,0,q))Xh(a.c1,a.W,a.bc);}AFx(a);AED(a);Hv(a.W);}
function AHU(a,b,c,d){var e,f,g,h,i,j;while(b<=c&&b<d){e=CW(a)!==null&&b<(CW(a)).data.length?(CW(a)).data[b]:null;if(e!==null){f=a.cV;f=I4(f.dR,f,e.gA);}else f=CW(a)!==null?a.cV.bD.eD:a.cV.bD.jm;if(!(a.d.u!=b&&e===null)){a.fw.a=!a.bP?(a.cv-a.ck|0)-a.d3|0:((a.cv+Da(a)|0)+a.ck|0)-a.d3|0;g=a.fw;h=a.N;g.b=h;i=a.bP?0:(a.cS-a.cv|0)+a.ck|0;h=W(h,b)-a.bk|0;e=a.W;j=a.bc;Bx(e,j.a+i|0,j.b+h|0,g,f);}b=b+1|0;}}
function AE8(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cB.b;e=Bc(d,W(CD(a.d.f),a.N)-a.bk|0);f=a.c3;g=a.bk;h=CW(a)!==null?(-1):a.d.u;i=a.W;j=a.cV;T2(i,f.fT,f.fd);L4(f,i,b,d);V4(f,b);VC(f,g,e,j,i);k=j.ht;if(e<d){l=f.fT;Bx(i,l.a,l.b+e|0,B7(f.fd.a,d-e|0),k.hj);}if(b<=h&&h<=c){l=j.ht;c=h/20|0;m=f.cJ;m=Bt(m,c%m.j|0);k=f.fT;d=W(f.cJ.j,f.ke);e=m.fb.b;b=((m.kM.b-(g%d|0)|0)+d|0)%d|0;if((b+e|0)>d)b= -(g%Dd(m.bs)|0)|0;c=h%m.d1|0;e=m.R;b=b+W(c,e)|0;if(b<( -e|0))b=b+d|0;V(m.dQ,m.fb.a,e);f=m.eK;c=h%m.d1|0;d=m.R;Cc(f,0.0,W(c,d),m.fb.a,
d);E6(m,i,b,k,l.qQ,l.oT);}Hv(i);}
function F_(a){return Bc(a.bk/a.N|0,CD(a.d.f)-1|0);}
function Hn(a){return Bc(((a.bk+DP(a)|0)-1|0)/a.N|0,CD(a.d.f)-1|0);}
function Mq(a){Rm(a.c3,a.cl.data[0],a.N,a.bS.cu,a.W);L4(a.c3,a.W,F_(a),DP(a));}
function X5(a,b){var c;c=a.gc.data;return c[b%c.length|0];}
function Y5(a,b){var c,d,e,f;c=EW(0,J(a.ff),O3(b));if(!c)b=null;else{b=C(63);if(c<0){b=new BP;Z(b);K(b);}if(c!=1){d=b.b9.data.length;if(d&&c){e=B1(W(d,c));d=0;f=0;while(f<c){R4(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Nq(e);}else b=A06;}}return b;}
function Qh(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BD(i);k=A0y(i).data;H8(j,c);c=0;l=k.length;if(c>l){f=new BP;Z(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.cr=o.cr+1|0;p=R(Hk,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AVd(h[m],n[m],k[m],b[m],f.bp,f.by);m=m+1|0;}BF(o.id,p);c=0;while(c<i){b=e.data;K3(o,h[c],n[c],k[c],b[c]);g.oi(CQ(h[c]),b[c]);c=c+1|0;}}
function AH1(a){var b;if(Dq(Bj(a)))GU(a);else{b=a.d;Ob(b.f,b.u,b.y);}Hw(a);En(a);return 1;}
function Dw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ef)return 0;if(Dq(Bj(a)))GU(a);c=M6(XA(b,C(214),C(21)),C(215),(-1));d=c.data;b=a.d;e=b.f;f=b.u;g=b.y;ABm(e,f,g,c);h=d.length;if(!h)b=A06;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B1(i+W(h-1|0,J(C(215)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(215))){m=l+1|0;c[l]=P(C(215),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Nq(k);}F2(e,f,g,0,b);b=a.d;f=b.u;m
=(f+h|0)-1|0;CI(a,m,m!=f?J(d[h-1|0]):b.y+J(d[0])|0,0);F8(a);En(a);return 1;}
function GU(a){var b,c,d;b=D7(Bj(a));c=a.d.f;d=Bj(a);Or(c,d,YP(c,d));CI(a,b.J,b.bb,0);F8(a);En(a);}
function F8(a){var b,c;(Bj(a)).dn=0;b=(Bj(a)).bM;c=a.d;Cb(b,c.u,c.y);b=(Bj(a)).bC;c=a.d;Cb(b,c.u,c.y);}
function Da(a){return a.h9.nO|0;}
function AEW(a,b){var c,d;c=a.cB.b;if(b<c){d=a.bS.dG;d.b=c-b|0;d.a=!a.bP?DC(a)+a.d3|0:DC(a)+a.ck|0;c=!a.bP?(a.bc.a+a.cS|0)-a.d3|0:(((a.bc.a+a.cv|0)+Da(a)|0)+a.ck|0)-a.d3|0;Bx(a.W,c,a.bc.b+b|0,d,a.cV.bD.eD);}}
function AFx(a){var b;b=a.bP?a.bc.a+Da(a)|0:a.bc.a+a.cB.a|0;JC(a.fq,a.bk,a.bc.b,DP(a),NG(a),b,Da(a));b=!a.bP?a.bc.a+a.cS|0:((a.bc.a+a.ck|0)+a.cv|0)+Da(a)|0;SX(a.fs,a.d.du,b,DC(a),a.hO,a.bc.b+DP(a)|0,Da(a));}
function AED(a){var b,c;b=Tm(a.fq);c=Tm(a.fs);if(!(!b&&!c)){B4(a.W,1);if(b)GW(a.fq,a.W);if(c)GW(a.fs,a.W);if(b)G5(a.fq,a.W);if(c)G5(a.fs,a.W);}}
function AFX(a){var b,c,d,e;b=a.fw;c=a.cB;b.b=c.b;b.a=a.ck;d=!a.bP?a.cS-a.cv|0:(c.a-JX(a)|0)-a.ck|0;b=a.W;c=a.bc;Bx(b,c.a+d|0,c.b,a.fw,a.cV.bD.v6);a.fw.a=!a.bP?(a.cv-a.ck|0)-a.d3|0:((a.cv+Da(a)|0)+a.ck|0)-a.d3|0;e=a.bP?0:(a.cS-a.cv|0)+a.ck|0;b=a.W;c=a.bc;Bx(b,c.a+e|0,c.b,a.fw,a.cV.bD.eD);}
function Mc(b,c){return Bc(Be(0,b),c);}
function Gk(a){return a.bS.gt;}
function JV(a,b){var c,d,e,f;c=FH(b);d=new L;N(d);H(H(d,C(216)),c);$rt_globals.console.info($rt_ustr(M(d)));O8(Gk(a),FH(b));CI(a,0,0,0);c=new PU;c.tm=a;c.tl=b;d=DX();BO(d);e=new PW;e.wF=d;d=AG8(e);e=new Z4;e.p0=c;c=b.fM;if(c!==null)c.text().then(Bl(e,"f"),Bl(d,"f"));else{b=b.hs.getFile();f=new Z6;f.ry=e;f.rz=d;b.then(Bl(f,"f"),Bl(d,"f"));}}
function In(a,b,c,d,e){if(Iz(a,e))return 1;if(c&&d)return 1;if(c)Gb(a,a.bk+((W(b,a.N)*12|0)/10|0)|0);else if(!d){HW(a,a.d.u+b|0,e);Wz(a);}return 1;}
function Ui(a,b,c,d){var e,f,g;if(Iz(a,d))return 1;e=FX(a);if(!c)f=a.d.y+b|0;else if(b>=0)f=Hg(e,a.d.y);else{b=a.d.y;if(!b)f=(-1);else{c=Jw(e,b);if(c>0&&e.dY.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.dY.data[c-1|0];}}if(f>e.S){e=a.d;if((e.u+1|0)<CD(e.f))CI(a,a.d.u+1|0,0,d);}else if(f>=0)Dk(a,f,d);else{e=a.d;b=e.u;if(b>0){g=(B3(e.f,b-1|0)).S;CI(a,a.d.u-1|0,g,d);}}Yw(a);return 1;}
function Iz(a,b){if(Dq(Bj(a))&&!b){F8(a);Hw(a);return 1;}if(!(b&&Dq(Bj(a))))F8(a);return 0;}
function CI(a,b,c,d){a.d.y=c;return HW(a,b,d);}
function HW(a,b,c){var d;d=a.d;d.u=EW(0,b,CD(d.f)-1|0);return Dk(a,a.d.y,c);}
function Dk(a,b,c){var d,e;a.d.y=EW(0,b,(FX(a)).S);a.d.hI=a.bS.b3===0.0?0:GX(FX(a),a.d.y,a.W.ci,a.cl);Mk(a);Hw(a);if(c)(Bj(a)).dn=1;d=Bj(a);e=a.d;Ml(d,e.u,e.y);(Bj(a)).dn=0;return 1;}
function Nt(a,b){var c;c=ALy(Bj(a));Dk(a,b,0);IF(Bj(a),c);}
function Hw(a){Wz(a);Yw(a);}
function Wz(a){var b,c,d,e,f;b=a.bk;c=b+DP(a)|0;d=a.d.u;e=a.N;d=W(d,e);f=d+e|0;if(d<(b+e|0))Gb(a,d-e|0);else if(f>(c-e|0))Gb(a,(f-DP(a)|0)+a.N|0);}
function Yw(a){var b,c,d,e,f;b=C6(a.bS.b3*30.0);c=a.d.du;d=c+DC(a)|0;e=a.d.hI;f=e+b|0;if(e<(c+b|0))Jp(a,e-b|0);else if(f>(d-b|0))Jp(a,(f-DC(a)|0)+b|0);}
function IN(a,b){var c,d;CI(a,b.bp,b.by,0);c=Hg(FX(a),a.d.y);Cb((Bj(a)).bC,a.d.u,c);b=(Bj(a)).bM;d=a.d;Cb(b,d.u,d.y);}
function E9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.bc;e=c-d.a|0;f=EW(0,((b.b-d.b|0)+a.bk|0)/a.N|0,CD(a.d.f)-1|0);g=!a.bP?a.cS:(a.ck+a.cv|0)+Da(a)|0;h=Be(0,(e-g|0)+a.d.du|0);b=B3(a.d.f,f);d=a.W.ci;i=a.cl;if(!(b.eO!==null&&!b.gs))Lr(b,d,i);j=b.eO;e=b.p.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=Wl(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.p.data.length)k=b.S;else{j=Uq(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.p.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A2t){b=new L;N(b);U(H(U(H(U(H(b,C(217)),e),C(218)),h),C(219)),m);$rt_globals.console.info($rt_ustr(M(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DU(f,k);}
function AAK(a,b){var c,d;c=a.d;d=b.bp;c.u=d;c.y=b.by;c.hI=GX(B3(c.f,d),a.d.y,a.W.ci,a.cl);Mk(a);}
function FX(a){var b;b=a.d;return B3(b.f,b.u);}
function KH(a,b,c){var d,e;d=C6((a.N*4|0)*c/150.0);e=C6(b);if(d)Gb(a,a.bk+d|0);if(e)Jp(a,a.d.du+e|0);return 1;}
function VL(a,b,c){(Bj(a)).dn=0;return 1;}
function N3(a,b,c){var d;if(c)return null;d=FZ(a.fq,b.i,a.qL,1);if(d!==null)return d;d=FZ(a.fs,b.i,a.wV,0);if(d!==null)return d;Jv(a);AAK(a,E9(a,b.i));LY(a.d);if(!b.bL&&!(Bj(a)).dn){b=(Bj(a)).bM;d=a.d;Cb(b,d.u,d.y);}(Bj(a)).dn=1;b=Bj(a);d=a.d;Ml(b,d.u,d.y);b=new O0;b.s1=a;return b;}
function Og(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cD){b=b.i;e=E9(a,b);f=Jg(a.d.f,e.bp,e.by);g=Vu(a,f);h=Nc(a.fm,Eq(a.d),GG(a.d));if(h!==null){i=a.d;c=e.bp;d=e.by;e=new RX;e.AF=a;e.AH=b;e.AG=g;h.uz(i,c,d,e,a.iT);}else{e=Cw(a.d.f.dJ,f);if(e!==null){IN(a,e);c=1;}else{e=Cw(a.d.f.dq,f);if(e!==null&&!Ey(e)){if(e.j!=1){Ti(a.kq,b,e,a,g);c=1;}else{IN(a,Bt(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(E9(a,b.i)).bp;g=B3(a.d.f,c);c=Gv(g,a.d.y);d=Hg(g,a.d.y);b=M0(g,c);if((d-1|0)==g.S){Cb((Bj(a)).bM,
a.d.u,O3(g));Cb((Bj(a)).bC,a.d.u,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b9.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.y;if(c==j){c=Gv(g,c-1|0);d=Hg(g,c);}else{if(d!=j){RJ(Bj(a),a.d.u);break b;}c=Gv(g,d+1|0);d=Hg(g,c);}}}Cb((Bj(a)).bM,a.d.u,c);(Bj(a)).dn=1;CI(a,a.d.u,d,0);(Bj(a)).dn=0;Jv(a);}}break a;case 3:break;default:break a;}RJ(Bj(a),a.d.u);TZ(a.d.g2);Jv(a);}}return 1;}
function PK(a,b){var c,d,e,f,g,h,i,j,k;c=a.bS.cO;if(Ga(a.fq,b.i,c))return 1;if(Ga(a.fs,b.i,c))return 1;d=a.c3;if(FI(b.i,d.fT,d.fd)&&Gr(c)?1:0)return 1;e=b.i;f=!a.bP?a.bc.a+a.cS|0:((a.bc.a+a.cv|0)+a.ck|0)+Da(a)|0;a:{g=a.bc.b;h=DC(a);i=DP(a);j=e.a;if(f<=j&&j<(f+h|0)){k=e.b;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Gr(c);if(b.cD){e=E9(a,b.i);e.by=Gv(B3(a.d.f,e.bp),e.by);b=a.d.f;if(!Kt(b.dJ,e)&&!Kt(b.dq,e)?0:1)return DE(c,C(220));}return DE(c,C(189));}
function AWC(a,b){var c,d,e,f,g;c=b.cD;if(c&&b.bo==65){c=CD(a.d.f)-1|0;d=Gd(a.d.f,c);Cb((Bj(a)).bM,0,0);Cb((Bj(a)).bC,CD(a.d.f)-1|0,d);return 1;}if(c&&b.bo==80){JE(a.d);return 1;}if(!a.ef&&c&&b.bo==90){if(Dq(Bj(a)))F8(a);b=a.d.f;b.cr=b.cr+1|0;e=b.id;d=e.j;if(!d)e=null;else{f=(EN(e,d-1|0)).data;e=OM(b,f[0]);c=1;while(c<f.length){OM(b,f[c]);c=c+1|0;}}if(e!==null){CI(a,e.a,e.b,0);En(a);}return 1;}if(!c&&!b.de){if(Bp(b.d4,C(221))){Dw(a,C(222));Dk(a,a.d.y-1|0,0);c=1;}else if(Bp(b.d4,C(223))){Dw(a,C(224));Dk(a,a.d.y
-1|0,0);c=1;}else if(Bp(b.d4,C(35))){Dw(a,C(225));Dk(a,a.d.y-1|0,0);c=1;}else if(Bp(b.d4,C(226))){Dw(a,C(227));Dk(a,a.d.y-1|0,0);c=1;}else if(Bp(b.d4,C(228))){Dw(a,C(229));Dk(a,a.d.y-1|0,0);c=1;}else if(!Bp(b.d4,C(230)))c=0;else{Dw(a,C(231));Dk(a,a.d.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.de&&!b.cD)){d=b.bo;if(d>=48&&d<=57){c=d-48|0;e=a.od.data[c];if(e!==null)e.n();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bo){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AEx(a,b))return 1;if(AFp(a,b))return 1;c=b.cD;if(c&&b.bo==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bo;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.de&&!b.j3)return J(b.d4)>0&&Dw(a,b.d4)?1:0;return 0;}return 0;}
function VD(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=F_(a);d=Hn(a);if(b.eJ!=3&&b.g3==3){e=Xu(b.mx);f=new OG;f.sX=c;f.sW=d;g=new SL;g.st=f;while(!g.lB&&W8(e,g)){}if(!g.lB&&Bp(C(178),Eq(b))){c=Be(0,c-100|0);d=Bc(CD(b.f)-1|0,d+100|0);BF(b.mx,B7(c,d));h=BD(3);i=h.data;i[0]=Fh(b.f,c);e=b.f;j=0;d=Bc(d+1|0,e.z.data.length);k=0;while(k<d){j=j+Gd(e,k)|0;if(k!=(e.z.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.v2=EO();e=b.dF;l=new Yy;l.sc=b;i=R(B,3);m=i.data;m[0]=Ez(b.f);m[1]=h;b=b.f.c7;g=BI();VZ(b,b.c5,g);h
=BD(3*g.j|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bt(g,o);d=k+1|0;n[k]=b.bX;q=d+1|0;n[d]=b.b1;k=q+1|0;n[q]=b.fi;o=o+1|0;}m[2]=h;CO(e,l,C(232),i);}}}
function AAH(a){JE(a.d);}
function TK(a){AGj(a.d);}
function Hq(a,b,c){var d,e,f,g,h,i;if(c&&a.ef)return 0;d=D7(Bj(a));e=d.J;if(Dq(Bj(a))){f=a.d.f;g=Bj(a);h=YP(f,g);if(c)Or(f,g,h);if(c){CI(a,d.J,d.bb,0);F8(a);En(a);}}else{h=FO(Fv(a.d.f.z.data[e]),C(215));i=Bc(CD(a.d.f)-1|0,e);Cb((Bj(a)).bC,i,0);if(e>=(CD(a.d.f)-1|0))Cb((Bj(a)).bC,i,Gd(a.d.f,i));else Cb((Bj(a)).bM,i+1|0,0);if(c)GU(a);else CI(a,e,0,0);}b.g(h);return 1;}
function AFp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.ef)return 0;a:{switch(b.bo){case 8:if(Dq(Bj(a))){GU(a);c=1;}else{b=a.d;d=b.y;if(!d&&!b.u)c=1;else{if(d){e=b.u;c=d-1|0;Ob(b.f,e,c);}else{e=b.u-1|0;c=Gd(b.f,e);b=a.d.f;L8(b,e);F2(b,e,Gd(b,e),1,C(215));}En(a);c=CI(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dq(Bj(a)))Dw(a,a.ff);else{f=D7(Bj(a));g=F3(Bj(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BD(e);i=h.data;j=R(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ff;d=d+1|0;e=l;}b=new YK;m=a.d;AEZ(b,m.u,m.y);m=new Ws;m.uT
=a;Qh(a,h,0,0,j,b,m);f.bb=f.bb+J(a.ff)|0;g.bb=g.bb+J(a.ff)|0;Nt(a,a.d.y+J(a.ff)|0);En(a);}c=1;}else b:{if(!Dq(Bj(a))){b=a.d;f=B3(b.f,b.u);if(f.p.data.length>0){g=Y5(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.u;b=DU(e,m.y);n.cr=n.cr+1|0;o=n.id;h=R(Hk,1);h.data[0]=AVd(e,0,1,g,b.bp,b.by);BF(o,h);K3(n,e,0,1,g);GS(f,0,J(g));Nt(a,a.d.y-J(g)|0);}}else{b=D7(Bj(a));f=F3(Bj(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BD(c);k=h.data;j=R(BC,c);q=j.data;g=a.d;e=g.y;l=g.u;c=0;while(p<=f.J){g=B3(a.d.f,p);if(g.p.data.length>0){g=Y5(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JI(h,c);j=Dp(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.bb=Be(0,b.bb-J(g)|0);if(p==f.J){f.bb=Be(0,f.bb-J(g)|0);Nt(a,a.d.y-J(g)|0);}d=d+1|0;}b=DU(l,e);f=new VP;f.s$=a;Qh(a,h,0,1,j,b,f);}En(a);c=1;}break a;case 13:if(Dq(Bj(a)))GU(a);b=a.d;EK(B3(b.f,b.u));b=a.d;AGT(b.f,b.u,b.y);En(a);c=CI(a,a.d.u+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AH1(a);}return c;}
function AEx(a,b){var c,d,e,f;a:{switch(b.bo){case 33:c=b.cD?HW(a,Jk(a.bk,a.N),b.bL):In(a,2-YX(DP(a),a.N)|0,0,b.de,b.bL);break a;case 34:c=!b.cD?In(a,YX(DP(a),a.N)-2|0,0,b.de,b.bL):HW(a,((a.bk+DP(a)|0)/a.N|0)-1|0,b.bL);break a;case 35:if(!Iz(a,b.bL)&&!Dk(a,(FX(a)).S,b.bL)){c=0;break a;}c=1;break a;case 36:if(!Iz(a,b.bL)&&!Dk(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cD;if(c&&b.de){Jv(a);d=a.d.g2;e=d.dA;if(e<=0)d=null;else{f=d.e8.data;c=e-1|0;d.dA=c;d=f[c];}if(d===null)c=1;else{CI(a,MM(d),KB(d),0);IF(Bj(a),
d.k9);c=1;}break a;}c=Ui(a,(-1),c,b.bL);break a;case 38:c=In(a,(-1),b.cD,b.de,b.bL);break a;case 39:c=b.cD;if(c&&b.de){d=a.d.g2;e=d.dA;if(e==(d.e3-1|0))d=null;else{f=d.e8.data;c=e+1|0;d.dA=c;d=f[c];}if(d===null)c=1;else{CI(a,MM(d),KB(d),0);IF(Bj(a),d.k9);c=1;}break a;}c=Ui(a,1,c,b.bL);break a;case 40:c=In(a,1,b.cD,b.de,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bj(a)).bC;d=a.d;Cb(b,d.u,d.y);}if(c)LY(a.d);return c;}
function Jv(a){var b,c,d,e,f,g,h;b=a.d;c=b.g2;d=c.dA;c=d<0?null:c.e8.data[d];if(c!==null&&b.u==MM(c)&&a.d.y==KB(c))return;c=a.d;e=c.g2;b=new LS;d=c.u;f=c.y;c=Bj(a);b.mN=DU(d,f);g=ALy(c);b.k9=g;g.dn=0;f=e.dA;h=e.e3;if(f==(h-1|0))X7(e,b);else{d=f+1|0;while(d<h){TZ(e);d=d+1|0;}X7(e,b);}e.dA=e.dA+1|0;}
function En(a){a.d.f.vf=Km(Gk(a));}
function I5(a,b){var c,d,e,f;a.zx=null;Mo(a.c3,null);ABg(a.d);c=a.d;a.d=b;R8(c,null,null);R8(b,a,Gk(a));d=(Cx(a.fm.xb)).data;e=d.length;f=0;while(f<e){d[f].oi(c,b);f=f+1|0;}a.bk=Gq(b.i4*a.N);}
function Vu(a,b){var c;c=ME(a.d.f,b);if(c===null)return C(21);return c.v;}
function DT(a,b){return FI(b,a.bc,a.cB);}
function KI(a,b){var c,d,e,f,g;a.d.sL=b;if(b===null){Bq(BA(),C(233));Mo(a.c3,null);}else{b=b.data;c=DD(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gA<<24>>24;e=e+1|0;}Mo(a.c3,c);}}
function Ut(a,b){a.d.oP=b;}
function CW(a){return a.d.sL;}
function Bj(a){return a.d.qV;}
function XO(a){var b;b=a.l2;if(b!==null)b.g(a);}
var K0=G(0);
function Xp(){B.call(this);this.xT=null;}
function APw(a,b){var c;c=a.xT;Yd(c,c.A,c.E);}
function Xq(){B.call(this);this.tx=null;}
function AJM(a,b){var c;c=a.tx;Yd(c,c.E,c.A);}
function Xr(){B.call(this);this.pz=null;}
function APJ(a,b){ABr(a.pz,b);}
function Xk(){B.call(this);this.wS=null;}
function AQL(a,b){ABr(a.wS,b);}
function Xm(){B.call(this);this.tc=null;}
function AV0(a,b){return AHb(a.tc,b);}
function IJ(){var a=this;B.call(a);a.lg=null;a.sE=null;a.rD=null;}
function A2u(a,b){var c=new IJ();Op(c,a,b);return c;}
function A2v(a,b,c){var d=new IJ();Z5(d,a,b,c);return d;}
function Op(a,b,c){Z5(a,b,null,c);}
function Z5(a,b,c,d){a.lg=b.cb;a.sE=c;a.rD=d;}
function ANc(a,b){var c,d;if(b.cD&&b.bo==79){c=a.sE;if(c!==null&&b.bL)YA(a.lg,c);else MV(a.lg,a.rD);d=1;}else d=0;return d;}
function Xn(){B.call(this);this.o2=null;}
function AUD(a,b){var c,d;c=a.o2;d=Ed(c.r,c.A)?c.A:!Ed(c.r,c.E)?null:c.E;if(d!==null){JV(d,b);c.gi=null;}}
function Xo(){B.call(this);this.ve=null;}
function ALY(a,b){b=b;return AEA(a.ve,b);}
var ACB=G(0);
function ADk(b,c,d){return Ig(b,c,d,255,new BZ);}
function Ig(b,c,d,e,f){Cc(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function ZI(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ANK(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bq=h+i;e.bf=j+i;return e;}
function H4(b,c,d,e,f){f=ZI(b,c,d,f);f.bF=e;return f;}
function Ha(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function WT(){var a=this;B.call(a);a.cH=null;a.gt=null;a.cO=null;a.cf=null;a.b3=0.0;a.cu=0;a.ev=null;a.ek=null;a.dG=null;a.w_=null;a.zl=null;a.zm=null;}
function Ku(a){var b;b=a.ev;if(b!==null)b.vW();}
function KY(a){var b;b=a.ev;if(b!==null)b.za();}
function PH(a,b){var c;c=a.gt.dX!==(Ej()).activeElement?0:1;if(c)KY(a);a.ev=b;if(c)Ku(a);}
function Gh(a,b){KY(a);a.ev=b;Ku(a);}
function Ed(a,b){return b!==a.ev?0:1;}
function Jx(a){return a.cH.ci;}
function HK(a,b){return Gt(a.cH,b.kK,Cf(b.i0,a.b3));}
function CE(a,b){return Cf(b,a.b3);}
function ZH(a,b){if(a.cu==b)return 0;a.cu=b;H5(a.gt);return 1;}
function NM(a,b){var c;c=a.cH;if(!a.cu)c.no=b;else c.n9=b;H5(a.gt);}
var Um=G();
function ANU(a,b){var c,d,e;c=b.cD;d=c&&!b.bL&&!b.de&&!b.j3?1:0;a:{if(d){d=b.bo;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.de&&!b.j3?1:0;d=d&&b.bo==46?1:0;}b:{if(!d){e=b.bo;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.ln=1;}return 0;}
function Ul(){B.call(this);this.qx=null;}
function AK8(a,b){var c;c=a.qx.ev;return c!==null&&c.hJ(b)?1:0;}
function BZ(){var a=this;B.call(a);a.bl=0.0;a.bq=0.0;a.bf=0.0;a.bF=0.0;}
function AAs(a,b,c,d){var e=new BZ();ATG(e,a,b,c,d);return e;}
function AHx(a){var b=new BZ();ARI(b,a);return b;}
function ATG(a,b,c,d,e){a.bl=b;a.bq=c;a.bf=d;a.bF=e;}
function Cc(a,b,c,d,e){a.bl=b;a.bq=c;a.bf=d;a.bF=e;}
function ARI(a,b){a.bl=b.bl;a.bq=b.bq;a.bf=b.bf;a.bF=b.bF;}
function BU(a,b){a.bl=b.bl;a.bq=b.bq;a.bf=b.bf;a.bF=b.bF;return a;}
function AXB(a,b){if(a===b)return 1;return b!==null&&BJ(a)===BJ(b)&&Lp(a,b)?1:0;}
function Lp(a,b){return b.bl===a.bl&&b.bq===a.bq&&b.bf===a.bf&&b.bF===a.bF?1:0;}
var ET=G(0);
function AHC(){B.call(this);this.cN=null;}
function AFo(){var a=new AHC();ATP(a);return a;}
function ATP(a){a.cN=BI();}
function HX(a,b){TT(a.cN,0,b);}
function J7(a,b){Yx(a.cN,b);}
function L6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cN.j-1|0;while(c>=0){d=Bt(a.cN,c);d.V.fJ(b);e=d.U;f=d.e7.iZ;if(!Lq(e)){if(!Y4(e)&&!(!e.gw&&e.dD!==null)){e.gw=0;XI(e);g=e.eG;h=(g.c9+g.eg+5.0)/10.0;i=CE(e.fL,e.kn);g=b.ci;j=e.eG;k=e.hz;l=h*2.0;Cv(g,j);m=i+LF(g,k,l)|0;e.hA=m;m=EW(0,m,e.t.a);if(m){g=Eh(b,m,e.t.b,e.fL.cu);Cv(g,e.eG);j=e.hz;l=i;h=l+h;k=e.eG;n=k.c9;BQ(g,j,h,l+n-(n+k.eg)/16.0);j=e.dD;if(j===null){j=C0(b);e.dD=j;}CN(j,g);EU(g);Cc(e.lm,0.0,0.0,BX(e.dD),Dd(e.dD));}}g=f.uY;j=e.dD;if(j===null)RD(e,b,
0,e.t.a,g);else{i=BX(j);f=f.xF;j=e.H;m=j.a;o=j.b;j=e.dD;DW(b,m,o,j.f7,e.lm,j,f,g,e.fL.cu);m=e.t.a;if(i<m)RD(e,b,i,m-i|0,g);}}B4(b,1);i=CE(d.bB,2.0);m=Lq(d.U);f=d.bB;e=f.dG;f=f.w_;p=m?0:d.U.t.b;g=d.V.t;V(f,g.a,g.b+p|0);ADt(b,f,!m?d.U.H:d.V.H,d.e7.iZ.mK, -i|0,e);f=d.V;AFA(b,f.t,f.H,i,p,Re(d.e7.jL,d.bB.b3),d.e7.jL.nF,e);c=c+(-1)|0;}}
function ABS(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cN;if(c>=d.j)break;a:{e=Bt(d,c);f=b.i;if(DN(e.U,f))g=DE(e.bB.cO,null);else{g=CE(e.bB,7.0);h=CE(e.bB,25.0);if(P9(e,f.a,g)){i=Pt(e,f.a,h);if(Ro(e,f.b,g)){g=DE(e.bB.cO,MN(i,C(234)));break a;}if(Pl(e,f.b,g)){g=DE(e.bB.cO,MN( -i|0,C(234)));break a;}}if(Y$(e,f.b,g)){h=ZQ(e,f.b,h);if(ABe(e,f.a,g)){g=DE(e.bB.cO,MN(h,C(235)));break a;}if(Ok(e,f.a,g)){g=DE(e.bB.cO,MN( -h|0,C(235)));break a;}}g=0;}}b:{c:{if(!g){if(!DN(e.V,b.i))break c;if(!e.V.bN(b)&&!DE(e.bB.cO,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ACU(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cN;if(e>=f.j)break;a:{b:{g=Bt(f,e);if(!DN(g.U,b.i)){if(!DN(g.V,b.i))break b;if(!g.V.cq(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function AEt(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cN;if(d>=e.j)return null;a:{f=Bt(e,d);if(!c){b:{e=b.i;if(!Lq(f.U)&&DN(f.U,e)){g=f.V.H;h=g.a;i=e.a;h=h-i|0;j=g.b;k=e.b;j=j-k|0;e=f.U.H;i=e.a-i|0;k=e.b-k|0;e=new Bd;g=new Pv;g.pL=f;g.pM=i;g.pN=k;g.pO=e;g.pH=h;g.pJ=j;}else{h=CE(f.bB,7.0);i=CE(f.bB,25.0);if(P9(f,e.a,h)){j=Pt(f,e.a,i);if(Ro(f,e.b,h)){g=I_(f,e,j,(-1));break b;}if(Pl(f,e.b,h)){g=I_(f,e,j,1);break b;}}if(Y$(f,e.b,h)){i=ZQ(f,e.b,i);if(ABe(f,e.a,h)){g=I_(f,e,(-1),i);break b;}if(Ok(f,e.a,h)){g
=I_(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DN(f.U,b.i)?A2w:f.V.ce(b,c);e=f.V;if(e===null)g=null;else if(g===null)g=!DN(e,b.i)?null:A2w;}if(g!==null)break;d=d+1|0;}return g;}
function AHE(a,b,c){var d,e,f,g;d=0;while(true){e=a.cN;if(d>=e.j)break;a:{b:{f=Bt(e,d);if(!DN(f.U,b.i)){if(!DN(f.V,b.i))break b;if(!f.V.c2(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function L2(a,b,c,d){var e,f;e=0;while(true){f=a.cN;if(e>=f.j)break;if((Bt(f,e)).V.dc(b,c,d))return 1;e=e+1|0;}return 0;}
function APf(a,b,c){var d,e,f;d=0;while(true){e=a.cN;if(d>=e.j)break;f=Bt(e,d);e=f.V;e.ki(e.H,e.t,c);e=f.U;if(e.hv!==null){e.eG=null;e.hA=0;e.gw=1;}Kg(f);d=d+1|0;}}
function Sg(a,b){var c,d,e;c=0;d=0;while(true){e=a.cN;if(d>=e.j)break;Bt(e,d);c=0|c;d=d+1|0;}return c;}
function AAQ(a,b,c){var d;d=0;while(true){b=a.cN;if(d>=b.j)break;Bt(b,d);d=d+1|0;}}
function AGS(){var a=this;B.call(a);a.c4=null;a.cg=null;a.j0=null;a.kp=null;a.nH=null;a.kN=null;}
function K9(a){var b=new AGS();ATv(b,a);return b;}
function ATv(a,b){a.cg=BI();a.kN=A2x;a.c4=b;Ba(b.ek,a);}
function HS(a,b,c){a.j0=c;a.nH=b;b=B5(a.cg);while(B6(b)){Iv(B9(b),a.nH);}}
function FQ(a,b,c,d){var e,f;e=a.c4;f=e.cf;if(W(f.a,f.b)&&e.b3!==0.0){if(a.j0!==null&&!Dj(a)){a.kN=d;a.kp=HK(a.c4,a.j0);e=Qg(a,b,c,null);b=new Yt;b.vi=a;e.kv=b;Gh(a.c4,a);return;}b=new BP;Z(b);K(b);}c=new CT;Bm(c,C(236));K(c);}
function D3(a){var b;if(Dj(a)){b=a.c4;if(b.ev===a)b.ev=null;V$(a,null);a.kN.n();a.kN=A2x;}}
function ZL(a,b,c,d,e){var f,g,h;f=AEN();ABo(f);K6(f,c.dj());Iv(f,a.nH);Ip(f,a.kp,a.c4);if(d===null)g=b.a;else{g=b.a;g=a.c4.cf.a<((g+(Eu(d)).a|0)+(Eu(f)).a|0)?g-(Eu(f)).a|0:(g+(Eu(d)).a|0)-d.fH|0;}h=b.b;b=a.c4.cf;KX(f,Be(0,Bc(g,b.a-(Eu(f)).a|0)),Be(0,Bc(h,b.b-(Eu(f)).b|0)));b=new AAh;b.rj=a;b.rk=f;b.rl=e;f.lX=b;BF(a.cg,f);return f;}
function Qg(a,b,c,d){return ZL(a,b,c,d,null);}
function AXj(a,b,c){var d;a.kp=HK(a.c4,a.j0);d=B5(a.cg);while(B6(d)){Ip(B9(d),a.kp,a.c4);}}
function Gw(a){var b,c;if(Ey(a.cg))return;B4(a.c4.cH,1);b=0;while(true){c=a.cg;if(b>=c.j)break;MY(Bt(c,b),a.c4);b=b+1|0;}}
function LT(a,b){var c,d;c=0;d=a.cg.j-1|0;a:{while(d>=0){c=LW(Bt(a.cg,d),b.i,a.c4.cO);if(c)break a;d=d+(-1)|0;}}return c;}
function KK(a,b,c,d){var e,f;e=0;f=a.cg.j-1|0;a:{while(f>=0){e=MO(Bt(a.cg,f),b.i,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Nm(a,b,c){var d,e,f;d=null;e=a.cg.j-1|0;a:{while(e>=0){f=Bt(a.cg,e);d=b.i;c=E_(f.cp,d);if(!c&&!Le(f.cp)){d=f.kv;if(d!==null)d.n();}d=!c?null:A2w;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AP9(a,b){var c;if(!Dj(a))return 0;a:{switch(b.bo){case 27:D3(a);c=1;break a;default:}c=0;}return c;}
function AD7(b,c){var d,e,f;d=b.e0;e=c.cX;f=c.fH;return B7((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function V$(a,b){var c,d;c=a.cg.j-1|0;a:{while(true){if(c<0)break a;d=Bt(a.cg,c);if(b===d)break;EN(a.cg,c);Pe(d);c=c+(-1)|0;}}}
function Dj(a){return a.cg.j<=0?0:1;}
function ADz(){var a=this;B.call(a);a.eE=null;a.lG=0.0;a.hT=0.0;a.gK=0;}
function ANT(){var a=new ADz();ASM(a);return a;}
function ASM(a){var b;b=VS(0,0,2,20);a.eE=b;a.lG=0.5;a.hT=0.0;Ig(187,187,187,255,b.P);}
function ZV(a){return a.eE.q.b;}
function VG(a){return a.eE.q.a;}
function VQ(a,b){var c,d;a:{c=a.gK;if(b>a.hT)while(true){d=a.hT+a.lG;a.hT=d;a.gK=a.gK?0:1;if(b>d)continue;else break a;}}return a.gK==c?0:1;}
function XP(a,b,c){V(a.eE.s,b,c);}
function RP(a,b){a.hT=b+a.lG*1.25;a.gK=1;}
function Xh(a,b,c){if(a.gK)TM(a.eE,b,c.a,c.b);}
function L0(){var a=this;B.call(a);a.n8=null;a.zQ=null;a.z1=0.0;a.rQ=0;a.z_=0;a.AD=0;a.t8=0;a.BG=0;a.c9=0.0;a.eg=0.0;a.z0=0.0;a.nO=0.0;a.z7=0;a.pA=null;}
function FB(a){return C6(a.c9+a.eg);}
function KV(a,b){return C6((a.c9+a.eg)*b);}
function Nj(){var a=this;B.call(a);a.fO=null;a.f=null;a.nn=null;a.qV=null;a.g2=null;a.jv=null;a.dF=null;a.sL=null;a.u=0;a.y=0;a.hI=0;a.ir=null;a.h8=null;a.oE=null;a.mx=null;a.eJ=0;a.g3=0;a.hl=0;a.iD=Fq;a.v2=Fq;a.xp=Fq;a.oP=0;a.Av=0;a.du=0;a.i4=0.0;a.fg=0;}
function AYt(a,b,c){var d=new Nj();AHj(d,a,b,c);return d;}
function AYE(a,b,c){var d=new Nj();AAv(d,a,b,c);return d;}
function AHj(a,b,c,d){var e,f;e=J(b);BO(b);f=new Py;f.va=b;AAv(a,(AGu(e,f)).lD,c,d);}
function AAv(a,b,c,d){var e,f,g,h,i,j;b=b.data;a.qV=AJ2();e=new WL;e.e8=R(LS,16);e.e3=0;e.dA=(-1);a.g2=e;a.ir=null;a.h8=BI();a.oE=LH();a.mx=BI();a.eJ=1;a.g3=1;a.hl=1;a.du=0;a.i4=0.0;a.fg=0;a.fO=d;a.nn=c;c=new TP;f=b.length;g=R(Dv,Be(1,f));if(!f)g.data[0]=ACG(C(21));h=g.data;i=0;while(i<f){h[i]=ACG(b[i]);i=i+1|0;}d=new Rw;e=new LP;RS(e);d.eH=e;c.en=d;c.dJ=LH();c.dq=LH();c.id=BI();if(!h.length){c=new BP;Z(c);K(c);}c.z=g;j=XG(c);c.c7=AGq(AV6(KC(0,j,0),null,null));a.f=c;}
function Eq(a){var b;b=a.nn;if(b===null){b=a.fO;if(b===null)b=C(189);else{b=b.f9;b=b===null?C(189):!Eb(b,C(237))&&!Eb(b,C(238))&&!Eb(b,C(239))&&!Eb(b,C(240))&&!Eb(b,C(241))&&!Eb(b,C(242))?(Eb(b,C(243))?C(178):Eb(b,C(244))?C(245):!Eb(b,C(246))?C(189):C(191)):C(190);}}return b;}
function GG(a){var b;b=a.fO;return b===null?null:b.jG;}
function HO(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.g3=3;a.hl=3;a.eJ=3;c=CF(b[0]);d=Eo(b[1]);if((CF(b[2])).data[0]==4){e=FD(Eo(b[3]));EQ(a.oE,C(247),e);Mx(a.f,c,d);}else if(b.length<5)Mx(a.f,c,d);else{f=CF(b[3]);g=f.data;h=Eo(b[4]);PT(a.f,c,d,f,h,0);W6(a,JI(f,g.length),M4(h));}if(a.fg){e=EL(a);i=II(EO(),a.iD);j=new L;N(j);H(GR(H(H(j,e),C(248)),i),C(249));$rt_globals.console.info($rt_ustr(M(j)));}e=a.jv;if(e!==null)XO(e);}
function LY(a){var b;UW(a,DU(a.u,a.y),Jg(a.f,a.u,a.y));if(!(a.ir!==null&&!Ey(a.h8))){b=a.y;if(b>0)UW(a,DU(a.u,b-1|0),Jg(a.f,a.u,a.y-1|0));}}
function UW(a,b,c){var d,e,f,g,h,i,j,k;ABg(a);d=Cw(a.f.dJ,c);if(d!==null)c=d;a:{e=Cw(a.f.dq,c);if(e!==null){a.ir=ME(a.f,c);c=B5(e);while(true){if(!B6(c))break a;f=B9(c);BF(a.h8,ME(a.f,f));}}}c=a.jv;if(c!==null){g=b.bp;h=b.by;b=c.fm;f=Eq(c.d);e=GG(c.d);i=(Cx(b.xJ)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.xM(f,e)){b=b.Cg;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Tz;e.zN=c;e.zK=f;e.zL=g;e.zM=h;b.uz(f,g,h,e,c.iT);}}}
function ABg(a){a.ir=null;H7(a.h8);}
function W6(a,b,c){var d,e,f,g,h;if(a.dF!==null){a.xp=EO();d=a.f.cr;e=a.dF;f=new Rl;f.tX=a;g=R(B,3);h=g.data;h[0]=b;h[1]=c;b=BD(1);b.data[0]=d;h[2]=b;CO(e,f,C(250),g);}}
function R8(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jv=b;a.dF=c;if(c===null){d=a.f.z.data;e=d.length;f=0;while(f<e){V5(d[f]);f=f+1|0;}}else if(a.eJ==1){a.iD=EO();b=Eq(a);e=BW(b,C(178));f=BW(b,C(191));d=Ez(a.f);g=d.data.length;h=!e?5120:10240;i=ABR(b);if(f){j=a.dF;b=new TH;b.o_=a;k=R(B,2);l=k.data;l[0]=d;d=BD(1);d.data[0]=i;l[1]=d;Jr(j,b,0,C(251),k);a.eJ=2;}else if(g<=h)Lt(a,d,i);else if(!e){ZU(a,M4(d),i);Lt(a,d,i);}else{ZU(a,M4(d),i);m=M4(d);c=a.dF;j=new Si;j.t0=a;k=R(B,2);l=k.data;l[0]=m;m=BD(1);m.data[0]=i;l[1]=
m;CO(c,j,C(252),k);a.g3=2;Lt(a,d,i);}}}
function ZU(a,b,c){var d,e;d=a.dF;e=new Y0;e.uk=a;CO(d,e,C(253),I(B,[b,DB([c,250])]));a.hl=2;}
function Lt(a,b,c){var d,e,f,g;d=a.dF;e=new O7;e.rn=a;f=R(B,2);g=f.data;g[0]=b;b=BD(1);b.data[0]=c;g[1]=b;CO(d,e,C(251),f);a.eJ=2;}
function EL(a){var b;b=a.fO;return b===null?C(21):XM(b);}
function JE(a){var b,c,d,e,f,g;if(a.fg){b=EL(a);c=new L;N(c);H(H(c,b),C(254));$rt_globals.console.info($rt_ustr(M(c)));}b=Eq(a);if(b===null)d=null;else{a:{e=(-1);switch(I1(b)){case -1655966961:if(!Bp(b,C(191)))break a;e=3;break a;case 3401:if(!Bp(b,C(245)))break a;e=2;break a;case 98723:if(!Bp(b,C(190)))break a;e=1;break a;case 3254818:if(!Bp(b,C(178)))break a;e=0;break a;case 3556653:if(!Bp(b,C(189)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(255);break b;case 2:d=C(256);break b;case 3:d
=C(257);break b;case 4:d=C(258);break b;default:d=null;break b;}d=C(259);}}if(d===null)XO(a.jv);else{a.iD=EO();if(!Bp(d,C(257))){b=a.dF;f=new Wa;f.xd=a;g=R(B,1);g.data[0]=Ez(a.f);CO(b,f,d,g);}else{b=a.dF;c=new Wb;c.vH=a;g=R(B,1);g.data[0]=Ez(a.f);Jr(b,c,0,d,g);}}}
function AGj(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.fg){b=EL(a);c=new L;N(c);H(H(c,b),C(260));$rt_globals.console.info($rt_ustr(M(c)));}b=Eq(a);if(b!==null&&!Bp(C(189),b)){if(Bp(C(191),b)){JE(a);H2(a.f);}else{c=a.f.c7;d=RC(c,c.c5);if(d===null){M3(a);H2(a.f);return;}e=DB([De(d),Db(d),d.bY.fi]);f=Ez(a.f);g=BD(1);g.data[0]=ABR(b);c=a.f.en;if(c.fu===null){h=BD(0);i=B1(0);}else{j=AXt(ALm(d.cj,c.eH),d);O6(j);h=j.le;i=j.lH;}k=a.f.cr;d=a.dF;c=new NU;c.wk=a;l=R(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=BD(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;CO(d,c,C(261),l);}}else H2(a.f);}
function M3(a){var b;b=AXt(a.f.en,null);O6(b);W6(a,b.le,b.lH);}
function AAi(){var a=this;B.call(a);a.sb=null;a.y1=null;a.pb=null;a.xJ=null;a.xb=null;a.wP=null;}
function Nc(a,b,c){return Tj(a,Cx(a.sb),b,c);}
function SS(a,b,c){return Tj(a,Cx(a.y1),b,c);}
function Tj(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.xM(c,d))return g.AY;f=f+1|0;}return null;}
function WF(a,b,c){var d,e,f,g;d=(Cx(a.pb)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.xM(b,c))return g.AN;f=f+1|0;}return null;}
function FL(){var a=this;B.call(a);a.b7=0;a.dw=null;a.fa=null;a.bU=null;a.d0=0;a.dy=0;}
var A2y=0;var A2s=0;function ABA(a,b,c,d,e,f,g){var h,i,j,k,l;h=a.bU;i=h===b&&!h.hu?0:1;if(i){a.bU=b;Lr(b,d.ci,a.dw.l1);}h=a.bU;j=h===null?0:Fi(h)<f?Jk(Fi(a.bU),1024):Jk(f,1024)+1|0;k=j<=a.d0?0:1;if(k)a.d0=j;if(!(!i&&!k)){if(A2y){l=b.ga;$rt_globals.console.info("fMeasure"+l.data);A2y=0;}if(!A2s){h=c.c0;b="alphabetic";h.textBaseline=b;}else{b=c.c0;h="top";b.textBaseline=h;}a.dy=g/1024|0;while(true){b=a.fa;if(b.j>=a.d0)break;BF(b,C0(d));}f=0;while(f<a.d0){Jn(a,c,e,a.dy+f|0);f=f+1|0;}a.bU.hu=0;}if(!Ey(a.fa)&&g
<=Fi(a.bU)){j=g/1024|0;f=a.dy;if(j!=f){if(NW(j-f|0)>=a.d0){f=0;while(f<a.d0){Jn(a,c,e,j+f|0);f=f+1|0;}a.dy=j;}else{while(true){g=a.dy;if(g>=j)break;Jn(a,c,e,g+a.d0|0);a.dy=a.dy+1|0;}while(true){g=a.dy;if(g<=j)break;Jn(a,c,e,g-1|0);a.dy=a.dy-1|0;}}}}}
function LI(b,c){return (c-FB(b)|0)/2|0;}
function Ol(b,c){return LI(b,c)+b.t8|0;}
function Jn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;EX(b);e=a.bU.ga;f=d*1024|0;g=Rc(a,f);if(g>=a.bU.p.data.length)return;h=!g?0.0:e.data[g-1|0];i=f;j=h-i+a.b7;k=a.dw.l1;a:{while(true){l=a.bU;if(g>=l.p.data.length)break a;m=k.data;n=VA(l,g);l=m[J9(n)];o=!A2s?Ol(l,c):LI(l,c);m=e.data;Cv(b,l);BQ(b,n.v,j,o);j=m[g]-i+a.b7;if(j>1024.0)break;g=g+1|0;}}CN(Bt(a.fa,d%a.d0|0),b);}
function ACY(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;if(Ey(a.fa))return;if(!a.d0)return;if(g>Fi(a.bU))return;o=a.bU;p=o.eO;q=o.p;r=g/1024|0;s=Rc(a,g);t= -a.b7|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;x=s!=(w-1|0)?0:1;if(t>=e)break;y=p.data;o=Bt(a.fa,r%a.d0|0);z=v[s];ba=y[s]+a.b7|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Bc(be,ba)-g|0;if(bc&&x)bf=bf+a.b7|0;bg=i!==null?0:1;b:{if(!bg){bh=!x?a.b7:2*a.b7|0;bi=i.a;w
=i.b;if(!(bi<w&&g<=w&&(g+bf|0)>(bi+bh|0)?0:1)){bh=0;break b;}}bh=1;}c:{if(!bg){bj=!x?a.b7:2*a.b7|0;if(g>=i.a&&(g+bf|0)<=(i.b+bj|0)?1:0){bk=1;break c;}}bk=0;}bl=null;if(l&&!m)bl=h.bD.jm;if(z===j)bl=h.bD.qO;bm=B5(k);d:{while(B6(bm)){if(BW(B9(bm),z)){bi=1;break d;}}bi=0;}if(bi)bl=h.bD.y4;if(n!==null){v=n.mZ;if(v===null)bj=0;else{v=v.data;bj=s>=v.length?0:v[s];}bl=ABu(h.dR,h,bj,n.gA);}if(!bk&&!bh){i.b=Bc(i.b,Fi(a.bU));AE7(a,d,t+c|0,b,f,h,o,z,bf,g>=i.a?bf:(Bc(ba,be)-i.a|0)-(!x?a.b7:0)|0,(g+bf|0)<=(i.b+(!x?a.b7:2
*a.b7|0)|0)?0:(Bc(ba,be)-i.b|0)-(!x?a.b7:0)|0,g-bb|0,bl);}else{bm=h.nr.data[z.b4];bn=bk?h.bD.kJ:VO(bl,OT(h,bm.lA));Cc(a.dw.kI,g-bb|0,0.0,bf,u);V(a.dw.kB,bf,f);Ik(a.dw,d,o,t+c|0,b,bm.jo,bn);}if((z.bW&12)>0){bi=t+c|0;B4(d,1);o=a.dw;z=o.lZ;z.a=bf;w=b+o.yd|0;bj=w-o.yr|0;bo=o.u4;bp=w+bo;bm=o.g8;Xz();MW(d,bi,bj,z,bo,bp,bm,A2z.i1.jo);B4(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function AE7(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.nr.data[h.b4];o=n.jo;p=VO(m,OT(f,n.lA));q=f.bD.kJ;f=a.dw;r=f.kI;s=f.kB;t=l;u=i-j|0;v=u;w=e;Cc(r,t,0.0,v,w);V(s,u,e);Ik(a.dw,b,g,c,d,o,p);l=l+i|0;Cc(r,l-k|0,0.0,k,w);V(s,k,e);f=a.dw;c=c+i|0;Ik(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cc(r,t,0.0,i,w);V(s,i,e);Ik(a.dw,b,g,c-j|0,d,o,q);}
function VO(b,c){if(b!==null)c=b;return c;}
function Rc(a,b){var c,d,e,f,g,h,i;c=a.bU;d=c.ga;e=0;f=c.p.data.length;g=b;b=BH(e,f);if(b>0){c=new BP;Z(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BH(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AAE(a){a.bU=null;Ex(a.fa,new Xb);H7(a.fa);}
function AC6(a,b,c,d,e,f,g,h,i){var j,k;j=Fi(a.bU);if(j)j=j+a.b7|0;if(!j)j=j-a.b7|0;k=Be( -a.b7|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bx(b,c+k|0,d,f,i);}
function AC_(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{h=c.data;i=R(FL,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=B3(g,e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.bU===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}c=i.data;e=0;f=c.length;while(e<f){if(c[e]===null){if(j>=k)p=null;else{b=j+1|0;p=h[j];j=b;}while(j<k&&p===null){b=j+1|0;p=h[j];j=b;}if(p!==null){c[e]=p;h[j-1|0]=null;}else{o=new FL;o.b7=3;o.fa=BI();o.dy=0;o.dw=d;c[e]=o;}}e=e+1|0;}while(j<k){p=h[j];if(p!==null)AAE(p);j=j+1|0;}return i;}
function AE9(){A2s=0;}
function AHL(){var a=this;B.call(a);a.fD=null;a.db=null;a.eq=null;a.eU=null;a.i5=null;a.i6=null;}
function Jh(){var a=new AHL();AON(a);return a;}
function AON(a){a.fD=new Bd;a.db=new Bd;a.eq=new Bd;a.eU=new Bd;a.i5=new BZ;a.i6=new BZ;}
function Tm(a){var b;b=a.db;return !W(b.a,b.b)?0:1;}
function Is(a,b){return FI(b,a.eq,a.eU);}
function FZ(a,b,c,d){var e,f,g,h,i;e=Is(a,b);f=FI(b,a.fD,a.db);if(!e&&!f)return null;if(!f){if(!d)c.g(Y9(a,b.a-a.eq.a|0));else c.g(RH(a,b.b-a.eq.b|0));}g=!d?a.fD.a+(a.db.a/2|0)|0:a.fD.b+(a.db.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Uy;b.x_=a;b.ya=c;b.x$=i;}else{b=new Ux;b.rg=a;b.re=c;b.rf=i;}return b;}
function Hr(a,b,c){if(b!==null&&c!==null){BU(a.i5,c);BU(a.i6,b);return;}}
function ADP(b,c){var d;d=new WQ;d.t$=b;d.ze=c;return d;}
function RH(a,b){var c,d,e;c=a.eU.b;d=a.db.b;e=c-d|0;return ADP(Bc(Be(0,b-(d/2|0)|0),e),e);}
function Y9(a,b){var c,d,e;c=a.eU.a;d=a.db.a;e=c-d|0;return ADP(Bc(Be(0,b-(d/2|0)|0),e),e);}
function JC(a,b,c,d,e,f,g){Zv(a,b,c,d,e,f,g,1);}
function SX(a,b,c,d,e,f,g){Zv(a,b,c,d,e,f,g,0);}
function Zv(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){V(a.eU,0,0);V(a.db,0,0);}else{i=Bc(g*3|0,d);j=Be(R5(d,d,e),i);e=e-d|0;i=d-j|0;i=i?R5(b,i,e):0;if(!h){k=a.fD;k.a=i+c|0;k.b=f-g|0;l=a.db;l.a=j;l.b=g;l=a.eq;l.a=c;l.b=k.b;k=a.eU;k.a=d;k.b=g;}else{k=a.fD;k.a=f-g|0;k.b=i+c|0;l=a.db;l.a=g;l.b=j;l=a.eq;l.a=k.a;l.b=c;k=a.eU;k.a=g;k.b=d;}}}
function ZY(a,b){GW(a,b);G5(a,b);}
function GW(a,b){var c;c=a.eq;Bx(b,c.a,c.b,a.eU,a.i5);}
function G5(a,b){var c,d;c=a.db;c.a=c.a-2|0;c.b=c.b-2|0;d=a.fD;Bx(b,d.a+1|0,d.b+1|0,c,a.i6);b=a.db;b.a=b.a+2|0;b.b=b.b+2|0;}
function Ga(a,b,c){return Is(a,b)&&Gr(c)?1:0;}
function ADx(){var a=this;B.call(a);a.Be=20;a.fT=null;a.fd=null;a.jE=0.0;a.jw=null;a.nM=0;a.ke=0;a.cJ=null;a.k8=null;a.eT=null;a.f5=null;a.f1=0;}
function AHz(){var a=new ADx();AWI(a);return a;}
function AWI(a){a.Be=20;a.fT=new Bd;a.fd=new Bd;a.cJ=BI();a.k8=DD(0);}
function V4(a,b){var c,d,e,f,g;c=a.f1;if(b==c)return;d=a.cJ.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Be(0,(c-1|0)/20|0);f=Be(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){TR(a,b);a.f1=b;}else{if(a.f1>=b)while(true){if(g<f)break a;a.f1=Pb(Bt(a.cJ,g%d|0),a.eT,a.f5,a.f1,b,e,a.jE);g=g+(-1)|0;}while(f<=g){a.f1=Pb(Bt(a.cJ,f%d|0),a.eT,a.f5,a.f1,b,e,a.jE);f=f+1|0;}}}}
function Mo(a,b){if(b===null)b=DD(0);a.k8=b;}
function VC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=B5(a.cJ);while(B6(f)){g=B9(f);h=a.fT;i=W(a.cJ.j,a.ke);j=a.k8;k=g.fb.b;l=((g.kM.b-(b%i|0)|0)+i|0)%i|0;m=d.ht;n=b+l|0;o=g.R;n=n/o|0;p=l+k|0;q=BH(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(M2(g,j,q,i,d,m)){i=W((p-k|0)+1|0,g.R);V(g.dQ,BX(g.bs),i);Cc(g.eK,0.0,W(k,g.R),BX(g.bs),i);i=q;}else{r=Gp(d,j,q,m);E6(g,e,l+W(k,g.R)|0,h,m.fA,r);V(g.dQ,BX(g.bs),g.R);Cc(g.eK,0.0,W(p,g.R),BX(g.bs),g.R);k=p;}p=p+1|0;q=i;}r=Gp(d,j,q,m);E6(g,e,l+W(k,g.R)|
0,h,m.fA,r);}else{if(q>0&&l<c){o=Be(c-l|0,0);k=g.R;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(M2(g,j,u,v,d,m)){o=W((t-s|0)+1|0,g.R);V(g.dQ,BX(g.bs),o);Cc(g.eK,0.0,W(s,g.R),BX(g.bs),o);v=u;}else{r=Gp(d,j,u,m);E6(g,e,l+W(s,g.R)|0,h,m.fA,r);V(g.dQ,BX(g.bs),g.R);Cc(g.eK,0.0,W(t,g.R),BX(g.bs),g.R);s=t;}t=t+1|0;u=v;}r=Gp(d,j,u,m);E6(g,e,l+W(s,g.R)|0,h,m.fA,r);}if(p>i){n=b/g.R|0;o=Bc(p%i|0,c);V(g.dQ,BX(g.bs),g.R);k=b%Dd(g.bs)|0;l=g.R;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(M2(g,
j,i,n+(o-k|0)|0,d,m)){l=W((o-s|0)+1|0,g.R);V(g.dQ,BX(g.bs),l);Cc(g.eK,0.0,W(s,g.R),BX(g.bs),l);}else{r=Gp(d,j,i,m);l=s-k|0;q=g.R;E6(g,e,W(l,q)-(b%q|0)|0,h,m.fA,r);i=(n+o|0)-k|0;V(g.dQ,BX(g.bs),g.R);Cc(g.eK,0.0,W(o,g.R),BX(g.bs),g.R);s=o;}o=o+1|0;}r=Gp(d,j,i,m);n=s-k|0;o=g.R;E6(g,e,W(n,o)-(b%o|0)|0,h,m.fA,r);}}}}
function L4(a,b,c,d){var e,f,g,h,i,j;e=a.cJ.j;while(true){f=a.cJ.j;g=W(f,a.ke);if(g>(d+a.nM|0))break;h=B7(0,g);i=new RR;g=a.fd.a;f=a.nM;j=a.jw;i.dQ=new Bd;i.eK=new BZ;i.kM=h;i.d1=20;i.R=f;i.fb=B7(g,20*f|0);i.hb=Ol(j,f);if(i.bs===null)i.bs=C0(b);BF(a.cJ,i);}if(f==e)return;TR(a,c);}
function TR(a,b){var c,d,e,f,g,h,i,j,k;c=a.cJ;d=c.j;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=B5(c);while(B6(c)){f=B9(c);g=a.eT;h=a.jE;EX(g);i=0;while(true){j=f.d1;if(i>=j)break;k=e-W(d,j)|0;if(k<b)k=e;e=k+1|0;GI(f,g,C_(e),W(f.R,i)+f.hb|0,h);i=i+1|0;}CN(f.bs,g);f.pc=g.lq;}}
function Rm(a,b,c,d,e){var f;a.jw=b;a.nM=c;f=c*20|0;a.ke=f;b=CM(a.eT,Eh(e,a.fd.a,f,d));a.eT=b;Cv(b,a.jw);Ur(a.eT,2);b=CM(a.f5,Eh(e,a.fd.a,c,d));a.f5=b;Cv(b,a.jw);Ur(a.f5,2);}
function KM(a){Ex(a.cJ,new NS);H7(a.cJ);a.eT=CM(a.eT,null);a.f5=CM(a.f5,null);}
function UA(a,b,c,d,e){Ci(a.fT,b);V(a.fd,c,d);a.jE=e;}
function PD(){B.call(this);this.Bz=null;}
function PC(){B.call(this);this.oL=null;}
function AJ0(a,b){var c;c=a.oL;Gb(c,FM(b,Ie(c)));}
function PB(){B.call(this);this.tQ=null;}
function AIZ(a,b){var c;c=a.tQ;Jp(c,FM(b,VM(c)));}
function Xx(){var a=this;B.call(a);a.kI=null;a.kB=null;a.lZ=null;a.g8=null;a.l1=null;a.u4=0.0;a.zn=0;a.yd=0;a.yr=0;a.ob=0;}
function Ik(a,b,c,d,e,f,g){var h,i;h=a.kB;if(h.a&&h.b){i=a.kI;if(i.bF!==0.0&&i.bf!==0.0){DW(b,d,e,h,i,c,f,g,a.ob);return;}}}
function PA(){B.call(this);this.xn=null;}
function AIY(a){var b,c;b=a.xn;c=b.i8?0:1;b.i8=c;b=new L;N(b);H6(H(b,C(262)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function PI(){B.call(this);this.qE=null;}
function ANb(a){var b,c;b=a.qE;c=b.kP^1;b.kP=c;b=new L;N(b);H6(H(b,C(263)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function PG(){B.call(this);this.u3=null;}
function AX5(a){var b,c,d,e,f;b=a.u3;c=(b.d3+3|0)%6|0;b.d3=c;d=b.gc.data;e=d.length;f=0;while(f<e){b=d[f];b.b7=c;b=b.bU;if(b!==null)b.hu=1;f=f+1|0;}}
function PF(){B.call(this);this.zb=null;}
function APW(a){var b;b=a.zb;b.bP=b.bP?0:1;KM(b.c3);b.c3=AHz();Vf(b,b.bc,b.cB,b.bS.b3);}
function PE(){B.call(this);this.qi=null;}
function ASG(a){var b;b=a.qi;b.j8=b.j8?0:1;}
function Pz(){B.call(this);this.uf=null;}
function AW8(a){var b;b=a.uf;b.nu=b.nu?0:1;}
var AFy=G();
function Li(){B.call(this);this.Br=null;}
var A1O=null;var A2A=null;function AOP(){AOP=Bs(Li);AXM();}
function AMo(a){var b=new Li();ABD(b,a);return b;}
function ABD(a,b){AOP();a.Br=b;}
function AXM(){A1O=AMo(C(264));A2A=AMo(C(265));}
var NC=G(0);
function Gr(a){return DE(a,null);}
function SV(b){var c;c=new T5;c.xA=b;return c;}
function Sn(){B.call(this);this.us=null;}
function AOb(a){Ku(a.us);}
function Sl(){B.call(this);this.yB=null;}
function AIE(a){KY(a.yB);}
var Me=G(0);
function ACr(){var a=this;E0.call(a);a.cE=null;a.j=0;}
function BI(){var a=new ACr();ANd(a);return a;}
function ANd(a){a.cE=R(B,10);}
function Kd(a,b){var c,d;c=a.cE.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cE=Dp(a.cE,d);}}
function Bt(a,b){J1(a,b);return a.cE.data[b];}
function ASb(a){return a.j;}
function BF(a,b){var c,d;Kd(a,a.j+1|0);c=a.cE.data;d=a.j;a.j=d+1|0;c[d]=b;a.b2=a.b2+1|0;return 1;}
function TT(a,b,c){var d,e,f;Ru(a,b);Kd(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cE.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cE.data[b]=c;a.j=d+1|0;a.b2=a.b2+1|0;}
function EN(a,b){var c,d,e,f;J1(a,b);c=a.cE.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b2=a.b2+1|0;return d;}
function Yx(a,b){var c;c=Lc(a,b);if(c<0)return 0;EN(a,c);return 1;}
function H7(a){ACT(a.cE,0,a.j,null);a.j=0;a.b2=a.b2+1|0;}
function ACV(a,b,c){var d,e,f,g,h,i;Ru(a,b);if(c.ec())return 0;Kd(a,a.j+c.cU()|0);d=c.cU();e=a.j;f=e-1|0;while(f>=b){g=a.cE.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.cd();i=0;while(i<d){g=a.cE.data;e=b+1|0;g[b]=h.b5();i=i+1|0;b=e;}a.b2=a.b2+1|0;return 1;}
function J1(a,b){var c;if(b>=0&&b<a.j)return;c=new BG;Z(c);K(c);}
function Ru(a,b){var c;if(b>=0&&b<=a.j)return;c=new BG;Z(c);K(c);}
function Ex(a,b){var c;c=0;while(c<a.j){b.g(a.cE.data[c]);c=c+1|0;}}
var AA6=G(0);
var A2x=null;function AGO(){A2x=new Pp;}
var FA=G();
function La(){FA.call(this);this.AY=null;}
function Vs(){FA.call(this);this.AN=null;}
function R9(){FA.call(this);this.Cg=null;}
var Hx=G(0);
var UV=G(0);
var RY=G(0);
var A2B=0.0;function L7(b){Cc(b,1.0471975803375244,0.75,1.25,0.375);}
function YV(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JN(b.bF,JN(c,A2B));Cc(d,b.bl/c,b.bq*c,ACM(b.bf*c,1.25),e);}
function O5(b){var c;c=b.bq;return c-(c|0)>=0.25?0.0:0.5;}
function ABX(){A2B=KL(KL(0.5,0.375),4.0);}
function T5(){B.call(this);this.xA=null;}
function DE(a,b){TQ(a.xA,b);return 1;}
function AG7(){var a=this;B.call(a);a.bM=null;a.bC=null;a.dn=0;}
function AJ2(){var a=new AG7();AXg(a);return a;}
function ALy(a){var b=new AG7();ARi(b,a);return b;}
function AXg(a){a.bM=new Hy;a.bC=new Hy;}
function ARi(a,b){a.bM=new Hy;a.bC=new Hy;IF(a,b);}
function IF(a,b){WY(a.bM,b.bM);WY(a.bC,b.bC);a.dn=b.dn;}
function Ml(a,b,c){Cb(a.bC,b,c);if(!a.dn)Cb(a.bM,b,c);}
function RJ(a,b){Cb(a.bM,b,0);Cb(a.bC,b+1|0,0);}
function D7(a){if(TW(a.bM,a.bC)>0)return a.bC;return a.bM;}
function F3(a){if(TW(a.bM,a.bC)<0)return a.bC;return a.bM;}
function AFB(a,b){var c,d,e,f;c=a.bM;d=c.J;e=a.bC;if(d==e.J&&c.bb==e.bb?1:0)return null;c=D7(a);e=F3(a);d=c.J;if(d<=b){f=BH(b,e.J);if(f<=0)return B7(b<=d?c.bb:0,f>=0?e.bb:(-1));}return null;}
function Dq(a){var b,c;b=a.bM;c=a.bC;return (b.J==c.J&&b.bb==c.bb?1:0)?0:1;}
function AGI(a,b){var c,d;if(!Dq(a))return 0;c=D7(a);d=F3(a);return c.J<=b&&b<d.J?1:0;}
function WL(){var a=this;B.call(a);a.e8=null;a.e3=0;a.dA=0;}
function X7(a,b){var c,d,e;c=a.e3;d=a.e8;if(c==d.data.length)a.e8=Dp(d,c+16|0);d=a.e8.data;e=a.e3;a.e3=e+1|0;d[e]=b;}
function TZ(a){var b,c,d;b=a.dA;c=a.e3-1|0;if(b==c)a.dA=b-1|0;d=a.e8.data;a.e3=c;d[c]=null;}
function Ls(){var a=this;D$.call(a);a.cT=0;a.cc=null;a.cR=0;a.y$=0.0;a.mp=0;}
function LH(){var a=new Ls();RS(a);return a;}
function ANL(a,b){return R(G_,b);}
function RS(a){var b;b=AHB(16);a.cT=0;a.cc=R(G_,b);a.y$=0.75;W_(a);}
function AHB(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E$(a){var b;if(a.cT>0){a.cT=0;b=a.cc;ACT(b,0,b.data.length,null);a.cR=a.cR+1|0;}}
function W_(a){a.mp=a.cc.data.length*a.y$|0;}
function Kt(a,b){return VE(a,b)===null?0:1;}
function Xv(a){var b;b=new Xa;b.tR=a;return b;}
function Cw(a,b){var c;c=VE(a,b);if(c===null)return null;return c.cY;}
function VE(a,b){var c,d;if(b===null)c=Uw(a);else{d=b.nE();c=SD(a,b,d&(a.cc.data.length-1|0),d);}return c;}
function SD(a,b,c,d){var e;e=a.cc.data[c];while(e!==null&&!(e.kd==d&&ACd(b,e.cI))){e=e.cP;}return e;}
function Uw(a){var b;b=a.cc.data[0];while(b!==null&&b.cI!==null){b=b.cP;}return b;}
function KO(a){var b;if(a.lR===null){b=new Ri;b.hy=a;a.lR=b;}return a.lR;}
function EQ(a,b,c){var d,e,f,g;if(b===null){d=Uw(a);if(d===null){a.cR=a.cR+1|0;d=W0(a,null,0,0);e=a.cT+1|0;a.cT=e;if(e>a.mp)Xl(a);}}else{e=b.nE();f=e&(a.cc.data.length-1|0);d=SD(a,b,f,e);if(d===null){a.cR=a.cR+1|0;d=W0(a,b,f,e);e=a.cT+1|0;a.cT=e;if(e>a.mp)Xl(a);}}g=d.cY;d.cY=c;return g;}
function W0(a,b,c,d){var e,f;e=new G_;ABc(e,b,null);e.kd=d;f=a.cc.data;e.cP=f[c];f[c]=e;return e;}
function AD1(a,b){var c,d,e,f,g,h,i,j;c=AHB(!b?1:b<<1);d=R(G_,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cc.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.kd&b;j=h.cP;h.cP=e[i];e[i]=h;h=j;}f=f+1|0;}a.cc=d;W_(a);}
function Xl(a){AD1(a,a.cc.data.length);}
function ACd(b,c){return b!==c&&!b.bJ(c)?0:1;}
function TP(){var a=this;B.call(a);a.z=null;a.c7=null;a.en=null;a.dJ=null;a.dq=null;a.id=null;a.jN=null;a.cr=0;a.mJ=0;a.vf=0.0;}
function B3(a,b){return a.z.data[b];}
function CD(a){return a.z.data.length;}
function XG(a){return Fh(a,CD(a));}
function Gd(a,b){return a.z.data[b].S;}
function AGT(a,b,c){var d,e,f,g,h;d=a.z;e=d.data;f=e[b];d=Dp(d,e.length+1|0);e=d.data;a.z=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=DV(R(Cs,0));a.z.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=DV(R(Cs,0));}else{e=(IB(f,c)).data;d=a.z.data;d[b]=e[0];d[b+1|0]=e[1];}F2(a,b,c,0,C(215));}
function L8(a,b){var c,d,e,f,g,h,i;c=a.z.data;d=c[b];e=c[b+1|0];f=DV(MG(d.p,e.p));g=a.z;h=g.data.length;if(b<h&&b>=0){i=R(Dv,h-1|0);c=i.data;TC(g,b,i);c[b]=f;a.z=i;return;}d=new Bu;Z(d);K(d);}
function Ob(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.z.data;if(!(c<d[b].S?0:1)){d=(B3(a,b)).p.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){f=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}f=0;}Fe();h=new BC;d=B1(1);d.data[0]=f;H0(h,d);F2(a,b,c,1,h);h=a.z.data[b];i=h.p;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=J(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(J(d[j].v)==1)h.p=TC(i,j,R(Cs,e-1|0));else{k=d[j];if(c<=0)l=D8(Ee(k.v,1),k.b4,k.bW);else if(c>=(J(k.v)-1|0)){l=new Cs;m=k.v;V_(l,Cp(m,0,J(m)-
1|0),k.b4,k.bW);}else{i=B1(J(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=P(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=P(m,e);c=e;}l=D8(FD(i),k.b4,k.bW);}d[j]=l;}h.S=h.S-1|0;EK(h);}else if(b!=(d.length-1|0)){F2(a,b,c,1,C(215));L8(a,b);}}
function ABm(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Uz(a.z.data[b],c,e[0]);return;}g=f-1|0;d=(IB(a.z.data[b],c)).data;h=d[0];i=d[1];d=a.z;j=Dp(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.p.data;f=l.length;c=!f?0:J(l[f-1|0].v);NA(h,h.p.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Fc(e[m])?ACG(e[m]):DV(R(Cs,0));d[b+m|0]=k;m=m+1|0;}NA(i,0,0,e[g]);d[b+g|0]=i;a.z=j;}
function YP(a,b){var c,d,e,f,g,h,i;c=D7(b);d=F3(b);e=c.J;if(e==d.J)return Cp(Fv(a.z.data[e]),c.bb,d.bb);f=new L;N(f);b=a.z.data[c.J];e=c.bb;BL(B0(f,Ee(Fv(b),e)),10);g=a.z.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;ABM(B0(f,Fv(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.z.data[d.J];h=d.bb;B0(f,Cp(Fv(b),0,h));return M(f);}b=new Zj;Z(b);K(b);}
function Or(a,b,c){var d;Y7(a,b);d=D7(b);F2(a,d.J,d.bb,1,c);}
function Y7(a,b){var c,d,e,f,g,h,i;a:{c=D7(b);d=F3(b);e=c.J;if(e==d.J)GS(a.z.data[e],c.bb,d.bb);else{b=a.z.data[e];GS(b,c.bb,b.S);GS(a.z.data[d.J],0,d.bb);e=c.J+1|0;f=d.J;g=a.z;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(Dv,(h-f|0)+e|0);AD$(g,e,f,i);a.z=i;L8(a,c.J);break a;}b=new Bu;Z(b);K(b);}b=new Bu;Z(b);K(b);}}}
function Jg(a,b,c){return DU(b,Gv(B3(a,b),c));}
function ZO(a,b){var c,d,e;c=0;d=0;while(true){e=a.z.data.length;if(c>=e)break;if((d+(B3(a,c)).S|0)>=b)return B7(c,b-d|0);d=d+((B3(a,c)).S+1|0)|0;c=c+1|0;}return B7(e,0);}
function Fh(a,b){var c,d,e;c=0;d=a.z.data.length;e=0;while(e<b){c=c+Gd(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function ME(a,b){return M0(B3(a,b.bp),b.by);}
function Ez(a){var b,c,d,e,f,g,h,i,j;b=B1(XG(a));c=b.data;d=a.z.data.length;e=0;f=0;while(e<d){g=a.z.data[e].p.data;h=g.length;i=0;while(i<h){j=g[i].v;R4(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F2(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cr=a.cr+1|0;f=a.id;g=R(Hk,1);h=new Hk;h.d8=b;h.eh=c;i=M6(e,C(215),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B7(b,c+J(i[0])|0);break a;}k=B7((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=B7(b,c);}i=g.data;h.mD=k;h.nU=d;h.ge=e;i[0]=h;BF(f,g);K3(a,b,c,d,e);}
function K3(a,b,c,d,e){var f;f=Fh(a,b)+c|0;if(!d){Qv(a.c7,f,J(e));W4(a.en,f,J(e));}else{Zn(a.c7,f,J(e));OY(a.en,f,J(e));}}
function OM(a,b){var c,d,e;c=M6(b.ge,C(215),(-1));if(b.nU){ABm(a,b.d8,b.eh,c);Qv(a.c7,Fh(a,b.d8)+b.eh|0,J(b.ge));W4(a.en,Fh(a,b.d8)+b.eh|0,J(b.ge));}else{c=c.data;d=AJ2();Cb(d.bM,b.d8,b.eh);e=c.length;if(e==1)Cb(d.bC,b.d8,b.eh+J(c[0])|0);else Cb(d.bC,(b.d8+e|0)-1|0,J(c[e-1|0]));Y7(a,d);Zn(a.c7,Fh(a,b.d8)+b.eh|0,J(b.ge));OY(a.en,Fh(a,b.d8)+b.eh|0,J(b.ge));}return b.mD;}
function Wp(a){return a.mJ==a.cr?0:1;}
function H2(a){a.mJ=a.cr;}
function KS(a){var b,c,d;a.jN=BD(a.z.data.length+1|0);b=0;while(b<a.z.data.length){c=a.jN.data;d=b+1|0;c[d]=(c[b]+(B3(a,b)).S|0)+1|0;b=d;}}
function AAP(a,b){var c,d,e,f,g,h;c=a.jN;if(c===null){d=0;e=0;a:{while(true){c=a.z.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DU(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DU(f,0);}return h;}d=AFr(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DU(d,b-(d<0?0:a.jN.data[d])|0);if(h.by>=(B3(a,h.bp)).S){h.bp=h.bp+1|0;h.by=0;}return h;}
var YN=G(0);
function AE_(){B.call(this);this.ig=null;}
function AYT(a){var b=new AE_();ARm(b,a);return b;}
function ARm(a,b){a.ig=b;}
function Eo(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ig));}
function CF(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ig));}
function ALG(a){var b,c;b=a.ig.byteLength;c=new L;N(c);H(U(H(c,C(266)),b),C(267));return M(c);}
var WW=G(0);
function LZ(){var a=this;B.call(a);a.hs=null;a.fM=null;a.nN=null;}
function AFu(a,b){var c=new LZ();AOJ(c,a,b);return c;}
function AYl(a,b,c){var d=new LZ();P4(d,a,b,c);return d;}
function ABL(b){var c,d,e,f,g,h,i;c=new LZ;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=R(BC,0);else{f=R(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Fn(e[h]);h=h+1|0;}}}else f=R(BC,0);P4(c,d,b,f);return c;}
function AOJ(a,b,c){P4(a,b,c,R(BC,0));}
function P4(a,b,c,d){a.hs=b;a.fM=c;a.nN=d;}
function FH(a){var b;b=a.hs;return Fn(b!==null?b.name:a.fM.name);}
function AG8(b){var c;c=new WX;c.r0=b;return c;}
function APa(a){var b,c,d,e,f,g;if(a.fM===null){b=a.nN;c=FH(a);d=ADj(b);e=new L;N(e);H(H(H(e,d),C(268)),c);c=M(e);}else{b=a.nN;c=FH(a);f=a.fM.size;g=f|0;if(g!==f){d=FH(a);e=new L;N(e);H(H(e,C(269)),d);$rt_globals.console.info($rt_ustr(M(e))+f);g=0;}d=ADj(b);e=new L;N(e);U(H(H(H(H(e,d),C(268)),c),C(270)),g);c=M(e);}return c;}
var Pp=G();
function AXa(a){}
function Hy(){var a=this;B.call(a);a.J=0;a.bb=0;}
function Cb(a,b,c){a.J=b;a.bb=c;}
function WY(a,b){a.J=b.J;a.bb=b.bb;}
function TW(a,b){var c;c=BH(a.J,b.J);if(c)return c;return BH(a.bb,b.bb);}
function LS(){var a=this;B.call(a);a.mN=null;a.k9=null;}
function MM(a){return a.mN.bp;}
function KB(a){return a.mN.by;}
function Dv(){var a=this;B.call(a);a.p=null;a.S=0;a.ga=null;a.eO=null;a.dY=null;a.hr=null;a.gs=0;a.hu=0;a.hY=0;}
var A2C=0;var A2D=0;var A2t=0;function ACG(a){var b=new Dv();AFQ(b,a);return b;}
function DV(a){var b=new Dv();S3(b,a);return b;}
function AFQ(a,b){var c;c=R(Cs,1);c.data[0]=ADB(b);S3(a,c);}
function S3(a,b){var c,d,e,f;c=b.data;a.p=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;EK(a);}
function HY(a){return a.p.data.length;}
function VA(a,b){return a.p.data[b];}
function Gv(a,b){var c;c=Jw(a,b);return c<=0?0:a.dY.data[c-1|0];}
function Jw(a,b){var c,d,e,f;c=a.p.data.length;if(!c)return (-1);if(!(a.dY!==null&&!a.hY)){ZP(a);d=0;e=0;f=a.p.data.length;while(d<f){e=e+J(a.p.data[d].v)|0;a.dY.data[d]=e;d=d+1|0;}a.hY=0;}d=Wl(a.dY,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function M0(a,b){var c;c=a.p.data;if(!c.length)return null;return c[Jw(a,b)];}
function GS(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.p=R(Cs,0);EK(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.p.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.p.data[f].v);j=BH(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.p.data[f];if(!b&&c==J(k.v)?1:0){g=a.p;a.p=TC(g,e,R(Cs,g.data.length-1|0));a.S=a.S-d|0;EK(a);return;}a.p.data[e]=D8(FO(Cp(k.v,0,b),Ee(k.v,c)),k.b4,k.bW);}else{g=a.p.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.p.data[e]=D8(Cp(l.v,0,b),l.b4,l.bW);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.p.data[f]=D8(Ee(m.v,c),m.b4,m.bW);g=a.p;a.p=AD$(g,e,f,R(Cs,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;EK(a);}
function IB(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(Dv,[DV(R(Cs,0)),a]);if(b>=a.S)return I(Dv,[a,DV(R(Cs,0))]);c=a.p;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(Dv,[DV(LU(c,0,R(Cs,d))),DV(LU(c,d,R(Cs,f-d|0)))]);h=e[d];e=LU(c,0,R(Cs,d+1|0));i=e.data;j=LU(c,d,R(Cs,f-d|0));c=j.data;i[d]=D8(Cp(h.v,0,b),h.b4,h.bW);c[0]=D8(Ee(h.v,b),h.b4,h.bW);return I(Dv,[DV(e),DV(j)]);}
function Uz(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.p.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}NA(a,d,b,c);}
function NA(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Fc(d))return;e=a.p;f=e.data;g=f.length;if(!g){h=R(Cs,1);h.data[0]=ADB(d);a.p=h;}else if(!b&&!c){h=R(Cs,g+1|0);f=h.data;DA(e,0,h,1,g);f[0]=ADB(d);a.p=h;}else{i=f[b];if(c<=0)j=D8(FO(d,i.v),i.b4,i.bW);else if(c>=J(i.v))j=D8(FO(i.v,d),i.b4,i.bW);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B1(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D8(FD(e),i.b4,i.bW);}f[b]=j;}a.S=a.S
+J(d)|0;EK(a);}
function O3(a){var b,c,d,e,f,g;b=0;c=a.p.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MU(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lr(a,b,c){var d,e,f,g,h,i,j;d=a.p.data.length;e=a.ga;if(!(e!==null&&e.data.length>=d)){a.ga=AIH(d);a.eO=BD(d);a.gs=1;}ZP(a);if(!a.gs)A2D=A2D+1|0;else{f=0;g=0.0;A2C=A2C+1|0;h=0;while(h<d){i=c.data;j=a.p.data[h];f=f+J(j.v)|0;a.dY.data[h]=f;Cv(b,i[J9(j)]);g=g+D0(b,j.v);a.ga.data[h]=g;a.eO.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.gs=0;a.hY=0;}}
function ZP(a){var b;b=a.dY;if(!(b!==null&&b.data.length>=a.p.data.length)){a.dY=BD(a.p.data.length);a.hY=1;}}
function V5(a){a.gs=1;a.hr=null;}
function EK(a){V5(a);a.hu=1;a.hY=1;}
function Uq(a,b,c,d){var e,f,g,h,i,j,k;if(a.hr===null)a.hr=R($rt_arraycls($rt_intcls()),a.p.data.length);e=a.hr.data[d];if(e===null){e=c.data;f=a.p.data[d];Cv(b,e[J9(f)]);f=f.v;e=BD(J(f)-1|0);c=FV(f);g=!d?0.0:a.ga.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;Ny(f,c,0,k);h[i]=g+D0(b,f)+0.5|0;i=k;}a.hr.data[d]=e;}return e;}
function GX(a,b,c,d){var e,f,g,h,i;if(a.p.data.length&&b){if(!(!a.gs&&a.eO!==null))Lr(a,c,d);if(b>=a.S)return a.eO.data[a.p.data.length-1|0];e=0;f=0;a:{while(true){g=a.p.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BH(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eO.data[f];}return (Uq(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Fi(a){var b,c,d;a:{b=a.p.data.length;if(b){c=a.eO.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hg(a,b){var c;if(b>=a.S)return b+1|0;c=Jw(a,b);return a.dY.data[c];}
function Fv(a){var b,c,d,e;b=new L;Gy(b,a.S);c=a.p.data;d=c.length;e=0;while(e<d){B0(b,c[e].v);e=e+1|0;}return M(b);}
function AD5(){A2t=0;}
function Rw(){var a=this;B.call(a);a.fu=null;a.eH=null;}
function ALm(a,b){var c=new Rw();ANr(c,a,b);return c;}
function ANr(a,b,c){a.fu=b;a.eH=c;}
function W4(a,b,c){var d;d=a.fu;if(d===null)return;SY(a,d,b,c);}
function OY(a,b,c){var d;d=a.fu;if(d===null)return;Wt(a,d,b,c);}
function SY(a,b,c,d){var e,f,g,h;e=b.ed.cd();while(e.cy()){AAX(a,e.b5(),c,d);}e=b.eR.cd();while(e.cy()){f=e.b5();g=new V2;g.tr=a;Et(a,g,f,c,d);}h=b.gL.cd();while(h.cy()){e=h.b5();AAX(a,e.ju,c,d);f=new V3;f.pn=a;Et(a,f,e.ks,c,d);}b=b.cz.cd();while(b.cy()){SY(a,b.b5(),c,d);}}
function AAX(a,b,c,d){Kw(a,b.ee,c,d);}
function Et(a,b,c,d,e){var f,g;a:{if(c instanceof GN){f=c.g7;g=new ABi;g.qn=a;g.ql=b;g.qk=d;g.qm=e;Ex(f,g);}else{if(!(c instanceof Jo)){if(!(c instanceof JO))break a;f=c;Et(a,b,f.is,d,e);Et(a,b,f.hn,d,e);return;}g=c.hk;f=new ABj;f.y9=a;f.y8=b;f.y7=d;f.y6=e;Ex(g,f);}}if(c!==null){c=c.fp;if(c!==null)b.j6(c,CQ(d),CQ(e));}}
function Kw(a,b,c,d){var e;e=b.dt;if(e>=c)b.dt=e+d|0;}
function Wt(a,b,c,d){var e,f,g,h;e=b.ed.cd();while(e.cy()){IT(a,(e.b5()).ee,c,d);}e=b.eR.cd();while(e.cy()){f=e.b5();g=new UD;g.wW=a;Et(a,g,f,c,d);}h=b.gL.cd();while(h.cy()){e=h.b5();IT(a,e.ju.ee,c,d);f=new UE;f.v1=a;Et(a,f,e.ks,c,d);}b.ed.m$(new UC);b.eR.m$(new UB);b=b.cz.cd();while(b.cy()){Wt(a,b.b5(),c,d);}}
function IT(a,b,c,d){var e;e=b.dt;if(e>=c)b.dt=e-d|0;}
function Cs(){var a=this;B.call(a);a.v=null;a.b4=0;a.bW=0;}
function ADB(a){var b=new Cs();AMu(b,a);return b;}
function D8(a,b,c){var d=new Cs();V_(d,a,b,c);return d;}
function AMu(a,b){V_(a,b,0,0);}
function V_(a,b,c,d){a.v=b;a.b4=c;a.bW=d;}
function J9(a){return a.bW&3;}
function HU(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MU(a){return J(a.v);}
var LP=G(Ls);
function T0(){var a=this;B.call(a);a.c5=null;a.eB=0;}
var A2E=null;function AGq(a){var b=new T0();AG_(b,a);return b;}
function AG_(a,b){a.eB=0;a.c5=b;}
function RC(a,b){var c;if(b.ey)return b;b=B5(b.bn);while(true){if(!B6(b))return null;c=RC(a,B9(b));if(c!==null)break;}return c;}
function Ps(a,b,c){var d,e,f,g;d=Lz(a,a.c5,b);if(d===null)return;b=c.cj;e=b===null?A2F:b.cz;f=c.bn;c=a.c5;if(d===c){if(c.cj===null)c.cj=b;b=new Uv;b.tj=a;Ex(f,b);b=new Uu;b.wT=a;e.eZ(b);b=a.c5;b.bn=f;b.cj.cz=e;b.ey=0;return;}if(!Ey(f)){c=d.g5;if(c!==null){b=new Qi;b.qs=c;Ex(f,b);g=Lc(c.bn,d);if(g==(-1))Hf(c.bn,f);else{EN(c.bn,g);ACV(c.bn,g,f);}}}b=d.cj;if(b!==null){b=b.gR;c=new UK;c.s0=b;e.eZ(c);g=Lc(b.cz,d.cj);if(g==(-1))Hf(b.cz,e);else{b.cz.n$(g);b.cz.vN(g,e);}}}
function Lz(a,b,c){var d,e,f,g;d=b.bY;if(d.bX==c.bX&&d.b1==c.b1?1:0){d=B5(b.bn);while(B6(d)){e=Lz(a,B9(d),c);if(e!==null)return e;}return b;}b=B5(b.bn);while(true){if(!B6(b))return null;d=B9(b);f=c.bX;g=c.b1;e=d.bY;if(e.bX<=f&&g<=e.b1?1:0){e=Lz(a,d,c);if(e!==null)break;}}return e;}
function VZ(a,b,c){BF(c,b.bY);b=B5(b.bn);while(B6(b)){VZ(a,B9(b),c);}}
function Qv(a,b,c){a.eB=0;Ly(a,a.c5,b,c);}
function Ly(a,b,c,d){var e;if(Db(b)<c)return;a:{if(De(b)>c){Mw(b,d);HT(b,d);b=B5(b.bn);while(B6(b)){Ly(a,B9(b),c,d);}}else{if(!Ka(b,c)){if(a.eB)break a;if(Db(b)!=c)break a;}HT(b,d);if(De(b)==c&&a.eB)Mw(b,d);e=B5(b.bn);while(B6(e)){Ly(a,B9(e),c,d);}if(!a.eB){b.ey=1;a.eB=1;}}}}
function Zn(a,b,c){a.eB=0;Kh(a,a.c5,b,c);}
function Kh(a,b,c,d){var e,f,g,h,i,j;if(Db(b)<c)return;e=De(b);f=c+d|0;if(e>f){e= -d|0;Mw(b,e);HT(b,e);g=B5(b.bn);while(B6(g)){Kh(a,B9(g),c,d);}b.bn=Oo(a,b.bn);}else{h=b.bY;if(c<=h.bX&&h.b1<=f?1:0){if(b===a.c5){ML(b,0);Ke(b,0);h=b.cj;if(h!==null)h.cz.i7();}else{ML(b,(-1));Ke(b,(-1));h=b.cj;if(h!==null){AAw(h);b.cj=null;}}H7(b.bn);}else{e=Ka(b,c);f=Ka(b,f);if(e&&f)HT(b, -d|0);else if(e)Ke(b,c);else{if(!f)return;ML(b,c);HT(b, -d|0);}h=B5(b.bn);while(B6(h)){Kh(a,B9(h),c,d);}h=Xu(b.bn);g=QT(0);i=new T7;j=new XF;j.CB
=i;j.kh=g;while(W8(h,j)){}if(!j.kh.oc&&!a.eB)b.ey=1;else a.eB=1;b.bn=Oo(a,b.bn);}}}
function Oo(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BI();d=null;e=A2E;f=b.cE;g=b.j;if(e===null)e=A01;h=R(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ADI(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b2=b.b2+1|0;b=B5(b);while(B6(b)){m=B9(b);if(De(m)==Db(m))continue;if(!m.ey){if(d!==null){BF(c,d);d=null;}BF(c,m);}else if(d===null)d=m;else{n=AV6(KC(Bc(De(d),De(m)),Be(Db(d),Db(m)),d.bY.fi),d.g5,d.cj);n.ey=1;d=m.cj;if(d===null)d=n;else{AAw(d);d=n;}}}if(d!==null)BF(c,d);return c;}
function ZG(a,b,c,d){var e,f,g,h,i,j;if((Db(c)-De(c)|0)<43)e=Cp(d,De(c),Db(c));else{e=Cp(d,De(c),De(c)+20|0);f=Cp(d,Db(c)-20|0,Db(c));g=new L;N(g);H(H(H(g,e),C(180)),f);e=M(g);}e=XA(e,C(215),C(271));f=BA();g=CC(c);h=new L;N(h);i=U(h,b);BL(i,32);g=H(i,g);BL(g,9);H(g,e);Bq(f,M(h));c=B5(c.bn);j=b+1|0;while(B6(c)){ZG(a,j,B9(c),d);}}
function AHm(){A2E=new YY;}
function AHJ(){var a=this;B.call(a);a.bX=0;a.b1=0;a.fi=0;}
function KC(a,b,c){var d=new AHJ();AMm(d,a,b,c);return d;}
function AMm(a,b,c,d){a.bX=b;a.b1=c;a.fi=d;}
function AUH(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.bX==c.bX&&a.b1==c.b1&&a.fi==c.fi?1:0;}return 0;}
function AKT(a,b){var c;b=b;c=BH(a.bX,b.bX);if(!c)c=BH(b.b1,a.b1);return c;}
var YY=G();
function AP0(a,b,c){var d;b=b;c=c;b=b.bY;c=c.bY;d=BH(b.bX,c.bX);if(!d)d=BH(c.b1,b.b1);return d;}
function S9(){var a=this;B.call(a);a.bY=null;a.g5=null;a.bn=null;a.cj=null;a.ey=0;}
function AV6(a,b,c){var d=new S9();AGp(d,a,b,c);return d;}
function AGp(a,b,c,d){a.ey=0;a.bY=b;a.g5=c;a.bn=BI();a.cj=d;}
function AHO(b){return Tp(b,null);}
function Tp(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=KC(d,e,f);j=new S9;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGp(j,i,null,l);m=0;while(m<g){l=Tp(b,c);l.g5=j;BF(j.bn,l);m=m+1|0;}return j;}
function ACh(b,c,d){var e,f,g,h,i;a:{e=b.bY;f=b.bn;g=e.bX;h=e.b1;i=e.fi;Br(c,g);G7(c,h,i);Br(c,f.j);if(d!==null){e=b.cj;if(e!==null&&YJ(d,e)){g=(M9(d,b.cj)).bt;break a;}}g=(-1);}Br(c,g);b=B5(f);while(B6(b)){ACh(B9(b),c,d);}}
function De(a){return a.bY.bX;}
function Db(a){return a.bY.b1;}
function ML(a,b){a.bY.bX=b;}
function Ke(a,b){a.bY.b1=b;}
function Mw(a,b){var c;c=a.bY;c.bX=c.bX+b|0;}
function HT(a,b){var c;c=a.bY;c.b1=c.b1+b|0;}
function Ka(a,b){return De(a)<=b&&b<Db(a)?1:0;}
function AJl(a){var b,c,d,e,f;b=a.bY;c=b.bX;d=b.b1;e=b.fi;b=new L;N(b);BL(b,40);BL(U(H(U(H(U(b,c),C(36)),d),C(36)),e),41);b=M(b);c=a.ey;f=new L;N(f);H6(H(H(f,b),C(36)),c);return M(f);}
function AKD(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BW(a.bY,c.bY)&&BW(a.bn,c.bn)?1:0;}return 0;}
var HV=G(0);
function G0(){var a=this;B.call(a);a.cI=null;a.cY=null;}
function A2G(a,b){var c=new G0();ABc(c,a,b);return c;}
function ABc(a,b,c){a.cI=b;a.cY=c;}
function ALJ(a,b){var c,d;if(a===b)return 1;if(!Jl(b,HV))return 0;a:{b:{c:{d:{c=b;b=a.cI;if(b!==null){if(!b.bJ(c.cI))break c;else break d;}if(c.cI!==null)break c;}b=a.cY;if(b!==null){if(!b.bJ(c.cY))break c;else break b;}if(c.cY===null)break b;}d=0;break a;}d=1;}return d;}
function G_(){var a=this;G0.call(a);a.kd=0;a.cP=null;}
function LJ(){var a=this;LN.call(a);a.rX=null;a.qo=null;}
function ACo(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.rX;e=0;f=0;g=a.qo;a:{while(true){if((e+32|0)>f&&D1(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bc(Ce(b)+j|0,i.length);O4(b,d,j,f-j|0);e=0;}if(!D1(c)){k=!D1(b)&&e>=f?A1J:A1I;break a;}i=g.data;j=Bc(Ce(c),i.length);l=new Pn;l.oV=b;l.sS=c;k=AEX(a,d,e,f,g,0,j,l);e=l.w5;j=l.yw;if(k===null){if(!D1(b)&&e>=f)k=A1J;else if(!D1(c)&&e>=f)k=A1I;}ZN(c,g,0,j);if(k!==null)break;}}E7(b,b.ba-(f-e|0)|0);return k;}
var Rx=G(LJ);
function AEX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(MH(h,2))break a;i=A1I;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Nf(l)){if((f+3|0)>g){j=j+(-1)|0;if(MH(h,3))break a;i=A1I;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CK(l)){i=Ei(1);break a;}if
(j>=d){if(D1(h.oV))break a;i=A1J;break a;}c=j+1|0;m=k[j];if(!C$(m)){j=c+(-2)|0;i=Ei(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(MH(h,4))break a;i=A1I;break a;}k=e.data;o=ES(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.w5=j;h.yw=f;return i;}
var Jb=G(El);
var N5=G();
function AXn(a,b){return b.text();}
function N8(){var a=this;B.call(a);a.uw=null;a.uv=null;}
function AWc(a,b){var c,d,e,f,g;c=a.uw;d=a.uv;e=b.length;f=new Pj;f.wE=b;g=(AGu(e,f)).lD;b=new Nj;f=AGc(d);AAv(b,g,null,f);c.g(b);}
var N6=G();
function AJP(a,b){AHA(b);}
function IP(){var a=this;B.call(a);a.bD=null;a.fG=null;a.nr=null;a.ht=null;a.dR=null;a.w8=null;a.xO=null;a.yt=null;}
function A2H(a,b,c,d,e){var f=new IP();JS(f,a,b,c,d,e);return f;}
function If(){var b,c,d,e,f,g,h,i;b=new IP;c=new Ji;d=new HJ;Ft();KJ(d,A2I);Np(c,d,BR(A2n),BR(A2J),BR(A2K),BR(A2n),BR(A2L),BR(A2M),BR(A2N),BR(A2O),BR(A2P),BR(A2Q));ADD();e=(A2R.hh()).data;f=e.length;g=R(JH,f);h=g.data;i=0;while(i<f){h[i]=e[i].nB;i=i+1|0;}JS(b,c,g,AFM(S(C(272)),S(C(273)),S(C(274)),S(C(275))),F$(),ABT(S(C(118)),S(C(119)),S(C(120)),S(C(276))));return b;}
function JS(a,b,c,d,e,f){var g;g=c.data;a.w8=ED(C(161),16.0);a.xO=ED(C(161),17.0);a.yt=ED(C(160),15.0);a.bD=b;a.nr=c;a.ht=d;if(g.length>=15){a.fG=e;a.dR=f;return;}b=new BP;Z(b);K(b);}
function OT(a,b){if(b===null)b=a.bD.eD;return b;}
function JR(){var a=this;CH.call(a);a.cL=null;a.fV=null;}
function AZ3(a){var b=new JR();AHZ(b,a);return b;}
function AHZ(a,b){var c,d,e,f;Fs(a,b);c=AUy(a.r);a.fV=c;d=AD4(a.r,c);a.cL=d;PH(a.r,d);Ba(b.l.bm,a.fV);Ba(b.l.dC,a.fV);Ba(b.l.bm,a.cL);c=b.l.bZ;d=new RG;d.rh=a;Ba(c,d);c=b.l.bZ;d=new IJ;e=a.cL;BO(e);f=new RE;f.x2=e;Op(d,b,f);Ba(c,d);c=b.l.f8;d=a.cL;BO(d);e=new RF;e.rc=d;Ba(c,e);c=b.l.gJ;d=new PL;d.sp=a;Ba(c,d);c=b.l.dC;d=new PM;d.yX=a;Ba(c,d);b=b.l.eo;c=new PJ;c.pD=a;Ba(b,c);K5(a);}
function AOl(a,b){if(ZH(a.r,b)){TJ(a.fV);LB(a.cL,b);}}
function AU5(a,b){return L3(a.cL,b);}
function ANX(a){Fl(a);JP(a.cL);AA7(a.fV);}
function AWT(a){return JJ(0);}
function AIx(a,b,c){G8(a,b,c);a.mO(b,c);}
function AFI(a,b,c){J4(a.cL,new Bd,b,c);}
function AMh(a,b){BO(b);Oi(a.fV,b);KZ(a.cL,b);}
function AD8(a,b){if(b.bo!=121)return 0;return 1;}
function ACs(a,b){var c,d,e;if(Ed(a.r,a.cL)){c=a.fV;d=a.cL;e=new U6;e.vj=a;Kq(c,b,d,a,d,a,e);}return 1;}
function AB0(){var a=this;Cj.call(a);a.sY=null;a.lT=null;a.jh=null;a.d$=null;a.j4=null;a.g6=null;a.ea=null;a.hU=null;a.oM=null;a.iA=null;a.n3=null;a.n4=null;a.mz=null;a.tz=null;a.An=null;a.tg=0;}
function A0u(a){var b=new AB0();AQf(b,a);return b;}
function AQf(a,b){var c,d,e,f;DS(a,b);c=(If()).bD.eD;a.sY=c;a.lT=AHx(c);a.jh=new Bd;a.d$=Kx();a.j4=Kx();a.g6=VS(0,0,3,3);a.ea=Hz(0,0,300,300);a.hU=ANT();d=R(BC,4);e=d.data;e[0]=C(220);e[1]=C(189);e[2]=C(235);e[3]=C(234);a.oM=d;a.iA=R(JA,e.length);c=b.l.bm;f=new Xg;f.fh=a;Ba(c,f);c=b.l.bZ;f=new Sd;f.y_=a;Ba(c,f);c=b.l.oo;f=new Sc;f.sm=a;Ba(c,f);c=b.l.f8;f=new Sb;f.BC=a;Ba(c,f);c=b.l.kL;f=new Sa;f.zA=a;Ba(c,f);c=b.l.eo;f=new R_;f.AK=a;Ba(c,f);b=b.l.dC;c=new R$;c.wR=a;Ba(b,c);a.n3=Yv(a,1);a.n4=Yv(a,0);T9(a,a.d$,
a.n3);T9(a,a.j4,a.n4);a.mz=AAt(a,0);a.tz=AAt(a,1);FC(a.ea,a.mz);FS(a.ea);GF(a.ea,Dr(169,183,198));Fw(a.ea,a.sY);Cc(a.d$.P,1.0,1.0,1.0,1.0);Fw(a.d$,a.ea.bg);BU(a.g6.bg,a.lT);}
function T9(a,b,c){FC(b,c);FS(b);}
function UJ(a,b){H4(DR(),0.5+DR()*0.5,0.5+DR()*0.5,1.0,b.P);}
function Yv(a,b){var c,d;c=Eh(a.C.G,200,100,b);GB(c,C(277),11.0);BQ(c,C(278),0.0,20.0);Ja(c,255,0,0);BQ(c,C(278),0.25,40.0);Ja(c,0,255,0);BQ(c,C(278),0.5,60.0);Ja(c,0,0,255);BQ(c,C(278),0.75,80.0);d=C0(a.C.G);CN(d,c);EU(c);return d;}
function AAt(a,b){var c,d,e,f;c=Eh(a.C.G,255,100,b);GB(c,C(161),10.0);d=BA();e=$rt_str(c.c0.font);f=new L;N(f);H(H(f,C(279)),e);Bq(d,M(f));D0(c,C(280));BQ(c,C(280),0.0,20.0);BQ(c,C(280),0.25,40.0);BQ(c,C(280),0.5,60.0);BQ(c,C(280),0.75,80.0);e=C0(a.C.G);CN(e,c);EU(c);return e;}
function AI7(a,b){var c;a.tg=a.tg+1|0;c=b/5.0;H4(c-(c|0),1.0,1.0,1.0,a.g6.P);return VQ(a.hU,b);}
function AL_(a){var b,c,d,e,f,g,h,i;b=a.C.G;EG(b,a.lT);c=a.iA.data;d=c.length;e=0;while(e<d){TM(c[e],b,0,0);e=e+1|0;}f=a.ea;g=f.s;g.b=(a.jh.b-f.q.b|0)-5|0;g.a=0;B4(b,0);h=0;while(h<7){f=a.ea;EB(f,b,a.mz,W(h,10+((10*f.q.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.ea;f.s.b=(a.jh.b-(f.q.b*2|0)|0)-10|0;h=0;while(h<7){g=a.tz;f=a.ea;f.s.a=W(h,10+((10*f.q.a|0)/15|0)|0)+5|0;Vz(f,b,g,1);h=h+1|0;}Vz(a.d$,b,a.n3,1);B4(b,1);g=a.j4;f=a.n4;i=g.s;h=i.a;d=i.b;g=g.q;F0(b,b.kD);Gn(b.kD,b.Y,h,d,g,b.c6);Mj(b.kD,b.Y,f);FY(b);B4(b,0);f=a.An;if
(f!==null)AA1(a.g6,b,f,0,0,0.0);Xh(a.hU,b,new Bd);Kv(b,C(281));}
function API(a,b,c){var d,e,f,g,h,i,j,k;d=BA();e=CC(b);f=new L;N(f);H(H(f,C(282)),e);Bq(d,M(f));d=BA();f=new L;N(f);E8(H(f,C(283)),c);Bq(d,M(f));g=Cf(30.0,c);h=Cf(10.0,c);i=0;while(true){j=a.iA.data;if(i>=j.length)break;k=1+i|0;j[i]=VS(W(h,k)+W(g,i)|0,g,g,g);UJ(a,a.iA.data[i]);i=k;}V(a.g6.s,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.d$;V(f.s,((b.a/2|0)-f.q.a|0)-10|0,50);V(a.j4.s,(b.a/2|0)+10|0,50);Ci(a.jh,b);}
function O1(a,b){var c,d,e,f,g;c=BA();d=!b.io?C(284):C(285);e=b.d4;f=b.bo;g=b.uP;b=new L;N(b);H6(H(U(H(H(H(b,d),e),C(286)),f),C(287)),g);Bq(c,M(b));return 0;}
function VX(){var a=this;Cj.call(a);a.AQ=null;a.i3=null;a.iC=null;a.hc=null;a.c_=null;a.dz=null;a.l_=null;a.lO=null;a.h1=0;a.h_=null;a.h$=null;}
function SE(a,b,c){FC(b,c);FS(b);}
function ABl(a,b,c,d,e,f){var g,h;g=Eh(f,c,120,b);Cv(g,e);e=!b?C(288):C(289);h=new L;N(h);H(H(H(h,e),d),C(158));d=M(h);BQ(g,d,0.0,20.0);BQ(g,d,0.25,40.0);BQ(g,d,0.5,60.0);BQ(g,d,0.75,80.0);BQ(g,d,1.0,100.0);h=C0(f);CN(h,g);EU(g);return h;}
function ARS(a,b){return 0;}
function AKF(a){var b,c,d,e,f,g,h,i;b=a.C.G;EG(b,a.i3);B4(b,0);c=a.iC;d=c.b;e=a.hc;f=d-e.b|0;g=c.a-e.a|0;Bx(b,0,0,e,a.c_.bg);Bx(b,g,0,a.hc,a.dz.bg);Bx(b,0,f,a.hc,a.c_.P);Bx(b,g,f,a.hc,a.dz.P);c=a.c_;e=c.s;h=e.b;i=((a.iC.b*3|0)/4|0)-(c.q.b/2|0)|0;H9(c,b,e.a,h,a.h_,0,1);c=a.c_;H9(c,b,c.s.a,i,a.h_,1,1);c=a.dz;H9(c,b,c.s.a,h,a.h$,0,0);e=a.dz;H9(e,b,e.s.a,i,a.h$,1,0);Kv(b,C(281));}
function AMT(a,b,c){var d,e;Ci(a.iC,b);V(a.hc,b.a/2|0,b.b/2|0);d=a.iC.b/4|0;e=a.c_;d=d-(e.q.b/2|0)|0;V(e.s,(b.a/4|0)-(a.h1/2|0)|0,d);V(a.dz.s,((b.a*3|0)/4|0)-(a.h1/2|0)|0,d);}
function PX(){var a=this;CH.call(a);a.sN=null;a.eN=null;a.dk=null;a.ez=null;a.op=null;}
function AOT(a,b,c){var d;d=HK(a.r,a.op);Ip(a.eN,d,a.r);Ip(a.dk,d,a.r);}
function Tu(b){return IY(b,AU8());}
function IY(b,c){var d;d=L5();MZ(d,K8(b,Je(c,25)),!b?null:IY(b-1|0,c));MZ(d,K8(b,Je(c,20)),!b?null:IY(b-1|0,c));MZ(d,K8(b,Je(c,15)),!b?null:IY(b-1|0,c));MZ(d,K8(b,Je(c,10)),!b?null:IY(b-1|0,c));return G3(d);}
function K8(b,c){var d;if(b){d=new L;N(d);H(H(U(d,b),C(28)),c);c=M(d);}return c;}
function MZ(b,c,d){if(d!==null)Fm(b,c,d);else{d=new ZJ;d.rP=c;DJ(b,c,d);}}
function AMZ(a,b,c){var d,e;G8(a,b,c);b=a.r.cf;d=Eu(a.eN);e=Eu(a.dk);KX(a.eN,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);KX(a.dk,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AMb(a){var b,c,d,e,f,g,h,i;Fl(a);b=a.C.G;B4(b,1);c=a.sN;d=a.r;e=d.cf;V(c.nm,e.a,Cf(2.0,d.b3));V(c.n7,Cf(2.0,d.b3),e.b);Ft();f=A2P;g=d.cH;h=e.b/2|0;i=c.nm;Bx(g,0,h-(i.b/2|0)|0,i,f);g=d.cH;h=e.a/2|0;c=c.n7;Bx(g,h-(c.a/2|0)|0,0,c,f);MY(a.eN,a.r);MY(a.dk,a.r);Gw(a.ez);B4(b,0);}
function APK(a,b){var c,d,e;c=LT(a.ez,b);d=LW(a.eN,b.i,a.r.cO);e=LW(a.dk,b.i,a.r.cO);return !c&&!d&&!e?0:1;}
function AVg(a,b,c){return Nm(a.ez,b,c);}
function AUu(a,b,c){return Dj(a.ez);}
function AJ1(a,b,c,d){var e,f,g;e=KK(a.ez,b,c,d);f=MO(a.eN,b.i,c,d);g=MO(a.dk,b.i,c,d);return !e&&!f&&!g?0:1;}
function Vp(){var a=this;CH.call(a);a.iQ=null;a.fl=null;a.kf=null;a.lI=null;}
function ALQ(a,b,c){if(b===0.0)Sy(a);}
function ASr(a){var b;Fl(a);b=a.C.G;L6(a.fl,b);Gw(a.iQ);}
function Sy(a){var b,c,d,e,f,g,h;b=a.kf;if(b!==null){J7(a.fl,b);L9(b);}b=(If()).fG;c=A0e(a.r,new OB);d=ED(C(160),14.0);e=AOQ();f=0;while(f<300){g=C_(f);h=new Vg;h.qc=C(290);h.qb=g;h.qa=C(291);ND(e,C(290),g,C(291),h);f=f+1|0;}O_(c,Zk(e));ABp(c,b,d);g=ABZ(a.r);h=ABB(c,a.r);Nr(h,b.lS,b.lo);Ld(g,h);g.e7=b;Iy(g,C(292),a.lI,2.0);a.kf=g;HX(a.fl,g);Rn(a);}
function AKr(a,b,c){G8(a,b,c);AAQ(a.fl,b,c);Rn(a);}
function Rn(a){var b,c,d;b=a.r.cf;F1(a.kf,B7((b.a*2|0)/10|0,(b.b*4|0)/10|0),B7((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kf;b=ABz(c.V.t);d=new L;N(d);H(H(d,C(293)),b);Iy(c,M(d),a.lI,2.0);}
function AL5(a,b){return Sg(a.fl,b);}
function OW(){var a=this;CH.call(a);a.kQ=null;a.g1=null;a.fR=null;a.jn=null;a.rH=null;a.ja=null;a.hf=null;a.gF=null;a.jS=0;a.g0=0;}
function PS(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.g1.j>0){d=DR();e=a.g1;f=d*(e.j-1|0)|0;e=EN(e,f);EN(a.fR,f);f=a.g0;g=e.q;a.g0=f-W(g.a,g.b)|0;IU(a.kQ,e.c$);}c=c+1|0;}}
function MI(a,b){var c,d,e,f,g,h,i,j;c=Jx(a.r);Cv(c,a.jn);d=0;while(d<b){e=Je(a.ja,1+(DR()*19.0|0)|0);f=Kx();g=f.c$;h=a.kQ;BO(c);i=new Su;i.vK=c;BU(g,JM(h,e,i));(ZI(DR(),1.0,1.0,f.bg)).bF=0.5;h=f.s;g=f.c$;V(h,g.bl|0,g.bq|0);h=f.q;g=f.c$;V(h,g.bf|0,g.bF|0);BF(a.fR,e);BF(a.g1,f);j=a.g0;h=f.q;a.g0=j+W(h.a,h.b)|0;d=d+1|0;}a.gF=J$(a.kQ);}
function AUk(a){var b,c,d,e,f,g,h,i;Fl(a);b=a.C.G;B4(b,1);c=a.r.cH;if(a.fR.j){d=a.gF;d=GO(c,d.a,d.b);Cv(d,a.jn);e=a.jn.c9;Bx(c,0,0,a.gF,a.rH);f=0;while(f<a.fR.j){g=Bt(a.g1,f);h=Bt(a.fR,f);g=g.c$;BQ(d,h,g.bl,g.bq+e);f=f+1|0;}g=a.hf;if(!(g!==null&&BX(g)==a.gF.a&&Dd(a.hf)==a.gF.b))a.hf=CM(a.hf,C0(c));CN(a.hf,d);EU(d);i=0;while(i<a.fR.j){d=Bt(a.g1,i);GF(d,C8(0));EB(d,c,a.hf,0,0);i=i+1|0;}}B4(b,0);}
function AIW(a,b){var c,d;if(a.jS){c=a.gF;d=Bc(W(c.a,c.b),2211840);if(a.g0/d<=0.7)MI(a,F6(a.ja,5));else PS(a,F6(a.ja,5));}return a.jS;}
function Vj(){var a=this;Cj.call(a);a.eM=null;a.g4=null;a.iB=null;a.lu=null;a.er=0;a.wo=0;a.rI=null;a.k$=0;a.p6=0;a.qP=null;a.vv=null;}
function AIw(a){var b,c;b=a.er;c=new L;N(c);U(H(c,C(294)),b);$rt_globals.console.info($rt_ustr(M(c)));EG(a.eM,a.rI);JC(a.iB,a.er,0,GA(a),5000,a.lu.a,20);B4(a.eM,1);ZY(a.iB,a.eM);B4(a.eM,0);b=a.er;c=new L;N(c);U(H(c,C(294)),b);$rt_globals.console.info($rt_ustr(M(c)));V4(a.g4,a.er/a.k$|0);VC(a.g4,a.er,GA(a),a.vv,a.eM);}
function AIu(a,b,c){a.lu=b;UA(a.g4,B7(0,0),50,GA(a),c);L4(a.g4,a.eM,0,GA(a));}
function YC(a){return 5000-GA(a)|0;}
function GA(a){return Bc(a.wo,a.lu.b);}
function D6(){var a=this;Cj.call(a);a.nx=null;a.hm=null;a.zC=0.0;}
function A2S(a){var b=new D6();IH(b,a);return b;}
function IH(a,b){DS(a,b);a.nx=ADk(0,0,64);a.hm=new Bd;O8(b.cb,IO(BJ(a)));}
function UF(a){EG(a.C.G,a.nx);}
function Va(a,b,c){Ci(a.hm,b);a.zC=c;}
var SB=G(D6);
function Pk(){CH.call(this);this.iK=null;}
function AHt(b,c,d){var e,f,g,h;e=BD(1);e.data[0]=(c*100|0)+d|0;f=new ABb;f.xx=c;f.xw=d;f.xy=b;g=new ABa;h=R(B,1);h.data[0]=e;Jr(b,g,c,C(295),h);Jr(b,f,c,C(296),R(B,0));}
function AWm(a){Fl(a);Gw(a.iK);}
function Ht(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.cb;f=new Yc;f.Bd=a;f.uR=b;g=R(B,1);h=g.data;i=BD(1);i.data[0]=b;h[0]=i;CO(e,f,C(297),g);d=d+1|0;}}
function Z1(a,b){var c,d,e,f,g,h;c=b.data;d=BA();e=CC(c[0]);f=new L;N(f);H(H(f,C(298)),e);Bq(d,M(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((It(b,1)).ig));d=BA();e=CC(c[1]);if(b===null)f=C(22);else{f=new L;N(f);B0(f,C(35));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B0(f,C(36));U(f,c[g]);g=g+1|0;}B0(f,C(37));f=M(f);}h=new L;N(h);H(H(H(H(h,C(299)),e),C(300)),f);Bq(d,M(h));}
function Oe(){var a=this;D6.call(a);a.ep=null;a.fW=null;a.m0=null;a.w0=null;a.oq=null;}
function AOj(a,b){b=b/5.0;H4(b-(b|0),1.0,1.0,1.0,a.fW.P);return 0;}
function ALR(a){UF(a);EB(a.ep,a.C.G,a.w0,0,0);AA1(a.fW,a.C.G,a.m0,0,0,0.0);Kv(a.C.G,C(281));}
function AWL(a,b,c){var d,e,f;Va(a,b,c);V(a.fW.s,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.ep;e=d.s;f=b.a;d=d.q;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Ve(){var a=this;D6.call(a);a.gj=null;a.pU=null;a.k5=null;a.jX=null;a.it=null;}
function AXN(a){var b,c,d,e,f,g;UF(a);b=a.C.G;c=a.jX;Mt(b,c.a,c.b,a.it);b=a.gj;c=a.pU;d=a.hm;e=a.C.G;f=0;while(true){g=0;while(true){EB(b,e,c,g,f);g=g+BX(c)|0;if(g>=d.a)break;}f=f+Dd(c)|0;if(f>=d.b)break;}Hv(a.C.G);}
function ANO(a,b,c){Va(a,b,c);V(a.it,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function U$(){var a=this;Cj.call(a);a.eu=null;a.k_=null;a.fY=null;a.b_=null;a.eY=0;a.h7=null;a.eX=0;a.BV=20;a.Ch=11;a.zt=220;a.ky=null;a.A_=5000;a.hC=0;a.f_=null;}
function AWh(a){var b,c,d,e,f,g,h;b=a.h7;c=a.eX;d=a.ky;JC(b,c,0,d.b,5000,d.a,20);B4(a.eu,1);ZY(a.h7,a.eu);if(a.b_===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BQ(a.k_,C_(e),0.0,c);}b=C0(a.eu);a.b_=b;CN(b,a.k_);}if(a.eX<=a.eY)while(true){f=a.eY;if(f<=a.eX)break;a.eY=f-20|0;b=a.fY;g=a.hC-1|0;a.hC=g;BQ(b,C_(g),0.0,20.0);IG(a.b_,a.fY,0,a.eY%220|0);EX(a.fY);}else while(a.eY<(a.eX-20|0)){b=a.fY;g=a.hC+1|0;a.hC=g;BQ(b,C_((g+11|0)-1|0),0.0,20.0);IG(a.b_,a.fY,0,a.eY%220|0);EX(a.fY);a.eY=a.eY+20|0;}b=Hz(0,0,BX(a.b_),Dd(a.b_));Ia(b,
0,0,BX(a.b_),Dd(a.b_));GF(b,a.f_.data[0]);Fw(b,a.f_.data[1]);EB(b,a.eu,a.b_,400,0);g=a.eX%220|0;f=Bc(Dd(a.b_)-g|0,200);d=Hz(0,0,BX(a.b_),f);Ia(d,0,g,BX(a.b_),f);GF(d,a.f_.data[0]);Fw(d,a.f_.data[1]);EB(d,a.eu,a.b_,0,0);h=Hz(0,f,BX(a.b_),(Dd(a.b_)-f|0)-20|0);Ia(h,0,0,BX(a.b_),(Dd(a.b_)-f|0)-20|0);GF(h,a.f_.data[1]);Fw(h,a.f_.data[0]);EB(h,a.eu,a.b_,0,0);}
function AMe(a,b,c){Ci(a.ky,b);}
function ATQ(a,b){return 0;}
function Uo(a){return 5000-a.ky.b|0;}
function JD(){D6.call(this);this.dZ=0;}
function TL(a){var b,c;b=a.C.cb;c=new XX;c.qK=a;Tn(b,c,On(a));}
function Rk(a){var b,c,d,e;b=a.dZ+1|0;a.dZ=b;c=IO(F(JD));d=new L;N(d);H(H(U(H(d,C(301)),b),C(28)),c);e=M(d);c=a.C.cb;d=new AAS;d.q4=e;WK(c,e,d,On(a));}
function On(a){var b;b=new So;b.yN=a;return b;}
function APp(a,b,c,d){a:{switch(c){case 0:break;case 2:Rk(a);break a;default:break a;}TL(a);}return 1;}
function UQ(){var a=this;Cj.call(a);a.vD=null;a.gb=null;a.mf=null;a.hV=null;}
function AXA(a){var b;b=a.C.G;EG(b,a.vD);EB(a.gb,b,a.mf,0,0);}
function ARW(a,b,c){var d,e,f;d=a.gb;e=d.s;f=b.a;d=d.q;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Hc(){var a=this;Cj.call(a);a.xa=null;a.ch=null;a.dV=null;a.da=null;a.e6=null;a.et=null;}
function NF(a,b){var c,d;DS(a,b);a.xa=C8(20);a.ch=LM();a.dV=new Bd;a.da=new Bd;a.e6=new Bd;a.et=new Bd;c=b.l.bZ;d=new Xy;d.BH=a;Ba(c,d);Ba(b.l.bm,a);b=a.ch.bg;Ft();BU(b,A2n);BU(a.ch.P,A2p);}
function ADH(a){var b,c,d;b=a.C.G;EG(b,a.xa);c=a.ch;d=c.s;Bx(b,d.a,d.b,c.q,c.bg);B4(b,1);c=a.ch;d=c.s;ABy(b,d.a,d.b,c.q,a.dV,a.da,a.e6,a.et,c.P);B4(b,0);}
function AP5(a,b){return 0;}
var V9=G(Hc);
function ATs(a,b,c){var d,e,f;d=a.ch;e=d.s;f=b.a;d=d.q;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);V(a.dV,0,0);V(a.da,Bc(b.a,b.b),Bc(b.a,b.b));b=a.e6;d=a.dV;V(b,d.a,d.b+20|0);b=a.et;d=a.da;V(b,d.a,d.b+40|0);}
function AU1(a,b){var c,d,e;Ci(a.dV,b.i);b=a.da;c=a.ch;d=c.s;e=d.a;c=c.q;V(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.e6;c=a.dV;V(b,c.a,c.b+20|0);b=a.et;c=a.da;V(b,c.a,c.b+40|0);return 0;}
function V8(){var a=this;Hc.call(a);a.fy=null;a.gf=null;}
function AW_(a,b){var c;c=a.da;b=b.i;c.b=b.b-50|0;a.et.b=b.b+100|0;return 1;}
function ALM(a){var b,c,d,e,f,g,h;b=Be(a.dV.a,a.e6.a);c=Bc(a.da.a,a.et.a);d=Bc(a.dV.b,a.da.b)-50|0;e=Be(a.e6.b,a.et.b)+50|0;Ge(a.ch,b,d,c-b|0,e-d|0);ADH(a);f=a.ch.s.a-10|0;Vc(a,a.C.G,10,f,a.dV,a.e6);g=a.ch;h=g.s.a+g.q.a|0;Vc(a,a.C.G,h,f,a.da,a.et);}
function Vc(a,b,c,d,e,f){var g;V(a.fy,c,a.ch.s.b);V(a.gf,d,e.b-a.ch.s.b|0);g=a.fy;Bx(b,g.a,g.b,a.gf,a.ch.bg);V(a.fy,c,e.b);V(a.gf,d,f.b-e.b|0);e=a.fy;Bx(b,e.a,e.b,a.gf,a.ch.P);V(a.fy,c,f.b);e=a.gf;g=a.ch;V(e,d,(g.s.b+g.q.b|0)-f.b|0);e=a.fy;Bx(b,e.a,e.b,a.gf,a.ch.bg);}
function AJz(a,b,c){}
function Z0(){var a=this;CH.call(a);a.hZ=null;a.ew=null;a.iW=null;a.iX=null;a.qD=null;a.oB=null;a.q3=null;}
function AMU(a,b,c){if(b===0.0)WS(a);}
function AVV(a){var b;Fl(a);b=a.C.G;L6(a.ew,b);Gw(a.hZ);}
function WS(a){TF(a,a.iW);TF(a,a.iX);a.iW=ZX(a,0.5,0,C(302));a.iX=ZX(a,1.0,1,C(303));HX(a.ew,a.iW);HX(a.ew,a.iX);YS(a);}
function TF(a,b){if(b!==null){J7(a.ew,b);L9(b);}}
function ZX(a,b,c,d){var e,f,g;e=ABZ(a.r);f=new QH;g=new Zl;g.sv=a;g.sx=e;g.su=d;W$(f);f.kE=new BZ;f.nd=new Bd;f.rN=g;f.rK=b;if(c){d=ABB(f,a.r);Nr(d,a.qD,a.oB);f=d;}Ld(e,f);e.e7=F$();return e;}
function AUV(a,b,c){G8(a,b,c);AAQ(a.ew,b,c);YS(a);}
function YS(a){var b;b=a.r.cf;F1(a.iX,B7((b.a*2|0)/10|0,(b.b*2|0)/10|0),B7((b.a*7|0)/10|0,(b.b*7|0)/10|0));F1(a.iW,B7(b.a/10|0,b.b/10|0),B7((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function ANP(a,b){return Sg(a.ew,b);}
function Yl(){var a=this;Cj.call(a);a.tD=null;a.lz=null;a.eV=null;a.lt=null;a.lw=0.0;a.gD=null;a.yT=null;a.uA=null;a.rA=null;a.td=null;a.r5=null;a.oI=null;a.zr=null;a.oC=null;a.jP=null;}
var A2T=0;function A0z(a){var b=new Yl();AXc(b,a);return b;}
function AXc(a,b){var c,d,e;DS(a,b);a.tD=new BZ;a.lz=AAs(1.0,0.0,0.0,1.0);a.eV=LM();a.lt=new Bd;a.lw=3.1415927410125732;c=AE5();a.gD=c;a.yT=GM(c,1.25);a.uA=GM(a.gD,1.3333333730697632);a.rA=GM(a.gD,1.5);a.td=GM(a.gD,1.6666666269302368);a.r5=GM(a.gD,2.0);a.oI=AAs(a.lw/24.0,15.0,3.0,0.5);c=AAs(a.lw/12.0,25.0,3.0,0.5);a.zr=c;a.oC=DB([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.jP=I(BZ,[a.gD,a.yT,a.uA,a.rA,a.td,a.r5,a.oI,c]);c=b.l.bZ;d=new R1;d.Cc=a;Ba(c,d);Ba(b.l.bm,a);b=a.eV.P;Ft();BU(b,A2n);Ge(a.eV,0,0,600,60);e
=KL(0.5,0.375);JN(0.375,e);JN(0.375,JN(3.0,KL(e,3.0)));GM(AE5(),3.0);}
function AW3(a,b,c){var d,e,f;Ci(a.lt,b);d=a.eV;e=d.s;f=b.a;d=d.q;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function GM(b,c){var d;d=new BZ;YV(b,c,d);return d;}
function AE5(){var b;b=new BZ;L7(b);return b;}
function AOa(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.G;EG(b,a.tD);B4(b,1);c=a.eV;d=c.s.a;e=c.q.b/2|0;f=0;while(true){g=a.jP.data;if(f>=g.length)break;h=a.oC.data[f];c=g[f];i=O5(c);j=a.eV;k=j.s;l=k.a;m=k.b;MW(b,l,m+h|0,j.q,d+i,((m+e|0)+h|0)+i,c,a.lz);f=f+1|0;}if(A2T){c=A0g(1,2);n=0;while(n<1000){h=F6(c,a.jP.data.length);l=F6(c,a.lt.b-a.eV.q.b|0);j=a.jP.data[h];i=j.bq;i=i-(i|0)>=0.25?0.0:0.5;k=a.eV;MW(b,k.s.a,l,k.q,d+i,(e+l|0)+i,j,a.lz);n=n+1|0;}}B4(b,0);}
function ATZ(a,b){return A2T;}
var NT=G(JR);
function AKM(a){return JJ(1);}
function AX0(a,b,c){AFI(a,b,c);}
function Ji(){var a=this;B.call(a);a.y0=null;a.eD=null;a.v6=null;a.Bj=null;a.ta=null;a.kJ=null;a.qO=null;a.y4=null;a.mG=null;a.mu=null;a.jm=null;}
function A2U(a,b,c,d,e,f,g,h,i,j,k){var l=new Ji();Np(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Np(a,b,c,d,e,f,g,h,i,j,k,l){a.y0=b;a.eD=c;a.v6=d;a.Bj=e;a.ta=f;a.kJ=g;a.qO=h;a.y4=i;a.mG=j;a.mu=k;a.jm=l;}
var ACA=G(0);
function ABN(){var a=this;B.call(a);a.fA=null;a.hj=null;a.qQ=null;a.oT=null;}
function AFM(a,b,c,d){var e=new ABN();AXi(e,a,b,c,d);return e;}
function AXi(a,b,c,d,e){a.fA=b;a.hj=c;a.qQ=d;a.oT=e;}
var AFa=G(0);
function F$(){var b,c,d;b=new IS;c=new I8;AQU();d=A2V;Nv(c,d,A2W,A2X,A2Y,A2Z,d);Mu(b,c,AHs(),AHK(S(C(304)),S(C(116)),S(C(117))),AHs(),ABC(1,0.125),A20,A21);return b;}
function AHs(){var b,c;b=new JB;c=S(C(305));AQU();Lb(b,c,A22,A23);return b;}
function AGR(){var b,c;b=new JB;c=S(C(117));AI6();Lb(b,c,A24,A25);return b;}
function AHf(){var b,c;b=new JB;AGE();c=A26;AJo();Lb(b,c,A27,A28);return b;}
function AHX(){var a=this;B.call(a);a.t9=null;a.or=null;a.wx=null;a.pd=null;}
function ABT(a,b,c,d){var e=new AHX();AJQ(e,a,b,c,d);return e;}
function AJQ(a,b,c,d,e){a.t9=b;a.or=c;a.wx=d;a.pd=e;}
function ABu(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dR.or;break a;case 3:if(c!=3){b=b.dR.pd;break a;}b=b.dR.wx;break a;default:b=b.bD.eD;break a;}b=b.dR.t9;}return b;}
function I4(a,b,c){return ABu(a,b,0,c);}
function Nw(){var a=this;B.call(a);a.j_=null;a.jF=null;}
function NL(a,b){var c;c=a.jF;a.jF=b;return c;}
function Kl(){var a=this;Nw.call(a);a.bT=null;a.b$=null;a.f4=0;a.gh=0;}
function KF(a){var b;b=LO(a);if(b==2){if(LO(a.b$)<0)a.b$=OC(a.b$);return QP(a);}if(b!=(-2))return a;if(LO(a.bT)>0)a.bT=QP(a.bT);return OC(a);}
function LO(a){var b,c;b=a.b$;c=b===null?0:b.f4;b=a.bT;return c-(b===null?0:b.f4)|0;}
function OC(a){var b;b=a.bT;a.bT=b.b$;b.b$=a;EJ(a);EJ(b);return b;}
function QP(a){var b;b=a.b$;a.b$=b.bT;b.bT=a;EJ(a);EJ(b);return b;}
function EJ(a){var b,c,d;b=a.b$;c=b===null?0:b.f4;b=a.bT;d=b===null?0:b.f4;a.f4=Be(c,d)+1|0;a.gh=1;b=a.bT;if(b!==null)a.gh=1+b.gh|0;b=a.b$;if(b!==null)a.gh=a.gh+b.gh|0;}
var AHl=G();
function AKp(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Rb;c=c.buffer;d.f3=c;d.of=new $rt_globals.Int8Array(c);d.li=new $rt_globals.Uint16Array(c);d.vR=new $rt_globals.Int32Array(c);d.sq=new $rt_globals.Float32Array(c);d.sI=new $rt_globals.Float64Array(c);e=d.f3.byteLength;c=new L;N(c);U(H(c,C(306)),e);CL(M(c));e=b.callToCpp1();c=new L;N(c);U(H(c,C(307)),e);CL(M(c));f=b.callToCpp2();c=new L;N(c);E8(H(c,C(308)),f);CL(M(c));c=Od(d,b.getC8String());g=new L;N(g);H(H(g,C(309)),c);CL(M(g));c
=Ou(d,b.getC16String());g=new L;N(g);H(H(g,C(310)),c);CL(M(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f3,h,8));c=AFW(i);g=new L;N(g);H(H(g,C(311)),c);CL(M(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f3,h,8));c=AUd(j);g=new L;N(g);H(H(g,C(312)),c);CL(M(g));k=AD6(d,b.getCDoubleArray8(),8);l=AXQ(k);c=new L;N(c);H(H(c,C(313)),l);CL(D9(c));l=AXE(b.getC8String(),C(314),d);c=MQ();H(H(c,C(315)),l);CL(D9(c));l=AQr(b.getC16String(),C(316),
d);c=MQ();H(H(c,C(317)),l);CL(D9(c));c=ASJ(i,d,b.getCIntArray8(),DB([11,22,33,44,55,66,77,88]));g=MQ();H(H(g,C(318)),c);CL(D9(g));c=AUx(j,d,b.getCFloatArray8(),100,DB([111,222,333,444,555,666,777,888]));g=MQ();H(H(g,C(319)),c);CL(D9(g));b=AUW(k,d,b.getCDoubleArray8(),1000,DB([1111,2222,3333,4444,5555,6666,7777,8888]));c=MQ();H(H(c,C(320)),b);CL(D9(c));}
function AUx(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(321);h=0;i=e;a:{while(h<g){if(C6(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sq[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(322);}return C(323);}
function AUW(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(321);h=0;i=e;a:{while(h<g){if(Gq(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sI[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(322);}return C(323);}
function ASJ(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(321);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.vR[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(322);}return C(323);}
function AXE(b,c,d){var e,f,g,h;e=Od(d,b);if(!Bp(c,e))return C(324);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.of[h])return C(325);f=f+1|0;}return C(322);}
function AQr(b,c,d){var e,f,g,h;e=Ou(d,b);if(!Bp(c,e))return C(324);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.li[h>>>1|0]&65535))return C(325);f=f+1|0;}return C(322);}
function CL(b){Q$(C(2),b);}
function APb(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function RG(){B.call(this);this.rh=null;}
function AKk(a,b){return AD8(a.rh,b);}
function RE(){B.call(this);this.x2=null;}
function ANm(a,b){JV(a.x2,b);}
function RF(){B.call(this);this.rc=null;}
function AVf(a,b,c){return Hq(a.rc,b,c);}
function PL(){B.call(this);this.sp=null;}
function ASN(a){var b,c;b=a.sp.cL;BO(b);c=new P1;c.p1=b;return c;}
function PM(){B.call(this);this.yX=null;}
function APc(a,b,c,d){return KH(a.yX.cL,c,d);}
function PJ(){B.call(this);this.pD=null;}
function AP3(a,b){b=b;return ACs(a.pD,b);}
function AHR(){JA.call(this);this.c$=null;}
function Kx(){var a=new AHR();AWH(a);return a;}
function Hz(a,b,c,d){var e=new AHR();AO$(e,a,b,c,d);return e;}
function AWH(a){Xi(a);a.c$=new BZ;}
function AO$(a,b,c,d,e){Xi(a);a.c$=new BZ;Ge(a,b,c,d,e);}
function FS(a){var b,c;b=a.q;c=a.c$;V(b,c.bf-c.bl|0,c.bF-c.bq|0);}
function FC(a,b){Ia(a,0,0,BX(b),Dd(b));}
function Ia(a,b,c,d,e){Cc(a.c$,b,c,d,e);}
function EB(a,b,c,d,e){var f;f=a.s;DW(b,f.a+d|0,f.b+e|0,a.q,a.c$,c,a.P,a.bg,0);}
function Vz(a,b,c,d){var e;e=a.s;DW(b,e.a,e.b,a.q,a.c$,c,a.P,a.bg,d);}
function H9(a,b,c,d,e,f,g){DW(b,c,d,a.q,a.c$,e,!f?a.P:a.bg,!f?a.bg:a.P,g);}
function GF(a,b){BU(a.P,b);}
function Fw(a,b){BU(a.bg,b);}
function Xg(){B.call(this);this.fh=null;}
function AKG(a,b){var c,d,e,f,g,h;c=b.i;d=c.a;e=a.fh.g6;f=e.q;d=d-f.a|0;g=c.b-f.b|0;V(e.s,d,g);c=a.fh;e=c.C.cb;b=b.i;d=0;a:{while(true){h=c.iA.data;if(d>=h.length)break;if(E_(h[d],b)){b=c.oM.data[d];break a;}d=d+1|0;}b=null;}TQ(e,b);return 1;}
function AIN(a,b,c,d){if(!c&&d==2){b=a.fh;UJ(b,b.d$);}return 1;}
function AKw(a,b,c){var d,e;d=BA();e=new L;N(e);U(H(e,C(326)),c);Bq(d,M(e));if(c)return null;d=b.i;e=!E_(a.fh.d$,d)?null:d;XP(a.fh.hU,d.a,d.b);b=a.fh;RP(b.hU,Km(b.C.cb));if(e===null)b=A2w;else{b=new XH;b.s2=a;b.s3=e;}return b;}
function AJB(a,b,c){var d;b=BA();d=new L;N(d);U(H(d,C(327)),c);Bq(b,M(d));return 1;}
function Sd(){B.call(this);this.y_=null;}
function AVz(a,b){return O1(a.y_,b);}
function Sc(){B.call(this);this.sm=null;}
function ASP(a,b){return O1(a.sm,b);}
function Sb(){B.call(this);this.BC=null;}
function APq(a,b,c){var d,e;Bq(BA(),C(328));d=!c?C(329):C(53);e=new L;N(e);H(H(H(e,C(330)),d),C(331));YW(b,M(e));return 1;}
function Sa(){B.call(this);this.zA=null;}
function AIS(a){Bq(BA(),C(332));}
function R_(){B.call(this);this.AK=null;}
function AR1(a,b){Bq(BA(),C(333));return 1;}
function R$(){B.call(this);this.wR=null;}
function AVJ(a,b,c,d){var e,f,g;b=a.wR;e=( -d|0)/10|0;b=b.d$;f=b.q;f.a=f.a+e|0;f.b=f.b+e|0;b=b.s;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function HJ(){var a=this;BZ.call(a);a.gW=0;a.gZ=0;a.gX=0;a.gY=0;}
function C8(a){var b=new HJ();AXq(b,a);return b;}
function Dr(a,b,c){var d=new HJ();AL3(d,a,b,c);return d;}
function S(a){var b=new HJ();AUE(b,a);return b;}
function EH(a,b,c,d){var e=new HJ();S7(e,a,b,c,d);return e;}
function BR(a){var b=new HJ();KJ(b,a);return b;}
function AXq(a,b){S7(a,b,b,b,255);}
function AL3(a,b,c,d){S7(a,b,c,d,255);}
function AUE(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.gW=JF(P(b,1))*17|0;a.gZ=JF(P(b,2))*17|0;a.gX=JF(P(b,3))*17|0;a.gY=255;}else{a.gW=Ms(P(b,1),P(b,2));a.gZ=Ms(P(b,3),P(b,4));a.gX=Ms(P(b,5),P(b,6));a.gY=J(b)!=9?255:Ms(P(b,7),P(b,8));}Ig(a.gW,a.gZ,a.gX,a.gY,a);return;}}
function S7(a,b,c,d,e){a.gW=b;a.gZ=c;a.gX=d;a.gY=e;Ig(b,c,d,e,a);}
function KJ(a,b){a.gW=b.gW;a.gZ=b.gZ;a.gX=b.gX;a.gY=b.gY;BU(a,b);}
function JF(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Ms(b,c){return (16*JF(b)|0)+JF(c)|0;}
var AGa=G(0);
function JJ(b){return !b?I(BC,[C(160),C(161),C(334)]):I(BC,[C(160),C(161),C(334),C(33)]);}
function Oa(){B.call(this);this.kA=null;}
function AME(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.kA.c_;e=DR();f=e-0.5+(DR()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DR()*0.3;h=0.5+DR()*0.5;H4(e,g,h,1.0,b.P);H4(f,g,h,1.0,b.bg);b=a.kA;BU(b.dz.P,b.c_.P);b=a.kA;BU(b.dz.bg,b.c_.bg);}return 1;}
function N7(){var a=this;B.call(a);a.nm=null;a.n7=null;}
function AFb(){var a=this;B.call(a);a.fC=null;a.cp=null;a.gd=null;a.gS=null;a.nA=null;a.cA=null;a.gB=null;a.cX=0;a.fH=0;a.n0=0;a.jx=0;a.j9=0;a.gN=0;a.kv=null;a.lX=null;a.oy=null;a.nf=null;}
function AEN(){var a=new AFb();AUM(a);return a;}
function AUM(a){a.cp=LM();a.gd=new Bd;a.gS=new Bd;a.cA=A29;a.jx=(-1);a.j9=1;}
function K6(a,b){MF(a);a.cA=b;}
function Ip(a,b,c){a.fC=b;YM(a,c);MF(a);}
function Iv(a,b){var c;a.nA=b.jL;c=b.l4.nh;BU(a.cp.P,c);c=b.iZ.mK;BU(a.cp.bg,c);a.nf=b.l4;}
function Pe(a){a.gB=CM(a.gB,null);V(a.gd,0,0);a.cA=A29;a.jx=(-1);VR(a.cp);}
function YM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Jx(b);d=b.b3;BO(a.fC);Cv(c,a.fC);e=KV(a.fC,1.25);f=0;a.cX=Cf(2.0,d);a.fH=Cf(3.0,d);a.n0=Cf(12.0,d);g=0;h=a.cA.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Tl(c,l.mV);n=a.n0;n=(n+m|0)+n|0;f=Be(f,n);b=l.e0;b.a=g;b.b=0;b=l.d6;b.a=n;b.b=e;Cc(l.jr,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gd;b.a=g;b.b=e;b=a.cp.q;n=a.gN;if(!n){m=a.cX;m=(g+m|0)+W(m,a.cA.data.length)|0;}else m=(f+(a.cX*2|0)|0)+(a.fH*2|0)|0;b.a=m;if(!n)e=e+(a.cX*2|0)|0;else{n=a.cX;e=(W(e+n|0,a.cA.data.length)+n|0)
+(a.fH*2|0)|0;}b.b=e;}
function KX(a,b,c){var d,e,f,g,h,i,j;V(a.cp.s,b,c);d=a.cX+a.fH|0;e=a.cA.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.e0;j.a=b+d|0;j.b=c+h|0;if(!a.gN){if(!i.d6.a)AB9();d=d+(i.d6.a+a.cX|0)|0;}else{if(!i.d6.b)AB9();h=h+(i.d6.b+a.cX|0)|0;}g=g+1|0;}}
function AB9(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Eu(a){var b,c;b=a.gd;if(b.a&&b.b)return a.cp.q;c=new Bu;Bm(c,C(335));K(c);}
function MF(a){a.j9=1;}
function MY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.cH;if(!a.cA.data.length)return;if(a.gB===null)a.gB=C0(c);a:{if(!a.j9){d=a.gd;if(W(d.a,d.b))break a;}d=a.gd;if(!W(d.a,d.b))YM(a,b);d=a.gd;e=d.a;f=d.b;if(!W(e,f))return;d=Eh(c,e,f,b.cu);Cv(d,a.fC);g=KV(a.fC,0.125);h=a.fC;i=h.c9;g=g+i-(i+h.eg)/16.0;j=a.cA.data;e=j.length;f=0;while(f<e){h=j[f];BQ(d,h.mV,h.jr.bl+a.n0,g);f=f+1|0;}CN(a.gB,d);a.j9=0;EU(d);}if(!Le(a.cp)){d=a.cp;ADt(c,d.q,d.s,d.bg,a.cX,a.gS);d=a.cp;h=d.q;k=d.s;d=d.P;e=a.cX;l=a.gS;l.a=(h.a-e|0)-e|0;l.b
=(h.b-e|0)-e|0;Bx(c,k.a+e|0,k.b+e|0,l,d);if(a.gN){d=a.cp;AFA(c,d.q,d.s,0,0,Re(a.nA,b.b3),a.nA.nF,a.gS);}}j=a.cA.data;m=j.length;n=0;while(n<m){d=j[n];h=d.e0;e=h.a;f=h.b;h=d.d6;k=d.jr;l=a.gB;o=a.nf;DW(c,e,f,h,k,l,o.rt,Zz(o,d.iY),b.cu);n=n+1|0;}b:{if(a.gN){j=a.cA.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.gS;e=(a.cp.q.a-(a.cX*2|0)|0)-(a.fH*2|0)|0;h=d.d6;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.e0;Bx(c,k.a+h.a|0,k.b,b,Zz(a.nf,d.iY));}p=p+1|0;}}}}
function LW(a,b,c){var d,e,f,g,h,i;d=E_(a.cp,b);e=!d?(-1):Pm(a,b);f=a.jx;if(f!=e){if(f>=0){g=a.cA.data[f];g.iY=0;if(a.oy!==null){h=BA();g=CC(g);i=new L;N(i);H(H(U(H(i,C(336)),f),C(337)),g);Bq(h,M(i));}}if(e>=0){h=a.cA.data[e];g=a.lX;if(g!==null)g.oG(b,e,h);h.iY=1;}a.jx=e;}return d&&Gr(c)?1:0;}
function MO(a,b,c,d){var e,f;e=Pm(a,b);if(e>=0){f=a.cA.data[e];if(!Xt(f))f.lM.n();}return 1;}
function Pm(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cA.data;if(c>=d.length)return (-1);e=d[c];if(FI(b,e.e0,e.d6))return c;if(a.gN){f=e.e0;g=f.a;e=e.d6;h=e.a;g=g+h|0;i=f.b;f=a.gS;f.a=(a.cp.q.a-(a.cX*2|0)|0)-h|0;f.b=e.b;if(ACI(b,g,i,f))break;}c=c+1|0;}return c;}
function ABo(a){a.gN=1;}
function Wy(){B.call(this);this.v0=null;}
function ARl(a,b){var c;c=a.v0;if(b.bo==32)Pe(c.dk);return 0;}
function Wu(){B.call(this);this.xB=null;}
function AUA(a,b){var c,d,e,f;b=b;c=a.xB;Bq(BA(),C(338));if(!Dj(c.ez)){d=c.ez;b=b.i;e=Tu(4);f=new VB;f.Ay=c;FQ(d,b,e,f);}return 1;}
function ADu(){var a=this;B.call(a);a.kK=null;a.i0=0.0;}
function ED(a,b){var c=new ADu();ASp(c,a,b);return c;}
function ASp(a,b,c){a.kK=b;a.i0=c;}
function AUq(a,b){if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){b=b;return a.i0===b.i0&&BW(a.kK,b.kK)?1:0;}return 0;}
var Wv=G();
function AXW(a){Bq(BA(),C(339));}
var Ww=G();
function AJR(a){Bq(BA(),C(340));}
function Cm(){var a=this;B.call(a);a.lM=null;a.jr=null;a.e0=null;a.d6=null;a.jQ=null;a.m3=null;a.iY=0;a.mV=null;}
function Pf(a,b){var c=new Cm();Es(c,a,b);return c;}
function AZi(a,b,c,d){var e=new Cm();AEo(e,a,b,c,d);return e;}
function Es(a,b,c){AEo(a,b,c,null,null);}
function AEo(a,b,c,d,e){a.jr=new BZ;a.e0=new Bd;a.d6=new Bd;a.mV=c;a.m3=e;a.lM=b;a.jQ=d;}
function Xt(a){return a.jQ===null?0:1;}
function X_(){B.call(this);this.z5=null;}
function APh(a,b){return b.io&&b.bo==32?1:0;}
function Yb(){B.call(this);this.xC=null;}
function AJk(a,b){var c,d,e,f,g,h;b=b;c=a.xC;if(!Dj(c.iQ)){d=c.iQ;b=b.i;e=R(Cm,1);f=e.data;g=new Cm;h=new QV;h.pk=c;Es(g,h,C(341));f[0]=g;FQ(d,b,EV(e),A2x);}return 1;}
var AFj=G();
function AHV(b){var c,d;c=GO(b,250,64);GB(c,C(277),25.0);Ja(c,187,187,187);BQ(c,C(342),0.0,24.0);BQ(c,C(342),0.25,56.0);d=C0(b);CN(d,c);EU(c);return d;}
function RQ(b){var c;c=new T8;c.iF=b;return c;}
function Ya(){B.call(this);this.tA=null;}
function ATo(a,b,c,d){return L2(a.tA,b,c,d);}
function AHp(){var a=this;B.call(a);a.nw=0;a.ny=0;}
function AU8(){var a=new AHp();AV7(a);return a;}
function A0g(a,b){var c=new AHp();AHF(c,a,b);return c;}
function AV7(a){AHF(a,AG4(GK((AF6()))),GK((AF6()))^(-559038737));}
function AHF(a,b,c){var d;a.nw=b;a.ny=c;d=0;while(d<19){T1(a);d=d+1|0;}}
function T1(a){var b,c;b=a.nw;c=a.ny;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.nw=c;a.ny=b;return b;}
function AG4(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function F6(a,b){return 5.960464477539063E-8*(T1(a)&16777215)*b|0;}
function Oj(){B.call(this);this.rp=null;}
function ARw(a,b,c){var d;d=a.rp;if(b===0.0)MI(d,100);}
function Oh(){B.call(this);this.xY=null;}
function AR4(a,b){var c,d,e;c=a.xY;d=b.bo;if(d==32){c.jS=c.jS?0:1;e=1;}else if(d==13){MI(c,1);e=1;}else if(d!=8)e=0;else{PS(c,1);e=1;}return e;}
var TG=G(0);
function ABQ(b,c){var d;d=new YD;d.q1=b;d.q0=c;return d;}
function AB1(){var a=this;B.call(a);a.go=null;a.he=0;a.j1=0;a.gM=0;}
function ACl(a){var b=new AB1();AMR(b,a);return b;}
function AMR(a,b){a.go=BI();a.gM=0;a.j1=2048;a.he=b;}
function JM(a,b,c){var d,e,f,g,h,i;d=c.t6(b);e=a.j1;if(d>e){c=new Bu;f=new L;N(f);BL(U(H(U(H(f,C(343)),d),C(344)),e),41);Bm(c,M(f));K(c);}if(!a.he){b=new BP;Bm(b,C(345));K(b);}a:{b=new BZ;if(d){b:{c=a.go;if(c.j>0){c=B5(c);g=d;while(true){if(!B6(c))break b;f=B9(c);if(f.bf>=g)break;}Cc(b,f.bl,f.bq,g,a.he);f.bl=f.bl+g;h=f.bf-g;f.bf=h;if(h===0.0)Yx(a.go,f);break a;}}g=a.gM;i=d;Cc(b,0.0,g,i,a.he);BF(a.go,AAs(i,a.gM,a.j1-d|0,a.he));a.gM=a.gM+a.he|0;}}return b;}
function IU(a,b){var c,d,e,f,g,h,i;a:{c=AHx(b);b=a.go;if(b.j>0){d=B5(b);while(true){if(!B6(d))break a;e=B9(d);if(e.bq===c.bq){f=e.bl;g=e.bf;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bf=c.bf+g;Tk(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;Tk(d);}}}}}}BF(a.go,c);}
function J$(a){return B7(a.j1,a.gM);}
function Ox(){var a=this;B.call(a);a.rs=null;a.jW=null;}
function AI_(a,b,c){if(c)return A2w;return FZ(a.jW.iB,b.i,a.rs,1);}
function AJd(a,b,c){return 1;}
function AMC(a,b){var c;c=a.jW;return Ga(c.iB,b.i,c.qP);}
function Un(){B.call(this);this.wA=null;}
function ARu(a,b,c,d){var e,f;b=a.wA;e=(NW(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.er=Bc(Be(0,b.er+W(e,f)|0),YC(b));return 1;}
function RL(){B.call(this);this.tt=null;}
function AQ$(a,b){var c,d,e;c=a.tt;if(b.cD&&b.bo==79){if(!b.bL){b=c.C.cb;d=new O$;d.wQ=c;MV(b,d);}else{b=c.C.cb;d=new O9;d.zP=c;YA(b,d);}e=1;}else e=0;return e;}
function S_(){B.call(this);this.rr=null;}
function AXC(a,b){var c,d,e,f,g,h;b=b;c=a.rr;if(!Dj(c.iK)){d=c.iK;b=b.i;e=R(Cm,5);f=e.data;g=new Cm;h=new PO;h.o$=c;Es(g,h,C(346));f[0]=g;g=new Cm;h=new PP;h.vX=c;Es(g,h,C(347));f[1]=g;g=new Cm;h=new PQ;h.r3=c;Es(g,h,C(348));f[2]=g;g=new Cm;h=new PR;h.zc=c;Es(g,h,C(349));f[3]=g;g=new Cm;h=new PN;h.u9=c;Es(g,h,C(350));f[4]=g;FQ(d,b,EV(e),A2x);}return 1;}
function S$(){B.call(this);this.Bs=null;}
function ATW(a,b){var c,d;c=DX();b=CC(b);d=new L;N(d);H(H(d,C(351)),b);Bq(c,M(d));b=new Ec;Z(b);K(b);}
function Ta(){B.call(this);this.oO=null;}
function AKO(a,b){var c,d,e,f;c=a.oO;d=c.C.cb;e=new S8;e.wG=c;f=R(B,1);f.data[0]=b;CO(d,e,C(352),f);}
function WG(){B.call(this);this.l6=null;}
function ASw(a,b){var c,d,e,f,g,h;c=a.l6;d=c.oq;if(d!==null){e=c.ep.s;f=e.a;g=b.i;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.oq=g;}b=b.i;f=b.a;c=c.fW;d=c.q;f=f-d.a|0;h=b.b-d.b|0;V(c.s,f,h);return 1;}
function AXl(a,b,c){var d;if(!c){d=b.i;b=a.l6;if(!E_(b.ep,d))d=null;b.oq=d;}return A2w;}
var C4=G(0);
var A2I=null;var A2p=null;var A2J=null;var A2n=null;var A2L=null;var A2K=null;var A2N=null;var A2M=null;var A2P=null;var A2O=null;var A2Q=null;function Ft(){Ft=Bs(C4);AXJ();}
function AXJ(){A2I=C8(187);A2p=S(C(353));A2J=C8(55);A2n=C8(43);A2L=Dr(33,66,131);A2K=Dr(60,63,65);A2N=S(C(354));A2M=S(C(355));A2P=EH(85,85,85,128);A2O=EH(43,43,43,0);A2Q=S(C(275));}
function RI(){var a=this;B.call(a);a.pu=null;a.j$=null;}
function AOB(a,b,c){var d;if(!c){d=FZ(a.j$.h7,b.i,a.pu,1);if(d!==null)return d;}return A2w;}
function AJv(a,b,c){return 1;}
function AML(a,b){var c;c=a.j$;return Ga(c.h7,b.i,SV(c.C.cb));}
function ABd(){B.call(this);this.qU=null;}
function AVD(a,b,c,d){var e,f;b=a.qU;e=(NW(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eX=Bc(Be(0,b.eX+W(e,f)|0),Uo(b));return 1;}
function ZE(){B.call(this);this.ox=null;}
function ALx(a,b){var c,d;a:{c=a.ox;switch(b.bo){case 67:Rk(c);d=1;break a;case 86:TL(c);d=1;break a;default:}d=0;}return d;}
var ZD=G();
function APA(a,b,c){return 0;}
function ZC(){B.call(this);this.sC=null;}
function ALI(a,b,c){var d,e;d=a.sC;c=d.dZ+1|0;d.dZ=c;d=IO(F(JD));e=new L;N(e);H(H(U(e,c),C(356)),d);e=M(e);$rt_globals.console.info($rt_ustr(e));YW(b,e);return 1;}
var ZB=G();
function AQk(a){return null;}
function ZF(){B.call(this);this.uV=null;}
function AUO(a){var b,c;b=a.uV;c=new AAJ;c.pl=b;return c;}
function Uk(){B.call(this);this.B$=null;}
function AWz(a,b){return 0;}
function AA2(){B.call(this);this.Bb=null;}
function ALi(a,b){return b.io&&b.bo==32?1:0;}
function AA4(){B.call(this);this.tq=null;}
function AJf(a,b){var c,d,e,f,g,h;b=b;c=a.tq;if(!Dj(c.hZ)){d=c.hZ;b=b.i;e=R(Cm,1);f=e.data;g=new Cm;h=new Ph;h.oX=c;Es(g,h,C(341));f[0]=g;FQ(d,b,EV(e),A2x);}return 1;}
function AA3(){B.call(this);this.w$=null;}
function ATV(a,b,c,d){return L2(a.w$,b,c,d);}
function R1(){B.call(this);this.Cc=null;}
function APr(a,b){return 0;}
function AGD(){var a=this;B.call(a);a.jG=null;a.lJ=null;a.f9=null;a.B1=null;}
function AGc(a){var b=new AGD();AUm(b,a);return b;}
function AUm(a,b){var c,d,e;c=null;d=null;e=null;a.jG=c;a.lJ=d;a.f9=b;a.B1=e;}
function XM(a){var b,c;b=a.f9;if(b===null)return C(21);c=AEf(b,C(357));return c==(-1)?a.f9:Ee(a.f9,c+1|0);}
function ALs(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BW(a.jG,c.jG)&&BW(a.lJ,c.lJ)&&BW(a.f9,c.f9)?1:0;}return 0;}
var Df=G(0);
var A1P=null;var A2$=null;var A1R=null;var A1Q=null;var A1T=null;var A1S=null;var A1V=null;var A1U=null;var A1X=null;var A1W=null;var A1Y=null;function AMV(){AMV=Bs(Df);AU9();}
function AU9(){A1P=C8(206);A2$=S(C(358));A1R=S(C(359));A1Q=S(C(112));A1T=S(C(360));A1S=S(C(361));A1V=S(C(362));A1U=S(C(363));A1X=EH(107,106,107,128);A1W=EH(30,31,34,0);A1Y=S(C(114));}
function Cn(){CA.call(this);this.i1=null;}
var A2_=null;var A3a=null;var A3b=null;var A3c=null;var A3d=null;var A2z=null;var A3e=null;var A3f=null;var A3g=null;var A3h=null;var A3i=null;var A3j=null;var A3k=null;var A3l=null;var A3m=null;var A1Z=null;function Xz(){Xz=Bs(Cn);APS();}
function D5(a,b,c){var d=new Cn();T$(d,a,b,c);return d;}
function AYX(a,b,c,d){var e=new Cn();ZW(e,a,b,c,d);return e;}
function T$(a,b,c,d){Xz();Dy(a,b,c);a.i1=IE(d,null);}
function ZW(a,b,c,d,e){Xz();Dy(a,b,c);a.i1=IE(d,e);}
function APS(){var b,c;b=new Cn;AMV();T$(b,C(364),0,A2$);A2_=b;A3a=D5(C(365),1,S(C(366)));A3b=D5(C(367),2,S(C(368)));A3c=D5(C(369),3,S(C(370)));A3d=D5(C(371),4,A2$);A2z=D5(C(372),5,S(C(373)));A3e=D5(C(374),6,S(C(375)));A3f=D5(C(376),7,S(C(377)));A3g=D5(C(378),8,S(C(379)));c=new Cn;Ft();ZW(c,C(380),9,A2p,S(C(362)));A3h=c;A3i=AYX(C(381),10,A2p,S(C(115)));A3j=D5(C(382),11,S(C(383)));A3k=D5(C(384),12,S(C(385)));A3l=D5(C(386),13,A2$);b=D5(C(387),14,S(C(388)));A3m=b;A1Z=I(Cn,[A2_,A3a,A3b,A3c,A3d,A2z,A3e,A3f,A3g,A3h,
A3i,A3j,A3k,A3l,b]);}
function JH(){var a=this;B.call(a);a.jo=null;a.lA=null;}
function IE(a,b){var c=new JH();AQZ(c,a,b);return c;}
function AQZ(a,b,c){a.jo=b;a.lA=c;}
function IS(){var a=this;B.call(a);a.jL=null;a.iZ=null;a.yp=null;a.Ci=null;a.l4=null;a.lS=null;a.lo=null;}
function A3n(a,b,c,d,e,f,g){var h=new IS();Mu(h,a,b,c,d,e,f,g);return h;}
function Mu(a,b,c,d,e,f,g,h){a.yp=b;a.Ci=c;a.iZ=d;a.l4=e;a.jL=f;a.lS=g;a.lo=h;}
function AE2(){var a=this;B.call(a);a.nF=null;a.tJ=0;}
function ABC(a,b){var c=new AE2();AUB(c,a,b);return c;}
function AUB(a,b,c){var d;d=new BZ;a.nF=d;a.tJ=b;d.bF=c;}
function Re(a,b){return Cf(a.tJ,b);}
var DQ=G(0);
var A13=null;var A14=null;var A10=null;var A11=null;var A12=null;var A24=null;var A25=null;var A15=null;var A16=null;function AI6(){AI6=Bs(DQ);ASB();}
function ASB(){A13=S(C(361));A14=S(C(389));A10=S(C(117));A11=S(C(375));A12=S(C(358));A24=S(C(361));A25=S(C(390));A15=S(C(391));A16=Dr(43,45,48);}
var QR=G(0);
var Q_=G();
function ANq(a,b,c){var d,e;d=b;e=c;b=new L;N(b);U(H(U(H(b,C(392)),d),C(393)),e);CL(M(b));return d+e|0;}
var QS=G(0);
var Q9=G();
function AOF(a,b,c){var d,e;d=b;e=c;b=new L;N(b);E8(H(E8(H(b,C(394)),d),C(393)),e);CL(M(b));return d+e;}
var ADc=G();
var ABY=G(0);
function Kk(){var a=this;B.call(a);a.es=null;a.fz=null;a.f7=null;}
var A1x=0;function AFO(a){var b;b=a.fz;if(b!==null){A1x=A1x-1|0;a.es.dL.deleteTexture(b);a.fz=null;}}
function BX(a){return a.f7.a;}
function Dd(a){return a.f7.b;}
function VY(a,b,c,d){var e;e=a.f7;e.a=b;e.b=c;M7(a);a.es.dL.texStorage2D(3553,1,d,b,c);e=a.es.dL;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function M7(a){var b,c;b=a.es.dL;c=a.fz;b.bindTexture(3553,c);}
function CN(a,b){OF(a,b.nz,b.mA,32856);R6(a,b,0,0);}
function OF(a,b,c,d){var e,f,g,h;a:{e=a.f7;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){M7(a);break a;}e=a.es.dL;h=a.fz;e.deleteTexture(h);a.fz=a.es.dL.createTexture();VY(a,b,c,d);break a;}}VY(a,b,c,d);}}
function IG(a,b,c,d){M7(a);R6(a,b,c,d);}
function R6(a,b,c,d){var e;e=a.es.dL;b=b.iS;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function Zp(){B.call(this);this.oa=null;}
var A29=null;function L5(){var a=new Zp();ACZ(a);return a;}
function ACZ(a){a.oa=BI();}
function DJ(a,b,c){QM(a,CS(b,c));}
function CS(b,c){return Pf(c,b);}
function Fm(a,b,c){IZ(a,b,c,null);}
function IZ(a,b,c,d){QM(a,AZi(null,b,c,d));}
function QM(a,b){BF(a.oa,b);}
function G3(a){return EV(Iq(a.oa,A29));}
function AB3(){A29=R(Cm,0);}
var DZ=G(0);
var A2Y=null;var A2Z=null;var A2V=null;var A2W=null;var A2X=null;var A22=null;var A23=null;var A20=null;var A21=null;function AQU(){AQU=Bs(DZ);AR5();}
function AR5(){A2Y=S(C(395));A2Z=S(C(396));A2V=S(C(305));A2W=S(C(397));A2X=S(C(353));A22=S(C(395));A23=S(C(396));A20=EH(118,121,122,128);A21=Dr(63,66,68);}
var Hd=G(0);
var Qt=G();
function ATF(a,b,c,d){var e;b=BA();d=CC(d);e=new L;N(e);H(H(U(H(e,C(398)),c),C(337)),d);Bq(b,M(e));}
var Qu=G();
function T8(){B.call(this);this.iF=null;}
function AXw(a,b){return LT(a.iF,b);}
function ASY(a,b,c,d){return KK(a.iF,b,c,d);}
function AXb(a,b,c){return Nm(a.iF,b,c);}
function AQM(a,b,c){return Dj(a.iF);}
function Xj(){B.call(this);this.vl=null;}
function ARM(a,b){var c;c=a.vl.jW;c.er=FM(b,YC(c));}
function AAb(){B.call(this);this.zH=null;}
function AQx(a,b){var c,d,e,f;c=b.data;b=BA();d=CC(c[0]);e=new L;N(e);H(H(e,C(298)),d);Bq(b,M(e));b=BA();f=c[1];d=new L;N(d);H(H(d,C(399)),f);Bq(b,M(d));}
function AAa(){B.call(this);this.Cx=null;}
function AXD(a,b){var c,d,e,f,g,h,i;c=b.data;d=BA();e=CC(c[0]);f=new L;N(f);H(H(f,C(298)),e);Bq(d,M(f));g=Eo(It(b,1));b=BA();d=CC(c[1]);if(g===null)c=C(22);else{c=new L;N(c);B0(c,C(35));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B0(c,C(36));BL(c,i[h]);h=h+1|0;}B0(c,C(37));c=M(c);}e=new L;N(e);H(H(H(H(e,C(400)),d),C(401)),c);Bq(b,M(e));}
function AAd(){B.call(this);this.si=null;}
function ANt(a,b){Z1(a.si,b);}
function AAc(){B.call(this);this.z2=null;}
function AIA(a,b){var c,d,e,f,g;c=b.data;d=BA();e=CC(c[0]);f=new L;N(f);H(H(f,C(298)),e);Bq(d,M(f));g=CF(It(b,1));b=BA();d=CC(c[1]);c=AFW(g);e=new L;N(e);H(H(H(H(e,C(402)),d),C(403)),c);Bq(b,M(e));}
var AH5=G();
function YI(){B.call(this);this.ud=null;}
function AOH(a,b){var c;c=a.ud.j$;c.eX=FM(b,Uo(c));}
function Xy(){B.call(this);this.BH=null;}
function AN$(a,b){return 0;}
function U8(){B.call(this);this.wD=null;}
function AW9(a,b){return DE(a.wD,null);}
var ABP=G(0);
function AGu(b,c){var d,e,f,g,h,i,j,k,l,m;d=R(BC,8);e=DD(8);f=B1(16);g=0;h=0;i=0;while(true){j=BH(i,b);if(j>0)break;k=j>=0?10:(c.bw(CQ(i))).lN;if(k==10){d=AGw(Ev(f,0,g),d,h);e=Xs(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Ko(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AGw(Ev(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bw(CQ(j))).lN==10){e=Xs(1,e,h);i=j;}else e=Xs(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Tr;d=ADf(d,h);if(m.length!=h)e=M5(e,h);c.lD=d;c.z$=e;return c;}
function I8(){var a=this;B.call(a);a.vk=null;a.pX=null;a.q_=null;a.wq=null;a.sZ=null;a.jd=null;}
function A3o(a,b,c,d,e,f){var g=new I8();Nv(g,a,b,c,d,e,f);return g;}
function Nv(a,b,c,d,e,f,g){a.vk=b;a.pX=c;a.q_=d;a.wq=e;a.sZ=f;a.jd=g;}
function JB(){var a=this;B.call(a);a.rt=null;a.nh=null;a.wj=null;}
function A3p(a,b,c){var d=new JB();Lb(d,a,b,c);return d;}
function Lb(a,b,c,d){a.rt=b;a.nh=c;a.wj=d;}
function Zz(a,b){return !b?a.nh:a.wj;}
function ACK(){var a=this;B.call(a);a.mK=null;a.uY=null;a.xF=null;}
function AHK(a,b,c){var d=new ACK();AV4(d,a,b,c);return d;}
function AV4(a,b,c,d){a.mK=b;a.uY=c;a.xF=d;}
function Co(){CA.call(this);this.nB=null;}
var A3q=null;var A3r=null;var A3s=null;var A3t=null;var A3u=null;var A3v=null;var A3w=null;var A3x=null;var A3y=null;var A3z=null;var A3A=null;var A3B=null;var A3C=null;var A3D=null;var A3E=null;var A2R=null;function ADD(){ADD=Bs(Co);AOS();}
function D4(a,b,c){var d=new Co();V7(d,a,b,c);return d;}
function AUF(a,b,c,d){var e=new Co();AG3(e,a,b,c,d);return e;}
function V7(a,b,c,d){ADD();Dy(a,b,c);a.nB=IE(d,null);}
function AG3(a,b,c,d,e){ADD();Dy(a,b,c);a.nB=IE(d,e);}
function AOS(){var b;b=new Co;Ft();V7(b,C(364),0,A2p);A3q=b;A3r=D4(C(365),1,S(C(404)));A3s=D4(C(367),2,S(C(405)));A3t=D4(C(369),3,S(C(406)));A3u=D4(C(371),4,S(C(404)));A3v=D4(C(372),5,Dr(188,63,60));A3w=D4(C(374),6,S(C(407)));A3x=D4(C(376),7,S(C(408)));A3y=D4(C(378),8,S(C(409)));A3z=AUF(C(380),9,A2p,Dr(52,65,52));A3A=AUF(C(381),10,S(C(410)),S(C(411)));A3B=D4(C(382),11,S(C(412)));A3C=D4(C(384),12,S(C(413)));A3D=D4(C(386),13,A2p);b=D4(C(387),14,S(C(388)));A3E=b;A2R=I(Co,[A3q,A3r,A3s,A3t,A3u,A3v,A3w,A3x,A3y,A3z,
A3A,A3B,A3C,A3D,b]);}
var AHy=G();
function Je(b,c){var d,e,f;if(c<=0)return C(21);d=B1(c);e=d.data;e[0]=AGf(F6(b,52));f=1;while(f<c){e[f]=AGf(F6(b,62));f=f+1|0;}return FD(d);}
function AGf(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AD2=G();
function ABb(){var a=this;B.call(a);a.xx=0;a.xw=0;a.xy=null;}
function AXG(a,b){var c,d,e,f,g,h,i;c=a.xx;d=a.xw;e=a.xy;f=(CF(It(b,0))).data;g=f[0]%100|0;h=f[0]/100|0;if(h!=c){b=DX();i=new L;N(i);U(H(U(H(i,C(414)),h),C(415)),c);Bq(b,M(i));}if(d!=g){b=DX();i=new L;N(i);U(H(U(H(i,C(416)),g),C(415)),d);Bq(b,M(i));}if(g<10)AHt(e,c,d+1|0);else{b=BA();e=new L;N(e);H(U(H(e,C(417)),c),C(418));Bq(b,M(e));}}
var ABa=G();
function AQ6(a,b){}
function AH3(){var a=this;B.call(a);a.J$=null;a.Hh=null;a.II=0;a.H9=0;}
function Py(){B.call(this);this.va=null;}
function AJw(a,b){return Px(P(a.va,b.bt));}
function Tr(){var a=this;B.call(a);a.lD=null;a.z$=null;}
var CX=G();
var AFs=G(CX);
var AGd=G(CX);
var ADg=G(CX);
var ADy=G(CX);
var AGH=G(CX);
function ZJ(){B.call(this);this.rP=null;}
function AO8(a){var b;b=a.rP;Bq(BA(),b);}
var GP=G(CA);
var A3F=null;var A2o=null;var A3G=null;function AQN(){AQN=Bs(GP);AMM();}
function AXO(a,b){var c=new GP();ACR(c,a,b);return c;}
function ACR(a,b,c){AQN();Dy(a,b,c);}
function AMM(){var b;A3F=AXO(C(419),0);b=AXO(C(420),1);A2o=b;A3G=I(GP,[A3F,b]);}
var ACz=G();
function Cf(b,c){return C6(b*c);}
function IL(){var a=this;B.call(a);a.gA=0;a.mZ=null;}
function XN(){var a=this;B.call(a);a.Cd=null;a.xR=null;a.gu=null;}
function GE(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.gu.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bc(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.iy:i.iz;k=!c?i.n1:i.n2;if(j<=k&&k<(j+k|0))return h;j=BH(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function MP(){var a=this;B.call(a);a.iz=0;a.n2=0;a.iy=0;a.n1=0;a.ly=0;}
var ADS=G();
function WH(){var a=this;B.call(a);a.qv=null;a.vw=null;a.wy=null;}
function Qb(){B.call(this);this.jK=null;}
function AX1(a,b){var c,d,e,f,g;c=a.jK;d=c.k5;if(d!==null){e=b.i;f=e.a-d.a|0;g=e.b-d.b|0;e=c.jX;e.a=EW(0,e.a+f|0,c.hm.a-c.it.a|0);c=a.jK;d=c.jX;d.b=EW(0,d.b+g|0,c.hm.b-c.it.b|0);}a.jK.k5=b.i;return 1;}
var ADZ=G();
function MB(){return "clipboard" in $rt_globals.navigator?1:0;}
function Yz(){B.call(this);this.j5=null;}
function AXo(a){return a.j5;}
function AF7(){var a=this;B.call(a);a.bB=null;a.U=null;a.V=null;a.e7=null;}
function ABZ(a){var b=new AF7();ASo(b,a);return b;}
function ASo(a,b){var c;a.V=AX9();a.bB=b;c=new X6;MC(c);c.lm=new BZ;c.fL=b;a.U=c;}
function Iy(a,b,c,d){var e,f,g,h;e=a.U;f=BW(e.hv,c)?0:1;g=BW(e.hz,b)?0:1;h=d===e.kn?0:1;if(f){e.hv=c;e.eG=null;Rq(e,0);}e.gw=!f&&!g&&!h?0:1;e.hz=b;e.kn=d;e.hA=0;Kg(a);}
function L9(a){var b;b=a.U;b.dD=CM(b.dD,null);a.V=CM(a.V,null);}
function Ld(a,b){var c,d,e;c=a.V;d=c.H;e=c.t;b=CM(c,b);a.V=b;b.ki(d,e,a.bB.b3);}
function F1(a,b,c){var d;d=a.V;d.ki(b,c,d.ei);Kg(a);}
function Kg(a){var b,c,d,e;b=a.U;c=a.V.t.a;b.t.a=c;d=b.dD;if(d!==null&&c!=BX(d)&&!(c>=b.hA&&BX(b.dD)>=b.hA))b.gw=1;b=a.U;b.ei=a.bB.b3;if(Y4(b))c=0;else{b=a.U;XI(b);e=CE(b.fL,b.kn);Rq(b,FB(b.eG)+(e*2|0)|0);c=b.t.b;}b=a.U.H;d=a.V.H;V(b,d.a,d.b-c|0);}
function MN(b,c){if(b<0)c=C(421);else if(b>0)c=C(422);return c;}
function ABe(a,b,c){var d;d=a.U.H.a;return (d-c|0)<=b&&b<d?1:0;}
function Ok(a,b,c){var d,e;d=a.U;e=d.H.a+d.t.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Ro(a,b,c){var d;d=a.U.H.b;return (d-c|0)<=b&&b<d?1:0;}
function Pl(a,b,c){var d,e;d=a.V;e=d.H.b+d.t.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Y$(a,b,c){var d,e,f;d=a.U.H.b-c|0;e=a.V;f=(e.H.b+e.t.b|0)+c|0;return d<=b&&b<f?1:0;}
function ZQ(a,b,c){var d,e;d=a.U.H.b+c|0;e=a.V;return AEn(b,d,(e.H.b+e.t.b|0)-c|0);}
function P9(a,b,c){var d,e,f;d=a.U;e=d.H.a;f=e-c|0;e=(e+d.t.a|0)+c|0;return f<=b&&b<e?1:0;}
function Pt(a,b,c){var d,e;d=a.U;e=d.H.a;return AEn(b,e+c|0,(e+d.t.a|0)-c|0);}
function AEn(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BH(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function I_(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bd;f=new Bd;g=b.a;h=b.b;b=a.V;i=b.H;j=i.a;k=i.b;b=b.t;l=b.a;m=b.b;b=new YE;b.wf=a;b.wh=e;b.wg=f;b.wb=c;b.wa=g;b.we=j;b.wc=l;b.wt=d;b.ws=h;b.wu=k;b.w3=m;return b;}
var AFm=G(0);
var Mv=G(0);
function Su(){B.call(this);this.vK=null;}
function AKX(a,b){return Tl(a.vK,b);}
function Pj(){B.call(this);this.wE=null;}
function AVR(a,b){var c,d;c=a.wE;d=b.bt;return Px(c.charCodeAt(d)&65535);}
var Xb=G();
function AJ6(a,b){AFO(b);}
var AFY=G();
function ADt(b,c,d,e,f,g){g.a=c.a;g.b=f;Bx(b,d.a,d.b,g,e);Bx(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bx(b,d.a,d.b+f|0,g,e);Bx(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AFA(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bx(b,j,k,i,h);Bx(b,j,k,i,h);Bx(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bx(b,l,j,i,h);Bx(b,l,j,i,h);Bx(b,l+g|0,j+g|0,i,h);}
function RR(){var a=this;B.call(a);a.bs=null;a.kM=null;a.fb=null;a.d1=0;a.R=0;a.dQ=null;a.eK=null;a.hb=0;a.pc=0;}
function Pb(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d1;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}EX(c);j=d+(-1)|0;b=C_(d);d=W(j,a.R)%a.fb.b|0;GI(a,c,b,a.hb,g);IG(a.bs,c,0,d);if(!(j%a.d1|0))break;d=j;}}else{EX(b);k=a.d1-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GI(a,b,C_(j),W(a.R,k)+a.hb|0,g);k=k+(-1)|0;j=h;}CN(a.bs,b);j=Be(i,e);}return j;}k=a.d1;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bc(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EX(c);b=C_((d+f|0)+1|0);j=d+1|0;d
=W(d,a.R)%a.fb.b|0;GI(a,c,b,a.hb,g);IG(a.bs,c,0,d);if(!(j%a.d1|0))break;d=j;}}else{EX(b);d=0;while(d<a.d1){h=h+1|0;GI(a,b,C_((h>e?h-f|0:h)+f|0),W(a.R,d)+a.hb|0,g);d=d+1|0;}CN(a.bs,b);j=Bc(i,e);}return j;}
function M2(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Gp(e,b,c,f)!==f.hj?0:1;}
function Gp(b,c,d,e){c=c.data;return d<c.length&&c[d]?I4(b.dR,b,c[d]):e.hj;}
function E6(a,b,c,d,e,f){DW(b,a.kM.a+d.a|0,c+d.b|0,a.dQ,a.eK,a.bs,e,f,a.pc);}
function GI(a,b,c,d,e){BQ(b,c,a.fb.a-20.0*e,d);}
var ABV=G();
function FI(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function ACI(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function O0(){B.call(this);this.s1=null;}
function AMt(a,b){var c,d;c=a.s1;AAK(c,E9(c,b.i));b=Bj(c);d=c.d;Ml(b,d.u,d.y);Hw(c);}
var UT=G(0);
var A2w=null;function AFL(){A2w=new SP;}
function XH(){var a=this;B.call(a);a.s2=null;a.s3=null;}
function AKY(a,b){var c,d,e;c=a.s2;d=a.s3;c=c.fh.d$.s;e=c.a;b=b.i;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ci(d,b);}
var Fo=G(0);
function Pc(){var a=this;B.call(a);a.iE=0;a.n5=0;a.jM=0;a.gQ=0;a.hx=null;}
function B6(a){return a.iE>=a.jM?0:1;}
function B9(a){var b,c;Rf(a);b=a.iE;a.gQ=b;c=a.hx;a.iE=b+1|0;return c.m9(b);}
function Tk(a){var b,c,d;if(a.gQ<0){b=new CT;Z(b);K(b);}Rf(a);a.hx.n$(a.gQ);a.n5=a.hx.b2;c=a.gQ;d=a.iE;if(c<d)a.iE=d-1|0;a.jM=a.jM-1|0;a.gQ=(-1);}
function Rf(a){var b;if(a.n5>=a.hx.b2)return;b=new HA;Z(b);K(b);}
var Gl=G(Jb);
var Z7=G(Fa);
function XX(){B.call(this);this.qK=null;}
function AWi(a,b){var c,d;c=a.qK;d=c.dZ+1|0;c.dZ=d;c=new L;N(c);H(H(U(c,d),C(423)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function AAS(){B.call(this);this.q4=null;}
function AT7(a){var b,c;b=a.q4;c=new L;N(c);H(H(H(c,C(424)),b),C(425));$rt_globals.console.info($rt_ustr(M(c)));}
function YK(){var a=this;B.call(a);a.bp=0;a.by=0;}
function DU(a,b){var c=new YK();AEZ(c,a,b);return c;}
function AEZ(a,b,c){a.bp=b;a.by=c;}
function AI1(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.bp==c.bp&&a.by==c.by?1:0;}return 0;}
function ATx(a){var b,c,d,e;b=R(B,2).data;b[0]=CQ(a.bp);b[1]=CQ(a.by);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bt)|0;d=d+1|0;}return c;}
function AS4(a,b){var c;b=b;c=BH(a.bp,b.bp);if(!c)c=BH(a.by,b.by);return c;}
var AAk=G(Ea);
var A3H=null;function Pq(b){var c;c=new L;N(c);return M(E8(c,b));}
function AFN(){A3H=F($rt_floatcls());}
var F7=G();
var A3I=null;var A3J=null;var A1c=null;var A1b=null;var A1a=null;function AEF(){A3I=DB([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A3J=ACS([Bo(1),Bo(10),Bo(100),Bo(1000),Bo(10000),Bo(100000),Bo(1000000),Bo(10000000),Bo(100000000),Bo(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A1c=ACS([Bo(1),Bo(10),Bo(100),Bo(10000),Bo(100000000),
D(1874919424, 2328306)]);A1b=new Wx;A1a=new XR;}
var Io=G();
var A3K=0;var A3L=null;var A3M=null;function AFg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.qf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ma=0;c.lP=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Il(C1(Bo(d),Bo(8388608)),Fq)){d=d<<1;f=f+(-1)|0;}}g=AFr(A3M,f);if(g<0)g= -g|0;h=A3M.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ih(d,A3L.data[e],i);if(j<A3K){while($rt_ucmp(j,A3K)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A3M.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ih(d,
A3L.data[e],i);}e=d<<1;d=e+1|0;h=A3L.data;f=g+1|0;k=h[f];l=i-1|0;m=Ih(d,k,l);n=Ih(e-1|0,A3L.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?W($rt_udiv(j,o),o):q<0?W($rt_udiv(j,k),k)+k|0:W($rt_udiv((j+(k/2|0)|0),k),k);if(Du(Bo(d),Bo(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.ma=d;c.lP=g-50|0;}
function Ih(b,c,d){return GK(Gf(Cd(C1(Bo(b),D(4294967295, 0)),C1(Bo(c),D(4294967295, 0))),32-d|0));}
function ADM(){A3K=$rt_udiv((-1),10);A3L=DB([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A3M=DB([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function XR(){var a=this;B.call(a);a.ma=0;a.lP=0;a.qf=0;}
function Na(){var a=this;B.call(a);a.Ai=null;a.oA=0.0;a.AI=0.0;a.fE=null;a.hF=null;a.nC=null;a.fN=0;}
function AHc(a,b){var c;if(b!==null){a.hF=b;return a;}c=new BP;Bm(c,C(426));K(c);}
function AFw(a,b){var c;if(b!==null){a.nC=b;return a;}c=new BP;Bm(c,C(426));K(c);}
function St(a,b,c,d){var e,f,g,$$je;e=a.fN;if(!(e==2&&!d)&&e!=3){a.fN=d?2:1;while(true){try{f=AHe(a,b,c);}catch($$e){$$je=EE($$e);if($$je instanceof Bu){g=$$je;K(ALK(g));}else{throw $$e;}}if(HF(f))return f;if(IX(f)){if(d&&D1(b)){g=a.hF;HI();if(g===A1F)return Ei(Ce(b));if(Ce(c)<=J(a.fE))return A1I;E7(b,b.ba+Ce(b)|0);if(a.hF===A1G)K1(c,a.fE);}return f;}if(S5(f)){g=a.hF;HI();if(g===A1F)return f;if(g===A1G){if(Ce(c)<J(a.fE))return A1I;K1(c,a.fE);}E7(b,b.ba+K4(f)|0);}else if(M$(f)){g=a.nC;HI();if(g===A1F)break;if
(g===A1G){if(Ce(c)<J(a.fE))return A1I;K1(c,a.fE);}E7(b,b.ba+K4(f)|0);}}return f;}b=new CT;Z(b);K(b);}
function ACX(a,b){var c,d,e,f;c=a.fN;if(c&&c!=3){b=new CT;Z(b);K(b);}if(!Ce(b))return AHS(0);if(a.fN)a.fN=0;d=AHS(Be(8,Ce(b)*a.oA|0));while(true){e=St(a,b,d,0);if(IX(e))break;if(HF(e))d=U5(a,d);if(!LC(e))continue;XQ(e);}b=St(a,b,d,1);if(LC(b))XQ(b);while(true){f=a.fN;if(f!=3&&f!=2)break;a.fN=3;if(IX(A1J)){d.dO=d.ba;d.ba=0;d.ie=(-1);return d;}d=U5(a,d);}b=new CT;Z(b);K(b);}
function U5(a,b){var c,d,e;c=b.h5;d=Ko(c,Be(8,c.data.length*2|0));e=AEO(d,0,d.data.length);E7(e,b.ba);return e;}
var AEj=G(CX);
function P1(){B.call(this);this.p1=null;}
function AKf(a,b){Dw(a.p1,b);}
function So(){B.call(this);this.yN=null;}
function AJV(a,b){var c,d;c=a.yN;d=c.dZ+1|0;c.dZ=d;c=b.ik;b=new L;N(b);H(H(U(b,d),C(427)),c);$rt_globals.console.info($rt_ustr(M(b)));}
var SP=G();
function ARp(a,b){}
function Fr(){var a=this;B.call(a);a.H=null;a.t=null;a.ei=0.0;}
function AX9(){var a=new Fr();MC(a);return a;}
function MC(a){a.H=new Bd;a.t=new Bd;}
function ATA(a){}
function ARD(a){return B7(0,0);}
function TE(a,b,c,d){var e;if(!IW(a.H,b)){a.lL(b);Ci(a.H,b);}if(!IW(a.t,c)){a.lC(c);Ci(a.t,c);}e=a.ei;if(e!==d){a.ei=d;a.sK(e,d);}}
function DN(a,b){return FI(b,a.H,a.t);}
function AHk(a,b){var c,d,e,f;c=a.H;d=c.a;e=c.b;f=a.t;AY6();Bx(b,d,e,f,A3N);}
function X2(a,b){var c;c=a.H;Mt(b,c.a,c.b,a.t);}
function AKV(a,b){return 0;}
function AP8(a,b){}
function AWE(a,b){}
function ATL(a,b,c){}
function AWU(a){}
function AOk(a,b,c,d){return 0;}
function AKJ(a,b,c){return null;}
function AQ5(a,b,c){return 0;}
function AWj(a,b){return 0;}
function ATw(a,b,c,d){return 0;}
function Gu(){var a=this;Fr.call(a);a.cZ=null;a.bE=null;a.gg=null;}
function A3O(){var a=new Gu();W$(a);return a;}
function W$(a){MC(a);a.cZ=new Bd;a.bE=new Bd;}
function AND(a,b){a.gg=b;}
function AEi(a){var b;b=a.bE;b.a=Kb(a,b.a);b=a.bE;b.b=MS(a,b.b);}
function XJ(a,b){a.bE.a=Kb(a,b);}
function ABt(a,b){a.bE.b=MS(a,b);}
function AHT(a,b,c){a.bE.a=Kb(a,b);a.bE.b=MS(a,c);}
function MS(a,b){return Be(0,Bc(b,a.cZ.b-a.t.b|0));}
function Kb(a,b){return Be(0,Bc(b,a.cZ.a-a.t.a|0));}
function SI(){var a=this;Gu.call(a);a.bV=null;a.dS=null;a.hg=null;a.wJ=null;a.eb=null;a.ca=null;a.el=null;a.fe=null;a.ds=0;a.e_=0;a.yS=null;a.dN=0;a.eA=0;a.gr=0;a.fI=0;a.fv=0;a.cK=0;a.em=null;a.jy=null;a.th=null;a.hR=null;}
function A0e(a,b){var c=new SI();AG$(c,a,b);return c;}
function AG$(a,b,c){W$(a);a.dS=LM();a.hg=new Bd;a.ca=A3P;a.el=R(I$,0);a.dN=0;a.eA=0;a.gr=0;a.fI=0;a.fv=0;a.em=ACl(0);a.hR=LH();a.bV=b;a.jy=c;a.yS=c;Rg(a);}
function Rg(a){a.ds=Cf(2.0,a.bV.b3);}
function AAj(a){return a.ca.data.length?0:1;}
function O_(a,b){Wk(a);a.ca=b;}
function Wk(a){V(a.hg,0,0);}
function ABp(a,b,c){a.th=b;a.wJ=c;a.eb=null;a.em=null;a.e_=0;Wk(a);}
function AWg(a){a.fe=CM(a.fe,null);V(a.hg,0,0);E$(a.hR);a.em=null;a.ca=A3P;a.el=null;a.dN=0;a.eA=0;a.gr=0;VR(a.dS);a.jy=null;}
function AL$(a,b,c){Rz(a);Rg(a);a.eb=null;a.em=null;a.e_=0;}
function AI9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Jx(a.bV);if(AAj(a))return;KP(a);Cv(c,a.eb);d=Eg(a);e=ABQ(c,a.e_);f=Bc(Jk(a.t.b,d),a.ca.data.length)+30|0;g=a.th.yp;h=a.el.data;d=h.length;if(d<f){a:{i=a.fI;j=a.fv;k=a.ca;l=a.em;m=a.hR;n=R(I$,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gl!==c){Ys(l,q,m);o[f]=J_(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=J_(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=J_(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){Ys(l,c,m);h[f]=null;}f=f+1|0;}a.el=n;Ci(a.hg,J$(a.em));RU(a,a.bV.cH);}a.fI=Bc((a.bE.b+a.ds|0)/(Eg(a)+a.ds|0)|0,a.ca.data.length-1|0);a.fv=Bc((((a.bE.b+a.dS.q.b|0)-1|0)+a.ds|0)/(Eg(a)+a.ds|0)|0,a.ca.data.length-1|0);if(!a.el.data.length)return;ABF(a,e);X2(a,b);q=g.wq;c=a.H;Bx(b,c.a,c.b,a.t,q);c=a.dS.s;i=c.a;j=c.b;p=CE(a.bV,2.0);s=a.bV.dG;t=a.fI;u=i+p|0;while(t<=a.fv){l=QO(a,t);d=W(t,Eg(a));v
=t+1|0;w=d+W(v,a.ds)|0;x=u+a.dN|0;y=x+a.eA|0;z=a.cK!=t?0:1;m=!z?q:g.sZ;ba=!z?g.vk:g.jd;bb=!z?g.pX:g.jd;bc=!z?g.q_:g.jd;bd=(j+w|0)-a.bE.b|0;DW(b,u,bd,l.hQ,l.uc,a.fe,ba,m,a.bV.cu);DW(b,x,bd,l.iI,l.i_,a.fe,bb,m,a.bV.cu);DW(b,y,bd,l.hS,l.ko,a.fe,bc,m,a.bV.cu);d=l.hQ.a;be=u+d|0;V(s,Be(0,a.dN-d|0),l.hQ.b);Bx(b,be,bd,s,m);d=u+a.dN|0;f=l.iI.a;bf=d+f|0;V(s,Be(0,a.eA-f|0),l.iI.b);Bx(b,bf,bd,s,m);d=l.hS.a;bg=y+d|0;V(s,Be(0,(((a.dS.q.a-d|0)-a.eA|0)-a.dN|0)-p|0),l.hS.b);Bx(b,bg,bd,s,m);bh=(i+a.t.a|0)-p|0;V(s,p,Eg(a)+a.ds
|0);Bx(b,bh,bd,s,q);t=v;}Hv(b);}
function ABF(a,b){var c,d,e,f,g,h;c=0;d=a.fI;while(d<=a.fv){e=QO(a,d);if(!(e!==null&&e.gl===a.ca.data[d])){f=a.el.data;g=a.ca;e=a.em;h=a.hR;c=d%f.length|0;if(f[c]!==null)Ys(e,f[c],h);f[c]=J_(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ci(a.hg,J$(a.em));RU(a,a.bV.cH);}}
function RU(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hg;c=Eh(b,c.a+150|0,c.b,a.bV.cu);Cv(c,a.eb);d=a.eb;e=d.c9;f=e-(e+d.eg)/16.0;g=a.el.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gl.jH;k=d.i_;BQ(c,j,k.bl+a.e_,f+k.bq);j=d.gl.jY;d=d.ko;BQ(c,j,d.bl+a.e_,f+d.bq);}i=i+1|0;}a:{d=a.hR;if(d.cT>0){h=d.cR;i=0;b:while(true){g=d.cc.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cI;l=j.cY;k=k;l=l.kx;BQ(c,k,l.bl+a.e_,f+l.bq);j=j.cP;if(h!=d.cR)break b;}i=i+1|0;}b=new HA;Z(b);K(b);}}if(a.fe===null)a.fe=C0(b);CN(a.fe,
c);EU(c);}
function QO(a,b){var c;c=a.el.data;return c[b%c.length|0];}
function AS1(a,b){Ci(a.dS.q,b);}
function AUQ(a,b){Ci(a.dS.s,b);}
function ADb(a){var b,c;KP(a);b=Eg(a);c=a.ca.data.length;b=W(b,c)+W(a.ds,c+1|0)|0;V(a.cZ,a.t.a,b);}
function Rz(a){var b,c,d,e,f,g,h,i,j;b=Jx(a.bV);if(AAj(a))return;KP(a);Cv(b,a.eb);c=ABQ(b,a.e_);d=a.ca.data;e=d.length;f=0;while(f<e){g=d[f];h=Lj(c,g.gC);i=Lj(c,g.jH);j=Lj(c,g.jY);a.dN=Be(a.dN,h);a.eA=Be(a.eA,i);a.gr=Be(a.gr,j);f=f+1|0;}}
function APY(a,b){var c;c=UI(a,b.i);if(c>=0)a.cK=c;return E_(a.dS,a.H)&&Gr(a.bV.cO)?1:0;}
function AM1(a,b,c){if(!E_(a.dS,b.i)&&!Le(a.dS)){b=a.yS;if(b!==null)b.n();}return null;}
function ATj(a,b,c,d){var e;if(d==1){e=UI(a,b.i);if(e>=0)Yn(a,a.ca.data[e]);}return 1;}
function Yn(a,b){a.jy.n();b.u1.n();}
function UI(a,b){var c,d,e;if(!a.el.data.length)return (-1);c=Eg(a);d=(b.b-a.H.b|0)+a.bE.b|0;e=a.ds;e=(d+e|0)/(c+e|0)|0;if(e<a.ca.data.length)return e;return (-1);}
function Eg(a){return FB(a.eb);}
function KP(a){var b;if(a.eb===null){b=HK(a.bV,a.wJ);a.eb=b;a.em=ACl(FB(b));a.e_=C6(a.eb.nO);}}
function AVc(a,b){var c,d,e;a:{switch(b.bo){case 13:Yn(a,a.ca.data[a.cK]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cK=a.fI;b=a.gg;c=a.bE;JG(b,c.a,c.b-(a.t.b/2|0)|0);return 0;case 34:a.cK=a.fv;b=a.gg;c=a.bE;JG(b,c.a,c.b+(a.t.b/2|0)|0);return 0;case 35:case 39:a.cK=a.ca.data.length-1|0;break a;case 36:case 37:a.cK=0;break a;case 38:d=a.cK;e=a.ca.data.length;a.cK=((d+e
|0)-1|0)%e|0;break a;case 40:a.cK=(a.cK+1|0)%a.ca.data.length|0;break a;default:break a;}a.jy.n();return 0;}e=a.cK;if(e<=a.fI)JG(a.gg,a.bE.a,W(e,Eg(a))+W(a.cK,a.ds)|0);else if(e>=a.fv)JG(a.gg,a.bE.a,(W(e+1|0,Eg(a))+W(a.cK+2|0,a.ds)|0)-a.t.b|0);return 0;}
var OB=G();
function ANv(a){}
function ADC(){var a=this;Fr.call(a);a.og=null;a.q7=null;a.wv=null;a.bG=null;a.dd=null;a.dh=null;a.xE=0.0;a.yq=null;a.yl=null;}
function ABB(a,b){var c=new ADC();AIJ(c,a,b);return c;}
function AIJ(a,b,c){var d;c=c.cO;MC(a);d=new Qe;d.te=a;a.q7=d;d=new Qd;d.ut=a;a.wv=d;a.xE=10.0;a.bG=b;a.og=c;b.gg=a;}
function AUL(a){var b;b=a.bG;b.gg=null;a.bG=CM(b,null);}
function Nr(a,b,c){var d;a.yq=b;a.yl=c;d=a.dd;if(d!==null)Hr(d,b,c);d=a.dh;if(d!==null)Hr(d,b,c);}
function ANI(a,b,c,d){TE(a,b,c,d);TE(a.bG,b,c,d);if(d!==0.0){a.bG.yA();AEi(a.bG);if(YH(a))Jf(a);else a.dh=null;if(Qj(a))H1(a);else a.dd=null;}}
function JG(a,b,c){AHT(a.bG,b,c);if(YH(a))Jf(a);if(Qj(a))H1(a);}
function Qj(a){var b;b=a.t.b;return b>0&&a.bG.cZ.b>b?1:0;}
function YH(a){var b;b=a.t.a;return b>0&&a.bG.cZ.a>b?1:0;}
function Jf(a){var b,c,d,e,f,g;b=a.dh;if(b===null)b=Jh();a.dh=b;S4(a,b);c=a.dh;b=a.bG;d=b.bE.a;e=a.H;f=e.a;g=a.t;SX(c,d,f,g.a,b.cZ.a,e.b+g.b|0,Ng(a));}
function H1(a){var b,c,d,e,f,g;b=a.dd;if(b===null)b=Jh();a.dd=b;S4(a,b);c=a.dd;b=a.bG;d=b.bE.b;e=a.H;f=e.b;g=a.t;JC(c,d,f,g.b,b.cZ.b,e.a+g.a|0,Ng(a));}
function Ng(a){return Cf(a.xE,a.ei);}
function S4(a,b){var c,d;c=a.yq;d=a.yl;if(!(c!==null&&d!==null?(Lp(b.i5,c)&&Lp(b.i6,d)?1:0):0))Hr(b,c,d);}
function ATS(a,b){var c;a.bG.fJ(b);if(!(a.dd===null&&a.dh===null)){B4(b,1);c=a.dd;if(c!==null)GW(c,b);c=a.dh;if(c!==null)GW(c,b);c=a.dd;if(c!==null)G5(c,b);c=a.dh;if(c!==null)G5(c,b);B4(b,0);}}
function WR(a,b){var c,d;a:{b:{c=a.dd;if(!(c!==null&&Is(c,b))){c=a.dh;if(c===null)break b;if(!Is(c,b))break b;}d=1;break a;}d=0;}return d;}
function AVq(a,b,c,d){return !WR(a,b.i)&&!a.bG.cq(b,c,d)?0:1;}
function AUP(a,b,c){var d,e;d=a.dd;if(d!==null){e=FZ(d,b.i,a.q7,1);if(e!==null)return e;}d=a.dh;if(d!==null){e=FZ(d,b.i,a.wv,0);if(e!==null)return e;}return a.bG.ce(b,c);}
function ARz(a,b,c){return WR(a,b.i)?1:0;}
function ARa(a,b){var c,d,e;c=a.dd;d=c!==null&&Ga(c,b.i,a.og)?1:0;c=a.dh;e=c!==null&&Ga(c,b.i,a.og)?1:0;return !d&&!e&&!a.bG.bN(b)?0:1;}
function AMQ(a,b,c,d){var e,f;if(!DN(a,b.i))return 0;e=Cf(d*0.25,a.ei);f=Cf(c*0.25,a.ei);if(b.bL){f=f+e|0;e=0;}if(a.dd!==null&&e){b=a.bG;ABt(b,b.bE.b+e|0);H1(a);}if(a.dh!==null&&f){b=a.bG;XJ(b,b.bE.a+f|0);Jf(a);}return 1;}
function AW1(a){var b,c;b=Ng(a);c=a.bG.kg();c.a=Be(c.a,b);c.b=Be(c.b,b);return c;}
function QH(){var a=this;Gu.call(a);a.kE=null;a.nd=null;a.rN=null;a.rK=0.0;}
function ALC(a){var b,c;b=a.cZ;c=a.t;V(b,c.a*3|0,c.b*5|0);}
function AW6(a){var b;b=Cf(20.0,a.ei);return B7(b,b);}
function AS9(a,b){var c,d,e,f;c=a.rN;d=c.sv;e=c.sx;c=c.su;b=CC(b);f=new L;N(f);H(H(H(f,c),C(28)),b);Iy(e,M(f),d.q3,3.0);}
function AXy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;AHk(a,b);X2(a,b);c=Cf(30.0,a.ei);d=a.bE;e=d.a;f=W(e/c|0,c);g=d.b;h=W(g/c|0,c);d=a.t;i=W(((e+d.a|0)-1|0)/c|0,c);e=W(((g+d.b|0)-1|0)/c|0,c);d=a.nd;d.b=c;d.a=c;a.kE.bF=1.0;while(h<=e){g=a.H.b-a.bE.b|0;j=f;while(j<=i){k=a.H.a-a.bE.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AG4(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;ZI(n,0.75,a.rK,a.kE);Bx(b,k+j|0,g+h|0,a.nd,a.kE);j=j+c|0;}h=h+c|0;}Hv(b);}
function AJA(a,b){}
function Zl(){var a=this;B.call(a);a.sv=null;a.sx=null;a.su=null;}
var Up=G(Ea);
var A3Q=null;function Dg(b,c){return Long_udiv(b, c);}
function AB$(b,c){return Long_urem(b, c);}
function Du(b,c){return Long_ucompare(b, c);}
function AD9(){A3Q=F($rt_longcls());}
function QV(){B.call(this);this.pk=null;}
function AUY(a){Sy(a.pk);}
function Ph(){B.call(this);this.oX=null;}
function AK7(a){WS(a.oX);}
function Wn(){B.call(this);this.nX=null;}
var A3P=null;function AOQ(){var a=new Wn();AC3(a);return a;}
function AC3(a){a.nX=BI();}
function ND(a,b,c,d,e){var f;f=new Lg;f.u1=e;f.jH=c;f.jY=d;f.gC=b;BF(a.nX,f);}
function Zk(a){return Iq(a.nX,A3P);}
function Vd(b){return b===null?C(21):XM(b);}
function AHa(){A3P=R(Lg,0);}
function I$(){var a=this;B.call(a);a.uc=null;a.i_=null;a.ko=null;a.hQ=null;a.iI=null;a.hS=null;a.gl=null;}
function J_(b,c,d,e){var f,g,h;f=new I$;f.hQ=new Bd;f.iI=new Bd;f.hS=new Bd;f.gl=b;g=Cw(e,b.gC);if(g!==null)g.ii=g.ii+1|0;else{g=new YB;h=JM(c,b.gC,d);g.ii=1;g.kx=h;EQ(e,b.gC,g);}e=g.kx;f.uc=e;V(f.hQ,e.bf|0,e.bF|0);e=JM(c,b.jH,d);f.i_=e;V(f.iI,e.bf|0,e.bF|0);b=JM(c,b.jY,d);f.ko=b;V(f.hS,b.bf|0,b.bF|0);return f;}
function Ys(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gl.gC;f=Cw(d,e);g=f.ii-1|0;f.ii=g;if(!g){a:{h=0;i=null;if(e===null){j=d.cc.data[0];while(j!==null){if(j.cI===null)break a;e=j.cP;i=j;j=e;}}else{k=I1(e);l=d.cc.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.kd==k&&ACd(e,j.cI))){m=j.cP;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cP=j.cP;else d.cc.data[h]=j.cP;d.cR=d.cR+1|0;d.cT=d.cT-1|0;}IU(b,f.kx);}IU(b,c.i_);IU(b,c.ko);}
function X6(){var a=this;Fr.call(a);a.fL=null;a.hz=null;a.hv=null;a.eG=null;a.kn=0.0;a.gw=0;a.hA=0;a.dD=null;a.lm=null;}
function Lq(a){var b;b=a.t;return b.a&&b.b?0:1;}
function Y4(a){var b,c;a:{if(a.hv!==null){b=a.hz;if(b!==null&&!Fc(b)){c=0;break a;}}c=1;}return c;}
function Rq(a,b){a.t.b=b;}
function RD(a,b,c,d,e){var f,g;f=a.fL.dG;V(f,d,a.t.b);g=a.H;Bx(b,g.a+c|0,g.b,f,e);}
function XI(a){if(a.eG===null)a.eG=HK(a.fL,a.hv);}
function Wx(){var a=this;B.call(a);a.mT=Fq;a.ls=0;a.pV=0;}
function Vg(){var a=this;B.call(a);a.qc=null;a.qb=null;a.qa=null;}
function AKd(a){var b,c,d,e,f;b=a.qc;c=a.qb;d=a.qa;e=BA();f=new L;N(f);b=H(f,b);BL(b,9);b=H(b,c);BL(b,9);H(b,d);Bq(e,M(f));}
function Qe(){B.call(this);this.te=null;}
function AJh(a,b){var c,d;c=a.te;d=FM(b,c.bG.cZ.b-c.t.b|0);ABt(c.bG,d);H1(c);}
function Qd(){B.call(this);this.ut=null;}
function AJK(a,b){var c,d;c=a.ut;d=FM(b,c.bG.cZ.a-c.t.a|0);XJ(c.bG,d);Jf(c);}
function Lg(){var a=this;B.call(a);a.u1=null;a.jH=null;a.jY=null;a.gC=null;}
var CT=G(Bu);
var AFH=G(Fa);
function ALK(a){var b=new AFH();AQH(b,a);return b;}
function AQH(a,b){a.kl=1;a.kW=1;a.mE=b;}
function Yy(){B.call(this);this.sc=null;}
function AQ_(a,b){var c,d,e,f;c=a.sc;if(c.eJ!=3){b=b.data;d=CF(b[0]);e=Eo(b[1]);NV(c.f,d,e,null,null);if(c.fg){b=EL(c);f=II(EO(),c.v2);c=new L;N(c);H(GR(H(H(c,b),C(428)),f),C(249));$rt_globals.console.info($rt_ustr(M(c)));}}}
var ACP=G(0);
function ABR(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(I1(b)){case -1655966961:if(!Bp(b,C(191)))break a;c=4;break a;case 3401:if(!Bp(b,C(245)))break a;c=3;break a;case 98723:if(!Bp(b,C(190)))break a;c=2;break a;case 3254818:if(!Bp(b,C(178)))break a;c=1;break a;case 3556653:if(!Bp(b,C(189)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=DX();e=new L;N(e);H(H(e,C(429)),b);Bq(d,M(e));c=0;break b;}c=0;}return c;}
function AHI(){var a=this;B.call(a);a.le=null;a.lH=null;a.ex=null;a.ll=null;a.bx=null;a.mW=null;a.m5=null;a.ft=null;a.f$=null;a.ia=null;}
function AXt(a,b){var c=new AHI();AQw(c,a,b);return c;}
function AQw(a,b,c){var d,e,f;a.ex=b;a.ll=c;a.bx=AKB();b=new L;N(b);a.ia=b;a.ft=LH();b=new Vb;d=AG1(16);b.f0=0;b.dM=R(Im,d);b.q9=0.75;Yf(b);a.f$=b;b=new Yu;c=a.bx;e=a.ia;f=a.ft;b.df=c;b.k4=e;b.tk=f;a.mW=b;b=new X9;b.cQ=c;b.mo=e;b.rS=f;a.m5=b;}
function O6(a){var b,c,d,e,f,g,h;a:{b=KO(a.ex.eH);c=b.hy;if(c.cT>0){d=c.cR;e=0;b:while(true){f=b.hy.cc.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cI;if(Kt(a.ft,g))Cw(a.ft,g);else{h=a.ft;EQ(h,g,CQ(h.cT));}c=c.cP;if(d!=b.hy.cR)break b;}e=e+1|0;}b=new HA;Z(b);K(b);}}b=a.ex.fu;if(b!==null)TB(a,b);Br(a.bx,a.ex.eH.cT);b=UM(KO(a.ex.eH));while(FF(b)){c=Q0(b);G7(a.bx,a.ia.K,J(c));B0(a.ia,c);}b=UM(KO(a.ex.eH));while(FF(b)){c=Q0(b);c=Cw(a.ex.eH,c);Br(a.bx,c.j);c=B5(c);while(B6(c)){g=B9(c);g=Cw(a.ft,g);Br(a.bx,
g.bt);}}if(a.ex.fu===null)Br(a.bx,(-1));else{Br(a.bx,a.f$.f0);UX(a,a.ex.fu);}if(a.ll===null)Br(a.bx,(-1));else{Br(a.bx,1);ACh(a.ll,a.bx,a.f$);}a.le=Se(a.bx);a.lH=FV(M(a.ia));}
function TB(a,b){var c,d,e,f,g,h;if(YJ(a.f$,b))M9(a.f$,b);else{c=a.f$;d=CQ(c.f0);if(b===null){e=SG(c);if(e===null){c.kw=c.kw+1|0;e=YO(c,null,0,0);f=c.f0+1|0;c.f0=f;if(f>c.m1)OZ(c);}}else{g=JT(b);h=g&(c.dM.data.length-1|0);e=Pa(c,b,h,g);if(e===null){c.kw=c.kw+1|0;e=YO(c,b,h,g);f=c.f0+1|0;c.f0=f;if(f>c.m1)OZ(c);}}e.cY=d;}b=b.cz;if(b===null)return;c=new AA0;c.rW=a;b.eZ(c);}
function UX(a,b){var c,d,e,f;c=(M9(a.f$,b)).bt;Br(a.bx,c);if(b instanceof LL)Br(a.bx,(-1));else if(!(b instanceof Lh))Br(a.bx,0);else Br(a.bx,1);d=a.mW;Br(d.df,b.ed.cU());e=b.ed;f=new NB;f.yu=d;e.eZ(f);d=a.m5;Br(d.cQ,b.eR.cU());e=b.eR;f=new XB;f.v8=d;e.eZ(f);d=b.jq;Br(a.bx,d.cU());e=new YU;e.w6=a;d.eZ(e);d=b.gL;Br(a.bx,d.cU());d=d.cd();while(d.cy()){e=d.b5();OJ(a.mW,e.ju);Hs(a.m5,e.ks);Br(a.bx,e.ri);}d=b.v4;if(d===null)Br(a.bx,(-1));else Br(a.bx,(Cw(a.ft,d)).bt);b=b.cz;Br(a.bx,b.cU());d=new QQ;d.oW=a;b.eZ(d);}
function NU(){B.call(this);this.wk=null;}
function AIk(a,b){var c,d,e,f,g,h,i,j;c=a.wk;if(c.fg){d=EL(c);e=new L;N(e);H(H(e,d),C(430));$rt_globals.console.info($rt_ustr(M(e)));}b=b.data;f=CF(b[0]);g=Eo(b[1]);h=(CF(b[2])).data[0];if(c.f.cr==h){i=null;j=null;if(b.length>=5){i=CF(b[3]);j=Eo(b[4]);}NV(c.f,f,g,i,j);E$(c.f.dq);E$(c.f.dJ);KS(c.f);H2(c.f);M3(c);}}
function RX(){var a=this;B.call(a);a.AF=null;a.AH=null;a.AG=null;}
function Uy(){var a=this;B.call(a);a.x_=null;a.ya=null;a.x$=0;}
function AMs(a,b){var c,d,e;c=a.x_;d=a.ya;e=a.x$;d.g(Y9(c,(b.i.a+e|0)-c.eq.a|0));}
function Ux(){var a=this;B.call(a);a.rg=null;a.re=null;a.rf=0;}
function AWf(a,b){var c,d,e;c=a.rg;d=a.re;e=a.rf;d.g(RH(c,(b.i.b+e|0)-c.eq.b|0));}
function Lm(){var a=this;Na.call(a);a.qy=null;a.vn=null;}
function AHe(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.qy;e=0;f=0;g=a.vn;a:{b:{while(true){if((e+32|0)>f&&D1(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ce(b)+k|0;h=j.length;f=Bc(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BG;c=new L;N(c);U(H(U(H(c,C(431)),l),C(99)),h);Bm(b,M(c));K(b);}if(Ce(b)<m){b=new MT;Z(b);K(b);}if(m<0){b=new BG;c=new L;N(c);H(U(H(c,C(100)),m),C(101));Bm(b,M(c));K(b);}n=b.ba;h=n+b.mq|0;e=0;while(e<m){o=k+1|0;i=b.nj.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.ba=n+m|0;e=0;}if(!D1(c)){p=!D1(b)&&e>=f?A1J:A1I;break a;}i=g.data;n=Ce(c);o=i.length;n=Bc(n,o);q=new Xw;q.ui=b;q.wZ=c;p=AHG(a,d,e,f,g,0,n,q);e=q.yF;if(p===null&&0==q.lv)p=A1J;k=q.lv;h=0;if(c.oh){b=new JL;Z(b);K(b);}if(Ce(c)<k)break;if(h>o){b=new BG;c=new L;N(c);BL(U(H(U(H(c,C(102)),h),C(96)),o),41);Bm(b,M(c));K(b);}l=h+k|0;if(l>o){b=new BG;c=new L;N(c);U(H(U(H(c,C(104)),l),C(99)),o);Bm(b,M(c));K(b);}if(k<0){b=new BG;c=new L;N(c);H(U(H(c,C(100)),k),C(101));Bm(b,M(c));K(b);}o=c.ba;m=0;while(m
<k){l=o+1|0;n=h+1|0;UP(c,o,i[h]);m=m+1|0;o=l;h=n;}c.ba=c.ba+k|0;if(p!==null)break a;}b=new IA;Z(b);K(b);}b=new BG;c=new L;N(c);BL(U(H(U(H(c,C(102)),k),C(96)),h),41);Bm(b,M(c));K(b);}E7(b,b.ba-(f-e|0)|0);return p;}
var VU=G(Lm);
function AHG(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Ln(h,2))break a;i=A1J;break a;}c=k+1|0;n=j[k];if(!Gc(a,n)){c=c+(-2)|0;i=Ei(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Ln(h,3))break a;i=A1J;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gc(a,n))break b;if(!Gc(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Nf(p)){c=k+(-3)|0;i=Ei(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ei(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Ln(h,4))break a;i=A1J;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ce(h.wZ)<2?0:1)break a;i=A1I;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gc(a,n))break c;if(!Gc(a,o))break c;if(!Gc(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=IQ(r);m=c+1|0;j[c]=Jq(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ei(1);break a;}c=k+(-3)|0;i
=Ei(1);}h.yF=c;h.lv=f;return i;}
function Gc(a,b){return (b&192)!=128?0:1;}
function AAJ(){B.call(this);this.pl=null;}
function AV$(a,b){var c,d;c=a.pl;d=c.dZ+1|0;c.dZ=d;c=new L;N(c);H(H(U(c,d),C(432)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function AAG(){B.call(this);this.q$=null;}
function AKb(a){return a.q$.gE();}
function AAF(){B.call(this);this.rV=null;}
function ARQ(a){return a.rV.gE();}
function U6(){B.call(this);this.vj=null;}
function ASm(a){return a.vj.gE();}
function VB(){B.call(this);this.Ay=null;}
function AV1(a){Bq(BA(),C(433));}
function Tb(){B.call(this);this.pE=null;}
function AIB(a,b){a.pE.g(Fn(b));}
var AEl=G();
function W1(){B.call(this);this.vu=null;}
function AWV(a,b){a.vu.n();}
var AFZ=G();
var AF_=G();
function O$(){B.call(this);this.wQ=null;}
function ALu(a,b){var c,d,e,f;c=a.wQ;d=CC(b);e=new L;N(e);H(H(e,C(434)),d);$rt_globals.console.info($rt_ustr(M(e)));d=new WA;d.AM=c;d.tF=b;e=new WD;e.B0=c;c=AG8(e);e=new X8;e.qh=d;d=b.fM;if(d!==null)d.arrayBuffer().then(Bl(e,"f"),Bl(c,"f"));else{b=b.hs.getFile();f=new X$;f.wL=e;f.wM=c;b.then(Bl(f,"f"),Bl(c,"f"));}}
function O9(){B.call(this);this.zP=null;}
function AUr(a,b){var c;b=CC(b);c=new L;N(c);H(H(c,C(435)),b);$rt_globals.console.info($rt_ustr(M(c)));}
var NS=G();
function AUN(a,b){b=b;b.bs=CM(b.bs,null);}
function Yt(){B.call(this);this.vi=null;}
function AKv(a){D3(a.vi);}
var HA=G(Bu);
function OG(){var a=this;B.call(a);a.sX=0;a.sW=0;}
function AGP(){var a=this;B.call(a);a.hH=null;a.m2=0;a.fF=0;}
function AKB(){var a=new AGP();AXs(a);return a;}
function AXs(a){a.m2=0;a.hH=BD(16);a.fF=0;}
function G7(a,b,c){Br(a,b);Br(a,c);}
function Br(a,b){var c,d;c=a.hH;d=c.data.length;if(d==a.fF)a.hH=JI(c,d*2|0);c=a.hH.data;d=a.fF;a.fF=d+1|0;c[d]=b;}
function Se(a){var b,c,d,e,f;b=a.m2;if(b&&a.fF!=b){c=DX();b=a.m2;d=a.fF;e=new L;N(e);H(U(H(U(H(e,C(436)),b),C(437)),d),C(438));Bq(c,M(e));}f=a.hH;b=f.data.length;d=a.fF;if(b!=d)f=JI(f,d);return f;}
function Vb(){var a=this;D$.call(a);a.f0=0;a.dM=null;a.kw=0;a.q9=0.0;a.m1=0;}
function AG1(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Yf(a){a.m1=a.dM.data.length*a.q9|0;}
function YJ(a,b){return AAL(a,b)===null?0:1;}
function M9(a,b){var c;c=AAL(a,b);if(c===null)return null;return c.cY;}
function AAL(a,b){var c,d;if(b===null)c=SG(a);else{d=JT(b);c=Pa(a,b,d&(a.dM.data.length-1|0),d);}return c;}
function Pa(a,b,c,d){var e;e=a.dM.data[c];while(e!==null&&!(e.mX==d&&(b!==e.cI?0:1))){e=e.hD;}return e;}
function SG(a){var b;b=a.dM.data[0];while(b!==null&&b.cI!==null){b=b.hD;}return b;}
function YO(a,b,c,d){var e,f;e=new Im;ABc(e,b,null);e.mX=d;f=a.dM.data;e.hD=f[c];f[c]=e;return e;}
function OZ(a){var b,c,d,e,f,g,h,i;b=a.dM.data.length;b=AG1(!b?1:b<<1);c=R(Im,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dM.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.mX&f;i=h.hD;h.hD=d[b];d[b]=h;h=i;}e=e+1|0;}a.dM=c;Yf(a);}
function Yu(){var a=this;B.call(a);a.df=null;a.k4=null;a.tk=null;}
function OJ(a,b){var c;if(!(b instanceof M_)){Br(a.df,3);ZR(a,b);Br(a.df,b.hP);}else{c=b;Br(a.df,5);ZR(a,c);Br(a.df,c.hP);Br(a.df,c.oF);b=c.kO;Br(a.df,b.j);c=new Ov;c.p9=a;Ex(b,c);}}
function ZR(a,b){var c;c=b.ee.h2;G7(a.df,a.k4.K,J(c));Br(a.df,b.ee.dt);NN(a,b.kz);B0(a.k4,c);}
function NN(a,b){if(b===null)Br(a.df,(-1));else Br(a.df,(Cw(a.tk,b)).bt);}
function X9(){var a=this;B.call(a);a.cQ=null;a.mo=null;a.rS=null;}
function Hs(a,b){var c,d,e;if(b instanceof GN){c=b;Br(a.cQ,9);RW(a,c.g7);}else if(b instanceof Jo){d=b;Br(a.cQ,3);SJ(a,d);Br(a.cQ,d.pa);RW(a,d.hk);}else if(b instanceof JO){e=b;Br(a.cQ,4);Hs(a,e.is);Hs(a,e.hn);}else if(b===null)Br(a.cQ,(-1));else{Br(a.cQ,5);SJ(a,b);Br(a.cQ,b.u0);}}
function SJ(a,b){var c;c=b.fp.h2;G7(a.cQ,a.mo.K,J(c));Br(a.cQ,b.fp.dt);b=b.fZ;if(b===null)Br(a.cQ,(-1));else Br(a.cQ,(Cw(a.rS,b)).bt);B0(a.mo,c);}
function RW(a,b){var c;Br(a.cQ,b.j);c=new ABh;c.qe=a;Ex(b,c);}
function VF(){B.call(this);this.sA=null;}
function AUv(a,b){var c;c=a.sA;Dw(c,b);KI(c,null);AAH(c);}
function TH(){B.call(this);this.o_=null;}
function AVM(a,b){HO(a.o_,b);}
function O7(){B.call(this);this.rn=null;}
function APP(a,b){HO(a.rn,b);}
function Y0(){B.call(this);this.uk=null;}
function AWN(a,b){var c,d,e,f;c=a.uk;if(c.g3!=3&&c.eJ!=3){b=b.data;c.hl=3;d=CF(b[0]);e=Eo(b[1]);Mx(c.f,d,e);if(c.fg){b=EL(c);f=II(EO(),c.iD);c=new L;N(c);H(GR(H(H(c,b),C(439)),f),C(249));$rt_globals.console.info($rt_ustr(M(c)));}}}
function Si(){B.call(this);this.t0=null;}
function AKm(a,b){var c,d,e,f,g,h;c=a.t0;if(c.eJ!=3){d=b.data;c.g3=3;if((CF(d[2])).data[0]!=1)HO(c,b);else{e=CF(d[0]);f=Eo(d[1]);g=c.hl!=3?0:1;S0(c.f,e,f,g);if(c.fg){b=EL(c);h=II(EO(),c.iD);c=new L;N(c);H(GR(H(H(c,b),C(440)),h),C(249));$rt_globals.console.info($rt_ustr(M(c)));}}}}
var RK=G(Ea);
var A3R=null;function AC5(){A3R=F($rt_doublecls());}
var Jc=G();
var A3S=Fq;var A3T=null;var A3U=null;function AEz(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.pV=Il(C1(d,D(0, 2147483648)),Fq)?0:1;e=C1(d,D(4294967295, 1048575));f=GK(AY7(d,52))&2047;if(Il(e,Fq)&&!f){c.mT=Fq;c.ls=0;return;}if(f)e=AYO(e,D(0, 1048576));else{e=GY(e,1);while(Il(C1(e,D(0, 1048576)),Fq)){e=GY(e,1);f=f+(-1)|0;}}g=A3U.data;h=f<<16>>16;i=0;j=g.length;k=BH(i,j);if(k>0){c=new BP;Z(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BH(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IK(e,A3T.data[h],i);if(AMn(m,A3S)){while(Du(m,A3S)<=0){j=j+(-1)|0;m=CJ(Cd(m,Bo(10)),Bo(9));}g=A3U.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IK(e,A3T.data[h],i);}e=GY(e,1);d=CJ(e,Bo(1));g=A3T.data;h=j+1|0;n=g[h];f=i-1|0;n=IK(d,n,f);o=IK(II(e,Bo(1)),A3T.data[h],f);p=Bo(1);while(true){q=Cd(p,Bo(10));if(Du(Dg(m,q),Dg(o,q))<=0)break;p=q;}r=Bo(1);while
(true){s=Cd(r,Bo(10));if(Du(Dg(m,s),Dg(n,s))>=0)break;r=s;}h=Du(p,r);e=h>0?Cd(Dg(m,p),p):h<0?CJ(Cd(Dg(m,r),r),r):Cd(Dg(CJ(m,AGe(r,Bo(2))),r),r);if(Du(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dg(e,Bo(10));if(Du(e,D(2808348672, 232830643))<0)break;}else if(Du(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cd(e,Bo(10));}c.mT=e;c.ls=j-330|0;}
function IK(b,c,d){var e,f,g,h,i,j,k,l;e=C1(b,Bo(65535));f=C1(Gf(b,16),Bo(65535));g=C1(Gf(b,32),Bo(65535));h=C1(Gf(b,48),Bo(65535));i=C1(c,Bo(65535));j=C1(Gf(c,16),Bo(65535));k=C1(Gf(c,32),Bo(65535));l=C1(Gf(c,48),Bo(65535));return CJ(CJ(CJ(GY(Cd(l,h),32+d|0),GY(CJ(Cd(l,g),Cd(k,h)),16+d|0)),GY(CJ(CJ(Cd(l,f),Cd(k,g)),Cd(j,h)),d)),Gf(CJ(CJ(CJ(Cd(k,e),Cd(j,f)),Cd(i,g)),GY(CJ(CJ(CJ(Cd(l,e),Cd(k,f)),Cd(j,g)),Cd(i,h)),16)),32-d|0));}
function AD_(){A3S=Dg(Bo(-1),Bo(10));A3T=ACS([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A3U=A0v([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function PO(){B.call(this);this.o$=null;}
function ASz(a){Ht(a.o$,37,3);}
function PP(){B.call(this);this.vX=null;}
function AXf(a){Ht(a.vX,40,3);}
function PQ(){B.call(this);this.r3=null;}
function AJH(a){Ht(a.r3,42,3);}
function PR(){B.call(this);this.zc=null;}
function AKj(a){Ht(a.zc,45,3);}
function PN(){B.call(this);this.u9=null;}
function AU4(a){Ht(a.u9,45,5);}
function Z_(){B.call(this);this.p_=null;}
function AL1(a,b){var c,d;c=a.p_;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var AAN=G(0);
var A1v=null;function AZU(){AZU=Bs(AAN);ASZ();}
function ASZ(){A1v=new $rt_globals.TextDecoder("utf-16");}
function WQ(){var a=this;B.call(a);a.t$=0;a.ze=0;}
function FM(a,b){return R5(a.t$,b,a.ze);}
function AAh(){var a=this;B.call(a);a.rj=null;a.rk=null;a.rl=null;}
function AWs(a,b,c,d){var e,f;b=a.rj;e=a.rk;f=a.rl;V$(b,e);if(f!==null)d.lM.n();if(Xt(d)){if(d.m3===null)Qg(b,AD7(d,e),d.jQ,e);else ZL(b,AD7(d,e),d.jQ,e,d.m3);}}
var Ec=G(Bu);
function Pn(){var a=this;B.call(a);a.oV=null;a.sS=null;a.w5=0;a.yw=0;}
function MH(a,b){return Ce(a.sS)<b?0:1;}
function Wa(){B.call(this);this.xd=null;}
function AQp(a,b){HO(a.xd,b);}
function Wb(){B.call(this);this.vH=null;}
function ASq(a,b){HO(a.vH,b);}
var AGY=G();
function WU(b,c,d,e){var f,g;f=b.next();g=new AAo;g.ph=b;g.pg=c;g.pm=d;g.pi=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function ACf(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AHH(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ej()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new AAl;f.tK=b;f.tL=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function ACq(b,c){var d;if(c.isFile?1:0)b.g(ABL(c.file()));else{c=c.createReader();d=new Z3;d.xh=b;c.readEntries(Bl(d,"f"));}}
function VK(){var a=this;B.call(a);a.bu=null;a.qw=null;a.hq=null;a.oe=null;a.kV=null;a.fx=null;}
function G4(a){return a.bu.bS.gt;}
function ABn(a){var b;b=new U9;b.yc=a;return b;}
function AEc(a){var b,c,d,e,f;b=R(Cm,5);c=b.data;d=a.bu;BO(d);e=new AAY;e.u2=d;c[0]=CS(C(441),e);e=a.bu;BO(e);f=new AAT;f.qj=e;c[1]=CS(C(442),f);d=a.bu;BO(d);e=new AAU;e.ru=d;c[2]=CS(C(443),e);d=a.bu;BO(d);e=new AAV;e.x8=d;c[3]=CS(C(444),e);d=a.bu;BO(d);e=new AAW;e.o3=d;c[4]=CS(C(445),e);return EV(b);}
function Rd(a,b){var c;c=new PY;c.yQ=a;c.yR=b;return c;}
function Kn(a,b,c){var d,e,f,g,h,i,j,k,l;a:{D3(a.fx.b8);d=a.bu.d;e=Eq(d);f=GG(d);g=a.bu.fm;if(c===null)h=null;else{AZF();switch(A3V.data[c.fj]){case 1:h=Nc(g,e,f);break a;case 2:h=SS(g,e,f);break a;default:}b=new EP;Z(b);K(b);}}c=a.bu;e=E9(c,b);f=Jg(c.d.f,e.bp,e.by);g=Vu(c,f);if(h!==null){f=c.d;i=e.bp;j=e.by;e=new Wm;e.AR=c;e.AP=b;e.AO=g;h.uz(f,i,j,e,c.iT);}else{e=Cw(c.d.f.dJ,f);if(e!==null)IN(c,e);else{e=Cw(c.d.f.dq,f);if(e!==null&&!Ey(e))Ti(c.kq,b,e,c,g);else{g=c.kq;D3(g.b8);h=g.b8;k=R(Cm,1);l=k.data;d=new Cm;BO(h);f
=new NY;f.zf=h;Es(d,f,C(446));l[0]=d;FQ(h,b,EV(k),SZ(g,c));}}}}
var ACE=G(0);
var SW=G(0);
var Pd=G(0);
var HC=G();
function UH(){HC.call(this);this.wn=null;}
function W8(a,b){var c,d,e;c=0;while(true){d=a.wn;if(d.jk===null)d.jk=B5(d.r1);if(!B6(d.jk))e=0;else{c=b.X(B9(d.jk));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var SN=G(0);
function Tz(){var a=this;B.call(a);a.zN=null;a.zK=null;a.zL=0;a.zM=0;}
function Im(){var a=this;G0.call(a);a.mX=0;a.hD=null;}
var AAq=G();
function AUh(a,b){ACf(b);}
function AAp(){var a=this;B.call(a);a.sV=null;a.sU=null;}
function ALU(a,b){var c,d,e,f,g,h,i;c=a.sV;d=a.sU;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new Sk;i.qI=c;i.qH=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var Zt=G();
function ANJ(a,b){ACf(b);}
function Zs(){var a=this;B.call(a);a.sd=null;a.se=null;}
function AOE(a,b){var c,d,e,f,g;c=a.sd;d=a.se;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(BC,1);g.data[0]=Fn(b.name);WU(f,c,d,g);}
function Yc(){var a=this;B.call(a);a.Bd=null;a.uR=0;}
function AU0(a,b){var c,d,e,f;c=a.uR;d=(CF(It(b,0))).data;b=BA();e=d[0];f=new L;N(f);U(H(U(H(f,C(447)),c),C(448)),e);Bq(b,M(f));b=BA();e=d[1];f=new L;N(f);U(H(U(H(f,C(447)),c),C(449)),e);Bq(b,M(f));}
function AB8(){B.call(this);this.HW=null;}
function AAl(){var a=this;B.call(a);a.tK=null;a.tL=null;}
function ANx(a,b){var c,d,e,f,g,h;b=a.tK;c=a.tL;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new N1;h.o8=b;h.o7=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=ABL(d.item(f));g=new NI;g.u6=b;g.u7=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function ACQ(){var a=this;B.call(a);a.kc=null;a.mS=null;}
function AH$(){var a=this;B.call(a);a.Aq=0;a.B8=0;a.q5=0;a.mw=0;}
function Z8(){var a=this;B.call(a);a.sG=null;a.sH=null;}
function AJE(a){var b,c,d,e,f,g;b=a.sG;c=a.sH;if(BW(c.kc,b.d.fO)){c=c.mS;CI(b,c.mw,c.q5,0);Cb((Bj(b)).bM,c.mw,c.q5);Cb((Bj(b)).bC,c.B8,c.Aq);}else{d=(Cx(b.fm.wP)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Gk(b);b=new Rh;b.qM=g;b.qJ=c;BO(b);c=new TO;c.w2=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function Z9(){var a=this;B.call(a);a.x7=null;a.x6=null;}
function AOg(a){IN(a.x7,a.x6);}
function FT(){var a=this;B.call(a);a.gR=null;a.cz=null;a.eR=null;a.ed=null;a.gL=null;a.jq=null;a.v4=null;}
function AYc(a){var b=new FT();AFd(b,a);return b;}
function AFd(a,b){a.gR=b;a.cz=BI();a.eR=BI();a.ed=BI();a.jq=BI();a.gL=BI();}
function AAw(a){var b;b=a.gR;if(b!==null)b.cz.pR(a);}
function AA0(){B.call(this);this.rW=null;}
function ANB(a,b){b=b;TB(a.rW,b);}
var LL=G(FT);
var Lh=G(FT);
function YU(){B.call(this);this.w6=null;}
function AJJ(a,b){var c;b=b;c=a.w6;Br(c.bx,(Cw(c.ft,b)).bt);}
function RT(){var a=this;B.call(a);a.ju=null;a.ks=null;a.ri=0;}
function QQ(){B.call(this);this.oW=null;}
function AQO(a,b){b=b;UX(a.oW,b);}
function SL(){var a=this;B.call(a);a.lB=0;a.st=null;}
function AX6(a,b){var c,d,e;c=a.st;b=b;d=c.sX;e=c.sW;d=b.a<=d&&e<=b.b?1:0;a.lB=d;return d?0:1;}
var JL=G(Ec);
var IA=G(Bu);
var MT=G(Bu);
function Rl(){B.call(this);this.tX=null;}
function ASl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.tX;d=CF(c[0]);e=(CF(c[1])).data[0];if(!Wp(b.f)){c=b.f;if(c.cr==e){e=b.oP;f=MR(d);E$(c.dJ);E$(c.dq);KS(c);while(f.eS>=f.hM.data.length?0:1){if(Bb(f)==(-1))continue;g=AAP(c,Bb(f));h=M0(B3(c,g.bp),g.by);if(Bb(f)==(-1)){if(!e)continue;h.b4=0;h.bW=h.bW|4;continue;}i=AAP(c,Bb(f));j=Bb(f);k=Bb(f);EQ(c.dJ,g,i);l=c.dq;m=BI();if(Cw(l,i)===null)EQ(l,i,m);BF(Cw(c.dq,i),g);h.b4=j;h.bW=k;}LY(b);if(b.Av){n=II(EO(),b.xp);if(AYG(n,Bo(100))){b=EL(b);c=new L;N(c);H(GR(H(H(c,
b),C(450)),n),C(249));$rt_globals.console.info($rt_ustr(M(c)));}}}}}
function AH6(){B.call(this);this.LQ=null;}
function SC(){var a=this;B.call(a);a.pq=null;a.pr=null;}
function AX8(a){var b,c;b=a.pq;c=a.pr;Gh(b.eF,c);}
function Sq(){var a=this;B.call(a);a.r1=null;a.jk=null;}
function Sr(){var a=this;B.call(a);a.oQ=null;a.oR=null;}
function AJN(a){var b,c;b=a.oQ;c=a.oR;Gh(b.eF,c);VI(b);}
var Ry=G();
var A3W=null;function Mx(b,c,d){S0(b,c,d,0);}
function S0(b,c,d,e){PT(b,c,d,null,null,e);}
function PT(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=MR(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CD(b);c=b.z;if(c.data.length<i)b.z=ADf(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.eS=h.eS+n|0;}else b.z.data[m]=DV(Ss(h,d,0));m=m+1|0;}KS(b);if(j)b.c7=AGq(AHO(h));E$(b.dJ);E$(b.dq);o=b.dJ;g=0;while(g<k){EQ(o,DU(Bb(h),Bb(h)),DU(Bb(h),Bb(h)));g=g+1|0;}p=b.dJ;o=b.dq;q=P2(Xv(p));while(FF(q)){r=AAu(q);s=r.cI;p=r.cY;BO(A3W);r=Cw(o,p);if(r===null){r=BI();EQ(o,p,r);}BF(r,s);}if(o.l3===null){p=new Rj;p.yM=o;o.l3=p;}p=o.l3;r=new Tv;LQ(r,
p.yM);while(FF(r)){Mi(r);o=r.gI.cY;p=A01;c=R(B,o.j);d=c.data;Iq(o,c);ADI(c,p);g=0;t=d.length;while(g<t){p=d[g];J1(o,g);o.cE.data[g]=p;g=g+1|0;}}SO(h);if(e!==null&&f!==null){p=AQW(e,f);P$(p);b.en=ALm(p.mt,p.iq);b.c7=AGq(p.nb);}}
function NV(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MR(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=ZO(b,i);o=ZO(b,j);p=(IB(B3(b,n.a),n.b)).data[0].p;q=(IB(B3(b,o.a),o.b)).data[1].p;r=0;s=l-1|0;while(r<l){g=Ss(h,d,i);if(!r)g=MG(p,g);if(r==s)g=MG(g,q);t=n.a+r|0;u=DV(g);c=b.z.data;v=c[t];c[t]=u;if(!k&&HY(v)==HY(u)){t=0;while(t<HY(v)){w=v.p.data[t];o=u.p.data[t];x=w.b4;if(x!=5&&x&&!o.b4){o.b4=x;o.bW=w.bW;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=AHO(h);v=KC(i,
j,(-1));Ps(b.c7,v,w);}else if(e!==null&&f!==null){u=AQW(e,f);P$(u);v=KC(i,j,(-1));Ps(b.c7,v,u.nb);n=b.en;n.fu=b.c7.c5.cj;n.eH=u.iq;}}SO(h);}
function Ss(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=R(Cs,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=D8(Ev(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AF$(){A3W=new Z2;}
function Hk(){var a=this;B.call(a);a.d8=0;a.eh=0;a.mD=null;a.nU=0;a.ge=null;}
function AVd(a,b,c,d,e,f){var g=new Hk();APR(g,a,b,c,d,e,f);return g;}
function APR(a,b,c,d,e,f,g){a.d8=b;a.eh=c;a.mD=B7(f,g);a.nU=d;a.ge=e;}
var Q1=G(0);
var E5=G(Ff);
function Ri(){E5.call(this);this.hy=null;}
function UM(a){var b;b=new Vh;LQ(b,a.hy);return b;}
function NB(){B.call(this);this.yu=null;}
function AMI(a,b){b=b;OJ(a.yu,b);}
function XB(){B.call(this);this.v8=null;}
function APX(a,b){b=b;Hs(a.v8,b);}
function JY(){var a=this;B.call(a);a.ee=null;a.kz=null;a.hP=0;}
function AZN(a,b,c){var d=new JY();AF5(d,a,b,c);return d;}
function AF5(a,b,c,d){a.ee=b;a.kz=c;a.hP=d;}
function AFh(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BW(a.ee,c.ee)&&BW(a.kz,c.kz)&&BW(CQ(a.hP),CQ(c.hP))?1:0;}return 0;}
function M_(){var a=this;JY.call(a);a.kO=null;a.oF=0;}
function AKl(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){if(!AFh(a,b))return 0;c=b;return BW(a.kO,c.kO);}return 0;}
function E1(){var a=this;B.call(a);a.fp=null;a.fZ=null;a.u0=0;}
function AYC(a,b,c){var d=new E1();Ma(d,a,b,c);return d;}
function Ma(a,b,c,d){a.fp=b;a.fZ=c;a.u0=d;}
function ACt(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BW(a.fp,c.fp)&&BW(a.fZ,c.fZ)?1:0;}return 0;}
function GN(){E1.call(this);this.g7=null;}
function Jo(){var a=this;E1.call(a);a.hk=null;a.pa=0;}
function AWn(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){if(!ACt(a,b))return 0;c=b;return BW(a.hk,c.hk);}return 0;}
function JO(){var a=this;E1.call(a);a.is=null;a.hn=null;}
function AJm(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BW(a.is,c.is)&&BW(a.hn,c.hn)?1:0;}return 0;}
function ADQ(){var a=this;HC.call(a);a.Kx=null;a.M8=0;a.Lg=0;a.Ik=0;}
function Ub(){var a=this;B.call(a);a.pv=null;a.pw=null;}
function AOs(a){var b,c;b=a.pv;c=a.pw;U2();Kn(b,c,A3X);}
function Uc(){var a=this;B.call(a);a.tn=null;a.to=null;}
function AK_(a){var b,c;b=a.tn;c=a.to;U2();Kn(b,c,A3Y);}
function T_(){var a=this;B.call(a);a.xr=null;a.xq=null;}
function AJF(a){Kn(a.xr,a.xq,null);}
function Ua(){var a=this;B.call(a);a.o0=null;a.o1=null;}
function AOn(a){var b,c,d,e,f,g,h;b=a.o0;c=a.o1;d=Eq(b.bu.d);e=GG(b.bu.d);d=WF(b.bu.fm,d,e);D3(b.fx.b8);b=b.bu;e=E9(b,c);if(d!==null){f=b.d;g=e.bp;h=e.by;e=new YF;e.A9=b;e.A$=c;d.Ls(f,g,h,1,e,b.iT);}}
function Te(){B.call(this);this.rw=null;}
function ATn(a){var b;b=a.rw;D3(b.fx.b8);Hq(b.bu,ABn(b),0);}
function Td(){B.call(this);this.xX=null;}
function ARK(a){var b;b=a.xX;D3(b.fx.b8);Hq(b.bu,ABn(b),1);}
function Tc(){B.call(this);this.u_=null;}
function AXT(a){var b,c,d;b=a.u_;D3(b.fx.b8);c=G4(b);b=b.bu;BO(b);d=new ABs;d.sf=b;Tn(c,d,AC9(C(451)));}
function Q4(){var a=this;B.call(a);a.ps=null;a.pt=null;}
function ARF(a){var b,c;b=a.ps;c=a.pt;b=b.bu.d;b.nn=c;JE(b);}
var Sp=G(0);
var A2r=null;function AFV(){A2r=new WV;}
function R3(){B.call(this);this.yY=null;}
function AKW(a){var b,c,d;b=a.yY;D3(b.fx.b8);c=G4(b);b=b.bu;BO(b);d=new TI;d.vt=b;MV(c,d);}
function AFS(){var a=this;B.call(a);a.hM=null;a.eS=0;}
function MR(a){var b=new AFS();AII(b,a);return b;}
function AII(a,b){a.hM=b;a.eS=0;}
function Bb(a){var b,c;b=a.hM.data;c=a.eS;a.eS=c+1|0;return b[c];}
function SO(a){var b,c,d,e;if(a.eS!=a.hM.data.length){b=DX();c=a.hM.data.length;d=a.eS;e=new L;N(e);H(U(H(U(H(e,C(436)),c),C(452)),d),C(453));Bq(b,M(e));}}
function ACm(){var a=this;B.call(a);a.mt=null;a.nb=null;a.iq=null;a.cx=null;a.lk=null;a.mc=null;a.ho=null;a.na=null;a.m6=null;}
function AQW(a,b){var c=new ACm();AVX(c,a,b);return c;}
function AVX(a,b,c){a.cx=MR(b);a.lk=c;}
function P$(a){var b,c,d,e,f,g,h,i;b=Bb(a.cx);c=new LP;RS(c);a.iq=c;a.ho=BI();d=0;while(d<b){e=Bb(a.cx);f=Bb(a.cx);g=Ev(a.lk,e,f);EQ(a.iq,g,BI());BF(a.ho,g);d=d+1|0;}c=P2(Xv(a.iq));while(FF(c)){Hf((AAu(c)).cY,OV(a));}d=Bb(a.cx);if(d==(-1))a.mt=null;else{a.mc=R(FT,d);c=new N9;h=a.cx;i=a.lk;g=a.ho;c.dr=h;c.t2=i;c.s8=g;a.na=c;c=new Ts;c.d5=h;c.w7=i;c.xD=g;a.m6=c;a.mt=S2(a,null);}if(Bb(a.cx)!=(-1))a.nb=Tp(a.cx,a.mc);}
function S2(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cx);d=Bb(a.cx);e=a.na;f=Bb(e.dr);g=BI();h=0;while(h<f){BF(g,N_(e));h=h+1|0;}a:{switch(d){case -1:i=new LL;i.gR=b;b=A2F;i.cz=b;i.eR=b;i.ed=b;i.jq=b;i.gL=b;break a;case 0:i=AYc(b);break a;case 1:i=new Lh;AFd(i,b);Hf(i.ed,g);break a;default:}b=new CT;i=new L;N(i);U(H(i,C(454)),d);Bm(b,M(i));K(b);}i.ed=g;b=a.m6;d=Bb(b.d5);e=BI();j=0;while(j<d){BF(e,Gx(b));j=j+1|0;}i.eR=e;i.jq=OV(a);d=Bb(a.cx);b=BI();j=0;while(j<d){e=N_(a.na);g=Gx(a.m6);f=Bb(a.cx);k=new RT;k.ju=e;k.ks
=g;k.ri=f;BF(b,k);j=j+1|0;}i.gL=b;j=Bb(a.cx);i.v4=j==(-1)?null:Bt(a.ho,j);d=Bb(a.cx);b=BI();j=0;while(j<d){BF(b,S2(a,i));j=j+1|0;}i.cz=b;a.mc.data[c]=i;return i;}
function OV(a){var b,c,d,e;b=Bb(a.cx);c=BI();d=0;while(d<b){e=Bb(a.cx);BF(c,Bt(a.ho,e));d=d+1|0;}return c;}
function Ws(){B.call(this);this.uT=null;}
function AWB(a,b,c){var d,e;c=a.uT;d=c.d.f;e=b.bt;b=c.ff;Uz(d.z.data[e],0,b);}
function Pv(){var a=this;B.call(a);a.pL=null;a.pM=0;a.pN=0;a.pO=null;a.pH=0;a.pJ=0;}
function AQ1(a,b){var c,d,e,f,g,h,i,j;c=a.pL;d=a.pM;e=a.pN;f=a.pO;g=a.pH;h=a.pJ;i=CE(c.bB,5.0);d=Bc((c.bB.cf.a-d|0)-i|0,Be((i-d|0)-c.U.t.a|0,b.i.a));j=Bc((c.bB.cf.b-e|0)-i|0,Be((i-e|0)-c.U.t.b|0,b.i.b));V(f,d+g|0,j+h|0);F1(c,f,c.V.t);}
function YE(){var a=this;B.call(a);a.wf=null;a.wh=null;a.wg=null;a.wb=0;a.wa=0;a.we=0;a.wc=0;a.wt=0;a.ws=0;a.wu=0;a.w3=0;}
function ANA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.wf;d=a.wh;e=a.wg;f=a.wb;g=a.wa;h=a.we;i=a.wc;j=a.wt;k=a.ws;l=a.wu;m=a.w3;n=CE(c.bB,5.0);o=c.V.kg();Ci(d,c.V.t);Ci(e,c.V.H);switch(f){case -1:f=Bc(h+(b.i.a-g|0)|0,c.bB.cf.a-n|0);g=o.a;h=h+i|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Be((i+b.i.a|0)-g|0,Be(o.a,n-c.U.H.a|0));}b:{switch(j){case -1:f=Be(n,Bc(l+(b.i.b-k|0)|0,(c.bB.cf.b+c.U.t.b|0)-n|0));g=o.b;h=l+m|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Be((m+b.i.b|0)-k|0,o.b);}F1(c,e,d);}
function YD(){var a=this;B.call(a);a.q1=null;a.q0=0.0;}
function Lj(a,b){return LF(a.q1,b,a.q0*2.0+0.875);}
var Zj=G(BG);
function OQ(){B.call(this);this.q6=null;}
function AO3(a){AHW(a.q6);}
function OR(){B.call(this);this.so=null;}
function AVB(a){K5(a.so);}
function OP(){B.call(this);this.yV=null;}
function AIi(a){AEU(a.yV);}
function Zr(){B.call(this);this.s9=null;}
function AP6(a){a.s9.yn();}
function Zq(){B.call(this);this.wX=null;}
function ATR(a){a.wX.yW();}
function QZ(){B.call(this);this.qd=null;}
function ALZ(a){var b,c,d,e,f,g,h,i;b=a.qd;c=(b.qw.dj()).data;d=R(Cm,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new OI;i.rU=b;i.rT=h;e[f]=Pf(i,h);f=f+1|0;}return d;}
function UN(){B.call(this);this.qC=null;}
function AOC(a){a.qC.oe.jl(0);}
function UO(){B.call(this);this.r7=null;}
function AVe(a){a.r7.oe.jl(1);}
function AAY(){B.call(this);this.u2=null;}
function AID(a){var b,c,d,e,f;b=a.u2.d.f;c=b.cr;d=new L;N(d);U(H(d,C(455)),c);$rt_globals.console.info($rt_ustr(M(d)));c=b.mJ;d=new L;N(d);U(H(d,C(456)),c);$rt_globals.console.info($rt_ustr(M(d)));d=b.c7;e=FD(Ez(b));ZG(d,0,d.c5,e);b=BA();f=b.lQ;f.data[0]=10;P5(b,f,0,1);}
function AAT(){B.call(this);this.qj=null;}
function AOG(a){TK(a.qj);}
function AAU(){B.call(this);this.ru=null;}
function AWR(a){VD(a.ru);}
function AAV(){B.call(this);this.x8=null;}
function AQn(a){M3(a.x8.d);}
function AAW(){B.call(this);this.o3=null;}
function AN0(a){AAH(a.o3);}
function NR(){B.call(this);this.qX=null;}
function AVv(a){var b,c,d,e,f,g,h;b=a.qX;c=R(Cm,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Pf(Rd(b,g),Pq(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Pf(Rd(b,g),Pq(g));e=h;}return c;}
var Z2=G();
function VP(){B.call(this);this.s$=null;}
function AKq(a,b,c){GS(B3(a.s$.d.f,b.bt),0,J(c));}
var Fx=G();
var A3Z=null;var A30=null;var A2F=null;var A31=null;var A32=null;var A33=null;function AFf(){A3Z=new XY;A30=new XV;A2F=new XW;A31=new XT;A32=new XU;A33=new ABq;}
function Sk(){var a=this;B.call(a);a.qI=null;a.qH=null;}
function AL9(a,b){a.qI.g(AFu(a.qH,b));}
function AHD(){var a=this;B.call(a);a.h2=null;a.dt=0;}
function ANz(a,b){var c=new AHD();AIt(c,a,b);return c;}
function AIt(a,b,c){a.h2=b;a.dt=c;}
function ARL(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.dt==c.dt&&BW(a.h2,c.h2)?1:0;}return 0;}
function Ov(){B.call(this);this.p9=null;}
function APV(a,b){b=b;NN(a.p9,b);}
function ABh(){B.call(this);this.qe=null;}
function AX3(a,b){b=b;Hs(a.qe,b);}
var Jz=G(0);
function N1(){var a=this;B.call(a);a.o8=null;a.o7=null;}
function AOK(a){ACq(a.o8,a.o7);}
function NI(){var a=this;B.call(a);a.u6=null;a.u7=null;}
function AIn(a){a.u6.g(a.u7);}
var WV=G();
function AAo(){var a=this;B.call(a);a.ph=null;a.pg=null;a.pm=null;a.pi=null;}
function AN6(a,b){var c,d,e,f,g,h,i;c=a.ph;d=a.pg;e=a.pm;f=a.pi;if(!(b.done?1:0)){WU(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new WC;c.sh=d;c.sj=g;c.sk=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=Fn(g.name);i=h.length;f=Dp(f,i+1|0);f.data[i]=b;WU(c,d,e,f);}}}
var K$=G(E5);
var XY=G(K$);
var Mn=G(D$);
var XV=G(Mn);
var M1=G(E0);
function ALL(a){var b;b=new Ec;Z(b);K(b);}
function AQG(a,b){var c;c=new Ec;Z(c);K(c);}
function APe(a,b){b=new Ec;Z(b);K(b);}
var XW=G(M1);
function AQQ(a,b){var c;c=new BG;Z(c);K(c);}
function APN(a){return 0;}
function AMl(a){return A31;}
function AJt(a){return 1;}
var XT=G();
function AI$(a){return 0;}
function ASk(a){var b;b=new Ns;Z(b);K(b);}
function AT$(a){var b;b=new CT;Z(b);K(b);}
var Rv=G(0);
var XU=G();
var ABq=G();
function Fp(){var a=this;B.call(a);a.jD=0;a.u$=0;a.iv=null;a.gI=null;a.sy=null;a.kj=null;}
function A34(a){var b=new Fp();LQ(b,a);return b;}
function LQ(a,b){a.kj=b;a.u$=b.cR;a.iv=null;}
function FF(a){var b,c;if(a.iv!==null)return 1;while(true){b=a.jD;c=a.kj.cc.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.jD=b+1|0;}return 0;}
function ADp(a){var b;if(a.u$==a.kj.cR)return;b=new HA;Z(b);K(b);}
function Mi(a){var b,c,d,e;ADp(a);if(!FF(a)){b=new Ns;Z(b);K(b);}b=a.iv;if(b!==null){c=a.gI;if(c!==null)a.sy=c;a.gI=b;a.iv=b.cP;}else{d=a.kj.cc.data;e=a.jD;a.jD=e+1|0;b=d[e];a.gI=b;a.iv=b.cP;a.sy=null;}}
var Vh=G(Fp);
function Q0(a){Mi(a);return a.gI.cI;}
function ACC(){var a=this;B.call(a);a.Ig=null;a.N1=0;}
var W5=G(0);
var A3N=null;function AY6(){AY6=Bs(W5);AWP();}
function AWP(){A3N=S(C(395));}
function Tq(){var a=this;B.call(a);a.h=null;a.dI=0;a.lE=null;a.p2=0;a.gU=0;a.fc=0;a.bA=0;a.mR=null;}
function KQ(a){return a.h.bQ;}
function AAR(a,b,c,d){var e,f,g,h,i,j;e=BI();f=a.dI;g=0;if(c!=f)a.dI=c;a:{switch(b){case -1073741784:h=new T3;c=a.bA+1|0;a.bA=c;FU(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RV;c=a.bA+1|0;a.bA=c;FU(h,c);break a;case -33554392:h=new Vi;c=a.bA+1|0;a.bA=c;FU(h,c);break a;default:c=a.gU+1|0;a.gU=c;if(d!==null)h=AZW(c);else{h=new F4;FU(h,0);g=1;}c=a.gU;if(c<=(-1))break a;if(c>=10)break a;a.lE.data[c]=h;break a;}h=new AAI;FU(h,(-1));}while(true){if(Fy(a.h)&&a.h.k==(-536870788))
{d=AVU(Ck(a,2),Ck(a,64));while(!Do(a.h)&&Fy(a.h)){i=a.h;j=i.k;if(j&&j!=(-536870788)&&j!=(-536870871))break;CB(d,Bk(i));i=a.h;if(i.bj!=(-536870788))continue;Bk(i);}i=LG(a,d);i.T(h);}else if(a.h.bj==(-536870788)){i=Hi(h);Bk(a.h);}else{i=Q7(a,h);d=a.h;if(d.bj==(-536870788))Bk(d);}if(i!==null)BF(e,i);if(Do(a.h))break;if(a.h.bj==(-536870871))break;}if(a.h.l8==(-536870788))BF(e,Hi(h));if(a.dI!=f&&!g){a.dI=f;d=a.h;d.gG=f;d.k=d.bj;d.e5=d.fn;j=d.dm;d.w=j+1|0;d.hX=j;FE(d);}switch(b){case -1073741784:break;case -536870872:d
=new NZ;F5(d,e,h);return d;case -268435416:d=new YQ;F5(d,e,h);return d;case -134217688:d=new Tw;F5(d,e,h);return d;case -67108824:d=new VV;F5(d,e,h);return d;case -33554392:d=new D2;F5(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AZE(Bt(e,0),h);default:return AZd(e,h);}return Hi(h);}d=new JK;F5(d,e,h);return d;}
function AGv(a){var b,c,d,e,f,g,h;b=BD(4);c=(-1);d=(-1);if(!Do(a.h)&&Fy(a.h)){e=b.data;c=Bk(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.h;g=f.bj;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.h;g=f.bj;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return AVy(e,3);}return AVy(e,2);}if(!Ck(a,2))return ADn(b[0]);if(Ck(a,64))return ATc(b[0]);return AK1(b[0]);}e=b.data;c=1;while(c<4&&!Do(a.h)&&Fy(a.h)){h=c+1|0;e[c]=Bk(a.h);c=h;}if(c==1){h=e[0];if(!(A35.BT(h)==A36?0:1))return AAB(a,e[0]);}if
(!Ck(a,2))return A0x(b,c);if(Ck(a,64)){f=new AAn;PZ(f,b,c);return f;}f=new Wc;PZ(f,b,c);return f;}
function Q7(a,b){var c,d,e,f,g,h,i;if(Fy(a.h)&&!KE(a.h)&&Lf(a.h.k)){if(Ck(a,128)){c=AGv(a);if(!Do(a.h)){d=a.h;e=d.bj;if(!(e==(-536870871)&&!(b instanceof F4))&&e!=(-536870788)&&!Fy(d))c=Nh(a,b,c);}}else if(!P8(a.h)&&!XD(a.h)){f=new P_;N(f);while(!Do(a.h)&&Fy(a.h)&&!P8(a.h)&&!XD(a.h)){if(!(!KE(a.h)&&!a.h.k)&&!(!KE(a.h)&&Lf(a.h.k))){g=a.h.k;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.h);if(!Nb(e))BL(f,e&65535);else I6(f,GZ(e));}if(!Ck(a,2)){c=new TX;DG(c);c.cC
=M(f);e=f.K;c.bO=e;c.lY=ARq(e);c.mU=ARq(c.bO);h=0;while(h<(c.bO-1|0)){TA(c.lY,P(c.cC,h),(c.bO-h|0)-1|0);TA(c.mU,P(c.cC,(c.bO-h|0)-1|0),(c.bO-h|0)-1|0);h=h+1|0;}}else if(Ck(a,64))c=A0w(f);else{c=new OH;DG(c);c.h0=M(f);c.bO=f.K;}}else c=Nh(a,b,AAm(a,b));}else{d=a.h;if(d.bj!=(-536870871))c=Nh(a,b,AAm(a,b));else{if(b instanceof F4)K(Ch(C(21),d.bQ,P7(d)));c=Hi(b);}}a:{if(!Do(a.h)){e=a.h.bj;if(!(e==(-536870871)&&!(b instanceof F4))&&e!=(-536870788)){f=Q7(a,b);if(c instanceof C7&&!(c instanceof FG)&&!(c instanceof CV)
&&!(c instanceof EZ)){i=c;if(!f.b0(i.M)){c=new Y3;Fk(c,i.M,i.e,i.ip);c.M.T(c);}}if((f.iw()&65535)!=43)c.T(f);else c.T(f.M);break a;}}if(c===null)return null;c.T(b);}if((c.iw()&65535)!=43)return c;return c.M;}
function Nh(a,b,c){var d,e,f,g,h;d=a.h;e=d.bj;if(c!==null&&!(c instanceof Ca)){switch(e){case -2147483606:Bk(d);d=new ABw;Dl(d,c,b,e);Nl();c.T(A37);return d;case -2147483605:Bk(d);d=new RM;Dl(d,c,b,(-2147483606));Nl();c.T(A37);return d;case -2147483585:Bk(d);d=new Rp;Dl(d,c,b,(-536870849));Nl();c.T(A37);return d;case -2147483525:f=new OA;d=FK(d);g=a.fc+1|0;a.fc=g;J0(f,d,c,b,(-536870849),g);Nl();c.T(A37);return f;case -1073741782:case -1073741781:Bk(d);d=new TU;Dl(d,c,b,e);c.T(d);return d;case -1073741761:Bk(d);d
=new SQ;Dl(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new Xc;d=FK(d);e=a.fc+1|0;a.fc=e;J0(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bk(d);if(c.iw()!=(-2147483602)){d=new CV;Dl(d,c,b,e);}else if(Ck(a,32)){d=new TV;Dl(d,c,b,e);}else{d=new Qk;f=Rr(a.dI);Dl(d,c,b,e);d.l7=f;}c.T(d);return d;case -536870849:Bk(d);d=new Gm;Dl(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new FN;d=FK(d);e=a.fc+1|0;a.fc=e;J0(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new ABx;Fk(d,f,b,e);f.e=d;return d;case -2147483585:Bk(d);c=new YZ;Fk(c,f,b,(-2147483585));return c;case -2147483525:c=new Q6;Us(c,FK(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new SK;Fk(d,f,b,e);f.e=d;return d;case -1073741761:Bk(d);c=new Wr;Fk(c,f,b,(-1073741761));return c;case -1073741701:c=new Tx;Us(c,FK(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=AZJ(f,b,e);f.e=d;return d;case -536870849:Bk(d);c
=new EZ;Fk(c,f,b,(-536870849));return c;case -536870789:return AYL(FK(d),f,b,(-536870789));default:}return c;}
function AAm(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F4;while(true){a:{e=a.h;f=e.bj;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dI=g;else{if(f!=(-1073741784))g=a.dI;c=AAR(a,f,g,b);e=a.h;if(e.bj!=(-536870871))K(Ch(C(21),e.bQ,e.dm));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=AVi(0);break a;case -2147483577:Bk(e);c=new Qf;B2(c);break a;case -2147483558:Bk(e);c=new ZZ;h=a.bA+1|0;a.bA=h;AGV(c,h);break a;case -2147483550:Bk(e);c=AVi(1);break a;case -2147483526:Bk(e);c=new Zo;B2(c);break a;case -536870876:Bk(e);a.bA=a.bA+1|0;if(Ck(a,8)){if(Ck(a,1)){c=AY1(a.bA);break a;}c=AYk(a.bA);break a;}if(Ck(a,1)){c=AZj(a.bA);break a;}c=AZ0(a.bA);break a;case -536870866:Bk(e);if(Ck(a,32)){c=A0j();break a;}c=AZR(Rr(a.dI));break a;case -536870821:Bk(e);i=0;c=a.h;if(c.bj==(-536870818)){i=1;Bk(c);}c
=LG(a,GC(a,i));c.T(b);e=a.h;if(e.bj!=(-536870819))K(Ch(C(21),e.bQ,e.dm));QL(e,1);Bk(a.h);break a;case -536870818:Bk(e);a.bA=a.bA+1|0;if(!Ck(a,8)){c=new Ll;B2(c);break a;}c=new OS;e=Rr(a.dI);B2(c);c.t7=e;break a;case 0:j=e.fn;if(j!==null)c=LG(a,j);else{if(Do(e)){c=Hi(b);break a;}c=ADn(f&65535);}Bk(a.h);break a;default:break b;}Bk(e);c=new Ll;B2(c);break a;}h=(f&2147483647)-48|0;if(a.gU<h)K(Ch(C(21),FR(e),P7(a.h)));Bk(e);a.bA=a.bA+1|0;c=!Ck(a,2)?AYp(h,a.bA):Ck(a,64)?AY2(h,a.bA):A0r(h,a.bA);a.lE.data[h].lx=1;a.p2
=1;break a;}if(f>=0&&!Hl(e)){c=AAB(a,f);Bk(a.h);}else if(f==(-536870788))c=Hi(b);else{if(f!=(-536870871)){b=new Jt;c=!Hl(a.h)?ZT(f&65535):a.h.fn.cM();e=a.h;Kc(b,c,e.bQ,e.dm);K(b);}if(d){b=new Jt;e=a.h;Kc(b,C(21),e.bQ,e.dm);K(b);}c=Hi(b);}}}if(f!=(-16777176))break;}return c;}
function GC(a,b){var c,d,e,f,g,h,i,j,$$je;c=AVU(Ck(a,2),Ck(a,64));ER(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Do(a.h))break a;h=a.h;b=h.bj;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CB(c,d);d=Bk(a.h);h=a.h;if(h.bj!=(-536870874)){d=38;break d;}if(h.k==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=GC(a,0);break d;}if(a.h.bj==(-536870819))break d;Zy(c,GC(a,0));break d;case -536870867:if(!g){b=h.k;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.h;i=h.bj;if(Hl(h))break c;if
(i<0){j=a.h.k;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Lf(i))break e;i=i&65535;break e;}catch($$e){$$je=EE($$e);if($$je instanceof El){break b;}else{throw $$e;}}}try{B$(c,d,i);}catch($$e){$$je=EE($$e);if($$je instanceof El){break b;}else{throw $$e;}}Bk(a.h);d=(-1);break d;}}if(d>=0)CB(c,d);d=45;Bk(a.h);break d;case -536870821:if(d>=0){CB(c,d);d=(-1);}Bk(a.h);j=0;h=a.h;if(h.bj==(-536870818)){Bk(h);j=1;}if(!e)ABI(c,GC(a,j));else Zy(c,GC(a,j));e=0;Bk(a.h);break d;case -536870819:if(d>=0)CB(c,
d);d=93;Bk(a.h);break d;case -536870818:if(d>=0)CB(c,d);d=94;Bk(a.h);break d;case 0:if(d>=0)CB(c,d);h=a.h.fn;if(h===null)d=0;else{AH9(c,h);d=(-1);}Bk(a.h);break d;default:}if(d>=0)CB(c,d);d=Bk(a.h);}g=0;}K(Ch(C(21),KQ(a),a.h.dm));}K(Ch(C(21),KQ(a),a.h.dm));}if(!f){if(d>=0)CB(c,d);return c;}K(Ch(C(21),KQ(a),a.h.dm-1|0));}
function AAB(a,b){var c,d,e;c=Nb(b);if(Ck(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AK1(b&65535);}if(Ck(a,64)&&b>128){if(c){d=new NO;DG(d);d.bO=2;d.tv=G9(G6(b));return d;}if(QW(b))return ARA(b&65535);if(!U0(b))return ATc(b&65535);return AOv(b&65535);}}if(!c){if(QW(b))return ARA(b&65535);if(!U0(b))return ADn(b&65535);return AOv(b&65535);}d=new D_;DG(d);d.bO=2;d.gm=b;e=(GZ(b)).data;d.kT=e[0];d.jt=e[1];return d;}
function LG(a,b){var c,d,e;if(!AE$(b)){if(!b.Q){if(b.hE())return AN1(b);return AVj(b);}if(!b.hE())return APg(b);c=new J2;WJ(c,b);return c;}c=ACe(b);d=new N$;B2(d);d.r6=c;d.zv=c.bi;if(!b.Q){if(b.hE())return AFP(AN1(H_(b)),d);return AFP(AVj(H_(b)),d);}if(!b.hE())return AFP(APg(H_(b)),d);c=new SF;e=new J2;WJ(e,H_(b));AHQ(c,e,d);return c;}
function Id(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ck(a,b){return (a.dI&b)!=b?0:1;}
function Uv(){B.call(this);this.tj=null;}
function AQC(a,b){b.g5=a.tj.c5;}
function Uu(){B.call(this);this.wT=null;}
function AS5(a,b){b.gR=a.wT.c5.cj;}
function Xa(){E5.call(this);this.tR=null;}
function P2(a){var b;b=new WZ;LQ(b,a.tR);return b;}
function Rj(){Ff.call(this);this.yM=null;}
function Qi(){B.call(this);this.qs=null;}
function ALD(a,b){b.g5=a.qs;}
function N9(){var a=this;B.call(a);a.dr=null;a.t2=null;a.s8=null;}
function N_(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.dr);switch(b){case 3:break;case 5:c=P0(a);d=MD(a);b=Bb(a.dr);e=Bb(a.dr);f=Bb(a.dr);g=BI();h=0;while(h<f){BF(g,MD(a));h=h+1|0;}i=new M_;AF5(i,c,d,b);i.kO=g;i.oF=e;break a;default:c=new CT;d=new L;N(d);U(H(d,C(457)),b);Bm(c,M(d));K(c);}i=AZN(P0(a),MD(a),Bb(a.dr));}return i;}
function P0(a){var b,c;b=Bb(a.dr);c=Bb(a.dr);return ANz(Ev(a.t2,b,c),Bb(a.dr));}
function MD(a){var b;b=Bb(a.dr);if(b==(-1))return null;return Bt(a.s8,b);}
function Ts(){var a=this;B.call(a);a.d5=null;a.w7=null;a.xD=null;}
function Gx(a){var b,c,d,e,f;a:{b:{b=Bb(a.d5);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=OX(a);d=R2(a);b=Bb(a.d5);e=UU(a);f=new Jo;Ma(f,c,d,2);f.pa=b;f.hk=e;break a;case 4:c=Gx(a);d=Gx(a);f=new JO;Ma(f,c.fp,c.fZ,9);f.is=c;f.hn=d;break a;case 5:f=AYC(OX(a),R2(a),Bb(a.d5));break a;case 9:c=UU(a);f=new GN;d=!Ey(c)&&Bt(c,0)!==null?(Bt(c,0)).fZ:null;Ma(f,null,null,7);f.g7=BI();c=B5(c);while(B6(c)){e=B9(c);if(!(e instanceof GN))BF(f.g7,e);else{e=e;Hf(f.g7,e.g7);}}f.fZ=d;break a;default:break b;}f
=null;break a;}c=new CT;d=new L;N(d);U(H(d,C(458)),b);Bm(c,M(d));K(c);}return f;}
function OX(a){var b,c;b=Bb(a.d5);c=Bb(a.d5);return ANz(Ev(a.w7,b,c),Bb(a.d5));}
function R2(a){var b;b=Bb(a.d5);if(b==(-1))return null;return Bt(a.xD,b);}
function UU(a){var b,c,d;b=Bb(a.d5);c=BI();d=0;while(d<b){BF(c,Gx(a));d=d+1|0;}return c;}
var Hb=G(0);
function V2(){B.call(this);this.tr=null;}
function AQT(a,b,c,d){Kw(a.tr,b,c.bt,d.bt);}
function V3(){B.call(this);this.pn=null;}
function AN7(a,b,c,d){Kw(a.pn,b,c.bt,d.bt);}
function IM(){B.call(this);this.oc=0;}
var A38=null;var A39=null;var A3$=null;function ASA(a){var b=new IM();AFT(b,a);return b;}
function AFT(a,b){a.oc=b;}
function QT(b){return !b?A39:A38;}
function ACv(){A38=ASA(1);A39=ASA(0);A3$=F($rt_booleancls());}
var KA=G(0);
var T7=G();
var QF=G(0);
var AEP=G();
function UD(){B.call(this);this.wW=null;}
function ARG(a,b,c,d){IT(a.wW,b,c.bt,d.bt);}
var UC=G();
function AWy(a,b){return b.ee.dt>=0?0:1;}
var UB=G();
function ATb(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fp;if(b===null)break b;if(b.dt>=0)break b;}c=1;break a;}c=0;}return c;}
function UE(){B.call(this);this.v1=null;}
function AQ8(a,b,c,d){IT(a.v1,b,c.bt,d.bt);}
var Gs=G(CA);
var A3Y=null;var A3X=null;var A3_=null;function U2(){U2=Bs(Gs);AXH();}
function AUe(a,b){var c=new Gs();AEk(c,a,b);return c;}
function AEk(a,b,c){U2();Dy(a,b,c);}
function AXH(){var b;A3Y=AUe(C(459),0);b=AUe(C(460),1);A3X=b;A3_=I(Gs,[A3Y,b]);}
function ABs(){B.call(this);this.sf=null;}
function AM6(a,b){Dw(a.sf,b);}
function BN(){var a=this;B.call(a);a.e=null;a.co=0;a.rm=null;a.ip=0;}
var A08=0;function B2(a){var b;b=A08;A08=b+1|0;a.rm=Mh(b);}
function LE(a,b){var c;c=A08;A08=c+1|0;a.rm=Mh(c);a.e=b;}
function Ii(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Iw(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ALo(a,b){a.ip=b;}
function AKC(a){return a.ip;}
function AUw(a){return a.e;}
function AVF(a,b){a.e=b;}
function AVE(a,b){return 1;}
function AWJ(a){return null;}
function JU(a){var b;a.co=1;b=a.e;if(b!==null){if(!b.co){b=b.fU();if(b!==null){a.e.co=1;a.e=b;}a.e.eI();}else if(b instanceof G1&&b.eP.lx)a.e=b.e;}}
function AH0(){A08=1;}
function OI(){var a=this;B.call(a);a.rU=null;a.rT=null;}
function ANY(a){var b,c;b=a.rU;c=a.rT;b.hq.wd(c);}
function ABi(){var a=this;B.call(a);a.qn=null;a.ql=null;a.qk=0;a.qm=0;}
function ARN(a,b){b=b;Et(a.qn,a.ql,b,a.qk,a.qm);}
function ABj(){var a=this;B.call(a);a.y9=null;a.y8=null;a.y7=0;a.y6=0;}
function AM8(a,b){b=b;Et(a.y9,a.y8,b,a.y7,a.y6);}
function U9(){B.call(this);this.yc=null;}
function ATg(a,b){WK(G4(a.yc),b,A2x,AC9(C(461)));}
var V1=G();
var A3V=null;function AZF(){AZF=Bs(V1);AJx();}
function AJx(){var b,c;U2();b=BD((A3_.hh()).data.length);c=b.data;A3V=b;c[A3Y.fj]=1;c[A3X.fj]=2;}
function AAM(){B.call(this);this.oH=null;}
function AVS(a,b){var c,d;c=a.oH;d=b.ik;b=new L;N(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(M(b)));}
function CU(){var a=this;BN.call(a);a.lx=0;a.dP=0;}
var A37=null;function Nl(){Nl=Bs(CU);AMK();}
function AZW(a){var b=new CU();FU(b,a);return b;}
function FU(a,b){Nl();B2(a);a.dP=b;}
function AJS(a,b,c,d){var e,f;e=Jd(d,a.dP);Kz(d,a.dP,b);f=a.e.c(b,c,d);if(f<0)Kz(d,a.dP,e);return f;}
function AQq(a){return a.dP;}
function AKg(a,b){return 0;}
function AMK(){var b;b=new Qa;B2(b);A37=b;}
function He(){var a=this;B.call(a);a.bh=null;a.gG=0;a.e$=0;a.xz=0;a.l8=0;a.bj=0;a.k=0;a.uB=0;a.fn=null;a.e5=null;a.w=0;a.iM=0;a.dm=0;a.hX=0;a.bQ=null;}
var A4a=null;var A35=null;var A36=0;function QL(a,b){if(b>0&&b<3)a.e$=b;if(b==1){a.k=a.bj;a.e5=a.fn;a.w=a.hX;a.hX=a.dm;FE(a);}}
function Hl(a){return a.fn===null?0:1;}
function KE(a){return a.e5===null?0:1;}
function Bk(a){FE(a);return a.l8;}
function FK(a){var b;b=a.fn;FE(a);return b;}
function FE(a){var b,c,d,e,f,g,h,$$je;a.l8=a.bj;a.bj=a.k;a.fn=a.e5;a.dm=a.hX;a.hX=a.w;while(true){b=0;c=a.w>=a.bh.data.length?0:Mz(a);a.k=c;a.e5=null;if(a.e$==4){if(c!=92)return;c=a.w;d=a.bh.data;c=c>=d.length?0:d[B_(a)];a.k=c;switch(c){case 69:break;default:a.k=92;a.w=a.iM;return;}a.e$=a.xz;a.k=a.w>(a.bh.data.length-2|0)?0:Mz(a);}a:{c=a.k;if(c!=92){e=a.e$;if(e==1)switch(c){case 36:a.k=(-536870876);break a;case 40:if(a.bh.data[a.w]!=63){a.k=(-2147483608);break a;}B_(a);c=a.bh.data[a.w];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.k=(-134217688);B_(a);break b;default:K(Ch(C(21),FR(a),a.w));}a.k=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bh.data[a.w];e=1;break b;case 61:a.k=(-536870872);B_(a);break b;case 62:a.k=(-33554392);B_(a);break b;default:f=AH2(a);a.k=f;if(f<256){a.gG=f;f=f<<16;a.k=f;a.k=(-1073741784)|f;break b;}f=f&255;a.k=f;a.gG=f;f=f<<16;a.k=f;a.k=(-16777176)|f;break b;}a.k=(-268435416);B_(a);}}if(!e)break;}break a;case 41:a.k=(-536870871);break a;case 42:case 43:case 63:e
=a.w;d=a.bh.data;switch(e>=d.length?42:d[e]){case 43:a.k=c|(-2147483648);B_(a);break a;case 63:a.k=c|(-1073741824);B_(a);break a;default:}a.k=c|(-536870912);break a;case 46:a.k=(-536870866);break a;case 91:a.k=(-536870821);QL(a,2);break a;case 93:if(e!=2)break a;a.k=(-536870819);break a;case 94:a.k=(-536870818);break a;case 123:a.e5=AHi(a,c);break a;case 124:a.k=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.k=(-536870874);break a;case 45:a.k=(-536870867);break a;case 91:a.k=(-536870821);break a;case 93:a.k
=(-536870819);break a;case 94:a.k=(-536870818);break a;default:}}else{c=a.w>=(a.bh.data.length-2|0)?(-1):Mz(a);c:{a.k=c;switch(c){case -1:K(Ch(C(21),FR(a),a.w));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.k
=AFD(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.e$!=1)break a;a.k=(-2147483648)|c;break a;case 65:a.k=(-2147483583);break a;case 66:a.k=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Ch(C(21),FR(a),a.w));case 68:case 83:case 87:case 100:case 115:case 119:a.e5=Uj(Ev(a.bh,
a.iM,1),0);a.k=0;break a;case 71:a.k=(-2147483577);break a;case 80:case 112:break c;case 81:a.xz=a.e$;a.e$=4;b=1;break a;case 90:a.k=(-2147483558);break a;case 97:a.k=7;break a;case 98:a.k=(-2147483550);break a;case 99:c=a.w;d=a.bh.data;if(c>=(d.length-2|0))K(Ch(C(21),FR(a),a.w));a.k=d[B_(a)]&31;break a;case 101:a.k=27;break a;case 102:a.k=12;break a;case 110:a.k=10;break a;case 114:a.k=13;break a;case 116:a.k=9;break a;case 117:a.k=RO(a,4);break a;case 120:a.k=RO(a,2);break a;case 122:a.k=(-2147483526);break a;default:}break a;}g
=AFk(a);h=0;if(a.k==80)h=1;try{a.e5=Uj(g,h);}catch($$e){$$je=EE($$e);if($$je instanceof J5){K(Ch(C(21),FR(a),a.w));}else{throw $$e;}}a.k=0;}}if(b)continue;else break;}}
function AFk(a){var b,c,d,e,f,g;b=new L;Gy(b,10);c=a.w;d=a.bh;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ev(d,B_(a),1);f=new L;N(f);H(H(f,C(462)),b);return M(f);}B_(a);c=0;a:{while(true){g=a.w;d=a.bh.data;if(g>=(d.length-2|0))break;c=d[B_(a)];if(c==125)break a;BL(b,c);}}if(c!=125)K(Ch(C(21),a.bQ,a.w));}if(!b.K)K(Ch(C(21),a.bQ,a.w));f=M(b);if(J(f)==1){b=new L;N(b);H(H(b,C(462)),f);return M(b);}b:{c:{if(J(f)>3){if(Lu(f,C(462)))break c;if(Lu(f,C(463)))break c;}break b;}f=Ee(f,2);}return f;}
function AHi(a,b){var c,d,e,f,g,$$je;c=new L;Gy(c,4);d=(-1);e=2147483647;a:{while(true){f=a.w;g=a.bh.data;if(f>=g.length)break a;b=g[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ks(D9(c),10);AHr(c,0,ACw(c));continue;}catch($$e){$$je=EE($$e);if($$je instanceof Dm){break;}else{throw $$e;}}BL(c,b&65535);}K(Ch(C(21),a.bQ,a.w));}if(b!=125)K(Ch(C(21),a.bQ,a.w));if(c.K>0)b:{try{e=Ks(D9(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EE($$e);if($$je instanceof Dm){}else{throw $$e;}}K(Ch(C(21),a.bQ,a.w));}else if
(d<0)K(Ch(C(21),a.bQ,a.w));if((d|e|(e-d|0))<0)K(Ch(C(21),a.bQ,a.w));b=a.w;g=a.bh.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.k=(-2147483525);B_(a);break c;case 63:a.k=(-1073741701);B_(a);break c;default:}a.k=(-536870789);}c=new Om;c.e9=d;c.e4=e;return c;}
function FR(a){return a.bQ;}
function Do(a){return !a.bj&&!a.k&&a.w==a.uB&&!Hl(a)?1:0;}
function Lf(b){return b<0?0:1;}
function Fy(a){return !Do(a)&&!Hl(a)&&Lf(a.bj)?1:0;}
function P8(a){var b;b=a.bj;return b<=56319&&b>=55296?1:0;}
function XD(a){var b;b=a.bj;return b<=57343&&b>=56320?1:0;}
function U0(b){return b<=56319&&b>=55296?1:0;}
function QW(b){return b<=57343&&b>=56320?1:0;}
function RO(a,b){var c,d,e,f,$$je;c=new L;Gy(c,b);d=a.bh.data.length-2|0;e=0;while(true){f=BH(e,b);if(f>=0)break;if(a.w>=d)break;BL(c,a.bh.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=Ks(D9(c),16);}catch($$e){$$je=EE($$e);if($$je instanceof Dm){break a;}else{throw $$e;}}return b;}K(Ch(C(21),a.bQ,a.w));}
function AFD(a){var b,c,d,e,f,g;b=3;c=1;d=a.bh.data;e=d.length-2|0;f=W7(d[a.w],8);switch(f){case -1:break;default:if(f>3)b=2;B_(a);a:{while(true){if(c>=b)break a;g=a.w;if(g>=e)break a;g=W7(a.bh.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B_(a);c=c+1|0;}}return f;}K(Ch(C(21),a.bQ,a.w));}
function AH2(a){var b,c,d,e;b=1;c=a.gG;a:while(true){d=a.w;e=a.bh.data;if(d>=e.length)K(Ch(C(21),a.bQ,d));b:{c:{switch(e[d]){case 41:B_(a);return c|256;case 45:if(!b)K(Ch(C(21),a.bQ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c,d,e,f;b=a.w;a.iM=b;if(!(a.gG&4))a.w=b+1|0;else{c=a.bh.data.length-2|0;a.w=b+1|0;a:while(true){d=a.w;if(d<c&&Tt(a.bh.data[d])){a.w=a.w+1|0;continue;}d=a.w;if(d>=c)break;e=a.bh.data;if(e[d]!=35)break;a.w=d+1|0;while(true){f=a.w;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.w=f+1|0;}}}return a.iM;}
function AG5(b){return A4a.HT(b);}
function Mz(a){var b,c,d,e;b=a.bh.data[B_(a)];if(CK(b)){c=a.iM+1|0;d=a.bh.data;if(c<d.length){e=d[c];if(C$(e)){B_(a);return ES(b,e);}}}return b;}
function P7(a){return a.dm;}
function Jt(){var a=this;BP.call(a);a.By=null;a.A3=null;a.tb=0;}
function Ch(a,b,c){var d=new Jt();Kc(d,a,b,c);return d;}
function Kc(a,b,c,d){Z(a);a.tb=(-1);a.By=b;a.A3=c;a.tb=d;}
function PY(){var a=this;B.call(a);a.yQ=null;a.yR=0.0;}
function AI8(a){var b,c;b=a.yQ;c=a.yR;b.hq.mY(c);}
function Z3(){B.call(this);this.xh=null;}
function ASD(a,b){var c,d;c=a.xh;d=0;while(d<b.length){ACq(c,b[d]);d=d+1|0;}}
var AFe=G(0);
function WC(){var a=this;B.call(a);a.sh=null;a.sj=null;a.sk=null;}
function ASd(a,b){a.sh.g(AYl(a.sj,b,a.sk));}
var T3=G(CU);
function AJb(a,b,c,d){var e;e=a.dP;BT(d,e,b-Ds(d,e)|0);return a.e.c(b,c,d);}
function AT0(a,b){return 0;}
var AAI=G(CU);
function ALl(a,b,c,d){return b;}
var RV=G(CU);
function AKx(a,b,c,d){if(Ds(d,a.dP)!=b)b=(-1);return b;}
function Vi(){CU.call(this);this.pI=0;}
function AJi(a,b,c,d){var e;e=a.dP;BT(d,e,b-Ds(d,e)|0);a.pI=b;return b;}
function ASn(a,b){return 0;}
var F4=G(CU);
function AV3(a,b,c,d){if(d.ku!=1&&b!=d.x)return (-1);d.jV=1;Kz(d,0,b);return b;}
function Ca(){BN.call(this);this.bO=0;}
function DG(a){B2(a);a.bO=1;}
function AXx(a,b,c,d){var e;if((b+a.b6()|0)>d.x){d.dB=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AU3(a){return a.bO;}
function AOU(a,b){return 1;}
var AGU=G(Ca);
function Hi(a){var b=new AGU();AQE(b,a);return b;}
function AQE(a,b){LE(a,b);a.bO=1;a.ip=1;a.bO=0;}
function AUp(a,b,c){return 0;}
function AMP(a,b,c,d){var e,f,g;e=d.x;f=d.cW;while(true){g=BH(b,e);if(g>0)return (-1);if(g<0&&C$(P(c,b))&&b>f&&CK(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function ALd(a,b,c,d,e){var f,g;f=e.x;g=e.cW;while(true){if(c<b)return (-1);if(c<f&&C$(P(d,c))&&c>g&&CK(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJg(a,b){return 0;}
function B8(){var a=this;BN.call(a);a.bK=null;a.eP=null;a.bd=0;}
function AZd(a,b){var c=new B8();F5(c,a,b);return c;}
function F5(a,b,c){B2(a);a.bK=b;a.eP=c;a.bd=c.dP;}
function ANF(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=F9(d,a.bd);DF(d,a.bd,b);f=a.bK.j;g=0;while(true){if(g>=f){DF(d,a.bd,e);return (-1);}h=(Bt(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ASf(a,b){a.eP.e=b;}
function APO(a,b){var c;a:{c=a.bK;if(c!==null){c=B5(c);while(true){if(!B6(c))break a;if(!(B9(c)).b0(b))continue;else return 1;}}}return 0;}
function AS3(a,b){return Jd(b,a.bd)>=0&&F9(b,a.bd)==Jd(b,a.bd)?0:1;}
function AK9(a){var b,c,d,e;a.co=1;b=a.eP;if(b!==null&&!b.co)JU(b);a:{b=a.bK;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Bt(a.bK,d);e=b.fU();if(e===null)e=b;else{b.co=1;EN(a.bK,d);TT(a.bK,d,e);}if(!e.co)e.eI();d=d+1|0;}}}if(a.e!==null)JU(a);}
var JK=G(B8);
function ARZ(a,b,c,d){var e,f,g,h;e=Ds(d,a.bd);BT(d,a.bd,b);f=a.bK.j;g=0;while(true){if(g>=f){BT(d,a.bd,e);return (-1);}h=(Bt(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATq(a,b){return !Ds(b,a.bd)?0:1;}
var D2=G(JK);
function ALS(a,b,c,d){var e,f,g;e=Ds(d,a.bd);BT(d,a.bd,b);f=a.bK.j;g=0;while(g<f){if((Bt(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.eP.pI,c,d);g=g+1|0;}BT(d,a.bd,e);return (-1);}
function AS_(a,b){a.e=b;}
var NZ=G(D2);
function ASa(a,b,c,d){var e,f;e=a.bK.j;f=0;while(f<e){if((Bt(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AVL(a,b){return 0;}
var YQ=G(D2);
function AJ$(a,b,c,d){var e,f;e=a.bK.j;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bt(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AU$(a,b){return 0;}
var Tw=G(D2);
function AK4(a,b,c,d){var e,f,g,h;e=a.bK.j;f=d.j2?0:d.cW;a:{g=a.e.c(b,c,d);if(g>=0){BT(d,a.bd,b);h=0;while(true){if(h>=e)break a;if((Bt(a.bK,h)).cw(f,b,c,d)>=0){BT(d,a.bd,(-1));return g;}h=h+1|0;}}}return (-1);}
function AXZ(a,b){return 0;}
var VV=G(D2);
function AIK(a,b,c,d){var e,f;e=a.bK.j;BT(d,a.bd,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bt(a.bK,f)).cw(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ATK(a,b){return 0;}
function G1(){B8.call(this);this.c8=null;}
function AZE(a,b){var c=new G1();ADe(c,a,b);return c;}
function ADe(a,b,c){B2(a);a.c8=b;a.eP=c;a.bd=c.dP;}
function AI4(a,b,c,d){var e,f;e=F9(d,a.bd);DF(d,a.bd,b);f=a.c8.c(b,c,d);if(f>=0)return f;DF(d,a.bd,e);return (-1);}
function AP_(a,b,c,d){var e;e=a.c8.cs(b,c,d);if(e>=0)DF(d,a.bd,e);return e;}
function AT4(a,b,c,d,e){var f;f=a.c8.cw(b,c,d,e);if(f>=0)DF(e,a.bd,f);return f;}
function APH(a,b){return a.c8.b0(b);}
function ASi(a){var b;b=new Ot;ADe(b,a.c8,a.eP);a.e=b;return b;}
function AWO(a){var b;a.co=1;b=a.eP;if(b!==null&&!b.co)JU(b);b=a.c8;if(b!==null&&!b.co){b=b.fU();if(b!==null){a.c8.co=1;a.c8=b;}a.c8.eI();}}
var Hh=G();
function Y(){var a=this;Hh.call(a);a.bi=0;a.cn=0;a.O=null;a.kC=null;a.lp=null;a.Q=0;}
var A4b=null;function QJ(){QJ=Bs(Y);ALA();}
function By(a){var b;QJ();b=new ZS;b.D=BD(64);a.O=b;}
function AKc(a){return null;}
function AJC(a){return a.O;}
function AE$(a){var b,c,d,e,f;if(!a.cn)b=HP(a.O,0)>=2048?0:1;else{a:{c=a.O;b=0;d=c.bv;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=I3(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I3(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function ANZ(a){return a.Q;}
function AUU(a){return a;}
function ACe(a){var b,c;if(a.lp===null){b=a.fk();c=new Y2;c.B2=a;c.p$=b;By(c);a.lp=c;ER(c,a.cn);}return a.lp;}
function H_(a){var b,c;if(a.kC===null){b=a.fk();c=new Y1;c.BB=a;c.wU=b;c.xK=a;By(c);a.kC=c;ER(c,a.bi);a.kC.Q=a.Q;}return a.kC;}
function AWG(a){return 0;}
function ER(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cn=a.cn?0:1;}if(!a.Q)a.Q=1;return a;}
function AMW(a){return a.bi;}
function K_(b,c){QJ();return b.m(c);}
function I2(b,c){var d,e;QJ();if(b.dx()!==null&&c.dx()!==null){b=b.dx();c=c.dx();d=Bc(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Uj(b,c){var d,e,f;QJ();d=0;while(true){ATI();e=A4c.data;if(d>=e.length){f=new J5;Bm(f,C(21));f.Cn=C(21);f.B6=b;K(f);}e=e[d].data;if(Bp(b,e[0]))break;d=d+1|0;}return AGm(e[1],c);}
function ALA(){var b;b=new HD;ATI();A4b=b;}
function AC2(){var a=this;Y.call(a);a.m4=0;a.pF=0;a.gV=0;a.my=0;a.d7=0;a.fP=0;a.I=null;a.bH=null;}
function Dt(){var a=new AC2();AXL(a);return a;}
function AVU(a,b){var c=new AC2();ALn(c,a,b);return c;}
function AXL(a){By(a);a.I=AX2();}
function ALn(a,b,c){By(a);a.I=AX2();a.m4=b;a.pF=c;}
function CB(a,b){a:{if(a.m4){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.d7){Nx(a.I,Id(b&65535));break a;}Mr(a.I,Id(b&65535));break a;}if(a.pF&&b>128){a.gV=1;b=G9(G6(b));}}}if(!(!U0(b)&&!QW(b))){if(a.my)Nx(a.O,b-55296|0);else Mr(a.O,b-55296|0);}if(a.d7)Nx(a.I,b);else Mr(a.I,b);if(!a.Q&&Nb(b))a.Q=1;return a;}
function AH9(a,b){var c,d,e;if(!a.Q&&b.Q)a.Q=1;if(a.my){if(!b.cn)Go(a.O,b.fk());else Dh(a.O,b.fk());}else if(!b.cn)Gj(a.O,b.fk());else{FW(a.O,b.fk());Dh(a.O,b.fk());a.cn=a.cn?0:1;a.my=1;}if(!a.fP&&b.dx()!==null){if(a.d7){if(!b.bi)Go(a.I,b.dx());else Dh(a.I,b.dx());}else if(!b.bi)Gj(a.I,b.dx());else{FW(a.I,b.dx());Dh(a.I,b.dx());a.bi=a.bi?0:1;a.d7=1;}}else{c=a.bi;d=a.bH;if(d!==null){if(!c){e=new QB;e.zZ=a;e.yi=c;e.xt=d;e.xe=b;By(e);a.bH=e;}else{e=new QC;e.Cw=a;e.tZ=c;e.tB=d;e.sM=b;By(e);a.bH=e;}}else{if(c&&!a.d7
&&Ne(a.I)){d=new Qy;d.A2=a;d.tO=b;By(d);a.bH=d;}else if(!c){d=new Qw;d.md=a;d.k6=c;d.q8=b;By(d);a.bH=d;}else{d=new Qx;d.ng=a;d.lc=c;d.xk=b;By(d);a.bH=d;}a.fP=1;}}return a;}
function B$(a,b,c){var d,e,f,g,h;if(b>c){d=new BP;Z(d);K(d);}a:{b:{if(!a.m4){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CB(a,b);b=b+1|0;}}if(!a.d7)ID(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BG;Z(d);K(d);}e=d.bv;if(b<e){f=Bc(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(IV(d,b)|Ir(d,f));}else{h=d.D.data;h[g]=h[g]&IV(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&Ir(d,f);}}HG(d);}}}}return a;}
function ABI(a,b){var c,d,e;if(!a.Q&&b.Q)a.Q=1;if(b.gV)a.gV=1;c=a.cn;if(!(c^b.cn)){if(!c)Gj(a.O,b.O);else Dh(a.O,b.O);}else if(c)Go(a.O,b.O);else{FW(a.O,b.O);Dh(a.O,b.O);a.cn=1;}if(!a.fP&&CZ(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Gj(a.I,CZ(b));else Dh(a.I,CZ(b));}else if(c)Go(a.I,CZ(b));else{FW(a.I,CZ(b));Dh(a.I,CZ(b));a.bi=1;}}else{c=a.bi;d=a.bH;if(d!==null){if(!c){e=new Qo;e.zD=a;e.v_=c;e.xj=d;e.xZ=b;By(e);a.bH=e;}else{e=new Ra;e.z9=a;e.xU=c;e.o6=d;e.pQ=b;By(e);a.bH=e;}}else{if(!a.d7&&Ne(a.I)){if(!c){d=new Qz;d.Cy
=a;d.ss=b;By(d);a.bH=d;}else{d=new QA;d.Ab=a;d.xI=b;By(d);a.bH=d;}}else if(!c){d=new QD;d.wl=a;d.ue=b;d.tG=c;By(d);a.bH=d;}else{d=new QE;d.uD=a;d.uW=b;d.vd=c;By(d);a.bH=d;}a.fP=1;}}}
function Zy(a,b){var c,d,e;if(!a.Q&&b.Q)a.Q=1;if(b.gV)a.gV=1;c=a.cn;if(!(c^b.cn)){if(!c)Dh(a.O,b.O);else Gj(a.O,b.O);}else if(!c)Go(a.O,b.O);else{FW(a.O,b.O);Dh(a.O,b.O);a.cn=0;}if(!a.fP&&CZ(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dh(a.I,CZ(b));else Gj(a.I,CZ(b));}else if(!c)Go(a.I,CZ(b));else{FW(a.I,CZ(b));Dh(a.I,CZ(b));a.bi=0;}}else{c=a.bi;d=a.bH;if(d!==null){if(!c){e=new Qq;e.zY=a;e.wp=c;e.p8=d;e.tV=b;By(e);a.bH=e;}else{e=new Qr;e.Ah=a;e.vy=c;e.oS=d;e.v9=b;By(e);a.bH=e;}}else{if(!a.d7&&Ne(a.I)){if(!c){d=new Qm;d.Ac
=a;d.rO=b;By(d);a.bH=d;}else{d=new Qn;d.Ct=a;d.rZ=b;By(d);a.bH=d;}}else if(!c){d=new Qs;d.zi=a;d.yf=b;d.uL=c;By(d);a.bH=d;}else{d=new Ql;d.uJ=a;d.vI=b;d.t1=c;By(d);a.bH=d;}a.fP=1;}}}
function C5(a,b){var c;c=a.bH;if(c!==null)return a.bi^c.m(b);return a.bi^Dz(a.I,b);}
function CZ(a){if(!a.fP)return a.I;return null;}
function AMJ(a){return a.O;}
function AVs(a){var b,c;if(a.bH!==null)return a;b=CZ(a);c=new Qp;c.zw=a;c.jz=b;By(c);return ER(c,a.bi);}
function ARb(a){var b,c,d;b=new L;N(b);c=HP(a.I,0);while(c>=0){I6(b,GZ(c));BL(b,124);c=HP(a.I,c+1|0);}d=b.K;if(d>0)YR(b,d-1|0);return M(b);}
function AM0(a){return a.gV;}
function J5(){var a=this;Bu.call(a);a.Cn=null;a.B6=null;}
function Ek(){BN.call(this);this.M=null;}
function Dl(a,b,c,d){LE(a,c);a.M=b;a.ip=d;}
function AXK(a){return a.M;}
function AT5(a,b){return !a.M.b0(b)&&!a.e.b0(b)?0:1;}
function AVW(a,b){return 1;}
function AQA(a){var b;a.co=1;b=a.e;if(b!==null&&!b.co){b=b.fU();if(b!==null){a.e.co=1;a.e=b;}a.e.eI();}b=a.M;if(b!==null){if(!b.co){b=b.fU();if(b!==null){a.M.co=1;a.M=b;}a.M.eI();}else if(b instanceof G1&&b.eP.lx)a.M=b.e;}}
function C7(){Ek.call(this);this.be=null;}
function AZJ(a,b,c){var d=new C7();Fk(d,a,b,c);return d;}
function Fk(a,b,c,d){Dl(a,b,c,d);a.be=b;}
function AIM(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b6()|0)<=d.x){f=a.be.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.b6()|0;e=e+(-1)|0;}return f;}
function FG(){C7.call(this);this.kt=null;}
function AYL(a,b,c,d){var e=new FG();Us(e,a,b,c,d);return e;}
function Us(a,b,c,d,e){Fk(a,c,d,e);a.kt=b;}
function AJU(a,b,c,d){var e,f,g,h,i;e=a.kt;f=e.e9;g=e.e4;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b6()|0)>d.x)break a;i=a.be.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.b6()|0;h=h+(-1)|0;}return i;}if((b+a.be.b6()|0)>d.x){d.dB=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CV=G(Ek);
function AI3(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var EZ=G(C7);
function AQi(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AX4(a,b){a.e=b;a.M.T(b);}
var Y3=G(C7);
function AXm(a,b,c,d){while((b+a.be.b6()|0)<=d.x&&a.be.bz(b,c)>0){b=b+a.be.b6()|0;}return a.e.c(b,c,d);}
function AQ9(a,b,c,d){var e,f,g;e=a.e.cs(b,c,d);if(e<0)return (-1);f=e-a.be.b6()|0;while(f>=b&&a.be.bz(f,c)>0){g=f-a.be.b6()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.np=null;a.l$=null;}
function AGm(a,b){if(!b&&a.np===null)a.np=a.F();else if(b&&a.l$===null)a.l$=ER(a.F(),1);if(b)return a.l$;return a.np;}
var Dm=G(BP);
function Om(){var a=this;Hh.call(a);a.e9=0;a.e4=0;}
function ARg(a){var b,c,d,e,f;b=a.e9;c=a.e4;d=c!=2147483647?Mh(c):C(21);e=new L;N(e);BL(e,123);f=U(e,b);BL(f,44);BL(H(f,d),125);return M(e);}
var Qa=G(BN);
function APk(a,b,c,d){return b;}
function ASe(a,b){return 0;}
function ZS(){var a=this;B.call(a);a.D=null;a.bv=0;}
function AX2(){var a=new ZS();AKS(a);return a;}
function AKS(a){a.D=BD(0);}
function Mr(a,b){var c,d;c=b/32|0;if(b>=a.bv){I9(a,c+1|0);a.bv=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function ID(a,b,c){var d,e,f,g,h;d=BH(b,c);if(d>0){e=new BG;Z(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bv){I9(a,f+1|0);a.bv=c;}if(d==f){g=a.D.data;g[d]=g[d]|Ir(a,b)&IV(a,c);}else{g=a.D.data;g[d]=g[d]|Ir(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|IV(a,c);}}}
function Ir(a,b){return (-1)<<(b%32|0);}
function IV(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Nx(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bv-1|0))HG(a);}}
function Dz(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HP(a,b){var c,d,e,f;c=a.bv;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return I3(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I3(e[f])|0;f=f+1|0;}return (-1);}
function I9(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.D=JI(a.D,c);}
function HG(a){var b,c,d;b=(a.bv+31|0)/32|0;a.bv=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Pr(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bv=a.bv-32|0;}a.bv=a.bv-d|0;}}
function Dh(a,b){var c,d,e,f;c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bv=Bc(a.bv,b.bv);HG(a);}
function Go(a,b){var c,d,e;c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}HG(a);}
function Gj(a,b){var c,d,e;c=Be(a.bv,b.bv);a.bv=c;I9(a,(c+31|0)/32|0);c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function FW(a,b){var c,d,e;c=Be(a.bv,b.bv);a.bv=c;I9(a,(c+31|0)/32|0);c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}HG(a);}
function Ne(a){return a.bv?0:1;}
function N$(){var a=this;B8.call(a);a.r6=null;a.zv=0;}
function SF(){var a=this;B8.call(a);a.nP=null;a.ni=null;}
function AFP(a,b){var c=new SF();AHQ(c,a,b);return c;}
function AHQ(a,b,c){B2(a);a.nP=b;a.ni=c;}
function AJO(a,b,c,d){var e,f,g,h,i;e=a.nP.c(b,c,d);if(e<0)a:{f=a.ni;g=d.cW;e=d.x;h=b+1|0;e=BH(h,e);if(e>0){d.dB=1;e=(-1);}else{i=P(c,b);if(!f.r6.m(i))e=(-1);else{if(CK(i)){if(e<0&&C$(P(c,h))){e=(-1);break a;}}else if(C$(i)&&b>g&&CK(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ARX(a,b){a.e=b;a.ni.e=b;a.nP.T(b);}
function AKE(a,b){return 1;}
function AKa(a,b){return 1;}
function DL(){var a=this;B8.call(a);a.dU=null;a.AV=0;}
function APg(a){var b=new DL();WJ(b,a);return b;}
function WJ(a,b){B2(a);a.dU=b.ka();a.AV=b.bi;}
function AMy(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=P(c,b);if(a.m(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(HZ(g,f)&&a.m(ES(g,f)))return a.e.c(b,c,d);}}return (-1);}
function ANe(a,b){return a.dU.m(b);}
function AJI(a,b){if(b instanceof D_)return K_(a.dU,b.gm);if(b instanceof EM)return K_(a.dU,b.dv);if(b instanceof DL)return I2(a.dU,b.dU);if(!(b instanceof EA))return 1;return I2(a.dU,b.fB);}
function AO7(a){return a.dU;}
function AUI(a,b){a.e=b;}
function AMN(a,b){return 1;}
var J2=G(DL);
function AOV(a,b){return a.dU.m(G9(G6(b)));}
function ACO(){var a=this;Ca.call(a);a.s5=null;a.Ax=0;}
function AN1(a){var b=new ACO();ARr(b,a);return b;}
function ARr(a,b){DG(a);a.s5=b.ka();a.Ax=b.bi;}
function APl(a,b,c){return !a.s5.m(Fu(EY(P(c,b))))?(-1):1;}
function EA(){var a=this;Ca.call(a);a.fB=null;a.Bh=0;}
function AVj(a){var b=new EA();ASL(b,a);return b;}
function ASL(a,b){DG(a);a.fB=b.ka();a.Bh=b.bi;}
function NE(a,b,c){return !a.fB.m(P(c,b))?(-1):1;}
function ASh(a,b){if(b instanceof EM)return K_(a.fB,b.dv);if(b instanceof EA)return I2(a.fB,b.fB);if(!(b instanceof DL)){if(!(b instanceof D_))return 1;return 0;}return I2(a.fB,b.dU);}
function QK(){var a=this;B8.call(a);a.hi=null;a.nD=null;a.kr=0;}
function AVy(a,b){var c=new QK();AI5(c,a,b);return c;}
function AI5(a,b,c){B2(a);a.hi=b;a.kr=c;}
function AQg(a,b){a.e=b;}
function SR(a){if(a.nD===null)a.nD=FD(a.hi);return a.nD;}
function AIz(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BD(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DB([k,l]):DB([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kr;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.hi.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kr==3){k=f[0];m=a.hi.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kr==2){b=f[0];m=a.hi.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AKs(a,b){return b instanceof QK&&!Bp(SR(b),SR(a))?0:1;}
function AVw(a,b){return 1;}
function EM(){Ca.call(this);this.dv=0;}
function ADn(a){var b=new EM();ASR(b,a);return b;}
function ASR(a,b){DG(a);a.dv=b;}
function AO2(a){return 1;}
function ANV(a,b,c){return a.dv!=P(c,b)?(-1):1;}
function AMv(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Ii(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=I0(c,a.dv,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AO_(a,b,c,d,e){var f;if(!(d instanceof BC))return Iw(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=H3(d,a.dv,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AVn(a,b){if(b instanceof EM)return b.dv!=a.dv?0:1;if(!(b instanceof EA)){if(b instanceof DL)return b.m(a.dv);if(!(b instanceof D_))return 1;return 0;}return NE(b,0,ZT(a.dv))<=0?0:1;}
function AHw(){Ca.call(this);this.oz=0;}
function ATc(a){var b=new AHw();AQ3(b,a);return b;}
function AQ3(a,b){DG(a);a.oz=Fu(EY(b));}
function AIo(a,b,c){return a.oz!=Fu(EY(P(c,b)))?(-1):1;}
function ABK(){var a=this;Ca.call(a);a.x5=0;a.p4=0;}
function AK1(a){var b=new ABK();ATD(b,a);return b;}
function ATD(a,b){DG(a);a.x5=b;a.p4=Id(b);}
function AIU(a,b,c){return a.x5!=P(c,b)&&a.p4!=P(c,b)?(-1):1;}
function FP(){var a=this;B8.call(a);a.ic=0;a.lV=null;a.k7=null;a.k1=0;}
function A0x(a,b){var c=new FP();PZ(c,a,b);return c;}
function PZ(a,b,c){B2(a);a.ic=1;a.k7=b;a.k1=c;}
function AWM(a,b){a.e=b;}
function ARY(a,b,c,d){var e,f,g,h,i,j,k,l;e=BD(4);f=d.x;if(b>=f)return (-1);g=Lo(a,b,c,f);h=b+a.ic|0;i=AG5(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DA(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lo(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AG5(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.ic|0;if(h>=f){b=k;break a;}g=Lo(a,h,c,f);b=k;}}}if(b!=a.k1)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.k7.data[g])break;g=g+1|0;}return (-1);}
function Zw(a){var b,c;if(a.lV===null){b=new L;N(b);c=0;while(c<a.k1){I6(b,GZ(a.k7.data[c]));c=c+1|0;}a.lV=M(b);}return a.lV;}
function Lo(a,b,c,d){var e,f,g;a.ic=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(HZ(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CK(g[0])&&C$(g[1])?ES(g[0],g[1]):g[0];a.ic=2;}}return e;}
function APm(a,b){return b instanceof FP&&!Bp(Zw(b),Zw(a))?0:1;}
function ATa(a,b){return 1;}
var AAn=G(FP);
var Wc=G(FP);
var ABw=G(CV);
function ALr(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var RM=G(CV);
function AQV(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gm=G(CV);
function AUG(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AV9(a,b){a.e=b;a.M.T(b);}
var Rp=G(Gm);
function AO5(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function ARk(a,b){a.e=b;}
function FN(){var a=this;CV.call(a);a.gx=null;a.dE=0;}
function A4d(a,b,c,d,e){var f=new FN();J0(f,a,b,c,d,e);return f;}
function J0(a,b,c,d,e,f){Dl(a,c,d,e);a.gx=b;a.dE=f;}
function AXV(a,b,c,d){var e,f;e=Oc(d,a.dE);if(!a.M.L(d))return a.e.c(b,c,d);if(e>=a.gx.e4)return a.e.c(b,c,d);f=a.dE;e=e+1|0;Ew(d,f,e);f=a.M.c(b,c,d);if(f>=0){Ew(d,a.dE,0);return f;}f=a.dE;e=e+(-1)|0;Ew(d,f,e);if(e>=a.gx.e9)return a.e.c(b,c,d);Ew(d,a.dE,0);return (-1);}
var OA=G(FN);
function AOo(a,b,c,d){var e,f,g;e=0;f=a.gx.e4;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gx.e9)return (-1);return a.e.c(b,c,d);}
var TU=G(CV);
function AWY(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var SQ=G(Gm);
function AKH(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var Xc=G(FN);
function AJr(a,b,c,d){var e,f,g;e=Oc(d,a.dE);if(!a.M.L(d))return a.e.c(b,c,d);f=a.gx;if(e>=f.e4){Ew(d,a.dE,0);return a.e.c(b,c,d);}if(e<f.e9){Ew(d,a.dE,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){Ew(d,a.dE,0);return g;}Ew(d,a.dE,e+1|0);g=a.M.c(b,c,d);}return g;}
var TV=G(Ek);
function AXF(a,b,c,d){var e;e=d.x;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function AUX(a,b,c,d){var e;e=d.x;if(a.e.cw(b,e,c,d)>=0)return b;return (-1);}
function Qk(){Ek.call(this);this.l7=null;}
function ASj(a,b,c,d){var e,f;e=d.x;f=Xe(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function AIF(a,b,c,d){var e,f,g,h;e=d.x;f=a.e.cs(b,c,d);if(f<0)return (-1);g=Xe(a,f,e,c);if(g>=0)e=g;g=Be(f,a.e.cw(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.l7.ij(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Xe(a,b,c,d){while(true){if(b>=c)return (-1);if(a.l7.ij(P(d,b)))break;b=b+1|0;}return b;}
var Fd=G();
var A4e=null;var A4f=null;function Rr(b){var c;if(!(b&1)){c=A4f;if(c!==null)return c;c=new XL;A4f=c;return c;}c=A4e;if(c!==null)return c;c=new XK;A4e=c;return c;}
var ABx=G(C7);
function AJs(a,b,c,d){var e;a:{while(true){if((b+a.be.b6()|0)>d.x)break a;e=a.be.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var YZ=G(EZ);
function AQS(a,b,c,d){var e;if((b+a.be.b6()|0)<=d.x){e=a.be.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Q6=G(FG);
function AT8(a,b,c,d){var e,f,g,h,i;e=a.kt;f=e.e9;g=e.e4;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b6()|0)>d.x)break a;i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.b6()|0)>d.x){d.dB=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var SK=G(C7);
function ASc(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.b6()|0)<=d.x){e=a.be.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Wr=G(EZ);
function AJG(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Tx=G(FG);
function AUs(a,b,c,d){var e,f,g,h,i,j;e=a.kt;f=e.e9;g=e.e4;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.b6()|0)<=d.x){i=a.be.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b6()|0)>d.x){d.dB=1;return (-1);}j=a.be.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Ll=G(BN);
function APM(a,b,c,d){if(b&&!(d.fQ&&b==d.cW))return (-1);return a.e.c(b,c,d);}
function AOD(a,b){return 0;}
function ADA(){BN.call(this);this.xv=0;}
function AVi(a){var b=new ADA();AOY(b,a);return b;}
function AOY(a,b){B2(a);a.xv=b;}
function AJ8(a,b,c,d){var e,f,g;e=b<d.x?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.j2?0:d.cW;return (e!=32&&!SU(a,e,b,g,c)?0:1)^(f!=32&&!SU(a,f,b-1|0,g,c)?0:1)^a.xv?(-1):a.e.c(b,c,d);}
function AKo(a,b){return 0;}
function SU(a,b,c,d,e){var f;if(!Kp(b)&&b!=95){a:{if(Cy(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kp(f))return 0;if(Cy(f)!=6)return 1;}}return 1;}return 0;}
var Qf=G(BN);
function AOX(a,b,c,d){if(b!=d.iu)return (-1);return a.e.c(b,c,d);}
function AXP(a,b){return 0;}
function ZZ(){BN.call(this);this.gH=0;}
function AZ0(a){var b=new ZZ();AGV(b,a);return b;}
function AGV(a,b){B2(a);a.gH=b;}
function ASV(a,b,c,d){var e,f,g;e=!d.fQ?J(c):d.x;if(b>=e){BT(d,a.gH,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BT(d,a.gH,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BT(d,a.gH,0);return a.e.c(b,c,d);}
function ALg(a,b){var c;c=!Ds(b,a.gH)?0:1;BT(b,a.gH,(-1));return c;}
var Zo=G(BN);
function ART(a,b,c,d){if(b<(d.j2?J(c):d.x))return (-1);d.dB=1;d.BL=1;return a.e.c(b,c,d);}
function AIm(a,b){return 0;}
function OS(){BN.call(this);this.t7=null;}
function AK6(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fQ&&b==d.cW)break a;if(a.t7.vC(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function ANu(a,b){return 0;}
var AHd=G(B8);
function A0j(){var a=new AHd();ARC(a);return a;}
function ARC(a){B2(a);}
function AW7(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dB=1;return (-1);}g=P(c,b);if(CK(g)){h=b+2|0;if(h<=e&&HZ(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AKu(a,b){a.e=b;}
function ARs(a){return (-2147483602);}
function AKt(a,b){return 1;}
function AC0(){B8.call(this);this.mH=null;}
function AZR(a){var b=new AC0();ALe(b,a);return b;}
function ALe(a,b){B2(a);a.mH=b;}
function ARH(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dB=1;return (-1);}g=P(c,b);if(CK(g)){b=b+2|0;if(b<=e){h=P(c,f);if(HZ(g,h))return a.mH.ij(ES(g,h))?(-1):a.e.c(b,c,d);}}return a.mH.ij(g)?(-1):a.e.c(f,c,d);}
function ATU(a,b){a.e=b;}
function AIf(a){return (-2147483602);}
function AXu(a,b){return 1;}
function AG2(){BN.call(this);this.h4=0;}
function AZj(a){var b=new AG2();ANp(b,a);return b;}
function ANp(a,b){B2(a);a.h4=b;}
function APs(a,b,c,d){var e;e=!d.fQ?J(c):d.x;if(b>=e){BT(d,a.h4,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BT(d,a.h4,1);return a.e.c(b+1|0,c,d);}return (-1);}
function ANo(a,b){var c;c=!Ds(b,a.h4)?0:1;BT(b,a.h4,(-1));return c;}
function AFc(){BN.call(this);this.ib=0;}
function AY1(a){var b=new AFc();AN2(b,a);return b;}
function AN2(a,b){B2(a);a.ib=b;}
function ARP(a,b,c,d){if((!d.fQ?J(c)-b|0:d.x-b|0)<=0){BT(d,a.ib,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BT(d,a.ib,1);return a.e.c(b+1|0,c,d);}
function ANa(a,b){var c;c=!Ds(b,a.ib)?0:1;BT(b,a.ib,(-1));return c;}
function ABH(){BN.call(this);this.f6=0;}
function AYk(a){var b=new ABH();AXY(b,a);return b;}
function AXY(a,b){B2(a);a.f6=b;}
function AOr(a,b,c,d){var e,f,g;e=!d.fQ?J(c)-b|0:d.x-b|0;if(!e){BT(d,a.f6,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BT(d,a.f6,0);return a.e.c(b,c,d);case 13:if(g!=10){BT(d,a.f6,0);return a.e.c(b,c,d);}BT(d,a.f6,0);return a.e.c(b,c,d);default:}return (-1);}
function ALk(a,b){var c;c=!Ds(b,a.f6)?0:1;BT(b,a.f6,(-1));return c;}
function HE(){var a=this;B8.call(a);a.px=0;a.hd=0;}
function A0r(a,b){var c=new HE();QU(c,a,b);return c;}
function QU(a,b,c){B2(a);a.px=b;a.hd=c;}
function AJy(a,b,c,d){var e,f,g,h;e=GH(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BT(d,a.hd,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Id(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AS8(a,b){a.e=b;}
function GH(a,b){var c,d;c=a.px;d=F9(b,c);c=Jd(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.mL)?Cp(b.mL,d,c):null;}
function ATt(a,b){var c;c=!Ds(b,a.hd)?0:1;BT(b,a.hd,(-1));return c;}
var AG9=G(HE);
function AYp(a,b){var c=new AG9();AVY(c,a,b);return c;}
function AVY(a,b,c){QU(a,b,c);}
function ALq(a,b,c,d){var e,f;e=GH(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=!WI(c,e,b)?(-1):J(e);if(f<0)return (-1);BT(d,a.hd,f);return a.e.c(b+f|0,c,d);}return (-1);}
function AVI(a,b,c,d){var e,f;e=GH(a,d);f=d.cW;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=RN(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AJc(a,b,c,d,e){var f,g;f=GH(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=R0(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AQI(a,b){return 1;}
var AEg=G(HE);
function AY2(a,b){var c=new AEg();ANl(c,a,b);return c;}
function ANl(a,b,c){QU(a,b,c);}
function AP4(a,b,c,d){var e,f;e=GH(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BT(d,a.hd,J(e));return a.e.c(b+J(e)|0,c,d);}if(Fu(EY(P(e,f)))!=Fu(EY(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var P_=G(GQ);
function AM3(a,b,c,d,e){Oq(a,b,c,d,e);return a;}
function AKe(a,b,c,d){Z$(a,b,c,d);return a;}
function AKR(a,b){Ky(a,b);}
function AU2(a,b,c){AAr(a,b,c);return a;}
function TX(){var a=this;Ca.call(a);a.cC=null;a.lY=null;a.mU=null;}
function ALO(a,b,c){return !Lk(a,c,b)?(-1):a.bO;}
function AJ3(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=P(a.cC,a.bO-1|0);a:{while(true){g=a.bO;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lk(a,c,b))break;b=b+U7(a.lY,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bO|0,c,d)>=0)break;b=b+1|0;}return b;}
function ANs(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cC,0);g=(J(d)-c|0)-a.bO|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lk(a,d,c))break;c=c-U7(a.mU,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bO|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AN8(a,b){var c;if(b instanceof EM)return b.dv!=P(a.cC,0)?0:1;if(b instanceof EA)return NE(b,0,Cp(a.cC,0,1))<=0?0:1;if(!(b instanceof DL)){if(!(b instanceof D_))return 1;return J(a.cC)>1&&b.gm==ES(P(a.cC,0),P(a.cC,1))?1:0;}a:{b:{b=b;if(!b.m(P(a.cC,0))){if(J(a.cC)<=1)break b;if(!b.m(ES(P(a.cC,0),P(a.cC,1))))break b;}c=1;break a;}c=0;}return c;}
function Lk(a,b,c){var d;d=0;while(d<a.bO){if(P(b,d+c|0)!=P(a.cC,d))return 0;d=d+1|0;}return 1;}
function ABG(){Ca.call(this);this.j7=null;}
function A0w(a){var b=new ABG();AVo(b,a);return b;}
function AVo(a,b){var c,d,e;DG(a);c=new L;N(c);d=0;while(true){e=BH(d,b.K);if(e>=0){a.j7=M(c);a.bO=c.K;return;}if(d<0)break;if(e>=0)break;BL(c,Fu(EY(b.B.data[d])));d=d+1|0;}b=new BG;Z(b);K(b);}
function AQb(a,b,c){var d;d=0;while(true){if(d>=J(a.j7))return J(a.j7);if(P(a.j7,d)!=Fu(EY(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OH(){Ca.call(this);this.h0=null;}
function AT_(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.h0))return J(a.h0);e=P(a.h0,d);f=b+d|0;if(e!=P(c,f)&&Id(P(a.h0,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var HD=G();
var A4g=null;var A4h=null;var A4c=null;function ATI(){ATI=Bs(HD);AMf();}
function AMf(){A4g=AZ$();A4h=AZc();A4c=I($rt_arraycls(B),[I(B,[C(464),A0s()]),I(B,[C(465),AYh()]),I(B,[C(466),AZ7()]),I(B,[C(467),A0c()]),I(B,[C(468),A4h]),I(B,[C(469),AZo()]),I(B,[C(470),AY_()]),I(B,[C(471),AYs()]),I(B,[C(472),AYo()]),I(B,[C(473),AYy()]),I(B,[C(474),AYN()]),I(B,[C(475),AYw()]),I(B,[C(476),AZI()]),I(B,[C(477),AYb()]),I(B,[C(478),AZ_()]),I(B,[C(479),AYM()]),I(B,[C(480),AZm()]),I(B,[C(481),AYK()]),I(B,[C(482),AZn()]),I(B,[C(483),AYB()]),I(B,[C(484),A0i()]),I(B,[C(485),AYD()]),I(B,[C(486),AZs()]),
I(B,[C(487),AZ5()]),I(B,[C(488),AZ1()]),I(B,[C(489),A0d()]),I(B,[C(490),AYA()]),I(B,[C(491),AZP()]),I(B,[C(492),A4g]),I(B,[C(493),AZx()]),I(B,[C(494),AYu()]),I(B,[C(495),A4g]),I(B,[C(496),AX$()]),I(B,[C(497),A4h]),I(B,[C(498),AYW()]),I(B,[C(499),Q(0,127)]),I(B,[C(500),Q(128,255)]),I(B,[C(501),Q(256,383)]),I(B,[C(502),Q(384,591)]),I(B,[C(503),Q(592,687)]),I(B,[C(504),Q(688,767)]),I(B,[C(505),Q(768,879)]),I(B,[C(506),Q(880,1023)]),I(B,[C(507),Q(1024,1279)]),I(B,[C(508),Q(1280,1327)]),I(B,[C(509),Q(1328,1423)]),
I(B,[C(510),Q(1424,1535)]),I(B,[C(511),Q(1536,1791)]),I(B,[C(512),Q(1792,1871)]),I(B,[C(513),Q(1872,1919)]),I(B,[C(514),Q(1920,1983)]),I(B,[C(515),Q(2304,2431)]),I(B,[C(516),Q(2432,2559)]),I(B,[C(517),Q(2560,2687)]),I(B,[C(518),Q(2688,2815)]),I(B,[C(519),Q(2816,2943)]),I(B,[C(520),Q(2944,3071)]),I(B,[C(521),Q(3072,3199)]),I(B,[C(522),Q(3200,3327)]),I(B,[C(523),Q(3328,3455)]),I(B,[C(524),Q(3456,3583)]),I(B,[C(525),Q(3584,3711)]),I(B,[C(526),Q(3712,3839)]),I(B,[C(527),Q(3840,4095)]),I(B,[C(528),Q(4096,4255)]),
I(B,[C(529),Q(4256,4351)]),I(B,[C(530),Q(4352,4607)]),I(B,[C(531),Q(4608,4991)]),I(B,[C(532),Q(4992,5023)]),I(B,[C(533),Q(5024,5119)]),I(B,[C(534),Q(5120,5759)]),I(B,[C(535),Q(5760,5791)]),I(B,[C(536),Q(5792,5887)]),I(B,[C(537),Q(5888,5919)]),I(B,[C(538),Q(5920,5951)]),I(B,[C(539),Q(5952,5983)]),I(B,[C(540),Q(5984,6015)]),I(B,[C(541),Q(6016,6143)]),I(B,[C(542),Q(6144,6319)]),I(B,[C(543),Q(6400,6479)]),I(B,[C(544),Q(6480,6527)]),I(B,[C(545),Q(6528,6623)]),I(B,[C(546),Q(6624,6655)]),I(B,[C(547),Q(6656,6687)]),
I(B,[C(548),Q(7424,7551)]),I(B,[C(549),Q(7552,7615)]),I(B,[C(550),Q(7616,7679)]),I(B,[C(551),Q(7680,7935)]),I(B,[C(552),Q(7936,8191)]),I(B,[C(553),Q(8192,8303)]),I(B,[C(554),Q(8304,8351)]),I(B,[C(555),Q(8352,8399)]),I(B,[C(556),Q(8400,8447)]),I(B,[C(557),Q(8448,8527)]),I(B,[C(558),Q(8528,8591)]),I(B,[C(559),Q(8592,8703)]),I(B,[C(560),Q(8704,8959)]),I(B,[C(561),Q(8960,9215)]),I(B,[C(562),Q(9216,9279)]),I(B,[C(563),Q(9280,9311)]),I(B,[C(564),Q(9312,9471)]),I(B,[C(565),Q(9472,9599)]),I(B,[C(566),Q(9600,9631)]),
I(B,[C(567),Q(9632,9727)]),I(B,[C(568),Q(9728,9983)]),I(B,[C(569),Q(9984,10175)]),I(B,[C(570),Q(10176,10223)]),I(B,[C(571),Q(10224,10239)]),I(B,[C(572),Q(10240,10495)]),I(B,[C(573),Q(10496,10623)]),I(B,[C(574),Q(10624,10751)]),I(B,[C(575),Q(10752,11007)]),I(B,[C(576),Q(11008,11263)]),I(B,[C(577),Q(11264,11359)]),I(B,[C(578),Q(11392,11519)]),I(B,[C(579),Q(11520,11567)]),I(B,[C(580),Q(11568,11647)]),I(B,[C(581),Q(11648,11743)]),I(B,[C(582),Q(11776,11903)]),I(B,[C(583),Q(11904,12031)]),I(B,[C(584),Q(12032,12255)]),
I(B,[C(585),Q(12272,12287)]),I(B,[C(586),Q(12288,12351)]),I(B,[C(587),Q(12352,12447)]),I(B,[C(588),Q(12448,12543)]),I(B,[C(589),Q(12544,12591)]),I(B,[C(590),Q(12592,12687)]),I(B,[C(591),Q(12688,12703)]),I(B,[C(592),Q(12704,12735)]),I(B,[C(593),Q(12736,12783)]),I(B,[C(594),Q(12784,12799)]),I(B,[C(595),Q(12800,13055)]),I(B,[C(596),Q(13056,13311)]),I(B,[C(597),Q(13312,19893)]),I(B,[C(598),Q(19904,19967)]),I(B,[C(599),Q(19968,40959)]),I(B,[C(600),Q(40960,42127)]),I(B,[C(601),Q(42128,42191)]),I(B,[C(602),Q(42752,
42783)]),I(B,[C(603),Q(43008,43055)]),I(B,[C(604),Q(44032,55203)]),I(B,[C(605),Q(55296,56191)]),I(B,[C(606),Q(56192,56319)]),I(B,[C(607),Q(56320,57343)]),I(B,[C(608),Q(57344,63743)]),I(B,[C(609),Q(63744,64255)]),I(B,[C(610),Q(64256,64335)]),I(B,[C(611),Q(64336,65023)]),I(B,[C(612),Q(65024,65039)]),I(B,[C(613),Q(65040,65055)]),I(B,[C(614),Q(65056,65071)]),I(B,[C(615),Q(65072,65103)]),I(B,[C(616),Q(65104,65135)]),I(B,[C(617),Q(65136,65279)]),I(B,[C(618),Q(65280,65519)]),I(B,[C(619),Q(0,1114111)]),I(B,[C(620),
AYx()]),I(B,[C(621),BV(0,1)]),I(B,[C(622),Ju(62,1)]),I(B,[C(623),BV(1,1)]),I(B,[C(624),BV(2,1)]),I(B,[C(625),BV(3,0)]),I(B,[C(626),BV(4,0)]),I(B,[C(627),BV(5,1)]),I(B,[C(628),Ju(448,1)]),I(B,[C(629),BV(6,1)]),I(B,[C(630),BV(7,0)]),I(B,[C(631),BV(8,1)]),I(B,[C(632),Ju(3584,1)]),I(B,[C(633),BV(9,1)]),I(B,[C(634),BV(10,1)]),I(B,[C(635),BV(11,1)]),I(B,[C(636),Ju(28672,0)]),I(B,[C(637),BV(12,0)]),I(B,[C(638),BV(13,0)]),I(B,[C(639),BV(14,0)]),I(B,[C(640),AY5(983040,1,1)]),I(B,[C(641),BV(15,0)]),I(B,[C(642),BV(16,
1)]),I(B,[C(643),BV(18,1)]),I(B,[C(644),AZh(19,0,1)]),I(B,[C(645),Ju(1643118592,1)]),I(B,[C(646),BV(20,0)]),I(B,[C(647),BV(21,0)]),I(B,[C(648),BV(22,0)]),I(B,[C(649),BV(23,0)]),I(B,[C(650),BV(24,1)]),I(B,[C(651),Ju(2113929216,1)]),I(B,[C(652),BV(25,1)]),I(B,[C(653),BV(26,0)]),I(B,[C(654),BV(27,0)]),I(B,[C(655),BV(28,1)]),I(B,[C(656),BV(29,0)]),I(B,[C(657),BV(30,0)])]);}
function NO(){Ca.call(this);this.tv=0;}
function AUg(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.tv!=G9(G6(ES(e,d)))?(-1):2;}
function LV(){B8.call(this);this.gT=0;}
function ARA(a){var b=new LV();AKN(b,a);return b;}
function AKN(a,b){B2(a);a.gT=b;}
function AR_(a,b){a.e=b;}
function ALh(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dB=1;return (-1);}f=P(c,b);if(b>d.cW&&CK(P(c,b-1|0)))return (-1);if(a.gT!=f)return (-1);return a.e.c(e,c,d);}
function AN5(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Ii(a,b,c,d);e=d.cW;f=d.x;while(true){if(b>=f)return (-1);g=I0(c,a.gT,b);if(g<0)return (-1);if(g>e&&CK(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function ALW(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Iw(a,b,c,d,e);f=e.cW;a:{while(true){if(c<b)return (-1);g=H3(d,a.gT,c);if(g<0)break a;if(g<b)break a;if(g>f&&CK(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJa(a,b){if(b instanceof EM)return 0;if(b instanceof EA)return 0;if(b instanceof DL)return 0;if(b instanceof D_)return 0;if(b instanceof Mb)return 0;if(!(b instanceof LV))return 1;return b.gT!=a.gT?0:1;}
function AU_(a,b){return 1;}
function Mb(){B8.call(this);this.gv=0;}
function AOv(a){var b=new Mb();ARJ(b,a);return b;}
function ARJ(a,b){B2(a);a.gv=b;}
function AKQ(a,b){a.e=b;}
function AIL(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BH(f,e);if(g>0){d.dB=1;return (-1);}h=P(c,b);if(g<0&&C$(P(c,f)))return (-1);if(a.gv!=h)return (-1);return a.e.c(f,c,d);}
function ASv(a,b,c,d){var e,f;if(!(c instanceof BC))return Ii(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=I0(c,a.gv,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C$(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AT9(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Iw(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=H3(d,a.gv,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C$(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALP(a,b){if(b instanceof EM)return 0;if(b instanceof EA)return 0;if(b instanceof DL)return 0;if(b instanceof D_)return 0;if(b instanceof LV)return 0;if(!(b instanceof Mb))return 1;return b.gv!=a.gv?0:1;}
function ASI(a,b){return 1;}
function D_(){var a=this;Ca.call(a);a.kT=0;a.jt=0;a.gm=0;}
function ATu(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.kT==e&&a.jt==d?2:(-1);}
function ARc(a,b,c,d){var e,f;if(!(c instanceof BC))return Ii(a,b,c,d);e=d.x;while(b<e){b=I0(c,a.kT,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.jt==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AKP(a,b,c,d,e){var f;if(!(d instanceof BC))return Iw(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=H3(d,a.jt,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kT==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATd(a,b){if(b instanceof D_)return b.gm!=a.gm?0:1;if(b instanceof DL)return b.m(a.gm);if(b instanceof EM)return 0;if(!(b instanceof EA))return 1;return 0;}
var XK=G(Fd);
function AK2(a,b){return b!=10?0:1;}
function ATm(a,b,c){return b!=10?0:1;}
var XL=G(Fd);
function AUt(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AWA(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AF8(){var a=this;B.call(a);a.oj=null;a.lb=null;a.hB=0;a.yU=0;}
function ARq(a){var b=new AF8();AOW(b,a);return b;}
function AOW(a,b){var c,d;while(true){c=a.hB;if(b<c)break;a.hB=c<<1|1;}d=c<<1|1;a.hB=d;d=d+1|0;a.oj=BD(d);a.lb=BD(d);a.yU=b;}
function TA(a,b,c){var d,e,f,g;d=0;e=a.hB;f=b&e;while(true){g=a.oj.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.lb.data[f]=c;}
function U7(a,b){var c,d,e,f;c=a.hB;d=b&c;e=0;while(true){f=a.oj.data[d];if(!f)break;if(f==b)return a.lb.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.yU;}
var AB4=G();
var LR=G(Bf);
function AZ$(){var a=new LR();AOp(a);return a;}
function AOp(a){}
function AEp(a){return CB(B$(Dt(),9,13),32);}
var KR=G(Bf);
function AZc(){var a=new KR();AU7(a);return a;}
function AU7(a){}
function AE6(a){return B$(Dt(),48,57);}
var AF1=G(Bf);
function A0s(){var a=new AF1();ANG(a);return a;}
function ANG(a){}
function ATY(a){return B$(Dt(),97,122);}
var AGy=G(Bf);
function AYh(){var a=new AGy();AO0(a);return a;}
function AO0(a){}
function AVb(a){return B$(Dt(),65,90);}
var AGB=G(Bf);
function AZ7(){var a=new AGB();AJ4(a);return a;}
function AJ4(a){}
function AMz(a){return B$(Dt(),0,127);}
var LK=G(Bf);
function A0c(){var a=new LK();ALt(a);return a;}
function ALt(a){}
function AC4(a){return B$(B$(Dt(),97,122),65,90);}
var Mp=G(LK);
function AZo(){var a=new Mp();AOA(a);return a;}
function AOA(a){}
function ADV(a){return B$(AC4(a),48,57);}
var AH8=G(Bf);
function AY_(){var a=new AH8();AQX(a);return a;}
function AQX(a){}
function AN4(a){return B$(B$(B$(Dt(),33,64),91,96),123,126);}
var Nz=G(Mp);
function AYs(){var a=new Nz();AS2(a);return a;}
function AS2(a){}
function ABE(a){return B$(B$(B$(ADV(a),33,64),91,96),123,126);}
var AEG=G(Nz);
function AYo(){var a=new AEG();AUT(a);return a;}
function AUT(a){}
function AQB(a){return CB(ABE(a),32);}
var AE0=G(Bf);
function AYy(){var a=new AE0();AUb(a);return a;}
function AUb(a){}
function ALH(a){return CB(CB(Dt(),32),9);}
var ADr=G(Bf);
function AYN(){var a=new ADr();AWq(a);return a;}
function AWq(a){}
function AQy(a){return CB(B$(Dt(),0,31),127);}
var ADd=G(Bf);
function AYw(){var a=new ADd();AKn(a);return a;}
function AKn(a){}
function AWF(a){return B$(B$(B$(Dt(),48,57),97,102),65,70);}
var AGG=G(Bf);
function AZI(){var a=new AGG();AJT(a);return a;}
function AJT(a){}
function ARo(a){var b;b=new Vv;b.AU=a;By(b);b.Q=1;return b;}
var AIe=G(Bf);
function AYb(){var a=new AIe();ATh(a);return a;}
function ATh(a){}
function AIC(a){var b;b=new N4;b.A4=a;By(b);b.Q=1;return b;}
var AF9=G(Bf);
function AZ_(){var a=new AF9();AJ7(a);return a;}
function AJ7(a){}
function AOw(a){var b;b=new Uf;b.At=a;By(b);return b;}
var AFR=G(Bf);
function AYM(){var a=new AFR();AQz(a);return a;}
function AQz(a){}
function ATB(a){var b;b=new Ue;b.Ae=a;By(b);return b;}
var AGW=G(Bf);
function AZm(){var a=new AGW();ALp(a);return a;}
function ALp(a){}
function ALE(a){var b;b=new ZA;b.BU=a;By(b);ID(b.O,0,2048);b.Q=1;return b;}
var ACk=G(Bf);
function AYK(){var a=new ACk();AKZ(a);return a;}
function AKZ(a){}
function AL8(a){var b;b=new QY;b.Bl=a;By(b);b.Q=1;return b;}
var ABW=G(Bf);
function AZn(){var a=new ABW();AP$(a);return a;}
function AP$(a){}
function AWx(a){var b;b=new P6;b.Cq=a;By(b);b.Q=1;return b;}
var AGg=G(Bf);
function AYB(){var a=new AGg();AQY(a);return a;}
function AQY(a){}
function AIq(a){var b;b=new S6;b.AW=a;By(b);return b;}
var AGr=G(Bf);
function A0i(){var a=new AGr();AOf(a);return a;}
function AOf(a){}
function APx(a){var b;b=new NX;b.zo=a;By(b);b.Q=1;return b;}
var ADO=G(Bf);
function AYD(){var a=new ADO();AJe(a);return a;}
function AJe(a){}
function AMi(a){var b;b=new N2;b.Bp=a;By(b);b.Q=1;return b;}
var AE3=G(Bf);
function AZs(){var a=new AE3();AK3(a);return a;}
function AK3(a){}
function ANy(a){var b;b=new Pu;b.BR=a;By(b);b.Q=1;return b;}
var AHN=G(Bf);
function AZ5(){var a=new AHN();APE(a);return a;}
function APE(a){}
function APz(a){var b;b=new Rt;b.B9=a;By(b);b.Q=1;return b;}
var AGo=G(Bf);
function AZ1(){var a=new AGo();ARf(a);return a;}
function ARf(a){}
function AVA(a){var b;b=new RA;b.Aw=a;By(b);return b;}
var AEd=G(Bf);
function A0d(){var a=new AEd();AK0(a);return a;}
function AK0(a){}
function ASS(a){var b;b=new V6;b.Bw=a;By(b);return b;}
var ADN=G(Bf);
function AYA(){var a=new ADN();ATC(a);return a;}
function ATC(a){}
function ARd(a){var b;b=new UZ;b.zs=a;By(b);b.Q=1;return b;}
var AIb=G(Bf);
function AZP(){var a=new AIb();AN_(a);return a;}
function AN_(a){}
function ATO(a){var b;b=new Of;b.Cz=a;By(b);b.Q=1;return b;}
var Kf=G(Bf);
function AZx(){var a=new Kf();AMr(a);return a;}
function AMr(a){}
function AE1(a){return CB(B$(B$(B$(Dt(),97,122),65,90),48,57),95);}
var AGZ=G(Kf);
function AYu(){var a=new AGZ();AOi(a);return a;}
function AOi(a){}
function AQ2(a){var b;b=ER(AE1(a),1);b.Q=1;return b;}
var AEK=G(LR);
function AX$(){var a=new AEK();AV_(a);return a;}
function AV_(a){}
function AJZ(a){var b;b=ER(AEp(a),1);b.Q=1;return b;}
var ADJ=G(KR);
function AYW(){var a=new ADJ();APj(a);return a;}
function APj(a){}
function ANQ(a){var b;b=ER(AE6(a),1);b.Q=1;return b;}
function ADi(){var a=this;Bf.call(a);a.tf=0;a.t3=0;}
function Q(a,b){var c=new ADi();AWu(c,a,b);return c;}
function AWu(a,b,c){a.tf=b;a.t3=c;}
function APQ(a){return B$(Dt(),a.tf,a.t3);}
var ADE=G(Bf);
function AYx(){var a=new ADE();AWQ(a);return a;}
function AWQ(a){}
function AWl(a){return B$(B$(Dt(),65279,65279),65520,65533);}
function AEw(){var a=this;Bf.call(a);a.nJ=0;a.k0=0;a.ro=0;}
function BV(a,b){var c=new AEw();ALj(c,a,b);return c;}
function AZh(a,b,c){var d=new AEw();AWw(d,a,b,c);return d;}
function ALj(a,b,c){a.k0=c;a.nJ=b;}
function AWw(a,b,c,d){a.ro=d;a.k0=c;a.nJ=b;}
function AM7(a){var b;b=A0o(a.nJ);if(a.ro)ID(b.O,0,2048);b.Q=a.k0;return b;}
function AEH(){var a=this;Bf.call(a);a.nI=0;a.ld=0;a.pK=0;}
function Ju(a,b){var c=new AEH();AMj(c,a,b);return c;}
function AY5(a,b,c){var d=new AEH();AIs(d,a,b,c);return d;}
function AMj(a,b,c){a.ld=c;a.nI=b;}
function AIs(a,b,c,d){a.pK=d;a.ld=c;a.nI=b;}
function AIr(a){var b;b=new T6;AFE(b,a.nI);if(a.pK)ID(b.O,0,2048);b.Q=a.ld;return b;}
var ADm=G();
var ACL=G();
function AEb(b){var c,d,e,f,g,h,i;c=AT2(FV(b));d=KG(c);e=BD(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+KG(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Oz(c);h=h+1|0;}return e;}
function Lv(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function OU(){var a=this;B.call(a);a.r4=0;a.um=0;a.sn=null;}
function AM4(a,b,c){var d=new OU();AUR(d,a,b,c);return d;}
function AUR(a,b,c,d){a.r4=b;a.um=c;a.sn=d;}
function AGk(){var a=this;B.call(a);a.qB=null;a.tp=0;}
function AT2(a){var b=new AGk();ALT(b,a);return b;}
function ALT(a,b){a.qB=b;}
var AEa=G();
function KG(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.qB.data;f=b.tp;b.tp=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Oz(b){var c,d;c=KG(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var WZ=G(Fp);
function AAu(a){Mi(a);return a.gI;}
var Tv=G(Fp);
function AC1(){B.call(this);this.Oo=null;}
function UK(){B.call(this);this.s0=null;}
function ANn(a,b){b.gR=a.s0;}
function TI(){B.call(this);this.vt=null;}
function ALc(a,b){JV(a.vt,b);}
function XF(){var a=this;B.call(a);a.CB=null;a.kh=null;}
function AMF(a,b){var c;c=a.kh;b=b;a.kh=QT(!c.oc&&!b.ey?0:1);return 1;}
function YF(){var a=this;B.call(a);a.A9=null;a.A$=null;}
function Wm(){var a=this;B.call(a);a.AR=null;a.AP=null;a.AO=null;}
function Y2(){var a=this;Y.call(a);a.p$=null;a.B2=null;}
function AMH(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cn^Dz(a.p$,c):0;}
function Y1(){var a=this;Y.call(a);a.wU=null;a.xK=null;a.BB=null;}
function AI0(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cn^Dz(a.wU,c):0;return a.xK.m(b)&&!d?1:0;}
function Qp(){var a=this;Y.call(a);a.jz=null;a.zw=null;}
function APF(a,b){return a.bi^Dz(a.jz,b);}
function ANC(a){var b,c,d;b=new L;N(b);c=HP(a.jz,0);while(c>=0){I6(b,GZ(c));BL(b,124);c=HP(a.jz,c+1|0);}d=b.K;if(d>0)YR(b,d-1|0);return M(b);}
function Qy(){var a=this;Y.call(a);a.tO=null;a.A2=null;}
function ATz(a,b){return a.tO.m(b);}
function Qw(){var a=this;Y.call(a);a.k6=0;a.q8=null;a.md=null;}
function AUf(a,b){return !(a.k6^Dz(a.md.I,b))&&!(a.k6^a.md.d7^a.q8.m(b))?0:1;}
function Qx(){var a=this;Y.call(a);a.lc=0;a.xk=null;a.ng=null;}
function AQa(a,b){return !(a.lc^Dz(a.ng.I,b))&&!(a.lc^a.ng.d7^a.xk.m(b))?1:0;}
function QB(){var a=this;Y.call(a);a.yi=0;a.xt=null;a.xe=null;a.zZ=null;}
function AMc(a,b){return a.yi^(!a.xt.m(b)&&!a.xe.m(b)?0:1);}
function QC(){var a=this;Y.call(a);a.tZ=0;a.tB=null;a.sM=null;a.Cw=null;}
function AIg(a,b){return a.tZ^(!a.tB.m(b)&&!a.sM.m(b)?0:1)?0:1;}
function Qz(){var a=this;Y.call(a);a.ss=null;a.Cy=null;}
function ANH(a,b){return C5(a.ss,b);}
function QA(){var a=this;Y.call(a);a.xI=null;a.Ab=null;}
function AQe(a,b){return C5(a.xI,b)?0:1;}
function QD(){var a=this;Y.call(a);a.ue=null;a.tG=0;a.wl=null;}
function AVN(a,b){return !C5(a.ue,b)&&!(a.tG^Dz(a.wl.I,b))?0:1;}
function QE(){var a=this;Y.call(a);a.uW=null;a.vd=0;a.uD=null;}
function ALw(a,b){return !C5(a.uW,b)&&!(a.vd^Dz(a.uD.I,b))?1:0;}
function Qo(){var a=this;Y.call(a);a.v_=0;a.xj=null;a.xZ=null;a.zD=null;}
function AX7(a,b){return !(a.v_^a.xj.m(b))&&!C5(a.xZ,b)?0:1;}
function Ra(){var a=this;Y.call(a);a.xU=0;a.o6=null;a.pQ=null;a.z9=null;}
function ANN(a,b){return !(a.xU^a.o6.m(b))&&!C5(a.pQ,b)?1:0;}
function Qm(){var a=this;Y.call(a);a.rO=null;a.Ac=null;}
function ALv(a,b){return C5(a.rO,b);}
function Qn(){var a=this;Y.call(a);a.rZ=null;a.Ct=null;}
function ANj(a,b){return C5(a.rZ,b)?0:1;}
function Qs(){var a=this;Y.call(a);a.yf=null;a.uL=0;a.zi=null;}
function AOZ(a,b){return C5(a.yf,b)&&a.uL^Dz(a.zi.I,b)?1:0;}
function Ql(){var a=this;Y.call(a);a.vI=null;a.t1=0;a.uJ=null;}
function AVk(a,b){return C5(a.vI,b)&&a.t1^Dz(a.uJ.I,b)?0:1;}
function Qq(){var a=this;Y.call(a);a.wp=0;a.p8=null;a.tV=null;a.zY=null;}
function AKi(a,b){return a.wp^a.p8.m(b)&&C5(a.tV,b)?1:0;}
function Qr(){var a=this;Y.call(a);a.vy=0;a.oS=null;a.v9=null;a.Ah=null;}
function ASH(a,b){return a.vy^a.oS.m(b)&&C5(a.v9,b)?0:1;}
var MX=G(0);
function UY(){var a=this;B.call(a);a.z4=null;a.xm=null;a.jU=null;a.cF=null;a.jA=0;a.l5=0;}
function N0(a,b){var c,d,e;c=J(a.jU);if(b>=0&&b<=c){AAC(a.cF,null,(-1),(-1));d=a.cF;d.ku=1;d.eC=b;c=d.iu;if(c<0)c=b;d.iu=c;b=a.xm.cs(b,a.jU,d);if(b==(-1))a.cF.dB=1;if(b>=0){d=a.cF;if(d.jV){e=d.dW.data;if(e[0]==(-1)){c=d.eC;e[0]=c;e[1]=c;}d.iu=JQ(d);return 1;}}a.cF.eC=(-1);return 0;}d=new BG;Bm(d,C_(b));K(d);}
function AHM(a){return Q5(a.cF,0);}
function ADK(a){return Uh(a.cF,0);}
function AB_(a){return a.cF.j2;}
function AEM(){var a=this;B.call(a);a.Hq=null;a.Ho=null;a.Ht=0.0;}
var C3=G(0);
var A17=null;var A26=null;var A19=null;var A18=null;var A1_=null;var A1$=null;var A2b=null;var A2a=null;var A2d=null;var A2c=null;var A2e=null;function AGE(){AGE=Bs(C3);AWD();}
function AWD(){A17=C8(0);A26=Dr(8,8,8);A19=S(C(658));A18=Dr(255,255,255);A1_=S(C(659));A1$=S(C(660));A2b=S(C(661));A2a=S(C(662));A2d=EH(205,205,205,153);A2c=EH(255,255,255,0);A2e=S(C(125));}
function Ct(){CA.call(this);this.mC=null;}
var A4i=null;var A4j=null;var A4k=null;var A4l=null;var A4m=null;var A4n=null;var A4o=null;var A4p=null;var A4q=null;var A4r=null;var A4s=null;var A4t=null;var A4u=null;var A4v=null;var A4w=null;var A2f=null;function AFG(){AFG=Bs(Ct);AXd();}
function DI(a,b,c){var d=new Ct();To(d,a,b,c);return d;}
function AWW(a,b,c,d){var e=new Ct();ACF(e,a,b,c,d);return e;}
function To(a,b,c,d){AFG();Dy(a,b,c);a.mC=IE(d,null);}
function ACF(a,b,c,d,e){AFG();Dy(a,b,c);a.mC=IE(d,e);}
function AXd(){var b;b=new Ct;AGE();To(b,C(364),0,A26);A4i=b;A4j=DI(C(365),1,S(C(663)));A4k=DI(C(367),2,S(C(664)));A4l=DI(C(369),3,S(C(665)));A4m=DI(C(371),4,A26);A4n=DI(C(372),5,S(C(666)));A4o=DI(C(374),6,S(C(412)));A4p=DI(C(376),7,S(C(667)));A4q=DI(C(378),8,S(C(668)));A4r=AWW(C(380),9,A26,Dr(237,235,252));A4s=AWW(C(381),10,S(C(410)),S(C(669)));A4t=DI(C(382),11,S(C(412)));A4u=DI(C(384),12,S(C(413)));A4v=DI(C(386),13,S(C(670)));b=DI(C(387),14,S(C(388)));A4w=b;A2f=I(Ct,[A4i,A4j,A4k,A4l,A4m,A4n,A4o,A4p,A4q,A4r,
A4s,A4t,A4u,A4v,b]);}
var DH=G(0);
var A2j=null;var A2k=null;var A2g=null;var A2h=null;var A2i=null;var A27=null;var A28=null;var A2l=null;var A2m=null;function AJo(){AJo=Bs(DH);AL7();}
function AL7(){A2j=S(C(123));A2k=S(C(671));A2g=S(C(672));A2h=S(C(673));A2i=S(C(674));A27=S(C(123));A28=S(C(671));A2l=EH(205,205,205,153);A2m=Dr(247,248,250);}
function YB(){var a=this;B.call(a);a.kx=null;a.ii=0;}
function S8(){B.call(this);this.wG=null;}
function AJ_(a,b){Z1(a.wG,b);}
var Ot=G(G1);
function AM$(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=F9(d,a.bd);DF(d,a.bd,b);e=a.c8.c(b,c,d);if(e>=0)break;DF(d,a.bd,g);b=b+1|0;}}return b;}
function AXU(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=F9(e,a.bd);DF(e,a.bd,c);f=a.c8.c(c,d,e);if(f>=0)break;DF(e,a.bd,g);c=c+(-1)|0;}}return c;}
function ALf(a){return null;}
var SA=G(Bu);
var AAf=G(Bu);
function XE(){Gl.call(this);this.Cl=0;}
function Sj(){Gl.call(this);this.Cf=0;}
var Ns=G(Bu);
function PU(){var a=this;B.call(a);a.tm=null;a.tl=null;}
function PW(){B.call(this);this.wF=null;}
function ANk(a,b){Bq(a.wF,b);}
function Xw(){var a=this;B.call(a);a.ui=null;a.wZ=null;a.yF=0;a.lv=0;}
function Ln(a,b){return Ce(a.ui)<b?0:1;}
var ACg=G();
function ACW(b){var c,d,e,f,g,h,i,j;c=AKB();d=CD(b);Br(c,d);e=0;f=0;while(f<d){g=B3(b,f);h=HY(g);Br(c,h);i=0;while(i<h){j=VA(g,i);G7(c,e,MU(j));e=e+MU(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Se(c);}
function ACp(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=R(IL,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new IL;j.gA=h;e[g]=j;}else{j=new IL;j.gA=h;j.mZ=BD(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].mZ.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function R7(){B.call(this);this.tE=null;}
function AXp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.tE;d=CF(c[0]);c=MR(d);e=new XN;d=ACp(c);f=ACp(c);g=Bb(c);h=R(MP,g);i=h.data;j=0;while(j<g){k=Bb(c);l=Bb(c);m=Bb(c);n=Bb(c);o=Bb(c);p=new MP;p.iz=k;p.n2=l;p.iy=m;p.n1=n;p.ly=o;i[j]=p;j=j+1|0;}e.Cd=d;e.xR=f;e.gu=h;b.gi=e;KI(b.A,d);KI(b.E,b.gi.xR);}
var ACJ=G(0);
function Rh(){var a=this;B.call(a);a.qM=null;a.qJ=null;}
function WA(){var a=this;B.call(a);a.AM=null;a.tF=null;}
function WD(){B.call(this);this.B0=null;}
function AWb(a,b){$rt_globals.console.info($rt_ustr(b));}
function XC(){var a=this;B.call(a);a.dW=null;a.kH=null;a.mF=null;a.mL=null;a.ra=0;a.jV=0;a.cW=0;a.x=0;a.eC=0;a.j2=0;a.fQ=0;a.dB=0;a.BL=0;a.iu=0;a.ku=0;}
function BT(a,b,c){a.kH.data[b]=c;}
function Ds(a,b){return a.kH.data[b];}
function JQ(a){return Uh(a,0);}
function Uh(a,b){T4(a,b);return a.dW.data[(b*2|0)+1|0];}
function DF(a,b,c){a.dW.data[b*2|0]=c;}
function Kz(a,b,c){a.dW.data[(b*2|0)+1|0]=c;}
function F9(a,b){return a.dW.data[b*2|0];}
function Jd(a,b){return a.dW.data[(b*2|0)+1|0];}
function AF3(a){return Q5(a,0);}
function Q5(a,b){T4(a,b);return a.dW.data[b*2|0];}
function Oc(a,b){return a.mF.data[b];}
function Ew(a,b,c){a.mF.data[b]=c;}
function T4(a,b){var c;if(!a.jV){c=new CT;Z(c);K(c);}if(b>=0&&b<a.ra)return;c=new BG;Bm(c,C_(b));K(c);}
function AAC(a,b,c,d){a.jV=0;a.ku=2;H8(a.dW,(-1));H8(a.kH,(-1));if(b!==null)a.mL=b;if(c>=0){a.cW=c;a.x=d;}a.eC=a.cW;}
function ADY(a){return a.ku;}
function NY(){B.call(this);this.zf=null;}
function AN3(a){D3(a.zf);}
function Vv(){Y.call(this);this.AU=null;}
function AV2(a,b){return Cy(b)!=2?0:1;}
function N4(){Y.call(this);this.A4=null;}
function AJX(a,b){return Cy(b)!=1?0:1;}
function Uf(){Y.call(this);this.At=null;}
function AJD(a,b){return Tt(b);}
function Ue(){Y.call(this);this.Ae=null;}
function AM5(a,b){return 0;}
function ZA(){Y.call(this);this.BU=null;}
function AOM(a,b){return !Cy(b)?0:1;}
function QY(){Y.call(this);this.Bl=null;}
function AV5(a,b){return Cy(b)!=9?0:1;}
function P6(){Y.call(this);this.Cq=null;}
function AR6(a,b){return GT(b);}
function S6(){Y.call(this);this.AW=null;}
function ATH(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function NX(){Y.call(this);this.zo=null;}
function AXr(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GT(b);}return b;}
function N2(){Y.call(this);this.Bp=null;}
function ALV(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GT(b);}return b;}
function Pu(){Y.call(this);this.BR=null;}
function AWe(a,b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Rt(){Y.call(this);this.B9=null;}
function AQu(a,b){return Kp(b);}
function RA(){Y.call(this);this.Aw=null;}
function AS6(a,b){return RB(b);}
function V6(){Y.call(this);this.Bw=null;}
function AVO(a,b){return Cy(b)!=3?0:1;}
function UZ(){Y.call(this);this.zs=null;}
function AWS(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GT(b);}return b;}
function Of(){Y.call(this);this.Cz=null;}
function ALF(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GT(b);}return b;}
function Ni(){Y.call(this);this.m8=0;}
function A0o(a){var b=new Ni();AFE(b,a);return b;}
function AFE(a,b){By(a);a.m8=b;}
function AR9(a,b){return a.bi^(a.m8!=Cy(b&65535)?0:1);}
var T6=G(Ni);
function AUJ(a,b){return a.bi^(!(a.m8>>Cy(b&65535)&1)?0:1);}
function Z4(){B.call(this);this.p0=null;}
function ANw(a,b){var c,d,e,f;c=a.p0;b=Fn(b);d=c.tm;c=c.tl;e=new Nj;f=AGc(FH(c));AHj(e,b,null,f);I5(d,e);}
function Z6(){var a=this;B.call(a);a.ry=null;a.rz=null;}
function AKh(a,b){var c,d;c=a.ry;d=a.rz;b.text().then(Bl(c,"f"),Bl(d,"f"));}
function TO(){B.call(this);this.w2=null;}
function AUo(a){var b,c;b=a.w2;c=b.qM;b=b.qJ;c.C2(b.kc,b.mS,null);}
function X8(){B.call(this);this.qh=null;}
function ASU(a,b){var c,d,e,f;c=a.qh;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.tF;c=BA();b=CC(b);e=new L;N(e);H(H(e,C(675)),b);Bq(c,M(e));b=BA();f=d.length;c=new L;N(c);U(H(c,C(676)),f);Bq(b,M(c));}
function X$(){var a=this;B.call(a);a.wL=null;a.wM=null;}
function ARt(a,b){var c,d;c=a.wL;d=a.wM;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function WX(){B.call(this);this.r0=null;}
function APT(a,b){a.r0.g($rt_str(b.message));}
var ACx=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A0M(AQo),"cM",A0L(AKK)],TY,0,B,[],0,3,0,0,0,Oy,0,B,[],3,3,0,0,0,NP,0,B,[],3,3,0,0,0,Y6,0,B,[Oy,NP],0,3,0,0,0,ADa,0,B,[],4,0,0,0,0,ACN,0,B,[],4,3,0,0,0,G2,0,B,[],0,3,0,0,0,El,0,G2,[],0,3,0,0,0,Bu,0,El,[],0,3,0,0,0,AEI,0,Bu,[],0,3,0,0,0,CR,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,Jy,0,B,[],3,3,0,0,0,BC,"String",1,B,[CR,CG,Jy],0,3,0,Fe,["cM",A0L(AKI),"bJ",A0M(Bp),"nE",A0L(I1),"kY",A0M(AM9)],Fa,0,G2,[],0,3,0,0,0,HR,0,Fa,[],0,3,0,0,0,AEe,0,HR,[],0,3,0,0,0,Ea,0,B,[CR],1,3,0,0,0,GL,
0,Ea,[CG],0,3,0,0,["bJ",A0M(AW2),"kY",A0M(APv)],GQ,0,B,[CR,Jy],0,0,0,0,["iL",A0M(Ky),"cM",A0L(M)],IC,0,B,[],3,3,0,0,0,L,0,GQ,[IC],0,3,0,0,["nk",A0P(APo),"mi",A0O(AL6),"cM",A0L(D9),"iL",A0M(APy),"nW",A0N(AP7)],EP,0,HR,[],0,3,0,0,0,AFF,0,EP,[],0,3,0,0,0,AD3,0,EP,[],0,3,0,0,0,V0,0,B,[],3,3,0,0,0,Dx,0,B,[],3,3,0,0,0,QX,0,B,[],3,0,0,0,0,Jj,0,B,[V0,Dx,QX],1,3,0,0,["ej",A0L(EU)],TS,0,Jj,[],0,3,0,0,0,AB7,0,B,[],0,3,0,0,0,AG0,0,B,[],4,3,0,0,0,BM,0,B,[],3,3,0,0,0,BY,0,B,[BM],3,3,0,0,0,We,0,B,[BY],0,3,0,0,["Z",A0M(AXk)],AFK,
0,B,[],0,3,0,0,0,AEV,0,B,[BM],1,3,0,0,0,ACb,0,B,[],3,3,0,0,0,AGA,0,B,[],3,3,0,0,0,AGx,0,B,[],3,3,0,0,0,MK,0,B,[],0,3,0,0,0,AC7,0,B,[BM],1,3,0,0,0,Wf,0,B,[BY],0,3,0,0,["Z",A0M(AIj)],Wd,0,B,[BY],0,3,0,0,["Z",A0M(AVP)],Mf,0,B,[],4,3,0,0,0,AGt,0,B,[],4,3,0,0,0,ADL,0,B,[],0,3,0,0,0,AIc,0,B,[],4,3,0,0,0,OE,0,B,[BY],0,3,0,0,["Z",A0M(ARO)]]);
$rt_metadata([AGQ,0,B,[BM],1,3,0,0,0,ACn,0,B,[],0,3,0,0,0,Ye,0,B,[BM],3,3,0,0,0,AEJ,0,B,[Ye],1,3,0,0,["Np",A0M(ANW),"MK",A0L(AQl)],AEu,0,B,[BM],1,3,0,0,0,HL,0,B,[],3,3,0,0,0,Vt,0,B,[HL],0,3,0,0,0,BG,0,Bu,[],0,3,0,0,0,AFl,0,B,[],4,3,0,0,0,G$,0,Bu,[],0,3,0,0,0,Js,0,Bu,[],0,3,0,0,0,Dc,0,B,[CG],0,3,0,0,0,NJ,0,B,[BM],3,3,0,0,0,U3,0,B,[NJ],3,3,0,0,0,EI,0,B,[BM],3,3,0,0,0,ACa,0,B,[BM,U3,EI],1,3,0,0,["Lt",A0L(ARh),"Mn",A0M(AUS),"N6",A0M(AUz),"F3",A0M(ALz),"Lj",A0M(AIO),"DK",A0L(ALX),"ME",A0N(AUK),"ML",A0O(AO6),"Ny",
A0L(AJW),"Og",A0L(ASC),"J4",A0M(AVG),"G_",A0L(AQP),"OJ",A0M(AOy),"I8",A0L(ARj),"H8",A0L(AXS),"Ot",A0L(APU),"DB",A0M(AJL),"MS",A0L(AW4),"KA",A0N(AOu),"GT",A0N(AQD),"Mp",A0N(AWt),"LM",A0L(AIR),"Ni",A0L(AOc),"NQ",A0M(AMa),"JC",A0M(ANi),"FW",A0N(AOR),"Iv",A0L(APZ),"No",A0M(AJY),"D8",A0L(ANh),"Ov",A0L(AS$),"FB",A0M(AIv),"I6",A0M(AVu),"Oj",A0M(AKy),"HL",A0L(AVx),"Gy",A0N(AKL),"Ma",A0M(ASX),"Ih",A0L(ATM),"EA",A0N(AR2),"EF",A0N(ARx),"HJ",A0L(AVp),"NT",A0M(AXe),"GL",A0O(ARB),"Fu",A0L(AL0),"GW",A0N(AK$),"G4",A0L(AJq),
"L1",A0L(AWX),"J0",A0L(AR0),"CG",A0L(AJn),"Lf",A0N(AR3),"D9",A0M(ALN),"JA",A0M(ANE),"Fi",A0L(ATX)],Pw,0,B,[BY],0,3,0,0,["Z",A0M(ASW)],AEq,0,B,[],4,3,0,0,0,Rs,0,B,[EI],3,3,0,0,0,TN,0,B,[EI],3,3,0,0,0,Ty,0,B,[EI],3,3,0,0,0,VW,0,B,[EI],3,3,0,0,0,AAe,0,B,[EI],3,3,0,0,0,W9,0,B,[EI,Rs,TN,Ty,VW,AAe],3,3,0,0,0,AC8,0,B,[BM,W9],1,3,0,0,["KR",A0N(AR7),"Nw",A0N(APt),"FD",A0O(AOe),"GI",A0M(AJ5),"Ku",A0O(AMg)],BP,0,Bu,[],0,3,0,0,0,ABv,0,Bu,[],0,3,0,0,0,HM,0,BG,[],0,3,0,0,0,ADw,0,B,[],0,3,0,0,0,ST,0,B,[],3,3,0,0,0,QI,0,B,
[ST],3,3,0,0,0,U_,0,B,[QI],0,3,0,0,0,BS,0,B,[],3,3,0,0,0,AER,0,B,[BS],0,3,0,0,0,Bg,0,B,[],3,3,0,0,0,AES,0,B,[Bg],0,3,0,0,0,TD,0,B,[BM],3,3,0,0,0,X3,0,B,[TD],0,3,0,0,["I$",A0M(AOt)],X0,0,B,[Bg],0,3,0,0,0,Sz,0,B,[BM],3,3,0,0,0,X1,0,B,[Sz],0,3,0,0,["yz",A0N(AMp)],AG6,0,B,[BM],1,3,0,0,0,Cu,0,B,[BM],3,3,0,0,0,XZ,0,B,[Cu],0,3,0,0,["cm",A0M(AS7)],UL,0,B,[],0,3,0,0,0,YT,0,B,[],3,3,0,0,["eZ",A0M(AIl)],GD,0,B,[YT],3,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],Ff,0,B,[GD],1,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9),"ec",A0L(Ey),"pR",
A0M(AUj)],LA,0,B,[GD],3,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],J3,0,B,[LA],3,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)]]);
$rt_metadata([E0,0,Ff,[J3],1,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9),"uZ",A0M(ATr),"cd",A0L(B5),"vN",A0N(ASs),"ok",A0N(AVm),"bJ",A0M(AQ7)],M8,0,E0,[],1,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],NQ,0,B,[GD],3,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],AAD,0,B,[NQ,LA],3,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],W2,0,M8,[AAD],0,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],LX,0,B,[],3,3,0,0,0,D$,0,B,[LX],1,3,0,0,0,Em,0,B,[],3,3,0,0,0,AAz,0,B,[LX],3,3,0,0,0,Ow,0,B,[AAz],3,3,0,0,0,Q8,0,D$,[Em,CR,Ow],0,3,0,0,0,UR,0,B,[BS],0,3,0,0,0,US,0,B,[BY],0,
3,0,0,["Z",A0M(AIQ)],ADo,0,B,[],0,3,0,0,0,L$,0,B,[],1,3,0,0,0,XS,0,L$,[],0,3,0,0,0,Cj,0,B,[Dx],1,3,0,0,["cG",A0M(AWZ)],RZ,0,B,[],0,3,0,0,0,Y_,0,B,[Cu],0,3,0,0,["cm",A0M(ASu)],Za,0,B,[Cu],0,3,0,0,["cm",A0M(ASK)],Zb,0,B,[Cu],0,3,0,0,["cm",A0M(AQK)],Zc,0,B,[Cu],0,3,0,0,["cm",A0M(AP2)],Zd,0,B,[Cu],0,3,0,0,["cm",A0M(AQv)],Ze,0,B,[Cu],0,3,0,0,["cm",A0M(ATf)],Zf,0,B,[Cu],0,3,0,0,["cm",A0M(AOd)],Zg,0,B,[Cu],0,3,0,0,["cm",A0M(AXI)],Zh,0,B,[Cu],0,3,0,0,["cm",A0M(ANf)],Zi,0,B,[Cu],0,3,0,0,["cm",A0M(AUC)],AA8,0,B,[Cu],
0,3,0,0,["cm",A0M(AW0)],AA9,0,B,[Cu],0,3,0,0,["cm",A0M(AQj)],AA$,0,B,[Cu],0,3,0,0,["cm",A0M(AQR)],AA_,0,B,[Cu],0,3,0,0,["cm",A0M(AS0)],WB,0,B,[],3,3,0,0,0,WP,0,B,[WB],0,3,0,0,0,WO,0,B,[Cu],0,3,0,0,["cm",A0M(APd)],NK,0,B,[],0,3,0,0,0,JZ,0,B,[HL],0,3,0,0,["yj",A0N(Kr)],AHq,0,B,[],0,3,0,0,0,Ep,0,B,[],3,3,0,0,0,Cr,0,B,[Ep],3,3,0,0,0,Cq,0,B,[],3,3,0,0,["bN",A0M(APi),"ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe)],DO,0,B,[],3,3,0,0,0,Er,0,B,[Ep],3,3,0,0,0,Fb,0,B,[],3,3,0,0,0,EF,0,B,[],3,3,0,0,0,FJ,0,B,[EF],3,3,0,0,0,SH,
0,B,[Dx],0,3,0,0,0,Bd,0,B,[],0,3,0,0,["cM",A0L(ABz),"bJ",A0M(AO1)],Zm,0,B,[],0,3,0,0,0,AGz,0,B,[],0,3,0,0,0]);
$rt_metadata([ACH,0,B,[],3,3,0,0,0,Sx,0,B,[],0,3,0,0,0,MA,0,B,[],0,3,0,0,0,C2,0,MA,[],0,3,0,0,0,AGX,0,C2,[],0,3,0,0,0,E2,0,C2,[],0,3,0,0,0,Tf,0,C2,[],0,3,0,0,0,AEB,0,E2,[],0,3,0,0,0,Gz,0,E2,[],0,3,0,0,0,PV,0,Gz,[],0,3,0,0,0,AHP,0,Gz,[],0,3,0,0,0,AC$,0,E2,[],0,3,0,0,0,AFJ,0,C2,[],0,3,0,0,0,ACD,0,C2,[],0,3,0,0,0,Ug,0,B,[BM],3,3,0,0,0,AIa,0,B,[Ug],3,3,0,0,0,Sv,0,B,[Dx],0,3,0,0,0,Sw,0,B,[],0,3,0,0,0,CA,0,B,[CG,CR],1,3,0,0,0,Hj,0,CA,[],12,3,0,H$,0,Nk,0,B,[],3,3,0,0,0,VN,0,B,[Nk],3,3,0,0,0,W3,0,B,[],3,3,0,0,0,GV,
0,B,[VN,W3],1,3,0,0,0,Ki,0,GV,[],0,3,0,0,0,AD0,0,Ki,[],0,3,0,0,0,GJ,0,GV,[],1,3,0,0,0,Md,0,GJ,[],0,3,0,0,["lF",A0O(AO4)],Ef,0,CA,[],12,3,0,AV8,0,J8,0,B,[CG],1,3,0,0,0,No,0,J8,[],0,3,0,ADU,0,Rb,0,B,[],0,3,0,0,0,Ho,0,CA,[],12,0,0,AQF,0,LD,0,GJ,[],0,3,0,0,["lF",A0O(AMO)],AGs,0,BP,[],0,3,0,0,0,X4,0,El,[],0,3,0,0,0,Nn,0,B,[BM],3,3,0,0,0,AAx,0,B,[Nn],0,3,0,0,["Z",A0M(AT3)],AAy,0,B,[Nn],0,3,0,0,["Z",A0M(AKz)],HB,0,B,[],1,3,0,0,0,UG,0,B,[],3,3,0,0,0,L1,0,HB,[CG,IC,Jy,UG],1,3,0,0,0,KN,0,HB,[CG],1,3,0,0,0,Ij,0,B,[],0,
3,0,HI,0,OD,0,Cj,[],0,3,0,0,["br",A0L(AQc),"bR",A0N(AOx)],CH,0,Cj,[],1,3,0,0,["bR",A0N(G8)],QG,0,B,[],3,3,0,0,0,KT,0,B,[QG],3,3,0,0,0,KW,0,B,[],3,3,0,0,0,My,0,B,[],3,3,0,0,0]);
$rt_metadata([KD,0,CH,[Cq,KT,KW,My,DO,Fb,FJ],0,3,0,0,["g_",A0N(AWp),"cG",A0M(ATy),"br",A0L(AQs),"gE",A0L(AOm),"yn",A0L(AUi),"yW",A0L(AQh),"wd",A0M(AVt),"mY",A0M(ARU),"jl",A0M(ALB),"bR",A0N(APD),"jI",A0M(AJp),"bN",A0M(ASx),"cq",A0O(AOq),"ce",A0N(AQJ),"c2",A0N(ATp),"dc",A0O(AST),"dj",A0L(APn)],AGJ,0,KD,[],0,3,0,0,["gE",A0L(AQ0)],AHo,0,B,[],0,3,0,0,0,AEL,0,B,[BM],1,3,0,0,0,KU,0,L1,[],1,0,0,0,0,AEr,0,KU,[],0,0,0,0,0,LN,0,B,[],1,3,0,0,0,MJ,0,B,[],0,3,0,0,0,ACj,0,B,[],0,3,0,0,0,I7,0,B,[BM],3,3,0,0,0,OO,0,B,[I7],0,
3,0,0,["Z",A0M(AMX)],ON,0,B,[I7],0,3,0,0,["Z",A0M(ARV)],OL,0,B,[BY],0,3,0,0,["Z",A0M(ASF)],OK,0,B,[BY],0,3,0,0,["Z",A0M(ALa)],X,0,B,[],3,3,0,0,0,Wh,0,B,[X],0,3,0,0,["g",A0M(AW5)],Wi,0,B,[X],0,3,0,0,["g",A0M(APu)],Ym,0,B,[BS],0,3,0,0,["bw",A0M(AVQ)],Yk,0,B,[BS],0,3,0,0,["bw",A0M(AI2)],Yh,0,B,[BS],0,3,0,0,["bw",A0M(AMq)],Yg,0,B,[BS],0,3,0,0,["bw",A0M(ARR)],Yj,0,B,[BS],0,3,0,0,["bw",A0M(AMx)],Yi,0,B,[BS],0,3,0,0,["bw",A0M(AIh)],Yp,0,B,[BS],0,3,0,0,["bw",A0M(AL2)],Yo,0,B,[BS],0,3,0,0,["bw",A0M(AP1)],Yr,0,B,[BS],
0,3,0,0,["bw",A0M(AUl)],Yq,0,B,[BS],0,3,0,0,["bw",A0M(AIy)],Vy,0,B,[BS],0,3,0,0,["bw",A0M(AIV)],Vx,0,B,[BS],0,3,0,0,["bw",A0M(APB)],Vw,0,B,[BS],0,3,0,0,["bw",A0M(ARn)],Vr,0,B,[BS],0,3,0,0,["bw",A0M(AM2)],Vq,0,B,[BS],0,3,0,0,["bw",A0M(AIG)],Vo,0,B,[BS],0,3,0,0,["bw",A0M(AVZ)],Vn,0,B,[BS],0,3,0,0,["bw",A0M(AQd)],Vm,0,B,[BS],0,3,0,0,["bw",A0M(AUn)],Vl,0,B,[BS],0,3,0,0,["bw",A0M(AIp)],Vk,0,B,[BS],0,3,0,0,["bw",A0M(AT6)],Zu,0,B,[],0,0,0,0,0,HH,0,B,[],0,3,0,0,0,Q2,0,HH,[],0,3,0,0,0,AGK,0,B,[],0,3,0,0,0,NH,0,HH,[],
0,3,0,0,0,WE,0,B,[BM],3,3,0,0,0,Po,0,B,[WE],0,3,0,0,["N7",A0M(APG)],Xf,0,B,[X],0,3,0,0,["g",A0M(YW)],ZM,0,KN,[],0,0,0,0,0,Sm,0,B,[],0,3,0,0,0,JA,0,B,[],0,3,0,0,0,AEy,0,B,[Cq,DO],0,0,0,0,["bN",A0M(ASE),"cq",A0O(AWk),"ce",A0N(ATN),"c2",A0N(APL),"dc",A0O(AUa)],Ic,0,B,[],3,3,0,0,["za",A0L(ARE),"vW",A0L(AM_)]]);
$rt_metadata([Sh,0,B,[],3,0,0,0,0,ADR,0,B,[Ic,Cq,KW,Sh],0,3,0,0,["vW",A0L(AMY),"za",A0L(AJu),"yn",A0L(Pi),"yW",A0L(AA5),"wd",A0M(Qc),"mY",A0M(ATi),"c2",A0N(VL),"ce",A0N(N3),"cq",A0O(Og),"bN",A0M(PK),"hJ",A0M(AWC)],K0,0,B,[],3,3,0,0,0,Xp,0,B,[K0],0,3,0,0,["lr",A0M(APw)],Xq,0,B,[K0],0,3,0,0,["lr",A0M(AJM)],Xr,0,B,[X],0,3,0,0,["g",A0M(APJ)],Xk,0,B,[X],0,3,0,0,["g",A0M(AQL)],Xm,0,B,[Cr],0,3,0,0,["X",A0M(AV0)],IJ,0,B,[Cr],0,3,0,0,["X",A0M(ANc)],Xn,0,B,[X],0,3,0,0,["g",A0M(AUD)],Xo,0,B,[Er],0,3,0,0,["X",A0M(ALY)],ACB,
0,B,[],3,3,0,0,0,WT,0,B,[],0,3,0,0,0,Um,0,B,[Cr],0,3,0,0,["X",A0M(ANU)],Ul,0,B,[Cr],0,3,0,0,["X",A0M(AK8)],BZ,0,B,[],0,3,0,0,["bJ",A0M(AXB)],ET,0,B,[],3,3,0,0,0,AHC,0,B,[Cq,ET],0,3,0,0,["bN",A0M(ABS),"cq",A0O(ACU),"ce",A0N(AEt),"c2",A0N(AHE),"ha",A0N(APf)],AGS,0,B,[ET,Ic],0,3,0,0,["za",A0L(ARE),"vW",A0L(AM_),"ha",A0N(AXj),"hJ",A0M(AP9)],ADz,0,B,[],0,3,0,0,0,L0,0,B,[],0,3,0,0,0,Nj,0,B,[],0,3,0,0,0,AAi,0,B,[],0,3,0,0,0,FL,0,B,[Dx],0,0,0,0,0,AHL,0,B,[],0,3,0,0,0,ADx,0,B,[Dx],0,3,0,0,0,PD,0,B,[X],0,3,0,0,0,PC,0,
B,[X],0,3,0,0,["g",A0M(AJ0)],PB,0,B,[X],0,3,0,0,["g",A0M(AIZ)],Xx,0,B,[],0,0,0,0,0,PA,0,B,[Bg],0,3,0,0,["n",A0L(AIY)],PI,0,B,[Bg],0,3,0,0,["n",A0L(ANb)],PG,0,B,[Bg],0,3,0,0,["n",A0L(AX5)],PF,0,B,[Bg],0,3,0,0,["n",A0L(APW)],PE,0,B,[Bg],0,3,0,0,["n",A0L(ASG)],Pz,0,B,[Bg],0,3,0,0,["n",A0L(AW8)],AFy,0,B,[BM],1,3,0,0,0,Li,0,B,[],4,3,0,AOP,0,NC,0,B,[],3,3,0,0,0,Sn,0,B,[Bg],0,3,0,0,["n",A0L(AOb)],Sl,0,B,[Bg],0,3,0,0,["n",A0L(AIE)],Me,0,B,[],3,3,0,0,0,ACr,0,E0,[Em,CR,Me],0,3,0,0,["m$",A0M(AO9),"m9",A0M(Bt),"cU",A0L(ASb),
"uZ",A0M(BF),"ok",A0N(TT),"n$",A0M(EN),"pR",A0M(Yx),"i7",A0L(H7),"vN",A0N(ACV),"eZ",A0M(Ex)],AA6,0,B,[],3,3,0,0,0,FA,0,B,[],0,3,0,0,0,La,0,FA,[],0,3,0,0,0,Vs,0,FA,[],0,3,0,0,0,R9,0,FA,[],0,3,0,0,0,Hx,0,B,[],3,3,0,0,0,UV,0,B,[],3,3,0,0,0]);
$rt_metadata([RY,0,B,[],3,0,0,0,0,T5,0,B,[NC],0,3,0,0,0,AG7,0,B,[],0,3,0,0,0,WL,0,B,[],0,3,0,0,0,Ls,0,D$,[Em,CR],0,3,0,0,0,TP,0,B,[],0,3,0,0,0,YN,0,B,[],3,3,0,0,0,AE_,0,B,[YN],0,3,0,0,["cM",A0L(ALG)],WW,0,B,[],3,3,0,0,0,LZ,"JsFileHandle",6,B,[WW],0,3,0,0,["cM",A0L(APa)],Pp,0,B,[Bg],0,3,0,0,["n",A0L(AXa)],Hy,0,B,[CG],0,3,0,0,0,LS,0,B,[],0,3,0,0,0,Dv,0,B,[],0,3,0,0,0,Rw,0,B,[],0,3,0,0,0,Cs,0,B,[],0,3,0,0,0,LP,0,Ls,[],0,3,0,0,0,T0,0,B,[],0,3,0,0,0,AHJ,0,B,[CG],0,3,0,0,["bJ",A0M(AUH),"kY",A0M(AKT)],YY,0,B,[HL],
0,3,0,0,["yj",A0N(AP0)],S9,0,B,[],0,3,0,0,["cM",A0L(AJl),"bJ",A0M(AKD)],HV,0,B,[],3,3,0,0,0,G0,0,B,[HV,Em],0,0,0,0,["bJ",A0M(ALJ)],G_,0,G0,[],0,0,0,0,0,LJ,0,LN,[],1,3,0,0,0,Rx,0,LJ,[],0,3,0,0,0,Jb,0,El,[],0,3,0,0,0,N5,0,B,[I7],0,3,0,0,["Z",A0M(AXn)],N8,0,B,[BY],0,3,0,0,["Z",A0M(AWc)],N6,0,B,[BY],0,3,0,0,["Z",A0M(AJP)],IP,0,B,[],0,3,0,0,0,JR,0,CH,[KT,My],0,3,0,0,["jl",A0M(AOl),"cG",A0M(AU5),"br",A0L(ANX),"gE",A0L(AWT),"bR",A0N(AIx),"mO",A0N(AFI),"jI",A0M(AMh)],AB0,0,Cj,[],0,3,0,0,["cG",A0M(AI7),"br",A0L(AL_),
"bR",A0N(API)],VX,0,Cj,[],0,3,0,0,["cG",A0M(ARS),"br",A0L(AKF),"bR",A0N(AMT)],PX,0,CH,[Cq,ET],0,3,0,0,["ha",A0N(AOT),"bR",A0N(AMZ),"br",A0L(AMb),"bN",A0M(APK),"ce",A0N(AVg),"c2",A0N(AUu),"cq",A0O(AJ1)],Vp,0,CH,[ET],0,3,0,0,["ha",A0N(ALQ),"br",A0L(ASr),"bR",A0N(AKr),"cG",A0M(AL5)],OW,0,CH,[Cq],0,3,0,0,["bN",A0M(APi),"ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe),"br",A0L(AUk),"cG",A0M(AIW)],Vj,0,Cj,[],0,3,0,0,["br",A0L(AIw),"bR",A0N(AIu)],D6,0,Cj,[],0,3,0,0,["br",A0L(UF),"bR",A0N(Va)],SB,"SelectFileTest",5,D6,[],
0,3,0,0,0,Pk,0,CH,[],0,3,0,0,["br",A0L(AWm)],Oe,"RenderTexture",5,D6,[],0,3,0,0,["cG",A0M(AOj),"br",A0L(ALR),"bR",A0N(AWL)],Ve,"ScissorDemo",5,D6,[],0,3,0,0,["br",A0L(AXN),"bR",A0N(ANO)],U$,0,Cj,[],0,3,0,0,["br",A0L(AWh),"bR",A0N(AMe),"cG",A0M(ATQ)],JD,"ClipboardTest",5,D6,[Cq],0,3,0,0,["bN",A0M(APi),"ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(APp)],UQ,0,Cj,[],0,3,0,0,["br",A0L(AXA),"bR",A0N(ARW)],Hc,0,Cj,[Cq],1,3,0,0,["bN",A0M(APi),"ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe),"br",A0L(ADH)],V9,0,Hc,[],0,3,0,0,["ce",
A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe),"bR",A0N(ATs),"bN",A0M(AU1)],V8,0,Hc,[],0,3,0,0,["ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe),"bN",A0M(AW_),"br",A0L(ALM),"bR",A0N(AJz)],Z0,0,CH,[ET],0,3,0,0,["ha",A0N(AMU),"br",A0L(AVV),"bR",A0N(AUV),"cG",A0M(ANP)]]);
$rt_metadata([Yl,0,Cj,[Cq],0,3,0,0,["bN",A0M(APi),"ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe),"bR",A0N(AW3),"br",A0L(AOa),"cG",A0M(ATZ)],NT,0,JR,[],0,3,0,0,["gE",A0L(AKM),"mO",A0N(AX0)],Ji,0,B,[],0,3,0,0,0,ACA,0,B,[],3,3,0,0,0,ABN,0,B,[],0,3,0,0,0,AFa,0,B,[],3,3,0,0,0,AHX,0,B,[],0,3,0,0,0,Nw,0,B,[HV,CR],0,3,0,0,0,Kl,0,Nw,[],0,0,0,0,0,AHl,0,B,[],0,3,0,0,0,RG,0,B,[Cr],0,3,0,0,["X",A0M(AKk)],RE,0,B,[X],0,3,0,0,["g",A0M(ANm)],RF,0,B,[Fb],0,3,0,0,["g_",A0N(AVf)],PL,0,B,[FJ],0,3,0,0,["dj",A0L(ASN)],PM,0,B,[DO],0,3,
0,0,["dc",A0O(APc)],PJ,0,B,[Er],0,3,0,0,["X",A0M(AP3)],AHR,0,JA,[],0,3,0,0,0,Xg,0,B,[Cq],0,0,0,0,["bN",A0M(AKG),"cq",A0O(AIN),"ce",A0N(AKw),"c2",A0N(AJB)],Sd,0,B,[Cr],0,3,0,0,["X",A0M(AVz)],Sc,0,B,[Cr],0,3,0,0,["X",A0M(ASP)],Sb,0,B,[Fb],0,3,0,0,["g_",A0N(APq)],Sa,0,B,[Bg],0,3,0,0,["n",A0L(AIS)],R_,0,B,[Er],0,3,0,0,["X",A0M(AR1)],R$,0,B,[DO],0,3,0,0,["dc",A0O(AVJ)],HJ,0,BZ,[],0,3,0,0,0,AGa,0,B,[],3,3,0,0,0,Oa,0,B,[Cq],0,0,0,0,["bN",A0M(APi),"ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(AME)],N7,0,B,[],0,3,0,0,0,AFb,0,
B,[],0,3,0,0,0,Wy,0,B,[Cr],0,3,0,0,["X",A0M(ARl)],Wu,0,B,[Er],0,3,0,0,["X",A0M(AUA)],ADu,0,B,[],0,3,0,0,["bJ",A0M(AUq)],Wv,0,B,[Bg],0,3,0,0,["n",A0L(AXW)],Ww,0,B,[Bg],0,3,0,0,["n",A0L(AJR)],Cm,0,B,[],0,3,0,0,0,X_,0,B,[Cr],0,3,0,0,["X",A0M(APh)],Yb,0,B,[Er],0,3,0,0,["X",A0M(AJk)],AFj,0,B,[],0,3,0,0,0,Ya,0,B,[DO],0,3,0,0,["dc",A0O(ATo)],AHp,0,B,[],0,3,0,0,0,Oj,0,B,[ET],0,3,0,0,["ha",A0N(ARw)],Oh,0,B,[Cr],0,3,0,0,["X",A0M(AR4)],TG,0,B,[],3,3,0,0,0,AB1,0,B,[TG],0,3,0,0,0,Ox,0,B,[Cq],0,0,0,0,["cq",A0O(ATe),"ce",
A0N(AI_),"c2",A0N(AJd),"bN",A0M(AMC)],Un,0,B,[DO],0,3,0,0,["dc",A0O(ARu)],RL,0,B,[Cr],0,3,0,0,["X",A0M(AQ$)],S_,0,B,[Er],0,3,0,0,["X",A0M(AXC)],S$,0,B,[X],0,3,0,0,["g",A0M(ATW)],Ta,0,B,[X],0,3,0,0,["g",A0M(AKO)]]);
$rt_metadata([WG,0,B,[Cq],0,0,0,0,["c2",A0N(AJj),"cq",A0O(ATe),"bN",A0M(ASw),"ce",A0N(AXl)],C4,0,B,[],3,3,0,Ft,0,RI,0,B,[Cq],0,0,0,0,["cq",A0O(ATe),"ce",A0N(AOB),"c2",A0N(AJv),"bN",A0M(AML)],ABd,0,B,[DO],0,3,0,0,["dc",A0O(AVD)],ZE,0,B,[Cr],0,3,0,0,["X",A0M(ALx)],ZD,0,B,[Fb],0,3,0,0,["g_",A0N(APA)],ZC,0,B,[Fb],0,3,0,0,["g_",A0N(ALI)],ZB,0,B,[FJ],0,3,0,0,["dj",A0L(AQk)],ZF,0,B,[FJ],0,3,0,0,["dj",A0L(AUO)],Uk,0,B,[Cr],0,3,0,0,["X",A0M(AWz)],AA2,0,B,[Cr],0,3,0,0,["X",A0M(ALi)],AA4,0,B,[Er],0,3,0,0,["X",A0M(AJf)],AA3,
0,B,[DO],0,3,0,0,["dc",A0O(ATV)],R1,0,B,[Cr],0,3,0,0,["X",A0M(APr)],AGD,0,B,[],0,3,0,0,["bJ",A0M(ALs)],Df,0,B,[],3,3,0,AMV,0,Cn,0,CA,[],12,3,0,Xz,0,JH,0,B,[],0,3,0,0,0,IS,0,B,[],0,3,0,0,0,AE2,0,B,[],0,3,0,0,0,DQ,0,B,[],3,3,0,AI6,0,QR,0,B,[BM],3,3,0,0,0,Q_,0,B,[QR],0,3,0,0,["yz",A0N(ANq)],QS,0,B,[BM],3,3,0,0,0,Q9,0,B,[QS],0,3,0,0,["yz",A0N(AOF)],ADc,0,B,[],0,3,0,0,0,ABY,0,B,[BM],3,3,0,0,0,Kk,0,B,[Dx],0,3,0,0,["ej",A0L(AFO)],Zp,0,B,[],0,3,0,0,0,DZ,0,B,[],3,3,0,AQU,0,Hd,0,B,[],3,3,0,0,0,Qt,0,B,[Hd],0,3,0,0,["oG",
A0O(ATF)],Qu,0,B,[Hd],0,3,0,0,0,T8,0,B,[Cq],0,0,0,0,["bN",A0M(AXw),"cq",A0O(ASY),"ce",A0N(AXb),"c2",A0N(AQM)],Xj,0,B,[X],0,3,0,0,["g",A0M(ARM)],AAb,0,B,[X],0,3,0,0,["g",A0M(AQx)],AAa,0,B,[X],0,3,0,0,["g",A0M(AXD)],AAd,0,B,[X],0,3,0,0,["g",A0M(ANt)],AAc,0,B,[X],0,3,0,0,["g",A0M(AIA)],AH5,0,B,[],0,3,0,0,0,YI,0,B,[X],0,3,0,0,["g",A0M(AOH)],Xy,0,B,[Cr],0,3,0,0,["X",A0M(AN$)],U8,0,B,[Cq],0,0,0,0,["ce",A0N(AVT),"c2",A0N(AJj),"cq",A0O(ATe),"bN",A0M(AW9)],ABP,0,B,[],3,3,0,0,0,I8,0,B,[],0,3,0,0,0,JB,0,B,[],4,3,0,0,0,ACK,
0,B,[],0,3,0,0,0,Co,0,CA,[],12,3,0,ADD,0,AHy,0,B,[],0,3,0,0,0,AD2,0,B,[BM],4,3,0,0,0]);
$rt_metadata([ABb,0,B,[X],0,3,0,0,["g",A0M(AXG)],ABa,0,B,[X],0,3,0,0,["g",A0M(AQ6)],AH3,0,B,[],0,3,0,0,0,Py,0,B,[BS],0,3,0,0,["bw",A0M(AJw)],Tr,0,B,[],0,3,0,0,0,CX,0,B,[BM],1,3,0,0,0,AFs,0,CX,[],1,3,0,0,0,AGd,0,CX,[],1,3,0,0,0,ADg,0,CX,[],1,3,0,0,0,ADy,0,CX,[],1,3,0,0,0,AGH,0,CX,[],1,3,0,0,0,ZJ,0,B,[Bg],0,3,0,0,["n",A0L(AO8)],GP,0,CA,[],12,3,0,AQN,0,ACz,0,B,[],0,3,0,0,0,IL,0,B,[],0,3,0,0,0,XN,0,B,[],0,3,0,0,0,MP,0,B,[],0,3,0,0,0,ADS,0,B,[],4,3,0,0,0,WH,0,B,[],0,0,0,0,0,Qb,0,B,[Cq],0,0,0,0,["ce",A0N(AVT),"c2",
A0N(AJj),"cq",A0O(ATe),"bN",A0M(AX1)],ADZ,0,B,[BM],1,3,0,0,0,Yz,0,B,[EF],0,3,0,0,["dj",A0L(AXo)],AF7,0,B,[],0,3,0,0,0,AFm,0,B,[],3,3,0,0,0,Mv,0,B,[],3,3,0,0,0,Su,0,B,[Mv],0,3,0,0,["t6",A0M(AKX)],Pj,0,B,[BS],0,3,0,0,["bw",A0M(AVR)],Xb,0,B,[X],0,3,0,0,["g",A0M(AJ6)],AFY,0,B,[],0,3,0,0,0,RR,0,B,[Dx],0,3,0,0,0,ABV,0,B,[],0,3,0,0,0,O0,0,B,[X],0,3,0,0,["g",A0M(AMt)],UT,0,B,[],3,3,0,0,0,XH,0,B,[X],0,3,0,0,["g",A0M(AKY)],Fo,0,B,[],3,3,0,0,0,Pc,0,B,[Fo],0,0,0,0,["cy",A0L(B6),"b5",A0L(B9),"mv",A0L(Tk)],Gl,0,Jb,[],0,3,
0,0,0,Z7,0,Fa,[],0,3,0,0,0,XX,0,B,[X],0,3,0,0,["g",A0M(AWi)],AAS,0,B,[Bg],0,3,0,0,["n",A0L(AT7)],YK,0,B,[CG],0,3,0,0,["bJ",A0M(AI1),"nE",A0L(ATx),"kY",A0M(AS4)],AAk,0,Ea,[CG],0,3,0,0,0,F7,0,B,[],0,0,0,0,0,Io,0,B,[],4,3,0,0,0,XR,0,B,[],0,3,0,0,0,Na,0,B,[],1,3,0,0,0,AEj,0,CX,[],1,3,0,0,0,P1,0,B,[X],0,3,0,0,["g",A0M(AKf)],So,0,B,[X],0,3,0,0,["g",A0M(AJV)],SP,0,B,[X],0,3,0,0,["g",A0M(ARp)]]);
$rt_metadata([Fr,0,B,[Dx],0,3,0,0,["ej",A0L(ATA),"kg",A0L(ARD),"ki",A0O(TE),"fJ",A0M(AHk),"lL",A0M(AP8),"lC",A0M(AWE),"sK",A0N(ATL),"cq",A0O(AOk),"ce",A0N(AKJ),"c2",A0N(AQ5),"bN",A0M(AWj),"dc",A0O(ATw)],Gu,0,Fr,[],0,3,0,0,0,SI,0,Gu,[Ic],0,3,0,0,["za",A0L(ARE),"vW",A0L(AM_),"ej",A0L(AWg),"sK",A0N(AL$),"fJ",A0M(AI9),"lC",A0M(AS1),"lL",A0M(AUQ),"yA",A0L(ADb),"bN",A0M(APY),"ce",A0N(AM1),"cq",A0O(ATj),"hJ",A0M(AVc)],OB,0,B,[Bg],0,3,0,0,["n",A0L(ANv)],ADC,0,Fr,[],0,3,0,0,["ej",A0L(AUL),"ki",A0O(ANI),"fJ",A0M(ATS),
"cq",A0O(AVq),"ce",A0N(AUP),"c2",A0N(ARz),"bN",A0M(ARa),"dc",A0O(AMQ),"kg",A0L(AW1)],QH,0,Gu,[],0,3,0,0,["yA",A0L(ALC),"kg",A0L(AW6),"lC",A0M(AS9),"fJ",A0M(AXy),"lL",A0M(AJA)],Zl,0,B,[X],0,3,0,0,0,Up,0,Ea,[CG],0,3,0,0,0,QV,0,B,[Bg],0,3,0,0,["n",A0L(AUY)],Ph,0,B,[Bg],0,3,0,0,["n",A0L(AK7)],Wn,0,B,[],0,3,0,0,0,I$,0,B,[],0,3,0,0,0,X6,0,Fr,[],0,3,0,0,0,Wx,0,B,[],0,3,0,0,0,Vg,0,B,[Bg],0,3,0,0,["n",A0L(AKd)],Qe,0,B,[X],0,3,0,0,["g",A0M(AJh)],Qd,0,B,[X],0,3,0,0,["g",A0M(AJK)],Lg,0,B,[],0,3,0,0,0,CT,0,Bu,[],0,3,0,0,
0,AFH,0,Fa,[],0,3,0,0,0,Yy,0,B,[X],0,3,0,0,["g",A0M(AQ_)],ACP,0,B,[],3,3,0,0,0,AHI,0,B,[],0,3,0,0,0,NU,0,B,[X],0,3,0,0,["g",A0M(AIk)],RX,0,B,[X],0,3,0,0,0,Uy,0,B,[X],0,3,0,0,["g",A0M(AMs)],Ux,0,B,[X],0,3,0,0,["g",A0M(AWf)],Lm,0,Na,[],1,3,0,0,0,VU,0,Lm,[],0,3,0,0,0,AAJ,0,B,[X],0,3,0,0,["g",A0M(AV$)],AAG,0,B,[EF],0,3,0,0,["dj",A0L(AKb)],AAF,0,B,[EF],0,3,0,0,["dj",A0L(ARQ)],U6,0,B,[EF],0,3,0,0,["dj",A0L(ASm)],VB,0,B,[Bg],0,3,0,0,["n",A0L(AV1)],Tb,0,B,[BY],0,3,0,0,["Z",A0M(AIB)],AEl,0,B,[BM],1,3,0,0,0,W1,0,B,[BY],
0,3,0,0,["Z",A0M(AWV)],AFZ,0,B,[BS],0,3,0,0,0,AF_,0,B,[BS],0,3,0,0,0,O$,0,B,[X],0,3,0,0,["g",A0M(ALu)],O9,0,B,[X],0,3,0,0,["g",A0M(AUr)],NS,0,B,[X],0,3,0,0,["g",A0M(AUN)],Yt,0,B,[Bg],0,3,0,0,["n",A0L(AKv)],HA,0,Bu,[],0,3,0,0,0,OG,0,B,[Ep],0,3,0,0,0,AGP,0,B,[],0,3,0,0,0,Vb,0,D$,[Em,CR],0,3,0,0,0,Yu,0,B,[],0,3,0,0,0,X9,0,B,[],0,3,0,0,0,VF,0,B,[X],0,3,0,0,["g",A0M(AUv)]]);
$rt_metadata([TH,0,B,[X],0,3,0,0,["g",A0M(AVM)],O7,0,B,[X],0,3,0,0,["g",A0M(APP)],Y0,0,B,[X],0,3,0,0,["g",A0M(AWN)],Si,0,B,[X],0,3,0,0,["g",A0M(AKm)],RK,0,Ea,[CG],0,3,0,0,0,Jc,0,B,[],4,3,0,0,0,PO,0,B,[Bg],0,3,0,0,["n",A0L(ASz)],PP,0,B,[Bg],0,3,0,0,["n",A0L(AXf)],PQ,0,B,[Bg],0,3,0,0,["n",A0L(AJH)],PR,0,B,[Bg],0,3,0,0,["n",A0L(AKj)],PN,0,B,[Bg],0,3,0,0,["n",A0L(AU4)],Z_,0,B,[BY],0,3,0,0,["Z",A0M(AL1)],AAN,0,B,[],3,3,0,AZU,0,WQ,0,B,[],0,3,0,0,0,AAh,0,B,[Hd],0,3,0,0,["oG",A0O(AWs)],Ec,0,Bu,[],0,3,0,0,0,Pn,0,B,[],
0,3,0,0,0,Wa,0,B,[X],0,3,0,0,["g",A0M(AQp)],Wb,0,B,[X],0,3,0,0,["g",A0M(ASq)],AGY,0,B,[],0,3,0,0,0,VK,0,B,[],0,0,0,0,0,ACE,0,B,[],3,3,0,0,0,SW,0,B,[Nk],3,3,0,0,0,Pd,0,B,[SW],3,3,0,0,0,HC,0,B,[Pd],1,3,0,0,0,UH,0,HC,[],0,3,0,0,0,SN,0,B,[],3,3,0,0,0,Tz,0,B,[X],0,3,0,0,0,Im,0,G0,[],0,0,0,0,0,AAq,0,B,[BY],0,3,0,0,["Z",A0M(AUh)],AAp,0,B,[BY],0,3,0,0,["Z",A0M(ALU)],Zt,0,B,[BY],0,3,0,0,["Z",A0M(ANJ)],Zs,0,B,[BY],0,3,0,0,["Z",A0M(AOE)],Yc,0,B,[X],0,3,0,0,["g",A0M(AU0)],AB8,0,B,[X],0,3,0,0,0,AAl,0,B,[Cu],0,3,0,0,["cm",
A0M(ANx)],ACQ,0,B,[],0,3,0,0,0,AH$,0,B,[],0,3,0,0,0,Z8,0,B,[Bg],0,3,0,0,["n",A0L(AJE)],Z9,0,B,[Bg],0,3,0,0,["n",A0L(AOg)],FT,0,B,[],0,3,0,0,0,AA0,0,B,[X],0,3,0,0,["g",A0M(ANB)],LL,0,FT,[],0,3,0,0,0,Lh,0,FT,[],0,3,0,0,0,YU,0,B,[X],0,3,0,0,["g",A0M(AJJ)],RT,0,B,[],0,3,0,0,0,QQ,0,B,[X],0,3,0,0,["g",A0M(AQO)],SL,0,B,[Ep],0,3,0,0,["X",A0M(AX6)],JL,0,Ec,[],0,3,0,0,0,IA,0,Bu,[],0,3,0,0,0]);
$rt_metadata([MT,0,Bu,[],0,3,0,0,0,Rl,0,B,[X],0,3,0,0,["g",A0M(ASl)],AH6,0,B,[X],0,3,0,0,0,SC,0,B,[Bg],0,3,0,0,["n",A0L(AX8)],Sq,0,B,[SN],0,3,0,0,0,Sr,0,B,[Bg],0,3,0,0,["n",A0L(AJN)],Ry,0,B,[],1,3,0,0,0,Hk,0,B,[],0,3,0,0,0,Q1,0,B,[GD],3,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],E5,0,Ff,[Q1],1,3,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],Ri,0,E5,[],0,0,0,0,["m$",A0M(AO9)],NB,0,B,[X],0,3,0,0,["g",A0M(AMI)],XB,0,B,[X],0,3,0,0,["g",A0M(APX)],JY,0,B,[],0,3,0,0,["bJ",A0M(AFh)],M_,0,JY,[],0,3,0,0,["bJ",A0M(AKl)],E1,0,B,[],0,3,0,
0,["bJ",A0M(ACt)],GN,0,E1,[],0,3,0,0,0,Jo,0,E1,[],0,3,0,0,["bJ",A0M(AWn)],JO,0,E1,[],0,3,0,0,["bJ",A0M(AJm)],ADQ,0,HC,[],0,3,0,0,0,Ub,0,B,[Bg],0,3,0,0,["n",A0L(AOs)],Uc,0,B,[Bg],0,3,0,0,["n",A0L(AK_)],T_,0,B,[Bg],0,3,0,0,["n",A0L(AJF)],Ua,0,B,[Bg],0,3,0,0,["n",A0L(AOn)],Te,0,B,[Bg],0,3,0,0,["n",A0L(ATn)],Td,0,B,[Bg],0,3,0,0,["n",A0L(ARK)],Tc,0,B,[Bg],0,3,0,0,["n",A0L(AXT)],Q4,0,B,[Bg],0,3,0,0,["n",A0L(ARF)],Sp,0,B,[],3,3,0,0,0,R3,0,B,[Bg],0,3,0,0,["n",A0L(AKW)],AFS,0,B,[],0,3,0,0,0,ACm,0,B,[],0,3,0,0,0,Ws,0,
B,[Hx],0,3,0,0,["oi",A0N(AWB)],Pv,0,B,[X],0,3,0,0,["g",A0M(AQ1)],YE,0,B,[X],0,3,0,0,["g",A0M(ANA)],YD,0,B,[Mv],0,3,0,0,["t6",A0M(Lj)],Zj,0,BG,[],0,3,0,0,0,OQ,0,B,[Bg],0,3,0,0,["n",A0L(AO3)],OR,0,B,[Bg],0,3,0,0,["n",A0L(AVB)],OP,0,B,[Bg],0,3,0,0,["n",A0L(AIi)],Zr,0,B,[Bg],0,3,0,0,["n",A0L(AP6)],Zq,0,B,[Bg],0,3,0,0,["n",A0L(ATR)],QZ,0,B,[EF],0,3,0,0,["dj",A0L(ALZ)],UN,0,B,[Bg],0,3,0,0,["n",A0L(AOC)],UO,0,B,[Bg],0,3,0,0,["n",A0L(AVe)],AAY,0,B,[Bg],0,3,0,0,["n",A0L(AID)],AAT,0,B,[Bg],0,3,0,0,["n",A0L(AOG)],AAU,
0,B,[Bg],0,3,0,0,["n",A0L(AWR)],AAV,0,B,[Bg],0,3,0,0,["n",A0L(AQn)],AAW,0,B,[Bg],0,3,0,0,["n",A0L(AN0)]]);
$rt_metadata([NR,0,B,[EF],0,3,0,0,["dj",A0L(AVv)],Z2,0,B,[BS],0,3,0,0,0,VP,0,B,[Hx],0,3,0,0,["oi",A0N(AKq)],Fx,0,B,[],0,3,0,0,0,Sk,0,B,[BY],0,3,0,0,["Z",A0M(AL9)],AHD,0,B,[CG],0,3,0,0,["bJ",A0M(ARL)],Ov,0,B,[X],0,3,0,0,["g",A0M(APV)],ABh,0,B,[X],0,3,0,0,["g",A0M(AX3)],Jz,0,B,[BM],3,3,0,0,0,N1,0,B,[Jz],0,3,0,0,["t5",A0L(AOK)],NI,0,B,[Jz],0,3,0,0,["t5",A0L(AIn)],WV,0,B,[Hd],0,3,0,0,0,AAo,0,B,[BY],0,3,0,0,["Z",A0M(AN6)],K$,0,E5,[],1,0,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],XY,0,K$,[],0,0,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],Mn,
0,D$,[],1,0,0,0,0,XV,0,Mn,[],0,0,0,0,0,M1,0,E0,[Me],1,0,0,0,["eZ",A0M(AIl),"i7",A0L(ALL),"n$",A0M(AQG),"m$",A0M(APe)],XW,0,M1,[],0,0,0,0,["eZ",A0M(AIl),"m9",A0M(AQQ),"cU",A0L(APN),"cd",A0L(AMl),"ec",A0L(AJt)],XT,0,B,[Fo],0,0,0,0,["cy",A0L(AI$),"b5",A0L(ASk),"mv",A0L(AT$)],Rv,0,B,[Fo],3,3,0,0,0,XU,0,B,[Rv],0,0,0,0,0,ABq,0,B,[HL],0,3,0,0,0,Fp,0,B,[],0,0,0,0,0,Vh,0,Fp,[Fo],0,0,0,0,0,ACC,0,B,[X],0,0,0,0,0,W5,0,B,[],3,3,0,AY6,0,Tq,0,B,[CR],4,3,0,0,0,Uv,0,B,[X],0,3,0,0,["g",A0M(AQC)],Uu,0,B,[X],0,3,0,0,["g",A0M(AS5)],Xa,
0,E5,[],0,0,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],Rj,0,Ff,[],0,0,0,0,["eZ",A0M(AIl),"m$",A0M(AO9)],Qi,0,B,[X],0,3,0,0,["g",A0M(ALD)],N9,0,B,[],0,3,0,0,0,Ts,0,B,[],0,3,0,0,0,Hb,0,B,[],3,3,0,0,0,V2,0,B,[Hb],0,3,0,0,["j6",A0O(AQT)],V3,0,B,[Hb],0,3,0,0,["j6",A0O(AN7)],IM,0,B,[CR,CG],0,3,0,0,0,KA,0,B,[],3,3,0,0,0,T7,0,B,[KA],0,3,0,0,0,QF,0,B,[KA],3,3,0,0,0,AEP,0,B,[QF],0,3,0,0,0,UD,0,B,[Hb],0,3,0,0,["j6",A0O(ARG)],UC,0,B,[Ep],0,3,0,0,["X",A0M(AWy)],UB,0,B,[Ep],0,3,0,0,["X",A0M(ATb)],UE,0,B,[Hb],0,3,0,0,["j6",A0O(AQ8)],Gs,
0,CA,[],12,0,0,U2,0,ABs,0,B,[X],0,3,0,0,["g",A0M(AM6)],BN,0,B,[],1,0,0,0,["cs",A0O(Ii),"cw",A0P(Iw),"iw",A0L(AKC),"T",A0M(AVF),"b0",A0M(AVE),"fU",A0L(AWJ),"eI",A0L(JU)]]);
$rt_metadata([OI,0,B,[Bg],0,3,0,0,["n",A0L(ANY)],ABi,0,B,[X],0,3,0,0,["g",A0M(ARN)],ABj,0,B,[X],0,3,0,0,["g",A0M(AM8)],U9,0,B,[X],0,3,0,0,["g",A0M(ATg)],V1,0,B,[],32,0,0,AZF,0,AAM,0,B,[X],0,3,0,0,["g",A0M(AVS)],CU,0,BN,[],0,0,0,Nl,["c",A0O(AJS),"L",A0M(AKg)],He,0,B,[],0,0,0,0,0,Jt,0,BP,[],0,3,0,0,0,PY,0,B,[Bg],0,3,0,0,["n",A0L(AI8)],Z3,0,B,[BY],0,3,0,0,["Z",A0M(ASD)],AFe,0,B,[BM],3,3,0,0,0,WC,0,B,[BY],0,3,0,0,["Z",A0M(ASd)],T3,0,CU,[],0,0,0,0,["c",A0O(AJb),"L",A0M(AT0)],AAI,0,CU,[],0,0,0,0,["c",A0O(ALl)],RV,
0,CU,[],0,0,0,0,["c",A0O(AKx)],Vi,0,CU,[],0,0,0,0,["c",A0O(AJi),"L",A0M(ASn)],F4,0,CU,[],0,0,0,0,["c",A0O(AV3)],Ca,0,BN,[],1,0,0,0,["c",A0O(AXx),"b6",A0L(AU3),"L",A0M(AOU)],AGU,0,Ca,[],0,0,0,0,["bz",A0N(AUp),"cs",A0O(AMP),"cw",A0P(ALd),"L",A0M(AJg)],B8,0,BN,[],0,0,0,0,["c",A0O(ANF),"T",A0M(ASf),"b0",A0M(APO),"L",A0M(AS3),"eI",A0L(AK9)],JK,0,B8,[],0,0,0,0,["c",A0O(ARZ),"L",A0M(ATq)],D2,0,JK,[],0,0,0,0,["c",A0O(ALS),"T",A0M(AS_)],NZ,0,D2,[],0,0,0,0,["c",A0O(ASa),"L",A0M(AVL)],YQ,0,D2,[],0,0,0,0,["c",A0O(AJ$),
"L",A0M(AU$)],Tw,0,D2,[],0,0,0,0,["c",A0O(AK4),"L",A0M(AXZ)],VV,0,D2,[],0,0,0,0,["c",A0O(AIK),"L",A0M(ATK)],G1,0,B8,[],0,0,0,0,["c",A0O(AI4),"cs",A0O(AP_),"cw",A0P(AT4),"b0",A0M(APH),"fU",A0L(ASi),"eI",A0L(AWO)],Hh,0,B,[],1,0,0,0,0,Y,0,Hh,[],1,0,0,QJ,["dx",A0L(AKc),"fk",A0L(AJC),"ka",A0L(AUU),"hE",A0L(AWG)],AC2,0,Y,[],0,0,0,0,["m",A0M(C5),"dx",A0L(CZ),"fk",A0L(AMJ),"ka",A0L(AVs),"cM",A0L(ARb),"hE",A0L(AM0)],J5,0,Bu,[],0,3,0,0,0,Ek,0,BN,[],1,0,0,0,["b0",A0M(AT5),"L",A0M(AVW),"eI",A0L(AQA)],C7,0,Ek,[],0,0,0,0,
["c",A0O(AIM)],FG,0,C7,[],0,0,0,0,["c",A0O(AJU)],CV,0,Ek,[],0,0,0,0,["c",A0O(AI3)],EZ,0,C7,[],0,0,0,0,["c",A0O(AQi),"T",A0M(AX4)],Y3,0,C7,[],0,0,0,0,["c",A0O(AXm),"cs",A0O(AQ9)],Bf,0,B,[],1,0,0,0,0,Dm,0,BP,[],0,3,0,0,0,Om,0,Hh,[Em],0,0,0,0,["cM",A0L(ARg)],Qa,0,BN,[],0,0,0,0,["c",A0O(APk),"L",A0M(ASe)],ZS,0,B,[Em,CR],0,3,0,0,0,N$,0,B8,[],0,0,0,0,0,SF,0,B8,[],0,0,0,0,["c",A0O(AJO),"T",A0M(ARX),"L",A0M(AKE),"b0",A0M(AKa)],DL,0,B8,[],0,0,0,0,["c",A0O(AMy),"m",A0M(ANe),"b0",A0M(AJI),"T",A0M(AUI),"L",A0M(AMN)],J2,
0,DL,[],0,0,0,0,["m",A0M(AOV)],ACO,0,Ca,[],0,0,0,0,["bz",A0N(APl)],EA,0,Ca,[],0,0,0,0,["bz",A0N(NE),"b0",A0M(ASh)],QK,0,B8,[],0,0,0,0,["T",A0M(AQg),"c",A0O(AIz),"b0",A0M(AKs),"L",A0M(AVw)]]);
$rt_metadata([EM,0,Ca,[],0,0,0,0,["b6",A0L(AO2),"bz",A0N(ANV),"cs",A0O(AMv),"cw",A0P(AO_),"b0",A0M(AVn)],AHw,0,Ca,[],0,0,0,0,["bz",A0N(AIo)],ABK,0,Ca,[],0,0,0,0,["bz",A0N(AIU)],FP,0,B8,[],0,0,0,0,["T",A0M(AWM),"c",A0O(ARY),"b0",A0M(APm),"L",A0M(ATa)],AAn,0,FP,[],0,0,0,0,0,Wc,0,FP,[],0,0,0,0,0,ABw,0,CV,[],0,0,0,0,["c",A0O(ALr)],RM,0,CV,[],0,0,0,0,["c",A0O(AQV)],Gm,0,CV,[],0,0,0,0,["c",A0O(AUG),"T",A0M(AV9)],Rp,0,Gm,[],0,0,0,0,["c",A0O(AO5),"T",A0M(ARk)],FN,0,CV,[],0,0,0,0,["c",A0O(AXV)],OA,0,FN,[],0,0,0,0,["c",
A0O(AOo)],TU,0,CV,[],0,0,0,0,["c",A0O(AWY)],SQ,0,Gm,[],0,0,0,0,["c",A0O(AKH)],Xc,0,FN,[],0,0,0,0,["c",A0O(AJr)],TV,0,Ek,[],0,0,0,0,["c",A0O(AXF),"cs",A0O(AUX)],Qk,0,Ek,[],0,0,0,0,["c",A0O(ASj),"cs",A0O(AIF)],Fd,0,B,[],1,0,0,0,0,ABx,0,C7,[],0,0,0,0,["c",A0O(AJs)],YZ,0,EZ,[],0,0,0,0,["c",A0O(AQS)],Q6,0,FG,[],0,0,0,0,["c",A0O(AT8)],SK,0,C7,[],0,0,0,0,["c",A0O(ASc)],Wr,0,EZ,[],0,0,0,0,["c",A0O(AJG)],Tx,0,FG,[],0,0,0,0,["c",A0O(AUs)],Ll,0,BN,[],4,0,0,0,["c",A0O(APM),"L",A0M(AOD)],ADA,0,BN,[],0,0,0,0,["c",A0O(AJ8),
"L",A0M(AKo)],Qf,0,BN,[],0,0,0,0,["c",A0O(AOX),"L",A0M(AXP)],ZZ,0,BN,[],4,0,0,0,["c",A0O(ASV),"L",A0M(ALg)],Zo,0,BN,[],0,0,0,0,["c",A0O(ART),"L",A0M(AIm)],OS,0,BN,[],0,0,0,0,["c",A0O(AK6),"L",A0M(ANu)],AHd,0,B8,[],0,0,0,0,["c",A0O(AW7),"T",A0M(AKu),"iw",A0L(ARs),"L",A0M(AKt)],AC0,0,B8,[],4,0,0,0,["c",A0O(ARH),"T",A0M(ATU),"iw",A0L(AIf),"L",A0M(AXu)],AG2,0,BN,[],4,0,0,0,["c",A0O(APs),"L",A0M(ANo)],AFc,0,BN,[],0,0,0,0,["c",A0O(ARP),"L",A0M(ANa)],ABH,0,BN,[],0,0,0,0,["c",A0O(AOr),"L",A0M(ALk)],HE,0,B8,[],0,0,0,
0,["c",A0O(AJy),"T",A0M(AS8),"L",A0M(ATt)],AG9,0,HE,[],0,0,0,0,["c",A0O(ALq),"cs",A0O(AVI),"cw",A0P(AJc),"b0",A0M(AQI)],AEg,0,HE,[],0,0,0,0,["c",A0O(AP4)],P_,0,GQ,[IC],0,3,0,0,["nk",A0P(AM3),"mi",A0O(AKe),"iL",A0M(AKR),"nW",A0N(AU2)],TX,0,Ca,[],0,0,0,0,["bz",A0N(ALO),"cs",A0O(AJ3),"cw",A0P(ANs),"b0",A0M(AN8)],ABG,0,Ca,[],0,0,0,0,["bz",A0N(AQb)],OH,0,Ca,[],0,0,0,0,["bz",A0N(AT_)],HD,0,B,[],4,0,0,ATI,0,NO,0,Ca,[],0,0,0,0,["bz",A0N(AUg)],LV,0,B8,[],0,0,0,0,["T",A0M(AR_),"c",A0O(ALh),"cs",A0O(AN5),"cw",A0P(ALW),
"b0",A0M(AJa),"L",A0M(AU_)],Mb,0,B8,[],0,0,0,0,["T",A0M(AKQ),"c",A0O(AIL),"cs",A0O(ASv),"cw",A0P(AT9),"b0",A0M(ALP),"L",A0M(ASI)],D_,0,Ca,[],0,0,0,0,["bz",A0N(ATu),"cs",A0O(ARc),"cw",A0P(AKP),"b0",A0M(ATd)],XK,0,Fd,[],0,0,0,0,["ij",A0M(AK2),"vC",A0N(ATm)],XL,0,Fd,[],0,0,0,0,["ij",A0M(AUt),"vC",A0N(AWA)],AF8,0,B,[],0,0,0,0,0]);
$rt_metadata([AB4,0,B,[],0,0,0,0,0,LR,0,Bf,[],0,0,0,0,["F",A0L(AEp)],KR,0,Bf,[],0,0,0,0,["F",A0L(AE6)],AF1,0,Bf,[],0,0,0,0,["F",A0L(ATY)],AGy,0,Bf,[],0,0,0,0,["F",A0L(AVb)],AGB,0,Bf,[],0,0,0,0,["F",A0L(AMz)],LK,0,Bf,[],0,0,0,0,["F",A0L(AC4)],Mp,0,LK,[],0,0,0,0,["F",A0L(ADV)],AH8,0,Bf,[],0,0,0,0,["F",A0L(AN4)],Nz,0,Mp,[],0,0,0,0,["F",A0L(ABE)],AEG,0,Nz,[],0,0,0,0,["F",A0L(AQB)],AE0,0,Bf,[],0,0,0,0,["F",A0L(ALH)],ADr,0,Bf,[],0,0,0,0,["F",A0L(AQy)],ADd,0,Bf,[],0,0,0,0,["F",A0L(AWF)],AGG,0,Bf,[],0,0,0,0,["F",A0L(ARo)],AIe,
0,Bf,[],0,0,0,0,["F",A0L(AIC)],AF9,0,Bf,[],0,0,0,0,["F",A0L(AOw)],AFR,0,Bf,[],0,0,0,0,["F",A0L(ATB)],AGW,0,Bf,[],0,0,0,0,["F",A0L(ALE)],ACk,0,Bf,[],0,0,0,0,["F",A0L(AL8)],ABW,0,Bf,[],0,0,0,0,["F",A0L(AWx)],AGg,0,Bf,[],0,0,0,0,["F",A0L(AIq)],AGr,0,Bf,[],0,0,0,0,["F",A0L(APx)],ADO,0,Bf,[],0,0,0,0,["F",A0L(AMi)],AE3,0,Bf,[],0,0,0,0,["F",A0L(ANy)],AHN,0,Bf,[],0,0,0,0,["F",A0L(APz)],AGo,0,Bf,[],0,0,0,0,["F",A0L(AVA)],AEd,0,Bf,[],0,0,0,0,["F",A0L(ASS)],ADN,0,Bf,[],0,0,0,0,["F",A0L(ARd)],AIb,0,Bf,[],0,0,0,0,["F",A0L(ATO)],Kf,
0,Bf,[],0,0,0,0,["F",A0L(AE1)],AGZ,0,Kf,[],0,0,0,0,["F",A0L(AQ2)],AEK,0,LR,[],0,0,0,0,["F",A0L(AJZ)],ADJ,0,KR,[],0,0,0,0,["F",A0L(ANQ)],ADi,0,Bf,[],0,0,0,0,["F",A0L(APQ)],ADE,0,Bf,[],0,0,0,0,["F",A0L(AWl)],AEw,0,Bf,[],0,0,0,0,["F",A0L(AM7)],AEH,0,Bf,[],0,0,0,0,["F",A0L(AIr)],ADm,0,B,[],4,0,0,0,0,ACL,0,B,[],4,3,0,0,0,OU,0,B,[],0,3,0,0,0,AGk,0,B,[],0,3,0,0,0,AEa,0,B,[],4,3,0,0,0,WZ,0,Fp,[Fo],0,0,0,0,0,Tv,0,Fp,[Fo],0,0,0,0,0,AC1,0,B,[Ep],0,3,0,0,0,UK,0,B,[X],0,3,0,0,["g",A0M(ANn)],TI,0,B,[X],0,3,0,0,["g",A0M(ALc)],XF,
0,B,[Ep],0,0,0,0,["X",A0M(AMF)],YF,0,B,[X],0,3,0,0,0]);
$rt_metadata([Wm,0,B,[X],0,3,0,0,0,Y2,0,Y,[],0,0,0,0,["m",A0M(AMH)],Y1,0,Y,[],0,0,0,0,["m",A0M(AI0)],Qp,0,Y,[],0,0,0,0,["m",A0M(APF),"cM",A0L(ANC)],Qy,0,Y,[],0,0,0,0,["m",A0M(ATz)],Qw,0,Y,[],0,0,0,0,["m",A0M(AUf)],Qx,0,Y,[],0,0,0,0,["m",A0M(AQa)],QB,0,Y,[],0,0,0,0,["m",A0M(AMc)],QC,0,Y,[],0,0,0,0,["m",A0M(AIg)],Qz,0,Y,[],0,0,0,0,["m",A0M(ANH)],QA,0,Y,[],0,0,0,0,["m",A0M(AQe)],QD,0,Y,[],0,0,0,0,["m",A0M(AVN)],QE,0,Y,[],0,0,0,0,["m",A0M(ALw)],Qo,0,Y,[],0,0,0,0,["m",A0M(AX7)],Ra,0,Y,[],0,0,0,0,["m",A0M(ANN)],Qm,
0,Y,[],0,0,0,0,["m",A0M(ALv)],Qn,0,Y,[],0,0,0,0,["m",A0M(ANj)],Qs,0,Y,[],0,0,0,0,["m",A0M(AOZ)],Ql,0,Y,[],0,0,0,0,["m",A0M(AVk)],Qq,0,Y,[],0,0,0,0,["m",A0M(AKi)],Qr,0,Y,[],0,0,0,0,["m",A0M(ASH)],MX,0,B,[],3,3,0,0,0,UY,0,B,[MX],4,3,0,0,0,AEM,0,B,[Hx],0,3,0,0,0,C3,0,B,[],3,3,0,AGE,0,Ct,0,CA,[],12,3,0,AFG,0,DH,0,B,[],3,3,0,AJo,0,YB,0,B,[],0,3,0,0,0,S8,0,B,[X],0,3,0,0,["g",A0M(AJ_)],Ot,0,G1,[],0,0,0,0,["cs",A0O(AM$),"cw",A0P(AXU),"fU",A0L(ALf)],SA,0,Bu,[],0,3,0,0,0,AAf,0,Bu,[],0,3,0,0,0,XE,0,Gl,[],0,3,0,0,0,Sj,
0,Gl,[],0,3,0,0,0,Ns,0,Bu,[],0,3,0,0,0,PU,0,B,[X],0,3,0,0,0,PW,0,B,[X],0,3,0,0,["g",A0M(ANk)],Xw,0,B,[],0,3,0,0,0,ACg,0,B,[],0,3,0,0,0,R7,0,B,[X],0,3,0,0,["g",A0M(AXp)],ACJ,0,B,[],3,3,0,0,0,Rh,0,B,[Bg],0,3,0,0,0,WA,0,B,[X],0,3,0,0,0,WD,0,B,[X],0,3,0,0,["g",A0M(AWb)],XC,0,B,[MX],0,0,0,0,0,NY,0,B,[Bg],0,3,0,0,["n",A0L(AN3)],Vv,0,Y,[],0,0,0,0,["m",A0M(AV2)],N4,0,Y,[],0,0,0,0,["m",A0M(AJX)],Uf,0,Y,[],0,0,0,0,["m",A0M(AJD)],Ue,0,Y,[],0,0,0,0,["m",A0M(AM5)]]);
$rt_metadata([ZA,0,Y,[],0,0,0,0,["m",A0M(AOM)],QY,0,Y,[],0,0,0,0,["m",A0M(AV5)],P6,0,Y,[],0,0,0,0,["m",A0M(AR6)],S6,0,Y,[],0,0,0,0,["m",A0M(ATH)],NX,0,Y,[],0,0,0,0,["m",A0M(AXr)],N2,0,Y,[],0,0,0,0,["m",A0M(ALV)],Pu,0,Y,[],0,0,0,0,["m",A0M(AWe)],Rt,0,Y,[],0,0,0,0,["m",A0M(AQu)],RA,0,Y,[],0,0,0,0,["m",A0M(AS6)],V6,0,Y,[],0,0,0,0,["m",A0M(AVO)],UZ,0,Y,[],0,0,0,0,["m",A0M(AWS)],Of,0,Y,[],0,0,0,0,["m",A0M(ALF)],Ni,0,Y,[],0,0,0,0,["m",A0M(AR9)],T6,0,Ni,[],0,0,0,0,["m",A0M(AUJ)],Z4,0,B,[BY],0,3,0,0,["Z",A0M(ANw)],Z6,
0,B,[BY],0,3,0,0,["Z",A0M(AKh)],TO,0,B,[Jz],0,3,0,0,["t5",A0L(AUo)],X8,0,B,[BY],0,3,0,0,["Z",A0M(ASU)],X$,0,B,[BY],0,3,0,0,["Z",A0M(ARt)],WX,0,B,[BY],0,3,0,0,["Z",A0M(APT)],ACx,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.So=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument javaObject instanceof ","keydown","keyup","mousemove",
"mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ",
"vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown",
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE",
"#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ","CodiconDemo","RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","Editor0","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ",
"Consolas","Segoe UI","#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","java","example.java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",
", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","mermaid","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncFullParseFile","asyncParseFile","asyncParseFirstLines","/Model::parseFullFile",
"CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }"," name: ","File is too large: ",", size = ","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ",
"clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","storageSet","storageGet","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ",
"this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(",
"RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","/","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60",
"type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","wrong channel worker reply: channel = ",", expected ","wrong channel worker reply: counter = ","channel worker "," test passed","GRAYSCALE","RGBA","nwse-resize",
"nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/Viewport parsed in ","Illegal language: ","/Model::onFileIterativeParsed","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Expected "," ints to write, but "," written","/First lines parsed in ","/File structure parsed in ","Int","Iter","VP","Resolve","Rep","No definition or usages","fib(",") result = ",") time = ","/Resolved in ","readClipboardText error: ",
" ints to read, but "," read","Unknown scope type: ","Current Version: ","Last Parsed Version: ","Unexpected type: ","Unexpected ref node type: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit",
"javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo",
"Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical",
"ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000",
"#818594","#080808","file = ","file.content.length = "]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AKK(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CJ=Long_add;var II=Long_sub;var Cd=Long_mul;var AGe=Long_div;var AIT=Long_rem;var AYO=Long_or;var C1=Long_and;var A4x=Long_xor;var GY=Long_shl;var AY7=Long_shr;var Gf=Long_shru;var A4y=Long_compare;var Il=Long_eq;var A4z=Long_ne;var AYJ=Long_lt;var AMn=Long_le;var A4A=Long_gt;var AYG=Long_ge;var A4B=Long_not;var AZr=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AZv);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=We.prototype;c.f=c.Z;c=Wf.prototype;c.f=c.Z;c=Wd.prototype;c.f=c.Z;c=OE.prototype;c.f=c.Z;c=AEJ.prototype;c.get=c.Np;Object.defineProperty(c,"length",{get:c.MK});c=ACa.prototype;c.createEntityReference=c.F3;c.getElementById=c.J4;c.createTextNode=c.JC;c.hasChildNodes=c.HJ;c.querySelectorAll=c.FB;c.removeChild=c.Ma;c.cloneNode=c.DB;c.createComment=c.Oj;c.insertBefore=c.Gy;c.getElementsByTagNameNS=c.ME;c.hasAttributes=c.I8;c.normalize=c.Ov;c.hasChildNodesJS=c.Og;c.getElementsByTagName=c.No;c.appendChild
=c.D9;c.createAttributeNS=c.KA;c.dispatchEvent=c.NQ;c.replaceChild=c.EF;c.createElementNS=c.GW;c.createCDATASection=c.Mn;c.querySelector=c.I6;c.createElement=c.Lj;c.isSupported=c.Mp;c.importNode=c.GT;c.removeEventListener=c.GL;c.createAttribute=c.NT;c.createDocumentFragment=c.CG;c.createProcessingInstruction=c.FW;c.addEventListener=c.Lf;Object.defineProperty(c,"nodeName",{get:c.D8});Object.defineProperty(c,"documentElement",{get:c.Iv});Object.defineProperty(c,"childNodes",{get:c.L1});Object.defineProperty(c,
"prefix",{get:c.G4,set:c.OJ});Object.defineProperty(c,"implementation",{get:c.MS});Object.defineProperty(c,"textContent",{get:c.Ot,set:c.JA});Object.defineProperty(c,"parentNode",{get:c.J0});Object.defineProperty(c,"nextSibling",{get:c.Ih});Object.defineProperty(c,"nodeType",{get:c.LM});Object.defineProperty(c,"doctype",{get:c.H8});Object.defineProperty(c,"localName",{get:c.Ni});Object.defineProperty(c,"nodeValue",{get:c.HL,set:c.N6});Object.defineProperty(c,"firstChild",{get:c.Ny});Object.defineProperty(c,
"lastChild",{get:c.Lt});Object.defineProperty(c,"previousSibling",{get:c.DK});Object.defineProperty(c,"namespaceURI",{get:c.Fi});Object.defineProperty(c,"attributes",{get:c.G_});Object.defineProperty(c,"ownerDocument",{get:c.Fu});c=Pw.prototype;c.f=c.Z;c=AC8.prototype;c.removeEventListener=c.FD;c.dispatchEvent=c.GI;c.addEventListener=c.Ku;c=X3.prototype;c.onAnimationFrame=c.I$;c=X1.prototype;c.f=c.yz;c=XZ.prototype;c.handleEvent=c.cm;c=US.prototype;c.f=c.Z;c=Y_.prototype;c.handleEvent=c.cm;c=Za.prototype;c.handleEvent
=c.cm;c=Zb.prototype;c.handleEvent=c.cm;c=Zc.prototype;c.handleEvent=c.cm;c=Zd.prototype;c.handleEvent=c.cm;c=Ze.prototype;c.handleEvent=c.cm;c=Zf.prototype;c.handleEvent=c.cm;c=Zg.prototype;c.handleEvent=c.cm;c=Zh.prototype;c.handleEvent=c.cm;c=Zi.prototype;c.handleEvent=c.cm;c=AA8.prototype;c.handleEvent=c.cm;c=AA9.prototype;c.handleEvent=c.cm;c=AA$.prototype;c.handleEvent=c.cm;c=AA_.prototype;c.handleEvent=c.cm;c=WO.prototype;c.handleEvent=c.cm;c=AAx.prototype;c.f=c.Z;c=AAy.prototype;c.f=c.Z;c=OO.prototype;c.f
=c.Z;c=ON.prototype;c.f=c.Z;c=OL.prototype;c.f=c.Z;c=OK.prototype;c.f=c.Z;c=Po.prototype;c.accept=c.N7;c=N5.prototype;c.f=c.Z;c=N8.prototype;c.f=c.Z;c=N6.prototype;c.f=c.Z;c=Q_.prototype;c.f=c.yz;c=Q9.prototype;c.f=c.yz;c=Tb.prototype;c.f=c.Z;c=W1.prototype;c.f=c.Z;c=Z_.prototype;c.f=c.Z;c=AAq.prototype;c.f=c.Z;c=AAp.prototype;c.f=c.Z;c=Zt.prototype;c.f=c.Z;c=Zs.prototype;c.f=c.Z;c=AAl.prototype;c.handleEvent=c.cm;c=Sk.prototype;c.f=c.Z;c=N1.prototype;c.onTimer=c.t5;c=NI.prototype;c.onTimer=c.t5;c=AAo.prototype;c.f
=c.Z;c=Z3.prototype;c.f=c.Z;c=WC.prototype;c.f=c.Z;c=Z4.prototype;c.f=c.Z;c=Z6.prototype;c.f=c.Z;c=TO.prototype;c.onTimer=c.t5;c=X8.prototype;c.f=c.Z;c=X$.prototype;c.f=c.Z;c=WX.prototype;c.f=c.Z;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);