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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hb=f;}
function $rt_cls(cls){return Sp(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hi(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b_.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AQ9(t);}
function $rt_throwableCause(t){return AY_(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A37());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A38(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A39());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BK=$rt_compare;var A3$=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var I2=$rt_isInstance;var A3_=$rt_nativeThread;var A4a=$rt_suspending;var A4b=$rt_resuming;var A4c=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bb=$rt_imul;var EO=$rt_wrapException;var A4d=$rt_checkBounds;var A4e=$rt_checkUpperBound;var A4f=$rt_checkLowerBound;var A4g=$rt_wrapFunction0;var A4h=$rt_wrapFunction1;var A4i=$rt_wrapFunction2;var A4j=$rt_wrapFunction3;var A4k=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AId=$rt_createCharArrayFromData;var A2a=$rt_createByteArrayFromData;var A2K=$rt_createShortArrayFromData;var DR=$rt_createIntArrayFromData;var A4l=$rt_createBooleanArrayFromData;var A4m=$rt_createFloatArrayFromData;var A4n=$rt_createDoubleArrayFromData;var AHx=$rt_createLongArrayFromData;var A36=$rt_createBooleanArray;var DE=$rt_createByteArray;var A4o=$rt_createShortArray;var B2=$rt_createCharArray;var BN=$rt_createIntArray;var A4p=$rt_createLongArray;var AKs=$rt_createFloatArray;var A4q
=$rt_createDoubleArray;var BK=$rt_compare;var A4r=$rt_castToClass;var A4s=$rt_castToInterface;var A4t=Long_toNumber;var Bp=Long_fromInt;var A4u=Long_fromNumber;var D=Long_create;var Fz=Long_ZERO;var A4v=Long_hi;var GF=Long_lo;
function B(){this.$id$=0;}
function BI(a){return Sp(a.constructor);}
function AO_(a,b){return a!==b?0:1;}
function ALD(a){var b,c,d,e,f,g,h,i,j;b=Mk(a);if(!b)c=C(0);else{d=(((32-Wq(b)|0)+4|0)-1|0)/4|0;e=B2(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Id((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hi(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function Mk(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AOv(a){var b,c,d;if(!I2(a,En)&&a.constructor.$meta.item===null){b=new TC;X(b);N(b);}b=AKw(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Rj(){var a=this;B.call(a);a.Ap=0;a.pH=null;}
function A3s(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AJy();AHc();AEY();AFD();AGU();AHW();AE7();ADs();AEC();AGm();AHb();AI$();AFp();AIq();AH0();AF4();AH8();AJN();AE9();AFk();AHC();AEE();AJf();AIP();AJd();AHo();AGN();c=(ADG()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Xs(C(2),C(3));else{d=new Rj;BD(d);e=new AAn;e.yU=d;f=new VU;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new O7;j.w6=i;j.w7=g;j.w8=3;j.w9
=e;j.w3=f;k=Bu(j,"f");i.onmessage=k;h=h+1|0;}l=I(LL,[E3(C(4),C(5),300),E3(C(6),C(7),300),E3(C(8),C(5),400),E3(C(9),C(7),400),E3(C(10),C(5),600),E3(C(11),C(7),600),E3(C(12),C(5),700),E3(C(13),C(7),700)]);m=Q(LL,1);m.data[0]=ARA(C(14),Fm(C(15),C(16)),C(5),400);b=(I0(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.s4;f=c.sn;i=new K;M(i);BM(H(H(i,C(17)),f),41);i=L(i);f=c.sk;o=c.rh;c=AVO($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);BD(d);c
=new AAo;c.zG=d;g=new AAm;e.then(Bu(c,"f"),Bu(g,"f"));}}
function AFJ(b){var c,d,e,f,g,h,i,j;c=new ZB;d=new TB;d.wS=c;c.sO=d;d=new Tz;d.Av=c;c.nQ=d;e=new TA;e.yh=c;c.ua=new $rt_globals.ResizeObserver(Bu(e,"f"));d=new Ty;d.qU=c;c.vM=d;c.k2=1;d=new Zm;d.lV=new SU;e=new Xq;e.Cr=null;e.lN=A4w;d.rC=e;BD(e);f=new Zq;f.yw=e;d.Ar=f;d.zP=b;g=b.length;h=0;while(h<g){e=b[h];i=new Zr;i.xW=d;i.xV=h;f=Bu(i,"f");e.onmessage=f;e=b[h];f=AIp();e.postMessage(f);h=h+1|0;}d.h_=0;d.oD=BN(g);c.z5=d;c.pY=(El()).getElementById("canvasDiv");d=ADG();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.ej=d;c.pY.appendChild(d);b=c.ej;d=AP_(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Xs(C(2),C(18));else{c.o_=A3e(c.ej,c.nQ);b=new Tr;j=c.nQ;AJx(b,e,new AAT,1,2.25,0.625);b.Cp=new AAS;b.BY=j;c.hs=b;AQT(c.ua,c.ej,ATz());d=$rt_globals.window;j=c.vM;d.addEventListener("resize",Bu(j,"handleEvent"));j=new Om;b=c.hs;d=c.o_.cp;j.O=b;j.p=d;j.bU=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new OO;DK(b,j);d=$rt_globals.fetch("test.wasm");j
=new V2;d=d.then(Bu(j,"f"));j=new V1;e=d.then(Bu(j,"f"));j=new VZ;d=new VY;e.then(Bu(j,"f"),Bu(d,"f"));}else b=Bj(C(20),d)?A2_(j):(AZ0(J(d)<=0?C(21):Dq(d,1))).ba(j);c.gm=b;Sd(c);}c.ej.focus();}
var VT=G(0);
var Vx=G(0);
function ABX(){var a=this;B.call(a);a.mt=null;a.ud=null;a.d1=null;}
function Sp(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ABX;c.d1=b;d=c;b.classObject=d;}return c;}
function JG(a){if(a.mt===null)a.mt=AF1(a.d1);return a.mt;}
function Xj(a){var b,c,d,e;b=a.ud;if(b===null){if(AJ3(a.d1)===null?0:1){b=Xj(HN(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d1.$meta.enclosingClass;if((b===null?null:Sp(b))!==null){b=$rt_str(a.d1.$meta.simpleName);if(b===null)b=C(21);}else{b=AF1(a.d1);d=Q8(b,36);if(d==(-1)){e=Q8(b,46);if(e!=(-1))b=Dq(b,e+1|0);}else{b=Dq(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.ud=b;}return b;}
function IF(a){return a.d1.$meta.primitive?1:0;}
function HN(a){return Sp(AJ3(a.d1));}
var AHG=G();
function Bu(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function E9(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AHv=G();
function AKw(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AI4(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AI4(d[e],c))return 1;e=e+1|0;}return 0;}
function AJ3(b){return b.$meta.item;}
function AF1(b){return $rt_str(b.$meta.name);}
function GN(){var a=this;B.call(a);a.iw=null;a.mN=null;a.ke=0;a.kz=0;}
function A4x(){var a=new GN();X(a);return a;}
function A4y(a){var b=new GN();Bl(b,a);return b;}
function X(a){a.ke=1;a.kz=1;}
function Bl(a,b){a.ke=1;a.kz=1;a.iw=b;}
function AVF(a){return a;}
function AQ9(a){return a.iw;}
function AY_(a){var b;b=a.mN;if(b===a)b=null;return b;}
var Em=G(GN);
function A4z(){var a=new Em();AFx(a);return a;}
function AFx(a){X(a);}
var Bt=G(Em);
function A38(a){var b=new Bt();A0v(b,a);return b;}
function A0v(a,b){Bl(a,b);}
var AIt=G(Bt);
var C2=G(0);
var CJ=G(0);
var J8=G(0);
function BL(){var a=this;B.call(a);a.b_=null;a.jF=0;}
var A4A=null;var A4B=null;var A4C=null;function E8(){E8=Bn(BL);AR1();}
function ANv(){var a=new BL();ADq(a);return a;}
function Hi(a){var b=new BL();Ji(b,a);return b;}
function Et(a,b,c){var d=new BL();Of(d,a,b,c);return d;}
function ADq(a){E8();a.b_=A4A;}
function Ji(a,b){E8();Of(a,b,0,b.data.length);}
function Of(a,b,c,d){var e;E8();e=B2(d);a.b_=e;DQ(b,c,e,0,d);}
function Mc(b){var c;E8();c=ANv();c.b_=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b_.data;if(b<c.length)return c[b];}d=new Ia;X(d);N(d);}
function J(a){return a.b_.data.length;}
function Gd(a){return a.b_.data.length?0:1;}
function Ql(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DQ(a.b_,b,d,e,c);return;}}g=new BF;X(g);N(g);}
function ACt(a,b){var c,d,e;if(a===b)return 0;c=Bd(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AAO(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Nb(a,b){if(a===b)return 1;return AAO(a,b,0);}
function Ej(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JN(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.b_.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JH(b);h=I3(b);while(true){f=a.b_.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hn(a,b,c){var d,e,f,g,h;d=Bd(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b_.data[d]==e)break;d=d+(-1)|0;}return d;}f=JH(b);g=I3(b);while(true){if(d<1)return (-1);h=a.b_.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Q8(a,b){return Hn(a,b,J(a)-1|0);}
function XQ(a,b,c){var d,e,f;d=Be(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AX_(a,b){return XQ(a,b,0);}
function Qi(a,b,c){var d,e;d=Bd(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AEH(a,b){return Qi(a,b,J(a));}
function Cr(a,b,c){var d,e;d=BK(b,c);if(d>0){e=new BF;X(e);N(e);}if(!d){E8();return A4B;}if(!b&&c==J(a))return a;return Et(a.b_,b,c-b|0);}
function Dq(a,b){return Cr(a,b,J(a));}
function Qr(a,b,c){return Cr(a,b,c);}
function Fm(a,b){var c,d,e,f,g,h;if(Gd(b))return a;if(Gd(a))return b;c=B2(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Mc(c);}
function ABe(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Dq(a,f));return L(d);}
function Y7(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cr(a,b,c+1|0);}
function ALB(a){return a;}
function Gf(a){var b,c,d,e,f;b=a.b_.data;c=B2(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cu(b){E8();return b===null?C(23):b.cK();}
function Ng(b){var c,d;E8();c=new BL;d=B2(1);d.data[0]=b;Ji(c,d);return c;}
function Dh(b){var c;E8();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BL))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function Nz(a){var b,c,d,e;a:{if(!a.jF){b=a.b_.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.jF=(31*a.jF|0)+e|0;d=d+1|0;}}}return a.jF;}
function LZ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GV;Bl(b,C(24));N(b);}A4D=1;d=new YI;d.mh=Q(CW,10);d.hy=(-1);d.fx=(-1);d.bz=(-1);e=new GX;e.fc=1;e.bM=b;e.bf=B2(J(b)+2|0);DQ(Gf(b),0,e.bf,0,J(b));f=e.bf.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.ye=g;e.gR=0;FH(e);FH(e);d.l=e;d.dU=0;d.mU=UX(d,(-1),0,null);if(!Dx(d.l)){b=new J4;h=d.l;Mu(b,C(21),h.bM,h.dm);N(b);}if(d.qn)d.mU.eG();b=BH();h=new Zt;h.jU=(-1);h.or=(-1);h.Bf=d;h.zI=d.mU;h.lf=a;h.jU=0;g=J(a);h.or=g;e=new ABf;i=h.jU;j=d.hy;k=d.fx+1|0;l=d.bz
+1|0;e.iA=(-1);m=j+1|0;e.q1=m;e.d5=BN(m*2|0);f=BN(l);e.kt=f;Jm(f,(-1));if(k>0)e.oM=BN(k);Jm(e.d5,(-1));AC0(e,a,i,g);h.cF=e;e.gi=1;n=0;m=0;if(!J(a)){f=Q(BL,1);f.data[0]=C(21);}else{while(true){l=J(h.lf);if(!ADA(h))l=h.or;e=h.cF;if(e.eE>=0&&AEy(e)==1){e=h.cF;e.eE=Mj(e);if(Mj(h.cF)==AFC(h.cF)){e=h.cF;e.eE=e.eE+1|0;}g=h.cF.eE;g=g<=l&&Ot(h,g)?1:0;}else g=Ot(h,h.jU);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BC(b,Qr(a,m,AGC(h)));m=AHX(h);n=g;}a:{BC(b,Qr(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bw(b,
g)))break a;EB(b,g);}}if(g<0)g=0;f=Gb(b,Q(BL,g));}return f;}
function AM8(a,b){return ACt(a,b);}
function AR1(){A4A=B2(0);A4B=ANv();A4C=new R5;}
var Fr=G(GN);
var Ie=G(Fr);
var AH_=G(Ie);
var Ei=G();
function Hy(){Ei.call(this);this.bp=0;}
var A4E=null;var A4F=null;function AZW(a){var b=new Hy();AEe(b,a);return b;}
function AEe(a,b){a.bp=b;}
function NC(b){return (Wa(A3X(20),b,10)).cK();}
function Ky(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dp;Bl(b,C(25));N(b);}d=J(b);if(0==d){b=new Dp;Bl(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dp;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Xn(P(b,f));if(i<0){j=new Dp;k=Cr(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bl(j,L(b));N(j);}if(i>=c){j=new Dp;l=Cr(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bl(j,L(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dp;k=Cr(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bl(j,L(b));N(j);}b=new Dp;j=new K;M(j);U(H(j,C(31)),c);Bl(b,L(j));N(b);}
function CU(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A4F===null){A4F=Q(Hy,256);c=0;while(true){d=A4F.data;if(c>=d.length)break a;d[c]=AZW(c-128|0);c=c+1|0;}}}return A4F.data[b+128|0];}return AZW(b);}
function ATn(a){return a.bp;}
function A00(a,b){if(a===b)return 1;return b instanceof Hy&&b.bp==a.bp?1:0;}
function Wq(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IT(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AWW(a,b){b=b;return BK(a.bp,b.bp);}
function AJy(){A4E=F($rt_intcls());}
function GH(){var a=this;B.call(a);a.C=null;a.K=0;}
function A4G(){var a=new GH();M(a);return a;}
function A3X(a){var b=new GH();GA(b,a);return b;}
function M(a){GA(a,16);}
function GA(a,b){a.C=B2(b);}
function Wa(a,b,c){return AIj(a,a.K,b,c);}
function AIj(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Id(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Id($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AIW(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A4H;AIQ(c,f);d=f.mA;g=f.mp;h=f.qx;i=1;j=1;if(h)j=2;k=9;l=ARB(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AHP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BK(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A4I;AES(c,f);g=f.mV;h=f.ma;i=f.qj;j=1;k=1;if(i)k=2;l=18;m=AQo(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Co(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AMy(p,Fz))d=0;else{d=GF(AFK(g,p));g=ATx(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFK(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ARB(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQo(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A4J.data;g=f.length-1|0;while(g>=0){if(Iy(ATx(b,Cg(c,f[g])),Fz)){d=d|e;c=Cg(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.pp(a.K,b);}
function ACQ(a,b,c){Co(a,b,b+1|0);a.C.data[b]=c;return a;}
function MF(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.C=Ku(a.C,d);}
function L(a){return Et(a.C,0,a.K);}
function ACE(a,b,c,d){return a.o$(a.K,b,c,d);}
function VO(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JQ(a,b){return a.oy(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.jB((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var Jy=G(0);
var K=G(GH);
function LQ(){var a=new K();A0S(a);return a;}
function A0S(a){M(a);}
function H(a,b){var c;c=a.K;if(b===null)b=C(23);Mf(a,c,b);return a;}
function BV(a,b){Mf(a,a.K,b);return a;}
function U(a,b){Wa(a,b,10);return a;}
function HD(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(A1U(b,Fz)){d=0;b=A3r(b);}a:{if(DA(b,Bp(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Id(GF(b),10);}else{g=1;h=Bp(1);i=Da(Bp(-1),Bp(10));b:{while(true){j=Cg(h,Bp(10));if(DA(j,b)>0){j=h;break b;}g=g+1|0;if(DA(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(Iy(j,Fz))break a;e=a.C.data;c=f+1|0;e[f]=Id(GF((Da(b,j))),10);b=AHe(b,j);j=Da(j,Bp(10));f=c;}}}return a;}
function E5(a,b){AIW(a,a.K,b);return a;}
function ADm(a,b){BM(a,b);return a;}
function Jl(a,b){Mf(a,a.K,!b?C(32):C(33));return a;}
function AGq(a,b,c){var d,e,f,g,h,i;d=BK(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ia;X(i);N(i);}
function T5(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ia;X(f);N(f);}
function AWR(a,b,c,d,e){VO(a,b,c,d,e);return a;}
function AMn(a,b,c,d){ACE(a,b,c,d);return a;}
function AHp(a){return a.K;}
function D8(a){return L(a);}
function AOu(a,b){MF(a,b);}
function AXc(a,b,c){ACQ(a,b,c);return a;}
function Mf(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(23);else if(Gd(c))break a;MF(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ia;X(c);N(c);}
var EX=G(Ie);
var AI7=G(EX);
function A4K(a){var b=new AI7();ALG(b,a);return b;}
function ALG(a,b){Bl(a,b);}
var AH4=G(EX);
function A4L(a){var b=new AH4();ALS(b,a);return b;}
function ALS(a,b){Bl(a,b);}
var AAe=G(0);
var C5=G(0);
function Cy(b,c){if(b!==null)b.cD();return c;}
var Xk=G(0);
function J0(){var a=this;B.call(a);a.iV=0;a.nh=0;a.mL=0;}
var A4M=0;function Er(a){A4M=A4M-1|0;}
function Ho(a,b,c){Kn(a,AHM(b,c,400,0));}
function K1(a,b){return Ld(a,b,0.875);}
function Ld(a,b,c){return DN(a,b)+c|0;}
function YY(){var a=this;J0.call(a);a.iM=null;a.c$=null;a.vB=null;}
function EI(a){var b,c,d;b=a.c$;c=a.nh;d=a.mL;b.clearRect(0.0,0.0,c,d);}
function Zd(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c$;d="center";c.textAlign=d;break a;case 2:c=a.c$;d="right";c.textAlign=d;break a;default:break a;}d=a.c$;c="left";d.textAlign=c;}}
function Cl(a,b){Kn(a,b.qa);}
function Kn(a,b){var c;if(a.vB!==b){c=a.c$;a.vB=b;c.font=b;}}
function AHM(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BQ(a,b,c,d){var e,f,g;e=a.c$;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function DN(a,b){var c;c=$rt_ustr(b);return a.c$.measureText(c).width;}
function JU(a,b,c,d){var e,f;e=a.c$;f=$rt_ustr(Hi(AId([35,HP(b/16|0),HP(b%16|0),HP(c/16|0),HP(c%16|0),HP(d/16|0),HP(d%16|0)])));e.fillStyle=f;}
function AUg(){return {alpha:false};}
var AHd=G();
var AJE=G();
function BT(b,c){if(b===c)return 1;return b!==null?b.bH(c):c!==null?0:1;}
function AEL(b){return b!==null?b.gn():0;}
function BD(b){if(b!==null)return b;b=new GV;Bl(b,C(21));N(b);}
var BR=G(0);
function M2(b){return b;}
var Cb=G(0);
function AAn(){B.call(this);this.yU=null;}
function A1b(a,b){var c;c=a.yU;c.pH=b;if(c.Ap)AFJ(b);}
var AFo=G();
function KR(b,c){return b.data[c];}
var AIF=G();
var ADB=G(0);
function E3(b,c,d){return ARA(C(34),Fm(C(15),b),c,d);}
var AJs=G(0);
var AFV=G(0);
function I0(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=De(b,f+g|0);DQ(c,0,d,f,g);return d;}
function Lh(b,c,d){DQ(b,c,d,0,d.data.length);return d;}
function YP(b,c,d){var e;if(c>0)DQ(b,0,d,0,c);e=d.data.length;if(c<e)DQ(b,c+1|0,d,c,e-c|0);return d;}
function AED(b,c,d,e){var f;if(c>0)DQ(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DQ(b,d,e,c,f-d|0);}return e;}
function Du(b){var c;c=new ABI;c.j$=b;return c;}
function AD_(b,c){if(b.data.length!=c)b=De(b,c);return b;}
function AFU(b,c,d){var e;e=c.data.length;if(e==d)c=De(c,e*2|0);c.data[d]=b;return c;}
function AA$(b,c,d){var e;e=c.data.length;if(e==d)c=N1(c,e*2|0);c.data[d]=b;return c;}
function N0(b){return Ku(b,b.data.length);}
function LL(){var a=this;B.call(a);a.s4=null;a.sn=null;a.sk=null;a.rh=0;}
function ARA(a,b,c,d){var e=new LL();AQ3(e,a,b,c,d);return e;}
function AQ3(a,b,c,d,e){a.s4=b;a.sn=c;a.sk=d;a.rh=e;}
var AD7=G();
function AVO(b,c){return {style:b,weight:c};}
function AAo(){B.call(this);this.zG=null;}
function AKf(a,b){var c,d,e;c=a.zG;d=0;while(d<b.length){e=b[d];(El()).fonts.add(e);d=d+1|0;}c.Ap=1;b=c.pH;if(b!==null)AFJ(b);}
var AAm=G();
function A0d(a,b){$rt_globals.console.info("font load error "+b);}
var Lt=G();
var A4N=null;var A4O=null;function Bx(){if(A4N===null)A4N=APy(A4P,0);return A4N;}
function ED(){if(A4O===null)A4O=APy(A4Q,0);return A4O;}
function A2d(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NJ(b)&&(e+f|0)<=NJ(d)){a:{b:{if(b!==d){g=HN(BI(b));h=HN(BI(d));if(g!==null&&h!==null){if(g===h)break b;if(!IF(g)&&!IF(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d1;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AI4(n.constructor,o)?1:0)){Nf(b,c,d,e,j);b=new I4;X(b);N(b);}j=j+1|0;k=m;}Nf(b,c,d,e,f);return;}if(!IF(g))break a;if(IF(h))break b;else break a;}b=new I4;X(b);N(b);}}Nf(b,c,
d,e,f);return;}b=new I4;X(b);N(b);}b=new BF;X(b);N(b);}d=new GV;Bl(d,C(35));N(d);}
function DQ(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=NJ(b)&&(e+f|0)<=NJ(d)){Nf(b,c,d,e,f);return;}b=new BF;X(b);N(b);}
function Nf(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EW(){return Long_fromNumber(new Date().getTime());}
function AFF(){return A4u($rt_globals.performance.now()*1000000.0);}
var AFT=G();
var AHY=G();
function Xs(b,c){var d,e,f;d=(El()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(El()).getElementById($rt_ustr(b)).appendChild(d);}
function ADG(){return (El()).createElement("canvas");}
function AGv(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AP_(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AKc=G();
var VU=G();
function AX2(a,b){var c;c=new Bt;Bl(c,$rt_str(b.message));N(c);}
var AF6=G();
function HW(b){return $rt_str(b);}
var AHl=G();
function Ku(b,c){var d,e,f,g;b=b.data;d=B2(c);e=d.data;f=Bd(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function N1(b,c){var d,e,f,g;b=b.data;d=DE(c);e=d.data;f=Bd(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function I9(b,c){var d,e,f,g;b=b.data;d=BN(c);e=d.data;f=Bd(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function De(b,c){var d,e,f,g;d=b.data;e=AFB(HN(BI(b)),c);f=Bd(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AFu(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BV(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(37));U(c,e[d]);d=d+1|0;}BV(c,C(38));return L(c);}
function ARf(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BV(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(37));E5(c,e[d]);d=d+1|0;}BV(c,C(38));return L(c);}
function AS4(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BV(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BV(c,C(37));f=e[d];AHP(c,c.K,f);d=d+1|0;}BV(c,C(38));return L(c);}
function Jm(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BS;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AD1(b,c,d,e){var f,g;if(c>d){e=new BS;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function KP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A4w;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bd(j,h+f|0);l=h+(2*f|0)|0;m=Bd(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.pv(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AIX(b,c){return AAs(b,0,b.data.length,c);}
function AAs(b,c,d,e){var f,g,h,i,j;f=BK(c,d);if(f>0){g=new BS;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AFy(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AEL(e[d])|0;d=d+1|0;}return c;}
var ABz=G(0);
var AIv=G();
function AV8(a,b){return a.L6(b);}
function AO8(a){return a.Pl();}
var AEQ=G();
var F6=G(0);
var R5=G();
var BF=G(Bt);
var AIT=G();
function NJ(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A4R());}return b.data.length;}
function AFB(b,c){if(b===null){b=new GV;X(b);N(b);}if(b===F($rt_voidcls())){b=new BS;X(b);N(b);}if(c>=0)return ASm(b.d1,c);b=new ADg;X(b);N(b);}
function ASm(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GV=G(Bt);
var I4=G(Bt);
function Di(){B.call(this);this.mn=0;}
var A4S=null;var A4T=null;var A4U=null;var A4V=null;var A4W=null;var A4X=null;var A4Y=null;var A4Z=null;var A40=null;var A41=null;function ASN(a){var b=new Di();AEu(b,a);return b;}
function AEu(a,b){a.mn=b;}
function O8(b){var c,d;c=A4X.data;if(b>=c.length)return ASN(b);d=c[b];if(d===null){d=ASN(b);A4X.data[b]=d;}return d;}
function Uz(b){var c,d;c=new BL;d=B2(1);d.data[0]=b;Ji(c,d);return c;}
function L3(b){return b>=65536&&b<=1114111?1:0;}
function CP(b){return (b&64512)!=55296?0:1;}
function Dg(b){return (b&64512)!=56320?0:1;}
function N$(b){return !CP(b)&&!Dg(b)?0:1;}
function Jh(b,c){return CP(b)&&Dg(c)?1:0;}
function EG(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JH(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function I3(b){return (56320|b&1023)&65535;}
function FB(b){return GU(b)&65535;}
function GU(b){if(A4V===null){if(A4Y===null)A4Y=AJc();A4V=AEF((A4Y.value!==null?$rt_str(A4Y.value):null));}return RX(A4V,b);}
function Ff(b){return GS(b)&65535;}
function GS(b){if(A4U===null){if(A4Z===null)A4Z=AJz();A4U=AEF((A4Z.value!==null?$rt_str(A4Z.value):null));}return RX(A4U,b);}
function RX(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BK(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AAY(b,c){if(c>=2&&c<=36){b=Xn(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Xn(b){var c,d,e,f,g,h,i,j,k,l;if(A4T===null){if(A40===null)A40=AIb();c=(A40.value!==null?$rt_str(A40.value):null);d=AQ_(Gf(c));e=MJ(d);f=BN(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+OL(d)|0;j=j+OL(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A4T=f;}g=A4T.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BK(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Id(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HJ(b){var c;if(b<65536){c=B2(1);c.data[0]=b&65535;return c;}return AId([JH(b),I3(b)]);}
function CC(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&N$(b&65535))return 19;if(A4W===null){if(A41===null)A41=AGR();d=(A41.value!==null?$rt_str(A41.value):null);e=Q(V6,16384);f=e.data;g=DE(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Nc(P(d,l));if(m==64){l=l+1|0;m=Nc(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Nc(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Nc(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AM6(k,k+i|0,N1(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AM6(k,k+i|0,N1(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A4W=De(e,j);}e=A4W.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.sx)o=p+1|0;else{c=d.w4;if(b>=c)return d.xd.data[b-c|0];c=p-1|0;}}return 0;}
function Kx(b){a:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HG(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CC(b)!=16?0:1;}
function XJ(b){switch(CC(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Q4(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return XJ(b);}return 1;}
function AHc(){A4S=F($rt_charcls());A4X=Q(Di,128);}
function AJc(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AJz(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AIb(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AGR(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Vt=G(0);
var Zv=G(0);
var EQ=G(0);
var AHf=G();
function El(){return $rt_globals.window.document;}
function AXI(a){return a.Hd();}
function AZH(a,b){return a.IT($rt_str(b));}
function AZv(a,b){a.Gt($rt_str(b));}
function AU2(a,b){return a.Me($rt_str(b));}
function AKv(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AMh(a){return a.PF();}
function AZE(a,b,c){return a.OA($rt_str(b),$rt_str(c));}
function AOh(a,b,c,d){a.BN($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function AT$(a){return a.Nu();}
function AYo(a){return !!a.Jf();}
function AZ_(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function APo(a){return a.GC();}
function ANW(a,b){a.Ot($rt_str(b));}
function APH(a){return !!a.Gl();}
function AS7(a){return a.I2();}
function AOI(a){return $rt_ustr(a.Eu());}
function AK7(a,b){return a.GN(b?1:0);}
function A02(a){return a.Je();}
function AWt(a,b,c){return a.Qc($rt_str(b),$rt_str(c));}
function APg(a,b,c){return a.MM(b,c?1:0);}
function ASo(a,b,c){return !!a.Iu($rt_str(b),$rt_str(c));}
function ATu(a){return a.HK();}
function ANG(a){return $rt_ustr(a.J8());}
function AMq(a,b){return !!a.DR(b);}
function ANi(a,b){return a.Ky($rt_str(b));}
function AWD(a,b,c){return a.Hb($rt_str(b),$rt_str(c));}
function AOR(a){return a.Lj();}
function AUa(a,b){return a.PK($rt_str(b));}
function ANh(a){return $rt_ustr(a.KZ());}
function AQJ(a){a.Gh();}
function AKl(a,b){return a.Qf($rt_str(b));}
function ART(a,b){return a.Gy($rt_str(b));}
function AUt(a,b){return a.Gg($rt_str(b));}
function AZ2(a){return $rt_ustr(a.Lv());}
function AUA(a,b,c){return a.N8(b,c);}
function AYw(a,b){return a.Et(b);}
function AQ8(a){return a.Ii();}
function AP7(a,b,c){a.Do($rt_str(b),E9(c,"handleEvent"));}
function APQ(a,b,c){return a.Fi(b,c);}
function ARO(a){return !!a.Pk();}
function ASM(a,b){return a.G$($rt_str(b));}
function AXS(a,b,c,d){a.A7($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function AMl(a){return a.Ij();}
function AUN(a,b,c){return a.GM($rt_str(b),$rt_str(c));}
function ATQ(a){return $rt_ustr(a.LM());}
function A0X(a){return a.Lb();}
function AP4(a){return a.Lo();}
function ATO(a){return a.Iv();}
function AP8(a,b,c){a.DQ($rt_str(b),E9(c,"handleEvent"));}
function AU_(a,b){return a.JV(b);}
function ANn(a,b){a.EM($rt_str(b));}
function AY8(a){return $rt_ustr(a.KS());}
function O7(){var a=this;B.call(a);a.w6=null;a.w7=null;a.w8=0;a.w9=null;a.w3=null;}
function AQE(a,b){var c,d,e,f,g;c=a.w6;d=a.w7;e=a.w8;f=a.w9;g=a.w3;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AIh=G();
function ARk(b){return Math.exp(b);}
function AHg(b){return Math.log(b);}
function Ja(b,c){return AXk(b,c);}
function AXk(b,c){return Math.pow(b,c);}
function DJ(){return ASV();}
function ASV(){return Math.random();}
function Bd(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function ASp(b,c){return Math.max(b,c);}
function ADX(b,c){return ASp(b,c);}
function Vz(b){if(b<0)b= -b|0;return b;}
function ANr(b){return Math.abs(b);}
var XA=G(0);
var Q_=G(0);
var YN=G(0);
var Sm=G(0);
var ACH=G(0);
var AA0=G(0);
var AHE=G();
function AX$(a,b,c){a.DQ($rt_str(b),E9(c,"handleEvent"));}
function AWU(a,b,c){a.Do($rt_str(b),E9(c,"handleEvent"));}
function ANI(a,b,c,d){a.A7($rt_str(b),E9(c,"handleEvent"),d?1:0);}
function ALg(a,b){return !!a.DR(b);}
function AVo(a,b,c,d){a.BN($rt_str(b),E9(c,"handleEvent"),d?1:0);}
var BS=G(Bt);
var ADg=G(Bt);
var Ia=G(BF);
var AHS=G();
function AIp(){return "ping";}
function AGO(b){return b===AIp()?1:0;}
var Yq=G(0);
var W_=G(0);
function ZB(){var a=this;B.call(a);a.sO=null;a.nQ=null;a.pY=null;a.ej=null;a.ua=null;a.vM=null;a.o_=null;a.hs=null;a.k2=0;a.Dy=0;a.x$=null;a.gm=null;a.z5=null;}
function We(a,b){var c;c=El();b=$rt_ustr(b);c.title=b;}
function Sd(a){a.Dy=$rt_globals.requestAnimationFrame(Bu(a.sO,"onAnimationFrame"));}
function Jk(a){a.k2=1;}
function Z5(a,b,c){var d,e;a.o_.eh=BJ(b,c);d=a.ej;e=b;d.width=e;d=a.ej;e=c;d.height=e;d=a.hs;V(d.c3,b,c);e=d.X;d=d.c3;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gm.bZ(a.hs.c3,K_(a));a.gm.bP();}
function YX(a,b){var c,d,e;c=a.x$;d=a.ej;if(BT(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.x$=b;}
function MA(a){return $rt_globals.performance.now()/1000.0;}
function K_(a){return $rt_globals.window.devicePixelRatio;}
function I1(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADv(null,b);else{c=new ACg;d=$rt_globals.window.showDirectoryPicker();e=new ACf;e.ru=b;e.rv=c;d.then(Bu(e,"f"),Bu(c,"f"));}}
function NT(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))ADv(b,null);else{c=new ACP;d=$rt_globals.window.showOpenFilePicker();e=new ACO;e.rR=b;d.then(Bu(e,"f"),Bu(c,"f"));}}
function CR(a,b,c,d){var e,f,g,h;e=a.z5;f=e.h_;if(f>0){g=e.oD.data;f=f-1|0;e.h_=f;SI(e,b,c,d,g[f]);}else{h=e.lV;e=new ACh;e.tn=b;e.zs=c;e.yJ=d;b=new SK;b.qK=e;c=h.lU;b.y_=c;if(c===null)h.ox=b;else c.s$=b;h.lU=b;h.b1=h.b1+1|0;h.kI=h.kI+1|0;}}
function Q2(a,b,c){var d,e;if(!LH()){b=new Bt;Bl(b,C(39));c.j(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Zh;e.sh=b;b=AJ_(c);d.then(Bu(e,"f"),Bu(b,"f"));}}
function SL(a,b,c,d){var e,f,g;if(!LH()){b=new Bt;Bl(b,C(39));d.j(b);}else{e=$rt_globals.navigator.clipboard;f=Gf(b);A2u();b=A42;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ABF;e.uo=c;c=AJ_(d);b.then(Bu(e,"f"),Bu(c,"f"));}}
function UN(a){return LH()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AJ_(b){var c;c=new Ov;c.yS=b;return c;}
var BE=G(0);
var AIC=G();
var Z=G(0);
var AID=G();
var YR=G(0);
function TB(){B.call(this);this.wS=null;}
function AWs(a,b){var c,d;c=b;b=a.wS;if(!(!b.gm.cg(c/1000.0)&&!b.k2)){d=b.hs.c3;if(Bb(d.a,d.b)){b.k2=0;b.gm.bP();}}Sd(b);}
function Tz(){B.call(this);this.Av=null;}
function Dw(a){Jk(a.Av);}
var Yj=G(0);
function TA(){B.call(this);this.yh=null;}
function AMA(a,b,c){var d,e,f,g;c=a.yh;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ej){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=K_(c);Z5(c,Gt(f.width*g),Gt(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Z5(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGe=G();
function ATz(){return {box:'device-pixel-content-box'};}
function AQT(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cx=G(0);
function Ty(){B.call(this);this.qU=null;}
function AQI(a,b){b=a.qU;b.gm.bZ(b.hs.c3,K_(b));b.gm.bP();}
function Zm(){var a=this;B.call(a);a.lV=null;a.zP=null;a.rC=null;a.oD=null;a.vV=0;a.h_=0;a.Ar=null;}
function SI(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.vV+1|0;a.vV=f;g=a.rC;h=CU(f);g.jD=N8(g,g.jD,h);h=AA2(g,h);Vv(h,b);Vv(h,b);g.lQ=g.lQ+1|0;b=a.zP[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BL)g=$rt_ustr(c);else if(I2(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(I2(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(I2(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof R7)){b=new BS;c
=JG(BI(c));g=new K;M(g);H(H(g,C(40)),c);Bl(b,L(g));N(b);}c=c;g=c.h0;if(g===null)g=c.fW;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var T6=G(0);
function ATc(a,b){var c;c=a.b6();while(c.cz()){b.j(c.b8());}}
var Hq=G(0);
function Tc(a){var b,c;b=new Zk;c=new Qw;c.w2=a;b.y6=c;return b;}
function AWH(a,b){var c,d;c=a.b6();d=0;while(c.cz()){if(b.L(c.b8())){c.oF();d=1;}}return d;}
var Fu=G();
function Eu(a){return a.cY()?0:1;}
function Gb(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AFB(HN(BI(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B4(a);while(B8(f)){g=b.data;h=e+1|0;g[e]=B9(f);e=h;}return b;}
function AZk(a,b){var c;c=a.b6();while(c.cz()){if(BT(c.b8(),b)){c.oF();return 1;}}return 0;}
function HU(a,b){var c,d;c=0;d=b.b6();while(d.cz()){if(!a.yt(d.b8()))continue;c=1;}return c;}
var Ni=G(0);
var Mn=G(0);
function Fh(){Fu.call(this);this.b1=0;}
function AQW(a,b){a.nP(a.cY(),b);return 1;}
function B4(a){var b;b=new Wj;b.iW=a;b.pt=a.b1;b.k$=a.cY();b.hu=(-1);return b;}
function AQk(a,b,c){var d,e;if(b>=0&&b<=a.cY()){if(c.et())return 0;d=c.b6();while(d.cz()){e=b+1|0;a.nP(b,d.b8());b=e;}return 1;}c=new BS;X(c);N(c);}
function AZX(a,b,c){c=new D_;X(c);N(c);}
function KV(a,b){var c,d;c=a.cY();d=0;while(true){if(d>=c)return (-1);if(BT(b,a.m8(d)))break;d=d+1|0;}return d;}
function APA(a,b){var c,d;if(!I2(b,Mn))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BT(Bw(a,d),Bw(c,d)))return 0;d=d+1|0;}return 1;}
var L0=G(Fh);
var Oq=G(0);
var AC1=G(0);
function SU(){var a=this;L0.call(a);a.ox=null;a.lU=null;a.kI=0;}
var Li=G(0);
function D9(){var a=this;B.call(a);a.ok=null;a.op=null;}
var En=G(0);
var UM=G(0);
var OK=G(0);
function Xq(){var a=this;D9.call(a);a.jD=null;a.lN=null;a.Cr=null;a.lQ=0;}
function AGj(a,b){var c;c=AA2(a,b);if(c===null)return null;a.jD=KS(a,a.jD,b);a.lQ=a.lQ+1|0;return c.jW;}
function AA2(a,b){var c,d;c=a.jD;while(true){if(c===null)return null;d=MB(a.lN,b,c.ls);if(!d)break;c=d>=0?c.b3:c.bR;}return c;}
function N8(a,b,c){var d,e;if(b===null){b=new Ks;d=null;b.ls=c;b.jW=d;b.gs=1;b.gC=1;return b;}e=MB(a.lN,c,b.ls);if(!e)return b;if(e>=0)b.b3=N8(a,b.b3,c);else b.bR=N8(a,b.bR,c);ER(b);return MI(b);}
function KS(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MB(a.lN,c,b.ls);if(d<0)b.bR=KS(a,b.bR,c);else if(d>0)b.b3=KS(a,b.b3,c);else{e=b.b3;if(e===null)return b.bR;f=b.bR;g=Q(Ks,e.gs).data;h=0;while(true){b=e.bR;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b3;while(h>0){h=h+(-1)|0;j=g[h];j.bR=b;ER(j);b=MI(j);}e.b3=b;e.bR=f;ER(e);b=e;}ER(b);return MI(b);}
function Zq(){B.call(this);this.yw=null;}
function Zr(){var a=this;B.call(a);a.xW=null;a.xV=0;}
function ATt(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.xW;d=a.xV;AGO(b.data);e=c.lV;f=e.ox;if(f===null)g=null;else{g=f.s$;e.ox=g;if(g!==null)g.y_=null;else e.lU=null;e.kI=e.kI-1|0;e.b1=e.b1+1|0;g=f.qK;}if(g!==null)SI(c,g.tn,g.zs,g.yJ,d);else{h=c.oD.data;i=c.h_;c.h_=i+1|0;h[i]=d;}c=c.Ar;b=b.data;if(!AGO(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BS;X(b);N(b);}if(b.length<1){b=new BS;AFx(b);N(b);}e=CU(b[0]);c=AGj(c.yw,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?HW(M2(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A1Y(M2(e)):(e instanceof $rt_globals.File?1:0)?AI0(null,M2(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AI0(M2(e),null);k=l;}c.j(h);}}
function AEb(){var a=this;B.call(a);a.cp=null;a.ja=null;a.DI=null;a.eh=null;}
function A3e(a,b){var c=new AEb();AZT(c,a,b);return c;}
function AZT(a,b,c){var d,e,f,g;a.eh=null;a.ja=b;d=new XY;d.bF=CS(Q(Cp,0));d.nT=CS(Q(Cp,0));d.bO=CS(Q(CB,0));d.fe=CS(Q(Ey,0));d.c1=CS(Q(C6,0));d.gv=CS(Q(Fs,0));d.gU=CS(Q(FK,0));d.lL=CS(Q(Z,0));d.mk=CS(Q(Z,0));d.dk=c;a.cp=d;e=$rt_globals.window;f=Q(C5,14);g=f.data;d=new AB2;d.qk=a;g[0]=C0(a,b,C(41),d);d=new AB3;d.yG=a;g[1]=C0(a,b,C(42),d);d=new AB4;d.wJ=a;g[2]=C0(a,b,C(43),d);d=new AB5;d.uU=a;g[3]=C0(a,b,C(44),d);d=new AB6;d.sH=a;g[4]=C0(a,b,C(45),d);d=new AB7;d.qH=a;g[5]=C0(a,b,C(46),d);d=new AB8;d.AE=a;g[6]
=C0(a,b,C(47),d);d=new AB9;d.yj=a;g[7]=C0(a,b,C(48),d);d=new AB$;d.wn=a;g[8]=C0(a,b,C(49),d);d=new AB_;d.ur=a;g[9]=C0(a,b,C(50),d);d=new U9;d.tZ=a;g[10]=C0(a,b,C(51),d);d=new U$;d.tg=a;e.addEventListener("paste",Bu(d,"handleEvent"),!!1);g[11]=Uw(a,e,C(52),d);d=new U_;d.vy=a;g[12]=C0(a,e,C(53),d);d=new Va;d.Aa=a;g[13]=C0(a,e,C(54),d);c=new QF;c.Bq=f;a.DI=c;e=new ACW;e.xh=b;b.onpointerdown=Bu(e,"f");e=new ACX;e.wx=b;b.onpointerup=Bu(e,"f");}
function VP(){return (El()).activeElement;}
function C0(a,b,c,d){b.addEventListener($rt_ustr(c),Bu(d,"handleEvent"));return Uw(a,b,c,d);}
function Uw(a,b,c,d){var e;e=new Yg;e.C_=b;e.Db=c;e.Da=d;return e;}
function AAp(a,b){var c;c=new AA4;c.uT=b;return c;}
function E2(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.ja.getBoundingClientRect();e=BJ(Gt((b.clientX-d.left)*c),Gt((b.clientY-d.top)*c));f=AIN(a.eh);d=new Ok;AAQ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.g=e;d.C1=f;return d;}
function Vd(a,b,c){var d,e,f,g;d=new PT;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AAQ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.n$=0;d.d$=e;d.bl=f;d.jn=c;d.ym=g;return d;}
function D2(a,b){b.stopPropagation();b.preventDefault();}
function Nx(){var a=this;B.call(a);a.oS=null;a.cl=null;a.X=null;a.lu=0;a.y$=null;a.Dn=0;a.Ca=0;a.kB=null;a.kq=null;a.Co=null;a.DW=null;a.tE=null;a.vY=null;a.ix=null;a.hT=null;a.jw=null;a.Cw=null;a.ri=null;a.c3=null;a.Ai=null;a.o6=0;a.l5=0;a.ny=0;a.nn=0;a.kV=0;a.nu=null;a.nG=0.0;a.pc=0.0;}
function AJx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c3=new Bg;a.o6=0;a.nu=new ACc;a.oS=c;a.lu=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.X=b;a.cl=Kr(c,4,4,1);i=AKs(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B2(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Qz;Jn();c=A43;m.eH=b;m.hF=c;m.sT=j.length/c.mC|0;m.Ac
=l.length;n=b.createBuffer();m.vJ=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.uW=null;n=b.createBuffer();m.uv=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.ri=m;a.Ca=Nb(g,C(56));c=new Yh;c.dW=b;a.y$=c;a.nG=e;a.pc=f;d=b.getParameter(3379);a.Dn=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Dc,9);i=k.data;c=A11(b);a.kB=c;i[0]=c;c=A2T(b,C(58));a.kq=c;i[1]=c;c=new YB;H1(c,b,C(59),
C(60),A43);a.Co=c;i[2]=c;c=A3I(b);a.DW=c;i[3]=c;c=new Pd;UV(c,b,C(61),C(62));a.tE=c;i[4]=c;c=A3U(b);a.vY=c;i[5]=c;c=A2y(b);a.ix=c;i[6]=c;c=A3D(b);a.hT=c;i[7]=c;c=A3E(b);a.jw=c;i[8]=c;a.Cw=k;ACI(b,C(63));}
function Gy(a,b,c){return HY(a,b,c,400,0);}
function HB(a,b,c){return Kr(a.oS,b,c,0);}
function DZ(a,b,c,d){return Kr(a.oS,b,c,d);}
function Ex(a,b){var c,d,e,f,g;c=a.X;d=b.bm;e=b.br;f=b.be;g=b.bB;c.clearColor(d,e,f,g);a.X.clear(16384);}
function B7(a,b){var c;if(b==a.l5)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.l5;a.l5=b;return c;}
function Ne(a,b,c){LB(a,b.a,b.b,c);}
function LB(a,b,c,d){var e,f;e=d.a;f=d.b;a.nn=1;a.kV=1;d=a.nu;d.sA=b;d.sB=c;d.sz=e;d.sy=f;AAR(a);}
function F2(a){a.nn=0;a.kV=0;AAR(a);}
function AAR(a){var b,c,d,e,f,g;b=a.ny;c=a.nn;if(b!=c){a.ny=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.ny&&a.kV){a.kV=0;d=a.X;e=a.nu;b=e.sA;c=a.c3.b-e.sB|0;f=e.sy;c=c-f|0;g=e.sz;d.scissor(b,c,g,f);}}
function FS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.ri;c=a.o6;d=b.hF.yP;e=b.eH;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eH;h=b.vJ;e.bindBuffer(34962,h);i=b.hF.pC.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eH;m=k.jh;n=k.ge;o=b.hF.mC*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.ge|0;j=j+1|0;}a:{e=b.uW;if(e!==null){c=0;b.eH.bindBuffer(34962,e);i=b.hF.x8.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eH;j=e.jh;p=e.ge;m=e.ro;n=b.hF.xf;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.ge|0;g=g+1|0;}}}q=b.uv;if(q===null){c=b.sT;if(c>0)b.eH.drawArrays(4,0,c);}else{b.eH.bindBuffer(34963,q);k=b.eH;g=b.Ac;k.drawElements(4,g,5123,0);}a.o6=d;}
function Bs(a,b,c,d,e){Gh(a,a.kB);Gs(a.kB,a.X,b,c,d,a.c3);d=a.kB;Fv(a.X,d.zT,e);FS(a);}
function ADi(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gh(a,a.hT);Gs(a.hT,a.X,b,c,d,a.c3);j=a.hT;d=a.X;k=j.vi;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.vh;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.hT;Fv(a.X,d.wa,i);FS(a);}
function LU(a,b,c,d,e,f,g,h){var i,j;Gh(a,a.jw);Gs(a.jw,a.X,b,c,d,a.c3);d=a.jw;i=a.X;j=d.sR;i.uniform2f(j,e,f);Fv(i,d.wV,g);d=a.jw;Fv(a.X,d.vL,h);FS(a);}
function D1(a,b,c,d,e,f,g,h,i){var j;j=!i?a.tE:a.vY;Gh(a,j);AJU(j,a.X,!i?a.pc:a.nG);Gs(j,a.X,b,c,d,a.c3);NE(j,a.X,f);ADn(j,a.X,f,e);AIV(j,a.X,g,h);FS(a);}
function CT(a){var b,c;b=new Il;c=a.y$;b.fl=new Bg;b.ey=c;b.fP=c.dW.createTexture();A44=A44+1|0;return b;}
function ME(a,b){ACI(a.X,b);}
function Gh(a,b){var c,d;if(b!==a.Ai){c=a.X;d=b.bD;c.useProgram(d);a.Ai=b;}}
function Tr(){var a=this;Nx.call(a);a.BY=null;a.Cp=null;}
function HY(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cl;g=AHM(b,c,d,e);Kn(f,g);h=f.c$.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=DN(f,C(64));m=DN(f,C(65));h=new Ll;n=g;h.nF=b;h.wq=c;h.Bl=d;h.BB=e;h.dq=i;h.ev=j;h.Bc=l;h.pn=k;h.qa=n;h.sq=CV(i);h.Ch=CV(h.ev);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Bh=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.A$=b;return h;}
function Ci(){B.call(this);this.B=null;}
function DK(a,b){a.B=b;}
function A0Y(a,b){return 0;}
function XY(){var a=this;B.call(a);a.bF=null;a.nT=null;a.bO=null;a.fe=null;a.c1=null;a.gv=null;a.gU=null;a.lL=null;a.mk=null;a.dk=null;a.jm=null;a.wt=0;}
function SE(a,b){var c,d,e,f;Dw(a.dk);c=(Cz(!b.jn?a.nT:a.bF)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].L(b);if(f)break;if(b.n$)break;e=e+1|0;}return f;}
function QZ(a,b,c){var d,e,f;Dw(a.dk);d=(Cz(a.gv)).data;e=d.length;f=0;while(f<e){if(d[f].hK(b,c))return 1;f=f+1|0;}return 0;}
function AB2(){B.call(this);this.qk=null;}
function AYh(a,b){var c;c=a.qk;if(SE(c.cp,Vd(c,b,1)))D2(c,b);}
function AB3(){B.call(this);this.yG=null;}
function AYs(a,b){var c;c=a.yG;if(SE(c.cp,Vd(c,b,0)))D2(c,b);}
function AB4(){B.call(this);this.wJ=null;}
function APl(a,b){var c,d,e,f,g,h,i;c=a.wJ;if(c.eh!==null){a:{b:{d=E2(c,b);e=c.cp;Dw(e.dk);f=e.jm;if(f!==null)f.j(d);else{g=(Cz(e.bO)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}D2(c,b);}}
function AB5(){B.call(this);this.uU=null;}
function AXa(a,b){var c,d,e,f,g,h;c=a.uU;b.button;if(c.eh!==null)a:{d=E2(c,b);c=c.cp;e=b.button;Dw(c.dk);if(c.jm===null){f=(Cz(c.bO)).data;g=f.length;h=0;while(h<g){b=f[h].cv(d,e);if(b!==null){c.jm=b;c.wt=e;break a;}h=h+1|0;}}}}
function AB6(){B.call(this);this.sH=null;}
function AXm(a,b){var c,d,e,f,g,h,i;c=a.sH;b.button;if(c.eh!==null){d=E2(c,b);e=c.cp;f=b.button;Dw(e.dk);if(f==e.wt&&e.jm!==null)e.jm=null;g=(Cz(e.bO)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dv(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D2(c,b);}}
function AB7(){B.call(this);this.qH=null;}
function AQN(a,b){var c,d,e,f,g,h,i,j,k;c=a.qH;if(c.eh!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cp;f=E2(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dw(e.dk);i=(Cz(e.fe)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dt(f,d,h))break b;k=k+1|0;}}D2(c,b);}}
function AB8(){B.call(this);this.AE=null;}
function ANH(a,b){var c,d,e,f,g,h,i,j;c=a.AE;if(c.eh!==null){d=E2(c,b);e=c.cp;f=b.button;g=b.detail;Dw(e.dk);h=(Cz(e.bO)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cu(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D2(c,b);}}
function AB9(){B.call(this);this.yj=null;}
function A1k(a,b){var c,d,e,f,g,h,i;c=a.yj;if(c.eh!==null){d=E2(c,b);e=c.cp;Dw(e.dk);f=(Cz(e.c1)).data;g=f.length;h=0;a:{while(h<g){if(f[h].L(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D2(c,b);}}
function AB$(){B.call(this);this.wn=null;}
function ANf(a,b){var c,d,e;b=a.wn.cp;c=(Cz(b.mk)).data;d=c.length;e=0;while(e<d){c[e].h();e=e+1|0;}Dw(b.dk);}
function AB_(){B.call(this);this.ur=null;}
function ARs(a,b){var c,d,e;b=a.ur.cp;c=(Cz(b.lL)).data;d=c.length;e=0;while(e<d){c[e].h();e=e+1|0;}Dw(b.dk);}
function U9(){B.call(this);this.tZ=null;}
function A0Z(a,b){var c;c=a.tZ;if(c.eh!==null)E2(c,b);}
function U$(){B.call(this);this.tg=null;}
function AO6(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.tg;if(VP()===c.ja){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cz(c.cp.gU)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cV();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cp.dk;m=new O3;m.uA=k;m.uB=l;g.getAsString(Bu(m,"accept"));D2(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(67)),k),C(68)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function U_(){B.call(this);this.vy=null;}
function APq(a,b){var c;c=a.vy;if(VP()===c.ja&&QZ(c.cp,AAp(c,b),0))D2(c,b);}
function Va(){B.call(this);this.Aa=null;}
function AYy(a,b){var c;c=a.Aa;if(VP()===c.ja&&QZ(c.cp,AAp(c,b),1))D2(c,b);}
var AAI=G(0);
var AAT=G();
function Kr(a,b,c,d){var e,f,g,h,i;e=new YY;e.iV=d;A4M=A4M+1|0;e.nh=b;e.mL=c;f=(El()).createElement("canvas");e.iM=f;g=b;f.width=g;h=e.iM;f=c;h.height=f;if(!d)g=e.iM.getContext("2d");else{i=e.iM;h=AUg();g=i.getContext("2d",h);}e.c$=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AAS=G();
function AOm(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Om(){var a=this;B.call(a);a.O=null;a.p=null;a.bU=null;}
var Kk=G();
var A4w=null;function MB(a,b,c){return b.lS(c);}
function AEY(){A4w=new Kk;}
function AGp(){var a=this;B.call(a);a.gW=null;a.ie=null;a.gf=0;}
function CS(a){var b=new AGp();ANE(b,a);return b;}
function ANE(a,b){a.gW=b;}
function Bc(a,b){var c,d,e;c=a.gf;d=a.gW;if(c==d.data.length)a.gW=De(d,c+4|0);d=a.gW.data;e=a.gf;a.gf=e+1|0;d[e]=b;a.ie=null;}
function Cz(a){var b;b=a.ie;if(!(b!==null&&b.data.length==a.gf))a.ie=De(a.gW,a.gf);return a.ie;}
var Ep=G(0);
var Cp=G(0);
var CB=G(0);
function AWN(a,b){return 0;}
function AR9(a,b,c){return null;}
function AKQ(a,b,c){return 0;}
function AYL(a,b,c,d){return 0;}
var Ey=G(0);
var C6=G(0);
var Fs=G(0);
var DH=G(0);
var FK=G(0);
function QF(){B.call(this);this.Bq=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BJ(a,b){var c=new Bg();AEd(c,a,b);return c;}
function AIN(a){var b=new Bg();AMk(b,a);return b;}
function AEd(a,b,c){a.a=b;a.b=c;}
function AMk(a,b){a.a=b.a;a.b=b.b;}
function Cs(a,b){a.a=b.a;a.b=b.b;}
function V(a,b,c){a.a=b;a.b=c;}
function AGW(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(69)),b),C(70)),c);return L(d);}
function AOd(a,b){var c;a:{b:{if(a!==b){if(BI(b)!==BI(a))break b;if(!JM(a,b))break b;}c=1;break a;}c=0;}return c;}
function JM(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function ACc(){var a=this;B.call(a);a.sA=0;a.sB=0;a.sz=0;a.sy=0;}
var AFX=G();
var AHs=G(0);
function Yh(){B.call(this);this.dW=null;}
function NM(){var a=this;B.call(a);a.bD=null;a.DY=null;}
function AIZ(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(71):C(72);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bm(Bx(),g);Bm(ED(),C(73));Bm(ED(),d);Bm(ED(),C(73));b=new Bt;Bl(b,g);N(b);}
function Dc(){var a=this;NM.call(a);a.wm=null;a.rI=null;a.nd=null;}
function A45(a,b,c,d){var e=new Dc();H1(e,a,b,c,d);return e;}
function H1(a,b,c,d,e){var f,g,h,i,j,k;a.DY=e;f=AIZ(b,35633,c);d=AIZ(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bD=g;h=e.s2.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bD;k=c.jh;c=c.rP;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bD;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ACI(b,C(74));a.nd=new Bg;c=a.bD;a.wm=b.getUniformLocation(c,"uResolution");c=a.bD;a.rI=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new K;M(c);H(H(c,C(75)),d);Bl(b,L(c));N(b);}
function AEk(a,b,c){var d,e,f;if(!JM(a.nd,c)){Cs(a.nd,c);d=a.wm;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Gs(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rI;b.uniform4f(e,i,l,h,j);AEk(a,b,f);}
function AJC(){Dc.call(this);this.zT=null;}
function A11(a){var b=new AJC();AWA(b,a);return b;}
function AWA(a,b){var c;Jn();H1(a,b,C(59),C(76),A43);c=a.bD;a.zT=b.getUniformLocation(c,"uColor");}
function Fi(){Dc.call(this);this.sE=null;}
function A2T(a,b){var c=new Fi();AAr(c,a,b);return c;}
function A46(a,b,c){var d=new Fi();AAv(d,a,b,c);return d;}
function AAr(a,b,c){AAv(a,b,C(59),c);}
function AAv(a,b,c,d){Jn();H1(a,b,c,d,A43);c=a.bD;a.sE=b.getUniformLocation(c,"sDiffuse");}
function NE(a,b,c){var d;d=a.sE;b.uniform1i(d,0);b.activeTexture(33984);c=c.fP;b.bindTexture(3553,c);}
var YB=G(Dc);
function AET(){Fi.call(this);this.A3=null;}
function A3I(a){var b=new AET();AQl(b,a);return b;}
function AQl(a,b){var c;AAr(a,b,C(77));c=a.bD;a.A3=b.getUniformLocation(c,"uContrast");}
function Hl(){var a=this;Fi.call(a);a.rc=null;a.rW=null;a.sP=null;a.y1=null;a.pS=0.0;}
function A47(a,b,c){var d=new Hl();UV(d,a,b,c);return d;}
function UV(a,b,c,d){AAv(a,b,c,d);c=a.bD;a.rc=b.getUniformLocation(c,"uTexTransform");c=a.bD;a.rW=b.getUniformLocation(c,"uColor");c=a.bD;a.sP=b.getUniformLocation(c,"uBgColor");c=a.bD;a.y1=b.getUniformLocation(c,"uTextPow");}
function AJU(a,b,c){var d;if(a.pS!==c){a.pS=c;d=a.y1;b.uniform2f(d,c,0.0);}}
function AIV(a,b,c,d){Fv(b,a.rW,c);Fv(b,a.sP,d);}
function ADn(a,b,c,d){var e,f,g,h,i,j;c=c.fl;e=c.a;f=c.b;g=d.bm;h=e;g=g/h;i=d.br;j=f;i=i/j;h=d.be/h;j=d.bB/j;c=a.rc;b.uniform4f(c,g,i,h,j);}
var Pd=G(Hl);
var AGF=G(Hl);
function A3U(a){var b=new AGF();AVv(b,a);return b;}
function AVv(a,b){UV(a,b,C(61),C(78));}
function AHF(){var a=this;Fi.call(a);a.uX=null;a.uV=null;a.rX=null;}
function A2y(a){var b=new AHF();AMK(b,a);return b;}
function AMK(a,b){var c,d;AAr(a,b,C(79));c=a.bD;a.uX=b.getUniformLocation(c,"uColorB");d=a.bD;a.uV=b.getUniformLocation(d,"uColorF");d=a.bD;a.rX=b.getUniformLocation(d,"uContrast");}
function AI9(){var a=this;Dc.call(a);a.wa=null;a.vi=null;a.vh=null;}
function A3D(a){var b=new AI9();AVx(b,a);return b;}
function AVx(a,b){var c;Jn();H1(a,b,C(59),C(80),A43);c=a.bD;a.wa=b.getUniformLocation(c,"uColor");c=a.bD;a.vi=b.getUniformLocation(c,"uPoints1");c=a.bD;a.vh=b.getUniformLocation(c,"uPoints2");}
function ADR(){var a=this;Dc.call(a);a.vL=null;a.sR=null;a.wV=null;}
function A3E(a){var b=new ADR();AUu(b,a);return b;}
function AUu(a,b){var c;Jn();H1(a,b,C(59),C(81),A43);c=a.bD;a.vL=b.getUniformLocation(c,"uColor");c=a.bD;a.sR=b.getUniformLocation(c,"uBaseline");c=a.bD;a.wV=b.getUniformLocation(c,"uScaleHExp");}
var Y8=G(0);
var AKa=G(0);
function Fv(b,c,d){var e,f,g,h;e=d.bm;f=d.br;g=d.be;h=d.bB;b.uniform4f(c,e,f,g,h);}
function ACI(b,c){var d,e;d=b.getError();if(d){b=Bx();e=new K;M(e);U(H(e,c),d);Bm(b,L(e));}}
function Yg(){var a=this;B.call(a);a.C_=null;a.Db=null;a.Da=null;}
function Qz(){var a=this;B.call(a);a.eH=null;a.hF=null;a.vJ=null;a.uW=null;a.uv=null;a.sT=0;a.Ac=0;}
function CG(){var a=this;B.call(a);a.C$=null;a.fC=0;}
function DD(a,b,c){a.C$=b;a.fC=c;}
function G0(){var a=this;CG.call(a);a.s2=null;a.pC=null;a.x8=null;a.mC=0;a.xf=0;a.yP=0;}
var A43=null;var A48=null;function Jn(){Jn=Bn(G0);AN2();}
function AN2(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G0;c=Q(Eb,2);d=c.data;A0q();d[0]=A49;d[1]=A4$;Jn();DD(b,C(82),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.pl.fC){case 0:f=f+l.ge|0;h=h+1|0;break a;case 1:e=e+l.ge|0;g=g+1|0;break a;default:}}i=i|1<<l.jh;k=k+1|0;}b.s2=c;b.mC=e;b.xf=f;b.yP=i;c=Q(Eb,g);m=c.data;b.pC=c;c=Q(Eb,h);n=c.data;b.x8=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.pl.fC){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A43
=b;c=Q(G0,1);c.data[0]=b;A48=c;}
var L9=G(0);
var Sg=G(0);
var AAX=G(0);
var GJ=G();
function My(){GJ.call(this);this.AR=null;}
function AEA(){var a=this;My.call(a);a.B$=0;a.mI=0;a.la=null;a.mq=null;a.tz=null;}
function APy(a,b){var c=new AEA();A0b(c,a,b);return c;}
function A0b(a,b,c){a.AR=b;b=new K;M(b);a.la=b;a.mq=B2(32);a.B$=c;AEv();a.tz=A4_;}
function AAb(a,b,c,d){var e,$$je;e=a.AR;if(e===null)a.mI=1;if(!(a.mI?0:1))return;a:{try{e.mi(b,c,d);break a;}catch($$e){$$je=EO($$e);if($$je instanceof IW){}else{throw $$e;}}a.mI=1;}}
function WK(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AIA(b,c,d-c|0);e=DE(Be(16,Bd(e.length,1024)));g=AIo(e,0,e.data.length);h=a.tz;i=new P9;b=DE(1);j=b.data;j[0]=63;Hd();k=A5a;i.ng=k;i.mM=k;c=j.length;if(c&&c>=i.vg){i.C9=h;i.rN=b.hb();i.B5=2.0;i.vg=4.0;i.w0=B2(512);i.qE=DE(512);k=A5b;if(k===null){i=new BS;Bl(i,C(83));N(i);}i.ng=k;i.mM=k;a:while(true){if(i.k5==3){f=new C4;X(f);N(f);}i.k5=2;b:{while(true){try{k=ADJ(i,f,g);}catch($$e){$$je=EO($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(IQ(k))
{d=Cf(f);if(d<=0)break b;k=Ek(d);}else if(H9(k))break;h=!L1(k)?i.ng:i.mM;c:{if(h!==A5b){if(h===A5c)break c;else break b;}d=Cf(g);b=i.rN;l=b.data.length;if(d<l){k=A5d;break b;}ACr(g,b,0,l);}Fo(f,f.Y+KT(k)|0);}}l=H9(k);AAb(a,e,0,g.Y);Pm(g);if(!l){while(true){d=i.k5;if(d!=2&&d!=4){f=new C4;X(f);N(f);}f=A5e;if(f===f)i.k5=3;l=H9(f);AAb(a,e,0,g.Y);Pm(g);if(!l)break;}return;}}N(AU8(f));}i=new BS;Bl(i,C(84));N(i);}
function Bm(a,b){var c,d,e,f,g,h,i,j;BM(BV(a.la,b),10);b=a.la;c=b.K;d=a.mq;if(c>d.data.length)d=B2(c);e=0;f=0;if(e>c){b=new BF;Bl(b,C(85));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}WK(a,d,0,c);a.la.K=0;}
function Hw(){GJ.call(this);this.DM=null;}
function Vj(a){a.DM=DE(1);}
var Lr=G(Hw);
var A4P=null;function AOf(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFD(){var b;b=new Lr;Vj(b);A4P=b;}
function Eb(){var a=this;CG.call(a);a.rP=null;a.pl=null;a.ge=0;a.ro=0;a.jh=0;}
var A49=null;var A4$=null;var A5f=null;function A0q(){A0q=Bn(Eb);AV5();}
function A1_(a,b,c,d,e,f,g){var h=new Eb();T3(h,a,b,c,d,e,f,g);return h;}
function T3(a,b,c,d,e,f,g,h){A0q();DD(a,b,c);a.rP=d;a.pl=e;a.ge=f;a.ro=g;a.jh=h;}
function AV5(){var b;b=new Eb;APh();T3(b,C(86),0,C(87),A5g,2,0,0);A49=b;b=A1_(C(88),1,C(89),A5g,2,0,1);A4$=b;A5f=I(Eb,[A49,b]);}
function Mq(){var a=this;B.call(a);a.C0=null;a.Dq=null;}
function AFN(b){var c,d;if(Gd(b))N(AH2(b));if(!AJn(P(b,0)))N(AH2(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AJn(d))break a;else N(AH2(b));}}c=c+1|0;}}
function AJn(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Ma=G(Mq);
var A4_=null;function AEv(){AEv=Bn(Ma);AMJ();}
function AFZ(a){var b,c;b=new Sk;b.gc=C(90);Hd();c=A5a;b.i0=c;b.nl=c;b.Dl=a;b.vo=0.3333333432674408;b.BD=0.5;b.we=DE(512);b.yE=B2(512);return b;}
function AMJ(){var b,c,d,e,f;b=new Ma;AEv();c=Q(BL,0);d=c.data;AFN(C(91));e=d.length;f=0;while(f<e){AFN(d[f]);f=f+1|0;}b.C0=C(91);b.Dq=c.hb();A4_=b;}
function Xu(){var a=this;B.call(a);a.f5=null;a.py=null;a.l6=null;a.yT=null;a.rz=null;a.rL=null;}
function AH5(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f5,b,c));}
function OC(a,b){var c,d,e,f,g,h,i,$$je;c=new BL;d=b;while(a.py[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f5,b,d));f=e.data;E8();d=f.length;AEv();g=A4_;h=AIo(e,0,d);a:{try{i=AFZ(g);Hd();g=AHz(AFh(AJP(i,A5b),A5b),h);break a;}catch($$e){$$je=EO($$e);if($$je instanceof F5){g=$$je;}else{throw $$e;}}h=new ACz;h.ke=1;h.kz=1;h.iw=C(92);h.mN=g;N(h);}if(!g.Y&&g.ee==g.nH)c.b_=g.ih;else{f=B2(Cf(g));e=f.data;c.b_=f;OX(g,f,0,e.length);}return c;}
function VQ(a,b){var c,d,e;c=new BL;d=b>>>1|0;e=d;while(a.l6[e]){e=e+1|0;}d=e-d|0;Ji(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f5,b,d)));return c;}
var HX=G(CG);
var A5h=null;var A5g=null;var A5i=null;function APh(){APh=Bn(HX);AVi();}
function AME(a,b){var c=new HX();AJu(c,a,b);return c;}
function AJu(a,b,c){APh();DD(a,b,c);}
function AVi(){var b;A5h=AME(C(93),0);b=AME(C(94),1);A5g=b;A5i=I(HX,[A5h,b]);}
var Nk=G(Hw);
var A4Q=null;function AMT(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AGU(){var b;b=new Nk;Vj(b);A4Q=b;}
function AFS(){BS.call(this);this.A9=null;}
function AH2(a){var b=new AFS();ARJ(b,a);return b;}
function ARJ(a,b){X(a);a.A9=b;}
var TC=G(Em);
var L_=G(0);
function ACW(){B.call(this);this.xh=null;}
function ARa(a,b){a.xh.setPointerCapture(b.pointerId);}
function ACX(){B.call(this);this.wx=null;}
function ALw(a,b){a.wx.releasePointerCapture(b.pointerId);}
function H6(){var a=this;B.call(a);a.nH=0;a.Y=0;a.ee=0;a.jl=0;}
function ABM(a,b){a.jl=(-1);a.nH=b;a.ee=b;}
function Fo(a,b){var c,d,e;if(b>=0&&b<=a.ee){a.Y=b;if(b<a.jl)a.jl=0;return a;}c=new BS;d=a.ee;e=new K;M(e);BM(U(H(U(H(e,C(95)),b),C(96)),d),93);Bl(c,L(e));N(c);}
function Cf(a){return a.ee-a.Y|0;}
function D3(a){return a.Y>=a.ee?0:1;}
var Zj=G(0);
var Lm=G(H6);
function AGI(b){var c,d;if(b>=0)return AQw(0,b,B2(b),0,b,0);c=new BS;d=new K;M(d);U(H(d,C(97)),b);Bl(c,L(d));N(c);}
function AIA(b,c,d){return AQw(0,b.data.length,b,c,c+d|0,0);}
function OX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BF;i=new K;M(i);U(H(U(H(i,C(98)),g),C(99)),f);Bl(h,L(i));N(h);}if(Cf(a)<d){j=new NS;X(j);N(j);}if(d<0){j=new BF;k=new K;M(k);H(U(H(k,C(100)),d),C(101));Bl(j,L(k));N(j);}g=a.Y;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.ih.data[m+a.po|0];l=l+1|0;c=n;m=o;}a.Y=g+d|0;return a;}}b=b.data;j=new BF;d=b.length;k=new K;M(k);BM(U(H(U(H(k,C(102)),c),C(96)),d),41);Bl(j,L(k));N(j);}
function MW(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.pz){b=new Ke;X(b);N(b);}e=d-c|0;if(Cf(a)<e){b=new Jx;X(b);N(b);}if(c>J(b)){f=new BF;d=J(b);b=new K;M(b);BM(U(H(U(H(b,C(103)),c),C(96)),d),41);Bl(f,L(b));N(f);}if(d>J(b)){f=new BF;c=J(b);b=new K;M(b);U(H(U(H(b,C(104)),d),C(105)),c);Bl(f,L(b));N(f);}if(c>d){b=new BF;f=new K;M(f);U(H(U(H(f,C(103)),c),C(106)),d);Bl(b,L(f));N(b);}g=a.Y;while(c<d){h=g+1|0;i=c+1|0;Zp(a,g,P(b,c));g=h;c=i;}a.Y=a.Y+e|0;return a;}
function MM(){var a=this;H6.call(a);a.mH=0;a.o9=null;a.BQ=null;}
function AIo(b,c,d){var e,f,g;e=b.data;f=new ACq;g=e.length;d=c+d|0;ABM(f,g);AWC();f.BQ=A5j;f.mH=0;f.o9=b;f.Y=c;f.ee=d;f.BU=0;f.vI=0;return f;}
function ACr(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.vI){e=new Ke;X(e);N(e);}if(Cf(a)<d){e=new Jx;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BF;j=new K;M(j);U(H(U(H(j,C(107)),h),C(99)),g);Bl(i,L(j));N(i);}if(d<0){e=new BF;i=new K;M(i);H(U(H(i,C(100)),d),C(101));Bl(e,L(i));N(e);}h=a.Y;k=h+a.mH|0;l=0;while(l<d){b=a.o9.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Y=h+d|0;return a;}}b=b.data;e=new BF;d=b.length;i=new K;M(i);BM(U(H(U(H(i,C(102)),c),C(96)),d),41);Bl(e,L(i));N(e);}
function Pm(a){a.Y=0;a.ee=a.nH;a.jl=(-1);return a;}
function Ix(){B.call(this);this.Cz=null;}
var A5c=null;var A5b=null;var A5a=null;function Hd(){Hd=Bn(Ix);AO9();}
function AGs(a){var b=new Ix();AJl(b,a);return b;}
function AJl(a,b){Hd();a.Cz=b;}
function AO9(){A5c=AGs(C(108));A5b=AGs(C(109));A5a=AGs(C(110));}
var OO=G(Ci);
function AO1(a){}
function ANV(a,b,c){}
function HF(){var a=this;Ci.call(a);a.dN=null;a.q=null;}
function ABL(a,b){var c,d,e;DK(a,b);a.dN=AHL(0,0,64);c=new SO;c.b2=new Bg;c.ei=CS(Q(CZ,0));c.dx=new Bg;c.pm=new Bg;c.AW=new BY;c.AX=new BY;d=b.O;c.bV=d;e=b.bU;c.hh=e;c.cw=d.lu;c.cP=QM(e);d=b.p.mk;e=new Yc;e.sD=c;Bc(d,e);d=b.p.lL;e=new Yb;e.uQ=c;Bc(d,e);a.q=c;Bc(b.p.bF,new Y$);b=b.p.bF;c=a.q;BD(c);d=new Y9;d.wd=c;Bc(b,d);}
function Hs(a){Ex(a.B.O,a.dN);}
function AE3(a,b,c){var d,e,f,g,h;a:{d=a.q;Cs(d.b2,b);e=d.cb;if(e!==c){d.cb=c;f=(Cz(d.ei)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gw(e,c);h=h+1|0;}}}}
function CM(){HF.call(this);this.bd=null;}
function G4(a,b){KD(a,b,1);}
function KD(a,b,c){var d,e,f;ABL(a,b);d=new ACD;e=a.q;d.cO=BH();d.dI=e;a.bd=d;Bc(a.q.ei,d);Bc(b.p.bO,a.bd);e=b.p.fe;f=a.bd;BD(f);d=new Vu;d.uM=f;Bc(e,d);if(c){b=b.p.bO;d=a.q.cP;e=new V_;e.vf=d;Bc(b,e);}}
function AMN(a){Hs(a);JE(a.bd);}
function It(a,b,c){var d,e;AE3(a,b,c);b=a.bd;d=0;while(true){e=b.cO;if(d>=e.m)break;Bw(e,d);d=d+1|0;}}
function ALo(a,b){var c,d,e,f;c=a.bd;d=0;e=0;while(true){f=c.cO;if(e>=f.m)break;d=(Bw(f,e)).U.cg(b)|d;e=e+1|0;}return d;}
var GG=G(0);
function AGz(a){a.hp(Iu());}
function Hj(a){a.hp(LY());}
function AHi(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IM;c=new JZ;d=new He;AF0();KJ(d,A5k);Mb(c,d,BW(A5l),BW(A5m),BW(A5n),BW(A5l),BW(A5o),BW(A5p),BW(A5q),BW(A5r),BW(A5s),BW(A5t));e=AIu(S(C(111)));AFn();f=(A5u.hb()).data;g=f.length;h=Q(Kc,g);i=h.data;j=0;while(j<g){i[j]=f[j].oK;j=j+1|0;}k=AI_(S(C(112)),S(C(113)),S(C(114)),S(C(115)));l=new IN;m=new IV;ATP();d=A5v;Od(m,d,A5w,A5x,A5y,A5z,d);LC(l,m,AJQ(),AGA(S(C(116)),S(C(111)),CA(0)),AJQ(),AGX(1,0.07500000298023224),A5A,A5B);Lu(b,c,e,h,k,l,ADp(S(C(117)),S(C(118)),S(C(119)),
S(C(120))));a.hp(b);}
var MU=G(0);
var F1=G(0);
function KH(){var a=this;CM.call(a);a.E=null;a.G=null;a.ir=null;a.i1=0;a.kD=null;a.lY=null;a.fr=null;}
function A3F(a){var b=new KH();AEx(b,a);return b;}
function AEx(a,b){var c,d,e;KD(a,b,0);a.fr=AUC(a.q);c=PG(a.bd);a.ir=c;a.E=KW(a.q,c);c=KW(a.q,a.ir);a.G=c;a.lY=AR$(a.E,c);c=a.E;c.cd=1;ABZ(a.fr,c,a.G);c=a.E;d=new S$;d.z3=a;c.mu=d;c=a.G;d=new S_;d.xK=a;c.mu=d;AGk(a,0);MD(a.q,a.E);Bc(b.p.fe,a);Bc(b.p.bO,a);c=b.p.bF;d=new Ta;d.vR=a;Bc(c,d);c=b.p.bF;d=new HK;e=new S8;e.tQ=a;Ij(d,b,e);Bc(c,d);Bc(b.p.gv,a);Bc(b.p.gU,a);b=b.p.c1;c=new S9;c.r0=a;Bc(b,c);Hj(a);}
function Vo(a,b){if(a.E===b)a.i1=a.i1|1;if(a.G===b)a.i1=a.i1|2;if((a.i1&3)==3)AJW(a);}
function AGk(a,b){RB(a.E,b);RB(a.G,b);}
function A0E(a,b,c){if(DG(a.q,a.E))return G6(a.E,b,c);if(!DG(a.q,a.G))return 0;return G6(a.G,b,c);}
function AEP(a){if(DG(a.q,a.E))return U5(a,a.E);if(!DG(a.q,a.G))return null;return U5(a,a.G);}
function U5(a,b){var c;c=new R_;c.rE=b;return c;}
function AJW(a){var b,c,d,e,f,g;Bm(Bx(),C(121));b=a.E.d.f;c=a.G.d.f;d=E4(b);e=E4(c);f=AD2(b);g=AD2(c);b=a.B.bU;c=new XC;c.wf=a;CR(b,c,C(122),I(B,[d,f,e,g]));}
function AQZ(a,b){var c,d;c=IP(a.E,b);d=IP(a.G,b);return !c&&!d?0:1;}
function AXj(a){var b;Hs(a);If(a.E);If(a.G);b=a.fr;AFz(b,b.gY.bV);JE(a.bd);}
function AWo(a){return Gq(0);}
function ARj(a){Wl(a.E);Wl(a.G);}
function AXf(a){AC8(a.E);AC8(a.G);}
function ARS(a,b){Ps(a.E,b);Ps(a.G,b);}
function AX5(a,b){On(a.q,b);}
function AL_(a,b){if(JY(a.bd,b)){LE(a.E);LE(a.G);}}
function AOw(a,b,c){It(a,b,c);AE2(a,b,c);}
function AE2(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Ce(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;AEd(f,g-h|0,b.b);L$(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;L$(a.G,d,f,c);V(a.fr.i,f.a,d.b);V(a.fr.k,d.a-f.a|0,f.b);}
function AKV(a,b){BD(b);Ii(a.ir,b);Hx(a.E,b);Hx(a.G,b);a.fr.jM=b;}
function AGg(a,b){if(b.bl!=121)return 0;return 1;}
function AIn(a,b){var c,d,e,f;if(DG(a.q,a.E)){c=a.ir;d=b.g;e=a.E;f=new PK;f.pF=a;GD(c,d,e,a,a,a,f);}if(DG(a.q,a.G)){c=a.ir;b=b.g;d=a.G;e=new PJ;e.An=a;GD(c,b,d,a,a,a,e);}return 1;}
function AYl(a,b){var c,d;c=B0(a.E,b.g)&&WD(a.E,b)?1:0;d=B0(a.G,b.g)&&WD(a.G,b)?1:0;return !c&&!d?0:1;}
function AWp(a,b,c,d){var e,f;e=B0(a.E,b.g)&&OE(a.E,b,c,d)?1:0;f=B0(a.G,b.g)&&OE(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function APk(a,b,c){var d,e,f,g,h,i,j,k;d=B0(a.E,b.g);e=B0(a.G,b.g);f=a.q;g=f.d6;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FD(f,i);if(e&&!(!h&&!j))FD(a.q,a.G);if(d){i=VD(a.E,b,c);if(i!==null)return i;}return !e?null:VD(a.G,b,c);}
function AYN(a,b,c){var d,e,f,g;d=B0(a.E,b.g);e=B0(a.G,b.g);f=d&&Sf(a.E,b,c)?1:0;g=e&&Sf(a.G,b,c)?1:0;return !f&&!g?0:1;}
function AQA(a,b,c,d){var e,f,g,h;e=B0(a.E,b.g);f=B0(a.G,b.g);g=e&&Lz(a.E,b,c,d)?1:0;h=f&&Lz(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AWQ(a){return AEP(a);}
var AF2=G(KH);
function A2_(a){var b=new AF2();A0t(b,a);return b;}
function A0t(a,b){var c;AEx(a,b);a.E.eM=1;a.G.eM=1;c=new SA;c.vT=a;PL(a,c,C(123));c=new SB;c.yW=a;PL(a,c,C(124));}
function APv(a){return Gq(1);}
function PL(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Ow;d=d.then(Bu(e,"f"));f=new Oy;f.sG=b;f.sF=c;g=new Ox;d.then(Bu(f,"f"),Bu(g,"f"));}
var AGn=G();
function AZ0(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(Nz(b)){case -1570047148:if(!Bj(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(131)))break a;d=19;break a;case -811765794:if(!Bj(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(133)))break a;d=11;break a;case -631889171:if(!Bj(b,C(134)))break a;d=9;break a;case -536831301:if(!Bj(b,C(135)))break a;d=25;break a;case -439438829:if(!Bj(b,C(136)))break a;d=21;break a;case -357667878:if(!Bj(b,C(137)))break a;d=22;break a;case -223304637:if(!Bj(b,C(138)))break a;d=2;break a;case -193916863:if(!Bj(b,C(139)))break a;d=23;break a;case 2129957:if(!Bj(b,C(140)))break a;d=1;break a;case 3343967:if(!Bj(b,C(141)))break a;d=10;break a;case 3556498:if(!Bj(b,C(142)))break a;d=4;break a;case 91636708:if
(!Bj(b,C(143)))break a;d=24;break a;case 485517998:if(!Bj(b,C(144)))break a;d=7;break a;case 544901384:if(!Bj(b,C(145)))break a;d=3;break a;case 675521850:if(!Bj(b,C(146)))break a;d=20;break a;case 1030621992:if(!Bj(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new TO;break b;case 3:case 4:b=new TL;break b;case 5:b=new TK;break b;case 6:b=new TN;break b;case 7:b=new TM;break b;case 8:b=new TS;break b;case 9:case 10:b=new TR;break b;case 11:b=new TU;break b;case 12:b=new TT;break b;case 13:b=new Z0;break b;case 14:b=new ZZ;break b;case 15:b=new ZY;break b;case 16:b=new ZN;break b;case 17:b=new ZM;break b;case 18:b=new ZK;break b;case 19:b=new ZJ;break b;case 20:b=new ZI;break b;case 21:b=new ZH;break b;case 22:b=new ZG;break b;case 23:b
=new ZR;break b;case 24:b=new ZQ;break b;case 25:b=new ZP;break b;case 26:b=new ZO;break b;case 27:b=new ZU;break b;default:b=new ZT;break b;}b=new TP;}return b;}
var AIx=G();
var KN=G(Lm);
function AEO(){var a=this;KN.call(a);a.pz=0;a.po=0;a.ih=null;}
function AQw(a,b,c,d,e,f){var g=new AEO();AS9(g,a,b,c,d,e,f);return g;}
function AS9(a,b,c,d,e,f,g){ABM(a,c);a.Y=e;a.ee=f;a.po=b;a.pz=g;a.ih=d;}
function Zp(a,b,c){a.ih.data[b+a.po|0]=c;}
function Lf(){var a=this;B.call(a);a.C9=null;a.rN=null;a.B5=0.0;a.vg=0.0;a.ng=null;a.mM=null;a.k5=0;}
function NQ(){var a=this;B.call(a);a.hI=0;a.jJ=0;}
var A5e=null;var A5d=null;function ADN(a,b){var c=new NQ();AHJ(c,a,b);return c;}
function AHJ(a,b,c){a.hI=b;a.jJ=c;}
function IQ(a){return a.hI?0:1;}
function H9(a){return a.hI!=1?0:1;}
function Nj(a){return !QS(a)&&!L1(a)?0:1;}
function QS(a){return a.hI!=2?0:1;}
function L1(a){return a.hI!=3?0:1;}
function KT(a){var b;if(Nj(a))return a.jJ;b=new D_;X(b);N(b);}
function Ek(b){return ADN(2,b);}
function Tp(a){var b,c;switch(a.hI){case 0:b=new QA;X(b);N(b);case 1:b=new UH;X(b);N(b);case 2:b=new Tl;c=a.jJ;X(b);b.CK=c;N(b);case 3:b=new Qu;c=a.jJ;X(b);b.Ed=c;N(b);default:}}
function AHW(){A5e=ADN(0,0);A5d=ADN(1,0);}
var ADH=G();
var IU=G(0);
var V2=G();
function AM0(a,b){return b.arrayBuffer();}
var V1=G();
function AP1(a,b){var c,d;c=new Xt;d=new Xr;return $rt_globals.WebAssembly.instantiate(b,AOl(Bu(c,"f"),Bu(d,"f")));}
var VZ=G();
function AQq(a,b){ALq(b);}
var VY=G();
function AUO(a,b){AGv(b);}
var W=G(0);
function SA(){B.call(this);this.vT=null;}
function A03(a,b){HT(a.vT.E,b);}
function SB(){B.call(this);this.yW=null;}
function AWV(a,b){HT(a.yW.G,b);}
var TP=G();
function AR7(a,b){return A3F(b);}
var TO=G();
function AKD(a,b){return A2x(b);}
var TL=G();
function AVr(a,b){return A2J(b);}
var TK=G();
function AX3(a,b){var c,d,e,f,g;c=new AAc;DK(c,b);d=(Iu()).bt.d_;c.DB=d;c.kJ=AJX(d);c.iF=new Bg;c.hL=new Bg;c.de=KB();c.dR=KB();c.mz=Gq(1);b=b.p.bO;d=new VI;d.lG=c;Bc(b,d);b=c.mz.data[DJ()*c.mz.data.length|0];d=Gy(c.B.O,b,10);c.mo=d;Cl(c.B.O.cl,d);e=DN(c.B.O.cl,C(153));d=c.B.O.cl;f=new K;M(f);BM(f,43);H(f,b);g=CV(e+DN(d,L(f)));c.je=g;c.im=Cy(c.im,ADa(c,1,g,b,c.mo,c.B.O));c.il=Cy(c.il,ADa(c,0,c.je,b,c.mo,c.B.O));QD(c,c.de,c.im);QD(c,c.dR,c.il);Cv(c.de.W,1.0,1.0,1.0,1.0);Fb(c.de,c.kJ);Cv(c.dR.W,1.0,1.0,1.0,1.0);Fb(c.dR,
c.kJ);b=Bx();g=c.je;d=new K;M(d);U(H(d,C(154)),g);Bm(b,L(d));return c;}
var TN=G();
function AMH(a,b){var c,d,e;c=new WF;G4(c,b);d=new VF;d.nb=new Bg;d.nE=new Bg;c.xn=d;c.e1=AIz();c.dz=AIz();c.nV=E6(C(155),25.0);Bc(c.q.ei,c);d=b.p.bF;e=new AAD;e.tq=c;Bc(d,e);Bc(b.p.bO,c);b=b.p.c1;d=new AAz;d.ul=c;Bc(b,d);ADc(c.dz);BO(c.dN,CA(43));b=E_();Jw(c.e1,b);Jw(c.dz,b);b=c.e1;b.ko=new AAA;d=c.dz;d.ko=new AAB;d.on=new PE;d.vm=new PF;M1(b,(Q5(0)).j$);M1(c.dz,(Q5(0)).j$);return c;}
var TM=G();
function ATa(a,b){var c,d,e;c=new ZL;G4(c,b);Bc(c.q.ei,c);BO(c.dN,CA(43));d=b.p.bF;e=new TF;e.Bg=c;Bc(d,e);b=b.p.c1;d=new TG;d.zR=c;Bc(b,d);return c;}
var TS=G();
function AMm(a,b){var c,d,e;c=new V7;ABL(c,b);c.hB=BH();c.f1=BH();c.re=S(C(156));c.jI=AGa();c.hA=0;d=c.q.ei;e=new OG;e.wI=c;Bc(d,e);Bc(b.p.bO,c);d=b.p.bF;e=new OF;e.uw=c;Bc(d,e);b=Gy(b.O,C(155),35);c.jN=b;c.lM=AHj(EZ(b));BO(c.dN,S(C(157)));return c;}
var TR=G();
function AOT(a,b){var c,d,e,f;c=new R4;DK(c,b);c.hE=AGu();c.eV=0;c.tC=500;c.rf=Iv(0,0,0,255,new BY);c.l0=20;c.v2=20;c.yK=Iu();d=b.p.bO;e=new VS;e.lh=c;f=new S7;f.yD=e;e.q7=f;Bc(d,e);d=b.p.fe;e=new Y_;e.zb=c;Bc(d,e);c.er=b.O;c.wr=QM(b.bU);XX(c.hE,Gy(c.er,C(155),c.v2),c.l0,c.er.lu);c.iE=IZ();return c;}
var TU=G();
function AZm(a,b){var c,d;c=new QB;JC(c,b);b=b.p.bF;d=new Qc;d.r6=c;Bc(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var TT=G();
function AKo(a,b){var c,d,e,f,g,h,i;c=new Wm;G4(c,b);d=b.p.c1;e=new QV;e.wM=c;Bc(d,e);d=b.bU;f=new Pl;f.Ci=c;g=Q(B,1);g.data[0]=C(158);CR(d,f,C(159),g);h=new Pk;h.Dv=c;g=Q(B,1);g.data[0]=AId([1,2,3,4,5]);CR(d,h,C(160),g);h=new Pi;h.AS=c;i=Q(B,1);i.data[0]=A2a([1,2,3,4,5]);CR(d,h,C(161),i);h=new Pg;h.DE=c;g=Q(B,1);g.data[0]=DR([1,2,3,4,5]);CR(d,h,C(162),g);d=b.p.bF;e=new HK;h=new QU;h.yH=c;Ij(e,b,h);Bc(d,e);return c;}
var Z0=G();
function AKy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new VK;JC(c,b);c.eT=H4(0,0,300,300);c.gl=Sj(0,0,3,3);d=b.O;b=b.p.bO;e=new AAN;e.mv=c;Bc(b,e);b=AJ5(d);c.zz=b;FG(c.eT,b);FP(c.eT);b=c.eT.bk;FA();BO(b,A5C);BO(c.eT.W,Ds(204,120,50));APn();e=A5D;f=DE((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CT(d);switch(e.fC){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EX;X(b);N(b);}b:
{VV(m,5,5,h);b=m.ey.dW;switch(e.fC){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EX;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.m2=m;V(c.gl.t,Cd(m),Dj(c.m2));BO(c.gl.bk,c.ph);return c;}
var ZZ=G();
function AW0(a,b){var c,d,e;c=new R2;JC(c,b);c.gE=H4(0,0,300,300);c.lX=new Bg;c.j6=new Bg;c.jr=new Bg;d=b.O;b=b.p.bO;e=new WN;e.jY=c;Bc(b,e);b=AJ5(d);c.qi=b;FG(c.gE,b);FP(c.gE);b=c.gE.bk;FA();BO(b,A5C);BO(c.gE.W,Ds(204,120,50));return c;}
var ZY=G();
function APJ(a,b){var c,d,e,f;c=new ZA;DK(c,b);c.Cu=20;c.Ee=11;c.C2=220;c.lD=new Bg;c.DL=5000;c.h4=1;c.gz=I(He,[CA(0),CA(255)]);c.eA=b.O;d=b.p.bO;e=new XN;e.lr=c;f=new T2;f.st=e;e.p3=f;Bc(d,e);b=b.p.fe;d=new Vc;d.qR=c;Bc(b,d);b=HB(c.eA,200,220);c.n2=b;Ho(b,C(155),20.0);b=HB(c.eA,200,20);c.go=b;Ho(b,C(155),20.0);c.ij=IZ();return c;}
var ZN=G();
function AM4(a,b){var c,d,e;c=new Ka;JC(c,b);Bc(b.p.bO,c);d=b.p.bF;e=new ACn;e.vl=c;Bc(d,e);Bc(b.p.gv,new ACm);d=b.p.gv;e=new ACl;e.rF=c;Bc(d,e);Bc(b.p.gU,new ACk);d=b.p.gU;e=new ACo;e.yp=c;Bc(d,e);b=!UN(b.bU)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var ZM=G();
function ATm(a,b){var c,d,e,f,g,h;c=new RP;DK(c,b);c.ta=CA(20);c.f8=H4(0,0,300,300);d=b.p.bF;e=new Rz;e.CB=c;Bc(d,e);b=b.O;d=Gy(b,C(14),88);Cl(b.cl,d);f=CV(ADX(DN(b.cl,C(166)),DN(b.cl,C(167))));g=MT(d,1.1799999475479126);h=Bx();e=new K;M(e);U(H(U(H(e,C(168)),f),C(169)),g);Bm(h,L(e));e=HB(b,f,g*3|0);c.i_=e;Cl(e,d);BQ(c.i_,C(166),0.0,d.dq);BQ(c.i_,C(167),0.0,g+d.dq);BQ(c.i_,C(170),0.0,(g*2|0)+d.dq);b=CT(b);c.ow=b;CK(b,c.i_);FG(c.f8,c.ow);FP(c.f8);b=c.f8.bk;FA();BO(b,A5C);BO(c.f8.W,A5E);return c;}
var ZK=G();
function A0l(a,b){var c;c=new Sv;Oi(c,b);G_(c.ch,0,0,300,300);V(c.df,300,300);return c;}
var ZJ=G();
function AO2(a,b){var c;c=new Su;Oi(c,b);c.fO=new Bg;c.f9=new Bg;V(c.d4,150,140);V(c.df,500,100);V(c.fa,150,200);V(c.ez,500,250);return c;}
var ZI=G();
function AZp(a,b){var c,d,e;c=new W$;G4(c,b);c.Dg=3;c.xc=E6(C(171),20.0);Bc(c.q.ei,c);BO(c.dN,CA(43));d=b.p.bF;e=new Yz;e.Cj=c;Bc(d,e);b=b.p.c1;d=new Yy;d.vX=c;Bc(b,d);return c;}
var ZH=G();
function AKh(a,b){return A28(b);}
var ZG=G();
function AZb(a,b){var c,d,e,f;c=new P0;H0(c,b);BO(c.dN,CA(43));c.lE=PG(c.bd);d=b.p.bF;e=new HK;f=new O4;f.z2=c;Ij(e,b,f);Bc(d,e);b=b.p.c1;d=new O5;d.xX=c;Bc(b,d);return c;}
var ZR=G();
function AYt(a,b){var c,d;c=new Q9;H0(c,b);c.oQ=null;c.l_=JI();c.i3=JI();b=b.p.c1;d=new WG;d.wR=c;Bc(b,d);return c;}
var ZQ=G();
function ALZ(a,b){var c;c=new X4;H0(c,b);c.uD=LY();BO(c.dN,CA(43));return c;}
var ZP=G();
function AWb(a,b){return A2L(b);}
var ZO=G();
function ANQ(a,b){var c,d,e;c=new Pc;H0(c,b);c.t1=LY();BO(c.dN,CA(43));d=b.p.c1;e=new TJ;e.Bd=c;Bc(d,e);b=b.p.bF;d=new TI;d.sQ=c;Bc(b,d);return c;}
var ZU=G();
function ANR(a,b){var c,d;c=new S4;H0(c,b);c.mb=LY();BO(c.dN,CA(43));b=b.p.c1;d=new Z1;d.qb=c;Bc(b,d);return c;}
var ZT=G();
function AT3(a,b){var c;c=new Os;AGM(c,b);AJo(c.dQ);return c;}
function ACh(){var a=this;B.call(a);a.tn=null;a.zs=null;a.yJ=null;}
function H$(){var a=this;B.call(a);a.bJ=0;a.cJ=0;a.du=0;a.j9=0;}
function A5F(a,b,c,d){var e=new H$();AAQ(e,a,b,c,d);return e;}
function AAQ(a,b,c,d,e){a.bJ=d;a.cJ=b;a.du=c;a.j9=e;}
function PT(){var a=this;H$.call(a);a.d$=null;a.bl=0;a.jn=0;a.ym=0;a.n$=0;}
var AF3=G();
function T$(b,c){return (b+(c/2|0)|0)/c|0;}
function X1(b,c,d){if(b<(2147483647/c|0))return T$(Bb(b,c),d);return 0.5+c*b/d|0;}
function H3(b,c){return ((b+c|0)-1|0)/c|0;}
function Gt(b){return b+0.5|0;}
function CV(b){return b+0.5|0;}
function EY(b,c,d){return Be(b,Bd(c,d));}
function ML(b,c){return AHg(b)/AHg(c);}
function Ok(){var a=this;H$.call(a);a.g=null;a.C1=null;}
var SH=G(0);
function O3(){var a=this;B.call(a);a.uA=null;a.uB=null;}
function AW1(a,b){var c,d;c=a.uA;d=a.uB;$rt_globals.console.info("paste plain string "+b);c.j(HW(b));Dw(d);}
function AA4(){B.call(this);this.uT=null;}
function ABV(a,b){a.uT.clipboardData.setData("text/plain",$rt_ustr(b));}
function ACq(){var a=this;MM.call(a);a.BU=0;a.vI=0;}
function CD(){var a=this;B.call(a);a.i=null;a.k=null;a.bN=0.0;}
function AS_(){var a=new CD();EV(a);return a;}
function EV(a){a.i=new Bg;a.k=new Bg;}
function AQ0(a){}
function AXV(a){return BJ(0,0);}
function HH(a,b,c,d){var e;if(!JM(a.i,b)){a.ml(b);Cs(a.i,b);}if(!JM(a.k,c)){a.og(c);Cs(a.k,c);}e=a.bN;if(e!==d){a.bN=d;a.k8(e,d);}}
function EE(a,b){return Ce(b,a.bN);}
function B0(a,b){return Hr(b,a.i,a.k);}
function AJS(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;ANT();Bs(b,d,e,f,A5G);}
function ABs(a,b){var c;c=a.i;LB(b,c.a,c.b,a.k);}
function AUH(a,b){return 0;}
function AOW(a,b){}
function ASv(a,b){}
function AY0(a,b,c){}
function ASD(a){}
function ANL(a,b,c,d){return 0;}
function ALC(a,b,c){return null;}
function APz(a,b,c){return 0;}
function ASk(a,b){return 0;}
function AYT(a,b,c,d){return 0;}
function AEn(){var a=this;CD.call(a);a.gY=null;a.kS=null;a.kT=null;a.kQ=null;a.kR=null;a.eQ=null;a.hk=null;a.hl=null;a.jM=null;}
function AUC(a){var b=new AEn();AL3(b,a);return b;}
function AL3(a,b){EV(a);a.kS=new Bg;a.kT=new Bg;a.kQ=new Bg;a.kR=new Bg;a.gY=b;}
function ABZ(a,b,c){a.hk=b;a.hl=c;}
function AFz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.i;Bs(b,c.a,c.b,a.k,a.jM.bt.d_);if(a.eQ===null)return;d=CE(a.gY,2.0);e=GB(a.eQ,a.hk.kP(),1);f=GB(a.eQ,a.hk.jZ(),1);g=GB(a.eQ,a.hl.kP(),0);h=GB(a.eQ,a.hl.jZ(),0);i=Bd(e,g);j=Be(f,h);h=BK(i,j);if(h<=0)B7(b,1);k=a.hk.tY();l=a.hl.oW();m=a.gY.pm;while(i<=j){n=a.eQ.h7.data[i];if(n.of){o=a.hk.hj(n.hH);p=a.hk.hj(n.hH+n.nC|0);q=a.hl.hj(n.hG);r=a.hl.hj(n.hG+n.nB|0);V(a.kS,a.i.a,o);V(a.kQ,a.i.a,p);V(a.kT,a.i.a+a.k.a|0,q);V(a.kR,a.i.a+a.k.a|0,r);s=Be(Bd(o,q),
a.i.b);t=Bd(Be(p,r),a.i.b+a.k.b|0);if(t>s){V(m,a.k.a,t-s|0);c=a.jM;u=JP(c.dZ,c,n.of);if(o==p){n=a.gY.dx;V(n,a.i.a-k.a|0,d);if(q>=o){c=a.kQ;V(c,c.a,c.b+d|0);g=o;}else{g=o-d|0;c=a.kS;V(c,c.a,c.b-d|0);}Bs(b,k.a,g,n,u);}if(q==r){n=a.gY.dx;V(n,l.a,d);if(o>=q){c=a.kR;V(c,c.a,c.b+d|0);}else{q=q-d|0;c=a.kT;V(c,c.a,c.b-d|0);}Bs(b,a.i.a+a.k.a|0,q,n,u);}ADi(b,a.i.a,s,m,a.kS,a.kT,a.kQ,a.kR,u);}}i=i+1|0;}if(h<=0)B7(b,0);}
function AER(){var a=this;B.call(a);a.b7=null;a.dp=null;a.ia=null;}
function PG(a){var b=new AER();AK8(b,a);return b;}
function AK8(a,b){a.b7=b;}
function Ii(a,b){var c;a.ia=b;c=a.dp;if(c!==null)GO(c,b.dD);c=a.b7.d3;if(c!==null)F8(c,b.dD,b.kr);}
function YC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AN6();i=c.m;j=0;while(j<i){if(f===null){k=(Bw(c,j)).bq;l=Y7(FC(Ca(g.f,k)));m=ZD(g.fY);}else{n=f.data;k=n[j].oT.mJ;l=!BT(g.fY,n[j].lv)?C(21):Y7(FC(Ca(g.f,k)));m=ZD(n[j].lv);}if(J(l)>153){o=Cr(l,0,150);n=new K;M(n);H(H(n,o),C(172));l=L(n);}if(J(m)>153){n=Cr(m,0,150);o=new K;M(o);H(H(o,n),C(172));m=L(o);}n=Dh(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=Bw(c,j);}if(f!==null){q=new ACA;q.rJ=d;q.rK=p;}else{q=new ACB;q.z_=d;q.z$=
o;}Vr(h,m,n,l,q);j=j+1|0;}r=ACb(h);if(a.dp!==null)Z6(a);c=a.b7.dI;g=new QG;f=new Zy;f.p0=a;f.p1=d;AJM(g,c,f);Wh(g,r);d=a.ia;Vm(g,d.dD,d.Am);d=ADu(c);a.dp=d;d.pa=d.pa|1;d=Gu(g,c);f=a.ia.dD;I6(d,f.mr,f.n_);KY(a.dp,d);GO(a.dp,a.ia.dD);d=a.dp;f=new K;M(f);H(H(f,C(173)),e);FJ(d,L(f));Gx(a.b7,a.dp);d=a.dp;i=(d.Q.k.b+CE(d.bo,2.0)|0)+CE(c,2.0)|0;s=(g.dY+g.eD|0)+g.hg|0;t=CE(g.bS,5.0);e=BJ(EY(t,b.a,g.bS.b2.a-s|0),EY(i,b.b,g.bS.b2.b-g.c2.b|0));XH(g);KL(g);i=Ec(g);s=g.b4.data.length;i=Bb(i,s)+Bb(g.dM,s+1|0)|0;V(g.c2,g.k.a,
i);i=(g.dY+g.eD|0)+g.hg|0;b=g.bS;s=(b.b2.a-e.a|0)-CE(b,5.0)|0;b=g.bS;t=(b.b2.b-e.b|0)-CE(b,5.0)|0;d=BJ(Bd(i,s),Bd(g.c2.b,t));ES(a.dp,e,d);FD(c,g);}
function Z6(a){Ko(a.b7,a.dp);Nw(a.dp);a.dp=null;}
function K4(a,b,c){var d,e;d=a.b7;e=a.ia;d=Yl(d,e.dD,e.kr);Lc(d,b,c);Fk(a.b7,d);}
function GD(a,b,c,d,e,f,g){var h,i,j,k,l,m;h=new Se;h.f_=a;h.bu=c;h.qL=g;h.iQ=e;h.nM=f;h.lP=d;c=Ln();e=h.bu.d;d=Eq(e);e=Hu(e);f=h.bu.fj;if(Yp(f,d,e)!==null){i=new Rr;i.vP=h;i.vQ=b;DW(c,C(174),i);}if(N7(f,d,e)!==null){i=new Rs;i.xC=h;i.xD=b;DW(c,C(175),i);}if(AAK(f,d,e)!==null){e=new Rq;e.pO=h;e.pQ=b;DW(c,C(176),e);}e=new Rp;e.t_=h;e.t$=b;DW(c,C(177),e);HM(h);if(LH()){if(!h.bu.eM){e=new QX;e.z7=h;DW(c,C(178),e);}e=new QY;e.q$=h;DW(c,C(179),e);if(!h.bu.eM&&UN(HM(h))){e=new QW;e.yy=h;DW(c,C(180),e);}}e=Ln();j=
Q(BL,4).data;j[0]=C(181);j[1]=C(182);j[2]=C(183);j[3]=C(184);k=j.length;l=0;while(l<k){f=j[l];g=new PU;g.vN=h;g.vO=f;DW(e,f,g);l=l+1|0;}Fx(c,C(185),GP(e));i=Ln();j=Q(B1,3);m=j.data;f=h.lP;BD(f);g=new OS;g.qZ=f;m[0]=C3(C(186),g);f=h.lP;BD(f);g=new OT;g.ry=f;m[1]=C3(C(187),g);f=h.lP;BD(f);g=new OR;g.u4=f;m[2]=C3(C(188),g);IS(i,C(189),Du(j),A5H);j=Q(B1,2);m=j.data;f=h.iQ;BD(f);g=new Um;g.xw=f;m[0]=C3(C(190),g);f=h.iQ;BD(f);g=new Ul;g.tU=f;m[1]=C3(C(191),g);Fx(i,C(192),Du(j));f=new Xm;f.qw=h;IS(i,C(193),f,A5H);if
(h.bu.cG.bV.lu){j=Q(B1,2);m=j.data;g=new Zn;g.wk=h;m[0]=C3(C(194),g);g=new Zo;g.w5=h;m[1]=C3(C(195),g);Fx(i,C(196),Du(j));}Fx(c,C(197),GP(i));e=Ln();Fx(e,C(198),AH$(h));g=new X0;g.u6=h;DW(e,C(199),g);i=new Or;i.wu=h;IS(e,C(200),i,A5H);Fx(c,C(201),GP(e));K4(a,b,GP(c));}
function AD8(b){var c;c=new Re;c.ys=b;return c;}
var FL=G(0);
function AXW(a){}
function AM$(a){}
var Qt=G(0);
var L8=G(0);
function AEs(){var a=this;CD.call(a);a.cG=null;a.bi=null;a.kk=null;a.AF=0;a.nK=null;a.c_=null;a.m9=0;a.he=0.0;a.lJ=null;a.BT=null;a.fM=null;a.T=0;a.c7=0;a.d=null;a.fj=null;a.eg=null;a.eI=null;a.zF=0;a.yi=0;a.cX=0;a.ce=0;a.ck=0;a.hU=null;a.fG=null;a.fm=null;a.i6=0;a.jG=0;a.Eg=0;a.Ba=0;a.kw=0;a.lp=0;a.pf=0;a.d9=0;a.da=null;a.fg=null;a.eM=0;a.cd=0;a.A1=null;a.jE=null;a.xU=null;a.tk=null;a.mu=null;a.bw=0;a.cI=null;a.rM=0;a.qN=null;a.tS=null;}
function KW(a,b){var c=new AEs();AQS(c,a,b);return c;}
function AQS(a,b,c){var d,e,f;EV(a);a.AF=0;a.nK=Q(Z,10);a.c_=AV6();a.he=16.0;a.lJ=C(155);a.d=A21(Q(BL,0),null,null);d=new ACJ;d.w$=CS(Q(M7,0));d.AD=CS(Q(M7,0));d.pW=CS(Q(ZW,0));d.up=CS(Q(X6,0));d.t3=CS(Q(G9,0));d.zv=CS(Q(RS,0));a.fj=d;a.eI=Q(Fj,0);a.hU=BJ(1,0);a.fG=IZ();a.fm=IZ();a.i6=0;a.jG=1;a.kw=1;a.lp=1;a.pf=1;a.d9=3;a.da=AGu();a.fg=C(202);a.eM=0;a.cd=0;e=ED();BD(e);d=new Wy;d.Cc=e;a.jE=d;a.bw=0;e=new Wx;e.pI=a;a.qN=e;e=new Ww;e.se=a;a.tS=e;a.cG=b;a.bi=b.bV;a.kk=c;c=AOG(b.cw);a.cI=c;a.fM=c.gL;f=a.nK.data;b
=new Wv;b.zJ=a;f[1]=b;b=new WC;b.wl=a;f[2]=b;b=new WB;b.sW=a;f[3]=b;b=new WA;b.u_=a;f[4]=b;b=new Wz;b.qz=a;f[5]=b;b=new Wu;b.x9=a;f[6]=b;KQ(a.d,a,FF(a));}
function Si(a,b,c){var d,e,f,g,h;d=!c?a:null;if(c)e=null;else{e=new Sx;e.qo=a;}f=new Sw;f.tF=a;g=new Sz;g.xe=a;if(d!==null)Bc(b.bO,d);if(e!==null)Bc(b.fe,e);Bc(b.gv,f);Bc(b.gU,g);h=new Sy;h.CX=d;h.CV=b;h.CW=e;h.CY=f;h.CZ=g;return h;}
function L$(a,b,c,d){HH(a,b,c,d);ZE(a,b,c,d);}
function AQa(a,b,c){Ut(a,a.lJ,a.he);Pr(a.cI,c);}
function A04(a,b,c){a.xU=b;a.tk=c;}
function ZE(a,b,c,d){var e;a.cX=Ce(80.0,d);a.ce=Ce(1.0,d);a.ck=Ce(10.0,d);e=!a.cd?b.a:(b.a+c.a|0)-Ih(a)|0;V(a.cG.dx,e,b.b);RF(a.da,a.cG.dx,Bd(Ih(a),c.a),c.b,d);b=a.c_;e=Ce(2.0,d);b.eF.t.a=e;}
function AVI(a){a.m9=1;NH(a);}
function ATT(a){a.m9=0;}
function NH(a){XS(a.c_,MA(FF(a)));}
function Hx(a,b){var c,d;a.eg=b;c=a.c_;d=b.bt.AC;BO(c.eF.W,d);c=a.fG;d=b.bt;HZ(c,d.lc,d.lg);c=a.fm;b=b.bt;HZ(c,b.lc,b.lg);}
function Wl(a){N_(a,a.cI.cj.nF,a.he+1.0);}
function AC8(a){var b;b=a.he;if(b<=7.0)return;N_(a,a.cI.cj.nF,b-1.0);}
function Ps(a,b){N_(a,b,a.he);}
function AQQ(a,b){On(a.cG,b);}
function N_(a,b,c){if(a.cG.cb!==0.0){Ut(a,b,c);Jk(FF(a));}a.he=c;a.lJ=b;}
function LE(a){var b,c,d;b=a.cI;c=a.cG.cw;d=a.bi;b.it=c;if(b.fs.iV!=c&&b.dE)AC7(b,d);Sa(a.eI);Is(a.da);NL(a);}
function Ut(a,b,c){var d,e,f,g,h,i,j,k;d=a.bN;e=c*d;Ce(c,d);f=a.cI.cj;d=f===null?0.0:f.wq;if(!(e===d&&BT(b,a.lJ))){Is(a.da);N6(a.eI);g=a.d.f.A.data;h=g.length;i=0;while(i<h){ET(g[i]);i=i+1|0;}j=a.cI;f=a.bi;j.cj=AHZ(b,e,300,600,j.gL,f);f=a.cI;a.BT=f.cj;a.T=RJ(f,1.25,a.bi);a.c7=CV(a.cI.cj.pn);a.c_.eF.t.b=EZ(a.cI.cj);h=EZ(a.cI.cj);i=a.T;k=UB(a.c_);f=new K;M(f);b=H(H(f,C(203)),b);BM(b,32);U(H(U(H(U(H(E5(b,e),C(204)),h),C(169)),i),C(205)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A5I){h=Nm(a.cI.cj,a.T);b=new K;M(b);U(H(b,
C(206)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.h8=GL(FR(a),a.d.z,a.bi.cl,a.fM);H2(a);NL(a);}}
function AUe(a){N6(a.eI);Xy(a.cI);Is(a.da);}
function Oj(a){return Bb(CI(a.d.f)+5|0,a.T);}
function KK(a){return Be(Oj(a)-a.k.b|0,0);}
function Z7(a){return Be(a.i6-F$(a)|0,0);}
function F$(a){var b;b=!a.cd?0:a.c7+a.ck|0;return Be(1,(a.k.a-a.cX|0)-b|0);}
function Ih(a){return a.cd?a.cX:a.cX-a.ck|0;}
function Ed(a){return a.k.b;}
function IP(a,b){var c,d,e;c=a.d.f;if(AAu(c)&&b-c.yA>0.03125?1:0){d=a.rM;e=a.d.f.cn;if(d!=e){a.rM=e;YT(a);}}if(a.T)Z3(a);d=AAE((a.bw+a.Eg|0)-a.Ba|0,KK(a));e=a.bw==d?0:1;if(e)FT(a,d);return !Z8(a.c_,b)&&!e&&!a.AF?0:1;}
function Iz(a,b){var c,d;b=AAE(b,Z7(a));c=a.d;d=b==c.dO?0:1;if(d)c.dO=b;if(d){c=a.xU;if(c!==null)c.h();}}
function FT(a,b){var c;if(AIc(a,b)){c=a.tk;if(c!==null)c.h();}}
function AIc(a,b){var c,d;c=AAE(b,KK(a));d=c==a.bw?0:1;if(d){a.bw=c;a.d.l7=c/a.T;}return d;}
function AF_(a){return BJ((Ih(a)+a.ce|0)+a.ck|0,a.T);}
function ARD(a){return a.T;}
function AXp(a,b){If(a);}
function If(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H3(a.k.b,a.T)+7|0;c=a.eI;if(c.data.length<b)a.eI=Ys(b,c,a.cI,a.zF,a.yi,a.d.f);B7(a.bi,0);Ne(a.bi,a.i,a.k);d=(a.T-UB(a.c_)|0)/2|0;b=a.d.h8-(Sb(a.c_)/2|0)|0;e=a.d;f=b-e.dO|0;g=!a.cd?a.cX:(a.ce+a.ck|0)+a.c7|0;To(a.c_,g+f|0,(d+Bb(e.w,a.T)|0)-a.bw|0);h=CI(a.d.f);i=S2(a);j=S1(a);a.zF=i;a.yi=j;k=!a.cd?a.i.a+a.cX|0:((a.i.a+a.ce|0)+a.ck|0)+a.c7|0;l=F$(a);c=a.d.k9;m=EE(a,40.0);n=i;while(n<=j&&n<h){o=Ca(a.d.f,n);p=ABt(a,n);WI(p,o,a.bi,a.T,l,a.d.dO,n,
n%a.eI.data.length|0);a.i6=Be(a.i6,Gi(o)+m|0);b=a.T;q=Bb(b,n)-a.bw|0;r=c===null?null:c.data[n];d=a.i.b+q|0;e=a.bi;g=a.d.dO;s=a.eg;t=AI3(Bi(a),n);if(t!==null){if(t.b==(-1))t.b=o.R;t.a=GL(o,t.a,a.bi.cl,a.fM);t.b=GL(o,t.b,a.bi.cl,a.fM);}o=a.d;PN(p,d,k,e,l,b,g,s,t,o.iz,o.ik,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cG.dx;n=i;while(n<=j&&n<h&&a.kw){p=ABt(a,n);q=Bb(a.T,n)-a.bw|0;r=Bi(a);if(!Dr(r))u=0;else{o=Eg(r);r=FW(r);u=o.J<=n&&n<r.J?1:0;}s=a.eg;r=s.bt;v=r.rY;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.ku;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=JP(s.dZ,s,x[n].gO);break a;}}if(w)v=r.hf;}}AHD(p,a.bi,k,a.i.b+q|0,a.T,e,a.d.dO,l,v);n=n+1|0;}if(a.jG){y=Bd(j+1|0,h);AJg(a,Bb(a.T,y)-a.bw|0,l);}AFv(a);AE6(a,i,j);if(a.lp)AGJ(a,i,j,h);if(a.m9&&f>=(( -Sb(a.c_)|0)/2|0)){e=a.c_;p=a.k;if(ADU(e.eF.u,0,0,p))AA7(a.c_,a.bi,a.i);}AFi(a);AEU(a);F2(a.bi);}
function AGJ(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.k9;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eg;h=JP(h.dZ,h,g.gO);}else h=e!==null?a.eg.bt.d_:a.eg.bt.hf;if(!(a.d.w!=b&&g===null)){g=a.hU;i=a.cd;g.a=!i?(a.ck-a.ce|0)-a.d9|0:((a.ck+a.c7|0)+a.ce|0)-a.d9|0;j=a.T;g.b=j;i=i?0:(a.cX-a.ck|0)+a.ce|0;j=Bb(j,b)-a.bw|0;k=a.bi;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AE6(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Bd(d,Bb(CI(a.d.f),a.T)-a.bw|0);f=a.da;g=a.bw;h=a.d;i=h.k9===null?h.w:(-1);j=a.bi;k=a.eg;Ne(j,f.gj,f.ff);R$(f,j,b,d);AAF(f,b,j);Z2(f,g,e,k,j);l=k.kK;if(e<d){h=f.gj;Bs(j,h.a,h.b+e|0,BJ(f.ff.a,d-e|0),l.kC);}if(b<=i&&i<=c){k=k.kK;c=i/20|0;h=f.c0;l=Bw(h,c%h.m|0);h=f.gj;d=Bb(f.c0.m,f.g0);c=l.fd.b;b=((l.px.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%Dj(l.cL)|0)|0;c=i%l.d8|0;e=l.cq;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.iR,l.fd.a,e);f=l.jv;c=i%l.d8|0;d=l.cq;Cv(f,0.0,
Bb(c,d),l.fd.a,d);MZ(l,j,b,h,k.ws,k.pL);}F2(j);}
function S2(a){return Bd(a.bw/a.T|0,CI(a.d.f)-1|0);}
function S1(a){return Bd(((a.bw+Ed(a)|0)-1|0)/a.T|0,CI(a.d.f)-1|0);}
function AQx(a,b){return Bb(a.T,b)-a.bw|0;}
function AQn(a){return a.i;}
function AS6(a){return a.k;}
function NL(a){XX(a.da,a.cI.cj,a.T,a.cG.cw);}
function ABt(a,b){var c;c=a.eI.data;return c[b%c.length|0];}
function Ug(a,b){var c,d,e,f;c=EY(0,J(a.fg),OW(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BS;X(b);N(b);}if(c!=1){d=b.b_.data.length;if(d&&c){e=B2(Bb(d,c));d=0;f=0;while(f<c){Ql(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mc(e);}else b=A4B;}}return b;}
function Pv(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BN(i);k=A36(i).data;Jm(j,c);c=0;l=k.length;if(c>l){f=new BS;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.cn=o.cn+1|0;p=Q(G1,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ARL(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BC(o.ip,p);c=0;while(c<i){b=e.data;MX(o,h[c],n[c],k[c],b[c]);g.pA(CU(h[c]),b[c]);c=c+1|0;}}
function AJ6(a){var b;if(Dr(Bi(a)))GI(a);else{b=a.d;OB(b.f,b.w,b.z);}H2(a);Eo(a);return 1;}
function DC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eM)return 0;if(Dr(Bi(a)))GI(a);c=LZ(ABe(b,C(207),C(21)),C(208),(-1));d=c.data;b=a.d;e=b.f;f=b.w;g=b.z;ADb(e,f,g,c);h=d.length;if(!h)b=A4B;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B2(i+Bb(h-1|0,J(C(208)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(208))){m=l+1|0;c[l]=P(C(208),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Mc(k);}FV(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CL(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);FZ(a);Eo(a);return 1;}
function GI(a){var b,c,d;b=Eg(Bi(a));c=a.d.f;d=Bi(a);OH(c,d,T4(c,d));CL(a,b.J,b.Z,0);FZ(a);Eo(a);}
function FZ(a){var b,c;(Bi(a)).dn=0;b=(Bi(a)).bK;c=a.d;Cc(b,c.w,c.z);b=(Bi(a)).bA;c=a.d;Cc(b,c.w,c.z);}
function AJg(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cG.dx;e.b=d-b|0;d=a.cd;e.a=!d?c+a.d9|0:c+a.ce|0;d=!d?(a.i.a+a.cX|0)-a.d9|0:(((a.i.a+a.ck|0)+a.c7|0)+a.ce|0)-a.d9|0;Bs(a.bi,d,a.i.b+b|0,e,a.eg.bt.d_);}}
function AFi(a){var b;b=a.cd?a.i.a+a.c7|0:a.i.a+a.k.a|0;J_(a.fG,a.bw,a.i.b,Ed(a),Oj(a),b,a.c7);b=!a.cd?a.i.a+a.cX|0:((a.i.a+a.ce|0)+a.ck|0)+a.c7|0;QN(a.fm,a.d.dO,b,F$(a),a.i6,a.i.b+Ed(a)|0,a.c7);}
function AEU(a){var b,c;b=YE(a.fG);c=YE(a.fm);if(!(!b&&!c)){B7(a.bi,1);if(b)GK(a.fG,a.bi);if(c)GK(a.fm,a.bi);if(b)GR(a.fG,a.bi);if(c)GR(a.fm,a.bi);}}
function AFv(a){var b,c,d,e,f;b=a.hU;c=a.k;b.b=c.b;b.a=a.ce;d=!a.cd?a.cX-a.ck|0:(c.a-Ih(a)|0)-a.ce|0;b=a.bi;c=a.i;Bs(b,c.a+d|0,c.b,a.hU,a.eg.bt.tt);b=a.hU;d=a.cd;b.a=!d?(a.ck-a.ce|0)-a.d9|0:((a.ck+a.c7|0)+a.ce|0)-a.d9|0;e=d?0:(a.cX-a.ck|0)+a.ce|0;c=a.bi;f=a.i;Bs(c,f.a+e|0,f.b,b,a.eg.bt.d_);}
function AAE(b,c){return Bd(Be(0,b),c);}
function FF(a){return a.cG.hh;}
function Jf(a,b){var c,d,e;c=EK(b);d=new K;M(d);H(H(d,C(209)),c);$rt_globals.console.info($rt_ustr(L(d)));We(FF(a),EK(b));CL(a,0,0,0);c=new ABU;c.xG=a;c.xH=b;d=ED();BD(d);e=new ABT;e.wj=d;Ud(b,c,e);}
function Js(a,b,c,d,e){if(IG(a,e))return 1;if(c&&d)return 1;if(c)FT(a,a.bw+((Bb(b,a.T)*12|0)/10|0)|0);else if(!d){Ig(a,a.d.w+b|0,e);AAG(a);}return 1;}
function Rx(a,b,c,d){var e,f,g;if(IG(a,d))return 1;e=FR(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=GY(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=J6(e,b);if(c>0&&e.ek.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.ek.data[c-1|0];}}if(f>e.R){e=a.d;if((e.w+1|0)<CI(e.f))CL(a,a.d.w+1|0,0,d);}else if(f>=0)Dv(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Ca(e.f,b-1|0)).R;CL(a,a.d.w-1|0,g,d);}}ABG(a);return 1;}
function IG(a,b){if(Dr(Bi(a))&&!b){FZ(a);H2(a);return 1;}if(!(b&&Dr(Bi(a))))FZ(a);return 0;}
function CL(a,b,c,d){a.d.z=c;return Ig(a,b,d);}
function Ig(a,b,c){var d;d=a.d;d.w=EY(0,b,CI(d.f)-1|0);return Dv(a,a.d.z,c);}
function Dv(a,b,c){var d,e;a.d.z=EY(0,b,(FR(a)).R);a.d.h8=a.bN===0.0?0:GL(FR(a),a.d.z,a.bi.cl,a.fM);NH(a);H2(a);if(c)(Bi(a)).dn=1;d=Bi(a);e=a.d;NI(d,e.w,e.z);(Bi(a)).dn=0;return 1;}
function Me(a,b){var c;c=AU1(Bi(a));Dv(a,b,0);JA(Bi(a),c);}
function H2(a){AAG(a);ABG(a);}
function AAG(a){var b,c,d,e,f;b=a.bw;c=b+Ed(a)|0;d=a.d.w;e=a.T;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))FT(a,d-e|0);else if(f>(c-e|0))FT(a,(f-Ed(a)|0)+a.T|0);}
function ABG(a){var b,c,d,e,f;b=CV(a.cG.cb*30.0);c=a.d.dO;d=c+F$(a)|0;e=a.d.h8;f=e+b|0;if(e<(c+b|0))Iz(a,e-b|0);else if(f>(d-b|0))Iz(a,(f-F$(a)|0)+b|0);}
function IL(a,b){var c,d;CL(a,b.bq,b.bv,0);c=GY(FR(a),a.d.z);Cc((Bi(a)).bA,a.d.w,c);b=(Bi(a)).bK;d=a.d;Cc(b,d.w,d.z);}
function Fp(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=EY(0,((b.b-d.b|0)+a.bw|0)/a.T|0,CI(a.d.f)-1|0);g=!a.cd?a.cX:(a.ce+a.ck|0)+a.c7|0;h=Be(0,(e-g|0)+a.d.dO|0);b=Ca(a.d.f,f);d=a.bi.cl;i=a.fM;if(!(b.eJ!==null&&!b.gK))Na(b,d,i);j=b.eJ;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.R;else{c=AAs(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.R;else{j=Zc(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A5J){b=new K;M(b);U(H(U(H(U(H(b,C(210)),e),C(211)),h),C(212)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DL(f,k);}
function UR(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.z=b.bv;c.h8=GL(Ca(c.f,d),a.d.z,a.bi.cl,a.fM);NH(a);}
function FR(a){var b;b=a.d;return Ca(b.f,b.w);}
function Lz(a,b,c,d){var e,f;e=CV((a.T*4|0)*d/150.0);f=CV(c);if(e)FT(a,a.bw+e|0);if(f)Iz(a,a.d.dO+f|0);return 1;}
function Sf(a,b,c){(Bi(a)).dn=0;return 1;}
function VD(a,b,c){var d;if(c)return null;d=FU(a.fG,b.g,a.qN,1);if(d!==null)return d;d=FU(a.fm,b.g,a.tS,0);if(d!==null)return d;I5(a);UR(a,Fp(a,b.g));Lk(a.d);if(!b.bJ&&!(Bi(a)).dn){b=(Bi(a)).bK;d=a.d;Cc(b,d.w,d.z);}(Bi(a)).dn=1;b=Bi(a);d=a.d;NI(b,d.w,d.z);b=new ACC;b.t0=a;return b;}
function OE(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cJ){b=b.g;e=Fp(a,b);f=IY(a.d.f,e.bq,e.bv);g=R6(a,f);h=N7(a.fj,Eq(a.d),Hu(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new ACe;e.BF=a;e.BG=b;e.BE=g;h.sI(i,c,d,e,a.jE);}else{e=Cn(a.d.f.dK,f);if(e!==null){IL(a,e);c=1;}else{e=Cn(a.d.f.dA,f);if(e!==null&&!Eu(e)){if(e.m!=1){YC(a.kk,b,e,a,g);c=1;}else{IL(a,Bw(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fp(a,b.g)).bq;g=Ca(a.d.f,c);c=Gz(g,a.d.z);d=GY(g,a.d.z);b=NX(g,c);if((d-1|0)==g.R){Cc((Bi(a)).bK,
a.d.w,OW(g));Cc((Bi(a)).bA,a.d.w,g.R);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b_.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=Gz(g,c-1|0);d=GY(g,c);}else{if(d!=j){Qb(Bi(a),a.d.w);break b;}c=Gz(g,d+1|0);d=GY(g,c);}}}Cc((Bi(a)).bK,a.d.w,c);(Bi(a)).dn=1;CL(a,a.d.w,d,0);(Bi(a)).dn=0;I5(a);}}break a;case 3:break;default:break a;}Qb(Bi(a),a.d.w);Y1(a.d.hC);I5(a);}}return 1;}
function WD(a,b){var c,d,e,f,g,h,i,j;c=a.cG.cP;if(F0(a.fG,b.g,c))return 1;if(F0(a.fm,b.g,c))return 1;d=a.da;if(Hr(b.g,d.gj,d.ff)&&Gv(c)?1:0)return 1;e=b.g;f=!a.cd?a.cX:(a.ck+a.ce|0)+a.c7|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=F$(a);i=Ed(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Gv(c);if(b.cJ){e=Fp(a,b.g);e.bv=Gz(Ca(a.d.f,e.bq),e.bv);b=a.d.f;if(!MC(b.dK,e)&&!MC(b.dA,e)?0:1)return DS(c,C(213));}return DS(c,C(181));}
function A0K(a,b){var c,d,e,f,g;c=b.cJ;if(c&&b.bl==65){c=CI(a.d.f)-1|0;d=Gn(a.d.f,c);Cc((Bi(a)).bK,0,0);Cc((Bi(a)).bA,CI(a.d.f)-1|0,d);return 1;}if(c&&b.bl==80){I7(a.d);return 1;}if(!a.eM&&c&&b.bl==90){if(Dr(Bi(a)))FZ(a);b=a.d.f;b.cn=b.cn+1|0;e=b.ip;d=e.m;if(!d)e=null;else{f=(EB(e,d-1|0)).data;e=V0(b,f[0]);c=1;while(c<f.length){V0(b,f[c]);c=c+1|0;}}if(e!==null){CL(a,e.a,e.b,0);Eo(a);}return 1;}if(!c&&!b.du){if(Bj(b.d$,C(214))){DC(a,C(215));Dv(a,a.d.z-1|0,0);c=1;}else if(Bj(b.d$,C(216))){DC(a,C(217));Dv(a,a.d.z
-1|0,0);c=1;}else if(Bj(b.d$,C(36))){DC(a,C(22));Dv(a,a.d.z-1|0,0);c=1;}else if(Bj(b.d$,C(218))){DC(a,C(219));Dv(a,a.d.z-1|0,0);c=1;}else if(Bj(b.d$,C(220))){DC(a,C(221));Dv(a,a.d.z-1|0,0);c=1;}else if(!Bj(b.d$,C(222)))c=0;else{DC(a,C(223));Dv(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.du&&!b.cJ)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.nK.data[c];if(e!==null)e.h();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AIm(a,b))return 1;if(AFf(a,b))return 1;c=b.cJ;if(c&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bl;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.du&&!b.j9)return J(b.d$)>0&&DC(a,b.d$)?1:0;return 0;}return 0;}
function Z3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=S2(a);d=S1(a);if(b.fF!=3&&b.hD==3){e=Tc(b.oG);f=new XE;f.yX=c;f.yY=d;g=new QH;g.rB=f;while(!g.mg&&AAZ(e,g)){}if(!g.mg&&Bj(C(182),Eq(b))){c=Be(0,c-100|0);d=Bd(CI(b.f)-1|0,d+100|0);BC(b.oG,BJ(c,d));h=BN(3);i=h.data;i[0]=Fw(b.f,c);e=b.f;j=0;d=Bd(d+1|0,e.A.data.length);k=0;while(k<d){j=j+Gn(e,k)|0;if(k!=(e.A.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.y0=EW();e=b.eZ;l=new AAM;l.vp=b;i=Q(B,3);m=i.data;m[0]=E4(b.f);m[1]=h;b=b.f.dc;g=BH();AAd(b,b.db,
g);h=BN(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bw(g,o);d=k+1|0;n[k]=b.bY;q=d+1|0;n[d]=b.bW;k=q+1|0;n[q]=b.fB;o=o+1|0;}m[2]=h;CR(e,l,C(224),i);}}}
function UP(a){I7(a.d);}
function YT(a){AFL(a.d);}
function G6(a,b,c){var d,e,f,g,h,i;if(c&&a.eM)return 0;d=Eg(Bi(a));e=d.J;if(Dr(Bi(a))){f=a.d.f;g=Bi(a);h=T4(f,g);if(c)OH(f,g,h);if(c){CL(a,d.J,d.Z,0);FZ(a);Eo(a);}}else{h=Fm(FC(a.d.f.A.data[e]),C(208));i=Bd(CI(a.d.f)-1|0,e);Cc((Bi(a)).bA,i,0);if(e>=(CI(a.d.f)-1|0))Cc((Bi(a)).bA,i,Gn(a.d.f,i));else Cc((Bi(a)).bK,i+1|0,0);if(c)GI(a);else CL(a,e,0,0);}b.j(h);return 1;}
function AFf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eM)return 0;a:{switch(b.bl){case 8:if(Dr(Bi(a))){GI(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OB(b.f,e,c);}else{e=b.w-1|0;c=Gn(b.f,e);b=a.d.f;Lp(b,e);FV(b,e,Gn(b,e),1,C(208));}Eo(a);c=CL(a,e,c,0);}}break a;case 9:if(!b.bJ){if(!Dr(Bi(a)))DC(a,a.fg);else{f=Eg(Bi(a));g=FW(Bi(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BN(e);i=h.data;j=Q(BL,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fg;d=d+1|0;e=l;}b=new ABO;m=a.d;AIG(b,m.w,m.z);m=new Sq;m.tP
=a;Pv(a,h,0,0,j,b,m);f.Z=f.Z+J(a.fg)|0;g.Z=g.Z+J(a.fg)|0;Me(a,a.d.z+J(a.fg)|0);Eo(a);}c=1;}else b:{if(!Dr(Bi(a))){b=a.d;f=Ca(b.f,b.w);if(f.s.data.length>0){g=Ug(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.w;b=DL(e,m.z);n.cn=n.cn+1|0;o=n.ip;h=Q(G1,1);h.data[0]=ARL(e,0,1,g,b.bq,b.bv);BC(o,h);MX(n,e,0,1,g);HE(f,0,J(g));Me(a,a.d.z-J(g)|0);}}else{b=Eg(Bi(a));f=FW(Bi(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BN(c);k=h.data;j=Q(BL,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.J){g=Ca(a.d.f,p);if(g.s.data.length>0){g=Ug(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=I9(h,c);j=De(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.Z=Be(0,b.Z-J(g)|0);if(p==f.J){f.Z=Be(0,f.Z-J(g)|0);Me(a,a.d.z-J(g)|0);}d=d+1|0;}b=DL(l,e);f=new Tk;f.sp=a;Pv(a,h,0,1,j,b,f);}Eo(a);c=1;}break a;case 13:if(Dr(Bi(a)))GI(a);b=a.d;ET(Ca(b.f,b.w));b=a.d;AJA(b.f,b.w,b.z);Eo(a);c=CL(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AJ6(a);}return c;}
function AIm(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cJ?Ig(a,H3(a.bw,a.T),b.bJ):Js(a,2-T$(Ed(a),a.T)|0,0,b.du,b.bJ);break a;case 34:c=!b.cJ?Js(a,T$(Ed(a),a.T)-2|0,0,b.du,b.bJ):Ig(a,((a.bw+Ed(a)|0)/a.T|0)-1|0,b.bJ);break a;case 35:if(!IG(a,b.bJ)&&!Dv(a,(FR(a)).R,b.bJ)){c=0;break a;}c=1;break a;case 36:if(!IG(a,b.bJ)&&!Dv(a,0,b.bJ)){c=0;break a;}c=1;break a;case 37:c=b.cJ;if(c&&b.du){I5(a);d=a.d.hC;e=d.dG;if(e<=0)d=null;else{f=d.fb.data;c=e-1|0;d.dG=c;d=f[c];}if(d===null)c=1;else{CL(a,LN(d),KE(d),0);JA(Bi(a),
d.n1);c=1;}break a;}c=Rx(a,(-1),c,b.bJ);break a;case 38:c=Js(a,(-1),b.cJ,b.du,b.bJ);break a;case 39:c=b.cJ;if(c&&b.du){d=a.d.hC;e=d.dG;if(e==(d.e$-1|0))d=null;else{f=d.fb.data;c=e+1|0;d.dG=c;d=f[c];}if(d===null)c=1;else{CL(a,LN(d),KE(d),0);JA(Bi(a),d.n1);c=1;}break a;}c=Rx(a,1,c,b.bJ);break a;case 40:c=Js(a,1,b.cJ,b.du,b.bJ);break a;default:}c=0;}if(c&&b.bJ){b=(Bi(a)).bA;d=a.d;Cc(b,d.w,d.z);}if(c)Lk(a.d);return c;}
function I5(a){var b,c,d,e,f,g,h;b=a.d;c=b.hC;d=c.dG;c=d<0?null:c.fb.data[d];if(c!==null&&b.w==LN(c)&&a.d.z==KE(c))return;c=a.d;e=c.hC;b=new Nt;d=c.w;f=c.z;c=Bi(a);b.oR=DL(d,f);g=AU1(c);b.n1=g;g.dn=0;f=e.dG;h=e.e$;if(f==(h-1|0))ABu(e,b);else{d=f+1|0;while(d<h){Y1(e);d=d+1|0;}ABu(e,b);}e.dG=e.dG+1|0;}
function Eo(a){a.d.f.yA=MA(FF(a));}
function HT(a,b){var c,d,e,f;a.A1=null;Lv(a.da,null);AC_(a.d);c=a.d;a.d=b;KQ(c,null,null);KQ(b,a,FF(a));d=(Cz(a.fj.t3)).data;e=d.length;f=0;while(f<e){d[f].pA(c,b);f=f+1|0;}a.bw=Gt(b.l7*a.T);}
function R6(a,b){var c;c=LI(a.d.f,b);if(c===null)return C(21);return c.v;}
function MK(a,b){var c,d,e,f,g;a.d.k9=b;if(b===null){Bm(Bx(),C(225));Lv(a.da,null);}else{b=b.data;c=DE(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gO<<24>>24;e=e+1|0;}Lv(a.da,c);}}
function RB(a,b){a.d.pK=b;}
function Bi(a){return a.d.qS;}
function Tn(a){var b;b=a.mu;if(b!==null)b.j(a);}
function AG7(){var a=this;B.call(a);a.ld=null;a.nr=null;a.hS=null;}
function AR$(a,b){var c=new AG7();AU9(c,a,b);return c;}
function AU9(a,b,c){var d,e;a.ld=b;a.nr=c;d=null;e=new TZ;e.rD=a;b.oH(d,e);b=null;d=new T0;d.qX=a;c.oH(b,d);}
function XT(a,b,c){var d,e,f,g,h,i,j;d=a.hS;if(d!==null&&d.h7!==null){e=b!==a.ld?0:1;f=b.kP();g=(b.jZ()+f|0)/2|0;h=g-f|0;d=a.hS;d=d.h7.data[GB(d,g,e)];i=g-(!e?d.hG:d.hH)|0;j= -b.hj(f)|0;c.pw(Bb(((!e?d.hH:d.hG)+i|0)-h|0,c.oP())+j|0);return;}}
function S$(){B.call(this);this.z3=null;}
function AK4(a,b){Vo(a.z3,b);}
function S_(){B.call(this);this.xK=null;}
function AZQ(a,b){Vo(a.xK,b);}
function Ta(){B.call(this);this.vR=null;}
function AOC(a,b){return AGg(a.vR,b);}
function HK(){var a=this;B.call(a);a.n6=null;a.rH=null;a.rd=null;}
function A5K(a,b){var c=new HK();Ij(c,a,b);return c;}
function Ij(a,b,c){var d;d=null;a.n6=b.bU;a.rH=d;a.rd=c;}
function ANb(a,b){var c,d;if(b.cJ&&b.bl==79){c=a.rH;if(c!==null&&b.bJ)I1(a.n6,c);else NT(a.n6,a.rd);d=1;}else d=0;return d;}
function S8(){B.call(this);this.tQ=null;}
function APm(a,b){var c,d;c=a.tQ;d=DG(c.q,c.E)?c.E:!DG(c.q,c.G)?null:c.G;if(d!==null){Jf(d,b);c.kD=null;c.lY.hS=null;c.fr.eQ=null;}}
function S9(){B.call(this);this.r0=null;}
function A0m(a,b){b=b;return AIn(a.r0,b);}
var CZ=G(0);
function ACD(){var a=this;B.call(a);a.dI=null;a.cO=null;a.d3=null;}
function Yl(a,b,c){var d,e;d=M4(a.dI);F8(d,b,c);b=a.dI;c=b.d6;e=new AB0;e.vF=b;e.vE=c;d.jA=e;return d;}
function Fk(a,b){var c;c=a.d3;if(c!==b)a.d3=Cy(c,b);}
function EC(a){var b;b=a.d3;if(b!==null){L6(b);Fk(a,null);}}
function Gx(a,b){YZ(a.cO,0,b);}
function Ko(a,b){TW(a.cO,b);}
function JE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.cO.m-1|0;while(b>=0){c=Bw(a.cO,b);d=a.dI.bV;c.U.ds(d);e=c.Q;f=c.ig.kF;if(!K8(e)){if(!NU(e)&&!(!e.ew&&e.dS!==null)){e.ew=0;ABl(e);g=e.eo;h=(g.dq+g.ev+5.0)/10.0;i=CE(e.fV,e.kg);g=d.cl;j=e.eo;k=e.ji;l=h*2.0;Cl(g,j);m=i+Ld(g,k,l)|0;e.h1=m;m=EY(0,m,e.k.a);if(m){g=DZ(d,m,e.k.b,e.fV.cw);Cl(g,e.eo);j=e.ji;l=i;h=l+h;k=e.eo;n=k.dq;BQ(g,j,h,l+n-(n+k.ev)/16.0);j=e.dS;if(j===null){j=CT(d);e.dS=j;}CK(j,g);Er(g);Cv(e.l9,0.0,0.0,Cd(e.dS),Dj(e.dS));}}g=f.yr;j=e.dS;if(j===null)P_(e,
d,0,e.k.a,g);else{i=Cd(j);j=f.un;k=e.i;m=k.a;o=k.b;k=e.dS;D1(d,m,o,k.fl,e.l9,k,j,g,e.fV.cw);m=e.k.a;if(i<m)P_(e,d,i,m-i|0,g);}}B7(d,1);i=CE(c.bo,2.0);m=K8(c.Q);g=c.bo;j=g.dx;g=g.pm;o=m?0:c.Q.k.b;k=c.U.k;V(g,k.a,k.b+o|0);AHQ(d,g,!m?c.Q.i:c.U.i,c.ig.kF.oO, -i|0,j);g=c.U;AI2(d,g.k,g.i,i,o,Xw(c.ig.k7,c.bo.cb),c.ig.k7.nm,j);b=b+(-1)|0;}c=a.d3;if(c!==null&&!Eu(c.cc)){B7(c.cS.bV,1);b=0;while(true){g=c.cc;if(b>=g.m)break;LW(Bw(g,b),c.cS);b=b+1|0;}}}
function JY(a,b){var c,d;c=a.dI;if(c.cw==b)d=0;else{c.cw=b;Jk(c.hh);d=1;}if(d){c=a.d3;if(c!==null){c=B4(c.cc);while(B8(c)){NO(B9(c));}}b=0;while(true){c=a.cO;if(b>=c.m)break;c=Bw(c,b);c.Q.ew=1;c.U.qF();b=b+1|0;}}return d;}
function ATy(a,b){var c,d,e,f,g,h;c=a.d3;if(c!==null){d=0;e=c.cc.m-1|0;a:{while(e>=0){d=Nv(Bw(c.cc,e),b.g,c.cS.cP);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}e=0;while(true){c=a.cO;if(e>=c.m)break;b:{c=Bw(c,e);f=b.g;if(B0(c.Q,f))d=DS(c.bo.cP,null);else{d=CE(c.bo,7.0);g=CE(c.bo,25.0);if(MH(c,f.a,d)){h=Ws(c,f.a,g);if(MP(c,f.b,d)){d=DS(c.bo.cP,LO(h,C(226)));break b;}if(Kw(c,f.b,d)){d=DS(c.bo.cP,LO( -h|0,C(226)));break b;}}if(NV(c,f.b,d)){g=ACu(c,f.b,g);if(Oc(c,f.a,d)){d=DS(c.bo.cP,LO(g,C(227)));break b;}if(Mo(c,
f.a,d)){d=DS(c.bo.cP,LO( -g|0,C(227)));break b;}}d=0;}}c:{d:{if(!d){if(!B0(c.U,b.g))break d;if(!c.U.bQ(b)&&!DS(c.bo.cP,null))break d;}d=1;break c;}d=0;}if(d)return 1;e=e+1|0;}return 0;}
function ALL(a,b,c,d){var e,f,g,h,i;e=a.d3;if(e!==null){f=0;g=e.cc.m-1|0;a:{while(g>=0){f=NR(Bw(e.cc,g),b.g,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=0;while(true){e=a.cO;if(h>=e.m)break;b:{c:{i=Bw(e,h);if(!B0(i.Q,b.g)){d:{e:{f:{e=b.g;f=CE(i.bo,7.0);if(MH(i,e.a,f)){if(MP(i,e.b,f))break f;if(Kw(i,e.b,f))break f;}if(!NV(i,e.b,f))break e;if(!Oc(i,e.a,f)&&!Mo(i,e.a,f))break e;}f=1;break d;}f=0;}if(!f){if(!LX(i,b))break c;if(!i.U.cu(b,c,d))break c;}}f=1;break b;}f=0;}if(f)return 1;h=h+1|0;}return 0;}
function ANN(a,b,c){var d,e,f,g,h,i,j,k;d=a.d3;if(d!==null){e=null;f=d.cc.m-1|0;a:{while(f>=0){e=Bw(d.cc,f);g=b.g;h=E7(e.cm,g);if(!h&&!KZ(e.cm)){e=e.ko;if(e!==null)e.h();}e=!h?null:A5L;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=0;while(true){d=a.cO;if(i>=d.m)return null;b:{g=Bw(d,i);if(!c){c:{d=b.g;if(!K8(g.Q)&&B0(g.Q,d)){e=g.U.i;f=e.a;h=d.a;f=f-h|0;j=e.b;k=d.b;j=j-k|0;d=g.Q.i;h=d.a-h|0;k=d.b-k|0;e=new Bg;d=new Rk;d.p_=g;d.p9=h;d.p$=k;d.p7=e;d.p8=f;d.p6=j;}else{f=CE(g.bo,7.0);h=CE(g.bo,25.0);if
(MH(g,d.a,f)){j=Ws(g,d.a,h);if(MP(g,d.b,f)){d=JT(g,d,j,(-1));break c;}if(Kw(g,d.b,f)){d=JT(g,d,j,1);break c;}}if(NV(g,d.b,f)){h=ACu(g,d.b,h);if(Oc(g,d.a,f)){d=JT(g,d,(-1),h);break c;}if(Mo(g,d.a,f)){d=JT(g,d,1,h);break c;}}d=null;}}if(d!==null)break b;}d=B0(g.Q,b.g)?A5L:!LX(g,b)?null:g.U.cv(b,c);}if(d!==null)break;i=i+1|0;}return d;}
function A0G(a,b,c){var d,e,f;d=a.d3;if(d!==null&&Jj(d))return 1;e=0;while(true){d=a.cO;if(e>=d.m)break;a:{b:{d=Bw(d,e);if(!B0(d.Q,b.g)){if(!LX(d,b))break b;if(!d.U.dv(b,c))break b;}f=1;break a;}f=0;}if(f)return 1;e=e+1|0;}return 0;}
function AWK(a,b,c){var d,e,f;d=0;while(true){e=a.cO;if(d>=e.m)break;f=Bw(e,d);e=f.U;e.eW(e.i,e.k,c);e=f.Q;if(e.hc!==null){e.eo=null;e.h1=0;e.ew=1;}Ik(f);d=d+1|0;}}
function SO(){var a=this;B.call(a);a.bV=null;a.hh=null;a.cP=null;a.b2=null;a.cb=0.0;a.cw=0;a.d6=null;a.ei=null;a.dx=null;a.pm=null;a.AW=null;a.AX=null;}
function Kz(a){var b;b=a.d6;if(b!==null)b.to();}
function KO(a){var b;b=a.d6;if(b!==null)b.u$();}
function MD(a,b){var c;c=a.hh.ej!==(El()).activeElement?0:1;if(c)KO(a);a.d6=b;if(c)Kz(a);}
function FD(a,b){KO(a);a.d6=b;Kz(a);}
function AAq(a,b){if(a.d6===b)a.d6=null;}
function DG(a,b){return b!==a.d6?0:1;}
function J7(a){return a.bV.cl;}
function Hg(a,b){return Gy(a.bV,b.jx,Ce(b.hV,a.cb));}
function CE(a,b){return Ce(b,a.cb);}
function On(a,b){var c;c=a.bV;if(!a.cw)c.pc=b;else c.nG=b;Jk(a.hh);}
function Vu(){B.call(this);this.uM=null;}
function A0B(a,b,c,d){var e,f,g,h;e=a.uM;f=0;a:{while(true){g=e.cO;if(f>=g.m)break;if((Bw(g,f)).U.dt(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function AEg(){var a=this;B.call(a);a.eF=null;a.oh=0.0;a.id=0.0;a.gV=0;}
function AV6(){var a=new AEg();AQv(a);return a;}
function AQv(a){var b;b=Sj(0,0,2,20);a.eF=b;a.oh=0.5;a.id=0.0;Iv(187,187,187,255,b.W);}
function UB(a){return a.eF.t.b;}
function Sb(a){return a.eF.t.a;}
function Z8(a,b){var c,d;a:{c=a.gV;if(b>a.id)while(true){d=a.id+a.oh;a.id=d;a.gV=a.gV?0:1;if(b>d)continue;else break a;}}return a.gV==c?0:1;}
function To(a,b,c){V(a.eF.u,b,c);}
function XS(a,b){a.id=b+a.oh*1.25;a.gV=1;}
function AA7(a,b,c){if(a.gV)YV(a.eF,b,c.a,c.b);}
function ACU(){var a=this;B.call(a);a.fY=null;a.f=null;a.pb=null;a.qS=null;a.hC=null;a.kZ=null;a.eZ=null;a.k9=null;a.w=0;a.z=0;a.h8=0;a.iz=null;a.ik=null;a.oG=null;a.fF=0;a.hD=0;a.hQ=0;a.iG=Fz;a.y0=Fz;a.zL=Fz;a.pK=0;a.Du=0;a.dO=0;a.l7=0.0;a.fA=0;}
function A2V(a,b,c){var d=new ACU();AJR(d,a,b,c);return d;}
function AMP(a,b){var c=new ACU();AP0(c,a,b);return c;}
function A21(a,b,c){var d=new ACU();UL(d,a,b,c);return d;}
function AJR(a,b,c,d){UL(a,(AHt(b)).jO,c,d);}
function AP0(a,b,c){UL(a,b,null,c);}
function UL(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.qS=ALe();f=new SM;f.fb=Q(Nt,16);f.e$=0;f.dG=(-1);a.hC=f;a.iz=null;a.ik=BH();a.oG=BH();a.fF=1;a.hD=1;a.hQ=1;a.dO=0;a.l7=0.0;a.fA=0;a.fY=d;a.pb=c;c=new YW;g=e.length;b=Q(DB,Be(1,g));if(!g)b.data[0]=WX(C(21));h=b.data;i=0;while(i<g){h[i]=WX(e[i]);i=i+1|0;}d=new XF;f=new Nq;Qf(f);d.e0=f;c.eS=d;c.dK=JI();c.dA=JI();c.ip=BH();if(!h.length){c=new BS;X(c);N(c);}c.A=b;j=ABj(c);c.dc=AFQ(ASc(KF(0,j,0),null,null));a.f=c;}
function Eq(a){var b;b=a.pb;if(b===null){b=a.fY;if(b===null)b=C(181);else{b=b.gx;b=b===null?C(181):!Ej(b,C(228))&&!Ej(b,C(229))&&!Ej(b,C(230))&&!Ej(b,C(231))&&!Ej(b,C(232))&&!Ej(b,C(233))?(Ej(b,C(234))?C(182):Ej(b,C(235))?C(236):!Ej(b,C(237))?C(181):C(184)):C(183);}}return b;}
function Hu(a){var b;b=a.fY;return b===null?null:b.jX;}
function L7(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hD=3;a.hQ=3;a.fF=3;c=CN(b[0]);d=EH(b[1]);CN(b[2]);if(b.length<5)ABc(a.f,c,d);else{e=CN(b[3]);f=e.data;g=EH(b[4]);WE(a.f,c,d,e,g,0);SY(a,I9(e,f.length),N0(g));}if(a.fA){h=EU(a);i=JD(EW(),a.iG);j=new K;M(j);H(HD(H(H(j,h),C(238)),i),C(239));$rt_globals.console.info($rt_ustr(L(j)));}h=a.kZ;if(h!==null)Tn(h);}
function Lk(a){var b;RT(a,DL(a.w,a.z),IY(a.f,a.w,a.z));if(!(a.iz!==null&&!Eu(a.ik))){b=a.z;if(b>0)RT(a,DL(a.w,b-1|0),IY(a.f,a.w,a.z-1|0));}}
function RT(a,b,c){var d,e,f,g,h,i,j,k;AC_(a);d=Cn(a.f.dK,c);if(d!==null)c=d;a:{e=Cn(a.f.dA,c);if(e!==null){a.iz=LI(a.f,c);c=B4(e);while(true){if(!B8(c))break a;f=B9(c);BC(a.ik,LI(a.f,f));}}}c=a.kZ;if(c!==null){g=b.bq;h=b.bv;b=c.fj;f=Eq(c.d);e=Hu(c.d);i=(Cz(b.up)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.zX(f,e)){b=b.CF;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Ou;e.BL=c;e.BM=f;e.BJ=g;e.BK=h;b.sI(f,g,h,e,c.jE);}}}
function AC_(a){a.iz=null;Io(a.ik);}
function SY(a,b,c){var d,e,f,g,h;if(a.eZ!==null){a.zL=EW();d=a.f.cn;e=a.eZ;f=new Xx;f.xZ=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BN(1);b.data[0]=d;h[2]=b;CR(e,f,C(240),g);}}
function KQ(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.kZ=b;a.eZ=c;if(c===null){d=a.f.A.data;e=d.length;f=0;while(f<e){St(d[f]);f=f+1|0;}}else if(a.fF==1){a.iG=EW();b=Eq(a);e=BT(b,C(182));f=BT(b,C(184));d=E4(a.f);g=d.data.length;h=!e?5120:10240;i=AG6(b);if(f)JF(a,d,i);else if(g<=h)JF(a,d,i);else if(!e){UA(a,N0(d),i);JF(a,d,i);}else{UA(a,N0(d),i);j=N0(d);c=a.eZ;k=new AAL;k.yC=a;l=Q(B,2);m=l.data;m[0]=j;j=BN(1);j.data[0]=i;m[1]=j;CR(c,k,C(241),l);a.hD=2;JF(a,d,i);}}}
function UA(a,b,c){var d,e;d=a.eZ;e=new Xe;e.tO=a;CR(d,e,C(242),I(B,[b,DR([c,250])]));a.hQ=2;}
function JF(a,b,c){var d,e,f,g;d=a.eZ;e=new Ve;e.qp=a;f=Q(B,2);g=f.data;g[0]=b;b=BN(1);b.data[0]=c;g[1]=b;CR(d,e,C(243),f);a.fF=2;}
function EU(a){var b;b=a.fY;return b===null?C(21):ABo(b);}
function I7(a){var b,c,d,e,f;if(a.fA){b=EU(a);c=new K;M(c);H(H(c,b),C(244));$rt_globals.console.info($rt_ustr(L(c)));}b=Eq(a);if(b===null)d=null;else{a:{e=(-1);switch(Nz(b)){case -1655966961:if(!Bj(b,C(184)))break a;e=3;break a;case 3401:if(!Bj(b,C(236)))break a;e=2;break a;case 98723:if(!Bj(b,C(183)))break a;e=1;break a;case 3254818:if(!Bj(b,C(182)))break a;e=0;break a;case 3556653:if(!Bj(b,C(181)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(245);break b;case 2:d=C(246);break b;case 3:d
=C(247);break b;case 4:d=C(248);break b;default:d=null;break b;}d=C(249);}}if(d===null)Tn(a.kZ);else{a.iG=EW();b=a.eZ;c=new ABp;c.vj=a;f=Q(B,1);f.data[0]=E4(a.f);CR(b,c,d,f);}}
function AFL(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.fA){b=EU(a);c=new K;M(c);H(H(c,b),C(250));$rt_globals.console.info($rt_ustr(L(c)));}b=Eq(a);if(b!==null&&!Bj(C(181),b)){if(Bj(C(184),b)){I7(a);Im(a.f);}else{c=a.f.dc;d=P$(c,c.db);if(d===null){NZ(a);Im(a.f);return;}e=DR([Dk(d),C_(d),d.bT.fB]);f=E4(a.f);g=BN(1);g.data[0]=AG6(b);c=a.f.eS;if(c.fn===null){h=BN(0);i=B2(0);}else{j=ASS(AUU(d.ci,c.e0),d);Wc(j);h=j.n5;i=j.mj;}k=a.f.cn;d=a.eZ;c=new Rw;c.uu=a;l=Q(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=BN(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;CR(d,c,C(251),l);}}else Im(a.f);}
function NZ(a){var b;b=ASS(a.f.eS,null);Wc(b);SY(a,b.n5,b.mj);}
function ACJ(){var a=this;B.call(a);a.w$=null;a.AD=null;a.pW=null;a.up=null;a.t3=null;a.zv=null;}
function N7(a,b,c){return Q0(a,Cz(a.w$),b,c);}
function Yp(a,b,c){return Q0(a,Cz(a.AD),b,c);}
function Q0(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.zX(c,d))return g.DF;f=f+1|0;}return null;}
function AAK(a,b,c){var d,e,f,g;d=(Cz(a.pW)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.zX(b,c))return g.DA;f=f+1|0;}return null;}
function Fj(){var a=this;B.call(a);a.b$=0;a.c9=null;a.cA=null;a.es=null;a.dF=0;}
var A5M=0;var A5I=0;function WI(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cA;j=i===b&&!i.iU?0:1;if(j){a.cA=b;Na(b,c.cl,a.c9.gL);}k=H3(Bd(Gi(b),e+2048|0),1024);l=a.es;m=l.data.length;n=k<=m?0:1;if(n){a.es=De(l,k);while(m<k){a.es.data[m]=CT(c);m=m+1|0;}}o=a.c9.fs;if(!(!j&&!n)){if(A5M){l=b.f7;$rt_globals.console.info("fMeasure"+l.data);A5M=0;}if(!A5I){c=o.c$;b="alphabetic";c.textBaseline=b;}else{b=o.c$;c="top";b.textBaseline=c;}a.dF=f/1024|0;p=0;while(p<k){J2(a,o,d,a.dF+p|0);p=p+1|0;}a.cA.iU=0;}e=a.es.data.length;if
(e&&f<=Gi(a.cA)){f=f/1024|0;g=a.dF;if(f!=g){if(Vz(f-g|0)>=e){g=0;while(g<e){J2(a,o,d,f+g|0);g=g+1|0;}a.dF=f;}else{while(true){g=a.dF;if(g>=f)break;J2(a,o,d,g+e|0);a.dF=a.dF+1|0;}while(true){g=a.dF;if(g<=f)break;J2(a,o,d,g-1|0);a.dF=a.dF-1|0;}}}}}
function Nm(b,c){return (c-EZ(b)|0)/2|0;}
function Km(b,c){return Nm(b,c)+b.sq|0;}
function J2(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Xv(a,e);g=a.cA;if(f>=g.s.data.length)return;h=g.f7;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b$;l=a.c9.gL;EI(b);a:{while(true){g=a.cA;if(f>=g.s.data.length)break a;m=l.data;g=JK(g,f);n=m[Kp(g)];o=!A5I?Km(n,c):Nm(n,c);m=h.data;Cl(b,n);BQ(b,g.v,k,o);k=m[f]-j+a.b$;if(k>1024.0)break;f=f+1|0;}}h=a.es.data;CK(h[d%h.length|0],b);}
function PN(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.es.data.length;if(!o)return;if(g>Gi(a.cA))return;p=a.cA;q=p.eJ;r=p.s;s=g/1024|0;t=Xv(a,g);u= -a.b$|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.es.data[s%o|0];bb=w[t];bc=z[t]+a.b$|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Bd(bf,bc)-g|0;if(bd&&y)bg=bg+a.b$|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b$:2*a.b$|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b$:2*a.b$|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bt.hf;if(bb===j)bo=h.bt.qO;if(k!==null){p=B4(k);d:{while(B8(p)){if(BT(B9(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bt.u8;}if(n!==null){w=n.m1;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=ADf(h.dZ,h,bi,n.gO);}if(!bn&&!bl){i.b=Bd(i.b,Gi(a.cA));AE4(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Bd(bc,bf)-i.a|0)-(!y?a.b$:0)|0,(g
+bg|0)<=(i.b+(!y?a.b$:2*a.b$|0)|0)?0:(Bd(bc,bf)-i.b|0)-(!y?a.b$:0)|0,g-x|0,bo);}else{bp=h.lz.data[bb.bX];p=bn?h.bt.ku:Sh(bo,V4(h,bp.mf));Cv(a.c9.i4,g-x|0,0.0,bg,v);V(a.c9.hY,bg,f);G5(a.c9,d,ba,u+c|0,b,bp.h3,p);}if((bb.bE&12)>>2>0){bc=u+c|0;B7(d,1);p=a.c9;bq=p.m3;bq.a=bg;x=b+p.s3|0;bk=x-p.Aq|0;br=p.p2;bs=x+br;ba=p.g7;Td();LU(d,bc,bk,bq,br,bs,ba,A5N.kH.h3);B7(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AE4(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.lz.data[h.bX];o=n.h3;p=Sh(m,V4(f,n.mf));q=f.bt.ku;f=a.c9;r=f.i4;s=f.hY;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);V(s,u,e);G5(a.c9,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);V(s,k,e);f=a.c9;c=c+i|0;G5(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);V(s,i,e);G5(a.c9,b,g,c-j|0,d,o,q);}
function Sh(b,c){if(b!==null)c=b;return c;}
function Xv(a,b){var c,d,e,f,g,h,i;c=a.cA;d=c.f7;e=0;f=c.s.data.length;g=b;b=BK(e,f);if(b>0){c=new BS;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BK(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AC2(a){var b,c,d;b=a.es.data;c=b.length;d=0;while(d<c){AFq(b[d]);d=d+1|0;}a.es=a.c9.ne;a.cA=null;}
function AHD(a,b,c,d,e,f,g,h,i){var j,k;j=Gi(a.cA);if(j)j=j+a.b$|0;if(!j)j=j-a.b$|0;k=Be( -a.b$|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Ys(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fj,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.s6(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cA===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fj;g.b$=3;g.dF=0;g.c9=d;g.es=d.ne;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AC2(q);j=j+1|0;}return i;}
function Sa(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cA;if(e!==null)e.iU=1;d=d+1|0;}}
function N6(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AC2(b[d]);d=d+1|0;}}
function AE7(){A5I=0;}
function AGB(){var a=this;B.call(a);a.fR=null;a.dg=null;a.eU=null;a.fp=null;a.nY=null;a.nL=null;}
function IZ(){var a=new AGB();AWB(a);return a;}
function AWB(a){a.fR=new Bg;a.dg=new Bg;a.eU=new Bg;a.fp=new Bg;a.nY=new BY;a.nL=new BY;}
function YE(a){var b;b=a.dg;return !Bb(b.a,b.b)?0:1;}
function IC(a,b){return Hr(b,a.eU,a.fp);}
function FU(a,b,c,d){var e,f,g,h,i;e=IC(a,b);f=Hr(b,a.fR,a.dg);if(!e&&!f)return null;if(!f){if(!d)c.j(Ui(a,b.a-a.eU.a|0));else c.j(Qa(a,b.b-a.eU.b|0));}g=!d?a.fR.a+(a.dg.a/2|0)|0:a.fR.b+(a.dg.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new RE;b.uH=a;b.uI=c;b.uG=i;}else{b=new RD;b.q4=a;b.q2=c;b.q3=i;}return b;}
function HZ(a,b,c){if(c!==null)BO(a.nY,c);if(b!==null)BO(a.nL,b);}
function AEq(b,c){var d;d=new AAU;d.sr=b;d.AN=c;return d;}
function Qa(a,b){var c,d,e;c=a.fp.b;d=a.dg.b;e=c-d|0;return AEq(Bd(Be(0,b-(d/2|0)|0),e),e);}
function Ui(a,b){var c,d,e;c=a.fp.a;d=a.dg.a;e=c-d|0;return AEq(Bd(Be(0,b-(d/2|0)|0),e),e);}
function J_(a,b,c,d,e,f,g){Un(a,b,c,d,e,f,g,1);}
function QN(a,b,c,d,e,f,g){Un(a,b,c,d,e,f,g,0);}
function Un(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bd(i,d);j=Be(X1(d,d,e),i);e=e-d|0;i=d-j|0;i=i?X1(b,i,e):0;if(!h){k=a.fR;k.a=i+c|0;k.b=f-g|0;l=a.dg;l.a=j;l.b=g;l=a.eU;l.a=c;l.b=k.b;k=a.fp;k.a=d;k.b=g;break a;}k=a.fR;k.a=f-g|0;k.b=i+c|0;l=a.dg;l.a=g;l.b=j;l=a.eU;l.a=k.a;l.b=c;k=a.fp;k.a=g;k.b=d;break a;}}V(a.fp,0,0);V(a.dg,0,0);}}
function UC(a,b){GK(a,b);GR(a,b);}
function GK(a,b){var c;c=a.eU;Bs(b,c.a,c.b,a.fp,a.nY);}
function GR(a,b){var c,d;c=a.dg;c.a=c.a-2|0;c.b=c.b-2|0;d=a.fR;Bs(b,d.a+1|0,d.b+1|0,c,a.nL);b=a.dg;b.a=b.a+2|0;b.b=b.b+2|0;}
function F0(a,b,c){return IC(a,b)&&Gv(c)?1:0;}
function AEf(){var a=this;B.call(a);a.DP=20;a.gj=null;a.ff=null;a.k3=0.0;a.k0=null;a.iZ=0;a.kp=0;a.g0=0;a.c0=null;a.n0=null;a.e4=null;a.gt=null;a.gr=0;}
function AGu(){var a=new AEf();A0P(a);return a;}
function A0P(a){a.DP=20;a.gj=new Bg;a.ff=new Bg;a.c0=BH();a.n0=DE(0);}
function AAF(a,b,c){var d,e,f,g,h;d=a.gr;if(b==d)return;e=a.c0.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Be(0,(d-1|0)/20|0);g=Be(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Rb(a,b);a.gr=b;}else{WV(a,c);if(a.gr>=b)while(true){if(h<g)break a;a.gr=OY(Bw(a.c0,h%e|0),a.e4,a.gt,a.gr,b,f,a.k3);h=h+(-1)|0;}while(g<=h){a.gr=OY(Bw(a.c0,g%e|0),a.e4,a.gt,a.gr,b,f,a.k3);g=g+1|0;}}}}
function Lv(a,b){if(b===null)b=DE(0);a.n0=b;}
function Z2(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.g0;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c0;h=Bw(h,g%h.m|0);i=a.gj;j=a.n0;k=h.fd.b;l=d.kK;m=b+f|0;n=h.cq;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&Vi(d,j,r,l)!==l.kC?0:1){k=Bb((q-p|0)+1|0,h.cq);V(h.iR,Cd(h.cL),k);Cv(h.jv,0.0,Bb(p,h.cq),Cd(h.cL),k);t=r;}else{u=Vi(d,j,r,l);MZ(h,e,f+Bb(p,h.cq)|0,i,l.oj,u);V(h.iR,Cd(h.cL),h.cq);Cv(h.jv,0.0,Bb(q,h.cq),Cd(h.cL),h.cq);p=q;}q=q+1|0;r=t;}u=Vi(d,j,r,l);MZ(h,
e,f+Bb(p,h.cq)|0,i,l.oj,u);g=g+1|0;f=f+a.g0|0;}}
function R$(a,b,c,d){var e,f,g,h,i,j;e=a.c0.m;while(true){f=a.c0.m;g=Bb(f,a.g0);if(g>(d+a.kp|0))break;h=BJ(0,g);i=new Qe;g=a.ff.a;f=a.kp;j=a.k0;i.iR=new Bg;i.jv=new BY;i.px=h;i.d8=20;i.cq=f;i.fd=BJ(g,20*f|0);i.g_=Km(j,f);if(i.cL===null)i.cL=CT(b);BC(a.c0,i);}if(f==e)return;WV(a,b);Rb(a,c);}
function Rb(a,b){var c,d,e,f,g,h,i,j,k;c=a.c0;d=c.m;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B4(c);while(B8(c)){f=B9(c);g=a.e4;h=a.k3;EI(g);i=0;while(true){j=f.d8;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;GE(f,g,Dh(e),Bb(f.cq,i)+f.g_|0,h);i=i+1|0;}CK(f.cL,g);f.vH=g.iV;}}
function XX(a,b,c,d){a.k0=b;a.kp=c;a.g0=c*20|0;a.iZ=d;XZ(a);}
function WV(a,b){var c;c=a.e4;if(!(c!==null&&c.iV==a.iZ)){c=DZ(b,a.ff.a,a.g0,a.iZ);a.e4=c;Cl(c,a.k0);Zd(a.e4,2);}c=a.gt;if(!(c!==null&&c.iV==a.iZ)){b=DZ(b,a.ff.a,a.kp,a.iZ);a.gt=b;Cl(b,a.k0);Zd(a.gt,2);}}
function Is(a){Fl(a.c0,new ACG);Io(a.c0);XZ(a);}
function XZ(a){a.e4=Cy(a.e4,null);a.gt=Cy(a.gt,null);}
function RF(a,b,c,d,e){Cs(a.gj,b);V(a.ff,c,d);a.k3=e;}
function Wy(){B.call(this);this.Cc=null;}
function Wx(){B.call(this);this.pI=null;}
function ALc(a,b){var c;c=a.pI;FT(c,FM(b,KK(c)));}
function Ww(){B.call(this);this.se=null;}
function AKA(a,b){var c;c=a.se;Iz(c,FM(b,Z7(c)));}
function AI5(){var a=this;B.call(a);a.i4=null;a.hY=null;a.m3=null;a.g7=null;a.gL=null;a.ne=null;a.cj=null;a.fs=null;a.p2=0.0;a.dE=0;a.s3=0;a.Aq=0;a.it=0;}
function AOG(a){var b=new AI5();ARZ(b,a);return b;}
function ARZ(a,b){var c;a.i4=new BY;a.hY=new Bg;a.m3=new Bg;c=new BY;a.g7=c;a.gL=Q(Ll,4);a.ne=Q(Il,0);a.it=b;Lo(c);}
function Xy(a){a.fs=Cy(a.fs,null);}
function RJ(a,b,c){var d,e;d=CV(EZ(a.cj)*b);a.dE=d;e=a.cj;a.s3= -( -((d+e.dq+e.ev)/2.0)|0)|0;AC7(a,c);return a.dE;}
function Pr(a,b){var c,d;Lo(a.g7);c=a.g7;T9(c,b,c);a.p2=Wb(a.g7);c=a.g7;d=c.br+c.be+1.5|0;a.Aq=d;V(a.m3,0,d*2|0);}
function AC7(a,b){a.fs=Cy(a.fs,DZ(b,1024,a.dE,a.it));}
function G5(a,b,c,d,e,f,g){var h,i;h=a.hY;if(h.a&&h.b){i=a.i4;if(i.bB!==0.0&&i.be!==0.0){D1(b,d,e,h,i,c,f,g,a.it);return;}}}
function SF(a,b,c,d){var e,f;Cl(a.fs,a.cj);e=DZ(d,K1(a.fs,b)+(c*2|0)|0,a.dE,a.it);Cl(e,a.cj);BQ(e,b,c,Km(a.cj,a.dE));f=CT(d);CK(f,e);Er(e);return f;}
function Wv(){B.call(this);this.zJ=null;}
function ATA(a){var b,c;b=a.zJ;c=b.jG?0:1;b.jG=c;b=new K;M(b);Jl(H(b,C(252)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function WC(){B.call(this);this.wl=null;}
function AVN(a){var b,c;b=a.wl;c=b.kw^1;b.kw=c;b=new K;M(b);Jl(H(b,C(253)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function WB(){B.call(this);this.sW=null;}
function A1y(a){var b,c,d,e,f;b=a.sW;c=(b.d9+3|0)%6|0;b.d9=c;d=b.eI.data;e=d.length;f=0;while(f<e){b=d[f];b.b$=c;b=b.cA;if(b!==null)b.iU=1;f=f+1|0;}}
function WA(){B.call(this);this.u_=null;}
function AON(a){var b;b=a.u_;b.cd=b.cd?0:1;Is(b.da);b.da=AGu();NL(b);ZE(b,b.i,b.k,b.cG.cb);}
function Wz(){B.call(this);this.qz=null;}
function AQr(a){var b;b=a.qz;b.lp=b.lp?0:1;}
function Wu(){B.call(this);this.x9=null;}
function A05(a){var b;b=a.x9;b.pf=b.pf?0:1;}
function TZ(){B.call(this);this.rD=null;}
function AOQ(a){var b;b=a.rD;XT(b,b.ld,b.nr);}
function T0(){B.call(this);this.qX=null;}
function AYp(a){var b;b=a.qX;XT(b,b.nr,b.ld);}
var AFj=G();
function M9(){B.call(this);this.B8=null;}
var A5j=null;var A5O=null;function AWC(){AWC=Bn(M9);A1m();}
function AMz(a){var b=new M9();AGY(b,a);return b;}
function AGY(a,b){AWC();a.B8=b;}
function A1m(){A5j=AMz(C(254));A5O=AMz(C(255));}
var ADP=G(0);
function AHL(b,c,d){return Iv(b,c,d,255,new BY);}
function Iv(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Uu(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ANr(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bm=g+i;e.br=h+i;e.be=j+i;return e;}
function In(b,c,d,e,f){f=Uu(b,c,d,f);f.bB=e;return f;}
function HP(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var Y$=G();
function ANw(a,b){var c,d,e;c=b.cJ;d=c&&!b.bJ&&!b.du&&!b.j9?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bJ&&!c&&!b.du&&!b.j9?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.n$=1;}return 0;}
function Y9(){B.call(this);this.wd=null;}
function AUM(a,b){var c;c=a.wd.d6;return c!==null&&c.h9(b)?1:0;}
var Ls=G(0);
function AHm(){var a=this;Fh.call(a);a.cE=null;a.m=0;}
function BH(){var a=new AHm();ANc(a);return a;}
function ANc(a){a.cE=Q(B,10);}
function Mv(a,b){var c,d;c=a.cE.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cE=De(a.cE,d);}}
function Bw(a,b){Kl(a,b);return a.cE.data[b];}
function AYb(a){return a.m;}
function BC(a,b){var c,d;Mv(a,a.m+1|0);c=a.cE.data;d=a.m;a.m=d+1|0;c[d]=b;a.b1=a.b1+1|0;return 1;}
function YZ(a,b,c){var d,e,f;P8(a,b);Mv(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cE.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cE.data[b]=c;a.m=d+1|0;a.b1=a.b1+1|0;}
function EB(a,b){var c,d,e,f;Kl(a,b);c=a.cE.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b1=a.b1+1|0;return d;}
function TW(a,b){var c;c=KV(a,b);if(c<0)return 0;EB(a,c);return 1;}
function Io(a){AD1(a.cE,0,a.m,null);a.m=0;a.b1=a.b1+1|0;}
function AHy(a,b,c){var d,e,f,g,h,i;P8(a,b);if(c.et())return 0;Mv(a,a.m+c.cY()|0);d=c.cY();e=a.m;f=e-1|0;while(f>=b){g=a.cE.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.b6();i=0;while(i<d){g=a.cE.data;e=b+1|0;g[b]=h.b8();i=i+1|0;b=e;}a.b1=a.b1+1|0;return 1;}
function Kl(a,b){var c;if(b>=0&&b<a.m)return;c=new BF;X(c);N(c);}
function P8(a,b){var c;if(b>=0&&b<=a.m)return;c=new BF;X(c);N(c);}
function Fl(a,b){var c;c=0;while(c<a.m){b.j(a.cE.data[c]);c=c+1|0;}}
function J9(){var a=this;B.call(a);a.u=null;a.t=null;a.W=null;a.bk=null;}
function RL(){var a=new J9();AA8(a);return a;}
function Sj(a,b,c,d){var e=new J9();ALO(e,a,b,c,d);return e;}
function AA8(a){a.u=new Bg;a.t=new Bg;a.W=new BY;a.bk=new BY;}
function ALO(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.W=new BY;a.bk=new BY;G_(a,b,c,d,e);}
function G_(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function Z9(a){V(a.t,0,0);}
function KZ(a){var b;b=a.t;return Bb(b.a,b.b)?0:1;}
function E7(a,b){return Hr(b,a.u,a.t);}
function YV(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.W);}
function U7(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bk;i=a.W;Gh(b,b.ix);Gs(b.ix,b.X,d,e,g,b.c3);NE(b.ix,b.X,c);g=b.ix;j=b.X;Fv(j,g.uX,h);Fv(j,g.uV,i);c=g.rX;j.uniform2f(c,f,0.0);FS(b);}
var Fe=G();
function M7(){Fe.call(this);this.DF=null;}
function ZW(){Fe.call(this);this.DA=null;}
function X6(){Fe.call(this);this.CF=null;}
var G9=G(0);
var RS=G(0);
function BY(){var a=this;B.call(a);a.bm=0.0;a.br=0.0;a.be=0.0;a.bB=0.0;}
function ACR(a,b,c,d){var e=new BY();AYY(e,a,b,c,d);return e;}
function AJX(a){var b=new BY();AI6(b,a);return b;}
function AYY(a,b,c,d,e){a.bm=b;a.br=c;a.be=d;a.bB=e;}
function Cv(a,b,c,d,e){a.bm=b;a.br=c;a.be=d;a.bB=e;}
function AI6(a,b){a.bm=b.bm;a.br=b.br;a.be=b.be;a.bB=b.bB;}
function BO(a,b){a.bm=b.bm;a.br=b.br;a.be=b.be;a.bB=b.bB;return a;}
function ASX(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BI(a)===BI(b)){b=b;if(b.bm===a.bm&&b.br===a.br&&b.be===a.be&&b.bB===a.bB?1:0){c=1;break a;}}c=0;}return c;}
function Ll(){var a=this;B.call(a);a.nF=null;a.A$=null;a.wq=0.0;a.Bl=0;a.BB=0;a.sq=0;a.Ch=0;a.dq=0.0;a.ev=0.0;a.Bc=0.0;a.pn=0.0;a.Bh=0;a.qa=null;}
function EZ(a){return CV(a.dq+a.ev);}
function MT(a,b){return CV((a.dq+a.ev)*b);}
function Il(){var a=this;B.call(a);a.ey=null;a.fP=null;a.fl=null;}
var A44=0;function AFq(a){var b;b=a.fP;if(b!==null){A44=A44-1|0;a.ey.dW.deleteTexture(b);a.fP=null;}}
function Cd(a){return a.fl.a;}
function Dj(a){return a.fl.b;}
function Sn(a,b,c,d){var e;e=a.fl;e.a=b;e.b=c;N3(a);a.ey.dW.texStorage2D(3553,1,d,b,c);e=a.ey.dW;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function N3(a){var b,c;b=a.ey.dW;c=a.fP;b.bindTexture(3553,c);}
function CK(a,b){VV(a,b.nh,b.mL,32856);X3(a,b,0,0);}
function VV(a,b,c,d){var e,f,g,h;a:{e=a.fl;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){N3(a);break a;}e=a.ey.dW;h=a.fP;e.deleteTexture(h);a.fP=a.ey.dW.createTexture();Sn(a,b,c,d);break a;}}Sn(a,b,c,d);}}
function JB(a,b,c,d){N3(a);X3(a,b,c,d);}
function X3(a,b,c,d){var e;e=a.ey.dW;b=b.iM;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var XW=G(0);
var A5P=0.0;function Lo(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function T9(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Ja(b.bB,Ja(c,A5P));Cv(d,b.bm/c,b.br*c,ADX(b.be*c,1.25),e);}
function Wb(b){var c;c=b.br;return c-(c|0)>=0.25?0.0:0.5;}
function ADs(){A5P=ML(ML(0.5,0.375),4.0);}
var Oh=G(0);
function Gv(a){return DS(a,null);}
function QM(b){var c;c=new Y4;c.uk=b;return c;}
function Yc(){B.call(this);this.sD=null;}
function AWg(a){Kz(a.sD);}
function Yb(){B.call(this);this.uQ=null;}
function ATl(a){KO(a.uQ);}
function AJJ(){var a=this;B.call(a);a.bK=null;a.bA=null;a.dn=0;}
function ALe(){var a=new AJJ();A0$(a);return a;}
function AU1(a){var b=new AJJ();APG(b,a);return b;}
function A0$(a){a.bK=new G$;a.bA=new G$;}
function APG(a,b){a.bK=new G$;a.bA=new G$;JA(a,b);}
function JA(a,b){AAW(a.bK,b.bK);AAW(a.bA,b.bA);a.dn=b.dn;}
function NI(a,b,c){Cc(a.bA,b,c);if(!a.dn)Cc(a.bK,b,c);}
function Qb(a,b){Cc(a.bK,b,0);Cc(a.bA,b+1|0,0);}
function Eg(a){if(Ri(a.bK,a.bA)>0)return a.bA;return a.bK;}
function FW(a){if(Ri(a.bK,a.bA)<0)return a.bA;return a.bK;}
function AI3(a,b){var c,d,e,f;c=a.bK;d=c.J;e=a.bA;if(d==e.J&&c.Z==e.Z?1:0)return null;c=Eg(a);e=FW(a);d=c.J;if(d<=b){f=BK(b,e.J);if(f<=0)return BJ(b<=d?c.Z:0,f>=0?e.Z:(-1));}return null;}
function Dr(a){var b,c;b=a.bK;c=a.bA;return (b.J==c.J&&b.Z==c.Z?1:0)?0:1;}
function SM(){var a=this;B.call(a);a.fb=null;a.e$=0;a.dG=0;}
function ABu(a,b){var c,d,e;c=a.e$;d=a.fb;if(c==d.data.length)a.fb=De(d,c+16|0);d=a.fb.data;e=a.e$;a.e$=e+1|0;d[e]=b;}
function Y1(a){var b,c,d;b=a.dG;c=a.e$-1|0;if(b==c)a.dG=b-1|0;d=a.fb.data;a.e$=c;d[c]=null;}
var GQ=G();
function YW(){var a=this;GQ.call(a);a.A=null;a.dc=null;a.eS=null;a.dK=null;a.dA=null;a.ip=null;a.k_=null;a.cn=0;a.mQ=0;a.yA=0.0;}
function Ca(a,b){return a.A.data[b];}
function CI(a){return a.A.data.length;}
function ABj(a){return Fw(a,CI(a));}
function Gn(a,b){return a.A.data[b].R;}
function AJA(a,b,c){var d,e,f,g,h;d=a.A;e=d.data;f=e[b];d=De(d,e.length+1|0);e=d.data;a.A=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D0(Q(Ct,0));a.A.data[b+1|0]=f;}else if(c==f.R){e[b]=f;e[b+1|0]=D0(Q(Ct,0));}else{e=(IH(f,c)).data;d=a.A.data;d[b]=e[0];d[b+1|0]=e[1];}FV(a,b,c,0,C(208));}
function Lp(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=D0(I0(d.s,e.s));g=a.A;h=g.data.length;if(b<h&&b>=0){i=Q(DB,h-1|0);c=i.data;YP(g,b,i);c[b]=f;a.A=i;return;}d=new Bt;X(d);N(d);}
function OB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].R?0:1)){d=(Ca(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}FV(a,b,c,1,Ng(e));h=a.A.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=YP(d,e,Q(Ct,f-1|0));else{j=i[e];if(c<=0)k=D7(Dq(j.v,1),j.bX,j.bE);else if(c>=(J(j.v)-1|0)){k=new Ct;l=j.v;AAj(k,Cr(l,0,J(l)-1|0),j.bX,j.bE);}else{d=B2(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=D7(Hi(d),j.bX,j.bE);}i[e]=k;}h.R=h.R-1|0;ET(h);}else if(b!=(d.length-1|0)){FV(a,b,c,1,C(208));Lp(a,b);}}
function ADb(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Zg(a.A.data[b],c,e[0]);return;}g=f-1|0;d=(IH(a.A.data[b],c)).data;h=d[0];i=d[1];d=a.A;j=De(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);Mh(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gd(e[m])?WX(e[m]):D0(Q(Ct,0));d[b+m|0]=k;m=m+1|0;}Mh(i,0,0,e[g]);d[b+g|0]=i;a.A=j;}
function T4(a,b){var c,d,e,f,g,h,i;c=Eg(b);d=FW(b);e=c.J;if(e==d.J)return Cr(FC(a.A.data[e]),c.Z,d.Z);f=new K;M(f);b=a.A.data[c.J];e=c.Z;BM(BV(f,Dq(FC(b),e)),10);g=a.A.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;ADm(BV(f,FC(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.J];h=d.Z;BV(f,Cr(FC(b),0,h));return L(f);}b=new ACa;X(b);N(b);}
function OH(a,b,c){var d;AB1(a,b);d=Eg(b);FV(a,d.J,d.Z,1,c);}
function AB1(a,b){var c,d,e,f,g,h,i;a:{c=Eg(b);d=FW(b);e=c.J;if(e==d.J)HE(a.A.data[e],c.Z,d.Z);else{b=a.A.data[e];HE(b,c.Z,b.R);HE(a.A.data[d.J],0,d.Z);e=c.J+1|0;f=d.J;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DB,(h-f|0)+e|0);AED(g,e,f,i);a.A=i;Lp(a,c.J);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function IY(a,b,c){return DL(b,Gz(Ca(a,b),c));}
function ACs(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(Ca(a,c)).R|0)>=b)return BJ(c,b-d|0);d=d+((Ca(a,c)).R+1|0)|0;c=c+1|0;}return BJ(e,0);}
function Fw(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+Gn(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function LI(a,b){return NX(Ca(a,b.bq),b.bv);}
function E4(a){var b,c,d,e,f,g,h,i,j;b=B2(ABj(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;Ql(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FV(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cn=a.cn+1|0;f=a.ip;g=Q(G1,1);h=new G1;h.ea=b;h.eN=c;i=LZ(e,C(208),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BJ(b,c+J(i[0])|0);break a;}k=BJ((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BJ(b,c);}i=g.data;h.oL=k;h.nv=d;h.gB=e;i[0]=h;BC(f,g);MX(a,b,c,d,e);}
function MX(a,b,c,d,e){var f;f=Fw(a,b)+c|0;if(!d){WW(a.dc,f,J(e));SW(a.eS,f,J(e));}else{Uj(a.dc,f,J(e));OV(a.eS,f,J(e));}}
function V0(a,b){var c,d,e;c=LZ(b.gB,C(208),(-1));if(b.nv){ADb(a,b.ea,b.eN,c);WW(a.dc,Fw(a,b.ea)+b.eN|0,J(b.gB));SW(a.eS,Fw(a,b.ea)+b.eN|0,J(b.gB));}else{c=c.data;d=ALe();Cc(d.bK,b.ea,b.eN);e=c.length;if(e==1)Cc(d.bA,b.ea,b.eN+J(c[0])|0);else Cc(d.bA,(b.ea+e|0)-1|0,J(c[e-1|0]));AB1(a,d);Uj(a.dc,Fw(a,b.ea)+b.eN|0,J(b.gB));OV(a.eS,Fw(a,b.ea)+b.eN|0,J(b.gB));}return b.oL;}
function AAu(a){return a.mQ==a.cn?0:1;}
function Im(a){a.mQ=a.cn;}
function MS(a){var b,c,d;a.k_=BN(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.k_.data;d=b+1|0;c[d]=(c[b]+(Ca(a,b)).R|0)+1|0;b=d;}}
function UW(a,b){var c,d,e,f,g,h;c=a.k_;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].R;if(b<=(d+g|0)){h=DL(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DL(f,0);}return h;}d=AIX(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DL(d,b-(d<0?0:a.k_.data[d])|0);if(h.bv>=(Ca(a,h.bq)).R){h.bq=h.bq+1|0;h.bv=0;}return h;}
var LT=G(0);
function KG(a){return LJ(a.so(),a.ot());}
function LJ(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BM(BV(e,b[f]),47);f=f+1|0;}return L(BV(e,c));}
var SQ=G(0);
function R7(){var a=this;B.call(a);a.h0=null;a.fW=null;a.js=null;}
function AI0(a,b){var c=new R7();AN3(c,a,b);return c;}
function A1K(a,b,c){var d=new R7();ADM(d,a,b,c);return d;}
function AN3(a,b,c){ADM(a,b,c,Q(BL,0));}
function ADM(a,b,c,d){a.h0=b;a.fW=c;a.js=d;}
function EK(a){var b;b=a.h0;return HW(b!==null?b.name:a.fW.name);}
function AKW(a){return a.js;}
function Ud(a,b,c){var d,e,f;d=AJK(c);e=new UF;e.qm=b;b=a.fW;if(b!==null)b.text().then(Bu(e,"f"),Bu(d,"f"));else{b=a.h0.getFile();f=new UG;f.q_=e;f.ra=d;b.then(Bu(f,"f"),Bu(d,"f"));}}
function AJK(b){var c;c=new SR;c.w1=b;return c;}
function AWJ(a){var b,c,d,e,f,g,h,i;if(a.fW===null)b=LJ(a.js,EK(a));else{c=a.js;b=EK(a);d=a.fW.size;e=d|0;if(e!==d){f=EK(a);g=new K;M(g);H(H(g,C(256)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BV(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BV(g,C(37));H(g,i[h]);h=h+1|0;}BV(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(257)),b),C(258)),e);b=L(g);}return b;}
function AKI(a){return (AEL(EK(a))*31|0)+AFy(a.js)|0;}
var ABQ=G(0);
function AIM(){B.call(this);this.iq=null;}
function A1Y(a){var b=new AIM();AXL(b,a);return b;}
function AXL(a,b){a.iq=b;}
function EH(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iq));}
function CN(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iq));}
function AU5(a){var b,c;b=a.iq.byteLength;c=new K;M(c);H(U(H(c,C(259)),b),C(260));return L(c);}
function Y4(){B.call(this);this.uk=null;}
function DS(a,b){YX(a.uk,b);return 1;}
function G$(){var a=this;B.call(a);a.J=0;a.Z=0;}
function Cc(a,b,c){a.J=b;a.Z=c;}
function AAW(a,b){a.J=b.J;a.Z=b.Z;}
function Ri(a,b){var c;c=BK(a.J,b.J);if(c)return c;return BK(a.Z,b.Z);}
function Nt(){var a=this;B.call(a);a.oR=null;a.n1=null;}
function LN(a){return a.oR.bq;}
function KE(a){return a.oR.bv;}
function DB(){var a=this;B.call(a);a.s=null;a.R=0;a.f7=null;a.eJ=null;a.ek=null;a.hZ=null;a.gK=0;a.iU=0;a.jc=0;}
var A5Q=0;var A5R=0;var A5J=0;function WX(a){var b=new DB();AJa(b,a);return b;}
function D0(a){var b=new DB();Yw(b,a);return b;}
function AJa(a,b){var c;c=Q(Ct,1);c.data[0]=AHU(b);Yw(a,c);}
function Yw(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.R=d;ET(a);}
function Jg(a){return a.s.data.length;}
function JK(a,b){return a.s.data[b];}
function Gz(a,b){var c;c=J6(a,b);return c<=0?0:a.ek.data[c-1|0];}
function J6(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.ek!==null&&!a.jc)){Uy(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.ek.data[d]=e;d=d+1|0;}a.jc=0;}d=AAs(a.ek,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function NX(a,b){var c;c=a.s.data;if(!c.length)return null;return c[J6(a,b)];}
function HE(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.R){a.s=Q(Ct,0);ET(a);a.R=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BK(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=YP(g,e,Q(Ct,g.data.length-1|0));a.R=a.R-d|0;ET(a);return;}a.s.data[e]=D7(Fm(Cr(k.v,0,b),Dq(k.v,c)),k.bX,k.bE);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=D7(Cr(l.v,0,b),l.bX,l.bE);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=D7(Dq(m.v,c),m.bX,m.bE);g=a.s;a.s=AED(g,e,f,Q(Ct,(g.data.length-f|0)+e|0));}a.R=a.R-d|0;ET(a);}
function IH(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DB,[D0(Q(Ct,0)),a]);if(b>=a.R)return I(DB,[a,D0(Q(Ct,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DB,[D0(Lh(c,0,Q(Ct,d))),D0(Lh(c,d,Q(Ct,f-d|0)))]);h=e[d];e=Lh(c,0,Q(Ct,d+1|0));i=e.data;j=Lh(c,d,Q(Ct,f-d|0));c=j.data;i[d]=D7(Cr(h.v,0,b),h.bX,h.bE);c[0]=D7(Dq(h.v,b),h.bX,h.bE);return I(DB,[D0(e),D0(j)]);}
function Zg(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}Mh(a,d,b,c);}
function Mh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gd(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Ct,1);h.data[0]=AHU(d);a.s=h;}else if(!b&&!c){h=Q(Ct,g+1|0);f=h.data;DQ(e,0,h,1,g);f[0]=AHU(d);a.s=h;}else{i=f[b];if(c<=0)j=D7(Fm(d,i.v),i.bX,i.bE);else if(c>=J(i.v))j=D7(Fm(i.v,d),i.bX,i.bE);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B2(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D7(Hi(e),i.bX,i.bE);}f[b]=j;}a.R=a.R
+J(d)|0;ET(a);}
function OW(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<LS(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Na(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.f7;if(!(e!==null&&e.data.length>=d)){a.f7=AKs(d);a.eJ=BN(d);a.gK=1;}Uy(a);if(!a.gK)A5R=A5R+1|0;else{f=0;g=0.0;A5Q=A5Q+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.ek.data[h]=f;Cl(b,i[Kp(j)]);g=g+DN(b,j.v);a.f7.data[h]=g;a.eJ.data[h]=g+0.5|0;h=h+1|0;}a.R=f;a.gK=0;a.jc=0;}}
function Uy(a){var b;b=a.ek;if(!(b!==null&&b.data.length>=a.s.data.length)){a.ek=BN(a.s.data.length);a.jc=1;}}
function St(a){a.gK=1;a.hZ=null;}
function ET(a){St(a);a.iU=1;a.jc=1;}
function Zc(a,b,c,d){var e,f,g,h,i,j,k;if(a.hZ===null)a.hZ=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.hZ.data[d];if(e===null){e=c.data;f=a.s.data[d];Cl(b,e[Kp(f)]);f=f.v;e=BN(J(f)-1|0);c=Gf(f);g=!d?0.0:a.f7.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BL;k=i+1|0;Of(f,c,0,k);h[i]=g+DN(b,f)+0.5|0;i=k;}a.hZ.data[d]=e;}return e;}
function GL(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gK&&a.eJ!==null))Na(a,c,d);if(b>=a.R)return a.eJ.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BK(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eJ.data[f];}return (Zc(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function Gi(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eJ.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GY(a,b){var c;if(b>=a.R)return b+1|0;c=J6(a,b);return a.ek.data[c];}
function FC(a){var b,c,d,e;b=new K;GA(b,a.R);c=a.s.data;d=c.length;e=0;while(e<d){BV(b,c[e].v);e=e+1|0;}return L(b);}
function AEC(){A5J=0;}
function XF(){var a=this;B.call(a);a.fn=null;a.e0=null;}
function AUU(a,b){var c=new XF();AVV(c,a,b);return c;}
function AVV(a,b,c){a.fn=b;a.e0=c;}
function SW(a,b,c){var d;d=a.fn;if(d===null)return;Yu(a,d,b,c);}
function OV(a,b,c){var d;d=a.fn;if(d===null)return;AAy(a,d,b,c);}
function Yu(a,b,c,d){var e,f,g,h;e=b.eL.b6();while(e.cz()){U3(a,e.b8(),c,d);}e=b.fo.b6();while(e.cz()){f=e.b8();g=new Sr;g.xF=a;EJ(a,g,f,c,d);}h=b.hq.b6();while(h.cz()){e=h.b8();U3(a,e.kY,c,d);f=new Ss;f.vK=a;EJ(a,f,e.km,c,d);}b=b.cH.b6();while(b.cz()){Yu(a,b.b8(),c,d);}}
function U3(a,b,c,d){KA(a,b.eu,c,d);}
function EJ(a,b,c,d,e){var f,g;a:{if(c instanceof HA){f=c.g$;g=new Vg;g.qD=a;g.qB=b;g.qA=d;g.qC=e;Fl(f,g);}else{if(!(c instanceof J3)){if(!(c instanceof Jb))break a;f=c;EJ(a,b,f.jq,d,e);EJ(a,b,f.iO,d,e);return;}g=c.hP;f=new Vh;f.AK=a;f.AJ=b;f.AI=d;f.AH=e;Fl(g,f);}}if(c!==null){c=c.fE;if(c!==null)b.ln(c,CU(d),CU(e));}}
function KA(a,b,c,d){var e;e=b.dB;if(e>=c)b.dB=e+d|0;}
function AAy(a,b,c,d){var e,f,g,h;e=b.eL.b6();while(e.cz()){JJ(a,(e.b8()).eu,c,d);}e=b.fo.b6();while(e.cz()){f=e.b8();g=new RI;g.tT=a;EJ(a,g,f,c,d);}h=b.hq.b6();while(h.cz()){e=h.b8();JJ(a,e.kY.eu,c,d);f=new RK;f.yZ=a;EJ(a,f,e.km,c,d);}b.eL.o0(new RH);b.fo.o0(new RG);b=b.cH.b6();while(b.cz()){AAy(a,b.b8(),c,d);}}
function JJ(a,b,c,d){var e;e=b.dB;if(e>=c)b.dB=e-d|0;}
function K$(){var a=this;D9.call(a);a.c5=0;a.b5=null;a.cW=0;a.AL=0.0;a.mG=0;}
function JI(){var a=new K$();Qf(a);return a;}
function AV3(a,b){return Q(HO,b);}
function Qf(a){var b;b=AGx(16);a.c5=0;a.b5=Q(HO,b);a.AL=0.75;SZ(a);}
function AGx(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fq(a){var b;if(a.c5>0){a.c5=0;b=a.b5;AD1(b,0,b.data.length,null);a.cW=a.cW+1|0;}}
function SZ(a){a.mG=a.b5.data.length*a.AL|0;}
function MC(a,b){return Z4(a,b)===null?0:1;}
function ABa(a){var b;b=new S0;b.xT=a;return b;}
function Cn(a,b){var c;c=Z4(a,b);if(c===null)return null;return c.cM;}
function Z4(a,b){var c,d;if(b===null)c=RC(a);else{d=b.gn();c=QC(a,b,d&(a.b5.data.length-1|0),d);}return c;}
function QC(a,b,c,d){var e;e=a.b5.data[c];while(e!==null&&!(e.lw==d&&AHh(b,e.cQ))){e=e.cT;}return e;}
function RC(a){var b;b=a.b5.data[0];while(b!==null&&b.cQ!==null){b=b.cT;}return b;}
function MO(a){var b;if(a.ok===null){b=new P1;b.iX=a;a.ok=b;}return a.ok;}
function Ef(a,b,c){var d,e,f,g;if(b===null){d=RC(a);if(d===null){a.cW=a.cW+1|0;d=ST(a,null,0,0);e=a.c5+1|0;a.c5=e;if(e>a.mG)AA9(a);}}else{e=b.gn();f=e&(a.b5.data.length-1|0);d=QC(a,b,f,e);if(d===null){a.cW=a.cW+1|0;d=ST(a,b,f,e);e=a.c5+1|0;a.c5=e;if(e>a.mG)AA9(a);}}g=d.cM;d.cM=c;return g;}
function ST(a,b,c,d){var e,f;e=new HO;Vb(e,b,null);e.lw=d;f=a.b5.data;e.cT=f[c];f[c]=e;return e;}
function AH3(a,b){var c,d,e,f,g,h,i,j;c=AGx(!b?1:b<<1);d=Q(HO,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b5.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lw&b;j=h.cT;h.cT=e[i];e[i]=h;h=j;}f=f+1|0;}a.b5=d;SZ(a);}
function AA9(a){AH3(a,a.b5.data.length);}
function Lj(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b5.data[0];while(e!==null){if(e.cQ===null)break a;b=e.cT;d=e;e=b;}}else{f=b.gn();g=a.b5.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.lw==f&&AHh(b,e.cQ))){h=e.cT;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cT=e.cT;else a.b5.data[c]=e.cT;a.cW=a.cW+1|0;a.c5=a.c5-1|0;}if(e===null)return null;return e.cM;}
function AHh(b,c){return b!==c&&!b.bH(c)?0:1;}
function Ct(){var a=this;B.call(a);a.v=null;a.bX=0;a.bE=0;}
function AHU(a){var b=new Ct();AVt(b,a);return b;}
function D7(a,b,c){var d=new Ct();AAj(d,a,b,c);return d;}
function AVt(a,b){AAj(a,b,0,0);}
function AAj(a,b,c,d){a.v=b;a.bX=c;a.bE=d;}
function Kp(a){return a.bE&3;}
function Jc(b,c){return (!b?0:2)+(!c?0:1)|0;}
function LS(a){return J(a.v);}
var Nq=G(K$);
function Y2(){var a=this;B.call(a);a.db=null;a.eX=0;}
var A5S=null;function AFQ(a){var b=new Y2();AGf(b,a);return b;}
function AGf(a,b){a.eX=0;a.db=b;}
function P$(a,b){var c;if(b.eC)return b;b=B4(b.bn);while(true){if(!B8(b))return null;c=P$(a,B9(b));if(c!==null)break;}return c;}
function Wr(a,b,c){var d,e,f,g;d=Nh(a,a.db,b);if(d===null)return;b=c.ci;e=b===null?A5T:b.cH;f=c.bn;c=a.db;if(d===c){if(c.ci===null)c.ci=b;b=new Zf;b.xA=a;Fl(f,b);b=new Ze;b.tR=a;e.e8(b);b=a.db;b.bn=f;b.ci.cH=e;b.eC=0;return;}if(!Eu(f)){c=d.g8;if(c!==null){b=new WS;b.qI=c;Fl(f,b);g=KV(c.bn,d);if(g==(-1))HU(c.bn,f);else{EB(c.bn,g);AHy(c.bn,g,f);}}}b=d.ci;if(b!==null){b=b.g1;c=new RN;c.rT=b;e.e8(c);g=KV(b.cH,d.ci);if(g==(-1))HU(b.cH,e);else{b.cH.pu(g);b.cH.ti(g,e);}}}
function Nh(a,b,c){var d,e,f,g;d=b.bT;if(d.bY==c.bY&&d.bW==c.bW?1:0){d=B4(b.bn);while(B8(d)){e=Nh(a,B9(d),c);if(e!==null)return e;}return b;}b=B4(b.bn);while(true){if(!B8(b))return null;d=B9(b);f=c.bY;g=c.bW;e=d.bT;if(e.bY<=f&&g<=e.bW?1:0){e=Nh(a,d,c);if(e!==null)break;}}return e;}
function AAd(a,b,c){BC(c,b.bT);b=B4(b.bn);while(B8(b)){AAd(a,B9(b),c);}}
function WW(a,b,c){a.eX=0;La(a,a.db,b,c);}
function La(a,b,c,d){var e;if(C_(b)<c)return;a:{if(Dk(b)>c){LF(b,d);Hh(b,d);b=B4(b.bn);while(B8(b)){La(a,B9(b),c,d);}}else{if(!Mt(b,c)){if(a.eX)break a;if(C_(b)!=c)break a;}Hh(b,d);if(Dk(b)==c&&a.eX)LF(b,d);e=B4(b.bn);while(B8(e)){La(a,B9(e),c,d);}if(!a.eX){b.eC=1;a.eX=1;}}}}
function Uj(a,b,c){a.eX=0;Mx(a,a.db,b,c);}
function Mx(a,b,c,d){var e,f,g,h,i,j;if(C_(b)<c)return;e=Dk(b);f=c+d|0;if(e>f){e= -d|0;LF(b,e);Hh(b,e);g=B4(b.bn);while(B8(g)){Mx(a,B9(g),c,d);}b.bn=VN(a,b.bn);}else{h=b.bT;if(c<=h.bY&&h.bW<=f?1:0){if(b===a.db){LM(b,0);Mw(b,0);h=b.ci;if(h!==null)h.cH.iS();}else{LM(b,(-1));Mw(b,(-1));h=b.ci;if(h!==null){ACV(h);b.ci=null;}}Io(b.bn);}else{e=Mt(b,c);f=Mt(b,f);if(e&&f)Hh(b, -d|0);else if(e)Mw(b,c);else{if(!f)return;LM(b,c);Hh(b, -d|0);}h=B4(b.bn);while(B8(h)){Mx(a,B9(h),c,d);}h=Tc(b.bn);g=Xi(0);i=new Rm;j=new ABi;j.Em
=i;j.kb=g;while(AAZ(h,j)){}if(!j.kb.nJ&&!a.eX)b.eC=1;else a.eX=1;b.bn=VN(a,b.bn);}}}
function VN(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BH();d=null;e=A5S;f=b.cE;g=b.m;if(e===null)e=A4w;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}KP(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b1=b.b1+1|0;b=B4(b);while(B8(b)){m=B9(b);if(Dk(m)==C_(m))continue;if(!m.eC){if(d!==null){BC(c,d);d=null;}BC(c,m);}else if(d===null)d=m;else{n=ASc(KF(Bd(Dk(d),Dk(m)),Be(C_(d),C_(m)),d.bT.fB),d.g8,d.ci);n.eC=1;d=m.ci;if(d===null)d=n;else{ACV(d);d=n;}}}if(d!==null)BC(c,d);return c;}
function ACp(a,b,c,d){var e,f,g,h,i,j;if((C_(c)-Dk(c)|0)<43)e=Cr(d,Dk(c),C_(c));else{e=Cr(d,Dk(c),Dk(c)+20|0);f=Cr(d,C_(c)-20|0,C_(c));g=new K;M(g);H(H(H(g,e),C(172)),f);e=L(g);}e=ABe(e,C(208),C(261));f=Bx();g=Cu(c);h=new K;M(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bm(f,L(h));c=B4(c.bn);j=b+1|0;while(B8(c)){ACp(a,j,B9(c),d);}}
function AGm(){A5S=new T_;}
function AJ2(){var a=this;B.call(a);a.bY=0;a.bW=0;a.fB=0;}
function KF(a,b,c){var d=new AJ2();AVq(d,a,b,c);return d;}
function AVq(a,b,c,d){a.bY=b;a.bW=c;a.fB=d;}
function ARt(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bY==c.bY&&a.bW==c.bW&&a.fB==c.fB?1:0;}return 0;}
function AUG(a,b){var c;b=b;c=BK(a.bY,b.bY);if(!c)c=BK(b.bW,a.bW);return c;}
var T_=G();
function AOS(a,b,c){var d;b=b;c=c;b=b.bT;c=c.bT;d=BK(b.bY,c.bY);if(!d)d=BK(c.bW,b.bW);return d;}
function YA(){var a=this;B.call(a);a.bT=null;a.g8=null;a.bn=null;a.ci=null;a.eC=0;}
function ASc(a,b,c){var d=new YA();AFP(d,a,b,c);return d;}
function AFP(a,b,c,d){a.eC=0;a.bT=b;a.g8=c;a.bn=BH();a.ci=d;}
function AGE(b){return YH(b,null);}
function YH(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=KF(d,e,f);j=new YA;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AFP(j,i,null,l);m=0;while(m<g){l=YH(b,c);l.g8=j;BC(j.bn,l);m=m+1|0;}return j;}
function ADF(b,c,d){var e,f,g,h,i;a:{e=b.bT;f=b.bn;g=e.bY;h=e.bW;i=e.fB;Bq(c,g);GT(c,h,i);Bq(c,f.m);if(d!==null){e=b.ci;if(e!==null&&ABN(d,e)){g=(N4(d,b.ci)).bp;break a;}}g=(-1);}Bq(c,g);b=B4(f);while(B8(b)){ADF(B9(b),c,d);}}
function Dk(a){return a.bT.bY;}
function C_(a){return a.bT.bW;}
function LM(a,b){a.bT.bY=b;}
function Mw(a,b){a.bT.bW=b;}
function LF(a,b){var c;c=a.bT;c.bY=c.bY+b|0;}
function Hh(a,b){var c;c=a.bT;c.bW=c.bW+b|0;}
function Mt(a,b){return Dk(a)<=b&&b<C_(a)?1:0;}
function AKS(a){var b,c,d,e,f;b=a.bT;c=b.bY;d=b.bW;e=b.fB;b=new K;M(b);BM(b,40);BM(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eC;f=new K;M(f);Jl(H(H(f,b),C(37)),c);return L(f);}
function ALy(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BT(a.bT,c.bT)&&BT(a.bn,c.bn)?1:0;}return 0;}
var Je=G(0);
function GM(){var a=this;B.call(a);a.cQ=null;a.cM=null;}
function A5U(a,b){var c=new GM();Vb(c,a,b);return c;}
function Vb(a,b,c){a.cQ=b;a.cM=c;}
function AU7(a,b){var c,d;if(a===b)return 1;if(!I2(b,Je))return 0;a:{b:{c:{d:{c=b;b=a.cQ;if(b!==null){if(!b.bH(c.cQ))break c;else break d;}if(c.cQ!==null)break c;}b=a.cM;if(b!==null){if(!b.bH(c.cM))break c;else break b;}if(c.cM===null)break b;}d=0;break a;}d=1;}return d;}
function HO(){var a=this;GM.call(a);a.lw=0;a.cT=null;}
function Nn(){var a=this;Lf.call(a);a.w0=null;a.qE=null;}
function ADJ(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.w0;e=0;f=0;g=a.qE;a:{while(true){if((e+32|0)>f&&D3(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bd(Cf(b)+j|0,i.length);OX(b,d,j,f-j|0);e=0;}if(!D3(c)){k=!D3(b)&&e>=f?A5e:A5d;break a;}i=g.data;j=Bd(Cf(c),i.length);l=new Wn;l.pM=b;l.xo=c;k=AEX(a,d,e,f,g,0,j,l);e=l.tX;j=l.uP;if(k===null){if(!D3(b)&&e>=f)k=A5e;else if(!D3(c)&&e>=f)k=A5d;}ACr(c,g,0,j);if(k!==null)break;}}Fo(b,b.Y-(f-e|0)|0);return k;}
var P9=G(Nn);
function AEX(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(NP(h,2))break a;i=A5d;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!N$(l)){if((f+3|0)>g){j=j+(-1)|0;if(NP(h,3))break a;i=A5d;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CP(l)){i=Ek(1);break a;}if
(j>=d){if(D3(h.pM))break a;i=A5e;break a;}c=j+1|0;m=k[j];if(!Dg(m)){j=c+(-2)|0;i=Ek(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(NP(h,4))break a;i=A5d;break a;}k=e.data;o=EG(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tX=j;h.uP=f;return i;}
var IW=G(Em);
var Ow=G();
function ASP(a,b){return b.text();}
function Oy(){var a=this;B.call(a);a.sG=null;a.sF=null;}
function ASh(a,b){var c,d,e,f;c=a.sG;d=a.sF;e=b.length;f=new O1;f.zd=b;c.j(AMP((AJq(e,f)).jO,AA5(d)));}
var Ox=G();
function AT5(a,b){AGv(b);}
function IM(){var a=this;B.call(a);a.bt=null;a.Eb=null;a.dD=null;a.lz=null;a.kK=null;a.dZ=null;a.kr=null;a.Am=null;a.o1=null;}
function A5V(a,b,c,d,e,f){var g=new IM();Lu(g,a,b,c,d,e,f);return g;}
function Iu(){var b,c,d,e,f,g,h,i,j;b=new IM;c=new JZ;d=new He;FA();KJ(d,A5W);Mb(c,d,BW(A5C),BW(A5X),BW(A5Y),BW(A5C),BW(A5Z),BW(A50),BW(A51),BW(A52),BW(A53),BW(A54));e=AIu(S(C(262)));AEj();f=(A55.hb()).data;g=f.length;h=Q(Kc,g);i=h.data;j=0;while(j<g){i[j]=f[j].nk;j=j+1|0;}Lu(b,c,e,h,AI_(S(C(263)),S(C(264)),S(C(265)),S(C(266))),E_(),ADp(S(C(267)),S(C(268)),S(C(269)),S(C(270))));return b;}
function LY(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IM;c=new JZ;d=new He;AMY();KJ(d,A56);Mb(c,d,BW(A57),BW(A58),BW(A59),BW(A57),BW(A5$),BW(A5_),BW(A6a),BW(A6b),BW(A6c),BW(A6d));e=AIu(S(C(271)));Td();f=(A6e.hb()).data;g=f.length;h=Q(Kc,g);i=h.data;j=0;while(j<g){i[j]=f[j].kH;j=j+1|0;}k=AI_(S(C(272)),S(C(273)),S(C(274)),S(C(275)));l=new IN;d=new IV;ATE();m=A6f;Od(d,m,A6g,A6h,A6i,A6j,m);LC(l,d,AF7(),AGA(S(C(276)),S(C(277)),S(C(278))),AF7(),AGX(1,0.17499999701976776),A6k,A6l);Lu(b,c,e,h,k,l,ADp(S(C(267)),S(C(268)),
S(C(269)),S(C(279))));return b;}
function Lu(a,b,c,d,e,f,g){var h;h=d.data;a.kr=E6(C(171),17.0);a.Am=E6(C(155),15.0);a.o1=A3Z(C(171),15.0,0);a.bt=b;a.Eb=c;a.lz=d;a.kK=e;if(h.length>=15){a.dD=f;a.dZ=g;return;}b=new BS;X(b);N(b);}
function V4(a,b){if(b===null)b=a.bt.d_;return b;}
function Kg(){var a=this;CM.call(a);a.dQ=null;a.nj=null;}
function A2x(a){var b=new Kg();AGM(b,a);return b;}
function AGM(a,b){var c,d,e,f;KD(a,b,0);c=PG(a.bd);a.nj=c;d=KW(a.q,c);a.dQ=d;MD(a.q,d);c=b.p.bF;d=new XM;d.q5=a;Bc(c,d);c=b.p.bF;d=new HK;e=a.dQ;BD(e);f=new XK;f.z9=e;Ij(d,b,f);Bc(c,d);Si(a.dQ,b.p,0);b=b.p.c1;c=new XL;c.wD=a;Bc(b,c);Hj(a);}
function AWm(a,b){if(JY(a.bd,b))LE(a.dQ);}
function AZN(a,b){return IP(a.dQ,b);}
function ANy(a){Hs(a);If(a.dQ);JE(a.bd);}
function A0V(a){return Gq(0);}
function AKn(a,b,c){var d;It(a,b,c);d=a.dQ;L$(d,d.i,b,c);}
function AVp(a,b){BD(b);Ii(a.nj,b);Hx(a.dQ,b);}
function AH7(a,b){if(b.bl!=121)return 0;return 1;}
function ADL(a,b){var c,d,e;if(DG(a.q,a.dQ)){c=a.nj;b=b.g;d=a.dQ;e=new Ra;e.s_=a;GD(c,b,d,a,d,a,e);}return 1;}
function AG$(){var a=this;Ci.call(a);a.xq=null;a.ol=null;a.jK=null;a.ec=null;a.lm=null;a.g9=null;a.eq=null;a.i$=null;a.pJ=null;a.iD=null;a.pq=null;a.pr=null;a.oI=null;a.xM=null;a.Bt=null;a.r3=0;}
function A2J(a){var b=new AG$();AXe(b,a);return b;}
function AXe(a,b){var c,d,e,f;DK(a,b);c=(Iu()).bt.d_;a.xq=c;a.ol=AJX(c);a.jK=new Bg;a.ec=KB();a.lm=KB();a.g9=Sj(0,0,3,3);a.eq=H4(0,0,300,300);a.i$=AV6();d=Q(BL,4);e=d.data;e[0]=C(213);e[1]=C(181);e[2]=C(227);e[3]=C(226);a.pJ=d;a.iD=Q(J9,e.length);c=b.p.bO;f=new S5;f.fh=a;Bc(c,f);c=b.p.bF;f=new Ya;f.AM=a;Bc(c,f);c=b.p.nT;f=new X_;f.rx=a;Bc(c,f);c=b.p.gv;f=new X$;f.Cf=a;Bc(c,f);c=b.p.lL;f=new X9;f.C6=a;Bc(c,f);c=b.p.c1;f=new X8;f.Dz=a;Bc(c,f);b=b.p.fe;c=new X7;c.zw=a;Bc(b,c);a.pq=ABE(a,1);a.pr=ABE(a,0);Ro(a,a.ec,
a.pq);Ro(a,a.lm,a.pr);a.oI=ACS(a,0);a.xM=ACS(a,1);FG(a.eq,a.oI);FP(a.eq);Ht(a.eq,Ds(169,183,198));Fb(a.eq,a.xq);Cv(a.ec.W,1.0,1.0,1.0,1.0);Fb(a.ec,a.eq.bk);BO(a.g9.bk,a.ol);}
function Ro(a,b,c){FG(b,c);FP(b);}
function RM(a,b){In(DJ(),0.5+DJ()*0.5,0.5+DJ()*0.5,1.0,b.W);}
function ABE(a,b){var c,d;c=DZ(a.B.O,200,100,b);Ho(c,C(280),11.0);BQ(c,C(281),0.0,20.0);JU(c,255,0,0);BQ(c,C(281),0.25,40.0);JU(c,0,255,0);BQ(c,C(281),0.5,60.0);JU(c,0,0,255);BQ(c,C(281),0.75,80.0);d=CT(a.B.O);CK(d,c);Er(c);return d;}
function ACS(a,b){var c,d,e,f;c=DZ(a.B.O,255,100,b);Ho(c,C(171),10.0);d=Bx();e=$rt_str(c.c$.font);f=new K;M(f);H(H(f,C(282)),e);Bm(d,L(f));DN(c,C(283));BQ(c,C(283),0.0,20.0);BQ(c,C(283),0.25,40.0);BQ(c,C(283),0.5,60.0);BQ(c,C(283),0.75,80.0);e=CT(a.B.O);CK(e,c);Er(c);return e;}
function AKG(a,b){var c;a.r3=a.r3+1|0;c=b/5.0;In(c-(c|0),1.0,1.0,1.0,a.g9.W);return Z8(a.i$,b);}
function AMp(a){var b,c,d,e,f,g,h,i;b=a.B.O;Ex(b,a.ol);c=a.iD.data;d=c.length;e=0;while(e<d){YV(c[e],b,0,0);e=e+1|0;}f=a.eq;g=f.u;g.b=(a.jK.b-f.t.b|0)-5|0;g.a=0;B7(b,0);h=0;while(h<7){f=a.eq;Ew(f,b,a.oI,Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eq;f.u.b=(a.jK.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.xM;f=a.eq;f.u.a=Bb(h,10+((10*f.t.a|0)/15|0)|0)+5|0;R8(f,b,g,1);h=h+1|0;}R8(a.ec,b,a.pq,1);B7(b,1);g=a.lm;f=a.pr;i=g.u;h=i.a;d=i.b;g=g.t;Gh(b,b.kq);Gs(b.kq,b.X,h,d,g,b.c3);NE(b.kq,b.X,f);FS(b);B7(b,0);f=
a.Bt;if(f!==null)U7(a.g9,b,f,0,0,0.0);AA7(a.i$,b,new Bg);ME(b,C(284));}
function AOA(a,b,c){var d,e,f,g,h,i,j,k;d=Bx();e=Cu(b);f=new K;M(f);H(H(f,C(285)),e);Bm(d,L(f));d=Bx();f=new K;M(f);E5(H(f,C(286)),c);Bm(d,L(f));g=Ce(30.0,c);h=Ce(10.0,c);i=0;while(true){j=a.iD.data;if(i>=j.length)break;k=1+i|0;j[i]=Sj(Bb(h,k)+Bb(g,i)|0,g,g,g);RM(a,a.iD.data[i]);i=k;}V(a.g9.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.ec;V(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);V(a.lm.u,(b.a/2|0)+10|0,50);Cs(a.jK,b);}
function V$(a,b){var c,d,e,f,g;c=Bx();d=!b.jn?C(287):C(288);e=b.d$;f=b.bl;g=b.ym;b=new K;M(b);Jl(H(U(H(H(H(b,d),e),C(289)),f),C(290)),g);Bm(c,L(b));return 0;}
function AAc(){var a=this;Ci.call(a);a.DB=null;a.kJ=null;a.iF=null;a.hL=null;a.de=null;a.dR=null;a.mz=null;a.mo=null;a.je=0;a.im=null;a.il=null;}
function QD(a,b,c){FG(b,c);FP(b);}
function ADa(a,b,c,d,e,f){var g,h;g=DZ(f,c,120,b);Cl(g,e);e=!b?C(291):C(292);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);BQ(g,d,0.0,20.0);BQ(g,d,0.25,40.0);BQ(g,d,0.5,60.0);BQ(g,d,0.75,80.0);BQ(g,d,1.0,100.0);h=CT(f);CK(h,g);Er(g);return h;}
function APZ(a,b){return 0;}
function AUy(a){var b,c,d,e,f,g,h,i;b=a.B.O;Ex(b,a.kJ);B7(b,0);c=a.iF;d=c.b;e=a.hL;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.de.bk);Bs(b,g,0,a.hL,a.dR.bk);Bs(b,0,f,a.hL,a.de.W);Bs(b,g,f,a.hL,a.dR.W);c=a.de;e=c.u;h=e.b;i=((a.iF.b*3|0)/4|0)-(c.t.b/2|0)|0;Ip(c,b,e.a,h,a.im,0,1);c=a.de;Ip(c,b,c.u.a,i,a.im,1,1);c=a.dR;Ip(c,b,c.u.a,h,a.il,0,0);e=a.dR;Ip(e,b,e.u.a,i,a.il,1,0);ME(b,C(284));}
function AVG(a,b,c){var d,e;Cs(a.iF,b);V(a.hL,b.a/2|0,b.b/2|0);d=a.iF.b/4|0;e=a.de;d=d-(e.t.b/2|0)|0;V(e.u,(b.a/4|0)-(a.je/2|0)|0,d);V(a.dR.u,((b.a*3|0)/4|0)-(a.je/2|0)|0,d);}
function WF(){var a=this;CM.call(a);a.xn=null;a.e1=null;a.dz=null;a.nV=null;}
function AN7(a,b,c){var d;d=Hg(a.q,a.nV);Ju(a.e1,d,a.q);Ju(a.dz,d,a.q);}
function Q5(b){return IR(b,AGa());}
function IR(b,c){var d;d=Ln();NW(d,M3(b,JX(c,25)),!b?null:IR(b-1|0,c));NW(d,M3(b,JX(c,20)),!b?null:IR(b-1|0,c));NW(d,M3(b,JX(c,15)),!b?null:IR(b-1|0,c));NW(d,M3(b,JX(c,10)),!b?null:IR(b-1|0,c));return GP(d);}
function M3(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function NW(b,c,d){if(d!==null)Fx(b,c,d);else{d=new Uv;d.rj=c;DW(b,c,d);}}
function AM1(a,b,c){var d,e;It(a,b,c);b=a.q.b2;d=Es(a.e1);e=Es(a.dz);MV(a.e1,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);MV(a.dz,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AVl(a){var b,c,d,e,f,g,h,i;Hs(a);b=a.B.O;B7(b,1);c=a.xn;d=a.q;e=d.b2;V(c.nb,e.a,Ce(2.0,d.cb));V(c.nE,Ce(2.0,d.cb),e.b);FA();f=A53;g=d.bV;h=e.b/2|0;i=c.nb;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bV;h=e.a/2|0;c=c.nE;Bs(g,h-(c.a/2|0)|0,0,c,f);LW(a.e1,a.q);LW(a.dz,a.q);JE(a.bd);B7(b,0);}
function AOD(a,b){var c,d;c=Nv(a.e1,b.g,a.q.cP);d=Nv(a.dz,b.g,a.q.cP);return !c&&!d?0:1;}
function ALd(a,b,c,d){var e,f;e=NR(a.e1,b.g,c,d);f=NR(a.dz,b.g,c,d);return !e&&!f?0:1;}
function ZL(){CM.call(this);this.ka=null;}
function AMf(a,b,c){if(b===0.0)Yi(a);}
function Yi(a){var b,c,d,e,f,g,h,i;b=a.ka;if(b!==null){Ko(a.bd,b);Nw(b);}b=(Iu()).dD;c=A3T(a.q,new Uh);d=E6(C(155),14.0);e=AN6();f=0;while(f<300){g=Dh(f);h=new RY;h.zQ=C(293);h.zN=g;h.zO=C(294);Vr(e,C(293),g,C(294),h);f=f+1|0;}Wh(c,ACb(e));Vm(c,b,d);g=ADu(a.q);i=Gu(c,a.q);I6(i,b.mr,b.n_);KY(g,i);GO(g,b);FJ(g,C(144));a.ka=g;Gx(a.bd,g);P5(a);}
function ALu(a,b,c){It(a,b,c);P5(a);}
function P5(a){var b,c,d;b=a.q.b2;ES(a.ka,BJ((b.a*2|0)/10|0,(b.b*4|0)/10|0),BJ((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.ka;b=AGW(c.U.k);d=new K;M(d);H(H(d,C(295)),b);FJ(c,L(d));}
function V7(){var a=this;HF.call(a);a.lM=null;a.hB=null;a.f1=null;a.jN=null;a.re=null;a.jI=null;a.hN=null;a.ho=null;a.le=0;a.hA=0;}
function Pb(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hB.m>0){d=DJ();e=a.hB;f=d*(e.m-1|0)|0;e=EB(e,f);EB(a.f1,f);f=a.hA;g=e.t;a.hA=f-Bb(g.a,g.b)|0;IO(a.lM,e.dr);}c=c+1|0;}}
function LK(a,b){var c,d,e,f,g,h,i,j;c=J7(a.q);Cl(c,a.jN);d=0;while(d<b){e=JX(a.jI,1+(DJ()*19.0|0)|0);f=KB();g=f.dr;h=a.lM;BD(c);i=new Qy;i.tf=c;BO(g,Kf(h,e,i));(Uu(DJ(),1.0,1.0,f.bk)).bB=0.5;h=f.u;g=f.dr;V(h,g.bm|0,g.br|0);h=f.t;g=f.dr;V(h,g.be|0,g.bB|0);BC(a.f1,e);BC(a.hB,f);j=a.hA;h=f.t;a.hA=j+Bb(h.a,h.b)|0;d=d+1|0;}a.ho=Mr(a.lM);}
function AZl(a){var b,c,d,e,f,g,h,i;Hs(a);b=a.B.O;B7(b,1);c=a.q.bV;if(a.f1.m){d=a.ho;d=HB(c,d.a,d.b);Cl(d,a.jN);e=a.jN.dq;Bs(c,0,0,a.ho,a.re);f=0;while(f<a.f1.m){g=Bw(a.hB,f);h=Bw(a.f1,f);g=g.dr;BQ(d,h,g.bm,g.br+e);f=f+1|0;}g=a.hN;if(!(g!==null&&Cd(g)==a.ho.a&&Dj(a.hN)==a.ho.b))a.hN=Cy(a.hN,CT(c));CK(a.hN,d);Er(d);i=0;while(i<a.f1.m){d=Bw(a.hB,i);Ht(d,CA(0));Ew(d,c,a.hN,0,0);i=i+1|0;}}B7(b,0);}
function AKz(a,b){var c,d;if(a.le){c=a.ho;d=Bd(Bb(c.a,c.b),2211840);if(a.hA/d<=0.7)LK(a,Gj(a.jI,5));else Pb(a,Gj(a.jI,5));}return a.le;}
function R4(){var a=this;Ci.call(a);a.er=null;a.hE=null;a.iE=null;a.od=null;a.eV=0;a.tC=0;a.rf=null;a.l0=0;a.v2=0;a.wr=null;a.yK=null;}
function AKm(a){var b,c;b=a.eV;c=new K;M(c);U(H(c,C(296)),b);$rt_globals.console.info($rt_ustr(L(c)));Ex(a.er,a.rf);J_(a.iE,a.eV,0,Hm(a),5000,a.od.a,20);B7(a.er,1);UC(a.iE,a.er);B7(a.er,0);b=a.eV;c=new K;M(c);U(H(c,C(296)),b);$rt_globals.console.info($rt_ustr(L(c)));AAF(a.hE,a.eV/a.l0|0,a.er);Z2(a.hE,a.eV,Hm(a),a.yK,a.er);}
function ATh(a,b,c){a.od=b;RF(a.hE,BJ(0,0),50,Hm(a),c);R$(a.hE,a.er,0,Hm(a));}
function TY(a){return 5000-Hm(a)|0;}
function Hm(a){return Bd(a.tC,a.od.b);}
function D6(){var a=this;Ci.call(a);a.ph=null;a.hR=null;a.A5=0.0;}
function A6m(a){var b=new D6();JC(b,a);return b;}
function JC(a,b){DK(a,b);a.ph=AHL(0,0,64);a.hR=new Bg;We(b.bU,JG(BI(a)));}
function Zi(a){Ex(a.B.O,a.ph);}
function R0(a,b,c){Cs(a.hR,b);a.A5=c;}
var QB=G(D6);
var Wm=G(CM);
function G8(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.B.bU;f=new Qx;f.B3=a;f.sX=b;g=Q(B,1);h=g.data;i=BN(1);i.data[0]=b;h[0]=i;CR(e,f,C(297),g);d=d+1|0;}}
function ACy(a,b){var c,d,e,f,g,h;c=b.data;d=Bx();e=Cu(c[0]);f=new K;M(f);H(H(f,C(298)),e);Bm(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((KR(b,1)).iq));d=Bx();e=Cu(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BV(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BV(f,C(37));U(f,c[g]);g=g+1|0;}BV(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(299)),e),C(300)),f);Bm(d,L(h));}
function VK(){var a=this;D6.call(a);a.eT=null;a.gl=null;a.m2=null;a.zz=null;a.pB=null;}
function ANJ(a,b){b=b/5.0;In(b-(b|0),1.0,1.0,1.0,a.gl.W);return 0;}
function AVb(a){Zi(a);Ew(a.eT,a.B.O,a.zz,0,0);U7(a.gl,a.B.O,a.m2,0,0,0.0);ME(a.B.O,C(284));}
function A0T(a,b,c){var d,e,f;R0(a,b,c);V(a.gl.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.eT;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function R2(){var a=this;D6.call(a);a.gE=null;a.qi=null;a.lX=null;a.j6=null;a.jr=null;}
function A1n(a){var b,c,d,e,f,g;Zi(a);b=a.B.O;c=a.j6;LB(b,c.a,c.b,a.jr);b=a.gE;c=a.qi;d=a.hR;e=a.B.O;f=0;while(true){g=0;while(true){Ew(b,e,c,g,f);g=g+Cd(c)|0;if(g>=d.a)break;}f=f+Dj(c)|0;if(f>=d.b)break;}F2(a.B.O);}
function ANt(a,b,c){R0(a,b,c);V(a.jr,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ZA(){var a=this;Ci.call(a);a.eA=null;a.n2=null;a.go=null;a.ca=null;a.e7=0;a.ij=null;a.fq=0;a.Cu=20;a.Ee=11;a.C2=220;a.lD=null;a.DL=5000;a.h4=0;a.gz=null;}
function ASj(a){var b,c,d,e,f,g,h;b=a.ij;c=a.fq;d=a.lD;J_(b,c,0,d.b,5000,d.a,20);B7(a.eA,1);UC(a.ij,a.eA);if(a.ca===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BQ(a.n2,Dh(e),0.0,c);}b=CT(a.eA);a.ca=b;CK(b,a.n2);}if(a.fq<=a.e7)while(true){f=a.e7;if(f<=a.fq)break;a.e7=f-20|0;b=a.go;g=a.h4-1|0;a.h4=g;BQ(b,Dh(g),0.0,20.0);JB(a.ca,a.go,0,a.e7%220|0);EI(a.go);}else while(a.e7<(a.fq-20|0)){b=a.go;g=a.h4+1|0;a.h4=g;BQ(b,Dh((g+11|0)-1|0),0.0,20.0);JB(a.ca,a.go,0,a.e7%220|0);EI(a.go);a.e7=a.e7+20|0;}b=H4(0,0,Cd(a.ca),Dj(a.ca));Iq(b,
0,0,Cd(a.ca),Dj(a.ca));Ht(b,a.gz.data[0]);Fb(b,a.gz.data[1]);Ew(b,a.eA,a.ca,400,0);g=a.fq%220|0;f=Bd(Dj(a.ca)-g|0,200);d=H4(0,0,Cd(a.ca),f);Iq(d,0,g,Cd(a.ca),f);Ht(d,a.gz.data[0]);Fb(d,a.gz.data[1]);Ew(d,a.eA,a.ca,0,0);h=H4(0,f,Cd(a.ca),(Dj(a.ca)-f|0)-20|0);Iq(h,0,0,Cd(a.ca),(Dj(a.ca)-f|0)-20|0);Ht(h,a.gz.data[1]);Fb(h,a.gz.data[0]);Ew(h,a.eA,a.ca,0,0);}
function AVn(a,b,c){Cs(a.lD,b);}
function AY2(a,b){return 0;}
function Za(a){return 5000-a.lD.b|0;}
function Ka(){D6.call(this);this.d7=0;}
function YU(a){var b,c;b=a.B.bU;c=new Tw;c.wo=a;Q2(b,c,VM(a));}
function P3(a){var b,c,d,e;b=a.d7+1|0;a.d7=b;c=JG(F(Ka));d=new K;M(d);H(H(U(H(d,C(301)),b),C(29)),c);e=L(d);c=a.B.bU;d=new UY;d.wy=e;SL(c,e,d,VM(a));}
function VM(a){var b;b=new Yd;b.Au=a;return b;}
function AOq(a,b,c,d){a:{switch(c){case 0:break;case 2:P3(a);break a;default:break a;}YU(a);}return 1;}
function RP(){var a=this;Ci.call(a);a.ta=null;a.f8=null;a.ow=null;a.i_=null;}
function ASW(a){var b;b=a.B.O;Ex(b,a.ta);Ew(a.f8,b,a.ow,0,0);}
function AX6(a,b,c){var d,e,f;d=a.f8;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function GW(){var a=this;Ci.call(a);a.t2=null;a.ch=null;a.d4=null;a.df=null;a.fa=null;a.ez=null;}
function Oi(a,b){var c,d;DK(a,b);a.t2=CA(20);a.ch=RL();a.d4=new Bg;a.df=new Bg;a.fa=new Bg;a.ez=new Bg;c=b.p.bF;d=new ABd;d.Ck=a;Bc(c,d);Bc(b.p.bO,a);b=a.ch.bk;FA();BO(b,A5C);BO(a.ch.W,A5E);}
function AEl(a){var b,c,d;b=a.B.O;Ex(b,a.t2);c=a.ch;d=c.u;Bs(b,d.a,d.b,c.t,c.bk);B7(b,1);c=a.ch;d=c.u;ADi(b,d.a,d.b,c.t,a.d4,a.df,a.fa,a.ez,c.W);B7(b,0);}
function AXb(a,b){return 0;}
var Sv=G(GW);
function AYP(a,b,c){var d,e,f;d=a.ch;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);V(a.d4,0,0);V(a.df,Bd(b.a,b.b),Bd(b.a,b.b));b=a.fa;d=a.d4;V(b,d.a,d.b+20|0);b=a.ez;d=a.df;V(b,d.a,d.b+40|0);}
function AZK(a,b){var c,d,e;Cs(a.d4,b.g);b=a.df;c=a.ch;d=c.u;e=d.a;c=c.t;V(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fa;c=a.d4;V(b,c.a,c.b+20|0);b=a.ez;c=a.df;V(b,c.a,c.b+40|0);return 0;}
function Su(){var a=this;GW.call(a);a.fO=null;a.f9=null;}
function A06(a,b){var c;c=a.df;b=b.g;c.b=b.b-50|0;a.ez.b=b.b+100|0;return 1;}
function AMc(a){var b,c,d,e,f,g,h;b=Be(a.d4.a,a.fa.a);c=Bd(a.df.a,a.ez.a);d=Bd(a.d4.b,a.df.b)-50|0;e=Be(a.fa.b,a.ez.b)+50|0;G_(a.ch,b,d,c-b|0,e-d|0);AEl(a);f=a.ch.u.a-10|0;ZC(a,a.B.O,10,f,a.d4,a.fa);g=a.ch;h=g.u.a+g.t.a|0;ZC(a,a.B.O,h,f,a.df,a.ez);}
function ZC(a,b,c,d,e,f){var g;V(a.fO,c,a.ch.u.b);V(a.f9,d,e.b-a.ch.u.b|0);g=a.fO;Bs(b,g.a,g.b,a.f9,a.ch.bk);V(a.fO,c,e.b);V(a.f9,d,f.b-e.b|0);e=a.fO;Bs(b,e.a,e.b,a.f9,a.ch.W);V(a.fO,c,f.b);e=a.f9;g=a.ch;V(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.fO;Bs(b,e.a,e.b,a.f9,a.ch.bk);}
function AK0(a,b,c){}
function W$(){var a=this;CM.call(a);a.Dg=3;a.xc=null;a.j4=null;a.j3=null;}
function AZP(a,b,c){if(b===0.0)ABJ(a);}
function ABJ(a){var b;YQ(a,a.j4);YQ(a,a.j3);a.j4=P4(a,0.5,0,C(302));a.j3=P4(a,1.0,1,C(303));Gx(a.bd,a.j4);Gx(a.bd,a.j3);b=a.q.b2;ES(a.j3,BJ((b.a*2|0)/10|0,(b.b*2|0)/10|0),BJ((b.a*7|0)/10|0,(b.b*7|0)/10|0));ES(a.j4,BJ(b.a/10|0,b.b/10|0),BJ((b.a*6|0)/10|0,(b.b*6|0)/10|0));}
function YQ(a,b){if(b!==null){Ko(a.bd,b);Nw(b);}}
function P4(a,b,c,d){var e,f,g;e=ADu(a.q);f=new PH;g=new Rf;g.sg=e;g.sf=d;Lx(f);f.lI=new BY;f.o5=new Bg;f.wW=g;f.rg=b;if(c){d=Gu(f,a.q);I6(d,A6n,A6o);f=d;}KY(e,f);GO(e,E_());Zw(e,a.xc,3.0);return e;}
function Dt(){CM.call(this);this.gZ=null;}
function A28(a){var b=new Dt();H0(b,a);return b;}
function H0(a,b){G4(a,b);Bc(a.q.ei,a);BO(a.dN,CA(43));}
function AUW(a){return AS_();}
function AOK(a){return 1;}
function NG(a,b){GO(a.gZ,b);}
function Xh(a,b){var c,d,e;c=a.q.b2;d=!a.oJ()?0:UK(b.Q);e=c.b-d|0;ES(b,BJ(c.a/20|0,d+(e/20|0)|0),BJ((c.a*9|0)/10|0,(e*9|0)/10|0));}
function AZu(a,b,c){if(b===0.0){a.gZ=A30(a.q,a.hi());NG(a,E_());if(a.oJ())FJ(a.gZ,Xj(BI(a)));Gx(a.bd,a.gZ);a.kc(a.gZ);}}
function P0(){var a=this;Dt.call(a);a.lE=null;a.ex=null;a.Dj=null;}
function AUS(a,b){return IP(a.ex,b);}
function ALx(a){var b;b=KW(a.q,a.lE);a.ex=b;a.Dj=Si(b,a.B.p,1);AJo(a.ex);MD(a.q,a.ex);return a.ex;}
function ATG(a){return 0;}
function A08(a,b){Xh(a,b);Hj(a);}
function ARn(a,b){BD(b);Ii(a.lE,b);Hx(a.ex,b);NG(a,b.dD);}
function AQM(a,b){JY(a.bd,b);}
function V_(){B.call(this);this.vf=null;}
function AZi(a,b){DS(a.vf,null);return 0;}
var KM=G(0);
function AIl(a,b,c){var d;d=new Qd;d.AV=a;d.AU=b;d.AT=c;return d;}
function Q9(){var a=this;Dt.call(a);a.c6=null;a.oQ=null;a.l_=null;a.i3=null;}
function APK(a){var b,c,d,e,f;b=new Qn;c=a.bd;EV(b);b.f$=PG(c);d=S6(c.dI);b.ga=d;b.ki=Gu(d,c.dI);e=new O$;EV(e);d=new BY;ANT();AI6(d,A5G);e.zE=d;b.n4=e;f=KW(c.dI,b.f$);b.fI=f;b.y4=a;Vl(b,I(CD,[b.ki,b.n4,f]));b.rl=Gq(1);a.c6=b;b=AA6(C(304),0);d=new Rc;d.zB=a;b.gg=d;EL(a.c6.ga,b);return a.c6;}
function Rd(a){var b,c;b=a.B.bU;c=new ABg;c.uc=a;I1(b,c);}
function APD(a,b){Xh(a,b);Hj(a);}
function AXx(a,b){var c;NG(a,b.dD);c=a.c6;JW(c.ga,b);Jv(c.ga,c.ki);Ii(c.f$,b);Hx(c.fI,b);}
function AYS(a,b,c){var d;a.oQ=b;d=Cn(a.l_,b);if(d!==null)ACN(a,d);else if(Cn(a.i3,b)!==null){b=Cu(b);c=new K;M(c);H(H(c,C(305)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Ef(a.i3,b,KG(b));c=new ABA;c.wL=a;c.wH=b;d=new ABB;d.Ae=a;d.Af=b;Ud(b,c,d);}}
function ACN(a,b){HT(a.c6.fI,b);b=a.c6;FD(b.f$.b7.dI,b.fI);}
function AKF(a,b){ACF(b);if(I_(b)>0)Ez(a.c6.ga);}
function AM_(a,b){if(I_(b)>0)Ez(a.c6.ga);K9(b);}
function X4(){var a=this;Dt.call(a);a.k6=null;a.uD=null;}
function AXK(a){var b,c,d,e;b=S6(a.q);a.k6=b;BD(b);c=new SC;c.r9=b;b=W9(C(306),4,c);d=Bx();e=Ol(b);c=new K;M(c);U(H(c,C(307)),e);Bm(d,L(c));EL(a.k6,b);JW(a.k6,a.uD);b=a.k6;return Jv(b,Gu(b,a.q));}
function AYX(a,b){var c;c=a.q.b2;ES(b,BJ(c.a/30|0,c.b/10|0),BJ((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function W9(b,c,d){return ADj(b,0,c,d,AGa());}
function ADj(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BK(c,d);h=g>=0?0:1+Qm(f,2.0)|0;i=g>0?0:1+Qm(f,3.0)|0;j=Q(Eh,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(308)),g);k[g]=ADj(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){m=new Eh;n=new K;M(n);U(H(n,C(309)),g);NF(m,L(n),c);n=new U8;n.xu=m;m.nW=n;if(T7(f)<0.25){n=JK(m.ii,0);n.bE=n.bE|2;}k[h+g|0]=m;g=g+1|0;}n=new Eh;Sc(n,b,c);n.eY=A6p;n.eY=j;b=new SJ;b.pE=n;b.pD=e;n.kG=b;n.gg=b;if((c+c|0)>d)IA(n);else Kj(n);return n;}
var Os=G(Kg);
function AUB(a){return Gq(1);}
function ABC(){var a=this;Ci.call(a);a.r$=null;a.me=null;a.e5=null;a.oc=null;a.md=0.0;a.gP=null;a.u2=null;a.sJ=null;a.wP=null;a.xx=null;a.rr=null;a.pG=null;a.AZ=null;a.vq=null;a.lb=null;}
var A6q=0;function A2L(a){var b=new ABC();ASL(b,a);return b;}
function ASL(a,b){var c,d,e;DK(a,b);a.r$=new BY;a.me=ACR(1.0,0.0,0.0,1.0);a.e5=RL();a.oc=new Bg;a.md=3.1415927410125732;c=AIJ();a.gP=c;a.u2=Hz(c,1.25);a.sJ=Hz(a.gP,1.3333333730697632);a.wP=Hz(a.gP,1.5);a.xx=Hz(a.gP,1.6666666269302368);a.rr=Hz(a.gP,2.0);a.pG=ACR(a.md/24.0,15.0,3.0,0.5);c=ACR(a.md/12.0,25.0,3.0,0.5);a.AZ=c;a.vq=DR([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lb=I(BY,[a.gP,a.u2,a.sJ,a.wP,a.xx,a.rr,a.pG,c]);c=b.p.bF;d=new Qj;d.Ec=a;Bc(c,d);Bc(b.p.bO,a);b=a.e5.W;FA();BO(b,A5C);G_(a.e5,0,0,600,60);e
=ML(0.5,0.375);Ja(0.375,e);Ja(0.375,Ja(3.0,ML(e,3.0)));Hz(AIJ(),3.0);}
function A01(a,b,c){var d,e,f;Cs(a.oc,b);d=a.e5;e=d.u;f=b.a;d=d.t;V(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Hz(b,c){var d;d=new BY;T9(b,c,d);return d;}
function AIJ(){var b;b=new BY;Lo(b);return b;}
function AWf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.B.O;Ex(b,a.r$);B7(b,1);c=a.e5;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lb.data;if(f>=g.length)break;h=a.vq.data[f];c=g[f];i=Wb(c);j=a.e5;k=j.u;l=k.a;m=k.b;LU(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.me);f=f+1|0;}if(A6q){c=A2C(1,2);n=0;while(n<1000){h=Gj(c,a.lb.data.length);l=Gj(c,a.oc.b-a.e5.t.b|0);j=a.lb.data[h];i=j.br;i=i-(i|0)>=0.25?0.0:0.5;k=a.e5;LU(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.me);n=n+1|0;}}B7(b,0);}
function AQ$(a,b){return A6q;}
function S4(){var a=this;Dt.call(a);a.mb=null;a.cR=null;}
function ABH(a,b,c){var d,e,f,g;d=Q(B1,1);e=d.data;f=new B1;g=new Q1;g.uK=a;g.uJ=b;C7(f,g,c);e[0]=f;return Du(d);}
function Hv(a,b){var c,d;c=a.B.bU;d=new UU;d.tM=a;d.tL=b;I1(c,d);}
function AZ5(a){var b,c,d;b=AUv(a.q);a.cR=b;AC4(b,a.mb);b=AA6(C(310),0);c=new ACi;c.yq=a;b.gg=c;c=AA6(C(311),0);d=new ACj;d.Az=a;c.gg=d;EL(a.cR.dj,b);EL(a.cR.di,c);MN(a.cR,WT());return a.cR;}
function Pc(){var a=this;Dt.call(a);a.t1=null;a.fy=null;}
function WT(){var b;b=I(LP,[M0(1,3,4,5,1),M0(5,6,10,2,2),M0(12,2,13,3,3),M0(15,3,17,2,4)]);return A3B(Q(Ge,0),Q(Ge,0),b);}
function AVC(a){var b,c,d,e;b=AUv(a.q);a.fy=b;AC4(b,a.t1);c=a.fy.dj;BD(c);d=new Z$;d.qv=c;b=W9(C(306),4,d);d=a.fy.di;BD(d);e=new Z_;e.sm=d;c=W9(C(306),4,e);EL(a.fy.dj,b);EL(a.fy.di,c);MN(a.fy,WT());return a.fy;}
function JZ(){var a=this;B.call(a);a.AC=null;a.d_=null;a.tt=null;a.B1=null;a.rY=null;a.ku=null;a.qO=null;a.u8=null;a.lg=null;a.lc=null;a.hf=null;}
function A6r(a,b,c,d,e,f,g,h,i,j,k){var l=new JZ();Mb(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mb(a,b,c,d,e,f,g,h,i,j,k,l){a.AC=b;a.d_=c;a.tt=d;a.B1=e;a.rY=f;a.ku=g;a.qO=h;a.u8=i;a.lg=j;a.lc=k;a.hf=l;}
function AEM(){B.call(this);this.DV=null;}
function AIu(a){var b=new AEM();ATv(b,a);return b;}
function ATv(a,b){a.DV=b;}
var ADO=G(0);
function AG4(){var a=this;B.call(a);a.oj=null;a.kC=null;a.ws=null;a.pL=null;}
function AI_(a,b,c,d){var e=new AG4();A0_(e,a,b,c,d);return e;}
function A0_(a,b,c,d,e){a.oj=b;a.kC=c;a.ws=d;a.pL=e;}
var AE$=G(0);
function E_(){var b,c,d;b=new IN;c=new IV;AXu();d=A6s;Od(c,d,A6t,A6u,A6v,A6w,d);LC(b,c,AGr(),AGA(S(C(312)),S(C(277)),S(C(278))),AGr(),AGX(1,0.125),A6x,A6y);return b;}
function AGr(){var b,c;b=new J$;c=S(C(313));AXu();KU(b,c,A6z,A6A);return b;}
function AF7(){var b,c;b=new J$;c=S(C(278));ATE();KU(b,c,A6B,A6C);return b;}
function AJQ(){var b,c;b=new J$;AF0();c=A6D;ATP();KU(b,c,A6E,A6F);return b;}
function AGL(){var a=this;B.call(a);a.x5=null;a.ve=null;a.tG=null;a.pX=null;}
function ADp(a,b,c,d){var e=new AGL();AT6(e,a,b,c,d);return e;}
function AT6(a,b,c,d,e){a.x5=b;a.ve=c;a.tG=d;a.pX=e;}
function ADf(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dZ.ve;break a;case 3:if(c!=3){b=b.dZ.pX;break a;}b=b.dZ.tG;break a;default:b=b.bt.d_;break a;}b=b.dZ.x5;}return b;}
function JP(a,b,c){return ADf(a,b,0,c);}
function Mg(){var a=this;B.call(a);a.ls=null;a.jW=null;}
function Vv(a,b){var c;c=a.jW;a.jW=b;return c;}
function Ks(){var a=this;Mg.call(a);a.bR=null;a.b3=null;a.gs=0;a.gC=0;}
function MI(a){var b;b=Lg(a);if(b==2){if(Lg(a.b3)<0)a.b3=ON(a.b3);return PM(a);}if(b!=(-2))return a;if(Lg(a.bR)>0)a.bR=PM(a.bR);return ON(a);}
function Lg(a){var b,c;b=a.b3;c=b===null?0:b.gs;b=a.bR;return c-(b===null?0:b.gs)|0;}
function ON(a){var b;b=a.bR;a.bR=b.b3;b.b3=a;ER(a);ER(b);return b;}
function PM(a){var b;b=a.b3;a.b3=b.bR;b.bR=a;ER(a);ER(b);return b;}
function ER(a){var b,c,d;b=a.b3;c=b===null?0:b.gs;b=a.bR;d=b===null?0:b.gs;a.gs=Be(c,d)+1|0;a.gC=1;b=a.bR;if(b!==null)a.gC=1+b.gC|0;b=a.b3;if(b!==null)a.gC=a.gC+b.gC|0;}
var AJT=G();
function ALq(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Xu;c=c.buffer;d.f5=c;d.py=new $rt_globals.Int8Array(c);d.l6=new $rt_globals.Uint16Array(c);d.yT=new $rt_globals.Int32Array(c);d.rz=new $rt_globals.Float32Array(c);d.rL=new $rt_globals.Float64Array(c);e=d.f5.byteLength;c=new K;M(c);U(H(c,C(314)),e);CQ(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(315)),e);CQ(L(c));f=b.callToCpp2();c=new K;M(c);E5(H(c,C(316)),f);CQ(L(c));c=OC(d,b.getC8String());g=new K;M(g);H(H(g,C(317)),c);CQ(L(g));c
=VQ(d,b.getC16String());g=new K;M(g);H(H(g,C(318)),c);CQ(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f5,h,8));c=AFu(i);g=new K;M(g);H(H(g,C(319)),c);CQ(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f5,h,8));c=ARf(j);g=new K;M(g);H(H(g,C(320)),c);CQ(L(g));k=AH5(d,b.getCDoubleArray8(),8);l=AS4(k);c=new K;M(c);H(H(c,C(321)),l);CQ(D8(c));l=AS0(b.getC8String(),C(322),d);c=LQ();H(H(c,C(323)),l);CQ(D8(c));l=APa(b.getC16String(),C(324),
d);c=LQ();H(H(c,C(325)),l);CQ(D8(c));c=AYr(i,d,b.getCIntArray8(),DR([11,22,33,44,55,66,77,88]));g=LQ();H(H(g,C(326)),c);CQ(D8(g));c=ARq(j,d,b.getCFloatArray8(),100,DR([111,222,333,444,555,666,777,888]));g=LQ();H(H(g,C(327)),c);CQ(D8(g));b=AZJ(k,d,b.getCDoubleArray8(),1000,DR([1111,2222,3333,4444,5555,6666,7777,8888]));c=LQ();H(H(c,C(328)),b);CQ(D8(c));}
function ARq(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(329);h=0;i=e;a:{while(h<g){if(CV(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.rz[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(330);}return C(331);}
function AZJ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(329);h=0;i=e;a:{while(h<g){if(Gt(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rL[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(330);}return C(331);}
function AYr(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(329);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.yT[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(330);}return C(331);}
function AS0(b,c,d){var e,f,g,h;e=OC(d,b);if(!Bj(c,e))return C(332);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.py[h])return C(333);f=f+1|0;}return C(330);}
function APa(b,c,d){var e,f,g,h;e=VQ(d,b);if(!Bj(c,e))return C(332);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.l6[h>>>1|0]&65535))return C(333);f=f+1|0;}return C(330);}
function CQ(b){Xs(C(2),b);}
function AOl(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function XM(){B.call(this);this.q5=null;}
function AUm(a,b){return AH7(a.q5,b);}
function XK(){B.call(this);this.z9=null;}
function AVQ(a,b){Jf(a.z9,b);}
function XL(){B.call(this);this.wD=null;}
function ARH(a,b){b=b;return ADL(a.wD,b);}
function AGH(){J9.call(this);this.dr=null;}
function KB(){var a=new AGH();A0N(a);return a;}
function H4(a,b,c,d){var e=new AGH();AWI(e,a,b,c,d);return e;}
function A0N(a){AA8(a);a.dr=new BY;}
function AWI(a,b,c,d,e){AA8(a);a.dr=new BY;G_(a,b,c,d,e);}
function FP(a){var b,c;b=a.t;c=a.dr;V(b,c.be-c.bm|0,c.bB-c.br|0);}
function FG(a,b){Iq(a,0,0,Cd(b),Dj(b));}
function Iq(a,b,c,d,e){Cv(a.dr,b,c,d,e);}
function Ew(a,b,c,d,e){var f;f=a.u;D1(b,f.a+d|0,f.b+e|0,a.t,a.dr,c,a.W,a.bk,0);}
function R8(a,b,c,d){var e;e=a.u;D1(b,e.a,e.b,a.t,a.dr,c,a.W,a.bk,d);}
function Ip(a,b,c,d,e,f,g){D1(b,c,d,a.t,a.dr,e,!f?a.W:a.bk,!f?a.bk:a.W,g);}
function Ht(a,b){BO(a.W,b);}
function Fb(a,b){BO(a.bk,b);}
function S5(){B.call(this);this.fh=null;}
function AUz(a,b){var c,d,e,f,g,h;c=b.g;d=c.a;e=a.fh.g9;f=e.t;d=d-f.a|0;g=c.b-f.b|0;V(e.u,d,g);c=a.fh;e=c.B.bU;b=b.g;d=0;a:{while(true){h=c.iD.data;if(d>=h.length)break;if(E7(h[d],b)){b=c.pJ.data[d];break a;}d=d+1|0;}b=null;}YX(e,b);return 1;}
function AKu(a,b,c,d){if(!c&&d==2){b=a.fh;RM(b,b.ec);}return 1;}
function AUs(a,b,c){var d,e;d=Bx();e=new K;M(e);U(H(e,C(334)),c);Bm(d,L(e));if(c)return null;d=b.g;e=!E7(a.fh.ec,d)?null:d;To(a.fh.i$,d.a,d.b);b=a.fh;XS(b.i$,MA(b.B.bU));if(e===null)b=A5L;else{b=new ABk;b.rU=a;b.rV=e;}return b;}
function ATY(a,b,c){var d;b=Bx();d=new K;M(d);U(H(d,C(335)),c);Bm(b,L(d));return 1;}
function Ya(){B.call(this);this.AM=null;}
function AZ4(a,b){return V$(a.AM,b);}
function X_(){B.call(this);this.rx=null;}
function AYu(a,b){return V$(a.rx,b);}
function X$(){B.call(this);this.Cf=null;}
function AWT(a,b,c){var d,e;Bm(Bx(),C(336));d=!c?C(337):C(54);e=new K;M(e);H(H(H(e,C(338)),d),C(339));ABV(b,L(e));return 1;}
function X9(){B.call(this);this.C6=null;}
function ATw(a){Bm(Bx(),C(340));}
function X8(){B.call(this);this.Dz=null;}
function AP6(a,b){Bm(Bx(),C(341));return 1;}
function X7(){B.call(this);this.zw=null;}
function A0a(a,b,c,d){var e,f,g;b=a.zw;e=( -d|0)/10|0;b=b.ec;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function He(){var a=this;BY.call(a);a.g3=0;a.g6=0;a.g4=0;a.g5=0;}
function CA(a){var b=new He();ASQ(b,a);return b;}
function Ds(a,b,c){var d=new He();AVh(d,a,b,c);return d;}
function S(a){var b=new He();AZx(b,a);return b;}
function EP(a,b,c,d){var e=new He();QT(e,a,b,c,d);return e;}
function BW(a){var b=new He();KJ(b,a);return b;}
function ASQ(a,b){QT(a,b,b,b,255);}
function AVh(a,b,c,d){QT(a,b,c,d,255);}
function AZx(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.g3=Kb(P(b,1))*17|0;a.g6=Kb(P(b,2))*17|0;a.g4=Kb(P(b,3))*17|0;a.g5=255;}else{a.g3=LA(P(b,1),P(b,2));a.g6=LA(P(b,3),P(b,4));a.g4=LA(P(b,5),P(b,6));a.g5=J(b)!=9?255:LA(P(b,7),P(b,8));}Iv(a.g3,a.g6,a.g4,a.g5,a);return;}}
function QT(a,b,c,d,e){a.g3=b;a.g6=c;a.g4=d;a.g5=e;Iv(b,c,d,e,a);}
function KJ(a,b){a.g3=b.g3;a.g6=b.g6;a.g4=b.g4;a.g5=b.g5;BO(a,b);}
function Kb(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LA(b,c){return (16*Kb(b)|0)+Kb(c)|0;}
var AFI=G(0);
function Gq(b){return !b?I(BL,[C(155),C(171),C(342)]):I(BL,[C(155),C(171),C(342),C(34)]);}
function VI(){B.call(this);this.lG=null;}
function AML(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.lG.de;e=DJ();f=e-0.5+(DJ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DJ()*0.3;h=0.5+DJ()*0.5;In(e,g,h,1.0,b.W);In(f,g,h,1.0,b.bk);b=a.lG;BO(b.dR.W,b.de.W);b=a.lG;BO(b.dR.bk,b.de.bk);}return 1;}
function VF(){var a=this;B.call(a);a.nb=null;a.nE=null;}
function AE_(){var a=this;B.call(a);a.fQ=null;a.cm=null;a.gA=null;a.hw=null;a.ni=null;a.cB=null;a.hm=null;a.cZ=0;a.fT=0;a.nA=0;a.jS=0;a.j_=0;a.hr=0;a.ko=null;a.on=null;a.vm=null;a.m_=null;}
function AIz(){var a=new AE_();ARv(a);return a;}
function ARv(a){a.cm=RL();a.gA=new Bg;a.hw=new Bg;a.cB=A6G;a.jS=(-1);a.j_=1;}
function M1(a,b){NO(a);a.cB=b;}
function Ju(a,b,c){a.fQ=b;ABP(a,c);NO(a);}
function Jw(a,b){var c;a.ni=b.k7;c=b.oq.o7;BO(a.cm.W,c);c=b.kF.oO;BO(a.cm.bk,c);a.m_=b.oq;}
function Mz(a){a.hm=Cy(a.hm,null);V(a.gA,0,0);a.cB=A6G;a.jS=(-1);Z9(a.cm);}
function ABP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=J7(b);d=b.cb;BD(a.fQ);Cl(c,a.fQ);e=MT(a.fQ,1.25);f=0;a.cZ=Ce(2.0,d);a.fT=Ce(3.0,d);a.nA=Ce(12.0,d);g=0;h=a.cB.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=K1(c,l.mY);n=a.nA;n=(n+m|0)+n|0;f=Be(f,n);b=l.e9;b.a=g;b.b=0;b=l.em;b.a=n;b.b=e;Cv(l.jP,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gA;b.a=g;b.b=e;b=a.cm.t;n=a.hr;if(!n){m=a.cZ;m=(g+m|0)+Bb(m,a.cB.data.length)|0;}else m=(f+(a.cZ*2|0)|0)+(a.fT*2|0)|0;b.a=m;if(!n)e=e+(a.cZ*2|0)|0;else{n=a.cZ;e=(Bb(e+n|0,a.cB.data.length)+n
|0)+(a.fT*2|0)|0;}b.b=e;}
function MV(a,b,c){var d,e,f,g,h,i,j;V(a.cm.u,b,c);d=a.cZ+a.fT|0;e=a.cB.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.e9;j.a=b+d|0;j.b=c+h|0;if(!a.hr){if(!i.em.a)ADz();d=d+(i.em.a+a.cZ|0)|0;}else{if(!i.em.b)ADz();h=h+(i.em.b+a.cZ|0)|0;}g=g+1|0;}}
function ADz(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Es(a){var b,c;b=a.gA;if(b.a&&b.b)return a.cm.t;c=new Bt;Bl(c,C(343));N(c);}
function NO(a){a.j_=1;}
function LW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bV;if(!a.cB.data.length)return;if(a.hm===null)a.hm=CT(c);a:{if(!a.j_){d=a.gA;if(Bb(d.a,d.b))break a;}d=a.gA;if(!Bb(d.a,d.b))ABP(a,b);d=a.gA;e=d.a;f=d.b;if(!Bb(e,f))return;d=DZ(c,e,f,b.cw);Cl(d,a.fQ);g=MT(a.fQ,0.125);h=a.fQ;i=h.dq;g=g+i-(i+h.ev)/16.0;j=a.cB.data;e=j.length;f=0;while(f<e){h=j[f];BQ(d,h.mY,h.jP.bm+a.nA,g);f=f+1|0;}CK(a.hm,d);a.j_=0;Er(d);}if(!KZ(a.cm)){d=a.cm;AHQ(c,d.t,d.u,d.bk,a.cZ,a.hw);d=a.cm;h=d.t;k=d.u;d=d.W;e=a.cZ;l=a.hw;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hr){d=a.cm;AI2(c,d.t,d.u,0,0,Xw(a.ni,b.cb),a.ni.nm,a.hw);}}j=a.cB.data;m=j.length;n=0;while(n<m){d=j[n];h=d.e9;e=h.a;f=h.b;h=d.em;k=d.jP;l=a.hm;o=a.m_;D1(c,e,f,h,k,l,o.q8,Ur(o,d.kE),b.cw);n=n+1|0;}b:{if(a.hr){j=a.cB.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hw;e=(a.cm.t.a-(a.cZ*2|0)|0)-(a.fT*2|0)|0;h=d.em;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.e9;Bs(c,k.a+h.a|0,k.b,b,Ur(a.m_,d.kE));}p=p+1|0;}}}}
function Nv(a,b,c){var d,e,f,g,h,i;d=E7(a.cm,b);e=!d?(-1):O2(a,b);f=a.jS;if(f!=e){if(f>=0){g=a.cB.data[f];g.kE=0;if(a.vm!==null){h=Bx();g=Cu(g);i=new K;M(i);H(H(U(H(i,C(344)),f),C(345)),g);Bm(h,L(i));}}if(e>=0){h=a.cB.data[e];g=a.on;if(g!==null)g.vt(b,e,h);h.kE=1;}a.jS=e;}return d&&Gv(c)?1:0;}
function NR(a,b,c,d){var e,f;e=O2(a,b);if(e>=0){f=a.cB.data[e];if(!AA_(f))f.mm.h();}return 1;}
function O2(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cB.data;if(c>=d.length)return (-1);e=d[c];if(Hr(b,e.e9,e.em))return c;if(a.hr){f=e.e9;g=f.a;e=e.em;h=e.a;g=g+h|0;i=f.b;f=a.hw;f.a=(a.cm.t.a-(a.cZ*2|0)|0)-h|0;f.b=e.b;if(ADU(b,g,i,f))break;}c=c+1|0;}return c;}
function ADc(a){a.hr=1;}
function AHR(){var a=this;B.call(a);a.jx=null;a.hV=0.0;a.lR=0;a.jR=0;}
function E6(a,b){var c=new AHR();AQj(c,a,b);return c;}
function A3Z(a,b,c){var d=new AHR();AGw(d,a,b,c);return d;}
function AQj(a,b,c){AGw(a,b,c,0);}
function AGw(a,b,c,d){var e;e=!d?400:300;d=!d?700:600;a.jx=b;a.hV=c;a.lR=e;a.jR=d;}
function AZr(a,b){if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){b=b;return a.hV===b.hV&&a.lR==b.lR&&a.jR==b.jR&&BT(a.jx,b.jx)?1:0;}return 0;}
function AAD(){B.call(this);this.tq=null;}
function API(a,b){var c;c=a.tq;if(b.bl==32)Mz(c.dz);return 0;}
function AAz(){B.call(this);this.ul=null;}
function ARr(a,b){var c,d,e,f;b=b;c=a.ul;d=M4(c.q);F8(d,E_(),c.nV);b=b.g;e=Q5(4);f=new TX;f.Cg=c;Jd(d,b,e,f);Fk(c.bd,d);return 1;}
var AAA=G();
function A1r(a){Bm(Bx(),C(346));}
var AAB=G();
function AK$(a){Bm(Bx(),C(347));}
function B1(){var a=this;B.call(a);a.mm=null;a.jP=null;a.e9=null;a.em=null;a.j0=null;a.m5=null;a.kE=0;a.mY=null;}
function Wk(a,b){var c=new B1();C7(c,a,b);return c;}
function A3l(a,b,c,d){var e=new B1();AIf(e,a,b,c,d);return e;}
function C7(a,b,c){AIf(a,b,c,null,null);}
function AIf(a,b,c,d,e){a.jP=new BY;a.e9=new Bg;a.em=new Bg;a.mY=c;a.m5=e;a.mm=b;a.j0=d;}
function AA_(a){return a.j0===null?0:1;}
function TF(){B.call(this);this.Bg=null;}
function AWM(a,b){return b.jn&&b.bl==32?1:0;}
function TG(){B.call(this);this.zR=null;}
function AKR(a,b){var c,d,e,f,g,h;b=b;c=a.zR;d=M4(c.q);F8(d,E_(),E6(C(155),25.0));b=b.g;e=Q(B1,1);f=e.data;g=new B1;h=new AC6;h.z8=c;C7(g,h,C(348));f[0]=g;Jd(d,b,Du(e),A6H);Fk(c.bd,d);return 1;}
function AGo(){var a=this;B.call(a);a.pg=0;a.pi=0;}
function AGa(){var a=new AGo();ASd(a);return a;}
function A2C(a,b){var c=new AGo();AJZ(c,a,b);return c;}
function ASd(a){AJZ(a,AJH(GF((AFF()))),GF((AFF()))^(-559038737));}
function AJZ(a,b,c){var d;a.pg=b;a.pi=c;d=0;while(d<19){Nd(a);d=d+1|0;}}
function Nd(a){var b,c;b=a.pg;c=a.pi;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pg=c;a.pi=b;return b;}
function AJH(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AJi(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Gj(a,b){return T7(a)*b|0;}
function T7(a){return 5.960464477539063E-8*(Nd(a)&16777215);}
function Qm(a,b){var c,d,e;c=AJi(Nd(a));d=ARk( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function OG(){B.call(this);this.wI=null;}
function APP(a,b,c){var d;d=a.wI;if(b===0.0)LK(d,100);}
function OF(){B.call(this);this.uw=null;}
function AX8(a,b){var c,d,e;c=a.uw;d=b.bl;if(d==32){c.le=c.le?0:1;e=1;}else if(d==13){LK(c,1);e=1;}else if(d!=8)e=0;else{Pb(c,1);e=1;}return e;}
var YS=G(0);
function AG5(b,c){var d;d=new T1;d.ww=b;d.wv=c;return d;}
function AG_(){var a=this;B.call(a);a.hd=null;a.hM=0;a.ll=0;a.gX=0;}
function AHj(a){var b=new AG_();AMV(b,a);return b;}
function AMV(a,b){a.hd=BH();a.gX=0;a.ll=2048;a.hM=b;}
function Kf(a,b,c){var d,e,f,g,h,i;d=c.x3(b);e=a.ll;if(d>e){c=new Bt;f=new K;M(f);BM(U(H(U(H(f,C(349)),d),C(350)),e),41);Bl(c,L(f));N(c);}if(!a.hM){b=new BS;Bl(b,C(351));N(b);}a:{b=new BY;if(d){b:{c=a.hd;if(c.m>0){c=B4(c);g=d;while(true){if(!B8(c))break b;f=B9(c);if(f.be>=g)break;}Cv(b,f.bm,f.br,g,a.hM);f.bm=f.bm+g;h=f.be-g;f.be=h;if(h===0.0)TW(a.hd,f);break a;}}g=a.gX;i=d;Cv(b,0.0,g,i,a.hM);BC(a.hd,ACR(i,a.gX,a.ll-d|0,a.hM));a.gX=a.gX+a.hM|0;}}return b;}
function IO(a,b){var c,d,e,f,g,h,i;a:{c=AJX(b);b=a.hd;if(b.m>0){d=B4(b);while(true){if(!B8(d))break a;e=B9(d);if(e.br===c.br){f=e.bm;g=e.be;h=f+g;i=c.bm;if(h===i){c.bm=f;c.be=c.be+g;YD(d);}else{h=c.be;if(i+h===f){c.be=h+g;YD(d);}}}}}}BC(a.hd,c);}
function Mr(a){return BJ(a.ll,a.gX);}
function VS(){var a=this;B.call(a);a.q7=null;a.lh=null;}
function ATI(a,b,c){if(c)return A5L;return FU(a.lh.iE,b.g,a.q7,1);}
function AKM(a,b,c){return 1;}
function AVw(a,b){var c;c=a.lh;return F0(c.iE,b.g,c.wr);}
function Y_(){B.call(this);this.zb=null;}
function APN(a,b,c,d){var e,f;b=a.zb;e=(Vz(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eV=Bd(Be(0,b.eV+Bb(e,f)|0),TY(b));return 1;}
function Qc(){B.call(this);this.r6=null;}
function APC(a,b){var c,d,e;c=a.r6;if(b.cJ&&b.bl==79){if(!b.bJ){b=c.B.bU;d=new Wg;d.tN=c;NT(b,d);}else{b=c.B.bU;d=new Wf;d.v7=c;I1(b,d);}e=1;}else e=0;return e;}
function QV(){B.call(this);this.wM=null;}
function ASY(a,b){var c,d,e,f,g,h,i;b=b;c=a.wM;d=M4(c.q);F8(d,E_(),E6(C(155),25.0));b=b.g;e=Q(B1,5);f=e.data;g=new B1;h=new Te;h.qT=c;C7(g,h,C(352));f[0]=g;g=new B1;h=new Tf;h.rq=c;C7(g,h,C(353));f[1]=g;g=new B1;h=new Tg;h.sC=c;C7(g,h,C(354));f[2]=g;h=new B1;i=new Th;i.wh=c;C7(h,i,C(355));f[3]=h;h=new B1;i=new Ti;i.wK=c;C7(h,i,C(356));f[4]=h;Jd(d,b,Du(e),A6H);Fk(c.bd,d);return 1;}
function QU(){B.call(this);this.yH=null;}
function AY7(a,b){var c,d,e,f;c=a.yH;d=c.B.bU;e=new WR;e.vC=c;f=Q(B,1);f.data[0]=b;CR(d,e,C(357),f);}
function AAN(){B.call(this);this.mv=null;}
function AYk(a,b){var c,d,e,f,g,h;c=a.mv;d=c.pB;if(d!==null){e=c.eT.u;f=e.a;g=b.g;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.pB=g;}b=b.g;f=b.a;c=c.gl;d=c.t;f=f-d.a|0;h=b.b-d.b|0;V(c.u,f,h);return 1;}
function ASO(a,b,c){var d;if(!c){d=b.g;b=a.mv;if(!E7(b.eT,d))d=null;b.pB=d;}return A5L;}
var AFe=G();
function AJ5(b){var c,d;c=HB(b,250,64);Ho(c,C(280),25.0);JU(c,187,187,187);BQ(c,C(358),0.0,24.0);BQ(c,C(358),0.25,56.0);d=CT(b);CK(d,c);Er(c);return d;}
var Dd=G(0);
var A5W=null;var A5E=null;var A5X=null;var A5C=null;var A5Z=null;var A5Y=null;var A51=null;var A50=null;var A53=null;var A52=null;var A54=null;function FA(){FA=Bn(Dd);AS1();}
function AS1(){A5W=CA(187);A5E=S(C(359));A5X=CA(55);A5C=CA(43);A5Z=Ds(33,66,131);A5Y=Ds(60,63,65);A51=S(C(360));A50=S(C(361));A53=EP(85,85,85,128);A52=EP(43,43,43,0);A54=S(C(266));}
function XN(){var a=this;B.call(a);a.p3=null;a.lr=null;}
function ANZ(a,b,c){var d;if(!c){d=FU(a.lr.ij,b.g,a.p3,1);if(d!==null)return d;}return A5L;}
function ATU(a,b,c){return 1;}
function AMQ(a,b){var c;c=a.lr;return F0(c.ij,b.g,QM(c.B.bU));}
function Vc(){B.call(this);this.qR=null;}
function AZ9(a,b,c,d){var e,f;b=a.qR;e=(Vz(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fq=Bd(Be(0,b.fq+Bb(e,f)|0),Za(b));return 1;}
function ACn(){B.call(this);this.vl=null;}
function AL7(a,b){var c,d;a:{c=a.vl;switch(b.bl){case 67:P3(c);d=1;break a;case 86:YU(c);d=1;break a;default:}d=0;}return d;}
var ACm=G();
function AWZ(a,b,c){return 0;}
function ACl(){B.call(this);this.rF=null;}
function AMb(a,b,c){var d,e;d=a.rF;c=d.d7+1|0;d.d7=c;d=JG(F(Ka));e=new K;M(e);H(H(U(e,c),C(362)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ABV(b,e);return 1;}
var ACk=G();
function AO7(a){return null;}
function ACo(){B.call(this);this.yp=null;}
function AZF(a){var b,c;b=a.yp;c=new UQ;c.pZ=b;return c;}
function Rz(){B.call(this);this.CB=null;}
function ASs(a,b){return 0;}
function Yz(){B.call(this);this.Cj=null;}
function AR8(a,b){return b.jn&&b.bl==32?1:0;}
function Yy(){B.call(this);this.vX=null;}
function AOL(a,b){var c,d,e,f,g,h;b=b;c=a.vX;d=M4(c.q);F8(d,E_(),E6(C(155),25.0));b=b.g;e=Q(B1,1);f=e.data;g=new B1;h=new ACZ;h.AP=c;C7(g,h,C(348));f[0]=g;Jd(d,b,Du(e),A6H);Fk(c.bd,d);return 1;}
function O4(){B.call(this);this.z2=null;}
function AYi(a,b){var c;c=a.z2.ex;if(c!==null)Jf(c,b);}
function O5(){B.call(this);this.xX=null;}
function AZY(a,b){var c,d,e;b=b;c=a.xX;if(DG(c.q,c.ex)){d=c.lE;b=b.g;e=c.ex;GD(d,b,e,c,e,c,new WO);}return 1;}
function WG(){B.call(this);this.wR=null;}
function AMt(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.wR;d=c.c6;if(d===null)e=1;else{if(!B0(d.fI,b.g)){d=c.c6.f$;f=b.g;g=Q(B1,1);h=g.data;b=new B1;i=new Ua;i.uf=c;C7(b,i,C(363));h[0]=b;K4(d,f,Du(g));}else{c=c.c6;b=b.g;if(B0(c.fI,b)){d=c.f$;f=c.fI;i=c.y4;j=d.b7;BD(j);k=new Qp;k.pU=j;j=new Qo;j.AA=c;GD(d,b,f,i,f,k,j);}}e=1;}return e;}
var AGc=G(0);
function AJo(b){HT(b,A2V(C(364),C(182),AA5(C(365))));}
function Qj(){B.call(this);this.Ec=null;}
function AOr(a,b){return 0;}
function Z1(){B.call(this);this.qb=null;}
function AQC(a,b){var c,d,e,f,g,h,i,j;b=b;c=a.qb;if(c.cR===null)d=1;else{b=b.g;e=c.bd;f=c.mb;g=Yl(e,f.dD,f.kr);if(B0(c.cR.dj,b))e=ABH(c,c.cR.dj,C(310));else if(B0(c.cR.di,b))e=ABH(c,c.cR.di,C(311));else{h=Q(B1,2);i=h.data;e=new B1;j=new O_;j.vu=c;C7(e,j,C(310));i[0]=e;j=new B1;f=new Pa;f.AG=c;C7(j,f,C(311));i[1]=j;e=Du(h);}Lc(g,b,e);Fk(c.bd,g);d=1;}return d;}
function TJ(){B.call(this);this.Bd=null;}
function AQD(a,b){return 1;}
function TI(){B.call(this);this.sQ=null;}
function AP5(a,b){var c,d;c=a.sQ;if(b.bl!=32)d=0;else{MN(c.fy,WT());d=1;}return d;}
var Dl=G(0);
var A56=null;var A6I=null;var A58=null;var A57=null;var A5$=null;var A59=null;var A6a=null;var A5_=null;var A6c=null;var A6b=null;var A6d=null;function AMY(){AMY=Bn(Dl);ARG();}
function ARG(){A56=CA(206);A6I=S(C(366));A58=S(C(367));A57=S(C(273));A5$=S(C(368));A59=S(C(262));A6a=S(C(369));A5_=S(C(370));A6c=EP(107,106,107,128);A6b=EP(30,31,34,0);A6d=S(C(275));}
function Cm(){CG.call(this);this.kH=null;}
var A6J=null;var A6K=null;var A6L=null;var A6M=null;var A6N=null;var A5N=null;var A6O=null;var A6P=null;var A6Q=null;var A6R=null;var A6S=null;var A6T=null;var A6U=null;var A6V=null;var A6W=null;var A6e=null;function Td(){Td=Bn(Cm);AW7();}
function DO(a,b,c){var d=new Cm();Y6(d,a,b,c);return d;}
function A3b(a,b,c,d){var e=new Cm();ACx(e,a,b,c,d);return e;}
function Y6(a,b,c,d){Td();DD(a,b,c);a.kH=Jz(d,null);}
function ACx(a,b,c,d,e){Td();DD(a,b,c);a.kH=Jz(d,e);}
function AW7(){var b,c;b=new Cm;AMY();Y6(b,C(371),0,A6I);A6J=b;A6K=DO(C(372),1,S(C(373)));A6L=DO(C(374),2,S(C(375)));A6M=DO(C(376),3,S(C(377)));A6N=DO(C(378),4,A6I);A5N=DO(C(379),5,S(C(380)));A6O=DO(C(381),6,S(C(382)));A6P=DO(C(383),7,S(C(384)));A6Q=DO(C(385),8,S(C(386)));c=new Cm;FA();ACx(c,C(387),9,A5E,S(C(369)));A6R=c;A6S=A3b(C(388),10,A5E,S(C(276)));A6T=DO(C(389),11,S(C(390)));A6U=DO(C(391),12,S(C(392)));A6V=DO(C(393),13,A6I);b=DO(C(394),14,S(C(395)));A6W=b;A6e=I(Cm,[A6J,A6K,A6L,A6M,A6N,A5N,A6O,A6P,A6Q,
A6R,A6S,A6T,A6U,A6V,b]);}
function Kc(){var a=this;B.call(a);a.h3=null;a.mf=null;}
function Jz(a,b){var c=new Kc();AXy(c,a,b);return c;}
function AXy(a,b,c){a.h3=b;a.mf=c;}
function IN(){var a=this;B.call(a);a.k7=null;a.si=null;a.C8=3;a.kF=null;a.Al=null;a.Ef=null;a.oq=null;a.mr=null;a.n_=null;}
function A6X(a,b,c,d,e,f,g){var h=new IN();LC(h,a,b,c,d,e,f,g);return h;}
function LC(a,b,c,d,e,f,g,h){a.si=E6(C(171),16.0);a.C8=3;a.Al=b;a.Ef=c;a.kF=d;a.oq=e;a.k7=f;a.mr=g;a.n_=h;}
function AII(){var a=this;B.call(a);a.nm=null;a.sb=0;}
function AGX(a,b){var c=new AII();AZw(c,a,b);return c;}
function AZw(a,b,c){var d;d=new BY;a.nm=d;a.sb=b;d.bB=c;}
function Xw(a,b){return Ce(a.sb,b);}
var DI=G(0);
var A6i=null;var A6j=null;var A6f=null;var A6g=null;var A6h=null;var A6B=null;var A6C=null;var A6k=null;var A6l=null;function ATE(){ATE=Bn(DI);AYm();}
function AYm(){A6i=S(C(262));A6j=S(C(396));A6f=S(C(278));A6g=S(C(382));A6h=S(C(366));A6B=S(C(262));A6C=S(C(397));A6k=S(C(398));A6l=Ds(43,45,48);}
var Xf=G(0);
var Xt=G();
function AVU(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(399)),d),C(400)),e);CQ(L(b));return d+e|0;}
var Xg=G(0);
var Xr=G();
function AWx(a,b,c){var d,e;d=b;e=c;b=new K;M(b);E5(H(E5(H(b,C(401)),d),C(400)),e);CQ(L(b));return d+e;}
var AD9=G();
var AG9=G(0);
function Uk(){B.call(this);this.nI=null;}
var A6G=null;function Ln(){var a=new Uk();AHA(a);return a;}
function AHA(a){a.nI=BH();}
function DW(a,b,c){Xc(a,C3(b,c));}
function C3(b,c){return Wk(c,b);}
function Fx(a,b,c){IS(a,b,c,null);}
function IS(a,b,c,d){Xc(a,A3l(null,b,c,d));}
function Xc(a,b){BC(a.nI,b);}
function GP(a){return Du(Gb(a.nI,A6G));}
function AHb(){A6G=Q(B1,0);}
var DM=G(0);
var A6v=null;var A6w=null;var A6s=null;var A6t=null;var A6u=null;var A6z=null;var A6A=null;var A6x=null;var A6y=null;function AXu(){AXu=Bn(DM);AX9();}
function AX9(){A6v=S(C(271));A6w=S(C(402));A6s=S(C(313));A6t=S(C(403));A6u=S(C(359));A6z=S(C(271));A6A=S(C(402));A6x=EP(118,121,122,128);A6y=Ds(63,66,68);}
var HS=G(0);
var PE=G();
function AYW(a,b,c,d){var e;b=Bx();d=Cu(d);e=new K;M(e);H(H(U(H(e,C(404)),c),C(345)),d);Bm(b,L(e));}
var PF=G();
function S7(){B.call(this);this.yD=null;}
function AX0(a,b){var c;c=a.yD.lh;c.eV=FM(b,TY(c));}
function Pl(){B.call(this);this.Ci=null;}
function AMF(a,b){var c,d,e,f;c=b.data;b=Bx();d=Cu(c[0]);e=new K;M(e);H(H(e,C(298)),d);Bm(b,L(e));b=Bx();f=c[1];d=new K;M(d);H(H(d,C(405)),f);Bm(b,L(d));}
function Pk(){B.call(this);this.Dv=null;}
function ALk(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bx();e=Cu(c[0]);f=new K;M(f);H(H(f,C(298)),e);Bm(d,L(f));g=EH(KR(b,1));b=Bx();d=Cu(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BV(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BV(c,C(37));BM(c,i[h]);h=h+1|0;}BV(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(406)),d),C(407)),c);Bm(b,L(e));}
function Pi(){B.call(this);this.AS=null;}
function AKB(a,b){ACy(a.AS,b);}
function Pg(){B.call(this);this.DE=null;}
function A07(a,b){var c,d,e,f,g;c=b.data;d=Bx();e=Cu(c[0]);f=new K;M(f);H(H(f,C(298)),e);Bm(d,L(f));g=CN(KR(b,1));b=Bx();d=Cu(c[1]);c=AFu(g);e=new K;M(e);H(H(H(H(e,C(408)),d),C(409)),c);Bm(b,L(e));}
var AGP=G();
function T2(){B.call(this);this.st=null;}
function AWz(a,b){var c;c=a.st.lr;c.fq=FM(b,Za(c));}
function ABd(){B.call(this);this.Ck=null;}
function ANF(a,b){return 0;}
function AJt(){var a=this;B.call(a);a.jX=null;a.oi=null;a.gx=null;a.D4=null;}
function AA5(a){var b=new AJt();AZn(b,a);return b;}
function AZn(a,b){var c,d,e;c=null;d=null;e=null;a.jX=c;a.oi=d;a.gx=b;a.D4=e;}
function ABo(a){var b,c;b=a.gx;if(b===null)return C(21);c=AEH(b,C(410));return c==(-1)?a.gx:Dq(a.gx,c+1|0);}
function AUZ(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BT(a.jX,c.jX)&&BT(a.oi,c.oi)&&BT(a.gx,c.gx)?1:0;}return 0;}
function IV(){var a=this;B.call(a);a.s5=null;a.ql=null;a.q0=null;a.y8=null;a.rS=null;a.kO=null;}
function A6Y(a,b,c,d,e,f){var g=new IV();Od(g,a,b,c,d,e,f);return g;}
function Od(a,b,c,d,e,f,g){a.s5=b;a.ql=c;a.q0=d;a.y8=e;a.rS=f;a.kO=g;}
function J$(){var a=this;B.call(a);a.q8=null;a.o7=null;a.tA=null;}
function A6Z(a,b,c){var d=new J$();KU(d,a,b,c);return d;}
function KU(a,b,c,d){a.q8=b;a.o7=c;a.tA=d;}
function Ur(a,b){return !b?a.o7:a.tA;}
function AHu(){var a=this;B.call(a);a.oO=null;a.yr=null;a.un=null;}
function AGA(a,b,c){var d=new AHu();A0n(d,a,b,c);return d;}
function A0n(a,b,c,d){a.oO=b;a.yr=c;a.un=d;}
function Cq(){CG.call(this);this.nk=null;}
var A60=null;var A61=null;var A62=null;var A63=null;var A64=null;var A65=null;var A66=null;var A67=null;var A68=null;var A69=null;var A6$=null;var A6_=null;var A7a=null;var A7b=null;var A7c=null;var A55=null;function AEj(){AEj=Bn(Cq);AWE();}
function D5(a,b,c){var d=new Cq();AAh(d,a,b,c);return d;}
function AZy(a,b,c,d){var e=new Cq();AGd(e,a,b,c,d);return e;}
function AAh(a,b,c,d){AEj();DD(a,b,c);a.nk=Jz(d,null);}
function AGd(a,b,c,d,e){AEj();DD(a,b,c);a.nk=Jz(d,e);}
function AWE(){var b;b=new Cq;FA();AAh(b,C(371),0,A5E);A60=b;A61=D5(C(372),1,S(C(411)));A62=D5(C(374),2,S(C(412)));A63=D5(C(376),3,S(C(413)));A64=D5(C(378),4,S(C(411)));A65=D5(C(379),5,Ds(188,63,60));A66=D5(C(381),6,S(C(414)));A67=D5(C(383),7,S(C(415)));A68=D5(C(385),8,S(C(416)));A69=AZy(C(387),9,A5E,Ds(52,65,52));A6$=AZy(C(388),10,S(C(417)),S(C(418)));A6_=D5(C(389),11,S(C(419)));A7a=D5(C(391),12,S(C(420)));A7b=D5(C(393),13,A5E);b=D5(C(394),14,S(C(395)));A7c=b;A55=I(Cq,[A60,A61,A62,A63,A64,A65,A66,A67,A68,A69,
A6$,A6_,A7a,A7b,b]);}
var AJY=G();
function JX(b,c){var d,e,f;if(c<=0)return C(21);d=B2(c);e=d.data;e[0]=AJj(Gj(b,52));f=1;while(f<c){e[f]=AJj(Gj(b,62));f=f+1|0;}return Hi(d);}
function AJj(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AEB=G();
function AJ8(){var a=this;B.call(a);a.H5=null;a.Nk=null;a.Hk=0;a.NS=0;}
var ADo=G(0);
function AJq(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BL,8);e=DE(8);f=B2(16);g=0;h=0;i=0;while(true){j=BK(i,b);if(j>0)break;k=j>=0?10:(c.ba(CU(i))).mn;if(k==10){d=AFU(Et(f,0,g),d,h);e=AA$(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Ku(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AFU(Et(f,0,g),d,h);j=i+1|0;if(j<b&&(c.ba(CU(j))).mn==10){e=AA$(1,e,h);i=j;}else e=AA$(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new YJ;d=AD_(d,h);if(m.length!=h)e=N1(e,h);c.jO=d;c.Bk=e;return c;}
function AHt(b){var c,d;c=J(b);BD(b);d=new O9;d.s0=b;return AJq(c,d);}
var CY=G();
var AIY=G(CY);
var AJh=G(CY);
var AHI=G(CY);
var AHT=G(CY);
var AJw=G(CY);
function Uv(){B.call(this);this.rj=null;}
function AOj(a){var b;b=a.rj;Bm(Bx(),b);}
var HC=G(CG);
var A7d=null;var A5D=null;var A7e=null;function APn(){APn=Bn(HC);AVB();}
function A1o(a,b){var c=new HC();AD0(c,a,b);return c;}
function AD0(a,b,c){APn();DD(a,b,c);}
function AVB(){var b;A7d=A1o(C(421),0);b=A1o(C(422),1);A5D=b;A7e=I(HC,[A7d,b]);}
function O9(){B.call(this);this.s0=null;}
function ATV(a,b){return O8(P(a.s0,b.bp));}
function YJ(){var a=this;B.call(a);a.jO=null;a.Bk=null;}
var AHr=G();
function Ce(b,c){return CV(b*c);}
function Ge(){var a=this;B.call(a);a.gO=0;a.m1=null;}
function AFG(){var a=this;B.call(a);a.bo=null;a.Q=null;a.U=null;a.ig=null;a.pa=0;}
function ADu(a){var b=new AFG();AQi(b,a);return b;}
function A30(a,b){var c=new AFG();AEp(c,a,b);return c;}
function AQi(a,b){AEp(a,b,AS_());}
function AEp(a,b,c){var d;a.bo=b;d=new TD;EV(d);d.l9=new BY;d.fV=b;a.Q=d;a.U=c;}
function FJ(a,b){var c;c=a.Q;c.ew=c.ew|(BT(c.ji,b)?0:1);c.ji=b;Ik(a);}
function Zw(a,b,c){var d,e,f;d=a.Q;e=BT(d.hc,b)?0:1;f=c===d.kg?0:1;if(e){d.hc=b;d.eo=null;P7(d,0);}d.ew=d.ew|(!e&&!f?0:1);d.kg=c;d.h1=0;Ik(a);}
function GO(a,b){var c;a.ig=b;c=b.si;BD(b);Zw(a,c,3.0);}
function Nw(a){var b;b=a.Q;b.dS=Cy(b.dS,null);b.eo=null;a.U=Cy(a.U,null);}
function KY(a,b){var c,d,e;c=a.U;d=c.i;e=c.k;b=Cy(c,b);a.U=b;b.eW(d,e,a.bo.cb);}
function ES(a,b,c){a.U.eW(b,c,a.bo.cb);Ik(a);}
function Ik(a){var b,c,d;if(a.bo.cb!==0.0){b=a.Q;if(b.hc!==null){c=a.U.k.a;b.k.a=c;d=b.dS;if(d!==null&&c!=Cd(d)&&!(c>=b.h1&&Cd(b.dS)>=b.h1))b.ew=1;b=a.Q;b.bN=a.bo.cb;if(NU(b))c=0;else{b=a.Q;P7(b,UK(b));c=b.k.b;}b=a.Q.i;d=a.U.i;V(b,d.a,d.b-c|0);return;}}}
function LX(a,b){var c;c=!(a.pa&1)?0:1;return !c&&!B0(a.U,b.g)?0:1;}
function LO(b,c){if(b<0)c=C(423);else if(b>0)c=C(424);return c;}
function Oc(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function Mo(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function MP(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function Kw(a,b,c){var d,e;d=a.U;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function NV(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.U;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ACu(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.U;return AIe(b,d,(e.i.b+e.k.b|0)-c|0);}
function MH(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Ws(a,b,c){var d,e;d=a.Q;e=d.i.a;return AIe(b,e+c|0,(e+d.k.a|0)-c|0);}
function AIe(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BK(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function JT(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.U;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new Wt;b.zn=a;b.zo=e;b.zl=f;b.zm=c;b.zj=g;b.zk=j;b.zh=l;b.zi=d;b.zf=h;b.zg=k;b.tD=m;return b;}
var AEt=G();
function SK(){var a=this;B.call(a);a.qK=null;a.s$=null;a.y_=null;}
var AHw=G(0);
function AG6(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Nz(b)){case -1655966961:if(!Bj(b,C(184)))break a;c=4;break a;case 3401:if(!Bj(b,C(236)))break a;c=3;break a;case 98723:if(!Bj(b,C(183)))break a;c=2;break a;case 3254818:if(!Bj(b,C(182)))break a;c=1;break a;case 3556653:if(!Bj(b,C(181)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=ED();e=new K;M(e);H(H(e,C(425)),b);Bm(d,L(e));c=0;break b;}c=0;}return c;}
function Sx(){B.call(this);this.qo=null;}
function ASe(a,b,c,d){return Lz(a.qo,b,c,d);}
function Sw(){B.call(this);this.tF=null;}
function A0A(a,b,c){return G6(a.tF,b,c);}
function Sz(){B.call(this);this.xe=null;}
function ANK(a){var b,c;b=a.xe;c=new AAw;c.xl=b;return c;}
function Sy(){var a=this;B.call(a);a.CX=null;a.CV=null;a.CW=null;a.CY=null;a.CZ=null;}
function WN(){B.call(this);this.jY=null;}
function A1u(a,b){var c,d,e,f,g;c=a.jY;d=c.lX;if(d!==null){e=b.g;f=e.a-d.a|0;g=e.b-d.b|0;e=c.j6;e.a=EY(0,e.a+f|0,c.hR.a-c.jr.a|0);c=a.jY;d=c.j6;d.b=EY(0,d.b+g|0,c.hR.b-c.jr.b|0);}a.jY.lX=b.g;return 1;}
var AEz=G();
function LH(){return "clipboard" in $rt_globals.navigator?1:0;}
function AF8(){var a=this;B.call(a);a.cS=null;a.cc=null;a.j7=null;a.kj=null;a.no=null;a.jA=null;}
function M4(a){var b=new AF8();AYR(b,a);return b;}
function AYR(a,b){a.cc=BH();a.jA=A6H;a.cS=b;Bc(b.ei,a);}
function F8(a,b,c){a.j7=c;a.no=b;b=B4(a.cc);while(B8(b)){Jw(B9(b),a.no);}}
function Jd(a,b,c,d){a.jA=d;Lc(a,b,c);}
function Lc(a,b,c){var d,e;d=a.cS;e=d.b2;if(Bb(e.a,e.b)&&d.cb!==0.0){if(a.j7!==null&&!Jj(a)){a.kj=Hg(a.cS,a.j7);d=WQ(a,b,c,null);b=new Rn;b.sU=a;d.ko=b;FD(a.cS,a);return;}b=new BS;X(b);N(b);}c=new C4;Bl(c,C(426));N(c);}
function L6(a){if(Jj(a)){AAq(a.cS,a);AAi(a,null);a.jA.h();a.jA=A6H;}}
function Ux(a,b,c,d,e){var f,g,h;f=AIz();ADc(f);M1(f,c.cV());Jw(f,a.no);Ju(f,a.kj,a.cS);if(d===null)g=b.a;else{g=b.a;g=a.cS.b2.a<((g+(Es(d)).a|0)+(Es(f)).a|0)?g-(Es(f)).a|0:(g+(Es(d)).a|0)-d.fT|0;}h=b.b;b=a.cS.b2;MV(f,Be(0,Bd(g,b.a-(Es(f)).a|0)),Be(0,Bd(h,b.b-(Es(f)).b|0)));b=new AAV;b.uj=a;b.ug=f;b.uh=e;f.on=b;BC(a.cc,f);return f;}
function WQ(a,b,c,d){return Ux(a,b,c,d,null);}
function A1a(a,b,c){var d;a.kj=Hg(a.cS,a.j7);d=B4(a.cc);while(B8(d)){Ju(B9(d),a.kj,a.cS);}}
function AOX(a,b){var c;if(!Jj(a))return 0;a:{switch(b.bl){case 27:L6(a);c=1;break a;default:}c=0;}return c;}
function AH6(b,c){var d,e,f;d=b.e9;e=c.cZ;f=c.fT;return BJ((d.a-(e*3|0)|0)-f|0,(d.b-e|0)-f|0);}
function AAi(a,b){var c,d;c=a.cc.m-1|0;a:{while(true){if(c<0)break a;d=Bw(a.cc,c);if(b===d)break;EB(a.cc,c);Mz(d);c=c+(-1)|0;}}}
function Jj(a){return a.cc.m<=0?0:1;}
function AQK(a){var b,c,d,e,f,g;b=a.cS;c=b.ei;d=0;while(true){e=c.gW.data;f=e.length;if(d>=f)break;if(e[d]===a){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.gf=c.gf-1|0;c.ie=null;}d=d+1|0;}AAq(b,a);b=a.cc;c=B4(b);while(B8(c)){Mz(B9(c));}Io(b);}
function Ve(){B.call(this);this.qp=null;}
function AWn(a,b){L7(a.qp,b);}
function Xe(){B.call(this);this.tO=null;}
function ASZ(a,b){var c,d,e,f;c=a.tO;if(c.hD!=3&&c.fF!=3){b=b.data;c.hQ=3;d=CN(b[0]);e=EH(b[1]);ABc(c.f,d,e);if(c.fA){b=EU(c);f=JD(EW(),c.iG);c=new K;M(c);H(HD(H(H(c,b),C(427)),f),C(239));$rt_globals.console.info($rt_ustr(L(c)));}}}
function AAL(){B.call(this);this.yC=null;}
function AXB(a,b){var c,d,e,f,g,h;c=a.yC;if(c.fF!=3){d=b.data;c.hD=3;if((CN(d[2])).data[0]!=1)L7(c,b);else{e=CN(d[0]);f=EH(d[1]);g=c.hQ!=3?0:1;QQ(c.f,e,f,g);if(c.fA){b=EU(c);h=JD(EW(),c.iG);c=new K;M(c);H(HD(H(H(c,b),C(428)),h),C(239));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function ABI(){B.call(this);this.j$=null;}
function A1d(a){return a.j$;}
var AIU=G(0);
var LD=G(0);
function Qy(){B.call(this);this.tf=null;}
function AUI(a,b){return K1(a.tf,b);}
function O1(){B.call(this);this.zd=null;}
function A0e(a,b){var c,d;c=a.zd;d=b.bp;return O8(c.charCodeAt(d)&65535);}
var AFw=G();
function AHQ(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AI2(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function Qe(){var a=this;B.call(a);a.cL=null;a.px=null;a.fd=null;a.d8=0;a.cq=0;a.iR=null;a.jv=null;a.g_=0;a.vH=0;}
function OY(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d8;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}EI(c);j=d+(-1)|0;b=Dh(d);d=Bb(j,a.cq)%a.fd.b|0;GE(a,c,b,a.g_,g);JB(a.cL,c,0,d);if(!(j%a.d8|0))break;d=j;}}else{EI(b);k=a.d8-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GE(a,b,Dh(j),Bb(a.cq,k)+a.g_|0,g);k=k+(-1)|0;j=h;}CK(a.cL,b);j=Be(i,e);}return j;}k=a.d8;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bd(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EI(c);b=Dh((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cq)%a.fd.b|0;GE(a,c,b,a.g_,g);JB(a.cL,c,0,d);if(!(j%a.d8|0))break;d=j;}}else{EI(b);d=0;while(d<a.d8){h=h+1|0;GE(a,b,Dh((h>e?h-f|0:h)+f|0),Bb(a.cq,d)+a.g_|0,g);d=d+1|0;}CK(a.cL,b);j=Bd(i,e);}return j;}
function Vi(b,c,d,e){c=c.data;return d<c.length&&c[d]?JP(b.dZ,b,c[d]):e.kC;}
function MZ(a,b,c,d,e,f){D1(b,a.px.a+d.a|0,c+d.b|0,a.iR,a.jv,a.cL,e,f,a.vH);}
function GE(a,b,c,d,e){BQ(b,c,a.fd.a-20.0*e,d);}
var ADr=G();
function Hr(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function ADU(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Tm(){var a=this;B.call(a);a.z0=null;a.z1=null;a.h7=null;}
function A3B(a,b,c){var d=new Tm();AE8(d,a,b,c);return d;}
function AE8(a,b,c,d){a.z0=b;a.z1=c;a.h7=d;}
function GB(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.h7.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bd(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hG:i.hH;k=!c?i.nB:i.nC;l=BK(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function LP(){var a=this;B.call(a);a.hH=0;a.nC=0;a.hG=0;a.nB=0;a.of=0;}
function M0(a,b,c,d,e){var f=new LP();AZA(f,a,b,c,d,e);return f;}
function AZA(a,b,c,d,e,f){a.hH=b;a.nC=c;a.hG=d;a.nB=e;a.of=f;}
var RQ=G(0);
var A5L=null;function AI$(){A5L=new QK;}
function ABk(){var a=this;B.call(a);a.rU=null;a.rV=null;}
function AUJ(a,b){var c,d,e;c=a.rU;d=a.rV;c=c.fh.ec.u;e=c.a;b=b.g;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Cs(d,b);}
var F5=G(IW);
var ACz=G(Fr);
function ACC(){B.call(this);this.t0=null;}
function ATs(a,b){var c,d;c=a.t0;UR(c,Fp(c,b.g));b=Bi(c);d=c.d;NI(b,d.w,d.z);H2(c);}
function Tw(){B.call(this);this.wo=null;}
function A0z(a,b){var c,d;c=a.wo;d=c.d7+1|0;c.d7=d;c=new K;M(c);H(H(U(c,d),C(429)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function UY(){B.call(this);this.wy=null;}
function AZc(a){var b,c;b=a.wy;c=new K;M(c);H(H(H(c,C(430)),b),C(431));$rt_globals.console.info($rt_ustr(L(c)));}
var ACL=G(Ei);
var A7f=null;function Wp(b){var c;c=new K;M(c);return L(E5(c,b));}
function AFp(){A7f=F($rt_floatcls());}
var Gk=G();
var A7g=null;var A7h=null;var A4J=null;var A4I=null;var A4H=null;function AIq(){A7g=DR([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A7h=AHx([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A4J=AHx([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A4I=new AAC;A4H=new Tq;}
var Jt=G();
var A7i=0;var A7j=null;var A7k=null;function AIQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.qx=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.mA=0;c.mp=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Iy(Db(Bp(d),Bp(8388608)),Fz)){d=d<<1;f=f+(-1)|0;}}g=AIX(A7k,f);if(g<0)g= -g|0;h=A7k.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jq(d,A7j.data[e],i);if(j<A7i){while($rt_ucmp(j,A7i)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A7k.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jq(d,
A7j.data[e],i);}e=d<<1;d=e+1|0;h=A7j.data;f=g+1|0;k=h[f];l=i-1|0;m=Jq(d,k,l);n=Jq(e-1|0,A7j.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DA(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.mA=d;c.mp=g-50|0;}
function Jq(b,c,d){return GF(F3(Cg(Db(Bp(b),D(4294967295, 0)),Db(Bp(c),D(4294967295, 0))),32-d|0));}
function AH0(){A7i=$rt_udiv((-1),10);A7j=DR([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A7k=DR([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Tq(){var a=this;B.call(a);a.mA=0;a.mp=0;a.qx=0;}
function N5(){var a=this;B.call(a);a.Dl=null;a.vo=0.0;a.BD=0.0;a.gc=null;a.i0=null;a.nl=null;a.fX=0;}
function AJP(a,b){var c;if(b!==null){a.i0=b;return a;}c=new BS;Bl(c,C(432));N(c);}
function AFh(a,b){var c;if(b!==null){a.nl=b;return a;}c=new BS;Bl(c,C(432));N(c);}
function Yf(a,b,c,d){var e,f,g,$$je;e=a.fX;if(!(e==2&&!d)&&e!=3){a.fX=d?2:1;while(true){try{f=AGi(a,b,c);}catch($$e){$$je=EO($$e);if($$je instanceof Bt){g=$$je;N(AU8(g));}else{throw $$e;}}if(H9(f))return f;if(IQ(f)){if(d&&D3(b)){g=a.i0;Hd();if(g===A5a)return Ek(Cf(b));if(Cf(c)<=J(a.gc))return A5d;Fo(b,b.Y+Cf(b)|0);if(a.i0===A5b)MW(c,a.gc);}return f;}if(QS(f)){g=a.i0;Hd();if(g===A5a)return f;if(g===A5b){if(Cf(c)<J(a.gc))return A5d;MW(c,a.gc);}Fo(b,b.Y+KT(f)|0);}else if(L1(f)){g=a.nl;Hd();if(g===A5a)break;if(g
===A5b){if(Cf(c)<J(a.gc))return A5d;MW(c,a.gc);}Fo(b,b.Y+KT(f)|0);}}return f;}b=new C4;X(b);N(b);}
function AHz(a,b){var c,d,e,f;c=a.fX;if(c&&c!=3){b=new C4;X(b);N(b);}if(!Cf(b))return AGI(0);if(a.fX)a.fX=0;d=AGI(Be(8,Cf(b)*a.vo|0));while(true){e=Yf(a,b,d,0);if(IQ(e))break;if(H9(e))d=Zx(a,d);if(!Nj(e))continue;Tp(e);}b=Yf(a,b,d,1);if(Nj(b))Tp(b);while(true){f=a.fX;if(f!=3&&f!=2)break;a.fX=3;if(IQ(A5e)){d.ee=d.Y;d.Y=0;d.jl=(-1);return d;}d=Zx(a,d);}b=new C4;X(b);N(b);}
function Zx(a,b){var c,d,e;c=b.ih;d=Ku(c,Be(8,c.data.length*2|0));e=AIA(d,0,d.data.length);Fo(e,b.Y);return e;}
function ABO(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DL(a,b){var c=new ABO();AIG(c,a,b);return c;}
function AIG(a,b,c){a.bq=b;a.bv=c;}
function AKC(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function AQY(a){return AFy(I(B,[CU(a.bq),CU(a.bv)]));}
function AYA(a,b){var c;b=b;c=BK(a.bq,b.bq);if(!c)c=BK(a.bv,b.bv);return c;}
var AEJ=G(CY);
function TX(){B.call(this);this.Cg=null;}
function ALs(a){Bm(Bx(),C(433));}
var AC9=G(0);
var A6H=null;function AF4(){A6H=new Wo;}
function HR(){CD.call(this);this.c4=null;}
function Vl(a,b){var c;if(a.c4===null){a.c4=b;return;}c=new D_;X(c);N(c);}
function AXQ(a){var b,c,d;b=a.c4.data;c=b.length;d=0;while(d<c){b[d].cD();d=d+1|0;}}
function APw(a,b){var c,d,e;c=a.c4.data;d=c.length;e=0;while(e<d){c[e].ds(b);e=e+1|0;}}
function ATS(a,b){var c,d,e,f;c=0;d=a.c4.data;e=d.length;f=0;while(f<e){c=c|d[f].cg(b);f=f+1|0;}return c;}
function AMi(a,b,c,d){HH(a,b,c,d);a.Ay();}
function A0k(a,b,c,d){var e,f,g,h,i;e=0;f=a.c4.data;g=f.length;h=0;while(h<g){i=f[h];if(B0(i,b.g))e=e|i.cu(b,c,d);h=h+1|0;}return e;}
function ARR(a,b,c){var d,e,f,g,h;d=a.c4.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B0(g,b.g)){h=g.cv(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A0s(a,b,c){var d,e,f,g,h;d=0;e=a.c4.data;f=e.length;g=0;while(g<f){h=e[g];if(B0(h,b.g))d=d|h.dv(b,c);g=g+1|0;}return d;}
function A0O(a,b){var c,d,e,f,g;c=0;d=a.c4.data;e=d.length;f=0;while(f<e){g=d[f];if(B0(g,b.g))c=c|g.bQ(b);f=f+1|0;}return c;}
function AMU(a,b,c,d){var e,f,g,h,i;e=0;f=a.c4.data;g=f.length;h=0;while(h<g){i=f[h];if(B0(i,b.g))e=e|i.dt(b,c,d);h=h+1|0;}return e;}
function Qn(){var a=this;HR.call(a);a.rl=null;a.y4=null;a.f$=null;a.n4=null;a.ki=null;a.ga=null;a.fI=null;}
function AOe(a){var b,c,d,e;b=a.k.a/4|0;c=b+EE(a,1.0)|0;d=AIN(a.i);e=BJ(b,a.k.b);a.c4.data[0].eW(d,e,a.bN);d.a=a.i.a+b|0;e.a=c-b|0;a.c4.data[1].eW(d,e,a.bN);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.c4.data[2].eW(d,e,a.bN);}
function AWd(a){var b,c;b=AF_(a.fI);c=AGK(a.ki);return BJ((b.a+a.n4.k.a|0)+c.a|0,b.b);}
function Yd(){B.call(this);this.Au=null;}
function AT9(a,b){var c,d;c=a.Au;d=c.d7+1|0;c.d7=d;c=b.iw;b=new K;M(b);H(H(U(b,d),C(434)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var QK=G();
function AXN(a,b){}
function Fg(){var a=this;CD.call(a);a.c2=null;a.V=null;a.fK=null;}
function A7l(){var a=new Fg();Lx(a);return a;}
function Lx(a){EV(a);a.c2=new Bg;a.V=new Bg;}
function AV1(a,b){a.fK=b;}
function So(a,b,c){V(a.c2,b,c);}
function AEI(a){var b;b=a.V;b.a=V5(a,b.a);b=a.V;b.b=ABW(a,b.b);}
function AFO(a,b){var c,d;c=a.V.a;d=V5(a,b);a.V.a=d;return c==d?0:1;}
function AKb(a,b){var c,d;c=a.V.b;d=ABW(a,b);a.V.b=d;return c==d?0:1;}
function ABW(a,b){return Be(0,Bd(b,a.c2.b-a.k.b|0));}
function V5(a,b){return Be(0,Bd(b,a.c2.a-a.k.a|0));}
function QG(){var a=this;Fg.call(a);a.bS=null;a.d0=null;a.hO=null;a.ze=null;a.ed=null;a.b4=null;a.eP=null;a.fz=null;a.dM=0;a.fw=0;a.Ax=null;a.dY=0;a.eD=0;a.hg=0;a.fU=0;a.fL=0;a.cN=0;a.eR=null;a.jT=null;a.xz=null;a.ic=null;}
function A3T(a,b){var c=new QG();AJM(c,a,b);return c;}
function AJM(a,b,c){Lx(a);a.d0=RL();a.hO=new Bg;a.b4=A7m;a.eP=Q(JS,0);a.dY=0;a.eD=0;a.hg=0;a.fU=0;a.fL=0;a.eR=AHj(0);a.ic=JI();a.bS=b;a.jT=c;a.Ax=c;PZ(a);}
function PZ(a){a.dM=Ce(2.0,a.bS.cb);}
function UI(a){return a.b4.data.length?0:1;}
function Wh(a,b){SD(a);a.b4=b;}
function SD(a){V(a.hO,0,0);}
function Vm(a,b,c){a.xz=b;a.ze=c;a.ed=null;a.eR=null;a.fw=0;SD(a);}
function A0x(a){a.fz=Cy(a.fz,null);V(a.hO,0,0);Fq(a.ic);a.eR=null;a.b4=A7m;a.eP=null;a.dY=0;a.eD=0;a.hg=0;Z9(a.d0);a.jT=null;}
function AVk(a,b,c){XH(a);PZ(a);a.ed=null;a.eR=null;a.fw=0;}
function ATH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=J7(a.bS);if(UI(a))return;KL(a);Cl(c,a.ed);d=Ec(a);e=AG5(c,a.fw);f=Bd(H3(a.k.b,d),a.b4.data.length)+30|0;g=a.xz.Al;h=a.eP.data;d=h.length;if(d<f){a:{i=a.fU;j=a.fL;k=a.b4;l=a.eR;m=a.ic;n=Q(JS,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gF!==c){ABD(l,q,m);o[f]=Ms(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Ms(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Ms(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ABD(l,c,m);h[f]=null;}f=f+1|0;}a.eP=n;Cs(a.hO,Mr(a.eR));XU(a,a.bS.bV);}a.fU=Bd((a.V.b+a.dM|0)/(Ec(a)+a.dM|0)|0,a.b4.data.length-1|0);a.fL=Bd((((a.V.b+a.d0.t.b|0)-1|0)+a.dM|0)/(Ec(a)+a.dM|0)|0,a.b4.data.length-1|0);if(!a.eP.data.length)return;AG0(a,e);ABs(a,b);q=g.y8;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.d0.u;i=c.a;j=c.b;p=CE(a.bS,2.0);s=a.bS.dx;t=a.fU;u=i+p|0;while(t<=a.fL){l=Xd(a,t);d=Bb(t,Ec(a));v
=t+1|0;w=d+Bb(v,a.dM)|0;x=u+a.dY|0;y=x+a.eD|0;z=a.cN!=t?0:1;m=!z?q:g.rS;ba=!z?g.s5:g.kO;bb=!z?g.ql:g.kO;bc=!z?g.q0:g.kO;bd=(j+w|0)-a.V.b|0;D1(b,u,bd,l.i8,l.ss,a.fz,ba,m,a.bS.cw);D1(b,x,bd,l.jz,l.kL,a.fz,bb,m,a.bS.cw);D1(b,y,bd,l.i9,l.kh,a.fz,bc,m,a.bS.cw);d=l.i8.a;be=u+d|0;V(s,Be(0,a.dY-d|0),l.i8.b);Bs(b,be,bd,s,m);d=u+a.dY|0;f=l.jz.a;bf=d+f|0;V(s,Be(0,a.eD-f|0),l.jz.b);Bs(b,bf,bd,s,m);d=l.i9.a;bg=y+d|0;V(s,Be(0,(((a.d0.t.a-d|0)-a.eD|0)-a.dY|0)-p|0),l.i9.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;V(s,p,Ec(a)+a.dM
|0);Bs(b,bh,bd,s,q);t=v;}F2(b);}
function AG0(a,b){var c,d,e,f,g,h;c=0;d=a.fU;while(d<=a.fL){e=Xd(a,d);if(!(e!==null&&e.gF===a.b4.data[d])){f=a.eP.data;g=a.b4;e=a.eR;h=a.ic;c=d%f.length|0;if(f[c]!==null)ABD(e,f[c],h);f[c]=Ms(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cs(a.hO,Mr(a.eR));XU(a,a.bS.bV);}}
function XU(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hO;c=DZ(b,c.a+150|0,c.b,a.bS.cw);Cl(c,a.ed);d=a.ed;e=d.dq;f=e-(e+d.ev)/16.0;g=a.eP.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gF.k4;k=d.kL;BQ(c,j,k.bm+a.fw,f+k.br);j=d.gF.li;d=d.kh;BQ(c,j,d.bm+a.fw,f+d.br);}i=i+1|0;}a:{d=a.ic;if(d.c5>0){h=d.cW;i=0;b:while(true){g=d.b5.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cQ;l=j.cM;k=k;l=l.lC;BQ(c,k,l.bm+a.fw,f+l.br);j=j.cT;if(h!=d.cW)break b;}i=i+1|0;}b=new H5;X(b);N(b);}}if(a.fz===null)a.fz=CT(b);CK(a.fz,
c);Er(c);}
function Xd(a,b){var c;c=a.eP.data;return c[b%c.length|0];}
function AYz(a,b){Cs(a.d0.t,b);}
function AZG(a,b){Cs(a.d0.u,b);}
function XH(a){var b,c,d,e,f,g,h,i,j;b=J7(a.bS);if(UI(a))return;KL(a);Cl(b,a.ed);c=AG5(b,a.fw);d=a.b4.data;e=d.length;f=0;while(f<e){g=d[f];h=M$(c,g.hn);i=M$(c,g.k4);j=M$(c,g.li);a.dY=Be(a.dY,h);a.eD=Be(a.eD,i);a.hg=Be(a.hg,j);f=f+1|0;}}
function AOP(a,b){var c;c=Zl(a,b.g);if(c>=0)a.cN=c;return E7(a.d0,a.i)&&Gv(a.bS.cP)?1:0;}
function AM3(a,b,c){if(!E7(a.d0,b.g)&&!KZ(a.d0)){b=a.Ax;if(b!==null)b.h();}return null;}
function AQR(a,b,c,d){var e;if(d==1){e=Zl(a,b.g);if(e>=0)TQ(a,a.b4.data[e]);}return 1;}
function TQ(a,b){a.jT.h();b.sV.h();}
function Zl(a,b){var c,d,e;if(!a.eP.data.length)return (-1);c=Ec(a);d=(b.b-a.i.b|0)+a.V.b|0;e=a.dM;e=(d+e|0)/(c+e|0)|0;if(e<a.b4.data.length)return e;return (-1);}
function Ec(a){return EZ(a.ed);}
function KL(a){var b;if(a.ed===null){b=Hg(a.bS,a.ze);a.ed=b;a.eR=AHj(EZ(b));a.fw=CV(a.ed.pn);}}
function AZR(a,b){var c,d,e;a:{switch(b.bl){case 13:TQ(a,a.b4.data[a.cN]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cN=a.fU;b=a.fK;c=a.V;I8(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cN=a.fL;b=a.fK;c=a.V;I8(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cN=a.b4.data.length-1|0;break a;case 36:case 37:a.cN=0;break a;case 38:d=a.cN;e=a.b4.data.length;a.cN=((d+e|0)
-1|0)%e|0;break a;case 40:a.cN=(a.cN+1|0)%a.b4.data.length|0;break a;default:break a;}a.jT.h();return 0;}e=a.cN;if(e<=a.fU)I8(a.fK,a.V.a,Bb(e,Ec(a))+Bb(a.cN,a.dM)|0);else if(e>=a.fL)I8(a.fK,a.V.a,(Bb(e+1|0,Ec(a))+Bb(a.cN+2|0,a.dM)|0)-a.k.b|0);return 0;}
var Uh=G();
function ASx(a){}
function AEi(){var a=this;CD.call(a);a.nN=null;a.wz=null;a.y9=null;a.bL=null;a.dh=null;a.dy=null;a.td=null;a.qu=null;a.um=0.0;a.oN=null;a.ob=null;}
function Gu(a,b){var c=new AEi();ATp(c,a,b);return c;}
function ATp(a,b,c){var d;c=c.cP;EV(a);d=new Pu;d.xy=a;a.wz=d;d=new Pt;d.yc=a;a.y9=d;a.um=10.0;a.bL=b;a.nN=c;b.fK=a;}
function ARu(a){var b;b=a.bL;b.fK=null;a.bL=Cy(b,null);}
function I6(a,b,c){var d;a.ob=c;a.oN=b;d=a.dh;if(d!==null)HZ(d,b,c);b=a.dy;if(b!==null)HZ(b,a.oN,a.ob);}
function QO(a,b,c,d){HH(a,b,c,d);HH(a.bL,b,c,d);if(d!==0.0)ABw(a);}
function I8(a,b,c){KX(a,b);Lq(a,c);}
function ABw(a){var b;AEI(a.bL);b=Gp(a)*3|0;if(YG(a,b))Tb(a);else a.dy=null;if(AC5(a,b))VW(a);else a.dh=null;}
function AC5(a,b){var c;c=a.k.b;return c>b&&a.bL.c2.b>c?1:0;}
function YG(a,b){var c;c=a.k.a;return c>b&&a.bL.c2.a>c?1:0;}
function Tb(a){var b,c,d,e,f,g;b=a.dy;if(b===null)b=IZ();a.dy=b;OJ(a,b);c=a.dy;b=a.bL;d=b.V.a;e=a.i;f=e.a;g=a.k;QN(c,d,f,g.a,b.c2.a,e.b+g.b|0,Gp(a));}
function VW(a){var b,c,d,e,f,g;b=a.dh;if(b===null)b=IZ();a.dh=b;OJ(a,b);c=a.dh;b=a.bL;d=b.V.b;e=a.i;f=e.b;g=a.k;J_(c,d,f,g.b,b.c2.b,e.a+g.a|0,Gp(a));}
function Gp(a){return EE(a,a.um);}
function OJ(a,b){HZ(b,a.oN,a.ob);}
function AY5(a,b){var c;a.bL.ds(b);if(!(a.dh===null&&a.dy===null)){B7(b,1);c=a.dh;if(c!==null)GK(c,b);c=a.dy;if(c!==null)GK(c,b);c=a.dh;if(c!==null)GR(c,b);c=a.dy;if(c!==null)GR(c,b);B7(b,0);}}
function SN(a,b){var c,d;a:{b:{c=a.dh;if(!(c!==null&&IC(c,b))){c=a.dy;if(c===null)break b;if(!IC(c,b))break b;}d=1;break a;}d=0;}return d;}
function ARP(a,b,c,d){return !SN(a,b.g)&&!a.bL.cu(b,c,d)?0:1;}
function KX(a,b){var c;b=AFO(a.bL,b);if(YG(a,Gp(a)*3|0))Tb(a);if(b){c=a.td;if(c!==null)c.h();}}
function Lq(a,b){var c;if(ABY(a,b)){c=a.qu;if(c!==null)c.h();}}
function ABY(a,b){var c;c=AKb(a.bL,b);if(AC5(a,Gp(a)*3|0))VW(a);return c;}
function ARw(a,b,c){var d,e;d=a.dh;if(d!==null){e=FU(d,b.g,a.wz,1);if(e!==null)return e;}d=a.dy;if(d!==null){e=FU(d,b.g,a.y9,0);if(e!==null)return e;}return a.bL.cv(b,c);}
function APS(a,b,c){return SN(a,b.g)?1:0;}
function APE(a,b){var c,d,e;c=a.dh;d=c!==null&&F0(c,b.g,a.nN)?1:0;c=a.dy;e=c!==null&&F0(c,b.g,a.nN)?1:0;return !d&&!e&&!a.bL.bQ(b)?0:1;}
function AVE(a,b,c,d){var e,f;if(!B0(a,b.g))return 0;e=Ce(d*0.5,a.bN);f=Ce(c*0.5,a.bN);if(b.bJ){f=f+e|0;e=0;}if(a.dh!==null&&e)Lq(a,a.bL.V.b+e|0);if(a.dy!==null&&f)KX(a,a.bL.V.a+f|0);return 1;}
function AGK(a){var b,c;b=Gp(a);c=a.bL.hv();c.a=Be(c.a,b);c.b=Be(c.b,b);return c;}
function PH(){var a=this;Fg.call(a);a.lI=null;a.o5=null;a.wW=null;a.rg=0.0;}
function ASF(a){var b;b=Ce(20.0,a.bN);return BJ(b,b);}
function AYF(a,b){var c,d,e;So(a,b.a*3|0,b.b*5|0);c=a.wW;d=c.sg;c=c.sf;b=Cu(b);e=new K;M(e);H(H(H(e,c),C(29)),b);FJ(d,L(e));}
function ASU(a,b){var c,d,e,f,g,h,i,j,k,l,m;AJS(a,b);ABs(a,b);c=Ce(30.0,a.bN);d=a.V;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.k;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.o5;d.b=c;d.a=c;a.lI.bB=1.0;while(h<=e){g=a.i.b-a.V.b|0;j=f;while(j<=i){k=a.i.a-a.V.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AJH(l);m=m+1|0;}Uu(AJi(l),0.75,a.rg,a.lI);Bs(b,k+j|0,g+h|0,a.o5,a.lI);j=j+c|0;}h=h+c|0;}F2(b);}
function ATX(a,b){}
function Rf(){var a=this;B.call(a);a.sg=null;a.sf=null;}
function TD(){var a=this;CD.call(a);a.fV=null;a.hc=null;a.ji=null;a.eo=null;a.kg=0.0;a.ew=0;a.h1=0;a.dS=null;a.l9=null;}
function UK(a){var b;if(NU(a))return 0;ABl(a);b=CE(a.fV,a.kg);return EZ(a.eo)+(b*2|0)|0;}
function K8(a){var b;b=a.k;return b.a&&b.b?0:1;}
function NU(a){return a.hc!==null&&a.ji!==null?0:1;}
function P7(a,b){a.k.b=b;}
function P_(a,b,c,d,e){var f,g;f=a.fV.dx;V(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ABl(a){if(a.eo===null)a.eo=Hg(a.fV,a.hc);}
var Zb=G(Ei);
var A7n=null;function Da(b,c){return Long_udiv(b, c);}
function AHe(b,c){return Long_urem(b, c);}
function DA(b,c){return Long_ucompare(b, c);}
function AH8(){A7n=F($rt_longcls());}
function AAw(){B.call(this);this.xl=null;}
function AOz(a,b){DC(a.xl,b);}
function AC6(){B.call(this);this.z8=null;}
function AWX(a){Yi(a.z8);}
function ACZ(){B.call(this);this.AP=null;}
function AYB(a){ABJ(a.AP);}
function Ua(){B.call(this);this.uf=null;}
function AZo(a){Rd(a.uf);}
function AJ4(){var a=this;HR.call(a);a.dj=null;a.di=null;a.hX=null;a.hW=null;a.gD=null;a.pP=null;}
function AUv(a){var b=new AJ4();ALt(b,a);return b;}
function ALt(a,b){var c,d;EV(a);a.dj=S6(b);a.di=S6(b);a.hX=Gu(a.dj,b);a.hW=Gu(a.di,b);a.gD=AUC(b);c=AKP(a.hX,a.dj);d=AKP(a.hW,a.di);ABZ(a.gD,c,d);a.pP=AR$(c,d);Vl(a,I(CD,[a.hX,a.gD,a.hW]));}
function AC4(a,b){a.gD.jM=b;JW(a.dj,b);Jv(a.dj,a.hX);JW(a.di,b);Jv(a.di,a.hW);}
function MN(a,b){a.pP.hS=b;a.gD.eQ=b;}
function AOM(a){var b,c,d,e,f;b=Ce(20.0,a.bN);c=a.k.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AIN(a.i);f=BJ(d,a.k.b);QO(a.hX,e,f,a.bN);e.a=a.i.a+c|0;QO(a.hW,e,f,a.bN);e.a=a.i.a+d|0;f.a=c-d|0;HH(a.gD,e,f,a.bN);}
function AAt(){B.call(this);this.nx=null;}
var A7m=null;function AN6(){var a=new AAt();AD5(a);return a;}
function AD5(a){a.nx=BH();}
function Vr(a,b,c,d,e){var f;f=new K0;f.sV=e;f.k4=c;f.li=d;f.hn=b;BC(a.nx,f);}
function ACb(a){return Gb(a.nx,A7m);}
function ZD(b){return b===null?C(21):ABo(b);}
function AJN(){A7m=Q(K0,0);}
function JS(){var a=this;B.call(a);a.ss=null;a.kL=null;a.kh=null;a.i8=null;a.jz=null;a.i9=null;a.gF=null;}
function Ms(b,c,d,e){var f,g,h;f=new JS;f.i8=new Bg;f.jz=new Bg;f.i9=new Bg;f.gF=b;g=Cn(e,b.hn);if(g!==null)g.iu=g.iu+1|0;else{g=new ABK;h=Kf(c,b.hn,d);g.iu=1;g.lC=h;Ef(e,b.hn,g);}e=g.lC;f.ss=e;V(f.i8,e.be|0,e.bB|0);e=Kf(c,b.k4,d);f.kL=e;V(f.jz,e.be|0,e.bB|0);b=Kf(c,b.li,d);f.kh=b;V(f.i9,b.be|0,b.bB|0);return f;}
function ABD(b,c,d){var e,f,g;e=c.gF.hn;f=Cn(d,e);g=f.iu-1|0;f.iu=g;if(!g){Lj(d,e);IO(b,f.lC);}IO(b,c.kL);IO(b,c.kh);}
var Oa=G(0);
var A6n=null;var A6o=null;function AE9(){A6n=EP(40,40,40,200);A6o=EP(43,43,43,128);}
function AAC(){var a=this;B.call(a);a.mV=Fz;a.ma=0;a.qj=0;}
var Wo=G();
function ASK(a){}
function RY(){var a=this;B.call(a);a.zQ=null;a.zN=null;a.zO=null;}
function AOF(a){var b,c,d,e,f;b=a.zQ;c=a.zN;d=a.zO;e=Bx();f=new K;M(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bm(e,L(f));}
function Pu(){B.call(this);this.xy=null;}
function AKO(a,b){var c;c=a.xy;Lq(c,FM(b,c.bL.c2.b-c.k.b|0));}
function Pt(){B.call(this);this.yc=null;}
function AK6(a,b){var c;c=a.yc;KX(c,FM(b,c.bL.c2.a-c.k.a|0));}
function Q1(){var a=this;B.call(a);a.uK=null;a.uJ=null;}
function APU(a){Hv(a.uK,a.uJ);}
function O_(){B.call(this);this.vu=null;}
function AVa(a){var b;b=a.vu;Hv(b,b.cR.dj);}
function Pa(){B.call(this);this.AG=null;}
function ATj(a){var b;b=a.AG;Hv(b,b.cR.di);}
function K0(){var a=this;B.call(a);a.sV=null;a.k4=null;a.li=null;a.hn=null;}
var C4=G(Bt);
var AI8=G(Fr);
function AU8(a){var b=new AI8();APj(b,a);return b;}
function APj(a,b){a.ke=1;a.kz=1;a.mN=b;}
function AJ1(){var a=this;B.call(a);a.n5=null;a.mj=null;a.eB=null;a.l8=null;a.bx=null;a.oU=null;a.m6=null;a.fJ=null;a.gy=null;a.jj=null;}
function ASS(a,b){var c=new AJ1();AXn(c,a,b);return c;}
function AXn(a,b,c){var d,e,f;a.eB=b;a.l8=c;a.bx=AUw();b=new K;M(b);a.jj=b;a.fJ=JI();b=new R1;d=AJF(16);b.gq=0;b.dX=Q(Jr,d);b.wB=0.75;TH(b);a.gy=b;b=new TV;c=a.bx;e=a.jj;f=a.fJ;b.dw=c;b.lW=e;b.r5=f;a.oU=b;b=new TE;b.cU=c;b.mF=e;b.rm=f;a.m6=b;}
function Wc(a){var b,c,d,e,f,g,h;a:{b=MO(a.eB.e0);c=b.iX;if(c.c5>0){d=c.cW;e=0;b:while(true){f=b.iX.b5.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cQ;if(MC(a.fJ,g))Cn(a.fJ,g);else{h=a.fJ;Ef(h,g,CU(h.c5));}c=c.cT;if(d!=b.iX.cW)break b;}e=e+1|0;}b=new H5;X(b);N(b);}}b=a.eB.fn;if(b!==null)YO(a,b);Bq(a.bx,a.eB.e0.c5);b=RO(MO(a.eB.e0));while(F9(b)){c=PR(b);GT(a.bx,a.jj.K,J(c));BV(a.jj,c);}b=RO(MO(a.eB.e0));while(F9(b)){c=PR(b);c=Cn(a.eB.e0,c);Bq(a.bx,c.m);c=B4(c);while(B8(c)){g=B9(c);g=Cn(a.fJ,g);Bq(a.bx,
g.bp);}}if(a.eB.fn===null)Bq(a.bx,(-1));else{Bq(a.bx,a.gy.gq);Zs(a,a.eB.fn);}if(a.l8===null)Bq(a.bx,(-1));else{Bq(a.bx,1);ADF(a.l8,a.bx,a.gy);}a.n5=Qq(a.bx);a.mj=Gf(L(a.jj));}
function YO(a,b){var c,d,e,f,g,h;if(ABN(a.gy,b))N4(a.gy,b);else{c=a.gy;d=CU(c.gq);if(b===null){e=Yk(c);if(e===null){c.lB=c.lB+1|0;e=ABR(c,null,0,0);f=c.gq+1|0;c.gq=f;if(f>c.oV)V9(c);}}else{g=Mk(b);h=g&(c.dX.data.length-1|0);e=Wi(c,b,h,g);if(e===null){c.lB=c.lB+1|0;e=ABR(c,b,h,g);f=c.gq+1|0;c.gq=f;if(f>c.oV)V9(c);}}e.cM=d;}b=b.cH;if(b===null)return;c=new U6;c.rn=a;b.e8(c);}
function Zs(a,b){var c,d,e,f;c=(N4(a.gy,b)).bp;Bq(a.bx,c);if(b instanceof Np)Bq(a.bx,(-1));else if(!(b instanceof K2))Bq(a.bx,0);else Bq(a.bx,1);d=a.oU;Bq(d.dw,b.eL.cY());e=b.eL;f=new Vq;f.uO=d;e.e8(f);d=a.m6;Bq(d.cU,b.fo.cY());e=b.fo;f=new Tj;f.tv=d;e.e8(f);d=b.kW;Bq(a.bx,d.cY());e=new T8;e.zC=a;d.e8(e);d=b.hq;Bq(a.bx,d.cY());d=d.b6();while(d.cz()){e=d.b8();OQ(a.oU,e.kY);G7(a.m6,e.km);Bq(a.bx,e.q6);}d=b.tr;if(d===null)Bq(a.bx,(-1));else Bq(a.bx,(Cn(a.fJ,d)).bp);b=b.cH;Bq(a.bx,b.cY());d=new PO;d.pN=a;b.e8(d);}
function Rw(){B.call(this);this.uu=null;}
function AXR(a,b){var c,d,e,f,g,h,i,j;c=a.uu;if(c.fA){d=EU(c);e=new K;M(e);H(H(e,d),C(435));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CN(b[0]);g=EH(b[1]);h=(CN(b[2])).data[0];if(c.f.cn==h){i=null;j=null;if(b.length>=5){i=CN(b[3]);j=EH(b[4]);}Vy(c.f,f,g,i,j);Fq(c.f.dA);Fq(c.f.dK);MS(c.f);Im(c.f);NZ(c);}}
function AAM(){B.call(this);this.vp=null;}
function AWr(a,b){var c,d,e,f;c=a.vp;if(c.fF!=3){b=b.data;d=CN(b[0]);e=EH(b[1]);Vy(c.f,d,e,null,null);if(c.fA){b=EU(c);f=JD(EW(),c.y0);c=new K;M(c);H(HD(H(H(c,b),C(436)),f),C(239));$rt_globals.console.info($rt_ustr(L(c)));}}}
function RE(){var a=this;B.call(a);a.uH=null;a.uI=null;a.uG=0;}
function AVs(a,b){var c,d,e;c=a.uH;d=a.uI;e=a.uG;d.j(Ui(c,(b.g.a+e|0)-c.eU.a|0));}
function RD(){var a=this;B.call(a);a.q4=null;a.q2=null;a.q3=0;}
function A0w(a,b){var c,d,e;c=a.q4;d=a.q2;e=a.q3;d.j(Qa(c,(b.g.b+e|0)-c.eU.b|0));}
var Fa=G(0);
function Wj(){var a=this;B.call(a);a.ju=0;a.pt=0;a.k$=0;a.hu=0;a.iW=null;}
function B8(a){return a.ju>=a.k$?0:1;}
function B9(a){var b,c;PY(a);b=a.ju;a.hu=b;c=a.iW;a.ju=b+1|0;return c.m8(b);}
function YD(a){var b,c,d;if(a.hu<0){b=new C4;X(b);N(b);}PY(a);a.iW.pu(a.hu);a.pt=a.iW.b1;c=a.hu;d=a.ju;if(c<d)a.ju=d-1|0;a.k$=a.k$-1|0;a.hu=(-1);}
function PY(a){var b;if(a.pt>=a.iW.b1)return;b=new H5;X(b);N(b);}
function K6(){var a=this;N5.call(a);a.we=null;a.yE=null;}
function AGi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.we;e=0;f=0;g=a.yE;a:{b:{while(true){if((e+32|0)>f&&D3(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cf(b)+k|0;h=j.length;f=Bd(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BF;c=new K;M(c);U(H(U(H(c,C(437)),l),C(99)),h);Bl(b,L(c));N(b);}if(Cf(b)<m){b=new NS;X(b);N(b);}if(m<0){b=new BF;c=new K;M(c);H(U(H(c,C(100)),m),C(101));Bl(b,L(c));N(b);}n=b.Y;h=n+b.mH|0;e=0;while(e<m){o=k+1|0;i=b.o9.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Y=n+m|0;e=0;}if(!D3(c)){p=!D3(b)&&e>=f?A5e:A5d;break a;}i=g.data;n=Cf(c);o=i.length;n=Bd(n,o);q=new ABb;q.sv=b;q.zy=c;p=AJ0(a,d,e,f,g,0,n,q);e=q.uS;if(p===null&&0==q.mc)p=A5e;k=q.mc;h=0;if(c.pz){b=new Ke;X(b);N(b);}if(Cf(c)<k)break;if(h>o){b=new BF;c=new K;M(c);BM(U(H(U(H(c,C(102)),h),C(96)),o),41);Bl(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BF;c=new K;M(c);U(H(U(H(c,C(104)),l),C(99)),o);Bl(b,L(c));N(b);}if(k<0){b=new BF;c=new K;M(c);H(U(H(c,C(100)),k),C(101));Bl(b,L(c));N(b);}o=c.Y;m=0;while(m
<k){l=o+1|0;n=h+1|0;Zp(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Y=c.Y+k|0;if(p!==null)break a;}b=new Jx;X(b);N(b);}b=new BF;c=new K;M(c);BM(U(H(U(H(c,C(102)),k),C(96)),h),41);Bl(b,L(c));N(b);}Fo(b,b.Y-(f-e|0)|0);return p;}
var Sk=G(K6);
function AJ0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(M_(h,2))break a;i=A5e;break a;}c=k+1|0;n=j[k];if(!Gm(a,n)){c=c+(-2)|0;i=Ek(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(M_(h,3))break a;i=A5e;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gm(a,n))break b;if(!Gm(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(N$(p)){c=k+(-3)|0;i=Ek(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ek(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(M_(h,4))break a;i=A5e;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cf(h.zy)<2?0:1)break a;i=A5d;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gm(a,n))break c;if(!Gm(a,o))break c;if(!Gm(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JH(r);m=c+1|0;j[c]=I3(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ek(1);break a;}c=k+(-3)|0;i
=Ek(1);}h.uS=c;h.mc=f;return i;}
function Gm(a,b){return (b&192)!=128?0:1;}
function ACe(){var a=this;B.call(a);a.BF=null;a.BG=null;a.BE=null;}
function UQ(){B.call(this);this.pZ=null;}
function ASf(a,b){var c,d;c=a.pZ;d=c.d7+1|0;c.d7=d;c=new K;M(c);H(H(U(c,d),C(438)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function PK(){B.call(this);this.pF=null;}
function AKU(a){return a.pF.gQ();}
function PJ(){B.call(this);this.An=null;}
function AMW(a){return a.An.gQ();}
function Ra(){B.call(this);this.s_=null;}
function AZ1(a){return a.s_.gQ();}
var WO=G();
function ATi(a){return Gq(1);}
function Zh(){B.call(this);this.sh=null;}
function A0Q(a,b){a.sh.j(HW(b));}
var AEN=G();
function ABF(){B.call(this);this.uo=null;}
function ANg(a,b){a.uo.h();}
var AIH=G();
var AFc=G();
function Wg(){B.call(this);this.tN=null;}
function AL5(a,b){var c,d,e,f;c=a.tN;d=Cu(b);e=new K;M(e);H(H(e,C(439)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new AAH;d.BI=c;d.r_=b;e=new AAJ;e.D3=c;c=AJK(e);e=new ABv;e.v9=d;d=b.fW;if(d!==null)d.arrayBuffer().then(Bu(e,"f"),Bu(c,"f"));else{b=b.h0.getFile();f=new ABx;f.zq=e;f.zr=c;b.then(Bu(f,"f"),Bu(c,"f"));}}
function Wf(){B.call(this);this.v7=null;}
function ARm(a,b){var c,d,e;c=a.v7;d=Cu(b);e=new K;M(e);H(H(e,C(440)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new Pf;d.A2=c;MY(b,d);}
function Hf(){var a=this;B.call(a);a.gg=null;a.kG=null;a.nW=null;a.ii=null;a.jp=0;a.iK=0;}
function A7o(a,b){var c=new Hf();Sc(c,a,b);return c;}
function Sc(a,b,c){a.ii=WX(b);a.jp=c;a.iK=0;}
function H_(a){return (JK(a.ii,0)).v;}
function Kj(a){a.iK=2;}
function IA(a){a.iK=1;}
function Eh(){Hf.call(this);this.eY=null;}
var A6p=null;var A7p=null;function AA6(a,b){var c=new Eh();NF(c,a,b);return c;}
function NF(a,b,c){Sc(a,b,c);a.eY=A6p;}
function A0J(a){return H_(a);}
function N2(a){return a.iK!=2?0:1;}
function AJO(a){var b,c,d;b=Q(Hf,ACY(a));c=b.data;if(Qs(a,b,0)==c.length)return b;d=new Bt;X(d);N(d);}
function I_(a){return a.eY.data.length;}
function ACY(a){var b,c,d,e;b=1;if(N2(a)){c=a.eY.data;d=c.length;e=0;while(e<d){b=b+ACY(c[e])|0;e=e+1|0;}}return b;}
function Ol(a){var b,c,d,e;b=1;c=a.eY.data;d=c.length;e=0;while(e<d){b=b+Ol(c[e])|0;e=e+1|0;}return b;}
function Qs(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(N2(a)){d=a.eY.data;c=d.length;f=0;while(f<c){e=Qs(d[f],b,e);f=f+1|0;}}return e;}
function AFk(){A6p=Q(Eh,0);A7p=new QP;}
function Rc(){B.call(this);this.zB=null;}
function AW$(a){Rd(a.zB);}
function Lb(){var a=this;Fg.call(a);a.f6=null;a.cf=null;a.eO=null;a.hx=null;a.gd=null;a.lq=null;a.zt=0;a.qq=0;a.nU=0;a.fZ=null;a.f0=null;}
function AQm(a){N6(a.hx);Xy(a.cf);ZS(a);}
function ZS(a){a.fZ=Cy(a.fZ,null);a.f0=Cy(a.f0,null);}
function JW(a,b){a.gd=b;if(!BT(a.lq,b.o1)){a.lq=b.o1;if(a.bN!==0.0)R9(a);}}
function ALa(a,b,c){Pr(a.cf,c);if(a.lq!==null)R9(a);}
function R9(a){var b,c,d,e,f;Sa(a.hx);b=a.cf;c=a.lq;d=a.bN;e=a.f6.bV;f=b.gL;b.cj=AHZ(c.jx,c.hV*d,c.lR,c.jR,f,e);RJ(a.cf,1.25,a.f6.bV);ZS(a);a.fZ=Cy(a.fZ,SF(a.cf,Ng(707),2,a.f6.bV));a.f0=Cy(a.f0,SF(a.cf,Ng(709),2,a.f6.bV));Oo(a);}
function Oo(a){var b;So(a,0,Bb(a.eO.fi.data.length,a.cf.dE));b=a.fK;if(b!==null)ABw(b);}
function AXr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;c=a.gd.bt.d_;d=a.i;Bs(b,d.a,d.b,a.k,c);BD(a.cf.cj);e=a.cf.dE;f=a.eO.fi.data.length;if(!f)return;g=Bd(f,H3(a.k.b,e)+7|0);h=a.hx;if(h.data.length<g)a.hx=Ys(g,h,a.cf,a.zt,a.qq,a.eO);Ne(b,a.i,a.k);i=a.V.b;j=f-1|0;k=AFg(i,e,j);i=AFg((a.V.b+a.k.b|0)-1|0,e,j);a.zt=k;a.qq=i;l=a.k.a;m=EE(a,15.0);n=EE(a,10.0);o=EE(a,8.0);p=Be(Cd(a.f0),Cd(a.fZ));g=n+p|0;while(k<=i){q=a.eO.fi.data[k];h=a.hx.data;n=k%h.length|0;r=h[n];WI(r,q.ii,b,e,l,0,k,n);s=Bb(e,k)-a.V.b
|0;t=null;u=m+Bb(g,q.jp)|0;v=a.nU!=k?0:1;if(v){V(a.f6.dx,a.k.a,e);d=a.i;Bs(b,d.a,d.b+s|0,a.f6.dx,a.gd.bt.hf);}a:{switch(q.iK){case 1:break;case 2:w=a.f0;break a;default:w=null;break a;}w=a.fZ;}if(w!==null){x=a.gd.lz.data[0];Cv(a.cf.i4,0.0,0.0,Cd(w),Dj(w));Cs(a.cf.hY,w.fl);d=a.cf;q=a.i;G5(d,b,w,q.a+u|0,q.b+s|0,x.h3,!v?c:a.gd.bt.hf);}d=a.i;PN(r,d.b+s|0,((d.a+u|0)+p|0)+o|0,b,l,e,0,a.gd,null,null,null,v,0,t);k=k+1|0;}F2(b);}
function AZ8(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cf.dE;f=((b.g.b-a.i.b|0)+a.V.b|0)/e|0;if(f>=0){g=a.eO.fi.data;if(f<g.length){h=g[f];if(!VH(a,b,f)){b=h.nW;if(b!==null)b.h();}}}}return 1;}
function AL8(a,b,c){var d,e,f,g;d=a.cf.dE;e=((b.g.b-a.i.b|0)+a.V.b|0)/d|0;if(!c&&e>=0){f=a.eO.fi.data;if(e<f.length){g=f[e];if(VH(a,b,e)){b=g.kG;if(b!==null)b.h();}else{a.nU=e;b=g.gg;if(b!==null)b.h();}}}return A5L;}
function VH(a,b,c){var d,e,f,g,h,i,j;d=a.eO.fi.data[c];e=EE(a,15.0);f=EE(a,10.0);g=Be(Cd(a.f0),Cd(a.fZ));h=e+Bb(f+g|0,d.jp)|0;i=(a.i.a-a.V.a|0)+h|0;j=i+g|0;c=b.g.a;return i<=c&&c<j?1:0;}
function AFg(b,c,d){return Bd(b/c|0,d);}
function AIi(){Lb.call(this);this.qG=null;}
function S6(a){var b=new AIi();AR2(b,a);return b;}
function AR2(a,b){Lx(a);a.eO=ALi(Q(Hf,0));a.hx=Q(Fj,0);a.nU=(-1);a.f6=b;a.cf=AOG(b.cw);}
function Ez(a){a.eO=ALi(AJO(a.qG));if(a.bN!==0.0)Oo(a);}
function EL(a,b){a.qG=b;Ez(a);}
function Jv(a,b){var c;c=a.gd.bt;I6(b,c.lc,c.lg);return b;}
function SC(){B.call(this);this.r9=null;}
function AR_(a){Ez(a.r9);}
function ACi(){B.call(this);this.yq=null;}
function AQc(a){var b;b=a.yq;Hv(b,b.cR.dj);}
function ACj(){B.call(this);this.Az=null;}
function AZB(a){var b;b=a.Az;Hv(b,b.cR.di);}
function Z$(){B.call(this);this.qv=null;}
function AKg(a){Ez(a.qv);}
function Z_(){B.call(this);this.sm=null;}
function ANC(a){Ez(a.sm);}
function AF5(){var a=this;B.call(a);a.i2=null;a.m4=0;a.fS=0;}
function AUw(){var a=new AF5();ASR(a);return a;}
function ASR(a){a.m4=0;a.i2=BN(16);a.fS=0;}
function GT(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.i2;d=c.data.length;if(d==a.fS)a.i2=I9(c,d*2|0);c=a.i2.data;d=a.fS;a.fS=d+1|0;c[d]=b;}
function Qq(a){var b,c,d,e,f;b=a.m4;if(b&&a.fS!=b){c=ED();b=a.m4;d=a.fS;e=new K;M(e);H(U(H(U(H(e,C(441)),b),C(442)),d),C(443));Bm(c,L(e));}f=a.i2;b=f.data.length;d=a.fS;if(b!=d)f=I9(f,d);return f;}
function R1(){var a=this;D9.call(a);a.gq=0;a.dX=null;a.lB=0;a.wB=0.0;a.oV=0;}
function AJF(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function TH(a){a.oV=a.dX.data.length*a.wB|0;}
function ABN(a,b){return US(a,b)===null?0:1;}
function N4(a,b){var c;c=US(a,b);if(c===null)return null;return c.cM;}
function US(a,b){var c,d;if(b===null)c=Yk(a);else{d=Mk(b);c=Wi(a,b,d&(a.dX.data.length-1|0),d);}return c;}
function Wi(a,b,c,d){var e;e=a.dX.data[c];while(e!==null&&!(e.mZ==d&&(b!==e.cQ?0:1))){e=e.h5;}return e;}
function Yk(a){var b;b=a.dX.data[0];while(b!==null&&b.cQ!==null){b=b.h5;}return b;}
function ABR(a,b,c,d){var e,f;e=new Jr;Vb(e,b,null);e.mZ=d;f=a.dX.data;e.h5=f[c];f[c]=e;return e;}
function V9(a){var b,c,d,e,f,g,h,i;b=a.dX.data.length;b=AJF(!b?1:b<<1);c=Q(Jr,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dX.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.mZ&f;i=h.h5;h.h5=d[b];d[b]=h;h=i;}e=e+1|0;}a.dX=c;TH(a);}
function TV(){var a=this;B.call(a);a.dw=null;a.lW=null;a.r5=null;}
function OQ(a,b){var c;if(!(b instanceof L2)){Bq(a.dw,3);ACv(a,b);Bq(a.dw,b.i7);}else{c=b;Bq(a.dw,5);ACv(a,c);Bq(a.dw,c.i7);Bq(a.dw,c.vs);b=c.kv;Bq(a.dw,b.m);c=new VR;c.qt=a;Fl(b,c);}}
function ACv(a,b){var c;c=b.eu.jf;GT(a.dw,a.lW.K,J(c));Bq(a.dw,b.eu.dB);Op(a,b.lF);BV(a.lW,c);}
function Op(a,b){if(b===null)Bq(a.dw,(-1));else Bq(a.dw,(Cn(a.r5,b)).bp);}
function TE(){var a=this;B.call(a);a.cU=null;a.mF=null;a.rm=null;}
function G7(a,b){var c,d,e;if(b instanceof HA){c=b;Bq(a.cU,9);XV(a,c.g$);}else if(b instanceof J3){d=b;Bq(a.cU,3);Ym(a,d);Bq(a.cU,d.pV);XV(a,d.hP);}else if(b instanceof Jb){e=b;Bq(a.cU,4);G7(a,e.jq);G7(a,e.iO);}else if(b===null)Bq(a.cU,(-1));else{Bq(a.cU,5);Ym(a,b);Bq(a.cU,b.yu);}}
function Ym(a,b){var c;c=b.fE.jf;GT(a.cU,a.mF.K,J(c));Bq(a.cU,b.fE.dB);b=b.gp;if(b===null)Bq(a.cU,(-1));else Bq(a.cU,(Cn(a.rm,b)).bp);BV(a.mF,c);}
function XV(a,b){var c;Bq(a.cU,b.m);c=new Vf;c.v8=a;Fl(b,c);}
function XE(){var a=this;B.call(a);a.yX=0;a.yY=0;}
function R_(){B.call(this);this.rE=null;}
function ARo(a,b){var c;c=a.rE;DC(c,b);MK(c,null);UP(c);}
var XO=G(Ei);
var A7q=null;function AHC(){A7q=F($rt_doublecls());}
var JV=G();
var A7r=Fz;var A7s=null;var A7t=null;function AES(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.qj=Iy(Db(d,D(0, 2147483648)),Fz)?0:1;e=Db(d,D(4294967295, 1048575));f=GF(A3g(d,52))&2047;if(Iy(e,Fz)&&!f){c.mV=Fz;c.ma=0;return;}if(f)e=A1X(e,D(0, 1048576));else{e=HI(e,1);while(Iy(Db(e,D(0, 1048576)),Fz)){e=HI(e,1);f=f+(-1)|0;}}g=A7t.data;h=f<<16>>16;i=0;j=g.length;k=BK(i,j);if(k>0){c=new BS;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BK(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IJ(e,A7s.data[h],i);if(AMy(m,A7r)){while(DA(m,A7r)<=0){j=j+(-1)|0;m=CO(Cg(m,Bp(10)),Bp(9));}g=A7t.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IJ(e,A7s.data[h],i);}e=HI(e,1);d=CO(e,Bp(1));g=A7s.data;h=j+1|0;n=g[h];f=i-1|0;n=IJ(d,n,f);o=IJ(JD(e,Bp(1)),A7s.data[h],f);p=Bp(1);while(true){q=Cg(p,Bp(10));if(DA(Da(m,q),Da(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Cg(r,Bp(10));if(DA(Da(m,s),Da(n,s))>=0)break;r=s;}h=DA(p,r);e=h>0?Cg(Da(m,p),p):h<0?CO(Cg(Da(m,r),r),r):Cg(Da(CO(m,AFK(r,Bp(2))),r),r);if(DA(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Da(e,Bp(10));if(DA(e,D(2808348672, 232830643))<0)break;}else if(DA(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cg(e,Bp(10));}c.mV=e;c.ma=j-330|0;}
function IJ(b,c,d){var e,f,g,h,i,j,k,l;e=Db(b,Bp(65535));f=Db(F3(b,16),Bp(65535));g=Db(F3(b,32),Bp(65535));h=Db(F3(b,48),Bp(65535));i=Db(c,Bp(65535));j=Db(F3(c,16),Bp(65535));k=Db(F3(c,32),Bp(65535));l=Db(F3(c,48),Bp(65535));return CO(CO(CO(HI(Cg(l,h),32+d|0),HI(CO(Cg(l,g),Cg(k,h)),16+d|0)),HI(CO(CO(Cg(l,f),Cg(k,g)),Cg(j,h)),d)),F3(CO(CO(CO(Cg(k,e),Cg(j,f)),Cg(i,g)),HI(CO(CO(CO(Cg(l,e),Cg(k,f)),Cg(j,g)),Cg(i,h)),16)),32-d|0));}
function AEE(){A7r=Da(Bp(-1),Bp(10));A7s=AHx([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A7t=A2K([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Te(){B.call(this);this.qT=null;}
function AKT(a){G8(a.qT,37,3);}
function Tf(){B.call(this);this.rq=null;}
function AMS(a){G8(a.rq,40,3);}
function Tg(){B.call(this);this.sC=null;}
function A0y(a){G8(a.sC,42,3);}
function Th(){B.call(this);this.wh=null;}
function AO3(a){G8(a.wh,45,3);}
function Ti(){B.call(this);this.wK=null;}
function AQ7(a){G8(a.wK,45,5);}
function Ov(){B.call(this);this.yS=null;}
function A1x(a,b){var c,d;c=a.yS;d=new Bt;Bl(d,$rt_str(b.message));c.j(d);}
var UT=G(0);
var A42=null;function A2u(){A2u=Bn(UT);AYx();}
function AYx(){A42=new $rt_globals.TextDecoder("utf-16");}
function O$(){CD.call(this);this.zE=null;}
function AKJ(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.zE);}
function AE5(){var a=this;B.call(a);a.mW=null;a.fN=null;}
function AKP(a,b){var c=new AE5();ALW(c,a,b);return c;}
function ALW(a,b,c){a.mW=b;a.fN=c;}
function ARF(a){return a.fN.V.b/Mi(a)|0;}
function A0h(a){var b;b=a.fN;return H3((b.V.b+b.k.b|0)-1|0,Mi(a));}
function ASu(a,b){var c;b=Bb(b,Mi(a));c=a.fN;return (b+c.i.b|0)-c.V.b|0;}
function AOB(a){return a.fN.i;}
function AT0(a){return a.fN.k;}
function AO$(a,b,c){var d;d=a.mW;d.td=b;d.qu=c;}
function AXF(a,b){return ABY(a.mW,b);}
function Mi(a){return a.fN.cf.dE;}
function AAU(){var a=this;B.call(a);a.sr=0;a.AN=0;}
function FM(a,b){var c;c=a.AN;if(c<=0)return 0;return X1(a.sr,b,c);}
var SX=G(0);
var A5G=null;function ANT(){ANT=Bn(SX);ASz();}
function ASz(){A5G=S(C(271));}
var QP=G();
function ASI(a,b,c){b=b;c=c;return ACt(H_(b),H_(c));}
function AJV(){GQ.call(this);this.fi=null;}
function ALi(a){var b=new AJV();AMG(b,a);return b;}
function AMG(a,b){a.fi=b;}
function A1j(a,b){return a.fi.data[b].ii;}
function U8(){B.call(this);this.xu=null;}
function AV7(a){var b,c,d;b=a.xu;c=Bx();d=H_(b);b=new K;M(b);H(H(b,C(444)),d);Bm(c,L(b));}
function Qp(){B.call(this);this.pU=null;}
function AY4(a,b){JY(a.pU,b);}
function Qo(){B.call(this);this.AA=null;}
function AVg(a){return a.AA.rl;}
function Rn(){B.call(this);this.sU=null;}
function AWk(a){L6(a.sU);}
var D_=G(Bt);
function Wn(){var a=this;B.call(a);a.pM=null;a.xo=null;a.tX=0;a.uP=0;}
function NP(a,b){return Cf(a.xo)<b?0:1;}
function ABp(){B.call(this);this.vj=null;}
function ALr(a,b){L7(a.vj,b);}
var AGb=G();
function ADD(b){$rt_globals.console.info("JsFileDialog: "+b);}
function ADv(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(El()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new SG;d.addEventListener("change",Bu(e,"handleEvent"));d.click();}
function Se(){var a=this;B.call(a);a.bu=null;a.qL=null;a.iQ=null;a.nM=null;a.lP=null;a.f_=null;}
function HM(a){return a.bu.cG.hh;}
function Vk(a){var b;b=new RZ;b.Ab=a;return b;}
function AH$(a){var b,c,d,e,f;b=Q(B1,5);c=b.data;d=a.bu;BD(d);e=new U4;e.yv=d;c[0]=C3(C(445),e);e=a.bu;BD(e);f=new UZ;f.v$=e;c[1]=C3(C(446),f);d=a.bu;BD(d);e=new U0;e.wN=d;c[2]=C3(C(447),e);d=a.bu;BD(d);e=new U1;e.uE=d;c[3]=C3(C(448),e);d=a.bu;BD(d);e=new U2;e.pR=d;c[4]=C3(C(449),e);return Du(b);}
function PX(a,b){var c;c=new Pe;c.u0=a;c.u1=b;return c;}
function Kt(a,b,c){var d,e,f,g,h,i,j,k,l;a:{EC(a.f_.b7);d=a.bu.d;e=Eq(d);f=Hu(d);g=a.bu.fj;if(c===null)h=null;else{A3y();switch(A7u.data[c.fC]){case 1:h=N7(g,e,f);break a;case 2:h=Yp(g,e,f);break a;default:}b=new EX;X(b);N(b);}}c=a.bu;e=Fp(c,b);g=IY(c.d.f,e.bq,e.bv);f=R6(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new AAa;e.D9=c;e.D8=b;e.D7=f;h.sI(g,i,j,e,c.jE);}else{e=Cn(c.d.f.dK,g);if(e!==null)IL(c,e);else{e=Cn(c.d.f.dA,g);if(e!==null&&!Eu(e))YC(c.kk,b,e,c,f);else{c=c.kk;k=Q(B1,1);l=k.data;e=new B1;f=c.b7;BD(f);g
=new ABr;g.v3=f;C7(e,g,C(450));l[0]=e;K4(c,b,Du(k));}}}}
var ADS=G(0);
function AB0(){var a=this;B.call(a);a.vF=null;a.vE=null;}
function ASG(a){FD(a.vF,a.vE);}
var XG=G();
var A7v=null;function ABc(b,c,d){QQ(b,c,d,0);}
function QQ(b,c,d,e){WE(b,c,d,null,null,e);}
function WE(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=LR(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CI(b);c=b.A;if(c.data.length<i)b.A=AD_(c,i);m=0;while(m<i){if(g&&m<l){n=4*Ba(h)|0;h.e3=h.e3+n|0;}else b.A.data[m]=D0(Ye(h,d,0));m=m+1|0;}MS(b);if(j)b.dc=AFQ(AGE(h));Fq(b.dK);Fq(b.dA);o=b.dK;g=0;while(g<k){Ef(o,DL(Ba(h),Ba(h)),DL(Ba(h),Ba(h)));g=g+1|0;}p=b.dK;o=b.dA;q=WH(ABa(p));while(F9(q)){r=ACT(q);s=r.cQ;p=r.cM;BD(A7v);r=Cn(o,p);if(r===null){r=BH();Ef(o,p,r);}BC(r,s);}if(o.op===null){p=new P2;p.uZ=o;o.op=p;}p=o.op;r=new YL;Nr(r,
p.uZ);while(F9(r)){ND(r);o=r.gT.cM;p=A4w;c=Q(B,o.m);d=c.data;Gb(o,c);KP(c,p);g=0;t=d.length;while(g<t){p=d[g];Kl(o,g);o.cE.data[g]=p;g=g+1|0;}}QJ(h);if(e!==null&&f!==null){p=APt(e,f);Pp(p);b.eS=AUU(p.oE,p.iy);b.dc=AFQ(p.o3);}}
function Vy(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=LR(c);i=Ba(h);j=Ba(h);k=Ba(h)!=1?0:1;l=Ba(h);m=Ba(h);n=ACs(b,i);o=ACs(b,j);p=(IH(Ca(b,n.a),n.b)).data[0].s;q=(IH(Ca(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Ye(h,d,i);if(!r)g=I0(p,g);if(r==s)g=I0(g,q);t=n.a+r|0;u=D0(g);c=b.A.data;v=c[t];c[t]=u;if(!k&&Jg(v)==Jg(u)){t=0;while(t<Jg(v)){o=v.s.data[t];w=u.s.data[t];x=o.bX;y=x!=5?0:1;if(!y&&x&&!w.bX){w.bX=x;w.bE=o.bE;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AGE(h);w=KF(i,j,(-1));Wr(b.dc,w,u);}else if(e!==null&&f!==null){v=APt(e,f);Pp(v);w=KF(i,j,(-1));Wr(b.dc,w,v.o3);n=b.eS;n.fn=b.dc.db.ci;n.e0=v.iy;}}QJ(h);}
function Ye(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=Q(Ct,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=D7(Et(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AJf(){A7v=new UE;}
var Yt=G(0);
var OZ=G(0);
var H7=G();
function Zk(){H7.call(this);this.y6=null;}
function AAZ(a,b){var c,d,e;c=0;while(true){d=a.y6;if(d.jL===null)d.jL=B4(d.w2);if(!B8(d.jL))e=0;else{c=b.L(B9(d.jL));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var QI=G(0);
function Ou(){var a=this;B.call(a);a.BL=null;a.BM=null;a.BJ=0;a.BK=0;}
var ACG=G();
function ALb(a,b){b=b;b.cL=Cy(b.cL,null);}
var AEV=G(0);
function AHZ(b,c,d,e,f,g){f=f.data;f[Jc(0,0)]=HY(g,b,c,d,0);f[Jc(0,1)]=HY(g,b,c,d,2);f[Jc(1,0)]=HY(g,b,c,e,0);f[Jc(1,1)]=HY(g,b,c,e,2);return f[Jc(0,0)];}
function Jr(){var a=this;GM.call(a);a.mZ=0;a.h5=null;}
var H5=G(Bt);
function ABg(){B.call(this);this.uc=null;}
function ARE(a,b){var c,d,e,f;c=a.uc;EC(c.c6.f$.b7);d=Bx();e=Cu(b);f=new K;M(f);H(H(f,C(451)),e);Bm(d,L(f));d=ARl(b,c);EL(c.c6.ga,d);b=LJ(b.iT,Fm(I$(b),C(452)));FJ(c.gZ,b);}
var ACP=G();
function AZj(a,b){ADD(b);}
function ACO(){B.call(this);this.rR=null;}
function AVe(a,b){var c,d,e;c=a.rR;d=0;e=b.length;while(d<e){c.j(AI0(b[d],null));d=d+1|0;}}
var ACg=G();
function AV2(a,b){ADD(b);}
function ACf(){var a=this;B.call(a);a.ru=null;a.rv=null;}
function AWw(a,b){var c,d,e;c=a.ru;d=a.rv;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.j(A2A(b,d,Q(BL,0)));}
function AJb(){var a=this;B.call(a);a.ib=null;a.e3=0;}
function LR(a){var b=new AJb();ATo(b,a);return b;}
function ATo(a,b){a.ib=b;a.e3=0;}
function Ba(a){var b,c;b=a.ib.data;c=a.e3;a.e3=c+1|0;return b[c];}
function QJ(a){var b,c,d,e;if(a.e3!=a.ib.data.length){b=ED();c=a.ib.data.length;d=a.e3;e=new K;M(e);H(U(H(U(H(e,C(441)),c),C(453)),d),C(454));Bm(b,L(e));}}
function AAV(){var a=this;B.call(a);a.uj=null;a.ug=null;a.uh=null;}
function AOJ(a,b,c,d){var e,f;b=a.uj;e=a.ug;f=a.uh;AAi(b,e);if(f!==null)d.mm.h();if(AA_(d)){if(d.m5===null)WQ(b,AH6(d,e),d.j0,e);else Ux(b,AH6(d,e),d.j0,e,d.m5);}}
function Qx(){var a=this;B.call(a);a.B3=null;a.sX=0;}
function AUc(a,b){var c,d,e,f;c=a.sX;d=(CN(KR(b,0))).data;b=Bx();e=d[0];f=new K;M(f);U(H(U(H(f,C(455)),c),C(456)),e);Bm(b,L(f));b=Bx();e=d[1];f=new K;M(f);U(H(U(H(f,C(455)),c),C(457)),e);Bm(b,L(f));}
function ADy(){B.call(this);this.NI=null;}
function UU(){var a=this;B.call(a);a.tM=null;a.tL=null;}
function ALl(a,b){var c,d,e,f,g;c=a.tM;d=a.tL;e=Bx();f=KG(b);g=new K;M(g);H(H(g,C(458)),f);Bm(e,L(g));e=new AC$;e.CU=c;e.nD=d;EL(d,ARl(b,e));}
var SG=G();
function ATJ(a,b){}
var UE=G();
var FE=G();
var A7w=null;var A7x=null;var A5T=null;var A7y=null;var A7z=null;var A7A=null;function AIP(){A7w=new Tx;A7x=new Tu;A5T=new Tv;A7y=new Ts;A7z=new Tt;A7A=new Vn;}
function AHk(){var a=this;B.call(a);a.oE=null;a.o3=null;a.iy=null;a.cy=null;a.n9=null;a.mB=null;a.iP=null;a.m$=null;a.oY=null;}
function APt(a,b){var c=new AHk();A0i(c,a,b);return c;}
function A0i(a,b,c){a.cy=LR(b);a.n9=c;}
function Pp(a){var b,c,d,e,f,g,h,i;b=Ba(a.cy);c=new Nq;Qf(c);a.iy=c;a.iP=BH();d=0;while(d<b){e=Ba(a.cy);f=Ba(a.cy);g=Et(a.n9,e,f);Ef(a.iy,g,BH());BC(a.iP,g);d=d+1|0;}c=WH(ABa(a.iy));while(F9(c)){HU((ACT(c)).cM,OU(a));}d=Ba(a.cy);if(d==(-1))a.oE=null;else{a.mB=Q(FQ,d);c=new VG;h=a.cy;i=a.n9;g=a.iP;c.dL=h;c.x1=i;c.xv=g;a.m$=c;c=new Q3;c.el=h;c.zD=i;c.zS=g;a.oY=c;a.oE=QR(a,null);}if(Ba(a.cy)!=(-1))a.o3=YH(a.cy,a.mB);}
function QR(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cy);d=Ba(a.cy);e=a.m$;f=Ba(e.dL);g=BH();h=0;while(h<f){BC(g,OA(e));h=h+1|0;}a:{switch(d){case -1:i=new Np;i.g1=b;b=A5T;i.cH=b;i.fo=b;i.eL=b;i.kW=b;i.hq=b;break a;case 0:i=A2M(b);break a;case 1:i=new K2;AFa(i,b);HU(i.eL,g);break a;default:}b=new C4;i=new K;M(i);U(H(i,C(459)),d);Bl(b,L(i));N(b);}i.eL=g;b=a.oY;d=Ba(b.el);e=BH();j=0;while(j<d){BC(e,Hk(b));j=j+1|0;}i.fo=e;i.kW=OU(a);d=Ba(a.cy);b=BH();j=0;while(j<d){e=OA(a.m$);g=Hk(a.oY);f=Ba(a.cy);k=new Qg;k.kY=e;k.km
=g;k.q6=f;BC(b,k);j=j+1|0;}i.hq=b;j=Ba(a.cy);i.tr=j==(-1)?null:Bw(a.iP,j);d=Ba(a.cy);b=BH();j=0;while(j<d){BC(b,QR(a,i));j=j+1|0;}i.cH=b;a.mB.data[c]=i;return i;}
function OU(a){var b,c,d,e;b=Ba(a.cy);c=BH();d=0;while(d<b){e=Ba(a.cy);BC(c,Bw(a.iP,e));d=d+1|0;}return c;}
function ADZ(){var a=this;B.call(a);a.lv=null;a.oT=null;}
function AJ$(){var a=this;B.call(a);a.Dr=0;a.CA=0;a.qY=0;a.mJ=0;}
function ACA(){var a=this;B.call(a);a.rJ=null;a.rK=null;}
function AT1(a){var b,c,d,e,f,g;b=a.rJ;c=a.rK;if(BT(c.lv,b.d.fY)){c=c.oT;CL(b,c.mJ,c.qY,0);Cc((Bi(b)).bK,c.mJ,c.qY);Cc((Bi(b)).bA,c.CA,c.Dr);}else{d=(Cz(b.fj.zv)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){FF(b);b=new WJ;b.xj=g;b.xk=c;BD(b);c=new X5;c.vd=b;$rt_globals.setTimeout(Bu(c,"onTimer"),0);}}}
function ACB(){var a=this;B.call(a);a.z_=null;a.z$=null;}
function AWj(a){IL(a.z_,a.z$);}
function FQ(){var a=this;B.call(a);a.g1=null;a.cH=null;a.fo=null;a.eL=null;a.hq=null;a.kW=null;a.tr=null;}
function A2M(a){var b=new FQ();AFa(b,a);return b;}
function AFa(a,b){a.g1=b;a.cH=BH();a.fo=BH();a.eL=BH();a.kW=BH();a.hq=BH();}
function ACV(a){var b;b=a.g1;if(b!==null)b.cH.qg(a);}
function U6(){B.call(this);this.rn=null;}
function ANm(a,b){b=b;YO(a.rn,b);}
var Np=G(FQ);
var K2=G(FQ);
function T8(){B.call(this);this.zC=null;}
function AT4(a,b){var c;b=b;c=a.zC;Bq(c.bx,(Cn(c.fJ,b)).bp);}
function Qg(){var a=this;B.call(a);a.kY=null;a.km=null;a.q6=0;}
function PO(){B.call(this);this.pN=null;}
function AXs(a,b){b=b;Zs(a.pN,b);}
var PS=G(0);
var Fn=G(Fu);
var M5=G(Fn);
var Tx=G(M5);
var NK=G(D9);
var Tu=G(NK);
var NY=G(Fh);
function AU$(a){var b;b=new D_;X(b);N(b);}
function APi(a,b){var c;c=new D_;X(c);N(c);}
function AOn(a,b){b=new D_;X(b);N(b);}
var Tv=G(NY);
function APp(a,b){var c;c=new BF;X(c);N(c);}
function AOE(a){return 0;}
function AMx(a){return A7y;}
function AKY(a){return 1;}
var Ts=G();
function AKH(a){return 0;}
function AYe(a){var b;b=new Md;X(b);N(b);}
function ARd(a){var b;b=new C4;X(b);N(b);}
var XD=G(0);
var Tt=G();
var Vn=G();
function QH(){var a=this;B.call(a);a.mg=0;a.rB=null;}
function A1z(a,b){var c,d,e;c=a.rB;b=b;d=c.yX;e=c.yY;d=b.a<=d&&e<=b.b?1:0;a.mg=d;return d?0:1;}
var Ke=G(D_);
var Jx=G(Bt);
var NS=G(Bt);
function Xx(){B.call(this);this.xZ=null;}
function AYf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.xZ;d=CN(c[0]);e=(CN(c[1])).data[0];if(!AAu(b.f)){c=b.f;if(c.cn==e){e=b.pK;f=LR(d);Fq(c.dK);Fq(c.dA);MS(c);while(f.e3>=f.ib.data.length?0:1){if(Ba(f)==(-1))continue;g=UW(c,Ba(f));h=NX(Ca(c,g.bq),g.bv);if(Ba(f)==(-1)){if(!e)continue;h.bX=0;h.bE=h.bE|4;continue;}i=UW(c,Ba(f));j=Ba(f);k=Ba(f);Ef(c.dK,g,i);l=c.dA;m=BH();if(Cn(l,i)===null)Ef(l,i,m);BC(Cn(c.dA,i),g);h.bX=j;h.bE=k;}Lk(b);if(b.Du){n=JD(EW(),b.zL);if(A1T(n,Bp(100))){b=EU(b);c=new K;M(c);H(HD(H(H(c,
b),C(460)),n),C(239));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AGQ(){B.call(this);this.PL=null;}
function Qw(){var a=this;B.call(a);a.w2=null;a.jL=null;}
function Zy(){var a=this;B.call(a);a.p0=null;a.p1=null;}
function AT2(a){var b,c;b=a.p0;c=a.p1;FD(b.b7.dI,c);Z6(b);}
function SJ(){var a=this;B.call(a);a.pE=null;a.pD=null;}
function AVH(a){var b,c;b=a.pE;c=a.pD;if(!N2(b))Kj(b);else IA(b);c.h();}
function G1(){var a=this;B.call(a);a.ea=0;a.eN=0;a.oL=null;a.nv=0;a.gB=null;}
function ARL(a,b,c,d,e,f){var g=new G1();AW6(g,a,b,c,d,e,f);return g;}
function AW6(a,b,c,d,e,f,g){a.ea=b;a.eN=c;a.oL=BJ(f,g);a.nv=d;a.gB=e;}
function P1(){Fn.call(this);this.iX=null;}
function RO(a){var b;b=new ZF;Nr(b,a.iX);return b;}
function S0(){Fn.call(this);this.xT=null;}
function WH(a){var b;b=new SS;Nr(b,a.xT);return b;}
function P2(){Fu.call(this);this.uZ=null;}
function Vq(){B.call(this);this.uO=null;}
function AVy(a,b){b=b;OQ(a.uO,b);}
function Tj(){B.call(this);this.tv=null;}
function AW_(a,b){b=b;G7(a.tv,b);}
function Ki(){var a=this;B.call(a);a.eu=null;a.lF=null;a.i7=0;}
function A2q(a,b,c){var d=new Ki();AFE(d,a,b,c);return d;}
function AFE(a,b,c,d){a.eu=b;a.lF=c;a.i7=d;}
function AIR(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BT(a.eu,c.eu)&&BT(a.lF,c.lF)&&BT(CU(a.i7),CU(c.i7))?1:0;}return 0;}
function L2(){var a=this;Ki.call(a);a.kv=null;a.vs=0;}
function AUn(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AIR(a,b))return 0;c=b;return BT(a.kv,c.kv);}return 0;}
function E1(){var a=this;B.call(a);a.fE=null;a.gp=null;a.yu=0;}
function A1S(a,b,c){var d=new E1();NA(d,a,b,c);return d;}
function NA(a,b,c,d){a.fE=b;a.gp=c;a.yu=d;}
function AHn(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BT(a.fE,c.fE)&&BT(a.gp,c.gp)?1:0;}return 0;}
function HA(){E1.call(this);this.g$=null;}
function J3(){var a=this;E1.call(a);a.hP=null;a.pV=0;}
function A0D(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AHn(a,b))return 0;c=b;return BT(a.hP,c.hP);}return 0;}
function Jb(){var a=this;E1.call(a);a.jq=null;a.iO=null;}
function ATN(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BT(a.jq,c.jq)&&BT(a.iO,c.iO)?1:0;}return 0;}
function AEr(){var a=this;H7.call(a);a.O3=null;a.Qj=0;a.IH=0;a.G6=0;}
function Rr(){var a=this;B.call(a);a.vP=null;a.vQ=null;}
function ANS(a){var b,c;b=a.vP;c=a.vQ;RW();Kt(b,c,A7B);}
function Rs(){var a=this;B.call(a);a.xC=null;a.xD=null;}
function ALR(a){var b,c;b=a.xC;c=a.xD;RW();Kt(b,c,A7C);}
function Rp(){var a=this;B.call(a);a.t_=null;a.t$=null;}
function AK2(a){Kt(a.t_,a.t$,null);}
function Rq(){var a=this;B.call(a);a.pO=null;a.pQ=null;}
function ANM(a){var b,c,d,e,f,g,h;b=a.pO;c=a.pQ;d=Eq(b.bu.d);e=Hu(b.bu.d);d=AAK(b.bu.fj,d,e);EC(b.f_.b7);b=b.bu;e=Fp(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new AA1;e.CG=b;e.CH=c;d.IN(f,g,h,1,e,b.jE);}}
function QY(){B.call(this);this.q$=null;}
function AYM(a){var b;b=a.q$;EC(b.f_.b7);G6(b.bu,Vk(b),0);}
function QX(){B.call(this);this.z7=null;}
function AXZ(a){var b;b=a.z7;EC(b.f_.b7);G6(b.bu,Vk(b),1);}
function QW(){B.call(this);this.yy=null;}
function AS8(a){var b,c,d;b=a.yy;EC(b.f_.b7);c=HM(b);b=b.bu;BD(b);d=new ADe;d.xa=b;Q2(c,d,AD8(C(461)));}
function PU(){var a=this;B.call(a);a.vN=null;a.vO=null;}
function APV(a){var b,c;b=a.vN;c=a.vO;b=b.bu.d;b.pb=c;I7(b);}
var Qv=G(0);
var A5H=null;function AJd(){A5H=new SP;}
function X0(){B.call(this);this.u6=null;}
function ALH(a){var b,c,d;b=a.u6;EC(b.f_.b7);c=HM(b);b=b.bu;BD(b);d=new Q$;d.s9=b;NT(c,d);}
function Sq(){B.call(this);this.tP=null;}
function ANl(a,b,c){var d,e;c=a.tP;d=c.d.f;e=b.bp;b=c.fg;Zg(d.A.data[e],0,b);}
function VG(){var a=this;B.call(a);a.dL=null;a.x1=null;a.xv=null;}
function OA(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.dL);switch(b){case 3:break;case 5:c=Pj(a);d=NN(a);b=Ba(a.dL);e=Ba(a.dL);f=Ba(a.dL);g=BH();h=0;while(h<f){BC(g,NN(a));h=h+1|0;}i=new L2;AFE(i,c,d,b);i.kv=g;i.vs=e;break a;default:c=new C4;d=new K;M(d);U(H(d,C(462)),b);Bl(c,L(d));N(c);}i=A2q(Pj(a),NN(a),Ba(a.dL));}return i;}
function Pj(a){var b,c;b=Ba(a.dL);c=Ba(a.dL);return AVZ(Et(a.x1,b,c),Ba(a.dL));}
function NN(a){var b;b=Ba(a.dL);if(b==(-1))return null;return Bw(a.xv,b);}
function Q3(){var a=this;B.call(a);a.el=null;a.zD=null;a.zS=null;}
function Hk(a){var b,c,d,e,f;a:{b:{b=Ba(a.el);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=V8(a);d=Qk(a);b=Ba(a.el);e=RR(a);f=new J3;NA(f,c,d,2);f.pV=b;f.hP=e;break a;case 4:c=Hk(a);d=Hk(a);f=new Jb;NA(f,c.fE,c.gp,9);f.jq=c;f.iO=d;break a;case 5:f=A1S(V8(a),Qk(a),Ba(a.el));break a;case 9:c=RR(a);f=new HA;d=!Eu(c)&&Bw(c,0)!==null?(Bw(c,0)).gp:null;NA(f,null,null,7);f.g$=BH();c=B4(c);while(B8(c)){e=B9(c);if(!(e instanceof HA))BC(f.g$,e);else{e=e;HU(f.g$,e.g$);}}f.gp=d;break a;default:break b;}f
=null;break a;}c=new C4;d=new K;M(d);U(H(d,C(463)),b);Bl(c,L(d));N(c);}return f;}
function V8(a){var b,c;b=Ba(a.el);c=Ba(a.el);return AVZ(Et(a.zD,b,c),Ba(a.el));}
function Qk(a){var b;b=Ba(a.el);if(b==(-1))return null;return Bw(a.zS,b);}
function RR(a){var b,c,d;b=Ba(a.el);c=BH();d=0;while(d<b){BC(c,Hk(a));d=d+1|0;}return c;}
function Rk(){var a=this;B.call(a);a.p_=null;a.p9=0;a.p$=0;a.p7=null;a.p8=0;a.p6=0;}
function AQt(a,b){var c,d,e,f,g,h,i,j;c=a.p_;d=a.p9;e=a.p$;f=a.p7;g=a.p8;h=a.p6;i=CE(c.bo,5.0);d=Bd((c.bo.b2.a-d|0)-i|0,Be((i-d|0)-c.Q.k.a|0,b.g.a));j=Bd((c.bo.b2.b-e|0)-i|0,Be((i-e|0)-c.Q.k.b|0,b.g.b));V(f,d+g|0,j+h|0);ES(c,f,c.U.k);}
function Wt(){var a=this;B.call(a);a.zn=null;a.zo=null;a.zl=null;a.zm=0;a.zj=0;a.zk=0;a.zh=0;a.zi=0;a.zf=0;a.zg=0;a.tD=0;}
function AUV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.zn;d=a.zo;e=a.zl;f=a.zm;g=a.zj;h=a.zk;i=a.zh;j=a.zi;k=a.zf;l=a.zg;m=a.tD;n=CE(c.bo,5.0);o=c.U.hv();Cs(d,c.U.k);Cs(e,c.U.i);switch(f){case -1:f=Bd(h+(b.g.a-g|0)|0,c.bo.b2.a-n|0);g=o.a;h=h+i|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Be((i+b.g.a|0)-g|0,Be(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Be(n,Bd(l+(b.g.b-k|0)|0,(c.bo.b2.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Be((m+b.g.b|0)-k|0,o.b);}ES(c,e,d);}
function T1(){var a=this;B.call(a);a.ww=null;a.wv=0.0;}
function M$(a,b){return Ld(a.ww,b,a.wv*2.0+0.875);}
var ACa=G(BF);
function OS(){B.call(this);this.qZ=null;}
function AWG(a){AGz(a.qZ);}
function OT(){B.call(this);this.ry=null;}
function AZ6(a){Hj(a.ry);}
function OR(){B.call(this);this.u4=null;}
function ATb(a){AHi(a.u4);}
function Um(){B.call(this);this.xw=null;}
function AOV(a){a.xw.Ak();}
function Ul(){B.call(this);this.tU=null;}
function AY3(a){a.tU.u5();}
function Xm(){B.call(this);this.qw=null;}
function AMj(a){var b,c,d,e,f,g,h,i;b=a.qw;c=(b.qL.cV()).data;d=Q(B1,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new VX;i.wZ=b;i.wY=h;e[f]=Wk(i,h);f=f+1|0;}return d;}
function Zn(){B.call(this);this.wk=null;}
function AN0(a){a.wk.nM.h2(0);}
function Zo(){B.call(this);this.w5=null;}
function AZS(a){a.w5.nM.h2(1);}
function U4(){B.call(this);this.yv=null;}
function AKq(a){var b,c,d,e,f;b=a.yv.d.f;c=b.cn;d=new K;M(d);U(H(d,C(464)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.mQ;d=new K;M(d);U(H(d,C(465)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dc;e=Hi(E4(b));ACp(d,0,d.db,e);b=Bx();f=b.mq;f.data[0]=10;WK(b,f,0,1);}
function UZ(){B.call(this);this.v$=null;}
function AN1(a){YT(a.v$);}
function U0(){B.call(this);this.wN=null;}
function ASB(a){Z3(a.wN);}
function U1(){B.call(this);this.uE=null;}
function AXh(a){NZ(a.uE.d);}
function U2(){B.call(this);this.pR=null;}
function AV$(a){UP(a.pR);}
function Or(){B.call(this);this.wu=null;}
function ARU(a){var b,c,d,e,f,g,h;b=a.wu;c=Q(B1,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Wk(PX(b,g),Wp(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Wk(PX(b,g),Wp(g));e=h;}return c;}
function Tk(){B.call(this);this.sp=null;}
function AQV(a,b,c){HE(Ca(a.sp.d.f,b.bp),0,J(c));}
var W4=G(0);
function ABq(){var a=this;B.call(a);a.l3=null;a.o2=null;a.iT=null;a.rb=null;}
function A2A(a,b,c){var d=new ABq();ADt(d,a,b,c);return d;}
function ADt(a,b,c,d){a.l3=b;a.o2=c;a.iT=d;}
function MY(a,b){var c,d;c=new ABy;d=a.l3.values();c.j1=a;c.w_=d;c.kA=b;AAk(c);}
function X2(a){var b,c,d,e;b=a.rb;if(b===null){b=a.iT;c=b.data;d=I$(a);e=c.length;b=De(b,e+1|0);b.data[e]=d;b=b;a.rb=b;}return b;}
function I$(a){return HW(a.l3.name);}
function A0C(a){return a.iT;}
function AMX(a){return LJ(a.iT,I$(a));}
function AGy(){var a=this;B.call(a);a.jf=null;a.dB=0;}
function AVZ(a,b){var c=new AGy();AKj(c,a,b);return c;}
function AKj(a,b,c){a.jf=b;a.dB=c;}
function APX(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.dB==c.dB&&BT(a.jf,c.jf)?1:0;}return 0;}
function VR(){B.call(this);this.qt=null;}
function AW9(a,b){b=b;Op(a.qt,b);}
function Vf(){B.call(this);this.v8=null;}
function A1w(a,b){b=b;G7(a.v8,b);}
var SP=G();
function Fy(){var a=this;B.call(a);a.jV=0;a.sZ=0;a.jt=null;a.gT=null;a.xg=null;a.lx=null;}
function A7D(a){var b=new Fy();Nr(b,a);return b;}
function Nr(a,b){a.lx=b;a.sZ=b.cW;a.jt=null;}
function F9(a){var b,c;if(a.jt!==null)return 1;while(true){b=a.jV;c=a.lx.b5.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.jV=b+1|0;}return 0;}
function AHO(a){var b;if(a.sZ==a.lx.cW)return;b=new H5;X(b);N(b);}
function ND(a){var b,c,d,e;AHO(a);if(!F9(a)){b=new Md;X(b);N(b);}b=a.jt;if(b!==null){c=a.gT;if(c!==null)a.xg=c;a.gT=b;a.jt=b.cT;}else{d=a.lx.b5.data;e=a.jV;a.jV=e+1|0;b=d[e];a.gT=b;a.jt=b.cT;a.xg=null;}}
var ZF=G(Fy);
function PR(a){ND(a);return a.gT.cQ;}
var SS=G(Fy);
function ACT(a){ND(a);return a.gT;}
var YL=G(Fy);
function ADQ(){var a=this;B.call(a);a.NX=null;a.QU=0;}
function YI(){var a=this;B.call(a);a.l=null;a.dU=0;a.mh=null;a.qn=0;a.hy=0;a.fx=0;a.bz=0;a.mU=null;}
function MQ(a){return a.l.bM;}
function UX(a,b,c,d){var e,f,g,h,i,j;e=BH();f=a.dU;g=0;if(c!=f)a.dU=c;a:{switch(b){case -1073741784:h=new Rl;c=a.bz+1|0;a.bz=c;Gc(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Qh;c=a.bz+1|0;a.bz=c;Gc(h,c);break a;case -33554392:h=new R3;c=a.bz+1|0;a.bz=c;Gc(h,c);break a;default:c=a.hy+1|0;a.hy=c;if(d!==null)h=A3G(c);else{h=new FX;Gc(h,0);g=1;}c=a.hy;if(c<=(-1))break a;if(c>=10)break a;a.mh.data[c]=h;break a;}h=new AC3;Gc(h,(-1));}while(true){if(Fc(a.l)&&a.l.n==(-536870788))
{d=A0f(Cj(a,2),Cj(a,64));while(!Dx(a.l)&&Fc(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CH(d,Bk(i));i=a.l;if(i.bj!=(-536870788))continue;Bk(i);}i=Le(a,d);i.S(h);}else if(a.l.bj==(-536870788)){i=HV(h);Bk(a.l);}else{i=Xp(a,h);d=a.l;if(d.bj==(-536870788))Bk(d);}if(i!==null)BC(e,i);if(Dx(a.l))break;if(a.l.bj==(-536870871))break;}if(a.l.mx==(-536870788))BC(e,HV(h));if(a.dU!=f&&!g){a.dU=f;d=a.l;d.gR=f;d.n=d.bj;d.e_=d.fk;j=d.dm;d.x=j+1|0;d.jb=j;FH(d);}switch(b){case -1073741784:break;case -536870872:d
=new VB;FY(d,e,h);return d;case -268435416:d=new ABS;FY(d,e,h);return d;case -134217688:d=new YM;FY(d,e,h);return d;case -67108824:d=new Sl;FY(d,e,h);return d;case -33554392:d=new D4;FY(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A3x(Bw(e,0),h);default:return A1$(e,h);}return HV(h);}d=new Kd;FY(d,e,h);return d;}
function AJr(a){var b,c,d,e,f,g,h;b=BN(4);c=(-1);d=(-1);if(!Dx(a.l)&&Fc(a.l)){e=b.data;c=Bk(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B2(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bj;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.l;g=f.bj;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return AZ3(e,3);}return AZ3(e,2);}if(!Cj(a,2))return AEa(b[0]);if(Cj(a,64))return AYJ(b[0]);return AUK(b[0]);}e=b.data;c=1;while(c<4&&!Dx(a.l)&&Fc(a.l)){h=c+1|0;e[c]=Bk(a.l);c=h;}if(c==1){h=e[0];if(!(A7E.Cs(h)==A7F?0:1))return UO(a,e[0]);}if
(!Cj(a,2))return A35(b,c);if(Cj(a,64)){f=new UJ;Ph(f,b,c);return f;}f=new AAl;Ph(f,b,c);return f;}
function Xp(a,b){var c,d,e,f,g,h,i;if(Fc(a.l)&&!KI(a.l)&&M8(a.l.n)){if(Cj(a,128)){c=AJr(a);if(!Dx(a.l)){d=a.l;e=d.bj;if(!(e==(-536870871)&&!(b instanceof FX))&&e!=(-536870788)&&!Fc(d))c=L4(a,b,c);}}else if(!WL(a.l)&&!ABh(a.l)){f=new Pq;M(f);while(!Dx(a.l)&&Fc(a.l)&&!WL(a.l)&&!ABh(a.l)){if(!(!KI(a.l)&&!a.l.n)&&!(!KI(a.l)&&M8(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.l);if(!L3(e))BM(f,e&65535);else JQ(f,HJ(e));}if(!Cj(a,2)){c=new Y0;DU(c);c.cC
=L(f);e=f.K;c.bG=e;c.oo=AXO(e);c.mX=AXO(c.bG);h=0;while(h<(c.bG-1|0)){Q7(c.oo,P(c.cC,h),(c.bG-h|0)-1|0);Q7(c.mX,P(c.cC,(c.bG-h|0)-1|0),(c.bG-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A34(f);else{c=new OP;DU(c);c.jd=L(f);c.bG=f.K;}}else c=L4(a,b,ACM(a,b));}else{d=a.l;if(d.bj!=(-536870871))c=L4(a,b,ACM(a,b));else{if(b instanceof FX)N(Ck(C(21),d.bM,Po(d)));c=HV(b);}}a:{if(!Dx(a.l)){e=a.l.bj;if(!(e==(-536870871)&&!(b instanceof FX))&&e!=(-536870788)){f=Xp(a,b);if(c instanceof C$&&!(c instanceof FI)&&!(c instanceof CX)
&&!(c instanceof E0)){i=c;if(!f.b0(i.M)){c=new Uf;E$(c,i.M,i.e,i.jo);c.M.S(c);}}if((f.iB()&65535)!=43)c.S(f);else c.S(f.M);break a;}}if(c===null)return null;c.S(b);}if((c.iB()&65535)!=43)return c;return c.M;}
function L4(a,b,c){var d,e,f,g,h;d=a.l;e=d.bj;if(c!==null&&!(c instanceof B_)){switch(e){case -2147483606:Bk(d);d=new Vp;Do(d,c,b,e);Ob();c.S(A7G);return d;case -2147483605:Bk(d);d=new XP;Do(d,c,b,(-2147483606));Ob();c.S(A7G);return d;case -2147483585:Bk(d);d=new P6;Do(d,c,b,(-536870849));Ob();c.S(A7G);return d;case -2147483525:f=new OM;d=F_(d);g=a.fx+1|0;a.fx=g;Ml(f,d,c,b,(-536870849),g);Ob();c.S(A7G);return f;case -1073741782:case -1073741781:Bk(d);d=new Rg;Do(d,c,b,e);c.S(d);return d;case -1073741761:Bk(d);d
=new Yo;Do(d,c,b,(-536870849));c.S(b);return d;case -1073741701:h=new S3;d=F_(d);e=a.fx+1|0;a.fx=e;Ml(h,d,c,b,(-536870849),e);c.S(h);return h;case -536870870:case -536870869:Bk(d);if(c.iB()!=(-2147483602)){d=new CX;Do(d,c,b,e);}else if(Cj(a,32)){d=new Rh;Do(d,c,b,e);}else{d=new WU;f=Xz(a.dU);Do(d,c,b,e);d.mw=f;}c.S(d);return d;case -536870849:Bk(d);d=new Gr;Do(d,c,b,(-536870849));c.S(b);return d;case -536870789:h=new Ga;d=F_(d);e=a.fx+1|0;a.fx=e;Ml(h,d,c,b,(-536870849),e);c.S(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new ADh;E$(d,f,b,e);f.e=d;return d;case -2147483585:Bk(d);c=new Ub;E$(c,f,b,(-2147483585));return c;case -2147483525:c=new Xo;RA(c,F_(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new Yn;E$(d,f,b,e);f.e=d;return d;case -1073741761:Bk(d);c=new AAx;E$(c,f,b,(-1073741761));return c;case -1073741701:c=new Q6;RA(c,F_(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=A2n(f,b,e);f.e=d;return d;case -536870849:Bk(d);c
=new E0;E$(c,f,b,(-536870849));return c;case -536870789:return A26(F_(d),f,b,(-536870789));default:}return c;}
function ACM(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FX;while(true){a:{e=a.l;f=e.bj;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dU=g;else{if(f!=(-1073741784))g=a.dU;c=UX(a,f,g,b);e=a.l;if(e.bj!=(-536870871))N(Ck(C(21),e.bM,e.dm));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=AZU(0);break a;case -2147483577:Bk(e);c=new WP;B3(c);break a;case -2147483558:Bk(e);c=new UD;h=a.bz+1|0;a.bz=h;AJB(c,h);break a;case -2147483550:Bk(e);c=AZU(1);break a;case -2147483526:Bk(e);c=new ACd;B3(c);break a;case -536870876:Bk(e);a.bz=a.bz+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A12(a.bz);break a;}c=A1J(a.bz);break a;}if(Cj(a,1)){c=A2c(a.bz);break a;}c=A2w(a.bz);break a;case -536870866:Bk(e);if(Cj(a,32)){c=A2E();break a;}c=A2t(Xz(a.dU));break a;case -536870821:Bk(e);i=0;c=a.l;if(c.bj==(-536870818)){i=1;Bk(c);}c
=Le(a,Hp(a,i));c.S(b);e=a.l;if(e.bj!=(-536870819))N(Ck(C(21),e.bM,e.dm));Xb(e,1);Bk(a.l);break a;case -536870818:Bk(e);a.bz=a.bz+1|0;if(!Cj(a,8)){c=new K5;B3(c);break a;}c=new V3;e=Xz(a.dU);B3(c);c.x4=e;break a;case 0:j=e.fk;if(j!==null)c=Le(a,j);else{if(Dx(e)){c=HV(b);break a;}c=AEa(f&65535);}Bk(a.l);break a;default:break b;}Bk(e);c=new K5;B3(c);break a;}h=(f&2147483647)-48|0;if(a.hy<h)N(Ck(C(21),FO(e),Po(a.l)));Bk(e);a.bz=a.bz+1|0;c=!Cj(a,2)?A2S(h,a.bz):Cj(a,64)?A13(h,a.bz):A33(h,a.bz);a.mh.data[h].oe=1;a.qn
=1;break a;}if(f>=0&&!G2(e)){c=UO(a,f);Bk(a.l);}else if(f==(-536870788))c=HV(b);else{if(f!=(-536870871)){b=new J4;c=!G2(a.l)?Uz(f&65535):a.l.fk.cK();e=a.l;Mu(b,c,e.bM,e.dm);N(b);}if(d){b=new J4;e=a.l;Mu(b,C(21),e.bM,e.dm);N(b);}c=HV(b);}}}if(f!=(-16777176))break;}return c;}
function Hp(a,b){var c,d,e,f,g,h,i,j,$$je;c=A0f(Cj(a,2),Cj(a,64));EF(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dx(a.l))break a;h=a.l;b=h.bj;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CH(c,d);d=Bk(a.l);h=a.l;if(h.bj!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=Hp(a,0);break d;}if(a.l.bj==(-536870819))break d;Uq(c,Hp(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.l;i=h.bj;if(G2(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(M8(i))break e;i=i&65535;break e;}catch($$e){$$je=EO($$e);if($$je instanceof Em){break b;}else{throw $$e;}}}try{B$(c,d,i);}catch($$e){$$je=EO($$e);if($$je instanceof Em){break b;}else{throw $$e;}}Bk(a.l);d=(-1);break d;}}if(d>=0)CH(c,d);d=45;Bk(a.l);break d;case -536870821:if(d>=0){CH(c,d);d=(-1);}Bk(a.l);j=0;h=a.l;if(h.bj==(-536870818)){Bk(h);j=1;}if(!e)AG2(c,Hp(a,j));else Uq(c,Hp(a,j));e=0;Bk(a.l);break d;case -536870819:if(d>=0)CH(c,
d);d=93;Bk(a.l);break d;case -536870818:if(d>=0)CH(c,d);d=94;Bk(a.l);break d;case 0:if(d>=0)CH(c,d);h=a.l.fk;if(h===null)d=0;else{AJ9(c,h);d=(-1);}Bk(a.l);break d;default:}if(d>=0)CH(c,d);d=Bk(a.l);}g=0;}N(Ck(C(21),MQ(a),a.l.dm));}N(Ck(C(21),MQ(a),a.l.dm));}if(!f){if(d>=0)CH(c,d);return c;}N(Ck(C(21),MQ(a),a.l.dm-1|0));}
function UO(a,b){var c,d,e;c=L3(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AUK(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new Vw;DU(d);d.bG=2;d.r7=GU(GS(b));return d;}if(PQ(b))return APT(b&65535);if(!RU(b))return AYJ(b&65535);return AWu(b&65535);}}if(!c){if(PQ(b))return APT(b&65535);if(!RU(b))return AEa(b&65535);return AWu(b&65535);}d=new D$;DU(d);d.bG=2;d.gH=b;e=(HJ(b)).data;d.lO=e[0];d.kX=e[1];return d;}
function Le(a,b){var c,d,e;if(!AIL(b)){if(!b.P){if(b.h6())return ANA(b);return ARM(b);}if(!b.h6())return AWL(b);c=new Mm;AAP(c,b);return c;}c=ADC(b);d=new Oz;B3(d);d.rs=c;d.C4=c.bh;if(!b.P){if(b.h6())return AFr(ANA(Jo(b)),d);return AFr(ARM(Jo(b)),d);}if(!b.h6())return AFr(AWL(Jo(b)),d);c=new QE;e=new Mm;AAP(e,Jo(b));AGG(c,e,d);return c;}
function Jp(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dU&b)!=b?0:1;}
function Zf(){B.call(this);this.xA=null;}
function APf(a,b){b.g8=a.xA.db;}
function Ze(){B.call(this);this.tR=null;}
function AYC(a,b){b.g1=a.tR.db.ci;}
function WS(){B.call(this);this.qI=null;}
function AU3(a,b){b.g8=a.qI;}
var HQ=G(0);
function Sr(){B.call(this);this.xF=null;}
function AXt(a,b,c,d){KA(a.xF,b,c.bp,d.bp);}
function Ss(){B.call(this);this.vK=null;}
function AWc(a,b,c,d){KA(a.vK,b,c.bp,d.bp);}
function IK(){B.call(this);this.nJ=0;}
var A7H=null;var A7I=null;var A7J=null;function AQp(a){var b=new IK();AFt(b,a);return b;}
function AFt(a,b){a.nJ=b;}
function Xi(b){return !b?A7I:A7H;}
function AHo(){A7H=AQp(1);A7I=AQp(0);A7J=F($rt_booleancls());}
var KC=G(0);
var Rm=G();
var W8=G(0);
var AEW=G();
function RI(){B.call(this);this.tT=null;}
function AXX(a,b,c,d){JJ(a.tT,b,c.bp,d.bp);}
var RH=G();
function ASr(a,b){return b.eu.dB>=0?0:1;}
var RG=G();
function AQL(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fE;if(b===null)break b;if(b.dB>=0)break b;}c=1;break a;}c=0;}return c;}
function RK(){B.call(this);this.yZ=null;}
function AXA(a,b,c,d){JJ(a.yZ,b,c.bp,d.bp);}
function ADe(){B.call(this);this.xa=null;}
function AVK(a,b){DC(a.xa,b);}
var Gw=G(CG);
var A7C=null;var A7B=null;var A7K=null;function RW(){RW=Bn(Gw);A1i();}
function AZh(a,b){var c=new Gw();AEK(c,a,b);return c;}
function AEK(a,b,c){RW();DD(a,b,c);}
function A1i(){var b;A7C=AZh(C(466),0);b=AZh(C(467),1);A7B=b;A7K=I(Gw,[A7C,b]);}
function BP(){var a=this;B.call(a);a.e=null;a.ct=0;a.wF=null;a.jo=0;}
var A4D=0;function B3(a){var b;b=A4D;A4D=b+1|0;a.wF=NC(b);}
function Nl(a,b){var c;c=A4D;A4D=c+1|0;a.wF=NC(c);a.e=b;}
function Iw(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IE(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AUX(a,b){a.jo=b;}
function AUx(a){return a.jo;}
function ARp(a){return a.e;}
function AR0(a,b){a.e=b;}
function AZ$(a,b){return 1;}
function A0R(a){return null;}
function Kh(a){var b;a.ct=1;b=a.e;if(b!==null){if(!b.ct){b=b.gk();if(b!==null){a.e.ct=1;a.e=b;}a.e.eG();}else if(b instanceof HL&&b.eK.oe)a.e=b.e;}}
function AGN(){A4D=1;}
function VX(){var a=this;B.call(a);a.wZ=null;a.wY=null;}
function ANz(a){var b,c;b=a.wZ;c=a.wY;b.iQ.ty(c);}
function Vg(){var a=this;B.call(a);a.qD=null;a.qB=null;a.qA=0;a.qC=0;}
function AX1(a,b){b=b;EJ(a.qD,a.qB,b,a.qA,a.qC);}
function Vh(){var a=this;B.call(a);a.AK=null;a.AJ=null;a.AI=0;a.AH=0;}
function AM7(a,b){b=b;EJ(a.AK,a.AJ,b,a.AI,a.AH);}
function WR(){B.call(this);this.vC=null;}
function APs(a,b){ACy(a.vC,b);}
function ADd(){var a=this;Eh.call(a);a.y2=null;a.i5=null;}
function ARl(a,b){var c=new ADd();AW5(c,a,b);return c;}
function A7L(a,b,c){var d=new ADd();SV(d,a,b,c);return d;}
function AW5(a,b,c){SV(a,b,0,c);}
function SV(a,b,c,d){NF(a,I$(b),c);a.y2=b;a.i5=d;K9(a);IA(a);}
function K9(a){var b;b=new Wd;b.xB=a;a.gg=b;a.kG=b;a.eY=A6p;}
function ACF(a){var b;b=new YK;b.vz=a;a.gg=b;a.kG=b;}
function Re(){B.call(this);this.ys=null;}
function ANa(a,b){var c,d;c=a.ys;d=b.iw;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function RZ(){B.call(this);this.Ab=null;}
function AQO(a,b){SL(HM(a.Ab),b,A6H,AD8(C(468)));}
var AAf=G();
var A7u=null;function A3y(){A3y=Bn(AAf);ATW();}
function ATW(){var b,c;RW();b=BN((A7K.hb()).data.length);c=b.data;A7u=b;c[A7C.fC]=1;c[A7B.fC]=2;}
function CW(){var a=this;BP.call(a);a.oe=0;a.ef=0;}
var A7G=null;function Ob(){Ob=Bn(CW);AVA();}
function A3G(a){var b=new CW();Gc(b,a);return b;}
function Gc(a,b){Ob();B3(a);a.ef=b;}
function AK_(a,b,c,d){var e,f;e=IX(d,a.ef);MG(d,a.ef,b);f=a.e.c(b,c,d);if(f<0)MG(d,a.ef,e);return f;}
function AXi(a){return a.ef;}
function ALn(a,b){return 0;}
function AVA(){var b;b=new WM;B3(b);A7G=b;}
function GX(){var a=this;B.call(a);a.bf=null;a.gR=0;a.fc=0;a.ui=0;a.mx=0;a.bj=0;a.n=0;a.ye=0;a.fk=null;a.e_=null;a.x=0;a.jC=0;a.dm=0;a.jb=0;a.bM=null;}
var A7M=null;var A7E=null;var A7F=0;function Xb(a,b){if(b>0&&b<3)a.fc=b;if(b==1){a.n=a.bj;a.e_=a.fk;a.x=a.jb;a.jb=a.dm;FH(a);}}
function G2(a){return a.fk===null?0:1;}
function KI(a){return a.e_===null?0:1;}
function Bk(a){FH(a);return a.mx;}
function F_(a){var b;b=a.fk;FH(a);return b;}
function FH(a){var b,c,d,e,f,g,h,$$je;a.mx=a.bj;a.bj=a.n;a.fk=a.e_;a.dm=a.jb;a.jb=a.x;while(true){b=0;c=a.x>=a.bf.data.length?0:LG(a);a.n=c;a.e_=null;if(a.fc==4){if(c!=92)return;c=a.x;d=a.bf.data;c=c>=d.length?0:d[B6(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.x=a.jC;return;}a.fc=a.ui;a.n=a.x>(a.bf.data.length-2|0)?0:LG(a);}a:{c=a.n;if(c!=92){e=a.fc;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.bf.data[a.x]!=63){a.n=(-2147483608);break a;}B6(a);c=a.bf.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B6(a);break b;default:N(Ck(C(21),FO(a),a.x));}a.n=(-67108824);B6(a);}else{switch(c){case 33:break;case 60:B6(a);c=a.bf.data[a.x];e=1;break b;case 61:a.n=(-536870872);B6(a);break b;case 62:a.n=(-33554392);B6(a);break b;default:f=AJ7(a);a.n=f;if(f<256){a.gR=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.gR=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B6(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bf.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B6(a);break a;case 63:a.n=c|(-1073741824);B6(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);Xb(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.e_=AGl(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.x>=(a.bf.data.length-2|0)?(-1):LG(a);c:{a.n=c;switch(c){case -1:N(Ck(C(21),FO(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AFl(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fc!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Ck(C(21),FO(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.e_=Ry(Et(a.bf,
a.jC,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.ui=a.fc;a.fc=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.x;d=a.bf.data;if(c>=(d.length-2|0))N(Ck(C(21),FO(a),a.x));a.n=d[B6(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=XR(a,4);break a;case 120:a.n=XR(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AIS(a);h=0;if(a.n==80)h=1;try{a.e_=Ry(g,h);}catch($$e){$$je=EO($$e);if($$je instanceof Mp){N(Ck(C(21),FO(a),a.x));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AIS(a){var b,c,d,e,f,g;b=new K;GA(b,10);c=a.x;d=a.bf;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Et(d,B6(a),1);f=new K;M(f);H(H(f,C(469)),b);return L(f);}B6(a);c=0;a:{while(true){g=a.x;d=a.bf.data;if(g>=(d.length-2|0))break;c=d[B6(a)];if(c==125)break a;BM(b,c);}}if(c!=125)N(Ck(C(21),a.bM,a.x));}if(!b.K)N(Ck(C(21),a.bM,a.x));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(469)),f);return L(b);}b:{c:{if(J(f)>3){if(Nb(f,C(469)))break c;if(Nb(f,C(470)))break c;}break b;}f=Dq(f,2);}return f;}
function AGl(a,b){var c,d,e,f,g,$$je;c=new K;GA(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bf.data;if(f>=g.length)break a;b=g[B6(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ky(D8(c),10);AGq(c,0,AHp(c));continue;}catch($$e){$$je=EO($$e);if($$je instanceof Dp){break;}else{throw $$e;}}BM(c,b&65535);}N(Ck(C(21),a.bM,a.x));}if(b!=125)N(Ck(C(21),a.bM,a.x));if(c.K>0)b:{try{e=Ky(D8(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EO($$e);if($$je instanceof Dp){}else{throw $$e;}}N(Ck(C(21),a.bM,a.x));}else if
(d<0)N(Ck(C(21),a.bM,a.x));if((d|e|(e-d|0))<0)N(Ck(C(21),a.bM,a.x));b=a.x;g=a.bf.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B6(a);break c;case 63:a.n=(-1073741701);B6(a);break c;default:}a.n=(-536870789);}c=new VL;c.fv=d;c.fu=e;return c;}
function FO(a){return a.bM;}
function Dx(a){return !a.bj&&!a.n&&a.x==a.ye&&!G2(a)?1:0;}
function M8(b){return b<0?0:1;}
function Fc(a){return !Dx(a)&&!G2(a)&&M8(a.bj)?1:0;}
function WL(a){var b;b=a.bj;return b<=56319&&b>=55296?1:0;}
function ABh(a){var b;b=a.bj;return b<=57343&&b>=56320?1:0;}
function RU(b){return b<=56319&&b>=55296?1:0;}
function PQ(b){return b<=57343&&b>=56320?1:0;}
function XR(a,b){var c,d,e,f,$$je;c=new K;GA(c,b);d=a.bf.data.length-2|0;e=0;while(true){f=BK(e,b);if(f>=0)break;if(a.x>=d)break;BM(c,a.bf.data[B6(a)]);e=e+1|0;}if(!f)a:{try{b=Ky(D8(c),16);}catch($$e){$$je=EO($$e);if($$je instanceof Dp){break a;}else{throw $$e;}}return b;}N(Ck(C(21),a.bM,a.x));}
function AFl(a){var b,c,d,e,f,g;b=3;c=1;d=a.bf.data;e=d.length-2|0;f=AAY(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B6(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=AAY(a.bf.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B6(a);c=c+1|0;}}return f;}N(Ck(C(21),a.bM,a.x));}
function AJ7(a){var b,c,d,e;b=1;c=a.gR;a:while(true){d=a.x;e=a.bf.data;if(d>=e.length)N(Ck(C(21),a.bM,d));b:{c:{switch(e[d]){case 41:B6(a);return c|256;case 45:if(!b)N(Ck(C(21),a.bM,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B6(a);}B6(a);return c;}
function B6(a){var b,c,d,e,f;b=a.x;a.jC=b;if(!(a.gR&4))a.x=b+1|0;else{c=a.bf.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&Q4(a.bf.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bf.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.jC;}
function AJI(b){return A7M.GP(b);}
function LG(a){var b,c,d,e;b=a.bf.data[B6(a)];if(CP(b)){c=a.jC+1|0;d=a.bf.data;if(c<d.length){e=d[c];if(Dg(e)){B6(a);return EG(b,e);}}}return b;}
function Po(a){return a.dm;}
function J4(){var a=this;BS.call(a);a.Cb=null;a.BV=null;a.rZ=0;}
function Ck(a,b,c){var d=new J4();Mu(d,a,b,c);return d;}
function Mu(a,b,c,d){X(a);a.rZ=(-1);a.Cb=b;a.BV=c;a.rZ=d;}
function Pe(){var a=this;B.call(a);a.u0=null;a.u1=0.0;}
function ATF(a){var b,c;b=a.u0;c=a.u1;b.iQ.m0(c);}
function AC$(){var a=this;B.call(a);a.nD=null;a.CU=null;}
function ALP(a,b,c){var d;c=Bx();b=KG(b);d=new K;M(d);H(H(d,C(471)),b);Bm(c,L(d));}
function AL9(a,b){ACF(b);if(I_(b)>0)Ez(a.nD);}
function AMC(a,b){if(I_(b)>0)Ez(a.nD);K9(b);}
var Rl=G(CW);
function ATK(a,b,c,d){var e;e=a.ef;BX(d,e,b-Dy(d,e)|0);return a.e.c(b,c,d);}
function AY$(a,b){return 0;}
var AC3=G(CW);
function AUT(a,b,c,d){return b;}
var Qh=G(CW);
function ALv(a,b,c,d){if(Dy(d,a.ef)!=b)b=(-1);return b;}
function R3(){CW.call(this);this.vU=0;}
function ATM(a,b,c,d){var e;e=a.ef;BX(d,e,b-Dy(d,e)|0);a.vU=b;return b;}
function AYg(a,b){return 0;}
var FX=G(CW);
function ASb(a,b,c,d){if(d.lA!=1&&b!=d.y)return (-1);d.j5=1;MG(d,0,b);return b;}
function B_(){BP.call(this);this.bG=0;}
function DU(a){B3(a);a.bG=1;}
function A1g(a,b,c,d){var e;if((b+a.b9()|0)>d.y){d.dH=1;return (-1);}e=a.by(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AZM(a){return a.bG;}
function AN8(a,b){return 1;}
var AF9=G(B_);
function HV(a){var b=new AF9();AXo(b,a);return b;}
function AXo(a,b){Nl(a,b);a.bG=1;a.jo=1;a.bG=0;}
function AZq(a,b,c){return 0;}
function AVD(a,b,c,d){var e,f,g;e=d.y;f=d.c8;while(true){g=BK(b,e);if(g>0)return (-1);if(g<0&&Dg(P(c,b))&&b>f&&CP(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AUP(a,b,c,d,e){var f,g;f=e.y;g=e.c8;while(true){if(c<b)return (-1);if(c<f&&Dg(P(d,c))&&c>g&&CP(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ATL(a,b){return 0;}
function B5(){var a=this;BP.call(a);a.bI=null;a.eK=null;a.bb=0;}
function A1$(a,b){var c=new B5();FY(c,a,b);return c;}
function FY(a,b,c){B3(a);a.bI=b;a.eK=c;a.bb=c.ef;}
function ANo(a,b,c,d){var e,f,g,h;if(a.bI===null)return (-1);e=Gl(d,a.bb);DT(d,a.bb,b);f=a.bI.m;g=0;while(true){if(g>=f){DT(d,a.bb,e);return (-1);}h=(Bw(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQe(a,b){a.eK.e=b;}
function AW4(a,b){var c;a:{c=a.bI;if(c!==null){c=B4(c);while(true){if(!B8(c))break a;if(!(B9(c)).b0(b))continue;else return 1;}}}return 0;}
function AQG(a,b){return IX(b,a.bb)>=0&&Gl(b,a.bb)==IX(b,a.bb)?0:1;}
function ALQ(a){var b,c,d,e;a.ct=1;b=a.eK;if(b!==null&&!b.ct)Kh(b);a:{b=a.bI;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bw(a.bI,d);e=b.gk();if(e===null)e=b;else{b.ct=1;EB(a.bI,d);YZ(a.bI,d,e);}if(!e.ct)e.eG();d=d+1|0;}}}if(a.e!==null)Kh(a);}
var Kd=G(B5);
function AP3(a,b,c,d){var e,f,g,h;e=Dy(d,a.bb);BX(d,a.bb,b);f=a.bI.m;g=0;while(true){if(g>=f){BX(d,a.bb,e);return (-1);}h=(Bw(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AYO(a,b){return !Dy(b,a.bb)?0:1;}
var D4=G(Kd);
function AVc(a,b,c,d){var e,f,g;e=Dy(d,a.bb);BX(d,a.bb,b);f=a.bI.m;g=0;while(g<f){if((Bw(a.bI,g)).c(b,c,d)>=0)return a.e.c(a.eK.vU,c,d);g=g+1|0;}BX(d,a.bb,e);return (-1);}
function AYH(a,b){a.e=b;}
var VB=G(D4);
function AQb(a,b,c,d){var e,f;e=a.bI.m;f=0;while(f<e){if((Bw(a.bI,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AR5(a,b){return 0;}
var ABS=G(D4);
function ALj(a,b,c,d){var e,f;e=a.bI.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bI,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AZO(a,b){return 0;}
var YM=G(D4);
function ALN(a,b,c,d){var e,f,g,h;e=a.bI.m;f=d.j8?0:d.c8;a:{g=a.e.c(b,c,d);if(g>=0){BX(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((Bw(a.bI,h)).cx(f,b,c,d)>=0){BX(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function A1t(a,b){return 0;}
var Sl=G(D4);
function ATq(a,b,c,d){var e,f;e=a.bI.m;BX(d,a.bb,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bI,f)).cx(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AYZ(a,b){return 0;}
function HL(){B5.call(this);this.dd=null;}
function A3x(a,b){var c=new HL();AD$(c,a,b);return c;}
function AD$(a,b,c){B3(a);a.dd=b;a.eK=c;a.bb=c.ef;}
function AKE(a,b,c,d){var e,f;e=Gl(d,a.bb);DT(d,a.bb,b);f=a.dd.c(b,c,d);if(f>=0)return f;DT(d,a.bb,e);return (-1);}
function AOZ(a,b,c,d){var e;e=a.dd.co(b,c,d);if(e>=0)DT(d,a.bb,e);return e;}
function AZa(a,b,c,d,e){var f;f=a.dd.cx(b,c,d,e);if(f>=0)DT(e,a.bb,f);return f;}
function AW2(a,b){return a.dd.b0(b);}
function AYd(a){var b;b=new OI;AD$(b,a.dd,a.eK);a.e=b;return b;}
function ASy(a){var b;a.ct=1;b=a.eK;if(b!==null&&!b.ct)Kh(b);b=a.dd;if(b!==null&&!b.ct){b=b.gk();if(b!==null){a.dd.ct=1;a.dd=b;}a.dd.eG();}}
var GZ=G();
function Y(){var a=this;GZ.call(a);a.bh=0;a.cs=0;a.N=null;a.lH=null;a.l$=null;a.P=0;}
var A7N=null;function PI(){PI=Bn(Y);AL$();}
function Bz(a){var b;PI();b=new ACw;b.D=BN(64);a.N=b;}
function AUh(a){return null;}
function ATZ(a){return a.N;}
function AIL(a){var b,c,d,e,f;if(!a.cs)b=Ic(a.N,0)>=2048?0:1;else{a:{c=a.N;b=0;d=c.bs;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=IT(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IT(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AV9(a){return a.P;}
function AZI(a){return a;}
function ADC(a){var b,c;if(a.l$===null){b=a.fD();c=new Ue;c.D5=a;c.v6=b;Bz(c);a.l$=c;EF(c,a.cs);}return a.l$;}
function Jo(a){var b,c;if(a.lH===null){b=a.fD();c=new Uc;c.Ce=a;c.zx=b;c.uq=a;Bz(c);a.lH=c;EF(c,a.bh);a.lH.P=a.P;}return a.lH;}
function A0M(a){return 0;}
function EF(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cs=a.cs?0:1;}if(!a.P)a.P=1;return a;}
function AMZ(a){return a.bh;}
function M6(b,c){PI();return b.o(c);}
function JO(b,c){var d,e;PI();if(b.dP()!==null&&c.dP()!==null){b=b.dP();c=c.dP();d=Bd(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Ry(b,c){var d,e,f;PI();d=0;while(true){AQ5();e=A7O.data;if(d>=e.length){f=new Mp;Bl(f,C(21));f.CN=C(21);f.D$=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AJm(e[1],c);}
function AL$(){var b;b=new Ha;AQ5();A7N=b;}
function AD4(){var a=this;Y.call(a);a.oX=0;a.qd=0;a.hz=0;a.mK=0;a.en=0;a.gh=0;a.I=null;a.bC=null;}
function Dz(){var a=new AD4();AS2(a);return a;}
function A0f(a,b){var c=new AD4();AL0(c,a,b);return c;}
function AS2(a){Bz(a);a.I=A1v();}
function AL0(a,b,c){Bz(a);a.I=A1v();a.oX=b;a.qd=c;}
function CH(a,b){a:{if(a.oX){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.en){Oe(a.I,Jp(b&65535));break a;}Ly(a.I,Jp(b&65535));break a;}if(a.qd&&b>128){a.hz=1;b=GU(GS(b));}}}if(!(!RU(b)&&!PQ(b))){if(a.mK)Oe(a.N,b-55296|0);else Ly(a.N,b-55296|0);}if(a.en)Oe(a.I,b);else Ly(a.I,b);if(!a.P&&L3(b))a.P=1;return a;}
function AJ9(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(a.mK){if(!b.cs)F7(a.N,b.fD());else Dm(a.N,b.fD());}else if(!b.cs)Go(a.N,b.fD());else{Gg(a.N,b.fD());Dm(a.N,b.fD());a.cs=a.cs?0:1;a.mK=1;}if(!a.gh&&b.dP()!==null){if(a.en){if(!b.bh)F7(a.I,b.dP());else Dm(a.I,b.dP());}else if(!b.bh)Go(a.I,b.dP());else{Gg(a.I,b.dP());Dm(a.I,b.dP());a.bh=a.bh?0:1;a.en=1;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new W3;e.Dd=a;e.Ah=c;e.ub=d;e.t5=b;Bz(e);a.bC=e;}else{e=new W5;e.Ej=a;e.sl=c;e.xN=d;e.xm=b;Bz(e);a.bC=e;}}else{if(c&&!a.en
&&N9(a.I)){d=new W0;d.DG=a;d.xR=b;Bz(d);a.bC=d;}else if(!c){d=new WY;d.ov=a;d.nZ=c;d.wA=b;Bz(d);a.bC=d;}else{d=new WZ;d.na=a;d.l2=c;d.t8=b;Bz(d);a.bC=d;}a.gh=1;}}return a;}
function B$(a,b,c){var d,e,f,g,h;if(b>c){d=new BS;X(d);N(d);}a:{b:{if(!a.oX){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CH(a,b);b=b+1|0;}}if(!a.en)II(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BF;X(d);N(d);}e=d.bs;if(b<e){f=Bd(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JL(d,b)|IB(d,f));}else{h=d.D.data;h[g]=h[g]&JL(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IB(d,f);}}Hc(d);}}}}return a;}
function AG2(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hz)a.hz=1;c=a.cs;if(!(c^b.cs)){if(!c)Go(a.N,b.N);else Dm(a.N,b.N);}else if(c)F7(a.N,b.N);else{Gg(a.N,b.N);Dm(a.N,b.N);a.cs=1;}if(!a.gh&&C1(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Go(a.I,C1(b));else Dm(a.I,C1(b));}else if(c)F7(a.I,C1(b));else{Gg(a.I,C1(b));Dm(a.I,C1(b));a.bh=1;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new Pz;e.A6=a;e.tx=c;e.zH=d;e.ux=b;Bz(e);a.bC=e;}else{e=new PW;e.Bj=a;e.z4=c;e.pT=d;e.qf=b;Bz(e);a.bC=e;}}else{if(!a.en&&N9(a.I)){if(!c){d=new W1;d.Ek
=a;d.rA=b;Bz(d);a.bC=d;}else{d=new W2;d.Dh=a;d.zV=b;Bz(d);a.bC=d;}}else if(!c){d=new W6;d.tB=a;d.su=b;d.xP=c;Bz(d);a.bC=d;}else{d=new W7;d.sL=a;d.sS=b;d.yz=c;Bz(d);a.bC=d;}a.gh=1;}}}
function Uq(a,b){var c,d,e;if(!a.P&&b.P)a.P=1;if(b.hz)a.hz=1;c=a.cs;if(!(c^b.cs)){if(!c)Dm(a.N,b.N);else Go(a.N,b.N);}else if(!c)F7(a.N,b.N);else{Gg(a.N,b.N);Dm(a.N,b.N);a.cs=0;}if(!a.gh&&C1(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Dm(a.I,C1(b));else Go(a.I,C1(b));}else if(!c)F7(a.I,C1(b));else{Gg(a.I,C1(b));Dm(a.I,C1(b));a.bh=0;}}else{c=a.bh;d=a.bC;if(d!==null){if(!c){e=new PB;e.Dc=a;e.y7=c;e.v4=d;e.sj=b;Bz(e);a.bC=e;}else{e=new PC;e.Dk=a;e.yL=c;e.vx=d;e.y3=b;Bz(e);a.bC=e;}}else{if(!a.en&&N9(a.I)){if(!c){d=new Px;d.Bm
=a;d.wX=b;Bz(d);a.bC=d;}else{d=new Py;d.Ei=a;d.rp=b;Bz(d);a.bC=d;}}else if(!c){d=new PD;d.AQ=a;d.Ad=b;d.sN=c;Bz(d);a.bC=d;}else{d=new Pw;d.sM=a;d.yQ=b;d.x0=c;Bz(d);a.bC=d;}a.gh=1;}}}
function C9(a,b){var c;c=a.bC;if(c!==null)return a.bh^c.o(b);return a.bh^DP(a.I,b);}
function C1(a){if(!a.gh)return a.I;return null;}
function AVz(a){return a.N;}
function ARQ(a){var b,c;if(a.bC!==null)return a;b=C1(a);c=new PA;c.C5=a;c.k1=b;Bz(c);return EF(c,a.bh);}
function AXC(a){var b,c,d;b=new K;M(b);c=Ic(a.I,0);while(c>=0){JQ(b,HJ(c));BM(b,124);c=Ic(a.I,c+1|0);}d=b.K;if(d>0)T5(b,d-1|0);return L(b);}
function AM2(a){return a.hz;}
function Mp(){var a=this;Bt.call(a);a.CN=null;a.D$=null;}
function Ee(){BP.call(this);this.M=null;}
function Do(a,b,c,d){Nl(a,c);a.M=b;a.jo=d;}
function A1l(a){return a.M;}
function ARb(a,b){return !a.M.b0(b)&&!a.e.b0(b)?0:1;}
function A0g(a,b){return 1;}
function APd(a){var b;a.ct=1;b=a.e;if(b!==null&&!b.ct){b=b.gk();if(b!==null){a.e.ct=1;a.e=b;}a.e.eG();}b=a.M;if(b!==null){if(!b.ct){b=b.gk();if(b!==null){a.M.ct=1;a.M=b;}a.M.eG();}else if(b instanceof HL&&b.eK.oe)a.M=b.e;}}
function C$(){Ee.call(this);this.bc=null;}
function A2n(a,b,c){var d=new C$();E$(d,a,b,c);return d;}
function E$(a,b,c,d){Do(a,b,c,d);a.bc=b;}
function ATr(a,b,c,d){var e,f;e=0;a:{while((b+a.bc.b9()|0)<=d.y){f=a.bc.by(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.bc.b9()|0;e=e+(-1)|0;}return f;}
function FI(){C$.call(this);this.kn=null;}
function A26(a,b,c,d){var e=new FI();RA(e,a,b,c,d);return e;}
function RA(a,b,c,d,e){E$(a,c,d,e);a.kn=b;}
function AT8(a,b,c,d){var e,f,g,h,i;e=a.kn;f=e.fv;g=e.fu;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bc.b9()|0)>d.y)break a;i=a.bc.by(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.bc.b9()|0;h=h+(-1)|0;}return i;}if((b+a.bc.b9()|0)>d.y){d.dH=1;return (-1);}i=a.bc.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CX=G(Ee);
function ATC(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E0=G(C$);
function AXg(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AS$(a,b){a.e=b;a.M.S(b);}
var Uf=G(C$);
function A1c(a,b,c,d){while((b+a.bc.b9()|0)<=d.y&&a.bc.by(b,c)>0){b=b+a.bc.b9()|0;}return a.e.c(b,c,d);}
function APB(a,b,c,d){var e,f,g;e=a.e.co(b,c,d);if(e<0)return (-1);f=e-a.bc.b9()|0;while(f>=b&&a.bc.by(f,c)>0){g=f-a.bc.b9()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nc=null;a.my=null;}
function AJm(a,b){if(!b&&a.nc===null)a.nc=a.F();else if(b&&a.my===null)a.my=EF(a.F(),1);if(b)return a.my;return a.nc;}
var Dp=G(BS);
function VL(){var a=this;GZ.call(a);a.fv=0;a.fu=0;}
function AXH(a){var b,c,d,e,f;b=a.fv;c=a.fu;d=c!=2147483647?NC(c):C(21);e=new K;M(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return L(e);}
var WM=G(BP);
function AOo(a,b,c,d){return b;}
function AYc(a,b){return 0;}
function ACw(){var a=this;B.call(a);a.D=null;a.bs=0;}
function A1v(){var a=new ACw();AUF(a);return a;}
function AUF(a){a.D=BN(0);}
function Ly(a,b){var c,d;c=b/32|0;if(b>=a.bs){JR(a,c+1|0);a.bs=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function II(a,b,c){var d,e,f,g,h;d=BK(b,c);if(d>0){e=new BF;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bs){JR(a,f+1|0);a.bs=c;}if(d==f){g=a.D.data;g[d]=g[d]|IB(a,b)&JL(a,c);}else{g=a.D.data;g[d]=g[d]|IB(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JL(a,c);}}}
function IB(a,b){return (-1)<<(b%32|0);}
function JL(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Oe(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bs-1|0))Hc(a);}}
function DP(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ic(a,b){var c,d,e,f;c=a.bs;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return IT(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IT(e[f])|0;f=f+1|0;}return (-1);}
function JR(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.D=I9(a.D,c);}
function Hc(a){var b,c,d;b=(a.bs+31|0)/32|0;a.bs=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Wq(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bs=a.bs-32|0;}a.bs=a.bs-d|0;}}
function Dm(a,b){var c,d,e,f;c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bs=Bd(a.bs,b.bs);Hc(a);}
function F7(a,b){var c,d,e;c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hc(a);}
function Go(a,b){var c,d,e;c=Be(a.bs,b.bs);a.bs=c;JR(a,(c+31|0)/32|0);c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gg(a,b){var c,d,e;c=Be(a.bs,b.bs);a.bs=c;JR(a,(c+31|0)/32|0);c=Bd(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hc(a);}
function N9(a){return a.bs?0:1;}
function Oz(){var a=this;B5.call(a);a.rs=null;a.C4=0;}
function QE(){var a=this;B5.call(a);a.ns=null;a.o8=null;}
function AFr(a,b){var c=new QE();AGG(c,a,b);return c;}
function AGG(a,b,c){B3(a);a.ns=b;a.o8=c;}
function AK9(a,b,c,d){var e,f,g,h,i;e=a.ns.c(b,c,d);if(e<0)a:{f=a.o8;g=d.c8;e=d.y;h=b+1|0;e=BK(h,e);if(e>0){d.dH=1;e=(-1);}else{i=P(c,b);if(!f.rs.o(i))e=(-1);else{if(CP(i)){if(e<0&&Dg(P(c,h))){e=(-1);break a;}}else if(Dg(i)&&b>g&&CP(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AX7(a,b){a.e=b;a.o8.e=b;a.ns.S(b);}
function ALz(a,b){return 1;}
function ALm(a,b){return 1;}
function DY(){var a=this;B5.call(a);a.d2=null;a.BO=0;}
function AWL(a){var b=new DY();AAP(b,a);return b;}
function AAP(a,b){B3(a);a.d2=b.lt();a.BO=b.bh;}
function AVu(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.o(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jh(g,f)&&a.o(EG(g,f)))return a.e.c(b,c,d);}}return (-1);}
function ANd(a,b){return a.d2.o(b);}
function AK5(a,b){if(b instanceof D$)return M6(a.d2,b.gH);if(b instanceof EA)return M6(a.d2,b.dC);if(b instanceof DY)return JO(a.d2,b.d2);if(!(b instanceof Ev))return 1;return JO(a.d2,b.gb);}
function AOi(a){return a.d2;}
function AZC(a,b){a.e=b;}
function AMR(a,b){return 1;}
var Mm=G(DY);
function AN9(a,b){return a.d2.o(GU(GS(b)));}
function ADY(){var a=this;B_.call(a);a.xs=null;a.Bx=0;}
function ANA(a){var b=new ADY();APL(b,a);return b;}
function APL(a,b){DU(a);a.xs=b.lt();a.Bx=b.bh;}
function AWP(a,b,c){return !a.xs.o(FB(Ff(P(c,b))))?(-1):1;}
function Ev(){var a=this;B_.call(a);a.gb=null;a.B0=0;}
function ARM(a){var b=new Ev();AQu(b,a);return b;}
function AQu(a,b){DU(a);a.gb=b.lt();a.B0=b.bh;}
function Vs(a,b,c){return !a.gb.o(P(c,b))?(-1):1;}
function AQg(a,b){if(b instanceof EA)return M6(a.gb,b.dC);if(b instanceof Ev)return JO(a.gb,b.gb);if(!(b instanceof DY)){if(!(b instanceof D$))return 1;return 0;}return JO(a.gb,b.d2);}
function Xa(){var a=this;B5.call(a);a.iN=null;a.pj=null;a.kl=0;}
function AZ3(a,b){var c=new Xa();ATD(c,a,b);return c;}
function ATD(a,b,c){B3(a);a.iN=b;a.kl=c;}
function AO5(a,b){a.e=b;}
function QL(a){if(a.pj===null)a.pj=Hi(a.iN);return a.pj;}
function AKp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BN(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DR([k,l]):DR([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kl;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.iN.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kl==3){k=f[0];m=a.iN.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kl==2){b=f[0];m=a.iN.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AUp(a,b){return b instanceof Xa&&!Bj(QL(b),QL(a))?0:1;}
function ARV(a,b){return 1;}
function EA(){B_.call(this);this.dC=0;}
function AEa(a){var b=new EA();AQy(b,a);return b;}
function AQy(a,b){DU(a);a.dC=b;}
function AWF(a){return 1;}
function ANx(a,b,c){return a.dC!=P(c,b)?(-1):1;}
function AMD(a,b,c,d){var e,f,g;if(!(c instanceof BL))return Iw(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JN(c,a.dC,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AOk(a,b,c,d,e){var f;if(!(d instanceof BL))return IE(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hn(d,a.dC,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARN(a,b){if(b instanceof EA)return b.dC!=a.dC?0:1;if(!(b instanceof Ev)){if(b instanceof DY)return b.o(a.dC);if(!(b instanceof D$))return 1;return 0;}return Vs(b,0,Uz(a.dC))<=0?0:1;}
function AGt(){B_.call(this);this.vn=0;}
function AYJ(a){var b=new AGt();AXz(b,a);return b;}
function AXz(a,b){DU(a);a.vn=FB(Ff(b));}
function ATe(a,b,c){return a.vn!=FB(Ff(P(c,b)))?(-1):1;}
function ADl(){var a=this;B_.call(a);a.uC=0;a.v1=0;}
function AUK(a){var b=new ADl();AQ2(b,a);return b;}
function AQ2(a,b){DU(a);a.uC=b;a.v1=Jp(b);}
function AKx(a,b,c){return a.uC!=P(c,b)&&a.v1!=P(c,b)?(-1):1;}
function FN(){var a=this;B5.call(a);a.jk=0;a.ms=null;a.lZ=null;a.lT=0;}
function A35(a,b){var c=new FN();Ph(c,a,b);return c;}
function Ph(a,b,c){B3(a);a.jk=1;a.lZ=b;a.lT=c;}
function A0U(a,b){a.e=b;}
function AP2(a,b,c,d){var e,f,g,h,i,j,k,l;e=BN(4);f=d.y;if(b>=f)return (-1);g=K7(a,b,c,f);h=b+a.jk|0;i=AJI(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DQ(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=K7(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AJI(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jk|0;if(h>=f){b=k;break a;}g=K7(a,h,c,f);b=k;}}}if(b!=a.lT)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.lZ.data[g])break;g=g+1|0;}return (-1);}
function Uo(a){var b,c;if(a.ms===null){b=new K;M(b);c=0;while(c<a.lT){JQ(b,HJ(a.lZ.data[c]));c=c+1|0;}a.ms=L(b);}return a.ms;}
function K7(a,b,c,d){var e,f,g;a.jk=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jh(e,f)){g=B2(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CP(g[0])&&Dg(g[1])?EG(g[0],g[1]):g[0];a.jk=2;}}return e;}
function AOp(a,b){return b instanceof FN&&!Bj(Uo(b),Uo(a))?0:1;}
function AYI(a,b){return 1;}
var UJ=G(FN);
var AAl=G(FN);
var Vp=G(CX);
function AUY(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var XP=G(CX);
function AXv(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gr=G(CX);
function AZz(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A0r(a,b){a.e=b;a.M.S(b);}
var P6=G(Gr);
function AOg(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AXJ(a,b){a.e=b;}
function Ga(){var a=this;CX.call(a);a.gN=null;a.dJ=0;}
function A7P(a,b,c,d,e){var f=new Ga();Ml(f,a,b,c,d,e);return f;}
function Ml(a,b,c,d,e,f){Do(a,c,d,e);a.gN=b;a.dJ=f;}
function A1q(a,b,c,d){var e,f;e=VJ(d,a.dJ);if(!a.M.H(d))return a.e.c(b,c,d);if(e>=a.gN.fu)return a.e.c(b,c,d);f=a.dJ;e=e+1|0;EM(d,f,e);f=a.M.c(b,c,d);if(f>=0){EM(d,a.dJ,0);return f;}f=a.dJ;e=e+(-1)|0;EM(d,f,e);if(e>=a.gN.fv)return a.e.c(b,c,d);EM(d,a.dJ,0);return (-1);}
var OM=G(Ga);
function ANO(a,b,c,d){var e,f,g;e=0;f=a.gN.fu;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gN.fv)return (-1);return a.e.c(b,c,d);}
var Rg=G(CX);
function ASE(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Yo=G(Gr);
function ALA(a,b,c,d){var e;if(!a.M.H(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var S3=G(Ga);
function ATR(a,b,c,d){var e,f,g;e=VJ(d,a.dJ);if(!a.M.H(d))return a.e.c(b,c,d);f=a.gN;if(e>=f.fu){EM(d,a.dJ,0);return a.e.c(b,c,d);}if(e<f.fv){EM(d,a.dJ,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EM(d,a.dJ,0);return g;}EM(d,a.dJ,e+1|0);g=a.M.c(b,c,d);}return g;}
var Rh=G(Ee);
function A1h(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cx(b,e,c,d);return a.e.c(b,c,d);}
function ARz(a,b,c,d){var e;e=d.y;if(a.e.cx(b,e,c,d)>=0)return b;return (-1);}
function WU(){Ee.call(this);this.mw=null;}
function AQh(a,b,c,d){var e,f;e=d.y;f=AA3(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cx(b,e,c,d);return a.e.c(b,c,d);}
function AKr(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.co(b,c,d);if(f<0)return (-1);g=AA3(a,f,e,c);if(g>=0)e=g;g=Be(f,a.e.cx(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.mw.iv(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AA3(a,b,c,d){while(true){if(b>=c)return (-1);if(a.mw.iv(P(d,b)))break;b=b+1|0;}return b;}
var Ft=G();
var A7Q=null;var A7R=null;function Xz(b){var c;if(!(b&1)){c=A7R;if(c!==null)return c;c=new ABn;A7R=c;return c;}c=A7Q;if(c!==null)return c;c=new ABm;A7Q=c;return c;}
var ADh=G(C$);
function AKX(a,b,c,d){var e;a:{while(true){if((b+a.bc.b9()|0)>d.y)break a;e=a.bc.by(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var Ub=G(E0);
function APr(a,b,c,d){var e;if((b+a.bc.b9()|0)<=d.y){e=a.bc.by(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Xo=G(FI);
function AZd(a,b,c,d){var e,f,g,h,i;e=a.kn;f=e.fv;g=e.fu;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bc.b9()|0)>d.y)break a;i=a.bc.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.bc.b9()|0)>d.y){d.dH=1;return (-1);}i=a.bc.by(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Yn=G(C$);
function AQd(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.bc.b9()|0)<=d.y){e=a.bc.by(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var AAx=G(E0);
function AK3(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Q6=G(FI);
function AZs(a,b,c,d){var e,f,g,h,i,j;e=a.kn;f=e.fv;g=e.fu;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.bc.b9()|0)<=d.y){i=a.bc.by(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bc.b9()|0)>d.y){d.dH=1;return (-1);}j=a.bc.by(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var K5=G(BP);
function AW3(a,b,c,d){if(b&&!(d.gi&&b==d.c8))return (-1);return a.e.c(b,c,d);}
function AWv(a,b){return 0;}
function AEh(){BP.call(this);this.ue=0;}
function AZU(a){var b=new AEh();AOa(b,a);return b;}
function AOa(a,b){B3(a);a.ue=b;}
function AUf(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.j8?0:d.c8;return (e!=32&&!Yr(a,e,b,g,c)?0:1)^(f!=32&&!Yr(a,f,b-1|0,g,c)?0:1)^a.ue?(-1):a.e.c(b,c,d);}
function AUo(a,b){return 0;}
function Yr(a,b,c,d,e){var f;if(!Kx(b)&&b!=95){a:{if(CC(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Kx(f))return 0;if(CC(f)!=6)return 1;}}return 1;}return 0;}
var WP=G(BP);
function AN_(a,b,c,d){if(b!=d.iA)return (-1);return a.e.c(b,c,d);}
function AS3(a,b){return 0;}
function UD(){BP.call(this);this.gS=0;}
function A2w(a){var b=new UD();AJB(b,a);return b;}
function AJB(a,b){B3(a);a.gS=b;}
function AYv(a,b,c,d){var e,f,g;e=!d.gi?J(c):d.y;if(b>=e){BX(d,a.gS,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BX(d,a.gS,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BX(d,a.gS,0);return a.e.c(b,c,d);}
function AUQ(a,b){var c;c=!Dy(b,a.gS)?0:1;BX(b,a.gS,(-1));return c;}
var ACd=G(BP);
function AX4(a,b,c,d){if(b<(d.j8?J(c):d.y))return (-1);d.dH=1;d.DZ=1;return a.e.c(b,c,d);}
function ATd(a,b){return 0;}
function V3(){BP.call(this);this.x4=null;}
function AUL(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.gi&&b==d.c8)break a;if(a.x4.yO(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function ANk(a,b){return 0;}
var AGh=G(B5);
function A2E(){var a=new AGh();AXU(a);return a;}
function AXU(a){B3(a);}
function ASH(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dH=1;return (-1);}g=P(c,b);if(CP(g)){h=b+2|0;if(h<=e&&Jh(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AUr(a,b){a.e=b;}
function AXP(a){return (-2147483602);}
function AUq(a,b){return 1;}
function AD3(){B5.call(this);this.mO=null;}
function A2t(a){var b=new AD3();ALU(b,a);return b;}
function ALU(a,b){B3(a);a.mO=b;}
function AXY(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dH=1;return (-1);}g=P(c,b);if(CP(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jh(g,h))return a.mO.iv(EG(g,h))?(-1):a.e.c(b,c,d);}}return a.mO.iv(g)?(-1):a.e.c(f,c,d);}
function AY6(a,b){a.e=b;}
function AKd(a){return (-2147483602);}
function AST(a,b){return 1;}
function AJG(){BP.call(this);this.jg=0;}
function A2c(a){var b=new AJG();AVT(b,a);return b;}
function AVT(a,b){B3(a);a.jg=b;}
function AOs(a,b,c,d){var e;e=!d.gi?J(c):d.y;if(b>=e){BX(d,a.jg,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BX(d,a.jg,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AVS(a,b){var c;c=!Dy(b,a.jg)?0:1;BX(b,a.jg,(-1));return c;}
function AIO(){BP.call(this);this.io=0;}
function A12(a){var b=new AIO();AV_(b,a);return b;}
function AV_(a,b){B3(a);a.io=b;}
function APY(a,b,c,d){if((!d.gi?J(c)-b|0:d.y-b|0)<=0){BX(d,a.io,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BX(d,a.io,1);return a.e.c(b+1|0,c,d);}
function AVM(a,b){var c;c=!Dy(b,a.io)?0:1;BX(b,a.io,(-1));return c;}
function AG1(){BP.call(this);this.gu=0;}
function A1J(a){var b=new AG1();A1s(b,a);return b;}
function A1s(a,b){B3(a);a.gu=b;}
function AWq(a,b,c,d){var e,f,g;e=!d.gi?J(c)-b|0:d.y-b|0;if(!e){BX(d,a.gu,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BX(d,a.gu,0);return a.e.c(b,c,d);case 13:if(g!=10){BX(d,a.gu,0);return a.e.c(b,c,d);}BX(d,a.gu,0);return a.e.c(b,c,d);default:}return (-1);}
function ALY(a,b){var c;c=!Dy(b,a.gu)?0:1;BX(b,a.gu,(-1));return c;}
function H8(){var a=this;B5.call(a);a.p4=0;a.ha=0;}
function A33(a,b){var c=new H8();PP(c,a,b);return c;}
function PP(a,b,c){B3(a);a.p4=b;a.ha=c;}
function AKZ(a,b,c,d){var e,f,g,h;e=GC(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.ha,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Jp(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AYE(a,b){a.e=b;}
function GC(a,b){var c,d;c=a.p4;d=Gl(b,c);c=IX(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.mR)?Cr(b.mR,d,c):null;}
function AQX(a,b){var c;c=!Dy(b,a.ha)?0:1;BX(b,a.ha,(-1));return c;}
var AJL=G(H8);
function A2S(a,b){var c=new AJL();A0j(c,a,b);return c;}
function A0j(a,b,c){PP(a,b,c);}
function AL2(a,b,c,d){var e,f;e=GC(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!AAO(c,e,b)?(-1):J(e);if(f<0)return (-1);BX(d,a.ha,f);return a.e.c(b+f|0,c,d);}return (-1);}
function AR3(a,b,c,d){var e,f;e=GC(a,d);f=d.c8;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=XQ(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AKL(a,b,c,d,e){var f,g;f=GC(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Qi(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AXq(a,b){return 1;}
var AIa=G(H8);
function A13(a,b){var c=new AIa();ANj(c,a,b);return c;}
function ANj(a,b,c){PP(a,b,c);}
function AOU(a,b,c,d){var e,f;e=GC(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BX(d,a.ha,J(e));return a.e.c(b+J(e)|0,c,d);}if(FB(Ff(P(e,f)))!=FB(Ff(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Pq=G(GH);
function AM5(a,b,c,d,e){VO(a,b,c,d,e);return a;}
function AUi(a,b,c,d){ACE(a,b,c,d);return a;}
function AUE(a,b){MF(a,b);}
function AZL(a,b,c){ACQ(a,b,c);return a;}
function Y0(){var a=this;B_.call(a);a.cC=null;a.oo=null;a.mX=null;}
function AMd(a,b,c){return !K3(a,c,b)?(-1):a.bG;}
function AUd(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cC,a.bG-1|0);a:{while(true){g=a.bG;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&K3(a,c,b))break;b=b+Zz(a.oo,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bG|0,c,d)>=0)break;b=b+1|0;}return b;}
function AVW(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cC,0);g=(J(d)-c|0)-a.bG|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&K3(a,d,c))break;c=c-Zz(a.mX,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bG|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AND(a,b){var c;if(b instanceof EA)return b.dC!=P(a.cC,0)?0:1;if(b instanceof Ev)return Vs(b,0,Cr(a.cC,0,1))<=0?0:1;if(!(b instanceof DY)){if(!(b instanceof D$))return 1;return J(a.cC)>1&&b.gH==EG(P(a.cC,0),P(a.cC,1))?1:0;}a:{b:{b=b;if(!b.o(P(a.cC,0))){if(J(a.cC)<=1)break b;if(!b.o(EG(P(a.cC,0),P(a.cC,1))))break b;}c=1;break a;}c=0;}return c;}
function K3(a,b,c){var d;d=0;while(d<a.bG){if(P(b,d+c|0)!=P(a.cC,d))return 0;d=d+1|0;}return 1;}
function ADk(){B_.call(this);this.lo=null;}
function A34(a){var b=new ADk();AZZ(b,a);return b;}
function AZZ(a,b){var c,d,e;DU(a);c=new K;M(c);d=0;while(true){e=BK(d,b.K);if(e>=0){a.lo=L(c);a.bG=c.K;return;}if(d<0)break;if(e>=0)break;BM(c,FB(Ff(b.C.data[d])));d=d+1|0;}b=new BF;X(b);N(b);}
function AO0(a,b,c){var d;d=0;while(true){if(d>=J(a.lo))return J(a.lo);if(P(a.lo,d)!=FB(Ff(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OP(){B_.call(this);this.jd=null;}
function AZe(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jd))return J(a.jd);e=P(a.jd,d);f=b+d|0;if(e!=P(c,f)&&Jp(P(a.jd,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Ha=G();
var A7S=null;var A7T=null;var A7O=null;function AQ5(){AQ5=Bn(Ha);AMs();}
function AMs(){A7S=A2z();A7T=A3i();A7O=I($rt_arraycls(B),[I(B,[C(472),A2H()]),I(B,[C(473),A1H()]),I(B,[C(474),A3O()]),I(B,[C(475),A3S()]),I(B,[C(476),A7T]),I(B,[C(477),A3p()]),I(B,[C(478),A17()]),I(B,[C(479),A2U()]),I(B,[C(480),A2R()]),I(B,[C(481),A1P()]),I(B,[C(482),A1W()]),I(B,[C(483),A2X()]),I(B,[C(484),A2m()]),I(B,[C(485),A1D()]),I(B,[C(486),A3Q()]),I(B,[C(487),A1V()]),I(B,[C(488),A3n()]),I(B,[C(489),A25()]),I(B,[C(490),A3o()]),I(B,[C(491),A1R()]),I(B,[C(492),A3V()]),I(B,[C(493),A20()]),I(B,[C(494),A2e()]),
I(B,[C(495),A3M()]),I(B,[C(496),A3J()]),I(B,[C(497),A2B()]),I(B,[C(498),A1Q()]),I(B,[C(499),A3C()]),I(B,[C(500),A7S]),I(B,[C(501),A2h()]),I(B,[C(502),A2W()]),I(B,[C(503),A7S]),I(B,[C(504),A1B()]),I(B,[C(505),A7T]),I(B,[C(506),A1Z()]),I(B,[C(507),R(0,127)]),I(B,[C(508),R(128,255)]),I(B,[C(509),R(256,383)]),I(B,[C(510),R(384,591)]),I(B,[C(511),R(592,687)]),I(B,[C(512),R(688,767)]),I(B,[C(513),R(768,879)]),I(B,[C(514),R(880,1023)]),I(B,[C(515),R(1024,1279)]),I(B,[C(516),R(1280,1327)]),I(B,[C(517),R(1328,1423)]),
I(B,[C(518),R(1424,1535)]),I(B,[C(519),R(1536,1791)]),I(B,[C(520),R(1792,1871)]),I(B,[C(521),R(1872,1919)]),I(B,[C(522),R(1920,1983)]),I(B,[C(523),R(2304,2431)]),I(B,[C(524),R(2432,2559)]),I(B,[C(525),R(2560,2687)]),I(B,[C(526),R(2688,2815)]),I(B,[C(527),R(2816,2943)]),I(B,[C(528),R(2944,3071)]),I(B,[C(529),R(3072,3199)]),I(B,[C(530),R(3200,3327)]),I(B,[C(531),R(3328,3455)]),I(B,[C(532),R(3456,3583)]),I(B,[C(533),R(3584,3711)]),I(B,[C(534),R(3712,3839)]),I(B,[C(535),R(3840,4095)]),I(B,[C(536),R(4096,4255)]),
I(B,[C(537),R(4256,4351)]),I(B,[C(538),R(4352,4607)]),I(B,[C(539),R(4608,4991)]),I(B,[C(540),R(4992,5023)]),I(B,[C(541),R(5024,5119)]),I(B,[C(542),R(5120,5759)]),I(B,[C(543),R(5760,5791)]),I(B,[C(544),R(5792,5887)]),I(B,[C(545),R(5888,5919)]),I(B,[C(546),R(5920,5951)]),I(B,[C(547),R(5952,5983)]),I(B,[C(548),R(5984,6015)]),I(B,[C(549),R(6016,6143)]),I(B,[C(550),R(6144,6319)]),I(B,[C(551),R(6400,6479)]),I(B,[C(552),R(6480,6527)]),I(B,[C(553),R(6528,6623)]),I(B,[C(554),R(6624,6655)]),I(B,[C(555),R(6656,6687)]),
I(B,[C(556),R(7424,7551)]),I(B,[C(557),R(7552,7615)]),I(B,[C(558),R(7616,7679)]),I(B,[C(559),R(7680,7935)]),I(B,[C(560),R(7936,8191)]),I(B,[C(561),R(8192,8303)]),I(B,[C(562),R(8304,8351)]),I(B,[C(563),R(8352,8399)]),I(B,[C(564),R(8400,8447)]),I(B,[C(565),R(8448,8527)]),I(B,[C(566),R(8528,8591)]),I(B,[C(567),R(8592,8703)]),I(B,[C(568),R(8704,8959)]),I(B,[C(569),R(8960,9215)]),I(B,[C(570),R(9216,9279)]),I(B,[C(571),R(9280,9311)]),I(B,[C(572),R(9312,9471)]),I(B,[C(573),R(9472,9599)]),I(B,[C(574),R(9600,9631)]),
I(B,[C(575),R(9632,9727)]),I(B,[C(576),R(9728,9983)]),I(B,[C(577),R(9984,10175)]),I(B,[C(578),R(10176,10223)]),I(B,[C(579),R(10224,10239)]),I(B,[C(580),R(10240,10495)]),I(B,[C(581),R(10496,10623)]),I(B,[C(582),R(10624,10751)]),I(B,[C(583),R(10752,11007)]),I(B,[C(584),R(11008,11263)]),I(B,[C(585),R(11264,11359)]),I(B,[C(586),R(11392,11519)]),I(B,[C(587),R(11520,11567)]),I(B,[C(588),R(11568,11647)]),I(B,[C(589),R(11648,11743)]),I(B,[C(590),R(11776,11903)]),I(B,[C(591),R(11904,12031)]),I(B,[C(592),R(12032,12255)]),
I(B,[C(593),R(12272,12287)]),I(B,[C(594),R(12288,12351)]),I(B,[C(595),R(12352,12447)]),I(B,[C(596),R(12448,12543)]),I(B,[C(597),R(12544,12591)]),I(B,[C(598),R(12592,12687)]),I(B,[C(599),R(12688,12703)]),I(B,[C(600),R(12704,12735)]),I(B,[C(601),R(12736,12783)]),I(B,[C(602),R(12784,12799)]),I(B,[C(603),R(12800,13055)]),I(B,[C(604),R(13056,13311)]),I(B,[C(605),R(13312,19893)]),I(B,[C(606),R(19904,19967)]),I(B,[C(607),R(19968,40959)]),I(B,[C(608),R(40960,42127)]),I(B,[C(609),R(42128,42191)]),I(B,[C(610),R(42752,
42783)]),I(B,[C(611),R(43008,43055)]),I(B,[C(612),R(44032,55203)]),I(B,[C(613),R(55296,56191)]),I(B,[C(614),R(56192,56319)]),I(B,[C(615),R(56320,57343)]),I(B,[C(616),R(57344,63743)]),I(B,[C(617),R(63744,64255)]),I(B,[C(618),R(64256,64335)]),I(B,[C(619),R(64336,65023)]),I(B,[C(620),R(65024,65039)]),I(B,[C(621),R(65040,65055)]),I(B,[C(622),R(65056,65071)]),I(B,[C(623),R(65072,65103)]),I(B,[C(624),R(65104,65135)]),I(B,[C(625),R(65136,65279)]),I(B,[C(626),R(65280,65519)]),I(B,[C(627),R(0,1114111)]),I(B,[C(628),
A2Y()]),I(B,[C(629),BZ(0,1)]),I(B,[C(630),J5(62,1)]),I(B,[C(631),BZ(1,1)]),I(B,[C(632),BZ(2,1)]),I(B,[C(633),BZ(3,0)]),I(B,[C(634),BZ(4,0)]),I(B,[C(635),BZ(5,1)]),I(B,[C(636),J5(448,1)]),I(B,[C(637),BZ(6,1)]),I(B,[C(638),BZ(7,0)]),I(B,[C(639),BZ(8,1)]),I(B,[C(640),J5(3584,1)]),I(B,[C(641),BZ(9,1)]),I(B,[C(642),BZ(10,1)]),I(B,[C(643),BZ(11,1)]),I(B,[C(644),J5(28672,0)]),I(B,[C(645),BZ(12,0)]),I(B,[C(646),BZ(13,0)]),I(B,[C(647),BZ(14,0)]),I(B,[C(648),A3f(983040,1,1)]),I(B,[C(649),BZ(15,0)]),I(B,[C(650),BZ(16,
1)]),I(B,[C(651),BZ(18,1)]),I(B,[C(652),A2b(19,0,1)]),I(B,[C(653),J5(1643118592,1)]),I(B,[C(654),BZ(20,0)]),I(B,[C(655),BZ(21,0)]),I(B,[C(656),BZ(22,0)]),I(B,[C(657),BZ(23,0)]),I(B,[C(658),BZ(24,1)]),I(B,[C(659),J5(2113929216,1)]),I(B,[C(660),BZ(25,1)]),I(B,[C(661),BZ(26,0)]),I(B,[C(662),BZ(27,0)]),I(B,[C(663),BZ(28,1)]),I(B,[C(664),BZ(29,0)]),I(B,[C(665),BZ(30,0)])]);}
function Vw(){B_.call(this);this.r7=0;}
function ARh(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.r7!=GU(GS(EG(e,d)))?(-1):2;}
function Nu(){B5.call(this);this.g2=0;}
function APT(a){var b=new Nu();ALE(b,a);return b;}
function ALE(a,b){B3(a);a.g2=b;}
function AYa(a,b){a.e=b;}
function AUR(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dH=1;return (-1);}f=P(c,b);if(b>d.c8&&CP(P(c,b-1|0)))return (-1);if(a.g2!=f)return (-1);return a.e.c(e,c,d);}
function ANB(a,b,c,d){var e,f,g,h;if(!(c instanceof BL))return Iw(a,b,c,d);e=d.c8;f=d.y;while(true){if(b>=f)return (-1);g=JN(c,a.g2,b);if(g<0)return (-1);if(g>e&&CP(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AVf(a,b,c,d,e){var f,g;if(!(d instanceof BL))return IE(a,b,c,d,e);f=e.c8;a:{while(true){if(c<b)return (-1);g=Hn(d,a.g2,c);if(g<0)break a;if(g<b)break a;if(g>f&&CP(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKK(a,b){if(b instanceof EA)return 0;if(b instanceof Ev)return 0;if(b instanceof DY)return 0;if(b instanceof D$)return 0;if(b instanceof NB)return 0;if(!(b instanceof Nu))return 1;return b.g2!=a.g2?0:1;}
function ARI(a,b){return 1;}
function NB(){B5.call(this);this.gM=0;}
function AWu(a){var b=new NB();APW(b,a);return b;}
function APW(a,b){B3(a);a.gM=b;}
function AUD(a,b){a.e=b;}
function AKt(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BK(f,e);if(g>0){d.dH=1;return (-1);}h=P(c,b);if(g<0&&Dg(P(c,f)))return (-1);if(a.gM!=h)return (-1);return a.e.c(f,c,d);}
function AYj(a,b,c,d){var e,f;if(!(c instanceof BL))return Iw(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=JN(c,a.gM,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dg(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ARc(a,b,c,d,e){var f,g;if(!(d instanceof BL))return IE(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Hn(d,a.gM,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dg(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMe(a,b){if(b instanceof EA)return 0;if(b instanceof Ev)return 0;if(b instanceof DY)return 0;if(b instanceof D$)return 0;if(b instanceof Nu)return 0;if(!(b instanceof NB))return 1;return b.gM!=a.gM?0:1;}
function AYq(a,b){return 1;}
function D$(){var a=this;B_.call(a);a.lO=0;a.kX=0;a.gH=0;}
function AYQ(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.lO==e&&a.kX==d?2:(-1);}
function AXD(a,b,c,d){var e,f;if(!(c instanceof BL))return Iw(a,b,c,d);e=d.y;while(b<e){b=JN(c,a.lO,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.kX==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ALF(a,b,c,d,e){var f;if(!(d instanceof BL))return IE(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hn(d,a.kX,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.lO==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AYK(a,b){if(b instanceof D$)return b.gH!=a.gH?0:1;if(b instanceof DY)return b.o(a.gH);if(b instanceof EA)return 0;if(!(b instanceof Ev))return 1;return 0;}
var ABm=G(Ft);
function ALK(a,b){return b!=10?0:1;}
function AQU(a,b,c){return b!=10?0:1;}
var ABn=G(Ft);
function AZt(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ASt(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFH(){var a=this;B.call(a);a.nO=null;a.l1=null;a.iY=0;a.u3=0;}
function AXO(a){var b=new AFH();AN$(b,a);return b;}
function AN$(a,b){var c,d;while(true){c=a.iY;if(b<c)break;a.iY=c<<1|1;}d=c<<1|1;a.iY=d;d=d+1|0;a.nO=BN(d);a.l1=BN(d);a.u3=b;}
function Q7(a,b,c){var d,e,f,g;d=0;e=a.iY;f=b&e;while(true){g=a.nO.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.l1.data[f]=c;}
function Zz(a,b){var c,d,e,f;c=a.iY;d=b&c;e=0;while(true){f=a.nO.data[d];if(!f)break;if(f==b)return a.l1.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.u3;}
var ADw=G();
var Ns=G(Bf);
function A2z(){var a=new Ns();ANP(a);return a;}
function ANP(a){}
function AIg(a){return CH(B$(Dz(),9,13),32);}
var MR=G(Bf);
function A3i(){var a=new MR();ARC(a);return a;}
function ARC(a){}
function AIK(a){return B$(Dz(),48,57);}
var AFA=G(Bf);
function A2H(){var a=new AFA();ANp(a);return a;}
function ANp(a){}
function AY9(a){return B$(Dz(),97,122);}
var AFW=G(Bf);
function A1H(){var a=new AFW();AOc(a);return a;}
function AOc(a){}
function ARK(a){return B$(Dz(),65,90);}
var AFY=G(Bf);
function A3O(){var a=new AFY();ALf(a);return a;}
function ALf(a){}
function AMI(a){return B$(Dz(),0,127);}
var No=G(Bf);
function A3S(){var a=new No();AL4(a);return a;}
function AL4(a){}
function AD6(a){return B$(B$(Dz(),97,122),65,90);}
var Lw=G(No);
function A3p(){var a=new Lw();ANY(a);return a;}
function ANY(a){}
function AEw(a){return B$(AD6(a),48,57);}
var AGS=G(Bf);
function A17(){var a=new AGS();AXw(a);return a;}
function AXw(a){}
function AWa(a){return B$(B$(B$(Dz(),33,64),91,96),123,126);}
var Og=G(Lw);
function A2U(){var a=new Og();AQF(a);return a;}
function AQF(a){}
function AGZ(a){return B$(B$(B$(AEw(a),33,64),91,96),123,126);}
var AIr=G(Og);
function A2R(){var a=new AIr();ARy(a);return a;}
function ARy(a){}
function APe(a){return CH(AGZ(a),32);}
var AEZ=G(Bf);
function A1P(){var a=new AEZ();AZf(a);return a;}
function AZf(a){}
function AU6(a){return CH(CH(Dz(),32),9);}
var AEc=G(Bf);
function A1W(){var a=new AEc();A0F(a);return a;}
function A0F(a){}
function APb(a){return CH(B$(Dz(),0,31),127);}
var AHH=G(Bf);
function A2X(){var a=new AHH();ALp(a);return a;}
function ALp(a){}
function ASw(a){return B$(B$(B$(Dz(),48,57),97,102),65,70);}
var AJv=G(Bf);
function A2m(){var a=new AJv();AT7(a);return a;}
function AT7(a){}
function AXM(a){var b;b=new ZX;b.DD=a;Bz(b);b.P=1;return b;}
var AGV=G(Bf);
function A1D(){var a=new AGV();AQP(a);return a;}
function AQP(a){}
function ATk(a){var b;b=new VE;b.DH=a;Bz(b);b.P=1;return b;}
var AJe=G(Bf);
function A3Q(){var a=new AJe();ALh(a);return a;}
function ALh(a){}
function ANU(a){var b;b=new Ru;b.Ds=a;Bz(b);return b;}
var AFs=G(Bf);
function A1V(){var a=new AFs();APc(a);return a;}
function APc(a){}
function AQ1(a){var b;b=new Rt;b.Bp=a;Bz(b);return b;}
var AF$=G(Bf);
function A3n(){var a=new AF$();AL1(a);return a;}
function AL1(a){}
function AU4(a){var b;b=new Us;b.Ct=a;Bz(b);II(b.N,0,2048);b.P=1;return b;}
var ADI=G(Bf);
function A25(){var a=new ADI();ALI(a);return a;}
function ALI(a){}
function AMo(a){var b;b=new Xl;b.DS=a;Bz(b);b.P=1;return b;}
var AG8=G(Bf);
function A3o(){var a=new AG8();AOY(a);return a;}
function AOY(a){}
function A0I(a){var b;b=new Pn;b.CP=a;Bz(b);b.P=1;return b;}
var AJk=G(Bf);
function A1R(){var a=new AJk();APu(a);return a;}
function APu(a){}
function ATf(a){var b;b=new Yx;b.BP=a;Bz(b);return b;}
var AFR=G(Bf);
function A3V(){var a=new AFR();AWi(a);return a;}
function AWi(a){}
function AOt(a){var b;b=new VA;b.AY=a;Bz(b);b.P=1;return b;}
var AH1=G(Bf);
function A20(){var a=new AH1();AKN(a);return a;}
function AKN(a){}
function AMu(a){var b;b=new VC;b.B6=a;Bz(b);b.P=1;return b;}
var AE1=G(Bf);
function A2e(){var a=new AE1();ALM(a);return a;}
function ALM(a){}
function AVY(a){var b;b=new O6;b.Cq=a;Bz(b);b.P=1;return b;}
var AGD=G(Bf);
function A3M(){var a=new AGD();AOx(a);return a;}
function AOx(a){}
function AWY(a){var b;b=new XB;b.Ea=a;Bz(b);b.P=1;return b;}
var AJp=G(Bf);
function A3J(){var a=new AJp();AXG(a);return a;}
function AXG(a){}
function ARW(a){var b;b=new XI;b.Bw=a;Bz(b);return b;}
var AEG=G(Bf);
function A2B(){var a=new AEG();ALJ(a);return a;}
function ALJ(a){}
function AQz(a){var b;b=new AAg;b.DU=a;Bz(b);return b;}
var AEo=G(Bf);
function A1Q(){var a=new AEo();AYV(a);return a;}
function AYV(a){}
function APF(a){var b;b=new Zu;b.A0=a;Bz(b);b.P=1;return b;}
var AGT=G(Bf);
function A3C(){var a=new AGT();AWe(a);return a;}
function AWe(a){}
function AY1(a){var b;b=new OD;b.El=a;Bz(b);b.P=1;return b;}
var Kq=G(Bf);
function A2h(){var a=new Kq();AMB(a);return a;}
function AMB(a){}
function AE0(a){return CH(B$(B$(B$(Dz(),97,122),65,90),48,57),95);}
var AJD=G(Kq);
function A2W(){var a=new AJD();AWl(a);return a;}
function AWl(a){}
function APx(a){var b;b=EF(AE0(a),1);b.P=1;return b;}
var AIw=G(Ns);
function A1B(){var a=new AIw();ASg(a);return a;}
function ASg(a){}
function AUb(a){var b;b=EF(AIg(a),1);b.P=1;return b;}
var AEm=G(MR);
function A1Z(){var a=new AEm();AWO(a);return a;}
function AWO(a){}
function ANu(a){var b;b=EF(AIK(a),1);b.P=1;return b;}
function AHK(){var a=this;Bf.call(a);a.r2=0;a.x2=0;}
function R(a,b){var c=new AHK();A0H(c,a,b);return c;}
function A0H(a,b,c){a.r2=b;a.x2=c;}
function AOH(a){return B$(Dz(),a.r2,a.x2);}
var AHV=G(Bf);
function A2Y(){var a=new AHV();ASA(a);return a;}
function ASA(a){}
function ASl(a){return B$(B$(Dz(),65279,65279),65520,65533);}
function AIk(){var a=this;Bf.call(a);a.pk=0;a.nX=0;a.wG=0;}
function BZ(a,b){var c=new AIk();ALX(c,a,b);return c;}
function A2b(a,b,c){var d=new AIk();ASq(d,a,b,c);return d;}
function ALX(a,b,c){a.nX=c;a.pk=b;}
function ASq(a,b,c,d){a.wG=d;a.nX=c;a.pk=b;}
function AVL(a){var b;b=A2G(a.pk);if(a.wG)II(b.N,0,2048);b.P=a.nX;return b;}
function AIs(){var a=this;Bf.call(a);a.np=0;a.l4=0;a.qe=0;}
function J5(a,b){var c=new AIs();AMv(c,a,b);return c;}
function A3f(a,b,c){var d=new AIs();ATg(d,a,b,c);return d;}
function AMv(a,b,c){a.l4=c;a.np=b;}
function ATg(a,b,c,d){a.qe=d;a.l4=c;a.np=b;}
function AKi(a){var b;b=new Y5;AFm(b,a.np);if(a.qe)II(b.N,0,2048);b.P=a.l4;return b;}
var AHN=G();
var ADW=G();
function AEF(b){var c,d,e,f,g,h,i;c=AQ_(Gf(b));d=MJ(c);e=BN(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+MJ(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=OL(c);h=h+1|0;}return e;}
function Nc(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function V6(){var a=this;B.call(a);a.w4=0;a.sx=0;a.xd=null;}
function AM6(a,b,c){var d=new V6();ARx(d,a,b,c);return d;}
function ARx(a,b,c,d){a.w4=b;a.sx=c;a.xd=d;}
function AFM(){var a=this;B.call(a);a.wi=null;a.xE=0;}
function AQ_(a){var b=new AFM();AVd(b,a);return b;}
function AVd(a,b){a.wi=b;}
var AH9=G();
function MJ(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.wi.data;f=b.xE;b.xE=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function OL(b){var c,d;c=MJ(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Md=G(Bt);
function ABU(){var a=this;B.call(a);a.xG=null;a.xH=null;}
function AKk(a,b){var c,d,e,f;c=a.xG;d=a.xH;e=new ACU;f=AA5(EK(d));AJR(e,b,null,f);HT(c,e);}
function ABT(){B.call(this);this.wj=null;}
function ARX(a,b){Bm(a.wj,b);}
function AHB(){B.call(this);this.Q$=null;}
function RN(){B.call(this);this.rT=null;}
function AVR(a,b){b.g1=a.rT;}
function Q$(){B.call(this);this.s9=null;}
function ALT(a,b){Jf(a.s9,b);}
function ABi(){var a=this;B.call(a);a.Em=null;a.kb=null;}
function AMM(a,b){var c;c=a.kb;b=b;a.kb=Xi(!c.nJ&&!b.eC?0:1);return 1;}
function AAH(){var a=this;B.call(a);a.BI=null;a.r_=null;}
function AAJ(){B.call(this);this.D3=null;}
function A0u(a,b){$rt_globals.console.info($rt_ustr(b));}
var Kv=G(0);
function Pf(){var a=this;B.call(a);a.kU=0;a.A2=null;}
function AYG(a,b){var c,d;c=Cu(b);d=new K;M(d);H(H(d,C(666)),c);$rt_globals.console.info($rt_ustr(L(d)));a.kU=a.kU+1|0;MY(b,a);}
function AWh(a,b){var c;b=Cu(b);c=new K;M(c);H(H(c,C(667)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ARi(a){var b;b=a.kU-1|0;a.kU=b;if(!b)Bm(Bx(),C(668));}
function AAa(){var a=this;B.call(a);a.D9=null;a.D8=null;a.D7=null;}
function AA1(){var a=this;B.call(a);a.CG=null;a.CH=null;}
function Wd(){B.call(this);this.xB=null;}
function AUj(a){var b,c,d,e;b=a.xB;c=Bx();d=H_(b);e=new K;M(e);H(H(e,C(669)),d);Bm(c,L(e));c=b.y2;e=new ZV;e.f3=b;e.lj=BH();e.lK=BH();MY(c,e);}
function Ue(){var a=this;Y.call(a);a.v6=null;a.D5=null;}
function AMO(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cs^DP(a.v6,c):0;}
function Uc(){var a=this;Y.call(a);a.zx=null;a.uq=null;a.Ce=null;}
function ATB(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cs^DP(a.zx,c):0;return a.uq.o(b)&&!d?1:0;}
function PA(){var a=this;Y.call(a);a.k1=null;a.C5=null;}
function AOy(a,b){return a.bh^DP(a.k1,b);}
function AV0(a){var b,c,d;b=new K;M(b);c=Ic(a.k1,0);while(c>=0){JQ(b,HJ(c));BM(b,124);c=Ic(a.k1,c+1|0);}d=b.K;if(d>0)T5(b,d-1|0);return L(b);}
function W0(){var a=this;Y.call(a);a.xR=null;a.DG=null;}
function AYU(a,b){return a.xR.o(b);}
function WY(){var a=this;Y.call(a);a.nZ=0;a.wA=null;a.ov=null;}
function ARg(a,b){return !(a.nZ^DP(a.ov.I,b))&&!(a.nZ^a.ov.en^a.wA.o(b))?0:1;}
function WZ(){var a=this;Y.call(a);a.l2=0;a.t8=null;a.na=null;}
function AXd(a,b){return !(a.l2^DP(a.na.I,b))&&!(a.l2^a.na.en^a.t8.o(b))?1:0;}
function W3(){var a=this;Y.call(a);a.Ah=0;a.ub=null;a.t5=null;a.Dd=null;}
function AVm(a,b){return a.Ah^(!a.ub.o(b)&&!a.t5.o(b)?0:1);}
function W5(){var a=this;Y.call(a);a.sl=0;a.xN=null;a.xm=null;a.Ej=null;}
function AKe(a,b){return a.sl^(!a.xN.o(b)&&!a.xm.o(b)?0:1)?0:1;}
function W1(){var a=this;Y.call(a);a.rA=null;a.Ek=null;}
function ANq(a,b){return C9(a.rA,b);}
function W2(){var a=this;Y.call(a);a.zV=null;a.Dh=null;}
function AO4(a,b){return C9(a.zV,b)?0:1;}
function W6(){var a=this;Y.call(a);a.su=null;a.xP=0;a.tB=null;}
function AR6(a,b){return !C9(a.su,b)&&!(a.xP^DP(a.tB.I,b))?0:1;}
function W7(){var a=this;Y.call(a);a.sS=null;a.yz=0;a.sL=null;}
function AU0(a,b){return !C9(a.sS,b)&&!(a.yz^DP(a.sL.I,b))?1:0;}
function Pz(){var a=this;Y.call(a);a.tx=0;a.zH=null;a.ux=null;a.A6=null;}
function A1A(a,b){return !(a.tx^a.zH.o(b))&&!C9(a.ux,b)?0:1;}
function PW(){var a=this;Y.call(a);a.z4=0;a.pT=null;a.qf=null;a.Bj=null;}
function ANs(a,b){return !(a.z4^a.pT.o(b))&&!C9(a.qf,b)?1:0;}
function Px(){var a=this;Y.call(a);a.wX=null;a.Bm=null;}
function AL6(a,b){return C9(a.wX,b);}
function Py(){var a=this;Y.call(a);a.rp=null;a.Ei=null;}
function AVP(a,b){return C9(a.rp,b)?0:1;}
function PD(){var a=this;Y.call(a);a.Ad=null;a.sN=0;a.AQ=null;}
function AOb(a,b){return C9(a.Ad,b)&&a.sN^DP(a.AQ.I,b)?1:0;}
function Pw(){var a=this;Y.call(a);a.yQ=null;a.x0=0;a.sM=null;}
function AZV(a,b){return C9(a.yQ,b)&&a.x0^DP(a.sM.I,b)?0:1;}
function PB(){var a=this;Y.call(a);a.y7=0;a.v4=null;a.sj=null;a.Dc=null;}
function AUl(a,b){return a.y7^a.v4.o(b)&&C9(a.sj,b)?1:0;}
function PC(){var a=this;Y.call(a);a.yL=0;a.vx=null;a.y3=null;a.Dk=null;}
function AQs(a,b){return a.yL^a.vx.o(b)&&C9(a.y3,b)?0:1;}
var LV=G(0);
function Zt(){var a=this;B.call(a);a.Bf=null;a.zI=null;a.lf=null;a.cF=null;a.jU=0;a.or=0;}
function Ot(a,b){var c,d,e;c=J(a.lf);if(b>=0&&b<=c){AC0(a.cF,null,(-1),(-1));d=a.cF;d.lA=1;d.eE=b;c=d.iA;if(c<0)c=b;d.iA=c;b=a.zI.co(b,a.lf,d);if(b==(-1))a.cF.dH=1;if(b>=0){d=a.cF;if(d.j5){e=d.d5.data;if(e[0]==(-1)){c=d.eE;e[0]=c;e[1]=c;}d.iA=Mj(d);return 1;}}a.cF.eE=(-1);return 0;}d=new BF;Bl(d,Dh(b));N(d);}
function AGC(a){return PV(a.cF,0);}
function AHX(a){return Rv(a.cF,0);}
function ADA(a){return a.cF.j8;}
function AIy(){var a=this;B.call(a);a.Nq=null;a.No=null;a.Nr=0.0;}
var C8=G(0);
var A5k=null;var A6D=null;var A5m=null;var A5l=null;var A5o=null;var A5n=null;var A5q=null;var A5p=null;var A5s=null;var A5r=null;var A5t=null;function AF0(){AF0=Bn(C8);A0L();}
function A0L(){A5k=CA(0);A6D=Ds(8,8,8);A5m=S(C(670));A5l=Ds(255,255,255);A5o=S(C(671));A5n=S(C(672));A5q=S(C(673));A5p=S(C(674));A5s=EP(205,205,205,153);A5r=EP(255,255,255,0);A5t=S(C(115));}
function Cw(){CG.call(this);this.oK=null;}
var A7U=null;var A7V=null;var A7W=null;var A7X=null;var A7Y=null;var A7Z=null;var A70=null;var A71=null;var A72=null;var A73=null;var A74=null;var A75=null;var A76=null;var A77=null;var A78=null;var A5u=null;function AFn(){AFn=Bn(Cw);A09();}
function DF(a,b,c){var d=new Cw();YF(d,a,b,c);return d;}
function A0W(a,b,c,d){var e=new Cw();ADT(e,a,b,c,d);return e;}
function YF(a,b,c,d){AFn();DD(a,b,c);a.oK=Jz(d,null);}
function ADT(a,b,c,d,e){AFn();DD(a,b,c);a.oK=Jz(d,e);}
function A09(){var b;b=new Cw;AF0();YF(b,C(371),0,A6D);A7U=b;A7V=DF(C(372),1,S(C(675)));A7W=DF(C(374),2,S(C(676)));A7X=DF(C(376),3,S(C(677)));A7Y=DF(C(378),4,A6D);A7Z=DF(C(379),5,S(C(678)));A70=DF(C(381),6,S(C(419)));A71=DF(C(383),7,S(C(679)));A72=DF(C(385),8,S(C(680)));A73=A0W(C(387),9,A6D,Ds(237,235,252));A74=A0W(C(388),10,S(C(417)),S(C(681)));A75=DF(C(389),11,S(C(419)));A76=DF(C(391),12,S(C(420)));A77=DF(C(393),13,S(C(682)));b=DF(C(394),14,S(C(395)));A78=b;A5u=I(Cw,[A7U,A7V,A7W,A7X,A7Y,A7Z,A70,A71,A72,A73,
A74,A75,A76,A77,b]);}
var DV=G(0);
var A5y=null;var A5z=null;var A5v=null;var A5w=null;var A5x=null;var A6E=null;var A6F=null;var A5A=null;var A5B=null;function ATP(){ATP=Bn(DV);AVj();}
function AVj(){A5y=S(C(113));A5z=S(C(683));A5v=S(C(684));A5w=S(C(685));A5x=S(C(686));A6E=S(C(113));A6F=S(C(683));A5A=EP(205,205,205,153);A5B=Ds(247,248,250);}
function ABK(){var a=this;B.call(a);a.lC=null;a.iu=0;}
var OI=G(HL);
function AM9(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Gl(d,a.bb);DT(d,a.bb,b);e=a.dd.c(b,c,d);if(e>=0)break;DT(d,a.bb,g);b=b+1|0;}}return b;}
function A1p(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gl(e,a.bb);DT(e,a.bb,c);f=a.dd.c(c,d,e);if(f>=0)break;DT(e,a.bb,g);c=c+(-1)|0;}}return c;}
function ALV(a){return null;}
var QA=G(Bt);
var UH=G(Bt);
function Tl(){F5.call(this);this.CK=0;}
function Qu(){F5.call(this);this.Ed=0;}
function UF(){B.call(this);this.qm=null;}
function AVX(a,b){a.qm.j(HW(b));}
function UG(){var a=this;B.call(a);a.q_=null;a.ra=null;}
function AUk(a,b){var c,d;c=a.q_;d=a.ra;b.text().then(Bu(c,"f"),Bu(d,"f"));}
function ABb(){var a=this;B.call(a);a.sv=null;a.zy=null;a.uS=0;a.mc=0;}
function M_(a,b){return Cf(a.sv)<b?0:1;}
var ADE=G();
function AD2(b){var c,d,e,f,g,h,i,j;c=AUw();d=CI(b);Bq(c,d);e=0;f=0;while(f<d){g=Ca(b,f);h=Jg(g);Bq(c,h);i=0;while(i<h){j=JK(g,i);GT(c,e,LS(j));e=e+LS(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Qq(c);}
function ADK(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=Q(Ge,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1)){j=new Ge;j.gO=h;e[g]=j;}else{j=new Ge;j.gO=h;j.m1=BN(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].m1.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function XC(){B.call(this);this.wf=null;}
function AWS(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.wf;d=CN(c[0]);c=LR(d);e=new Tm;d=ADK(c);f=ADK(c);g=Ba(c);h=Q(LP,g);i=h.data;j=0;while(j<g){i[j]=M0(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));j=j+1|0;}AE8(e,d,f,h);b.kD=e;MK(b.E,e.z0);MK(b.G,b.kD.z1);c=b.lY;e=b.kD;c.hS=e;b.fr.eQ=e;}
var ADV=G(0);
function ABv(){B.call(this);this.v9=null;}
function AQB(a,b){var c,d,e,f;c=a.v9;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.r_;c=Bx();b=Cu(b);e=new K;M(e);H(H(e,C(687)),b);Bm(c,L(e));b=Bx();f=d.length;c=new K;M(c);U(H(c,C(688)),f);Bm(b,L(c));}
function ABx(){var a=this;B.call(a);a.zq=null;a.zr=null;}
function APM(a,b){var c,d;c=a.zq;d=a.zr;b.arrayBuffer().then(Bu(c,"f"),Bu(d,"f"));}
function ABy(){var a=this;B.call(a);a.w_=null;a.kA=null;a.j1=null;}
function AAk(a){var b,c;b=a.w_.next();c=a.j1.o2;b.then(Bu(a,"f"),Bu(c,"f"));}
function AQH(a,b){var c,d;if(b.done?1:0)a.kA.u9();else{AAk(a);c=b.value;if(!(c.kind==='file'?1:0)){b=new ABq;d=a.j1;ADt(b,c,d.o2,X2(d));a.kA.sY(b);}else{b=A1K(c,null,X2(a.j1));a.kA.v5(b);}}}
function WJ(){var a=this;B.call(a);a.xj=null;a.xk=null;}
function ZV(){var a=this;B.call(a);a.lj=null;a.lK=null;a.f3=null;}
function AZ7(a,b){var c,d;c=new ADd;d=a.f3;SV(c,b,d.jp+1|0,d.i5);BC(a.lj,c);}
function AR4(a,b){var c;c=AA6(EK(b),a.f3.jp+1|0);c.nW=AIl(a.f3.i5,b,c);BC(a.lK,c);}
function A0p(a){var b,c,d;if(!(Eu(a.lj)&&Eu(a.lK))){b=Gb(a.lj,A6p);c=Gb(a.lK,A6p);KP(b,A7p);KP(c,A7p);a.f3.eY=I0(b,c);}Kj(a.f3);d=a.f3;d.i5.wb(d);}
function ABf(){var a=this;B.call(a);a.d5=null;a.kt=null;a.oM=null;a.mR=null;a.q1=0;a.j5=0;a.c8=0;a.y=0;a.eE=0;a.j8=0;a.gi=0;a.dH=0;a.DZ=0;a.iA=0;a.lA=0;}
function BX(a,b,c){a.kt.data[b]=c;}
function Dy(a,b){return a.kt.data[b];}
function Mj(a){return Rv(a,0);}
function Rv(a,b){Y3(a,b);return a.d5.data[(b*2|0)+1|0];}
function DT(a,b,c){a.d5.data[b*2|0]=c;}
function MG(a,b,c){a.d5.data[(b*2|0)+1|0]=c;}
function Gl(a,b){return a.d5.data[b*2|0];}
function IX(a,b){return a.d5.data[(b*2|0)+1|0];}
function AFC(a){return PV(a,0);}
function PV(a,b){Y3(a,b);return a.d5.data[b*2|0];}
function VJ(a,b){return a.oM.data[b];}
function EM(a,b,c){a.oM.data[b]=c;}
function Y3(a,b){var c;if(!a.j5){c=new C4;X(c);N(c);}if(b>=0&&b<a.q1)return;c=new BF;Bl(c,Dh(b));N(c);}
function AC0(a,b,c,d){a.j5=0;a.lA=2;Jm(a.d5,(-1));Jm(a.kt,(-1));if(b!==null)a.mR=b;if(c>=0){a.c8=c;a.y=d;}a.eE=a.c8;}
function AEy(a){return a.lA;}
function SR(){B.call(this);this.w1=null;}
function AW8(a,b){a.w1.j($rt_str(b.message));}
function ABr(){B.call(this);this.v3=null;}
function AYn(a){EC(a.v3);}
function ZX(){Y.call(this);this.DD=null;}
function ASa(a,b){return CC(b)!=2?0:1;}
function VE(){Y.call(this);this.DH=null;}
function AT_(a,b){return CC(b)!=1?0:1;}
function Ru(){Y.call(this);this.Ds=null;}
function AK1(a,b){return Q4(b);}
function Rt(){Y.call(this);this.Bp=null;}
function AVJ(a,b){return 0;}
function Us(){Y.call(this);this.Ct=null;}
function AN4(a,b){return !CC(b)?0:1;}
function Xl(){Y.call(this);this.DS=null;}
function A0o(a,b){return CC(b)!=9?0:1;}
function Pn(){Y.call(this);this.CP=null;}
function AP9(a,b){return HG(b);}
function Yx(){Y.call(this);this.BP=null;}
function AQ4(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function VA(){Y.call(this);this.AY=null;}
function A1e(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function VC(){Y.call(this);this.B6=null;}
function AMg(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function O6(){Y.call(this);this.Cq=null;}
function ASi(a,b){a:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function XB(){Y.call(this);this.Ea=null;}
function AXl(a,b){return Kx(b);}
function XI(){Y.call(this);this.Bw=null;}
function AYD(a,b){return XJ(b);}
function AAg(){Y.call(this);this.DU=null;}
function A0c(a,b){return CC(b)!=3?0:1;}
function Zu(){Y.call(this);this.A0=null;}
function ASC(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function OD(){Y.call(this);this.El=null;}
function AMa(a,b){a:{b:{switch(CC(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HG(b);}return b;}
function L5(){Y.call(this);this.m7=0;}
function A2G(a){var b=new L5();AFm(b,a);return b;}
function AFm(a,b){Bz(a);a.m7=b;}
function AP$(a,b){return a.bh^(a.m7!=CC(b&65535)?0:1);}
var Y5=G(L5);
function AZD(a,b){return a.bh^(!(a.m7>>CC(b&65535)&1)?0:1);}
var ACK=G(0);
function X5(){B.call(this);this.vd=null;}
function AOO(a){var b,c;b=a.vd;c=b.xj;b=b.xk;c.EC(b.lv,b.oT,null);}
var AFb=G(0);
function Qd(){var a=this;B.call(a);a.AV=null;a.AU=null;a.AT=null;}
function ARe(a){a.AV.tb(a.AU,a.AT);}
var AHq=G();
function YK(){B.call(this);this.vz=null;}
function ANe(a){var b;b=a.vz;IA(b);b.i5.tI(b);}
function ABA(){var a=this;B.call(a);a.wL=null;a.wH=null;}
function AXT(a,b){var c,d,e,f;c=a.wL;d=a.wH;e=Lj(c.i3,d);b=AHt(b);f=AMP(b.jO,AA5(e));Ef(c.l_,d,f);if(BT(c.oQ,d))ACN(c,f);}
function ABB(){var a=this;B.call(a);a.Ae=null;a.Af=null;}
function AWy(a,b){var c,d,e;c=a.Ae;d=a.Af;c=Lj(c.i3,d);d=ED();e=new K;M(e);H(H(H(H(e,C(689)),c),C(29)),b);Bm(d,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bH",A4h(AO_),"cK",A4g(ALD)],Rj,0,B,[],0,3,0,0,0,VT,0,B,[],3,3,0,0,0,Vx,0,B,[],3,3,0,0,0,ABX,0,B,[VT,Vx],0,3,0,0,0,AHG,0,B,[],4,0,0,0,0,AHv,0,B,[],4,3,0,0,0,GN,0,B,[],0,3,0,0,0,Em,0,GN,[],0,3,0,0,0,Bt,0,Em,[],0,3,0,0,0,AIt,0,Bt,[],0,3,0,0,0,C2,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,0,J8,0,B,[],3,3,0,0,0,BL,"String",1,B,[C2,CJ,J8],0,3,0,E8,["cK",A4g(ALB),"bH",A4h(Bj),"gn",A4g(Nz),"lS",A4h(AM8)],Fr,0,GN,[],0,3,0,0,0,Ie,0,Fr,[],0,3,0,0,0,AH_,0,Ie,[],0,3,0,0,0,Ei,0,B,[C2],1,3,0,0,0,Hy,
0,Ei,[CJ],0,3,0,0,["gn",A4g(ATn),"bH",A4h(A00),"lS",A4h(AWW)],GH,0,B,[C2,J8],0,0,0,0,["jB",A4h(MF),"cK",A4g(L)],Jy,0,B,[],3,3,0,0,0,K,0,GH,[Jy],0,3,0,0,["o$",A4k(AWR),"oy",A4j(AMn),"cK",A4g(D8),"jB",A4h(AOu),"pp",A4i(AXc)],EX,0,Ie,[],0,3,0,0,0,AI7,0,EX,[],0,3,0,0,0,AH4,0,EX,[],0,3,0,0,0,AAe,0,B,[],3,3,0,0,0,C5,0,B,[],3,3,0,0,0,Xk,0,B,[],3,0,0,0,0,J0,0,B,[AAe,C5,Xk],1,3,0,0,["cD",A4g(Er)],YY,0,J0,[],0,3,0,0,0,AHd,0,B,[],0,3,0,0,0,AJE,0,B,[],4,3,0,0,0,BR,0,B,[],3,3,0,0,0,Cb,0,B,[BR],3,3,0,0,0,AAn,0,B,[Cb],0,3,
0,0,["bg",A4h(A1b)],AFo,0,B,[],0,3,0,0,0,AIF,0,B,[BR],1,3,0,0,0,ADB,0,B,[],3,3,0,0,0,AJs,0,B,[],3,3,0,0,0,AFV,0,B,[],3,3,0,0,0,LL,0,B,[],0,3,0,0,0,AD7,0,B,[BR],1,3,0,0,0,AAo,0,B,[Cb],0,3,0,0,["bg",A4h(AKf)],AAm,0,B,[Cb],0,3,0,0,["bg",A4h(A0d)],Lt,0,B,[],4,3,0,0,0,AFT,0,B,[],4,3,0,0,0,AHY,0,B,[],0,3,0,0,0,AKc,0,B,[],4,3,0,0,0,VU,0,B,[Cb],0,3,0,0,["bg",A4h(AX2)]]);
$rt_metadata([AF6,0,B,[BR],1,3,0,0,0,AHl,0,B,[],0,3,0,0,0,ABz,0,B,[BR],3,3,0,0,0,AIv,0,B,[ABz],1,3,0,0,["J0",A4h(AV8),"P_",A4g(AO8)],AEQ,0,B,[BR],1,3,0,0,0,F6,0,B,[],3,3,0,0,0,R5,0,B,[F6],0,3,0,0,0,BF,0,Bt,[],0,3,0,0,0,AIT,0,B,[],4,3,0,0,0,GV,0,Bt,[],0,3,0,0,0,I4,0,Bt,[],0,3,0,0,0,Di,0,B,[CJ],0,3,0,0,0,Vt,0,B,[BR],3,3,0,0,0,Zv,0,B,[Vt],3,3,0,0,0,EQ,0,B,[BR],3,3,0,0,0,AHf,0,B,[BR,Zv,EQ],1,3,0,0,["IO",A4g(AXI),"Jl",A4h(AZH),"QY",A4h(AZv),"MA",A4h(AU2),"Pv",A4h(AKv),"Lc",A4g(AMh),"P9",A4i(AZE),"JA",A4j(AOh),"J7",
A4g(AT$),"Ko",A4g(AYo),"ON",A4h(AZ_),"Nd",A4g(APo),"Rg",A4h(ANW),"Hx",A4g(APH),"NR",A4g(AS7),"Q_",A4g(AOI),"EZ",A4h(AK7),"JE",A4g(A02),"O5",A4i(AWt),"M2",A4i(APg),"P1",A4i(ASo),"PJ",A4g(ATu),"Qq",A4g(ANG),"J_",A4h(AMq),"Ox",A4h(ANi),"Mt",A4i(AWD),"Ha",A4g(AOR),"JZ",A4h(AUa),"Lp",A4g(ANh),"Kv",A4g(AQJ),"Mh",A4h(AKl),"Hw",A4h(ART),"Q6",A4h(AUt),"GL",A4g(AZ2),"MR",A4i(AUA),"PX",A4h(AYw),"G3",A4g(AQ8),"LJ",A4i(AP7),"Fr",A4i(APQ),"NC",A4g(ARO),"Kb",A4h(ASM),"Gr",A4j(AXS),"FR",A4g(AMl),"Gv",A4i(AUN),"M8",A4g(ATQ),
"I6",A4g(A0X),"OK",A4g(AP4),"Eo",A4g(ATO),"IG",A4i(AP8),"Lq",A4h(AU_),"Ov",A4h(ANn),"FK",A4g(AY8)],O7,0,B,[Cb],0,3,0,0,["bg",A4h(AQE)],AIh,0,B,[],4,3,0,0,0,XA,0,B,[EQ],3,3,0,0,0,Q_,0,B,[EQ],3,3,0,0,0,YN,0,B,[EQ],3,3,0,0,0,Sm,0,B,[EQ],3,3,0,0,0,ACH,0,B,[EQ],3,3,0,0,0,AA0,0,B,[EQ,XA,Q_,YN,Sm,ACH],3,3,0,0,0,AHE,0,B,[BR,AA0],1,3,0,0,["Pg",A4i(AX$),"Qv",A4i(AWU),"FU",A4j(ANI),"MX",A4h(ALg),"Ih",A4j(AVo)],BS,0,Bt,[],0,3,0,0,0,ADg,0,Bt,[],0,3,0,0,0,Ia,0,BF,[],0,3,0,0,0,AHS,0,B,[],0,3,0,0,0,Yq,0,B,[],3,3,0,0,0,W_,0,
B,[Yq],3,3,0,0,0,ZB,0,B,[W_],0,3,0,0,0,BE,0,B,[],3,3,0,0,0,AIC,0,B,[BE],0,3,0,0,0,Z,0,B,[],3,3,0,0,0,AID,0,B,[Z],0,3,0,0,0,YR,0,B,[BR],3,3,0,0,0,TB,0,B,[YR],0,3,0,0,["Hy",A4h(AWs)],Tz,0,B,[Z],0,3,0,0,0,Yj,0,B,[BR],3,3,0,0,0,TA,0,B,[Yj],0,3,0,0,["As",A4i(AMA)],AGe,0,B,[BR],1,3,0,0,0,Cx,0,B,[BR],3,3,0,0,0,Ty,0,B,[Cx],0,3,0,0,["cr",A4h(AQI)],Zm,0,B,[],0,3,0,0,0,T6,0,B,[],3,3,0,0,["e8",A4h(ATc)],Hq,0,B,[T6],3,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Fu,0,B,[Hq],1,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH),"et",A4g(Eu),"qg",
A4h(AZk)],Ni,0,B,[Hq],3,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Mn,0,B,[Ni],3,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)]]);
$rt_metadata([Fh,0,Fu,[Mn],1,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH),"yt",A4h(AQW),"b6",A4g(B4),"ti",A4i(AQk),"nP",A4i(AZX),"bH",A4h(APA)],L0,0,Fh,[],1,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Oq,0,B,[Hq],3,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],AC1,0,B,[Oq,Ni],3,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],SU,0,L0,[AC1],0,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Li,0,B,[],3,3,0,0,0,D9,0,B,[Li],1,3,0,0,0,En,0,B,[],3,3,0,0,0,UM,0,B,[Li],3,3,0,0,0,OK,0,B,[UM],3,3,0,0,0,Xq,0,D9,[En,C2,OK],0,3,0,0,0,Zq,0,B,[BE],0,3,0,0,0,Zr,0,B,[Cb],0,3,
0,0,["bg",A4h(ATt)],AEb,0,B,[],0,3,0,0,0,Nx,0,B,[],1,3,0,0,0,Tr,0,Nx,[],0,3,0,0,0,Ci,0,B,[C5],1,3,0,0,["cg",A4h(A0Y)],XY,0,B,[],0,3,0,0,0,AB2,0,B,[Cx],0,3,0,0,["cr",A4h(AYh)],AB3,0,B,[Cx],0,3,0,0,["cr",A4h(AYs)],AB4,0,B,[Cx],0,3,0,0,["cr",A4h(APl)],AB5,0,B,[Cx],0,3,0,0,["cr",A4h(AXa)],AB6,0,B,[Cx],0,3,0,0,["cr",A4h(AXm)],AB7,0,B,[Cx],0,3,0,0,["cr",A4h(AQN)],AB8,0,B,[Cx],0,3,0,0,["cr",A4h(ANH)],AB9,0,B,[Cx],0,3,0,0,["cr",A4h(A1k)],AB$,0,B,[Cx],0,3,0,0,["cr",A4h(ANf)],AB_,0,B,[Cx],0,3,0,0,["cr",A4h(ARs)],U9,0,
B,[Cx],0,3,0,0,["cr",A4h(A0Z)],U$,0,B,[Cx],0,3,0,0,["cr",A4h(AO6)],U_,0,B,[Cx],0,3,0,0,["cr",A4h(APq)],Va,0,B,[Cx],0,3,0,0,["cr",A4h(AYy)],AAI,0,B,[],3,3,0,0,0,AAT,0,B,[AAI],0,3,0,0,0,AAS,0,B,[Cx],0,3,0,0,["cr",A4h(AOm)],Om,0,B,[],0,3,0,0,0,Kk,0,B,[F6],0,3,0,0,["pv",A4i(MB)],AGp,0,B,[],0,3,0,0,0,Ep,0,B,[],3,3,0,0,0,Cp,0,B,[Ep],3,3,0,0,0,CB,0,B,[],3,3,0,0,["bQ",A4h(AWN),"cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL)],Ey,0,B,[],3,3,0,0,0,C6,0,B,[Ep],3,3,0,0,0,Fs,0,B,[],3,3,0,0,0,DH,0,B,[],3,3,0,0,0,FK,0,B,[DH],3,3,
0,0,0,QF,0,B,[C5],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cK",A4g(AGW),"bH",A4h(AOd)],ACc,0,B,[],0,3,0,0,0,AFX,0,B,[],0,3,0,0,0]);
$rt_metadata([AHs,0,B,[],3,3,0,0,0,Yh,0,B,[],0,3,0,0,0,NM,0,B,[],0,3,0,0,0,Dc,0,NM,[],0,3,0,0,0,AJC,0,Dc,[],0,3,0,0,0,Fi,0,Dc,[],0,3,0,0,0,YB,0,Dc,[],0,3,0,0,0,AET,0,Fi,[],0,3,0,0,0,Hl,0,Fi,[],0,3,0,0,0,Pd,0,Hl,[],0,3,0,0,0,AGF,0,Hl,[],0,3,0,0,0,AHF,0,Fi,[],0,3,0,0,0,AI9,0,Dc,[],0,3,0,0,0,ADR,0,Dc,[],0,3,0,0,0,Y8,0,B,[BR],3,3,0,0,0,AKa,0,B,[Y8],3,3,0,0,0,Yg,0,B,[C5],0,3,0,0,0,Qz,0,B,[],0,3,0,0,0,CG,0,B,[CJ,C2],1,3,0,0,0,G0,0,CG,[],12,3,0,Jn,0,L9,0,B,[],3,3,0,0,0,Sg,0,B,[L9],3,3,0,0,0,AAX,0,B,[],3,3,0,0,0,GJ,
0,B,[Sg,AAX],1,3,0,0,0,My,0,GJ,[],0,3,0,0,0,AEA,0,My,[],0,3,0,0,0,Hw,0,GJ,[],1,3,0,0,0,Lr,0,Hw,[],0,3,0,0,["mi",A4j(AOf)],Eb,0,CG,[],12,3,0,A0q,0,Mq,0,B,[CJ],1,3,0,0,0,Ma,0,Mq,[],0,3,0,AEv,0,Xu,0,B,[],0,3,0,0,0,HX,0,CG,[],12,0,0,APh,0,Nk,0,Hw,[],0,3,0,0,["mi",A4j(AMT)],AFS,0,BS,[],0,3,0,0,0,TC,0,Em,[],0,3,0,0,0,L_,0,B,[BR],3,3,0,0,0,ACW,0,B,[L_],0,3,0,0,["bg",A4h(ARa)],ACX,0,B,[L_],0,3,0,0,["bg",A4h(ALw)],H6,0,B,[],1,3,0,0,0,Zj,0,B,[],3,3,0,0,0,Lm,0,H6,[CJ,Jy,J8,Zj],1,3,0,0,0,MM,0,H6,[CJ],1,3,0,0,0,Ix,0,B,[],
0,3,0,Hd,0,OO,0,Ci,[],0,3,0,0,["bP",A4g(AO1),"bZ",A4i(ANV)],HF,0,Ci,[],1,3,0,0,["bZ",A4i(AE3)],CM,0,HF,[],1,3,0,0,["bP",A4g(AMN),"bZ",A4i(It),"cg",A4h(ALo)],GG,0,B,[],3,3,0,0,0,MU,0,B,[],3,3,0,0,0,F1,0,B,[],3,3,0,0,0]);
$rt_metadata([KH,0,CM,[CB,GG,MU,F1,Ey,Fs,FK],0,3,0,0,["hK",A4i(A0E),"cg",A4h(AQZ),"bP",A4g(AXj),"gQ",A4g(AWo),"Ak",A4g(ARj),"u5",A4g(AXf),"ty",A4h(ARS),"m0",A4h(AX5),"h2",A4h(AL_),"bZ",A4i(AOw),"hp",A4h(AKV),"bQ",A4h(AYl),"cu",A4j(AWp),"cv",A4i(APk),"dv",A4i(AYN),"dt",A4j(AQA),"cV",A4g(AWQ)],AF2,0,KH,[],0,3,0,0,["gQ",A4g(APv)],AGn,0,B,[],0,3,0,0,0,AIx,0,B,[BR],1,3,0,0,0,KN,0,Lm,[],1,0,0,0,0,AEO,0,KN,[],0,0,0,0,0,Lf,0,B,[],1,3,0,0,0,NQ,0,B,[],0,3,0,0,0,ADH,0,B,[],0,3,0,0,0,IU,0,B,[BR],3,3,0,0,0,V2,0,B,[IU],0,
3,0,0,["bg",A4h(AM0)],V1,0,B,[IU],0,3,0,0,["bg",A4h(AP1)],VZ,0,B,[Cb],0,3,0,0,["bg",A4h(AQq)],VY,0,B,[Cb],0,3,0,0,["bg",A4h(AUO)],W,0,B,[],3,3,0,0,0,SA,0,B,[W],0,3,0,0,["j",A4h(A03)],SB,0,B,[W],0,3,0,0,["j",A4h(AWV)],TP,0,B,[BE],0,3,0,0,["ba",A4h(AR7)],TO,0,B,[BE],0,3,0,0,["ba",A4h(AKD)],TL,0,B,[BE],0,3,0,0,["ba",A4h(AVr)],TK,0,B,[BE],0,3,0,0,["ba",A4h(AX3)],TN,0,B,[BE],0,3,0,0,["ba",A4h(AMH)],TM,0,B,[BE],0,3,0,0,["ba",A4h(ATa)],TS,0,B,[BE],0,3,0,0,["ba",A4h(AMm)],TR,0,B,[BE],0,3,0,0,["ba",A4h(AOT)],TU,0,B,
[BE],0,3,0,0,["ba",A4h(AZm)],TT,0,B,[BE],0,3,0,0,["ba",A4h(AKo)],Z0,0,B,[BE],0,3,0,0,["ba",A4h(AKy)],ZZ,0,B,[BE],0,3,0,0,["ba",A4h(AW0)],ZY,0,B,[BE],0,3,0,0,["ba",A4h(APJ)],ZN,0,B,[BE],0,3,0,0,["ba",A4h(AM4)],ZM,0,B,[BE],0,3,0,0,["ba",A4h(ATm)],ZK,0,B,[BE],0,3,0,0,["ba",A4h(A0l)],ZJ,0,B,[BE],0,3,0,0,["ba",A4h(AO2)],ZI,0,B,[BE],0,3,0,0,["ba",A4h(AZp)],ZH,0,B,[BE],0,3,0,0,["ba",A4h(AKh)],ZG,0,B,[BE],0,3,0,0,["ba",A4h(AZb)],ZR,0,B,[BE],0,3,0,0,["ba",A4h(AYt)],ZQ,0,B,[BE],0,3,0,0,["ba",A4h(ALZ)],ZP,0,B,[BE],0,3,
0,0,["ba",A4h(AWb)],ZO,0,B,[BE],0,3,0,0,["ba",A4h(ANQ)],ZU,0,B,[BE],0,3,0,0,["ba",A4h(ANR)],ZT,0,B,[BE],0,3,0,0,["ba",A4h(AT3)],ACh,0,B,[],0,0,0,0,0,H$,0,B,[],0,3,0,0,0,PT,0,H$,[],0,3,0,0,0,AF3,0,B,[],0,3,0,0,0,Ok,0,H$,[],0,3,0,0,0,SH,0,B,[BR],3,3,0,0,0,O3,0,B,[SH],0,3,0,0,["Kh",A4h(AW1)]]);
$rt_metadata([AA4,0,B,[W],0,3,0,0,["j",A4h(ABV)],ACq,0,MM,[],0,0,0,0,0,CD,0,B,[C5],0,3,0,0,["cD",A4g(AQ0),"hv",A4g(AXV),"eW",A4j(HH),"ds",A4h(AJS),"cg",A4h(AUH),"ml",A4h(AOW),"og",A4h(ASv),"k8",A4i(AY0),"qF",A4g(ASD),"cu",A4j(ANL),"cv",A4i(ALC),"dv",A4i(APz),"bQ",A4h(ASk),"dt",A4j(AYT)],AEn,0,CD,[],0,3,0,0,["ds",A4h(AFz)],AER,0,B,[],0,0,0,0,0,FL,0,B,[],3,3,0,0,["u$",A4g(AXW),"to",A4g(AM$)],Qt,0,B,[],3,0,0,0,0,L8,0,B,[FL],3,3,0,0,["u$",A4g(AXW),"to",A4g(AM$)],AEs,0,CD,[FL,CB,MU,Qt,L8],0,3,0,0,["eW",A4j(L$),"k8",
A4i(AQa),"oH",A4i(A04),"to",A4g(AVI),"u$",A4g(ATT),"Ak",A4g(Wl),"u5",A4g(AC8),"ty",A4h(Ps),"m0",A4h(AQQ),"qF",A4g(LE),"cD",A4g(AUe),"cg",A4h(IP),"pw",A4h(AIc),"hv",A4g(AF_),"oP",A4g(ARD),"ds",A4h(AXp),"kP",A4g(S2),"jZ",A4g(S1),"hj",A4h(AQx),"tY",A4g(AQn),"oW",A4g(AS6),"dt",A4j(Lz),"dv",A4i(Sf),"cv",A4i(VD),"cu",A4j(OE),"bQ",A4h(WD),"h9",A4h(A0K)],AG7,0,B,[],0,3,0,0,0,S$,0,B,[W],0,3,0,0,["j",A4h(AK4)],S_,0,B,[W],0,3,0,0,["j",A4h(AZQ)],Ta,0,B,[Cp],0,3,0,0,["L",A4h(AOC)],HK,0,B,[Cp],0,3,0,0,["L",A4h(ANb)],S8,0,
B,[W],0,3,0,0,["j",A4h(APm)],S9,0,B,[C6],0,3,0,0,["L",A4h(A0m)],CZ,0,B,[],3,3,0,0,0,ACD,0,B,[CB,CZ],0,3,0,0,["bQ",A4h(ATy),"cu",A4j(ALL),"cv",A4i(ANN),"dv",A4i(A0G),"gw",A4i(AWK)],SO,0,B,[],0,3,0,0,0,Vu,0,B,[Ey],0,3,0,0,["dt",A4j(A0B)],AEg,0,B,[],0,3,0,0,0,ACU,0,B,[],0,3,0,0,0,ACJ,0,B,[],0,3,0,0,0,Fj,0,B,[C5],0,3,0,0,0,AGB,0,B,[],0,3,0,0,0,AEf,0,B,[C5],0,3,0,0,0,Wy,0,B,[W],0,3,0,0,0,Wx,0,B,[W],0,3,0,0,["j",A4h(ALc)],Ww,0,B,[W],0,3,0,0,["j",A4h(AKA)],AI5,0,B,[],0,3,0,0,0,Wv,0,B,[Z],0,3,0,0,["h",A4g(ATA)],WC,
0,B,[Z],0,3,0,0,["h",A4g(AVN)],WB,0,B,[Z],0,3,0,0,["h",A4g(A1y)],WA,0,B,[Z],0,3,0,0,["h",A4g(AON)],Wz,0,B,[Z],0,3,0,0,["h",A4g(AQr)],Wu,0,B,[Z],0,3,0,0,["h",A4g(A05)],TZ,0,B,[Z],0,3,0,0,["h",A4g(AOQ)],T0,0,B,[Z],0,3,0,0,["h",A4g(AYp)],AFj,0,B,[BR],1,3,0,0,0,M9,0,B,[],4,3,0,AWC,0,ADP,0,B,[],3,3,0,0,0,Y$,0,B,[Cp],0,3,0,0,["L",A4h(ANw)],Y9,0,B,[Cp],0,3,0,0,["L",A4h(AUM)],Ls,0,B,[],3,3,0,0,0,AHm,0,Fh,[En,C2,Ls],0,3,0,0,["o0",A4h(AWH),"m8",A4h(Bw),"cY",A4g(AYb),"yt",A4h(BC),"nP",A4i(YZ),"pu",A4h(EB),"qg",A4h(TW),
"iS",A4g(Io),"ti",A4i(AHy),"e8",A4h(Fl)],J9,0,B,[],0,3,0,0,0,Fe,0,B,[],0,3,0,0,0,M7,0,Fe,[],0,3,0,0,0,ZW,0,Fe,[],0,3,0,0,0,X6,0,Fe,[],0,3,0,0,0]);
$rt_metadata([G9,0,B,[],3,3,0,0,0,RS,0,B,[],3,3,0,0,0,BY,0,B,[],0,3,0,0,["bH",A4h(ASX)],Ll,0,B,[],0,3,0,0,0,Il,0,B,[C5],0,3,0,0,["cD",A4g(AFq)],XW,0,B,[],3,0,0,0,0,Oh,0,B,[],3,3,0,0,0,Yc,0,B,[Z],0,3,0,0,["h",A4g(AWg)],Yb,0,B,[Z],0,3,0,0,["h",A4g(ATl)],AJJ,0,B,[],0,3,0,0,0,SM,0,B,[],0,3,0,0,0,GQ,0,B,[],1,3,0,0,0,YW,0,GQ,[],0,3,0,0,["s6",A4h(Ca)],LT,0,B,[],3,3,0,0,0,SQ,0,B,[LT],3,3,0,0,0,R7,"JsFileHandle",7,B,[SQ],0,3,0,0,["ot",A4g(EK),"so",A4g(AKW),"cK",A4g(AWJ),"gn",A4g(AKI)],ABQ,0,B,[],3,3,0,0,0,AIM,0,B,[ABQ],
0,3,0,0,["cK",A4g(AU5)],Y4,0,B,[Oh],0,3,0,0,0,G$,0,B,[CJ],0,3,0,0,0,Nt,0,B,[],0,3,0,0,0,DB,0,B,[],0,3,0,0,0,XF,0,B,[],0,3,0,0,0,K$,0,D9,[En,C2],0,3,0,0,0,Ct,0,B,[],0,3,0,0,0,Nq,0,K$,[],0,3,0,0,0,Y2,0,B,[],0,3,0,0,0,AJ2,0,B,[CJ],0,3,0,0,["bH",A4h(ARt),"lS",A4h(AUG)],T_,0,B,[F6],0,3,0,0,["pv",A4i(AOS)],YA,0,B,[],0,3,0,0,["cK",A4g(AKS),"bH",A4h(ALy)],Je,0,B,[],3,3,0,0,0,GM,0,B,[Je,En],0,0,0,0,["bH",A4h(AU7)],HO,0,GM,[],0,0,0,0,0,Nn,0,Lf,[],1,3,0,0,0,P9,0,Nn,[],0,3,0,0,0,IW,0,Em,[],0,3,0,0,0,Ow,0,B,[IU],0,3,0,0,
["bg",A4h(ASP)],Oy,0,B,[Cb],0,3,0,0,["bg",A4h(ASh)],Ox,0,B,[Cb],0,3,0,0,["bg",A4h(AT5)],IM,0,B,[],0,3,0,0,0,Kg,0,CM,[GG,F1],0,3,0,0,["h2",A4h(AWm),"cg",A4h(AZN),"bP",A4g(ANy),"gQ",A4g(A0V),"bZ",A4i(AKn),"hp",A4h(AVp)],AG$,0,Ci,[],0,3,0,0,["cg",A4h(AKG),"bP",A4g(AMp),"bZ",A4i(AOA)],AAc,0,Ci,[],0,3,0,0,["cg",A4h(APZ),"bP",A4g(AUy),"bZ",A4i(AVG)],WF,0,CM,[CB,CZ],0,3,0,0,["cv",A4i(AR9),"dv",A4i(AKQ),"gw",A4i(AN7),"bZ",A4i(AM1),"bP",A4g(AVl),"bQ",A4h(AOD),"cu",A4j(ALd)],ZL,0,CM,[CZ],0,3,0,0,["gw",A4i(AMf),"bZ",A4i(ALu)],V7,
0,HF,[CB],0,3,0,0,["bQ",A4h(AWN),"cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL),"bP",A4g(AZl),"cg",A4h(AKz)],R4,0,Ci,[],0,3,0,0,["bP",A4g(AKm),"bZ",A4i(ATh)],D6,0,Ci,[],0,3,0,0,["bP",A4g(Zi),"bZ",A4i(R0)],QB,"SelectFileTest",5,D6,[],0,3,0,0,0,Wm,0,CM,[],0,3,0,0,0]);
$rt_metadata([VK,"RenderTexture",5,D6,[],0,3,0,0,["cg",A4h(ANJ),"bP",A4g(AVb),"bZ",A4i(A0T)],R2,"ScissorDemo",5,D6,[],0,3,0,0,["bP",A4g(A1n),"bZ",A4i(ANt)],ZA,0,Ci,[],0,3,0,0,["bP",A4g(ASj),"bZ",A4i(AVn),"cg",A4h(AY2)],Ka,"ClipboardTest",5,D6,[CB],0,3,0,0,["bQ",A4h(AWN),"cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AOq)],RP,0,Ci,[],0,3,0,0,["bP",A4g(ASW),"bZ",A4i(AX6)],GW,0,Ci,[CB],1,3,0,0,["bQ",A4h(AWN),"cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL),"bP",A4g(AEl)],Sv,0,GW,[],0,3,0,0,["cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL),
"bZ",A4i(AYP),"bQ",A4h(AZK)],Su,0,GW,[],0,3,0,0,["cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL),"bQ",A4h(A06),"bP",A4g(AMc),"bZ",A4i(AK0)],W$,0,CM,[CZ],0,3,0,0,["gw",A4i(AZP)],Dt,"WindowDemo",6,CM,[CZ],0,3,[0,0,0],0,["hi",A4g(AUW),"oJ",A4g(AOK),"kc",A4h(Xh),"gw",A4i(AZu)],P0,"EditorInViewDemo",5,Dt,[CZ,GG,F1],0,3,[0,0,0],0,["cg",A4h(AUS),"hi",A4g(ALx),"oJ",A4g(ATG),"kc",A4h(A08),"hp",A4h(ARn),"h2",A4h(AQM)],V_,0,B,[CB],0,0,0,0,["cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL),"bQ",A4h(AZi)],KM,0,B,[],3,3,0,0,0,Q9,"ProjectViewDemo",
5,Dt,[GG,KM],0,3,[0,0,0],0,["hi",A4g(APK),"kc",A4h(APD),"hp",A4h(AXx),"tb",A4i(AYS),"wb",A4h(AKF),"tI",A4h(AM_)],X4,"FileViewDemo",6,Dt,[CZ],0,3,[0,0,0],0,["hi",A4g(AXK),"kc",A4h(AYX)],Os,0,Kg,[],0,3,0,0,["gQ",A4g(AUB)],ABC,0,Ci,[CB],0,3,0,0,["bQ",A4h(AWN),"cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AYL),"bZ",A4i(A01),"bP",A4g(AWf),"cg",A4h(AQ$)],S4,"FolderDiff",8,Dt,[CZ],0,3,[0,0,0],0,["hi",A4g(AZ5)],Pc,"DiffMiddleDemo",8,Dt,[CZ],0,3,[0,0,0],0,["hi",A4g(AVC)],JZ,0,B,[],0,3,0,0,0,AEM,0,B,[],0,3,0,0,0,ADO,0,B,[],3,
3,0,0,0,AG4,0,B,[],0,3,0,0,0,AE$,0,B,[],3,3,0,0,0,AGL,0,B,[],0,3,0,0,0,Mg,0,B,[Je,C2],0,3,0,0,0,Ks,0,Mg,[],0,0,0,0,0,AJT,0,B,[],0,3,0,0,0,XM,0,B,[Cp],0,3,0,0,["L",A4h(AUm)],XK,0,B,[W],0,3,0,0,["j",A4h(AVQ)],XL,0,B,[C6],0,3,0,0,["L",A4h(ARH)],AGH,0,J9,[],0,3,0,0,0,S5,0,B,[CB],0,0,0,0,["bQ",A4h(AUz),"cu",A4j(AKu),"cv",A4i(AUs),"dv",A4i(ATY)],Ya,0,B,[Cp],0,3,0,0,["L",A4h(AZ4)],X_,0,B,[Cp],0,3,0,0,["L",A4h(AYu)],X$,0,B,[Fs],0,3,0,0,["hK",A4i(AWT)],X9,0,B,[Z],0,3,0,0,["h",A4g(ATw)],X8,0,B,[C6],0,3,0,0,["L",A4h(AP6)],X7,
0,B,[Ey],0,3,0,0,["dt",A4j(A0a)],He,0,BY,[],0,3,0,0,0,AFI,0,B,[],3,3,0,0,0,VI,0,B,[CB],0,0,0,0,["bQ",A4h(AWN),"cv",A4i(AR9),"dv",A4i(AKQ),"cu",A4j(AML)],VF,0,B,[],0,3,0,0,0,AE_,0,B,[],0,3,0,0,0,AHR,0,B,[],0,3,0,0,["bH",A4h(AZr)],AAD,0,B,[Cp],0,3,0,0,["L",A4h(API)],AAz,0,B,[C6],0,3,0,0,["L",A4h(ARr)],AAA,0,B,[Z],0,3,0,0,["h",A4g(A1r)],AAB,0,B,[Z],0,3,0,0,["h",A4g(AK$)],B1,0,B,[],0,3,0,0,0]);
$rt_metadata([TF,0,B,[Cp],0,3,0,0,["L",A4h(AWM)],TG,0,B,[C6],0,3,0,0,["L",A4h(AKR)],AGo,0,B,[],0,3,0,0,0,OG,0,B,[CZ],0,3,0,0,["gw",A4i(APP)],OF,0,B,[Cp],0,3,0,0,["L",A4h(AX8)],YS,0,B,[],3,3,0,0,0,AG_,0,B,[YS],0,3,0,0,0,VS,0,B,[CB],0,0,0,0,["cu",A4j(AYL),"cv",A4i(ATI),"dv",A4i(AKM),"bQ",A4h(AVw)],Y_,0,B,[Ey],0,3,0,0,["dt",A4j(APN)],Qc,0,B,[Cp],0,3,0,0,["L",A4h(APC)],QV,0,B,[C6],0,3,0,0,["L",A4h(ASY)],QU,0,B,[W],0,3,0,0,["j",A4h(AY7)],AAN,0,B,[CB],0,0,0,0,["dv",A4i(AKQ),"cu",A4j(AYL),"bQ",A4h(AYk),"cv",A4i(ASO)],AFe,
0,B,[],0,3,0,0,0,Dd,0,B,[],3,3,0,FA,0,XN,0,B,[CB],0,0,0,0,["cu",A4j(AYL),"cv",A4i(ANZ),"dv",A4i(ATU),"bQ",A4h(AMQ)],Vc,0,B,[Ey],0,3,0,0,["dt",A4j(AZ9)],ACn,0,B,[Cp],0,3,0,0,["L",A4h(AL7)],ACm,0,B,[Fs],0,3,0,0,["hK",A4i(AWZ)],ACl,0,B,[Fs],0,3,0,0,["hK",A4i(AMb)],ACk,0,B,[FK],0,3,0,0,["cV",A4g(AO7)],ACo,0,B,[FK],0,3,0,0,["cV",A4g(AZF)],Rz,0,B,[Cp],0,3,0,0,["L",A4h(ASs)],Yz,0,B,[Cp],0,3,0,0,["L",A4h(AR8)],Yy,0,B,[C6],0,3,0,0,["L",A4h(AOL)],O4,0,B,[W],0,3,0,0,["j",A4h(AYi)],O5,0,B,[C6],0,3,0,0,["L",A4h(AZY)],WG,
0,B,[C6],0,3,0,0,["L",A4h(AMt)],AGc,0,B,[],3,3,0,0,0,Qj,0,B,[Cp],0,3,0,0,["L",A4h(AOr)],Z1,0,B,[C6],0,3,0,0,["L",A4h(AQC)],TJ,0,B,[C6],0,3,0,0,["L",A4h(AQD)],TI,0,B,[Cp],0,3,0,0,["L",A4h(AP5)],Dl,0,B,[],3,3,0,AMY,0,Cm,0,CG,[],12,3,0,Td,0,Kc,0,B,[],0,3,0,0,0,IN,0,B,[],0,3,0,0,0,AII,0,B,[],0,3,0,0,0,DI,0,B,[],3,3,0,ATE,0,Xf,0,B,[BR],3,3,0,0,0,Xt,0,B,[Xf],0,3,0,0,["As",A4i(AVU)],Xg,0,B,[BR],3,3,0,0,0,Xr,0,B,[Xg],0,3,0,0,["As",A4i(AWx)],AD9,0,B,[],0,3,0,0,0,AG9,0,B,[BR],3,3,0,0,0,Uk,0,B,[],0,3,0,0,0,DM,0,B,[],3,
3,0,AXu,0,HS,0,B,[],3,3,0,0,0,PE,0,B,[HS],0,3,0,0,["vt",A4j(AYW)],PF,0,B,[HS],0,3,0,0,0]);
$rt_metadata([S7,0,B,[W],0,3,0,0,["j",A4h(AX0)],Pl,0,B,[W],0,3,0,0,["j",A4h(AMF)],Pk,0,B,[W],0,3,0,0,["j",A4h(ALk)],Pi,0,B,[W],0,3,0,0,["j",A4h(AKB)],Pg,0,B,[W],0,3,0,0,["j",A4h(A07)],AGP,0,B,[],0,3,0,0,0,T2,0,B,[W],0,3,0,0,["j",A4h(AWz)],ABd,0,B,[Cp],0,3,0,0,["L",A4h(ANF)],AJt,0,B,[],0,3,0,0,["bH",A4h(AUZ)],IV,0,B,[],0,3,0,0,0,J$,0,B,[],4,3,0,0,0,AHu,0,B,[],0,3,0,0,0,Cq,0,CG,[],12,3,0,AEj,0,AJY,0,B,[],0,3,0,0,0,AEB,0,B,[BR],4,3,0,0,0,AJ8,0,B,[],0,3,0,0,0,ADo,0,B,[],3,3,0,0,0,CY,0,B,[BR],1,3,0,0,0,AIY,0,CY,
[],1,3,0,0,0,AJh,0,CY,[],1,3,0,0,0,AHI,0,CY,[],1,3,0,0,0,AHT,0,CY,[],1,3,0,0,0,AJw,0,CY,[],1,3,0,0,0,Uv,0,B,[Z],0,3,0,0,["h",A4g(AOj)],HC,0,CG,[],12,3,0,APn,0,O9,0,B,[BE],0,3,0,0,["ba",A4h(ATV)],YJ,0,B,[],0,3,0,0,0,AHr,0,B,[],0,3,0,0,0,Ge,0,B,[],0,3,0,0,0,AFG,0,B,[],0,3,0,0,0,AEt,0,B,[],4,3,0,0,0,SK,0,B,[],0,0,0,0,0,AHw,0,B,[],3,3,0,0,0,Sx,0,B,[Ey],0,3,0,0,["dt",A4j(ASe)],Sw,0,B,[Fs],0,3,0,0,["hK",A4i(A0A)],Sz,0,B,[FK],0,3,0,0,["cV",A4g(ANK)],Sy,0,B,[C5],0,3,0,0,0,WN,0,B,[CB],0,0,0,0,["cv",A4i(AR9),"dv",A4i(AKQ),
"cu",A4j(AYL),"bQ",A4h(A1u)],AEz,0,B,[BR],1,3,0,0,0,AF8,0,B,[CZ,FL,C5],0,3,0,0,["u$",A4g(AXW),"to",A4g(AM$),"gw",A4i(A1a),"h9",A4h(AOX),"cD",A4g(AQK)],Ve,0,B,[W],0,3,0,0,["j",A4h(AWn)],Xe,0,B,[W],0,3,0,0,["j",A4h(ASZ)],AAL,0,B,[W],0,3,0,0,["j",A4h(AXB)],ABI,0,B,[DH],0,3,0,0,["cV",A4g(A1d)],AIU,0,B,[],3,3,0,0,0,LD,0,B,[],3,3,0,0,0,Qy,0,B,[LD],0,3,0,0,["x3",A4h(AUI)],O1,0,B,[BE],0,3,0,0,["ba",A4h(A0e)],AFw,0,B,[],0,3,0,0,0,Qe,0,B,[C5],0,3,0,0,0]);
$rt_metadata([ADr,0,B,[],0,3,0,0,0,Tm,0,B,[],0,3,0,0,0,LP,0,B,[],0,3,0,0,0,RQ,0,B,[],3,3,0,0,0,ABk,0,B,[W],0,3,0,0,["j",A4h(AUJ)],F5,0,IW,[],0,3,0,0,0,ACz,0,Fr,[],0,3,0,0,0,ACC,0,B,[W],0,3,0,0,["j",A4h(ATs)],Tw,0,B,[W],0,3,0,0,["j",A4h(A0z)],UY,0,B,[Z],0,3,0,0,["h",A4g(AZc)],ACL,0,Ei,[CJ],0,3,0,0,0,Gk,0,B,[],0,0,0,0,0,Jt,0,B,[],4,3,0,0,0,Tq,0,B,[],0,3,0,0,0,N5,0,B,[],1,3,0,0,0,ABO,0,B,[CJ],0,3,0,0,["bH",A4h(AKC),"gn",A4g(AQY),"lS",A4h(AYA)],AEJ,0,CY,[],1,3,0,0,0,TX,0,B,[Z],0,3,0,0,["h",A4g(ALs)],AC9,0,B,[],
3,3,0,0,0,HR,0,CD,[],1,3,0,0,["cD",A4g(AXQ),"ds",A4h(APw),"cg",A4h(ATS),"eW",A4j(AMi),"cu",A4j(A0k),"cv",A4i(ARR),"dv",A4i(A0s),"bQ",A4h(A0O),"dt",A4j(AMU)],Qn,0,HR,[F1],0,3,0,0,["Ay",A4g(AOe),"hv",A4g(AWd)],Yd,0,B,[W],0,3,0,0,["j",A4h(AT9)],QK,0,B,[W],0,3,0,0,["j",A4h(AXN)],Fg,0,CD,[],0,3,0,0,0,QG,0,Fg,[FL],0,3,0,0,["u$",A4g(AXW),"to",A4g(AM$),"cD",A4g(A0x),"k8",A4i(AVk),"ds",A4h(ATH),"og",A4h(AYz),"ml",A4h(AZG),"bQ",A4h(AOP),"cv",A4i(AM3),"cu",A4j(AQR),"h9",A4h(AZR)],Uh,0,B,[Z],0,3,0,0,["h",A4g(ASx)],AEi,
0,CD,[],0,3,0,0,["cD",A4g(ARu),"eW",A4j(QO),"ds",A4h(AY5),"cu",A4j(ARP),"cv",A4i(ARw),"dv",A4i(APS),"bQ",A4h(APE),"dt",A4j(AVE),"hv",A4g(AGK)],PH,0,Fg,[],0,3,0,0,["hv",A4g(ASF),"og",A4h(AYF),"ds",A4h(ASU),"ml",A4h(ATX)],Rf,0,B,[W],0,3,0,0,0,TD,0,CD,[],0,3,0,0,0,Zb,0,Ei,[CJ],0,3,0,0,0,AAw,0,B,[W],0,3,0,0,["j",A4h(AOz)],AC6,0,B,[Z],0,3,0,0,["h",A4g(AWX)],ACZ,0,B,[Z],0,3,0,0,["h",A4g(AYB)],Ua,0,B,[Z],0,3,0,0,["h",A4g(AZo)],AJ4,0,HR,[],0,0,0,0,["Ay",A4g(AOM)],AAt,0,B,[],0,3,0,0,0,JS,0,B,[],0,3,0,0,0,Oa,0,B,[],3,
3,0,0,0,AAC,0,B,[],0,3,0,0,0,Wo,0,B,[Z],0,3,0,0,["h",A4g(ASK)],RY,0,B,[Z],0,3,0,0,["h",A4g(AOF)],Pu,0,B,[W],0,3,0,0,["j",A4h(AKO)],Pt,0,B,[W],0,3,0,0,["j",A4h(AK6)],Q1,0,B,[Z],0,3,0,0,["h",A4g(APU)],O_,0,B,[Z],0,3,0,0,["h",A4g(AVa)],Pa,0,B,[Z],0,3,0,0,["h",A4g(ATj)],K0,0,B,[],0,3,0,0,0,C4,0,Bt,[],0,3,0,0,0,AI8,0,Fr,[],0,3,0,0,0]);
$rt_metadata([AJ1,0,B,[],0,3,0,0,0,Rw,0,B,[W],0,3,0,0,["j",A4h(AXR)],AAM,0,B,[W],0,3,0,0,["j",A4h(AWr)],RE,0,B,[W],0,3,0,0,["j",A4h(AVs)],RD,0,B,[W],0,3,0,0,["j",A4h(A0w)],Fa,0,B,[],3,3,0,0,0,Wj,0,B,[Fa],0,0,0,0,["cz",A4g(B8),"b8",A4g(B9),"oF",A4g(YD)],K6,0,N5,[],1,3,0,0,0,Sk,0,K6,[],0,3,0,0,0,ACe,0,B,[W],0,3,0,0,0,UQ,0,B,[W],0,3,0,0,["j",A4h(ASf)],PK,0,B,[DH],0,3,0,0,["cV",A4g(AKU)],PJ,0,B,[DH],0,3,0,0,["cV",A4g(AMW)],Ra,0,B,[DH],0,3,0,0,["cV",A4g(AZ1)],WO,0,B,[DH],0,3,0,0,["cV",A4g(ATi)],Zh,0,B,[Cb],0,3,0,
0,["bg",A4h(A0Q)],AEN,0,B,[BR],1,3,0,0,0,ABF,0,B,[Cb],0,3,0,0,["bg",A4h(ANg)],AIH,0,B,[BE],0,3,0,0,0,AFc,0,B,[BE],0,3,0,0,0,Wg,0,B,[W],0,3,0,0,["j",A4h(AL5)],Wf,0,B,[W],0,3,0,0,["j",A4h(ARm)],Hf,0,B,[],0,3,0,0,0,Eh,0,Hf,[],0,3,0,0,0,Rc,0,B,[Z],0,3,0,0,["h",A4g(AW$)],Lb,0,Fg,[FL],0,3,0,0,["u$",A4g(AXW),"to",A4g(AM$),"cD",A4g(AQm),"k8",A4i(ALa),"ds",A4h(AXr),"cu",A4j(AZ8),"cv",A4i(AL8)],AIi,0,Lb,[],0,3,0,0,["u$",A4g(AXW),"to",A4g(AM$)],SC,0,B,[Z],0,3,0,0,["h",A4g(AR_)],ACi,0,B,[Z],0,3,0,0,["h",A4g(AQc)],ACj,0,
B,[Z],0,3,0,0,["h",A4g(AZB)],Z$,0,B,[Z],0,3,0,0,["h",A4g(AKg)],Z_,0,B,[Z],0,3,0,0,["h",A4g(ANC)],AF5,0,B,[],0,3,0,0,0,R1,0,D9,[En,C2],0,3,0,0,0,TV,0,B,[],0,3,0,0,0,TE,0,B,[],0,3,0,0,0,XE,0,B,[Ep],0,3,0,0,0,R_,0,B,[W],0,3,0,0,["j",A4h(ARo)],XO,0,Ei,[CJ],0,3,0,0,0,JV,0,B,[],4,3,0,0,0,Te,0,B,[Z],0,3,0,0,["h",A4g(AKT)],Tf,0,B,[Z],0,3,0,0,["h",A4g(AMS)],Tg,0,B,[Z],0,3,0,0,["h",A4g(A0y)],Th,0,B,[Z],0,3,0,0,["h",A4g(AO3)],Ti,0,B,[Z],0,3,0,0,["h",A4g(AQ7)],Ov,0,B,[Cb],0,3,0,0,["bg",A4h(A1x)],UT,0,B,[],3,3,0,A2u,0,O$,
0,CD,[],0,3,0,0,["ds",A4h(AKJ)],AE5,0,B,[L8],0,3,0,0,["u$",A4g(AXW),"to",A4g(AM$),"kP",A4g(ARF),"jZ",A4g(A0h),"hj",A4h(ASu),"tY",A4g(AOB),"oW",A4g(AT0),"oH",A4i(AO$),"pw",A4h(AXF),"oP",A4g(Mi)],AAU,0,B,[],0,3,0,0,0]);
$rt_metadata([SX,0,B,[],3,3,0,ANT,0,QP,0,B,[F6],0,3,0,0,["pv",A4i(ASI)],AJV,0,GQ,[],0,0,0,0,["s6",A4h(A1j)],U8,0,B,[Z],0,3,0,0,["h",A4g(AV7)],Qp,0,B,[F1],0,3,0,0,["h2",A4h(AY4)],Qo,0,B,[DH],0,3,0,0,["cV",A4g(AVg)],Rn,0,B,[Z],0,3,0,0,["h",A4g(AWk)],D_,0,Bt,[],0,3,0,0,0,Wn,0,B,[],0,3,0,0,0,ABp,0,B,[W],0,3,0,0,["j",A4h(ALr)],AGb,0,B,[],0,3,0,0,0,Se,0,B,[],0,0,0,0,0,ADS,0,B,[],3,3,0,0,0,AB0,0,B,[Z],0,3,0,0,["h",A4g(ASG)],XG,0,B,[],1,3,0,0,0,Yt,0,B,[L9],3,3,0,0,0,OZ,0,B,[Yt],3,3,0,0,0,H7,0,B,[OZ],1,3,0,0,0,Zk,0,
H7,[],0,3,0,0,0,QI,0,B,[],3,3,0,0,0,Ou,0,B,[W],0,3,0,0,0,ACG,0,B,[W],0,3,0,0,["j",A4h(ALb)],AEV,0,B,[],3,3,0,0,0,Jr,0,GM,[],0,0,0,0,0,H5,0,Bt,[],0,3,0,0,0,ABg,0,B,[W],0,3,0,0,["j",A4h(ARE)],ACP,0,B,[Cb],0,3,0,0,["bg",A4h(AZj)],ACO,0,B,[Cb],0,3,0,0,["bg",A4h(AVe)],ACg,0,B,[Cb],0,3,0,0,["bg",A4h(AV2)],ACf,0,B,[Cb],0,3,0,0,["bg",A4h(AWw)],AJb,0,B,[],0,3,0,0,0,AAV,0,B,[HS],0,3,0,0,["vt",A4j(AOJ)],Qx,0,B,[W],0,3,0,0,["j",A4h(AUc)],ADy,0,B,[W],0,3,0,0,0,UU,0,B,[W],0,3,0,0,["j",A4h(ALl)],SG,0,B,[Cx],0,3,0,0,["cr",
A4h(ATJ)],UE,0,B,[BE],0,3,0,0,0,FE,0,B,[],0,3,0,0,0,AHk,0,B,[],0,3,0,0,0,ADZ,0,B,[],0,3,0,0,0,AJ$,0,B,[],0,3,0,0,0,ACA,0,B,[Z],0,3,0,0,["h",A4g(AT1)],ACB,0,B,[Z],0,3,0,0,["h",A4g(AWj)],FQ,0,B,[],0,3,0,0,0,U6,0,B,[W],0,3,0,0,["j",A4h(ANm)],Np,0,FQ,[],0,3,0,0,0,K2,0,FQ,[],0,3,0,0,0,T8,0,B,[W],0,3,0,0,["j",A4h(AT4)],Qg,0,B,[],0,3,0,0,0,PO,0,B,[W],0,3,0,0,["j",A4h(AXs)]]);
$rt_metadata([PS,0,B,[Hq],3,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Fn,0,Fu,[PS],1,3,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],M5,0,Fn,[],1,0,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Tx,0,M5,[],0,0,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],NK,0,D9,[],1,0,0,0,0,Tu,0,NK,[],0,0,0,0,0,NY,0,Fh,[Ls],1,0,0,0,["e8",A4h(ATc),"iS",A4g(AU$),"pu",A4h(APi),"o0",A4h(AOn)],Tv,0,NY,[],0,0,0,0,["e8",A4h(ATc),"m8",A4h(APp),"cY",A4g(AOE),"b6",A4g(AMx),"et",A4g(AKY)],Ts,0,B,[Fa],0,0,0,0,["cz",A4g(AKH),"b8",A4g(AYe),"oF",A4g(ARd)],XD,0,B,[Fa],3,3,0,0,0,Tt,
0,B,[XD],0,0,0,0,0,Vn,0,B,[F6],0,3,0,0,0,QH,0,B,[Ep],0,3,0,0,["L",A4h(A1z)],Ke,0,D_,[],0,3,0,0,0,Jx,0,Bt,[],0,3,0,0,0,NS,0,Bt,[],0,3,0,0,0,Xx,0,B,[W],0,3,0,0,["j",A4h(AYf)],AGQ,0,B,[W],0,3,0,0,0,Qw,0,B,[QI],0,3,0,0,0,Zy,0,B,[Z],0,3,0,0,["h",A4g(AT2)],SJ,0,B,[Z],0,3,0,0,["h",A4g(AVH)],G1,0,B,[],0,3,0,0,0,P1,0,Fn,[],0,0,0,0,["o0",A4h(AWH)],S0,0,Fn,[],0,0,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],P2,0,Fu,[],0,0,0,0,["e8",A4h(ATc),"o0",A4h(AWH)],Vq,0,B,[W],0,3,0,0,["j",A4h(AVy)],Tj,0,B,[W],0,3,0,0,["j",A4h(AW_)],Ki,0,B,
[],0,3,0,0,["bH",A4h(AIR)],L2,0,Ki,[],0,3,0,0,["bH",A4h(AUn)],E1,0,B,[],0,3,0,0,["bH",A4h(AHn)],HA,0,E1,[],0,3,0,0,0,J3,0,E1,[],0,3,0,0,["bH",A4h(A0D)],Jb,0,E1,[],0,3,0,0,["bH",A4h(ATN)],AEr,0,H7,[],0,3,0,0,0,Rr,0,B,[Z],0,3,0,0,["h",A4g(ANS)],Rs,0,B,[Z],0,3,0,0,["h",A4g(ALR)],Rp,0,B,[Z],0,3,0,0,["h",A4g(AK2)],Rq,0,B,[Z],0,3,0,0,["h",A4g(ANM)],QY,0,B,[Z],0,3,0,0,["h",A4g(AYM)],QX,0,B,[Z],0,3,0,0,["h",A4g(AXZ)],QW,0,B,[Z],0,3,0,0,["h",A4g(AS8)],PU,0,B,[Z],0,3,0,0,["h",A4g(APV)],Qv,0,B,[],3,3,0,0,0,X0,0,B,[Z],
0,3,0,0,["h",A4g(ALH)],Sq,0,B,[G9],0,3,0,0,["pA",A4i(ANl)],VG,0,B,[],0,3,0,0,0,Q3,0,B,[],0,3,0,0,0,Rk,0,B,[W],0,3,0,0,["j",A4h(AQt)],Wt,0,B,[W],0,3,0,0,["j",A4h(AUV)],T1,0,B,[LD],0,3,0,0,["x3",A4h(M$)]]);
$rt_metadata([ACa,0,BF,[],0,3,0,0,0,OS,0,B,[Z],0,3,0,0,["h",A4g(AWG)],OT,0,B,[Z],0,3,0,0,["h",A4g(AZ6)],OR,0,B,[Z],0,3,0,0,["h",A4g(ATb)],Um,0,B,[Z],0,3,0,0,["h",A4g(AOV)],Ul,0,B,[Z],0,3,0,0,["h",A4g(AY3)],Xm,0,B,[DH],0,3,0,0,["cV",A4g(AMj)],Zn,0,B,[Z],0,3,0,0,["h",A4g(AN0)],Zo,0,B,[Z],0,3,0,0,["h",A4g(AZS)],U4,0,B,[Z],0,3,0,0,["h",A4g(AKq)],UZ,0,B,[Z],0,3,0,0,["h",A4g(AN1)],U0,0,B,[Z],0,3,0,0,["h",A4g(ASB)],U1,0,B,[Z],0,3,0,0,["h",A4g(AXh)],U2,0,B,[Z],0,3,0,0,["h",A4g(AV$)],Or,0,B,[DH],0,3,0,0,["cV",A4g(ARU)],Tk,
0,B,[G9],0,3,0,0,["pA",A4i(AQV)],W4,0,B,[LT],3,3,0,0,0,ABq,0,B,[W4],0,0,0,0,["ot",A4g(I$),"so",A4g(A0C),"cK",A4g(AMX)],AGy,0,B,[CJ],0,3,0,0,["bH",A4h(APX)],VR,0,B,[W],0,3,0,0,["j",A4h(AW9)],Vf,0,B,[W],0,3,0,0,["j",A4h(A1w)],SP,0,B,[HS],0,3,0,0,0,Fy,0,B,[],0,0,0,0,0,ZF,0,Fy,[Fa],0,0,0,0,0,SS,0,Fy,[Fa],0,0,0,0,0,YL,0,Fy,[Fa],0,0,0,0,0,ADQ,0,B,[W],0,0,0,0,0,YI,0,B,[C2],4,3,0,0,0,Zf,0,B,[W],0,3,0,0,["j",A4h(APf)],Ze,0,B,[W],0,3,0,0,["j",A4h(AYC)],WS,0,B,[W],0,3,0,0,["j",A4h(AU3)],HQ,0,B,[],3,3,0,0,0,Sr,0,B,[HQ],
0,3,0,0,["ln",A4j(AXt)],Ss,0,B,[HQ],0,3,0,0,["ln",A4j(AWc)],IK,0,B,[C2,CJ],0,3,0,0,0,KC,0,B,[],3,3,0,0,0,Rm,0,B,[KC],0,3,0,0,0,W8,0,B,[KC],3,3,0,0,0,AEW,0,B,[W8],0,3,0,0,0,RI,0,B,[HQ],0,3,0,0,["ln",A4j(AXX)],RH,0,B,[Ep],0,3,0,0,["L",A4h(ASr)],RG,0,B,[Ep],0,3,0,0,["L",A4h(AQL)],RK,0,B,[HQ],0,3,0,0,["ln",A4j(AXA)],ADe,0,B,[W],0,3,0,0,["j",A4h(AVK)],Gw,0,CG,[],12,0,0,RW,0,BP,0,B,[],1,0,0,0,["co",A4j(Iw),"cx",A4k(IE),"iB",A4g(AUx),"S",A4h(AR0),"b0",A4h(AZ$),"gk",A4g(A0R),"eG",A4g(Kh)],VX,0,B,[Z],0,3,0,0,["h",A4g(ANz)],Vg,
0,B,[W],0,3,0,0,["j",A4h(AX1)],Vh,0,B,[W],0,3,0,0,["j",A4h(AM7)],WR,0,B,[W],0,3,0,0,["j",A4h(APs)]]);
$rt_metadata([ADd,0,Eh,[],0,3,0,0,0,Re,0,B,[W],0,3,0,0,["j",A4h(ANa)],RZ,0,B,[W],0,3,0,0,["j",A4h(AQO)],AAf,0,B,[],32,0,0,A3y,0,CW,0,BP,[],0,0,0,Ob,["c",A4j(AK_),"H",A4h(ALn)],GX,0,B,[],0,0,0,0,0,J4,0,BS,[],0,3,0,0,0,Pe,0,B,[Z],0,3,0,0,["h",A4g(ATF)],AC$,0,B,[KM],0,0,0,0,["tb",A4i(ALP),"wb",A4h(AL9),"tI",A4h(AMC)],Rl,0,CW,[],0,0,0,0,["c",A4j(ATK),"H",A4h(AY$)],AC3,0,CW,[],0,0,0,0,["c",A4j(AUT)],Qh,0,CW,[],0,0,0,0,["c",A4j(ALv)],R3,0,CW,[],0,0,0,0,["c",A4j(ATM),"H",A4h(AYg)],FX,0,CW,[],0,0,0,0,["c",A4j(ASb)],B_,
0,BP,[],1,0,0,0,["c",A4j(A1g),"b9",A4g(AZM),"H",A4h(AN8)],AF9,0,B_,[],0,0,0,0,["by",A4i(AZq),"co",A4j(AVD),"cx",A4k(AUP),"H",A4h(ATL)],B5,0,BP,[],0,0,0,0,["c",A4j(ANo),"S",A4h(AQe),"b0",A4h(AW4),"H",A4h(AQG),"eG",A4g(ALQ)],Kd,0,B5,[],0,0,0,0,["c",A4j(AP3),"H",A4h(AYO)],D4,0,Kd,[],0,0,0,0,["c",A4j(AVc),"S",A4h(AYH)],VB,0,D4,[],0,0,0,0,["c",A4j(AQb),"H",A4h(AR5)],ABS,0,D4,[],0,0,0,0,["c",A4j(ALj),"H",A4h(AZO)],YM,0,D4,[],0,0,0,0,["c",A4j(ALN),"H",A4h(A1t)],Sl,0,D4,[],0,0,0,0,["c",A4j(ATq),"H",A4h(AYZ)],HL,0,B5,
[],0,0,0,0,["c",A4j(AKE),"co",A4j(AOZ),"cx",A4k(AZa),"b0",A4h(AW2),"gk",A4g(AYd),"eG",A4g(ASy)],GZ,0,B,[],1,0,0,0,0,Y,0,GZ,[],1,0,0,PI,["dP",A4g(AUh),"fD",A4g(ATZ),"lt",A4g(AZI),"h6",A4g(A0M)],AD4,0,Y,[],0,0,0,0,["o",A4h(C9),"dP",A4g(C1),"fD",A4g(AVz),"lt",A4g(ARQ),"cK",A4g(AXC),"h6",A4g(AM2)],Mp,0,Bt,[],0,3,0,0,0,Ee,0,BP,[],1,0,0,0,["b0",A4h(ARb),"H",A4h(A0g),"eG",A4g(APd)],C$,0,Ee,[],0,0,0,0,["c",A4j(ATr)],FI,0,C$,[],0,0,0,0,["c",A4j(AT8)],CX,0,Ee,[],0,0,0,0,["c",A4j(ATC)],E0,0,C$,[],0,0,0,0,["c",A4j(AXg),
"S",A4h(AS$)],Uf,0,C$,[],0,0,0,0,["c",A4j(A1c),"co",A4j(APB)],Bf,0,B,[],1,0,0,0,0,Dp,0,BS,[],0,3,0,0,0,VL,0,GZ,[En],0,0,0,0,["cK",A4g(AXH)],WM,0,BP,[],0,0,0,0,["c",A4j(AOo),"H",A4h(AYc)],ACw,0,B,[En,C2],0,3,0,0,0,Oz,0,B5,[],0,0,0,0,0,QE,0,B5,[],0,0,0,0,["c",A4j(AK9),"S",A4h(AX7),"H",A4h(ALz),"b0",A4h(ALm)],DY,0,B5,[],0,0,0,0,["c",A4j(AVu),"o",A4h(ANd),"b0",A4h(AK5),"S",A4h(AZC),"H",A4h(AMR)],Mm,0,DY,[],0,0,0,0,["o",A4h(AN9)],ADY,0,B_,[],0,0,0,0,["by",A4i(AWP)],Ev,0,B_,[],0,0,0,0,["by",A4i(Vs),"b0",A4h(AQg)],Xa,
0,B5,[],0,0,0,0,["S",A4h(AO5),"c",A4j(AKp),"b0",A4h(AUp),"H",A4h(ARV)],EA,0,B_,[],0,0,0,0,["b9",A4g(AWF),"by",A4i(ANx),"co",A4j(AMD),"cx",A4k(AOk),"b0",A4h(ARN)],AGt,0,B_,[],0,0,0,0,["by",A4i(ATe)],ADl,0,B_,[],0,0,0,0,["by",A4i(AKx)],FN,0,B5,[],0,0,0,0,["S",A4h(A0U),"c",A4j(AP2),"b0",A4h(AOp),"H",A4h(AYI)]]);
$rt_metadata([UJ,0,FN,[],0,0,0,0,0,AAl,0,FN,[],0,0,0,0,0,Vp,0,CX,[],0,0,0,0,["c",A4j(AUY)],XP,0,CX,[],0,0,0,0,["c",A4j(AXv)],Gr,0,CX,[],0,0,0,0,["c",A4j(AZz),"S",A4h(A0r)],P6,0,Gr,[],0,0,0,0,["c",A4j(AOg),"S",A4h(AXJ)],Ga,0,CX,[],0,0,0,0,["c",A4j(A1q)],OM,0,Ga,[],0,0,0,0,["c",A4j(ANO)],Rg,0,CX,[],0,0,0,0,["c",A4j(ASE)],Yo,0,Gr,[],0,0,0,0,["c",A4j(ALA)],S3,0,Ga,[],0,0,0,0,["c",A4j(ATR)],Rh,0,Ee,[],0,0,0,0,["c",A4j(A1h),"co",A4j(ARz)],WU,0,Ee,[],0,0,0,0,["c",A4j(AQh),"co",A4j(AKr)],Ft,0,B,[],1,0,0,0,0,ADh,0,C$,
[],0,0,0,0,["c",A4j(AKX)],Ub,0,E0,[],0,0,0,0,["c",A4j(APr)],Xo,0,FI,[],0,0,0,0,["c",A4j(AZd)],Yn,0,C$,[],0,0,0,0,["c",A4j(AQd)],AAx,0,E0,[],0,0,0,0,["c",A4j(AK3)],Q6,0,FI,[],0,0,0,0,["c",A4j(AZs)],K5,0,BP,[],4,0,0,0,["c",A4j(AW3),"H",A4h(AWv)],AEh,0,BP,[],0,0,0,0,["c",A4j(AUf),"H",A4h(AUo)],WP,0,BP,[],0,0,0,0,["c",A4j(AN_),"H",A4h(AS3)],UD,0,BP,[],4,0,0,0,["c",A4j(AYv),"H",A4h(AUQ)],ACd,0,BP,[],0,0,0,0,["c",A4j(AX4),"H",A4h(ATd)],V3,0,BP,[],0,0,0,0,["c",A4j(AUL),"H",A4h(ANk)],AGh,0,B5,[],0,0,0,0,["c",A4j(ASH),
"S",A4h(AUr),"iB",A4g(AXP),"H",A4h(AUq)],AD3,0,B5,[],4,0,0,0,["c",A4j(AXY),"S",A4h(AY6),"iB",A4g(AKd),"H",A4h(AST)],AJG,0,BP,[],4,0,0,0,["c",A4j(AOs),"H",A4h(AVS)],AIO,0,BP,[],0,0,0,0,["c",A4j(APY),"H",A4h(AVM)],AG1,0,BP,[],0,0,0,0,["c",A4j(AWq),"H",A4h(ALY)],H8,0,B5,[],0,0,0,0,["c",A4j(AKZ),"S",A4h(AYE),"H",A4h(AQX)],AJL,0,H8,[],0,0,0,0,["c",A4j(AL2),"co",A4j(AR3),"cx",A4k(AKL),"b0",A4h(AXq)],AIa,0,H8,[],0,0,0,0,["c",A4j(AOU)],Pq,0,GH,[Jy],0,3,0,0,["o$",A4k(AM5),"oy",A4j(AUi),"jB",A4h(AUE),"pp",A4i(AZL)],Y0,
0,B_,[],0,0,0,0,["by",A4i(AMd),"co",A4j(AUd),"cx",A4k(AVW),"b0",A4h(AND)],ADk,0,B_,[],0,0,0,0,["by",A4i(AO0)],OP,0,B_,[],0,0,0,0,["by",A4i(AZe)],Ha,0,B,[],4,0,0,AQ5,0,Vw,0,B_,[],0,0,0,0,["by",A4i(ARh)],Nu,0,B5,[],0,0,0,0,["S",A4h(AYa),"c",A4j(AUR),"co",A4j(ANB),"cx",A4k(AVf),"b0",A4h(AKK),"H",A4h(ARI)],NB,0,B5,[],0,0,0,0,["S",A4h(AUD),"c",A4j(AKt),"co",A4j(AYj),"cx",A4k(ARc),"b0",A4h(AMe),"H",A4h(AYq)],D$,0,B_,[],0,0,0,0,["by",A4i(AYQ),"co",A4j(AXD),"cx",A4k(ALF),"b0",A4h(AYK)],ABm,0,Ft,[],0,0,0,0,["iv",A4h(ALK),
"yO",A4i(AQU)],ABn,0,Ft,[],0,0,0,0,["iv",A4h(AZt),"yO",A4i(ASt)],AFH,0,B,[],0,0,0,0,0,ADw,0,B,[],0,0,0,0,0,Ns,0,Bf,[],0,0,0,0,["F",A4g(AIg)],MR,0,Bf,[],0,0,0,0,["F",A4g(AIK)],AFA,0,Bf,[],0,0,0,0,["F",A4g(AY9)]]);
$rt_metadata([AFW,0,Bf,[],0,0,0,0,["F",A4g(ARK)],AFY,0,Bf,[],0,0,0,0,["F",A4g(AMI)],No,0,Bf,[],0,0,0,0,["F",A4g(AD6)],Lw,0,No,[],0,0,0,0,["F",A4g(AEw)],AGS,0,Bf,[],0,0,0,0,["F",A4g(AWa)],Og,0,Lw,[],0,0,0,0,["F",A4g(AGZ)],AIr,0,Og,[],0,0,0,0,["F",A4g(APe)],AEZ,0,Bf,[],0,0,0,0,["F",A4g(AU6)],AEc,0,Bf,[],0,0,0,0,["F",A4g(APb)],AHH,0,Bf,[],0,0,0,0,["F",A4g(ASw)],AJv,0,Bf,[],0,0,0,0,["F",A4g(AXM)],AGV,0,Bf,[],0,0,0,0,["F",A4g(ATk)],AJe,0,Bf,[],0,0,0,0,["F",A4g(ANU)],AFs,0,Bf,[],0,0,0,0,["F",A4g(AQ1)],AF$,0,Bf,[],
0,0,0,0,["F",A4g(AU4)],ADI,0,Bf,[],0,0,0,0,["F",A4g(AMo)],AG8,0,Bf,[],0,0,0,0,["F",A4g(A0I)],AJk,0,Bf,[],0,0,0,0,["F",A4g(ATf)],AFR,0,Bf,[],0,0,0,0,["F",A4g(AOt)],AH1,0,Bf,[],0,0,0,0,["F",A4g(AMu)],AE1,0,Bf,[],0,0,0,0,["F",A4g(AVY)],AGD,0,Bf,[],0,0,0,0,["F",A4g(AWY)],AJp,0,Bf,[],0,0,0,0,["F",A4g(ARW)],AEG,0,Bf,[],0,0,0,0,["F",A4g(AQz)],AEo,0,Bf,[],0,0,0,0,["F",A4g(APF)],AGT,0,Bf,[],0,0,0,0,["F",A4g(AY1)],Kq,0,Bf,[],0,0,0,0,["F",A4g(AE0)],AJD,0,Kq,[],0,0,0,0,["F",A4g(APx)],AIw,0,Ns,[],0,0,0,0,["F",A4g(AUb)],AEm,
0,MR,[],0,0,0,0,["F",A4g(ANu)],AHK,0,Bf,[],0,0,0,0,["F",A4g(AOH)],AHV,0,Bf,[],0,0,0,0,["F",A4g(ASl)],AIk,0,Bf,[],0,0,0,0,["F",A4g(AVL)],AIs,0,Bf,[],0,0,0,0,["F",A4g(AKi)],AHN,0,B,[],4,0,0,0,0,ADW,0,B,[],4,3,0,0,0,V6,0,B,[],0,3,0,0,0,AFM,0,B,[],0,3,0,0,0,AH9,0,B,[],4,3,0,0,0,Md,0,Bt,[],0,3,0,0,0,ABU,0,B,[W],0,3,0,0,["j",A4h(AKk)],ABT,0,B,[W],0,3,0,0,["j",A4h(ARX)],AHB,0,B,[Ep],0,3,0,0,0,RN,0,B,[W],0,3,0,0,["j",A4h(AVR)],Q$,0,B,[W],0,3,0,0,["j",A4h(ALT)],ABi,0,B,[Ep],0,0,0,0,["L",A4h(AMM)],AAH,0,B,[W],0,3,0,0,
0,AAJ,0,B,[W],0,3,0,0,["j",A4h(A0u)],Kv,0,B,[],3,3,0,0,0,Pf,0,B,[Kv],0,0,0,0,["sY",A4h(AYG),"v5",A4h(AWh),"u9",A4g(ARi)]]);
$rt_metadata([AAa,0,B,[W],0,3,0,0,0,AA1,0,B,[W],0,3,0,0,0,Wd,0,B,[Z],0,3,0,0,["h",A4g(AUj)],Ue,0,Y,[],0,0,0,0,["o",A4h(AMO)],Uc,0,Y,[],0,0,0,0,["o",A4h(ATB)],PA,0,Y,[],0,0,0,0,["o",A4h(AOy),"cK",A4g(AV0)],W0,0,Y,[],0,0,0,0,["o",A4h(AYU)],WY,0,Y,[],0,0,0,0,["o",A4h(ARg)],WZ,0,Y,[],0,0,0,0,["o",A4h(AXd)],W3,0,Y,[],0,0,0,0,["o",A4h(AVm)],W5,0,Y,[],0,0,0,0,["o",A4h(AKe)],W1,0,Y,[],0,0,0,0,["o",A4h(ANq)],W2,0,Y,[],0,0,0,0,["o",A4h(AO4)],W6,0,Y,[],0,0,0,0,["o",A4h(AR6)],W7,0,Y,[],0,0,0,0,["o",A4h(AU0)],Pz,0,Y,[],
0,0,0,0,["o",A4h(A1A)],PW,0,Y,[],0,0,0,0,["o",A4h(ANs)],Px,0,Y,[],0,0,0,0,["o",A4h(AL6)],Py,0,Y,[],0,0,0,0,["o",A4h(AVP)],PD,0,Y,[],0,0,0,0,["o",A4h(AOb)],Pw,0,Y,[],0,0,0,0,["o",A4h(AZV)],PB,0,Y,[],0,0,0,0,["o",A4h(AUl)],PC,0,Y,[],0,0,0,0,["o",A4h(AQs)],LV,0,B,[],3,3,0,0,0,Zt,0,B,[LV],4,3,0,0,0,AIy,0,B,[G9],0,3,0,0,0,C8,0,B,[],3,3,0,AF0,0,Cw,0,CG,[],12,3,0,AFn,0,DV,0,B,[],3,3,0,ATP,0,ABK,0,B,[],0,3,0,0,0,OI,0,HL,[],0,0,0,0,["co",A4j(AM9),"cx",A4k(A1p),"gk",A4g(ALV)],QA,0,Bt,[],0,3,0,0,0,UH,0,Bt,[],0,3,0,0,0,Tl,
0,F5,[],0,3,0,0,0,Qu,0,F5,[],0,3,0,0,0,UF,0,B,[Cb],0,3,0,0,["bg",A4h(AVX)],UG,0,B,[Cb],0,3,0,0,["bg",A4h(AUk)],ABb,0,B,[],0,3,0,0,0,ADE,0,B,[],0,3,0,0,0,XC,0,B,[W],0,3,0,0,["j",A4h(AWS)],ADV,0,B,[],3,3,0,0,0,ABv,0,B,[Cb],0,3,0,0,["bg",A4h(AQB)],ABx,0,B,[Cb],0,3,0,0,["bg",A4h(APM)],ABy,0,B,[Cb],0,0,0,0,["bg",A4h(AQH)],WJ,0,B,[Z],0,3,0,0,0,ZV,0,B,[Kv],0,0,0,0,["sY",A4h(AZ7),"v5",A4h(AR4),"u9",A4g(A0p)],ABf,0,B,[LV],0,0,0,0,0,SR,0,B,[Cb],0,3,0,0,["bg",A4h(AW8)],ABr,0,B,[Z],0,3,0,0,["h",A4g(AYn)],ZX,0,Y,[],0,0,
0,0,["o",A4h(ASa)]]);
$rt_metadata([VE,0,Y,[],0,0,0,0,["o",A4h(AT_)],Ru,0,Y,[],0,0,0,0,["o",A4h(AK1)],Rt,0,Y,[],0,0,0,0,["o",A4h(AVJ)],Us,0,Y,[],0,0,0,0,["o",A4h(AN4)],Xl,0,Y,[],0,0,0,0,["o",A4h(A0o)],Pn,0,Y,[],0,0,0,0,["o",A4h(AP9)],Yx,0,Y,[],0,0,0,0,["o",A4h(AQ4)],VA,0,Y,[],0,0,0,0,["o",A4h(A1e)],VC,0,Y,[],0,0,0,0,["o",A4h(AMg)],O6,0,Y,[],0,0,0,0,["o",A4h(ASi)],XB,0,Y,[],0,0,0,0,["o",A4h(AXl)],XI,0,Y,[],0,0,0,0,["o",A4h(AYD)],AAg,0,Y,[],0,0,0,0,["o",A4h(A0c)],Zu,0,Y,[],0,0,0,0,["o",A4h(ASC)],OD,0,Y,[],0,0,0,0,["o",A4h(AMa)],L5,
0,Y,[],0,0,0,0,["o",A4h(AP$)],Y5,0,L5,[],0,0,0,0,["o",A4h(AZD)],ACK,0,B,[BR],3,3,0,0,0,X5,0,B,[ACK],0,3,0,0,["G9",A4g(AOO)],AFb,0,B,[BR],3,3,0,0,0,Qd,0,B,[Z],0,3,0,0,["h",A4g(ARe)],AHq,0,B,[],0,0,0,0,0,YK,0,B,[Z],0,3,0,0,["h",A4g(ANe)],ABA,0,B,[W],0,3,0,0,["j",A4h(AXT)],ABB,0,B,[W],0,3,0,0,["j",A4h(AWy)]]);
function $rt_array(cls,data){this.U6=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument javaObject instanceof ","keydown","keyup","mousemove",
"mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uTextPow;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main("
+") {\n            // D2D and JsCanvas(alpha=true) comparison:\n            //    - rgb is different\n            //    - alpha is identical\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = pow(t, uTextPow.x);\n            outColor = mix(uBgColor, uColor, text);\n          }","WebGraphics::ctor finish"," ",".","oblique","onPaste: item.type = ",", item.kind = ","x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ",
"vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uBgColor;\nuniform sampler2D sDiffuse;\nuniform vec2 uTextPow;\nin vec2 textureUV;\nvoid main() {\n  vec3 textRGB = texture(sDiffuse, textureUV).rgb;\n  vec3 textRGBp = vec3(\n    pow(textRGB.x, uTextPow.x),\n    pow(textRGB.y, uTextPow.x),\n    pow(textRGB.z, uTextPow.x));\n  vec3 mixColor = mix(uBgColor.rgb, uColor.rgb, textRGBp);\n  // if (dot(textRGB, textRGB) == 0.0) outColor = uBgColor; else\n  outColo"
+"r = vec4(textRGB * 0.0 + mixColor * 1.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uBaseline;\nuniform vec4 uScaleHExp;\nin vec2 outScreenPos;\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  float sX = uScaleHExp.x, sY = uScaleHExp.y;\n  float H = uSc"
+"aleHExp.z;\n  float E = uScaleHExp.w;\n  float arg = (pt.x - uBaseline.x) * sX;\n  float sinA = sin(arg);\n  float vDist = abs(sinA * sY - uBaseline.y + pt.y);\n  float k = sqrt(1. + (1. - sinA * sinA) * sX * sX * sY * sY * 0.5);\n  float v = vDist / (H * k);\n  float alpha = pow(1. - clamp(v + .5, 0.0, 1.0), E);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown",
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ","CodiconDemo",
"RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","TwoWindowsDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...",
"font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","ns-resize","ew-resize",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile",
"CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40",
"#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","Open project...","request in progress ","Project root","FileTreeView model size = ","Folder ",
"ClassFile ","Select left...","Select right...","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy",
"copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","Open project ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed",
"/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","open dir = ","Unknown scope type: ","/Resolved in ","readClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ",
"Is","In","opening file ... ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A",
"LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu",
"TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats",
"MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions",
"EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms",
"all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = ","Error fetching file "]);
BL.prototype.toString=function(){return $rt_ustr(this);};
BL.prototype.valueOf=BL.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ALD(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CO=Long_add;var JD=Long_sub;var Cg=Long_mul;var AFK=Long_div;var ATx=Long_rem;var A1X=Long_or;var Db=Long_and;var A79=Long_xor;var HI=Long_shl;var A3g=Long_shr;var F3=Long_shru;var A7$=Long_compare;var Iy=Long_eq;var A7_=Long_ne;var A1U=Long_lt;var AMy=Long_le;var A8a=Long_gt;var A1T=Long_ge;var A8b=Long_not;var A3r=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A3s);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AAn.prototype;c.f=c.bg;c=AAo.prototype;c.f=c.bg;c=AAm.prototype;c.f=c.bg;c=VU.prototype;c.f=c.bg;c=AIv.prototype;c.get=c.J0;Object.defineProperty(c,"length",{get:c.P_});c=AHf.prototype;c.createEntityReference=c.MA;c.getElementById=c.ON;c.createTextNode=c.Ox;c.hasChildNodes=c.NC;c.querySelectorAll=c.Mh;c.removeChild=c.PX;c.cloneNode=c.EZ;c.createComment=c.Q6;c.insertBefore=c.MR;c.getElementsByTagNameNS=c.P9;c.hasAttributes=c.Hx;c.normalize=c.Kv;c.hasChildNodesJS=c.Ko;c.getElementsByTagName
=c.JZ;c.appendChild=c.Lq;c.createAttributeNS=c.O5;c.dispatchEvent=c.J_;c.replaceChild=c.Fr;c.createElementNS=c.Gv;c.createCDATASection=c.Jl;c.querySelector=c.Hw;c.createElement=c.Pv;c.isSupported=c.P1;c.importNode=c.M2;c.removeEventListener=c.Gr;c.createAttribute=c.Kb;c.createDocumentFragment=c.Eo;c.createProcessingInstruction=c.Mt;c.addEventListener=c.IG;Object.defineProperty(c,"nodeName",{get:c.Lp});Object.defineProperty(c,"documentElement",{get:c.Ha});Object.defineProperty(c,"childNodes",{get:c.I6});Object.defineProperty(c,
"prefix",{get:c.M8,set:c.Rg});Object.defineProperty(c,"implementation",{get:c.JE});Object.defineProperty(c,"textContent",{get:c.Q_,set:c.Ov});Object.defineProperty(c,"parentNode",{get:c.OK});Object.defineProperty(c,"nextSibling",{get:c.G3});Object.defineProperty(c,"nodeType",{get:c.PJ});Object.defineProperty(c,"doctype",{get:c.NR});Object.defineProperty(c,"localName",{get:c.Qq});Object.defineProperty(c,"nodeValue",{get:c.GL,set:c.QY});Object.defineProperty(c,"firstChild",{get:c.J7});Object.defineProperty(c,
"lastChild",{get:c.IO});Object.defineProperty(c,"previousSibling",{get:c.Lc});Object.defineProperty(c,"namespaceURI",{get:c.FK});Object.defineProperty(c,"attributes",{get:c.Nd});Object.defineProperty(c,"ownerDocument",{get:c.FR});c=O7.prototype;c.f=c.bg;c=AHE.prototype;c.removeEventListener=c.FU;c.dispatchEvent=c.MX;c.addEventListener=c.Ih;c=TB.prototype;c.onAnimationFrame=c.Hy;c=TA.prototype;c.f=c.As;c=Ty.prototype;c.handleEvent=c.cr;c=Zr.prototype;c.f=c.bg;c=AB2.prototype;c.handleEvent=c.cr;c=AB3.prototype;c.handleEvent
=c.cr;c=AB4.prototype;c.handleEvent=c.cr;c=AB5.prototype;c.handleEvent=c.cr;c=AB6.prototype;c.handleEvent=c.cr;c=AB7.prototype;c.handleEvent=c.cr;c=AB8.prototype;c.handleEvent=c.cr;c=AB9.prototype;c.handleEvent=c.cr;c=AB$.prototype;c.handleEvent=c.cr;c=AB_.prototype;c.handleEvent=c.cr;c=U9.prototype;c.handleEvent=c.cr;c=U$.prototype;c.handleEvent=c.cr;c=U_.prototype;c.handleEvent=c.cr;c=Va.prototype;c.handleEvent=c.cr;c=AAS.prototype;c.handleEvent=c.cr;c=ACW.prototype;c.f=c.bg;c=ACX.prototype;c.f=c.bg;c=V2.prototype;c.f
=c.bg;c=V1.prototype;c.f=c.bg;c=VZ.prototype;c.f=c.bg;c=VY.prototype;c.f=c.bg;c=O3.prototype;c.accept=c.Kh;c=Ow.prototype;c.f=c.bg;c=Oy.prototype;c.f=c.bg;c=Ox.prototype;c.f=c.bg;c=Xt.prototype;c.f=c.As;c=Xr.prototype;c.f=c.As;c=Zh.prototype;c.f=c.bg;c=ABF.prototype;c.f=c.bg;c=Ov.prototype;c.f=c.bg;c=ACP.prototype;c.f=c.bg;c=ACO.prototype;c.f=c.bg;c=ACg.prototype;c.f=c.bg;c=ACf.prototype;c.f=c.bg;c=SG.prototype;c.handleEvent=c.cr;c=UF.prototype;c.f=c.bg;c=UG.prototype;c.f=c.bg;c=ABv.prototype;c.f=c.bg;c=ABx.prototype;c.f
=c.bg;c=ABy.prototype;c.f=c.bg;c=SR.prototype;c.f=c.bg;c=X5.prototype;c.onTimer=c.G9;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);