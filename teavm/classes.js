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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hC=f;}
function $rt_cls(cls){return Tf(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hs(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cc.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASs(t);}
function $rt_throwableCause(t){return A0F(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A5L());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A5M(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A5N());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BK=$rt_compare;var A5O=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var Jd=$rt_isInstance;var A5P=$rt_nativeThread;var A5Q=$rt_suspending;var A5R=$rt_resuming;var A5S=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bc=$rt_imul;var EX=$rt_wrapException;var A5T=$rt_checkBounds;var A5U=$rt_checkUpperBound;var A5V=$rt_checkLowerBound;var A5W=$rt_wrapFunction0;var A5X=$rt_wrapFunction1;var A5Y=$rt_wrapFunction2;var A5Z=$rt_wrapFunction3;var A50=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AJo=$rt_createCharArrayFromData;var A3S=$rt_createByteArrayFromData;var A4q=$rt_createShortArrayFromData;var DX=$rt_createIntArrayFromData;var A51=$rt_createBooleanArrayFromData;var A52=$rt_createFloatArrayFromData;var A53=$rt_createDoubleArrayFromData;var AII=$rt_createLongArrayFromData;var A5K=$rt_createBooleanArray;var DM=$rt_createByteArray;var A54=$rt_createShortArray;var B5=$rt_createCharArray;var BP=$rt_createIntArray;var A55=$rt_createLongArray;var ALE=$rt_createFloatArray;var A56
=$rt_createDoubleArray;var BK=$rt_compare;var A57=$rt_castToClass;var A58=$rt_castToInterface;var A59=Long_toNumber;var Bp=Long_fromInt;var A5$=Long_fromNumber;var D=Long_create;var FJ=Long_ZERO;var A5_=Long_hi;var GS=Long_lo;
function B(){this.$id$=0;}
function BE(a){return Tf(a.constructor);}
function AQo(a,b){return a!==b?0:1;}
function AMV(a){var b,c,d,e,f,g,h,i,j;b=MH(a);if(!b)c=C(0);else{d=(((32-Xi(b)|0)+4|0)-1|0)/4|0;e=B5(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Im((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hs(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function MH(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APK(a){var b,c,d;if(!Jd(a,Ex)&&a.constructor.$meta.item===null){b=new Uo;Y(b);N(b);}b=ALK(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function R2(){var a=this;B.call(a);a.BK=0;a.qz=null;}
function A4$(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AKL();AIl();AF1();AGI();AH3();AI8();AF$();AEq();AFD();AHt();AIk();AKk();AGt();AJC();AJa();AG8();AGm();AJh();AK1();AGa();AIO();AFF();AKr();AJ1();AIy();AHV();AHo();AKp();c=(AEE()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Ye(C(2),C(3));else{d=new R2;BC(d);e=new ABs;e.Am=d;f=new WM;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new PC;j.yp=i;j.yq=g;j.yr
=6;j.ys=e;j.yn=f;k=Bv(j,"f");i.onmessage=k;h=h+1|0;}l=I(L5,[E_(C(4),C(5),300),E_(C(6),C(7),300),E_(C(8),C(5),400),E_(C(9),C(7),400),E_(C(10),C(5),600),E_(C(11),C(7),600),E_(C(12),C(5),700),E_(C(13),C(7),700)]);m=Q(L5,1);m.data[0]=ASX(C(14),Fu(C(15),C(16)),C(5),400);b=(L2(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.ub;f=c.tq;i=new K;M(i);BM(H(H(i,C(17)),f),41);i=L(i);f=c.tn;o=c.r$;c=AXd($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BC(d);c=new ABt;c.A3=d;g=new ABr;e.then(Bv(c,"f"),Bv(g,"f"));}}
function AGO(b){var c,d,e,f,g,h,i,j;c=new AAA;d=new Un;d.ya=c;c.tW=d;d=new Ul;d.BQ=c;c.ov=d;e=new Um;e.zH=c;c.vu=new $rt_globals.ResizeObserver(Bv(e,"f"));d=new Uk;d.rF=c;c.w9=d;c.lv=1;d=new AAk;d.mw=new TG;e=new Yc;e.DN=null;e.mo=A6a;d.sy=e;BC(e);f=new AAm;f.zX=e;d.BM=f;d.Ba=b;g=b.length;h=0;while(h<g){e=b[h];i=new AAn;i.za=d;i.y_=h;f=Bv(i,"f");e.onmessage=f;e=b[h];f=AJA();e.postMessage(f);h=h+1|0;}d.iy=0;d.pl=BP(g);c.Br=d;c.qQ=(Ev()).getElementById("canvasDiv");d=AEE();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eu=d;c.qQ.appendChild(d);b=c.eu;d=ARr(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Ye(C(2),C(18));else{c.pR=A4W(c.eu,c.ov);b=new Ud;j=c.ov;AKK(b,e,new ABW,1,2.25,0.625);b.DL=new ABV;b.Da=j;c.hS=b;AR_(c.vu,c.eu,AU1());d=$rt_globals.window;j=c.w9;d.addEventListener("resize",Bv(j,"handleEvent"));j=new OO;b=c.hS;d=c.pR.ct;j.P=b;j.o=d;j.bw=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new Pj;El(b,j);d=$rt_globals.fetch("test.wasm");j
=new WU;d=d.then(Bv(j,"f"));j=new WT;e=d.then(Bv(j,"f"));j=new WR;d=new WQ;e.then(Bv(j,"f"),Bv(d,"f"));}else b=Bj(C(20),d)?A4R(j):(A1y(J(d)<=0?C(21):Dw(d,1))).bc(j);c.gF=b;S4(c);}c.eu.focus();}
var WL=G(0);
var Wo=G(0);
function ACW(){var a=this;B.call(a);a.m6=null;a.vx=null;a.d$=null;}
function Tf(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ACW;c.d$=b;d=c;b.classObject=d;}return c;}
function JS(a){if(a.m6===null)a.m6=AG5(a.d$);return a.m6;}
function Nb(a){var b,c,d,e;b=a.vx;if(b===null){if(ALf(a.d$)===null?0:1){b=Nb(HV(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d$.$meta.enclosingClass;if((b===null?null:Tf(b))!==null){b=$rt_str(a.d$.$meta.simpleName);if(b===null)b=C(21);}else{b=AG5(a.d$);d=RR(b,36);if(d==(-1)){e=RR(b,46);if(e!=(-1))b=Dw(b,e+1|0);}else{b=Dw(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.vx=b;}return b;}
function IQ(a){return a.d$.$meta.primitive?1:0;}
function HV(a){return Tf(ALf(a.d$));}
var AIS=G();
function Bv(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fe(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AIG=G();
function ALK(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AKe(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AKe(d[e],c))return 1;e=e+1|0;}return 0;}
function ALf(b){return b.$meta.item;}
function AG5(b){return $rt_str(b.$meta.name);}
function GZ(){var a=this;B.call(a);a.iS=null;a.nr=null;a.kM=0;a.k7=0;}
function A6b(){var a=new GZ();Y(a);return a;}
function A6c(a){var b=new GZ();Bm(b,a);return b;}
function Y(a){a.kM=1;a.k7=1;}
function Bm(a,b){a.kM=1;a.k7=1;a.iS=b;}
function AW7(a){return a;}
function ASs(a){return a.iS;}
function A0F(a){var b;b=a.nr;if(b===a)b=null;return b;}
var Ew=G(GZ);
function A6d(){var a=new Ew();AGB(a);return a;}
function AGB(a){Y(a);}
var Bu=G(Ew);
function A5M(a){var b=new Bu();A14(b,a);return b;}
function A14(a,b){Bm(a,b);}
var AJF=G(Bu);
var C7=G(0);
var CK=G(0);
var Km=G(0);
function BJ(){var a=this;B.call(a);a.cc=null;a.j$=0;}
var A6e=null;var A6f=null;var A6g=null;function Fd(){Fd=Bn(BJ);ATn();}
function AOM(){var a=new BJ();AEo(a);return a;}
function Hs(a){var b=new BJ();Js(b,a);return b;}
function EC(a,b,c){var d=new BJ();OH(d,a,b,c);return d;}
function AEo(a){Fd();a.cc=A6e;}
function Js(a,b){Fd();OH(a,b,0,b.data.length);}
function OH(a,b,c,d){var e;Fd();e=B5(d);a.cc=e;C6(b,c,e,0,d);}
function My(b){var c;Fd();c=AOM();c.cc=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.cc.data;if(b<c.length)return c[b];}d=new Ii;Y(d);N(d);}
function J(a){return a.cc.data.length;}
function Gr(a){return a.cc.data.length?0:1;}
function QV(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C6(a.cc,b,d,e,c);return;}}g=new BH;Y(g);N(g);}
function Ou(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ABR(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function NC(a,b){if(a===b)return 1;return ABR(a,b,0);}
function DB(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function J0(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cc.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JT(b);h=Je(b);while(true){f=a.cc.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hx(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cc.data[d]==e)break;d=d+(-1)|0;}return d;}f=JT(b);g=Je(b);while(true){if(d<1)return (-1);h=a.cc.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RR(a,b){return Hx(a,b,J(a)-1|0);}
function YD(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AZE(a,b){return YD(a,b,0);}
function QS(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AFI(a,b){return QS(a,b,J(a));}
function Cw(a,b,c){var d,e;d=BK(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d){Fd();return A6f;}if(!b&&c==J(a))return a;return EC(a.cc,b,c-b|0);}
function Dw(a,b){return Cw(a,b,J(a));}
function Q2(a,b,c){return Cw(a,b,c);}
function Fu(a,b){var c,d,e,f,g,h;if(Gr(b))return a;if(Gr(a))return b;c=B5(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return My(c);}
function ACf(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Dw(a,f));return L(d);}
function Z3(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cw(a,b,c+1|0);}
function AMT(a){return a;}
function Gt(a){var b,c,d,e,f;b=a.cc.data;c=B5(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cl(b){Fd();return b===null?C(23):b.cO();}
function NH(b){var c,d;Fd();c=new BJ;d=B5(1);d.data[0]=b;Js(c,d);return c;}
function Dm(b){var c;Fd();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BJ))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function N0(a){var b,c,d,e;a:{if(!a.j$){b=a.cc.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j$=(31*a.j$|0)+e|0;d=d+1|0;}}}return a.j$;}
function Mi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new F4;Bm(b,C(24));N(b);}A6h=1;d=new ZB;d.mV=Q(CZ,10);d.hZ=(-1);d.fN=(-1);d.bA=(-1);e=new G8;e.fs=1;e.bR=b;e.bg=B5(J(b)+2|0);C6(Gt(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.zE=g;e.hd=0;FS(e);FS(e);d.l=e;d.d2=0;d.nz=VO(d,(-1),0,null);if(!DD(d.l)){b=new Ki;h=d.l;MS(b,C(21),h.bR,h.ds);N(b);}if(d.rb)d.nz.eU();b=BL();h=new AAq;h.kq=(-1);h.o_=(-1);h.CA=d;h.A5=d.nz;h.lL=a;h.kq=0;g=J(a);h.o_=g;e=new ACg;i=h.kq;j=d.hZ;k=d.fN+1|0;l=d.bA
+1|0;e.iX=(-1);m=j+1|0;e.rN=m;e.ec=BP(m*2|0);f=BP(l);e.k1=f;Jx(f,(-1));if(k>0)e.pu=BP(k);Jx(e.ec,(-1));ADZ(e,a,i,g);h.cI=e;e.gA=1;n=0;m=0;if(!J(a)){f=Q(BJ,1);f.data[0]=C(21);}else{while(true){l=J(h.lL);if(!AEy(h))l=h.o_;e=h.cI;if(e.eR>=0&&AFz(e)==1){e=h.cI;e.eR=MG(e);if(MG(h.cI)==AGH(h.cI)){e=h.cI;e.eR=e.eR+1|0;}g=h.cI.eR;g=g<=l&&OX(h,g)?1:0;}else g=OX(h,h.kq);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BB(b,Q2(a,m,AHK(h)));m=AI9(h);n=g;}a:{BB(b,Q2(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(BG(b,
g)))break a;EN(b,g);}}if(g<0)g=0;f=Gp(b,Q(BJ,g));}return f;}
function AOm(a,b){return Ou(a,b);}
function ATn(){A6e=B5(0);A6f=AOM();A6g=new SO;}
var FA=G(GZ);
var In=G(FA);
var AJk=G(In);
var Es=G();
function HG(){Es.call(this);this.bp=0;}
var A6i=null;var A6j=null;function A1t(a){var b=new HG();AFb(b,a);return b;}
function AFb(a,b){a.bp=b;}
function J4(b){return (W4(A5D(20),b,10)).cO();}
function KP(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Du;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Du;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Du;Y(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=X$(P(b,f));if(i<0){j=new Du;k=Cw(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Du;l=Cw(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Du;k=Cw(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Du;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CX(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A6j===null){A6j=Q(HG,256);c=0;while(true){d=A6j.data;if(c>=d.length)break a;d[c]=A1t(c-128|0);c=c+1|0;}}}return A6j.data[b+128|0];}return A1t(b);}
function AUP(a){return a.bp;}
function A2D(a,b){if(a===b)return 1;return b instanceof HG&&b.bp==a.bp?1:0;}
function Xi(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I6(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AYn(a,b){b=b;return BK(a.bp,b.bp);}
function AKL(){A6i=F($rt_intcls());}
function GT(){var a=this;B.call(a);a.C=null;a.L=0;}
function A6k(){var a=new GT();M(a);return a;}
function A5D(a){var b=new GT();GN(b,a);return b;}
function M(a){GN(a,16);}
function GN(a,b){a.C=B5(b);}
function W4(a,b,c){return AJv(a,a.L,b,c);}
function AJv(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cs(a,b,b+1|0);else{Cs(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Im(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cs(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Im($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AJ8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cs(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cs(a,b,b+8|0);d=b;}else{Cs(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6l;AJ2(c,f);d=f.nb;g=f.m2;h=f.ri;i=1;j=1;if(h)j=2;k=9;l=ASY(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cs(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AI1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cs(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cs(a,b,b+8|0);d=b;}else{Cs(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A6m;AFU(c,f);g=f.nA;h=f.mO;i=f.q8;j=1;k=1;if(i)k=2;l=18;m=ARG(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cs(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANQ(p,FJ))d=0;else{d=GS(AGP(g,p));g=AUZ(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGP(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASY(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARG(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A6n.data;g=f.length-1|0;while(g>=0){if(IK(AUZ(b,Ci(c,f[g])),FJ)){d=d|e;c=Ci(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.p8(a.L,b);}
function ADQ(a,b,c){Cs(a,b,b+1|0);a.C.data[b]=c;return a;}
function M3(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=KL(a.C,d);}
function L(a){return EC(a.C,0,a.L);}
function ADA(a,b,c,d){return a.pQ(a.L,b,c,d);}
function WF(a,b,c,d,e){var f,g,h,i;Cs(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function J3(a,b){return a.pf(b,0,b.data.length);}
function Cs(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.j4((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var JK=G(0);
var K=G(GT);
function L$(){var a=new K();A2r(a);return a;}
function A2r(a){M(a);}
function H(a,b){var c;c=a.L;if(b===null)b=C(23);MB(a,c,b);return a;}
function BY(a,b){MB(a,a.L,b);return a;}
function U(a,b){W4(a,b,10);return a;}
function HL(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(A3A(b,FJ)){d=0;b=A49(b);}a:{if(DG(b,Bp(10))<0){if(d)Cs(a,c,c+1|0);else{Cs(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Im(GS(b),10);}else{g=1;h=Bp(1);i=Df(Bp(-1),Bp(10));b:{while(true){j=Ci(h,Bp(10));if(DG(j,b)>0){j=h;break b;}g=g+1|0;if(DG(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cs(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(IK(j,FJ))break a;e=a.C.data;c=f+1|0;e[f]=Im(GS((Df(b,j))),10);b=AIn(b,j);j=Df(j,Bp(10));f=c;}}}return a;}
function EH(a,b){AJ8(a,a.L,b);return a;}
function AEk(a,b){BM(a,b);return a;}
function Jw(a,b){MB(a,a.L,!b?C(32):C(33));return a;}
function AHx(a,b,c){var d,e,f,g,h,i;d=BK(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ii;Y(i);N(i);}
function UU(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ii;Y(f);N(f);}
function AYj(a,b,c,d,e){WF(a,b,c,d,e);return a;}
function ANF(a,b,c,d){ADA(a,b,c,d);return a;}
function AIz(a){return a.L;}
function Ed(a){return L(a);}
function APJ(a,b){M3(a,b);}
function AYG(a,b,c){ADQ(a,b,c);return a;}
function MB(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=C(23);else if(Gr(c))break a;M3(a,a.L+J(c)|0);d=a.L-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.L=a.L+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ii;Y(c);N(c);}
var E5=G(In);
var AKh=G(E5);
function A6o(a){var b=new AKh();AMY(b,a);return b;}
function AMY(a,b){Bm(a,b);}
var AJe=G(E5);
function A6p(a){var b=new AJe();AM8(b,a);return b;}
function AM8(a,b){Bm(a,b);}
var ABi=G(0);
var C_=G(0);
function BV(b,c){if(b!==null)b.b4();return c;}
var X8=G(0);
function Kd(){var a=this;B.call(a);a.ji=0;a.nW=0;a.np=0;}
var A6q=0;function Ez(a){A6q=A6q-1|0;}
function Hy(a,b,c){KD(a,AIY(b,c,400,0));}
function Lf(a,b){return Lr(a,b,0.875);}
function Lr(a,b,c){return Eo(a,b)+c|0;}
function ZT(){var a=this;Kd.call(a);a.i$=null;a.dc=null;a.wU=null;}
function ER(a){var b,c,d;b=a.dc;c=a.nW;d=a.np;b.clearRect(0.0,0.0,c,d);}
function Z_(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dc;d="center";c.textAlign=d;break a;case 2:c=a.dc;d="right";c.textAlign=d;break a;default:break a;}d=a.dc;c="left";d.textAlign=c;}}
function Cn(a,b){KD(a,b.qY);}
function KD(a,b){var c;if(a.wU!==b){c=a.dc;a.wU=b;c.font=b;}}
function AIY(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B0(a,b,c,d){var e,f,g;e=a.dc;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.dc.measureText(c).width;}
function J8(a,b,c,d){var e,f;e=a.dc;f=$rt_ustr(Hs(AJo([35,HX(b/16|0),HX(b%16|0),HX(c/16|0),HX(c%16|0),HX(d/16|0),HX(d%16|0)])));e.fillStyle=f;}
function AVJ(){return {alpha:false};}
var AIm=G();
var AKR=G();
function BO(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function AFM(b){return b!==null?b.gH():0;}
function BC(b){if(b!==null)return b;b=new F4;Bm(b,C(21));N(b);}
var BT=G(0);
function Nr(b){return b;}
var Ce=G(0);
function ABs(){B.call(this);this.Am=null;}
function A2T(a,b){var c;c=a.Am;c.qz=b;if(c.BK)AGO(b);}
var AGs=G();
function K8(b,c){return b.data[c];}
var AJR=G();
var AEz=G(0);
function E_(b,c,d){return ASX(C(34),Fu(C(15),b),c,d);}
var AKF=G(0);
var AGZ=G(0);
function L2(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C8(b,f+g|0);C6(c,0,d,f,g);return d;}
function Lv(b,c,d){C6(b,c,d,0,d.data.length);return d;}
function ZK(b,c,d){var e;if(c>0)C6(b,0,d,0,c);e=d.data.length;if(c<e)C6(b,c+1|0,d,c,e-c|0);return d;}
function AFE(b,c,d,e){var f;if(c>0)C6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C6(b,d,e,c,f-d|0);}return e;}
function C3(b){var c;c=new PT;c.kk=b;return c;}
function AE9(b,c){if(b.data.length!=c)b=C8(b,c);return b;}
function AGY(b,c,d){var e;e=c.data.length;if(e==d)c=C8(c,e*2|0);c.data[d]=b;return c;}
function ACa(b,c,d){var e;e=c.data.length;if(e==d)c=Oq(c,e*2|0);c.data[d]=b;return c;}
function Op(b){return KL(b,b.data.length);}
function L5(){var a=this;B.call(a);a.ub=null;a.tq=null;a.tn=null;a.r$=0;}
function ASX(a,b,c,d){var e=new L5();ASl(e,a,b,c,d);return e;}
function ASl(a,b,c,d,e){a.ub=b;a.tq=c;a.tn=d;a.r$=e;}
var AE4=G();
function AXd(b,c){return {style:b,weight:c};}
function ABt(){B.call(this);this.A3=null;}
function ALs(a,b){var c,d,e;c=a.A3;d=0;while(d<b.length){e=b[d];(Ev()).fonts.add(e);d=d+1|0;}c.BK=1;b=c.qz;if(b!==null)AGO(b);}
var ABr=G();
function A1K(a,b){$rt_globals.console.info("font load error "+b);}
var LJ=G();
var A6r=null;var A6s=null;function Bt(){if(A6r===null)A6r=AQP(A6t,0);return A6r;}
function En(){if(A6s===null)A6s=AQP(A6u,0);return A6s;}
function A3V(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N8(b)&&(e+f|0)<=N8(d)){a:{b:{if(b!==d){g=HV(BE(b));h=HV(BE(d));if(g!==null&&h!==null){if(g===h)break b;if(!IQ(g)&&!IQ(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d$;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AKe(n.constructor,o)?1:0)){NG(b,c,d,e,j);b=new Jf;Y(b);N(b);}j=j+1|0;k=m;}NG(b,c,d,e,f);return;}if(!IQ(g))break a;if(IQ(h))break b;else break a;}b=new Jf;Y(b);N(b);}}NG(b,c,
d,e,f);return;}b=new Jf;Y(b);N(b);}b=new BH;Y(b);N(b);}d=new F4;Bm(d,C(35));N(d);}
function C6(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N8(b)&&(e+f|0)<=N8(d)){NG(b,c,d,e,f);return;}b=new BH;Y(b);N(b);}
function NG(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E4(){return Long_fromNumber(new Date().getTime());}
function AGK(){return A5$($rt_globals.performance.now()*1000000.0);}
var AGX=G();
var AI$=G();
function Ye(b,c){var d,e,f;d=(Ev()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ev()).getElementById($rt_ustr(b)).appendChild(d);}
function AEE(){return (Ev()).createElement("canvas");}
function AHC(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ARr(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ALp=G();
var WM=G();
function AZw(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AG_=G();
function H4(b){return $rt_str(b);}
var AIv=G();
function KL(b,c){var d,e,f,g;b=b.data;d=B5(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Oq(b,c){var d,e,f,g;b=b.data;d=DM(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Jj(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C8(b,c){var d,e,f,g;d=b.data;e=AGG(HV(BE(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AGy(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));U(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function ASB(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));EH(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function AUr(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));f=e[d];AI1(c,c.L,f);d=d+1|0;}BY(c,C(38));return L(c);}
function Jx(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;Y(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AEY(b,c,d,e){var f,g;if(c>d){e=new BU;Y(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function K6(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A6a;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qe(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AJ9(b,c){return ABx(b,0,b.data.length,c);}
function ABx(b,c,d,e){var f,g,h,i,j;f=BK(c,d);if(f>0){g=new BU;Y(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AGD(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AFM(e[d])|0;d=d+1|0;}return c;}
var ACz=G(0);
var AJH=G();
function AXy(a,b){return a.NG(b);}
function AQl(a){return a.Q8();}
var AFS=G();
var Gf=G(0);
var SO=G();
var BH=G(Bu);
var AJ5=G();
function N8(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6v());}return b.data.length;}
function AGG(b,c){if(b===null){b=new F4;Y(b);N(b);}if(b===F($rt_voidcls())){b=new BU;Y(b);N(b);}if(c>=0)return ATJ(b.d$,c);b=new AEe;Y(b);N(b);}
function ATJ(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var F4=G(Bu);
var Jf=G(Bu);
function Dn(){B.call(this);this.m0=0;}
var A6w=null;var A6x=null;var A6y=null;var A6z=null;var A6A=null;var A6B=null;var A6C=null;var A6D=null;var A6E=null;var A6F=null;function AT_(a){var b=new Dn();AFu(b,a);return b;}
function AFu(a,b){a.m0=b;}
function PD(b){var c,d;c=A6B.data;if(b>=c.length)return AT_(b);d=c[b];if(d===null){d=AT_(b);A6B.data[b]=d;}return d;}
function Vq(b){var c,d;c=new BJ;d=B5(1);d.data[0]=b;Js(c,d);return c;}
function Mm(b){return b>=65536&&b<=1114111?1:0;}
function CS(b){return (b&64512)!=55296?0:1;}
function Dl(b){return (b&64512)!=56320?0:1;}
function Oz(b){return !CS(b)&&!Dl(b)?0:1;}
function Jr(b,c){return CS(b)&&Dl(c)?1:0;}
function EP(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JT(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Je(b){return (56320|b&1023)&65535;}
function FL(b){return G5(b)&65535;}
function G5(b){if(A6z===null){if(A6C===null)A6C=AKo();A6z=AFG((A6C.value!==null?$rt_str(A6C.value):null));}return SF(A6z,b);}
function Fo(b){return G3(b)&65535;}
function G3(b){if(A6y===null){if(A6D===null)A6D=AKM();A6y=AFG((A6D.value!==null?$rt_str(A6D.value):null));}return SF(A6y,b);}
function SF(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BK(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AB1(b,c){if(c>=2&&c<=36){b=X$(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function X$(b){var c,d,e,f,g,h,i,j,k,l;if(A6x===null){if(A6E===null)A6E=AJm();c=(A6E.value!==null?$rt_str(A6E.value):null);d=ASv(Gt(c));e=M9(d);f=BP(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Pg(d)|0;j=j+Pg(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A6x=f;}g=A6x.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BK(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Im(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HR(b){var c;if(b<65536){c=B5(1);c.data[0]=b&65535;return c;}return AJo([JT(b),Je(b)]);}
function CE(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Oz(b&65535))return 19;if(A6A===null){if(A6F===null)A6F=AH0();d=(A6F.value!==null?$rt_str(A6F.value):null);e=Q(WY,16384);f=e.data;g=DM(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=ND(P(d,l));if(m==64){l=l+1|0;m=ND(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,ND(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=ND(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOk(k,k+i|0,Oq(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOk(k,k+i|0,Oq(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A6A=C8(e,j);}e=A6A.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.tA)o=p+1|0;else{c=d.yo;if(b>=c)return d.yx.data[b-c|0];c=p-1|0;}}return 0;}
function KO(b){a:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HO(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CE(b)!=16?0:1;}
function Yw(b){switch(CE(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function RL(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Yw(b);}return 1;}
function AIl(){A6w=F($rt_charcls());A6B=Q(Dn,128);}
function AKo(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKM(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AJm(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AH0(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Wj=G(0);
var AAs=G(0);
var EZ=G(0);
var AIo=G();
function Ev(){return $rt_globals.window.document;}
function AZd(a){return a.IE();}
function A1b(a,b){return a.Kl($rt_str(b));}
function A02(a,b){a.HT($rt_str(b));}
function AWs(a,b){return a.NQ($rt_str(b));}
function ALI(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANy(a){return a.Rs();}
function A0$(a,b,c){return a.Qf($rt_str(b),$rt_str(c));}
function APu(a,b,c,d){a.C1($rt_str(b),Fe(c,"handleEvent"),d?1:0);}
function AVz(a){return a.O6();}
function AZU(a){return !!a.KK();}
function A1G(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQF(a){return a.H2();}
function AO$(a,b){a.P8($rt_str(b));}
function AQZ(a){return !!a.HK();}
function AUw(a){return a.Ku();}
function APY(a){return $rt_ustr(a.FO());}
function AMl(a,b){return a.Ib(b?1:0);}
function A2F(a){return a.KJ();}
function AXW(a,b,c){return a.R3($rt_str(b),$rt_str(c));}
function AQx(a,b,c){return a.Oo(b,c?1:0);}
function ATL(a,b,c){return !!a.JY($rt_str(b),$rt_str(c));}
function AUV(a){return a.I$();}
function AOW(a){return $rt_ustr(a.LG());}
function ANI(a,b){return !!a.E8(b);}
function AOx(a,b){return a.L8($rt_str(b));}
function AX6(a,b,c){return a.IC($rt_str(b),$rt_str(c));}
function AP6(a){return a.MU();}
function AVC(a,b){return a.Ry($rt_str(b));}
function AOw(a){return $rt_ustr(a.My());}
function AR2(a){a.HF();}
function ALy(a,b){return a.R6($rt_str(b));}
function ATh(a,b){return a.HY($rt_str(b));}
function AVW(a,b){return a.HD($rt_str(b));}
function A1z(a){return $rt_ustr(a.M6());}
function AV3(a,b,c){return a.PK(b,c);}
function AZ3(a,b){return a.FN(b);}
function ASq(a){return a.JK();}
function ARn(a,b,c){a.EE($rt_str(b),Fe(c,"handleEvent"));}
function AQ8(a,b,c){return a.GE(b,c);}
function ATb(a){return !!a.Q6();}
function AT$(a,b){return a.Iy($rt_str(b));}
function AZm(a,b,c,d){a.Cq($rt_str(b),Fe(c,"handleEvent"),d?1:0);}
function AND(a){return a.JL();}
function AWe(a,b,c){return a.Ia($rt_str(b),$rt_str(c));}
function AVg(a){return $rt_ustr(a.Nl());}
function A2A(a){return a.MM();}
function ARk(a){return a.MZ();}
function AVe(a){return a.JZ();}
function ARo(a,b,c){a.E7($rt_str(b),Fe(c,"handleEvent"));}
function AWB(a,b){return a.Lt(b);}
function AOD(a,b){a.F6($rt_str(b));}
function A0C(a){return $rt_ustr(a.Mr());}
function PC(){var a=this;B.call(a);a.yp=null;a.yq=null;a.yr=0;a.ys=null;a.yn=null;}
function ARX(a,b){var c,d,e,f,g;c=a.yp;d=a.yq;e=a.yr;f=a.ys;g=a.yn;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AJs=G();
function ASG(b){return Math.exp(b);}
function AIp(b){return Math.log(b);}
function Jl(b,c){return AYO(b,c);}
function AYO(b,c){return Math.pow(b,c);}
function DQ(){return AUi();}
function AUi(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ATM(b,c){return Math.max(b,c);}
function Wq(b){if(b<0)b= -b|0;return b;}
function AOI(b){return Math.abs(b);}
var Yp=G(0);
var RT=G(0);
var ZG=G(0);
var Tc=G(0);
var ADD=G(0);
var AB3=G(0);
var AIQ=G();
function AZD(a,b,c){a.E7($rt_str(b),Fe(c,"handleEvent"));}
function AYl(a,b,c){a.EE($rt_str(b),Fe(c,"handleEvent"));}
function AOY(a,b,c,d){a.Cq($rt_str(b),Fe(c,"handleEvent"),d?1:0);}
function AMz(a,b){return !!a.E8(b);}
function AWQ(a,b,c,d){a.C1($rt_str(b),Fe(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AEe=G(Bu);
var Ii=G(BH);
var AI4=G();
function AJA(){return "ping";}
function AHX(b){return b===AJA()?1:0;}
var Zj=G(0);
var X1=G(0);
function AAA(){var a=this;B.call(a);a.tW=null;a.ov=null;a.qQ=null;a.eu=null;a.vu=null;a.w9=null;a.pR=null;a.hS=null;a.lv=0;a.EO=0;a.zw=null;a.gF=null;a.Br=null;}
function Gj(a,b){var c;c=Ev();b=$rt_ustr(b);c.title=b;}
function S4(a){a.EO=$rt_globals.requestAnimationFrame(Bv(a.tW,"onAnimationFrame"));}
function Jv(a){a.lv=1;}
function AA8(a,b,c){var d,e;a.pR.er=BF(b,c);d=a.eu;e=b;d.width=e;d=a.eu;e=c;d.height=e;d=a.hS;X(d.c7,b,c);e=d.Y;d=d.c7;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gF.ce(a.hS.c7,Lo(a));a.gF.bM();}
function ZS(a,b){var c,d,e;c=a.zw;d=a.eu;if(BO(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.zw=b;}
function MY(a){return $rt_globals.performance.now()/1000.0;}
function Lo(a){return $rt_globals.window.devicePixelRatio;}
function Jc(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEt(null,b);else{c=new ADe;d=$rt_globals.window.showDirectoryPicker();e=new ADd;e.so=b;e.sp=c;d.then(Bv(e,"f"),Bv(c,"f"));}}
function Kf(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEt(b,null);else{c=new ADP;d=$rt_globals.window.showOpenFilePicker();e=new ADO;e.sQ=b;d.then(Bv(e,"f"),Bv(c,"f"));}}
function CU(a,b,c,d){var e,f,g,h;e=a.Br;f=e.iy;if(f>0){g=e.pl.data;f=f-1|0;e.iy=f;Tv(e,b,c,d,g[f]);}else{h=e.mw;e=new ADf;e.uz=b;e.AN=c;e.Aa=d;b=new Tw;b.ru=e;c=h.mv;b.AE=c;if(c===null)h.pe=b;else c.ug=b;h.mv=b;h.b2=h.b2+1|0;h.lc=h.lc+1|0;}}
function RH(a,b,c){var d,e;if(!L0()){b=new Bu;Bm(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new AAe;e.tk=b;b=ALm(c);d.then(Bv(e,"f"),Bv(b,"f"));}}
function Tx(a,b,c,d){var e,f,g;if(!L0()){b=new Bu;Bm(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=Gt(b);A4b();b=A6G;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ACG;e.vH=c;c=ALm(d);b.then(Bv(e,"f"),Bv(c,"f"));}}
function VF(a){return L0()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ALm(b){var c;c=new OZ;c.Aj=b;return c;}
var BD=G(0);
var AJO=G();
var V=G(0);
var AJP=G();
var ZL=G(0);
function Un(){B.call(this);this.ya=null;}
function AXV(a,b){var c,d;c=b;b=a.ya;if(!(!b.gF.cj(c/1000.0)&&!b.lv)){d=b.hS.c7;if(Bc(d.a,d.b)){b.lv=0;b.gF.bM();}}S4(b);}
function Ul(){B.call(this);this.BQ=null;}
function DC(a){Jv(a.BQ);}
var Y$=G(0);
function Um(){B.call(this);this.zH=null;}
function ANS(a,b,c){var d,e,f,g;c=a.zH;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eu){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lo(c);AA8(c,GG(f.width*g),GG(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AA8(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AHi=G();
function AU1(){return {box:'device-pixel-content-box'};}
function AR_(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CA=G(0);
function Uk(){B.call(this);this.rF=null;}
function AR1(a,b){b=a.rF;b.gF.ce(b.hS.c7,Lo(b));b.gF.bM();}
function AAk(){var a=this;B.call(a);a.mw=null;a.Ba=null;a.sy=null;a.pl=null;a.xc=0;a.iy=0;a.BM=null;}
function Tv(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.xc+1|0;a.xc=f;g=a.sy;h=CX(f);g.j6=Ox(g,g.j6,h);h=AB4(g,h);Wm(h,b);Wm(h,b);g.mr=g.mr+1|0;b=a.Ba[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BJ)g=$rt_ustr(c);else if(Jd(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Jd(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Jd(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof SQ)){b=new BU;c
=JS(BE(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.il;if(g===null)g=c.ga;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var UW=G(0);
function AUD(a,b){var c;c=a.b9();while(c.cD()){b.g(c.b_());}}
var HA=G(0);
function T0(a){var b,c;b=new AAh;c=new Q9;c.yk=a;b.Ay=c;return b;}
function AX_(a,b){var c,d;c=a.b9();d=0;while(c.cD()){if(b.H(c.b_())){c.pn();d=1;}}return d;}
var FC=G();
function ED(a){return a.c2()?0:1;}
function Gp(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=AGG(HV(BE(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B7(a);while(B_(f)){g=b.data;h=e+1|0;g[e]=Ca(f);e=h;}return b;}
function A0Q(a,b){var c;c=a.b9();while(c.cD()){if(BO(c.b_(),b)){c.pn();return 1;}}return 0;}
function H2(a,b){var c,d;c=0;d=b.b9();while(d.cD()){if(!a.zU(d.b_()))continue;c=1;}return c;}
var NJ=G(0);
var MK=G(0);
function Fq(){FC.call(this);this.b2=0;}
function ASc(a,b){a.ou(a.c2(),b);return 1;}
function B7(a){var b;b=new Xb;b.jk=a;b.qc=a.b2;b.lE=a.c2();b.hV=(-1);return b;}
function ARC(a,b,c){var d,e;if(b>=0&&b<=a.c2()){if(c.eG())return 0;d=c.b9();while(d.cD()){e=b+1|0;a.ou(b,d.b_());b=e;}return 1;}c=new BU;Y(c);N(c);}
function A1u(a,b,c){c=new Eg;Y(c);N(c);}
function La(a,b){var c,d;c=a.c2();d=0;while(true){if(d>=c)return (-1);if(BO(b,a.kG(d)))break;d=d+1|0;}return d;}
function AQR(a,b){var c,d;if(!Jd(b,MK))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BO(BG(a,d),BG(c,d)))return 0;d=d+1|0;}return 1;}
var Mj=G(Fq);
var OS=G(0);
var AD0=G(0);
function TG(){var a=this;Mj.call(a);a.pe=null;a.mv=null;a.lc=0;}
var Lw=G(0);
function Ee(){var a=this;B.call(a);a.o4=null;a.o9=null;}
var Ex=G(0);
var VE=G(0);
var Pf=G(0);
function Yc(){var a=this;Ee.call(a);a.j6=null;a.mo=null;a.DN=null;a.mr=0;}
function AHp(a,b){var c;c=AB4(a,b);if(c===null)return null;a.j6=K9(a,a.j6,b);a.mr=a.mr+1|0;return c.ks;}
function AB4(a,b){var c,d;c=a.j6;while(true){if(c===null)return null;d=MZ(a.mo,b,c.l4);if(!d)break;c=d>=0?c.b5:c.bV;}return c;}
function Ox(a,b,c){var d,e;if(b===null){b=new KJ;d=null;b.l4=c;b.ks=d;b.gM=1;b.gV=1;return b;}e=MZ(a.mo,c,b.l4);if(!e)return b;if(e>=0)b.b5=Ox(a,b.b5,c);else b.bV=Ox(a,b.bV,c);E0(b);return M8(b);}
function K9(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MZ(a.mo,c,b.l4);if(d<0)b.bV=K9(a,b.bV,c);else if(d>0)b.b5=K9(a,b.b5,c);else{e=b.b5;if(e===null)return b.bV;f=b.bV;g=Q(KJ,e.gM).data;h=0;while(true){b=e.bV;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b5;while(h>0){h=h+(-1)|0;j=g[h];j.bV=b;E0(j);b=M8(j);}e.b5=b;e.bV=f;E0(e);b=e;}E0(b);return M8(b);}
function AAm(){B.call(this);this.zX=null;}
function AAn(){var a=this;B.call(a);a.za=null;a.y_=0;}
function AUU(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.za;d=a.y_;AHX(b.data);e=c.mw;f=e.pe;if(f===null)g=null;else{g=f.ug;e.pe=g;if(g!==null)g.AE=null;else e.mv=null;e.lc=e.lc-1|0;e.b2=e.b2+1|0;g=f.ru;}if(g!==null)Tv(c,g.uz,g.AN,g.Aa,d);else{h=c.pl.data;i=c.iy;c.iy=i+1|0;h[i]=d;}c=c.BM;b=b.data;if(!AHX(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;Y(b);N(b);}if(b.length<1){b=new BU;AGB(b);N(b);}e=CX(b[0]);c=AHp(c.zX,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?H4(Nr(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A3E(Nr(e)):(e instanceof $rt_globals.File?1:0)?AKa(null,Nr(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AKa(Nr(e),null);k=l;}c.g(h);}}
function AE_(){var a=this;B.call(a);a.ct=null;a.jB=null;a.EY=null;a.er=null;}
function A4W(a,b){var c=new AE_();A1q(c,a,b);return c;}
function A1q(a,b,c){var d,e,f,g;a.er=null;a.jB=b;d=new YL;d.bG=CN(Q(Ct,0));d.oy=CN(Q(Ct,0));d.bT=CN(Q(CD,0));d.fv=CN(Q(EK,0));d.cS=CN(Q(CW,0));d.gP=CN(Q(EW,0));d.hg=CN(Q(E9,0));d.mm=CN(Q(V,0));d.mY=CN(Q(V,0));d.dq=c;a.ct=d;e=$rt_globals.window;f=Q(C_,14);g=f.data;d=new AC1;d.q$=a;g[0]=C4(a,b,C(41),d);d=new AC2;d.z9=a;g[1]=C4(a,b,C(42),d);d=new AC3;d.xZ=a;g[2]=C4(a,b,C(43),d);d=new AC4;d.wc=a;g[3]=C4(a,b,C(44),d);d=new AC5;d.tN=a;g[4]=C4(a,b,C(45),d);d=new AC6;d.rr=a;g[5]=C4(a,b,C(46),d);d=new AC7;d.BZ=a;g[6]
=C4(a,b,C(47),d);d=new AC8;d.zJ=a;g[7]=C4(a,b,C(48),d);d=new AC9;d.xC=a;g[8]=C4(a,b,C(49),d);d=new AC$;d.vK=a;g[9]=C4(a,b,C(50),d);d=new VU;d.vf=a;g[10]=C4(a,b,C(51),d);d=new VV;d.up=a;e.addEventListener("paste",Bv(d,"handleEvent"),!!1);g[11]=Vm(a,e,C(52),d);d=new VW;d.wR=a;g[12]=C4(a,e,C(53),d);d=new VX;d.Bx=a;g[13]=C4(a,e,C(54),d);c=new Ri;c.CL=f;a.EY=c;e=new ADW;e.yA=b;b.onpointerdown=Bv(e,"f");e=new ADX;e.xM=b;b.onpointerup=Bv(e,"f");}
function WG(){return (Ev()).activeElement;}
function C4(a,b,c,d){b.addEventListener($rt_ustr(c),Bv(d,"handleEvent"));return Vm(a,b,c,d);}
function Vm(a,b,c,d){var e;e=new Y7;e.Em=b;e.Eo=c;e.En=d;return e;}
function ABu(a,b){var c;c=new AB6;c.wb=b;return c;}
function E$(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jB.getBoundingClientRect();e=BF(GG((b.clientX-d.left)*c),GG((b.clientY-d.top)*c));f=AJZ(a.er);d=new OM;ABT(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.Ec=f;return d;}
function V0(a,b,c){var d,e,f,g;d=new Qm;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ABT(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.oQ=0;d.eh=e;d.bm=f;d.jS=c;d.zM=g;return d;}
function D8(a,b){b.stopPropagation();b.preventDefault();}
function NX(){var a=this;B.call(a);a.pz=null;a.ch=null;a.Y=null;a.l6=0;a.AD=null;a.ED=0;a.Dq=0;a.k9=null;a.kZ=null;a.DK=null;a.Fb=null;a.uO=null;a.xf=null;a.iT=null;a.ih=null;a.j0=null;a.DS=null;a.r_=null;a.c7=null;a.BF=null;a.pM=0;a.mG=0;a.od=0;a.n3=0;a.lp=0;a.n$=null;a.ok=0.0;a.pU=0.0;}
function AKK(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c7=new Bg;a.pM=0;a.n$=new ADb;a.pz=c;a.l6=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.Y=b;a.ch=KH(c,4,4,1);i=ALE(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B5(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Ra;Jy();c=A6H;m.eV=b;m.h5=c;m.t1=j.length/c.nd|0;m.By
=l.length;n=b.createBuffer();m.w6=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.we=null;n=b.createBuffer();m.vQ=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.r_=m;a.Dq=NC(g,C(56));c=new Y8;c.d4=b;a.AD=c;a.ok=e;a.pU=f;d=b.getParameter(3379);a.ED=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Di,9);i=k.data;c=A3H(b);a.k9=c;i[0]=c;c=A4z(b,C(58));a.kZ=c;i[1]=c;c=new Zu;H9(c,b,C(59),
C(60),A6H);a.DK=c;i[2]=c;c=A5o(b);a.Fb=c;i[3]=c;c=new PJ;VM(c,b,C(61),C(62));a.uO=c;i[4]=c;c=A5A(b);a.xf=c;i[5]=c;c=A4f(b);a.iT=c;i[6]=c;c=A5j(b);a.ih=c;i[7]=c;c=A5k(b);a.j0=c;i[8]=c;a.DS=k;ADH(b,C(63));}
function Is(a,b,c){return Gy(a,b,c,400,0);}
function HJ(a,b,c){return KH(a.pz,b,c,0);}
function D5(a,b,c,d){return KH(a.pz,b,c,d);}
function ADp(a,b,c,d,e,f){var g,h;Cn(a.ch,c);g=D5(a,Lf(a.ch,b)+(d*2|0)|0,e,f);Cn(g,c);B0(g,b,d,LL(c,e));h=CV(a);CM(h,g);Ez(g);return h;}
function EJ(a,b){var c,d,e,f,g;c=a.Y;d=b.bn;e=b.bs;f=b.bf;g=b.bC;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B$(a,b){var c;if(b==a.mG)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.mG;a.mG=b;return c;}
function NF(a,b,c){LT(a,b.a,b.b,c);}
function LT(a,b,c,d){var e,f;e=d.a;f=d.b;a.n3=1;a.lp=1;d=a.n$;d.tD=b;d.tE=c;d.tC=e;d.tB=f;ABU(a);}
function Gb(a){a.n3=0;a.lp=0;ABU(a);}
function ABU(a){var b,c,d,e,f,g;b=a.od;c=a.n3;if(b!=c){a.od=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.od&&a.lp){a.lp=0;d=a.Y;e=a.n$;b=e.tD;c=a.c7.b-e.tE|0;f=e.tB;c=c-f|0;g=e.tC;d.scissor(b,c,g,f);}}
function F2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.r_;c=a.pM;d=b.h5.Ag;e=b.eV;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eV;h=b.w6;e.bindBuffer(34962,h);i=b.h5.qu.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eV;m=k.jI;n=k.gw;o=b.h5.nd*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gw|0;j=j+1|0;}a:{e=b.we;if(e!==null){c=0;b.eV.bindBuffer(34962,e);i=b.h5.zs.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eV;j=e.jI;p=e.gw;m=e.sh;n=b.h5.yy;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gw|0;g=g+1|0;}}}q=b.vQ;if(q===null){c=b.t1;if(c>0)b.eV.drawArrays(4,0,c);}else{b.eV.bindBuffer(34963,q);k=b.eV;g=b.By;k.drawElements(4,g,5123,0);}a.pM=d;}
function Bs(a,b,c,d,e){Gv(a,a.k9);GF(a.k9,a.Y,b,c,d,a.c7);d=a.k9;FE(a.Y,d.Be,e);F2(a);}
function AEg(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gv(a,a.ih);GF(a.ih,a.Y,b,c,d,a.c7);j=a.ih;d=a.Y;k=j.wC;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.wB;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ih;FE(a.Y,d.xs,i);F2(a);}
function Mc(a,b,c,d,e,f,g,h){var i,j;Gv(a,a.j0);GF(a.j0,a.Y,b,c,d,a.c7);d=a.j0;i=a.Y;j=d.tZ;i.uniform2f(j,e,f);FE(i,d.yd,g);d=a.j0;FE(a.Y,d.w8,h);F2(a);}
function DJ(a,b,c,d,e,f,g,h,i){var j;j=!i?a.uO:a.xf;Gv(a,j);AK8(j,a.Y,!i?a.pU:a.ok);GF(j,a.Y,b,c,d,a.c7);N4(j,a.Y,f);AEl(j,a.Y,f,e);AJ7(j,a.Y,g,h);F2(a);}
function CV(a){var b,c;b=new Iw;c=a.AD;b.eT=new Bg;b.eL=c;b.f4=c.d4.createTexture();A6I=A6I+1|0;return b;}
function M2(a,b){ADH(a.Y,b);}
function Gv(a,b){var c,d;if(b!==a.BF){c=a.Y;d=b.bE;c.useProgram(d);a.BF=b;}}
function Ud(){var a=this;NX.call(a);a.Da=null;a.DL=null;}
function Gy(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ch;g=AIY(b,c,d,e);KD(f,g);h=f.dc.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,C(64));m=Eo(f,C(65));h=new LA;n=g;h.oj=b;h.o1=c;h.CG=d;h.CW=e;h.ep=i;h.eI=j;h.Cx=l;h.p6=k;h.qY=n;h.ts=CY(i);h.DA=CY(h.eI);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.CC=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Ct=b;return h;}
function Cx(){B.call(this);this.x=null;}
function El(a,b){a.x=b;}
function A2B(a,b){return 0;}
function YL(){var a=this;B.call(a);a.bG=null;a.oy=null;a.bT=null;a.fv=null;a.cS=null;a.gP=null;a.hg=null;a.mm=null;a.mY=null;a.dq=null;a.fa=null;a.xH=0;}
function Tr(a,b){var c,d,e,f;DC(a.dq);c=(B3(!b.jS?a.oy:a.bG)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].H(b);if(f)break;if(b.oQ)break;e=e+1|0;}return f;}
function RF(a,b,c){var d,e,f;DC(a.dq);d=(B3(a.gP)).data;e=d.length;f=0;while(f<e){if(d[f].h$(b,c))return 1;f=f+1|0;}return 0;}
function AC1(){B.call(this);this.q$=null;}
function AZO(a,b){var c;c=a.q$;if(Tr(c.ct,V0(c,b,1)))D8(c,b);}
function AC2(){B.call(this);this.z9=null;}
function AZY(a,b){var c;c=a.z9;if(Tr(c.ct,V0(c,b,0)))D8(c,b);}
function AC3(){B.call(this);this.xZ=null;}
function AQC(a,b){var c,d,e,f,g,h,i;c=a.xZ;if(c.er!==null){a:{b:{d=E$(c,b);e=c.ct;DC(e.dq);f=e.fa;if(f!==null)f.g(d);else{g=(B3(e.bT)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bU(d))break a;i=i+1|0;}}}}D8(c,b);}}
function AC4(){B.call(this);this.wc=null;}
function AYE(a,b){var c,d,e,f,g,h;c=a.wc;b.button;if(c.er!==null)a:{d=E$(c,b);c=c.ct;e=b.button;DC(c.dq);if(c.fa===null){f=(B3(c.bT)).data;g=f.length;h=0;while(h<g){b=f[h].cn(d,e);if(b!==null){c.fa=b;c.xH=e;break a;}h=h+1|0;}}}}
function AC5(){B.call(this);this.tN=null;}
function AYQ(a,b){var c,d,e,f,g,h,i;c=a.tN;b.button;if(c.er!==null){d=E$(c,b);e=c.ct;f=b.button;DC(e.dq);if(f==e.xH&&e.fa!==null)e.fa=null;g=(B3(e.bT)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dB(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D8(c,b);}}
function AC6(){B.call(this);this.rr=null;}
function AR7(a,b){var c,d,e,f,g,h,i,j,k;c=a.rr;if(c.er!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=E$(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DC(e.dq);i=(B3(e.fv)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dy(f,d,h))break b;k=k+1|0;}}D8(c,b);}}
function AC7(){B.call(this);this.BZ=null;}
function AOX(a,b){var c,d,e,f,g,h,i,j;c=a.BZ;if(c.er!==null){d=E$(c,b);e=c.ct;f=b.button;g=b.detail;DC(e.dq);h=(B3(e.bT)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cy(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D8(c,b);}}
function AC8(){B.call(this);this.zJ=null;}
function A21(a,b){var c,d,e,f,g,h,i;c=a.zJ;if(c.er!==null){d=E$(c,b);e=c.ct;DC(e.dq);f=(B3(e.cS)).data;g=f.length;h=0;a:{while(h<g){if(f[h].H(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D8(c,b);}}
function AC9(){B.call(this);this.xC=null;}
function AOu(a,b){var c,d,e,f,g,h;b=a.xC.ct;if(b.fa!==null){c=En();d=Cl(b.fa);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(B3(b.mY)).data;g=f.length;h=0;while(h<g){f[h].f();h=h+1|0;}DC(b.dq);}
function AC$(){B.call(this);this.vK=null;}
function ASO(a,b){var c,d,e;b=a.vK.ct;c=(B3(b.mm)).data;d=c.length;e=0;while(e<d){c[e].f();e=e+1|0;}if(b.fa!==null)b.fa=null;DC(b.dq);}
function VU(){B.call(this);this.vf=null;}
function A2C(a,b){var c;c=a.vf;if(c.er!==null)E$(c,b);}
function VV(){B.call(this);this.up=null;}
function AQj(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.up;if(WG()===c.jB){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B3(c.ct.hg)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cC();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dq;m=new Pw;m.vW=k;m.vX=l;g.getAsString(Bv(m,"accept"));D8(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function VW(){B.call(this);this.wR=null;}
function AQH(a,b){var c;c=a.wR;if(WG()===c.jB&&RF(c.ct,ABu(c,b),0))D8(c,b);}
function VX(){B.call(this);this.Bx=null;}
function AZ5(a,b){var c;c=a.Bx;if(WG()===c.jB&&RF(c.ct,ABu(c,b),1))D8(c,b);}
var ABN=G(0);
var ABW=G();
function KH(a,b,c,d){var e,f,g,h,i;e=new ZT;e.ji=d;A6q=A6q+1|0;e.nW=b;e.np=c;f=(Ev()).createElement("canvas");e.i$=f;g=b;f.width=g;h=e.i$;f=c;h.height=f;if(!d)g=e.i$.getContext("2d");else{i=e.i$;h=AVJ();g=i.getContext("2d",h);}e.dc=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ABV=G();
function APz(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function OO(){var a=this;B.call(a);a.P=null;a.o=null;a.bw=null;}
var KB=G();
var A6a=null;function MZ(a,b,c){return b.ms(c);}
function AF1(){A6a=new KB;}
function AHw(){var a=this;B.call(a);a.dm=null;a.gd=null;a.db=0;}
function CN(a){var b=new AHw();AOU(b,a);return b;}
function AOU(a,b){a.dm=b;}
function MN(a,b){return a.dm.data[b];}
function Ba(a,b){var c,d,e;c=a.db;d=a.dm;if(c==d.data.length)a.dm=C8(d,c+4|0);d=a.dm.data;e=a.db;a.db=e+1|0;d[e]=b;a.gd=null;}
function Sf(a,b){var c,d,e,f;c=0;while(true){d=a.dm.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.db=a.db-1|0;a.gd=null;}c=c+1|0;}}
function B3(a){var b;b=a.gd;if(!(b!==null&&b.data.length==a.db))a.gd=C8(a.dm,a.db);return a.gd;}
var D$=G(0);
var Ct=G(0);
var CD=G(0);
function AYf(a,b){return 0;}
function ATu(a,b,c){return null;}
function AL6(a,b,c){return 0;}
function A0g(a,b,c,d){return 0;}
var EK=G(0);
var CW=G(0);
var EW=G(0);
var Dd=G(0);
var E9=G(0);
function Ri(){B.call(this);this.CL=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BF(a,b){var c=new Bg();QK(c,a,b);return c;}
function AJZ(a){var b=new Bg();ANC(b,a);return b;}
function QK(a,b,c){a.a=b;a.b=c;}
function ANC(a,b){a.a=b.a;a.b=b.b;}
function Co(a,b){a.a=b.a;a.b=b.b;}
function X(a,b,c){a.a=b;a.b=c;}
function AH5(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function APq(a,b){var c;a:{b:{if(a!==b){if(BE(b)!==BE(a))break b;if(!JY(a,b))break b;}c=1;break a;}c=0;}return c;}
function JY(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ADb(){var a=this;B.call(a);a.tD=0;a.tE=0;a.tC=0;a.tB=0;}
var AG1=G();
var AID=G(0);
function Y8(){B.call(this);this.d4=null;}
function Oa(){var a=this;B.call(a);a.bE=null;a.Fd=null;}
function AJ_(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bt(),g);Bk(En(),C(74));Bk(En(),d);Bk(En(),C(74));b=new Bu;Bm(b,g);N(b);}
function Di(){var a=this;Oa.call(a);a.xB=null;a.sE=null;a.nS=null;}
function A6J(a,b,c,d){var e=new Di();H9(e,a,b,c,d);return e;}
function H9(a,b,c,d,e){var f,g,h,i,j,k;a.Fd=e;f=AJ_(b,35633,c);d=AJ_(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bE=g;h=e.t_.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bE;k=c.jI;c=c.sM;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bE;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADH(b,C(75));a.nS=new Bg;c=a.bE;a.xB=b.getUniformLocation(c,"uResolution");c=a.bE;a.sE=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new K;M(c);H(H(c,C(76)),d);Bm(b,L(c));N(b);}
function AFi(a,b,c){var d,e,f;if(!JY(a.nS,c)){Co(a.nS,c);d=a.xB;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GF(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sE;b.uniform4f(e,i,l,h,j);AFi(a,b,f);}
function AKP(){Di.call(this);this.Be=null;}
function A3H(a){var b=new AKP();AX3(b,a);return b;}
function AX3(a,b){var c;Jy();H9(a,b,C(59),C(77),A6H);c=a.bE;a.Be=b.getUniformLocation(c,"uColor");}
function Fr(){Di.call(this);this.tI=null;}
function A4z(a,b){var c=new Fr();ABw(c,a,b);return c;}
function A6K(a,b,c){var d=new Fr();ABA(d,a,b,c);return d;}
function ABw(a,b,c){ABA(a,b,C(59),c);}
function ABA(a,b,c,d){Jy();H9(a,b,c,d,A6H);c=a.bE;a.tI=b.getUniformLocation(c,"sDiffuse");}
function N4(a,b,c){var d;d=a.tI;b.uniform1i(d,0);b.activeTexture(33984);c=c.f4;b.bindTexture(3553,c);}
var Zu=G(Di);
function AFV(){Fr.call(this);this.Cn=null;}
function A5o(a){var b=new AFV();ARD(b,a);return b;}
function ARD(a,b){var c;ABw(a,b,C(78));c=a.bE;a.Cn=b.getUniformLocation(c,"uContrast");}
function Hv(){var a=this;Fr.call(a);a.r2=null;a.sW=null;a.tX=null;a.At=null;a.qG=0.0;}
function A6L(a,b,c){var d=new Hv();VM(d,a,b,c);return d;}
function VM(a,b,c,d){ABA(a,b,c,d);c=a.bE;a.r2=b.getUniformLocation(c,"uTexTransform");c=a.bE;a.sW=b.getUniformLocation(c,"uColor");c=a.bE;a.tX=b.getUniformLocation(c,"uBgColor");c=a.bE;a.At=b.getUniformLocation(c,"uTextPow");}
function AK8(a,b,c){var d;if(a.qG!==c){a.qG=c;d=a.At;b.uniform2f(d,c,0.0);}}
function AJ7(a,b,c,d){FE(b,a.sW,c);FE(b,a.tX,d);}
function AEl(a,b,c,d){var e,f,g,h,i,j;c=c.eT;e=c.a;f=c.b;g=d.bn;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.bf/h;j=d.bC/j;c=a.r2;b.uniform4f(c,g,i,h,j);}
var PJ=G(Hv);
var AHN=G(Hv);
function A5A(a){var b=new AHN();AWX(b,a);return b;}
function AWX(a,b){VM(a,b,C(61),C(79));}
function AIR(){var a=this;Fr.call(a);a.wf=null;a.wd=null;a.sX=null;}
function A4f(a){var b=new AIR();AN2(b,a);return b;}
function AN2(a,b){var c,d;ABw(a,b,C(80));c=a.bE;a.wf=b.getUniformLocation(c,"uColorB");d=a.bE;a.wd=b.getUniformLocation(d,"uColorF");d=a.bE;a.sX=b.getUniformLocation(d,"uContrast");}
function AKj(){var a=this;Di.call(a);a.xs=null;a.wC=null;a.wB=null;}
function A5j(a){var b=new AKj();AWZ(b,a);return b;}
function AWZ(a,b){var c;Jy();H9(a,b,C(59),C(81),A6H);c=a.bE;a.xs=b.getUniformLocation(c,"uColor");c=a.bE;a.wC=b.getUniformLocation(c,"uPoints1");c=a.bE;a.wB=b.getUniformLocation(c,"uPoints2");}
function AEP(){var a=this;Di.call(a);a.w8=null;a.tZ=null;a.yd=null;}
function A5k(a){var b=new AEP();AVX(b,a);return b;}
function AVX(a,b){var c;Jy();H9(a,b,C(59),C(82),A6H);c=a.bE;a.w8=b.getUniformLocation(c,"uColor");c=a.bE;a.tZ=b.getUniformLocation(c,"uBaseline");c=a.bE;a.yd=b.getUniformLocation(c,"uScaleHExp");}
var Z4=G(0);
var ALn=G(0);
function FE(b,c,d){var e,f,g,h;e=d.bn;f=d.bs;g=d.bf;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ADH(b,c){var d,e;d=b.getError();if(d){b=Bt();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Y7(){var a=this;B.call(a);a.Em=null;a.Eo=null;a.En=null;}
function Ra(){var a=this;B.call(a);a.eV=null;a.h5=null;a.w6=null;a.we=null;a.vQ=null;a.t1=0;a.By=0;}
function CH(){var a=this;B.call(a);a.El=null;a.fS=0;}
function DK(a,b,c){a.El=b;a.fS=c;}
function G_(){var a=this;CH.call(a);a.t_=null;a.qu=null;a.zs=null;a.nd=0;a.yy=0;a.Ag=0;}
var A6H=null;var A6M=null;function Jy(){Jy=Bn(G_);APc();}
function APc(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G_;c=Q(Ei,2);d=c.data;A1Z();d[0]=A6N;d[1]=A6O;Jy();DK(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.p4.fS){case 0:f=f+l.gw|0;h=h+1|0;break a;case 1:e=e+l.gw|0;g=g+1|0;break a;default:}}i=i|1<<l.jI;k=k+1|0;}b.t_=c;b.nd=e;b.yy=f;b.Ag=i;c=Q(Ei,g);m=c.data;b.qu=c;c=Q(Ei,h);n=c.data;b.zs=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.p4.fS){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A6H
=b;c=Q(G_,1);c.data[0]=b;A6M=c;}
var Mt=G(0);
var S7=G(0);
var AB0=G(0);
var GV=G();
function MW(){GV.call(this);this.Cd=null;}
function AFB(){var a=this;MW.call(a);a.Do=0;a.nm=0;a.lG=null;a.m3=null;a.uK=null;}
function AQP(a,b){var c=new AFB();A1I(c,a,b);return c;}
function A1I(a,b,c){a.Cd=b;b=new K;M(b);a.lG=b;a.m3=B5(32);a.Do=c;AFv();a.uK=A6P;}
function ABf(a,b,c,d){var e,$$je;e=a.Cd;if(e===null)a.nm=1;if(!(a.nm?0:1))return;a:{try{e.mW(b,c,d);break a;}catch($$e){$$je=EX($$e);if($$je instanceof I9){}else{throw $$e;}}a.nm=1;}}
function XD(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AJM(b,c,d-c|0);e=DM(Bd(16,Be(e.length,1024)));g=AJz(e,0,e.data.length);h=a.uK;i=new QF;b=DM(1);j=b.data;j[0]=63;Hn();k=A6Q;i.nV=k;i.nq=k;c=j.length;if(c&&c>=i.wA){i.Ek=h;i.sK=b.hC();i.Dj=2.0;i.wA=4.0;i.yi=B5(512);i.rp=DM(512);k=A6R;if(k===null){i=new BU;Bm(i,C(84));N(i);}i.nV=k;i.nq=k;a:while(true){if(i.ly==3){f=new C$;Y(f);N(f);}i.ly=2;b:{while(true){try{k=AEH(i,f,g);}catch($$e){$$je=EX($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(I3(k))
{d=Ch(f);if(d<=0)break b;k=Eu(d);}else if(If(k))break;h=!Mk(k)?i.nV:i.nq;c:{if(h!==A6R){if(h===A6S)break c;else break b;}d=Ch(g);b=i.sK;l=b.data.length;if(d<l){k=A6T;break b;}ADn(g,b,0,l);}Fx(f,f.Z+K$(k)|0);}}l=If(k);ABf(a,e,0,g.Z);PS(g);if(!l){while(true){d=i.ly;if(d!=2&&d!=4){f=new C$;Y(f);N(f);}f=A6U;if(f===f)i.ly=3;l=If(f);ABf(a,e,0,g.Z);PS(g);if(!l)break;}return;}}N(AWy(f));}i=new BU;Bm(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BM(BY(a.lG,b),10);b=a.lG;c=b.L;d=a.m3;if(c>d.data.length)d=B5(c);e=0;f=0;if(e>c){b=new BH;Bm(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}XD(a,d,0,c);a.lG.L=0;}
function HF(){GV.call(this);this.E3=null;}
function V_(a){a.E3=DM(1);}
var LH=G(HF);
var A6t=null;function APs(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGI(){var b;b=new LH;V_(b);A6t=b;}
function Ei(){var a=this;CH.call(a);a.sM=null;a.p4=null;a.gw=0;a.sh=0;a.jI=0;}
var A6N=null;var A6O=null;var A6V=null;function A1Z(){A1Z=Bn(Ei);AXw();}
function A3R(a,b,c,d,e,f,g){var h=new Ei();US(h,a,b,c,d,e,f,g);return h;}
function US(a,b,c,d,e,f,g,h){A1Z();DK(a,b,c);a.sM=d;a.p4=e;a.gw=f;a.sh=g;a.jI=h;}
function AXw(){var b;b=new Ei;AQy();US(b,C(87),0,C(88),A6W,2,0,0);A6N=b;b=A3R(C(89),1,C(90),A6W,2,0,1);A6O=b;A6V=I(Ei,[A6N,b]);}
function MO(){var a=this;B.call(a);a.Eb=null;a.EG=null;}
function AGR(b){var c,d;if(Gr(b))N(AJc(b));if(!AKA(P(b,0)))N(AJc(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKA(d))break a;else N(AJc(b));}}c=c+1|0;}}
function AKA(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mw=G(MO);
var A6P=null;function AFv(){AFv=Bn(Mw);AN1();}
function AG3(a){var b,c;b=new Ta;b.gu=C(91);Hn();c=A6Q;b.jp=c;b.n1=c;b.EB=a;b.wH=0.3333333432674408;b.CY=0.5;b.xw=DM(512);b.z7=B5(512);return b;}
function AN1(){var b,c,d,e,f;b=new Mw;AFv();c=Q(BJ,0);d=c.data;AGR(C(92));e=d.length;f=0;while(f<e){AGR(d[f]);f=f+1|0;}b.Eb=C(92);b.EG=c.hC();A6P=b;}
function Yg(){var a=this;B.call(a);a.gk=null;a.qi=null;a.mH=null;a.Al=null;a.sv=null;a.sH=null;}
function AJf(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gk,b,c));}
function O7(a,b){var c,d,e,f,g,h,i,$$je;c=new BJ;d=b;while(a.qi[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gk,b,d));f=e.data;Fd();d=f.length;AFv();g=A6P;h=AJz(e,0,d);a:{try{i=AG3(g);Hn();g=AIK(AGj(AK3(i,A6R),A6R),h);break a;}catch($$e){$$je=EX($$e);if($$je instanceof Ge){g=$$je;}else{throw $$e;}}h=new ADw;h.kM=1;h.k7=1;h.iS=C(93);h.nr=g;N(h);}if(!g.Z&&g.en==g.ol)c.cc=g.iE;else{f=B5(Ch(g));e=f.data;c.cc=f;Pq(g,f,0,e.length);}return c;}
function WI(a,b){var c,d,e;c=new BJ;d=b>>>1|0;e=d;while(a.mH[e]){e=e+1|0;}d=e-d|0;Js(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gk,b,d)));return c;}
var H5=G(CH);
var A6X=null;var A6W=null;var A6Y=null;function AQy(){AQy=Bn(H5);AWK();}
function ANW(a,b){var c=new H5();AKH(c,a,b);return c;}
function AKH(a,b,c){AQy();DK(a,b,c);}
function AWK(){var b;A6X=ANW(C(94),0);b=ANW(C(95),1);A6W=b;A6Y=I(H5,[A6X,b]);}
var NL=G(HF);
var A6u=null;function AN_(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AH3(){var b;b=new NL;V_(b);A6u=b;}
function AGW(){BU.call(this);this.Cs=null;}
function AJc(a){var b=new AGW();AS6(b,a);return b;}
function AS6(a,b){Y(a);a.Cs=b;}
var Uo=G(Ew);
var Mv=G(0);
function ADW(){B.call(this);this.yA=null;}
function ASx(a,b){a.yA.setPointerCapture(b.pointerId);}
function ADX(){B.call(this);this.xM=null;}
function AMN(a,b){a.xM.releasePointerCapture(b.pointerId);}
function Ic(){var a=this;B.call(a);a.ol=0;a.Z=0;a.en=0;a.jN=0;}
function ACN(a,b){a.jN=(-1);a.ol=b;a.en=b;}
function Fx(a,b){var c,d,e;if(b>=0&&b<=a.en){a.Z=b;if(b<a.jN)a.jN=0;return a;}c=new BU;d=a.en;e=new K;M(e);BM(U(H(U(H(e,C(96)),b),C(97)),d),93);Bm(c,L(e));N(c);}
function Ch(a){return a.en-a.Z|0;}
function D9(a){return a.Z>=a.en?0:1;}
var AAg=G(0);
var LB=G(Ic);
function AHQ(b){var c,d;if(b>=0)return ARO(0,b,B5(b),0,b,0);c=new BU;d=new K;M(d);U(H(d,C(98)),b);Bm(c,L(d));N(c);}
function AJM(b,c,d){return ARO(0,b.data.length,b,c,c+d|0,0);}
function Pq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BH;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bm(h,L(i));N(h);}if(Ch(a)<d){j=new Og;Y(j);N(j);}if(d<0){j=new BH;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bm(j,L(k));N(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iE.data[m+a.p7|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BH;d=b.length;k=new K;M(k);BM(U(H(U(H(k,C(103)),c),C(97)),d),41);Bm(j,L(k));N(j);}
function Nl(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.qj){b=new Ku;Y(b);N(b);}e=d-c|0;if(Ch(a)<e){b=new JJ;Y(b);N(b);}if(c>J(b)){f=new BH;d=J(b);b=new K;M(b);BM(U(H(U(H(b,C(104)),c),C(97)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BH;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bm(f,L(b));N(f);}if(c>d){b=new BH;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bm(b,L(f));N(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;AAl(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function Nc(){var a=this;Ic.call(a);a.nl=0;a.pP=null;a.C4=null;}
function AJz(b,c,d){var e,f,g;e=b.data;f=new ADm;g=e.length;d=c+d|0;ACN(f,g);AX5();f.C4=A6Z;f.nl=0;f.pP=b;f.Z=c;f.en=d;f.C8=0;f.w5=0;return f;}
function ADn(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.w5){e=new Ku;Y(e);N(e);}if(Ch(a)<d){e=new JJ;Y(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BH;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bm(i,L(j));N(i);}if(d<0){e=new BH;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bm(e,L(i));N(e);}h=a.Z;k=h+a.nl|0;l=0;while(l<d){b=a.pP.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BH;d=b.length;i=new K;M(i);BM(U(H(U(H(i,C(103)),c),C(97)),d),41);Bm(e,
L(i));N(e);}
function PS(a){a.Z=0;a.en=a.ol;a.jN=(-1);return a;}
function IJ(){B.call(this);this.DV=null;}
var A6S=null;var A6R=null;var A6Q=null;function Hn(){Hn=Bn(IJ);AQm();}
function AHz(a){var b=new IJ();AKy(b,a);return b;}
function AKy(a,b){Hn();a.DV=b;}
function AQm(){A6S=AHz(C(109));A6R=AHz(C(110));A6Q=AHz(C(111));}
var Pj=G(Cx);
function AQe(a){}
function AO9(a,b,c){}
function HN(){var a=this;Cx.call(a);a.dS=null;a.r=null;}
function ACM(a,b){var c,d,e;El(a,b);a.dS=AIX(0,0,64);c=new TA;c.bO=new Bg;c.dU=CN(Q(C2,0));c.d0=new Bg;c.p5=new Bg;c.mt=new B2;c.Cg=new B2;d=b.P;c.bH=d;e=b.bw;c.e2=e;c.cz=d.l6;c.cV=Rw(e);d=b.o.mY;e=new Y3;e.tH=c;Ba(d,e);d=b.o.mm;e=new Y2;e.v$=c;Ba(d,e);a.r=c;Ba(b.o.bG,new Z6);b=b.o.bG;c=a.r;BC(c);d=new Z5;d.xv=c;Ba(b,d);}
function HB(a){EJ(a.x.P,a.dS);}
function AF6(a,b,c){var d,e,f,g,h;a:{d=a.r;Co(d.bO,b);e=d.cf;if(e!==c){d.cf=c;f=(B3(d.dU)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].fV(e,c);h=h+1|0;}}}}
function CG(){HN.call(this);this.M=null;}
function F_(a,b){KU(a,b,1);}
function KU(a,b,c){var d,e,f;ACM(a,b);d=new ADz;e=a.r;d.b7=CN(Q(TM,0));d.b$=e;a.M=d;Ba(a.r.dU,d);Ba(b.o.bT,a.M);d=b.o.fv;e=a.M;BC(e);f=new Wl;f.v5=e;Ba(d,f);d=b.o.cS;e=a.M;BC(e);f=new Wk;f.tu=e;Ba(d,f);if(c){b=b.o.bT;f=a.r.cV;d=new W3;d.wz=f;Ba(b,d);}}
function AN5(a){HB(a);JQ(a.M);}
function IE(a,b,c){var d,e;AF6(a,b,c);d=(B3(a.M.b7)).data.length;e=0;while(e<d){e=e+1|0;}}
function AMH(a,b){var c,d,e,f,g;c=a.M;d=0;e=(B3(c.b7)).data;f=e.length;g=0;while(g<f){d=e[g].W.cj(b)|d;g=g+1|0;}return d;}
var EF=G(0);
function AHF(a){a.e8(IF());}
function Ht(a){a.e8(Mh());}
function AIr(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IY;c=new Kc;d=new Ho;AG4();K0(d,A60);Mx(c,d,BZ(A61),BZ(A62),BZ(A63),BZ(A61),BZ(A64),BZ(A65),BZ(A66),BZ(A67),BZ(A68),BZ(A69));e=AJG(S(C(112)));AGq();f=(A6$.hC()).data;g=f.length;h=Q(Ks,g);i=h.data;j=0;while(j<g){i[j]=f[j].ps;j=j+1|0;}k=AKl(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new I0;m=new I8;AVf();d=A6_;OF(m,d,A7a,A7b,A7c,A7d,d);LU(l,m,AK4(),AHI(S(C(117)),S(C(112)),CC(0)),AK4(),AH6(1,0.07500000298023224),A7e,A7f);LK(b,c,e,h,k,l,AEn(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.e8(b);}
var JF=G(0);
var Fi=G(0);
function KX(){var a=this;CG.call(a);a.E=null;a.G=null;a.iN=null;a.jr=0;a.k_=null;a.mz=null;a.zv=null;a.nk=null;a.fI=null;}
function A5l(a){var b=new KX();AFy(b,a);return b;}
function AFy(a,b){var c,d,e;KU(a,b,0);a.fI=AV5(a.r);c=KZ(a.M);a.iN=c;a.E=Ih(c);c=Ih(a.iN);a.G=c;a.mz=AHs(a.E,c);c=a.E;c.b3=1;Oi(a.fI,c,a.G);c=a.E;d=new TW;d.Bp=a;c.iw=d;c=a.G;d=new TX;d.y0=a;c.iw=d;AHq(a,0);M1(a.r,a.E);Ba(b.o.fv,a);Ba(b.o.bT,a);c=b.o.bG;d=new TY;d.w$=a;Ba(c,d);c=b.o.bG;d=new HS;e=new TU;e.u5=a;It(d,b,e);Ba(c,d);Ba(b.o.gP,a);Ba(b.o.hg,a);b=b.o.cS;c=new TV;c.s1=a;Ba(b,c);Ht(a);}
function Wd(a,b){if(a.E===b)a.jr=a.jr|1;if(a.G===b)a.jr=a.jr|2;if((a.jr&3)==3)AK$(a);}
function AHq(a,b){IZ(a.E,b);IZ(a.G,b);}
function A2b(a,b,c){if(DO(a.r,a.E))return He(a.E,b,c);if(!DO(a.r,a.G))return 0;return He(a.G,b,c);}
function AFR(a){if(DO(a.r,a.E))return VR(a,a.E);if(!DO(a.r,a.G))return null;return VR(a,a.G);}
function VR(a,b){var c;c=new SZ;c.sA=b;return c;}
function AFw(a,b,c){var d;d=DW(c);if(b!==a.E)a.nk=d;else a.zv=d;b=a.zv;if(b!==null&&a.nk!==null)Gj(a.x.bw,DW(c));else{if(b!==null)Gj(a.x.bw,b);b=a.nk;if(b!==null)Gj(a.x.bw,b);}}
function AK$(a){var b,c,d;Bk(Bt(),C(122));b=a.E.d.h;c=a.G.d.h;d=new Vo;d.sI=a;AIt(b,c,d,a.x.bw);}
function ASh(a,b){var c,d;c=I2(a.E,b);d=I2(a.G,b);return !c&&!d?0:1;}
function AYN(a){var b;HB(a);Ip(a.E);Ip(a.G);b=a.fI;AGE(b,b.iH.bH);JQ(a.M);}
function AXR(a){return FQ(0);}
function ASF(a){Ju(a.E);Ju(a.G);}
function AYJ(a){Kw(a.E);Kw(a.G);}
function ATf(a,b){IA(a.E,b);IA(a.G,b);}
function AZz(a,b){Kx(a.r,b);}
function ANp(a,b){if(H6(a.M,b)){LW(a.E);LW(a.G);}}
function APL(a,b,c){IE(a,b,c);AF5(a,b,c);}
function AF5(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cg(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;QK(f,g-h|0,b.b);Mu(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mu(a.G,d,f,c);X(a.fI.i,f.a,d.b);X(a.fI.k,d.a-f.a|0,f.b);}
function AL$(a,b){BC(b);GL(a.iN,b);Fv(a.E,b);Fv(a.G,b);a.fI.io=b;}
function AHk(a,b){if(b.bm!=121)return 0;return 1;}
function AJy(a,b){var c,d,e,f;if(DO(a.r,a.E)){c=a.iN;d=b.j;e=a.E;f=new Pb;f.uU=a;GQ(c,d,e,a,a,a,f);}if(DO(a.r,a.G)){c=a.iN;b=b.j;d=a.G;e=new Pa;e.t9=a;GQ(c,b,d,a,a,a,e);}return 1;}
function AZS(a,b){var c,d;c=BW(a.E,b.j)&&Xu(a.E,b)?1:0;d=BW(a.G,b.j)&&Xu(a.G,b)?1:0;return !c&&!d?0:1;}
function AXS(a,b,c,d){var e,f;e=BW(a.E,b.j)&&O9(a.E,b,c,d)?1:0;f=BW(a.G,b.j)&&O9(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function AQB(a,b,c){var d,e,f,g,h,i,j,k;d=BW(a.E,b.j);e=BW(a.G,b.j);f=a.r;g=f.ed;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FN(f,i);if(e&&!(!h&&!j))FN(a.r,a.G);if(d){i=Wu(a.E,b,c);if(i!==null)return i;}return !e?null:Wu(a.G,b,c);}
function A0i(a,b,c){var d,e,f,g;d=BW(a.E,b.j);e=BW(a.G,b.j);f=d&&S6(a.E,b,c)?1:0;g=e&&S6(a.G,b,c)?1:0;return !f&&!g?0:1;}
function ARS(a,b,c,d){var e,f,g,h;e=BW(a.E,b.j);f=BW(a.G,b.j);g=e&&LR(a.E,b,c,d)?1:0;h=f&&LR(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AYi(a){return AFR(a);}
var AG6=G(KX);
function A4R(a){var b=new AG6();A12(b,a);return b;}
function A12(a,b){var c;AFy(a,b);a.E.e0=1;a.G.e0=1;c=new Tm;c.xa=a;Qe(a,c,C(123));c=new To;c.Ao=a;Qe(a,c,C(124));}
function AQM(a){return FQ(1);}
function Qe(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new O0;d=d.then(Bv(e,"f"));f=new O2;f.tK=b;f.tJ=c;g=new O1;d.then(Bv(f,"f"),Bv(g,"f"));}
var AHu=G();
function A1y(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(N0(b)){case -1570047148:if(!Bj(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(131)))break a;d=19;break a;case -811765794:if(!Bj(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(133)))break a;d=11;break a;case -695287066:if(!Bj(b,C(134)))break a;d=20;break a;case -631889171:if(!Bj(b,C(135)))break a;d=9;break a;case -536831301:if(!Bj(b,C(136)))break a;d=25;break a;case -439438829:if(!Bj(b,C(137)))break a;d=21;break a;case -357667878:if(!Bj(b,C(138)))break a;d=22;break a;case -223304637:if(!Bj(b,C(139)))break a;d=2;break a;case -193916863:if(!Bj(b,C(140)))break a;d=23;break a;case 2129957:if(!Bj(b,C(141)))break a;d=1;break a;case 3343967:if(!Bj(b,C(142)))break a;d=10;break a;case 3556498:if
(!Bj(b,C(143)))break a;d=4;break a;case 91636708:if(!Bj(b,C(144)))break a;d=24;break a;case 485517998:if(!Bj(b,C(145)))break a;d=7;break a;case 544901384:if(!Bj(b,C(146)))break a;d=3;break a;case 1030621992:if(!Bj(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new UB;break b;case 3:case 4:b=new Uy;break b;case 5:b=new Ux;break b;case 6:b=new UA;break b;case 7:b=new Uz;break b;case 8:b=new UF;break b;case 9:case 10:b=new UE;break b;case 11:b=new UH;break b;case 12:b=new UG;break b;case 13:b=new AAZ;break b;case 14:b=new AAY;break b;case 15:b=new AAX;break b;case 16:b=new AAM;break b;case 17:b=new AAL;break b;case 18:b=new AAJ;break b;case 19:b=new AAI;break b;case 20:b=new AAH;break b;case 21:b=new AAG;break b;case 22:b=new AAF;break b;case 23:b
=new AAQ;break b;case 24:b=new AAP;break b;case 25:b=new AAO;break b;case 26:b=new AAN;break b;case 27:b=new AAS;break b;default:b=new AAR;break b;}b=new UC;}return b;}
var AJJ=G();
var K4=G(LB);
function AFP(){var a=this;K4.call(a);a.qj=0;a.p7=0;a.iE=null;}
function ARO(a,b,c,d,e,f){var g=new AFP();AUx(g,a,b,c,d,e,f);return g;}
function AUx(a,b,c,d,e,f,g){ACN(a,c);a.Z=e;a.en=f;a.p7=b;a.qj=g;a.iE=d;}
function AAl(a,b,c){a.iE.data[b+a.p7|0]=c;}
function Lt(){var a=this;B.call(a);a.Ek=null;a.sK=null;a.Dj=0.0;a.wA=0.0;a.nV=null;a.nq=null;a.ly=0;}
function Oe(){var a=this;B.call(a);a.h9=0;a.kf=0;}
var A6U=null;var A6T=null;function AEL(a,b){var c=new Oe();AIV(c,a,b);return c;}
function AIV(a,b,c){a.h9=b;a.kf=c;}
function I3(a){return a.h9?0:1;}
function If(a){return a.h9!=1?0:1;}
function NK(a){return !RB(a)&&!Mk(a)?0:1;}
function RB(a){return a.h9!=2?0:1;}
function Mk(a){return a.h9!=3?0:1;}
function K$(a){var b;if(NK(a))return a.kf;b=new Eg;Y(b);N(b);}
function Eu(b){return AEL(2,b);}
function Ub(a){var b,c;switch(a.h9){case 0:b=new Rc;Y(b);N(b);case 1:b=new Vy;Y(b);N(b);case 2:b=new T$;c=a.kf;Y(b);b.D4=c;N(b);case 3:b=new Q7;c=a.kf;Y(b);b.Ft=c;N(b);default:}}
function AI8(){A6U=AEL(0,0);A6T=AEL(1,0);}
var AEF=G();
var I7=G(0);
var WU=G();
function AOe(a,b){return b.arrayBuffer();}
var WT=G();
function ARg(a,b){var c,d;c=new Yf;d=new Yd;return $rt_globals.WebAssembly.instantiate(b,APy(Bv(c,"f"),Bv(d,"f")));}
var WR=G();
function ARJ(a,b){AMJ(b);}
var WQ=G();
function AWf(a,b){AHC(b);}
var W=G(0);
function Tm(){B.call(this);this.xa=null;}
function A2G(a,b){H1(a.xa.E,b);}
function To(){B.call(this);this.Ao=null;}
function AYm(a,b){H1(a.Ao.G,b);}
var UC=G();
function ATt(a,b){return A5l(b);}
var UB=G();
function ALS(a,b){return A4e(b);}
var Uy=G();
function AWT(a,b){return A4p(b);}
var Ux=G();
function AZx(a,b){var c,d,e,f,g;c=new ABg;El(c,b);d=(IF()).br.ei;c.ER=d;c.ld=AK_(d);c.i2=new Bg;c.h_=new Bg;c.dk=KS();c.dY=KS();c.na=FQ(1);b=b.o.bT;d=new Wz;d.mg=c;Ba(b,d);b=c.na.data[DQ()*c.na.data.length|0];d=Is(c.x.P,b,10);c.m1=d;Cn(c.x.P.ch,d);e=Eo(c.x.P.ch,C(153));d=c.x.P.ch;f=new K;M(f);BM(f,43);H(f,b);g=CY(e+Eo(d,L(f)));c.jF=g;c.iJ=BV(c.iJ,AD9(c,1,g,b,c.m1,c.x.P));c.iI=BV(c.iI,AD9(c,0,c.jF,b,c.m1,c.x.P));Rf(c,c.dk,c.iJ);Rf(c,c.dY,c.iI);Cr(c.dk.X,1.0,1.0,1.0,1.0);Fj(c.dk,c.ld);Cr(c.dY.X,1.0,1.0,1.0,1.0);Fj(c.dY,
c.ld);b=Bt();g=c.jF;d=new K;M(d);U(H(d,C(154)),g);Bk(b,L(d));return c;}
var UA=G();
function ANZ(a,b){var c,d,e;c=new Xx;F_(c,b);d=new Ww;d.nP=new Bg;d.oi=new Bg;c.yF=d;c.ff=AJL();c.dE=AJL();c.oA=Dv(C(155),25.0);Ba(c.r.dU,c);d=b.o.bG;e=new ABH;e.uC=c;Ba(d,e);Ba(b.o.bT,c);b=b.o.cS;d=new ABD;d.vF=c;Ba(b,d);AEa(c.dE);BR(c.dS,CC(43));b=Fg();JI(c.ff,b);JI(c.dE,b);b=c.ff;b.kW=new ABE;d=c.dE;d.kW=new ABF;d.o7=new Qa;d.wF=new Qb;Nq(b,(RN(0)).kk);Nq(c.dE,(RN(0)).kk);return c;}
var Uz=G();
function AUB(a,b){var c,d,e;c=new AAK;F_(c,b);Ba(c.r.dU,c);BR(c.dS,CC(43));d=b.o.bG;e=new Us;e.CB=c;Ba(d,e);b=b.o.cS;d=new Ut;d.Bc=c;Ba(b,d);return c;}
var UF=G();
function ANE(a,b){var c,d,e;c=new WZ;ACM(c,b);c.h2=BL();c.gi=BL();c.r7=S(C(156));c.kc=UV();c.h1=0;d=c.r.dU;e=new O_;e.xY=c;Ba(d,e);Ba(b.o.bT,c);d=b.o.bG;e=new O$;e.vR=c;Ba(d,e);b=Is(b.P,C(155),35);c.ki=b;c.mn=AIs(EA(b));BR(c.dS,S(C(157)));return c;}
var UE=G();
function AP8(a,b){var c,d,e,f;c=new SN;El(c,b);c.h4=AHB();c.e$=0;c.uN=500;c.r8=IG(0,0,0,255,new B2);c.mB=20;c.xj=20;c.Ab=IF();d=b.o.bT;e=new WK;e.lO=c;f=new TT;f.z6=e;e.rU=f;Ba(d,e);d=b.o.fv;e=new Z7;e.AG=c;Ba(d,e);c.eC=b.P;c.xF=Rw(b.bw);YK(c.h4,Is(c.eC,C(155),c.xj),c.mB,c.eC.l6);c.i1=Jb();return c;}
var UH=G();
function A0S(a,b){var c,d;c=new Rd;HP(c,b);b=b.o.bG;d=new QM;d.s9=c;Ba(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var UG=G();
function ALB(a,b){var c,d,e,f,g,h,i;c=new Xe;F_(c,b);d=b.o.cS;e=new RE;e.x2=c;Ba(d,e);d=b.bw;f=new PR;f.DB=c;g=Q(B,1);g.data[0]=C(158);CU(d,f,C(159),g);h=new PQ;h.EL=c;g=Q(B,1);g.data[0]=AJo([1,2,3,4,5]);CU(d,h,C(160),g);h=new PN;h.Ce=c;i=Q(B,1);i.data[0]=A3S([1,2,3,4,5]);CU(d,h,C(161),i);h=new PL;h.EU=c;g=Q(B,1);g.data[0]=DX([1,2,3,4,5]);CU(d,h,C(162),g);d=b.o.bG;e=new HS;h=new RD;h.z$=c;It(e,b,h);Ba(d,e);return c;}
var AAZ=G();
function ALM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new WB;HP(c,b);c.e7=Ia(0,0,300,300);c.gE=S$(0,0,3,3);d=b.P;b=b.o.bT;e=new ABQ;e.m8=c;Ba(b,e);b=ALg(d);c.AW=b;FR(c.e7,b);FZ(c.e7);b=c.e7.bl;FK();BR(b,A7g);BR(c.e7.X,Dy(204,120,50));AQE();e=A7h;f=DM((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CV(d);switch(e.fS){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new E5;Y(b);N(b);}b:
{WN(m,5,5,h);b=m.eL.d4;switch(e.fS){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new E5;Y(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nG=m;X(c.gE.t,BQ(m),CO(c.nG));BR(c.gE.bl,c.pZ);return c;}
var AAY=G();
function AYr(a,b){var c,d,e;c=new SL;HP(c,b);c.g0=Ia(0,0,300,300);c.my=new Bg;c.kz=new Bg;c.jW=new Bg;d=b.P;b=b.o.bT;e=new XG;e.ku=c;Ba(b,e);b=ALg(d);c.q6=b;FR(c.g0,b);FZ(c.g0);b=c.g0.bl;FK();BR(b,A7g);BR(c.g0.X,Dy(204,120,50));return c;}
var AAX=G();
function AQ1(a,b){var c,d,e,f;c=new AAz;El(c,b);c.DQ=20;c.Fu=11;c.Ed=220;c.md=new Bg;c.E2=5000;c.ip=1;c.gS=I(Ho,[CC(0),CC(255)]);c.eN=b.P;d=b.o.bT;e=new YA;e.l3=c;f=new UR;f.tw=e;e.qV=f;Ba(d,e);b=b.o.fv;d=new VZ;d.rC=c;Ba(b,d);b=HJ(c.eN,200,220);c.oI=b;Hy(b,C(155),20.0);b=HJ(c.eN,200,20);c.gI=b;Hy(b,C(155),20.0);c.iF=Jb();return c;}
var AAM=G();
function AOi(a,b){var c,d,e;c=new Kq;HP(c,b);Ba(b.o.bT,c);d=b.o.bG;e=new ADj;e.wE=c;Ba(d,e);Ba(b.o.gP,new ADi);d=b.o.gP;e=new ADh;e.sB=c;Ba(d,e);Ba(b.o.hg,new ADg);d=b.o.hg;e=new ADk;e.zQ=c;Ba(d,e);b=!VF(b.bw)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var AAL=G();
function AUO(a,b){var c,d;c=new Sx;HP(c,b);c.uh=CC(20);c.gn=Ia(0,0,300,300);c.vV=Dv(C(14),80.0);b=b.o.bG;d=new Sd;d.DX=c;Ba(b,d);return c;}
var AAJ=G();
function A1S(a,b){var c;c=new Tl;OK(c,b);Hj(c.ck,0,0,300,300);X(c.dl,300,300);return c;}
var AAI=G();
function AQf(a,b){var c;c=new Tk;OK(c,b);c.f3=new Bg;c.go=new Bg;X(c.eb,150,140);X(c.dl,500,100);X(c.fq,150,200);X(c.eM,500,250);return c;}
var AAH=G();
function A0V(a,b){var c,d,e;c=new V$;F_(c,b);c.Cm=3;c.wg=Dv(C(166),20.0);c.j7=UV();c.qm=1;Ba(c.r.dU,c);BR(c.dS,CC(43));d=b.o.bG;e=new Px;e.ze=c;Ba(d,e);b=b.o.cS;d=new Py;d.vP=c;Ba(b,d);return c;}
var AAG=G();
function ALv(a,b){return A4O(b);}
var AAF=G();
function A0H(a,b){var c,d,e,f;c=new Qv;Kb(c,b);BR(c.dS,CC(43));c.me=KZ(c.M);d=b.o.bG;e=new HS;f=new Pz;f.Bo=c;It(e,b,f);Ba(d,e);b=b.o.cS;d=new PA;d.zb=c;Ba(b,d);return c;}
var AAQ=G();
function AZZ(a,b){var c,d;c=new RS;Kb(c,b);c.px=null;c.mN=JU();c.jt=JU();b=b.o.cS;d=new Xy;d.x_=c;Ba(b,d);return c;}
var AAP=G();
function ANc(a,b){var c;c=new YS;Kb(c,b);c.vZ=Mh();BR(c.dS,CC(43));return c;}
var AAO=G();
function AXC(a,b){return A4r(b);}
var AAN=G();
function AO5(a,b){var c,d,e;c=new PI;Kb(c,b);c.vg=Mh();BR(c.dS,CC(43));d=b.o.cS;e=new Uw;e.Cy=c;Ba(d,e);b=b.o.bG;d=new Uv;d.tY=c;Ba(b,d);return c;}
var AAS=G();
function AO6(a,b){var c,d;c=new TQ;F_(c,b);c.kd=Mh();Ba(c.r.dU,c);BR(c.dS,CC(43));b=b.o.cS;d=new AA1;d.qZ=c;Ba(b,d);return c;}
var AAR=G();
function AVs(a,b){var c;c=new OU;AHU(c,b);AKB(c.dx);return c;}
function ADf(){var a=this;B.call(a);a.uz=null;a.AN=null;a.Aa=null;}
function Ig(){var a=this;B.call(a);a.bL=0;a.cN=0;a.dA=0;a.kC=0;}
function A7i(a,b,c,d){var e=new Ig();ABT(e,a,b,c,d);return e;}
function ABT(a,b,c,d,e){a.bL=d;a.cN=b;a.dA=c;a.kC=e;}
function Qm(){var a=this;Ig.call(a);a.eh=null;a.bm=0;a.jS=0;a.zM=0;a.oQ=0;}
var AG7=G();
function U0(b,c){return (b+(c/2|0)|0)/c|0;}
function YN(b,c,d){if(b<(2147483647/c|0))return U0(Bc(b,c),d);return 0.5+c*b/d|0;}
function H_(b,c){return ((b+c|0)-1|0)/c|0;}
function GG(b){return b+0.5|0;}
function CY(b){return b+0.5|0;}
function E6(b,c,d){return Bd(b,Be(c,d));}
function Na(b,c){return AIp(b)/AIp(c);}
function OM(){var a=this;Ig.call(a);a.j=null;a.Ec=null;}
var Tu=G(0);
function Pw(){var a=this;B.call(a);a.vW=null;a.vX=null;}
function AYs(a,b){var c,d;c=a.vW;d=a.vX;$rt_globals.console.info("paste plain string "+b);c.g(H4(b));DC(d);}
function AB6(){B.call(this);this.wb=null;}
function ACU(a,b){a.wb.clipboardData.setData("text/plain",$rt_ustr(b));}
function ADm(){var a=this;Nc.call(a);a.C8=0;a.w5=0;}
function CB(){var a=this;B.call(a);a.i=null;a.k=null;a.bS=0.0;}
function AUA(){var a=new CB();E3(a);return a;}
function E3(a){a.i=new Bg;a.k=new Bg;}
function ASi(a){}
function AZp(a){return BF(0,0);}
function JP(a,b,c,d){var e;if(!JY(a.i,b)){a.rJ(b);Co(a.i,b);}if(!JY(a.k,c)){a.oZ(c);Co(a.k,c);}e=a.bS;if(e!==d){a.bS=d;a.lB(e,d);}}
function Dz(a,b){return Cg(b,a.bS);}
function BW(a,b){return Gk(b,a.i,a.k);}
function AK6(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AO7();Bs(b,d,e,f,A7j);}
function ACs(a,b){var c;c=a.i;LT(b,c.a,c.b,a.k);}
function AV$(a,b){return 0;}
function AP$(a,b){}
function ATT(a,b){}
function A0v(a,b,c){}
function AT1(a){}
function AO0(a,b,c,d){return 0;}
function AMU(a,b,c){return null;}
function AQQ(a,b,c){return 0;}
function ATH(a,b){return 0;}
function A0n(a,b,c,d){return 0;}
function AFl(){var a=this;CB.call(a);a.iH=null;a.lm=null;a.ln=null;a.lk=null;a.ll=null;a.es=null;a.gx=null;a.gy=null;a.io=null;}
function AV5(a){var b=new AFl();ANh(b,a);return b;}
function ANh(a,b){E3(a);a.lm=new Bg;a.ln=new Bg;a.lk=new Bg;a.ll=new Bg;a.iH=b;}
function Oi(a,b,c){a.gx=b;a.gy=c;}
function AGE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bs(b,c.a,c.b,a.k,a.io.br.ei);if(a.es===null)return;d=Cu(a.iH,2.0);e=GO(a.es,a.gx.lj(),1);f=GO(a.es,a.gx.kv(),1);g=GO(a.es,a.gy.lj(),0);h=GO(a.es,a.gy.kv(),0);i=Be(e,g);j=Bd(f,h);g=BK(i,j);if(g<=0)B$(b,1);k=a.gx.kX();l=a.gx.l0();m=a.gy.l0();n=a.gy.kX();o=a.iH.p5;while(i<=j){p=a.es.is.data[i];if(p.oY){q=a.gx.hI(p.h8);r=a.gx.hI(p.h8+p.oh|0);s=a.gy.hI(p.h7);t=a.gy.hI(p.h7+p.og|0);X(a.lm,a.i.a,q);X(a.lk,a.i.a,r);X(a.ln,a.i.a+a.k.a|0,s);X(a.ll,
a.i.a+a.k.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.k.b|0);if(v>u){X(o,a.k.a,v-u|0);c=a.io;w=J2(c.d7,c,p.oY);if(q==r)Rb(a,b,q,s,d,k.a,l.a,w,a.lm,a.lk);if(s==t)Rb(a,b,s,q,d,n.a,m.a,w,a.ln,a.ll);AEg(b,a.i.a,u,o,a.lm,a.ln,a.lk,a.ll,w);}}i=i+1|0;}if(g<=0)B$(b,0);}
function Rb(a,b,c,d,e,f,g,h,i,j){var k;k=a.iH.d0;X(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bs(b,f,c,k,h);}
function AFT(){var a=this;B.call(a);a.bQ=null;a.du=null;a.iz=null;}
function KZ(a){var b=new AFT();AMm(b,a);return b;}
function AMm(a,b){a.bQ=b;}
function GL(a,b){var c;a.iz=b;c=a.du;if(c!==null)Fc(c,b.cR);c=a.bQ.ea;if(c!==null)Gh(c,b.cR,b.i3);}
function Zv(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=APg();i=c.q;j=0;while(j<i){if(f===null){k=(BG(c,j)).bq;l=Z3(FM(Cd(g.h,k)));m=AAC(g.gc);}else{n=f.data;k=n[j].pA.nn;l=!BO(g.gc,n[j].l7)?C(21):Z3(FM(Cd(g.h,k)));m=AAC(n[j].l7);}if(J(l)>153){o=Cw(l,0,150);n=new K;M(n);H(H(n,o),C(167));l=L(n);}if(J(m)>153){n=Cw(m,0,150);o=new K;M(o);H(H(o,n),C(167));m=L(o);}n=Dm(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BG(c,j);}if(f!==null){q=new ADx;q.sF=d;q.sG=p;}else{q=new ADy;q.Bw=d;q.Bv
=o;}Wh(h,m,n,l,q);j=j+1|0;}r=AC_(h);if(a.du!==null)AA9(a);c=a.bQ.b$;g=new Ro;f=new AAx;f.qS=a;f.qT=d;AK0(g,c,f);W_(g,r);d=a.iz;Wb(g,d.cR,d.BI);d=AEr(c);a.du=d;d.pS=d.pS|1;d=GH(g,c);f=a.iz.cR;Jh(d,f.m4,f.oR);Lc(a.du,d);Fc(a.du,a.iz.cR);d=a.du;f=new K;M(f);H(H(f,C(168)),e);DL(d,L(f));EI(a.bQ,a.du);d=a.du;i=(d.Q.k.b+Cu(d.bb,2.0)|0)+Cu(c,2.0)|0;s=(g.d6+g.eQ|0)+g.hH|0;t=Cu(g.bW,5.0);e=BF(E6(t,b.a,g.bW.bO.a-s|0),E6(i,b.b,g.bW.bO.b-g.cJ.b|0));Yu(g);K2(g);i=Ej(g);s=g.b6.data.length;i=Bc(i,s)+Bc(g.dR,s+1|0)|0;X(g.cJ,
g.k.a,i);i=(g.d6+g.eQ|0)+g.hH|0;b=g.bW;s=(b.bO.a-e.a|0)-Cu(b,5.0)|0;b=g.bW;t=(b.bO.b-e.b|0)-Cu(b,5.0)|0;d=BF(Be(i,s),Be(g.cJ.b,t));Et(a.du,e,d);FN(c,g);}
function AA9(a){Iu(a.bQ,a.du);JZ(a.du);a.du=null;}
function Li(a,b,c){var d,e;d=a.bQ;e=a.iz;Md(d,e.cR,e.i3,b,c);}
function GQ(a,b,c,d,e,f,g){Li(a,b,X_(UJ(a,c,g,d,e,f),b,null));}
function UJ(a,b,c,d,e,f){var g;g=new S5;g.gq=a;g.bu=b;g.rw=c;g.jc=e;g.oq=f;g.mq=d;return g;}
function AE5(b){var c;c=new RY;c.zT=b;return c;}
var FV=G(0);
function AZq(a){}
function AOo(a){}
var Q5=G(0);
var Ms=G(0);
function AFr(){var a=this;CB.call(a);a.cK=null;a.bj=null;a.kS=null;a.B0=0;a.oo=null;a.dd=null;a.nL=0;a.hG=0.0;a.mk=null;a.C7=null;a.f1=null;a.V=0;a.c$=0;a.d=null;a.fB=null;a.eq=null;a.eW=null;a.A2=0;a.zI=0;a.c1=0;a.ci=0;a.co=0;a.ii=null;a.fW=null;a.fD=null;a.jw=0;a.j_=0;a.Fw=0;a.Cv=0;a.k4=0;a.lY=0;a.pX=0;a.eg=0;a.de=null;a.fy=null;a.e0=0;a.b3=0;a.Ck=null;a.j9=null;a.y$=null;a.uu=null;a.iw=null;a.bx=0;a.cM=null;a.sJ=0;a.ry=null;a.u_=null;}
function Ih(a){var b=new AFr();ASg(b,a);return b;}
function ASg(a,b){var c,d,e;E3(a);a.B0=0;a.oo=Q(V,10);a.dd=AXx();a.hG=16.0;a.mk=C(155);a.d=A4H(Q(BJ,0),null,null);c=new ADI;c.yt=CN(Q(Nw,0));c.BY=CN(Q(Nw,0));c.qL=CN(Q(AAV,0));c.vI=CN(Q(YU,0));c.vi=CN(Q(Hh,0));c.AQ=CN(Q(SA,0));a.fB=c;a.eW=Q(Fs,0);a.ii=BF(1,0);a.fW=Jb();a.fD=Jb();a.jw=0;a.j_=1;a.k4=1;a.lY=1;a.pX=1;a.eg=3;a.de=AHB();a.fy=C(169);a.e0=0;a.b3=0;c=En();BC(c);d=new Xp;d.Ds=c;a.j9=d;a.bx=0;c=new Xo;c.qA=a;a.ry=c;c=new Xn;c.tj=a;a.u_=c;c=b.bQ.b$;a.cK=c;a.bj=c.bH;a.kS=b;b=APV(c.cz);a.cM=b;a.f1=b.g9;e
=a.oo.data;b=new Xm;b.A6=a;e[1]=b;b=new Xt;b.xA=a;e[2]=b;b=new Xs;b.t4=a;e[3]=b;b=new Xr;b.wr=a;e[4]=b;b=new Xq;b.rk=a;e[5]=b;b=new Xl;b.zu=a;e[6]=b;K7(a.d,a,GD(a));}
function O6(a,b){var c,d,e;c=new V6;c.wX=a;d=new V5;d.yG=a;Ba(b.gP,c);Ba(b.hg,d);e=new V7;e.DG=b;e.DH=c;e.DI=d;return e;}
function Mu(a,b,c,d){JP(a,b,c,d);AAD(a,b,c,d);}
function ARs(a,b,c){Vj(a,a.mk,a.hG);PY(a.cM,c);}
function A2H(a,b,c){a.y$=b;a.uu=c;}
function AAD(a,b,c,d){var e;a.c1=Cg(80.0,d);a.ci=Cg(1.0,d);a.co=Cg(10.0,d);e=!a.b3?b.a:(b.a+c.a|0)-Ir(a)|0;X(a.cK.d0,e,b.b);Sk(a.de,a.cK.d0,Be(Ir(a),c.a),c.b,d);b=a.dd;e=Cg(2.0,d);b.eS.t.a=e;}
function AW9(a){a.nL=1;N6(a);}
function AVj(a){a.nL=0;}
function N6(a){YF(a.dd,MY(GD(a)));}
function Fv(a,b){var c,d;a.eq=b;c=a.dd;d=b.br.BX;BR(c.eS.X,d);c=a.fW;d=b.br;H8(c,d.lI,d.lN);c=a.fD;b=b.br;H8(c,b.lI,b.lN);}
function Ju(a){OB(a,a.cM.cX.oj,a.hG+1.0);}
function Kw(a){var b;b=a.hG;if(b<=7.0)return;OB(a,a.cM.cX.oj,b-1.0);}
function IA(a,b){OB(a,b,a.hG);}
function AR9(a,b){Kx(a.cK,b);}
function OB(a,b,c){if(a.cK.cf!==0.0){Vj(a,b,c);Jv(GD(a));}a.hG=c;a.mk=b;}
function LW(a){var b,c,d;b=a.cM;c=a.cK.cz;d=a.bj;b.iP=c;if(b.hK.ji!=c&&b.d9)AD5(b,d);S0(a.eW);ID(a.de);N$(a);}
function Vj(a,b,c){var d,e,f,g,h,i,j,k;d=a.bS;e=c*d;Cg(c,d);f=a.cM.cX;d=f===null?0.0:f.o1;if(!(e===d&&BO(b,a.mk))){ID(a.de);Ov(a.eW);g=a.d.h.B.data;h=g.length;i=0;while(i<h){E1(g[i]);i=i+1|0;}j=a.cM;f=a.bj;j.cX=AI_(b,e,300,600,j.g9,f);f=a.cM;a.C7=f.cX;a.V=So(f,1.25,a.bj);a.c$=CY(a.cM.cX.p6);a.dd.eS.t.b=EA(a.cM.cX);h=EA(a.cM.cX);i=a.V;k=Vs(a.dd);f=new K;M(f);b=H(H(f,C(170)),b);BM(b,32);U(H(U(H(U(H(EH(b,e),C(171)),h),C(172)),i),C(173)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A7k){h=Ni(a.cM.cX,a.V);b=new K;M(b);U(H(b,
C(174)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.it=GX(F1(a),a.d.A,a.bj.ch,a.f1);H$(a);N$(a);}}
function AVH(a){Ov(a.eW);Ym(a.cM);ID(a.de);}
function OL(a){return Bc(CJ(a.d.h)+5|0,a.V);}
function K1(a){return Bd(OL(a)-a.k.b|0,0);}
function AA$(a){return Bd(a.jw-Gl(a)|0,0);}
function Gl(a){var b;b=!a.b3?0:a.c$+a.co|0;return Bd(1,(a.k.a-a.c1|0)-b|0);}
function Ir(a){return a.b3?a.c1:a.c1-a.co|0;}
function Ek(a){return a.k.b;}
function I2(a,b){var c,d,e;c=a.d.h;if(ABz(c)&&b-c.z2>0.03125?1:0){d=a.sJ;e=a.d.h.cq;if(d!=e){a.sJ=e;ZO(a);}}if(a.V)AA3(a);d=ABI((a.bx+a.Fw|0)-a.Cv|0,K1(a));e=a.bx==d?0:1;if(e)F3(a,d);return !AA_(a.dd,b)&&!e&&!a.B0?0:1;}
function IL(a,b){var c,d;b=ABI(b,AA$(a));c=a.d;d=b==c.dT?0:1;if(d)c.dT=b;if(d){c=a.y$;if(c!==null)c.f();}}
function F3(a,b){var c;if(AJn(a,b)){c=a.uu;if(c!==null)c.f();}}
function AJn(a,b){var c,d;c=ABI(b,K1(a));d=c==a.bx?0:1;if(d){a.bx=c;a.d.mI=c/a.V;}return d;}
function AHe(a){return BF((Ir(a)+a.ci|0)+a.co|0,a.V);}
function AS0(a){return a.V;}
function AYU(a,b){Ip(a);}
function Ip(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H_(a.k.b,a.V)+7|0;c=a.eW;if(c.data.length<b)a.eW=Zl(b,c,a.cM,a.A2,a.zI,a.d.h);B$(a.bj,0);NF(a.bj,a.i,a.k);d=(a.V-Vs(a.dd)|0)/2|0;b=a.d.it-(S2(a.dd)/2|0)|0;e=a.d;f=b-e.dT|0;g=!a.b3?a.c1:(a.ci+a.co|0)+a.c$|0;Ua(a.dd,g+f|0,(d+Bc(e.w,a.V)|0)-a.bx|0);h=CJ(a.d.h);i=TO(a);j=TN(a);a.A2=i;a.zI=j;k=!a.b3?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c$|0;l=Gl(a);c=a.d.lD;m=Dz(a,40.0);n=i;while(n<=j&&n<h){o=Cd(a.d.h,n);p=ACt(a,n);XA(p,o,a.bj,a.V,l,a.d.dT,n,
n%a.eW.data.length|0);a.jw=Bd(a.jw,FG(o)+m|0);g=a.V;q=Bc(g,n)-a.bx|0;r=c===null?null:c.data[n];s=a.i.b+q|0;t=a.bj;q=a.d.dT;u=a.eq;e=AKd(Bi(a),n);if(e!==null){if(e.b==(-1))e.b=o.S;e.a=GX(o,e.a,a.bj.ch,a.f1);e.b=GX(o,e.b,a.bj.ch,a.f1);}v=a.d;Qg(p,s,k,t,l,g,q,u,e,v.iV,v.iG,v.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cK.d0;n=i;while(n<=j&&n<h&&a.k4){v=ACt(a,n);q=Bc(a.V,n)-a.bx|0;p=Bi(a);if(!Dx(p))w=0;else{o=Er(p);p=F7(p);w=o.K<=n&&n<p.K?1:0;}o=a.eq;p=o.br;t=p.sY;x=a.d.w==n&&c===null?1:0;a:{if(w)t=p.k2;else{if(c!==null)
{y=c.data;if(n<y.length&&y[n]!==null){t=J2(o.d7,o,y[n].hb);break a;}}if(x)t=p.gs;}}AIP(v,a.bj,k,a.i.b+q|0,a.V,e,a.d.dT,l,t);n=n+1|0;}if(a.j_){s=Be(j+1|0,h);AKs(a,Bc(a.V,s)-a.bx|0,l);}AGz(a);if(a.lY)AHR(a,i,j,h);if(a.nL&&f>=(( -S2(a.dd)|0)/2|0)){e=a.dd;v=a.k;if(AES(e.eS.u,0,0,v))AB8(a.dd,a.bj,a.i);}AGk(a);AFW(a);Gb(a.bj);AF9(a,i,j);}
function AHR(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lD;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eq;h=J2(h.d7,h,g.hb);}else h=e!==null?a.eq.br.ei:a.eq.br.gs;if(!(a.d.w!=b&&g===null)){g=a.ii;i=a.b3;g.a=!i?(a.co-a.ci|0)-a.eg|0:((a.co+a.c$|0)+a.ci|0)-a.eg|0;j=a.V;g.b=j;i=i?0:(a.c1-a.co|0)+a.ci|0;j=Bc(j,b)-a.bx|0;k=a.bj;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AF9(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CJ(a.d.h),a.V)-a.bx|0);f=a.de;g=a.bx;h=a.d;i=h.lD===null?h.w:(-1);j=a.bj;k=a.eq;NF(j,f.gB,f.fw);SY(f,j,b,d);ABK(f,b,j);AA2(f,g,e,k,j);l=k.le;if(e<d){h=f.gB;Bs(j,h.a,h.b+e|0,BF(f.fw.a,d-e|0),l.k$);}if(b<=i&&i<=c){k=k.le;c=i/20|0;h=f.c5;l=BG(h,c%h.q|0);h=f.gB;d=Bc(f.c5.q,f.hl);c=l.ft.b;b=((l.qh.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CO(l.cQ)|0)|0;c=i%l.ef|0;e=l.cu;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;X(l.je,l.ft.a,e);f=l.jZ;c=i%l.ef|0;d=l.cu;Cr(f,0.0,
Bc(c,d),l.ft.a,d);No(l,j,b,h,k.xG,k.qD);}Gb(j);}
function TO(a){return Be(a.bx/a.V|0,CJ(a.d.h)-1|0);}
function TN(a){return Be(((a.bx+Ek(a)|0)-1|0)/a.V|0,CJ(a.d.h)-1|0);}
function ARP(a,b){return (Bc(a.V,b)-a.bx|0)+a.i.b|0;}
function ARF(a){return a.i;}
function AUv(a){return a.k;}
function N$(a){YK(a.de,a.cM.cX,a.V,a.cK.cz);}
function ACt(a,b){var c;c=a.eW.data;return c[b%c.length|0];}
function U9(a,b){var c,d,e,f;c=E6(0,J(a.fy),Pp(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BU;Y(b);N(b);}if(c!=1){d=b.cc.data.length;if(d&&c){e=B5(Bc(d,c));d=0;f=0;while(f<c){QV(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=My(e);}else b=A6f;}}return b;}
function P2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BP(i);k=A5K(i).data;Jx(j,c);c=0;l=k.length;if(c>l){f=new BU;Y(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cq=o.cq+1|0;p=Q(Ha,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AS9(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BB(o.iL,p);c=0;while(c<i){b=e.data;Nm(o,h[c],n[c],k[c],b[c]);g.qk(CX(h[c]),b[c]);c=c+1|0;}}
function ALh(a){var b;if(Dx(Bi(a)))GU(a);else{b=a.d;O5(b.h,b.w,b.A);}H$(a);Ey(a);return 1;}
function DI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e0)return 0;if(Dx(Bi(a)))GU(a);c=Mi(ACf(b,C(175),C(21)),C(176),(-1));d=c.data;b=a.d;e=b.h;f=b.w;g=b.A;AD$(e,f,g,c);h=d.length;if(!h)b=A6f;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B5(i+Bc(h-1|0,J(C(176)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(176))){m=l+1|0;c[l]=P(C(176),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=My(k);}F6(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CP(a,m,m!=f?J(d[h-1|0]):b.A+J(d[0])|0,0);F$(a);Ey(a);return 1;}
function GU(a){var b,c,d;b=Er(Bi(a));c=a.d.h;d=Bi(a);Pc(c,d,UT(c,d));CP(a,b.K,b.ba,0);F$(a);Ey(a);}
function F$(a){var b,c;(Bi(a)).dt=0;b=(Bi(a)).bN;c=a.d;Cf(b,c.w,c.A);b=(Bi(a)).bB;c=a.d;Cf(b,c.w,c.A);}
function AKs(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cK.d0;e.b=d-b|0;d=a.b3;e.a=!d?c+a.eg|0:c+a.ci|0;d=!d?(a.i.a+a.c1|0)-a.eg|0:(((a.i.a+a.co|0)+a.c$|0)+a.ci|0)-a.eg|0;Bs(a.bj,d,a.i.b+b|0,e,a.eq.br.ei);}}
function AGk(a){var b;b=a.b3?a.i.a+a.c$|0:a.i.a+a.k.a|0;Kp(a.fW,a.bx,a.i.b,Ek(a),OL(a),b,a.c$);b=!a.b3?a.i.a+a.c1|0:((a.i.a+a.ci|0)+a.co|0)+a.c$|0;Rx(a.fD,a.d.dT,b,Gl(a),a.jw,a.i.b+Ek(a)|0,a.c$);}
function AFW(a){var b,c;b=Zx(a.fW);c=Zx(a.fD);if(!(!b&&!c)){B$(a.bj,1);if(b)GW(a.fW,a.bj);if(c)GW(a.fD,a.bj);if(b)G2(a.fW,a.bj);if(c)G2(a.fD,a.bj);}}
function AGz(a){var b,c,d,e,f;b=a.ii;c=a.k;b.b=c.b;b.a=a.ci;d=!a.b3?a.c1-a.co|0:(c.a-Ir(a)|0)-a.ci|0;b=a.bj;c=a.i;Bs(b,c.a+d|0,c.b,a.ii,a.eq.br.uF);b=a.ii;d=a.b3;b.a=!d?(a.co-a.ci|0)-a.eg|0:((a.co+a.c$|0)+a.ci|0)-a.eg|0;e=d?0:(a.c1-a.co|0)+a.ci|0;c=a.bj;f=a.i;Bs(c,f.a+e|0,f.b,b,a.eq.br.ei);}
function ABI(b,c){return Be(Bd(0,b),c);}
function GD(a){return a.cK.e2;}
function GK(a,b,c){var d,e,f;d=DW(b);e=new K;M(e);H(H(e,C(177)),d);$rt_globals.console.info($rt_ustr(L(e)));CP(a,0,0,0);f=new Zc;f.w3=a;f.w2=b;f.w1=c;c=En();BC(c);d=new Zb;d.As=c;U6(b,f,d);}
function JD(a,b,c,d,e){if(IR(a,e))return 1;if(c&&d)return 1;if(c)F3(a,a.bx+((Bc(b,a.V)*12|0)/10|0)|0);else if(!d){Iq(a,a.d.w+b|0,e);ABL(a);}return 1;}
function Sb(a,b,c,d){var e,f,g;if(IR(a,d))return 1;e=F1(a);if(!c)f=a.d.A+b|0;else if(b>=0)f=G9(e,a.d.A);else{b=a.d.A;if(!b)f=(-1);else{c=Kk(e,b);if(c>0&&e.ev.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ev.data[c-1|0];}}if(f>e.S){e=a.d;if((e.w+1|0)<CJ(e.h))CP(a,a.d.w+1|0,0,d);}else if(f>=0)DA(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cd(e.h,b-1|0)).S;CP(a,a.d.w-1|0,g,d);}}ACH(a);return 1;}
function IR(a,b){if(Dx(Bi(a))&&!b){F$(a);H$(a);return 1;}if(!(b&&Dx(Bi(a))))F$(a);return 0;}
function CP(a,b,c,d){a.d.A=c;return Iq(a,b,d);}
function Iq(a,b,c){var d;d=a.d;d.w=E6(0,b,CJ(d.h)-1|0);return DA(a,a.d.A,c);}
function DA(a,b,c){var d,e;a.d.A=E6(0,b,(F1(a)).S);a.d.it=a.bS===0.0?0:GX(F1(a),a.d.A,a.bj.ch,a.f1);N6(a);H$(a);if(c)(Bi(a)).dt=1;d=Bi(a);e=a.d;N7(d,e.w,e.A);(Bi(a)).dt=0;return 1;}
function MA(a,b){var c;c=AWr(Bi(a));DA(a,b,0);JM(Bi(a),c);}
function H$(a){ABL(a);ACH(a);}
function ABL(a){var b,c,d,e,f;b=a.bx;c=b+Ek(a)|0;d=a.d.w;e=a.V;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))F3(a,d-e|0);else if(f>(c-e|0))F3(a,(f-Ek(a)|0)+a.V|0);}
function ACH(a){var b,c,d,e,f;b=CY(a.cK.cf*30.0);c=a.d.dT;d=c+Gl(a)|0;e=a.d.it;f=e+b|0;if(e<(c+b|0))IL(a,e-b|0);else if(f>(d-b|0))IL(a,(f-Gl(a)|0)+b|0);}
function IX(a,b){var c,d;CP(a,b.bq,b.bv,0);c=G9(F1(a),a.d.A);Cf((Bi(a)).bB,a.d.w,c);b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}
function Fy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E6(0,((b.b-d.b|0)+a.bx|0)/a.V|0,CJ(a.d.h)-1|0);g=!a.b3?a.c1:(a.ci+a.co|0)+a.c$|0;h=Bd(0,(e-g|0)+a.d.dT|0);b=Cd(a.d.h,f);d=a.bj.ch;i=a.f1;if(!(b.eX!==null&&!b.g8))NB(b,d,i);j=b.eX;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=ABx(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.S;else{j=Z$(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A7l){b=new K;M(b);U(H(U(H(U(H(b,C(178)),e),C(179)),h),C(180)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DR(f,k);}
function VJ(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.A=b.bv;c.it=GX(Cd(c.h,d),a.d.A,a.bj.ch,a.f1);N6(a);}
function F1(a){var b;b=a.d;return Cd(b.h,b.w);}
function LR(a,b,c,d){var e,f;e=CY((a.V*4|0)*d/150.0);f=CY(c);if(e)F3(a,a.bx+e|0);if(f)IL(a,a.d.dT+f|0);return 1;}
function S6(a,b,c){(Bi(a)).dt=0;return 1;}
function Wu(a,b,c){var d;if(c)return null;d=F5(a.fW,b.j,a.ry,1);if(d!==null)return d;d=F5(a.fD,b.j,a.u_,0);if(d!==null)return d;Jg(a);VJ(a,Fy(a,b.j));Ly(a.d);if(!b.bL&&!(Bi(a)).dt){b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}(Bi(a)).dt=1;b=Bi(a);d=a.d;N7(b,d.w,d.A);b=new ACK;b.zt=a;return b;}
function O9(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cN){b=b.j;e=Fy(a,b);f=Ja(a.d.h,e.bq,e.bv);g=SP(a,f);h=Ow(a.fB,Ea(a.d),HE(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new Yl;e.Dg=a;e.Dd=b;e.De=g;h.tO(i,c,d,e,a.j9);}else{e=Cq(a.d.h.dP,f);if(e!==null){IX(a,e);c=1;}else{e=Cq(a.d.h.dF,f);if(e!==null&&!ED(e)){if(e.q!=1){Zv(a.kS,b,e,a,g);c=1;}else{IX(a,BG(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fy(a,b.j)).bq;g=Cd(a.d.h,c);c=GM(g,a.d.A);d=G9(g,a.d.A);b=Om(g,c);if((d-1|0)==g.S){Cf((Bi(a)).bN,
a.d.w,Pp(g));Cf((Bi(a)).bB,a.d.w,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.cc.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.A;if(c==j){c=GM(g,c-1|0);d=G9(g,c);}else{if(d!=j){QL(Bi(a),a.d.w);break b;}c=GM(g,d+1|0);d=G9(g,c);}}}Cf((Bi(a)).bN,a.d.w,c);(Bi(a)).dt=1;CP(a,a.d.w,d,0);(Bi(a)).dt=0;Jg(a);}}break a;case 3:break;default:break a;}QL(Bi(a),a.d.w);ZV(a.d.h3);Jg(a);}}return 1;}
function Xu(a,b){var c,d,e,f,g,h,i,j;c=a.cK.cV;if(Ga(a.fW,b.j,c))return 1;if(Ga(a.fD,b.j,c))return 1;d=a.de;if(Gk(b.j,d.gB,d.fw)&&GI(c)?1:0)return 1;e=b.j;f=!a.b3?a.c1:(a.co+a.ci|0)+a.c$|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gl(a);i=Ek(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GI(c);if(b.cN){e=Fy(a,b.j);e.bv=GM(Cd(a.d.h,e.bq),e.bv);b=a.d.h;if(!M0(b.dP,e)&&!M0(b.dF,e)?0:1)return DY(c,C(181));}return DY(c,C(182));}
function A2j(a,b){var c,d,e,f,g;c=b.cN;if(c&&b.bm==65){c=CJ(a.d.h)-1|0;d=GA(a.d.h,c);Cf((Bi(a)).bN,0,0);Cf((Bi(a)).bB,CJ(a.d.h)-1|0,d);return 1;}if(c&&b.bm==80){Mp(a.d);return 1;}if(!a.e0&&c&&b.bm==90){if(Dx(Bi(a)))F$(a);b=a.d.h;b.cq=b.cq+1|0;e=b.iL;d=e.q;if(!d)e=null;else{f=(EN(e,d-1|0)).data;e=WS(b,f[0]);c=1;while(c<f.length){WS(b,f[c]);c=c+1|0;}}if(e!==null){CP(a,e.a,e.b,0);Ey(a);}return 1;}if(!c&&!b.dA){if(Bj(b.eh,C(183))){DI(a,C(184));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.eh,C(185))){DI(a,C(186));DA(a,a.d.A
-1|0,0);c=1;}else if(Bj(b.eh,C(36))){DI(a,C(22));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.eh,C(187))){DI(a,C(188));DA(a,a.d.A-1|0,0);c=1;}else if(Bj(b.eh,C(189))){DI(a,C(190));DA(a,a.d.A-1|0,0);c=1;}else if(!Bj(b.eh,C(191)))c=0;else{DI(a,C(192));DA(a,a.d.A-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dA&&!b.cN)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.oo.data[c];if(e!==null)e.f();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bm){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AJx(a,b))return 1;if(AGh(a,b))return 1;c=b.cN;if(c&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bm;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dA&&!b.kC)return J(b.eh)>0&&DI(a,b.eh)?1:0;return 0;}return 0;}
function AA3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=TO(a);d=TN(a);if(b.fe!=3&&b.gD==3){e=T0(b.po);f=new WO;f.yK=c;f.yJ=d;g=new Rq;g.sx=f;while(!g.mU&&AB2(e,g)){}if(!g.mU&&Bj(C(193),Ea(b))){c=Bd(0,c-100|0);d=Be(CJ(b.h)-1|0,d+100|0);BB(b.po,BF(c,d));h=BP(3);i=h.data;i[0]=FF(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.B.data.length);k=0;while(k<d){j=j+GA(e,k)|0;if(k!=(e.B.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Aq=E4();e=b.fc;l=new ACI;l.sn=b;i=Q(B,3);m=i.data;m[0]=Fa(b.h);m[1]=h;b=b.h.dh;g=BL();ABh(b,b.df,
g);h=BP(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BG(g,o);d=k+1|0;n[k]=b.b0;q=d+1|0;n[d]=b.bY;k=q+1|0;n[q]=b.fR;o=o+1|0;}m[2]=h;CU(e,l,C(194),i);}}}
function VH(a){Mp(a.d);}
function ZO(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fQ){c=E2(b);d=new K;M(d);H(H(d,c),C(195));$rt_globals.console.info($rt_ustr(L(d)));}c=Ea(b);if(c!==null&&!Bj(C(182),c)){d=b.h.dh;e=QG(d,d.df);if(e===null){Oo(b);KI(b.h);}else{f=DX([Do(e),De(e),e.bX.fR]);g=Fa(b.h);h=BP(1);h.data[0]=AId(c);d=b.h.e6;if(d.fE===null){i=BP(0);j=B5(0);}else{c=AUe(AWl(e.cm,d.fd),e);W7(c);i=c.oL;j=c.mX;}k=b.h.cq;c=b.fc;d=new OV;d.Aw=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BP(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CU(c,d,C(196),l);}}
else KI(b.h);}
function He(a,b,c){var d,e,f,g,h,i;if(c&&a.e0)return 0;d=Er(Bi(a));e=d.K;if(Dx(Bi(a))){f=a.d.h;g=Bi(a);h=UT(f,g);if(c)Pc(f,g,h);if(c){CP(a,d.K,d.ba,0);F$(a);Ey(a);}}else{h=Fu(FM(a.d.h.B.data[e]),C(176));i=Be(CJ(a.d.h)-1|0,e);Cf((Bi(a)).bB,i,0);if(e>=(CJ(a.d.h)-1|0))Cf((Bi(a)).bB,i,GA(a.d.h,i));else Cf((Bi(a)).bN,i+1|0,0);if(c)GU(a);else CP(a,e,0,0);}b.g(h);return 1;}
function AGh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.e0)return 0;a:{switch(b.bm){case 8:if(Dx(Bi(a))){GU(a);c=1;}else{b=a.d;d=b.A;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;O5(b.h,e,c);}else{e=b.w-1|0;c=GA(b.h,e);b=a.d.h;LE(b,e);F6(b,e,GA(b,e),1,C(176));}Ey(a);c=CP(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dx(Bi(a)))DI(a,a.fy);else{f=Er(Bi(a));g=F7(Bi(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=BP(e);i=h.data;j=Q(BJ,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fy;d=d+1|0;e=l;}b=new ACP;m=a.d;AJS(b,m.w,m.A);m=new AAj;m.zn
=a;P2(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fy)|0;g.ba=g.ba+J(a.fy)|0;MA(a,a.d.A+J(a.fy)|0);Ey(a);}c=1;}else b:{if(!Dx(Bi(a))){b=a.d;f=Cd(b.h,b.w);if(f.s.data.length>0){g=U9(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.w;b=DR(e,m.A);n.cq=n.cq+1|0;o=n.iL;h=Q(Ha,1);h.data[0]=AS9(e,0,1,g,b.bq,b.bv);BB(o,h);Nm(n,e,0,1,g);HM(f,0,J(g));MA(a,a.d.A-J(g)|0);}}else{b=Er(Bi(a));f=F7(Bi(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=BP(c);k=h.data;j=Q(BJ,c);q=j.data;g=a.d;e=g.A;l=g.w;c=0;while(p<=f.K){g=Cd(a.d.h,p);if(g.s.data.length>0){g=U9(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Jj(h,c);j=C8(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.K){f.ba=Bd(0,f.ba-J(g)|0);MA(a,a.d.A-J(g)|0);}d=d+1|0;}b=DR(l,e);f=new RA;f.st=a;P2(a,h,0,1,j,b,f);}Ey(a);c=1;}break a;case 13:if(Dx(Bi(a)))GU(a);b=a.d;E1(Cd(b.h,b.w));b=a.d;AKN(b.h,b.w,b.A);Ey(a);c=CP(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ALh(a);}return c;}
function AJx(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cN?Iq(a,H_(a.bx,a.V),b.bL):JD(a,2-U0(Ek(a),a.V)|0,0,b.dA,b.bL);break a;case 34:c=!b.cN?JD(a,U0(Ek(a),a.V)-2|0,0,b.dA,b.bL):Iq(a,((a.bx+Ek(a)|0)/a.V|0)-1|0,b.bL);break a;case 35:if(!IR(a,b.bL)&&!DA(a,(F1(a)).S,b.bL)){c=0;break a;}c=1;break a;case 36:if(!IR(a,b.bL)&&!DA(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cN;if(c&&b.dA){Jg(a);d=a.d.h3;e=d.dL;if(e<=0)d=null;else{f=d.fr.data;c=e-1|0;d.dL=c;d=f[c];}if(d===null)c=1;else{CP(a,L7(d),KV(d),0);JM(Bi(a),
d.oH);c=1;}break a;}c=Sb(a,(-1),c,b.bL);break a;case 38:c=JD(a,(-1),b.cN,b.dA,b.bL);break a;case 39:c=b.cN;if(c&&b.dA){d=a.d.h3;e=d.dL;if(e==(d.fo-1|0))d=null;else{f=d.fr.data;c=e+1|0;d.dL=c;d=f[c];}if(d===null)c=1;else{CP(a,L7(d),KV(d),0);JM(Bi(a),d.oH);c=1;}break a;}c=Sb(a,1,c,b.bL);break a;case 40:c=JD(a,1,b.cN,b.dA,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bi(a)).bB;d=a.d;Cf(b,d.w,d.A);}if(c)Ly(a.d);return c;}
function Jg(a){var b,c,d,e,f,g,h;b=a.d;c=b.h3;d=c.dL;c=d<0?null:c.fr.data[d];if(c!==null&&b.w==L7(c)&&a.d.A==KV(c))return;c=a.d;e=c.h3;b=new NT;d=c.w;f=c.A;c=Bi(a);b.py=DR(d,f);g=AWr(c);b.oH=g;g.dt=0;f=e.dL;h=e.fo;if(f==(h-1|0))ACu(e,b);else{d=f+1|0;while(d<h){ZV(e);d=d+1|0;}ACu(e,b);}e.dL=e.dL+1|0;}
function Ey(a){a.d.h.z2=MY(GD(a));}
function H1(a,b){var c,d,e,f;a.Ck=null;LM(a.de,null);AD7(a.d);c=a.d;a.d=b;K7(c,null,null);K7(b,a,GD(a));d=(B3(a.fB.vi)).data;e=d.length;f=0;while(f<e){d[f].qk(c,b);f=f+1|0;}a.bx=GG(b.mI*a.V);}
function SP(a,b){var c;c=L1(a.d.h,b);if(c===null)return C(21);return c.v;}
function HC(a,b){var c,d,e,f,g;a.d.lD=b;if(b===null){Bk(Bt(),C(197));LM(a.de,null);}else{b=b.data;c=DM(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.hb<<24>>24;e=e+1|0;}LM(a.de,c);}}
function IZ(a,b){a.d.qC=b;}
function Bi(a){return a.d.rD;}
function LZ(a){var b;b=a.iw;if(b!==null)b.g(a);}
function AIe(){var a=this;B.call(a);a.lJ=null;a.n7=null;a.gY=null;}
function AHs(a,b){var c=new AIe();AWz(c,a,b);return c;}
function AWz(a,b,c){var d,e;a.lJ=b;a.n7=c;d=null;e=new UO;e.sz=a;b.pp(d,e);b=null;d=new UP;d.rI=a;c.pp(b,d);}
function YG(a,b,c){var d,e,f,g,h,i,j;d=a.gY;if(d!==null&&d.is!==null){e=b!==a.lJ?0:1;f=b.lj();g=(b.kv()+f|0)/2|0;h=g-f|0;d=a.gY;d=d.is.data[GO(d,g,e)];i=g-(!e?d.h7:d.h8)|0;j= -(b.hI(f)-(b.kX()).b|0)|0;c.qf(Bc(((!e?d.h8:d.h7)+i|0)-h|0,c.pw())+j|0);return;}}
function TW(){B.call(this);this.Bp=null;}
function AMi(a,b){Wd(a.Bp,b);}
function TX(){B.call(this);this.y0=null;}
function A1m(a,b){Wd(a.y0,b);}
function TY(){B.call(this);this.w$=null;}
function APR(a,b){return AHk(a.w$,b);}
function HS(){var a=this;B.call(a);a.oM=null;a.sD=null;a.r3=null;}
function A7m(a,b){var c=new HS();It(c,a,b);return c;}
function It(a,b,c){var d;d=null;a.oM=b.bw;a.sD=d;a.r3=c;}
function AOr(a,b){var c,d;if(b.cN&&b.bm==79){c=a.sD;if(c!==null&&b.bL)Jc(a.oM,c);else Kf(a.oM,a.r3);d=1;}else d=0;return d;}
function TU(){B.call(this);this.u5=null;}
function AQD(a,b){var c,d,e;c=a.u5;d=DO(c.r,c.E)?c.E:!DO(c.r,c.G)?null:c.G;if(d!==null){e=new RJ;e.x5=c;e.x3=d;e.x4=b;GK(d,b,e);c.k_=null;c.mz.gY=null;c.fI.es=null;}}
function TV(){B.call(this);this.s1=null;}
function A1T(a,b){b=b;return AJy(a.s1,b);}
var C2=G(0);
function ADz(){var a=this;B.call(a);a.b$=null;a.b7=null;a.ea=null;}
function Md(a,b,c,d,e){var f,g;f=Nt(a.b$);Gh(f,b,c);b=a.b$;c=b.ed;g=new ACY;g.wZ=b;g.wY=c;f.j3=g;Se(f,d,e);Gn(a,f);}
function Gn(a,b){var c;c=a.ea;if(c!==b)a.ea=BV(c,b);}
function OA(a,b){var c;c=new ACL;c.q7=a;c.q9=b;return c;}
function Yo(a,b){var c;c=new ADK;c.yg=a;c.yh=b;return c;}
function DS(a){var b;b=a.ea;if(b!==null){Mq(b);Gn(a,null);}}
function EI(a,b){var c,d,e,f;c=a.b7;d=c.db;e=c.dm;if(d==e.data.length)c.dm=C8(e,d+4|0);d=c.db;f=d;while(0<f){e=c.dm.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dm.data[0]=b;c.db=d+1|0;c.gd=null;return b;}
function Iu(a,b){Sf(a.b7,b);}
function JQ(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B3(a.b7)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.b$.bH;d.W.dw(e);f=d.Q;g=d.ge.jd;if(!RU(f)){if(!Oh(f)&&!(!f.eJ&&f.dZ!==null)){f.eJ=0;ACn(f);h=f.ez;i=(h.ep+h.eI+5.0)/10.0;j=Cu(f.f_,f.kO);h=e.ch;k=f.ez;l=f.jK;m=i*2.0;Cn(h,k);n=j+Lr(h,l,m)|0;f.im=n;n=E6(0,n,f.k.a);if(n){h=D5(e,n,f.k.b,f.f_.cz);Cn(h,f.ez);k=f.jK;m=j;i=m+i;l=f.ez;o=l.ep;B0(h,k,i,m+o-(o+l.eI)/16.0);k=f.dZ;if(k===null){k=CV(e);f.dZ=k;}CM(k,h);Ez(h);Cr(f.mK,0.0,0.0,BQ(f.dZ),CO(f.dZ));}}h=g.l9;k
=f.dZ;if(k===null)QH(f,e,0,f.k.a,h);else{j=BQ(k);g=g.oc;k=f.i;n=k.a;p=k.b;k=f.dZ;DJ(e,n,p,k.eT,f.mK,k,g,h,f.f_.cz);n=f.k.a;if(j<n)QH(f,e,j,n-j|0,h);}}l=d.di;if(l!==null){q=d.bb;h=d.Q;k=d.ge.jd;if(l.i9!==null){if(l.dg===null)AGr(l,q);n=Cu(q,2.0);j=Bd(0,((h.k.b-CO(l.dg)|0)/2|0)-n|0);l.gf.a=(((h.i.a+h.k.a|0)-j|0)-BQ(l.dg)|0)-n|0;f=l.gf;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.kI;j=BQ(l.dg);r=n*2|0;X(f,j+r|0,CO(l.dg)+r|0);f=q.bH;g=l.gf;Bs(f,g.a,g.b,l.kI,!l.lS?k.l9:k.jJ);Cr(q.mt,0.0,0.0,BQ(l.dg),CO(l.dg));f=q.bH;g=l.gf;n
=g.a+n|0;p=g.b+p|0;g=l.dg;DJ(f,n,p,g.eT,q.mt,g,k.oc,!l.lS?k.l9:k.jJ,0);}}B$(e,1);j=Cu(d.bb,2.0);n=RU(d.Q);f=d.bb;g=f.d0;f=f.p5;p=n?0:d.Q.k.b;h=d.W.k;X(f,h.a,h.b+p|0);AI2(e,f,!n?d.Q.i:d.W.i,d.ge.jd.jJ, -j|0,g);f=d.W;AKc(e,f.k,f.i,j,p,Yi(d.ge.lA,d.bb.cf),d.ge.lA.n2,g);c=c+(-1)|0;}f=a.ea;if(f!==null)AEs(f);}
function H6(a,b){var c,d,e,f;c=a.b$;if(c.cz==b)d=0;else{c.cz=b;Jv(c.e2);d=1;}if(d){c=a.ea;if(c!==null){c=B7(c.cg);while(B_(c)){Oc(Ca(c));}}e=(B3(a.b7)).data;b=e.length;f=0;while(f<b){c=e[f];c.Q.eJ=1;c.W.ke();f=f+1|0;}}return d;}
function AU0(a,b){var c,d,e,f,g,h,i,j,k;c=a.ea;if(c!==null){d=0;e=c.cg.q-1|0;a:{while(e>=0){d=NV(BG(c.cg,e),b.j,c.cP.cV);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B3(a.b7)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(BW(h.Q,c)){i=h.di;if(i!==null)i.lS=Tg(i,c);e=DY(h.bb.cV,null);}else{i=h.di;if(i!==null)i.lS=0;e=Cu(h.bb,7.0);j=Cu(h.bb,25.0);if(M7(h,c.a,e)){k=Xk(h,c.a,j);if(Ne(h,c.b,e)){e=DY(h.bb.cV,L8(k,C(198)));break b;}if(KN(h,c.b,e)){e=DY(h.bb.cV,L8( -k|0,C(198)));break b;}}if(Oj(h,c.b,e)){j=ADq(h,
c.b,j);if(OE(h,c.a,e)){e=DY(h.bb.cV,L8(j,C(199)));break b;}if(ML(h,c.a,e)){e=DY(h.bb.cV,L8( -j|0,C(199)));break b;}}e=0;}}c:{d:{if(!e){if(!BW(h.W,b.j))break d;if(!h.W.bU(b)&&!DY(h.bb.cV,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AM2(a,b,c,d){var e,f,g,h,i,j;e=a.ea;if(e!==null){f=0;g=e.cg.q-1|0;a:{while(g>=0){f=Of(BG(e.cg,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B3(a.b7)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!BW(i.Q,b.j)&&!PO(i,b.j)){if(!Mg(i,b))break c;if(!i.W.cy(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AO2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.ea;if(d!==null){e=null;f=d.cg.q-1|0;a:{while(f>=0){e=BG(d.cg,f);g=b.j;h=Fb(e.cp,g);if(!h&&!Ld(e.cp)){e=e.kW;if(e!==null)e.f();}e=!h?null:A7n;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B3(a.b7);j=0;while(true){k=i.data;if(j>=k.length)break;b:{g=k[j];l=b.j;if(!c){c:{m=Cu(g.bb,7.0);n=Cu(g.bb,25.0);if(M7(g,l.a,m)){f=Xk(g,l.a,n);if(Ne(g,l.b,m)){d=J7(g,l,f,(-1));break c;}if(KN(g,l.b,m)){d=J7(g,l,f,1);break c;}}if(Oj(g,l.b,m)){h=ADq(g,l.b,n);if(OE(g,l.a,
m)){d=J7(g,l,(-1),h);break c;}if(ML(g,l.a,m)){d=J7(g,l,1,h);break c;}}d=null;}if(d!==null)break b;if(BW(g.Q,l)){e=g.di;if(e!==null&&Tg(e,l)){g.di.i9.f();d=A7n;break b;}e=g.W.i;f=e.a;h=l.a;f=f-h|0;m=e.b;n=l.b;m=m-n|0;e=g.Q.i;h=e.a-h|0;n=e.b-n|0;e=new Bg;d=new Yk;d.qr=g;d.qt=h;d.qs=n;d.qp=e;d.qo=f;d.qq=m;break b;}}d=!Mg(g,b)?null:g.W.cn(b,c);}if(d!==null){if(!c&&g!==ADv(a)){b=a.b7;f=0;k=b.dm;i=k.data;c=i.length;d:{while(true){if(f>=c){f=(-1);break d;}if(g===i[f])break;f=f+1|0;}}if(f>=0){h=b.db;if(h<=f){b=new Ok;Bm(b,
J4(f));N(b);}if(f){e=i[f];while(f>0){i[f]=i[f-1|0];f=f+(-1)|0;}i[0]=e;i=b.gd;if(i!==null)C6(k,0,i,0,h);}}}return d;}j=j+1|0;}return null;}
function A2d(a,b,c){var d,e,f,g,h;d=a.ea;if(d!==null&&Jt(d))return 1;e=(B3(a.b7)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!BW(d.Q,b.j)){if(!Mg(d,b))break b;if(!d.W.dB(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function AYc(a,b,c){var d,e,f,g,h;d=(B3(a.b7)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.W;h.dz(h.i,h.k,c);h=g.Q;if(h.hE!==null){h.ez=null;h.im=0;h.eJ=1;}Iv(g);h=g.di;if(h!==null)NW(h);f=f+1|0;}}
function ADv(a){var b;b=a.b7;return b.db<=0?null:MN(b,0);}
function TA(){var a=this;B.call(a);a.bH=null;a.e2=null;a.cV=null;a.bO=null;a.cf=0.0;a.cz=0;a.ed=null;a.dU=null;a.d0=null;a.p5=null;a.mt=null;a.Cg=null;}
function KQ(a){var b;b=a.ed;if(b!==null)b.uA();}
function K5(a){var b;b=a.ed;if(b!==null)b.wp();}
function M1(a,b){var c;c=a.e2.eu!==(Ev()).activeElement?0:1;if(c)K5(a);a.ed=b;if(c)KQ(a);}
function FN(a,b){K5(a);a.ed=b;KQ(a);}
function ABv(a,b){if(a.ed===b)a.ed=null;}
function DO(a,b){return b!==a.ed?0:1;}
function Kl(a){return a.bH.ch;}
function Fk(a,b){return Gy(a.bH,b.ia,b.gZ*a.cf,b.j8,0);}
function Cu(a,b){return Cg(b,a.cf);}
function Kx(a,b){var c;c=a.bH;if(!a.cz)c.pU=b;else c.ok=b;Jv(a.e2);}
function Wl(){B.call(this);this.v5=null;}
function A19(a,b,c,d){var e,f,g,h;e=(B3(a.v5.b7)).data;f=e.length;g=0;a:{while(g<f){if(e[g].W.dy(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function Wk(){B.call(this);this.tu=null;}
function AM3(a,b){var c,d,e,f;b=b;c=a.tu;b=b.j;d=0;e=c.b7.db;a:{while(d<e){f=MN(c.b7,d);if(!BW(f.Q,b)&&!PO(f,b)&&!ACm(f,b)?0:1){c=MN(c.b7,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.wO;if(c!==null&&AGn(c.uV,b)?1:0){d=1;break b;}}d=0;}return d;}
function AFd(){var a=this;B.call(a);a.eS=null;a.o0=0.0;a.iD=0.0;a.hh=0;}
function AXx(){var a=new AFd();ARN(a);return a;}
function ARN(a){var b;b=S$(0,0,2,20);a.eS=b;a.o0=0.5;a.iD=0.0;IG(187,187,187,255,b.X);}
function Vs(a){return a.eS.t.b;}
function S2(a){return a.eS.t.a;}
function AA_(a,b){var c,d;a:{c=a.hh;if(b>a.iD)while(true){d=a.iD+a.o0;a.iD=d;a.hh=a.hh?0:1;if(b>d)continue;else break a;}}return a.hh==c?0:1;}
function Ua(a,b,c){X(a.eS.u,b,c);}
function YF(a,b){a.iD=b+a.o0*1.25;a.hh=1;}
function AB8(a,b,c){if(a.hh)ZQ(a.eS,b,c.a,c.b);}
function ADU(){var a=this;B.call(a);a.gc=null;a.h=null;a.pT=null;a.rD=null;a.h3=null;a.jv=null;a.fc=null;a.lD=null;a.w=0;a.A=0;a.it=0;a.iV=null;a.iG=null;a.po=null;a.fe=0;a.gD=0;a.gW=0;a.i4=FJ;a.Aq=FJ;a.A8=FJ;a.qC=0;a.EK=0;a.dT=0;a.mI=0.0;a.fQ=0;}
function A4B(a,b,c){var d=new ADU();AK5(d,a,b,c);return d;}
function AN7(a,b){var c=new ADU();ARe(c,a,b);return c;}
function A4H(a,b,c){var d=new ADU();VD(d,a,b,c);return d;}
function AK5(a,b,c,d){VD(a,(AIE(b)).kj,c,d);}
function ARe(a,b,c){VD(a,b,null,c);}
function VD(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rD=AMx();f=new Ty;f.fr=Q(NT,16);f.fo=0;f.dL=(-1);a.h3=f;a.iV=null;a.iG=BL();a.po=BL();a.fe=1;a.gD=1;a.gW=1;a.dT=0;a.mI=0.0;a.fQ=0;a.gc=d;a.pT=c;c=new ZR;g=e.length;b=Q(DH,Bd(1,g));if(!g)b.data[0]=XP(C(21));h=b.data;i=0;while(i<g){h[i]=XP(e[i]);i=i+1|0;}d=new Ys;f=new NQ;QO(f);d.fd=f;c.e6=d;c.dP=JU();c.dF=JU();c.iL=BL();if(!h.length){c=new BU;Y(c);N(c);}c.B=b;j=ACk(c);c.dh=AGU(ATy(KW(0,j,0),null,null));a.h=c;}
function Ea(a){var b;b=a.pT;if(b===null){b=a.gc;b=b===null?C(182):AHW(b.gQ);}return b;}
function HE(a){var b;b=a.gc;return b===null?null:b.kt;}
function Mr(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gD=3;a.gW=3;a.fe=3;c=CQ(b[0]);d=EQ(b[1]);CQ(b[2]);if(b.length<5)N_(a.h,c,d);else{e=CQ(b[3]);f=e.data;g=EQ(b[4]);Xv(a.h,c,d,e,g,0);TJ(a,Jj(e,f.length),Op(g));}if(a.fQ){h=E2(a);i=JO(E4(),a.i4);j=new K;M(j);H(HL(H(H(j,h),C(200)),i),C(201));$rt_globals.console.info($rt_ustr(L(j)));}h=a.jv;if(h!==null)LZ(h);}
function Ly(a){var b;SB(a,DR(a.w,a.A),Ja(a.h,a.w,a.A));if(!(a.iV!==null&&!ED(a.iG))){b=a.A;if(b>0)SB(a,DR(a.w,b-1|0),Ja(a.h,a.w,a.A-1|0));}}
function SB(a,b,c){var d,e,f,g,h,i,j,k;AD7(a);d=Cq(a.h.dP,c);if(d!==null)c=d;a:{e=Cq(a.h.dF,c);if(e!==null){a.iV=L1(a.h,c);c=B7(e);while(true){if(!B_(c))break a;f=Ca(c);BB(a.iG,L1(a.h,f));}}}c=a.jv;if(c!==null){g=b.bq;h=b.bv;b=c.fB;f=Ea(c.d);e=HE(c.d);i=(B3(b.vI)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Bl(f,e)){b=b.D1;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new P3;e.Eq=c;e.Es=f;e.Er=g;e.Ep=h;b.tO(f,g,h,e,c.j9);}}}
function AD7(a){a.iV=null;Iy(a.iG);}
function TJ(a,b,c){var d,e,f,g,h;if(a.fc!==null){a.A8=E4();d=a.h.cq;e=a.fc;f=new Yj;f.zd=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BP(1);b.data[0]=d;h[2]=b;CU(e,f,C(202),g);}}
function K7(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jv=b;a.fc=c;if(c===null){d=a.h.B.data;e=d.length;f=0;while(f<e){Tj(d[f]);f=f+1|0;}}else if(a.fe==1){a.i4=E4();b=Ea(a);if(BO(b,C(182))){a.gD=3;a.gW=3;a.fe=3;b=a.jv;if(b!==null)LZ(b);}else{e=BO(b,C(193));f=BO(b,C(203));d=Fa(a.h);g=d.data.length;h=!e?5120:10240;i=AId(b);if(f)JR(a,d,i);else if(g<=h)JR(a,d,i);else if(!e){Vr(a,Op(d),i);JR(a,d,i);}else{Vr(a,Op(d),i);j=Op(d);k=a.fc;c=new Q6;c.zf=a;l=Q(B,2);m=l.data;m[0]=j;j=BP(1);j.data[0]=i;m[1]=j;CU(k,c,C(204),l);a.gD=
2;JR(a,d,i);}}}}
function Vr(a,b,c){var d,e;d=a.fc;e=new U4;e.zz=a;CU(d,e,C(205),I(B,[b,DX([c,250])]));a.gW=2;}
function JR(a,b,c){var d,e,f,g;d=a.fc;e=new W8;e.xV=a;f=Q(B,2);g=f.data;g[0]=b;b=BP(1);b.data[0]=c;g[1]=b;CU(d,e,C(206),f);a.fe=2;}
function E2(a){var b;b=a.gc;return b===null?C(21):ACq(b);}
function Mp(a){var b,c,d,e,f;if(a.fQ){b=E2(a);c=new K;M(c);H(H(c,b),C(207));$rt_globals.console.info($rt_ustr(L(c)));}b=Ea(a);if(b===null)d=null;else{a:{e=(-1);switch(N0(b)){case -1655966961:if(!Bj(b,C(203)))break a;e=3;break a;case 3401:if(!Bj(b,C(208)))break a;e=2;break a;case 98723:if(!Bj(b,C(209)))break a;e=1;break a;case 3254818:if(!Bj(b,C(193)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(210);break b;case 2:d=C(211);break b;case 3:d=C(212);break b;default:d=null;break b;}d=C(213);}}if
(d===null)LZ(a.jv);else{a.i4=E4();b=a.fc;c=new ABo;c.vj=a;f=Q(B,1);f.data[0]=Fa(a.h);CU(b,c,d,f);}}
function Oo(a){var b;b=AUe(a.h.e6,null);W7(b);TJ(a,b.oL,b.mX);}
function ADI(){var a=this;B.call(a);a.yt=null;a.BY=null;a.qL=null;a.vI=null;a.vi=null;a.AQ=null;}
function Ow(a,b,c){return RG(a,B3(a.yt),b,c);}
function Zi(a,b,c){return RG(a,B3(a.BY),b,c);}
function RG(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Bl(c,d))return g.EV;f=f+1|0;}return null;}
function ABP(a,b,c){var d,e,f,g;d=(B3(a.qL)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Bl(b,c))return g.EQ;f=f+1|0;}return null;}
function Fs(){var a=this;B.call(a);a.cb=0;a.da=null;a.cE=null;a.eD=null;a.dK=0;}
var A7o=0;var A7k=0;function XA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cE;j=i===b&&!i.jh?0:1;if(j){a.cE=b;NB(b,c.ch,a.da.g9);}k=H_(Be(FG(b),e+2048|0),1024);l=a.eD;m=l.data.length;n=k<=m?0:1;if(n){a.eD=C8(l,k);while(m<k){a.eD.data[m]=CV(c);m=m+1|0;}}o=a.da.hK;if(!(!j&&!n)){if(A7o){l=b.gm;$rt_globals.console.info("fMeasure"+l.data);A7o=0;}if(!A7k){c=o.dc;b="alphabetic";c.textBaseline=b;}else{b=o.dc;c="top";b.textBaseline=c;}a.dK=f/1024|0;p=0;while(p<k){Kg(a,o,d,a.dK+p|0);p=p+1|0;}a.cE.jh=0;}e=a.eD.data.length;if
(e&&f<=FG(a.cE)){f=f/1024|0;g=a.dK;if(f!=g){if(Wq(f-g|0)>=e){g=0;while(g<e){Kg(a,o,d,f+g|0);g=g+1|0;}a.dK=f;}else{while(true){g=a.dK;if(g>=f)break;Kg(a,o,d,g+e|0);a.dK=a.dK+1|0;}while(true){g=a.dK;if(g<=f)break;Kg(a,o,d,g-1|0);a.dK=a.dK-1|0;}}}}}
function Kg(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Yh(a,e);g=a.cE;if(f>=g.s.data.length)return;h=g.gm;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cb;l=a.da.g9;ER(b);a:{while(true){g=a.cE;if(f>=g.s.data.length)break a;m=l.data;g=JW(g,f);n=m[KE(g)];o=!A7k?LL(n,c):Ni(n,c);m=h.data;Cn(b,n);B0(b,g.v,k,o);k=m[f]-j+a.cb;if(k>1024.0)break;f=f+1|0;}}h=a.eD.data;CM(h[d%h.length|0],b);}
function Qg(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eD.data.length;if(!o)return;if(g>FG(a.cE))return;p=a.cE;q=p.eX;r=p.s;s=g/1024|0;t=Yh(a,g);u= -a.cb|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eD.data[s%o|0];bb=w[t];bc=z[t]+a.cb|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.cb|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cb:2*a.cb|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cb:2*a.cb|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gs;if(bb===j)bo=h.br.rz;if(k!==null){p=B7(k);d:{while(B_(p)){if(BO(Ca(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.wn;}if(n!==null){w=n.nF;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AEc(h.d7,h,bi,n.hb);}if(!bn&&!bl){i.b=Be(i.b,FG(a.cE));AF7(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.cb:0)|0,(g
+bg|0)<=(i.b+(!y?a.cb:2*a.cb|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.cb:0)|0,g-x|0,bo);}else{bp=h.jP.data[bb.bZ];p=bn?h.br.k2:S8(bo,WW(h,bp.mT));Cr(a.da.ju,g-x|0,0.0,bg,v);X(a.da.ij,bg,f);Hd(a.da,d,ba,u+c|0,b,bp.g7,p);}if((bb.bF&12)>>2>0){bc=u+c|0;B$(d,1);p=a.da;bq=p.nH;bq.a=bg;x=b+p.ua|0;bk=x-p.BL|0;br=p.qU;bs=x+br;ba=p.ht;T1();Mc(d,bc,bk,bq,br,bs,ba,A7p.lb.g7);B$(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AF7(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jP.data[h.bZ];o=n.g7;p=S8(m,WW(f,n.mT));q=f.br.k2;f=a.da;r=f.ju;s=f.ij;t=l;u=i-j|0;v=u;w=e;Cr(r,t,0.0,v,w);X(s,u,e);Hd(a.da,b,g,c,d,o,p);l=l+i|0;Cr(r,l-k|0,0.0,k,w);X(s,k,e);f=a.da;c=c+i|0;Hd(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cr(r,t,0.0,i,w);X(s,i,e);Hd(a.da,b,g,c-j|0,d,o,q);}
function S8(b,c){if(b!==null)c=b;return c;}
function Yh(a,b){var c,d,e,f,g,h,i;c=a.cE;d=c.gm;e=0;f=c.s.data.length;g=b;b=BK(e,f);if(b>0){c=new BU;Y(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BK(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AD1(a){var b,c,d;b=a.eD.data;c=b.length;d=0;while(d<c){AGu(b[d]);d=d+1|0;}a.eD=a.da.nT;a.cE=null;}
function AIP(a,b,c,d,e,f,g,h,i){var j,k;j=FG(a.cE);if(j)j=j+a.cb|0;if(!j)j=j-a.cb|0;k=Bd( -a.cb|0,j-g|0);if(k>=h)return;X(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Zl(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fs,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.ud(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cE===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fs;g.cb=3;g.dK=0;g.da=d;g.eD=d.nT;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AD1(q);j=j+1|0;}return i;}
function S0(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cE;if(e!==null)e.jh=1;d=d+1|0;}}
function Ov(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AD1(b[d]);d=d+1|0;}}
function AF$(){A7k=0;}
function AHJ(){var a=this;B.call(a);a.f6=null;a.dn=null;a.e9=null;a.fG=null;a.oD=null;a.op=null;}
function Jb(){var a=new AHJ();AX4(a);return a;}
function AX4(a){a.f6=new Bg;a.dn=new Bg;a.e9=new Bg;a.fG=new Bg;a.oD=new B2;a.op=new B2;}
function Zx(a){var b;b=a.dn;return !Bc(b.a,b.b)?0:1;}
function IN(a,b){return Gk(b,a.e9,a.fG);}
function F5(a,b,c,d){var e,f,g,h,i;e=IN(a,b);f=Gk(b,a.f6,a.dn);if(!e&&!f)return null;if(!f){if(!d)c.g(U_(a,b.a-a.e9.a|0));else c.g(QJ(a,b.b-a.e9.b|0));}g=!d?a.f6.a+(a.dn.a/2|0)|0:a.f6.b+(a.dn.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sj;b.v2=a;b.v3=c;b.v1=i;}else{b=new Si;b.rR=a;b.rP=c;b.rQ=i;}return b;}
function H8(a,b,c){if(c!==null)BR(a.oD,c);if(b!==null)BR(a.op,b);}
function AFo(b,c){var d;d=new ABX;d.tt=b;d.B9=c;return d;}
function QJ(a,b){var c,d,e;c=a.fG.b;d=a.dn.b;e=c-d|0;return AFo(Be(Bd(0,b-(d/2|0)|0),e),e);}
function U_(a,b){var c,d,e;c=a.fG.a;d=a.dn.a;e=c-d|0;return AFo(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Kp(a,b,c,d,e,f,g){Vd(a,b,c,d,e,f,g,1);}
function Rx(a,b,c,d,e,f,g){Vd(a,b,c,d,e,f,g,0);}
function Vd(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(YN(d,d,e),i);e=e-d|0;i=d-j|0;i=i?YN(b,i,e):0;if(!h){k=a.f6;k.a=i+c|0;k.b=f-g|0;l=a.dn;l.a=j;l.b=g;l=a.e9;l.a=c;l.b=k.b;k=a.fG;k.a=d;k.b=g;break a;}k=a.f6;k.a=f-g|0;k.b=i+c|0;l=a.dn;l.a=g;l.b=j;l=a.e9;l.a=k.a;l.b=c;k=a.fG;k.a=g;k.b=d;break a;}}X(a.fG,0,0);X(a.dn,0,0);}}
function Vt(a,b){GW(a,b);G2(a,b);}
function GW(a,b){var c;c=a.e9;Bs(b,c.a,c.b,a.fG,a.oD);}
function G2(a,b){var c,d;c=a.dn;c.a=c.a-2|0;c.b=c.b-2|0;d=a.f6;Bs(b,d.a+1|0,d.b+1|0,c,a.op);b=a.dn;b.a=b.a+2|0;b.b=b.b+2|0;}
function Ga(a,b,c){return IN(a,b)&&GI(c)?1:0;}
function AFc(){var a=this;B.call(a);a.E6=20;a.gB=null;a.fw=null;a.lw=0.0;a.lt=null;a.jo=0;a.kY=0;a.hl=0;a.c5=null;a.oF=null;a.fi=null;a.gN=null;a.gL=0;}
function AHB(){var a=new AFc();A2o(a);return a;}
function A2o(a){a.E6=20;a.gB=new Bg;a.fw=new Bg;a.c5=BL();a.oF=DM(0);}
function ABK(a,b,c){var d,e,f,g,h;d=a.gL;if(b==d)return;e=a.c5.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){RV(a,b);a.gL=b;}else{XN(a,c);if(a.gL>=b)while(true){if(h<g)break a;a.gL=Pr(BG(a.c5,h%e|0),a.fi,a.gN,a.gL,b,f,a.lw);h=h+(-1)|0;}while(g<=h){a.gL=Pr(BG(a.c5,g%e|0),a.fi,a.gN,a.gL,b,f,a.lw);g=g+1|0;}}}}
function LM(a,b){if(b===null)b=DM(0);a.oF=b;}
function AA2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hl;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c5;h=BG(h,g%h.q|0);i=a.gB;j=a.oF;k=h.ft.b;l=d.le;m=b+f|0;n=h.cu;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&V4(d,j,r,l)!==l.k$?0:1){k=Bc((q-p|0)+1|0,h.cu);X(h.je,BQ(h.cQ),k);Cr(h.jZ,0.0,Bc(p,h.cu),BQ(h.cQ),k);t=r;}else{u=V4(d,j,r,l);No(h,e,f+Bc(p,h.cu)|0,i,l.o3,u);X(h.je,BQ(h.cQ),h.cu);Cr(h.jZ,0.0,Bc(q,h.cu),BQ(h.cQ),h.cu);p=q;}q=q+1|0;r=t;}u=V4(d,j,r,l);No(h,
e,f+Bc(p,h.cu)|0,i,l.o3,u);g=g+1|0;f=f+a.hl|0;}}
function SY(a,b,c,d){var e,f,g,h,i,j;e=a.c5.q;while(true){f=a.c5.q;g=Bc(f,a.hl);if(g>(d+a.kY|0))break;h=BF(0,g);i=new QN;g=a.fw.a;f=a.kY;j=a.lt;i.je=new Bg;i.jZ=new B2;i.qh=h;i.ef=20;i.cu=f;i.ft=BF(g,20*f|0);i.hy=LL(j,f);if(i.cQ===null)i.cQ=CV(b);BB(a.c5,i);}if(f==e)return;XN(a,b);RV(a,c);}
function RV(a,b){var c,d,e,f,g,h,i,j,k;c=a.c5;d=c.q;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B7(c);while(B_(c)){f=Ca(c);g=a.fi;h=a.lw;ER(g);i=0;while(true){j=f.ef;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;GR(f,g,Dm(e),Bc(f.cu,i)+f.hy|0,h);i=i+1|0;}CM(f.cQ,g);f.w4=g.ji;}}
function YK(a,b,c,d){a.lt=b;a.kY=c;a.hl=c*20|0;a.jo=d;YM(a);}
function XN(a,b){var c;c=a.fi;if(!(c!==null&&c.ji==a.jo)){c=D5(b,a.fw.a,a.hl,a.jo);a.fi=c;Cn(c,a.lt);Z_(a.fi,2);}c=a.gN;if(!(c!==null&&c.ji==a.jo)){b=D5(b,a.fw.a,a.kY,a.jo);a.gN=b;Cn(b,a.lt);Z_(a.gN,2);}}
function ID(a){Ft(a.c5,new ADC);Iy(a.c5);YM(a);}
function YM(a){a.fi=BV(a.fi,null);a.gN=BV(a.gN,null);}
function Sk(a,b,c,d,e){Co(a.gB,b);X(a.fw,c,d);a.lw=e;}
function Xp(){B.call(this);this.Ds=null;}
function Xo(){B.call(this);this.qA=null;}
function AMv(a,b){var c;c=a.qA;F3(c,FW(b,K1(c)));}
function Xn(){B.call(this);this.tj=null;}
function ALO(a,b){var c;c=a.tj;IL(c,FW(b,AA$(c)));}
function AKf(){var a=this;B.call(a);a.ju=null;a.ij=null;a.nH=null;a.ht=null;a.g9=null;a.nT=null;a.cX=null;a.hK=null;a.qU=0.0;a.d9=0;a.ua=0;a.BL=0;a.iP=0;}
function APV(a){var b=new AKf();ATl(b,a);return b;}
function ATl(a,b){var c;a.ju=new B2;a.ij=new Bg;a.nH=new Bg;c=new B2;a.ht=c;a.g9=Q(LA,4);a.nT=Q(Iw,0);a.iP=b;LD(c);}
function Ym(a){a.hK=BV(a.hK,null);}
function So(a,b,c){var d,e;d=CY(EA(a.cX)*b);a.d9=d;e=a.cX;a.ua= -( -((d+e.ep+e.eI)/2.0)|0)|0;AD5(a,c);return a.d9;}
function PY(a,b){var c,d;LD(a.ht);c=a.ht;UZ(c,b,c);a.qU=W5(a.ht);c=a.ht;d=c.bs+c.bf+1.5|0;a.BL=d;X(a.nH,0,d*2|0);}
function AD5(a,b){a.hK=BV(a.hK,D5(b,1024,a.d9,a.iP));}
function Hd(a,b,c,d,e,f,g){var h,i;h=a.ij;if(h.a&&h.b){i=a.ju;if(i.bC!==0.0&&i.bf!==0.0){DJ(b,d,e,h,i,c,f,g,a.iP);return;}}}
function Xm(){B.call(this);this.A6=null;}
function AU2(a){var b,c;b=a.A6;c=b.j_?0:1;b.j_=c;b=new K;M(b);Jw(H(b,C(214)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xt(){B.call(this);this.xA=null;}
function AXc(a){var b,c;b=a.xA;c=b.k4^1;b.k4=c;b=new K;M(b);Jw(H(b,C(215)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xs(){B.call(this);this.t4=null;}
function A3e(a){var b,c,d,e,f;b=a.t4;c=(b.eg+3|0)%6|0;b.eg=c;d=b.eW.data;e=d.length;f=0;while(f<e){b=d[f];b.cb=c;b=b.cE;if(b!==null)b.jh=1;f=f+1|0;}}
function Xr(){B.call(this);this.wr=null;}
function AP2(a){var b;b=a.wr;b.b3=b.b3?0:1;ID(b.de);b.de=AHB();N$(b);AAD(b,b.i,b.k,b.cK.cf);}
function Xq(){B.call(this);this.rk=null;}
function ARK(a){var b;b=a.rk;b.lY=b.lY?0:1;}
function Xl(){B.call(this);this.zu=null;}
function A2I(a){var b;b=a.zu;b.pX=b.pX?0:1;}
function UO(){B.call(this);this.sz=null;}
function AP5(a){var b;b=a.sz;YG(b,b.lJ,b.n7);}
function UP(){B.call(this);this.rI=null;}
function AZV(a){var b;b=a.rI;YG(b,b.n7,b.lJ);}
var AGl=G();
function Ny(){B.call(this);this.Dl=null;}
var A6Z=null;var A7q=null;function AX5(){AX5=Bn(Ny);A23();}
function ANR(a){var b=new Ny();AH7(b,a);return b;}
function AH7(a,b){AX5();a.Dl=b;}
function A23(){A6Z=ANR(C(216));A7q=ANR(C(217));}
var AEN=G(0);
function AIX(b,c,d){return IG(b,c,d,255,new B2);}
function IG(b,c,d,e,f){Cr(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Vk(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOI(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bs=h+i;e.bf=j+i;return e;}
function Ix(b,c,d,e,f){f=Vk(b,c,d,f);f.bC=e;return f;}
function HX(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Z6=G();
function AON(a,b){var c,d,e;c=b.cN;d=c&&!b.bL&&!b.dA&&!b.kC?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.dA&&!b.kC?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.oQ=1;}return 0;}
function Z5(){B.call(this);this.xv=null;}
function AWd(a,b){var c;c=a.xv.ed;return c!==null&&c.iv(b)?1:0;}
function TM(){var a=this;B.call(a);a.bb=null;a.wO=null;a.CN=null;a.E1=null;a.Q=null;a.di=null;a.W=null;a.ge=null;a.pS=0;}
function AEr(a){var b=new TM();ARA(b,a);return b;}
function A2v(a,b){var c=new TM();AFn(c,a,b);return c;}
function ARA(a,b){AFn(a,b,AUA());}
function AFn(a,b,c){var d;a.bb=b;d=new Up;E3(d);d.mK=new B2;d.f_=b;a.Q=d;a.W=c;}
function Tn(a,b){var c,d;if(a.di===null){c=new QI;c.gf=new Bg;c.kI=new Bg;a.di=c;d=a.ge;if(d!==null)AAt(c,d);}a.di.i9=b;}
function DL(a,b){var c;c=a.Q;c.eJ=c.eJ|(BO(c.jK,b)?0:1);c.jK=b;Iv(a);}
function AAu(a,b,c){var d,e,f;d=a.Q;e=BO(d.hE,b)?0:1;f=c===d.kO?0:1;if(e){d.hE=b;d.ez=null;QC(d,0);}d.eJ=d.eJ|(!e&&!f?0:1);d.kO=c;d.im=0;Iv(a);}
function Fc(a,b){var c;a.ge=b;c=b.tl;BC(b);AAu(a,c,3.0);c=a.di;if(c!==null)AAt(c,b);}
function JZ(a){var b;b=a.Q;b.dZ=BV(b.dZ,null);b.ez=null;a.W=BV(a.W,null);b=a.di;if(b!==null){NW(b);b.i9=null;}}
function Lc(a,b){var c,d,e;c=a.W;d=c.i;e=c.k;b=BV(c,b);a.W=b;b.dz(d,e,a.bb.cf);}
function Et(a,b,c){a.W.dz(b,c,a.bb.cf);Iv(a);}
function Iv(a){var b,c,d;if(a.bb.cf!==0.0){b=a.Q;if(b.hE!==null){c=a.W.k.a;b.k.a=c;d=b.dZ;if(d!==null&&c!=BQ(d)&&!(c>=b.im&&BQ(b.dZ)>=b.im))b.eJ=1;b=a.Q;b.bS=a.bb.cf;if(Oh(b))c=0;else{b=a.Q;QC(b,VC(b));c=b.k.b;}b=a.Q.i;d=a.W.i;X(b,d.a,d.b-c|0);b=a.di;if(b!==null)Co(b.gf,a.Q.i);return;}}}
function ACE(a){return VC(a.Q);}
function Mg(a,b){return ACm(a,b.j);}
function ACm(a,b){var c;c=!(a.pS&1)?0:1;return !c&&!BW(a.W,b)?0:1;}
function L8(b,c){if(b<0)c=C(218);else if(b>0)c=C(219);return c;}
function OE(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function ML(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Ne(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function KN(a,b,c){var d,e;d=a.W;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Oj(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.W;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ADq(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.W;return AJp(b,d,(e.i.b+e.k.b|0)-c|0);}
function M7(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Xk(a,b,c){var d,e;d=a.Q;e=d.i.a;return AJp(b,e+c|0,(e+d.k.a|0)-c|0);}
function AJp(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BK(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function PO(a,b){var c;a:{b:{c:{c=Cu(a.bb,7.0);if(M7(a,b.a,c)){if(Ne(a,b.b,c))break c;if(KN(a,b.b,c))break c;}if(!Oj(a,b.b,c))break b;if(!OE(a,b.a,c)&&!ML(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function J7(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.W;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new Vz;b.uZ=a;b.u0=e;b.u9=f;b.u$=c;b.u6=g;b.u7=j;b.u3=l;b.u4=d;b.u1=h;b.u2=k;b.vN=m;return b;}
function Kn(){var a=this;B.call(a);a.u=null;a.t=null;a.X=null;a.bl=null;}
function St(){var a=new Kn();AB$(a);return a;}
function S$(a,b,c,d){var e=new Kn();AM6(e,a,b,c,d);return e;}
function AB$(a){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;}
function AM6(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;Hj(a,b,c,d,e);}
function Hj(a,b,c,d,e){X(a.u,b,c);X(a.t,d,e);}
function ABb(a){X(a.t,0,0);}
function Ld(a){var b;b=a.t;return Bc(b.a,b.b)?0:1;}
function Fb(a,b){return Gk(b,a.u,a.t);}
function ZQ(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.X);}
function VT(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bl;i=a.X;Gv(b,b.iT);GF(b.iT,b.Y,d,e,g,b.c7);N4(b.iT,b.Y,c);g=b.iT;j=b.Y;FE(j,g.wf,h);FE(j,g.wd,i);c=g.sX;j.uniform2f(c,f,0.0);F2(b);}
var Fn=G();
function Nw(){Fn.call(this);this.EV=null;}
function AAV(){Fn.call(this);this.EQ=null;}
function YU(){Fn.call(this);this.D1=null;}
var Hh=G(0);
var SA=G(0);
function B2(){var a=this;B.call(a);a.bn=0.0;a.bs=0.0;a.bf=0.0;a.bC=0.0;}
function ADR(a,b,c,d){var e=new B2();A0t(e,a,b,c,d);return e;}
function AK_(a){var b=new B2();AKg(b,a);return b;}
function A0t(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function Cr(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function AKg(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;}
function BR(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;return a;}
function AUk(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BE(a)===BE(b)){b=b;if(b.bn===a.bn&&b.bs===a.bs&&b.bf===a.bf&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
var LI=G(0);
function AIw(){var a=this;Fq.call(a);a.cH=null;a.q=0;}
function BL(){var a=new AIw();AOs(a);return a;}
function AOs(a){a.cH=Q(B,10);}
function MT(a,b){var c,d;c=a.cH.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cH=C8(a.cH,d);}}
function BG(a,b){KC(a,b);return a.cH.data[b];}
function AZG(a){return a.q;}
function BB(a,b){var c,d;MT(a,a.q+1|0);c=a.cH.data;d=a.q;a.q=d+1|0;c[d]=b;a.b2=a.b2+1|0;return 1;}
function AJB(a,b,c){var d,e,f;QE(a,b);MT(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cH.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cH.data[b]=c;a.q=d+1|0;a.b2=a.b2+1|0;}
function EN(a,b){var c,d,e,f;KC(a,b);c=a.cH.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b2=a.b2+1|0;return d;}
function AG9(a,b){var c;c=La(a,b);if(c<0)return 0;EN(a,c);return 1;}
function Iy(a){AEY(a.cH,0,a.q,null);a.q=0;a.b2=a.b2+1|0;}
function AIJ(a,b,c){var d,e,f,g,h,i;QE(a,b);if(c.eG())return 0;MT(a,a.q+c.c2()|0);d=c.c2();e=a.q;f=e-1|0;while(f>=b){g=a.cH.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.b9();i=0;while(i<d){g=a.cH.data;e=b+1|0;g[b]=h.b_();i=i+1|0;b=e;}a.b2=a.b2+1|0;return 1;}
function KC(a,b){var c;if(b>=0&&b<a.q)return;c=new BH;Y(c);N(c);}
function QE(a,b){var c;if(b>=0&&b<=a.q)return;c=new BH;Y(c);N(c);}
function Ft(a,b){var c;c=0;while(c<a.q){b.g(a.cH.data[c]);c=c+1|0;}}
function LA(){var a=this;B.call(a);a.oj=null;a.Ct=null;a.o1=0.0;a.CG=0;a.CW=0;a.ts=0;a.DA=0;a.ep=0.0;a.eI=0.0;a.Cx=0.0;a.p6=0.0;a.CC=0;a.qY=null;}
function LL(a,b){return Ni(a,b)+a.ts|0;}
function Ni(a,b){return (b-EA(a)|0)/2|0;}
function EA(a){return CY(a.ep+a.eI);}
function Nj(a,b){return CY((a.ep+a.eI)*b);}
function Iw(){var a=this;B.call(a);a.eL=null;a.f4=null;a.eT=null;}
var A6I=0;function AGu(a){var b;b=a.f4;if(b!==null){A6I=A6I-1|0;a.eL.d4.deleteTexture(b);a.f4=null;}}
function BQ(a){return a.eT.a;}
function CO(a){return a.eT.b;}
function Td(a,b,c,d){var e;e=a.eT;e.a=b;e.b=c;Or(a);a.eL.d4.texStorage2D(3553,1,d,b,c);e=a.eL.d4;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Or(a){var b,c;b=a.eL.d4;c=a.f4;b.bindTexture(3553,c);}
function CM(a,b){WN(a,b.nW,b.np,32856);YQ(a,b,0,0);}
function WN(a,b,c,d){var e,f,g,h;a:{e=a.eT;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Or(a);break a;}e=a.eL.d4;h=a.f4;e.deleteTexture(h);a.f4=a.eL.d4.createTexture();Td(a,b,c,d);break a;}}Td(a,b,c,d);}}
function JN(a,b,c,d){Or(a);YQ(a,b,c,d);}
function YQ(a,b,c,d){var e;e=a.eL.d4;b=b.i$;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var YJ=G(0);
var A7r=0.0;function LD(b){Cr(b,1.0471975803375244,0.75,1.25,0.375);}
function UZ(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jl(b.bC,Jl(c,A7r));Cr(d,b.bn/c,b.bs*c,ATM(b.bf*c,1.25),e);}
function W5(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function AEq(){A7r=Na(Na(0.5,0.375),4.0);}
var OJ=G(0);
function GI(a){return DY(a,null);}
function Rw(b){var c;c=new ZZ;c.vE=b;return c;}
function Y3(){B.call(this);this.tH=null;}
function AXI(a){KQ(a.tH);}
function Y2(){B.call(this);this.v$=null;}
function AUN(a){K5(a.v$);}
function AKX(){var a=this;B.call(a);a.bN=null;a.bB=null;a.dt=0;}
function AMx(){var a=new AKX();A2P(a);return a;}
function AWr(a){var b=new AKX();AQY(b,a);return b;}
function A2P(a){a.bN=new Hi;a.bB=new Hi;}
function AQY(a,b){a.bN=new Hi;a.bB=new Hi;JM(a,b);}
function JM(a,b){ABZ(a.bN,b.bN);ABZ(a.bB,b.bB);a.dt=b.dt;}
function N7(a,b,c){Cf(a.bB,b,c);if(!a.dt)Cf(a.bN,b,c);}
function QL(a,b){Cf(a.bN,b,0);Cf(a.bB,b+1|0,0);}
function Er(a){if(R1(a.bN,a.bB)>0)return a.bB;return a.bN;}
function F7(a){if(R1(a.bN,a.bB)<0)return a.bB;return a.bN;}
function AKd(a,b){var c,d,e,f;c=a.bN;d=c.K;e=a.bB;if(d==e.K&&c.ba==e.ba?1:0)return null;c=Er(a);e=F7(a);d=c.K;if(d<=b){f=BK(b,e.K);if(f<=0)return BF(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dx(a){var b,c;b=a.bN;c=a.bB;return (b.K==c.K&&b.ba==c.ba?1:0)?0:1;}
function Ty(){var a=this;B.call(a);a.fr=null;a.fo=0;a.dL=0;}
function ACu(a,b){var c,d,e;c=a.fo;d=a.fr;if(c==d.data.length)a.fr=C8(d,c+16|0);d=a.fr.data;e=a.fo;a.fo=e+1|0;d[e]=b;}
function ZV(a){var b,c,d;b=a.dL;c=a.fo-1|0;if(b==c)a.dL=b-1|0;d=a.fr.data;a.fo=c;d[c]=null;}
var G1=G();
function ZR(){var a=this;G1.call(a);a.B=null;a.dh=null;a.e6=null;a.dP=null;a.dF=null;a.iL=null;a.lF=null;a.cq=0;a.nu=0;a.z2=0.0;}
function Cd(a,b){return a.B.data[b];}
function CJ(a){return a.B.data.length;}
function ACk(a){return FF(a,CJ(a));}
function GA(a,b){return a.B.data[b].S;}
function AKN(a,b,c){var d,e,f,g,h;d=a.B;e=d.data;f=e[b];d=C8(d,e.length+1|0);e=d.data;a.B=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D7(Q(Cy,0));a.B.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=D7(Q(Cy,0));}else{e=(IS(f,c)).data;d=a.B.data;d[b]=e[0];d[b+1|0]=e[1];}F6(a,b,c,0,C(176));}
function LE(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=D7(L2(d.s,e.s));g=a.B;h=g.data.length;if(b<h&&b>=0){i=Q(DH,h-1|0);c=i.data;ZK(g,b,i);c[b]=f;a.B=i;return;}d=new Bu;Y(d);N(d);}
function O5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].S?0:1)){d=(Cd(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F6(a,b,c,1,NH(e));h=a.B.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=ZK(d,e,Q(Cy,f-1|0));else{j=i[e];if(c<=0)k=Ec(Dw(j.v,1),j.bZ,j.bF);else if(c>=(J(j.v)-1|0)){k=new Cy;l=j.v;ABn(k,Cw(l,0,J(l)-1|0),j.bZ,j.bF);}else{d=B5(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=Ec(Hs(d),j.bZ,j.bF);}i[e]=k;}h.S=h.S-1|0;E1(h);}else if(b!=(d.length-1|0)){F6(a,b,c,1,C(176));LE(a,b);}}
function AD$(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AAd(a.B.data[b],c,e[0]);return;}g=f-1|0;d=(IS(a.B.data[b],c)).data;h=d[0];i=d[1];d=a.B;j=C8(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);ME(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gr(e[m])?XP(e[m]):D7(Q(Cy,0));d[b+m|0]=k;m=m+1|0;}ME(i,0,0,e[g]);d[b+g|0]=i;a.B=j;}
function UT(a,b){var c,d,e,f,g,h,i;c=Er(b);d=F7(b);e=c.K;if(e==d.K)return Cw(FM(a.B.data[e]),c.ba,d.ba);f=new K;M(f);b=a.B.data[c.K];e=c.ba;BM(BY(f,Dw(FM(b),e)),10);g=a.B.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AEk(BY(f,FM(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.B.data[d.K];h=d.ba;BY(f,Cw(FM(b),0,h));return L(f);}b=new Ok;Y(b);N(b);}
function Pc(a,b,c){var d;ACZ(a,b);d=Er(b);F6(a,d.K,d.ba,1,c);}
function ACZ(a,b){var c,d,e,f,g,h,i;a:{c=Er(b);d=F7(b);e=c.K;if(e==d.K)HM(a.B.data[e],c.ba,d.ba);else{b=a.B.data[e];HM(b,c.ba,b.S);HM(a.B.data[d.K],0,d.ba);e=c.K+1|0;f=d.K;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DH,(h-f|0)+e|0);AFE(g,e,f,i);a.B=i;LE(a,c.K);break a;}b=new Bu;Y(b);N(b);}b=new Bu;Y(b);N(b);}}}
function Ja(a,b,c){return DR(b,GM(Cd(a,b),c));}
function ADo(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(Cd(a,c)).S|0)>=b)return BF(c,b-d|0);d=d+((Cd(a,c)).S+1|0)|0;c=c+1|0;}return BF(e,0);}
function FF(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+GA(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function L1(a,b){return Om(Cd(a,b.bq),b.bv);}
function Fa(a){var b,c,d,e,f,g,h,i,j;b=B5(ACk(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;QV(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F6(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cq=a.cq+1|0;f=a.iL;g=Q(Ha,1);h=new Ha;h.ej=b;h.e1=c;i=Mi(e,C(176),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BF(b,c+J(i[0])|0);break a;}k=BF((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BF(b,c);}i=g.data;h.pt=k;h.n_=d;h.gU=e;i[0]=h;BB(f,g);Nm(a,b,c,d,e);}
function Nm(a,b,c,d,e){var f;f=FF(a,b)+c|0;if(!d){XO(a.dh,f,J(e));TH(a.e6,f,J(e));}else{Va(a.dh,f,J(e));Pn(a.e6,f,J(e));}}
function WS(a,b){var c,d,e;c=Mi(b.gU,C(176),(-1));if(b.n_){AD$(a,b.ej,b.e1,c);XO(a.dh,FF(a,b.ej)+b.e1|0,J(b.gU));TH(a.e6,FF(a,b.ej)+b.e1|0,J(b.gU));}else{c=c.data;d=AMx();Cf(d.bN,b.ej,b.e1);e=c.length;if(e==1)Cf(d.bB,b.ej,b.e1+J(c[0])|0);else Cf(d.bB,(b.ej+e|0)-1|0,J(c[e-1|0]));ACZ(a,d);Va(a.dh,FF(a,b.ej)+b.e1|0,J(b.gU));Pn(a.e6,FF(a,b.ej)+b.e1|0,J(b.gU));}return b.pt;}
function ABz(a){return a.nu==a.cq?0:1;}
function KI(a){a.nu=a.cq;}
function Nh(a){var b,c,d;a.lF=BP(a.B.data.length+1|0);b=0;while(b<a.B.data.length){c=a.lF.data;d=b+1|0;c[d]=(c[b]+(Cd(a,b)).S|0)+1|0;b=d;}}
function VN(a,b){var c,d,e,f,g,h;c=a.lF;if(c===null){d=0;e=0;a:{while(true){c=a.B.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DR(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DR(f,0);}return h;}d=AJ9(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DR(d,b-(d<0?0:a.lF.data[d])|0);if(h.bv>=(Cd(a,h.bq)).S){h.bq=h.bq+1|0;h.bv=0;}return h;}
var Mb=G(0);
function FU(a){return L3(a.tr(),a.pb());}
function L3(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BM(BY(e,b[f]),47);f=f+1|0;}return L(BY(e,c));}
var TC=G(0);
function SQ(){var a=this;B.call(a);a.il=null;a.ga=null;a.h6=null;}
function AKa(a,b){var c=new SQ();APd(c,a,b);return c;}
function A3q(a,b,c){var d=new SQ();AEK(d,a,b,c);return d;}
function APd(a,b,c){AEK(a,b,c,Q(BJ,0));}
function AEK(a,b,c,d){a.il=b;a.ga=c;a.h6=d;}
function DW(a){var b;b=a.il;return H4(b!==null?b.name:a.ga.name);}
function AL_(a){return a.h6;}
function U6(a,b,c){var d,e,f;d=AKY(c);e=new Vw;e.ra=b;b=a.ga;if(b!==null)b.text().then(Bv(e,"f"),Bv(d,"f"));else{b=a.il.getFile();f=new Vx;f.rX=e;f.rY=d;b.then(Bv(f,"f"),Bv(d,"f"));}}
function AKY(b){var c;c=new TD;c.yj=b;return c;}
function AYb(a){var b,c,d,e,f,g,h,i;if(a.ga===null)b=L3(a.h6,DW(a));else{c=a.h6;b=DW(a);d=a.ga.size;e=d|0;if(e!==d){f=DW(a);g=new K;M(g);H(H(g,C(220)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BY(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BY(g,C(37));H(g,i[h]);h=h+1|0;}BY(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(221)),b),C(222)),e);b=L(g);}return b;}
function ALY(a){return (AFM(DW(a))*31|0)+AGD(a.h6)|0;}
var ACR=G(0);
function AJY(){B.call(this);this.iM=null;}
function A3E(a){var b=new AJY();AZg(b,a);return b;}
function AZg(a,b){a.iM=b;}
function EQ(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iM));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iM));}
function AWv(a){var b,c;b=a.iM.byteLength;c=new K;M(c);H(U(H(c,C(223)),b),C(224));return L(c);}
function ZZ(){B.call(this);this.vE=null;}
function DY(a,b){ZS(a.vE,b);return 1;}
function Hi(){var a=this;B.call(a);a.K=0;a.ba=0;}
function Cf(a,b,c){a.K=b;a.ba=c;}
function ABZ(a,b){a.K=b.K;a.ba=b.ba;}
function R1(a,b){var c;c=BK(a.K,b.K);if(c)return c;return BK(a.ba,b.ba);}
function NT(){var a=this;B.call(a);a.py=null;a.oH=null;}
function L7(a){return a.py.bq;}
function KV(a){return a.py.bv;}
function DH(){var a=this;B.call(a);a.s=null;a.S=0;a.gm=null;a.eX=null;a.ev=null;a.ik=null;a.g8=0;a.jh=0;a.jD=0;}
var A7s=0;var A7t=0;var A7l=0;function XP(a){var b=new DH();AKm(b,a);return b;}
function D7(a){var b=new DH();Zr(b,a);return b;}
function AKm(a,b){var c;c=Q(Cy,1);c.data[0]=AI6(b);Zr(a,c);}
function Zr(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;E1(a);}
function Jq(a){return a.s.data.length;}
function JW(a,b){return a.s.data[b];}
function GM(a,b){var c;c=Kk(a,b);return c<=0?0:a.ev.data[c-1|0];}
function Kk(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.ev!==null&&!a.jD)){Vp(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.ev.data[d]=e;d=d+1|0;}a.jD=0;}d=ABx(a.ev,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Om(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Kk(a,b)];}
function HM(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.s=Q(Cy,0);E1(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BK(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=ZK(g,e,Q(Cy,g.data.length-1|0));a.S=a.S-d|0;E1(a);return;}a.s.data[e]=Ec(Fu(Cw(k.v,0,b),Dw(k.v,c)),k.bZ,k.bF);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=Ec(Cw(l.v,0,b),l.bZ,l.bF);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=Ec(Dw(m.v,c),m.bZ,m.bF);g=a.s;a.s=AFE(g,e,f,Q(Cy,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;E1(a);}
function IS(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DH,[D7(Q(Cy,0)),a]);if(b>=a.S)return I(DH,[a,D7(Q(Cy,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DH,[D7(Lv(c,0,Q(Cy,d))),D7(Lv(c,d,Q(Cy,f-d|0)))]);h=e[d];e=Lv(c,0,Q(Cy,d+1|0));i=e.data;j=Lv(c,d,Q(Cy,f-d|0));c=j.data;i[d]=Ec(Cw(h.v,0,b),h.bZ,h.bF);c[0]=Ec(Dw(h.v,b),h.bZ,h.bF);return I(DH,[D7(e),D7(j)]);}
function AAd(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}ME(a,d,b,c);}
function ME(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gr(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cy,1);h.data[0]=AI6(d);a.s=h;}else if(!b&&!c){h=Q(Cy,g+1|0);f=h.data;C6(e,0,h,1,g);f[0]=AI6(d);a.s=h;}else{i=f[b];if(c<=0)j=Ec(Fu(d,i.v),i.bZ,i.bF);else if(c>=J(i.v))j=Ec(Fu(i.v,d),i.bZ,i.bF);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B5(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=Ec(Hs(e),i.bZ,i.bF);}f[b]=j;}a.S=a.S
+J(d)|0;E1(a);}
function Pp(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Ma(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function NB(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gm;if(!(e!==null&&e.data.length>=d)){a.gm=ALE(d);a.eX=BP(d);a.g8=1;}Vp(a);if(!a.g8)A7t=A7t+1|0;else{f=0;g=0.0;A7s=A7s+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.ev.data[h]=f;Cn(b,i[KE(j)]);g=g+Eo(b,j.v);a.gm.data[h]=g;a.eX.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.g8=0;a.jD=0;}}
function Vp(a){var b;b=a.ev;if(!(b!==null&&b.data.length>=a.s.data.length)){a.ev=BP(a.s.data.length);a.jD=1;}}
function Tj(a){a.g8=1;a.ik=null;}
function E1(a){Tj(a);a.jh=1;a.jD=1;}
function Z$(a,b,c,d){var e,f,g,h,i,j,k;if(a.ik===null)a.ik=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.ik.data[d];if(e===null){e=c.data;f=a.s.data[d];Cn(b,e[KE(f)]);f=f.v;e=BP(J(f)-1|0);c=Gt(f);g=!d?0.0:a.gm.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BJ;k=i+1|0;OH(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.ik.data[d]=e;}return e;}
function GX(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.g8&&a.eX!==null))NB(a,c,d);if(b>=a.S)return a.eX.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BK(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eX.data[f];}return (Z$(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FG(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eX.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G9(a,b){var c;if(b>=a.S)return b+1|0;c=Kk(a,b);return a.ev.data[c];}
function FM(a){var b,c,d,e;b=new K;GN(b,a.S);c=a.s.data;d=c.length;e=0;while(e<d){BY(b,c[e].v);e=e+1|0;}return L(b);}
function AFD(){A7l=0;}
function Ys(){var a=this;B.call(a);a.fE=null;a.fd=null;}
function AWl(a,b){var c=new Ys();AXk(c,a,b);return c;}
function AXk(a,b,c){a.fE=b;a.fd=c;}
function TH(a,b,c){var d;d=a.fE;if(d===null)return;Zn(a,d,b,c);}
function Pn(a,b,c){var d;d=a.fE;if(d===null)return;ABC(a,d,b,c);}
function Zn(a,b,c,d){var e,f,g,h;e=b.eZ.b9();while(e.cD()){VQ(a,e.b_(),c,d);}e=b.fF.b9();while(e.cD()){f=e.b_();g=new Th;g.yX=a;ES(a,g,f,c,d);}h=b.hQ.b9();while(h.cD()){e=h.b_();VQ(a,e.ls,c,d);f=new Ti;f.w7=a;ES(a,f,e.kU,c,d);}b=b.cL.b9();while(b.cD()){Zn(a,b.b_(),c,d);}}
function VQ(a,b,c,d){KR(a,b.eH,c,d);}
function ES(a,b,c,d,e){var f,g;a:{if(c instanceof HI){f=c.hw;g=new V2;g.ro=a;g.rm=b;g.rl=d;g.rn=e;Ft(f,g);}else{if(!(c instanceof Kh)){if(!(c instanceof Jm))break a;f=c;ES(a,b,f.jV,d,e);ES(a,b,f.ja,d,e);return;}g=c.ig;f=new V3;f.B6=a;f.B5=b;f.B4=d;f.B3=e;Ft(g,f);}}if(c!==null){c=c.fU;if(c!==null)b.lW(c,CX(d),CX(e));}}
function KR(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e+d|0;}
function ABC(a,b,c,d){var e,f,g,h;e=b.eZ.b9();while(e.cD()){JV(a,(e.b_()).eH,c,d);}e=b.fF.b9();while(e.cD()){f=e.b_();g=new Sn;g.va=a;ES(a,g,f,c,d);}h=b.hQ.b9();while(h.cD()){e=h.b_();JV(a,e.ls.eH,c,d);f=new Sp;f.Ap=a;ES(a,f,e.kU,c,d);}b.eZ.pG(new Sm);b.fF.pG(new Sl);b=b.cL.b9();while(b.cD()){ABC(a,b.b_(),c,d);}}
function JV(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e-d|0;}
function Ln(){var a=this;Ee.call(a);a.c8=0;a.b8=null;a.c0=0;a.B7=0.0;a.nj=0;}
function JU(){var a=new Ln();QO(a);return a;}
function AXt(a,b){return Q(HW,b);}
function QO(a){var b;b=AHD(16);a.c8=0;a.b8=Q(HW,b);a.B7=0.75;TK(a);}
function AHD(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fz(a){var b;if(a.c8>0){a.c8=0;b=a.b8;AEY(b,0,b.data.length,null);a.c0=a.c0+1|0;}}
function TK(a){a.nj=a.b8.data.length*a.B7|0;}
function M0(a,b){return AA6(a,b)===null?0:1;}
function ACc(a){var b;b=new TL;b.y9=a;return b;}
function Cq(a,b){var c;c=AA6(a,b);if(c===null)return null;return c.cT;}
function AA6(a,b){var c,d;if(b===null)c=Sh(a);else{d=b.gH();c=Re(a,b,d&(a.b8.data.length-1|0),d);}return c;}
function Re(a,b,c,d){var e;e=a.b8.data[c];while(e!==null&&!(e.l8==d&&AIq(b,e.cW))){e=e.cY;}return e;}
function Sh(a){var b;b=a.b8.data[0];while(b!==null&&b.cW!==null){b=b.cY;}return b;}
function Nd(a){var b;if(a.o4===null){b=new Qw;b.jl=a;a.o4=b;}return a.o4;}
function Ep(a,b,c){var d,e,f,g;if(b===null){d=Sh(a);if(d===null){a.c0=a.c0+1|0;d=TF(a,null,0,0);e=a.c8+1|0;a.c8=e;if(e>a.nj)AB_(a);}}else{e=b.gH();f=e&(a.b8.data.length-1|0);d=Re(a,b,f,e);if(d===null){a.c0=a.c0+1|0;d=TF(a,b,f,e);e=a.c8+1|0;a.c8=e;if(e>a.nj)AB_(a);}}g=d.cT;d.cT=c;return g;}
function TF(a,b,c,d){var e,f;e=new HW;VY(e,b,null);e.l8=d;f=a.b8.data;e.cY=f[c];f[c]=e;return e;}
function AJd(a,b){var c,d,e,f,g,h,i,j;c=AHD(!b?1:b<<1);d=Q(HW,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b8.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.l8&b;j=h.cY;h.cY=e[i];e[i]=h;h=j;}f=f+1|0;}a.b8=d;TK(a);}
function AB_(a){AJd(a,a.b8.data.length);}
function Lx(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b8.data[0];while(e!==null){if(e.cW===null)break a;b=e.cY;d=e;e=b;}}else{f=b.gH();g=a.b8.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.l8==f&&AIq(b,e.cW))){h=e.cY;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cY=e.cY;else a.b8.data[c]=e.cY;a.c0=a.c0+1|0;a.c8=a.c8-1|0;}if(e===null)return null;return e.cT;}
function AIq(b,c){return b!==c&&!b.bJ(c)?0:1;}
function Cy(){var a=this;B.call(a);a.v=null;a.bZ=0;a.bF=0;}
function AI6(a){var b=new Cy();AWV(b,a);return b;}
function Ec(a,b,c){var d=new Cy();ABn(d,a,b,c);return d;}
function AWV(a,b){ABn(a,b,0,0);}
function ABn(a,b,c,d){a.v=b;a.bZ=c;a.bF=d;}
function KE(a){return a.bF&3;}
function Jn(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Ma(a){return J(a.v);}
var NQ=G(Ln);
function ZW(){var a=this;B.call(a);a.df=null;a.e_=0;}
var A7u=null;function AGU(a){var b=new ZW();AHj(b,a);return b;}
function AHj(a,b){a.e_=0;a.df=b;}
function QG(a,b){var c;if(b.eP)return b;b=B7(b.bo);while(true){if(!B_(b))return null;c=QG(a,Ca(b));if(c!==null)break;}return c;}
function Xj(a,b,c){var d,e,f,g;d=NI(a,a.df,b);if(d===null)return;b=c.cm;e=b===null?A7v:b.cL;f=c.bo;c=a.df;if(d===c){if(c.cm===null)c.cm=b;b=new AAc;b.yU=a;Ft(f,b);b=new AAb;b.u8=a;e.fm(b);b=a.df;b.bo=f;b.cm.cL=e;b.eP=0;return;}if(!ED(f)){c=d.hu;if(c!==null){b=new XL;b.rs=c;Ft(f,b);g=La(c.bo,d);if(g==(-1))H2(c.bo,f);else{EN(c.bo,g);AIJ(c.bo,g,f);}}}b=d.cm;if(b!==null){b=b.hm;c=new Sv;c.sS=b;e.fm(c);g=La(b.cL,d.cm);if(g==(-1))H2(b.cL,e);else{b.cL.qd(g);b.cL.us(g,e);}}}
function NI(a,b,c){var d,e,f,g;d=b.bX;if(d.b0==c.b0&&d.bY==c.bY?1:0){d=B7(b.bo);while(B_(d)){e=NI(a,Ca(d),c);if(e!==null)return e;}return b;}b=B7(b.bo);while(true){if(!B_(b))return null;d=Ca(b);f=c.b0;g=c.bY;e=d.bX;if(e.b0<=f&&g<=e.bY?1:0){e=NI(a,d,c);if(e!==null)break;}}return e;}
function ABh(a,b,c){BB(c,b.bX);b=B7(b.bo);while(B_(b)){ABh(a,Ca(b),c);}}
function XO(a,b,c){a.e_=0;Lp(a,a.df,b,c);}
function Lp(a,b,c,d){var e;if(De(b)<c)return;a:{if(Do(b)>c){LX(b,d);Hr(b,d);b=B7(b.bo);while(B_(b)){Lp(a,Ca(b),c,d);}}else{if(!MR(b,c)){if(a.e_)break a;if(De(b)!=c)break a;}Hr(b,d);if(Do(b)==c&&a.e_)LX(b,d);e=B7(b.bo);while(B_(e)){Lp(a,Ca(e),c,d);}if(!a.e_){b.eP=1;a.e_=1;}}}}
function Va(a,b,c){a.e_=0;MV(a,a.df,b,c);}
function MV(a,b,c,d){var e,f,g,h,i,j;if(De(b)<c)return;e=Do(b);f=c+d|0;if(e>f){e= -d|0;LX(b,e);Hr(b,e);g=B7(b.bo);while(B_(g)){MV(a,Ca(g),c,d);}b.bo=WE(a,b.bo);}else{h=b.bX;if(c<=h.b0&&h.bY<=f?1:0){if(b===a.df){L6(b,0);MU(b,0);h=b.cm;if(h!==null)h.cL.jg();}else{L6(b,(-1));MU(b,(-1));h=b.cm;if(h!==null){ADV(h);b.cm=null;}}Iy(b.bo);}else{e=MR(b,c);f=MR(b,f);if(e&&f)Hr(b, -d|0);else if(e)MU(b,c);else{if(!f)return;L6(b,c);Hr(b, -d|0);}h=B7(b.bo);while(B_(h)){MV(a,Ca(h),c,d);}h=T0(b.bo);g=X7(0);i=new R5;j=new ACj;j.FD
=i;j.kJ=g;while(AB2(h,j)){}if(!j.kJ.on&&!a.e_)b.eP=1;else a.e_=1;b.bo=WE(a,b.bo);}}}
function WE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BL();d=null;e=A7u;f=b.cH;g=b.q;if(e===null)e=A6a;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}K6(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b2=b.b2+1|0;b=B7(b);while(B_(b)){m=Ca(b);if(Do(m)==De(m))continue;if(!m.eP){if(d!==null){BB(c,d);d=null;}BB(c,m);}else if(d===null)d=m;else{n=ATy(KW(Be(Do(d),Do(m)),Bd(De(d),De(m)),d.bX.fR),d.hu,d.cm);n.eP=1;d=m.cm;if(d===null)d=n;else{ADV(d);d=n;}}}if(d!==null)BB(c,d);return c;}
function ADl(a,b,c,d){var e,f,g,h,i,j;if((De(c)-Do(c)|0)<43)e=Cw(d,Do(c),De(c));else{e=Cw(d,Do(c),Do(c)+20|0);f=Cw(d,De(c)-20|0,De(c));g=new K;M(g);H(H(H(g,e),C(167)),f);e=L(g);}e=ACf(e,C(176),C(225));f=Bt();g=Cl(c);h=new K;M(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bk(f,L(h));c=B7(c.bo);j=b+1|0;while(B_(c)){ADl(a,j,Ca(c),d);}}
function AHt(){A7u=new U1;}
function ALe(){var a=this;B.call(a);a.b0=0;a.bY=0;a.fR=0;}
function KW(a,b,c){var d=new ALe();AWS(d,a,b,c);return d;}
function AWS(a,b,c,d){a.b0=b;a.bY=c;a.fR=d;}
function ASQ(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.b0==c.b0&&a.bY==c.bY&&a.fR==c.fR?1:0;}return 0;}
function AV9(a,b){var c;b=b;c=BK(a.b0,b.b0);if(!c)c=BK(b.bY,a.bY);return c;}
var U1=G();
function AP7(a,b,c){var d;b=b;c=c;b=b.bX;c=c.bX;d=BK(b.b0,c.b0);if(!d)d=BK(c.bY,b.bY);return d;}
function Zt(){var a=this;B.call(a);a.bX=null;a.hu=null;a.bo=null;a.cm=null;a.eP=0;}
function ATy(a,b,c){var d=new Zt();AGT(d,a,b,c);return d;}
function AGT(a,b,c,d){a.eP=0;a.bX=b;a.hu=c;a.bo=BL();a.cm=d;}
function AHM(b){return ZA(b,null);}
function ZA(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=KW(d,e,f);j=new Zt;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGT(j,i,null,l);m=0;while(m<g){l=ZA(b,c);l.hu=j;BB(j.bo,l);m=m+1|0;}return j;}
function AED(b,c,d){var e,f,g,h,i;a:{e=b.bX;f=b.bo;g=e.b0;h=e.bY;i=e.fR;Bq(c,g);G4(c,h,i);Bq(c,f.q);if(d!==null){e=b.cm;if(e!==null&&ACO(d,e)){g=(Os(d,b.cm)).bp;break a;}}g=(-1);}Bq(c,g);b=B7(f);while(B_(b)){AED(Ca(b),c,d);}}
function Do(a){return a.bX.b0;}
function De(a){return a.bX.bY;}
function L6(a,b){a.bX.b0=b;}
function MU(a,b){a.bX.bY=b;}
function LX(a,b){var c;c=a.bX;c.b0=c.b0+b|0;}
function Hr(a,b){var c;c=a.bX;c.bY=c.bY+b|0;}
function MR(a,b){return Do(a)<=b&&b<De(a)?1:0;}
function AL8(a){var b,c,d,e,f;b=a.bX;c=b.b0;d=b.bY;e=b.fR;b=new K;M(b);BM(b,40);BM(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eP;f=new K;M(f);Jw(H(H(f,b),C(37)),c);return L(f);}
function AMQ(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.bX,c.bX)&&BO(a.bo,c.bo)?1:0;}return 0;}
var Jp=G(0);
function GY(){var a=this;B.call(a);a.cW=null;a.cT=null;}
function A7w(a,b){var c=new GY();VY(c,a,b);return c;}
function VY(a,b,c){a.cW=b;a.cT=c;}
function AWx(a,b){var c,d;if(a===b)return 1;if(!Jd(b,Jp))return 0;a:{b:{c:{d:{c=b;b=a.cW;if(b!==null){if(!b.bJ(c.cW))break c;else break d;}if(c.cW!==null)break c;}b=a.cT;if(b!==null){if(!b.bJ(c.cT))break c;else break b;}if(c.cT===null)break b;}d=0;break a;}d=1;}return d;}
function HW(){var a=this;GY.call(a);a.l8=0;a.cY=null;}
function NN(){var a=this;Lt.call(a);a.yi=null;a.rp=null;}
function AEH(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.yi;e=0;f=0;g=a.rp;a:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ch(b)+j|0,i.length);Pq(b,d,j,f-j|0);e=0;}if(!D9(c)){k=!D9(b)&&e>=f?A6U:A6T;break a;}i=g.data;j=Be(Ch(c),i.length);l=new Xf;l.qE=b;l.yH=c;k=AF0(a,d,e,f,g,0,j,l);e=l.vd;j=l.v9;if(k===null){if(!D9(b)&&e>=f)k=A6U;else if(!D9(c)&&e>=f)k=A6T;}ADn(c,g,0,j);if(k!==null)break;}}Fx(b,b.Z-(f-e|0)|0);return k;}
var QF=G(NN);
function AF0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Od(h,2))break a;i=A6T;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Oz(l)){if((f+3|0)>g){j=j+(-1)|0;if(Od(h,3))break a;i=A6T;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CS(l)){i=Eu(1);break a;}if
(j>=d){if(D9(h.qE))break a;i=A6U;break a;}c=j+1|0;m=k[j];if(!Dl(m)){j=c+(-2)|0;i=Eu(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Od(h,4))break a;i=A6T;break a;}k=e.data;o=EP(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vd=j;h.v9=f;return i;}
var I9=G(Ew);
var O0=G();
function AUb(a,b){return b.text();}
function O2(){var a=this;B.call(a);a.tK=null;a.tJ=null;}
function ATE(a,b){var c,d,e,f;c=a.tK;d=a.tJ;e=b.length;f=new Pu;f.AI=b;c.g(AN7((AKD(e,f)).kj,AB7(d)));}
var O1=G();
function AVu(a,b){AHC(b);}
function IY(){var a=this;B.call(a);a.br=null;a.Fr=null;a.cR=null;a.jP=null;a.le=null;a.d7=null;a.i3=null;a.BI=null;a.pH=null;a.oT=null;}
function A7x(a,b,c,d,e,f){var g=new IY();LK(g,a,b,c,d,e,f);return g;}
function IF(){var b,c,d,e,f,g,h,i,j;b=new IY;c=new Kc;d=new Ho;FK();K0(d,A7y);Mx(c,d,BZ(A7g),BZ(A7z),BZ(A7A),BZ(A7g),BZ(A7B),BZ(A7C),BZ(A7D),BZ(A7E),BZ(A7F),BZ(A7G));e=AJG(S(C(226)));AFh();f=(A7H.hC()).data;g=f.length;h=Q(Ks,g);i=h.data;j=0;while(j<g){i[j]=f[j].n0;j=j+1|0;}LK(b,c,e,h,AKl(S(C(227)),S(C(228)),S(C(229)),S(C(230))),Fg(),AEn(S(C(231)),S(C(232)),S(C(233)),S(C(234))));return b;}
function Mh(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IY;c=new Kc;d=new Ho;AOc();K0(d,A7I);Mx(c,d,BZ(A7J),BZ(A7K),BZ(A7L),BZ(A7J),BZ(A7M),BZ(A7N),BZ(A7O),BZ(A7P),BZ(A7Q),BZ(A7R));e=AJG(S(C(235)));T1();f=(A7S.hC()).data;g=f.length;h=Q(Ks,g);i=h.data;j=0;while(j<g){i[j]=f[j].lb;j=j+1|0;}k=AKl(S(C(236)),S(C(237)),S(C(238)),S(C(239)));l=new I0;d=new I8;AU6();m=A7T;OF(d,m,A7U,A7V,A7W,A7X,m);LU(l,d,AHa(),AHI(S(C(240)),S(C(241)),S(C(242))),AHa(),AH6(1,0.17499999701976776),A7Y,A7Z);LK(b,c,e,h,k,l,AEn(S(C(231)),S(C(232)),
S(C(233)),S(C(243))));return b;}
function LK(a,b,c,d,e,f,g){var h;h=d.data;a.i3=Dv(C(166),17.0);a.BI=Dv(C(155),15.0);a.pH=Dv(C(166),15.0);a.oT=Dv(C(14),15.0);a.br=b;a.Fr=c;a.jP=d;a.le=e;if(h.length>=15){a.cR=f;a.d7=g;return;}b=new BU;Y(b);N(b);}
function WW(a,b){if(b===null)b=a.br.ei;return b;}
function Ky(){var a=this;CG.call(a);a.dx=null;a.nZ=null;}
function A4e(a){var b=new Ky();AHU(b,a);return b;}
function AHU(a,b){var c,d,e,f;KU(a,b,0);c=KZ(a.M);a.nZ=c;d=Ih(c);a.dx=d;M1(a.r,d);c=b.o.bG;d=new Yz;d.rS=a;Ba(c,d);c=b.o.bG;d=new HS;e=new Yx;e.Bu=a;It(d,b,e);Ba(c,d);c=a.dx;d=b.o;f=new ABa;f.qJ=c;Ba(d.bT,c);Ba(d.fv,f);O6(a.dx,b.o);b=b.o.cS;c=new Yy;c.xS=a;Ba(b,c);Ht(a);}
function AJu(a,b){var c,d;c=a.dx;d=new ABJ;d.uW=a;d.uX=b;GK(c,b,d);}
function AXP(a,b){if(H6(a.M,b))LW(a.dx);}
function A1h(a,b){return I2(a.dx,b);}
function AOP(a){HB(a);Ip(a.dx);JQ(a.M);}
function A2y(a){return FQ(0);}
function ALA(a,b,c){var d;IE(a,b,c);d=a.dx;Mu(d,d.i,b,c);}
function AWR(a,b){BC(b);GL(a.nZ,b);Fv(a.dx,b);}
function AJg(a,b){if(b.bm!=121)return 0;return 1;}
function AEJ(a,b){var c,d,e;if(DO(a.r,a.dx)){c=a.nZ;b=b.j;d=a.dx;e=new AAw;e.z5=a;GQ(c,b,d,a,d,a,e);}return 1;}
function AIh(){var a=this;Cx.call(a);a.yL=null;a.o5=null;a.kg=null;a.el=null;a.lV=null;a.hv=null;a.eB=null;a.jA=null;a.qB=null;a.i0=null;a.p9=null;a.p$=null;a.pq=null;a.y2=null;a.CO=null;a.s4=0;}
function A4p(a){var b=new AIh();AYI(b,a);return b;}
function AYI(a,b){var c,d,e,f;El(a,b);c=(IF()).br.ei;a.yL=c;a.o5=AK_(c);a.kg=new Bg;a.el=KS();a.lV=KS();a.hv=S$(0,0,3,3);a.eB=Ia(0,0,300,300);a.jA=AXx();d=Q(BJ,4);e=d.data;e[0]=C(181);e[1]=C(182);e[2]=C(199);e[3]=C(198);a.qB=d;a.i0=Q(Kn,e.length);c=b.o.bT;f=new TR;f.fz=a;Ba(c,f);c=b.o.bG;f=new Y0;f.B8=a;Ba(c,f);c=b.o.oy;f=new YZ;f.ss=a;Ba(c,f);c=b.o.gP;f=new YY;f.Dv=a;Ba(c,f);c=b.o.mm;f=new YX;f.Eh=a;Ba(c,f);c=b.o.cS;f=new YW;f.EP=a;Ba(c,f);b=b.o.fv;c=new YV;c.AS=a;Ba(b,c);a.p9=ACF(a,1);a.p$=ACF(a,0);R7(a,a.el,
a.p9);R7(a,a.lV,a.p$);a.pq=ADS(a,0);a.y2=ADS(a,1);FR(a.eB,a.pq);FZ(a.eB);HD(a.eB,Dy(169,183,198));Fj(a.eB,a.yL);Cr(a.el.X,1.0,1.0,1.0,1.0);Fj(a.el,a.eB.bl);BR(a.hv.bl,a.o5);}
function R7(a,b,c){FR(b,c);FZ(b);}
function Su(a,b){Ix(DQ(),0.5+DQ()*0.5,0.5+DQ()*0.5,1.0,b.X);}
function ACF(a,b){var c,d;c=D5(a.x.P,200,100,b);Hy(c,C(244),11.0);B0(c,C(245),0.0,20.0);J8(c,255,0,0);B0(c,C(245),0.25,40.0);J8(c,0,255,0);B0(c,C(245),0.5,60.0);J8(c,0,0,255);B0(c,C(245),0.75,80.0);d=CV(a.x.P);CM(d,c);Ez(c);return d;}
function ADS(a,b){var c,d,e,f;c=D5(a.x.P,255,100,b);Hy(c,C(166),10.0);d=Bt();e=$rt_str(c.dc.font);f=new K;M(f);H(H(f,C(246)),e);Bk(d,L(f));Eo(c,C(247));B0(c,C(247),0.0,20.0);B0(c,C(247),0.25,40.0);B0(c,C(247),0.5,60.0);B0(c,C(247),0.75,80.0);e=CV(a.x.P);CM(e,c);Ez(c);return e;}
function ALV(a,b){var c;a.s4=a.s4+1|0;c=b/5.0;Ix(c-(c|0),1.0,1.0,1.0,a.hv.X);return AA_(a.jA,b);}
function ANH(a){var b,c,d,e,f,g,h,i;b=a.x.P;EJ(b,a.o5);c=a.i0.data;d=c.length;e=0;while(e<d){ZQ(c[e],b,0,0);e=e+1|0;}f=a.eB;g=f.u;g.b=(a.kg.b-f.t.b|0)-5|0;g.a=0;B$(b,0);h=0;while(h<7){f=a.eB;EG(f,b,a.pq,Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eB;f.u.b=(a.kg.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.y2;f=a.eB;f.u.a=Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0;SR(f,b,g,1);h=h+1|0;}SR(a.el,b,a.p9,1);B$(b,1);g=a.lV;f=a.p$;i=g.u;h=i.a;d=i.b;g=g.t;Gv(b,b.kZ);GF(b.kZ,b.Y,h,d,g,b.c7);N4(b.kZ,b.Y,f);F2(b);B$(b,0);f=
a.CO;if(f!==null)VT(a.hv,b,f,0,0,0.0);AB8(a.jA,b,new Bg);M2(b,C(248));}
function APP(a,b,c){var d,e,f,g,h,i,j,k;d=Bt();e=Cl(b);f=new K;M(f);H(H(f,C(249)),e);Bk(d,L(f));d=Bt();f=new K;M(f);EH(H(f,C(250)),c);Bk(d,L(f));g=Cg(30.0,c);h=Cg(10.0,c);i=0;while(true){j=a.i0.data;if(i>=j.length)break;k=1+i|0;j[i]=S$(Bc(h,k)+Bc(g,i)|0,g,g,g);Su(a,a.i0.data[i]);i=k;}X(a.hv.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.el;X(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);X(a.lV.u,(b.a/2|0)+10|0,50);Co(a.kg,b);}
function W2(a,b){var c,d,e,f,g;c=Bt();d=!b.jS?C(251):C(252);e=b.eh;f=b.bm;g=b.zM;b=new K;M(b);Jw(H(U(H(H(H(b,d),e),C(253)),f),C(254)),g);Bk(c,L(b));return 0;}
function ABg(){var a=this;Cx.call(a);a.ER=null;a.ld=null;a.i2=null;a.h_=null;a.dk=null;a.dY=null;a.na=null;a.m1=null;a.jF=0;a.iJ=null;a.iI=null;}
function Rf(a,b,c){FR(b,c);FZ(b);}
function AD9(a,b,c,d,e,f){var g,h;g=D5(f,c,120,b);Cn(g,e);e=!b?C(255):C(256);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);B0(g,d,0.0,20.0);B0(g,d,0.25,40.0);B0(g,d,0.5,60.0);B0(g,d,0.75,80.0);B0(g,d,1.0,100.0);h=CV(f);CM(h,g);Ez(g);return h;}
function ARd(a,b){return 0;}
function AV1(a){var b,c,d,e,f,g,h,i;b=a.x.P;EJ(b,a.ld);B$(b,0);c=a.i2;d=c.b;e=a.h_;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.dk.bl);Bs(b,g,0,a.h_,a.dY.bl);Bs(b,0,f,a.h_,a.dk.X);Bs(b,g,f,a.h_,a.dY.X);c=a.dk;e=c.u;h=e.b;i=((a.i2.b*3|0)/4|0)-(c.t.b/2|0)|0;Iz(c,b,e.a,h,a.iJ,0,1);c=a.dk;Iz(c,b,c.u.a,i,a.iJ,1,1);c=a.dY;Iz(c,b,c.u.a,h,a.iI,0,0);e=a.dY;Iz(e,b,e.u.a,i,a.iI,1,0);M2(b,C(248));}
function AW8(a,b,c){var d,e;Co(a.i2,b);X(a.h_,b.a/2|0,b.b/2|0);d=a.i2.b/4|0;e=a.dk;d=d-(e.t.b/2|0)|0;X(e.u,(b.a/4|0)-(a.jF/2|0)|0,d);X(a.dY.u,((b.a*3|0)/4|0)-(a.jF/2|0)|0,d);}
function Xx(){var a=this;CG.call(a);a.yF=null;a.ff=null;a.dE=null;a.oA=null;}
function APi(a,b,c){var d;d=Fk(a.r,a.oA);JG(a.ff,d,a.r);JG(a.dE,d,a.r);}
function RN(b){return I4(b,UV());}
function I4(b,c){var d;d=LC();Ol(d,Ns(b,Ka(c,25)),!b?null:I4(b-1|0,c));Ol(d,Ns(b,Ka(c,20)),!b?null:I4(b-1|0,c));Ol(d,Ns(b,Ka(c,15)),!b?null:I4(b-1|0,c));Ol(d,Ns(b,Ka(c,10)),!b?null:I4(b-1|0,c));return G0(d);}
function Ns(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function Ol(b,c,d){if(d!==null)FH(b,c,d);else{d=new Vl;d.sa=c;D2(b,c,d);}}
function AOf(a,b,c){var d,e;IE(a,b,c);b=a.r.bO;d=EB(a.ff);e=EB(a.dE);Nk(a.ff,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Nk(a.dE,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AWN(a){var b,c,d,e,f,g,h,i;HB(a);b=a.x.P;B$(b,1);c=a.yF;d=a.r;e=d.bO;X(c.nP,e.a,Cg(2.0,d.cf));X(c.oi,Cg(2.0,d.cf),e.b);FK();f=A7F;g=d.bH;h=e.b/2|0;i=c.nP;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bH;h=e.a/2|0;c=c.oi;Bs(g,h-(c.a/2|0)|0,0,c,f);Mf(a.ff,a.r);Mf(a.dE,a.r);JQ(a.M);B$(b,0);}
function APS(a,b){var c,d;c=NV(a.ff,b.j,a.r.cV);d=NV(a.dE,b.j,a.r.cV);return !c&&!d?0:1;}
function AMw(a,b,c,d){var e,f;e=Of(a.ff,b.j,c,d);f=Of(a.dE,b.j,c,d);return !e&&!f?0:1;}
function AAK(){CG.call(this);this.kH=null;}
function ANw(a,b,c){if(b===0.0)Y9(a);}
function Y9(a){var b,c,d,e,f,g,h,i;b=a.kH;if(b!==null){Iu(a.M,b);JZ(b);}b=(IF()).cR;c=A5z(a.r,new U$);d=Dv(C(155),14.0);e=APg();f=0;while(f<300){g=Dm(f);h=new SI;h.Bb=C(257);h.A$=g;h.A_=C(258);Wh(e,C(257),g,C(258),h);f=f+1|0;}W_(c,AC_(e));Wb(c,b,d);g=AEr(a.r);i=GH(c,a.r);Jh(i,b.m4,b.oR);Lc(g,i);Fc(g,b);DL(g,C(145));a.kH=g;EI(a.M,g);QA(a);}
function AML(a,b,c){IE(a,b,c);QA(a);}
function QA(a){var b,c,d;b=a.r.bO;Et(a.kH,BF((b.a*2|0)/10|0,(b.b*4|0)/10|0),BF((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kH;b=AH5(c.W.k);d=new K;M(d);H(H(d,C(259)),b);DL(c,L(d));}
function WZ(){var a=this;HN.call(a);a.mn=null;a.h2=null;a.gi=null;a.ki=null;a.r7=null;a.kc=null;a.id=null;a.hO=null;a.lK=0;a.h1=0;}
function PG(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.h2.q>0){d=DQ();e=a.h2;f=d*(e.q-1|0)|0;e=EN(e,f);EN(a.gi,f);f=a.h1;g=e.t;a.h1=f-Bc(g.a,g.b)|0;I1(a.mn,e.dv);}c=c+1|0;}}
function L4(a,b){var c,d,e,f,g,h,i,j;c=Kl(a.r);Cn(c,a.ki);d=0;while(d<b){e=Ka(a.kc,1+(DQ()*19.0|0)|0);f=KS();g=f.dv;h=a.mn;BC(c);i=new Q_;i.uo=c;BR(g,Kv(h,e,i));(Vk(DQ(),1.0,1.0,f.bl)).bC=0.5;h=f.u;g=f.dv;X(h,g.bn|0,g.bs|0);h=f.t;g=f.dv;X(h,g.bf|0,g.bC|0);BB(a.gi,e);BB(a.h2,f);j=a.h1;h=f.t;a.h1=j+Bc(h.a,h.b)|0;d=d+1|0;}a.hO=MP(a.mn);}
function A0R(a){var b,c,d,e,f,g,h,i;HB(a);b=a.x.P;B$(b,1);c=a.r.bH;if(a.gi.q){d=a.hO;d=HJ(c,d.a,d.b);Cn(d,a.ki);e=a.ki.ep;Bs(c,0,0,a.hO,a.r7);f=0;while(f<a.gi.q){g=BG(a.h2,f);h=BG(a.gi,f);g=g.dv;B0(d,h,g.bn,g.bs+e);f=f+1|0;}g=a.id;if(!(g!==null&&BQ(g)==a.hO.a&&CO(a.id)==a.hO.b))a.id=BV(a.id,CV(c));CM(a.id,d);Ez(d);i=0;while(i<a.gi.q){d=BG(a.h2,i);HD(d,CC(0));EG(d,c,a.id,0,0);i=i+1|0;}}B$(b,0);}
function ALN(a,b){var c,d;if(a.lK){c=a.hO;d=Be(Bc(c.a,c.b),2211840);if(a.h1/d<=0.7)L4(a,D6(a.kc,5));else PG(a,D6(a.kc,5));}return a.lK;}
function SN(){var a=this;Cx.call(a);a.eC=null;a.h4=null;a.i1=null;a.oW=null;a.e$=0;a.uN=0;a.r8=null;a.mB=0;a.xj=0;a.xF=null;a.Ab=null;}
function ALz(a){var b,c;b=a.e$;c=new K;M(c);U(H(c,C(260)),b);$rt_globals.console.info($rt_ustr(L(c)));EJ(a.eC,a.r8);Kp(a.i1,a.e$,0,Hw(a),5000,a.oW.a,20);B$(a.eC,1);Vt(a.i1,a.eC);B$(a.eC,0);b=a.e$;c=new K;M(c);U(H(c,C(260)),b);$rt_globals.console.info($rt_ustr(L(c)));ABK(a.h4,a.e$/a.mB|0,a.eC);AA2(a.h4,a.e$,Hw(a),a.Ab,a.eC);}
function AUK(a,b,c){a.oW=b;Sk(a.h4,BF(0,0),50,Hw(a),c);SY(a.h4,a.eC,0,Hw(a));}
function UN(a){return 5000-Hw(a)|0;}
function Hw(a){return Be(a.uN,a.oW.b);}
function Ds(){var a=this;Cx.call(a);a.pZ=null;a.gX=null;a.qP=0.0;}
function A70(a){var b=new Ds();HP(b,a);return b;}
function HP(a,b){El(a,b);a.pZ=AIX(0,0,64);a.gX=new Bg;Gj(b.bw,JS(BE(a)));}
function AAf(a){EJ(a.x.P,a.pZ);}
function SJ(a,b,c){Co(a.gX,b);a.qP=c;}
var Rd=G(Ds);
var Xe=G(CG);
function Hg(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.x.bw;f=new Q$;f.Dh=a;f.t5=b;g=Q(B,1);h=g.data;i=BP(1);i.data[0]=b;h[0]=i;CU(e,f,C(261),g);d=d+1|0;}}
function ADu(a,b){var c,d,e,f,g,h;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(262)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((K8(b,1)).iM));d=Bt();e=Cl(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BY(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,C(37));U(f,c[g]);g=g+1|0;}BY(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(263)),e),C(264)),f);Bk(d,L(h));}
function WB(){var a=this;Ds.call(a);a.e7=null;a.gE=null;a.nG=null;a.AW=null;a.qn=null;}
function AOZ(a,b){b=b/5.0;Ix(b-(b|0),1.0,1.0,1.0,a.gE.X);return 0;}
function AWC(a){AAf(a);EG(a.e7,a.x.P,a.AW,0,0);VT(a.gE,a.x.P,a.nG,0,0,0.0);M2(a.x.P,C(248));}
function A2s(a,b,c){var d,e,f;SJ(a,b,c);X(a.gE.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.e7;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function SL(){var a=this;Ds.call(a);a.g0=null;a.q6=null;a.my=null;a.kz=null;a.jW=null;}
function A24(a){var b,c,d,e,f,g;AAf(a);b=a.x.P;c=a.kz;LT(b,c.a,c.b,a.jW);b=a.g0;c=a.q6;d=a.gX;e=a.x.P;f=0;while(true){g=0;while(true){EG(b,e,c,g,f);g=g+BQ(c)|0;if(g>=d.a)break;}f=f+CO(c)|0;if(f>=d.b)break;}Gb(a.x.P);}
function AOK(a,b,c){SJ(a,b,c);X(a.jW,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AAz(){var a=this;Cx.call(a);a.eN=null;a.oI=null;a.gI=null;a.cd=null;a.fl=0;a.iF=null;a.fH=0;a.DQ=20;a.Fu=11;a.Ed=220;a.md=null;a.E2=5000;a.ip=0;a.gS=null;}
function ATG(a){var b,c,d,e,f,g,h;b=a.iF;c=a.fH;d=a.md;Kp(b,c,0,d.b,5000,d.a,20);B$(a.eN,1);Vt(a.iF,a.eN);if(a.cd===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B0(a.oI,Dm(e),0.0,c);}b=CV(a.eN);a.cd=b;CM(b,a.oI);}if(a.fH<=a.fl)while(true){f=a.fl;if(f<=a.fH)break;a.fl=f-20|0;b=a.gI;g=a.ip-1|0;a.ip=g;B0(b,Dm(g),0.0,20.0);JN(a.cd,a.gI,0,a.fl%220|0);ER(a.gI);}else while(a.fl<(a.fH-20|0)){b=a.gI;g=a.ip+1|0;a.ip=g;B0(b,Dm((g+11|0)-1|0),0.0,20.0);JN(a.cd,a.gI,0,a.fl%220|0);ER(a.gI);a.fl=a.fl+20|0;}b=Ia(0,0,BQ(a.cd),CO(a.cd));IB(b,
0,0,BQ(a.cd),CO(a.cd));HD(b,a.gS.data[0]);Fj(b,a.gS.data[1]);EG(b,a.eN,a.cd,400,0);g=a.fH%220|0;f=Be(CO(a.cd)-g|0,200);d=Ia(0,0,BQ(a.cd),f);IB(d,0,g,BQ(a.cd),f);HD(d,a.gS.data[0]);Fj(d,a.gS.data[1]);EG(d,a.eN,a.cd,0,0);h=Ia(0,f,BQ(a.cd),(CO(a.cd)-f|0)-20|0);IB(h,0,0,BQ(a.cd),(CO(a.cd)-f|0)-20|0);HD(h,a.gS.data[1]);Fj(h,a.gS.data[0]);EG(h,a.eN,a.cd,0,0);}
function AWP(a,b,c){Co(a.md,b);}
function A0x(a,b){return 0;}
function Z8(a){return 5000-a.md.b|0;}
function Kq(){Ds.call(this);this.ee=0;}
function ZP(a){var b,c;b=a.x.bw;c=new Ui;c.xD=a;RH(b,c,WD(a));}
function Qz(a){var b,c,d,e;b=a.ee+1|0;a.ee=b;c=JS(F(Kq));d=new K;M(d);H(H(U(H(d,C(265)),b),C(29)),c);e=L(d);c=a.x.bw;d=new VP;d.xN=e;Tx(c,e,d,WD(a));}
function WD(a){var b;b=new Y4;b.BP=a;return b;}
function APF(a,b,c,d){a:{switch(c){case 0:break;case 2:Qz(a);break a;default:break a;}ZP(a);}return 1;}
function Sx(){var a=this;Ds.call(a);a.uh=null;a.gn=null;a.lC=null;a.pk=null;a.vV=null;}
function AUj(a){var b,c,d,e,f,g,h,i;if(a.lC===null){b=a.x.P;c=a.vV;d=Is(b,c.ia,Cg(c.gZ,a.qP));Cn(b.ch,d);e=CY(Eo(b.ch,C(266)));f=Bt();g=d.o1;c=new K;M(c);EH(H(c,C(267)),g);Bk(f,L(c));h=Nj(d,1.1799999475479126);c=Bt();i=new K;M(i);U(H(U(H(i,C(268)),e),C(172)),h);Bk(c,L(i));c=HJ(b,e,h);a.pk=c;Cn(c,d);B0(a.pk,C(266),0.0,d.ep);b=CV(b);a.lC=b;CM(b,a.pk);FR(a.gn,a.lC);FZ(a.gn);b=a.gn.bl;FK();BR(b,A7g);BR(a.gn.X,A71);}b=a.x.P;EJ(b,a.uh);c=a.gn;i=c.u;f=a.gX;e=f.a;c=c.t;X(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EG(a.gn,b,a.lC,
0,0);}
function G7(){var a=this;Cx.call(a);a.vh=null;a.ck=null;a.eb=null;a.dl=null;a.fq=null;a.eM=null;}
function OK(a,b){var c,d;El(a,b);a.vh=CC(20);a.ck=St();a.eb=new Bg;a.dl=new Bg;a.fq=new Bg;a.eM=new Bg;c=b.o.bG;d=new ACe;d.DC=a;Ba(c,d);Ba(b.o.bT,a);b=a.ck.bl;FK();BR(b,A7g);BR(a.ck.X,A71);}
function AFj(a){var b,c,d;b=a.x.P;EJ(b,a.vh);c=a.ck;d=c.u;Bs(b,d.a,d.b,c.t,c.bl);B$(b,1);c=a.ck;d=c.u;AEg(b,d.a,d.b,c.t,a.eb,a.dl,a.fq,a.eM,c.X);B$(b,0);}
function AYF(a,b){return 0;}
var Tl=G(G7);
function A0k(a,b,c){var d,e,f;d=a.ck;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);X(a.eb,0,0);X(a.dl,Be(b.a,b.b),Be(b.a,b.b));b=a.fq;d=a.eb;X(b,d.a,d.b+20|0);b=a.eM;d=a.dl;X(b,d.a,d.b+40|0);}
function A1e(a,b){var c,d,e;Co(a.eb,b.j);b=a.dl;c=a.ck;d=c.u;e=d.a;c=c.t;X(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fq;c=a.eb;X(b,c.a,c.b+20|0);b=a.eM;c=a.dl;X(b,c.a,c.b+40|0);return 0;}
function Tk(){var a=this;G7.call(a);a.f3=null;a.go=null;}
function A2K(a,b){var c;c=a.dl;b=b.j;c.b=b.b-50|0;a.eM.b=b.b+100|0;return 1;}
function ANs(a){var b,c,d,e,f,g,h;b=Bd(a.eb.a,a.fq.a);c=Be(a.dl.a,a.eM.a);d=Be(a.eb.b,a.dl.b)-50|0;e=Bd(a.fq.b,a.eM.b)+50|0;Hj(a.ck,b,d,c-b|0,e-d|0);AFj(a);f=a.ck.u.a-10|0;AAB(a,a.x.P,10,f,a.eb,a.fq);g=a.ck;h=g.u.a+g.t.a|0;AAB(a,a.x.P,h,f,a.dl,a.eM);}
function AAB(a,b,c,d,e,f){var g;X(a.f3,c,a.ck.u.b);X(a.go,d,e.b-a.ck.u.b|0);g=a.f3;Bs(b,g.a,g.b,a.go,a.ck.bl);X(a.f3,c,e.b);X(a.go,d,f.b-e.b|0);e=a.f3;Bs(b,e.a,e.b,a.go,a.ck.X);X(a.f3,c,f.b);e=a.go;g=a.ck;X(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.f3;Bs(b,e.a,e.b,a.go,a.ck.bl);}
function AMf(a,b,c){}
function V$(){var a=this;CG.call(a);a.Cm=3;a.wg=null;a.j7=null;a.qm=0;}
function APh(a,b,c){var d,e;if(b===0.0){EI(a.M,YR(a));d=S1(a,0.5,0,C(269));e=a.r.bO;Et(EI(a.M,d),BF(e.a/10|0,e.b/10|0),BF((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function YR(a){var b,c,d,e,f,g;b=a.qm+1|0;a.qm=b;c=new K;M(c);U(H(c,C(270)),b);c=S1(a,1.0,1,L(c));d=a.r.bO;e=d.a/10|0;f=e+D6(a.j7,e)|0;e=d.b/20|0;e=e+D6(a.j7,e)|0;b=d.a;b=((b*7|0)/10|0)+D6(a.j7,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+D6(a.j7,g/10|0)|0;Et(c,BF(f,e),BF(b,g));return c;}
function S1(a,b,c,d){var e,f,g;e=AEr(a.r);if(d===null)f=new ADE;else{f=new ADG;f.uw=e;f.ux=d;}g=new Qc;LP(g);g.mj=new B2;g.pL=new Bg;g.ye=f;g.r9=b;if(c){d=GH(g,a.r);Jh(d,A72,A73);g=d;}Lc(e,g);Fc(e,Fg());AAu(e,a.wg,3.0);d=new ADF;d.qN=a;d.qO=e;Tn(e,d);return e;}
function Eq(){CG.call(this);this.hk=null;}
function A4O(a){var b=new Eq();Kb(b,a);return b;}
function Kb(a,b){F_(a,b);Ba(a.r.dU,a);BR(a.dS,CC(43));}
function AWm(a){return AUA();}
function AP0(a){return 1;}
function N5(a,b){Fc(a.hk,b);}
function AIM(a,b){var c,d,e;c=a.r.bO;d=!a.pr()?0:ACE(b);e=c.b-d|0;Et(b,BF(c.a/20|0,d+(e/20|0)|0),BF((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A01(a,b,c){if(b===0.0){a.hk=A2v(a.r,a.jq());N5(a,Fg());if(a.pr())DL(a.hk,Nb(BE(a)));EI(a.M,a.hk);a.kK(a.hk);}}
function Qv(){var a=this;Eq.call(a);a.me=null;a.eK=null;a.Ez=null;}
function AWj(a,b){var c;c=a.eK;return c!==null&&I2(c,b)?1:0;}
function AMO(a){var b;b=Ih(a.me);a.eK=b;a.Ez=O6(b,a.x.o);AKB(a.eK);M1(a.r,a.eK);return a.eK;}
function AU7(a){return 0;}
function A2M(a,b){AIM(a,b);Ht(a);}
function ASJ(a,b){BC(b);GL(a.me,b);Fv(a.eK,b);N5(a,b.cR);}
function AR5(a,b){H6(a.M,b);}
function W3(){B.call(this);this.wz=null;}
function A0O(a,b){DY(a.wz,null);return 0;}
var K3=G(0);
function AMB(a,b,c){Lz(b);}
function AKW(a,b){var c;c=new RO;c.um=a;c.un=b;return c;}
function RS(){var a=this;Eq.call(a);a.c9=null;a.px=null;a.mN=null;a.jt=null;}
function AQ2(a){var b,c,d,e;b=new QY;c=a.M;E3(b);b.gp=KZ(c);d=TS(c.b$);b.gr=d;b.kQ=GH(d,c.b$);e=new PF;E3(e);c=new B2;AO7();AKg(c,A7j);e.A1=c;b.oK=e;d=Ih(b.gp);b.fY=d;b.Av=a;MC(b,I(CB,[b.kQ,b.oK,d]));b.sc=FQ(1);a.c9=b;b=AKt(C(271),0);IV(b);c=new RW;c.AY=a;b.et=c;ET(a.c9.gr,b);return a.c9;}
function RX(a){var b,c;b=a.x.bw;c=new ACh;c.vw=a;Jc(b,c);}
function AQV(a,b){AFZ(b,0.0);Ht(a);}
function AY2(a,b){var c;N5(a,b.cR);c=a.c9;J_(c.gr,b);JH(c.gr,c.kQ);GL(c.gp,b);Fv(c.fY,b);}
function ASt(a,b){var c,d,e;c=b.hJ;a.px=c;d=Cq(a.mN,c);if(d!==null)ADN(a,d);else{b=Bt();d=Cl(c);e=new K;M(e);H(H(e,C(272)),d);Bk(b,L(e));if(Cq(a.jt,c)!==null){b=Cl(c);c=new K;M(c);H(H(c,C(273)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Ep(a.jt,c,FU(c));b=new ACA;b.x1=a;b.xX=c;d=new ACB;d.BA=a;d.BB=c;U6(c,b,d);}}}
function ADN(a,b){H1(a.c9.fY,b);b=a.c9;FN(b.gp.bQ.b$,b.fY);}
function ALU(a,b){ADB(b);if(Jk(b)>0)EL(a.c9.gr);}
function AOp(a,b){if(Jk(b)>0)EL(a.c9.gr);Lm(b);}
function ASe(a,b,c){if(AHW(c)!==C(182))QQ(b);else Lz(b);}
function ACC(){var a=this;Cx.call(a);a.td=null;a.mS=null;a.fj=null;a.oV=null;a.mR=0.0;a.hc=null;a.wk=null;a.tP=null;a.x8=null;a.yR=null;a.sk=null;a.qy=null;a.Ci=null;a.wI=null;a.lH=null;}
var A74=0;function A4r(a){var b=new ACC();AT9(b,a);return b;}
function AT9(a,b){var c,d,e;El(a,b);a.td=new B2;a.mS=ADR(1.0,0.0,0.0,1.0);a.fj=St();a.oV=new Bg;a.mR=3.1415927410125732;c=AJV();a.hc=c;a.wk=HH(c,1.25);a.tP=HH(a.hc,1.3333333730697632);a.x8=HH(a.hc,1.5);a.yR=HH(a.hc,1.6666666269302368);a.sk=HH(a.hc,2.0);a.qy=ADR(a.mR/24.0,15.0,3.0,0.5);c=ADR(a.mR/12.0,25.0,3.0,0.5);a.Ci=c;a.wI=DX([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lH=I(B2,[a.hc,a.wk,a.tP,a.x8,a.yR,a.sk,a.qy,c]);c=b.o.bG;d=new QT;d.Fs=a;Ba(c,d);Ba(b.o.bT,a);b=a.fj.X;FK();BR(b,A7g);Hj(a.fj,0,0,600,60);e
=Na(0.5,0.375);Jl(0.375,e);Jl(0.375,Jl(3.0,Na(e,3.0)));HH(AJV(),3.0);}
function A2E(a,b,c){var d,e,f;Co(a.oV,b);d=a.fj;e=d.u;f=b.a;d=d.t;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HH(b,c){var d;d=new B2;UZ(b,c,d);return d;}
function AJV(){var b;b=new B2;LD(b);return b;}
function AXH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.x.P;EJ(b,a.td);B$(b,1);c=a.fj;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lH.data;if(f>=g.length)break;h=a.wI.data[f];c=g[f];i=W5(c);j=a.fj;k=j.u;l=k.a;m=k.b;Mc(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mS);f=f+1|0;}if(A74){c=A4i(1,2);n=0;while(n<1000){h=D6(c,a.lH.data.length);l=D6(c,a.oV.b-a.fj.t.b|0);j=a.lH.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.fj;Mc(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mS);n=n+1|0;}}B$(b,0);}
function ASu(a,b){return A74;}
function TQ(){CG.call(this);this.kd=null;}
function AA7(a){return FQ(1);}
function Za(a){var b,c,d,e;b=new Ze;c=a.kd;d=a.M;e=new Vc;e.AU=a;UI(b,d,c,e);d=A1l(b.c3.b$);b.dO=d;AC0(d,c);c=AKt(C(274),0);d=AKt(C(275),0);IV(c);IV(d);e=new SH;e.sZ=b;c.et=e;e=new SG;e.ve=b;d.et=e;ET(b.dO.dX,c);ET(b.dO.dV,d);EI(b.c3,S9(b,b.dO,0.0));}
function AT6(a,b,c){if(b===0.0)Za(a);}
var OU=G(Ky);
function AV4(a){return FQ(1);}
function PI(){var a=this;Eq.call(a);a.vg=null;a.fO=null;}
function AIC(){var b;b=I(L9,[Np(1,3,4,5,1),Np(5,6,10,2,2),Np(12,2,13,3,3),Np(15,3,17,2,4)]);return A5h(Q(Gs,0),Q(Gs,0),b);}
function AW4(a){var b,c,d,e;b=A1l(a.r);a.fO=b;AC0(b,a.vg);c=a.fO.dX;BC(c);d=new ABc;d.rh=c;b=PH(C(276),4,d);d=a.fO.dV;BC(d);e=new ABd;e.tp=d;c=PH(C(276),4,e);ET(a.fO.dX,b);ET(a.fO.dV,c);AA0(a.fO,AIC());return a.fO;}
function YS(){var a=this;Eq.call(a);a.lz=null;a.vZ=null;}
function AZf(a){var b,c,d,e;b=TS(a.r);a.lz=b;BC(b);c=new Tp;c.ta=b;b=PH(C(276),4,c);d=Bt();e=ON(b);c=new K;M(c);U(H(c,C(277)),e);Bk(d,L(c));ET(a.lz,b);J_(a.lz,a.vZ);b=a.lz;return JH(b,GH(b,a.r));}
function A0s(a,b){var c;c=a.r.bO;Et(b,BF(c.a/30|0,c.b/10|0),BF((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function Kc(){var a=this;B.call(a);a.BX=null;a.ei=null;a.uF=null;a.Df=null;a.sY=null;a.k2=null;a.rz=null;a.wn=null;a.lN=null;a.lI=null;a.gs=null;}
function A75(a,b,c,d,e,f,g,h,i,j,k){var l=new Kc();Mx(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mx(a,b,c,d,e,f,g,h,i,j,k,l){a.BX=b;a.ei=c;a.uF=d;a.Df=e;a.sY=f;a.k2=g;a.rz=h;a.wn=i;a.lN=j;a.lI=k;a.gs=l;}
function AFN(){B.call(this);this.Fa=null;}
function AJG(a){var b=new AFN();AUX(b,a);return b;}
function AUX(a,b){a.Fa=b;}
var AEM=G(0);
function AIb(){var a=this;B.call(a);a.o3=null;a.k$=null;a.xG=null;a.qD=null;}
function AKl(a,b,c,d){var e=new AIb();A2R(e,a,b,c,d);return e;}
function A2R(a,b,c,d,e){a.o3=b;a.k$=c;a.xG=d;a.qD=e;}
var AGb=G(0);
function Fg(){var b,c,d;b=new I0;c=new I8;AYZ();d=A76;OF(c,d,A77,A78,A79,A7$,d);LU(b,c,AHy(),AHI(S(C(278)),S(C(241)),S(C(242))),AHy(),AH6(1,0.125),A7_,A8a);return b;}
function AHy(){var b,c;b=new Ko;c=S(C(279));AYZ();K_(b,c,A8b,A8c);return b;}
function AHa(){var b,c;b=new Ko;c=S(C(242));AU6();K_(b,c,A8d,A8e);return b;}
function AK4(){var b,c;b=new Ko;AG4();c=A8f;AVf();K_(b,c,A8g,A8h);return b;}
function AHT(){var a=this;B.call(a);a.zm=null;a.wy=null;a.uP=null;a.qM=null;}
function AEn(a,b,c,d){var e=new AHT();AVv(e,a,b,c,d);return e;}
function AVv(a,b,c,d,e){a.zm=b;a.wy=c;a.uP=d;a.qM=e;}
function AEc(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d7.wy;break a;case 3:if(c!=3){b=b.d7.qM;break a;}b=b.d7.uP;break a;default:b=b.br.ei;break a;}b=b.d7.zm;}return b;}
function J2(a,b,c){return AEc(a,b,0,c);}
function MD(){var a=this;B.call(a);a.l4=null;a.ks=null;}
function Wm(a,b){var c;c=a.ks;a.ks=b;return c;}
function KJ(){var a=this;MD.call(a);a.bV=null;a.b5=null;a.gM=0;a.gV=0;}
function M8(a){var b;b=Lu(a);if(b==2){if(Lu(a.b5)<0)a.b5=Pi(a.b5);return Qf(a);}if(b!=(-2))return a;if(Lu(a.bV)>0)a.bV=Qf(a.bV);return Pi(a);}
function Lu(a){var b,c;b=a.b5;c=b===null?0:b.gM;b=a.bV;return c-(b===null?0:b.gM)|0;}
function Pi(a){var b;b=a.bV;a.bV=b.b5;b.b5=a;E0(a);E0(b);return b;}
function Qf(a){var b;b=a.b5;a.b5=b.bV;b.bV=a;E0(a);E0(b);return b;}
function E0(a){var b,c,d;b=a.b5;c=b===null?0:b.gM;b=a.bV;d=b===null?0:b.gM;a.gM=Bd(c,d)+1|0;a.gV=1;b=a.bV;if(b!==null)a.gV=1+b.gV|0;b=a.b5;if(b!==null)a.gV=a.gV+b.gV|0;}
var AK7=G();
function AMJ(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Yg;c=c.buffer;d.gk=c;d.qi=new $rt_globals.Int8Array(c);d.mH=new $rt_globals.Uint16Array(c);d.Al=new $rt_globals.Int32Array(c);d.sv=new $rt_globals.Float32Array(c);d.sH=new $rt_globals.Float64Array(c);e=d.gk.byteLength;c=new K;M(c);U(H(c,C(280)),e);CT(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(281)),e);CT(L(c));f=b.callToCpp2();c=new K;M(c);EH(H(c,C(282)),f);CT(L(c));c=O7(d,b.getC8String());g=new K;M(g);H(H(g,C(283)),c);CT(L(g));c
=WI(d,b.getC16String());g=new K;M(g);H(H(g,C(284)),c);CT(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gk,h,8));c=AGy(i);g=new K;M(g);H(H(g,C(285)),c);CT(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gk,h,8));c=ASB(j);g=new K;M(g);H(H(g,C(286)),c);CT(L(g));k=AJf(d,b.getCDoubleArray8(),8);l=AUr(k);c=new K;M(c);H(H(c,C(287)),l);CT(Ed(c));l=AUm(b.getC8String(),C(288),d);c=L$();H(H(c,C(289)),l);CT(Ed(c));l=AQq(b.getC16String(),C(290),
d);c=L$();H(H(c,C(291)),l);CT(Ed(c));c=AZX(i,d,b.getCIntArray8(),DX([11,22,33,44,55,66,77,88]));g=L$();H(H(g,C(292)),c);CT(Ed(g));c=ASM(j,d,b.getCFloatArray8(),100,DX([111,222,333,444,555,666,777,888]));g=L$();H(H(g,C(293)),c);CT(Ed(g));b=A1d(k,d,b.getCDoubleArray8(),1000,DX([1111,2222,3333,4444,5555,6666,7777,8888]));c=L$();H(H(c,C(294)),b);CT(Ed(c));}
function ASM(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(295);h=0;i=e;a:{while(h<g){if(CY(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sv[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(296);}return C(297);}
function A1d(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(295);h=0;i=e;a:{while(h<g){if(GG(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sH[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(296);}return C(297);}
function AZX(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(295);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Al[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(296);}return C(297);}
function AUm(b,c,d){var e,f,g,h;e=O7(d,b);if(!Bj(c,e))return C(298);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.qi[h])return C(299);f=f+1|0;}return C(296);}
function AQq(b,c,d){var e,f,g,h;e=WI(d,b);if(!Bj(c,e))return C(298);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mH[h>>>1|0]&65535))return C(299);f=f+1|0;}return C(296);}
function CT(b){Ye(C(2),b);}
function APy(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Yz(){B.call(this);this.rS=null;}
function AVO(a,b){return AJg(a.rS,b);}
function Yx(){B.call(this);this.Bu=null;}
function AXf(a,b){AJu(a.Bu,b);}
function Yy(){B.call(this);this.xS=null;}
function AS4(a,b){b=b;return AEJ(a.xS,b);}
function AHP(){Kn.call(this);this.dv=null;}
function KS(){var a=new AHP();A2m(a);return a;}
function Ia(a,b,c,d){var e=new AHP();AYa(e,a,b,c,d);return e;}
function A2m(a){AB$(a);a.dv=new B2;}
function AYa(a,b,c,d,e){AB$(a);a.dv=new B2;Hj(a,b,c,d,e);}
function FZ(a){var b,c;b=a.t;c=a.dv;X(b,c.bf-c.bn|0,c.bC-c.bs|0);}
function FR(a,b){IB(a,0,0,BQ(b),CO(b));}
function IB(a,b,c,d,e){Cr(a.dv,b,c,d,e);}
function EG(a,b,c,d,e){var f;f=a.u;DJ(b,f.a+d|0,f.b+e|0,a.t,a.dv,c,a.X,a.bl,0);}
function SR(a,b,c,d){var e;e=a.u;DJ(b,e.a,e.b,a.t,a.dv,c,a.X,a.bl,d);}
function Iz(a,b,c,d,e,f,g){DJ(b,c,d,a.t,a.dv,e,!f?a.X:a.bl,!f?a.bl:a.X,g);}
function HD(a,b){BR(a.X,b);}
function Fj(a,b){BR(a.bl,b);}
function TR(){B.call(this);this.fz=null;}
function AV2(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fz.hv;f=e.t;d=d-f.a|0;g=c.b-f.b|0;X(e.u,d,g);c=a.fz;e=c.x.bw;b=b.j;d=0;a:{while(true){h=c.i0.data;if(d>=h.length)break;if(Fb(h[d],b)){b=c.qB.data[d];break a;}d=d+1|0;}b=null;}ZS(e,b);return 1;}
function ALH(a,b,c,d){if(!c&&d==2){b=a.fz;Su(b,b.el);}return 1;}
function AVV(a,b,c){var d,e;d=Bt();e=new K;M(e);U(H(e,C(300)),c);Bk(d,L(e));if(c)return null;d=b.j;e=!Fb(a.fz.el,d)?null:d;Ua(a.fz.jA,d.a,d.b);b=a.fz;YF(b.jA,MY(b.x.bw));if(e===null)b=A7n;else{b=new ACl;b.sT=a;b.sU=e;}return b;}
function AVn(a,b,c){var d;b=Bt();d=new K;M(d);U(H(d,C(301)),c);Bk(b,L(d));return 1;}
function Y0(){B.call(this);this.B8=null;}
function A1B(a,b){return W2(a.B8,b);}
function YZ(){B.call(this);this.ss=null;}
function AZ0(a,b){return W2(a.ss,b);}
function YY(){B.call(this);this.Dv=null;}
function AYk(a,b,c){var d,e;Bk(Bt(),C(302));d=!c?C(303):C(54);e=new K;M(e);H(H(H(e,C(304)),d),C(305));ACU(b,L(e));return 1;}
function YX(){B.call(this);this.Eh=null;}
function AUY(a){Bk(Bt(),C(306));}
function YW(){B.call(this);this.EP=null;}
function ARm(a,b){Bk(Bt(),C(307));return 1;}
function YV(){B.call(this);this.AS=null;}
function A1H(a,b,c,d){var e,f,g;b=a.AS;e=( -d|0)/10|0;b=b.el;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Ho(){var a=this;B2.call(a);a.ho=0;a.hr=0;a.hp=0;a.hq=0;}
function CC(a){var b=new Ho();AUc(b,a);return b;}
function Dy(a,b,c){var d=new Ho();AWJ(d,a,b,c);return d;}
function S(a){var b=new Ho();A04(b,a);return b;}
function EY(a,b,c,d){var e=new Ho();RC(e,a,b,c,d);return e;}
function BZ(a){var b=new Ho();K0(b,a);return b;}
function AUc(a,b){RC(a,b,b,b,255);}
function AWJ(a,b,c,d){RC(a,b,c,d,255);}
function A04(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.ho=Kr(P(b,1))*17|0;a.hr=Kr(P(b,2))*17|0;a.hp=Kr(P(b,3))*17|0;a.hq=255;}else{a.ho=LS(P(b,1),P(b,2));a.hr=LS(P(b,3),P(b,4));a.hp=LS(P(b,5),P(b,6));a.hq=J(b)!=9?255:LS(P(b,7),P(b,8));}IG(a.ho,a.hr,a.hp,a.hq,a);return;}}
function RC(a,b,c,d,e){a.ho=b;a.hr=c;a.hp=d;a.hq=e;IG(b,c,d,e,a);}
function K0(a,b){a.ho=b.ho;a.hr=b.hr;a.hp=b.hp;a.hq=b.hq;BR(a,b);}
function Kr(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LS(b,c){return (16*Kr(b)|0)+Kr(c)|0;}
var AGN=G(0);
function FQ(b){return !b?I(BJ,[C(155),C(166),C(308)]):I(BJ,[C(155),C(166),C(308),C(34)]);}
function Wz(){B.call(this);this.mg=null;}
function AN3(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mg.dk;e=DQ();f=e-0.5+(DQ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DQ()*0.3;h=0.5+DQ()*0.5;Ix(e,g,h,1.0,b.X);Ix(f,g,h,1.0,b.bl);b=a.mg;BR(b.dY.X,b.dk.X);b=a.mg;BR(b.dY.bl,b.dk.bl);}return 1;}
function Ww(){var a=this;B.call(a);a.nP=null;a.oi=null;}
function AGc(){var a=this;B.call(a);a.f5=null;a.cp=null;a.gT=null;a.hX=null;a.nY=null;a.cF=null;a.hL=null;a.c4=0;a.f8=0;a.of=0;a.ko=0;a.kD=0;a.hR=0;a.kW=null;a.o7=null;a.wF=null;a.nN=null;}
function AJL(){var a=new AGc();ASS(a);return a;}
function ASS(a){a.cp=St();a.gT=new Bg;a.hX=new Bg;a.cF=A8i;a.ko=(-1);a.kD=1;}
function Nq(a,b){Oc(a);a.cF=b;}
function JG(a,b,c){a.f5=b;ACQ(a,c);Oc(a);}
function JI(a,b){var c;a.nY=b.lA;c=b.o$.pN;BR(a.cp.X,c);c=b.jd.jJ;BR(a.cp.bl,c);a.nN=b.o$;}
function MX(a){a.hL=BV(a.hL,null);X(a.gT,0,0);a.cF=A8i;a.ko=(-1);ABb(a.cp);}
function ACQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Kl(b);d=b.cf;BC(a.f5);Cn(c,a.f5);e=Nj(a.f5,1.25);f=0;a.c4=Cg(2.0,d);a.f8=Cg(3.0,d);a.of=Cg(12.0,d);g=0;h=a.cF.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Lf(c,l.nD);n=a.of;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fn;b.a=g;b.b=0;b=l.ex;b.a=n;b.b=e;Cr(l.kl,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gT;b.a=g;b.b=e;b=a.cp.t;n=a.hR;if(!n){m=a.c4;m=(g+m|0)+Bc(m,a.cF.data.length)|0;}else m=(f+(a.c4*2|0)|0)+(a.f8*2|0)|0;b.a=m;if(!n)e=e+(a.c4*2|0)|0;else{n=a.c4;e=(Bc(e+n|0,a.cF.data.length)+n
|0)+(a.f8*2|0)|0;}b.b=e;}
function Nk(a,b,c){var d,e,f,g,h,i,j;X(a.cp.u,b,c);d=a.c4+a.f8|0;e=a.cF.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fn;j.a=b+d|0;j.b=c+h|0;if(!a.hR){if(!i.ex.a)AEx();d=d+(i.ex.a+a.c4|0)|0;}else{if(!i.ex.b)AEx();h=h+(i.ex.b+a.c4|0)|0;}g=g+1|0;}}
function AEx(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EB(a){var b,c;b=a.gT;if(b.a&&b.b)return a.cp.t;c=new Bu;Bm(c,C(309));N(c);}
function Oc(a){a.kD=1;}
function Mf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bH;if(!a.cF.data.length)return;if(a.hL===null)a.hL=CV(c);a:{if(!a.kD){d=a.gT;if(Bc(d.a,d.b))break a;}d=a.gT;if(!Bc(d.a,d.b))ACQ(a,b);d=a.gT;e=d.a;f=d.b;if(!Bc(e,f))return;d=D5(c,e,f,b.cz);Cn(d,a.f5);g=Nj(a.f5,0.125);h=a.f5;i=h.ep;g=g+i-(i+h.eI)/16.0;j=a.cF.data;e=j.length;f=0;while(f<e){h=j[f];B0(d,h.nD,h.kl.bn+a.of,g);f=f+1|0;}CM(a.hL,d);a.kD=0;Ez(d);}if(!Ld(a.cp)){d=a.cp;AI2(c,d.t,d.u,d.bl,a.c4,a.hX);d=a.cp;h=d.t;k=d.u;d=d.X;e=a.c4;l=a.hX;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hR){d=a.cp;AKc(c,d.t,d.u,0,0,Yi(a.nY,b.cf),a.nY.n2,a.hX);}}j=a.cF.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fn;e=h.a;f=h.b;h=d.ex;k=d.kl;l=a.hL;o=a.nN;DJ(c,e,f,h,k,l,o.rV,Vh(o,d.la),b.cz);n=n+1|0;}b:{if(a.hR){j=a.cF.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hX;e=(a.cp.t.a-(a.c4*2|0)|0)-(a.f8*2|0)|0;h=d.ex;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fn;Bs(c,k.a+h.a|0,k.b,b,Vh(a.nN,d.la));}p=p+1|0;}}}}
function NV(a,b,c){var d,e,f,g,h,i;d=Fb(a.cp,b);e=!d?(-1):Pv(a,b);f=a.ko;if(f!=e){if(f>=0){g=a.cF.data[f];g.la=0;if(a.wF!==null){h=Bt();g=Cl(g);i=new K;M(i);H(H(U(H(i,C(310)),f),C(311)),g);Bk(h,L(i));}}if(e>=0){h=a.cF.data[e];g=a.o7;if(g!==null)g.wL(b,e,h);h.la=1;}a.ko=e;}return d&&GI(c)?1:0;}
function Of(a,b,c,d){var e,f;e=Pv(a,b);if(e>=0){f=a.cF.data[e];if(!ACb(f))f.mZ.f();}return 1;}
function Pv(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cF.data;if(c>=d.length)return (-1);e=d[c];if(Gk(b,e.fn,e.ex))return c;if(a.hR){f=e.fn;g=f.a;e=e.ex;h=e.a;g=g+h|0;i=f.b;f=a.hX;f.a=(a.cp.t.a-(a.c4*2|0)|0)-h|0;f.b=e.b;if(AES(b,g,i,f))break;}c=c+1|0;}return c;}
function AEa(a){a.hR=1;}
function AI3(){var a=this;B.call(a);a.ia=null;a.gZ=0.0;a.j8=0;a.kn=0;}
function Dv(a,b){var c=new AI3();ARB(c,a,b);return c;}
function ARB(a,b,c){a.ia=b;a.gZ=c;a.j8=400;a.kn=700;}
function A0Y(a,b){if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){b=b;return a.gZ===b.gZ&&a.j8==b.j8&&a.kn==b.kn&&BO(a.ia,b.ia)?1:0;}return 0;}
function ABH(){B.call(this);this.uC=null;}
function AQ0(a,b){var c;c=a.uC;if(b.bm==32)MX(c.dE);return 0;}
function ABD(){B.call(this);this.vF=null;}
function ASN(a,b){var c,d,e,f;b=b;c=a.vF;d=Nt(c.r);Gh(d,Fg(),c.oA);b=b.j;e=RN(4);f=new UM;f.Dw=c;Jo(d,b,e,f);Gn(c.M,d);return 1;}
var ABE=G();
function A29(a){Bk(Bt(),C(312));}
var ABF=G();
function AMp(a){Bk(Bt(),C(313));}
function BN(){var a=this;B.call(a);a.mZ=null;a.kl=null;a.fn=null;a.ex=null;a.nh=null;a.tM=null;a.la=0;a.nD=null;}
function Xc(a,b){var c=new BN();CL(c,a,b);return c;}
function A43(a,b,c,d){var e=new BN();AJq(e,a,b,c,d);return e;}
function CL(a,b,c){AJq(a,b,c,null,null);}
function AJq(a,b,c,d,e){a.kl=new B2;a.fn=new Bg;a.ex=new Bg;a.nD=c;a.tM=e;a.mZ=b;a.nh=d;}
function ACb(a){return a.nh===null?0:1;}
function Us(){B.call(this);this.CB=null;}
function AYe(a,b){return b.jS&&b.bm==32?1:0;}
function Ut(){B.call(this);this.Bc=null;}
function AL7(a,b){var c,d,e,f,g,h;b=b;c=a.Bc;d=Nt(c.r);Gh(d,Fg(),Dv(C(155),25.0));b=b.j;e=Q(BN,1);f=e.data;g=new BN;h=new AD4;h.Bt=c;CL(g,h,C(314));f[0]=g;Jo(d,b,C3(e),A8j);Gn(c.M,d);return 1;}
function AHv(){var a=this;B.call(a);a.pY=0;a.p0=0;}
function UV(){var a=new AHv();ATz(a);return a;}
function A4i(a,b){var c=new AHv();ALb(c,a,b);return c;}
function ATz(a){ALb(a,AKU(GS((AGK()))),GS((AGK()))^(-559038737));}
function ALb(a,b,c){var d;a.pY=b;a.p0=c;d=0;while(d<19){NE(a);d=d+1|0;}}
function NE(a){var b,c;b=a.pY;c=a.p0;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pY=c;a.p0=b;return b;}
function AKU(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AKv(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function D6(a,b){return UX(a)*b|0;}
function UX(a){return 5.960464477539063E-8*(NE(a)&16777215);}
function QX(a,b){var c,d,e;c=AKv(NE(a));d=ASG( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function O_(){B.call(this);this.xY=null;}
function AQ7(a,b,c){var d;d=a.xY;if(b===0.0)L4(d,100);}
function O$(){B.call(this);this.vR=null;}
function AZB(a,b){var c,d,e;c=a.vR;d=b.bm;if(d==32){c.lK=c.lK?0:1;e=1;}else if(d==13){L4(c,1);e=1;}else if(d!=8)e=0;else{PG(c,1);e=1;}return e;}
var ZM=G(0);
function AIc(b,c){var d;d=new UQ;d.xL=b;d.xK=c;return d;}
function AIi(){var a=this;B.call(a);a.hF=null;a.ib=0;a.lU=0;a.hi=0;}
function AIs(a){var b=new AIi();AOb(b,a);return b;}
function AOb(a,b){a.hF=BL();a.hi=0;a.lU=2048;a.ib=b;}
function Kv(a,b,c){var d,e,f,g,h,i;d=c.zk(b);e=a.lU;if(d>e){c=new Bu;f=new K;M(f);BM(U(H(U(H(f,C(315)),d),C(316)),e),41);Bm(c,L(f));N(c);}if(!a.ib){b=new BU;Bm(b,C(317));N(b);}a:{b=new B2;if(d){b:{c=a.hF;if(c.q>0){c=B7(c);g=d;while(true){if(!B_(c))break b;f=Ca(c);if(f.bf>=g)break;}Cr(b,f.bn,f.bs,g,a.ib);f.bn=f.bn+g;h=f.bf-g;f.bf=h;if(h===0.0)AG9(a.hF,f);break a;}}g=a.hi;i=d;Cr(b,0.0,g,i,a.ib);BB(a.hF,ADR(i,a.hi,a.lU-d|0,a.ib));a.hi=a.hi+a.ib|0;}}return b;}
function I1(a,b){var c,d,e,f,g,h,i;a:{c=AK_(b);b=a.hF;if(b.q>0){d=B7(b);while(true){if(!B_(d))break a;e=Ca(d);if(e.bs===c.bs){f=e.bn;g=e.bf;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bf=c.bf+g;Zw(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;Zw(d);}}}}}}BB(a.hF,c);}
function MP(a){return BF(a.lU,a.hi);}
function WK(){var a=this;B.call(a);a.rU=null;a.lO=null;}
function AU9(a,b,c){if(c)return A7n;return F5(a.lO.i1,b.j,a.rU,1);}
function AL2(a,b,c){return 1;}
function AWY(a,b){var c;c=a.lO;return Ga(c.i1,b.j,c.xF);}
function Z7(){B.call(this);this.AG=null;}
function AQ5(a,b,c,d){var e,f;b=a.AG;e=(Wq(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e$=Be(Bd(0,b.e$+Bc(e,f)|0),UN(b));return 1;}
function QM(){B.call(this);this.s9=null;}
function AQU(a,b){var c,d,e;c=a.s9;if(b.cN&&b.bm==79){if(!b.bL){b=c.x.bw;d=new W$;d.uY=c;Kf(b,d);}else{b=c.x.bw;d=new W9;d.xo=c;Jc(b,d);}e=1;}else e=0;return e;}
function RE(){B.call(this);this.x2=null;}
function AUl(a,b){var c,d,e,f,g,h,i;b=b;c=a.x2;d=Nt(c.r);Gh(d,Fg(),Dv(C(155),25.0));b=b.j;e=Q(BN,5);f=e.data;g=new BN;h=new T2;h.rE=c;CL(g,h,C(318));f[0]=g;g=new BN;h=new T3;h.sj=c;CL(g,h,C(319));f[1]=g;g=new BN;h=new T4;h.tF=c;CL(g,h,C(320));f[2]=g;h=new BN;i=new T5;i.xy=c;CL(h,i,C(321));f[3]=h;h=new BN;i=new T6;i.x0=c;CL(h,i,C(322));f[4]=h;Jo(d,b,C3(e),A8j);Gn(c.M,d);return 1;}
function RD(){B.call(this);this.z$=null;}
function A0B(a,b){var c,d,e,f;c=a.z$;d=c.x.bw;e=new XK;e.wV=c;f=Q(B,1);f.data[0]=b;CU(d,e,C(323),f);}
function ABQ(){B.call(this);this.m8=null;}
function AZR(a,b){var c,d,e,f,g,h;c=a.m8;d=c.qn;if(d!==null){e=c.e7.u;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qn=g;}b=b.j;f=b.a;c=c.gE;d=c.t;f=f-d.a|0;h=b.b-d.b|0;X(c.u,f,h);return 1;}
function AUa(a,b,c){var d;if(!c){d=b.j;b=a.m8;if(!Fb(b.e7,d))d=null;b.qn=d;}return A7n;}
var AGg=G();
function ALg(b){var c,d;c=HJ(b,250,64);Hy(c,C(244),25.0);J8(c,187,187,187);B0(c,C(324),0.0,24.0);B0(c,C(324),0.25,56.0);d=CV(b);CM(d,c);Ez(c);return d;}
var Dj=G(0);
var A7y=null;var A71=null;var A7z=null;var A7g=null;var A7B=null;var A7A=null;var A7D=null;var A7C=null;var A7F=null;var A7E=null;var A7G=null;function FK(){FK=Bn(Dj);AUo();}
function AUo(){A7y=CC(187);A71=S(C(325));A7z=CC(55);A7g=CC(43);A7B=Dy(33,66,131);A7A=Dy(60,63,65);A7D=S(C(326));A7C=S(C(327));A7F=EY(85,85,85,128);A7E=EY(43,43,43,0);A7G=S(C(230));}
function YA(){var a=this;B.call(a);a.qV=null;a.l3=null;}
function APb(a,b,c){var d;if(!c){d=F5(a.l3.iF,b.j,a.qV,1);if(d!==null)return d;}return A7n;}
function AVk(a,b,c){return 1;}
function AN8(a,b){var c;c=a.l3;return Ga(c.iF,b.j,Rw(c.x.bw));}
function VZ(){B.call(this);this.rC=null;}
function A1E(a,b,c,d){var e,f;b=a.rC;e=(Wq(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fH=Be(Bd(0,b.fH+Bc(e,f)|0),Z8(b));return 1;}
function ADj(){B.call(this);this.wE=null;}
function ANl(a,b){var c,d;a:{c=a.wE;switch(b.bm){case 67:Qz(c);d=1;break a;case 86:ZP(c);d=1;break a;default:}d=0;}return d;}
var ADi=G();
function AYq(a,b,c){return 0;}
function ADh(){B.call(this);this.sB=null;}
function ANr(a,b,c){var d,e;d=a.sB;c=d.ee+1|0;d.ee=c;d=JS(F(Kq));e=new K;M(e);H(H(U(e,c),C(328)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ACU(b,e);return 1;}
var ADg=G();
function AQk(a){return null;}
function ADk(){B.call(this);this.zQ=null;}
function A0_(a){var b,c;b=a.zQ;c=new VI;c.qR=b;return c;}
function Sd(){B.call(this);this.DX=null;}
function ATQ(a,b){return 0;}
function Px(){B.call(this);this.ze=null;}
function ALX(a,b){var c;c=a.ze;if(b.jS&&b.bm==27){b=ADv(c.M);if(b!==null){b=b.di;if(b===null){b=new F4;Y(b);N(b);}b.i9.f();}}return 0;}
function Py(){B.call(this);this.vP=null;}
function AXD(a,b){var c,d,e,f,g,h,i;b=b;c=a.vP;d=Nt(c.r);Gh(d,Fg(),Dv(C(155),25.0));b=b.j;e=Q(BN,1);f=e.data;g=new BN;h=c.M;i=new Xw;i.yQ=c;CL(g,OA(h,i),C(329));f[0]=g;Jo(d,b,C3(e),A8j);Gn(c.M,d);return 1;}
function Pz(){B.call(this);this.Bo=null;}
function AZP(a,b){var c,d,e;c=a.Bo;d=c.eK;if(d!==null){e=new AAT;e.B1=c;e.B2=b;GK(d,b,e);}}
function PA(){B.call(this);this.zb=null;}
function A1w(a,b){var c,d,e;b=b;c=a.zb;if(DO(c.r,c.eK)){d=c.me;b=b.j;e=c.eK;GQ(d,b,e,c,e,c,new XI);}return 1;}
function Xy(){B.call(this);this.x_=null;}
function ANL(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.x_;d=c.c9;if(d===null)e=1;else{if(!BW(d.fY,b.j)){d=c.c9.gp;f=b.j;g=Q(BN,1);h=g.data;b=new BN;i=new U2;i.vz=c;CL(b,i,C(330));h[0]=b;Li(d,f,C3(g));}else{c=c.c9;b=b.j;if(BW(c.fY,b)){d=c.gp;f=c.fY;i=c.Av;j=d.bQ;BC(j);k=new Q0;k.qI=j;j=new QZ;j.BV=c;GQ(d,b,f,i,f,k,j);}}e=1;}return e;}
function QT(){B.call(this);this.Fs=null;}
function APG(a,b){return 0;}
function AA1(){B.call(this);this.qZ=null;}
function ARU(a,b){var c,d,e,f,g,h;b=b;c=a.qZ;d=Q(BN,2);e=d.data;f=new BN;g=c.M;h=new Zq;h.Ak=c;CL(f,OA(g,h),C(331));e[0]=f;g=new BN;f=c.M;h=new Zp;h.r6=c;CL(g,OA(f,h),C(332));e[1]=g;f=C3(d);h=c.M;c=c.kd;Md(h,c.cR,c.i3,b.j,f);return 1;}
var AHg=G(0);
function AKB(b){H1(b,A4B(C(333),C(193),AB7(C(334))));}
function Uw(){B.call(this);this.Cy=null;}
function ARV(a,b){return 1;}
function Uv(){B.call(this);this.tY=null;}
function ARl(a,b){var c,d;c=a.tY;if(b.bm!=32)d=0;else{AA0(c.fO,AIC());d=1;}return d;}
var Dp=G(0);
var A7I=null;var A8k=null;var A7K=null;var A7J=null;var A7M=null;var A7L=null;var A7O=null;var A7N=null;var A7Q=null;var A7P=null;var A7R=null;function AOc(){AOc=Bn(Dp);AS3();}
function AS3(){A7I=CC(206);A8k=S(C(335));A7K=S(C(336));A7J=S(C(237));A7M=S(C(337));A7L=S(C(226));A7O=S(C(338));A7N=S(C(339));A7Q=EY(107,106,107,128);A7P=EY(30,31,34,0);A7R=S(C(239));}
function Cp(){CH.call(this);this.lb=null;}
var A8l=null;var A8m=null;var A8n=null;var A8o=null;var A8p=null;var A7p=null;var A8q=null;var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A8x=null;var A8y=null;var A7S=null;function T1(){T1=Bn(Cp);AYy();}
function DU(a,b,c){var d=new Cp();Z1(d,a,b,c);return d;}
function A4T(a,b,c,d){var e=new Cp();ADt(e,a,b,c,d);return e;}
function Z1(a,b,c,d){T1();DK(a,b,c);a.lb=JL(d,null);}
function ADt(a,b,c,d,e){T1();DK(a,b,c);a.lb=JL(d,e);}
function AYy(){var b,c;b=new Cp;AOc();Z1(b,C(340),0,A8k);A8l=b;A8m=DU(C(341),1,S(C(342)));A8n=DU(C(343),2,S(C(344)));A8o=DU(C(345),3,S(C(346)));A8p=DU(C(347),4,A8k);A7p=DU(C(348),5,S(C(349)));A8q=DU(C(350),6,S(C(351)));A8r=DU(C(352),7,S(C(353)));A8s=DU(C(354),8,S(C(355)));c=new Cp;FK();ADt(c,C(356),9,A71,S(C(338)));A8t=c;A8u=A4T(C(357),10,A71,S(C(240)));A8v=DU(C(358),11,S(C(359)));A8w=DU(C(360),12,S(C(361)));A8x=DU(C(362),13,A8k);b=DU(C(363),14,S(C(364)));A8y=b;A7S=I(Cp,[A8l,A8m,A8n,A8o,A8p,A7p,A8q,A8r,A8s,
A8t,A8u,A8v,A8w,A8x,b]);}
function Ks(){var a=this;B.call(a);a.g7=null;a.mT=null;}
function JL(a,b){var c=new Ks();AY3(c,a,b);return c;}
function AY3(a,b,c){a.g7=b;a.mT=c;}
function I0(){var a=this;B.call(a);a.lA=null;a.tl=null;a.oG=null;a.Ej=3;a.jd=null;a.BH=null;a.Fv=null;a.o$=null;a.m4=null;a.oR=null;}
function A8z(a,b,c,d,e,f,g){var h=new I0();LU(h,a,b,c,d,e,f,g);return h;}
function LU(a,b,c,d,e,f,g,h){a.tl=Dv(C(166),16.0);a.oG=Dv(C(14),16.0);a.Ej=3;a.BH=b;a.Fv=c;a.jd=d;a.o$=e;a.lA=f;a.m4=g;a.oR=h;}
function AJU(){var a=this;B.call(a);a.n2=null;a.tg=0;}
function AH6(a,b){var c=new AJU();A03(c,a,b);return c;}
function A03(a,b,c){var d;d=new B2;a.n2=d;a.tg=b;d.bC=c;}
function Yi(a,b){return Cg(a.tg,b);}
var DP=G(0);
var A7W=null;var A7X=null;var A7T=null;var A7U=null;var A7V=null;var A8d=null;var A8e=null;var A7Y=null;var A7Z=null;function AU6(){AU6=Bn(DP);AZT();}
function AZT(){A7W=S(C(226));A7X=S(C(365));A7T=S(C(242));A7U=S(C(351));A7V=S(C(335));A8d=S(C(226));A8e=S(C(366));A7Y=S(C(367));A7Z=Dy(43,45,48);}
var X5=G(0);
var Yf=G();
function AXj(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(368)),d),C(369)),e);CT(L(b));return d+e|0;}
var X6=G(0);
var Yd=G();
function AX0(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EH(H(EH(H(b,C(370)),d),C(369)),e);CT(L(b));return d+e;}
var AE6=G();
var AIg=G(0);
function Vb(){B.call(this);this.om=null;}
var A8i=null;function LC(){var a=new Vb();AIL(a);return a;}
function AIL(a){a.om=BL();}
function D2(a,b,c){M_(a,C9(b,c));}
function C9(b,c){return Xc(c,b);}
function FH(a,b,c){I5(a,b,c,null);}
function I5(a,b,c,d){M_(a,A43(null,b,c,d));}
function M_(a,b){BB(a.om,b);}
function G0(a){return C3(Gp(a.om,A8i));}
function AIk(){A8i=Q(BN,0);}
var DT=G(0);
var A79=null;var A7$=null;var A76=null;var A77=null;var A78=null;var A8b=null;var A8c=null;var A7_=null;var A8a=null;function AYZ(){AYZ=Bn(DT);AZC();}
function AZC(){A79=S(C(235));A7$=S(C(371));A76=S(C(279));A77=S(C(372));A78=S(C(325));A8b=S(C(235));A8c=S(C(371));A7_=EY(118,121,122,128);A8a=Dy(63,66,68);}
var H0=G(0);
var Qa=G();
function A0r(a,b,c,d){var e;b=Bt();d=Cl(d);e=new K;M(e);H(H(U(H(e,C(373)),c),C(311)),d);Bk(b,L(e));}
var Qb=G();
function TT(){B.call(this);this.z6=null;}
function AZu(a,b){var c;c=a.z6.lO;c.e$=FW(b,UN(c));}
function PR(){B.call(this);this.DB=null;}
function ANX(a,b){var c,d,e,f;c=b.data;b=Bt();d=Cl(c[0]);e=new K;M(e);H(H(e,C(262)),d);Bk(b,L(e));b=Bt();f=c[1];d=new K;M(d);H(H(d,C(374)),f);Bk(b,L(d));}
function PQ(){B.call(this);this.EL=null;}
function AME(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(262)),e);Bk(d,L(f));g=EQ(K8(b,1));b=Bt();d=Cl(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BY(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,C(37));BM(c,i[h]);h=h+1|0;}BY(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(375)),d),C(376)),c);Bk(b,L(e));}
function PN(){B.call(this);this.Ce=null;}
function ALP(a,b){ADu(a.Ce,b);}
function PL(){B.call(this);this.EU=null;}
function A2L(a,b){var c,d,e,f,g;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(262)),e);Bk(d,L(f));g=CQ(K8(b,1));b=Bt();d=Cl(c[1]);c=AGy(g);e=new K;M(e);H(H(H(H(e,C(377)),d),C(378)),c);Bk(b,L(e));}
var AHY=G();
function UR(){B.call(this);this.tw=null;}
function AX2(a,b){var c;c=a.tw.l3;c.fH=FW(b,Z8(c));}
function ACe(){B.call(this);this.DC=null;}
function AOV(a,b){return 0;}
function AKG(){var a=this;B.call(a);a.kt=null;a.o2=null;a.gQ=null;a.Fj=null;}
function AB7(a){var b=new AKG();A0T(b,a);return b;}
function A0T(a,b){var c,d,e;c=null;d=null;e=null;a.kt=c;a.o2=d;a.gQ=b;a.Fj=e;}
function ACq(a){var b,c;b=a.gQ;if(b===null)return C(21);c=AFI(b,C(379));return c==(-1)?a.gQ:Dw(a.gQ,c+1|0);}
function AWp(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.kt,c.kt)&&BO(a.o2,c.o2)&&BO(a.gQ,c.gQ)?1:0;}return 0;}
function I8(){var a=this;B.call(a);a.uc=null;a.q_=null;a.rL=null;a.AA=null;a.sR=null;a.li=null;}
function A8A(a,b,c,d,e,f){var g=new I8();OF(g,a,b,c,d,e,f);return g;}
function OF(a,b,c,d,e,f,g){a.uc=b;a.q_=c;a.rL=d;a.AA=e;a.sR=f;a.li=g;}
function Ko(){var a=this;B.call(a);a.rV=null;a.pN=null;a.uL=null;}
function A8B(a,b,c){var d=new Ko();K_(d,a,b,c);return d;}
function K_(a,b,c,d){a.rV=b;a.pN=c;a.uL=d;}
function Vh(a,b){return !b?a.pN:a.uL;}
function AIF(){var a=this;B.call(a);a.jJ=null;a.l9=null;a.oc=null;}
function AHI(a,b,c){var d=new AIF();A1V(d,a,b,c);return d;}
function A1V(a,b,c,d){a.jJ=b;a.l9=c;a.oc=d;}
function Cv(){CH.call(this);this.n0=null;}
var A8C=null;var A8D=null;var A8E=null;var A8F=null;var A8G=null;var A8H=null;var A8I=null;var A8J=null;var A8K=null;var A8L=null;var A8M=null;var A8N=null;var A8O=null;var A8P=null;var A8Q=null;var A7H=null;function AFh(){AFh=Bn(Cv);AX7();}
function Eb(a,b,c){var d=new Cv();ABl(d,a,b,c);return d;}
function A05(a,b,c,d){var e=new Cv();AHh(e,a,b,c,d);return e;}
function ABl(a,b,c,d){AFh();DK(a,b,c);a.n0=JL(d,null);}
function AHh(a,b,c,d,e){AFh();DK(a,b,c);a.n0=JL(d,e);}
function AX7(){var b;b=new Cv;FK();ABl(b,C(340),0,A71);A8C=b;A8D=Eb(C(341),1,S(C(380)));A8E=Eb(C(343),2,S(C(381)));A8F=Eb(C(345),3,S(C(382)));A8G=Eb(C(347),4,S(C(380)));A8H=Eb(C(348),5,Dy(188,63,60));A8I=Eb(C(350),6,S(C(383)));A8J=Eb(C(352),7,S(C(384)));A8K=Eb(C(354),8,S(C(385)));A8L=A05(C(356),9,A71,Dy(52,65,52));A8M=A05(C(357),10,S(C(386)),S(C(387)));A8N=Eb(C(358),11,S(C(388)));A8O=Eb(C(360),12,S(C(389)));A8P=Eb(C(362),13,A71);b=Eb(C(363),14,S(C(364)));A8Q=b;A7H=I(Cv,[A8C,A8D,A8E,A8F,A8G,A8H,A8I,A8J,A8K,A8L,
A8M,A8N,A8O,A8P,b]);}
var ALa=G();
function Ka(b,c){var d,e,f;if(c<=0)return C(21);d=B5(c);e=d.data;e[0]=AKw(D6(b,52));f=1;while(f<c){e[f]=AKw(D6(b,62));f=f+1|0;}return Hs(d);}
function AKw(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AFC=G();
function ALj(){var a=this;B.call(a);a.Jv=null;a.OX=null;a.IK=0;a.Pu=0;}
var AEm=G(0);
function AKD(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BJ,8);e=DM(8);f=B5(16);g=0;h=0;i=0;while(true){j=BK(i,b);if(j>0)break;k=j>=0?10:(c.bc(CX(i))).m0;if(k==10){d=AGY(EC(f,0,g),d,h);e=ACa(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=KL(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AGY(EC(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bc(CX(j))).m0==10){e=ACa(1,e,h);i=j;}else e=ACa(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ZC;d=AE9(d,h);if(m.length!=h)e=Oq(e,h);c.kj=d;c.CF=e;return c;}
function AIE(b){var c,d;c=J(b);BC(b);d=new PE;d.t8=b;return AKD(c,d);}
var C1=G();
var AJ$=G(C1);
var AKu=G(C1);
var AIU=G(C1);
var AI5=G(C1);
var AKJ=G(C1);
function Vl(){B.call(this);this.sa=null;}
function APw(a){var b;b=a.sa;Bk(Bt(),b);}
var HK=G(CH);
var A8R=null;var A7h=null;var A8S=null;function AQE(){AQE=Bn(HK);AW3();}
function A26(a,b){var c=new HK();AEX(c,a,b);return c;}
function AEX(a,b,c){AQE();DK(a,b,c);}
function AW3(){var b;A8R=A26(C(390),0);b=A26(C(391),1);A7h=b;A8S=I(HK,[A8R,b]);}
function PE(){B.call(this);this.t8=null;}
function AVl(a,b){return PD(P(a.t8,b.bp));}
function ZC(){var a=this;B.call(a);a.kj=null;a.CF=null;}
var AIB=G();
function Cg(b,c){return CY(b*c);}
function Gs(){var a=this;B.call(a);a.hb=0;a.nF=null;}
var AFt=G();
function Tw(){var a=this;B.call(a);a.ru=null;a.ug=null;a.AE=null;}
var AIH=G(0);
function AHW(b){if(b===null)return C(182);if(!DB(b,C(392))&&!DB(b,C(393))&&!DB(b,C(394))&&!DB(b,C(395))&&!DB(b,C(396))&&!DB(b,C(397))){if(DB(b,C(398)))return C(193);if(DB(b,C(399)))return C(208);if(DB(b,C(400)))return C(203);if(!DB(b,C(401))&&!DB(b,C(402)))return C(182);return C(403);}return C(209);}
function AId(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(N0(b)){case -1655966961:if(!Bj(b,C(203)))break a;c=4;break a;case 3401:if(!Bj(b,C(208)))break a;c=3;break a;case 98723:if(!Bj(b,C(209)))break a;c=2;break a;case 3213227:if(!Bj(b,C(403)))break a;c=5;break a;case 3254818:if(!Bj(b,C(193)))break a;c=1;break a;case 3556653:if(!Bj(b,C(182)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=En();e
=new K;M(e);H(H(e,C(404)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function ABa(){B.call(this);this.qJ=null;}
function APB(a,b,c,d){return LR(a.qJ,b,c,d);}
function V6(){B.call(this);this.wX=null;}
function A2u(a,b,c){return He(a.wX,b,c);}
function V5(){B.call(this);this.yG=null;}
function AQc(a){var b,c;b=a.yG;c=new AB9;c.vO=b;return c;}
function V7(){var a=this;B.call(a);a.DG=null;a.DH=null;a.DI=null;}
function XG(){B.call(this);this.ku=null;}
function A3a(a,b){var c,d,e,f,g;c=a.ku;d=c.my;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kz;e.a=E6(0,e.a+f|0,c.gX.a-c.jW.a|0);c=a.ku;d=c.kz;d.b=E6(0,d.b+g|0,c.gX.b-c.jW.b|0);}a.ku.my=b.j;return 1;}
var AFA=G();
function L0(){return "clipboard" in $rt_globals.navigator?1:0;}
function AHb(){var a=this;B.call(a);a.cP=null;a.cg=null;a.kA=null;a.kR=null;a.n4=null;a.j3=null;}
function Nt(a){var b=new AHb();A0m(b,a);return b;}
function A0m(a,b){a.cg=BL();a.j3=A8j;a.cP=b;Ba(b.dU,a);}
function Gh(a,b,c){a.kA=c;a.n4=b;b=B7(a.cg);while(B_(b)){JI(Ca(b),a.n4);}}
function Jo(a,b,c,d){a.j3=d;Se(a,b,c);}
function Se(a,b,c){var d,e;d=a.cP;e=d.bO;if(Bc(e.a,e.b)&&d.cf!==0.0){if(a.kA!==null&&!Jt(a)){a.kR=Fk(a.cP,a.kA);d=Vn(a,b,c,null,null);b=new R6;b.t2=a;d.kW=b;FN(a.cP,a);return;}b=new BU;Y(b);N(b);}c=new C$;Bm(c,C(405));N(c);}
function Mq(a){if(Jt(a)){ABv(a.cP,a);ABm(a,null);a.j3.f();a.j3=A8j;}}
function Vn(a,b,c,d,e){var f,g,h;f=AJL();AEa(f);Nq(f,c.cC());JI(f,a.n4);JG(f,a.kR,a.cP);if(d===null)g=b.a;else{g=b.a;g=a.cP.bO.a<((g+(EB(d)).a|0)+(EB(f)).a|0)?g-(EB(f)).a|0:(g+(EB(d)).a|0)-d.f8|0;}h=b.b;b=a.cP.bO;Nk(f,Bd(0,Be(g,b.a-(EB(f)).a|0)),Bd(0,Be(h,b.b-(EB(f)).b|0)));b=new ABY;b.vD=a;b.vA=f;b.vB=e;f.o7=b;BB(a.cg,f);return f;}
function A2S(a,b,c){var d;a.kR=Fk(a.cP,a.kA);d=B7(a.cg);while(B_(d)){JG(Ca(d),a.kR,a.cP);}}
function AEs(a){var b,c;if(ED(a.cg))return;B$(a.cP.bH,1);b=0;while(true){c=a.cg;if(b>=c.q)break;Mf(BG(c,b),a.cP);b=b+1|0;}}
function AP_(a,b){var c;if(!Jt(a))return 0;a:{switch(b.bm){case 27:Mq(a);c=1;break a;default:}c=0;}return c;}
function ABm(a,b){var c,d;c=a.cg.q-1|0;a:{while(true){if(c<0)break a;d=BG(a.cg,c);if(b===d)break;EN(a.cg,c);MX(d);c=c+(-1)|0;}}}
function Jt(a){return a.cg.q<=0?0:1;}
function AR3(a){var b,c;Sf(a.cP.dU,a);ABv(a.cP,a);b=a.cg;c=B7(b);while(B_(c)){MX(Ca(c));}Iy(b);}
function W8(){B.call(this);this.xV=null;}
function APW(a,b){Mr(a.xV,b);}
function U4(){B.call(this);this.zz=null;}
function A2w(a,b){var c,d,e,f;c=a.zz;if(c.gD!=3&&c.fe!=3){b=b.data;c.gW=3;d=CQ(b[0]);e=EQ(b[1]);N_(c.h,d,e);if(c.fQ){b=E2(c);f=JO(E4(),c.i4);c=new K;M(c);H(HL(H(H(c,b),C(406)),f),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}
function Q6(){B.call(this);this.zf=null;}
function AVQ(a,b){var c,d,e,f,g,h;c=a.zf;if(c.fe!=3){d=b.data;c.gD=3;if((CQ(d[2])).data[0]!=1)Mr(c,b);else{e=CQ(d[0]);f=EQ(d[1]);g=c.gW!=3?0:1;Ry(c.h,e,f,g);if(c.fQ){b=E2(c);h=JO(E4(),c.i4);c=new K;M(c);H(HL(H(H(c,b),C(407)),h),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function PT(){B.call(this);this.kk=null;}
function AVa(a){return a.kk;}
var AJ6=G(0);
var LV=G(0);
function Q_(){B.call(this);this.uo=null;}
function AV_(a,b){return Lf(a.uo,b);}
function Pu(){B.call(this);this.AI=null;}
function A1L(a,b){var c,d;c=a.AI;d=b.bp;return PD(c.charCodeAt(d)&65535);}
var AGA=G();
function AI2(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AKc(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function QN(){var a=this;B.call(a);a.cQ=null;a.qh=null;a.ft=null;a.ef=0;a.cu=0;a.je=null;a.jZ=null;a.hy=0;a.w4=0;}
function Pr(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.ef;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}ER(c);j=d+(-1)|0;b=Dm(d);d=Bc(j,a.cu)%a.ft.b|0;GR(a,c,b,a.hy,g);JN(a.cQ,c,0,d);if(!(j%a.ef|0))break;d=j;}}else{ER(b);k=a.ef-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GR(a,b,Dm(j),Bc(a.cu,k)+a.hy|0,g);k=k+(-1)|0;j=h;}CM(a.cQ,b);j=Bd(i,e);}return j;}k=a.ef;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}ER(c);b=Dm((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cu)%a.ft.b|0;GR(a,c,b,a.hy,g);JN(a.cQ,c,0,d);if(!(j%a.ef|0))break;d=j;}}else{ER(b);d=0;while(d<a.ef){h=h+1|0;GR(a,b,Dm((h>e?h-f|0:h)+f|0),Bc(a.cu,d)+a.hy|0,g);d=d+1|0;}CM(a.cQ,b);j=Be(i,e);}return j;}
function V4(b,c,d,e){c=c.data;return d<c.length&&c[d]?J2(b.d7,b,c[d]):e.k$;}
function No(a,b,c,d,e,f){DJ(b,a.qh.a+d.a|0,c+d.b|0,a.je,a.jZ,a.cQ,e,f,a.w4);}
function GR(a,b,c,d,e){B0(b,c,a.ft.a-20.0*e,d);}
var AEp=G();
function Gk(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AES(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function T_(){var a=this;B.call(a);a.p_=null;a.qa=null;a.is=null;}
function A5h(a,b,c){var d=new T_();AF_(d,a,b,c);return d;}
function AF_(a,b,c,d){a.p_=b;a.qa=c;a.is=d;}
function GO(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.is.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.h7:i.h8;k=!c?i.og:i.oh;l=BK(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function L9(){var a=this;B.call(a);a.h8=0;a.oh=0;a.h7=0;a.og=0;a.oY=0;}
function Np(a,b,c,d,e){var f=new L9();A07(f,a,b,c,d,e);return f;}
function A07(a,b,c,d,e,f){a.h8=b;a.oh=c;a.h7=d;a.og=e;a.oY=f;}
var Sy=G(0);
var A7n=null;function AKk(){A7n=new Ru;}
function ACl(){var a=this;B.call(a);a.sT=null;a.sU=null;}
function AWa(a,b){var c,d,e;c=a.sT;d=a.sU;c=c.fz.el.u;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Co(d,b);}
var Ge=G(I9);
var ADw=G(FA);
function ACK(){B.call(this);this.zt=null;}
function AUn(a,b){var c,d;c=a.zt;VJ(c,Fy(c,b.j));b=Bi(c);d=c.d;N7(b,d.w,d.A);H$(c);}
function Ui(){B.call(this);this.xD=null;}
function A18(a,b){var c,d;c=a.xD;d=c.ee+1|0;c.ee=d;c=new K;M(c);H(H(U(c,d),C(408)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function VP(){B.call(this);this.xN=null;}
function A0I(a){var b,c;b=a.xN;c=new K;M(c);H(H(H(c,C(409)),b),C(410));$rt_globals.console.info($rt_ustr(L(c)));}
function G6(){var a=this;B.call(a);a.c3=null;a.nR=null;a.iC=null;}
function UI(a,b,c,d){a.c3=b;a.iC=c;a.nR=d;}
function S9(a,b,c){var d;d=A2v(a.c3.b$,b);Fc(d,a.iC.cR);DL(d,Nb(BE(a)));b=new OQ;b.sP=a;b.sO=d;Tn(d,b);b=new OP;b.uV=a;d.wO=b;AFZ(d,c);return d;}
function AGn(a,b){var c,d,e;c=a.BE(b);if(c!==null){d=a.c3;e=a.iC;Md(d,e.cR,e.i3,b,c);}return c===null?0:1;}
function Ze(){var a=this;G6.call(a);a.dO=null;a.oS=null;a.p1=null;}
function AMP(a){var b;a.dO=null;b=null;a.p1=b;a.oS=b;}
function AXK(a,b){var c,d,e,f;if(BW(a.dO.dX,b))return ZX(a,1,C(274));if(BW(a.dO.dV,b))return ZX(a,0,C(275));c=Q(BN,2);d=c.data;b=new BN;e=new XB;e.zO=a;CL(b,e,C(274));d[0]=b;b=new BN;f=new XC;f.r4=a;CL(b,f,C(275));d[1]=b;return C3(c);}
function ZX(a,b,c){var d,e,f,g;d=Q(BN,1);e=d.data;f=new BN;g=new AAo;g.qw=a;g.qv=b;CL(f,g,c);e[0]=f;return C3(d);}
function H7(a,b){var c,d;c=a.c3.b$.e2;d=new ZN;d.ym=a;d.yl=b;Jc(c,d);}
function Vc(){B.call(this);this.AU=null;}
function AUf(a){return AA7(a.AU);}
var ADL=G(Es);
var A8T=null;function Xh(b){var c;c=new K;M(c);return L(EH(c,b));}
function AGt(){A8T=F($rt_floatcls());}
var Gw=G();
var A8U=null;var A8V=null;var A6n=null;var A6m=null;var A6l=null;function AJC(){A8U=DX([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A8V=AII([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A6n=AII([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A6m=new ABG;A6l=new Uc;}
var JE=G();
var A8W=0;var A8X=null;var A8Y=null;function AJ2(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.ri=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nb=0;c.m2=0;return;}if(f)d=e|8388608;else{d=e<<1;while(IK(Dg(Bp(d),Bp(8388608)),FJ)){d=d<<1;f=f+(-1)|0;}}g=AJ9(A8Y,f);if(g<0)g= -g|0;h=A8Y.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JB(d,A8X.data[e],i);if(j<A8W){while($rt_ucmp(j,A8W)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A8Y.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JB(d,
A8X.data[e],i);}e=d<<1;d=e+1|0;h=A8X.data;f=g+1|0;k=h[f];l=i-1|0;m=JB(d,k,l);n=JB(e-1|0,A8X.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DG(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.nb=d;c.m2=g-50|0;}
function JB(b,c,d){return GS(Gc(Ci(Dg(Bp(b),D(4294967295, 0)),Dg(Bp(c),D(4294967295, 0))),32-d|0));}
function AJa(){A8W=$rt_udiv((-1),10);A8X=DX([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A8Y=DX([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Uc(){var a=this;B.call(a);a.nb=0;a.m2=0;a.ri=0;}
function Ot(){var a=this;B.call(a);a.EB=null;a.wH=0.0;a.CY=0.0;a.gu=null;a.jp=null;a.n1=null;a.gb=0;}
function AK3(a,b){var c;if(b!==null){a.jp=b;return a;}c=new BU;Bm(c,C(411));N(c);}
function AGj(a,b){var c;if(b!==null){a.n1=b;return a;}c=new BU;Bm(c,C(411));N(c);}
function Y6(a,b,c,d){var e,f,g,$$je;e=a.gb;if(!(e==2&&!d)&&e!=3){a.gb=d?2:1;while(true){try{f=AHn(a,b,c);}catch($$e){$$je=EX($$e);if($$je instanceof Bu){g=$$je;N(AWy(g));}else{throw $$e;}}if(If(f))return f;if(I3(f)){if(d&&D9(b)){g=a.jp;Hn();if(g===A6Q)return Eu(Ch(b));if(Ch(c)<=J(a.gu))return A6T;Fx(b,b.Z+Ch(b)|0);if(a.jp===A6R)Nl(c,a.gu);}return f;}if(RB(f)){g=a.jp;Hn();if(g===A6Q)return f;if(g===A6R){if(Ch(c)<J(a.gu))return A6T;Nl(c,a.gu);}Fx(b,b.Z+K$(f)|0);}else if(Mk(f)){g=a.n1;Hn();if(g===A6Q)break;if(g
===A6R){if(Ch(c)<J(a.gu))return A6T;Nl(c,a.gu);}Fx(b,b.Z+K$(f)|0);}}return f;}b=new C$;Y(b);N(b);}
function AIK(a,b){var c,d,e,f;c=a.gb;if(c&&c!=3){b=new C$;Y(b);N(b);}if(!Ch(b))return AHQ(0);if(a.gb)a.gb=0;d=AHQ(Bd(8,Ch(b)*a.wH|0));while(true){e=Y6(a,b,d,0);if(I3(e))break;if(If(e))d=AAv(a,d);if(!NK(e))continue;Ub(e);}b=Y6(a,b,d,1);if(NK(b))Ub(b);while(true){f=a.gb;if(f!=3&&f!=2)break;a.gb=3;if(I3(A6U)){d.en=d.Z;d.Z=0;d.jN=(-1);return d;}d=AAv(a,d);}b=new C$;Y(b);N(b);}
function AAv(a,b){var c,d,e;c=b.iE;d=KL(c,Bd(8,c.data.length*2|0));e=AJM(d,0,d.data.length);Fx(e,b.Z);return e;}
function ACP(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DR(a,b){var c=new ACP();AJS(c,a,b);return c;}
function AJS(a,b,c){a.bq=b;a.bv=c;}
function ALQ(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function ASf(a){return AGD(I(B,[CX(a.bq),CX(a.bv)]));}
function AZ8(a,b){var c;b=b;c=BK(a.bq,b.bq);if(!c)c=BK(a.bv,b.bv);return c;}
var AFK=G(C1);
function UM(){B.call(this);this.Dw=null;}
function AMK(a){Bk(Bt(),C(412));}
var AD6=G(0);
var A8j=null;function AG8(){A8j=new Xg;}
function HZ(){CB.call(this);this.cl=null;}
function MC(a,b){var c;if(a.cl===null){a.cl=b;return;}c=new Eg;Y(c);N(c);}
function AZl(a){var b,c,d;b=a.cl.data;c=b.length;d=0;while(d<c){b[d].b4();d=d+1|0;}}
function AQN(a,b){var c,d,e;c=a.cl.data;d=c.length;e=0;while(e<d){c[e].dw(b);e=e+1|0;}}
function AVi(a,b){var c,d,e,f;c=0;d=a.cl.data;e=d.length;f=0;while(f<e){c=c|d[f].cj(b);f=f+1|0;}return c;}
function ANz(a,b,c,d){JP(a,b,c,d);a.BT();}
function A1R(a,b,c,d){var e,f,g,h,i;e=0;f=a.cl.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.cy(b,c,d);h=h+1|0;}return e;}
function ATe(a,b,c){var d,e,f,g,h;d=a.cl.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(BW(g,b.j)){h=g.cn(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A11(a,b,c){var d,e,f,g,h;d=0;e=a.cl.data;f=e.length;g=0;while(g<f){h=e[g];if(BW(h,b.j))d=d|h.dB(b,c);g=g+1|0;}return d;}
function A2n(a,b){var c,d,e,f,g;c=0;d=a.cl.data;e=d.length;f=0;while(f<e){g=d[f];if(BW(g,b.j))c=c|g.bU(b);f=f+1|0;}return c;}
function AOa(a,b,c,d){var e,f,g,h,i;e=0;f=a.cl.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.dy(b,c,d);h=h+1|0;}return e;}
function A2a(a){var b,c,d;b=a.cl.data;c=b.length;d=0;while(d<c){b[d].ke();d=d+1|0;}}
function QY(){var a=this;HZ.call(a);a.sc=null;a.Av=null;a.gp=null;a.oK=null;a.kQ=null;a.gr=null;a.fY=null;}
function APr(a){var b,c,d,e;b=a.k.a/4|0;c=b+Dz(a,1.0)|0;d=AJZ(a.i);e=BF(b,a.k.b);a.cl.data[0].dz(d,e,a.bS);d.a=a.i.a+b|0;e.a=c-b|0;a.cl.data[1].dz(d,e,a.bS);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.cl.data[2].dz(d,e,a.bS);}
function AXF(a){var b,c;b=AHe(a.fY);c=AHS(a.kQ);return BF((b.a+a.oK.k.a|0)+c.a|0,b.b);}
function Zq(){B.call(this);this.Ak=null;}
function ATg(a){Za(a.Ak);}
function Zp(){B.call(this);this.r6=null;}
function AYD(a){var b,c,d,e,f;b=a.r6;c=new M$;d=b.kd;e=b.M;f=new Wg;f.Ca=b;Xd(c,d,e,f);}
function Y4(){B.call(this);this.BP=null;}
function AVy(a,b){var c,d;c=a.BP;d=c.ee+1|0;c.ee=d;c=b.iS;b=new K;M(b);H(H(U(b,d),C(413)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var Ru=G();
function AZi(a,b){}
function Fp(){var a=this;CB.call(a);a.cJ=null;a.U=null;a.fg=null;}
function A8Z(){var a=new Fp();LP(a);return a;}
function LP(a){E3(a);a.cJ=new Bg;a.U=new Bg;}
function AXr(a,b){a.fg=b;}
function Te(a,b,c){X(a.cJ,b,c);}
function Ts(a){var b;b=a.fg;if(b!==null)ACw(b);}
function AFJ(a){var b;b=a.U;b.a=WX(a,b.a);b=a.U;b.b=ACV(a,b.b);}
function AGS(a,b){var c,d;c=a.U.a;d=WX(a,b);a.U.a=d;return c==d?0:1;}
function ALo(a,b){var c,d;c=a.U.b;d=ACV(a,b);a.U.b=d;return c==d?0:1;}
function ACV(a,b){return Bd(0,Be(b,a.cJ.b-a.k.b|0));}
function WX(a,b){return Bd(0,Be(b,a.cJ.a-a.k.a|0));}
function Ro(){var a=this;Fp.call(a);a.bW=null;a.d8=null;a.ie=null;a.AJ=null;a.em=null;a.b6=null;a.e4=null;a.fP=null;a.dR=0;a.fM=0;a.BS=null;a.d6=0;a.eQ=0;a.hH=0;a.f9=0;a.f0=0;a.cU=0;a.e5=null;a.kp=null;a.yT=null;a.iB=null;}
function A5z(a,b){var c=new Ro();AK0(c,a,b);return c;}
function AK0(a,b,c){LP(a);a.d8=St();a.ie=new Bg;a.b6=A80;a.e4=Q(J6,0);a.d6=0;a.eQ=0;a.hH=0;a.f9=0;a.f0=0;a.e5=AIs(0);a.iB=JU();a.bW=b;a.kp=c;a.BS=c;Qu(a);}
function Qu(a){a.dR=Cg(2.0,a.bW.cf);}
function VA(a){return a.b6.data.length?0:1;}
function W_(a,b){Tq(a);a.b6=b;}
function Tq(a){X(a.ie,0,0);}
function Wb(a,b,c){a.yT=b;a.AJ=c;a.em=null;a.e5=null;a.fM=0;Tq(a);}
function A16(a){a.fP=BV(a.fP,null);X(a.ie,0,0);Fz(a.iB);a.e5=null;a.b6=A80;a.e4=null;a.d6=0;a.eQ=0;a.hH=0;ABb(a.d8);a.kp=null;}
function AWM(a,b,c){Yu(a);Qu(a);a.em=null;a.e5=null;a.fM=0;}
function AU8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Kl(a.bW);if(VA(a))return;K2(a);Cn(c,a.em);d=Ej(a);e=AIc(c,a.fM);f=Be(H_(a.k.b,d),a.b6.data.length)+30|0;g=a.yT.BH;h=a.e4.data;d=h.length;if(d<f){a:{i=a.f9;j=a.f0;k=a.b6;l=a.e5;m=a.iB;n=Q(J6,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.g1!==c){ACD(l,q,m);o[f]=MQ(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MQ(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MQ(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ACD(l,c,m);h[f]=null;}f=f+1|0;}a.e4=n;Co(a.ie,MP(a.e5));YH(a,a.bW.bH);}a.f9=Be((a.U.b+a.dR|0)/(Ej(a)+a.dR|0)|0,a.b6.data.length-1|0);a.f0=Be((((a.U.b+a.d8.t.b|0)-1|0)+a.dR|0)/(Ej(a)+a.dR|0)|0,a.b6.data.length-1|0);if(!a.e4.data.length)return;AH9(a,e);ACs(a,b);q=g.AA;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.d8.u;i=c.a;j=c.b;p=Cu(a.bW,2.0);s=a.bW.d0;t=a.f9;u=i+p|0;while(t<=a.f0){l=X4(a,t);d=Bc(t,Ej(a));v
=t+1|0;w=d+Bc(v,a.dR)|0;x=u+a.d6|0;y=x+a.eQ|0;z=a.cU!=t?0:1;m=!z?q:g.sR;ba=!z?g.uc:g.li;bb=!z?g.q_:g.li;bc=!z?g.rL:g.li;bd=(j+w|0)-a.U.b|0;DJ(b,u,bd,l.jy,l.tv,a.fP,ba,m,a.bW.cz);DJ(b,x,bd,l.j2,l.lf,a.fP,bb,m,a.bW.cz);DJ(b,y,bd,l.jz,l.kP,a.fP,bc,m,a.bW.cz);d=l.jy.a;be=u+d|0;X(s,Bd(0,a.d6-d|0),l.jy.b);Bs(b,be,bd,s,m);d=u+a.d6|0;f=l.j2.a;bf=d+f|0;X(s,Bd(0,a.eQ-f|0),l.j2.b);Bs(b,bf,bd,s,m);d=l.jz.a;bg=y+d|0;X(s,Bd(0,(((a.d8.t.a-d|0)-a.eQ|0)-a.d6|0)-p|0),l.jz.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;X(s,p,Ej(a)+a.dR
|0);Bs(b,bh,bd,s,q);t=v;}Gb(b);}
function AH9(a,b){var c,d,e,f,g,h;c=0;d=a.f9;while(d<=a.f0){e=X4(a,d);if(!(e!==null&&e.g1===a.b6.data[d])){f=a.e4.data;g=a.b6;e=a.e5;h=a.iB;c=d%f.length|0;if(f[c]!==null)ACD(e,f[c],h);f[c]=MQ(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Co(a.ie,MP(a.e5));YH(a,a.bW.bH);}}
function YH(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ie;c=D5(b,c.a+150|0,c.b,a.bW.cz);Cn(c,a.em);d=a.em;e=d.ep;f=e-(e+d.eI)/16.0;g=a.e4.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.g1.lx;k=d.lf;B0(c,j,k.bn+a.fM,f+k.bs);j=d.g1.lP;d=d.kP;B0(c,j,d.bn+a.fM,f+d.bs);}i=i+1|0;}a:{d=a.iB;if(d.c8>0){h=d.c0;i=0;b:while(true){g=d.b8.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cW;l=j.cT;k=k;l=l.mc;B0(c,k,l.bn+a.fM,f+l.bs);j=j.cY;if(h!=d.c0)break b;}i=i+1|0;}b=new Ib;Y(b);N(b);}}if(a.fP===null)a.fP=CV(b);CM(a.fP,
c);Ez(c);}
function X4(a,b){var c;c=a.e4.data;return c[b%c.length|0];}
function AZ6(a,b){Co(a.d8.t,b);}
function A1a(a,b){Co(a.d8.u,b);}
function Yu(a){var b,c,d,e,f,g,h,i,j;b=Kl(a.bW);if(VA(a))return;K2(a);Cn(b,a.em);c=AIc(b,a.fM);d=a.b6.data;e=d.length;f=0;while(f<e){g=d[f];h=Nz(c,g.hM);i=Nz(c,g.lx);j=Nz(c,g.lP);a.d6=Bd(a.d6,h);a.eQ=Bd(a.eQ,i);a.hH=Bd(a.hH,j);f=f+1|0;}}
function AP4(a,b){var c;c=AAi(a,b.j);if(c>=0)a.cU=c;return Fb(a.d8,a.i)&&GI(a.bW.cV)?1:0;}
function AOh(a,b,c){if(!Fb(a.d8,b.j)&&!Ld(a.d8)){b=a.BS;if(b!==null)b.f();}return null;}
function AR$(a,b,c,d){var e;if(d==1){e=AAi(a,b.j);if(e>=0)UD(a,a.b6.data[e]);}return 1;}
function UD(a,b){a.kp.f();b.t3.f();}
function AAi(a,b){var c,d,e;if(!a.e4.data.length)return (-1);c=Ej(a);d=(b.b-a.i.b|0)+a.U.b|0;e=a.dR;e=(d+e|0)/(c+e|0)|0;if(e<a.b6.data.length)return e;return (-1);}
function Ej(a){return EA(a.em);}
function K2(a){var b;if(a.em===null){b=Fk(a.bW,a.AJ);a.em=b;a.e5=AIs(EA(b));a.fM=CY(a.em.p6);}}
function A1n(a,b){var c,d,e;a:{switch(b.bm){case 13:UD(a,a.b6.data[a.cU]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cU=a.f9;b=a.fg;c=a.U;Ji(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cU=a.f0;b=a.fg;c=a.U;Ji(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cU=a.b6.data.length-1|0;break a;case 36:case 37:a.cU=0;break a;case 38:d=a.cU;e=a.b6.data.length;a.cU=((d+e|0)
-1|0)%e|0;break a;case 40:a.cU=(a.cU+1|0)%a.b6.data.length|0;break a;default:break a;}a.kp.f();return 0;}e=a.cU;if(e<=a.f9)Ji(a.fg,a.U.a,Bc(e,Ej(a))+Bc(a.cU,a.dR)|0);else if(e>=a.f0)Ji(a.fg,a.U.a,(Bc(e+1|0,Ej(a))+Bc(a.cU+2|0,a.dR)|0)-a.k.b|0);return 0;}
var U$=G();
function ATV(a){}
function AFg(){var a=this;CB.call(a);a.or=null;a.xO=null;a.AC=null;a.bP=null;a.dp=null;a.dD=null;a.uj=null;a.rg=null;a.vG=0.0;a.pv=null;a.oU=null;}
function GH(a,b){var c=new AFg();AUR(c,a,b);return c;}
function AUR(a,b,c){var d;c=c.cV;E3(a);d=new P0;d.yS=a;a.xO=d;d=new PZ;d.zC=a;a.AC=d;a.vG=10.0;a.bP=b;a.or=c;b.fg=a;}
function ASR(a){var b;b=a.bP;b.fg=null;a.bP=BV(b,null);}
function Jh(a,b,c){var d;a.oU=c;a.pv=b;d=a.dp;if(d!==null)H8(d,b,c);b=a.dD;if(b!==null)H8(b,a.pv,a.oU);}
function AOH(a,b,c,d){JP(a,b,c,d);JP(a.bP,b,c,d);if(d!==0.0)ACw(a);}
function Ji(a,b,c){Lb(a,b);LG(a,c);}
function ACw(a){var b;AFJ(a.bP);b=FP(a)*3|0;if(Zz(a,b))TZ(a);else a.dD=null;if(AD3(a,b))WP(a);else a.dp=null;}
function AD3(a,b){var c;c=a.k.b;return c>b&&a.bP.cJ.b>c?1:0;}
function Zz(a,b){var c;c=a.k.a;return c>b&&a.bP.cJ.a>c?1:0;}
function TZ(a){var b,c,d,e,f,g;b=a.dD;if(b===null)b=Jb();a.dD=b;Pe(a,b);c=a.dD;b=a.bP;d=b.U.a;e=a.i;f=e.a;g=a.k;Rx(c,d,f,g.a,b.cJ.a,e.b+g.b|0,FP(a));}
function WP(a){var b,c,d,e,f,g;b=a.dp;if(b===null)b=Jb();a.dp=b;Pe(a,b);c=a.dp;b=a.bP;d=b.U.b;e=a.i;f=e.b;g=a.k;Kp(c,d,f,g.b,b.cJ.b,e.a+g.a|0,FP(a));}
function FP(a){return Dz(a,a.vG);}
function Pe(a,b){H8(b,a.pv,a.oU);}
function A0z(a,b){var c;a.bP.dw(b);if(!(a.dp===null&&a.dD===null)){B$(b,1);c=a.dp;if(c!==null)GW(c,b);c=a.dD;if(c!==null)GW(c,b);c=a.dp;if(c!==null)G2(c,b);c=a.dD;if(c!==null)G2(c,b);B$(b,0);}}
function Tz(a,b){var c,d;a:{b:{c=a.dp;if(!(c!==null&&IN(c,b))){c=a.dD;if(c===null)break b;if(!IN(c,b))break b;}d=1;break a;}d=0;}return d;}
function ATc(a,b,c,d){return !Tz(a,b.j)&&!a.bP.cy(b,c,d)?0:1;}
function Lb(a,b){var c;b=AGS(a.bP,b);if(Zz(a,FP(a)*3|0))TZ(a);if(b){c=a.uj;if(c!==null)c.f();}}
function LG(a,b){var c;if(ACX(a,b)){c=a.rg;if(c!==null)c.f();}}
function ACX(a,b){var c;c=ALo(a.bP,b);if(AD3(a,FP(a)*3|0))WP(a);return c;}
function AST(a,b,c){var d,e;d=a.dp;if(d!==null){e=F5(d,b.j,a.xO,1);if(e!==null)return e;}d=a.dD;if(d!==null){e=F5(d,b.j,a.AC,0);if(e!==null)return e;}return a.bP.cn(b,c);}
function AQ$(a,b,c){return Tz(a,b.j)?1:0;}
function AQW(a,b){var c,d,e;c=a.dp;d=c!==null&&Ga(c,b.j,a.or)?1:0;c=a.dD;e=c!==null&&Ga(c,b.j,a.or)?1:0;return !d&&!e&&!a.bP.bU(b)?0:1;}
function AW6(a,b,c,d){var e,f;if(!BW(a,b.j))return 0;e=Cg(d*0.5,a.bS);f=Cg(c*0.5,a.bS);if(b.bL){f=f+e|0;e=0;}if(a.dp!==null&&e)LG(a,a.bP.U.b+e|0);if(a.dD!==null&&f)Lb(a,a.bP.U.a+f|0);return 1;}
function AHS(a){var b,c;b=FP(a);c=a.bP.hW();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var ADE=G();
function ANA(a,b){}
function ADG(){var a=this;B.call(a);a.uw=null;a.ux=null;}
function ALR(a,b){var c,d,e;c=a.uw;d=a.ux;b=Cl(b);e=new K;M(e);H(H(H(e,d),C(29)),b);DL(c,L(e));}
function Qc(){var a=this;Fp.call(a);a.mj=null;a.pL=null;a.ye=null;a.r9=0.0;}
function AT3(a){var b;b=Cg(20.0,a.bS);return BF(b,b);}
function A0a(a,b){Te(a,b.a*3|0,b.b*5|0);a.ye.g(b);}
function AUh(a,b){var c,d,e,f,g,h,i,j,k,l,m;AK6(a,b);ACs(a,b);c=Cg(30.0,a.bS);d=a.U;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.pL;d.b=c;d.a=c;a.mj.bC=1.0;while(h<=e){g=a.i.b-a.U.b|0;j=f;while(j<=i){k=a.i.a-a.U.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AKU(l);m=m+1|0;}Vk(AKv(l),0.75,a.r9,a.mj);Bs(b,k+j|0,g+h|0,a.pL,a.mj);j=j+c|0;}h=h+c|0;}Gb(b);}
function AQu(a,b,c){return A7n;}
function ADF(){var a=this;B.call(a);a.qN=null;a.qO=null;}
function AS7(a){var b,c;b=a.qN;c=a.qO;Iu(b.M,c);JZ(c);}
function Up(){var a=this;CB.call(a);a.f_=null;a.hE=null;a.jK=null;a.ez=null;a.kO=0.0;a.eJ=0;a.im=0;a.dZ=null;a.mK=null;}
function VC(a){var b;if(Oh(a))return 0;ACn(a);b=Cu(a.f_,a.kO);return EA(a.ez)+(b*2|0)|0;}
function RU(a){var b;b=a.k;return b.a&&b.b?0:1;}
function Oh(a){return a.hE!==null&&a.jK!==null?0:1;}
function QC(a,b){a.k.b=b;}
function QH(a,b,c,d,e){var f,g;f=a.f_.d0;X(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ACn(a){if(a.ez===null)a.ez=Fk(a.f_,a.hE);}
function Ik(){HZ.call(this);this.eE=null;}
function P1(a,b){E3(a);a.eE=AV5(b);}
function AP1(a){var b,c,d,e;b=Cg(20.0,a.bS);c=(a.k.a-b|0)/2|0;d=AJZ(a.i);e=BF(c,a.k.b);a.cl.data[0].dz(d,e,a.bS);d.a=(a.i.a+a.k.a|0)-c|0;a.cl.data[1].dz(d,e,a.bS);e.a=(a.k.a-c|0)-c|0;d.a=a.i.a+c|0;a.cl.data[2].dz(d,e,a.bS);}
function AFQ(){var a=this;Ik.call(a);a.dX=null;a.dV=null;a.kF=null;a.lT=null;a.vq=null;}
function A1l(a){var b=new AFQ();AZt(b,a);return b;}
function AZt(a,b){var c,d;P1(a,b);a.dX=TS(b);a.dV=TS(b);a.kF=GH(a.dX,b);a.lT=GH(a.dV,b);c=AL5(a.kF,a.dX);d=AL5(a.lT,a.dV);Oi(a.eE,c,d);a.vq=AHs(c,d);MC(a,I(CB,[a.kF,a.lT,a.eE]));}
function AC0(a,b){a.eE.io=b;J_(a.dX,b);JH(a.dX,a.kF);J_(a.dV,b);JH(a.dV,a.lT);}
function AA0(a,b){a.vq.gY=b;a.eE.es=b;}
function Hp(){var a=this;B.call(a);a.et=null;a.jf=null;a.oB=null;a.hj=null;a.jU=0;a.hB=0;a.hz=0;}
function A81(a,b){var c=new Hp();S3(c,a,b);return c;}
function S3(a,b,c){a.hj=XP(b);a.jU=c;a.hB=0;}
function GC(a){return (JW(a.hj,0)).v;}
function AEj(a){a.hB=60084;}
function I_(a){return a.hB!=60084?0:1;}
function AFf(a){a.hB=60086;}
function AFp(a){a.hz=60035;}
function Lz(a){a.hz=60027;}
function QQ(a){a.hz=60137;}
function IV(a){a.hz=60151;}
function Dh(){Hp.call(this);this.fb=null;}
var A82=null;var A83=null;function AKt(a,b){var c=new Dh();J9(c,a,b);return c;}
function J9(a,b,c){S3(a,b,c);a.fb=A82;}
function A2h(a){return GC(a);}
function AK2(a){var b,c,d;b=Q(Hp,ADY(a));c=b.data;if(Q4(a,b,0)==c.length)return b;d=new Bu;Y(d);N(d);}
function Jk(a){return a.fb.data.length;}
function ADY(a){var b,c,d,e;b=1;if(I_(a)){c=a.fb.data;d=c.length;e=0;while(e<d){b=b+ADY(c[e])|0;e=e+1|0;}}return b;}
function ON(a){var b,c,d,e;b=1;c=a.fb.data;d=c.length;e=0;while(e<d){b=b+ON(c[e])|0;e=e+1|0;}return b;}
function Q4(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(I_(a)){d=a.fb.data;c=d.length;f=0;while(f<c){e=Q4(d[f],b,e);f=f+1|0;}}return e;}
function NZ(a){AEj(a);IV(a);}
function IH(a){AFf(a);AFp(a);}
function Ur(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Ou(GC(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AGm(){A82=Q(Dh,0);A83=new AD_;}
function SH(){B.call(this);this.sZ=null;}
function AV0(a){H7(a.sZ,1);}
function SG(){B.call(this);this.ve=null;}
function AUE(a){H7(a.ve,0);}
var Z9=G(Es);
var A84=null;function Df(b,c){return Long_udiv(b, c);}
function AIn(b,c){return Long_urem(b, c);}
function DG(b,c){return Long_ucompare(b, c);}
function AJh(){A84=F($rt_longcls());}
function AB9(){B.call(this);this.vO=null;}
function A2J(a,b){DI(a.vO,b);}
function AD4(){B.call(this);this.Bt=null;}
function AYo(a){Y9(a.Bt);}
function Xw(){B.call(this);this.yQ=null;}
function AVE(a){var b;b=a.yQ;EI(b.M,YR(b));}
function U2(){B.call(this);this.vz=null;}
function A0U(a){RX(a.vz);}
function ABy(){B.call(this);this.ob=null;}
var A80=null;function APg(){var a=new ABy();AE2(a);return a;}
function AE2(a){a.ob=BL();}
function Wh(a,b,c,d,e){var f;f=new Le;f.t3=e;f.lx=c;f.lP=d;f.hM=b;BB(a.ob,f);}
function AC_(a){return Gp(a.ob,A80);}
function AAC(b){return b===null?C(21):ACq(b);}
function AK1(){A80=Q(Le,0);}
function J6(){var a=this;B.call(a);a.tv=null;a.lf=null;a.kP=null;a.jy=null;a.j2=null;a.jz=null;a.g1=null;}
function MQ(b,c,d,e){var f,g,h;f=new J6;f.jy=new Bg;f.j2=new Bg;f.jz=new Bg;f.g1=b;g=Cq(e,b.hM);if(g!==null)g.iQ=g.iQ+1|0;else{g=new ACJ;h=Kv(c,b.hM,d);g.iQ=1;g.mc=h;Ep(e,b.hM,g);}e=g.mc;f.tv=e;X(f.jy,e.bf|0,e.bC|0);e=Kv(c,b.lx,d);f.lf=e;X(f.j2,e.bf|0,e.bC|0);b=Kv(c,b.lP,d);f.kP=b;X(f.jz,b.bf|0,b.bC|0);return f;}
function ACD(b,c,d){var e,f,g;e=c.g1.hM;f=Cq(d,e);g=f.iQ-1|0;f.iQ=g;if(!g){Lx(d,e);I1(b,f.mc);}I1(b,c.lf);I1(b,c.kP);}
var OC=G(0);
var A72=null;var A73=null;function AGa(){A72=EY(40,40,40,200);A73=EY(43,43,43,128);}
function Lq(){var a=this;Fp.call(a);a.gl=null;a.cs=null;a.e3=null;a.hY=null;a.gv=null;a.lZ=null;a.mM=null;a.AO=0;a.rc=0;a.oz=null;a.gg=null;a.gh=null;a.g_=null;a.hP=null;a.hU=null;a.jn=null;a.gG=null;a.rO=0;a.kb=0;}
function ARE(a){Ov(a.hY);Ym(a.cs);OW(a);}
function OW(a){a.gg=BV(a.gg,null);a.gh=BV(a.gh,null);a.g_=BV(a.g_,null);a.hP=BV(a.hP,null);a.hU=BV(a.hU,null);a.jn=BV(a.jn,null);a.gG=BV(a.gG,null);}
function W6(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.g_;break a;case 60084:c=a.gh;break a;case 60086:c=a.gg;break a;case 60136:c=a.gG;break a;case 60137:c=a.jn;break a;case 60151:c=a.hP;break a;default:c=null;break a;}c=a.hU;}return c;}
function J_(a,b){var c,d;a.gv=b;c=BO(a.lZ,b.pH);d=BO(a.mM,b.oT);if(!(c&&d)){a.lZ=b.pH;a.mM=b.oT;if(a.bS!==0.0)SS(a);}}
function AMt(a,b,c){PY(a.cs,c);if(a.lZ!==null)SS(a);}
function SS(a){var b,c,d,e,f;S0(a.hY);b=a.cs;c=a.lZ;d=a.bS;e=a.gl.bH;f=b.g9;b.cX=AI_(c.ia,c.gZ*d,c.j8,c.kn,f,e);So(a.cs,1.25,a.gl.bH);OW(a);b=Fk(a.gl,a.mM);a.gg=BV(a.gg,FD(a,60086,b));a.gh=BV(a.gh,FD(a,60084,b));a.g_=BV(a.g_,FD(a,60035,b));a.hP=BV(a.hP,FD(a,60151,b));a.hU=BV(a.hU,FD(a,60027,b));a.jn=BV(a.jn,FD(a,60137,b));a.gG=BV(a.gG,FD(a,60136,b));a.rO=Bd(Bd(Bd(Bd(BQ(a.g_),BQ(a.hP)),BQ(a.hU)),BQ(a.gG)),BQ(a.gG));a.kb=Bd(BQ(a.gh),BQ(a.gg));Po(a);}
function Po(a){Te(a,a.cJ.a,Bc(a.e3.fA.data.length,a.cs.d9));Ts(a);}
function AYW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;c=a.gv.br.ei;d=a.i;Bs(b,d.a,d.b,a.k,c);BC(a.cs.cX);e=a.cs.d9;f=a.e3.fA.data.length;if(!f)return;g=Be(f,H_(a.k.b,e)+7|0);h=a.hY;if(h.data.length<g)a.hY=Zl(g,h,a.cs,a.AO,a.rc,a.e3);NF(b,a.i,a.k);i=a.U.b;j=f-1|0;k=AGi(i,e,j);i=AGi((a.U.b+a.k.b|0)-1|0,e,j);a.AO=k;a.rc=i;l=a.k.a;m=Dz(a,4.0);n=Dz(a,1.0)+a.kb|0;o=Dz(a,3.0);p=Dz(a,5.0);q=Dz(a,1.0);r=0;s=a.i.a-a.U.a|0;t=Dz(a,1.0);d=a.fg;u=t+(d===null?0:FP(d))|0;while(k<=i){v=a.e3.fA.data[k];h
=a.hY.data;t=k%h.length|0;w=h[t];XA(w,v.hj,b,e,l,0,k,t);x=Bc(e,k)-a.U.b|0;y=null;z=m+Bc(n,v.jU)|0;ba=a.oz!==v?0:1;if(ba){X(a.gl.d0,a.k.a,e);d=a.i;Bs(b,d.a,d.b+x|0,a.gl.d0,a.gv.br.gs);}bb=W6(a,v.hB);bc=W6(a,v.hz);if(bb!==null){d=a.gv;bd=d.jP.data[0];AEb(a,b,bb,s+z|0,(a.i.b+x|0)-q|0,!ba?c:d.br.gs,bd.g7);}if(bc!==null){d=a.gv;bd=d.jP.data[0];AEb(a,b,bc,((s+z|0)+a.kb|0)+o|0,(a.i.b+x|0)-q|0,!ba?c:d.br.gs,bd.g7);}be=FG(v.hj);bf=(((z+a.kb|0)+o|0)+a.rO|0)+p|0;r=Bd(r,(bf+be|0)+u|0);Qg(w,a.i.b+x|0,s+bf|0,b,l,e,0,a.gv,
null,null,null,ba,0,y);k=k+1|0;}d=a.cJ;if(d.a!=r){d.a=r;Ts(a);}Gb(b);}
function AEb(a,b,c,d,e,f,g){Cr(a.cs.ju,0.0,0.0,BQ(c),CO(c));Co(a.cs.ij,c.eT);Hd(a.cs,b,c,d,e,g,f);}
function A1D(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cs.d9;f=((b.j.b-a.i.b|0)+a.U.b|0)/e|0;if(f>=0){g=a.e3.fA.data;if(f<g.length){h=g[f];if(!Wy(a,b,f)){b=h.oB;if(b!==null)b.f();}}}}return 1;}
function ANm(a,b,c){var d,e,f,g;d=a.cs.d9;e=((b.j.b-a.i.b|0)+a.U.b|0)/d|0;if(!c&&e>=0){f=a.e3.fA.data;if(e<f.length){g=f[e];if(Wy(a,b,e)){b=g.jf;if(b!==null)b.f();}else{a.oz=g;b=g.et;if(b!==null)b.f();}}}return A7n;}
function Wy(a,b,c){var d,e,f,g,h,i,j;d=a.e3.fA.data[c];e=Dz(a,4.0);f=Dz(a,1.0);g=Bd(BQ(a.gh),BQ(a.gg));h=e+Bc(f+g|0,d.jU)|0;i=(a.i.a-a.U.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FD(a,b,c){var d,e,f;d=a.gl.bH;e=NH(b);f=a.cs;return ADp(d,e,c,1,f.d9,f.iP);}
function AGi(b,c,d){return Be(b/c|0,d);}
function AJt(){Lq.call(this);this.rq=null;}
function TS(a){var b=new AJt();ATo(b,a);return b;}
function ATo(a,b){LP(a);a.e3=AMC(Q(Hp,0));a.hY=Q(Fs,0);a.gl=b;a.cs=APV(b.cz);}
function EL(a){a.e3=AMC(AK2(a.rq));if(a.bS!==0.0)Po(a);}
function ET(a,b){a.rq=b;EL(a);}
function JH(a,b){var c;c=a.gv.br;Jh(b,c.lI,c.lN);return b;}
function AF8(){var a=this;B.call(a);a.nB=null;a.f2=null;}
function AL5(a,b){var c=new AF8();AM_(c,a,b);return c;}
function AM_(a,b,c){a.nB=b;a.f2=c;}
function AS2(a){return a.f2.U.b/MF(a)|0;}
function A1O(a){var b;b=a.f2;return H_((b.U.b+b.k.b|0)-1|0,MF(a));}
function ATS(a,b){var c;b=Bc(b,MF(a));c=a.f2;return (b+c.i.b|0)-c.U.b|0;}
function APQ(a){return a.f2.i;}
function AVp(a){return a.f2.k;}
function AQn(a,b,c){var d;d=a.nB;d.uj=b;d.rg=c;}
function AZa(a,b){return ACX(a.nB,b);}
function MF(a){return a.f2.cs.d9;}
function ABG(){var a=this;B.call(a);a.nA=FJ;a.mO=0;a.q8=0;}
var Xg=G();
function AT8(a){}
function SI(){var a=this;B.call(a);a.Bb=null;a.A$=null;a.A_=null;}
function APU(a){var b,c,d,e,f;b=a.Bb;c=a.A$;d=a.A_;e=Bt();f=new K;M(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bk(e,L(f));}
function P0(){B.call(this);this.yS=null;}
function AL4(a,b){var c;c=a.yS;LG(c,FW(b,c.bP.cJ.b-c.k.b|0));}
function PZ(){B.call(this);this.zC=null;}
function AMk(a,b){var c;c=a.zC;Lb(c,FW(b,c.bP.cJ.a-c.k.a|0));}
var AD_=G();
function ASw(a,b,c){b=b;c=c;return Ou(GC(b),GC(c));}
function Le(){var a=this;B.call(a);a.t3=null;a.lx=null;a.lP=null;a.hM=null;}
function AK9(){G1.call(this);this.fA=null;}
function AMC(a){var b=new AK9();ANY(b,a);return b;}
function ANY(a,b){a.fA=b;}
function A20(a,b){return a.fA.data[b].hj;}
var C$=G(Bu);
var AKi=G(FA);
function AWy(a){var b=new AKi();AQA(b,a);return b;}
function AQA(a,b){a.kM=1;a.k7=1;a.nr=b;}
function ALd(){var a=this;B.call(a);a.oL=null;a.mX=null;a.eO=null;a.mJ=null;a.by=null;a.pB=null;a.nJ=null;a.fZ=null;a.gR=null;a.jL=null;}
function AUe(a,b){var c=new ALd();AYS(c,a,b);return c;}
function AYS(a,b,c){var d,e,f;a.eO=b;a.mJ=c;a.by=AVY();b=new K;M(b);a.jL=b;a.fZ=JU();b=new SK;d=AKS(16);b.gK=0;b.d5=Q(JC,d);b.xQ=0.75;Uu(b);a.gR=b;b=new UK;c=a.by;e=a.jL;f=a.fZ;b.dC=c;b.mx=e;b.s6=f;a.pB=b;b=new Uq;b.cZ=c;b.ni=e;b.sd=f;a.nJ=b;}
function W7(a){var b,c,d,e,f,g,h;a:{b=Nd(a.eO.fd);c=b.jl;if(c.c8>0){d=c.c0;e=0;b:while(true){f=b.jl.b8.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cW;if(M0(a.fZ,g))Cq(a.fZ,g);else{h=a.fZ;Ep(h,g,CX(h.c8));}c=c.cY;if(d!=b.jl.c0)break b;}e=e+1|0;}b=new Ib;Y(b);N(b);}}b=a.eO.fE;if(b!==null)ZI(a,b);Bq(a.by,a.eO.fd.c8);b=Sw(Nd(a.eO.fd));while(Gi(b)){c=Qk(b);G4(a.by,a.jL.L,J(c));BY(a.jL,c);}b=Sw(Nd(a.eO.fd));while(Gi(b)){c=Qk(b);c=Cq(a.eO.fd,c);Bq(a.by,c.q);c=B7(c);while(B_(c)){g=Ca(c);g=Cq(a.fZ,g);Bq(a.by,
g.bp);}}if(a.eO.fE===null)Bq(a.by,(-1));else{Bq(a.by,a.gR.gK);AAp(a,a.eO.fE);}if(a.mJ===null)Bq(a.by,(-1));else{Bq(a.by,1);AED(a.mJ,a.by,a.gR);}a.oL=Q1(a.by);a.mX=Gt(L(a.jL));}
function ZI(a,b){var c,d,e,f,g,h;if(ACO(a.gR,b))Os(a.gR,b);else{c=a.gR;d=CX(c.gK);if(b===null){e=Y_(c);if(e===null){c.mb=c.mb+1|0;e=ACS(c,null,0,0);f=c.gK+1|0;c.gK=f;if(f>c.pC)W1(c);}}else{g=MH(b);h=g&(c.d5.data.length-1|0);e=Xa(c,b,h,g);if(e===null){c.mb=c.mb+1|0;e=ACS(c,b,h,g);f=c.gK+1|0;c.gK=f;if(f>c.pC)W1(c);}}e.cT=d;}b=b.cL;if(b===null)return;c=new VS;c.sg=a;b.fm(c);}
function AAp(a,b){var c,d,e,f;c=(Os(a.gR,b)).bp;Bq(a.by,c);if(b instanceof NP)Bq(a.by,(-1));else if(!(b instanceof Lg))Bq(a.by,0);else Bq(a.by,1);d=a.pB;Bq(d.dC,b.eZ.c2());e=b.eZ;f=new Wf;f.v8=d;e.fm(f);d=a.nJ;Bq(d.cZ,b.fF.c2());e=b.fF;f=new T8;f.uH=d;e.fm(f);d=b.lq;Bq(a.by,d.c2());e=new UY;e.AZ=a;d.fm(e);d=b.hQ;Bq(a.by,d.c2());d=d.b9();while(d.cD()){e=d.b_();Pl(a.pB,e.ls);Hf(a.nJ,e.kU);Bq(a.by,e.rT);}d=b.uD;if(d===null)Bq(a.by,(-1));else Bq(a.by,(Cq(a.fZ,d)).bp);b=b.cL;Bq(a.by,b.c2());d=new Qh;d.qF=a;b.fm(d);}
function OV(){B.call(this);this.Aw=null;}
function AUC(a,b){var c,d,e,f,g,h,i,j;c=a.Aw;if(c.fQ){d=E2(c);e=new K;M(e);H(H(e,d),C(414));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CQ(b[0]);g=EQ(b[1]);h=(CQ(b[2])).data[0];if(c.h.cq==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=EQ(b[4]);}b=Ea(c);if(!Bj(b,C(203))&&!Bj(b,C(403))?0:1)N_(c.h,f,g);else{Wp(c.h,f,g,i,j);Fz(c.h.dF);Fz(c.h.dP);Nh(c.h);KI(c.h);Oo(c);}}}
function ACI(){B.call(this);this.sn=null;}
function AY7(a,b){var c,d,e,f;c=a.sn;if(c.fe!=3){b=b.data;d=CQ(b[0]);e=EQ(b[1]);Wp(c.h,d,e,null,null);if(c.fQ){b=E2(c);f=JO(E4(),c.Aq);c=new K;M(c);H(HL(H(H(c,b),C(415)),f),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}
var Ok=G(BH);
function Sj(){var a=this;B.call(a);a.v2=null;a.v3=null;a.v1=0;}
function AWU(a,b){var c,d,e;c=a.v2;d=a.v3;e=a.v1;d.g(U_(c,(b.j.a+e|0)-c.e9.a|0));}
function Si(){var a=this;B.call(a);a.rR=null;a.rP=null;a.rQ=0;}
function A15(a,b){var c,d,e;c=a.rR;d=a.rP;e=a.rQ;d.g(QJ(c,(b.j.b+e|0)-c.e9.b|0));}
var Fh=G(0);
function Xb(){var a=this;B.call(a);a.jY=0;a.qc=0;a.lE=0;a.hV=0;a.jk=null;}
function B_(a){return a.jY>=a.lE?0:1;}
function Ca(a){var b,c;Qq(a);b=a.jY;a.hV=b;c=a.jk;a.jY=b+1|0;return c.kG(b);}
function Zw(a){var b,c,d;if(a.hV<0){b=new C$;Y(b);N(b);}Qq(a);a.jk.qd(a.hV);a.qc=a.jk.b2;c=a.hV;d=a.jY;if(c<d)a.jY=d-1|0;a.lE=a.lE-1|0;a.hV=(-1);}
function Qq(a){var b;if(a.qc>=a.jk.b2)return;b=new Ib;Y(b);N(b);}
function Lk(){var a=this;Ot.call(a);a.xw=null;a.z7=null;}
function AHn(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.xw;e=0;f=0;g=a.z7;a:{b:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ch(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BH;c=new K;M(c);U(H(U(H(c,C(416)),l),C(100)),h);Bm(b,L(c));N(b);}if(Ch(b)<m){b=new Og;Y(b);N(b);}if(m<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bm(b,L(c));N(b);}n=b.Z;h=n+b.nl|0;e=0;while(e<m){o=k+1|0;i=b.pP.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D9(c)){p=!D9(b)&&e>=f?A6U:A6T;break a;}i=g.data;n=Ch(c);o=i.length;n=Be(n,o);q=new ACd;q.ty=b;q.AV=c;p=ALc(a,d,e,f,g,0,n,q);e=q.wa;if(p===null&&0==q.mQ)p=A6U;k=q.mQ;h=0;if(c.qj){b=new Ku;Y(b);N(b);}if(Ch(c)<k)break;if(h>o){b=new BH;c=new K;M(c);BM(U(H(U(H(c,C(103)),h),C(97)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BH;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bm(b,L(c));N(b);}if(k<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bm(b,L(c));N(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;AAl(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new JJ;Y(b);N(b);}b=new BH;c=new K;M(c);BM(U(H(U(H(c,C(103)),k),C(97)),h),41);Bm(b,L(c));N(b);}Fx(b,b.Z-(f-e|0)|0);return p;}
var Ta=G(Lk);
function ALc(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NA(h,2))break a;i=A6U;break a;}c=k+1|0;n=j[k];if(!Gz(a,n)){c=c+(-2)|0;i=Eu(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NA(h,3))break a;i=A6U;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gz(a,n))break b;if(!Gz(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Oz(p)){c=k+(-3)|0;i=Eu(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eu(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NA(h,4))break a;i=A6U;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ch(h.AV)<2?0:1)break a;i=A6T;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gz(a,n))break c;if(!Gz(a,o))break c;if(!Gz(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JT(r);m=c+1|0;j[c]=Je(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eu(1);break a;}c=k+(-3)|0;i
=Eu(1);}h.wa=c;h.mQ=f;return i;}
function Gz(a,b){return (b&192)!=128?0:1;}
function Yl(){var a=this;B.call(a);a.Dg=null;a.Dd=null;a.De=null;}
function VI(){B.call(this);this.qR=null;}
function ATB(a,b){var c,d;c=a.qR;d=c.ee+1|0;c.ee=d;c=new K;M(c);H(H(U(c,d),C(417)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function Pb(){B.call(this);this.uU=null;}
function ASb(a){return a.uU.f$();}
function Pa(){B.call(this);this.t9=null;}
function AWG(a){return a.t9.f$();}
function AAw(){B.call(this);this.z5=null;}
function AZL(a){return a.z5.f$();}
var XI=G();
function AUL(a){return FQ(1);}
function AAe(){B.call(this);this.tk=null;}
function A2p(a,b){a.tk.g(H4(b));}
var AFO=G();
function ACG(){B.call(this);this.vH=null;}
function AOv(a,b){a.vH.f();}
var AHH=G();
var AGM=G();
function W$(){B.call(this);this.uY=null;}
function ANj(a,b){var c,d,e,f;c=a.uY;d=Cl(b);e=new K;M(e);H(H(e,C(418)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new ABM;d.C0=c;d.te=b;e=new ABO;e.Fi=c;c=AKY(e);e=new ACv;e.xq=d;d=b.ga;if(d!==null)d.arrayBuffer().then(Bv(e,"f"),Bv(c,"f"));else{b=b.il.getFile();f=new ACx;f.AL=e;f.AM=c;b.then(Bv(f,"f"),Bv(c,"f"));}}
function W9(){B.call(this);this.xo=null;}
function ASI(a,b){var c,d,e;c=a.xo;d=Cl(b);e=new K;M(e);H(H(e,C(419)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new PK;d.Cl=c;Nn(b,d);}
function RW(){B.call(this);this.AY=null;}
function AYB(a){RX(a.AY);}
function ABc(){B.call(this);this.rh=null;}
function ALt(a){EL(a.rh);}
var AE7=G();
function PH(b,c,d){return AGC(b,0,c,d,UV());}
function AGC(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BK(c,d);h=g>=0?0:1+QX(f,2.0)|0;i=g>0?0:1+QX(f,3.0)|0;j=Q(Dh,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(420)),g);k[g]=AGC(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dh;n=new K;M(n);U(H(n,C(421)),g);J9(m,L(n),l);n=new Rj;n.tG=m;m.oB=n;switch((l+g|0)%3|0){case 0:break;case 1:QQ(m);break a;case 2:m.hz=60136;break a;default:break a;}Lz(m);}if(UX(f)<0.25){n=JW(m.hj,0);n.bF=n.bF|2;}k[h+g|0]=m;g=g+1|0;}n=new Dh;S3(n,b,c);n.fb=A82;n.fb=j;b=new WH;b.wq
=n;b.ws=e;n.jf=b;n.et=b;if((c+c|0)>d)IH(n);else NZ(n);return n;}
function ABd(){B.call(this);this.tp=null;}
function AOS(a){EL(a.tp);}
function Tp(){B.call(this);this.ta=null;}
function ATv(a){EL(a.ta);}
var AHG=G();
function AFZ(b,c){var d,e,f,g,h,i,j,k,l;d=b.bb.bO;e=ACE(b);f=Cu(b.bb,5.0);g=Cu(b.bb,c);h=g?g+e|0:0;i=BF(f+g|0,(f+h|0)+e|0);j=new Bg;k=d.a;l=f*2|0;QK(j,(k-l|0)-g|0,((d.b-e|0)-l|0)-h|0);Et(b,i,j);}
function ACL(){var a=this;B.call(a);a.q7=null;a.q9=null;}
function A2x(a){var b,c;b=a.q7;c=a.q9;DS(b);c.f();}
function QI(){var a=this;B.call(a);a.gf=null;a.kI=null;a.i9=null;a.ql=null;a.dg=null;a.lS=0;}
function AAt(a,b){if(!BO(b.oG,a.ql)){a.ql=b.oG;NW(a);}}
function NW(a){a.dg=BV(a.dg,null);}
function AGr(a,b){var c,d;c=Fk(b,a.ql);d=EA(c);a.dg=BV(a.dg,ADp(b.bH,NH(60088),c,0,d,0));}
function Tg(a,b){return a.dg!==null&&Gk(b,a.gf,a.kI)?1:0;}
var Eg=G(Bu);
function AG$(){var a=this;B.call(a);a.js=null;a.nI=0;a.f7=0;}
function AVY(){var a=new AG$();AUd(a);return a;}
function AUd(a){a.nI=0;a.js=BP(16);a.f7=0;}
function G4(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.js;d=c.data.length;if(d==a.f7)a.js=Jj(c,d*2|0);c=a.js.data;d=a.f7;a.f7=d+1|0;c[d]=b;}
function Q1(a){var b,c,d,e,f;b=a.nI;if(b&&a.f7!=b){c=En();b=a.nI;d=a.f7;e=new K;M(e);H(U(H(U(H(e,C(422)),b),C(423)),d),C(424));Bk(c,L(e));}f=a.js;b=f.data.length;d=a.f7;if(b!=d)f=Jj(f,d);return f;}
function SK(){var a=this;Ee.call(a);a.gK=0;a.d5=null;a.mb=0;a.xQ=0.0;a.pC=0;}
function AKS(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Uu(a){a.pC=a.d5.data.length*a.xQ|0;}
function ACO(a,b){return VK(a,b)===null?0:1;}
function Os(a,b){var c;c=VK(a,b);if(c===null)return null;return c.cT;}
function VK(a,b){var c,d;if(b===null)c=Y_(a);else{d=MH(b);c=Xa(a,b,d&(a.d5.data.length-1|0),d);}return c;}
function Xa(a,b,c,d){var e;e=a.d5.data[c];while(e!==null&&!(e.nE==d&&(b!==e.cW?0:1))){e=e.iq;}return e;}
function Y_(a){var b;b=a.d5.data[0];while(b!==null&&b.cW!==null){b=b.iq;}return b;}
function ACS(a,b,c,d){var e,f;e=new JC;VY(e,b,null);e.nE=d;f=a.d5.data;e.iq=f[c];f[c]=e;return e;}
function W1(a){var b,c,d,e,f,g,h,i;b=a.d5.data.length;b=AKS(!b?1:b<<1);c=Q(JC,b);d=c.data;e=0;f=b-1|0;while(true){g=a.d5.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nE&f;i=h.iq;h.iq=d[b];d[b]=h;h=i;}e=e+1|0;}a.d5=c;Uu(a);}
function UK(){var a=this;B.call(a);a.dC=null;a.mx=null;a.s6=null;}
function Pl(a,b){var c;if(!(b instanceof Ml)){Bq(a.dC,3);ADr(a,b);Bq(a.dC,b.jx);}else{c=b;Bq(a.dC,5);ADr(a,c);Bq(a.dC,c.jx);Bq(a.dC,c.wK);b=c.k3;Bq(a.dC,b.q);c=new WJ;c.rf=a;Ft(b,c);}}
function ADr(a,b){var c;c=b.eH.jG;G4(a.dC,a.mx.L,J(c));Bq(a.dC,b.eH.dG);OR(a,b.mf);BY(a.mx,c);}
function OR(a,b){if(b===null)Bq(a.dC,(-1));else Bq(a.dC,(Cq(a.s6,b)).bp);}
function Uq(){var a=this;B.call(a);a.cZ=null;a.ni=null;a.sd=null;}
function Hf(a,b){var c,d,e;if(b instanceof HI){c=b;Bq(a.cZ,9);YI(a,c.hw);}else if(b instanceof Kh){d=b;Bq(a.cZ,3);Zf(a,d);Bq(a.cZ,d.qK);YI(a,d.ig);}else if(b instanceof Jm){e=b;Bq(a.cZ,4);Hf(a,e.jV);Hf(a,e.ja);}else if(b===null)Bq(a.cZ,(-1));else{Bq(a.cZ,5);Zf(a,b);Bq(a.cZ,b.zV);}}
function Zf(a,b){var c;c=b.fU.jG;G4(a.cZ,a.ni.L,J(c));Bq(a.cZ,b.fU.dG);b=b.gJ;if(b===null)Bq(a.cZ,(-1));else Bq(a.cZ,(Cq(a.sd,b)).bp);BY(a.ni,c);}
function YI(a,b){var c;Bq(a.cZ,b.q);c=new V1;c.xp=a;Ft(b,c);}
function WO(){var a=this;B.call(a);a.yK=0;a.yJ=0;}
function SZ(){B.call(this);this.sA=null;}
function ASK(a,b){var c;c=a.sA;DI(c,b);HC(c,null);VH(c);}
var YB=G(Es);
var A85=null;function AIO(){A85=F($rt_doublecls());}
var J$=G();
var A86=FJ;var A87=null;var A88=null;function AFU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.q8=IK(Dg(d,D(0, 2147483648)),FJ)?0:1;e=Dg(d,D(4294967295, 1048575));f=GS(A4Y(d,52))&2047;if(IK(e,FJ)&&!f){c.nA=FJ;c.mO=0;return;}if(f)e=A3D(e,D(0, 1048576));else{e=HQ(e,1);while(IK(Dg(e,D(0, 1048576)),FJ)){e=HQ(e,1);f=f+(-1)|0;}}g=A88.data;h=f<<16>>16;i=0;j=g.length;k=BK(i,j);if(k>0){c=new BU;Y(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BK(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IU(e,A87.data[h],i);if(ANQ(m,A86)){while(DG(m,A86)<=0){j=j+(-1)|0;m=CR(Ci(m,Bp(10)),Bp(9));}g=A88.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IU(e,A87.data[h],i);}e=HQ(e,1);d=CR(e,Bp(1));g=A87.data;h=j+1|0;n=g[h];f=i-1|0;n=IU(d,n,f);o=IU(JO(e,Bp(1)),A87.data[h],f);p=Bp(1);while(true){q=Ci(p,Bp(10));if(DG(Df(m,q),Df(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ci(r,Bp(10));if(DG(Df(m,s),Df(n,s))>=0)break;r=s;}h=DG(p,r);e=h>0?Ci(Df(m,p),p):h<0?CR(Ci(Df(m,r),r),r):Ci(Df(CR(m,AGP(r,Bp(2))),r),r);if(DG(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Df(e,Bp(10));if(DG(e,D(2808348672, 232830643))<0)break;}else if(DG(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ci(e,Bp(10));}c.nA=e;c.mO=j-330|0;}
function IU(b,c,d){var e,f,g,h,i,j,k,l;e=Dg(b,Bp(65535));f=Dg(Gc(b,16),Bp(65535));g=Dg(Gc(b,32),Bp(65535));h=Dg(Gc(b,48),Bp(65535));i=Dg(c,Bp(65535));j=Dg(Gc(c,16),Bp(65535));k=Dg(Gc(c,32),Bp(65535));l=Dg(Gc(c,48),Bp(65535));return CR(CR(CR(HQ(Ci(l,h),32+d|0),HQ(CR(Ci(l,g),Ci(k,h)),16+d|0)),HQ(CR(CR(Ci(l,f),Ci(k,g)),Ci(j,h)),d)),Gc(CR(CR(CR(Ci(k,e),Ci(j,f)),Ci(i,g)),HQ(CR(CR(CR(Ci(l,e),Ci(k,f)),Ci(j,g)),Ci(i,h)),16)),32-d|0));}
function AFF(){A86=Df(Bp(-1),Bp(10));A87=AII([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A88=A4q([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function T2(){B.call(this);this.rE=null;}
function AL9(a){Hg(a.rE,37,3);}
function T3(){B.call(this);this.sj=null;}
function AN$(a){Hg(a.sj,40,3);}
function T4(){B.call(this);this.tF=null;}
function A17(a){Hg(a.tF,42,3);}
function T5(){B.call(this);this.xy=null;}
function AQg(a){Hg(a.xy,45,3);}
function T6(){B.call(this);this.x0=null;}
function ASp(a){Hg(a.x0,45,5);}
function OZ(){B.call(this);this.Aj=null;}
function A3d(a,b){var c,d;c=a.Aj;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var VL=G(0);
var A6G=null;function A4b(){A4b=Bn(VL);AZ4();}
function AZ4(){A6G=new $rt_globals.TextDecoder("utf-16");}
function PF(){CB.call(this);this.A1=null;}
function ALZ(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.A1);}
function ABX(){var a=this;B.call(a);a.tt=0;a.B9=0;}
function FW(a,b){var c;c=a.B9;if(c<=0)return 0;return YN(a.tt,b,c);}
var TI=G(0);
var A7j=null;function AO7(){AO7=Bn(TI);ATX();}
function ATX(){A7j=S(C(235));}
function Rj(){B.call(this);this.tG=null;}
function AY$(a){var b,c,d;b=a.tG;c=Bt();d=GC(b);b=new K;M(b);H(H(b,C(425)),d);Bk(c,L(b));}
function WH(){var a=this;B.call(a);a.wq=null;a.ws=null;}
function AY6(a){var b,c;b=a.wq;c=a.ws;if(!I_(b))NZ(b);else IH(b);c.f();}
function Q0(){B.call(this);this.qI=null;}
function A0y(a,b){H6(a.qI,b);}
function QZ(){B.call(this);this.BV=null;}
function AWI(a){return a.BV.sc;}
function Xf(){var a=this;B.call(a);a.qE=null;a.yH=null;a.vd=0;a.v9=0;}
function Od(a,b){return Ch(a.yH)<b?0:1;}
var AHf=G();
function AEB(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEt(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ev()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Tt;d.addEventListener("change",Bv(e,"handleEvent"));d.click();}
var AEQ=G(0);
function R6(){B.call(this);this.t2=null;}
function AXN(a){Mq(a.t2);}
function ACY(){var a=this;B.call(a);a.wZ=null;a.wY=null;}
function AT4(a){FN(a.wZ,a.wY);}
function OQ(){var a=this;B.call(a);a.sP=null;a.sO=null;}
function AO1(a){var b,c;b=a.sP;c=a.sO;Iu(b.c3,c);JZ(c);b.b4();}
function OP(){B.call(this);this.uV=null;}
var Yt=G();
var A89=null;function N_(b,c,d){Ry(b,c,d,0);}
function Ry(b,c,d,e){Xv(b,c,d,null,null,e);}
function Xv(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=L_(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CJ(b);c=b.B;if(c.data.length<i)b.B=AE9(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fh=h.fh+n|0;}else b.B.data[m]=D7(Y5(h,d,0));m=m+1|0;}Nh(b);if(j)b.dh=AGU(AHM(h));Fz(b.dP);Fz(b.dF);o=b.dP;g=0;while(g<k){Ep(o,DR(Bb(h),Bb(h)),DR(Bb(h),Bb(h)));g=g+1|0;}p=b.dP;o=b.dF;q=Xz(ACc(p));while(Gi(q)){r=ADT(q);s=r.cW;p=r.cT;BC(A89);r=Cq(o,p);if(r===null){r=BL();Ep(o,p,r);}BB(r,s);}if(o.o9===null){p=new Qy;p.wi=o;o.o9=p;}p=o.o9;r=new ZE;NR(r,
p.wi);while(Gi(r)){N3(r);o=r.hf.cT;p=A6a;c=Q(B,o.q);d=c.data;Gp(o,c);K6(c,p);g=0;t=d.length;while(g<t){p=d[g];KC(o,g);o.cH.data[g]=p;g=g+1|0;}}Rt(h);if(e!==null&&f!==null){p=AQK(e,f);PW(p);b.e6=AWl(p.pm,p.iU);b.dh=AGU(p.pJ);}}
function Wp(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=L_(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=ADo(b,i);o=ADo(b,j);p=(IS(Cd(b,n.a),n.b)).data[0].s;q=(IS(Cd(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Y5(h,d,i);if(!r)g=L2(p,g);if(r==s)g=L2(g,q);t=n.a+r|0;u=D7(g);c=b.B.data;v=c[t];c[t]=u;if(!k&&Jq(v)==Jq(u)){t=0;while(t<Jq(v)){o=v.s.data[t];w=u.s.data[t];x=o.bZ;y=x!=5?0:1;if(!y&&x&&!w.bZ){w.bZ=x;w.bF=o.bF;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AHM(h);w=KW(i,j,(-1));Xj(b.dh,w,u);}else if(e!==null&&f!==null){v=AQK(e,f);PW(v);w=KW(i,j,(-1));Xj(b.dh,w,v.pJ);n=b.e6;n.fE=b.dh.df.cm;n.fd=v.iU;}}Rt(h);}
function Y5(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=Q(Cy,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=Ec(EC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AKr(){A89=new Vv;}
var Zm=G(0);
var Ps=G(0);
var Id=G();
function AAh(){Id.call(this);this.Ay=null;}
function AB2(a,b){var c,d,e;c=0;while(true){d=a.Ay;if(d.kh===null)d.kh=B7(d.yk);if(!B_(d.kh))e=0;else{c=b.H(Ca(d.kh));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Rs=G(0);
function P3(){var a=this;B.call(a);a.Eq=null;a.Es=null;a.Er=0;a.Ep=0;}
var ADC=G();
function AMu(a,b){b=b;b.cQ=BV(b.cQ,null);}
var AFX=G(0);
function AI_(b,c,d,e,f,g){f=f.data;f[Jn(0,0)]=Gy(g,b,c,d,0);f[Jn(0,1)]=Gy(g,b,c,d,2);f[Jn(1,0)]=Gy(g,b,c,e,0);f[Jn(1,1)]=Gy(g,b,c,e,2);return f[Jn(0,0)];}
function JC(){var a=this;GY.call(a);a.nE=0;a.iq=null;}
var Ib=G(Bu);
function ACh(){B.call(this);this.vw=null;}
function AS1(a,b){var c,d,e,f;c=a.vw;DS(c.c9.gp.bQ);d=Bt();e=Cl(b);f=new K;M(f);H(H(f,C(426)),e);Bk(d,L(f));d=ASH(b,c);ET(c.c9.gr,d);d.jf.f();b=L3(b.hD,Fu(Hq(b),C(427)));DL(c.hk,b);}
var ADP=G();
function A0P(a,b){AEB(b);}
function ADO(){B.call(this);this.sQ=null;}
function AWF(a,b){var c,d,e;c=a.sQ;d=0;e=b.length;while(d<e){c.g(AKa(b[d],null));d=d+1|0;}}
var ADe=G();
function AXs(a,b){AEB(b);}
function ADd(){var a=this;B.call(a);a.so=null;a.sp=null;}
function AXZ(a,b){var c,d,e;c=a.so;d=a.sp;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.g(A33(b,d,Q(BJ,0),Q(BJ,0)));}
function S5(){var a=this;B.call(a);a.bu=null;a.rw=null;a.jc=null;a.oq=null;a.mq=null;a.gq=null;}
function X_(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=LC();e=a.bu.d;f=Ea(e);e=HE(e);g=a.bu.fB;if(Zi(g,f,e)!==null){h=new Rm;h.rZ=a;h.r0=b;D2(d,C(428),h);}if(Ow(g,f,e)!==null){h=new Rk;h.zS=a;h.zR=b;D2(d,C(429),h);}if(ABP(g,f,e)!==null){e=new Rn;e.yC=a;e.yD=b;D2(d,C(430),e);}e=new Rl;e.Cb=a;e.B_=b;D2(d,C(431),e);HU(a);if(L0()){if(!a.bu.e0){f=new Sr;f.ur=a;D2(d,C(432),f);}f=new Ss;f.wS=a;D2(d,C(433),f);if(!a.bu.e0&&VF(HU(a))){f=new Sq;f.r1=a;D2(d,C(434),f);}}if(c!==null)M_(d,c);f=LC();i=Q(BJ,5).data;i[0]=C(182);i[1]=C(193);i[2]
=C(209);i[3]=C(208);i[4]=C(203);j=i.length;k=0;while(k<j){e=i[k];g=new RI;g.zq=a;g.zp=e;D2(f,e,g);k=k+1|0;}FH(d,C(435),G0(f));b=LC();i=Q(BN,3);l=i.data;m=a.mq;BC(m);h=new Qt;h.x6=m;l[0]=C9(C(436),h);m=a.mq;BC(m);h=new Qr;h.z0=m;l[1]=C9(C(437),h);m=a.mq;BC(m);h=new Qs;h.qx=m;l[2]=C9(C(438),h);I5(b,C(439),C3(i),A8$);i=Q(BN,2);l=i.data;m=a.jc;BC(m);h=new T7;h.z4=m;l[0]=C9(C(440),h);m=a.jc;BC(m);h=new T9;h.Cf=m;l[1]=C9(C(441),h);FH(b,C(442),C3(i));m=new Zd;m.yV=a;I5(b,C(443),m,A8$);if(a.bu.cK.bH.l6){i=Q(BN,2);l
=i.data;m=new ZJ;m.su=a;l[0]=C9(C(444),m);m=new ZH;m.AB=a;l[1]=C9(C(445),m);FH(b,C(446),C3(i));}FH(d,C(447),G0(b));j=c!==null?0:1;c=LC();FH(c,C(448),AJj(a));if(j){e=new ZD;e.AR=a;D2(c,C(449),e);}g=new SX;g.Bg=a;I5(c,C(450),g,A8$);FH(d,C(451),G0(c));return G0(d);}
function HU(a){return a.bu.cK.e2;}
function Wa(a){var b;b=new RM;b.ul=a;return b;}
function AJj(a){var b,c,d,e,f;b=Q(BN,5);c=b.data;d=a.bu;BC(d);e=new ST;e.wj=d;c[0]=C9(C(452),e);e=a.bu;BC(e);f=new SU;f.sq=e;c[1]=C9(C(453),f);d=a.bu;BC(d);e=new SV;e.Ar=d;c[2]=C9(C(454),e);d=a.bu;BC(d);e=new SW;e.xe=d;c[3]=C9(C(455),e);d=a.bu;BC(d);e=new S_;e.zi=d;c[4]=C9(C(456),e);return C3(b);}
function Qp(a,b){var c;c=new OT;c.xI=a;c.xJ=b;return c;}
function KK(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DS(a.gq.bQ);d=a.bu.d;e=Ea(d);f=HE(d);g=a.bu.fB;if(c===null)h=null;else{A5e();switch(A8_.data[c.fS]){case 1:h=Ow(g,e,f);break a;case 2:h=Zi(g,e,f);break a;default:}b=new E5;Y(b);N(b);}}c=a.bu;e=Fy(c,b);g=Ja(c.d.h,e.bq,e.bv);f=SP(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new R8;e.Dz=c;e.Dy=b;e.Dx=f;h.tO(g,i,j,e,c.j9);}else{e=Cq(c.d.h.dP,g);if(e!==null)IX(c,e);else{e=Cq(c.d.h.dF,g);if(e!==null&&!ED(e))Zv(c.kS,b,e,c,f);else{c=c.kS;k=Q(BN,1);l=k.data;e=new BN;f=c.bQ;BC(f);g
=new AA5;g.Bj=f;CL(e,g,C(457));l[0]=e;Li(c,b,C3(k));}}}}
function ABY(){var a=this;B.call(a);a.vD=null;a.vA=null;a.vB=null;}
function APZ(a,b,c,d){var e,f,g,h;b=a.vD;e=a.vA;f=a.vB;ABm(b,e);if(f!==null)d.mZ.f();if(ACb(d)){f=d.fn;g=e.c4;h=e.f8;Vn(b,BF((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nh,e,d.tM);}}
function AKn(){var a=this;B.call(a);a.iA=null;a.fh=0;}
function L_(a){var b=new AKn();AUQ(b,a);return b;}
function AUQ(a,b){a.iA=b;a.fh=0;}
function Bb(a){var b,c;b=a.iA.data;c=a.fh;a.fh=c+1|0;return b[c];}
function Rt(a){var b,c,d,e;if(a.fh!=a.iA.data.length){b=En();c=a.iA.data.length;d=a.fh;e=new K;M(e);H(U(H(U(H(e,C(422)),c),C(458)),d),C(459));Bk(b,L(e));}}
function Q$(){var a=this;B.call(a);a.Dh=null;a.t5=0;}
function AVF(a,b){var c,d,e,f;c=a.t5;d=(CQ(K8(b,0))).data;b=Bt();e=d[0];f=new K;M(f);U(H(U(H(f,C(460)),c),C(461)),e);Bk(b,L(f));b=Bt();e=d[1];f=new K;M(f);U(H(U(H(f,C(460)),c),C(462)),e);Bk(b,L(f));}
function AEw(){B.call(this);this.Pk=null;}
var Tt=G();
function AU$(a,b){}
var Vv=G();
var FO=G();
var A9a=null;var A9b=null;var A7v=null;var A9c=null;var A9d=null;var A9e=null;function AJ1(){A9a=new Uj;A9b=new Ug;A7v=new Uh;A9c=new Ue;A9d=new Uf;A9e=new Wc;}
function AIu(){var a=this;B.call(a);a.pm=null;a.pJ=null;a.iU=null;a.cB=null;a.oP=null;a.nc=null;a.jb=null;a.nM=null;a.pE=null;}
function AQK(a,b){var c=new AIu();A1P(c,a,b);return c;}
function A1P(a,b,c){a.cB=L_(b);a.oP=c;}
function PW(a){var b,c,d,e,f,g,h,i;b=Bb(a.cB);c=new NQ;QO(c);a.iU=c;a.jb=BL();d=0;while(d<b){e=Bb(a.cB);f=Bb(a.cB);g=EC(a.oP,e,f);Ep(a.iU,g,BL());BB(a.jb,g);d=d+1|0;}c=Xz(ACc(a.iU));while(Gi(c)){H2((ADT(c)).cT,Pm(a));}d=Bb(a.cB);if(d==(-1))a.pm=null;else{a.nc=Q(F0,d);c=new Wx;h=a.cB;i=a.oP;g=a.jb;c.dQ=h;c.zh=i;c.yP=g;a.nM=c;c=new RK;c.ew=h;c.A0=i;c.Bd=g;a.pE=c;a.pm=Rz(a,null);}if(Bb(a.cB)!=(-1))a.pJ=ZA(a.cB,a.nc);}
function Rz(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cB);d=Bb(a.cB);e=a.nM;f=Bb(e.dQ);g=BL();h=0;while(h<f){BB(g,O4(e));h=h+1|0;}a:{switch(d){case -1:i=new NP;i.hm=b;b=A7v;i.cL=b;i.fF=b;i.eZ=b;i.lq=b;i.hQ=b;break a;case 0:i=A4s(b);break a;case 1:i=new Lg;AGd(i,b);H2(i.eZ,g);break a;default:}b=new C$;i=new K;M(i);U(H(i,C(463)),d);Bm(b,L(i));N(b);}i.eZ=g;b=a.pE;d=Bb(b.ew);e=BL();j=0;while(j<d){BB(e,Hu(b));j=j+1|0;}i.fF=e;i.lq=Pm(a);d=Bb(a.cB);b=BL();j=0;while(j<d){e=O4(a.nM);g=Hu(a.pE);f=Bb(a.cB);k=new QP;k.ls=e;k.kU
=g;k.rT=f;BB(b,k);j=j+1|0;}i.hQ=b;j=Bb(a.cB);i.uD=j==(-1)?null:BG(a.jb,j);d=Bb(a.cB);b=BL();j=0;while(j<d){BB(b,Rz(a,i));j=j+1|0;}i.cL=b;a.nc.data[c]=i;return i;}
function Pm(a){var b,c,d,e;b=Bb(a.cB);c=BL();d=0;while(d<b){e=Bb(a.cB);BB(c,BG(a.jb,e));d=d+1|0;}return c;}
function AEW(){var a=this;B.call(a);a.l7=null;a.pA=null;}
function ALl(){var a=this;B.call(a);a.EH=0;a.DW=0;a.rK=0;a.nn=0;}
function ADx(){var a=this;B.call(a);a.sF=null;a.sG=null;}
function AVq(a){var b,c,d,e,f,g;b=a.sF;c=a.sG;if(BO(c.l7,b.d.gc)){c=c.pA;CP(b,c.nn,c.rK,0);Cf((Bi(b)).bN,c.nn,c.rK);Cf((Bi(b)).bB,c.DW,c.EH);}else{d=(B3(b.fB.AQ)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GD(b);b=new YO;b.s7=g;b.s8=c;BC(b);c=new YT;c.ww=b;$rt_globals.setTimeout(Bv(c,"onTimer"),0);}}}
function ADy(){var a=this;B.call(a);a.Bw=null;a.Bv=null;}
function AXM(a){IX(a.Bw,a.Bv);}
function F0(){var a=this;B.call(a);a.hm=null;a.cL=null;a.fF=null;a.eZ=null;a.hQ=null;a.lq=null;a.uD=null;}
function A4s(a){var b=new F0();AGd(b,a);return b;}
function AGd(a,b){a.hm=b;a.cL=BL();a.fF=BL();a.eZ=BL();a.lq=BL();a.hQ=BL();}
function ADV(a){var b;b=a.hm;if(b!==null)b.cL.q4(a);}
function VS(){B.call(this);this.sg=null;}
function AOB(a,b){b=b;ZI(a.sg,b);}
var NP=G(F0);
var Lg=G(F0);
function UY(){B.call(this);this.AZ=null;}
function AVt(a,b){var c;b=b;c=a.AZ;Bq(c.by,(Cq(c.fZ,b)).bp);}
function QP(){var a=this;B.call(a);a.ls=null;a.kU=null;a.rT=0;}
function Qh(){B.call(this);this.qF=null;}
function AYX(a,b){b=b;AAp(a.qF,b);}
var Ql=G(0);
var Fw=G(FC);
var Nu=G(Fw);
var Uj=G(Nu);
var N9=G(Ee);
var Ug=G(N9);
var On=G(Fq);
function AWA(a){var b;b=new Eg;Y(b);N(b);}
function AQz(a,b){var c;c=new Eg;Y(c);N(c);}
function APA(a,b){b=new Eg;Y(b);N(b);}
var Uh=G(On);
function AQG(a,b){var c;c=new BH;Y(c);N(c);}
function APT(a){return 0;}
function ANP(a){return A9c;}
function AMb(a){return 1;}
var Ue=G();
function ALW(a){return 0;}
function AZJ(a){var b;b=new Mz;Y(b);N(b);}
function ASA(a){var b;b=new C$;Y(b);N(b);}
var Yr=G(0);
var Uf=G();
var Wc=G();
function Rq(){var a=this;B.call(a);a.mU=0;a.sx=null;}
function A3f(a,b){var c,d,e;c=a.sx;b=b;d=c.yK;e=c.yJ;d=b.a<=d&&e<=b.b?1:0;a.mU=d;return d?0:1;}
var Ku=G(Eg);
var JJ=G(Bu);
var Og=G(Bu);
function Yj(){B.call(this);this.zd=null;}
function AZK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.zd;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!ABz(b.h)){c=b.h;if(c.cq==e){e=b.qC;f=L_(d);Fz(c.dP);Fz(c.dF);Nh(c);while(f.fh>=f.iA.data.length?0:1){if(Bb(f)==(-1))continue;g=VN(c,Bb(f));h=Om(Cd(c,g.bq),g.bv);if(Bb(f)==(-1)){if(!e)continue;h.bZ=0;h.bF=h.bF|4;continue;}i=VN(c,Bb(f));j=Bb(f);k=Bb(f);Ep(c.dP,g,i);l=c.dF;m=BL();if(Cq(l,i)===null)Ep(l,i,m);BB(Cq(c.dF,i),g);h.bZ=j;h.bF=k;}Ly(b);if(b.EK){n=JO(E4(),b.A8);if(A3z(n,Bp(100))){b=E2(b);c=new K;M(c);H(HL(H(H(c,
b),C(464)),n),C(201));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AHZ(){B.call(this);this.Rz=null;}
function ABo(){B.call(this);this.vj=null;}
function AQp(a,b){Mr(a.vj,b);}
function Q9(){var a=this;B.call(a);a.yk=null;a.kh=null;}
function Vo(){B.call(this);this.sI=null;}
function AXT(a,b){var c,d;c=a.sI;c.k_=b;HC(c.E,b.p_);HC(c.G,c.k_.qa);b=c.mz;d=c.k_;b.gY=d;c.fI.es=d;}
var AEC=G();
function AEZ(b){var c,d,e,f,g,h,i,j;c=AVY();d=CJ(b);Bq(c,d);e=0;f=0;while(f<d){g=Cd(b,f);h=Jq(g);Bq(c,h);i=0;while(i<h){j=JW(g,i);G4(c,e,Ma(j));e=e+Ma(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Q1(c);}
function AEI(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=Q(Gs,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new Gs;j.hb=h;e[g]=j;}else{j=new Gs;j.hb=h;j.nF=BP(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nF.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AIt(b,c,d,e){var f,g,h,i;f=Fa(b);g=Fa(c);h=AEZ(b);i=AEZ(c);b=new AA4;b.Bi=d;CU(e,b,C(465),I(B,[f,h,g,i]));}
function AAx(){var a=this;B.call(a);a.qS=null;a.qT=null;}
function AVr(a){var b,c;b=a.qS;c=a.qT;FN(b.bQ.b$,c);AA9(b);}
function Ha(){var a=this;B.call(a);a.ej=0;a.e1=0;a.pt=null;a.n_=0;a.gU=null;}
function AS9(a,b,c,d,e,f){var g=new Ha();AYx(g,a,b,c,d,e,f);return g;}
function AYx(a,b,c,d,e,f,g){a.ej=b;a.e1=c;a.pt=BF(f,g);a.n_=d;a.gU=e;}
function Qw(){Fw.call(this);this.jl=null;}
function Sw(a){var b;b=new AAE;NR(b,a.jl);return b;}
function TL(){Fw.call(this);this.y9=null;}
function Xz(a){var b;b=new TE;NR(b,a.y9);return b;}
function Qy(){FC.call(this);this.wi=null;}
function Wf(){B.call(this);this.v8=null;}
function AW0(a,b){b=b;Pl(a.v8,b);}
function T8(){B.call(this);this.uH=null;}
function AYC(a,b){b=b;Hf(a.uH,b);}
function KA(){var a=this;B.call(a);a.eH=null;a.mf=null;a.jx=0;}
function A39(a,b,c){var d=new KA();AGJ(d,a,b,c);return d;}
function AGJ(a,b,c,d){a.eH=b;a.mf=c;a.jx=d;}
function AJ3(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.eH,c.eH)&&BO(a.mf,c.mf)&&BO(CX(a.jx),CX(c.jx))?1:0;}return 0;}
function Ml(){var a=this;KA.call(a);a.k3=null;a.wK=0;}
function AVP(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AJ3(a,b))return 0;c=b;return BO(a.k3,c.k3);}return 0;}
function E8(){var a=this;B.call(a);a.fU=null;a.gJ=null;a.zV=0;}
function A3y(a,b,c){var d=new E8();N1(d,a,b,c);return d;}
function N1(a,b,c,d){a.fU=b;a.gJ=c;a.zV=d;}
function AIx(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.fU,c.fU)&&BO(a.gJ,c.gJ)?1:0;}return 0;}
function HI(){E8.call(this);this.hw=null;}
function Kh(){var a=this;E8.call(a);a.ig=null;a.qK=0;}
function A1_(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AIx(a,b))return 0;c=b;return BO(a.ig,c.ig);}return 0;}
function Jm(){var a=this;E8.call(a);a.jV=null;a.ja=null;}
function AVd(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.jV,c.jV)&&BO(a.ja,c.ja)?1:0;}return 0;}
function Yk(){var a=this;B.call(a);a.qr=null;a.qt=0;a.qs=0;a.qp=null;a.qo=0;a.qq=0;}
function AZN(a,b){var c,d,e,f,g,h,i,j;c=a.qr;d=a.qt;e=a.qs;f=a.qp;g=a.qo;h=a.qq;i=Cu(c.bb,5.0);d=Be((c.bb.bO.a-d|0)-i|0,Bd((i-d|0)-c.Q.k.a|0,b.j.a));j=Be((c.bb.bO.b-e|0)-i|0,Bd((i-e|0)-c.Q.k.b|0,b.j.b));X(f,d+g|0,j+h|0);Et(c,f,c.W.k);}
function AFq(){var a=this;Id.call(a);a.QN=null;a.R_=0;a.J_=0;a.Iu=0;}
function AA4(){B.call(this);this.Bi=null;}
function ARz(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Bi;d=CQ(c[0]);c=L_(d);e=new T_;d=AEI(c);f=AEI(c);g=Bb(c);h=Q(L9,g);i=h.data;j=0;while(j<g){i[j]=Np(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AF_(e,d,f,h);b.g(e);}
function M$(){var a=this;G6.call(a);a.fu=null;a.jj=null;a.wP=null;a.nx=null;}
function A9f(a,b,c){var d=new M$();Xd(d,a,b,c);return d;}
function Xd(a,b,c,d){var e;UI(a,c,b,d);b=new UL;c=a.c3;P1(b,c.b$);d=KZ(c);b.iu=d;b.dJ=Ih(d);c=Ih(b.iu);b.dI=c;Oi(b.eE,b.dJ,c);e=new OY;e.tT=b;c=b.dJ;c.iw=e;b.dI.iw=e;IZ(c,0);IZ(b.dI,0);c=b.dJ;c.b3=1;b.tS=AHs(c,b.dI);MC(b,I(CB,[b.dJ,b.dI,b.eE]));a.fu=b;Y1(b,a.iC);b=S9(a,a.fu,30.0);a.jj=b;c=new V9;c.DD=a;b.CN=c;c=new V8;c.Dn=a;b.E1=c;EI(a.c3,b);}
function A0W(a,b){Fc(a.jj,b.cR);Y1(a.fu,b);}
function M6(a,b,c){var d,e;d=!c?a.fu.dI:a.fu.dJ;e=new Rg;e.vr=a;e.vs=b;e.vt=c;GK(d,b,e);}
function A1U(a){a.fu=null;}
function AVA(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fu;d=c.dJ;c=c.dI;e=BW(d,b);f=BW(c,b);if(!e&&!f)return C3(I(BN,[M5(a,1,C(274)),M5(a,0,C(275))]));g=!e?C(275):C(274);if(e)c=d;d=M5(a,e,g);h=a.fu;i=h.iu;j=a.nR;k=new Qx;g=h.dJ;h=h.dI;l=i.bQ.b$;k.l2=g;k.l1=h;k.x9=l;g=a.c3;BC(g);h=new QD;h.yw=g;return X_(UJ(i,c,j,a,k,h),b,d);}
function M5(a,b,c){var d,e;d=new BN;e=new Z2;e.tc=a;e.tb=b;CL(d,e,c);return d;}
function Wg(){B.call(this);this.Ca=null;}
function A1j(a){return AA7(a.Ca);}
function AAj(){B.call(this);this.zn=null;}
function AUJ(a,b,c){var d,e;c=a.zn;d=c.d.h;e=b.bp;b=c.fy;AAd(d.B.data[e],0,b);}
function Wx(){var a=this;B.call(a);a.dQ=null;a.zh=null;a.yP=null;}
function O4(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.dQ);switch(b){case 3:break;case 5:c=PP(a);d=Ob(a);b=Bb(a.dQ);e=Bb(a.dQ);f=Bb(a.dQ);g=BL();h=0;while(h<f){BB(g,Ob(a));h=h+1|0;}i=new Ml;AGJ(i,c,d,b);i.k3=g;i.wK=e;break a;default:c=new C$;d=new K;M(d);U(H(d,C(466)),b);Bm(c,L(d));N(c);}i=A39(PP(a),Ob(a),Bb(a.dQ));}return i;}
function PP(a){var b,c;b=Bb(a.dQ);c=Bb(a.dQ);return AXp(EC(a.zh,b,c),Bb(a.dQ));}
function Ob(a){var b;b=Bb(a.dQ);if(b==(-1))return null;return BG(a.yP,b);}
function RK(){var a=this;B.call(a);a.ew=null;a.A0=null;a.Bd=null;}
function Hu(a){var b,c,d,e,f;a:{b:{b=Bb(a.ew);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=W0(a);d=QU(a);b=Bb(a.ew);e=Sz(a);f=new Kh;N1(f,c,d,2);f.qK=b;f.ig=e;break a;case 4:c=Hu(a);d=Hu(a);f=new Jm;N1(f,c.fU,c.gJ,9);f.jV=c;f.ja=d;break a;case 5:f=A3y(W0(a),QU(a),Bb(a.ew));break a;case 9:c=Sz(a);f=new HI;d=!ED(c)&&BG(c,0)!==null?(BG(c,0)).gJ:null;N1(f,null,null,7);f.hw=BL();c=B7(c);while(B_(c)){e=Ca(c);if(!(e instanceof HI))BB(f.hw,e);else{e=e;H2(f.hw,e.hw);}}f.gJ=d;break a;default:break b;}f
=null;break a;}c=new C$;d=new K;M(d);U(H(d,C(467)),b);Bm(c,L(d));N(c);}return f;}
function W0(a){var b,c;b=Bb(a.ew);c=Bb(a.ew);return AXp(EC(a.A0,b,c),Bb(a.ew));}
function QU(a){var b;b=Bb(a.ew);if(b==(-1))return null;return BG(a.Bd,b);}
function Sz(a){var b,c,d;b=Bb(a.ew);c=BL();d=0;while(d<b){BB(c,Hu(a));d=d+1|0;}return c;}
function Vz(){var a=this;B.call(a);a.uZ=null;a.u0=null;a.u9=null;a.u$=0;a.u6=0;a.u7=0;a.u3=0;a.u4=0;a.u1=0;a.u2=0;a.vN=0;}
function ALu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uZ;d=a.u0;e=a.u9;f=a.u$;g=a.u6;h=a.u7;i=a.u3;j=a.u4;k=a.u1;l=a.u2;m=a.vN;n=Cu(c.bb,5.0);o=c.W.hW();Co(d,c.W.k);Co(e,c.W.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bb.bO.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bb.bO.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}Et(c,e,d);}
function UQ(){var a=this;B.call(a);a.xL=null;a.xK=0.0;}
function Nz(a,b){return Lr(a.xL,b,a.xK*2.0+0.875);}
function UL(){var a=this;Ik.call(a);a.iu=null;a.dJ=null;a.dI=null;a.tS=null;a.mP=null;a.jQ=0;}
function Y1(a,b){GL(a.iu,b);a.eE.io=b;Fv(a.dJ,b);Fv(a.dI,b);}
function V9(){B.call(this);this.DD=null;}
function V8(){B.call(this);this.Dn=null;}
function RA(){B.call(this);this.st=null;}
function ANB(a,b,c){HM(Cd(a.st.d.h,b.bp),0,J(c));}
var XW=G(0);
function ACr(){var a=this;B.call(a);a.mE=null;a.pI=null;a.hD=null;a.m7=null;}
function A33(a,b,c,d){var e=new ACr();AHm(e,a,b,c,d);return e;}
function AHm(a,b,c,d,e){a.mE=b;a.pI=c;a.hD=d;a.m7=e;}
function Nn(a,b){var c,d;c=new ACy;d=a.mE.values();c.kw=a;c.yu=d;c.k8=b;ABp(c);}
function YP(a){var b,c,d,e;b=a.m7;if(b===null){b=a.hD;c=b.data;d=Hq(a);e=c.length;b=C8(b,e+1|0);b.data[e]=d;b=b;a.m7=b;}return b;}
function Hq(a){return H4(a.mE.name);}
function A1$(a){return a.hD;}
function AFs(a){return L3(a.hD,Hq(a));}
function AHE(){var a=this;B.call(a);a.jG=null;a.dG=0;}
function AXp(a,b){var c=new AHE();ALx(c,a,b);return c;}
function ALx(a,b,c){a.jG=b;a.dG=c;}
function ARb(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.dG==c.dG&&BO(a.jG,c.jG)?1:0;}return 0;}
function WJ(){B.call(this);this.rf=null;}
function AYA(a,b){b=b;OR(a.rf,b);}
function V1(){B.call(this);this.xp=null;}
function A3c(a,b){b=b;Hf(a.xp,b);}
function OY(){B.call(this);this.tT=null;}
function A1X(a,b){var c,d,e;c=a.tT;d=c.dJ;if(d===b)c.jQ=c.jQ|1;e=c.dI;if(e===b)c.jQ=c.jQ|2;if((c.jQ&3)==3){b=d.d.h;d=e.d.h;e=new XH;e.wx=c;AIt(b,d,e,c.iu.bQ.b$.e2);}}
function FI(){var a=this;B.call(a);a.kr=0;a.t7=0;a.jX=null;a.hf=null;a.yz=null;a.l$=null;}
function A9g(a){var b=new FI();NR(b,a);return b;}
function NR(a,b){a.l$=b;a.t7=b.c0;a.jX=null;}
function Gi(a){var b,c;if(a.jX!==null)return 1;while(true){b=a.kr;c=a.l$.b8.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kr=b+1|0;}return 0;}
function AI0(a){var b;if(a.t7==a.l$.c0)return;b=new Ib;Y(b);N(b);}
function N3(a){var b,c,d,e;AI0(a);if(!Gi(a)){b=new Mz;Y(b);N(b);}b=a.jX;if(b!==null){c=a.hf;if(c!==null)a.yz=c;a.hf=b;a.jX=b.cY;}else{d=a.l$.b8.data;e=a.kr;a.kr=e+1|0;b=d[e];a.hf=b;a.jX=b.cY;a.yz=null;}}
var AAE=G(FI);
function Qk(a){N3(a);return a.hf.cW;}
var TE=G(FI);
function ADT(a){N3(a);return a.hf;}
var ZE=G(FI);
function AEO(){var a=this;B.call(a);a.Pz=null;a.SJ=0;}
function ZB(){var a=this;B.call(a);a.l=null;a.d2=0;a.mV=null;a.rb=0;a.hZ=0;a.fN=0;a.bA=0;a.nz=null;}
function Nf(a){return a.l.bR;}
function VO(a,b,c,d){var e,f,g,h,i,j;e=BL();f=a.d2;g=0;if(c!=f)a.d2=c;a:{switch(b){case -1073741784:h=new R4;c=a.bA+1|0;a.bA=c;Gq(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QR;c=a.bA+1|0;a.bA=c;Gq(h,c);break a;case -33554392:h=new SM;c=a.bA+1|0;a.bA=c;Gq(h,c);break a;default:c=a.hZ+1|0;a.hZ=c;if(d!==null)h=A5m(c);else{h=new F8;Gq(h,0);g=1;}c=a.hZ;if(c<=(-1))break a;if(c>=10)break a;a.mV.data[c]=h;break a;}h=new AD2;Gq(h,(-1));}while(true){if(Fl(a.l)&&a.l.m==(-536870788))
{d=A1M(Ck(a,2),Ck(a,64));while(!DD(a.l)&&Fl(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CI(d,Bl(i));i=a.l;if(i.bk!=(-536870788))continue;Bl(i);}i=Ls(a,d);i.T(h);}else if(a.l.bk==(-536870788)){i=H3(h);Bl(a.l);}else{i=Yb(a,h);d=a.l;if(d.bk==(-536870788))Bl(d);}if(i!==null)BB(e,i);if(DD(a.l))break;if(a.l.bk==(-536870871))break;}if(a.l.m$==(-536870788))BB(e,H3(h));if(a.d2!=f&&!g){a.d2=f;d=a.l;d.hd=f;d.m=d.bk;d.fp=d.fC;j=d.ds;d.y=j+1|0;d.jC=j;FS(d);}switch(b){case -1073741784:break;case -536870872:d
=new Ws;F9(d,e,h);return d;case -268435416:d=new ACT;F9(d,e,h);return d;case -134217688:d=new ZF;F9(d,e,h);return d;case -67108824:d=new Tb;F9(d,e,h);return d;case -33554392:d=new D_;F9(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A5d(BG(e,0),h);default:return A3Q(e,h);}return H3(h);}d=new Kt;F9(d,e,h);return d;}
function AKE(a){var b,c,d,e,f,g,h;b=BP(4);c=(-1);d=(-1);if(!DD(a.l)&&Fl(a.l)){e=b.data;c=Bl(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B5(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bl(f);f=a.l;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bl(f);return A1A(e,3);}return A1A(e,2);}if(!Ck(a,2))return AE$(b[0]);if(Ck(a,64))return A0e(b[0]);return AWb(b[0]);}e=b.data;c=1;while(c<4&&!DD(a.l)&&Fl(a.l)){h=c+1|0;e[c]=Bl(a.l);c=h;}if(c==1){h=e[0];if(!(A9h.DO(h)==A9i?0:1))return VG(a,e[0]);}if
(!Ck(a,2))return A5J(b,c);if(Ck(a,64)){f=new VB;PM(f,b,c);return f;}f=new ABq;PM(f,b,c);return f;}
function Yb(a,b){var c,d,e,f,g,h,i;if(Fl(a.l)&&!KY(a.l)&&Nx(a.l.m)){if(Ck(a,128)){c=AKE(a);if(!DD(a.l)){d=a.l;e=d.bk;if(!(e==(-536870871)&&!(b instanceof F8))&&e!=(-536870788)&&!Fl(d))c=Mn(a,b,c);}}else if(!XE(a.l)&&!ACi(a.l)){f=new PX;M(f);while(!DD(a.l)&&Fl(a.l)&&!XE(a.l)&&!ACi(a.l)){if(!(!KY(a.l)&&!a.l.m)&&!(!KY(a.l)&&Nx(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bl(a.l);if(!Mm(e))BM(f,e&65535);else J3(f,HR(e));}if(!Ck(a,2)){c=new ZU;D0(c);c.cG
=L(f);e=f.L;c.bI=e;c.o8=AZj(e);c.nC=AZj(c.bI);h=0;while(h<(c.bI-1|0)){RQ(c.o8,P(c.cG,h),(c.bI-h|0)-1|0);RQ(c.nC,P(c.cG,(c.bI-h|0)-1|0),(c.bI-h|0)-1|0);h=h+1|0;}}else if(Ck(a,64))c=A5I(f);else{c=new Pk;D0(c);c.jE=L(f);c.bI=f.L;}}else c=Mn(a,b,ADM(a,b));}else{d=a.l;if(d.bk!=(-536870871))c=Mn(a,b,ADM(a,b));else{if(b instanceof F8)N(Cm(C(21),d.bR,PV(d)));c=H3(b);}}a:{if(!DD(a.l)){e=a.l.bk;if(!(e==(-536870871)&&!(b instanceof F8))&&e!=(-536870788)){f=Yb(a,b);if(c instanceof Dc&&!(c instanceof FT)&&!(c instanceof C0)
&&!(c instanceof E7)){i=c;if(!f.b1(i.N)){c=new U8;Ff(c,i.N,i.e,i.jT);c.N.T(c);}}if((f.iY()&65535)!=43)c.T(f);else c.T(f.N);break a;}}if(c===null)return null;c.T(b);}if((c.iY()&65535)!=43)return c;return c.N;}
function Mn(a,b,c){var d,e,f,g,h;d=a.l;e=d.bk;if(c!==null&&!(c instanceof Cc)){switch(e){case -2147483606:Bl(d);d=new We;Dt(d,c,b,e);OD();c.T(A9j);return d;case -2147483605:Bl(d);d=new YC;Dt(d,c,b,(-2147483606));OD();c.T(A9j);return d;case -2147483585:Bl(d);d=new QB;Dt(d,c,b,(-536870849));OD();c.T(A9j);return d;case -2147483525:f=new Ph;d=Gm(d);g=a.fN+1|0;a.fN=g;MI(f,d,c,b,(-536870849),g);OD();c.T(A9j);return f;case -1073741782:case -1073741781:Bl(d);d=new RZ;Dt(d,c,b,e);c.T(d);return d;case -1073741761:Bl(d);d
=new Zh;Dt(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new TP;d=Gm(d);e=a.fN+1|0;a.fN=e;MI(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bl(d);if(c.iY()!=(-2147483602)){d=new C0;Dt(d,c,b,e);}else if(Ck(a,32)){d=new R0;Dt(d,c,b,e);}else{d=new XM;f=Yn(a.d2);Dt(d,c,b,e);d.m9=f;}c.T(d);return d;case -536870849:Bl(d);d=new GE;Dt(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new Go;d=Gm(d);e=a.fN+1|0;a.fN=e;MI(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bl(d);d=new AEf;Ff(d,f,b,e);f.e=d;return d;case -2147483585:Bl(d);c=new U3;Ff(c,f,b,(-2147483585));return c;case -2147483525:c=new Ya;Sg(c,Gm(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bl(d);d=new Zg;Ff(d,f,b,e);f.e=d;return d;case -1073741761:Bl(d);c=new ABB;Ff(c,f,b,(-1073741761));return c;case -1073741701:c=new RP;Sg(c,Gm(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bl(d);d=A36(f,b,e);f.e=d;return d;case -536870849:Bl(d);c
=new E7;Ff(c,f,b,(-536870849));return c;case -536870789:return A4M(Gm(d),f,b,(-536870789));default:}return c;}
function ADM(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F8;while(true){a:{e=a.l;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bl(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.d2=g;else{if(f!=(-1073741784))g=a.d2;c=VO(a,f,g,b);e=a.l;if(e.bk!=(-536870871))N(Cm(C(21),e.bR,e.ds));Bl(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bl(e);c
=A1r(0);break a;case -2147483577:Bl(e);c=new XJ;B6(c);break a;case -2147483558:Bl(e);c=new Vu;h=a.bA+1|0;a.bA=h;AKO(c,h);break a;case -2147483550:Bl(e);c=A1r(1);break a;case -2147483526:Bl(e);c=new ADc;B6(c);break a;case -536870876:Bl(e);a.bA=a.bA+1|0;if(Ck(a,8)){if(Ck(a,1)){c=A3I(a.bA);break a;}c=A3p(a.bA);break a;}if(Ck(a,1)){c=A3U(a.bA);break a;}c=A4d(a.bA);break a;case -536870866:Bl(e);if(Ck(a,32)){c=A4k();break a;}c=A4a(Yn(a.d2));break a;case -536870821:Bl(e);i=0;c=a.l;if(c.bk==(-536870818)){i=1;Bl(c);}c
=Ls(a,Hz(a,i));c.T(b);e=a.l;if(e.bk!=(-536870819))N(Cm(C(21),e.bR,e.ds));X3(e,1);Bl(a.l);break a;case -536870818:Bl(e);a.bA=a.bA+1|0;if(!Ck(a,8)){c=new Lj;B6(c);break a;}c=new WV;e=Yn(a.d2);B6(c);c.zl=e;break a;case 0:j=e.fC;if(j!==null)c=Ls(a,j);else{if(DD(e)){c=H3(b);break a;}c=AE$(f&65535);}Bl(a.l);break a;default:break b;}Bl(e);c=new Lj;B6(c);break a;}h=(f&2147483647)-48|0;if(a.hZ<h)N(Cm(C(21),FY(e),PV(a.l)));Bl(e);a.bA=a.bA+1|0;c=!Ck(a,2)?A4y(h,a.bA):Ck(a,64)?A3J(h,a.bA):A5H(h,a.bA);a.mV.data[h].oX=1;a.rb
=1;break a;}if(f>=0&&!Hb(e)){c=VG(a,f);Bl(a.l);}else if(f==(-536870788))c=H3(b);else{if(f!=(-536870871)){b=new Ki;c=!Hb(a.l)?Vq(f&65535):a.l.fC.cO();e=a.l;MS(b,c,e.bR,e.ds);N(b);}if(d){b=new Ki;e=a.l;MS(b,C(21),e.bR,e.ds);N(b);}c=H3(b);}}}if(f!=(-16777176))break;}return c;}
function Hz(a,b){var c,d,e,f,g,h,i,j,$$je;c=A1M(Ck(a,2),Ck(a,64));EO(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DD(a.l))break a;h=a.l;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CI(c,d);d=Bl(a.l);h=a.l;if(h.bk!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bl(h);e=1;d=(-1);break d;}Bl(h);if(g){c=Hz(a,0);break d;}if(a.l.bk==(-536870819))break d;Vg(c,Hz(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bl(h);h=a.l;i=h.bk;if(Hb(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Nx(i))break e;i=i&65535;break e;}catch($$e){$$je=EX($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}}try{Cb(c,d,i);}catch($$e){$$je=EX($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}Bl(a.l);d=(-1);break d;}}if(d>=0)CI(c,d);d=45;Bl(a.l);break d;case -536870821:if(d>=0){CI(c,d);d=(-1);}Bl(a.l);j=0;h=a.l;if(h.bk==(-536870818)){Bl(h);j=1;}if(!e)AH_(c,Hz(a,j));else Vg(c,Hz(a,j));e=0;Bl(a.l);break d;case -536870819:if(d>=0)CI(c,
d);d=93;Bl(a.l);break d;case -536870818:if(d>=0)CI(c,d);d=94;Bl(a.l);break d;case 0:if(d>=0)CI(c,d);h=a.l.fC;if(h===null)d=0;else{ALk(c,h);d=(-1);}Bl(a.l);break d;default:}if(d>=0)CI(c,d);d=Bl(a.l);}g=0;}N(Cm(C(21),Nf(a),a.l.ds));}N(Cm(C(21),Nf(a),a.l.ds));}if(!f){if(d>=0)CI(c,d);return c;}N(Cm(C(21),Nf(a),a.l.ds-1|0));}
function VG(a,b){var c,d,e;c=Mm(b);if(Ck(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AWb(b&65535);}if(Ck(a,64)&&b>128){if(c){d=new Wn;D0(d);d.bI=2;d.s$=G5(G3(b));return d;}if(Qj(b))return AQ_(b&65535);if(!SC(b))return A0e(b&65535);return AXX(b&65535);}}if(!c){if(Qj(b))return AQ_(b&65535);if(!SC(b))return AE$(b&65535);return AXX(b&65535);}d=new Ef;D0(d);d.bI=2;d.g3=b;e=(HR(b)).data;d.mp=e[0];d.lr=e[1];return d;}
function Ls(a,b){var c,d,e;if(!AJX(b)){if(!b.R){if(b.ir())return AOQ(b);return AS_(b);}if(!b.ir())return AYd(b);c=new MJ;ABS(c,b);return c;}c=AEA(b);d=new O3;B6(d);d.sl=c;d.Ef=c.bi;if(!b.R){if(b.ir())return AGv(AOQ(Jz(b)),d);return AGv(AS_(Jz(b)),d);}if(!b.ir())return AGv(AYd(Jz(b)),d);c=new Rh;e=new MJ;ABS(e,Jz(b));AHO(c,e,d);return c;}
function JA(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ck(a,b){return (a.d2&b)!=b?0:1;}
function AAc(){B.call(this);this.yU=null;}
function AQw(a,b){b.hu=a.yU.df;}
function AAb(){B.call(this);this.u8=null;}
function AZ9(a,b){b.hm=a.u8.df.cm;}
function XL(){B.call(this);this.rs=null;}
function AWt(a,b){b.hu=a.rs;}
var HY=G(0);
function Th(){B.call(this);this.yX=null;}
function AYY(a,b,c,d){KR(a.yX,b,c.bp,d.bp);}
function Ti(){B.call(this);this.w7=null;}
function AXE(a,b,c,d){KR(a.w7,b,c.bp,d.bp);}
function IW(){B.call(this);this.on=0;}
var A9k=null;var A9l=null;var A9m=null;function ARH(a){var b=new IW();AGx(b,a);return b;}
function AGx(a,b){a.on=b;}
function X7(b){return !b?A9l:A9k;}
function AIy(){A9k=ARH(1);A9l=ARH(0);A9m=F($rt_booleancls());}
var KT=G(0);
var R5=G();
var X0=G(0);
var AFY=G();
function Sn(){B.call(this);this.va=null;}
function AZr(a,b,c,d){JV(a.va,b,c.bp,d.bp);}
var Sm=G();
function ATP(a,b){return b.eH.dG>=0?0:1;}
var Sl=G();
function AR4(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fU;if(b===null)break b;if(b.dG>=0)break b;}c=1;break a;}c=0;}return c;}
function Sp(){B.call(this);this.Ap=null;}
function AY5(a,b,c,d){JV(a.Ap,b,c.bp,d.bp);}
function BS(){var a=this;B.call(a);a.e=null;a.cx=0;a.xU=null;a.jT=0;}
var A6h=0;function B6(a){var b;b=A6h;A6h=b+1|0;a.xU=J4(b);}
function NM(a,b){var c;c=A6h;A6h=c+1|0;a.xU=J4(c);a.e=b;}
function II(a,b,c,d){var e;e=d.z;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IP(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWn(a,b){a.jT=b;}
function AVZ(a){return a.jT;}
function ASL(a){return a.e;}
function ATm(a,b){a.e=b;}
function A1F(a,b){return 1;}
function A2q(a){return null;}
function Kz(a){var b;a.cx=1;b=a.e;if(b!==null){if(!b.cx){b=b.gC();if(b!==null){a.e.cx=1;a.e=b;}a.e.eU();}else if(b instanceof HT&&b.eY.oX)a.e=b.e;}}
function AHV(){A6h=1;}
function V2(){var a=this;B.call(a);a.ro=null;a.rm=null;a.rl=0;a.rn=0;}
function AZv(a,b){b=b;ES(a.ro,a.rm,b,a.rl,a.rn);}
function V3(){var a=this;B.call(a);a.B6=null;a.B5=null;a.B4=0;a.B3=0;}
function AOl(a,b){b=b;ES(a.B6,a.B5,b,a.B4,a.B3);}
function RJ(){var a=this;B.call(a);a.x5=null;a.x3=null;a.x4=null;}
function AXl(a){AFw(a.x5,a.x3,a.x4);}
function XK(){B.call(this);this.wV=null;}
function AQJ(a,b){ADu(a.wV,b);}
function AAT(){var a=this;B.call(a);a.B1=null;a.B2=null;}
function AMr(a){var b,c;b=a.B1;c=a.B2;Gj(b.x.bw,FU(c));}
function Io(){var a=this;Dh.call(a);a.jR=null;a.hN=null;a.hx=null;a.ic=null;}
var A9n=null;var A9o=null;function ASH(a,b){var c=new Io();AJT(c,a,b);return c;}
function A9p(a,b,c){var d=new Io();LN(d,a,b,c);return d;}
function AJT(a,b,c){LN(a,b,0,c);}
function LN(a,b,c,d){J9(a,Hq(b),c);a.hx=A9n;a.ic=A9o;a.jR=b;a.hN=d;Lm(a);IH(a);}
function Rr(a,b){return Ur(a.hx,b);}
function Lm(a){var b;b=new R3;b.sV=a;a.et=b;a.jf=b;a.fb=A82;}
function ADB(a){var b;b=new AEd;b.tL=a;a.et=b;a.jf=b;}
function AHo(){A9n=Q(Io,0);A9o=Q(KF,0);}
function CZ(){var a=this;BS.call(a);a.oX=0;a.eo=0;}
var A9j=null;function OD(){OD=Bn(CZ);AW2();}
function A5m(a){var b=new CZ();Gq(b,a);return b;}
function Gq(a,b){OD();B6(a);a.eo=b;}
function AMq(a,b,c,d){var e,f;e=I$(d,a.eo);M4(d,a.eo,b);f=a.e.c(b,c,d);if(f<0)M4(d,a.eo,e);return f;}
function AYM(a){return a.eo;}
function AMG(a,b){return 0;}
function AW2(){var b;b=new XF;B6(b);A9j=b;}
function G8(){var a=this;B.call(a);a.bg=null;a.hd=0;a.fs=0;a.vC=0;a.m$=0;a.bk=0;a.m=0;a.zE=0;a.fC=null;a.fp=null;a.y=0;a.j5=0;a.ds=0;a.jC=0;a.bR=null;}
var A9q=null;var A9h=null;var A9i=0;function X3(a,b){if(b>0&&b<3)a.fs=b;if(b==1){a.m=a.bk;a.fp=a.fC;a.y=a.jC;a.jC=a.ds;FS(a);}}
function Hb(a){return a.fC===null?0:1;}
function KY(a){return a.fp===null?0:1;}
function Bl(a){FS(a);return a.m$;}
function Gm(a){var b;b=a.fC;FS(a);return b;}
function FS(a){var b,c,d,e,f,g,h,$$je;a.m$=a.bk;a.bk=a.m;a.fC=a.fp;a.ds=a.jC;a.jC=a.y;while(true){b=0;c=a.y>=a.bg.data.length?0:LY(a);a.m=c;a.fp=null;if(a.fs==4){if(c!=92)return;c=a.y;d=a.bg.data;c=c>=d.length?0:d[B9(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.y=a.j5;return;}a.fs=a.vC;a.m=a.y>(a.bg.data.length-2|0)?0:LY(a);}a:{c=a.m;if(c!=92){e=a.fs;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bg.data[a.y]!=63){a.m=(-2147483608);break a;}B9(a);c=a.bg.data[a.y];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B9(a);break b;default:N(Cm(C(21),FY(a),a.y));}a.m=(-67108824);B9(a);}else{switch(c){case 33:break;case 60:B9(a);c=a.bg.data[a.y];e=1;break b;case 61:a.m=(-536870872);B9(a);break b;case 62:a.m=(-33554392);B9(a);break b;default:f=ALi(a);a.m=f;if(f<256){a.hd=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.hd=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B9(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.y;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B9(a);break a;case 63:a.m=c|(-1073741824);B9(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);X3(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fp=AHr(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.y>=(a.bg.data.length-2|0)?(-1):LY(a);c:{a.m=c;switch(c){case -1:N(Cm(C(21),FY(a),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AGo(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fs!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cm(C(21),FY(a),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.fp=Sc(EC(a.bg,
a.j5,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.vC=a.fs;a.fs=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.y;d=a.bg.data;if(c>=(d.length-2|0))N(Cm(C(21),FY(a),a.y));a.m=d[B9(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=YE(a,4);break a;case 120:a.m=YE(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AJ4(a);h=0;if(a.m==80)h=1;try{a.fp=Sc(g,h);}catch($$e){$$je=EX($$e);if($$je instanceof MM){N(Cm(C(21),FY(a),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AJ4(a){var b,c,d,e,f,g;b=new K;GN(b,10);c=a.y;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EC(d,B9(a),1);f=new K;M(f);H(H(f,C(468)),b);return L(f);}B9(a);c=0;a:{while(true){g=a.y;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B9(a)];if(c==125)break a;BM(b,c);}}if(c!=125)N(Cm(C(21),a.bR,a.y));}if(!b.L)N(Cm(C(21),a.bR,a.y));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(468)),f);return L(b);}b:{c:{if(J(f)>3){if(NC(f,C(468)))break c;if(NC(f,C(469)))break c;}break b;}f=Dw(f,2);}return f;}
function AHr(a,b){var c,d,e,f,g,$$je;c=new K;GN(c,4);d=(-1);e=2147483647;a:{while(true){f=a.y;g=a.bg.data;if(f>=g.length)break a;b=g[B9(a)];if(b==125)break a;if(b==44&&d<0)try{d=KP(Ed(c),10);AHx(c,0,AIz(c));continue;}catch($$e){$$je=EX($$e);if($$je instanceof Du){break;}else{throw $$e;}}BM(c,b&65535);}N(Cm(C(21),a.bR,a.y));}if(b!=125)N(Cm(C(21),a.bR,a.y));if(c.L>0)b:{try{e=KP(Ed(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EX($$e);if($$je instanceof Du){}else{throw $$e;}}N(Cm(C(21),a.bR,a.y));}else if
(d<0)N(Cm(C(21),a.bR,a.y));if((d|e|(e-d|0))<0)N(Cm(C(21),a.bR,a.y));b=a.y;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B9(a);break c;case 63:a.m=(-1073741701);B9(a);break c;default:}a.m=(-536870789);}c=new WC;c.fL=d;c.fK=e;return c;}
function FY(a){return a.bR;}
function DD(a){return !a.bk&&!a.m&&a.y==a.zE&&!Hb(a)?1:0;}
function Nx(b){return b<0?0:1;}
function Fl(a){return !DD(a)&&!Hb(a)&&Nx(a.bk)?1:0;}
function XE(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function ACi(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function SC(b){return b<=56319&&b>=55296?1:0;}
function Qj(b){return b<=57343&&b>=56320?1:0;}
function YE(a,b){var c,d,e,f,$$je;c=new K;GN(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BK(e,b);if(f>=0)break;if(a.y>=d)break;BM(c,a.bg.data[B9(a)]);e=e+1|0;}if(!f)a:{try{b=KP(Ed(c),16);}catch($$e){$$je=EX($$e);if($$je instanceof Du){break a;}else{throw $$e;}}return b;}N(Cm(C(21),a.bR,a.y));}
function AGo(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=AB1(d[a.y],8);switch(f){case -1:break;default:if(f>3)b=2;B9(a);a:{while(true){if(c>=b)break a;g=a.y;if(g>=e)break a;g=AB1(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B9(a);c=c+1|0;}}return f;}N(Cm(C(21),a.bR,a.y));}
function ALi(a){var b,c,d,e;b=1;c=a.hd;a:while(true){d=a.y;e=a.bg.data;if(d>=e.length)N(Cm(C(21),a.bR,d));b:{c:{switch(e[d]){case 41:B9(a);return c|256;case 45:if(!b)N(Cm(C(21),a.bR,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B9(a);}B9(a);return c;}
function B9(a){var b,c,d,e,f;b=a.y;a.j5=b;if(!(a.hd&4))a.y=b+1|0;else{c=a.bg.data.length-2|0;a.y=b+1|0;a:while(true){d=a.y;if(d<c&&RL(a.bg.data[d])){a.y=a.y+1|0;continue;}d=a.y;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.y=d+1|0;while(true){f=a.y;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.y=f+1|0;}}}return a.j5;}
function AKV(b){return A9q.Id(b);}
function LY(a){var b,c,d,e;b=a.bg.data[B9(a)];if(CS(b)){c=a.j5+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(Dl(e)){B9(a);return EP(b,e);}}}return b;}
function PV(a){return a.ds;}
function Ki(){var a=this;BU.call(a);a.Dr=null;a.C9=null;a.s0=0;}
function Cm(a,b,c){var d=new Ki();MS(d,a,b,c);return d;}
function MS(a,b,c,d){Y(a);a.s0=(-1);a.Dr=b;a.C9=c;a.s0=d;}
function XH(){B.call(this);this.wx=null;}
function ASr(a,b){var c,d;c=a.wx;c.mP=b;HC(c.dJ,b.p_);HC(c.dI,c.mP.qa);b=c.tS;d=c.mP;b.gY=d;c.eE.es=d;}
var R4=G(CZ);
function AU_(a,b,c,d){var e;e=a.eo;B1(d,e,b-DE(d,e)|0);return a.e.c(b,c,d);}
function A0E(a,b){return 0;}
var AD2=G(CZ);
function AWk(a,b,c,d){return b;}
var QR=G(CZ);
function AMM(a,b,c,d){if(DE(d,a.eo)!=b)b=(-1);return b;}
function SM(){CZ.call(this);this.xb=0;}
function AVc(a,b,c,d){var e;e=a.eo;B1(d,e,b-DE(d,e)|0);a.xb=b;return b;}
function AZM(a,b){return 0;}
var F8=G(CZ);
function ATx(a,b,c,d){if(d.ma!=1&&b!=d.z)return (-1);d.ky=1;M4(d,0,b);return b;}
function Cc(){BS.call(this);this.bI=0;}
function D0(a){B6(a);a.bI=1;}
function A2X(a,b,c,d){var e;if((b+a.ca()|0)>d.z){d.dM=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function A1g(a){return a.bI;}
function APj(a,b){return 1;}
var AHc=G(Cc);
function H3(a){var b=new AHc();AYT(b,a);return b;}
function AYT(a,b){NM(a,b);a.bI=1;a.jT=1;a.bI=0;}
function A0X(a,b,c){return 0;}
function AW5(a,b,c,d){var e,f,g;e=d.z;f=d.c_;while(true){g=BK(b,e);if(g>0)return (-1);if(g<0&&Dl(P(c,b))&&b>f&&CS(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AWg(a,b,c,d,e){var f,g;f=e.z;g=e.c_;while(true){if(c<b)return (-1);if(c<f&&Dl(P(d,c))&&c>g&&CS(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AVb(a,b){return 0;}
function B8(){var a=this;BS.call(a);a.bK=null;a.eY=null;a.bd=0;}
function A3Q(a,b){var c=new B8();F9(c,a,b);return c;}
function F9(a,b,c){B6(a);a.bK=b;a.eY=c;a.bd=c.eo;}
function AOE(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=Gx(d,a.bd);DZ(d,a.bd,b);f=a.bK.q;g=0;while(true){if(g>=f){DZ(d,a.bd,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARv(a,b){a.eY.e=b;}
function AYw(a,b){var c;a:{c=a.bK;if(c!==null){c=B7(c);while(true){if(!B_(c))break a;if(!(Ca(c)).b1(b))continue;else return 1;}}}return 0;}
function ARZ(a,b){return I$(b,a.bd)>=0&&Gx(b,a.bd)==I$(b,a.bd)?0:1;}
function AM7(a){var b,c,d,e;a.cx=1;b=a.eY;if(b!==null&&!b.cx)Kz(b);a:{b=a.bK;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BG(a.bK,d);e=b.gC();if(e===null)e=b;else{b.cx=1;EN(a.bK,d);AJB(a.bK,d,e);}if(!e.cx)e.eU();d=d+1|0;}}}if(a.e!==null)Kz(a);}
var Kt=G(B8);
function ARj(a,b,c,d){var e,f,g,h;e=DE(d,a.bd);B1(d,a.bd,b);f=a.bK.q;g=0;while(true){if(g>=f){B1(d,a.bd,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A0j(a,b){return !DE(b,a.bd)?0:1;}
var D_=G(Kt);
function AWD(a,b,c,d){var e,f,g;e=DE(d,a.bd);B1(d,a.bd,b);f=a.bK.q;g=0;while(g<f){if((BG(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.eY.xb,c,d);g=g+1|0;}B1(d,a.bd,e);return (-1);}
function A0c(a,b){a.e=b;}
var Ws=G(D_);
function ARt(a,b,c,d){var e,f;e=a.bK.q;f=0;while(f<e){if((BG(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ATr(a,b){return 0;}
var ACT=G(D_);
function AMD(a,b,c,d){var e,f;e=a.bK.q;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A1k(a,b){return 0;}
var ZF=G(D_);
function AM5(a,b,c,d){var e,f,g,h;e=a.bK.q;f=d.kB?0:d.c_;a:{g=a.e.c(b,c,d);if(g>=0){B1(d,a.bd,b);h=0;while(true){if(h>=e)break a;if((BG(a.bK,h)).cA(f,b,c,d)>=0){B1(d,a.bd,(-1));return g;}h=h+1|0;}}}return (-1);}
function A2_(a,b){return 0;}
var Tb=G(D_);
function AUS(a,b,c,d){var e,f;e=a.bK.q;B1(d,a.bd,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).cA(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0u(a,b){return 0;}
function HT(){B8.call(this);this.dj=null;}
function A5d(a,b){var c=new HT();AE8(c,a,b);return c;}
function AE8(a,b,c){B6(a);a.dj=b;a.eY=c;a.bd=c.eo;}
function ALT(a,b,c,d){var e,f;e=Gx(d,a.bd);DZ(d,a.bd,b);f=a.dj.c(b,c,d);if(f>=0)return f;DZ(d,a.bd,e);return (-1);}
function AQb(a,b,c,d){var e;e=a.dj.cr(b,c,d);if(e>=0)DZ(d,a.bd,e);return e;}
function A0G(a,b,c,d,e){var f;f=a.dj.cA(b,c,d,e);if(f>=0)DZ(e,a.bd,f);return f;}
function AYt(a,b){return a.dj.b1(b);}
function AZI(a){var b;b=new Pd;AE8(b,a.dj,a.eY);a.e=b;return b;}
function ATW(a){var b;a.cx=1;b=a.eY;if(b!==null&&!b.cx)Kz(b);b=a.dj;if(b!==null&&!b.cx){b=b.gC();if(b!==null){a.dj.cx=1;a.dj=b;}a.dj.eU();}}
function KF(){Dh.call(this);this.hJ=null;}
var G$=G();
function Z(){var a=this;G$.call(a);a.bi=0;a.cw=0;a.O=null;a.mi=null;a.mL=null;a.R=0;}
var A9r=null;function Qd(){Qd=Bn(Z);ANo();}
function By(a){var b;Qd();b=new ADs;b.D=BP(64);a.O=b;}
function AVK(a){return null;}
function AVo(a){return a.O;}
function AJX(a){var b,c,d,e,f;if(!a.cw)b=Il(a.O,0)>=2048?0:1;else{a:{c=a.O;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=I6(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I6(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AXz(a){return a.R;}
function A1c(a){return a;}
function AEA(a){var b,c;if(a.mL===null){b=a.fT();c=new U7;c.Fk=a;c.xm=b;By(c);a.mL=c;EO(c,a.cw);}return a.mL;}
function Jz(a){var b,c;if(a.mi===null){b=a.fT();c=new U5;c.Du=a;c.AT=b;c.vJ=a;By(c);a.mi=c;EO(c,a.bi);a.mi.R=a.R;}return a.mi;}
function A2l(a){return 0;}
function EO(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cw=a.cw?0:1;}if(!a.R)a.R=1;return a;}
function AOd(a){return a.bi;}
function Nv(b,c){Qd();return b.n(c);}
function J1(b,c){var d,e;Qd();if(b.dW()!==null&&c.dW()!==null){b=b.dW();c=c.dW();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Sc(b,c){var d,e,f;Qd();d=0;while(true){ASn();e=A9s.data;if(d>=e.length){f=new MM;Bm(f,C(21));f.D6=C(21);f.Fo=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AKz(e[1],c);}
function ANo(){var b;b=new Hk;ASn();A9r=b;}
function AE1(){var a=this;Z.call(a);a.pD=0;a.q1=0;a.h0=0;a.no=0;a.ey=0;a.gz=0;a.J=null;a.bD=null;}
function DF(){var a=new AE1();AUp(a);return a;}
function A1M(a,b){var c=new AE1();ANd(c,a,b);return c;}
function AUp(a){By(a);a.J=A3b();}
function ANd(a,b,c){By(a);a.J=A3b();a.pD=b;a.q1=c;}
function CI(a,b){a:{if(a.pD){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ey){OG(a.J,JA(b&65535));break a;}LQ(a.J,JA(b&65535));break a;}if(a.q1&&b>128){a.h0=1;b=G5(G3(b));}}}if(!(!SC(b)&&!Qj(b))){if(a.no)OG(a.O,b-55296|0);else LQ(a.O,b-55296|0);}if(a.ey)OG(a.J,b);else LQ(a.J,b);if(!a.R&&Mm(b))a.R=1;return a;}
function ALk(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(a.no){if(!b.cw)Gg(a.O,b.fT());else Dq(a.O,b.fT());}else if(!b.cw)GB(a.O,b.fT());else{Gu(a.O,b.fT());Dq(a.O,b.fT());a.cw=a.cw?0:1;a.no=1;}if(!a.gz&&b.dW()!==null){if(a.ey){if(!b.bi)Gg(a.J,b.dW());else Dq(a.J,b.dW());}else if(!b.bi)GB(a.J,b.dW());else{Gu(a.J,b.dW());Dq(a.J,b.dW());a.bi=a.bi?0:1;a.ey=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new XV;e.Eu=a;e.BD=c;e.vv=d;e.vl=b;By(e);a.bD=e;}else{e=new XX;e.FA=a;e.to=c;e.y3=d;e.yE=b;By(e);a.bD=e;}}else{if(c&&!a.ey
&&Oy(a.J)){d=new XS;d.EW=a;d.y7=b;By(d);a.bD=d;}else if(!c){d=new XQ;d.pd=a;d.oE=c;d.xP=b;By(d);a.bD=d;}else{d=new XR;d.nO=a;d.mD=c;d.vo=b;By(d);a.bD=d;}a.gz=1;}}return a;}
function Cb(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;Y(d);N(d);}a:{b:{if(!a.pD){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CI(a,b);b=b+1|0;}}if(!a.ey)IT(a.J,b,c+1|0);else{d=a.J;c=c+1|0;if(b>c){d=new BH;Y(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JX(d,b)|IM(d,f));}else{h=d.D.data;h[g]=h[g]&JX(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IM(d,f);}}Hm(d);}}}}return a;}
function AH_(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.h0)a.h0=1;c=a.cw;if(!(c^b.cw)){if(!c)GB(a.O,b.O);else Dq(a.O,b.O);}else if(c)Gg(a.O,b.O);else{Gu(a.O,b.O);Dq(a.O,b.O);a.cw=1;}if(!a.gz&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)GB(a.J,C5(b));else Dq(a.J,C5(b));}else if(c)Gg(a.J,C5(b));else{Gu(a.J,C5(b));Dq(a.J,C5(b));a.bi=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P7;e.Cp=a;e.uJ=c;e.A4=d;e.vS=b;By(e);a.bD=e;}else{e=new Qo;e.CE=a;e.Bq=c;e.qH=d;e.q3=b;By(e);a.bD=e;}}else{if(!a.ey&&Oy(a.J)){if(!c){d=new XT;d.FB
=a;d.sw=b;By(d);a.bD=d;}else{d=new XU;d.Ex=a;d.Bh=b;By(d);a.bD=d;}}else if(!c){d=new XY;d.uM=a;d.tx=b;d.y5=c;By(d);a.bD=d;}else{d=new XZ;d.tR=a;d.t0=b;d.z1=c;By(d);a.bD=d;}a.gz=1;}}}
function Vg(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.h0)a.h0=1;c=a.cw;if(!(c^b.cw)){if(!c)Dq(a.O,b.O);else GB(a.O,b.O);}else if(!c)Gg(a.O,b.O);else{Gu(a.O,b.O);Dq(a.O,b.O);a.cw=0;}if(!a.gz&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dq(a.J,C5(b));else GB(a.J,C5(b));}else if(!c)Gg(a.J,C5(b));else{Gu(a.J,C5(b));Dq(a.J,C5(b));a.bi=0;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P9;e.Et=a;e.Az=c;e.xk=d;e.tm=b;By(e);a.bD=e;}else{e=new P$;e.EA=a;e.Ac=c;e.wQ=d;e.Au=b;By(e);a.bD=e;}}else{if(!a.ey&&Oy(a.J)){if(!c){d=new P5;d.CH
=a;d.yf=b;By(d);a.bD=d;}else{d=new P6;d.Fy=a;d.si=b;By(d);a.bD=d;}}else if(!c){d=new P_;d.Cc=a;d.Bz=b;d.tV=c;By(d);a.bD=d;}else{d=new P4;d.tU=a;d.Ah=b;d.zg=c;By(d);a.bD=d;}a.gz=1;}}}
function Db(a,b){var c;c=a.bD;if(c!==null)return a.bi^c.n(b);return a.bi^DV(a.J,b);}
function C5(a){if(!a.gz)return a.J;return null;}
function AW1(a){return a.O;}
function ATd(a){var b,c;if(a.bD!==null)return a;b=C5(a);c=new P8;c.Eg=a;c.lu=b;By(c);return EO(c,a.bi);}
function AY8(a){var b,c,d;b=new K;M(b);c=Il(a.J,0);while(c>=0){J3(b,HR(c));BM(b,124);c=Il(a.J,c+1|0);}d=b.L;if(d>0)UU(b,d-1|0);return L(b);}
function AOg(a){return a.h0;}
function MM(){var a=this;Bu.call(a);a.D6=null;a.Fo=null;}
function Em(){BS.call(this);this.N=null;}
function Dt(a,b,c,d){NM(a,c);a.N=b;a.jT=d;}
function A22(a){return a.N;}
function ASy(a,b){return !a.N.b1(b)&&!a.e.b1(b)?0:1;}
function A1N(a,b){return 1;}
function AQt(a){var b;a.cx=1;b=a.e;if(b!==null&&!b.cx){b=b.gC();if(b!==null){a.e.cx=1;a.e=b;}a.e.eU();}b=a.N;if(b!==null){if(!b.cx){b=b.gC();if(b!==null){a.N.cx=1;a.N=b;}a.N.eU();}else if(b instanceof HT&&b.eY.oX)a.N=b.e;}}
function Dc(){Em.call(this);this.be=null;}
function A36(a,b,c){var d=new Dc();Ff(d,a,b,c);return d;}
function Ff(a,b,c,d){Dt(a,b,c,d);a.be=b;}
function AUT(a,b,c,d){var e,f;e=0;a:{while((b+a.be.ca()|0)<=d.z){f=a.be.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.ca()|0;e=e+(-1)|0;}return f;}
function FT(){Dc.call(this);this.kV=null;}
function A4M(a,b,c,d){var e=new FT();Sg(e,a,b,c,d);return e;}
function Sg(a,b,c,d,e){Ff(a,c,d,e);a.kV=b;}
function AVx(a,b,c,d){var e,f,g,h,i;e=a.kV;f=e.fL;g=e.fK;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.ca()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.ca()|0;h=h+(-1)|0;}return i;}if((b+a.be.ca()|0)>d.z){d.dM=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C0=G(Em);
function AU4(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E7=G(Dc);
function AYK(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AUy(a,b){a.e=b;a.N.T(b);}
var U8=G(Dc);
function A2U(a,b,c,d){while((b+a.be.ca()|0)<=d.z&&a.be.bz(b,c)>0){b=b+a.be.ca()|0;}return a.e.c(b,c,d);}
function AQT(a,b,c,d){var e,f,g;e=a.e.cr(b,c,d);if(e<0)return (-1);f=e-a.be.ca()|0;while(f>=b&&a.be.bz(f,c)>0){g=f-a.be.ca()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nQ=null;a.m_=null;}
function AKz(a,b){if(!b&&a.nQ===null)a.nQ=a.F();else if(b&&a.m_===null)a.m_=EO(a.F(),1);if(b)return a.m_;return a.nQ;}
var Du=G(BU);
function WC(){var a=this;G$.call(a);a.fL=0;a.fK=0;}
function AZc(a){var b,c,d,e,f;b=a.fL;c=a.fK;d=c!=2147483647?J4(c):C(21);e=new K;M(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return L(e);}
var XF=G(BS);
function APC(a,b,c,d){return b;}
function AZH(a,b){return 0;}
function ADs(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A3b(){var a=new ADs();AV8(a);return a;}
function AV8(a){a.D=BP(0);}
function LQ(a,b){var c,d;c=b/32|0;if(b>=a.bt){J5(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IT(a,b,c){var d,e,f,g,h;d=BK(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){J5(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IM(a,b)&JX(a,c);}else{g=a.D.data;g[d]=g[d]|IM(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JX(a,c);}}}
function IM(a,b){return (-1)<<(b%32|0);}
function JX(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function OG(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))Hm(a);}}
function DV(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Il(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return I6(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I6(e[f])|0;f=f+1|0;}return (-1);}
function J5(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=Jj(a.D,c);}
function Hm(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Xi(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dq(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);Hm(a);}
function Gg(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hm(a);}
function GB(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J5(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gu(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J5(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hm(a);}
function Oy(a){return a.bt?0:1;}
function O3(){var a=this;B8.call(a);a.sl=null;a.Ef=0;}
function Rh(){var a=this;B8.call(a);a.n8=null;a.pO=null;}
function AGv(a,b){var c=new Rh();AHO(c,a,b);return c;}
function AHO(a,b,c){B6(a);a.n8=b;a.pO=c;}
function AMn(a,b,c,d){var e,f,g,h,i;e=a.n8.c(b,c,d);if(e<0)a:{f=a.pO;g=d.c_;e=d.z;h=b+1|0;e=BK(h,e);if(e>0){d.dM=1;e=(-1);}else{i=P(c,b);if(!f.sl.n(i))e=(-1);else{if(CS(i)){if(e<0&&Dl(P(c,h))){e=(-1);break a;}}else if(Dl(i)&&b>g&&CS(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AZA(a,b){a.e=b;a.pO.e=b;a.n8.T(b);}
function AMR(a,b){return 1;}
function AMF(a,b){return 1;}
function D4(){var a=this;B8.call(a);a.d_=null;a.C2=0;}
function AYd(a){var b=new D4();ABS(b,a);return b;}
function ABS(a,b){B6(a);a.d_=b.l5();a.C2=b.bi;}
function AWW(a,b,c,d){var e,f,g,h;e=d.z;if(b<e){f=b+1|0;g=P(c,b);if(a.n(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jr(g,f)&&a.n(EP(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOt(a,b){return a.d_.n(b);}
function AMj(a,b){if(b instanceof Ef)return Nv(a.d_,b.g3);if(b instanceof EM)return Nv(a.d_,b.dH);if(b instanceof D4)return J1(a.d_,b.d_);if(!(b instanceof EE))return 1;return J1(a.d_,b.gt);}
function APv(a){return a.d_;}
function A08(a,b){a.e=b;}
function AN9(a,b){return 1;}
var MJ=G(D4);
function APk(a,b){return a.d_.n(G5(G3(b)));}
function AEV(){var a=this;Cc.call(a);a.yN=null;a.CS=0;}
function AOQ(a){var b=new AEV();AQ3(b,a);return b;}
function AQ3(a,b){D0(a);a.yN=b.l5();a.CS=b.bi;}
function AYh(a,b,c){return !a.yN.n(FL(Fo(P(c,b))))?(-1):1;}
function EE(){var a=this;Cc.call(a);a.gt=null;a.Dc=0;}
function AS_(a){var b=new EE();ARM(b,a);return b;}
function ARM(a,b){D0(a);a.gt=b.l5();a.Dc=b.bi;}
function Wi(a,b,c){return !a.gt.n(P(c,b))?(-1):1;}
function ARx(a,b){if(b instanceof EM)return Nv(a.gt,b.dH);if(b instanceof EE)return J1(a.gt,b.gt);if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return 0;}return J1(a.gt,b.d_);}
function X2(){var a=this;B8.call(a);a.i_=null;a.p2=null;a.kT=0;}
function A1A(a,b){var c=new X2();AU5(c,a,b);return c;}
function AU5(a,b,c){B6(a);a.i_=b;a.kT=c;}
function AQi(a,b){a.e=b;}
function Rv(a){if(a.p2===null)a.p2=Hs(a.i_);return a.p2;}
function ALC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.z;f=BP(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DX([k,l]):DX([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kT;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.i_.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kT==3){k=f[0];m=a.i_.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kT==2){b=f[0];m=a.i_.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AVS(a,b){return b instanceof X2&&!Bj(Rv(b),Rv(a))?0:1;}
function ATi(a,b){return 1;}
function EM(){Cc.call(this);this.dH=0;}
function AE$(a){var b=new EM();ARQ(b,a);return b;}
function ARQ(a,b){D0(a);a.dH=b;}
function AX8(a){return 1;}
function AOO(a,b,c){return a.dH!=P(c,b)?(-1):1;}
function ANV(a,b,c,d){var e,f,g;if(!(c instanceof BJ))return II(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=J0(c,a.dH,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function APx(a,b,c,d,e){var f;if(!(d instanceof BJ))return IP(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hx(d,a.dH,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATa(a,b){if(b instanceof EM)return b.dH!=a.dH?0:1;if(!(b instanceof EE)){if(b instanceof D4)return b.n(a.dH);if(!(b instanceof Ef))return 1;return 0;}return Wi(b,0,Vq(a.dH))<=0?0:1;}
function AHA(){Cc.call(this);this.wG=0;}
function A0e(a){var b=new AHA();AY4(b,a);return b;}
function AY4(a,b){D0(a);a.wG=FL(Fo(b));}
function AUG(a,b,c){return a.wG!=FL(Fo(P(c,b)))?(-1):1;}
function AEi(){var a=this;Cc.call(a);a.vY=0;a.xi=0;}
function AWb(a){var b=new AEi();ASk(b,a);return b;}
function ASk(a,b){D0(a);a.vY=b;a.xi=JA(b);}
function ALL(a,b,c){return a.vY!=P(c,b)&&a.xi!=P(c,b)?(-1):1;}
function FX(){var a=this;B8.call(a);a.jM=0;a.m5=null;a.mA=null;a.mu=0;}
function A5J(a,b){var c=new FX();PM(c,a,b);return c;}
function PM(a,b,c){B6(a);a.jM=1;a.mA=b;a.mu=c;}
function A2t(a,b){a.e=b;}
function ARi(a,b,c,d){var e,f,g,h,i,j,k,l;e=BP(4);f=d.z;if(b>=f)return (-1);g=Ll(a,b,c,f);h=b+a.jM|0;i=AKV(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Ll(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AKV(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jM|0;if(h>=f){b=k;break a;}g=Ll(a,h,c,f);b=k;}}}if(b!=a.mu)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.mA.data[g])break;g=g+1|0;}return (-1);}
function Ve(a){var b,c;if(a.m5===null){b=new K;M(b);c=0;while(c<a.mu){J3(b,HR(a.mA.data[c]));c=c+1|0;}a.m5=L(b);}return a.m5;}
function Ll(a,b,c,d){var e,f,g;a.jM=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jr(e,f)){g=B5(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CS(g[0])&&Dl(g[1])?EP(g[0],g[1]):g[0];a.jM=2;}}return e;}
function APD(a,b){return b instanceof FX&&!Bj(Ve(b),Ve(a))?0:1;}
function A0d(a,b){return 1;}
var VB=G(FX);
var ABq=G(FX);
var We=G(C0);
function AWo(a,b,c,d){var e;while(true){e=a.N.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var YC=G(C0);
function AY0(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.N.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var GE=G(C0);
function A06(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A10(a,b){a.e=b;a.N.T(b);}
var QB=G(GE);
function APt(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AZe(a,b){a.e=b;}
function Go(){var a=this;C0.call(a);a.ha=null;a.dN=0;}
function A9t(a,b,c,d,e){var f=new Go();MI(f,a,b,c,d,e);return f;}
function MI(a,b,c,d,e,f){Dt(a,c,d,e);a.ha=b;a.dN=f;}
function A28(a,b,c,d){var e,f;e=WA(d,a.dN);if(!a.N.I(d))return a.e.c(b,c,d);if(e>=a.ha.fK)return a.e.c(b,c,d);f=a.dN;e=e+1|0;EU(d,f,e);f=a.N.c(b,c,d);if(f>=0){EU(d,a.dN,0);return f;}f=a.dN;e=e+(-1)|0;EU(d,f,e);if(e>=a.ha.fL)return a.e.c(b,c,d);EU(d,a.dN,0);return (-1);}
var Ph=G(Go);
function AO3(a,b,c,d){var e,f,g;e=0;f=a.ha.fK;a:{while(true){g=a.N.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.ha.fL)return (-1);return a.e.c(b,c,d);}
var RZ=G(C0);
function AT2(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var Zh=G(GE);
function AMS(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.N.c(b,c,d);return e;}
var TP=G(Go);
function AVh(a,b,c,d){var e,f,g;e=WA(d,a.dN);if(!a.N.I(d))return a.e.c(b,c,d);f=a.ha;if(e>=f.fK){EU(d,a.dN,0);return a.e.c(b,c,d);}if(e<f.fL){EU(d,a.dN,e+1|0);g=a.N.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EU(d,a.dN,0);return g;}EU(d,a.dN,e+1|0);g=a.N.c(b,c,d);}return g;}
var R0=G(Em);
function A2Y(a,b,c,d){var e;e=d.z;if(e>b)return a.e.cA(b,e,c,d);return a.e.c(b,c,d);}
function ASW(a,b,c,d){var e;e=d.z;if(a.e.cA(b,e,c,d)>=0)return b;return (-1);}
function XM(){Em.call(this);this.m9=null;}
function ARy(a,b,c,d){var e,f;e=d.z;f=AB5(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cA(b,e,c,d);return a.e.c(b,c,d);}
function ALD(a,b,c,d){var e,f,g,h;e=d.z;f=a.e.cr(b,c,d);if(f<0)return (-1);g=AB5(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cA(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.m9.iR(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AB5(a,b,c,d){while(true){if(b>=c)return (-1);if(a.m9.iR(P(d,b)))break;b=b+1|0;}return b;}
var FB=G();
var A9u=null;var A9v=null;function Yn(b){var c;if(!(b&1)){c=A9v;if(c!==null)return c;c=new ACp;A9v=c;return c;}c=A9u;if(c!==null)return c;c=new ACo;A9u=c;return c;}
var AEf=G(Dc);
function AMa(a,b,c,d){var e;a:{while(true){if((b+a.be.ca()|0)>d.z)break a;e=a.be.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var U3=G(E7);
function AQI(a,b,c,d){var e;if((b+a.be.ca()|0)<=d.z){e=a.be.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Ya=G(FT);
function A0J(a,b,c,d){var e,f,g,h,i;e=a.kV;f=e.fL;g=e.fK;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.ca()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.ca()|0)>d.z){d.dM=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Zg=G(Dc);
function ARu(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.ca()|0)<=d.z){e=a.be.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ABB=G(E7);
function AMh(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var RP=G(FT);
function A0Z(a,b,c,d){var e,f,g,h,i,j;e=a.kV;f=e.fL;g=e.fK;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.ca()|0)<=d.z){i=a.be.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.ca()|0)>d.z){d.dM=1;return (-1);}j=a.be.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Lj=G(BS);
function AYv(a,b,c,d){if(b&&!(d.gA&&b==d.c_))return (-1);return a.e.c(b,c,d);}
function AXY(a,b){return 0;}
function AFe(){BS.call(this);this.vy=0;}
function A1r(a){var b=new AFe();APn(b,a);return b;}
function APn(a,b){B6(a);a.vy=b;}
function AVI(a,b,c,d){var e,f,g;e=b<d.z?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kB?0:d.c_;return (e!=32&&!Zk(a,e,b,g,c)?0:1)^(f!=32&&!Zk(a,f,b-1|0,g,c)?0:1)^a.vy?(-1):a.e.c(b,c,d);}
function AVR(a,b){return 0;}
function Zk(a,b,c,d,e){var f;if(!KO(b)&&b!=95){a:{if(CE(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KO(f))return 0;if(CE(f)!=6)return 1;}}return 1;}return 0;}
var XJ=G(BS);
function APm(a,b,c,d){if(b!=d.iX)return (-1);return a.e.c(b,c,d);}
function AUq(a,b){return 0;}
function Vu(){BS.call(this);this.he=0;}
function A4d(a){var b=new Vu();AKO(b,a);return b;}
function AKO(a,b){B6(a);a.he=b;}
function AZ2(a,b,c,d){var e,f,g;e=!d.gA?J(c):d.z;if(b>=e){B1(d,a.he,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){B1(d,a.he,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B1(d,a.he,0);return a.e.c(b,c,d);}
function AWh(a,b){var c;c=!DE(b,a.he)?0:1;B1(b,a.he,(-1));return c;}
var ADc=G(BS);
function AZy(a,b,c,d){if(b<(d.kB?J(c):d.z))return (-1);d.dM=1;d.Fe=1;return a.e.c(b,c,d);}
function AUF(a,b){return 0;}
function WV(){BS.call(this);this.zl=null;}
function AWc(a,b,c,d){a:{if(b!=d.z){if(!b)break a;if(d.gA&&b==d.c_)break a;if(a.zl.Af(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOA(a,b){return 0;}
var AHl=G(B8);
function A4k(){var a=new AHl();AZo(a);return a;}
function AZo(a){B6(a);}
function AT5(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dM=1;return (-1);}g=P(c,b);if(CS(g)){h=b+2|0;if(h<=e&&Jr(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AVU(a,b){a.e=b;}
function AZk(a){return (-2147483602);}
function AVT(a,b){return 1;}
function AE0(){B8.call(this);this.ns=null;}
function A4a(a){var b=new AE0();AM9(b,a);return b;}
function AM9(a,b){B6(a);a.ns=b;}
function AZs(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dM=1;return (-1);}g=P(c,b);if(CS(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jr(g,h))return a.ns.iR(EP(g,h))?(-1):a.e.c(b,c,d);}}return a.ns.iR(g)?(-1):a.e.c(f,c,d);}
function A0A(a,b){a.e=b;}
function ALq(a){return (-2147483602);}
function AUg(a,b){return 1;}
function AKT(){BS.call(this);this.jH=0;}
function A3U(a){var b=new AKT();AXi(b,a);return b;}
function AXi(a,b){B6(a);a.jH=b;}
function APH(a,b,c,d){var e;e=!d.gA?J(c):d.z;if(b>=e){B1(d,a.jH,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){B1(d,a.jH,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AXh(a,b){var c;c=!DE(b,a.jH)?0:1;B1(b,a.jH,(-1));return c;}
function AJ0(){BS.call(this);this.iK=0;}
function A3I(a){var b=new AJ0();AXA(b,a);return b;}
function AXA(a,b){B6(a);a.iK=b;}
function ARc(a,b,c,d){if((!d.gA?J(c)-b|0:d.z-b|0)<=0){B1(d,a.iK,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);B1(d,a.iK,1);return a.e.c(b+1|0,c,d);}
function AXb(a,b){var c;c=!DE(b,a.iK)?0:1;B1(b,a.iK,(-1));return c;}
function AH$(){BS.call(this);this.gO=0;}
function A3p(a){var b=new AH$();A2$(b,a);return b;}
function A2$(a,b){B6(a);a.gO=b;}
function AXU(a,b,c,d){var e,f,g;e=!d.gA?J(c)-b|0:d.z-b|0;if(!e){B1(d,a.gO,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B1(d,a.gO,0);return a.e.c(b,c,d);case 13:if(g!=10){B1(d,a.gO,0);return a.e.c(b,c,d);}B1(d,a.gO,0);return a.e.c(b,c,d);default:}return (-1);}
function ANb(a,b){var c;c=!DE(b,a.gO)?0:1;B1(b,a.gO,(-1));return c;}
function Ie(){var a=this;B8.call(a);a.qW=0;a.hA=0;}
function A5H(a,b){var c=new Ie();Qi(c,a,b);return c;}
function Qi(a,b,c){B6(a);a.qW=b;a.hA=c;}
function AMd(a,b,c,d){var e,f,g,h;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hA,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&JA(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AZ_(a,b){a.e=b;}
function GP(a,b){var c,d;c=a.qW;d=Gx(b,c);c=I$(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nv)?Cw(b.nv,d,c):null;}
function ASd(a,b){var c;c=!DE(b,a.hA)?0:1;B1(b,a.hA,(-1));return c;}
var AKZ=G(Ie);
function A4y(a,b){var c=new AKZ();A1Q(c,a,b);return c;}
function A1Q(a,b,c){Qi(a,b,c);}
function ANf(a,b,c,d){var e,f;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=!ABR(c,e,b)?(-1):J(e);if(f<0)return (-1);B1(d,a.hA,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ATp(a,b,c,d){var e,f;e=GP(a,d);f=d.c_;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=YD(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AL1(a,b,c,d,e){var f,g;f=GP(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=QS(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AYV(a,b){return 1;}
var AJl=G(Ie);
function A3J(a,b){var c=new AJl();AOy(c,a,b);return c;}
function AOy(a,b,c){Qi(a,b,c);}
function AP9(a,b,c,d){var e,f;e=GP(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hA,J(e));return a.e.c(b+J(e)|0,c,d);}if(FL(Fo(P(e,f)))!=FL(Fo(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PX=G(GT);
function AOj(a,b,c,d,e){WF(a,b,c,d,e);return a;}
function AVL(a,b,c,d){ADA(a,b,c,d);return a;}
function AV7(a,b){M3(a,b);}
function A1f(a,b,c){ADQ(a,b,c);return a;}
function ZU(){var a=this;Cc.call(a);a.cG=null;a.o8=null;a.nC=null;}
function ANu(a,b,c){return !Lh(a,c,b)?(-1):a.bI;}
function AVG(a,b,c,d){var e,f,g;e=d.z;while(true){if(b>e)return (-1);f=P(a.cG,a.bI-1|0);a:{while(true){g=a.bI;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lh(a,c,b))break;b=b+AAy(a.o8,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bI|0,c,d)>=0)break;b=b+1|0;}return b;}
function AXm(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cG,0);g=(J(d)-c|0)-a.bI|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lh(a,d,c))break;c=c-AAy(a.nC,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bI|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOT(a,b){var c;if(b instanceof EM)return b.dH!=P(a.cG,0)?0:1;if(b instanceof EE)return Wi(b,0,Cw(a.cG,0,1))<=0?0:1;if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return J(a.cG)>1&&b.g3==EP(P(a.cG,0),P(a.cG,1))?1:0;}a:{b:{b=b;if(!b.n(P(a.cG,0))){if(J(a.cG)<=1)break b;if(!b.n(EP(P(a.cG,0),P(a.cG,1))))break b;}c=1;break a;}c=0;}return c;}
function Lh(a,b,c){var d;d=0;while(d<a.bI){if(P(b,d+c|0)!=P(a.cG,d))return 0;d=d+1|0;}return 1;}
function AEh(){Cc.call(this);this.lX=null;}
function A5I(a){var b=new AEh();A1x(b,a);return b;}
function A1x(a,b){var c,d,e;D0(a);c=new K;M(c);d=0;while(true){e=BK(d,b.L);if(e>=0){a.lX=L(c);a.bI=c.L;return;}if(d<0)break;if(e>=0)break;BM(c,FL(Fo(b.C.data[d])));d=d+1|0;}b=new BH;Y(b);N(b);}
function AQd(a,b,c){var d;d=0;while(true){if(d>=J(a.lX))return J(a.lX);if(P(a.lX,d)!=FL(Fo(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Pk(){Cc.call(this);this.jE=null;}
function A0K(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jE))return J(a.jE);e=P(a.jE,d);f=b+d|0;if(e!=P(c,f)&&JA(P(a.jE,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hk=G();
var A9w=null;var A9x=null;var A9s=null;function ASn(){ASn=Bn(Hk);ANK();}
function ANK(){A9w=A4g();A9x=A40();A9s=I($rt_arraycls(B),[I(B,[C(470),A4n()]),I(B,[C(471),A3n()]),I(B,[C(472),A5u()]),I(B,[C(473),A5y()]),I(B,[C(474),A9x]),I(B,[C(475),A47()]),I(B,[C(476),A3N()]),I(B,[C(477),A4A()]),I(B,[C(478),A4x()]),I(B,[C(479),A3v()]),I(B,[C(480),A3C()]),I(B,[C(481),A4D()]),I(B,[C(482),A35()]),I(B,[C(483),A3j()]),I(B,[C(484),A5w()]),I(B,[C(485),A3B()]),I(B,[C(486),A45()]),I(B,[C(487),A4L()]),I(B,[C(488),A46()]),I(B,[C(489),A3x()]),I(B,[C(490),A5B()]),I(B,[C(491),A4G()]),I(B,[C(492),A3W()]),
I(B,[C(493),A5s()]),I(B,[C(494),A5p()]),I(B,[C(495),A4h()]),I(B,[C(496),A3w()]),I(B,[C(497),A5i()]),I(B,[C(498),A9w]),I(B,[C(499),A3Z()]),I(B,[C(500),A4C()]),I(B,[C(501),A9w]),I(B,[C(502),A3h()]),I(B,[C(503),A9x]),I(B,[C(504),A3F()]),I(B,[C(505),R(0,127)]),I(B,[C(506),R(128,255)]),I(B,[C(507),R(256,383)]),I(B,[C(508),R(384,591)]),I(B,[C(509),R(592,687)]),I(B,[C(510),R(688,767)]),I(B,[C(511),R(768,879)]),I(B,[C(512),R(880,1023)]),I(B,[C(513),R(1024,1279)]),I(B,[C(514),R(1280,1327)]),I(B,[C(515),R(1328,1423)]),
I(B,[C(516),R(1424,1535)]),I(B,[C(517),R(1536,1791)]),I(B,[C(518),R(1792,1871)]),I(B,[C(519),R(1872,1919)]),I(B,[C(520),R(1920,1983)]),I(B,[C(521),R(2304,2431)]),I(B,[C(522),R(2432,2559)]),I(B,[C(523),R(2560,2687)]),I(B,[C(524),R(2688,2815)]),I(B,[C(525),R(2816,2943)]),I(B,[C(526),R(2944,3071)]),I(B,[C(527),R(3072,3199)]),I(B,[C(528),R(3200,3327)]),I(B,[C(529),R(3328,3455)]),I(B,[C(530),R(3456,3583)]),I(B,[C(531),R(3584,3711)]),I(B,[C(532),R(3712,3839)]),I(B,[C(533),R(3840,4095)]),I(B,[C(534),R(4096,4255)]),
I(B,[C(535),R(4256,4351)]),I(B,[C(536),R(4352,4607)]),I(B,[C(537),R(4608,4991)]),I(B,[C(538),R(4992,5023)]),I(B,[C(539),R(5024,5119)]),I(B,[C(540),R(5120,5759)]),I(B,[C(541),R(5760,5791)]),I(B,[C(542),R(5792,5887)]),I(B,[C(543),R(5888,5919)]),I(B,[C(544),R(5920,5951)]),I(B,[C(545),R(5952,5983)]),I(B,[C(546),R(5984,6015)]),I(B,[C(547),R(6016,6143)]),I(B,[C(548),R(6144,6319)]),I(B,[C(549),R(6400,6479)]),I(B,[C(550),R(6480,6527)]),I(B,[C(551),R(6528,6623)]),I(B,[C(552),R(6624,6655)]),I(B,[C(553),R(6656,6687)]),
I(B,[C(554),R(7424,7551)]),I(B,[C(555),R(7552,7615)]),I(B,[C(556),R(7616,7679)]),I(B,[C(557),R(7680,7935)]),I(B,[C(558),R(7936,8191)]),I(B,[C(559),R(8192,8303)]),I(B,[C(560),R(8304,8351)]),I(B,[C(561),R(8352,8399)]),I(B,[C(562),R(8400,8447)]),I(B,[C(563),R(8448,8527)]),I(B,[C(564),R(8528,8591)]),I(B,[C(565),R(8592,8703)]),I(B,[C(566),R(8704,8959)]),I(B,[C(567),R(8960,9215)]),I(B,[C(568),R(9216,9279)]),I(B,[C(569),R(9280,9311)]),I(B,[C(570),R(9312,9471)]),I(B,[C(571),R(9472,9599)]),I(B,[C(572),R(9600,9631)]),
I(B,[C(573),R(9632,9727)]),I(B,[C(574),R(9728,9983)]),I(B,[C(575),R(9984,10175)]),I(B,[C(576),R(10176,10223)]),I(B,[C(577),R(10224,10239)]),I(B,[C(578),R(10240,10495)]),I(B,[C(579),R(10496,10623)]),I(B,[C(580),R(10624,10751)]),I(B,[C(581),R(10752,11007)]),I(B,[C(582),R(11008,11263)]),I(B,[C(583),R(11264,11359)]),I(B,[C(584),R(11392,11519)]),I(B,[C(585),R(11520,11567)]),I(B,[C(586),R(11568,11647)]),I(B,[C(587),R(11648,11743)]),I(B,[C(588),R(11776,11903)]),I(B,[C(589),R(11904,12031)]),I(B,[C(590),R(12032,12255)]),
I(B,[C(591),R(12272,12287)]),I(B,[C(592),R(12288,12351)]),I(B,[C(593),R(12352,12447)]),I(B,[C(594),R(12448,12543)]),I(B,[C(595),R(12544,12591)]),I(B,[C(596),R(12592,12687)]),I(B,[C(597),R(12688,12703)]),I(B,[C(598),R(12704,12735)]),I(B,[C(599),R(12736,12783)]),I(B,[C(600),R(12784,12799)]),I(B,[C(601),R(12800,13055)]),I(B,[C(602),R(13056,13311)]),I(B,[C(603),R(13312,19893)]),I(B,[C(604),R(19904,19967)]),I(B,[C(605),R(19968,40959)]),I(B,[C(606),R(40960,42127)]),I(B,[C(607),R(42128,42191)]),I(B,[C(608),R(42752,
42783)]),I(B,[C(609),R(43008,43055)]),I(B,[C(610),R(44032,55203)]),I(B,[C(611),R(55296,56191)]),I(B,[C(612),R(56192,56319)]),I(B,[C(613),R(56320,57343)]),I(B,[C(614),R(57344,63743)]),I(B,[C(615),R(63744,64255)]),I(B,[C(616),R(64256,64335)]),I(B,[C(617),R(64336,65023)]),I(B,[C(618),R(65024,65039)]),I(B,[C(619),R(65040,65055)]),I(B,[C(620),R(65056,65071)]),I(B,[C(621),R(65072,65103)]),I(B,[C(622),R(65104,65135)]),I(B,[C(623),R(65136,65279)]),I(B,[C(624),R(65280,65519)]),I(B,[C(625),R(0,1114111)]),I(B,[C(626),
A4E()]),I(B,[C(627),B4(0,1)]),I(B,[C(628),Kj(62,1)]),I(B,[C(629),B4(1,1)]),I(B,[C(630),B4(2,1)]),I(B,[C(631),B4(3,0)]),I(B,[C(632),B4(4,0)]),I(B,[C(633),B4(5,1)]),I(B,[C(634),Kj(448,1)]),I(B,[C(635),B4(6,1)]),I(B,[C(636),B4(7,0)]),I(B,[C(637),B4(8,1)]),I(B,[C(638),Kj(3584,1)]),I(B,[C(639),B4(9,1)]),I(B,[C(640),B4(10,1)]),I(B,[C(641),B4(11,1)]),I(B,[C(642),Kj(28672,0)]),I(B,[C(643),B4(12,0)]),I(B,[C(644),B4(13,0)]),I(B,[C(645),B4(14,0)]),I(B,[C(646),A4X(983040,1,1)]),I(B,[C(647),B4(15,0)]),I(B,[C(648),B4(16,
1)]),I(B,[C(649),B4(18,1)]),I(B,[C(650),A3T(19,0,1)]),I(B,[C(651),Kj(1643118592,1)]),I(B,[C(652),B4(20,0)]),I(B,[C(653),B4(21,0)]),I(B,[C(654),B4(22,0)]),I(B,[C(655),B4(23,0)]),I(B,[C(656),B4(24,1)]),I(B,[C(657),Kj(2113929216,1)]),I(B,[C(658),B4(25,1)]),I(B,[C(659),B4(26,0)]),I(B,[C(660),B4(27,0)]),I(B,[C(661),B4(28,1)]),I(B,[C(662),B4(29,0)]),I(B,[C(663),B4(30,0)])]);}
function Wn(){Cc.call(this);this.s$=0;}
function ASD(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.s$!=G5(G3(EP(e,d)))?(-1):2;}
function NU(){B8.call(this);this.hn=0;}
function AQ_(a){var b=new NU();AMW(b,a);return b;}
function AMW(a,b){B6(a);a.hn=b;}
function AZF(a,b){a.e=b;}
function AWi(a,b,c,d){var e,f;e=b+1|0;if(e>d.z){d.dM=1;return (-1);}f=P(c,b);if(b>d.c_&&CS(P(c,b-1|0)))return (-1);if(a.hn!=f)return (-1);return a.e.c(e,c,d);}
function AOR(a,b,c,d){var e,f,g,h;if(!(c instanceof BJ))return II(a,b,c,d);e=d.c_;f=d.z;while(true){if(b>=f)return (-1);g=J0(c,a.hn,b);if(g<0)return (-1);if(g>e&&CS(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AWH(a,b,c,d,e){var f,g;if(!(d instanceof BJ))return IP(a,b,c,d,e);f=e.c_;a:{while(true){if(c<b)return (-1);g=Hx(d,a.hn,c);if(g<0)break a;if(g<b)break a;if(g>f&&CS(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AL0(a,b){if(b instanceof EM)return 0;if(b instanceof EE)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof N2)return 0;if(!(b instanceof NU))return 1;return b.hn!=a.hn?0:1;}
function AS5(a,b){return 1;}
function N2(){B8.call(this);this.g$=0;}
function AXX(a){var b=new N2();ARa(b,a);return b;}
function ARa(a,b){B6(a);a.g$=b;}
function AV6(a,b){a.e=b;}
function ALG(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;g=BK(f,e);if(g>0){d.dM=1;return (-1);}h=P(c,b);if(g<0&&Dl(P(c,f)))return (-1);if(a.g$!=h)return (-1);return a.e.c(f,c,d);}
function AZQ(a,b,c,d){var e,f;if(!(c instanceof BJ))return II(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=J0(c,a.g$,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dl(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ASz(a,b,c,d,e){var f,g;if(!(d instanceof BJ))return IP(a,b,c,d,e);f=e.z;a:{while(true){if(c<b)return (-1);g=Hx(d,a.g$,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dl(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ANv(a,b){if(b instanceof EM)return 0;if(b instanceof EE)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof NU)return 0;if(!(b instanceof N2))return 1;return b.g$!=a.g$?0:1;}
function AZW(a,b){return 1;}
function Ef(){var a=this;Cc.call(a);a.mp=0;a.lr=0;a.g3=0;}
function A0l(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.mp==e&&a.lr==d?2:(-1);}
function AY9(a,b,c,d){var e,f;if(!(c instanceof BJ))return II(a,b,c,d);e=d.z;while(b<e){b=J0(c,a.mp,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.lr==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AMX(a,b,c,d,e){var f;if(!(d instanceof BJ))return IP(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hx(d,a.lr,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.mp==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A0f(a,b){if(b instanceof Ef)return b.g3!=a.g3?0:1;if(b instanceof D4)return b.n(a.g3);if(b instanceof EM)return 0;if(!(b instanceof EE))return 1;return 0;}
var ACo=G(FB);
function AM1(a,b){return b!=10?0:1;}
function ASa(a,b,c){return b!=10?0:1;}
var ACp=G(FB);
function A00(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ATR(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGL(){var a=this;B.call(a);a.os=null;a.mC=null;a.jm=0;a.wl=0;}
function AZj(a){var b=new AGL();APl(b,a);return b;}
function APl(a,b){var c,d;while(true){c=a.jm;if(b<c)break;a.jm=c<<1|1;}d=c<<1|1;a.jm=d;d=d+1|0;a.os=BP(d);a.mC=BP(d);a.wl=b;}
function RQ(a,b,c){var d,e,f,g;d=0;e=a.jm;f=b&e;while(true){g=a.os.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mC.data[f]=c;}
function AAy(a,b){var c,d,e,f;c=a.jm;d=b&c;e=0;while(true){f=a.os.data[d];if(!f)break;if(f==b)return a.mC.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wl;}
var AEu=G();
var NS=G(Bf);
function A4g(){var a=new NS();AO4(a);return a;}
function AO4(a){}
function AJr(a){return CI(Cb(DF(),9,13),32);}
var Ng=G(Bf);
function A40(){var a=new Ng();ASZ(a);return a;}
function ASZ(a){}
function AJW(a){return Cb(DF(),48,57);}
var AGF=G(Bf);
function A4n(){var a=new AGF();AOF(a);return a;}
function AOF(a){}
function A0D(a){return Cb(DF(),97,122);}
var AG0=G(Bf);
function A3n(){var a=new AG0();APp(a);return a;}
function APp(a){}
function AS8(a){return Cb(DF(),65,90);}
var AG2=G(Bf);
function A5u(){var a=new AG2();AMy(a);return a;}
function AMy(a){}
function AN0(a){return Cb(DF(),0,127);}
var NO=G(Bf);
function A5y(){var a=new NO();ANi(a);return a;}
function ANi(a){}
function AE3(a){return Cb(Cb(DF(),97,122),65,90);}
var LO=G(NO);
function A47(){var a=new LO();APa(a);return a;}
function APa(a){}
function AFx(a){return Cb(AE3(a),48,57);}
var AH1=G(Bf);
function A3N(){var a=new AH1();AY1(a);return a;}
function AY1(a){}
function AXB(a){return Cb(Cb(Cb(DF(),33,64),91,96),123,126);}
var OI=G(LO);
function A4A(){var a=new OI();ARY(a);return a;}
function ARY(a){}
function AH8(a){return Cb(Cb(Cb(AFx(a),33,64),91,96),123,126);}
var AJD=G(OI);
function A4x(){var a=new AJD();ASV(a);return a;}
function ASV(a){}
function AQv(a){return CI(AH8(a),32);}
var AF2=G(Bf);
function A3v(){var a=new AF2();A0L(a);return a;}
function A0L(a){}
function AWw(a){return CI(CI(DF(),32),9);}
var AFa=G(Bf);
function A3C(){var a=new AFa();A2c(a);return a;}
function A2c(a){}
function AQr(a){return CI(Cb(DF(),0,31),127);}
var AIT=G(Bf);
function A4D(){var a=new AIT();AMI(a);return a;}
function AMI(a){}
function ATU(a){return Cb(Cb(Cb(DF(),48,57),97,102),65,70);}
var AKI=G(Bf);
function A35(){var a=new AKI();AVw(a);return a;}
function AVw(a){}
function AZh(a){var b;b=new AAW;b.ET=a;By(b);b.R=1;return b;}
var AH4=G(Bf);
function A3j(){var a=new AH4();AR8(a);return a;}
function AR8(a){}
function AUM(a){var b;b=new Wv;b.EX=a;By(b);b.R=1;return b;}
var AKq=G(Bf);
function A5w(){var a=new AKq();AMA(a);return a;}
function AMA(a){}
function AO8(a){var b;b=new R$;b.EI=a;By(b);return b;}
var AGw=G(Bf);
function A3B(){var a=new AGw();AQs(a);return a;}
function AQs(a){}
function ASj(a){var b;b=new R9;b.CK=a;By(b);return b;}
var AHd=G(Bf);
function A45(){var a=new AHd();ANe(a);return a;}
function ANe(a){}
function AWu(a){var b;b=new Vi;b.DP=a;By(b);IT(b.O,0,2048);b.R=1;return b;}
var AEG=G(Bf);
function A4L(){var a=new AEG();AMZ(a);return a;}
function AMZ(a){}
function ANG(a){var b;b=new X9;b.E9=a;By(b);b.R=1;return b;}
var AIf=G(Bf);
function A46(){var a=new AIf();AQa(a);return a;}
function AQa(a){}
function A2f(a){var b;b=new PU;b.D8=a;By(b);b.R=1;return b;}
var AKx=G(Bf);
function A3x(){var a=new AKx();AQL(a);return a;}
function AQL(a){}
function AUH(a){var b;b=new Zs;b.C3=a;By(b);return b;}
var AGV=G(Bf);
function A5B(){var a=new AGV();AXL(a);return a;}
function AXL(a){}
function API(a){var b;b=new Wr;b.Ch=a;By(b);b.R=1;return b;}
var AJb=G(Bf);
function A4G(){var a=new AJb();AL3(a);return a;}
function AL3(a){}
function ANM(a){var b;b=new Wt;b.Dk=a;By(b);b.R=1;return b;}
var AF4=G(Bf);
function A3W(){var a=new AF4();AM4(a);return a;}
function AM4(a){}
function AXo(a){var b;b=new PB;b.DM=a;By(b);b.R=1;return b;}
var AHL=G(Bf);
function A5s(){var a=new AHL();APN(a);return a;}
function APN(a){}
function AYp(a){var b;b=new Yq;b.Fq=a;By(b);b.R=1;return b;}
var AKC=G(Bf);
function A5p(){var a=new AKC();AZb(a);return a;}
function AZb(a){}
function ATj(a){var b;b=new Yv;b.CR=a;By(b);return b;}
var AFH=G(Bf);
function A4h(){var a=new AFH();AM0(a);return a;}
function AM0(a){}
function ARR(a){var b;b=new ABk;b.E_=a;By(b);return b;}
var AFm=G(Bf);
function A3w(){var a=new AFm();A0q(a);return a;}
function A0q(a){}
function AQX(a){var b;b=new AAr;b.Cj=a;By(b);b.R=1;return b;}
var AH2=G(Bf);
function A5i(){var a=new AH2();AXG(a);return a;}
function AXG(a){}
function A0w(a){var b;b=new O8;b.FC=a;By(b);b.R=1;return b;}
var KG=G(Bf);
function A3Z(){var a=new KG();ANU(a);return a;}
function ANU(a){}
function AF3(a){return CI(Cb(Cb(Cb(DF(),97,122),65,90),48,57),95);}
var AKQ=G(KG);
function A4C(){var a=new AKQ();AXO(a);return a;}
function AXO(a){}
function AQO(a){var b;b=EO(AF3(a),1);b.R=1;return b;}
var AJI=G(NS);
function A3h(){var a=new AJI();ATC(a);return a;}
function ATC(a){}
function AVD(a){var b;b=EO(AJr(a),1);b.R=1;return b;}
var AFk=G(Ng);
function A3F(){var a=new AFk();AYg(a);return a;}
function AYg(a){}
function AOL(a){var b;b=EO(AJW(a),1);b.R=1;return b;}
function AIW(){var a=this;Bf.call(a);a.s3=0;a.zj=0;}
function R(a,b){var c=new AIW();A2e(c,a,b);return c;}
function A2e(a,b,c){a.s3=b;a.zj=c;}
function APX(a){return Cb(DF(),a.s3,a.zj);}
var AI7=G(Bf);
function A4E(){var a=new AI7();ATY(a);return a;}
function ATY(a){}
function ATI(a){return Cb(Cb(DF(),65279,65279),65520,65533);}
function AJw(){var a=this;Bf.call(a);a.p3=0;a.oC=0;a.xW=0;}
function B4(a,b){var c=new AJw();ANa(c,a,b);return c;}
function A3T(a,b,c){var d=new AJw();ATN(d,a,b,c);return d;}
function ANa(a,b,c){a.oC=c;a.p3=b;}
function ATN(a,b,c,d){a.xW=d;a.oC=c;a.p3=b;}
function AW_(a){var b;b=A4m(a.p3);if(a.xW)IT(b.O,0,2048);b.R=a.oC;return b;}
function AJE(){var a=this;Bf.call(a);a.n5=0;a.mF=0;a.q2=0;}
function Kj(a,b){var c=new AJE();ANN(c,a,b);return c;}
function A4X(a,b,c){var d=new AJE();AUI(d,a,b,c);return d;}
function ANN(a,b,c){a.mF=c;a.n5=b;}
function AUI(a,b,c,d){a.q2=d;a.mF=c;a.n5=b;}
function ALw(a){var b;b=new Z0;AGp(b,a.n5);if(a.q2)IT(b.O,0,2048);b.R=a.mF;return b;}
var AIZ=G();
var AEU=G();
function AFG(b){var c,d,e,f,g,h,i;c=ASv(Gt(b));d=M9(c);e=BP(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+M9(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Pg(c);h=h+1|0;}return e;}
function ND(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function WY(){var a=this;B.call(a);a.yo=0;a.tA=0;a.yx=null;}
function AOk(a,b,c){var d=new WY();ASU(d,a,b,c);return d;}
function ASU(a,b,c,d){a.yo=b;a.tA=c;a.yx=d;}
function AGQ(){var a=this;B.call(a);a.xz=null;a.yW=0;}
function ASv(a){var b=new AGQ();AWE(b,a);return b;}
function AWE(a,b){a.xz=b;}
var AJi=G();
function M9(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.xz.data;f=b.yW;b.yW=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Pg(b){var c,d;c=M9(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Mz=G(Bu);
function Zc(){var a=this;B.call(a);a.w3=null;a.w2=null;a.w1=null;}
function AYu(a,b){var c,d,e,f,g;c=a.w3;d=a.w2;e=a.w1;f=new ADU;g=AB7(DW(d));AK5(f,b,null,g);H1(c,f);e.f();}
function Zb(){B.call(this);this.As=null;}
function AT0(a,b){Bk(a.As,b);}
function AIN(){B.call(this);this.S0=null;}
function Sv(){B.call(this);this.sS=null;}
function AXg(a,b){b.hm=a.sS;}
function ACj(){var a=this;B.call(a);a.FD=null;a.kJ=null;}
function AN4(a,b){var c;c=a.kJ;b=b;a.kJ=X7(!c.on&&!b.eP?0:1);return 1;}
function ABJ(){var a=this;B.call(a);a.uW=null;a.uX=null;}
function A1o(a){var b,c;b=a.uW;c=a.uX;Gj(b.x.bw,FU(c));}
function ABM(){var a=this;B.call(a);a.C0=null;a.te=null;}
function ABO(){B.call(this);this.Fi=null;}
function A13(a,b){$rt_globals.console.info($rt_ustr(b));}
var KM=G(0);
function PK(){var a=this;B.call(a);a.lo=0;a.Cl=null;}
function A0b(a,b){var c,d;c=Cl(b);d=new K;M(d);H(H(d,C(664)),c);$rt_globals.console.info($rt_ustr(L(d)));a.lo=a.lo+1|0;Nn(b,a);}
function AXJ(a,b){var c;b=Cl(b);c=new K;M(c);H(H(c,C(665)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ASE(a){var b;b=a.lo-1|0;a.lo=b;if(!b)Bk(Bt(),C(666));}
function R3(){B.call(this);this.sV=null;}
function ARh(a){var b,c,d,e;b=a.sV;c=Bt();d=GC(b);e=new K;M(e);H(H(e,C(667)),d);Bk(c,L(e));c=b.jR;e=new AAU;e.c6=b;e.lQ=BL();e.ml=BL();Nn(c,e);}
function U7(){var a=this;Z.call(a);a.xm=null;a.Fk=null;}
function AN6(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cw^DV(a.xm,c):0;}
function U5(){var a=this;Z.call(a);a.AT=null;a.vJ=null;a.Du=null;}
function AU3(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cw^DV(a.AT,c):0;return a.vJ.n(b)&&!d?1:0;}
function P8(){var a=this;Z.call(a);a.lu=null;a.Eg=null;}
function APO(a,b){return a.bi^DV(a.lu,b);}
function AXq(a){var b,c,d;b=new K;M(b);c=Il(a.lu,0);while(c>=0){J3(b,HR(c));BM(b,124);c=Il(a.lu,c+1|0);}d=b.L;if(d>0)UU(b,d-1|0);return L(b);}
function XS(){var a=this;Z.call(a);a.y7=null;a.EW=null;}
function A0o(a,b){return a.y7.n(b);}
function XQ(){var a=this;Z.call(a);a.oE=0;a.xP=null;a.pd=null;}
function ASC(a,b){return !(a.oE^DV(a.pd.J,b))&&!(a.oE^a.pd.ey^a.xP.n(b))?0:1;}
function XR(){var a=this;Z.call(a);a.mD=0;a.vo=null;a.nO=null;}
function AYH(a,b){return !(a.mD^DV(a.nO.J,b))&&!(a.mD^a.nO.ey^a.vo.n(b))?1:0;}
function XV(){var a=this;Z.call(a);a.BD=0;a.vv=null;a.vl=null;a.Eu=null;}
function AWO(a,b){return a.BD^(!a.vv.n(b)&&!a.vl.n(b)?0:1);}
function XX(){var a=this;Z.call(a);a.to=0;a.y3=null;a.yE=null;a.FA=null;}
function ALr(a,b){return a.to^(!a.y3.n(b)&&!a.yE.n(b)?0:1)?0:1;}
function XT(){var a=this;Z.call(a);a.sw=null;a.FB=null;}
function AOG(a,b){return Db(a.sw,b);}
function XU(){var a=this;Z.call(a);a.Bh=null;a.Ex=null;}
function AQh(a,b){return Db(a.Bh,b)?0:1;}
function XY(){var a=this;Z.call(a);a.tx=null;a.y5=0;a.uM=null;}
function ATs(a,b){return !Db(a.tx,b)&&!(a.y5^DV(a.uM.J,b))?0:1;}
function XZ(){var a=this;Z.call(a);a.t0=null;a.z1=0;a.tR=null;}
function AWq(a,b){return !Db(a.t0,b)&&!(a.z1^DV(a.tR.J,b))?1:0;}
function P7(){var a=this;Z.call(a);a.uJ=0;a.A4=null;a.vS=null;a.Cp=null;}
function A3g(a,b){return !(a.uJ^a.A4.n(b))&&!Db(a.vS,b)?0:1;}
function Qo(){var a=this;Z.call(a);a.Bq=0;a.qH=null;a.q3=null;a.CE=null;}
function AOJ(a,b){return !(a.Bq^a.qH.n(b))&&!Db(a.q3,b)?1:0;}
function P5(){var a=this;Z.call(a);a.yf=null;a.CH=null;}
function ANk(a,b){return Db(a.yf,b);}
function P6(){var a=this;Z.call(a);a.si=null;a.Fy=null;}
function AXe(a,b){return Db(a.si,b)?0:1;}
function P_(){var a=this;Z.call(a);a.Bz=null;a.tV=0;a.Cc=null;}
function APo(a,b){return Db(a.Bz,b)&&a.tV^DV(a.Cc.J,b)?1:0;}
function P4(){var a=this;Z.call(a);a.Ah=null;a.zg=0;a.tU=null;}
function A1s(a,b){return Db(a.Ah,b)&&a.zg^DV(a.tU.J,b)?0:1;}
function P9(){var a=this;Z.call(a);a.Az=0;a.xk=null;a.tm=null;a.Et=null;}
function AVN(a,b){return a.Az^a.xk.n(b)&&Db(a.tm,b)?1:0;}
function P$(){var a=this;Z.call(a);a.Ac=0;a.wQ=null;a.Au=null;a.EA=null;}
function ARL(a,b){return a.Ac^a.wQ.n(b)&&Db(a.Au,b)?0:1;}
var Me=G(0);
function AAq(){var a=this;B.call(a);a.CA=null;a.A5=null;a.lL=null;a.cI=null;a.kq=0;a.o_=0;}
function OX(a,b){var c,d,e;c=J(a.lL);if(b>=0&&b<=c){ADZ(a.cI,null,(-1),(-1));d=a.cI;d.ma=1;d.eR=b;c=d.iX;if(c<0)c=b;d.iX=c;b=a.A5.cr(b,a.lL,d);if(b==(-1))a.cI.dM=1;if(b>=0){d=a.cI;if(d.ky){e=d.ec.data;if(e[0]==(-1)){c=d.eR;e[0]=c;e[1]=c;}d.iX=MG(d);return 1;}}a.cI.eR=(-1);return 0;}d=new BH;Bm(d,Dm(b));N(d);}
function AHK(a){return Qn(a.cI,0);}
function AI9(a){return Sa(a.cI,0);}
function AEy(a){return a.cI.kB;}
function Rm(){var a=this;B.call(a);a.rZ=null;a.r0=null;}
function AZ7(a){var b,c;b=a.rZ;c=a.r0;SE();KK(b,c,A9y);}
function Rk(){var a=this;B.call(a);a.zS=null;a.zR=null;}
function AOC(a){var b,c;b=a.zS;c=a.zR;SE();KK(b,c,A9z);}
function Rl(){var a=this;B.call(a);a.Cb=null;a.B_=null;}
function ATA(a){KK(a.Cb,a.B_,null);}
function Rn(){var a=this;B.call(a);a.yC=null;a.yD=null;}
function ALJ(a){var b,c,d,e,f,g,h;b=a.yC;c=a.yD;d=Ea(b.bu.d);e=HE(b.bu.d);d=ABP(b.bu.fB,d,e);DS(b.gq.bQ);b=b.bu;e=Fy(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new ABe;e.Fn=b;e.Fm=c;d.Kf(f,g,h,1,e,b.j9);}}
function Ss(){B.call(this);this.wS=null;}
function AS$(a){var b;b=a.wS;DS(b.gq.bQ);He(b.bu,Wa(b),0);}
function Sr(){B.call(this);this.ur=null;}
function AYL(a){var b;b=a.ur;DS(b.gq.bQ);He(b.bu,Wa(b),1);}
function Sq(){B.call(this);this.r1=null;}
function AZ1(a){var b,c,d;b=a.r1;DS(b.gq.bQ);c=HU(b);b=b.bu;BC(b);d=new ADa;d.rv=b;RH(c,d,AE5(C(668)));}
function RI(){var a=this;B.call(a);a.zq=null;a.zp=null;}
function AUt(a){var b,c;b=a.zq;c=a.zp;b=b.bu.d;b.pT=c;Mp(b);}
var Q8=G(0);
var A8$=null;function AKp(){A8$=new TB;}
function ZD(){B.call(this);this.AR=null;}
function A2O(a){var b,c,d,e;b=a.AR;c=HU(b);d=b.gq.bQ;e=new R_;e.BU=b;Kf(c,Yo(d,e));}
function AJK(){var a=this;B.call(a);a.O2=null;a.O0=null;a.O3=0.0;}
function Qt(){B.call(this);this.x6=null;}
function ARI(a){AHF(a.x6);}
function Qr(){B.call(this);this.z0=null;}
function AXa(a){Ht(a.z0);}
function Qs(){B.call(this);this.qx=null;}
function A2g(a){AIr(a.qx);}
function T7(){B.call(this);this.z4=null;}
function A0h(a){a.z4.qg();}
function T9(){B.call(this);this.Cf=null;}
function AQS(a){a.Cf.ot();}
function Zd(){B.call(this);this.yV=null;}
function A1i(a){var b,c,d,e,f,g,h,i;b=a.yV;c=(b.rw.cC()).data;d=Q(BN,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new QW;i.sf=b;i.se=h;e[f]=Xc(i,h);f=f+1|0;}return d;}
function ZJ(){B.call(this);this.su=null;}
function AMe(a){a.su.oq.g6(0);}
function ZH(){B.call(this);this.AB=null;}
function ANt(a){a.AB.oq.g6(1);}
function ST(){B.call(this);this.wj=null;}
function ATO(a){var b,c,d,e,f;b=a.wj.d.h;c=b.cq;d=new K;M(d);U(H(d,C(669)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.nu;d=new K;M(d);U(H(d,C(670)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dh;e=Hs(Fa(b));ADl(d,0,d.df,e);b=Bt();f=b.m3;f.data[0]=10;XD(b,f,0,1);}
function SU(){B.call(this);this.sq=null;}
function AMc(a){ZO(a.sq);}
function SV(){B.call(this);this.Ar=null;}
function ANn(a){AA3(a.Ar);}
function SW(){B.call(this);this.xe=null;}
function ATD(a){Oo(a.xe.d);}
function S_(){B.call(this);this.zi=null;}
function AYR(a){VH(a.zi);}
function SX(){B.call(this);this.Bg=null;}
function A2Q(a){var b,c,d,e,f,g,h;b=a.Bg;c=Q(BN,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Xc(Qp(b,g),Xh(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Xc(Qp(b,g),Xh(g));e=h;}return c;}
function ACJ(){var a=this;B.call(a);a.mc=null;a.iQ=0;}
var TB=G();
var Pd=G(HT);
function AOn(a,b,c,d){var e,f,g;e=0;f=d.z;a:{while(true){if(b>f){b=e;break a;}g=Gx(d,a.bd);DZ(d,a.bd,b);e=a.dj.c(b,c,d);if(e>=0)break;DZ(d,a.bd,g);b=b+1|0;}}return b;}
function A27(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gx(e,a.bd);DZ(e,a.bd,c);f=a.dj.c(c,d,e);if(f>=0)break;DZ(e,a.bd,g);c=c+(-1)|0;}}return c;}
function AM$(a){return null;}
var Rc=G(Bu);
var Vy=G(Bu);
function T$(){Ge.call(this);this.D4=0;}
function Q7(){Ge.call(this);this.Ft=0;}
function Vw(){B.call(this);this.ra=null;}
function AXn(a,b){a.ra.g(H4(b));}
function Vx(){var a=this;B.call(a);a.rX=null;a.rY=null;}
function AVM(a,b){var c,d;c=a.rX;d=a.rY;b.text().then(Bv(c,"f"),Bv(d,"f"));}
function ACd(){var a=this;B.call(a);a.ty=null;a.AV=null;a.wa=0;a.mQ=0;}
function NA(a,b){return Ch(a.ty)<b?0:1;}
var AET=G(0);
function ACv(){B.call(this);this.xq=null;}
function ART(a,b){var c,d,e,f;c=a.xq;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.te;c=Bt();b=Cl(b);e=new K;M(e);H(H(e,C(671)),b);Bk(c,L(e));b=Bt();f=d.length;c=new K;M(c);U(H(c,C(672)),f);Bk(b,L(c));}
function ACx(){var a=this;B.call(a);a.AL=null;a.AM=null;}
function AQ4(a,b){var c,d;c=a.AL;d=a.AM;b.arrayBuffer().then(Bv(c,"f"),Bv(d,"f"));}
function ACy(){var a=this;B.call(a);a.yu=null;a.k8=null;a.kw=null;}
function ABp(a){var b,c;b=a.yu.next();c=a.kw.pI;b.then(Bv(a,"f"),Bv(c,"f"));}
function AR0(a,b){var c,d;if(b.done?1:0)a.k8.wo();else{ABp(a);c=b.value;if(c.kind==='file'?1:0){b=A3q(c,null,YP(a.kw));a.k8.xl(b);}else{b=new ACr;d=a.kw;AHm(b,c,d.pI,YP(d),null);a.k8.t6(b);}}}
function YO(){var a=this;B.call(a);a.s7=null;a.s8=null;}
function AAU(){var a=this;B.call(a);a.lQ=null;a.ml=null;a.c6=null;}
function A1C(a,b){var c,d;c=new Io;d=a.c6;LN(c,b,d.jU+1|0,d.hN);BB(a.lQ,c);}
function ATq(a,b){var c,d;c=DW(b);d=new KF;J9(d,c,a.c6.jU+1|0);d.hJ=b;a.c6.hN.rM(d,c);d.oB=AKW(a.c6.hN,d);BB(a.ml,d);}
function A1Y(a){var b,c,d,e,f,g,h;if(!(ED(a.lQ)&&ED(a.ml))){a.c6.hx=Gp(a.lQ,A9n);a.c6.ic=Gp(a.ml,A9o);K6(a.c6.hx,A83);K6(a.c6.ic,A83);b=a.c6;c=b.hx;d=c.data;e=b.ic;f=e.data;g=d.length;h=f.length;d=Q(Dh,g+h|0);C6(c,0,d,0,g);C6(e,0,d,g,h);a.c6.fb=d;}NZ(a.c6);b=a.c6;b.hN.xt(b);}
function ACg(){var a=this;B.call(a);a.ec=null;a.k1=null;a.pu=null;a.nv=null;a.rN=0;a.ky=0;a.c_=0;a.z=0;a.eR=0;a.kB=0;a.gA=0;a.dM=0;a.Fe=0;a.iX=0;a.ma=0;}
function B1(a,b,c){a.k1.data[b]=c;}
function DE(a,b){return a.k1.data[b];}
function MG(a){return Sa(a,0);}
function Sa(a,b){ZY(a,b);return a.ec.data[(b*2|0)+1|0];}
function DZ(a,b,c){a.ec.data[b*2|0]=c;}
function M4(a,b,c){a.ec.data[(b*2|0)+1|0]=c;}
function Gx(a,b){return a.ec.data[b*2|0];}
function I$(a,b){return a.ec.data[(b*2|0)+1|0];}
function AGH(a){return Qn(a,0);}
function Qn(a,b){ZY(a,b);return a.ec.data[b*2|0];}
function WA(a,b){return a.pu.data[b];}
function EU(a,b,c){a.pu.data[b]=c;}
function ZY(a,b){var c;if(!a.ky){c=new C$;Y(c);N(c);}if(b>=0&&b<a.rN)return;c=new BH;Bm(c,Dm(b));N(c);}
function ADZ(a,b,c,d){a.ky=0;a.ma=2;Jx(a.ec,(-1));Jx(a.k1,(-1));if(b!==null)a.nv=b;if(c>=0){a.c_=c;a.z=d;}a.eR=a.c_;}
function AFz(a){return a.ma;}
function TD(){B.call(this);this.yj=null;}
function AYz(a,b){a.yj.g($rt_str(b.message));}
function AAo(){var a=this;B.call(a);a.qw=null;a.qv=0;}
function A25(a){H7(a.qw,a.qv);}
function XB(){B.call(this);this.zO=null;}
function ARW(a){H7(a.zO,1);}
function XC(){B.call(this);this.r4=null;}
function APE(a){H7(a.r4,0);}
function Z2(){var a=this;B.call(a);a.tc=null;a.tb=0;}
function AR6(a){var b,c,d,e,f;b=a.tc;c=a.tb;d=b.c3;e=d.b$.e2;f=new Q3;f.zZ=b;f.zW=c;Kf(e,Yo(d,f));}
function QD(){B.call(this);this.yw=null;}
function AUW(a,b){H6(a.yw,b);}
var GJ=G(CH);
var A9z=null;var A9y=null;var A9A=null;function SE(){SE=Bn(GJ);A2Z();}
function A0N(a,b){var c=new GJ();AFL(c,a,b);return c;}
function AFL(a,b,c){SE();DK(a,b,c);}
function A2Z(){var b;A9z=A0N(C(673),0);b=A0N(C(674),1);A9y=b;A9A=I(GJ,[A9z,b]);}
function ADa(){B.call(this);this.rv=null;}
function AOz(a,b){DI(a.rv,b);}
function ZN(){var a=this;B.call(a);a.ym=null;a.yl=0;}
function A1v(a,b){var c,d,e,f,g,h,i;c=a.ym;d=a.yl;e=!d?c.dO.dV:c.dO.dX;DS(c.c3);f=Bt();g=FU(b);h=new K;M(h);H(H(h,C(675)),g);Bk(f,L(h));i=new AAa;i.hs=c;i.iW=d;i.nf=e;f=ASH(b,i);if(!d)c.p1=f;else c.oS=f;f.et.f();ET(e,f);}
function QW(){var a=this;B.call(a);a.sf=null;a.se=null;}
function AXv(a){var b,c;b=a.sf;c=a.se;b.jc.nX(c);}
var ABj=G();
var A8_=null;function A5e(){A5e=Bn(ABj);AVm();}
function AVm(){var b,c;SE();b=BP((A9A.hC()).data.length);c=b.data;A8_=b;c[A9z.fS]=1;c[A9y.fS]=2;}
function RY(){B.call(this);this.zT=null;}
function AOq(a,b){var c,d;c=a.zT;d=b.iS;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function RM(){B.call(this);this.ul=null;}
function AMo(a,b){Tx(HU(a.ul),b,A8j,AE5(C(676)));}
function OT(){var a=this;B.call(a);a.xI=null;a.xJ=0.0;}
function AXQ(a){var b,c;b=a.xI;c=a.xJ;b.jc.kE(c);}
function AAW(){Z.call(this);this.ET=null;}
function ATw(a,b){return CE(b)!=2?0:1;}
function Wv(){Z.call(this);this.EX=null;}
function AVB(a,b){return CE(b)!=1?0:1;}
function R$(){Z.call(this);this.EI=null;}
function AMg(a,b){return RL(b);}
function R9(){Z.call(this);this.CK=null;}
function AW$(a,b){return 0;}
function Vi(){Z.call(this);this.DP=null;}
function APe(a,b){return !CE(b)?0:1;}
function X9(){Z.call(this);this.E9=null;}
function A1W(a,b){return CE(b)!=9?0:1;}
function PU(){Z.call(this);this.D8=null;}
function ARp(a,b){return HO(b);}
function Zs(){Z.call(this);this.C3=null;}
function ASm(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Wr(){Z.call(this);this.Ch=null;}
function A2V(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function Wt(){Z.call(this);this.Dk=null;}
function ANx(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function PB(){Z.call(this);this.DM=null;}
function ATF(a,b){a:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Yq(){Z.call(this);this.Fq=null;}
function AYP(a,b){return KO(b);}
function Yv(){Z.call(this);this.CR=null;}
function AZ$(a,b){return Yw(b);}
function ABk(){Z.call(this);this.E_=null;}
function A1J(a,b){return CE(b)!=3?0:1;}
function AAr(){Z.call(this);this.Cj=null;}
function ATZ(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function O8(){Z.call(this);this.FC=null;}
function ANq(a,b){a:{b:{switch(CE(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HO(b);}return b;}
function Mo(){Z.call(this);this.nK=0;}
function A4m(a){var b=new Mo();AGp(b,a);return b;}
function AGp(a,b){By(a);a.nK=b;}
function ARq(a,b){return a.bi^(a.nK!=CE(b&65535)?0:1);}
var Z0=G(Mo);
function A09(a,b){return a.bi^(!(a.nK>>CE(b&65535)&1)?0:1);}
var ADJ=G(0);
function YT(){B.call(this);this.ww=null;}
function AP3(a){var b,c;b=a.ww;c=b.s7;b=b.s8;c.FW(b.l7,b.pA,null);}
function R_(){B.call(this);this.BU=null;}
function A1p(a,b){GK(a.BU.bu,b,A8j);}
function Qx(){var a=this;B.call(a);a.l2=null;a.l1=null;a.x9=null;}
function ANT(a){Ju(a.l2);Ju(a.l1);}
function ALF(a){Kw(a.l2);Kw(a.l1);}
function ASP(a,b){IA(a.l2,b);IA(a.l1,b);}
function ARf(a,b){Kx(a.x9,b);}
function R8(){var a=this;B.call(a);a.Dz=null;a.Dy=null;a.Dx=null;}
function ABe(){var a=this;B.call(a);a.Fn=null;a.Fm=null;}
function Q3(){var a=this;B.call(a);a.zZ=null;a.zW=0;}
function ANg(a,b){M6(a.zZ,b,a.zW);}
var Da=G(0);
var A60=null;var A8f=null;var A62=null;var A61=null;var A64=null;var A63=null;var A66=null;var A65=null;var A68=null;var A67=null;var A69=null;function AG4(){AG4=Bn(Da);A2k();}
function A2k(){A60=CC(0);A8f=Dy(8,8,8);A62=S(C(677));A61=Dy(255,255,255);A64=S(C(678));A63=S(C(679));A66=S(C(680));A65=S(C(681));A68=EY(205,205,205,153);A67=EY(255,255,255,0);A69=S(C(116));}
function Cz(){CH.call(this);this.ps=null;}
var A9B=null;var A9C=null;var A9D=null;var A9E=null;var A9F=null;var A9G=null;var A9H=null;var A9I=null;var A9J=null;var A9K=null;var A9L=null;var A9M=null;var A9N=null;var A9O=null;var A9P=null;var A6$=null;function AGq(){AGq=Bn(Cz);A2N();}
function DN(a,b,c){var d=new Cz();Zy(d,a,b,c);return d;}
function A2z(a,b,c,d){var e=new Cz();AER(e,a,b,c,d);return e;}
function Zy(a,b,c,d){AGq();DK(a,b,c);a.ps=JL(d,null);}
function AER(a,b,c,d,e){AGq();DK(a,b,c);a.ps=JL(d,e);}
function A2N(){var b;b=new Cz;AG4();Zy(b,C(340),0,A8f);A9B=b;A9C=DN(C(341),1,S(C(682)));A9D=DN(C(343),2,S(C(683)));A9E=DN(C(345),3,S(C(684)));A9F=DN(C(347),4,A8f);A9G=DN(C(348),5,S(C(685)));A9H=DN(C(350),6,S(C(388)));A9I=DN(C(352),7,S(C(686)));A9J=DN(C(354),8,S(C(687)));A9K=A2z(C(356),9,A8f,Dy(237,235,252));A9L=A2z(C(357),10,S(C(386)),S(C(688)));A9M=DN(C(358),11,S(C(388)));A9N=DN(C(360),12,S(C(389)));A9O=DN(C(362),13,S(C(689)));b=DN(C(363),14,S(C(364)));A9P=b;A6$=I(Cz,[A9B,A9C,A9D,A9E,A9F,A9G,A9H,A9I,A9J,A9K,
A9L,A9M,A9N,A9O,b]);}
var D1=G(0);
var A7c=null;var A7d=null;var A6_=null;var A7a=null;var A7b=null;var A8g=null;var A8h=null;var A7e=null;var A7f=null;function AVf(){AVf=Bn(D1);AWL();}
function AWL(){A7c=S(C(114));A7d=S(C(690));A6_=S(C(691));A7a=S(C(692));A7b=S(C(693));A8g=S(C(114));A8h=S(C(690));A7e=EY(205,205,205,153);A7f=Dy(247,248,250);}
function AAa(){var a=this;B.call(a);a.iW=0;a.nf=null;a.hs=null;}
function APM(a,b){var c,d,e;c=Bt();d=FU(b.hJ);e=new K;M(e);H(H(e,C(694)),d);Bk(c,L(e));c=new M$;d=a.hs;Xd(c,d.iC,d.c3,d.nR);M6(c,b.hJ,a.iW);b=b.hJ;d=Rp(a,b.h6);if(d===null)d=null;else{b=DW(b);d=Ur(d.ic,b);}LF(a,d);if(d!==null)M6(c,d.hJ,a.iW?0:1);}
function AUs(a,b){var c,d,e;ADB(b);c=Bt();d=AFs(b.jR);e=new K;M(e);H(H(e,C(695)),d);Bk(c,L(e));c=AD8(a,b.jR);LF(a,c);if(c!==null&&(c.hB!=60086?0:1))c.et.f();if(Jk(b)>0)EL(a.nf);}
function LF(a,b){(!a.iW?a.hs.dO.dX:a.hs.dO.dV).oz=b;}
function AUz(a,b){var c;if(Jk(b)>0)EL(a.nf);Lm(b);c=AD8(a,b.jR);LF(a,c);if(c!==null&&I_(c))c.et.f();}
function Rp(a,b){var c,d,e;c=!a.iW?a.hs.oS:a.hs.p1;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Rr(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AD8(a,b){var c;c=Rp(a,b.hD);return c===null?null:Rr(c,Hq(b));}
function ADK(){var a=this;B.call(a);a.yg=null;a.yh=null;}
function A0p(a,b){var c,d;c=a.yg;d=a.yh;DS(c);d.g(b);}
var AGe=G(0);
function AA5(){B.call(this);this.Bj=null;}
function AX$(a){DS(a.Bj);}
function RO(){var a=this;B.call(a);a.um=null;a.un=null;}
function A2i(a){a.um.zB(a.un);}
var AIA=G();
function AEd(){B.call(this);this.tL=null;}
function AX9(a){var b;b=a.tL;IH(b);b.hN.uR(b);b.hx=A9n;b.ic=A9o;}
function Rg(){var a=this;B.call(a);a.vr=null;a.vs=null;a.vt=0;}
function AMs(a){var b,c,d,e;b=a.vr;c=a.vs;d=a.vt;c=FU(c);if(!d)b.nx=c;else b.wP=c;e=b.wP;if(e!==null&&b.nx!==null)DL(b.jj,c);else{if(e!==null)DL(b.jj,e);c=b.nx;if(c!==null)DL(b.jj,c);}}
function ACA(){var a=this;B.call(a);a.x1=null;a.xX=null;}
function AZn(a,b){var c,d,e,f;c=a.x1;d=a.xX;e=Lx(c.jt,d);b=AIE(b);f=AN7(b.kj,AB7(e));Ep(c.mN,d,f);if(BO(c.px,d))ADN(c,f);}
function ACB(){var a=this;B.call(a);a.BA=null;a.BB=null;}
function AX1(a,b){var c,d,e;c=a.BA;d=a.BB;c=Lx(c.jt,d);d=En();e=new K;M(e);H(H(H(H(e,C(696)),c),C(29)),b);Bk(d,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A5X(AQo),"cO",A5W(AMV)],R2,0,B,[],0,3,0,0,0,WL,0,B,[],3,3,0,0,0,Wo,0,B,[],3,3,0,0,0,ACW,0,B,[WL,Wo],0,3,0,0,0,AIS,0,B,[],4,0,0,0,0,AIG,0,B,[],4,3,0,0,0,GZ,0,B,[],0,3,0,0,0,Ew,0,GZ,[],0,3,0,0,0,Bu,0,Ew,[],0,3,0,0,0,AJF,0,Bu,[],0,3,0,0,0,C7,0,B,[],3,3,0,0,0,CK,0,B,[],3,3,0,0,0,Km,0,B,[],3,3,0,0,0,BJ,"String",1,B,[C7,CK,Km],0,3,0,Fd,["cO",A5W(AMT),"bJ",A5X(Bj),"gH",A5W(N0),"ms",A5X(AOm)],FA,0,GZ,[],0,3,0,0,0,In,0,FA,[],0,3,0,0,0,AJk,0,In,[],0,3,0,0,0,Es,0,B,[C7],1,3,0,0,0,HG,
0,Es,[CK],0,3,0,0,["gH",A5W(AUP),"bJ",A5X(A2D),"ms",A5X(AYn)],GT,0,B,[C7,Km],0,0,0,0,["j4",A5X(M3),"cO",A5W(L)],JK,0,B,[],3,3,0,0,0,K,0,GT,[JK],0,3,0,0,["pQ",A50(AYj),"pf",A5Z(ANF),"cO",A5W(Ed),"j4",A5X(APJ),"p8",A5Y(AYG)],E5,0,In,[],0,3,0,0,0,AKh,0,E5,[],0,3,0,0,0,AJe,0,E5,[],0,3,0,0,0,ABi,0,B,[],3,3,0,0,0,C_,0,B,[],3,3,0,0,0,X8,0,B,[],3,0,0,0,0,Kd,0,B,[ABi,C_,X8],1,3,0,0,["b4",A5W(Ez)],ZT,0,Kd,[],0,3,0,0,0,AIm,0,B,[],0,3,0,0,0,AKR,0,B,[],4,3,0,0,0,BT,0,B,[],3,3,0,0,0,Ce,0,B,[BT],3,3,0,0,0,ABs,0,B,[Ce],0,3,
0,0,["bh",A5X(A2T)],AGs,0,B,[],0,3,0,0,0,AJR,0,B,[BT],1,3,0,0,0,AEz,0,B,[],3,3,0,0,0,AKF,0,B,[],3,3,0,0,0,AGZ,0,B,[],3,3,0,0,0,L5,0,B,[],0,3,0,0,0,AE4,0,B,[BT],1,3,0,0,0,ABt,0,B,[Ce],0,3,0,0,["bh",A5X(ALs)],ABr,0,B,[Ce],0,3,0,0,["bh",A5X(A1K)],LJ,0,B,[],4,3,0,0,0,AGX,0,B,[],4,3,0,0,0,AI$,0,B,[],0,3,0,0,0,ALp,0,B,[],4,3,0,0,0,WM,0,B,[Ce],0,3,0,0,["bh",A5X(AZw)]]);
$rt_metadata([AG_,0,B,[BT],1,3,0,0,0,AIv,0,B,[],0,3,0,0,0,ACz,0,B,[BT],3,3,0,0,0,AJH,0,B,[ACz],1,3,0,0,["Ly",A5X(AXy),"R0",A5W(AQl)],AFS,0,B,[BT],1,3,0,0,0,Gf,0,B,[],3,3,0,0,0,SO,0,B,[Gf],0,3,0,0,0,BH,0,Bu,[],0,3,0,0,0,AJ5,0,B,[],4,3,0,0,0,F4,0,Bu,[],0,3,0,0,0,Jf,0,Bu,[],0,3,0,0,0,Dn,0,B,[CK],0,3,0,0,0,Wj,0,B,[BT],3,3,0,0,0,AAs,0,B,[Wj],3,3,0,0,0,EZ,0,B,[BT],3,3,0,0,0,AIo,0,B,[BT,AAs,EZ],1,3,0,0,["Kg",A5W(AZd),"KQ",A5X(A1b),"SO",A5X(A02),"Oa",A5X(AWs),"Ri",A5X(ALI),"MN",A5W(ANy),"RY",A5Y(A0$),"K8",A5Z(APu),
"LF",A5W(AVz),"LY",A5W(AZU),"Qu",A5X(A1G),"OQ",A5W(AQF),"S7",A5X(AO$),"IX",A5W(AQZ),"Pt",A5W(AUw),"S1",A5W(APY),"Gi",A5X(AMl),"La",A5W(A2F),"QP",A5Y(AXW),"OD",A5Y(AQx),"RQ",A5Y(ATL),"Rx",A5W(AUV),"Sg",A5W(AOW),"LK",A5X(ANI),"Qc",A5X(AOx),"N6",A5Y(AX6),"IB",A5W(AP6),"Lx",A5X(AVC),"M0",A5W(AOw),"L5",A5W(AR2),"NT",A5X(ALy),"IW",A5X(ATh),"SW",A5X(AVW),"H_",A5W(A1z),"Ot",A5Y(AV3),"RM",A5X(AZ3),"Ir",A5W(ASq),"Ni",A5Y(ARn),"GN",A5Y(AQ8),"Pd",A5W(ATb),"LL",A5X(AT$),"HR",A5Z(AZm),"Hb",A5W(AND),"HV",A5Y(AWe),"OJ",A5W(AVg),
"Ky",A5W(A2A),"Qr",A5W(ARk),"FG",A5W(AVe),"J$",A5Y(ARo),"M1",A5X(AWB),"P_",A5X(AOD),"G6",A5W(A0C)],PC,0,B,[Ce],0,3,0,0,["bh",A5X(ARX)],AJs,0,B,[],4,3,0,0,0,Yp,0,B,[EZ],3,3,0,0,0,RT,0,B,[EZ],3,3,0,0,0,ZG,0,B,[EZ],3,3,0,0,0,Tc,0,B,[EZ],3,3,0,0,0,ADD,0,B,[EZ],3,3,0,0,0,AB3,0,B,[EZ,Yp,RT,ZG,Tc,ADD],3,3,0,0,0,AIQ,0,B,[BT,AB3],1,3,0,0,["Q2",A5Y(AZD),"Sm",A5Y(AYl),"Hd",A5Z(AOY),"Oy",A5X(AMz),"JJ",A5Z(AWQ)],BU,0,Bu,[],0,3,0,0,0,AEe,0,Bu,[],0,3,0,0,0,Ii,0,BH,[],0,3,0,0,0,AI4,0,B,[],0,3,0,0,0,Zj,0,B,[],3,3,0,0,0,X1,0,
B,[Zj],3,3,0,0,0,AAA,0,B,[X1],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,AJO,0,B,[BD],0,3,0,0,0,V,0,B,[],3,3,0,0,0,AJP,0,B,[V],0,3,0,0,0,ZL,0,B,[BT],3,3,0,0,0,Un,0,B,[ZL],0,3,0,0,["IY",A5X(AXV)],Ul,0,B,[V],0,3,0,0,0,Y$,0,B,[BT],3,3,0,0,0,Um,0,B,[Y$],0,3,0,0,["BN",A5Y(ANS)],AHi,0,B,[BT],1,3,0,0,0,CA,0,B,[BT],3,3,0,0,0,Uk,0,B,[CA],0,3,0,0,["cv",A5X(AR1)],AAk,0,B,[],0,3,0,0,0,UW,0,B,[],3,3,0,0,["fm",A5X(AUD)],HA,0,B,[UW],3,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],FC,0,B,[HA],1,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_),"eG",A5W(ED),"q4",
A5X(A0Q)],NJ,0,B,[HA],3,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],MK,0,B,[NJ],3,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)]]);
$rt_metadata([Fq,0,FC,[MK],1,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_),"zU",A5X(ASc),"b9",A5W(B7),"us",A5Y(ARC),"ou",A5Y(A1u),"bJ",A5X(AQR)],Mj,0,Fq,[],1,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],OS,0,B,[HA],3,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],AD0,0,B,[OS,NJ],3,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],TG,0,Mj,[AD0],0,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],Lw,0,B,[],3,3,0,0,0,Ee,0,B,[Lw],1,3,0,0,0,Ex,0,B,[],3,3,0,0,0,VE,0,B,[Lw],3,3,0,0,0,Pf,0,B,[VE],3,3,0,0,0,Yc,0,Ee,[Ex,C7,Pf],0,3,0,0,0,AAm,0,B,[BD],0,3,0,0,0,AAn,0,B,[Ce],0,
3,0,0,["bh",A5X(AUU)],AE_,0,B,[],0,3,0,0,0,NX,0,B,[],1,3,0,0,0,Ud,0,NX,[],0,3,0,0,0,Cx,0,B,[C_],1,3,0,0,["cj",A5X(A2B)],YL,0,B,[],0,3,0,0,0,AC1,0,B,[CA],0,3,0,0,["cv",A5X(AZO)],AC2,0,B,[CA],0,3,0,0,["cv",A5X(AZY)],AC3,0,B,[CA],0,3,0,0,["cv",A5X(AQC)],AC4,0,B,[CA],0,3,0,0,["cv",A5X(AYE)],AC5,0,B,[CA],0,3,0,0,["cv",A5X(AYQ)],AC6,0,B,[CA],0,3,0,0,["cv",A5X(AR7)],AC7,0,B,[CA],0,3,0,0,["cv",A5X(AOX)],AC8,0,B,[CA],0,3,0,0,["cv",A5X(A21)],AC9,0,B,[CA],0,3,0,0,["cv",A5X(AOu)],AC$,0,B,[CA],0,3,0,0,["cv",A5X(ASO)],VU,
0,B,[CA],0,3,0,0,["cv",A5X(A2C)],VV,0,B,[CA],0,3,0,0,["cv",A5X(AQj)],VW,0,B,[CA],0,3,0,0,["cv",A5X(AQH)],VX,0,B,[CA],0,3,0,0,["cv",A5X(AZ5)],ABN,0,B,[],3,3,0,0,0,ABW,0,B,[ABN],0,3,0,0,0,ABV,0,B,[CA],0,3,0,0,["cv",A5X(APz)],OO,0,B,[],0,3,0,0,0,KB,0,B,[Gf],0,3,0,0,["qe",A5Y(MZ)],AHw,0,B,[],0,3,0,0,0,D$,0,B,[],3,3,0,0,0,Ct,0,B,[D$],3,3,0,0,0,CD,0,B,[],3,3,0,0,["bU",A5X(AYf),"cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g)],EK,0,B,[],3,3,0,0,0,CW,0,B,[D$],3,3,0,0,0,EW,0,B,[],3,3,0,0,0,Dd,0,B,[],3,3,0,0,0,E9,0,B,[Dd],3,
3,0,0,0,Ri,0,B,[C_],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cO",A5W(AH5),"bJ",A5X(APq)],ADb,0,B,[],0,3,0,0,0,AG1,0,B,[],0,3,0,0,0]);
$rt_metadata([AID,0,B,[],3,3,0,0,0,Y8,0,B,[],0,3,0,0,0,Oa,0,B,[],0,3,0,0,0,Di,0,Oa,[],0,3,0,0,0,AKP,0,Di,[],0,3,0,0,0,Fr,0,Di,[],0,3,0,0,0,Zu,0,Di,[],0,3,0,0,0,AFV,0,Fr,[],0,3,0,0,0,Hv,0,Fr,[],0,3,0,0,0,PJ,0,Hv,[],0,3,0,0,0,AHN,0,Hv,[],0,3,0,0,0,AIR,0,Fr,[],0,3,0,0,0,AKj,0,Di,[],0,3,0,0,0,AEP,0,Di,[],0,3,0,0,0,Z4,0,B,[BT],3,3,0,0,0,ALn,0,B,[Z4],3,3,0,0,0,Y7,0,B,[C_],0,3,0,0,0,Ra,0,B,[],0,3,0,0,0,CH,0,B,[CK,C7],1,3,0,0,0,G_,0,CH,[],12,3,0,Jy,0,Mt,0,B,[],3,3,0,0,0,S7,0,B,[Mt],3,3,0,0,0,AB0,0,B,[],3,3,0,0,0,GV,
0,B,[S7,AB0],1,3,0,0,0,MW,0,GV,[],0,3,0,0,0,AFB,0,MW,[],0,3,0,0,0,HF,0,GV,[],1,3,0,0,0,LH,0,HF,[],0,3,0,0,["mW",A5Z(APs)],Ei,0,CH,[],12,3,0,A1Z,0,MO,0,B,[CK],1,3,0,0,0,Mw,0,MO,[],0,3,0,AFv,0,Yg,0,B,[],0,3,0,0,0,H5,0,CH,[],12,0,0,AQy,0,NL,0,HF,[],0,3,0,0,["mW",A5Z(AN_)],AGW,0,BU,[],0,3,0,0,0,Uo,0,Ew,[],0,3,0,0,0,Mv,0,B,[BT],3,3,0,0,0,ADW,0,B,[Mv],0,3,0,0,["bh",A5X(ASx)],ADX,0,B,[Mv],0,3,0,0,["bh",A5X(AMN)],Ic,0,B,[],1,3,0,0,0,AAg,0,B,[],3,3,0,0,0,LB,0,Ic,[CK,JK,Km,AAg],1,3,0,0,0,Nc,0,Ic,[CK],1,3,0,0,0,IJ,0,B,
[],0,3,0,Hn,0,Pj,0,Cx,[],0,3,0,0,["bM",A5W(AQe),"ce",A5Y(AO9)],HN,0,Cx,[],1,3,0,0,["ce",A5Y(AF6)],CG,0,HN,[],1,3,0,0,["bM",A5W(AN5),"ce",A5Y(IE),"cj",A5X(AMH)],EF,0,B,[],3,3,0,0,0,JF,0,B,[],3,3,0,0,0,Fi,0,B,[],3,3,0,0,0]);
$rt_metadata([KX,0,CG,[CD,EF,JF,Fi,EK,EW,E9],0,3,0,0,["h$",A5Y(A2b),"cj",A5X(ASh),"bM",A5W(AYN),"f$",A5W(AXR),"qg",A5W(ASF),"ot",A5W(AYJ),"nX",A5X(ATf),"kE",A5X(AZz),"g6",A5X(ANp),"ce",A5Y(APL),"e8",A5X(AL$),"bU",A5X(AZS),"cy",A5Z(AXS),"cn",A5Y(AQB),"dB",A5Y(A0i),"dy",A5Z(ARS),"cC",A5W(AYi)],AG6,0,KX,[],0,3,0,0,["f$",A5W(AQM)],AHu,0,B,[],0,3,0,0,0,AJJ,0,B,[BT],1,3,0,0,0,K4,0,LB,[],1,0,0,0,0,AFP,0,K4,[],0,0,0,0,0,Lt,0,B,[],1,3,0,0,0,Oe,0,B,[],0,3,0,0,0,AEF,0,B,[],0,3,0,0,0,I7,0,B,[BT],3,3,0,0,0,WU,0,B,[I7],0,
3,0,0,["bh",A5X(AOe)],WT,0,B,[I7],0,3,0,0,["bh",A5X(ARg)],WR,0,B,[Ce],0,3,0,0,["bh",A5X(ARJ)],WQ,0,B,[Ce],0,3,0,0,["bh",A5X(AWf)],W,0,B,[],3,3,0,0,0,Tm,0,B,[W],0,3,0,0,["g",A5X(A2G)],To,0,B,[W],0,3,0,0,["g",A5X(AYm)],UC,0,B,[BD],0,3,0,0,["bc",A5X(ATt)],UB,0,B,[BD],0,3,0,0,["bc",A5X(ALS)],Uy,0,B,[BD],0,3,0,0,["bc",A5X(AWT)],Ux,0,B,[BD],0,3,0,0,["bc",A5X(AZx)],UA,0,B,[BD],0,3,0,0,["bc",A5X(ANZ)],Uz,0,B,[BD],0,3,0,0,["bc",A5X(AUB)],UF,0,B,[BD],0,3,0,0,["bc",A5X(ANE)],UE,0,B,[BD],0,3,0,0,["bc",A5X(AP8)],UH,0,B,
[BD],0,3,0,0,["bc",A5X(A0S)],UG,0,B,[BD],0,3,0,0,["bc",A5X(ALB)],AAZ,0,B,[BD],0,3,0,0,["bc",A5X(ALM)],AAY,0,B,[BD],0,3,0,0,["bc",A5X(AYr)],AAX,0,B,[BD],0,3,0,0,["bc",A5X(AQ1)],AAM,0,B,[BD],0,3,0,0,["bc",A5X(AOi)],AAL,0,B,[BD],0,3,0,0,["bc",A5X(AUO)],AAJ,0,B,[BD],0,3,0,0,["bc",A5X(A1S)],AAI,0,B,[BD],0,3,0,0,["bc",A5X(AQf)],AAH,0,B,[BD],0,3,0,0,["bc",A5X(A0V)],AAG,0,B,[BD],0,3,0,0,["bc",A5X(ALv)],AAF,0,B,[BD],0,3,0,0,["bc",A5X(A0H)],AAQ,0,B,[BD],0,3,0,0,["bc",A5X(AZZ)],AAP,0,B,[BD],0,3,0,0,["bc",A5X(ANc)],AAO,
0,B,[BD],0,3,0,0,["bc",A5X(AXC)],AAN,0,B,[BD],0,3,0,0,["bc",A5X(AO5)],AAS,0,B,[BD],0,3,0,0,["bc",A5X(AO6)],AAR,0,B,[BD],0,3,0,0,["bc",A5X(AVs)],ADf,0,B,[],0,0,0,0,0,Ig,0,B,[],0,3,0,0,0,Qm,0,Ig,[],0,3,0,0,0,AG7,0,B,[],0,3,0,0,0,OM,0,Ig,[],0,3,0,0,0,Tu,0,B,[BT],3,3,0,0,0,Pw,0,B,[Tu],0,3,0,0,["LR",A5X(AYs)]]);
$rt_metadata([AB6,0,B,[W],0,3,0,0,["g",A5X(ACU)],ADm,0,Nc,[],0,0,0,0,0,CB,0,B,[C_],0,3,0,0,["b4",A5W(ASi),"hW",A5W(AZp),"dz",A5Z(JP),"dw",A5X(AK6),"cj",A5X(AV$),"rJ",A5X(AP$),"oZ",A5X(ATT),"lB",A5Y(A0v),"ke",A5W(AT1),"cy",A5Z(AO0),"cn",A5Y(AMU),"dB",A5Y(AQQ),"bU",A5X(ATH),"dy",A5Z(A0n)],AFl,0,CB,[],0,3,0,0,["dw",A5X(AGE)],AFT,0,B,[],0,3,0,0,0,FV,0,B,[],3,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo)],Q5,0,B,[],3,0,0,0,0,Ms,0,B,[FV],3,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo)],AFr,0,CB,[FV,CD,JF,Q5,Ms],0,3,0,0,["dz",A5Z(Mu),"lB",
A5Y(ARs),"pp",A5Y(A2H),"uA",A5W(AW9),"wp",A5W(AVj),"qg",A5W(Ju),"ot",A5W(Kw),"nX",A5X(IA),"kE",A5X(AR9),"ke",A5W(LW),"b4",A5W(AVH),"cj",A5X(I2),"qf",A5X(AJn),"hW",A5W(AHe),"pw",A5W(AS0),"dw",A5X(AYU),"lj",A5W(TO),"kv",A5W(TN),"hI",A5X(ARP),"kX",A5W(ARF),"l0",A5W(AUv),"dy",A5Z(LR),"dB",A5Y(S6),"cn",A5Y(Wu),"cy",A5Z(O9),"bU",A5X(Xu),"iv",A5X(A2j)],AIe,0,B,[],0,3,0,0,0,TW,0,B,[W],0,3,0,0,["g",A5X(AMi)],TX,0,B,[W],0,3,0,0,["g",A5X(A1m)],TY,0,B,[Ct],0,3,0,0,["H",A5X(APR)],HS,0,B,[Ct],0,3,0,0,["H",A5X(AOr)],TU,0,
B,[W],0,3,0,0,["g",A5X(AQD)],TV,0,B,[CW],0,3,0,0,["H",A5X(A1T)],C2,0,B,[],3,3,0,0,0,ADz,0,B,[CD,C2],0,3,0,0,["bU",A5X(AU0),"cy",A5Z(AM2),"cn",A5Y(AO2),"dB",A5Y(A2d),"fV",A5Y(AYc)],TA,0,B,[],0,3,0,0,0,Wl,0,B,[EK],0,3,0,0,["dy",A5Z(A19)],Wk,0,B,[CW],0,3,0,0,["H",A5X(AM3)],AFd,0,B,[],0,3,0,0,0,ADU,0,B,[],0,3,0,0,0,ADI,0,B,[],0,3,0,0,0,Fs,0,B,[C_],0,3,0,0,0,AHJ,0,B,[],0,3,0,0,0,AFc,0,B,[C_],0,3,0,0,0,Xp,0,B,[W],0,3,0,0,0,Xo,0,B,[W],0,3,0,0,["g",A5X(AMv)],Xn,0,B,[W],0,3,0,0,["g",A5X(ALO)],AKf,0,B,[],0,3,0,0,0,Xm,
0,B,[V],0,3,0,0,["f",A5W(AU2)],Xt,0,B,[V],0,3,0,0,["f",A5W(AXc)],Xs,0,B,[V],0,3,0,0,["f",A5W(A3e)],Xr,0,B,[V],0,3,0,0,["f",A5W(AP2)],Xq,0,B,[V],0,3,0,0,["f",A5W(ARK)],Xl,0,B,[V],0,3,0,0,["f",A5W(A2I)],UO,0,B,[V],0,3,0,0,["f",A5W(AP5)],UP,0,B,[V],0,3,0,0,["f",A5W(AZV)],AGl,0,B,[BT],1,3,0,0,0,Ny,0,B,[],4,3,0,AX5,0,AEN,0,B,[],3,3,0,0,0,Z6,0,B,[Ct],0,3,0,0,["H",A5X(AON)],Z5,0,B,[Ct],0,3,0,0,["H",A5X(AWd)],TM,0,B,[],0,3,0,0,0,Kn,0,B,[],0,3,0,0,0,Fn,0,B,[],0,3,0,0,0,Nw,0,Fn,[],0,3,0,0,0,AAV,0,Fn,[],0,3,0,0,0,YU,0,
Fn,[],0,3,0,0,0]);
$rt_metadata([Hh,0,B,[],3,3,0,0,0,SA,0,B,[],3,3,0,0,0,B2,0,B,[],0,3,0,0,["bJ",A5X(AUk)],LI,0,B,[],3,3,0,0,0,AIw,0,Fq,[Ex,C7,LI],0,3,0,0,["pG",A5X(AX_),"kG",A5X(BG),"c2",A5W(AZG),"zU",A5X(BB),"ou",A5Y(AJB),"qd",A5X(EN),"q4",A5X(AG9),"jg",A5W(Iy),"us",A5Y(AIJ),"fm",A5X(Ft)],LA,0,B,[],0,3,0,0,0,Iw,0,B,[C_],0,3,0,0,["b4",A5W(AGu)],YJ,0,B,[],3,0,0,0,0,OJ,0,B,[],3,3,0,0,0,Y3,0,B,[V],0,3,0,0,["f",A5W(AXI)],Y2,0,B,[V],0,3,0,0,["f",A5W(AUN)],AKX,0,B,[],0,3,0,0,0,Ty,0,B,[],0,3,0,0,0,G1,0,B,[],1,3,0,0,0,ZR,0,G1,[],0,3,
0,0,["ud",A5X(Cd)],Mb,0,B,[],3,3,0,0,0,TC,0,B,[Mb],3,3,0,0,0,SQ,"JsFileHandle",7,B,[TC],0,3,0,0,["pb",A5W(DW),"tr",A5W(AL_),"cO",A5W(AYb),"gH",A5W(ALY)],ACR,0,B,[],3,3,0,0,0,AJY,0,B,[ACR],0,3,0,0,["cO",A5W(AWv)],ZZ,0,B,[OJ],0,3,0,0,0,Hi,0,B,[CK],0,3,0,0,0,NT,0,B,[],0,3,0,0,0,DH,0,B,[],0,3,0,0,0,Ys,0,B,[],0,3,0,0,0,Ln,0,Ee,[Ex,C7],0,3,0,0,0,Cy,0,B,[],0,3,0,0,0,NQ,0,Ln,[],0,3,0,0,0,ZW,0,B,[],0,3,0,0,0,ALe,0,B,[CK],0,3,0,0,["bJ",A5X(ASQ),"ms",A5X(AV9)],U1,0,B,[Gf],0,3,0,0,["qe",A5Y(AP7)],Zt,0,B,[],0,3,0,0,["cO",
A5W(AL8),"bJ",A5X(AMQ)],Jp,0,B,[],3,3,0,0,0,GY,0,B,[Jp,Ex],0,0,0,0,["bJ",A5X(AWx)],HW,0,GY,[],0,0,0,0,0,NN,0,Lt,[],1,3,0,0,0,QF,0,NN,[],0,3,0,0,0,I9,0,Ew,[],0,3,0,0,0,O0,0,B,[I7],0,3,0,0,["bh",A5X(AUb)],O2,0,B,[Ce],0,3,0,0,["bh",A5X(ATE)],O1,0,B,[Ce],0,3,0,0,["bh",A5X(AVu)],IY,0,B,[],0,3,0,0,0,Ky,0,CG,[EF,Fi],0,3,0,0,["g6",A5X(AXP),"cj",A5X(A1h),"bM",A5W(AOP),"f$",A5W(A2y),"ce",A5Y(ALA),"e8",A5X(AWR)],AIh,0,Cx,[],0,3,0,0,["cj",A5X(ALV),"bM",A5W(ANH),"ce",A5Y(APP)],ABg,0,Cx,[],0,3,0,0,["cj",A5X(ARd),"bM",A5W(AV1),
"ce",A5Y(AW8)],Xx,0,CG,[CD,C2],0,3,0,0,["cn",A5Y(ATu),"dB",A5Y(AL6),"fV",A5Y(APi),"ce",A5Y(AOf),"bM",A5W(AWN),"bU",A5X(APS),"cy",A5Z(AMw)],AAK,0,CG,[C2],0,3,0,0,["fV",A5Y(ANw),"ce",A5Y(AML)],WZ,0,HN,[CD],0,3,0,0,["bU",A5X(AYf),"cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g),"bM",A5W(A0R),"cj",A5X(ALN)],SN,0,Cx,[],0,3,0,0,["bM",A5W(ALz),"ce",A5Y(AUK)],Ds,0,Cx,[],0,3,0,0,["bM",A5W(AAf),"ce",A5Y(SJ)]]);
$rt_metadata([Rd,"SelectFileTest",5,Ds,[],0,3,0,0,0,Xe,0,CG,[],0,3,0,0,0,WB,"RenderTexture",5,Ds,[],0,3,0,0,["cj",A5X(AOZ),"bM",A5W(AWC),"ce",A5Y(A2s)],SL,"ScissorDemo",5,Ds,[],0,3,0,0,["bM",A5W(A24),"ce",A5Y(AOK)],AAz,0,Cx,[],0,3,0,0,["bM",A5W(ATG),"ce",A5Y(AWP),"cj",A5X(A0x)],Kq,"ClipboardTest",5,Ds,[CD],0,3,0,0,["bU",A5X(AYf),"cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(APF)],Sx,"CodiconDemo",5,Ds,[],0,3,0,0,["bM",A5W(AUj)],G7,0,Cx,[CD],1,3,0,0,["bU",A5X(AYf),"cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g),"bM",A5W(AFj)],Tl,
0,G7,[],0,3,0,0,["cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g),"ce",A5Y(A0k),"bU",A5X(A1e)],Tk,0,G7,[],0,3,0,0,["cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g),"bU",A5X(A2K),"bM",A5W(ANs),"ce",A5Y(AMf)],V$,0,CG,[C2],0,3,0,0,["fV",A5Y(APh)],Eq,"WindowDemo",6,CG,[C2],0,3,[0,0,0],0,["jq",A5W(AWm),"pr",A5W(AP0),"kK",A5X(AIM),"fV",A5Y(A01)],Qv,"EditorInViewDemo",5,Eq,[C2,EF,Fi],0,3,[0,0,0],0,["cj",A5X(AWj),"jq",A5W(AMO),"pr",A5W(AU7),"kK",A5X(A2M),"e8",A5X(ASJ),"g6",A5X(AR5)],W3,0,B,[CD],0,0,0,0,["cn",A5Y(ATu),"dB",A5Y(AL6),
"cy",A5Z(A0g),"bU",A5X(A0O)],K3,0,B,[],3,3,0,0,["rM",A5Y(AMB)],RS,"ProjectViewDemo",5,Eq,[EF,K3],0,3,[0,0,0],0,["jq",A5W(AQ2),"kK",A5X(AQV),"e8",A5X(AY2),"zB",A5X(ASt),"xt",A5X(ALU),"uR",A5X(AOp),"rM",A5Y(ASe)],ACC,0,Cx,[CD],0,3,0,0,["bU",A5X(AYf),"cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g),"ce",A5Y(A2E),"bM",A5W(AXH),"cj",A5X(ASu)],TQ,0,CG,[C2],0,3,0,0,["fV",A5Y(AT6)],OU,0,Ky,[],0,3,0,0,["f$",A5W(AV4)],PI,"DiffMiddleDemo",8,Eq,[C2],0,3,[0,0,0],0,["jq",A5W(AW4)],YS,"FileViewDemo",6,Eq,[C2],0,3,[0,0,0],0,["jq",
A5W(AZf),"kK",A5X(A0s)],Kc,0,B,[],0,3,0,0,0,AFN,0,B,[],0,3,0,0,0,AEM,0,B,[],3,3,0,0,0,AIb,0,B,[],0,3,0,0,0,AGb,0,B,[],3,3,0,0,0,AHT,0,B,[],0,3,0,0,0,MD,0,B,[Jp,C7],0,3,0,0,0,KJ,0,MD,[],0,0,0,0,0,AK7,0,B,[],0,3,0,0,0,Yz,0,B,[Ct],0,3,0,0,["H",A5X(AVO)],Yx,0,B,[W],0,3,0,0,["g",A5X(AXf)],Yy,0,B,[CW],0,3,0,0,["H",A5X(AS4)],AHP,0,Kn,[],0,3,0,0,0,TR,0,B,[CD],0,0,0,0,["bU",A5X(AV2),"cy",A5Z(ALH),"cn",A5Y(AVV),"dB",A5Y(AVn)],Y0,0,B,[Ct],0,3,0,0,["H",A5X(A1B)],YZ,0,B,[Ct],0,3,0,0,["H",A5X(AZ0)],YY,0,B,[EW],0,3,0,0,["h$",
A5Y(AYk)],YX,0,B,[V],0,3,0,0,["f",A5W(AUY)],YW,0,B,[CW],0,3,0,0,["H",A5X(ARm)],YV,0,B,[EK],0,3,0,0,["dy",A5Z(A1H)],Ho,0,B2,[],0,3,0,0,0,AGN,0,B,[],3,3,0,0,0,Wz,0,B,[CD],0,0,0,0,["bU",A5X(AYf),"cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(AN3)],Ww,0,B,[],0,3,0,0,0,AGc,0,B,[],0,3,0,0,0,AI3,0,B,[],0,3,0,0,["bJ",A5X(A0Y)],ABH,0,B,[Ct],0,3,0,0,["H",A5X(AQ0)],ABD,0,B,[CW],0,3,0,0,["H",A5X(ASN)],ABE,0,B,[V],0,3,0,0,["f",A5W(A29)]]);
$rt_metadata([ABF,0,B,[V],0,3,0,0,["f",A5W(AMp)],BN,0,B,[],0,3,0,0,0,Us,0,B,[Ct],0,3,0,0,["H",A5X(AYe)],Ut,0,B,[CW],0,3,0,0,["H",A5X(AL7)],AHv,0,B,[],0,3,0,0,0,O_,0,B,[C2],0,3,0,0,["fV",A5Y(AQ7)],O$,0,B,[Ct],0,3,0,0,["H",A5X(AZB)],ZM,0,B,[],3,3,0,0,0,AIi,0,B,[ZM],0,3,0,0,0,WK,0,B,[CD],0,0,0,0,["cy",A5Z(A0g),"cn",A5Y(AU9),"dB",A5Y(AL2),"bU",A5X(AWY)],Z7,0,B,[EK],0,3,0,0,["dy",A5Z(AQ5)],QM,0,B,[Ct],0,3,0,0,["H",A5X(AQU)],RE,0,B,[CW],0,3,0,0,["H",A5X(AUl)],RD,0,B,[W],0,3,0,0,["g",A5X(A0B)],ABQ,0,B,[CD],0,0,0,0,
["dB",A5Y(AL6),"cy",A5Z(A0g),"bU",A5X(AZR),"cn",A5Y(AUa)],AGg,0,B,[],0,3,0,0,0,Dj,0,B,[],3,3,0,FK,0,YA,0,B,[CD],0,0,0,0,["cy",A5Z(A0g),"cn",A5Y(APb),"dB",A5Y(AVk),"bU",A5X(AN8)],VZ,0,B,[EK],0,3,0,0,["dy",A5Z(A1E)],ADj,0,B,[Ct],0,3,0,0,["H",A5X(ANl)],ADi,0,B,[EW],0,3,0,0,["h$",A5Y(AYq)],ADh,0,B,[EW],0,3,0,0,["h$",A5Y(ANr)],ADg,0,B,[E9],0,3,0,0,["cC",A5W(AQk)],ADk,0,B,[E9],0,3,0,0,["cC",A5W(A0_)],Sd,0,B,[Ct],0,3,0,0,["H",A5X(ATQ)],Px,0,B,[Ct],0,3,0,0,["H",A5X(ALX)],Py,0,B,[CW],0,3,0,0,["H",A5X(AXD)],Pz,0,B,[W],
0,3,0,0,["g",A5X(AZP)],PA,0,B,[CW],0,3,0,0,["H",A5X(A1w)],Xy,0,B,[CW],0,3,0,0,["H",A5X(ANL)],QT,0,B,[Ct],0,3,0,0,["H",A5X(APG)],AA1,0,B,[CW],0,3,0,0,["H",A5X(ARU)],AHg,0,B,[],3,3,0,0,0,Uw,0,B,[CW],0,3,0,0,["H",A5X(ARV)],Uv,0,B,[Ct],0,3,0,0,["H",A5X(ARl)],Dp,0,B,[],3,3,0,AOc,0,Cp,0,CH,[],12,3,0,T1,0,Ks,0,B,[],0,3,0,0,0,I0,0,B,[],0,3,0,0,0,AJU,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AU6,0,X5,0,B,[BT],3,3,0,0,0,Yf,0,B,[X5],0,3,0,0,["BN",A5Y(AXj)],X6,0,B,[BT],3,3,0,0,0,Yd,0,B,[X6],0,3,0,0,["BN",A5Y(AX0)],AE6,0,B,[],0,
3,0,0,0,AIg,0,B,[BT],3,3,0,0,0,Vb,0,B,[],0,3,0,0,0,DT,0,B,[],3,3,0,AYZ,0,H0,0,B,[],3,3,0,0,0]);
$rt_metadata([Qa,0,B,[H0],0,3,0,0,["wL",A5Z(A0r)],Qb,0,B,[H0],0,3,0,0,0,TT,0,B,[W],0,3,0,0,["g",A5X(AZu)],PR,0,B,[W],0,3,0,0,["g",A5X(ANX)],PQ,0,B,[W],0,3,0,0,["g",A5X(AME)],PN,0,B,[W],0,3,0,0,["g",A5X(ALP)],PL,0,B,[W],0,3,0,0,["g",A5X(A2L)],AHY,0,B,[],0,3,0,0,0,UR,0,B,[W],0,3,0,0,["g",A5X(AX2)],ACe,0,B,[Ct],0,3,0,0,["H",A5X(AOV)],AKG,0,B,[],0,3,0,0,["bJ",A5X(AWp)],I8,0,B,[],0,3,0,0,0,Ko,0,B,[],4,3,0,0,0,AIF,0,B,[],0,3,0,0,0,Cv,0,CH,[],12,3,0,AFh,0,ALa,0,B,[],0,3,0,0,0,AFC,0,B,[BT],4,3,0,0,0,ALj,0,B,[],0,3,
0,0,0,AEm,0,B,[],3,3,0,0,0,C1,0,B,[BT],1,3,0,0,0,AJ$,0,C1,[],1,3,0,0,0,AKu,0,C1,[],1,3,0,0,0,AIU,0,C1,[],1,3,0,0,0,AI5,0,C1,[],1,3,0,0,0,AKJ,0,C1,[],1,3,0,0,0,Vl,0,B,[V],0,3,0,0,["f",A5W(APw)],HK,0,CH,[],12,3,0,AQE,0,PE,0,B,[BD],0,3,0,0,["bc",A5X(AVl)],ZC,0,B,[],0,3,0,0,0,AIB,0,B,[],0,3,0,0,0,Gs,0,B,[],0,3,0,0,0,AFt,0,B,[],4,3,0,0,0,Tw,0,B,[],0,0,0,0,0,AIH,0,B,[],3,3,0,0,0,ABa,0,B,[EK],0,3,0,0,["dy",A5Z(APB)],V6,0,B,[EW],0,3,0,0,["h$",A5Y(A2u)],V5,0,B,[E9],0,3,0,0,["cC",A5W(AQc)],V7,0,B,[C_],0,3,0,0,0,XG,0,
B,[CD],0,0,0,0,["cn",A5Y(ATu),"dB",A5Y(AL6),"cy",A5Z(A0g),"bU",A5X(A3a)],AFA,0,B,[BT],1,3,0,0,0,AHb,0,B,[C2,FV,C_],0,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo),"fV",A5Y(A2S),"iv",A5X(AP_),"b4",A5W(AR3)],W8,0,B,[W],0,3,0,0,["g",A5X(APW)],U4,0,B,[W],0,3,0,0,["g",A5X(A2w)],Q6,0,B,[W],0,3,0,0,["g",A5X(AVQ)],PT,0,B,[Dd],0,3,0,0,["cC",A5W(AVa)],AJ6,0,B,[],3,3,0,0,0,LV,0,B,[],3,3,0,0,0,Q_,0,B,[LV],0,3,0,0,["zk",A5X(AV_)],Pu,0,B,[BD],0,3,0,0,["bc",A5X(A1L)],AGA,0,B,[],0,3,0,0,0]);
$rt_metadata([QN,0,B,[C_],0,3,0,0,0,AEp,0,B,[],0,3,0,0,0,T_,0,B,[],0,3,0,0,0,L9,0,B,[],0,3,0,0,0,Sy,0,B,[],3,3,0,0,0,ACl,0,B,[W],0,3,0,0,["g",A5X(AWa)],Ge,0,I9,[],0,3,0,0,0,ADw,0,FA,[],0,3,0,0,0,ACK,0,B,[W],0,3,0,0,["g",A5X(AUn)],Ui,0,B,[W],0,3,0,0,["g",A5X(A18)],VP,0,B,[V],0,3,0,0,["f",A5W(A0I)],G6,0,B,[],1,0,0,0,0,Ze,"FolderDiffWindow",8,G6,[],0,3,[0,0,0],0,["b4",A5W(AMP),"BE",A5X(AXK)],Vc,0,B,[Dd],0,3,0,0,["cC",A5W(AUf)],ADL,0,Es,[CK],0,3,0,0,0,Gw,0,B,[],0,0,0,0,0,JE,0,B,[],4,3,0,0,0,Uc,0,B,[],0,3,0,0,0,Ot,
0,B,[],1,3,0,0,0,ACP,0,B,[CK],0,3,0,0,["bJ",A5X(ALQ),"gH",A5W(ASf),"ms",A5X(AZ8)],AFK,0,C1,[],1,3,0,0,0,UM,0,B,[V],0,3,0,0,["f",A5W(AMK)],AD6,0,B,[],3,3,0,0,0,HZ,0,CB,[],1,3,0,0,["b4",A5W(AZl),"dw",A5X(AQN),"cj",A5X(AVi),"dz",A5Z(ANz),"cy",A5Z(A1R),"cn",A5Y(ATe),"dB",A5Y(A11),"bU",A5X(A2n),"dy",A5Z(AOa),"ke",A5W(A2a)],QY,0,HZ,[Fi],0,3,0,0,["BT",A5W(APr),"hW",A5W(AXF)],Zq,0,B,[V],0,3,0,0,["f",A5W(ATg)],Zp,0,B,[V],0,3,0,0,["f",A5W(AYD)],Y4,0,B,[W],0,3,0,0,["g",A5X(AVy)],Ru,0,B,[W],0,3,0,0,["g",A5X(AZi)],Fp,0,
CB,[],0,3,0,0,0,Ro,0,Fp,[FV],0,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo),"b4",A5W(A16),"lB",A5Y(AWM),"dw",A5X(AU8),"oZ",A5X(AZ6),"rJ",A5X(A1a),"bU",A5X(AP4),"cn",A5Y(AOh),"cy",A5Z(AR$),"iv",A5X(A1n)],U$,0,B,[V],0,3,0,0,["f",A5W(ATV)],AFg,0,CB,[],0,3,0,0,["b4",A5W(ASR),"dz",A5Z(AOH),"dw",A5X(A0z),"cy",A5Z(ATc),"cn",A5Y(AST),"dB",A5Y(AQ$),"bU",A5X(AQW),"dy",A5Z(AW6),"hW",A5W(AHS)],ADE,0,B,[W],0,3,0,0,["g",A5X(ANA)],ADG,0,B,[W],0,3,0,0,["g",A5X(ALR)],Qc,0,Fp,[],0,3,0,0,["hW",A5W(AT3),"oZ",A5X(A0a),"dw",A5X(AUh),"cn",
A5Y(AQu)],ADF,0,B,[V],0,3,0,0,["f",A5W(AS7)],Up,0,CB,[],0,3,0,0,0,Ik,0,HZ,[],1,0,0,0,["BT",A5W(AP1)],AFQ,0,Ik,[EF],0,0,0,0,0,Hp,0,B,[],0,3,0,0,0,Dh,0,Hp,[],0,3,0,0,0,SH,0,B,[V],0,3,0,0,["f",A5W(AV0)],SG,0,B,[V],0,3,0,0,["f",A5W(AUE)],Z9,0,Es,[CK],0,3,0,0,0,AB9,0,B,[W],0,3,0,0,["g",A5X(A2J)],AD4,0,B,[V],0,3,0,0,["f",A5W(AYo)],Xw,0,B,[V],0,3,0,0,["f",A5W(AVE)],U2,0,B,[V],0,3,0,0,["f",A5W(A0U)],ABy,0,B,[],0,3,0,0,0]);
$rt_metadata([J6,0,B,[],0,3,0,0,0,OC,0,B,[],3,3,0,0,0,Lq,0,Fp,[FV],0,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo),"b4",A5W(ARE),"lB",A5Y(AMt),"dw",A5X(AYW),"cy",A5Z(A1D),"cn",A5Y(ANm)],AJt,0,Lq,[],0,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo)],AF8,0,B,[Ms],0,3,0,0,["wp",A5W(AZq),"uA",A5W(AOo),"lj",A5W(AS2),"kv",A5W(A1O),"hI",A5X(ATS),"kX",A5W(APQ),"l0",A5W(AVp),"pp",A5Y(AQn),"qf",A5X(AZa),"pw",A5W(MF)],ABG,0,B,[],0,3,0,0,0,Xg,0,B,[V],0,3,0,0,["f",A5W(AT8)],SI,0,B,[V],0,3,0,0,["f",A5W(APU)],P0,0,B,[W],0,3,0,0,["g",A5X(AL4)],PZ,
0,B,[W],0,3,0,0,["g",A5X(AMk)],AD_,0,B,[Gf],0,3,0,0,["qe",A5Y(ASw)],Le,0,B,[],0,3,0,0,0,AK9,0,G1,[],0,0,0,0,["ud",A5X(A20)],C$,0,Bu,[],0,3,0,0,0,AKi,0,FA,[],0,3,0,0,0,ALd,0,B,[],0,3,0,0,0,OV,0,B,[W],0,3,0,0,["g",A5X(AUC)],ACI,0,B,[W],0,3,0,0,["g",A5X(AY7)],Ok,0,BH,[],0,3,0,0,0,Sj,0,B,[W],0,3,0,0,["g",A5X(AWU)],Si,0,B,[W],0,3,0,0,["g",A5X(A15)],Fh,0,B,[],3,3,0,0,0,Xb,0,B,[Fh],0,0,0,0,["cD",A5W(B_),"b_",A5W(Ca),"pn",A5W(Zw)],Lk,0,Ot,[],1,3,0,0,0,Ta,0,Lk,[],0,3,0,0,0,Yl,0,B,[W],0,3,0,0,0,VI,0,B,[W],0,3,0,0,["g",
A5X(ATB)],Pb,0,B,[Dd],0,3,0,0,["cC",A5W(ASb)],Pa,0,B,[Dd],0,3,0,0,["cC",A5W(AWG)],AAw,0,B,[Dd],0,3,0,0,["cC",A5W(AZL)],XI,0,B,[Dd],0,3,0,0,["cC",A5W(AUL)],AAe,0,B,[Ce],0,3,0,0,["bh",A5X(A2p)],AFO,0,B,[BT],1,3,0,0,0,ACG,0,B,[Ce],0,3,0,0,["bh",A5X(AOv)],AHH,0,B,[BD],0,3,0,0,0,AGM,0,B,[BD],0,3,0,0,0,W$,0,B,[W],0,3,0,0,["g",A5X(ANj)],W9,0,B,[W],0,3,0,0,["g",A5X(ASI)],RW,0,B,[V],0,3,0,0,["f",A5W(AYB)],ABc,0,B,[V],0,3,0,0,["f",A5W(ALt)],AE7,0,B,[],0,3,0,0,0,ABd,0,B,[V],0,3,0,0,["f",A5W(AOS)],Tp,0,B,[V],0,3,0,0,["f",
A5W(ATv)],AHG,0,B,[],0,3,0,0,0,ACL,0,B,[V],0,3,0,0,["f",A5W(A2x)],QI,0,B,[],0,3,0,0,0,Eg,0,Bu,[],0,3,0,0,0,AG$,0,B,[],0,3,0,0,0,SK,0,Ee,[Ex,C7],0,3,0,0,0,UK,0,B,[],0,3,0,0,0]);
$rt_metadata([Uq,0,B,[],0,3,0,0,0,WO,0,B,[D$],0,3,0,0,0,SZ,0,B,[W],0,3,0,0,["g",A5X(ASK)],YB,0,Es,[CK],0,3,0,0,0,J$,0,B,[],4,3,0,0,0,T2,0,B,[V],0,3,0,0,["f",A5W(AL9)],T3,0,B,[V],0,3,0,0,["f",A5W(AN$)],T4,0,B,[V],0,3,0,0,["f",A5W(A17)],T5,0,B,[V],0,3,0,0,["f",A5W(AQg)],T6,0,B,[V],0,3,0,0,["f",A5W(ASp)],OZ,0,B,[Ce],0,3,0,0,["bh",A5X(A3d)],VL,0,B,[],3,3,0,A4b,0,PF,0,CB,[],0,3,0,0,["dw",A5X(ALZ)],ABX,0,B,[],0,3,0,0,0,TI,0,B,[],3,3,0,AO7,0,Rj,0,B,[V],0,3,0,0,["f",A5W(AY$)],WH,0,B,[V],0,3,0,0,["f",A5W(AY6)],Q0,0,
B,[Fi],0,3,0,0,["g6",A5X(A0y)],QZ,0,B,[Dd],0,3,0,0,["cC",A5W(AWI)],Xf,0,B,[],0,3,0,0,0,AHf,0,B,[],0,3,0,0,0,AEQ,0,B,[],3,3,0,0,0,R6,0,B,[V],0,3,0,0,["f",A5W(AXN)],ACY,0,B,[V],0,3,0,0,["f",A5W(AT4)],OQ,0,B,[V],0,3,0,0,["f",A5W(AO1)],OP,0,B,[D$],0,3,0,0,0,Yt,0,B,[],1,3,0,0,0,Zm,0,B,[Mt],3,3,0,0,0,Ps,0,B,[Zm],3,3,0,0,0,Id,0,B,[Ps],1,3,0,0,0,AAh,0,Id,[],0,3,0,0,0,Rs,0,B,[],3,3,0,0,0,P3,0,B,[W],0,3,0,0,0,ADC,0,B,[W],0,3,0,0,["g",A5X(AMu)],AFX,0,B,[],3,3,0,0,0,JC,0,GY,[],0,0,0,0,0,Ib,0,Bu,[],0,3,0,0,0,ACh,0,B,[W],
0,3,0,0,["g",A5X(AS1)],ADP,0,B,[Ce],0,3,0,0,["bh",A5X(A0P)],ADO,0,B,[Ce],0,3,0,0,["bh",A5X(AWF)],ADe,0,B,[Ce],0,3,0,0,["bh",A5X(AXs)],ADd,0,B,[Ce],0,3,0,0,["bh",A5X(AXZ)],S5,0,B,[],0,3,0,0,0,ABY,0,B,[H0],0,3,0,0,["wL",A5Z(APZ)],AKn,0,B,[],0,3,0,0,0,Q$,0,B,[W],0,3,0,0,["g",A5X(AVF)],AEw,0,B,[W],0,3,0,0,0,Tt,0,B,[CA],0,3,0,0,["cv",A5X(AU$)],Vv,0,B,[BD],0,3,0,0,0,FO,0,B,[],0,3,0,0,0]);
$rt_metadata([AIu,0,B,[],0,3,0,0,0,AEW,0,B,[],0,3,0,0,0,ALl,0,B,[],0,3,0,0,0,ADx,0,B,[V],0,3,0,0,["f",A5W(AVq)],ADy,0,B,[V],0,3,0,0,["f",A5W(AXM)],F0,0,B,[],0,3,0,0,0,VS,0,B,[W],0,3,0,0,["g",A5X(AOB)],NP,0,F0,[],0,3,0,0,0,Lg,0,F0,[],0,3,0,0,0,UY,0,B,[W],0,3,0,0,["g",A5X(AVt)],QP,0,B,[],0,3,0,0,0,Qh,0,B,[W],0,3,0,0,["g",A5X(AYX)],Ql,0,B,[HA],3,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],Fw,0,FC,[Ql],1,3,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],Nu,0,Fw,[],1,0,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],Uj,0,Nu,[],0,0,0,0,["fm",A5X(AUD),
"pG",A5X(AX_)],N9,0,Ee,[],1,0,0,0,0,Ug,0,N9,[],0,0,0,0,0,On,0,Fq,[LI],1,0,0,0,["fm",A5X(AUD),"jg",A5W(AWA),"qd",A5X(AQz),"pG",A5X(APA)],Uh,0,On,[],0,0,0,0,["fm",A5X(AUD),"kG",A5X(AQG),"c2",A5W(APT),"b9",A5W(ANP),"eG",A5W(AMb)],Ue,0,B,[Fh],0,0,0,0,["cD",A5W(ALW),"b_",A5W(AZJ),"pn",A5W(ASA)],Yr,0,B,[Fh],3,3,0,0,0,Uf,0,B,[Yr],0,0,0,0,0,Wc,0,B,[Gf],0,3,0,0,0,Rq,0,B,[D$],0,3,0,0,["H",A5X(A3f)],Ku,0,Eg,[],0,3,0,0,0,JJ,0,Bu,[],0,3,0,0,0,Og,0,Bu,[],0,3,0,0,0,Yj,0,B,[W],0,3,0,0,["g",A5X(AZK)],AHZ,0,B,[W],0,3,0,0,0,ABo,
0,B,[W],0,3,0,0,["g",A5X(AQp)],Q9,0,B,[Rs],0,3,0,0,0,Vo,0,B,[W],0,3,0,0,["g",A5X(AXT)],AEC,0,B,[],0,3,0,0,0,AAx,0,B,[V],0,3,0,0,["f",A5W(AVr)],Ha,0,B,[],0,3,0,0,0,Qw,0,Fw,[],0,0,0,0,["pG",A5X(AX_)],TL,0,Fw,[],0,0,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],Qy,0,FC,[],0,0,0,0,["fm",A5X(AUD),"pG",A5X(AX_)],Wf,0,B,[W],0,3,0,0,["g",A5X(AW0)],T8,0,B,[W],0,3,0,0,["g",A5X(AYC)],KA,0,B,[],0,3,0,0,["bJ",A5X(AJ3)],Ml,0,KA,[],0,3,0,0,["bJ",A5X(AVP)],E8,0,B,[],0,3,0,0,["bJ",A5X(AIx)],HI,0,E8,[],0,3,0,0,0,Kh,0,E8,[],0,3,0,0,["bJ",
A5X(A1_)],Jm,0,E8,[],0,3,0,0,["bJ",A5X(AVd)],Yk,0,B,[W],0,3,0,0,["g",A5X(AZN)],AFq,0,Id,[],0,3,0,0,0,AA4,0,B,[W],0,3,0,0,["g",A5X(ARz)]]);
$rt_metadata([M$,"FileDiffWindow",8,G6,[EF],0,3,[0,0,0],0,["e8",A5X(A0W),"b4",A5W(A1U),"BE",A5X(AVA)],Wg,0,B,[Dd],0,3,0,0,["cC",A5W(A1j)],AAj,0,B,[Hh],0,3,0,0,["qk",A5Y(AUJ)],Wx,0,B,[],0,3,0,0,0,RK,0,B,[],0,3,0,0,0,Vz,0,B,[W],0,3,0,0,["g",A5X(ALu)],UQ,0,B,[LV],0,3,0,0,["zk",A5X(Nz)],UL,0,Ik,[EF],0,0,0,0,0,V9,0,B,[EW],0,3,0,0,0,V8,0,B,[E9],0,3,0,0,0,RA,0,B,[Hh],0,3,0,0,["qk",A5Y(ANB)],XW,0,B,[Mb],3,3,0,0,0,ACr,0,B,[XW],0,0,0,0,["pb",A5W(Hq),"tr",A5W(A1$),"cO",A5W(AFs)],AHE,0,B,[CK],0,3,0,0,["bJ",A5X(ARb)],WJ,
0,B,[W],0,3,0,0,["g",A5X(AYA)],V1,0,B,[W],0,3,0,0,["g",A5X(A3c)],OY,0,B,[W],0,3,0,0,["g",A5X(A1X)],FI,0,B,[],0,0,0,0,0,AAE,0,FI,[Fh],0,0,0,0,0,TE,0,FI,[Fh],0,0,0,0,0,ZE,0,FI,[Fh],0,0,0,0,0,AEO,0,B,[W],0,0,0,0,0,ZB,0,B,[C7],4,3,0,0,0,AAc,0,B,[W],0,3,0,0,["g",A5X(AQw)],AAb,0,B,[W],0,3,0,0,["g",A5X(AZ9)],XL,0,B,[W],0,3,0,0,["g",A5X(AWt)],HY,0,B,[],3,3,0,0,0,Th,0,B,[HY],0,3,0,0,["lW",A5Z(AYY)],Ti,0,B,[HY],0,3,0,0,["lW",A5Z(AXE)],IW,0,B,[C7,CK],0,3,0,0,0,KT,0,B,[],3,3,0,0,0,R5,0,B,[KT],0,3,0,0,0,X0,0,B,[KT],3,3,
0,0,0,AFY,0,B,[X0],0,3,0,0,0,Sn,0,B,[HY],0,3,0,0,["lW",A5Z(AZr)],Sm,0,B,[D$],0,3,0,0,["H",A5X(ATP)],Sl,0,B,[D$],0,3,0,0,["H",A5X(AR4)],Sp,0,B,[HY],0,3,0,0,["lW",A5Z(AY5)],BS,0,B,[],1,0,0,0,["cr",A5Z(II),"cA",A50(IP),"iY",A5W(AVZ),"T",A5X(ATm),"b1",A5X(A1F),"gC",A5W(A2q),"eU",A5W(Kz)],V2,0,B,[W],0,3,0,0,["g",A5X(AZv)],V3,0,B,[W],0,3,0,0,["g",A5X(AOl)],RJ,0,B,[V],0,3,0,0,["f",A5W(AXl)],XK,0,B,[W],0,3,0,0,["g",A5X(AQJ)],AAT,0,B,[V],0,3,0,0,["f",A5W(AMr)],Io,0,Dh,[],0,3,0,0,0,CZ,0,BS,[],0,0,0,OD,["c",A5Z(AMq),"I",
A5X(AMG)],G8,0,B,[],0,0,0,0,0,Ki,0,BU,[],0,3,0,0,0,XH,0,B,[W],0,3,0,0,["g",A5X(ASr)],R4,0,CZ,[],0,0,0,0,["c",A5Z(AU_),"I",A5X(A0E)]]);
$rt_metadata([AD2,0,CZ,[],0,0,0,0,["c",A5Z(AWk)],QR,0,CZ,[],0,0,0,0,["c",A5Z(AMM)],SM,0,CZ,[],0,0,0,0,["c",A5Z(AVc),"I",A5X(AZM)],F8,0,CZ,[],0,0,0,0,["c",A5Z(ATx)],Cc,0,BS,[],1,0,0,0,["c",A5Z(A2X),"ca",A5W(A1g),"I",A5X(APj)],AHc,0,Cc,[],0,0,0,0,["bz",A5Y(A0X),"cr",A5Z(AW5),"cA",A50(AWg),"I",A5X(AVb)],B8,0,BS,[],0,0,0,0,["c",A5Z(AOE),"T",A5X(ARv),"b1",A5X(AYw),"I",A5X(ARZ),"eU",A5W(AM7)],Kt,0,B8,[],0,0,0,0,["c",A5Z(ARj),"I",A5X(A0j)],D_,0,Kt,[],0,0,0,0,["c",A5Z(AWD),"T",A5X(A0c)],Ws,0,D_,[],0,0,0,0,["c",A5Z(ARt),
"I",A5X(ATr)],ACT,0,D_,[],0,0,0,0,["c",A5Z(AMD),"I",A5X(A1k)],ZF,0,D_,[],0,0,0,0,["c",A5Z(AM5),"I",A5X(A2_)],Tb,0,D_,[],0,0,0,0,["c",A5Z(AUS),"I",A5X(A0u)],HT,0,B8,[],0,0,0,0,["c",A5Z(ALT),"cr",A5Z(AQb),"cA",A50(A0G),"b1",A5X(AYt),"gC",A5W(AZI),"eU",A5W(ATW)],KF,0,Dh,[],0,3,0,0,0,G$,0,B,[],1,0,0,0,0,Z,0,G$,[],1,0,0,Qd,["dW",A5W(AVK),"fT",A5W(AVo),"l5",A5W(A1c),"ir",A5W(A2l)],AE1,0,Z,[],0,0,0,0,["n",A5X(Db),"dW",A5W(C5),"fT",A5W(AW1),"l5",A5W(ATd),"cO",A5W(AY8),"ir",A5W(AOg)],MM,0,Bu,[],0,3,0,0,0,Em,0,BS,[],
1,0,0,0,["b1",A5X(ASy),"I",A5X(A1N),"eU",A5W(AQt)],Dc,0,Em,[],0,0,0,0,["c",A5Z(AUT)],FT,0,Dc,[],0,0,0,0,["c",A5Z(AVx)],C0,0,Em,[],0,0,0,0,["c",A5Z(AU4)],E7,0,Dc,[],0,0,0,0,["c",A5Z(AYK),"T",A5X(AUy)],U8,0,Dc,[],0,0,0,0,["c",A5Z(A2U),"cr",A5Z(AQT)],Bf,0,B,[],1,0,0,0,0,Du,0,BU,[],0,3,0,0,0,WC,0,G$,[Ex],0,0,0,0,["cO",A5W(AZc)],XF,0,BS,[],0,0,0,0,["c",A5Z(APC),"I",A5X(AZH)],ADs,0,B,[Ex,C7],0,3,0,0,0,O3,0,B8,[],0,0,0,0,0,Rh,0,B8,[],0,0,0,0,["c",A5Z(AMn),"T",A5X(AZA),"I",A5X(AMR),"b1",A5X(AMF)],D4,0,B8,[],0,0,0,0,
["c",A5Z(AWW),"n",A5X(AOt),"b1",A5X(AMj),"T",A5X(A08),"I",A5X(AN9)],MJ,0,D4,[],0,0,0,0,["n",A5X(APk)],AEV,0,Cc,[],0,0,0,0,["bz",A5Y(AYh)],EE,0,Cc,[],0,0,0,0,["bz",A5Y(Wi),"b1",A5X(ARx)],X2,0,B8,[],0,0,0,0,["T",A5X(AQi),"c",A5Z(ALC),"b1",A5X(AVS),"I",A5X(ATi)],EM,0,Cc,[],0,0,0,0,["ca",A5W(AX8),"bz",A5Y(AOO),"cr",A5Z(ANV),"cA",A50(APx),"b1",A5X(ATa)],AHA,0,Cc,[],0,0,0,0,["bz",A5Y(AUG)],AEi,0,Cc,[],0,0,0,0,["bz",A5Y(ALL)],FX,0,B8,[],0,0,0,0,["T",A5X(A2t),"c",A5Z(ARi),"b1",A5X(APD),"I",A5X(A0d)],VB,0,FX,[],0,0,
0,0,0,ABq,0,FX,[],0,0,0,0,0,We,0,C0,[],0,0,0,0,["c",A5Z(AWo)],YC,0,C0,[],0,0,0,0,["c",A5Z(AY0)],GE,0,C0,[],0,0,0,0,["c",A5Z(A06),"T",A5X(A10)],QB,0,GE,[],0,0,0,0,["c",A5Z(APt),"T",A5X(AZe)],Go,0,C0,[],0,0,0,0,["c",A5Z(A28)],Ph,0,Go,[],0,0,0,0,["c",A5Z(AO3)],RZ,0,C0,[],0,0,0,0,["c",A5Z(AT2)]]);
$rt_metadata([Zh,0,GE,[],0,0,0,0,["c",A5Z(AMS)],TP,0,Go,[],0,0,0,0,["c",A5Z(AVh)],R0,0,Em,[],0,0,0,0,["c",A5Z(A2Y),"cr",A5Z(ASW)],XM,0,Em,[],0,0,0,0,["c",A5Z(ARy),"cr",A5Z(ALD)],FB,0,B,[],1,0,0,0,0,AEf,0,Dc,[],0,0,0,0,["c",A5Z(AMa)],U3,0,E7,[],0,0,0,0,["c",A5Z(AQI)],Ya,0,FT,[],0,0,0,0,["c",A5Z(A0J)],Zg,0,Dc,[],0,0,0,0,["c",A5Z(ARu)],ABB,0,E7,[],0,0,0,0,["c",A5Z(AMh)],RP,0,FT,[],0,0,0,0,["c",A5Z(A0Z)],Lj,0,BS,[],4,0,0,0,["c",A5Z(AYv),"I",A5X(AXY)],AFe,0,BS,[],0,0,0,0,["c",A5Z(AVI),"I",A5X(AVR)],XJ,0,BS,[],0,
0,0,0,["c",A5Z(APm),"I",A5X(AUq)],Vu,0,BS,[],4,0,0,0,["c",A5Z(AZ2),"I",A5X(AWh)],ADc,0,BS,[],0,0,0,0,["c",A5Z(AZy),"I",A5X(AUF)],WV,0,BS,[],0,0,0,0,["c",A5Z(AWc),"I",A5X(AOA)],AHl,0,B8,[],0,0,0,0,["c",A5Z(AT5),"T",A5X(AVU),"iY",A5W(AZk),"I",A5X(AVT)],AE0,0,B8,[],4,0,0,0,["c",A5Z(AZs),"T",A5X(A0A),"iY",A5W(ALq),"I",A5X(AUg)],AKT,0,BS,[],4,0,0,0,["c",A5Z(APH),"I",A5X(AXh)],AJ0,0,BS,[],0,0,0,0,["c",A5Z(ARc),"I",A5X(AXb)],AH$,0,BS,[],0,0,0,0,["c",A5Z(AXU),"I",A5X(ANb)],Ie,0,B8,[],0,0,0,0,["c",A5Z(AMd),"T",A5X(AZ_),
"I",A5X(ASd)],AKZ,0,Ie,[],0,0,0,0,["c",A5Z(ANf),"cr",A5Z(ATp),"cA",A50(AL1),"b1",A5X(AYV)],AJl,0,Ie,[],0,0,0,0,["c",A5Z(AP9)],PX,0,GT,[JK],0,3,0,0,["pQ",A50(AOj),"pf",A5Z(AVL),"j4",A5X(AV7),"p8",A5Y(A1f)],ZU,0,Cc,[],0,0,0,0,["bz",A5Y(ANu),"cr",A5Z(AVG),"cA",A50(AXm),"b1",A5X(AOT)],AEh,0,Cc,[],0,0,0,0,["bz",A5Y(AQd)],Pk,0,Cc,[],0,0,0,0,["bz",A5Y(A0K)],Hk,0,B,[],4,0,0,ASn,0,Wn,0,Cc,[],0,0,0,0,["bz",A5Y(ASD)],NU,0,B8,[],0,0,0,0,["T",A5X(AZF),"c",A5Z(AWi),"cr",A5Z(AOR),"cA",A50(AWH),"b1",A5X(AL0),"I",A5X(AS5)],N2,
0,B8,[],0,0,0,0,["T",A5X(AV6),"c",A5Z(ALG),"cr",A5Z(AZQ),"cA",A50(ASz),"b1",A5X(ANv),"I",A5X(AZW)],Ef,0,Cc,[],0,0,0,0,["bz",A5Y(A0l),"cr",A5Z(AY9),"cA",A50(AMX),"b1",A5X(A0f)],ACo,0,FB,[],0,0,0,0,["iR",A5X(AM1),"Af",A5Y(ASa)],ACp,0,FB,[],0,0,0,0,["iR",A5X(A00),"Af",A5Y(ATR)],AGL,0,B,[],0,0,0,0,0,AEu,0,B,[],0,0,0,0,0,NS,0,Bf,[],0,0,0,0,["F",A5W(AJr)],Ng,0,Bf,[],0,0,0,0,["F",A5W(AJW)],AGF,0,Bf,[],0,0,0,0,["F",A5W(A0D)],AG0,0,Bf,[],0,0,0,0,["F",A5W(AS8)],AG2,0,Bf,[],0,0,0,0,["F",A5W(AN0)],NO,0,Bf,[],0,0,0,0,["F",
A5W(AE3)],LO,0,NO,[],0,0,0,0,["F",A5W(AFx)],AH1,0,Bf,[],0,0,0,0,["F",A5W(AXB)],OI,0,LO,[],0,0,0,0,["F",A5W(AH8)],AJD,0,OI,[],0,0,0,0,["F",A5W(AQv)],AF2,0,Bf,[],0,0,0,0,["F",A5W(AWw)],AFa,0,Bf,[],0,0,0,0,["F",A5W(AQr)]]);
$rt_metadata([AIT,0,Bf,[],0,0,0,0,["F",A5W(ATU)],AKI,0,Bf,[],0,0,0,0,["F",A5W(AZh)],AH4,0,Bf,[],0,0,0,0,["F",A5W(AUM)],AKq,0,Bf,[],0,0,0,0,["F",A5W(AO8)],AGw,0,Bf,[],0,0,0,0,["F",A5W(ASj)],AHd,0,Bf,[],0,0,0,0,["F",A5W(AWu)],AEG,0,Bf,[],0,0,0,0,["F",A5W(ANG)],AIf,0,Bf,[],0,0,0,0,["F",A5W(A2f)],AKx,0,Bf,[],0,0,0,0,["F",A5W(AUH)],AGV,0,Bf,[],0,0,0,0,["F",A5W(API)],AJb,0,Bf,[],0,0,0,0,["F",A5W(ANM)],AF4,0,Bf,[],0,0,0,0,["F",A5W(AXo)],AHL,0,Bf,[],0,0,0,0,["F",A5W(AYp)],AKC,0,Bf,[],0,0,0,0,["F",A5W(ATj)],AFH,0,Bf,
[],0,0,0,0,["F",A5W(ARR)],AFm,0,Bf,[],0,0,0,0,["F",A5W(AQX)],AH2,0,Bf,[],0,0,0,0,["F",A5W(A0w)],KG,0,Bf,[],0,0,0,0,["F",A5W(AF3)],AKQ,0,KG,[],0,0,0,0,["F",A5W(AQO)],AJI,0,NS,[],0,0,0,0,["F",A5W(AVD)],AFk,0,Ng,[],0,0,0,0,["F",A5W(AOL)],AIW,0,Bf,[],0,0,0,0,["F",A5W(APX)],AI7,0,Bf,[],0,0,0,0,["F",A5W(ATI)],AJw,0,Bf,[],0,0,0,0,["F",A5W(AW_)],AJE,0,Bf,[],0,0,0,0,["F",A5W(ALw)],AIZ,0,B,[],4,0,0,0,0,AEU,0,B,[],4,3,0,0,0,WY,0,B,[],0,3,0,0,0,AGQ,0,B,[],0,3,0,0,0,AJi,0,B,[],4,3,0,0,0,Mz,0,Bu,[],0,3,0,0,0,Zc,0,B,[W],0,
3,0,0,["g",A5X(AYu)],Zb,0,B,[W],0,3,0,0,["g",A5X(AT0)],AIN,0,B,[D$],0,3,0,0,0,Sv,0,B,[W],0,3,0,0,["g",A5X(AXg)],ACj,0,B,[D$],0,0,0,0,["H",A5X(AN4)],ABJ,0,B,[V],0,3,0,0,["f",A5W(A1o)],ABM,0,B,[W],0,3,0,0,0,ABO,0,B,[W],0,3,0,0,["g",A5X(A13)],KM,0,B,[],3,3,0,0,0,PK,0,B,[KM],0,0,0,0,["t6",A5X(A0b),"xl",A5X(AXJ),"wo",A5W(ASE)],R3,0,B,[V],0,3,0,0,["f",A5W(ARh)],U7,0,Z,[],0,0,0,0,["n",A5X(AN6)],U5,0,Z,[],0,0,0,0,["n",A5X(AU3)],P8,0,Z,[],0,0,0,0,["n",A5X(APO),"cO",A5W(AXq)],XS,0,Z,[],0,0,0,0,["n",A5X(A0o)],XQ,0,Z,[],
0,0,0,0,["n",A5X(ASC)],XR,0,Z,[],0,0,0,0,["n",A5X(AYH)],XV,0,Z,[],0,0,0,0,["n",A5X(AWO)],XX,0,Z,[],0,0,0,0,["n",A5X(ALr)]]);
$rt_metadata([XT,0,Z,[],0,0,0,0,["n",A5X(AOG)],XU,0,Z,[],0,0,0,0,["n",A5X(AQh)],XY,0,Z,[],0,0,0,0,["n",A5X(ATs)],XZ,0,Z,[],0,0,0,0,["n",A5X(AWq)],P7,0,Z,[],0,0,0,0,["n",A5X(A3g)],Qo,0,Z,[],0,0,0,0,["n",A5X(AOJ)],P5,0,Z,[],0,0,0,0,["n",A5X(ANk)],P6,0,Z,[],0,0,0,0,["n",A5X(AXe)],P_,0,Z,[],0,0,0,0,["n",A5X(APo)],P4,0,Z,[],0,0,0,0,["n",A5X(A1s)],P9,0,Z,[],0,0,0,0,["n",A5X(AVN)],P$,0,Z,[],0,0,0,0,["n",A5X(ARL)],Me,0,B,[],3,3,0,0,0,AAq,0,B,[Me],4,3,0,0,0,Rm,0,B,[V],0,3,0,0,["f",A5W(AZ7)],Rk,0,B,[V],0,3,0,0,["f",A5W(AOC)],Rl,
0,B,[V],0,3,0,0,["f",A5W(ATA)],Rn,0,B,[V],0,3,0,0,["f",A5W(ALJ)],Ss,0,B,[V],0,3,0,0,["f",A5W(AS$)],Sr,0,B,[V],0,3,0,0,["f",A5W(AYL)],Sq,0,B,[V],0,3,0,0,["f",A5W(AZ1)],RI,0,B,[V],0,3,0,0,["f",A5W(AUt)],Q8,0,B,[],3,3,0,0,0,ZD,0,B,[V],0,3,0,0,["f",A5W(A2O)],AJK,0,B,[Hh],0,3,0,0,0,Qt,0,B,[V],0,3,0,0,["f",A5W(ARI)],Qr,0,B,[V],0,3,0,0,["f",A5W(AXa)],Qs,0,B,[V],0,3,0,0,["f",A5W(A2g)],T7,0,B,[V],0,3,0,0,["f",A5W(A0h)],T9,0,B,[V],0,3,0,0,["f",A5W(AQS)],Zd,0,B,[Dd],0,3,0,0,["cC",A5W(A1i)],ZJ,0,B,[V],0,3,0,0,["f",A5W(AMe)],ZH,
0,B,[V],0,3,0,0,["f",A5W(ANt)],ST,0,B,[V],0,3,0,0,["f",A5W(ATO)],SU,0,B,[V],0,3,0,0,["f",A5W(AMc)],SV,0,B,[V],0,3,0,0,["f",A5W(ANn)],SW,0,B,[V],0,3,0,0,["f",A5W(ATD)],S_,0,B,[V],0,3,0,0,["f",A5W(AYR)],SX,0,B,[Dd],0,3,0,0,["cC",A5W(A2Q)],ACJ,0,B,[],0,3,0,0,0,TB,0,B,[H0],0,3,0,0,0,Pd,0,HT,[],0,0,0,0,["cr",A5Z(AOn),"cA",A50(A27),"gC",A5W(AM$)],Rc,0,Bu,[],0,3,0,0,0,Vy,0,Bu,[],0,3,0,0,0,T$,0,Ge,[],0,3,0,0,0,Q7,0,Ge,[],0,3,0,0,0,Vw,0,B,[Ce],0,3,0,0,["bh",A5X(AXn)],Vx,0,B,[Ce],0,3,0,0,["bh",A5X(AVM)],ACd,0,B,[],0,
3,0,0,0,AET,0,B,[],3,3,0,0,0]);
$rt_metadata([ACv,0,B,[Ce],0,3,0,0,["bh",A5X(ART)],ACx,0,B,[Ce],0,3,0,0,["bh",A5X(AQ4)],ACy,0,B,[Ce],0,0,0,0,["bh",A5X(AR0)],YO,0,B,[V],0,3,0,0,0,AAU,0,B,[KM],0,0,0,0,["t6",A5X(A1C),"xl",A5X(ATq),"wo",A5W(A1Y)],ACg,0,B,[Me],0,0,0,0,0,TD,0,B,[Ce],0,3,0,0,["bh",A5X(AYz)],AAo,0,B,[V],0,3,0,0,["f",A5W(A25)],XB,0,B,[V],0,3,0,0,["f",A5W(ARW)],XC,0,B,[V],0,3,0,0,["f",A5W(APE)],Z2,0,B,[V],0,3,0,0,["f",A5W(AR6)],QD,0,B,[Fi],0,3,0,0,["g6",A5X(AUW)],GJ,0,CH,[],12,0,0,SE,0,ADa,0,B,[W],0,3,0,0,["g",A5X(AOz)],ZN,0,B,[W],
0,3,0,0,["g",A5X(A1v)],QW,0,B,[V],0,3,0,0,["f",A5W(AXv)],ABj,0,B,[],32,0,0,A5e,0,RY,0,B,[W],0,3,0,0,["g",A5X(AOq)],RM,0,B,[W],0,3,0,0,["g",A5X(AMo)],OT,0,B,[V],0,3,0,0,["f",A5W(AXQ)],AAW,0,Z,[],0,0,0,0,["n",A5X(ATw)],Wv,0,Z,[],0,0,0,0,["n",A5X(AVB)],R$,0,Z,[],0,0,0,0,["n",A5X(AMg)],R9,0,Z,[],0,0,0,0,["n",A5X(AW$)],Vi,0,Z,[],0,0,0,0,["n",A5X(APe)],X9,0,Z,[],0,0,0,0,["n",A5X(A1W)],PU,0,Z,[],0,0,0,0,["n",A5X(ARp)],Zs,0,Z,[],0,0,0,0,["n",A5X(ASm)],Wr,0,Z,[],0,0,0,0,["n",A5X(A2V)],Wt,0,Z,[],0,0,0,0,["n",A5X(ANx)],PB,
0,Z,[],0,0,0,0,["n",A5X(ATF)],Yq,0,Z,[],0,0,0,0,["n",A5X(AYP)],Yv,0,Z,[],0,0,0,0,["n",A5X(AZ$)],ABk,0,Z,[],0,0,0,0,["n",A5X(A1J)],AAr,0,Z,[],0,0,0,0,["n",A5X(ATZ)],O8,0,Z,[],0,0,0,0,["n",A5X(ANq)],Mo,0,Z,[],0,0,0,0,["n",A5X(ARq)],Z0,0,Mo,[],0,0,0,0,["n",A5X(A09)],ADJ,0,B,[BT],3,3,0,0,0,YT,0,B,[ADJ],0,3,0,0,["Ix",A5W(AP3)],R_,0,B,[W],0,3,0,0,["g",A5X(A1p)],Qx,0,B,[JF],0,3,0,0,["qg",A5W(ANT),"ot",A5W(ALF),"nX",A5X(ASP),"kE",A5X(ARf)],R8,0,B,[W],0,3,0,0,0,ABe,0,B,[W],0,3,0,0,0,Q3,0,B,[W],0,3,0,0,["g",A5X(ANg)],Da,
0,B,[],3,3,0,AG4,0,Cz,0,CH,[],12,3,0,AGq,0,D1,0,B,[],3,3,0,AVf,0,AAa,0,B,[K3],0,0,0,0,["rM",A5Y(AMB),"zB",A5X(APM),"xt",A5X(AUs),"uR",A5X(AUz)],ADK,0,B,[W],0,3,0,0,["g",A5X(A0p)]]);
$rt_metadata([AGe,0,B,[BT],3,3,0,0,0,AA5,0,B,[V],0,3,0,0,["f",A5W(AX$)],RO,0,B,[V],0,3,0,0,["f",A5W(A2i)],AIA,0,B,[],0,0,0,0,0,AEd,0,B,[V],0,3,0,0,["f",A5W(AX9)],Rg,0,B,[V],0,3,0,0,["f",A5W(AMs)],ACA,0,B,[W],0,3,0,0,["g",A5X(AZn)],ACB,0,B,[W],0,3,0,0,["g",A5X(AX1)]]);
function $rt_array(cls,data){this.WV=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ",
"ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436",
"#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ",
"w = ","Window 1","Window ","Open project...","request new model, file = ","request in progress ","Select left...","Select right...","Project root","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","Open project ...","new folder diff window","new file diff window","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null",
"onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","fileHandle = "," - project view","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >",
"Settings >","parser >","open ...","font pow >","Development >","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","Unexpected type: ","Unexpected ref node type: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable",
"javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya",
"Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols",
"CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement",
"Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates",
"HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf",
"  sub dir: ","  file: ","complete","readDirectory: ","readClipboardText error: ","Current Version: ","Last Parsed Version: ","file = ","file.content.length = ","DEF","DECL","open dir = ","writeClipboardText error: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","opening file ... ","folderOpened ","Error fetching file "]);
BJ.prototype.toString=function(){return $rt_ustr(this);};
BJ.prototype.valueOf=BJ.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AMV(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CR=Long_add;var JO=Long_sub;var Ci=Long_mul;var AGP=Long_div;var AUZ=Long_rem;var A3D=Long_or;var Dg=Long_and;var A9Q=Long_xor;var HQ=Long_shl;var A4Y=Long_shr;var Gc=Long_shru;var A9R=Long_compare;var IK=Long_eq;var A9S=Long_ne;var A3A=Long_lt;var ANQ=Long_le;var A9T=Long_gt;var A3z=Long_ge;var A9U=Long_not;var A49=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A4$);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ABs.prototype;c.f=c.bh;c=ABt.prototype;c.f=c.bh;c=ABr.prototype;c.f=c.bh;c=WM.prototype;c.f=c.bh;c=AJH.prototype;c.get=c.Ly;Object.defineProperty(c,"length",{get:c.R0});c=AIo.prototype;c.createEntityReference=c.Oa;c.getElementById=c.Qu;c.createTextNode=c.Qc;c.hasChildNodes=c.Pd;c.querySelectorAll=c.NT;c.removeChild=c.RM;c.cloneNode=c.Gi;c.createComment=c.SW;c.insertBefore=c.Ot;c.getElementsByTagNameNS=c.RY;c.hasAttributes=c.IX;c.normalize=c.L5;c.hasChildNodesJS=c.LY;c.getElementsByTagName
=c.Lx;c.appendChild=c.M1;c.createAttributeNS=c.QP;c.dispatchEvent=c.LK;c.replaceChild=c.GN;c.createElementNS=c.HV;c.createCDATASection=c.KQ;c.querySelector=c.IW;c.createElement=c.Ri;c.isSupported=c.RQ;c.importNode=c.OD;c.removeEventListener=c.HR;c.createAttribute=c.LL;c.createDocumentFragment=c.FG;c.createProcessingInstruction=c.N6;c.addEventListener=c.J$;Object.defineProperty(c,"nodeName",{get:c.M0});Object.defineProperty(c,"documentElement",{get:c.IB});Object.defineProperty(c,"childNodes",{get:c.Ky});Object.defineProperty(c,
"prefix",{get:c.OJ,set:c.S7});Object.defineProperty(c,"implementation",{get:c.La});Object.defineProperty(c,"textContent",{get:c.S1,set:c.P_});Object.defineProperty(c,"parentNode",{get:c.Qr});Object.defineProperty(c,"nextSibling",{get:c.Ir});Object.defineProperty(c,"nodeType",{get:c.Rx});Object.defineProperty(c,"doctype",{get:c.Pt});Object.defineProperty(c,"localName",{get:c.Sg});Object.defineProperty(c,"nodeValue",{get:c.H_,set:c.SO});Object.defineProperty(c,"firstChild",{get:c.LF});Object.defineProperty(c,
"lastChild",{get:c.Kg});Object.defineProperty(c,"previousSibling",{get:c.MN});Object.defineProperty(c,"namespaceURI",{get:c.G6});Object.defineProperty(c,"attributes",{get:c.OQ});Object.defineProperty(c,"ownerDocument",{get:c.Hb});c=PC.prototype;c.f=c.bh;c=AIQ.prototype;c.removeEventListener=c.Hd;c.dispatchEvent=c.Oy;c.addEventListener=c.JJ;c=Un.prototype;c.onAnimationFrame=c.IY;c=Um.prototype;c.f=c.BN;c=Uk.prototype;c.handleEvent=c.cv;c=AAn.prototype;c.f=c.bh;c=AC1.prototype;c.handleEvent=c.cv;c=AC2.prototype;c.handleEvent
=c.cv;c=AC3.prototype;c.handleEvent=c.cv;c=AC4.prototype;c.handleEvent=c.cv;c=AC5.prototype;c.handleEvent=c.cv;c=AC6.prototype;c.handleEvent=c.cv;c=AC7.prototype;c.handleEvent=c.cv;c=AC8.prototype;c.handleEvent=c.cv;c=AC9.prototype;c.handleEvent=c.cv;c=AC$.prototype;c.handleEvent=c.cv;c=VU.prototype;c.handleEvent=c.cv;c=VV.prototype;c.handleEvent=c.cv;c=VW.prototype;c.handleEvent=c.cv;c=VX.prototype;c.handleEvent=c.cv;c=ABV.prototype;c.handleEvent=c.cv;c=ADW.prototype;c.f=c.bh;c=ADX.prototype;c.f=c.bh;c=WU.prototype;c.f
=c.bh;c=WT.prototype;c.f=c.bh;c=WR.prototype;c.f=c.bh;c=WQ.prototype;c.f=c.bh;c=Pw.prototype;c.accept=c.LR;c=O0.prototype;c.f=c.bh;c=O2.prototype;c.f=c.bh;c=O1.prototype;c.f=c.bh;c=Yf.prototype;c.f=c.BN;c=Yd.prototype;c.f=c.BN;c=AAe.prototype;c.f=c.bh;c=ACG.prototype;c.f=c.bh;c=OZ.prototype;c.f=c.bh;c=ADP.prototype;c.f=c.bh;c=ADO.prototype;c.f=c.bh;c=ADe.prototype;c.f=c.bh;c=ADd.prototype;c.f=c.bh;c=Tt.prototype;c.handleEvent=c.cv;c=Vw.prototype;c.f=c.bh;c=Vx.prototype;c.f=c.bh;c=ACv.prototype;c.f=c.bh;c=ACx.prototype;c.f
=c.bh;c=ACy.prototype;c.f=c.bh;c=TD.prototype;c.f=c.bh;c=YT.prototype;c.onTimer=c.Ix;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);