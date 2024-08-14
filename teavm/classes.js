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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dN=f;}
function $rt_cls(cls){return Wy(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return E2(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bn.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AZc(t);}
function $rt_throwableCause(t){return A9v(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Bdi());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return Jq();}
function $rt_setThread(t){return AYz(t);}
function $rt_createException(message){return Bdj(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(Bdk());}
function $rt_throwCCE(){}
var A=Object.create(null);
var M=$rt_throw;var BS=$rt_compare;var Bdl=$rt_nullCheck;var F=$rt_cls;var O=$rt_createArray;var EX=$rt_isInstance;var Bdm=$rt_nativeThread;var Bdn=$rt_suspending;var Bdo=$rt_resuming;var Bdp=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Ba=$rt_imul;var Ev=$rt_wrapException;var Bdq=$rt_checkBounds;var Bdr=$rt_checkUpperBound;var Bds=$rt_checkLowerBound;var Bdt=$rt_wrapFunction0;var Bdu=$rt_wrapFunction1;var Bdv=$rt_wrapFunction2;var Bdw=$rt_wrapFunction3;var Bdx=$rt_wrapFunction4;var H=$rt_classWithoutFields;var L
=$rt_createArrayFromData;var AOC=$rt_createCharArrayFromData;var Bbj=$rt_createByteArrayFromData;var Bb0=$rt_createShortArrayFromData;var DD=$rt_createIntArrayFromData;var Bdy=$rt_createBooleanArrayFromData;var Bdz=$rt_createFloatArrayFromData;var BdA=$rt_createDoubleArrayFromData;var ABW=$rt_createLongArrayFromData;var Bdh=$rt_createBooleanArray;var C$=$rt_createByteArray;var BdB=$rt_createShortArray;var B0=$rt_createCharArray;var BI=$rt_createIntArray;var BdC=$rt_createLongArray;var ARp=$rt_createFloatArray;var BdD
=$rt_createDoubleArray;var BS=$rt_compare;var BdE=$rt_castToClass;var BdF=$rt_castToInterface;var BdG=Long_toNumber;var Bm=Long_fromInt;var BdH=Long_fromNumber;var D=Long_create;var C8=Long_ZERO;var BdI=Long_hi;var GS=Long_lo;
function B(){this.$id$=0;}
function BdJ(){var a=new B();AHg(a);return a;}
function AHg(a){}
function BD(a){return Wy(a.constructor);}
function AWP(a,b){return a!==b?0:1;}
function AJM(a){var b,c;b=QD(Kv(a));c=new I;K(c);G(G(c,C(0)),b);return J(c);}
function Kv(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AKW(a){var b,c,d;if(!EX(a,Dq)&&a.constructor.$meta.item===null){b=new NG;X(b);M(b);}b=ARv(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function U3(){var a=this;B.call(a);a.F0=0;a.sF=null;}
function BcK(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AQm();ANr();AKV();ALJ();AM8();AOk();APx();APR();AK7();AK6();ANq();AJe();AKw();AMx();APP();ALo();AMc();ALw();AOT();AOp();AOw();AQE();ANL();ANY();AKy();APZ();AM1();APp();APV();AMt();ALx();ANC();c=(AJt()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))ACb(C(1),C(2));else{d=new U3;BH(d);e=new AFZ;e.Eo=d;f=new V3;c="teavm/worker.js";BdK=new V6;g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j
=new W4;j.BO=i;j.BN=g;j.BR=6;j.BQ=e;j.BP=f;k=BC(j,"f");i.onmessage=k;h=h+1|0;}l=L(NJ,[F4(C(3),C(4),300),F4(C(5),C(6),300),F4(C(7),C(4),400),F4(C(8),C(6),400),F4(C(9),C(4),600),F4(C(10),C(6),600),F4(C(11),C(4),700),F4(C(12),C(6),700)]);m=O(NJ,1);m.data[0]=AZL(C(13),Gp(C(14),C(15)),C(4),400);b=(NH(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.xa;f=c.v$;i=new I;K(i);Bl(G(G(i,C(16)),f),41);i=J(i);f=c.v7;o=c.ux;c=A5f($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BH(d);c=new AF0;c.Ff=d;g=new AFY;e.then(BC(c,"f"),BC(g,"f"));}}
function ALQ(b){var c,d,e,f,g,h,i,j;c=new AFd;d="canvasDiv";e=new WL;e.E$=c;c.wR=e;e=new WJ;e.vp=c;c.qz=e;f=new WK;f.sB=c;c.yv=new $rt_globals.ResizeObserver(BC(f,"f"));e=new WI;e.yM=c;c.Aj=e;c.m5=1;c.q1=d;e=new Vv;f=new Nm;Y1(f);e.rB=f;f=new Nm;Y1(f);e.rA=f;f=new AB_;g=null;AHg(f);f.Iz=g;f.n6=BdL;e.u1=f;BH(f);g=new AE2;g.DT=f;e.F2=g;e.sj=b;h=b.length;i=0;while(i<h){f=e.sj[i];j=new AFr;j.AP=e;j.AN=i;g=BC(j,"f");f.onmessage=g;f=b[i];g=AOR();f.postMessage(g);i=i+1|0;}e.jK=0;e.rs=BI(h);c.eo=e;b=AJt();e=0;b.tabIndex
=e;g=b.style;g.setProperty("width","100%");g.setProperty("height","100%");g.setProperty("outline","none");c.eN=b;f=AX8(!!0,!!0,!!1,!!1);f=b.getContext("webgl2",f);if(f!==null){if(c.eN.parentNode!==null)Bb(C_(),C(17));else{if((d?1:0)?1:0)c.q1=d;b=Fa();d=c.q1;e=b.getElementById(d);if(e!==null){b=c.eN;e.appendChild(b);M$(c);}}c.r4=Bcw(c.eN,c.qz);b=new XK;d=c.qz;AQl(b,f,new AGt,1,2.25,0.625);b.Iw=new AGs;b.HU=d;c.gE=b;AYR(c.yv,c.eN,A2k());e=$rt_globals.window;d=c.Aj;e.addEventListener("resize",BC(d,"handleEvent"));}b
=c.gE;if(b!==null){d=new QS;e=c.r4.cT;d.N=b;d.m=e;d.bv=c;e=$rt_str($rt_globals.window.location.hash);c.hR=Bj(C(18),e)?Bbk(d):Bj(C(19),e)?Bcr(d):(A$z(Eu(e)?C(20):C3(e,1))).K(d);M$(c);}if(!(c.gE===null?0:1))ACb(C(1),C(21));ALS(c);}
var AAw=H(0);
var Z1=H(0);
function AHu(){var a=this;B.call(a);a.oP=null;a.yy=null;a.dJ=null;}
function Wy(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AHu;c.dJ=b;d=c;b.classObject=d;}return c;}
function AWk(a){var b,c;b=Kv(a);c=new I;K(c);R(G(c,C(22)),b);return J(c);}
function Hm(a){if(a.oP===null)a.oP=AL9(a.dJ);return a.oP;}
function IG(a){var b,c,d,e;b=a.yy;if(b===null){if(AQU(a.dJ)===null?0:1){b=IG(FK(a));c=new I;K(c);G(G(c,b),C(23));b=J(c);}else{b=a.dJ.$meta.enclosingClass;if((b===null?null:Wy(b))!==null){b=$rt_str(a.dJ.$meta.simpleName);if(b===null)b=C(20);}else{b=AL9(a.dJ);d=MO(b,36);if(d==(-1)){e=MO(b,46);if(e!=(-1))b=C3(b,e+1|0);}else{b=C3(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(20);}}}a.yy=b;}return b;}
function JR(a){return a.dJ.$meta.primitive?1:0;}
function FK(a){return Wy(AQU(a.dJ));}
var AN5=H();
function BC(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function F9(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ANR=H();
function ARv(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AFP(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AFP(d[e],c))return 1;e=e+1|0;}return 0;}
function AXA(b){var c='$$enumConstants$$';H7[c]=ARL;EN[c]=ARo;I9[c]=AWo;Cx[c]=AKF;CD[c]=AO3;IO[c]=AYY;E$[c]=A16;HH[c]=ANA;CI[c]=AQk;D5[c]=A$h;AXA=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return AXA(b);}
function AQU(b){return b.$meta.item;}
function AL9(b){return $rt_str(b.$meta.name);}
function HT(){var a=this;B.call(a);a.j_=null;a.ph=null;a.mg=0;a.mC=0;}
function BdM(){var a=new HT();X(a);return a;}
function BdN(a){var b=new HT();Bd(b,a);return b;}
function X(a){a.mg=1;a.mC=1;}
function Bd(a,b){a.mg=1;a.mC=1;a.j_=b;}
function A42(a){return a;}
function AZc(a){return a.j_;}
function A9v(a){var b;b=a.ph;if(b===a)b=null;return b;}
var Fb=H(HT);
function BdO(){var a=new Fb();ALE(a);return a;}
function ALE(a){X(a);}
var Bx=H(Fb);
function Bdj(a){var b=new Bx();A_b(b,a);return b;}
function A_b(a,b){Bd(a,b);}
var AEz=H(Bx);
var CU=H(0);
var CL=H(0);
var LA=H(0);
function BE(){var a=this;B.call(a);a.bn=null;a.lw=0;}
var BdP=null;var BdQ=null;var BdR=null;function EQ(){EQ=Bn(BE);A0j();}
function AUT(){var a=new BE();AJc(a);return a;}
function E2(a){var b=new BE();Ky(b,a);return b;}
function Fh(a,b,c){var d=new BE();QI(d,a,b,c);return d;}
function AJc(a){EQ();a.bn=BdP;}
function Ky(a,b){EQ();QI(a,b,0,b.data.length);}
function QI(a,b,c,d){var e;EQ();e=B0(d);a.bn=e;Cm(b,c,e,0,d);}
function N_(b){var c;EQ();c=AUT();c.bn=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.bn.data;if(b<c.length)return c[b];}d=new Jk;X(d);M(d);}
function N(a){return a.bn.data.length;}
function Eu(a){return a.bn.data.length?0:1;}
function Tw(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=N(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Cm(a.bn,b,d,e,c);return;}}g=new BN;X(g);M(g);}
function Qp(a,b){var c,d,e;if(a===b)return 0;c=Bh(N(a),N(b));d=0;while(true){if(d>=c)return N(a)-N(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AGn(a,b,c){var d,e,f;if((c+N(b)|0)>N(a))return 0;d=0;while(d<N(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Pj(a,b){if(a===b)return 1;return AGn(a,b,0);}
function D2(a,b){var c,d,e,f;if(a===b)return 1;if(N(b)>N(a))return 0;c=0;d=N(a)-N(b)|0;while(d<N(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GA(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.bn.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=IV(b);h=Ii(b);while(true){f=a.bn.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Iw(a,b,c){var d,e,f,g,h;d=Bh(c,N(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bn.data[d]==e)break;d=d+(-1)|0;}return d;}f=IV(b);g=Ii(b);while(true){if(d<1)return (-1);h=a.bn.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function MO(a,b){return Iw(a,b,N(a)-1|0);}
function ACJ(a,b,c){var d,e,f;d=Be(0,c);e=N(a)-N(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=N(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A7$(a,b){return ACJ(a,b,0);}
function Tq(a,b,c){var d,e;d=Bh(c,N(a)-N(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=N(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AKB(a,b){return Tq(a,b,N(a));}
function Cd(a,b,c){var d,e;d=BS(b,c);if(d>0){e=new BN;X(e);M(e);}if(!d){EQ();return BdQ;}if(!b&&c==N(a))return a;return Fh(a.bn,b,c-b|0);}
function C3(a,b){return Cd(a,b,N(a));}
function TC(a,b,c){return Cd(a,b,c);}
function Gp(a,b){var c,d,e,f,g,h;if(Eu(b))return a;if(Eu(a))return b;c=B0(N(a)+N(b)|0);d=c.data;e=0;f=0;while(f<N(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<N(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return N_(c);}
function AEK(a){var b,c;b=0;c=N(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cd(a,b,c+1|0);}
function ASI(a){return a;}
function Hl(a){var b,c,d,e,f;b=a.bn.data;c=B0(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){EQ();return b===null?C(24):b.J();}
function E9(b){var c,d;EQ();c=new BE;d=B0(1);d.data[0]=b;Ky(c,d);return c;}
function DI(b){var c;EQ();c=new I;K(c);return J(R(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BE))return 0;c=b;if(N(c)!=N(a))return 0;d=0;while(d<N(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function La(a){var b,c,d,e;a:{if(!a.lw){b=a.bn.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.lw=(31*a.lw|0)+e|0;d=d+1|0;}}}return a.lw;}
function YV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new EU;Bd(b,C(25));M(b);}BdS=1;d=new ADX;d.oD=O(Df,10);d.jf=(-1);d.gI=(-1);d.bX=(-1);e=new H3;e.gc=1;e.ce=b;e.bt=B0(N(b)+2|0);Cm(Hl(b),0,e.bt,0,N(b));f=e.bt.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.Dy=g;e.is=0;GO(e);GO(e);d.l=e;d.eR=0;d.pt=Zp(d,(-1),0,null);if(!D4(d.l)){b=new Lu;h=d.l;Ou(b,C(20),h.ce,h.ec);M(b);}if(d.tn)d.pt.fD();b=BO();h=new AE5;h.lU=(-1);h.rg=(-1);h.G8=d;h.Fh=d.pt;h.ni=a;h.lU=0;g=N(a);h.rg=g;e=new AGR;i=h.lU;j=d.jf;k=d.gI+1|0;l=d.bX
+1|0;e.kh=(-1);m=j+1|0;e.t5=m;e.e1=BI(m*2|0);f=BI(l);e.mv=f;KD(f,(-1));if(k>0)e.rF=BI(k);KD(e.e1,(-1));AIJ(e,a,i,g);h.de=e;e.hI=1;n=0;m=0;if(!N(a)){f=O(BE,1);f.data[0]=C(20);}else{while(true){l=N(h.ni);if(!AJo(h))l=h.rg;e=h.de;if(e.fA>=0&&AKs(e)==1){e=h.de;e.fA=Oj(e);if(Oj(h.de)==ALI(h.de)){e=h.de;e.fA=e.fA+1|0;}g=h.de.fA;g=g<=l&&Q1(h,g)?1:0;}else g=Q1(h,h.lU);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Br(b,TC(a,m,AMN(h)));m=AOm(h);n=g;}a:{Br(b,TC(a,m,N(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(N(BU(b,
g)))break a;Fs(b,g);}}if(g<0)g=0;f=FE(b,O(BE,g));}return f;}
function AUm(a,b){return Qp(a,b);}
function A0j(){BdP=B0(0);BdQ=AUT();BdR=new V8;}
var Gt=H(HT);
var Jo=H(Gt);
var AOy=H(Jo);
var Dm=H();
function FF(){Dm.call(this);this.bf=0;}
var BdT=null;var BdU=null;function A$v(a){var b=new FF();AJ8(b,a);return b;}
function AJ8(a,b){a.bf=b;}
function QD(b){return LT(b,4);}
function Hs(b){return (AAR(Bdb(20),b,10)).J();}
function L_(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new DQ;Bd(b,C(26));M(b);}d=N(b);if(0==d){b=new DQ;Bd(b,C(27));M(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new DQ;X(b);M(b);}b:{c:{while(f<d){h=f+1|0;i=AB8(P(b,f));if(i<0){j=new DQ;k=Cd(b,0,d);b=new I;K(b);G(G(b,C(28)),k);Bd(j,J(b));M(j);}if(i>=c){j=new DQ;l=Cd(b,0,d);b=new I;K(b);G(G(R(G(b,C(29)),c),C(30)),l);Bd(j,J(b));M(j);}g=Ba(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new DQ;k=Cd(b,0,d);b=new I;K(b);G(G(b,C(31)),k);Bd(j,J(b));M(j);}b=new DQ;j=new I;K(j);R(G(j,C(32)),c);Bd(b,J(j));M(b);}
function CE(b){var c,d;if(b>=(-128)&&b<=127){a:{if(BdU===null){BdU=O(FF,256);c=0;while(true){d=BdU.data;if(c>=d.length)break a;d[c]=A$v(c-128|0);c=c+1|0;}}}return BdU.data[b+128|0];}return A$v(b);}
function ANx(a){return a.bf;}
function A0F(a){return Hs(a.bf);}
function Z6(a){return a.bf;}
function A_V(a,b){if(a===b)return 1;return b instanceof FF&&b.bf==a.bf?1:0;}
function AA8(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function H4(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A6B(a,b){b=b;return BS(a.bf,b.bf);}
function AQm(){BdT=F($rt_intcls());}
function HN(){var a=this;B.call(a);a.H=null;a.B=0;}
function BdV(){var a=new HN();K(a);return a;}
function Bdb(a){var b=new HN();FZ(b,a);return b;}
function K(a){FZ(a,16);}
function FZ(a,b){a.H=B0(b);}
function AAR(a,b,c){return AOM(a,a.B,b,c);}
function AOM(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ct(a,b,b+1|0);else{Ct(a,b,b+2|0);f=a.H.data;g=b+1|0;f[b]=45;b=g;}a.H.data[b]=FT(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Ba(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ct(a,b,b+i|0);if(e)e=b;else{f=a.H.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.H.data;b=e+1|0;f[e]=FT($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function APA(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BS(c,0.0);if(!d){if(1.0/c===Infinity){Ct(a,b,b+3|0);e=a.H.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ct(a,b,b+4|0);e=a.H.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ct(a,b,b+3|0);e=a.H.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ct(a,b,b+8|0);d=b;}else{Ct(a,b,b+9|0);e=a.H.data;d=b+1|0;e[b]=45;}e=a.H.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=BdW;APq(c,f);d=f.o1;g=f.oK;h=f.ty;i=1;j=1;if(h)j=2;k=9;l=AZM(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ct(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.H.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.H.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.H.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.H.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AOd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BS(c,0.0);if(!d){if(1.0/c===Infinity){Ct(a,b,b+3|0);e=a.H.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ct(a,b,b+4|0);e=a.H.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ct(a,b,b+3|0);e=a.H.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ct(a,b,b+8|0);d=b;}else{Ct(a,b,b+9|0);e=a.H.data;d=b+1|0;e[b]=45;}e=a.H.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=BdX;AKO(c,f);g=f.pu;h=f.ow;i=f.th;j=1;k=1;if(i)k=2;l=18;m=AYn(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ct(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.H.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.H.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ATP(p,C8))d=0;else{d=GS(ALR(g,p));g=A2f(g,p);}e=a.H.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=ALR(p,Bm(10));q=q+1|0;}if(h){e=a.H.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AZM(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AYn(b){var c,d,e,f,g;c=Bm(1);d=0;e=16;f=BdY.data;g=f.length-1|0;while(g>=0){if(Fj(A2f(b,Cq(c,f[g])),C8)){d=d|e;c=Cq(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Bl(a,b){return a.sk(a.B,b);}
function AIz(a,b,c){Ct(a,b,b+1|0);a.H.data[b]=c;return a;}
function OG(a,b){var c,d;c=a.H.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.H=Jx(a.H,d);}
function J(a){return Fh(a.H,0,a.B);}
function Rk(a,b){var c;if(b>=0&&b<a.B)return a.H.data[b];c=new BN;X(c);M(c);}
function AIj(a,b,c,d){return a.r3(a.B,b,c,d);}
function AAr(a,b,c,d,e){var f,g,h,i;Ct(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.H.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Lc(a,b){return a.rl(b,0,b.data.length);}
function Ct(a,b,c){var d,e,f,g;d=a.B;e=d-b|0;a.lo((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.H.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.B=a.B+(c-b|0)|0;}
var KU=H(0);
var I=H(HN);
function NN(){var a=new I();A_J(a);return a;}
function Bah(a){var b=new I();A2j(b,a);return b;}
function A_J(a){K(a);}
function A2j(a,b){var c,d;a.H=B0(N(b));c=0;while(true){d=a.H.data;if(c>=d.length)break;d[c]=P(b,c);c=c+1|0;}a.B=N(b);}
function G(a,b){Oc(a,a.B,b===null?C(24):b.J());return a;}
function BG(a,b){Oc(a,a.B,b);return a;}
function R(a,b){AAR(a,b,10);return a;}
function Hi(a,b){var c,d,e,f,g,h,i,j;c=a.B;d=1;if(Ba1(b,C8)){d=0;b=A7i(b);}a:{if(D8(b,Bm(10))<0){if(d)Ct(a,c,c+1|0);else{Ct(a,c,c+2|0);e=a.H.data;f=c+1|0;e[c]=45;c=f;}a.H.data[c]=FT(GS(b),10);}else{g=1;h=Bm(1);i=DA(Bm(-1),Bm(10));b:{while(true){j=Cq(h,Bm(10));if(D8(j,b)>0){j=h;break b;}g=g+1|0;if(D8(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ct(a,c,c+g|0);if(d)f=c;else{e=a.H.data;f=c+1|0;e[c]=45;}while(true){if(Fj(j,C8))break a;e=a.H.data;c=f+1|0;e[f]=FT(GS((DA(b,j))),10);b=ANu(b,j);j=DA(j,Bm(10));f=c;}}}return a;}
function Dw(a,b){APA(a,a.B,b);return a;}
function ACq(a,b){AOd(a,a.B,b);return a;}
function HG(a,b){Bl(a,b);return a;}
function EL(a,b){var c;c=b.hb();AGh(a,a.B,b,0,c);return a;}
function KC(a,b){Oc(a,a.B,!b?C(33):C(34));return a;}
function AMB(a,b,c){var d,e,f,g,h,i;d=BS(b,c);if(d<=0){e=a.B;if(b<=e){if(d){f=e-c|0;a.B=e-(c-b|0)|0;g=0;while(g<f){h=a.H.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Jk;X(i);M(i);}
function Yj(a,b){var c,d,e,f;if(b>=0){c=a.B;if(b<c){c=c-1|0;a.B=c;while(b<c){d=a.H.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Jk;X(f);M(f);}
function A6x(a,b,c,d,e){AAr(a,b,c,d,e);return a;}
function ATC(a,b,c,d){AIj(a,b,c,d);return a;}
function AGh(a,b,c,d,e){var f,g;if(d<=e&&e<=c.hb()&&d>=0){Ct(a,b,(b+e|0)-d|0);while(d<e){f=a.H.data;g=b+1|0;f[b]=c.sb(d);d=d+1|0;b=g;}return a;}c=new BN;X(c);M(c);}
function A$C(a,b){return Rk(a,b);}
function ABq(a){return a.B;}
function DR(a){return J(a);}
function AV5(a,b){OG(a,b);}
function A6X(a,b,c){AIz(a,b,c);return a;}
function Oc(a,b,c){var d,e,f;if(b>=0&&b<=a.B){a:{if(c===null)c=C(24);else if(Eu(c))break a;OG(a,a.B+N(c)|0);d=a.B-1|0;while(d>=b){a.H.data[d+N(c)|0]=a.H.data[d];d=d+(-1)|0;}a.B=a.B+N(c)|0;d=0;while(d<N(c)){e=a.H.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Jk;X(c);M(c);}
var FR=H(Jo);
var APK=H(FR);
function BdZ(a){var b=new APK();ASM(b,a);return b;}
function ASM(a,b){Bd(a,b);}
var AOu=H(FR);
function Bd0(a){var b=new AOu();AS0(b,a);return b;}
function AS0(a,b){Bd(a,b);}
var AFN=H(0);
var Dr=H(0);
function AKQ(b){if(b!==null)WZ(b);return null;}
function BM(b,c){if(b!==null)b.b7();return c;}
var AB6=H(0);
function Lo(){var a=this;B.call(a);a.kF=0;a.pW=0;a.pf=0;}
var Bd1=0;function Fe(a){Bd1=Bd1-1|0;}
function Iy(a,b,c){LY(a,AN_(b,c,400,0));}
function MI(a,b){return MX(a,b,0.875);}
function MX(a,b,c){return EY(a,b)+c|0;}
function AEy(){var a=this;Lo.call(a);a.ku=null;a.dU=null;a.z7=null;}
function Fy(a){var b,c,d;b=a.dU;c=a.pW;d=a.pf;b.clearRect(0.0,0.0,c,d);}
function AEQ(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dU;d="center";c.textAlign=d;break a;case 2:c=a.dU;d="right";c.textAlign=d;break a;default:break a;}d=a.dU;c="left";d.textAlign=c;}}
function Cv(a,b){LY(a,b.s7);}
function LY(a,b){var c;if(a.z7!==b){c=a.dU;a.z7=b;c.font=b;}}
function AN_(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B4(a,b,c,d){var e,f,g;e=a.dU;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EY(a,b){var c;c=$rt_ustr(b);return a.dU.measureText(c).width;}
function Lg(a,b,c,d){var e,f;e=a.dU;f=$rt_ustr(E2(AOC([35,I0(b/16|0),I0(b%16|0),I0(c/16|0),I0(c%16|0),I0(d/16|0),I0(d%16|0)])));e.fillStyle=f;}
function A2_(){return {alpha:false};}
var ANs=H();
var AQu=H();
function BW(b,c){if(b===c)return 1;return b!==null?b.bB(c):c!==null?0:1;}
function BH(b){if(b!==null)return b;b=new EU;Bd(b,C(20));M(b);}
var BZ=H(0);
function AOr(b){return b;}
var B$=H(0);
function AFZ(){B.call(this);this.Eo=null;}
function A__(a,b){var c;c=a.Eo;c.sF=b;if(c.F0)ALQ(b);}
var ALt=H();
var YP=H(0);
var ALi=H();
function A2i(a,b){a.Tg(b);}
function A4W(a,b,c){a.Ni(b,c);}
var AJp=H(0);
function F4(b,c,d){return AZL(C(35),Gp(C(14),b),c,d);}
var AQe=H(0);
var AL2=H(0);
function NH(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C0(b,f+g|0);Cm(c,0,d,f,g);return d;}
function M3(b,c,d){Cm(b,c,d,0,d.data.length);return d;}
function AEb(b,c,d){var e;if(c>0)Cm(b,0,d,0,c);e=d.data.length;if(c<e)Cm(b,c+1|0,d,c,e-c|0);return d;}
function AKx(b,c,d,e){var f;if(c>0)Cm(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Cm(b,d,e,c,f-d|0);}return e;}
function CT(b){var c;c=new QZ;c.nh=b;return c;}
function AJ2(b,c){if(b.data.length!=c)b=C0(b,c);return b;}
function Dz(b,c,d){var e;e=c.data.length;if(e==d)c=C0(c,e*2|0);c.data[d]=b;return c;}
function AGK(b,c,d){var e;e=c.data.length;if(e==d)c=Qk(c,e*2|0);c.data[d]=b;return c;}
function Qj(b){return Jx(b,b.data.length);}
function NJ(){var a=this;B.call(a);a.xa=null;a.v$=null;a.v7=null;a.ux=0;}
function AZL(a,b,c,d){var e=new NJ();AY5(e,a,b,c,d);return e;}
function AY5(a,b,c,d,e){a.xa=b;a.v$=c;a.v7=d;a.ux=e;}
var AJX=H();
function A5f(b,c){return {style:b,weight:c};}
function AF0(){B.call(this);this.Ff=null;}
function ARa(a,b){var c,d,e;c=a.Ff;d=0;while(d<b.length){e=b[d];(Fa()).fonts.add(e);d=d+1|0;}c.F0=1;b=c.sF;if(b!==null)ALQ(b);}
var AFY=H();
function A$R(a,b){$rt_globals.console.info("font load error "+b);}
var Ng=H();
var Bd2=null;var Bd3=null;function Bi(){if(Bd2===null)Bd2=AXj(Bd4,0);return Bd2;}
function C_(){if(Bd3===null)Bd3=AXj(Bd5,0);return Bd3;}
function Bbn(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=PT(b)&&(e+f|0)<=PT(d)){a:{b:{if(b!==d){g=FK(BD(b));h=FK(BD(d));if(g!==null&&h!==null){if(g===h)break b;if(!JR(g)&&!JR(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dJ;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AFP(n.constructor,o)?1:0)){Pn(b,c,d,e,j);b=new Ki;X(b);M(b);}j=j+1|0;k=m;}Pn(b,c,d,e,f);return;}if(!JR(g))break a;if(JR(h))break b;else break a;}b=new Ki;X(b);M(b);}}Pn(b,c,
d,e,f);return;}b=new Ki;X(b);M(b);}b=new BN;X(b);M(b);}d=new EU;Bd(d,C(36));M(d);}
function Cm(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=PT(b)&&(e+f|0)<=PT(d)){Pn(b,c,d,e,f);return;}b=new BN;X(b);M(b);}
function Pn(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Fc(){return Long_fromNumber(new Date().getTime());}
function ALL(){return BdH($rt_globals.performance.now()*1000000.0);}
var AL1=H();
function LT(b,c){var d,e,f,g,h,i,j,k;if(!b)return C(37);d=1<<c;e=d-1|0;f=(((32-AA8(b)|0)+c|0)-1|0)/c|0;g=B0(f);h=g.data;i=Ba(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=FT((b>>>i|0)&e,d);i=i-c|0;j=k;}return E2(g);}
var AOn=H();
function ACb(b,c){var d,e,f;d=(Fa()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Fa()).getElementById($rt_ustr(b)).appendChild(d);}
function AJt(){return (Fa()).createElement("canvas");}
function AMG(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AJ$(b){var c;c=new Z8;c.yw=b;return c;}
function AX8(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AQ7=H();
var V3=H();
function A35(a,b){var c;c=new Bx;Bd(c,$rt_str(b.message));M(c);}
var AMf=H();
function GD(b){return $rt_str(b);}
var ANI=H();
function Jx(b,c){var d,e,f,g;b=b.data;d=B0(c);e=d.data;f=Bh(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Qk(b,c){var d,e,f,g;b=b.data;d=C$(c);e=d.data;f=Bh(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Kp(b,c){var d,e,f,g;b=b.data;d=BI(c);e=d.data;f=Bh(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C0(b,c){var d,e,f,g;d=b.data;e=Np(FK(BD(b)),c);f=Bh(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AOQ(b,c,d){var e,f,g,h;e=BI(d-c|0);f=e.data;g=c;while(g<d){h=b.data;f[g-c|0]=h[g];g=g+1|0;}return e;}
function AMo(b,c,d,e){var f,g,h,i,j,k,l,m;f=Np(FK(e),d-c|0);g=c;while(g<d){h=b.data;i=g-c|0;j=FK(e);k=h[g];if(k!==null&&!AFP((BD(k)).dJ,j.dJ)){e=new AEz;k=Hm(BD(k));l=Hm(j);m=new I;K(m);G(G(G(m,k),C(38)),l);Bd(e,J(m));M(e);}f.data[i]=k;g=g+1|0;}return f;}
function ALB(b){var c,d,e;if(b===null)return C(24);c=new I;K(c);BG(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BG(c,C(40));R(c,e[d]);d=d+1|0;}BG(c,C(41));return J(c);}
function AZk(b){var c,d,e;if(b===null)return C(24);c=new I;K(c);BG(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BG(c,C(40));Dw(c,e[d]);d=d+1|0;}BG(c,C(41));return J(c);}
function A1F(b){var c,d,e;if(b===null)return C(24);c=new I;K(c);BG(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BG(c,C(40));ACq(c,e[d]);d=d+1|0;}BG(c,C(41));return J(c);}
function KD(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new Bv;X(f);M(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AJR(b,c,d,e){var f,g;if(c>d){e=new Bv;X(e);M(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Ms(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=BdL;e=O(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bh(j,h+f|0);l=h+(2*f|0)|0;m=Bh(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.sp(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function APB(b,c){return AF4(b,0,b.data.length,c);}
function AF4(b,c,d,e){var f,g,h,i,j;f=BS(c,d);if(f>0){g=new Bv;X(g);M(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function Q2(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+e[d]|0;d=d+1|0;}return c;}
var AG7=H(0);
var AOY=H();
function A5F(a,b){return a.Uw(b);}
function AWI(a){return a.Yg();}
var AKM=H();
var Hb=H(0);
var V8=H();
var BN=H(Bx);
var APv=H();
function PT(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bd6());}return b.data.length;}
function Np(b,c){if(b===null){b=new EU;X(b);M(b);}if(b===F($rt_voidcls())){b=new Bv;X(b);M(b);}if(c>=0)return A0M(b.dJ,c);b=new AI2;X(b);M(b);}
function A0M(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var EU=H(Bx);
var Ki=H(Bx);
function Dp(){B.call(this);this.oI=0;}
var Bd7=null;var Bd8=null;var Bd9=null;var Bd$=null;var Bd_=null;var Bea=null;var Beb=null;var Bec=null;var Bed=null;var Bee=null;function A1h(a){var b=new Dp();AKo(b,a);return b;}
function AKo(a,b){a.oI=b;}
function RU(b){var c,d;c=Bea.data;if(b>=c.length)return A1h(b);d=c[b];if(d===null){d=A1h(b);Bea.data[b]=d;}return d;}
function Y3(b){var c,d;c=new BE;d=B0(1);d.data[0]=b;Ky(c,d);return c;}
function NX(b){return b>=65536&&b<=1114111?1:0;}
function C4(b){return (b&64512)!=55296?0:1;}
function Do(b){return (b&64512)!=56320?0:1;}
function Qv(b){return !C4(b)&&!Do(b)?0:1;}
function Kx(b,c){return C4(b)&&Do(c)?1:0;}
function E0(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IV(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Ii(b){return (56320|b&1023)&65535;}
function GH(b){return HY(b)&65535;}
function HY(b){if(Bd$===null){if(Beb===null)Beb=APU();Bd$=AKz((Beb.value!==null?$rt_str(Beb.value):null));}return VQ(Bd$,b);}
function Fz(b){return GY(b)&65535;}
function GY(b){if(Bd9===null){if(Bec===null)Bec=AQn();Bd9=AKz((Bec.value!==null?$rt_str(Bec.value):null));}return VQ(Bd9,b);}
function VQ(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BS(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AGz(b,c){if(c>=2&&c<=36){b=AB8(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function AB8(b){var c,d,e,f,g,h,i,j,k,l;if(Bd8===null){if(Bed===null)Bed=AOA();c=(Bed.value!==null?$rt_str(Bed.value):null);d=AZe(Hl(c));e=OQ(d);f=BI(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Rp(d)|0;j=j+Rp(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}Bd8=f;}g=Bd8.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BS(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function FT(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gu(b){var c;if(b<65536){c=B0(1);c.data[0]=b&65535;return c;}return AOC([IV(b),Ii(b)]);}
function CX(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Qv(b&65535))return 19;if(Bd_===null){if(Bee===null)Bee=AM5();d=(Bee.value!==null?$rt_str(Bee.value):null);e=O(AAI,16384);f=e.data;g=C$(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<N(d)){m=Pk(P(d,l));if(m==64){l=l+1|0;m=Pk(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Ba(c,Pk(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Pk(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AUk(k,k+i|0,Qk(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AUk(k,k+i|0,Qk(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}Bd_=C0(e,j);}e=Bd_.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.wo)o=p+1|0;else{c=d.B1;if(b>=c)return d.B8.data[b-c|0];c=p-1|0;}}return 0;}
function L$(b){a:{switch(CX(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function IR(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CX(b)!=16?0:1;}
function ACz(b){switch(CX(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function UD(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return ACz(b);}return 1;}
function ANr(){Bd7=F($rt_charcls());Bea=O(Dp,128);}
function APU(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AQn(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AOA(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AM5(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var ZW=H(0);
var AE8=H(0);
var FL=H(0);
var ANv=H();
function Fa(){return $rt_globals.window.document;}
function A7G(a){return a.OK();}
function A97(a,b){return a.QE($rt_str(b));}
function A9T(a,b){a.NO($rt_str(b));}
function A39(a,b){return a.UH($rt_str(b));}
function ARt(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ATv(a){return a.YC();}
function A93(a,b,c){return a.Xo($rt_str(b),$rt_str(c));}
function AVO(a,b,c,d){a.HF($rt_str(b),F9(c,"handleEvent"),d?1:0);}
function A2Z(a){return a.V4();}
function A8t(a){return !!a.Q9();}
function A$M(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AW9(a){return a.N0();}
function AVk(a,b){a.Xe($rt_str(b));}
function AXy(a){return !!a.ND();}
function A1L(a){return a.QO();}
function AWg(a){return $rt_ustr(a.Lo());}
function AR$(a,b){return a.Oc(b?1:0);}
function A_Y(a){return a.Q8();}
function A54(a,b,c){return a.Zk($rt_str(b),$rt_str(c));}
function AW4(a,b,c){return a.Vk(b,c?1:0);}
function A0R(a,b,c){return !!a.Qc($rt_str(b),$rt_str(c));}
function A2b(a){return a.Pg();}
function AU5(a){return $rt_ustr(a.Sb());}
function ATG(a,b){return !!a.Kl(b);}
function AUw(a,b){return a.SH($rt_str(b));}
function A6g(a,b,c){return a.OI($rt_str(b),$rt_str(c));}
function AWp(a){return a.TE();}
function A23(a,b){return a.YL($rt_str(b));}
function AUv(a){return $rt_ustr(a.Tc());}
function AYH(a){a.Nz();}
function ARg(a,b){return a.Zn($rt_str(b));}
function A0c(a,b){return a.NV($rt_str(b));}
function A3p(a,b){return a.Nx($rt_str(b));}
function A$G(a){return $rt_ustr(a.TV());}
function A3z(a,b,c){return a.WO(b,c);}
function A8H(a,b){return a.Ln(b);}
function AY_(a){return a.PY();}
function AX2(a,b,c){a.JM($rt_str(b),F9(c,"handleEvent"));}
function AXF(a,b,c){return a.Mm(b,c);}
function AZ8(a){return !!a.Ye();}
function A1f(a,b){return a.OC($rt_str(b));}
function A7S(a,b,c,d){a.GQ($rt_str(b),F9(c,"handleEvent"),d?1:0);}
function ATB(a){return a.PZ();}
function A3Q(a,b,c){return a.Ob($rt_str(b),$rt_str(c));}
function A2A(a){return $rt_ustr(a.Ud());}
function A_S(a){return a.Tv();}
function AX0(a){return a.TJ();}
function A2y(a){return a.Qd();}
function AX3(a,b,c){a.Kk($rt_str(b),F9(c,"handleEvent"));}
function A4j(a,b){return a.RY(b);}
function AUH(a,b){a.LL($rt_str(b));}
function A9s(a){return $rt_ustr(a.S4());}
var AHb=H(0);
var V6=H();
function ALN(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(!(b instanceof $rt_globals.File?1:0)){if(b instanceof $rt_globals.FileSystemFileHandle?1:0){e=e.data;g=d+1|0;e[f]=ALX(b,APg(c[d]));}else if(!(b instanceof $rt_globals.FileSystemDirectoryHandle?1:0))g=d;else{g=d+1|0;h=c[d];c=new P0;c.h9=b;if(h.length)c.gr=APg(h);else{c.gr=O(BE,0);c.lP=O(BE,0);}e.data[f]=c;}}else{c=new M6;h=null;i=b.webkitRelativePath;if(!(typeof i==='undefined'?1:0)&&i!==null&&i.length){j=i.split("/");if(!j.length)k=O(BE,0);else{k=O(BE,j.length-
1|0);l=k.data;g=0;m=l.length;while(g<m){l[g]=GD(j[g]);g=g+1|0;}}}else k=O(BE,0);e=e.data;Sb(c,h,b,k);e[f]=c;g=d;}return g;}
var ACE=H();
var BdK=null;function AOR(){return "ping";}
function AM3(b){return b===AOR()?1:0;}
function W4(){var a=this;B.call(a);a.BO=null;a.BN=null;a.BR=0;a.BQ=null;a.BP=null;}
function ARm(a,b){var c,d,e,f,g;c=a.BO;d=a.BN;e=a.BR;f=a.BQ;g=a.BP;if(!(b.data==="started"?1:0)){b=new $rt_globals.Error("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AOI=H();
function AZq(b){return Math.exp(b);}
function ANy(b){return Math.log(b);}
function Kr(b,c){return A67(b,c);}
function A67(b,c){return Math.pow(b,c);}
function Ei(){return A1s();}
function A1s(){return Math.random();}
function Bh(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function A0S(b,c){return Math.max(b,c);}
function Ir(b){if(b<0)b= -b|0;return b;}
function AUN(b){return Math.abs(b);}
var ACo=H(0);
var UO=H(0);
var AD1=H(0);
var Wu=H(0);
var AIl=H(0);
var AGA=H(0);
var AN2=H();
function A79(a,b,c){a.Kk($rt_str(b),F9(c,"handleEvent"));}
function A6z(a,b,c){a.JM($rt_str(b),F9(c,"handleEvent"));}
function AU7(a,b,c,d){a.GQ($rt_str(b),F9(c,"handleEvent"),d?1:0);}
function ASn(a,b){return !!a.Kl(b);}
function A4E(a,b,c,d){a.HF($rt_str(b),F9(c,"handleEvent"),d?1:0);}
var Bv=H(Bx);
function Bef(a){var b=new Bv();AQ3(b,a);return b;}
function AQ3(a,b){Bd(a,b);}
var AI2=H(Bx);
var Jk=H(BN);
var ABU=H(0);
function AFd(){var a=this;B.call(a);a.wR=null;a.qz=null;a.eN=null;a.yv=null;a.Aj=null;a.q1=null;a.r4=null;a.gE=null;a.m5=0;a.JX=0;a.Dg=null;a.hR=null;a.eo=null;}
function ALS(a){a.eN.focus();}
function Hd(a,b){var c;c=Fa();b=$rt_ustr(b);c.title=b;}
function M$(a){a.JX=$rt_globals.requestAnimationFrame(BC(a.wR,"onAnimationFrame"));}
function IB(a){a.m5=1;}
function AFw(a,b,c){var d,e,f,g,h,i;a.r4.fd=BP(b,c);d=b&&c?1:0;if(d){e=a.eN;f=b;e.width=f;f=a.eN;g=c;f.height=g;}f=a.gE;Y(f.dx,b,c);e=f.bi;f=f.dx;h=f.b;i=f.a;e.viewport(0,0,h,i);a.hR.b3(a.gE.dx,MU(a));if(d)a.hR.bT();}
function AEx(a,b){var c,d,e;c=a.Dg;d=a.eN;if(BW(b,c))b=c;else{e=d.style;if(b!==null&&N(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.Dg=b;}
function Iv(a){return $rt_globals.performance.now()/1000.0;}
function MU(a){return $rt_globals.window.devicePixelRatio;}
function G9(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AJj(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AHV;d.F8=b;e=new AHU;c.then(BC(d,"f"),BC(e,"f"));}}
function FQ(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AJj(b,null);else{c=new AIy;d=$rt_globals.window.showOpenFilePicker();e=new AIx;e.vm=b;d.then(BC(e,"f"),BC(c,"f"));}}
function UA(a,b,c){var d,e;if(!NE()){b=new Bx;Bd(b,C(42));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Xo;e.Cl=b;b=AQ5(c);d.then(BC(e,"f"),BC(b,"f"));}}
function W2(a,b,c,d){var e,f,g;if(!NE()){b=new Bx;Bd(b,C(42));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=Hl(b);BbJ();b=Beg;g=f.data;g=b.decode(g);b=e.writeText(g);e=new Z2;e.sW=c;c=AQ5(d);b.then(BC(e,"f"),BC(c,"f"));}}
function Zd(a){return NE()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AQ5(b){var c;c=new Yq;c.E2=b;return c;}
function WU(a,b,c){$rt_globals.console.info("Window.addChild is not for web");return 0;}
var Bz=H(0);
var AO6=H();
var T=H(0);
var AO7=H();
var AEc=H(0);
function WL(){B.call(this);this.E$=null;}
function A9D(a,b){var c,d;c=b;b=a.E$;if(!(!b.hR.cU(c/1000.0)&&!b.m5)){d=b.gE.dx;if(Ba(d.b,d.a)){b.m5=0;b.hR.bT();}}M$(b);}
function WJ(){B.call(this);this.vp=null;}
function DZ(a){IB(a.vp);}
var ADg=H(0);
function WK(){B.call(this);this.sB=null;}
function AXK(a,b,c){var d,e,f,g;c=a.sB;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eN){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=MU(c);AFw(c,FW(f.width*g),FW(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AFw(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AMp=H();
function A2k(){return {box:'device-pixel-content-box'};}
function AYR(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CM=H(0);
function WI(){B.call(this);this.yM=null;}
function A14(a,b){var c;b=a.yM;b.hR.b3(b.gE.dx,MU(b));c=b.gE.dx;if(Ba(c.b,c.a))b.hR.bT();}
var ADu=H(0);
function EF(a,b,c,d){Ef(a,0,b,c,d);}
function Py(){var a=this;B.call(a);a.sj=null;a.rB=null;a.rA=null;a.u1=null;a.rs=null;a.Ap=0;a.jK=0;a.F2=null;}
function Ef(a,b,c,d,e){var f,g,h,i;f=a.jK;if(f>0){g=a.rs.data;b=f-1|0;a.jK=b;WY(a,c,d,e,g[b]);}else{h=!b?a.rB:a.rA;i=new AHW;i.xC=c;i.EY=d;i.D8=e;c=new W0;c.tL=i;d=h.ob;c.EP=d;if(d===null)h.rk=c;else d.xh=c;h.ob=c;h.cq=h.cq+1|0;h.mJ=h.mJ+1|0;}}
function WY(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=a.Ap+1|0;a.Ap=f;g=a.u1;h=CE(f);g.lq=Qs(g,g.lq,h);h=AGC(g,h);ZZ(h,b);ZZ(h,b);g.n9=g.n9+1|0;b=a.sj[e];if(b===null){c=$rt_ustr(c);$rt_globals.console.error("sendToWorker after shutdown, method = "+c);}else{i=d.data;j=i.length;h=new $rt_globals.Array(j+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;f=2;k=new $rt_globals.Array();l=0;while(l<j){c=i[l];if(c instanceof BE){c=c;m=f+1|0;c=$rt_ustr(c);f;h[f]=c;}else if(EX(c,$rt_arraycls($rt_bytecls()))){d=c;m=f+1|0;c=d.data.buffer;f;h[f]
=c;}else if(EX(c,$rt_arraycls($rt_charcls()))){d=c;m=f+1|0;c=d.data.buffer;f;h[f]=c;}else if(EX(c,$rt_arraycls($rt_intcls()))){d=c;m=f+1|0;c=d.data.buffer;f;h[f]=c;}else if(!(c instanceof M6)){if(!(c instanceof P0)){b=new Bv;c=Hm(BD(c));g=new I;K(g);G(G(g,C(43)),c);Bd(b,J(g));M(b);}g=c;e=f+1|0;c=g.h9;f;h[f]=c;m=e+1|0;c=AJz(g.gr);e;h[e]=c;}else{c=c;g=c.ia;if(g===null){m=f+1|0;c=c.he;f;h[f]=c;}else{e=f+1|0;f;h[f]=g;m=e+1|0;c=AJz(c.jp);e;h[e]=c;}}c=h[f];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l
+1|0;f=m;}b.postMessage(h,k);}}
var Vv=H(Py);
function AJ6(){var a=this;B.call(a);a.cT=null;a.kY=null;a.Ka=null;a.fd=null;}
function Bcw(a,b){var c=new AJ6();A$r(c,a,b);return c;}
function A$r(a,b,c){var d,e,f,g;a.fd=null;a.kY=b;d=new ACS;d.bQ=C6(O(Co,0));d.qC=C6(O(Co,0));d.b2=C6(O(CH,0));d.e3=C6(O(Eg,0));d.cF=C6(O(CY,0));d.hZ=C6(O(Gv,0));d.iw=C6(O(GQ,0));d.n4=C6(O(T,0));d.oG=C6(O(T,0));d.ea=c;a.cT=d;e=$rt_globals.window;f=O(Dr,14);g=f.data;d=new AHy;d.tl=a;g[0]=Dj(a,b,C(44),d);d=new AHz;d.D5=a;g[1]=Dj(a,b,C(45),d);d=new AHA;d.Bx=a;g[2]=Dj(a,b,C(46),d);d=new AHB;d.zi=a;g[3]=Dj(a,b,C(47),d);d=new AHC;d.wG=a;g[4]=Dj(a,b,C(48),d);d=new AHD;d.tH=a;g[5]=Dj(a,b,C(49),d);d=new AHE;d.Gj=a;g[6]
=Dj(a,b,C(50),d);d=new AHF;d.DF=a;g[7]=Dj(a,b,C(51),d);d=new AHG;d.A0=a;g[8]=Dj(a,b,C(52),d);d=new AHH;d.yK=a;g[9]=Dj(a,b,C(53),d);d=new Zw;d.yh=a;g[10]=Dj(a,b,C(54),d);d=new Zx;d.xr=a;e.addEventListener("paste",BC(d,"handleEvent"),!!1);g[11]=YZ(a,e,C(55),d);d=new Zy;d.z4=a;g[12]=Dj(a,e,C(56),d);d=new Zz;d.FP=a;g[13]=Dj(a,e,C(57),d);c=new T7;c.Hk=f;a.Ka=c;e=new AIE;e.Cb=b;b.onpointerdown=BC(e,"f");e=new AIF;e.Bc=b;b.onpointerup=BC(e,"f");}
function AAs(){return (Fa()).activeElement;}
function Dj(a,b,c,d){b.addEventListener($rt_ustr(c),BC(d,"handleEvent"));return YZ(a,b,c,d);}
function YZ(a,b,c,d){var e;e=new ADd;e.Jn=b;e.Jp=c;e.Jo=d;return e;}
function AF1(a,b){var c;c=new AGF;c.zh=b;return c;}
function F3(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.kY.getBoundingClientRect();e=BP(FW((b.clientX-d.left)*c),FW((b.clientY-d.top)*c));f=APn(a.fd);d=new QQ;AGp(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.I5=f;return d;}
function ZC(a,b,c){var d,e,f,g;d=new SM;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AGp(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.mL=0;d.e6=e;d.bh=f;d.lc=c;d.DK=g;return d;}
function EA(a,b){b.stopPropagation();b.preventDefault();}
function PK(){var a=this;B.call(a);a.rJ=null;a.cE=null;a.bi=null;a.nB=0;a.EO=null;a.JL=0;a.H9=0;a.mF=null;a.mt=null;a.Iu=null;a.Ky=null;a.xZ=null;a.At=null;a.ka=null;a.jz=null;a.lk=null;a.IE=null;a.uy=null;a.dx=null;a.FV=null;a.rZ=0;a.oo=0;a.qg=0;a.p6=0;a.mW=0;a.qc=null;a.qm=0.0;a.r6=0.0;}
function AQl(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dx=new Bg;a.rZ=0;a.qc=new AHN;a.rJ=c;a.nB=d;g=$rt_str(b.getParameter(7938));h=new I;K(h);G(G(h,C(58)),g);$rt_globals.console.info($rt_ustr(J(h)));a.bi=b;a.cE=L5(c,4,4,1);i=ARp(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B0(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new TU;ID();c=Beh;m.fE=b;m.jo=c;m.wY=j.length/c.o3|0;m.FQ
=l.length;n=b.createBuffer();m.Ag=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.zm=null;n=b.createBuffer();m.yQ=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.uy=m;a.H9=Pj(g,C(59));c=new ADe;c.eU=b;a.EO=c;a.qm=e;a.r6=f;d=b.getParameter(3379);a.JL=d;c=new I;K(c);R(G(c,C(60)),d);$rt_globals.console.info($rt_ustr(J(c)));k=O(DC,9);i=k.data;c=Ba_(b);a.mF=c;i[0]=c;c=Bb_(b,C(61));a.mt=c;i[1]=c;c=new ADL;Jb(c,b,
C(62),C(63),Beh);a.Iu=c;i[2]=c;c=BcX(b);a.Ky=c;i[3]=c;c=new R2;Zk(c,b,C(64),C(65));a.xZ=c;i[4]=c;c=Bc$(b);a.At=c;i[5]=c;c=BbP(b);a.ka=c;i[6]=c;c=BcT(b);a.jz=c;i[7]=c;c=BcU(b);a.lk=c;i[8]=c;a.IE=k;AIp(b,C(66));}
function Jt(a,b,c){return GE(a,b,c,400,0);}
function IN(a,b,c){return L5(a.rJ,b,c,0);}
function Ex(a,b,c,d){return L5(a.rJ,b,c,d);}
function P6(a,b,c,d,e,f,g){var h,i;Cv(a.cE,c);h=Ex(a,MI(a.cE,b)+(d*2|0)|0,e,g);Cv(h,c);B4(h,b,d,Ni(c,e)+f|0);i=Dc(a);C5(i,h);Fe(h);return i;}
function ES(a,b){var c,d,e,f,g;c=a.bi;d=b.bx;e=b.bC;f=b.bm;g=b.bR;c.clearColor(d,e,f,g);a.bi.clear(16384);}
function B2(a,b){var c;if(b==a.oo)return b;if(!b)a.bi.disable(3042);else{a.bi.enable(3042);a.bi.blendFuncSeparate(770,771,1,1);}c=a.oo;a.oo=b;return c;}
function K3(a,b,c){Nv(a,b.b,b.a,c);}
function Nv(a,b,c,d){var e,f;e=d.b;f=d.a;a.p6=1;a.mW=1;d=a.qc;d.wr=b;d.ws=c;d.wq=e;d.wp=f;AGr(a);}
function Gd(a){a.p6=0;a.mW=0;AGr(a);}
function AGr(a){var b,c,d,e,f,g;b=a.qg;c=a.p6;if(b!=c){a.qg=c;if(!c)a.bi.disable(3089);else a.bi.enable(3089);}if(a.qg&&a.mW){a.mW=0;d=a.bi;e=a.qc;b=e.wr;c=a.dx.a-e.ws|0;f=e.wp;c=c-f|0;g=e.wq;d.scissor(b,c,g,f);}}
function G1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.uy;c=a.rZ;d=b.jo.Ei;e=b.fE;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.fE;h=b.Ag;e.bindBuffer(34962,h);i=b.jo.sC.data;g=i.length;j=0;while(j<g){k=i[j];l=b.fE;m=k.k3;n=k.hD;o=b.jo.o3*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.hD|0;j=j+1|0;}a:{e=b.zm;if(e!==null){c=0;b.fE.bindBuffer(34962,e);i=b.jo.De.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.fE;j=e.k3;p=e.hD;m=e.uH;n=b.jo.B_;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.hD|0;g=g+1|0;}}}q=b.yQ;if(q===null){c=b.wY;if(c>0)b.fE.drawArrays(4,0,c);}else{b.fE.bindBuffer(34963,q);k=b.fE;g=b.FQ;k.drawElements(4,g,5123,0);}a.rZ=d;}
function Bu(a,b,c,d,e){Ho(a,a.mF);HE(a.mF,a.bi,b,c,d,a.dx);d=a.mF;Gz(a.bi,d.Fs,e);G1(a);}
function AI5(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Ho(a,a.jz);HE(a.jz,a.bi,b,c,d,a.dx);j=a.jz;d=a.bi;k=j.zO;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.zN;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.jz;Gz(a.bi,d.AH,i);G1(a);}
function NP(a,b,c,d,e,f,g,h){var i,j;Ho(a,a.lk);HE(a.lk,a.bi,b,c,d,a.dx);d=a.lk;i=a.bi;j=d.wV;i.uniform2f(j,e,f);Gz(i,d.BT,g);d=a.lk;Gz(a.bi,d.Ai,h);G1(a);}
function D$(a,b,c,d,e,f,g,h,i){var j;j=!i?a.xZ:a.At;Ho(a,j);AQK(j,a.bi,!i?a.r6:a.qm);HE(j,a.bi,b,c,d,a.dx);PQ(j,a.bi,f);AI_(j,a.bi,f,e);APz(j,a.bi,g,h);G1(a);}
function Dc(a){var b,c;b=new L6;c=a.EO;b.eE=new Bg;b.ey=c;b.g6=c.eU.createTexture();c.lQ=c.lQ+1|0;return b;}
function OF(a,b){AIp(a.bi,b);}
function Ho(a,b){var c,d;if(b!==a.FV){c=a.bi;d=b.b5;c.useProgram(d);a.FV=b;}}
function XK(){var a=this;PK.call(a);a.HU=null;a.Iw=null;}
function GE(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cE;g=AN_(b,c,d,e);LY(f,g);h=f.dU.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EY(f,C(67));m=EY(f,C(68));h=new M7;n=g;h.qk=b;h.q6=c;h.Hd=d;h.HA=e;h.fa=i;h.fr=j;h.G4=l;h.sh=k;h.s7=n;h.wb=Dd(i);h.Ii=Dd(h.fr);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.G_=d;switch(e){case 1:break;case 2:b=C(6);break a;default:b=C(4);break a;}b=C(69);}h.GY=b;return h;}
function ACS(){var a=this;B.call(a);a.bQ=null;a.qC=null;a.b2=null;a.e3=null;a.cF=null;a.hZ=null;a.iw=null;a.n4=null;a.oG=null;a.ea=null;a.hO=null;a.A6=0;}
function WT(a,b){var c,d,e,f;DZ(a.ea);c=(B7(!b.lc?a.qC:a.bQ)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bs(b);if(f)break;if(b.mL)break;e=e+1|0;}return f;}
function Uw(a,b,c){var d,e,f;DZ(a.ea);d=(B7(a.hZ)).data;e=d.length;f=0;while(f<e){if(d[f].fW(b,c))return 1;f=f+1|0;}return 0;}
function AHy(){B.call(this);this.tl=null;}
function A8n(a,b){var c;c=a.tl;if(WT(c.cT,ZC(c,b,1)))EA(c,b);}
function AHz(){B.call(this);this.D5=null;}
function A8z(a,b){var c;c=a.D5;if(WT(c.cT,ZC(c,b,0)))EA(c,b);}
function AHA(){B.call(this);this.Bx=null;}
function AW7(a,b){var c,d,e,f,g,h,i;c=a.Bx;if(c.fd!==null){a:{b:{d=F3(c,b);e=c.cT;DZ(e.ea);f=e.hO;if(f!==null)f.g(d);else{g=(B7(e.b2)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].dq(d))break a;i=i+1|0;}}}}EA(c,b);}}
function AHB(){B.call(this);this.zi=null;}
function A6V(a,b){var c,d,e,f,g,h;c=a.zi;b.button;if(c.fd!==null)a:{d=F3(c,b);c=c.cT;e=b.button;DZ(c.ea);if(c.hO===null){f=(B7(c.b2)).data;g=f.length;h=0;while(h<g){b=f[h].co(d,e);if(b!==null){c.hO=b;c.A6=e;break a;}h=h+1|0;}}}}
function AHC(){B.call(this);this.wG=null;}
function A6$(a,b){var c,d,e,f,g,h,i;c=a.wG;b.button;if(c.fd!==null){d=F3(c,b);e=c.cT;f=b.button;DZ(e.ea);if(f==e.A6&&e.hO!==null)e.hO=null;g=(B7(e.b2)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dn(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)EA(c,b);}}
function AHD(){B.call(this);this.tH=null;}
function AYN(a,b){var c,d,e,f,g,h,i,j,k;c=a.tH;if(c.fd!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cT;f=F3(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DZ(e.ea);i=(B7(e.e3)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dB(f,d,h))break b;k=k+1|0;}}EA(c,b);}}
function AHE(){B.call(this);this.Gj=null;}
function AU6(a,b){var c,d,e,f,g,h,i,j;c=a.Gj;if(c.fd!==null){d=F3(c,b);e=c.cT;f=b.button;g=b.detail;DZ(e.ea);h=(B7(e.b2)).data;i=h.length;j=0;a:{while(j<i){if(h[j].c7(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)EA(c,b);}}
function AHF(){B.call(this);this.DF=null;}
function Bal(a,b){var c,d,e,f,g,h,i;c=a.DF;if(c.fd!==null){d=F3(c,b);e=c.cT;DZ(e.ea);f=(B7(e.cF)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bO(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)EA(c,b);}}
function AHG(){B.call(this);this.A0=null;}
function AUu(a,b){var c,d,e;b=a.A0.cT;c=(B7(b.oG)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}DZ(b.ea);}
function AHH(){B.call(this);this.yK=null;}
function AZz(a,b){var c,d,e;b=a.yK.cT;c=(B7(b.n4)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.hO!==null)b.hO=null;DZ(b.ea);}
function Zw(){B.call(this);this.yh=null;}
function A_U(a,b){var c;c=a.yh;if(c.fd!==null)F3(c,b);}
function Zx(){B.call(this);this.xr=null;}
function AWE(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.xr;if(AAs()===c.kY){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B7(c.cT.iw)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cb();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cT.ea;m=new RM;m.yW=k;m.yX=l;g.getAsString(BC(m,"accept"));EA(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new I;K(l);G(G(G(G(l,C(70)),k),C(71)),g);$rt_globals.console.info($rt_ustr(J(l)));}e=e+
1|0;}}}
function Zy(){B.call(this);this.z4=null;}
function AW_(a,b){var c;c=a.z4;if(AAs()===c.kY&&Uw(c.cT,AF1(c,b),0))EA(c,b);}
function Zz(){B.call(this);this.FP=null;}
function A8J(a,b){var c;c=a.FP;if(AAs()===c.kY&&Uw(c.cT,AF1(c,b),1))EA(c,b);}
var AGj=H(0);
var AGt=H();
function L5(a,b,c,d){var e,f,g,h,i;e=new AEy;e.kF=d;Bd1=Bd1+1|0;e.pW=b;e.pf=c;f=(Fa()).createElement("canvas");e.ku=f;g=b;f.width=g;h=e.ku;f=c;h.height=f;if(!d)g=e.ku.getContext("2d");else{i=e.ku;h=A2_();g=i.getContext("2d",h);}e.dU=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AGs=H();
function AVT(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
var Yl=H(0);
function A1W(a,b){var c;c=a.cx();while(c.da()){b.g(c.cz());}}
var IA=H(0);
function Xp(a){var b,c;b=new AEY;c=new TO;c.B0=a;b.EI=c;return b;}
function A6o(a,b){var c,d;c=a.cx();d=0;while(c.da()){if(b.bO(c.cz())){c.ru();d=1;}}return d;}
var Gx=H();
function Y1(a){}
function Fk(a){return a.du()?0:1;}
function FE(a,b){var c,d,e,f,g,h;c=b.data;d=a.r;e=c.length;if(e<d)b=Np(FK(BD(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Ci(a);while(Ck(f)){g=b.data;h=e+1|0;g[e]=Cl(f);e=h;}return b;}
function A9I(a,b){var c;c=a.cx();while(c.da()){if(BW(c.cz(),b)){c.ru();return 1;}}return 0;}
function Hq(a,b){var c,d;c=0;d=b.cx();while(d.da()){if(!a.rV(d.cz()))continue;c=1;}return c;}
var Pp=H(0);
var Om=H(0);
function E5(){Gx.call(this);this.cq=0;}
function AYU(a,b){a.qy(a.du(),b);return 1;}
function Ci(a){var b;b=new AAY;b.kG=a;b.so=a.cq;b.na=a.du();b.ja=(-1);return b;}
function AYj(a,b,c){var d,e;if(b>=0&&b<=a.du()){if(c.fq())return 0;d=c.cx();while(d.da()){e=b+1|0;a.qy(b,d.cz());b=e;}return 1;}c=new Bv;X(c);M(c);}
function A$w(a,b,c){c=new Ed;X(c);M(c);}
function A8G(a,b){var c;c=new Ed;X(c);M(c);}
function MB(a,b){var c,d;c=a.du();d=0;while(true){if(d>=c)return (-1);if(BW(b,a.j2(d)))break;d=d+1|0;}return d;}
function AXm(a,b){var c,d;if(!EX(b,Om))return 0;c=b;if(a.r!=c.r)return 0;d=0;while(d<c.r){if(!BW(BU(a,d),BU(c,d)))return 0;d=d+1|0;}return 1;}
var NU=H(E5);
var QV=H(0);
var AIK=H(0);
function Nm(){var a=this;NU.call(a);a.rk=null;a.ob=null;a.mJ=0;}
function AAi(a){var b,c;b=a.rk;if(b===null)b=null;else{c=b.xh;a.rk=c;if(c!==null)c.EP=null;else a.ob=null;a.mJ=a.mJ-1|0;a.cq=a.cq+1|0;b=b.tL;}return b;}
var M4=H(0);
function EI(){var a=this;B.call(a);a.q8=null;a.re=null;}
var Dq=H(0);
var Zc=H(0);
var Ro=H(0);
function AB_(){var a=this;EI.call(a);a.lq=null;a.n6=null;a.Iz=null;a.n9=0;}
function AMu(a,b){var c;c=AGC(a,b);if(c===null)return null;a.lq=Mv(a,a.lq,b);a.n9=a.n9+1|0;return c.lW;}
function AGC(a,b){var c,d;c=a.lq;while(true){if(c===null)return null;d=OD(a.n6,b,c.nz);if(!d)break;c=d>=0?c.ct:c.cf;}return c;}
function Qs(a,b,c){var d,e;if(b===null){b=new L7;d=null;b.nz=c;b.lW=d;b.hW=1;b.h4=1;return b;}e=OD(a.n6,c,b.nz);if(!e)return b;if(e>=0)b.ct=Qs(a,b.ct,c);else b.cf=Qs(a,b.cf,c);FM(b);return OP(b);}
function Mv(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=OD(a.n6,c,b.nz);if(d<0)b.cf=Mv(a,b.cf,c);else if(d>0)b.ct=Mv(a,b.ct,c);else{e=b.ct;if(e===null)return b.cf;f=b.cf;g=O(L7,e.hW).data;h=0;while(true){b=e.cf;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.ct;while(h>0){h=h+(-1)|0;j=g[h];j.cf=b;FM(j);b=OP(j);}e.ct=b;e.cf=f;FM(e);b=e;}FM(b);return OP(b);}
function AE2(){B.call(this);this.DT=null;}
function AMA(){var a=this;B.call(a);a.dK=null;a.hg=null;a.c6=0;}
function C6(a){var b=new AMA();AU2(b,a);return b;}
function AU2(a,b){a.dK=b;}
function Gj(a,b){return a.dK.data[b];}
function Z(a,b){var c,d,e;c=a.c6;d=a.dK;if(c==d.data.length)a.dK=C0(d,c+4|0);d=a.dK.data;e=a.c6;a.c6=e+1|0;d[e]=b;a.hg=null;}
function Vn(a,b){var c,d,e,f;c=0;while(true){d=a.dK.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.c6=a.c6-1|0;a.hg=null;}c=c+1|0;}}
function B7(a){var b;b=a.hg;if(!(b!==null&&b.data.length==a.c6))a.hg=C0(a.dK,a.c6);return a.hg;}
var Co=H(0);
var CH=H(0);
function A6u(a,b){return 0;}
function A0r(a,b,c){return null;}
function ARS(a,b,c){return 0;}
function A80(a,b,c,d){return 0;}
var Eg=H(0);
var EC=H(0);
var CY=H(0);
var Gv=H(0);
var CK=H(0);
var GQ=H(0);
function T7(){B.call(this);this.Hk=null;}
function Bg(){var a=this;B.call(a);a.b=0;a.a=0;}
function BP(a,b){var c=new Bg();Tf(c,a,b);return c;}
function APn(a){var b=new Bg();ATA(b,a);return b;}
function Tf(a,b,c){a.b=b;a.a=c;}
function ATA(a,b){a.b=b.b;a.a=b.a;}
function CF(a,b){a.b=b.b;a.a=b.a;}
function Y(a,b,c){a.b=b;a.a=c;}
function AM$(a){var b,c,d;b=a.b;c=a.a;d=new I;K(d);R(G(R(G(d,C(72)),b),C(73)),c);return J(d);}
function AVI(a,b){var c;a:{b:{if(a!==b){if(BD(b)!==BD(a))break b;if(!K$(a,b))break b;}c=1;break a;}c=0;}return c;}
function K$(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function AHN(){var a=this;B.call(a);a.wr=0;a.ws=0;a.wq=0;a.wp=0;}
var AL4=H();
var ANP=H(0);
function ADe(){var a=this;B.call(a);a.eU=null;a.lQ=0;a.gH=0;}
function PZ(){var a=this;B.call(a);a.b5=null;a.KC=null;}
function APD(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(74):C(75);g=$rt_str(b.getShaderInfoLog(e));h=new I;K(h);G(G(h,f),g);g=J(h);b.deleteShader(e);Bb(Bi(),g);Bb(C_(),C(76));Bb(C_(),d);Bb(C_(),C(76));b=new Bx;Bd(b,g);M(b);}
function DC(){var a=this;PZ.call(a);a.AZ=null;a.u7=null;a.pQ=null;}
function Bei(a,b,c,d){var e=new DC();Jb(e,a,b,c,d);return e;}
function Jb(a,b,c,d,e){var f,g,h,i,j,k;a.KC=e;f=APD(b,35633,c);d=APD(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.b5=g;h=e.w8.data;i=h.length;j=0;while(j<i){c=h[j];d=a.b5;k=c.k3;c=c.vg;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.b5;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AIp(b,C(77));a.pQ=new Bg;c=a.b5;a.AZ=b.getUniformLocation(c,"uResolution");c=a.b5;a.u7=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bx;c=new I;K(c);G(G(c,C(78)),d);Bd(b,J(c));M(b);}
function AKe(a,b,c){var d,e,f;if(!K$(a.pQ,c)){CF(a.pQ,c);d=a.AZ;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function HE(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.u7;b.uniform4f(e,i,l,h,j);AKe(a,b,f);}
function AQr(){DC.call(this);this.Fs=null;}
function Ba_(a){var b=new AQr();A6c(b,a);return b;}
function A6c(a,b){var c;ID();Jb(a,b,C(62),C(79),Beh);c=a.b5;a.Fs=b.getUniformLocation(c,"uColor");}
function Gn(){DC.call(this);this.wA=null;}
function Bb_(a,b){var c=new Gn();AF3(c,a,b);return c;}
function Bej(a,b,c){var d=new Gn();AF8(d,a,b,c);return d;}
function AF3(a,b,c){AF8(a,b,C(62),c);}
function AF8(a,b,c,d){ID();Jb(a,b,c,d,Beh);c=a.b5;a.wA=b.getUniformLocation(c,"sDiffuse");}
function PQ(a,b,c){var d;d=a.wA;b.uniform1i(d,0);b.activeTexture(33984);c=c.g6;b.bindTexture(3553,c);}
var ADL=H(DC);
function AKR(){Gn.call(this);this.GL=null;}
function BcX(a){var b=new AKR();AYk(b,a);return b;}
function AYk(a,b){var c;AF3(a,b,C(80));c=a.b5;a.GL=b.getUniformLocation(c,"uContrast");}
function Iu(){var a=this;Gn.call(a);a.un=null;a.vt=null;a.wS=null;a.EC=null;a.sO=0.0;}
function Bek(a,b,c){var d=new Iu();Zk(d,a,b,c);return d;}
function Zk(a,b,c,d){AF8(a,b,c,d);c=a.b5;a.un=b.getUniformLocation(c,"uTexTransform");c=a.b5;a.vt=b.getUniformLocation(c,"uColor");c=a.b5;a.wS=b.getUniformLocation(c,"uBgColor");c=a.b5;a.EC=b.getUniformLocation(c,"uTextPow");}
function AQK(a,b,c){var d;if(a.sO!==c){a.sO=c;d=a.EC;b.uniform2f(d,c,0.0);}}
function APz(a,b,c,d){Gz(b,a.vt,c);Gz(b,a.wS,d);}
function AI_(a,b,c,d){var e,f,g,h,i,j;c=c.eE;e=c.b;f=c.a;g=d.bx;h=e;g=g/h;i=d.bC;j=f;i=i/j;h=d.bm/h;j=d.bR/j;c=a.un;b.uniform4f(c,g,i,h,j);}
var R2=H(Iu);
var AMQ=H(Iu);
function Bc$(a){var b=new AMQ();A4N(b,a);return b;}
function A4N(a,b){Zk(a,b,C(64),C(81));}
function AN4(){var a=this;Gn.call(a);a.zn=null;a.zl=null;a.vz=null;}
function BbP(a){var b=new AN4();AT1(b,a);return b;}
function AT1(a,b){var c,d;AF3(a,b,C(82));c=a.b5;a.zn=b.getUniformLocation(c,"uColorB");d=a.b5;a.zl=b.getUniformLocation(d,"uColorF");d=a.b5;a.vz=b.getUniformLocation(d,"uContrast");}
function APM(){var a=this;DC.call(a);a.AH=null;a.zO=null;a.zN=null;}
function BcT(a){var b=new APM();A4P(b,a);return b;}
function A4P(a,b){var c;ID();Jb(a,b,C(62),C(83),Beh);c=a.b5;a.AH=b.getUniformLocation(c,"uColor");c=a.b5;a.zO=b.getUniformLocation(c,"uPoints1");c=a.b5;a.zN=b.getUniformLocation(c,"uPoints2");}
function AJF(){var a=this;DC.call(a);a.Ai=null;a.wV=null;a.BT=null;}
function BcU(a){var b=new AJF();A3s(b,a);return b;}
function A3s(a,b){var c;ID();Jb(a,b,C(62),C(84),Beh);c=a.b5;a.Ai=b.getUniformLocation(c,"uColor");c=a.b5;a.wV=b.getUniformLocation(c,"uBaseline");c=a.b5;a.BT=b.getUniformLocation(c,"uScaleHExp");}
var AEL=H(0);
var AQ6=H(0);
function Gz(b,c,d){var e,f,g,h;e=d.bx;f=d.bC;g=d.bm;h=d.bR;b.uniform4f(c,e,f,g,h);}
function AIp(b,c){var d,e;d=b.getError();if(d){b=Bi();e=new I;K(e);R(G(e,c),d);Bb(b,J(e));}}
function ADd(){var a=this;B.call(a);a.Jn=null;a.Jp=null;a.Jo=null;}
function TU(){var a=this;B.call(a);a.fE=null;a.jo=null;a.Ag=null;a.zm=null;a.yQ=null;a.wY=0;a.FQ=0;}
function Cu(){var a=this;B.call(a);a.Ji=null;a.fQ=0;}
function Ds(a,b,c){a.Ji=b;a.fQ=c;}
function H7(){var a=this;Cu.call(a);a.w8=null;a.sC=null;a.De=null;a.o3=0;a.B_=0;a.Ei=0;}
var Beh=null;var Bel=null;function ID(){ID=Bn(H7);AVs();}
function ARL(){ID();return Bel.dN();}
function AVs(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new H7;c=O(EN,2);d=c.data;AQL();d[0]=Bem;d[1]=Ben;ID();Ds(b,C(85),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.sf.fQ){case 0:f=f+l.hD|0;h=h+1|0;break a;case 1:e=e+l.hD|0;g=g+1|0;break a;default:}}i=i|1<<l.k3;k=k+1|0;}b.w8=c;b.o3=e;b.B_=f;b.Ei=i;c=O(EN,g);m=c.data;b.sC=c;c=O(EN,h);n=c.data;b.De=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.sf.fQ){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}Beh
=b;c=O(H7,1);c.data[0]=b;Bel=c;}
var LS=H();
var BdL=null;function OD(a,b,c){return b.n$(c);}
function AKV(){BdL=new LS;}
var N6=H(0);
var M_=H(0);
var PV=H(0);
var HP=H();
function Oy(){HP.call(this);this.Gy=null;}
function AKu(){var a=this;Oy.call(a);a.H6=0;a.o_=0;a.nc=null;a.oL=null;a.xU=null;}
function AXj(a,b){var c=new AKu();A$O(c,a,b);return c;}
function A$O(a,b,c){a.Gy=b;b=new I;K(b);a.nc=b;a.oL=B0(32);a.H6=c;AKp();a.xU=Beo;}
function AFG(a,b,c,d){var e,$$je;e=a.Gy;if(e===null)a.o_=1;if(!(a.o_?0:1))return;a:{try{e.oE(b,c,d);break a;}catch($$e){$$je=Ev($$e);if($$je instanceof H8){}else{throw $$e;}}a.o_=1;}}
function ABt(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AO4(b,c,d-c|0);e=C$(Be(16,Bh(e.length,1024)));g=AOP(e,0,e.data.length);h=a.xU;i=new S$;b=C$(1);j=b.data;j[0]=63;Ik();k=Bep;i.pT=k;i.pg=k;c=j.length;if(c&&c>=i.zM){i.Jg=h;i.ve=b.dN();i.H2=2.0;i.zM=4.0;i.BZ=B0(512);i.tF=C$(512);k=Beq;if(k===null){i=new Bv;Bd(i,C(86));M(i);}i.pT=k;i.pg=k;a:while(true){if(i.m7==3){f=new CW;X(f);M(f);}i.m7=2;b:{while(true){try{k=AJw(i,f,g);}catch($$e){$$je=Ev($$e);if($$je instanceof Bx){f=$$je;break a;}else{throw $$e;}}if
(J5(k)){d=Cp(f);if(d<=0)break b;k=E_(d);}else if(Ji(k))break;h=!NV(k)?i.pT:i.pg;c:{if(h!==Beq){if(h===Ber)break c;else break b;}d=Cp(g);b=i.ve;l=b.data.length;if(d<l){k=Bes;break b;}AH4(g,b,0,l);}Gq(f,f.bk+Mw(k)|0);}}l=Ji(k);AFG(a,e,0,g.bk);Sa(g);if(!l){while(true){d=i.m7;if(d!=2&&d!=4){f=new CW;X(f);M(f);}f=Bet;if(f===f)i.m7=3;l=Ji(f);AFG(a,e,0,g.bk);Sa(g);if(!l)break;}return;}}M(A4f(f));}i=new Bv;Bd(i,C(87));M(i);}
function Bb(a,b){var c,d,e,f,g,h,i,j;Bl(BG(a.nc,b),10);b=a.nc;c=b.B;d=a.oL;if(c>d.data.length)d=B0(c);e=0;f=0;if(e>c){b=new BN;Bd(b,C(88));M(b);}while(e<c){g=d.data;h=f+1|0;i=b.H.data;j=e+1|0;g[f]=i[e];f=h;e=j;}ABt(a,d,0,c);a.nc.B=0;}
function IJ(){HP.call(this);this.Kg=null;}
function ZJ(a){a.Kg=C$(1);}
var Nf=H(IJ);
var Bd4=null;function AVM(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ALJ(){var b;b=new Nf;ZJ(b);Bd4=b;}
function EN(){var a=this;Cu.call(a);a.vg=null;a.sf=null;a.hD=0;a.uH=0;a.k3=0;}
var Bem=null;var Ben=null;var Beu=null;function AQL(){AQL=Bn(EN);A5C();}
function Bbi(a,b,c,d,e,f,g){var h=new EN();Yf(h,a,b,c,d,e,f,g);return h;}
function ARo(){AQL();return Beu.dN();}
function Yf(a,b,c,d,e,f,g,h){AQL();Ds(a,b,c);a.vg=d;a.sf=e;a.hD=f;a.uH=g;a.k3=h;}
function A5C(){var b;b=new EN;AK$();Yf(b,C(89),0,C(90),Bev,2,0,0);Bem=b;b=Bbi(C(91),1,C(92),Bev,2,0,1);Ben=b;Beu=L(EN,[Bem,b]);}
function Op(){var a=this;B.call(a);a.I4=null;a.JP=null;}
function ALU(b){var c,d;if(Eu(b))M(AOs(b));if(!AP7(P(b,0)))M(AOs(b));c=1;while(c<N(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AP7(d))break a;else M(AOs(b));}}c=c+1|0;}}
function AP7(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var N9=H(Op);
var Beo=null;function AKp(){AKp=Bn(N9);AT0();}
function AL7(a){var b,c;b=new Ws;b.hC=C(93);Ik();c=Bep;b.kM=c;b.p4=c;b.JH=a;b.zT=0.3333333432674408;b.HC=0.5;b.AR=C$(512);b.D3=B0(512);return b;}
function AT0(){var b,c,d,e,f;b=new N9;AKp();c=O(BE,0);d=c.data;ALU(C(94));e=d.length;f=0;while(f<e){ALU(d[f]);f=f+1|0;}b.I4=C(94);b.JP=c.dN();Beo=b;}
function ACe(){var a=this;B.call(a);a.hu=null;a.su=null;a.op=null;a.En=null;a.uW=null;a.va=null;}
function AOv(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.hu,b,c));}
function Re(a,b){var c,d,e,f,g,h,i,$$je;c=new BE;d=b;while(a.su[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.hu,b,d));f=e.data;EQ();d=f.length;AKp();g=Beo;h=AOP(e,0,d);a:{try{i=AL7(g);Ik();g=ANU(ALl(AQF(i,Beq),Beq),h);break a;}catch($$e){$$je=Ev($$e);if($$je instanceof Ha){g=$$je;}else{throw $$e;}}M(A4X(C(95),g));}if(!g.bk&&g.e$==g.qn)c.bn=g.jS;else{f=B0(Cp(g));e=f.data;c.bn=f;RE(g,f,0,e.length);}return c;}
function AAu(a,b){var c,d,e;c=new BE;d=b>>>1|0;e=d;while(a.op[e]){e=e+1|0;}d=e-d|0;Ky(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.hu,b,d)));return c;}
var I9=H(Cu);
var Bew=null;var Bev=null;var Bex=null;function AK$(){AK$=Bn(I9);A4s();}
function ATV(a,b){var c=new I9();AQg(c,a,b);return c;}
function AWo(){AK$();return Bex.dN();}
function AQg(a,b,c){AK$();Ds(a,b,c);}
function A4s(){var b;Bew=ATV(C(96),0);b=ATV(C(97),1);Bev=b;Bex=L(I9,[Bew,b]);}
var Pr=H(IJ);
var Bd5=null;function AT_(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AM8(){var b;b=new Pr;ZJ(b);Bd5=b;}
function AL0(){Bv.call(this);this.GX=null;}
function AOs(a){var b=new AL0();AZV(b,a);return b;}
function AZV(a,b){X(a);a.GX=b;}
var NG=H(Fb);
function CR(){B.call(this);this.A=null;}
function Fo(a,b){a.A=b;}
function A_T(a,b){return 0;}
var N8=H(0);
function AIE(){B.call(this);this.Cb=null;}
function AZf(a,b){a.Cb.setPointerCapture(b.pointerId);}
function AIF(){B.call(this);this.Bc=null;}
function ASB(a,b){a.Bc.releasePointerCapture(b.pointerId);}
function AFr(){var a=this;B.call(a);a.AP=null;a.AN=0;}
function AZb(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.AP;d=a.AN;b=b.data;AM3(b);e=AAi(c.rA);if(e===null)e=AAi(c.rB);if(e!==null)WY(c,e.xC,e.EY,e.D8,d);else{f=c.rs.data;g=c.jK;c.jK=g+1|0;f[g]=d;}c=c.F2;if(!AM3(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new Bv;X(b);M(b);}if(b.length<1){b=new Bv;ALE(b);M(b);}e=CE(b[0]);h=AMu(c.DT,e);d=1;i=b.length;f=O(B,i-d|0);j=f.data;g=0;while(d<i){k=g+1|0;l=d+1|0;e=b[d];if(typeof e==='string'?1:0)j[g]=GD(AOr(e));else if(!(e instanceof $rt_globals.ArrayBuffer?1:0))l=ALN(BdK,e,b,
l,f,g);else j[g]=Ba5(AOr(e));g=k;d=l;}if(g!=j.length)f=C0(f,g);h.g(f);}}
function QS(){var a=this;B.call(a);a.N=null;a.m=null;a.bv=null;}
function Jg(){var a=this;B.call(a);a.qn=0;a.bk=0;a.e$=0;a.k9=0;}
function AHm(a,b){a.k9=(-1);a.qn=b;a.e$=b;}
function Gq(a,b){var c,d,e;if(b>=0&&b<=a.e$){a.bk=b;if(b<a.k9)a.k9=0;return a;}c=new Bv;d=a.e$;e=new I;K(e);Bl(R(G(R(G(e,C(98)),b),C(99)),d),93);Bd(c,J(e));M(c);}
function Cp(a){return a.e$-a.bk|0;}
function EB(a){return a.bk>=a.e$?0:1;}
var AEX=H(0);
var M8=H(Jg);
function AMT(b){var c,d;if(b>=0)return AYw(0,b,B0(b),0,b,0);c=new Bv;d=new I;K(d);R(G(d,C(100)),b);Bd(c,J(d));M(c);}
function AO4(b,c,d){return AYw(0,b.data.length,b,c,c+d|0,0);}
function RE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BN;i=new I;K(i);R(G(R(G(i,C(101)),g),C(102)),f);Bd(h,J(i));M(h);}if(Cp(a)<d){j=new P$;X(j);M(j);}if(d<0){j=new BN;k=new I;K(k);G(R(G(k,C(103)),d),C(104));Bd(j,J(k));M(j);}g=a.bk;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.jS.data[m+a.si|0];l=l+1|0;c=n;m=o;}a.bk=g+d|0;return a;}}b=b.data;j=new BN;d=b.length;k=new I;K(k);Bl(R(G(R(G(k,C(105)),c),C(99)),d),41);Bd(j,J(k));M(j);}
function O6(a,b){var c,d,e,f,g,h,i;c=0;d=N(b);if(a.sv){b=new LH;X(b);M(b);}e=d-c|0;if(Cp(a)<e){b=new KT;X(b);M(b);}if(c>N(b)){f=new BN;d=N(b);b=new I;K(b);Bl(R(G(R(G(b,C(106)),c),C(99)),d),41);Bd(f,J(b));M(f);}if(d>N(b)){f=new BN;c=N(b);b=new I;K(b);R(G(R(G(b,C(107)),d),C(108)),c);Bd(f,J(b));M(f);}if(c>d){b=new BN;f=new I;K(f);R(G(R(G(f,C(106)),c),C(109)),d);Bd(b,J(f));M(b);}g=a.bk;while(c<d){h=g+1|0;i=c+1|0;AE1(a,g,P(b,c));g=h;c=i;}a.bk=a.bk+e|0;return a;}
function OU(){var a=this;Jg.call(a);a.o$=0;a.r2=null;a.HJ=null;}
function AOP(b,c,d){var e,f,g;e=b.data;f=new AH3;g=e.length;d=c+d|0;AHm(f,g);A6f();f.HJ=Bey;f.o$=0;f.r2=b;f.bk=c;f.e$=d;f.HP=0;f.Af=0;return f;}
function AH4(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.Af){e=new LH;X(e);M(e);}if(Cp(a)<d){e=new KT;X(e);M(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BN;j=new I;K(j);R(G(R(G(j,C(110)),h),C(102)),g);Bd(i,J(j));M(i);}if(d<0){e=new BN;i=new I;K(i);G(R(G(i,C(103)),d),C(104));Bd(e,J(i));M(e);}h=a.bk;k=h+a.o$|0;l=0;while(l<d){b=a.r2.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bk=h+d|0;return a;}}b=b.data;e=new BN;d=b.length;i=new I;K(i);Bl(R(G(R(G(i,C(105)),c),C(99)),d),41);Bd(e,
J(i));M(e);}
function Sa(a){a.bk=0;a.e$=a.qn;a.k9=(-1);return a;}
function JJ(){B.call(this);this.IG=null;}
var Ber=null;var Beq=null;var Bep=null;function Ik(){Ik=Bn(JJ);AWL();}
function AMD(a){var b=new JJ();AP5(b,a);return b;}
function AP5(a,b){Ik();a.IG=b;}
function AWL(){Ber=AMD(C(111));Beq=AMD(C(112));Bep=AMD(C(113));}
var AO0=H();
var Mp=H(M8);
function AKJ(){var a=this;Mp.call(a);a.sv=0;a.si=0;a.jS=null;}
function AYw(a,b,c,d,e,f){var g=new AKJ();A1M(g,a,b,c,d,e,f);return g;}
function A1M(a,b,c,d,e,f,g){AHm(a,c);a.bk=e;a.e$=f;a.si=b;a.sv=g;a.jS=d;}
function AE1(a,b,c){a.jS.data[b+a.si|0]=c;}
function M1(){var a=this;B.call(a);a.Jg=null;a.ve=null;a.H2=0.0;a.zM=0.0;a.pT=null;a.pg=null;a.m7=0;}
function P7(){var a=this;B.call(a);a.jq=0;a.lF=0;}
var Bet=null;var Bes=null;function AJB(a,b){var c=new P7();AN8(c,a,b);return c;}
function AN8(a,b,c){a.jq=b;a.lF=c;}
function J5(a){return a.jq?0:1;}
function Ji(a){return a.jq!=1?0:1;}
function Pq(a){return !Uq(a)&&!NV(a)?0:1;}
function Uq(a){return a.jq!=2?0:1;}
function NV(a){return a.jq!=3?0:1;}
function Mw(a){var b;if(Pq(a))return a.lF;b=new Ed;X(b);M(b);}
function E_(b){return AJB(2,b);}
function XG(a){var b,c;switch(a.jq){case 0:b=new T0;X(b);M(b);case 1:b=new Y9;X(b);M(b);case 2:b=new XC;c=a.lF;X(b);b.IV=c;M(b);case 3:b=new TF;c=a.lF;X(b);b.KW=c;M(b);default:}}
function AOk(){Bet=AJB(0,0);Bes=AJB(1,0);}
function Jj(){var a=this;B.call(a);a.b_=0;a.c2=0;a.dV=0;a.jW=0;}
function Bez(a,b,c,d){var e=new Jj();AGp(e,a,b,c,d);return e;}
function AGp(a,b,c,d,e){a.b_=d;a.c2=b;a.dV=c;a.jW=e;}
function AFQ(a){return a.c2&&!a.b_&&!a.dV&&!a.jW?1:0;}
function ADh(a){return !a.c2&&!a.b_&&!a.dV&&!a.jW?1:0;}
function SM(){var a=this;Jj.call(a);a.e6=null;a.bh=0;a.lc=0;a.DK=0;a.mL=0;}
var AL_=H();
function Yp(b,c){return (b+(c/2|0)|0)/c|0;}
function KP(b,c,d){if(b<(2147483647/c|0))return Yp(Ba(b,c),d);return 0.5+c*b/d|0;}
function Hw(b,c){return ((b+c|0)-1|0)/c|0;}
function FW(b){return b+0.5|0;}
function Dd(b){return b+0.5|0;}
function FU(b,c,d){return Be(b,Bh(c,d));}
function OT(b,c){return ANy(b)/ANy(c);}
function QQ(){var a=this;Jj.call(a);a.i=null;a.I5=null;}
var WX=H(0);
function RM(){var a=this;B.call(a);a.yW=null;a.yX=null;}
function A6H(a,b){var c,d;c=a.yW;d=a.yX;$rt_globals.console.info("paste plain string "+b);c.g(GD(b));DZ(d);}
var W=H(0);
function AGF(){B.call(this);this.zh=null;}
function P9(a,b){a.zh.clipboardData.setData("text/plain",$rt_ustr(b));}
function AH3(){var a=this;OU.call(a);a.HP=0;a.Af=0;}
function Pd(){B.call(this);this.H4=null;}
var Bey=null;var BeA=null;function A6f(){A6f=Bn(Pd);Ban();}
function ATQ(a){var b=new Pd();AM_(b,a);return b;}
function AM_(a,b){A6f();a.H4=b;}
function Ban(){Bey=ATQ(C(114));BeA=ATQ(C(115));}
function Pv(){var a=this;M1.call(a);a.BZ=null;a.tF=null;}
function AJw(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.BZ;e=0;f=0;g=a.tF;a:{while(true){if((e+32|0)>f&&EB(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bh(Cp(b)+j|0,i.length);RE(b,d,j,f-j|0);e=0;}if(!EB(c)){k=!EB(b)&&e>=f?Bet:Bes;break a;}i=g.data;j=Bh(Cp(c),i.length);l=new AA5;l.sL=b;l.Cm=c;k=AKU(a,d,e,f,g,0,j,l);e=l.yf;j=l.za;if(k===null){if(!EB(b)&&e>=f)k=Bet;else if(!EB(c)&&e>=f)k=Bes;}AH4(c,g,0,j);if(k!==null)break;}}Gq(b,b.bk-(f-e|0)|0);return k;}
var S$=H(Pv);
function AKU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(P5(h,2))break a;i=Bes;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Qv(l)){if((f+3|0)>g){j=j+(-1)|0;if(P5(h,3))break a;i=Bes;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!C4(l)){i=E_(1);break a;}if
(j>=d){if(EB(h.sL))break a;i=Bet;break a;}c=j+1|0;m=k[j];if(!Do(m)){j=c+(-2)|0;i=E_(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(P5(h,4))break a;i=Bes;break a;}k=e.data;o=E0(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.yf=j;h.za=f;return i;}
var H8=H(Fb);
var AJf=H(CR);
function Bbk(a){var b=new AJf();A5X(b,a);return b;}
function A5X(a,b){var c,d;Fo(a,b);b=$rt_globals.fetch("test.wasm");c=new AAE;b=b.then(BC(c,"f"));c=new AAD;b=b.then(BC(c,"f"));c=new AAB;d=new AAA;b.then(BC(c,"f"),BC(d,"f"));}
function AWz(a){}
function AVj(a,b,c){}
function IQ(){var a=this;CR.call(a);a.dy=null;a.p=null;}
function AHl(a,b){var c,d,e;Fo(a,b);a.dy=AN$(0,0,64);c=new W6;c.bY=new Bg;c.dz=C6(O(CS,0));c.dX=new Bg;c.sg=new Bg;c.n_=new B_;c.GB=new B_;d=b.N;c.b8=d;e=b.bv;c.b1=e;c.c9=d.nB;c.cI=JP(e);d=b.m.oG;e=new AC9;e.ww=c;Z(d,e);d=b.m.n4;e=new AC8;e.ze=c;Z(d,e);Z(b.m.hZ,c);Z(b.m.iw,c);a.p=c;Z(b.m.bQ,new AEN);b=b.m.bQ;c=a.p;BH(c);d=new AEM;d.AQ=c;Z(b,d);}
function IC(a){ES(a.A.N,a.dy);}
function AK2(a,b,c){var d,e,f,g,h;a:{d=a.p;CF(d.bY,b);e=d.cr;if(e!==c){d.cr=c;f=(B7(d.dz)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eT(e,c);h=h+1|0;}}}}
function Ca(){IQ.call(this);this.t=null;}
function F_(a,b){F0(a,b,1);}
function F0(a,b,c){var d,e,f;AHl(a,b);d=new AIi;e=a.p;d.bH=C6(O(Xf,0));d.F=e;a.t=d;Z(a.p.dz,d);Z(b.m.b2,a.t);d=b.m.e3;e=a.t;BH(e);f=new ZY;f.y6=e;Z(d,f);d=b.m.cF;e=a.t;BH(e);f=new ZX;f.wd=e;Z(d,f);if(c){b=b.m.b2;f=a.p.cI;d=new AAQ;d.zK=f;Z(b,d);}}
function AT3(a){IC(a);K1(a.t);}
function GR(a,b,c){var d,e,f;AK2(a,b,c);d=(B7(a.t.bH)).data;e=d.length;f=0;while(f<e){b=d[f];if(ACY(b))AAc(b);f=f+1|0;}}
function Sl(a,b){var c,d,e,f,g;c=a.t;d=0;e=(B7(c.bH)).data;f=e.length;g=0;while(g<f){d=e[g].bc.cU(b)|d;g=g+1|0;}return d;}
var EK=H(0);
function AMJ(a){a.eL(HM());}
function Kw(a){a.eL(Fv());}
function AND(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new JZ;c=new Ln;d=new Il;AL8();Mj(d,BeB);N$(c,d,B3(BeC),B3(BeD),B3(BeE),B3(BeC),B3(BeF),B3(BeG),B3(BeH),B3(BeI),B3(BeJ),B3(BeK));e=AOX(U(C(116)));f=(AQk()).data;g=f.length;h=O(LF,g);i=h.data;j=0;while(j<g){i[j]=f[j].rC;j=j+1|0;}k=APQ(U(C(117)),U(C(118)),U(C(119)),U(C(120)));l=new J1;m=new J$;A2z();d=BeL;QF(m,d,BeM,BeN,BeO,BeP,d);Nw(l,m,AQG(),AML(U(C(121)),U(C(116)),Cw(0)),AQG(),ANa(1,0.07500000298023224),BeQ,BeR);Nh(b,c,e,h,k,l,AJb(U(C(122)),U(C(123)),U(C(124)),
U(C(125))));a.eL(b);}
function PN(){var a=this;Ca.call(a);a.CV=null;a.rK=null;}
function Bb5(a){var b=new PN();AMb(b,a);return b;}
function AMb(a,b){F0(a,b,0);a.CV=Fv();}
function A1C(a){return Ea(1);}
function ARe(a,b,c){var d,e,f,g;d=a.t.F.cr!==0.0?0:1;GR(a,b,c);if(d){b=new KG;e=a.t;f=a.CV;g=new AEV;g.DV=a;Nk(b,e,f,g);a.rK=b;AC_(b.gt);}}
var AL$=H(PN);
function Bcr(a){var b=new AL$();A$_(b,a);return b;}
function A$_(a,b){var c;AMb(a,b);c=new WN;c.An=a;SD(a,c,C(126));c=new WP;c.Er=a;SD(a,c,C(127));}
function AXf(a){return Ea(1);}
function SD(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Q$;d=d.then(BC(e,"f"));f=new Ra;f.wC=b;f.wB=c;g=new Q_;d.then(BC(f,"f"),BC(g,"f"));}
var AMy=H();
function A$z(b){var c,d;if(N(b)>0){c=new I;K(c);G(G(c,C(128)),b);$rt_globals.console.info($rt_ustr(J(c)));}a:{d=(-1);switch(La(b)){case -1570047148:if(!Bj(b,C(129)))break a;d=19;break a;case -1509980539:if(!Bj(b,C(130)))break a;d=15;break a;case -1351411913:if(!Bj(b,C(131)))break a;d=8;break a;case -1073555521:if(!Bj(b,C(132)))break a;d=16;break a;case -1045861099:if(!Bj(b,C(133)))break a;d=20;break a;case -1045861098:if(!Bj(b,C(134)))break a;d=21;break a;case -811765794:if(!Bj(b,C(135)))break a;d=9;break a;case -785237654:if
(!Bj(b,C(136)))break a;d=13;break a;case -695287066:if(!Bj(b,C(137)))break a;d=22;break a;case -643550180:if(!Bj(b,C(138)))break a;d=32;break a;case -593968005:if(!Bj(b,C(139)))break a;d=24;break a;case -536831301:if(!Bj(b,C(140)))break a;d=30;break a;case -439438829:if(!Bj(b,C(141)))break a;d=23;break a;case -357667878:if(!Bj(b,C(142)))break a;d=26;break a;case -223304637:if(!Bj(b,C(143)))break a;d=4;break a;case -223304636:if(!Bj(b,C(144)))break a;d=5;break a;case -193916863:if(!Bj(b,C(145)))break a;d=27;break a;case 2129957:if
(!Bj(b,C(146)))break a;d=2;break a;case 3556498:if(!Bj(b,C(147)))break a;d=7;break a;case 66028715:if(!Bj(b,C(148)))break a;d=1;break a;case 66028716:if(!Bj(b,C(149)))break a;d=3;break a;case 91636708:if(!Bj(b,C(150)))break a;d=29;break a;case 485517998:if(!Bj(b,C(151)))break a;d=10;break a;case 544901384:if(!Bj(b,C(152)))break a;d=6;break a;case 654963552:if(!Bj(b,C(153)))break a;d=28;break a;case 1030621992:if(!Bj(b,C(154)))break a;d=18;break a;case 1164939699:if(!Bj(b,C(155)))break a;d=33;break a;case 1429773643:if
(!Bj(b,C(156)))break a;d=35;break a;case 1465713255:if(!Bj(b,C(157)))break a;d=11;break a;case 1554501643:if(!Bj(b,C(158)))break a;d=17;break a;case 1609169232:if(!Bj(b,C(159)))break a;d=14;break a;case 1726873928:if(!Bj(b,C(160)))break a;d=12;break a;case 1826008729:if(!Bj(b,C(161)))break a;d=34;break a;case 2090248989:if(!Bj(b,C(162)))break a;d=31;break a;case 2140756469:if(!Bj(b,C(163)))break a;d=25;break a;default:}}b:{switch(d){case 1:case 2:break;case 3:b=new YE;break b;case 4:b=new YD;break b;case 5:b
=new YG;break b;case 6:case 7:b=new YF;break b;case 8:b=new YK;break b;case 9:b=new YJ;break b;case 10:b=new YM;break b;case 11:b=new YL;break b;case 12:b=new YI;break b;case 13:b=new AEe;break b;case 14:b=new AEf;break b;case 15:b=new AEg;break b;case 16:b=new AEh;break b;case 17:b=new AEo;break b;case 18:b=new AEp;break b;case 19:b=new AEq;break b;case 20:b=new AEr;break b;case 21:b=new AEs;break b;case 22:b=new AEt;break b;case 23:b=new AEj;break b;case 24:b=new AEk;break b;case 25:b=new AEl;break b;case 26:b
=new AEm;break b;case 27:b=new AEn;break b;case 28:b=new AD5;break b;case 29:b=new AD6;break b;case 30:b=new AD7;break b;case 31:b=new AD8;break b;case 32:b=new AD9;break b;case 33:b=new AD2;break b;case 34:b=new AD3;break b;case 35:b=new AD4;break b;default:b=new ZP;break b;}b=new YH;}return b;}
var AJu=H();
var J9=H(0);
var AAE=H();
function AUf(a,b){return b.arrayBuffer();}
var AAD=H();
function AXW(a,b){var c,d;c=new ACc;d=new ACa;return $rt_globals.WebAssembly.instantiate(b,AVS(BC(c,"f"),BC(d,"f")));}
var AAB=H();
function AYr(a,b){ASx(b);}
var AAA=H();
function A3S(a,b){AMG(b);}
function WN(){B.call(this);this.An=null;}
function A_Z(a,b){I6(a.An.rK.dL.bP,b);}
function WP(){B.call(this);this.Er=null;}
function A6A(a,b){I6(a.Er.rK.dL.ch,b);}
var YH=H();
function A9l(a,b){return BcJ(b);}
var YE=H();
function AWW(a,b){var c;c=new Q9;AJI(c,b);return c;}
var YD=H();
function A4V(a,b){return BbN(b);}
var YG=H();
function AV3(a,b){var c,d;c=new QX;AM0(c,b);AP8(c.dA);d=AEW(CJ(c.dA.c.h));I2(c.dA,d.fL,d.fK);b=b.m.bQ;d=new W_;d.ul=c;Z(b,d);return c;}
var YF=H();
function A5s(a,b){return BbZ(b);}
var YK=H();
function A7l(a,b){var c,d,e,f,g;c=new AFH;Fo(c,b);d=(HM()).bF.fB;c.J2=d;c.mK=AQO(d);c.kl=new Bg;c.js=new Bg;c.d7=Mc();c.eM=Mc();c.oZ=Ea(1);b=b.m.b2;d=new AAj;d.nT=c;Z(b,d);b=c.oZ.data[Ei()*c.oZ.data.length|0];d=Jt(c.A.N,b,10);c.oJ=d;Cv(c.A.N.cE,d);e=EY(c.A.N.cE,C(164));d=c.A.N.cE;f=new I;K(f);Bl(f,43);G(f,b);g=Dd(e+EY(d,J(f)));c.k1=g;c.jZ=BM(c.jZ,AIX(c,1,g,b,c.oJ,c.A.N));c.jY=BM(c.jY,AIX(c,0,c.k1,b,c.oJ,c.A.N));T5(c,c.d7,c.jZ);T5(c,c.eM,c.jY);CA(c.d7.bd,1.0,1.0,1.0,1.0);Ge(c.d7,c.mK);CA(c.eM.bd,1.0,1.0,1.0,
1.0);Ge(c.eM,c.mK);b=Bi();g=c.k1;d=new I;K(d);R(G(d,C(165)),g);Bb(b,J(d));return c;}
var YJ=H();
function AZx(a,b){var c,d,e;c=new ABn;F_(c,b);d=new AAd;d.pO=new Bg;d.qj=new Bg;c.Cj=d;c.fX=AO2();c.eq=AO2();c.qD=DT(C(166),25.0);Z(c.p.dz,c);d=b.m.bQ;e=new AGd;e.xG=c;Z(d,e);Z(b.m.b2,c);b=b.m.cF;d=new AF_;d.yF=c;Z(b,d);AIZ(c.eq);BQ(c.dy,Cw(43));b=Ga();KS(c.fX,b);KS(c.eq,b);b=c.fX;b.mp=new AGa;d=c.eq;d.mp=new AGb;d.rb=new Sz;d.zS=new SA;O8(b,(UG(0)).nh);O8(c.eq,(UG(0)).nh);return c;}
var YM=H();
function A2R(a,b){var c,d,e;c=new AFl;F_(c,b);Z(c.p.dz,c);BQ(c.dy,Cw(43));d=b.m.bQ;e=new XX;e.G9=c;Z(d,e);b=b.m.cF;d=new XY;d.Fq=c;Z(b,d);return c;}
var YL=H();
function AZt(a,b){var c,d,e;c=new AAJ;AHl(c,b);c.jk=BO();c.ho=BO();c.uu=U(C(167));c.lC=Yk();c.jj=0;d=c.p.dz;e=new Rj;e.Bw=c;Z(d,e);Z(b.m.b2,c);d=b.m.bQ;e=new Ri;e.yR=c;Z(d,e);b=Jt(b.N,C(166),35);c.lJ=b;c.n5=ANE(FV(b));BQ(c.dy,U(C(168)));return c;}
var YI=H();
function A6U(a,b){var c,d,e;c=new Rw;Gs(c,b);c.fY=AMF();c.jr=G8();d=new ACl;d.Ck=c;c.uZ=d;c.xY=HM();c.i4=0;c.ou=20;c.wu=20;QG(0,c.hK);d=b.m.b2;e=new Yd;e.qF=c;Z(d,e);d=b.m.e3;e=new ACm;e.yi=c;Z(d,e);c.f1=b.N;c.Dw=JP(b.bv);ACR(c.fY,Jt(c.f1,C(166),c.wu),c.ou,c.f1.nB);L2(c.jr);return c;}
var AEe=H();
function A4Q(a,b){var c,d,e;c=new Mx;F_(c,b);c.BY=AOl();c.oc=C$(16384);d=BeS.data.length;c.l$=BI(d);c.pG=BI(d);b=b.m.cF;e=new Tj;e.vS=c;Z(b,e);b=c.p.dz;e=new Ti;e.Eq=c;Z(b,e);return c;}
var AEf=H();
function AXL(a,b){var c,d,e,f,g,h,i;c=new AA4;F_(c,b);d=b.m.cF;e=new Uu;e.Bz=c;Z(d,e);f=b.bv.eo;g=new R_;g.Ij=c;h=O(B,1);h.data[0]=C(169);EF(f,g,C(170),h);e=new R$;e.JU=c;h=O(B,1);h.data[0]=AOC([1,2,3,4,5]);EF(f,e,C(171),h);e=new R6;e.La=c;i=O(B,1);i.data[0]=Bbj([1,2,3,4,5]);EF(f,e,C(172),i);e=new R4;e.J6=c;h=O(B,1);h.data[0]=DD([1,2,3,4,5]);EF(f,e,C(173),h);d=b.m.bQ;e=new Hk;g=new Ut;g.D6=c;HI(e,b,g);Z(d,e);return c;}
var AEg=H();
function ATe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new AAm;Gs(c,b);c.fO=Je(0,0,300,300);c.hQ=Wq(0,0,3,3);d=b.N;b=b.m.b2;e=new AGl;e.oS=c;Z(b,e);b=AQV(d);c.E7=b;GL(c.fO,b);GV(c.fO);b=c.fO.bz;GG();BQ(b,BeT);BQ(c.fO.bd,DV(204,120,50));ALa();e=BeU;f=C$((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=Dc(d);switch(e.fQ){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new FR;X(b);M(b);}b:
{AAx(m,5,5,h);b=m.ey.eU;switch(e.fQ){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new FR;X(b);M(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.pB=m;Y(c.hQ.s,BX(m),C7(c.pB));BQ(c.hQ.bz,c.hK);return c;}
var AEh=H();
function A2c(a,b){var c,d,e;c=new V0;Gs(c,b);c.h_=Je(0,0,300,300);c.oe=new Bg;c.l3=new Bg;c.le=new Bg;d=b.N;b=b.m.b2;e=new ABx;e.lZ=c;Z(b,e);b=AQV(d);c.tf=b;GL(c.h_,b);GV(c.h_);b=c.h_.bz;GG();BQ(b,BeT);BQ(c.h_.bd,DV(204,120,50));return c;}
var AEo=H();
function A9R(a,b){var c,d,e,f;c=new AFc;Fo(c,b);c.IC=20;c.KY=11;c.I6=220;c.nR=new Bg;c.Kf=5000;c.jF=1;c.h1=L(Il,[Cw(0),Cw(255)]);c.fv=b.N;d=b.m.b2;e=new ACC;e.nx=c;f=new Yb;f.wg=e;e.s4=f;Z(d,e);b=b.m.e3;d=new ZB;d.tU=c;Z(b,d);b=IN(c.fv,200,220);c.qL=b;Iy(b,C(166),20.0);b=IN(c.fv,200,20);c.hT=b;Iy(b,C(166),20.0);c.jU=G8();return c;}
var AEp=H();
function A1Q(a,b){var c,d,e;c=new LD;Gs(c,b);Z(b.m.b2,c);d=b.m.bQ;e=new AH0;e.zR=c;Z(d,e);Z(b.m.hZ,new AHZ);d=b.m.hZ;e=new AHY;e.u4=c;Z(d,e);Z(b.m.iw,new AHX);d=b.m.iw;e=new AH1;e.DO=c;Z(d,e);b=!Zd(b.bv)?C(174):C(175);d=new I;K(d);G(G(d,C(176)),b);$rt_globals.console.info($rt_ustr(J(d)));return c;}
var AEq=H();
function A9N(a,b){var c,d;c=new VJ;Gs(c,b);c.xj=Cw(20);c.hx=Je(0,0,300,300);c.yV=DT(C(13),80.0);b=b.m.bQ;d=new Vl;d.II=c;Z(b,d);return c;}
var AEr=H();
function ARH(a,b){var c;c=new WH;QO(c,b);If(c.cJ,0,0,300,300);Y(c.d9,300,300);return c;}
var AEs=H();
function A4C(a,b){var c;c=new WG;QO(c,b);c.g4=new Bg;c.hy=new Bg;Y(c.e0,150,140);Y(c.d9,500,100);Y(c.ga,150,200);Y(c.fu,500,250);return c;}
var AEt=H();
function AWv(a,b){var c,d,e;c=new ZI;F_(c,b);c.GK=3;c.zo=DT(C(177),20.0);c.ls=Yk();c.sx=1;Z(c.p.dz,c);BQ(c.dy,Cw(43));d=b.m.bQ;e=new RN;e.C0=c;Z(d,e);b=b.m.cF;d=new RP;d.yO=c;Z(b,d);return c;}
var AEj=H();
function ARW(a,b){return Bcp(b);}
var AEk=H();
function A5_(a,b){var c,d,e;c=new ADI;Gs(c,b);d=new Ql;d.ex=new Bg;d.eJ=new Bg;d.iE=new Bg;d.wn=new Bg;d.f$=(-1);d.im=(-1);d.pD=1;c.dw=d;c.tG=HM();c.jn=G8();c.gZ=0;c.lK=0;c.lO=100;d=new AG9;d.sG=c;c.s2=d;c.x_=AKZ(1);c.nK=JP(b.bv);L2(c.jn);Z(b.m.b2,c);d=b.m.e3;e=new AG$;e.zd=c;Z(d,e);b=b.m.bQ;d=new AG_;d.B5=c;Z(b,d);b=AEW(c.lO);RK(c.dw,b.fL,b.fK);H1(c.dw,C$(c.lO));return c;}
var AEl=H();
function AV6(a,b){var c,d,e;c=new Xk;Gs(c,b);c.ji=G8();c.gu=MZ();c.ju=0;c.qV=5000;d=new Yi;d.wH=c;c.Dc=d;QG(0,c.hK);QG(100,c.gu.bd);Z(b.m.b2,c);d=b.m.e3;e=new Yh;e.zt=c;Z(d,e);c.iD=b.N;c.AW=JP(b.bv);L2(c.ji);return c;}
var AEm=H();
function AUG(a,b){var c,d,e,f;c=new SZ;Lm(c,b);BQ(c.dy,Cw(43));c.nS=JE(c.t);d=b.m.bQ;e=new Hk;f=new RQ;f.FH=c;HI(e,b,f);Z(d,e);b=b.m.cF;d=new RR;d.CW=c;Z(b,d);return c;}
var AEn=H();
function A3h(a,b){var c,d;c=new UL;F0(c,b,1);c.o0=Fv();Z(c.p.dz,c);BQ(c.dy,Cw(43));b=b.m.cF;d=new ABo;d.BJ=c;Z(b,d);return c;}
var AD5=H();
function ASv(a,b){var c,d,e,f;c=new T2;F0(c,b,1);c.on=Fv();Z(c.p.dz,c);BQ(c.dy,Cw(43));d=b.m.bQ;e=new Hk;f=new Sp;f.vV=c;HI(e,b,f);Z(d,e);b=b.m.cF;d=new So;d.yq=c;Z(b,d);return c;}
var AD6=H();
function A74(a,b){var c;c=new ACX;Lm(c,b);c.yY=Fv();BQ(c.dy,Cw(43));return c;}
var AD7=H();
function A0I(a,b){return Bb1(b);}
var AD8=H();
function A_G(a,b){var c,d,e;c=new R1;Lm(c,b);c.yk=Fv();BQ(c.dy,Cw(43));d=b.m.cF;e=new X3;e.G5=c;Z(d,e);b=b.m.bQ;d=new X2;d.wU=c;Z(b,d);return c;}
var AD9=H();
function A25(a,b){var c,d,e;c=new ADS;Lm(c,b);c.ra=Fv();BQ(c.dy,Cw(43));d=b.m.cF;e=new Tl;e.Ft=c;Z(d,e);b=b.m.bQ;d=new Tk;d.HG=c;Z(b,d);return c;}
var AD2=H();
function AXr(a,b){return A77(b);}
var AD3=H();
function A9$(a,b){var c;c=new AAn;F0(c,b,0);c.FL=Fv();return c;}
var AD4=H();
function A3Y(a,b){return Bb5(b);}
function JZ(){var a=this;B.call(a);a.bF=null;a.KT=null;a.cs=null;a.k_=null;a.gs=null;a.dH=null;a.gl=null;a.FY=null;a.rU=null;a.qY=null;}
function BeV(a,b,c,d,e,f){var g=new JZ();Nh(g,a,b,c,d,e,f);return g;}
function HM(){var b,c,d,e,f,g,h,i,j;b=new JZ;c=new Ln;d=new Il;GG();Mj(d,BeW);N$(c,d,B3(BeT),B3(BeX),B3(BeY),B3(BeT),B3(BeZ),B3(Be0),B3(Be1),B3(Be2),B3(Be3),B3(Be4));e=AOX(U(C(178)));f=(AO3()).data;g=f.length;h=O(LF,g);i=h.data;j=0;while(j<g){i[j]=f[j].p3;j=j+1|0;}Nh(b,c,e,h,APQ(U(C(179)),U(C(180)),U(C(181)),U(C(182))),Ga(),AJb(U(C(183)),U(C(184)),U(C(185)),U(C(186))));return b;}
function Fv(){var b,c,d,e,f,g,h,i,j;b=new JZ;c=new Ln;d=new Il;AUd();Mj(d,Be5);N$(c,d,B3(Be6),B3(Be7),B3(Be8),B3(Be6),B3(Be9),B3(Be$),B3(Be_),B3(Bfa),B3(Bfb),B3(Bfc));e=AOX(U(C(187)));f=(AKF()).data;g=f.length;h=O(LF,g);i=h.data;j=0;while(j<g){i[j]=f[j].mI;j=j+1|0;}Nh(b,c,e,h,APQ(U(C(188)),U(C(189)),U(C(190)),U(C(191))),AOl(),AJb(U(C(183)),U(C(184)),U(C(185)),U(C(192))));return b;}
function Nh(a,b,c,d,e,f,g){var h;h=d.data;a.gl=DT(C(177),17.0);a.FY=DT(C(166),15.0);a.rU=DT(C(177),15.0);a.qY=DT(C(13),15.0);a.bF=b;a.KT=c;a.k_=d;a.gs=e;if(h.length>=15){a.cs=f;a.dH=g;return;}b=new Bv;X(b);M(b);}
function AAG(a,b){if(b===null)b=a.bF.fB;return b;}
var ZP=H();
function A6b(a,b){return A77(b);}
var CS=H(0);
function AIi(){var a=this;B.call(a);a.F=null;a.bH=null;a.eZ=null;}
function Ft(a,b,c,d,e){var f,g;f=ADi(a.F);Ip(f,b,c);b=a.F;c=b.cj;g=new AHw;g.z_=b;g.z$=c;f.ln=g;Vm(f,d,e);II(a,f);}
function II(a,b){var c;c=a.eZ;if(c!==b)a.eZ=BM(c,b);}
function D_(a,b){var c;c=new AHk;c.tg=a;c.ti=b;return c;}
function OZ(a,b){var c;c=new AIt;c.BW=a;c.BX=b;return c;}
function Ek(a){var b;b=a.eZ;if(b!==null){N3(b);II(a,null);}}
function Ee(a,b){var c,d,e,f;c=a.bH;if(c.c6>0)Mo(Gj(c,0));c=a.bH;d=c.c6;e=c.dK;if(d==e.data.length)c.dK=C0(e,d+4|0);d=c.c6;f=d;while(0<f){e=c.dK.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dK.data[0]=b;c.c6=d+1|0;c.hg=null;L4(b);return b;}
function Ju(a,b){if(Qt(a)!==b?0:1)Mo(b);Vn(a.bH,b);b=a.bH;if(b.c6>0)L4(Gj(b,0));}
function K1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B7(a.bH)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.F.b8;d.bc.ej(e);if(d.bc.j.a>0){f=d.Y;g=d.hi.kB;if(!UR(f)){if(!Qa(f)&&!(!f.fs&&f.eQ!==null)){f.fs=0;AGV(f);h=f.fl;i=(h.fa+h.fr+5.0)/10.0;j=CB(f.hd,f.mi);h=e.cE;k=f.fl;l=f.k6;m=i*2.0;Cv(h,k);n=j+MX(h,l,m)|0;f.jC=n;n=FU(0,n,f.k.b);if(n){h=Ex(e,n,f.k.a,f.hd.c9);Cv(h,f.fl);k=f.k6;o=j;p=o+i;l=f.fl;i=l.fa;B4(h,k,p,o+i-(i+l.fr)/16.0);k=f.eQ;if(k===null){k=Dc(e);f.eQ=k;}C5(k,h);Fe(h);CA(f.os,0.0,0.0,BX(f.eQ),
C7(f.eQ));}}h=g.nF;k=f.eQ;if(k===null)Tc(f,e,0,f.k.b,h);else{n=BX(k);k=g.qf;g=f.j;j=g.b;q=g.a;g=f.eQ;D$(e,j,q,g.eE,f.os,g,k,h,f.hd.c9);j=f.k.b;if(n<j)Tc(f,e,n,j-n|0,h);}}f=d.d1;if(f!==null){g=d.U;l=d.Y;h=d.hi.kB;if(f.ks!==null){if(f.dZ===null)ALs(f,g);j=CB(g,2.0);n=Be(0,((l.k.a-C7(f.dZ)|0)/2|0)-j|0);f.hj.b=(((l.j.b+l.k.b|0)-n|0)-BX(f.dZ)|0)-j|0;k=f.hj;q=l.j.a+n|0;n=j/2|0;k.a=q-n|0;k=f.mc;q=BX(f.dZ);r=j*2|0;Y(k,q+r|0,C7(f.dZ)+r|0);k=g.b8;l=f.hj;Bu(k,l.b,l.a,f.mc,!f.no?h.nF:h.k4);CA(g.n_,0.0,0.0,BX(f.dZ),C7(f.dZ));k
=g.b8;l=f.hj;j=l.b+j|0;q=l.a+n|0;l=f.dZ;D$(k,j,q,l.eE,g.n_,l,h.qf,!f.no?h.nF:h.k4,0);}}}if(!ACY(d)){n=CB(d.U,2.0);j=UR(d.Y);h=d.U;k=h.dX;h=h.sg;q=j?0:d.Y.k.a;f=d.bc.k;Y(h,f.b,f.a+q|0);B2(e,1);AOe(e,h,!j?d.Y.j:d.bc.j,d.hi.kB.k4, -n|0,k);h=d.bc;APG(e,h.k,h.j,n,q,ACg(d.hi.m8,d.U.cr),d.hi.m8.p5,k);}c=c+(-1)|0;}h=a.eZ;if(h!==null)AJh(h);}
function Hu(a,b){var c,d,e,f;c=a.F;if(c.c9==b)d=0;else{c.c9=b;IB(c.b1);d=1;}if(d){c=a.eZ;if(c!==null){c=Ci(c.cD);while(Ck(c)){P2(Cl(c));}}e=(B7(a.bH)).data;b=e.length;f=0;while(f<b){c=e[f];c.Y.fs=1;c.bc.lE();f=f+1|0;}}return d;}
function A2g(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.eZ;if(c!==null){d=0;e=c.cD.r-1|0;a:{while(e>=0){d=PE(BU(c.cD,e),b.i,c.dp.cI);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}c=a.F.cI;f=(B7(a.bH)).data;d=f.length;e=0;while(e<d){b:{g=f[e];h=b.i;if(B6(g.Y,h)){i=g.d1;if(i!==null)i.no=WB(i,h);j=D1(g.U.cI,null);}else{i=g.d1;if(i!==null)i.no=0;k=CB(g.U,7.0);l=CB(g.U,25.0);if(OO(g,h.b,k)){j=AA$(g,h.b,l);if(OY(g,h.a,k)){j=D1(g.U.cI,NM(j,C(193)));break b;}if(L9(g,h.a,k)){j=D1(g.U.cI,NM( -j|0,C(193)));break b;}}if(Qd(g,h.a,k)){j
=AH6(g,h.a,l);if(QC(g,h.b,k)){j=D1(g.U.cI,NM(j,C(194)));break b;}if(On(g,h.b,k)){j=D1(g.U.cI,NM( -j|0,C(194)));break b;}}j=0;}}c:{d:{if(!j){if(!B6(g.bc,b.i))break d;if(!g.bc.gz(b,c)&&!D1(g.U.cI,null))break d;}j=1;break c;}j=0;}if(j)return 1;e=e+1|0;}return 0;}
function ASS(a,b,c,d){var e,f,g,h,i,j;e=a.eZ;if(e!==null){f=0;g=e.cD.r-1|0;a:{while(g>=0){f=P8(BU(e.cD,g),b.i,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B7(a.bH)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B6(i.Y,b.i)&&!R7(i,b.i)){if(!NS(i,b))break c;if(!i.bc.c7(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AVd(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.eZ;if(d!==null){e=null;f=d.cD.r-1|0;a:{while(f>=0){e=BU(d.cD,f);g=b.i;h=F7(e.cQ,g);if(!h&&!MG(e.cQ)){e=e.mp;if(e!==null)e.e();}e=!h?null:Bfd;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B7(a.bH);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.i;if(!c){c:{k=CB(d.U,7.0);l=CB(d.U,25.0);if(OO(d,e.b,k)){m=AA$(d,e.b,l);if(OY(d,e.a,k)){g=Lf(d,e,m,(-1));break c;}if(L9(d,e.a,k)){g=Lf(d,e,m,1);break c;}}if(Qd(d,e.a,k)){f=AH6(d,e.a,l);if(QC(d,
e.b,k)){g=Lf(d,e,(-1),f);break c;}if(On(d,e.b,k)){g=Lf(d,e,1,f);break c;}}g=null;}if(g!==null)break b;if(B6(d.Y,e)){g=d.d1;if(g!==null&&WB(g,e)){d.d1.ks.e();g=Bfd;break b;}g=d.bc.j;f=g.b;l=e.b;f=f-l|0;k=g.a;m=e.a;k=k-m|0;e=d.Y.j;l=e.b-l|0;m=e.a-m|0;e=new Bg;g=new AG8;g.Cp=d;g.Ct=l;g.Cs=m;g.Cr=e;g.Cq=f;g.Co=k;break b;}}g=null;}f=g===null&&!NS(d,b)?0:1;k=!c&&d!==Qt(a)&&f?1:0;if(k){e=a.bH;l=0;j=e.dK.data;m=j.length;d:{while(true){if(l>=m){l=(-1);break d;}if(d===j[l])break;l=l+1|0;}}if(l>0)Xq(a,l);}if(g===null&&
f)g=d.bc.co(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function Xq(a,b){var c,d,e,f,g;Mo(Gj(a.bH,0));c=a.bH;d=c.c6;if(d<=b){c=new Qe;Bd(c,Hs(b));M(c);}if(b){e=c.dK;f=e.data;g=f[b];while(b>0){f[b]=f[b-1|0];b=b+(-1)|0;}f[0]=g;f=c.hg;if(f!==null)Cm(e,0,f,0,d);}L4(Gj(a.bH,0));}
function AIQ(a){var b;b=a.bH.c6;if(b>1)Xq(a,b-1|0);}
function A_r(a,b,c){var d,e,f,g,h;d=a.eZ;if(d!==null&&Kz(d))return 1;e=(B7(a.bH)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B6(d.Y,b.i)){if(!NS(d,b))break b;if(!d.bc.dn(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A6r(a,b,c){var d,e,f,g,h;d=(B7(a.bH)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.bc;h.ek(h.j,h.k,c);h=g.Y;if(h.iU!==null){h.fl=null;h.jC=0;h.fs=1;}Jw(g);h=g.d1;if(h!==null)PF(h);f=f+1|0;}}
function Qt(a){var b;b=a.bH;return b.c6<=0?null:Gj(b,0);}
function W6(){var a=this;B.call(a);a.b8=null;a.b1=null;a.cI=null;a.bY=null;a.cr=0.0;a.c9=0;a.cj=null;a.dz=null;a.dX=null;a.sg=null;a.n_=null;a.GB=null;}
function Ma(a){var b;b=a.cj;if(b!==null)b.xD();}
function Mr(a){var b;b=a.cj;if(b!==null)b.zB();}
function OE(a,b){var c;c=a.b1.eN!==(Fa()).activeElement?0:1;if(c)Mr(a);a.cj=b;if(c)Ma(a);}
function CC(a,b){if(a.cj!==b){Mr(a);a.cj=b;Ma(a);}}
function AF2(a,b){if(a.cj===b)a.cj=null;}
function DS(a,b){return b!==a.cj?0:1;}
function Lz(a){return a.b8.cE;}
function Gf(a,b){return GE(a.b8,b.jt,b.h8*a.cr,b.lu,0);}
function CB(a,b){return BL(b,a.cr);}
function LL(a,b){var c;c=a.b8;if(!a.c9)c.r6=b;else c.qm=b;IB(a.b1);}
function A9_(a,b,c){var d;d=a.cj;return d!==null&&d.fW(b,c)?1:0;}
function A7V(a){var b;b=a.cj;return b===null?null:b.Db();}
function ZY(){B.call(this);this.y6=null;}
function A_j(a,b,c,d){var e,f,g,h;e=(B7(a.y6.bH)).data;f=e.length;g=0;a:{while(g<f){if(e[g].bc.dB(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function ZX(){B.call(this);this.wd=null;}
function ASV(a,b){var c,d,e,f;c=a.wd;b=b.i;d=0;e=c.bH.c6;a:{while(d<e){f=Gj(c.bH,d);if(!B6(f.Y,b)&&!R7(f,b)&&!AGU(f,b)?0:1){c=Gj(c.bH,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.z0;if(c!==null&&ANB(c.zL,b)?1:0){d=1;break b;}}d=0;}return d;}
function Ln(){var a=this;B.call(a);a.Gg=null;a.fB=null;a.xM=null;a.HX=null;a.vA=null;a.mw=null;a.tR=null;a.zA=null;a.nk=null;a.ne=null;a.hB=null;}
function Bfe(a,b,c,d,e,f,g,h,i,j,k){var l=new Ln();N$(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function N$(a,b,c,d,e,f,g,h,i,j,k,l){a.Gg=b;a.fB=c;a.xM=d;a.HX=e;a.vA=f;a.mw=g;a.tR=h;a.zA=i;a.nk=j;a.ne=k;a.hB=l;}
function AKG(){B.call(this);this.Kv=null;}
function AOX(a){var b=new AKG();A2d(b,a);return b;}
function A2d(a,b){a.Kv=b;}
var AJC=H(0);
function ANh(){var a=this;B.call(a);a.mX=null;a.kw=null;a.A5=null;a.og=null;}
function APQ(a,b,c,d){var e=new ANh();A_9(e,a,b,c,d);return e;}
function A_9(a,b,c,d,e){a.mX=b;a.kw=c;a.A5=d;a.og=e;}
var AK8=H(0);
function Ga(){var b,c,d;b=new J1;c=new J$;A7k();d=Bff;QF(c,d,Bfg,Bfh,Bfi,Bfj,d);Nw(b,c,AMC(),AML(U(C(195)),U(C(196)),U(C(197))),AMC(),ANa(1,0.125),Bfk,Bfl);return b;}
function AOl(){var b,c,d;b=new J1;c=new J$;A2p();d=Bfm;QF(c,d,Bfn,Bfo,Bfp,Bfq,d);Nw(b,c,AMg(),AML(U(C(198)),U(C(196)),U(C(197))),AMg(),ANa(1,0.17499999701976776),Bfr,Bfs);return b;}
function AMC(){var b,c;b=new LC;c=U(C(199));A7k();MA(b,c,Bft,Bfu);return b;}
function AMg(){var b,c;b=new LC;c=U(C(197));A2p();MA(b,c,Bfv,Bfw);return b;}
function AQG(){var b,c;b=new LC;AL8();c=Bfx;A2z();MA(b,c,Bfy,Bfz);return b;}
function AMZ(){var a=this;B.call(a);a.C8=null;a.zJ=null;a.x0=null;a.sV=null;}
function AJb(a,b,c,d){var e=new AMZ();A2U(e,a,b,c,d);return e;}
function A2U(a,b,c,d,e){a.C8=b;a.zJ=c;a.x0=d;a.sV=e;}
function AI0(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dH.zJ;break a;case 3:if(c!=3){b=b.dH.sV;break a;}b=b.dH.x0;break a;default:b=b.bF.fB;break a;}b=b.dH.C8;}return b;}
function GC(a,b,c){return AI0(a,b,0,c);}
var AJD=H(0);
function QG(b,c){return Mn(b,b,b,255,c);}
function AN$(b,c,d){return Mn(b,c,d,255,new B_);}
function Mn(b,c,d,e,f){CA(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function YX(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AUN(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bx=g+i;e.bC=h+i;e.bm=j+i;return e;}
function Jz(b,c,d,e,f){f=YX(b,c,d,f);f.bR=e;return f;}
function I0(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var AEN=H();
function AX5(a,b){var c,d;a:{if(AFQ(b)){c=b.bh;if(!(c!=67&&c!=88&&c!=86&&c!=45)){c=1;break a;}}c=b.b_&&!b.c2&&!b.dV&&!b.jW?1:0;c=c&&b.bh==46?1:0;}b:{if(!c){d=b.bh;if(!(d!=122&&d!=123&&d!=116?0:1))break b;}b.mL=1;}return 0;}
function AEM(){B.call(this);this.AQ=null;}
function A1O(a,b){var c;c=a.AQ.cj;return c!==null&&c.bs(b)?1:0;}
function Xf(){var a=this;B.call(a);a.U=null;a.z0=null;a.jT=null;a.jO=null;a.Y=null;a.d1=null;a.bc=null;a.hi=null;a.jh=0;}
function AJg(a){var b=new Xf();AYg(b,a);return b;}
function A_M(a,b){var c=new Xf();AKj(c,a,b);return c;}
function AYg(a,b){AKj(a,b,A1T());}
function AKj(a,b,c){var d;a.U=b;d=new XU;FP(d);d.os=new B_;d.hd=b;a.Y=d;a.bc=c;}
function WO(a,b){var c,d;if(a.d1===null){c=new Td;c.hj=new Bg;c.mc=new Bg;a.d1=c;d=a.hi;if(d!==null)AE9(c,d);}a.d1.ks=b;}
function L4(a){var b;b=a.jT;if(b!==null)b.e();}
function Mo(a){var b;b=a.jO;if(b!==null)b.e();}
function C2(a,b){var c;c=a.Y;c.fs=c.fs|(BW(c.k6,b)?0:1);c.k6=b;Jw(a);}
function AE$(a,b,c){var d,e,f;d=a.Y;e=BW(d.iU,b)?0:1;f=c===d.mi?0:1;if(e){d.iU=b;d.fl=null;S7(d,0);}d.fs=d.fs|(!e&&!f?0:1);d.mi=c;d.jC=0;Jw(a);}
function EP(a,b){var c;a.hi=b;c=b.pi;BH(b);AE$(a,c,3.0);c=a.d1;if(c!==null)AE9(c,b);}
function K_(a){var b;b=a.Y;b.eQ=BM(b.eQ,null);b.fl=null;a.bc=BM(a.bc,null);b=a.d1;if(b!==null){PF(b);b.ks=null;}}
function ME(a,b){var c,d,e;c=a.bc;d=c.j;e=c.k;b=BM(c,b);a.bc=b;b.ek(d,e,a.U.cr);}
function Ew(a,b,c){a.bc.ek(b,c,a.U.cr);Jw(a);}
function Jw(a){var b,c,d;if(a.U.cr!==0.0){b=a.Y;if(b.iU!==null){c=a.bc.k.b;b.k.b=c;d=b.eQ;if(d!==null&&c!=BX(d)&&!(c>=b.jC&&BX(b.eQ)>=b.jC))b.fs=1;b=a.Y;b.by=a.U.cr;if(Qa(b))c=0;else{b=a.Y;S7(b,Za(b));c=b.k.a;}b=a.Y.j;d=a.bc.j;Y(b,d.b,d.a-c|0);b=a.d1;if(b!==null)CF(b.hj,a.Y.j);return;}}}
function AHd(a){return Za(a.Y);}
function NS(a,b){return AGU(a,b.i);}
function AGU(a,b){var c;c=!(a.jh&1)?0:1;return !c&&!B6(a.bc,b)?0:1;}
function NM(b,c){if(b<0)c=C(200);else if(b>0)c=C(201);return c;}
function QC(a,b,c){var d;d=a.Y.j.b;return (d-c|0)<=b&&b<d?1:0;}
function On(a,b,c){var d,e;d=a.Y;e=d.j.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OY(a,b,c){var d;d=a.Y.j.a;return (d-c|0)<=b&&b<d?1:0;}
function L9(a,b,c){var d,e;d=a.bc;e=d.j.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Qd(a,b,c){var d,e,f;d=a.Y.j.a-c|0;e=a.bc;f=(e.j.a+e.k.a|0)+c|0;return d<=b&&b<f?1:0;}
function AH6(a,b,c){var d,e;d=a.Y.j.a+c|0;e=a.bc;return AOD(b,d,(e.j.a+e.k.a|0)-c|0);}
function OO(a,b,c){var d,e,f;d=a.Y;e=d.j.b;f=e-c|0;e=(e+d.k.b|0)+c|0;return f<=b&&b<e?1:0;}
function AA$(a,b,c){var d,e;d=a.Y;e=d.j.b;return AOD(b,e+c|0,(e+d.k.b|0)-c|0);}
function AOD(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BS(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function R7(a,b){var c;a:{b:{c:{c=CB(a.U,7.0);if(OO(a,b.b,c)){if(OY(a,b.a,c))break c;if(L9(a,b.a,c))break c;}if(!Qd(a,b.a,c))break b;if(!QC(a,b.b,c)&&!On(a,b.b,c))break b;}c=1;break a;}c=0;}return c;}
function Lf(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.b;h=b.a;b=a.bc;i=b.j;j=i.b;k=i.a;b=b.k;l=b.b;m=b.a;b=new AIc;b.vv=a;b.vw=e;b.vx=f;b.vy=c;b.vF=g;b.vG=j;b.vH=l;b.vI=d;b.vD=h;b.vE=k;b.Gz=m;return b;}
function OC(a){var b;b=a.d1;if(b!==null){b.ks.e();return;}b=new EU;X(b);M(b);}
function ACY(a){return !(a.jh&2)?0:1;}
function AC_(a){a.jh=a.jh|2;AAc(a);}
function AAc(a){var b,c;b=a.U;c=b.bY;Y(b.dX,0,0);Ew(a,a.U.dX,c);}
function B_(){var a=this;B.call(a);a.bx=0.0;a.bC=0.0;a.bm=0.0;a.bR=0.0;}
function AIA(a,b,c,d){var e=new B_();A9e(e,a,b,c,d);return e;}
function AQO(a){var b=new B_();APJ(b,a);return b;}
function A9e(a,b,c,d,e){a.bx=b;a.bC=c;a.bm=d;a.bR=e;}
function CA(a,b,c,d,e){a.bx=b;a.bC=c;a.bm=d;a.bR=e;}
function APJ(a,b){a.bx=b.bx;a.bC=b.bC;a.bm=b.bm;a.bR=b.bR;}
function BQ(a,b){a.bx=b.bx;a.bC=b.bC;a.bm=b.bm;a.bR=b.bR;return a;}
function A1v(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BD(a)===BD(b)){b=b;if(b.bx===a.bx&&b.bC===a.bC&&b.bm===a.bm&&b.bR===a.bR?1:0){c=1;break a;}}c=0;}return c;}
function AST(a){var b,c,d,e,f;b=a.bx;c=a.bC;d=a.bm;e=a.bR;f=new I;K(f);Dw(G(Dw(G(Dw(G(Dw(G(f,C(72)),b),C(73)),c),C(202)),d),C(203)),e);return J(f);}
function Il(){var a=this;B_.call(a);a.iF=0;a.iI=0;a.iG=0;a.iH=0;}
function Cw(a){var b=new Il();A1l(b,a);return b;}
function DV(a,b,c){var d=new Il();A4r(d,a,b,c);return d;}
function U(a){var b=new Il();A9W(b,a);return b;}
function FJ(a,b,c,d){var e=new Il();Us(e,a,b,c,d);return e;}
function B3(a){var b=new Il();Mj(b,a);return b;}
function A1l(a,b){Us(a,b,b,b,255);}
function A4r(a,b,c,d){Us(a,b,c,d,255);}
function A9W(a,b){if(!(N(b)!=4&&N(b)!=7&&N(b)!=9)&&P(b,0)==35){if(N(b)==4){a.iF=LE(P(b,1))*17|0;a.iI=LE(P(b,2))*17|0;a.iG=LE(P(b,3))*17|0;a.iH=255;}else{a.iF=Nu(P(b,1),P(b,2));a.iI=Nu(P(b,3),P(b,4));a.iG=Nu(P(b,5),P(b,6));a.iH=N(b)!=9?255:Nu(P(b,7),P(b,8));}Mn(a.iF,a.iI,a.iG,a.iH,a);return;}}
function Us(a,b,c,d,e){a.iF=b;a.iI=c;a.iG=d;a.iH=e;Mn(b,c,d,e,a);}
function Mj(a,b){a.iF=b.iF;a.iI=b.iI;a.iG=b.iG;a.iH=b.iH;BQ(a,b);}
function LE(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Nu(b,c){return (16*LE(b)|0)+LE(c)|0;}
var DL=H(0);
var Be5=null;var BfA=null;var Be7=null;var Be6=null;var Be9=null;var Be8=null;var Be_=null;var Be$=null;var Bfb=null;var Bfa=null;var Bfc=null;function AUd(){AUd=Bn(DL);AZS();}
function AZS(){Be5=Cw(206);BfA=U(C(204));Be7=U(C(205));Be6=U(C(189));Be9=U(C(206));Be8=U(C(178));Be_=U(C(207));Be$=U(C(208));Bfb=FJ(107,106,107,128);Bfa=FJ(30,31,34,0);Bfc=U(C(191));}
function Cx(){Cu.call(this);this.mI=null;}
var BfB=null;var BfC=null;var BfD=null;var BfE=null;var BfF=null;var BfG=null;var BfH=null;var BfI=null;var BfJ=null;var BfK=null;var BfL=null;var BfM=null;var BfN=null;var BfO=null;var BfP=null;var BfQ=null;function Xr(){Xr=Bn(Cx);A6O();}
function Em(a,b,c){var d=new Cx();AEJ(d,a,b,c);return d;}
function Bct(a,b,c,d){var e=new Cx();AH$(e,a,b,c,d);return e;}
function AKF(){Xr();return BfQ.dN();}
function AEJ(a,b,c,d){Xr();Ds(a,b,c);a.mI=KV(d,null);}
function AH$(a,b,c,d,e){Xr();Ds(a,b,c);a.mI=KV(d,e);}
function A6O(){var b,c;b=new Cx;AUd();AEJ(b,C(209),0,BfA);BfB=b;BfC=Em(C(210),1,U(C(211)));BfD=Em(C(212),2,U(C(213)));BfE=Em(C(214),3,U(C(215)));BfF=Em(C(216),4,BfA);BfG=Em(C(217),5,U(C(218)));BfH=Em(C(219),6,U(C(220)));BfI=Em(C(221),7,U(C(222)));BfJ=Em(C(223),8,U(C(224)));c=new Cx;GG();AH$(c,C(225),9,BfR,U(C(207)));BfK=c;BfL=Bct(C(226),10,BfR,U(C(198)));BfM=Em(C(227),11,U(C(228)));BfN=Em(C(229),12,U(C(230)));BfO=Em(C(231),13,BfA);b=Em(C(232),14,U(C(233)));BfP=b;BfQ=L(Cx,[BfB,BfC,BfD,BfE,BfF,BfG,BfH,BfI,BfJ,
BfK,BfL,BfM,BfN,BfO,b]);}
function LF(){var a=this;B.call(a);a.ih=null;a.oB=null;}
function KV(a,b){var c=new LF();A7o(c,a,b);return c;}
function A7o(a,b,c){a.ih=b;a.oB=c;}
function J1(){var a=this;B.call(a);a.m8=null;a.pi=null;a.qJ=null;a.Je=3;a.kB=null;a.FX=null;a.KZ=null;a.rf=null;a.oM=null;a.qU=null;}
function BfS(a,b,c,d,e,f,g){var h=new J1();Nw(h,a,b,c,d,e,f,g);return h;}
function Nw(a,b,c,d,e,f,g,h){a.pi=DT(C(177),16.0);a.qJ=DT(C(13),16.0);a.Je=3;a.FX=b;a.KZ=c;a.kB=d;a.rf=e;a.m8=f;a.oM=g;a.qU=h;}
function APe(){var a=this;B.call(a);a.p5=null;a.v0=0;}
function ANa(a,b){var c=new APe();A9U(c,a,b);return c;}
function A9U(a,b,c){var d;d=new B_;a.p5=d;a.v0=b;d.bR=c;}
function ACg(a,b){return BL(a.v0,b);}
var Eh=H(0);
var Bfp=null;var Bfq=null;var Bfm=null;var Bfn=null;var Bfo=null;var Bfv=null;var Bfw=null;var Bfr=null;var Bfs=null;function A2p(){A2p=Bn(Eh);A8s();}
function A8s(){Bfp=U(C(178));Bfq=U(C(234));Bfm=U(C(197));Bfn=U(C(220));Bfo=U(C(204));Bfv=U(C(178));Bfw=U(C(235));Bfr=U(C(236));Bfs=DV(43,45,48);}
function AOf(){var a=this;B.call(a);a.jt=null;a.h8=0.0;a.lu=0;a.lN=0;}
function DT(a,b){var c=new AOf();AYh(c,a,b);return c;}
function AYh(a,b,c){a.jt=b;a.h8=c;a.lu=400;a.lN=700;}
function A9O(a,b){if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){b=b;return a.h8===b.h8&&a.lu==b.lu&&a.lN==b.lN&&BW(a.jt,b.jt)?1:0;}return 0;}
var QM=H(0);
function FX(a){return D1(a,null);}
function JP(b){var c;c=new AEH;c.yE=b;return c;}
function AC9(){B.call(this);this.ww=null;}
function A5Q(a){Ma(a.ww);}
function AC8(){B.call(this);this.ze=null;}
function A17(a){Mr(a.ze);}
function J$(){var a=this;B.call(a);a.xb=null;a.tm=null;a.t3=null;a.EK=null;a.vn=null;a.mP=null;}
function BfT(a,b,c,d,e,f){var g=new J$();QF(g,a,b,c,d,e,f);return g;}
function QF(a,b,c,d,e,f,g){a.xb=b;a.tm=c;a.t3=d;a.EK=e;a.vn=f;a.mP=g;}
function LC(){var a=this;B.call(a);a.ud=null;a.r1=null;a.xV=null;}
function BfU(a,b,c){var d=new LC();MA(d,a,b,c);return d;}
function MA(a,b,c,d){a.ud=b;a.r1=c;a.xV=d;}
function YT(a,b){return !b?a.r1:a.xV;}
function ANQ(){var a=this;B.call(a);a.k4=null;a.nF=null;a.qf=null;}
function AML(a,b,c){var d=new ANQ();A$3(d,a,b,c);return d;}
function A$3(a,b,c,d){a.k4=b;a.nF=c;a.qf=d;}
function AEH(){B.call(this);this.yE=null;}
function D1(a,b){AEx(a.yE,b);return 1;}
var DE=H(0);
var BeW=null;var BfR=null;var BeX=null;var BeT=null;var BeZ=null;var BeY=null;var Be1=null;var Be0=null;var Be3=null;var Be2=null;var Be4=null;function GG(){GG=Bn(DE);A1A();}
function A1A(){BeW=Cw(187);BfR=U(C(237));BeX=Cw(55);BeT=Cw(43);BeZ=DV(33,66,131);BeY=DV(60,63,65);Be1=U(C(238));Be0=U(C(239));Be3=FJ(85,85,85,128);Be2=FJ(43,43,43,0);Be4=U(C(182));}
function EZ(){var a=this;B.call(a);a.P=null;a.il=null;a.hm=null;}
function Ll(a,b,c,d){a.P=b;a.hm=c;a.il=d;}
function LX(a,b,c){return WE(a,b,IG(BD(a)),c);}
function WE(a,b,c,d){var e,f,g,h,i,j,k;e=A_M(a.P.F,b);EP(e,a.hm.cs);C2(e,c);b=new AAb;b.y3=a;b.y4=e;WO(e,b);b=new AAa;b.zL=a;e.z0=b;b=e.U.bY;f=AHd(e);g=CB(e.U,5.0);h=CB(e.U,d);i=h?h+f|0:0;c=BP(g+h|0,(g+i|0)+f|0);j=new Bg;k=b.b;g=g*2|0;Tf(j,(k-g|0)-h|0,((b.a-f|0)-g|0)-i|0);Ew(e,c,j);return e;}
function ANB(a,b){var c,d,e;c=a.n3(b);if(c!==null){d=a.P;e=a.hm;Ft(d,e.cs,e.gl,b,c);}return c===null?0:1;}
var F2=H(0);
function A7W(a){}
function AUo(a){}
function ARh(a,b,c){return 0;}
function A1N(a){return null;}
function KG(){var a=this;EZ.call(a);a.dL=null;a.gt=null;a.z1=null;a.pq=null;a.Dz=null;}
function BfV(a,b,c){var d=new KG();Nk(d,a,b,c);return d;}
function Nk(a,b,c,d){var e,f,g,h,i;Ll(a,b,c,d);b=new X8;c=a.P;Sn(b,c.F);d=JE(c);b.ip=d;b.bP=Hz(d);c=Hz(b.ip);b.ch=c;Qb(b.fp,b.bP,c);d=new Q4;d.wO=b;e=new Q3;e.CF=b;c=b.bP;c.jJ=d;c.kf=e;f=new Q6;f.Fc=b;c.kb=f;J0(c,0);b.bP.b6=1;c=b.ch;c.jJ=d;c.kf=e;d=new Q5;d.Ef=b;c.kb=d;J0(c,0);b.wN=AMw(b.bP,b.ch);Od(b,L(CN,[b.bP,b.ch,b.fp]));c=ACs(0);d=ACs(0);e=D3(0,1,0,1,0);f=new ND;g=O(E8,1);g.data[0]=c;h=O(E8,1);h.data[0]=d;i=O(G$,1);i.data[0]=e;VZ(f,g,h,i);Og(b,f);a.dL=b;AC6(b,a.hm);b=LX(a,a.dL,30.0);a.gt=b;c=new ZH;c.x2
=a;b.jT=c;c=new ZG;c.xg=a;b.jO=c;Ee(a.P,b);b=a.dL;b.bP.mZ=a;b.ch.mZ=a;CC(a.P.F,a);}
function AB5(a,b){var c;c=a.dL;return c.bP!==b&&c.ch!==b&&a!==b?0:1;}
function A9L(a,b){EP(a.gt,b.cs);AC6(a.dL,b);}
function ON(a,b,c){var d,e;d=!c?a.dL.ch:a.dL.bP;e=new U4;e.Dj=a;e.Di=b;e.Dh=c;GM(d,b,e);}
function A$Z(a){if(AB5(a,a.P.F.cj))CC(a.P.F,null);a.gt=null;a.dL=null;}
function A20(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.dL;d=c.bP;c=c.ch;e=B6(d,b);f=B6(c,b);if(!e&&!f)return CT(L(Bw,[OJ(a,1,C(240)),OJ(a,0,C(241))]));g=!e?C(241):C(240);if(e)c=d;d=OJ(a,e,g);h=a.dL;i=h.ip;j=a.il;k=new S0;g=h.bP;h=h.ch;l=i.cl.F;k.nw=g;k.nv=h;k.BF=l;g=a.P;BH(g);h=new Tt;h.BA=g;return OV(Kg(i,c,j,a,k,h),b,d);}
function OJ(a,b,c){var d,e;d=new Bw;e=new WW;e.Fz=a;e.Fy=b;B8(d,e,c);return d;}
function ACH(a,b){var c,d,e;c=a.P;d=c.F.b1;e=new Rx;e.uk=a;e.uj=b;FQ(d,OZ(c,e));}
function A$1(a,b){var c,d;if(!AG1(b)){if(b.bh!=27)return 0;if(!ADh(b))AIQ(a.P);else OC(a.gt);return 1;}c=a.P.F.cj;b=a.dL;d=b.bP;if(!(d!==c&&b.ch!==c))ACH(a,d!==c?0:1);return 1;}
function AEV(){B.call(this);this.DV=null;}
function A4L(a){return a.DV.ir();}
var AKn=H();
function AHW(){var a=this;B.call(a);a.xC=null;a.EY=null;a.D8=null;}
var Q$=H();
function A1k(a,b){return b.text();}
function Ra(){var a=this;B.call(a);a.wC=null;a.wB=null;}
function A0D(a,b){var c,d,e,f;c=a.wC;d=a.wB;e=b.length;f=new RH;f.ET=b;c.g(AT7((AQa(e,f)).jE,AGG(d)));}
var Q_=H();
function A2T(a,b){AMG(b);}
function CN(){var a=this;B.call(a);a.j=null;a.k=null;a.by=0.0;}
function A1T(){var a=new CN();FP(a);return a;}
function FP(a){a.j=new Bg;a.k=new Bg;}
function AY1(a){}
function A7U(a){return BP(0,0);}
function K0(a,b,c,d){var e;if(!K$(a.j,b)){a.t1(b);CF(a.j,b);}if(!K$(a.k,c)){a.q4(c);CF(a.k,c);}e=a.by;if(e!==d){a.by=d;a.m9(e,d);}}
function DW(a,b){return BL(b,a.by);}
function B6(a,b){return Gm(b,a.j,a.k);}
function AQI(a,b){var c,d,e,f;c=a.j;d=c.b;e=c.a;f=a.k;AVg();Bu(b,d,e,f,BfW);}
function AG0(a,b){var c;c=a.j;Nv(b,c.b,c.a,a.k);}
function A3I(a,b){return 0;}
function AWt(a,b){}
function A0Y(a,b){}
function A9i(a,b,c){}
function A07(a){}
function AVa(a,b,c,d){return 0;}
function ASJ(a,b,c){return null;}
function AXk(a,b,c){return 0;}
function A$l(a,b,c){return 0;}
function A89(a,b,c,d){return 0;}
function I3(){CN.call(this);this.cK=null;}
function Od(a,b){var c;if(a.cK===null){a.cK=b;return;}c=new Ed;X(c);M(c);}
function A7R(a){var b,c,d;b=a.cK.data;c=b.length;d=0;while(d<c){b[d].b7();d=d+1|0;}}
function AXg(a,b){var c,d,e;c=a.cK.data;d=c.length;e=0;while(e<d){c[e].ej(b);e=e+1|0;}}
function A2C(a,b){var c,d,e,f;c=0;d=a.cK.data;e=d.length;f=0;while(f<e){c=c|d[f].cU(b);f=f+1|0;}return c;}
function ATw(a,b,c,d){K0(a,b,c,d);a.Gb();}
function A$Y(a,b,c,d){var e,f,g,h,i;e=0;f=a.cK.data;g=f.length;h=0;while(h<g){i=f[h];if(B6(i,b.i))e=e|i.c7(b,c,d);h=h+1|0;}return e;}
function A0a(a,b,c){var d,e,f,g,h;d=a.cK.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B6(g,b.i)){h=g.co(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A$$(a,b,c){var d,e,f,g,h;d=0;e=a.cK.data;f=e.length;g=0;while(g<f){h=e[g];if(B6(h,b.i))d=d|h.dn(b,c);g=g+1|0;}return d;}
function A6C(a,b,c){var d,e,f,g,h;d=0;e=a.cK.data;f=e.length;g=0;while(g<f){h=e[g];if(B6(h,b.i))d=d|h.gz(b,c);g=g+1|0;}return d;}
function AUa(a,b,c,d){var e,f,g,h,i;e=0;f=a.cK.data;g=f.length;h=0;while(h<g){i=f[h];if(B6(i,b.i))e=e|i.dB(b,c,d);h=h+1|0;}return e;}
function A_n(a){var b,c,d;b=a.cK.data;c=b.length;d=0;while(d<c){b[d].lE();d=d+1|0;}}
function Jm(){I3.call(this);this.fp=null;}
function Sn(a,b){FP(a);a.fp=A3C(b);}
function AWl(a){var b,c,d,e;b=BL(20.0,a.by);c=(a.k.b-b|0)/2|0;d=APn(a.j);e=BP(c,a.k.a);a.cK.data[0].ek(d,e,a.by);d.b=(a.j.b+a.k.b|0)-c|0;a.cK.data[1].ek(d,e,a.by);e.b=(a.k.b-c|0)-c|0;d.b=a.j.b+c|0;a.cK.data[2].ek(d,e,a.by);}
function X8(){var a=this;Jm.call(a);a.ip=null;a.bP=null;a.ch=null;a.wN=null;a.d5=null;a.lb=0;}
function Zf(a,b,c,d){var e,f;e=c.iN^d;f=b!==a.bP?0:1;if(!e){b=a.d5;if(b!==null)AIU(b,c.di,Lt(c),f);}else{b=a.d5;if(b!==null)XH(b,c.di,Lt(c),f);}}
function AC6(a,b){GN(a.ip,b);a.fp.jD=b;FD(a.bP,b);FD(a.ch,b);}
function Og(a,b){var c,d,e;a.d5=b;IE(a.bP,b.fT);IE(a.ch,a.d5.fU);c=a.wN;d=a.d5;c.h6=d;a.fp.fe=d;c=new ZQ;c.Ax=a;e=(APc(b,c)).data;c=e[0];d=e[1];I2(a.bP,c.fL,c.fK);I2(a.ch,d.fL,d.fK);}
function RI(a){var b,c,d;b=a.bP.c.h;c=a.ch.c.h;d=new Y5;d.A7=a;ANG(b,c,d,a.ip.cl.F.b1.eo);}
function ZH(){B.call(this);this.x2=null;}
function A56(a){var b;b=a.x2;CC(b.P.F,b.Dz);}
function ZG(){B.call(this);this.xg=null;}
function AWq(a){var b,c;b=a.xg;c=b.P.F.cj;if(!AB5(b,c))c=null;b.Dz=c;}
var KO=H(0);
var Fr=H(0);
function LQ(){var a=this;Ca.call(a);a.I=null;a.M=null;a.ko=null;a.j8=0;a.iy=null;a.ol=null;a.vi=null;a.p2=null;a.gW=null;}
function BcJ(a){var b=new LQ();AJI(b,a);return b;}
function AJI(a,b){var c,d,e;F0(a,b,0);a.gW=A3C(a.p);c=JE(a.t);a.ko=c;a.I=Hz(c);c=Hz(a.ko);a.M=c;a.ol=AMw(a.I,c);c=a.I;c.b6=1;Qb(a.gW,c,a.M);c=a.I;d=new TV;d.tN=a;c.jJ=d;d=new TS;d.wh=a;c.kf=d;d=new TT;d.Ch=a;c.kb=d;c=a.M;d=new TM;d.EV=a;c.jJ=d;d=new TN;d.DW=a;c.kf=d;d=new TK;d.v4=a;c.kb=d;AOU(a,0);OE(a.p,a.I);Z(b.m.e3,a);Z(b.m.b2,a);c=b.m.bQ;d=new TL;d.yH=a;Z(c,d);c=b.m.bQ;d=new Hk;e=new TH;e.xP=a;HI(d,b,e);Z(c,d);Z(b.m.hZ,a);Z(b.m.iw,a);b=b.m.cF;c=new TI;c.z9=a;Z(b,c);Kw(a);}
function H_(a,b){if(a.I===b)a.j8=a.j8|1;if(a.M===b)a.j8=a.j8|2;if((a.j8&3)==3)WS(a);}
function A5E(a,b,c,d){H_(a,b);}
function AOU(a,b){J0(a.I,b);J0(a.M,b);}
function A04(a,b,c){if(DS(a.p,a.I))return Kd(a.I,b,c);if(!DS(a.p,a.M))return 0;return Kd(a.M,b,c);}
function AQo(a){if(DS(a.p,a.I))return XZ(a,a.I);if(!DS(a.p,a.M))return null;return XZ(a,a.M);}
function XZ(a,b){var c;c=new XS;c.Dx=b;return c;}
function AOj(a,b,c){var d;d=E4(c);if(b!==a.I)a.p2=d;else a.vi=d;b=a.vi;if(b!==null&&a.p2!==null)Hd(a.A.bv,E4(c));else{if(b!==null)Hd(a.A.bv,b);b=a.p2;if(b!==null)Hd(a.A.bv,b);}}
function WS(a){var b,c,d;b=a.I.c.h;c=a.M.c.h;d=new Ts;d.B2=a;ANG(b,c,d,a.A.bv.eo);}
function AL5(a,b){var c;a.iy=b;IE(a.I,b.fT);IE(a.M,a.iy.fU);b=a.ol;c=a.iy;b.h6=c;a.gW.fe=c;}
function AXp(a,b){var c;c=Sl(a,b);return M9(a.I,b)|M9(a.M,b)|c;}
function ARj(a){var b;IC(a);Jr(a.I);Jr(a.M);b=a.gW;ALG(b,b.jX.b8);K1(a.t);}
function UM(a){return Ea(0);}
function AVr(a){KA(a.I);KA(a.M);}
function AVq(a){LK(a.I);LK(a.M);}
function Baq(a,b){JB(a.I,b);JB(a.M,b);}
function A6k(a,b){LL(a.p,b);}
function ARl(a,b){if(Hu(a.t,b)){Ny(a.I);Ny(a.M);}}
function ARz(a,b,c){GR(a,b,c);ALj(a,b,c);}
function ALj(a,b,c){var d,e,f,g,h,i;d=new Bg;e=BL(20.0,c);f=new Bg;g=b.b/2|0;h=e/2|0;Tf(f,g-h|0,b.a);N7(a.I,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;N7(a.M,d,f,c);Y(a.gW.j,f.b,d.a);Y(a.gW.k,d.b-f.b|0,f.a);}
function A1i(a,b){BH(b);GN(a.ko,b);FD(a.I,b);FD(a.M,b);a.gW.jD=b;}
function ANw(a,b){if(b.bh!=121)return 0;WU(a.A.bv,C(242),new AFA);return 1;}
function AN0(a,b){var c,d,e,f;if(DS(a.p,a.I)){c=a.ko;d=b.i;e=a.I;f=new TY;f.Cd=a;JI(c,d,e,a,a,a,f);}if(DS(a.p,a.M)){c=a.ko;b=b.i;d=a.M;e=new T1;e.DY=a;JI(c,b,d,a,a,a,e);}return 1;}
function A3y(a,b){var c,d,e;c=a.p.cI;d=B6(a.I,b.i)&&My(a.I,b,c)?1:0;e=B6(a.M,b.i)&&My(a.M,b,c)?1:0;return !d&&!e?0:1;}
function AYV(a,b,c,d){var e,f;e=B6(a.I,b.i)&&Rh(a.I,b,c,d)?1:0;f=B6(a.M,b.i)&&Rh(a.M,b,c,d)?1:0;return !e&&!f?0:1;}
function AVC(a,b,c){var d,e,f,g,h,i,j,k;d=B6(a.I,b.i);e=B6(a.M,b.i);f=a.p;g=f.cj;h=g!==null?0:1;i=a.I;j=g!==i?0:1;k=g!==a.M?0:1;if(d&&!(!h&&!k))CC(f,i);if(e&&!(!h&&!j))CC(a.p,a.M);if(d){i=Z$(a.I,b,c);if(i!==null)return i;}return !e?null:Z$(a.M,b,c);}
function A_u(a,b,c){var d,e,f,g;d=B6(a.I,b.i);e=B6(a.M,b.i);f=d&&Wm(a.I,b,c)?1:0;g=e&&Wm(a.M,b,c)?1:0;return !f&&!g?0:1;}
function AWb(a,b,c,d){var e,f,g,h;e=B6(a.I,b.i);f=B6(a.M,b.i);g=e&&Ns(a.I,b,c,d)?1:0;h=f&&Ns(a.M,b,c,d)?1:0;return !g&&!h?0:1;}
function Uv(a,b,c,d){var e,f;e=c.iN^d;f=b!==a.I?0:1;if(!e){b=a.iy;if(b!==null)AIU(b,c.di,Lt(c),f);}else{b=a.iy;if(b!==null)XH(b,c.di,Lt(c),f);}}
function A_o(a){return AQo(a);}
var Q9=H(LQ);
function AUX(a,b){var c,d,e;AL5(a,b);c=new AGg;c.zG=a;d=(APc(b,c)).data;c=d[0];e=d[1];I2(a.I,c.fL,c.fK);I2(a.M,e.fL,e.fK);}
function LM(){var a=this;Ca.call(a);a.dA=null;a.p1=null;}
function BbN(a){var b=new LM();AM0(b,a);return b;}
function AM0(a,b){var c,d,e,f;F0(a,b,0);c=JE(a.t);a.p1=c;d=Hz(c);a.dA=d;OE(a.p,d);c=b.m.bQ;d=new Hk;e=new ACB;e.t_=a;HI(d,b,e);Z(c,d);c=a.dA;d=b.m;f=new AGP;f.zy=c;Z(d.b2,c);Z(d.e3,f);b=b.m.cF;c=new ACA;c.FM=a;Z(b,c);Kw(a);}
function AOL(a,b){var c,d;c=a.dA;d=new AGf;d.x6=a;d.x7=b;GM(c,b,d);}
function A5Y(a,b){if(Hu(a.t,b))Ny(a.dA);}
function A$d(a,b){var c;c=Sl(a,b);return M9(a.dA,b)|c;}
function AUV(a){IC(a);Jr(a.dA);K1(a.t);}
function A_P(a){return Ea(0);}
function ARi(a,b,c){var d;GR(a,b,c);d=a.dA;N7(d,d.j,b,c);}
function A4F(a,b){BH(b);GN(a.p1,b);FD(a.dA,b);}
function AJA(a,b){var c,d,e;if(DS(a.p,a.dA)){c=a.p1;b=b.i;d=a.dA;e=new UP;e.xi=a;JI(c,b,d,a,d,a,e);}return 1;}
var QX=H(LM);
function A3A(a){return Ea(1);}
function ANo(){var a=this;CR.call(a);a.Cu=null;a.q9=null;a.lG=null;a.e7=null;a.nr=null;a.iM=null;a.fn=null;a.kX=null;a.sI=null;a.kk=null;a.sl=null;a.sm=null;a.ry=null;a.CK=null;a.Hn=null;a.vK=0;}
function BbZ(a){var b=new ANo();A6Z(b,a);return b;}
function A6Z(a,b){var c,d,e,f;Fo(a,b);c=(HM()).bF.fB;a.Cu=c;a.q9=AQO(c);a.lG=new Bg;a.e7=Mc();a.nr=Mc();a.iM=Wq(0,0,3,3);a.fn=Je(0,0,300,300);a.kX=A5D();d=O(BE,4);e=d.data;e[0]=C(243);e[1]=C(244);e[2]=C(194);e[3]=C(193);a.sI=d;a.kk=O(LB,e.length);c=b.m.b2;f=new Xl;f.gf=a;Z(c,f);c=b.m.bQ;f=new AC5;f.Gs=a;Z(c,f);c=b.m.qC;f=new AC4;f.uT=a;Z(c,f);c=b.m.hZ;f=new AC3;f.Ic=a;Z(c,f);c=b.m.n4;f=new AC2;f.Jb=a;Z(c,f);c=b.m.cF;f=new AC1;f.JZ=a;Z(c,f);b=b.m.e3;c=new AC0;c.E3=a;Z(b,c);a.sl=AHe(a,1);a.sm=AHe(a,0);U$(a,a.e7,
a.sl);U$(a,a.nr,a.sm);a.ry=AIB(a,0);a.CK=AIB(a,1);GL(a.fn,a.ry);GV(a.fn);IF(a.fn,DV(169,183,198));Ge(a.fn,a.Cu);CA(a.e7.bd,1.0,1.0,1.0,1.0);Ge(a.e7,a.fn.bz);BQ(a.iM.bz,a.q9);}
function U$(a,b,c){GL(b,c);GV(b);}
function VG(a,b){Jz(Ei(),0.5+Ei()*0.5,0.5+Ei()*0.5,1.0,b.bd);}
function AHe(a,b){var c,d;c=Ex(a.A.N,200,100,b);Iy(c,C(245),11.0);B4(c,C(246),0.0,20.0);Lg(c,255,0,0);B4(c,C(246),0.25,40.0);Lg(c,0,255,0);B4(c,C(246),0.5,60.0);Lg(c,0,0,255);B4(c,C(246),0.75,80.0);d=Dc(a.A.N);C5(d,c);Fe(c);return d;}
function AIB(a,b){var c,d,e,f;c=Ex(a.A.N,255,100,b);Iy(c,C(177),10.0);d=Bi();e=$rt_str(c.dU.font);f=new I;K(f);G(G(f,C(247)),e);Bb(d,J(f));EY(c,C(248));B4(c,C(248),0.0,20.0);B4(c,C(248),0.25,40.0);B4(c,C(248),0.5,60.0);B4(c,C(248),0.75,80.0);e=Dc(a.A.N);C5(e,c);Fe(c);return e;}
function ARG(a,b){var c;a.vK=a.vK+1|0;c=b/5.0;Jz(c-(c|0),1.0,1.0,1.0,a.iM.bd);return AFz(a.kX,b);}
function ATF(a){var b,c,d,e,f,g,h,i;b=a.A.N;ES(b,a.q9);c=a.kk.data;d=c.length;e=0;while(e<d){Ph(c[e],b,0,0);e=e+1|0;}f=a.fn;g=f.x;g.a=(a.lG.a-f.s.a|0)-5|0;g.b=0;B2(b,0);h=0;while(h<7){f=a.fn;Fm(f,b,a.ry,Ba(h,10+((10*f.s.b|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.fn;f.x.a=(a.lG.a-(f.s.a*2|0)|0)-10|0;h=0;while(h<7){g=a.CK;f=a.fn;f.x.b=Ba(h,10+((10*f.s.b|0)/15|0)|0)+5|0;V_(f,b,g,1);h=h+1|0;}V_(a.e7,b,a.sl,1);B2(b,1);g=a.nr;f=a.sm;i=g.x;h=i.b;d=i.a;g=g.s;Ho(b,b.mt);HE(b.mt,b.bi,h,d,g,b.dx);PQ(b.mt,b.bi,f);G1(b);B2(b,0);f
=a.Hn;if(f!==null)Zu(a.iM,b,f,0,0,0.0);AGH(a.kX,b,new Bg);OF(b,C(249));}
function AV$(a,b,c){var d,e,f,g,h,i,j,k;d=Bi();e=BT(b);f=new I;K(f);G(G(f,C(250)),e);Bb(d,J(f));d=Bi();f=new I;K(f);Dw(G(f,C(251)),c);Bb(d,J(f));g=BL(30.0,c);h=BL(10.0,c);i=0;while(true){j=a.kk.data;if(i>=j.length)break;k=1+i|0;j[i]=Wq(Ba(h,k)+Ba(g,i)|0,g,g,g);VG(a,a.kk.data[i]);i=k;}Y(a.iM.x,(b.b/2|0)-1|0,(b.a/2|0)-1|0);f=a.e7;Y(f.x,((b.b/2|0)-f.s.b|0)-10|0,50);Y(a.nr.x,(b.b/2|0)+10|0,50);CF(a.lG,b);}
function AAP(a,b){var c,d,e,f,g;c=Bi();d=!b.lc?C(252):C(253);e=b.e6;f=b.bh;g=b.DK;b=new I;K(b);KC(G(R(G(G(G(b,d),e),C(254)),f),C(255)),g);Bb(c,J(b));return 0;}
function AFH(){var a=this;CR.call(a);a.J2=null;a.mK=null;a.kl=null;a.js=null;a.d7=null;a.eM=null;a.oZ=null;a.oJ=null;a.k1=0;a.jZ=null;a.jY=null;}
function T5(a,b,c){GL(b,c);GV(b);}
function AIX(a,b,c,d,e,f){var g,h;g=Ex(f,c,120,b);Cv(g,e);e=!b?C(256):C(257);h=new I;K(h);G(G(G(h,e),d),C(164));d=J(h);B4(g,d,0.0,20.0);B4(g,d,0.25,40.0);B4(g,d,0.5,60.0);B4(g,d,0.75,80.0);B4(g,d,1.0,100.0);h=Dc(f);C5(h,g);Fe(g);return h;}
function AXS(a,b){return 0;}
function A3w(a){var b,c,d,e,f,g,h,i;b=a.A.N;ES(b,a.mK);B2(b,0);c=a.kl;d=c.a;e=a.js;f=d-e.a|0;g=c.b-e.b|0;Bu(b,0,0,e,a.d7.bz);Bu(b,g,0,a.js,a.eM.bz);Bu(b,0,f,a.js,a.d7.bd);Bu(b,g,f,a.js,a.eM.bd);c=a.d7;e=c.x;h=e.a;i=((a.kl.a*3|0)/4|0)-(c.s.a/2|0)|0;JA(c,b,e.b,h,a.jZ,0,1);c=a.d7;JA(c,b,c.x.b,i,a.jZ,1,1);c=a.eM;JA(c,b,c.x.b,h,a.jY,0,0);e=a.eM;JA(e,b,e.x.b,i,a.jY,1,0);OF(b,C(249));}
function A44(a,b,c){var d,e;CF(a.kl,b);Y(a.js,b.b/2|0,b.a/2|0);d=a.kl.a/4|0;e=a.d7;d=d-(e.s.a/2|0)|0;Y(e.x,(b.b/4|0)-(a.k1/2|0)|0,d);Y(a.eM.x,((b.b*3|0)/4|0)-(a.k1/2|0)|0,d);}
function ABn(){var a=this;Ca.call(a);a.Cj=null;a.fX=null;a.eq=null;a.qD=null;}
function AVz(a,b,c){var d;d=Gf(a.p,a.qD);KQ(a.fX,d,a.p);KQ(a.eq,d,a.p);}
function UG(b){return J6(b,Yk());}
function J6(b,c){var d;d=Wo();Qf(d,O9(b,Lk(c,25)),!b?null:J6(b-1|0,c));Qf(d,O9(b,Lk(c,20)),!b?null:J6(b-1|0,c));Qf(d,O9(b,Lk(c,15)),!b?null:J6(b-1|0,c));Qf(d,O9(b,Lk(c,10)),!b?null:J6(b-1|0,c));return JY(d);}
function O9(b,c){var d;if(b){d=new I;K(d);G(G(R(d,b),C(30)),c);c=J(d);}return c;}
function Qf(b,c,d){if(d!==null)I8(b,c,d);else{d=new YY;d.uA=c;E6(b,c,d);}}
function AUg(a,b,c){var d,e;GR(a,b,c);b=a.p.bY;d=Ff(a.fX);e=Ff(a.eq);O5(a.fX,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);O5(a.eq,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function A4w(a){var b,c,d,e,f,g,h,i;IC(a);b=a.A.N;B2(b,1);c=a.Cj;d=a.p;e=d.bY;Y(c.pO,e.b,BL(2.0,d.cr));Y(c.qj,BL(2.0,d.cr),e.a);GG();f=Be3;g=d.b8;h=e.a/2|0;i=c.pO;Bu(g,0,h-(i.a/2|0)|0,i,f);g=d.b8;h=e.b/2|0;c=c.qj;Bu(g,h-(c.b/2|0)|0,0,c,f);NR(a.fX,a.p);NR(a.eq,a.p);K1(a.t);B2(b,0);}
function AWa(a,b){var c,d;c=PE(a.fX,b.i,a.p.cI);d=PE(a.eq,b.i,a.p.cI);return !c&&!d?0:1;}
function ASj(a,b,c,d){var e,f;e=P8(a.fX,b.i,c,d);f=P8(a.eq,b.i,c,d);return !e&&!f?0:1;}
function AFl(){Ca.call(this);this.ma=null;}
function ATr(a,b,c){if(b===0.0)ADf(a);}
function ADf(a){var b,c,d,e,f,g,h,i;b=a.ma;if(b!==null){Ju(a.t,b);K_(b);}b=(HM()).cs;c=Bc9(a.p,new Yz);d=DT(C(166),14.0);e=AVx();f=0;while(f<300){g=DI(f);h=new VV;h.Fp=C(258);h.Fn=g;h.Fo=C(259);ZU(e,C(258),g,C(259),h);f=f+1|0;}AAW(c,AHI(e));ZL(c,b,d);g=AJg(a.p);i=HF(c,a.p);Km(i,b.oM,b.qU);ME(g,i);EP(g,b);C2(g,C(151));a.ma=g;Ee(a.t,g);S5(a);}
function ASz(a,b,c){GR(a,b,c);S5(a);}
function S5(a){var b,c,d;b=a.p.bY;Ew(a.ma,BP((b.b*2|0)/10|0,(b.a*4|0)/10|0),BP((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.ma;b=AM$(c.bc.k);d=new I;K(d);G(G(d,C(260)),b);C2(c,J(d));}
function AAJ(){var a=this;IQ.call(a);a.n5=null;a.jk=null;a.ho=null;a.lJ=null;a.uu=null;a.lC=null;a.jw=null;a.i5=null;a.ng=0;a.jj=0;}
function RZ(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.jk.r>0){d=Ei();e=a.jk;f=d*(e.r-1|0)|0;e=Fs(e,f);Fs(a.ho,f);f=a.jj;g=e.s;a.jj=f-Ba(g.b,g.a)|0;J4(a.n5,e.ei);}c=c+1|0;}}
function NI(a,b){var c,d,e,f,g,h,i,j;c=Lz(a.p);Cv(c,a.lJ);d=0;while(d<b){e=Lk(a.lC,1+(Ei()*19.0|0)|0);f=Mc();g=f.ei;h=a.n5;BH(c);i=new TR;i.xq=c;BQ(g,LI(h,e,i));(YX(Ei(),1.0,1.0,f.bz)).bR=0.5;h=f.x;g=f.ei;Y(h,g.bx|0,g.bC|0);h=f.s;g=f.ei;Y(h,g.bm|0,g.bR|0);Br(a.ho,e);Br(a.jk,f);j=a.jj;h=f.s;a.jj=j+Ba(h.b,h.a)|0;d=d+1|0;}a.i5=Or(a.n5);}
function A9J(a){var b,c,d,e,f,g,h,i;IC(a);b=a.A.N;B2(b,1);c=a.p.b8;if(a.ho.r){d=a.i5;d=IN(c,d.b,d.a);Cv(d,a.lJ);e=a.lJ.fa;Bu(c,0,0,a.i5,a.uu);f=0;while(f<a.ho.r){g=BU(a.jk,f);h=BU(a.ho,f);g=g.ei;B4(d,h,g.bx,g.bC+e);f=f+1|0;}g=a.jw;if(!(g!==null&&BX(g)==a.i5.b&&C7(a.jw)==a.i5.a))a.jw=BM(a.jw,Dc(c));C5(a.jw,d);Fe(d);i=0;while(i<a.ho.r){d=BU(a.jk,i);IF(d,Cw(0));Fm(d,c,a.jw,0,0);i=i+1|0;}}B2(b,0);}
function ARy(a,b){var c,d;if(a.ng){c=a.i5;d=Bh(Ba(c.b,c.a),2211840);if(a.jj/d<=0.7)NI(a,Ey(a.lC,5));else RZ(a,Ey(a.lC,5));}return a.ng;}
function C1(){var a=this;CR.call(a);a.hK=null;a.gY=null;a.h$=0.0;}
function BfX(a){var b=new C1();Gs(b,a);return b;}
function Gs(a,b){Fo(a,b);a.hK=AN$(0,0,64);a.gY=new Bg;Hd(b.bv,Hm(BD(a)));}
function Pu(a){ES(a.A.N,a.hK);}
function HZ(a,b,c){CF(a.gY,b);a.h$=c;}
function Rw(){var a=this;C1.call(a);a.f1=null;a.Dw=null;a.fY=null;a.jr=null;a.uZ=null;a.xY=null;a.i4=0;a.ou=0;a.wu=0;}
function A6t(a){var b,c,d,e,f,g,h,i,j;ES(a.f1,a.hK);b=a.fY.dg.a;B2(a.f1,1);c=BL(20.0,a.fY.it);d=BL(22.0,a.fY.it);e=a.jr;f=a.i4;g=a.fY;h=g.eO;i=h.a;g=g.dg;HC(e,f,i,g.a,5000,(h.b+g.b|0)+d|0,c);Kl(a.jr,a.f1);B2(a.f1,0);e=a.fY;j=(b*3|0)/4|0;c=a.i4;d=a.ou;ABz(e,j,c,c/d|0,(2*b|0)/d|0,10,a.f1,a.xY);}
function A3q(a,b,c){var d,e,f;HZ(a,b,c);d=BL(80.0,c);e=BL(20.0,c);f=BL(20.0,c);V7(a.fY,f,e,d,b.a/2|0,c);}
function AE7(a){return 5000-a.fY.dg.a|0;}
function Mx(){var a=this;Ca.call(a);a.BY=null;a.m0=0;a.j5=0;a.oc=null;a.l$=null;a.pG=null;}
var BeS=null;function Vo(a,b){var c,d,e,f,g,h,i,j;c=a.t;d=a.BY;e=d.pi;f=O(Bw,3);g=f.data;h=new Bw;i=new SQ;i.vu=a;B8(h,i,C(261));g[0]=h;j=new Bw;h=new SS;h.ye=a;B8(j,h,C(262));g[1]=j;j=new Bw;h=new SR;h.xc=a;B8(j,h,C(263));g[2]=j;Ft(c,d,e,b,CT(f));return 1;}
function APR(){BeS=DD([(-738792947),60747247,(-1998097526),1828170894,(-887988090),947829193,(-1999687713),(-701152478),(-2000527343),(-1881496555),540327628,290384918,566113323,(-1809286035),815515802,(-530444145),(-436772899),Q2(C$(0))]);}
var AA4=H(Ca);
function Ic(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.A.bv.eo;f=new TQ;f.HZ=a;f.w4=b;g=O(B,1);h=g.data;i=BI(1);i.data[0]=b;h[0]=i;EF(e,f,C(264),g);d=d+1|0;}}
function AQb(b){var c;c=b.data;ANF(c[0],c[1],ABZ(KB(b,2)));}
function ANF(b,c,d){var e,f,g,h,i;e=d.data;f=Bi();b=BT(b);c=BT(c);g=new I;K(g);G(G(G(G(g,C(265)),b),C(266)),c);Bb(f,J(g));b=Bi();h=e.length;i=Q2(d);c=new I;K(c);R(G(R(G(c,C(267)),h),C(268)),i);Bb(b,J(c));}
function AAm(){var a=this;C1.call(a);a.fO=null;a.hQ=null;a.pB=null;a.E7=null;a.sy=null;}
function AU_(a,b){b=b/5.0;Jz(b-(b|0),1.0,1.0,1.0,a.hQ.bd);return 0;}
function A4k(a){Pu(a);Fm(a.fO,a.A.N,a.E7,0,0);Zu(a.hQ,a.A.N,a.pB,0,0,0.0);OF(a.A.N,C(249));}
function A_K(a,b,c){var d,e,f;HZ(a,b,c);Y(a.hQ.x,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.fO;e=d.x;f=b.b;d=d.s;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function V0(){var a=this;C1.call(a);a.h_=null;a.tf=null;a.oe=null;a.l3=null;a.le=null;}
function Bao(a){var b,c,d,e,f,g;Pu(a);b=a.A.N;c=a.l3;Nv(b,c.b,c.a,a.le);b=a.h_;c=a.tf;d=a.gY;e=a.A.N;f=0;while(true){g=0;while(true){Fm(b,e,c,g,f);g=g+BX(c)|0;if(g>=d.b)break;}f=f+C7(c)|0;if(f>=d.a)break;}Gd(a.A.N);}
function AUR(a,b,c){HZ(a,b,c);Y(a.le,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function AFc(){var a=this;CR.call(a);a.fv=null;a.qL=null;a.hT=null;a.cC=null;a.f5=0;a.jU=null;a.gx=0;a.IC=20;a.KY=11;a.I6=220;a.nR=null;a.Kf=5000;a.jF=0;a.h1=null;}
function A0G(a){var b,c,d,e,f,g,h;b=a.jU;c=a.gx;d=a.nR;HC(b,c,0,d.a,5000,d.b,20);B2(a.fv,1);Kl(a.jU,a.fv);if(a.cC===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B4(a.qL,DI(e),0.0,c);}b=Dc(a.fv);a.cC=b;C5(b,a.qL);}if(a.gx<=a.f5)while(true){f=a.f5;if(f<=a.gx)break;a.f5=f-20|0;b=a.hT;g=a.jF-1|0;a.jF=g;B4(b,DI(g),0.0,20.0);KY(a.cC,a.hT,0,a.f5%220|0);Fy(a.hT);}else while(a.f5<(a.gx-20|0)){b=a.hT;g=a.jF+1|0;a.jF=g;B4(b,DI((g+11|0)-1|0),0.0,20.0);KY(a.cC,a.hT,0,a.f5%220|0);Fy(a.hT);a.f5=a.f5+20|0;}b=Je(0,0,BX(a.cC),C7(a.cC));JC(b,
0,0,BX(a.cC),C7(a.cC));IF(b,a.h1.data[0]);Ge(b,a.h1.data[1]);Fm(b,a.fv,a.cC,400,0);g=a.gx%220|0;f=Bh(C7(a.cC)-g|0,200);d=Je(0,0,BX(a.cC),f);JC(d,0,g,BX(a.cC),f);IF(d,a.h1.data[0]);Ge(d,a.h1.data[1]);Fm(d,a.fv,a.cC,0,0);h=Je(0,f,BX(a.cC),(C7(a.cC)-f|0)-20|0);JC(h,0,0,BX(a.cC),(C7(a.cC)-f|0)-20|0);IF(h,a.h1.data[1]);Ge(h,a.h1.data[0]);Fm(h,a.fv,a.cC,0,0);}
function A4A(a,b,c){CF(a.nR,b);}
function A9n(a,b){return 0;}
function AEO(a){return 5000-a.nR.a|0;}
function LD(){C1.call(this);this.e2=0;}
function AEv(a){var b,c;b=a.A.bv;c=new XP;c.A1=a;UA(b,c,AAp(a));}
function S3(a){var b,c,d,e;b=a.e2+1|0;a.e2=b;c=Hm(F(LD));d=new I;K(d);G(G(R(G(d,C(269)),b),C(30)),c);e=J(d);c=a.A.bv;d=new Zq;d.Bd=e;W2(c,e,d,AAp(a));}
function AAp(a){var b;b=new AC$;b.F5=a;return b;}
function AVY(a,b,c,d){a:{switch(c){case 0:break;case 2:S3(a);break a;default:break a;}AEv(a);}return 1;}
function VJ(){var a=this;C1.call(a);a.xj=null;a.hx=null;a.m$=null;a.rr=null;a.yV=null;}
function A1t(a){var b,c,d,e,f,g,h,i;if(a.m$===null){b=a.A.N;c=a.yV;d=Jt(b,c.jt,BL(c.h8,a.h$));Cv(b.cE,d);e=Dd(EY(b.cE,C(270)));f=Bi();g=d.q6;c=new I;K(c);Dw(G(c,C(271)),g);Bb(f,J(c));h=O4(d,1.1799999475479126);c=Bi();i=new I;K(i);R(G(R(G(i,C(272)),e),C(273)),h);Bb(c,J(i));c=IN(b,e,h);a.rr=c;Cv(c,d);B4(a.rr,C(270),0.0,d.fa);b=Dc(b);a.m$=b;C5(b,a.rr);GL(a.hx,a.m$);GV(a.hx);b=a.hx.bz;GG();BQ(b,BeT);BQ(a.hx.bd,BfR);}b=a.A.N;ES(b,a.xj);c=a.hx;i=c.x;f=a.gY;e=f.b;c=c.s;Y(i,(e-c.b|0)/2|0,(f.a-c.a|0)/2|0);Fm(a.hx,b,
a.m$,0,0);}
function H2(){var a=this;CR.call(a);a.yl=null;a.cJ=null;a.e0=null;a.d9=null;a.ga=null;a.fu=null;}
function QO(a,b){var c,d;Fo(a,b);a.yl=Cw(20);a.cJ=MZ();a.e0=new Bg;a.d9=new Bg;a.ga=new Bg;a.fu=new Bg;c=b.m.bQ;d=new AGO;d.Ik=a;Z(c,d);Z(b.m.b2,a);b=a.cJ.bz;GG();BQ(b,BeT);BQ(a.cJ.bd,BfR);}
function AKf(a){var b,c,d;b=a.A.N;ES(b,a.yl);c=a.cJ;d=c.x;Bu(b,d.b,d.a,c.s,c.bz);B2(b,1);c=a.cJ;d=c.x;AI5(b,d.b,d.a,c.s,a.e0,a.d9,a.ga,a.fu,c.bd);B2(b,0);}
function A6W(a,b){return 0;}
var WH=H(H2);
function A86(a,b,c){var d,e,f;d=a.cJ;e=d.x;f=b.b;d=d.s;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);Y(a.e0,0,0);Y(a.d9,Bh(b.b,b.a),Bh(b.b,b.a));b=a.ga;d=a.e0;Y(b,d.b,d.a+20|0);b=a.fu;d=a.d9;Y(b,d.b,d.a+40|0);}
function A$a(a,b){var c,d,e;CF(a.e0,b.i);b=a.d9;c=a.cJ;d=c.x;e=d.b;c=c.s;Y(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.ga;c=a.e0;Y(b,c.b,c.a+20|0);b=a.fu;c=a.d9;Y(b,c.b,c.a+40|0);return 0;}
function WG(){var a=this;H2.call(a);a.g4=null;a.hy=null;}
function A_2(a,b){var c;c=a.d9;b=b.i;c.a=b.a-50|0;a.fu.a=b.a+100|0;return 1;}
function ATm(a){var b,c,d,e,f,g,h;b=Be(a.e0.b,a.ga.b);c=Bh(a.d9.b,a.fu.b);d=Bh(a.e0.a,a.d9.a)-50|0;e=Be(a.ga.a,a.fu.a)+50|0;If(a.cJ,b,d,c-b|0,e-d|0);AKf(a);f=a.cJ.x.b-10|0;AFe(a,a.A.N,10,f,a.e0,a.ga);g=a.cJ;h=g.x.b+g.s.b|0;AFe(a,a.A.N,h,f,a.d9,a.fu);}
function AFe(a,b,c,d,e,f){var g;Y(a.g4,c,a.cJ.x.a);Y(a.hy,d,e.a-a.cJ.x.a|0);g=a.g4;Bu(b,g.b,g.a,a.hy,a.cJ.bz);Y(a.g4,c,e.a);Y(a.hy,d,f.a-e.a|0);e=a.g4;Bu(b,e.b,e.a,a.hy,a.cJ.bd);Y(a.g4,c,f.a);e=a.hy;g=a.cJ;Y(e,d,(g.x.a+g.s.a|0)-f.a|0);e=a.g4;Bu(b,e.b,e.a,a.hy,a.cJ.bz);}
function AR4(a,b,c){}
function ZI(){var a=this;Ca.call(a);a.GK=3;a.zo=null;a.ls=null;a.sx=0;}
function AVy(a,b,c){var d,e;if(b===0.0){Ee(a.t,ACW(a));d=Wi(a,0.5,0,C(274));e=a.p.bY;Ew(Ee(a.t,d),BP(e.b/10|0,e.a/10|0),BP((e.b*6|0)/10|0,(e.a*6|0)/10|0));}}
function ACW(a){var b,c,d,e,f,g;b=a.sx+1|0;a.sx=b;c=new I;K(c);R(G(c,C(275)),b);c=Wi(a,1.0,1,J(c));d=a.p.bY;e=d.b/10|0;f=e+Ey(a.ls,e)|0;e=d.a/20|0;e=e+Ey(a.ls,e)|0;b=d.b;b=((b*7|0)/10|0)+Ey(a.ls,b/10|0)|0;g=d.a;g=((g*7|0)/10|0)+Ey(a.ls,g/10|0)|0;Ew(c,BP(f,e),BP(b,g));return c;}
function Wi(a,b,c,d){var e,f,g;e=AJg(a.p);if(d===null)f=new AIm;else{f=new AIo;f.xz=e;f.xA=d;}g=new SB;Nq(g);g.nY=new B_;g.rY=new Bg;g.BU=f;g.uw=b;if(c){d=HF(g,a.p);Km(d,BfY,BfZ);g=d;}ME(e,g);EP(e,Ga());AE$(e,a.zo,3.0);d=new AIn;d.sX=a;d.sY=e;WO(e,d);return e;}
function AAQ(){B.call(this);this.zK=null;}
function A9F(a,b){D1(a.zK,null);return 0;}
function UL(){Ca.call(this);this.o0=null;}
function A4D(a,b,c){if(b===0.0)AGq(a);}
function AGq(a){AHK(new Nj,a.t,a.o0,new AHL);}
function ADI(){var a=this;C1.call(a);a.nK=null;a.dw=null;a.tG=null;a.pV=0;a.jn=null;a.gZ=0;a.lK=0;a.lO=0;a.r$=0;a.s2=null;a.x_=null;}
function AIg(a){return a.r$-a.dw.eJ.a|0;}
function A2S(a,b,c){var d,e,f,g;HZ(a,b,c);d=BL(80.0,c);e=BL(20.0,c);f=BL(20.0,c);ACw(a.dw,f,e,d,a.gY.a/2|0,c);g=BL(20.0,c);a.lK=g;a.r$=Ba(a.lO,g);P4(a.dw,g,a.pV);}
function AZ7(a){var b,c,d,e,f,g,h,i,j;Pu(a);b=a.dw;c=b.eJ.a;d=a.gZ;b.iW=d;e=a.lK;f=d/e|0;d=Hw(d+c|0,e);AHR(a.dw,f,d,(f+d|0)/2|0,a.A.N,a.tG,a.x_);b=a.A.N;B2(b,1);f=BL(20.0,a.h$);e=BL(22.0,a.h$);g=a.dw;h=g.ex;c=h.b;i=g.eJ;j=c+i.b|0;HC(a.jn,a.gZ,h.a,i.a,a.r$,j+e|0,f);Kl(a.jn,b);B2(b,0);}
function A0p(a,b,c){var d;if(c)return Bfd;d=Fn(a.jn,b.i,a.s2,1);if(d!==null)return d;return WM(a.dw,b,c,a.nK);}
function A6j(a,b,c){return S4(a.dw,b,c);}
function A4Y(a,b){return !Fq(a.jn,b.i,a.nK)&&!UV(a.dw,b,a.nK)?0:1;}
function T2(){Ca.call(this);this.on=null;}
function A5r(a,b,c){if(b===0.0)Mq(a);}
function Mq(a){var b;b=AZG(a.t,a.on,new U0);LN(b);return b;}
function Xk(){var a=this;C1.call(a);a.iD=null;a.AW=null;a.ji=null;a.gu=null;a.ju=0;a.qV=0;a.Dc=null;}
function ARF(a){var b,c,d,e,f,g,h,i;ES(a.iD,a.hK);Ph(a.gu,a.iD,0,0);B2(a.iD,1);b=BL(20.0,a.h$);c=BL(22.0,a.h$);d=a.ji;e=a.ju;f=a.gu.x.a;g=AIb(a);h=a.qV;i=a.gu;HC(d,e,f,g,h,(i.x.b+i.s.b|0)+c|0,b);Kl(a.ji,a.iD);B2(a.iD,0);}
function A72(a,b,c){var d;HZ(a,b,c);d=BL(20.0,c);Y(a.gu.s,d,b.a/2|0);}
function A_A(a,b,c){if(c)return Bfd;return Fn(a.ji,b.i,a.Dc,1);}
function A8m(a,b,c){return 1;}
function ASU(a,b){return Fq(a.ji,b.i,a.AW);}
function AC7(a){return a.qV-AIb(a)|0;}
function AIb(a){return a.gu.s.a;}
function E1(){Ca.call(this);this.j1=null;}
function Bcp(a){var b=new E1();Lm(b,a);return b;}
function Lm(a,b){F_(a,b);Z(a.p.dz,a);BQ(a.dy,Cw(43));}
function A30(a){return A1T();}
function AWi(a){return 1;}
function AGw(a,b){EP(a.j1,b);}
function ANX(a,b){var c,d,e;c=a.p.bY;d=!a.rz()?0:AHd(b);e=c.a-d|0;Ew(b,BP(c.b/20|0,d+(e/20|0)|0),BP((c.b*9|0)/10|0,(e*9|0)/10|0));}
function A9S(a,b,c){if(b===0.0){a.j1=A_M(a.p,a.kN());AGw(a,Ga());if(a.rz())C2(a.j1,IG(BD(a)));Ee(a.t,a.j1);a.pM(a.j1);}}
function ACX(){var a=this;E1.call(a);a.kU=null;a.yY=null;}
function A7J(a){var b,c,d,e;a.kU=Xm(a.p);b=new WQ;b.vU=a;c=R0(C(276),4,b);b=Bi();d=QR(c);e=new I;K(e);R(G(e,C(277)),d);Bb(b,J(e));Eo(a.kU,c);Lj(a.kU,a.yY);c=a.kU;return KR(c,HF(c,a.p));}
function A9d(a,b){var c;c=a.p.bY;Ew(b,BP(c.b/30|0,c.a/10|0),BP((c.b*3|0)/10|0,(c.a*8|0)/10|0));}
function SZ(){var a=this;E1.call(a);a.nS=null;a.hh=null;}
function ASD(a){var b;b=Hz(a.nS);a.hh=b;AP8(b);OE(a.p,a.hh);return a.hh;}
function A2q(a){return 0;}
function A_4(a,b){ANX(a,b);Kw(a);}
function AZs(a,b){BH(b);GN(a.nS,b);FD(a.hh,b);AGw(a,b.cs);}
function AYM(a,b){Hu(a.t,b);}
function R1(){var a=this;E1.call(a);a.yk=null;a.gJ=null;}
function ANO(){var b;b=L(G$,[D3(1,3,4,5,1),D3(5,6,10,2,2),D3(12,2,13,3,3),D3(15,3,17,2,4)]);return A8U(O(E8,0),O(E8,0),b);}
function A4Z(a){var b,c,d,e;b=AQv(a.p);a.gJ=b;Qc(b,a.yk);c=a.gJ.c8;BH(c);d=new AFE;d.tv=c;b=R0(C(276),4,d);d=a.gJ.c5;BH(d);e=new AFF;e.v9=d;c=R0(C(276),4,e);Eo(a.gJ.c8,b);Eo(a.gJ.c5,c);PG(a.gJ,ANO());return a.gJ;}
function AHa(){var a=this;CR.call(a);a.vW=null;a.oA=null;a.f3=null;a.q0=null;a.oz=0.0;a.iq=null;a.zs=null;a.wJ=null;a.BE=null;a.Cz=null;a.uN=null;a.sE=null;a.GE=null;a.zU=null;a.nd=null;}
var Bf0=0;function Bb1(a){var b=new AHa();A1e(b,a);return b;}
function A1e(a,b){var c,d,e;Fo(a,b);a.vW=new B_;a.oA=AIA(1.0,0.0,0.0,1.0);a.f3=MZ();a.q0=new Bg;a.oz=3.1415927410125732;c=APh();a.iq=c;a.zs=IK(c,1.25);a.wJ=IK(a.iq,1.3333333730697632);a.BE=IK(a.iq,1.5);a.Cz=IK(a.iq,1.6666666269302368);a.uN=IK(a.iq,2.0);a.sE=AIA(a.oz/24.0,15.0,3.0,0.5);c=AIA(a.oz/12.0,25.0,3.0,0.5);a.GE=c;a.zU=DD([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.nd=L(B_,[a.iq,a.zs,a.wJ,a.BE,a.Cz,a.uN,a.sE,c]);c=b.m.bQ;d=new Tr;d.KV=a;Z(c,d);Z(b.m.b2,a);b=a.f3.bd;GG();BQ(b,BeT);If(a.f3,0,0,600,60);e
=OT(0.5,0.375);Kr(0.375,e);Kr(0.375,Kr(3.0,OT(e,3.0)));IK(APh(),3.0);}
function A_X(a,b,c){var d,e,f;CF(a.q0,b);d=a.f3;e=d.x;f=b.b;d=d.s;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function IK(b,c){var d;d=new B_;Yo(b,c,d);return d;}
function APh(){var b;b=new B_;Na(b);return b;}
function A5P(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.A.N;ES(b,a.vW);B2(b,1);c=a.f3;d=c.x.b;e=c.s.a/2|0;f=0;while(true){g=a.nd.data;if(f>=g.length)break;h=a.zU.data[f];c=g[f];i=AAS(c);j=a.f3;k=j.x;l=k.b;m=k.a;NP(b,l,m+h|0,j.s,d+i,((m+e|0)+h|0)+i,c,a.oA);f=f+1|0;}if(Bf0){c=BbS(1,2);n=0;while(n<1000){h=Ey(c,a.nd.data.length);l=Ey(c,a.q0.a-a.f3.s.a|0);j=a.nd.data[h];i=j.bC;i=i-(i|0)>=0.25?0.0:0.5;k=a.f3;NP(b,k.x.b,l,k.s,d+i,(e+l|0)+i,j,a.oA);n=n+1|0;}}B2(b,0);}
function AZd(a,b){return Bf0;}
function ADS(){var a=this;E1.call(a);a.ra=null;a.nW=null;}
function AUW(a){var b,c,d,e,f,g;b=AQv(a.p);a.nW=b;Qc(b,a.ra);b=I$(C(278),1);c=new Va;c.w2=a;b.cM=c;EO(b);c=I$(C(279),1);d=new U_;d.A$=a;c.cM=d;EO(c);e=I$(C(278),1);d=new Vc;d.B3=a;e.cM=d;EO(e);f=I$(C(279),1);d=new Vb;d.F_=a;f.cM=d;EO(f);d=APW(C(280),0,L(Dl,[b,c]));I4(d);g=APW(C(281),0,L(Dl,[e,f]));I4(g);Eo(a.nW.c8,d);Eo(a.nW.c5,g);return a.nW;}
function AFq(a){var b,c;b=a.t.F.b1;c=new XE;c.DB=a;G9(b,c);}
function AH_(a){var b,c;b=a.t.F.b1;c=new ACI;c.AI=a;G9(b,c);}
function AIq(a){var b,c;b=a.t.F.b1;c=new Rv;c.zu=a;FQ(b,c);}
function ADw(a){var b,c;b=a.t.F.b1;c=new RO;c.H8=a;FQ(b,c);}
function VY(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bi();f=IG(BD(d[c]));g=BT(d[c]);h=new I;K(h);G(G(G(G(R(G(h,C(282)),c),C(283)),f),C(30)),g);Bb(e,J(h));c=c+1|0;}}
function AAn(){var a=this;Ca.call(a);a.FL=null;a.K9=null;}
function ATp(a,b,c){var d,e,f,g;d=a.t.F.cr!==0.0?0:1;GR(a,b,c);if(d){b=new Pa;e=a.FL;f=a.t;g=new ABA;g.Ix=a;S8(b,e,f,g);a.K9=b;AC_(b.eD);}}
function ALO(){Ca.call(this);this.ie=null;}
function A77(a){var b=new ALO();ARc(b,a);return b;}
function ARc(a,b){var c;F_(a,b);a.ie=Fv();Z(a.p.dz,a);BQ(a.dy,Cw(43));b=b.m.cF;c=new AFs;c.s9=a;Z(b,c);}
function PI(){return Ea(1);}
function ADk(a){S8(new Pa,a.ie,a.t,new YO);}
function A1b(a,b,c){if(b===0.0)ADk(a);}
var AQJ=H();
function ASx(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new ACe;c=c.buffer;d.hu=c;d.su=new $rt_globals.Int8Array(c);d.op=new $rt_globals.Uint16Array(c);d.En=new $rt_globals.Int32Array(c);d.uW=new $rt_globals.Float32Array(c);d.va=new $rt_globals.Float64Array(c);e=d.hu.byteLength;c=new I;K(c);R(G(c,C(284)),e);Db(J(c));e=b.callToCpp1();c=new I;K(c);R(G(c,C(285)),e);Db(J(c));f=b.callToCpp2();c=new I;K(c);Dw(G(c,C(286)),f);Db(J(c));c=Re(d,b.getC8String());g=new I;K(g);G(G(g,C(287)),c);Db(J(g));c
=AAu(d,b.getC16String());g=new I;K(g);G(G(g,C(288)),c);Db(J(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.hu,h,8));c=ALB(i);g=new I;K(g);G(G(g,C(289)),c);Db(J(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.hu,h,8));c=AZk(j);g=new I;K(g);G(G(g,C(290)),c);Db(J(g));k=AOv(d,b.getCDoubleArray8(),8);l=A1F(k);c=new I;K(c);G(G(c,C(291)),l);Db(DR(c));l=A1y(b.getC8String(),C(292),d);c=NN();G(G(c,C(293)),l);Db(DR(c));l=AWR(b.getC16String(),C(294),
d);c=NN();G(G(c,C(295)),l);Db(DR(c));c=A8y(i,d,b.getCIntArray8(),DD([11,22,33,44,55,66,77,88]));g=NN();G(G(g,C(296)),c);Db(DR(g));c=AZv(j,d,b.getCFloatArray8(),100,DD([111,222,333,444,555,666,777,888]));g=NN();G(G(g,C(297)),c);Db(DR(g));b=A99(k,d,b.getCDoubleArray8(),1000,DD([1111,2222,3333,4444,5555,6666,7777,8888]));c=NN();G(G(c,C(298)),b);Db(DR(c));}
function AZv(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(299);h=0;i=e;a:{while(h<g){if(Dd(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.uW[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(300);}return C(301);}
function A99(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(299);h=0;i=e;a:{while(h<g){if(FW(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.va[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(300);}return C(301);}
function A8y(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(299);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.En[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(300);}return C(301);}
function A1y(b,c,d){var e,f,g,h;e=Re(d,b);if(!Bj(c,e))return C(302);f=0;while(f<N(e)){g=P(e,f);h=b+f|0;if(g!=d.su[h])return C(303);f=f+1|0;}return C(300);}
function AWR(b,c,d){var e,f,g,h;e=AAu(d,b);if(!Bj(c,e))return C(302);f=0;while(f<N(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.op[h>>>1|0]&65535))return C(303);f=f+1|0;}return C(300);}
function Db(b){ACb(C(1),b);}
function AVS(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function AKN(){var a=this;B.call(a);a.cl=null;a.ee=null;a.jL=null;}
function JE(a){var b=new AKN();ASa(b,a);return b;}
function ASa(a,b){a.cl=b;}
function GN(a,b){var c;a.jL=b;c=a.ee;if(c!==null)EP(c,b.cs);c=a.cl.eZ;if(c!==null)Ip(c,b.cs,b.gl);}
function ADM(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.c;h=AVx();i=c.r;j=0;while(j<i){if(f===null){k=(BU(c,j)).bA;l=AEK(FS(Cb(g.h,k)));m=AFf(g.f9);}else{n=f.data;k=n[j].rL.pc;l=!BW(g.f9,n[j].nD)?C(20):AEK(FS(Cb(g.h,k)));m=AFf(n[j].nD);}if(N(l)>153){o=Cd(l,0,150);n=new I;K(n);G(G(n,o),C(304));l=J(n);}if(N(m)>153){n=Cd(m,0,150);o=new I;K(o);G(G(o,n),C(304));m=J(o);}n=DI(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BU(c,j);}if(f!==null){q=new AIe;q.u8=d;q.u9=p;}else{q=new AIf;q.FO=d;q.FN
=o;}ZU(h,m,n,l,q);j=j+1|0;}r=AHI(h);if(a.ee!==null)AFx(a);c=a.cl.F;g=new Ud;f=new AFa;f.s0=a;f.s1=d;AQD(g,c,f);AAW(g,r);d=a.jL;ZL(g,d.cs,d.FY);d=AJg(c);a.ee=d;d.jh=d.jh|1;d=HF(g,c);f=a.jL.cs;Km(d,f.oM,f.qU);ME(a.ee,d);EP(a.ee,a.jL.cs);d=a.ee;f=new I;K(f);G(G(f,C(305)),e);C2(d,J(f));Ee(a.cl,a.ee);d=a.ee;i=(d.Y.k.a+CB(d.U,2.0)|0)+CB(c,2.0)|0;s=(g.eW+g.fz|0)+g.iY|0;t=CB(g.cg,5.0);e=BP(FU(t,b.b,g.cg.bY.b-s|0),FU(i,b.a,g.cg.bY.a-g.df.a|0));ACx(g);Ml(g);i=ER(g);s=g.cu.data.length;i=Ba(i,s)+Ba(g.eH,s+1|0)|0;Y(g.df,
g.k.b,i);i=(g.eW+g.fz|0)+g.iY|0;b=g.cg;s=(b.bY.b-e.b|0)-CB(b,5.0)|0;b=g.cg;t=(b.bY.a-e.a|0)-CB(b,5.0)|0;d=BP(Bh(i,s),Bh(g.df.a,t));Ew(a.ee,e,d);CC(c,g);}
function AFx(a){Ju(a.cl,a.ee);K_(a.ee);a.ee=null;}
function UE(a,b,c){var d,e;d=a.cl;e=a.jL;Ft(d,e.cs,e.gl,b,c);}
function JI(a,b,c,d,e,f,g){UE(a,b,AEB(Kg(a,c,g,d,e,f),b));}
function Kg(a,b,c,d,e,f){var g;g=new Wl;g.hz=a;g.bN=b;g.tO=c;g.kz=e;g.qr=f;g.n7=d;return g;}
function AJY(b){var c;c=new UX;c.DR=b;return c;}
var TD=H(0);
var N5=H(0);
function AKm(){var a=this;CN.call(a);a.cX=null;a.bq=null;a.mm=null;a.Gk=0;a.qp=null;a.eP=null;a.pI=0;a.iX=0.0;a.nZ=null;a.HO=null;a.g0=null;a.W=0;a.dP=0;a.c=null;a.gh=null;a.eh=null;a.fF=null;a.Fe=0;a.DE=0;a.dG=0;a.cO=0;a.cN=0;a.ok=0;a.lx=null;a.gR=null;a.gn=null;a.kR=0;a.lz=0;a.K2=0;a.G0=0;a.mz=0;a.ns=0;a.r9=0;a.e5=0;a.bV=null;a.cc=null;a.ge=null;a.hA=0;a.b6=0;a.GH=null;a.lv=null;a.CU=null;a.xw=null;a.jJ=null;a.kf=null;a.kb=null;a.bE=0;a.dm=null;a.mZ=null;a.vb=0;a.tQ=null;a.x9=null;}
function Hz(a){var b=new AKm();AY0(b,a);return b;}
function AY0(a,b){var c,d,e;FP(a);a.Gk=0;a.qp=O(T,10);a.eP=A5D();a.iX=16.0;a.nZ=C(166);a.c=Bci(O(BE,0),null,null);c=new AIr;c.B4=C6(O(Pb,0));c.Gh=C6(O(Pb,0));c.sT=C6(O(AFo,0));c.yI=C6(O(ACZ,0));c.ym=C6(O(EW,0));c.E1=C6(O(VM,0));a.gh=c;a.fF=O(Go,0);a.lx=BP(1,0);a.gR=G8();a.gn=G8();a.kR=0;a.lz=1;a.mz=1;a.ns=1;a.r9=1;a.e5=3;a.bV=AMF();a.ge=C(306);a.hA=0;a.b6=0;c=C_();BH(c);d=new ABe;d.H_=c;a.lv=d;a.bE=0;c=new ABd;c.sH=a;a.tQ=c;c=new ABc;c.v3=a;a.x9=c;c=b.cl.F;a.cX=c;a.bq=c.b8;a.mm=b;b=AKZ(c.c9);a.dm=b;a.g0=b.ij;e
=a.qp.data;b=new ABb;b.Fi=a;e[1]=b;b=new ABi;b.AX=a;e[2]=b;b=new ABh;b.w3=a;e[3]=b;b=new ABg;b.zD=a;e[4]=b;b=new ABf;b.tA=a;e[5]=b;b=new ABa;b.Df=a;e[6]=b;Mt(a.c,a,(HB(a)).eo);}
function N7(a,b,c,d){K0(a,b,c,d);MF(a);}
function AX$(a,b,c){YW(a,a.nZ,a.iX);Sh(a.dm,c);}
function A_0(a,b,c){a.CU=b;a.xw=c;}
function MF(a){var b,c,d,e;b=a.cc===null?0:1;a.ok=b&&!a.b6?WA(a):0;a.dG=BL(80.0,a.by)+a.ok|0;a.cO=BL(1.0,a.by);a.cN=BL(10.0,a.by);c=Q7(a);d=!a.b6?a.j.b:(a.j.b+a.k.b|0)-c|0;V7(a.bV,d,a.j.a,Bh(c,a.k.b),a.k.a,a.by);if(b)ABE(a);e=a.eP;b=BL(2.0,a.by);e.fC.s.b=b;}
function A45(a){a.pI=1;PR(a);}
function A2E(a){a.pI=0;}
function PR(a){ACL(a.eP,Iv(HB(a)));}
function FD(a,b){var c,d;a.eh=b;c=a.eP;d=b.bF.Gg;BQ(c.fC.bd,d);c=a.gR;d=b.bF;Hv(c,d.ne,d.nk);c=a.gn;b=b.bF;Hv(c,b.ne,b.nk);}
function KA(a){Qx(a,a.dm.dS.qk,a.iX+1.0);}
function LK(a){var b;b=a.iX;if(b<=7.0)return;Qx(a,a.dm.dS.qk,b-1.0);}
function JB(a,b){Qx(a,b,a.iX);}
function AYP(a,b){LL(a.cX,b);}
function Qx(a,b,c){if(a.cX.cr!==0.0){YW(a,b,c);IB(HB(a));}a.iX=c;a.nZ=b;}
function Ny(a){var b,c,d;b=a.dm;c=a.cX.c9;d=a.bq;b.iJ=c;if(b.i0.kF!=c&&b.ew)AIS(b,d);Wh(a.fF);JF(a.bV);PW(a);}
function YW(a,b,c){var d,e,f,g,h,i,j;d=c*a.by;e=a.dm.dS;f=e===null?0.0:e.q6;if(!(d===f&&BW(b,a.nZ))){JF(a.bV);Qq(a.fF);g=a.c.h.C.data;h=g.length;i=0;while(i<h){FN(g[i]);i=i+1|0;}e=a.dm;j=a.bq;e.dS=AOo(b,d,300,600,e.ij,j);e=a.dm;a.HO=e.dS;a.W=VB(e,1.25,a.bq);a.dP=Dd(a.dm.dS.sh);a.eP.fC.s.a=FV(a.dm.dS);h=a.W;e=new I;K(e);b=G(G(e,C(307)),b);Bl(b,32);R(G(Dw(b,d),C(273)),h);$rt_globals.console.info($rt_ustr(J(e)));if(Bf1){h=O3(a.dm.dS,a.W);b=new I;K(b);R(G(b,C(308)),h);$rt_globals.console.info($rt_ustr(J(b)));}a.c.jI
=HR(G0(a),a.c.G,a.bq.cE,a.g0);if(a.cc!==null){OI(a);ABE(a);}Jc(a);PW(a);}}
function A29(a){Qq(a.fF);ACi(a.dm);JF(a.bV);a.cc=BM(a.cc,null);}
function QP(a){return Ba(CJ(a.c.h)+5|0,a.W);}
function Mk(a){return Be(QP(a)-a.k.a|0,0);}
function AFy(a){return Be(a.kR-He(a)|0,0);}
function He(a){var b;b=!a.b6?0:a.dP+a.cN|0;return Be(1,(a.k.b-a.dG|0)-b|0);}
function Q7(a){return a.b6?a.dG:(a.dG-a.cN|0)-a.ok|0;}
function ET(a){return a.k.a;}
function M9(a,b){var c,d,e;c=a.c.h;if(AF7(c)&&b-c.D0>0.03125?1:0){d=a.vb;e=a.c.h.cR;if(d!=e){a.vb=e;AEu(a);}}if(a.W)AFt(a);d=AGe((a.bE+a.K2|0)-a.G0|0,Mk(a));e=a.bE==d?0:1;if(e)G2(a,d);return !AFz(a.eP,b)&&!e&&!a.Gk?0:1;}
function JK(a,b){var c,d;b=AGe(b,AFy(a));c=a.c;d=b==c.eI?0:1;if(d)c.eI=b;if(d){c=a.CU;if(c!==null)c.e();}}
function G2(a,b){var c;if(AOB(a,b)){c=a.xw;if(c!==null)c.e();}}
function AOB(a,b){var c,d;c=AGe(b,Mk(a));d=c==a.bE?0:1;if(d){a.bE=c;a.c.oq=c/a.W;}return d;}
function AMk(a){return BP((Q7(a)+a.cO|0)+a.cN|0,a.W);}
function AZQ(a){return a.W;}
function A7d(a,b){Jr(a);}
function Jr(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=Hw(a.k.a,a.W)+7|0;c=a.fF;if(c.data.length<b)a.fF=ADx(b,c,a.dm,a.Fe,a.DE,a.c.h);B2(a.bq,0);K3(a.bq,a.j,a.k);b=a.W;d=a.eP;e=(b-d.fC.s.a|0)/2|0;b=a.c.jI-(Wj(d)/2|0)|0;d=a.c;f=b-d.eI|0;g=!a.b6?a.dG:(a.cO+a.cN|0)+a.dP|0;XF(a.eP,g+f|0,(e+Ba(d.y,a.W)|0)-a.bE|0);h=CJ(a.c.h);i=Xi(a);j=Xh(a);a.Fe=i;a.DE=j;k=!a.b6?a.j.b+a.dG|0:((a.j.b+a.cO|0)+a.cN|0)+a.dP|0;l=He(a);c=a.c.m_;m=DW(a,40.0);n=i;while(n<=j&&n<h){a:{o=Cb(a.c.h,n);p=AG2(a,n);ABr(p,o,a.bq,a.W,
l,a.c.eI,n,n%a.fF.data.length|0);a.kR=Be(a.kR,GB(o)+m|0);b=a.W;q=Ba(b,n)-a.bE|0;if(c!==null){r=c.data;if(n<r.length){d=r[n];break a;}}d=null;}e=a.j.a+q|0;s=a.bq;g=a.c.eI;t=a.eh;u=APH(Bp(a),n);if(u!==null){if(u.a==(-1))u.a=o.ba;u.b=HR(o,u.b,a.bq.cE,a.g0);u.a=HR(o,u.a,a.bq.cE,a.g0);}v=a.c;AAg(p,e,k,s,l,b,g,t,u,v.kd,v.jV,v.y!=n?0:1,d);n=n+1|0;}s=a.cX.dX;n=i;while(n<=j&&n<h&&a.mz){t=AG2(a,n);q=Ba(a.W,n)-a.bE|0;w=AQj(Bp(a),n);d=a.eh.bF;v=d.vA;x=a.c.y!=n?0:1;b:{if(w)v=d.mw;else{if(c!==null){r=c.data;if(n<r.length
&&r[n]!==null&&!ACu(r[n])){d=a.eh;v=GC(d.dH,d,r[n].ft);break b;}}if(x)v=a.eh.bF.hB;}}ANZ(t,a.bq,k,a.j.a+q|0,a.W,s,a.c.eI,l,v);n=n+1|0;}if(a.lz){y=Bh(j+1|0,h);AP0(a,Ba(a.W,y)-a.bE|0,l);}ALC(a);if(a.ns)AMU(a,i,j,h);if(a.pI&&f>=(( -Wj(a.eP)|0)/2|0)&&APE(a.eP,a.k))AGH(a.eP,a.bq,a.j);ALm(a);AKS(a);Gd(a.bq);AK5(a,i,j);d=a.cc;if(d!==null){d.iW=a.bE;AHR(d,i,j,a.c.y,a.bq,a.eh,a.dm);}}
function AMU(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=a.c.m_;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(!(a.c.y!=b&&g===null)){b:{if(g!==null){h=g.ft;if(h){g=a.eh;i=GC(g.dH,g,h);break b;}}i=a.eh.bF.hB;}g=a.lx;j=a.b6;g.b=!j?(a.cN-a.cO|0)-a.e5|0:((a.cN+a.dP|0)+a.cO|0)-a.e5|0;h=a.W;g.a=h;k=j?0:(a.dG-a.cN|0)+a.cO|0;h=Ba(h,b)-a.bE|0;l=a.bq;m=a.j;Bu(l,m.b+k|0,m.a+h|0,g,i);}b=b+1|0;}}
function AK5(a,b,c){var d,e,f,g;a:{d=Bh(a.k.a,Ba(CJ(a.c.h),a.W)-a.bE|0);e=a.c;f=e.m_;if(f!==null){f=f.data;g=e.y;if(g<f.length){e=f[g];break a;}}e=null;}g=e!==null&&!ACu(e)?(-1):a.c.y;ABz(a.bV,d,a.bE,b,c,g,a.bq,a.eh);}
function Xi(a){return Bh(a.bE/a.W|0,CJ(a.c.h)-1|0);}
function Xh(a){return Bh(((a.bE+ET(a)|0)-1|0)/a.W|0,CJ(a.c.h)-1|0);}
function AYx(a,b){return (Ba(a.W,b)-a.bE|0)+a.j.a|0;}
function AYm(a){return a.j;}
function A1K(a){return a.k;}
function PW(a){ACR(a.bV,a.dm.dS,a.W,a.cX.c9);}
function AG2(a,b){var c;c=a.fF.data;return c[b%c.length|0];}
function Yy(a,b){var c,d,e,f;c=FU(0,N(a.ge),RD(b));if(!c)b=null;else{b=C(67);if(c<0){b=new Bv;X(b);M(b);}if(c!=1){d=b.bn.data.length;if(d&&c){e=B0(Ba(d,c));d=0;f=0;while(f<c){Tw(b,0,N(b),e,d);d=d+N(b)|0;f=f+1|0;}b=N_(e);}else b=BdQ;}}return b;}
function Sq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BI(i);k=Bdh(i).data;KD(j,c);c=0;l=k.length;if(c>l){f=new Bv;X(f);M(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.c.h;o.cR=o.cR+1|0;p=O(Ka,i);j=p.data;l=0;while(l<i){b=e.data;j[l]=AZZ(h[l],n[l],k[l],b[l],f.bA,f.bG);l=l+1|0;}Br(o.j3,p);c=0;while(c<i){b=e.data;P3(o,AHO(h[c],n[c],k[c],b[c]));g.h3(CE(h[c]),b[c]);c=c+1|0;}}
function AQW(a){var b;if(DU(Bp(a)))HO(a);else{b=a.c;Rd(b.h,b.y,b.G);}Jc(a);Fd(a);return 1;}
function D9(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a.hA)return 0;if(DU(Bp(a)))HO(a);c=(ABS(b)).jE;d=c.data;b=a.c;e=b.h;f=b.y;g=b.G;AIY(e,f,g,c);EQ();h=d.length;if(!h)b=BdQ;else{i=0;j=0;while(j<h){i=i+N(d[j])|0;j=j+1|0;}c=B0(i+Ba(h-1|0,N(C(309)))|0);k=c.data;i=0;b=d[0];l=0;while(l<N(b)){j=i+1|0;k[i]=P(b,l);l=l+1|0;i=j;}l=1;while(l<h){m=0;while(m<N(C(309))){j=i+1|0;k[i]=P(C(309),m);m=m+1|0;i=j;}b=d[l];m=0;while(m<N(b)){j=i+1|0;k[i]=P(b,m);m=m+1|0;i=j;}l=l+1|0;}b=N_(c);}G3(e,f,g,0,b);b=a.c;f=b.y;j=(f+h|0)-1|0;C9(a,
j,j!=f?N(d[h-1|0]):b.G+N(d[0])|0,0);G7(a);Fd(a);return 1;}
function HO(a){var b,c,d;b=E3(Bp(a));c=a.c.h;d=Bp(a);Rl(c,d,Yg(c,d));C9(a,b.T,b.bl,0);G7(a);Fd(a);}
function G7(a){var b,c;(Bp(a)).ed=0;b=(Bp(a)).ca;c=a.c;Cn(b,c.y,c.G);b=(Bp(a)).b0;c=a.c;Cn(b,c.y,c.G);}
function AP0(a,b,c){var d,e;d=a.k.a;if(b<d){e=a.cX.dX;e.a=d-b|0;d=a.b6;e.b=!d?c+a.e5|0:c+a.cO|0;d=!d?(a.j.b+a.dG|0)-a.e5|0:(((a.j.b+a.cN|0)+a.dP|0)+a.cO|0)-a.e5|0;Bu(a.bq,d,a.j.a+b|0,e,a.eh.bF.fB);}}
function ALm(a){var b;b=a.b6?a.j.b+a.dP|0:a.j.b+a.k.b|0;HC(a.gR,a.bE,a.j.a,ET(a),QP(a),b,a.dP);b=!a.b6?a.j.b+a.dG|0:((a.j.b+a.cO|0)+a.cN|0)+a.dP|0;Ul(a.gn,a.c.eI,b,He(a),a.kR,a.j.a+ET(a)|0,a.dP);}
function AKS(a){var b,c;b=ADQ(a.gR);c=ADQ(a.gn);if(!(!b&&!c)){B2(a.bq,1);if(b)HQ(a.gR,a.bq);if(c)HQ(a.gn,a.bq);if(b)HW(a.gR,a.bq);if(c)HW(a.gn,a.bq);}}
function ALC(a){var b,c,d,e,f;b=a.lx;c=a.k;b.a=c.a;d=a.cO;b.b=d;d=!a.b6?a.dG-a.cN|0:(c.b-a.bV.dg.b|0)-d|0;c=a.bq;e=a.j;Bu(c,e.b+d|0,e.a,b,a.eh.bF.xM);b=a.lx;d=a.b6;b.b=!d?(a.cN-a.cO|0)-a.e5|0:((a.cN+a.dP|0)+a.cO|0)-a.e5|0;f=d?0:(a.dG-a.cN|0)+a.cO|0;e=a.bq;c=a.j;Bu(e,c.b+f|0,c.a,b,a.eh.bF.fB);}
function AGe(b,c){return Bh(Be(0,b),c);}
function HB(a){return a.cX.b1;}
function GM(a,b,c){var d,e,f;d=E4(b);e=new I;K(e);G(G(e,C(310)),d);$rt_globals.console.info($rt_ustr(J(e)));C9(a,0,0,0);f=new ADm;f.Ad=a;f.Ac=b;f.Ab=c;c=C_();BH(c);d=new ADl;d.EB=c;Yv(b,f,d);}
function KM(a,b,c,d,e){if(JS(a,e))return 1;if(c&&d)return 1;if(c)G2(a,a.bE+((Ba(b,a.W)*12|0)/10|0)|0);else if(!d){Js(a,a.c.y+b|0,e);AGi(a);}return 1;}
function Vi(a,b,c,d){var e,f,g;if(JS(a,d))return 1;e=G0(a);if(!c)f=a.c.G+b|0;else if(b>=0)f=H5(e,a.c.G);else{b=a.c.G;if(!b)f=(-1);else{c=Ly(e,b);if(c>0&&e.ff.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ff.data[c-1|0];}}if(f>e.ba){e=a.c;if((e.y+1|0)<CJ(e.h))C9(a,a.c.y+1|0,0,d);}else if(f>=0)D0(a,f,d);else{e=a.c;b=e.y;if(b>0){g=(Cb(e.h,b-1|0)).ba;C9(a,a.c.y-1|0,g,d);}}AHh(a);return 1;}
function JS(a,b){if(DU(Bp(a))&&!b){G7(a);Jc(a);return 1;}if(!(b&&DU(Bp(a))))G7(a);return 0;}
function C9(a,b,c,d){a.c.G=c;return Js(a,b,d);}
function Js(a,b,c){var d;d=a.c;d.y=FU(0,b,CJ(d.h)-1|0);return D0(a,a.c.G,c);}
function D0(a,b,c){var d,e;a.c.G=FU(0,b,(G0(a)).ba);a.c.jI=a.by===0.0?0:HR(G0(a),a.c.G,a.bq.cE,a.g0);PR(a);Jc(a);if(c)(Bp(a)).ed=1;d=Bp(a);e=a.c;PS(d,e.y,e.G);(Bp(a)).ed=0;return 1;}
function Ob(a,b){var c;c=A37(Bp(a));D0(a,b,0);KX(Bp(a),c);}
function Jc(a){AGi(a);AHh(a);}
function AGi(a){var b,c,d,e,f;b=a.bE;c=b+ET(a)|0;d=a.c.y;e=a.W;d=Ba(d,e);f=d+e|0;if(d<(b+e|0))G2(a,d-e|0);else if(f>(c-e|0))G2(a,(f-ET(a)|0)+a.W|0);}
function AHh(a){var b,c,d,e,f;b=Dd(a.cX.cr*30.0);c=a.c.eI;d=c+He(a)|0;e=a.c.jI;f=e+b|0;if(e<(c+b|0))JK(a,e-b|0);else if(f>(d-b|0))JK(a,(f-He(a)|0)+b|0);}
function JX(a,b){var c,d;C9(a,b.bA,b.bG,0);c=H5(G0(a),a.c.G);Cn((Bp(a)).b0,a.c.y,c);b=(Bp(a)).ca;d=a.c;Cn(b,d.y,d.G);J2(a.c);}
function Gr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.j;e=c-d.b|0;f=FU(0,((b.a-d.a|0)+a.bE|0)/a.W|0,CJ(a.c.h)-1|0);g=!a.b6?a.dG:(a.cO+a.cN|0)+a.dP|0;h=Be(0,(e-g|0)+a.c.eI|0);b=Cb(a.c.h,f);d=a.bq.cE;i=a.g0;if(!(b.fG!==null&&!b.ii))Pi(b,d,i);j=b.fG;e=b.v.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.ba;else{c=AF4(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.v.data.length)k=b.ba;else{j=AEP(b,d,i,c);k=0;e=0;while(e<c){k=k+N(b.v.data[e].z)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i
=j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(Bf2){b=new I;K(b);R(G(R(G(R(G(b,C(311)),e),C(312)),h),C(313)),m);$rt_globals.console.info($rt_ustr(J(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return Ej(f,k);}
function Zh(a,b){var c,d;c=a.c;d=b.bA;c.y=d;c.G=b.bG;c.jI=HR(Cb(c.h,d),a.c.G,a.bq.cE,a.g0);PR(a);}
function G0(a){var b;b=a.c;return Cb(b.h,b.y);}
function Ns(a,b,c,d){var e,f;e=Dd((a.W*4|0)*d/150.0);f=Dd(c);if(e)G2(a,a.bE+e|0);if(f)JK(a,a.c.eI+f|0);return 1;}
function Wm(a,b,c){var d;d=a.cc;if(d!==null&&S4(d,b,c))return 1;(Bp(a)).ed=0;return 1;}
function Z$(a,b,c){var d;if(!DS(a.cX,a))CC(a.cX,a);if(c)return null;d=a.cc;if(d!==null){d=WM(d,b,c,a.cX.cI);if(d!==null)return d;}d=Fn(a.gR,b.i,a.tQ,1);if(d!==null)return d;d=Fn(a.gn,b.i,a.x9,0);if(d!==null)return d;if(Oz(a.bV,b.i))return Bfd;Kk(a);Zh(a,Gr(a,b.i));J2(a.c);if(!b.b_&&!(Bp(a)).ed){b=(Bp(a)).ca;d=a.c;Cn(b,d.y,d.G);}(Bp(a)).ed=1;b=Bp(a);d=a.c;PS(b,d.y,d.G);b=new AGm;b.uO=a;return b;}
function Rh(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){if(!Oz(a.bV,b.i)){e=b.i;f=a.cc;if(!(f!==null&&K9(f,e)?1:0)){switch(d){case 1:if(b.c2){b=b.i;e=Gr(a,b);f=Kf(a.c.h,e.bA,e.bG);g=V9(a,f);h=Qr(a.gh,EE(a.c),IH(a.c));if(h!==null){f=a.c;c=e.bA;d=e.bG;e=new AAL;e.Jm=a;e.Jl=b;e.Jk=g;h.wI(f,c,d,e,a.lv);}else{e=Cz(a.c.h.eF,f);if(e!==null){JX(a,e);c=1;}else{e=Cz(a.c.h.er,f);if(e!==null&&!Fk(e)){if(e.r!=1){ADM(a.mm,b,e,a,g);c=1;}else{JX(a,BU(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Gr(a,b.i)).bA;f=Cb(a.c.h,c);c=HJ(f,a.c.G);d
=H5(f,a.c.G);b=Qg(f,c);if((d-1|0)==f.ba){Cn((Bp(a)).ca,a.c.y,RD(f));Cn((Bp(a)).b0,a.c.y,f.ba);}else{if(b!==null){b=b.z;i=0;c:{while(true){j=b.bn.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.c.G;if(c==i){c=HJ(f,c-1|0);d=H5(f,c);}else{if(d!=i){Tg(Bp(a),a.c.y);break b;}c=HJ(f,d+1|0);d=H5(f,c);}}}Cn((Bp(a)).ca,a.c.y,c);(Bp(a)).ed=1;C9(a,a.c.y,d,0);(Bp(a)).ed=0;Kk(a);}}break a;case 3:break;default:break a;}Tg(Bp(a),a.c.y);AEC(a.c.jl);Kk(a);break a;}}return 1;}}return 1;}
function A21(a,b){return My(a,b,a.cX.cI);}
function My(a,b,c){var d,e,f;if(Fq(a.gR,b.i,c))return 1;if(Fq(a.gn,b.i,c))return 1;d=a.cc;if(d!==null&&UV(d,b,c))return 1;if(Oz(a.bV,b.i)&&FX(c)?1:0)return 1;d=b.i;e=!a.b6?a.dG:(a.cN+a.cO|0)+a.dP|0;f=a.j;if(!APd(d,f.b+e|0,f.a,He(a),ET(a)))return FX(c);if(b.c2){d=Gr(a,b.i);d.bG=HJ(Cb(a.c.h,d.bA),d.bG);b=a.c.h;if(!Ix(b.eF,d)&&!Ix(b.er,d)?0:1)return D1(c,C(243));}return D1(c,C(244));}
function A_B(a,b){var c,d,e,f,g;c=a.mZ;if(c!==null){if(c.bs(b))return 1;if(b.mL)return 0;}d=b.c2;if(d&&b.bh==65){d=CJ(a.c.h)-1|0;e=Hy(a.c.h,d);Cn((Bp(a)).ca,0,0);Cn((Bp(a)).b0,CJ(a.c.h)-1|0,e);return 1;}if(!a.hA&&d&&b.bh==90){if(DU(Bp(a)))G7(a);b=a.c.h;b.cR=b.cR+1|0;c=b.j3;e=c.r;if(!e)c=null;else{f=(Fs(c,e-1|0)).data;c=AAC(b,f[0]);d=1;while(d<f.length){AAC(b,f[d]);d=d+1|0;}}if(c!==null){C9(a,c.b,c.a,0);Fd(a);}return 1;}if(!d&&!b.dV){if(Bj(b.e6,C(314))){D9(a,C(315));D0(a,a.c.G-1|0,0);d=1;}else if(Bj(b.e6,C(316)))
{D9(a,C(317));D0(a,a.c.G-1|0,0);d=1;}else if(Bj(b.e6,C(39))){D9(a,C(23));D0(a,a.c.G-1|0,0);d=1;}else if(Bj(b.e6,C(318))){D9(a,C(319));D0(a,a.c.G-1|0,0);d=1;}else if(Bj(b.e6,C(320))){D9(a,C(321));D0(a,a.c.G-1|0,0);d=1;}else if(!Bj(b.e6,C(322)))d=0;else{D9(a,C(323));D0(a,a.c.G-1|0,0);d=1;}}else d=0;if(d)return 1;a:{if(!(!b.dV&&!b.c2)){e=b.bh;if(e>=48&&e<=57){d=e-48|0;c=a.qp.data[d];if(c!==null)c.e();d=1;break a;}}d=0;}if(d)return 1;b:{switch(b.bh){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:d
=0;break b;}d=1;}if(d)return 1;if(AOO(a,b))return 1;if(ALh(a,b))return 1;d=b.c2;if(d&&b.bh==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}e=b.bh;g=112<=e&&e<=123?1:0;if(!g&&e!=27){if(!d&&!b.dV&&!b.jW)return N(b.e6)>0&&D9(a,b.e6)?1:0;return 0;}return 0;}
function AFt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=a.c;c=Xi(a);d=Xh(a);if(b.fV!=3&&b.hM==3){e=Xp(b.rv);f=new AIM;f.vk=c;f.vj=d;g=new Uf;g.u0=f;while(!g.oC&&APX(e,g)){}if(!g.oC&&Bj(C(324),EE(b))){c=Be(0,c-100|0);d=Bh(CJ(b.h)-1|0,d+100|0);Br(b.rv,BP(c,d));h=BI(3);i=h.data;i[0]=Hp(b.h,c);e=b.h;j=0;d=Bh(d+1|0,e.C.data.length);k=0;while(k<d){j=j+Hy(e,k)|0;if(k!=(e.C.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Ez=Fc();e=b.fR;l=new AHi;l.uQ=b;i=O(B,3);m=i.data;m[0]=F6(b.h);m[1]=h;n=b.h.d0;b=BO();AFI(n,n.dW,
b);h=BI(3*b.r|0);o=h.data;p=0;k=0;q=o.length;while(p<q){g=BU(b,k);j=p+1|0;o[p]=g.cn;r=j+1|0;o[j]=g.ck;p=r+1|0;o[r]=g.gN;k=k+1|0;}m[2]=h;Ef(e,1,l,C(325),i);}}}
function AEu(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.c;if(b.gM){c=FO(b);d=new I;K(d);G(G(d,c),C(326));$rt_globals.console.info($rt_ustr(J(d)));}c=EE(b);d=b.h.d0;d=Tb(d,d.dW);if(d===null){Qi(b);RJ(b.h);b=b.gA;if(b!==null)Ke(b);}else{e=DK(d);f=Dy(d);g=DD([e,f,d.ci.gN]);h=F6(b.h);i=BI(1);i.data[0]=ANj(c);c=b.h.fN;if(c.go===null){j=BI(0);k=B0(0);}else{c=A1n(A3X(d.cL,c.fS),d);AAU(c);j=c.qO;k=c.oF;}l=b.h.cR;d=b.fR;c=new QY;c.EG=b;c.EF=e;c.EE=f;m=O(B,6);n=m.data;n[0]=h;n[1]=i;n[2]=g;g=BI(1);g.data[0]=l;n[3]=g;n[4]=j;n[5]
=k;Ef(d,1,c,C(327),m);}}
function Kd(a,b,c){var d,e,f,g,h,i;if(c&&a.hA)return 0;d=E3(Bp(a));e=d.T;if(DU(Bp(a))){f=a.c.h;g=Bp(a);h=Yg(f,g);if(c)Rl(f,g,h);if(c){C9(a,d.T,d.bl,0);G7(a);Fd(a);}}else{h=Gp(FS(a.c.h.C.data[e]),C(309));i=Bh(CJ(a.c.h)-1|0,e);Cn((Bp(a)).b0,i,0);if(e>=(CJ(a.c.h)-1|0))Cn((Bp(a)).b0,i,Hy(a.c.h,i));else Cn((Bp(a)).ca,i+1|0,0);if(c)HO(a);else C9(a,e,0,0);}b.g(h);return 1;}
function A0N(a){var b;b=new ACd;b.B$=a;return b;}
function ALh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(a.hA)return 0;a:{switch(b.bh){case 8:if(DU(Bp(a))){HO(a);c=1;}else{b=a.c;d=b.G;if(!d&&!b.y)c=1;else{if(d){e=b.y;c=d-1|0;Rd(b.h,e,c);}else{e=b.y-1|0;c=Hy(b.h,e);b=a.c.h;Nb(b,e);G3(b,e,Hy(b,e),1,C(309));}Fd(a);c=C9(a,e,c,0);}}break a;case 9:if(!b.b_){if(!DU(Bp(a)))D9(a,a.ge);else{f=E3(Bp(a));g=G4(Bp(a));c=g.T;d=f.T;e=(c-d|0)+1|0;h=BI(e);i=h.data;j=O(BE,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.ge;d=d+1|0;e=l;}b=new AHo;m=a.c;APa(b,m.y,m.G);m=new AE0;m.C9
=a;Sq(a,h,0,0,j,b,m);f.bl=f.bl+N(a.ge)|0;g.bl=g.bl+N(a.ge)|0;Ob(a,a.c.G+N(a.ge)|0);Fd(a);}c=1;}else b:{if(!DU(Bp(a))){b=a.c;f=Cb(b.h,b.y);if(f.v.data.length>0){g=Yy(a,f);if(g===null){c=1;break b;}m=a.c;n=m.h;e=m.y;b=Ej(e,m.G);n.cR=n.cR+1|0;m=AZZ(e,0,1,g,b.bA,b.bG);b=n.j3;h=O(Ka,1);h.data[0]=m;Br(b,h);P3(n,m);IP(f,0,N(g));Ob(a,a.c.G-N(g)|0);}}else{b=E3(Bp(a));f=G4(Bp(a));c=f.T;d=b.T;c=(c-d|0)+1|0;k=BI(c);j=k.data;o=O(BE,c);i=o.data;g=a.c;l=g.G;p=g.y;q=0;while(d<=f.T){g=Cb(a.c.h,d);if(g.v.data.length>0){g=Yy(a,
g);if(g!==null){j[q]=d;c=q+1|0;i[q]=g;q=c;}}d=d+1|0;}h=Kp(k,q);j=C0(o,q);r=0;while(r<q){k=h.data;g=j.data[r];s=k[r];if(s==b.T)b.bl=Be(0,b.bl-N(g)|0);if(s==f.T){f.bl=Be(0,f.bl-N(g)|0);Ob(a,a.c.G-N(g)|0);}r=r+1|0;}b=Ej(p,l);f=new Uo;f.uU=a;Sq(a,h,0,1,j,b,f);}Fd(a);c=1;}break a;case 13:if(DU(Bp(a)))HO(a);b=a.c;FN(Cb(b.h,b.y));b=a.c;AQp(b.h,b.y,b.G);Fd(a);c=C9(a,a.c.y+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AQW(a);}return c;}
function AOO(a,b){var c,d,e,f;a:{switch(b.bh){case 33:c=b.c2?Js(a,Hw(a.bE,a.W),b.b_):KM(a,2-Yp(ET(a),a.W)|0,0,b.dV,b.b_);break a;case 34:c=!b.c2?KM(a,Yp(ET(a),a.W)-2|0,0,b.dV,b.b_):Js(a,((a.bE+ET(a)|0)/a.W|0)-1|0,b.b_);break a;case 35:if(!JS(a,b.b_)&&!D0(a,(G0(a)).ba,b.b_)){c=0;break a;}c=1;break a;case 36:if(!JS(a,b.b_)&&!D0(a,0,b.b_)){c=0;break a;}c=1;break a;case 37:c=b.c2;if(c&&b.dV){Kk(a);d=a.c.jl;e=d.eA;if(e<=0)d=null;else{f=d.gb.data;c=e-1|0;d.eA=c;d=f[c];}if(d===null)c=1;else{C9(a,NL(d),Me(d),0);KX(Bp(a),
d.qK);c=1;}break a;}c=Vi(a,(-1),c,b.b_);break a;case 38:c=KM(a,(-1),b.c2,b.dV,b.b_);break a;case 39:c=b.c2;if(c&&b.dV){d=a.c.jl;e=d.eA;if(e==(d.f8-1|0))d=null;else{f=d.gb.data;c=e+1|0;d.eA=c;d=f[c];}if(d===null)c=1;else{C9(a,NL(d),Me(d),0);KX(Bp(a),d.qK);c=1;}break a;}c=Vi(a,1,c,b.b_);break a;case 40:c=KM(a,1,b.c2,b.dV,b.b_);break a;default:}c=0;}if(c&&b.b_){b=(Bp(a)).b0;d=a.c;Cn(b,d.y,d.G);}if(c)J2(a.c);return c;}
function Kk(a){var b,c,d,e,f,g,h;b=a.c;c=b.jl;d=c.eA;c=d<0?null:c.gb.data[d];if(c!==null&&b.y==NL(c)&&a.c.G==Me(c))return;c=a.c;e=c.jl;b=new PC;d=c.y;f=c.G;c=Bp(a);b.rI=Ej(d,f);g=A37(c);b.qK=g;g.ed=0;f=e.eA;h=e.f8;if(f==(h-1|0))AG3(e,b);else{d=f+1|0;while(d<h){AEC(e);d=d+1|0;}AG3(e,b);}e.eA=e.eA+1|0;}
function Fd(a){a.c.h.D0=Iv(HB(a));}
function I6(a,b){var c,d,e,f,g;a.GH=null;Nl(a.bV,null);c=a.cc;if(c!==null)H1(c,a.bV.iT);d=a.c;a.c=b;Mt(d,null,null);Mt(b,a,(HB(a)).eo);e=(B7(a.gh.ym)).data;f=e.length;g=0;while(g<f){e[g].h3(d,b);g=g+1|0;}a.bE=FW(b.oq*a.W);}
function V9(a,b){var c;c=NF(a.c.h,b);if(c===null)return C(20);return c.z;}
function IE(a,b){var c,d,e,f,g;a.c.m_=b;if(b===null){Bb(Bi(),C(328));Nl(a.bV,null);c=a.cc;if(c!==null)H1(c,a.bV.iT);}else{b=b.data;d=C$(b.length);e=d.data;f=0;g=e.length;while(f<g){c=b[f];e[f]=c===null?0:c.ft<<24>>24;f=f+1|0;}Nl(a.bV,d);c=a.cc;if(c!==null)H1(c,d);}}
function J0(a,b){a.c.sJ=b;}
function Bp(a){return a.c.tV;}
function Ke(a){var b;b=a.jJ;if(b!==null)b.g(a);}
function A4p(a){var b,c,d;b=a.c.f9;c=AJM(a);if(b!==null){b=b.gQ;d=new I;K(d);G(G(G(d,c),C(329)),b);c=J(d);}return c;}
function OI(a){P4(a.cc,a.W,a.b6?0:1);}
function ABE(a){var b,c;if(a.b6)b=a.bV.eO.b;else{c=a.bV;b=c.eO.b+c.dg.b|0;}ACw(a.cc,b,a.bV.eO.a,WA(a),a.bV.dg.a,a.by);a.cc.iW=a.bE;}
function WA(a){return KP(a.W,15,16);}
function I2(a,b,c){var d;if(a.cc===null){d=new Ql;d.ex=new Bg;d.eJ=new Bg;d.iE=new Bg;d.wn=new Bg;d.f$=(-1);d.im=(-1);d.pD=0;a.cc=d;if(a.by!==0.0)OI(a);MF(a);}RK(a.cc,b,c);H1(a.cc,a.bV.iT);}
function Q4(){B.call(this);this.wO=null;}
function A$5(a,b){var c;c=a.wO;if(c.bP===b)c.lb=c.lb|1;if(c.ch===b)c.lb=c.lb|2;if((c.lb&3)==3)RI(c);}
var DH=H(0);
function Q3(){B.call(this);this.CF=null;}
function AQ_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=a.CF;f=c.bf;g=d.bf;if(e.d5!==null){h=b!==e.bP?0:1;f=(Lx(b.c.h,f)).b;g=(Lx(b.c.h,g)).b;b=e.d5;f=Eb(b,f,h);while(true){i=f-1|0;if(i<0)break;c=b.be.data[i];if(!h?c.bI:c.bJ)break;f=f+(-1)|0;}b=e.d5;j=Eb(b,g,h);while(true){g=j+1|0;k=b.be.data;if(g>=k.length)break;c=k[g];if(!h?c.bI:c.bJ)break;j=g;}if(f&&e.d5.be.data[f].eg)f=f+(-1)|0;k=e.d5.be.data;if(j==(k.length-1|0))g=j;else if(!k[j].eg)g=j;b=k[f];c=k[g];h=b.bM;f=Fx(c);g=b.bL;i=FB(c);b=e.bP.c.h;c=e.ch.c.h;l=new ABp;l.Be
=e;l.Bf=h;l.Bg=f;l.Bh=g;l.Bi=i;d=e.ip.cl.F.b1.eo;k=KJ(b,h,f);m=KJ(c,g,i);n=AIG(b,h,f);o=AIG(c,g,i);b=new Wa;b.Al=l;Ef(d,1,b,C(330),L(B,[k,n,m,o]));}}
function Q6(){B.call(this);this.Fc=null;}
function AZY(a,b,c,d){Zf(a.Fc,b,c,d.gm);}
function Q5(){B.call(this);this.Ef=null;}
function AYf(a,b,c,d){Zf(a.Ef,b,c,d.gm);}
function ANl(){var a=this;B.call(a);a.nf=null;a.p_=null;a.h6=null;}
function AMw(a,b){var c=new ANl();A4h(c,a,b);return c;}
function A4h(a,b,c){var d,e;a.nf=b;a.p_=c;d=null;e=new X$;e.u2=a;b.rx(d,e);b=null;d=new X_;d.t0=a;c.rx(b,d);}
function ACM(a,b,c){var d,e,f,g,h,i,j;d=a.h6;if(d!==null&&d.be!==null){e=b!==a.nf?0:1;f=b.mQ();g=(b.l0()+f|0)/2|0;h=g-f|0;d=a.h6;d=d.be.data[Eb(d,g,e)];i=g-(!e?d.bL:d.bM)|0;j= -(b.iZ(f)-(b.mq()).a|0)|0;c.sq(Ba(((!e?d.bM:d.bL)+i|0)-h|0,c.rH())+j|0);return;}}
function AKh(){var a=this;CN.call(a);a.jX=null;a.mT=null;a.mU=null;a.mR=null;a.mS=null;a.fe=null;a.hE=null;a.hF=null;a.jD=null;}
function A3C(a){var b=new AKh();AS$(b,a);return b;}
function AS$(a,b){FP(a);a.mT=new Bg;a.mU=new Bg;a.mR=new Bg;a.mS=new Bg;a.jX=b;}
function Qb(a,b,c){a.hE=b;a.hF=c;}
function ALG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=a.j;Bu(b,c.b,c.a,a.k,a.jD.bF.fB);if(a.fe===null)return;d=CB(a.jX,2.0);e=Eb(a.fe,a.hE.mQ(),1);f=Eb(a.fe,a.hE.l0(),1);g=Eb(a.fe,a.hF.mQ(),0);h=Eb(a.fe,a.hF.l0(),0);i=Bh(e,g);j=Be(f,h);g=BS(i,j);if(g<=0)B2(b,1);k=a.hE.mq();l=a.hE.nu();m=a.hF.nu();n=a.hF.mq();o=a.jX.sg;while(i<=j){p=a.fe.be.data[i];if(p.eg){q=a.hE.iZ(p.bM);r=a.hE.iZ(Fx(p));s=a.hF.iZ(p.bL);t=a.hF.iZ(FB(p));Y(a.mT,a.j.b,q);Y(a.mR,a.j.b,r);Y(a.mU,a.j.b+a.k.b|0,s);Y(a.mS,a.j.b+a.k.b|0,
t);u=Be(Bh(q,s),a.j.a);v=Bh(Be(r,t),a.j.a+a.k.a|0);if(v>u){Y(o,a.k.b,v-u|0);c=a.jD;c=GC(c.dH,c,p.eg);if(q==r)TW(a,b,q,s,d,k.b,l.b,c,a.mT,a.mR);if(s==t)TW(a,b,s,q,d,n.b,m.b,c,a.mU,a.mS);AI5(b,a.j.b,u,o,a.mT,a.mU,a.mR,a.mS,c);}}i=i+1|0;}if(g<=0)B2(b,0);}
function TW(a,b,c,d,e,f,g,h,i,j){var k;k=a.jX.dX;Y(k,g,e);if(d>=c)j.a=j.a+e|0;else{c=c-e|0;i.a=i.a-e|0;}Bu(b,f,c,k,h);}
function TV(){B.call(this);this.tN=null;}
function AZp(a,b){H_(a.tN,b);}
function TS(){B.call(this);this.wh=null;}
function AU$(a,b,c,d){H_(a.wh,b);}
function TT(){B.call(this);this.Ch=null;}
function A3Z(a,b,c,d){Uv(a.Ch,b,c,d.gm);}
function TM(){B.call(this);this.EV=null;}
function A$e(a,b){H_(a.EV,b);}
function TN(){B.call(this);this.DW=null;}
function AXl(a,b,c,d){H_(a.DW,b);}
function TK(){B.call(this);this.v4=null;}
function A4d(a,b,c,d){Uv(a.v4,b,c,d.gm);}
function TL(){B.call(this);this.yH=null;}
function A8T(a,b){return ANw(a.yH,b);}
function Hk(){var a=this;B.call(a);a.qP=null;a.u6=null;a.uo=null;}
function Bf3(a,b){var c=new Hk();HI(c,a,b);return c;}
function HI(a,b,c){var d;d=null;a.qP=b.bv;a.u6=d;a.uo=c;}
function AW3(a,b){var c;if(!AG1(b))return 0;c=a.u6;if(c!==null&&b.b_)G9(a.qP,c);else FQ(a.qP,a.uo);return 1;}
function AG1(b){return b.c2&&b.bh==79?1:0;}
function TH(){B.call(this);this.xP=null;}
function A$i(a,b){var c,d,e;c=a.xP;d=DS(c.p,c.I)?c.I:!DS(c.p,c.M)?null:c.M;if(d!==null){e=new AB2;e.wx=c;e.wy=d;e.wz=b;GM(d,b,e);c.iy=null;c.ol.h6=null;c.gW.fe=null;}}
function TI(){B.call(this);this.z9=null;}
function AWH(a,b){return AN0(a.z9,b);}
function ACB(){B.call(this);this.t_=null;}
function A62(a,b){AOL(a.t_,b);}
function ACA(){B.call(this);this.FM=null;}
function AXs(a,b){return AJA(a.FM,b);}
var AMm=H(0);
function AP8(b){I6(b,Bcb(C(331),C(324),AGG(C(332))));}
function W_(){B.call(this);this.ul=null;}
function A8C(a,b){var c,d;c=a.ul;if(b.bh==121){WU(c.A.bv,C(242),new U9);d=1;}else if(AFQ(b)&&b.bh==80){Bb(Bi(),C(333));N2(c.dA.c);d=1;}else d=0;return d;}
function LB(){var a=this;B.call(a);a.x=null;a.s=null;a.bd=null;a.bz=null;}
function MZ(){var a=new LB();AGI(a);return a;}
function Wq(a,b,c,d){var e=new LB();ASY(e,a,b,c,d);return e;}
function AGI(a){a.x=new Bg;a.s=new Bg;a.bd=new B_;a.bz=new B_;}
function ASY(a,b,c,d,e){a.x=new Bg;a.s=new Bg;a.bd=new B_;a.bz=new B_;If(a,b,c,d,e);}
function If(a,b,c,d,e){Y(a.x,b,c);Y(a.s,d,e);}
function AFB(a){Y(a.s,0,0);}
function MG(a){var b;b=a.s;return Ba(b.b,b.a)?0:1;}
function F7(a,b){return Gm(b,a.x,a.s);}
function Ph(a,b,c,d){var e;e=a.x;Bu(b,e.b+c|0,e.a+d|0,a.s,a.bd);}
function Zu(a,b,c,d,e,f){var g,h,i,j;g=a.x;d=g.b+d|0;e=g.a+e|0;g=a.s;h=a.bz;i=a.bd;Ho(b,b.ka);HE(b.ka,b.bi,d,e,g,b.dx);PQ(b.ka,b.bi,c);g=b.ka;j=b.bi;Gz(j,g.zn,h);Gz(j,g.zl,i);c=g.vz;j.uniform2f(c,f,0.0);G1(b);}
function AMS(){LB.call(this);this.ei=null;}
function Mc(){var a=new AMS();A_F(a);return a;}
function Je(a,b,c,d){var e=new AMS();A6p(e,a,b,c,d);return e;}
function A_F(a){AGI(a);a.ei=new B_;}
function A6p(a,b,c,d,e){AGI(a);a.ei=new B_;If(a,b,c,d,e);}
function GV(a){var b,c;b=a.s;c=a.ei;Y(b,c.bm-c.bx|0,c.bR-c.bC|0);}
function GL(a,b){JC(a,0,0,BX(b),C7(b));}
function JC(a,b,c,d,e){CA(a.ei,b,c,d,e);}
function Fm(a,b,c,d,e){var f;f=a.x;D$(b,f.b+d|0,f.a+e|0,a.s,a.ei,c,a.bd,a.bz,0);}
function V_(a,b,c,d){var e;e=a.x;D$(b,e.b,e.a,a.s,a.ei,c,a.bd,a.bz,d);}
function JA(a,b,c,d,e,f,g){D$(b,c,d,a.s,a.ei,e,!f?a.bd:a.bz,!f?a.bz:a.bd,g);}
function IF(a,b){BQ(a.bd,b);}
function Ge(a,b){BQ(a.bz,b);}
function AJ_(){var a=this;B.call(a);a.fC=null;a.q5=0.0;a.jR=0.0;a.ix=0;}
function A5D(){var a=new AJ_();AYv(a);return a;}
function AYv(a){var b;b=Wq(0,0,2,20);a.fC=b;a.q5=0.5;a.jR=0.0;QG(187,b.bd);}
function Wj(a){return a.fC.s.b;}
function AFz(a,b){var c,d;a:{c=a.ix;if(b>a.jR)while(true){d=a.jR+a.q5;a.jR=d;a.ix=a.ix?0:1;if(b>d)continue;else break a;}}return a.ix==c?0:1;}
function XF(a,b,c){Y(a.fC.x,b,c);}
function ACL(a,b){a.jR=b+a.q5*1.25;a.ix=1;}
function APE(a,b){return AJJ(a.fC.x,0,0,b);}
function AGH(a,b,c){if(a.ix)Ph(a.fC,b,c.b,c.a);}
function Xl(){B.call(this);this.gf=null;}
function A3x(a,b){var c,d,e,f,g,h;c=b.i;d=c.b;e=a.gf.iM;f=e.s;d=d-f.b|0;g=c.a-f.a|0;Y(e.x,d,g);c=a.gf;e=c.A.bv;b=b.i;d=0;a:{while(true){h=c.kk.data;if(d>=h.length)break;if(F7(h[d],b)){b=c.sI.data[d];break a;}d=d+1|0;}b=null;}AEx(e,b);return 1;}
function ARs(a,b,c,d){if(!c&&d==2){b=a.gf;VG(b,b.e7);}return 1;}
function A3o(a,b,c){var d,e;d=Bi();e=new I;K(e);R(G(e,C(334)),c);Bb(d,J(e));if(c)return null;d=b.i;e=!F7(a.gf.e7,d)?null:d;XF(a.gf.kX,d.b,d.a);b=a.gf;ACL(b.kX,Iv(b.A.bv));if(e===null)b=Bfd;else{b=new AGT;b.vq=a;b.vr=e;}return b;}
function A2I(a,b,c){var d;b=Bi();d=new I;K(d);R(G(d,C(335)),c);Bb(b,J(d));return 1;}
function AC5(){B.call(this);this.Gs=null;}
function A5o(a,b){return AAP(a.Gs,b);}
function AC4(){B.call(this);this.uT=null;}
function AUp(a,b){return AAP(a.uT,b);}
function AC3(){B.call(this);this.Ic=null;}
function A6y(a,b,c){var d,e;Bb(Bi(),C(336));d=!c?C(337):C(57);e=new I;K(e);G(G(G(e,C(338)),d),C(339));P9(b,J(e));return 1;}
function AC2(){B.call(this);this.Jb=null;}
function A2e(a){Bb(Bi(),C(340));}
function AC1(){B.call(this);this.JZ=null;}
function AX1(a,b){Bb(Bi(),C(341));return 1;}
function AC0(){B.call(this);this.E3=null;}
function A$N(a,b,c,d){var e,f,g;b=a.E3;e=( -d|0)/10|0;b=b.e7;f=b.s;f.b=f.b+e|0;f.a=f.a+e|0;b=b.x;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
var ALP=H(0);
function Ea(b){return !b?L(BE,[C(166),C(177),C(342)]):L(BE,[C(166),C(177),C(342),C(35)]);}
function AAj(){B.call(this);this.nT=null;}
function AT2(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.nT.d7;e=Ei();f=e-0.5+(Ei()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+Ei()*0.3;h=0.5+Ei()*0.5;Jz(e,g,h,1.0,b.bd);Jz(f,g,h,1.0,b.bz);b=a.nT;BQ(b.eM.bd,b.d7.bd);b=a.nT;BQ(b.eM.bz,b.d7.bz);}return 1;}
function AAd(){var a=this;B.call(a);a.pO=null;a.qj=null;}
function AK9(){var a=this;B.call(a);a.g8=null;a.cQ=null;a.h2=null;a.jd=null;a.p0=null;a.dc=null;a.i1=null;a.dI=0;a.g_=0;a.qi=0;a.lR=0;a.l8=0;a.i9=0;a.mp=null;a.rb=null;a.zS=null;a.pK=null;}
function AO2(){var a=new AK9();AZF(a);return a;}
function AZF(a){a.cQ=MZ();a.h2=new Bg;a.jd=new Bg;a.dc=Bf4;a.lR=(-1);a.l8=1;}
function O8(a,b){P2(a);a.dc=b;}
function KQ(a,b,c){a.g8=b;AHp(a,c);P2(a);}
function KS(a,b){var c;a.p0=b.m8;c=b.rf.r1;BQ(a.cQ.bd,c);c=b.kB.k4;BQ(a.cQ.bz,c);a.pK=b.rf;}
function OA(a){a.i1=BM(a.i1,null);Y(a.h2,0,0);a.dc=Bf4;a.lR=(-1);AFB(a.cQ);}
function AHp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Lz(b);d=b.cr;BH(a.g8);Cv(c,a.g8);e=O4(a.g8,1.25);f=0;a.dI=BL(2.0,d);a.g_=BL(3.0,d);a.qi=BL(12.0,d);g=0;h=a.dc.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=MI(c,l.px);n=a.qi;n=(n+m|0)+n|0;f=Be(f,n);b=l.f7;b.b=g;b.a=0;b=l.fi;b.b=n;b.a=e;CA(l.lL,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.h2;b.b=g;b.a=e;b=a.cQ.s;n=a.i9;if(!n){m=a.dI;m=(g+m|0)+Ba(m,a.dc.data.length)|0;}else m=(f+(a.dI*2|0)|0)+(a.g_*2|0)|0;b.b=m;if(!n)e=e+(a.dI*2|0)|0;else{n=a.dI;e=(Ba(e+n|0,a.dc.data.length)+n
|0)+(a.g_*2|0)|0;}b.a=e;}
function O5(a,b,c){var d,e,f,g,h,i,j;Y(a.cQ.x,b,c);d=a.dI+a.g_|0;e=a.dc.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.f7;j.b=b+d|0;j.a=c+h|0;if(!a.i9){if(!i.fi.b)AJn();d=d+(i.fi.b+a.dI|0)|0;}else{if(!i.fi.a)AJn();h=h+(i.fi.a+a.dI|0)|0;}g=g+1|0;}}
function AJn(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ff(a){var b,c;b=a.h2;if(b.b&&b.a)return a.cQ.s;c=new Bx;Bd(c,C(343));M(c);}
function P2(a){a.l8=1;}
function NR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.b8;if(!a.dc.data.length)return;if(a.i1===null)a.i1=Dc(c);a:{if(!a.l8){d=a.h2;if(Ba(d.b,d.a))break a;}d=a.h2;if(!Ba(d.b,d.a))AHp(a,b);d=a.h2;e=d.b;f=d.a;if(!Ba(e,f))return;d=Ex(c,e,f,b.c9);Cv(d,a.g8);g=O4(a.g8,0.125);h=a.g8;i=h.fa;g=g+i-(i+h.fr)/16.0;j=a.dc.data;e=j.length;f=0;while(f<e){h=j[f];B4(d,h.px,h.lL.bx+a.qi,g);f=f+1|0;}C5(a.i1,d);a.l8=0;Fe(d);}if(!MG(a.cQ)){d=a.cQ;AOe(c,d.s,d.x,d.bz,a.dI,a.jd);d=a.cQ;h=d.s;k=d.x;d=d.bd;e=a.dI;l=a.jd;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;Bu(c,k.b+e|0,k.a+e|0,l,d);if(a.i9){d=a.cQ;APG(c,d.s,d.x,0,0,ACg(a.p0,b.cr),a.p0.p5,a.jd);}}j=a.dc.data;m=j.length;n=0;while(n<m){d=j[n];h=d.f7;e=h.b;f=h.a;h=d.fi;k=d.lL;l=a.i1;o=a.pK;D$(c,e,f,h,k,l,o.ud,YT(o,d.mH),b.c9);n=n+1|0;}b:{if(a.i9){j=a.dc.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.jd;e=(a.cQ.s.b-(a.dI*2|0)|0)-(a.g_*2|0)|0;h=d.fi;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.f7;Bu(c,k.b+h.b|0,k.a,b,YT(a.pK,d.mH));}p=p+1|0;}}}}
function PE(a,b,c){var d,e,f,g,h,i;d=F7(a.cQ,b);e=!d?(-1):RL(a,b);f=a.lR;if(f!=e){if(f>=0){g=a.dc.data[f];g.mH=0;if(a.zS!==null){h=Bi();g=BT(g);i=new I;K(i);G(G(R(G(i,C(344)),f),C(345)),g);Bb(h,J(i));}}if(e>=0){h=a.dc.data[e];g=a.rb;if(g!==null)g.zX(b,e,h);h.mH=1;}a.lR=e;}return d&&FX(c)?1:0;}
function P8(a,b,c,d){var e,f;e=RL(a,b);if(e>=0){f=a.dc.data[e];if(!AGL(f))f.oH.e();}return 1;}
function RL(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.dc.data;if(c>=d.length)return (-1);e=d[c];if(Gm(b,e.f7,e.fi))return c;if(a.i9){f=e.f7;g=f.b;e=e.fi;h=e.b;g=g+h|0;i=f.a;f=a.jd;f.b=(a.cQ.s.b-(a.dI*2|0)|0)-h|0;f.a=e.a;if(AJJ(b,g,i,f))break;}c=c+1|0;}return c;}
function AIZ(a){a.i9=1;}
function AGd(){B.call(this);this.xG=null;}
function AWS(a,b){var c;c=a.xG;if(b.bh==32)OA(c.eq);return 0;}
function AF_(){B.call(this);this.yF=null;}
function AZy(a,b){var c,d,e,f;c=a.yF;d=ADi(c.p);Ip(d,Ga(),c.qD);b=b.i;e=UG(4);f=new X9;f.Ie=c;Oh(d,b,e,f);II(c.t,d);return 1;}
var AGa=H();
function Bav(a){Bb(Bi(),C(346));}
var AGb=H();
function ASd(a){Bb(Bi(),C(347));}
function Bw(){var a=this;B.call(a);a.oH=null;a.lL=null;a.f7=null;a.fi=null;a.o7=null;a.wF=null;a.mH=0;a.px=null;}
function AAZ(a,b){var c=new Bw();B8(c,a,b);return c;}
function BcD(a,b,c,d){var e=new Bw();AOE(e,a,b,c,d);return e;}
function B8(a,b,c){AOE(a,b,c,null,null);}
function AOE(a,b,c,d,e){a.lL=new B_;a.f7=new Bg;a.fi=new Bg;a.px=c;a.wF=e;a.oH=b;a.o7=d;}
function AGL(a){return a.o7===null?0:1;}
function XX(){B.call(this);this.G9=null;}
function A1w(a,b){return b.lc&&b.bh==32?1:0;}
function XY(){B.call(this);this.Fq=null;}
function ART(a,b){var c,d,e,f,g,h;c=a.Fq;d=ADi(c.p);Ip(d,Ga(),DT(C(166),25.0));b=b.i;e=O(Bw,1);f=e.data;g=new Bw;h=new AIR;h.FK=c;B8(g,h,C(348));f[0]=g;Oh(d,b,CT(e),Bf5);II(c.t,d);return 1;}
var J_=H(0);
function ANJ(){var a=this;E5.call(a);a.cG=null;a.r=0;}
function BO(){var a=new ANJ();AUr(a);return a;}
function AUr(a){a.cG=O(B,10);}
function Ov(a,b){var c,d;c=a.cG.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cG=C0(a.cG,d);}}
function BU(a,b){LU(a,b);return a.cG.data[b];}
function APN(a){return a.r;}
function Br(a,b){var c,d;Ov(a,a.r+1|0);c=a.cG.data;d=a.r;a.r=d+1|0;c[d]=b;a.cq=a.cq+1|0;return 1;}
function AOS(a,b,c){var d,e,f;S9(a,b);Ov(a,a.r+1|0);d=a.r;e=d;while(e>b){f=a.cG.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cG.data[b]=c;a.r=d+1|0;a.cq=a.cq+1|0;}
function Fs(a,b){var c,d,e,f;LU(a,b);c=a.cG.data;d=c[b];e=a.r-1|0;a.r=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cq=a.cq+1|0;return d;}
function AMd(a,b){var c;c=MB(a,b);if(c<0)return 0;Fs(a,c);return 1;}
function Md(a){AJR(a.cG,0,a.r,null);a.r=0;a.cq=a.cq+1|0;}
function ANT(a,b,c){var d,e,f,g,h,i;S9(a,b);if(c.fq())return 0;Ov(a,a.r+c.du()|0);d=c.du();e=a.r;f=e-1|0;while(f>=b){g=a.cG.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.r=e+d|0;h=c.cx();i=0;while(i<d){g=a.cG.data;e=b+1|0;g[b]=h.cz();i=i+1|0;b=e;}a.cq=a.cq+1|0;return 1;}
function LU(a,b){var c;if(b>=0&&b<a.r)return;c=new BN;X(c);M(c);}
function S9(a,b){var c;if(b>=0&&b<=a.r)return;c=new BN;X(c);M(c);}
function Hh(a,b){var c;c=0;while(c<a.r){b.g(a.cG.data[c]);c=c+1|0;}}
function APO(a){var b,c,d,e;b=a.r;if(!b)return C(23);c=b-1|0;d=new I;FZ(d,b*16|0);Bl(d,91);b=0;while(b<c){e=a.cG.data;BG(G(d,e[b]!==a?e[b]:C(349)),C(40));b=b+1|0;}e=a.cG.data;G(d,e[c]!==a?e[c]:C(349));Bl(d,93);return J(d);}
function AMz(){var a=this;B.call(a);a.r_=0;a.sa=0;}
function Yk(){var a=new AMz();A0x(a);return a;}
function BbS(a,b){var c=new AMz();AQQ(c,a,b);return c;}
function A0x(a){AQQ(a,AQy(GS((ALL()))),GS((ALL()))^(-559038737));}
function AQQ(a,b,c){var d;a.r_=b;a.sa=c;d=0;while(d<19){Pm(a);d=d+1|0;}}
function Pm(a){var b,c;b=a.r_;c=a.sa;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.r_=c;a.sa=b;return b;}
function AQy(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AP2(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Ey(a,b){return Ym(a)*b|0;}
function Ym(a){return 5.960464477539063E-8*(Pm(a)&16777215);}
function Ty(a,b){var c,d,e;c=AP2(Pm(a));d=AZq( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function Rj(){B.call(this);this.Bw=null;}
function AXD(a,b,c){var d;d=a.Bw;if(b===0.0)NI(d,100);}
function Ri(){B.call(this);this.yR=null;}
function AVc(a,b){var c,d,e;c=a.yR;d=b.bh;if(d==32){c.ng=c.ng?0:1;e=1;}else if(d==13){NI(c,1);e=1;}else if(d!=8)e=0;else{RZ(c,1);e=1;}return e;}
var AEd=H(0);
function ANi(b,c){var d;d=new Ya;d.Bb=b;d.Ba=c;return d;}
function ANp(){var a=this;B.call(a);a.iV=null;a.jv=0;a.nq=0;a.iz=0;}
function ANE(a){var b=new ANp();AUb(b,a);return b;}
function AUb(a,b){a.iV=BO();a.iz=0;a.nq=2048;a.jv=b;}
function LI(a,b,c){var d,e,f,g,h,i;d=c.C6(b);e=a.nq;if(d>e){c=new Bx;f=new I;K(f);Bl(R(G(R(G(f,C(350)),d),C(351)),e),41);Bd(c,J(f));M(c);}if(!a.jv){b=new Bv;Bd(b,C(352));M(b);}a:{b=new B_;if(d){b:{c=a.iV;if(c.r>0){c=Ci(c);g=d;while(true){if(!Ck(c))break b;f=Cl(c);if(f.bm>=g)break;}CA(b,f.bx,f.bC,g,a.jv);f.bx=f.bx+g;h=f.bm-g;f.bm=h;if(h===0.0)AMd(a.iV,f);break a;}}g=a.iz;i=d;CA(b,0.0,g,i,a.jv);Br(a.iV,AIA(i,a.iz,a.nq-d|0,a.jv));a.iz=a.iz+a.jv|0;}}return b;}
function J4(a,b){var c,d,e,f,g,h,i;a:{c=AQO(b);b=a.iV;if(b.r>0){d=Ci(b);while(true){if(!Ck(d))break a;e=Cl(d);if(e.bC===c.bC){f=e.bx;g=e.bm;h=f+g;i=c.bx;if(h===i){c.bx=f;c.bm=c.bm+g;ADN(d);}else{h=c.bm;if(i+h===f){c.bm=h+g;ADN(d);}}}}}}Br(a.iV,c);}
function Or(a){return BP(a.nq,a.iz);}
function AJ9(){var a=this;B.call(a);a.Kj=20;a.eO=null;a.dg=null;a.it=0.0;a.m3=null;a.kL=0;a.mr=0;a.hn=0;a.eu=null;a.iT=null;a.f2=null;a.hX=null;a.hV=0;}
function AMF(){var a=new AJ9();A_H(a);return a;}
function A_H(a){a.Kj=20;a.eO=new Bg;a.dg=new Bg;a.eu=O(JL,0);a.iT=C$(0);}
function ALu(b,c,d){c=c.data;return d<c.length&&c[d]?GC(b.dH,b,c[d]):b.gs.kw;}
function V7(a,b,c,d,e,f){Y(a.eO,b,c);Y(a.dg,d,e);a.it=f;}
function Nl(a,b){if(b===null)b=C$(0);a.iT=b;}
function ABz(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u;K3(g,a.eO,a.dg);i=a.dg.a;j=a.eu;k=j.data.length;l=((i+a.mr|0)/a.hn|0)+1|0;if(l!=k){a:{if(k<l){a.eu=C0(j,l);while(true){if(k>=l)break a;m=new JL;i=Ba(k,a.hn);n=a.dg.b;o=a.mr;p=a.m3;m.kC=new Bg;m.lj=new B_;m.st=BP(0,i);m.fy=20;m.cV=o;m.gd=BP(n,20*o|0);m.iP=Ni(p,o);if(m.dr===null)m.dr=Dc(g);a.eu.data[k]=m;k=k+1|0;}}}ABF(a,g);}UU(a,d);l=a.hV;if(d!=l){q=a.eu.data.length*20|0;if(l<d){k=l/20|0;n=d/20|0;}else{n=Be(0,(l-1|0)/20|0);k=Be(0,(d-1|0)/20|0);}b:{if
((n-k|0)>=a.eu.data.length){UU(a,d);a.hV=d;}else{ABF(a,g);if(a.hV>=d)while(true){if(n<k)break b;a.hV=Uc(J8(a,n),a.f2,a.hX,a.hV,d,q,a.it);n=n+(-1)|0;}while(k<=n){a.hV=Uc(J8(a,k),a.f2,a.hX,a.hV,d,q,a.it);k=k+1|0;}}}}k=a.hn;o=c/k|0;r= -(c%k|0)|0;while(r<b){s=J8(a,o);m=a.eO;j=a.iT;k=s.gd.a;l=c+r|0;i=s.cV;l=l/i|0;p=h.gs;k=k/i|0;i=0;q=0;t=ALu(h,j,l+q|0);while(q<k){u=ALu(h,j,l+q|0);if(u===t){n=Ba((q-i|0)+1|0,s.cV);Y(s.kC,BX(s.dr),n);CA(s.lj,0.0,Ba(i,s.cV),BX(s.dr),n);u=t;}else{O7(s,g,r+Ba(i,s.cV)|0,m,p.mX,t);Y(s.kC,
BX(s.dr),s.cV);CA(s.lj,0.0,Ba(q,s.cV),BX(s.dr),s.cV);i=q;}q=q+1|0;t=u;}O7(s,g,r+Ba(i,s.cV)|0,m,p.mX,t);o=o+1|0;r=r+a.hn|0;}m=a.dg;k=m.a;p=h.gs;if(b<k){t=a.eO;Bu(g,t.b,t.a+b|0,BP(m.b,k-b|0),p.kw);}if(d<=f&&f<=e){p=h.gs;AQt(J8(a,f/20|0),g,a.eO,c,Ba(a.eu.data.length,a.hn),f,p);}Gd(g);}
function UU(a,b){var c,d,e,f,g,h,i,j,k;c=a.eu.data;d=c.length;e=Ba((b/(d*20|0)|0)+1|0,d)*20|0;f=0;while(f<d){g=c[f];h=a.f2;i=a.it;Fy(h);j=0;while(true){k=g.fy;if(j>=k)break;k=e-Ba(d,k)|0;if(k<b)k=e;e=k+1|0;IX(g,h,DI(e),Ba(g.cV,j)+g.iP|0,i);j=j+1|0;}C5(g.dr,h);g.Ae=h.kF;f=f+1|0;}}
function ACR(a,b,c,d){a.m3=b;a.mr=c;a.hn=c*20|0;a.kL=d;ACT(a);}
function ABF(a,b){var c;c=a.f2;if(!(c!==null&&c.kF==a.kL)){c=BM(c,Ex(b,a.dg.b,a.hn,a.kL));a.f2=c;Cv(c,a.m3);AEQ(a.f2,2);}c=a.hX;if(!(c!==null&&c.kF==a.kL)){b=BM(c,Ex(b,a.dg.b,a.mr,a.kL));a.hX=b;Cv(b,a.m3);AEQ(a.hX,2);}}
function J8(a,b){var c;c=a.eu.data;return c[b%c.length|0];}
function JF(a){var b,c,d,e;b=a.eu.data;c=b.length;d=0;while(d<c){e=b[d];e.dr=BM(e.dr,null);d=d+1|0;}a.eu=O(JL,0);ACT(a);}
function ACT(a){a.f2=BM(a.f2,null);a.hX=BM(a.hX,null);}
function Oz(a,b){return Gm(b,a.eO,a.dg);}
function AMM(){var a=this;B.call(a);a.g9=null;a.d$=null;a.fP=null;a.gv=null;a.qH=null;a.qq=null;}
function G8(){var a=new AMM();A6e(a);return a;}
function A6e(a){a.g9=new Bg;a.d$=new Bg;a.fP=new Bg;a.gv=new Bg;a.qH=new B_;a.qq=new B_;}
function ADQ(a){var b;b=a.d$;return !Ba(b.b,b.a)?0:1;}
function JN(a,b){return Gm(b,a.fP,a.gv);}
function Fn(a,b,c,d){var e,f,g,h,i;e=JN(a,b);f=Gm(b,a.g9,a.d$);if(!e&&!f)return null;if(!f){if(!d)c.g(YA(a,b.b-a.fP.b|0));else c.g(Te(a,b.a-a.fP.a|0));}g=!d?a.g9.b+(a.d$.b/2|0)|0:a.g9.a+(a.d$.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new Vw;b.y1=a;b.y2=c;b.y0=i;}else{b=new Vu;b.t$=a;b.t8=c;b.t9=i;}return b;}
function Hv(a,b,c){if(c!==null)BQ(a.qH,c);if(b!==null)BQ(a.qq,b);}
function AKk(b,c){var d;d=new AGv;d.wc=b;d.Gt=c;return d;}
function Te(a,b){var c,d,e;c=a.gv.a;d=a.d$.a;e=c-d|0;return AKk(Bh(Be(0,b-(d/2|0)|0),e),e);}
function YA(a,b){var c,d,e;c=a.gv.b;d=a.d$.b;e=c-d|0;return AKk(Bh(Be(0,b-(d/2|0)|0),e),e);}
function HC(a,b,c,d,e,f,g){YQ(a,b,c,d,e,f,g,1);}
function Ul(a,b,c,d,e,f,g){YQ(a,b,c,d,e,f,g,0);}
function YQ(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bh(i,d);j=Be(KP(d,d,e),i);e=e-d|0;i=d-j|0;i=i?KP(b,i,e):0;if(!h){k=a.g9;k.b=i+c|0;k.a=f-g|0;l=a.d$;l.b=j;l.a=g;l=a.fP;l.b=c;l.a=k.a;k=a.gv;k.b=d;k.a=g;break a;}k=a.g9;k.b=f-g|0;k.a=i+c|0;l=a.d$;l.b=g;l.a=j;l=a.fP;l.b=k.b;l.a=c;k=a.gv;k.b=g;k.a=d;break a;}}Y(a.gv,0,0);Y(a.d$,0,0);}}
function Kl(a,b){HQ(a,b);HW(a,b);}
function HQ(a,b){var c;c=a.fP;Bu(b,c.b,c.a,a.gv,a.qH);}
function HW(a,b){var c,d;c=a.d$;c.b=c.b-2|0;c.a=c.a-2|0;d=a.g9;Bu(b,d.b+1|0,d.a+1|0,c,a.qq);b=a.d$;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fq(a,b,c){return JN(a,b)&&FX(c)?1:0;}
function ACl(){B.call(this);this.Ck=null;}
function A7M(a,b){var c;c=a.Ck;c.i4=Fi(b,AE7(c));}
function Yd(){B.call(this);this.qF=null;}
function A60(a,b,c){var d;if(c)return Bfd;d=a.qF;return Fn(d.jr,b.i,d.uZ,1);}
function AZO(a,b,c){return 1;}
function A_q(a,b){var c;c=a.qF;return Fq(c.jr,b.i,c.Dw);}
function ACm(){B.call(this);this.yi=null;}
function A4x(a,b,c,d){var e,f;b=a.yi;e=(Ir(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.i4=Bh(Be(0,b.i4+Ba(e,f)|0),AE7(b));return 1;}
var QA=H(0);
var BfY=null;var BfZ=null;function L2(b){Hv(b,BfY,BfZ);}
function AK7(){BfY=FJ(40,40,40,200);BfZ=FJ(43,43,43,128);}
function Tj(){B.call(this);this.vS=null;}
function AXq(a,b){return Vo(a.vS,b.i);}
function Ti(){B.call(this);this.Eq=null;}
function A1D(a,b,c){var d,e;d=a.Eq;if(b===0.0){e=d.t.F.bY;Vo(d,BP(e.b/3|0,e.a/3|0));}}
function Uu(){B.call(this);this.Bz=null;}
function A1x(a,b){var c,d,e,f,g,h,i,j,k;c=a.Bz;d=c.t;e=Ga();f=DT(C(166),25.0);g=b.i;h=O(Bw,5);i=h.data;b=new Bw;j=new Xt;j.tW=c;B8(b,j,C(353));i[0]=b;b=new Bw;j=new Xu;j.uL=c;B8(b,j,C(354));i[1]=b;b=new Bw;j=new Xw;j.wt=c;B8(b,j,C(355));i[2]=b;b=new Bw;j=new Xx;j.AT=c;B8(b,j,C(356));i[3]=b;b=new Bw;k=new Xy;k.By=c;B8(b,k,C(357));i[4]=b;Ft(d,e,f,g,CT(h));return 1;}
function Ut(){B.call(this);this.D6=null;}
function A9r(a,b){var c,d,e;c=a.D6.A.bv.eo;d=new ABB;e=O(B,1);e.data[0]=b;EF(c,d,C(358),e);}
function AGl(){B.call(this);this.oS=null;}
function A8q(a,b){var c,d,e,f,g,h;c=a.oS;d=c.sy;if(d!==null){e=c.fO.x;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.sy=g;}b=b.i;f=b.b;c=c.hQ;d=c.s;f=f-d.b|0;h=b.a-d.a|0;Y(c.x,f,h);return 1;}
function A1j(a,b,c){var d;if(!c){d=b.i;b=a.oS;if(!F7(b.fO,d))d=null;b.sy=d;}return Bfd;}
var ALf=H();
function AQV(b){var c,d;c=IN(b,250,64);Iy(c,C(245),25.0);Lg(c,187,187,187);B4(c,C(359),0.0,24.0);B4(c,C(359),0.25,56.0);d=Dc(b);C5(d,c);Fe(c);return d;}
function ACC(){var a=this;B.call(a);a.s4=null;a.nx=null;}
function AVn(a,b,c){var d;if(!c){d=Fn(a.nx.jU,b.i,a.s4,1);if(d!==null)return d;}return Bfd;}
function A2F(a,b,c){return 1;}
function AT8(a,b){var c;c=a.nx;return Fq(c.jU,b.i,JP(c.A.bv));}
function ZB(){B.call(this);this.tU=null;}
function A$K(a,b,c,d){var e,f;b=a.tU;e=(Ir(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.gx=Bh(Be(0,b.gx+Ba(e,f)|0),AEO(b));return 1;}
function AH0(){B.call(this);this.zR=null;}
function AVp(a,b){var c,d;a:{c=a.zR;switch(b.bh){case 67:S3(c);d=1;break a;case 86:AEv(c);d=1;break a;default:}d=0;}return d;}
var AHZ=H();
function A6G(a,b,c){return 0;}
function AHY(){B.call(this);this.u4=null;}
function ATl(a,b,c){var d,e;d=a.u4;c=d.e2+1|0;d.e2=c;d=Hm(F(LD));e=new I;K(e);G(G(R(e,c),C(360)),d);e=J(e);$rt_globals.console.info($rt_ustr(e));P9(b,e);return 1;}
var AHX=H();
function AWF(a){return null;}
function AH1(){B.call(this);this.DO=null;}
function A95(a){var b,c;b=a.DO;c=new Zg;c.sZ=b;return c;}
function Vl(){B.call(this);this.II=null;}
function ATa(a,b){return 0;}
function RN(){B.call(this);this.C0=null;}
function A7P(a,b){var c;c=a.C0;if(b.lc&&b.bh==27){b=Qt(c.t);if(b!==null)OC(b);}return 0;}
function RP(){B.call(this);this.yO=null;}
function A5J(a,b){var c,d,e,f,g,h,i;c=a.yO;d=ADi(c.p);Ip(d,Ga(),DT(C(166),25.0));b=b.i;e=O(Bw,1);f=e.data;g=new Bw;h=c.t;i=new ABm;i.Cy=c;B8(g,D_(h,i),C(361));f[0]=g;Oh(d,b,CT(e),Bf5);II(c.t,d);return 1;}
function ABo(){B.call(this);this.BJ=null;}
function ATK(a,b){var c,d,e,f,g,h;c=a.BJ;d=O(Bw,1);e=d.data;f=new Bw;g=c.t;h=new U5;h.A2=c;B8(f,D_(g,h),C(362));e[0]=f;f=CT(d);g=c.t;c=c.o0;Ft(g,c.cs,c.gl,b.i,f);return 1;}
function Ql(){var a=this;B.call(a);a.ex=null;a.eJ=null;a.Io=0.0;a.uJ=null;a.io=null;a.yP=null;a.hL=null;a.iE=null;a.wn=null;a.g3=0;a.iW=0;a.sd=0;a.m2=0;a.f$=0;a.im=0;a.pD=0;a.wT=0;}
function ACw(a,b,c,d,e,f){Y(a.ex,b,c);Y(a.eJ,d,e);a.Io=f;}
function P4(a,b,c){var d,e;a.g3=b;a.wT=c;d=Bi();e=new I;K(e);R(G(e,C(363)),b);Bb(d,J(e));a.hL=AKQ(a.hL);}
function RK(a,b,c){a.io=c;a.uJ=b;}
function H1(a,b){if(b===null)b=C$(0);a.yP=b;}
function AHR(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;h=f.gs;if(a.pD){i=a.ex;Bu(e,i.b,i.a,a.eJ,h.kw);}a.sd=b;a.m2=c;j=a.io;if(j===null)return;k=0;a:{while(true){l=j.data;m=l.length;if(k>=m)break;if(l[k]>=b){m=k;break a;}k=k+1|0;}}if(a.hL===null){n=g.iJ;o=!a.wT?60086:60085;i=GE(e,C(13),a.g3,400,0);p= -KP(a.m2,3,32)|0;a.hL=P6(e,E9(o),i,1,a.g3,p,n);}K3(e,a.ex,a.eJ);j=a.io.data;p=m>=j.length?(-1):j[m];q=a.ex.b;i=a.iE;n=a.g3;Y(i,n,n);while(b<=c){n=(a.ex.a+Ba(b,a.g3)|0)-a.iW|0;j=a.yP.data;o=b>=j.length?0:j[b];i=o?GC(f.dH,
f,o):b!=d?f.gs.kw:f.gs.og;if(p!=b)Bu(e,q,n,a.iE,i);else{PH(g,e,a.hL,q,n,i,h.mX);m=m+1|0;j=a.io.data;if(m<j.length)p=j[m];}b=b+1|0;}Gd(e);n=Ba(c+1|0,a.g3)-a.iW|0;b=a.eJ.a;if(n<b){a.iE.a=b-n|0;i=GC(f.dH,f,0);Bu(e,q,a.ex.a+n|0,a.iE,i);}}
function LW(a,b,c){var d,e,f,g;d=a.ex;e=d.b;f=d.a;g=a.g3;return APd(b,e,(f+Ba(c,g)|0)-a.iW|0,g,g);}
function UV(a,b,c){var d,e,f,g;a.f$=(-1);if(!K9(a,b.i))return 0;d=a.io.data;e=d.length;f=0;while(true){if(f>=e)return K9(a,b.i)&&FX(c)?1:0;g=d[f];if(a.sd<=g&&g<=a.m2&&LW(a,b.i,g))break;f=f+1|0;}a.f$=g;return D1(c,C(243));}
function WM(a,b,c,d){var e,f,g;if(c)return null;if(!K9(a,b.i))return null;e=0;while(true){f=a.io.data;if(e>=f.length)break;g=f[e];if(a.sd<=g&&g<=a.m2&&LW(a,b.i,g)?1:0){a.f$=g;a.im=e;FX(d);return Bfd;}e=e+1|0;}a.im=(-1);a.f$=(-1);return Bfd;}
function S4(a,b,c){var d;d=null;if(!c){c=a.f$;if(c>=0&&LW(a,b.i,c))d=a.uJ.data[a.im];}a.im=(-1);a.f$=(-1);if(d!==null)d.e();return d===null?0:1;}
function K9(a,b){return Gm(b,a.ex,a.eJ);}
function A4g(a){a.hL=AKQ(a.hL);}
function AG9(){B.call(this);this.sG=null;}
function A8h(a,b){var c,d,e;c=a.sG;c.gZ=Fi(b,AIg(c));b=Bi();d=c.gZ;e=d+c.dw.eJ.a|0;c=new I;K(c);R(G(R(G(c,C(364)),d),C(365)),e);Bb(b,J(c));}
function API(){var a=this;B.call(a);a.kQ=null;a.jA=null;a.pC=null;a.hr=null;a.vP=null;a.ij=null;a.pR=null;a.dS=null;a.i0=null;a.s3=0.0;a.ew=0;a.w9=0;a.F1=0;a.iJ=0;}
function AKZ(a){var b=new API();A0h(b,a);return b;}
function A0h(a,b){a.kQ=new B_;a.jA=new Bg;a.pC=new Bg;a.hr=new B_;a.vP=ACs(0);a.ij=O(M7,4);a.pR=O(L6,0);a.iJ=b;Na(a.hr);}
function ACi(a){a.i0=BM(a.i0,null);}
function VB(a,b,c){var d,e;d=Dd(FV(a.dS)*b);a.ew=d;e=a.dS;a.w9= -( -((d+e.fa+e.fr)/2.0)|0)|0;AIS(a,c);return a.ew;}
function Sh(a,b){var c,d;Na(a.hr);c=a.hr;Yo(c,b,c);a.s3=AAS(a.hr);c=a.hr;d=c.bC+c.bm+1.5|0;a.F1=d;Y(a.pC,0,d*2|0);}
function AIS(a,b){a.i0=BM(a.i0,Ex(b,1024,a.ew,a.iJ));}
function Ia(a,b,c,d,e,f,g){var h,i;h=a.jA;if(h.b&&h.a){i=a.kQ;if(i.bR!==0.0&&i.bm!==0.0){D$(b,d,e,h,i,c,f,g,a.iJ);return;}}}
function PH(a,b,c,d,e,f,g){CA(a.kQ,0.0,0.0,BX(c),C7(c));CF(a.jA,c.eE);Ia(a,b,c,d,e,g,f);}
function AG$(){B.call(this);this.zd=null;}
function A0P(a,b,c,d){var e,f;b=a.zd;e=(Ir(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.gZ=Bh(Be(0,b.gZ+Ba(e,f)|0),AIg(b));return 1;}
function AG_(){B.call(this);this.B5=null;}
function A_i(a,b){var c,d,e;c=a.B5;if(b.bh!=32)d=0;else{b=c.dw;d=c.lK;e=c.pV?0:1;c.pV=e;P4(b,d,e);d=1;}return d;}
function Sm(){var a=this;B.call(a);a.fK=null;a.fL=null;}
function AEW(a){var b=new Sm();A0J(b,a);return b;}
function A0J(a,b){a.fL=O(T,b);a.fK=BI(b);}
function APc(b,c){var d,e,f,g,h,i,j,k,l;d=0;e=b.be.data;f=e.length;g=0;while(g<f){if(e[g].eg)d=d+1|0;g=g+1|0;}h=AEW(d);i=AEW(d);f=0;j=b.be.data;g=j.length;k=0;while(k<g){l=j[k];if(l.eg){h.fK.data[f]=l.bM;e=h.fL.data;b=new Zo;b.AM=c;b.AL=l;e[f]=b;i.fK.data[f]=l.bL;e=i.fL.data;b=new Zn;b.BG=c;b.BH=l;e[f]=b;f=f+1|0;}k=k+1|0;}return L(Sm,[h,i]);}
function Sp(){B.call(this);this.vV=null;}
function A$P(a,b){M0(Mq(a.vV),b);}
function So(){B.call(this);this.yq=null;}
function A4O(a,b){var c,d,e,f,g,h;c=a.yq;d=O(Bw,1);e=d.data;f=new Bw;g=c.t;h=new AB3;h.xX=c;B8(f,D_(g,h),C(366));e[0]=f;f=CT(d);g=c.t;c=c.on;Ft(g,c.cs,c.gl,b.i,f);return 1;}
function Yi(){B.call(this);this.wH=null;}
function AWM(a,b){var c,d,e;c=a.wH;c.ju=Fi(b,AC7(c));b=Bi();d=c.ju;e=d+c.gu.s.a|0;c=new I;K(c);R(G(R(G(c,C(364)),d),C(365)),e);Bb(b,J(c));}
function Yh(){B.call(this);this.zt=null;}
function A0Q(a,b,c,d){var e,f;b=a.zt;e=(Ir(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ju=Bh(Be(0,b.ju+Ba(e,f)|0),AC7(b));return 1;}
function RQ(){B.call(this);this.FH=null;}
function A8o(a,b){var c,d,e;c=a.FH;d=c.hh;if(d!==null){e=new AFm;e.Gl=c;e.Gm=b;GM(d,b,e);}}
function RR(){B.call(this);this.CW=null;}
function A$x(a,b){var c,d,e;c=a.CW;if(DS(c.p,c.hh)){d=c.nS;b=b.i;e=c.hh;JI(d,b,e,c,e,c,new AAN);}return 1;}
function X3(){B.call(this);this.G5=null;}
function AYD(a,b){return 1;}
function X2(){B.call(this);this.wU=null;}
function A$A(a,b){var c,d;c=a.wU;if(b.bh!=32)d=0;else{PG(c.gJ,ANO());d=1;}return d;}
function Tr(){B.call(this);this.KV=null;}
function AR5(a,b){return 0;}
function Tl(){B.call(this);this.Ft=null;}
function AYq(a,b){var c,d,e,f,g,h,i,j,k;c=a.Ft;d=c.t;e=c.ra;f=e.cs;g=e.gl;h=b.i;i=O(Bw,4);j=i.data;b=new Bw;e=new AA3;e.ur=c;B8(b,D_(d,e),C(367));j[0]=b;b=new Bw;e=c.t;k=new AA1;k.tK=c;B8(b,D_(e,k),C(368));j[1]=b;b=new Bw;e=c.t;k=new AA0;k.wW=c;B8(b,D_(e,k),C(369));j[2]=b;e=new Bw;k=c.t;b=new AA2;b.CM=c;B8(e,D_(k,b),C(370));j[3]=e;Ft(d,f,g,h,CT(i));return 1;}
function Tk(){B.call(this);this.HG=null;}
function A6d(a,b){return b.bh!=32?0:1;}
function AFs(){B.call(this);this.s9=null;}
function AYC(a,b){var c,d,e,f,g,h;c=a.s9;d=O(Bw,4);e=d.data;f=new Bw;g=c.t;h=new ADD;h.Em=c;B8(f,D_(g,h),C(371));e[0]=f;f=new Bw;h=c.t;g=new ADC;g.uq=c;B8(f,D_(h,g),C(372));e[1]=f;f=new Bw;h=c.t;g=new ADF;g.y$=c;B8(f,D_(h,g),C(362));e[2]=f;f=new Bw;h=c.t;g=new ADE;g.xL=c;B8(f,D_(h,g),C(366));e[3]=f;f=CT(d);h=c.t;c=c.ie;Ft(h,c.cs,c.gl,b.i,f);return 1;}
var ALn=H();
var AB0=H(0);
var ACc=H();
function A5l(a,b,c){var d,e;d=b;e=c;b=new I;K(b);R(G(R(G(b,C(373)),d),C(374)),e);Db(J(b));return d+e|0;}
var AB1=H(0);
var ACa=H();
function A5$(a,b,c){var d,e;d=b;e=c;b=new I;K(b);Dw(G(Dw(G(b,C(375)),d),C(374)),e);Db(J(b));return d+e;}
var AJZ=H();
var ANn=H(0);
function AIC(){var a=this;B.call(a);a.f9=null;a.h=null;a.r5=null;a.tV=null;a.jl=null;a.gA=null;a.fR=null;a.m_=null;a.y=0;a.G=0;a.jI=0;a.kd=null;a.jV=null;a.rv=null;a.fV=0;a.hM=0;a.h5=0;a.km=C8;a.Ez=C8;a.Fk=C8;a.sJ=0;a.JS=0;a.eI=0;a.oq=0.0;a.gM=0;}
function Bcb(a,b,c){var d=new AIC();AQH(d,a,b,c);return d;}
function AT7(a,b){var c=new AIC();AXU(c,a,b);return c;}
function Bci(a,b,c){var d=new AIC();Zb(d,a,b,c);return d;}
function AQH(a,b,c,d){Zb(a,(ABS(b)).jE,c,d);}
function AXU(a,b,c){Zb(a,b,null,c);}
function Zb(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.tV=ASk();f=new W3;f.gb=O(PC,16);f.f8=0;f.eA=(-1);a.jl=f;a.kd=null;a.jV=BO();a.rv=BO();a.fV=1;a.hM=1;a.h5=1;a.eI=0;a.oq=0.0;a.gM=0;a.f9=d;a.r5=c;c=new AEw;g=e.length;b=O(DJ,Be(1,g));if(!g)b.data[0]=ABH(C(20));h=b.data;i=0;while(i<g){h[i]=ABH(e[i]);i=i+1|0;}d=new ACt;f=new Pz;Tm(f);d.fS=f;c.fN=d;c.eF=IW();c.er=IW();c.j3=BO();g=h.length;if(!g){c=new Bv;X(c);M(c);}c.C=b;j=Mi(c,0,g);c.d0=ALY(A0w(Mf(0,j,0),null,null));a.h=c;d=new Up;d.Et=a;c.AA=d;}
function EE(a){var b;b=a.r5;if(b===null){b=a.f9;b=b===null?C(244):AM2(b.gQ);}return b;}
function IH(a){var b;b=a.f9;return b===null?null:b.lX;}
function N4(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hM=3;a.h5=3;a.fV=3;c=CP(b[0]);d=Fw(b[1]);CP(b[2]);if(b.length<5)PY(a.h,c,d);else{e=CP(b[3]);f=e.data;g=Fw(b[4]);ABl(a.h,c,d,e,g,0);Xb(a,Kp(e,f.length),Qj(g));}if(a.gM){h=FO(a);i=KZ(Fc(),a.km);j=new I;K(j);G(Hi(G(G(j,h),C(376)),i),C(377));$rt_globals.console.info($rt_ustr(J(j)));}h=a.gA;if(h!==null)Ke(h);}
function J2(a){var b;VN(a,Ej(a.y,a.G),Kf(a.h,a.y,a.G));if(!(a.kd!==null&&!Fk(a.jV))){b=a.G;if(b>0)VN(a,Ej(a.y,b-1|0),Kf(a.h,a.y,a.G-1|0));}}
function VN(a,b,c){var d,e,f,g,h,i,j,k;a.kd=null;Md(a.jV);d=Cz(a.h.eF,c);if(d!==null)c=d;a:{e=Cz(a.h.er,c);if(e!==null){a.kd=NF(a.h,c);c=Ci(e);while(true){if(!Ck(c))break a;f=Cl(c);Br(a.jV,NF(a.h,f));}}}c=a.gA;if(c!==null){g=b.bA;h=b.bG;b=c.gh;f=EE(c.c);e=IH(c.c);i=(B7(b.yI)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.FC(f,e)){b=b.IN;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.c;e=new SO;e.IQ=c;e.IR=f;e.IO=g;e.IP=h;b.wI(f,g,h,e,c.lv);}}}
function Xb(a,b,c){var d,e,f,g,h;if(a.fR!==null){a.Fk=Fc();d=a.h.cR;e=a.fR;f=new ACh;f.CZ=a;g=O(B,3);h=g.data;h[0]=b;h[1]=c;b=BI(1);b.data[0]=d;h[2]=b;Ef(e,1,f,C(378),g);}}
function Mt(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;a.gA=b;a.fR=c;if(c===null){d=a.h.C.data;e=d.length;f=0;while(f<e){WF(d[f]);f=f+1|0;}}else if(a.fV==1){if(CJ(a.h)==1&&Is(Cb(a.h,0))==1&&!Kh(IY(Cb(a.h,0),0))?1:0){a.hM=3;a.h5=3;a.fV=3;b=a.gA;if(b!==null)Ke(b);}else{a.km=Fc();b=EE(a);e=BW(b,C(324));f=BW(b,C(379));d=F6(a.h);g=d.data.length;h=!e?5120:10240;i=ANj(b);if(f)K2(a,d,i);else if(g<=h)K2(a,d,i);else if(!e){Y4(a,Qj(d),i);K2(a,d,i);}else{Y4(a,Qj(d),i);j=Qj(d);k=a.fR;c=new TE;c.C1=a;l=O(B,2);m=l.data;m[0]=j;n=BI(1);n.data[0]
=i;m[1]=n;Ef(k,1,c,C(380),l);a.hM=2;K2(a,d,i);}}}}
function Y4(a,b,c){var d,e;d=a.fR;e=new Ys;e.Dm=a;Ef(d,1,e,C(381),L(B,[b,DD([c,250])]));a.h5=2;}
function K2(a,b,c){var d,e,f,g,h;d=a.fR;e=new AAV;e.Bu=a;f=O(B,2);g=f.data;g[0]=b;h=BI(1);h.data[0]=c;g[1]=h;Ef(d,1,e,C(382),f);a.fV=2;}
function FO(a){var b;b=a.f9;return b===null?C(20):AGY(b);}
function N2(a){var b,c,d,e,f;if(a.gM){b=FO(a);c=new I;K(c);G(G(c,b),C(383));$rt_globals.console.info($rt_ustr(J(c)));}b=EE(a);if(b===null)d=null;else{a:{e=(-1);switch(La(b)){case -1655966961:if(!Bj(b,C(379)))break a;e=3;break a;case 3401:if(!Bj(b,C(384)))break a;e=2;break a;case 98723:if(!Bj(b,C(385)))break a;e=1;break a;case 3213227:if(!Bj(b,C(386)))break a;e=4;break a;case 3254818:if(!Bj(b,C(324)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(387);break b;case 2:d=C(388);break b;case 3:d
=C(389);break b;case 4:d=C(390);break b;default:d=C(391);break b;}d=C(392);}}if(d===null)Ke(a.gA);else{a.km=Fc();b=a.fR;c=new AFV;c.yn=a;f=O(B,1);f.data[0]=F6(a.h);Ef(b,1,c,d,f);}}
function Qi(a){var b;b=A1n(a.h.fN,null);AAU(b);Xb(a,b.qO,b.oF);}
function AIr(){var a=this;B.call(a);a.B4=null;a.Gh=null;a.sT=null;a.yI=null;a.ym=null;a.E1=null;}
function Qr(a,b,c){return Uy(a,B7(a.B4),b,c);}
function ADt(a,b,c){return Uy(a,B7(a.Gh),b,c);}
function Uy(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.FC(c,d))return g.J7;f=f+1|0;}return null;}
function AGk(a,b,c){var d,e,f,g;d=(B7(a.sT)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.FC(b,c))return g.J1;f=f+1|0;}return null;}
function Go(){var a=this;B.call(a);a.cB=0;a.dR=null;a.db=null;a.fo=null;a.ez=0;}
var Bf6=0;var Bf1=0;function ABr(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.db;j=i===b&&!i.kE?0:1;if(j){a.db=b;Pi(b,c.cE,a.dR.ij);}k=Hw(Bh(GB(b),e+2048|0),1024);l=a.fo;m=l.data.length;n=k<=m?0:1;if(n){a.fo=C0(l,k);while(m<k){a.fo.data[m]=Dc(c);m=m+1|0;}}o=a.dR.i0;if(!(!j&&!n)){if(Bf6){l=b.hw;$rt_globals.console.info("fMeasure"+l.data);Bf6=0;}if(!Bf1){c=o.dU;b="alphabetic";c.textBaseline=b;}else{b=o.dU;c="top";b.textBaseline=c;}a.ez=f/1024|0;p=0;while(p<k){Lq(a,o,d,a.ez+p|0);p=p+1|0;}a.db.kE=0;}e=a.fo.data.length;if
(e&&f<=GB(a.db)){f=f/1024|0;g=a.ez;if(f!=g){if(Ir(f-g|0)>=e){g=0;while(g<e){Lq(a,o,d,f+g|0);g=g+1|0;}a.ez=f;}else{while(true){g=a.ez;if(g>=f)break;Lq(a,o,d,g+e|0);a.ez=a.ez+1|0;}while(true){g=a.ez;if(g<=f)break;Lq(a,o,d,g-1|0);a.ez=a.ez-1|0;}}}}}
function Lq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=ACf(a,e);g=a.db;if(f>=g.v.data.length)return;h=g.hw;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cB;l=a.dR.ij;Fy(b);a:{while(true){g=a.db;if(f>=g.v.data.length)break a;m=l.data;g=IY(g,f);n=m[LZ(g)];o=!Bf1?Ni(n,c):O3(n,c);m=h.data;Cv(b,n);B4(b,g.z,k,o);k=m[f]-j+a.cB;if(k>1024.0)break;f=f+1|0;}}h=a.fo.data;C5(h[d%h.length|0],b);}
function AAg(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp;n=a.fo.data.length;if(!n)return;if(g>GB(a.db))return;o=a.db;p=o.fG;q=o.v;r=g/1024|0;s=ACf(a,g);t= -a.cB|0;u=f;a:{while(true){v=q.data;w=v.length;if(s>=w)break a;w=s!=(w-1|0)?0:1;if(t>=e)break;x=p.data;y=a.fo.data[r%n|0];z=v[s];ba=x[s]+a.cB|0;bb=r*1024|0;bc=(ba-bb|0)>1024?0:1;bd=r+1|0;be=bd*1024|0;bf=Bh(be,ba)-g|0;if(bc&&w)bf=bf+a.cB|0;bg=i!==null?0:1;b:{if(!bg){bh=!w?a.cB:2*a.cB|0;bi=i.b;bj=
i.a;if(!(bi<bj&&g<=bj&&(g+bf|0)>(bi+bh|0)?0:1)){bk=0;break b;}}bk=1;}c:{if(!bg){bg=!w?a.cB:2*a.cB|0;if(g>=i.b&&(g+bf|0)<=(i.a+bg|0)?1:0){bj=1;break c;}}bj=0;}bl=null;if(l)bl=h.bF.hB;if(z===j)bl=h.bF.tR;if(k!==null){o=Ci(k);d:{while(Ck(o)){if(BW(Cl(o),z)){bi=1;break d;}}bi=0;}if(bi)bl=h.bF.zA;}if(m!==null){bm=m.pA;if(bm===null)bi=0;else{bm=bm.data;bi=s>=bm.length?0:bm[s];}bl=AI0(h.dH,h,bi,m.ft);}if(!bj&&!bk){i.a=Bh(i.a,GB(a.db));AK3(a,d,t+c|0,b,f,h,y,z,bf,g>=i.b?bf:(Bh(ba,be)-i.b|0)-(!w?a.cB:0)|0,(g+bf|0)<=(i.a
+(!w?a.cB:2*a.cB|0)|0)?0:(Bh(ba,be)-i.a|0)-(!w?a.cB:0)|0,g-bb|0,bl);}else{bn=h.k_.data[z.cm];o=bj?h.bF.mw:Wn(bl,AAG(h,bn.oB));CA(a.dR.kQ,g-bb|0,0.0,bf,u);Y(a.dR.jA,bf,f);Ia(a.dR,d,y,t+c|0,b,bn.ih,o);}if((z.bZ&12)>>2>0){bi=t+c|0;B2(d,1);o=a.dR;bl=o.pC;bl.b=bf;w=b+o.w9|0;be=w-o.F1|0;bo=o.s3;bp=w+bo;bn=o.hr;Xr();NP(d,bi,be,bl,bo,bp,bn,BfG.mI.ih);B2(d,0);}g=g+bf|0;t=t+bf|0;if(!bc){s=s+(-1)|0;r=bd;}s=s+1|0;}}}
function AK3(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.k_.data[h.cm];o=n.ih;p=Wn(m,AAG(f,n.oB));q=f.bF.mw;f=a.dR;r=f.kQ;s=f.jA;t=l;u=i-j|0;v=u;w=e;CA(r,t,0.0,v,w);Y(s,u,e);Ia(a.dR,b,g,c,d,o,p);l=l+i|0;CA(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.dR;c=c+i|0;Ia(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;CA(r,t,0.0,i,w);Y(s,i,e);Ia(a.dR,b,g,c-j|0,d,o,q);}
function Wn(b,c){if(b!==null)c=b;return c;}
function ACf(a,b){var c,d,e,f,g,h,i;c=a.db;d=c.hw;e=0;f=c.v.data.length;g=b;b=BS(e,f);if(b>0){c=new Bv;X(c);M(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BS(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AIL(a){var b,c,d;b=a.fo.data;c=b.length;d=0;while(d<c){WZ(b[d]);d=d+1|0;}a.fo=a.dR.pR;a.db=null;}
function ANZ(a,b,c,d,e,f,g,h,i){var j,k;j=GB(a.db);if(j)j=j+a.cB|0;if(!j)j=j-a.cB|0;k=Be( -a.cB|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function ADx(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=O(Go,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.xd(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.db===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Go;g.cB=3;g.ez=0;g.dR=d;g.fo=d.pR;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AIL(q);j=j+1|0;}return i;}
function Wh(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].db;if(e!==null)e.kE=1;d=d+1|0;}}
function Qq(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AIL(b[d]);d=d+1|0;}}
function AK6(){Bf1=0;}
function ABe(){B.call(this);this.H_=null;}
function ABd(){B.call(this);this.sH=null;}
function ASi(a,b){var c;c=a.sH;G2(c,Fi(b,Mk(c)));}
function ABc(){B.call(this);this.v3=null;}
function ARA(a,b){var c;c=a.v3;JK(c,Fi(b,AFy(c)));}
function ABb(){B.call(this);this.Fi=null;}
function A2l(a){var b,c;b=a.Fi;c=b.lz?0:1;b.lz=c;b=new I;K(b);KC(G(b,C(393)),c);$rt_globals.console.info($rt_ustr(J(b)));}
function ABi(){B.call(this);this.AX=null;}
function A5b(a){var b,c;b=a.AX;c=b.mz^1;b.mz=c;b=new I;K(b);KC(G(b,C(394)),c);$rt_globals.console.info($rt_ustr(J(b)));}
function ABh(){B.call(this);this.w3=null;}
function BaC(a){var b,c,d,e,f;b=a.w3;c=(b.e5+3|0)%6|0;b.e5=c;d=b.fF.data;e=d.length;f=0;while(f<e){b=d[f];b.cB=c;b=b.db;if(b!==null)b.kE=1;f=f+1|0;}}
function ABg(){B.call(this);this.zD=null;}
function AWm(a){var b;b=a.zD;b.b6=b.b6?0:1;JF(b.bV);b.bV=AMF();PW(b);MF(b);if(b.cc!==null&&b.W)OI(b);}
function ABf(){B.call(this);this.tA=null;}
function AYs(a){var b;b=a.tA;b.ns=b.ns?0:1;}
function ABa(){B.call(this);this.Df=null;}
function A_1(a){var b;b=a.Df;b.r9=b.r9?0:1;}
function X$(){B.call(this);this.u2=null;}
function AWn(a){var b;b=a.u2;ACM(b,b.nf,b.p_);}
function X_(){B.call(this);this.t0=null;}
function A8w(a){var b;b=a.t0;ACM(b,b.p_,b.nf);}
function AQf(){var a=this;B.call(a);a.lX=null;a.q7=null;a.gQ=null;a.KM=null;}
function AGG(a){var b=new AQf();A9K(b,a);return b;}
function A9K(a,b){var c,d,e;c=null;d=null;e=null;a.lX=c;a.q7=d;a.gQ=b;a.KM=e;}
function AGY(a){var b,c;b=a.gQ;if(b===null)return C(20);c=AKB(b,C(395));return c==(-1)?a.gQ:C3(a.gQ,c+1|0);}
function A34(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return BW(a.lX,c.lX)&&BW(a.q7,c.q7)&&BW(a.gQ,c.gQ)?1:0;}return 0;}
function L6(){var a=this;B.call(a);a.ey=null;a.g6=null;a.eE=null;a.lt=0;}
function WZ(a){var b,c;b=a.g6;if(b!==null){c=a.ey;c.lQ=c.lQ-1|0;c.gH=c.gH-a.lt|0;c.eU.deleteTexture(b);a.g6=null;a.lt=0;}}
function BX(a){return a.eE.b;}
function C7(a){return a.eE.a;}
function AMY(b,c,d){var e;a:{switch(d){case 32856:break;case 33321:e=1;break a;default:e=0;break a;}e=4;}return Ba(Ba(b,c),e);}
function Wv(a,b,c,d){var e;e=a.eE;e.b=b;e.a=c;Qm(a);a.ey.eU.texStorage2D(3553,1,d,b,c);e=a.ey.eU;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Qm(a){var b,c;b=a.ey.eU;c=a.g6;b.bindTexture(3553,c);}
function C5(a,b){AAx(a,b.pW,b.pf,32856);ACV(a,b,0,0);}
function AAx(a,b,c,d){var e,f,g,h;a:{e=a.eE;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Qm(a);break a;}e=a.ey;e.gH=e.gH-a.lt|0;e=e.eU;h=a.g6;e.deleteTexture(h);a.g6=a.ey.eU.createTexture();Wv(a,b,c,d);e=a.eE;b=AMY(e.b,e.a,d);a.lt=b;e=a.ey;e.gH=e.gH+b|0;break a;}}Wv(a,b,c,d);e=a.eE;b=AMY(e.b,e.a,d);a.lt=b;e=a.ey;e.gH=e.gH+b|0;}}
function KY(a,b,c,d){Qm(a);ACV(a,b,c,d);}
function ACV(a,b,c,d){var e;e=a.ey.eU;b=b.ku;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function YN(){B.call(this);this.qo=null;}
var Bf4=null;function Wo(){var a=new YN();ANV(a);return a;}
function ANV(a){a.qo=BO();}
function E6(a,b,c){OS(a,Dn(b,c));}
function Dn(b,c){return AAZ(c,b);}
function I8(a,b,c){Nd(a,b,c,null);}
function Nd(a,b,c,d){OS(a,BcD(null,b,c,d));}
function OS(a,b){Br(a.qo,b);}
function JY(a){return CT(FE(a.qo,Bf4));}
function ANq(){Bf4=O(Bw,0);}
var El=H(0);
var Bfi=null;var Bfj=null;var Bff=null;var Bfg=null;var Bfh=null;var Bft=null;var Bfu=null;var Bfk=null;var Bfl=null;function A7k(){A7k=Bn(El);A78();}
function A78(){Bfi=U(C(187));Bfj=U(C(396));Bff=U(C(199));Bfg=U(C(397));Bfh=U(C(237));Bft=U(C(187));Bfu=U(C(396));Bfk=FJ(118,121,122,128);Bfl=DV(63,66,68);}
var I5=H(0);
var Sz=H();
function A9c(a,b,c,d){var e;b=Bi();d=BT(d);e=new I;K(e);G(G(R(G(e,C(398)),c),C(345)),d);Bb(b,J(e));}
var SA=H();
function M7(){var a=this;B.call(a);a.qk=null;a.GY=null;a.q6=0.0;a.Hd=0;a.HA=0;a.wb=0;a.Ii=0;a.fa=0.0;a.fr=0.0;a.G4=0.0;a.sh=0.0;a.G_=0;a.s7=null;}
function Ni(a,b){return O3(a,b)+a.wb|0;}
function O3(a,b){return (b-FV(a)|0)/2|0;}
function FV(a){return Dd(a.fa+a.fr);}
function O4(a,b){return Dd((a.fa+a.fr)*b);}
function JL(){var a=this;B.call(a);a.dr=null;a.st=null;a.gd=null;a.fy=0;a.cV=0;a.kC=null;a.lj=null;a.iP=0;a.Ae=0;}
function Uc(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.fy;i=Ba(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}Fy(c);j=d+(-1)|0;b=DI(d);d=Ba(j,a.cV)%a.gd.a|0;IX(a,c,b,a.iP,g);KY(a.dr,c,0,d);if(!(j%a.fy|0))break;d=j;}}else{Fy(b);k=a.fy-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;IX(a,b,DI(j),Ba(a.cV,k)+a.iP|0,g);k=k+(-1)|0;j=h;}C5(a.dr,b);j=Be(i,e);}return j;}k=a.fy;h=Ba(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bh(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fy(c);b=DI((d+f|0)+1|0);j=d
+1|0;d=Ba(d,a.cV)%a.gd.a|0;IX(a,c,b,a.iP,g);KY(a.dr,c,0,d);if(!(j%a.fy|0))break;d=j;}}else{Fy(b);d=0;while(d<a.fy){h=h+1|0;IX(a,b,DI((h>e?h-f|0:h)+f|0),Ba(a.cV,d)+a.iP|0,g);d=d+1|0;}C5(a.dr,b);j=Bh(i,e);}return j;}
function AQt(a,b,c,d,e,f,g){var h,i,j,k;h=f%a.fy|0;i=a.gd.a;j=((a.st.a-(d%e|0)|0)+e|0)%e|0;if((j+i|0)>e)j= -(d%C7(a.dr)|0)|0;d=a.cV;f=j+Ba(h,d)|0;if(f<( -d|0))f=f+e|0;Y(a.kC,a.gd.b,d);k=a.lj;d=a.cV;CA(k,0.0,Ba(h,d),a.gd.b,d);O7(a,b,f,c,g.A5,g.og);}
function O7(a,b,c,d,e,f){D$(b,a.st.b+d.b|0,c+d.a|0,a.kC,a.lj,a.dr,e,f,a.Ae);}
function IX(a,b,c,d,e){B4(b,c,a.gd.b-20.0*e,d);}
function R_(){B.call(this);this.Ij=null;}
function ATW(a,b){var c,d,e,f;c=b.data;b=Bi();d=BT(c[0]);e=new I;K(e);G(G(e,C(399)),d);Bb(b,J(e));b=Bi();f=c[1];d=new I;K(d);G(G(d,C(400)),f);Bb(b,J(d));}
function R$(){B.call(this);this.JU=null;}
function ASs(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bi();e=BT(c[0]);f=new I;K(f);G(G(f,C(401)),e);Bb(d,J(f));g=Fw(KB(b,1));b=Bi();d=BT(c[1]);if(g===null)c=C(24);else{c=new I;K(c);BG(c,C(39));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BG(c,C(40));Bl(c,i[h]);h=h+1|0;}BG(c,C(41));c=J(c);}e=new I;K(e);G(G(G(G(e,C(402)),d),C(403)),c);Bb(b,J(e));}
function R6(){B.call(this);this.La=null;}
function ARB(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bi();e=BT(c[0]);f=new I;K(f);G(G(f,C(404)),e);Bb(d,J(f));g=ABZ(KB(b,1));b=Bi();d=BT(c[1]);if(g===null)c=C(24);else{c=new I;K(c);BG(c,C(39));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BG(c,C(40));R(c,i[h]);h=h+1|0;}BG(c,C(41));c=J(c);}e=new I;K(e);G(G(G(G(e,C(405)),d),C(406)),c);Bb(b,J(e));}
function R4(){B.call(this);this.J6=null;}
function A_3(a,b){var c,d,e,f,g;c=b.data;d=Bi();e=BT(c[0]);f=new I;K(f);G(G(f,C(407)),e);Bb(d,J(f));g=CP(KB(b,1));b=Bi();d=BT(c[1]);c=ALB(g);e=new I;K(e);G(G(G(G(e,C(306)),d),C(408)),c);Bb(b,J(e));}
var AM4=H();
function Yb(){B.call(this);this.wg=null;}
function A6a(a,b){var c;c=a.wg.nx;c.gx=Fi(b,AEO(c));}
function AGO(){B.call(this);this.Ik=null;}
function A2a(a,b){return 0;}
function E8(){var a=this;B.call(a);a.ft=0;a.pA=null;}
function ACs(a){var b=new E8();AWG(b,a);return b;}
function AWG(a,b){a.ft=b;}
function ACu(a){return a.ft?0:1;}
var ACQ=H(0);
var Bf7=0.0;function Na(b){CA(b,1.0471975803375244,0.75,1.25,0.375);}
function Yo(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Kr(b.bR,Kr(c,Bf7));CA(d,b.bx/c,b.bC*c,A0S(b.bm*c,1.25),e);}
function AAS(b){var c;c=b.bC;return c-(c|0)>=0.25?0.0:0.5;}
function AJe(){Bf7=OT(OT(0.5,0.375),4.0);}
var Gi=H();
function Pb(){Gi.call(this);this.J7=null;}
function AFo(){Gi.call(this);this.J1=null;}
function ACZ(){Gi.call(this);this.IN=null;}
var EW=H(0);
var VM=H(0);
var AJa=H(0);
function AQa(b,c){var d,e,f,g,h,i,j,k,l,m;d=O(BE,8);e=C$(8);f=B0(16);g=0;h=0;i=0;while(true){j=BS(i,b);if(j>0)break;k=j>=0?10:(c.K(CE(i))).oI;if(k==10){d=Dz(Fh(f,0,g),d,h);e=AGK(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Jx(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=Dz(Fh(f,0,g),d,h);j=i+1|0;if(j<b&&(c.K(CE(j))).oI==10){e=AGK(1,e,h);i=j;}else e=AGK(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ADY;d=AJ2(d,h);if(m.length!=h)e=Qk(e,h);c.jE=d;c.Hc=e;return c;}
function ABS(b){var c,d;c=N(b);BH(b);d=new RV;d.w6=b;return AQa(c,d);}
var HV=H();
function AEw(){var a=this;HV.call(a);a.C=null;a.d0=null;a.fN=null;a.eF=null;a.er=null;a.j3=null;a.nb=null;a.cR=0;a.pl=0;a.D0=0.0;a.AA=null;}
function Cb(a,b){return a.C.data[b];}
function CJ(a){return a.C.data.length;}
function Hy(a,b){return a.C.data[b].ba;}
function AQp(a,b,c){var d,e,f,g,h;d=a.C;e=d.data;f=e[b];d=C0(d,e.length+1|0);e=d.data;a.C=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ez(O(CG,0));a.C.data[b+1|0]=f;}else if(c==f.ba){e[b]=f;e[b+1|0]=Ez(O(CG,0));}else{e=(JT(f,c)).data;d=a.C.data;d[b]=e[0];d[b+1|0]=e[1];}G3(a,b,c,0,C(309));}
function Nb(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=Ez(NH(d.v,e.v));g=a.C;h=g.data.length;if(b<h&&b>=0){i=O(DJ,h-1|0);c=i.data;AEb(g,b,i);a.C=i;c[b]=f;return;}d=new Bx;X(d);M(d);}
function ADA(a,b,c,d){var e,f,g,h,i;if(b<c){e=AHO(b,0,1,E2(KJ(a,b,c)));US(a,b,c);Mz(a,e);}f=d.data.length;if(!f)return;g=a.C;h=O(DJ,g.data.length+f|0);Cm(g,0,h,0,b);Cm(d,0,h,b,f);g=a.C;i=g.data;Cm(g,b,h,b+f|0,i.length-b|0);a.C=h;Mz(a,AHO(b,0,0,AIP(AH5(AW8(d,0,f),new Uz),ALg(C(309),C(20),C(309)))));}
function AIa(a,b,c){var d,e,f,g;d=a.C;e=d.data;f=Np(FK(BD(d)),c-b|0);g=b;while(g<c){f.data[g-b|0]=e[g];g=g+1|0;}return f;}
function US(a,b,c){var d,e,f,g;d=a.C;e=d.data.length;if(b<e&&b>=0){if(c<=e&&c>=0){f=O(DJ,(e-c|0)+b|0);AKx(d,b,c,f);a.C=f;return;}g=new Bx;X(g);M(g);}g=new Bx;X(g);M(g);}
function Rd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].ba?0:1)){d=(Cb(a,b)).v.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<N(h.z)){e=P(h.z,g);break a;}g=g-N(h.z)|0;f=f+1|0;}e=0;}G3(a,b,c,1,E9(e));h=a.C.data[b];d=h.v;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=N(i[e].z);if(c<b)break;c=c-b|0;e=e+1|0;}}if(N(i[e].z)==1)h.v=AEb(d,e,O(CG,f-1|0));else{j=i[e];if(c<=0)k=EH(C3(j.z,1),j.cm,j.bZ);else if(c>=(N(j.z)-1|0)){k=new CG;l=j.z;AFU(k,Cd(l,0,N(l)-1|0),j.cm,j.bZ);}else{d=B0(N(j.z)-1
|0);m=d.data;b=0;while(b<c){m[b]=P(j.z,b);b=b+1|0;}b=m.length;while(c<b){k=j.z;n=c+1|0;m[c]=P(k,n);c=n;}k=EH(E2(d),j.cm,j.bZ);}i[e]=k;}h.ba=h.ba-1|0;FN(h);}else if(b!=(d.length-1|0)){G3(a,b,c,1,C(309));Nb(a,b);}}
function AIY(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AEU(a.C.data[b],c,e[0]);return;}g=f-1|0;d=(JT(a.C.data[b],c)).data;h=d[0];i=d[1];d=a.C;j=C0(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.v.data;f=l.length;c=!f?0:N(l[f-1|0].z);Of(h,h.v.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Eu(e[m])?ABH(e[m]):Ez(O(CG,0));d[b+m|0]=k;m=m+1|0;}Of(i,0,0,e[g]);d[b+g|0]=i;a.C=j;}
function Yg(a,b){var c,d,e,f,g,h,i,j,k;c=E3(b);d=G4(b);e=c.T;if(e==d.T)return Cd(FS(a.C.data[e]),c.bl,d.bl);f=new I;K(f);b=a.C.data[c.T];e=c.bl;Bl(BG(f,C3(FS(b),e)),10);g=a.C;h=g.data;e=c.T+1|0;i=d.T;j=h.length;if(e>=0&&i>=e&&i<=j){k=AW8(g,e,i);b=new Q8;b.v_=f;while(true){c=new AB4;c.Ge=b;if(!ANd(k,c))break;}b=a.C.data[d.T];i=d.bl;BG(f,Cd(FS(b),0,i));return J(f);}b=new Qe;X(b);M(b);}
function Rl(a,b,c){var d;AHx(a,b);d=E3(b);G3(a,d.T,d.bl,1,c);}
function AHx(a,b){var c,d,e;c=E3(b);d=G4(b);e=c.T;if(e==d.T)IP(a.C.data[e],c.bl,d.bl);else{b=a.C.data[e];IP(b,c.bl,b.ba);IP(a.C.data[d.T],0,d.bl);US(a,c.T+1|0,d.T);Nb(a,c.T);}}
function Kf(a,b,c){return Ej(b,HJ(Cb(a,b),c));}
function Lx(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(Cb(a,c)).ba|0)>=b)return BP(c,b-d|0);d=d+((Cb(a,c)).ba+1|0)|0;c=c+1|0;}return BP(e,0);}
function Hp(a,b){return Mi(a,0,b);}
function Mi(a,b,c){var d,e;d=0;e=a.C.data.length;while(b<c){d=d+Hy(a,b)|0;b=b+1|0;if(b>=e)continue;d=d+1|0;}return d;}
function NF(a,b){return Qg(Cb(a,b.bA),b.bG);}
function F6(a){return KJ(a,0,a.C.data.length);}
function KJ(a,b,c){var d,e,f,g,h,i,j,k;d=B0(Mi(a,b,c));e=d.data;f=0;while(b<c){g=a.C.data[b].v.data;h=g.length;i=0;while(i<h){j=g[i].z;Tw(j,0,N(j),d,f);f=f+N(j)|0;i=i+1|0;}b=b+1|0;if(b>=CJ(a))continue;k=f+1|0;e[f]=10;f=k;}return d;}
function G3(a,b,c,d,e){Mz(a,AHO(b,c,d,e));}
function Mz(a,b){var c,d;a.cR=a.cR+1|0;c=a.j3;d=O(Ka,1);d.data[0]=b;Br(c,d);P3(a,b);}
function P3(a,b){var c;c=Hp(a,b.di)+b.fc|0;if(!b.iN){ABG(a.d0,c,N(b.d2));W$(a.fN,c,N(b.d2));}else{YC(a.d0,c,N(b.d2));RB(a.fN,c,N(b.d2));}VX(a,b,0);}
function AAC(a,b){var c,d,e;c=YV(b.d2,C(309),(-1));if(b.iN){AIY(a,b.di,b.fc,c);ABG(a.d0,Hp(a,b.di)+b.fc|0,N(b.d2));W$(a.fN,Hp(a,b.di)+b.fc|0,N(b.d2));}else{c=c.data;d=ASk();Cn(d.ca,b.di,b.fc);e=c.length;if(e==1)Cn(d.b0,b.di,b.fc+N(c[0])|0);else Cn(d.b0,(b.di+e|0)-1|0,N(c[e-1|0]));AHx(a,d);YC(a.d0,Hp(a,b.di)+b.fc|0,N(b.d2));RB(a.fN,Hp(a,b.di)+b.fc|0,N(b.d2));}VX(a,b,1);return b.rE;}
function AF7(a){return a.pl==a.cR?0:1;}
function RJ(a){a.pl=a.cR;}
function O2(a){var b,c,d;a.nb=BI(a.C.data.length+1|0);b=0;while(b<a.C.data.length){c=a.nb.data;d=b+1|0;c[d]=(c[b]+(Cb(a,b)).ba|0)+1|0;b=d;}}
function Zl(a,b){var c,d,e,f,g,h;c=a.nb;if(c===null){d=0;e=0;a:{while(true){c=a.C.data;f=c.length;if(e>=f)break;g=c[e].ba;if(b<=(d+g|0)){h=Ej(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=Ej(f,0);}return h;}d=APB(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=Ej(d,b-(d<0?0:a.nb.data[d])|0);if(h.bG>=(Cb(a,h.bA)).ba){h.bA=h.bA+1|0;h.bG=0;}return h;}
function VX(a,b,c){var d,e;d=a.AA;if(d!==null){e=KI(c);d=d.Et;c=e.gm;d=d.gA;if(d!==null){e=d.kb;if(e!==null)e.dT(d,b,KI(c));}}}
function CD(){Cu.call(this);this.p3=null;}
var Bf8=null;var Bf9=null;var Bf$=null;var Bf_=null;var Bga=null;var Bgb=null;var Bgc=null;var Bgd=null;var Bge=null;var Bgf=null;var Bgg=null;var Bgh=null;var Bgi=null;var Bgj=null;var Bgk=null;var Bgl=null;function AKd(){AKd=Bn(CD);A6h();}
function EG(a,b,c){var d=new CD();AFS(d,a,b,c);return d;}
function A9X(a,b,c,d){var e=new CD();AMn(e,a,b,c,d);return e;}
function AO3(){AKd();return Bgl.dN();}
function AFS(a,b,c,d){AKd();Ds(a,b,c);a.p3=KV(d,null);}
function AMn(a,b,c,d,e){AKd();Ds(a,b,c);a.p3=KV(d,e);}
function A6h(){var b;b=new CD;GG();AFS(b,C(209),0,BfR);Bf8=b;Bf9=EG(C(210),1,U(C(409)));Bf$=EG(C(212),2,U(C(410)));Bf_=EG(C(214),3,U(C(411)));Bga=EG(C(216),4,U(C(409)));Bgb=EG(C(217),5,DV(188,63,60));Bgc=EG(C(219),6,U(C(412)));Bgd=EG(C(221),7,U(C(413)));Bge=EG(C(223),8,U(C(414)));Bgf=A9X(C(225),9,BfR,DV(52,65,52));Bgg=A9X(C(226),10,U(C(415)),U(C(416)));Bgh=EG(C(227),11,U(C(417)));Bgi=EG(C(229),12,U(C(418)));Bgj=EG(C(231),13,BfR);b=EG(C(232),14,U(C(233)));Bgk=b;Bgl=L(CD,[Bf8,Bf9,Bf$,Bf_,Bga,Bgb,Bgc,Bgd,Bge,Bgf,
Bgg,Bgh,Bgi,Bgj,b]);}
var AQP=H();
function Lk(b,c){var d,e,f;if(c<=0)return C(20);d=B0(c);e=d.data;e[0]=AP3(Ey(b,52));f=1;while(f<c){e[f]=AP3(Ey(b,62));f=f+1|0;}return E2(d);}
function AP3(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AKv=H();
var I1=H(Dm);
var Bgm=null;function APx(){Bgm=F($rt_bytecls());}
function AQY(){var a=this;B.call(a);a.PH=null;a.VV=null;a.OR=0;a.Ww=0;}
var AHq=H(0);
function APl(){B.call(this);this.j6=null;}
function Ba5(a){var b=new APl();A7K(b,a);return b;}
function A7K(a,b){a.j6=b;}
function ABZ(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.j6));}
function Fw(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.j6));}
function CP(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.j6));}
function A4b(a){var b,c;b=a.j6.byteLength;c=new I;K(c);G(R(G(c,C(419)),b),C(420));return J(c);}
var Di=H();
var APC=H(Di);
var AP1=H(Di);
var AN7=H(Di);
var AOg=H(Di);
var AQi=H(Di);
function AQB(){var a=this;B.call(a);a.ca=null;a.b0=null;a.ed=0;}
function ASk(){var a=new AQB();A_7(a);return a;}
function A37(a){var b=new AQB();AXx(b,a);return b;}
function A_7(a){a.ca=new Id;a.b0=new Id;}
function AXx(a,b){a.ca=new Id;a.b0=new Id;KX(a,b);}
function KX(a,b){AGy(a.ca,b.ca);AGy(a.b0,b.b0);a.ed=b.ed;}
function PS(a,b,c){Cn(a.b0,b,c);if(!a.ed)Cn(a.ca,b,c);}
function Tg(a,b){Cn(a.ca,b,0);Cn(a.b0,b+1|0,0);}
function E3(a){if(U1(a.ca,a.b0)>0)return a.b0;return a.ca;}
function G4(a){if(U1(a.ca,a.b0)<0)return a.b0;return a.ca;}
function APH(a,b){var c,d,e,f;c=a.ca;d=c.T;e=a.b0;if(d==e.T&&c.bl==e.bl?1:0)return null;c=E3(a);e=G4(a);d=c.T;if(d<=b){f=BS(b,e.T);if(f<=0)return BP(b<=d?c.bl:0,f>=0?e.bl:(-1));}return null;}
function DU(a){var b,c;b=a.ca;c=a.b0;return (b.T==c.T&&b.bl==c.bl?1:0)?0:1;}
function AQj(a,b){var c,d;if(!DU(a))return 0;c=E3(a);d=G4(a);return c.T<=b&&b<d.T?1:0;}
function W3(){var a=this;B.call(a);a.gb=null;a.f8=0;a.eA=0;}
function AG3(a,b){var c,d,e;c=a.f8;d=a.gb;if(c==d.data.length)a.gb=C0(d,c+16|0);d=a.gb.data;e=a.f8;a.f8=e+1|0;d[e]=b;}
function AEC(a){var b,c,d,e;b=a.f8;if(b?0:1)return;c=a.eA;d=b-1|0;if(c==d)a.eA=c-1|0;e=a.gb.data;a.f8=d;e[d]=null;}
function Up(){B.call(this);this.Et=null;}
function RV(){B.call(this);this.w6=null;}
function A2G(a,b){return RU(P(a.w6,b.bf));}
function ADY(){var a=this;B.call(a);a.jE=null;a.Hc=null;}
function YY(){B.call(this);this.uA=null;}
function AVQ(a){var b;b=a.uA;Bb(Bi(),b);}
var IO=H(Cu);
var Bgn=null;var BeU=null;var Bgo=null;function ALa(){ALa=Bn(IO);A4U();}
function Bap(a,b){var c=new IO();AJQ(c,a,b);return c;}
function AYY(){ALa();return Bgo.dN();}
function AJQ(a,b,c){ALa();Ds(a,b,c);}
function A4U(){var b;Bgn=Bap(C(421),0);b=Bap(C(422),1);BeU=b;Bgo=L(IO,[Bgn,b]);}
function Id(){var a=this;B.call(a);a.T=0;a.bl=0;}
function Cn(a,b,c){a.T=b;a.bl=c;}
function AGy(a,b){a.T=b.T;a.bl=b.bl;}
function U1(a,b){var c;c=BS(a.T,b.T);if(c)return c;return BS(a.bl,b.bl);}
function PC(){var a=this;B.call(a);a.rI=null;a.qK=null;}
function NL(a){return a.rI.bA;}
function Me(a){return a.rI.bG;}
function DJ(){var a=this;B.call(a);a.v=null;a.ba=0;a.hw=null;a.fG=null;a.ff=null;a.jB=null;a.ii=0;a.kE=0;a.k0=0;}
var Bgp=0;var Bgq=0;var Bf2=0;function ABH(a){var b=new DJ();APS(b,a);return b;}
function Ez(a){var b=new DJ();ADG(b,a);return b;}
function APS(a,b){var c;c=O(CG,1);c.data[0]=AOh(b);ADG(a,c);}
function ADG(a,b){var c,d,e,f;c=b.data;a.v=b;d=0;e=c.length;f=0;while(f<e){d=d+N(c[f].z)|0;f=f+1|0;}a.ba=d;FN(a);}
function Is(a){return a.v.data.length;}
function IY(a,b){return a.v.data[b];}
function HJ(a,b){var c;c=Ly(a,b);return c<=0?0:a.ff.data[c-1|0];}
function Ly(a,b){var c,d,e,f;c=a.v.data.length;if(!c)return (-1);if(!(a.ff!==null&&!a.k0)){Y2(a);d=0;e=0;f=a.v.data.length;while(d<f){e=e+N(a.v.data[d].z)|0;a.ff.data[d]=e;d=d+1|0;}a.k0=0;}d=AF4(a.ff,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Qg(a,b){var c;c=a.v.data;if(!c.length)return null;return c[Ly(a,b)];}
function IP(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.ba){a.v=O(CG,0);FN(a);a.ba=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.v.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=N(g[e].z);i=N(a.v.data[f].z);j=BS(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.v.data[f];if(!b&&c==N(k.z)?1:0){g=a.v;a.v=AEb(g,e,O(CG,g.data.length-1|0));a.ba=a.ba-d|0;FN(a);return;}a.v.data[e]=EH(Gp(Cd(k.z,0,b),C3(k.z,c)),k.cm,k.bZ);}else{g=a.v.data;l=g[e];m=g[f];if(b){if
(b!=N(l.z))a.v.data[e]=EH(Cd(l.z,0,b),l.cm,l.bZ);e=e+1|0;}if(c==N(m.z))f=f+1|0;else if(c)a.v.data[f]=EH(C3(m.z,c),m.cm,m.bZ);g=a.v;a.v=AKx(g,e,f,O(CG,(g.data.length-f|0)+e|0));}a.ba=a.ba-d|0;FN(a);}
function JT(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return L(DJ,[Ez(O(CG,0)),a]);if(b>=a.ba)return L(DJ,[a,Ez(O(CG,0))]);c=a.v;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=N(e[d].z);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return L(DJ,[Ez(M3(c,0,O(CG,d))),Ez(M3(c,d,O(CG,f-d|0)))]);h=e[d];e=M3(c,0,O(CG,d+1|0));i=e.data;j=M3(c,d,O(CG,f-d|0));c=j.data;i[d]=EH(Cd(h.z,0,b),h.cm,h.bZ);c[0]=EH(C3(h.z,b),h.cm,h.bZ);return L(DJ,[Ez(e),Ez(j)]);}
function AEU(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.v.data;if(e>=f.length)break a;g=N(f[d].z);if(b<=g)break;b=b-g|0;d=e;}}Of(a,d,b,c);}
function Of(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Eu(d))return;e=a.v;f=e.data;g=f.length;if(!g){h=O(CG,1);h.data[0]=AOh(d);a.v=h;}else if(!b&&!c){h=O(CG,g+1|0);f=h.data;Cm(e,0,h,1,g);f[0]=AOh(d);a.v=h;}else{i=f[b];if(c<=0)j=EH(Gp(d,i.z),i.cm,i.bZ);else if(c>=N(i.z))j=EH(Gp(i.z,d),i.cm,i.bZ);else{k=N(d);l=k+c|0;m=N(i.z)-c|0;e=B0(N(i.z)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.z,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.z,g+c|0);g=g+1|0;}j=EH(E2(e),i.cm,i.bZ);}f[b]=j;}a.ba=a.ba
+N(d)|0;FN(a);}
function RD(a){var b,c,d,e,f,g;b=0;c=a.v.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Kh(f)){if(P(f.z,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Pi(a,b,c){var d,e,f,g,h,i,j;d=a.v.data.length;e=a.hw;if(!(e!==null&&e.data.length>=d)){a.hw=ARp(d);a.fG=BI(d);a.ii=1;}Y2(a);if(!a.ii)Bgq=Bgq+1|0;else{f=0;g=0.0;Bgp=Bgp+1|0;h=0;while(h<d){i=c.data;j=a.v.data[h];f=f+N(j.z)|0;a.ff.data[h]=f;Cv(b,i[LZ(j)]);g=g+EY(b,j.z);a.hw.data[h]=g;a.fG.data[h]=g+0.5|0;h=h+1|0;}a.ba=f;a.ii=0;a.k0=0;}}
function Y2(a){var b;b=a.ff;if(!(b!==null&&b.data.length>=a.v.data.length)){a.ff=BI(a.v.data.length);a.k0=1;}}
function WF(a){a.ii=1;a.jB=null;}
function FN(a){WF(a);a.kE=1;a.k0=1;}
function AEP(a,b,c,d){var e,f,g,h,i,j,k;if(a.jB===null)a.jB=O($rt_arraycls($rt_intcls()),a.v.data.length);e=a.jB.data[d];if(e===null){e=c.data;f=a.v.data[d];Cv(b,e[LZ(f)]);f=f.z;e=BI(N(f)-1|0);c=Hl(f);g=!d?0.0:a.hw.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BE;k=i+1|0;QI(f,c,0,k);h[i]=g+EY(b,f)+0.5|0;i=k;}a.jB.data[d]=e;}return e;}
function HR(a,b,c,d){var e,f,g,h,i;if(a.v.data.length&&b){if(!(!a.ii&&a.fG!==null))Pi(a,c,d);if(b>=a.ba)return a.fG.data[a.v.data.length-1|0];e=0;f=0;a:{while(true){g=a.v.data;if(f>=g.length)break a;h=e+N(g[f].z)|0;i=BS(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.fG.data[f];}return (AEP(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function GB(a){var b,c,d;a:{b=a.v.data.length;if(b){c=a.fG.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function H5(a,b){var c;if(b>=a.ba)return b+1|0;c=Ly(a,b);return a.ff.data[c];}
function FS(a){var b,c,d,e;b=new I;FZ(b,a.ba);c=a.v.data;d=c.length;e=0;while(e<d){BG(b,c[e].z);e=e+1|0;}return J(b);}
function A8r(a){var b,c,d,e;b=a.v.data;c=b.length;if(c==1)d=AKr(b[0]);else{d=new I;K(d);BG(d,C(39));e=0;while(e<c){if(e>0)BG(d,C(40));G(d,b[e]);e=e+1|0;}BG(d,C(41));d=J(d);}return d;}
function AKw(){Bf2=0;}
function ACt(){var a=this;B.call(a);a.go=null;a.fS=null;}
function A3X(a,b){var c=new ACt();A5m(c,a,b);return c;}
function A5m(a,b,c){a.go=b;a.fS=c;}
function W$(a,b,c){var d;d=a.go;if(d===null)return;ADz(a,d,b,c);}
function RB(a,b,c){var d;d=a.go;if(d===null)return;AF$(a,d,b,c);}
function ADz(a,b,c,d){var e,f,g,h;e=b.fI.cx();while(e.da()){Zs(a,e.cz(),c,d);}e=b.gq.cx();while(e.da()){f=e.cz();g=new WC;g.CG=a;FA(a,g,f,c,d);}h=b.i7.cx();while(h.da()){e=h.cz();Zs(a,e.m1,c,d);f=new WD;f.Ah=a;FA(a,f,e.mo,c,d);}b=b.dl.cx();while(b.da()){ADz(a,b.cz(),c,d);}}
function Zs(a,b,c,d){Mb(a,b.eX,c,d);}
function FA(a,b,c,d,e){var f,g;a:{if(c instanceof IL){f=c.gg;g=new ZE;g.tE=a;g.tC=b;g.tB=d;g.tD=e;Hh(f,g);}else{if(!(c instanceof Lr)){if(!(c instanceof Ks))break a;f=c;FA(a,b,f.jm,d,e);FA(a,b,f.iS,d,e);return;}g=c.jy;f=new ZF;f.Gq=a;f.Gp=b;f.Go=d;f.Gn=e;Hh(g,f);}}if(c!==null){c=c.fm;if(c!==null)b.dT(c,CE(d),CE(e));}}
function Mb(a,b,c,d){var e;e=b.d4;if(e>=c)b.d4=e+d|0;}
function AF$(a,b,c,d){var e,f,g,h;e=b.fI.cx();while(e.da()){K7(a,(e.cz()).eX,c,d);}e=b.gq.cx();while(e.da()){f=e.cz();g=new VA;g.x$=a;FA(a,g,f,c,d);}h=b.i7.cx();while(h.da()){e=h.cz();K7(a,e.m1.eX,c,d);f=new VC;f.Ey=a;FA(a,f,e.mo,c,d);}b.fI.rT(new Vz);b.gq.rT(new Vy);b=b.dl.cx();while(b.da()){AF$(a,b.cz(),c,d);}}
function K7(a,b,c,d){var e;e=b.d4;if(e>=c)b.d4=e-d|0;}
function MS(){var a=this;EI.call(a);a.dO=0;a.cw=null;a.dF=0;a.Gr=0.0;a.o9=0;}
function IW(){var a=new MS();Tm(a);return a;}
function A5x(a,b){return O(IZ,b);}
function Tm(a){var b;b=AMH(16);a.dO=0;a.cw=O(IZ,b);a.Gr=0.75;Xd(a);}
function AMH(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function FH(a){var b;if(a.dO>0){a.dO=0;b=a.cw;AJR(b,0,b.data.length,null);a.dF=a.dF+1|0;}}
function Xd(a){a.o9=a.cw.data.length*a.Gr|0;}
function Ix(a,b){return AFv(a,b)===null?0:1;}
function PX(a){var b;b=new Xe;b.CT=a;return b;}
function Cz(a,b){var c;c=AFv(a,b);if(c===null)return null;return c.dd;}
function AFv(a,b){var c,d;if(b===null)c=Vt(a);else{d=b.nO();c=T3(a,b,d&(a.cw.data.length-1|0),d);}return c;}
function T3(a,b,c,d){var e;e=a.cw.data[c];while(e!==null&&!(e.nE==d&&ANz(b,e.c4))){e=e.dC;}return e;}
function Vt(a){var b;b=a.cw.data[0];while(b!==null&&b.c4!==null){b=b.dC;}return b;}
function OX(a){var b;if(a.q8===null){b=new S1;b.kH=a;a.q8=b;}return a.q8;}
function DX(a,b,c){var d,e,f,g;if(b===null){d=Vt(a);if(d===null){a.dF=a.dF+1|0;d=W9(a,null,0,0);e=a.dO+1|0;a.dO=e;if(e>a.o9)AGJ(a);}}else{e=b.nO();f=e&(a.cw.data.length-1|0);d=T3(a,b,f,e);if(d===null){a.dF=a.dF+1|0;d=W9(a,b,f,e);e=a.dO+1|0;a.dO=e;if(e>a.o9)AGJ(a);}}g=d.dd;d.dd=c;return g;}
function W9(a,b,c,d){var e,f;e=new IZ;ZA(e,b,null);e.nE=d;f=a.cw.data;e.dC=f[c];f[c]=e;return e;}
function AOt(a,b){var c,d,e,f,g,h,i,j;c=AMH(!b?1:b<<1);d=O(IZ,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cw.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.nE&b;j=h.dC;h.dC=e[i];e[i]=h;h=j;}f=f+1|0;}a.cw=d;Xd(a);}
function AGJ(a){AOt(a,a.cw.data.length);}
function M5(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.cw.data[0];while(e!==null){if(e.c4===null)break a;b=e.dC;d=e;e=b;}}else{f=La(b);g=a.cw.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.nE==f&&ANz(b,e.c4))){h=e.dC;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.dC=e.dC;else a.cw.data[c]=e.dC;a.dF=a.dF+1|0;a.dO=a.dO-1|0;}if(e===null)return null;return e.dd;}
function ANz(b,c){return b!==c&&!b.bB(c)?0:1;}
function CG(){var a=this;B.call(a);a.z=null;a.cm=0;a.bZ=0;}
function AOh(a){var b=new CG();A4J(b,a);return b;}
function EH(a,b,c){var d=new CG();AFU(d,a,b,c);return d;}
function A4J(a,b){AFU(a,b,0,0);}
function AFU(a,b,c,d){a.z=b;a.cm=c;a.bZ=d;}
function LZ(a){return a.bZ&3;}
function Kt(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Kh(a){return N(a.z);}
function AKr(a){var b,c,d,e;b=Bah(a.z);c=a.bZ;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BG(b,C(423));if(d)BG(b,C(424));if(e)BG(b,C(425));return J(b);}
var Pz=H(MS);
function AED(){var a=this;B.call(a);a.dW=null;a.gL=0;}
var Bgr=null;function ALY(a){var b=new AED();AMq(b,a);return b;}
function AMq(a,b){a.gL=0;a.dW=b;}
function Tb(a,b){var c;if(b.fx)return b;b=Ci(b.bD);while(true){if(!Ck(b))return null;c=Tb(a,Cl(b));if(c!==null)break;}return c;}
function AA9(a,b,c){var d,e,f,g;d=Po(a,a.dW,b);if(d===null)return;b=c.cL;e=b===null?Bgs:b.dl;f=c.bD;c=a.dW;if(d===c){if(c.cL===null)c.cL=b;b=new AET;b.CC=a;Hh(f,b);b=new AES;b.x8=a;e.f6(b);b=a.dW;b.bD=f;c=b.cL;if(c!==null)c.dl=e;b.fx=0;return;}if(!Fk(f)){c=d.iK;if(c!==null){b=new ABC;b.tI=c;Hh(f,b);g=MB(c.bD,d);if(g==(-1))Hq(c.bD,f);else{Fs(c.bD,g);ANT(c.bD,g,f);}}}b=d.cL;if(b!==null){b=b.iB;c=new VH;c.vo=b;e.f6(c);g=MB(b.dl,d.cL);if(g==(-1))Hq(b.dl,e);else{b.dl.n2(g);b.dl.xu(g,e);}}}
function Po(a,b,c){var d,e,f,g;d=b.ci;if(d.cn==c.cn&&d.ck==c.ck?1:0){d=Ci(b.bD);while(Ck(d)){e=Po(a,Cl(d),c);if(e!==null)return e;}return b;}b=Ci(b.bD);while(true){if(!Ck(b))return null;d=Cl(b);f=c.cn;g=c.ck;e=d.ci;if(e.cn<=f&&g<=e.ck?1:0){e=Po(a,d,c);if(e!==null)break;}}return e;}
function AFI(a,b,c){Br(c,b.ci);b=Ci(b.bD);while(Ck(b)){AFI(a,Cl(b),c);}}
function ABG(a,b,c){a.gL=0;MV(a,a.dW,b,c);}
function MV(a,b,c,d){var e;if(Dy(b)<c)return;a:{if(DK(b)>c){Nz(b,d);Iq(b,d);b=Ci(b.bD);while(Ck(b)){MV(a,Cl(b),c,d);}}else{if(!Ot(b,c)){if(a.gL)break a;if(Dy(b)!=c)break a;}Iq(b,d);if(DK(b)==c&&a.gL)Nz(b,d);e=Ci(b.bD);while(Ck(e)){MV(a,Cl(e),c,d);}if(!a.gL){b.fx=1;a.gL=1;}}}}
function YC(a,b,c){a.gL=0;Ox(a,a.dW,b,c);}
function Ox(a,b,c,d){var e,f,g,h;if(Dy(b)<c)return;e=DK(b);f=c+d|0;if(e>f){e= -d|0;Nz(b,e);Iq(b,e);g=Ci(b.bD);while(Ck(g)){Ox(a,Cl(g),c,d);}b.bD=AAq(a,b.bD);}else{g=b.ci;if(c<=g.cn&&g.ck<=f?1:0){if(b===a.dW){NK(b,0);Ow(b,0);g=b.cL;if(g!==null)g.dl.kD();}else{NK(b,(-1));Ow(b,(-1));g=b.cL;if(g!==null){AID(g);b.cL=null;}}Md(b.bD);b.fx=1;a.gL=1;}else{h=Ot(b,c);f=Ot(b,f);e=b.bD.r?0:1;if(h&&f)Iq(b, -d|0);else if(h)Ow(b,c);else{if(!f)return;NK(b,c);Iq(b, -d|0);}a:{if(e)b.fx=1;else{g=Ci(b.bD);while(true){if(!Ck(g))break a;Ox(a,
Cl(g),c,d);}}}b.bD=AAq(a,b.bD);}}}
function AAq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BO();d=null;e=Bgr;f=b.cG;g=b.r;if(e===null)e=BdL;h=O(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}Ms(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.cq=b.cq+1|0;b=Ci(b);while(Ck(b)){m=Cl(b);if(DK(m)==Dy(m))continue;if(!m.fx){if(d!==null){Br(c,d);d=null;}Br(c,m);}else if(d===null)d=m;else{n=A0w(Mf(Bh(DK(d),DK(m)),Be(Dy(d),Dy(m)),d.ci.gN),d.iK,d.cL);n.fx=1;d=m.cL;if(d===null)d=n;else{AID(d);d=n;}}}if(d!==null)Br(c,d);return c;}
function AH2(a,b,c,d){var e,f,g,h,i,j,k,l;if((Dy(c)-DK(c)|0)<43)e=Cd(d,DK(c),Dy(c));else{e=Cd(d,DK(c),DK(c)+20|0);f=Cd(d,Dy(c)-20|0,Dy(c));g=new I;K(g);G(G(G(g,e),C(304)),f);e=J(g);}h=new I;K(h);i=N(e)-N(C(309))|0;j=0;while(j<=i){k=0;a:{while(true){if(k>=N(C(309))){G(h,C(426));j=j+(N(C(309))-1|0)|0;break a;}if(P(e,j+k|0)!=P(C(309),k))break;k=k+1|0;}Bl(h,P(e,j));}j=j+1|0;}G(h,C3(e,j));h=J(h);e=Bi();f=BT(c);l=new I;K(l);g=R(l,b);Bl(g,32);f=G(g,f);Bl(f,9);G(f,h);Bb(e,J(l));c=Ci(c.bD);i=b+1|0;while(Ck(c)){AH2(a,
i,Cl(c),d);}}
function AMx(){Bgr=new Rg;}
function AQT(){var a=this;B.call(a);a.cn=0;a.ck=0;a.gN=0;}
function Mf(a,b,c){var d=new AQT();A4G(d,a,b,c);return d;}
function A4G(a,b,c,d){a.cn=b;a.ck=c;a.gN=d;}
function AZC(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return a.cn==c.cn&&a.ck==c.ck&&a.gN==c.gN?1:0;}return 0;}
function ANt(a){var b,c,d,e;b=a.cn;c=a.ck;d=a.gN;e=new I;K(e);Bl(e,40);Bl(R(G(R(G(R(e,b),C(40)),c),C(40)),d),41);return J(e);}
function A3H(a,b){var c;b=b;c=BS(a.cn,b.cn);if(!c)c=BS(b.ck,a.ck);return c;}
var Rg=H();
function A$u(a,b,c){var d;b=b;c=c;b=b.ci;c=c.ci;d=BS(b.cn,c.cn);if(!d)d=BS(c.ck,b.ck);return d;}
function ADJ(){var a=this;B.call(a);a.ci=null;a.iK=null;a.bD=null;a.cL=null;a.fx=0;}
function A0w(a,b,c){var d=new ADJ();ALW(d,a,b,c);return d;}
function ALW(a,b,c,d){a.fx=0;a.ci=b;a.iK=c;a.bD=BO();a.cL=d;}
function AMP(b){return ADV(b,null);}
function ADV(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bf(b);e=Bf(b);f=Bf(b);g=Bf(b);h=Bf(b);i=Mf(d,e,f);j=new ADJ;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}ALW(j,i,null,l);m=0;while(m<g){l=ADV(b,c);l.iK=j;Br(j.bD,l);m=m+1|0;}return j;}
function AJs(b,c,d){var e,f,g,h,i;a:{e=b.ci;f=b.bD;g=e.cn;h=e.ck;i=e.gN;By(c,g);HX(c,h,i);By(c,f.r);if(d!==null){e=b.cL;if(e!==null&&AHn(d,e)){g=(Qn(d,b.cL)).bf;break a;}}g=(-1);}By(c,g);b=Ci(f);while(Ck(b)){AJs(Cl(b),c,d);}}
function DK(a){return a.ci.cn;}
function Dy(a){return a.ci.ck;}
function NK(a,b){a.ci.cn=b;}
function Ow(a,b){a.ci.ck=b;}
function Nz(a,b){var c;c=a.ci;c.cn=c.cn+b|0;}
function Iq(a,b){var c;c=a.ci;c.ck=c.ck+b|0;}
function Ot(a,b){return DK(a)<=b&&b<Dy(a)?1:0;}
function ARU(a){var b,c,d;b=ANt(a.ci);c=a.fx;d=new I;K(d);KC(G(G(d,b),C(40)),c);return J(d);}
function ASF(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return BW(a.ci,c.ci)&&BW(a.bD,c.bD)?1:0;}return 0;}
var Ku=H(0);
function HS(){var a=this;B.call(a);a.c4=null;a.dd=null;}
function Bgt(a,b){var c=new HS();ZA(c,a,b);return c;}
function ZA(a,b,c){a.c4=b;a.dd=c;}
function A4e(a,b){var c,d;if(a===b)return 1;if(!EX(b,Ku))return 0;a:{b:{c:{d:{c=b;b=a.c4;if(b!==null){if(!b.bB(c.c4))break c;else break d;}if(c.c4!==null)break c;}b=a.dd;if(b!==null){if(!b.bB(c.dd))break c;else break b;}if(c.dd===null)break b;}d=0;break a;}d=1;}return d;}
function ATk(a){var b,c,d;b=a.c4;c=a.dd;d=new I;K(d);b=G(d,b);Bl(b,61);G(b,c);return J(d);}
function IZ(){var a=this;HS.call(a);a.nE=0;a.dC=null;}
var ANN=H();
function BL(b,c){return Dd(b*c);}
function Pa(){var a=this;EZ.call(a);a.eD=null;a.uX=null;a.cy=null;a.ef=null;a.em=null;a.h7=null;a.nG=0;a.pZ=0.0;a.qS=0;}
function Bgu(a,b,c){var d=new Pa();S8(d,a,b,c);return d;}
function S8(a,b,c,d){var e,f;Ll(a,c,b,d);a.nG=0;c=AQv(a.P.F);a.cy=c;Qc(c,b);e=I$(C(240),0);f=I$(C(241),0);EO(e);EO(f);b=new VU;b.vB=a;e.cM=b;b=new VS;b.yg=a;f.cM=b;Eo(a.cy.c8,e);Eo(a.cy.c5,f);c=LX(a,a.cy,0.0);a.eD=c;b=new VT;b.AY=a;c.jT=b;b=new VR;b.DD=a;c.jO=b;Ee(a.P,c);OW();a.h7=Bgv;}
function ASE(a){var b;a.eD=null;a.cy=null;b=null;a.em=b;a.ef=b;}
function A5S(a,b){var c,d,e,f;if(B6(a.cy.c8,b))return AEE(a,1,C(240));if(B6(a.cy.c5,b))return AEE(a,0,C(241));c=O(Bw,2);d=c.data;b=new Bw;e=new ADP;e.sN=a;B8(b,e,C(240));d[0]=b;b=new Bw;f=new ADO;f.y7=a;B8(b,f,C(241));d[1]=b;return CT(c);}
function AEE(a,b,c){var d,e,f,g;d=O(Bw,1);e=d.data;f=new Bw;g=new AG6;g.DG=a;g.DH=b;B8(f,g,c);e[0]=f;return CT(d);}
function L1(a,b,c){var d,e,f,g,h,i,j;d=a.cy;e=d.c8;if(e!==null&&d.c5!==null){if(a.ef!==null&&a.em!==null){a.nG=a.nG+1|0;K4(e,a.h7,1);K4(a.cy.c5,a.h7,2);f=XD(a.cy.c8);g=XD(a.cy.c5);PG(a.cy,AUP(f,g));IB(a.eD.U.b1);if(Ie(a.h7)){h=Iv(a.eD.U.b1)-a.pZ;if(!a.qS){d=Dt(a.ef);i=Dt(a.em);j=FW(h);e=new I;K(e);R(G(R(G(R(G(G(G(G(e,d),C(427)),i),C(428)),j),C(429)),b),C(430)),c);d=J(e);C2(a.eD,d);a.qS=1;}e=Bi();b=FW(1000.0*h);d=new I;K(d);G(R(G(d,C(431)),b),C(432));Bb(e,J(d));e=Bi();b=a.nG;d=new I;K(d);R(G(d,C(433)),b);Bb(e,
J(d));}return;}return;}}
function Zm(a,b){K4(b,a.h7,b!==a.cy.c8?2:1);}
function I_(a,b){var c,d;c=a.P.F.b1;d=new AGZ;d.tk=a;d.tj=b;G9(c,d);}
function ABA(){B.call(this);this.Ix=null;}
function A8V(a){return Ea(0);}
var Ed=H(Bx);
function G$(){var a=this;B.call(a);a.bM=0;a.bJ=0;a.bL=0;a.bI=0;a.eg=0;}
function D3(a,b,c,d,e){var f=new G$();A9Z(f,a,b,c,d,e);return f;}
function A9Z(a,b,c,d,e,f){a.bM=b;a.bJ=c;a.bL=d;a.bI=e;a.eg=f;}
function Fx(a){return a.bM+a.bJ|0;}
function FB(a){return a.bL+a.bI|0;}
function AXi(a){var b,c,d,e,f,$$je;b=L(B,[CE(a.bM),CE(a.bM+a.bJ|0),CE(a.bL),CE(a.bL+a.bI|0)]);EQ();c=new AHf;d=AAz();e=new I;K(e);c.ly=e;c.Jr=d;Y8(c);a:{try{AOb(Bbd(c,c.ly,d,C(434),b));break a;}catch($$e){$$je=Ev($$e);if($$je instanceof H8){f=$$je;}else{throw $$e;}}c.KL=f;}Y8(c);return J(c.ly);}
function ND(){var a=this;B.call(a);a.fT=null;a.fU=null;a.be=null;}
function A8U(a,b,c){var d=new ND();VZ(d,a,b,c);return d;}
function VZ(a,b,c,d){a.fT=b;a.fU=c;a.be=d;}
function Eb(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.be.data;f=e.length-1|0;if(f){if(c&&Fx(e[f-1|0])==b)return f;if(!c&&FB(a.be.data[f-1|0])==b)return f;}while(true){if(d>f)return Bh(d,a.be.data.length-1|0);g=(d+f|0)>>>1|0;h=a.be.data[g];i=!c?h.bL:h.bM;j=!c?h.bI:h.bJ;k=BS(i,b);if(k<=0&&b<(i+j|0))return g;if(k<0)d=g+1|0;else{if(k<=0)break;f=g-1|0;}}return g;}
function AIU(a,b,c,d){var e,f,g,h;if(!d)a.fU=Th(a,b,c,a.fU);else a.fT=Th(a,b,c,a.fT);e=Eb(a,b,d);if(!d){f=a.be.data[e];f.bI=f.bI+c|0;}else{f=a.be.data[e];f.bJ=f.bJ+c|0;}g=e+1|0;while(true){h=a.be.data;if(g>=h.length)break;if(!d){f=h[g];f.bL=f.bL+c|0;}else{f=h[g];f.bM=f.bM+c|0;}g=g+1|0;}}
function XH(a,b,c,d){var e,f,g,h,i,j;if(!d)a.fU=AGQ(a,b,c,a.fU);else a.fT=AGQ(a,b,c,a.fT);e=Eb(a,b,d);f=Eb(a,b+c|0,d);if(e==f){if(!d){g=a.be.data[e];g.bI=g.bI-c|0;}else{g=a.be.data[e];g.bJ=g.bJ-c|0;}}else{if(!d){h=a.be.data;i=b-h[e].bL|0;j=c-(h[e].bI-i|0)|0;h[e].bI=i;}else{h=a.be.data;i=b-h[e].bM|0;j=c-(h[e].bJ-i|0)|0;h[e].bJ=i;}i=e+1|0;while(i<f){g=a.be.data[i];if(!d){g.bL=b;j=j-g.bI|0;g.bI=0;}else{g.bM=b;j=j-g.bJ|0;g.bJ=0;}i=i+1|0;}if(!d){h=a.be.data;h[f].bL=b;g=h[f];g.bI=g.bI-j|0;}else{h=a.be.data;h[f].bM
=b;g=h[f];g.bJ=g.bJ-j|0;}}i=f+1|0;while(true){h=a.be.data;if(i>=h.length)break;if(!d){g=h[i];g.bL=g.bL-c|0;}else{g=h[i];g.bM=g.bM-c|0;}i=i+1|0;}}
function Th(a,b,c,d){var e,f;e=d.data.length;f=O(E8,e+c|0);Cm(d,0,f,0,b);Cm(d,b,f,b+c|0,e-b|0);return f;}
function AGQ(a,b,c,d){var e,f;e=d.data.length;f=O(E8,e-c|0);Cm(d,0,f,0,b);c=b+c|0;Cm(d,c,f,b,e-c|0);return f;}
function AGP(){B.call(this);this.zy=null;}
function A2h(a,b,c,d){return Ns(a.zy,b,c,d);}
function ABx(){B.call(this);this.lZ=null;}
function Bay(a,b){var c,d,e,f,g;c=a.lZ;d=c.oe;if(d!==null){e=b.i;f=e.b-d.b|0;g=e.a-d.a|0;e=c.l3;e.b=FU(0,e.b+f|0,c.gY.b-c.le.b|0);c=a.lZ;d=c.l3;d.a=FU(0,d.a+g|0,c.gY.a-c.le.a|0);}a.lZ.oe=b.i;return 1;}
var AKt=H();
function NE(){return "clipboard" in $rt_globals.navigator?1:0;}
var Ig=H(0);
function Fg(a){return X1(a.wa(),a.w());}
function X1(b,c){var d;if(!b.data.length)return c;d=new I;K(d);return J(AK1(b,c,d));}
function AK1(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Bl(BG(d,b[f]),47);f=f+1|0;}return BG(d,c);}
var Kb=H(0);
function Rs(a,b,c){AFC(a,b,c,0,(-1));}
function M6(){var a=this;B.call(a);a.ia=null;a.he=null;a.jp=null;}
function ALX(a,b){var c=new M6();A3O(c,a,b);return c;}
function Bgw(a,b,c){var d=new M6();Sb(d,a,b,c);return d;}
function A3O(a,b,c){Sb(a,b,null,c);}
function Sb(a,b,c,d){a.ia=b;a.he=c;a.jp=d;}
function Ug(a,b){var c,d,e;c=a.he;if(c!==null)b.lD(ABu(a,c.size));else{c=a.ia.getFile();d=new Vp;d.Fw=a;d.Fv=b;e=new Vq;e.D$=b;c.then(BC(d,"f"),BC(e,"f"));}}
function ABu(a,b){var c,d,e;c=b|0;if(c===b)return c;d=E4(a);e=new I;K(e);G(G(e,C(435)),d);$rt_globals.console.info($rt_ustr(J(e))+b);return 0;}
function E4(a){var b;b=a.ia;return GD(b!==null?b.name:a.he.name);}
function ARX(a){return a.jp;}
function Yv(a,b,c){var d,e,f;d=AJ$(c);e=new ACj;e.wf=b;b=a.he;if(b!==null)b.text().then(BC(e,"f"),BC(d,"f"));else{b=a.ia.getFile();f=new ACk;f.zj=e;f.zk=d;b.then(BC(f,"f"),BC(d,"f"));}}
function AFC(a,b,c,d,e){var f,g;f=AJ$(c);c=new QT;c.Bo=b;b=a.he;if(b!==null)Zv(a,d,e,c,f,b);else{g=a.ia.getFile();b=new QN;b.Es=a;b.Ew=d;b.Ex=e;b.Eu=c;b.Ev=f;g.then(BC(b,"f"),BC(f,"f"));}}
function Zv(a,b,c,d,e,f){if(c>=0){c=b+c|0;f=f.slice(b,c);}else if(b)f=f.slice(b);f.arrayBuffer().then(BC(d,"f"),BC(e,"f"));}
function Pl(a){var b,c,d;if(a.he===null)b=X1(a.jp,E4(a));else{b=IG(BD(a));c=a.jp;d=E4(a);b=BG(Bah(b),C(30));AK1(c,d,b);b=J(b);}return b;}
var KF=H(0);
function P0(){var a=this;B.call(a);a.h9=null;a.gr=null;a.lP=null;}
function Bae(a,b,c){var d=new P0();A5d(d,a,b,c);return d;}
function A5d(a,b,c,d){a.h9=b;a.gr=c;a.lP=d;}
function APg(b){var c,d,e,f;if(!b.length)c=O(BE,0);else{b=b.split('/');if(b===null)c=null;else{c=O(BE,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=GD(b[e]);e=e+1|0;}}}return c;}
function IM(a,b){var c,d,e;c=new AG5;d=a.h9.values();c.l1=a;e=new V4;e.EU=c;c.vY=e;c.B6=d;c.kt=b;AFW(c);}
function ACU(a){var b,c,d,e;b=a.lP;if(b===null){b=a.gr;c=b.data;d=Kq(a);e=c.length;b=C0(b,e+1|0);b.data[e]=d;b=b;a.lP=b;}return b;}
function Kq(a){return GD(a.h9.name);}
function A_k(a){return a.gr;}
function JO(a){return X1(a.gr,Kq(a));}
function AJz(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
var VK=H(0);
var Bfd=null;function APP(){Bfd=new Uk;}
function AGT(){var a=this;B.call(a);a.vq=null;a.vr=null;}
function A3K(a,b){var c,d,e;c=a.vq;d=a.vr;c=c.gf.e7.x;e=c.b;b=b.i;c.b=e+(b.b-d.b|0)|0;c.a=c.a+(b.a-d.a|0)|0;CF(d,b);}
function AMh(){var a=this;B.call(a);a.dp=null;a.cD=null;a.l4=null;a.ml=null;a.p7=null;a.ln=null;}
function ADi(a){var b=new AMh();A88(b,a);return b;}
function A88(a,b){a.cD=BO();a.ln=Bf5;a.dp=b;Z(b.dz,a);}
function Ip(a,b,c){a.l4=c;a.p7=b;b=Ci(a.cD);while(Ck(b)){KS(Cl(b),a.p7);}}
function Oh(a,b,c,d){a.ln=d;Vm(a,b,c);}
function Vm(a,b,c){var d,e;d=a.dp;e=d.bY;if(Ba(e.b,e.a)&&d.cr!==0.0){if(a.l4!==null&&!Kz(a)){a.ml=Gf(a.dp,a.l4);d=Y0(a,b,c,null,null);b=new U8;b.wZ=a;d.mp=b;CC(a.dp,a);return;}b=new Bv;X(b);M(b);}c=new CW;Bd(c,C(436));M(c);}
function N3(a){if(Kz(a)){AF2(a.dp,a);AFT(a,null);a.ln.e();a.ln=Bf5;}}
function Y0(a,b,c,d,e){var f,g,h;f=AO2();AIZ(f);O8(f,c.cb());KS(f,a.p7);KQ(f,a.ml,a.dp);if(d===null)g=b.b;else{g=b.b;g=a.dp.bY.b<((g+(Ff(d)).b|0)+(Ff(f)).b|0)?g-(Ff(f)).b|0:(g+(Ff(d)).b|0)-d.g_|0;}h=b.a;b=a.dp.bY;O5(f,Be(0,Bh(g,b.b-(Ff(f)).b|0)),Be(0,Bh(h,b.a-(Ff(f)).a|0)));b=new AGx;b.yD=a;b.yA=f;b.yB=e;f.rb=b;Br(a.cD,f);return f;}
function A_$(a,b,c){var d;a.ml=Gf(a.dp,a.l4);d=Ci(a.cD);while(Ck(d)){KQ(Cl(d),a.ml,a.dp);}}
function AJh(a){var b,c;if(Fk(a.cD))return;B2(a.dp.b8,1);b=0;while(true){c=a.cD;if(b>=c.r)break;NR(BU(c,b),a.dp);b=b+1|0;}}
function AWu(a,b){var c;if(!Kz(a))return 0;a:{switch(b.bh){case 27:N3(a);c=1;break a;default:}c=0;}return c;}
function AFT(a,b){var c,d;c=a.cD.r-1|0;a:{while(true){if(c<0)break a;d=BU(a.cD,c);if(b===d)break;Fs(a.cD,c);OA(d);c=c+(-1)|0;}}}
function Kz(a){return a.cD.r<=0?0:1;}
function AYJ(a){var b,c;Vn(a.dp.dz,a);AF2(a.dp,a);b=a.cD;c=Ci(b);while(Ck(c)){OA(Cl(c));}Md(b);}
function AKL(){var a=this;Jm.call(a);a.c8=null;a.c5=null;a.l_=null;a.np=null;a.yu=null;}
function AQv(a){var b=new AKL();A70(b,a);return b;}
function A70(a,b){var c,d;Sn(a,b);a.c8=Xm(b);a.c5=Xm(b);a.l_=HF(a.c8,b);a.np=HF(a.c5,b);c=ARR(a.l_,a.c8);d=ARR(a.np,a.c5);Qb(a.fp,c,d);a.yu=AMw(c,d);Od(a,L(CN,[a.l_,a.np,a.fp]));}
function Qc(a,b){a.fp.jD=b;Lj(a.c8,b);KR(a.c8,a.l_);Lj(a.c5,b);KR(a.c5,a.np);}
function PG(a,b){a.yu.h6=b;a.fp.fe=b;}
function Im(){var a=this;B.call(a);a.cM=null;a.gp=null;a.mE=null;a.iA=null;a.hP=0;a.iR=0;a.hv=0;a.cv=0;}
function Bgx(a,b){var c=new Im();Wk(c,a,b);return c;}
function Wk(a,b,c){a.iA=ABH(b);a.hP=c;a.iR=0;}
function Dt(a){return (IY(a.iA,0)).z;}
function AI9(a){a.iR=60084;}
function Gb(a){return a.iR!=60084?0:1;}
function Ur(a){return a.iR!=60086?0:1;}
function AKb(a){a.iR=60086;}
function TP(a){a.hv=60035;}
function J3(a){a.hv=60027;}
function To(a){a.hv=60137;}
function EO(a){a.hv=60151;}
function AJi(a){a.hv=60215;}
function ALv(a){var b;b=a.cM;if(b===null){b=a.mE;if(b===null)b=a.gp;}return b;}
function Dl(){Im.call(this);this.fk=null;}
var Bgy=null;var Bgz=null;function I$(a,b){var c=new Dl();Lh(c,a,b);return c;}
function APW(a,b,c){var d=new Dl();AP_(d,a,b,c);return d;}
function Lh(a,b,c){Wk(a,b,c);a.fk=Bgy;}
function AP_(a,b,c,d){Wk(a,b,c);a.fk=Bgy;a.fk=d;}
function A_y(a){return Dt(a);}
function TZ(a,b,c){var d,e;d=O(Im,AIH(a));e=d.data;if(UK(a,d,b,c,0)==e.length)return d;b=new Bx;X(b);M(b);}
function In(a){return a.fk.data.length;}
function AIH(a){var b,c,d,e;b=1;if(Gb(a)){c=a.fk.data;d=c.length;e=0;while(e<d){b=b+AIH(c[e])|0;e=e+1|0;}}return b;}
function QR(a){var b,c,d,e;b=1;c=a.fk.data;d=c.length;e=0;while(e<d){b=b+QR(c[e])|0;e=e+1|0;}return b;}
function UK(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=c.es!==null?0:1;g=(c.et>>2&3)!=2?0:1;h=b.data;a.cv=Ja(c);i=e+1|0;h[e]=a;ADa(a,Ie(c));if(Gb(a)){j=0;h=a.fk.data;k=h.length;l=0;while(l<k){m=h[l];if(g&&f)i=LP(m,b,Ja(c),i,Ie(c));else if(f)i=LP(m,b,0,i,Ie(c));else{a:{b:{switch(d){case 0:break;case 1:while(true){if(j>=c.es.data.length)break b;if(Ja(De(c,j))==2?0:1)break;j=j+1|0;}break a;case 2:while(true){if(j>=c.es.data.length)break b;if(Ja(De(c,j))==1?0:1)break;j=j+1|0;}break a;default:break b;}break a;}j=(-1);}i=UK(m,
b,De(c,j),d,i);j=j+1|0;}l=l+1|0;}}return i;}
function LP(a,b,c,d,e){var f,g,h;f=b.data;a.cv=c;g=d+1|0;f[d]=a;ADa(a,e);if(Gb(a)){f=a.fk.data;h=f.length;d=0;while(d<h){g=LP(f[d],b,c,g,e);d=d+1|0;}}return g;}
function ADa(b,c){if(!In(b)&&!c)AJi(b);else b.of();}
function I4(a){AI9(a);EO(a);}
function JG(a){AKb(a);TP(a);}
function XW(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;a:{while(true){if(d>e){f=null;break a;}g=(d+e|0)>>>1|0;f=b[g];h=Qp(Dt(f),c);if(h<0)d=g+1|0;else{if(h<=0)break;e=g-1|0;}}}return f;}
function AZ2(a){}
function ALo(){Bgy=O(Dl,0);Bgz=new Xc;}
function VU(){B.call(this);this.vB=null;}
function A3v(a){I_(a.vB,1);}
function VS(){B.call(this);this.yg=null;}
function A1X(a){I_(a.yg,0);}
function VT(){B.call(this);this.AY=null;}
function A51(a){var b;b=a.AY;CC(b.P.F,b.uX);}
function VR(){B.call(this);this.DD=null;}
function AZT(a){var b,c,d;b=a.DD;c=b.P.F.cj;d=b.cy;if(!(d.c8!==c&&d.c5!==c))b.uX=c;}
function Pf(){var a=this;B.call(a);a.nL=null;a.es=null;a.lI=0;a.et=0;}
var Bgv=null;function OW(){OW=Bn(Pf);A7r();}
function NB(a){var b=new Pf();AO$(b,a);return b;}
function AO$(a,b){OW();a.nL=b;}
function LJ(a){var b;if(Ie(a))Bb(C_(),C(437));OM(a,1);b=a.nL;return b!==null&&!XT(b)?0:1;}
function XT(a){var b,c;b=a.lI+1|0;a.lI=b;if(b>a.es.data.length)Bb(C_(),C(438));if(!(a.es.data.length!=a.lI?0:1))return 0;OM(a,1);c=a.nL;if(c!==null)XT(c);return 1;}
function De(a,b){return a.es.data[b];}
function OR(a,b){var c;MR(a,1);Jd(a,b);c=a.nL;if(c!==null)OR(c,b);}
function NA(a,b){var c,d,e;a:{MR(a,2);Jd(a,b);c=a.es;if(c!==null){c=c.data;d=c.length;e=0;while(true){if(e>=d)break a;NA(c[e],b);e=e+1|0;}}}}
function OM(a,b){var c;c=!b?0:1;a.et=a.et&(-2)|c;}
function MR(a,b){a.et=a.et&(-13)|b<<2;}
function Jd(a,b){a.et=a.et&(-49)|b<<4;}
function OL(a,b){a.et=a.et&(-193)|b<<6;}
function Ie(a){return (a.et&1)!=1?0:1;}
function Ja(a){return a.et>>4&3;}
function A7r(){var b;OW();b=NB(null);MR(b,2);Jd(b,0);OM(b,1);Bgv=b;}
function Oe(){var a=this;B.call(a);a.nz=null;a.lW=null;}
function ZZ(a,b){var c;c=a.lW;a.lW=b;return c;}
function L7(){var a=this;Oe.call(a);a.cf=null;a.ct=null;a.hW=0;a.h4=0;}
function OP(a){var b;b=M2(a);if(b==2){if(M2(a.ct)<0)a.ct=Rr(a.ct);return SE(a);}if(b!=(-2))return a;if(M2(a.cf)>0)a.cf=SE(a.cf);return Rr(a);}
function M2(a){var b,c;b=a.ct;c=b===null?0:b.hW;b=a.cf;return c-(b===null?0:b.hW)|0;}
function Rr(a){var b;b=a.cf;a.cf=b.ct;b.ct=a;FM(a);FM(b);return b;}
function SE(a){var b;b=a.ct;a.ct=b.cf;b.cf=a;FM(a);FM(b);return b;}
function FM(a){var b,c,d;b=a.ct;c=b===null?0:b.hW;b=a.cf;d=b===null?0:b.hW;a.hW=Be(c,d)+1|0;a.h4=1;b=a.cf;if(b!==null)a.h4=1+b.h4|0;b=a.ct;if(b!==null)a.h4=a.h4+b.h4|0;}
function QZ(){B.call(this);this.nh=null;}
function AUy(a){return a.nh;}
function XP(){B.call(this);this.A1=null;}
function A_h(a,b){var c,d;c=a.A1;d=c.e2+1|0;c.e2=d;c=new I;K(c);G(G(R(c,d),C(439)),b);$rt_globals.console.info($rt_ustr(J(c)));}
function Zq(){B.call(this);this.Bd=null;}
function A9y(a){var b,c;b=a.Bd;c=new I;K(c);G(G(G(c,C(440)),b),C(441));$rt_globals.console.info($rt_ustr(J(c)));}
function Gk(){var a=this;CN.call(a);a.df=null;a.Q=null;a.fZ=null;}
function BgA(){var a=new Gk();Nq(a);return a;}
function Nq(a){FP(a);a.df=new Bg;a.Q=new Bg;}
function A5u(a,b){a.fZ=b;}
function Wx(a,b,c){Y(a.df,b,c);}
function J7(a){var b;b=a.fZ;if(b!==null)AG4(b);}
function AKC(a){var b;b=a.Q;b.b=AAH(a,b.b);b=a.Q;b.a=AHt(a,b.a);}
function ALV(a,b){var c,d;c=a.Q.b;d=AAH(a,b);a.Q.b=d;return c==d?0:1;}
function QJ(a,b){var c,d;c=a.Q.a;d=AHt(a,b);a.Q.a=d;return c==d?0:1;}
function AHt(a,b){return Be(0,Bh(b,a.df.a-a.k.a|0));}
function AAH(a,b){return Be(0,Bh(b,a.df.b-a.k.b|0));}
function MW(){var a=this;Gk.call(a);a.e8=null;a.cH=null;a.c3=null;a.je=null;a.gy=null;a.nt=null;a.ov=null;a.EZ=0;a.tp=0;a.dk=null;a.hk=null;a.hl=null;a.ik=null;a.i6=null;a.i_=null;a.kK=null;a.hS=null;a.j4=null;a.t6=0;a.lB=0;}
function AYl(a){Qq(a.je);ACi(a.cH);Q0(a);}
function Q0(a){a.hk=BM(a.hk,null);a.hl=BM(a.hl,null);a.ik=BM(a.ik,null);a.i6=BM(a.i6,null);a.i_=BM(a.i_,null);a.kK=BM(a.kK,null);a.hS=BM(a.hS,null);a.j4=BM(a.j4,null);}
function AAT(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.ik;break a;case 60084:c=a.hl;break a;case 60086:c=a.hk;break a;case 60136:c=a.hS;break a;case 60137:c=a.kK;break a;case 60151:c=a.i6;break a;case 60215:c=a.j4;break a;default:c=null;break a;}c=a.i_;}return c;}
function Xv(a,b){var c,d,e,f;c=ASq(b);a.c3=c;d=a.dk;b=c.cY.data;e=b.length;f=0;a:{while(f<e){if(b[f]===d){e=1;break a;}f=f+1|0;}e=0;}if(!e)a.dk=null;if(a.by!==0.0)RC(a);}
function XD(a){return a.c3.cY;}
function Lj(a,b){var c,d;a.gy=b;c=BW(a.nt,b.rU);d=BW(a.ov,b.qY);if(!(c&&d)){a.nt=b.rU;a.ov=b.qY;if(a.by!==0.0)Wb(a);}}
function ASg(a,b,c){Sh(a.cH,c);if(a.nt!==null)Wb(a);}
function Wb(a){var b,c,d,e,f;Wh(a.je);b=a.cH;c=a.nt;d=a.by;e=a.e8.b8;f=b.ij;b.dS=AOo(c.jt,c.h8*d,c.lu,c.lN,f,e);VB(a.cH,1.25,a.e8.b8);Q0(a);b=Gf(a.e8,a.ov);a.hk=BM(a.hk,FI(a,60086,b));a.hl=BM(a.hl,FI(a,60084,b));a.ik=BM(a.ik,FI(a,60035,b));a.i6=BM(a.i6,FI(a,60151,b));a.i_=BM(a.i_,FI(a,60027,b));a.kK=BM(a.kK,FI(a,60137,b));a.hS=BM(a.hS,FI(a,60136,b));a.t6=Be(Be(Be(Be(BX(a.ik),BX(a.i6)),BX(a.i_)),BX(a.hS)),BX(a.hS));a.j4=BM(a.j4,FI(a,60215,b));a.lB=Be(BX(a.hl),BX(a.hk));RC(a);}
function RC(a){Wx(a,a.df.b,Ba(a.c3.cY.data.length,a.cH.ew));J7(a);}
function ACO(a){var b;b=a.c3.cY.data;a.dk=b.length<=0?null:b[0];}
function A7f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi;c=a.gy.bF.fB;d=a.j;Bu(b,d.b,d.a,a.k,c);BH(a.cH.dS);e=a.cH.ew;f=a.c3.cY.data.length;if(!f)return;g=Bh(f,Hw(a.k.a,e)+7|0);h=a.je;if(h.data.length<g)a.je=ADx(g,h,a.cH,a.EZ,a.tp,a.c3);K3(b,a.j,a.k);i=a.Q.a;j=f-1|0;k=ALk(i,e,j);l=ALk((a.Q.a+a.k.a|0)-1|0,e,j);a.EZ=k;a.tp=l;i=a.k.b;m=DW(a,4.0);n=DW(a,1.0)+a.lB|0;o=DW(a,3.0);p=DW(a,5.0);DW(a,1.0);q=0;r=a.j.b-a.Q.b|0;s=DW(a,1.0);d=a.fZ;t=s+(d===null?0:GK(d))|0;while(k<=l)
{u=a.c3.cY.data[k];v=u.cv;h=a.je.data;s=k%h.length|0;w=h[s];ABr(w,u.iA,b,e,i,0,k,s);x=Ba(e,k);y=x-a.Q.a|0;if(!v)z=null;else{z=a.cH.vP;z.ft=v;}if(z===null)ba=null;else{d=a.gy;ba=GC(d.dH,d,z.ft);}bb=m+Ba(n,u.hP)|0;bc=a.dk!==u?0:1;if(z!==null){bd=x-a.Q.a|0;Y(a.e8.dX,a.k.b,e);d=a.j;Bu(b,d.b,d.a+bd|0,a.e8.dX,ba);}else if(bc){bd=x-a.Q.a|0;Y(a.e8.dX,a.k.b,e);d=a.j;Bu(b,d.b,d.a+bd|0,a.e8.dX,a.gy.bF.hB);}d=AAT(a,u.iR);be=AAT(a,u.hv);if(d!==null){bf=a.gy;bg=bf.k_.data[0];bh=r+bb|0;PH(a.cH,b,d,bh,a.j.a+y|0,z!==null?ba
:!bc?c:bf.bF.hB,bg.ih);}if(be!==null){d=a.gy;bf=d.k_.data[0];bi=((r+bb|0)+a.lB|0)+o|0;bg=a.cH;s=a.j.a+y|0;if(z===null)ba=!bc?c:d.bF.hB;PH(bg,b,be,bi,s,ba,bf.ih);}s=GB(u.iA);x=(((bb+a.lB|0)+o|0)+a.t6|0)+p|0;q=Be(q,(x+s|0)+t|0);s=a.j.a+y|0;x=r+x|0;bf=a.gy;be=null;d=null;bg=null;if(bc)z=null;AAg(w,s,x,b,i,e,0,bf,be,d,bg,bc,z);k=k+1|0;}d=a.df;if(d.b!=q){d.b=q;J7(a);}Gd(b);}
function A$J(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cH.ew;f=((b.i.a-a.j.a|0)+a.Q.a|0)/e|0;if(f>=0){g=a.c3.cY.data;if(f<g.length){h=g[f];if(!AAh(a,b,f)){b=h.mE;if(b!==null)b.e();}}}}return 1;}
function ATf(a,b,c){var d,e,f,g;CC(a.e8,a);d=a.cH.ew;e=((b.i.a-a.j.a|0)+a.Q.a|0)/d|0;if(!c&&e>=0){f=a.c3.cY.data;if(e<f.length){g=f[e];if(AAh(a,b,e)){b=g.gp;if(b!==null)b.e();}else{a.dk=g;b=g.cM;if(b!==null)b.e();}}}return Bfd;}
function AAh(a,b,c){var d,e,f,g,h,i,j;d=a.c3.cY.data[c];e=DW(a,4.0);f=DW(a,1.0);g=Be(BX(a.hl),BX(a.hk));h=e+Ba(f+g|0,d.hP)|0;i=(a.j.b-a.Q.b|0)+h|0;j=i+g|0;c=b.i.b;return i<=c&&c<j?1:0;}
function FI(a,b,c){var d,e,f;d=a.e8.b8;e=E9(b);f=a.cH;return P6(d,e,c,1,f.ew,0,f.iJ);}
function ALk(b,c,d){return Bh(b/c|0,d);}
function AUO(a,b){var c;a:{switch(b.bh){case 13:b=a.dk;if(b!==null){b=ALv(b);if(b!==null)b.e();}c=1;break a;case 37:b=a.dk;if(b!==null&&Gb(b))a.dk.gp.e();c=1;break a;case 38:c=AHQ(a)-1|0;if(c<0)c=a.c3.cY.data.length-1|0;a.dk=a.c3.cY.data[c];XR(a,c);c=1;break a;case 39:b=a.dk;if(b!==null&&Ur(b)){a.dk.gp.e();c=1;}else c=AEi(a);break a;case 40:break;default:c=0;break a;}c=AEi(a);}return c;}
function AEi(a){var b;b=AHQ(a)+1|0;if(!(b>0&&b<a.c3.cY.data.length))b=0;a.dk=a.c3.cY.data[b];XR(a,b);return 1;}
function AHQ(a){var b,c,d,e;b=a.c3.cY.data;c=a.dk;d=0;e=b.length;while(true){if(d>=e)return (-1);if(c===b[d])break;d=d+1|0;}return d;}
function XR(a,b){var c,d;c=a.cH.ew;d=Ba(b,c);if(d<a.Q.a){QJ(a,d);J7(a);}b=d+c|0;c=a.Q.a;d=a.k.a;if(b>(c+d|0)){QJ(a,b-d|0);J7(a);}}
function A5g(a,b,c){var d;d=a.dk;if(d===null)return 0;P9(b,Dt(d));return 1;}
function AOK(){MW.call(this);this.ox=null;}
function Xm(a){var b=new AOK();A0k(b,a);return b;}
function A0k(a,b){Nq(a);a.c3=ASq(O(Im,0));a.je=O(Go,0);a.e8=b;a.cH=AKZ(b.c9);}
function H0(a){var b;b=a.ox;OW();Xv(a,TZ(b,Bgv,0));}
function K4(a,b,c){Xv(a,TZ(a.ox,b,c));}
function Eo(a,b){a.ox=b;H0(a);ACO(a);}
function KR(a,b){var c;c=a.gy.bF;Km(b,c.ne,c.nk);return b;}
function AKc(){var a=this;CN.call(a);a.qv=null;a.Bj=null;a.EM=null;a.cd=null;a.d_=null;a.ep=null;a.xl=null;a.tu=null;a.yG=0.0;a.rG=null;a.qZ=null;}
function HF(a,b){var c=new AKc();A19(c,a,b);return c;}
function A19(a,b,c){var d;c=c.cI;FP(a);d=new Sk;d.CA=a;a.Bj=d;d=new Sj;d.Ds=a;a.EM=d;a.yG=10.0;a.cd=b;a.qv=c;b.fZ=a;}
function AZE(a){var b;b=a.cd;b.fZ=null;a.cd=BM(b,null);}
function Km(a,b,c){var d;a.qZ=c;a.rG=b;d=a.d_;if(d!==null)Hv(d,b,c);b=a.ep;if(b!==null)Hv(b,a.rG,a.qZ);}
function AUM(a,b,c,d){K0(a,b,c,d);K0(a.cd,b,c,d);if(d!==0.0)AG4(a);}
function Ko(a,b,c){MD(a,b);Ne(a,c);}
function AG4(a){var b;AKC(a.cd);b=GK(a)*3|0;if(ADU(a,b))Xn(a);else a.ep=null;if(AIO(a,b))AAy(a);else a.d_=null;}
function AIO(a,b){var c;c=a.k.a;return c>b&&a.cd.df.a>c?1:0;}
function ADU(a,b){var c;c=a.k.b;return c>b&&a.cd.df.b>c?1:0;}
function Xn(a){var b,c,d,e,f,g;b=a.ep;if(b===null)b=G8();a.ep=b;Rn(a,b);c=a.ep;b=a.cd;d=b.Q.b;e=a.j;f=e.b;g=a.k;Ul(c,d,f,g.b,b.df.b,e.a+g.a|0,GK(a));}
function AAy(a){var b,c,d,e,f,g;b=a.d_;if(b===null)b=G8();a.d_=b;Rn(a,b);c=a.d_;b=a.cd;d=b.Q.a;e=a.j;f=e.a;g=a.k;HC(c,d,f,g.a,b.df.a,e.b+g.b|0,GK(a));}
function GK(a){return DW(a,a.yG);}
function Rn(a,b){Hv(b,a.rG,a.qZ);}
function A9o(a,b){var c;a.cd.ej(b);if(!(a.d_===null&&a.ep===null)){B2(b,1);c=a.d_;if(c!==null)HQ(c,b);c=a.ep;if(c!==null)HQ(c,b);c=a.d_;if(c!==null)HW(c,b);c=a.ep;if(c!==null)HW(c,b);B2(b,0);}}
function W5(a,b){var c,d;a:{b:{c=a.d_;if(!(c!==null&&JN(c,b))){c=a.ep;if(c===null)break b;if(!JN(c,b))break b;}d=1;break a;}d=0;}return d;}
function AZ9(a,b,c,d){return !W5(a,b.i)&&!a.cd.c7(b,c,d)?0:1;}
function MD(a,b){var c;b=ALV(a.cd,b);if(ADU(a,GK(a)*3|0))Xn(a);if(b){c=a.xl;if(c!==null)c.e();}}
function Ne(a,b){var c;if(AHv(a,b)){c=a.tu;if(c!==null)c.e();}}
function AHv(a,b){var c;c=QJ(a.cd,b);if(AIO(a,GK(a)*3|0))AAy(a);return c;}
function AZH(a,b,c){var d,e;d=a.d_;if(d!==null){e=Fn(d,b.i,a.Bj,1);if(e!==null)return e;}d=a.ep;if(d!==null){e=Fn(d,b.i,a.EM,0);if(e!==null)return e;}return a.cd.co(b,c);}
function AXH(a,b,c){return W5(a,b.i)?1:0;}
function A4B(a,b,c){var d,e,f,g;d=a.d_;e=d!==null&&Fq(d,b.i,a.qv)?1:0;f=a.ep;g=f!==null&&Fq(f,b.i,a.qv)?1:0;return !e&&!g&&!a.cd.gz(b,c)?0:1;}
function A41(a,b,c,d){var e,f;if(!B6(a,b.i))return 0;e=BL(d*0.5,a.by);f=BL(c*0.5,a.by);if(b.b_){f=f+e|0;e=0;}if(a.d_!==null&&e)Ne(a,a.cd.Q.a+e|0);if(a.ep!==null&&f)MD(a,a.cd.Q.b+f|0);return 1;}
function AMW(a){var b,c;b=GK(a);c=a.cd.jc();c.b=Be(c.b,b);c.a=Be(c.a,b);return c;}
function AK4(){var a=this;B.call(a);a.pv=null;a.g1=null;}
function ARR(a,b){var c=new AK4();AS3(c,a,b);return c;}
function AS3(a,b,c){a.pv=b;a.g1=c;}
function AZR(a){return a.g1.Q.a/Oi(a)|0;}
function A$V(a){var b;b=a.g1;return Hw((b.Q.a+b.k.a|0)-1|0,Oi(a));}
function A0X(a,b){var c;b=Ba(b,Oi(a));c=a.g1;return (b+c.j.a|0)-c.Q.a|0;}
function AV_(a){return a.g1.j;}
function A2L(a){return a.g1.k;}
function AWN(a,b,c){var d;d=a.pv;d.xl=b;d.tu=c;}
function A7E(a,b){return AHv(a.pv,b);}
function Oi(a){return a.g1.cH.ew;}
var Uk=H();
function A7N(a,b){}
function U5(){B.call(this);this.A2=null;}
function A7b(a){AGq(a.A2);}
var AIT=H(0);
var Bf5=null;function AMc(){Bf5=new AA6;}
function X9(){B.call(this);this.Ie=null;}
function ASy(a){Bb(Bi(),C(442));}
function AB3(){B.call(this);this.xX=null;}
function AWA(a){Mq(a.xX);}
function AA3(){B.call(this);this.ur=null;}
function A_d(a){AIq(a.ur);}
function AA1(){B.call(this);this.tK=null;}
function AUc(a){AFq(a.tK);}
function AA0(){B.call(this);this.wW=null;}
function AR3(a){ADw(a.wW);}
function AA2(){B.call(this);this.CM=null;}
function Baz(a){AH_(a.CM);}
function ADD(){B.call(this);this.Em=null;}
function A0b(a){ADk(a.Em);}
function ADC(){B.call(this);this.uq=null;}
function A6T(a){var b;b=a.uq;Nk(new KG,b.t,b.ie,new ZT);}
function ADF(){B.call(this);this.y$=null;}
function A8u(a){var b;b=a.y$;AHK(new Nj,b.t,b.ie,new SH);}
function ADE(){B.call(this);this.xL=null;}
function AZ$(a){var b;b=a.xL;LN(AZG(b.t,b.ie,new AAe));}
function AC$(){B.call(this);this.F5=null;}
function A2X(a,b){var c,d;c=a.F5;d=c.e2+1|0;c.e2=d;c=b.j_;b=new I;K(b);G(G(R(b,d),C(443)),c);$rt_globals.console.info($rt_ustr(J(b)));}
var Xc=H();
function AWT(a,b,c){b=b;c=c;return Qp(Dt(b),Dt(c));}
var APw=H(0);
function SQ(){B.call(this);this.vu=null;}
function A5e(a){var b,c,d;b=a.vu;c=b.A.bv;d=new Xs;d.DM=b;G9(c,d);}
function SS(){B.call(this);this.ye=null;}
function A_v(a){var b,c,d;b=a.ye;c=b.A.bv;d=new Zr;d.EN=b;FQ(c,d);}
function SR(){B.call(this);this.xc=null;}
function AWO(a){var b,c,d;b=a.xc;Bb(Bi(),C(444));Bb(Bi(),C(445));c=b.A.bv;d=new AIv;d.Aq=b;FQ(c,d);}
function ABm(){B.call(this);this.Cy=null;}
function A26(a){var b;b=a.Cy;Ee(b.t,ACW(b));}
function AIR(){B.call(this);this.FK=null;}
function A6D(a){ADf(a.FK);}
var Nx=H(0);
function TR(){B.call(this);this.xq=null;}
function A3J(a,b){return MI(a.xq,b);}
function AQM(){HV.call(this);this.cY=null;}
function ASq(a){var b=new AQM();ATY(b,a);return b;}
function ATY(a,b){a.cY=b;}
function Bak(a,b){return a.cY.data[b].iA;}
function Sk(){B.call(this);this.CA=null;}
function ARQ(a,b){var c;c=a.CA;Ne(c,Fi(b,c.cd.df.a-c.k.a|0));}
function Sj(){B.call(this);this.Ds=null;}
function AR9(a,b){var c;c=a.Ds;MD(c,Fi(b,c.cd.df.b-c.k.b|0));}
function RH(){B.call(this);this.ET=null;}
function A$S(a,b){var c,d;c=a.ET;d=b.bf;return RU(c.charCodeAt(d)&65535);}
var AA6=H();
function A1d(a){}
var CW=H(Bx);
var APL=H(Gt);
function A4f(a){var b=new APL();AW6(b,a);return b;}
function AW6(a,b){a.mg=1;a.mC=1;a.ph=b;}
var ALD=H();
function AOe(b,c,d,e,f,g){g.b=c.b;g.a=f;Bu(b,d.b,d.a,g,e);Bu(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bu(b,d.b,d.a+f|0,g,e);Bu(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function APG(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function W0(){var a=this;B.call(a);a.tL=null;a.xh=null;a.EP=null;}
function AAb(){var a=this;B.call(a);a.y3=null;a.y4=null;}
function A4_(a){var b,c;b=a.y3;c=a.y4;Ju(b.P,c);K_(c);b.b7();}
function AAa(){B.call(this);this.zL=null;}
var AMK=H();
function ZQ(){B.call(this);this.Ax=null;}
function A68(a,b,c){var d,e,f,g,h;d=a.Ax;e=c.gm;if(b.eg){c=!e?d.ch.c:d.bP.c;f=!e?b.bL:b.bM;g=!e?FB(b):Fx(b);h=AIa(c.h,f,g);f=e?b.bL:b.bM;g=e?FB(b):Fx(b);ADA((e?d.ch.c:d.bP.c).h,f,g,h);RI(d);}}
var ANS=H(0);
function AM2(b){if(b===null)return C(244);if(!D2(b,C(446))&&!D2(b,C(447))&&!D2(b,C(448))&&!D2(b,C(449))&&!D2(b,C(450))&&!D2(b,C(451))){if(D2(b,C(452)))return C(324);if(D2(b,C(453)))return C(384);if(D2(b,C(454)))return C(379);if(!D2(b,C(455))&&!D2(b,C(456)))return C(244);return C(386);}return C(385);}
function ANj(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(La(b)){case -1655966961:if(!Bj(b,C(379)))break a;c=4;break a;case 3401:if(!Bj(b,C(384)))break a;c=3;break a;case 98723:if(!Bj(b,C(385)))break a;c=2;break a;case 3213227:if(!Bj(b,C(386)))break a;c=5;break a;case 3254818:if(!Bj(b,C(324)))break a;c=1;break a;case 3556653:if(!Bj(b,C(244)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=C_();e
=new I;K(e);G(G(e,C(457)),b);Bb(d,J(e));c=0;break b;}c=0;}return c;}
var AJd=H();
function Gm(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function AJJ(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function APd(b,c,d,e,f){var g;a:{g=b.b;if(c<=g&&g<(c+e|0)){c=b.a;if(d<=c&&c<(d+f|0)){c=1;break a;}}c=0;}return c;}
function AGm(){B.call(this);this.uO=null;}
function A$m(a,b){var c,d;c=a.uO;Zh(c,Gr(c,b.i));b=Bp(c);d=c.c;PS(b,d.y,d.G);Jc(c);}
var AFA=H();
var AMl=H();
function AJj(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Fa()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new WV;d.addEventListener("change",BC(e,"handleEvent"));d.click();}
var U9=H();
function Vw(){var a=this;B.call(a);a.y1=null;a.y2=null;a.y0=0;}
function A4H(a,b){var c,d,e;c=a.y1;d=a.y2;e=a.y0;d.g(YA(c,(b.i.b+e|0)-c.fP.b|0));}
function Vu(){var a=this;B.call(a);a.t$=null;a.t8=null;a.t9=0;}
function A_e(a,b){var c,d,e;c=a.t$;d=a.t8;e=a.t9;d.g(Te(c,(b.i.a+e|0)-c.fP.a|0));}
var Qe=H(BN);
function TY(){B.call(this);this.Cd=null;}
function AV4(a){return UM(a.Cd);}
function T1(){B.call(this);this.DY=null;}
function A6R(a){return UM(a.DY);}
function UP(){B.call(this);this.xi=null;}
function A$E(a){return a.xi.ir();}
function Zg(){B.call(this);this.sZ=null;}
function A0z(a,b){var c,d;c=a.sZ;d=c.e2+1|0;c.e2=d;c=new I;K(c);G(G(R(c,d),C(458)),b);$rt_globals.console.info($rt_ustr(J(c)));}
var AAN=H();
function A9a(a){return Ea(1);}
function Xo(){B.call(this);this.Cl=null;}
function AVJ(a,b){a.Cl.g(GD(b));}
var AKH=H();
function Z2(){B.call(this);this.sW=null;}
function AYL(a,b){a.sW.e();}
function AHk(){var a=this;B.call(a);a.tg=null;a.ti=null;}
function A_O(a){var b,c;b=a.tg;c=a.ti;Ek(b);c.e();}
var Ha=H(H8);
var AQN=H(Gt);
function A4X(a,b){var c=new AQN();ATu(c,a,b);return c;}
function ATu(a,b,c){a.mg=1;a.mC=1;a.j_=b;a.ph=c;}
var AJG=H(0);
function XU(){var a=this;CN.call(a);a.hd=null;a.iU=null;a.k6=null;a.fl=null;a.mi=0.0;a.fs=0;a.jC=0;a.eQ=null;a.os=null;}
function Za(a){var b;if(Qa(a))return 0;AGV(a);b=CB(a.hd,a.mi);return FV(a.fl)+(b*2|0)|0;}
function UR(a){var b;b=a.k;return b.b&&b.a?0:1;}
function Qa(a){return a.iU!==null&&a.k6!==null?0:1;}
function S7(a,b){a.k.a=b;}
function Tc(a,b,c,d,e){var f,g;f=a.hd.dX;Y(f,d,a.k.a);g=a.j;Bu(b,g.b+c|0,g.a,f,e);}
function AGV(a){if(a.fl===null)a.fl=Gf(a.hd,a.iU);}
var Mm=H(0);
function ASp(a,b,c){J3(b);}
function AQA(a,b){var c;c=new UH;c.xo=a;c.xp=b;return c;}
function Nj(){var a=this;EZ.call(a);a.md=null;a.cW=null;a.Am=null;a.jM=null;a.gj=null;a.vl=null;}
function BgB(a,b,c){var d=new Nj();AHK(d,a,b,c);return d;}
function AHK(a,b,c,d){var e,f;Ll(a,b,c,d);a.jM=IW();a.gj=IW();e=new Tz;FP(e);e.kA=JE(b);d=Xm(b.F);e.fb=d;e.mk=HF(d,b.F);d=new RW;FP(d);f=new B_;AVg();APJ(f,BfW);d.Fd=f;e.qN=d;d=Hz(e.kA);e.gU=d;e.KA=a;Od(e,L(CN,[e.mk,e.qN,d]));e.Ho=Ea(1);a.cW=e;Yu(e,c);f=I$(C(459),0);EO(f);c=new AFi;c.ug=a;f.cM=c;Eo(a.cW.fb,f);ACO(a.cW.fb);c=WE(a,a.cW,C(460),0.0);a.md=c;d=new AFh;d.zb=a;c.jT=d;d=new AFj;d.wK=a;c.jO=d;Ee(b,c);CC(b.F,a.cW.fb);}
function A3M(a,b){var c,d,e,f,g,h,i;if(B6(a.cW.gU,b)){c=a.cW;d=c.kA;c=c.gU;e=a.il;f=a.P;BH(f);g=new X7;g.Gc=f;return AEB(Kg(d,c,e,a,c,g),b);}h=O(Bw,1);i=h.data;b=new Bw;c=new X6;c.sR=a;B8(b,c,C(461));i[0]=b;return CT(h);}
function AIh(a){var b,c;b=a.P.F.b1;c=new Ua;c.sQ=a;G9(b,c);}
function A6E(a){a.md=null;a.cW=null;a.jM=null;a.gj=null;}
function A4K(a,b){a.hm=b;EP(a.md,b.cs);Yu(a.cW,b);}
function A4I(a,b){var c,d,e;c=b.gB;d=Fg(c);a.Am=d;e=Cz(a.jM,d);if(e!==null)TA(a,e);else{b=Bi();e=new I;K(e);G(G(e,C(462)),d);Bb(b,J(e));if(Ix(a.gj,d)){b=new I;K(b);G(G(b,C(463)),d);$rt_globals.console.info($rt_ustr(J(b)));}else{DX(a.gj,d,d);b=new S_;b.yb=a;b.yc=d;e=new Ta;e.vM=a;e.vL=d;Yv(c,b,e);}}}
function TA(a,b){I6(a.cW.gU,b);b=a.cW;CC(b.kA.cl.F,b.gU);}
function AZB(a,b){var c;AIk(b);if(In(b)>0)H0(a.cW.fb);c=b.gk.data;if(c.length==1&&!b.gT.data.length)c[0].cM.e();}
function A8e(a,b){if(In(b)>0)H0(a.cW.fb);MQ(b);}
function A7H(a,b,c){if(AM2(c)!==C(244))To(b);else J3(b);}
var AHL=H();
function A1g(a){return Ea(1);}
function AGB(){var a=this;EZ.call(a);a.jb=null;a.me=null;a.ev=null;a.oW=null;a.sU=null;}
function AZG(a,b,c){var d=new AGB();AQd(d,a,b,c);return d;}
function AQd(a,b,c,d){Ll(a,b,c,d);d=JE(b);a.me=d;b=Hz(d);a.ev=b;b=LX(a,b,25.0);a.jb=b;d=new AHT;d.Fb=a;b.jT=d;d=new AHS;d.ts=a;b.jO=d;a.ev.mZ=a;AQ4(a,c);Ee(a.P,a.jb);}
function LN(a){CC(a.P.F,a.ev);}
function Ww(a){return a.P.F.cj;}
function AQ4(a,b){EP(a.jb,b.cs);GN(a.me,b);FD(a.ev,b);}
function M0(a,b){var c,d;c=a.ev;CC(c.cX,c);c=a.ev;d=new TG;d.wk=a;d.wj=b;GM(c,b,d);}
function ASN(a){var b;if(Ww(a)===a.ev)CC(a.P.F,null);b=a.sU;if(b!==null)b.g(a);a.jb=null;a.ev=null;a.me=null;a.oW=null;a.sU=null;}
function A5z(a,b){var c,d,e,f,g,h;c=new Bw;d=new RX;d.v5=a;B8(c,d,C(464));e=a.me;f=a.ev;d=a.il;g=a.P;BH(g);h=new RY;h.tx=g;return OV(Kg(e,f,d,a,f,h),b,c);}
function AE3(a){var b,c,d;b=a.P;c=b.F.b1;d=new Xg;d.Fm=a;FQ(c,OZ(b,d));}
function A7D(a,b){if(AG1(b)){AE3(a);return 1;}if(b.bh!=27)return 0;if(!ADh(b))AIQ(a.P);else OC(a.jb);return 1;}
var U0=H();
function AXu(a){return Ea(1);}
var YO=H();
function A1o(a){return PI();}
function Zo(){var a=this;B.call(a);a.AM=null;a.AL=null;}
function A57(a){a.AM.h3(a.AL,KI(1));}
function Zn(){var a=this;B.call(a);a.BG=null;a.BH=null;}
function A9H(a){a.BG.h3(a.BH,KI(0));}
function AAV(){B.call(this);this.Bu=null;}
function AWe(a,b){N4(a.Bu,b);}
function Ys(){B.call(this);this.Dm=null;}
function A_N(a,b){var c,d,e,f;c=a.Dm;if(c.hM!=3&&c.fV!=3){b=b.data;c.h5=3;d=CP(b[0]);e=Fw(b[1]);PY(c.h,d,e);if(c.gM){b=FO(c);f=KZ(Fc(),c.km);c=new I;K(c);G(Hi(G(G(c,b),C(465)),f),C(377));$rt_globals.console.info($rt_ustr(J(c)));}}}
function TE(){B.call(this);this.C1=null;}
function A3f(a,b){var c,d,e,f,g,h;c=a.C1;if(c.fV!=3){d=b.data;c.hM=3;if((CP(d[2])).data[0]!=1)N4(c,b);else{e=CP(d[0]);f=Fw(d[1]);g=c.h5!=3?0:1;Um(c.h,e,f,g);if(c.gM){b=FO(c);h=KZ(Fc(),c.km);c=new I;K(c);G(Hi(G(G(c,b),C(466)),h),C(377));$rt_globals.console.info($rt_ustr(J(c)));}}}}
var AIu=H(Dm);
var BgC=null;function AA7(b){var c;c=new I;K(c);return J(Dw(c,b));}
function ALw(){BgC=F($rt_floatcls());}
var Hr=H();
var BgD=null;var BgE=null;var BdY=null;var BdX=null;var BdW=null;function AOT(){BgD=DD([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BgE=ABW([Bm(1),Bm(10),Bm(100),Bm(1000),Bm(10000),Bm(100000),Bm(1000000),Bm(10000000),Bm(100000000),Bm(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);BdY=ABW([Bm(1),Bm(10),Bm(100),Bm(10000),Bm(100000000),
D(1874919424, 2328306)]);BdX=new AGc;BdW=new XJ;}
var KN=H();
var BgF=0;var BgG=null;var BgH=null;function APq(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.ty=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.o1=0;c.oK=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Fj(DB(Bm(d),Bm(8388608)),C8)){d=d<<1;f=f+(-1)|0;}}g=APB(BgH,f);if(g<0)g= -g|0;h=BgH.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=KK(d,BgG.data[e],i);if(j<BgF){while($rt_ucmp(j,BgF)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=BgH.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=KK(d,
BgG.data[e],i);}e=d<<1;d=e+1|0;h=BgG.data;f=g+1|0;k=h[f];l=i-1|0;m=KK(d,k,l);n=KK(e-1|0,BgG.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Ba($rt_udiv(j,o),o):q<0?Ba($rt_udiv(j,k),k)+k|0:Ba($rt_udiv((j+(k/2|0)|0),k),k);if(D8(Bm(d),Bm(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.o1=d;c.oK=g-50|0;}
function KK(b,c,d){return GS(Dh(Cq(DB(Bm(b),D(4294967295, 0)),DB(Bm(c),D(4294967295, 0))),32-d|0));}
function AOp(){BgF=$rt_udiv((-1),10);BgG=DD([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);BgH=DD([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function XJ(){var a=this;B.call(a);a.o1=0;a.oK=0;a.ty=0;}
function XS(){B.call(this);this.Dx=null;}
function A$0(a,b){var c;c=a.Dx;D9(c,b);IE(c,null);}
function AHo(){var a=this;B.call(a);a.bA=0;a.bG=0;}
function Ej(a,b){var c=new AHo();APa(c,a,b);return c;}
function APa(a,b,c){a.bA=b;a.bG=c;}
function ARC(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return a.bA==c.bA&&a.bG==c.bG?1:0;}return 0;}
function AYZ(a){var b,c,d,e;b=O(B,2).data;b[0]=CE(a.bA);b[1]=CE(a.bG);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e!==null?Z6(e):0)|0;d=d+1|0;}return c;}
function AR_(a){var b,c,d;b=a.bA;c=a.bG;d=new I;K(d);Bl(d,40);Bl(R(G(R(d,b),C(40)),c),41);return J(d);}
function A8M(a,b){var c;b=b;c=BS(a.bA,b.bA);if(!c)c=BS(a.bG,b.bG);return c;}
var AIy=H();
function A9G(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AIx(){B.call(this);this.vm=null;}
function A4n(a,b){var c,d,e;c=a.vm;d=0;e=b.length;while(d<e){c.g(ALX(b[d],O(BE,0)));d=d+1|0;}}
function AHV(){B.call(this);this.F8=null;}
function A5v(a,b){var c,d;c=a.F8;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(Bae(b,O(BE,0),O(BE,0)));}
var AHU=H();
function A59(a,b){$rt_globals.console.info("showDirectoryPicker error: "+b);}
function Xt(){B.call(this);this.tW=null;}
function ARV(a){Ic(a.tW,37,3);}
function Xu(){B.call(this);this.uL=null;}
function AT$(a){Ic(a.uL,40,3);}
function Xw(){B.call(this);this.wt=null;}
function A_g(a){Ic(a.wt,42,3);}
function Xx(){B.call(this);this.AT=null;}
function AWB(a){Ic(a.AT,45,3);}
function Xy(){B.call(this);this.By=null;}
function AY9(a){Ic(a.By,45,5);}
function Yq(){B.call(this);this.E2=null;}
function AVv(a,b){var c,d;c=a.E2;d=new Bx;Bd(d,$rt_str(b.message));c.g(d);}
var Zj=H(0);
var Beg=null;function BbJ(){BbJ=Bn(Zj);A8I();}
function A8I(){Beg=new $rt_globals.TextDecoder("utf-16");}
function Qo(){var a=this;B.call(a);a.JH=null;a.zT=0.0;a.HC=0.0;a.hC=null;a.kM=null;a.p4=null;a.hf=0;}
function AQF(a,b){var c;if(b!==null){a.kM=b;return a;}c=new Bv;Bd(c,C(467));M(c);}
function ALl(a,b){var c;if(b!==null){a.p4=b;return a;}c=new Bv;Bd(c,C(467));M(c);}
function ADc(a,b,c,d){var e,f,g,$$je;e=a.hf;if(!(e==2&&!d)&&e!=3){a.hf=d?2:1;while(true){try{f=AMs(a,b,c);}catch($$e){$$je=Ev($$e);if($$je instanceof Bx){g=$$je;M(A4f(g));}else{throw $$e;}}if(Ji(f))return f;if(J5(f)){if(d&&EB(b)){g=a.kM;Ik();if(g===Bep)return E_(Cp(b));if(Cp(c)<=N(a.hC))return Bes;Gq(b,b.bk+Cp(b)|0);if(a.kM===Beq)O6(c,a.hC);}return f;}if(Uq(f)){g=a.kM;Ik();if(g===Bep)return f;if(g===Beq){if(Cp(c)<N(a.hC))return Bes;O6(c,a.hC);}Gq(b,b.bk+Mw(f)|0);}else if(NV(f)){g=a.p4;Ik();if(g===Bep)break;if
(g===Beq){if(Cp(c)<N(a.hC))return Bes;O6(c,a.hC);}Gq(b,b.bk+Mw(f)|0);}}return f;}b=new CW;X(b);M(b);}
function ANU(a,b){var c,d,e,f;c=a.hf;if(c&&c!=3){b=new CW;X(b);M(b);}if(!Cp(b))return AMT(0);if(a.hf)a.hf=0;d=AMT(Be(8,Cp(b)*a.zT|0));while(true){e=ADc(a,b,d,0);if(J5(e))break;if(Ji(e))d=AE_(a,d);if(!Pq(e))continue;XG(e);}b=ADc(a,b,d,1);if(Pq(b))XG(b);while(true){f=a.hf;if(f!=3&&f!=2)break;a.hf=3;if(J5(Bet)){d.e$=d.bk;d.bk=0;d.k9=(-1);return d;}d=AE_(a,d);}b=new CW;X(b);M(b);}
function AE_(a,b){var c,d,e;c=b.jS;d=Jx(c,Be(8,c.data.length*2|0));e=AO4(d,0,d.data.length);Gq(e,b.bk);return e;}
var AKD=H(Di);
function Ud(){var a=this;Gk.call(a);a.cg=null;a.eY=null;a.jx=null;a.EW=null;a.e9=null;a.cu=null;a.fJ=null;a.gK=null;a.eH=0;a.gG=0;a.Ga=null;a.eW=0;a.fz=0;a.iY=0;a.ha=0;a.gX=0;a.dv=0;a.fM=null;a.lT=null;a.CB=null;a.jQ=null;}
function Bc9(a,b){var c=new Ud();AQD(c,a,b);return c;}
function AQD(a,b,c){Nq(a);a.eY=MZ();a.jx=new Bg;a.cu=BgI;a.fJ=O(Le,0);a.eW=0;a.fz=0;a.iY=0;a.ha=0;a.gX=0;a.fM=ANE(0);a.jQ=IW();a.cg=b;a.lT=c;a.Ga=c;SY(a);}
function SY(a){a.eH=BL(2.0,a.cg.cr);}
function Y$(a){return a.cu.data.length?0:1;}
function AAW(a,b){WR(a);a.cu=b;}
function WR(a){Y(a.jx,0,0);}
function ZL(a,b,c){a.CB=b;a.EW=c;a.e9=null;a.fM=null;a.gG=0;WR(a);}
function A_f(a){a.gK=BM(a.gK,null);Y(a.jx,0,0);FH(a.jQ);a.fM=null;a.cu=BgI;a.fJ=null;a.eW=0;a.fz=0;a.iY=0;AFB(a.eY);a.lT=null;}
function A4u(a,b,c){ACx(a);SY(a);a.e9=null;a.fM=null;a.gG=0;}
function A2r(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Lz(a.cg);if(Y$(a))return;Ml(a);Cv(c,a.e9);d=ER(a);e=ANi(c,a.gG);f=Bh(Hw(a.k.a,d),a.cu.data.length)+30|0;g=a.CB.FX;h=a.fJ.data;d=h.length;if(d<f){a:{i=a.ha;j=a.gX;k=a.cu;l=a.fM;m=a.jQ;n=O(Le,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.ib!==c){AHc(l,q,m);o[f]=Os(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Os(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Os(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){AHc(l,c,m);h[f]=null;}f=f+1|0;}a.fJ=n;CF(a.jx,Or(a.fM));ACN(a,a.cg.b8);}a.ha=Bh((a.Q.a+a.eH|0)/(ER(a)+a.eH|0)|0,a.cu.data.length-1|0);a.gX=Bh((((a.Q.a+a.eY.s.a|0)-1|0)+a.eH|0)/(ER(a)+a.eH|0)|0,a.cu.data.length-1|0);if(!a.fJ.data.length)return;ANc(a,e);AG0(a,b);q=g.EK;c=a.j;Bu(b,c.b,c.a,a.k,q);c=a.eY.x;i=c.b;j=c.a;p=CB(a.cg,2.0);s=a.cg.dX;t=a.ha;u=i+p|0;while(t<=a.gX){l=ABY(a,t);d=Ba(t,ER(a));v
=t+1|0;w=d+Ba(v,a.eH)|0;x=u+a.eW|0;y=x+a.fz|0;z=a.dv!=t?0:1;m=!z?q:g.vn;ba=!z?g.xb:g.mP;bb=!z?g.tm:g.mP;bc=!z?g.t3:g.mP;bd=(j+w|0)-a.Q.a|0;D$(b,u,bd,l.kT,l.we,a.gK,ba,m,a.cg.c9);D$(b,x,bd,l.lm,l.mN,a.gK,bb,m,a.cg.c9);D$(b,y,bd,l.kV,l.mj,a.gK,bc,m,a.cg.c9);d=l.kT.b;be=u+d|0;Y(s,Be(0,a.eW-d|0),l.kT.a);Bu(b,be,bd,s,m);d=u+a.eW|0;f=l.lm.b;bf=d+f|0;Y(s,Be(0,a.fz-f|0),l.lm.a);Bu(b,bf,bd,s,m);d=l.kV.b;bg=y+d|0;Y(s,Be(0,(((a.eY.s.b-d|0)-a.fz|0)-a.eW|0)-p|0),l.kV.a);Bu(b,bg,bd,s,m);bh=(i+a.k.b|0)-p|0;Y(s,p,ER(a)+a.eH
|0);Bu(b,bh,bd,s,q);t=v;}Gd(b);}
function ANc(a,b){var c,d,e,f,g,h;c=0;d=a.ha;while(d<=a.gX){e=ABY(a,d);if(!(e!==null&&e.ib===a.cu.data[d])){f=a.fJ.data;g=a.cu;e=a.fM;h=a.jQ;c=d%f.length|0;if(f[c]!==null)AHc(e,f[c],h);f[c]=Os(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){CF(a.jx,Or(a.fM));ACN(a,a.cg.b8);}}
function ACN(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.jx;c=Ex(b,c.b+150|0,c.a,a.cg.c9);Cv(c,a.e9);d=a.e9;e=d.fa;f=e-(e+d.fr)/16.0;g=a.fJ.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.ib.m6;k=d.mN;B4(c,j,k.bx+a.gG,f+k.bC);j=d.ib.nl;d=d.mj;B4(c,j,d.bx+a.gG,f+d.bC);}i=i+1|0;}a:{d=a.jQ;if(d.dO>0){h=d.dF;i=0;b:while(true){g=d.cw.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.c4;l=j.dd;k=k;l=l.nQ;B4(c,k,l.bx+a.gG,f+l.bC);j=j.dC;if(h!=d.dF)break b;}i=i+1|0;}b=new Jf;X(b);M(b);}}if(a.gK===null)a.gK=Dc(b);C5(a.gK,
c);Fe(c);}
function ABY(a,b){var c;c=a.fJ.data;return c[b%c.length|0];}
function A8K(a,b){CF(a.eY.s,b);}
function A96(a,b){CF(a.eY.x,b);}
function ACx(a){var b,c,d,e,f,g,h,i,j;b=Lz(a.cg);if(Y$(a))return;Ml(a);Cv(b,a.e9);c=ANi(b,a.gG);d=a.cu.data;e=d.length;f=0;while(f<e){g=d[f];h=Pe(c,g.i2);i=Pe(c,g.m6);j=Pe(c,g.nl);a.eW=Be(a.eW,h);a.fz=Be(a.fz,i);a.iY=Be(a.iY,j);f=f+1|0;}}
function A9w(a,b,c){var d;d=AEZ(a,b.i);if(d>=0)a.dv=d;return F7(a.eY,a.j)&&FX(a.cg.cI)?1:0;}
function AUi(a,b,c){if(!F7(a.eY,b.i)&&!MG(a.eY)){b=a.Ga;if(b!==null)b.e();}return null;}
function AYQ(a,b,c,d){var e;if(d==1){e=AEZ(a,b.i);if(e>=0)X4(a,a.cu.data[e]);}return 1;}
function X4(a,b){a.lT.e();b.w1.e();}
function AEZ(a,b){var c,d,e;if(!a.fJ.data.length)return (-1);c=ER(a);d=(b.a-a.j.a|0)+a.Q.a|0;e=a.eH;e=(d+e|0)/(c+e|0)|0;if(e<a.cu.data.length)return e;return (-1);}
function ER(a){return FV(a.e9);}
function Ml(a){var b;if(a.e9===null){b=Gf(a.cg,a.EW);a.e9=b;a.fM=ANE(FV(b));a.gG=Dd(a.e9.sh);}}
function A$n(a,b){var c,d,e;a:{switch(b.bh){case 13:X4(a,a.cu.data[a.dv]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.dv=a.ha;b=a.fZ;c=a.Q;Ko(b,c.b,c.a-(a.k.a/2|0)|0);return 0;case 34:a.dv=a.gX;b=a.fZ;c=a.Q;Ko(b,c.b,c.a+(a.k.a/2|0)|0);return 0;case 35:case 39:a.dv=a.cu.data.length-1|0;break a;case 36:case 37:a.dv=0;break a;case 38:d=a.dv;e=a.cu.data.length;a.dv=((d+e|0)
-1|0)%e|0;break a;case 40:a.dv=(a.dv+1|0)%a.cu.data.length|0;break a;default:break a;}a.lT.e();return 0;}e=a.dv;if(e<=a.ha)Ko(a.fZ,a.Q.b,Ba(e,ER(a))+Ba(a.dv,a.eH)|0);else if(e>=a.gX)Ko(a.fZ,a.Q.b,(Ba(e+1|0,ER(a))+Ba(a.dv+2|0,a.eH)|0)-a.k.a|0);return 0;}
var Yz=H();
function A00(a){}
var AIm=H();
function ATx(a,b){}
function AIo(){var a=this;B.call(a);a.xz=null;a.xA=null;}
function ARD(a,b){var c,d,e;c=a.xz;d=a.xA;b=BT(b);e=new I;K(e);G(G(G(e,d),C(30)),b);C2(c,J(e));}
function SB(){var a=this;Gk.call(a);a.nY=null;a.rY=null;a.BU=null;a.uw=0.0;}
function A0$(a){var b;b=BL(20.0,a.by);return BP(b,b);}
function A8Q(a,b){Wx(a,b.b*3|0,b.a*5|0);a.BU.g(b);}
function A1r(a,b){var c,d,e,f,g,h,i,j,k,l,m;AQI(a,b);AG0(a,b);c=BL(30.0,a.by);d=a.Q;e=d.b;f=Ba(e/c|0,c);g=d.a;h=Ba(g/c|0,c);d=a.k;i=Ba(((e+d.b|0)-1|0)/c|0,c);e=Ba(((g+d.a|0)-1|0)/c|0,c);d=a.rY;d.a=c;d.b=c;a.nY.bR=1.0;while(h<=e){g=a.j.a-a.Q.a|0;j=f;while(j<=i){k=a.j.b-a.Q.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AQy(l);m=m+1|0;}YX(AP2(l),0.75,a.uw,a.nY);Bu(b,k+j|0,g+h|0,a.rY,a.nY);j=j+c|0;}h=h+c|0;}Gd(b);}
function AWY(a,b,c){return Bfd;}
function AIn(){var a=this;B.call(a);a.sX=null;a.sY=null;}
function AZW(a){var b,c;b=a.sX;c=a.sY;Ju(b.t,c);K_(c);}
function Tz(){var a=this;I3.call(a);a.Ho=null;a.KA=null;a.kA=null;a.qN=null;a.mk=null;a.fb=null;a.gU=null;}
function AVK(a){var b,c,d,e;b=a.k.b/4|0;c=b+DW(a,1.0)|0;d=APn(a.j);e=BP(b,a.k.a);a.cK.data[0].ek(d,e,a.by);d.b=a.j.b+b|0;e.b=c-b|0;a.cK.data[1].ek(d,e,a.by);d.b=a.j.b+c|0;e.b=a.k.b-c|0;a.cK.data[2].ek(d,e,a.by);}
function Yu(a,b){Lj(a.fb,b);KR(a.fb,a.mk);GN(a.kA,b);FD(a.gU,b);}
function A5M(a){var b,c;b=AMk(a.gU);c=AMW(a.mk);return BP((b.b+a.qN.k.b|0)+c.b|0,b.a);}
function AFi(){B.call(this);this.ug=null;}
function ATI(a){AIh(a.ug);}
function AFh(){B.call(this);this.zb=null;}
function AYB(a){var b;b=a.zb;CC(b.P.F,b.vl);}
function AFj(){B.call(this);this.wK=null;}
function A7B(a){var b,c;b=a.wK;c=b.P.F.cj;if(b.cW.gU!==c)c=null;b.vl=c;}
function AHT(){B.call(this);this.Fb=null;}
function AVh(a){var b;b=a.Fb;CC(b.P.F,b.oW);}
function AHS(){B.call(this);this.ts=null;}
function AZ3(a){var b;b=a.ts;b.oW=b.ev!==Ww(b)?null:b.ev;}
var K5=H(Dm);
var BgJ=null;function DA(b,c){return Long_udiv(b, c);}
function ANu(b,c){return Long_urem(b, c);}
function D8(b,c){return Long_ucompare(b, c);}
function AOw(){BgJ=F($rt_longcls());}
var WV=H();
function A2s(a,b){}
function AGv(){var a=this;B.call(a);a.wc=0;a.Gt=0;}
function Fi(a,b){var c;c=a.Gt;if(c<=0)return 0;return KP(a.wc,b,c);}
function AF6(){B.call(this);this.qe=null;}
var BgI=null;function AVx(){var a=new AF6();AJV(a);return a;}
function AJV(a){a.qe=BO();}
function ZU(a,b,c,d,e){var f;f=new MH;f.w1=e;f.m6=c;f.nl=d;f.i2=b;Br(a.qe,f);}
function AHI(a){return FE(a.qe,BgI);}
function AFf(b){return b===null?C(20):AGY(b);}
function AQE(){BgI=O(MH,0);}
function Le(){var a=this;B.call(a);a.we=null;a.mN=null;a.mj=null;a.kT=null;a.lm=null;a.kV=null;a.ib=null;}
function Os(b,c,d,e){var f,g,h;f=new Le;f.kT=new Bg;f.lm=new Bg;f.kV=new Bg;f.ib=b;g=Cz(e,b.i2);if(g!==null)g.j9=g.j9+1|0;else{g=new AHj;h=LI(c,b.i2,d);g.j9=1;g.nQ=h;DX(e,b.i2,g);}e=g.nQ;f.we=e;Y(f.kT,e.bm|0,e.bR|0);e=LI(c,b.m6,d);f.mN=e;Y(f.lm,e.bm|0,e.bR|0);b=LI(c,b.nl,d);f.mj=b;Y(f.kV,b.bm|0,b.bR|0);return f;}
function AHc(b,c,d){var e,f,g;e=c.ib.i2;f=Cz(d,e);g=f.j9-1|0;f.j9=g;if(!g){M5(d,e);J4(b,f.nQ);}J4(b,c.mN);J4(b,c.mj);}
function RW(){CN.call(this);this.Fd=null;}
function ARJ(a,b){var c;c=a.j;Bu(b,c.b,c.a,a.k,a.Fd);}
function AGc(){var a=this;B.call(a);a.pu=C8;a.ow=0;a.th=0;}
function VV(){var a=this;B.call(a);a.Fp=null;a.Fn=null;a.Fo=null;}
function AWd(a){var b,c,d,e,f;b=a.Fp;c=a.Fn;d=a.Fo;e=Bi();f=new I;K(f);b=G(f,b);Bl(b,9);b=G(b,c);Bl(b,9);G(b,d);Bb(e,J(f));}
var Xa=H(0);
var BfW=null;function AVg(){AVg=Bn(Xa);A02();}
function A02(){BfW=U(C(187));}
function MH(){var a=this;B.call(a);a.w1=null;a.m6=null;a.nl=null;a.i2=null;}
function Td(){var a=this;B.call(a);a.hj=null;a.mc=null;a.ks=null;a.sw=null;a.dZ=null;a.no=0;}
function AE9(a,b){if(!BW(b.qJ,a.sw)){a.sw=b.qJ;PF(a);}}
function PF(a){a.dZ=BM(a.dZ,null);}
function ALs(a,b){var c,d;c=Gf(b,a.sw);d=FV(c);a.dZ=BM(a.dZ,P6(b.b8,E9(60088),c,0,d,0,0));}
function WB(a,b){return a.dZ!==null&&Gm(b,a.hj,a.mc)?1:0;}
function AA5(){var a=this;B.call(a);a.sL=null;a.Cm=null;a.yf=0;a.za=0;}
function P5(a,b){return Cp(a.Cm)<b?0:1;}
function ACd(){B.call(this);this.B$=null;}
function ATT(a,b){D9(a.B$,b);}
function AAL(){var a=this;B.call(a);a.Jm=null;a.Jl=null;a.Jk=null;}
function AFV(){B.call(this);this.yn=null;}
function AWQ(a,b){N4(a.yn,b);}
var Gc=H(0);
function AAY(){var a=this;B.call(a);a.lh=0;a.so=0;a.na=0;a.ja=0;a.kG=null;}
function Ck(a){return a.lh>=a.na?0:1;}
function Cl(a){var b,c;SU(a);b=a.lh;a.ja=b;c=a.kG;a.lh=b+1|0;return c.j2(b);}
function ADN(a){var b,c,d;if(a.ja<0){b=new CW;X(b);M(b);}SU(a);a.kG.n2(a.ja);a.so=a.kG.cq;c=a.ja;d=a.lh;if(c<d)a.lh=d-1|0;a.na=a.na-1|0;a.ja=(-1);}
function SU(a){var b;if(a.so>=a.kG.cq)return;b=new Jf;X(b);M(b);}
function AHw(){var a=this;B.call(a);a.z_=null;a.z$=null;}
function A0_(a){CC(a.z_,a.z$);}
function U8(){B.call(this);this.wZ=null;}
function A5V(a){N3(a.wZ);}
function MN(){var a=this;Qo.call(a);a.AR=null;a.D3=null;}
function AMs(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.AR;e=0;f=0;g=a.D3;a:{b:{while(true){if((e+32|0)>f&&EB(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cp(b)+k|0;h=j.length;f=Bh(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BN;c=new I;K(c);R(G(R(G(c,C(468)),l),C(102)),h);Bd(b,J(c));M(b);}if(Cp(b)<m){b=new P$;X(b);M(b);}if(m<0){b=new BN;c=new I;K(c);G(R(G(c,C(103)),m),C(104));Bd(b,J(c));M(b);}n=b.bk;h=n+b.o$|0;e=0;while(e<m){o=k+1|0;i=b.r2.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bk=n+m|0;e=0;}if(!EB(c)){p=!EB(b)&&e>=f?Bet:Bes;break a;}i=g.data;n=Cp(c);o=i.length;n=Bh(n,o);q=new AGN;q.wl=b;q.E5=c;p=AQR(a,d,e,f,g,0,n,q);e=q.zg;if(p===null&&0==q.oy)p=Bet;k=q.oy;h=0;if(c.sv){b=new LH;X(b);M(b);}if(Cp(c)<k)break;if(h>o){b=new BN;c=new I;K(c);Bl(R(G(R(G(c,C(105)),h),C(99)),o),41);Bd(b,J(c));M(b);}l=h+k|0;if(l>o){b=new BN;c=new I;K(c);R(G(R(G(c,C(107)),l),C(102)),o);Bd(b,J(c));M(b);}if(k<0){b=new BN;c=new I;K(c);G(R(G(c,C(103)),k),C(104));Bd(b,J(c));M(b);}o=c.bk;m=0;while
(m<k){l=o+1|0;n=h+1|0;AE1(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bk=c.bk+k|0;if(p!==null)break a;}b=new KT;X(b);M(b);}b=new BN;c=new I;K(c);Bl(R(G(R(G(c,C(105)),k),C(99)),h),41);Bd(b,J(c));M(b);}Gq(b,b.bk-(f-e|0)|0);return p;}
var Ws=H(MN);
function AQR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Pg(h,2))break a;i=Bet;break a;}c=k+1|0;n=j[k];if(!Hx(a,n)){c=c+(-2)|0;i=E_(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Pg(h,3))break a;i=Bet;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Hx(a,n))break b;if(!Hx(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Qv(p)){c=k+(-3)|0;i=E_(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=E_(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Pg(h,4))break a;i=Bet;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cp(h.E5)<2?0:1)break a;i=Bes;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Hx(a,n))break c;if(!Hx(a,o))break c;if(!Hx(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=IV(r);m=c+1|0;j[c]=Ii(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=E_(1);break a;}c=k+(-3)|0;i
=E_(1);}h.zg=c;h.oy=f;return i;}
function Hx(a,b){return (b&192)!=128?0:1;}
function WQ(){B.call(this);this.vU=null;}
function A0s(a){var b;b=a.vU.kU;OW();K4(b,Bgv,0);}
var AJ0=H();
function R0(b,c,d){return ALF(b,0,c,d,Yk());}
function ALF(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BS(c,d);h=g>=0?0:1+Ty(f,2.0)|0;i=g>0?0:1+Ty(f,3.0)|0;j=O(Dl,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new I;K(m);R(G(m,C(469)),g);k[g]=ALF(J(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dl;n=new I;K(n);R(G(n,C(470)),g);Lh(m,J(n),l);n=new T8;n.wv=m;m.mE=n;switch((l+g|0)%3|0){case 0:break;case 1:To(m);break a;case 2:m.hv=60136;break a;default:break a;}J3(m);}if(Ym(f)<0.25){n=IY(m.iA,0);n.bZ=n.bZ|2;}k[h+g|0]=m;g=g+1|0;}n=APW(b,c,j);b=new AAt;b.zC=n;b.zE=e;n.gp=b;n.cM
=b;if((c+c|0)>d)JG(n);else I4(n);return n;}
function AFE(){B.call(this);this.tv=null;}
function ARb(a){H0(a.tv);}
function AFF(){B.call(this);this.v9=null;}
function AU0(a){H0(a.v9);}
function Va(){B.call(this);this.w2=null;}
function AYT(a){AFq(a.w2);}
function U_(){B.call(this);this.A$=null;}
function A43(a){AH_(a.A$);}
function Vc(){B.call(this);this.B3=null;}
function A_c(a){AIq(a.B3);}
function Vb(){B.call(this);this.F_=null;}
function A15(a){ADw(a.F_);}
function Ka(){var a=this;B.call(a);a.di=0;a.fc=0;a.iN=0;a.rE=null;a.d2=null;}
function AHO(a,b,c,d){var e=new Ka();A9h(e,a,b,c,d);return e;}
function AZZ(a,b,c,d,e,f){var g=new Ka();A6N(g,a,b,c,d,e,f);return g;}
function A9h(a,b,c,d,e){var f,g,h;a:{a.di=b;a.fc=c;f=YV(e,C(309),0);if(d){f=f.data;g=f.length;if(g>0){if(g==1){h=BP(b,c+N(f[0])|0);break a;}h=BP((b+g|0)-1|0,N(f[g-1|0]));break a;}}h=BP(b,c);}a.rE=h;a.iN=d;a.d2=e;}
function A6N(a,b,c,d,e,f,g){a.di=b;a.fc=c;a.rE=BP(f,g);a.iN=d;a.d2=e;}
function Lt(a){var b,c;b=0;c=0;while(c<N(a.d2)){if(P(a.d2,c)==10)b=b+1|0;c=c+1|0;}return b;}
function HU(){B.call(this);this.gm=0;}
var BgK=null;var BgL=null;var BgM=null;function AYo(a){var b=new HU();ALA(b,a);return b;}
function ALA(a,b){a.gm=b;}
function KI(b){return !b?BgL:BgK;}
function ANL(){BgK=AYo(1);BgL=AYo(0);BgM=F($rt_booleancls());}
function AG8(){var a=this;B.call(a);a.Cp=null;a.Ct=0;a.Cs=0;a.Cr=null;a.Cq=0;a.Co=0;}
function A$k(a,b){var c,d,e,f,g,h,i,j;c=a.Cp;d=a.Ct;e=a.Cs;f=a.Cr;g=a.Cq;h=a.Co;i=CB(c.U,5.0);d=Bh((c.U.bY.b-d|0)-i|0,Be((i-d|0)-c.Y.k.b|0,b.i.b));j=Bh((c.U.bY.a-e|0)-i|0,Be((i-e|0)-c.Y.k.a|0,b.i.a));Y(f,d+g|0,j+h|0);Ew(c,f,c.bc.k);}
function Rx(){var a=this;B.call(a);a.uk=null;a.uj=0;}
function A4y(a,b){ON(a.uk,b,a.uj);}
function Xs(){B.call(this);this.DM=null;}
function A3r(a,b){var c,d,e;c=a.DM;d=BT(b);e=new I;K(e);G(G(e,C(471)),d);$rt_globals.console.info($rt_ustr(J(e)));d=new R3;d.GI=c;IM(b,d);}
function Zr(){B.call(this);this.EN=null;}
function A7v(a,b){var c,d,e;c=a.EN;d=BT(b);e=new I;K(e);G(G(e,C(472)),d);$rt_globals.console.info($rt_ustr(J(e)));d=new ABj;d.JA=c;d.Bq=b;e=new ABk;e.JO=c;Rs(b,d,e);}
var ACD=H(Dm);
var BgN=null;function ANY(){BgN=F($rt_doublecls());}
var Li=H();
var BgO=C8;var BgP=null;var BgQ=null;function AKO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.th=Fj(DB(d,D(0, 2147483648)),C8)?0:1;e=DB(d,D(4294967295, 1048575));f=GS(Bcy(d,52))&2047;if(Fj(e,C8)&&!f){c.pu=C8;c.ow=0;return;}if(f)e=Ba4(e,D(0, 1048576));else{e=IS(e,1);while(Fj(DB(e,D(0, 1048576)),C8)){e=IS(e,1);f=f+(-1)|0;}}g=BgQ.data;h=f<<16>>16;i=0;j=g.length;k=BS(i,j);if(k>0){c=new Bv;X(c);M(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BS(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=JV(e,BgP.data[h],i);if(ATP(m,BgO)){while(D8(m,BgO)<=0){j=j+(-1)|0;m=Da(Cq(m,Bm(10)),Bm(9));}g=BgQ.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=JV(e,BgP.data[h],i);}e=IS(e,1);d=Da(e,Bm(1));g=BgP.data;h=j+1|0;n=g[h];f=i-1|0;n=JV(d,n,f);o=JV(KZ(e,Bm(1)),BgP.data[h],f);p=Bm(1);while(true){q=Cq(p,Bm(10));if(D8(DA(m,q),DA(o,q))<=0)break;p=q;}r=Bm(1);while
(true){s=Cq(r,Bm(10));if(D8(DA(m,s),DA(n,s))>=0)break;r=s;}h=D8(p,r);e=h>0?Cq(DA(m,p),p):h<0?Da(Cq(DA(m,r),r),r):Cq(DA(Da(m,ALR(r,Bm(2))),r),r);if(D8(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=DA(e,Bm(10));if(D8(e,D(2808348672, 232830643))<0)break;}else if(D8(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cq(e,Bm(10));}c.pu=e;c.ow=j-330|0;}
function JV(b,c,d){var e,f,g,h,i,j,k,l;e=DB(b,Bm(65535));f=DB(Dh(b,16),Bm(65535));g=DB(Dh(b,32),Bm(65535));h=DB(Dh(b,48),Bm(65535));i=DB(c,Bm(65535));j=DB(Dh(c,16),Bm(65535));k=DB(Dh(c,32),Bm(65535));l=DB(Dh(c,48),Bm(65535));return Da(Da(Da(IS(Cq(l,h),32+d|0),IS(Da(Cq(l,g),Cq(k,h)),16+d|0)),IS(Da(Da(Cq(l,f),Cq(k,g)),Cq(j,h)),d)),Dh(Da(Da(Da(Cq(k,e),Cq(j,f)),Cq(i,g)),IS(Da(Da(Da(Cq(l,e),Cq(k,f)),Cq(j,g)),Cq(i,h)),16)),32-d|0));}
function AKy(){BgO=DA(Bm(-1),Bm(10));BgP=ABW([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);BgQ=Bb0([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Wl(){var a=this;B.call(a);a.bN=null;a.tO=null;a.kz=null;a.qr=null;a.n7=null;a.hz=null;}
function OV(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Wo();e=a.bN.c;f=EE(e);e=IH(e);g=a.bN.gh;if(ADt(g,f,e)!==null){h=new T_;h.uh=a;h.ui=b;E6(d,C(473),h);}if(Qr(g,f,e)!==null){h=new T9;h.DQ=a;h.DP=b;E6(d,C(474),h);}if(AGk(g,f,e)!==null){e=new Ub;e.Ce=a;e.Cf=b;E6(d,C(475),e);}e=new T$;e.Gw=a;e.Gv=b;E6(d,C(476),e);IU(a);if(NE()){if(!a.bN.hA){f=new VE;f.xt=a;E6(d,C(477),f);}f=new VF;f.z5=a;E6(d,C(478),f);if(!a.bN.hA&&Zd(IU(a))){f=new VD;f.um=a;E6(d,C(479),f);}}if(c!==null)OS(d,c);f=Wo();i=O(BE,5).data;i[0]=C(244);i[1]=
C(324);i[2]=C(385);i[3]=C(384);i[4]=C(379);j=i.length;k=0;while(k<j){b=i[k];e=new UB;e.Da=a;e.C_=b;E6(f,b,e);k=k+1|0;}I8(d,C(480),JY(f));c=Wo();i=O(Bw,3);l=i.data;g=a.n7;BH(g);m=new SX;m.BC=g;l[0]=Dn(C(481),m);g=a.n7;BH(g);m=new SV;m.DX=g;l[1]=Dn(C(482),m);g=a.n7;BH(g);m=new SW;m.sD=g;l[2]=Dn(C(483),m);Nd(c,C(484),CT(i),BgR);i=O(Bw,2);l=i.data;g=a.kz;BH(g);m=new Xz;m.D2=g;l[0]=Dn(C(485),m);g=a.kz;BH(g);m=new XA;m.GA=g;l[1]=Dn(C(486),m);I8(c,C(487),CT(i));g=new ADo;g.CD=a;Nd(c,C(488),g,BgR);if(a.bN.cX.b8.nB)
{i=O(Bw,2);l=i.data;g=new AD_;g.uV=a;l[0]=Dn(C(489),g);g=new AD$;g.EL=a;l[1]=Dn(C(490),g);I8(c,C(491),CT(i));}I8(d,C(492),JY(c));return JY(d);}
function AEB(a,b){return OV(a,b,null);}
function IU(a){return a.bN.cX.b1;}
function ZK(a){var b;b=new UF;b.xn=a;return b;}
function A5L(a){var b,c,d,e,f;b=O(Bw,5);c=b.data;d=a.bN;BH(d);e=new Wc;e.zr=d;c[0]=Dn(C(493),e);e=a.bN;BH(e);f=new Wd;f.uR=e;c[1]=Dn(C(494),f);d=a.bN;BH(d);e=new We;e.EA=d;c[2]=Dn(C(495),e);d=a.bN;BH(d);e=new Wf;e.As=d;c[3]=Dn(C(496),e);d=a.bN;BH(d);e=new Wr;e.C4=d;c[4]=Dn(C(497),e);return CT(b);}
function ST(a,b){var c;c=new QW;c.A8=a;c.A9=b;return c;}
function L8(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Ek(a.hz.cl);d=a.bN.c;e=EE(d);f=IH(d);g=a.bN.gh;if(c===null)h=null;else{BcP();switch(BgS.data[c.fQ]){case 1:h=Qr(g,e,f);break a;case 2:h=ADt(g,e,f);break a;default:}b=new FR;X(b);M(b);}}c=a.bN;e=Gr(c,b);g=Kf(c.c.h,e.bA,e.bG);f=V9(c,g);if(h!==null){g=c.c;i=e.bA;j=e.bG;e=new UT;e.JC=c;e.JD=b;e.JE=f;h.wI(g,i,j,e,c.lv);}else{e=Cz(c.c.h.eF,g);if(e!==null)JX(c,e);else{e=Cz(c.c.h.er,g);if(e!==null&&!Fk(e))ADM(c.mm,b,e,c,f);else{c=c.mm;k=O(Bw,1);l=k.data;e=new Bw;f=c.cl;BH(f);g
=new AFu;g.FA=f;B8(e,g,C(498));l[0]=e;UE(c,b,CT(k));}}}}
function AGx(){var a=this;B.call(a);a.yD=null;a.yA=null;a.yB=null;}
function AWh(a,b,c,d){var e,f,g,h;b=a.yD;e=a.yA;f=a.yB;AFT(b,e);if(f!==null)d.oH.e();if(AGL(d)){f=d.f7;g=e.dI;h=e.g_;Y0(b,BP((f.b-(g*3|0)|0)-h|0,(f.a-g|0)-h|0),d.o7,e,d.wF);}}
function AE0(){B.call(this);this.C9=null;}
function A12(a,b,c){var d,e;c=a.C9;d=c.c.h;e=b.bf;b=c.ge;AEU(d.C.data[e],0,b);}
function TQ(){var a=this;B.call(a);a.HZ=null;a.w4=0;}
function A27(a,b){var c,d,e,f;c=a.w4;d=(CP(KB(b,0))).data;b=Bi();e=d[0];f=new I;K(f);R(G(R(G(f,C(499)),c),C(500)),e);Bb(b,J(f));b=Bi();e=d[1];f=new I;K(f);R(G(R(G(f,C(499)),c),C(501)),e);Bb(b,J(f));}
function AIc(){var a=this;B.call(a);a.vv=null;a.vw=null;a.vx=null;a.vy=0;a.vF=0;a.vG=0;a.vH=0;a.vI=0;a.vD=0;a.vE=0;a.Gz=0;}
function A1R(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.vv;d=a.vw;e=a.vx;f=a.vy;g=a.vF;h=a.vG;i=a.vH;j=a.vI;k=a.vD;l=a.vE;m=a.Gz;n=CB(c.U,5.0);o=c.bc.jc();CF(d,c.bc.k);CF(e,c.bc.j);switch(f){case -1:f=Bh(h+(b.i.b-g|0)|0,c.U.bY.b-n|0);g=o.b;h=h+i|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Be((i+b.i.b|0)-g|0,Be(o.b,n-c.Y.j.b|0));}b:{switch(j){case -1:f=Be(n,Bh(l+(b.i.a-k|0)|0,(c.U.bY.a+c.Y.k.a|0)-n|0));g=o.a;h=l+m|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Be((m+b.i.a|0)-k|0,o.a);}Ew(c,e,d);}
function T8(){B.call(this);this.wv=null;}
function A7A(a){var b,c,d;b=a.wv;c=Bi();d=Dt(b);b=new I;K(b);G(G(b,C(502)),d);Bb(c,J(b));}
function Uo(){B.call(this);this.uU=null;}
function ATz(a,b,c){IP(Cb(a.uU.c.h,b.bf),0,N(c));}
function AAt(){var a=this;B.call(a);a.zC=null;a.zE=null;}
function A7s(a){var b,c;b=a.zC;c=a.zE;if(!Gb(b))I4(b);else JG(b);c.e();}
var LH=H(Ed);
var KT=H(Bx);
var P$=H(Bx);
function Q8(){B.call(this);this.v_=null;}
function AQS(){var a=this;B.call(a);a.qO=null;a.oF=null;a.fw=null;a.or=null;a.bS=null;a.rM=null;a.pF=null;a.gV=null;a.h0=null;a.k7=null;}
function A1n(a,b){var c=new AQS();A7a(c,a,b);return c;}
function A7a(a,b,c){var d,e,f;a.fw=b;a.or=c;a.bS=A3t();b=new I;K(b);a.k7=b;a.gV=IW();b=new VW;d=AQw(16);b.hU=0;b.eV=O(KL,d);b.Bl=0.75;X0(b);a.h0=b;b=new X5;c=a.bS;e=a.k7;f=a.gV;b.en=c;b.od=e;b.vO=f;a.rM=b;b=new XV;b.dD=c;b.o8=e;b.uC=f;a.pF=b;}
function AAU(a){var b,c,d,e,f,g,h;a:{b=OX(a.fw.fS);c=b.kH;if(c.dO>0){d=c.dF;e=0;b:while(true){f=b.kH.cw.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.c4;if(Ix(a.gV,g))Cz(a.gV,g);else{h=a.gV;DX(h,g,CE(h.dO));}c=c.dC;if(d!=b.kH.dF)break b;}e=e+1|0;}b=new Jf;X(b);M(b);}}b=a.fw.go;if(b!==null)AEa(a,b);By(a.bS,a.fw.fS.dO);b=VI(OX(a.fw.fS));while(Gl(b)){c=SK(b);HX(a.bS,a.k7.B,N(c));BG(a.k7,c);}b=VI(OX(a.fw.fS));while(Gl(b)){c=SK(b);c=Cz(a.fw.fS,c);By(a.bS,c.r);c=Ci(c);while(Ck(c)){g=Cl(c);g=Cz(a.gV,g);By(a.bS,
g.bf);}}if(a.fw.go===null)By(a.bS,(-1));else{By(a.bS,a.h0.hU);AE4(a,a.fw.go);}if(a.or===null)By(a.bS,(-1));else{By(a.bS,1);AJs(a.or,a.bS,a.h0);}a.qO=TB(a.bS);a.oF=Hl(J(a.k7));}
function AEa(a,b){var c,d,e,f,g,h;if(AHn(a.h0,b))Qn(a.h0,b);else{c=a.h0;d=CE(c.hU);if(b===null){e=ADj(c);if(e===null){c.nP=c.nP+1|0;e=AHr(c,null,0,0);f=c.hU+1|0;c.hU=f;if(f>c.rO)AAO(c);}}else{g=Kv(b);h=g&(c.eV.data.length-1|0);e=AAX(c,b,h,g);if(e===null){c.nP=c.nP+1|0;e=AHr(c,b,h,g);f=c.hU+1|0;c.hU=f;if(f>c.rO)AAO(c);}}e.dd=d;}b=b.dl;if(b===null)return;c=new Zt;c.uG=a;b.f6(c);}
function AE4(a,b){var c,d,e,f;c=(Qn(a.h0,b)).bf;By(a.bS,c);if(b instanceof Px)By(a.bS,(-1));else if(!(b instanceof MJ))By(a.bS,0);else By(a.bS,1);d=a.rM;By(d.en,b.fI.du());e=b.fI;f=new ZR;f.y_=d;e.f6(f);d=a.pF;By(d.dD,b.gq.du());e=b.gq;f=new XB;f.xO=d;e.f6(f);d=b.mY;By(a.bS,d.du());e=new Yn;e.E_=a;d.f6(e);d=b.i7;By(a.bS,d.du());d=d.cx();while(d.da()){e=d.cz();Ry(a.rM,e.m1);Ib(a.pF,e.mo);By(a.bS,e.ua);}d=b.xJ;if(d===null)By(a.bS,(-1));else By(a.bS,(Cz(a.gV,d)).bf);b=b.dl;By(a.bS,b.du());d=new SF;d.sM=a;b.f6(d);}
function QY(){var a=this;B.call(a);a.EG=null;a.EF=0;a.EE=0;}
function A1U(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.EG;d=a.EF;e=a.EE;if(c.gM){f=FO(c);g=new I;K(g);G(G(g,f),C(503));$rt_globals.console.info($rt_ustr(J(g)));}f=b.data;h=CP(f[0]);i=Fw(f[1]);j=(CP(f[2])).data[0];if(c.h.cR==j){k=null;l=null;if(f.length>=5){k=CP(f[3]);l=Fw(f[4]);}f=EE(c);if(!Bj(f,C(379))&&!Bj(f,C(386))&&!Bj(f,C(244))?0:1)PY(c.h,h,i);else{Z4(c.h,h,i,k,l);FH(c.h.er);FH(c.h.eF);O2(c.h);RJ(c.h);Qi(c);}b=c.gA;if(b!==null){c=b.kf;if(c!==null)c.dT(b,CE(d),CE(e));}}}
function AHi(){B.call(this);this.uQ=null;}
function A7u(a,b){var c,d,e,f;c=a.uQ;if(c.fV!=3){b=b.data;d=CP(b[0]);e=Fw(b[1]);Z4(c.h,d,e,null,null);if(c.gM){b=FO(c);f=KZ(Fc(),c.Ez);c=new I;K(c);G(Hi(G(G(c,b),C(504)),f),C(377));$rt_globals.console.info($rt_ustr(J(c)));}}}
function AIv(){B.call(this);this.Aq=null;}
function A46(a,b){var c,d,e,f,g,h,i;c=a.Aq;d=BT(b);e=new I;K(e);G(G(e,C(505)),d);$rt_globals.console.info($rt_ustr(J(e)));f=0;while(f<BeS.data.length){g=4080+f|0;h=Ba(g,c.oc.data.length);e=new AI3;e.Dp=c;e.Dq=f;e.Dr=g;d=C_();BH(d);i=new AI6;i.tX=d;AFC(b,e,i,h,c.oc.data.length);f=f+1|0;}}
function Xg(){B.call(this);this.Fm=null;}
function AXz(a,b){M0(a.Fm,b);}
function AIt(){var a=this;B.call(a);a.BW=null;a.BX=null;}
function A8_(a,b){var c,d;c=a.BW;d=a.BX;Ek(c);d.g(b);}
function SO(){var a=this;B.call(a);a.IQ=null;a.IR=null;a.IO=0;a.IP=0;}
var AKT=H(0);
function AOo(b,c,d,e,f,g){f=f.data;f[Kt(0,0)]=GE(g,b,c,d,0);f[Kt(0,1)]=GE(g,b,c,d,2);f[Kt(1,0)]=GE(g,b,c,e,0);f[Kt(1,1)]=GE(g,b,c,e,2);return f[Kt(0,0)];}
var Jf=H(Bx);
var ADy=H(0);
var RG=H(0);
var GI=H();
function AH5(a,b){var c;c=new Ux;c.vQ=a;c.ue=b;return c;}
function AIP(a,b){var c,d,e,f,g;c=new I;K(c);d=b.ES;while(true){e=new YB;e.Av=d;e.Aw=c;f=a.vQ;g=new Wp;g.ut=a;g.us=e;if(!f.AO(g))break;}e=b.wD;b=e.F$;e=e.F9;AGh(c,0,b,0,N(b));return J(EL(c,e));}
function AKl(){var a=this;GI.call(a);a.D9=null;a.nX=0;a.pX=0;a.HH=0;}
function AW8(a,b,c){var d=new AKl();A$2(d,a,b,c);return d;}
function A$2(a,b,c,d){a.D9=b;a.nX=c;a.pX=d;a.HH=d-c|0;}
function ANd(a,b){var c,d;a:{while(true){c=a.nX;if(c>=a.pX)break a;d=a.D9.data;a.nX=c+1|0;if(b.bO(d[c]))continue;else break;}}return a.nX>=a.pX?0:1;}
function AMe(){var a=this;B.call(a);a.kO=null;a.pE=0;a.g$=0;}
function A3t(){var a=new AMe();A1m(a);return a;}
function A1m(a){a.pE=0;a.kO=BI(16);a.g$=0;}
function HX(a,b,c){By(a,b);By(a,c);}
function By(a,b){var c,d;c=a.kO;d=c.data.length;if(d==a.g$)a.kO=Kp(c,d*2|0);c=a.kO.data;d=a.g$;a.g$=d+1|0;c[d]=b;}
function TB(a){var b,c,d,e,f;b=a.pE;if(b&&a.g$!=b){c=C_();b=a.pE;d=a.g$;e=new I;K(e);G(R(G(R(G(e,C(506)),b),C(507)),d),C(508));Bb(c,J(e));}f=a.kO;b=f.data.length;d=a.g$;if(b!=d)f=Kp(f,d);return f;}
function VW(){var a=this;EI.call(a);a.hU=0;a.eV=null;a.nP=0;a.Bl=0.0;a.rO=0;}
function AQw(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function X0(a){a.rO=a.eV.data.length*a.Bl|0;}
function AHn(a,b){return Zi(a,b)===null?0:1;}
function Qn(a,b){var c;c=Zi(a,b);if(c===null)return null;return c.dd;}
function Zi(a,b){var c,d;if(b===null)c=ADj(a);else{d=Kv(b);c=AAX(a,b,d&(a.eV.data.length-1|0),d);}return c;}
function AAX(a,b,c,d){var e;e=a.eV.data[c];while(e!==null&&!(e.py==d&&(b!==e.c4?0:1))){e=e.jG;}return e;}
function ADj(a){var b;b=a.eV.data[0];while(b!==null&&b.c4!==null){b=b.jG;}return b;}
function AHr(a,b,c,d){var e,f;e=new KL;ZA(e,b,null);e.py=d;f=a.eV.data;e.jG=f[c];f[c]=e;return e;}
function AAO(a){var b,c,d,e,f,g,h,i;b=a.eV.data.length;b=AQw(!b?1:b<<1);c=O(KL,b);d=c.data;e=0;f=b-1|0;while(true){g=a.eV.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.py&f;i=h.jG;h.jG=d[b];d[b]=h;h=i;}e=e+1|0;}a.eV=c;X0(a);}
function X5(){var a=this;B.call(a);a.en=null;a.od=null;a.vO=null;}
function Ry(a,b){var c;if(!(b instanceof NW)){By(a.en,3);AH7(a,b);By(a.en,b.kS);}else{c=b;By(a.en,5);AH7(a,c);By(a.en,c.kS);By(a.en,c.zW);b=c.my;By(a.en,b.r);c=new AAv;c.tt=a;Hh(b,c);}}
function AH7(a,b){var c;c=b.eX.hG;HX(a.en,a.od.B,N(c));By(a.en,b.eX.d4);QU(a,b.lg);BG(a.od,c);}
function QU(a,b){if(b===null)By(a.en,(-1));else By(a.en,(Cz(a.vO,b)).bf);}
function XV(){var a=this;B.call(a);a.dD=null;a.o8=null;a.uC=null;}
function Ib(a,b){var c,d,e;if(b instanceof IL){c=b;By(a.dD,9);ACP(a,c.gg);}else if(b instanceof Lr){d=b;By(a.dD,3);ADq(a,d);By(a.dD,d.sS);ACP(a,d.jy);}else if(b instanceof Ks){e=b;By(a.dD,4);Ib(a,e.jm);Ib(a,e.iS);}else if(b===null)By(a.dD,(-1));else{By(a.dD,5);ADq(a,b);By(a.dD,b.DS);}}
function ADq(a,b){var c;c=b.fm.hG;HX(a.dD,a.o8.B,N(c));By(a.dD,b.fm.d4);b=b.gP;if(b===null)By(a.dD,(-1));else By(a.dD,(Cz(a.uC,b)).bf);BG(a.o8,c);}
function ACP(a,b){var c;By(a.dD,b.r);c=new ZD;c.AF=a;Hh(b,c);}
function AIM(){var a=this;B.call(a);a.vk=0;a.vj=0;}
function Rv(){B.call(this);this.zu=null;}
function Bab(a,b){var c,d,e,f,g;c=a.zu;d=Bi();e=BT(b);f=new I;K(f);G(G(f,C(509)),e);Bb(d,J(f));e=c.p.b1.eo;d=new Tu;g=O(B,1);g.data[0]=b;EF(e,d,C(358),g);}
function XE(){B.call(this);this.DB=null;}
function A48(a,b){var c,d,e,f,g;c=a.DB;d=Bi();e=BT(b);f=new I;K(f);G(G(f,C(510)),e);Bb(d,J(f));e=c.p.b1.eo;d=new AFg;d.Dv=c;g=O(B,1);g.data[0]=b;EF(e,d,C(511),g);}
function RO(){B.call(this);this.H8=null;}
function AWZ(a,b){var c,d,e;c=Bi();d=BT(b);e=new I;K(e);G(G(e,C(512)),d);Bb(c,J(e));d=new AIW;d.Gi=b;c=C_();BH(c);e=new AIV;e.uK=c;Rs(b,d,e);}
function ACI(){B.call(this);this.AI=null;}
function AZ0(a,b){var c,d,e,f;c=a.AI;d=Bi();e=BT(b);f=new I;K(f);G(G(f,C(513)),e);Bb(d,J(f));d=new AGu;e=new Vx;e.Bm=c;d.li=Jq();c=BO();d.e4=c;d.kx=1;d.kg=0;d.ub=e;Br(c,JO(b));Br(d.e4,b);e=Bi();c=BT(d.li);f=new I;K(f);G(G(f,C(514)),c);Bb(e,J(f));IM(b,d);}
var ZT=H();
function A$g(a){return PI();}
var SH=H();
function AUC(a){return PI();}
var AAe=H();
function ATc(a){return PI();}
function GW(){var a=this;B.call(a);a.iB=null;a.dl=null;a.gq=null;a.fI=null;a.i7=null;a.mY=null;a.xJ=null;}
function Bb3(a){var b=new GW();AK_(b,a);return b;}
function AK_(a,b){a.iB=b;a.dl=BO();a.gq=BO();a.fI=BO();a.mY=BO();a.i7=BO();}
function AID(a){var b;b=a.iB;if(b!==null)b.dl.tc(a);}
function LR(){var a=this;B.call(a);a.eX=null;a.lg=null;a.kS=0;}
function BbF(a,b,c){var d=new LR();ALK(d,a,b,c);return d;}
function ALK(a,b,c,d){a.eX=b;a.lg=c;a.kS=d;}
function A9V(a){var b,c,d;b=APr(a.eX);c=a.lg;d=new I;K(d);G(G(G(d,b),C(30)),c);return J(d);}
function APt(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return BW(a.eX,c.eX)&&BW(a.lg,c.lg)&&BW(CE(a.kS),CE(c.kS))?1:0;}return 0;}
function F1(){var a=this;B.call(a);a.fm=null;a.gP=null;a.DS=0;}
function BaX(a,b,c){var d=new F1();PM(d,a,b,c);return d;}
function PM(a,b,c,d){a.fm=b;a.gP=c;a.DS=d;}
function A0K(a){var b,c,d;b=BT(a.fm);c=a.gP;d=new I;K(d);G(G(G(d,b),C(30)),c);return J(d);}
function ANK(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return BW(a.fm,c.fm)&&BW(a.gP,c.gP)?1:0;}return 0;}
function WC(){B.call(this);this.CG=null;}
function A7j(a,b,c,d){Mb(a.CG,b,c.bf,d.bf);}
function Tn(){var a=this;B.call(a);a.m1=null;a.mo=null;a.ua=0;}
function WD(){B.call(this);this.Ah=null;}
function A5K(a,b,c,d){Mb(a.Ah,b,c.bf,d.bf);}
function VA(){B.call(this);this.x$=null;}
function A7X(a,b,c,d){K7(a.x$,b,c.bf,d.bf);}
var Vz=H();
function A0V(a,b){return b.eX.d4>=0?0:1;}
var Vy=H();
function AYK(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fm;if(b===null)break b;if(b.d4>=0)break b;}c=1;break a;}c=0;}return c;}
function VC(){B.call(this);this.Ey=null;}
function A7q(a,b,c,d){K7(a.Ey,b,c.bf,d.bf);}
function AJP(){var a=this;B.call(a);a.nD=null;a.rL=null;}
function AQ2(){var a=this;B.call(a);a.JQ=0;a.IH=0;a.t2=0;a.pc=0;}
function AIe(){var a=this;B.call(a);a.u8=null;a.u9=null;}
function A2M(a){var b,c,d,e,f,g;b=a.u8;c=a.u9;if(BW(c.nD,b.c.f9)){c=c.rL;C9(b,c.pc,c.t2,0);Cn((Bp(b)).ca,c.pc,c.t2);Cn((Bp(b)).b0,c.IH,c.JQ);}else{d=(B7(b.gh.E1)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){HB(b);b=new ADR;b.w$=g;b.w_=c;BH(b);c=new RT;c.xI=b;$rt_globals.setTimeout(BC(c,"onTimer"),0);}}}
function AIf(){var a=this;B.call(a);a.FO=null;a.FN=null;}
function A5U(a){JX(a.FO,a.FN);}
function IL(){F1.call(this);this.gg=null;}
function A7t(a){var b,c;b=Xp(a.gg);c=new ADW;c.FD=a;return AIP(AH5(b,c),ALg(C(40),C(20),C(20)));}
function Lr(){var a=this;F1.call(a);a.jy=null;a.sS=0;}
function A_m(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){if(!ANK(a,b))return 0;c=b;return BW(a.jy,c.jy);}return 0;}
function ZE(){var a=this;B.call(a);a.tE=null;a.tC=null;a.tB=0;a.tD=0;}
function A71(a,b){b=b;FA(a.tE,a.tC,b,a.tB,a.tD);}
function Ks(){var a=this;F1.call(a);a.jm=null;a.iS=null;}
function AXt(a){var b,c,d;b=a.jm.fm.hG;c=BT(a.iS);d=new I;K(d);b=G(d,b);Bl(b,46);G(b,c);return J(d);}
function A2x(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return BW(a.jm,c.jm)&&BW(a.iS,c.iS)?1:0;}return 0;}
function ZF(){var a=this;B.call(a);a.Gq=null;a.Gp=null;a.Go=0;a.Gn=0;}
function AUl(a,b){b=b;FA(a.Gq,a.Gp,b,a.Go,a.Gn);}
function AMI(){var a=this;B.call(a);a.hG=null;a.d4=0;}
function A5q(a,b){var c=new AMI();ARf(c,a,b);return c;}
function ARf(a,b,c){a.hG=b;a.d4=c;}
function AXP(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){c=b;return a.d4==c.d4&&BW(a.hG,c.hG)?1:0;}return 0;}
function APr(a){var b,c,d;b=a.hG;c=a.d4;d=new I;K(d);b=G(d,b);Bl(b,40);Bl(R(b,c),41);return J(d);}
function AB2(){var a=this;B.call(a);a.wx=null;a.wy=null;a.wz=null;}
function A_a(a){AOj(a.wx,a.wy,a.wz);}
var ABB=H();
function AXb(a,b){AQb(b);}
function AFm(){var a=this;B.call(a);a.Gl=null;a.Gm=null;}
function ASf(a){var b,c;b=a.Gl;c=a.Gm;Hd(b.A.bv,Fg(c));}
function Y5(){B.call(this);this.A7=null;}
function A_Q(a,b){Og(a.A7,b);}
var AJr=H();
function AIG(b,c,d){var e,f,g,h,i,j;e=A3t();By(e,d-c|0);f=0;while(c<d){g=Cb(b,c);h=Is(g);By(e,h);i=0;while(i<h){j=IY(g,i);HX(e,f,Kh(j));f=f+Kh(j)|0;i=i+1|0;}f=f+1|0;c=c+1|0;}return TB(e);}
function AJS(b){return AIG(b,0,CJ(b));}
function APs(b){var c,d,e,f,g,h,i;c=NO(b);d=new ND;b=AJx(c);e=AJx(c);f=Bf(c);g=O(G$,f);h=g.data;i=0;while(i<f){h[i]=D3(Bf(c),Bf(c),Bf(c),Bf(c),Bf(c));i=i+1|0;}VZ(d,b,e,g);return d;}
function AJx(b){var c,d,e,f,g,h,i,j,k;c=Bf(b);d=O(E8,c);e=d.data;f=0;while(f<c){a:{g=Bf(b);if(g!=(-1)){h=Bf(b);i=Bf(b);if(i==(-1))e[g]=ACs(h);else{j=new E8;j.ft=h;j.pA=BI(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].pA.data[k]=Bf(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function ANG(b,c,d,e){var f,g,h,i;f=F6(b);g=F6(c);h=AJS(b);i=AJS(c);c=new Vs;c.to=d;Ef(e,1,c,C(330),L(B,[f,h,g,i]));}
var APj=H();
function KB(b,c){return b.data[c];}
function Vs(){B.call(this);this.to=null;}
function ATD(a,b){var c;c=b.data;a.to.g(APs(CP(c[0])));}
function ADX(){var a=this;B.call(a);a.l=null;a.eR=0;a.oD=null;a.tn=0;a.jf=0;a.gI=0;a.bX=0;a.pt=null;}
function O0(a){return a.l.ce;}
function Zp(a,b,c,d){var e,f,g,h,i,j;e=BO();f=a.eR;g=0;if(c!=f)a.eR=c;a:{switch(b){case -1073741784:h=new U7;c=a.bX+1|0;a.bX=c;Hj(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Tp;c=a.bX+1|0;a.bX=c;Hj(h,c);break a;case -33554392:h=new V5;c=a.bX+1|0;a.bX=c;Hj(h,c);break a;default:c=a.jf+1|0;a.jf=c;if(d!==null)h=BcV(c);else{h=new G5;Hj(h,0);g=1;}c=a.jf;if(c<=(-1))break a;if(c>=10)break a;a.oD.data[c]=h;break a;}h=new AIN;Hj(h,(-1));}while(true){if(Gg(a.l)&&a.l.n==(-536870788))
{d=A$T(Cr(a,2),Cr(a,64));while(!D4(a.l)&&Gg(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CZ(d,Bs(i));i=a.l;if(i.bw!=(-536870788))continue;Bs(i);}i=MY(a,d);i.bb(h);}else if(a.l.bw==(-536870788)){i=I7(h);Bs(a.l);}else{i=AB$(a,h);d=a.l;if(d.bw==(-536870788))Bs(d);}if(i!==null)Br(e,i);if(D4(a.l))break;if(a.l.bw==(-536870871))break;}if(a.l.oU==(-536870788))Br(e,I7(h));if(a.eR!=f&&!g){a.eR=f;d=a.l;d.is=f;d.n=d.bw;d.f_=d.gi;j=d.ec;d.D=j+1|0;d.kZ=j;GO(d);}switch(b){case -1073741784:break;case -536870872:d
=new Z7;G6(d,e,h);return d;case -268435416:d=new AHs;G6(d,e,h);return d;case -134217688:d=new AD0;G6(d,e,h);return d;case -67108824:d=new Wt;G6(d,e,h);return d;case -33554392:d=new ED;G6(d,e,h);return d;default:switch(e.r){case 0:break;case 1:return BcO(BU(e,0),h);default:return Bbh(e,h);}return I7(h);}d=new LG;G6(d,e,h);return d;}
function AQc(a){var b,c,d,e,f,g,h;b=BI(4);c=(-1);d=(-1);if(!D4(a.l)&&Gg(a.l)){e=b.data;c=Bs(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B0(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bw;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bs(f);f=a.l;g=f.bw;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bs(f);return A$H(e,3);}return A$H(e,2);}if(!Cr(a,2))return AJ5(b[0]);if(Cr(a,64))return A8X(b[0]);return A3L(b[0]);}e=b.data;c=1;while(c<4&&!D4(a.l)&&Gg(a.l)){h=c+1|0;e[c]=Bs(a.l);c=h;}if(c==1){h=e[0];if(!(BgT.IA(h)==BgU?0:1))return Ze(a,e[0]);}if
(!Cr(a,2))return Bdg(b,c);if(Cr(a,64)){f=new Y_;R5(f,b,c);return f;}f=new AFX;R5(f,b,c);return f;}
function AB$(a,b){var c,d,e,f,g,h,i;if(Gg(a.l)&&!Mh(a.l)&&Pc(a.l.n)){if(Cr(a,128)){c=AQc(a);if(!D4(a.l)){d=a.l;e=d.bw;if(!(e==(-536870871)&&!(b instanceof G5))&&e!=(-536870788)&&!Gg(d))c=N0(a,b,c);}}else if(!ABv(a.l)&&!AGS(a.l)){f=new Sg;K(f);while(!D4(a.l)&&Gg(a.l)&&!ABv(a.l)&&!AGS(a.l)){if(!(!Mh(a.l)&&!a.l.n)&&!(!Mh(a.l)&&Pc(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bs(a.l);if(!NX(e))Bl(f,e&65535);else Lc(f,Gu(e));}if(!Cr(a,2)){c=new AEA;Eq(c);c.cP
=J(f);e=f.B;c.b9=e;c.rd=A7O(e);c.pw=A7O(c.b9);h=0;while(h<(c.b9-1|0)){UJ(c.rd,P(c.cP,h),(c.b9-h|0)-1|0);UJ(c.pw,P(c.cP,(c.b9-h|0)-1|0),(c.b9-h|0)-1|0);h=h+1|0;}}else if(Cr(a,64))c=Bdf(f);else{c=new Ru;Eq(c);c.i8=J(f);c.b9=f.B;}}else c=N0(a,b,AIw(a,b));}else{d=a.l;if(d.bw!=(-536870871))c=N0(a,b,AIw(a,b));else{if(b instanceof G5)M(Cs(C(20),d.ce,Se(d)));c=I7(b);}}a:{if(!D4(a.l)){e=a.l.bw;if(!(e==(-536870871)&&!(b instanceof G5))&&e!=(-536870788)){f=AB$(a,b);if(c instanceof Dx&&!(c instanceof GP)&&!(c instanceof Dg)
&&!(c instanceof FY)){i=c;if(!f.cp(i.V)){c=new Yx;F$(c,i.V,i.f,i.ld);c.V.bb(c);}}if((f.ki()&65535)!=43)c.bb(f);else c.bb(f.V);break a;}}if(c===null)return null;c.bb(b);}if((c.ki()&65535)!=43)return c;return c.V;}
function N0(a,b,c){var d,e,f,g,h;d=a.l;e=d.bw;if(c!==null&&!(c instanceof Cj)){switch(e){case -2147483606:Bs(d);d=new ZN;DP(d,c,b,e);QB();c.bb(BgV);return d;case -2147483605:Bs(d);d=new ACF;DP(d,c,b,(-2147483606));QB();c.bb(BgV);return d;case -2147483585:Bs(d);d=new S6;DP(d,c,b,(-536870849));QB();c.bb(BgV);return d;case -2147483525:f=new Rq;d=Hf(d);g=a.gI+1|0;a.gI=g;Ok(f,d,c,b,(-536870849),g);QB();c.bb(BgV);return f;case -1073741782:case -1073741781:Bs(d);d=new UY;DP(d,c,b,e);c.bb(d);return d;case -1073741761:Bs(d);d
=new ADs;DP(d,c,b,(-536870849));c.bb(b);return d;case -1073741701:h=new Xj;d=Hf(d);e=a.gI+1|0;a.gI=e;Ok(h,d,c,b,(-536870849),e);c.bb(h);return h;case -536870870:case -536870869:Bs(d);if(c.ki()!=(-2147483602)){d=new Dg;DP(d,c,b,e);}else if(Cr(a,32)){d=new UZ;DP(d,c,b,e);}else{d=new ABD;f=ACn(a.eR);DP(d,c,b,e);d.oT=f;}c.bb(d);return d;case -536870849:Bs(d);d=new HD;DP(d,c,b,(-536870849));c.bb(b);return d;case -536870789:h=new Hg;d=Hf(d);e=a.gI+1|0;a.gI=e;Ok(h,d,c,b,(-536870849),e);c.bb(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bs(d);d=new AI4;F$(d,f,b,e);f.f=d;return d;case -2147483585:Bs(d);c=new Yr;F$(c,f,b,(-2147483585));return c;case -2147483525:c=new AB9;Vr(c,Hf(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bs(d);d=new ADr;F$(d,f,b,e);f.f=d;return d;case -1073741761:Bs(d);c=new AF9;F$(c,f,b,(-1073741761));return c;case -1073741701:c=new UI;Vr(c,Hf(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bs(d);d=BbC(f,b,e);f.f=d;return d;case -536870849:Bs(d);c
=new FY;F$(c,f,b,(-536870849));return c;case -536870789:return Bcn(Hf(d),f,b,(-536870789));default:}return c;}
function AIw(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof G5;while(true){a:{e=a.l;f=e.bw;if((f&(-2147418113))==(-2147483608)){Bs(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.eR=g;else{if(f!=(-1073741784))g=a.eR;c=Zp(a,f,g,b);e=a.l;if(e.bw!=(-536870871))M(Cs(C(20),e.ce,e.ec));Bs(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bs(e);c
=A$s(0);break a;case -2147483577:Bs(e);c=new ABy;Cc(c);break a;case -2147483558:Bs(e);c=new Y6;h=a.bX+1|0;a.bX=h;AQq(c,h);break a;case -2147483550:Bs(e);c=A$s(1);break a;case -2147483526:Bs(e);c=new AHP;Cc(c);break a;case -536870876:Bs(e);a.bX=a.bX+1|0;if(Cr(a,8)){if(Cr(a,1)){c=Bba(a.bX);break a;}c=BaN(a.bX);break a;}if(Cr(a,1)){c=Bbm(a.bX);break a;}c=BbM(a.bX);break a;case -536870866:Bs(e);if(Cr(a,32)){c=BbU();break a;}c=BbI(ACn(a.eR));break a;case -536870821:Bs(e);i=0;c=a.l;if(c.bw==(-536870818)){i=1;Bs(c);}c
=MY(a,Iz(a,i));c.bb(b);e=a.l;if(e.bw!=(-536870819))M(Cs(C(20),e.ce,e.ec));ABX(e,1);Bs(a.l);break a;case -536870818:Bs(e);a.bX=a.bX+1|0;if(!Cr(a,8)){c=new MM;Cc(c);break a;}c=new AAF;e=ACn(a.eR);Cc(c);c.C7=e;break a;case 0:j=e.gi;if(j!==null)c=MY(a,j);else{if(D4(e)){c=I7(b);break a;}c=AJ5(f&65535);}Bs(a.l);break a;default:break b;}Bs(e);c=new MM;Cc(c);break a;}h=(f&2147483647)-48|0;if(a.jf<h)M(Cs(C(20),GU(e),Se(a.l)));Bs(e);a.bX=a.bX+1|0;c=!Cr(a,2)?Bb$(h,a.bX):Cr(a,64)?Bbb(h,a.bX):Bde(h,a.bX);a.oD.data[h].q2
=1;a.tn=1;break a;}if(f>=0&&!H9(e)){c=Ze(a,f);Bs(a.l);}else if(f==(-536870788))c=I7(b);else{if(f!=(-536870871)){b=new Lu;c=!H9(a.l)?Y3(f&65535):a.l.gi.J();e=a.l;Ou(b,c,e.ce,e.ec);M(b);}if(d){b=new Lu;e=a.l;Ou(b,C(20),e.ce,e.ec);M(b);}c=I7(b);}}}if(f!=(-16777176))break;}return c;}
function Iz(a,b){var c,d,e,f,g,h,i,j,$$je;c=A$T(Cr(a,2),Cr(a,64));Fu(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(D4(a.l))break a;h=a.l;b=h.bw;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CZ(c,d);d=Bs(a.l);h=a.l;if(h.bw!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bs(h);e=1;d=(-1);break d;}Bs(h);if(g){c=Iz(a,0);break d;}if(a.l.bw==(-536870819))break d;YS(c,Iz(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bs(h);h=a.l;i=h.bw;if(H9(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Pc(i))break e;i=i&65535;break e;}catch($$e){$$je=Ev($$e);if($$je instanceof Fb){break b;}else{throw $$e;}}}try{Cg(c,d,i);}catch($$e){$$je=Ev($$e);if($$je instanceof Fb){break b;}else{throw $$e;}}Bs(a.l);d=(-1);break d;}}if(d>=0)CZ(c,d);d=45;Bs(a.l);break d;case -536870821:if(d>=0){CZ(c,d);d=(-1);}Bs(a.l);j=0;h=a.l;if(h.bw==(-536870818)){Bs(h);j=1;}if(!e)ANf(c,Iz(a,j));else YS(c,Iz(a,j));e=0;Bs(a.l);break d;case -536870819:if(d>=0)CZ(c,
d);d=93;Bs(a.l);break d;case -536870818:if(d>=0)CZ(c,d);d=94;Bs(a.l);break d;case 0:if(d>=0)CZ(c,d);h=a.l.gi;if(h===null)d=0;else{AQ0(c,h);d=(-1);}Bs(a.l);break d;default:}if(d>=0)CZ(c,d);d=Bs(a.l);}g=0;}M(Cs(C(20),O0(a),a.l.ec));}M(Cs(C(20),O0(a),a.l.ec));}if(!f){if(d>=0)CZ(c,d);return c;}M(Cs(C(20),O0(a),a.l.ec-1|0));}
function Ze(a,b){var c,d,e;c=NX(b);if(Cr(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A3L(b&65535);}if(Cr(a,64)&&b>128){if(c){d=new Z0;Eq(d);d.b9=2;d.pe=HY(GY(b));return d;}if(SJ(b))return AXJ(b&65535);if(!VO(b))return A8X(b&65535);return A55(b&65535);}}if(!c){if(SJ(b))return AXJ(b&65535);if(!VO(b))return AJ5(b&65535);return A55(b&65535);}d=new EJ;Eq(d);d.b9=2;d.ic=b;e=(Gu(b)).data;d.lr=e[0];d.kP=e[1];return d;}
function MY(a,b){var c,d,e;if(!APk(b)){if(!b.Z){if(b.jH())return AUY(b);return AZ4(b);}if(!b.jH())return A6s(b);c=new Ol;AGo(c,b);return c;}c=AJq(b);d=new Rb;Cc(d);d.oX=c;d.z2=c.bu;if(!b.Z){if(b.jH())return ALy(AUY(KE(b)),d);return ALy(AZ4(KE(b)),d);}if(!b.jH())return ALy(A6s(KE(b)),d);c=new T6;e=new Ol;AGo(e,KE(b));AMR(c,e,d);return c;}
function KH(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cr(a,b){return (a.eR&b)!=b?0:1;}
function ADm(){var a=this;B.call(a);a.Ad=null;a.Ac=null;a.Ab=null;}
function A6J(a,b){var c,d,e,f,g;c=a.Ad;d=a.Ac;e=a.Ab;f=new AIC;g=AGG(E4(d));AQH(f,b,null,g);I6(c,f);e.e();}
function ADl(){B.call(this);this.EB=null;}
function A06(a,b){Bb(a.EB,b);}
function AFa(){var a=this;B.call(a);a.s0=null;a.s1=null;}
function A2N(a){var b,c;b=a.s0;c=a.s1;CC(b.cl.F,c);AFx(b);}
var ACv=H();
var BgW=null;function PY(b,c,d){Um(b,c,d,0);}
function Um(b,c,d,e){ABl(b,c,d,null,null,e);}
function ABl(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=NO(c);i=Bf(h);j=Bf(h);k=Bf(h);l=CJ(b);c=b.C;if(c.data.length<i)b.C=AJ2(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bf(h)|0;h.f0=h.f0+n|0;}else b.C.data[m]=Ez(ADb(h,d,0));m=m+1|0;}O2(b);if(j)b.d0=ALY(AMP(h));FH(b.eF);FH(b.er);o=b.eF;g=0;while(g<k){DX(o,Ej(Bf(h),Bf(h)),Ej(Bf(h),Bf(h)));g=g+1|0;}p=b.eF;o=b.er;q=OK(PX(p));while(Gl(q)){r=Qz(q);s=r.c4;p=r.dd;BH(BgW);r=Cz(o,p);if(r===null){r=BO();DX(o,p,r);}Br(r,s);}if(o.re===null){p=new S2;p.zq=o;o.re=p;}p=o.re;r=new ADZ;PA(r,
p.zq);while(Gl(r)){PP(r);o=r.iv.dd;p=BdL;c=O(B,o.r);d=c.data;FE(o,c);Ms(c,p);g=0;t=d.length;while(g<t){p=d[g];LU(o,g);o.cG.data[g]=p;g=g+1|0;}}Uj(h);if(e!==null&&f!==null){p=AXd(e,f);Sf(p);b.fN=A3X(p.rt,p.kc);b.d0=ALY(p.rW);}}
function Z4(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=NO(c);i=Bf(h);j=Bf(h);k=Bf(h)!=1?0:1;l=Bf(h);m=Bf(h);n=Lx(b,i);o=Lx(b,j);p=(JT(Cb(b,n.b),n.a)).data[0].v;q=(JT(Cb(b,o.b),o.a)).data[1].v;r=0;s=l-1|0;while(r<l){g=ADb(h,d,i);if(!r)g=NH(p,g);if(r==s)g=NH(g,q);t=n.b+r|0;u=Ez(g);c=b.C.data;v=c[t];c[t]=u;if(!k&&Is(v)==Is(u)){t=0;while(t<Is(v)){o=v.v.data[t];w=u.v.data[t];x=o.cm;y=x!=5?0:1;if(!y&&x&&!w.cm){w.cm=x;w.bZ=o.bZ;}t=t+1|0;}}r=r+1|0;}if(k){if(m){u
=AMP(h);w=Mf(i,j,(-1));AA9(b.d0,w,u);}else if(e!==null&&f!==null){v=AXd(e,f);Sf(v);w=Mf(i,j,(-1));AA9(b.d0,w,v.rW);n=b.fN;n.go=b.d0.dW.cL;n.fS=v.kc;}}Uj(h);}
function ADb(b,c,d){var e,f,g,h,i,j,k,l;e=Bf(b);f=O(CG,e);g=f.data;h=0;while(h<e){i=Bf(b);j=Bf(b);k=Bf(b);l=Bf(b);g[h]=EH(Fh(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function APZ(){BgW=new Y7;}
function AEY(){GI.call(this);this.EI=null;}
function APX(a,b){var c,d,e;c=0;while(true){d=a.EI;if(d.lH===null)d.lH=Ci(d.B0);if(!Ck(d.lH))e=0;else{c=b.bO(Cl(d.lH));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Ui=H(0);
var Jy=H(0);
function R3(){var a=this;B.call(a);a.mV=0;a.GI=null;}
function A8R(a,b){var c,d;c=BT(b);d=new I;K(d);G(G(d,C(515)),c);$rt_globals.console.info($rt_ustr(J(d)));a.mV=a.mV+1|0;IM(b,a);}
function A5R(a,b){var c;b=BT(b);c=new I;K(c);G(G(c,C(516)),b);$rt_globals.console.info($rt_ustr(J(c)));}
function AZo(a){var b;b=a.mV-1|0;a.mV=b;if(!b)Bb(Bi(),C(517));}
function ABj(){var a=this;B.call(a);a.JA=null;a.Bq=null;}
function AUt(a,b){var c,d,e,f;c=b.data;b=a.Bq;d=Bi();b=BT(b);e=new I;K(e);G(G(e,C(518)),b);Bb(d,J(e));b=Bi();f=c.length;d=new I;K(d);R(G(d,C(519)),f);Bb(b,J(d));}
function ABk(){B.call(this);this.JO=null;}
function A9j(a,b){$rt_globals.console.info($rt_ustr(b));}
function AGf(){var a=this;B.call(a);a.x6=null;a.x7=null;}
function A$p(a){var b,c;b=a.x6;c=a.x7;Hd(b.A.bv,Fg(c));}
var Uz=H();
function A8Y(a,b){return FS(b);}
var APf=H();
function ALg(b,c,d){var e,f,g,h,i,j,k,l,m;a:{e=new AFM;e.zw=b;f=new AFK;f.G1=b;b=new AFL;g=new AFJ;g.F$=c;g.F9=d;h=O(E$,0);i=new Qy;i.ps=F(E$);c=F(E$).dJ;c.$clinit();i.n8=BI((((AXA(c)).data.length-1|0)/32|0)+1|0);BH(h);j=new Rz;j.rw=h;if(j instanceof Qy){c=j;if(i.ps===c.ps){k=0;while(true){h=i.n8.data;if(k>=h.length)break;l=h[k];m=c.n8.data;if((l|m[k])!=h[k])h[k]=h[k]|m[k];k=k+1|0;}break a;}}Hq(i,j);}c=new V2;c.Jh=b;c.ES=e;c.IJ=f;c.wD=g;c.Jx=i;return c;}
function TG(){var a=this;B.call(a);a.wk=null;a.wj=null;}
function A65(a){var b,c;b=a.wk;c=Fg(a.wj);C2(b.jb,c);}
function KL(){var a=this;HS.call(a);a.py=0;a.jG=null;}
function Ya(){var a=this;B.call(a);a.Bb=null;a.Ba=0.0;}
function Pe(a,b){return MX(a.Bb,b,a.Ba*2.0+0.875);}
function AO1(){var a=this;B.call(a);a.V0=null;a.VY=null;a.V1=0.0;}
function APT(){var a=this;B.call(a);a.jN=null;a.f0=0;}
function NO(a){var b=new APT();A18(b,a);return b;}
function A18(a,b){a.jN=b;a.f0=0;}
function Bf(a){var b,c;b=a.jN.data;c=a.f0;a.f0=c+1|0;return b[c];}
function Uj(a){var b,c,d,e;if(a.f0!=a.jN.data.length){b=C_();c=a.jN.data.length;d=a.f0;e=new I;K(e);G(R(G(R(G(e,C(506)),c),C(520)),d),C(521));Bb(b,J(e));}}
function AFM(){B.call(this);this.zw=null;}
var R9=H(0);
var ABR=H(0);
function AFK(){B.call(this);this.G1=null;}
var AFL=H();
function AFJ(){var a=this;B.call(a);a.F$=null;a.F9=null;}
var E$=H(Cu);
var BgX=null;var BgY=null;var BgZ=null;var Bg0=null;function A3B(){A3B=Bn(E$);AVu();}
function AOG(a,b){var c=new E$();AKI(c,a,b);return c;}
function A16(){A3B();return Bg0.dN();}
function AKI(a,b,c){A3B();Ds(a,b,c);}
function AVu(){var b;BgX=AOG(C(522),0);BgY=AOG(C(523),1);b=AOG(C(524),2);BgZ=b;Bg0=L(E$,[BgX,BgY,b]);}
var ABs=H(0);
function BY(){var a=this;B.call(a);a.f=null;a.c1=0;a.q$=null;a.ld=0;}
var BdS=0;function Cc(a){var b;b=BdS;BdS=b+1|0;a.q$=Hs(b);}
function Ps(a,b){var c;c=BdS;BdS=c+1|0;a.q$=Hs(c);a.f=b;}
function JH(a,b,c,d){var e;e=d.E;while(true){if(b>e)return (-1);if(a.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function JQ(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A31(a,b){a.ld=b;}
function A3u(a){return a.ld;}
function ALb(a){var b,c,d;b=a.q$;c=a.w();d=new I;K(d);Bl(d,60);b=G(d,b);Bl(b,58);Bl(G(b,c),62);return J(d);}
function AY3(a){return ALb(a);}
function AZu(a){return a.f;}
function A0i(a,b){a.f=b;}
function A$L(a,b){return 1;}
function A_I(a){return null;}
function LO(a){var b;a.c1=1;b=a.f;if(b!==null){if(!b.c1){b=b.hJ();if(b!==null){a.f.c1=1;a.f=b;}a.f.fD();}else if(b instanceof IT&&b.fH.q2)a.f=b.f;}}
function AM1(){BdS=1;}
function AHj(){var a=this;B.call(a);a.nQ=null;a.j9=0;}
function AJm(){B.call(this);this.Wl=null;}
function AI3(){var a=this;B.call(a);a.Dp=null;a.Dq=0;a.Dr=0;}
function A82(a,b){var c,d,e,f,g,h,i;c=b.data;d=a.Dp;e=a.Dq;f=a.Dr;g=Q2(b);d.l$.data[e]=g;d.pG.data[e]=c.length;h=BeS.data;if(h[f-4080|0]!=g)d.j5=d.j5+1|0;else d.m0=d.m0+1|0;if((d.m0+d.j5|0)==h.length){e=0;while(e<d.l$.data.length){b=Bi();f=4080+e|0;i=QD(d.l$.data[e]);g=d.pG.data[e];c=new I;K(c);Bl(c,91);R(G(G(G(R(c,f),C(525)),i),C(526)),g);Bb(b,J(c));e=e+1|0;}if(!d.j5)Bb(Bi(),C(527));else{b=Bi();e=d.m0;c=new I;K(c);R(G(c,C(528)),e);Bb(b,J(c));b=Bi();e=d.j5;d=new I;K(d);R(G(d,C(529)),e);Bb(b,J(d));}}}
function AI6(){B.call(this);this.tX=null;}
function A$F(a,b){Bb(a.tX,b);}
var Y7=H();
var GJ=H();
var Bg1=null;var Bg2=null;var Bgs=null;var Bg3=null;var Bg4=null;var Bg5=null;function APp(){Bg1=new XQ;Bg2=new XN;Bgs=new XO;Bg3=new XL;Bg4=new XM;Bg5=new ZM;}
function ANH(){var a=this;B.call(a);a.rt=null;a.rW=null;a.kc=null;a.c_=null;a.qT=null;a.o2=null;a.ky=null;a.pJ=null;a.rQ=null;}
function AXd(a,b){var c=new ANH();A$W(c,a,b);return c;}
function A$W(a,b,c){a.c_=NO(b);a.qT=c;}
function Sf(a){var b,c,d,e,f,g,h,i;b=Bf(a.c_);c=new Pz;Tm(c);a.kc=c;a.ky=BO();d=0;while(d<b){e=Bf(a.c_);f=Bf(a.c_);g=Fh(a.qT,e,f);DX(a.kc,g,BO());Br(a.ky,g);d=d+1|0;}c=OK(PX(a.kc));while(Gl(c)){Hq((Qz(c)).dd,RA(a));}d=Bf(a.c_);if(d==(-1))a.rt=null;else{a.o2=O(GW,d);c=new AAf;h=a.c_;i=a.qT;g=a.ky;c.eG=h;c.C3=i;c.Cx=g;a.pJ=c;c=new UC;c.fh=h;c.Fa=i;c.Fr=g;a.rQ=c;a.rt=Un(a,null);}if(Bf(a.c_)!=(-1))a.rW=ADV(a.c_,a.o2);}
function Un(a,b){var c,d,e,f,g,h,i,j,k;c=Bf(a.c_);d=Bf(a.c_);e=a.pJ;f=Bf(e.eG);g=BO();h=0;while(h<f){Br(g,Rc(e));h=h+1|0;}a:{switch(d){case -1:i=new Px;i.iB=b;b=Bgs;i.dl=b;i.gq=b;i.fI=b;i.mY=b;i.i7=b;break a;case 0:i=Bb3(b);break a;case 1:i=new MJ;AK_(i,b);Hq(i.fI,g);break a;default:}b=new CW;i=new I;K(i);R(G(i,C(530)),d);Bd(b,J(i));M(b);}i.fI=g;b=a.rQ;d=Bf(b.fh);e=BO();j=0;while(j<d){Br(e,It(b));j=j+1|0;}i.gq=e;i.mY=RA(a);d=Bf(a.c_);b=BO();j=0;while(j<d){e=Rc(a.pJ);g=It(a.rQ);f=Bf(a.c_);k=new Tn;k.m1=e;k.mo
=g;k.ua=f;Br(b,k);j=j+1|0;}i.i7=b;j=Bf(a.c_);i.xJ=j==(-1)?null:BU(a.ky,j);d=Bf(a.c_);b=BO();j=0;while(j<d){Br(b,Un(a,i));j=j+1|0;}i.dl=b;a.o2.data[c]=i;return i;}
function RA(a){var b,c,d,e;b=Bf(a.c_);c=BO();d=0;while(d<b){e=Bf(a.c_);Br(c,BU(a.ky,e));d=d+1|0;}return c;}
var Tu=H();
function A52(a,b){AQb(b);}
function AFg(){B.call(this);this.Dv=null;}
function AVV(a,b){VY(a.Dv,b);}
function AIW(){B.call(this);this.Gi=null;}
function A94(a,b){var c;c=a.Gi;ANF(Pl(c),c,b);}
function AIV(){B.call(this);this.uK=null;}
function AS6(a,b){Bb(a.uK,b);}
function AGu(){var a=this;B.call(a);a.ub=null;a.li=null;a.e4=null;a.kx=0;a.kg=0;}
function A90(a,b){var c,d,e,f,g;if(a.li!==Jq()){b=new Bx;X(b);M(b);}Br(a.e4,JO(b));Br(a.e4,b);c=Bi();d=a.kg;a.kg=d+1|0;e=BT(b);f=a.e4.r;g=new I;K(g);R(G(G(G(R(G(g,C(531)),d),C(283)),e),C(532)),f);Bb(c,J(g));a.kx=a.kx+1|0;IM(b,a);}
function AXw(a,b){var c,d,e,f;if(a.li!==Jq()){b=new Bx;X(b);M(b);}Br(a.e4,Pl(b));Br(a.e4,b);c=Bi();d=a.kg;a.kg=d+1|0;b=BT(b);e=a.e4.r;f=new I;K(f);R(G(G(G(R(G(f,C(533)),d),C(283)),b),C(532)),e);Bb(c,J(f));}
function A4q(a){var b,c,d,e,f,g;if(a.li!==Jq()){b=new Bx;X(b);M(b);}c=a.kx-1|0;a.kx=c;if(!c){b=Bi();c=a.e4.r;d=new I;K(d);R(G(d,C(534)),c);Bb(b,J(d));b=a.e4;d=a.ub;e=O(B,b.r);f=e.data;c=0;g=f.length;while(c<g){f[c]=BU(b,c);c=c+1|0;}VY(d.Bm,e);}}
function Vx(){B.call(this);this.Bm=null;}
var SL=H(0);
var E7=H(Gx);
var QE=H(E7);
function V2(){var a=this;B.call(a);a.Jh=null;a.ES=null;a.IJ=null;a.wD=null;a.Jx=null;}
function Df(){var a=this;BY.call(a);a.q2=0;a.e_=0;}
var BgV=null;function QB(){QB=Bn(Df);A4T();}
function BcV(a){var b=new Df();Hj(b,a);return b;}
function Hj(a,b){QB();Cc(a);a.e_=b;}
function ASe(a,b,c,d){var e,f;e=Kc(d,a.e_);OH(d,a.e_,b);f=a.f.d(b,c,d);if(f<0)OH(d,a.e_,e);return f;}
function A66(a){return a.e_;}
function AU3(a){return C(535);}
function ASu(a,b){return 0;}
function A4T(){var b;b=new ABw;Cc(b);BgV=b;}
function H3(){var a=this;B.call(a);a.bt=null;a.is=0;a.gc=0;a.yC=0;a.oU=0;a.bw=0;a.n=0;a.Dy=0;a.gi=null;a.f_=null;a.D=0;a.lp=0;a.ec=0;a.kZ=0;a.ce=null;}
var Bg6=null;var BgT=null;var BgU=0;function ABX(a,b){if(b>0&&b<3)a.gc=b;if(b==1){a.n=a.bw;a.f_=a.gi;a.D=a.kZ;a.kZ=a.ec;GO(a);}}
function H9(a){return a.gi===null?0:1;}
function Mh(a){return a.f_===null?0:1;}
function Bs(a){GO(a);return a.oU;}
function Hf(a){var b;b=a.gi;GO(a);return b;}
function GO(a){var b,c,d,e,f,g,h,$$je;a.oU=a.bw;a.bw=a.n;a.gi=a.f_;a.ec=a.kZ;a.kZ=a.D;while(true){b=0;c=a.D>=a.bt.data.length?0:NC(a);a.n=c;a.f_=null;if(a.gc==4){if(c!=92)return;c=a.D;d=a.bt.data;c=c>=d.length?0:d[Cf(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.D=a.lp;return;}a.gc=a.yC;a.n=a.D>(a.bt.data.length-2|0)?0:NC(a);}a:{c=a.n;if(c!=92){e=a.gc;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.bt.data[a.D]!=63){a.n=(-2147483608);break a;}Cf(a);c=a.bt.data[a.D];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);Cf(a);break b;default:M(Cs(C(20),GU(a),a.D));}a.n=(-67108824);Cf(a);}else{switch(c){case 33:break;case 60:Cf(a);c=a.bt.data[a.D];e=1;break b;case 61:a.n=(-536870872);Cf(a);break b;case 62:a.n=(-33554392);Cf(a);break b;default:f=AQX(a);a.n=f;if(f<256){a.is=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.is=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);Cf(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.D;d=a.bt.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);Cf(a);break a;case 63:a.n=c|(-1073741824);Cf(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);ABX(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.f_=AMv(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.D>=(a.bt.data.length-2|0)?(-1):NC(a);c:{a.n=c;switch(c){case -1:M(Cs(C(20),GU(a),a.D));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=ALp(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.gc!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:M(Cs(C(20),GU(a),a.D));case 68:case 83:case 87:case 100:case 115:case 119:a.f_=Vk(Fh(a.bt,
a.lp,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.yC=a.gc;a.gc=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.D;d=a.bt.data;if(c>=(d.length-2|0))M(Cs(C(20),GU(a),a.D));a.n=d[Cf(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=ACK(a,4);break a;case 120:a.n=ACK(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=APu(a);h=0;if(a.n==80)h=1;try{a.f_=Vk(g,h);}catch($$e){$$je=Ev($$e);if($$je instanceof Oo){M(Cs(C(20),GU(a),a.D));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function APu(a){var b,c,d,e,f,g;b=new I;FZ(b,10);c=a.D;d=a.bt;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Fh(d,Cf(a),1);f=new I;K(f);G(G(f,C(536)),b);return J(f);}Cf(a);c=0;a:{while(true){g=a.D;d=a.bt.data;if(g>=(d.length-2|0))break;c=d[Cf(a)];if(c==125)break a;Bl(b,c);}}if(c!=125)M(Cs(C(20),a.ce,a.D));}if(!b.B)M(Cs(C(20),a.ce,a.D));f=J(b);if(N(f)==1){b=new I;K(b);G(G(b,C(536)),f);return J(b);}b:{c:{if(N(f)>3){if(Pj(f,C(536)))break c;if(Pj(f,C(537)))break c;}break b;}f=C3(f,2);}return f;}
function AMv(a,b){var c,d,e,f,g,$$je;c=new I;FZ(c,4);d=(-1);e=2147483647;a:{while(true){f=a.D;g=a.bt.data;if(f>=g.length)break a;b=g[Cf(a)];if(b==125)break a;if(b==44&&d<0)try{d=L_(DR(c),10);AMB(c,0,ABq(c));continue;}catch($$e){$$je=Ev($$e);if($$je instanceof DQ){break;}else{throw $$e;}}Bl(c,b&65535);}M(Cs(C(20),a.ce,a.D));}if(b!=125)M(Cs(C(20),a.ce,a.D));if(c.B>0)b:{try{e=L_(DR(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ev($$e);if($$je instanceof DQ){}else{throw $$e;}}M(Cs(C(20),a.ce,a.D));}else if
(d<0)M(Cs(C(20),a.ce,a.D));if((d|e|(e-d|0))<0)M(Cs(C(20),a.ce,a.D));b=a.D;g=a.bt.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);Cf(a);break c;case 63:a.n=(-1073741701);Cf(a);break c;default:}a.n=(-536870789);}c=new AAo;c.gF=d;c.gD=e;return c;}
function GU(a){return a.ce;}
function D4(a){return !a.bw&&!a.n&&a.D==a.Dy&&!H9(a)?1:0;}
function Pc(b){return b<0?0:1;}
function Gg(a){return !D4(a)&&!H9(a)&&Pc(a.bw)?1:0;}
function ABv(a){var b;b=a.bw;return b<=56319&&b>=55296?1:0;}
function AGS(a){var b;b=a.bw;return b<=57343&&b>=56320?1:0;}
function VO(b){return b<=56319&&b>=55296?1:0;}
function SJ(b){return b<=57343&&b>=56320?1:0;}
function ACK(a,b){var c,d,e,f,$$je;c=new I;FZ(c,b);d=a.bt.data.length-2|0;e=0;while(true){f=BS(e,b);if(f>=0)break;if(a.D>=d)break;Bl(c,a.bt.data[Cf(a)]);e=e+1|0;}if(!f)a:{try{b=L_(DR(c),16);}catch($$e){$$je=Ev($$e);if($$je instanceof DQ){break a;}else{throw $$e;}}return b;}M(Cs(C(20),a.ce,a.D));}
function ALp(a){var b,c,d,e,f,g;b=3;c=1;d=a.bt.data;e=d.length-2|0;f=AGz(d[a.D],8);switch(f){case -1:break;default:if(f>3)b=2;Cf(a);a:{while(true){if(c>=b)break a;g=a.D;if(g>=e)break a;g=AGz(a.bt.data[g],8);if(g<0)break;f=(f*8|0)+g|0;Cf(a);c=c+1|0;}}return f;}M(Cs(C(20),a.ce,a.D));}
function AQX(a){var b,c,d,e;b=1;c=a.is;a:while(true){d=a.D;e=a.bt.data;if(d>=e.length)M(Cs(C(20),a.ce,d));b:{c:{switch(e[d]){case 41:Cf(a);return c|256;case 45:if(!b)M(Cs(C(20),a.ce,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Cf(a);}Cf(a);return c;}
function Cf(a){var b,c,d,e,f;b=a.D;a.lp=b;if(!(a.is&4))a.D=b+1|0;else{c=a.bt.data.length-2|0;a.D=b+1|0;a:while(true){d=a.D;if(d<c&&UD(a.bt.data[d])){a.D=a.D+1|0;continue;}d=a.D;if(d>=c)break;e=a.bt.data;if(e[d]!=35)break;a.D=d+1|0;while(true){f=a.D;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.D=f+1|0;}}}return a.lp;}
function AQz(b){return Bg6.Oe(b);}
function NC(a){var b,c,d,e;b=a.bt.data[Cf(a)];if(C4(b)){c=a.lp+1|0;d=a.bt.data;if(c<d.length){e=d[c];if(Do(e)){Cf(a);return E0(b,e);}}}return b;}
function Se(a){return a.ec;}
function Lu(){var a=this;Bv.call(a);a.H$=null;a.HR=null;a.vC=0;}
function Cs(a,b,c){var d=new Lu();Ou(d,a,b,c);return d;}
function Ou(a,b,c,d){X(a);a.vC=(-1);a.H$=b;a.HR=c;a.vC=d;}
function Zt(){B.call(this);this.uG=null;}
function AUE(a,b){b=b;AEa(a.uG,b);}
var Px=H(GW);
var MJ=H(GW);
function Gy(){var a=this;B.call(a);a.K1=C8;a.J8=C8;a.Jj=null;a.Hm=null;a.Jc=0;a.K8=null;}
var Bg7=null;var Bg8=null;var Bg9=0;var Bg$=0;var Bg_=null;function AMX(){AMX=Bn(Gy);ASh();}
function AYz(b){AMX();if(Bg8!==b)Bg8=b;Bg8.J8=Fc();}
function Jq(){AMX();return Bg8;}
function ASh(){var b,c,d;b=new Gy;AMX();c=null;b.Jj=new B;b.Jc=1;b.Hm=C(538);b.K8=c;d=Bg9;Bg9=d+1|0;b.K1=Bm(d);Bg7=b;Bg8=b;Bg9=1;Bg$=1;Bg_=new Vj;}
function Qy(){var a=this;QE.call(a);a.ps=null;a.n8=null;}
function A9f(a,b){var c,d,e,f;c=b.fQ;d=c/32|0;e=1<<(c%32|0);f=a.n8.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function Rz(){E5.call(this);this.rw=null;}
function A1V(a,b){return a.rw.data[b];}
function AXR(a){return a.rw.data.length;}
var U7=H(Df);
function A2t(a,b,c,d){var e;e=a.e_;B5(d,e,b-D6(d,e)|0);return a.f.d(b,c,d);}
function A38(a){return C(539);}
function A9u(a,b){return 0;}
var AIN=H(Df);
function A3W(a,b,c,d){return b;}
function A6i(a){return C(540);}
var Tp=H(Df);
function ASA(a,b,c,d){if(D6(d,a.e_)!=b)b=(-1);return b;}
function A$D(a){return C(541);}
function V5(){Df.call(this);this.Ao=0;}
function A2w(a,b,c,d){var e;e=a.e_;B5(d,e,b-D6(d,e)|0);a.Ao=b;return b;}
function AZw(a){return C(542);}
function A8j(a,b){return 0;}
var G5=H(Df);
function A0u(a,b,c,d){if(d.nN!=1&&b!=d.E)return (-1);d.l2=1;OH(d,0,b);return b;}
function A3F(a){return C(543);}
function Cj(){BY.call(this);this.b9=0;}
function Eq(a){Cc(a);a.b9=1;}
function Bag(a,b,c,d){var e;if((b+a.cA()|0)>d.E){d.eB=1;return (-1);}e=a.bW(b,c);if(e<0)return (-1);return a.f.d(b+e|0,c,d);}
function A$c(a){return a.b9;}
function AVA(a,b){return 1;}
var AMi=H(Cj);
function I7(a){var b=new AMi();A7c(b,a);return b;}
function A7c(a,b){Ps(a,b);a.b9=1;a.ld=1;a.b9=0;}
function A9M(a,b,c){return 0;}
function A40(a,b,c,d){var e,f,g;e=d.E;f=d.dQ;while(true){g=BS(b,e);if(g>0)return (-1);if(g<0&&Do(P(c,b))&&b>f&&C4(P(c,b-1|0))){b=b+1|0;continue;}if(a.f.d(b,c,d)>=0)break;b=b+1|0;}return b;}
function A3T(a,b,c,d,e){var f,g;f=e.E;g=e.dQ;while(true){if(c<b)return (-1);if(c<f&&Do(P(d,c))&&c>g&&C4(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.d(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU4(a){return C(544);}
function A2v(a,b){return 0;}
function Ce(){var a=this;BY.call(a);a.b$=null;a.fH=null;a.bg=0;}
function Bbh(a,b){var c=new Ce();G6(c,a,b);return c;}
function G6(a,b,c){Cc(a);a.b$=b;a.fH=c;a.bg=c.e_;}
function AUJ(a,b,c,d){var e,f,g,h;if(a.b$===null)return (-1);e=Ht(d,a.bg);Ep(d,a.bg,b);f=a.b$.r;g=0;while(true){if(g>=f){Ep(d,a.bg,e);return (-1);}h=(BU(a.b$,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AYb(a,b){a.fH.f=b;}
function AVL(a){return C(545);}
function A6L(a,b){var c;a:{c=a.b$;if(c!==null){c=Ci(c);while(true){if(!Ck(c))break a;if(!(Cl(c)).cp(b))continue;else return 1;}}}return 0;}
function AYF(a,b){return Kc(b,a.bg)>=0&&Ht(b,a.bg)==Kc(b,a.bg)?0:1;}
function ASZ(a){var b,c,d,e;a.c1=1;b=a.fH;if(b!==null&&!b.c1)LO(b);a:{b=a.b$;if(b!==null){c=b.r;d=0;while(true){if(d>=c)break a;b=BU(a.b$,d);e=b.hJ();if(e===null)e=b;else{b.c1=1;Fs(a.b$,d);AOS(a.b$,d,e);}if(!e.c1)e.fD();d=d+1|0;}}}if(a.f!==null)LO(a);}
var LG=H(Ce);
function AXZ(a,b,c,d){var e,f,g,h;e=D6(d,a.bg);B5(d,a.bg,b);f=a.b$.r;g=0;while(true){if(g>=f){B5(d,a.bg,e);return (-1);}h=(BU(a.b$,g)).d(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AWr(a){return C(546);}
function A85(a,b){return !D6(b,a.bg)?0:1;}
var ED=H(LG);
function A4l(a,b,c,d){var e,f,g;e=D6(d,a.bg);B5(d,a.bg,b);f=a.b$.r;g=0;while(g<f){if((BU(a.b$,g)).d(b,c,d)>=0)return a.f.d(a.fH.Ao,c,d);g=g+1|0;}B5(d,a.bg,e);return (-1);}
function A8S(a,b){a.f=b;}
function ARO(a){return C(546);}
var Z7=H(ED);
function AX_(a,b,c,d){var e,f;e=a.b$.r;f=0;while(f<e){if((BU(a.b$,f)).d(b,c,d)>=0)return a.f.d(b,c,d);f=f+1|0;}return (-1);}
function A0n(a,b){return 0;}
function A_E(a){return C(547);}
var AHs=H(ED);
function ASr(a,b,c,d){var e,f;e=a.b$.r;f=0;while(true){if(f>=e)return a.f.d(b,c,d);if((BU(a.b$,f)).d(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A$j(a,b){return 0;}
function AUD(a){return C(548);}
var AD0=H(ED);
function ASX(a,b,c,d){var e,f,g,h;e=a.b$.r;f=d.l5?0:d.dQ;a:{g=a.f.d(b,c,d);if(g>=0){B5(d,a.bg,b);h=0;while(true){if(h>=e)break a;if((BU(a.b$,h)).c$(f,b,c,d)>=0){B5(d,a.bg,(-1));return g;}h=h+1|0;}}}return (-1);}
function Bax(a,b){return 0;}
function AXM(a){return C(549);}
var Wt=H(ED);
function A1$(a,b,c,d){var e,f;e=a.b$.r;B5(d,a.bg,b);f=0;while(true){if(f>=e)return a.f.d(b,c,d);if((BU(a.b$,f)).c$(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A9g(a,b){return 0;}
function ASC(a){return C(550);}
function IT(){Ce.call(this);this.d3=null;}
function BcO(a,b){var c=new IT();AJ1(c,a,b);return c;}
function AJ1(a,b,c){Cc(a);a.d3=b;a.fH=c;a.bg=c.e_;}
function ARE(a,b,c,d){var e,f;e=Ht(d,a.bg);Ep(d,a.bg,b);f=a.d3.d(b,c,d);if(f>=0)return f;Ep(d,a.bg,e);return (-1);}
function AWx(a,b,c,d){var e;e=a.d3.cS(b,c,d);if(e>=0)Ep(d,a.bg,e);return e;}
function A9x(a,b,c,d,e){var f;f=a.d3.c$(b,c,d,e);if(f>=0)Ep(e,a.bg,f);return f;}
function A6I(a,b){return a.d3.cp(b);}
function A8f(a){var b;b=new Rm;AJ1(b,a.d3,a.fH);a.f=b;return b;}
function A01(a){var b;a.c1=1;b=a.fH;if(b!==null&&!b.c1)LO(b);b=a.d3;if(b!==null&&!b.c1){b=b.hJ();if(b!==null){a.d3.c1=1;a.d3=b;}a.d3.fD();}}
function Yn(){B.call(this);this.E_=null;}
function A2O(a,b){var c;b=b;c=a.E_;By(c.bS,(Cz(c.gV,b)).bf);}
function SF(){B.call(this);this.sM=null;}
function A7h(a,b){b=b;AE4(a.sM,b);}
var O$=H(E7);
var XQ=H(O$);
var PU=H(EI);
var XN=H(PU);
var Qh=H(E5);
function A4i(a){var b;b=new Ed;X(b);M(b);}
function AW5(a,b){var c;c=new Ed;X(c);M(c);}
function AVU(a,b){b=new Ed;X(b);M(b);}
var XO=H(Qh);
function AW$(a,b){var c;c=new BN;X(c);M(c);}
function AWc(a){return 0;}
function ATO(a){return Bg3;}
function ARZ(a){return 1;}
var XL=H();
function ARI(a){return 0;}
function A8g(a){var b;b=new Oa;X(b);M(b);}
function AZj(a){var b;b=new CW;X(b);M(b);}
var ACr=H(0);
var XM=H();
var ZM=H();
var H6=H();
function Bc(){var a=this;H6.call(a);a.bu=0;a.c0=0;a.X=null;a.nV=null;a.ot=null;a.Z=0;}
var Bha=null;function SC(){SC=Bn(Bc);ATi();}
function BF(a){var b;SC();b=new AH8;b.L=BI(64);a.X=b;}
function A3a(a){return null;}
function A2J(a){return a.X;}
function APk(a){var b,c,d,e,f;if(!a.c0)b=Jn(a.X,0)>=2048?0:1;else{a:{c=a.X;b=0;d=c.bK;if(b<d){e=c.L.data;f=(e[0]^(-1))>>>0|0;if(f)b=H4(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+H4(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A5G(a){return a.Z;}
function A98(a){return a;}
function AJq(a){var b,c;if(a.ot===null){b=a.gO();c=new Yw;c.KN=a;c.AD=b;BF(c);a.ot=c;Fu(c,a.c0);}return a.ot;}
function KE(a){var b,c;if(a.nV===null){b=a.gO();c=new Yt;c.Ib=a;c.E4=b;c.yJ=a;BF(c);a.nV=c;Fu(c,a.bu);a.nV.Z=a.Z;}return a.nV;}
function A_D(a){return 0;}
function Fu(a,b){var c;c=a.bu;if(c^b){a.bu=c?0:1;a.c0=a.c0?0:1;}if(!a.Z)a.Z=1;return a;}
function AUe(a){return a.bu;}
function O_(b,c){SC();return b.o(c);}
function Lb(b,c){var d,e;SC();if(b.eK()!==null&&c.eK()!==null){b=b.eK();c=c.eK();d=Bh(b.L.data.length,c.L.data.length);e=0;a:{while(e<d){if(b.L.data[e]&c.L.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Vk(b,c){var d,e,f;SC();d=0;while(true){AY7();e=Bhb.data;if(d>=e.length){f=new Oo;Bd(f,C(20));f.IX=C(20);f.KQ=b;M(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AP6(e[1],c);}
function ATi(){var b;b=new Ih;AY7();Bha=b;}
function AJU(){var a=this;Bc.call(a);a.rP=0;a.s_=0;a.jg=0;a.pd=0;a.fj=0;a.hH=0;a.S=null;a.b4=null;}
function D7(){var a=new AJU();A1B(a);return a;}
function A$T(a,b){var c=new AJU();AS7(c,a,b);return c;}
function A1B(a){BF(a);a.S=BaA();}
function AS7(a,b,c){BF(a);a.S=BaA();a.rP=b;a.s_=c;}
function CZ(a,b){a:{if(a.rP){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.fj){QH(a.S,KH(b&65535));break a;}Nr(a.S,KH(b&65535));break a;}if(a.s_&&b>128){a.jg=1;b=HY(GY(b));}}}if(!(!VO(b)&&!SJ(b))){if(a.pd)QH(a.X,b-55296|0);else Nr(a.X,b-55296|0);}if(a.fj)QH(a.S,b);else Nr(a.S,b);if(!a.Z&&NX(b))a.Z=1;return a;}
function AQ0(a,b){var c,d,e;if(!a.Z&&b.Z)a.Z=1;if(a.pd){if(!b.c0)Hc(a.X,b.gO());else DM(a.X,b.gO());}else if(!b.c0)HA(a.X,b.gO());else{Hn(a.X,b.gO());DM(a.X,b.gO());a.c0=a.c0?0:1;a.pd=1;}if(!a.hH&&b.eK()!==null){if(a.fj){if(!b.bu)Hc(a.S,b.eK());else DM(a.S,b.eK());}else if(!b.bu)HA(a.S,b.eK());else{Hn(a.S,b.eK());DM(a.S,b.eK());a.bu=a.bu?0:1;a.fj=1;}}else{c=a.bu;d=a.b4;if(d!==null){if(!c){e=new ABN;e.Js=a;e.FU=c;e.yx=d;e.yo=b;BF(e);a.b4=e;}else{e=new ABO;e.K5=a;e.v8=c;e.CL=d;e.Cg=b;BF(e);a.b4=e;}}else{if(c&&
!a.fj&&Qu(a.S)){d=new ABK;d.J9=a;d.CR=b;BF(d);a.b4=d;}else if(!c){d=new ABI;d.rj=a;d.qI=c;d.Bk=b;BF(d);a.b4=d;}else{d=new ABJ;d.pN=a;d.oj=c;d.ys=b;BF(d);a.b4=d;}a.hH=1;}}return a;}
function Cg(a,b,c){var d,e,f,g,h;if(b>c){d=new Bv;X(d);M(d);}a:{b:{if(!a.rP){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CZ(a,b);b=b+1|0;}}if(!a.fj)JU(a.S,b,c+1|0);else{d=a.S;c=c+1|0;if(b>c){d=new BN;X(d);M(d);}e=d.bK;if(b<e){f=Bh(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.L.data;h[g]=h[g]&(K8(d,b)|JM(d,f));}else{h=d.L.data;h[g]=h[g]&K8(d,b);e=g+1|0;while(e<c){d.L.data[e]=0;e=e+1|0;}if(f&31){h=d.L.data;h[c]=h[c]&JM(d,f);}}Ij(d);}}}}return a;}
function ANf(a,b){var c,d,e;if(!a.Z&&b.Z)a.Z=1;if(b.jg)a.jg=1;c=a.c0;if(!(c^b.c0)){if(!c)HA(a.X,b.X);else DM(a.X,b.X);}else if(c)Hc(a.X,b.X);else{Hn(a.X,b.X);DM(a.X,b.X);a.c0=1;}if(!a.hH&&Dk(b)!==null){c=a.bu;if(!(c^b.bu)){if(!c)HA(a.S,Dk(b));else DM(a.S,Dk(b));}else if(c)Hc(a.S,Dk(b));else{Hn(a.S,Dk(b));DM(a.S,Dk(b));a.bu=1;}}else{c=a.bu;d=a.b4;if(d!==null){if(!c){e=new Su;e.GN=a;e.xR=c;e.Fg=d;e.yS=b;BF(e);a.b4=e;}else{e=new SP;e.Hb=a;e.FI=c;e.sP=d;e.tb=b;BF(e);a.b4=e;}}else{if(!a.fj&&Qu(a.S)){if(!c){d=new ABL;d.K$
=a;d.uY=b;BF(d);a.b4=d;}else{d=new ABM;d.JB=a;d.Fx=b;BF(d);a.b4=d;}}else if(!c){d=new ABP;d.xW=a;d.wi=b;d.CP=c;BF(d);a.b4=d;}else{d=new ABQ;d.wM=a;d.wX=b;d.DZ=c;BF(d);a.b4=d;}a.hH=1;}}}
function YS(a,b){var c,d,e;if(!a.Z&&b.Z)a.Z=1;if(b.jg)a.jg=1;c=a.c0;if(!(c^b.c0)){if(!c)DM(a.X,b.X);else HA(a.X,b.X);}else if(!c)Hc(a.X,b.X);else{Hn(a.X,b.X);DM(a.X,b.X);a.c0=0;}if(!a.hH&&Dk(b)!==null){c=a.bu;if(!(c^b.bu)){if(!c)DM(a.S,Dk(b));else HA(a.S,Dk(b));}else if(!c)Hc(a.S,Dk(b));else{Hn(a.S,Dk(b));DM(a.S,Dk(b));a.bu=0;}}else{c=a.bu;d=a.b4;if(d!==null){if(!c){e=new Sw;e.Jq=a;e.EJ=c;e.AC=d;e.v6=b;BF(e);a.b4=e;}else{e=new Sx;e.JG=a;e.D_=c;e.z3=d;e.ED=b;BF(e);a.b4=e;}}else{if(!a.fj&&Qu(a.S)){if(!c){d=new Ss;d.Hf
=a;d.BV=b;BF(d);a.b4=d;}else{d=new St;d.K3=a;d.uI=b;BF(d);a.b4=d;}}else if(!c){d=new Sy;d.Gx=a;d.FR=b;d.wQ=c;BF(d);a.b4=d;}else{d=new Sr;d.wP=a;d.Ej=b;d.C2=c;BF(d);a.b4=d;}a.hH=1;}}}
function Dv(a,b){var c;c=a.b4;if(c!==null)return a.bu^c.o(b);return a.bu^En(a.S,b);}
function Dk(a){if(!a.hH)return a.S;return null;}
function A4S(a){return a.X;}
function AZ_(a){var b,c;if(a.b4!==null)return a;b=Dk(a);c=new Sv;c.I9=a;c.m4=b;BF(c);return Fu(c,a.bu);}
function A7w(a){var b,c,d;b=new I;K(b);c=Jn(a.S,0);while(c>=0){Lc(b,Gu(c));Bl(b,124);c=Jn(a.S,c+1|0);}d=b.B;if(d>0)Yj(b,d-1|0);return J(b);}
function AUh(a){return a.jg;}
function Oo(){var a=this;Bx.call(a);a.IX=null;a.KQ=null;}
function EV(){BY.call(this);this.V=null;}
function DP(a,b,c,d){Ps(a,c);a.V=b;a.ld=d;}
function Bam(a){return a.V;}
function AZg(a,b){return !a.V.cp(b)&&!a.f.cp(b)?0:1;}
function A$U(a,b){return 1;}
function AWX(a){var b;a.c1=1;b=a.f;if(b!==null&&!b.c1){b=b.hJ();if(b!==null){a.f.c1=1;a.f=b;}a.f.fD();}b=a.V;if(b!==null){if(!b.c1){b=b.hJ();if(b!==null){a.V.c1=1;a.V=b;}a.V.fD();}else if(b instanceof IT&&b.fH.q2)a.V=b.f;}}
function Dx(){EV.call(this);this.bp=null;}
function BbC(a,b,c){var d=new Dx();F$(d,a,b,c);return d;}
function F$(a,b,c,d){DP(a,b,c,d);a.bp=b;}
function A1_(a,b,c,d){var e,f;e=0;a:{while((b+a.bp.cA()|0)<=d.E){f=a.bp.bW(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.d(b,c,d);if(f>=0)break;b=b-a.bp.cA()|0;e=e+(-1)|0;}return f;}
function A3N(a){return C(551);}
function GP(){Dx.call(this);this.ke=null;}
function Bcn(a,b,c,d){var e=new GP();Vr(e,a,b,c,d);return e;}
function Vr(a,b,c,d,e){F$(a,c,d,e);a.ke=b;}
function A2W(a,b,c,d){var e,f,g,h,i;e=a.ke;f=e.gF;g=e.gD;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bp.cA()|0)>d.E)break a;i=a.bp.bW(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.d(b,c,d);if(i>=0)break;b=b-a.bp.cA()|0;h=h+(-1)|0;}return i;}if((b+a.bp.cA()|0)>d.E){d.eB=1;return (-1);}i=a.bp.bW(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function A3c(a){return AFD(a.ke);}
var Dg=H(EV);
function A2n(a,b,c,d){var e;if(!a.V.R(d))return a.f.d(b,c,d);e=a.V.d(b,c,d);if(e>=0)return e;return a.f.d(b,c,d);}
function A50(a){return C(552);}
var FY=H(Dx);
function A61(a,b,c,d){var e;e=a.V.d(b,c,d);if(e<0)e=a.f.d(b,c,d);return e;}
function A1P(a,b){a.f=b;a.V.bb(b);}
var Yx=H(Dx);
function Baa(a,b,c,d){while((b+a.bp.cA()|0)<=d.E&&a.bp.bW(b,c)>0){b=b+a.bp.cA()|0;}return a.f.d(b,c,d);}
function AXo(a,b,c,d){var e,f,g;e=a.f.cS(b,c,d);if(e<0)return (-1);f=e-a.bp.cA()|0;while(f>=b&&a.bp.bW(f,c)>0){g=f-a.bp.cA()|0;e=f;f=g;}return e;}
var Rt=H(0);
var Vj=H();
function Bk(){var a=this;B.call(a);a.pP=null;a.oY=null;}
function AP6(a,b){if(!b&&a.pP===null)a.pP=a.O();else if(b&&a.oY===null)a.oY=Fu(a.O(),1);if(b)return a.oY;return a.pP;}
var DQ=H(Bv);
function AAo(){var a=this;H6.call(a);a.gF=0;a.gD=0;}
function AFD(a){var b,c,d,e,f;b=a.gF;c=a.gD;d=c!=2147483647?Hs(c):C(20);e=new I;K(e);Bl(e,123);f=R(e,b);Bl(f,44);Bl(G(f,d),125);return J(e);}
var ABw=H(BY);
function AVW(a,b,c,d){return b;}
function A7_(a){return C(553);}
function A8d(a,b){return 0;}
function AH8(){var a=this;B.call(a);a.L=null;a.bK=0;}
function BaA(){var a=new AH8();A3G(a);return a;}
function A3G(a){a.L=BI(0);}
function Nr(a,b){var c,d;c=b/32|0;if(b>=a.bK){Ld(a,c+1|0);a.bK=b+1|0;}d=a.L.data;d[c]=d[c]|1<<(b%32|0);}
function JU(a,b,c){var d,e,f,g,h;d=BS(b,c);if(d>0){e=new BN;X(e);M(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bK){Ld(a,f+1|0);a.bK=c;}if(d==f){g=a.L.data;g[d]=g[d]|JM(a,b)&K8(a,c);}else{g=a.L.data;g[d]=g[d]|JM(a,b);h=d+1|0;while(h<f){a.L.data[h]=(-1);h=h+1|0;}if(c&31){g=a.L.data;g[f]=g[f]|K8(a,c);}}}
function JM(a,b){return (-1)<<(b%32|0);}
function K8(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function QH(a,b){var c,d,e,f;c=b/32|0;d=a.L.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bK-1|0))Ij(a);}}
function En(a,b){var c,d;c=b/32|0;d=a.L.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Jn(a,b){var c,d,e,f;c=a.bK;if(b>=c)return (-1);d=b/32|0;e=a.L.data;f=e[d]>>>(b%32|0)|0;if(f)return H4(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+H4(e[f])|0;f=f+1|0;}return (-1);}
function Ld(a,b){var c;c=a.L.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.L=Kp(a.L,c);}
function Ij(a){var b,c,d;b=(a.bK+31|0)/32|0;a.bK=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=AA8(a.L.data[c]);if(d<32)break;c=c+(-1)|0;a.bK=a.bK-32|0;}a.bK=a.bK-d|0;}}
function DM(a,b){var c,d,e,f;c=Bh(a.L.data.length,b.L.data.length);d=0;while(d<c){e=a.L.data;e[d]=e[d]&b.L.data[d];d=d+1|0;}while(true){f=a.L.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bK=Bh(a.bK,b.bK);Ij(a);}
function Hc(a,b){var c,d,e;c=Bh(a.L.data.length,b.L.data.length);d=0;while(d<c){e=a.L.data;e[d]=e[d]&(b.L.data[d]^(-1));d=d+1|0;}Ij(a);}
function HA(a,b){var c,d,e;c=Be(a.bK,b.bK);a.bK=c;Ld(a,(c+31|0)/32|0);c=Bh(a.L.data.length,b.L.data.length);d=0;while(d<c){e=a.L.data;e[d]=e[d]|b.L.data[d];d=d+1|0;}}
function Hn(a,b){var c,d,e;c=Be(a.bK,b.bK);a.bK=c;Ld(a,(c+31|0)/32|0);c=Bh(a.L.data.length,b.L.data.length);d=0;while(d<c){e=a.L.data;e[d]=e[d]^b.L.data[d];d=d+1|0;}Ij(a);}
function Qu(a){return a.bK?0:1;}
function Rb(){var a=this;Ce.call(a);a.oX=null;a.z2=0;}
function A8k(a){var b,c,d;b=!a.z2?C(67):C(554);c=a.oX.J();d=new I;K(d);G(G(G(d,C(555)),b),c);return J(d);}
function T6(){var a=this;Ce.call(a);a.ms=null;a.nH=null;}
function ALy(a,b){var c=new T6();AMR(c,a,b);return c;}
function AMR(a,b,c){Cc(a);a.ms=b;a.nH=c;}
function ASb(a,b,c,d){var e,f,g,h,i;e=a.ms.d(b,c,d);if(e<0)a:{f=a.nH;g=d.dQ;e=d.E;h=b+1|0;e=BS(h,e);if(e>0){d.eB=1;e=(-1);}else{i=P(c,b);if(!f.oX.o(i))e=(-1);else{if(C4(i)){if(e<0&&Do(P(c,h))){e=(-1);break a;}}else if(Do(i)&&b>g&&C4(P(c,b-1|0))){e=(-1);break a;}e=f.f.d(h,c,d);}}}if(e>=0)return e;return (-1);}
function A76(a,b){a.f=b;a.nH.f=b;a.ms.bb(b);}
function A8v(a){var b,c,d;b=a.ms;c=a.nH;d=new I;K(d);G(G(G(G(d,C(556)),b),C(557)),c);return J(d);}
function ASG(a,b){return 1;}
function ASt(a,b){return 1;}
function Et(){var a=this;Ce.call(a);a.d8=null;a.pn=0;}
function A6s(a){var b=new Et();AGo(b,a);return b;}
function AGo(a,b){Cc(a);a.d8=b.nA();a.pn=b.bu;}
function A4M(a,b,c,d){var e,f,g,h;e=d.E;if(b<e){f=b+1|0;g=P(c,b);if(a.o(g)){h=a.f.d(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Kx(g,f)&&a.o(E0(g,f)))return a.f.d(b,c,d);}}return (-1);}
function A_w(a){var b,c,d;b=!a.pn?C(67):C(554);c=a.d8.J();d=new I;K(d);G(G(G(d,C(555)),b),c);return J(d);}
function AUs(a,b){return a.d8.o(b);}
function AR8(a,b){if(b instanceof EJ)return O_(a.d8,b.ic);if(b instanceof Fp)return O_(a.d8,b.d6);if(b instanceof Et)return Lb(a.d8,b.d8);if(!(b instanceof Fl))return 1;return Lb(a.d8,b.gw);}
function AVP(a){return a.d8;}
function A91(a,b){a.f=b;}
function AT9(a,b){return 1;}
var Ol=H(Et);
function AVB(a,b){return a.d8.o(HY(GY(b)));}
function A08(a){var b,c,d;b=!a.pn?C(67):C(554);c=a.d8.J();d=new I;K(d);G(G(G(d,C(558)),b),c);return J(d);}
function AJN(){var a=this;Cj.call(a);a.rq=null;a.u_=0;}
function AUY(a){var b=new AJN();AXB(b,a);return b;}
function AXB(a,b){Eq(a);a.rq=b.nA();a.u_=b.bu;}
function A6w(a,b,c){return !a.rq.o(GH(Fz(P(c,b))))?(-1):1;}
function A3g(a){var b,c,d;b=!a.u_?C(67):C(554);c=a.rq.J();d=new I;K(d);G(G(G(d,C(558)),b),c);return J(d);}
function Fl(){var a=this;Cj.call(a);a.gw=null;a.w0=0;}
function AZ4(a){var b=new Fl();AYu(b,a);return b;}
function AYu(a,b){Eq(a);a.gw=b.nA();a.w0=b.bu;}
function ZV(a,b,c){return !a.gw.o(P(c,b))?(-1):1;}
function AV0(a){var b,c,d;b=!a.w0?C(67):C(554);c=a.gw.J();d=new I;K(d);G(G(G(d,C(555)),b),c);return J(d);}
function AYd(a,b){if(b instanceof Fp)return O_(a.gw,b.d6);if(b instanceof Fl)return Lb(a.gw,b.gw);if(!(b instanceof Et)){if(!(b instanceof EJ))return 1;return 0;}return Lb(a.gw,b.d8);}
function ABV(){var a=this;Ce.call(a);a.kv=null;a.sc=null;a.mn=0;}
function A$H(a,b){var c=new ABV();A2o(c,a,b);return c;}
function A2o(a,b,c){Cc(a);a.kv=b;a.mn=c;}
function AWD(a,b){a.f=b;}
function MC(a){if(a.sc===null)a.sc=E2(a.kv);return a.sc;}
function AZa(a){var b,c;b=MC(a);c=new I;K(c);G(G(c,C(559)),b);return J(c);}
function ARk(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.E;f=BI(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DD([k,l]):DD([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.mn;if(b!=n)return (-1);while(true){if(l>=n)return a.f.d(i,c,d);if(m[l]!=a.kv.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.mn==3){k=f[0];m=a.kv.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.d(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.mn==2){b=f[0];m=a.kv.data;if(b==m[0]&&f[1]==m[1]){b=a.f.d(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function A3l(a,b){return b instanceof ABV&&!Bj(MC(b),MC(a))?0:1;}
function A0d(a,b){return 1;}
function Fp(){Cj.call(this);this.d6=0;}
function AJ5(a){var b=new Fp();AYy(b,a);return b;}
function AYy(a,b){Eq(a);a.d6=b;}
function A6l(a){return 1;}
function AUU(a,b,c){return a.d6!=P(c,b)?(-1):1;}
function ATU(a,b,c,d){var e,f,g;if(!(c instanceof BE))return JH(a,b,c,d);e=d.E;while(true){if(b>=e)return (-1);f=GA(c,a.d6,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.d(b,c,d)>=0)break;}return f;}
function AVR(a,b,c,d,e){var f;if(!(d instanceof BE))return JQ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Iw(d,a.d6,c);if(f<0)break a;if(f<b)break a;if(a.f.d(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A0q(a){var b,c;b=a.d6;c=new I;K(c);Bl(c,b);return J(c);}
function AZ5(a,b){if(b instanceof Fp)return b.d6!=a.d6?0:1;if(!(b instanceof Fl)){if(b instanceof Et)return b.o(a.d6);if(!(b instanceof EJ))return 1;return 0;}return ZV(b,0,Y3(a.d6))<=0?0:1;}
function AME(){Cj.call(this);this.qG=0;}
function A8X(a){var b=new AME();A7p(b,a);return b;}
function A7p(a,b){Eq(a);a.qG=GH(Fz(b));}
function A1Z(a,b,c){return a.qG!=GH(Fz(P(c,b)))?(-1):1;}
function A75(a){var b,c;b=a.qG;c=new I;K(c);Bl(G(c,C(560)),b);return J(c);}
function AI8(){var a=this;Cj.call(a);a.ql=0;a.AB=0;}
function A3L(a){var b=new AI8();AY4(b,a);return b;}
function AY4(a,b){Eq(a);a.ql=b;a.AB=KH(b);}
function ARx(a,b,c){return a.ql!=P(c,b)&&a.AB!=P(c,b)?(-1):1;}
function AU8(a){var b,c;b=a.ql;c=new I;K(c);Bl(G(c,C(561)),b);return J(c);}
function GT(){var a=this;Ce.call(a);a.k8=0;a.oO=null;a.oh=null;a.oa=0;}
function Bdg(a,b){var c=new GT();R5(c,a,b);return c;}
function R5(a,b,c){Cc(a);a.k8=1;a.oh=b;a.oa=c;}
function A_L(a,b){a.f=b;}
function AXY(a,b,c,d){var e,f,g,h,i,j,k,l;e=BI(4);f=d.E;if(b>=f)return (-1);g=MP(a,b,c,f);h=b+a.k8|0;i=AQz(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Cm(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=MP(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AQz(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.k8|0;if(h>=f){b=k;break a;}g=MP(a,h,c,f);b=k;}}}if(b!=a.oa)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.d(h,c,d);if(i[g]!=a.oh.data[g])break;g=g+1|0;}return (-1);}
function NT(a){var b,c;if(a.oO===null){b=new I;K(b);c=0;while(c<a.oa){Lc(b,Gu(a.oh.data[c]));c=c+1|0;}a.oO=J(b);}return a.oO;}
function A7Y(a){var b,c;b=NT(a);c=new I;K(c);G(G(c,C(562)),b);return J(c);}
function MP(a,b,c,d){var e,f,g;a.k8=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Kx(e,f)){g=B0(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&C4(g[0])&&Do(g[1])?E0(g[0],g[1]):g[0];a.k8=2;}}return e;}
function AVX(a,b){return b instanceof GT&&!Bj(NT(b),NT(a))?0:1;}
function A8W(a,b){return 1;}
var Y_=H(GT);
var AFX=H(GT);
var ZN=H(Dg);
function A33(a,b,c,d){var e;while(true){e=a.V.d(b,c,d);if(e<=0)break;b=e;}return a.f.d(b,c,d);}
var ACF=H(Dg);
function A7m(a,b,c,d){var e;e=a.V.d(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.V.d(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.d(b,c,d);}
var HD=H(Dg);
function A9Y(a,b,c,d){var e;if(!a.V.R(d))return a.f.d(b,c,d);e=a.V.d(b,c,d);if(e>=0)return e;return a.f.d(b,c,d);}
function A$8(a,b){a.f=b;a.V.bb(b);}
var S6=H(HD);
function AVN(a,b,c,d){var e;e=a.V.d(b,c,d);if(e<=0)e=b;return a.f.d(e,c,d);}
function A7I(a,b){a.f=b;}
function Hg(){var a=this;Dg.call(a);a.hc=null;a.eC=0;}
function Bhc(a,b,c,d,e){var f=new Hg();Ok(f,a,b,c,d,e);return f;}
function Ok(a,b,c,d,e,f){DP(a,c,d,e);a.hc=b;a.eC=f;}
function Bau(a,b,c,d){var e,f;e=AAk(d,a.eC);if(!a.V.R(d))return a.f.d(b,c,d);if(e>=a.hc.gD)return a.f.d(b,c,d);f=a.eC;e=e+1|0;FC(d,f,e);f=a.V.d(b,c,d);if(f>=0){FC(d,a.eC,0);return f;}f=a.eC;e=e+(-1)|0;FC(d,f,e);if(e>=a.hc.gF)return a.f.d(b,c,d);FC(d,a.eC,0);return (-1);}
function A0B(a){return AFD(a.hc);}
var Rq=H(Hg);
function AVe(a,b,c,d){var e,f,g;e=0;f=a.hc.gD;a:{while(true){g=a.V.d(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.hc.gF)return (-1);return a.f.d(b,c,d);}
var UY=H(Dg);
function A09(a,b,c,d){var e;if(!a.V.R(d))return a.f.d(b,c,d);e=a.f.d(b,c,d);if(e>=0)return e;return a.V.d(b,c,d);}
var ADs=H(HD);
function ASH(a,b,c,d){var e;if(!a.V.R(d))return a.f.d(b,c,d);e=a.f.d(b,c,d);if(e<0)e=a.V.d(b,c,d);return e;}
var Xj=H(Hg);
function A2B(a,b,c,d){var e,f,g;e=AAk(d,a.eC);if(!a.V.R(d))return a.f.d(b,c,d);f=a.hc;if(e>=f.gD){FC(d,a.eC,0);return a.f.d(b,c,d);}if(e<f.gF){FC(d,a.eC,e+1|0);g=a.V.d(b,c,d);}else{g=a.f.d(b,c,d);if(g>=0){FC(d,a.eC,0);return g;}FC(d,a.eC,e+1|0);g=a.V.d(b,c,d);}return g;}
var UZ=H(EV);
function Bai(a,b,c,d){var e;e=d.E;if(e>b)return a.f.c$(b,e,c,d);return a.f.d(b,c,d);}
function AZK(a,b,c,d){var e;e=d.E;if(a.f.c$(b,e,c,d)>=0)return b;return (-1);}
function A8B(a){return C(563);}
function ABD(){EV.call(this);this.oT=null;}
function AYe(a,b,c,d){var e,f;e=d.E;f=AGD(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.c$(b,e,c,d);return a.f.d(b,c,d);}
function ARn(a,b,c,d){var e,f,g,h;e=d.E;f=a.f.cS(b,c,d);if(f<0)return (-1);g=AGD(a,f,e,c);if(g>=0)e=g;g=Be(f,a.f.c$(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.oT.j$(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AGD(a,b,c,d){while(true){if(b>=c)return (-1);if(a.oT.j$(P(d,b)))break;b=b+1|0;}return b;}
function A9q(a){return C(564);}
var Gw=H();
var Bhd=null;var Bhe=null;function ACn(b){var c;if(!(b&1)){c=Bhe;if(c!==null)return c;c=new AGX;Bhe=c;return c;}c=Bhd;if(c!==null)return c;c=new AGW;Bhd=c;return c;}
var AI4=H(Dx);
function ARY(a,b,c,d){var e;a:{while(true){if((b+a.bp.cA()|0)>d.E)break a;e=a.bp.bW(b,c);if(e<1)break;b=b+e|0;}}return a.f.d(b,c,d);}
var Yr=H(FY);
function AXa(a,b,c,d){var e;if((b+a.bp.cA()|0)<=d.E){e=a.bp.bW(b,c);if(e>=1)b=b+e|0;}return a.f.d(b,c,d);}
var AB9=H(GP);
function A9z(a,b,c,d){var e,f,g,h,i;e=a.ke;f=e.gF;g=e.gD;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bp.cA()|0)>d.E)break a;i=a.bp.bW(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.d(b,c,d);}if((b+a.bp.cA()|0)>d.E){d.eB=1;return (-1);}i=a.bp.bW(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var ADr=H(Dx);
function AYa(a,b,c,d){var e;while(true){e=a.f.d(b,c,d);if(e>=0)break;if((b+a.bp.cA()|0)<=d.E){e=a.bp.bW(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AF9=H(FY);
function AR7(a,b,c,d){var e;e=a.f.d(b,c,d);if(e>=0)return e;return a.V.d(b,c,d);}
var UI=H(GP);
function A9P(a,b,c,d){var e,f,g,h,i,j;e=a.ke;f=e.gF;g=e.gD;h=0;while(true){if(h>=f){a:{while(true){i=a.f.d(b,c,d);if(i>=0)break;if((b+a.bp.cA()|0)<=d.E){i=a.bp.bW(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bp.cA()|0)>d.E){d.eB=1;return (-1);}j=a.bp.bW(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var MM=H(BY);
function A6K(a,b,c,d){if(b&&!(d.hI&&b==d.dQ))return (-1);return a.f.d(b,c,d);}
function A58(a,b){return 0;}
function AXc(a){return C(565);}
function AKa(){BY.call(this);this.yz=0;}
function A$s(a){var b=new AKa();AVF(b,a);return b;}
function AVF(a,b){Cc(a);a.yz=b;}
function A2$(a,b,c,d){var e,f,g;e=b<d.E?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.l5?0:d.dQ;return (e!=32&&!ADv(a,e,b,g,c)?0:1)^(f!=32&&!ADv(a,f,b-1|0,g,c)?0:1)^a.yz?(-1):a.f.d(b,c,d);}
function A3i(a,b){return 0;}
function Bas(a){return C(566);}
function ADv(a,b,c,d,e){var f;if(!L$(b)&&b!=95){a:{if(CX(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(L$(f))return 0;if(CX(f)!=6)return 1;}}return 1;}return 0;}
var ABy=H(BY);
function AVE(a,b,c,d){if(b!=d.kh)return (-1);return a.f.d(b,c,d);}
function A1E(a,b){return 0;}
function A2Y(a){return C(567);}
function Y6(){BY.call(this);this.iu=0;}
function BbM(a){var b=new Y6();AQq(b,a);return b;}
function AQq(a,b){Cc(a);a.iu=b;}
function A8F(a,b,c,d){var e,f,g;e=!d.hI?N(c):d.E;if(b>=e){B5(d,a.iu,0);return a.f.d(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){B5(d,a.iu,0);return a.f.d(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B5(d,a.iu,0);return a.f.d(b,c,d);}
function A3U(a,b){var c;c=!D6(b,a.iu)?0:1;B5(b,a.iu,(-1));return c;}
function A63(a){return C(568);}
var AHP=H(BY);
function A73(a,b,c,d){if(b<(d.l5?N(c):d.E))return (-1);d.eB=1;d.KE=1;return a.f.d(b,c,d);}
function A1Y(a,b){return 0;}
function AUI(a){return C(569);}
function AAF(){BY.call(this);this.C7=null;}
function A3P(a,b,c,d){a:{if(b!=d.E){if(!b)break a;if(d.hI&&b==d.dQ)break a;if(a.C7.Ec(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.f.d(b,c,d);}
function AUA(a,b){return 0;}
function A2P(a){return C(570);}
var AMr=H(Ce);
function BbU(){var a=new AMr();A7T(a);return a;}
function A7T(a){Cc(a);}
function A1a(a,b,c,d){var e,f,g,h;e=d.E;f=b+1|0;if(f>e){d.eB=1;return (-1);}g=P(c,b);if(C4(g)){h=b+2|0;if(h<=e&&Kx(g,P(c,f)))return a.f.d(h,c,d);}return a.f.d(f,c,d);}
function ATy(a){return C(571);}
function A3n(a,b){a.f=b;}
function A7Q(a){return (-2147483602);}
function A3m(a,b){return 1;}
function AJT(){Ce.call(this);this.pj=null;}
function BbI(a){var b=new AJT();AS1(b,a);return b;}
function AS1(a,b){Cc(a);a.pj=b;}
function A7Z(a,b,c,d){var e,f,g,h;e=d.E;f=b+1|0;if(f>e){d.eB=1;return (-1);}g=P(c,b);if(C4(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Kx(g,h))return a.pj.j$(E0(g,h))?(-1):a.f.d(b,c,d);}}return a.pj.j$(g)?(-1):a.f.d(f,c,d);}
function A32(a){return C(68);}
function A9p(a,b){a.f=b;}
function AQ8(a){return (-2147483602);}
function A1p(a,b){return 1;}
function AQx(){BY.call(this);this.k2=0;}
function Bbm(a){var b=new AQx();A5k(b,a);return b;}
function A5k(a,b){Cc(a);a.k2=b;}
function AVZ(a,b,c,d){var e;e=!d.hI?N(c):d.E;if(b>=e){B5(d,a.k2,0);return a.f.d(b,c,d);}if((e-b|0)==1&&P(c,b)==10){B5(d,a.k2,1);return a.f.d(b+1|0,c,d);}return (-1);}
function A5j(a,b){var c;c=!D6(b,a.k2)?0:1;B5(b,a.k2,(-1));return c;}
function AWj(a){return C(568);}
function APo(){BY.call(this);this.j0=0;}
function Bba(a){var b=new APo();A5H(b,a);return b;}
function A5H(a,b){Cc(a);a.j0=b;}
function AXQ(a,b,c,d){if((!d.hI?N(c)-b|0:d.E-b|0)<=0){B5(d,a.j0,0);return a.f.d(b,c,d);}if(P(c,b)!=10)return (-1);B5(d,a.j0,1);return a.f.d(b+1|0,c,d);}
function A5a(a,b){var c;c=!D6(b,a.j0)?0:1;B5(b,a.j0,(-1));return c;}
function ARM(a){return C(572);}
function ANe(){BY.call(this);this.hY=0;}
function BaN(a){var b=new ANe();Baw(b,a);return b;}
function Baw(a,b){Cc(a);a.hY=b;}
function A53(a,b,c,d){var e,f,g;e=!d.hI?N(c)-b|0:d.E-b|0;if(!e){B5(d,a.hY,0);return a.f.d(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B5(d,a.hY,0);return a.f.d(b,c,d);case 13:if(g!=10){B5(d,a.hY,0);return a.f.d(b,c,d);}B5(d,a.hY,0);return a.f.d(b,c,d);default:}return (-1);}
function AS5(a,b){var c;c=!D6(b,a.hY)?0:1;B5(b,a.hY,(-1));return c;}
function AUB(a){return C(573);}
function Jh(){var a=this;Ce.call(a);a.s5=0;a.iQ=0;}
function Bde(a,b){var c=new Jh();SI(c,a,b);return c;}
function SI(a,b,c){Cc(a);a.s5=b;a.iQ=c;}
function AR1(a,b,c,d){var e,f,g,h;e=HL(a,d);if(e!==null&&(b+N(e)|0)<=d.E){f=0;while(true){if(f>=N(e)){B5(d,a.iQ,N(e));return a.f.d(b+N(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&KH(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A8P(a,b){a.f=b;}
function HL(a,b){var c,d;c=a.s5;d=Ht(b,c);c=Kc(b,c);return (c|d|(c-d|0))>=0&&c<=N(b.po)?Cd(b.po,d,c):null;}
function A2u(a){var b,c;b=a.bg;c=new I;K(c);R(G(c,C(574)),b);return J(c);}
function AYW(a,b){var c;c=!D6(b,a.iQ)?0:1;B5(b,a.iQ,(-1));return c;}
var AQC=H(Jh);
function Bb$(a,b){var c=new AQC();A$X(c,a,b);return c;}
function A$X(a,b,c){SI(a,b,c);}
function AS9(a,b,c,d){var e,f;e=HL(a,d);if(e!==null&&(b+N(e)|0)<=d.E){f=!AGn(c,e,b)?(-1):N(e);if(f<0)return (-1);B5(d,a.iQ,f);return a.f.d(b+f|0,c,d);}return (-1);}
function A0l(a,b,c,d){var e,f;e=HL(a,d);f=d.dQ;if(e!==null&&(b+N(e)|0)<=f){while(true){if(b>f)return (-1);b=ACJ(c,e,b);if(b<0)return (-1);if(a.f.d(b+N(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ARN(a,b,c,d,e){var f,g;f=HL(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Tq(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.d(g+N(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A7e(a,b){return 1;}
function A$7(a){var b,c;b=a.bg;c=new I;K(c);R(G(c,C(575)),b);return J(c);}
function AOz(){Jh.call(this);this.GS=0;}
function Bbb(a,b){var c=new AOz();AUx(c,a,b);return c;}
function AUx(a,b,c){SI(a,b,c);}
function AWs(a,b,c,d){var e,f;e=HL(a,d);if(e!==null&&(b+N(e)|0)<=d.E){f=0;while(true){if(f>=N(e)){B5(d,a.iQ,N(e));return a.f.d(b+N(e)|0,c,d);}if(GH(Fz(P(e,f)))!=GH(Fz(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function A3j(a){var b,c;b=a.GS;c=new I;K(c);R(G(c,C(576)),b);return J(c);}
var Sg=H(HN);
function AUj(a,b,c,d,e){AAr(a,b,c,d,e);return a;}
function A3b(a,b,c,d){AIj(a,b,c,d);return a;}
function A3E(a,b){OG(a,b);}
function A$b(a,b,c){AIz(a,b,c);return a;}
function AEA(){var a=this;Cj.call(a);a.cP=null;a.rd=null;a.pw=null;}
function ATo(a,b,c){return !ML(a,c,b)?(-1):a.b9;}
function A28(a,b,c,d){var e,f,g;e=d.E;while(true){if(b>e)return (-1);f=P(a.cP,a.b9-1|0);a:{while(true){g=a.b9;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&ML(a,c,b))break;b=b+AFb(a.rd,g)|0;}}if(b<0)return (-1);if(a.f.d(b+a.b9|0,c,d)>=0)break;b=b+1|0;}return b;}
function A5n(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cP,0);g=(N(d)-c|0)-a.b9|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&ML(a,d,c))break;c=c-AFb(a.pw,g)|0;}}if(c<0)return (-1);if(a.f.d(c+a.b9|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AX6(a){var b,c;b=a.cP;c=new I;K(c);G(G(c,C(577)),b);return J(c);}
function AU1(a,b){var c;if(b instanceof Fp)return b.d6!=P(a.cP,0)?0:1;if(b instanceof Fl)return ZV(b,0,Cd(a.cP,0,1))<=0?0:1;if(!(b instanceof Et)){if(!(b instanceof EJ))return 1;return N(a.cP)>1&&b.ic==E0(P(a.cP,0),P(a.cP,1))?1:0;}a:{b:{b=b;if(!b.o(P(a.cP,0))){if(N(a.cP)<=1)break b;if(!b.o(E0(P(a.cP,0),P(a.cP,1))))break b;}c=1;break a;}c=0;}return c;}
function ML(a,b,c){var d;d=0;while(d<a.b9){if(P(b,d+c|0)!=P(a.cP,d))return 0;d=d+1|0;}return 1;}
function AI7(){Cj.call(this);this.k5=null;}
function Bdf(a){var b=new AI7();A$y(b,a);return b;}
function A$y(a,b){var c,d;Eq(a);c=new I;K(c);d=0;while(d<b.B){Bl(c,GH(Fz(Rk(b,d))));d=d+1|0;}a.k5=J(c);a.b9=c.B;}
function AWy(a,b,c){var d;d=0;while(true){if(d>=N(a.k5))return N(a.k5);if(P(a.k5,d)!=GH(Fz(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function AU9(a){var b,c;b=a.k5;c=new I;K(c);G(G(c,C(578)),b);return J(c);}
function Ru(){Cj.call(this);this.i8=null;}
function A9A(a,b,c){var d,e,f;d=0;while(true){if(d>=N(a.i8))return N(a.i8);e=P(a.i8,d);f=b+d|0;if(e!=P(c,f)&&KH(P(a.i8,d))!=P(c,f))break;d=d+1|0;}return (-1);}
function A$B(a){var b,c;b=a.i8;c=new I;K(c);G(G(c,C(579)),b);return J(c);}
var Ih=H();
var Bhf=null;var Bhg=null;var Bhb=null;function AY7(){AY7=Bn(Ih);ATJ();}
function ATJ(){Bhf=BbQ();Bhg=BcA();Bhb=L($rt_arraycls(B),[L(B,[C(580),BbX()]),L(B,[C(581),BaL()]),L(B,[C(582),Bc3()]),L(B,[C(583),Bc8()]),L(B,[C(584),Bhg]),L(B,[C(585),BcH()]),L(B,[C(586),Bbf()]),L(B,[C(587),Bca()]),L(B,[C(588),Bb9()]),L(B,[C(589),BaT()]),L(B,[C(590),Ba3()]),L(B,[C(591),Bcd()]),L(B,[C(592),BbB()]),L(B,[C(593),BaH()]),L(B,[C(594),Bc5()]),L(B,[C(595),Ba2()]),L(B,[C(596),BcF()]),L(B,[C(597),Bcm()]),L(B,[C(598),BcG()]),L(B,[C(599),BaW()]),L(B,[C(600),Bc_()]),L(B,[C(601),Bch()]),L(B,[C(602),Bbq()]),
L(B,[C(603),Bc1()]),L(B,[C(604),BcY()]),L(B,[C(605),BbR()]),L(B,[C(606),BaV()]),L(B,[C(607),BcS()]),L(B,[C(608),Bhf]),L(B,[C(609),Bbv()]),L(B,[C(610),Bcc()]),L(B,[C(611),Bhf]),L(B,[C(612),BaF()]),L(B,[C(613),Bhg]),L(B,[C(614),Ba8()]),L(B,[C(615),S(0,127)]),L(B,[C(616),S(128,255)]),L(B,[C(617),S(256,383)]),L(B,[C(618),S(384,591)]),L(B,[C(619),S(592,687)]),L(B,[C(620),S(688,767)]),L(B,[C(621),S(768,879)]),L(B,[C(622),S(880,1023)]),L(B,[C(623),S(1024,1279)]),L(B,[C(624),S(1280,1327)]),L(B,[C(625),S(1328,1423)]),
L(B,[C(626),S(1424,1535)]),L(B,[C(627),S(1536,1791)]),L(B,[C(628),S(1792,1871)]),L(B,[C(629),S(1872,1919)]),L(B,[C(630),S(1920,1983)]),L(B,[C(631),S(2304,2431)]),L(B,[C(632),S(2432,2559)]),L(B,[C(633),S(2560,2687)]),L(B,[C(634),S(2688,2815)]),L(B,[C(635),S(2816,2943)]),L(B,[C(636),S(2944,3071)]),L(B,[C(637),S(3072,3199)]),L(B,[C(638),S(3200,3327)]),L(B,[C(639),S(3328,3455)]),L(B,[C(640),S(3456,3583)]),L(B,[C(641),S(3584,3711)]),L(B,[C(642),S(3712,3839)]),L(B,[C(643),S(3840,4095)]),L(B,[C(644),S(4096,4255)]),
L(B,[C(645),S(4256,4351)]),L(B,[C(646),S(4352,4607)]),L(B,[C(647),S(4608,4991)]),L(B,[C(648),S(4992,5023)]),L(B,[C(649),S(5024,5119)]),L(B,[C(650),S(5120,5759)]),L(B,[C(651),S(5760,5791)]),L(B,[C(652),S(5792,5887)]),L(B,[C(653),S(5888,5919)]),L(B,[C(654),S(5920,5951)]),L(B,[C(655),S(5952,5983)]),L(B,[C(656),S(5984,6015)]),L(B,[C(657),S(6016,6143)]),L(B,[C(658),S(6144,6319)]),L(B,[C(659),S(6400,6479)]),L(B,[C(660),S(6480,6527)]),L(B,[C(661),S(6528,6623)]),L(B,[C(662),S(6624,6655)]),L(B,[C(663),S(6656,6687)]),
L(B,[C(664),S(7424,7551)]),L(B,[C(665),S(7552,7615)]),L(B,[C(666),S(7616,7679)]),L(B,[C(667),S(7680,7935)]),L(B,[C(668),S(7936,8191)]),L(B,[C(669),S(8192,8303)]),L(B,[C(670),S(8304,8351)]),L(B,[C(671),S(8352,8399)]),L(B,[C(672),S(8400,8447)]),L(B,[C(673),S(8448,8527)]),L(B,[C(674),S(8528,8591)]),L(B,[C(675),S(8592,8703)]),L(B,[C(676),S(8704,8959)]),L(B,[C(677),S(8960,9215)]),L(B,[C(678),S(9216,9279)]),L(B,[C(679),S(9280,9311)]),L(B,[C(680),S(9312,9471)]),L(B,[C(681),S(9472,9599)]),L(B,[C(682),S(9600,9631)]),
L(B,[C(683),S(9632,9727)]),L(B,[C(684),S(9728,9983)]),L(B,[C(685),S(9984,10175)]),L(B,[C(686),S(10176,10223)]),L(B,[C(687),S(10224,10239)]),L(B,[C(688),S(10240,10495)]),L(B,[C(689),S(10496,10623)]),L(B,[C(690),S(10624,10751)]),L(B,[C(691),S(10752,11007)]),L(B,[C(692),S(11008,11263)]),L(B,[C(693),S(11264,11359)]),L(B,[C(694),S(11392,11519)]),L(B,[C(695),S(11520,11567)]),L(B,[C(696),S(11568,11647)]),L(B,[C(697),S(11648,11743)]),L(B,[C(698),S(11776,11903)]),L(B,[C(699),S(11904,12031)]),L(B,[C(700),S(12032,12255)]),
L(B,[C(701),S(12272,12287)]),L(B,[C(702),S(12288,12351)]),L(B,[C(703),S(12352,12447)]),L(B,[C(704),S(12448,12543)]),L(B,[C(705),S(12544,12591)]),L(B,[C(706),S(12592,12687)]),L(B,[C(707),S(12688,12703)]),L(B,[C(708),S(12704,12735)]),L(B,[C(709),S(12736,12783)]),L(B,[C(710),S(12784,12799)]),L(B,[C(711),S(12800,13055)]),L(B,[C(712),S(13056,13311)]),L(B,[C(713),S(13312,19893)]),L(B,[C(714),S(19904,19967)]),L(B,[C(715),S(19968,40959)]),L(B,[C(716),S(40960,42127)]),L(B,[C(717),S(42128,42191)]),L(B,[C(718),S(42752,
42783)]),L(B,[C(719),S(43008,43055)]),L(B,[C(720),S(44032,55203)]),L(B,[C(721),S(55296,56191)]),L(B,[C(722),S(56192,56319)]),L(B,[C(723),S(56320,57343)]),L(B,[C(724),S(57344,63743)]),L(B,[C(725),S(63744,64255)]),L(B,[C(726),S(64256,64335)]),L(B,[C(727),S(64336,65023)]),L(B,[C(728),S(65024,65039)]),L(B,[C(729),S(65040,65055)]),L(B,[C(730),S(65056,65071)]),L(B,[C(731),S(65072,65103)]),L(B,[C(732),S(65104,65135)]),L(B,[C(733),S(65136,65279)]),L(B,[C(734),S(65280,65519)]),L(B,[C(735),S(0,1114111)]),L(B,[C(736),
Bce()]),L(B,[C(737),B9(0,1)]),L(B,[C(738),Lw(62,1)]),L(B,[C(739),B9(1,1)]),L(B,[C(740),B9(2,1)]),L(B,[C(741),B9(3,0)]),L(B,[C(742),B9(4,0)]),L(B,[C(743),B9(5,1)]),L(B,[C(744),Lw(448,1)]),L(B,[C(745),B9(6,1)]),L(B,[C(746),B9(7,0)]),L(B,[C(747),B9(8,1)]),L(B,[C(748),Lw(3584,1)]),L(B,[C(749),B9(9,1)]),L(B,[C(750),B9(10,1)]),L(B,[C(751),B9(11,1)]),L(B,[C(752),Lw(28672,0)]),L(B,[C(753),B9(12,0)]),L(B,[C(754),B9(13,0)]),L(B,[C(755),B9(14,0)]),L(B,[C(756),Bcx(983040,1,1)]),L(B,[C(757),B9(15,0)]),L(B,[C(758),B9(16,
1)]),L(B,[C(759),B9(18,1)]),L(B,[C(760),Bbl(19,0,1)]),L(B,[C(761),Lw(1643118592,1)]),L(B,[C(762),B9(20,0)]),L(B,[C(763),B9(21,0)]),L(B,[C(764),B9(22,0)]),L(B,[C(765),B9(23,0)]),L(B,[C(766),B9(24,1)]),L(B,[C(767),Lw(2113929216,1)]),L(B,[C(768),B9(25,1)]),L(B,[C(769),B9(26,0)]),L(B,[C(770),B9(27,0)]),L(B,[C(771),B9(28,1)]),L(B,[C(772),B9(29,0)]),L(B,[C(773),B9(30,0)])]);}
function Z0(){Cj.call(this);this.pe=0;}
function AZn(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.pe!=HY(GY(E0(e,d)))?(-1):2;}
function Bar(a){var b,c;b=E2(Gu(a.pe));c=new I;K(c);G(G(c,C(560)),b);return J(c);}
function PD(){Ce.call(this);this.hp=0;}
function AXJ(a){var b=new PD();ASK(b,a);return b;}
function ASK(a,b){Cc(a);a.hp=b;}
function A8a(a,b){a.f=b;}
function A3V(a,b,c,d){var e,f;e=b+1|0;if(e>d.E){d.eB=1;return (-1);}f=P(c,b);if(b>d.dQ&&C4(P(c,b-1|0)))return (-1);if(a.hp!=f)return (-1);return a.f.d(e,c,d);}
function AUZ(a,b,c,d){var e,f,g,h;if(!(c instanceof BE))return JH(a,b,c,d);e=d.dQ;f=d.E;while(true){if(b>=f)return (-1);g=GA(c,a.hp,b);if(g<0)return (-1);if(g>e&&C4(P(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.d(b,c,d)>=0)break;}return g;}
function A4o(a,b,c,d,e){var f,g;if(!(d instanceof BE))return JQ(a,b,c,d,e);f=e.dQ;a:{while(true){if(c<b)return (-1);g=Iw(d,a.hp,c);if(g<0)break a;if(g<b)break a;if(g>f&&C4(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.d(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AZN(a){var b,c;b=a.hp;c=new I;K(c);Bl(c,b);return J(c);}
function ARK(a,b){if(b instanceof Fp)return 0;if(b instanceof Fl)return 0;if(b instanceof Et)return 0;if(b instanceof EJ)return 0;if(b instanceof PO)return 0;if(!(b instanceof PD))return 1;return b.hp!=a.hp?0:1;}
function AZU(a,b){return 1;}
function PO(){Ce.call(this);this.g7=0;}
function A55(a){var b=new PO();AXO(b,a);return b;}
function AXO(a,b){Cc(a);a.g7=b;}
function A3D(a,b){a.f=b;}
function ARr(a,b,c,d){var e,f,g,h;e=d.E;f=b+1|0;g=BS(f,e);if(g>0){d.eB=1;return (-1);}h=P(c,b);if(g<0&&Do(P(c,f)))return (-1);if(a.g7!=h)return (-1);return a.f.d(f,c,d);}
function A8p(a,b,c,d){var e,f;if(!(c instanceof BE))return JH(a,b,c,d);e=d.E;while(true){if(b>=e)return (-1);f=GA(c,a.g7,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Do(P(c,b))){b=f+2|0;continue;}if(a.f.d(b,c,d)>=0)break;}return f;}
function AZi(a,b,c,d,e){var f,g;if(!(d instanceof BE))return JQ(a,b,c,d,e);f=e.E;a:{while(true){if(c<b)return (-1);g=Iw(d,a.g7,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Do(P(d,c))){c=g+(-1)|0;continue;}if(a.f.d(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A_W(a){var b,c;b=a.g7;c=new I;K(c);Bl(c,b);return J(c);}
function ATq(a,b){if(b instanceof Fp)return 0;if(b instanceof Fl)return 0;if(b instanceof Et)return 0;if(b instanceof EJ)return 0;if(b instanceof PD)return 0;if(!(b instanceof PO))return 1;return b.g7!=a.g7?0:1;}
function A8x(a,b){return 1;}
function EJ(){var a=this;Cj.call(a);a.lr=0;a.kP=0;a.ic=0;}
function A87(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.lr==e&&a.kP==d?2:(-1);}
function A7x(a,b,c,d){var e,f;if(!(c instanceof BE))return JH(a,b,c,d);e=d.E;while(b<e){b=GA(c,a.lr,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.kP==f&&a.f.d(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ASL(a,b,c,d,e){var f;if(!(d instanceof BE))return JQ(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Iw(d,a.kP,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.lr==P(d,f)&&a.f.d(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A$9(a){var b,c,d;b=a.lr;c=a.kP;d=new I;K(d);Bl(d,b);Bl(d,c);return J(d);}
function A8Z(a,b){if(b instanceof EJ)return b.ic!=a.ic?0:1;if(b instanceof Et)return b.o(a.ic);if(b instanceof Fp)return 0;if(!(b instanceof Fl))return 1;return 0;}
var AGW=H(Gw);
function ASQ(a,b){return b!=10?0:1;}
function AYS(a,b,c){return b!=10?0:1;}
var AGX=H(Gw);
function A9Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function A0W(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function ALM(){var a=this;B.call(a);a.qw=null;a.oi=null;a.kI=0;a.zv=0;}
function A7O(a){var b=new ALM();AVD(b,a);return b;}
function AVD(a,b){var c,d;while(true){c=a.kI;if(b<c)break;a.kI=c<<1|1;}d=c<<1|1;a.kI=d;d=d+1|0;a.qw=BI(d);a.oi=BI(d);a.zv=b;}
function UJ(a,b,c){var d,e,f,g;d=0;e=a.kI;f=b&e;while(true){g=a.qw.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.oi.data[f]=c;}
function AFb(a,b){var c,d,e,f;c=a.kI;d=b&c;e=0;while(true){f=a.qw.data[d];if(!f)break;if(f==b)return a.oi.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.zv;}
var AJk=H();
var PB=H(Bk);
function BbQ(){var a=new PB();AVf(a);return a;}
function AVf(a){}
function AOH(a){return CZ(Cg(D7(),9,13),32);}
var O1=H(Bk);
function BcA(){var a=new O1();AZP(a);return a;}
function AZP(a){}
function APi(a){return Cg(D7(),48,57);}
var ALH=H(Bk);
function BbX(){var a=new ALH();AUK(a);return a;}
function AUK(a){}
function A9t(a){return Cg(D7(),97,122);}
var AL3=H(Bk);
function BaL(){var a=new AL3();AVH(a);return a;}
function AVH(a){}
function AZX(a){return Cg(D7(),65,90);}
var AL6=H(Bk);
function Bc3(){var a=new AL6();ASm(a);return a;}
function ASm(a){}
function ATZ(a){return Cg(D7(),0,127);}
var Pw=H(Bk);
function Bc8(){var a=new Pw();AS_(a);return a;}
function AS_(a){}
function AJW(a){return Cg(Cg(D7(),97,122),65,90);}
var No=H(Pw);
function BcH(){var a=new No();AVm(a);return a;}
function AVm(a){}
function AKq(a){return Cg(AJW(a),48,57);}
var AM6=H(Bk);
function Bbf(){var a=new AM6();A7n(a);return a;}
function A7n(a){}
function A5I(a){return Cg(Cg(Cg(D7(),33,64),91,96),123,126);}
var QK=H(No);
function Bca(){var a=new QK();AYE(a);return a;}
function AYE(a){}
function ANb(a){return Cg(Cg(Cg(AKq(a),33,64),91,96),123,126);}
var AOV=H(QK);
function Bb9(){var a=new AOV();AZJ(a);return a;}
function AZJ(a){}
function AW1(a){return CZ(ANb(a),32);}
var AKX=H(Bk);
function BaT(){var a=new AKX();A9B(a);return a;}
function A9B(a){}
function A4c(a){return CZ(CZ(D7(),32),9);}
var AJ7=H(Bk);
function Ba3(){var a=new AJ7();A_p(a);return a;}
function A_p(a){}
function AWU(a){return CZ(Cg(D7(),0,31),127);}
var AN6=H(Bk);
function Bcd(){var a=new AN6();ASw(a);return a;}
function ASw(a){}
function A0Z(a){return Cg(Cg(Cg(D7(),48,57),97,102),65,70);}
var AQh=H(Bk);
function BbB(){var a=new AQh();A2V(a);return a;}
function A2V(a){}
function A7L(a){var b;b=new AFp;b.J4=a;BF(b);b.Z=1;return b;}
var AM9=H(Bk);
function BaH(){var a=new AM9();AYO(a);return a;}
function AYO(a){}
function A13(a){var b;b=new Z_;b.J$=a;BF(b);b.Z=1;return b;}
var APY=H(Bk);
function Bc5(){var a=new APY();ASo(a);return a;}
function ASo(a){}
function AVi(a){var b;b=new Vf;b.JR=a;BF(b);return b;}
var ALz=H(Bk);
function Ba2(){var a=new ALz();AWV(a);return a;}
function AWV(a){}
function AY2(a){var b;b=new Ve;b.Hi=a;BF(b);return b;}
var AMj=H(Bk);
function BcF(){var a=new AMj();AS8(a);return a;}
function AS8(a){}
function A4a(a){var b;b=new YU;b.IB=a;BF(b);JU(b.X,0,2048);b.Z=1;return b;}
var AJv=H(Bk);
function Bcm(){var a=new AJv();ASO(a);return a;}
function ASO(a){}
function ATE(a){var b;b=new AB7;b.Kn=a;BF(b);b.Z=1;return b;}
var ANm=H(Bk);
function BcG(){var a=new ANm();AWw(a);return a;}
function AWw(a){}
function A_t(a){var b;b=new Sd;b.IZ=a;BF(b);b.Z=1;return b;}
var AP4=H(Bk);
function BaW(){var a=new AP4();AXe(a);return a;}
function AXe(a){}
function A10(a){var b;b=new ADH;b.HI=a;BF(b);return b;}
var ALZ=H(Bk);
function Bc_(){var a=new ALZ();A5T(a);return a;}
function A5T(a){}
function AV1(a){var b;b=new Z5;b.GC=a;BF(b);b.Z=1;return b;}
var AOq=H(Bk);
function Bch(){var a=new AOq();ARP(a);return a;}
function ARP(a){}
function ATL(a){var b;b=new Z9;b.H3=a;BF(b);b.Z=1;return b;}
var AK0=H(Bk);
function Bbq(){var a=new AK0();ASW(a);return a;}
function ASW(a){}
function A5p(a){var b;b=new RS;b.Iy=a;BF(b);b.Z=1;return b;}
var AMO=H(Bk);
function Bc1(){var a=new AMO();AV8(a);return a;}
function AV8(a){}
function A6F(a){var b;b=new ACp;b.KS=a;BF(b);b.Z=1;return b;}
var AP9=H(Bk);
function BcY(){var a=new AP9();A7F(a);return a;}
function A7F(a){}
function A0f(a){var b;b=new ACy;b.Hv=a;BF(b);return b;}
var AKA=H(Bk);
function BbR(){var a=new AKA();ASP(a);return a;}
function ASP(a){}
function AYA(a){var b;b=new AFR;b.Ku=a;BF(b);return b;}
var AKi=H(Bk);
function BaV(){var a=new AKi();A9b(a);return a;}
function A9b(a){}
function AXv(a){var b;b=new AE6;b.GG=a;BF(b);b.Z=1;return b;}
var AM7=H(Bk);
function BcS(){var a=new AM7();A5O(a);return a;}
function A5O(a){}
function A9k(a){var b;b=new Rf;b.K_=a;BF(b);b.Z=1;return b;}
var L3=H(Bk);
function Bbv(){var a=new L3();ATS(a);return a;}
function ATS(a){}
function AKY(a){return CZ(Cg(Cg(Cg(D7(),97,122),65,90),48,57),95);}
var AQs=H(L3);
function Bcc(){var a=new AQs();A5W(a);return a;}
function A5W(a){}
function AXh(a){var b;b=Fu(AKY(a),1);b.Z=1;return b;}
var AOZ=H(PB);
function BaF(){var a=new AOZ();A0A(a);return a;}
function A0A(a){}
function A24(a){var b;b=Fu(AOH(a),1);b.Z=1;return b;}
var AKg=H(O1);
function Ba8(){var a=new AKg();A6v(a);return a;}
function A6v(a){}
function AUS(a){var b;b=Fu(APi(a),1);b.Z=1;return b;}
function AN9(){var a=this;Bk.call(a);a.vJ=0;a.C5=0;}
function S(a,b){var c=new AN9();A_s(c,a,b);return c;}
function A_s(a,b,c){a.vJ=b;a.C5=c;}
function AWf(a){return Cg(D7(),a.vJ,a.C5);}
var AOi=H(Bk);
function Bce(){var a=new AOi();A03(a);return a;}
function A03(a){}
function A0H(a){return Cg(Cg(D7(),65279,65279),65520,65533);}
function AON(){var a=this;Bk.call(a);a.se=0;a.qE=0;a.Bv=0;}
function B9(a,b){var c=new AON();AS4(c,a,b);return c;}
function Bbl(a,b,c){var d=new AON();A0T(d,a,b,c);return d;}
function AS4(a,b,c){a.qE=c;a.se=b;}
function A0T(a,b,c,d){a.Bv=d;a.qE=c;a.se=b;}
function A49(a){var b;b=BbW(a.se);if(a.Bv)JU(b.X,0,2048);b.Z=a.qE;return b;}
function AOW(){var a=this;Bk.call(a);a.p8=0;a.om=0;a.ta=0;}
function Lw(a,b){var c=new AOW();ATM(c,a,b);return c;}
function Bcx(a,b,c){var d=new AOW();A11(d,a,b,c);return d;}
function ATM(a,b,c){a.om=c;a.p8=b;}
function A11(a,b,c,d){a.ta=d;a.om=c;a.p8=b;}
function ARd(a){var b;b=new AEI;ALq(b,a.p8);if(a.ta)JU(b.X,0,2048);b.Z=a.om;return b;}
var AOa=H();
var AJL=H();
function AKz(b){var c,d,e,f,g,h,i;c=AZe(Hl(b));d=OQ(c);e=BI(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+OQ(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Rp(c);h=h+1|0;}return e;}
function Pk(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AAI(){var a=this;B.call(a);a.B1=0;a.wo=0;a.B8=null;}
function AUk(a,b,c){var d=new AAI();AZI(d,a,b,c);return d;}
function AZI(a,b,c,d){a.B1=b;a.wo=c;a.B8=d;}
function ALT(){var a=this;B.call(a);a.AU=null;a.CE=0;}
function AZe(a){var b=new ALT();A4m(b,a);return b;}
function A4m(a,b){a.AU=b;}
var AOx=H();
function OQ(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.AU.data;f=b.CE;b.CE=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Ba(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Rp(b){var c,d;c=OQ(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function Uf(){var a=this;B.call(a);a.oC=0;a.u0=null;}
function BaD(a,b){var c,d,e;c=a.u0;b=b;d=c.vk;e=c.vj;d=b.b<=d&&e<=b.a?1:0;a.oC=d;return d?0:1;}
function MT(){GI.call(this);this.vQ=null;}
function Ux(){MT.call(this);this.ue=null;}
function AB4(){B.call(this);this.Ge=null;}
function A8D(a,b){Bl(BG(a.Ge.v_,FS(b)),10);return 1;}
function ACj(){B.call(this);this.wf=null;}
function AYX(a,b){a.wf.g(GD(b));}
function ACk(){var a=this;B.call(a);a.zj=null;a.zk=null;}
function AWK(a,b){var c,d;c=a.zj;d=a.zk;b.text().then(BC(c,"f"),BC(d,"f"));}
function ACh(){B.call(this);this.CZ=null;}
function A8i(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.CZ;d=CP(c[0]);e=(CP(c[1])).data[0];if(!AF7(b.h)){c=b.h;if(c.cR==e){e=b.sJ;f=NO(d);FH(c.eF);FH(c.er);O2(c);while(f.f0>=f.jN.data.length?0:1){if(Bf(f)==(-1))continue;g=Zl(c,Bf(f));h=Qg(Cb(c,g.bA),g.bG);if(Bf(f)==(-1)){if(!e)continue;h.cm=0;h.bZ=h.bZ|4;continue;}i=Zl(c,Bf(f));j=Bf(f);k=Bf(f);DX(c.eF,g,i);l=c.er;m=BO();if(Cz(l,i)===null)DX(l,i,m);Br(Cz(c.er,i),g);h.cm=j;h.bZ=k;}J2(b);if(b.JS){n=KZ(Fc(),b.Fk);if(Ba0(n,Bm(100))){b=FO(b);c=new I;K(c);G(Hi(G(G(c,
b),C(774)),n),C(377));$rt_globals.console.info($rt_ustr(J(c)));}}}}}
function TO(){var a=this;B.call(a);a.B0=null;a.lH=null;}
function Ts(){B.call(this);this.B2=null;}
function A5c(a,b){a.B2.FS(b);}
function AG5(){var a=this;B.call(a);a.vY=null;a.B6=null;a.kt=null;a.l1=null;}
function AFW(a){var b,c;b=a.B6.next();c=a.vY;b.then(BC(a,"f"),BC(c,"f"));}
function AYG(a,b){var c;if(b.done?1:0)a.kt.mD();else{AFW(a);c=b.value;if(c.kind==='file'?1:0){b=ALX(c,ACU(a.l1));a.kt.qW(b);}else{b=Bae(c,ACU(a.l1),null);a.kt.pL(b);}}}
function S1(){E7.call(this);this.kH=null;}
function VI(a){var b;b=new AFk;PA(b,a.kH);return b;}
function QN(){var a=this;B.call(a);a.Es=null;a.Ew=0;a.Ex=0;a.Eu=null;a.Ev=null;}
function AT4(a,b){Zv(a.Es,a.Ew,a.Ex,a.Eu,a.Ev,b);}
function Xe(){E7.call(this);this.CT=null;}
function OK(a){var b;b=new W8;PA(b,a.CT);return b;}
function S2(){Gx.call(this);this.zq=null;}
function ZR(){B.call(this);this.y_=null;}
function A4R(a,b){b=b;Ry(a.y_,b);}
function XB(){B.call(this);this.xO=null;}
function A6Q(a,b){b=b;Ib(a.xO,b);}
function NW(){var a=this;LR.call(a);a.my=null;a.zW=0;}
function A3e(a,b){var c;if(a===b)return 1;if(b!==null&&BD(a)===BD(b)){if(!APt(a,b))return 0;c=b;return BW(a.my,c.my);}return 0;}
function Yw(){var a=this;Bc.call(a);a.AD=null;a.KN=null;}
function AT5(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.c0^En(a.AD,c):0;}
function Yt(){var a=this;Bc.call(a);a.E4=null;a.yJ=null;a.Ib=null;}
function A2m(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.c0^En(a.E4,c):0;return a.yJ.o(b)&&!d?1:0;}
function Sv(){var a=this;Bc.call(a);a.m4=null;a.I9=null;}
function AV9(a,b){return a.bu^En(a.m4,b);}
function A5t(a){var b,c,d;b=new I;K(b);c=Jn(a.m4,0);while(c>=0){Lc(b,Gu(c));Bl(b,124);c=Jn(a.m4,c+1|0);}d=b.B;if(d>0)Yj(b,d-1|0);return J(b);}
function ABK(){var a=this;Bc.call(a);a.CR=null;a.J9=null;}
function A8$(a,b){return a.CR.o(b);}
function ABI(){var a=this;Bc.call(a);a.qI=0;a.Bk=null;a.rj=null;}
function AZm(a,b){return !(a.qI^En(a.rj.S,b))&&!(a.qI^a.rj.fj^a.Bk.o(b))?0:1;}
function ABJ(){var a=this;Bc.call(a);a.oj=0;a.ys=null;a.pN=null;}
function A6Y(a,b){return !(a.oj^En(a.pN.S,b))&&!(a.oj^a.pN.fj^a.ys.o(b))?1:0;}
function ABN(){var a=this;Bc.call(a);a.FU=0;a.yx=null;a.yo=null;a.Js=null;}
function A4z(a,b){return a.FU^(!a.yx.o(b)&&!a.yo.o(b)?0:1);}
function ABO(){var a=this;Bc.call(a);a.v8=0;a.CL=null;a.Cg=null;a.K5=null;}
function AQ9(a,b){return a.v8^(!a.CL.o(b)&&!a.Cg.o(b)?0:1)?0:1;}
function ABL(){var a=this;Bc.call(a);a.uY=null;a.K$=null;}
function AUL(a,b){return Dv(a.uY,b);}
function ABM(){var a=this;Bc.call(a);a.Fx=null;a.JB=null;}
function AWC(a,b){return Dv(a.Fx,b)?0:1;}
function ABP(){var a=this;Bc.call(a);a.wi=null;a.CP=0;a.xW=null;}
function A0o(a,b){return !Dv(a.wi,b)&&!(a.CP^En(a.xW.S,b))?0:1;}
function ABQ(){var a=this;Bc.call(a);a.wX=null;a.DZ=0;a.wM=null;}
function A36(a,b){return !Dv(a.wX,b)&&!(a.DZ^En(a.wM.S,b))?1:0;}
function Su(){var a=this;Bc.call(a);a.xR=0;a.Fg=null;a.yS=null;a.GN=null;}
function BaE(a,b){return !(a.xR^a.Fg.o(b))&&!Dv(a.yS,b)?0:1;}
function SP(){var a=this;Bc.call(a);a.FI=0;a.sP=null;a.tb=null;a.Hb=null;}
function AUQ(a,b){return !(a.FI^a.sP.o(b))&&!Dv(a.tb,b)?1:0;}
function Ss(){var a=this;Bc.call(a);a.BV=null;a.Hf=null;}
function ATb(a,b){return Dv(a.BV,b);}
function St(){var a=this;Bc.call(a);a.uI=null;a.K3=null;}
function A5h(a,b){return Dv(a.uI,b)?0:1;}
function Sy(){var a=this;Bc.call(a);a.FR=null;a.wQ=0;a.Gx=null;}
function AVG(a,b){return Dv(a.FR,b)&&a.wQ^En(a.Gx.S,b)?1:0;}
function Sr(){var a=this;Bc.call(a);a.Ej=null;a.C2=0;a.wP=null;}
function A$t(a,b){return Dv(a.Ej,b)&&a.C2^En(a.wP.S,b)?0:1;}
function Sw(){var a=this;Bc.call(a);a.EJ=0;a.AC=null;a.v6=null;a.Jq=null;}
function A3d(a,b){return a.EJ^a.AC.o(b)&&Dv(a.v6,b)?1:0;}
function Sx(){var a=this;Bc.call(a);a.D_=0;a.z3=null;a.ED=null;a.JG=null;}
function AYt(a,b){return a.D_^a.z3.o(b)&&Dv(a.ED,b)?0:1;}
function Ua(){B.call(this);this.sQ=null;}
function A8l(a,b){var c,d,e,f,g;c=a.sQ;Ek(c.P);FH(c.jM);d=OK(PX(c.gj));while(Gl(d)){e=Qz(d);f=c.gj;g=e.c4;e=null;if(Ix(f,g))DX(f,g,e);}e=Bi();d=BT(b);f=new I;K(f);G(G(f,C(775)),d);Bb(e,J(f));e=AZr(b,c);Eo(c.cW.fb,e);e.gp.e();C2(c.md,Gp(Fg(b),C(776)));CC(c.P.F,c.cW.fb);}
var NQ=H(0);
function AE5(){var a=this;B.call(a);a.G8=null;a.Fh=null;a.ni=null;a.de=null;a.lU=0;a.rg=0;}
function Q1(a,b){var c,d,e;c=N(a.ni);if(b>=0&&b<=c){AIJ(a.de,null,(-1),(-1));d=a.de;d.nN=1;d.fA=b;c=d.kh;if(c<0)c=b;d.kh=c;b=a.Fh.cS(b,a.ni,d);if(b==(-1))a.de.eB=1;if(b>=0){d=a.de;if(d.l2){e=d.e1.data;if(e[0]==(-1)){c=d.fA;e[0]=c;e[1]=c;}d.kh=Oj(d);return 1;}}a.de.fA=(-1);return 0;}d=new BN;Bd(d,DI(b));M(d);}
function AMN(a){return SN(a.de,0);}
function AOm(a){return Vh(a.de,0);}
function AJo(a){return a.de.l5;}
function T_(){var a=this;B.call(a);a.uh=null;a.ui=null;}
function A8L(a){var b,c;b=a.uh;c=a.ui;VP();L8(b,c,Bhh);}
function T9(){var a=this;B.call(a);a.DQ=null;a.DP=null;}
function AUF(a){var b,c;b=a.DQ;c=a.DP;VP();L8(b,c,Bhi);}
function T$(){var a=this;B.call(a);a.Gw=null;a.Gv=null;}
function A0y(a){L8(a.Gw,a.Gv,null);}
function Ub(){var a=this;B.call(a);a.Ce=null;a.Cf=null;}
function ARu(a){var b,c,d,e,f,g,h;b=a.Ce;c=a.Cf;d=EE(b.bN.c);e=IH(b.bN.c);d=AGk(b.bN.gh,d,e);Ek(b.hz.cl);b=b.bN;e=Gr(b,c);if(d!==null){f=b.c;g=e.bA;h=e.bG;e=new Vd;e.Ig=b;e.If=c;d.Qw(f,g,h,1,e,b.lv);}}
function VF(){B.call(this);this.z5=null;}
function AZ1(a){var b;b=a.z5;Ek(b.hz.cl);Kd(b.bN,ZK(b),0);}
function VE(){B.call(this);this.xt=null;}
function A64(a){var b;b=a.xt;Ek(b.hz.cl);Kd(b.bN,ZK(b),1);}
function VD(){B.call(this);this.um=null;}
function A8E(a){var b,c,d;b=a.um;Ek(b.hz.cl);c=IU(b);b=b.bN;BH(b);d=new AHM;d.tM=b;UA(c,d,AJY(C(777)));}
function UB(){var a=this;B.call(a);a.Da=null;a.C_=null;}
function A1H(a){var b,c;b=a.Da;c=a.C_;b=b.bN.c;b.r5=c;N2(b);}
var TJ=H(0);
var BgR=null;function APV(){BgR=new W7;}
function AOF(){B.call(this);this.KH=null;}
function A_6(a){var b,c,d,e;b=a.KH;c=IU(b);d=b.hz.cl;e=new Vg;e.Gd=b;FQ(c,OZ(d,e));}
function Z8(){B.call(this);this.yw=null;}
function A84(a,b){a.yw.g($rt_str(b.message));}
function V4(){B.call(this);this.EU=null;}
function A8A(a,b){var c,d;c=a.EU;$rt_globals.console.info("JsDirectoryHandle onError:");d=c.l1.h9.name;$rt_globals.console.info("  name  = "+d);$rt_globals.console.info("  error = "+b);c.kt.mD();}
function QT(){B.call(this);this.Bo=null;}
function A83(a,b){a.Bo.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function AAf(){var a=this;B.call(a);a.eG=null;a.C3=null;a.Cx=null;}
function Rc(a){var b,c,d,e,f,g,h,i;a:{b=Bf(a.eG);switch(b){case 3:break;case 5:c=R8(a);d=P1(a);b=Bf(a.eG);e=Bf(a.eG);f=Bf(a.eG);g=BO();h=0;while(h<f){Br(g,P1(a));h=h+1|0;}i=new NW;ALK(i,c,d,b);i.my=g;i.zW=e;break a;default:c=new CW;d=new I;K(d);R(G(d,C(778)),b);Bd(c,J(d));M(c);}i=BbF(R8(a),P1(a),Bf(a.eG));}return i;}
function R8(a){var b,c;b=Bf(a.eG);c=Bf(a.eG);return A5q(Fh(a.C3,b,c),Bf(a.eG));}
function P1(a){var b;b=Bf(a.eG);if(b==(-1))return null;return BU(a.Cx,b);}
function UC(){var a=this;B.call(a);a.fh=null;a.Fa=null;a.Fr=null;}
function It(a){var b,c,d,e,f;a:{b:{b=Bf(a.fh);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=AAK(a);d=Tv(a);b=Bf(a.fh);e=VL(a);f=new Lr;PM(f,c,d,2);f.sS=b;f.jy=e;break a;case 4:c=It(a);d=It(a);f=new Ks;PM(f,c.fm,c.gP,9);f.jm=c;f.iS=d;break a;case 5:f=BaX(AAK(a),Tv(a),Bf(a.fh));break a;case 9:c=VL(a);f=new IL;d=!Fk(c)&&BU(c,0)!==null?(BU(c,0)).gP:null;PM(f,null,null,7);f.gg=BO();c=Ci(c);while(Ck(c)){e=Cl(c);if(!(e instanceof IL))Br(f.gg,e);else{e=e;Hq(f.gg,e.gg);}}f.gP=d;break a;default:break b;}f
=null;break a;}c=new CW;d=new I;K(d);R(G(d,C(779)),b);Bd(c,J(d));M(c);}return f;}
function AAK(a){var b,c;b=Bf(a.fh);c=Bf(a.fh);return A5q(Fh(a.Fa,b,c),Bf(a.fh));}
function Tv(a){var b;b=Bf(a.fh);if(b==(-1))return null;return BU(a.Fr,b);}
function VL(a){var b,c,d;b=Bf(a.fh);c=BO();d=0;while(d<b){Br(c,It(a));d=d+1|0;}return c;}
function AGZ(){var a=this;B.call(a);a.tk=null;a.tj=0;}
function AXN(a,b){var c,d,e,f,g,h,i,j;c=a.tk;d=a.tj;e=!d?c.cy.c5:c.cy.c8;Ek(c.P);f=Bi();g=Fg(b);h=new I;K(h);G(G(h,C(780)),g);Bb(f,J(h));g=new AER;g.dh=c;g.iL=d;g.o5=e;f=AZr(b,g);if(!d)c.em=f;else c.ef=f;f.cM.e();Eo(e,f);b=c.ef;if(b!==null&&c.em===null)C2(c.eD,Dt(b));if(c.ef===null){b=c.em;if(b!==null)C2(c.eD,Dt(b));}if(c.ef!==null&&c.em!==null){c.pZ=Iv(c.eD.U.b1);b=Bi();i=c.pZ;e=new I;K(e);ACq(G(e,C(781)),i);Bb(b,J(e));e=Dt(c.ef);g=Dt(c.em);b=new I;K(b);G(G(G(G(b,e),C(427)),g),C(782));e=J(b);C2(c.eD,e);c.qS
=0;e=NB(null);c.h7=e;b=new Wg;f=c.ef.hN;g=c.em.hN;j=c.eD.U.b1.eo;h=new Si;h.uv=c;b.It=e;b.Il=f;b.J_=g;b.Kz=j;b.rS=h;c=new U2;c.lS=0;c.mM=0;c.kW=0;c.JY=e;c.oR=j;c.FE=1;h=new Yc;h.BS=b;c.E6=h;h=new Ye;h.Eh=b;c.sK=h;AGM(c,e,f,g);}}
function SX(){B.call(this);this.BC=null;}
function AYp(a){AMJ(a.BC);}
function SV(){B.call(this);this.DX=null;}
function A4$(a){Kw(a.DX);}
function SW(){B.call(this);this.sD=null;}
function A_x(a){AND(a.sD);}
function Xz(){B.call(this);this.D2=null;}
function A81(a){a.D2.ss();}
function XA(){B.call(this);this.GA=null;}
function AXn(a){a.GA.qx();}
function ADo(){B.call(this);this.CD=null;}
function A$f(a){var b,c,d,e,f,g,h,i;b=a.CD;c=(b.tO.cb()).data;d=O(Bw,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Tx;i.uF=b;i.uE=h;e[f]=AAZ(i,h);f=f+1|0;}return d;}
function AD_(){B.call(this);this.uV=null;}
function AR2(a){a.uV.qr.g5(0);}
function AD$(){B.call(this);this.EL=null;}
function ATn(a){a.EL.qr.g5(1);}
function Wc(){B.call(this);this.zr=null;}
function A0U(a){var b,c,d,e,f;b=a.zr.c.h;c=b.cR;d=new I;K(d);R(G(d,C(783)),c);$rt_globals.console.info($rt_ustr(J(d)));c=b.pl;d=new I;K(d);R(G(d,C(784)),c);$rt_globals.console.info($rt_ustr(J(d)));d=b.d0;e=E2(F6(b));AH2(d,0,d.dW,e);b=Bi();f=b.oL;f.data[0]=10;ABt(b,f,0,1);}
function Wd(){B.call(this);this.uR=null;}
function AR0(a){AEu(a.uR);}
function We(){B.call(this);this.EA=null;}
function ATh(a){AFt(a.EA);}
function Wf(){B.call(this);this.As=null;}
function A0C(a){Qi(a.As.c);}
function Wr(){B.call(this);this.C4=null;}
function A6_(a){N2(a.C4.c);}
function ALd(){B.call(this);this.KR=null;}
function A_8(a){var b,c,d,e,f,g,h;b=a.KR;c=O(Bw,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=AAZ(ST(b,g),AA7(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=AAZ(ST(b,g),AA7(g));e=h;}return c;}
function AAv(){B.call(this);this.tt=null;}
function A6P(a,b){b=b;QU(a.tt,b);}
function ZD(){B.call(this);this.AF=null;}
function BaB(a,b){b=b;Ib(a.AF,b);}
var W7=H();
function YB(){var a=this;B.call(a);a.Av=null;a.Aw=null;}
var Rm=H(IT);
function AUn(a,b,c,d){var e,f,g;e=0;f=d.E;a:{while(true){if(b>f){b=e;break a;}g=Ht(d,a.bg);Ep(d,a.bg,b);e=a.d3.d(b,c,d);if(e>=0)break;Ep(d,a.bg,g);b=b+1|0;}}return b;}
function Bat(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Ht(e,a.bg);Ep(e,a.bg,c);f=a.d3.d(c,d,e);if(f>=0)break;Ep(e,a.bg,g);c=c+(-1)|0;}}return c;}
function AS2(a){return null;}
function GF(){var a=this;B.call(a);a.lV=0;a.w5=0;a.lf=null;a.iv=null;a.Ca=null;a.nI=null;}
function Bhj(a){var b=new GF();PA(b,a);return b;}
function PA(a,b){a.nI=b;a.w5=b.dF;a.lf=null;}
function Gl(a){var b,c;if(a.lf!==null)return 1;while(true){b=a.lV;c=a.nI.cw.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.lV=b+1|0;}return 0;}
function AOc(a){var b;if(a.w5==a.nI.dF)return;b=new Jf;X(b);M(b);}
function PP(a){var b,c,d,e;AOc(a);if(!Gl(a)){b=new Oa;X(b);M(b);}b=a.lf;if(b!==null){c=a.iv;if(c!==null)a.Ca=c;a.iv=b;a.lf=b.dC;}else{d=a.nI.cw.data;e=a.lV;a.lV=e+1|0;b=d[e];a.iv=b;a.lf=b.dC;a.Ca=null;}}
var AFk=H(GF);
function SK(a){PP(a);return a.iv.c4;}
var W8=H(GF);
function Qz(a){PP(a);return a.iv;}
var ADZ=H(GF);
function AJE(){var a=this;B.call(a);a.WB=null;a.Z8=0;}
function X6(){B.call(this);this.sR=null;}
function A1q(a){AIh(a.sR);}
function X7(){B.call(this);this.Gc=null;}
function AZl(a,b){Hu(a.Gc,b);}
function RX(){B.call(this);this.v5=null;}
function AYI(a){AE3(a.v5);}
function RY(){B.call(this);this.tx=null;}
function A4v(a,b){Hu(a.tx,b);}
function ADR(){var a=this;B.call(a);a.w$=null;a.w_=null;}
function AET(){B.call(this);this.CC=null;}
function AW2(a,b){b.iK=a.CC.dW;}
function AES(){B.call(this);this.x8=null;}
function A8N(a,b){b.iB=a.x8.dW.cL;}
function U4(){var a=this;B.call(a);a.Dj=null;a.Di=null;a.Dh=0;}
function ARw(a){var b,c,d,e;b=a.Dj;c=a.Di;d=a.Dh;c=Fg(c);if(!d)b.pq=c;else b.z1=c;e=b.z1;if(e!==null&&b.pq!==null)C2(b.gt,c);else{if(e!==null)C2(b.gt,e);c=b.pq;if(c!==null)C2(b.gt,c);}}
function AGR(){var a=this;B.call(a);a.e1=null;a.mv=null;a.rF=null;a.po=null;a.t5=0;a.l2=0;a.dQ=0;a.E=0;a.fA=0;a.l5=0;a.hI=0;a.eB=0;a.KE=0;a.kh=0;a.nN=0;}
function B5(a,b,c){a.mv.data[b]=c;}
function D6(a,b){return a.mv.data[b];}
function Oj(a){return Vh(a,0);}
function Vh(a,b){AEG(a,b);return a.e1.data[(b*2|0)+1|0];}
function Ep(a,b,c){a.e1.data[b*2|0]=c;}
function OH(a,b,c){a.e1.data[(b*2|0)+1|0]=c;}
function Ht(a,b){return a.e1.data[b*2|0];}
function Kc(a,b){return a.e1.data[(b*2|0)+1|0];}
function ALI(a){return SN(a,0);}
function SN(a,b){AEG(a,b);return a.e1.data[b*2|0];}
function AAk(a,b){return a.rF.data[b];}
function FC(a,b,c){a.rF.data[b]=c;}
function AEG(a,b){var c;if(!a.l2){c=new CW;X(c);M(c);}if(b>=0&&b<a.t5)return;c=new BN;Bd(c,DI(b));M(c);}
function AIJ(a,b,c,d){a.l2=0;a.nN=2;KD(a.e1,(-1));KD(a.mv,(-1));if(b!==null)a.po=b;if(c>=0){a.dQ=c;a.E=d;}a.fA=a.dQ;}
function AKs(a){return a.nN;}
function WW(){var a=this;B.call(a);a.Fz=null;a.Fy=0;}
function A9m(a){ACH(a.Fz,a.Fy);}
function Tt(){B.call(this);this.BA=null;}
function A6S(a,b){Hu(a.BA,b);}
function AG6(){var a=this;B.call(a);a.DG=null;a.DH=0;}
function A5B(a){I_(a.DG,a.DH);}
function ADP(){B.call(this);this.sN=null;}
function AWJ(a){I_(a.sN,1);}
function ADO(){B.call(this);this.y7=null;}
function A8c(a){I_(a.y7,0);}
function ABC(){B.call(this);this.tI=null;}
function A3_(a,b){b.iK=a.tI;}
function AHM(){B.call(this);this.tM=null;}
function AUz(a,b){D9(a.tM,b);}
var HH=H(Cu);
var Bhi=null;var Bhh=null;var Bhk=null;function VP(){VP=Bn(HH);Baj();}
function A9E(a,b){var c=new HH();AKE(c,a,b);return c;}
function ANA(){VP();return Bhk.dN();}
function AKE(a,b,c){VP();Ds(a,b,c);}
function Baj(){var b;Bhi=A9E(C(785),0);b=A9E(C(786),1);Bhh=b;Bhk=L(HH,[Bhi,b]);}
function Jp(){var a=this;Dl.call(a);a.hN=null;a.i3=null;a.gk=null;a.gT=null;}
var Bhl=null;var Bhm=null;function AZr(a,b){var c=new Jp();APb(c,a,b);return c;}
function Bhn(a,b,c){var d=new Jp();Nn(d,a,b,c);return d;}
function APb(a,b,c){Nn(a,b,0,c);}
function Nn(a,b,c,d){Lh(a,Kq(b),c);a.gk=Bhl;a.gT=Bhm;a.hN=b;a.i3=d;MQ(a);JG(a);}
function A0L(a){return JO(a.hN);}
function Uh(a,b){return XW(a.gk,b);}
function MQ(a){var b;b=new U6;b.vs=a;a.cM=b;a.gp=b;a.fk=Bgy;}
function AIk(a){var b;b=new AI1;b.wE=a;a.cM=b;a.gp=b;}
function A1I(a){if(!Gb(a))TP(a);else EO(a);}
function AMt(){Bhl=O(Jp,0);Bhm=O(L0,0);}
function Tx(){var a=this;B.call(a);a.uF=null;a.uE=null;}
function A5A(a){var b,c;b=a.uF;c=a.uE;b.kz.pY(c);}
function UF(){B.call(this);this.xn=null;}
function ASc(a,b){W2(IU(a.xn),b,Bf5,AJY(C(787)));}
var AFO=H();
var BgS=null;function BcP(){BcP=Bn(AFO);A2H();}
function A2H(){var b,c;b=BI((ANA()).data.length);c=b.data;BgS=b;c[Bhi.fQ]=1;c[Bhh.fQ]=2;}
function UX(){B.call(this);this.DR=null;}
function AUq(a,b){var c,d;c=a.DR;d=b.j_;b=new I;K(b);G(G(b,c),d);$rt_globals.console.info($rt_ustr(J(b)));}
function QW(){var a=this;B.call(a);a.A8=null;a.A9=0.0;}
function A5Z(a){var b,c;b=a.A8;c=a.A9;b.kz.l9(c);}
function L0(){Dl.call(this);this.gB=null;}
function ATd(a){return Pl(a.gB);}
function A2D(a){J3(a);}
var T0=H(Bx);
var Y9=H(Bx);
function XC(){Ha.call(this);this.IV=0;}
function TF(){Ha.call(this);this.KW=0;}
var Oa=H(Bx);
function AFp(){Bc.call(this);this.J4=null;}
function A0t(a,b){return CX(b)!=2?0:1;}
function Z_(){Bc.call(this);this.J$=null;}
function A22(a,b){return CX(b)!=1?0:1;}
function Vf(){Bc.call(this);this.JR=null;}
function AR6(a,b){return UD(b);}
function Ve(){Bc.call(this);this.Hi=null;}
function A47(a,b){return 0;}
function YU(){Bc.call(this);this.IB=null;}
function AVt(a,b){return !CX(b)?0:1;}
function AB7(){Bc.call(this);this.Kn=null;}
function A$4(a,b){return CX(b)!=9?0:1;}
function Sd(){Bc.call(this);this.IZ=null;}
function AX4(a,b){return IR(b);}
function ADH(){Bc.call(this);this.HI=null;}
function AY6(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Z5(){Bc.call(this);this.GC=null;}
function Bac(a,b){a:{b:{switch(CX(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=IR(b);}return b;}
function Z9(){Bc.call(this);this.H3=null;}
function ATt(a,b){a:{b:{switch(CX(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=IR(b);}return b;}
function RS(){Bc.call(this);this.Iy=null;}
function A0E(a,b){a:{switch(CX(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function ACp(){Bc.call(this);this.KS=null;}
function A69(a,b){return L$(b);}
function ACy(){Bc.call(this);this.Hv=null;}
function A8O(a,b){return ACz(b);}
function AFR(){Bc.call(this);this.Ku=null;}
function A$Q(a,b){return CX(b)!=3?0:1;}
function AE6(){Bc.call(this);this.GG=null;}
function A05(a,b){a:{b:{switch(CX(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=IR(b);}return b;}
function Rf(){Bc.call(this);this.K_=null;}
function ATj(a,b){a:{b:{switch(CX(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=IR(b);}return b;}
function N1(){Bc.call(this);this.pH=0;}
function BbW(a){var b=new N1();ALq(b,a);return b;}
function ALq(a,b){BF(a);a.pH=b;}
function AX7(a,b){return a.bu^(a.pH!=CX(b&65535)?0:1);}
var AEI=H(N1);
function A92(a,b){return a.bu^(!(a.pH>>CX(b&65535)&1)?0:1);}
function AGN(){var a=this;B.call(a);a.wl=null;a.E5=null;a.zg=0;a.oy=0;}
function Pg(a,b){return Cp(a.wl)<b?0:1;}
var AIs=H(0);
function RT(){B.call(this);this.xI=null;}
function A6q(a){var b,c;b=a.xI;c=b.w$;b=b.w_;c.Ly(b.nD,b.rL,null);}
function VH(){B.call(this);this.vo=null;}
function A5i(a,b){b.iB=a.vo;}
var ALc=H(0);
function Vg(){B.call(this);this.Gd=null;}
function A$q(a,b){GM(a.Gd.bN,b,Bf5);}
function AGg(){B.call(this);this.zG=null;}
function A7z(a,b,c){var d,e,f,g,h;d=a.zG;e=c.gm;if(b.eg){c=!e?d.M.c:d.I.c;f=!e?b.bL:b.bM;g=!e?FB(b):Fx(b);h=AIa(c.h,f,g);f=e?b.bL:b.bM;g=e?FB(b):Fx(b);ADA((e?d.M.c:d.I.c).h,f,g,h);WS(d);}}
function S0(){var a=this;B.call(a);a.nw=null;a.nv=null;a.BF=null;}
function ATR(a){KA(a.nw);KA(a.nv);}
function ARq(a){LK(a.nw);LK(a.nv);}
function AZA(a,b){JB(a.nw,b);JB(a.nv,b);}
function AXV(a,b){LL(a.BF,b);}
function Vd(){var a=this;B.call(a);a.Ig=null;a.If=null;}
function UT(){var a=this;B.call(a);a.JC=null;a.JD=null;a.JE=null;}
function AER(){var a=this;B.call(a);a.iL=0;a.o5=null;a.dh=null;}
function AV7(a,b){var c,d,e,f,g;c=Bi();d=Fg(b.gB);e=new I;K(e);G(G(e,C(788)),d);Bb(c,J(e));c=b.gB;d=Ue(a,c.jp);if(d===null)f=null;else{c=E4(c);f=XW(d.gT,c);}if(f===null){c=new AGB;d=a.dh;AQd(c,d.P,d.hm,d.il);M0(c,b.gB);LN(c);}else{Nc(a,f);c=new KG;g=a.dh;Nk(c,g.P,g.hm,g.il);ON(c,b.gB,a.iL);ON(c,f.gB,a.iL?0:1);}}
function A1G(a,b){var c,d,e,f;AIk(b);c=Bi();d=JO(b.hN);e=new I;K(e);G(G(e,C(789)),d);Bb(c,J(e));c=Wz(a,b);Nc(a,c);if(c!==null&&Ur(c))c.cM.e();if(In(b)>0)Zm(a.dh,a.o5);L1(a.dh,0,0);f=b.gk.data;if(f.length==1&&!b.gT.data.length)f[0].cM.e();}
function Nc(a,b){(!a.iL?a.dh.cy.c8:a.dh.cy.c5).dk=b;}
function A1S(a,b){var c;if(In(b)>0)Zm(a.dh,a.o5);MQ(b);c=Wz(a,b);Nc(a,c);if(c!==null&&Gb(c))c.cM.e();L1(a.dh,0,0);}
function Wz(a,b){var c,d;a:{c=a.iL;if(!(c&&b===a.dh.ef)){if(c)break a;if(b!==a.dh.em)break a;}return !c?a.dh.ef:a.dh.em;}b=b.hN;d=Ue(a,b.gr);return d===null?null:Uh(d,Kq(b));}
function Ue(a,b){var c,d,e;c=!a.iL?a.dh.ef:a.dh.em;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Uh(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function Wg(){var a=this;B.call(a);a.It=null;a.Il=null;a.J_=null;a.Kz=null;a.rS=null;}
var Mg=H(0);
function Si(){B.call(this);this.uv=null;}
function UQ(a,b,c){L1(a.uv,b,c);}
function U6(){B.call(this);this.vs=null;}
function AXX(a){var b,c,d,e;b=a.vs;c=Bi();d=Dt(b);e=new I;K(e);G(G(e,C(790)),d);Bb(c,J(e));c=b.hN;e=new AFn;e.dM=b;e.nm=BO();e.n0=BO();IM(c,e);}
function ADW(){B.call(this);this.FD=null;}
function A$o(a,b){return APO(a.FD.gg);}
var Du=H(0);
var BeB=null;var Bfx=null;var BeD=null;var BeC=null;var BeF=null;var BeE=null;var BeH=null;var BeG=null;var BeJ=null;var BeI=null;var BeK=null;function AL8(){AL8=Bn(Du);A_C();}
function A_C(){BeB=Cw(0);Bfx=DV(8,8,8);BeD=U(C(791));BeC=DV(255,255,255);BeF=U(C(792));BeE=U(C(793));BeH=U(C(794));BeG=U(C(795));BeJ=FJ(205,205,205,153);BeI=FJ(255,255,255,0);BeK=U(C(120));}
function CI(){Cu.call(this);this.rC=null;}
var Bho=null;var Bhp=null;var Bhq=null;var Bhr=null;var Bhs=null;var Bht=null;var Bhu=null;var Bhv=null;var Bhw=null;var Bhx=null;var Bhy=null;var Bhz=null;var BhA=null;var BhB=null;var BhC=null;var BhD=null;function ALr(){ALr=Bn(CI);A_5();}
function Ec(a,b,c){var d=new CI();ADT(d,a,b,c);return d;}
function A_R(a,b,c,d){var e=new CI();AJH(e,a,b,c,d);return e;}
function AQk(){ALr();return BhD.dN();}
function ADT(a,b,c,d){ALr();Ds(a,b,c);a.rC=KV(d,null);}
function AJH(a,b,c,d,e){ALr();Ds(a,b,c);a.rC=KV(d,e);}
function A_5(){var b;b=new CI;AL8();ADT(b,C(209),0,Bfx);Bho=b;Bhp=Ec(C(210),1,U(C(796)));Bhq=Ec(C(212),2,U(C(797)));Bhr=Ec(C(214),3,U(C(798)));Bhs=Ec(C(216),4,Bfx);Bht=Ec(C(217),5,U(C(799)));Bhu=Ec(C(219),6,U(C(417)));Bhv=Ec(C(221),7,U(C(800)));Bhw=Ec(C(223),8,U(C(801)));Bhx=A_R(C(225),9,Bfx,DV(237,235,252));Bhy=A_R(C(226),10,U(C(415)),U(C(802)));Bhz=Ec(C(227),11,U(C(417)));BhA=Ec(C(229),12,U(C(418)));BhB=Ec(C(231),13,U(C(803)));b=Ec(C(232),14,U(C(233)));BhC=b;BhD=L(CI,[Bho,Bhp,Bhq,Bhr,Bhs,Bht,Bhu,Bhv,Bhw,Bhx,
Bhy,Bhz,BhA,BhB,b]);}
var Er=H(0);
var BeO=null;var BeP=null;var BeL=null;var BeM=null;var BeN=null;var Bfy=null;var Bfz=null;var BeQ=null;var BeR=null;function A2z(){A2z=Bn(Er);A4t();}
function A4t(){BeO=U(C(118));BeP=U(C(804));BeL=U(C(805));BeM=U(C(806));BeN=U(C(807));Bfy=U(C(118));Bfz=U(C(804));BeQ=FJ(205,205,205,153);BeR=DV(247,248,250);}
function ABp(){var a=this;B.call(a);a.Be=null;a.Bf=0;a.Bg=0;a.Bh=0;a.Bi=0;}
function Wa(){B.call(this);this.Al=null;}
function A3k(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.data;b=a.Al;c=APs(CP(c[0]));d=b.Be;e=b.Bf;f=b.Bg;g=b.Bh;h=b.Bi;b=d.d5;Cm(c.fT,0,b.fT,e,f-e|0);Cm(c.fU,0,b.fU,g,h-g|0);i=BO();j=0;while(true){k=b.be.data;if(j>=k.length)break;l=k[j];if(l.bM==e)break;if(l.bL==g)break;Br(i,l);j=j+1|0;}k=c.be.data;m=k.length;n=0;while(n<m){c=k[n];c.bM=c.bM+e|0;c.bL=c.bL+g|0;Br(i,c);n=n+1|0;}while(true){k=b.be.data;if(j>=k.length)break;c=k[j];if(Fx(c)==f&&FB(c)==h)break;j=j+1|0;}if(j<b.be.data.length)j=j+1|0;while(true){k=b.be.data;if
(j>=k.length)break;o=j+1|0;l=k[j];c=BU(i,APN(i)-1|0);e=c.eg;f=l.eg;if(!e){if(f)Br(i,l);else{c.bJ=c.bJ+l.bJ|0;c.bI=c.bI+l.bI|0;}}else if(!f)Br(i,l);else{c.bJ=c.bJ+l.bJ|0;c.bI=c.bI+l.bI|0;c.eg=3;}j=o;}c=new RF;AHg(c);b.be=FE(i,AJ3(c,0));Og(d,d.d5);}
function Wp(){var a=this;B.call(a);a.ut=null;a.us=null;}
function ASl(a,b){var c,d;c=a.ut;d=a.us;b=c.ue.K(b);c=d.Av;d=d.Aw;c=c.zw;if(d.B>0)EL(d,c);EL(d,b);return 1;}
var AJK=H(0);
function U2(){var a=this;B.call(a);a.lS=0;a.mM=0;a.sK=null;a.JY=null;a.oR=null;a.FE=0;a.E6=null;a.kW=0;}
function AGM(a,b,c,d){var e,f,g,h;a:{a.kW=a.kW+1|0;if(EX(c,KF)){e=c;if(EX(d,KF)){f=d;c=a.oR;d=new AHJ;d.vd=a;d.vc=b;EF(c,d,C(808),L(B,[e,f]));break a;}}if(EX(c,Kb)){g=c;if(EX(d,Kb)){h=d;if(!a.FE){c=new AEF;c.zP=a;c.Bt=b;b=new ADp;b.E8=c;Ug(g,b);b=new ADn;b.El=c;Ug(h,b);}else{c=a.oR;d=new AII;d.xT=a;d.xS=b;EF(c,d,C(809),L(B,[g,h]));}break a;}}b=new Bv;X(b);M(b);}}
function AJ4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=c.data;a.lS=a.lS+1|0;d=CP(d[0]);e=d.data;f=e[0];g=e[1];h=e[2];i=3+f|0;e=(AOQ(d,3,i)).data;j=AOQ(d,i,3+(2*f|0)|0);g=1+g|0;k=AMo(c,1,g,F($rt_arraycls(Ig)));l=AMo(c,g,g+h|0,F($rt_arraycls(Ig)));m=e.length;b.es=O(Pf,m);b.lI=0;i=0;n=0;o=0;p=0;q=0;while(o<m){r=j.data[o];if(e[o]==1){p=1;b.es.data[o]=NB(b);OL(De(b,o),r);Jd(De(b,o),1);NA(De(b,o),1);LJ(De(b,o));o=o+1|0;i=i+1|0;}else if(e[o]!=2){c=l.data;s=k.data;b.es.data[o]=NB(b);OL(De(b,o),r);AGM(a,De(b,o),s[i],
c[n]);o=o+1|0;i=i+1|0;n=n+1|0;}else{p=1;b.es.data[o]=NB(b);OL(De(b,o),r);Jd(De(b,o),2);NA(De(b,o),2);LJ(De(b,o));o=o+1|0;n=n+1|0;}}if(!m)LJ(b);if(p){OR(b,3);q=Ja(b)?0:1;}ABT(a,q);}
function V$(a,b,c){if(!c)OR(b,3);ABT(a,LJ(b));}
function ABT(a,b){var c,d;c=a.kW-1|0;a.kW=c;if(c<0){d=new CW;Bd(d,C(810));M(d);}if(!c){d=a.sK;b=a.lS;c=a.mM;UQ(d.Eh.rS,b,c);}else if(b)UQ(a.E6.BS.rS,0,0);}
function Yc(){B.call(this);this.BS=null;}
function Ye(){B.call(this);this.Eh=null;}
function AFn(){var a=this;B.call(a);a.nm=null;a.n0=null;a.dM=null;}
function A$I(a,b){var c,d;c=new Jp;d=a.dM;Nn(c,b,d.hP+1|0,d.i3);Br(a.nm,c);}
function A0m(a,b){var c,d;c=E4(b);d=new L0;Lh(d,c,a.dM.hP+1|0);d.gB=b;a.dM.i3.t4(d,c);d.mE=AQA(a.dM.i3,d);Br(a.n0,d);}
function A$6(a){var b,c,d,e,f,g,h;if(!(Fk(a.nm)&&Fk(a.n0))){a.dM.gk=FE(a.nm,Bhl);a.dM.gT=FE(a.n0,Bhm);Ms(a.dM.gk,Bgz);Ms(a.dM.gT,Bgz);b=a.dM;c=b.gk;d=c.data;e=b.gT;f=e.data;g=d.length;h=f.length;d=O(Dl,g+h|0);Cm(c,0,d,0,g);Cm(e,0,d,g,h);a.dM.fk=d;}I4(a.dM);b=a.dM;b.i3.AJ(b);}
function AFu(){B.call(this);this.FA=null;}
function A6n(a){Ek(a.FA);}
function UH(){var a=this;B.call(a);a.xo=null;a.xp=null;}
function A_z(a){a.xo.Do(a.xp);}
var ANM=H();
function AHJ(){var a=this;B.call(a);a.vd=null;a.vc=null;}
function AZh(a,b){AJ4(a.vd,a.vc,b);}
function Pt(){var a=this;B.call(a);a.Ed=0;a.Eg=0;a.Az=0;}
function ZO(a){var b,c;b=a.Az+1|0;a.Az=b;if(b==2){b=a.Ed;c=a.Eg;V$(a.zP,a.Bt,b!=c?0:1);}}
function AEF(){var a=this;Pt.call(a);a.Bt=null;a.zP=null;}
function AII(){var a=this;B.call(a);a.xT=null;a.xS=null;}
function A1z(a,b){var c,d;c=b.data;b=a.xT;d=a.xS;b.mM=b.mM+1|0;V$(b,d,(CP(c[0])).data[0]!=1?0:1);}
function AI1(){B.call(this);this.wE=null;}
function A6m(a){var b;b=a.wE;JG(b);b.i3.x3(b);b.gk=Bhl;b.gT=Bhm;}
var AOJ=H();
function AUP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=O(G$,1);e=0;f=0;g=0;a:{b:while(true){h=b.data;i=h.length;j=BS(f,i);if(j>=0)break a;k=c.data;l=k.length;if(g>=l)break a;m=0;n=h[f].cv;o=0;p=0;while(f<i&&g<l){q=h[f].cv;if(q!=k[g].cv)break;if(q!=n)break;m=1;f=f+1|0;o=o+1|0;g=g+1|0;p=p+1|0;}if(m){r=D3(f-o|0,o,g-p|0,p,n);q=e+1|0;d=Dz(r,d,e);e=q;continue;}q=h[f].hP<=k[g].hP?0:1;c:{if(!q){r=TX(c,g,f);if(r!==null){g=g+r.bI|0;q=e+1|0;d=Dz(r,d,e);e=q;continue b;}r=Sc(b,f,g);if(r===null)break c;f=f+r.bJ|0;q=e+1|0;d
=Dz(r,d,e);e=q;continue b;}r=Sc(b,f,g);if(r!==null){f=f+r.bJ|0;q=e+1|0;d=Dz(r,d,e);e=q;continue b;}r=TX(c,g,f);if(r!==null){g=g+r.bI|0;q=e+1|0;d=Dz(r,d,e);e=q;continue b;}}if(h[f].cv&&h[f].cv!=3){if(k[g].cv&&k[g].cv!=3)break;r=D3(f,0,g,1,k[g].cv);q=e+1|0;d=Dz(r,d,e);g=g+1|0;}else{r=D3(f,1,g,0,h[f].cv);q=e+1|0;d=Dz(r,d,e);f=f+1|0;}e=q;}r=new CW;X(r);M(r);}if(j>=0)q=e;else{r=Sc(b,f,g);if(r===null)q=e;else{q=e+1|0;d=Dz(r,d,e);}}b=c.data;j=b.length;if(g>=j)p=q;else{r=TX(c,g,f);if(r===null)p=q;else{p=q+1|0;d=Dz(r,
d,q);}}while(f<i){r=D3(f,1,g,0,h[f].cv);q=p+1|0;d=Dz(r,d,p);f=f+1|0;p=q;}while(g<j){r=D3(f,0,g,1,b[g].cv);q=p+1|0;d=Dz(r,d,p);g=g+1|0;p=q;}return A8U(null,null,C0(d,p));}
function Sc(b,c,d){var e;b=b.data;if(b[c].cv!=1)return null;e=0;while(c<b.length&&b[c].cv==1){c=c+1|0;e=e+1|0;}return D3(c-e|0,e,d,0,1);}
function TX(b,c,d){var e;b=b.data;if(b[c].cv!=2)return null;e=0;while(c<b.length&&b[c].cv==2){c=c+1|0;e=e+1|0;}return D3(d,0,c-e|0,e,2);}
var W1=H(0);
var RF=H();
function AJ3(a,b){return O(G$,b);}
var Mu=H(0);
function ADp(){B.call(this);this.E8=null;}
function AYi(a,b){var c;c=a.E8;c.Ed=b;ZO(c);}
function ADn(){B.call(this);this.El=null;}
function AXT(a,b){var c;c=a.El;c.Eg=b;ZO(c);}
function AHf(){var a=this;B.call(a);a.Jr=null;a.ly=null;a.KL=null;}
function Y8(a){var b;if(a.ly!==null)return;b=new ZS;X(b);M(b);}
function S_(){var a=this;B.call(a);a.yb=null;a.yc=null;}
function A5w(a,b){var c,d,e;c=a.yb;d=a.yc;M5(c.gj,d);b=ABS(b);e=AT7(b.jE,AGG(d));DX(c.jM,d,e);if(BW(c.Am,d))TA(c,e);}
function Ta(){var a=this;B.call(a);a.vM=null;a.vL=null;}
function Bad(a,b){var c,d,e;c=a.vM;d=a.vL;M5(c.gj,d);c=C_();e=new I;K(e);G(G(G(G(e,C(811)),d),C(30)),b);Bb(c,J(e));}
function Ch(){var a=this;B.call(a);a.jP=null;a.kJ=null;a.uz=null;}
var BhE=null;var BhF=null;var BhG=null;var BhH=null;var BhI=null;var BhJ=null;var BhK=null;var BhL=null;var BhM=null;var BhN=null;var BhO=null;var BhP=null;var BhQ=null;var BhR=null;var BhS=null;var BhT=null;var BhU=null;var BhV=null;var BhW=null;var BhX=null;var BhY=null;var BhZ=null;var Bh0=null;function APm(){APm=Bn(Ch);AVo();}
function Cy(a,b){var c=new Ch();AO9(c,a,b);return c;}
function BbA(a,b,c){var d=new Ch();AGE(d,a,b,c);return d;}
function AO9(a,b,c){APm();AGE(a,b,c,C(20));}
function AGE(a,b,c,d){APm();if(b!==null&&c!==null&&d!==null){if(!N(b)&&!N(c)){a.kJ=C(20);a.jP=C(20);a.uz=d;return;}a.kJ=b;a.jP=c;a.uz=d;return;}b=new EU;X(b);M(b);}
function AAz(){APm();return BhE;}
function AVo(){var b,c;BhF=Cy(C(812),C(813));BhG=Cy(C(814),C(813));BhH=Cy(C(815),C(816));BhI=Cy(C(815),C(20));BhJ=Cy(C(812),C(20));BhK=Cy(C(814),C(817));BhL=Cy(C(814),C(20));BhM=Cy(C(818),C(20));BhN=Cy(C(818),C(819));BhO=Cy(C(820),C(20));BhP=Cy(C(820),C(821));BhQ=Cy(C(822),C(823));BhR=Cy(C(822),C(20));BhS=Cy(C(824),C(825));BhT=Cy(C(824),C(20));BhU=Cy(C(815),C(816));BhV=Cy(C(815),C(816));BhW=Cy(C(815),C(826));BhX=Cy(C(815),C(826));BhY=Cy(C(812),C(827));BhZ=Cy(C(812),C(828));Bh0=Cy(C(20),C(20));if(Bh1===null)Bh1
=AXE();b=(Bh1.value!==null?$rt_str(Bh1.value):null);c=GA(b,95,0);BhE=BbA(Cd(b,0,c),C3(b,c+1|0),C(20));}
var HK=H();
var Bh2=null;var Bh1=null;var Bh3=null;var Bh4=null;function ANW(b,c){var d;if(!Eu(c)){d=new I;K(d);b=G(d,b);Bl(b,45);G(b,c);b=J(d);}return b;}
function ATs(){return {"ksh":{"value":"ksh-Latn-DE"},"ksj":{"value":"ksj-Latn-ZZ"},"tdu":{"value":"tdu-Latn-MY"},"cch":{"value":"cch-Latn-NG"},"und-Khar":{"value":"pra-Khar-PK"},"gkn":{"value":"gkn-Latn-ZZ"},"ksr":{"value":"ksr-Latn-ZZ"},"und-Mani":{"value":"xmn-Mani-CN"},"gkp":{"value":"gkp-Latn-ZZ"},"xmf":{"value":"xmf-Geor-GE"},"ccp":{"value":"ccp-Cakm-BD"},"ted":{"value":"ted-Latn-ZZ"},"und-Mand":{"value":"myz-Mand-IR"},"ktb":{"value":"ktb-Ethi-ZZ"},"xmn":{"value":"xmn-Mani-CN"},"sd-Sind":{"value":"sd-Sind-IN"}
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
function AXE(){return {"value":"en_GB"};}
function A7y(){return {"root":{"value":"#,##0.###"},"en":{"value":"#,##0.###"}};}
function ATg(){return {"root":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"naN":"NaN","infinity":"∞","groupingSeparator":44,"percent":37},"en":{"exponentSeparator":"E","minusSign":45,"perMille":8240,"decimalSeparator":46,"listSeparator":59,"naN":"NaN","infinity":"∞","groupingSeparator":44,"percent":37}};}
function Vp(){var a=this;B.call(a);a.Fw=null;a.Fv=null;}
function AZD(a,b){var c;c=a.Fw;a.Fv.lD(ABu(c,b.size));}
function Vq(){B.call(this);this.D$=null;}
function A3$(a,b){var c;c=a.D$;Bb(C_(),$rt_str(b.message));c.lD(0);}
function ANk(){var a=this;B.call(a);a.y9=null;a.iO=null;a.oQ=null;a.bU=null;a.hs=null;a.bo=0;a.vR=0;a.Ee=0;a.el=0;a.vX=0;a.fg=0;a.iC=0;a.ds=0;}
function Bbd(a,b,c,d,e){var f=new ANk();A8b(f,a,b,c,d,e);return f;}
function A8b(a,b,c,d,e,f){a.y9=b;a.iO=c;a.oQ=d;a.bU=e;a.hs=f;}
function AOb(a){var b,c,d;a:while(true){b=GA(a.bU,37,a.bo);if(b<0){EL(a.iO,C3(a.bU,a.bo));return;}EL(a.iO,Cd(a.bU,a.bo,b));b=b+1|0;a.bo=b;a.vR=b;c=APy(a);if(a.ds&256)a.el=Be(0,a.vX);if(a.el==(-1)){d=a.Ee;a.Ee=d+1|0;a.el=d;}b:{a.vX=a.el;switch(c){case 66:break;case 67:ADB(a,c,1);break b;case 68:AA_(a,c,1);break b;case 69:case 70:case 71:case 73:case 74:case 75:case 76:case 77:case 78:case 80:case 81:case 82:case 84:case 85:case 86:case 87:case 89:case 90:case 91:case 92:case 93:case 94:case 95:case 96:case 97:case 101:case 102:case 103:case 105:case 106:case 107:case 108:case 109:case 110:case 112:case 113:case 114:case 116:case 117:case 118:case 119:break a;case 72:V1(a,
c,1);break b;case 79:K6(a,c,3,1);break b;case 83:ACG(a,c,1);break b;case 88:K6(a,c,4,1);break b;case 98:AAM(a,c,0);break b;case 99:ADB(a,c,0);break b;case 100:AA_(a,c,0);break b;case 104:V1(a,c,0);break b;case 111:K6(a,c,3,0);break b;case 115:ACG(a,c,0);break b;case 120:K6(a,c,4,0);break b;default:break a;}AAM(a,c,1);}}M(A6M(E9(c)));}
function AAM(a,b,c){var d;Nt(a,b);d=a.hs.data[a.el];F8(a,c,!(d instanceof HU?d.U9():d===null?0:1)?C(33):C(34));}
function V1(a,b,c){var d;Nt(a,b);d=a.hs.data[a.el];F8(a,c,d===null?C(24):QD(Z6(d)));}
function ACG(a,b,c){var d,e;Nt(a,b);d=a.hs.data[a.el];if(!EX(d,UW))F8(a,c,BT(d));else{e=a.ds&7;if(c)e=e|2;d.NM(a.y9,e,a.fg,a.iC);}}
function ADB(a,b,c){var d,e,f;Jv(a,b,259);d=a.hs.data[a.el];e=a.iC;if(e>=0)M(A5N(e));if(d instanceof Dp)e=d.OU();else if(d instanceof I1)e=d.Ih()&65535;else if(d instanceof Io)e=d.In()&65535;else{if(!(d instanceof FF)){if(d===null){F8(a,c,C(24));return;}M(AKK(b,BD(d)));}e=d.bf;if(!(e>=0&&e<=1114111?1:0)){d=new ADK;f=new I;K(f);G(R(G(f,C(829)),e),C(830));Bd(d,J(f));d.I$=e;M(d);}}F8(a,c,E2(Gu(e)));}
function AA_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;Jv(a,b,507);XI(a);d=a.hs.data[a.el];if(d instanceof K5){e=d.GT();b=AV2(e,C8);if(b<0)e=A7i(e);d=new I;K(d);f=J(Hi(d,e));g=b>=0?0:1;}else{if(!(d instanceof FF)&&!(d instanceof I1)&&!(d instanceof Io))M(AKK(b,d===null?null:BD(d)));h=ANx(d);f=Hs(Ir(h));g=h>=0?0:1;}i=0;j=new I;K(j);if(g){if(!(a.ds&128)){Bl(j,45);i=1;}else{Bl(j,40);i=2;}}else{b=a.ds;if(b&8){HG(j,43);i=1;}else if(b&16){HG(j,32);i=1;}}k=new I;K(k);if(!(a.ds&64))BG(k,f);else{l=(AX9(a.oQ)).te;d
=a.oQ;m=d.kJ;n=d.jP;if(Bh3===null)Bh3=A7y();o=Bh3;p=ANW(m,n);p=o.hasOwnProperty($rt_ustr(p))?o[$rt_ustr(p)]:o.hasOwnProperty($rt_ustr(m))?o[$rt_ustr(m)]:o.root;m=(p.value!==null?$rt_str(p.value):null);q=new JW;p=AX9(d);q.uc=1;q.mb=40;q.oN=1;q.lY=3;AO_();q.He=Bh5;o=AAz();if(o===null){d=new EU;X(d);M(d);}d=o.kJ;n=o.jP;if(Eu(n)){if(Bh2===null)Bh2=ATs();o=Bh2;if(o.hasOwnProperty($rt_ustr(d)))d=(o[$rt_ustr(d)].value!==null?$rt_str(o[$rt_ustr(d)].value):null);b=MO(d,95);n=b<=0?C(20):C3(d,b+1|0);}if(Bh6===null)Bh6
=A1u();d=Bh6;if(!d.hasOwnProperty($rt_ustr(n)))d=null;else{o=(d[$rt_ustr(n)].value!==null?$rt_str(d[$rt_ustr(n)].value):null);if(o===null){d=new EU;X(d);M(d);}A0v();d=Cz(Bh7,o);if(d===null){d=new Bv;f=new I;K(f);G(G(f,C(831)),o);AQ3(d,DR(f));M(d);}}q.I3=d;q.F6=O(DF,0);r=O(DF,1);r.data[0]=Kn(C(256));q.n1=r;q.u3=O(DF,0);q.A_=O(DF,0);q.Ci=1;q.Im=AP$(p);AQ1(q,m);s=AN1(q);t=N(f)%s|0;if(!t)t=s;u=0;while(t<N(f)){BG(k,Cd(f,u,t));HG(k,l);v=t+s|0;u=t;t=v;}BG(k,C3(f,u));}a:{if(a.ds&32){t=ABq(k)+i|0;while(true){if(t>=a.fg)break a;HG(j,
FT(0,10));t=t+1|0;}}}EL(j,k);if(g&&a.ds&128)HG(j,41);F8(a,c,DR(j));}
function K6(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q;Jv(a,b,423);XI(a);e=a.hs.data[a.el];if(!(e instanceof K5)){if(e instanceof FF)f=LT(e.bf,c);else if(e instanceof Io)f=LT(e.In()&65535,c);else{if(!(e instanceof I1))M(AKK(b,e===null?null:BD(e)));f=LT(e.Ih()&255,c);}}else{g=e.GT();b=AV2(g,C8);if(!b)f=C(37);else{h=1<<c;i=h-1|0;if(!b)b=64;else{j=0;k=Dh(g,32);if(AT6(k,C8))j=32;else k=g;l=Dh(k,16);if(Fj(l,C8))l=k;else j=j|16;k=Dh(l,8);if(Fj(k,C8))k=l;else j=j|8;l=Dh(k,4);if(Fj(l,C8))l=k;else j=j|4;k=Dh(l,2);if(Fj(k,
C8))k=l;else j=j|2;if(AT6(Dh(k,1),C8))j=j|1;b=(64-j|0)-1|0;}b=(((64-b|0)+c|0)-1|0)/c|0;m=B0(b);n=m.data;b=Ba(b-1|0,c);j=0;while(b>=0){o=j+1|0;n[j]=FT(GS(Dh(g,b))&i,h);b=b-c|0;j=o;}f=E2(m);}}p=new I;K(p);if(a.ds&4){q=c!=4?C(37):C(832);e=new I;K(e);G(G(e,q),f);f=J(e);}a:{if(a.ds&32){h=N(f);while(true){if(h>=a.fg)break a;Bl(p,FT(0,10));h=h+1|0;}}}BG(p,f);F8(a,d,J(p));}
function XI(a){var b,c,d,e,f;b=a.ds;if(b&8&&b&16)M(AW0(C(833)));if(b&32&&b&1)M(AW0(C(834)));c=a.iC;if(c>=0)M(A5N(c));if(b&1&&a.fg<0){d=new UN;e=Cd(a.bU,a.vR,a.bo);f=new I;K(f);G(G(f,C(835)),e);Bd(d,J(f));d.GP=e;M(d);}}
function F8(a,b,c){var d,e,f,g,h,i,j,k;d=a.iC;if(d>0)c=Cd(c,0,d);if(b&&!Eu(c)){e=BI(c.bn.data.length).data;f=0;b=0;while(true){g=c.bn.data;d=g.length;if(b>=d)break;a:{if(b!=(d-1|0)&&C4(g[b])){g=c.bn.data;h=b+1|0;if(Do(g[h])){d=f+1|0;g=c.bn.data;e[f]=GY(E0(g[b],g[h]));b=h;break a;}}d=f+1|0;e[f]=Fz(c.bn.data[b]);}b=b+1|0;f=d;}c=new BE;b=0;c.bn=B0(f*2|0);i=0;j=0;while(j<f){d=b+1|0;b=e[b];if(b<65536){g=c.bn.data;h=i+1|0;g[i]=b&65535;}else{g=c.bn.data;k=i+1|0;g[i]=IV(b);g=c.bn.data;h=k+1|0;g[k]=Ii(b);}j=j+1|0;b=
d;i=h;}e=c.bn;if(i<e.data.length)c.bn=Jx(e,i);}if(!(a.ds&1)){AId(a,c);EL(a.iO,c);}else{EL(a.iO,c);AId(a,c);}}
function Nt(a,b){Jv(a,b,263);}
function Jv(a,b,c){var d,e,f,g;d=a.ds;if((d|c)==c)return;e=new AF5;f=E9(P(C(836),H4(d&(c^(-1)))));g=new I;K(g);Bl(G(G(G(g,C(837)),f),C(838)),b);Bd(e,J(g));e.Hj=f;e.Ks=b;M(e);}
function AId(a,b){var c,d,e;if(a.fg>N(b)){c=a.fg-N(b)|0;d=new I;FZ(d,c);e=0;while(e<c){Bl(d,32);e=e+1|0;}EL(a.iO,d);}}
function APy(a){var b,c,d,e,f,g;a.ds=0;a.el=(-1);a.fg=(-1);a.iC=(-1);b=P(a.bU,a.bo);if(b!=48&&NZ(b)){c=P_(a);if(a.bo<N(a.bU)&&P(a.bU,a.bo)==36){a.bo=a.bo+1|0;a.el=c-1|0;}else a.fg=c;}a:{b:{while(true){if(a.bo>=N(a.bU))break a;c:{b=P(a.bU,a.bo);switch(b){case 32:break;case 33:case 34:case 36:case 37:case 38:case 39:case 41:case 42:case 46:case 47:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:break b;case 35:c=4;break c;case 40:c=128;break c;case 43:c=8;break c;case 44:c
=64;break c;case 45:c=1;break c;case 48:c=32;break c;case 60:c=256;break c;default:break b;}c=16;}d=a.ds;if(d&c)break;a.ds=d|c;a.bo=a.bo+1|0;}e=new QL;f=E9(b);g=new I;K(g);G(G(g,C(839)),f);Bd(e,J(g));e.Ju=f;M(e);}}if(a.fg<0&&a.bo<N(a.bU)&&NZ(P(a.bU,a.bo)))a.fg=P_(a);if(a.bo<N(a.bU)&&P(a.bU,a.bo)==46){b=a.bo+1|0;a.bo=b;if(b<N(a.bU)&&NZ(P(a.bU,a.bo)))a.iC=P_(a);else M(A6M(E9(P(a.bU,a.bo-1|0))));}if(a.bo<N(a.bU)){e=a.bU;c=a.bo;a.bo=c+1|0;return P(e,c);}e=new SG;f=a.bU;AQZ(e,E9(P(f,N(f)-1|0)));M(e);}
function P_(a){var b,c,d,e;b=0;while(a.bo<N(a.bU)&&NZ(P(a.bU,a.bo))){c=b*10|0;d=a.bU;e=a.bo;a.bo=e+1|0;b=c+(P(d,e)-48|0)|0;}return b;}
function NZ(b){return b>=48&&b<=57?1:0;}
var ZS=H(CW);
var CV=H(Bv);
function SG(){CV.call(this);this.K7=null;}
function A6M(a){var b=new SG();AQZ(b,a);return b;}
function AQZ(a,b){var c;c=new I;K(c);G(G(c,C(840)),b);Bd(a,J(c));a.K7=b;}
function QL(){CV.call(this);this.Ju=null;}
function AMV(){CV.call(this);this.HD=0;}
function A5N(a){var b=new AMV();A2Q(b,a);return b;}
function A2Q(a,b){var c;c=new I;K(c);R(G(c,C(841)),b);Bd(a,J(c));a.HD=b;}
var Io=H(Dm);
var Bh8=null;function ALx(){Bh8=F($rt_shortcls());}
function ADK(){CV.call(this);this.I$=0;}
function AI$(){var a=this;CV.call(a);a.GF=0;a.Jz=null;}
function AKK(a,b){var c=new AI$();AZ6(c,a,b);return c;}
function AZ6(a,b,c){var d,e;d=new I;K(d);e=G(G(G(d,C(842)),c),C(843));Bl(e,b);G(e,C(844));Bd(a,J(d));a.GF=b;a.Jz=c;}
function AJy(){var a=this;B.call(a);a.GW=null;a.Kd=0;a.te=0;a.Hq=0;a.H0=0;a.GO=0;a.Kt=0;a.KU=0;a.Jf=null;a.Kx=null;a.Id=0;a.HK=0;a.Ja=null;}
function AX9(a){var b=new AJy();A_l(b,a);return b;}
function A_l(a,b){var c,d,e;a.GW=b;c=b.kJ;d=b.jP;if(Bh4===null)Bh4=ATg();e=Bh4;b=ANW(c,d);e=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)]:e.hasOwnProperty($rt_ustr(c))?e[$rt_ustr(c)]:e.root;a.Kd=48;a.te=e.groupingSeparator&65535;a.Hq=e.decimalSeparator&65535;a.H0=e.perMille&65535;a.GO=e.percent&65535;a.Kt=35;a.KU=59;a.Jf=(e.naN!==null?$rt_str(e.naN):null);a.Kx=(e.infinity!==null?$rt_str(e.infinity):null);a.Id=e.minusSign&65535;a.HK=e.decimalSeparator&65535;a.Ja=(e.exponentSeparator!==null?$rt_str(e.exponentSeparator)
:null);}
function AP$(a){var b,c,$$je;a:{try{b=AKW(a);}catch($$e){$$je=Ev($$e);if($$je instanceof NG){c=$$je;break a;}else{throw $$e;}}return b;}M(A4X(C(845),c));}
var LV=H();
function Oq(){var a=this;LV.call(a);a.uc=0;a.mb=0;a.oN=0;a.lY=0;a.xH=0;a.He=null;a.I3=null;}
function JW(){var a=this;Oq.call(a);a.Im=null;a.F6=null;a.n1=null;a.u3=null;a.A_=null;a.Ci=0;a.xE=0;a.JF=0;a.Jd=0;a.Ko=null;}
var Bh9=null;var Bh$=null;function AQ1(a,b){var c,d,e,f,g,h;c=new AAl;c.l6=0;c.rD=0;c.q3=0;c.pb=0;c.l7=0;c.nM=1;c.br=b;c.u=0;c.A4=KW(c,0,0);if(c.u==N(b)){c=new Bv;d=new I;K(d);G(G(d,C(846)),b);Bd(c,J(d));M(c);}AH9(c,1);c.p9=null;c.pm=null;if(c.u<N(b)&&P(b,c.u)!=59)c.rc=KW(c,1,0);if(c.u<N(b)){e=c.u;c.u=e+1|0;if(P(b,e)!=59){d=new Bv;f=c.u;c=new I;K(c);G(G(R(G(c,C(847)),f),C(848)),b);Bd(d,J(c));M(d);}c.p9=KW(c,0,1);AH9(c,0);c.pm=KW(c,1,1);}g=c.A4;a.F6=g;a.u3=c.rc;h=c.p9;if(h!==null)a.n1=h;else{e=g.data.length;h
=O(DF,e+1|0);a.n1=h;Cm(g,0,h,1,e);a.n1.data[0]=new Lv;}g=c.pm;if(g===null)g=c.rc;a.A_=g;f=c.l6;a.xE=f;a.uc=f<=0?0:1;e=!c.l7?c.pU:Be(1,c.pU);if(e<0)e=0;a.oN=e;if(a.mb<e)a.mb=e;f=c.s8;if(f<0)f=0;a.mb=f;if(f<e)a.oN=f;f=c.rD;if(f<0)f=0;a.xH=f;if(a.lY<f)a.lY=f;e=c.q3;if(e<0)e=0;a.lY=e;if(e<f)a.xH=e;a.JF=c.l7;a.Jd=c.pb;a.Ci=c.nM;a.Ko=b;}
function AN1(a){return a.xE;}
function ANC(){Bh9=ABW([Bm(1),Bm(10),Bm(100),Bm(1000),Bm(10000),Bm(100000),Bm(1000000),Bm(10000000),Bm(100000000),Bm(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);Bh$=DD([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);}
var UW=H(0);
function AF5(){var a=this;CV.call(a);a.Hj=null;a.Ks=0;}
function AJO(){CV.call(this);this.ID=null;}
function AW0(a){var b=new AJO();A7g(b,a);return b;}
function A7g(a,b){var c;c=new I;K(c);G(G(c,C(849)),b);Bd(a,J(c));a.ID=b;}
function UN(){CV.call(this);this.GP=null;}
var DF=H(0);
function Z3(){B.call(this);this.rN=null;}
function Kn(a){var b=new Z3();AY$(b,a);return b;}
function AY$(a,b){a.rN=b;}
function A3R(a,b){var c;if(a===b)return 1;if(!(b instanceof Z3))return 0;c=b;return Bj(a.rN,c.rN);}
function D5(){Cu.call(this);this.Iv=0;}
var Bh_=null;var Bia=null;var Bib=null;var Bic=null;var Bid=null;var Bie=null;var Bh5=null;var Bif=null;var Big=null;function AO_(){AO_=Bn(D5);A0e();}
function GZ(a,b,c){var d=new D5();AKP(d,a,b,c);return d;}
function A$h(){AO_();return Big.dN();}
function AKP(a,b,c,d){AO_();Ds(a,b,c);a.Iv=d;}
function A0e(){var b;Bh_=GZ(C(850),0,0);Bia=GZ(C(851),1,1);Bib=GZ(C(852),2,2);Bic=GZ(C(853),3,3);Bid=GZ(C(854),4,4);Bie=GZ(C(855),5,5);Bh5=GZ(C(856),6,6);b=GZ(C(857),7,7);Bif=b;Big=L(D5,[Bh_,Bia,Bib,Bic,Bid,Bie,Bh5,b]);}
function OB(){B.call(this);this.AV=null;}
var Bh7=null;function A0v(){var b,c,d,e,f,g;if(Bh7!==null)return;Bh7=IW();if(Bih===null)Bih=AVb();b=Bih;c=0;while(c<b.length){d=b[c];e=Bh7;f=(d.code!==null?$rt_str(d.code):null);g=new OB;g.AV=d;DX(e,f,g);c=c+1|0;}}
function AQ$(a){return (a.AV.code!==null?$rt_str(a.AV.code):null);}
var Qw=H();
var Bih=null;var Bh6=null;function AVb(){return [{"code":"AFN","fractionDigits":2,"numericCode":971},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"ALL","fractionDigits":2,"numericCode":8},{"code":"DZD","fractionDigits":2,"numericCode":12},{"code":"USD","fractionDigits":2,"numericCode":840},{"code":"EUR","fractionDigits":2,"numericCode":978},{"code":"AOA","fractionDigits":2,"numericCode":973},{"code":"XCD","fractionDigits":2,"numericCode":951},{"code":null,"fractionDigits":0,"numericCode":0},{"code"
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
function A1u(){return {"":{"value":"CYP"},"PR":{"value":"USD"},"PT":{"value":"EUR"},"PW":{"value":"USD"},"PY":{"value":"PYG"},"QA":{"value":"QAR"},"AC":{"value":"SHP"},"AD":{"value":"EUR"},"AE":{"value":"AED"},"AF":{"value":"AFN"},"AG":{"value":"XCD"},"AI":{"value":"XCD"},"AL":{"value":"ALL"},"AM":{"value":"AMD"},"AN":{"value":"ANG"},"AO":{"value":"AOA"},"242":{"value":"Brazzaville"},"AQ":{"value":""},"AR":{"value":"ARS"},"243":{"value":"Kinshasa"},"AS":{"value":"USD"},"AT":{"value":"EUR"},"RE":{"value":"EUR"}
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
function AAl(){var a=this;B.call(a);a.A4=null;a.rc=null;a.p9=null;a.pm=null;a.l6=0;a.pU=0;a.s8=0;a.rD=0;a.q3=0;a.pb=0;a.l7=0;a.br=null;a.u=0;a.nM=0;}
function KW(a,b,c){var d,e,f,g,h,i;d=BO();e=new I;K(e);a:{b:{c:while(true){if(a.u>=N(a.br))break a;d:{f=P(a.br,a.u);switch(f){case 35:case 48:if(!b)break a;d=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(858)),b),C(848)),g);Bd(d,J(h));M(d);case 37:if(e.B>0){Br(d,Kn(J(e)));e.B=0;}Br(d,new NY);a.u=a.u+1|0;a.nM=100;break d;case 39:f=a.u+1|0;a.u=f;i=GA(a.br,39,f);if(i<0){d=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(859)),b),C(860)),g);Bd(d,J(h));M(d);}f=a.u;if(i!=f)BG(e,Cd(a.br,f,i));else Bl(e,39);a.u=i+1|0;break d;case 45:if
(e.B>0){Br(d,Kn(J(e)));e.B=0;}Br(d,new Lv);a.u=a.u+1|0;break d;case 46:case 69:break c;case 59:break b;case 164:if(e.B>0){Br(d,Kn(J(e)));e.B=0;}Br(d,new MK);a.u=a.u+1|0;break d;case 8240:if(e.B>0){Br(d,Kn(J(e)));e.B=0;}Br(d,new PJ);a.u=a.u+1|0;a.nM=1000;break d;default:}Bl(e,f);a.u=a.u+1|0;}}d=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(858)),b),C(848)),g);Bd(d,J(h));M(d);}if(c){d=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(858)),b),C(848)),g);Bd(d,J(h));M(d);}}if(e.B>0)Br(d,Kn(J(e)));return FE(d,O(DF,d.r));}
function AH9(a,b){var c,d,e,f,g,h;AMa(a,b);if(a.u<N(a.br)&&P(a.br,a.u)==46){a.u=a.u+1|0;c=0;d=0;e=0;a:{b:while(true){if(a.u>=N(a.br))break a;c:{switch(P(a.br,a.u)){case 35:break;case 44:f=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(861)),b),C(848)),g);Bd(f,J(h));M(f);case 46:f=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(862)),b),C(848)),g);Bd(f,J(h));M(f);case 48:if(c)break b;d=d+1|0;e=e+1|0;break c;default:break a;}d=d+1|0;c=1;}a.u=a.u+1|0;}f=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(863)),b),C(848)),
g);Bd(f,J(h));M(f);}if(b){a.q3=d;a.rD=e;a.l7=d?0:1;}}if(a.u<N(a.br)&&P(a.br,a.u)==69){a.u=a.u+1|0;c=0;d:{e:while(true){if(a.u>=N(a.br))break d;switch(P(a.br,a.u)){case 35:case 44:case 46:case 69:break e;case 48:break;default:break d;}c=c+1|0;a.u=a.u+1|0;}f=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(864)),b),C(848)),g);Bd(f,J(h));M(f);}if(!c){f=new Bv;b=a.u;g=a.br;h=new I;K(h);G(G(R(G(h,C(865)),b),C(848)),g);Bd(f,J(h));M(f);}if(b)a.pb=c;}}
function AMa(a,b){var c,d,e,f,g,h,i,j,k;c=a.u;d=1;e=0;f=0;g=c;a:{b:while(true){if(a.u>=N(a.br))break a;c:{d:{switch(P(a.br,a.u)){case 35:if(!d){h=new Bv;b=a.u;i=a.br;j=new I;K(j);G(G(R(G(j,C(866)),b),C(848)),i);Bd(h,J(j));M(h);}e=e+1|0;break c;case 44:break d;case 48:break;default:break a;}d=0;e=e+1|0;f=f+1|0;break c;}k=a.u;if(g==k)break b;if(b)a.l6=k-g|0;g=k+1|0;}a.u=a.u+1|0;}h=new Bv;i=a.br;j=new I;K(j);G(G(R(G(j,C(867)),k),C(848)),i);Bd(h,J(j));M(h);}if(!e){h=new Bv;b=a.u;i=a.br;j=new I;K(j);G(G(R(G(j,C(868)),
b),C(848)),i);Bd(h,J(j));M(h);}d=a.u;if(g==d){h=new Bv;i=a.br;j=new I;K(j);G(G(R(G(j,C(869)),d),C(848)),i);Bd(h,J(j));M(h);}if(b&&g>c)a.l6=d-g|0;if(b){a.s8=e;a.pU=f;}}
var Lv=H();
function AXI(a,b){return b instanceof Lv;}
var PJ=H();
function A2K(a,b){return b instanceof PJ;}
var MK=H();
function ASR(a,b){return b instanceof MK;}
var NY=H();
function ATX(a,b){return b instanceof NY;}
$rt_packages([-1,"java",0,"util",1,"regex",0,"text",0,"lang",-1,"org",5,"teavm",6,"classlib",7,"impl",8,"unicode",5,"sudu",10,"experiments",11,"editor",12,"ui",13,"window",12,"worker",15,"diff",12,"menu",11,"parser",18,"common",19,"tree",19,"graph",21,"node",22,"ref",22,"decl",11,"ui",25,"window",25,"fs",11,"fonts",11,"js",11,"diff",11,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bB",Bdu(AWP),"J",Bdt(AJM)],U3,0,B,[],0,3,0,0,0,AAw,0,B,[],3,3,0,0,0,Z1,0,B,[],3,3,0,0,0,AHu,0,B,[AAw,Z1],0,3,0,0,["J",Bdt(AWk)],AN5,0,B,[],4,0,0,0,0,ANR,0,B,[],4,3,0,0,0,HT,0,B,[],0,3,0,0,0,Fb,0,HT,[],0,3,0,0,0,Bx,0,Fb,[],0,3,0,0,0,AEz,0,Bx,[],0,3,0,0,0,CU,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,LA,0,B,[],3,3,0,0,0,BE,"String",4,B,[CU,CL,LA],0,3,[0,0,0],EQ,["sb",Bdu(P),"hb",Bdt(N),"J",Bdt(ASI),"bB",Bdu(Bj),"nO",Bdt(La),"n$",Bdu(AUm)],Gt,0,HT,[],0,3,0,0,0,Jo,0,Gt,[],0,3,0,0,0,AOy,
0,Jo,[],0,3,0,0,0,Dm,0,B,[CU],1,3,0,0,0,FF,0,Dm,[CL],0,3,0,0,["J",Bdt(A0F),"bB",Bdu(A_V),"n$",Bdu(A6B)],HN,0,B,[CU,LA],0,0,0,0,["lo",Bdu(OG),"J",Bdt(J)],KU,0,B,[],3,3,0,0,0,I,0,HN,[KU],0,3,0,0,["r3",Bdx(A6x),"rl",Bdw(ATC),"sb",Bdu(A$C),"hb",Bdt(ABq),"J",Bdt(DR),"lo",Bdu(AV5),"sk",Bdv(A6X)],FR,0,Jo,[],0,3,0,0,0,APK,0,FR,[],0,3,0,0,0,AOu,0,FR,[],0,3,0,0,0,AFN,0,B,[],3,3,0,0,0,Dr,0,B,[],3,3,0,0,0,AB6,0,B,[],3,0,0,0,0,Lo,0,B,[AFN,Dr,AB6],1,3,0,0,["b7",Bdt(Fe)],AEy,0,Lo,[],0,3,0,0,0,ANs,0,B,[],0,3,0,0,0,AQu,0,B,
[],4,3,0,0,0,BZ,0,B,[],3,3,0,0,0,B$,0,B,[BZ],3,3,0,0,0,AFZ,0,B,[B$],0,3,0,0,["bj",Bdu(A__)],ALt,0,B,[],0,3,0,0,0,YP,0,B,[BZ],3,3,0,0,0,ALi,0,B,[YP],1,3,0,0,["Tz",Bdu(A2i),"Oj",Bdv(A4W)],AJp,0,B,[],3,3,0,0,0,AQe,0,B,[],3,3,0,0,0,AL2,0,B,[],3,3,0,0,0,NJ,"FontConfigJs",28,B,[],0,3,[0,0,0],0,0,AJX,0,B,[BZ],1,3,0,0,0,AF0,0,B,[B$],0,3,0,0,["bj",Bdu(ARa)],AFY,0,B,[B$],0,3,0,0,["bj",Bdu(A$R)],Ng,0,B,[],4,3,0,0,0,AL1,0,B,[],4,3,0,0,0,AOn,0,B,[],0,3,0,0,0,AQ7,0,B,[],4,3,0,0,0]);
$rt_metadata([V3,0,B,[B$],0,3,0,0,["bj",Bdu(A35)],AMf,0,B,[BZ],1,3,0,0,0,ANI,0,B,[],0,3,0,0,0,AG7,0,B,[BZ],3,3,0,0,0,AOY,0,B,[AG7],1,3,0,0,["R3",Bdu(A5F),"Zf",Bdt(AWI)],AKM,0,B,[BZ],1,3,0,0,0,Hb,0,B,[],3,3,0,0,0,V8,0,B,[Hb],0,3,0,0,0,BN,0,Bx,[],0,3,0,0,0,APv,0,B,[],4,3,0,0,0,EU,0,Bx,[],0,3,0,0,0,Ki,0,Bx,[],0,3,0,0,0,Dp,0,B,[CL],0,3,0,0,0,ZW,0,B,[BZ],3,3,0,0,0,AE8,0,B,[ZW],3,3,0,0,0,FL,0,B,[BZ],3,3,0,0,0,ANv,0,B,[BZ,AE8,FL],1,3,0,0,["Qx",Bdt(A7G),"Rf",Bdu(A97),"a0b",Bdu(A9T),"U6",Bdu(A39),"Ys",Bdu(ARt),"Tw",
Bdt(ATv),"Zc",Bdv(A93),"Ry",Bdw(AVO),"Sa",Bdt(A2Z),"Sv",Bdt(A8t),"XD",Bdu(A$M),"VO",Bdt(AW9),"a0y",Bdu(AVk),"O6",Bdt(AXy),"Wv",Bdt(A1L),"a0o",Bdt(AWg),"L0",Bdu(AR$),"RE",Bdt(A_Y),"XW",Bdv(A54),"VB",Bdv(AW4),"Y5",Bdv(A0R),"YJ",Bdt(A2b),"ZA",Bdt(AU5),"Si",Bdu(ATG),"Xk",Bdu(AUw),"U0",Bdv(A6g),"OH",Bdt(AWp),"R2",Bdu(A23),"TK",Bdt(AUv),"SE",Bdt(AYH),"UK",Bdu(ARg),"O5",Bdu(A0c),"a0k",Bdu(A3p),"Oa",Bdt(A$G),"Vq",Bdv(A3z),"Y1",Bdu(A8H),"Ov",Bdt(AY_),"T_",Bdv(AX2),"My",Bdv(AXF),"Wd",Bdt(AZ8),"Sj",Bdu(A1f),"NL",Bdw(A7S),
"M2",Bdt(ATB),"NQ",Bdv(A3Q),"VH",Bdt(A2A),"QW",Bdt(A_S),"XA",Bdt(AX0),"Le",Bdt(A2y),"Qq",Bdv(AX3),"TM",Bdu(A4j),"Xh",Bdu(AUH),"MT",Bdt(A9s)],AHb,0,B,[],3,3,0,0,0,V6,0,B,[AHb],0,3,0,0,0,ACE,0,B,[],0,3,0,0,0,W4,0,B,[B$],0,3,0,0,["bj",Bdu(ARm)],AOI,0,B,[],4,3,0,0,0,ACo,0,B,[FL],3,3,0,0,0,UO,0,B,[FL],3,3,0,0,0,AD1,0,B,[FL],3,3,0,0,0,Wu,0,B,[FL],3,3,0,0,0,AIl,0,B,[FL],3,3,0,0,0,AGA,0,B,[FL,ACo,UO,AD1,Wu,AIl],3,3,0,0,0,AN2,0,B,[BZ,AGA],1,3,0,0,["Ya",Bdv(A79),"ZH",Bdv(A6z),"M6",Bdw(AU7),"Vv",Bdu(ASn),"PX",Bdw(A4E)],Bv,
0,Bx,[],0,3,0,0,0,AI2,0,Bx,[],0,3,0,0,0,Jk,0,BN,[],0,3,0,0,0,ABU,0,B,[],3,3,0,0,0,AFd,0,B,[ABU],0,3,0,0,0,Bz,0,B,[],3,3,0,0,0,AO6,0,B,[Bz],0,3,0,0,0,T,0,B,[],3,3,0,0,0,AO7,0,B,[T],0,3,0,0,0,AEc,0,B,[BZ],3,3,0,0,0,WL,0,B,[AEc],0,3,0,0,["O8",Bdu(A9D)],WJ,0,B,[T],0,3,0,0,0,ADg,0,B,[BZ],3,3,0,0,0,WK,0,B,[ADg],0,3,0,0,["F3",Bdv(AXK)],AMp,0,B,[BZ],1,3,0,0,0,CM,0,B,[BZ],3,3,0,0,0,WI,0,B,[CM],0,3,0,0,["cZ",Bdu(A14)],ADu,0,B,[],3,3,0,0,0,Py,0,B,[ADu],1,3,0,0,0,Vv,0,Py,[],0,3,0,0,0,AJ6,0,B,[],0,3,0,0,0]);
$rt_metadata([PK,0,B,[],1,3,0,0,0,XK,0,PK,[],0,3,0,0,0,ACS,0,B,[],0,3,0,0,0,AHy,0,B,[CM],0,3,0,0,["cZ",Bdu(A8n)],AHz,0,B,[CM],0,3,0,0,["cZ",Bdu(A8z)],AHA,0,B,[CM],0,3,0,0,["cZ",Bdu(AW7)],AHB,0,B,[CM],0,3,0,0,["cZ",Bdu(A6V)],AHC,0,B,[CM],0,3,0,0,["cZ",Bdu(A6$)],AHD,0,B,[CM],0,3,0,0,["cZ",Bdu(AYN)],AHE,0,B,[CM],0,3,0,0,["cZ",Bdu(AU6)],AHF,0,B,[CM],0,3,0,0,["cZ",Bdu(Bal)],AHG,0,B,[CM],0,3,0,0,["cZ",Bdu(AUu)],AHH,0,B,[CM],0,3,0,0,["cZ",Bdu(AZz)],Zw,0,B,[CM],0,3,0,0,["cZ",Bdu(A_U)],Zx,0,B,[CM],0,3,0,0,["cZ",Bdu(AWE)],Zy,
0,B,[CM],0,3,0,0,["cZ",Bdu(AW_)],Zz,0,B,[CM],0,3,0,0,["cZ",Bdu(A8J)],AGj,0,B,[],3,3,0,0,0,AGt,0,B,[AGj],0,3,0,0,0,AGs,0,B,[CM],0,3,0,0,["cZ",Bdu(AVT)],Yl,0,B,[],3,3,0,0,["f6",Bdu(A1W)],IA,0,B,[Yl],3,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],Gx,0,B,[IA],1,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o),"fq",Bdt(Fk),"tc",Bdu(A9I)],Pp,0,B,[IA],3,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],Om,0,B,[Pp],3,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],E5,0,Gx,[Om],1,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o),"rV",Bdu(AYU),"cx",Bdt(Ci),"xu",Bdv(AYj),"qy",Bdv(A$w),
"n2",Bdu(A8G),"bB",Bdu(AXm)],NU,0,E5,[],1,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],QV,0,B,[IA],3,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],AIK,0,B,[QV,Pp],3,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],Nm,0,NU,[AIK],0,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],M4,0,B,[],3,3,0,0,0,EI,0,B,[M4],1,3,0,0,0,Dq,0,B,[],3,3,0,0,0,Zc,0,B,[M4],3,3,0,0,0,Ro,0,B,[Zc],3,3,0,0,0,AB_,0,EI,[Dq,CU,Ro],0,3,0,0,0,AE2,0,B,[Bz],0,3,0,0,0,AMA,0,B,[],0,3,0,0,0,Co,0,B,[],3,3,0,0,0,CH,0,B,[],3,3,0,0,["dq",Bdu(A6u),"co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80)],Eg,
0,B,[],3,3,0,0,0,EC,0,B,[],3,3,0,0,0,CY,0,B,[EC],3,3,0,0,0,Gv,0,B,[],3,3,0,0,0,CK,0,B,[],3,3,0,0,0,GQ,0,B,[CK],3,3,0,0,0,T7,0,B,[Dr],0,3,0,0,0,Bg,"V2i",31,B,[],0,3,[0,0,0],0,["J",Bdt(AM$),"bB",Bdu(AVI)],AHN,0,B,[],0,3,0,0,0,AL4,0,B,[],0,3,0,0,0]);
$rt_metadata([ANP,0,B,[],3,3,0,0,0,ADe,0,B,[],0,3,0,0,0,PZ,0,B,[],0,3,0,0,0,DC,0,PZ,[],0,3,0,0,0,AQr,0,DC,[],0,3,0,0,0,Gn,0,DC,[],0,3,0,0,0,ADL,0,DC,[],0,3,0,0,0,AKR,0,Gn,[],0,3,0,0,0,Iu,0,Gn,[],0,3,0,0,0,R2,0,Iu,[],0,3,0,0,0,AMQ,0,Iu,[],0,3,0,0,0,AN4,0,Gn,[],0,3,0,0,0,APM,0,DC,[],0,3,0,0,0,AJF,0,DC,[],0,3,0,0,0,AEL,0,B,[BZ],3,3,0,0,0,AQ6,0,B,[AEL],3,3,0,0,0,ADd,0,B,[Dr],0,3,0,0,0,TU,0,B,[],0,3,0,0,0,Cu,0,B,[CL,CU],1,3,0,0,0,H7,0,Cu,[],12,3,0,ID,0,LS,0,B,[Hb],0,3,0,0,["sp",Bdv(OD)],N6,0,B,[],3,3,0,0,0,M_,0,
B,[N6],3,3,0,0,0,PV,0,B,[],3,3,0,0,0,HP,0,B,[M_,PV],1,3,0,0,0,Oy,0,HP,[],0,3,0,0,0,AKu,0,Oy,[],0,3,0,0,0,IJ,0,HP,[],1,3,0,0,0,Nf,0,IJ,[],0,3,0,0,["oE",Bdw(AVM)],EN,0,Cu,[],12,3,0,AQL,0,Op,0,B,[CL],1,3,0,0,0,N9,0,Op,[],0,3,0,AKp,0,ACe,0,B,[],0,3,0,0,0,I9,0,Cu,[],12,0,0,AK$,0,Pr,0,IJ,[],0,3,0,0,["oE",Bdw(AT_)],AL0,0,Bv,[],0,3,0,0,0,NG,0,Fb,[],0,3,0,0,0,CR,0,B,[Dr],1,3,0,0,["cU",Bdu(A_T)],N8,0,B,[BZ],3,3,0,0,0,AIE,0,B,[N8],0,3,0,0,["bj",Bdu(AZf)],AIF,0,B,[N8],0,3,0,0,["bj",Bdu(ASB)],AFr,0,B,[B$],0,3,0,0,["bj",
Bdu(AZb)],QS,0,B,[],0,3,0,0,0,Jg,0,B,[],1,3,0,0,0,AEX,0,B,[],3,3,0,0,0,M8,0,Jg,[CL,KU,LA,AEX],1,3,0,0,0,OU,0,Jg,[CL],1,3,0,0,0,JJ,0,B,[],0,3,0,Ik,0,AO0,0,B,[BZ],1,3,0,0,0,Mp,0,M8,[],1,0,0,0,0]);
$rt_metadata([AKJ,0,Mp,[],0,0,0,0,0,M1,0,B,[],1,3,0,0,0,P7,0,B,[],0,3,0,0,0,Jj,0,B,[],0,3,0,0,0,SM,0,Jj,[],0,3,0,0,0,AL_,0,B,[],0,3,0,0,0,QQ,0,Jj,[],0,3,0,0,0,WX,0,B,[BZ],3,3,0,0,0,RM,0,B,[WX],0,3,0,0,["Sp",Bdu(A6H)],W,0,B,[],3,3,0,0,0,AGF,0,B,[W],0,3,0,0,["g",Bdu(P9)],AH3,0,OU,[],0,0,0,0,0,Pd,0,B,[],4,3,0,A6f,0,Pv,0,M1,[],1,3,0,0,0,S$,0,Pv,[],0,3,0,0,0,H8,0,Fb,[],0,3,0,0,0,AJf,0,CR,[],0,3,0,0,["bT",Bdt(AWz),"b3",Bdv(AVj)],IQ,0,CR,[],1,3,0,0,["b3",Bdv(AK2)],Ca,0,IQ,[],1,3,0,0,["bT",Bdt(AT3),"b3",Bdv(GR),"cU",
Bdu(Sl)],EK,0,B,[],3,3,0,0,0,PN,0,Ca,[EK],0,3,0,0,["ir",Bdt(A1C),"b3",Bdv(ARe)],AL$,0,PN,[],0,3,0,0,["ir",Bdt(AXf)],AMy,0,B,[],0,3,0,0,0,AJu,0,B,[],0,3,0,0,0,J9,0,B,[BZ],3,3,0,0,0,AAE,0,B,[J9],0,3,0,0,["bj",Bdu(AUf)],AAD,0,B,[J9],0,3,0,0,["bj",Bdu(AXW)],AAB,0,B,[B$],0,3,0,0,["bj",Bdu(AYr)],AAA,0,B,[B$],0,3,0,0,["bj",Bdu(A3S)],WN,0,B,[W],0,3,0,0,["g",Bdu(A_Z)],WP,0,B,[W],0,3,0,0,["g",Bdu(A6A)],YH,0,B,[Bz],0,3,0,0,["K",Bdu(A9l)],YE,0,B,[Bz],0,3,0,0,["K",Bdu(AWW)],YD,0,B,[Bz],0,3,0,0,["K",Bdu(A4V)],YG,0,B,[Bz],
0,3,0,0,["K",Bdu(AV3)],YF,0,B,[Bz],0,3,0,0,["K",Bdu(A5s)],YK,0,B,[Bz],0,3,0,0,["K",Bdu(A7l)],YJ,0,B,[Bz],0,3,0,0,["K",Bdu(AZx)],YM,0,B,[Bz],0,3,0,0,["K",Bdu(A2R)],YL,0,B,[Bz],0,3,0,0,["K",Bdu(AZt)],YI,0,B,[Bz],0,3,0,0,["K",Bdu(A6U)],AEe,0,B,[Bz],0,3,0,0,["K",Bdu(A4Q)],AEf,0,B,[Bz],0,3,0,0,["K",Bdu(AXL)],AEg,0,B,[Bz],0,3,0,0,["K",Bdu(ATe)],AEh,0,B,[Bz],0,3,0,0,["K",Bdu(A2c)],AEo,0,B,[Bz],0,3,0,0,["K",Bdu(A9R)],AEp,0,B,[Bz],0,3,0,0,["K",Bdu(A1Q)],AEq,0,B,[Bz],0,3,0,0,["K",Bdu(A9N)],AEr,0,B,[Bz],0,3,0,0,["K",Bdu(ARH)],AEs,
0,B,[Bz],0,3,0,0,["K",Bdu(A4C)]]);
$rt_metadata([AEt,0,B,[Bz],0,3,0,0,["K",Bdu(AWv)],AEj,0,B,[Bz],0,3,0,0,["K",Bdu(ARW)],AEk,0,B,[Bz],0,3,0,0,["K",Bdu(A5_)],AEl,0,B,[Bz],0,3,0,0,["K",Bdu(AV6)],AEm,0,B,[Bz],0,3,0,0,["K",Bdu(AUG)],AEn,0,B,[Bz],0,3,0,0,["K",Bdu(A3h)],AD5,0,B,[Bz],0,3,0,0,["K",Bdu(ASv)],AD6,0,B,[Bz],0,3,0,0,["K",Bdu(A74)],AD7,0,B,[Bz],0,3,0,0,["K",Bdu(A0I)],AD8,0,B,[Bz],0,3,0,0,["K",Bdu(A_G)],AD9,0,B,[Bz],0,3,0,0,["K",Bdu(A25)],AD2,0,B,[Bz],0,3,0,0,["K",Bdu(AXr)],AD3,0,B,[Bz],0,3,0,0,["K",Bdu(A9$)],AD4,0,B,[Bz],0,3,0,0,["K",Bdu(A3Y)],JZ,
0,B,[],0,3,0,0,0,ZP,0,B,[Bz],0,3,0,0,["K",Bdu(A6b)],CS,0,B,[],3,3,0,0,0,AIi,"WindowManager",26,B,[CH,CS],0,3,[0,0,0],0,["dq",Bdu(A2g),"c7",Bdw(ASS),"co",Bdv(AVd),"dn",Bdv(A_r),"eT",Bdv(A6r)],W6,"UiContext",25,B,[Gv,GQ],0,3,[0,0,0],0,["fW",Bdv(A9_),"cb",Bdt(A7V)],ZY,"WindowScene$<init>$lambda$_1_0",12,B,[Eg],0,3,[0,0,0],0,["dB",Bdw(A_j)],ZX,"WindowScene$<init>$lambda$_1_1",12,B,[CY],0,3,[0,0,0],0,["bO",Bdu(ASV)],Ln,0,B,[],0,3,0,0,0,AKG,0,B,[],0,3,0,0,0,AJC,0,B,[],3,3,0,0,0,ANh,0,B,[],0,3,0,0,0,AK8,0,B,[],3,3,
0,0,0,AMZ,0,B,[],0,3,0,0,0,AJD,0,B,[],3,3,0,0,0,AEN,"Scene1$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AX5)],AEM,"Scene1$<init>$lambda$_0_1",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A1O)],Xf,"Window",26,B,[],0,3,[0,0,0],0,0,B_,"V4f",31,B,[],0,3,[0,0,0],0,["bB",Bdu(A1v),"J",Bdt(AST)],Il,0,B_,[],0,3,0,0,0,DL,0,B,[],3,3,0,AUd,0,Cx,0,Cu,[],12,3,0,Xr,0,LF,0,B,[],0,3,0,0,0,J1,0,B,[],0,3,0,0,0,APe,0,B,[],0,3,0,0,0,Eh,0,B,[],3,3,0,A2p,0,AOf,0,B,[],0,3,0,0,["bB",Bdu(A9O)],QM,0,B,[],3,3,0,0,0,AC9,"UiContext$<init>$lambda$_0_0",
25,B,[T],0,3,[0,0,0],0,["e",Bdt(A5Q)],AC8,"UiContext$<init>$lambda$_0_1",25,B,[T],0,3,[0,0,0],0,["e",Bdt(A17)],J$,0,B,[],0,3,0,0,0,LC,0,B,[],4,3,0,0,0,ANQ,0,B,[],0,3,0,0,0,AEH,0,B,[QM],0,3,0,0,0,DE,0,B,[],3,3,0,GG,0,EZ,0,B,[EK],1,3,0,0,0,F2,0,B,[Co],3,3,0,0,["zB",Bdt(A7W),"xD",Bdt(AUo),"fW",Bdv(ARh),"Db",Bdt(A1N)]]);
$rt_metadata([KG,"FileDiffWindow",30,EZ,[F2],0,3,[0,0,0],0,["zB",Bdt(A7W),"xD",Bdt(AUo),"fW",Bdv(ARh),"Db",Bdt(A1N),"eL",Bdu(A9L),"b7",Bdt(A$Z),"n3",Bdu(A20),"bs",Bdu(A$1)],AEV,0,B,[CK],0,3,0,0,["cb",Bdt(A4L)],AKn,0,B,[],4,3,0,0,0,AHW,0,B,[],0,0,0,0,0,Q$,0,B,[J9],0,3,0,0,["bj",Bdu(A1k)],Ra,0,B,[B$],0,3,0,0,["bj",Bdu(A0D)],Q_,0,B,[B$],0,3,0,0,["bj",Bdu(A2T)],CN,0,B,[Dr],0,3,0,0,["b7",Bdt(AY1),"jc",Bdt(A7U),"ek",Bdw(K0),"ej",Bdu(AQI),"cU",Bdu(A3I),"t1",Bdu(AWt),"q4",Bdu(A0Y),"m9",Bdv(A9i),"lE",Bdt(A07),"c7",Bdw(AVa),
"co",Bdv(ASJ),"dn",Bdv(AXk),"gz",Bdv(A$l),"dB",Bdw(A89)],I3,0,CN,[],1,3,0,0,["b7",Bdt(A7R),"ej",Bdu(AXg),"cU",Bdu(A2C),"ek",Bdw(ATw),"c7",Bdw(A$Y),"co",Bdv(A0a),"dn",Bdv(A$$),"gz",Bdv(A6C),"dB",Bdw(AUa),"lE",Bdt(A_n)],Jm,0,I3,[],1,0,0,0,["Gb",Bdt(AWl)],X8,0,Jm,[EK],0,0,0,0,0,ZH,0,B,[T],0,3,0,0,["e",Bdt(A56)],ZG,0,B,[T],0,3,0,0,["e",Bdt(AWq)],KO,0,B,[],3,3,0,0,0,Fr,0,B,[],3,3,0,0,0,LQ,"Diff0",30,Ca,[CH,EK,KO,Fr,Eg,Gv,GQ],0,3,[0,0,0],0,["fW",Bdv(A04),"FS",Bdu(AL5),"cU",Bdu(AXp),"bT",Bdt(ARj),"ss",Bdt(AVr),"qx",
Bdt(AVq),"pY",Bdu(Baq),"l9",Bdu(A6k),"g5",Bdu(ARl),"b3",Bdv(ARz),"eL",Bdu(A1i),"dq",Bdu(A3y),"c7",Bdw(AYV),"co",Bdv(AVC),"dn",Bdv(A_u),"dB",Bdw(AWb),"cb",Bdt(A_o)],Q9,"Diff1",30,LQ,[],0,3,[0,0,0],0,["FS",Bdu(AUX)],LM,0,Ca,[EK,Fr],0,3,0,0,["g5",Bdu(A5Y),"cU",Bdu(A$d),"bT",Bdt(AUV),"ir",Bdt(A_P),"b3",Bdv(ARi),"eL",Bdu(A4F)],QX,0,LM,[],0,3,0,0,["ir",Bdt(A3A)],ANo,0,CR,[],0,3,0,0,["cU",Bdu(ARG),"bT",Bdt(ATF),"b3",Bdv(AV$)],AFH,0,CR,[],0,3,0,0,["cU",Bdu(AXS),"bT",Bdt(A3w),"b3",Bdv(A44)],ABn,"ToolbarDemo",17,Ca,[CH,
CS],0,3,[0,0,0],0,["co",Bdv(A0r),"dn",Bdv(ARS),"eT",Bdv(AVz),"b3",Bdv(AUg),"bT",Bdt(A4w),"dq",Bdu(AWa),"c7",Bdw(ASj)],AFl,"FindUsagesDemo",17,Ca,[CS],0,3,[0,0,0],0,["eT",Bdv(ATr),"b3",Bdv(ASz)],AAJ,"RegionTextureAllocatorDemo",12,IQ,[CH],0,3,[0,0,0],0,["dq",Bdu(A6u),"co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80),"bT",Bdt(A9J),"cU",Bdu(ARy)],C1,0,CR,[],0,3,0,0,["bT",Bdt(Pu),"b3",Bdv(HZ)],Rw,"LineNumbersTest",12,C1,[],0,3,0,0,["bT",Bdt(A6t),"b3",Bdv(A3q)],Mx,0,Ca,[],0,3,0,0,0,AA4,0,Ca,[],0,3,0,0,0,AAm,"RenderTexture",
12,C1,[],0,3,0,0,["cU",Bdu(AU_),"bT",Bdt(A4k),"b3",Bdv(A_K)],V0,"ScissorDemo",12,C1,[],0,3,0,0,["bT",Bdt(Bao),"b3",Bdv(AUR)],AFc,0,CR,[],0,3,0,0,["bT",Bdt(A0G),"b3",Bdv(A4A),"cU",Bdu(A9n)],LD,"ClipboardTest",12,C1,[CH],0,3,[0,0,0],0,["dq",Bdu(A6u),"co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(AVY)],VJ,"CodiconDemo",12,C1,[],0,3,0,0,["bT",Bdt(A1t)],H2,0,CR,[CH],1,3,0,0,["dq",Bdu(A6u),"co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80),"bT",Bdt(AKf)],WH,"LineShaderDemo1",12,H2,[],0,3,[0,0,0],0,["co",Bdv(A0r),"dn",Bdv(ARS),"c7",
Bdw(A80),"b3",Bdv(A86),"dq",Bdu(A$a)],WG,"LineShaderDemo2",12,H2,[],0,3,[0,0,0],0,["co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80),"dq",Bdu(A_2),"bT",Bdt(ATm),"b3",Bdv(AR4)],ZI,"WindowsDemo",14,Ca,[CS],0,3,[0,0,0],0,["eT",Bdv(AVy)],AAQ,"UiContext$1",25,B,[CH],0,0,[W6,0,0],0,["co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80),"dq",Bdu(A9F)],UL,"ProjectViewDemo",12,Ca,[CS],0,3,[0,0,0],0,["eT",Bdv(A4D)],ADI,"MergeButtonsTest",25,C1,[CH],0,3,[0,0,0],0,["c7",Bdw(A80),"b3",Bdv(A2S),"bT",Bdt(AZ7),"co",Bdv(A0p),"dn",Bdv(A6j),"dq",
Bdu(A4Y)],T2,"EditorWindowDemo",12,Ca,[CS],0,3,[0,0,0],0,["eT",Bdv(A5r)],Xk,"VScrollTest",12,C1,[CH],0,3,[0,0,0],0,["c7",Bdw(A80),"bT",Bdt(ARF),"b3",Bdv(A72),"co",Bdv(A_A),"dn",Bdv(A8m),"dq",Bdu(ASU)],E1,"WindowDemo",25,Ca,[CS],0,3,[0,0,0],0,["kN",Bdt(A30),"rz",Bdt(AWi),"pM",Bdu(ANX),"eT",Bdv(A9S)],ACX,"FileViewDemo",25,E1,[CS],0,3,[0,0,0],0,["kN",Bdt(A7J),"pM",Bdu(A9d)],SZ,"EditorInViewDemo",12,E1,[CS,EK,Fr],0,3,[0,0,0],0,["kN",Bdt(ASD),"rz",Bdt(A2q),"pM",Bdu(A_4),"eL",Bdu(AZs),"g5",Bdu(AYM)],R1,"DiffMiddleDemo",
30,E1,[CS],0,3,[0,0,0],0,["kN",Bdt(A4Z)],AHa,"SinDemo",12,CR,[CH],0,3,[0,0,0],0,["dq",Bdu(A6u),"co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80),"b3",Bdv(A_X),"bT",Bdt(A5P),"cU",Bdu(AZd)],ADS,"FolderTransferDemo",30,E1,[CS],0,3,[0,0,0],0,["kN",Bdt(AUW)],AAn,0,Ca,[EK],0,3,0,0,["b3",Bdv(ATp)],ALO,"FolderDiff",30,Ca,[CS],0,3,[0,0,0],0,["eT",Bdv(A1b)]]);
$rt_metadata([AQJ,0,B,[],0,3,0,0,0,AKN,0,B,[],0,3,0,0,0,TD,0,B,[],3,0,0,0,0,N5,0,B,[F2],3,3,0,0,["zB",Bdt(A7W),"xD",Bdt(AUo),"fW",Bdv(ARh),"Db",Bdt(A1N)],AKm,"EditorComponent",12,CN,[F2,CH,KO,TD,N5],0,3,[0,0,0],0,["ek",Bdw(N7),"m9",Bdv(AX$),"rx",Bdv(A_0),"xD",Bdt(A45),"zB",Bdt(A2E),"ss",Bdt(KA),"qx",Bdt(LK),"pY",Bdu(JB),"l9",Bdu(AYP),"lE",Bdt(Ny),"b7",Bdt(A29),"cU",Bdu(M9),"sq",Bdu(AOB),"jc",Bdt(AMk),"rH",Bdt(AZQ),"ej",Bdu(A7d),"mQ",Bdt(Xi),"l0",Bdt(Xh),"iZ",Bdu(AYx),"mq",Bdt(AYm),"nu",Bdt(A1K),"dB",Bdw(Ns),
"dn",Bdv(Wm),"co",Bdv(Z$),"c7",Bdw(Rh),"dq",Bdu(A21),"gz",Bdv(My),"bs",Bdu(A_B),"fW",Bdv(Kd),"Db",Bdt(A0N),"J",Bdt(A4p)],Q4,0,B,[W],0,3,0,0,["g",Bdu(A$5)],DH,0,B,[],3,3,0,0,0,Q3,0,B,[DH],0,3,0,0,["dT",Bdw(AQ_)],Q6,0,B,[DH],0,3,0,0,["dT",Bdw(AZY)],Q5,0,B,[DH],0,3,0,0,["dT",Bdw(AYf)],ANl,0,B,[],0,3,0,0,0,AKh,0,CN,[],0,3,0,0,["ej",Bdu(ALG)],TV,0,B,[W],0,3,0,0,["g",Bdu(AZp)],TS,0,B,[DH],0,3,0,0,["dT",Bdw(AU$)],TT,0,B,[DH],0,3,0,0,["dT",Bdw(A3Z)],TM,0,B,[W],0,3,0,0,["g",Bdu(A$e)],TN,0,B,[DH],0,3,0,0,["dT",Bdw(AXl)],TK,
0,B,[DH],0,3,0,0,["dT",Bdw(A4d)],TL,"Diff0$<init>$lambda$_0_6",30,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A8T)],Hk,"CtrlO",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AW3)],TH,0,B,[W],0,3,0,0,["g",Bdu(A$i)],TI,"Diff0$<init>$lambda$_0_8",30,B,[CY],0,3,[0,0,0],0,["bO",Bdu(AWH)],ACB,0,B,[W],0,3,0,0,["g",Bdu(A62)],ACA,"Editor0$<init>$lambda$_0_1",12,B,[CY],0,3,[0,0,0],0,["bO",Bdu(AXs)],AMm,0,B,[],3,3,0,0,0,W_,"Editor1$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A8C)],LB,0,B,[],0,3,0,0,0,AMS,"TextRect",12,LB,[],0,3,[0,0,0],
0,0,AJ_,0,B,[],0,3,0,0,0,Xl,"DemoScene1$MyInputListener",12,B,[CH],0,0,[ANo,0,"MyInputListener"],0,["dq",Bdu(A3x),"c7",Bdw(ARs),"co",Bdv(A3o),"dn",Bdv(A2I)],AC5,"DemoScene1$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A5o)],AC4,"DemoScene1$<init>$lambda$_0_1",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AUp)],AC3,"DemoScene1$<init>$lambda$_0_2",12,B,[Gv],0,3,[0,0,0],0,["fW",Bdv(A6y)],AC2,"DemoScene1$<init>$lambda$_0_3",12,B,[T],0,3,[0,0,0],0,["e",Bdt(A2e)],AC1,"DemoScene1$<init>$lambda$_0_4",12,B,[CY],0,3,[0,0,0],
0,["bO",Bdu(AX1)],AC0,"DemoScene1$<init>$lambda$_0_5",12,B,[Eg],0,3,[0,0,0],0,["dB",Bdw(A$N)],ALP,0,B,[],3,3,0,0,0,AAj,"CleartypeColors$MyInputListener",12,B,[CH],0,0,[AFH,0,"MyInputListener"],0,["dq",Bdu(A6u),"co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(AT2)],AAd,0,B,[],0,3,0,0,0,AK9,"Toolbar",25,B,[],0,3,[0,0,0],0,0,AGd,"ToolbarDemo$<init>$lambda$_0_0",17,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AWS)],AF_,"ToolbarDemo$<init>$lambda$_0_1",17,B,[CY],0,3,[0,0,0],0,["bO",Bdu(AZy)],AGa,0,B,[T],0,3,0,0,["e",Bdt(Bav)],AGb,0,B,[T],
0,3,0,0,["e",Bdt(ASd)],Bw,"ToolbarItem",25,B,[],0,3,[0,0,0],0,0,XX,"FindUsagesDemo$<init>$lambda$_0_0",17,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A1w)],XY,"FindUsagesDemo$<init>$lambda$_0_1",17,B,[CY],0,3,[0,0,0],0,["bO",Bdu(ART)],J_,0,B,[],3,3,0,0,0,ANJ,0,E5,[Dq,CU,J_],0,3,0,0,["rT",Bdu(A6o),"j2",Bdu(BU),"du",Bdt(APN),"rV",Bdu(Br),"qy",Bdv(AOS),"n2",Bdu(Fs),"tc",Bdu(AMd),"kD",Bdt(Md),"xu",Bdv(ANT),"f6",Bdu(Hh),"J",Bdt(APO)],AMz,0,B,[],0,3,0,0,0]);
$rt_metadata([Rj,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",12,B,[CS],0,3,[0,0,0],0,["eT",Bdv(AXD)],Ri,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AVc)],AEd,0,B,[],3,3,0,0,0,ANp,0,B,[AEd],0,3,0,0,0,AJ9,0,B,[Dr],0,3,0,0,0,AMM,0,B,[],0,3,0,0,0,ACl,0,B,[W],0,3,0,0,["g",Bdu(A7M)],Yd,"LineNumbersTest$LineNumbersInputListener",12,B,[CH],0,0,[Rw,0,"LineNumbersInputListener"],0,["c7",Bdw(A80),"co",Bdv(A60),"dn",Bdv(AZO),"dq",Bdu(A_q)],ACm,"LineNumbersTest$<init>$lambda$_0_1",
12,B,[Eg],0,3,[0,0,0],0,["dB",Bdw(A4x)],QA,0,B,[],3,3,0,0,0,Tj,"SelectFileTest$<init>$lambda$_0_0",12,B,[CY],0,3,[0,0,0],0,["bO",Bdu(AXq)],Ti,"SelectFileTest$<init>$lambda$_0_1",12,B,[CS],0,3,[0,0,0],0,["eT",Bdv(A1D)],Uu,"WorkerTest$<init>$lambda$_0_0",15,B,[CY],0,3,[0,0,0],0,["bO",Bdu(A1x)],Ut,0,B,[W],0,3,0,0,["g",Bdu(A9r)],AGl,"RenderTexture$MyInputListener",12,B,[CH],0,0,[AAm,0,"MyInputListener"],0,["dn",Bdv(ARS),"c7",Bdw(A80),"dq",Bdu(A8q),"co",Bdv(A1j)],ALf,0,B,[],0,3,0,0,0,ACC,"TextureRegionTestScene$MListener",
12,B,[CH],0,0,[AFc,0,"MListener"],0,["c7",Bdw(A80),"co",Bdv(AVn),"dn",Bdv(A2F),"dq",Bdu(AT8)],ZB,"TextureRegionTestScene$<init>$lambda$_0_0",12,B,[Eg],0,3,[0,0,0],0,["dB",Bdw(A$K)],AH0,"ClipboardTest$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AVp)],AHZ,"ClipboardTest$<init>$lambda$_0_1",12,B,[Gv],0,3,[0,0,0],0,["fW",Bdv(A6G)],AHY,"ClipboardTest$<init>$lambda$_0_2",12,B,[Gv],0,3,[0,0,0],0,["fW",Bdv(ATl)],AHX,"ClipboardTest$<init>$lambda$_0_3",12,B,[GQ],0,3,[0,0,0],0,["cb",Bdt(AWF)],AH1,"ClipboardTest$<init>$lambda$_0_4",
12,B,[GQ],0,3,[0,0,0],0,["cb",Bdt(A95)],Vl,"CodiconDemo$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(ATa)],RN,"WindowsDemo$<init>$lambda$_0_0",14,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A7P)],RP,"WindowsDemo$<init>$lambda$_0_1",14,B,[CY],0,3,[0,0,0],0,["bO",Bdu(A5J)],ABo,"ProjectViewDemo$<init>$lambda$_0_0",12,B,[CY],0,3,[0,0,0],0,["bO",Bdu(ATK)],Ql,0,B,[Dr],0,3,0,0,["b7",Bdt(A4g)],AG9,0,B,[W],0,3,0,0,["g",Bdu(A8h)],API,0,B,[],0,3,0,0,0,AG$,"MergeButtonsTest$<init>$lambda$_0_1",25,B,[Eg],0,3,[0,0,0],0,["dB",
Bdw(A0P)],AG_,"MergeButtonsTest$<init>$lambda$_0_2",25,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A_i)],Sm,0,B,[],0,3,0,0,0,Sp,0,B,[W],0,3,0,0,["g",Bdu(A$P)],So,"EditorWindowDemo$<init>$lambda$_0_1",12,B,[CY],0,3,[0,0,0],0,["bO",Bdu(A4O)],Yi,0,B,[W],0,3,0,0,["g",Bdu(AWM)],Yh,"VScrollTest$<init>$lambda$_0_1",12,B,[Eg],0,3,[0,0,0],0,["dB",Bdw(A0Q)],RQ,0,B,[W],0,3,0,0,["g",Bdu(A8o)],RR,"EditorInViewDemo$<init>$lambda$_0_1",12,B,[CY],0,3,[0,0,0],0,["bO",Bdu(A$x)],X3,"DiffMiddleDemo$<init>$lambda$_0_0",30,B,[CY],0,3,[0,0,0],
0,["bO",Bdu(AYD)],X2,"DiffMiddleDemo$<init>$lambda$_0_1",30,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A$A)],Tr,"SinDemo$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],0,["bs",Bdu(AR5)],Tl,"FolderTransferDemo$<init>$lambda$_0_0",30,B,[CY],0,3,[0,0,0],0,["bO",Bdu(AYq)],Tk,"FolderTransferDemo$<init>$lambda$_0_1",30,B,[Co],0,3,[0,0,0],0,["bs",Bdu(A6d)],AFs,"FolderDiff$<init>$lambda$_0_0",30,B,[CY],0,3,[0,0,0],0,["bO",Bdu(AYC)],ALn,0,B,[BZ],1,3,0,0,0,AB0,0,B,[BZ],3,3,0,0,0,ACc,0,B,[AB0],0,3,0,0,["F3",Bdv(A5l)],AB1,0,B,[BZ],3,3,
0,0,0,ACa,0,B,[AB1],0,3,0,0,["F3",Bdv(A5$)]]);
$rt_metadata([AJZ,0,B,[],0,3,0,0,0,ANn,0,B,[BZ],3,3,0,0,0,AIC,0,B,[],0,3,0,0,0,AIr,0,B,[],0,3,0,0,0,Go,0,B,[Dr],0,3,0,0,0,ABe,0,B,[W],0,3,0,0,0,ABd,0,B,[W],0,3,0,0,["g",Bdu(ASi)],ABc,0,B,[W],0,3,0,0,["g",Bdu(ARA)],ABb,0,B,[T],0,3,0,0,["e",Bdt(A2l)],ABi,0,B,[T],0,3,0,0,["e",Bdt(A5b)],ABh,0,B,[T],0,3,0,0,["e",Bdt(BaC)],ABg,0,B,[T],0,3,0,0,["e",Bdt(AWm)],ABf,0,B,[T],0,3,0,0,["e",Bdt(AYs)],ABa,0,B,[T],0,3,0,0,["e",Bdt(A_1)],X$,0,B,[T],0,3,0,0,["e",Bdt(AWn)],X_,0,B,[T],0,3,0,0,["e",Bdt(A8w)],AQf,0,B,[],0,3,0,0,["bB",
Bdu(A34)],L6,"GL$Texture",11,B,[Dr],0,3,[ANP,0,"Texture"],0,["b7",Bdt(WZ)],YN,0,B,[],0,3,0,0,0,El,0,B,[],3,3,0,A7k,0,I5,0,B,[],3,3,0,0,0,Sz,0,B,[I5],0,3,0,0,["zX",Bdw(A9c)],SA,0,B,[I5],0,3,0,0,0,M7,0,B,[],0,3,0,0,0,JL,"LineNumbersTexture",12,B,[Dr],0,3,[0,0,0],0,0,R_,0,B,[W],0,3,0,0,["g",Bdu(ATW)],R$,0,B,[W],0,3,0,0,["g",Bdu(ASs)],R6,0,B,[W],0,3,0,0,["g",Bdu(ARB)],R4,0,B,[W],0,3,0,0,["g",Bdu(A_3)],AM4,0,B,[],0,3,0,0,0,Yb,0,B,[W],0,3,0,0,["g",Bdu(A6a)],AGO,"LineShaderDemo0$<init>$lambda$_0_0",12,B,[Co],0,3,[0,0,0],
0,["bs",Bdu(A2a)],E8,"LineDiff",30,B,[],0,3,[0,0,0],0,0,ACQ,0,B,[],3,0,0,0,0,Gi,0,B,[],0,3,0,0,0,Pb,0,Gi,[],0,3,0,0,0,AFo,0,Gi,[],0,3,0,0,0,ACZ,0,Gi,[],0,3,0,0,0,EW,0,B,[],3,3,0,0,0,VM,0,B,[],3,3,0,0,0,AJa,0,B,[],3,3,0,0,0,HV,0,B,[],1,3,0,0,0,AEw,0,HV,[],0,3,0,0,["xd",Bdu(Cb)],CD,0,Cu,[],12,3,0,AKd,0,AQP,0,B,[],0,3,0,0,0,AKv,0,B,[BZ],4,3,0,0,0,I1,0,Dm,[CL],0,3,0,0,0,AQY,0,B,[],0,3,0,0,0,AHq,0,B,[],3,3,0,0,0,APl,"JsArrayView",29,B,[AHq],0,3,[0,0,0],0,["J",Bdt(A4b)]]);
$rt_metadata([Di,0,B,[BZ],1,3,0,0,0,APC,0,Di,[],1,3,0,0,0,AP1,0,Di,[],1,3,0,0,0,AN7,0,Di,[],1,3,0,0,0,AOg,0,Di,[],1,3,0,0,0,AQi,0,Di,[],1,3,0,0,0,AQB,0,B,[],0,3,0,0,0,W3,0,B,[],0,3,0,0,0,Up,0,B,[EW],0,3,0,0,0,RV,0,B,[Bz],0,3,0,0,["K",Bdu(A2G)],ADY,0,B,[],0,3,0,0,0,YY,0,B,[T],0,3,0,0,["e",Bdt(AVQ)],IO,0,Cu,[],12,3,0,ALa,0,Id,0,B,[CL],0,3,0,0,0,PC,"NavigationContext",12,B,[],0,3,[0,0,0],0,0,DJ,"CodeLine",12,B,[],0,3,[0,0,0],0,["J",Bdt(A8r)],ACt,0,B,[],0,3,0,0,0,MS,0,EI,[Dq,CU],0,3,0,0,0,CG,"CodeElement",12,B,
[],0,3,[0,0,0],0,["J",Bdt(AKr)],Pz,0,MS,[],0,3,0,0,0,AED,0,B,[],0,3,0,0,0,AQT,"Interval",18,B,[CL],0,3,[0,0,0],0,["bB",Bdu(AZC),"J",Bdt(ANt),"n$",Bdu(A3H)],Rg,0,B,[Hb],0,3,0,0,["sp",Bdv(A$u)],ADJ,"IntervalNode",20,B,[],0,3,[0,0,0],0,["J",Bdt(ARU),"bB",Bdu(ASF)],Ku,0,B,[],3,3,0,0,0,HS,0,B,[Ku,Dq],0,0,0,0,["bB",Bdu(A4e),"J",Bdt(ATk)],IZ,"HashMap$HashEntry",1,HS,[],0,0,[MS,0,0],0,0,ANN,0,B,[],0,3,0,0,0,Pa,"FolderDiffWindow",30,EZ,[],0,3,[0,0,0],0,["b7",Bdt(ASE),"n3",Bdu(A5S)],ABA,0,B,[CK],0,3,0,0,["cb",Bdt(A8V)],Ed,
0,Bx,[],0,3,0,0,0,G$,"DiffRange",16,B,[],0,3,[0,0,0],0,["J",Bdt(AXi)],ND,0,B,[],0,3,0,0,0,AGP,"EditorComponent$registerMouseScroll$lambda$_1_0",12,B,[Eg],0,3,[0,0,0],0,["dB",Bdw(A2h)],ABx,"ScissorDemo$1",12,B,[CH],0,0,[V0,0,0],0,["co",Bdv(A0r),"dn",Bdv(ARS),"c7",Bdw(A80),"dq",Bdu(Bay)],AKt,0,B,[BZ],1,3,0,0,0,Ig,"FsItem",11,B,[],3,3,0,0,0,Kb,0,B,[Ig],3,3,0,0,0,M6,"JsFileHandle",29,B,[Kb],0,3,[0,0,0],0,["w",Bdt(E4),"wa",Bdt(ARX),"J",Bdt(Pl)],KF,0,B,[Ig],3,3,0,0,0,P0,"JsDirectoryHandle",29,B,[KF],0,0,[0,0,0],0,
["w",Bdt(Kq),"wa",Bdt(A_k),"J",Bdt(JO)],VK,0,B,[],3,3,0,0,0,AGT,0,B,[W],0,3,0,0,["g",Bdu(A3K)],AMh,"PopupMenu",25,B,[CS,F2,Dr],0,3,[0,0,0],0,["zB",Bdt(A7W),"xD",Bdt(AUo),"fW",Bdv(ARh),"Db",Bdt(A1N),"eT",Bdv(A_$),"bs",Bdu(AWu),"b7",Bdt(AYJ)],AKL,0,Jm,[EK],0,0,0,0,0,Im,0,B,[],0,3,0,0,0,Dl,"FileTreeNode",25,Im,[],0,3,[0,0,0],0,["of",Bdt(AZ2)],VU,0,B,[T],0,3,0,0,["e",Bdt(A3v)],VS,0,B,[T],0,3,0,0,["e",Bdt(A1X)],VT,0,B,[T],0,3,0,0,["e",Bdt(A51)]]);
$rt_metadata([VR,0,B,[T],0,3,0,0,["e",Bdt(AZT)],Pf,0,B,[],0,3,0,OW,0,Oe,0,B,[Ku,CU],0,3,0,0,0,L7,0,Oe,[],0,0,0,0,0,QZ,0,B,[CK],0,3,0,0,["cb",Bdt(AUy)],XP,0,B,[W],0,3,0,0,["g",Bdu(A_h)],Zq,0,B,[T],0,3,0,0,["e",Bdt(A9y)],Gk,0,CN,[],0,3,0,0,0,MW,0,Gk,[F2],0,3,0,0,["zB",Bdt(A7W),"xD",Bdt(AUo),"Db",Bdt(A1N),"b7",Bdt(AYl),"m9",Bdv(ASg),"ej",Bdu(A7f),"c7",Bdw(A$J),"co",Bdv(ATf),"bs",Bdu(AUO),"fW",Bdv(A5g)],AOK,0,MW,[],0,3,0,0,["zB",Bdt(A7W),"xD",Bdt(AUo),"Db",Bdt(A1N)],AKc,0,CN,[],0,3,0,0,["b7",Bdt(AZE),"ek",Bdw(AUM),
"ej",Bdu(A9o),"c7",Bdw(AZ9),"co",Bdv(AZH),"dn",Bdv(AXH),"gz",Bdv(A4B),"dB",Bdw(A41),"jc",Bdt(AMW)],AK4,0,B,[N5],0,3,0,0,["zB",Bdt(A7W),"xD",Bdt(AUo),"fW",Bdv(ARh),"Db",Bdt(A1N),"mQ",Bdt(AZR),"l0",Bdt(A$V),"iZ",Bdu(A0X),"mq",Bdt(AV_),"nu",Bdt(A2L),"rx",Bdv(AWN),"sq",Bdu(A7E),"rH",Bdt(Oi)],Uk,0,B,[W],0,3,0,0,["g",Bdu(A7N)],U5,0,B,[T],0,3,0,0,["e",Bdt(A7b)],AIT,0,B,[],3,3,0,0,0,X9,0,B,[T],0,3,0,0,["e",Bdt(ASy)],AB3,0,B,[T],0,3,0,0,["e",Bdt(AWA)],AA3,0,B,[T],0,3,0,0,["e",Bdt(A_d)],AA1,0,B,[T],0,3,0,0,["e",Bdt(AUc)],AA0,
0,B,[T],0,3,0,0,["e",Bdt(AR3)],AA2,0,B,[T],0,3,0,0,["e",Bdt(Baz)],ADD,0,B,[T],0,3,0,0,["e",Bdt(A0b)],ADC,0,B,[T],0,3,0,0,["e",Bdt(A6T)],ADF,0,B,[T],0,3,0,0,["e",Bdt(A8u)],ADE,0,B,[T],0,3,0,0,["e",Bdt(AZ$)],AC$,0,B,[W],0,3,0,0,["g",Bdu(A2X)],Xc,0,B,[Hb],0,3,0,0,["sp",Bdv(AWT)],APw,0,B,[],3,3,0,0,0,SQ,0,B,[T],0,3,0,0,["e",Bdt(A5e)],SS,0,B,[T],0,3,0,0,["e",Bdt(A_v)],SR,0,B,[T],0,3,0,0,["e",Bdt(AWO)],ABm,0,B,[T],0,3,0,0,["e",Bdt(A26)],AIR,0,B,[T],0,3,0,0,["e",Bdt(A6D)],Nx,0,B,[],3,3,0,0,0,TR,0,B,[Nx],0,3,0,0,["C6",
Bdu(A3J)],AQM,0,HV,[],0,0,0,0,["xd",Bdu(Bak)],Sk,0,B,[W],0,3,0,0,["g",Bdu(ARQ)],Sj,0,B,[W],0,3,0,0,["g",Bdu(AR9)],RH,0,B,[Bz],0,3,0,0,["K",Bdu(A$S)],AA6,0,B,[T],0,3,0,0,["e",Bdt(A1d)],CW,0,Bx,[],0,3,0,0,0,APL,0,Gt,[],0,3,0,0,0,ALD,0,B,[],0,3,0,0,0,W0,0,B,[],0,0,0,0,0,AAb,0,B,[T],0,3,0,0,["e",Bdt(A4_)],AAa,0,B,[EC],0,3,0,0,0,AMK,0,B,[],0,3,0,0,0,ZQ,0,B,[EW],0,3,0,0,["h3",Bdv(A68)],ANS,0,B,[],3,3,0,0,0,AJd,0,B,[],0,3,0,0,0]);
$rt_metadata([AGm,0,B,[W],0,3,0,0,["g",Bdu(A$m)],AFA,0,B,[Bz],0,3,0,0,0,AMl,0,B,[],0,3,0,0,0,U9,0,B,[Bz],0,3,0,0,0,Vw,0,B,[W],0,3,0,0,["g",Bdu(A4H)],Vu,0,B,[W],0,3,0,0,["g",Bdu(A_e)],Qe,0,BN,[],0,3,0,0,0,TY,0,B,[CK],0,3,0,0,["cb",Bdt(AV4)],T1,0,B,[CK],0,3,0,0,["cb",Bdt(A6R)],UP,0,B,[CK],0,3,0,0,["cb",Bdt(A$E)],Zg,0,B,[W],0,3,0,0,["g",Bdu(A0z)],AAN,0,B,[CK],0,3,0,0,["cb",Bdt(A9a)],Xo,0,B,[B$],0,3,0,0,["bj",Bdu(AVJ)],AKH,0,B,[BZ],1,3,0,0,0,Z2,0,B,[B$],0,3,0,0,["bj",Bdu(AYL)],AHk,0,B,[T],0,3,0,0,["e",Bdt(A_O)],Ha,
0,H8,[],0,3,0,0,0,AQN,0,Gt,[],0,3,0,0,0,AJG,0,B,[],3,3,0,0,0,XU,0,CN,[],0,3,0,0,0,Mm,0,B,[],3,3,0,0,["t4",Bdv(ASp)],Nj,0,EZ,[Mm],0,3,0,0,["n3",Bdu(A3M),"b7",Bdt(A6E),"eL",Bdu(A4K),"Do",Bdu(A4I),"AJ",Bdu(AZB),"x3",Bdu(A8e),"t4",Bdv(A7H)],AHL,0,B,[CK],0,3,0,0,["cb",Bdt(A1g)],AGB,"EditorWindow",12,EZ,[Co],0,3,[0,0,0],0,["eL",Bdu(AQ4),"b7",Bdt(ASN),"n3",Bdu(A5z),"bs",Bdu(A7D)],U0,0,B,[CK],0,3,0,0,["cb",Bdt(AXu)],YO,0,B,[CK],0,3,0,0,["cb",Bdt(A1o)],Zo,0,B,[T],0,3,0,0,["e",Bdt(A57)],Zn,0,B,[T],0,3,0,0,["e",Bdt(A9H)],AAV,
0,B,[W],0,3,0,0,["g",Bdu(AWe)],Ys,0,B,[W],0,3,0,0,["g",Bdu(A_N)],TE,0,B,[W],0,3,0,0,["g",Bdu(A3f)],AIu,0,Dm,[CL],0,3,0,0,0,Hr,0,B,[],0,0,0,0,0,KN,0,B,[],4,3,0,0,0,XJ,0,B,[],0,3,0,0,0,XS,0,B,[W],0,3,0,0,["g",Bdu(A$0)],AHo,"Pos",19,B,[CL],0,3,[0,0,0],0,["bB",Bdu(ARC),"nO",Bdt(AYZ),"J",Bdt(AR_),"n$",Bdu(A8M)],AIy,0,B,[B$],0,3,0,0,["bj",Bdu(A9G)],AIx,0,B,[B$],0,3,0,0,["bj",Bdu(A4n)],AHV,0,B,[B$],0,3,0,0,["bj",Bdu(A5v)],AHU,0,B,[B$],0,3,0,0,["bj",Bdu(A59)],Xt,0,B,[T],0,3,0,0,["e",Bdt(ARV)],Xu,0,B,[T],0,3,0,0,["e",
Bdt(AT$)],Xw,0,B,[T],0,3,0,0,["e",Bdt(A_g)],Xx,0,B,[T],0,3,0,0,["e",Bdt(AWB)],Xy,0,B,[T],0,3,0,0,["e",Bdt(AY9)],Yq,0,B,[B$],0,3,0,0,["bj",Bdu(AVv)],Zj,0,B,[],3,3,0,BbJ,0,Qo,0,B,[],1,3,0,0,0,AKD,0,Di,[],1,3,0,0,0]);
$rt_metadata([Ud,0,Gk,[F2],0,3,0,0,["zB",Bdt(A7W),"xD",Bdt(AUo),"fW",Bdv(ARh),"Db",Bdt(A1N),"b7",Bdt(A_f),"m9",Bdv(A4u),"ej",Bdu(A2r),"q4",Bdu(A8K),"t1",Bdu(A96),"gz",Bdv(A9w),"co",Bdv(AUi),"c7",Bdw(AYQ),"bs",Bdu(A$n)],Yz,0,B,[T],0,3,0,0,["e",Bdt(A00)],AIm,0,B,[W],0,3,0,0,["g",Bdu(ATx)],AIo,0,B,[W],0,3,0,0,["g",Bdu(ARD)],SB,0,Gk,[],0,3,0,0,["jc",Bdt(A0$),"q4",Bdu(A8Q),"ej",Bdu(A1r),"co",Bdv(AWY)],AIn,0,B,[T],0,3,0,0,["e",Bdt(AZW)],Tz,0,I3,[Fr],0,3,0,0,["Gb",Bdt(AVK),"jc",Bdt(A5M)],AFi,0,B,[T],0,3,0,0,["e",Bdt(ATI)],AFh,
0,B,[T],0,3,0,0,["e",Bdt(AYB)],AFj,0,B,[T],0,3,0,0,["e",Bdt(A7B)],AHT,0,B,[T],0,3,0,0,["e",Bdt(AVh)],AHS,0,B,[T],0,3,0,0,["e",Bdt(AZ3)],K5,0,Dm,[CL],0,3,0,0,0,WV,0,B,[CM],0,3,0,0,["cZ",Bdu(A2s)],AGv,0,B,[],0,3,0,0,0,AF6,0,B,[],0,3,0,0,0,Le,0,B,[],0,3,0,0,0,RW,0,CN,[],0,3,0,0,["ej",Bdu(ARJ)],AGc,0,B,[],0,3,0,0,0,VV,0,B,[T],0,3,0,0,["e",Bdt(AWd)],Xa,0,B,[],3,3,0,AVg,0,MH,"FindUsagesItemData",13,B,[],0,3,[0,0,0],0,0,Td,0,B,[],0,3,0,0,0,AA5,0,B,[],0,3,0,0,0,ACd,0,B,[W],0,3,0,0,["g",Bdu(ATT)],AAL,0,B,[W],0,3,0,0,
0,AFV,0,B,[W],0,3,0,0,["g",Bdu(AWQ)],Gc,0,B,[],3,3,0,0,0,AAY,0,B,[Gc],0,0,0,0,["da",Bdt(Ck),"cz",Bdt(Cl),"ru",Bdt(ADN)],AHw,0,B,[T],0,3,0,0,["e",Bdt(A0_)],U8,0,B,[T],0,3,0,0,["e",Bdt(A5V)],MN,0,Qo,[],1,3,0,0,0,Ws,0,MN,[],0,3,0,0,0,WQ,0,B,[T],0,3,0,0,["e",Bdt(A0s)],AJ0,0,B,[],0,3,0,0,0,AFE,0,B,[T],0,3,0,0,["e",Bdt(ARb)],AFF,0,B,[T],0,3,0,0,["e",Bdt(AU0)],Va,0,B,[T],0,3,0,0,["e",Bdt(AYT)],U_,0,B,[T],0,3,0,0,["e",Bdt(A43)],Vc,0,B,[T],0,3,0,0,["e",Bdt(A_c)],Vb,0,B,[T],0,3,0,0,["e",Bdt(A15)],Ka,"Diff",12,B,[],0,
3,[0,0,0],0,0,HU,0,B,[CU,CL],0,3,0,0,0,AG8,0,B,[W],0,3,0,0,["g",Bdu(A$k)],Rx,0,B,[W],0,3,0,0,["g",Bdu(A4y)],Xs,0,B,[W],0,3,0,0,["g",Bdu(A3r)],Zr,0,B,[W],0,3,0,0,["g",Bdu(A7v)],ACD,0,Dm,[CL],0,3,0,0,0,Li,0,B,[],4,3,0,0,0,Wl,0,B,[],0,3,0,0,0]);
$rt_metadata([AGx,0,B,[I5],0,3,0,0,["zX",Bdw(AWh)],AE0,0,B,[EW],0,3,0,0,["h3",Bdv(A12)],TQ,0,B,[W],0,3,0,0,["g",Bdu(A27)],AIc,0,B,[W],0,3,0,0,["g",Bdu(A1R)],T8,0,B,[T],0,3,0,0,["e",Bdt(A7A)],Uo,0,B,[EW],0,3,0,0,["h3",Bdv(ATz)],AAt,0,B,[T],0,3,0,0,["e",Bdt(A7s)],LH,0,Ed,[],0,3,0,0,0,KT,0,Bx,[],0,3,0,0,0,P$,0,Bx,[],0,3,0,0,0,Q8,0,B,[W],0,3,0,0,0,AQS,0,B,[],0,3,0,0,0,QY,0,B,[W],0,3,0,0,["g",Bdu(A1U)],AHi,0,B,[W],0,3,0,0,["g",Bdu(A7u)],AIv,0,B,[W],0,3,0,0,["g",Bdu(A46)],Xg,0,B,[W],0,3,0,0,["g",Bdu(AXz)],AIt,0,B,
[W],0,3,0,0,["g",Bdu(A8_)],SO,0,B,[W],0,3,0,0,0,AKT,0,B,[],3,3,0,0,0,Jf,0,Bx,[],0,3,0,0,0,ADy,0,B,[N6],3,3,0,0,0,RG,0,B,[ADy],3,3,0,0,0,GI,0,B,[RG],1,3,0,0,0,AKl,0,GI,[],0,3,0,0,["AO",Bdu(ANd)],AMe,0,B,[],0,3,0,0,0,VW,0,EI,[Dq,CU],0,3,0,0,0,X5,0,B,[],0,3,0,0,0,XV,0,B,[],0,3,0,0,0,AIM,0,B,[EC],0,3,0,0,0,Rv,0,B,[W],0,3,0,0,["g",Bdu(Bab)],XE,0,B,[W],0,3,0,0,["g",Bdu(A48)],RO,0,B,[W],0,3,0,0,["g",Bdu(AWZ)],ACI,0,B,[W],0,3,0,0,["g",Bdu(AZ0)],ZT,0,B,[CK],0,3,0,0,["cb",Bdt(A$g)],SH,0,B,[CK],0,3,0,0,["cb",Bdt(AUC)],AAe,
0,B,[CK],0,3,0,0,["cb",Bdt(ATc)],GW,"ScopeNode",22,B,[],0,3,[0,0,0],0,0,LR,"DeclNode",24,B,[],0,3,[0,0,0],0,["J",Bdt(A9V),"bB",Bdu(APt)],F1,"RefNode",23,B,[],0,3,[0,0,0],0,["J",Bdt(A0K),"bB",Bdu(ANK)],WC,0,B,[DH],0,3,0,0,["dT",Bdw(A7j)],Tn,"InferenceNode",22,B,[],0,3,[0,0,0],0,0,WD,0,B,[DH],0,3,0,0,["dT",Bdw(A5K)],VA,0,B,[DH],0,3,0,0,["dT",Bdw(A7X)],Vz,0,B,[EC],0,3,0,0,["bO",Bdu(A0V)],Vy,0,B,[EC],0,3,0,0,["bO",Bdu(AYK)],VC,0,B,[DH],0,3,0,0,["dT",Bdw(A7q)],AJP,0,B,[],0,3,0,0,0,AQ2,0,B,[],0,3,0,0,0,AIe,0,B,[T],
0,3,0,0,["e",Bdt(A2M)],AIf,0,B,[T],0,3,0,0,["e",Bdt(A5U)]]);
$rt_metadata([IL,"ExprRefNode",23,F1,[],0,3,[0,0,0],0,["J",Bdt(A7t)],Lr,"MethodCallNode",23,F1,[],0,3,[0,0,0],0,["bB",Bdu(A_m)],ZE,0,B,[W],0,3,0,0,["g",Bdu(A71)],Ks,"QualifiedRefNode",23,F1,[],0,3,[0,0,0],0,["J",Bdt(AXt),"bB",Bdu(A2x)],ZF,0,B,[W],0,3,0,0,["g",Bdu(AUl)],AMI,0,B,[CL],0,3,0,0,["bB",Bdu(AXP),"J",Bdt(APr)],AB2,0,B,[T],0,3,0,0,["e",Bdt(A_a)],ABB,0,B,[W],0,3,0,0,["g",Bdu(AXb)],AFm,0,B,[T],0,3,0,0,["e",Bdt(ASf)],Y5,0,B,[W],0,3,0,0,["g",Bdu(A_Q)],AJr,0,B,[],0,3,0,0,0,APj,0,B,[],0,3,0,0,0,Vs,0,B,[W],
0,3,0,0,["g",Bdu(ATD)],ADX,0,B,[CU],4,3,0,0,0,ADm,0,B,[W],0,3,0,0,["g",Bdu(A6J)],ADl,0,B,[W],0,3,0,0,["g",Bdu(A06)],AFa,0,B,[T],0,3,0,0,["e",Bdt(A2N)],ACv,0,B,[],1,3,0,0,0,AEY,0,GI,[],0,3,0,0,["AO",Bdu(APX)],Ui,0,B,[],3,3,0,0,0,Jy,0,B,[],3,3,0,0,0,R3,0,B,[Jy],0,0,0,0,["pL",Bdu(A8R),"qW",Bdu(A5R),"mD",Bdt(AZo)],ABj,0,B,[W],0,3,0,0,["g",Bdu(AUt)],ABk,0,B,[W],0,3,0,0,["g",Bdu(A9j)],AGf,0,B,[T],0,3,0,0,["e",Bdt(A$p)],Uz,0,B,[Bz],0,3,0,0,["K",Bdu(A8Y)],APf,0,B,[],4,3,0,0,0,TG,0,B,[T],0,3,0,0,["e",Bdt(A65)],KL,0,
HS,[],0,0,0,0,0,Ya,0,B,[Nx],0,3,0,0,["C6",Bdu(Pe)],AO1,0,B,[EW],0,3,0,0,0,APT,0,B,[],0,3,0,0,0,AFM,0,B,[EW],0,3,0,0,0,R9,0,B,[],3,3,0,0,0,ABR,0,B,[R9],3,3,0,0,0,AFK,0,B,[ABR],0,3,0,0,0,AFL,0,B,[CK],0,3,0,0,0,AFJ,0,B,[Bz],0,3,0,0,0,E$,0,Cu,[],12,3,0,A3B,0,ABs,0,B,[],3,3,0,0,0,BY,0,B,[],1,0,0,0,["cS",Bdw(JH),"c$",Bdx(JQ),"ki",Bdt(A3u),"J",Bdt(AY3),"bb",Bdu(A0i),"cp",Bdu(A$L),"hJ",Bdt(A_I),"fD",Bdt(LO)],AHj,0,B,[],0,3,0,0,0,AJm,0,B,[W],0,3,0,0,0,AI3,0,B,[W],0,3,0,0,["g",Bdu(A82)],AI6,0,B,[W],0,3,0,0,["g",Bdu(A$F)],Y7,
0,B,[Bz],0,3,0,0,0,GJ,0,B,[],0,3,0,0,0,ANH,0,B,[],0,3,0,0,0,Tu,0,B,[W],0,3,0,0,["g",Bdu(A52)],AFg,0,B,[W],0,3,0,0,["g",Bdu(AVV)]]);
$rt_metadata([AIW,0,B,[W],0,3,0,0,["g",Bdu(A94)],AIV,0,B,[W],0,3,0,0,["g",Bdu(AS6)],AGu,0,B,[Jy],0,3,0,0,["pL",Bdu(A90),"qW",Bdu(AXw),"mD",Bdt(A4q)],Vx,0,B,[W],0,3,0,0,0,SL,0,B,[IA],3,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],E7,0,Gx,[SL],1,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],QE,0,E7,[Dq,CU],1,3,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],V2,0,B,[ABs],0,0,0,0,0,Df,"FSet",2,BY,[],0,0,[0,0,0],QB,["d",Bdw(ASe),"w",Bdt(AU3),"R",Bdu(ASu)],H3,0,B,[],0,0,0,0,0,Lu,0,Bv,[],0,3,0,0,0,Zt,0,B,[W],0,3,0,0,["g",Bdu(AUE)],Px,"FakeNode",22,
GW,[],0,3,[0,0,0],0,0,MJ,"MemberNode",22,GW,[],0,3,[0,0,0],0,0,Gy,0,B,[T],0,3,0,AMX,0,Qy,0,QE,[],0,0,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o),"rV",Bdu(A9f)],Rz,0,E5,[J_],0,0,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o),"j2",Bdu(A1V),"du",Bdt(AXR)],U7,"NonCapFSet",2,Df,[],0,0,[0,0,0],0,["d",Bdw(A2t),"w",Bdt(A38),"R",Bdu(A9u)],AIN,"AheadFSet",2,Df,[],0,0,[0,0,0],0,["d",Bdw(A3W),"w",Bdt(A6i)],Tp,"BehindFSet",2,Df,[],0,0,[0,0,0],0,["d",Bdw(ASA),"w",Bdt(A$D)],V5,"AtomicFSet",2,Df,[],0,0,[0,0,0],0,["d",Bdw(A2w),"w",Bdt(AZw),"R",Bdu(A8j)],G5,
"FinalSet",2,Df,[],0,0,[0,0,0],0,["d",Bdw(A0u),"w",Bdt(A3F)],Cj,0,BY,[],1,0,0,0,["d",Bdw(Bag),"cA",Bdt(A$c),"R",Bdu(AVA)],AMi,"EmptySet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(A9M),"cS",Bdw(A40),"c$",Bdx(A3T),"w",Bdt(AU4),"R",Bdu(A2v)],Ce,"JointSet",2,BY,[],0,0,[0,0,0],0,["d",Bdw(AUJ),"bb",Bdu(AYb),"w",Bdt(AVL),"cp",Bdu(A6L),"R",Bdu(AYF),"fD",Bdt(ASZ)],LG,"NonCapJointSet",2,Ce,[],0,0,[0,0,0],0,["d",Bdw(AXZ),"w",Bdt(AWr),"R",Bdu(A85)],ED,"AtomicJointSet",2,LG,[],0,0,[0,0,0],0,["d",Bdw(A4l),"bb",Bdu(A8S),"w",Bdt(ARO)],Z7,
"PositiveLookAhead",2,ED,[],0,0,[0,0,0],0,["d",Bdw(AX_),"R",Bdu(A0n),"w",Bdt(A_E)],AHs,"NegativeLookAhead",2,ED,[],0,0,[0,0,0],0,["d",Bdw(ASr),"R",Bdu(A$j),"w",Bdt(AUD)],AD0,"PositiveLookBehind",2,ED,[],0,0,[0,0,0],0,["d",Bdw(ASX),"R",Bdu(Bax),"w",Bdt(AXM)],Wt,"NegativeLookBehind",2,ED,[],0,0,[0,0,0],0,["d",Bdw(A1$),"R",Bdu(A9g),"w",Bdt(ASC)],IT,"SingleSet",2,Ce,[],0,0,[0,0,0],0,["d",Bdw(ARE),"cS",Bdw(AWx),"c$",Bdx(A9x),"cp",Bdu(A6I),"hJ",Bdt(A8f),"fD",Bdt(A01)],Yn,0,B,[W],0,3,0,0,["g",Bdu(A2O)],SF,0,B,[W],
0,3,0,0,["g",Bdu(A7h)],O$,0,E7,[],1,0,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],XQ,0,O$,[],0,0,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],PU,0,EI,[],1,0,0,0,0,XN,0,PU,[],0,0,0,0,0,Qh,0,E5,[J_],1,0,0,0,["f6",Bdu(A1W),"kD",Bdt(A4i),"n2",Bdu(AW5),"rT",Bdu(AVU)],XO,0,Qh,[],0,0,0,0,["f6",Bdu(A1W),"j2",Bdu(AW$),"du",Bdt(AWc),"cx",Bdt(ATO),"fq",Bdt(ARZ)],XL,0,B,[Gc],0,0,0,0,["da",Bdt(ARI),"cz",Bdt(A8g),"ru",Bdt(AZj)],ACr,0,B,[Gc],3,3,0,0,0,XM,0,B,[ACr],0,0,0,0,0,ZM,0,B,[Hb],0,3,0,0,0,H6,0,B,[],1,0,0,0,0,Bc,0,H6,[],1,0,0,SC,["eK",Bdt(A3a),
"gO",Bdt(A2J),"nA",Bdt(A98),"jH",Bdt(A_D)],AJU,0,Bc,[],0,0,0,0,["o",Bdu(Dv),"eK",Bdt(Dk),"gO",Bdt(A4S),"nA",Bdt(AZ_),"J",Bdt(A7w),"jH",Bdt(AUh)],Oo,0,Bx,[],0,3,0,0,0,EV,0,BY,[],1,0,0,0,["cp",Bdu(AZg),"R",Bdu(A$U),"fD",Bdt(AWX)],Dx,"LeafQuantifierSet",2,EV,[],0,0,[0,0,0],0,["d",Bdw(A1_),"w",Bdt(A3N)]]);
$rt_metadata([GP,"CompositeQuantifierSet",2,Dx,[],0,0,[0,0,0],0,["d",Bdw(A2W),"w",Bdt(A3c)],Dg,"GroupQuantifierSet",2,EV,[],0,0,[0,0,0],0,["d",Bdw(A2n),"w",Bdt(A50)],FY,"AltQuantifierSet",2,Dx,[],0,0,[0,0,0],0,["d",Bdw(A61),"bb",Bdu(A1P)],Yx,"UnifiedQuantifierSet",2,Dx,[],0,0,[0,0,0],0,["d",Bdw(Baa),"cS",Bdw(AXo)],Rt,0,B,[],3,3,0,0,0,Vj,0,B,[Rt],0,3,0,0,0,Bk,0,B,[],1,0,0,0,0,DQ,0,Bv,[],0,3,0,0,0,AAo,0,H6,[Dq],0,0,0,0,["J",Bdt(AFD)],ABw,"FSet$PossessiveFSet",2,BY,[],0,0,[Df,0,0],0,["d",Bdw(AVW),"w",Bdt(A7_),
"R",Bdu(A8d)],AH8,0,B,[Dq,CU],0,3,0,0,0,Rb,0,Ce,[],0,0,0,0,["w",Bdt(A8k)],T6,"CompositeRangeSet",2,Ce,[],0,0,[0,0,0],0,["d",Bdw(ASb),"bb",Bdu(A76),"w",Bdt(A8v),"R",Bdu(ASG),"cp",Bdu(ASt)],Et,"SupplRangeSet",2,Ce,[],0,0,[0,0,0],0,["d",Bdw(A4M),"w",Bdt(A_w),"o",Bdu(AUs),"cp",Bdu(AR8),"bb",Bdu(A91),"R",Bdu(AT9)],Ol,"UCISupplRangeSet",2,Et,[],0,0,[0,0,0],0,["o",Bdu(AVB),"w",Bdt(A08)],AJN,"UCIRangeSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(A6w),"w",Bdt(A3g)],Fl,"RangeSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(ZV),"w",Bdt(AV0),
"cp",Bdu(AYd)],ABV,"HangulDecomposedCharSet",2,Ce,[],0,0,[0,0,0],0,["bb",Bdu(AWD),"w",Bdt(AZa),"d",Bdw(ARk),"cp",Bdu(A3l),"R",Bdu(A0d)],Fp,"CharSet",2,Cj,[],0,0,[0,0,0],0,["cA",Bdt(A6l),"bW",Bdv(AUU),"cS",Bdw(ATU),"c$",Bdx(AVR),"w",Bdt(A0q),"cp",Bdu(AZ5)],AME,"UCICharSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(A1Z),"w",Bdt(A75)],AI8,"CICharSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(ARx),"w",Bdt(AU8)],GT,"DecomposedCharSet",2,Ce,[],0,0,[0,0,0],0,["bb",Bdu(A_L),"d",Bdw(AXY),"w",Bdt(A7Y),"cp",Bdu(AVX),"R",Bdu(A8W)],Y_,"UCIDecomposedCharSet",
2,GT,[],0,0,[0,0,0],0,0,AFX,"CIDecomposedCharSet",2,GT,[],0,0,[0,0,0],0,0,ZN,"PossessiveGroupQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["d",Bdw(A33)],ACF,"PosPlusGroupQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["d",Bdw(A7m)],HD,"AltGroupQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["d",Bdw(A9Y),"bb",Bdu(A$8)],S6,"PosAltGroupQuantifierSet",2,HD,[],0,0,[0,0,0],0,["d",Bdw(AVN),"bb",Bdu(A7I)],Hg,"CompositeGroupQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["d",Bdw(Bau),"w",Bdt(A0B)],Rq,"PosCompositeGroupQuantifierSet",2,Hg,[],0,0,[0,0,0],
0,["d",Bdw(AVe)],UY,"ReluctantGroupQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["d",Bdw(A09)],ADs,"RelAltGroupQuantifierSet",2,HD,[],0,0,[0,0,0],0,["d",Bdw(ASH)],Xj,"RelCompositeGroupQuantifierSet",2,Hg,[],0,0,[0,0,0],0,["d",Bdw(A2B)],UZ,"DotAllQuantifierSet",2,EV,[],0,0,[0,0,0],0,["d",Bdw(Bai),"cS",Bdw(AZK),"w",Bdt(A8B)],ABD,"DotQuantifierSet",2,EV,[],0,0,[0,0,0],0,["d",Bdw(AYe),"cS",Bdw(ARn),"w",Bdt(A9q)],Gw,0,B,[],1,0,0,0,0,AI4,"PossessiveQuantifierSet",2,Dx,[],0,0,[0,0,0],0,["d",Bdw(ARY)],Yr,"PossessiveAltQuantifierSet",
2,FY,[],0,0,[0,0,0],0,["d",Bdw(AXa)],AB9,"PossessiveCompositeQuantifierSet",2,GP,[],0,0,[0,0,0],0,["d",Bdw(A9z)],ADr,"ReluctantQuantifierSet",2,Dx,[],0,0,[0,0,0],0,["d",Bdw(AYa)],AF9,"ReluctantAltQuantifierSet",2,FY,[],0,0,[0,0,0],0,["d",Bdw(AR7)],UI,"ReluctantCompositeQuantifierSet",2,GP,[],0,0,[0,0,0],0,["d",Bdw(A9P)],MM,"SOLSet",2,BY,[],4,0,[0,0,0],0,["d",Bdw(A6K),"R",Bdu(A58),"w",Bdt(AXc)],AKa,"WordBoundary",2,BY,[],0,0,[0,0,0],0,["d",Bdw(A2$),"R",Bdu(A3i),"w",Bdt(Bas)],ABy,"PreviousMatch",2,BY,[],0,0,[0,0,0],
0,["d",Bdw(AVE),"R",Bdu(A1E),"w",Bdt(A2Y)],Y6,"EOLSet",2,BY,[],4,0,[0,0,0],0,["d",Bdw(A8F),"R",Bdu(A3U),"w",Bdt(A63)],AHP,"EOISet",2,BY,[],0,0,[0,0,0],0,["d",Bdw(A73),"R",Bdu(A1Y),"w",Bdt(AUI)],AAF,"MultiLineSOLSet",2,BY,[],0,0,[0,0,0],0,["d",Bdw(A3P),"R",Bdu(AUA),"w",Bdt(A2P)],AMr,"DotAllSet",2,Ce,[],0,0,[0,0,0],0,["d",Bdw(A1a),"w",Bdt(ATy),"bb",Bdu(A3n),"ki",Bdt(A7Q),"R",Bdu(A3m)],AJT,"DotSet",2,Ce,[],4,0,[0,0,0],0,["d",Bdw(A7Z),"w",Bdt(A32),"bb",Bdu(A9p),"ki",Bdt(AQ8),"R",Bdu(A1p)]]);
$rt_metadata([AQx,"UEOLSet",2,BY,[],4,0,[0,0,0],0,["d",Bdw(AVZ),"R",Bdu(A5j),"w",Bdt(AWj)],APo,"UMultiLineEOLSet",2,BY,[],0,0,[0,0,0],0,["d",Bdw(AXQ),"R",Bdu(A5a),"w",Bdt(ARM)],ANe,"MultiLineEOLSet",2,BY,[],0,0,[0,0,0],0,["d",Bdw(A53),"R",Bdu(AS5),"w",Bdt(AUB)],Jh,"CIBackReferenceSet",2,Ce,[],0,0,[0,0,0],0,["d",Bdw(AR1),"bb",Bdu(A8P),"w",Bdt(A2u),"R",Bdu(AYW)],AQC,"BackReferenceSet",2,Jh,[],0,0,[0,0,0],0,["d",Bdw(AS9),"cS",Bdw(A0l),"c$",Bdx(ARN),"cp",Bdu(A7e),"w",Bdt(A$7)],AOz,"UCIBackReferenceSet",2,Jh,[],
0,0,[0,0,0],0,["d",Bdw(AWs),"w",Bdt(A3j)],Sg,0,HN,[KU],0,3,0,0,["r3",Bdx(AUj),"rl",Bdw(A3b),"lo",Bdu(A3E),"sk",Bdv(A$b)],AEA,"SequenceSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(ATo),"cS",Bdw(A28),"c$",Bdx(A5n),"w",Bdt(AX6),"cp",Bdu(AU1)],AI7,"UCISequenceSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(AWy),"w",Bdt(AU9)],Ru,"CISequenceSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(A9A),"w",Bdt(A$B)],Ih,0,B,[],4,0,0,AY7,0,Z0,"UCISupplCharSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(AZn),"w",Bdt(Bar)],PD,"LowSurrogateCharSet",2,Ce,[],0,0,[0,0,0],
0,["bb",Bdu(A8a),"d",Bdw(A3V),"cS",Bdw(AUZ),"c$",Bdx(A4o),"w",Bdt(AZN),"cp",Bdu(ARK),"R",Bdu(AZU)],PO,"HighSurrogateCharSet",2,Ce,[],0,0,[0,0,0],0,["bb",Bdu(A3D),"d",Bdw(ARr),"cS",Bdw(A8p),"c$",Bdx(AZi),"w",Bdt(A_W),"cp",Bdu(ATq),"R",Bdu(A8x)],EJ,"SupplCharSet",2,Cj,[],0,0,[0,0,0],0,["bW",Bdv(A87),"cS",Bdw(A7x),"c$",Bdx(ASL),"w",Bdt(A$9),"cp",Bdu(A8Z)],AGW,0,Gw,[],0,0,0,0,["j$",Bdu(ASQ),"Ec",Bdv(AYS)],AGX,0,Gw,[],0,0,0,0,["j$",Bdu(A9Q),"Ec",Bdv(A0W)],ALM,0,B,[],0,0,0,0,0,AJk,0,B,[],0,0,0,0,0,PB,0,Bk,[],0,0,
0,0,["O",Bdt(AOH)],O1,0,Bk,[],0,0,0,0,["O",Bdt(APi)],ALH,0,Bk,[],0,0,0,0,["O",Bdt(A9t)],AL3,0,Bk,[],0,0,0,0,["O",Bdt(AZX)],AL6,0,Bk,[],0,0,0,0,["O",Bdt(ATZ)],Pw,0,Bk,[],0,0,0,0,["O",Bdt(AJW)],No,0,Pw,[],0,0,0,0,["O",Bdt(AKq)],AM6,0,Bk,[],0,0,0,0,["O",Bdt(A5I)],QK,0,No,[],0,0,0,0,["O",Bdt(ANb)],AOV,0,QK,[],0,0,0,0,["O",Bdt(AW1)],AKX,0,Bk,[],0,0,0,0,["O",Bdt(A4c)],AJ7,0,Bk,[],0,0,0,0,["O",Bdt(AWU)],AN6,0,Bk,[],0,0,0,0,["O",Bdt(A0Z)],AQh,0,Bk,[],0,0,0,0,["O",Bdt(A7L)],AM9,0,Bk,[],0,0,0,0,["O",Bdt(A13)],APY,0,Bk,
[],0,0,0,0,["O",Bdt(AVi)],ALz,0,Bk,[],0,0,0,0,["O",Bdt(AY2)],AMj,0,Bk,[],0,0,0,0,["O",Bdt(A4a)],AJv,0,Bk,[],0,0,0,0,["O",Bdt(ATE)],ANm,0,Bk,[],0,0,0,0,["O",Bdt(A_t)],AP4,0,Bk,[],0,0,0,0,["O",Bdt(A10)],ALZ,0,Bk,[],0,0,0,0,["O",Bdt(AV1)],AOq,0,Bk,[],0,0,0,0,["O",Bdt(ATL)],AK0,0,Bk,[],0,0,0,0,["O",Bdt(A5p)],AMO,0,Bk,[],0,0,0,0,["O",Bdt(A6F)],AP9,0,Bk,[],0,0,0,0,["O",Bdt(A0f)],AKA,0,Bk,[],0,0,0,0,["O",Bdt(AYA)],AKi,0,Bk,[],0,0,0,0,["O",Bdt(AXv)],AM7,0,Bk,[],0,0,0,0,["O",Bdt(A9k)],L3,0,Bk,[],0,0,0,0,["O",Bdt(AKY)],AQs,
0,L3,[],0,0,0,0,["O",Bdt(AXh)]]);
$rt_metadata([AOZ,0,PB,[],0,0,0,0,["O",Bdt(A24)],AKg,0,O1,[],0,0,0,0,["O",Bdt(AUS)],AN9,0,Bk,[],0,0,0,0,["O",Bdt(AWf)],AOi,0,Bk,[],0,0,0,0,["O",Bdt(A0H)],AON,0,Bk,[],0,0,0,0,["O",Bdt(A49)],AOW,0,Bk,[],0,0,0,0,["O",Bdt(ARd)],AOa,0,B,[],4,0,0,0,0,AJL,0,B,[],4,3,0,0,0,AAI,"UnicodeHelper$Range",9,B,[],0,3,[AJL,0,"Range"],0,0,ALT,0,B,[],0,3,0,0,0,AOx,0,B,[],4,3,0,0,0,Uf,0,B,[EC],0,3,0,0,["bO",Bdu(BaD)],MT,0,GI,[],1,3,0,0,0,Ux,0,MT,[],0,3,0,0,0,AB4,0,B,[EC],0,3,0,0,["bO",Bdu(A8D)],ACj,0,B,[B$],0,3,0,0,["bj",Bdu(AYX)],ACk,
0,B,[B$],0,3,0,0,["bj",Bdu(AWK)],ACh,0,B,[W],0,3,0,0,["g",Bdu(A8i)],TO,0,B,[Ui],0,3,0,0,0,Ts,0,B,[W],0,3,0,0,["g",Bdu(A5c)],AG5,0,B,[B$],0,0,0,0,["bj",Bdu(AYG)],S1,0,E7,[],0,0,0,0,["rT",Bdu(A6o)],QN,0,B,[B$],0,3,0,0,["bj",Bdu(AT4)],Xe,0,E7,[],0,0,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],S2,0,Gx,[],0,0,0,0,["f6",Bdu(A1W),"rT",Bdu(A6o)],ZR,0,B,[W],0,3,0,0,["g",Bdu(A4R)],XB,0,B,[W],0,3,0,0,["g",Bdu(A6Q)],NW,"MethodNode",24,LR,[],0,3,[0,0,0],0,["bB",Bdu(A3e)],Yw,0,Bc,[],0,0,0,0,["o",Bdu(AT5)],Yt,0,Bc,[],0,0,0,0,["o",Bdu(A2m)],Sv,
0,Bc,[],0,0,0,0,["o",Bdu(AV9),"J",Bdt(A5t)],ABK,0,Bc,[],0,0,0,0,["o",Bdu(A8$)],ABI,0,Bc,[],0,0,0,0,["o",Bdu(AZm)],ABJ,0,Bc,[],0,0,0,0,["o",Bdu(A6Y)],ABN,0,Bc,[],0,0,0,0,["o",Bdu(A4z)],ABO,0,Bc,[],0,0,0,0,["o",Bdu(AQ9)],ABL,0,Bc,[],0,0,0,0,["o",Bdu(AUL)],ABM,0,Bc,[],0,0,0,0,["o",Bdu(AWC)],ABP,0,Bc,[],0,0,0,0,["o",Bdu(A0o)],ABQ,0,Bc,[],0,0,0,0,["o",Bdu(A36)],Su,0,Bc,[],0,0,0,0,["o",Bdu(BaE)],SP,0,Bc,[],0,0,0,0,["o",Bdu(AUQ)],Ss,0,Bc,[],0,0,0,0,["o",Bdu(ATb)],St,0,Bc,[],0,0,0,0,["o",Bdu(A5h)],Sy,0,Bc,[],0,0,0,
0,["o",Bdu(AVG)],Sr,0,Bc,[],0,0,0,0,["o",Bdu(A$t)],Sw,0,Bc,[],0,0,0,0,["o",Bdu(A3d)],Sx,0,Bc,[],0,0,0,0,["o",Bdu(AYt)],Ua,0,B,[W],0,3,0,0,["g",Bdu(A8l)],NQ,0,B,[],3,3,0,0,0]);
$rt_metadata([AE5,0,B,[NQ],4,3,0,0,0,T_,0,B,[T],0,3,0,0,["e",Bdt(A8L)],T9,0,B,[T],0,3,0,0,["e",Bdt(AUF)],T$,0,B,[T],0,3,0,0,["e",Bdt(A0y)],Ub,0,B,[T],0,3,0,0,["e",Bdt(ARu)],VF,0,B,[T],0,3,0,0,["e",Bdt(AZ1)],VE,0,B,[T],0,3,0,0,["e",Bdt(A64)],VD,0,B,[T],0,3,0,0,["e",Bdt(A8E)],UB,0,B,[T],0,3,0,0,["e",Bdt(A1H)],TJ,0,B,[],3,3,0,0,0,AOF,0,B,[T],0,3,0,0,["e",Bdt(A_6)],Z8,0,B,[B$],0,3,0,0,["bj",Bdu(A84)],V4,0,B,[B$],0,3,0,0,["bj",Bdu(A8A)],QT,0,B,[B$],0,3,0,0,["bj",Bdu(A83)],AAf,0,B,[],0,3,0,0,0,UC,0,B,[],0,3,0,0,0,AGZ,
0,B,[W],0,3,0,0,["g",Bdu(AXN)],SX,0,B,[T],0,3,0,0,["e",Bdt(AYp)],SV,0,B,[T],0,3,0,0,["e",Bdt(A4$)],SW,0,B,[T],0,3,0,0,["e",Bdt(A_x)],Xz,0,B,[T],0,3,0,0,["e",Bdt(A81)],XA,0,B,[T],0,3,0,0,["e",Bdt(AXn)],ADo,0,B,[CK],0,3,0,0,["cb",Bdt(A$f)],AD_,0,B,[T],0,3,0,0,["e",Bdt(AR2)],AD$,0,B,[T],0,3,0,0,["e",Bdt(ATn)],Wc,0,B,[T],0,3,0,0,["e",Bdt(A0U)],Wd,0,B,[T],0,3,0,0,["e",Bdt(AR0)],We,0,B,[T],0,3,0,0,["e",Bdt(ATh)],Wf,0,B,[T],0,3,0,0,["e",Bdt(A0C)],Wr,0,B,[T],0,3,0,0,["e",Bdt(A6_)],ALd,0,B,[CK],0,3,0,0,["cb",Bdt(A_8)],AAv,
0,B,[W],0,3,0,0,["g",Bdu(A6P)],ZD,0,B,[W],0,3,0,0,["g",Bdu(BaB)],W7,0,B,[I5],0,3,0,0,0,YB,0,B,[EC],0,3,0,0,0,Rm,"BackReferencedSingleSet",2,IT,[],0,0,[0,0,0],0,["cS",Bdw(AUn),"c$",Bdx(Bat),"hJ",Bdt(AS2)],GF,0,B,[],0,0,0,0,0,AFk,0,GF,[Gc],0,0,0,0,0,W8,0,GF,[Gc],0,0,0,0,0,ADZ,0,GF,[Gc],0,0,0,0,0,AJE,0,B,[W],0,0,0,0,0,X6,0,B,[T],0,3,0,0,["e",Bdt(A1q)],X7,0,B,[Fr],0,3,0,0,["g5",Bdu(AZl)],RX,0,B,[T],0,3,0,0,["e",Bdt(AYI)],RY,0,B,[Fr],0,3,0,0,["g5",Bdu(A4v)],ADR,0,B,[T],0,3,0,0,0,AET,0,B,[W],0,3,0,0,["g",Bdu(AW2)],AES,
0,B,[W],0,3,0,0,["g",Bdu(A8N)],U4,0,B,[T],0,3,0,0,["e",Bdt(ARw)],AGR,0,B,[NQ],0,0,0,0,0]);
$rt_metadata([WW,0,B,[T],0,3,0,0,["e",Bdt(A9m)],Tt,0,B,[Fr],0,3,0,0,["g5",Bdu(A6S)],AG6,0,B,[T],0,3,0,0,["e",Bdt(A5B)],ADP,0,B,[T],0,3,0,0,["e",Bdt(AWJ)],ADO,0,B,[T],0,3,0,0,["e",Bdt(A8c)],ABC,0,B,[W],0,3,0,0,["g",Bdu(A3_)],AHM,0,B,[W],0,3,0,0,["g",Bdu(AUz)],HH,0,Cu,[],12,0,0,VP,0,Jp,"DirectoryNode",27,Dl,[],0,3,[0,0,0],0,["J",Bdt(A0L),"of",Bdt(A1I)],Tx,0,B,[T],0,3,0,0,["e",Bdt(A5A)],UF,0,B,[W],0,3,0,0,["g",Bdu(ASc)],AFO,0,B,[],32,0,0,BcP,0,UX,0,B,[W],0,3,0,0,["g",Bdu(AUq)],QW,0,B,[T],0,3,0,0,["e",Bdt(A5Z)],L0,
"FileNode",27,Dl,[],0,3,[0,0,0],0,["J",Bdt(ATd),"of",Bdt(A2D)],T0,0,Bx,[],0,3,0,0,0,Y9,0,Bx,[],0,3,0,0,0,XC,0,Ha,[],0,3,0,0,0,TF,0,Ha,[],0,3,0,0,0,Oa,0,Bx,[],0,3,0,0,0,AFp,0,Bc,[],0,0,0,0,["o",Bdu(A0t)],Z_,0,Bc,[],0,0,0,0,["o",Bdu(A22)],Vf,0,Bc,[],0,0,0,0,["o",Bdu(AR6)],Ve,0,Bc,[],0,0,0,0,["o",Bdu(A47)],YU,0,Bc,[],0,0,0,0,["o",Bdu(AVt)],AB7,0,Bc,[],0,0,0,0,["o",Bdu(A$4)],Sd,0,Bc,[],0,0,0,0,["o",Bdu(AX4)],ADH,0,Bc,[],0,0,0,0,["o",Bdu(AY6)],Z5,0,Bc,[],0,0,0,0,["o",Bdu(Bac)],Z9,0,Bc,[],0,0,0,0,["o",Bdu(ATt)],RS,
0,Bc,[],0,0,0,0,["o",Bdu(A0E)],ACp,0,Bc,[],0,0,0,0,["o",Bdu(A69)],ACy,0,Bc,[],0,0,0,0,["o",Bdu(A8O)],AFR,0,Bc,[],0,0,0,0,["o",Bdu(A$Q)],AE6,0,Bc,[],0,0,0,0,["o",Bdu(A05)],Rf,0,Bc,[],0,0,0,0,["o",Bdu(ATj)],N1,0,Bc,[],0,0,0,0,["o",Bdu(AX7)],AEI,0,N1,[],0,0,0,0,["o",Bdu(A92)],AGN,0,B,[],0,3,0,0,0,AIs,0,B,[BZ],3,3,0,0,0,RT,0,B,[AIs],0,3,0,0,["OA",Bdt(A6q)],VH,0,B,[W],0,3,0,0,["g",Bdu(A5i)],ALc,0,B,[BZ],3,3,0,0,0,Vg,0,B,[W],0,3,0,0,["g",Bdu(A$q)],AGg,0,B,[EW],0,3,0,0,["h3",Bdv(A7z)],S0,0,B,[KO],0,3,0,0,["ss",Bdt(ATR),
"qx",Bdt(ARq),"pY",Bdu(AZA),"l9",Bdu(AXV)],Vd,0,B,[W],0,3,0,0,0,UT,0,B,[W],0,3,0,0,0,AER,0,B,[Mm],0,0,0,0,["t4",Bdv(ASp),"Do",Bdu(AV7),"AJ",Bdu(A1G),"x3",Bdu(A1S)],Wg,0,B,[],0,3,0,0,0]);
$rt_metadata([Mg,0,B,[],3,3,0,0,0,Si,0,B,[Mg],0,3,0,0,0,U6,0,B,[T],0,3,0,0,["e",Bdt(AXX)],ADW,0,B,[Bz],0,3,0,0,["K",Bdu(A$o)],Du,0,B,[],3,3,0,AL8,0,CI,0,Cu,[],12,3,0,ALr,0,Er,0,B,[],3,3,0,A2z,0,ABp,0,B,[W],0,3,0,0,0,Wa,0,B,[W],0,3,0,0,["g",Bdu(A3k)],Wp,0,B,[EC],0,3,0,0,["bO",Bdu(ASl)],AJK,0,B,[],3,3,0,0,0,U2,0,B,[],0,3,0,0,0,Yc,0,B,[T],0,3,0,0,0,Ye,0,B,[Mg],0,3,0,0,0,AFn,0,B,[Jy],0,0,0,0,["pL",Bdu(A$I),"qW",Bdu(A0m),"mD",Bdt(A$6)],AFu,0,B,[T],0,3,0,0,["e",Bdt(A6n)],UH,0,B,[T],0,3,0,0,["e",Bdt(A_z)],ANM,0,B,
[],0,0,0,0,0,AHJ,0,B,[W],0,3,0,0,["g",Bdu(AZh)],Pt,0,B,[],1,3,0,0,0,AEF,0,Pt,[],0,0,0,0,0,AII,0,B,[W],0,3,0,0,["g",Bdu(A1z)],AI1,0,B,[T],0,3,0,0,["e",Bdt(A6m)],AOJ,0,B,[],0,3,0,0,0,W1,0,B,[],3,3,0,0,0,RF,0,B,[W1],0,3,0,0,0,Mu,0,B,[],3,3,0,0,0,ADp,0,B,[Mu],0,3,0,0,["lD",Bdu(AYi)],ADn,0,B,[Mu],0,3,0,0,["lD",Bdu(AXT)],AHf,0,B,[M_,PV],4,3,0,0,0,S_,0,B,[W],0,3,0,0,["g",Bdu(A5w)],Ta,0,B,[W],0,3,0,0,["g",Bdu(Bad)],Ch,0,B,[Dq,CU],4,3,0,APm,0,HK,0,B,[],4,3,0,0,0,Vp,0,B,[B$],0,3,0,0,["bj",Bdu(AZD)],Vq,0,B,[B$],0,3,0,
0,["bj",Bdu(A3$)],ANk,0,B,[],0,0,0,0,0,ZS,0,CW,[],0,3,0,0,0,CV,0,Bv,[],0,3,0,0,0,SG,0,CV,[],0,3,0,0,0,QL,0,CV,[],0,3,0,0,0,AMV,0,CV,[],0,3,0,0,0,Io,0,Dm,[CL],0,3,0,0,0,ADK,0,CV,[],0,3,0,0,0,AI$,0,CV,[],0,3,0,0,0,AJy,0,B,[Dq],0,3,0,0,0,LV,0,B,[CU,Dq],1,3,0,0,0,Oq,0,LV,[],1,3,0,0,0,JW,0,Oq,[],0,3,0,0,0,UW,0,B,[],3,3,0,0,0]);
$rt_metadata([AF5,0,CV,[],0,3,0,0,0,AJO,0,CV,[],0,3,0,0,0,UN,0,CV,[],0,3,0,0,0,DF,0,B,[],3,0,0,0,0,Z3,"DecimalFormat$TextField",3,B,[DF],0,0,[JW,0,0],0,["bB",Bdu(A3R)],D5,0,Cu,[],12,3,0,AO_,0,OB,0,B,[CU],4,3,0,0,["J",Bdt(AQ$)],Qw,0,B,[],4,3,0,0,0,AAl,0,B,[],0,0,0,0,0,Lv,"DecimalFormat$MinusField",3,B,[DF],0,0,[JW,0,0],0,["bB",Bdu(AXI)],PJ,"DecimalFormat$PerMillField",3,B,[DF],0,0,[JW,0,0],0,["bB",Bdu(A2K)],MK,"DecimalFormat$CurrencyField",3,B,[DF],0,0,[JW,0,0],0,["bB",Bdu(ASR)],NY,"DecimalFormat$PercentField",
3,B,[DF],0,0,[JW,0,0],0,["bB",Bdu(ATX)]]);
function $rt_array(cls,data){this.a4X=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","connectToDom: called on already connected","#wasmDemo","#diffDemo","","FATAL: WebGL is not enabled in the browser","javaClass@","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","0"," is not subtype of ","[",", ","]","navigator.clipboard is undefined",
"Illegal argument sent to worker ","keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish"," ",".","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ",
"vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown",
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","ClassL.java","ClassR.java","selectScene ","CodiconDemo","RenderTexture",
"CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FolderTransferDemo","MergeButtonsTest","SinDemo","WindowDemo","EditorInViewDemo","Editor0","Editor1","ProjectViewDemo","Diff","test","Diff0","Diff1","FileViewDemo","FindUsagesDemo","DemoScene1","EditorWindowDemo","ClipboardTest","FolderDiff","FileDiffScene","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","LineNumbersTest","FolderDiffScene","DiffMiddleDemo","VScrollTest"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n",
"measured = ","Consolas","#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#283541","ns-resize","ew-resize","#616161","#393B40","#DFE1E5","#43454A","#BBBBBB","nwse-resize","nesw-resize",", z = ",", w = ","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword",
"#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","#A9B7C6","#344134","#40332B","Select left...","Select right...","child","pointer","text","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",
", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","open folder ...","open file ...","read file in pages","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","","codicon.pixel.size = ","w = ",", lineHeight = ","Window 1","Window ","Project root","FileTreeView model size = ","- to worker ","- to edt ","folder","file","objects[","] = ","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ",
"int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","...","Usages of ","  ","editor font: ","font.topBase(lineHeight) = ","\n","opening file ","prev = "," pixelLocation = ",", next = ","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java",
"JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","DiffUtils.findDiffs","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","Ctrl P -> parseFullFile","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","(this Collection)","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3",
"fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text"," on Copy","addWindow","new project view","MergeButtons.setFont ","scrollPos = "," ... ","new editor window","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new folder diff window","new file diff window","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","/Full file parsed in ","ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile",
"js","cpp","html","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","HtmlProxy.parseFullFile","TextProxy.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","/","#4B6EAF","#787878","onEnter item ","WorkerTest: \n  got ","  methodWithStringResult = ","charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","#CC7832","#9876AA",
"#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","JsArrayView{ buffer.byteLength = "," }","GRAYSCALE","RGBA"," -"," bold"," italic","\\n"," ↔ "," - finished in ","s, foldersCompared: ",", filesCompared: ","Compared in "," ms","Total updates ","[%d: %d) |-> [%d: %d)","File is too large: ","trying to display with unknown screen size and dpr","File is already compared","childrenComparedCnt cannot be greater than children.length"," readClipboardText: "," writeClipboardText \'","\' ok",
"onPopupClosed"," error: ","pageIndex = 4080","point to the file generated by org.sudu.experiments.FileTestGen",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","Illegal language: "," onPastePlainText: ","Open project...","Project view","Open project ...","request new model, file = ","request in progress ","Open ...","/First lines parsed in ","/File structure parsed in ","newAction must be non-null","The last byte in dst ","Folder ","ClassFile ","dir: ","showOpenFilePicker -> ",
"Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","No definition or usages","fib(",") result = ",") time = ","open file ","/Model::onFileIterativeParsed","/Viewport parsed in ","readLargeFilePages -> ","Expected "," ints to write, but "," written","openFile: ","dir = ","asyncWithDir",
"openFileEdt: ","dir on edt = ","TestWalker: Thread.currentThread() = ","  sub dir: ","  file: ","complete","file = ","file.content.length = "," ints to read, but "," read","CONCURRENT","UNORDERED","IDENTITY_FINISH","]: hash = 0x",", l = ","test passed","passCnt = ","failCnt = ","Unknown scope type: ","dir[",", list.size = ","file[","asyncWithDir complete, size = ","fSet","Is","In","main","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet",
"NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha",
"Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters",
"CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions",
"PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns",
"SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","/Resolved in ","openDirectory: "," - project view","readClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","open dir = ","startTime = "," - scan in progress ...","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","opening file ... ","folderOpened ","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4",
"#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","asyncCompareFolders","asyncCompareFiles","inComparing cannot be negative","Error fetching file ","en","CA","fr","zh","CN","FR","de","DE","it","IT","ja","JP","ko","KR","TW","GB","US","Can\'t convert code point "," to char","Currency not found: ","0x","+ ","0-","Missing format with for specifier ","--#+ 0,(<","Illegal format flags "," for conversion ","Duplicate format flags: ","Unknown format conversion: ",
"Illegal precision: ","Can\'t format argument of "," using "," conversion","This exception should not been thrown","Positive number pattern not found in ","Expected \';\' at "," in ","Illegal format flags: ","UP","DOWN","CEILING","FLOOR","HALF_UP","HALF_DOWN","HALF_EVEN","UNNECESSARY","Prefix contains special character at ","Quote opened at "," was not closed in ","Group separator found at fractional part at ","Unexpected second decimal separator at ","Unexpected \'0\' at optional digit part at ","Unexpected char at exponent at ",
"Pattern does not specify exponent digits at ","Unexpected \'#\' at non-optional digit part at ","Two group separators at ","Pattern does not specify integer digits at ","Group separator at the end of number at "]);
BE.prototype.toString=function(){return $rt_ustr(this);};
BE.prototype.valueOf=BE.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AJM(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var Da=Long_add;var KZ=Long_sub;var Cq=Long_mul;var ALR=Long_div;var A2f=Long_rem;var Ba4=Long_or;var DB=Long_and;var Bii=Long_xor;var IS=Long_shl;var Bcy=Long_shr;var Dh=Long_shru;var AV2=Long_compare;var Fj=Long_eq;var AT6=Long_ne;var Ba1=Long_lt;var ATP=Long_le;var Bij=Long_gt;var Ba0=Long_ge;var Bik=Long_not;var A7i=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(BcK);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AFZ.prototype;c.f=c.bj;c=ALi.prototype;c.postMessage=c.Oj;c=AF0.prototype;c.f=c.bj;c=AFY.prototype;c.f=c.bj;c=V3.prototype;c.f=c.bj;c=AOY.prototype;c.get=c.R3;Object.defineProperty(c,"length",{get:c.Zf});c=ANv.prototype;c.createEntityReference=c.U6;c.getElementById=c.XD;c.createTextNode=c.Xk;c.hasChildNodes=c.Wd;c.querySelectorAll=c.UK;c.removeChild=c.Y1;c.cloneNode=c.L0;c.createComment=c.a0k;c.insertBefore=c.Vq;c.getElementsByTagNameNS=c.Zc;c.hasAttributes=c.O6;c.normalize=c.SE;c.hasChildNodesJS
=c.Sv;c.getElementsByTagName=c.R2;c.appendChild=c.TM;c.createAttributeNS=c.XW;c.dispatchEvent=c.Si;c.replaceChild=c.My;c.createElementNS=c.NQ;c.createCDATASection=c.Rf;c.querySelector=c.O5;c.createElement=c.Ys;c.isSupported=c.Y5;c.importNode=c.VB;c.removeEventListener=c.NL;c.createAttribute=c.Sj;c.createDocumentFragment=c.Le;c.createProcessingInstruction=c.U0;c.addEventListener=c.Qq;Object.defineProperty(c,"nodeName",{get:c.TK});Object.defineProperty(c,"documentElement",{get:c.OH});Object.defineProperty(c,"childNodes",
{get:c.QW});Object.defineProperty(c,"prefix",{get:c.VH,set:c.a0y});Object.defineProperty(c,"implementation",{get:c.RE});Object.defineProperty(c,"textContent",{get:c.a0o,set:c.Xh});Object.defineProperty(c,"parentNode",{get:c.XA});Object.defineProperty(c,"nextSibling",{get:c.Ov});Object.defineProperty(c,"nodeType",{get:c.YJ});Object.defineProperty(c,"doctype",{get:c.Wv});Object.defineProperty(c,"localName",{get:c.ZA});Object.defineProperty(c,"nodeValue",{get:c.Oa,set:c.a0b});Object.defineProperty(c,"firstChild",
{get:c.Sa});Object.defineProperty(c,"lastChild",{get:c.Qx});Object.defineProperty(c,"previousSibling",{get:c.Tw});Object.defineProperty(c,"namespaceURI",{get:c.MT});Object.defineProperty(c,"attributes",{get:c.VO});Object.defineProperty(c,"ownerDocument",{get:c.M2});c=W4.prototype;c.f=c.bj;c=AN2.prototype;c.removeEventListener=c.M6;c.dispatchEvent=c.Vv;c.addEventListener=c.PX;c=WL.prototype;c.onAnimationFrame=c.O8;c=WK.prototype;c.f=c.F3;c=WI.prototype;c.handleEvent=c.cZ;c=AHy.prototype;c.handleEvent=c.cZ;c=
AHz.prototype;c.handleEvent=c.cZ;c=AHA.prototype;c.handleEvent=c.cZ;c=AHB.prototype;c.handleEvent=c.cZ;c=AHC.prototype;c.handleEvent=c.cZ;c=AHD.prototype;c.handleEvent=c.cZ;c=AHE.prototype;c.handleEvent=c.cZ;c=AHF.prototype;c.handleEvent=c.cZ;c=AHG.prototype;c.handleEvent=c.cZ;c=AHH.prototype;c.handleEvent=c.cZ;c=Zw.prototype;c.handleEvent=c.cZ;c=Zx.prototype;c.handleEvent=c.cZ;c=Zy.prototype;c.handleEvent=c.cZ;c=Zz.prototype;c.handleEvent=c.cZ;c=AGs.prototype;c.handleEvent=c.cZ;c=AIE.prototype;c.f=c.bj;c=AIF.prototype;c.f
=c.bj;c=AFr.prototype;c.f=c.bj;c=RM.prototype;c.accept=c.Sp;c=AAE.prototype;c.f=c.bj;c=AAD.prototype;c.f=c.bj;c=AAB.prototype;c.f=c.bj;c=AAA.prototype;c.f=c.bj;c=Q$.prototype;c.f=c.bj;c=Ra.prototype;c.f=c.bj;c=Q_.prototype;c.f=c.bj;c=ACc.prototype;c.f=c.F3;c=ACa.prototype;c.f=c.F3;c=Xo.prototype;c.f=c.bj;c=Z2.prototype;c.f=c.bj;c=AIy.prototype;c.f=c.bj;c=AIx.prototype;c.f=c.bj;c=AHV.prototype;c.f=c.bj;c=AHU.prototype;c.f=c.bj;c=Yq.prototype;c.f=c.bj;c=WV.prototype;c.handleEvent=c.cZ;c=ACj.prototype;c.f=c.bj;c
=ACk.prototype;c.f=c.bj;c=AG5.prototype;c.f=c.bj;c=QN.prototype;c.f=c.bj;c=Z8.prototype;c.f=c.bj;c=V4.prototype;c.f=c.bj;c=QT.prototype;c.f=c.bj;c=RT.prototype;c.onTimer=c.OA;c=Vp.prototype;c.f=c.bj;c=Vq.prototype;c.f=c.bj;})();
})(typeof self!=='undefined'?self:typeof global!=='undefined'?global:this,typeof self!=='undefined'?self:typeof global!=='undefined'?global:this);