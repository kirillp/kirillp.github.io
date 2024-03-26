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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ef=f;}
function $rt_cls(cls){return Uq(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GG(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cp.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AVo(t);}
function $rt_throwableCause(t){return A4M(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A$c());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IR();}
function $rt_setThread(t){return AUK(t);}
function $rt_createException(message){return A$d(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A$e());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BQ=$rt_compare;var A$f=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var E3=$rt_isInstance;var A$g=$rt_nativeThread;var A$h=$rt_suspending;var A$i=$rt_resuming;var A$j=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var Bb=$rt_imul;var Fc=$rt_wrapException;var A$k=$rt_checkBounds;var A$l=$rt_checkUpperBound;var A$m=$rt_checkLowerBound;var A$n=$rt_wrapFunction0;var A$o=$rt_wrapFunction1;var A$p=$rt_wrapFunction2;var A$q=$rt_wrapFunction3;var A$r=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ALl=$rt_createCharArrayFromData;var A8h=$rt_createByteArrayFromData;var A8Q=$rt_createShortArrayFromData;var D_=$rt_createIntArrayFromData;var A$s=$rt_createBooleanArrayFromData;var A$t=$rt_createFloatArrayFromData;var A$u=$rt_createDoubleArrayFromData;var AKF=$rt_createLongArrayFromData;var A$b=$rt_createBooleanArray;var DT=$rt_createByteArray;var A$v=$rt_createShortArray;var B6=$rt_createCharArray;var BP=$rt_createIntArray;var A$w=$rt_createLongArray;var ANU=$rt_createFloatArray;var A$x
=$rt_createDoubleArray;var BQ=$rt_compare;var A$y=$rt_castToClass;var A$z=$rt_castToInterface;var A$A=Long_toNumber;var Bq=Long_fromInt;var A$B=Long_fromNumber;var D=Long_create;var F1=Long_ZERO;var A$C=Long_hi;var Hg=Long_lo;
function B(){this.$id$=0;}
function BF(a){return Uq(a.constructor);}
function AS_(a,b){return a!==b?0:1;}
function AGI(a){var b,c,d,e,f,g,h,i,j;b=Ni(a);if(!b)c=C(0);else{d=(((32-YH(b)|0)+4|0)-1|0)/4|0;e=B6(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=IP((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GG(e);}j=new J;L(j);H(H(j,C(1)),c);return K(j);}
function Ni(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ASq(a){var b,c,d;if(!E3(a,Ej)&&a.constructor.$meta.item===null){b=new VH;X(b);N(b);}b=AN1(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function S1(){var a=this;B.call(a);a.C3=0;a.q8=null;}
function A9B(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AMV();AKe();AHO();AIA();AJW();AK5();AHY();AGe();AGa();AHq();AJl();AKd();AMq();AIm();ALC();AK9();AI0();AIf();ALf();ANa();AH0();AKL();AHs();AMy();AKv();AL2();AJO();AL9();AMv();AJg();c=(AGs()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))ZB(C(2),C(3));else{d=new S1;BG(d);e=new AC5;e.BO=d;f=new X7;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new Qp;j.zB
=i;j.zC=g;j.zD=6;j.zE=e;j.zy=f;k=Bw(j,"f");i.onmessage=k;h=h+1|0;}l=I(MI,[Fq(C(4),C(5),300),Fq(C(6),C(7),300),Fq(C(8),C(5),400),Fq(C(9),C(7),400),Fq(C(10),C(5),600),Fq(C(11),C(7),600),Fq(C(12),C(5),700),Fq(C(13),C(7),700)]);m=P(MI,1);m.data[0]=AVU(C(14),FM(C(15),C(16)),C(5),400);b=(MG(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.vm;f=c.up;i=new J;L(i);Br(H(H(i,C(17)),f),41);i=K(i);f=c.um;o=c.sS;c=A0Q($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BG(d);c=new AC6;c.Cn=d;g=new AC4;e.then(Bw(c,"f"),Bw(g,"f"));}}
function AIG(b){var c,d,e,f,g,h,i,j;c=new AB5;d=new VG;d.zo=c;c.u4=d;d=new VE;d.C9=c;c.o$=d;e=new VF;e.A$=c;c.wz=new $rt_globals.ResizeObserver(Bw(e,"f"));d=new VD;d.sk=c;c.ye=d;c.l1=1;d=new ABN;d.m5=new US;e=new Zz;e.E6=null;e.mX=A$D;d.tm=e;BG(e);f=new ABP;f.Bo=e;d.C5=f;d.Cw=b;g=b.length;h=0;while(h<g){e=b[h];i=new ABQ;i.At=d;i.As=h;f=Bw(i,"f");e.onmessage=f;e=b[h];f=ALA();e.postMessage(f);h=h+1|0;}d.iX=0;d.p3=BP(g);c.CN=d;c.rq=(EL()).getElementById("canvasDiv");d=AGs();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eS=d;c.rq.appendChild(d);b=c.eS;d=AUi(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)ZB(C(2),C(18));else{c.qx=A9n(c.eS,c.o$);b=new Vv;j=c.o$;AMU(b,e,new ADz,1,2.25,0.625);b.E4=new ADy;b.ED=j;c.ig=b;AU3(c.wz,c.eS,AYj());d=$rt_globals.window;j=c.ye;d.addEventListener("resize",Bw(j,"handleEvent"));j=new Px;b=c.ig;d=c.qx.cL;j.U=b;j.o=d;j.bL=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new P4;Ey(b,j);d=$rt_globals.fetch("test.wasm");j
=new Yd;d=d.then(Bw(j,"f"));j=new Yc;e=d.then(Bw(j,"f"));j=new Ya;d=new X_;e.then(Bw(j,"f"),Bw(d,"f"));}else b=Bj(C(20),d)?A9i(j):(A5I(M(d)<=0?C(21):DC(d,1))).bb(j);c.hd=b;Ub(c);}c.eS.focus();}
var X6=G(0);
var XG=G(0);
function AEA(){var a=this;B.call(a);a.nC=null;a.wB=null;a.dq=null;}
function Uq(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AEA;c.dq=b;d=c;b.classObject=d;}return c;}
function GT(a){if(a.nC===null)a.nC=AIX(a.dq);return a.nC;}
function H4(a){var b,c,d,e;b=a.wB;if(b===null){if(ANs(a.dq)===null?0:1){b=H4(FU(a));c=new J;L(c);H(H(c,b),C(22));b=K(c);}else{b=a.dq.$meta.enclosingClass;if((b===null?null:Uq(b))!==null){b=$rt_str(a.dq.$meta.simpleName);if(b===null)b=C(21);}else{b=AIX(a.dq);d=SP(b,36);if(d==(-1)){e=SP(b,46);if(e!=(-1))b=DC(b,e+1|0);}else{b=DC(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(21);}}}a.wB=b;}return b;}
function Jm(a){return a.dq.$meta.primitive?1:0;}
function FU(a){return Uq(ANs(a.dq));}
var AKP=G();
function Bw(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fv(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AKD=G();
function AN1(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACW(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACW(d[e],c))return 1;e=e+1|0;}return 0;}
function ATQ(b){var c='$$enumConstants$$';Hz[c]=AOe;Eu[c]=ANT;Ix[c]=ASM;Cu[c]=AHz;Cy[c]=ALL;Ib[c]=AU$;EI[c]=AX4;G_[c]=AKl;CD[c]=AMT;ATQ=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return ATQ(b);}
function ANs(b){return b.$meta.item;}
function AIX(b){return $rt_str(b.$meta.name);}
function Ho(){var a=this;B.call(a);a.jl=null;a.n4=null;a.le=0;a.lz=0;}
function A$E(){var a=new Ho();X(a);return a;}
function A$F(a){var b=new Ho();Bn(b,a);return b;}
function X(a){a.le=1;a.lz=1;}
function Bn(a,b){a.le=1;a.lz=1;a.jl=b;}
function A0F(a){return a;}
function AVo(a){return a.jl;}
function A4M(a){var b;b=a.n4;if(b===a)b=null;return b;}
var EM=G(Ho);
function A$G(){var a=new EM();AIv(a);return a;}
function AIv(a){X(a);}
var Bt=G(EM);
function A$d(a){var b=new Bt();A6h(b,a);return b;}
function A6h(a,b){Bn(a,b);}
var ABk=G(Bt);
var C3=G(0);
var CI=G(0);
var KV=G(0);
function BC(){var a=this;B.call(a);a.cp=null;a.kF=0;}
var A$H=null;var A$I=null;var A$J=null;function Fu(){Fu=Bm(BC);AWp();}
function ARm(){var a=new BC();AGc(a);return a;}
function GG(a){var b=new BC();J3(b,a);return b;}
function ET(a,b,c){var d=new BC();Pp(d,a,b,c);return d;}
function AGc(a){Fu();a.cp=A$H;}
function J3(a,b){Fu();Pp(a,b,0,b.data.length);}
function Pp(a,b,c,d){var e;Fu();e=B6(d);a.cp=e;Db(b,c,e,0,d);}
function M$(b){var c;Fu();c=ARm();c.cp=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.cp.data;if(b<c.length)return c[b];}d=new IL;X(d);N(d);}
function M(a){return a.cp.data.length;}
function GR(a){return a.cp.data.length?0:1;}
function RT(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Db(a.cp,b,d,e,c);return;}}g=new BJ;X(g);N(g);}
function O_(a,b){var c,d,e;if(a===b)return 0;c=Be(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ADt(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ob(a,b){if(a===b)return 1;return ADt(a,b,0);}
function DI(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Ky(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cp.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kr(b);h=JO(b);while(true){f=a.cp.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function HV(a,b,c){var d,e,f,g,h;d=Be(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cp.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kr(b);g=JO(b);while(true){if(d<1)return (-1);h=a.cp.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function SP(a,b){return HV(a,b,M(a)-1|0);}
function Z0(a,b,c){var d,e,f;d=Bd(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A3y(a,b){return Z0(a,b,0);}
function RP(a,b,c){var d,e;d=Be(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AHv(a,b){return RP(a,b,M(a));}
function Cz(a,b,c){var d,e;d=BQ(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d){Fu();return A$I;}if(!b&&c==M(a))return a;return ET(a.cp,b,c-b|0);}
function DC(a,b){return Cz(a,b,M(a));}
function RZ(a,b,c){return Cz(a,b,c);}
function FM(a,b){var c,d,e,f,g,h;if(GR(b))return a;if(GR(a))return b;c=B6(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return M$(c);}
function ADX(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Br(d,Q(a,f));}f=f+1|0;}H(d,DC(a,f));return K(d);}
function ABu(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cz(a,b,c+1|0);}
function APd(a){return a;}
function GS(a){var b,c,d,e,f;b=a.cp.data;c=B6(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){Fu();return b===null?C(23):b.M();}
function Oh(b){var c,d;Fu();c=new BC;d=B6(1);d.data[0]=b;J3(c,d);return c;}
function Dp(b){var c;Fu();c=new J;L(c);return K(V(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function Kz(a){var b,c,d,e;a:{if(!a.kF){b=a.cp.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kF=(31*a.kF|0)+e|0;d=d+1|0;}}}return a.kF;}
function MU(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Go;Bn(b,C(24));N(b);}A$K=1;d=new AA4;d.nr=P(C7,10);d.ip=(-1);d.gf=(-1);d.bJ=(-1);e=new Hw;e.fQ=1;e.b0=b;e.bm=B6(M(b)+2|0);Db(GS(b),0,e.bm,0,M(b));f=e.bm.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.A3=g;e.hI=0;Gc(e);Gc(e);d.l=e;d.eq=0;d.oc=W9(d,(-1),0,null);if(!DK(d.l)){b=new KR;h=d.l;Ns(b,C(21),h.b0,h.dU);N(b);}if(d.rM)d.oc.fh();b=BO();h=new ABV;h.kW=(-1);h.pR=(-1);h.DW=d;h.Cp=d.oc;h.mg=a;h.kW=0;g=M(a);h.pR=g;e=new ADY;i=h.kW;j=d.ip;k=d.gf+1|0;l=d.bJ
+1|0;e.js=(-1);m=j+1|0;e.ss=m;e.ez=BP(m*2|0);f=BP(l);e.lt=f;J8(f,(-1));if(k>0)e.qb=BP(k);J8(e.ez,(-1));AFL(e,a,i,g);h.c4=e;e.g8=1;n=0;m=0;if(!M(a)){f=P(BC,1);f.data[0]=C(21);}else{while(true){l=M(h.mg);if(!AGn(h))l=h.pR;e=h.c4;if(e.fe>=0&&AHm(e)==1){e=h.c4;e.fe=Nh(e);if(Nh(h.c4)==AIz(h.c4)){e=h.c4;e.fe=e.fe+1|0;}g=h.c4.fe;g=g<=l&&PF(h,g)?1:0;}else g=PF(h,h.kW);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BA(b,RZ(a,m,AJC(h)));m=AK6(h);n=g;}a:{BA(b,RZ(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BI(b,
g)))break a;E2(b,g);}}if(g<0)g=0;f=GM(b,P(BC,g));}return f;}
function AQR(a,b){return O_(a,b);}
function AWp(){A$H=B6(0);A$I=ARm();A$J=new TX;}
var FP=G(Ho);
var IQ=G(FP);
var ALh=G(IQ);
var DH=G();
function H8(){DH.call(this);this.bu=0;}
var A$L=null;var A$M=null;function A5E(a){var b=new H8();AG1(b,a);return b;}
function AG1(a,b){a.bu=b;}
function Iu(b){return (Yo(A95(20),b,10)).M();}
function Ln(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dz;Bn(b,C(25));N(b);}d=M(b);if(0==d){b=new Dz;Bn(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dz;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Zw(Q(b,f));if(i<0){j=new Dz;k=Cz(b,0,d);b=new J;L(b);H(H(b,C(27)),k);Bn(j,K(b));N(j);}if(i>=c){j=new Dz;l=Cz(b,0,d);b=new J;L(b);H(H(V(H(b,C(28)),c),C(29)),l);Bn(j,K(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dz;k=Cz(b,0,d);b=new J;L(b);H(H(b,C(30)),k);Bn(j,K(b));N(j);}b=new Dz;j=new J;L(j);V(H(j,C(31)),c);Bn(b,K(j));N(b);}
function C5(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A$M===null){A$M=P(H8,256);c=0;while(true){d=A$M.data;if(c>=d.length)break a;d[c]=A5E(c-128|0);c=c+1|0;}}}return A$M.data[b+128|0];}return A5E(b);}
function AWM(a){return Iu(a.bu);}
function A6W(a,b){if(a===b)return 1;return b instanceof H8&&b.bu==a.bu?1:0;}
function YH(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function JB(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A1$(a,b){b=b;return BQ(a.bu,b.bu);}
function AMV(){A$L=F($rt_intcls());}
function Hi(){var a=this;B.call(a);a.E=null;a.J=0;}
function A$N(){var a=new Hi();L(a);return a;}
function A95(a){var b=new Hi();Gd(b,a);return b;}
function L(a){Gd(a,16);}
function Gd(a,b){a.E=B6(b);}
function Yo(a,b,c){return ALu(a,a.J,b,c);}
function ALu(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cp(a,b,b+1|0);else{Cp(a,b,b+2|0);f=a.E.data;g=b+1|0;f[b]=45;b=g;}a.E.data[b]=IP(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cp(a,b,b+i|0);if(e)e=b;else{f=a.E.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.E.data;b=e+1|0;f[e]=IP($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AL_(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BQ(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.E.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.E.data;d=b+1|0;e[b]=45;}e=a.E.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$O;AL3(c,f);d=f.nM;g=f.ny;h=f.rV;i=1;j=1;if(h)j=2;k=9;l=AVV(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cp(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.E.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.E.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.E.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.E.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AKY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BQ(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.E.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.E.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.E.data;d=b+1|0;e[b]=45;}e=a.E.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$P;AHI(c,f);g=f.od;h=f.nk;i=f.rI;j=1;k=1;if(i)k=2;l=18;m=AUw(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.E.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.E.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AQi(p,F1))d=0;else{d=Hg(AIH(g,p));g=AYf(g,p);}e=a.E.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AIH(p,Bq(10));q=q+1|0;}if(h){e=a.E.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AVV(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AUw(b){var c,d,e,f,g;c=Bq(1);d=0;e=16;f=A$Q.data;g=f.length-1|0;while(g>=0){if(Jf(AYf(b,Cm(c,f[g])),F1)){d=d|e;c=Cm(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Br(a,b){return a.qO(a.J,b);}
function AFD(a,b,c){Cp(a,b,b+1|0);a.E.data[b]=c;return a;}
function ND(a,b){var c,d;c=a.E.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.E=Lk(a.E,d);}
function K(a){return ET(a.E,0,a.J);}
function AFk(a,b,c,d){return a.qw(a.J,b,c,d);}
function X0(a,b,c,d,e){var f,g,h,i;Cp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.E.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function KB(a,b){return a.pW(b,0,b.data.length);}
function Cp(a,b,c){var d,e,f,g;d=a.J;e=d-b|0;a.ky((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.E.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.J=a.J+(c-b|0)|0;}
var Kj=G(0);
var J=G(Hi);
function MM(){var a=new J();A6K(a);return a;}
function A7j(a){var b=new J();AYi(b,a);return b;}
function A6K(a){L(a);}
function AYi(a,b){var c,d;a.E=B6(M(b));c=0;while(true){d=a.E.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.J=M(b);}
function H(a,b){Nb(a,a.J,b===null?C(23):b.M());return a;}
function BM(a,b){Nb(a,a.J,b);return a;}
function V(a,b){Yo(a,b,10);return a;}
function Ic(a,b){var c,d,e,f,g,h,i,j;c=a.J;d=1;if(A7Z(b,F1)){d=0;b=A9A(b);}a:{if(DN(b,Bq(10))<0){if(d)Cp(a,c,c+1|0);else{Cp(a,c,c+2|0);e=a.E.data;f=c+1|0;e[c]=45;c=f;}a.E.data[c]=IP(Hg(b),10);}else{g=1;h=Bq(1);i=Dj(Bq(-1),Bq(10));b:{while(true){j=Cm(h,Bq(10));if(DN(j,b)>0){j=h;break b;}g=g+1|0;if(DN(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cp(a,c,c+g|0);if(d)f=c;else{e=a.E.data;f=c+1|0;e[c]=45;}while(true){if(Jf(j,F1))break a;e=a.E.data;c=f+1|0;e[f]=IP(Hg((Dj(b,j))),10);b=AKh(b,j);j=Dj(j,Bq(10));f=c;}}}return a;}
function Dg(a,b){AL_(a,a.J,b);return a;}
function AF9(a,b){Br(a,b);return a;}
function LJ(a,b){var c;c=M(b);ADm(a,a.J,b,0,c);return a;}
function J7(a,b){Nb(a,a.J,!b?C(32):C(33));return a;}
function AJp(a,b,c){var d,e,f,g,h,i;d=BQ(b,c);if(d<=0){e=a.J;if(b<=e){if(d){f=e-c|0;a.J=e-(c-b|0)|0;g=0;while(g<f){h=a.E.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new IL;X(i);N(i);}
function We(a,b){var c,d,e,f;if(b>=0){c=a.J;if(b<c){c=c-1|0;a.J=c;while(b<c){d=a.E.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new IL;X(f);N(f);}
function A15(a,b,c,d,e){X0(a,b,c,d,e);return a;}
function AP7(a,b,c,d){AFk(a,b,c,d);return a;}
function ADm(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Cp(a,b,(b+e|0)-d|0);while(d<e){f=a.E.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BJ;X(c);N(c);}
function AKw(a){return a.J;}
function Er(a){return K(a);}
function ASp(a,b){ND(a,b);}
function A2r(a,b,c){AFD(a,b,c);return a;}
function Nb(a,b,c){var d,e,f;if(b>=0&&b<=a.J){a:{if(c===null)c=C(23);else if(GR(c))break a;ND(a,a.J+M(c)|0);d=a.J-1|0;while(d>=b){a.E.data[d+M(c)|0]=a.E.data[d];d=d+(-1)|0;}a.J=a.J+M(c)|0;d=0;while(d<M(c)){e=a.E.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new IL;X(c);N(c);}
var Fj=G(IQ);
var AMm=G(Fj);
function A$R(a){var b=new AMm();APh(b,a);return b;}
function APh(a,b){Bn(a,b);}
var ALc=G(Fj);
function A$S(a){var b=new ALc();APt(b,a);return b;}
function APt(a,b){Bn(a,b);}
var ACU=G(0);
var Dt=G(0);
function BY(b,c){if(b!==null)b.bZ();return c;}
var Zu=G(0);
function KN(){var a=this;B.call(a);a.jQ=0;a.oB=0;a.n2=0;}
var A$T=0;function EP(a){A$T=A$T-1|0;}
function HX(a,b,c){Lc(a,AKV(b,c,400,0));}
function LR(a,b){return L3(a,b,0.875);}
function L3(a,b,c){return EA(a,b)+c|0;}
function ABj(){var a=this;KN.call(a);a.jG=null;a.dB=null;a.x6=null;}
function E8(a){var b,c,d;b=a.dB;c=a.oB;d=a.n2;b.clearRect(0.0,0.0,c,d);}
function ABC(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dB;d="center";c.textAlign=d;break a;case 2:c=a.dB;d="right";c.textAlign=d;break a;default:break a;}d=a.dB;c="left";d.textAlign=c;}}
function Cr(a,b){Lc(a,b.ry);}
function Lc(a,b){var c;if(a.x6!==b){c=a.dB;a.x6=b;c.font=b;}}
function AKV(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.dB;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EA(a,b){var c;c=$rt_ustr(b);return a.dB.measureText(c).width;}
function KF(a,b,c,d){var e,f;e=a.dB;f=$rt_ustr(GG(ALl([35,In(b/16|0),In(b%16|0),In(c/16|0),In(c%16|0),In(d/16|0),In(d%16|0)])));e.fillStyle=f;}
function AY5(){return {alpha:false};}
var AKf=G();
var AM1=G();
function BR(b,c){if(b===c)return 1;return b!==null?b.bT(c):c!==null?0:1;}
function BG(b){if(b!==null)return b;b=new Go;Bn(b,C(21));N(b);}
var BX=G(0);
function GN(b){return b;}
var Ch=G(0);
function AC5(){B.call(this);this.BO=null;}
function A7b(a,b){var c;c=a.BO;c.q8=b;if(c.C3)AIG(b);}
var AIk=G();
function Jj(b,c){return b.data[c];}
var ALR=G();
var AGo=G(0);
function Fq(b,c,d){return AVU(C(34),FM(C(15),b),c,d);}
var AMO=G(0);
var AIR=G(0);
function MG(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CT(b,f+g|0);Db(c,0,d,f,g);return d;}
function L8(b,c,d){Db(b,c,d,0,d.data.length);return d;}
function ABa(b,c,d){var e;if(c>0)Db(b,0,d,0,c);e=d.data.length;if(c<e)Db(b,c+1|0,d,c,e-c|0);return d;}
function AHr(b,c,d,e){var f;if(c>0)Db(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Db(b,d,e,c,f-d|0);}return e;}
function CQ(b){var c;c=new PD;c.mf=b;return c;}
function AGX(b,c){if(b.data.length!=c)b=CT(b,c);return b;}
function D2(b,c,d){var e;e=c.data.length;if(e==d)c=CT(c,e*2|0);c.data[d]=b;return c;}
function ADR(b,c,d){var e;e=c.data.length;if(e==d)c=O7(c,e*2|0);c.data[d]=b;return c;}
function O6(b){return Lk(b,b.data.length);}
function MI(){var a=this;B.call(a);a.vm=null;a.up=null;a.um=null;a.sS=0;}
function AVU(a,b,c,d){var e=new MI();AVg(e,a,b,c,d);return e;}
function AVg(a,b,c,d,e){a.vm=b;a.up=c;a.um=d;a.sS=e;}
var AGS=G();
function A0Q(b,c){return {style:b,weight:c};}
function AC6(){B.call(this);this.Cn=null;}
function ANG(a,b){var c,d,e;c=a.Cn;d=0;while(d<b.length){e=b[d];(EL()).fonts.add(e);d=d+1|0;}c.C3=1;b=c.q8;if(b!==null)AIG(b);}
var AC4=G();
function A5X(a,b){$rt_globals.console.info("font load error "+b);}
var Ml=G();
var A$U=null;var A$V=null;function Bk(){if(A$U===null)A$U=ATD(A$W,0);return A$U;}
function D4(){if(A$V===null)A$V=ATD(A$X,0);return A$V;}
function A8k(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OI(b)&&(e+f|0)<=OI(d)){a:{b:{if(b!==d){g=FU(BF(b));h=FU(BF(d));if(g!==null&&h!==null){if(g===h)break b;if(!Jm(g)&&!Jm(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dq;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACW(n.constructor,o)?1:0)){Og(b,c,d,e,j);b=new JP;X(b);N(b);}j=j+1|0;k=m;}Og(b,c,d,e,f);return;}if(!Jm(g))break a;if(Jm(h))break b;else break a;}b=new JP;X(b);N(b);}}Og(b,c,
d,e,f);return;}b=new JP;X(b);N(b);}b=new BJ;X(b);N(b);}d=new Go;Bn(d,C(35));N(d);}
function Db(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OI(b)&&(e+f|0)<=OI(d)){Og(b,c,d,e,f);return;}b=new BJ;X(b);N(b);}
function Og(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EN(){return Long_fromNumber(new Date().getTime());}
function AIC(){return A$B($rt_globals.performance.now()*1000000.0);}
var AIQ=G();
var AK7=G();
function ZB(b,c){var d,e,f;d=(EL()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EL()).getElementById($rt_ustr(b)).appendChild(d);}
function AGs(){return (EL()).createElement("canvas");}
function AJu(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AUi(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AND=G();
var X7=G();
function A3p(a,b){var c;c=new Bt;Bn(c,$rt_str(b.message));N(c);}
var AI3=G();
function FZ(b){return $rt_str(b);}
var AKs=G();
function Lk(b,c){var d,e,f,g;b=b.data;d=B6(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function O7(b,c){var d,e,f,g;b=b.data;d=DT(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JU(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CT(b,c){var d,e,f,g;d=b.data;e=UV(FU(BF(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ALz(b,c,d){var e,f,g,h;e=BP(d-c|0);f=e.data;g=c;while(g<d){h=b.data;f[g-c|0]=h[g];g=g+1|0;}return e;}
function AJa(b,c,d,e){var f,g,h,i,j,k,l,m;f=UV(FU(e),d-c|0);g=c;while(g<d){h=b.data;i=g-c|0;j=FU(e);k=h[g];if(k!==null&&!ACW((BF(k)).dq,j.dq)){e=new ABk;k=GT(BF(k));l=GT(j);m=new J;L(m);H(H(H(m,k),C(36)),l);Bn(e,K(m));N(e);}f.data[i]=k;g=g+1|0;}return f;}
function AIs(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(37));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(38));V(c,e[d]);d=d+1|0;}BM(c,C(39));return K(c);}
function AVv(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(37));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(38));Dg(c,e[d]);d=d+1|0;}BM(c,C(39));return K(c);}
function AXF(b){var c,d,e,f;if(b===null)return C(23);c=new J;L(c);BM(c,C(37));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(38));f=e[d];AKY(c,c.J,f);d=d+1|0;}BM(c,C(39));return K(c);}
function J8(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AGM(b,c,d,e){var f,g;if(c>d){e=new BU;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function LE(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A$D;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qV(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AMa(b,c){return AC$(b,0,b.data.length,c);}
function AC$(b,c,d,e){var f,g,h,i,j;f=BQ(c,d);if(f>0){g=new BU;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var AEf=G(0);
var ALG=G();
function A1e(a,b){return a.Pv(b);}
function AS7(a){return a.S7();}
var AHG=G();
var GE=G(0);
var TX=G();
var BJ=G(Bt);
var AL7=G();
function OI(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A$Y());}return b.data.length;}
function UV(b,c){if(b===null){b=new Go;X(b);N(b);}if(b===F($rt_voidcls())){b=new BU;X(b);N(b);}if(c>=0)return AWT(b.dq,c);b=new AF3;X(b);N(b);}
function AWT(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Go=G(Bt);
var JP=G(Bt);
function Dq(){B.call(this);this.nw=0;}
var A$Z=null;var A$0=null;var A$1=null;var A$2=null;var A$3=null;var A$4=null;var A$5=null;var A$6=null;var A$7=null;var A$8=null;function AXl(a){var b=new Dq();AHg(b,a);return b;}
function AHg(a,b){a.nw=b;}
function Qq(b){var c,d;c=A$4.data;if(b>=c.length)return AXl(b);d=c[b];if(d===null){d=AXl(b);A$4.data[b]=d;}return d;}
function WO(b){var c,d;c=new BC;d=B6(1);d.data[0]=b;J3(c,d);return c;}
function MY(b){return b>=65536&&b<=1114111?1:0;}
function C1(b){return (b&64512)!=55296?0:1;}
function Do(b){return (b&64512)!=56320?0:1;}
function Pf(b){return !C1(b)&&!Do(b)?0:1;}
function J2(b,c){return C1(b)&&Do(c)?1:0;}
function E5(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kr(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function JO(b){return (56320|b&1023)&65535;}
function F3(b){return Ht(b)&65535;}
function Ht(b){if(A$2===null){if(A$5===null)A$5=AMu();A$2=AHt((A$5.value!==null?$rt_str(A$5.value):null));}return TL(A$2,b);}
function FF(b){return Hr(b)&65535;}
function Hr(b){if(A$1===null){if(A$6===null)A$6=AMW();A$1=AHt((A$6.value!==null?$rt_str(A$6.value):null));}return TL(A$1,b);}
function TL(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BQ(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ADG(b,c){if(c>=2&&c<=36){b=Zw(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Zw(b){var c,d,e,f,g,h,i,j,k,l;if(A$0===null){if(A$7===null)A$7=ALj();c=(A$7.value!==null?$rt_str(A$7.value):null);d=AVq(GS(c));e=NK(d);f=BP(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+P1(d)|0;j=j+P1(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A$0=f;}g=A$0.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BQ(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function IP(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GP(b){var c;if(b<65536){c=B6(1);c.data[0]=b&65535;return c;}return ALl([Kr(b),JO(b)]);}
function CK(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Pf(b&65535))return 19;if(A$3===null){if(A$8===null)A$8=AJT();d=(A$8.value!==null?$rt_str(A$8.value):null);e=P(Yh,16384);f=e.data;g=DT(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=Oc(Q(d,l));if(m==64){l=l+1|0;m=Oc(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Oc(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Oc(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AQP(k,k+i|0,O7(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AQP(k,k+i|0,O7(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A$3=CT(e,j);}e=A$3.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.uH)o=p+1|0;else{c=d.zz;if(b>=c)return d.zI.data[b-c|0];c=p-1|0;}}return 0;}
function Lm(b){a:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ig(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CK(b)!=16?0:1;}
function ZQ(b){switch(CK(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function SJ(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return ZQ(b);}return 1;}
function AKe(){A$Z=F($rt_charcls());A$4=P(Dq,128);}
function AMu(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AMW(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ALj(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AJT(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var XB=G(0);
var ABX=G(0);
var Fe=G(0);
var AKi=G();
function EL(){return $rt_globals.window.document;}
function A25(a){return a.Kf();}
function A5l(a,b){return a.L2($rt_str(b));}
function A48(a,b){a.Jp($rt_str(b));}
function AZU(a,b){return a.PH($rt_str(b));}
function ANZ(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AP0(a){return a.Tt();}
function A5h(a,b,c){return a.Sc($rt_str(b),$rt_str(c));}
function ASb(a,b,c,d){a.Es($rt_str(b),Fv(c,"handleEvent"),d?1:0);}
function AYV(a){return a.QY();}
function A3U(a){return !!a.Mq();}
function A5S(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ATs(a){return a.Jy();}
function ARP(a,b){a.R4($rt_str(b));}
function ATP(a){return !!a.Jg();}
function AXK(a){return a.L_();}
function ASD(a){return $rt_ustr(a.Hc());}
function AOF(a,b){return a.JK(b?1:0);}
function A6Z(a){return a.Mp();}
function A1G(a,b,c){return a.T8($rt_str(b),$rt_str(c));}
function ATl(a,b,c){return a.Qg(b,c?1:0);}
function AWW(a,b,c){return !!a.LA($rt_str(b),$rt_str(c));}
function AYc(a){return a.KM();}
function ARy(a){return $rt_ustr(a.Nr());}
function AP$(a,b){return !!a.Gm(b);}
function AQ2(a,b){return a.NU($rt_str(b));}
function A1Q(a,b,c){return a.Kd($rt_str(b),$rt_str(c));}
function ASN(a){return a.OH();}
function AYY(a,b){return a.Tz($rt_str(b));}
function AQ1(a){return $rt_ustr(a.Ok());}
function AUU(a){a.Jc();}
function ANM(a,b){return a.T_($rt_str(b));}
function AWi(a,b){return a.Ju($rt_str(b));}
function AZh(a,b){return a.Ja($rt_str(b));}
function A5M(a){return $rt_ustr(a.OT());}
function AZo(a,b,c){return a.RD(b,c);}
function A37(a,b){return a.Hb(b);}
function AVl(a){return a.Lm();}
function AUc(a,b,c){a.FS($rt_str(b),Fv(c,"handleEvent"));}
function ATW(a,b,c){return a.H$(b,c);}
function AWb(a){return !!a.S5();}
function AXj(a,b){return a.J$($rt_str(b));}
function A3e(a,b,c,d){a.DL($rt_str(b),Fv(c,"handleEvent"),d?1:0);}
function AP5(a){return a.Ln();}
function AZF(a,b,c){return a.JJ($rt_str(b),$rt_str(c));}
function AYA(a){return $rt_ustr(a.Pa());}
function A6T(a){return a.Oz();}
function AUa(a){return a.OM();}
function AYy(a){return a.LB();}
function AUd(a,b,c){a.Gl($rt_str(b),Fv(c,"handleEvent"));}
function AZ3(a,b){return a.Nc(b);}
function ARb(a,b){a.Hy($rt_str(b));}
function A4J(a){return $rt_ustr(a.Oc());}
function Qp(){var a=this;B.call(a);a.zB=null;a.zC=null;a.zD=0;a.zE=null;a.zy=null;}
function AUP(a,b){var c,d,e,f,g;c=a.zB;d=a.zC;e=a.zD;f=a.zE;g=a.zy;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var ALr=G();
function AVB(b){return Math.exp(b);}
function AKj(b){return Math.log(b);}
function JW(b,c){return A2B(b,c);}
function A2B(b,c){return Math.pow(b,c);}
function D0(){return AXw();}
function AXw(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AWX(b,c){return Math.max(b,c);}
function XI(b){if(b<0)b= -b|0;return b;}
function ARh(b){return Math.abs(b);}
var ZJ=G(0);
var SS=G(0);
var AA8=G(0);
var Um=G(0);
var AFq=G(0);
var ADH=G(0);
var AKN=G();
function A3x(a,b,c){a.Gl($rt_str(b),Fv(c,"handleEvent"));}
function A17(a,b,c){a.FS($rt_str(b),Fv(c,"handleEvent"));}
function ARA(a,b,c,d){a.DL($rt_str(b),Fv(c,"handleEvent"),d?1:0);}
function AOV(a,b){return !!a.Gm(b);}
function A0k(a,b,c,d){a.Es($rt_str(b),Fv(c,"handleEvent"),d?1:0);}
var BU=G(Bt);
var AF3=G(Bt);
var IL=G(BJ);
var AK1=G();
function ALA(){return "ping";}
function AJQ(b){return b===ALA()?1:0;}
var AAF=G(0);
var Zk=G(0);
function AB5(){var a=this;B.call(a);a.u4=null;a.o$=null;a.rq=null;a.eS=null;a.wz=null;a.ye=null;a.qx=null;a.ig=null;a.l1=0;a.F1=0;a.AQ=null;a.hd=null;a.CN=null;}
function GH(a,b){var c;c=EL();b=$rt_ustr(b);c.title=b;}
function Ub(a){a.F1=$rt_globals.requestAnimationFrame(Bw(a.u4,"onAnimationFrame"));}
function J6(a){a.l1=1;}
function ACG(a,b,c){var d,e;a.qx.eP=BK(b,c);d=a.eS;e=b;d.width=e;d=a.eS;e=c;d.height=e;d=a.ig;Y(d.dt,b,c);e=d.bf;d=d.dt;b=d.a;c=d.b;e.viewport(0,0,b,c);a.hd.cr(a.ig.dt,L0(a));a.hd.bV();}
function ABi(a,b){var c,d,e;c=a.AQ;d=a.eS;if(BR(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.AQ=b;}
function Ny(a){return $rt_globals.performance.now()/1000.0;}
function L0(a){return $rt_globals.window.devicePixelRatio;}
function Gz(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGh(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AEY;d.C_=b;b=A$9;c.then(Bw(d,"f"),Bw(b,"f"));}}
function F4(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGh(b,null);else{c=new AFC;d=$rt_globals.window.showOpenFilePicker();e=new AFB;e.tF=b;d.then(Bw(e,"f"),Bw(c,"f"));}}
function CG(a,b,c,d){var e,f,g,h;e=a.CN;f=e.iX;if(f>0){g=e.p3.data;f=f-1|0;e.iX=f;UI(e,b,c,d,g[f]);}else{h=e.m5;e=new AEZ;e.vJ=b;e.B_=c;e.BC=d;b=new UJ;b.r8=e;c=h.m4;b.B4=c;if(c===null)h.pV=b;else c.vs=b;h.m4=b;h.ca=h.ca+1|0;h.lI=h.lI+1|0;}}
function SF(a,b,c){var d,e;if(!ME()){b=new Bt;Bn(b,C(40));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new ABH;e.uj=b;b=ANB(c);d.then(Bw(e,"f"),Bw(b,"f"));}}
function UK(a,b,c,d){var e,f,g;if(!ME()){b=new Bt;Bn(b,C(40));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=GS(b);A8B();b=A$$;g=f.data;g=b.decode(g);b=e.writeText(g);e=new AEk;e.wK=c;c=ANB(d);b.then(Bw(e,"f"),Bw(c,"f"));}}
function W0(a){return ME()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ANB(b){var c;c=new PJ;c.BL=b;return c;}
var BD=G(0);
var ALO=G();
var T=G(0);
var ALP=G();
var ABb=G(0);
function VG(){B.call(this);this.zo=null;}
function A1F(a,b){var c,d;c=b;b=a.zo;if(!(!b.hd.cM(c/1000.0)&&!b.l1)){d=b.ig.dt;if(Bb(d.a,d.b)){b.l1=0;b.hd.bV();}}Ub(b);}
function VE(){B.call(this);this.C9=null;}
function DJ(a){J6(a.C9);}
var AAu=G(0);
function VF(){B.call(this);this.A$=null;}
function AQk(a,b,c){var d,e,f,g;c=a.A$;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eS){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=L0(c);ACG(c,G8(f.width*g),G8(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ACG(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AJb=G();
function AYj(){return {box:'device-pixel-content-box'};}
function AU3(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CF=G(0);
function VD(){B.call(this);this.sk=null;}
function AUT(a,b){b=a.sk;b.hd.cr(b.ig.dt,L0(b));b.hd.bV();}
function ABN(){var a=this;B.call(a);a.m5=null;a.Cw=null;a.tm=null;a.p3=null;a.yk=0;a.iX=0;a.C5=null;}
function UI(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.yk+1|0;a.yk=f;g=a.tm;h=C5(f);g.kA=Pc(g,g.kA,h);h=ADK(g,h);XE(h,b);XE(h,b);g.m0=g.m0+1|0;b=a.Cw[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BC){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(E3(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E3(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E3(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof Ma)){if(!(c instanceof OP)){b=new BU;c=GT(BF(c));g=new J;L(g);H(H(g,C(41)),c);Bn(b,K(g));N(b);}c=c;e=j+1|0;g=c.iJ;j;h[j]=g;f=e+1|0;c=Qx(c.f6);e;h[e]=c;}else{c=c;g=c.iM;if(g===null){f=j+1|0;c=c.hJ;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=Qx(c.ix);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
var Wg=G(0);
function AXV(a,b){var c;c=a.cj();while(c.c0()){b.g(c.cl());}}
var HZ=G(0);
function My(a){var b,c;b=new ABL;c=new R6;c.zx=a;b.BY=c;return b;}
function A1W(a,b){var c,d;c=a.cj();d=0;while(c.c0()){if(b.bQ(c.cl())){c.p5();d=1;}}return d;}
var FS=G();
function EU(a){return a.dc()?0:1;}
function GM(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=UV(FU(BF(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B9(a);while(Cb(f)){g=b.data;h=e+1|0;g[e]=Cc(f);e=h;}return b;}
function A4X(a,b){var c;c=a.cj();while(c.c0()){if(BR(c.cl(),b)){c.p5();return 1;}}return 0;}
function GW(a,b){var c,d;c=0;d=b.cj();while(d.c0()){if(!a.qp(d.cl()))continue;c=1;}return c;}
var Oj=G(0);
var Nl=G(0);
function EF(){FS.call(this);this.ca=0;}
function AU8(a,b){a.o9(a.dc(),b);return 1;}
function B9(a){var b;b=new Yx;b.jR=a;b.qU=a.ca;b.l$=a.dc();b.ij=(-1);return b;}
function AUs(a,b,c){var d,e;if(b>=0&&b<=a.dc()){if(c.e6())return 0;d=c.cj();while(d.c0()){e=b+1|0;a.o9(b,d.cl());b=e;}return 1;}c=new BU;X(c);N(c);}
function A5F(a,b,c){c=new DV;X(c);N(c);}
function A36(a,b){var c;c=new DV;X(c);N(c);}
function LL(a,b){var c,d;c=a.dc();d=0;while(true){if(d>=c)return (-1);if(BR(b,a.jc(d)))break;d=d+1|0;}return d;}
function ATF(a,b){var c,d;if(!E3(b,Nl))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BR(BI(a,d),BI(c,d)))return 0;d=d+1|0;}return 1;}
var MV=G(EF);
var Pz=G(0);
var AFM=G(0);
function US(){var a=this;MV.call(a);a.pV=null;a.m4=null;a.lI=0;}
var L$=G(0);
function Es(){var a=this;B.call(a);a.pI=null;a.pP=null;}
var Ej=G(0);
var WZ=G(0);
var P0=G(0);
function Zz(){var a=this;Es.call(a);a.kA=null;a.mX=null;a.E6=null;a.m0=0;}
function AJh(a,b){var c;c=ADK(a,b);if(c===null)return null;a.kA=LG(a,a.kA,b);a.m0=a.m0+1|0;return c.kY;}
function ADK(a,b){var c,d;c=a.kA;while(true){if(c===null)return null;d=NA(a.mX,b,c.my);if(!d)break;c=d>=0?c.ce:c.b4;}return c;}
function Pc(a,b,c){var d,e;if(b===null){b=new Li;d=null;b.my=c;b.kY=d;b.hi=1;b.hq=1;return b;}e=NA(a.mX,c,b.my);if(!e)return b;if(e>=0)b.ce=Pc(a,b.ce,c);else b.b4=Pc(a,b.b4,c);Ff(b);return NJ(b);}
function LG(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=NA(a.mX,c,b.my);if(d<0)b.b4=LG(a,b.b4,c);else if(d>0)b.ce=LG(a,b.ce,c);else{e=b.ce;if(e===null)return b.b4;f=b.b4;g=P(Li,e.hi).data;h=0;while(true){b=e.b4;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.ce;while(h>0){h=h+(-1)|0;j=g[h];j.b4=b;Ff(j);b=NJ(j);}e.ce=b;e.b4=f;Ff(e);b=e;}Ff(b);return NJ(b);}
function ABP(){B.call(this);this.Bo=null;}
function ABQ(){var a=this;B.call(a);a.At=null;a.As=0;}
function AYb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.At;d=a.As;AJQ(b.data);e=c.m5;f=e.pV;if(f===null)g=null;else{g=f.vs;e.pV=g;if(g!==null)g.B4=null;else e.m4=null;e.lI=e.lI-1|0;e.ca=e.ca+1|0;g=f.r8;}if(g!==null)UI(c,g.vJ,g.B_,g.BC,d);else{h=c.p3.data;i=c.iX;c.iX=i+1|0;h[i]=d;}c=c.C5;b=b.data;if(!AJQ(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;X(b);N(b);}if(b.length<1){b=new BU;AIv(b);N(b);}e=C5(b[0]);f=AJh(c.Bo,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=FZ(GN(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A73(GN(e));else if(e instanceof $rt_globals.File?1:0)k[i]=ANW(GN(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ABU(GN(b[m]));k[i]=AIM(GN(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=GN(b[m]);k[i]=A8_(GN(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=CT(h,i);f.g(h);}}
function AGZ(){var a=this;B.call(a);a.cL=null;a.j8=null;a.Gc=null;a.eP=null;}
function A9n(a,b){var c=new AGZ();A5A(c,a,b);return c;}
function A5A(a,b,c){var d,e,f,g;a.eP=null;a.j8=b;d=new Z8;d.bE=CW(P(Cj,0));d.pb=CW(P(Cj,0));d.b2=CW(P(CJ,0));d.fS=CW(P(EZ,0));d.cI=CW(P(CS,0));d.hl=CW(P(FQ,0));d.hM=CW(P(Gf,0));d.mV=CW(P(T,0));d.nu=CW(P(T,0));d.dS=c;a.cL=d;e=$rt_globals.window;f=P(Dt,14);g=f.data;d=new AEE;d.rK=a;g[0]=C$(a,b,C(42),d);d=new AEF;d.Bz=a;g[1]=C$(a,b,C(43),d);d=new AEG;d.za=a;g[2]=C$(a,b,C(44),d);d=new AEH;d.xl=a;g[3]=C$(a,b,C(45),d);d=new AEI;d.uU=a;g[4]=C$(a,b,C(46),d);d=new AEJ;d.r4=a;g[5]=C$(a,b,C(47),d);d=new AEK;d.Dj=a;g[6]
=C$(a,b,C(48),d);d=new AEL;d.Ba=a;g[7]=C$(a,b,C(49),d);d=new AEM;d.yN=a;g[8]=C$(a,b,C(50),d);d=new AEN;d.wN=a;g[9]=C$(a,b,C(51),d);d=new Xd;d.wk=a;g[10]=C$(a,b,C(52),d);d=new Xe;d.vz=a;e.addEventListener("paste",Bw(d,"handleEvent"),!!1);g[11]=WK(a,e,C(53),d);d=new Xf;d.x3=a;g[12]=C$(a,e,C(54),d);d=new Xg;d.CT=a;g[13]=C$(a,e,C(55),d);c=new Sf;c.D7=f;a.Gc=c;e=new AFI;e.zO=b;b.onpointerdown=Bw(e,"f");e=new AFJ;e.yZ=b;b.onpointerup=Bw(e,"f");}
function X1(){return (EL()).activeElement;}
function C$(a,b,c,d){b.addEventListener($rt_ustr(c),Bw(d,"handleEvent"));return WK(a,b,c,d);}
function WK(a,b,c,d){var e;e=new AAr;e.FG=b;e.FI=c;e.FH=d;return e;}
function AC7(a,b){var c;c=new ADM;c.xk=b;return c;}
function Fp(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.j8.getBoundingClientRect();e=BK(G8((b.clientX-d.left)*c),G8((b.clientY-d.top)*c));f=AL0(a.eP);d=new Pv;ADv(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k=e;d.Fv=f;return d;}
function Xj(a,b,c){var d,e,f,g;d=new Re;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ADv(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.pt=0;d.eE=e;d.bc=f;d.km=c;d.Bf=g;return d;}
function El(a,b){b.stopPropagation();b.preventDefault();}
function OA(){var a=this;B.call(a);a.qf=null;a.cu=null;a.bf=null;a.mA=0;a.B3=null;a.FR=0;a.EQ=0;a.lC=null;a.lr=null;a.E3=null;a.Gs=null;a.v0=null;a.yn=null;a.jm=null;a.iH=null;a.ku=null;a.E$=null;a.sT=null;a.dt=null;a.CY=null;a.qt=0;a.nd=0;a.oT=0;a.oI=0;a.lV=0;a.oO=null;a.oZ=0.0;a.qA=0.0;}
function AMU(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dt=new Bh;a.qt=0;a.oO=new AES;a.qf=c;a.mA=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(56)),g);$rt_globals.console.info($rt_ustr(K(h)));a.bf=b;a.cu=Lg(c,4,4,1);i=ANU(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B6(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new R9;H1();c=A$_;m.fi=b;m.iw=c;m.u$=j.length/c.nO|0;m.CU
=l.length;n=b.createBuffer();m.yb=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.xn=null;n=b.createBuffer();m.wR=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sT=m;a.EQ=Ob(g,C(57));c=new AAs;c.es=b;a.B3=c;a.oZ=e;a.qA=f;d=b.getParameter(3379);a.FR=d;c=new J;L(c);V(H(c,C(58)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dl,9);i=k.data;c=A78(b);a.lC=c;i[0]=c;c=A80(b,C(59));a.lr=c;i[1]=c;c=new AAT;IC(c,b,
C(60),C(61),A$_);a.E3=c;i[2]=c;c=A9P(b);a.Gs=c;i[3]=c;c=new Qw;W7(c,b,C(62),C(63));a.v0=c;i[4]=c;c=A92(b);a.yn=c;i[5]=c;c=A8F(b);a.jm=c;i[6]=c;c=A9K(b);a.iH=c;i[7]=c;c=A9L(b);a.ku=c;i[8]=c;a.E$=k;AFu(b,C(64));}
function IV(a,b,c){return GZ(a,b,c,400,0);}
function Ia(a,b,c){return Lg(a.qf,b,c,0);}
function Eh(a,b,c,d){return Lg(a.qf,b,c,d);}
function AE9(a,b,c,d,e,f){var g,h;Cr(a.cu,c);g=Eh(a,LR(a.cu,b)+(d*2|0)|0,e,f);Cr(g,c);B1(g,b,d,Mn(c,e));h=C4(a);CU(h,g);EP(g);return h;}
function EY(a,b){var c,d,e,f,g;c=a.bf;d=b.bs;e=b.bw;f=b.bj;g=b.bG;c.clearColor(d,e,f,g);a.bf.clear(16384);}
function Ca(a,b){var c;if(b==a.nd)return b;if(!b)a.bf.disable(3042);else{a.bf.enable(3042);a.bf.blendFuncSeparate(770,771,1,1);}c=a.nd;a.nd=b;return c;}
function Of(a,b,c){Mw(a,b.a,b.b,c);}
function Mw(a,b,c,d){var e,f;e=d.a;f=d.b;a.oI=1;a.lV=1;d=a.oO;d.uK=b;d.uL=c;d.uJ=e;d.uI=f;ADx(a);}
function Gx(a){a.oI=0;a.lV=0;ADx(a);}
function ADx(a){var b,c,d,e,f,g;b=a.oT;c=a.oI;if(b!=c){a.oT=c;if(!c)a.bf.disable(3089);else a.bf.enable(3089);}if(a.oT&&a.lV){a.lV=0;d=a.bf;e=a.oO;b=e.uK;c=a.dt.b-e.uL|0;f=e.uI;c=c-f|0;g=e.uJ;d.scissor(b,c,g,f);}}
function Gm(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sT;c=a.qt;d=b.iw.BI;e=b.fi;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.fi;h=b.yb;e.bindBuffer(34962,h);i=b.iw.q5.data;g=i.length;j=0;while(j<g){k=i[j];l=b.fi;m=k.kb;n=k.g3;o=b.iw.nO*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.g3|0;j=j+1|0;}a:{e=b.xn;if(e!==null){c=0;b.fi.bindBuffer(34962,e);i=b.iw.AN.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.fi;j=e.kb;p=e.g3;m=e.s1;n=b.iw.zM;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.g3|0;g=g+1|0;}}}q=b.wR;if(q===null){c=b.u$;if(c>0)b.fi.drawArrays(4,0,c);}else{b.fi.bindBuffer(34963,q);k=b.fi;g=b.CU;k.drawElements(4,g,5123,0);}a.qt=d;}
function Bv(a,b,c,d,e){GV(a,a.lC);G7(a.lC,a.bf,b,c,d,a.dt);d=a.lC;FW(a.bf,d.CA,e);Gm(a);}
function AF5(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;GV(a,a.iH);G7(a.iH,a.bf,b,c,d,a.dt);j=a.iH;d=a.bf;k=j.xO;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.xN;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.iH;FW(a.bf,d.yA,i);Gm(a);}
function MP(a,b,c,d,e,f,g,h){var i,j;GV(a,a.ku);G7(a.ku,a.bf,b,c,d,a.dt);d=a.ku;i=a.bf;j=d.u7;i.uniform2f(j,e,f);FW(i,d.zr,g);d=a.ku;FW(a.bf,d.yd,h);Gm(a);}
function DQ(a,b,c,d,e,f,g,h,i){var j;j=!i?a.v0:a.yn;GV(a,j);ANi(j,a.bf,!i?a.qA:a.oZ);G7(j,a.bf,b,c,d,a.dt);OF(j,a.bf,f);AF$(j,a.bf,f,e);AL$(j,a.bf,g,h);Gm(a);}
function C4(a){var b,c;b=new I0;c=a.B3;b.fg=new Bh;b.e9=c;b.gy=c.es.createTexture();A_a=A_a+1|0;return b;}
function NC(a,b){AFu(a.bf,b);}
function GV(a,b){var c,d;if(b!==a.CY){c=a.bf;d=b.bP;c.useProgram(d);a.CY=b;}}
function Vv(){var a=this;OA.call(a);a.ED=null;a.E4=null;}
function GZ(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cu;g=AKV(b,c,d,e);Lc(f,g);h=f.dB.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EA(f,C(65));m=EA(f,C(66));h=new Mb;n=g;h.oX=b;h.pF=c;h.D2=d;h.Eg=e;h.eM=i;h.e7=j;h.DT=l;h.qM=k;h.ry=n;h.us=C6(i);h.EX=C6(h.e7);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.DY=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(67);}h.DP=b;return h;}
function CA(){B.call(this);this.D=null;}
function Ey(a,b){a.D=b;}
function A6U(a,b){return 0;}
function Z8(){var a=this;B.call(a);a.bE=null;a.pb=null;a.b2=null;a.fS=null;a.cI=null;a.hl=null;a.hM=null;a.mV=null;a.nu=null;a.dS=null;a.fw=null;a.yT=0;}
function UF(a,b){var c,d,e,f;DJ(a.dS);c=(B5(!b.km?a.pb:a.bE)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bl(b);if(f)break;if(b.pt)break;e=e+1|0;}return f;}
function SC(a,b,c){var d,e,f;DJ(a.dS);d=(B5(a.hl)).data;e=d.length;f=0;while(f<e){if(d[f].fB(b,c))return 1;f=f+1|0;}return 0;}
function AEE(){B.call(this);this.rK=null;}
function A3N(a,b){var c;c=a.rK;if(UF(c.cL,Xj(c,b,1)))El(c,b);}
function AEF(){B.call(this);this.Bz=null;}
function A30(a,b){var c;c=a.Bz;if(UF(c.cL,Xj(c,b,0)))El(c,b);}
function AEG(){B.call(this);this.za=null;}
function ATq(a,b){var c,d,e,f,g,h,i;c=a.za;if(c.eP!==null){a:{b:{d=Fp(c,b);e=c.cL;DJ(e.dS);f=e.fw;if(f!==null)f.g(d);else{g=(B5(e.b2)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].b3(d))break a;i=i+1|0;}}}}El(c,b);}}
function AEH(){B.call(this);this.xl=null;}
function A2p(a,b){var c,d,e,f,g,h;c=a.xl;b.button;if(c.eP!==null)a:{d=Fp(c,b);c=c.cL;e=b.button;DJ(c.dS);if(c.fw===null){f=(B5(c.b2)).data;g=f.length;h=0;while(h<g){b=f[h].cE(d,e);if(b!==null){c.fw=b;c.yT=e;break a;}h=h+1|0;}}}}
function AEI(){B.call(this);this.uU=null;}
function A2E(a,b){var c,d,e,f,g,h,i;c=a.uU;b.button;if(c.eP!==null){d=Fp(c,b);e=c.cL;f=b.button;DJ(e.dS);if(f==e.yT&&e.fw!==null)e.fw=null;g=(B5(e.b2)).data;h=g.length;i=0;a:{while(i<h){if(g[i].d1(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)El(c,b);}}
function AEJ(){B.call(this);this.r4=null;}
function AUZ(a,b){var c,d,e,f,g,h,i,j,k;c=a.r4;if(c.eP!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cL;f=Fp(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DJ(e.dS);i=(B5(e.fS)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dZ(f,d,h))break b;k=k+1|0;}}El(c,b);}}
function AEK(){B.call(this);this.Dj=null;}
function ARz(a,b){var c,d,e,f,g,h,i,j;c=a.Dj;if(c.eP!==null){d=Fp(c,b);e=c.cL;f=b.button;g=b.detail;DJ(e.dS);h=(B5(e.b2)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cW(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)El(c,b);}}
function AEL(){B.call(this);this.Ba=null;}
function A7n(a,b){var c,d,e,f,g,h,i;c=a.Ba;if(c.eP!==null){d=Fp(c,b);e=c.cL;DJ(e.dS);f=(B5(e.cI)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bQ(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)El(c,b);}}
function AEM(){B.call(this);this.yN=null;}
function AQZ(a,b){var c,d,e,f,g,h;b=a.yN.cL;if(b.fw!==null){c=D4();d=BT(b.fw);e=new J;L(e);H(H(e,C(68)),d);Bf(c,K(e));}f=(B5(b.nu)).data;g=f.length;h=0;while(h<g){f[h].e();h=h+1|0;}DJ(b.dS);}
function AEN(){B.call(this);this.wN=null;}
function AVJ(a,b){var c,d,e;b=a.wN.cL;c=(B5(b.mV)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.fw!==null)b.fw=null;DJ(b.dS);}
function Xd(){B.call(this);this.wk=null;}
function A6V(a,b){var c;c=a.wk;if(c.eP!==null)Fp(c,b);}
function Xe(){B.call(this);this.vz=null;}
function AS4(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vz;if(X1()===c.j8){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B5(c.cL.hM)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cb();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cL.dS;m=new Qi;m.wX=k;m.wY=l;g.getAsString(Bw(m,"accept"));El(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(69)),k),C(70)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function Xf(){B.call(this);this.x3=null;}
function ATu(a,b){var c;c=a.x3;if(X1()===c.j8&&SC(c.cL,AC7(c,b),0))El(c,b);}
function Xg(){B.call(this);this.CT=null;}
function A39(a,b){var c;c=a.CT;if(X1()===c.j8&&SC(c.cL,AC7(c,b),1))El(c,b);}
var ADp=G(0);
var ADz=G();
function Lg(a,b,c,d){var e,f,g,h,i;e=new ABj;e.jQ=d;A$T=A$T+1|0;e.oB=b;e.n2=c;f=(EL()).createElement("canvas");e.jG=f;g=b;f.width=g;h=e.jG;f=c;h.height=f;if(!d)g=e.jG.getContext("2d");else{i=e.jG;h=AY5();g=i.getContext("2d",h);}e.dB=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ADy=G();
function ASg(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Px(){var a=this;B.call(a);a.U=null;a.o=null;a.bL=null;}
var K_=G();
var A$D=null;function NA(a,b,c){return b.m1(c);}
function AHO(){A$D=new K_;}
function AJo(){var a=this;B.call(a);a.dr=null;a.gJ=null;a.cV=0;}
function CW(a){var b=new AJo();ARu(b,a);return b;}
function ARu(a,b){a.dr=b;}
function FG(a,b){return a.dr.data[b];}
function Z(a,b){var c,d,e;c=a.cV;d=a.dr;if(c==d.data.length)a.dr=CT(d,c+4|0);d=a.dr.data;e=a.cV;a.cV=e+1|0;d[e]=b;a.gJ=null;}
function Tk(a,b){var c,d,e,f;c=0;while(true){d=a.dr.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cV=a.cV-1|0;a.gJ=null;}c=c+1|0;}}
function B5(a){var b;b=a.gJ;if(!(b!==null&&b.data.length==a.cV))a.gJ=CT(a.dr,a.cV);return a.gJ;}
var Cj=G(0);
var CJ=G(0);
function A11(a,b){return 0;}
function AWy(a,b,c){return null;}
function AOm(a,b,c){return 0;}
function A4l(a,b,c,d){return 0;}
var EZ=G(0);
var DR=G(0);
var CS=G(0);
var FQ=G(0);
var CO=G(0);
var Gf=G(0);
function Sf(){B.call(this);this.D7=null;}
function Bh(){var a=this;B.call(a);a.a=0;a.b=0;}
function BK(a,b){var c=new Bh();RF(c,a,b);return c;}
function AL0(a){var b=new Bh();AP4(b,a);return b;}
function RF(a,b,c){a.a=b;a.b=c;}
function AP4(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function Y(a,b,c){a.a=b;a.b=c;}
function AJY(a){var b,c,d;b=a.a;c=a.b;d=new J;L(d);V(H(V(H(d,C(71)),b),C(72)),c);return K(d);}
function AR8(a,b){var c;a:{b:{if(a!==b){if(BF(b)!==BF(a))break b;if(!Kw(a,b))break b;}c=1;break a;}c=0;}return c;}
function Kw(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AES(){var a=this;B.call(a);a.uK=0;a.uL=0;a.uJ=0;a.uI=0;}
var AIT=G();
var AKA=G(0);
function AAs(){B.call(this);this.es=null;}
function OO(){var a=this;B.call(a);a.bP=null;a.Gv=null;}
function AMc(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(73):C(74);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bf(Bk(),g);Bf(D4(),C(75));Bf(D4(),d);Bf(D4(),C(75));b=new Bt;Bn(b,g);N(b);}
function Dl(){var a=this;OO.call(a);a.yM=null;a.ts=null;a.ox=null;}
function A_b(a,b,c,d){var e=new Dl();IC(e,a,b,c,d);return e;}
function IC(a,b,c,d,e){var f,g,h,i,j,k;a.Gv=e;f=AMc(b,35633,c);d=AMc(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bP=g;h=e.vk.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bP;k=c.kb;c=c.tC;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bP;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AFu(b,C(76));a.ox=new Bh;c=a.bP;a.yM=b.getUniformLocation(c,"uResolution");c=a.bP;a.ts=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new J;L(c);H(H(c,C(77)),d);Bn(b,K(c));N(b);}
function AG8(a,b,c){var d,e,f;if(!Kw(a.ox,c)){Ct(a.ox,c);d=a.yM;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function G7(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.ts;b.uniform4f(e,i,l,h,j);AG8(a,b,f);}
function AMZ(){Dl.call(this);this.CA=null;}
function A78(a){var b=new AMZ();A1M(b,a);return b;}
function A1M(a,b){var c;H1();IC(a,b,C(60),C(78),A$_);c=a.bP;a.CA=b.getUniformLocation(c,"uColor");}
function FJ(){Dl.call(this);this.uP=null;}
function A80(a,b){var c=new FJ();AC9(c,a,b);return c;}
function A_c(a,b,c){var d=new FJ();ADb(d,a,b,c);return d;}
function AC9(a,b,c){ADb(a,b,C(60),c);}
function ADb(a,b,c,d){H1();IC(a,b,c,d,A$_);c=a.bP;a.uP=b.getUniformLocation(c,"sDiffuse");}
function OF(a,b,c){var d;d=a.uP;b.uniform1i(d,0);b.activeTexture(33984);c=c.gy;b.bindTexture(3553,c);}
var AAT=G(Dl);
function AHJ(){FJ.call(this);this.DI=null;}
function A9P(a){var b=new AHJ();AUt(b,a);return b;}
function AUt(a,b){var c;AC9(a,b,C(79));c=a.bP;a.DI=b.getUniformLocation(c,"uContrast");}
function HT(){var a=this;FJ.call(a);a.sI=null;a.tL=null;a.u5=null;a.BU=null;a.rf=0.0;}
function A_d(a,b,c){var d=new HT();W7(d,a,b,c);return d;}
function W7(a,b,c,d){ADb(a,b,c,d);c=a.bP;a.sI=b.getUniformLocation(c,"uTexTransform");c=a.bP;a.tL=b.getUniformLocation(c,"uColor");c=a.bP;a.u5=b.getUniformLocation(c,"uBgColor");c=a.bP;a.BU=b.getUniformLocation(c,"uTextPow");}
function ANi(a,b,c){var d;if(a.rf!==c){a.rf=c;d=a.BU;b.uniform2f(d,c,0.0);}}
function AL$(a,b,c,d){FW(b,a.tL,c);FW(b,a.u5,d);}
function AF$(a,b,c,d){var e,f,g,h,i,j;c=c.fg;e=c.a;f=c.b;g=d.bs;h=e;g=g/h;i=d.bw;j=f;i=i/j;h=d.bj/h;j=d.bG/j;c=a.sI;b.uniform4f(c,g,i,h,j);}
var Qw=G(HT);
var AJF=G(HT);
function A92(a){var b=new AJF();A0t(b,a);return b;}
function A0t(a,b){W7(a,b,C(62),C(80));}
function AKO(){var a=this;FJ.call(a);a.xo=null;a.xm=null;a.tM=null;}
function A8F(a){var b=new AKO();AQu(b,a);return b;}
function AQu(a,b){var c,d;AC9(a,b,C(81));c=a.bP;a.xo=b.getUniformLocation(c,"uColorB");d=a.bP;a.xm=b.getUniformLocation(d,"uColorF");d=a.bP;a.tM=b.getUniformLocation(d,"uContrast");}
function AMo(){var a=this;Dl.call(a);a.yA=null;a.xO=null;a.xN=null;}
function A9K(a){var b=new AMo();A0x(b,a);return b;}
function A0x(a,b){var c;H1();IC(a,b,C(60),C(82),A$_);c=a.bP;a.yA=b.getUniformLocation(c,"uColor");c=a.bP;a.xO=b.getUniformLocation(c,"uPoints1");c=a.bP;a.xN=b.getUniformLocation(c,"uPoints2");}
function AGC(){var a=this;Dl.call(a);a.yd=null;a.u7=null;a.zr=null;}
function A9L(a){var b=new AGC();AZi(b,a);return b;}
function AZi(a,b){var c;H1();IC(a,b,C(60),C(83),A$_);c=a.bP;a.yd=b.getUniformLocation(c,"uColor");c=a.bP;a.u7=b.getUniformLocation(c,"uBaseline");c=a.bP;a.zr=b.getUniformLocation(c,"uScaleHExp");}
var ABv=G(0);
var ANC=G(0);
function FW(b,c,d){var e,f,g,h;e=d.bs;f=d.bw;g=d.bj;h=d.bG;b.uniform4f(c,e,f,g,h);}
function AFu(b,c){var d,e;d=b.getError();if(d){b=Bk();e=new J;L(e);V(H(e,c),d);Bf(b,K(e));}}
function AAr(){var a=this;B.call(a);a.FG=null;a.FI=null;a.FH=null;}
function R9(){var a=this;B.call(a);a.fi=null;a.iw=null;a.yb=null;a.xn=null;a.wR=null;a.u$=0;a.CU=0;}
function CE(){var a=this;B.call(a);a.FE=null;a.fx=0;}
function Du(a,b,c){a.FE=b;a.fx=c;}
function Hz(){var a=this;CE.call(a);a.vk=null;a.q5=null;a.AN=null;a.nO=0;a.zM=0;a.BI=0;}
var A$_=null;var A_e=null;function H1(){H1=Bm(Hz);ARU();}
function AOe(){H1();return A_e.ef();}
function ARU(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hz;c=P(Eu,2);d=c.data;ANj();d[0]=A_f;d[1]=A_g;H1();Du(b,C(84),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.qK.fx){case 0:f=f+l.g3|0;h=h+1|0;break a;case 1:e=e+l.g3|0;g=g+1|0;break a;default:}}i=i|1<<l.kb;k=k+1|0;}b.vk=c;b.nO=e;b.zM=f;b.BI=i;c=P(Eu,g);m=c.data;b.q5=c;c=P(Eu,h);n=c.data;b.AN=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.qK.fx){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A$_
=b;c=P(Hz,1);c.data[0]=b;A_e=c;}
var M5=G(0);
var Ue=G(0);
var ADF=G(0);
var Hk=G();
function Nw(){Hk.call(this);this.Dy=null;}
function AHo(){var a=this;Nw.call(a);a.EN=0;a.nY=0;a.ma=null;a.nz=null;a.vV=null;}
function ATD(a,b){var c=new AHo();A5U(c,a,b);return c;}
function A5U(a,b,c){a.Dy=b;b=new J;L(b);a.ma=b;a.nz=B6(32);a.EN=c;AHh();a.vV=A_h;}
function ACQ(a,b,c,d){var e,$$je;e=a.Dy;if(e===null)a.nY=1;if(!(a.nY?0:1))return;a:{try{e.ns(b,c,d);break a;}catch($$e){$$je=Fc($$e);if($$je instanceof JG){}else{throw $$e;}}a.nY=1;}}
function Y1(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ALM(b,c,d-c|0);e=DT(Bd(16,Be(e.length,1024)));g=ALy(e,0,e.data.length);h=a.vV;i=new Ry;b=DT(1);j=b.data;j[0]=63;HM();k=A_i;i.oA=k;i.n3=k;c=j.length;if(c&&c>=i.xM){i.FD=h;i.tA=b.ef();i.EJ=2.0;i.xM=4.0;i.zw=B6(512);i.r2=DT(512);k=A_j;if(k===null){i=new BU;Bn(i,C(85));N(i);}i.oA=k;i.n3=k;a:while(true){if(i.l4==3){f=new CV;X(f);N(f);}i.l4=2;b:{while(true){try{k=AGv(i,f,g);}catch($$e){$$je=Fc($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Jz(k))
{d=Cl(f);if(d<=0)break b;k=EK(d);}else if(IJ(k))break;h=!MW(k)?i.oA:i.n3;c:{if(h!==A_j){if(h===A_k)break c;else break b;}d=Cl(g);b=i.tA;l=b.data.length;if(d<l){k=A_l;break b;}AE7(g,b,0,l);}FN(f,f.bg+LH(k)|0);}}l=IJ(k);ACQ(a,e,0,g.bg);QG(g);if(!l){while(true){d=i.l4;if(d!=2&&d!=4){f=new CV;X(f);N(f);}f=A_m;if(f===f)i.l4=3;l=IJ(f);ACQ(a,e,0,g.bg);QG(g);if(!l)break;}return;}}N(AZ0(f));}i=new BU;Bn(i,C(86));N(i);}
function Bf(a,b){var c,d,e,f,g,h,i,j;Br(BM(a.ma,b),10);b=a.ma;c=b.J;d=a.nz;if(c>d.data.length)d=B6(c);e=0;f=0;if(e>c){b=new BJ;Bn(b,C(87));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.E.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Y1(a,d,0,c);a.ma.J=0;}
function H7(){Hk.call(this);this.Gg=null;}
function Xr(a){a.Gg=DT(1);}
var Mk=G(H7);
var A$W=null;function AR_(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AIA(){var b;b=new Mk;Xr(b);A$W=b;}
function Eu(){var a=this;CE.call(a);a.tC=null;a.qK=null;a.g3=0;a.s1=0;a.kb=0;}
var A_f=null;var A_g=null;var A_n=null;function ANj(){ANj=Bm(Eu);A1c();}
function A8g(a,b,c,d,e,f,g){var h=new Eu();Wc(h,a,b,c,d,e,f,g);return h;}
function ANT(){ANj();return A_n.ef();}
function Wc(a,b,c,d,e,f,g,h){ANj();Du(a,b,c);a.tC=d;a.qK=e;a.g3=f;a.s1=g;a.kb=h;}
function A1c(){var b;b=new Eu;AH4();Wc(b,C(88),0,C(89),A_o,2,0,0);A_f=b;b=A8g(C(90),1,C(91),A_o,2,0,1);A_g=b;A_n=I(Eu,[A_f,b]);}
function No(){var a=this;B.call(a);a.Fu=null;a.FU=null;}
function AIJ(b){var c,d;if(GR(b))N(ALa(b));if(!AMG(Q(b,0)))N(ALa(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AMG(d))break a;else N(ALa(b));}}c=c+1|0;}}
function AMG(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var M8=G(No);
var A_h=null;function AHh(){AHh=Bm(M8);AQt();}
function AIV(a){var b,c;b=new Uk;b.g2=C(92);HM();c=A_i;b.jW=c;b.oG=c;b.FP=a;b.xS=0.3333333432674408;b.Ei=0.5;b.yF=DT(512);b.Bx=B6(512);return b;}
function AQt(){var b,c,d,e,f;b=new M8;AHh();c=P(BC,0);d=c.data;AIJ(C(93));e=d.length;f=0;while(f<e){AIJ(d[f]);f=f+1|0;}b.Fu=C(93);b.FU=c.ef();A_h=b;}
function ZD(){var a=this;B.call(a);a.gU=null;a.qZ=null;a.ne=null;a.BN=null;a.td=null;a.tx=null;}
function ALd(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gU,b,c));}
function PQ(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.qZ[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gU,b,d));f=e.data;Fu();d=f.length;AHh();g=A_h;h=ALy(e,0,d);a:{try{i=AIV(g);HM();g=AKH(AIc(ANc(i,A_j),A_j),h);break a;}catch($$e){$$je=Fc($$e);if($$je instanceof GD){g=$$je;}else{throw $$e;}}h=new AFe;h.le=1;h.lz=1;h.jl=C(94);h.n4=g;N(h);}if(!g.bg&&g.eK==g.o0)c.cp=g.i4;else{f=B6(Cl(g));e=f.data;c.cp=f;Qc(g,f,0,e.length);}return c;}
function X3(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.ne[e]){e=e+1|0;}d=e-d|0;J3(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gU,b,d)));return c;}
var Ix=G(CE);
var A_p=null;var A_o=null;var A_q=null;function AH4(){AH4=Bm(Ix);A0c();}
function AQo(a,b){var c=new Ix();AMQ(c,a,b);return c;}
function ASM(){AH4();return A_q.ef();}
function AMQ(a,b,c){AH4();Du(a,b,c);}
function A0c(){var b;A_p=AQo(C(95),0);b=AQo(C(96),1);A_o=b;A_q=I(Ix,[A_p,b]);}
var Ol=G(H7);
var A$X=null;function AQD(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AJW(){var b;b=new Ol;Xr(b);A$X=b;}
function AIP(){BU.call(this);this.DO=null;}
function ALa(a){var b=new AIP();AV4(b,a);return b;}
function AV4(a,b){X(a);a.DO=b;}
var VH=G(EM);
var M7=G(0);
function AFI(){B.call(this);this.zO=null;}
function AVr(a,b){a.zO.setPointerCapture(b.pointerId);}
function AFJ(){B.call(this);this.yZ=null;}
function AO8(a,b){a.yZ.releasePointerCapture(b.pointerId);}
function IH(){var a=this;B.call(a);a.o0=0;a.bg=0;a.eK=0;a.kh=0;}
function AEq(a,b){a.kh=(-1);a.o0=b;a.eK=b;}
function FN(a,b){var c,d,e;if(b>=0&&b<=a.eK){a.bg=b;if(b<a.kh)a.kh=0;return a;}c=new BU;d=a.eK;e=new J;L(e);Br(V(H(V(H(e,C(97)),b),C(98)),d),93);Bn(c,K(e));N(c);}
function Cl(a){return a.eK-a.bg|0;}
function Em(a){return a.bg>=a.eK?0:1;}
var ABJ=G(0);
var Mc=G(IH);
function AJI(b){var c,d;if(b>=0)return AUG(0,b,B6(b),0,b,0);c=new BU;d=new J;L(d);V(H(d,C(99)),b);Bn(c,K(d));N(c);}
function ALM(b,c,d){return AUG(0,b.data.length,b,c,c+d|0,0);}
function Qc(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BJ;i=new J;L(i);V(H(V(H(i,C(100)),g),C(101)),f);Bn(h,K(i));N(h);}if(Cl(a)<d){j=new OW;X(j);N(j);}if(d<0){j=new BJ;k=new J;L(k);H(V(H(k,C(102)),d),C(103));Bn(j,K(k));N(j);}g=a.bg;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.i4.data[m+a.qN|0];l=l+1|0;c=n;m=o;}a.bg=g+d|0;return a;}}b=b.data;j=new BJ;d=b.length;k=new J;L(k);Br(V(H(V(H(k,C(104)),c),C(98)),d),41);Bn(j,K(k));N(j);}
function N0(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.q0){b=new K3;X(b);N(b);}e=d-c|0;if(Cl(a)<e){b=new Ki;X(b);N(b);}if(c>M(b)){f=new BJ;d=M(b);b=new J;L(b);Br(V(H(V(H(b,C(105)),c),C(98)),d),41);Bn(f,K(b));N(f);}if(d>M(b)){f=new BJ;c=M(b);b=new J;L(b);V(H(V(H(b,C(106)),d),C(107)),c);Bn(f,K(b));N(f);}if(c>d){b=new BJ;f=new J;L(f);V(H(V(H(f,C(105)),c),C(108)),d);Bn(b,K(f));N(b);}g=a.bg;while(c<d){h=g+1|0;i=c+1|0;ABO(a,g,Q(b,c));g=h;c=i;}a.bg=a.bg+e|0;return a;}
function NP(){var a=this;IH.call(a);a.nX=0;a.qv=null;a.Ev=null;}
function ALy(b,c,d){var e,f,g;e=b.data;f=new AE6;g=e.length;d=c+d|0;AEq(f,g);A1P();f.Ev=A_r;f.nX=0;f.qv=b;f.bg=c;f.eK=d;f.Ez=0;f.ya=0;return f;}
function AE7(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ya){e=new K3;X(e);N(e);}if(Cl(a)<d){e=new Ki;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BJ;j=new J;L(j);V(H(V(H(j,C(109)),h),C(101)),g);Bn(i,K(j));N(i);}if(d<0){e=new BJ;i=new J;L(i);H(V(H(i,C(102)),d),C(103));Bn(e,K(i));N(e);}h=a.bg;k=h+a.nX|0;l=0;while(l<d){b=a.qv.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bg=h+d|0;return a;}}b=b.data;e=new BJ;d=b.length;i=new J;L(i);Br(V(H(V(H(i,C(104)),c),C(98)),d),41);Bn(e,
K(i));N(e);}
function QG(a){a.bg=0;a.eK=a.o0;a.kh=(-1);return a;}
function Je(){B.call(this);this.Fa=null;}
var A_k=null;var A_j=null;var A_i=null;function HM(){HM=Bm(Je);AS9();}
function AJr(a){var b=new Je();AME(b,a);return b;}
function AME(a,b){HM();a.Fa=b;}
function AS9(){A_k=AJr(C(110));A_j=AJr(C(111));A_i=AJr(C(112));}
var P4=G(CA);
function ASY(a){}
function ARO(a,b,c){}
function Ie(){var a=this;CA.call(a);a.dh=null;a.r=null;}
function AEp(a,b){var c,d,e;Ey(a,b);a.dh=AKU(0,0,64);c=new UN;c.bX=new Bh;c.dz=CW(P(CP,0));c.dG=new Bh;c.qL=new Bh;c.m2=new B4;c.DA=new B4;d=b.U;c.bR=d;e=b.bL;c.b9=e;c.cX=d.mA;c.dg=St(e);d=b.o.nu;e=new AAn;e.uO=c;Z(d,e);d=b.o.mV;e=new AAm;e.xf=c;Z(d,e);Z(b.o.hl,c);Z(b.o.hM,c);a.r=c;Z(b.o.bE,new ABx);b=b.o.bE;c=a.r;BG(c);d=new ABw;d.yE=c;Z(b,d);}
function H0(a){EY(a.D.U,a.dh);}
function AHU(a,b,c){var d,e,f,g,h;a:{d=a.r;Ct(d.bX,b);e=d.cs;if(e!==c){d.cs=c;f=(B5(d.dz)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].e1(e,c);h=h+1|0;}}}}
function Cq(){Ie.call(this);this.w=null;}
function Gv(a,b){Hd(a,b,1);}
function Hd(a,b,c){var d,e,f;AEp(a,b);d=new AFj;e=a.r;d.bB=CW(P(UZ,0));d.G=e;a.w=d;Z(a.r.dz,d);Z(b.o.b2,a.w);d=b.o.fS;e=a.w;BG(e);f=new XD;f.w8=e;Z(d,f);d=b.o.cI;e=a.w;BG(e);f=new XC;f.ux=e;Z(d,f);if(c){b=b.o.b2;f=a.r.dg;d=new Yn;d.xK=f;Z(b,d);}}
function AQx(a){H0(a);Kp(a.w);}
function I$(a,b,c){var d,e;AHU(a,b,c);d=(B5(a.w.bB)).data.length;e=0;while(e<d){e=e+1|0;}}
function QQ(a,b){var c,d,e,f,g;c=a.w;d=0;e=(B5(c.bB)).data;f=e.length;g=0;while(g<f){d=e[g].ba.cM(b)|d;g=g+1|0;}return d;}
var Fs=G(0);
function AJx(a){a.ek(I_());}
function J0(a){a.ek(GB());}
function AKn(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Ju;c=new KM;d=new HO;AIW();Lw(d,A_s);M9(c,d,B0(A_t),B0(A_u),B0(A_v),B0(A_t),B0(A_w),B0(A_x),B0(A_y),B0(A_z),B0(A_A),B0(A_B));e=ALF(S(C(113)));f=(AMT()).data;g=f.length;h=P(K1,g);i=h.data;j=0;while(j<g){i[j]=f[j].p_;j=j+1|0;}k=AMr(S(C(114)),S(C(115)),S(C(116)),S(C(117)));l=new Jw;m=new JE;AYz();d=A_C;Pn(m,d,A_D,A_E,A_F,A_G,d);Mx(l,m,ANd(),AJA(S(C(118)),S(C(113)),Cs(0)),ANd(),AJZ(1,0.07500000298023224),A_H,A_I);Mm(b,c,e,h,k,l,AGb(S(C(119)),S(C(120)),S(C(121)),
S(C(122))));a.ek(b);}
var Ke=G(0);
var E1=G(0);
function Lu(){var a=this;Cq.call(a);a.I=null;a.N=null;a.jf=null;a.jY=0;a.lE=null;a.m8=null;a.AP=null;a.nW=null;a.f_=null;}
function A9M(a){var b=new Lu();AHk(b,a);return b;}
function AHk(a,b){var c,d,e;Hd(a,b,0);a.f_=AZr(a.r);c=I8(a.w);a.jf=c;a.I=G3(c);c=G3(a.jf);a.N=c;a.m8=AJk(a.I,c);c=a.I;c.cc=1;OY(a.f_,c,a.N);c=a.I;d=new U$;d.CL=a;c.iV=d;c=a.N;d=new U_;d.Af=a;c.iV=d;AJi(a,0);NB(a.r,a.I);Z(b.o.fS,a);Z(b.o.b2,a);c=b.o.bE;d=new Va;d.yf=a;Z(c,d);c=b.o.bE;d=new GQ;e=new U8;e.wa=a;Ha(d,b,e);Z(c,d);Z(b.o.hl,a);Z(b.o.hM,a);b=b.o.cI;c=new U9;c.tQ=a;Z(b,c);J0(a);}
function Xv(a,b){if(a.I===b)a.jY=a.jY|1;if(a.N===b)a.jY=a.jY|2;if((a.jY&3)==3)ANl(a);}
function AJi(a,b){Jv(a.I,b);Jv(a.N,b);}
function A6t(a,b,c){if(DA(a.r,a.I))return JJ(a.I,b,c);if(!DA(a.r,a.N))return 0;return JJ(a.N,b,c);}
function AHF(a){if(DA(a.r,a.I))return Xa(a,a.I);if(!DA(a.r,a.N))return null;return Xa(a,a.N);}
function Xa(a,b){var c;c=new T7;c.to=b;return c;}
function AHi(a,b,c){var d;d=D9(c);if(b!==a.I)a.nW=d;else a.AP=d;b=a.AP;if(b!==null&&a.nW!==null)GH(a.D.bL,D9(c));else{if(b!==null)GH(a.D.bL,b);b=a.nW;if(b!==null)GH(a.D.bL,b);}}
function ANl(a){var b,c,d;Bf(Bk(),C(123));b=a.I.d.h;c=a.N.d.h;d=new WM;d.ty=a;AKq(b,c,d,a.D.bL);}
function AVb(a,b){var c;c=QQ(a,b);return Md(a.I,b)|Md(a.N,b)|c;}
function A2A(a){var b;H0(a);IS(a.I);IS(a.N);b=a.f_;AIx(b,b.i9.bR);Kp(a.w);}
function A1y(a){return EQ(0);}
function AVA(a){J5(a.I);J5(a.N);}
function A2u(a){K5(a.I);K5(a.N);}
function AWg(a,b){I5(a.I,b);I5(a.N,b);}
function A3s(a,b){K6(a.r,b);}
function APO(a,b){if(G0(a.w,b)){MA(a.I);MA(a.N);}}
function ASr(a,b,c){I$(a,b,c);AHS(a,b,c);}
function AHS(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Ck(20.0,c);f=new Bh;g=b.a/2|0;h=e/2|0;RF(f,g-h|0,b.b);M6(a.I,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;M6(a.N,d,f,c);Y(a.f_.i,f.a,d.b);Y(a.f_.j,d.a-f.a|0,f.b);}
function AOq(a,b){BG(b);Gb(a.jf,b);E_(a.I,b);E_(a.N,b);a.f_.iO=b;}
function AJd(a,b){if(b.bc!=121)return 0;return 1;}
function ALx(a,b){var c,d,e,f;if(DA(a.r,a.I)){c=a.jf;d=b.k;e=a.I;f=new PW;f.v7=a;Jd(c,d,e,a,a,a,f);}if(DA(a.r,a.N)){c=a.jf;b=b.k;d=a.N;e=new PV;e.vi=a;Jd(c,b,d,a,a,a,e);}return 1;}
function A3R(a,b){var c,d;c=B3(a.I,b.k)&&YT(a.I,b)?1:0;d=B3(a.N,b.k)&&YT(a.N,b)?1:0;return !c&&!d?0:1;}
function A1B(a,b,c,d){var e,f;e=B3(a.I,b.k)&&PS(a.I,b,c,d)?1:0;f=B3(a.N,b.k)&&PS(a.N,b,c,d)?1:0;return !e&&!f?0:1;}
function ATp(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.I,b.k);e=B3(a.N,b.k);f=a.r;g=f.cf;h=g!==null?0:1;i=a.I;j=g!==i?0:1;k=g!==a.N?0:1;if(d&&!(!h&&!k))Cx(f,i);if(e&&!(!h&&!j))Cx(a.r,a.N);if(d){i=XM(a.I,b,c);if(i!==null)return i;}return !e?null:XM(a.N,b,c);}
function A4n(a,b,c){var d,e,f,g;d=B3(a.I,b.k);e=B3(a.N,b.k);f=d&&Ud(a.I,b,c)?1:0;g=e&&Ud(a.N,b,c)?1:0;return !f&&!g?0:1;}
function AUL(a,b,c,d){var e,f,g,h;e=B3(a.I,b.k);f=B3(a.N,b.k);g=e&&Mu(a.I,b,c,d)?1:0;h=f&&Mu(a.N,b,c,d)?1:0;return !g&&!h?0:1;}
function A14(a){return AHF(a);}
var AIY=G(Lu);
function A9i(a){var b=new AIY();A6f(b,a);return b;}
function A6f(a,b){var c;AHk(a,b);a.I.fn=1;a.N.fn=1;c=new UA;c.yi=a;Q7(a,c,C(124));c=new UC;c.BQ=a;Q7(a,c,C(125));}
function ATA(a){return EQ(1);}
function Q7(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new PK;d=d.then(Bw(e,"f"));f=new PM;f.uR=b;f.uQ=c;g=new PL;d.then(Bw(f,"f"),Bw(g,"f"));}
var AJm=G();
function A5I(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(126)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(Kz(b)){case -1570047148:if(!Bj(b,C(127)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(128)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(129)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(130)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(131)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(132)))break a;d=19;break a;case -811765794:if(!Bj(b,C(133)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(134)))break a;d=11;break a;case -695287066:if(!Bj(b,C(135)))break a;d=20;break a;case -643550180:if(!Bj(b,C(136)))break a;d=28;break a;case -631889171:if(!Bj(b,C(137)))break a;d=9;break a;case -536831301:if(!Bj(b,C(138)))break a;d=26;break a;case -439438829:if(!Bj(b,C(139)))break a;d=21;break a;case -357667878:if(!Bj(b,C(140)))break a;d=22;break a;case -223304637:if(!Bj(b,C(141)))break a;d=2;break a;case -193916863:if(!Bj(b,C(142)))break a;d=23;break a;case 2129957:if(!Bj(b,C(143)))break a;d=1;break a;case 3343967:if
(!Bj(b,C(144)))break a;d=10;break a;case 3556498:if(!Bj(b,C(145)))break a;d=4;break a;case 91636708:if(!Bj(b,C(146)))break a;d=25;break a;case 485517998:if(!Bj(b,C(147)))break a;d=7;break a;case 544901384:if(!Bj(b,C(148)))break a;d=3;break a;case 654963552:if(!Bj(b,C(149)))break a;d=24;break a;case 1030621992:if(!Bj(b,C(150)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(151)))break a;d=29;break a;case 1465713255:if(!Bj(b,C(152)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(153)))break a;d=15;break a;case 1609169232:if
(!Bj(b,C(154)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(155)))break a;d=27;break a;default:}}b:{switch(d){case 1:break;case 2:b=new VW;break b;case 3:case 4:b=new VT;break b;case 5:b=new VS;break b;case 6:b=new VV;break b;case 7:b=new VU;break b;case 8:b=new V0;break b;case 9:case 10:b=new VZ;break b;case 11:b=new V2;break b;case 12:b=new V1;break b;case 13:b=new ACz;break b;case 14:b=new ACy;break b;case 15:b=new ACx;break b;case 16:b=new ACj;break b;case 17:b=new ACi;break b;case 18:b=new ACg;break b;case 19:b
=new ACf;break b;case 20:b=new ACe;break b;case 21:b=new ACd;break b;case 22:b=new ACc;break b;case 23:b=new ACn;break b;case 24:b=new ACm;break b;case 25:b=new ACl;break b;case 26:b=new ACk;break b;case 27:b=new ACs;break b;case 28:b=new ACr;break b;case 29:b=new ACq;break b;default:b=new ACp;break b;}b=new VX;}return b;}
var ALI=G();
var LB=G(Mc);
function AHD(){var a=this;LB.call(a);a.q0=0;a.qN=0;a.i4=null;}
function AUG(a,b,c,d,e,f){var g=new AHD();AXL(g,a,b,c,d,e,f);return g;}
function AXL(a,b,c,d,e,f,g){AEq(a,c);a.bg=e;a.eK=f;a.qN=b;a.q0=g;a.i4=d;}
function ABO(a,b,c){a.i4.data[b+a.qN|0]=c;}
function L6(){var a=this;B.call(a);a.FD=null;a.tA=null;a.EJ=0.0;a.xM=0.0;a.oA=null;a.n3=null;a.l4=0;}
function OT(){var a=this;B.call(a);a.iA=0;a.kL=0;}
var A_m=null;var A_l=null;function AGy(a,b){var c=new OT();AKS(c,a,b);return c;}
function AKS(a,b,c){a.iA=b;a.kL=c;}
function Jz(a){return a.iA?0:1;}
function IJ(a){return a.iA!=1?0:1;}
function Ok(a){return !Sx(a)&&!MW(a)?0:1;}
function Sx(a){return a.iA!=2?0:1;}
function MW(a){return a.iA!=3?0:1;}
function LH(a){var b;if(Ok(a))return a.kL;b=new DV;X(b);N(b);}
function EK(b){return AGy(2,b);}
function Vt(a){var b,c;switch(a.iA){case 0:b=new R_;X(b);N(b);case 1:b=new WU;X(b);N(b);case 2:b=new Vn;c=a.kL;X(b);b.Fl=c;N(b);case 3:b=new R3;c=a.kL;X(b);b.GO=c;N(b);default:}}
function AK5(){A_m=AGy(0,0);A_l=AGy(1,0);}
var AGt=G();
var JD=G(0);
var Yd=G();
function AQJ(a,b){return b.arrayBuffer();}
var Yc=G();
function AT8(a,b){var c,d;c=new ZC;d=new ZA;return $rt_globals.WebAssembly.instantiate(b,ASf(Bw(c,"f"),Bw(d,"f")));}
var Ya=G();
function AUA(a,b){AO4(b);}
var X_=G();
function AZG(a,b){AJu(b);}
var W=G(0);
function UA(){B.call(this);this.yi=null;}
function A60(a,b){It(a.yi.I,b);}
function UC(){B.call(this);this.BQ=null;}
function A19(a,b){It(a.BQ.N,b);}
var VX=G();
function AWw(a,b){return A9M(b);}
var VW=G();
function AN$(a,b){return A8E(b);}
var VT=G();
function A0n(a,b){return A8P(b);}
var VS=G();
function A3q(a,b){var c,d,e,f,g;c=new ACR;Ey(c,b);d=(I_()).by.eF;c.F5=d;c.lJ=ANm(d);c.jy=new Bh;c.iB=new Bh;c.dN=Lq();c.em=Lq();c.nK=EQ(1);b=b.o.b2;d=new XU;d.mM=c;Z(b,d);b=c.nK.data[D0()*c.nK.data.length|0];d=IV(c.D.U,b,10);c.nx=d;Cr(c.D.U.cu,d);e=EA(c.D.U.cu,C(156));d=c.D.U.cu;f=new J;L(f);Br(f,43);H(f,b);g=C6(e+EA(d,K(f)));c.j_=g;c.i_=BY(c.i_,AFX(c,1,g,b,c.nx,c.D.U));c.i$=BY(c.i$,AFX(c,0,c.j_,b,c.nx,c.D.U));Sd(c,c.dN,c.i_);Sd(c,c.em,c.i$);Cv(c.dN.be,1.0,1.0,1.0,1.0);FA(c.dN,c.lJ);Cv(c.em.be,1.0,1.0,1.0,1.0);FA(c.em,
c.lJ);b=Bk();g=c.j_;d=new J;L(d);V(H(d,C(157)),g);Bf(b,K(d));return c;}
var VV=G();
function AQr(a,b){var c,d,e;c=new YW;Gv(c,b);d=new XQ;d.ov=new Bh;d.oW=new Bh;c.zV=d;c.fC=ALK();c.d5=ALK();c.pd=DB(C(158),25.0);Z(c.r.dz,c);d=b.o.bE;e=new ADi;e.vM=c;Z(d,e);Z(b.o.b2,c);b=b.o.cI;d=new ADe;d.wI=c;Z(b,d);AFZ(c.d5);BL(c.dh,Cs(43));b=Fx();Kh(c.fC,b);Kh(c.d5,b);b=c.fC;b.ln=new ADf;d=c.d5;d.ln=new ADg;d.pN=new Q3;d.xR=new Q4;N3(b,(SM(0)).mf);N3(c.d5,(SM(0)).mf);return c;}
var VU=G();
function AXS(a,b){var c,d,e;c=new ACh;Gv(c,b);Z(c.r.dz,c);BL(c.dh,Cs(43));d=b.o.bE;e=new VM;e.DX=c;Z(d,e);b=b.o.cI;d=new VN;d.Cy=c;Z(b,d);return c;}
var V0=G();
function AP6(a,b){var c,d,e;c=new Yi;AEp(c,b);c.is=BO();c.gQ=BO();c.sP=S(C(159));c.kJ=Wf();c.ir=0;d=c.r.dz;e=new PU;e.y_=c;Z(d,e);Z(b.o.b2,c);d=b.o.bE;e=new PT;e.wS=c;Z(d,e);b=IV(b.U,C(158),35);c.kO=b;c.mW=AKo(Fl(b));BL(c.dh,S(C(160)));return c;}
var VZ=G();
function ASQ(a,b){var c,d,e,f;c=new TW;Ey(c,b);c.iu=AJt();c.fu=0;c.vZ=500;c.sQ=Ja(0,0,0,255,new B4);c.m$=20;c.yt=20;c.BD=I_();d=b.o.b2;e=new X5;e.mj=c;f=new U7;f.Bw=e;e.sA=f;Z(d,e);d=b.o.fS;e=new ABy;e.B6=c;Z(d,e);c.e2=b.U;c.yR=St(b.bL);Z7(c.iu,IV(c.e2,C(158),c.yt),c.m$,c.e2.mA);c.jw=JL();return c;}
var V2=G();
function A4Z(a,b){var c,d;c=new Sa;Ih(c,b);b=b.o.bE;d=new RH;d.tZ=c;Z(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var V1=G();
function ANQ(a,b){var c,d,e,f,g,h,i;c=new YD;Gv(c,b);d=b.o.cI;e=new SB;e.zc=c;Z(d,e);d=b.bL;f=new QF;f.EY=c;g=P(B,1);g.data[0]=C(161);CG(d,f,C(162),g);h=new QE;h.FY=c;g=P(B,1);g.data[0]=ALl([1,2,3,4,5]);CG(d,h,C(163),g);h=new QB;h.G2=c;i=P(B,1);i.data[0]=A8h([1,2,3,4,5]);CG(d,h,C(164),i);h=new Qz;h.F8=c;g=P(B,1);g.data[0]=D_([1,2,3,4,5]);CG(d,h,C(165),g);d=b.o.bE;e=new GQ;h=new SA;h.BA=c;Ha(e,b,h);Z(d,e);return c;}
var ACz=G();
function AN4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new XW;Ih(c,b);c.fs=IF(0,0,300,300);c.hc=Ui(0,0,3,3);d=b.U;b=b.o.b2;e=new ADs;e.nD=c;Z(b,e);b=ANt(d);c.Cg=b;F$(c.fs,b);Gj(c.fs);b=c.fs.bt;F2();BL(b,A_J);BL(c.fs.be,DE(204,120,50));AH6();e=A_K;f=DT((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C4(d);switch(e.fx){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Fj;X(b);N(b);}b:
{X8(m,5,5,h);b=m.e9.es;switch(e.fx){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Fj;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.ok=m;Y(c.hc.v,BV(m),CX(c.ok));BL(c.hc.bt,c.qF);return c;}
var ACy=G();
function A2d(a,b){var c,d,e;c=new TU;Ih(c,b);c.hv=IF(0,0,300,300);c.m7=new Bh;c.k4=new Bh;c.ko=new Bh;d=b.U;b=b.o.b2;e=new Y4;e.k0=c;Z(b,e);b=ANt(d);c.rG=b;F$(c.hv,b);Gj(c.hv);b=c.hv.bt;F2();BL(b,A_J);BL(c.hv.be,DE(204,120,50));return c;}
var ACx=G();
function ATR(a,b){var c,d,e,f;c=new AB4;Ey(c,b);c.E9=20;c.GP=11;c.Fw=220;c.mK=new Bh;c.Gf=5000;c.iP=1;c.hn=I(HO,[Cs(0),Cs(255)]);c.fa=b.U;d=b.o.b2;e=new ZV;e.mx=c;f=new Wb;f.uB=e;e.rv=f;Z(d,e);b=b.o.fS;d=new Xi;d.sh=c;Z(b,d);b=Ia(c.fa,200,220);c.pl=b;HX(b,C(158),20.0);b=Ia(c.fa,200,20);c.hf=b;HX(b,C(158),20.0);c.i6=JL();return c;}
var ACj=G();
function AQN(a,b){var c,d,e;c=new KZ;Ih(c,b);Z(b.o.b2,c);d=b.o.bE;e=new AE3;e.xQ=c;Z(d,e);Z(b.o.hl,new AE2);d=b.o.hl;e=new AE1;e.tp=c;Z(d,e);Z(b.o.hM,new AE0);d=b.o.hM;e=new AE4;e.Bj=c;Z(d,e);b=!W0(b.bL)?C(166):C(167);d=new J;L(d);H(H(d,C(168)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ACi=G();
function AX6(a,b){var c,d;c=new TD;Ih(c,b);c.vt=Cs(20);c.gX=IF(0,0,300,300);c.wW=DB(C(14),80.0);b=b.o.bE;d=new Ti;d.Fc=c;Z(b,d);return c;}
var ACg=G();
function A55(a,b){var c;c=new Uz;Pt(c,b);HI(c.cz,0,0,300,300);Y(c.dP,300,300);return c;}
var ACf=G();
function AS0(a,b){var c;c=new Uy;Pt(c,b);c.gw=new Bh;c.gY=new Bh;Y(c.ey,150,140);Y(c.dP,500,100);Y(c.fO,150,200);Y(c.e$,500,250);return c;}
var ACe=G();
function A41(a,b){var c,d,e;c=new Xq;Gv(c,b);c.DH=3;c.xp=DB(C(169),20.0);c.kC=Wf();c.q3=1;Z(c.r.dz,c);BL(c.dh,Cs(43));d=b.o.bE;e=new Qj;e.Ay=c;Z(d,e);b=b.o.cI;d=new Ql;d.wQ=c;Z(b,d);return c;}
var ACd=G();
function ANI(a,b){return A9f(b);}
var ACc=G();
function A4O(a,b){var c,d,e,f;c=new Rn;KL(c,b);BL(c.dh,Cs(43));c.mL=I8(c.w);d=b.o.bE;e=new GQ;f=new Qm;f.CK=c;Ha(e,b,f);Z(d,e);b=b.o.cI;d=new Qn;d.Au=c;Z(b,d);return c;}
var ACn=G();
function A33(a,b){var c,d;c=new SQ;Hd(c,b,1);c.nL=GB();Z(c.r.dz,c);BL(c.dh,Cs(43));b=b.o.cI;d=new YX;d.zm=c;Z(b,d);return c;}
var ACm=G();
function APA(a,b){var c,d,e,f;c=new Sb;Hd(c,b,1);c.nc=GB();Z(c.r.dz,c);BL(c.dh,Cs(43));d=b.o.bE;e=new GQ;f=new QT;f.t2=c;Ha(e,b,f);Z(d,e);b=b.o.cI;d=new QS;d.wu=c;Z(b,d);return c;}
var ACl=G();
function A1i(a,b){var c;c=new AAc;KL(c,b);c.wZ=GB();BL(c.dh,Cs(43));return c;}
var ACk=G();
function ARJ(a,b){return A8R(b);}
var ACs=G();
function ARK(a,b){var c,d,e;c=new Qv;KL(c,b);c.wn=GB();BL(c.dh,Cs(43));d=b.o.cI;e=new VR;e.DU=c;Z(d,e);b=b.o.bE;d=new VQ;d.u6=c;Z(b,d);return c;}
var ACr=G();
function AYM(a,b){var c,d,e;c=new AAZ;KL(c,b);c.pM=GB();BL(c.dh,Cs(43));d=b.o.cI;e=new RJ;e.CB=c;Z(d,e);b=b.o.bE;d=new RI;d.Et=c;Z(b,d);return c;}
var ACq=G();
function APP(a,b){var c,d;c=new U4;Gv(c,b);c.hz=GB();Z(c.r.dz,c);BL(c.dh,Cs(43));b=b.o.cI;d=new ACB;d.rz=c;Z(b,d);return c;}
var ACp=G();
function A31(a,b){var c;c=new PB;AJN(c,b);AMH(c.el);return c;}
function AEZ(){var a=this;B.call(a);a.vJ=null;a.B_=null;a.BC=null;}
function IK(){var a=this;B.call(a);a.bN=0;a.cC=0;a.dC=0;a.i8=0;}
function A_L(a,b,c,d){var e=new IK();ADv(e,a,b,c,d);return e;}
function ADv(a,b,c,d,e){a.bN=d;a.cC=b;a.dC=c;a.i8=e;}
function AAv(a){return !a.cC&&!a.bN&&!a.dC&&!a.i8?1:0;}
function Re(){var a=this;IK.call(a);a.eE=null;a.bc=0;a.km=0;a.Bf=0;a.pt=0;}
var AIZ=G();
function Wk(b,c){return (b+(c/2|0)|0)/c|0;}
function Z$(b,c,d){if(b<(2147483647/c|0))return Wk(Bb(b,c),d);return 0.5+c*b/d|0;}
function IE(b,c){return ((b+c|0)-1|0)/c|0;}
function G8(b){return b+0.5|0;}
function C6(b){return b+0.5|0;}
function Fk(b,c,d){return Bd(b,Be(c,d));}
function NO(b,c){return AKj(b)/AKj(c);}
function Pv(){var a=this;IK.call(a);a.k=null;a.Fv=null;}
var UH=G(0);
function Qi(){var a=this;B.call(a);a.wX=null;a.wY=null;}
function A2f(a,b){var c,d;c=a.wX;d=a.wY;$rt_globals.console.info("paste plain string "+b);c.g(FZ(b));DJ(d);}
function ADM(){B.call(this);this.xk=null;}
function OV(a,b){a.xk.clipboardData.setData("text/plain",$rt_ustr(b));}
function AE6(){var a=this;NP.call(a);a.Ez=0;a.ya=0;}
function CH(){var a=this;B.call(a);a.i=null;a.j=null;a.b1=0.0;}
function AXR(){var a=new CH();Fi(a);return a;}
function Fi(a){a.i=new Bh;a.j=new Bh;}
function AVc(a){}
function A3g(a){return BK(0,0);}
function Ko(a,b,c,d){var e;if(!Kw(a.i,b)){a.so(b);Ct(a.i,b);}if(!Kw(a.j,c)){a.pD(c);Ct(a.j,c);}e=a.b1;if(e!==d){a.b1=d;a.l7(e,d);}}
function DF(a,b){return Ck(b,a.b1);}
function B3(a,b){return GI(b,a.i,a.j);}
function ANg(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.j;ARL();Bv(b,d,e,f,A_M);}
function AD9(a,b){var c;c=a.i;Mw(b,c.a,c.b,a.j);}
function AZx(a,b){return 0;}
function AST(a,b){}
function AW4(a,b){}
function A4C(a,b,c){}
function AW_(a){}
function ARE(a,b,c,d){return 0;}
function APe(a,b,c){return null;}
function ATE(a,b,c){return 0;}
function AWO(a,b){return 0;}
function A4s(a,b,c,d){return 0;}
function AG_(){var a=this;CH.call(a);a.i9=null;a.lR=null;a.lS=null;a.lP=null;a.lQ=null;a.eQ=null;a.g4=null;a.g5=null;a.iO=null;}
function AZr(a){var b=new AG_();APE(b,a);return b;}
function APE(a,b){Fi(a);a.lR=new Bh;a.lS=new Bh;a.lP=new Bh;a.lQ=new Bh;a.i9=b;}
function OY(a,b,c){a.g4=b;a.g5=c;}
function AIx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bv(b,c.a,c.b,a.j,a.iO.by.eF);if(a.eQ===null)return;d=Cw(a.i9,2.0);e=Hc(a.eQ,a.g4.lO(),1);f=Hc(a.eQ,a.g4.k1(),1);g=Hc(a.eQ,a.g5.lO(),0);h=Hc(a.eQ,a.g5.k1(),0);i=Be(e,g);j=Bd(f,h);g=BQ(i,j);if(g<=0)Ca(b,1);k=a.g4.lo();l=a.g4.mu();m=a.g5.mu();n=a.g5.lo();o=a.i9.qL;while(i<=j){p=a.eQ.iS.data[i];if(p.pC){q=a.g4.h8(p.iz);r=a.g4.h8(p.iz+p.jz|0);s=a.g5.h8(p.iy);t=a.g5.h8(p.iy+p.jx|0);Y(a.lR,a.i.a,q);Y(a.lP,a.i.a,r);Y(a.lS,a.i.a+a.j.a|0,s);Y(a.lQ,
a.i.a+a.j.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.j.b|0);if(v>u){Y(o,a.j.a,v-u|0);c=a.iO;w=Is(c.d7,c,p.pC);if(q==r)R$(a,b,q,s,d,k.a,l.a,w,a.lR,a.lP);if(s==t)R$(a,b,s,q,d,n.a,m.a,w,a.lS,a.lQ);AF5(b,a.i.a,u,o,a.lR,a.lS,a.lP,a.lQ,w);}}i=i+1|0;}if(g<=0)Ca(b,0);}
function R$(a,b,c,d,e,f,g,h,i,j){var k;k=a.i9.dG;Y(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bv(b,f,c,k,h);}
function AHH(){var a=this;B.call(a);a.ck=null;a.dW=null;a.iY=null;}
function I8(a){var b=new AHH();AOH(b,a);return b;}
function AOH(a,b){a.ck=b;}
function Gb(a,b){var c;a.iY=b;c=a.dW;if(c!==null)Ev(c,b.cd);c=a.ck.ex;if(c!==null)HQ(c,b.cd,b.f1);}
function AAU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=ARY();i=c.q;j=0;while(j<i){if(f===null){k=(BI(c,j)).bv;l=ABu(F5(Cg(g.h,k)));m=AB7(g.fM);}else{n=f.data;k=n[j].qg.nZ;l=!BR(g.fM,n[j].mB)?C(21):ABu(F5(Cg(g.h,k)));m=AB7(n[j].mB);}if(M(l)>153){o=Cz(l,0,150);n=new J;L(n);H(H(n,o),C(170));l=K(n);}if(M(m)>153){n=Cz(m,0,150);o=new J;L(o);H(H(o,n),C(170));m=K(o);}n=Dp(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BI(c,j);}if(f!==null){q=new AFf;q.tt=d;q.tu=p;}else{q=new AFg;q.CS=d;q.CR
=o;}Xz(h,m,n,l,q);j=j+1|0;}r=AEO(h);if(a.dW!==null)ACH(a);c=a.ck.G;g=new Sm;f=new AB2;f.rs=a;f.rt=d;AM_(g,c,f);Yv(g,r);d=a.iY;Xt(g,d.cd,d.C1);d=AGf(c);a.dW=d;d.qy=d.qy|1;d=G9(g,c);f=a.iY.cd;JR(d,f.nA,f.pu);LO(a.dW,d);Ev(a.dW,a.iY.cd);d=a.dW;f=new J;L(f);H(H(f,C(171)),e);CZ(d,K(f));DX(a.ck,a.dW);d=a.dW;i=(d.V.j.b+Cw(d.bi,2.0)|0)+Cw(c,2.0)|0;s=(g.eu+g.fd|0)+g.h7|0;t=Cw(g.b5,5.0);e=BK(Fk(t,b.a,g.b5.bX.a-s|0),Fk(i,b.b,g.b5.bX.b-g.c5.b|0));ZO(g);Ly(g);i=Ew(g);s=g.cg.data.length;i=Bb(i,s)+Bb(g.eh,s+1|0)|0;Y(g.c5,
g.j.a,i);i=(g.eu+g.fd|0)+g.h7|0;b=g.b5;s=(b.bX.a-e.a|0)-Cw(b,5.0)|0;b=g.b5;t=(b.bX.b-e.b|0)-Cw(b,5.0)|0;d=BK(Be(i,s),Be(g.c5.b,t));EJ(a.dW,e,d);Cx(c,g);}
function ACH(a){IW(a.ck,a.dW);Kx(a.dW);a.dW=null;}
function SK(a,b,c){var d,e;d=a.ck;e=a.iY;Fz(d,e.cd,e.f1,b,c);}
function Jd(a,b,c,d,e,f,g){SK(a,b,ABm(JM(a,c,g,d,e,f),b));}
function JM(a,b,c,d,e,f){var g;g=new Uc;g.gZ=a;g.bD=b;g.r$=c;g.jK=e;g.o5=f;g.mY=d;return g;}
function AGT(b){var c;c=new SW;c.Bm=b;return c;}
var Fo=G(0);
function A3i(a){}
function AQU(a){}
function ANO(a,b,c){return 0;}
function AXM(a){return null;}
var R1=G(0);
var M4=G(0);
function AHe(){var a=this;CH.call(a);a.ci=null;a.bq=null;a.lk=null;a.Dk=0;a.o3=null;a.en=null;a.op=0;a.h6=0.0;a.mR=null;a.Ey=null;a.gt=null;a.Z=0;a.dw=0;a.d=null;a.fX=null;a.eO=null;a.fj=null;a.Cm=0;a.A_=0;a.dm=0;a.cv=0;a.cF=0;a.iI=null;a.gn=null;a.f2=null;a.j3=0;a.kG=0;a.GT=0;a.DR=0;a.lw=0;a.ms=0;a.qD=0;a.eD=0;a.dD=null;a.fU=null;a.fn=0;a.cc=0;a.DE=null;a.kE=null;a.Ar=null;a.vE=null;a.iV=null;a.bF=0;a.di=null;a.lX=null;a.tz=0;a.sd=null;a.wc=null;}
function G3(a){var b=new AHe();AVa(b,a);return b;}
function AVa(a,b){var c,d,e;Fi(a);a.Dk=0;a.o3=P(T,10);a.en=A1d();a.h6=16.0;a.mR=C(158);a.d=A89(P(BC,0),null,null);c=new AFw;c.zF=CW(P(N7,0));c.Dh=CW(P(N7,0));c.rk=CW(P(ACv,0));c.wL=CW(P(AAe,0));c.wp=CW(P(Gy,0));c.Cc=CW(P(TG,0));a.fX=c;a.fj=P(FK,0);a.iI=BK(1,0);a.gn=JL();a.f2=JL();a.j3=0;a.kG=1;a.lw=1;a.ms=1;a.qD=1;a.eD=3;a.dD=AJt();a.fU=C(172);a.fn=0;a.cc=0;c=D4();BG(c);d=new YO;d.ES=c;a.kE=d;a.bF=0;c=new YN;c.q9=a;a.sd=c;c=new YM;c.ui=a;a.wc=c;c=b.ck.G;a.ci=c;a.bq=c.bR;a.lk=b;b=ASA(c.cX);a.di=b;a.gt=b.hD;e
=a.o3.data;b=new YL;b.Cq=a;e[1]=b;b=new YS;b.yK=a;e[2]=b;b=new YR;b.ve=a;e[3]=b;b=new YQ;b.xC=a;e[4]=b;b=new YP;b.rX=a;e[5]=b;b=new YK;b.AO=a;e[6]=b;LF(a.d,a,G5(a));}
function M6(a,b,c,d){Ko(a,b,c,d);AB9(a,b,c,d);}
function AUj(a,b,c){WH(a,a.mR,a.h6);QN(a.di,c);}
function A61(a,b,c){a.Ar=b;a.vE=c;}
function AB9(a,b,c,d){var e;a.dm=Ck(80.0,d);a.cv=Ck(1.0,d);a.cF=Ck(10.0,d);e=!a.cc?b.a:(b.a+c.a|0)-IU(a)|0;Y(a.ci.dG,e,b.b);Tq(a.dD,a.ci.dG,Be(IU(a),c.a),c.b,d);b=a.en;e=Ck(2.0,d);b.ff.v.a=e;}
function A0I(a){a.op=1;OG(a);}
function AYD(a){a.op=0;}
function OG(a){Z2(a.en,Ny(G5(a)));}
function E_(a,b){var c,d;a.eO=b;c=a.en;d=b.by.Dg;BL(c.ff.be,d);c=a.gn;d=b.by;IA(c,d.mc,d.mi);c=a.f2;b=b.by;IA(c,b.mc,b.mi);}
function J5(a){Pg(a,a.di.dA.oX,a.h6+1.0);}
function K5(a){var b;b=a.h6;if(b<=7.0)return;Pg(a,a.di.dA.oX,b-1.0);}
function I5(a,b){Pg(a,b,a.h6);}
function AU1(a,b){K6(a.ci,b);}
function Pg(a,b,c){if(a.ci.cs!==0.0){WH(a,b,c);J6(G5(a));}a.h6=c;a.mR=b;}
function MA(a){var b,c,d;b=a.di;c=a.ci.cX;d=a.bq;b.jh=c;if(b.h9.jQ!=c&&b.d9)AFT(b,d);T8(a.fj);I9(a.dD);OK(a);}
function WH(a,b,c){var d,e,f,g,h,i,j;d=a.b1;e=c*d;Ck(c,d);f=a.di.dA;d=f===null?0.0:f.pF;if(!(e===d&&BR(b,a.mR))){I9(a.dD);Pa(a.fj);g=a.d.h.F.data;h=g.length;i=0;while(i<h){Fg(g[i]);i=i+1|0;}j=a.di;f=a.bq;j.dA=AK8(b,e,300,600,j.hD,f);f=a.di;a.Ey=f.dA;a.Z=Tu(f,1.25,a.bq);a.dw=C6(a.di.dA.qM);a.en.ff.v.b=Fl(a.di.dA);i=a.Z;f=new J;L(f);b=H(H(f,C(173)),b);Br(b,32);V(H(Dg(b,e),C(174)),i);$rt_globals.console.info($rt_ustr(K(f)));if(A_N){h=NX(a.di.dA,a.Z);b=new J;L(b);V(H(b,C(175)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iT
=Hm(Gl(a),a.d.C,a.bq.cu,a.gt);ID(a);OK(a);}}
function AY3(a){Pa(a.fj);ZH(a.di);I9(a.dD);}
function Pu(a){return Bb(CN(a.d.h)+5|0,a.Z);}
function Lx(a){return Bd(Pu(a)-a.j.b|0,0);}
function ACI(a){return Bd(a.j3-GJ(a)|0,0);}
function GJ(a){var b;b=!a.cc?0:a.dw+a.cF|0;return Bd(1,(a.j.a-a.dm|0)-b|0);}
function IU(a){return a.cc?a.dm:a.dm-a.cF|0;}
function Ex(a){return a.j.b;}
function Md(a,b){var c,d,e;c=a.d.h;if(ADa(c)&&b-c.Bs>0.03125?1:0){d=a.tz;e=a.d.h.cJ;if(d!=e){a.tz=e;ABe(a);}}if(a.Z)ACD(a);d=ADj((a.bF+a.GT|0)-a.DR|0,Lx(a));e=a.bF==d?0:1;if(e)Gn(a,d);return !ACK(a.en,b)&&!e&&!a.Dk?0:1;}
function Jg(a,b){var c,d;b=ADj(b,ACI(a));c=a.d;d=b==c.ei?0:1;if(d)c.ei=b;if(d){c=a.Ar;if(c!==null)c.e();}}
function Gn(a,b){var c;if(ALk(a,b)){c=a.vE;if(c!==null)c.e();}}
function ALk(a,b){var c,d;c=ADj(b,Lx(a));d=c==a.bF?0:1;if(d){a.bF=c;a.d.nf=c/a.Z;}return d;}
function AI8(a){return BK((IU(a)+a.cv|0)+a.cF|0,a.Z);}
function AVY(a){return a.Z;}
function A2J(a,b){IS(a);}
function IS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IE(a.j.b,a.Z)+7|0;c=a.fj;if(c.data.length<b)a.fj=AAI(b,c,a.di,a.Cm,a.A_,a.d.h);Ca(a.bq,0);Of(a.bq,a.i,a.j);b=a.Z;d=a.en;e=(b-d.ff.v.b|0)/2|0;b=a.d.iT-(T$(d)/2|0)|0;d=a.d;f=b-d.ei|0;g=!a.cc?a.dm:(a.cv+a.cF|0)+a.dw|0;Vs(a.en,g+f|0,(e+Bb(d.z,a.Z)|0)-a.bF|0);h=CN(a.d.h);i=U1(a);j=U0(a);a.Cm=i;a.A_=j;k=!a.cc?a.i.a+a.dm|0:((a.i.a+a.cv|0)+a.cF|0)+a.dw|0;l=GJ(a);m=a.d.l9;n=DF(a,40.0);o=i;while(o<=j&&o<h){p=Cg(a.d.h,o);q=AEa(a,o);YY(q,p,a.bq,a.Z,l,
a.d.ei,o,o%a.fj.data.length|0);a.j3=Bd(a.j3,FY(p)+n|0);g=a.Z;r=Bb(g,o)-a.bF|0;s=m===null?null:m.data[o];r=a.i.b+r|0;t=a.bq;u=a.d.ei;v=a.eO;d=AMj(Bl(a),o);if(d!==null){if(d.b==(-1))d.b=p.X;d.a=Hm(p,d.a,a.bq.cu,a.gt);d.b=Hm(p,d.b,a.bq.cu,a.gt);}w=a.d;Q9(q,r,k,t,l,g,u,v,d,w.jo,w.i7,w.z!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.ci.dG;o=i;while(o<=j&&o<h&&a.lw){q=AEa(a,o);r=Bb(a.Z,o)-a.bF|0;w=Bl(a);if(!DD(w))u=0;else{d=EE(w);w=Gr(w);u=d.R<=o&&o<w.R?1:0;}d=a.eO;w=d.by;t=w.tN;x=a.d.z==o&&m===null?1:0;a:{if(u)t=w.lu;else
{if(m!==null){c=m.data;if(o<c.length&&c[o]!==null){t=Is(d.d7,d,c[o].gG);break a;}}if(x)t=w.g1;}}AKM(q,a.bq,k,a.i.b+r|0,a.Z,v,a.d.ei,l,t);o=o+1|0;}if(a.kG){y=Be(j+1|0,h);AMz(a,Bb(a.Z,y)-a.bF|0,l);}AIt(a);if(a.ms)AJJ(a,i,j,h);if(a.op&&f>=(( -T$(a.en)|0)/2|0)&&AMd(a.en,a.j))ADO(a.en,a.bq,a.i);AId(a);AHK(a);Gx(a.bq);AHX(a,i,j);}
function AJJ(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.l9;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eO;h=Is(h.d7,h,g.gG);}else h=e!==null?a.eO.by.eF:a.eO.by.g1;if(!(a.d.z!=b&&g===null)){g=a.iI;i=a.cc;g.a=!i?(a.cF-a.cv|0)-a.eD|0:((a.cF+a.dw|0)+a.cv|0)-a.eD|0;j=a.Z;g.b=j;i=i?0:(a.dm-a.cF|0)+a.cv|0;j=Bb(j,b)-a.bF|0;k=a.bq;l=a.i;Bv(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AHX(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.j.b;e=Be(d,Bb(CN(a.d.h),a.Z)-a.bF|0);f=a.dD;g=a.bF;h=a.d;i=h.l9===null?h.z:(-1);j=a.bq;k=a.eO;Of(j,f.g9,f.fT);T6(f,j,b,d);ADl(f,b,j);ACC(f,g,e,k,j);l=k.lK;if(e<d){h=f.g9;Bv(j,h.a,h.b+e|0,BK(f.fT.a,d-e|0),l.lD);}if(b<=i&&i<=c){k=k.lK;c=i/20|0;h=f.dp;l=BI(h,c%h.q|0);h=f.g9;d=Bb(f.dp.q,f.hQ);c=l.fR.b;b=((l.qY.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CX(l.da)|0)|0;c=i%l.eB|0;e=l.cN;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;Y(l.jN,l.fR.a,e);f=l.kt;c=i%l.eB|0;d=l.cN;Cv(f,0.0,
Bb(c,d),l.fR.a,d);N2(l,j,b,h,k.yS,k.rb);}Gx(j);}
function U1(a){return Be(a.bF/a.Z|0,CN(a.d.h)-1|0);}
function U0(a){return Be(((a.bF+Ex(a)|0)-1|0)/a.Z|0,CN(a.d.h)-1|0);}
function AUH(a,b){return (Bb(a.Z,b)-a.bF|0)+a.i.b|0;}
function AUv(a){return a.i;}
function AXJ(a){return a.j;}
function OK(a){Z7(a.dD,a.di.dA,a.Z,a.ci.cX);}
function AEa(a,b){var c;c=a.fj.data;return c[b%c.length|0];}
function Wt(a,b){var c,d,e,f;c=Fk(0,M(a.fU),Qb(b));if(!c)b=null;else{b=C(65);if(c<0){b=new BU;X(b);N(b);}if(c!=1){d=b.cp.data.length;if(d&&c){e=B6(Bb(d,c));d=0;f=0;while(f<c){RT(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=M$(e);}else b=A$I;}}return b;}
function QU(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BP(i);k=A$b(i).data;J8(j,c);c=0;l=k.length;if(c>l){f=new BU;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cJ=o.cJ+1|0;p=P(HA,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AV7(h[m],n[m],k[m],b[m],f.bv,f.bA);m=m+1|0;}BA(o.jd,p);c=0;while(c<i){b=e.data;N1(o,h[c],n[c],k[c],b[c]);g.q1(C5(h[c]),b[c]);c=c+1|0;}}
function ANu(a){var b;if(DD(Bl(a)))Hj(a);else{b=a.d;PP(b.h,b.z,b.C);}ID(a);EO(a);return 1;}
function DP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.fn)return 0;if(DD(Bl(a)))Hj(a);c=MU(ADX(b,C(176),C(21)),C(177),(-1));d=c.data;b=a.d;e=b.h;f=b.z;g=b.C;AFY(e,f,g,c);h=d.length;if(!h)b=A$I;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B6(i+Bb(h-1|0,M(C(177)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(177))){m=l+1|0;c[l]=Q(C(177),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=M$(k);}Gq(e,f,g,0,b);b=a.d;f=b.z;m
=(f+h|0)-1|0;CY(a,m,m!=f?M(d[h-1|0]):b.C+M(d[0])|0,0);Gu(a);EO(a);return 1;}
function Hj(a){var b,c,d;b=EE(Bl(a));c=a.d.h;d=Bl(a);PX(c,d,Wd(c,d));CY(a,b.R,b.bh,0);Gu(a);EO(a);}
function Gu(a){var b,c;(Bl(a)).dV=0;b=(Bl(a)).bW;c=a.d;Ci(b,c.z,c.C);b=(Bl(a)).bM;c=a.d;Ci(b,c.z,c.C);}
function AMz(a,b,c){var d,e;d=a.j.b;if(b<d){e=a.ci.dG;e.b=d-b|0;d=a.cc;e.a=!d?c+a.eD|0:c+a.cv|0;d=!d?(a.i.a+a.dm|0)-a.eD|0:(((a.i.a+a.cF|0)+a.dw|0)+a.cv|0)-a.eD|0;Bv(a.bq,d,a.i.b+b|0,e,a.eO.by.eF);}}
function AId(a){var b;b=a.cc?a.i.a+a.dw|0:a.i.a+a.j.a|0;KY(a.gn,a.bF,a.i.b,Ex(a),Pu(a),b,a.dw);b=!a.cc?a.i.a+a.dm|0:((a.i.a+a.cv|0)+a.cF|0)+a.dw|0;Su(a.f2,a.d.ei,b,GJ(a),a.j3,a.i.b+Ex(a)|0,a.dw);}
function AHK(a){var b,c;b=AAY(a.gn);c=AAY(a.f2);if(!(!b&&!c)){Ca(a.bq,1);if(b)Hl(a.gn,a.bq);if(c)Hl(a.f2,a.bq);if(b)Hq(a.gn,a.bq);if(c)Hq(a.f2,a.bq);}}
function AIt(a){var b,c,d,e,f;b=a.iI;c=a.j;b.b=c.b;b.a=a.cv;d=!a.cc?a.dm-a.cF|0:(c.a-IU(a)|0)-a.cv|0;b=a.bq;c=a.i;Bv(b,c.a+d|0,c.b,a.iI,a.eO.by.vQ);b=a.iI;d=a.cc;b.a=!d?(a.cF-a.cv|0)-a.eD|0:((a.cF+a.dw|0)+a.cv|0)-a.eD|0;e=d?0:(a.dm-a.cF|0)+a.cv|0;c=a.bq;f=a.i;Bv(c,f.a+e|0,f.b,b,a.eO.by.eF);}
function ADj(b,c){return Be(Bd(0,b),c);}
function G5(a){return a.ci.b9;}
function F_(a,b,c){var d,e,f;d=D9(b);e=new J;L(e);H(H(e,C(178)),d);$rt_globals.console.info($rt_ustr(K(e)));CY(a,0,0,0);f=new AEy;f.Ab=a;f.Ac=b;f.Aa=c;c=D4();BG(c);d=new AEx;d.yJ=c;Wq(b,f,d);}
function Kc(a,b,c,d,e){if(Jn(a,e))return 1;if(c&&d)return 1;if(c)Gn(a,a.bF+((Bb(b,a.Z)*12|0)/10|0)|0);else if(!d){IT(a,a.d.z+b|0,e);ADn(a);}return 1;}
function Tf(a,b,c,d){var e,f,g;if(Jn(a,d))return 1;e=Gl(a);if(!c)f=a.d.C+b|0;else if(b>=0)f=Hx(e,a.d.C);else{b=a.d.C;if(!b)f=(-1);else{c=KT(e,b);if(c>0&&e.eT.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eT.data[c-1|0];}}if(f>e.X){e=a.d;if((e.z+1|0)<CN(e.h))CY(a,a.d.z+1|0,0,d);}else if(f>=0)DG(a,f,d);else{e=a.d;b=e.z;if(b>0){g=(Cg(e.h,b-1|0)).X;CY(a,a.d.z-1|0,g,d);}}AEl(a);return 1;}
function Jn(a,b){if(DD(Bl(a))&&!b){Gu(a);ID(a);return 1;}if(!(b&&DD(Bl(a))))Gu(a);return 0;}
function CY(a,b,c,d){a.d.C=c;return IT(a,b,d);}
function IT(a,b,c){var d;d=a.d;d.z=Fk(0,b,CN(d.h)-1|0);return DG(a,a.d.C,c);}
function DG(a,b,c){var d,e;a.d.C=Fk(0,b,(Gl(a)).X);a.d.iT=a.b1===0.0?0:Hm(Gl(a),a.d.C,a.bq.cu,a.gt);OG(a);ID(a);if(c)(Bl(a)).dV=1;d=Bl(a);e=a.d;OH(d,e.z,e.C);(Bl(a)).dV=0;return 1;}
function Na(a,b){var c;c=AZS(Bl(a));DG(a,b,0);Kl(Bl(a),c);}
function ID(a){ADn(a);AEl(a);}
function ADn(a){var b,c,d,e,f;b=a.bF;c=b+Ex(a)|0;d=a.d.z;e=a.Z;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))Gn(a,d-e|0);else if(f>(c-e|0))Gn(a,(f-Ex(a)|0)+a.Z|0);}
function AEl(a){var b,c,d,e,f;b=C6(a.ci.cs*30.0);c=a.d.ei;d=c+GJ(a)|0;e=a.d.iT;f=e+b|0;if(e<(c+b|0))Jg(a,e-b|0);else if(f>(d-b|0))Jg(a,(f-GJ(a)|0)+b|0);}
function Js(a,b){var c,d;CY(a,b.bv,b.bA,0);c=Hx(Gl(a),a.d.C);Ci((Bl(a)).bM,a.d.z,c);b=(Bl(a)).bW;d=a.d;Ci(b,d.z,d.C);Jx(a.d);}
function FO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=Fk(0,((b.b-d.b|0)+a.bF|0)/a.Z|0,CN(a.d.h)-1|0);g=!a.cc?a.dm:(a.cv+a.cF|0)+a.dw|0;h=Bd(0,(e-g|0)+a.d.ei|0);b=Cg(a.d.h,f);d=a.bq.cu;i=a.gt;if(!(b.fk!==null&&!b.hC))Oa(b,d,i);j=b.fk;e=b.t.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.X;else{c=AC$(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.t.data.length)k=b.X;else{j=ABB(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.t.data[e].y)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A_O){b=new J;L(b);V(H(V(H(V(H(b,C(179)),e),C(180)),h),C(181)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return D1(f,k);}
function W4(a,b){var c,d;c=a.d;d=b.bv;c.z=d;c.C=b.bA;c.iT=Hm(Cg(c.h,d),a.d.C,a.bq.cu,a.gt);OG(a);}
function Gl(a){var b;b=a.d;return Cg(b.h,b.z);}
function Mu(a,b,c,d){var e,f;e=C6((a.Z*4|0)*d/150.0);f=C6(c);if(e)Gn(a,a.bF+e|0);if(f)Jg(a,a.d.ei+f|0);return 1;}
function Ud(a,b,c){(Bl(a)).dV=0;return 1;}
function XM(a,b,c){var d;if(!DA(a.ci,a))Cx(a.ci,a);if(c)return null;d=Gp(a.gn,b.k,a.sd,1);if(d!==null)return d;d=Gp(a.f2,b.k,a.wc,0);if(d!==null)return d;JQ(a);W4(a,FO(a,b.k));Jx(a.d);if(!b.bN&&!(Bl(a)).dV){b=(Bl(a)).bW;d=a.d;Ci(b,d.z,d.C);}(Bl(a)).dV=1;b=Bl(a);d=a.d;OH(b,d.z,d.C);b=new AFh;b.wm=a;return b;}
function PS(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cC){b=b.k;e=FO(a,b);f=JK(a.d.h,e.bv,e.bA);g=TY(a,f);h=Pb(a.fX,Eo(a.d),H5(a.d));if(h!==null){i=a.d;c=e.bv;d=e.bA;e=new AEV;e.Ek=a;e.El=b;e.Ej=g;h.uV(i,c,d,e,a.kE);}else{e=CC(a.d.h.ee,f);if(e!==null){Js(a,e);c=1;}else{e=CC(a.d.h.d6,f);if(e!==null&&!EU(e)){if(e.q!=1){AAU(a.lk,b,e,a,g);c=1;}else{Js(a,BI(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FO(a,b.k)).bv;g=Cg(a.d.h,c);c=Hb(g,a.d.C);d=Hx(g,a.d.C);b=O3(g,c);if((d-1|0)==g.X){Ci((Bl(a)).bW,
a.d.z,Qb(g));Ci((Bl(a)).bM,a.d.z,g.X);}else{if(b!==null){b=b.y;j=0;c:{while(true){k=b.cp.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.C;if(c==j){c=Hb(g,c-1|0);d=Hx(g,c);}else{if(d!=j){RG(Bl(a),a.d.z);break b;}c=Hb(g,d+1|0);d=Hx(g,c);}}}Ci((Bl(a)).bW,a.d.z,c);(Bl(a)).dV=1;CY(a,a.d.z,d,0);(Bl(a)).dV=0;JQ(a);}}break a;case 3:break;default:break a;}RG(Bl(a),a.d.z);ABn(a.d.it);JQ(a);}}return 1;}
function YT(a,b){var c,d,e,f,g,h,i,j;c=a.ci.dg;if(Gw(a.gn,b.k,c))return 1;if(Gw(a.f2,b.k,c))return 1;d=a.dD;if(GI(b.k,d.g9,d.fT)&&G$(c)?1:0)return 1;e=b.k;f=!a.cc?a.dm:(a.cF+a.cv|0)+a.dw|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=GJ(a);i=Ex(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return G$(c);if(b.cC){e=FO(a,b.k);e.bA=Hb(Cg(a.d.h,e.bv),e.bA);b=a.d.h;if(!HW(b.ee,e)&&!HW(b.d6,e)?0:1)return Ea(c,C(182));}return Ea(c,C(183));}
function A6B(a,b){var c,d,e,f;c=a.lX;if(c!==null&&c.bl(b))return 1;d=b.cC;if(d&&b.bc==65){d=CN(a.d.h)-1|0;e=G2(a.d.h,d);Ci((Bl(a)).bW,0,0);Ci((Bl(a)).bM,CN(a.d.h)-1|0,e);return 1;}if(d&&b.bc==80){M1(a.d);return 1;}if(!a.fn&&d&&b.bc==90){if(DD(Bl(a)))Gu(a);b=a.d.h;b.cJ=b.cJ+1|0;c=b.jd;e=c.q;if(!e)c=null;else{f=(E2(c,e-1|0)).data;c=Yb(b,f[0]);d=1;while(d<f.length){Yb(b,f[d]);d=d+1|0;}}if(c!==null){CY(a,c.a,c.b,0);EO(a);}return 1;}if(!d&&!b.dC){if(Bj(b.eE,C(184))){DP(a,C(185));DG(a,a.d.C-1|0,0);d=1;}else if(Bj(b.eE,
C(186))){DP(a,C(187));DG(a,a.d.C-1|0,0);d=1;}else if(Bj(b.eE,C(37))){DP(a,C(22));DG(a,a.d.C-1|0,0);d=1;}else if(Bj(b.eE,C(188))){DP(a,C(189));DG(a,a.d.C-1|0,0);d=1;}else if(Bj(b.eE,C(190))){DP(a,C(191));DG(a,a.d.C-1|0,0);d=1;}else if(!Bj(b.eE,C(192)))d=0;else{DP(a,C(193));DG(a,a.d.C-1|0,0);d=1;}}else d=0;if(d)return 1;a:{if(!(!b.dC&&!b.cC)){e=b.bc;if(e>=48&&e<=57){d=e-48|0;c=a.o3.data[d];if(c!==null)c.e();d=1;break a;}}d=0;}if(d)return 1;b:{switch(b.bc){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:d
=0;break b;}d=1;}if(d)return 1;if(ALw(a,b))return 1;if(AIa(a,b))return 1;if(b.cC&&b.bc==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!ARx(b.bc)&&b.bc!=27){if(!b.cC&&!b.dC&&!b.i8)return M(b.eE)>0&&DP(a,b.eE)?1:0;return 0;}return 0;}
function ACD(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=U1(a);d=U0(a);if(b.fA!=3&&b.g_==3){e=My(b.p6);f=new X9;f.zZ=c;f.zY=d;g=new So;g.tl=f;while(!g.nq&&OL(e,g)){}if(!g.nq&&Bj(C(194),Eo(b))){c=Bd(0,c-100|0);d=Be(CN(b.h)-1|0,d+100|0);BA(b.p6,BK(c,d));h=BP(3);i=h.data;i[0]=FX(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.F.data.length);k=0;while(k<d){j=j+G2(e,k)|0;if(k!=(e.F.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.BS=EN();e=b.fy;l=new AEm;l.s$=b;i=P(B,3);m=i.data;m[0]=Fr(b.h);m[1]=h;b=b.h.dI;g=BO();ACS(b,b.dF,
g);h=BP(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BI(g,o);d=k+1|0;n[k]=b.b$;q=d+1|0;n[d]=b.b7;k=q+1|0;n[q]=b.gj;o=o+1|0;}m[2]=h;CG(e,l,C(195),i);}}}
function W2(a){M1(a.d);}
function ABe(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.gi){c=Fh(b);d=new J;L(d);H(H(d,c),C(196));$rt_globals.console.info($rt_ustr(K(d)));}c=Eo(b);if(c!==null&&!Bj(C(183),c)){d=b.h.dI;e=RB(d,d.dF);if(e===null){O5(b);Lh(b.h);}else{f=D_([Dr(e),Di(e),e.b6.gj]);g=Fr(b.h);h=BP(1);h.data[0]=AJ8(c);d=b.h.fr;if(d.f3===null){i=BP(0);j=B6(0);}else{c=AXr(AZL(e.cB,d.fz),e);Yr(c);i=c.po;j=c.nt;}k=b.h.cJ;c=b.fy;d=new PC;d.BW=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BP(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CG(c,d,C(197),l);}}
else Lh(b.h);}
function JJ(a,b,c){var d,e,f,g,h,i;if(c&&a.fn)return 0;d=EE(Bl(a));e=d.R;if(DD(Bl(a))){f=a.d.h;g=Bl(a);h=Wd(f,g);if(c)PX(f,g,h);if(c){CY(a,d.R,d.bh,0);Gu(a);EO(a);}}else{h=FM(F5(a.d.h.F.data[e]),C(177));i=Be(CN(a.d.h)-1|0,e);Ci((Bl(a)).bM,i,0);if(e>=(CN(a.d.h)-1|0))Ci((Bl(a)).bM,i,G2(a.d.h,i));else Ci((Bl(a)).bW,i+1|0,0);if(c)Hj(a);else CY(a,e,0,0);}b.g(h);return 1;}
function AWU(a){var b;b=new Vq;b.Bg=a;return b;}
function AIa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.fn)return 0;a:{switch(b.bc){case 8:if(DD(Bl(a))){Hj(a);c=1;}else{b=a.d;d=b.C;if(!d&&!b.z)c=1;else{if(d){e=b.z;c=d-1|0;PP(b.h,e,c);}else{e=b.z-1|0;c=G2(b.h,e);b=a.d.h;Mf(b,e);Gq(b,e,G2(b,e),1,C(177));}EO(a);c=CY(a,e,c,0);}}break a;case 9:if(!b.bN){if(!DD(Bl(a)))DP(a,a.fU);else{f=EE(Bl(a));g=Gr(Bl(a));c=g.R;d=f.R;e=(c-d|0)+1|0;h=BP(e);i=h.data;j=P(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fU;d=d+1|0;e=l;}b=new AEs;m=a.d;ALS(b,m.z,m.C);m=new Us;m.v_
=a;QU(a,h,0,0,j,b,m);f.bh=f.bh+M(a.fU)|0;g.bh=g.bh+M(a.fU)|0;Na(a,a.d.C+M(a.fU)|0);EO(a);}c=1;}else b:{if(!DD(Bl(a))){b=a.d;f=Cg(b.h,b.z);if(f.t.data.length>0){g=Wt(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.z;b=D1(e,m.C);n.cJ=n.cJ+1|0;o=n.jd;h=P(HA,1);h.data[0]=AV7(e,0,1,g,b.bv,b.bA);BA(o,h);N1(n,e,0,1,g);Id(f,0,M(g));Na(a,a.d.C-M(g)|0);}}else{b=EE(Bl(a));f=Gr(Bl(a));c=f.R;p=b.R;c=(c-p|0)+1|0;h=BP(c);k=h.data;j=P(BC,c);q=j.data;g=a.d;e=g.C;l=g.z;c=0;while(p<=f.R){g=Cg(a.d.h,p);if(g.t.data.length>0){g=Wt(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JU(h,c);j=CT(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.R)b.bh=Bd(0,b.bh-M(g)|0);if(p==f.R){f.bh=Bd(0,f.bh-M(g)|0);Na(a,a.d.C-M(g)|0);}d=d+1|0;}b=D1(l,e);f=new Vm;f.ur=a;QU(a,h,0,1,j,b,f);}EO(a);c=1;}break a;case 13:if(DD(Bl(a)))Hj(a);b=a.d;Fg(Cg(b.h,b.z));b=a.d;AMX(b.h,b.z,b.C);EO(a);c=CY(a,a.d.z+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ANu(a);}return c;}
function ALw(a,b){var c,d,e,f;a:{switch(b.bc){case 33:c=b.cC?IT(a,IE(a.bF,a.Z),b.bN):Kc(a,2-Wk(Ex(a),a.Z)|0,0,b.dC,b.bN);break a;case 34:c=!b.cC?Kc(a,Wk(Ex(a),a.Z)-2|0,0,b.dC,b.bN):IT(a,((a.bF+Ex(a)|0)/a.Z|0)-1|0,b.bN);break a;case 35:if(!Jn(a,b.bN)&&!DG(a,(Gl(a)).X,b.bN)){c=0;break a;}c=1;break a;case 36:if(!Jn(a,b.bN)&&!DG(a,0,b.bN)){c=0;break a;}c=1;break a;case 37:c=b.cC;if(c&&b.dC){JQ(a);d=a.d.it;e=d.d_;if(e<=0)d=null;else{f=d.fP.data;c=e-1|0;d.d_=c;d=f[c];}if(d===null)c=1;else{CY(a,MK(d),Ls(d),0);Kl(Bl(a),
d.pk);c=1;}break a;}c=Tf(a,(-1),c,b.bN);break a;case 38:c=Kc(a,(-1),b.cC,b.dC,b.bN);break a;case 39:c=b.cC;if(c&&b.dC){d=a.d.it;e=d.d_;if(e==(d.fL-1|0))d=null;else{f=d.fP.data;c=e+1|0;d.d_=c;d=f[c];}if(d===null)c=1;else{CY(a,MK(d),Ls(d),0);Kl(Bl(a),d.pk);c=1;}break a;}c=Tf(a,1,c,b.bN);break a;case 40:c=Kc(a,1,b.cC,b.dC,b.bN);break a;default:}c=0;}if(c&&b.bN){b=(Bl(a)).bM;d=a.d;Ci(b,d.z,d.C);}if(c)Jx(a.d);return c;}
function JQ(a){var b,c,d,e,f,g,h;b=a.d;c=b.it;d=c.d_;c=d<0?null:c.fP.data[d];if(c!==null&&b.z==MK(c)&&a.d.C==Ls(c))return;c=a.d;e=c.it;b=new Ou;d=c.z;f=c.C;c=Bl(a);b.qe=D1(d,f);g=AZS(c);b.pk=g;g.dV=0;f=e.d_;h=e.fL;if(f==(h-1|0))AEb(e,b);else{d=f+1|0;while(d<h){ABn(e);d=d+1|0;}AEb(e,b);}e.d_=e.d_+1|0;}
function EO(a){a.d.h.Bs=Ny(G5(a));}
function It(a,b){var c,d,e,f;a.DE=null;Mp(a.dD,null);c=a.d;a.d=b;LF(c,null,null);LF(b,a,G5(a));d=(B5(a.fX.wp)).data;e=d.length;f=0;while(f<e){d[f].q1(c,b);f=f+1|0;}a.bF=G8(b.nf*a.Z);}
function TY(a,b){var c;c=MF(a.d.h,b);if(c===null)return C(21);return c.y;}
function H2(a,b){var c,d,e,f,g;a.d.l9=b;if(b===null){Bf(Bk(),C(198));Mp(a.dD,null);}else{b=b.data;c=DT(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gG<<24>>24;e=e+1|0;}Mp(a.dD,c);}}
function Jv(a,b){a.d.ra=b;}
function Bl(a){return a.d.si;}
function MD(a){var b;b=a.iV;if(b!==null)b.g(a);}
function AZ_(a){var b,c,d;b=a.d.fM;c=AGI(a);if(b!==null){b=b.gm;d=new J;L(d);H(H(H(d,c),C(199)),b);c=K(d);}return c;}
function AJ9(){var a=this;B.call(a);a.md=null;a.oM=null;a.ht=null;}
function AJk(a,b){var c=new AJ9();AZ1(c,a,b);return c;}
function AZ1(a,b,c){var d,e;a.md=b;a.oM=c;d=null;e=new V$;e.tn=a;b.p8(d,e);b=null;d=new V_;d.sn=a;c.p8(b,d);}
function Z3(a,b,c){var d,e,f,g,h,i,j;d=a.ht;if(d!==null&&d.iS!==null){e=b!==a.md?0:1;f=b.lO();g=(b.k1()+f|0)/2|0;h=g-f|0;d=a.ht;d=d.iS.data[Hc(d,g,e)];i=g-(!e?d.iy:d.iz)|0;j= -(b.h8(f)-(b.lo()).b|0)|0;c.qW(Bb(((!e?d.iz:d.iy)+i|0)-h|0,c.qd())+j|0);return;}}
function U$(){B.call(this);this.CL=null;}
function AOC(a,b){Xv(a.CL,b);}
function U_(){B.call(this);this.Af=null;}
function A5w(a,b){Xv(a.Af,b);}
function Va(){B.call(this);this.yf=null;}
function A18(a,b){return AJd(a.yf,b);}
function GQ(){var a=this;B.call(a);a.pp=null;a.tr=null;a.sJ=null;}
function A_P(a,b){var c=new GQ();Ha(c,a,b);return c;}
function Ha(a,b,c){var d;d=null;a.pp=b.bL;a.tr=d;a.sJ=c;}
function ATk(a,b){var c;if(!AD_(b))return 0;c=a.tr;if(c!==null&&b.bN)Gz(a.pp,c);else F4(a.pp,a.sJ);return 1;}
function AD_(b){return b.cC&&b.bc==79?1:0;}
function U8(){B.call(this);this.wa=null;}
function ATr(a,b){var c,d,e;c=a.wa;d=DA(c.r,c.I)?c.I:!DA(c.r,c.N)?null:c.N;if(d!==null){e=new SH;e.zg=c;e.ze=d;e.zf=b;F_(d,b,e);c.lE=null;c.m8.ht=null;c.f_.eQ=null;}}
function U9(){B.call(this);this.tQ=null;}
function A56(a,b){return ALx(a.tQ,b);}
var CP=G(0);
function AFj(){var a=this;B.call(a);a.G=null;a.bB=null;a.ex=null;}
function Fz(a,b,c,d,e){var f,g;f=AAw(a.G);HQ(f,b,c);b=a.G;c=b.cf;g=new AEC;g.x9=b;g.x8=c;f.kx=g;Tj(f,d,e);H6(a,f);}
function H6(a,b){var c;c=a.ex;if(c!==b)a.ex=BY(c,b);}
function DS(a,b){var c;c=new AEo;c.rH=a;c.rJ=b;return c;}
function NT(a,b){var c;c=new AFy;c.zu=a;c.zv=b;return c;}
function D3(a){var b;b=a.ex;if(b!==null){M2(b);H6(a,null);}}
function DX(a,b){var c,d,e,f;c=a.bB;if(c.cV>0)LA(FG(c,0));c=a.bB;d=c.cV;e=c.dr;if(d==e.data.length)c.dr=CT(e,d+4|0);d=c.cV;f=d;while(0<f){e=c.dr.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dr.data[0]=b;c.cV=d+1|0;c.gJ=null;Lf(b);return b;}
function IW(a,b){if(Pd(a)!==b?0:1)LA(b);Tk(a.bB,b);b=a.bB;if(b.cV>0)Lf(FG(b,0));}
function Kp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B5(a.bB)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.G.bR;d.ba.dY(e);f=d.V;g=d.gL.jM;if(!SU(f)){if(!OX(f)&&!(!f.e8&&f.eo!==null)){f.e8=0;AD4(f);h=f.eX;i=(h.eM+h.e7+5.0)/10.0;j=Cw(f.gH,f.lg);h=e.cu;k=f.eX;l=f.ke;m=i*2.0;Cr(h,k);n=j+L3(h,l,m)|0;f.iN=n;n=Fk(0,n,f.j.a);if(n){h=Eh(e,n,f.j.b,f.gH.cX);Cr(h,f.eX);k=f.ke;m=j;i=m+i;l=f.eX;o=l.eM;B1(h,k,i,m+o-(o+l.e7)/16.0);k=f.eo;if(k===null){k=C4(e);f.eo=k;}CU(k,h);EP(h);Cv(f.nh,0.0,0.0,BV(f.eo),CX(f.eo));}}h=g.mD;k
=f.eo;if(k===null)RC(f,e,0,f.j.a,h);else{j=BV(k);g=g.oS;k=f.i;n=k.a;p=k.b;k=f.eo;DQ(e,n,p,k.fg,f.nh,k,g,h,f.gH.cX);n=f.j.a;if(j<n)RC(f,e,j,n-j|0,h);}}l=d.dJ;if(l!==null){q=d.bi;h=d.V;k=d.gL.jM;if(l.jF!==null){if(l.dH===null)AIj(l,q);n=Cw(q,2.0);j=Bd(0,((h.j.b-CX(l.dH)|0)/2|0)-n|0);l.gM.a=(((h.i.a+h.j.a|0)-j|0)-BV(l.dH)|0)-n|0;f=l.gM;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.k_;j=BV(l.dH);r=n*2|0;Y(f,j+r|0,CX(l.dH)+r|0);f=q.bR;g=l.gM;Bv(f,g.a,g.b,l.k_,!l.mn?k.mD:k.kc);Cv(q.m2,0.0,0.0,BV(l.dH),CX(l.dH));f=q.bR;g=l.gM;n
=g.a+n|0;p=g.b+p|0;g=l.dH;DQ(f,n,p,g.fg,q.m2,g,k.oS,!l.mn?k.mD:k.kc,0);}}Ca(e,1);j=Cw(d.bi,2.0);n=SU(d.V);f=d.bi;g=f.dG;f=f.qL;p=n?0:d.V.j.b;h=d.ba.j;Y(f,h.a,h.b+p|0);AKZ(e,f,!n?d.V.i:d.ba.i,d.gL.jM.kc, -j|0,g);f=d.ba;AMi(e,f.j,f.i,j,p,ZF(d.gL.l6,d.bi.cs),d.gL.l6.oH,g);c=c+(-1)|0;}f=a.ex;if(f!==null)AGg(f);}
function G0(a,b){var c,d,e,f;c=a.G;if(c.cX==b)d=0;else{c.cX=b;J6(c.b9);d=1;}if(d){c=a.ex;if(c!==null){c=B9(c.ct);while(Cb(c)){OR(Cc(c));}}e=(B5(a.bB)).data;b=e.length;f=0;while(f<b){c=e[f];c.V.e8=1;c.ba.kK();f=f+1|0;}}return d;}
function AYg(a,b){var c,d,e,f,g,h,i,j,k;c=a.ex;if(c!==null){d=0;e=c.ct.q-1|0;a:{while(e>=0){d=Ow(BI(c.ct,e),b.k,c.c_.dg);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B5(a.bB)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.k;if(B3(h.V,c)){i=h.dJ;if(i!==null)i.mn=Ut(i,c);e=Ea(h.bi.dg,null);}else{i=h.dJ;if(i!==null)i.mn=0;e=Cw(h.bi,7.0);j=Cw(h.bi,25.0);if(NI(h,c.a,e)){k=YJ(h,c.a,j);if(NS(h,c.b,e)){e=Ea(h.bi.dg,ML(k,C(200)));break b;}if(Ll(h,c.b,e)){e=Ea(h.bi.dg,ML( -k|0,C(200)));break b;}}if(O0(h,c.b,e)){j=AE$(h,
c.b,j);if(Pl(h,c.a,e)){e=Ea(h.bi.dg,ML(j,C(201)));break b;}if(Nm(h,c.a,e)){e=Ea(h.bi.dg,ML( -j|0,C(201)));break b;}}e=0;}}c:{d:{if(!e){if(!B3(h.ba,b.k))break d;if(!h.ba.b3(b)&&!Ea(h.bi.dg,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function APm(a,b,c,d){var e,f,g,h,i,j;e=a.ex;if(e!==null){f=0;g=e.ct.q-1|0;a:{while(g>=0){f=OU(BI(e.ct,g),b.k,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B5(a.bB)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B3(i.V,b.k)&&!QC(i,b.k)){if(!MS(i,b))break c;if(!i.ba.cW(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function ARG(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.ex;if(d!==null){e=null;f=d.ct.q-1|0;a:{while(f>=0){e=BI(d.ct,f);g=b.k;h=Ft(e.cH,g);if(!h&&!LP(e.cH)){e=e.ln;if(e!==null)e.e();}e=!h?null:A_Q;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B5(a.bB);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.k;if(!c){c:{k=Cw(d.bi,7.0);l=Cw(d.bi,25.0);if(NI(d,e.a,k)){m=YJ(d,e.a,l);if(NS(d,e.b,k)){g=KE(d,e,m,(-1));break c;}if(Ll(d,e.b,k)){g=KE(d,e,m,1);break c;}}if(O0(d,e.b,k)){f=AE$(d,e.b,l);if(Pl(d,
e.a,k)){g=KE(d,e,(-1),f);break c;}if(Nm(d,e.a,k)){g=KE(d,e,1,f);break c;}}g=null;}if(g!==null)break b;if(B3(d.V,e)){g=d.dJ;if(g!==null&&Ut(g,e)){d.dJ.jF.e();g=A_Q;break b;}g=d.ba.i;f=g.a;l=e.a;f=f-l|0;k=g.b;m=e.b;k=k-m|0;e=d.V.i;l=e.a-l|0;m=e.b-m|0;e=new Bh;g=new Ua;g.tj=d;g.tk=l;g.te=m;g.tg=e;g.th=f;g.ti=k;break b;}}g=null;}f=g===null&&!MS(d,b)?0:1;k=!c&&d!==Pd(a)&&f?1:0;if(k){e=a.bB;l=0;j=e.dr.data;m=j.length;d:{while(true){if(l>=m){l=(-1);break d;}if(d===j[l])break;l=l+1|0;}}if(l>0)Vc(a,l);}if(g===null&&
f)g=d.ba.cE(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function Vc(a,b){var c,d,e,f,g;LA(FG(a.bB,0));c=a.bB;d=c.cV;if(d<=b){c=new O1;Bn(c,Iu(b));N(c);}if(b){e=c.dr;f=e.data;g=f[b];while(b>0){f[b]=f[b-1|0];b=b+(-1)|0;}f[0]=g;f=c.gJ;if(f!==null)Db(e,0,f,0,d);}Lf(FG(a.bB,0));}
function AFR(a){var b;b=a.bB.cV;if(b>1)Vc(a,b-1|0);}
function A6v(a,b,c){var d,e,f,g,h;d=a.ex;if(d!==null&&J4(d))return 1;e=(B5(a.bB)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B3(d.V,b.k)){if(!MS(d,b))break b;if(!d.ba.d1(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A1Z(a,b,c){var d,e,f,g,h;d=(B5(a.bB)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.ba;h.d0(h.i,h.j,c);h=g.V;if(h.h4!==null){h.eX=null;h.iN=0;h.e8=1;}IZ(g);h=g.dJ;if(h!==null)Ox(h);f=f+1|0;}}
function Pd(a){var b;b=a.bB;return b.cV<=0?null:FG(b,0);}
function UN(){var a=this;B.call(a);a.bR=null;a.b9=null;a.dg=null;a.bX=null;a.cs=0.0;a.cX=0;a.cf=null;a.dz=null;a.dG=null;a.qL=null;a.m2=null;a.DA=null;}
function Lo(a){var b;b=a.cf;if(b!==null)b.vK();}
function LD(a){var b;b=a.cf;if(b!==null)b.xA();}
function NB(a,b){var c;c=a.b9.eS!==(EL()).activeElement?0:1;if(c)LD(a);a.cf=b;if(c)Lo(a);}
function Cx(a,b){if(a.cf!==b){LD(a);a.cf=b;Lo(a);}}
function AC8(a,b){if(a.cf===b)a.cf=null;}
function DA(a,b){return b!==a.cf?0:1;}
function KU(a){return a.bR.cu;}
function FB(a,b){return GZ(a.bR,b.iC,b.hu*a.cs,b.kD,0);}
function Cw(a,b){return Ck(b,a.cs);}
function K6(a,b){var c;c=a.bR;if(!a.cX)c.qA=b;else c.oZ=b;J6(a.b9);}
function A5o(a,b,c){var d;d=a.cf;return d!==null&&d.fB(b,c)?1:0;}
function A3h(a){var b;b=a.cf;return b===null?null:b.AL();}
function XD(){B.call(this);this.w8=null;}
function A6o(a,b,c,d){var e,f,g,h;e=(B5(a.w8.bB)).data;f=e.length;g=0;a:{while(g<f){if(e[g].ba.dZ(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function XC(){B.call(this);this.ux=null;}
function APo(a,b){var c,d,e,f;c=a.ux;b=b.k;d=0;e=c.bB.cV;a:{while(d<e){f=FG(c.bB,d);if(!B3(f.V,b)&&!QC(f,b)&&!AD3(f,b)?0:1){c=FG(c.bB,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.xZ;if(c!==null&&AKm(c.xL,b)?1:0){d=1;break b;}}d=0;}return d;}
function AG3(){var a=this;B.call(a);a.ff=null;a.pE=0.0;a.i3=0.0;a.hN=0;}
function A1d(){var a=new AG3();AUF(a);return a;}
function AUF(a){var b;b=Ui(0,0,2,20);a.ff=b;a.pE=0.5;a.i3=0.0;Ja(187,187,187,255,b.be);}
function T$(a){return a.ff.v.a;}
function ACK(a,b){var c,d;a:{c=a.hN;if(b>a.i3)while(true){d=a.i3+a.pE;a.i3=d;a.hN=a.hN?0:1;if(b>d)continue;else break a;}}return a.hN==c?0:1;}
function Vs(a,b,c){Y(a.ff.x,b,c);}
function Z2(a,b){a.i3=b+a.pE*1.25;a.hN=1;}
function AMd(a,b){return AGF(a.ff.x,0,0,b);}
function ADO(a,b,c){if(a.hN)ABg(a.ff,b,c.a,c.b);}
function AFG(){var a=this;B.call(a);a.fM=null;a.h=null;a.qz=null;a.si=null;a.it=null;a.j2=null;a.fy=null;a.l9=null;a.z=0;a.C=0;a.iT=0;a.jo=null;a.i7=null;a.p6=null;a.fA=0;a.g_=0;a.hr=0;a.jA=F1;a.BS=F1;a.Cs=F1;a.ra=0;a.FX=0;a.ei=0;a.nf=0.0;a.gi=0;}
function A82(a,b,c){var d=new AFG();ANf(d,a,b,c);return d;}
function AQz(a,b){var c=new AFG();AT6(c,a,b);return c;}
function A89(a,b,c){var d=new AFG();WY(d,a,b,c);return d;}
function ANf(a,b,c,d){WY(a,(AKB(b)).kP,c,d);}
function AT6(a,b,c){WY(a,b,null,c);}
function WY(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.si=AOS();f=new UL;f.fP=P(Ou,16);f.fL=0;f.d_=(-1);a.it=f;a.jo=null;a.i7=BO();a.p6=BO();a.fA=1;a.g_=1;a.hr=1;a.ei=0;a.nf=0.0;a.gi=0;a.fM=d;a.qz=c;c=new ABh;g=e.length;b=P(DO,Bd(1,g));if(!g)b.data[0]=Za(C(21));h=b.data;i=0;while(i<g){h[i]=Za(e[i]);i=i+1|0;}d=new ZM;f=new Or;RL(f);d.fz=f;c.fr=d;c.ee=Ks();c.d6=Ks();c.jd=BO();if(!h.length){c=new BU;X(c);N(c);}c.F=b;j=AD1(c);c.dI=AIN(AWD(Lt(0,j,0),null,null));a.h=c;}
function Eo(a){var b;b=a.qz;if(b===null){b=a.fM;b=b===null?C(183):AJP(b.gm);}return b;}
function H5(a){var b;b=a.fM;return b===null?null:b.kZ;}
function M3(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.g_=3;a.hr=3;a.fA=3;c=CL(b[0]);d=E6(b[1]);CL(b[2]);if(b.length<5)ON(a.h,c,d);else{e=CL(b[3]);f=e.data;g=E6(b[4]);YU(a.h,c,d,e,g,0);UW(a,JU(e,f.length),O6(g));}if(a.gi){h=Fh(a);i=Kn(EN(),a.jA);j=new J;L(j);H(Ic(H(H(j,h),C(202)),i),C(203));$rt_globals.console.info($rt_ustr(K(j)));}h=a.j2;if(h!==null)MD(h);}
function Jx(a){var b;TH(a,D1(a.z,a.C),JK(a.h,a.z,a.C));if(!(a.jo!==null&&!EU(a.i7))){b=a.C;if(b>0)TH(a,D1(a.z,b-1|0),JK(a.h,a.z,a.C-1|0));}}
function TH(a,b,c){var d,e,f,g,h,i,j,k;a.jo=null;I3(a.i7);d=CC(a.h.ee,c);if(d!==null)c=d;a:{e=CC(a.h.d6,c);if(e!==null){a.jo=MF(a.h,c);c=B9(e);while(true){if(!Cb(c))break a;f=Cc(c);BA(a.i7,MF(a.h,f));}}}c=a.j2;if(c!==null){g=b.bv;h=b.bA;b=c.fX;f=Eo(c.d);e=H5(c.d);i=(B5(b.wL)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.CG(f,e)){b=b.Fg;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new PI;e.Eq=c;e.Er=f;e.Eo=g;e.Ep=h;b.uV(f,g,h,e,c.kE);}}}
function UW(a,b,c){var d,e,f,g,h;if(a.fy!==null){a.Cs=EN();d=a.h.cJ;e=a.fy;f=new ZG;f.Ax=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BP(1);b.data[0]=d;h[2]=b;CG(e,f,C(204),g);}}
function LF(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.j2=b;a.fy=c;if(c===null){d=a.h.F.data;e=d.length;f=0;while(f<e){Ux(d[f]);f=f+1|0;}}else if(a.fA==1){a.jA=EN();b=Eo(a);if(BR(b,C(183))){a.g_=3;a.hr=3;a.fA=3;b=a.j2;if(b!==null)MD(b);}else{e=BR(b,C(194));f=BR(b,C(205));d=Fr(a.h);g=d.data.length;h=!e?5120:10240;i=AJ8(b);if(f)Kq(a,d,i);else if(g<=h)Kq(a,d,i);else if(!e){WP(a,O6(d),i);Kq(a,d,i);}else{WP(a,O6(d),i);j=O6(d);k=a.fy;c=new R2;c.Az=a;l=P(B,2);m=l.data;m[0]=j;j=BP(1);j.data[0]=i;m[1]=j;CG(k,c,C(206),l);a.g_=
2;Kq(a,d,i);}}}}
function WP(a,b,c){var d,e;d=a.fy;e=new Wn;e.AW=a;CG(d,e,C(207),I(B,[b,D_([c,250])]));a.hr=2;}
function Kq(a,b,c){var d,e,f,g;d=a.fy;e=new Ys;e.y9=a;f=P(B,2);g=f.data;g[0]=b;b=BP(1);b.data[0]=c;g[1]=b;CG(d,e,C(208),f);a.fA=2;}
function Fh(a){var b;b=a.fM;return b===null?C(21):AD7(b);}
function M1(a){var b,c,d,e,f;if(a.gi){b=Fh(a);c=new J;L(c);H(H(c,b),C(209));$rt_globals.console.info($rt_ustr(K(c)));}b=Eo(a);if(b===null)d=null;else{a:{e=(-1);switch(Kz(b)){case -1655966961:if(!Bj(b,C(205)))break a;e=3;break a;case 3401:if(!Bj(b,C(210)))break a;e=2;break a;case 98723:if(!Bj(b,C(211)))break a;e=1;break a;case 3254818:if(!Bj(b,C(194)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(212);break b;case 2:d=C(213);break b;case 3:d=C(214);break b;default:d=null;break b;}d=C(215);}}if
(d===null)MD(a.j2);else{a.jA=EN();b=a.fy;c=new AC1;c.wq=a;f=P(B,1);f.data[0]=Fr(a.h);CG(b,c,d,f);}}
function O5(a){var b;b=AXr(a.h.fr,null);Yr(b);UW(a,b.po,b.nt);}
function AFw(){var a=this;B.call(a);a.zF=null;a.Dh=null;a.rk=null;a.wL=null;a.wp=null;a.Cc=null;}
function Pb(a,b,c){return SE(a,B5(a.zF),b,c);}
function AAE(a,b,c){return SE(a,B5(a.Dh),b,c);}
function SE(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.CG(c,d))return g.F9;f=f+1|0;}return null;}
function ADr(a,b,c){var d,e,f,g;d=(B5(a.rk)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.CG(b,c))return g.F4;f=f+1|0;}return null;}
function FK(){var a=this;B.call(a);a.cn=0;a.dy=null;a.c1=null;a.e3=null;a.d$=0;}
var A_R=0;var A_N=0;function YY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.c1;j=i===b&&!i.jP?0:1;if(j){a.c1=b;Oa(b,c.cu,a.dy.hD);}k=IE(Be(FY(b),e+2048|0),1024);l=a.e3;m=l.data.length;n=k<=m?0:1;if(n){a.e3=CT(l,k);while(m<k){a.e3.data[m]=C4(c);m=m+1|0;}}o=a.dy.h9;if(!(!j&&!n)){if(A_R){l=b.gW;$rt_globals.console.info("fMeasure"+l.data);A_R=0;}if(!A_N){c=o.dB;b="alphabetic";c.textBaseline=b;}else{b=o.dB;c="top";b.textBaseline=c;}a.d$=f/1024|0;p=0;while(p<k){KP(a,o,d,a.d$+p|0);p=p+1|0;}a.c1.jP=0;}e=a.e3.data.length;if
(e&&f<=FY(a.c1)){f=f/1024|0;g=a.d$;if(f!=g){if(XI(f-g|0)>=e){g=0;while(g<e){KP(a,o,d,f+g|0);g=g+1|0;}a.d$=f;}else{while(true){g=a.d$;if(g>=f)break;KP(a,o,d,g+e|0);a.d$=a.d$+1|0;}while(true){g=a.d$;if(g<=f)break;KP(a,o,d,g-1|0);a.d$=a.d$-1|0;}}}}}
function KP(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=ZE(a,e);g=a.c1;if(f>=g.t.data.length)return;h=g.gW;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cn;l=a.dy.hD;E8(b);a:{while(true){g=a.c1;if(f>=g.t.data.length)break a;m=l.data;g=Ku(g,f);n=m[Ld(g)];o=!A_N?Mn(n,c):NX(n,c);m=h.data;Cr(b,n);B1(b,g.y,k,o);k=m[f]-j+a.cn;if(k>1024.0)break;f=f+1|0;}}h=a.e3.data;CU(h[d%h.length|0],b);}
function Q9(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.e3.data.length;if(!o)return;if(g>FY(a.c1))return;p=a.c1;q=p.fk;r=p.t;s=g/1024|0;t=ZE(a,g);u= -a.cn|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.e3.data[s%o|0];bb=w[t];bc=z[t]+a.cn|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.cn|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cn:2*a.cn|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cn:2*a.cn|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.by.g1;if(bb===j)bo=h.by.se;if(k!==null){p=B9(k);d:{while(Cb(p)){if(BR(Cc(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.by.xz;}if(n!==null){w=n.oj;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AF1(h.d7,h,bi,n.gG);}if(!bn&&!bl){i.b=Be(i.b,FY(a.c1));AHV(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.cn:0)|0,(g
+bg|0)<=(i.b+(!y?a.cn:2*a.cn|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.cn:0)|0,g-x|0,bo);}else{bp=h.kj.data[bb.b8];p=bn?h.by.lu:Uf(bo,Yf(h,bp.np));Cv(a.dy.j1,g-x|0,0.0,bg,v);Y(a.dy.iK,bg,f);HD(a.dy,d,ba,u+c|0,b,bp.hB,p);}if((bb.bK&12)>>2>0){bc=u+c|0;Ca(d,1);p=a.dy;bq=p.ol;bq.a=bg;x=b+p.vl|0;bk=x-p.C4|0;br=p.ru;bs=x+br;ba=p.hW;Vd();MP(d,bc,bk,bq,br,bs,ba,A_S.lH.hB);Ca(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AHV(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kj.data[h.b8];o=n.hB;p=Uf(m,Yf(f,n.np));q=f.by.lu;f=a.dy;r=f.j1;s=f.iK;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);Y(s,u,e);HD(a.dy,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.dy;c=c+i|0;HD(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);Y(s,i,e);HD(a.dy,b,g,c-j|0,d,o,q);}
function Uf(b,c){if(b!==null)c=b;return c;}
function ZE(a,b){var c,d,e,f,g,h,i;c=a.c1;d=c.gW;e=0;f=c.t.data.length;g=b;b=BQ(e,f);if(b>0){c=new BU;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BQ(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AFN(a){var b,c,d;b=a.e3.data;c=b.length;d=0;while(d<c){AIn(b[d]);d=d+1|0;}a.e3=a.dy.oy;a.c1=null;}
function AKM(a,b,c,d,e,f,g,h,i){var j,k;j=FY(a.c1);if(j)j=j+a.cn|0;if(!j)j=j-a.cn|0;k=Bd( -a.cn|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bv(b,c+k|0,d,f,i);}
function AAI(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FK,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.vo(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.c1===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FK;g.cn=3;g.d$=0;g.dy=d;g.e3=d.oy;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AFN(q);j=j+1|0;}return i;}
function T8(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].c1;if(e!==null)e.jP=1;d=d+1|0;}}
function Pa(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AFN(b[d]);d=d+1|0;}}
function AHY(){A_N=0;}
function AJB(){var a=this;B.call(a);a.gB=null;a.dQ=null;a.ft=null;a.f7=null;a.pg=null;a.o4=null;}
function JL(){var a=new AJB();A1O(a);return a;}
function A1O(a){a.gB=new Bh;a.dQ=new Bh;a.ft=new Bh;a.f7=new Bh;a.pg=new B4;a.o4=new B4;}
function AAY(a){var b;b=a.dQ;return !Bb(b.a,b.b)?0:1;}
function Ji(a,b){return GI(b,a.ft,a.f7);}
function Gp(a,b,c,d){var e,f,g,h,i;e=Ji(a,b);f=GI(b,a.gB,a.dQ);if(!e&&!f)return null;if(!f){if(!d)c.g(Wv(a,b.a-a.ft.a|0));else c.g(RE(a,b.b-a.ft.b|0));}g=!d?a.gB.a+(a.dQ.a/2|0)|0:a.gB.b+(a.dQ.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new To;b.w2=a;b.w3=c;b.w1=i;}else{b=new Tn;b.sw=a;b.su=c;b.sv=i;}return b;}
function IA(a,b,c){if(c!==null)BL(a.pg,c);if(b!==null)BL(a.o4,b);}
function AHc(b,c){var d;d=new ADB;d.ut=b;d.Dt=c;return d;}
function RE(a,b){var c,d,e;c=a.f7.b;d=a.dQ.b;e=c-d|0;return AHc(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Wv(a,b){var c,d,e;c=a.f7.a;d=a.dQ.a;e=c-d|0;return AHc(Be(Bd(0,b-(d/2|0)|0),e),e);}
function KY(a,b,c,d,e,f,g){WC(a,b,c,d,e,f,g,1);}
function Su(a,b,c,d,e,f,g){WC(a,b,c,d,e,f,g,0);}
function WC(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(Z$(d,d,e),i);e=e-d|0;i=d-j|0;i=i?Z$(b,i,e):0;if(!h){k=a.gB;k.a=i+c|0;k.b=f-g|0;l=a.dQ;l.a=j;l.b=g;l=a.ft;l.a=c;l.b=k.b;k=a.f7;k.a=d;k.b=g;break a;}k=a.gB;k.a=f-g|0;k.b=i+c|0;l=a.dQ;l.a=g;l.b=j;l=a.ft;l.a=k.a;l.b=c;k=a.f7;k.a=g;k.b=d;break a;}}Y(a.f7,0,0);Y(a.dQ,0,0);}}
function WR(a,b){Hl(a,b);Hq(a,b);}
function Hl(a,b){var c;c=a.ft;Bv(b,c.a,c.b,a.f7,a.pg);}
function Hq(a,b){var c,d;c=a.dQ;c.a=c.a-2|0;c.b=c.b-2|0;d=a.gB;Bv(b,d.a+1|0,d.b+1|0,c,a.o4);b=a.dQ;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gw(a,b,c){return Ji(a,b)&&G$(c)?1:0;}
function AG2(){var a=this;B.call(a);a.Gk=20;a.g9=null;a.fT=null;a.l2=0.0;a.lZ=null;a.jV=0;a.lp=0;a.hQ=0;a.dp=null;a.pi=null;a.fF=null;a.hj=null;a.hh=0;}
function AJt(){var a=new AG2();A6H(a);return a;}
function A6H(a){a.Gk=20;a.g9=new Bh;a.fT=new Bh;a.dp=BO();a.pi=DT(0);}
function ADl(a,b,c){var d,e,f,g,h;d=a.hh;if(b==d)return;e=a.dp.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){SV(a,b);a.hh=b;}else{Y$(a,c);if(a.hh>=b)while(true){if(h<g)break a;a.hh=Qd(BI(a.dp,h%e|0),a.fF,a.hj,a.hh,b,f,a.l2);h=h+(-1)|0;}while(g<=h){a.hh=Qd(BI(a.dp,g%e|0),a.fF,a.hj,a.hh,b,f,a.l2);g=g+1|0;}}}}
function Mp(a,b){if(b===null)b=DT(0);a.pi=b;}
function ACC(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hQ;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.dp;h=BI(h,g%h.q|0);i=a.g9;j=a.pi;k=h.fR.b;l=d.lK;m=b+f|0;n=h.cN;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&Xn(d,j,r,l)!==l.lD?0:1){k=Bb((q-p|0)+1|0,h.cN);Y(h.jN,BV(h.da),k);Cv(h.kt,0.0,Bb(p,h.cN),BV(h.da),k);t=r;}else{u=Xn(d,j,r,l);N2(h,e,f+Bb(p,h.cN)|0,i,l.pH,u);Y(h.jN,BV(h.da),h.cN);Cv(h.kt,0.0,Bb(q,h.cN),BV(h.da),h.cN);p=q;}q=q+1|0;r=t;}u=Xn(d,j,r,l);N2(h,
e,f+Bb(p,h.cN)|0,i,l.pH,u);g=g+1|0;f=f+a.hQ|0;}}
function T6(a,b,c,d){var e,f,g,h,i,j;e=a.dp.q;while(true){f=a.dp.q;g=Bb(f,a.hQ);if(g>(d+a.lp|0))break;h=BK(0,g);i=new RK;g=a.fT.a;f=a.lp;j=a.lZ;i.jN=new Bh;i.kt=new B4;i.qY=h;i.eB=20;i.cN=f;i.fR=BK(g,20*f|0);i.h0=Mn(j,f);if(i.da===null)i.da=C4(b);BA(a.dp,i);}if(f==e)return;Y$(a,b);SV(a,c);}
function SV(a,b){var c,d,e,f,g,h,i,j,k;c=a.dp;d=c.q;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B9(c);while(Cb(c)){f=Cc(c);g=a.fF;h=a.l2;E8(g);i=0;while(true){j=f.eB;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;Hf(f,g,Dp(e),Bb(f.cN,i)+f.h0|0,h);i=i+1|0;}CU(f.da,g);f.x_=g.jQ;}}
function Z7(a,b,c,d){a.lZ=b;a.lp=c;a.hQ=c*20|0;a.jV=d;Z9(a);}
function Y$(a,b){var c;c=a.fF;if(!(c!==null&&c.jQ==a.jV)){c=Eh(b,a.fT.a,a.hQ,a.jV);a.fF=c;Cr(c,a.lZ);ABC(a.fF,2);}c=a.hj;if(!(c!==null&&c.jQ==a.jV)){b=Eh(b,a.fT.a,a.lp,a.jV);a.hj=b;Cr(b,a.lZ);ABC(a.hj,2);}}
function I9(a){FL(a.dp,new AFp);I3(a.dp);Z9(a);}
function Z9(a){a.fF=BY(a.fF,null);a.hj=BY(a.hj,null);}
function Tq(a,b,c,d,e){Ct(a.g9,b);Y(a.fT,c,d);a.l2=e;}
function YO(){B.call(this);this.ES=null;}
function YN(){B.call(this);this.q9=null;}
function AOQ(a,b){var c;c=a.q9;Gn(c,Gg(b,Lx(c)));}
function YM(){B.call(this);this.ui=null;}
function AN6(a,b){var c;c=a.ui;Jg(c,Gg(b,ACI(c)));}
function AMk(){var a=this;B.call(a);a.j1=null;a.iK=null;a.ol=null;a.hW=null;a.hD=null;a.oy=null;a.dA=null;a.h9=null;a.ru=0.0;a.d9=0;a.vl=0;a.C4=0;a.jh=0;}
function ASA(a){var b=new AMk();AWn(b,a);return b;}
function AWn(a,b){var c;a.j1=new B4;a.iK=new Bh;a.ol=new Bh;c=new B4;a.hW=c;a.hD=P(Mb,4);a.oy=P(I0,0);a.jh=b;Me(c);}
function ZH(a){a.h9=BY(a.h9,null);}
function Tu(a,b,c){var d,e;d=C6(Fl(a.dA)*b);a.d9=d;e=a.dA;a.vl= -( -((d+e.eM+e.e7)/2.0)|0)|0;AFT(a,c);return a.d9;}
function QN(a,b){var c,d;Me(a.hW);c=a.hW;Wj(c,b,c);a.ru=Yp(a.hW);c=a.hW;d=c.bw+c.bj+1.5|0;a.C4=d;Y(a.ol,0,d*2|0);}
function AFT(a,b){a.h9=BY(a.h9,Eh(b,1024,a.d9,a.jh));}
function HD(a,b,c,d,e,f,g){var h,i;h=a.iK;if(h.a&&h.b){i=a.j1;if(i.bG!==0.0&&i.bj!==0.0){DQ(b,d,e,h,i,c,f,g,a.jh);return;}}}
function YL(){B.call(this);this.Cq=null;}
function AYk(a){var b,c;b=a.Cq;c=b.kG?0:1;b.kG=c;b=new J;L(b);J7(H(b,C(216)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function YS(){B.call(this);this.yK=null;}
function A0P(a){var b,c;b=a.yK;c=b.lw^1;b.lw=c;b=new J;L(b);J7(H(b,C(217)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function YR(){B.call(this);this.ve=null;}
function A7E(a){var b,c,d,e,f;b=a.ve;c=(b.eD+3|0)%6|0;b.eD=c;d=b.fj.data;e=d.length;f=0;while(f<e){b=d[f];b.cn=c;b=b.c1;if(b!==null)b.jP=1;f=f+1|0;}}
function YQ(){B.call(this);this.xC=null;}
function ASI(a){var b;b=a.xC;b.cc=b.cc?0:1;I9(b.dD);b.dD=AJt();OK(b);AB9(b,b.i,b.j,b.ci.cs);}
function YP(){B.call(this);this.rX=null;}
function AUB(a){var b;b=a.rX;b.ms=b.ms?0:1;}
function YK(){B.call(this);this.AO=null;}
function A63(a){var b;b=a.AO;b.qD=b.qD?0:1;}
function V$(){B.call(this);this.tn=null;}
function ASL(a){var b;b=a.tn;Z3(b,b.md,b.oM);}
function V_(){B.call(this);this.sn=null;}
function A3X(a){var b;b=a.sn;Z3(b,b.oM,b.md);}
var AIe=G();
function N9(){B.call(this);this.EL=null;}
var A_r=null;var A_T=null;function A1P(){A1P=Bm(N9);A7p();}
function AQj(a){var b=new N9();AJ0(b,a);return b;}
function AJ0(a,b){A1P();a.EL=b;}
function A7p(){A_r=AQj(C(218));A_T=AQj(C(219));}
var AGA=G(0);
function AKU(b,c,d){return Ja(b,c,d,255,new B4);}
function Ja(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function WI(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ARh(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bs=g+i;e.bw=h+i;e.bj=j+i;return e;}
function I2(b,c,d,e,f){f=WI(b,c,d,f);f.bG=e;return f;}
function In(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var ABx=G();
function AUf(a,b){var c,d,e;c=b.cC;d=c&&!b.bN&&!b.dC&&!b.i8?1:0;a:{if(d){d=b.bc;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bN&&!c&&!b.dC&&!b.i8?1:0;d=d&&b.bc==46?1:0;}b:{if(!d){e=b.bc;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.pt=1;}return 0;}
function ABw(){B.call(this);this.yE=null;}
function AXN(a,b){var c;c=a.yE.cf;return c!==null&&c.bl(b)?1:0;}
function UZ(){var a=this;B.call(a);a.bi=null;a.xZ=null;a.i5=null;a.i1=null;a.V=null;a.dJ=null;a.ba=null;a.gL=null;a.qy=0;}
function AGf(a){var b=new UZ();AUq(b,a);return b;}
function A6N(a,b){var c=new UZ();AHb(c,a,b);return c;}
function AUq(a,b){AHb(a,b,AXR());}
function AHb(a,b,c){var d;a.bi=b;d=new VI;Fi(d);d.nh=new B4;d.gH=b;a.V=d;a.ba=c;}
function UB(a,b){var c,d;if(a.dJ===null){c=new RD;c.gM=new Bh;c.k_=new Bh;a.dJ=c;d=a.gL;if(d!==null)ABY(c,d);}a.dJ.jF=b;}
function Lf(a){var b;b=a.i5;if(b!==null)b.e();}
function LA(a){var b;b=a.i1;if(b!==null)b.e();}
function CZ(a,b){var c;c=a.V;c.e8=c.e8|(BR(c.ke,b)?0:1);c.ke=b;IZ(a);}
function ABZ(a,b,c){var d,e,f;d=a.V;e=BR(d.h4,b)?0:1;f=c===d.lg?0:1;if(e){d.h4=b;d.eX=null;Rw(d,0);}d.e8=d.e8|(!e&&!f?0:1);d.lg=c;d.iN=0;IZ(a);}
function Ev(a,b){var c;a.gL=b;c=b.uk;BG(b);ABZ(a,c,3.0);c=a.dJ;if(c!==null)ABY(c,b);}
function Kx(a){var b;b=a.V;b.eo=BY(b.eo,null);b.eX=null;a.ba=BY(a.ba,null);b=a.dJ;if(b!==null){Ox(b);b.jF=null;}}
function LO(a,b){var c,d,e;c=a.ba;d=c.i;e=c.j;b=BY(c,b);a.ba=b;b.d0(d,e,a.bi.cs);}
function EJ(a,b,c){a.ba.d0(b,c,a.bi.cs);IZ(a);}
function IZ(a){var b,c,d;if(a.bi.cs!==0.0){b=a.V;if(b.h4!==null){c=a.ba.j.a;b.j.a=c;d=b.eo;if(d!==null&&c!=BV(d)&&!(c>=b.iN&&BV(b.eo)>=b.iN))b.e8=1;b=a.V;b.b1=a.bi.cs;if(OX(b))c=0;else{b=a.V;Rw(b,WX(b));c=b.j.b;}b=a.V.i;d=a.ba.i;Y(b,d.a,d.b-c|0);b=a.dJ;if(b!==null)Ct(b.gM,a.V.i);return;}}}
function AEi(a){return WX(a.V);}
function MS(a,b){return AD3(a,b.k);}
function AD3(a,b){var c;c=!(a.qy&1)?0:1;return !c&&!B3(a.ba,b)?0:1;}
function ML(b,c){if(b<0)c=C(220);else if(b>0)c=C(221);return c;}
function Pl(a,b,c){var d;d=a.V.i.a;return (d-c|0)<=b&&b<d?1:0;}
function Nm(a,b,c){var d,e;d=a.V;e=d.i.a+d.j.a|0;return e<=b&&b<(e+c|0)?1:0;}
function NS(a,b,c){var d;d=a.V.i.b;return (d-c|0)<=b&&b<d?1:0;}
function Ll(a,b,c){var d,e;d=a.ba;e=d.i.b+d.j.b|0;return e<=b&&b<(e+c|0)?1:0;}
function O0(a,b,c){var d,e,f;d=a.V.i.b-c|0;e=a.ba;f=(e.i.b+e.j.b|0)+c|0;return d<=b&&b<f?1:0;}
function AE$(a,b,c){var d,e;d=a.V.i.b+c|0;e=a.ba;return ALm(b,d,(e.i.b+e.j.b|0)-c|0);}
function NI(a,b,c){var d,e,f;d=a.V;e=d.i.a;f=e-c|0;e=(e+d.j.a|0)+c|0;return f<=b&&b<e?1:0;}
function YJ(a,b,c){var d,e;d=a.V;e=d.i.a;return ALm(b,e+c|0,(e+d.j.a|0)-c|0);}
function ALm(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BQ(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function QC(a,b){var c;a:{b:{c:{c=Cw(a.bi,7.0);if(NI(a,b.a,c)){if(NS(a,b.b,c))break c;if(Ll(a,b.b,c))break c;}if(!O0(a,b.b,c))break b;if(!Pl(a,b.a,c)&&!Nm(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function KE(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.a;h=b.b;b=a.ba;i=b.i;j=i.a;k=i.b;b=b.j;l=b.a;m=b.b;b=new U3;b.t$=a;b.t7=e;b.t6=f;b.t9=c;b.t8=g;b.ub=j;b.ua=l;b.ud=d;b.uc=h;b.t_=k;b.s4=m;return b;}
function Nz(a){var b;b=a.dJ;if(b!==null){b.jF.e();return;}b=new Go;X(b);N(b);}
function KW(){var a=this;B.call(a);a.x=null;a.v=null;a.be=null;a.bt=null;}
function Tz(){var a=new KW();ADP(a);return a;}
function Ui(a,b,c,d){var e=new KW();APr(e,a,b,c,d);return e;}
function ADP(a){a.x=new Bh;a.v=new Bh;a.be=new B4;a.bt=new B4;}
function APr(a,b,c,d,e){a.x=new Bh;a.v=new Bh;a.be=new B4;a.bt=new B4;HI(a,b,c,d,e);}
function HI(a,b,c,d,e){Y(a.x,b,c);Y(a.v,d,e);}
function ACL(a){Y(a.v,0,0);}
function LP(a){var b;b=a.v;return Bb(b.a,b.b)?0:1;}
function Ft(a,b){return GI(b,a.x,a.v);}
function ABg(a,b,c,d){var e;e=a.x;Bv(b,e.a+c|0,e.b+d|0,a.v,a.be);}
function Xc(a,b,c,d,e,f){var g,h,i,j;g=a.x;d=g.a+d|0;e=g.b+e|0;g=a.v;h=a.bt;i=a.be;GV(b,b.jm);G7(b.jm,b.bf,d,e,g,b.dt);OF(b.jm,b.bf,c);g=b.jm;j=b.bf;FW(j,g.xo,h);FW(j,g.xm,i);c=g.tM;j.uniform2f(c,f,0.0);Gm(b);}
var FE=G();
function N7(){FE.call(this);this.F9=null;}
function ACv(){FE.call(this);this.F4=null;}
function AAe(){FE.call(this);this.Fg=null;}
var Gy=G(0);
var TG=G(0);
function B4(){var a=this;B.call(a);a.bs=0.0;a.bw=0.0;a.bj=0.0;a.bG=0.0;}
function AFE(a,b,c,d){var e=new B4();A4z(e,a,b,c,d);return e;}
function ANm(a){var b=new B4();AMl(b,a);return b;}
function A4z(a,b,c,d,e){a.bs=b;a.bw=c;a.bj=d;a.bG=e;}
function Cv(a,b,c,d,e){a.bs=b;a.bw=c;a.bj=d;a.bG=e;}
function AMl(a,b){a.bs=b.bs;a.bw=b.bw;a.bj=b.bj;a.bG=b.bG;}
function BL(a,b){a.bs=b.bs;a.bw=b.bw;a.bj=b.bj;a.bG=b.bG;return a;}
function AXy(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BF(a)===BF(b)){b=b;if(b.bs===a.bs&&b.bw===a.bw&&b.bj===a.bj&&b.bG===a.bG?1:0){c=1;break a;}}c=0;}return c;}
function APn(a){var b,c,d,e,f;b=a.bs;c=a.bw;d=a.bj;e=a.bG;f=new J;L(f);Dg(H(Dg(H(Dg(H(Dg(H(f,C(71)),b),C(72)),c),C(222)),d),C(223)),e);return K(f);}
var JF=G(0);
function AKt(){var a=this;EF.call(a);a.cw=null;a.q=0;}
function BO(){var a=new AKt();AQX(a);return a;}
function AQX(a){a.cw=P(B,10);}
function Nt(a,b){var c,d;c=a.cw.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cw=CT(a.cw,d);}}
function BI(a,b){La(a,b);return a.cw.data[b];}
function A3B(a){return a.q;}
function BA(a,b){var c,d;Nt(a,a.q+1|0);c=a.cw.data;d=a.q;a.q=d+1|0;c[d]=b;a.ca=a.ca+1|0;return 1;}
function ALB(a,b,c){var d,e,f;Rx(a,b);Nt(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cw.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cw.data[b]=c;a.q=d+1|0;a.ca=a.ca+1|0;}
function E2(a,b){var c,d,e,f;La(a,b);c=a.cw.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.ca=a.ca+1|0;return d;}
function AI1(a,b){var c;c=LL(a,b);if(c<0)return 0;E2(a,c);return 1;}
function I3(a){AGM(a.cw,0,a.q,null);a.q=0;a.ca=a.ca+1|0;}
function AKG(a,b,c){var d,e,f,g,h,i;Rx(a,b);if(c.e6())return 0;Nt(a,a.q+c.dc()|0);d=c.dc();e=a.q;f=e-1|0;while(f>=b){g=a.cw.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.cj();i=0;while(i<d){g=a.cw.data;e=b+1|0;g[b]=h.cl();i=i+1|0;b=e;}a.ca=a.ca+1|0;return 1;}
function La(a,b){var c;if(b>=0&&b<a.q)return;c=new BJ;X(c);N(c);}
function Rx(a,b){var c;if(b>=0&&b<=a.q)return;c=new BJ;X(c);N(c);}
function FL(a,b){var c;c=0;while(c<a.q){b.g(a.cw.data[c]);c=c+1|0;}}
function AMp(a){var b,c,d,e;b=a.q;if(!b)return C(22);c=b-1|0;d=new J;Gd(d,b*16|0);Br(d,91);b=0;while(b<c){e=a.cw.data;BM(H(d,e[b]!==a?e[b]:C(224)),C(38));b=b+1|0;}e=a.cw.data;H(d,e[c]!==a?e[c]:C(224));Br(d,93);return K(d);}
function Mb(){var a=this;B.call(a);a.oX=null;a.DP=null;a.pF=0.0;a.D2=0;a.Eg=0;a.us=0;a.EX=0;a.eM=0.0;a.e7=0.0;a.DT=0.0;a.qM=0.0;a.DY=0;a.ry=null;}
function Mn(a,b){return NX(a,b)+a.us|0;}
function NX(a,b){return (b-Fl(a)|0)/2|0;}
function Fl(a){return C6(a.eM+a.e7);}
function NY(a,b){return C6((a.eM+a.e7)*b);}
function I0(){var a=this;B.call(a);a.e9=null;a.gy=null;a.fg=null;}
var A_a=0;function AIn(a){var b;b=a.gy;if(b!==null){A_a=A_a-1|0;a.e9.es.deleteTexture(b);a.gy=null;}}
function BV(a){return a.fg.a;}
function CX(a){return a.fg.b;}
function Un(a,b,c,d){var e;e=a.fg;e.a=b;e.b=c;O8(a);a.e9.es.texStorage2D(3553,1,d,b,c);e=a.e9.es;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function O8(a){var b,c;b=a.e9.es;c=a.gy;b.bindTexture(3553,c);}
function CU(a,b){X8(a,b.oB,b.n2,32856);AAa(a,b,0,0);}
function X8(a,b,c,d){var e,f,g,h;a:{e=a.fg;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){O8(a);break a;}e=a.e9.es;h=a.gy;e.deleteTexture(h);a.gy=a.e9.es.createTexture();Un(a,b,c,d);break a;}}Un(a,b,c,d);}}
function Km(a,b,c,d){O8(a);AAa(a,b,c,d);}
function AAa(a,b,c,d){var e;e=a.e9.es;b=b.jG;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Z6=G(0);
var A_U=0.0;function Me(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function Wj(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JW(b.bG,JW(c,A_U));Cv(d,b.bs/c,b.bw*c,AWX(b.bj*c,1.25),e);}
function Yp(b){var c;c=b.bw;return c-(c|0)>=0.25?0.0:0.5;}
function AGe(){A_U=NO(NO(0.5,0.375),4.0);}
var Ps=G(0);
function G$(a){return Ea(a,null);}
function St(b){var c;c=new ABr;c.wH=b;return c;}
function AAn(){B.call(this);this.uO=null;}
function A1p(a){Lo(a.uO);}
function AAm(){B.call(this);this.xf=null;}
function AX5(a){LD(a.xf);}
function AM8(){var a=this;B.call(a);a.bW=null;a.bM=null;a.dV=0;}
function AOS(){var a=new AM8();A69(a);return a;}
function AZS(a){var b=new AM8();ATN(b,a);return b;}
function A69(a){a.bW=new HH;a.bM=new HH;}
function ATN(a,b){a.bW=new HH;a.bM=new HH;Kl(a,b);}
function Kl(a,b){ADE(a.bW,b.bW);ADE(a.bM,b.bM);a.dV=b.dV;}
function OH(a,b,c){Ci(a.bM,b,c);if(!a.dV)Ci(a.bW,b,c);}
function RG(a,b){Ci(a.bW,b,0);Ci(a.bM,b+1|0,0);}
function EE(a){if(S0(a.bW,a.bM)>0)return a.bM;return a.bW;}
function Gr(a){if(S0(a.bW,a.bM)<0)return a.bM;return a.bW;}
function AMj(a,b){var c,d,e,f;c=a.bW;d=c.R;e=a.bM;if(d==e.R&&c.bh==e.bh?1:0)return null;c=EE(a);e=Gr(a);d=c.R;if(d<=b){f=BQ(b,e.R);if(f<=0)return BK(b<=d?c.bh:0,f>=0?e.bh:(-1));}return null;}
function DD(a){var b,c;b=a.bW;c=a.bM;return (b.R==c.R&&b.bh==c.bh?1:0)?0:1;}
function UL(){var a=this;B.call(a);a.fP=null;a.fL=0;a.d_=0;}
function AEb(a,b){var c,d,e;c=a.fL;d=a.fP;if(c==d.data.length)a.fP=CT(d,c+16|0);d=a.fP.data;e=a.fL;a.fL=e+1|0;d[e]=b;}
function ABn(a){var b,c,d,e;b=a.fL;if(b?0:1)return;c=a.d_;d=b-1|0;if(c==d)a.d_=c-1|0;e=a.fP.data;a.fL=d;e[d]=null;}
var Hp=G();
function ABh(){var a=this;Hp.call(a);a.F=null;a.dI=null;a.fr=null;a.ee=null;a.d6=null;a.jd=null;a.l_=null;a.cJ=0;a.n7=0;a.Bs=0.0;}
function Cg(a,b){return a.F.data[b];}
function CN(a){return a.F.data.length;}
function AD1(a){return FX(a,CN(a));}
function G2(a,b){return a.F.data[b].X;}
function AMX(a,b,c){var d,e,f,g,h;d=a.F;e=d.data;f=e[b];d=CT(d,e.length+1|0);e=d.data;a.F=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ek(P(CB,0));a.F.data[b+1|0]=f;}else if(c==f.X){e[b]=f;e[b+1|0]=Ek(P(CB,0));}else{e=(Jo(f,c)).data;d=a.F.data;d[b]=e[0];d[b+1|0]=e[1];}Gq(a,b,c,0,C(177));}
function Mf(a,b){var c,d,e,f,g,h,i;c=a.F.data;d=c[b];e=c[b+1|0];f=Ek(MG(d.t,e.t));g=a.F;h=g.data.length;if(b<h&&b>=0){i=P(DO,h-1|0);c=i.data;ABa(g,b,i);c[b]=f;a.F=i;return;}d=new Bt;X(d);N(d);}
function PP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.F.data;if(!(c<d[b].X?0:1)){d=(Cg(a,b)).t.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.y)){e=Q(h.y,g);break a;}g=g-M(h.y)|0;f=f+1|0;}e=0;}Gq(a,b,c,1,Oh(e));h=a.F.data[b];d=h.t;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].y);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].y)==1)h.t=ABa(d,e,P(CB,f-1|0));else{j=i[e];if(c<=0)k=Eq(DC(j.y,1),j.b8,j.bK);else if(c>=(M(j.y)-1|0)){k=new CB;l=j.y;AC0(k,Cz(l,0,M(l)-1|0),j.b8,j.bK);}else{d=B6(M(j.y)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.y,b);b=b+1|0;}b=m.length;while(c<b){k=j.y;n=c+1|0;m[c]=Q(k,n);c=n;}k=Eq(GG(d),j.b8,j.bK);}i[e]=k;}h.X=h.X-1|0;Fg(h);}else if(b!=(d.length-1|0)){Gq(a,b,c,1,C(177));Mf(a,b);}}
function AFY(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){ABG(a.F.data[b],c,e[0]);return;}g=f-1|0;d=(Jo(a.F.data[b],c)).data;h=d[0];i=d[1];d=a.F;j=CT(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.t.data;f=l.length;c=!f?0:M(l[f-1|0].y);Ne(h,h.t.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!GR(e[m])?Za(e[m]):Ek(P(CB,0));d[b+m|0]=k;m=m+1|0;}Ne(i,0,0,e[g]);d[b+g|0]=i;a.F=j;}
function Wd(a,b){var c,d,e,f,g,h,i;c=EE(b);d=Gr(b);e=c.R;if(e==d.R)return Cz(F5(a.F.data[e]),c.bh,d.bh);f=new J;L(f);b=a.F.data[c.R];e=c.bh;Br(BM(f,DC(F5(b),e)),10);g=a.F.data;e=c.R+1|0;h=d.R;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AF9(BM(f,F5(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.F.data[d.R];h=d.bh;BM(f,Cz(F5(b),0,h));return K(f);}b=new O1;X(b);N(b);}
function PX(a,b,c){var d;AED(a,b);d=EE(b);Gq(a,d.R,d.bh,1,c);}
function AED(a,b){var c,d,e,f,g,h,i;a:{c=EE(b);d=Gr(b);e=c.R;if(e==d.R)Id(a.F.data[e],c.bh,d.bh);else{b=a.F.data[e];Id(b,c.bh,b.X);Id(a.F.data[d.R],0,d.bh);e=c.R+1|0;f=d.R;g=a.F;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DO,(h-f|0)+e|0);AHr(g,e,f,i);a.F=i;Mf(a,c.R);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function JK(a,b,c){return D1(b,Hb(Cg(a,b),c));}
function AE8(a,b){var c,d,e;c=0;d=0;while(true){e=a.F.data.length;if(c>=e)break;if((d+(Cg(a,c)).X|0)>=b)return BK(c,b-d|0);d=d+((Cg(a,c)).X+1|0)|0;c=c+1|0;}return BK(e,0);}
function FX(a,b){var c,d,e;c=0;d=a.F.data.length;e=0;while(e<b){c=c+G2(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function MF(a,b){return O3(Cg(a,b.bv),b.bA);}
function Fr(a){var b,c,d,e,f,g,h,i,j;b=B6(AD1(a));c=b.data;d=a.F.data.length;e=0;f=0;while(e<d){g=a.F.data[e].t.data;h=g.length;i=0;while(i<h){j=g[i].y;RT(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gq(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cJ=a.cJ+1|0;f=a.jd;g=P(HA,1);h=new HA;h.eG=b;h.fo=c;i=MU(e,C(177),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BK(b,c+M(i[0])|0);break a;}k=BK((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BK(b,c);}i=g.data;h.qa=k;h.oP=d;h.hp=e;i[0]=h;BA(f,g);N1(a,b,c,d,e);}
function N1(a,b,c,d,e){var f;f=FX(a,b)+c|0;if(!d){Y_(a.dI,f,M(e));UT(a.fr,f,M(e));}else{Wx(a.dI,f,M(e));P_(a.fr,f,M(e));}}
function Yb(a,b){var c,d,e;c=MU(b.hp,C(177),(-1));if(b.oP){AFY(a,b.eG,b.fo,c);Y_(a.dI,FX(a,b.eG)+b.fo|0,M(b.hp));UT(a.fr,FX(a,b.eG)+b.fo|0,M(b.hp));}else{c=c.data;d=AOS();Ci(d.bW,b.eG,b.fo);e=c.length;if(e==1)Ci(d.bM,b.eG,b.fo+M(c[0])|0);else Ci(d.bM,(b.eG+e|0)-1|0,M(c[e-1|0]));AED(a,d);Wx(a.dI,FX(a,b.eG)+b.fo|0,M(b.hp));P_(a.fr,FX(a,b.eG)+b.fo|0,M(b.hp));}return b.qa;}
function ADa(a){return a.n7==a.cJ?0:1;}
function Lh(a){a.n7=a.cJ;}
function NW(a){var b,c,d;a.l_=BP(a.F.data.length+1|0);b=0;while(b<a.F.data.length){c=a.l_.data;d=b+1|0;c[d]=(c[b]+(Cg(a,b)).X|0)+1|0;b=d;}}
function W8(a,b){var c,d,e,f,g,h;c=a.l_;if(c===null){d=0;e=0;a:{while(true){c=a.F.data;f=c.length;if(e>=f)break;g=c[e].X;if(b<=(d+g|0)){h=D1(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=D1(f,0);}return h;}d=AMa(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=D1(d,b-(d<0?0:a.l_.data[d])|0);if(h.bA>=(Cg(a,h.bv)).X){h.bv=h.bv+1|0;h.bA=0;}return h;}
var HJ=G(0);
function ES(a){return VP(a.uq(),a.u());}
function VP(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AHT(b,c,d));}
function AHT(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Br(BM(d,b[f]),47);f=f+1|0;}return BM(d,c);}
var JH=G(0);
function Ma(){var a=this;B.call(a);a.iM=null;a.hJ=null;a.ix=null;}
function AIM(a,b){var c=new Ma();AZD(c,a,b);return c;}
function A_V(a,b,c){var d=new Ma();QH(d,a,b,c);return d;}
function ANW(b){var c,d,e,f,g,h,i;c=new Ma;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BC,0);else{f=P(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FZ(e[h]);h=h+1|0;}}}else f=P(BC,0);QH(c,d,b,f);return c;}
function AZD(a,b,c){QH(a,b,null,c);}
function QH(a,b,c,d){a.iM=b;a.hJ=c;a.ix=d;}
function D9(a){var b;b=a.iM;return FZ(b!==null?b.name:a.hJ.name);}
function AOr(a){return a.ix;}
function Wq(a,b,c){var d,e,f;d=AM9(c);e=new Wz;e.t3=b;b=a.hJ;if(b!==null)b.text().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iM.getFile();f=new WA;f.A8=e;f.A7=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function WQ(a,b,c){var d,e,f;d=AM9(c);e=new AFn;e.w6=b;b=a.hJ;if(b!==null)b.arrayBuffer().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iM.getFile();f=new AFm;f.uz=e;f.uy=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function AM9(b){var c;c=new T0;c.u_=b;return c;}
function Od(a){var b,c,d;if(a.hJ===null)b=VP(a.ix,D9(a));else{b=H4(BF(a));c=a.ix;d=D9(a);b=BM(A7j(b),C(29));AHT(c,d,b);b=K(b);}return b;}
var J$=G(0);
function OP(){var a=this;B.call(a);a.iJ=null;a.f6=null;a.kT=null;}
var A$9=null;function A8_(a,b){var c=new OP();AGk(c,a,b);return c;}
function A7g(a,b,c){var d=new OP();AK_(d,a,b,c);return d;}
function AGk(a,b,c){a.iJ=b;if(c.length)a.f6=ABU(c);else{a.f6=P(BC,0);a.kT=P(BC,0);}}
function AK_(a,b,c,d){a.iJ=b;a.f6=c;a.kT=d;}
function ABU(b){var c,d,e,f;if(!b.length)c=P(BC,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BC,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=FZ(b[e]);e=e+1|0;}}}return c;}
function H_(a,b){var c,d;c=new AEd;d=a.iJ.values();c.nT=a;c.zG=d;c.lA=b;AC2(c);}
function Z_(a){var b,c,d,e;b=a.kT;if(b===null){b=a.f6;c=b.data;d=JV(a);e=c.length;b=CT(b,e+1|0);b.data[e]=d;b=b;a.kT=b;}return b;}
function JV(a){return FZ(a.iJ.name);}
function A6p(a){return a.f6;}
function Jk(a){return VP(a.f6,JV(a));}
function Qx(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AGa(){A$9=new V8;}
var AEu=G(0);
function ALZ(){B.call(this);this.je=null;}
function A73(a){var b=new ALZ();A29(b,a);return b;}
function A29(a,b){a.je=b;}
function Zo(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.je));}
function E6(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.je));}
function CL(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.je));}
function AZX(a){var b,c;b=a.je.byteLength;c=new J;L(c);H(V(H(c,C(225)),b),C(226));return K(c);}
function ABr(){B.call(this);this.wH=null;}
function Ea(a,b){ABi(a.wH,b);return 1;}
function HH(){var a=this;B.call(a);a.R=0;a.bh=0;}
function Ci(a,b,c){a.R=b;a.bh=c;}
function ADE(a,b){a.R=b.R;a.bh=b.bh;}
function S0(a,b){var c;c=BQ(a.R,b.R);if(c)return c;return BQ(a.bh,b.bh);}
function Ou(){var a=this;B.call(a);a.qe=null;a.pk=null;}
function MK(a){return a.qe.bv;}
function Ls(a){return a.qe.bA;}
function DO(){var a=this;B.call(a);a.t=null;a.X=0;a.gW=null;a.fk=null;a.eT=null;a.iL=null;a.hC=0;a.jP=0;a.j$=0;}
var A_W=0;var A_X=0;var A_O=0;function Za(a){var b=new DO();AMs(b,a);return b;}
function Ek(a){var b=new DO();AAQ(b,a);return b;}
function AMs(a,b){var c;c=P(CB,1);c.data[0]=AK3(b);AAQ(a,c);}
function AAQ(a,b){var c,d,e,f;c=b.data;a.t=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].y)|0;f=f+1|0;}a.X=d;Fg(a);}
function J1(a){return a.t.data.length;}
function Ku(a,b){return a.t.data[b];}
function Hb(a,b){var c;c=KT(a,b);return c<=0?0:a.eT.data[c-1|0];}
function KT(a,b){var c,d,e,f;c=a.t.data.length;if(!c)return (-1);if(!(a.eT!==null&&!a.j$)){WN(a);d=0;e=0;f=a.t.data.length;while(d<f){e=e+M(a.t.data[d].y)|0;a.eT.data[d]=e;d=d+1|0;}a.j$=0;}d=AC$(a.eT,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function O3(a,b){var c;c=a.t.data;if(!c.length)return null;return c[KT(a,b)];}
function Id(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.X){a.t=P(CB,0);Fg(a);a.X=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.t.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].y);i=M(a.t.data[f].y);j=BQ(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.t.data[f];if(!b&&c==M(k.y)?1:0){g=a.t;a.t=ABa(g,e,P(CB,g.data.length-1|0));a.X=a.X-d|0;Fg(a);return;}a.t.data[e]=Eq(FM(Cz(k.y,0,b),DC(k.y,c)),k.b8,k.bK);}else{g=a.t.data;l=g[e];m=g[f];if(b){if(b
!=M(l.y))a.t.data[e]=Eq(Cz(l.y,0,b),l.b8,l.bK);e=e+1|0;}if(c==M(m.y))f=f+1|0;else if(c)a.t.data[f]=Eq(DC(m.y,c),m.b8,m.bK);g=a.t;a.t=AHr(g,e,f,P(CB,(g.data.length-f|0)+e|0));}a.X=a.X-d|0;Fg(a);}
function Jo(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DO,[Ek(P(CB,0)),a]);if(b>=a.X)return I(DO,[a,Ek(P(CB,0))]);c=a.t;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].y);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DO,[Ek(L8(c,0,P(CB,d))),Ek(L8(c,d,P(CB,f-d|0)))]);h=e[d];e=L8(c,0,P(CB,d+1|0));i=e.data;j=L8(c,d,P(CB,f-d|0));c=j.data;i[d]=Eq(Cz(h.y,0,b),h.b8,h.bK);c[0]=Eq(DC(h.y,b),h.b8,h.bK);return I(DO,[Ek(e),Ek(j)]);}
function ABG(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.t.data;if(e>=f.length)break a;g=M(f[d].y);if(b<=g)break;b=b-g|0;d=e;}}Ne(a,d,b,c);}
function Ne(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(GR(d))return;e=a.t;f=e.data;g=f.length;if(!g){h=P(CB,1);h.data[0]=AK3(d);a.t=h;}else if(!b&&!c){h=P(CB,g+1|0);f=h.data;Db(e,0,h,1,g);f[0]=AK3(d);a.t=h;}else{i=f[b];if(c<=0)j=Eq(FM(d,i.y),i.b8,i.bK);else if(c>=M(i.y))j=Eq(FM(i.y,d),i.b8,i.bK);else{k=M(d);l=k+c|0;m=M(i.y)-c|0;e=B6(M(i.y)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.y,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.y,g+c|0);g=g+1|0;}j=Eq(GG(e),i.b8,i.bK);}f[b]=j;}a.X=a.X
+M(d)|0;Fg(a);}
function Qb(a){var b,c,d,e,f,g;b=0;c=a.t.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MO(f)){if(Q(f.y,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Oa(a,b,c){var d,e,f,g,h,i,j;d=a.t.data.length;e=a.gW;if(!(e!==null&&e.data.length>=d)){a.gW=ANU(d);a.fk=BP(d);a.hC=1;}WN(a);if(!a.hC)A_X=A_X+1|0;else{f=0;g=0.0;A_W=A_W+1|0;h=0;while(h<d){i=c.data;j=a.t.data[h];f=f+M(j.y)|0;a.eT.data[h]=f;Cr(b,i[Ld(j)]);g=g+EA(b,j.y);a.gW.data[h]=g;a.fk.data[h]=g+0.5|0;h=h+1|0;}a.X=f;a.hC=0;a.j$=0;}}
function WN(a){var b;b=a.eT;if(!(b!==null&&b.data.length>=a.t.data.length)){a.eT=BP(a.t.data.length);a.j$=1;}}
function Ux(a){a.hC=1;a.iL=null;}
function Fg(a){Ux(a);a.jP=1;a.j$=1;}
function ABB(a,b,c,d){var e,f,g,h,i,j,k;if(a.iL===null)a.iL=P($rt_arraycls($rt_intcls()),a.t.data.length);e=a.iL.data[d];if(e===null){e=c.data;f=a.t.data[d];Cr(b,e[Ld(f)]);f=f.y;e=BP(M(f)-1|0);c=GS(f);g=!d?0.0:a.gW.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;Pp(f,c,0,k);h[i]=g+EA(b,f)+0.5|0;i=k;}a.iL.data[d]=e;}return e;}
function Hm(a,b,c,d){var e,f,g,h,i;if(a.t.data.length&&b){if(!(!a.hC&&a.fk!==null))Oa(a,c,d);if(b>=a.X)return a.fk.data[a.t.data.length-1|0];e=0;f=0;a:{while(true){g=a.t.data;if(f>=g.length)break a;h=e+M(g[f].y)|0;i=BQ(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.fk.data[f];}return (ABB(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FY(a){var b,c,d;a:{b=a.t.data.length;if(b){c=a.fk.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hx(a,b){var c;if(b>=a.X)return b+1|0;c=KT(a,b);return a.eT.data[c];}
function F5(a){var b,c,d,e;b=new J;Gd(b,a.X);c=a.t.data;d=c.length;e=0;while(e<d){BM(b,c[e].y);e=e+1|0;}return K(b);}
function A3S(a){var b,c,d,e;b=a.t.data;c=b.length;if(c==1)d=AHl(b[0]);else{d=new J;L(d);BM(d,C(37));e=0;while(e<c){if(e>0)BM(d,C(38));H(d,b[e]);e=e+1|0;}BM(d,C(39));d=K(d);}return d;}
function AHq(){A_O=0;}
function ZM(){var a=this;B.call(a);a.f3=null;a.fz=null;}
function AZL(a,b){var c=new ZM();A0Y(c,a,b);return c;}
function A0Y(a,b,c){a.f3=b;a.fz=c;}
function UT(a,b,c){var d;d=a.f3;if(d===null)return;AAK(a,d,b,c);}
function P_(a,b,c){var d;d=a.f3;if(d===null)return;ADd(a,d,b,c);}
function AAK(a,b,c,d){var e,f,g,h;e=b.fm.cj();while(e.c0()){W_(a,e.cl(),c,d);}e=b.f5.cj();while(e.c0()){f=e.cl();g=new Uu;g.z_=a;E9(a,g,f,c,d);}h=b.ic.cj();while(h.c0()){e=h.cl();W_(a,e.lY,c,d);f=new Uv;f.yc=a;E9(a,f,e.lm,c,d);}b=b.c8.cj();while(b.c0()){AAK(a,b.cl(),c,d);}}
function W_(a,b,c,d){Lp(a,b.ev,c,d);}
function E9(a,b,c,d,e){var f,g;a:{if(c instanceof H$){f=c.fW;g=new Xl;g.r1=a;g.rZ=b;g.rY=d;g.r0=e;FL(f,g);}else{if(!(c instanceof KQ)){if(!(c instanceof JX))break a;f=c;E9(a,b,f.iv,d,e);E9(a,b,f.h3,d,e);return;}g=c.iG;f=new Xm;f.Dq=a;f.Dp=b;f.Do=d;f.Dn=e;FL(g,f);}}if(c!==null){c=c.eZ;if(c!==null)b.mr(c,C5(d),C5(e));}}
function Lp(a,b,c,d){var e;e=b.dL;if(e>=c)b.dL=e+d|0;}
function ADd(a,b,c,d){var e,f,g,h;e=b.fm.cj();while(e.c0()){Kt(a,(e.cl()).ev,c,d);}e=b.f5.cj();while(e.c0()){f=e.cl();g=new Tt;g.wd=a;E9(a,g,f,c,d);}h=b.ic.cj();while(h.c0()){e=h.cl();Kt(a,e.lY.ev,c,d);f=new Tv;f.BR=a;E9(a,f,e.lm,c,d);}b.fm.qm(new Ts);b.f5.qm(new Tr);b=b.c8.cj();while(b.c0()){ADd(a,b.cl(),c,d);}}
function Kt(a,b,c,d){var e;e=b.dL;if(e>=c)b.dL=e-d|0;}
function LY(){var a=this;Es.call(a);a.du=0;a.ch=null;a.dl=0;a.Dr=0.0;a.nV=0;}
function Ks(){var a=new LY();RL(a);return a;}
function A09(a,b){return P(Im,b);}
function RL(a){var b;b=AJv(16);a.du=0;a.ch=P(Im,b);a.Dr=0.75;UX(a);}
function AJv(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fb(a){var b;if(a.du>0){a.du=0;b=a.ch;AGM(b,0,b.data.length,null);a.dl=a.dl+1|0;}}
function UX(a){a.nV=a.ch.data.length*a.Dr|0;}
function HW(a,b){return ACF(a,b)===null?0:1;}
function OM(a){var b;b=new UY;b.Aq=a;return b;}
function CC(a,b){var c;c=ACF(a,b);if(c===null)return null;return c.c3;}
function ACF(a,b){var c,d;if(b===null)c=Tm(a);else{d=b.qI();c=Sc(a,b,d&(a.ch.data.length-1|0),d);}return c;}
function Sc(a,b,c,d){var e;e=a.ch.data[c];while(e!==null&&!(e.mC==d&&AKk(b,e.cU))){e=e.dj;}return e;}
function Tm(a){var b;b=a.ch.data[0];while(b!==null&&b.cU!==null){b=b.dj;}return b;}
function NR(a){var b;if(a.pI===null){b=new Ro;b.jS=a;a.pI=b;}return a.pI;}
function D6(a,b,c){var d,e,f,g;if(b===null){d=Tm(a);if(d===null){a.dl=a.dl+1|0;d=UR(a,null,0,0);e=a.du+1|0;a.du=e;if(e>a.nV)ADQ(a);}}else{e=b.qI();f=e&(a.ch.data.length-1|0);d=Sc(a,b,f,e);if(d===null){a.dl=a.dl+1|0;d=UR(a,b,f,e);e=a.du+1|0;a.du=e;if(e>a.nV)ADQ(a);}}g=d.c3;d.c3=c;return g;}
function UR(a,b,c,d){var e,f;e=new Im;Xh(e,b,null);e.mC=d;f=a.ch.data;e.dj=f[c];f[c]=e;return e;}
function ALb(a,b){var c,d,e,f,g,h,i,j;c=AJv(!b?1:b<<1);d=P(Im,c);e=d.data;f=0;b=c-1|0;while(true){g=a.ch.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.mC&b;j=h.dj;h.dj=e[i];e[i]=h;h=j;}f=f+1|0;}a.ch=d;UX(a);}
function ADQ(a){ALb(a,a.ch.data.length);}
function L_(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.ch.data[0];while(e!==null){if(e.cU===null)break a;b=e.dj;d=e;e=b;}}else{f=Kz(b);g=a.ch.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.mC==f&&AKk(b,e.cU))){h=e.dj;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.dj=e.dj;else a.ch.data[c]=e.dj;a.dl=a.dl+1|0;a.du=a.du-1|0;}if(e===null)return null;return e.c3;}
function AKk(b,c){return b!==c&&!b.bT(c)?0:1;}
var V8=G();
function A1Y(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function CB(){var a=this;B.call(a);a.y=null;a.b8=0;a.bK=0;}
function AK3(a){var b=new CB();A0q(b,a);return b;}
function Eq(a,b,c){var d=new CB();AC0(d,a,b,c);return d;}
function A0q(a,b){AC0(a,b,0,0);}
function AC0(a,b,c,d){a.y=b;a.b8=c;a.bK=d;}
function Ld(a){return a.bK&3;}
function JY(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MO(a){return M(a.y);}
function AHl(a){var b,c,d,e;b=A7j(a.y);c=a.bK;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BM(b,C(227));if(d)BM(b,C(228));if(e)BM(b,C(229));return K(b);}
var Or=G(LY);
function ABo(){var a=this;B.call(a);a.dF=null;a.fv=0;}
var A_Y=null;function AIN(a){var b=new ABo();AJc(b,a);return b;}
function AJc(a,b){a.fv=0;a.dF=b;}
function RB(a,b){var c;if(b.fc)return b;b=B9(b.bx);while(true){if(!Cb(b))return null;c=RB(a,Cc(b));if(c!==null)break;}return c;}
function YI(a,b,c){var d,e,f,g;d=Oi(a,a.dF,b);if(d===null)return;b=c.cB;e=b===null?A_Z:b.c8;f=c.bx;c=a.dF;if(d===c){if(c.cB===null)c.cB=b;b=new ABF;b.z8=a;FL(f,b);b=new ABE;b.wb=a;e.fJ(b);b=a.dF;b.bx=f;b.cB.c8=e;b.fc=0;return;}if(!EU(f)){c=d.hX;if(c!==null){b=new Y8;b.r5=c;FL(f,b);g=LL(c.bx,d);if(g==(-1))GW(c.bx,f);else{E2(c.bx,g);AKG(c.bx,g,f);}}}b=d.cB;if(b!==null){b=b.hR;c=new TB;c.tH=b;e.fJ(c);g=LL(b.c8,d.cB);if(g==(-1))GW(b.c8,e);else{b.c8.mT(g);b.c8.vC(g,e);}}}
function Oi(a,b,c){var d,e,f,g;d=b.b6;if(d.b$==c.b$&&d.b7==c.b7?1:0){d=B9(b.bx);while(Cb(d)){e=Oi(a,Cc(d),c);if(e!==null)return e;}return b;}b=B9(b.bx);while(true){if(!Cb(b))return null;d=Cc(b);f=c.b$;g=c.b7;e=d.b6;if(e.b$<=f&&g<=e.b7?1:0){e=Oi(a,d,c);if(e!==null)break;}}return e;}
function ACS(a,b,c){BA(c,b.b6);b=B9(b.bx);while(Cb(b)){ACS(a,Cc(b),c);}}
function Y_(a,b,c){a.fv=0;L1(a,a.dF,b,c);}
function L1(a,b,c,d){var e;if(Di(b)<c)return;a:{if(Dr(b)>c){MB(b,d);HR(b,d);b=B9(b.bx);while(Cb(b)){L1(a,Cc(b),c,d);}}else{if(!Nr(b,c)){if(a.fv)break a;if(Di(b)!=c)break a;}HR(b,d);if(Dr(b)==c&&a.fv)MB(b,d);e=B9(b.bx);while(Cb(e)){L1(a,Cc(e),c,d);}if(!a.fv){b.fc=1;a.fv=1;}}}}
function Wx(a,b,c){a.fv=0;Nv(a,a.dF,b,c);}
function Nv(a,b,c,d){var e,f,g,h,i,j;if(Di(b)<c)return;e=Dr(b);f=c+d|0;if(e>f){e= -d|0;MB(b,e);HR(b,e);g=B9(b.bx);while(Cb(g)){Nv(a,Cc(g),c,d);}b.bx=XZ(a,b.bx);}else{h=b.b6;if(c<=h.b$&&h.b7<=f?1:0){if(b===a.dF){MJ(b,0);Nu(b,0);h=b.cB;if(h!==null)h.c8.jO();}else{MJ(b,(-1));Nu(b,(-1));h=b.cB;if(h!==null){AFH(h);b.cB=null;}}I3(b.bx);}else{e=Nr(b,c);f=Nr(b,f);if(e&&f)HR(b, -d|0);else if(e)Nu(b,c);else{if(!f)return;MJ(b,c);HR(b, -d|0);}h=B9(b.bx);while(Cb(h)){Nv(a,Cc(h),c,d);}h=My(b.bx);g=Zs(0);i=new S6;j=new AD0;j.G1
=i;j.la=g;while(OL(h,j)){}if(!j.la.o2&&!a.fv)b.fc=1;else a.fv=1;b.bx=XZ(a,b.bx);}}}
function XZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BO();d=null;e=A_Y;f=b.cw;g=b.q;if(e===null)e=A$D;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}LE(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.ca=b.ca+1|0;b=B9(b);while(Cb(b)){m=Cc(b);if(Dr(m)==Di(m))continue;if(!m.fc){if(d!==null){BA(c,d);d=null;}BA(c,m);}else if(d===null)d=m;else{n=AWD(Lt(Be(Dr(d),Dr(m)),Bd(Di(d),Di(m)),d.b6.gj),d.hX,d.cB);n.fc=1;d=m.cB;if(d===null)d=n;else{AFH(d);d=n;}}}if(d!==null)BA(c,d);return c;}
function AE5(a,b,c,d){var e,f,g,h,i,j;if((Di(c)-Dr(c)|0)<43)e=Cz(d,Dr(c),Di(c));else{e=Cz(d,Dr(c),Dr(c)+20|0);f=Cz(d,Di(c)-20|0,Di(c));g=new J;L(g);H(H(H(g,e),C(170)),f);e=K(g);}e=ADX(e,C(177),C(230));f=Bk();g=BT(c);h=new J;L(h);i=V(h,b);Br(i,32);g=H(i,g);Br(g,9);H(g,e);Bf(f,K(h));c=B9(c.bx);j=b+1|0;while(Cb(c)){AE5(a,j,Cc(c),d);}}
function AJl(){A_Y=new Wl;}
function ANr(){var a=this;B.call(a);a.b$=0;a.b7=0;a.gj=0;}
function Lt(a,b,c){var d=new ANr();A0m(d,a,b,c);return d;}
function A0m(a,b,c,d){a.b$=b;a.b7=c;a.gj=d;}
function AVM(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.b$==c.b$&&a.b7==c.b7&&a.gj==c.gj?1:0;}return 0;}
function AKg(a){var b,c,d,e;b=a.b$;c=a.b7;d=a.gj;e=new J;L(e);Br(e,40);Br(V(H(V(H(V(e,b),C(38)),c),C(38)),d),41);return K(e);}
function AZw(a,b){var c;b=b;c=BQ(a.b$,b.b$);if(!c)c=BQ(b.b7,a.b7);return c;}
var Wl=G();
function ASO(a,b,c){var d;b=b;c=c;b=b.b6;c=c.b6;d=BQ(b.b$,c.b$);if(!d)d=BQ(c.b7,b.b7);return d;}
function AAS(){var a=this;B.call(a);a.b6=null;a.hX=null;a.bx=null;a.cB=null;a.fc=0;}
function AWD(a,b,c){var d=new AAS();AIL(d,a,b,c);return d;}
function AIL(a,b,c,d){a.fc=0;a.b6=b;a.hX=c;a.bx=BO();a.cB=d;}
function AJE(b){return AA2(b,null);}
function AA2(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bc(b);e=Bc(b);f=Bc(b);g=Bc(b);h=Bc(b);i=Lt(d,e,f);j=new AAS;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AIL(j,i,null,l);m=0;while(m<g){l=AA2(b,c);l.hX=j;BA(j.bx,l);m=m+1|0;}return j;}
function AGr(b,c,d){var e,f,g,h,i;a:{e=b.b6;f=b.bx;g=e.b$;h=e.b7;i=e.gj;Bu(c,g);Hs(c,h,i);Bu(c,f.q);if(d!==null){e=b.cB;if(e!==null&&AEr(d,e)){g=(O9(d,b.cB)).bu;break a;}}g=(-1);}Bu(c,g);b=B9(f);while(Cb(b)){AGr(Cc(b),c,d);}}
function Dr(a){return a.b6.b$;}
function Di(a){return a.b6.b7;}
function MJ(a,b){a.b6.b$=b;}
function Nu(a,b){a.b6.b7=b;}
function MB(a,b){var c;c=a.b6;c.b$=c.b$+b|0;}
function HR(a,b){var c;c=a.b6;c.b7=c.b7+b|0;}
function Nr(a,b){return Dr(a)<=b&&b<Di(a)?1:0;}
function AOo(a){var b,c,d;b=AKg(a.b6);c=a.fc;d=new J;L(d);J7(H(H(d,b),C(38)),c);return K(d);}
function APa(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.b6,c.b6)&&BR(a.bx,c.bx)?1:0;}return 0;}
var JZ=G(0);
function Hn(){var a=this;B.call(a);a.cU=null;a.c3=null;}
function A_0(a,b){var c=new Hn();Xh(c,a,b);return c;}
function Xh(a,b,c){a.cU=b;a.c3=c;}
function AZZ(a,b){var c,d;if(a===b)return 1;if(!E3(b,JZ))return 0;a:{b:{c:{d:{c=b;b=a.cU;if(b!==null){if(!b.bT(c.cU))break c;else break d;}if(c.cU!==null)break c;}b=a.c3;if(b!==null){if(!b.bT(c.c3))break c;else break b;}if(c.c3===null)break b;}d=0;break a;}d=1;}return d;}
function APR(a){var b,c,d;b=a.cU;c=a.c3;d=new J;L(d);b=H(d,b);Br(b,61);H(b,c);return K(d);}
function Im(){var a=this;Hn.call(a);a.mC=0;a.dj=null;}
function Oo(){var a=this;L6.call(a);a.zw=null;a.r2=null;}
function AGv(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.zw;e=0;f=0;g=a.r2;a:{while(true){if((e+32|0)>f&&Em(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Cl(b)+j|0,i.length);Qc(b,d,j,f-j|0);e=0;}if(!Em(c)){k=!Em(b)&&e>=f?A_m:A_l;break a;}i=g.data;j=Be(Cl(c),i.length);l=new YE;l.rc=b;l.zW=c;k=AHN(a,d,e,f,g,0,j,l);e=l.wi;j=l.xc;if(k===null){if(!Em(b)&&e>=f)k=A_m;else if(!Em(c)&&e>=f)k=A_l;}AE7(c,g,0,j);if(k!==null)break;}}FN(b,b.bg-(f-e|0)|0);return k;}
var Ry=G(Oo);
function AHN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(OS(h,2))break a;i=A_l;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Pf(l)){if((f+3|0)>g){j=j+(-1)|0;if(OS(h,3))break a;i=A_l;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!C1(l)){i=EK(1);break a;}if
(j>=d){if(Em(h.rc))break a;i=A_m;break a;}c=j+1|0;m=k[j];if(!Do(m)){j=c+(-2)|0;i=EK(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(OS(h,4))break a;i=A_l;break a;}k=e.data;o=E5(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.wi=j;h.xc=f;return i;}
var JG=G(EM);
var PK=G();
function AXn(a,b){return b.text();}
function PM(){var a=this;B.call(a);a.uR=null;a.uQ=null;}
function AWK(a,b){var c,d,e,f;c=a.uR;d=a.uQ;e=b.length;f=new Qg;f.B8=b;c.g(AQz((AMK(e,f)).kP,ADN(d)));}
var PL=G();
function AYP(a,b){AJu(b);}
function Ju(){var a=this;B.call(a);a.by=null;a.GM=null;a.cd=null;a.kj=null;a.lK=null;a.d7=null;a.f1=null;a.C1=null;a.qn=null;a.px=null;}
function A_1(a,b,c,d,e,f){var g=new Ju();Mm(g,a,b,c,d,e,f);return g;}
function I_(){var b,c,d,e,f,g,h,i,j;b=new Ju;c=new KM;d=new HO;F2();Lw(d,A_2);M9(c,d,B0(A_J),B0(A_3),B0(A_4),B0(A_J),B0(A_5),B0(A_6),B0(A_7),B0(A_8),B0(A_9),B0(A_$));e=ALF(S(C(231)));f=(ALL()).data;g=f.length;h=P(K1,g);i=h.data;j=0;while(j<g){i[j]=f[j].oF;j=j+1|0;}Mm(b,c,e,h,AMr(S(C(232)),S(C(233)),S(C(234)),S(C(235))),Fx(),AGb(S(C(236)),S(C(237)),S(C(238)),S(C(239))));return b;}
function GB(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new Ju;c=new KM;d=new HO;AQH();Lw(d,A__);M9(c,d,B0(Baa),B0(Bab),B0(Bac),B0(Baa),B0(Bad),B0(Bae),B0(Baf),B0(Bag),B0(Bah),B0(Bai));e=ALF(S(C(240)));f=(AHz()).data;g=f.length;h=P(K1,g);i=h.data;j=0;while(j<g){i[j]=f[j].lH;j=j+1|0;}k=AMr(S(C(241)),S(C(242)),S(C(243)),S(C(244)));l=new Jw;m=new JE;AYo();n=Baj;Pn(m,n,Bak,Bal,Bam,Ban,n);Mx(l,m,AI4(),AJA(S(C(245)),S(C(246)),S(C(247))),AI4(),AJZ(1,0.17499999701976776),Bao,Bap);Mm(b,c,e,h,k,l,AGb(S(C(236)),S(C(237)),S(C(238)),
S(C(248))));return b;}
function Mm(a,b,c,d,e,f,g){var h;h=d.data;a.f1=DB(C(169),17.0);a.C1=DB(C(158),15.0);a.qn=DB(C(169),15.0);a.px=DB(C(14),15.0);a.by=b;a.GM=c;a.kj=d;a.lK=e;if(h.length>=15){a.cd=f;a.d7=g;return;}b=new BU;X(b);N(b);}
function Yf(a,b){if(b===null)b=a.by.eF;return b;}
function K7(){var a=this;Cq.call(a);a.el=null;a.oE=null;}
function A8E(a){var b=new K7();AJN(b,a);return b;}
function AJN(a,b){var c,d,e,f;Hd(a,b,0);c=I8(a.w);a.oE=c;d=G3(c);a.el=d;NB(a.r,d);c=b.o.bE;d=new ZT;d.sx=a;Z(c,d);c=b.o.bE;d=new GQ;e=new ZR;e.CQ=a;Ha(d,b,e);Z(c,d);c=a.el;d=b.o;f=new ADW;f.xx=c;Z(d.b2,c);Z(d.fS,f);b=b.o.cI;c=new ZS;c.y7=a;Z(b,c);J0(a);}
function ALt(a,b){var c,d;c=a.el;d=new ADk;d.v8=a;d.v9=b;F_(c,b,d);}
function A1w(a,b){if(G0(a.w,b))MA(a.el);}
function A5s(a,b){var c;c=QQ(a,b);return Md(a.el,b)|c;}
function ARo(a){H0(a);IS(a.el);Kp(a.w);}
function A6R(a){return EQ(0);}
function ANP(a,b,c){var d;I$(a,b,c);d=a.el;M6(d,d.i,b,c);}
function A0l(a,b){BG(b);Gb(a.oE,b);E_(a.el,b);}
function ALe(a,b){if(b.bc!=121)return 0;return 1;}
function AGx(a,b){var c,d,e;if(DA(a.r,a.el)){c=a.oE;b=b.k;d=a.el;e=new AB1;e.Bv=a;Jd(c,b,d,a,d,a,e);}return 1;}
function AKa(){var a=this;CA.call(a);a.z0=null;a.pJ=null;a.kM=null;a.eH=null;a.mq=null;a.hZ=null;a.e0=null;a.j7=null;a.q$=null;a.jv=null;a.qP=null;a.qQ=null;a.p9=null;a.Ah=null;a.D$=null;a.tT=0;}
function A8P(a){var b=new AKa();A2t(b,a);return b;}
function A2t(a,b){var c,d,e,f;Ey(a,b);c=(I_()).by.eF;a.z0=c;a.pJ=ANm(c);a.kM=new Bh;a.eH=Lq();a.mq=Lq();a.hZ=Ui(0,0,3,3);a.e0=IF(0,0,300,300);a.j7=A1d();d=P(BC,4);e=d.data;e[0]=C(182);e[1]=C(183);e[2]=C(201);e[3]=C(200);a.q$=d;a.jv=P(KW,e.length);c=b.o.b2;f=new U5;f.fV=a;Z(c,f);c=b.o.bE;f=new AAk;f.Ds=a;Z(c,f);c=b.o.pb;f=new AAj;f.tb=a;Z(c,f);c=b.o.hl;f=new AAi;f.EV=a;Z(c,f);c=b.o.mV;f=new AAh;f.Fz=a;Z(c,f);c=b.o.cI;f=new AAg;f.F2=a;Z(c,f);b=b.o.fS;c=new AAf;c.Cd=a;Z(b,c);a.qP=AEj(a,1);a.qQ=AEj(a,0);S8(a,a.eH,
a.qP);S8(a,a.mq,a.qQ);a.p9=AFF(a,0);a.Ah=AFF(a,1);F$(a.e0,a.p9);Gj(a.e0);H3(a.e0,DE(169,183,198));FA(a.e0,a.z0);Cv(a.eH.be,1.0,1.0,1.0,1.0);FA(a.eH,a.e0.bt);BL(a.hZ.bt,a.pJ);}
function S8(a,b,c){F$(b,c);Gj(b);}
function TA(a,b){I2(D0(),0.5+D0()*0.5,0.5+D0()*0.5,1.0,b.be);}
function AEj(a,b){var c,d;c=Eh(a.D.U,200,100,b);HX(c,C(249),11.0);B1(c,C(250),0.0,20.0);KF(c,255,0,0);B1(c,C(250),0.25,40.0);KF(c,0,255,0);B1(c,C(250),0.5,60.0);KF(c,0,0,255);B1(c,C(250),0.75,80.0);d=C4(a.D.U);CU(d,c);EP(c);return d;}
function AFF(a,b){var c,d,e,f;c=Eh(a.D.U,255,100,b);HX(c,C(169),10.0);d=Bk();e=$rt_str(c.dB.font);f=new J;L(f);H(H(f,C(251)),e);Bf(d,K(f));EA(c,C(252));B1(c,C(252),0.0,20.0);B1(c,C(252),0.25,40.0);B1(c,C(252),0.5,60.0);B1(c,C(252),0.75,80.0);e=C4(a.D.U);CU(e,c);EP(c);return e;}
function AOa(a,b){var c;a.tT=a.tT+1|0;c=b/5.0;I2(c-(c|0),1.0,1.0,1.0,a.hZ.be);return ACK(a.j7,b);}
function AP9(a){var b,c,d,e,f,g,h,i;b=a.D.U;EY(b,a.pJ);c=a.jv.data;d=c.length;e=0;while(e<d){ABg(c[e],b,0,0);e=e+1|0;}f=a.e0;g=f.x;g.b=(a.kM.b-f.v.b|0)-5|0;g.a=0;Ca(b,0);h=0;while(h<7){f=a.e0;EW(f,b,a.p9,Bb(h,10+((10*f.v.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.e0;f.x.b=(a.kM.b-(f.v.b*2|0)|0)-10|0;h=0;while(h<7){g=a.Ah;f=a.e0;f.x.a=Bb(h,10+((10*f.v.a|0)/15|0)|0)+5|0;TZ(f,b,g,1);h=h+1|0;}TZ(a.eH,b,a.qP,1);Ca(b,1);g=a.mq;f=a.qQ;i=g.x;h=i.a;d=i.b;g=g.v;GV(b,b.lr);G7(b.lr,b.bf,h,d,g,b.dt);OF(b.lr,b.bf,f);Gm(b);Ca(b,0);f
=a.D$;if(f!==null)Xc(a.hZ,b,f,0,0,0.0);ADO(a.j7,b,new Bh);NC(b,C(253));}
function ASv(a,b,c){var d,e,f,g,h,i,j,k;d=Bk();e=BT(b);f=new J;L(f);H(H(f,C(254)),e);Bf(d,K(f));d=Bk();f=new J;L(f);Dg(H(f,C(255)),c);Bf(d,K(f));g=Ck(30.0,c);h=Ck(10.0,c);i=0;while(true){j=a.jv.data;if(i>=j.length)break;k=1+i|0;j[i]=Ui(Bb(h,k)+Bb(g,i)|0,g,g,g);TA(a,a.jv.data[i]);i=k;}Y(a.hZ.x,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eH;Y(f.x,((b.a/2|0)-f.v.a|0)-10|0,50);Y(a.mq.x,(b.a/2|0)+10|0,50);Ct(a.kM,b);}
function Ym(a,b){var c,d,e,f,g;c=Bk();d=!b.km?C(256):C(257);e=b.eE;f=b.bc;g=b.Bf;b=new J;L(b);J7(H(V(H(H(H(b,d),e),C(258)),f),C(259)),g);Bf(c,K(b));return 0;}
function ACR(){var a=this;CA.call(a);a.F5=null;a.lJ=null;a.jy=null;a.iB=null;a.dN=null;a.em=null;a.nK=null;a.nx=null;a.j_=0;a.i_=null;a.i$=null;}
function Sd(a,b,c){F$(b,c);Gj(b);}
function AFX(a,b,c,d,e,f){var g,h;g=Eh(f,c,120,b);Cr(g,e);e=!b?C(260):C(261);h=new J;L(h);H(H(H(h,e),d),C(156));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C4(f);CU(h,g);EP(g);return h;}
function AT5(a,b){return 0;}
function AZm(a){var b,c,d,e,f,g,h,i;b=a.D.U;EY(b,a.lJ);Ca(b,0);c=a.jy;d=c.b;e=a.iB;f=d-e.b|0;g=c.a-e.a|0;Bv(b,0,0,e,a.dN.bt);Bv(b,g,0,a.iB,a.em.bt);Bv(b,0,f,a.iB,a.dN.be);Bv(b,g,f,a.iB,a.em.be);c=a.dN;e=c.x;h=e.b;i=((a.jy.b*3|0)/4|0)-(c.v.b/2|0)|0;I4(c,b,e.a,h,a.i_,0,1);c=a.dN;I4(c,b,c.x.a,i,a.i_,1,1);c=a.em;I4(c,b,c.x.a,h,a.i$,0,0);e=a.em;I4(e,b,e.x.a,i,a.i$,1,0);NC(b,C(253));}
function A0H(a,b,c){var d,e;Ct(a.jy,b);Y(a.iB,b.a/2|0,b.b/2|0);d=a.jy.b/4|0;e=a.dN;d=d-(e.v.b/2|0)|0;Y(e.x,(b.a/4|0)-(a.j_/2|0)|0,d);Y(a.em.x,((b.a*3|0)/4|0)-(a.j_/2|0)|0,d);}
function YW(){var a=this;Cq.call(a);a.zV=null;a.fC=null;a.d5=null;a.pd=null;}
function AR0(a,b,c){var d;d=FB(a.r,a.pd);Kf(a.fC,d,a.r);Kf(a.d5,d,a.r);}
function SM(b){return JA(b,Wf());}
function JA(b,c){var d;d=Ug();O2(d,N4(b,KJ(c,25)),!b?null:JA(b-1|0,c));O2(d,N4(b,KJ(c,20)),!b?null:JA(b-1|0,c));O2(d,N4(b,KJ(c,15)),!b?null:JA(b-1|0,c));O2(d,N4(b,KJ(c,10)),!b?null:JA(b-1|0,c));return Jt(d);}
function N4(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(29)),c);c=K(d);}return c;}
function O2(b,c,d){if(d!==null)Iw(b,c,d);else{d=new WJ;d.sU=c;EG(b,c,d);}}
function AQK(a,b,c){var d,e;I$(a,b,c);b=a.r.bX;d=ER(a.fC);e=ER(a.d5);NZ(a.fC,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);NZ(a.d5,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function A0f(a){var b,c,d,e,f,g,h,i;H0(a);b=a.D.U;Ca(b,1);c=a.zV;d=a.r;e=d.bX;Y(c.ov,e.a,Ck(2.0,d.cs));Y(c.oW,Ck(2.0,d.cs),e.b);F2();f=A_9;g=d.bR;h=e.b/2|0;i=c.ov;Bv(g,0,h-(i.b/2|0)|0,i,f);g=d.bR;h=e.a/2|0;c=c.oW;Bv(g,h-(c.a/2|0)|0,0,c,f);MR(a.fC,a.r);MR(a.d5,a.r);Kp(a.w);Ca(b,0);}
function ASx(a,b){var c,d;c=Ow(a.fC,b.k,a.r.dg);d=Ow(a.d5,b.k,a.r.dg);return !c&&!d?0:1;}
function AOR(a,b,c,d){var e,f;e=OU(a.fC,b.k,c,d);f=OU(a.d5,b.k,c,d);return !e&&!f?0:1;}
function ACh(){Cq.call(this);this.k$=null;}
function APY(a,b,c){if(b===0.0)AAt(a);}
function AAt(a){var b,c,d,e,f,g,h,i;b=a.k$;if(b!==null){IW(a.w,b);Kx(b);}b=(I_()).cd;c=A91(a.r,new Wu);d=DB(C(158),14.0);e=ARY();f=0;while(f<300){g=Dp(f);h=new TQ;h.Cx=C(262);h.Cu=g;h.Cv=C(263);Xz(e,C(262),g,C(263),h);f=f+1|0;}Yv(c,AEO(e));Xt(c,b,d);g=AGf(a.r);i=G9(c,a.r);JR(i,b.nA,b.pu);LO(g,i);Ev(g,b);CZ(g,C(147));a.k$=g;DX(a.w,g);Rt(a);}
function AO6(a,b,c){I$(a,b,c);Rt(a);}
function Rt(a){var b,c,d;b=a.r.bX;EJ(a.k$,BK((b.a*2|0)/10|0,(b.b*4|0)/10|0),BK((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.k$;b=AJY(c.ba.j);d=new J;L(d);H(H(d,C(264)),b);CZ(c,K(d));}
function Yi(){var a=this;Ie.call(a);a.mW=null;a.is=null;a.gQ=null;a.kO=null;a.sP=null;a.kJ=null;a.iE=null;a.ia=null;a.me=0;a.ir=0;}
function Qt(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.is.q>0){d=D0();e=a.is;f=d*(e.q-1|0)|0;e=E2(e,f);E2(a.gQ,f);f=a.ir;g=e.v;a.ir=f-Bb(g.a,g.b)|0;Jy(a.mW,e.dX);}c=c+1|0;}}
function MH(a,b){var c,d,e,f,g,h,i,j;c=KU(a.r);Cr(c,a.kO);d=0;while(d<b){e=KJ(a.kJ,1+(D0()*19.0|0)|0);f=Lq();g=f.dX;h=a.mW;BG(c);i=new R8;i.vy=c;BL(g,K4(h,e,i));(WI(D0(),1.0,1.0,f.bt)).bG=0.5;h=f.x;g=f.dX;Y(h,g.bs|0,g.bw|0);h=f.v;g=f.dX;Y(h,g.bj|0,g.bG|0);BA(a.gQ,e);BA(a.is,f);j=a.ir;h=f.v;a.ir=j+Bb(h.a,h.b)|0;d=d+1|0;}a.ia=Np(a.mW);}
function A4Y(a){var b,c,d,e,f,g,h,i;H0(a);b=a.D.U;Ca(b,1);c=a.r.bR;if(a.gQ.q){d=a.ia;d=Ia(c,d.a,d.b);Cr(d,a.kO);e=a.kO.eM;Bv(c,0,0,a.ia,a.sP);f=0;while(f<a.gQ.q){g=BI(a.is,f);h=BI(a.gQ,f);g=g.dX;B1(d,h,g.bs,g.bw+e);f=f+1|0;}g=a.iE;if(!(g!==null&&BV(g)==a.ia.a&&CX(a.iE)==a.ia.b))a.iE=BY(a.iE,C4(c));CU(a.iE,d);EP(d);i=0;while(i<a.gQ.q){d=BI(a.is,i);H3(d,Cs(0));EW(d,c,a.iE,0,0);i=i+1|0;}}Ca(b,0);}
function AN5(a,b){var c,d;if(a.me){c=a.ia;d=Be(Bb(c.a,c.b),2211840);if(a.ir/d<=0.7)MH(a,Ei(a.kJ,5));else Qt(a,Ei(a.kJ,5));}return a.me;}
function TW(){var a=this;CA.call(a);a.e2=null;a.iu=null;a.jw=null;a.pA=null;a.fu=0;a.vZ=0;a.sQ=null;a.m$=0;a.yt=0;a.yR=null;a.BD=null;}
function ANN(a){var b,c;b=a.fu;c=new J;L(c);V(H(c,C(265)),b);$rt_globals.console.info($rt_ustr(K(c)));EY(a.e2,a.sQ);KY(a.jw,a.fu,0,HU(a),5000,a.pA.a,20);Ca(a.e2,1);WR(a.jw,a.e2);Ca(a.e2,0);b=a.fu;c=new J;L(c);V(H(c,C(265)),b);$rt_globals.console.info($rt_ustr(K(c)));ADl(a.iu,a.fu/a.m$|0,a.e2);ACC(a.iu,a.fu,HU(a),a.BD,a.e2);}
function AX1(a,b,c){a.pA=b;Tq(a.iu,BK(0,0),50,HU(a),c);T6(a.iu,a.e2,0,HU(a));}
function V9(a){return 5000-HU(a)|0;}
function HU(a){return Be(a.vZ,a.pA.b);}
function Dx(){var a=this;CA.call(a);a.qF=null;a.hs=null;a.rp=0.0;}
function Baq(a){var b=new Dx();Ih(b,a);return b;}
function Ih(a,b){Ey(a,b);a.qF=AKU(0,0,64);a.hs=new Bh;GH(b.bL,GT(BF(a)));}
function ABI(a){EY(a.D.U,a.qF);}
function TR(a,b,c){Ct(a.hs,b);a.rp=c;}
var Sa=G(Dx);
var YD=G(Cq);
function HG(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.D.bL;f=new R7;f.EH=a;f.vf=b;g=P(B,1);h=g.data;i=BP(1);i.data[0]=b;h[0]=i;CG(e,f,C(266),g);d=d+1|0;}}
function AML(b){var c;c=b.data;AKp(c[0],c[1],Zo(Jj(b,2)));}
function AKp(b,c,d){var e,f,g,h,i;d=d.data;e=Bk();b=BT(b);c=BT(c);f=new J;L(f);H(H(H(H(f,C(267)),b),C(268)),c);Bf(e,K(f));b=Bk();g=d.length;h=1;i=0;while(i<g){h=(31*h|0)+d[i]|0;i=i+1|0;}c=new J;L(c);V(H(V(H(c,C(269)),g),C(270)),h);Bf(b,K(c));}
function XW(){var a=this;Dx.call(a);a.fs=null;a.hc=null;a.ok=null;a.Cg=null;a.q4=null;}
function ARD(a,b){b=b/5.0;I2(b-(b|0),1.0,1.0,1.0,a.hc.be);return 0;}
function AZ5(a){ABI(a);EW(a.fs,a.D.U,a.Cg,0,0);Xc(a.hc,a.D.U,a.ok,0,0,0.0);NC(a.D.U,C(253));}
function A6L(a,b,c){var d,e,f;TR(a,b,c);Y(a.hc.x,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.fs;e=d.x;f=b.a;d=d.v;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function TU(){var a=this;Dx.call(a);a.hv=null;a.rG=null;a.m7=null;a.k4=null;a.ko=null;}
function A7q(a){var b,c,d,e,f,g;ABI(a);b=a.D.U;c=a.k4;Mw(b,c.a,c.b,a.ko);b=a.hv;c=a.rG;d=a.hs;e=a.D.U;f=0;while(true){g=0;while(true){EW(b,e,c,g,f);g=g+BV(c)|0;if(g>=d.a)break;}f=f+CX(c)|0;if(f>=d.b)break;}Gx(a.D.U);}
function ARk(a,b,c){TR(a,b,c);Y(a.ko,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AB4(){var a=this;CA.call(a);a.fa=null;a.pl=null;a.hf=null;a.cq=null;a.fI=0;a.i6=null;a.f9=0;a.E9=20;a.GP=11;a.Fw=220;a.mK=null;a.Gf=5000;a.iP=0;a.hn=null;}
function AWN(a){var b,c,d,e,f,g,h;b=a.i6;c=a.f9;d=a.mK;KY(b,c,0,d.b,5000,d.a,20);Ca(a.fa,1);WR(a.i6,a.fa);if(a.cq===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.pl,Dp(e),0.0,c);}b=C4(a.fa);a.cq=b;CU(b,a.pl);}if(a.f9<=a.fI)while(true){f=a.fI;if(f<=a.f9)break;a.fI=f-20|0;b=a.hf;g=a.iP-1|0;a.iP=g;B1(b,Dp(g),0.0,20.0);Km(a.cq,a.hf,0,a.fI%220|0);E8(a.hf);}else while(a.fI<(a.f9-20|0)){b=a.hf;g=a.iP+1|0;a.iP=g;B1(b,Dp((g+11|0)-1|0),0.0,20.0);Km(a.cq,a.hf,0,a.fI%220|0);E8(a.hf);a.fI=a.fI+20|0;}b=IF(0,0,BV(a.cq),CX(a.cq));I6(b,
0,0,BV(a.cq),CX(a.cq));H3(b,a.hn.data[0]);FA(b,a.hn.data[1]);EW(b,a.fa,a.cq,400,0);g=a.f9%220|0;f=Be(CX(a.cq)-g|0,200);d=IF(0,0,BV(a.cq),f);I6(d,0,g,BV(a.cq),f);H3(d,a.hn.data[0]);FA(d,a.hn.data[1]);EW(d,a.fa,a.cq,0,0);h=IF(0,f,BV(a.cq),(CX(a.cq)-f|0)-20|0);I6(h,0,0,BV(a.cq),(CX(a.cq)-f|0)-20|0);H3(h,a.hn.data[1]);FA(h,a.hn.data[0]);EW(h,a.fa,a.cq,0,0);}
function A0h(a,b,c){Ct(a.mK,b);}
function A4E(a,b){return 0;}
function ABz(a){return 5000-a.mK.b|0;}
function KZ(){Dx.call(this);this.eA=0;}
function ABf(a){var b,c;b=a.D.bL;c=new VA;c.yO=a;SF(b,c,XY(a));}
function Rr(a){var b,c,d,e;b=a.eA+1|0;a.eA=b;c=GT(F(KZ));d=new J;L(d);H(H(V(H(d,C(271)),b),C(29)),c);e=K(d);c=a.D.bL;d=new W$;d.y0=e;UK(c,e,d,XY(a));}
function XY(a){var b;b=new AAo;b.C8=a;return b;}
function ASl(a,b,c,d){a:{switch(c){case 0:break;case 2:Rr(a);break a;default:break a;}ABf(a);}return 1;}
function TD(){var a=this;Dx.call(a);a.vt=null;a.gX=null;a.l8=null;a.p2=null;a.wW=null;}
function AXx(a){var b,c,d,e,f,g,h,i;if(a.l8===null){b=a.D.U;c=a.wW;d=IV(b,c.iC,Ck(c.hu,a.rp));Cr(b.cu,d);e=C6(EA(b.cu,C(272)));f=Bk();g=d.pF;c=new J;L(c);Dg(H(c,C(273)),g);Bf(f,K(c));h=NY(d,1.1799999475479126);c=Bk();i=new J;L(i);V(H(V(H(i,C(274)),e),C(174)),h);Bf(c,K(i));c=Ia(b,e,h);a.p2=c;Cr(c,d);B1(a.p2,C(272),0.0,d.eM);b=C4(b);a.l8=b;CU(b,a.p2);F$(a.gX,a.l8);Gj(a.gX);b=a.gX.bt;F2();BL(b,A_J);BL(a.gX.be,Bar);}b=a.D.U;EY(b,a.vt);c=a.gX;i=c.x;f=a.hs;e=f.a;c=c.v;Y(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EW(a.gX,b,
a.l8,0,0);}
function Hv(){var a=this;CA.call(a);a.wo=null;a.cz=null;a.ey=null;a.dP=null;a.fO=null;a.e$=null;}
function Pt(a,b){var c,d;Ey(a,b);a.wo=Cs(20);a.cz=Tz();a.ey=new Bh;a.dP=new Bh;a.fO=new Bh;a.e$=new Bh;c=b.o.bE;d=new ADV;d.EZ=a;Z(c,d);Z(b.o.b2,a);b=a.cz.bt;F2();BL(b,A_J);BL(a.cz.be,Bar);}
function AG9(a){var b,c,d;b=a.D.U;EY(b,a.wo);c=a.cz;d=c.x;Bv(b,d.a,d.b,c.v,c.bt);Ca(b,1);c=a.cz;d=c.x;AF5(b,d.a,d.b,c.v,a.ey,a.dP,a.fO,a.e$,c.be);Ca(b,0);}
function A2q(a,b){return 0;}
var Uz=G(Hv);
function A4p(a,b,c){var d,e,f;d=a.cz;e=d.x;f=b.a;d=d.v;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);Y(a.ey,0,0);Y(a.dP,Be(b.a,b.b),Be(b.a,b.b));b=a.fO;d=a.ey;Y(b,d.a,d.b+20|0);b=a.e$;d=a.dP;Y(b,d.a,d.b+40|0);}
function A5p(a,b){var c,d,e;Ct(a.ey,b.k);b=a.dP;c=a.cz;d=c.x;e=d.a;c=c.v;Y(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fO;c=a.ey;Y(b,c.a,c.b+20|0);b=a.e$;c=a.dP;Y(b,c.a,c.b+40|0);return 0;}
function Uy(){var a=this;Hv.call(a);a.gw=null;a.gY=null;}
function A64(a,b){var c;c=a.dP;b=b.k;c.b=b.b-50|0;a.e$.b=b.b+100|0;return 1;}
function APU(a){var b,c,d,e,f,g,h;b=Bd(a.ey.a,a.fO.a);c=Be(a.dP.a,a.e$.a);d=Be(a.ey.b,a.dP.b)-50|0;e=Bd(a.fO.b,a.e$.b)+50|0;HI(a.cz,b,d,c-b|0,e-d|0);AG9(a);f=a.cz.x.a-10|0;AB6(a,a.D.U,10,f,a.ey,a.fO);g=a.cz;h=g.x.a+g.v.a|0;AB6(a,a.D.U,h,f,a.dP,a.e$);}
function AB6(a,b,c,d,e,f){var g;Y(a.gw,c,a.cz.x.b);Y(a.gY,d,e.b-a.cz.x.b|0);g=a.gw;Bv(b,g.a,g.b,a.gY,a.cz.bt);Y(a.gw,c,e.b);Y(a.gY,d,f.b-e.b|0);e=a.gw;Bv(b,e.a,e.b,a.gY,a.cz.be);Y(a.gw,c,f.b);e=a.gY;g=a.cz;Y(e,d,(g.x.b+g.v.b|0)-f.b|0);e=a.gw;Bv(b,e.a,e.b,a.gY,a.cz.bt);}
function AOy(a,b,c){}
function Xq(){var a=this;Cq.call(a);a.DH=3;a.xp=null;a.kC=null;a.q3=0;}
function ARZ(a,b,c){var d,e;if(b===0.0){DX(a.w,AAb(a));d=T9(a,0.5,0,C(275));e=a.r.bX;EJ(DX(a.w,d),BK(e.a/10|0,e.b/10|0),BK((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function AAb(a){var b,c,d,e,f,g;b=a.q3+1|0;a.q3=b;c=new J;L(c);V(H(c,C(276)),b);c=T9(a,1.0,1,K(c));d=a.r.bX;e=d.a/10|0;f=e+Ei(a.kC,e)|0;e=d.b/20|0;e=e+Ei(a.kC,e)|0;b=d.a;b=((b*7|0)/10|0)+Ei(a.kC,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+Ei(a.kC,g/10|0)|0;EJ(c,BK(f,e),BK(b,g));return c;}
function T9(a,b,c,d){var e,f,g;e=AGf(a.r);if(d===null)f=new AFr;else{f=new AFt;f.vG=e;f.vH=d;}g=new Q5;Ms(g);g.mQ=new B4;g.qs=new Bh;g.zs=f;g.sR=b;if(c){d=G9(g,a.r);JR(d,Bas,Bat);g=d;}LO(e,g);Ev(e,Fx());ABZ(e,a.xp,3.0);d=new AFs;d.rn=a;d.ro=e;UB(e,d);return e;}
function ED(){Cq.call(this);this.jb=null;}
function A9f(a){var b=new ED();KL(b,a);return b;}
function KL(a,b){Gv(a,b);Z(a.r.dz,a);BL(a.dh,Cs(43));}
function AZM(a){return AXR();}
function ASF(a){return 1;}
function ADC(a,b){Ev(a.jb,b);}
function AKJ(a,b){var c,d,e;c=a.r.bX;d=!a.p$()?0:AEi(b);e=c.b-d|0;EJ(b,BK(c.a/20|0,d+(e/20|0)|0),BK((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A47(a,b,c){if(b===0.0){a.jb=A6N(a.r,a.jX());ADC(a,Fx());if(a.p$())CZ(a.jb,H4(BF(a)));DX(a.w,a.jb);a.ot(a.jb);}}
function Rn(){var a=this;ED.call(a);a.mL=null;a.gK=null;}
function AO$(a){var b;b=G3(a.mL);a.gK=b;AMH(b);NB(a.r,a.gK);return a.gK;}
function AYp(a){return 0;}
function A66(a,b){AKJ(a,b);J0(a);}
function AVD(a,b){BG(b);Gb(a.mL,b);E_(a.gK,b);ADC(a,b.cd);}
function AUX(a,b){G0(a.w,b);}
function Yn(){B.call(this);this.xK=null;}
function A4V(a,b){Ea(a.xK,null);return 0;}
function Qv(){var a=this;ED.call(a);a.wn=null;a.gg=null;}
function AKz(){var b;b=I(JN,[Ef(1,3,4,5,1),Ef(5,6,10,2,2),Ef(12,2,13,3,3),Ef(15,3,17,2,4)]);return A4h(P(Ij,0),P(Ij,0),b);}
function A0C(a){var b,c,d,e;b=AM2(a.r);a.gg=b;OZ(b,a.wn);c=a.gg.c$;BG(c);d=new ACN;d.rT=c;b=Qu(C(277),4,d);d=a.gg.c9;BG(d);e=new ACO;e.uo=d;c=Qu(C(277),4,e);D$(a.gg.c$,b);D$(a.gg.c9,c);Oy(a.gg,AKz());return a.gg;}
function U4(){Cq.call(this);this.hz=null;}
function Oz(){return EQ(1);}
function AAy(a){var b,c,d,e;b=new AAA;c=a.hz;KK(b,a.w,c,new WB);d=new AFP;d.jj=0;b.e_=d;d=AM2(b.K.G);b.cP=d;OZ(d,c);c=Iy(C(278),0);d=Iy(C(279),0);DW(c);DW(d);e=new TP;e.tO=b;c.cD=e;e=new TN;e.wj=b;d.cD=e;D$(b.cP.c$,c);D$(b.cP.c9,d);d=Lb(b,b.cP,0.0);b.jp=d;c=new TO;c.yL=b;d.i5=c;c=new TM;c.Gh=b;d.i1=c;DX(b.K,d);}
function AXf(a,b,c){if(b===0.0)AAy(a);}
function AAZ(){var a=this;ED.call(a);a.pM=null;a.mP=null;}
function ARp(a){var b,c,d,e,f,g;b=AM2(a.r);a.mP=b;OZ(b,a.pM);b=Iy(C(280),1);c=new S$;c.vd=a;b.cD=c;DW(b);c=Iy(C(281),1);d=new S9;d.yW=a;c.cD=d;DW(c);e=Iy(C(280),1);d=new Ta;d.zA=a;e.cD=d;DW(e);f=Iy(C(281),1);d=new S_;d.Da=a;f.cD=d;DW(f);d=AMw(C(282),0,I(Da,[b,c]));Iq(d);g=AMw(C(283),0,I(Da,[e,f]));Iq(g);D$(a.mP.c$,d);D$(a.mP.c9,g);return a.mP;}
function ACA(a){var b,c;b=a.w.G.b9;c=new Vr;c.A6=a;Gz(b,c);}
function AFc(a){var b,c;b=a.w.G.b9;c=new ZZ;c.yB=a;Gz(b,c);}
function AFv(a){var b,c;b=a.w.G.b9;c=new P7;c.xu=a;F4(b,c);}
function AAH(a){var b,c;b=a.w.G.b9;c=new Qk;c.EP=a;F4(b,c);}
function TT(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bk();f=H4(BF(d[c]));g=BT(d[c]);h=new J;L(h);H(H(H(H(V(H(h,C(284)),c),C(285)),f),C(29)),g);Bf(e,K(h));c=c+1|0;}}
function Sb(){Cq.call(this);this.nc=null;}
function A04(a,b,c){if(b===0.0)LC(a);}
function LC(a){var b;b=AVP(a.w,a.nc,new SZ);K8(b);return b;}
function AEg(){var a=this;CA.call(a);a.t4=null;a.no=null;a.fG=null;a.pz=null;a.nn=0.0;a.hG=null;a.xt=null;a.uW=null;a.zj=null;a.z5=null;a.s6=null;a.q7=null;a.DC=null;a.xT=null;a.mb=null;}
var Bau=0;function A8R(a){var b=new AEg();AXi(b,a);return b;}
function AXi(a,b){var c,d,e;Ey(a,b);a.t4=new B4;a.no=AFE(1.0,0.0,0.0,1.0);a.fG=Tz();a.pz=new Bh;a.nn=3.1415927410125732;c=ALW();a.hG=c;a.xt=H9(c,1.25);a.uW=H9(a.hG,1.3333333730697632);a.zj=H9(a.hG,1.5);a.z5=H9(a.hG,1.6666666269302368);a.s6=H9(a.hG,2.0);a.q7=AFE(a.nn/24.0,15.0,3.0,0.5);c=AFE(a.nn/12.0,25.0,3.0,0.5);a.DC=c;a.xT=D_([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.mb=I(B4,[a.hG,a.xt,a.uW,a.zj,a.z5,a.s6,a.q7,c]);c=b.o.bE;d=new RQ;d.GN=a;Z(c,d);Z(b.o.b2,a);b=a.fG.be;F2();BL(b,A_J);HI(a.fG,0,0,600,60);e
=NO(0.5,0.375);JW(0.375,e);JW(0.375,JW(3.0,NO(e,3.0)));H9(ALW(),3.0);}
function A6Y(a,b,c){var d,e,f;Ct(a.pz,b);d=a.fG;e=d.x;f=b.a;d=d.v;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function H9(b,c){var d;d=new B4;Wj(b,c,d);return d;}
function ALW(){var b;b=new B4;Me(b);return b;}
function A1o(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.D.U;EY(b,a.t4);Ca(b,1);c=a.fG;d=c.x.a;e=c.v.b/2|0;f=0;while(true){g=a.mb.data;if(f>=g.length)break;h=a.xT.data[f];c=g[f];i=Yp(c);j=a.fG;k=j.x;l=k.a;m=k.b;MP(b,l,m+h|0,j.v,d+i,((m+e|0)+h|0)+i,c,a.no);f=f+1|0;}if(Bau){c=A8I(1,2);n=0;while(n<1000){h=Ei(c,a.mb.data.length);l=Ei(c,a.pz.b-a.fG.v.b|0);j=a.mb.data[h];i=j.bw;i=i-(i|0)>=0.25?0.0:0.5;k=a.fG;MP(b,k.x.a,l,k.v,d+i,(e+l|0)+i,j,a.no);n=n+1|0;}}Ca(b,0);}
function AVp(a,b){return Bau;}
function SQ(){Cq.call(this);this.nL=null;}
function A0j(a,b,c){if(b===0.0)ADw(a);}
function ADw(a){AEP(new Mo,a.w,a.nL,new AEQ);}
function AAc(){var a=this;ED.call(a);a.l5=null;a.wZ=null;}
function A28(a){var b,c,d,e;b=U6(a.r);a.l5=b;BG(b);c=new UD;c.t1=b;b=Qu(C(277),4,c);d=Bk();e=Pw(b);c=new J;L(c);V(H(c,C(286)),e);Bf(d,K(c));D$(a.l5,b);KI(a.l5,a.wZ);b=a.l5;return Kg(b,G9(b,a.r));}
function A4y(a,b){var c;c=a.r.bX;EJ(b,BK(c.a/30|0,c.b/10|0),BK((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
var PB=G(K7);
function AZp(a){return EQ(1);}
function KM(){var a=this;B.call(a);a.Dg=null;a.eF=null;a.vQ=null;a.EG=null;a.tN=null;a.lu=null;a.se=null;a.xz=null;a.mi=null;a.mc=null;a.g1=null;}
function Bav(a,b,c,d,e,f,g,h,i,j,k){var l=new KM();M9(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function M9(a,b,c,d,e,f,g,h,i,j,k,l){a.Dg=b;a.eF=c;a.vQ=d;a.EG=e;a.tN=f;a.lu=g;a.se=h;a.xz=i;a.mi=j;a.mc=k;a.g1=l;}
function AHA(){B.call(this);this.Gq=null;}
function ALF(a){var b=new AHA();AYd(b,a);return b;}
function AYd(a,b){a.Gq=b;}
var AGz=G(0);
function AJ6(){var a=this;B.call(a);a.pH=null;a.lD=null;a.yS=null;a.rb=null;}
function AMr(a,b,c,d){var e=new AJ6();A6_(e,a,b,c,d);return e;}
function A6_(a,b,c,d,e){a.pH=b;a.lD=c;a.yS=d;a.rb=e;}
var AH2=G(0);
function Fx(){var b,c,d;b=new Jw;c=new JE;A2O();d=Baw;Pn(c,d,Bax,Bay,Baz,BaA,d);Mx(b,c,AJq(),AJA(S(C(287)),S(C(246)),S(C(247))),AJq(),AJZ(1,0.125),BaB,BaC);return b;}
function AJq(){var b,c;b=new KX;c=S(C(288));A2O();LK(b,c,BaD,BaE);return b;}
function AI4(){var b,c;b=new KX;c=S(C(247));AYo();LK(b,c,BaF,BaG);return b;}
function ANd(){var b,c;b=new KX;AIW();c=BaH;AYz();LK(b,c,BaI,BaJ);return b;}
function AJM(){var a=this;B.call(a);a.AH=null;a.xJ=null;a.v1=null;a.rm=null;}
function AGb(a,b,c,d){var e=new AJM();AYQ(e,a,b,c,d);return e;}
function AYQ(a,b,c,d,e){a.AH=b;a.xJ=c;a.v1=d;a.rm=e;}
function AF1(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d7.xJ;break a;case 3:if(c!=3){b=b.d7.rm;break a;}b=b.d7.v1;break a;default:b=b.by.eF;break a;}b=b.d7.AH;}return b;}
function Is(a,b,c){return AF1(a,b,0,c);}
function Nd(){var a=this;B.call(a);a.my=null;a.kY=null;}
function XE(a,b){var c;c=a.kY;a.kY=b;return c;}
function Li(){var a=this;Nd.call(a);a.b4=null;a.ce=null;a.hi=0;a.hq=0;}
function NJ(a){var b;b=L7(a);if(b==2){if(L7(a.ce)<0)a.ce=P3(a.ce);return Q8(a);}if(b!=(-2))return a;if(L7(a.b4)>0)a.b4=Q8(a.b4);return P3(a);}
function L7(a){var b,c;b=a.ce;c=b===null?0:b.hi;b=a.b4;return c-(b===null?0:b.hi)|0;}
function P3(a){var b;b=a.b4;a.b4=b.ce;b.ce=a;Ff(a);Ff(b);return b;}
function Q8(a){var b;b=a.ce;a.ce=b.b4;b.b4=a;Ff(a);Ff(b);return b;}
function Ff(a){var b,c,d;b=a.ce;c=b===null?0:b.hi;b=a.b4;d=b===null?0:b.hi;a.hi=Bd(c,d)+1|0;a.hq=1;b=a.b4;if(b!==null)a.hq=1+b.hq|0;b=a.ce;if(b!==null)a.hq=a.hq+b.hq|0;}
var ANh=G();
function AO4(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new ZD;c=c.buffer;d.gU=c;d.qZ=new $rt_globals.Int8Array(c);d.ne=new $rt_globals.Uint16Array(c);d.BN=new $rt_globals.Int32Array(c);d.td=new $rt_globals.Float32Array(c);d.tx=new $rt_globals.Float64Array(c);e=d.gU.byteLength;c=new J;L(c);V(H(c,C(289)),e);C2(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(290)),e);C2(K(c));f=b.callToCpp2();c=new J;L(c);Dg(H(c,C(291)),f);C2(K(c));c=PQ(d,b.getC8String());g=new J;L(g);H(H(g,C(292)),c);C2(K(g));c
=X3(d,b.getC16String());g=new J;L(g);H(H(g,C(293)),c);C2(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gU,h,8));c=AIs(i);g=new J;L(g);H(H(g,C(294)),c);C2(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gU,h,8));c=AVv(j);g=new J;L(g);H(H(g,C(295)),c);C2(K(g));k=ALd(d,b.getCDoubleArray8(),8);l=AXF(k);c=new J;L(c);H(H(c,C(296)),l);C2(Er(c));l=AXB(b.getC8String(),C(297),d);c=MM();H(H(c,C(298)),l);C2(Er(c));l=ATb(b.getC16String(),C(299),
d);c=MM();H(H(c,C(300)),l);C2(Er(c));c=A3Z(i,d,b.getCIntArray8(),D_([11,22,33,44,55,66,77,88]));g=MM();H(H(g,C(301)),c);C2(Er(g));c=AVG(j,d,b.getCFloatArray8(),100,D_([111,222,333,444,555,666,777,888]));g=MM();H(H(g,C(302)),c);C2(Er(g));b=A5n(k,d,b.getCDoubleArray8(),1000,D_([1111,2222,3333,4444,5555,6666,7777,8888]));c=MM();H(H(c,C(303)),b);C2(Er(c));}
function AVG(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(304);h=0;i=e;a:{while(h<g){if(C6(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.td[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(305);}return C(306);}
function A5n(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(304);h=0;i=e;a:{while(h<g){if(G8(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.tx[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(305);}return C(306);}
function A3Z(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(304);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.BN[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(305);}return C(306);}
function AXB(b,c,d){var e,f,g,h;e=PQ(d,b);if(!Bj(c,e))return C(307);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.qZ[h])return C(308);f=f+1|0;}return C(305);}
function ATb(b,c,d){var e,f,g,h;e=X3(d,b);if(!Bj(c,e))return C(307);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.ne[h>>>1|0]&65535))return C(308);f=f+1|0;}return C(305);}
function C2(b){ZB(C(2),b);}
function ASf(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function ZT(){B.call(this);this.sx=null;}
function AWQ(a,b){return ALe(a.sx,b);}
function ZR(){B.call(this);this.CQ=null;}
function A0T(a,b){ALt(a.CQ,b);}
function ZS(){B.call(this);this.y7=null;}
function AV1(a,b){return AGx(a.y7,b);}
function AJH(){KW.call(this);this.dX=null;}
function Lq(){var a=new AJH();A6F(a);return a;}
function IF(a,b,c,d){var e=new AJH();A1X(e,a,b,c,d);return e;}
function A6F(a){ADP(a);a.dX=new B4;}
function A1X(a,b,c,d,e){ADP(a);a.dX=new B4;HI(a,b,c,d,e);}
function Gj(a){var b,c;b=a.v;c=a.dX;Y(b,c.bj-c.bs|0,c.bG-c.bw|0);}
function F$(a,b){I6(a,0,0,BV(b),CX(b));}
function I6(a,b,c,d,e){Cv(a.dX,b,c,d,e);}
function EW(a,b,c,d,e){var f;f=a.x;DQ(b,f.a+d|0,f.b+e|0,a.v,a.dX,c,a.be,a.bt,0);}
function TZ(a,b,c,d){var e;e=a.x;DQ(b,e.a,e.b,a.v,a.dX,c,a.be,a.bt,d);}
function I4(a,b,c,d,e,f,g){DQ(b,c,d,a.v,a.dX,e,!f?a.be:a.bt,!f?a.bt:a.be,g);}
function H3(a,b){BL(a.be,b);}
function FA(a,b){BL(a.bt,b);}
function U5(){B.call(this);this.fV=null;}
function AZn(a,b){var c,d,e,f,g,h;c=b.k;d=c.a;e=a.fV.hZ;f=e.v;d=d-f.a|0;g=c.b-f.b|0;Y(e.x,d,g);c=a.fV;e=c.D.bL;b=b.k;d=0;a:{while(true){h=c.jv.data;if(d>=h.length)break;if(Ft(h[d],b)){b=c.q$.data[d];break a;}d=d+1|0;}b=null;}ABi(e,b);return 1;}
function ANY(a,b,c,d){if(!c&&d==2){b=a.fV;TA(b,b.eH);}return 1;}
function AZg(a,b,c){var d,e;d=Bk();e=new J;L(e);V(H(e,C(309)),c);Bf(d,K(e));if(c)return null;d=b.k;e=!Ft(a.fV.eH,d)?null:d;Vs(a.fV.j7,d.a,d.b);b=a.fV;Z2(b.j7,Ny(b.D.bL));if(e===null)b=A_Q;else{b=new AD2;b.tI=a;b.tJ=e;}return b;}
function AYH(a,b,c){var d;b=Bk();d=new J;L(d);V(H(d,C(310)),c);Bf(b,K(d));return 1;}
function AAk(){B.call(this);this.Ds=null;}
function A01(a,b){return Ym(a.Ds,b);}
function AAj(){B.call(this);this.tb=null;}
function AQV(a,b){return Ym(a.tb,b);}
function AAi(){B.call(this);this.EV=null;}
function A16(a,b,c){var d,e;Bf(Bk(),C(311));d=!c?C(312):C(55);e=new J;L(e);H(H(H(e,C(313)),d),C(314));OV(b,K(e));return 1;}
function AAh(){B.call(this);this.Fz=null;}
function AYe(a){Bf(Bk(),C(315));}
function AAg(){B.call(this);this.F2=null;}
function AUb(a,b){Bf(Bk(),C(316));return 1;}
function AAf(){B.call(this);this.Cd=null;}
function A5T(a,b,c,d){var e,f,g;b=a.Cd;e=( -d|0)/10|0;b=b.eH;f=b.v;f.a=f.a+e|0;f.b=f.b+e|0;b=b.x;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function HO(){var a=this;B4.call(a);a.hS=0;a.hV=0;a.hT=0;a.hU=0;}
function Cs(a){var b=new HO();AXo(b,a);return b;}
function DE(a,b,c){var d=new HO();A0b(d,a,b,c);return d;}
function S(a){var b=new HO();A4_(b,a);return b;}
function Fd(a,b,c,d){var e=new HO();Sz(e,a,b,c,d);return e;}
function B0(a){var b=new HO();Lw(b,a);return b;}
function AXo(a,b){Sz(a,b,b,b,255);}
function A0b(a,b,c,d){Sz(a,b,c,d,255);}
function A4_(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hS=K0(Q(b,1))*17|0;a.hV=K0(Q(b,2))*17|0;a.hT=K0(Q(b,3))*17|0;a.hU=255;}else{a.hS=Mv(Q(b,1),Q(b,2));a.hV=Mv(Q(b,3),Q(b,4));a.hT=Mv(Q(b,5),Q(b,6));a.hU=M(b)!=9?255:Mv(Q(b,7),Q(b,8));}Ja(a.hS,a.hV,a.hT,a.hU,a);return;}}
function Sz(a,b,c,d,e){a.hS=b;a.hV=c;a.hT=d;a.hU=e;Ja(b,c,d,e,a);}
function Lw(a,b){a.hS=b.hS;a.hV=b.hV;a.hT=b.hT;a.hU=b.hU;BL(a,b);}
function K0(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mv(b,c){return (16*K0(b)|0)+K0(c)|0;}
var AIF=G(0);
function EQ(b){return !b?I(BC,[C(158),C(169),C(317)]):I(BC,[C(158),C(169),C(317),C(34)]);}
function XU(){B.call(this);this.mM=null;}
function AQv(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mM.dN;e=D0();f=e-0.5+(D0()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+D0()*0.3;h=0.5+D0()*0.5;I2(e,g,h,1.0,b.be);I2(f,g,h,1.0,b.bt);b=a.mM;BL(b.em.be,b.dN.be);b=a.mM;BL(b.em.bt,b.dN.bt);}return 1;}
function XQ(){var a=this;B.call(a);a.ov=null;a.oW=null;}
function AH3(){var a=this;B.call(a);a.gA=null;a.cH=null;a.ho=null;a.im=null;a.oD=null;a.c2=null;a.h$=null;a.dn=0;a.gD=0;a.oV=0;a.kU=0;a.k7=0;a.ie=0;a.ln=null;a.pN=null;a.xR=null;a.or=null;}
function ALK(){var a=new AH3();AVO(a);return a;}
function AVO(a){a.cH=Tz();a.ho=new Bh;a.im=new Bh;a.c2=BaK;a.kU=(-1);a.k7=1;}
function N3(a,b){OR(a);a.c2=b;}
function Kf(a,b,c){a.gA=b;AEt(a,c);OR(a);}
function Kh(a,b){var c;a.oD=b.l6;c=b.pQ.qu;BL(a.cH.be,c);c=b.jM.kc;BL(a.cH.bt,c);a.or=b.pQ;}
function Nx(a){a.h$=BY(a.h$,null);Y(a.ho,0,0);a.c2=BaK;a.kU=(-1);ACL(a.cH);}
function AEt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KU(b);d=b.cs;BG(a.gA);Cr(c,a.gA);e=NY(a.gA,1.25);f=0;a.dn=Ck(2.0,d);a.gD=Ck(3.0,d);a.oV=Ck(12.0,d);g=0;h=a.c2.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=LR(c,l.og);n=a.oV;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fK;b.a=g;b.b=0;b=l.eV;b.a=n;b.b=e;Cv(l.kQ,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.ho;b.a=g;b.b=e;b=a.cH.v;n=a.ie;if(!n){m=a.dn;m=(g+m|0)+Bb(m,a.c2.data.length)|0;}else m=(f+(a.dn*2|0)|0)+(a.gD*2|0)|0;b.a=m;if(!n)e=e+(a.dn*2|0)|0;else{n=a.dn;e=(Bb(e+n|0,a.c2.data.length)+n
|0)+(a.gD*2|0)|0;}b.b=e;}
function NZ(a,b,c){var d,e,f,g,h,i,j;Y(a.cH.x,b,c);d=a.dn+a.gD|0;e=a.c2.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fK;j.a=b+d|0;j.b=c+h|0;if(!a.ie){if(!i.eV.a)AGm();d=d+(i.eV.a+a.dn|0)|0;}else{if(!i.eV.b)AGm();h=h+(i.eV.b+a.dn|0)|0;}g=g+1|0;}}
function AGm(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ER(a){var b,c;b=a.ho;if(b.a&&b.b)return a.cH.v;c=new Bt;Bn(c,C(318));N(c);}
function OR(a){a.k7=1;}
function MR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bR;if(!a.c2.data.length)return;if(a.h$===null)a.h$=C4(c);a:{if(!a.k7){d=a.ho;if(Bb(d.a,d.b))break a;}d=a.ho;if(!Bb(d.a,d.b))AEt(a,b);d=a.ho;e=d.a;f=d.b;if(!Bb(e,f))return;d=Eh(c,e,f,b.cX);Cr(d,a.gA);g=NY(a.gA,0.125);h=a.gA;i=h.eM;g=g+i-(i+h.e7)/16.0;j=a.c2.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.og,h.kQ.bs+a.oV,g);f=f+1|0;}CU(a.h$,d);a.k7=0;EP(d);}if(!LP(a.cH)){d=a.cH;AKZ(c,d.v,d.x,d.bt,a.dn,a.im);d=a.cH;h=d.v;k=d.x;d=d.be;e=a.dn;l=a.im;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;Bv(c,k.a+e|0,k.b+e|0,l,d);if(a.ie){d=a.cH;AMi(c,d.v,d.x,0,0,ZF(a.oD,b.cs),a.oD.oH,a.im);}}j=a.c2.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fK;e=h.a;f=h.b;h=d.eV;k=d.kQ;l=a.h$;o=a.or;DQ(c,e,f,h,k,l,o.sB,WF(o,d.lG),b.cX);n=n+1|0;}b:{if(a.ie){j=a.c2.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.im;e=(a.cH.v.a-(a.dn*2|0)|0)-(a.gD*2|0)|0;h=d.eV;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fK;Bv(c,k.a+h.a|0,k.b,b,WF(a.or,d.lG));}p=p+1|0;}}}}
function Ow(a,b,c){var d,e,f,g,h,i;d=Ft(a.cH,b);e=!d?(-1):Qh(a,b);f=a.kU;if(f!=e){if(f>=0){g=a.c2.data[f];g.lG=0;if(a.xR!==null){h=Bk();g=BT(g);i=new J;L(i);H(H(V(H(i,C(319)),f),C(320)),g);Bf(h,K(i));}}if(e>=0){h=a.c2.data[e];g=a.pN;if(g!==null)g.xW(b,e,h);h.lG=1;}a.kU=e;}return d&&G$(c)?1:0;}
function OU(a,b,c,d){var e,f;e=Qh(a,b);if(e>=0){f=a.c2.data[e];if(!ADS(f))f.nv.e();}return 1;}
function Qh(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c2.data;if(c>=d.length)return (-1);e=d[c];if(GI(b,e.fK,e.eV))return c;if(a.ie){f=e.fK;g=f.a;e=e.eV;h=e.a;g=g+h|0;i=f.b;f=a.im;f.a=(a.cH.v.a-(a.dn*2|0)|0)-h|0;f.b=e.b;if(AGF(b,g,i,f))break;}c=c+1|0;}return c;}
function AFZ(a){a.ie=1;}
function AK0(){var a=this;B.call(a);a.iC=null;a.hu=0.0;a.kD=0;a.kS=0;}
function DB(a,b){var c=new AK0();AUr(c,a,b);return c;}
function AUr(a,b,c){a.iC=b;a.hu=c;a.kD=400;a.kS=700;}
function A44(a,b){if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){b=b;return a.hu===b.hu&&a.kD==b.kD&&a.kS==b.kS&&BR(a.iC,b.iC)?1:0;}return 0;}
function ADi(){B.call(this);this.vM=null;}
function ATc(a,b){var c;c=a.vM;if(b.bc==32)Nx(c.d5);return 0;}
function ADe(){B.call(this);this.wI=null;}
function AVI(a,b){var c,d,e,f;c=a.wI;d=AAw(c.r);HQ(d,Fx(),c.pd);b=b.k;e=SM(4);f=new V7;f.EW=c;Nf(d,b,e,f);H6(c.w,d);return 1;}
var ADf=G();
function A7w(a){Bf(Bk(),C(321));}
var ADg=G();
function AOK(a){Bf(Bk(),C(322));}
function By(){var a=this;B.call(a);a.nv=null;a.kQ=null;a.fK=null;a.eV=null;a.nS=null;a.uT=null;a.lG=0;a.og=null;}
function Yy(a,b){var c=new By();Ce(c,a,b);return c;}
function A9u(a,b,c,d){var e=new By();ALn(e,a,b,c,d);return e;}
function Ce(a,b,c){ALn(a,b,c,null,null);}
function ALn(a,b,c,d,e){a.kQ=new B4;a.fK=new Bh;a.eV=new Bh;a.og=c;a.uT=e;a.nv=b;a.nS=d;}
function ADS(a){return a.nS===null?0:1;}
function VM(){B.call(this);this.DX=null;}
function AXz(a,b){return b.km&&b.bc==32?1:0;}
function VN(){B.call(this);this.Cy=null;}
function AOn(a,b){var c,d,e,f,g,h;c=a.Cy;d=AAw(c.r);HQ(d,Fx(),DB(C(158),25.0));b=b.k;e=P(By,1);f=e.data;g=new By;h=new AFS;h.CP=c;Ce(g,h,C(323));f[0]=g;Nf(d,b,CQ(e),BaL);H6(c.w,d);return 1;}
function AJn(){var a=this;B.call(a);a.qE=0;a.qG=0;}
function Wf(){var a=new AJn();AWE(a);return a;}
function A8I(a,b){var c=new AJn();ANo(c,a,b);return c;}
function AWE(a){ANo(a,AM5(Hg((AIC()))),Hg((AIC()))^(-559038737));}
function ANo(a,b,c){var d;a.qE=b;a.qG=c;d=0;while(d<19){Oe(a);d=d+1|0;}}
function Oe(a){var b,c;b=a.qE;c=a.qG;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.qE=c;a.qG=b;return b;}
function AM5(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AMB(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Ei(a,b){return Wh(a)*b|0;}
function Wh(a){return 5.960464477539063E-8*(Oe(a)&16777215);}
function RV(a,b){var c,d,e;c=AMB(Oe(a));d=AVB( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function PU(){B.call(this);this.y_=null;}
function ATV(a,b,c){var d;d=a.y_;if(b===0.0)MH(d,100);}
function PT(){B.call(this);this.wS=null;}
function ARF(a,b){var c,d,e;c=a.wS;d=b.bc;if(d==32){c.me=c.me?0:1;e=1;}else if(d==13){MH(c,1);e=1;}else if(d!=8)e=0;else{Qt(c,1);e=1;}return e;}
var ABc=G(0);
function AJ7(b,c){var d;d=new Wa;d.yY=b;d.yX=c;return d;}
function AKb(){var a=this;B.call(a);a.h5=null;a.iD=0;a.mp=0;a.hO=0;}
function AKo(a){var b=new AKb();AQF(b,a);return b;}
function AQF(a,b){a.h5=BO();a.hO=0;a.mp=2048;a.iD=b;}
function K4(a,b,c){var d,e,f,g,h,i;d=c.AF(b);e=a.mp;if(d>e){c=new Bt;f=new J;L(f);Br(V(H(V(H(f,C(324)),d),C(325)),e),41);Bn(c,K(f));N(c);}if(!a.iD){b=new BU;Bn(b,C(326));N(b);}a:{b=new B4;if(d){b:{c=a.h5;if(c.q>0){c=B9(c);g=d;while(true){if(!Cb(c))break b;f=Cc(c);if(f.bj>=g)break;}Cv(b,f.bs,f.bw,g,a.iD);f.bs=f.bs+g;h=f.bj-g;f.bj=h;if(h===0.0)AI1(a.h5,f);break a;}}g=a.hO;i=d;Cv(b,0.0,g,i,a.iD);BA(a.h5,AFE(i,a.hO,a.mp-d|0,a.iD));a.hO=a.hO+a.iD|0;}}return b;}
function Jy(a,b){var c,d,e,f,g,h,i;a:{c=ANm(b);b=a.h5;if(b.q>0){d=B9(b);while(true){if(!Cb(d))break a;e=Cc(d);if(e.bw===c.bw){f=e.bs;g=e.bj;h=f+g;i=c.bs;if(h===i){c.bs=f;c.bj=c.bj+g;AAV(d);}else{h=c.bj;if(i+h===f){c.bj=h+g;AAV(d);}}}}}}BA(a.h5,c);}
function Np(a){return BK(a.mp,a.hO);}
function X5(){var a=this;B.call(a);a.sA=null;a.mj=null;}
function AYr(a,b,c){if(c)return A_Q;return Gp(a.mj.jw,b.k,a.sA,1);}
function AOi(a,b,c){return 1;}
function A0v(a,b){var c;c=a.mj;return Gw(c.jw,b.k,c.yR);}
function ABy(){B.call(this);this.B6=null;}
function ATT(a,b,c,d){var e,f;b=a.B6;e=(XI(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fu=Be(Bd(0,b.fu+Bb(e,f)|0),V9(b));return 1;}
function RH(){B.call(this);this.tZ=null;}
function AQS(a,b){var c,d,e;c=a.tZ;if(b.cC&&b.bc==79){if(!b.bN){b=c.D.bL;d=new Yu;d.v$=c;F4(b,d);}else{b=c.D.bL;d=new Yt;d.yx=c;Gz(b,d);}e=1;}else e=0;return e;}
function SB(){B.call(this);this.zc=null;}
function AXA(a,b){var c,d,e,f,g,h,i,j,k;c=a.zc;d=c.w;e=Fx();f=DB(C(158),25.0);g=b.k;h=P(By,5);i=h.data;b=new By;j=new Ve;j.sj=c;Ce(b,j,C(327));i[0]=b;b=new By;j=new Vf;j.s5=c;Ce(b,j,C(328));i[1]=b;b=new By;j=new Vg;j.uM=c;Ce(b,j,C(329));i[2]=b;b=new By;j=new Vh;j.yH=c;Ce(b,j,C(330));i[3]=b;b=new By;k=new Vi;k.zb=c;Ce(b,k,C(331));i[4]=b;Fz(d,e,f,g,CQ(h));return 1;}
function SA(){B.call(this);this.BA=null;}
function A4I(a,b){var c,d,e;c=a.BA.D.bL;d=new Y7;e=P(B,1);e.data[0]=b;CG(c,d,C(332),e);}
function ADs(){B.call(this);this.nD=null;}
function A3Q(a,b){var c,d,e,f,g,h;c=a.nD;d=c.q4;if(d!==null){e=c.fs.x;f=e.a;g=b.k;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.q4=g;}b=b.k;f=b.a;c=c.hc;d=c.v;f=f-d.a|0;h=b.b-d.b|0;Y(c.x,f,h);return 1;}
function AXm(a,b,c){var d;if(!c){d=b.k;b=a.nD;if(!Ft(b.fs,d))d=null;b.q4=d;}return A_Q;}
var AH_=G();
function ANt(b){var c,d;c=Ia(b,250,64);HX(c,C(249),25.0);KF(c,187,187,187);B1(c,C(333),0.0,24.0);B1(c,C(333),0.25,56.0);d=C4(b);CU(d,c);EP(c);return d;}
var Dm=G(0);
var A_2=null;var Bar=null;var A_3=null;var A_J=null;var A_5=null;var A_4=null;var A_7=null;var A_6=null;var A_9=null;var A_8=null;var A_$=null;function F2(){F2=Bm(Dm);AXC();}
function AXC(){A_2=Cs(187);Bar=S(C(334));A_3=Cs(55);A_J=Cs(43);A_5=DE(33,66,131);A_4=DE(60,63,65);A_7=S(C(335));A_6=S(C(336));A_9=Fd(85,85,85,128);A_8=Fd(43,43,43,0);A_$=S(C(235));}
function ZV(){var a=this;B.call(a);a.rv=null;a.mx=null;}
function ARS(a,b,c){var d;if(!c){d=Gp(a.mx.i6,b.k,a.rv,1);if(d!==null)return d;}return A_Q;}
function AYE(a,b,c){return 1;}
function AQA(a,b){var c;c=a.mx;return Gw(c.i6,b.k,St(c.D.bL));}
function Xi(){B.call(this);this.sh=null;}
function A5Q(a,b,c,d){var e,f;b=a.sh;e=(XI(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.f9=Be(Bd(0,b.f9+Bb(e,f)|0),ABz(b));return 1;}
function AE3(){B.call(this);this.xQ=null;}
function ART(a,b){var c,d;a:{c=a.xQ;switch(b.bc){case 67:Rr(c);d=1;break a;case 86:ABf(c);d=1;break a;default:}d=0;}return d;}
var AE2=G();
function A2c(a,b,c){return 0;}
function AE1(){B.call(this);this.tp=null;}
function APT(a,b,c){var d,e;d=a.tp;c=d.eA+1|0;d.eA=c;d=GT(F(KZ));e=new J;L(e);H(H(V(e,c),C(337)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));OV(b,e);return 1;}
var AE0=G();
function AS5(a){return null;}
function AE4(){B.call(this);this.Bj=null;}
function A5j(a){var b,c;b=a.Bj;c=new W3;c.rr=b;return c;}
function Ti(){B.call(this);this.Fc=null;}
function APG(a,b){return 0;}
function Qj(){B.call(this);this.Ay=null;}
function A3b(a,b){var c;c=a.Ay;if(b.km&&b.bc==27){b=Pd(c.w);if(b!==null)Nz(b);}return 0;}
function Ql(){B.call(this);this.wQ=null;}
function A1j(a,b){var c,d,e,f,g,h,i;c=a.wQ;d=AAw(c.r);HQ(d,Fx(),DB(C(158),25.0));b=b.k;e=P(By,1);f=e.data;g=new By;h=c.w;i=new YV;i.z4=c;Ce(g,DS(h,i),C(338));f[0]=g;Nf(d,b,CQ(e),BaL);H6(c.w,d);return 1;}
function Qm(){B.call(this);this.CK=null;}
function A3O(a,b){var c,d,e;c=a.CK;d=c.gK;if(d!==null){e=new ACt;e.Dl=c;e.Dm=b;F_(d,b,e);}}
function Qn(){B.call(this);this.Au=null;}
function A5G(a,b){var c,d,e;c=a.Au;if(DA(c.r,c.gK)){d=c.mL;b=b.k;e=c.gK;Jd(d,b,e,c,e,c,new Yk);}return 1;}
function VR(){B.call(this);this.DU=null;}
function AUO(a,b){return 1;}
function VQ(){B.call(this);this.u6=null;}
function A5J(a,b){var c,d;c=a.u6;if(b.bc!=32)d=0;else{Oy(c.gg,AKz());d=1;}return d;}
function ACB(){B.call(this);this.rz=null;}
function AUN(a,b){var c,d,e,f,g,h;c=a.rz;d=P(By,4);e=d.data;f=new By;g=c.w;h=new AAN;h.BM=c;Ce(f,DS(g,h),C(339));e[0]=f;f=new By;h=c.w;g=new AAM;g.sL=c;Ce(f,DS(h,g),C(340));e[1]=f;f=new By;h=c.w;g=new AAP;g.xa=c;Ce(f,DS(h,g),C(341));e[2]=f;f=new By;h=c.w;g=new AAO;g.vP=c;Ce(f,DS(h,g),C(342));e[3]=f;f=CQ(d);h=c.w;c=c.hz;Fz(h,c.cd,c.f1,b.k,f);return 1;}
function RJ(){B.call(this);this.CB=null;}
function AUz(a,b){var c,d,e,f,g,h,i,j,k;c=a.CB;d=c.w;e=c.pM;f=e.cd;g=e.f1;h=b.k;i=P(By,4);j=i.data;b=new By;e=new YC;e.sM=c;Ce(b,DS(d,e),C(343));j[0]=b;b=new By;e=c.w;k=new YA;k.r7=c;Ce(b,DS(e,k),C(344));j[1]=b;b=new By;e=c.w;k=new Yz;k.u8=c;Ce(b,DS(e,k),C(345));j[2]=b;e=new By;k=c.w;b=new YB;b.Aj=c;Ce(e,DS(k,b),C(346));j[3]=e;Fz(d,f,g,h,CQ(i));return 1;}
function RI(){B.call(this);this.Et=null;}
function A1N(a,b){return b.bc!=32?0:1;}
function QT(){B.call(this);this.t2=null;}
function A5V(a,b){L5(LC(a.t2),b);}
function QS(){B.call(this);this.wu=null;}
function A0w(a,b){var c,d,e,f,g,h;c=a.wu;d=P(By,1);e=d.data;f=new By;g=c.w;h=new Zr;h.vY=c;Ce(f,DS(g,h),C(342));e[0]=f;f=CQ(d);g=c.w;c=c.nc;Fz(g,c.cd,c.f1,b.k,f);return 1;}
function RQ(){B.call(this);this.GN=null;}
function AOz(a,b){return 0;}
function YX(){B.call(this);this.zm=null;}
function AQd(a,b){var c,d,e,f,g,h;c=a.zm;d=P(By,1);e=d.data;f=new By;g=c.w;h=new S3;h.yP=c;Ce(f,DS(g,h),C(341));e[0]=f;f=CQ(d);g=c.w;c=c.nL;Fz(g,c.cd,c.f1,b.k,f);return 1;}
var AI$=G(0);
function AMH(b){It(b,A82(C(347),C(194),ADN(C(348))));}
var Ds=G(0);
var A__=null;var BaM=null;var Bab=null;var Baa=null;var Bad=null;var Bac=null;var Baf=null;var Bae=null;var Bah=null;var Bag=null;var Bai=null;function AQH(){AQH=Bm(Ds);AV0();}
function AV0(){A__=Cs(206);BaM=S(C(349));Bab=S(C(350));Baa=S(C(242));Bad=S(C(351));Bac=S(C(231));Baf=S(C(352));Bae=S(C(353));Bah=Fd(107,106,107,128);Bag=Fd(30,31,34,0);Bai=S(C(244));}
function Cu(){CE.call(this);this.lH=null;}
var BaN=null;var BaO=null;var BaP=null;var BaQ=null;var BaR=null;var A_S=null;var BaS=null;var BaT=null;var BaU=null;var BaV=null;var BaW=null;var BaX=null;var BaY=null;var BaZ=null;var Ba0=null;var Ba1=null;function Vd(){Vd=Bm(Cu);A2k();}
function D7(a,b,c){var d=new Cu();ABt(d,a,b,c);return d;}
function A9k(a,b,c,d){var e=new Cu();AFb(e,a,b,c,d);return e;}
function AHz(){Vd();return Ba1.ef();}
function ABt(a,b,c,d){Vd();Du(a,b,c);a.lH=Kk(d,null);}
function AFb(a,b,c,d,e){Vd();Du(a,b,c);a.lH=Kk(d,e);}
function A2k(){var b,c;b=new Cu;AQH();ABt(b,C(354),0,BaM);BaN=b;BaO=D7(C(355),1,S(C(356)));BaP=D7(C(357),2,S(C(358)));BaQ=D7(C(359),3,S(C(360)));BaR=D7(C(361),4,BaM);A_S=D7(C(362),5,S(C(363)));BaS=D7(C(364),6,S(C(365)));BaT=D7(C(366),7,S(C(367)));BaU=D7(C(368),8,S(C(369)));c=new Cu;F2();AFb(c,C(370),9,Bar,S(C(352)));BaV=c;BaW=A9k(C(371),10,Bar,S(C(245)));BaX=D7(C(372),11,S(C(373)));BaY=D7(C(374),12,S(C(375)));BaZ=D7(C(376),13,BaM);b=D7(C(377),14,S(C(378)));Ba0=b;Ba1=I(Cu,[BaN,BaO,BaP,BaQ,BaR,A_S,BaS,BaT,BaU,
BaV,BaW,BaX,BaY,BaZ,b]);}
function K1(){var a=this;B.call(a);a.hB=null;a.np=null;}
function Kk(a,b){var c=new K1();A2R(c,a,b);return c;}
function A2R(a,b,c){a.hB=b;a.np=c;}
function Jw(){var a=this;B.call(a);a.l6=null;a.uk=null;a.pj=null;a.FC=3;a.jM=null;a.C0=null;a.GQ=null;a.pQ=null;a.nA=null;a.pu=null;}
function Ba2(a,b,c,d,e,f,g){var h=new Jw();Mx(h,a,b,c,d,e,f,g);return h;}
function Mx(a,b,c,d,e,f,g,h){a.uk=DB(C(169),16.0);a.pj=DB(C(14),16.0);a.FC=3;a.C0=b;a.GQ=c;a.jM=d;a.pQ=e;a.l6=f;a.nA=g;a.pu=h;}
function ALU(){var a=this;B.call(a);a.oH=null;a.uf=0;}
function AJZ(a,b){var c=new ALU();A49(c,a,b);return c;}
function A49(a,b,c){var d;d=new B4;a.oH=d;a.uf=b;d.bG=c;}
function ZF(a,b){return Ck(a.uf,b);}
var DZ=G(0);
var Bam=null;var Ban=null;var Baj=null;var Bak=null;var Bal=null;var BaF=null;var BaG=null;var Bao=null;var Bap=null;function AYo(){AYo=Bm(DZ);A3T();}
function A3T(){Bam=S(C(231));Ban=S(C(379));Baj=S(C(247));Bak=S(C(365));Bal=S(C(349));BaF=S(C(231));BaG=S(C(380));Bao=S(C(381));Bap=DE(43,45,48);}
var Zp=G(0);
var ZC=G();
function A0X(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(382)),d),C(383)),e);C2(K(b));return d+e|0;}
var Zq=G(0);
var ZA=G();
function A1K(a,b,c){var d,e;d=b;e=c;b=new J;L(b);Dg(H(Dg(H(b,C(384)),d),C(383)),e);C2(K(b));return d+e;}
var AGU=G();
var AJ_=G(0);
function Wy(){B.call(this);this.o1=null;}
var BaK=null;function Ug(){var a=new Wy();AKI(a);return a;}
function AKI(a){a.o1=BO();}
function EG(a,b,c){NN(a,Dc(b,c));}
function Dc(b,c){return Yy(c,b);}
function Iw(a,b,c){Mh(a,b,c,null);}
function Mh(a,b,c,d){NN(a,A9u(null,b,c,d));}
function NN(a,b){BA(a.o1,b);}
function Jt(a){return CQ(GM(a.o1,BaK));}
function AKd(){BaK=P(By,0);}
var D5=G(0);
var Baz=null;var BaA=null;var Baw=null;var Bax=null;var Bay=null;var BaD=null;var BaE=null;var BaB=null;var BaC=null;function A2O(){A2O=Bm(D5);A3w();}
function A3w(){Baz=S(C(240));BaA=S(C(385));Baw=S(C(288));Bax=S(C(386));Bay=S(C(334));BaD=S(C(240));BaE=S(C(385));BaB=Fd(118,121,122,128);BaC=DE(63,66,68);}
var Ir=G(0);
var Q3=G();
function A4x(a,b,c,d){var e;b=Bk();d=BT(d);e=new J;L(e);H(H(V(H(e,C(387)),c),C(320)),d);Bf(b,K(e));}
var Q4=G();
function U7(){B.call(this);this.Bw=null;}
function A3n(a,b){var c;c=a.Bw.mj;c.fu=Gg(b,V9(c));}
function QF(){B.call(this);this.EY=null;}
function AQp(a,b){var c,d,e,f;c=b.data;b=Bk();d=BT(c[0]);e=new J;L(e);H(H(e,C(388)),d);Bf(b,K(e));b=Bk();f=c[1];d=new J;L(d);H(H(d,C(389)),f);Bf(b,K(d));}
function QE(){B.call(this);this.FY=null;}
function AO0(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bk();e=BT(c[0]);f=new J;L(f);H(H(f,C(390)),e);Bf(d,K(f));g=E6(Jj(b,1));b=Bk();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(37));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(38));Br(c,i[h]);h=h+1|0;}BM(c,C(39));c=K(c);}e=new J;L(e);H(H(H(H(e,C(391)),d),C(392)),c);Bf(b,K(e));}
function QB(){B.call(this);this.G2=null;}
function AN7(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bk();e=BT(c[0]);f=new J;L(f);H(H(f,C(393)),e);Bf(d,K(f));g=Zo(Jj(b,1));b=Bk();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(37));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(38));V(c,i[h]);h=h+1|0;}BM(c,C(39));c=K(c);}e=new J;L(e);H(H(H(H(e,C(394)),d),C(395)),c);Bf(b,K(e));}
function Qz(){B.call(this);this.F8=null;}
function A65(a,b){var c,d,e,f,g;c=b.data;d=Bk();e=BT(c[0]);f=new J;L(f);H(H(f,C(396)),e);Bf(d,K(f));g=CL(Jj(b,1));b=Bk();d=BT(c[1]);c=AIs(g);e=new J;L(e);H(H(H(H(e,C(172)),d),C(397)),c);Bf(b,K(e));}
var AJR=G();
function Wb(){B.call(this);this.uB=null;}
function A1L(a,b){var c;c=a.uB.mx;c.f9=Gg(b,ABz(c));}
function ADV(){B.call(this);this.EZ=null;}
function AYa(a,b){return 0;}
function AMP(){var a=this;B.call(a);a.kZ=null;a.pG=null;a.gm=null;a.GC=null;}
function ADN(a){var b=new AMP();A40(b,a);return b;}
function A40(a,b){var c,d,e;c=null;d=null;e=null;a.kZ=c;a.pG=d;a.gm=b;a.GC=e;}
function AD7(a){var b,c;b=a.gm;if(b===null)return C(21);c=AHv(b,C(398));return c==(-1)?a.gm:DC(a.gm,c+1|0);}
function AZQ(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.kZ,c.kZ)&&BR(a.pG,c.pG)&&BR(a.gm,c.gm)?1:0;}return 0;}
function JE(){var a=this;B.call(a);a.vn=null;a.rL=null;a.sq=null;a.B0=null;a.tG=null;a.lN=null;}
function Ba3(a,b,c,d,e,f){var g=new JE();Pn(g,a,b,c,d,e,f);return g;}
function Pn(a,b,c,d,e,f,g){a.vn=b;a.rL=c;a.sq=d;a.B0=e;a.tG=f;a.lN=g;}
function KX(){var a=this;B.call(a);a.sB=null;a.qu=null;a.vW=null;}
function Ba4(a,b,c){var d=new KX();LK(d,a,b,c);return d;}
function LK(a,b,c,d){a.sB=b;a.qu=c;a.vW=d;}
function WF(a,b){return !b?a.qu:a.vW;}
function AKC(){var a=this;B.call(a);a.kc=null;a.mD=null;a.oS=null;}
function AJA(a,b,c){var d=new AKC();A59(d,a,b,c);return d;}
function A59(a,b,c,d){a.kc=b;a.mD=c;a.oS=d;}
function Cy(){CE.call(this);this.oF=null;}
var Ba5=null;var Ba6=null;var Ba7=null;var Ba8=null;var Ba9=null;var Ba$=null;var Ba_=null;var Bba=null;var Bbb=null;var Bbc=null;var Bbd=null;var Bbe=null;var Bbf=null;var Bbg=null;var Bbh=null;var Bbi=null;function AG7(){AG7=Bm(Cy);A1R();}
function Ep(a,b,c){var d=new Cy();ACY(d,a,b,c);return d;}
function A5a(a,b,c,d){var e=new Cy();AI_(e,a,b,c,d);return e;}
function ALL(){AG7();return Bbi.ef();}
function ACY(a,b,c,d){AG7();Du(a,b,c);a.oF=Kk(d,null);}
function AI_(a,b,c,d,e){AG7();Du(a,b,c);a.oF=Kk(d,e);}
function A1R(){var b;b=new Cy;F2();ACY(b,C(354),0,Bar);Ba5=b;Ba6=Ep(C(355),1,S(C(399)));Ba7=Ep(C(357),2,S(C(400)));Ba8=Ep(C(359),3,S(C(401)));Ba9=Ep(C(361),4,S(C(399)));Ba$=Ep(C(362),5,DE(188,63,60));Ba_=Ep(C(364),6,S(C(402)));Bba=Ep(C(366),7,S(C(403)));Bbb=Ep(C(368),8,S(C(404)));Bbc=A5a(C(370),9,Bar,DE(52,65,52));Bbd=A5a(C(371),10,S(C(405)),S(C(406)));Bbe=Ep(C(372),11,S(C(407)));Bbf=Ep(C(374),12,S(C(408)));Bbg=Ep(C(376),13,Bar);b=Ep(C(377),14,S(C(378)));Bbh=b;Bbi=I(Cy,[Ba5,Ba6,Ba7,Ba8,Ba9,Ba$,Ba_,Bba,Bbb,Bbc,
Bbd,Bbe,Bbf,Bbg,b]);}
var ANn=G();
function KJ(b,c){var d,e,f;if(c<=0)return C(21);d=B6(c);e=d.data;e[0]=AMC(Ei(b,52));f=1;while(f<c){e[f]=AMC(Ei(b,62));f=f+1|0;}return GG(d);}
function AMC(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AHp=G();
function ANw(){var a=this;B.call(a);a.K$=null;a.QP=null;a.Kl=0;a.Rn=0;}
var AF_=G(0);
function AMK(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BC,8);e=DT(8);f=B6(16);g=0;h=0;i=0;while(true){j=BQ(i,b);if(j>0)break;k=j>=0?10:(c.bb(C5(i))).nw;if(k==10){d=D2(ET(f,0,g),d,h);e=ADR(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Lk(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=D2(ET(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bb(C5(j))).nw==10){e=ADR(1,e,h);i=j;}else e=ADR(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new AA5;d=AGX(d,h);if(m.length!=h)e=O7(e,h);c.kP=d;c.D1=e;return c;}
function AKB(b){var c,d;c=M(b);BG(b);d=new Qr;d.vh=b;return AMK(c,d);}
var C9=G();
var AMb=G(C9);
var AMA=G(C9);
var AKR=G(C9);
var AK2=G(C9);
var AMS=G(C9);
function WJ(){B.call(this);this.sU=null;}
function ASd(a){var b;b=a.sU;Bf(Bk(),b);}
var Ib=G(CE);
var Bbj=null;var A_K=null;var Bbk=null;function AH6(){AH6=Bm(Ib);A0B();}
function A7r(a,b){var c=new Ib();AGL(c,a,b);return c;}
function AU$(){AH6();return Bbk.ef();}
function AGL(a,b,c){AH6();Du(a,b,c);}
function A0B(){var b;Bbj=A7r(C(409),0);b=A7r(C(410),1);A_K=b;Bbk=I(Ib,[Bbj,b]);}
function Qr(){B.call(this);this.vh=null;}
function AYF(a,b){return Qq(Q(a.vh,b.bu));}
function AA5(){var a=this;B.call(a);a.kP=null;a.D1=null;}
var AKy=G();
function Ck(b,c){return C6(b*c);}
function Ij(){var a=this;B.call(a);a.gG=0;a.oj=null;}
function AZ4(a){var b=new Ij();AS6(b,a);return b;}
function AS6(a,b){a.gG=b;}
var AHf=G();
function UJ(){var a=this;B.call(a);a.r8=null;a.vs=null;a.B4=null;}
var AKE=G(0);
function AJP(b){if(b===null)return C(183);if(!DI(b,C(411))&&!DI(b,C(412))&&!DI(b,C(413))&&!DI(b,C(414))&&!DI(b,C(415))&&!DI(b,C(416))){if(DI(b,C(417)))return C(194);if(DI(b,C(418)))return C(210);if(DI(b,C(419)))return C(205);if(!DI(b,C(420))&&!DI(b,C(421)))return C(183);return C(422);}return C(211);}
function AJ8(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kz(b)){case -1655966961:if(!Bj(b,C(205)))break a;c=4;break a;case 3401:if(!Bj(b,C(210)))break a;c=3;break a;case 98723:if(!Bj(b,C(211)))break a;c=2;break a;case 3213227:if(!Bj(b,C(422)))break a;c=5;break a;case 3254818:if(!Bj(b,C(194)))break a;c=1;break a;case 3556653:if(!Bj(b,C(183)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=D4();e
=new J;L(e);H(H(e,C(423)),b);Bf(d,K(e));c=0;break b;}c=0;}return c;}
function ADW(){B.call(this);this.xx=null;}
function AYh(a,b,c,d){return Mu(a.xx,b,c,d);}
function Y4(){B.call(this);this.k0=null;}
function A7z(a,b){var c,d,e,f,g;c=a.k0;d=c.m7;if(d!==null){e=b.k;f=e.a-d.a|0;g=e.b-d.b|0;e=c.k4;e.a=Fk(0,e.a+f|0,c.hs.a-c.ko.a|0);c=a.k0;d=c.k4;d.b=Fk(0,d.b+g|0,c.hs.b-c.ko.b|0);}a.k0.m7=b.k;return 1;}
var AHn=G();
function ME(){return "clipboard" in $rt_globals.navigator?1:0;}
function AI5(){var a=this;B.call(a);a.c_=null;a.ct=null;a.k5=null;a.lj=null;a.oJ=null;a.kx=null;}
function AAw(a){var b=new AI5();A4r(b,a);return b;}
function A4r(a,b){a.ct=BO();a.kx=BaL;a.c_=b;Z(b.dz,a);}
function HQ(a,b,c){a.k5=c;a.oJ=b;b=B9(a.ct);while(Cb(b)){Kh(Cc(b),a.oJ);}}
function Nf(a,b,c,d){a.kx=d;Tj(a,b,c);}
function Tj(a,b,c){var d,e;d=a.c_;e=d.bX;if(Bb(e.a,e.b)&&d.cs!==0.0){if(a.k5!==null&&!J4(a)){a.lj=FB(a.c_,a.k5);d=WL(a,b,c,null,null);b=new S7;b.va=a;d.ln=b;Cx(a.c_,a);return;}b=new BU;X(b);N(b);}c=new CV;Bn(c,C(424));N(c);}
function M2(a){if(J4(a)){AC8(a.c_,a);ACZ(a,null);a.kx.e();a.kx=BaL;}}
function WL(a,b,c,d,e){var f,g,h;f=ALK();AFZ(f);N3(f,c.cb());Kh(f,a.oJ);Kf(f,a.lj,a.c_);if(d===null)g=b.a;else{g=b.a;g=a.c_.bX.a<((g+(ER(d)).a|0)+(ER(f)).a|0)?g-(ER(f)).a|0:(g+(ER(d)).a|0)-d.gD|0;}h=b.b;b=a.c_.bX;NZ(f,Bd(0,Be(g,b.a-(ER(f)).a|0)),Bd(0,Be(h,b.b-(ER(f)).b|0)));b=new ADD;b.wG=a;b.wD=f;b.wE=e;f.pN=b;BA(a.ct,f);return f;}
function A7a(a,b,c){var d;a.lj=FB(a.c_,a.k5);d=B9(a.ct);while(Cb(d)){Kf(Cc(d),a.lj,a.c_);}}
function AGg(a){var b,c;if(EU(a.ct))return;Ca(a.c_.bR,1);b=0;while(true){c=a.ct;if(b>=c.q)break;MR(BI(c,b),a.c_);b=b+1|0;}}
function ASU(a,b){var c;if(!J4(a))return 0;a:{switch(b.bc){case 27:M2(a);c=1;break a;default:}c=0;}return c;}
function ACZ(a,b){var c,d;c=a.ct.q-1|0;a:{while(true){if(c<0)break a;d=BI(a.ct,c);if(b===d)break;E2(a.ct,c);Nx(d);c=c+(-1)|0;}}}
function J4(a){return a.ct.q<=0?0:1;}
function AUV(a){var b,c;Tk(a.c_.dz,a);AC8(a.c_,a);b=a.ct;c=B9(b);while(Cb(c)){Nx(Cc(c));}I3(b);}
function Ys(){B.call(this);this.y9=null;}
function ASB(a,b){M3(a.y9,b);}
function Wn(){B.call(this);this.AW=null;}
function A6O(a,b){var c,d,e,f;c=a.AW;if(c.g_!=3&&c.fA!=3){b=b.data;c.hr=3;d=CL(b[0]);e=E6(b[1]);ON(c.h,d,e);if(c.gi){b=Fh(c);f=Kn(EN(),c.jA);c=new J;L(c);H(Ic(H(H(c,b),C(425)),f),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}
function R2(){B.call(this);this.Az=null;}
function AY_(a,b){var c,d,e,f,g,h;c=a.Az;if(c.fA!=3){d=b.data;c.g_=3;if((CL(d[2])).data[0]!=1)M3(c,b);else{e=CL(d[0]);f=E6(d[1]);g=c.hr!=3?0:1;Sv(c.h,e,f,g);if(c.gi){b=Fh(c);h=Kn(EN(),c.jA);c=new J;L(c);H(Ic(H(H(c,b),C(426)),h),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function PD(){B.call(this);this.mf=null;}
function AQ4(a){return a.mf;}
var AL8=G(0);
var Mz=G(0);
function R8(){B.call(this);this.vy=null;}
function AZy(a,b){return LR(a.vy,b);}
function Qg(){B.call(this);this.B8=null;}
function A5Y(a,b){var c,d;c=a.B8;d=b.bu;return Qq(c.charCodeAt(d)&65535);}
var AIu=G();
function AKZ(b,c,d,e,f,g){g.a=c.a;g.b=f;Bv(b,d.a,d.b,g,e);Bv(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bv(b,d.a,d.b+f|0,g,e);Bv(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AMi(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bv(b,j,k,i,h);Bv(b,j,k,i,h);Bv(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bv(b,l,j,i,h);Bv(b,l,j,i,h);Bv(b,l+g|0,j+g|0,i,h);}
function RK(){var a=this;B.call(a);a.da=null;a.qY=null;a.fR=null;a.eB=0;a.cN=0;a.jN=null;a.kt=null;a.h0=0;a.x_=0;}
function Qd(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.eB;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}E8(c);j=d+(-1)|0;b=Dp(d);d=Bb(j,a.cN)%a.fR.b|0;Hf(a,c,b,a.h0,g);Km(a.da,c,0,d);if(!(j%a.eB|0))break;d=j;}}else{E8(b);k=a.eB-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Hf(a,b,Dp(j),Bb(a.cN,k)+a.h0|0,g);k=k+(-1)|0;j=h;}CU(a.da,b);j=Bd(i,e);}return j;}k=a.eB;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}E8(c);b=Dp((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cN)%a.fR.b|0;Hf(a,c,b,a.h0,g);Km(a.da,c,0,d);if(!(j%a.eB|0))break;d=j;}}else{E8(b);d=0;while(d<a.eB){h=h+1|0;Hf(a,b,Dp((h>e?h-f|0:h)+f|0),Bb(a.cN,d)+a.h0|0,g);d=d+1|0;}CU(a.da,b);j=Be(i,e);}return j;}
function Xn(b,c,d,e){c=c.data;return d<c.length&&c[d]?Is(b.d7,b,c[d]):e.lD;}
function N2(a,b,c,d,e,f){DQ(b,a.qY.a+d.a|0,c+d.b|0,a.jN,a.kt,a.da,e,f,a.x_);}
function Hf(a,b,c,d,e){B1(b,c,a.fR.a-20.0*e,d);}
var AGd=G();
function GI(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AGF(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Vp(){var a=this;B.call(a);a.qR=null;a.qS=null;a.iS=null;}
function A4h(a,b,c){var d=new Vp();AHZ(d,a,b,c);return d;}
function AHZ(a,b,c,d){a.qR=b;a.qS=c;a.iS=d;}
function Hc(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iS.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.iy:i.iz;k=!c?i.jx:i.jz;l=BQ(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function JN(){var a=this;B.call(a);a.iz=0;a.jz=0;a.iy=0;a.jx=0;a.pC=0;}
function Ef(a,b,c,d,e){var f=new JN();A5c(f,a,b,c,d,e);return f;}
function A5c(a,b,c,d,e,f){a.iz=b;a.jz=c;a.iy=d;a.jx=e;a.pC=f;}
var TE=G(0);
var A_Q=null;function AMq(){A_Q=new Ss;}
function AD2(){var a=this;B.call(a);a.tI=null;a.tJ=null;}
function AZz(a,b){var c,d,e;c=a.tI;d=a.tJ;c=c.fV.eH.x;e=c.a;b=b.k;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
var GD=G(JG);
var AFe=G(FP);
function AFh(){B.call(this);this.wm=null;}
function AX_(a,b){var c,d;c=a.wm;W4(c,FO(c,b.k));b=Bl(c);d=c.d;OH(b,d.z,d.C);ID(c);}
var AGD=G(0);
function ARx(b){return 112<=b&&b<=123?1:0;}
function VA(){B.call(this);this.yO=null;}
function A6n(a,b){var c,d;c=a.yO;d=c.eA+1|0;c.eA=d;c=new J;L(c);H(H(V(c,d),C(427)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function W$(){B.call(this);this.y0=null;}
function A4P(a){var b,c;b=a.y0;c=new J;L(c);H(H(H(c,C(428)),b),C(429));$rt_globals.console.info($rt_ustr(K(c)));}
function EB(){var a=this;B.call(a);a.K=null;a.hF=null;a.gP=null;}
function KK(a,b,c,d){a.K=b;a.gP=c;a.hF=d;}
function Lb(a,b,c){return Uw(a,b,H4(BF(a)),c);}
function Uw(a,b,c,d){var e,f,g,h,i,j,k;e=A6N(a.K.G,b);Ev(e,a.gP.cd);CZ(e,c);b=new XP;b.w4=a;b.w5=e;UB(e,b);b=new XO;b.xL=a;e.xZ=b;b=e.bi.bX;f=AEi(e);g=Cw(e.bi,5.0);h=Cw(e.bi,d);i=h?h+f|0:0;c=BK(g+h|0,(g+i|0)+f|0);j=new Bh;k=b.a;g=g*2|0;RF(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);EJ(e,c,j);return e;}
function AKm(a,b){var c,d,e;c=a.mU(b);if(c!==null){d=a.K;e=a.gP;Fz(d,e.cd,e.f1,b,c);}return c===null?0:1;}
function AAA(){var a=this;EB.call(a);a.jp=null;a.cP=null;a.dv=null;a.db=null;a.e_=null;}
function AO_(a){var b;a.jp=null;a.cP=null;b=null;a.db=b;a.dv=b;}
function A1r(a,b){var c,d,e,f;if(B3(a.cP.c$,b))return ABp(a,1,C(278));if(B3(a.cP.c9,b))return ABp(a,0,C(279));c=P(By,2);d=c.data;b=new By;e=new AAX;e.re=a;Ce(b,e,C(278));d[0]=b;b=new By;f=new AAW;f.w9=a;Ce(b,f,C(279));d[1]=b;return CQ(c);}
function ABp(a,b,c){var d,e,f,g;d=P(By,1);e=d.data;f=new By;g=new AEe;g.Bb=a;g.Bc=b;Ce(f,g,c);e[0]=f;return CQ(d);}
function L9(a,b,c){var d,e,f,g;a:{if(b instanceof F9){d=b;if(c instanceof F9){e=c;IX(d);IX(e);f=a.K.G.b9;c=new ACo;c.sa=a;c.sc=d;c.sb=e;CG(f,c,C(430),I(B,[d.ha,e.ha]));break a;}}if(b instanceof IY){f=b;if(c instanceof IY){g=c;IX(f);IX(g);b=a.K.G.b9;d=new Rs;d.uw=a;d.uv=f;d.uu=g;CG(b,d,C(431),I(B,[f.eR,g.eR]));break a;}}c=new BU;Bn(c,C(432));N(c);}IB(a);}
function IB(a){var b;b=a.cP;if(b.c$!==null&&b.c9!==null){Oy(b,AIq(a));return;}}
function AIq(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=Vo(a.cP.c$);c=Vo(a.cP.c9);d=P(JN,1);e=0;f=0;g=0;a:{b:while(true){h=b.data;i=h.length;if(f>=i)break a;j=c.data;k=j.length;if(g>=k)break a;if(h[f].m.bp==j[g].m.bp&&h[f].m.bz==j[g].m.bz){l=h[f].m.bp;m=h[f].m.bz;n=0;o=0;c:{while(f<i){if(g>=k)break c;if(h[f].m.bz!=m)break c;if(j[g].m.bz!=m)break c;f=f+1|0;n=n+1|0;g=g+1|0;o=o+1|0;}}d:{while(f<i){if(h[f].m.bz!=m)break d;f=f+1|0;n=n+1|0;}}while(g<k&&j[g].m.bz==m){g=g+1|0;o=o+1|0;}p=Ef(f-n|0,n,g-o|0,o,l);l=e+1|0;d
=D2(p,d,e);e=l;continue;}q=h[f].m.lF<=j[g].m.lF?0:1;e:{if(!q){p=ABS(a,c,g,f);if(p!==null){g=g+p.jx|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}p=ZU(a,b,f,g);if(p===null)break e;f=f+p.jz|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}p=ZU(a,b,f,g);if(p!==null){f=f+p.jz|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}p=ABS(a,c,g,f);if(p!==null){g=g+p.jx|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}}if(h[f].m.bp&&h[f].m.bp!=3){if(j[g].m.bp&&j[g].m.bp!=3)break;p=Ef(f,0,g,1,j[g].m.bp);l=e+1|0;d=D2(p,d,e);g=g+1|0;}else{p=Ef(f,1,g,0,h[f].m.bp);l
=e+1|0;d=D2(p,d,e);f=f+1|0;}e=l;}p=new CV;X(p);N(p);}while(f<i){p=Ef(f,1,g,0,h[f].m.bp);l=e+1|0;d=D2(p,d,e);f=f+1|0;e=l;}while(true){b=c.data;if(g>=b.length)break;p=Ef(f,0,g,1,b[g].m.bp);l=e+1|0;d=D2(p,d,e);g=g+1|0;e=l;}return A4h(null,null,CT(d,e));}
function ZU(a,b,c,d){var e,f;b=b.data;if(b[c].m.bp!=1)return null;e=b[c].m.bz;f=0;while(c<b.length&&b[c].m.bz==e){c=c+1|0;f=f+1|0;}return Ef(c-f|0,f,d,0,1);}
function ABS(a,b,c,d){var e,f;b=b.data;if(b[c].m.bp!=2)return null;e=b[c].m.bz;f=0;while(c<b.length&&b[c].m.bz==e){c=c+1|0;f=f+1|0;}return Ef(d,0,c-f|0,f,2);}
function Iz(a,b){var c,d;c=a.K.G.b9;d=new AFd;d.s8=a;d.s7=b;Gz(c,d);}
function ANe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;e=d.data;if(!e.length)return;f=CL(e[0]);e=f.data;g=e[0];h=e[1];i=2+g|0;j=ALz(f,2,i);k=ALz(f,i,i+h|0);l=1+g|0;e=AJa(d,1,l,F($rt_arraycls(HJ)));m=AJa(d,l,l+h|0,F($rt_arraycls(HJ)));b.m.co=P(HN,g);c.m.co=P(HN,h);n=0;while(n<g){o=b.m;o.co.data[n]=Ga(o);n=n+1|0;}n=0;while(n<h){o=c.m;o.co.data[n]=Ga(o);n=n+1|0;}p=0;q=0;i=1;a:while(true){if(!i){if(E7(b))AFo(b,b.m.co);if(E7(c))AFo(c,c.m.co);IB(a);if(E7(b))DW(b);else LI(b);if(E7(c))DW(c);else LI(c);return;}i
=0;l=JT(a.e_);while(p<g&&q<h&&!j.data[p]&&!k.data[q]){b:{f=e.data;i=1;b.m.co.data[p].bz=l;c.m.co.data[q].bz=l;n=p+1|0;r=q+1|0;o=f[p];if(E3(o,J$)){d=m.data;s=o;o=d[q];if(E3(o,J$)){t=o;o=VK(s,b.ga);o.m=b.m.co.data[p];u=VK(t,c.ga);u.m=c.m.co.data[q];L9(a,o,u);break b;}}o=f[p];if(!E3(o,JH))break a;d=m.data;o=o;u=d[q];if(!E3(u,JH))break a;u=u;s=ANx(D9(o),b.hb+1|0,o);s.m=b.m.co.data[p];o=ANx(D9(u),c.hb+1|0,u);o.m=c.m.co.data[q];L9(a,s,o);}p=n;q=r;}if(i)continue;while(p<g&&j.data[p]==1){i=1;d=b.m.co.data;d[p].bp=1;d[p].bz
=l;Mi(d[p],1);If(b.m,3,a.e_);p=p+1|0;}if(i)continue;while(q<h&&k.data[q]==2){i=1;d=c.m.co.data;d[q].bp=2;d[q].bz=l;Mi(d[q],2);If(c.m,3,a.e_);q=q+1|0;}}b=new CV;X(b);N(b);}
var WB=G();
function AXs(a){return Oz();}
function ADJ(){var a=this;EB.call(a);a.ik=null;a.lc=null;a.d8=null;a.nH=null;a.rl=null;}
function AVP(a,b,c){var d=new ADJ();AMN(d,a,b,c);return d;}
function AMN(a,b,c,d){KK(a,b,c,d);d=I8(b);a.lc=d;b=G3(d);a.d8=b;b=Lb(a,b,25.0);a.ik=b;d=new AEX;d.Ck=a;b.i5=d;d=new AEW;d.rQ=a;b.i1=d;a.d8.lX=a;ANA(a,c);DX(a.K,a.ik);}
function K8(a){Cx(a.K.G,a.d8);}
function Uo(a){return a.K.G.cf;}
function ANA(a,b){Ev(a.ik,b.cd);Gb(a.lc,b);E_(a.d8,b);}
function L5(a,b){var c,d;c=a.d8;Cx(c.ci,c);c=a.d8;d=new R4;d.uE=a;d.uD=b;F_(c,b,d);}
function APi(a){var b;if(Uo(a)===a.d8)Cx(a.K.G,null);b=a.rl;if(b!==null)b.g(a);a.ik=null;a.d8=null;a.lc=null;a.nH=null;a.rl=null;}
function A0_(a,b){var c,d,e,f,g,h;c=new By;d=new AD8;d.rU=a;Ce(c,d,C(433));e=a.lc;f=a.d8;d=a.hF;g=a.K;BG(g);h=new AD$;h.AZ=g;return NQ(JM(e,f,d,a,f,h),b,c);}
function ABR(a){var b,c,d;b=a.K;c=b.G.b9;d=new ABK;d.y5=a;F4(c,NT(b,d));}
function A22(a,b){if(AD_(b)){ABR(a);return 1;}if(b.bc!=27)return 0;if(!AAv(b))AFR(a.K);else Nz(a.ik);return 1;}
var SZ=G();
function ATK(a){return EQ(1);}
var Lz=G(0);
function AOX(a,b,c){Hu(b);}
function AM7(a,b){var c;c=new PG;c.zL=a;c.zK=b;return c;}
function Mo(){var a=this;EB.call(a);a.lb=null;a.c6=null;a.yh=null;a.iZ=null;a.fZ=null;a.tE=null;}
function Bbl(a,b,c){var d=new Mo();AEP(d,a,b,c);return d;}
function AEP(a,b,c,d){var e,f,g;KK(a,b,c,d);a.iZ=Ks();a.fZ=Ks();e=new RW;Fi(e);e.jL=I8(b);d=U6(b.G);e.eN=d;e.li=G9(d,b.G);d=new Qs;Fi(d);f=new B4;ARL();AMl(f,A_M);d.Cl=f;e.pn=d;d=G3(e.jL);e.gq=d;e.Gt=a;Nc(e,I(CH,[e.li,e.pn,d]));e.D_=EQ(1);a.c6=e;Wp(e,c);f=Iy(C(434),0);DW(f);c=new AB_;c.sE=a;f.cD=c;D$(a.c6.eN,f);c=a.c6;d=c.eN;g=d.cT.cO.data;d.c7=g.length<=0?null:g[0];c=Uw(a,c,C(435),0.0);a.lb=c;d=new AB$;d.xd=a;c.i5=d;d=new ACa;d.uX=a;c.i1=d;DX(b,c);Cx(b.G,a.c6.eN);}
function AZB(a,b){var c,d,e,f,g,h,i;if(B3(a.c6.gq,b)){c=a.c6;d=c.jL;c=c.gq;e=a.hF;f=a.K;BG(f);g=new V5;g.Dd=f;return ABm(JM(d,c,e,a,c,g),b);}h=P(By,1);i=h.data;b=new By;c=new V4;c.ri=a;Ce(b,c,C(436));i[0]=b;return CQ(h);}
function AFi(a){var b,c;b=a.K.G.b9;c=new Sk;c.rh=a;Gz(b,c);}
function A2a(a){a.lb=null;a.c6=null;a.iZ=null;a.fZ=null;}
function A0r(a,b){a.gP=b;Ev(a.lb,b.cd);Wp(a.c6,b);}
function A0p(a,b){var c,d,e;c=b.eR;d=ES(c);a.yh=d;e=CC(a.iZ,d);if(e!==null)RX(a,e);else{b=Bk();e=new J;L(e);H(H(e,C(437)),d);Bf(b,K(e));if(HW(a.fZ,d)){b=new J;L(b);H(H(b,C(438)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D6(a.fZ,d,d);b=new Rz;b.wf=a;b.wg=d;e=new RA;e.tV=a;e.tU=d;Wq(c,b,e);}}}
function RX(a,b){It(a.c6.gq,b);b=a.c6;Cx(b.jL.ck.G,b.gq);}
function AVL(a,b){var c;AFl(b);if(E7(b)>0)DY(a.c6.eN);c=b.f0.data;if(c.length==1&&!b.gp.data.length)c[0].cD.e();}
function A3E(a,b){if(E7(b)>0)DY(a.c6.eN);LX(b);}
function A26(a,b,c){if(AJP(c)!==C(183))RN(b);else Hu(b);}
var AEQ=G();
function AXk(a){return EQ(1);}
var AFz=G(DH);
var Bbm=null;function YG(b){var c;c=new J;L(c);return K(Dg(c,b));}
function AIm(){Bbm=F($rt_floatcls());}
var GX=G();
var Bbn=null;var Bbo=null;var A$Q=null;var A$P=null;var A$O=null;function ALC(){Bbn=D_([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bbo=AKF([Bq(1),Bq(10),Bq(100),Bq(1000),Bq(10000),Bq(100000),Bq(1000000),Bq(10000000),Bq(100000000),Bq(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A$Q=AKF([Bq(1),Bq(10),Bq(100),Bq(10000),Bq(100000000),
D(1874919424, 2328306)]);A$P=new ADh;A$O=new Vu;}
var Kd=G();
var Bbp=0;var Bbq=null;var Bbr=null;function AL3(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rV=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nM=0;c.ny=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Jf(Dk(Bq(d),Bq(8388608)),F1)){d=d<<1;f=f+(-1)|0;}}g=AMa(Bbr,f);if(g<0)g= -g|0;h=Bbr.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ka(d,Bbq.data[e],i);if(j<Bbp){while($rt_ucmp(j,Bbp)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=Bbr.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ka(d,
Bbq.data[e],i);}e=d<<1;d=e+1|0;h=Bbq.data;f=g+1|0;k=h[f];l=i-1|0;m=Ka(d,k,l);n=Ka(e-1|0,Bbq.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DN(Bq(d),Bq(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.nM=d;c.ny=g-50|0;}
function Ka(b,c,d){return Hg(GA(Cm(Dk(Bq(b),D(4294967295, 0)),Dk(Bq(c),D(4294967295, 0))),32-d|0));}
function AK9(){Bbp=$rt_udiv((-1),10);Bbq=D_([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Bbr=D_([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Vu(){var a=this;B.call(a);a.nM=0;a.ny=0;a.rV=0;}
function O$(){var a=this;B.call(a);a.FP=null;a.xS=0.0;a.Ei=0.0;a.g2=null;a.jW=null;a.oG=null;a.gI=0;}
function ANc(a,b){var c;if(b!==null){a.jW=b;return a;}c=new BU;Bn(c,C(439));N(c);}
function AIc(a,b){var c;if(b!==null){a.oG=b;return a;}c=new BU;Bn(c,C(439));N(c);}
function AAq(a,b,c,d){var e,f,g,$$je;e=a.gI;if(!(e==2&&!d)&&e!=3){a.gI=d?2:1;while(true){try{f=AJf(a,b,c);}catch($$e){$$je=Fc($$e);if($$je instanceof Bt){g=$$je;N(AZ0(g));}else{throw $$e;}}if(IJ(f))return f;if(Jz(f)){if(d&&Em(b)){g=a.jW;HM();if(g===A_i)return EK(Cl(b));if(Cl(c)<=M(a.g2))return A_l;FN(b,b.bg+Cl(b)|0);if(a.jW===A_j)N0(c,a.g2);}return f;}if(Sx(f)){g=a.jW;HM();if(g===A_i)return f;if(g===A_j){if(Cl(c)<M(a.g2))return A_l;N0(c,a.g2);}FN(b,b.bg+LH(f)|0);}else if(MW(f)){g=a.oG;HM();if(g===A_i)break;if
(g===A_j){if(Cl(c)<M(a.g2))return A_l;N0(c,a.g2);}FN(b,b.bg+LH(f)|0);}}return f;}b=new CV;X(b);N(b);}
function AKH(a,b){var c,d,e,f;c=a.gI;if(c&&c!=3){b=new CV;X(b);N(b);}if(!Cl(b))return AJI(0);if(a.gI)a.gI=0;d=AJI(Bd(8,Cl(b)*a.xS|0));while(true){e=AAq(a,b,d,0);if(Jz(e))break;if(IJ(e))d=AB0(a,d);if(!Ok(e))continue;Vt(e);}b=AAq(a,b,d,1);if(Ok(b))Vt(b);while(true){f=a.gI;if(f!=3&&f!=2)break;a.gI=3;if(Jz(A_m)){d.eK=d.bg;d.bg=0;d.kh=(-1);return d;}d=AB0(a,d);}b=new CV;X(b);N(b);}
function AB0(a,b){var c,d,e;c=b.i4;d=Lk(c,Bd(8,c.data.length*2|0));e=ALM(d,0,d.data.length);FN(e,b.bg);return e;}
function AEs(){var a=this;B.call(a);a.bv=0;a.bA=0;}
function D1(a,b){var c=new AEs();ALS(c,a,b);return c;}
function ALS(a,b,c){a.bv=b;a.bA=c;}
function AN8(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.bv==c.bv&&a.bA==c.bA?1:0;}return 0;}
function AU_(a){var b,c,d,e;b=P(B,2).data;b[0]=C5(a.bv);b[1]=C5(a.bA);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bu)|0;d=d+1|0;}return c;}
function AOG(a){var b,c,d;b=a.bv;c=a.bA;d=new J;L(d);Br(d,40);Br(V(H(V(d,b),C(38)),c),41);return K(d);}
function A4a(a,b){var c;b=b;c=BQ(a.bv,b.bv);if(!c)c=BQ(a.bA,b.bA);return c;}
var AHx=G(C9);
function V7(){B.call(this);this.EW=null;}
function AO5(a){Bf(Bk(),C(440));}
var AFU=G(0);
var BaL=null;function AI0(){BaL=new YF;}
function AAN(){B.call(this);this.BM=null;}
function AWh(a){AAy(a.BM);}
function AAM(){B.call(this);this.sL=null;}
function A2o(a){var b;b=a.sL;UO(new NM,b.w,b.hz,new Xy);}
function AAP(){B.call(this);this.xa=null;}
function A3V(a){var b;b=a.xa;AEP(new Mo,b.w,b.hz,new Q_);}
function AAO(){B.call(this);this.vP=null;}
function AWd(a){var b;b=a.vP;K8(AVP(b.w,b.hz,new XR));}
function YC(){B.call(this);this.sM=null;}
function A6j(a){AFv(a.sM);}
function YA(){B.call(this);this.r7=null;}
function AQG(a){ACA(a.r7);}
function Yz(){B.call(this);this.u8=null;}
function AOx(a){AAH(a.u8);}
function YB(){B.call(this);this.Aj=null;}
function A7A(a){AFc(a.Aj);}
function Zr(){B.call(this);this.vY=null;}
function ASZ(a){LC(a.vY);}
function S3(){B.call(this);this.yP=null;}
function A2H(a){ADw(a.yP);}
function AAo(){B.call(this);this.C8=null;}
function AYT(a,b){var c,d;c=a.C8;d=c.eA+1|0;c.eA=d;c=b.jl;b=new J;L(b);H(H(V(b,d),C(441)),c);$rt_globals.console.info($rt_ustr(K(b)));}
var Ss=G();
function A2_(a,b){}
function Ip(){CH.call(this);this.cA=null;}
function Nc(a,b){var c;if(a.cA===null){a.cA=b;return;}c=new DV;X(c);N(c);}
function A3d(a){var b,c,d;b=a.cA.data;c=b.length;d=0;while(d<c){b[d].bZ();d=d+1|0;}}
function ATB(a,b){var c,d,e;c=a.cA.data;d=c.length;e=0;while(e<d){c[e].dY(b);e=e+1|0;}}
function AYC(a,b){var c,d,e,f;c=0;d=a.cA.data;e=d.length;f=0;while(f<e){c=c|d[f].cM(b);f=f+1|0;}return c;}
function AP1(a,b,c,d){Ko(a,b,c,d);a.Dc();}
function A54(a,b,c,d){var e,f,g,h,i;e=0;f=a.cA.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.k))e=e|i.cW(b,c,d);h=h+1|0;}return e;}
function AWf(a,b,c){var d,e,f,g,h;d=a.cA.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.k)){h=g.cE(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A6e(a,b,c){var d,e,f,g,h;d=0;e=a.cA.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.k))d=d|h.d1(b,c);g=g+1|0;}return d;}
function A6G(a,b){var c,d,e,f,g;c=0;d=a.cA.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.k))c=c|g.b3(b);f=f+1|0;}return c;}
function AQE(a,b,c,d){var e,f,g,h,i;e=0;f=a.cA.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.k))e=e|i.dZ(b,c,d);h=h+1|0;}return e;}
function A6r(a){var b,c,d;b=a.cA.data;c=b.length;d=0;while(d<c){b[d].kK();d=d+1|0;}}
function IN(){Ip.call(this);this.e4=null;}
function QR(a,b){Fi(a);a.e4=AZr(b);}
function ASH(a){var b,c,d,e;b=Ck(20.0,a.b1);c=(a.j.a-b|0)/2|0;d=AL0(a.i);e=BK(c,a.j.b);a.cA.data[0].d0(d,e,a.b1);d.a=(a.i.a+a.j.a|0)-c|0;a.cA.data[1].d0(d,e,a.b1);e.a=(a.j.a-c|0)-c|0;d.a=a.i.a+c|0;a.cA.data[2].d0(d,e,a.b1);}
function AHE(){var a=this;IN.call(a);a.c$=null;a.c9=null;a.k9=null;a.mo=null;a.wy=null;}
function AM2(a){var b=new AHE();A3m(b,a);return b;}
function A3m(a,b){var c,d;QR(a,b);a.c$=U6(b);a.c9=U6(b);a.k9=G9(a.c$,b);a.mo=G9(a.c9,b);c=AOl(a.k9,a.c$);d=AOl(a.mo,a.c9);OY(a.e4,c,d);a.wy=AJk(c,d);Nc(a,I(CH,[a.k9,a.mo,a.e4]));}
function OZ(a,b){a.e4.iO=b;KI(a.c$,b);Kg(a.c$,a.k9);KI(a.c9,b);Kg(a.c9,a.mo);}
function Oy(a,b){a.wy.ht=b;a.e4.eQ=b;}
function FH(){var a=this;CH.call(a);a.c5=null;a.O=null;a.fD=null;}
function Bbs(){var a=new FH();Ms(a);return a;}
function Ms(a){Fi(a);a.c5=new Bh;a.O=new Bh;}
function A06(a,b){a.fD=b;}
function Up(a,b,c){Y(a.c5,b,c);}
function JC(a){var b;b=a.fD;if(b!==null)AEc(b);}
function AHw(a){var b;b=a.O;b.a=Yg(a,b.a);b=a.O;b.b=AEz(a,b.b);}
function AIK(a,b){var c,d;c=a.O.a;d=Yg(a,b);a.O.a=d;return c==d?0:1;}
function Pq(a,b){var c,d;c=a.O.b;d=AEz(a,b);a.O.b=d;return c==d?0:1;}
function AEz(a,b){return Bd(0,Be(b,a.c5.b-a.j.b|0));}
function Yg(a,b){return Bd(0,Be(b,a.c5.a-a.j.a|0));}
function Sm(){var a=this;FH.call(a);a.b5=null;a.ew=null;a.iF=null;a.B9=null;a.eJ=null;a.cg=null;a.fp=null;a.gh=null;a.eh=0;a.ge=0;a.Db=null;a.eu=0;a.fd=0;a.h7=0;a.gE=0;a.gs=0;a.dd=0;a.fq=null;a.kV=null;a.z7=null;a.i2=null;}
function A91(a,b){var c=new Sm();AM_(c,a,b);return c;}
function AM_(a,b,c){Ms(a);a.ew=Tz();a.iF=new Bh;a.cg=Bbt;a.fp=P(KD,0);a.eu=0;a.fd=0;a.h7=0;a.gE=0;a.gs=0;a.fq=AKo(0);a.i2=Ks();a.b5=b;a.kV=c;a.Db=c;Rm(a);}
function Rm(a){a.eh=Ck(2.0,a.b5.cs);}
function WV(a){return a.cg.data.length?0:1;}
function Yv(a,b){UE(a);a.cg=b;}
function UE(a){Y(a.iF,0,0);}
function Xt(a,b,c){a.z7=b;a.B9=c;a.eJ=null;a.fq=null;a.ge=0;UE(a);}
function A6l(a){a.gh=BY(a.gh,null);Y(a.iF,0,0);Fb(a.i2);a.fq=null;a.cg=Bbt;a.fp=null;a.eu=0;a.fd=0;a.h7=0;ACL(a.ew);a.kV=null;}
function A0e(a,b,c){ZO(a);Rm(a);a.eJ=null;a.fq=null;a.ge=0;}
function AYq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KU(a.b5);if(WV(a))return;Ly(a);Cr(c,a.eJ);d=Ew(a);e=AJ7(c,a.ge);f=Be(IE(a.j.b,d),a.cg.data.length)+30|0;g=a.z7.C0;h=a.fp.data;d=h.length;if(d<f){a:{i=a.gE;j=a.gs;k=a.cg;l=a.fq;m=a.i2;n=P(KD,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hw!==c){AEh(l,q,m);o[f]=Nq(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Nq(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Nq(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){AEh(l,c,m);h[f]=null;}f=f+1|0;}a.fp=n;Ct(a.iF,Np(a.fq));Z4(a,a.b5.bR);}a.gE=Be((a.O.b+a.eh|0)/(Ew(a)+a.eh|0)|0,a.cg.data.length-1|0);a.gs=Be((((a.O.b+a.ew.v.b|0)-1|0)+a.eh|0)/(Ew(a)+a.eh|0)|0,a.cg.data.length-1|0);if(!a.fp.data.length)return;AJ2(a,e);AD9(a,b);q=g.B0;c=a.i;Bv(b,c.a,c.b,a.j,q);c=a.ew.x;i=c.a;j=c.b;p=Cw(a.b5,2.0);s=a.b5.dG;t=a.gE;u=i+p|0;while(t<=a.gs){l=Zn(a,t);d=Bb(t,Ew(a));v
=t+1|0;w=d+Bb(v,a.eh)|0;x=u+a.eu|0;y=x+a.fd|0;z=a.dd!=t?0:1;m=!z?q:g.tG;ba=!z?g.vn:g.lN;bb=!z?g.rL:g.lN;bc=!z?g.sq:g.lN;bd=(j+w|0)-a.O.b|0;DQ(b,u,bd,l.j5,l.uA,a.gh,ba,m,a.b5.cX);DQ(b,x,bd,l.kw,l.lL,a.gh,bb,m,a.b5.cX);DQ(b,y,bd,l.j6,l.lh,a.gh,bc,m,a.b5.cX);d=l.j5.a;be=u+d|0;Y(s,Bd(0,a.eu-d|0),l.j5.b);Bv(b,be,bd,s,m);d=u+a.eu|0;f=l.kw.a;bf=d+f|0;Y(s,Bd(0,a.fd-f|0),l.kw.b);Bv(b,bf,bd,s,m);d=l.j6.a;bg=y+d|0;Y(s,Bd(0,(((a.ew.v.a-d|0)-a.fd|0)-a.eu|0)-p|0),l.j6.b);Bv(b,bg,bd,s,m);bh=(i+a.j.a|0)-p|0;Y(s,p,Ew(a)+a.eh
|0);Bv(b,bh,bd,s,q);t=v;}Gx(b);}
function AJ2(a,b){var c,d,e,f,g,h;c=0;d=a.gE;while(d<=a.gs){e=Zn(a,d);if(!(e!==null&&e.hw===a.cg.data[d])){f=a.fp.data;g=a.cg;e=a.fq;h=a.i2;c=d%f.length|0;if(f[c]!==null)AEh(e,f[c],h);f[c]=Nq(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.iF,Np(a.fq));Z4(a,a.b5.bR);}}
function Z4(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.iF;c=Eh(b,c.a+150|0,c.b,a.b5.cX);Cr(c,a.eJ);d=a.eJ;e=d.eM;f=e-(e+d.e7)/16.0;g=a.fp.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hw.l3;k=d.lL;B1(c,j,k.bs+a.ge,f+k.bw);j=d.hw.mk;d=d.lh;B1(c,j,d.bs+a.ge,f+d.bw);}i=i+1|0;}a:{d=a.i2;if(d.du>0){h=d.dl;i=0;b:while(true){g=d.ch.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cU;l=j.c3;k=k;l=l.mJ;B1(c,k,l.bs+a.ge,f+l.bw);j=j.dj;if(h!=d.dl)break b;}i=i+1|0;}b=new IG;X(b);N(b);}}if(a.gh===null)a.gh=C4(b);CU(a.gh,
c);EP(c);}
function Zn(a,b){var c;c=a.fp.data;return c[b%c.length|0];}
function A3$(a,b){Ct(a.ew.v,b);}
function A5k(a,b){Ct(a.ew.x,b);}
function ZO(a){var b,c,d,e,f,g,h,i,j;b=KU(a.b5);if(WV(a))return;Ly(a);Cr(b,a.eJ);c=AJ7(b,a.ge);d=a.cg.data;e=d.length;f=0;while(f<e){g=d[f];h=N$(c,g.h_);i=N$(c,g.l3);j=N$(c,g.mk);a.eu=Bd(a.eu,h);a.fd=Bd(a.fd,i);a.h7=Bd(a.h7,j);f=f+1|0;}}
function ASK(a,b){var c;c=ABM(a,b.k);if(c>=0)a.dd=c;return Ft(a.ew,a.i)&&G$(a.b5.dg)?1:0;}
function AQM(a,b,c){if(!Ft(a.ew,b.k)&&!LP(a.ew)){b=a.Db;if(b!==null)b.e();}return null;}
function AU2(a,b,c,d){var e;if(d==1){e=ABM(a,b.k);if(e>=0)VY(a,a.cg.data[e]);}return 1;}
function VY(a,b){a.kV.e();b.vc.e();}
function ABM(a,b){var c,d,e;if(!a.fp.data.length)return (-1);c=Ew(a);d=(b.b-a.i.b|0)+a.O.b|0;e=a.eh;e=(d+e|0)/(c+e|0)|0;if(e<a.cg.data.length)return e;return (-1);}
function Ew(a){return Fl(a.eJ);}
function Ly(a){var b;if(a.eJ===null){b=FB(a.b5,a.B9);a.eJ=b;a.fq=AKo(Fl(b));a.ge=C6(a.eJ.qM);}}
function A5x(a,b){var c,d,e;a:{switch(b.bc){case 13:VY(a,a.cg.data[a.dd]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.dd=a.gE;b=a.fD;c=a.O;JS(b,c.a,c.b-(a.j.b/2|0)|0);return 0;case 34:a.dd=a.gs;b=a.fD;c=a.O;JS(b,c.a,c.b+(a.j.b/2|0)|0);return 0;case 35:case 39:a.dd=a.cg.data.length-1|0;break a;case 36:case 37:a.dd=0;break a;case 38:d=a.dd;e=a.cg.data.length;a.dd=((d+e|0)
-1|0)%e|0;break a;case 40:a.dd=(a.dd+1|0)%a.cg.data.length|0;break a;default:break a;}a.kV.e();return 0;}e=a.dd;if(e<=a.gE)JS(a.fD,a.O.a,Bb(e,Ew(a))+Bb(a.dd,a.eh)|0);else if(e>=a.gs)JS(a.fD,a.O.a,(Bb(e+1|0,Ew(a))+Bb(a.dd+2|0,a.eh)|0)-a.j.b|0);return 0;}
var Wu=G();
function AW6(a){}
function AG6(){var a=this;CH.call(a);a.o6=null;a.y1=null;a.B2=null;a.bY=null;a.dR=null;a.d4=null;a.vv=null;a.rS=null;a.wJ=0.0;a.qc=null;a.py=null;}
function G9(a,b){var c=new AG6();AX8(c,a,b);return c;}
function AX8(a,b,c){var d;c=c.dg;Fi(a);d=new QP;d.z6=a;a.y1=d;d=new QO;d.A0=a;a.B2=d;a.wJ=10.0;a.bY=b;a.o6=c;b.fD=a;}
function AVN(a){var b;b=a.bY;b.fD=null;a.bY=BY(b,null);}
function JR(a,b,c){var d;a.py=c;a.qc=b;d=a.dR;if(d!==null)IA(d,b,c);b=a.d4;if(b!==null)IA(b,a.qc,a.py);}
function ARg(a,b,c,d){Ko(a,b,c,d);Ko(a.bY,b,c,d);if(d!==0.0)AEc(a);}
function JS(a,b,c){LN(a,b);Mj(a,c);}
function AEc(a){var b;AHw(a.bY);b=F8(a)*3|0;if(AA1(a,b))Vb(a);else a.d4=null;if(AFQ(a,b))X$(a);else a.dR=null;}
function AFQ(a,b){var c;c=a.j.b;return c>b&&a.bY.c5.b>c?1:0;}
function AA1(a,b){var c;c=a.j.a;return c>b&&a.bY.c5.a>c?1:0;}
function Vb(a){var b,c,d,e,f,g;b=a.d4;if(b===null)b=JL();a.d4=b;PZ(a,b);c=a.d4;b=a.bY;d=b.O.a;e=a.i;f=e.a;g=a.j;Su(c,d,f,g.a,b.c5.a,e.b+g.b|0,F8(a));}
function X$(a){var b,c,d,e,f,g;b=a.dR;if(b===null)b=JL();a.dR=b;PZ(a,b);c=a.dR;b=a.bY;d=b.O.b;e=a.i;f=e.b;g=a.j;KY(c,d,f,g.b,b.c5.b,e.a+g.a|0,F8(a));}
function F8(a){return DF(a,a.wJ);}
function PZ(a,b){IA(b,a.qc,a.py);}
function A4F(a,b){var c;a.bY.dY(b);if(!(a.dR===null&&a.d4===null)){Ca(b,1);c=a.dR;if(c!==null)Hl(c,b);c=a.d4;if(c!==null)Hl(c,b);c=a.dR;if(c!==null)Hq(c,b);c=a.d4;if(c!==null)Hq(c,b);Ca(b,0);}}
function UM(a,b){var c,d;a:{b:{c=a.dR;if(!(c!==null&&Ji(c,b))){c=a.d4;if(c===null)break b;if(!Ji(c,b))break b;}d=1;break a;}d=0;}return d;}
function AWc(a,b,c,d){return !UM(a,b.k)&&!a.bY.cW(b,c,d)?0:1;}
function LN(a,b){var c;b=AIK(a.bY,b);if(AA1(a,F8(a)*3|0))Vb(a);if(b){c=a.vv;if(c!==null)c.e();}}
function Mj(a,b){var c;if(AEB(a,b)){c=a.rS;if(c!==null)c.e();}}
function AEB(a,b){var c;c=Pq(a.bY,b);if(AFQ(a,F8(a)*3|0))X$(a);return c;}
function AVQ(a,b,c){var d,e;d=a.dR;if(d!==null){e=Gp(d,b.k,a.y1,1);if(e!==null)return e;}d=a.d4;if(d!==null){e=Gp(d,b.k,a.B2,0);if(e!==null)return e;}return a.bY.cE(b,c);}
function ATY(a,b,c){return UM(a,b.k)?1:0;}
function ATI(a,b){var c,d,e;c=a.dR;d=c!==null&&Gw(c,b.k,a.o6)?1:0;c=a.d4;e=c!==null&&Gw(c,b.k,a.o6)?1:0;return !d&&!e&&!a.bY.b3(b)?0:1;}
function A0E(a,b,c,d){var e,f;if(!B3(a,b.k))return 0;e=Ck(d*0.5,a.b1);f=Ck(c*0.5,a.b1);if(b.bN){f=f+e|0;e=0;}if(a.dR!==null&&e)Mj(a,a.bY.O.b+e|0);if(a.d4!==null&&f)LN(a,a.bY.O.a+f|0);return 1;}
function AJK(a){var b,c;b=F8(a);c=a.bY.il();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var AFr=G();
function AP2(a,b){}
function AFt(){var a=this;B.call(a);a.vG=null;a.vH=null;}
function AN9(a,b){var c,d,e;c=a.vG;d=a.vH;b=BT(b);e=new J;L(e);H(H(H(e,d),C(29)),b);CZ(c,K(e));}
function Q5(){var a=this;FH.call(a);a.mQ=null;a.qs=null;a.zs=null;a.sR=0.0;}
function AXc(a){var b;b=Ck(20.0,a.b1);return BK(b,b);}
function A4e(a,b){Up(a,b.a*3|0,b.b*5|0);a.zs.g(b);}
function AXv(a,b){var c,d,e,f,g,h,i,j,k,l,m;ANg(a,b);AD9(a,b);c=Ck(30.0,a.b1);d=a.O;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.j;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.qs;d.b=c;d.a=c;a.mQ.bG=1.0;while(h<=e){g=a.i.b-a.O.b|0;j=f;while(j<=i){k=a.i.a-a.O.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AM5(l);m=m+1|0;}WI(AMB(l),0.75,a.sR,a.mQ);Bv(b,k+j|0,g+h|0,a.qs,a.mQ);j=j+c|0;}h=h+c|0;}Gx(b);}
function ATg(a,b,c){return A_Q;}
function AFs(){var a=this;B.call(a);a.rn=null;a.ro=null;}
function AV5(a){var b,c;b=a.rn;c=a.ro;IW(b.w,c);Kx(c);}
function VI(){var a=this;CH.call(a);a.gH=null;a.h4=null;a.ke=null;a.eX=null;a.lg=0.0;a.e8=0;a.iN=0;a.eo=null;a.nh=null;}
function WX(a){var b;if(OX(a))return 0;AD4(a);b=Cw(a.gH,a.lg);return Fl(a.eX)+(b*2|0)|0;}
function SU(a){var b;b=a.j;return b.a&&b.b?0:1;}
function OX(a){return a.h4!==null&&a.ke!==null?0:1;}
function Rw(a,b){a.j.b=b;}
function RC(a,b,c,d,e){var f,g;f=a.gH.dG;Y(f,d,a.j.b);g=a.i;Bv(b,g.a+c|0,g.b,f,e);}
function AD4(a){if(a.eX===null)a.eX=FB(a.gH,a.h4);}
function AFP(){B.call(this);this.jj=0;}
function JT(a){var b;b=a.jj;a.jj=b+1|0;return b;}
function HP(){var a=this;B.call(a);a.cD=null;a.f4=null;a.lB=null;a.hP=null;a.hb=0;a.h2=0;a.gV=0;a.m=null;}
function Bbu(a,b){var c=new HP();T_(c,a,b);return c;}
function T_(a,b,c){var d;d=new HN;d.bp=0;d.dE=0;a.m=d;a.hP=Za(b);a.hb=c;a.h2=0;}
function Dd(a){return (Ku(a.hP,0)).y;}
function AF8(a){a.h2=60084;}
function HE(a){return a.h2!=60084?0:1;}
function Sy(a){return a.h2!=60086?0:1;}
function AG5(a){a.h2=60086;}
function LI(a){a.gV=60035;}
function Hu(a){a.gV=60027;}
function RN(a){a.gV=60137;}
function DW(a){a.gV=60151;}
function IX(a){a.gV=60215;}
function AIl(a){var b;b=a.cD;if(b===null){b=a.lB;if(b===null)b=a.f4;}return b;}
function Da(){HP.call(this);this.ep=null;}
var Bbv=null;var Bbw=null;function Iy(a,b){var c=new Da();KG(c,a,b);return c;}
function AMw(a,b,c){var d=new Da();AMJ(d,a,b,c);return d;}
function KG(a,b,c){T_(a,b,c);a.ep=Bbv;}
function AMJ(a,b,c,d){T_(a,b,c);a.ep=Bbv;a.ep=d;}
function A6A(a){return Dd(a);}
function ANb(a){var b,c,d;b=P(HP,AFK(a));c=b.data;if(R0(a,b,0)==c.length)return b;d=new Bt;X(d);N(d);}
function E7(a){return a.ep.data.length;}
function AFK(a){var b,c,d,e;b=1;if(HE(a)){c=a.ep.data;d=c.length;e=0;while(e<d){b=b+AFK(c[e])|0;e=e+1|0;}}return b;}
function Pw(a){var b,c,d,e;b=1;c=a.ep.data;d=c.length;e=0;while(e<d){b=b+Pw(c[e])|0;e=e+1|0;}return b;}
function R0(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(HE(a)){d=a.ep.data;c=d.length;f=0;while(f<c){e=R0(d[f],b,e);f=f+1|0;}}return e;}
function Iq(a){AF8(a);DW(a);}
function Jb(a){AG5(a);LI(a);}
function VL(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=O_(Dd(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function On(a,b){var c,d,e,f,g;c=a.m;c.bp=b;c.dE=2;d=c.lU;if(d!==null)c.bz=d.bz;e=a.ep.data;f=e.length;g=0;while(g<f){On(e[g],b);g=g+1|0;}}
function AFo(a,b){var c,d,e;c=0;while(true){d=a.ep.data;if(c>=d.length)break;e=b.data;d[c].m=e[c];c=c+1|0;}}
function AIf(){Bbv=P(Da,0);Bbw=new Ru;}
function TP(){B.call(this);this.tO=null;}
function AZl(a){Iz(a.tO,1);}
function TN(){B.call(this);this.wj=null;}
function AXW(a){Iz(a.wj,0);}
function TO(){B.call(this);this.yL=null;}
function A1A(a){Cx(a.yL.K.G,null);}
function TM(){B.call(this);this.Gh=null;}
function AV2(a){}
function AEX(){B.call(this);this.Ck=null;}
function ARM(a){var b;b=a.Ck;Cx(b.K.G,b.nH);}
function AEW(){B.call(this);this.rQ=null;}
function AV$(a){var b;b=a.rQ;b.nH=b.d8!==Uo(b)?null:b.d8;}
function RW(){var a=this;Ip.call(a);a.D_=null;a.Gt=null;a.jL=null;a.pn=null;a.li=null;a.eN=null;a.gq=null;}
function AR9(a){var b,c,d,e;b=a.j.a/4|0;c=b+DF(a,1.0)|0;d=AL0(a.i);e=BK(b,a.j.b);a.cA.data[0].d0(d,e,a.b1);d.a=a.i.a+b|0;e.a=c-b|0;a.cA.data[1].d0(d,e,a.b1);d.a=a.i.a+c|0;e.a=a.j.a-c|0;a.cA.data[2].d0(d,e,a.b1);}
function Wp(a,b){KI(a.eN,b);Kg(a.eN,a.li);Gb(a.jL,b);E_(a.gq,b);}
function A1m(a){var b,c;b=AI8(a.gq);c=AJK(a.li);return BK((b.a+a.pn.j.a|0)+c.a|0,b.b);}
function AB_(){B.call(this);this.sE=null;}
function AQa(a){AFi(a.sE);}
function AB$(){B.call(this);this.xd=null;}
function AUM(a){var b;b=a.xd;Cx(b.K.G,b.tE);}
function ACa(){B.call(this);this.uX=null;}
function A20(a){var b,c;b=a.uX;c=b.K.G.cf;if(b.c6.gq!==c)c=null;b.tE=c;}
var ABA=G(DH);
var Bbx=null;function Dj(b,c){return Long_udiv(b, c);}
function AKh(b,c){return Long_urem(b, c);}
function DN(b,c){return Long_ucompare(b, c);}
function ALf(){Bbx=F($rt_longcls());}
function AFS(){B.call(this);this.CP=null;}
function A1_(a){AAt(a.CP);}
function YV(){B.call(this);this.z4=null;}
function AY0(a){var b;b=a.z4;DX(b.w,AAb(b));}
function AC_(){B.call(this);this.oR=null;}
var Bbt=null;function ARY(){var a=new AC_();AGQ(a);return a;}
function AGQ(a){a.oR=BO();}
function Xz(a,b,c,d,e){var f;f=new LQ;f.vc=e;f.l3=c;f.mk=d;f.h_=b;BA(a.oR,f);}
function AEO(a){return GM(a.oR,Bbt);}
function AB7(b){return b===null?C(21):AD7(b);}
function ANa(){Bbt=P(LQ,0);}
function KD(){var a=this;B.call(a);a.uA=null;a.lL=null;a.lh=null;a.j5=null;a.kw=null;a.j6=null;a.hw=null;}
function Nq(b,c,d,e){var f,g,h;f=new KD;f.j5=new Bh;f.kw=new Bh;f.j6=new Bh;f.hw=b;g=CC(e,b.h_);if(g!==null)g.ji=g.ji+1|0;else{g=new AEn;h=K4(c,b.h_,d);g.ji=1;g.mJ=h;D6(e,b.h_,g);}e=g.mJ;f.uA=e;Y(f.j5,e.bj|0,e.bG|0);e=K4(c,b.l3,d);f.lL=e;Y(f.kw,e.bj|0,e.bG|0);b=K4(c,b.mk,d);f.lh=b;Y(f.j6,b.bj|0,b.bG|0);return f;}
function AEh(b,c,d){var e,f,g;e=c.hw.h_;f=CC(d,e);g=f.ji-1|0;f.ji=g;if(!g){L_(d,e);Jy(b,f.mJ);}Jy(b,c.lL);Jy(b,c.lh);}
var Pj=G(0);
var Bas=null;var Bat=null;function AH0(){Bas=Fd(40,40,40,200);Bat=Fd(43,43,43,128);}
function L2(){var a=this;FH.call(a);a.eI=null;a.cx=null;a.cT=null;a.io=null;a.f$=null;a.mt=null;a.nj=null;a.Ca=0;a.rN=0;a.c7=null;a.gN=null;a.gO=null;a.hE=null;a.ib=null;a.ii=null;a.jU=null;a.he=null;a.st=0;a.kI=0;}
function AUu(a){Pa(a.io);ZH(a.cx);PE(a);}
function PE(a){a.gN=BY(a.gN,null);a.gO=BY(a.gO,null);a.hE=BY(a.hE,null);a.ib=BY(a.ib,null);a.ii=BY(a.ii,null);a.jU=BY(a.jU,null);a.he=BY(a.he,null);}
function Yq(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hE;break a;case 60084:c=a.gO;break a;case 60086:c=a.gN;break a;case 60136:c=a.he;break a;case 60137:c=a.jU;break a;case 60151:c=a.ib;break a;default:c=null;break a;}c=a.ii;}return c;}
function Vo(a){return a.cT.cO;}
function KI(a,b){var c,d;a.f$=b;c=BR(a.mt,b.qn);d=BR(a.nj,b.px);if(!(c&&d)){a.mt=b.qn;a.nj=b.px;if(a.b1!==0.0)T1(a);}}
function AON(a,b,c){QN(a.cx,c);if(a.mt!==null)T1(a);}
function T1(a){var b,c,d,e,f;T8(a.io);b=a.cx;c=a.mt;d=a.b1;e=a.eI.bR;f=b.hD;b.dA=AK8(c.iC,c.hu*d,c.kD,c.kS,f,e);Tu(a.cx,1.25,a.eI.bR);PE(a);b=FB(a.eI,a.nj);a.gN=BY(a.gN,FT(a,60086,b));a.gO=BY(a.gO,FT(a,60084,b));a.hE=BY(a.hE,FT(a,60035,b));a.ib=BY(a.ib,FT(a,60151,b));a.ii=BY(a.ii,FT(a,60027,b));a.jU=BY(a.jU,FT(a,60137,b));a.he=BY(a.he,FT(a,60136,b));a.st=Bd(Bd(Bd(Bd(BV(a.hE),BV(a.ib)),BV(a.ii)),BV(a.he)),BV(a.he));a.kI=Bd(BV(a.gO),BV(a.gN));Qa(a);}
function Qa(a){Up(a,a.c5.a,Bb(a.cT.cO.data.length,a.cx.d9));JC(a);}
function A2L(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=a.f$.by.eF;d=a.i;Bv(b,d.a,d.b,a.j,c);BG(a.cx.dA);e=a.cx.d9;f=a.cT.cO.data.length;if(!f)return;g=Be(f,IE(a.j.b,e)+7|0);h=a.io;if(h.data.length<g)a.io=AAI(g,h,a.cx,a.Ca,a.rN,a.cT);Of(b,a.i,a.j);i=a.O.b;j=f-1|0;k=AIb(i,e,j);l=AIb((a.O.b+a.j.b|0)-1|0,e,j);a.Ca=k;a.rN=l;i=a.j.a;m=DF(a,4.0);n=DF(a,1.0)+a.kI|0;o=DF(a,3.0);p=DF(a,5.0);DF(a,1.0);q=0;r=a.i.a-a.O.a|0;s=DF(a,1.0);d=a.fD;t=s+(d===null?0:F8(d))|0;while(k<=l){a:{u
=a.cT.cO.data[k];h=a.io.data;s=k%h.length|0;v=h[s];YY(v,u.hP,b,e,i,0,k,s);w=Bb(e,k);x=w-a.O.b|0;d=u.m;if(d!==null){s=d.bp;if(s){y=AZ4(s);break a;}}y=null;}if(y===null)z=null;else{d=a.f$;z=Is(d.d7,d,y.gG);}ba=m+Bb(n,u.hb)|0;bb=a.c7!==u?0:1;if(y!==null){bc=w-a.O.b|0;Y(a.eI.dG,a.j.a,e);d=a.i;Bv(b,d.a,d.b+bc|0,a.eI.dG,z);}else if(bb){bc=w-a.O.b|0;Y(a.eI.dG,a.j.a,e);d=a.i;Bv(b,d.a,d.b+bc|0,a.eI.dG,a.f$.by.g1);}bd=Yq(a,u.h2);be=Yq(a,u.gV);if(bd!==null){d=a.f$;bf=d.kj.data[0];AF0(a,b,bd,r+ba|0,a.i.b+x|0,y!==null?z
:!bb?c:d.by.g1,bf.hB);}if(be!==null){d=a.f$;bf=d.kj.data[0];bg=((r+ba|0)+a.kI|0)+o|0;s=a.i.b+x|0;if(y===null)z=!bb?c:d.by.g1;AF0(a,b,be,bg,s,z,bf.hB);}s=FY(u.hP);w=(((ba+a.kI|0)+o|0)+a.st|0)+p|0;q=Bd(q,(w+s|0)+t|0);Q9(v,a.i.b+x|0,r+w|0,b,i,e,0,a.f$,null,null,null,bb,y===null?0:1,y);k=k+1|0;}d=a.c5;if(d.a!=q){d.a=q;JC(a);}Gx(b);}
function AF0(a,b,c,d,e,f,g){Cv(a.cx.j1,0.0,0.0,BV(c),CX(c));Ct(a.cx.iK,c.fg);HD(a.cx,b,c,d,e,g,f);}
function A5P(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cx.d9;f=((b.k.b-a.i.b|0)+a.O.b|0)/e|0;if(f>=0){g=a.cT.cO.data;if(f<g.length){h=g[f];if(!XT(a,b,f)){b=h.lB;if(b!==null)b.e();}}}}return 1;}
function APL(a,b,c){var d,e,f,g;Cx(a.eI,a);d=a.cx.d9;e=((b.k.b-a.i.b|0)+a.O.b|0)/d|0;if(!c&&e>=0){f=a.cT.cO.data;if(e<f.length){g=f[e];if(XT(a,b,e)){b=g.f4;if(b!==null)b.e();}else{a.c7=g;b=g.cD;if(b!==null)b.e();}}}return A_Q;}
function XT(a,b,c){var d,e,f,g,h,i,j;d=a.cT.cO.data[c];e=DF(a,4.0);f=DF(a,1.0);g=Bd(BV(a.gO),BV(a.gN));h=e+Bb(f+g|0,d.hb)|0;i=(a.i.a-a.O.a|0)+h|0;j=i+g|0;c=b.k.a;return i<=c&&c<j?1:0;}
function FT(a,b,c){var d,e,f;d=a.eI.bR;e=Oh(b);f=a.cx;return AE9(d,e,c,1,f.d9,f.jh);}
function AIb(b,c,d){return Be(b/c|0,d);}
function ARi(a,b){var c;a:{switch(b.bc){case 13:b=a.c7;if(b!==null){b=AIl(b);if(b!==null)b.e();}c=1;break a;case 37:b=a.c7;if(b!==null&&HE(b))a.c7.f4.e();c=1;break a;case 38:c=AEU(a)-1|0;if(c<0)c=a.cT.cO.data.length-1|0;a.c7=a.cT.cO.data[c];VC(a,c);c=1;break a;case 39:b=a.c7;if(b!==null&&Sy(b)){a.c7.f4.e();c=1;}else c=ABd(a);break a;case 40:break;default:c=0;break a;}c=ABd(a);}return c;}
function ABd(a){var b;b=AEU(a)+1|0;if(!(b>0&&b<a.cT.cO.data.length))b=0;a.c7=a.cT.cO.data[b];VC(a,b);return 1;}
function AEU(a){var b,c,d,e;b=a.cT.cO.data;c=a.c7;d=0;e=b.length;while(true){if(d>=e)return (-1);if(c===b[d])break;d=d+1|0;}return d;}
function VC(a,b){var c,d;c=a.cx.d9;d=Bb(b,c);if(d<a.O.b){Pq(a,d);JC(a);}b=d+c|0;c=a.O.b;d=a.j.b;if(b>(c+d|0)){Pq(a,b-d|0);JC(a);}}
function A0R(a,b,c){var d;d=a.c7;if(d===null)return 0;OV(b,Dd(d));return 1;}
function ALs(){L2.call(this);this.r3=null;}
function U6(a){var b=new ALs();AWq(b,a);return b;}
function AWq(a,b){Ms(a);a.cT=AOY(P(HP,0));a.io=P(FK,0);a.eI=b;a.cx=ASA(b.cX);}
function DY(a){var b,c,d,e,f;b=ANb(a.r3);c=AOY(b);a.cT=c;d=a.c7;b=c.cO.data;e=b.length;f=0;a:{while(f<e){if(b[f]===d){e=1;break a;}f=f+1|0;}e=0;}if(!e)a.c7=null;if(a.b1!==0.0)Qa(a);}
function D$(a,b){a.r3=b;DY(a);}
function Kg(a,b){var c;c=a.f$.by;JR(b,c.mc,c.mi);return b;}
function AHW(){var a=this;B.call(a);a.oe=null;a.gu=null;}
function AOl(a,b){var c=new AHW();APw(c,a,b);return c;}
function APw(a,b,c){a.oe=b;a.gu=c;}
function AVZ(a){return a.gu.O.b/Ng(a)|0;}
function A51(a){var b;b=a.gu;return IE((b.O.b+b.j.b|0)-1|0,Ng(a));}
function AW2(a,b){var c;b=Bb(b,Ng(a));c=a.gu;return (b+c.i.b|0)-c.O.b|0;}
function ASw(a){return a.gu.i;}
function AYJ(a){return a.gu.j;}
function AS$(a,b,c){var d;d=a.oe;d.vv=b;d.rS=c;}
function A23(a,b){return AEB(a.oe,b);}
function Ng(a){return a.gu.cx.d9;}
function Qs(){CH.call(this);this.Cl=null;}
function AOc(a,b){var c;c=a.i;Bv(b,c.a,c.b,a.j,a.Cl);}
function ADh(){var a=this;B.call(a);a.od=F1;a.nk=0;a.rI=0;}
var YF=G();
function AXh(a){}
function TQ(){var a=this;B.call(a);a.Cx=null;a.Cu=null;a.Cv=null;}
function ASz(a){var b,c,d,e,f;b=a.Cx;c=a.Cu;d=a.Cv;e=Bk();f=new J;L(f);b=H(f,b);Br(b,9);b=H(b,c);Br(b,9);H(b,d);Bf(e,K(f));}
function QP(){B.call(this);this.z6=null;}
function AOk(a,b){var c;c=a.z6;Mj(c,Gg(b,c.bY.c5.b-c.j.b|0));}
function QO(){B.call(this);this.A0=null;}
function AOE(a,b){var c;c=a.A0;LN(c,Gg(b,c.bY.c5.a-c.j.a|0));}
var Ru=G();
function APS(a,b,c){b=b;c=c;return O_(Dd(b),Dd(c));}
var UU=G(0);
var A_M=null;function ARL(){ARL=Bm(UU);AW8();}
function AW8(){A_M=S(C(240));}
function LQ(){var a=this;B.call(a);a.vc=null;a.l3=null;a.mk=null;a.h_=null;}
function ANk(){Hp.call(this);this.cO=null;}
function AOY(a){var b=new ANk();AQq(b,a);return b;}
function AQq(a,b){a.cO=b;}
function A7m(a,b){return a.cO.data[b].hP;}
function HN(){var a=this;B.call(a);a.lU=null;a.co=null;a.bp=0;a.dE=0;a.bz=0;a.lF=0;}
function Ga(a){var b=new HN();AQb(b,a);return b;}
function AQb(a,b){a.bp=0;a.dE=0;a.lU=b;if(b!==null)a.lF=b.lF+1|0;}
function If(a,b,c){var d;a.bp=b;a.dE=1;a.bz=JT(c);d=a.lU;if(d!==null)If(d,b,c);}
function Mi(a,b){var c,d,e,f;a.bp=b;a.dE=2;c=a.lU;if(c!==null)a.bz=c.bz;a:{d=a.co;if(d!==null){d=d.data;e=d.length;f=0;while(true){if(f>=e)break a;Mi(d[f],b);f=f+1|0;}}}}
var CV=G(Bt);
var AMn=G(FP);
function AZ0(a){var b=new AMn();ATo(b,a);return b;}
function ATo(a,b){a.le=1;a.lz=1;a.n4=b;}
function ANq(){var a=this;B.call(a);a.po=null;a.nt=null;a.fb=null;a.ng=null;a.bH=null;a.qh=null;a.on=null;a.gr=null;a.hm=null;a.kf=null;}
function AXr(a,b){var c=new ANq();A2G(c,a,b);return c;}
function A2G(a,b,c){var d,e,f;a.fb=b;a.ng=c;a.bH=AZj();b=new J;L(b);a.kf=b;a.gr=Ks();b=new TS;d=AM3(16);b.hg=0;b.et=P(Kb,d);b.y3=0.75;VO(b);a.hm=b;b=new V3;c=a.bH;e=a.kf;f=a.gr;b.d2=c;b.m6=e;b.tX=f;a.qh=b;b=new VJ;b.dk=c;b.nU=e;b.sW=f;a.on=b;}
function Yr(a){var b,c,d,e,f,g,h;a:{b=NR(a.fb.fz);c=b.jS;if(c.du>0){d=c.dl;e=0;b:while(true){f=b.jS.ch.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cU;if(HW(a.gr,g))CC(a.gr,g);else{h=a.gr;D6(h,g,C5(h.du));}c=c.dj;if(d!=b.jS.dl)break b;}e=e+1|0;}b=new IG;X(b);N(b);}}b=a.fb.f3;if(b!==null)AA$(a,b);Bu(a.bH,a.fb.fz.du);b=TC(NR(a.fb.fz));while(FI(b)){c=Rc(b);Hs(a.bH,a.kf.J,M(c));BM(a.kf,c);}b=TC(NR(a.fb.fz));while(FI(b)){c=Rc(b);c=CC(a.fb.fz,c);Bu(a.bH,c.q);c=B9(c);while(Cb(c)){g=Cc(c);g=CC(a.gr,g);Bu(a.bH,
g.bu);}}if(a.fb.f3===null)Bu(a.bH,(-1));else{Bu(a.bH,a.hm.hg);ABT(a,a.fb.f3);}if(a.ng===null)Bu(a.bH,(-1));else{Bu(a.bH,1);AGr(a.ng,a.bH,a.hm);}a.po=RY(a.bH);a.nt=GS(K(a.kf));}
function AA$(a,b){var c,d,e,f,g,h;if(AEr(a.hm,b))O9(a.hm,b);else{c=a.hm;d=C5(c.hg);if(b===null){e=AAx(c);if(e===null){c.mI=c.mI+1|0;e=AEv(c,null,0,0);f=c.hg+1|0;c.hg=f;if(f>c.qi)Yl(c);}}else{g=Ni(b);h=g&(c.et.data.length-1|0);e=Yw(c,b,h,g);if(e===null){c.mI=c.mI+1|0;e=AEv(c,b,h,g);f=c.hg+1|0;c.hg=f;if(f>c.qi)Yl(c);}}e.c3=d;}b=b.c8;if(b===null)return;c=new Xb;c.s0=a;b.fJ(c);}
function ABT(a,b){var c,d,e,f;c=(O9(a.hm,b)).bu;Bu(a.bH,c);if(b instanceof Oq)Bu(a.bH,(-1));else if(!(b instanceof LS))Bu(a.bH,0);else Bu(a.bH,1);d=a.qh;Bu(d.d2,b.fm.dc());e=b.fm;f=new Xx;f.xb=d;e.fJ(f);d=a.on;Bu(d.dk,b.f5.dc());e=b.f5;f=new Vk;f.vS=d;e.fJ(f);d=b.lW;Bu(a.bH,d.dc());e=new Wi;e.Ci=a;d.fJ(e);d=b.ic;Bu(a.bH,d.dc());d=d.cj();while(d.c0()){e=d.cl();P8(a.qh,e.lY);HF(a.on,e.lm);Bu(a.bH,e.sy);}d=b.vN;if(d===null)Bu(a.bH,(-1));else Bu(a.bH,(CC(a.gr,d)).bu);b=b.c8;Bu(a.bH,b.dc());d=new Q$;d.rd=a;b.fJ(d);}
function PC(){B.call(this);this.BW=null;}
function AXT(a,b){var c,d,e,f,g,h,i,j;c=a.BW;if(c.gi){d=Fh(c);e=new J;L(e);H(H(e,d),C(442));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CL(b[0]);g=E6(b[1]);h=(CL(b[2])).data[0];if(c.h.cJ==h){i=null;j=null;if(b.length>=5){i=CL(b[3]);j=E6(b[4]);}b=Eo(c);if(!Bj(b,C(205))&&!Bj(b,C(422))?0:1)ON(c.h,f,g);else{XH(c.h,f,g,i,j);Fb(c.h.d6);Fb(c.h.ee);NW(c.h);Lh(c.h);O5(c);}}}
function AEm(){B.call(this);this.s$=null;}
function A2W(a,b){var c,d,e,f;c=a.s$;if(c.fA!=3){b=b.data;d=CL(b[0]);e=E6(b[1]);XH(c.h,d,e,null,null);if(c.gi){b=Fh(c);f=Kn(EN(),c.BS);c=new J;L(c);H(Ic(H(H(c,b),C(443)),f),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}
function To(){var a=this;B.call(a);a.w2=null;a.w3=null;a.w1=0;}
function A0o(a,b){var c,d,e;c=a.w2;d=a.w3;e=a.w1;d.g(Wv(c,(b.k.a+e|0)-c.ft.a|0));}
function Tn(){var a=this;B.call(a);a.sw=null;a.su=null;a.sv=0;}
function A6k(a,b){var c,d,e;c=a.sw;d=a.su;e=a.sv;d.g(RE(c,(b.k.b+e|0)-c.ft.b|0));}
var AJz=G();
var AI9=G();
function AGh(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EL()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new UG;d.addEventListener("change",Bw(e,"handleEvent"));d.click();}
var AIE=G();
function Yu(){B.call(this);this.v$=null;}
function APH(a,b){var c,d,e;c=a.v$;d=BT(b);e=new J;L(e);H(H(e,C(444)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new ADo;d.En=c;d.t5=b;e=new ADq;e.GB=c;WQ(b,d,e);}
function Yt(){B.call(this);this.yx=null;}
function AVC(a,b){var c,d,e;c=a.yx;d=BT(b);e=new J;L(e);H(H(e,C(445)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new Qy;d.DF=c;H_(b,d);}
var Fy=G(0);
function Yx(){var a=this;B.call(a);a.kr=0;a.qU=0;a.l$=0;a.ij=0;a.jR=null;}
function Cb(a){return a.kr>=a.l$?0:1;}
function Cc(a){var b,c;Ri(a);b=a.kr;a.ij=b;c=a.jR;a.kr=b+1|0;return c.jc(b);}
function AAV(a){var b,c,d;if(a.ij<0){b=new CV;X(b);N(b);}Ri(a);a.jR.mT(a.ij);a.qU=a.jR.ca;c=a.ij;d=a.kr;if(c<d)a.kr=d-1|0;a.l$=a.l$-1|0;a.ij=(-1);}
function Ri(a){var b;if(a.qU>=a.jR.ca)return;b=new IG;X(b);N(b);}
function LV(){var a=this;O$.call(a);a.yF=null;a.Bx=null;}
function AJf(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.yF;e=0;f=0;g=a.Bx;a:{b:{while(true){if((e+32|0)>f&&Em(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cl(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BJ;c=new J;L(c);V(H(V(H(c,C(446)),l),C(101)),h);Bn(b,K(c));N(b);}if(Cl(b)<m){b=new OW;X(b);N(b);}if(m<0){b=new BJ;c=new J;L(c);H(V(H(c,C(102)),m),C(103));Bn(b,K(c));N(b);}n=b.bg;h=n+b.nX|0;e=0;while(e<m){o=k+1|0;i=b.qv.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bg=n+m|0;e=0;}if(!Em(c)){p=!Em(b)&&e>=f?A_m:A_l;break a;}i=g.data;n=Cl(c);o=i.length;n=Be(n,o);q=new ADU;q.uF=b;q.Cf=c;p=ANp(a,d,e,f,g,0,n,q);e=q.xj;if(p===null&&0==q.nm)p=A_m;k=q.nm;h=0;if(c.q0){b=new K3;X(b);N(b);}if(Cl(c)<k)break;if(h>o){b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(104)),h),C(98)),o),41);Bn(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BJ;c=new J;L(c);V(H(V(H(c,C(106)),l),C(101)),o);Bn(b,K(c));N(b);}if(k<0){b=new BJ;c=new J;L(c);H(V(H(c,C(102)),k),C(103));Bn(b,K(c));N(b);}o=c.bg;m=0;while
(m<k){l=o+1|0;n=h+1|0;ABO(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bg=c.bg+k|0;if(p!==null)break a;}b=new Ki;X(b);N(b);}b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(104)),k),C(98)),h),41);Bn(b,K(c));N(b);}FN(b,b.bg-(f-e|0)|0);return p;}
var Uk=G(LV);
function ANp(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(N_(h,2))break a;i=A_m;break a;}c=k+1|0;n=j[k];if(!G1(a,n)){c=c+(-2)|0;i=EK(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(N_(h,3))break a;i=A_m;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!G1(a,n))break b;if(!G1(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Pf(p)){c=k+(-3)|0;i=EK(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EK(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(N_(h,4))break a;i=A_m;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cl(h.Cf)<2?0:1)break a;i=A_l;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!G1(a,n))break c;if(!G1(a,o))break c;if(!G1(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Kr(r);m=c+1|0;j[c]=JO(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EK(1);break a;}c=k+(-3)|0;i
=EK(1);}h.xj=c;h.nm=f;return i;}
function G1(a,b){return (b&192)!=128?0:1;}
function AEV(){var a=this;B.call(a);a.Ek=null;a.El=null;a.Ej=null;}
function AC1(){B.call(this);this.wq=null;}
function ATa(a,b){M3(a.wq,b);}
function W3(){B.call(this);this.rr=null;}
function AWG(a,b){var c,d;c=a.rr;d=c.eA+1|0;c.eA=d;c=new J;L(c);H(H(V(c,d),C(447)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function PW(){B.call(this);this.v7=null;}
function AU5(a){return a.v7.hH();}
function PV(){B.call(this);this.vi=null;}
function AZ9(a){return a.vi.hH();}
function AB1(){B.call(this);this.Bv=null;}
function A3I(a){return a.Bv.hH();}
var Yk=G();
function A4v(a){return EQ(1);}
function ABH(){B.call(this);this.uj=null;}
function A6I(a,b){a.uj.g(FZ(b));}
var AHB=G();
function AEk(){B.call(this);this.wK=null;}
function AQ0(a,b){a.wK.e();}
var O1=G(BJ);
function ACN(){B.call(this);this.rT=null;}
function ANH(a){DY(a.rT);}
var AGV=G();
function Qu(b,c,d){return AIw(b,0,c,d,Wf());}
function AIw(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BQ(c,d);h=g>=0?0:1+RV(f,2.0)|0;i=g>0?0:1+RV(f,3.0)|0;j=P(Da,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(448)),g);k[g]=AIw(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Da;n=new J;L(n);V(H(n,C(449)),g);KG(m,K(n),l);n=new Sg;n.uN=m;m.lB=n;switch((l+g|0)%3|0){case 0:break;case 1:RN(m);break a;case 2:m.gV=60136;break a;default:break a;}Hu(m);}if(Wh(f)<0.25){n=Ku(m.hP,0);n.bK=n.bK|2;}k[h+g|0]=m;g=g+1|0;}n=AMw(b,c,j);b=new X2;b.xB=n;b.xD=e;n.f4=b;n.cD
=b;if((c+c|0)>d)Jb(n);else Iq(n);return n;}
function ACO(){B.call(this);this.uo=null;}
function ARs(a){DY(a.uo);}
function S$(){B.call(this);this.vd=null;}
function AU7(a){ACA(a.vd);}
function S9(){B.call(this);this.yW=null;}
function A0G(a){AFc(a.yW);}
function Ta(){B.call(this);this.zA=null;}
function A6i(a){AFv(a.zA);}
function S_(){B.call(this);this.Da=null;}
function AX3(a){AAH(a.Da);}
function UD(){B.call(this);this.t1=null;}
function AWA(a){DY(a.t1);}
function HA(){var a=this;B.call(a);a.eG=0;a.fo=0;a.qa=null;a.oP=0;a.hp=null;}
function AV7(a,b,c,d,e,f){var g=new HA();A2j(g,a,b,c,d,e,f);return g;}
function A2j(a,b,c,d,e,f,g){a.eG=b;a.fo=c;a.qa=BK(f,g);a.oP=d;a.hp=e;}
function AEo(){var a=this;B.call(a);a.rH=null;a.rJ=null;}
function A6P(a){var b,c;b=a.rH;c=a.rJ;D3(b);c.e();}
function RD(){var a=this;B.call(a);a.gM=null;a.k_=null;a.jF=null;a.q2=null;a.dH=null;a.mn=0;}
function ABY(a,b){if(!BR(b.pj,a.q2)){a.q2=b.pj;Ox(a);}}
function Ox(a){a.dH=BY(a.dH,null);}
function AIj(a,b){var c,d;c=FB(b,a.q2);d=Fl(c);a.dH=BY(a.dH,AE9(b.bR,Oh(60088),c,0,d,0));}
function Ut(a,b){return a.dH!==null&&GI(b,a.gM,a.k_)?1:0;}
function XP(){var a=this;B.call(a);a.w4=null;a.w5=null;}
function A0N(a){var b,c;b=a.w4;c=a.w5;IW(b.K,c);Kx(c);b.bZ();}
function XO(){B.call(this);this.xL=null;}
var AJy=G();
var DV=G(Bt);
function AI2(){var a=this;B.call(a);a.jZ=null;a.om=0;a.gC=0;}
function AZj(){var a=new AI2();AXp(a);return a;}
function AXp(a){a.om=0;a.jZ=BP(16);a.gC=0;}
function Hs(a,b,c){Bu(a,b);Bu(a,c);}
function Bu(a,b){var c,d;c=a.jZ;d=c.data.length;if(d==a.gC)a.jZ=JU(c,d*2|0);c=a.jZ.data;d=a.gC;a.gC=d+1|0;c[d]=b;}
function RY(a){var b,c,d,e,f;b=a.om;if(b&&a.gC!=b){c=D4();b=a.om;d=a.gC;e=new J;L(e);H(V(H(V(H(e,C(450)),b),C(451)),d),C(452));Bf(c,K(e));}f=a.jZ;b=f.data.length;d=a.gC;if(b!=d)f=JU(f,d);return f;}
function TS(){var a=this;Es.call(a);a.hg=0;a.et=null;a.mI=0;a.y3=0.0;a.qi=0;}
function AM3(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function VO(a){a.qi=a.et.data.length*a.y3|0;}
function AEr(a,b){return W5(a,b)===null?0:1;}
function O9(a,b){var c;c=W5(a,b);if(c===null)return null;return c.c3;}
function W5(a,b){var c,d;if(b===null)c=AAx(a);else{d=Ni(b);c=Yw(a,b,d&(a.et.data.length-1|0),d);}return c;}
function Yw(a,b,c,d){var e;e=a.et.data[c];while(e!==null&&!(e.oh==d&&(b!==e.cU?0:1))){e=e.iQ;}return e;}
function AAx(a){var b;b=a.et.data[0];while(b!==null&&b.cU!==null){b=b.iQ;}return b;}
function AEv(a,b,c,d){var e,f;e=new Kb;Xh(e,b,null);e.oh=d;f=a.et.data;e.iQ=f[c];f[c]=e;return e;}
function Yl(a){var b,c,d,e,f,g,h,i;b=a.et.data.length;b=AM3(!b?1:b<<1);c=P(Kb,b);d=c.data;e=0;f=b-1|0;while(true){g=a.et.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.oh&f;i=h.iQ;h.iQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.et=c;VO(a);}
function V3(){var a=this;B.call(a);a.d2=null;a.m6=null;a.tX=null;}
function P8(a,b){var c;if(!(b instanceof MX)){Bu(a.d2,3);AE_(a,b);Bu(a.d2,b.j4);}else{c=b;Bu(a.d2,5);AE_(a,c);Bu(a.d2,c.j4);Bu(a.d2,c.xV);b=c.lv;Bu(a.d2,b.q);c=new X4;c.rR=a;FL(b,c);}}
function AE_(a,b){var c;c=b.ev.g6;Hs(a.d2,a.m6.J,M(c));Bu(a.d2,b.ev.dL);Py(a,b.kq);BM(a.m6,c);}
function Py(a,b){if(b===null)Bu(a.d2,(-1));else Bu(a.d2,(CC(a.tX,b)).bu);}
function VJ(){var a=this;B.call(a);a.dk=null;a.nU=null;a.sW=null;}
function HF(a,b){var c,d,e;if(b instanceof H$){c=b;Bu(a.dk,9);Z5(a,c.fW);}else if(b instanceof KQ){d=b;Bu(a.dk,3);AAB(a,d);Bu(a.dk,d.rj);Z5(a,d.iG);}else if(b instanceof JX){e=b;Bu(a.dk,4);HF(a,e.iv);HF(a,e.h3);}else if(b===null)Bu(a.dk,(-1));else{Bu(a.dk,5);AAB(a,b);Bu(a.dk,b.Bn);}}
function AAB(a,b){var c;c=b.eZ.g6;Hs(a.dk,a.nU.J,M(c));Bu(a.dk,b.eZ.dL);b=b.gl;if(b===null)Bu(a.dk,(-1));else Bu(a.dk,(CC(a.sW,b)).bu);BM(a.nU,c);}
function Z5(a,b){var c;Bu(a.dk,b.q);c=new Xk;c.yy=a;FL(b,c);}
function X9(){var a=this;B.call(a);a.zZ=0;a.zY=0;}
function T7(){B.call(this);this.to=null;}
function AVE(a,b){var c;c=a.to;DP(c,b);H2(c,null);W2(c);}
var AFC=G();
function A4W(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AFB(){B.call(this);this.tF=null;}
function AZ8(a,b){var c,d,e;c=a.tF;d=0;e=b.length;while(d<e){c.g(AIM(b[d],P(BC,0)));d=d+1|0;}}
function AEY(){B.call(this);this.C_=null;}
function A07(a,b){var c,d;c=a.C_;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A7g(b,P(BC,0),P(BC,0)));}
var ZW=G(DH);
var Bby=null;function AKL(){Bby=F($rt_doublecls());}
var KH=G();
var Bbz=F1;var BbA=null;var BbB=null;function AHI(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.rI=Jf(Dk(d,D(0, 2147483648)),F1)?0:1;e=Dk(d,D(4294967295, 1048575));f=Hg(A9p(d,52))&2047;if(Jf(e,F1)&&!f){c.od=F1;c.nk=0;return;}if(f)e=A72(e,D(0, 1048576));else{e=Ii(e,1);while(Jf(Dk(e,D(0, 1048576)),F1)){e=Ii(e,1);f=f+(-1)|0;}}g=BbB.data;h=f<<16>>16;i=0;j=g.length;k=BQ(i,j);if(k>0){c=new BU;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BQ(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jq(e,BbA.data[h],i);if(AQi(m,Bbz)){while(DN(m,Bbz)<=0){j=j+(-1)|0;m=C0(Cm(m,Bq(10)),Bq(9));}g=BbB.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jq(e,BbA.data[h],i);}e=Ii(e,1);d=C0(e,Bq(1));g=BbA.data;h=j+1|0;n=g[h];f=i-1|0;n=Jq(d,n,f);o=Jq(Kn(e,Bq(1)),BbA.data[h],f);p=Bq(1);while(true){q=Cm(p,Bq(10));if(DN(Dj(m,q),Dj(o,q))<=0)break;p=q;}r=Bq(1);while
(true){s=Cm(r,Bq(10));if(DN(Dj(m,s),Dj(n,s))>=0)break;r=s;}h=DN(p,r);e=h>0?Cm(Dj(m,p),p):h<0?C0(Cm(Dj(m,r),r),r):Cm(Dj(C0(m,AIH(r,Bq(2))),r),r);if(DN(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dj(e,Bq(10));if(DN(e,D(2808348672, 232830643))<0)break;}else if(DN(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cm(e,Bq(10));}c.od=e;c.nk=j-330|0;}
function Jq(b,c,d){var e,f,g,h,i,j,k,l;e=Dk(b,Bq(65535));f=Dk(GA(b,16),Bq(65535));g=Dk(GA(b,32),Bq(65535));h=Dk(GA(b,48),Bq(65535));i=Dk(c,Bq(65535));j=Dk(GA(c,16),Bq(65535));k=Dk(GA(c,32),Bq(65535));l=Dk(GA(c,48),Bq(65535));return C0(C0(C0(Ii(Cm(l,h),32+d|0),Ii(C0(Cm(l,g),Cm(k,h)),16+d|0)),Ii(C0(C0(Cm(l,f),Cm(k,g)),Cm(j,h)),d)),GA(C0(C0(C0(Cm(k,e),Cm(j,f)),Cm(i,g)),Ii(C0(C0(C0(Cm(l,e),Cm(k,f)),Cm(j,g)),Cm(i,h)),16)),32-d|0));}
function AHs(){Bbz=Dj(Bq(-1),Bq(10));BbA=AKF([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);BbB=A8Q([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Ve(){B.call(this);this.sj=null;}
function AOp(a){HG(a.sj,37,3);}
function Vf(){B.call(this);this.s5=null;}
function AQC(a){HG(a.s5,40,3);}
function Vg(){B.call(this);this.uM=null;}
function A6m(a){HG(a.uM,42,3);}
function Vh(){B.call(this);this.yH=null;}
function AS1(a){HG(a.yH,45,3);}
function Vi(){B.call(this);this.zb=null;}
function AVk(a){HG(a.zb,45,5);}
function PJ(){B.call(this);this.BL=null;}
function A7D(a,b){var c,d;c=a.BL;d=new Bt;Bn(d,$rt_str(b.message));c.g(d);}
var W6=G(0);
var A$$=null;function A8B(){A8B=Bm(W6);A38();}
function A38(){A$$=new $rt_globals.TextDecoder("utf-16");}
function Us(){B.call(this);this.v_=null;}
function AQ8(a,b,c){var d,e;c=a.v_;d=c.d.h;e=b.bu;b=c.fU;ABG(d.F.data[e],0,b);}
function ADB(){var a=this;B.call(a);a.ut=0;a.Dt=0;}
function Gg(a,b){var c;c=a.Dt;if(c<=0)return 0;return Z$(a.ut,b,c);}
var UG=G();
function AYs(a,b){}
function Sg(){B.call(this);this.uN=null;}
function A2Z(a){var b,c,d;b=a.uN;c=Bk();d=Dd(b);b=new J;L(b);H(H(b,C(453)),d);Bf(c,K(b));}
function Vm(){B.call(this);this.ur=null;}
function AU6(a,b,c){Id(Cg(a.ur.d.h,b.bu),0,M(c));}
function X2(){var a=this;B.call(a);a.xB=null;a.xD=null;}
function A2U(a){var b,c;b=a.xB;c=a.xD;if(!HE(b))Iq(b);else Jb(b);c.e();}
function YE(){var a=this;B.call(a);a.rc=null;a.zW=null;a.wi=0;a.xc=0;}
function OS(a,b){return Cl(a.zW)<b?0:1;}
function Vq(){B.call(this);this.Bg=null;}
function A6Q(a,b){DP(a.Bg,b);}
function S7(){B.call(this);this.va=null;}
function A1u(a){M2(a.va);}
function AEC(){var a=this;B.call(a);a.x9=null;a.x8=null;}
function AXd(a){Cx(a.x9,a.x8);}
var ZN=G();
var BbC=null;function ON(b,c,d){Sv(b,c,d,0);}
function Sv(b,c,d,e){YU(b,c,d,null,null,e);}
function YU(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=MN(c);i=Bc(h);j=Bc(h);k=Bc(h);l=CN(b);c=b.F;if(c.data.length<i)b.F=AGX(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bc(h)|0;h.fE=h.fE+n|0;}else b.F.data[m]=Ek(AAp(h,d,0));m=m+1|0;}NW(b);if(j)b.dI=AIN(AJE(h));Fb(b.ee);Fb(b.d6);o=b.ee;g=0;while(g<k){D6(o,D1(Bc(h),Bc(h)),D1(Bc(h),Bc(h)));g=g+1|0;}p=b.ee;o=b.d6;q=NG(OM(p));while(FI(q)){r=Pi(q);s=r.cU;p=r.c3;BG(BbC);r=CC(o,p);if(r===null){r=BO();D6(o,p,r);}BA(r,s);}if(o.pP===null){p=new Rq;p.xr=o;o.pP=p;}p=o.pP;r=new AA6;Os(r,
p.xr);while(FI(r)){OE(r);o=r.hL.c3;p=A$D;c=P(B,o.q);d=c.data;GM(o,c);LE(c,p);g=0;t=d.length;while(g<t){p=d[g];La(o,g);o.cw.data[g]=p;g=g+1|0;}}Sr(h);if(e!==null&&f!==null){p=ATy(e,f);QL(p);b.fr=AZL(p.p4,p.jn);b.dI=AIN(p.qq);}}
function XH(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MN(c);i=Bc(h);j=Bc(h);k=Bc(h)!=1?0:1;l=Bc(h);m=Bc(h);n=AE8(b,i);o=AE8(b,j);p=(Jo(Cg(b,n.a),n.b)).data[0].t;q=(Jo(Cg(b,o.a),o.b)).data[1].t;r=0;s=l-1|0;while(r<l){g=AAp(h,d,i);if(!r)g=MG(p,g);if(r==s)g=MG(g,q);t=n.a+r|0;u=Ek(g);c=b.F.data;v=c[t];c[t]=u;if(!k&&J1(v)==J1(u)){t=0;while(t<J1(v)){o=v.t.data[t];w=u.t.data[t];x=o.b8;y=x!=5?0:1;if(!y&&x&&!w.b8){w.b8=x;w.bK=o.bK;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AJE(h);w=Lt(i,j,(-1));YI(b.dI,w,u);}else if(e!==null&&f!==null){v=ATy(e,f);QL(v);w=Lt(i,j,(-1));YI(b.dI,w,v.qq);n=b.fr;n.f3=b.dI.dF.cB;n.fz=v.jn;}}Sr(h);}
function AAp(b,c,d){var e,f,g,h,i,j,k,l;e=Bc(b);f=P(CB,e);g=f.data;h=0;while(h<e){i=Bc(b);j=Bc(b);k=Bc(b);l=Bc(b);g[h]=Eq(ET(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AMy(){BbC=new WT;}
var AAJ=G(0);
var Qe=G(0);
var F6=G();
function ABL(){F6.call(this);this.BY=null;}
function OL(a,b){var c,d,e;c=0;while(true){d=a.BY;if(d.kN===null)d.kN=B9(d.zx);if(!Cb(d.kN))e=0;else{c=b.bQ(Cc(d.kN));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Sq=G(0);
function PI(){var a=this;B.call(a);a.Eq=null;a.Er=null;a.Eo=0;a.Ep=0;}
var AFp=G();
function AOP(a,b){b=b;b.da=BY(b.da,null);}
var AHL=G(0);
function AK8(b,c,d,e,f,g){f=f.data;f[JY(0,0)]=GZ(g,b,c,d,0);f[JY(0,1)]=GZ(g,b,c,d,2);f[JY(1,0)]=GZ(g,b,c,e,0);f[JY(1,1)]=GZ(g,b,c,e,2);return f[JY(0,0)];}
function Kb(){var a=this;Hn.call(a);a.oh=0;a.iQ=null;}
var IG=G(Bt);
function Uc(){var a=this;B.call(a);a.bD=null;a.r$=null;a.jK=null;a.o5=null;a.mY=null;a.gZ=null;}
function NQ(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Ug();e=a.bD.d;f=Eo(e);e=H5(e);g=a.bD.fX;if(AAE(g,f,e)!==null){h=new Sj;h.sF=a;h.sG=b;EG(d,C(454),h);}if(Pb(g,f,e)!==null){h=new Sh;h.Bl=a;h.Bk=b;EG(d,C(455),h);}if(ADr(g,f,e)!==null){e=new Sl;e.zS=a;e.zT=b;EG(d,C(456),e);}e=new Si;e.Dw=a;e.Dv=b;EG(d,C(457),e);Il(a);if(ME()){if(!a.bD.fn){f=new Tx;f.vB=a;EG(d,C(458),f);}f=new Ty;f.x4=a;EG(d,C(459),f);if(!a.bD.fn&&W0(Il(a))){f=new Tw;f.sH=a;EG(d,C(460),f);}}if(c!==null)NN(d,c);f=Ug();i=P(BC,5).data;i[0]=C(183);i[1]=
C(194);i[2]=C(211);i[3]=C(210);i[4]=C(205);j=i.length;k=0;while(k<j){b=i[k];e=new SG;e.AK=a;e.AJ=b;EG(f,b,e);k=k+1|0;}Iw(d,C(461),Jt(f));c=Ug();i=P(By,3);l=i.data;g=a.mY;BG(g);m=new Rl;m.zh=g;l[0]=Dc(C(462),m);g=a.mY;BG(g);m=new Rj;m.Bq=g;l[1]=Dc(C(463),m);g=a.mY;BG(g);m=new Rk;m.q6=g;l[2]=Dc(C(464),m);Mh(c,C(465),CQ(i),BbD);i=P(By,2);l=i.data;g=a.jK;BG(g);m=new Vj;m.Bu=g;l[0]=Dc(C(466),m);g=a.jK;BG(g);m=new Vl;m.Dz=g;l[1]=Dc(C(467),m);Iw(c,C(468),CQ(i));g=new AAz;g.z9=a;Mh(c,C(469),g,BbD);if(a.bD.ci.bR.mA)
{i=P(By,2);l=i.data;g=new AA_;g.tc=a;l[0]=Dc(C(470),g);g=new AA9;g.B1=a;l[1]=Dc(C(471),g);Iw(c,C(472),CQ(i));}Iw(d,C(473),Jt(c));return Jt(d);}
function ABm(a,b){return NQ(a,b,null);}
function Il(a){return a.bD.ci.b9;}
function Xs(a){var b;b=new SL;b.vx=a;return b;}
function A1l(a){var b,c,d,e,f;b=P(By,5);c=b.data;d=a.bD;BG(d);e=new T2;e.xs=d;c[0]=Dc(C(474),e);e=a.bD;BG(e);f=new T3;f.s_=e;c[1]=Dc(C(475),f);d=a.bD;BG(d);e=new T4;e.BT=d;c[2]=Dc(C(476),e);d=a.bD;BG(d);e=new T5;e.ym=d;c[3]=Dc(C(477),e);d=a.bD;BG(d);e=new Uj;e.AC=d;c[4]=Dc(C(478),e);return CQ(b);}
function Rh(a,b){var c;c=new PA;c.yU=a;c.yV=b;return c;}
function Lj(a,b,c){var d,e,f,g,h,i,j,k,l;a:{D3(a.gZ.ck);d=a.bD.d;e=Eo(d);f=H5(d);g=a.bD.fX;if(c===null)h=null;else{A9G();switch(BbE.data[c.fx]){case 1:h=Pb(g,e,f);break a;case 2:h=AAE(g,e,f);break a;default:}b=new Fj;X(b);N(b);}}c=a.bD;e=FO(c,b);g=JK(c.d.h,e.bv,e.bA);f=TY(c,g);if(h!==null){g=c.d;i=e.bv;j=e.bA;e=new ACP;e.GH=c;e.GG=b;e.GF=f;h.uV(g,i,j,e,c.kE);}else{e=CC(c.d.h.ee,g);if(e!==null)Js(c,e);else{e=CC(c.d.h.d6,g);if(e!==null&&!EU(e))AAU(c.lk,b,e,c,f);else{c=c.lk;k=P(By,1);l=k.data;e=new By;f=c.ck;BG(f);g
=new ACE;g.CE=f;Ce(e,g,C(479));l[0]=e;SK(c,b,CQ(k));}}}}
function ADD(){var a=this;B.call(a);a.wG=null;a.wD=null;a.wE=null;}
function ASE(a,b,c,d){var e,f,g,h;b=a.wG;e=a.wD;f=a.wE;ACZ(b,e);if(f!==null)d.nv.e();if(ADS(d)){f=d.fK;g=e.dn;h=e.gD;WL(b,BK((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nS,e,d.uT);}}
function AMt(){var a=this;B.call(a);a.i0=null;a.fE=0;}
function MN(a){var b=new AMt();AX7(b,a);return b;}
function AX7(a,b){a.i0=b;a.fE=0;}
function Bc(a){var b,c;b=a.i0.data;c=a.fE;a.fE=c+1|0;return b[c];}
function Sr(a){var b,c,d,e;if(a.fE!=a.i0.data.length){b=D4();c=a.i0.data.length;d=a.fE;e=new J;L(e);H(V(H(V(H(e,C(450)),c),C(480)),d),C(481));Bf(b,K(e));}}
function Gk(){var a=this;B.call(a);a.hR=null;a.c8=null;a.f5=null;a.fm=null;a.ic=null;a.lW=null;a.vN=null;}
function A8T(a){var b=new Gk();AH5(b,a);return b;}
function AH5(a,b){a.hR=b;a.c8=BO();a.f5=BO();a.fm=BO();a.lW=BO();a.ic=BO();}
function AFH(a){var b;b=a.hR;if(b!==null)b.c8.rE(a);}
function K$(){var a=this;B.call(a);a.ev=null;a.kq=null;a.j4=0;}
function A8x(a,b,c){var d=new K$();AIB(d,a,b,c);return d;}
function AIB(a,b,c,d){a.ev=b;a.kq=c;a.j4=d;}
function A4$(a){var b,c,d;b=AL4(a.ev);c=a.kq;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AL5(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.ev,c.ev)&&BR(a.kq,c.kq)&&BR(C5(a.j4),C5(c.j4))?1:0;}return 0;}
function Fn(){var a=this;B.call(a);a.eZ=null;a.gl=null;a.Bn=0;}
function A7X(a,b,c){var d=new Fn();OC(d,a,b,c);return d;}
function OC(a,b,c,d){a.eZ=b;a.gl=c;a.Bn=d;}
function AWR(a){var b,c,d;b=BT(a.eZ);c=a.gl;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AKu(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.eZ,c.eZ)&&BR(a.gl,c.gl)?1:0;}return 0;}
var Io=G(0);
function Uu(){B.call(this);this.z_=null;}
function A2N(a,b,c,d){Lp(a.z_,b,c.bu,d.bu);}
function RM(){var a=this;B.call(a);a.lY=null;a.lm=null;a.sy=0;}
function Uv(){B.call(this);this.yc=null;}
function A1k(a,b,c,d){Lp(a.yc,b,c.bu,d.bu);}
function Jr(){B.call(this);this.o2=0;}
var BbF=null;var BbG=null;var BbH=null;function AUx(a){var b=new Jr();AIr(b,a);return b;}
function AIr(a,b){a.o2=b;}
function Zs(b){return !b?BbG:BbF;}
function AKv(){BbF=AUx(1);BbG=AUx(0);BbH=F($rt_booleancls());}
var Lr=G(0);
var S6=G();
var NL=G(0);
var AHM=G();
function Tt(){B.call(this);this.wd=null;}
function A3j(a,b,c,d){Kt(a.wd,b,c.bu,d.bu);}
var Ts=G();
function AW0(a,b){return b.ev.dL>=0?0:1;}
var Tr=G();
function AUW(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eZ;if(b===null)break b;if(b.dL>=0)break b;}c=1;break a;}c=0;}return c;}
function Tv(){B.call(this);this.BR=null;}
function A2T(a,b,c,d){Kt(a.BR,b,c.bu,d.bu);}
function R7(){var a=this;B.call(a);a.EH=null;a.vf=0;}
function AY1(a,b){var c,d,e,f;c=a.vf;d=(CL(Jj(b,0))).data;b=Bk();e=d[0];f=new J;L(f);V(H(V(H(f,C(482)),c),C(483)),e);Bf(b,K(f));b=Bk();e=d[1];f=new J;L(f);V(H(V(H(f,C(482)),c),C(484)),e);Bf(b,K(f));}
function AGl(){B.call(this);this.Rc=null;}
var WT=G();
var F7=G();
var BbI=null;var BbJ=null;var A_Z=null;var BbK=null;var BbL=null;var BbM=null;function AL2(){BbI=new VB;BbJ=new Vy;A_Z=new Vz;BbK=new Vw;BbL=new Vx;BbM=new Xu;}
function AKr(){var a=this;B.call(a);a.p4=null;a.qq=null;a.jn=null;a.cZ=null;a.ps=null;a.nN=null;a.jJ=null;a.oq=null;a.qk=null;}
function ATy(a,b){var c=new AKr();A52(c,a,b);return c;}
function A52(a,b,c){a.cZ=MN(b);a.ps=c;}
function QL(a){var b,c,d,e,f,g,h,i;b=Bc(a.cZ);c=new Or;RL(c);a.jn=c;a.jJ=BO();d=0;while(d<b){e=Bc(a.cZ);f=Bc(a.cZ);g=ET(a.ps,e,f);D6(a.jn,g,BO());BA(a.jJ,g);d=d+1|0;}c=NG(OM(a.jn));while(FI(c)){GW((Pi(c)).c3,P$(a));}d=Bc(a.cZ);if(d==(-1))a.p4=null;else{a.nN=P(Gk,d);c=new XS;h=a.cZ;i=a.ps;g=a.jJ;c.eg=h;c.AB=i;c.z3=g;a.oq=c;c=new SI;c.eU=h;c.Cj=i;c.Cz=g;a.qk=c;a.p4=Sw(a,null);}if(Bc(a.cZ)!=(-1))a.qq=AA2(a.cZ,a.nN);}
function Sw(a,b){var c,d,e,f,g,h,i,j,k;c=Bc(a.cZ);d=Bc(a.cZ);e=a.oq;f=Bc(e.eg);g=BO();h=0;while(h<f){BA(g,PO(e));h=h+1|0;}a:{switch(d){case -1:i=new Oq;i.hR=b;b=A_Z;i.c8=b;i.f5=b;i.fm=b;i.lW=b;i.ic=b;break a;case 0:i=A8T(b);break a;case 1:i=new LS;AH5(i,b);GW(i.fm,g);break a;default:}b=new CV;i=new J;L(i);V(H(i,C(485)),d);Bn(b,K(i));N(b);}i.fm=g;b=a.qk;d=Bc(b.eU);e=BO();j=0;while(j<d){BA(e,HS(b));j=j+1|0;}i.f5=e;i.lW=P$(a);d=Bc(a.cZ);b=BO();j=0;while(j<d){e=PO(a.oq);g=HS(a.qk);f=Bc(a.cZ);k=new RM;k.lY=e;k.lm
=g;k.sy=f;BA(b,k);j=j+1|0;}i.ic=b;j=Bc(a.cZ);i.vN=j==(-1)?null:BI(a.jJ,j);d=Bc(a.cZ);b=BO();j=0;while(j<d){BA(b,Sw(a,i));j=j+1|0;}i.c8=b;a.nN.data[c]=i;return i;}
function P$(a){var b,c,d,e;b=Bc(a.cZ);c=BO();d=0;while(d<b){e=Bc(a.cZ);BA(c,BI(a.jJ,e));d=d+1|0;}return c;}
function AGK(){var a=this;B.call(a);a.mB=null;a.qg=null;}
function ANz(){var a=this;B.call(a);a.FV=0;a.Fb=0;a.sp=0;a.nZ=0;}
function AFf(){var a=this;B.call(a);a.tt=null;a.tu=null;}
function AYK(a){var b,c,d,e,f,g;b=a.tt;c=a.tu;if(BR(c.mB,b.d.fM)){c=c.qg;CY(b,c.nZ,c.sp,0);Ci((Bl(b)).bW,c.nZ,c.sp);Ci((Bl(b)).bM,c.Fb,c.FV);}else{d=(B5(b.fX.Cc)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){G5(b);b=new Y0;b.zQ=g;b.zR=c;BG(b);c=new AAd;c.xH=b;$rt_globals.setTimeout(Bw(c,"onTimer"),0);}}}
function AFg(){var a=this;B.call(a);a.CS=null;a.CR=null;}
function A1t(a){Js(a.CS,a.CR);}
function H$(){Fn.call(this);this.fW=null;}
function A2V(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=My(a.fW);c=new AA3;c.CH=a;d=new SD;d.tY=b;d.sC=c;e=new ACT;e.xw=C(38);f=P(EI,0);g=new Ph;g.ob=F(EI);h=F(EI).dq;h.$clinit();g.mZ=BP((((ATQ(h)).data.length-1|0)/32|0)+1|0);BG(f);h=new P9;h.p7=f;if(h instanceof Ph){i=h;if(g.ob===i.ob){j=0;while(true){f=g.mZ.data;if(j>=f.length)break;k=f[j];l=i.mZ.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}GW(g,h);}m=new J;L(m);while(true){h=new Ww;h.yp=e;h.yq=m;g=d.tY;i=new Uh;i.sO=d;i.sN=h;if(!OL(g,i))break;}ADm(m,
0,C(21),0,M(C(21)));return K(LJ(m,C(21)));}
function KQ(){var a=this;Fn.call(a);a.iG=null;a.rj=0;}
function A6q(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AKu(a,b))return 0;c=b;return BR(a.iG,c.iG);}return 0;}
function Xl(){var a=this;B.call(a);a.r1=null;a.rZ=null;a.rY=0;a.r0=0;}
function A3o(a,b){b=b;E9(a.r1,a.rZ,b,a.rY,a.r0);}
function JX(){var a=this;Fn.call(a);a.iv=null;a.h3=null;}
function ATJ(a){var b,c,d;b=a.iv.eZ.g6;c=BT(a.h3);d=new J;L(d);b=H(d,b);Br(b,46);H(b,c);return K(d);}
function AYx(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.iv,c.iv)&&BR(a.h3,c.h3)?1:0;}return 0;}
function Xm(){var a=this;B.call(a);a.Dq=null;a.Dp=null;a.Do=0;a.Dn=0;}
function AQQ(a,b){b=b;E9(a.Dq,a.Dp,b,a.Do,a.Dn);}
function AJw(){var a=this;B.call(a);a.g6=null;a.dL=0;}
function A03(a,b){var c=new AJw();ANK(c,a,b);return c;}
function ANK(a,b,c){a.g6=b;a.dL=c;}
function AT2(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.dL==c.dL&&BR(a.g6,c.g6)?1:0;}return 0;}
function AL4(a){var b,c,d;b=a.g6;c=a.dL;d=new J;L(d);b=H(d,b);Br(b,40);Br(V(b,c),41);return K(d);}
function Xb(){B.call(this);this.s0=null;}
function AQ_(a,b){b=b;AA$(a.s0,b);}
var Oq=G(Gk);
var LS=G(Gk);
function Wi(){B.call(this);this.Ci=null;}
function AYN(a,b){var c;b=b;c=a.Ci;Bu(c.bH,(CC(c.gr,b)).bu);}
function Q$(){B.call(this);this.rd=null;}
function A2M(a,b){b=b;ABT(a.rd,b);}
var Rd=G(0);
var EH=G(FS);
var N5=G(EH);
var VB=G(N5);
var OJ=G(Es);
var Vy=G(OJ);
var O4=G(EF);
function AZ2(a){var b;b=new DV;X(b);N(b);}
function ATm(a,b){var c;c=new DV;X(c);N(c);}
function ASh(a,b){b=new DV;X(b);N(b);}
var Vz=G(O4);
function ATt(a,b){var c;c=new BJ;X(c);N(c);}
function ASy(a){return 0;}
function AQh(a){return BbK;}
function AOt(a){return 1;}
var Vw=G();
function AOb(a){return 0;}
function A3G(a){var b;b=new M_;X(b);N(b);}
function AVu(a){var b;b=new CV;X(b);N(b);}
var ZL=G(0);
var Vx=G();
var Xu=G();
function So(){var a=this;B.call(a);a.nq=0;a.tl=null;}
function A7F(a,b){var c,d,e;c=a.tl;b=b;d=c.zZ;e=c.zY;d=b.a<=d&&e<=b.b?1:0;a.nq=d;return d?0:1;}
function AA4(){var a=this;B.call(a);a.l=null;a.eq=0;a.nr=null;a.rM=0;a.ip=0;a.gf=0;a.bJ=0;a.oc=null;}
function NU(a){return a.l.b0;}
function W9(a,b,c,d){var e,f,g,h,i,j;e=BO();f=a.eq;g=0;if(c!=f)a.eq=c;a:{switch(b){case -1073741784:h=new S5;c=a.bJ+1|0;a.bJ=c;GO(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RO;c=a.bJ+1|0;a.bJ=c;GO(h,c);break a;case -33554392:h=new TV;c=a.bJ+1|0;a.bJ=c;GO(h,c);break a;default:c=a.ip+1|0;a.ip=c;if(d!==null)h=A9N(c);else{h=new Gs;GO(h,0);g=1;}c=a.ip;if(c<=(-1))break a;if(c>=10)break a;a.nr.data[c]=h;break a;}h=new AFO;GO(h,(-1));}while(true){if(FC(a.l)&&a.l.n==(-536870788))
{d=A5Z(Cn(a,2),Cn(a,64));while(!DK(a.l)&&FC(a.l)){i=a.l;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CM(d,Bp(i));i=a.l;if(i.br!=(-536870788))continue;Bp(i);}i=L4(a,d);i.Y(h);}else if(a.l.br==(-536870788)){i=Iv(h);Bp(a.l);}else{i=Zy(a,h);d=a.l;if(d.br==(-536870788))Bp(d);}if(i!==null)BA(e,i);if(DK(a.l))break;if(a.l.br==(-536870871))break;}if(a.l.nF==(-536870788))BA(e,Iv(h));if(a.eq!=f&&!g){a.eq=f;d=a.l;d.hI=f;d.n=d.br;d.fN=d.fY;j=d.dU;d.A=j+1|0;d.j9=j;Gc(d);}switch(b){case -1073741784:break;case -536870872:d
=new XK;Gt(d,e,h);return d;case -268435416:d=new AEw;Gt(d,e,h);return d;case -134217688:d=new AA7;Gt(d,e,h);return d;case -67108824:d=new Ul;Gt(d,e,h);return d;case -33554392:d=new En;Gt(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A9F(BI(e,0),h);default:return A8f(e,h);}return Iv(h);}d=new K2;Gt(d,e,h);return d;}
function AMM(a){var b,c,d,e,f,g,h;b=BP(4);c=(-1);d=(-1);if(!DK(a.l)&&FC(a.l)){e=b.data;c=Bp(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B6(3);b=e.data;b[0]=c&65535;f=a.l;g=f.br;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bp(f);f=a.l;g=f.br;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bp(f);return A5N(e,3);}return A5N(e,2);}if(!Cn(a,2))return AGY(b[0]);if(Cn(a,64))return A4j(b[0]);return AZA(b[0]);}e=b.data;c=1;while(c<4&&!DK(a.l)&&FC(a.l)){h=c+1|0;e[c]=Bp(a.l);c=h;}if(c==1){h=e[0];if(!(BbN.E7(h)==BbO?0:1))return W1(a,e[0]);}if
(!Cn(a,2))return A$a(b,c);if(Cn(a,64)){f=new WW;QA(f,b,c);return f;}f=new AC3;QA(f,b,c);return f;}
function Zy(a,b){var c,d,e,f,g,h,i;if(FC(a.l)&&!Lv(a.l)&&N8(a.l.n)){if(Cn(a,128)){c=AMM(a);if(!DK(a.l)){d=a.l;e=d.br;if(!(e==(-536870871)&&!(b instanceof Gs))&&e!=(-536870788)&&!FC(d))c=MZ(a,b,c);}}else if(!Y2(a.l)&&!ADZ(a.l)){f=new QM;L(f);while(!DK(a.l)&&FC(a.l)&&!Y2(a.l)&&!ADZ(a.l)){if(!(!Lv(a.l)&&!a.l.n)&&!(!Lv(a.l)&&N8(a.l.n))){g=a.l.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bp(a.l);if(!MY(e))Br(f,e&65535);else KB(f,GP(e));}if(!Cn(a,2)){c=new ABl;Ec(c);c.cG
=K(f);e=f.J;c.bS=e;c.pO=A3a(e);c.of=A3a(c.bS);h=0;while(h<(c.bS-1|0)){SO(c.pO,Q(c.cG,h),(c.bS-h|0)-1|0);SO(c.of,Q(c.cG,(c.bS-h|0)-1|0),(c.bS-h|0)-1|0);h=h+1|0;}}else if(Cn(a,64))c=A9_(f);else{c=new P6;Ec(c);c.id=K(f);c.bS=f.J;}}else c=MZ(a,b,AFA(a,b));}else{d=a.l;if(d.br!=(-536870871))c=MZ(a,b,AFA(a,b));else{if(b instanceof Gs)N(Co(C(21),d.b0,QK(d)));c=Iv(b);}}a:{if(!DK(a.l)){e=a.l.br;if(!(e==(-536870871)&&!(b instanceof Gs))&&e!=(-536870788)){f=Zy(a,b);if(c instanceof Dh&&!(c instanceof Ge)&&!(c instanceof C8)
&&!(c instanceof Fm)){i=c;if(!f.b_(i.S)){c=new Ws;Fw(c,i.S,i.f,i.kn);c.S.Y(c);}}if((f.jt()&65535)!=43)c.Y(f);else c.Y(f.S);break a;}}if(c===null)return null;c.Y(b);}if((c.jt()&65535)!=43)return c;return c.S;}
function MZ(a,b,c){var d,e,f,g,h;d=a.l;e=d.br;if(c!==null&&!(c instanceof Cf)){switch(e){case -2147483606:Bp(d);d=new Xw;Dy(d,c,b,e);Pk();c.Y(BbP);return d;case -2147483605:Bp(d);d=new ZX;Dy(d,c,b,(-2147483606));Pk();c.Y(BbP);return d;case -2147483585:Bp(d);d=new Rv;Dy(d,c,b,(-536870849));Pk();c.Y(BbP);return d;case -2147483525:f=new P2;d=GK(d);g=a.gf+1|0;a.gf=g;Nj(f,d,c,b,(-536870849),g);Pk();c.Y(BbP);return f;case -1073741782:case -1073741781:Bp(d);d=new SX;Dy(d,c,b,e);c.Y(d);return d;case -1073741761:Bp(d);d
=new AAD;Dy(d,c,b,(-536870849));c.Y(b);return d;case -1073741701:h=new U2;d=GK(d);e=a.gf+1|0;a.gf=e;Nj(h,d,c,b,(-536870849),e);c.Y(h);return h;case -536870870:case -536870869:Bp(d);if(c.jt()!=(-2147483602)){d=new C8;Dy(d,c,b,e);}else if(Cn(a,32)){d=new SY;Dy(d,c,b,e);}else{d=new Y9;f=ZI(a.eq);Dy(d,c,b,e);d.nE=f;}c.Y(d);return d;case -536870849:Bp(d);d=new G6;Dy(d,c,b,(-536870849));c.Y(b);return d;case -536870789:h=new GL;d=GK(d);e=a.gf+1|0;a.gf=e;Nj(h,d,c,b,(-536870849),e);c.Y(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bp(d);d=new AF4;Fw(d,f,b,e);f.f=d;return d;case -2147483585:Bp(d);c=new Wm;Fw(c,f,b,(-2147483585));return c;case -2147483525:c=new Zx;Tl(c,GK(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bp(d);d=new AAC;Fw(d,f,b,e);f.f=d;return d;case -1073741761:Bp(d);c=new ADc;Fw(c,f,b,(-1073741761));return c;case -1073741701:c=new SN;Tl(c,GK(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bp(d);d=A8u(f,b,e);f.f=d;return d;case -536870849:Bp(d);c
=new Fm;Fw(c,f,b,(-536870849));return c;case -536870789:return A9d(GK(d),f,b,(-536870789));default:}return c;}
function AFA(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Gs;while(true){a:{e=a.l;f=e.br;if((f&(-2147418113))==(-2147483608)){Bp(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.eq=g;else{if(f!=(-1073741784))g=a.eq;c=W9(a,f,g,b);e=a.l;if(e.br!=(-536870871))N(Co(C(21),e.b0,e.dU));Bp(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bp(e);c
=A5B(0);break a;case -2147483577:Bp(e);c=new Y6;B8(c);break a;case -2147483558:Bp(e);c=new WS;h=a.bJ+1|0;a.bJ=h;AMY(c,h);break a;case -2147483550:Bp(e);c=A5B(1);break a;case -2147483526:Bp(e);c=new AET;B8(c);break a;case -536870876:Bp(e);a.bJ=a.bJ+1|0;if(Cn(a,8)){if(Cn(a,1)){c=A79(a.bJ);break a;}c=A7P(a.bJ);break a;}if(Cn(a,1)){c=A8j(a.bJ);break a;}c=A8D(a.bJ);break a;case -536870866:Bp(e);if(Cn(a,32)){c=A8K();break a;}c=A8A(ZI(a.eq));break a;case -536870821:Bp(e);i=0;c=a.l;if(c.br==(-536870818)){i=1;Bp(c);}c
=L4(a,HY(a,i));c.Y(b);e=a.l;if(e.br!=(-536870819))N(Co(C(21),e.b0,e.dU));Zm(e,1);Bp(a.l);break a;case -536870818:Bp(e);a.bJ=a.bJ+1|0;if(!Cn(a,8)){c=new LU;B8(c);break a;}c=new Ye;e=ZI(a.eq);B8(c);c.AG=e;break a;case 0:j=e.fY;if(j!==null)c=L4(a,j);else{if(DK(e)){c=Iv(b);break a;}c=AGY(f&65535);}Bp(a.l);break a;default:break b;}Bp(e);c=new LU;B8(c);break a;}h=(f&2147483647)-48|0;if(a.ip<h)N(Co(C(21),Gi(e),QK(a.l)));Bp(e);a.bJ=a.bJ+1|0;c=!Cn(a,2)?A8Z(h,a.bJ):Cn(a,64)?A7$(h,a.bJ):A99(h,a.bJ);a.nr.data[h].pB=1;a.rM
=1;break a;}if(f>=0&&!HB(e)){c=W1(a,f);Bp(a.l);}else if(f==(-536870788))c=Iv(b);else{if(f!=(-536870871)){b=new KR;c=!HB(a.l)?WO(f&65535):a.l.fY.M();e=a.l;Ns(b,c,e.b0,e.dU);N(b);}if(d){b=new KR;e=a.l;Ns(b,C(21),e.b0,e.dU);N(b);}c=Iv(b);}}}if(f!=(-16777176))break;}return c;}
function HY(a,b){var c,d,e,f,g,h,i,j,$$je;c=A5Z(Cn(a,2),Cn(a,64));E4(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DK(a.l))break a;h=a.l;b=h.br;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CM(c,d);d=Bp(a.l);h=a.l;if(h.br!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bp(h);e=1;d=(-1);break d;}Bp(h);if(g){c=HY(a,0);break d;}if(a.l.br==(-536870819))break d;WE(c,HY(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bp(h);h=a.l;i=h.br;if(HB(h))break c;if
(i<0){j=a.l.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(N8(i))break e;i=i&65535;break e;}catch($$e){$$je=Fc($$e);if($$je instanceof EM){break b;}else{throw $$e;}}}try{Cd(c,d,i);}catch($$e){$$je=Fc($$e);if($$je instanceof EM){break b;}else{throw $$e;}}Bp(a.l);d=(-1);break d;}}if(d>=0)CM(c,d);d=45;Bp(a.l);break d;case -536870821:if(d>=0){CM(c,d);d=(-1);}Bp(a.l);j=0;h=a.l;if(h.br==(-536870818)){Bp(h);j=1;}if(!e)AJ4(c,HY(a,j));else WE(c,HY(a,j));e=0;Bp(a.l);break d;case -536870819:if(d>=0)CM(c,
d);d=93;Bp(a.l);break d;case -536870818:if(d>=0)CM(c,d);d=94;Bp(a.l);break d;case 0:if(d>=0)CM(c,d);h=a.l.fY;if(h===null)d=0;else{ANy(c,h);d=(-1);}Bp(a.l);break d;default:}if(d>=0)CM(c,d);d=Bp(a.l);}g=0;}N(Co(C(21),NU(a),a.l.dU));}N(Co(C(21),NU(a),a.l.dU));}if(!f){if(d>=0)CM(c,d);return c;}N(Co(C(21),NU(a),a.l.dU-1|0));}
function W1(a,b){var c,d,e;c=MY(b);if(Cn(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AZA(b&65535);}if(Cn(a,64)&&b>128){if(c){d=new XF;Ec(d);d.bS=2;d.n1=Ht(Hr(b));return d;}if(Rb(b))return ATZ(b&65535);if(!TI(b))return A4j(b&65535);return A1H(b&65535);}}if(!c){if(Rb(b))return ATZ(b&65535);if(!TI(b))return AGY(b&65535);return A1H(b&65535);}d=new Et;Ec(d);d.bS=2;d.hx=b;e=(GP(b)).data;d.kB=e[0];d.j0=e[1];return d;}
function L4(a,b){var c,d,e;if(!ALY(b)){if(!b.W){if(b.iR())return ARq(b);return AV_(b);}if(!b.iR())return A10(b);c=new Nk;ADu(c,b);return c;}c=AGp(b);d=new PN;B8(d);d.nI=c;d.x1=c.bo;if(!b.W){if(b.iR())return AIo(ARq(J9(b)),d);return AIo(AV_(J9(b)),d);}if(!b.iR())return AIo(A10(J9(b)),d);c=new Se;e=new Nk;ADu(e,J9(b));AJG(c,e,d);return c;}
function J_(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cn(a,b){return (a.eq&b)!=b?0:1;}
function ABK(){B.call(this);this.y5=null;}
function AXq(a,b){L5(a.y5,b);}
var K3=G(DV);
var Ki=G(Bt);
var OW=G(Bt);
function ZG(){B.call(this);this.Ax=null;}
function A3H(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.Ax;d=CL(c[0]);e=(CL(c[1])).data[0];if(!ADa(b.h)){c=b.h;if(c.cJ==e){e=b.ra;f=MN(d);Fb(c.ee);Fb(c.d6);NW(c);while(f.fE>=f.i0.data.length?0:1){if(Bc(f)==(-1))continue;g=W8(c,Bc(f));h=O3(Cg(c,g.bv),g.bA);if(Bc(f)==(-1)){if(!e)continue;h.b8=0;h.bK=h.bK|4;continue;}i=W8(c,Bc(f));j=Bc(f);k=Bc(f);D6(c.ee,g,i);l=c.d6;m=BO();if(CC(l,i)===null)D6(l,i,m);BA(CC(c.d6,i),g);h.b8=j;h.bK=k;}Jx(b);if(b.FX){n=Kn(EN(),b.Cs);if(A7Y(n,Bq(100))){b=Fh(b);c=new J;L(c);H(Ic(H(H(c,
b),C(486)),n),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function AJS(){B.call(this);this.TA=null;}
function R6(){var a=this;B.call(a);a.zx=null;a.kN=null;}
function WM(){B.call(this);this.ty=null;}
function A1D(a,b){var c,d;c=a.ty;c.lE=b;H2(c.I,b.qR);H2(c.N,c.lE.qS);b=c.m8;d=c.lE;b.ht=d;c.f_.eQ=d;}
var AGq=G();
function AGN(b){var c,d,e,f,g,h,i,j;c=AZj();d=CN(b);Bu(c,d);e=0;f=0;while(f<d){g=Cg(b,f);h=J1(g);Bu(c,h);i=0;while(i<h){j=Ku(g,i);Hs(c,e,MO(j));e=e+MO(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RY(c);}
function AGw(b){var c,d,e,f,g,h,i,j,k;c=Bc(b);d=P(Ij,c);e=d.data;f=0;while(f<c){a:{g=Bc(b);if(g!=(-1)){h=Bc(b);i=Bc(b);if(i==(-1))e[g]=AZ4(h);else{j=new Ij;j.gG=h;j.oj=BP(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].oj.data[k]=Bc(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AKq(b,c,d,e){var f,g,h,i;f=Fr(b);g=Fr(c);h=AGN(b);i=AGN(c);b=new ADT;b.Aw=d;CG(e,b,C(487),I(B,[f,h,g,i]));}
function AB2(){var a=this;B.call(a);a.rs=null;a.rt=null;}
function AYL(a){var b,c;b=a.rs;c=a.rt;Cx(b.ck.G,c);ACH(b);}
function AD0(){var a=this;B.call(a);a.G1=null;a.la=null;}
function AQw(a,b){var c;c=a.la;b=b;a.la=Zs(!c.o2&&!b.fc?0:1);return 1;}
function Ro(){EH.call(this);this.jS=null;}
function TC(a){var b;b=new ACb;Os(b,a.jS);return b;}
function UY(){EH.call(this);this.Aq=null;}
function NG(a){var b;b=new UQ;Os(b,a.Aq);return b;}
function Rq(){FS.call(this);this.xr=null;}
function Xx(){B.call(this);this.xb=null;}
function A0y(a,b){b=b;P8(a.xb,b);}
function Vk(){B.call(this);this.vS=null;}
function A2m(a,b){b=b;HF(a.vS,b);}
function MX(){var a=this;K$.call(a);a.lv=null;a.xV=0;}
function AY$(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AL5(a,b))return 0;c=b;return BR(a.lv,c.lv);}return 0;}
function Ua(){var a=this;B.call(a);a.tj=null;a.tk=0;a.te=0;a.tg=null;a.th=0;a.ti=0;}
function AW3(a,b){var c,d,e,f,g,h,i,j;c=a.tj;d=a.tk;e=a.te;f=a.tg;g=a.th;h=a.ti;i=Cw(c.bi,5.0);d=Be((c.bi.bX.a-d|0)-i|0,Bd((i-d|0)-c.V.j.a|0,b.k.a));j=Be((c.bi.bX.b-e|0)-i|0,Bd((i-e|0)-c.V.j.b|0,b.k.b));Y(f,d+g|0,j+h|0);EJ(c,f,c.ba.j);}
function AHd(){var a=this;F6.call(a);a.SK=null;a.Ue=0;a.LO=0;a.J5=0;}
function ADT(){B.call(this);this.Aw=null;}
function A2e(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Aw;d=CL(c[0]);c=MN(d);e=new Vp;d=AGw(c);f=AGw(c);g=Bc(c);h=P(JN,g);i=h.data;j=0;while(j<g){i[j]=Ef(Bc(c),Bc(c),Bc(c),Bc(c),Bc(c));j=j+1|0;}AHZ(e,d,f,h);b.g(e);}
function NM(){var a=this;EB.call(a);a.ea=null;a.g0=null;a.x0=null;a.n_=null;a.A4=null;}
function BbQ(a,b,c){var d=new NM();UO(d,a,b,c);return d;}
function UO(a,b,c,d){var e;KK(a,b,c,d);b=new V6;c=a.K;QR(b,c.G);d=I8(c);b.iU=d;b.df=G3(d);c=G3(b.iU);b.de=c;OY(b.e4,b.df,c);e=new PH;e.u1=b;c=b.df;c.iV=e;b.de.iV=e;Jv(c,0);Jv(b.de,0);c=b.df;c.cc=1;b.u0=AJk(c,b.de);Nc(b,I(CH,[b.df,b.de,b.e4]));a.ea=b;AAl(b,a.gP);b=Lb(a,a.ea,30.0);a.g0=b;c=new Xp;c.v3=a;b.i5=c;c=new Xo;c.vr=a;b.i1=c;DX(a.K,b);b=a.ea;b.df.lX=a;b.de.lX=a;Cx(a.K.G,a);}
function Zt(a,b){var c;c=a.ea;return c.df!==b&&c.de!==b&&a!==b?0:1;}
function A42(a,b){Ev(a.g0,b.cd);AAl(a.ea,b);}
function NH(a,b,c){var d,e;d=!c?a.ea.de:a.ea.df;e=new S2;e.AT=a;e.AS=b;e.AR=c;F_(d,b,e);}
function A57(a){if(Zt(a,a.K.G.cf))Cx(a.K.G,null);a.g0=null;a.ea=null;}
function AYW(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ea;d=c.df;c=c.de;e=B3(d,b);f=B3(c,b);if(!e&&!f)return CQ(I(By,[NF(a,1,C(278)),NF(a,0,C(279))]));g=!e?C(279):C(278);if(e)c=d;d=NF(a,e,g);h=a.ea;i=h.iU;j=a.hF;k=new Rp;g=h.df;h=h.de;l=i.ck.G;k.mw=g;k.mv=h;k.zk=l;g=a.K;BG(g);h=new QJ;h.q_=g;return NQ(JM(i,c,j,a,k,h),b,d);}
function NF(a,b,c){var d,e;d=new By;e=new ST;e.AE=a;e.Ap=b;Ce(d,e,c);return d;}
function ZY(a,b){var c,d,e;c=a.K;d=c.G.b9;e=new SR;e.xh=a;e.xg=b;F4(d,NT(c,e));}
function A58(a,b){var c,d;if(!AD_(b)){if(b.bc!=27)return 0;if(!AAv(b))AFR(a.K);else Nz(a.g0);return 1;}c=a.K.G.cf;b=a.ea;d=b.df;if(!(d!==c&&b.de!==c))ZY(a,d!==c?0:1);return 1;}
var Xy=G();
function A5u(a){return Oz();}
var Q_=G();
function AQ9(a){return Oz();}
var XR=G();
function APJ(a){return Oz();}
function P7(){B.call(this);this.xu=null;}
function A7d(a,b){var c,d,e,f,g;c=a.xu;d=Bk();e=BT(b);f=new J;L(f);H(H(f,C(488)),e);Bf(d,K(f));d=c.r.b9;e=new RR;g=P(B,1);g.data[0]=b;CG(d,e,C(332),g);}
function Vr(){B.call(this);this.A6=null;}
function A0K(a,b){var c,d,e,f,g;c=a.A6;d=Bk();e=BT(b);f=new J;L(f);H(H(f,C(489)),e);Bf(d,K(f));e=c.r.b9;d=new AB8;d.A2=c;g=P(B,1);g.data[0]=b;CG(e,d,C(490),g);}
function Qk(){B.call(this);this.EP=null;}
function ATh(a,b){var c,d,e;c=Bk();d=BT(b);e=new J;L(e);H(H(e,C(491)),d);Bf(c,K(e));d=new AFW;d.Di=b;c=D4();BG(c);e=new AFV;e.s3=c;WQ(b,d,e);}
function ZZ(){B.call(this);this.yB=null;}
function AV8(a,b){var c,d,e,f;c=a.yB;d=Bk();e=BT(b);f=new J;L(f);H(H(f,C(492)),e);Bf(d,K(f));d=new ADA;e=new Tp;e.y4=c;d.ks=IR();c=BO();d.eC=c;d.jI=1;d.jr=0;d.sz=e;BA(c,Jk(b));BA(d.eC,b);e=Bk();c=BT(d.ks);f=new J;L(f);H(H(f,C(493)),c);Bf(e,K(f));H_(b,d);}
function XS(){var a=this;B.call(a);a.eg=null;a.AB=null;a.z3=null;}
function PO(a){var b,c,d,e,f,g,h,i;a:{b=Bc(a.eg);switch(b){case 3:break;case 5:c=QD(a);d=OQ(a);b=Bc(a.eg);e=Bc(a.eg);f=Bc(a.eg);g=BO();h=0;while(h<f){BA(g,OQ(a));h=h+1|0;}i=new MX;AIB(i,c,d,b);i.lv=g;i.xV=e;break a;default:c=new CV;d=new J;L(d);V(H(d,C(494)),b);Bn(c,K(d));N(c);}i=A8x(QD(a),OQ(a),Bc(a.eg));}return i;}
function QD(a){var b,c;b=Bc(a.eg);c=Bc(a.eg);return A03(ET(a.AB,b,c),Bc(a.eg));}
function OQ(a){var b;b=Bc(a.eg);if(b==(-1))return null;return BI(a.z3,b);}
function SI(){var a=this;B.call(a);a.eU=null;a.Cj=null;a.Cz=null;}
function HS(a){var b,c,d,e,f;a:{b:{b=Bc(a.eU);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Yj(a);d=RS(a);b=Bc(a.eU);e=TF(a);f=new KQ;OC(f,c,d,2);f.rj=b;f.iG=e;break a;case 4:c=HS(a);d=HS(a);f=new JX;OC(f,c.eZ,c.gl,9);f.iv=c;f.h3=d;break a;case 5:f=A7X(Yj(a),RS(a),Bc(a.eU));break a;case 9:c=TF(a);f=new H$;d=!EU(c)&&BI(c,0)!==null?(BI(c,0)).gl:null;OC(f,null,null,7);f.fW=BO();c=B9(c);while(Cb(c)){e=Cc(c);if(!(e instanceof H$))BA(f.fW,e);else{e=e;GW(f.fW,e.fW);}}f.gl=d;break a;default:break b;}f
=null;break a;}c=new CV;d=new J;L(d);V(H(d,C(495)),b);Bn(c,K(d));N(c);}return f;}
function Yj(a){var b,c;b=Bc(a.eU);c=Bc(a.eU);return A03(ET(a.Cj,b,c),Bc(a.eU));}
function RS(a){var b;b=Bc(a.eU);if(b==(-1))return null;return BI(a.Cz,b);}
function TF(a){var b,c,d;b=Bc(a.eU);c=BO();d=0;while(d<b){BA(c,HS(a));d=d+1|0;}return c;}
function BW(){var a=this;B.call(a);a.f=null;a.cS=0;a.pK=null;a.kn=0;}
var A$K=0;function B8(a){var b;b=A$K;A$K=b+1|0;a.pK=Iu(b);}
function Om(a,b){var c;c=A$K;A$K=c+1|0;a.pK=Iu(c);a.f=b;}
function Jc(a,b,c,d){var e;e=d.B;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jl(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZN(a,b){a.kn=b;}
function AZk(a){return a.kn;}
function AH7(a){var b,c,d;b=a.pK;c=a.u();d=new J;L(d);Br(d,60);b=H(d,b);Br(b,58);Br(H(b,c),62);return K(d);}
function AVe(a){return AH7(a);}
function AVF(a){return a.f;}
function AWo(a,b){a.f=b;}
function A5R(a,b){return 1;}
function A6J(a){return null;}
function K9(a){var b;a.cS=1;b=a.f;if(b!==null){if(!b.cS){b=b.g$();if(b!==null){a.f.cS=1;a.f=b;}a.f.fh();}else if(b instanceof Ik&&b.fl.pB)a.f=b.f;}}
function AJO(){A$K=1;}
function U3(){var a=this;B.call(a);a.t$=null;a.t7=null;a.t6=null;a.t9=0;a.t8=0;a.ub=0;a.ua=0;a.ud=0;a.uc=0;a.t_=0;a.s4=0;}
function A62(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.t$;d=a.t7;e=a.t6;f=a.t9;g=a.t8;h=a.ub;i=a.ua;j=a.ud;k=a.uc;l=a.t_;m=a.s4;n=Cw(c.bi,5.0);o=c.ba.il();Ct(d,c.ba.j);Ct(e,c.ba.i);switch(f){case -1:f=Be(h+(b.k.a-g|0)|0,c.bi.bX.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.k.a|0)-g|0,Bd(o.a,n-c.V.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.k.b-k|0)|0,(c.bi.bX.b+c.V.j.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.k.b|0)-k|0,o.b);}EJ(c,e,d);}
function Wa(){var a=this;B.call(a);a.yY=null;a.yX=0.0;}
function N$(a,b){return L3(a.yY,b,a.yX*2.0+0.875);}
function V6(){var a=this;IN.call(a);a.iU=null;a.df=null;a.de=null;a.u0=null;a.nl=null;a.kl=0;}
function AAl(a,b){Gb(a.iU,b);a.e4.iO=b;E_(a.df,b);E_(a.de,b);}
function Xp(){B.call(this);this.v3=null;}
function A1I(a){var b;b=a.v3;Cx(b.K.G,b.A4);}
function Xo(){B.call(this);this.vr=null;}
function ASP(a){var b,c;b=a.vr;c=b.K.G.cf;if(!Zt(b,c))c=null;b.A4=c;}
function SH(){var a=this;B.call(a);a.zg=null;a.ze=null;a.zf=null;}
function A0Z(a){AHi(a.zg,a.ze,a.zf);}
var Y7=G();
function ATw(a,b){AML(b);}
function ACt(){var a=this;B.call(a);a.Dl=null;a.Dm=null;}
function AOM(a){var b,c;b=a.Dl;c=a.Dm;GH(b.D.bL,ES(c));}
function X4(){B.call(this);this.rR=null;}
function A2l(a,b){b=b;Py(a.rR,b);}
function Xk(){B.call(this);this.yy=null;}
function A7C(a,b){b=b;HF(a.yy,b);}
function C7(){var a=this;BW.call(a);a.pB=0;a.eL=0;}
var BbP=null;function Pk(){Pk=Bm(C7);A0A();}
function A9N(a){var b=new C7();GO(b,a);return b;}
function GO(a,b){Pk();B8(a);a.eL=b;}
function AOL(a,b,c,d){var e,f;e=JI(d,a.eL);NE(d,a.eL,b);f=a.f.c(b,c,d);if(f<0)NE(d,a.eL,e);return f;}
function A2z(a){return a.eL;}
function ARv(a){return C(496);}
function AO2(a,b){return 0;}
function A0A(){var b;b=new Y3;B8(b);BbP=b;}
function Hw(){var a=this;B.call(a);a.bm=null;a.hI=0;a.fQ=0;a.wF=0;a.nF=0;a.br=0;a.n=0;a.A3=0;a.fY=null;a.fN=null;a.A=0;a.kz=0;a.dU=0;a.j9=0;a.b0=null;}
var BbR=null;var BbN=null;var BbO=0;function Zm(a,b){if(b>0&&b<3)a.fQ=b;if(b==1){a.n=a.br;a.fN=a.fY;a.A=a.j9;a.j9=a.dU;Gc(a);}}
function HB(a){return a.fY===null?0:1;}
function Lv(a){return a.fN===null?0:1;}
function Bp(a){Gc(a);return a.nF;}
function GK(a){var b;b=a.fY;Gc(a);return b;}
function Gc(a){var b,c,d,e,f,g,h,$$je;a.nF=a.br;a.br=a.n;a.fY=a.fN;a.dU=a.j9;a.j9=a.A;while(true){b=0;c=a.A>=a.bm.data.length?0:MC(a);a.n=c;a.fN=null;if(a.fQ==4){if(c!=92)return;c=a.A;d=a.bm.data;c=c>=d.length?0:d[B_(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.A=a.kz;return;}a.fQ=a.wF;a.n=a.A>(a.bm.data.length-2|0)?0:MC(a);}a:{c=a.n;if(c!=92){e=a.fQ;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.bm.data[a.A]!=63){a.n=(-2147483608);break a;}B_(a);c=a.bm.data[a.A];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B_(a);break b;default:N(Co(C(21),Gi(a),a.A));}a.n=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bm.data[a.A];e=1;break b;case 61:a.n=(-536870872);B_(a);break b;case 62:a.n=(-33554392);B_(a);break b;default:f=ANv(a);a.n=f;if(f<256){a.hI=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.hI=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B_(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.A;d=a.bm.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B_(a);break a;case 63:a.n=c|(-1073741824);B_(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);Zm(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.fN=AJj(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.A>=(a.bm.data.length-2|0)?(-1):MC(a);c:{a.n=c;switch(c){case -1:N(Co(C(21),Gi(a),a.A));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AIg(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fQ!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Co(C(21),Gi(a),a.A));case 68:case 83:case 87:case 100:case 115:case 119:a.fN=Th(ET(a.bm,
a.kz,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.wF=a.fQ;a.fQ=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.A;d=a.bm.data;if(c>=(d.length-2|0))N(Co(C(21),Gi(a),a.A));a.n=d[B_(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=Z1(a,4);break a;case 120:a.n=Z1(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AL6(a);h=0;if(a.n==80)h=1;try{a.fN=Th(g,h);}catch($$e){$$je=Fc($$e);if($$je instanceof Nn){N(Co(C(21),Gi(a),a.A));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AL6(a){var b,c,d,e,f,g;b=new J;Gd(b,10);c=a.A;d=a.bm;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=ET(d,B_(a),1);f=new J;L(f);H(H(f,C(497)),b);return K(f);}B_(a);c=0;a:{while(true){g=a.A;d=a.bm.data;if(g>=(d.length-2|0))break;c=d[B_(a)];if(c==125)break a;Br(b,c);}}if(c!=125)N(Co(C(21),a.b0,a.A));}if(!b.J)N(Co(C(21),a.b0,a.A));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(497)),f);return K(b);}b:{c:{if(M(f)>3){if(Ob(f,C(497)))break c;if(Ob(f,C(498)))break c;}break b;}f=DC(f,2);}return f;}
function AJj(a,b){var c,d,e,f,g,$$je;c=new J;Gd(c,4);d=(-1);e=2147483647;a:{while(true){f=a.A;g=a.bm.data;if(f>=g.length)break a;b=g[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ln(Er(c),10);AJp(c,0,AKw(c));continue;}catch($$e){$$je=Fc($$e);if($$je instanceof Dz){break;}else{throw $$e;}}Br(c,b&65535);}N(Co(C(21),a.b0,a.A));}if(b!=125)N(Co(C(21),a.b0,a.A));if(c.J>0)b:{try{e=Ln(Er(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Fc($$e);if($$je instanceof Dz){}else{throw $$e;}}N(Co(C(21),a.b0,a.A));}else if
(d<0)N(Co(C(21),a.b0,a.A));if((d|e|(e-d|0))<0)N(Co(C(21),a.b0,a.A));b=a.A;g=a.bm.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B_(a);break c;case 63:a.n=(-1073741701);B_(a);break c;default:}a.n=(-536870789);}c=new XX;c.gd=d;c.gc=e;return c;}
function Gi(a){return a.b0;}
function DK(a){return !a.br&&!a.n&&a.A==a.A3&&!HB(a)?1:0;}
function N8(b){return b<0?0:1;}
function FC(a){return !DK(a)&&!HB(a)&&N8(a.br)?1:0;}
function Y2(a){var b;b=a.br;return b<=56319&&b>=55296?1:0;}
function ADZ(a){var b;b=a.br;return b<=57343&&b>=56320?1:0;}
function TI(b){return b<=56319&&b>=55296?1:0;}
function Rb(b){return b<=57343&&b>=56320?1:0;}
function Z1(a,b){var c,d,e,f,$$je;c=new J;Gd(c,b);d=a.bm.data.length-2|0;e=0;while(true){f=BQ(e,b);if(f>=0)break;if(a.A>=d)break;Br(c,a.bm.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=Ln(Er(c),16);}catch($$e){$$je=Fc($$e);if($$je instanceof Dz){break a;}else{throw $$e;}}return b;}N(Co(C(21),a.b0,a.A));}
function AIg(a){var b,c,d,e,f,g;b=3;c=1;d=a.bm.data;e=d.length-2|0;f=ADG(d[a.A],8);switch(f){case -1:break;default:if(f>3)b=2;B_(a);a:{while(true){if(c>=b)break a;g=a.A;if(g>=e)break a;g=ADG(a.bm.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B_(a);c=c+1|0;}}return f;}N(Co(C(21),a.b0,a.A));}
function ANv(a){var b,c,d,e;b=1;c=a.hI;a:while(true){d=a.A;e=a.bm.data;if(d>=e.length)N(Co(C(21),a.b0,d));b:{c:{switch(e[d]){case 41:B_(a);return c|256;case 45:if(!b)N(Co(C(21),a.b0,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c,d,e,f;b=a.A;a.kz=b;if(!(a.hI&4))a.A=b+1|0;else{c=a.bm.data.length-2|0;a.A=b+1|0;a:while(true){d=a.A;if(d<c&&SJ(a.bm.data[d])){a.A=a.A+1|0;continue;}d=a.A;if(d>=c)break;e=a.bm.data;if(e[d]!=35)break;a.A=d+1|0;while(true){f=a.A;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.A=f+1|0;}}}return a.kz;}
function AM6(b){return BbR.JM(b);}
function MC(a){var b,c,d,e;b=a.bm.data[B_(a)];if(C1(b)){c=a.kz+1|0;d=a.bm.data;if(c<d.length){e=d[c];if(Do(e)){B_(a);return E5(b,e);}}}return b;}
function QK(a){return a.dU;}
function KR(){var a=this;BU.call(a);a.ER=null;a.EA=null;a.tP=0;}
function Co(a,b,c){var d=new KR();Ns(d,a,b,c);return d;}
function Ns(a,b,c,d){X(a);a.tP=(-1);a.ER=b;a.EA=c;a.tP=d;}
function PH(){B.call(this);this.u1=null;}
function A5_(a,b){var c,d,e;c=a.u1;d=c.df;if(d===b)c.kl=c.kl|1;e=c.de;if(e===b)c.kl=c.kl|2;if((c.kl&3)==3){b=d.d.h;d=e.d.h;e=new Y5;e.xI=c;AKq(b,d,e,c.iU.ck.G.b9);}}
var S5=G(C7);
function AYt(a,b,c,d){var e;e=a.eL;B2(d,e,b-DL(d,e)|0);return a.f.c(b,c,d);}
function AZT(a){return C(499);}
function A4L(a,b){return 0;}
var AFO=G(C7);
function AZK(a,b,c,d){return b;}
function A1S(a){return C(500);}
var RO=G(C7);
function AO7(a,b,c,d){if(DL(d,a.eL)!=b)b=(-1);return b;}
function A5L(a){return C(501);}
function TV(){C7.call(this);this.yj=0;}
function AYw(a,b,c,d){var e;e=a.eL;B2(d,e,b-DL(d,e)|0);a.yj=b;return b;}
function AVH(a){return C(502);}
function A3J(a,b){return 0;}
var Gs=G(C7);
function AWC(a,b,c,d){if(d.mH!=1&&b!=d.B)return (-1);d.k3=1;NE(d,0,b);return b;}
function AZu(a){return C(503);}
function Cf(){BW.call(this);this.bS=0;}
function Ec(a){B8(a);a.bS=1;}
function A7i(a,b,c,d){var e;if((b+a.cm()|0)>d.B){d.eb=1;return (-1);}e=a.bI(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A5r(a){return a.bS;}
function AR1(a,b){return 1;}
var AI6=G(Cf);
function Iv(a){var b=new AI6();A2I(b,a);return b;}
function A2I(a,b){Om(a,b);a.bS=1;a.kn=1;a.bS=0;}
function A43(a,b,c){return 0;}
function A0D(a,b,c,d){var e,f,g;e=d.B;f=d.dx;while(true){g=BQ(b,e);if(g>0)return (-1);if(g<0&&Do(Q(c,b))&&b>f&&C1(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AZH(a,b,c,d,e){var f,g;f=e.B;g=e.dx;while(true){if(c<b)return (-1);if(c<f&&Do(Q(d,c))&&c>g&&C1(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ARw(a){return C(504);}
function AYv(a,b){return 0;}
function B$(){var a=this;BW.call(a);a.bU=null;a.fl=null;a.bd=0;}
function A8f(a,b){var c=new B$();Gt(c,a,b);return c;}
function Gt(a,b,c){B8(a);a.bU=b;a.fl=c;a.bd=c.eL;}
function ARd(a,b,c,d){var e,f,g,h;if(a.bU===null)return (-1);e=GY(d,a.bd);Eb(d,a.bd,b);f=a.bU.q;g=0;while(true){if(g>=f){Eb(d,a.bd,e);return (-1);}h=(BI(a.bU,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AUm(a,b){a.fl.f=b;}
function AR$(a){return C(505);}
function A2i(a,b){var c;a:{c=a.bU;if(c!==null){c=B9(c);while(true){if(!Cb(c))break a;if(!(Cc(c)).b_(b))continue;else return 1;}}}return 0;}
function AUR(a,b){return JI(b,a.bd)>=0&&GY(b,a.bd)==JI(b,a.bd)?0:1;}
function APs(a){var b,c,d,e;a.cS=1;b=a.fl;if(b!==null&&!b.cS)K9(b);a:{b=a.bU;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BI(a.bU,d);e=b.g$();if(e===null)e=b;else{b.cS=1;E2(a.bU,d);ALB(a.bU,d,e);}if(!e.cS)e.fh();d=d+1|0;}}}if(a.f!==null)K9(a);}
var K2=G(B$);
function AT_(a,b,c,d){var e,f,g,h;e=DL(d,a.bd);B2(d,a.bd,b);f=a.bU.q;g=0;while(true){if(g>=f){B2(d,a.bd,e);return (-1);}h=(BI(a.bU,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ASR(a){return C(506);}
function A4o(a,b){return !DL(b,a.bd)?0:1;}
var En=G(K2);
function AZ6(a,b,c,d){var e,f,g;e=DL(d,a.bd);B2(d,a.bd,b);f=a.bU.q;g=0;while(g<f){if((BI(a.bU,g)).c(b,c,d)>=0)return a.f.c(a.fl.yj,c,d);g=g+1|0;}B2(d,a.bd,e);return (-1);}
function A4g(a,b){a.f=b;}
function AOh(a){return C(506);}
var XK=G(En);
function AUk(a,b,c,d){var e,f;e=a.bU.q;f=0;while(f<e){if((BI(a.bU,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AWt(a,b){return 0;}
function A6E(a){return C(507);}
var AEw=G(En);
function AOZ(a,b,c,d){var e,f;e=a.bU.q;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bU,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A5v(a,b){return 0;}
function AQ$(a){return C(508);}
var AA7=G(En);
function APq(a,b,c,d){var e,f,g,h;e=a.bU.q;f=d.k6?0:d.dx;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.bd,b);h=0;while(true){if(h>=e)break a;if((BI(a.bU,h)).cY(f,b,c,d)>=0){B2(d,a.bd,(-1));return g;}h=h+1|0;}}}return (-1);}
function A7y(a,b){return 0;}
function AT0(a){return C(509);}
var Ul=G(En);
function AX9(a,b,c,d){var e,f;e=a.bU.q;B2(d,a.bd,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bU,f)).cY(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A4B(a,b){return 0;}
function AO9(a){return C(510);}
function Ik(){B$.call(this);this.dK=null;}
function A9F(a,b){var c=new Ik();AGW(c,a,b);return c;}
function AGW(a,b,c){B8(a);a.dK=b;a.fl=c;a.bd=c.eL;}
function AN_(a,b,c,d){var e,f;e=GY(d,a.bd);Eb(d,a.bd,b);f=a.dK.c(b,c,d);if(f>=0)return f;Eb(d,a.bd,e);return (-1);}
function ASW(a,b,c,d){var e;e=a.dK.cK(b,c,d);if(e>=0)Eb(d,a.bd,e);return e;}
function A4N(a,b,c,d,e){var f;f=a.dK.cY(b,c,d,e);if(f>=0)Eb(e,a.bd,f);return f;}
function A2g(a,b){return a.dK.b_(b);}
function A3F(a){var b;b=new PY;AGW(b,a.dK,a.fl);a.f=b;return b;}
function AW7(a){var b;a.cS=1;b=a.fl;if(b!==null&&!b.cS)K9(b);b=a.dK;if(b!==null&&!b.cS){b=b.g$();if(b!==null){a.dK.cS=1;a.dK=b;}a.dK.fh();}}
var Hy=G();
function Ba(){var a=this;Hy.call(a);a.bo=0;a.cR=0;a.T=null;a.mO=null;a.ni=null;a.W=0;}
var BbS=null;function Q6(){Q6=Bm(Ba);APN();}
function BB(a){var b;Q6();b=new AFa;b.H=BP(64);a.T=b;}
function AY6(a){return null;}
function AYI(a){return a.T;}
function ALY(a){var b,c,d,e,f;if(!a.cR)b=IO(a.T,0)>=2048?0:1;else{a:{c=a.T;b=0;d=c.bC;if(b<d){e=c.H.data;f=(e[0]^(-1))>>>0|0;if(f)b=JB(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+JB(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A1f(a){return a.W;}
function A5m(a){return a;}
function AGp(a){var b,c;if(a.ni===null){b=a.gk();c=new Wr;c.GD=a;c.yv=b;BB(c);a.ni=c;E4(c,a.cR);}return a.ni;}
function J9(a){var b,c;if(a.mO===null){b=a.gk();c=new Wo;c.EU=a;c.Ce=b;c.wM=a;BB(c);a.mO=c;E4(c,a.bo);a.mO.W=a.W;}return a.mO;}
function A6D(a){return 0;}
function E4(a,b){var c;c=a.bo;if(c^b){a.bo=c?0:1;a.cR=a.cR?0:1;}if(!a.W)a.W=1;return a;}
function AQI(a){return a.bo;}
function N6(b,c){Q6();return b.p(c);}
function KA(b,c){var d,e;Q6();if(b.ej()!==null&&c.ej()!==null){b=b.ej();c=c.ej();d=Be(b.H.data.length,c.H.data.length);e=0;a:{while(e<d){if(b.H.data[e]&c.H.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Th(b,c){var d,e,f;Q6();d=0;while(true){AVi();e=BbT.data;if(d>=e.length){f=new Nn;Bn(f,C(21));f.Fn=C(21);f.GI=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AMF(e[1],c);}
function APN(){var b;b=new HK;AVi();BbS=b;}
function AGP(){var a=this;Ba.call(a);a.qj=0;a.rB=0;a.iq=0;a.n0=0;a.eW=0;a.g7=0;a.Q=null;a.bO=null;}
function DM(){var a=new AGP();AXD(a);return a;}
function A5Z(a,b){var c=new AGP();APB(c,a,b);return c;}
function AXD(a){BB(a);a.Q=A7B();}
function APB(a,b,c){BB(a);a.Q=A7B();a.qj=b;a.rB=c;}
function CM(a,b){a:{if(a.qj){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eW){Po(a.Q,J_(b&65535));break a;}Mt(a.Q,J_(b&65535));break a;}if(a.rB&&b>128){a.iq=1;b=Ht(Hr(b));}}}if(!(!TI(b)&&!Rb(b))){if(a.n0)Po(a.T,b-55296|0);else Mt(a.T,b-55296|0);}if(a.eW)Po(a.Q,b);else Mt(a.Q,b);if(!a.W&&MY(b))a.W=1;return a;}
function ANy(a,b){var c,d,e;if(!a.W&&b.W)a.W=1;if(a.n0){if(!b.cR)GF(a.T,b.gk());else Dv(a.T,b.gk());}else if(!b.cR)G4(a.T,b.gk());else{GU(a.T,b.gk());Dv(a.T,b.gk());a.cR=a.cR?0:1;a.n0=1;}if(!a.g7&&b.ej()!==null){if(a.eW){if(!b.bo)GF(a.Q,b.ej());else Dv(a.Q,b.ej());}else if(!b.bo)G4(a.Q,b.ej());else{GU(a.Q,b.ej());Dv(a.Q,b.ej());a.bo=a.bo?0:1;a.eW=1;}}else{c=a.bo;d=a.bO;if(d!==null){if(!c){e=new Zg;e.FK=a;e.CX=c;e.wA=d;e.ws=b;BB(e);a.bO=e;}else{e=new Zh;e.GX=a;e.un=c;e.Ai=d;e.zU=b;BB(e);a.bO=e;}}else{if(c&&!a.eW
&&Pe(a.Q)){d=new Zd;d.Ga=a;d.An=b;BB(d);a.bO=d;}else if(!c){d=new Zb;d.pU=a;d.ph=c;d.y2=b;BB(d);a.bO=d;}else{d=new Zc;d.ou=a;d.na=c;d.ww=b;BB(d);a.bO=d;}a.g7=1;}}return a;}
function Cd(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;X(d);N(d);}a:{b:{if(!a.qj){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CM(a,b);b=b+1|0;}}if(!a.eW)Jp(a.Q,b,c+1|0);else{d=a.Q;c=c+1|0;if(b>c){d=new BJ;X(d);N(d);}e=d.bC;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.H.data;h[g]=h[g]&(Kv(d,b)|Jh(d,f));}else{h=d.H.data;h[g]=h[g]&Kv(d,b);e=g+1|0;while(e<c){d.H.data[e]=0;e=e+1|0;}if(f&31){h=d.H.data;h[c]=h[c]&Jh(d,f);}}HL(d);}}}}return a;}
function AJ4(a,b){var c,d,e;if(!a.W&&b.W)a.W=1;if(b.iq)a.iq=1;c=a.cR;if(!(c^b.cR)){if(!c)G4(a.T,b.T);else Dv(a.T,b.T);}else if(c)GF(a.T,b.T);else{GU(a.T,b.T);Dv(a.T,b.T);a.cR=1;}if(!a.g7&&C_(b)!==null){c=a.bo;if(!(c^b.bo)){if(!c)G4(a.Q,C_(b));else Dv(a.Q,C_(b));}else if(c)GF(a.Q,C_(b));else{GU(a.Q,C_(b));Dv(a.Q,C_(b));a.bo=1;}}else{c=a.bo;d=a.bO;if(d!==null){if(!c){e=new QY;e.DK=a;e.vU=c;e.Co=d;e.wT=b;BB(e);a.bO=e;}else{e=new Rg;e.D0=a;e.CM=c;e.rg=d;e.rD=b;BB(e);a.bO=e;}}else{if(!a.eW&&Pe(a.Q)){if(!c){d=new Ze;d.GZ
=a;d.tf=b;BB(d);a.bO=d;}else{d=new Zf;d.FN=a;d.CD=b;BB(d);a.bO=d;}}else if(!c){d=new Zi;d.vX=a;d.uC=b;d.Al=c;BB(d);a.bO=d;}else{d=new Zj;d.uZ=a;d.u9=b;d.Br=c;BB(d);a.bO=d;}a.g7=1;}}}
function WE(a,b){var c,d,e;if(!a.W&&b.W)a.W=1;if(b.iq)a.iq=1;c=a.cR;if(!(c^b.cR)){if(!c)Dv(a.T,b.T);else G4(a.T,b.T);}else if(!c)GF(a.T,b.T);else{GU(a.T,b.T);Dv(a.T,b.T);a.cR=0;}if(!a.g7&&C_(b)!==null){c=a.bo;if(!(c^b.bo)){if(!c)Dv(a.Q,C_(b));else G4(a.Q,C_(b));}else if(!c)GF(a.Q,C_(b));else{GU(a.Q,C_(b));Dv(a.Q,C_(b));a.bo=0;}}else{c=a.bo;d=a.bO;if(d!==null){if(!c){e=new Q0;e.FJ=a;e.BZ=c;e.yu=d;e.ul=b;BB(e);a.bO=e;}else{e=new Q1;e.FO=a;e.BE=c;e.x2=d;e.BV=b;BB(e);a.bO=e;}}else{if(!a.eW&&Pe(a.Q)){if(!c){d=new QW;d.D3
=a;d.zt=b;BB(d);a.bO=d;}else{d=new QX;d.GV=a;d.s2=b;BB(d);a.bO=d;}}else if(!c){d=new Q2;d.Dx=a;d.CV=b;d.u3=c;BB(d);a.bO=d;}else{d=new QV;d.u2=a;d.BJ=b;d.AA=c;BB(d);a.bO=d;}a.g7=1;}}}
function Df(a,b){var c;c=a.bO;if(c!==null)return a.bo^c.p(b);return a.bo^D8(a.Q,b);}
function C_(a){if(!a.g7)return a.Q;return null;}
function A0z(a){return a.T;}
function AWe(a){var b,c;if(a.bO!==null)return a;b=C_(a);c=new QZ;c.Fy=a;c.l0=b;BB(c);return E4(c,a.bo);}
function A2X(a){var b,c,d;b=new J;L(b);c=IO(a.Q,0);while(c>=0){KB(b,GP(c));Br(b,124);c=IO(a.Q,c+1|0);}d=b.J;if(d>0)We(b,d-1|0);return K(b);}
function AQL(a){return a.iq;}
function Nn(){var a=this;Bt.call(a);a.Fn=null;a.GI=null;}
function Ez(){BW.call(this);this.S=null;}
function Dy(a,b,c,d){Om(a,c);a.S=b;a.kn=d;}
function A7o(a){return a.S;}
function AVs(a,b){return !a.S.b_(b)&&!a.f.b_(b)?0:1;}
function A50(a,b){return 1;}
function ATf(a){var b;a.cS=1;b=a.f;if(b!==null&&!b.cS){b=b.g$();if(b!==null){a.f.cS=1;a.f=b;}a.f.fh();}b=a.S;if(b!==null){if(!b.cS){b=b.g$();if(b!==null){a.S.cS=1;a.S=b;}a.S.fh();}else if(b instanceof Ik&&b.fl.pB)a.S=b.f;}}
function Dh(){Ez.call(this);this.bk=null;}
function A8u(a,b,c){var d=new Dh();Fw(d,a,b,c);return d;}
function Fw(a,b,c,d){Dy(a,b,c,d);a.bk=b;}
function AX$(a,b,c,d){var e,f;e=0;a:{while((b+a.bk.cm()|0)<=d.B){f=a.bk.bI(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bk.cm()|0;e=e+(-1)|0;}return f;}
function AZC(a){return C(511);}
function Ge(){Dh.call(this);this.jq=null;}
function A9d(a,b,c,d){var e=new Ge();Tl(e,a,b,c,d);return e;}
function Tl(a,b,c,d,e){Fw(a,c,d,e);a.jq=b;}
function AYS(a,b,c,d){var e,f,g,h,i;e=a.jq;f=e.gd;g=e.gc;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bk.cm()|0)>d.B)break a;i=a.bk.bI(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bk.cm()|0;h=h+(-1)|0;}return i;}if((b+a.bk.cm()|0)>d.B){d.eb=1;return (-1);}i=a.bk.bI(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AY8(a){return ACM(a.jq);}
var C8=G(Ez);
function AYm(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.S.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A1z(a){return C(512);}
var Fm=G(Dh);
function A2v(a,b,c,d){var e;e=a.S.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AXO(a,b){a.f=b;a.S.Y(b);}
var Ws=G(Dh);
function A7c(a,b,c,d){while((b+a.bk.cm()|0)<=d.B&&a.bk.bI(b,c)>0){b=b+a.bk.cm()|0;}return a.f.c(b,c,d);}
function ATH(a,b,c,d){var e,f,g;e=a.f.cK(b,c,d);if(e<0)return (-1);f=e-a.bk.cm()|0;while(f>=b&&a.bk.bI(f,c)>0){g=f-a.bk.cm()|0;e=f;f=g;}return e;}
function Bg(){var a=this;B.call(a);a.ow=null;a.nJ=null;}
function AMF(a,b){if(!b&&a.ow===null)a.ow=a.L();else if(b&&a.nJ===null)a.nJ=E4(a.L(),1);if(b)return a.nJ;return a.ow;}
var Dz=G(BU);
function XX(){var a=this;Hy.call(a);a.gd=0;a.gc=0;}
function ACM(a){var b,c,d,e,f;b=a.gd;c=a.gc;d=c!=2147483647?Iu(c):C(21);e=new J;L(e);Br(e,123);f=V(e,b);Br(f,44);Br(H(f,d),125);return K(e);}
var Y3=G(BW);
function ASj(a,b,c,d){return b;}
function A3z(a){return C(513);}
function A3D(a,b){return 0;}
function AFa(){var a=this;B.call(a);a.H=null;a.bC=0;}
function A7B(){var a=new AFa();AZv(a);return a;}
function AZv(a){a.H=BP(0);}
function Mt(a,b){var c,d;c=b/32|0;if(b>=a.bC){KC(a,c+1|0);a.bC=b+1|0;}d=a.H.data;d[c]=d[c]|1<<(b%32|0);}
function Jp(a,b,c){var d,e,f,g,h;d=BQ(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bC){KC(a,f+1|0);a.bC=c;}if(d==f){g=a.H.data;g[d]=g[d]|Jh(a,b)&Kv(a,c);}else{g=a.H.data;g[d]=g[d]|Jh(a,b);h=d+1|0;while(h<f){a.H.data[h]=(-1);h=h+1|0;}if(c&31){g=a.H.data;g[f]=g[f]|Kv(a,c);}}}
function Jh(a,b){return (-1)<<(b%32|0);}
function Kv(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Po(a,b){var c,d,e,f;c=b/32|0;d=a.H.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bC-1|0))HL(a);}}
function D8(a,b){var c,d;c=b/32|0;d=a.H.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function IO(a,b){var c,d,e,f;c=a.bC;if(b>=c)return (-1);d=b/32|0;e=a.H.data;f=e[d]>>>(b%32|0)|0;if(f)return JB(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+JB(e[f])|0;f=f+1|0;}return (-1);}
function KC(a,b){var c;c=a.H.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.H=JU(a.H,c);}
function HL(a){var b,c,d;b=(a.bC+31|0)/32|0;a.bC=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=YH(a.H.data[c]);if(d<32)break;c=c+(-1)|0;a.bC=a.bC-32|0;}a.bC=a.bC-d|0;}}
function Dv(a,b){var c,d,e,f;c=Be(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&b.H.data[d];d=d+1|0;}while(true){f=a.H.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bC=Be(a.bC,b.bC);HL(a);}
function GF(a,b){var c,d,e;c=Be(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]&(b.H.data[d]^(-1));d=d+1|0;}HL(a);}
function G4(a,b){var c,d,e;c=Bd(a.bC,b.bC);a.bC=c;KC(a,(c+31|0)/32|0);c=Be(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]|b.H.data[d];d=d+1|0;}}
function GU(a,b){var c,d,e;c=Bd(a.bC,b.bC);a.bC=c;KC(a,(c+31|0)/32|0);c=Be(a.H.data.length,b.H.data.length);d=0;while(d<c){e=a.H.data;e[d]=e[d]^b.H.data[d];d=d+1|0;}HL(a);}
function Pe(a){return a.bC?0:1;}
function PN(){var a=this;B$.call(a);a.nI=null;a.x1=0;}
function A3L(a){var b,c,d;b=!a.x1?C(65):C(514);c=a.nI.M();d=new J;L(d);H(H(H(d,C(515)),b),c);return K(d);}
function Se(){var a=this;B$.call(a);a.lq=null;a.mE=null;}
function AIo(a,b){var c=new Se();AJG(c,a,b);return c;}
function AJG(a,b,c){B8(a);a.lq=b;a.mE=c;}
function AOI(a,b,c,d){var e,f,g,h,i;e=a.lq.c(b,c,d);if(e<0)a:{f=a.mE;g=d.dx;e=d.B;h=b+1|0;e=BQ(h,e);if(e>0){d.eb=1;e=(-1);}else{i=Q(c,b);if(!f.nI.p(i))e=(-1);else{if(C1(i)){if(e<0&&Do(Q(c,h))){e=(-1);break a;}}else if(Do(i)&&b>g&&C1(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A3u(a,b){a.f=b;a.mE.f=b;a.lq.Y(b);}
function A3W(a){var b,c,d;b=a.lq;c=a.mE;d=new J;L(d);H(H(H(H(d,C(516)),b),C(517)),c);return K(d);}
function APb(a,b){return 1;}
function AO1(a,b){return 1;}
function Eg(){var a=this;B$.call(a);a.dO=null;a.n8=0;}
function A10(a){var b=new Eg();ADu(b,a);return b;}
function ADu(a,b){B8(a);a.dO=b.mz();a.n8=b.bo;}
function A0s(a,b,c,d){var e,f,g,h;e=d.B;if(b<e){f=b+1|0;g=Q(c,b);if(a.p(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(J2(g,f)&&a.p(E5(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A6y(a){var b,c,d;b=!a.n8?C(65):C(514);c=a.dO.M();d=new J;L(d);H(H(H(d,C(515)),b),c);return K(d);}
function AQY(a,b){return a.dO.p(b);}
function AOD(a,b){if(b instanceof Et)return N6(a.dO,b.hx);if(b instanceof E0)return N6(a.dO,b.dM);if(b instanceof Eg)return KA(a.dO,b.dO);if(!(b instanceof EV))return 1;return KA(a.dO,b.f8);}
function ASc(a){return a.dO;}
function A5f(a,b){a.f=b;}
function AQB(a,b){return 1;}
var Nk=G(Eg);
function AR2(a,b){return a.dO.p(Ht(Hr(b)));}
function AXa(a){var b,c,d;b=!a.n8?C(65):C(514);c=a.dO.M();d=new J;L(d);H(H(H(d,C(518)),b),c);return K(d);}
function AGJ(){var a=this;Cf.call(a);a.p1=null;a.tw=0;}
function ARq(a){var b=new AGJ();ATS(b,a);return b;}
function ATS(a,b){Ec(a);a.p1=b.mz();a.tw=b.bo;}
function A13(a,b,c){return !a.p1.p(F3(FF(Q(c,b))))?(-1):1;}
function AZa(a){var b,c,d;b=!a.tw?C(65):C(514);c=a.p1.M();d=new J;L(d);H(H(H(d,C(518)),b),c);return K(d);}
function EV(){var a=this;Cf.call(a);a.f8=null;a.vb=0;}
function AV_(a){var b=new EV();AUE(b,a);return b;}
function AUE(a,b){Ec(a);a.f8=b.mz();a.vb=b.bo;}
function XA(a,b,c){return !a.f8.p(Q(c,b))?(-1):1;}
function ASn(a){var b,c,d;b=!a.vb?C(65):C(514);c=a.f8.M();d=new J;L(d);H(H(H(d,C(515)),b),c);return K(d);}
function AUo(a,b){if(b instanceof E0)return N6(a.f8,b.dM);if(b instanceof EV)return KA(a.f8,b.f8);if(!(b instanceof Eg)){if(!(b instanceof Et))return 1;return 0;}return KA(a.f8,b.dO);}
function Zl(){var a=this;B$.call(a);a.jH=null;a.qH=null;a.ll=0;}
function A5N(a,b){var c=new Zl();AYn(c,a,b);return c;}
function AYn(a,b,c){B8(a);a.jH=b;a.ll=c;}
function AS3(a,b){a.f=b;}
function LM(a){if(a.qH===null)a.qH=GG(a.jH);return a.qH;}
function AVm(a){var b,c;b=LM(a);c=new J;L(c);H(H(c,C(519)),b);return K(c);}
function ANR(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.B;f=BP(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?D_([k,l]):D_([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ll;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jH.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ll==3){k=f[0];m=a.jH.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ll==2){b=f[0];m=a.jH.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AZd(a,b){return b instanceof Zl&&!Bj(LM(b),LM(a))?0:1;}
function AWj(a,b){return 1;}
function E0(){Cf.call(this);this.dM=0;}
function AGY(a){var b=new E0();AUI(b,a);return b;}
function AUI(a,b){Ec(a);a.dM=b;}
function A1T(a){return 1;}
function ARn(a,b,c){return a.dM!=Q(c,b)?(-1):1;}
function AQn(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.B;while(true){if(b>=e)return (-1);f=Ky(c,a.dM,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ASe(a,b,c,d,e){var f;if(!(d instanceof BC))return Jl(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HV(d,a.dM,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AWv(a){var b,c;b=a.dM;c=new J;L(c);Br(c,b);return K(c);}
function AWa(a,b){if(b instanceof E0)return b.dM!=a.dM?0:1;if(!(b instanceof EV)){if(b instanceof Eg)return b.p(a.dM);if(!(b instanceof Et))return 1;return 0;}return XA(b,0,WO(a.dM))<=0?0:1;}
function AJs(){Cf.call(this);this.pf=0;}
function A4j(a){var b=new AJs();A2S(b,a);return b;}
function A2S(a,b){Ec(a);a.pf=F3(FF(b));}
function AXY(a,b,c){return a.pf!=F3(FF(Q(c,b)))?(-1):1;}
function A3t(a){var b,c;b=a.pf;c=new J;L(c);Br(H(c,C(520)),b);return K(c);}
function AF7(){var a=this;Cf.call(a);a.oY=0;a.ys=0;}
function AZA(a){var b=new AF7();AVf(b,a);return b;}
function AVf(a,b){Ec(a);a.oY=b;a.ys=J_(b);}
function AN3(a,b,c){return a.oY!=Q(c,b)&&a.ys!=Q(c,b)?(-1):1;}
function ARB(a){var b,c;b=a.oY;c=new J;L(c);Br(H(c,C(521)),b);return K(c);}
function Gh(){var a=this;B$.call(a);a.kg=0;a.nB=null;a.m9=null;a.m3=0;}
function A$a(a,b){var c=new Gh();QA(c,a,b);return c;}
function QA(a,b,c){B8(a);a.kg=1;a.m9=b;a.m3=c;}
function A6M(a,b){a.f=b;}
function AT$(a,b,c,d){var e,f,g,h,i,j,k,l;e=BP(4);f=d.B;if(b>=f)return (-1);g=LW(a,b,c,f);h=b+a.kg|0;i=AM6(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Db(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LW(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AM6(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.kg|0;if(h>=f){b=k;break a;}g=LW(a,h,c,f);b=k;}}}if(b!=a.m3)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.m9.data[g])break;g=g+1|0;}return (-1);}
function MT(a){var b,c;if(a.nB===null){b=new J;L(b);c=0;while(c<a.m3){KB(b,GP(a.m9.data[c]));c=c+1|0;}a.nB=K(b);}return a.nB;}
function A3k(a){var b,c;b=MT(a);c=new J;L(c);H(H(c,C(522)),b);return K(c);}
function LW(a,b,c,d){var e,f,g;a.kg=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(J2(e,f)){g=B6(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&C1(g[0])&&Do(g[1])?E5(g[0],g[1]):g[0];a.kg=2;}}return e;}
function ASk(a,b){return b instanceof Gh&&!Bj(MT(b),MT(a))?0:1;}
function A4i(a,b){return 1;}
var WW=G(Gh);
var AC3=G(Gh);
var Xw=G(C8);
function AZP(a,b,c,d){var e;while(true){e=a.S.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var ZX=G(C8);
function A2P(a,b,c,d){var e;e=a.S.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.S.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var G6=G(C8);
function A5b(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.S.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A6c(a,b){a.f=b;a.S.Y(b);}
var Rv=G(G6);
function ASa(a,b,c,d){var e;e=a.S.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A27(a,b){a.f=b;}
function GL(){var a=this;C8.call(a);a.gF=null;a.ec=0;}
function BbU(a,b,c,d,e){var f=new GL();Nj(f,a,b,c,d,e);return f;}
function Nj(a,b,c,d,e,f){Dy(a,c,d,e);a.gF=b;a.ec=f;}
function A7v(a,b,c,d){var e,f;e=XV(d,a.ec);if(!a.S.P(d))return a.f.c(b,c,d);if(e>=a.gF.gc)return a.f.c(b,c,d);f=a.ec;e=e+1|0;E$(d,f,e);f=a.S.c(b,c,d);if(f>=0){E$(d,a.ec,0);return f;}f=a.ec;e=e+(-1)|0;E$(d,f,e);if(e>=a.gF.gd)return a.f.c(b,c,d);E$(d,a.ec,0);return (-1);}
function AWI(a){return ACM(a.gF);}
var P2=G(GL);
function ARH(a,b,c,d){var e,f,g;e=0;f=a.gF.gc;a:{while(true){g=a.S.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gF.gd)return (-1);return a.f.c(b,c,d);}
var SX=G(C8);
function AXb(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.S.c(b,c,d);}
var AAD=G(G6);
function APc(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.S.c(b,c,d);return e;}
var U2=G(GL);
function AYB(a,b,c,d){var e,f,g;e=XV(d,a.ec);if(!a.S.P(d))return a.f.c(b,c,d);f=a.gF;if(e>=f.gc){E$(d,a.ec,0);return a.f.c(b,c,d);}if(e<f.gd){E$(d,a.ec,e+1|0);g=a.S.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){E$(d,a.ec,0);return g;}E$(d,a.ec,e+1|0);g=a.S.c(b,c,d);}return g;}
var SY=G(Ez);
function A7k(a,b,c,d){var e;e=d.B;if(e>b)return a.f.cY(b,e,c,d);return a.f.c(b,c,d);}
function AVT(a,b,c,d){var e;e=d.B;if(a.f.cY(b,e,c,d)>=0)return b;return (-1);}
function A32(a){return C(523);}
function Y9(){Ez.call(this);this.nE=null;}
function AUp(a,b,c,d){var e,f;e=d.B;f=ADL(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cY(b,e,c,d);return a.f.c(b,c,d);}
function ANS(a,b,c,d){var e,f,g,h;e=d.B;f=a.f.cK(b,c,d);if(f<0)return (-1);g=ADL(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.f.cY(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.nE.jk(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ADL(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nE.jk(Q(d,b)))break;b=b+1|0;}return b;}
function A4H(a){return C(524);}
var FR=G();
var BbV=null;var BbW=null;function ZI(b){var c;if(!(b&1)){c=BbW;if(c!==null)return c;c=new AD6;BbW=c;return c;}c=BbV;if(c!==null)return c;c=new AD5;BbV=c;return c;}
var AF4=G(Dh);
function AOs(a,b,c,d){var e;a:{while(true){if((b+a.bk.cm()|0)>d.B)break a;e=a.bk.bI(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var Wm=G(Fm);
function ATv(a,b,c,d){var e;if((b+a.bk.cm()|0)<=d.B){e=a.bk.bI(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var Zx=G(Ge);
function A4Q(a,b,c,d){var e,f,g,h,i;e=a.jq;f=e.gd;g=e.gc;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bk.cm()|0)>d.B)break a;i=a.bk.bI(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bk.cm()|0)>d.B){d.eb=1;return (-1);}i=a.bk.bI(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var AAC=G(Dh);
function AUl(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bk.cm()|0)<=d.B){e=a.bk.bI(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ADc=G(Fm);
function AOB(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.S.c(b,c,d);}
var SN=G(Ge);
function A45(a,b,c,d){var e,f,g,h,i,j;e=a.jq;f=e.gd;g=e.gc;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bk.cm()|0)<=d.B){i=a.bk.bI(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bk.cm()|0)>d.B){d.eb=1;return (-1);}j=a.bk.bI(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LU=G(BW);
function A2h(a,b,c,d){if(b&&!(d.g8&&b==d.dx))return (-1);return a.f.c(b,c,d);}
function A1J(a,b){return 0;}
function ATx(a){return C(525);}
function AG4(){BW.call(this);this.wC=0;}
function A5B(a){var b=new AG4();AR5(b,a);return b;}
function AR5(a,b){B8(a);a.wC=b;}
function AY4(a,b,c,d){var e,f,g;e=b<d.B?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.k6?0:d.dx;return (e!=32&&!AAG(a,e,b,g,c)?0:1)^(f!=32&&!AAG(a,f,b-1|0,g,c)?0:1)^a.wC?(-1):a.f.c(b,c,d);}
function AZb(a,b){return 0;}
function A7t(a){return C(526);}
function AAG(a,b,c,d,e){var f;if(!Lm(b)&&b!=95){a:{if(CK(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(Lm(f))return 0;if(CK(f)!=6)return 1;}}return 1;}return 0;}
var Y6=G(BW);
function AR4(a,b,c,d){if(b!=d.js)return (-1);return a.f.c(b,c,d);}
function AXE(a,b){return 0;}
function AYU(a){return C(527);}
function WS(){BW.call(this);this.hK=0;}
function A8D(a){var b=new WS();AMY(b,a);return b;}
function AMY(a,b){B8(a);a.hK=b;}
function A35(a,b,c,d){var e,f,g;e=!d.g8?M(c):d.B;if(b>=e){B2(d,a.hK,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hK,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hK,0);return a.f.c(b,c,d);}
function AZI(a,b){var c;c=!DL(b,a.hK)?0:1;B2(b,a.hK,(-1));return c;}
function A2w(a){return C(528);}
var AET=G(BW);
function A3r(a,b,c,d){if(b<(d.k6?M(c):d.B))return (-1);d.eb=1;d.Gw=1;return a.f.c(b,c,d);}
function AXX(a,b){return 0;}
function ARc(a){return C(529);}
function Ye(){BW.call(this);this.AG=null;}
function AZE(a,b,c,d){a:{if(b!=d.B){if(!b)break a;if(d.g8&&b==d.dx)break a;if(a.AG.BH(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function AQ6(a,b){return 0;}
function AYO(a){return C(530);}
var AJe=G(B$);
function A8K(){var a=new AJe();A3f(a);return a;}
function A3f(a){B8(a);}
function AXe(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;if(f>e){d.eb=1;return (-1);}g=Q(c,b);if(C1(g)){h=b+2|0;if(h<=e&&J2(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function AP3(a){return C(531);}
function AZf(a,b){a.f=b;}
function A3c(a){return (-2147483602);}
function AZe(a,b){return 1;}
function AGO(){B$.call(this);this.n5=null;}
function A8A(a){var b=new AGO();APu(b,a);return b;}
function APu(a,b){B8(a);a.n5=b;}
function A3l(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;if(f>e){d.eb=1;return (-1);}g=Q(c,b);if(C1(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(J2(g,h))return a.n5.jk(E5(g,h))?(-1):a.f.c(b,c,d);}}return a.n5.jk(g)?(-1):a.f.c(f,c,d);}
function AZO(a){return C(66);}
function A4G(a,b){a.f=b;}
function ANE(a){return (-2147483602);}
function AXt(a,b){return 1;}
function AM4(){BW.call(this);this.ka=0;}
function A8j(a){var b=new AM4();A0W(b,a);return b;}
function A0W(a,b){B8(a);a.ka=b;}
function ASm(a,b,c,d){var e;e=!d.g8?M(c):d.B;if(b>=e){B2(d,a.ka,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.ka,1);return a.f.c(b+1|0,c,d);}return (-1);}
function A0V(a,b){var c;c=!DL(b,a.ka)?0:1;B2(b,a.ka,(-1));return c;}
function ASG(a){return C(528);}
function AL1(){BW.call(this);this.ja=0;}
function A79(a){var b=new AL1();A1g(b,a);return b;}
function A1g(a,b){B8(a);a.ja=b;}
function AT3(a,b,c,d){if((!d.g8?M(c)-b|0:d.B-b|0)<=0){B2(d,a.ja,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.ja,1);return a.f.c(b+1|0,c,d);}
function A0O(a,b){var c;c=!DL(b,a.ja)?0:1;B2(b,a.ja,(-1));return c;}
function AOf(a){return C(532);}
function AJ3(){BW.call(this);this.hk=0;}
function A7P(a){var b=new AJ3();A7x(b,a);return b;}
function A7x(a,b){B8(a);a.hk=b;}
function A1E(a,b,c,d){var e,f,g;e=!d.g8?M(c)-b|0:d.B-b|0;if(!e){B2(d,a.hk,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.hk,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.hk,0);return a.f.c(b,c,d);}B2(d,a.hk,0);return a.f.c(b,c,d);default:}return (-1);}
function APy(a,b){var c;c=!DL(b,a.hk)?0:1;B2(b,a.hk,(-1));return c;}
function AQ7(a){return C(533);}
function II(){var a=this;B$.call(a);a.rw=0;a.h1=0;}
function A99(a,b){var c=new II();Ra(c,a,b);return c;}
function Ra(a,b,c){B8(a);a.rw=b;a.h1=c;}
function AOv(a,b,c,d){var e,f,g,h;e=He(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=0;while(true){if(f>=M(e)){B2(d,a.h1,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&J_(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A4d(a,b){a.f=b;}
function He(a,b){var c,d;c=a.rw;d=GY(b,c);c=JI(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.n9)?Cz(b.n9,d,c):null;}
function AYu(a){var b,c;b=a.bd;c=new J;L(c);V(H(c,C(534)),b);return K(c);}
function AU9(a,b){var c;c=!DL(b,a.h1)?0:1;B2(b,a.h1,(-1));return c;}
var AM$=G(II);
function A8Z(a,b){var c=new AM$();A53(c,a,b);return c;}
function A53(a,b,c){Ra(a,b,c);}
function APD(a,b,c,d){var e,f;e=He(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=!ADt(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.h1,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AWr(a,b,c,d){var e,f;e=He(a,d);f=d.dx;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=Z0(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AOg(a,b,c,d,e){var f,g;f=He(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=RP(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A2K(a,b){return 1;}
function A6b(a){var b,c;b=a.bd;c=new J;L(c);V(H(c,C(535)),b);return K(c);}
function ALi(){II.call(this);this.DM=0;}
function A7$(a,b){var c=new ALi();AQ3(c,a,b);return c;}
function AQ3(a,b,c){Ra(a,b,c);}
function ASS(a,b,c,d){var e,f;e=He(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=0;while(true){if(f>=M(e)){B2(d,a.h1,M(e));return a.f.c(b+M(e)|0,c,d);}if(F3(FF(Q(e,f)))!=F3(FF(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AZc(a){var b,c;b=a.DM;c=new J;L(c);V(H(c,C(536)),b);return K(c);}
var QM=G(Hi);
function AQO(a,b,c,d,e){X0(a,b,c,d,e);return a;}
function AY7(a,b,c,d){AFk(a,b,c,d);return a;}
function AZt(a,b){ND(a,b);}
function A5q(a,b,c){AFD(a,b,c);return a;}
function ABl(){var a=this;Cf.call(a);a.cG=null;a.pO=null;a.of=null;}
function APW(a,b,c){return !LT(a,c,b)?(-1):a.bS;}
function AY2(a,b,c,d){var e,f,g;e=d.B;while(true){if(b>e)return (-1);f=Q(a.cG,a.bS-1|0);a:{while(true){g=a.bS;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&LT(a,c,b))break;b=b+AB3(a.pO,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bS|0,c,d)>=0)break;b=b+1|0;}return b;}
function A00(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cG,0);g=(M(d)-c|0)-a.bS|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&LT(a,d,c))break;c=c-AB3(a.of,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bS|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AUg(a){var b,c;b=a.cG;c=new J;L(c);H(H(c,C(537)),b);return K(c);}
function ARt(a,b){var c;if(b instanceof E0)return b.dM!=Q(a.cG,0)?0:1;if(b instanceof EV)return XA(b,0,Cz(a.cG,0,1))<=0?0:1;if(!(b instanceof Eg)){if(!(b instanceof Et))return 1;return M(a.cG)>1&&b.hx==E5(Q(a.cG,0),Q(a.cG,1))?1:0;}a:{b:{b=b;if(!b.p(Q(a.cG,0))){if(M(a.cG)<=1)break b;if(!b.p(E5(Q(a.cG,0),Q(a.cG,1))))break b;}c=1;break a;}c=0;}return c;}
function LT(a,b,c){var d;d=0;while(d<a.bS){if(Q(b,d+c|0)!=Q(a.cG,d))return 0;d=d+1|0;}return 1;}
function AF6(){Cf.call(this);this.kd=null;}
function A9_(a){var b=new AF6();A5H(b,a);return b;}
function A5H(a,b){var c,d,e;Ec(a);c=new J;L(c);d=0;while(true){e=BQ(d,b.J);if(e>=0){a.kd=K(c);a.bS=c.J;return;}if(d<0)break;if(e>=0)break;Br(c,F3(FF(b.E.data[d])));d=d+1|0;}b=new BJ;X(b);N(b);}
function ASX(a,b,c){var d;d=0;while(true){if(d>=M(a.kd))return M(a.kd);if(Q(a.kd,d)!=F3(FF(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function ARC(a){var b,c;b=a.kd;c=new J;L(c);H(H(c,C(538)),b);return K(c);}
function P6(){Cf.call(this);this.id=null;}
function A4R(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.id))return M(a.id);e=Q(a.id,d);f=b+d|0;if(e!=Q(c,f)&&J_(Q(a.id,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A5K(a){var b,c;b=a.id;c=new J;L(c);H(H(c,C(539)),b);return K(c);}
var HK=G();
var BbX=null;var BbY=null;var BbT=null;function AVi(){AVi=Bm(HK);AQc();}
function AQc(){BbX=A8G();BbY=A9r();BbT=I($rt_arraycls(B),[I(B,[C(540),A8N()]),I(B,[C(541),A7N()]),I(B,[C(542),A9V()]),I(B,[C(543),A90()]),I(B,[C(544),BbY]),I(B,[C(545),A9y()]),I(B,[C(546),A8c()]),I(B,[C(547),A81()]),I(B,[C(548),A8Y()]),I(B,[C(549),A7U()]),I(B,[C(550),A71()]),I(B,[C(551),A84()]),I(B,[C(552),A8t()]),I(B,[C(553),A7J()]),I(B,[C(554),A9Y()]),I(B,[C(555),A70()]),I(B,[C(556),A9w()]),I(B,[C(557),A9c()]),I(B,[C(558),A9x()]),I(B,[C(559),A7W()]),I(B,[C(560),A93()]),I(B,[C(561),A88()]),I(B,[C(562),A8l()]),
I(B,[C(563),A9T()]),I(B,[C(564),A9Q()]),I(B,[C(565),A8H()]),I(B,[C(566),A7V()]),I(B,[C(567),A9J()]),I(B,[C(568),BbX]),I(B,[C(569),A8o()]),I(B,[C(570),A83()]),I(B,[C(571),BbX]),I(B,[C(572),A7H()]),I(B,[C(573),BbY]),I(B,[C(574),A75()]),I(B,[C(575),R(0,127)]),I(B,[C(576),R(128,255)]),I(B,[C(577),R(256,383)]),I(B,[C(578),R(384,591)]),I(B,[C(579),R(592,687)]),I(B,[C(580),R(688,767)]),I(B,[C(581),R(768,879)]),I(B,[C(582),R(880,1023)]),I(B,[C(583),R(1024,1279)]),I(B,[C(584),R(1280,1327)]),I(B,[C(585),R(1328,1423)]),
I(B,[C(586),R(1424,1535)]),I(B,[C(587),R(1536,1791)]),I(B,[C(588),R(1792,1871)]),I(B,[C(589),R(1872,1919)]),I(B,[C(590),R(1920,1983)]),I(B,[C(591),R(2304,2431)]),I(B,[C(592),R(2432,2559)]),I(B,[C(593),R(2560,2687)]),I(B,[C(594),R(2688,2815)]),I(B,[C(595),R(2816,2943)]),I(B,[C(596),R(2944,3071)]),I(B,[C(597),R(3072,3199)]),I(B,[C(598),R(3200,3327)]),I(B,[C(599),R(3328,3455)]),I(B,[C(600),R(3456,3583)]),I(B,[C(601),R(3584,3711)]),I(B,[C(602),R(3712,3839)]),I(B,[C(603),R(3840,4095)]),I(B,[C(604),R(4096,4255)]),
I(B,[C(605),R(4256,4351)]),I(B,[C(606),R(4352,4607)]),I(B,[C(607),R(4608,4991)]),I(B,[C(608),R(4992,5023)]),I(B,[C(609),R(5024,5119)]),I(B,[C(610),R(5120,5759)]),I(B,[C(611),R(5760,5791)]),I(B,[C(612),R(5792,5887)]),I(B,[C(613),R(5888,5919)]),I(B,[C(614),R(5920,5951)]),I(B,[C(615),R(5952,5983)]),I(B,[C(616),R(5984,6015)]),I(B,[C(617),R(6016,6143)]),I(B,[C(618),R(6144,6319)]),I(B,[C(619),R(6400,6479)]),I(B,[C(620),R(6480,6527)]),I(B,[C(621),R(6528,6623)]),I(B,[C(622),R(6624,6655)]),I(B,[C(623),R(6656,6687)]),
I(B,[C(624),R(7424,7551)]),I(B,[C(625),R(7552,7615)]),I(B,[C(626),R(7616,7679)]),I(B,[C(627),R(7680,7935)]),I(B,[C(628),R(7936,8191)]),I(B,[C(629),R(8192,8303)]),I(B,[C(630),R(8304,8351)]),I(B,[C(631),R(8352,8399)]),I(B,[C(632),R(8400,8447)]),I(B,[C(633),R(8448,8527)]),I(B,[C(634),R(8528,8591)]),I(B,[C(635),R(8592,8703)]),I(B,[C(636),R(8704,8959)]),I(B,[C(637),R(8960,9215)]),I(B,[C(638),R(9216,9279)]),I(B,[C(639),R(9280,9311)]),I(B,[C(640),R(9312,9471)]),I(B,[C(641),R(9472,9599)]),I(B,[C(642),R(9600,9631)]),
I(B,[C(643),R(9632,9727)]),I(B,[C(644),R(9728,9983)]),I(B,[C(645),R(9984,10175)]),I(B,[C(646),R(10176,10223)]),I(B,[C(647),R(10224,10239)]),I(B,[C(648),R(10240,10495)]),I(B,[C(649),R(10496,10623)]),I(B,[C(650),R(10624,10751)]),I(B,[C(651),R(10752,11007)]),I(B,[C(652),R(11008,11263)]),I(B,[C(653),R(11264,11359)]),I(B,[C(654),R(11392,11519)]),I(B,[C(655),R(11520,11567)]),I(B,[C(656),R(11568,11647)]),I(B,[C(657),R(11648,11743)]),I(B,[C(658),R(11776,11903)]),I(B,[C(659),R(11904,12031)]),I(B,[C(660),R(12032,12255)]),
I(B,[C(661),R(12272,12287)]),I(B,[C(662),R(12288,12351)]),I(B,[C(663),R(12352,12447)]),I(B,[C(664),R(12448,12543)]),I(B,[C(665),R(12544,12591)]),I(B,[C(666),R(12592,12687)]),I(B,[C(667),R(12688,12703)]),I(B,[C(668),R(12704,12735)]),I(B,[C(669),R(12736,12783)]),I(B,[C(670),R(12784,12799)]),I(B,[C(671),R(12800,13055)]),I(B,[C(672),R(13056,13311)]),I(B,[C(673),R(13312,19893)]),I(B,[C(674),R(19904,19967)]),I(B,[C(675),R(19968,40959)]),I(B,[C(676),R(40960,42127)]),I(B,[C(677),R(42128,42191)]),I(B,[C(678),R(42752,
42783)]),I(B,[C(679),R(43008,43055)]),I(B,[C(680),R(44032,55203)]),I(B,[C(681),R(55296,56191)]),I(B,[C(682),R(56192,56319)]),I(B,[C(683),R(56320,57343)]),I(B,[C(684),R(57344,63743)]),I(B,[C(685),R(63744,64255)]),I(B,[C(686),R(64256,64335)]),I(B,[C(687),R(64336,65023)]),I(B,[C(688),R(65024,65039)]),I(B,[C(689),R(65040,65055)]),I(B,[C(690),R(65056,65071)]),I(B,[C(691),R(65072,65103)]),I(B,[C(692),R(65104,65135)]),I(B,[C(693),R(65136,65279)]),I(B,[C(694),R(65280,65519)]),I(B,[C(695),R(0,1114111)]),I(B,[C(696),
A85()]),I(B,[C(697),B7(0,1)]),I(B,[C(698),KS(62,1)]),I(B,[C(699),B7(1,1)]),I(B,[C(700),B7(2,1)]),I(B,[C(701),B7(3,0)]),I(B,[C(702),B7(4,0)]),I(B,[C(703),B7(5,1)]),I(B,[C(704),KS(448,1)]),I(B,[C(705),B7(6,1)]),I(B,[C(706),B7(7,0)]),I(B,[C(707),B7(8,1)]),I(B,[C(708),KS(3584,1)]),I(B,[C(709),B7(9,1)]),I(B,[C(710),B7(10,1)]),I(B,[C(711),B7(11,1)]),I(B,[C(712),KS(28672,0)]),I(B,[C(713),B7(12,0)]),I(B,[C(714),B7(13,0)]),I(B,[C(715),B7(14,0)]),I(B,[C(716),A9o(983040,1,1)]),I(B,[C(717),B7(15,0)]),I(B,[C(718),B7(16,
1)]),I(B,[C(719),B7(18,1)]),I(B,[C(720),A8i(19,0,1)]),I(B,[C(721),KS(1643118592,1)]),I(B,[C(722),B7(20,0)]),I(B,[C(723),B7(21,0)]),I(B,[C(724),B7(22,0)]),I(B,[C(725),B7(23,0)]),I(B,[C(726),B7(24,1)]),I(B,[C(727),KS(2113929216,1)]),I(B,[C(728),B7(25,1)]),I(B,[C(729),B7(26,0)]),I(B,[C(730),B7(27,0)]),I(B,[C(731),B7(28,1)]),I(B,[C(732),B7(29,0)]),I(B,[C(733),B7(30,0)])]);}
function XF(){Cf.call(this);this.n1=0;}
function AVy(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.n1!=Ht(Hr(E5(e,d)))?(-1):2;}
function A7s(a){var b,c;b=GG(GP(a.n1));c=new J;L(c);H(H(c,C(520)),b);return K(c);}
function Ov(){B$.call(this);this.gR=0;}
function ATZ(a){var b=new Ov();APf(b,a);return b;}
function APf(a,b){B8(a);a.gR=b;}
function A3A(a,b){a.f=b;}
function AZJ(a,b,c,d){var e,f;e=b+1|0;if(e>d.B){d.eb=1;return (-1);}f=Q(c,b);if(b>d.dx&&C1(Q(c,b-1|0)))return (-1);if(a.gR!=f)return (-1);return a.f.c(e,c,d);}
function ARr(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.dx;f=d.B;while(true){if(b>=f)return (-1);g=Ky(c,a.gR,b);if(g<0)return (-1);if(g>e&&C1(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AZ$(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Jl(a,b,c,d,e);f=e.dx;a:{while(true){if(c<b)return (-1);g=HV(d,a.gR,c);if(g<0)break a;if(g<b)break a;if(g>f&&C1(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AVW(a){var b,c;b=a.gR;c=new J;L(c);Br(c,b);return K(c);}
function AOd(a,b){if(b instanceof E0)return 0;if(b instanceof EV)return 0;if(b instanceof Eg)return 0;if(b instanceof Et)return 0;if(b instanceof OD)return 0;if(!(b instanceof Ov))return 1;return b.gR!=a.gR?0:1;}
function AV3(a,b){return 1;}
function OD(){B$.call(this);this.gz=0;}
function A1H(a){var b=new OD();AT1(b,a);return b;}
function AT1(a,b){B8(a);a.gz=b;}
function AZs(a,b){a.f=b;}
function ANX(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;g=BQ(f,e);if(g>0){d.eb=1;return (-1);}h=Q(c,b);if(g<0&&Do(Q(c,f)))return (-1);if(a.gz!=h)return (-1);return a.f.c(f,c,d);}
function A3P(a,b,c,d){var e,f;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.B;while(true){if(b>=e)return (-1);f=Ky(c,a.gz,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Do(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AVt(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Jl(a,b,c,d,e);f=e.B;a:{while(true){if(c<b)return (-1);g=HV(d,a.gz,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Do(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A6X(a){var b,c;b=a.gz;c=new J;L(c);Br(c,b);return K(c);}
function APX(a,b){if(b instanceof E0)return 0;if(b instanceof EV)return 0;if(b instanceof Eg)return 0;if(b instanceof Et)return 0;if(b instanceof Ov)return 0;if(!(b instanceof OD))return 1;return b.gz!=a.gz?0:1;}
function A3Y(a,b){return 1;}
function Et(){var a=this;Cf.call(a);a.kB=0;a.j0=0;a.hx=0;}
function A4q(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.kB==e&&a.j0==d?2:(-1);}
function A2Y(a,b,c,d){var e,f;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.B;while(b<e){b=Ky(c,a.kB,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.j0==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function APg(a,b,c,d,e){var f;if(!(d instanceof BC))return Jl(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HV(d,a.j0,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kB==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A6d(a){var b,c,d;b=a.kB;c=a.j0;d=new J;L(d);Br(d,b);Br(d,c);return K(d);}
function A4k(a,b){if(b instanceof Et)return b.hx!=a.hx?0:1;if(b instanceof Eg)return b.p(a.hx);if(b instanceof E0)return 0;if(!(b instanceof EV))return 1;return 0;}
var AD5=G(FR);
function APl(a,b){return b!=10?0:1;}
function AU4(a,b,c){return b!=10?0:1;}
var AD6=G(FR);
function A46(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AW1(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AID(){var a=this;B.call(a);a.o7=null;a.m_=null;a.jT=0;a.xv=0;}
function A3a(a){var b=new AID();AR3(b,a);return b;}
function AR3(a,b){var c,d;while(true){c=a.jT;if(b<c)break;a.jT=c<<1|1;}d=c<<1|1;a.jT=d;d=d+1|0;a.o7=BP(d);a.m_=BP(d);a.xv=b;}
function SO(a,b,c){var d,e,f,g;d=0;e=a.jT;f=b&e;while(true){g=a.o7.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.m_.data[f]=c;}
function AB3(a,b){var c,d,e,f;c=a.jT;d=b&c;e=0;while(true){f=a.o7.data[d];if(!f)break;if(f==b)return a.m_.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xv;}
var AGi=G();
var Ot=G(Bg);
function A8G(){var a=new Ot();ARI(a);return a;}
function ARI(a){}
function ALq(a){return CM(Cd(DM(),9,13),32);}
var NV=G(Bg);
function A9r(){var a=new NV();AVX(a);return a;}
function AVX(a){}
function ALX(a){return Cd(DM(),48,57);}
var AIy=G(Bg);
function A8N(){var a=new AIy();ARe(a);return a;}
function ARe(a){}
function A4K(a){return Cd(DM(),97,122);}
var AIS=G(Bg);
function A7N(){var a=new AIS();AR7(a);return a;}
function AR7(a){}
function AV6(a){return Cd(DM(),65,90);}
var AIU=G(Bg);
function A9V(){var a=new AIU();AOU(a);return a;}
function AOU(a){}
function AQs(a){return Cd(DM(),0,127);}
var Op=G(Bg);
function A90(){var a=new Op();APF(a);return a;}
function APF(a){}
function AGR(a){return Cd(Cd(DM(),97,122),65,90);}
var Mr=G(Op);
function A9y(){var a=new Mr();ARR(a);return a;}
function ARR(a){}
function AHj(a){return Cd(AGR(a),48,57);}
var AJU=G(Bg);
function A8c(){var a=new AJU();A2Q(a);return a;}
function A2Q(a){}
function A1h(a){return Cd(Cd(Cd(DM(),33,64),91,96),123,126);}
var Pr=G(Mr);
function A81(){var a=new Pr();AUQ(a);return a;}
function AUQ(a){}
function AJ1(a){return Cd(Cd(Cd(AHj(a),33,64),91,96),123,126);}
var ALD=G(Pr);
function A8Y(){var a=new ALD();AVS(a);return a;}
function AVS(a){}
function ATi(a){return CM(AJ1(a),32);}
var AHP=G(Bg);
function A7U(){var a=new AHP();A4S(a);return a;}
function A4S(a){}
function AZY(a){return CM(CM(DM(),32),9);}
var AG0=G(Bg);
function A71(){var a=new AG0();A6u(a);return a;}
function A6u(a){}
function ATd(a){return CM(Cd(DM(),0,31),127);}
var AKQ=G(Bg);
function A84(){var a=new AKQ();AO3(a);return a;}
function AO3(a){}
function AW5(a){return Cd(Cd(Cd(DM(),48,57),97,102),65,70);}
var AMR=G(Bg);
function A8t(){var a=new AMR();AYR(a);return a;}
function AYR(a){}
function A2$(a){var b;b=new ACw;b.F7=a;BB(b);b.W=1;return b;}
var AJX=G(Bg);
function A7J(){var a=new AJX();AU0(a);return a;}
function AU0(a){}
function AX2(a){var b;b=new XN;b.Gb=a;BB(b);b.W=1;return b;}
var AMx=G(Bg);
function A9Y(){var a=new AMx();AOW(a);return a;}
function AOW(a){}
function ARN(a){var b;b=new Tc;b.FW=a;BB(b);return b;}
var AIp=G(Bg);
function A70(){var a=new AIp();ATe(a);return a;}
function ATe(a){}
function AVd(a){var b;b=new Tb;b.D6=a;BB(b);return b;}
var AI7=G(Bg);
function A9w(){var a=new AI7();APC(a);return a;}
function APC(a){}
function AZW(a){var b;b=new WG;b.E8=a;BB(b);Jp(b.T,0,2048);b.W=1;return b;}
var AGu=G(Bg);
function A9c(){var a=new AGu();APj(a);return a;}
function APj(a){}
function AP8(a){var b;b=new Zv;b.Gn=a;BB(b);b.W=1;return b;}
var AJ$=G(Bg);
function A9x(){var a=new AJ$();ASV(a);return a;}
function ASV(a){}
function A6x(a){var b;b=new QI;b.Fp=a;BB(b);b.W=1;return b;}
var AMD=G(Bg);
function A7W(){var a=new AMD();ATz(a);return a;}
function ATz(a){}
function AXZ(a){var b;b=new AAR;b.Eu=a;BB(b);return b;}
var AIO=G(Bg);
function A93(){var a=new AIO();A1s(a);return a;}
function A1s(a){}
function ASo(a){var b;b=new XJ;b.DB=a;BB(b);b.W=1;return b;}
var AK$=G(Bg);
function A88(){var a=new AK$();AOj(a);return a;}
function AOj(a){}
function AQe(a){var b;b=new XL;b.EK=a;BB(b);b.W=1;return b;}
var AHR=G(Bg);
function A8l(){var a=new AHR();APp(a);return a;}
function APp(a){}
function A02(a){var b;b=new Qo;b.E5=a;BB(b);b.W=1;return b;}
var AJD=G(Bg);
function A9T(){var a=new AJD();ASt(a);return a;}
function ASt(a){}
function A2b(a){var b;b=new ZK;b.GL=a;BB(b);b.W=1;return b;}
var AMI=G(Bg);
function A9Q(){var a=new AMI();A24(a);return a;}
function A24(a){}
function AWk(a){var b;b=new ZP;b.Ec=a;BB(b);return b;}
var AHu=G(Bg);
function A8H(){var a=new AHu();APk(a);return a;}
function APk(a){}
function AUJ(a){var b;b=new ACX;b.Gp=a;BB(b);return b;}
var AHa=G(Bg);
function A7V(){var a=new AHa();A4w(a);return a;}
function A4w(a){}
function ATL(a){var b;b=new ABW;b.DD=a;BB(b);b.W=1;return b;}
var AJV=G(Bg);
function A9J(){var a=new AJV();A1n(a);return a;}
function A1n(a){}
function A4D(a){var b;b=new PR;b.G0=a;BB(b);b.W=1;return b;}
var Le=G(Bg);
function A8o(){var a=new Le();AQm(a);return a;}
function AQm(a){}
function AHQ(a){return CM(Cd(Cd(Cd(DM(),97,122),65,90),48,57),95);}
var AM0=G(Le);
function A83(){var a=new AM0();A1v(a);return a;}
function A1v(a){}
function ATC(a){var b;b=E4(AHQ(a),1);b.W=1;return b;}
var ALH=G(Ot);
function A7H(){var a=new ALH();AWH(a);return a;}
function AWH(a){}
function AYZ(a){var b;b=E4(ALq(a),1);b.W=1;return b;}
var AG$=G(NV);
function A75(){var a=new AG$();A12(a);return a;}
function A12(a){}
function ARl(a){var b;b=E4(ALX(a),1);b.W=1;return b;}
function AKT(){var a=this;Bg.call(a);a.tS=0;a.AD=0;}
function R(a,b){var c=new AKT();A6w(c,a,b);return c;}
function A6w(a,b,c){a.tS=b;a.AD=c;}
function ASC(a){return Cd(DM(),a.tS,a.AD);}
var AK4=G(Bg);
function A85(){var a=new AK4();AW9(a);return a;}
function AW9(a){}
function AWP(a){return Cd(Cd(DM(),65279,65279),65520,65533);}
function ALv(){var a=this;Bg.call(a);a.qJ=0;a.pe=0;a.y$=0;}
function B7(a,b){var c=new ALv();APx(c,a,b);return c;}
function A8i(a,b,c){var d=new ALv();AWY(d,a,b,c);return d;}
function APx(a,b,c){a.pe=c;a.qJ=b;}
function AWY(a,b,c,d){a.y$=d;a.pe=c;a.qJ=b;}
function A0L(a){var b;b=A8M(a.qJ);if(a.y$)Jp(b.T,0,2048);b.W=a.pe;return b;}
function ALE(){var a=this;Bg.call(a);a.oK=0;a.nb=0;a.rC=0;}
function KS(a,b){var c=new ALE();AQf(c,a,b);return c;}
function A9o(a,b,c){var d=new ALE();AX0(d,a,b,c);return d;}
function AQf(a,b,c){a.nb=c;a.oK=b;}
function AX0(a,b,c,d){a.rC=d;a.nb=c;a.oK=b;}
function ANJ(a){var b;b=new ABs;AIh(b,a.oK);if(a.rC)Jp(b.T,0,2048);b.W=a.nb;return b;}
var AKW=G();
var AGH=G();
function AHt(b){var c,d,e,f,g,h,i;c=AVq(GS(b));d=NK(c);e=BP(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+NK(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=P1(c);h=h+1|0;}return e;}
function Oc(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Yh(){var a=this;B.call(a);a.zz=0;a.uH=0;a.zI=null;}
function AQP(a,b,c){var d=new Yh();AVR(d,a,b,c);return d;}
function AVR(a,b,c,d){a.zz=b;a.uH=c;a.zI=d;}
function AII(){var a=this;B.call(a);a.yI=null;a.z$=0;}
function AVq(a){var b=new AII();AZ7(b,a);return b;}
function AZ7(a,b){a.yI=b;}
var ALg=G();
function NK(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.yI.data;f=b.z$;b.z$=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function P1(b){var c,d;c=NK(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function F0(){var a=this;B.call(a);a.kX=0;a.vg=0;a.kp=null;a.hL=null;a.zN=null;a.mF=null;}
function BbZ(a){var b=new F0();Os(b,a);return b;}
function Os(a,b){a.mF=b;a.vg=b.dl;a.kp=null;}
function FI(a){var b,c;if(a.kp!==null)return 1;while(true){b=a.kX;c=a.mF.ch.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kX=b+1|0;}return 0;}
function AKX(a){var b;if(a.vg==a.mF.dl)return;b=new IG;X(b);N(b);}
function OE(a){var b,c,d,e;AKX(a);if(!FI(a)){b=new M_;X(b);N(b);}b=a.kp;if(b!==null){c=a.hL;if(c!==null)a.zN=c;a.hL=b;a.kp=b.dj;}else{d=a.mF.ch.data;e=a.kX;a.kX=e+1|0;b=d[e];a.hL=b;a.kp=b.dj;a.zN=null;}}
var ACb=G(F0);
function Rc(a){OE(a);return a.hL.cU;}
var UQ=G(F0);
function Pi(a){OE(a);return a.hL;}
var AA6=G(F0);
function AEy(){var a=this;B.call(a);a.Ab=null;a.Ac=null;a.Aa=null;}
function ANL(a,b){var c,d,e,f,g;c=a.Ab;d=a.Ac;e=a.Aa;f=new AFG;g=ADN(D9(d));ANf(f,b,null,g);It(c,f);e.e();}
function AEx(){B.call(this);this.yJ=null;}
function AWl(a,b){Bf(a.yJ,b);}
function AGB(){var a=this;B.call(a);a.Rs=null;a.UQ=0;}
function AFy(){var a=this;B.call(a);a.zu=null;a.zv=null;}
function A4u(a,b){var c,d;c=a.zu;d=a.zv;D3(c);d.g(b);}
function ABF(){B.call(this);this.z8=null;}
function ATj(a,b){b.hX=a.z8.dF;}
function ABE(){B.call(this);this.wb=null;}
function A4b(a,b){b.hR=a.wb.dF.cB;}
function ADk(){var a=this;B.call(a);a.v8=null;a.v9=null;}
function A5y(a){var b,c;b=a.v8;c=a.v9;GH(b.D.bL,ES(c));}
function ADo(){var a=this;B.call(a);a.En=null;a.t5=null;}
function A0u(a,b){var c,d,e,f;c=b.data;b=a.t5;d=Bk();b=BT(b);e=new J;L(e);H(H(e,C(734)),b);Bf(d,K(e));b=Bk();f=c.length;d=new J;L(d);V(H(d,C(735)),f);Bf(b,K(d));}
function ADq(){B.call(this);this.GB=null;}
function A6g(a,b){$rt_globals.console.info($rt_ustr(b));}
var I1=G(0);
function Qy(){var a=this;B.call(a);a.lT=0;a.DF=null;}
function A4f(a,b){var c,d;c=BT(b);d=new J;L(d);H(H(d,C(736)),c);$rt_globals.console.info($rt_ustr(K(d)));a.lT=a.lT+1|0;H_(b,a);}
function A1q(a,b){var c;b=BT(b);c=new J;L(c);H(H(c,C(737)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AVz(a){var b;b=a.lT-1|0;a.lT=b;if(!b)Bf(Bk(),C(738));}
function R4(){var a=this;B.call(a);a.uE=null;a.uD=null;}
function A2y(a){var b,c;b=a.uE;c=ES(a.uD);CZ(b.ik,c);}
function Wr(){var a=this;Ba.call(a);a.yv=null;a.GD=null;}
function AQy(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cR^D8(a.yv,c):0;}
function Wo(){var a=this;Ba.call(a);a.Ce=null;a.wM=null;a.EU=null;}
function AYl(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cR^D8(a.Ce,c):0;return a.wM.p(b)&&!d?1:0;}
function QZ(){var a=this;Ba.call(a);a.l0=null;a.Fy=null;}
function ASu(a,b){return a.bo^D8(a.l0,b);}
function A05(a){var b,c,d;b=new J;L(b);c=IO(a.l0,0);while(c>=0){KB(b,GP(c));Br(b,124);c=IO(a.l0,c+1|0);}d=b.J;if(d>0)We(b,d-1|0);return K(b);}
function Zd(){var a=this;Ba.call(a);a.An=null;a.Ga=null;}
function A4t(a,b){return a.An.p(b);}
function Zb(){var a=this;Ba.call(a);a.ph=0;a.y2=null;a.pU=null;}
function AVx(a,b){return !(a.ph^D8(a.pU.Q,b))&&!(a.ph^a.pU.eW^a.y2.p(b))?0:1;}
function Zc(){var a=this;Ba.call(a);a.na=0;a.ww=null;a.ou=null;}
function A2s(a,b){return !(a.na^D8(a.ou.Q,b))&&!(a.na^a.ou.eW^a.ww.p(b))?1:0;}
function Zg(){var a=this;Ba.call(a);a.CX=0;a.wA=null;a.ws=null;a.FK=null;}
function A0g(a,b){return a.CX^(!a.wA.p(b)&&!a.ws.p(b)?0:1);}
function Zh(){var a=this;Ba.call(a);a.un=0;a.Ai=null;a.zU=null;a.GX=null;}
function ANF(a,b){return a.un^(!a.Ai.p(b)&&!a.zU.p(b)?0:1)?0:1;}
function Ze(){var a=this;Ba.call(a);a.tf=null;a.GZ=null;}
function ARf(a,b){return Df(a.tf,b);}
function Zf(){var a=this;Ba.call(a);a.CD=null;a.FN=null;}
function AS2(a,b){return Df(a.CD,b)?0:1;}
function Zi(){var a=this;Ba.call(a);a.uC=null;a.Al=0;a.vX=null;}
function AWu(a,b){return !Df(a.uC,b)&&!(a.Al^D8(a.vX.Q,b))?0:1;}
function Zj(){var a=this;Ba.call(a);a.u9=null;a.Br=0;a.uZ=null;}
function AZR(a,b){return !Df(a.u9,b)&&!(a.Br^D8(a.uZ.Q,b))?1:0;}
function QY(){var a=this;Ba.call(a);a.vU=0;a.Co=null;a.wT=null;a.DK=null;}
function A7G(a,b){return !(a.vU^a.Co.p(b))&&!Df(a.wT,b)?0:1;}
function Rg(){var a=this;Ba.call(a);a.CM=0;a.rg=null;a.rD=null;a.D0=null;}
function ARj(a,b){return !(a.CM^a.rg.p(b))&&!Df(a.rD,b)?1:0;}
function QW(){var a=this;Ba.call(a);a.zt=null;a.D3=null;}
function API(a,b){return Df(a.zt,b);}
function QX(){var a=this;Ba.call(a);a.s2=null;a.GV=null;}
function A0S(a,b){return Df(a.s2,b)?0:1;}
function Q2(){var a=this;Ba.call(a);a.CV=null;a.u3=0;a.Dx=null;}
function AR6(a,b){return Df(a.CV,b)&&a.u3^D8(a.Dx.Q,b)?1:0;}
function QV(){var a=this;Ba.call(a);a.BJ=null;a.AA=0;a.u2=null;}
function A5C(a,b){return Df(a.BJ,b)&&a.AA^D8(a.u2.Q,b)?0:1;}
function Q0(){var a=this;Ba.call(a);a.BZ=0;a.yu=null;a.ul=null;a.FJ=null;}
function AY9(a,b){return a.BZ^a.yu.p(b)&&Df(a.ul,b)?1:0;}
function Q1(){var a=this;Ba.call(a);a.BE=0;a.x2=null;a.BV=null;a.FO=null;}
function AUC(a,b){return a.BE^a.x2.p(b)&&Df(a.BV,b)?0:1;}
var MQ=G(0);
function ABV(){var a=this;B.call(a);a.DW=null;a.Cp=null;a.mg=null;a.c4=null;a.kW=0;a.pR=0;}
function PF(a,b){var c,d,e;c=M(a.mg);if(b>=0&&b<=c){AFL(a.c4,null,(-1),(-1));d=a.c4;d.mH=1;d.fe=b;c=d.js;if(c<0)c=b;d.js=c;b=a.Cp.cK(b,a.mg,d);if(b==(-1))a.c4.eb=1;if(b>=0){d=a.c4;if(d.k3){e=d.ez.data;if(e[0]==(-1)){c=d.fe;e[0]=c;e[1]=c;}d.js=Nh(d);return 1;}}a.c4.fe=(-1);return 0;}d=new BJ;Bn(d,Dp(b));N(d);}
function AJC(a){return Rf(a.c4,0);}
function AK6(a){return Te(a.c4,0);}
function AGn(a){return a.c4.k6;}
function SR(){var a=this;B.call(a);a.xh=null;a.xg=0;}
function A2D(a,b){NH(a.xh,b,a.xg);}
function Y8(){B.call(this);this.r5=null;}
function AZV(a,b){b.hX=a.r5;}
var RR=G();
function A1C(a,b){AML(b);}
function AB8(){B.call(this);this.A2=null;}
function ASi(a,b){TT(a.A2,b);}
function AFW(){B.call(this);this.Di=null;}
function A5i(a,b){var c;c=a.Di;AKp(Od(c),c,b);}
function AFV(){B.call(this);this.s3=null;}
function APz(a,b){Bf(a.s3,b);}
function ADA(){var a=this;B.call(a);a.sz=null;a.ks=null;a.eC=null;a.jI=0;a.jr=0;}
function A5d(a,b){var c,d,e,f,g;if(a.ks!==IR()){b=new Bt;X(b);N(b);}BA(a.eC,Jk(b));BA(a.eC,b);c=Bk();d=a.jr;a.jr=d+1|0;e=BT(b);f=a.eC.q;g=new J;L(g);V(H(H(H(V(H(g,C(739)),d),C(285)),e),C(740)),f);Bf(c,K(g));a.jI=a.jI+1|0;H_(b,a);}
function ATM(a,b){var c,d,e,f;if(a.ks!==IR()){b=new Bt;X(b);N(b);}BA(a.eC,Od(b));BA(a.eC,b);c=Bk();d=a.jr;a.jr=d+1|0;b=BT(b);e=a.eC.q;f=new J;L(f);V(H(H(H(V(H(f,C(741)),d),C(285)),b),C(740)),e);Bf(c,K(f));}
function A0a(a){var b,c,d,e,f,g;if(a.ks!==IR()){b=new Bt;X(b);N(b);}c=a.jI-1|0;a.jI=c;if(!c){b=Bk();c=a.eC.q;d=new J;L(d);V(H(d,C(742)),c);Bf(b,K(d));b=a.eC;d=a.sz;e=P(B,b.q);f=e.data;c=0;g=f.length;while(c<g){f[c]=BI(b,c);c=c+1|0;}TT(d.y4,e);}}
function Tp(){B.call(this);this.y4=null;}
function FV(){var a=this;B.call(a);a.GS=F1;a.F_=F1;a.FF=null;a.D9=null;a.FB=0;a.GY=null;}
var Bb0=null;var Bb1=null;var Bb2=0;var Bb3=0;var Bb4=null;function AJL(){AJL=Bm(FV);AOO();}
function AUK(b){AJL();if(Bb1!==b)Bb1=b;Bb1.F_=EN();}
function IR(){AJL();return Bb1;}
function AOO(){var b,c,d;b=new FV;AJL();c=null;b.FF=new B;b.FB=1;b.D9=C(743);b.GY=c;d=Bb2;Bb2=d+1|0;b.GS=Bq(d);Bb0=b;Bb1=b;Bb2=1;Bb3=1;Bb4=new Tg;}
function Y5(){B.call(this);this.xI=null;}
function AVn(a,b){var c,d;c=a.xI;c.nl=b;H2(c.df,b.qR);H2(c.de,c.nl.qS);b=c.u0;d=c.nl;b.ht=d;c.e4.eQ=d;}
var ACJ=G(DH);
var Bb5=null;function AL9(){Bb5=F($rt_bytecls());}
var P5=G(0);
var Tg=G();
var PY=G(Ik);
function AQT(a,b,c,d){var e,f,g;e=0;f=d.B;a:{while(true){if(b>f){b=e;break a;}g=GY(d,a.bd);Eb(d,a.bd,b);e=a.dK.c(b,c,d);if(e>=0)break;Eb(d,a.bd,g);b=b+1|0;}}return b;}
function A7u(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=GY(e,a.bd);Eb(e,a.bd,c);f=a.dK.c(c,d,e);if(f>=0)break;Eb(e,a.bd,g);c=c+(-1)|0;}}return c;}
function APv(a){return null;}
var M_=G(Bt);
function AKK(){B.call(this);this.U9=null;}
function Wz(){B.call(this);this.t3=null;}
function AUD(a,b){a.t3.g(FZ(b));}
function WA(){var a=this;B.call(a);a.A8=null;a.A7=null;}
function AUY(a,b){var c,d;c=a.A8;d=a.A7;b.text().then(Bw(c,"f"),Bw(d,"f"));}
function TB(){B.call(this);this.tH=null;}
function A0U(a,b){b.hR=a.tH;}
function AFn(){B.call(this);this.w6=null;}
function AWz(a,b){a.w6.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function AFm(){var a=this;B.call(a);a.uz=null;a.uy=null;}
function ATn(a,b){var c,d;c=a.uz;d=a.uy;b.arrayBuffer().then(Bw(c,"f"),Bw(d,"f"));}
function AEd(){var a=this;B.call(a);a.zG=null;a.lA=null;a.nT=null;}
function AC2(a){var b,c;b=a.zG.next();c=A$9;b.then(Bw(a,"f"),Bw(c,"f"));}
function AUS(a,b){var c;if(b.done?1:0)a.lA.pc();else{AC2(a);c=b.value;if(c.kind==='file'?1:0){b=AIM(c,Z_(a.nT));a.lA.pv(b);}else{b=A7g(c,Z_(a.nT),null);a.lA.os(b);}}}
function AA3(){B.call(this);this.CH=null;}
var ALV=G();
function Sk(){B.call(this);this.rh=null;}
function A3M(a,b){var c,d,e,f,g;c=a.rh;D3(c.K);Fb(c.iZ);d=NG(OM(c.fZ));while(FI(d)){e=Pi(d);f=c.fZ;g=e.cU;e=null;if(HW(f,g))D6(f,g,e);}e=Bk();d=BT(b);f=new J;L(f);H(H(f,C(744)),d);Bf(e,K(f));e=VK(b,c);D$(c.c6.eN,e);e.f4.e();CZ(c.lb,FM(ES(b),C(745)));Cx(c.K.G,c.c6.eN);}
function Sj(){var a=this;B.call(a);a.sF=null;a.sG=null;}
function A3_(a){var b,c;b=a.sF;c=a.sG;TK();Lj(b,c,Bb6);}
function Sh(){var a=this;B.call(a);a.Bl=null;a.Bk=null;}
function ARa(a){var b,c;b=a.Bl;c=a.Bk;TK();Lj(b,c,Bb7);}
function Si(){var a=this;B.call(a);a.Dw=null;a.Dv=null;}
function AWF(a){Lj(a.Dw,a.Dv,null);}
function Sl(){var a=this;B.call(a);a.zS=null;a.zT=null;}
function AN0(a){var b,c,d,e,f,g,h;b=a.zS;c=a.zT;d=Eo(b.bD.d);e=H5(b.bD.d);d=ADr(b.bD.fX,d,e);D3(b.gZ.ck);b=b.bD;e=FO(b,c);if(d!==null){f=b.d;g=e.bv;h=e.bA;e=new ADI;e.Fh=b;e.Fi=c;d.LV(f,g,h,1,e,b.kE);}}
function Ty(){B.call(this);this.x4=null;}
function AV9(a){var b;b=a.x4;D3(b.gZ.ck);JJ(b.bD,Xs(b),0);}
function Tx(){B.call(this);this.vB=null;}
function A2x(a){var b;b=a.vB;D3(b.gZ.ck);JJ(b.bD,Xs(b),1);}
function Tw(){B.call(this);this.sH=null;}
function A34(a){var b,c,d;b=a.sH;D3(b.gZ.ck);c=Il(b);b=b.bD;BG(b);d=new AER;d.r9=b;SF(c,d,AGT(C(746)));}
function SG(){var a=this;B.call(a);a.AK=null;a.AJ=null;}
function AXH(a){var b,c;b=a.AK;c=a.AJ;b=b.bD.d;b.qz=c;M1(b);}
var R5=G(0);
var BbD=null;function AMv(){BbD=new UP;}
function ALo(){B.call(this);this.Gy=null;}
function A68(a){var b,c,d,e;b=a.Gy;c=Il(b);d=b.gZ.ck;e=new Td;e.De=b;F4(c,NT(d,e));}
function ADY(){var a=this;B.call(a);a.ez=null;a.lt=null;a.qb=null;a.n9=null;a.ss=0;a.k3=0;a.dx=0;a.B=0;a.fe=0;a.k6=0;a.g8=0;a.eb=0;a.Gw=0;a.js=0;a.mH=0;}
function B2(a,b,c){a.lt.data[b]=c;}
function DL(a,b){return a.lt.data[b];}
function Nh(a){return Te(a,0);}
function Te(a,b){ABq(a,b);return a.ez.data[(b*2|0)+1|0];}
function Eb(a,b,c){a.ez.data[b*2|0]=c;}
function NE(a,b,c){a.ez.data[(b*2|0)+1|0]=c;}
function GY(a,b){return a.ez.data[b*2|0];}
function JI(a,b){return a.ez.data[(b*2|0)+1|0];}
function AIz(a){return Rf(a,0);}
function Rf(a,b){ABq(a,b);return a.ez.data[b*2|0];}
function XV(a,b){return a.qb.data[b];}
function E$(a,b,c){a.qb.data[b]=c;}
function ABq(a,b){var c;if(!a.k3){c=new CV;X(c);N(c);}if(b>=0&&b<a.ss)return;c=new BJ;Bn(c,Dp(b));N(c);}
function AFL(a,b,c,d){a.k3=0;a.mH=2;J8(a.ez,(-1));J8(a.lt,(-1));if(b!==null)a.n9=b;if(c>=0){a.dx=c;a.B=d;}a.fe=a.dx;}
function AHm(a){return a.mH;}
function T0(){B.call(this);this.u_=null;}
function A5e(a,b){a.u_.g($rt_str(b.message));}
function ALJ(){var a=this;B.call(a);a.QU=null;a.QS=null;a.QV=0.0;}
function ACT(){B.call(this);this.xw=null;}
function AMg(){B.call(this);this.Il=null;}
var AMh=G();
function AMf(){var a=this;B.call(a);a.UX=null;a.UW=null;}
var EI=G(CE);
var Bb8=null;var Bb9=null;var Bb$=null;var Bb_=null;function AZq(){AZq=Bm(EI);ARW();}
function ALp(a,b){var c=new EI();AHC(c,a,b);return c;}
function AX4(){AZq();return Bb_.ef();}
function AHC(a,b,c){AZq();Du(a,b,c);}
function ARW(){var b;Bb8=ALp(C(747),0);Bb9=ALp(C(748),1);b=ALp(C(749),2);Bb$=b;Bb_=I(EI,[Bb8,Bb9,b]);}
var YZ=G(0);
function AFd(){var a=this;B.call(a);a.s8=null;a.s7=0;}
function A3v(a,b){var c,d,e,f,g,h;c=a.s8;d=a.s7;e=!d?c.cP.c9:c.cP.c$;D3(c.K);f=Bk();g=ES(b);h=new J;L(h);H(H(h,C(750)),g);Bf(f,K(h));g=new ABD;g.ds=c;g.hY=d;g.nQ=e;f=VK(b,g);if(!d)c.db=f;else c.dv=f;f.cD.e();D$(e,f);b=c.dv;if(b!==null&&c.db===null)CZ(c.jp,Dd(b));if(c.dv===null){b=c.db;if(b!==null)CZ(c.jp,Dd(b));}b=c.dv;if(b!==null&&c.db!==null){e=c.jp;f=Dd(b);h=Dd(c.db);b=new J;L(b);H(H(H(b,f),C(751)),h);CZ(e,K(b));}b=c.dv;if(b!==null&&c.db!==null){c.e_.jj=0;if(Bj(Dd(b),Dd(c.db))){c.dv.m=Ga(null);c.db.m=Ga(null);L9(c,
c.dv,c.db);}else{c.dv.m=Ga(null);b=c.dv;e=b.m;e.bp=3;e.dE=2;On(b,3);c.db.m=Ga(null);b=c.db;e=b.m;e.bp=3;e.dE=2;On(b,3);DY(c.cP.c$);DY(c.cP.c9);}}}
function Rl(){B.call(this);this.zh=null;}
function AUy(a){AJx(a.zh);}
function Rj(){B.call(this);this.Bq=null;}
function A0M(a){J0(a.Bq);}
function Rk(){B.call(this);this.q6=null;}
function A6z(a){AKn(a.q6);}
function Vj(){B.call(this);this.Bu=null;}
function A4m(a){a.Bu.qX();}
function Vl(){B.call(this);this.Dz=null;}
function ATG(a){a.Dz.o8();}
function AAz(){B.call(this);this.z9=null;}
function A5t(a){var b,c,d,e,f,g,h,i;b=a.z9;c=(b.r$.cb()).data;d=P(By,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new RU;i.sZ=b;i.sY=h;e[f]=Yy(i,h);f=f+1|0;}return d;}
function AA_(){B.call(this);this.tc=null;}
function AOw(a){a.tc.o5.gx(0);}
function AA9(){B.call(this);this.B1=null;}
function APV(a){a.B1.o5.gx(1);}
function T2(){B.call(this);this.xs=null;}
function AWZ(a){var b,c,d,e,f;b=a.xs.d.h;c=b.cJ;d=new J;L(d);V(H(d,C(752)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.n7;d=new J;L(d);V(H(d,C(753)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dI;e=GG(Fr(b));AE5(d,0,d.dF,e);b=Bk();f=b.nz;f.data[0]=10;Y1(b,f,0,1);}
function T3(){B.call(this);this.s_=null;}
function AOu(a){ABe(a.s_);}
function T4(){B.call(this);this.BT=null;}
function APM(a){ACD(a.BT);}
function T5(){B.call(this);this.ym=null;}
function AWJ(a){O5(a.ym.d);}
function Uj(){B.call(this);this.AC=null;}
function A2F(a){W2(a.AC);}
function AH9(){B.call(this);this.GK=null;}
function A6$(a){var b,c,d,e,f,g,h;b=a.GK;c=P(By,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Yy(Rh(b,g),YG(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Yy(Rh(b,g),YG(g));e=h;}return c;}
function AEn(){var a=this;B.call(a);a.mJ=null;a.ji=0;}
var Pm=G(EH);
function AH1(){var a=this;B.call(a);a.OX=null;a.TC=null;a.M2=null;a.Kz=null;a.PF=null;}
var UP=G();
function Ph(){var a=this;Pm.call(a);a.ob=null;a.mZ=null;}
function A4A(a,b){var c,d,e,f;c=b.fx;d=c/32|0;e=1<<(c%32|0);f=a.mZ.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function P9(){EF.call(this);this.p7=null;}
function AXU(a,b){return a.p7.data[b];}
function AT4(a){return a.p7.data.length;}
var R_=G(Bt);
var WU=G(Bt);
function Vn(){GD.call(this);this.Fl=0;}
function R3(){GD.call(this);this.GO=0;}
function ACw(){Ba.call(this);this.F7=null;}
function AWB(a,b){return CK(b)!=2?0:1;}
function XN(){Ba.call(this);this.Gb=null;}
function AYX(a,b){return CK(b)!=1?0:1;}
function Tc(){Ba.call(this);this.FW=null;}
function AOA(a,b){return SJ(b);}
function Tb(){Ba.call(this);this.D6=null;}
function A0J(a,b){return 0;}
function WG(){Ba.call(this);this.E8=null;}
function ARV(a,b){return !CK(b)?0:1;}
function Zv(){Ba.call(this);this.Gn=null;}
function A5$(a,b){return CK(b)!=9?0:1;}
function QI(){Ba.call(this);this.Fp=null;}
function AUe(a,b){return Ig(b);}
function AAR(){Ba.call(this);this.Eu=null;}
function AVh(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function XJ(){Ba.call(this);this.DB=null;}
function A7e(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function XL(){Ba.call(this);this.EK=null;}
function APZ(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function Qo(){Ba.call(this);this.E5=null;}
function AWL(a,b){a:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function ZK(){Ba.call(this);this.GL=null;}
function A2C(a,b){return Lm(b);}
function ZP(){Ba.call(this);this.Ec=null;}
function A4c(a,b){return ZQ(b);}
function ACX(){Ba.call(this);this.Gp=null;}
function A5W(a,b){return CK(b)!=3?0:1;}
function ABW(){Ba.call(this);this.DD=null;}
function AW$(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function PR(){Ba.call(this);this.G0=null;}
function APQ(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function M0(){Ba.call(this);this.oo=0;}
function A8M(a){var b=new M0();AIh(b,a);return b;}
function AIh(a,b){BB(a);a.oo=b;}
function AUh(a,b){return a.bo^(a.oo!=CK(b&65535)?0:1);}
var ABs=G(M0);
function A5g(a,b){return a.bo^(!(a.oo>>CK(b&65535)&1)?0:1);}
function ADU(){var a=this;B.call(a);a.uF=null;a.Cf=null;a.xj=0;a.nm=0;}
function N_(a,b){return Cl(a.uF)<b?0:1;}
var AGG=G(0);
function AD8(){B.call(this);this.rU=null;}
function AWx(a){ABR(a.rU);}
function AD$(){B.call(this);this.AZ=null;}
function AXQ(a,b){G0(a.AZ,b);}
function V4(){B.call(this);this.ri=null;}
function AXu(a){AFi(a.ri);}
function V5(){B.call(this);this.Dd=null;}
function AVw(a,b){G0(a.Dd,b);}
function LZ(){F6.call(this);this.tY=null;}
function SD(){LZ.call(this);this.sC=null;}
function Y0(){var a=this;B.call(a);a.zQ=null;a.zR=null;}
function AEe(){var a=this;B.call(a);a.Bb=null;a.Bc=0;}
function A1b(a){Iz(a.Bb,a.Bc);}
function AAX(){B.call(this);this.re=null;}
function AS8(a){Iz(a.re,1);}
function AAW(){B.call(this);this.w9=null;}
function A3C(a){Iz(a.w9,0);}
function ST(){var a=this;B.call(a);a.AE=null;a.Ap=0;}
function A6s(a){ZY(a.AE,a.Ap);}
function QJ(){B.call(this);this.q_=null;}
function A2n(a,b){G0(a.q_,b);}
function AER(){B.call(this);this.r9=null;}
function AQ5(a,b){DP(a.r9,b);}
var G_=G(CE);
var Bb7=null;var Bb6=null;var Bca=null;function TK(){TK=Bm(G_);A7l();}
function A4U(a,b){var c=new G_();AHy(c,a,b);return c;}
function AKl(){TK();return Bca.ef();}
function AHy(a,b,c){TK();Du(a,b,c);}
function A7l(){var b;Bb7=A4U(C(754),0);b=A4U(C(755),1);Bb6=b;Bca=I(G_,[Bb7,b]);}
function F9(){var a=this;Da.call(a);a.ha=null;a.ga=null;a.f0=null;a.gp=null;}
var Bcb=null;var Bcc=null;function VK(a,b){var c=new F9();ALT(c,a,b);return c;}
function Bcd(a,b,c){var d=new F9();Mq(d,a,b,c);return d;}
function ALT(a,b,c){Mq(a,b,0,c);}
function Mq(a,b,c,d){KG(a,JV(b),c);a.f0=Bcb;a.gp=Bcc;a.ha=b;a.ga=d;LX(a);Jb(a);}
function AWS(a){return Jk(a.ha);}
function Sp(a,b){return VL(a.f0,b);}
function LX(a){var b;b=new S4;b.tK=a;a.cD=b;a.f4=b;a.ep=Bbv;}
function AFl(a){var b;b=new AF2;b.uS=a;a.cD=b;a.f4=b;}
function AJg(){Bcb=P(F9,0);Bcc=P(IY,0);}
function RU(){var a=this;B.call(a);a.sZ=null;a.sY=null;}
function A1a(a){var b,c;b=a.sZ;c=a.sY;b.jK.oC(c);}
function SW(){B.call(this);this.Bm=null;}
function AQW(a,b){var c,d;c=a.Bm;d=b.jl;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
function SL(){B.call(this);this.vx=null;}
function AOJ(a,b){UK(Il(a.vx),b,BaL,AGT(C(756)));}
var ACV=G();
var BbE=null;function A9G(){A9G=Bm(ACV);AYG();}
function AYG(){var b,c;b=BP((AKl()).data.length);c=b.data;BbE=b;c[Bb7.fx]=1;c[Bb6.fx]=2;}
function PA(){var a=this;B.call(a);a.yU=null;a.yV=0.0;}
function A1x(a){var b,c;b=a.yU;c=a.yV;b.jK.k8(c);}
function IY(){Da.call(this);this.eR=null;}
function ANx(a,b,c){var d=new IY();A0i(d,a,b,c);return d;}
function A0i(a,b,c,d){KG(a,b,c);a.eR=d;}
function APK(a){return Od(a.eR);}
function ABD(){var a=this;B.call(a);a.hY=0;a.nQ=null;a.ds=null;}
function ASs(a,b){var c,d,e,f,g;c=Bk();d=ES(b.eR);e=new J;L(e);H(H(e,C(757)),d);Bf(c,K(e));c=b.eR;d=Sn(a,c.ix);if(d===null)f=null;else{c=D9(c);f=VL(d.gp,c);}if(f===null){c=new ADJ;d=a.ds;AMN(c,d.K,d.gP,d.hF);L5(c,b.eR);K8(c);}else{Mg(a,f);c=new NM;g=a.ds;UO(c,g.K,g.gP,g.hF);NH(c,b.eR,a.hY);NH(c,f.eR,a.hY?0:1);}}
function AXG(a,b){var c,d,e,f;AFl(b);c=Bk();d=Jk(b.ha);e=new J;L(e);H(H(e,C(758)),d);Bf(c,K(e));c=Ur(a,b);Mg(a,c);if(c!==null&&Sy(c))c.cD.e();if(E7(b)>0)DY(a.nQ);IB(a.ds);f=b.f0.data;if(f.length==1&&!b.gp.data.length)f[0].cD.e();}
function Mg(a,b){(!a.hY?a.ds.cP.c$:a.ds.cP.c9).c7=b;}
function AXP(a,b){var c;if(E7(b)>0)DY(a.nQ);LX(b);c=Ur(a,b);Mg(a,c);if(c!==null&&HE(c))c.cD.e();IB(a.ds);}
function Ur(a,b){var c,d;a:{c=a.hY;if(!(c&&b===a.ds.dv)){if(c)break a;if(b!==a.ds.db)break a;}return !c?a.ds.dv:a.ds.db;}b=b.ha;d=Sn(a,b.f6);return d===null?null:Sp(d,JV(b));}
function Sn(a,b){var c,d,e;c=!a.hY?a.ds.dv:a.ds.db;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Sp(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function ACo(){var a=this;B.call(a);a.sa=null;a.sc=null;a.sb=null;}
function A3K(a,b){ANe(a.sa,a.sc,a.sb,b);}
function Rs(){var a=this;B.call(a);a.uw=null;a.uv=null;a.uu=null;}
function A5D(a,b){var c,d,e,f;c=b.data;b=a.uw;d=a.uv;e=a.uu;Hu(d);Hu(e);if(c.length==1&&!((CL(c[0])).data[0]!=1?0:1)){f=JT(b.e_);d.m.bz=f;e.m.bz=f;f=JT(b.e_);If(d.m,3,b.e_);d=b.e_;d.jj=f+1|0;If(e.m,3,d);IB(b);}}
function Ww(){var a=this;B.call(a);a.yp=null;a.yq=null;}
var AFx=G(0);
function AAd(){B.call(this);this.xH=null;}
function ASJ(a){var b,c;b=a.xH;c=b.zQ;b=b.zR;c.Hl(b.mB,b.qg,null);}
var AH8=G(0);
function Td(){B.call(this);this.De=null;}
function A5z(a,b){F_(a.De.bD,b,BaL);}
function Rp(){var a=this;B.call(a);a.mw=null;a.mv=null;a.zk=null;}
function AQl(a){J5(a.mw);J5(a.mv);}
function ANV(a){K5(a.mw);K5(a.mv);}
function AVK(a,b){I5(a.mw,b);I5(a.mv,b);}
function AT7(a,b){K6(a.zk,b);}
function S2(){var a=this;B.call(a);a.AT=null;a.AS=null;a.AR=0;}
function AN2(a){var b,c,d,e;b=a.AT;c=a.AS;d=a.AR;c=ES(c);if(!d)b.n_=c;else b.x0=c;e=b.x0;if(e!==null&&b.n_!==null)CZ(b.g0,c);else{if(e!==null)CZ(b.g0,e);c=b.n_;if(c!==null)CZ(b.g0,c);}}
function ADI(){var a=this;B.call(a);a.Fh=null;a.Fi=null;}
function ACP(){var a=this;B.call(a);a.GH=null;a.GG=null;a.GF=null;}
function S4(){B.call(this);this.tK=null;}
function AT9(a){var b,c,d,e;b=a.tK;c=Bk();d=Dd(b);e=new J;L(e);H(H(e,C(759)),d);Bf(c,K(e));c=b.ha;e=new ACu;e.cy=b;e.ml=BO();e.mS=BO();H_(c,e);}
var De=G(0);
var A_s=null;var BaH=null;var A_u=null;var A_t=null;var A_w=null;var A_v=null;var A_y=null;var A_x=null;var A_A=null;var A_z=null;var A_B=null;function AIW(){AIW=Bm(De);A6C();}
function A6C(){A_s=Cs(0);BaH=DE(8,8,8);A_u=S(C(760));A_t=DE(255,255,255);A_w=S(C(761));A_v=S(C(762));A_y=S(C(763));A_x=S(C(764));A_A=Fd(205,205,205,153);A_z=Fd(255,255,255,0);A_B=S(C(117));}
function CD(){CE.call(this);this.p_=null;}
var Bce=null;var Bcf=null;var Bcg=null;var Bch=null;var Bci=null;var Bcj=null;var Bck=null;var Bcl=null;var Bcm=null;var Bcn=null;var Bco=null;var Bcp=null;var Bcq=null;var Bcr=null;var Bcs=null;var Bct=null;function AIi(){AIi=Bm(CD);A67();}
function DU(a,b,c){var d=new CD();AA0(d,a,b,c);return d;}
function A6S(a,b,c,d){var e=new CD();AGE(e,a,b,c,d);return e;}
function AMT(){AIi();return Bct.ef();}
function AA0(a,b,c,d){AIi();Du(a,b,c);a.p_=Kk(d,null);}
function AGE(a,b,c,d,e){AIi();Du(a,b,c);a.p_=Kk(d,e);}
function A67(){var b;b=new CD;AIW();AA0(b,C(354),0,BaH);Bce=b;Bcf=DU(C(355),1,S(C(765)));Bcg=DU(C(357),2,S(C(766)));Bch=DU(C(359),3,S(C(767)));Bci=DU(C(361),4,BaH);Bcj=DU(C(362),5,S(C(768)));Bck=DU(C(364),6,S(C(407)));Bcl=DU(C(366),7,S(C(769)));Bcm=DU(C(368),8,S(C(770)));Bcn=A6S(C(370),9,BaH,DE(237,235,252));Bco=A6S(C(371),10,S(C(405)),S(C(771)));Bcp=DU(C(372),11,S(C(407)));Bcq=DU(C(374),12,S(C(408)));Bcr=DU(C(376),13,S(C(772)));b=DU(C(377),14,S(C(378)));Bcs=b;Bct=I(CD,[Bce,Bcf,Bcg,Bch,Bci,Bcj,Bck,Bcl,Bcm,Bcn,
Bco,Bcp,Bcq,Bcr,b]);}
var Ed=G(0);
var A_F=null;var A_G=null;var A_C=null;var A_D=null;var A_E=null;var BaI=null;var BaJ=null;var A_H=null;var A_I=null;function AYz(){AYz=Bm(Ed);A0d();}
function A0d(){A_F=S(C(115));A_G=S(C(773));A_C=S(C(774));A_D=S(C(775));A_E=S(C(776));BaI=S(C(115));BaJ=S(C(773));A_H=Fd(205,205,205,153);A_I=DE(247,248,250);}
function ACu(){var a=this;B.call(a);a.ml=null;a.mS=null;a.cy=null;}
function A5O(a,b){var c,d;c=new F9;d=a.cy;Mq(c,b,d.hb+1|0,d.ga);d=a.cy.m;if(d!==null&&d.dE==2){b=Ga(d);c.m=b;d=a.cy.m;b.dE=d.dE;b.bp=d.bp;}BA(a.ml,c);}
function AWs(a,b){var c,d;c=D9(b);d=ANx(c,a.cy.hb+1|0,b);a.cy.ga.sr(d,c);d.lB=AM7(a.cy.ga,d);b=a.cy.m;if(b!==null&&b.dE==2){c=Ga(b);d.m=c;b=a.cy.m;c.dE=b.dE;c.bp=b.bp;c.bz=b.bz;}BA(a.mS,d);}
function A6a(a){var b,c,d,e,f,g,h,i,j;if(!(EU(a.ml)&&EU(a.mS))){a:{a.cy.f0=GM(a.ml,Bcb);a.cy.gp=GM(a.mS,Bcc);LE(a.cy.f0,Bbw);LE(a.cy.gp,Bbw);b=a.cy;c=b.f0;d=c.data;e=b.gp;f=e.data;g=d.length;h=f.length;d=P(Da,g+h|0);Db(c,0,d,0,g);Db(e,0,d,g,h);b=a.cy;i=b.m;if(i.co===null){c=d.data;g=c.length;e=P(HN,g);f=e.data;i.co=e;h=0;while(true){if(h>=g)break a;f[h]=c[h].m;h=h+1|0;}}e=d.data;h=0;j=e.length;while(h<j){e[h].m=b.m.co.data[h];h=h+1|0;}}b.ep=d;}Iq(a.cy);b=a.cy;b.ga.yC(b);}
function ACE(){B.call(this);this.CE=null;}
function A1V(a){D3(a.CE);}
function Uh(){var a=this;B.call(a);a.sO=null;a.sN=null;}
function AOT(a,b){var c,d;b=a.sO;c=a.sN;d=AMp(b.sC.CH.fW);b=c.yp;c=c.yq;b=b.xw;if(c.J>0)LJ(c,b);LJ(c,d);return 1;}
var AKx=G();
function PG(){var a=this;B.call(a);a.zL=null;a.zK=null;}
function ATO(a){a.zL.AY(a.zK);}
function AF2(){B.call(this);this.uS=null;}
function A1U(a){var b;b=a.uS;Jb(b);b.ga.v4(b);b.f0=Bcb;b.gp=Bcc;}
function Rz(){var a=this;B.call(a);a.wf=null;a.wg=null;}
function A08(a,b){var c,d,e;c=a.wf;d=a.wg;L_(c.fZ,d);b=AKB(b);e=AQz(b.kP,ADN(d));D6(c.iZ,d,e);if(BR(c.yh,d))RX(c,e);}
function RA(){var a=this;B.call(a);a.tV=null;a.tU=null;}
function A7f(a,b){var c,d,e;c=a.tV;d=a.tU;L_(c.fZ,d);c=D4();e=new J;L(e);H(H(H(H(e,C(777)),d),C(29)),b);Bf(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",14,"diff",11,"menu",10,"parser",17,"common",18,"tree",18,"graph",20,"node",21,"ref",21,"decl",10,"ui",24,"window",24,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bT",A$o(AS_),"M",A$n(AGI)],S1,0,B,[],0,3,0,0,0,X6,0,B,[],3,3,0,0,0,XG,0,B,[],3,3,0,0,0,AEA,0,B,[X6,XG],0,3,0,0,0,AKP,0,B,[],4,0,0,0,0,AKD,0,B,[],4,3,0,0,0,Ho,0,B,[],0,3,0,0,0,EM,0,Ho,[],0,3,0,0,0,Bt,0,EM,[],0,3,0,0,0,ABk,0,Bt,[],0,3,0,0,0,C3,0,B,[],3,3,0,0,0,CI,0,B,[],3,3,0,0,0,KV,0,B,[],3,3,0,0,0,BC,"String",3,B,[C3,CI,KV],0,3,[0,0,0],Fu,["M",A$n(APd),"bT",A$o(Bj),"qI",A$n(Kz),"m1",A$o(AQR)],FP,0,Ho,[],0,3,0,0,0,IQ,0,FP,[],0,3,0,0,0,ALh,0,IQ,[],0,3,0,0,0,DH,0,B,[C3],1,3,0,0,
0,H8,0,DH,[CI],0,3,0,0,["M",A$n(AWM),"bT",A$o(A6W),"m1",A$o(A1$)],Hi,0,B,[C3,KV],0,0,0,0,["ky",A$o(ND),"M",A$n(K)],Kj,0,B,[],3,3,0,0,0,J,0,Hi,[Kj],0,3,0,0,["qw",A$r(A15),"pW",A$q(AP7),"M",A$n(Er),"ky",A$o(ASp),"qO",A$p(A2r)],Fj,0,IQ,[],0,3,0,0,0,AMm,0,Fj,[],0,3,0,0,0,ALc,0,Fj,[],0,3,0,0,0,ACU,0,B,[],3,3,0,0,0,Dt,0,B,[],3,3,0,0,0,Zu,0,B,[],3,0,0,0,0,KN,0,B,[ACU,Dt,Zu],1,3,0,0,["bZ",A$n(EP)],ABj,0,KN,[],0,3,0,0,0,AKf,0,B,[],0,3,0,0,0,AM1,0,B,[],4,3,0,0,0,BX,0,B,[],3,3,0,0,0,Ch,0,B,[BX],3,3,0,0,0,AC5,0,B,[Ch],
0,3,0,0,["bn",A$o(A7b)],AIk,0,B,[],0,3,0,0,0,ALR,0,B,[BX],1,3,0,0,0,AGo,0,B,[],3,3,0,0,0,AMO,0,B,[],3,3,0,0,0,AIR,0,B,[],3,3,0,0,0,MI,"FontConfigJs",27,B,[],0,3,[0,0,0],0,0,AGS,0,B,[BX],1,3,0,0,0,AC6,0,B,[Ch],0,3,0,0,["bn",A$o(ANG)],AC4,0,B,[Ch],0,3,0,0,["bn",A$o(A5X)],Ml,0,B,[],4,3,0,0,0,AIQ,0,B,[],4,3,0,0,0,AK7,0,B,[],0,3,0,0,0,AND,0,B,[],4,3,0,0,0,X7,0,B,[Ch],0,3,0,0,["bn",A$o(A3p)]]);
$rt_metadata([AI3,0,B,[BX],1,3,0,0,0,AKs,0,B,[],0,3,0,0,0,AEf,0,B,[BX],3,3,0,0,0,ALG,0,B,[AEf],1,3,0,0,["Nh",A$o(A1e),"T5",A$n(AS7)],AHG,0,B,[BX],1,3,0,0,0,GE,0,B,[],3,3,0,0,0,TX,0,B,[GE],0,3,0,0,0,BJ,0,Bt,[],0,3,0,0,0,AL7,0,B,[],4,3,0,0,0,Go,0,Bt,[],0,3,0,0,0,JP,0,Bt,[],0,3,0,0,0,Dq,0,B,[CI],0,3,0,0,0,XB,0,B,[BX],3,3,0,0,0,ABX,0,B,[XB],3,3,0,0,0,Fe,0,B,[BX],3,3,0,0,0,AKi,0,B,[BX,ABX,Fe],1,3,0,0,["LW",A$n(A25),"Mw",A$o(A5l),"UV",A$o(A48),"P3",A$o(AZU),"Tj",A$o(ANZ),"OA",A$n(AP0),"T3",A$p(A5h),"MP",A$q(ASb),
"Nq",A$n(AYV),"NJ",A$n(A3U),"Sr",A$o(A5S),"QI",A$n(ATs),"Ve",A$o(ARP),"Ky",A$n(ATP),"Rm",A$n(AXK),"U$",A$n(ASD),"HN",A$o(AOF),"MU",A$n(A6Z),"SM",A$p(A1G),"Qv",A$p(ATl),"TU",A$p(AWW),"Ty",A$n(AYc),"Ul",A$n(ARy),"Nv",A$o(AP$),"R$",A$o(AQ2),"PX",A$p(A1Q),"Kc",A$n(ASN),"Ng",A$o(AYY),"ON",A$n(AQ1),"NR",A$n(AUU),"PK",A$o(ANM),"Kx",A$o(AWi),"U5",A$o(AZh),"JI",A$n(A5M),"Ql",A$p(AZo),"TQ",A$o(A37),"J2",A$n(AVl),"O8",A$p(AUc),"Ih",A$p(ATW),"Q7",A$n(AWb),"Nw",A$o(AXj),"Jn",A$q(A3e),"IH",A$n(AP5),"Jr",A$p(AZF),"QB",A$n(AYA),
"Me",A$n(A6T),"So",A$n(AUa),"G6",A$n(AYy),"LN",A$p(AUd),"OO",A$o(AZ3),"R7",A$o(ARb),"IB",A$n(A4J)],Qp,0,B,[Ch],0,3,0,0,["bn",A$o(AUP)],ALr,0,B,[],4,3,0,0,0,ZJ,0,B,[Fe],3,3,0,0,0,SS,0,B,[Fe],3,3,0,0,0,AA8,0,B,[Fe],3,3,0,0,0,Um,0,B,[Fe],3,3,0,0,0,AFq,0,B,[Fe],3,3,0,0,0,ADH,0,B,[Fe,ZJ,SS,AA8,Um,AFq],3,3,0,0,0,AKN,0,B,[BX,ADH],1,3,0,0,["S1",A$p(A3x),"Ur",A$p(A17),"IJ",A$q(ARA),"Qq",A$o(AOV),"Ll",A$q(A0k)],BU,0,Bt,[],0,3,0,0,0,AF3,0,Bt,[],0,3,0,0,0,IL,0,BJ,[],0,3,0,0,0,AK1,0,B,[],0,3,0,0,0,AAF,0,B,[],3,3,0,0,0,Zk,
0,B,[AAF],3,3,0,0,0,AB5,0,B,[Zk],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,ALO,0,B,[BD],0,3,0,0,0,T,0,B,[],3,3,0,0,0,ALP,0,B,[T],0,3,0,0,0,ABb,0,B,[BX],3,3,0,0,0,VG,0,B,[ABb],0,3,0,0,["KA",A$o(A1F)],VE,0,B,[T],0,3,0,0,0,AAu,0,B,[BX],3,3,0,0,0,VF,0,B,[AAu],0,3,0,0,["C6",A$p(AQk)],AJb,0,B,[BX],1,3,0,0,0,CF,0,B,[BX],3,3,0,0,0,VD,0,B,[CF],0,3,0,0,["cQ",A$o(AUT)],ABN,0,B,[],0,3,0,0,0,Wg,0,B,[],3,3,0,0,["fJ",A$o(AXV)],HZ,0,B,[Wg],3,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],FS,0,B,[HZ],1,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W),"e6",A$n(EU),
"rE",A$o(A4X)],Oj,0,B,[HZ],3,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],Nl,0,B,[Oj],3,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)]]);
$rt_metadata([EF,0,FS,[Nl],1,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W),"qp",A$o(AU8),"cj",A$n(B9),"vC",A$p(AUs),"o9",A$p(A5F),"mT",A$o(A36),"bT",A$o(ATF)],MV,0,EF,[],1,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],Pz,0,B,[HZ],3,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],AFM,0,B,[Pz,Oj],3,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],US,0,MV,[AFM],0,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],L$,0,B,[],3,3,0,0,0,Es,0,B,[L$],1,3,0,0,0,Ej,0,B,[],3,3,0,0,0,WZ,0,B,[L$],3,3,0,0,0,P0,0,B,[WZ],3,3,0,0,0,Zz,0,Es,[Ej,C3,P0],0,3,0,0,0,ABP,0,B,[BD],0,3,0,0,0,ABQ,
0,B,[Ch],0,3,0,0,["bn",A$o(AYb)],AGZ,0,B,[],0,3,0,0,0,OA,0,B,[],1,3,0,0,0,Vv,0,OA,[],0,3,0,0,0,CA,0,B,[Dt],1,3,0,0,["cM",A$o(A6U)],Z8,0,B,[],0,3,0,0,0,AEE,0,B,[CF],0,3,0,0,["cQ",A$o(A3N)],AEF,0,B,[CF],0,3,0,0,["cQ",A$o(A30)],AEG,0,B,[CF],0,3,0,0,["cQ",A$o(ATq)],AEH,0,B,[CF],0,3,0,0,["cQ",A$o(A2p)],AEI,0,B,[CF],0,3,0,0,["cQ",A$o(A2E)],AEJ,0,B,[CF],0,3,0,0,["cQ",A$o(AUZ)],AEK,0,B,[CF],0,3,0,0,["cQ",A$o(ARz)],AEL,0,B,[CF],0,3,0,0,["cQ",A$o(A7n)],AEM,0,B,[CF],0,3,0,0,["cQ",A$o(AQZ)],AEN,0,B,[CF],0,3,0,0,["cQ",A$o(AVJ)],Xd,
0,B,[CF],0,3,0,0,["cQ",A$o(A6V)],Xe,0,B,[CF],0,3,0,0,["cQ",A$o(AS4)],Xf,0,B,[CF],0,3,0,0,["cQ",A$o(ATu)],Xg,0,B,[CF],0,3,0,0,["cQ",A$o(A39)],ADp,0,B,[],3,3,0,0,0,ADz,0,B,[ADp],0,3,0,0,0,ADy,0,B,[CF],0,3,0,0,["cQ",A$o(ASg)],Px,0,B,[],0,3,0,0,0,K_,0,B,[GE],0,3,0,0,["qV",A$p(NA)],AJo,0,B,[],0,3,0,0,0,Cj,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,["b3",A$o(A11),"cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l)],EZ,0,B,[],3,3,0,0,0,DR,0,B,[],3,3,0,0,0,CS,0,B,[DR],3,3,0,0,0,FQ,0,B,[],3,3,0,0,0,CO,0,B,[],3,3,0,0,0,Gf,0,B,[CO],3,3,
0,0,0,Sf,0,B,[Dt],0,3,0,0,0,Bh,"V2i",30,B,[],0,3,[0,0,0],0,["M",A$n(AJY),"bT",A$o(AR8)],AES,0,B,[],0,3,0,0,0,AIT,0,B,[],0,3,0,0,0]);
$rt_metadata([AKA,0,B,[],3,3,0,0,0,AAs,0,B,[],0,3,0,0,0,OO,0,B,[],0,3,0,0,0,Dl,0,OO,[],0,3,0,0,0,AMZ,0,Dl,[],0,3,0,0,0,FJ,0,Dl,[],0,3,0,0,0,AAT,0,Dl,[],0,3,0,0,0,AHJ,0,FJ,[],0,3,0,0,0,HT,0,FJ,[],0,3,0,0,0,Qw,0,HT,[],0,3,0,0,0,AJF,0,HT,[],0,3,0,0,0,AKO,0,FJ,[],0,3,0,0,0,AMo,0,Dl,[],0,3,0,0,0,AGC,0,Dl,[],0,3,0,0,0,ABv,0,B,[BX],3,3,0,0,0,ANC,0,B,[ABv],3,3,0,0,0,AAr,0,B,[Dt],0,3,0,0,0,R9,0,B,[],0,3,0,0,0,CE,0,B,[CI,C3],1,3,0,0,0,Hz,0,CE,[],12,3,0,H1,0,M5,0,B,[],3,3,0,0,0,Ue,0,B,[M5],3,3,0,0,0,ADF,0,B,[],3,3,0,0,
0,Hk,0,B,[Ue,ADF],1,3,0,0,0,Nw,0,Hk,[],0,3,0,0,0,AHo,0,Nw,[],0,3,0,0,0,H7,0,Hk,[],1,3,0,0,0,Mk,0,H7,[],0,3,0,0,["ns",A$q(AR_)],Eu,0,CE,[],12,3,0,ANj,0,No,0,B,[CI],1,3,0,0,0,M8,0,No,[],0,3,0,AHh,0,ZD,0,B,[],0,3,0,0,0,Ix,0,CE,[],12,0,0,AH4,0,Ol,0,H7,[],0,3,0,0,["ns",A$q(AQD)],AIP,0,BU,[],0,3,0,0,0,VH,0,EM,[],0,3,0,0,0,M7,0,B,[BX],3,3,0,0,0,AFI,0,B,[M7],0,3,0,0,["bn",A$o(AVr)],AFJ,0,B,[M7],0,3,0,0,["bn",A$o(AO8)],IH,0,B,[],1,3,0,0,0,ABJ,0,B,[],3,3,0,0,0,Mc,0,IH,[CI,Kj,KV,ABJ],1,3,0,0,0,NP,0,IH,[CI],1,3,0,0,0,Je,
0,B,[],0,3,0,HM,0,P4,0,CA,[],0,3,0,0,["bV",A$n(ASY),"cr",A$p(ARO)],Ie,0,CA,[],1,3,0,0,["cr",A$p(AHU)],Cq,0,Ie,[],1,3,0,0,["bV",A$n(AQx),"cr",A$p(I$),"cM",A$o(QQ)],Fs,0,B,[],3,3,0,0,0,Ke,0,B,[],3,3,0,0,0,E1,0,B,[],3,3,0,0,0]);
$rt_metadata([Lu,"Diff0",11,Cq,[CJ,Fs,Ke,E1,EZ,FQ,Gf],0,3,[0,0,0],0,["fB",A$p(A6t),"cM",A$o(AVb),"bV",A$n(A2A),"hH",A$n(A1y),"qX",A$n(AVA),"o8",A$n(A2u),"oC",A$o(AWg),"k8",A$o(A3s),"gx",A$o(APO),"cr",A$p(ASr),"ek",A$o(AOq),"b3",A$o(A3R),"cW",A$q(A1B),"cE",A$p(ATp),"d1",A$p(A4n),"dZ",A$q(AUL),"cb",A$n(A14)],AIY,"DiffDemoJs",11,Lu,[],0,3,[0,0,0],0,["hH",A$n(ATA)],AJm,0,B,[],0,3,0,0,0,ALI,0,B,[BX],1,3,0,0,0,LB,0,Mc,[],1,0,0,0,0,AHD,0,LB,[],0,0,0,0,0,L6,0,B,[],1,3,0,0,0,OT,0,B,[],0,3,0,0,0,AGt,0,B,[],0,3,0,0,0,JD,
0,B,[BX],3,3,0,0,0,Yd,0,B,[JD],0,3,0,0,["bn",A$o(AQJ)],Yc,0,B,[JD],0,3,0,0,["bn",A$o(AT8)],Ya,0,B,[Ch],0,3,0,0,["bn",A$o(AUA)],X_,0,B,[Ch],0,3,0,0,["bn",A$o(AZG)],W,0,B,[],3,3,0,0,0,UA,0,B,[W],0,3,0,0,["g",A$o(A60)],UC,0,B,[W],0,3,0,0,["g",A$o(A19)],VX,0,B,[BD],0,3,0,0,["bb",A$o(AWw)],VW,0,B,[BD],0,3,0,0,["bb",A$o(AN$)],VT,0,B,[BD],0,3,0,0,["bb",A$o(A0n)],VS,0,B,[BD],0,3,0,0,["bb",A$o(A3q)],VV,0,B,[BD],0,3,0,0,["bb",A$o(AQr)],VU,0,B,[BD],0,3,0,0,["bb",A$o(AXS)],V0,0,B,[BD],0,3,0,0,["bb",A$o(AP6)],VZ,0,B,[BD],
0,3,0,0,["bb",A$o(ASQ)],V2,0,B,[BD],0,3,0,0,["bb",A$o(A4Z)],V1,0,B,[BD],0,3,0,0,["bb",A$o(ANQ)],ACz,0,B,[BD],0,3,0,0,["bb",A$o(AN4)],ACy,0,B,[BD],0,3,0,0,["bb",A$o(A2d)],ACx,0,B,[BD],0,3,0,0,["bb",A$o(ATR)],ACj,0,B,[BD],0,3,0,0,["bb",A$o(AQN)],ACi,0,B,[BD],0,3,0,0,["bb",A$o(AX6)],ACg,0,B,[BD],0,3,0,0,["bb",A$o(A55)],ACf,0,B,[BD],0,3,0,0,["bb",A$o(AS0)],ACe,0,B,[BD],0,3,0,0,["bb",A$o(A41)],ACd,0,B,[BD],0,3,0,0,["bb",A$o(ANI)],ACc,0,B,[BD],0,3,0,0,["bb",A$o(A4O)],ACn,0,B,[BD],0,3,0,0,["bb",A$o(A33)],ACm,0,B,[BD],
0,3,0,0,["bb",A$o(APA)],ACl,0,B,[BD],0,3,0,0,["bb",A$o(A1i)],ACk,0,B,[BD],0,3,0,0,["bb",A$o(ARJ)],ACs,0,B,[BD],0,3,0,0,["bb",A$o(ARK)],ACr,0,B,[BD],0,3,0,0,["bb",A$o(AYM)],ACq,0,B,[BD],0,3,0,0,["bb",A$o(APP)],ACp,0,B,[BD],0,3,0,0,["bb",A$o(A31)],AEZ,0,B,[],0,0,0,0,0,IK,0,B,[],0,3,0,0,0,Re,0,IK,[],0,3,0,0,0,AIZ,0,B,[],0,3,0,0,0,Pv,0,IK,[],0,3,0,0,0]);
$rt_metadata([UH,0,B,[BX],3,3,0,0,0,Qi,0,B,[UH],0,3,0,0,["NC",A$o(A2f)],ADM,0,B,[W],0,3,0,0,["g",A$o(OV)],AE6,0,NP,[],0,0,0,0,0,CH,0,B,[Dt],0,3,0,0,["bZ",A$n(AVc),"il",A$n(A3g),"d0",A$q(Ko),"dY",A$o(ANg),"cM",A$o(AZx),"so",A$o(AST),"pD",A$o(AW4),"l7",A$p(A4C),"kK",A$n(AW_),"cW",A$q(ARE),"cE",A$p(APe),"d1",A$p(ATE),"b3",A$o(AWO),"dZ",A$q(A4s)],AG_,0,CH,[],0,3,0,0,["dY",A$o(AIx)],AHH,0,B,[],0,3,0,0,0,Fo,0,B,[Cj],3,3,0,0,["xA",A$n(A3i),"vK",A$n(AQU),"fB",A$p(ANO),"AL",A$n(AXM)],R1,0,B,[],3,0,0,0,0,M4,0,B,[Fo],
3,3,0,0,["xA",A$n(A3i),"vK",A$n(AQU),"fB",A$p(ANO),"AL",A$n(AXM)],AHe,"EditorComponent",11,CH,[Fo,CJ,Ke,R1,M4],0,3,[0,0,0],0,["d0",A$q(M6),"l7",A$p(AUj),"p8",A$p(A61),"vK",A$n(A0I),"xA",A$n(AYD),"qX",A$n(J5),"o8",A$n(K5),"oC",A$o(I5),"k8",A$o(AU1),"kK",A$n(MA),"bZ",A$n(AY3),"cM",A$o(Md),"qW",A$o(ALk),"il",A$n(AI8),"qd",A$n(AVY),"dY",A$o(A2J),"lO",A$n(U1),"k1",A$n(U0),"h8",A$o(AUH),"lo",A$n(AUv),"mu",A$n(AXJ),"dZ",A$q(Mu),"d1",A$p(Ud),"cE",A$p(XM),"cW",A$q(PS),"b3",A$o(YT),"bl",A$o(A6B),"fB",A$p(JJ),"AL",A$n(AWU),
"M",A$n(AZ_)],AJ9,0,B,[],0,3,0,0,0,U$,0,B,[W],0,3,0,0,["g",A$o(AOC)],U_,0,B,[W],0,3,0,0,["g",A$o(A5w)],Va,"Diff0$<init>$lambda$_0_2",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(A18)],GQ,"CtrlO",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(ATk)],U8,0,B,[W],0,3,0,0,["g",A$o(ATr)],U9,"Diff0$<init>$lambda$_0_4",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(A56)],CP,0,B,[],3,3,0,0,0,AFj,"WindowManager",25,B,[CJ,CP],0,3,[0,0,0],0,["b3",A$o(AYg),"cW",A$q(APm),"cE",A$p(ARG),"d1",A$p(A6v),"e1",A$p(A1Z)],UN,"UiContext",24,B,[FQ,Gf],0,3,[0,0,0],0,["fB",
A$p(A5o),"cb",A$n(A3h)],XD,"WindowScene$<init>$lambda$_1_0",11,B,[EZ],0,3,[0,0,0],0,["dZ",A$q(A6o)],XC,"WindowScene$<init>$lambda$_1_1",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(APo)],AG3,0,B,[],0,3,0,0,0,AFG,0,B,[],0,3,0,0,0,AFw,0,B,[],0,3,0,0,0,FK,0,B,[Dt],0,3,0,0,0,AJB,0,B,[],0,3,0,0,0,AG2,0,B,[Dt],0,3,0,0,0,YO,0,B,[W],0,3,0,0,0,YN,0,B,[W],0,3,0,0,["g",A$o(AOQ)],YM,0,B,[W],0,3,0,0,["g",A$o(AN6)],AMk,0,B,[],0,3,0,0,0,YL,0,B,[T],0,3,0,0,["e",A$n(AYk)],YS,0,B,[T],0,3,0,0,["e",A$n(A0P)],YR,0,B,[T],0,3,0,0,["e",A$n(A7E)],YQ,
0,B,[T],0,3,0,0,["e",A$n(ASI)],YP,0,B,[T],0,3,0,0,["e",A$n(AUB)],YK,0,B,[T],0,3,0,0,["e",A$n(A63)],V$,0,B,[T],0,3,0,0,["e",A$n(ASL)],V_,0,B,[T],0,3,0,0,["e",A$n(A3X)],AIe,0,B,[BX],1,3,0,0,0,N9,0,B,[],4,3,0,A1P,0,AGA,0,B,[],3,3,0,0,0,ABx,"Scene1$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AUf)],ABw,"Scene1$<init>$lambda$_0_1",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AXN)],UZ,"Window",25,B,[],0,3,[0,0,0],0,0,KW,0,B,[],0,3,0,0,0,FE,0,B,[],0,3,0,0,0,N7,0,FE,[],0,3,0,0,0]);
$rt_metadata([ACv,0,FE,[],0,3,0,0,0,AAe,0,FE,[],0,3,0,0,0,Gy,0,B,[],3,3,0,0,0,TG,0,B,[],3,3,0,0,0,B4,"V4f",30,B,[],0,3,[0,0,0],0,["bT",A$o(AXy),"M",A$n(APn)],JF,0,B,[],3,3,0,0,0,AKt,0,EF,[Ej,C3,JF],0,3,0,0,["qm",A$o(A1W),"jc",A$o(BI),"dc",A$n(A3B),"qp",A$o(BA),"o9",A$p(ALB),"mT",A$o(E2),"rE",A$o(AI1),"jO",A$n(I3),"vC",A$p(AKG),"fJ",A$o(FL),"M",A$n(AMp)],Mb,0,B,[],0,3,0,0,0,I0,"GL$Texture",10,B,[Dt],0,3,[AKA,0,"Texture"],0,["bZ",A$n(AIn)],Z6,0,B,[],3,0,0,0,0,Ps,0,B,[],3,3,0,0,0,AAn,"UiContext$<init>$lambda$_0_0",
24,B,[T],0,3,[0,0,0],0,["e",A$n(A1p)],AAm,"UiContext$<init>$lambda$_0_1",24,B,[T],0,3,[0,0,0],0,["e",A$n(AX5)],AM8,0,B,[],0,3,0,0,0,UL,0,B,[],0,3,0,0,0,Hp,0,B,[],1,3,0,0,0,ABh,0,Hp,[],0,3,0,0,["vo",A$o(Cg)],HJ,"FsItem",10,B,[],3,3,0,0,0,JH,0,B,[HJ],3,3,0,0,0,Ma,"JsFileHandle",28,B,[JH],0,3,[0,0,0],0,["u",A$n(D9),"uq",A$n(AOr),"M",A$n(Od)],J$,0,B,[HJ],3,3,0,0,0,OP,"JsDirectoryHandle",28,B,[J$],0,0,[0,0,0],0,["u",A$n(JV),"uq",A$n(A6p),"M",A$n(Jk)],AEu,0,B,[],3,3,0,0,0,ALZ,"JsArrayView",28,B,[AEu],0,3,[0,0,0],
0,["M",A$n(AZX)],ABr,0,B,[Ps],0,3,0,0,0,HH,0,B,[CI],0,3,0,0,0,Ou,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DO,"CodeLine",11,B,[],0,3,[0,0,0],0,["M",A$n(A3S)],ZM,0,B,[],0,3,0,0,0,LY,0,Es,[Ej,C3],0,3,0,0,0,V8,0,B,[Ch],0,3,0,0,["bn",A$o(A1Y)],CB,"CodeElement",11,B,[],0,3,[0,0,0],0,["M",A$n(AHl)],Or,0,LY,[],0,3,0,0,0,ABo,0,B,[],0,3,0,0,0,ANr,"Interval",17,B,[CI],0,3,[0,0,0],0,["bT",A$o(AVM),"M",A$n(AKg),"m1",A$o(AZw)],Wl,0,B,[GE],0,3,0,0,["qV",A$p(ASO)],AAS,"IntervalNode",19,B,[],0,3,[0,0,0],0,["M",A$n(AOo),"bT",
A$o(APa)],JZ,0,B,[],3,3,0,0,0,Hn,0,B,[JZ,Ej],0,0,0,0,["bT",A$o(AZZ),"M",A$n(APR)],Im,"HashMap$HashEntry",1,Hn,[],0,0,[LY,0,0],0,0,Oo,0,L6,[],1,3,0,0,0,Ry,0,Oo,[],0,3,0,0,0,JG,0,EM,[],0,3,0,0,0,PK,0,B,[JD],0,3,0,0,["bn",A$o(AXn)],PM,0,B,[Ch],0,3,0,0,["bn",A$o(AWK)],PL,0,B,[Ch],0,3,0,0,["bn",A$o(AYP)],Ju,0,B,[],0,3,0,0,0,K7,0,Cq,[Fs,E1],0,3,0,0,["gx",A$o(A1w),"cM",A$o(A5s),"bV",A$n(ARo),"hH",A$n(A6R),"cr",A$p(ANP),"ek",A$o(A0l)],AKa,0,CA,[],0,3,0,0,["cM",A$o(AOa),"bV",A$n(AP9),"cr",A$p(ASv)],ACR,0,CA,[],0,3,0,
0,["cM",A$o(AT5),"bV",A$n(AZm),"cr",A$p(A0H)]]);
$rt_metadata([YW,"ToolbarDemo",16,Cq,[CJ,CP],0,3,[0,0,0],0,["cE",A$p(AWy),"d1",A$p(AOm),"e1",A$p(AR0),"cr",A$p(AQK),"bV",A$n(A0f),"b3",A$o(ASx),"cW",A$q(AOR)],ACh,"FindUsagesDemo",16,Cq,[CP],0,3,[0,0,0],0,["e1",A$p(APY),"cr",A$p(AO6)],Yi,"RegionTextureAllocatorDemo",11,Ie,[CJ],0,3,[0,0,0],0,["b3",A$o(A11),"cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"bV",A$n(A4Y),"cM",A$o(AN5)],TW,0,CA,[],0,3,0,0,["bV",A$n(ANN),"cr",A$p(AX1)],Dx,0,CA,[],0,3,0,0,["bV",A$n(ABI),"cr",A$p(TR)],Sa,"SelectFileTest",11,Dx,[],0,3,0,0,
0,YD,0,Cq,[],0,3,0,0,0,XW,"RenderTexture",11,Dx,[],0,3,0,0,["cM",A$o(ARD),"bV",A$n(AZ5),"cr",A$p(A6L)],TU,"ScissorDemo",11,Dx,[],0,3,0,0,["bV",A$n(A7q),"cr",A$p(ARk)],AB4,0,CA,[],0,3,0,0,["bV",A$n(AWN),"cr",A$p(A0h),"cM",A$o(A4E)],KZ,"ClipboardTest",11,Dx,[CJ],0,3,[0,0,0],0,["b3",A$o(A11),"cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(ASl)],TD,"CodiconDemo",11,Dx,[],0,3,0,0,["bV",A$n(AXx)],Hv,0,CA,[CJ],1,3,0,0,["b3",A$o(A11),"cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"bV",A$n(AG9)],Uz,"LineShaderDemo1",11,Hv,[],0,3,[0,0,0],
0,["cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"cr",A$p(A4p),"b3",A$o(A5p)],Uy,"LineShaderDemo2",11,Hv,[],0,3,[0,0,0],0,["cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"b3",A$o(A64),"bV",A$n(APU),"cr",A$p(AOy)],Xq,"WindowsDemo",13,Cq,[CP],0,3,[0,0,0],0,["e1",A$p(ARZ)],ED,"WindowDemo",24,Cq,[CP],0,3,[0,0,0],0,["jX",A$n(AZM),"p$",A$n(ASF),"ot",A$o(AKJ),"e1",A$p(A47)],Rn,"EditorInViewDemo",11,ED,[CP,Fs,E1],0,3,[0,0,0],0,["jX",A$n(AO$),"p$",A$n(AYp),"ot",A$o(A66),"ek",A$o(AVD),"gx",A$o(AUX)],Yn,"UiContext$1",24,B,[CJ],
0,0,[UN,0,0],0,["cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"b3",A$o(A4V)],Qv,"DiffMiddleDemo",29,ED,[CP],0,3,[0,0,0],0,["jX",A$n(A0C)],U4,"FolderDiff",29,Cq,[CP],0,3,[0,0,0],0,["e1",A$p(AXf)],AAZ,"FolderTransferDemo",29,ED,[CP],0,3,[0,0,0],0,["jX",A$n(ARp)],Sb,"EditorWindowDemo",11,Cq,[CP],0,3,[0,0,0],0,["e1",A$p(A04)],AEg,"SinDemo",11,CA,[CJ],0,3,[0,0,0],0,["b3",A$o(A11),"cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"cr",A$p(A6Y),"bV",A$n(A1o),"cM",A$o(AVp)],SQ,"ProjectViewDemo",11,Cq,[CP],0,3,[0,0,0],0,["e1",A$p(A0j)],AAc,
"FileViewDemo",24,ED,[CP],0,3,[0,0,0],0,["jX",A$n(A28),"ot",A$o(A4y)],PB,0,K7,[],0,3,0,0,["hH",A$n(AZp)],KM,0,B,[],0,3,0,0,0,AHA,0,B,[],0,3,0,0,0,AGz,0,B,[],3,3,0,0,0,AJ6,0,B,[],0,3,0,0,0,AH2,0,B,[],3,3,0,0,0,AJM,0,B,[],0,3,0,0,0,Nd,0,B,[JZ,C3],0,3,0,0,0,Li,0,Nd,[],0,0,0,0,0,ANh,0,B,[],0,3,0,0,0,ZT,"Editor0$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AWQ)],ZR,0,B,[W],0,3,0,0,["g",A$o(A0T)],ZS,"Editor0$<init>$lambda$_0_2",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AV1)],AJH,"TextRect",11,KW,[],0,3,[0,0,0],0,
0,U5,"DemoScene1$MyInputListener",11,B,[CJ],0,0,[AKa,0,"MyInputListener"],0,["b3",A$o(AZn),"cW",A$q(ANY),"cE",A$p(AZg),"d1",A$p(AYH)],AAk,"DemoScene1$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(A01)],AAj,"DemoScene1$<init>$lambda$_0_1",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AQV)],AAi,"DemoScene1$<init>$lambda$_0_2",11,B,[FQ],0,3,[0,0,0],0,["fB",A$p(A16)],AAh,"DemoScene1$<init>$lambda$_0_3",11,B,[T],0,3,[0,0,0],0,["e",A$n(AYe)],AAg,"DemoScene1$<init>$lambda$_0_4",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AUb)],AAf,
"DemoScene1$<init>$lambda$_0_5",11,B,[EZ],0,3,[0,0,0],0,["dZ",A$q(A5T)],HO,0,B4,[],0,3,0,0,0,AIF,0,B,[],3,3,0,0,0,XU,"CleartypeColors$MyInputListener",11,B,[CJ],0,0,[ACR,0,"MyInputListener"],0,["b3",A$o(A11),"cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(AQv)]]);
$rt_metadata([XQ,0,B,[],0,3,0,0,0,AH3,"Toolbar",24,B,[],0,3,[0,0,0],0,0,AK0,0,B,[],0,3,0,0,["bT",A$o(A44)],ADi,"ToolbarDemo$<init>$lambda$_0_0",16,B,[Cj],0,3,[0,0,0],0,["bl",A$o(ATc)],ADe,"ToolbarDemo$<init>$lambda$_0_1",16,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AVI)],ADf,0,B,[T],0,3,0,0,["e",A$n(A7w)],ADg,0,B,[T],0,3,0,0,["e",A$n(AOK)],By,"ToolbarItem",24,B,[],0,3,[0,0,0],0,0,VM,"FindUsagesDemo$<init>$lambda$_0_0",16,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AXz)],VN,"FindUsagesDemo$<init>$lambda$_0_1",16,B,[CS],0,3,[0,0,0],
0,["bQ",A$o(AOn)],AJn,0,B,[],0,3,0,0,0,PU,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",11,B,[CP],0,3,[0,0,0],0,["e1",A$p(ATV)],PT,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(ARF)],ABc,0,B,[],3,3,0,0,0,AKb,0,B,[ABc],0,3,0,0,0,X5,"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CJ],0,0,[TW,0,"LineNumbersInputListener"],0,["cW",A$q(A4l),"cE",A$p(AYr),"d1",A$p(AOi),"b3",A$o(A0v)],ABy,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[EZ],0,3,[0,0,0],0,["dZ",
A$q(ATT)],RH,"SelectFileTest$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AQS)],SB,"WorkerTest$<init>$lambda$_0_0",14,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AXA)],SA,0,B,[W],0,3,0,0,["g",A$o(A4I)],ADs,"RenderTexture$MyInputListener",11,B,[CJ],0,0,[XW,0,"MyInputListener"],0,["d1",A$p(AOm),"cW",A$q(A4l),"b3",A$o(A3Q),"cE",A$p(AXm)],AH_,0,B,[],0,3,0,0,0,Dm,0,B,[],3,3,0,F2,0,ZV,"TextureRegionTestScene$MListener",11,B,[CJ],0,0,[AB4,0,"MListener"],0,["cW",A$q(A4l),"cE",A$p(ARS),"d1",A$p(AYE),"b3",A$o(AQA)],Xi,"TextureRegionTestScene$<init>$lambda$_0_0",
11,B,[EZ],0,3,[0,0,0],0,["dZ",A$q(A5Q)],AE3,"ClipboardTest$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(ART)],AE2,"ClipboardTest$<init>$lambda$_0_1",11,B,[FQ],0,3,[0,0,0],0,["fB",A$p(A2c)],AE1,"ClipboardTest$<init>$lambda$_0_2",11,B,[FQ],0,3,[0,0,0],0,["fB",A$p(APT)],AE0,"ClipboardTest$<init>$lambda$_0_3",11,B,[Gf],0,3,[0,0,0],0,["cb",A$n(AS5)],AE4,"ClipboardTest$<init>$lambda$_0_4",11,B,[Gf],0,3,[0,0,0],0,["cb",A$n(A5j)],Ti,"CodiconDemo$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(APG)],Qj,
"WindowsDemo$<init>$lambda$_0_0",13,B,[Cj],0,3,[0,0,0],0,["bl",A$o(A3b)],Ql,"WindowsDemo$<init>$lambda$_0_1",13,B,[CS],0,3,[0,0,0],0,["bQ",A$o(A1j)],Qm,0,B,[W],0,3,0,0,["g",A$o(A3O)],Qn,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(A5G)],VR,"DiffMiddleDemo$<init>$lambda$_0_0",29,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AUO)],VQ,"DiffMiddleDemo$<init>$lambda$_0_1",29,B,[Cj],0,3,[0,0,0],0,["bl",A$o(A5J)],ACB,"FolderDiff$<init>$lambda$_0_0",29,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AUN)],RJ,"FolderTransferDemo$<init>$lambda$_0_0",
29,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AUz)],RI,"FolderTransferDemo$<init>$lambda$_0_1",29,B,[Cj],0,3,[0,0,0],0,["bl",A$o(A1N)],QT,0,B,[W],0,3,0,0,["g",A$o(A5V)],QS,"EditorWindowDemo$<init>$lambda$_0_1",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(A0w)],RQ,"SinDemo$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AOz)],YX,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CS],0,3,[0,0,0],0,["bQ",A$o(AQd)],AI$,0,B,[],3,3,0,0,0,Ds,0,B,[],3,3,0,AQH,0,Cu,0,CE,[],12,3,0,Vd,0,K1,0,B,[],0,3,0,0,0,Jw,0,B,[],0,3,0,0,0,ALU,0,B,[],0,3,0,
0,0]);
$rt_metadata([DZ,0,B,[],3,3,0,AYo,0,Zp,0,B,[BX],3,3,0,0,0,ZC,0,B,[Zp],0,3,0,0,["C6",A$p(A0X)],Zq,0,B,[BX],3,3,0,0,0,ZA,0,B,[Zq],0,3,0,0,["C6",A$p(A1K)],AGU,0,B,[],0,3,0,0,0,AJ_,0,B,[BX],3,3,0,0,0,Wy,0,B,[],0,3,0,0,0,D5,0,B,[],3,3,0,A2O,0,Ir,0,B,[],3,3,0,0,0,Q3,0,B,[Ir],0,3,0,0,["xW",A$q(A4x)],Q4,0,B,[Ir],0,3,0,0,0,U7,0,B,[W],0,3,0,0,["g",A$o(A3n)],QF,0,B,[W],0,3,0,0,["g",A$o(AQp)],QE,0,B,[W],0,3,0,0,["g",A$o(AO0)],QB,0,B,[W],0,3,0,0,["g",A$o(AN7)],Qz,0,B,[W],0,3,0,0,["g",A$o(A65)],AJR,0,B,[],0,3,0,0,0,Wb,0,
B,[W],0,3,0,0,["g",A$o(A1L)],ADV,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bl",A$o(AYa)],AMP,0,B,[],0,3,0,0,["bT",A$o(AZQ)],JE,0,B,[],0,3,0,0,0,KX,0,B,[],4,3,0,0,0,AKC,0,B,[],0,3,0,0,0,Cy,0,CE,[],12,3,0,AG7,0,ANn,0,B,[],0,3,0,0,0,AHp,0,B,[BX],4,3,0,0,0,ANw,0,B,[],0,3,0,0,0,AF_,0,B,[],3,3,0,0,0,C9,0,B,[BX],1,3,0,0,0,AMb,0,C9,[],1,3,0,0,0,AMA,0,C9,[],1,3,0,0,0,AKR,0,C9,[],1,3,0,0,0,AK2,0,C9,[],1,3,0,0,0,AMS,0,C9,[],1,3,0,0,0,WJ,0,B,[T],0,3,0,0,["e",A$n(ASd)],Ib,0,CE,[],12,3,0,AH6,0,Qr,0,B,
[BD],0,3,0,0,["bb",A$o(AYF)],AA5,0,B,[],0,3,0,0,0,AKy,0,B,[],0,3,0,0,0,Ij,0,B,[],0,3,0,0,0,AHf,0,B,[],4,3,0,0,0,UJ,0,B,[],0,0,0,0,0,AKE,0,B,[],3,3,0,0,0,ADW,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[EZ],0,3,[0,0,0],0,["dZ",A$q(AYh)],Y4,"ScissorDemo$1",11,B,[CJ],0,0,[TU,0,0],0,["cE",A$p(AWy),"d1",A$p(AOm),"cW",A$q(A4l),"b3",A$o(A7z)],AHn,0,B,[BX],1,3,0,0,0,AI5,"PopupMenu",24,B,[CP,Fo,Dt],0,3,[0,0,0],0,["xA",A$n(A3i),"vK",A$n(AQU),"fB",A$p(ANO),"AL",A$n(AXM),"e1",A$p(A7a),"bl",A$o(ASU),"bZ",A$n(AUV)],Ys,
0,B,[W],0,3,0,0,["g",A$o(ASB)],Wn,0,B,[W],0,3,0,0,["g",A$o(A6O)]]);
$rt_metadata([R2,0,B,[W],0,3,0,0,["g",A$o(AY_)],PD,0,B,[CO],0,3,0,0,["cb",A$n(AQ4)],AL8,0,B,[],3,3,0,0,0,Mz,0,B,[],3,3,0,0,0,R8,0,B,[Mz],0,3,0,0,["AF",A$o(AZy)],Qg,0,B,[BD],0,3,0,0,["bb",A$o(A5Y)],AIu,0,B,[],0,3,0,0,0,RK,"LineNumbersTexture",11,B,[Dt],0,3,[0,0,0],0,0,AGd,0,B,[],0,3,0,0,0,Vp,0,B,[],0,3,0,0,0,JN,"DiffRange",15,B,[],0,3,[0,0,0],0,0,TE,0,B,[],3,3,0,0,0,AD2,0,B,[W],0,3,0,0,["g",A$o(AZz)],GD,0,JG,[],0,3,0,0,0,AFe,0,FP,[],0,3,0,0,0,AFh,0,B,[W],0,3,0,0,["g",A$o(AX_)],AGD,0,B,[],3,3,0,0,0,VA,0,B,[W],
0,3,0,0,["g",A$o(A6n)],W$,0,B,[T],0,3,0,0,["e",A$n(A4P)],EB,0,B,[Fs],1,3,0,0,0,AAA,"FolderDiffWindow",29,EB,[],0,3,[0,0,0],0,["bZ",A$n(AO_),"mU",A$o(A1r)],WB,0,B,[CO],0,3,0,0,["cb",A$n(AXs)],ADJ,"EditorWindow",11,EB,[Cj],0,3,[0,0,0],0,["ek",A$o(ANA),"bZ",A$n(APi),"mU",A$o(A0_),"bl",A$o(A22)],SZ,0,B,[CO],0,3,0,0,["cb",A$n(ATK)],Lz,0,B,[],3,3,0,0,["sr",A$p(AOX)],Mo,0,EB,[Lz],0,3,0,0,["mU",A$o(AZB),"bZ",A$n(A2a),"ek",A$o(A0r),"AY",A$o(A0p),"yC",A$o(AVL),"v4",A$o(A3E),"sr",A$p(A26)],AEQ,0,B,[CO],0,3,0,0,["cb",A$n(AXk)],AFz,
0,DH,[CI],0,3,0,0,0,GX,0,B,[],0,0,0,0,0,Kd,0,B,[],4,3,0,0,0,Vu,0,B,[],0,3,0,0,0,O$,0,B,[],1,3,0,0,0,AEs,"Pos",18,B,[CI],0,3,[0,0,0],0,["bT",A$o(AN8),"qI",A$n(AU_),"M",A$n(AOG),"m1",A$o(A4a)],AHx,0,C9,[],1,3,0,0,0,V7,0,B,[T],0,3,0,0,["e",A$n(AO5)],AFU,0,B,[],3,3,0,0,0,AAN,0,B,[T],0,3,0,0,["e",A$n(AWh)],AAM,0,B,[T],0,3,0,0,["e",A$n(A2o)],AAP,0,B,[T],0,3,0,0,["e",A$n(A3V)],AAO,0,B,[T],0,3,0,0,["e",A$n(AWd)],YC,0,B,[T],0,3,0,0,["e",A$n(A6j)],YA,0,B,[T],0,3,0,0,["e",A$n(AQG)],Yz,0,B,[T],0,3,0,0,["e",A$n(AOx)],YB,
0,B,[T],0,3,0,0,["e",A$n(A7A)],Zr,0,B,[T],0,3,0,0,["e",A$n(ASZ)],S3,0,B,[T],0,3,0,0,["e",A$n(A2H)],AAo,0,B,[W],0,3,0,0,["g",A$o(AYT)],Ss,0,B,[W],0,3,0,0,["g",A$o(A2_)],Ip,0,CH,[],1,3,0,0,["bZ",A$n(A3d),"dY",A$o(ATB),"cM",A$o(AYC),"d0",A$q(AP1),"cW",A$q(A54),"cE",A$p(AWf),"d1",A$p(A6e),"b3",A$o(A6G),"dZ",A$q(AQE),"kK",A$n(A6r)],IN,0,Ip,[],1,0,0,0,["Dc",A$n(ASH)]]);
$rt_metadata([AHE,0,IN,[Fs],0,0,0,0,0,FH,0,CH,[],0,3,0,0,0,Sm,0,FH,[Fo],0,3,0,0,["xA",A$n(A3i),"vK",A$n(AQU),"fB",A$p(ANO),"AL",A$n(AXM),"bZ",A$n(A6l),"l7",A$p(A0e),"dY",A$o(AYq),"pD",A$o(A3$),"so",A$o(A5k),"b3",A$o(ASK),"cE",A$p(AQM),"cW",A$q(AU2),"bl",A$o(A5x)],Wu,0,B,[T],0,3,0,0,["e",A$n(AW6)],AG6,0,CH,[],0,3,0,0,["bZ",A$n(AVN),"d0",A$q(ARg),"dY",A$o(A4F),"cW",A$q(AWc),"cE",A$p(AVQ),"d1",A$p(ATY),"b3",A$o(ATI),"dZ",A$q(A0E),"il",A$n(AJK)],AFr,0,B,[W],0,3,0,0,["g",A$o(AP2)],AFt,0,B,[W],0,3,0,0,["g",A$o(AN9)],Q5,
0,FH,[],0,3,0,0,["il",A$n(AXc),"pD",A$o(A4e),"dY",A$o(AXv),"cE",A$p(ATg)],AFs,0,B,[T],0,3,0,0,["e",A$n(AV5)],VI,0,CH,[],0,3,0,0,0,AFP,0,B,[],0,3,0,0,0,HP,0,B,[],0,3,0,0,0,Da,"FileTreeNode",24,HP,[],0,3,[0,0,0],0,0,TP,0,B,[T],0,3,0,0,["e",A$n(AZl)],TN,0,B,[T],0,3,0,0,["e",A$n(AXW)],TO,0,B,[T],0,3,0,0,["e",A$n(A1A)],TM,0,B,[T],0,3,0,0,["e",A$n(AV2)],AEX,0,B,[T],0,3,0,0,["e",A$n(ARM)],AEW,0,B,[T],0,3,0,0,["e",A$n(AV$)],RW,0,Ip,[E1],0,3,0,0,["Dc",A$n(AR9),"il",A$n(A1m)],AB_,0,B,[T],0,3,0,0,["e",A$n(AQa)],AB$,0,
B,[T],0,3,0,0,["e",A$n(AUM)],ACa,0,B,[T],0,3,0,0,["e",A$n(A20)],ABA,0,DH,[CI],0,3,0,0,0,AFS,0,B,[T],0,3,0,0,["e",A$n(A1_)],YV,0,B,[T],0,3,0,0,["e",A$n(AY0)],AC_,0,B,[],0,3,0,0,0,KD,0,B,[],0,3,0,0,0,Pj,0,B,[],3,3,0,0,0,L2,0,FH,[Fo],0,3,0,0,["xA",A$n(A3i),"vK",A$n(AQU),"AL",A$n(AXM),"bZ",A$n(AUu),"l7",A$p(AON),"dY",A$o(A2L),"cW",A$q(A5P),"cE",A$p(APL),"bl",A$o(ARi),"fB",A$p(A0R)],ALs,0,L2,[],0,3,0,0,["xA",A$n(A3i),"vK",A$n(AQU),"AL",A$n(AXM)],AHW,0,B,[M4],0,3,0,0,["xA",A$n(A3i),"vK",A$n(AQU),"fB",A$p(ANO),"AL",
A$n(AXM),"lO",A$n(AVZ),"k1",A$n(A51),"h8",A$o(AW2),"lo",A$n(ASw),"mu",A$n(AYJ),"p8",A$p(AS$),"qW",A$o(A23),"qd",A$n(Ng)],Qs,0,CH,[],0,3,0,0,["dY",A$o(AOc)],ADh,0,B,[],0,3,0,0,0,YF,0,B,[T],0,3,0,0,["e",A$n(AXh)],TQ,0,B,[T],0,3,0,0,["e",A$n(ASz)],QP,0,B,[W],0,3,0,0,["g",A$o(AOk)],QO,0,B,[W],0,3,0,0,["g",A$o(AOE)],Ru,0,B,[GE],0,3,0,0,["qV",A$p(APS)],UU,0,B,[],3,3,0,ARL,0,LQ,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,ANk,0,Hp,[],0,0,0,0,["vo",A$o(A7m)],HN,0,B,[],0,3,0,0,0,CV,0,Bt,[],0,3,0,0,0,AMn,0,FP,[],0,3,
0,0,0,ANq,0,B,[],0,3,0,0,0,PC,0,B,[W],0,3,0,0,["g",A$o(AXT)],AEm,0,B,[W],0,3,0,0,["g",A$o(A2W)],To,0,B,[W],0,3,0,0,["g",A$o(A0o)],Tn,0,B,[W],0,3,0,0,["g",A$o(A6k)]]);
$rt_metadata([AJz,0,B,[BD],0,3,0,0,0,AI9,0,B,[],0,3,0,0,0,AIE,0,B,[BD],0,3,0,0,0,Yu,0,B,[W],0,3,0,0,["g",A$o(APH)],Yt,0,B,[W],0,3,0,0,["g",A$o(AVC)],Fy,0,B,[],3,3,0,0,0,Yx,0,B,[Fy],0,0,0,0,["c0",A$n(Cb),"cl",A$n(Cc),"p5",A$n(AAV)],LV,0,O$,[],1,3,0,0,0,Uk,0,LV,[],0,3,0,0,0,AEV,0,B,[W],0,3,0,0,0,AC1,0,B,[W],0,3,0,0,["g",A$o(ATa)],W3,0,B,[W],0,3,0,0,["g",A$o(AWG)],PW,0,B,[CO],0,3,0,0,["cb",A$n(AU5)],PV,0,B,[CO],0,3,0,0,["cb",A$n(AZ9)],AB1,0,B,[CO],0,3,0,0,["cb",A$n(A3I)],Yk,0,B,[CO],0,3,0,0,["cb",A$n(A4v)],ABH,
0,B,[Ch],0,3,0,0,["bn",A$o(A6I)],AHB,0,B,[BX],1,3,0,0,0,AEk,0,B,[Ch],0,3,0,0,["bn",A$o(AQ0)],O1,0,BJ,[],0,3,0,0,0,ACN,0,B,[T],0,3,0,0,["e",A$n(ANH)],AGV,0,B,[],0,3,0,0,0,ACO,0,B,[T],0,3,0,0,["e",A$n(ARs)],S$,0,B,[T],0,3,0,0,["e",A$n(AU7)],S9,0,B,[T],0,3,0,0,["e",A$n(A0G)],Ta,0,B,[T],0,3,0,0,["e",A$n(A6i)],S_,0,B,[T],0,3,0,0,["e",A$n(AX3)],UD,0,B,[T],0,3,0,0,["e",A$n(AWA)],HA,"Diff",11,B,[],0,3,[0,0,0],0,0,AEo,0,B,[T],0,3,0,0,["e",A$n(A6P)],RD,0,B,[],0,3,0,0,0,XP,0,B,[T],0,3,0,0,["e",A$n(A0N)],XO,0,B,[DR],0,
3,0,0,0,AJy,0,B,[],0,3,0,0,0,DV,0,Bt,[],0,3,0,0,0,AI2,0,B,[],0,3,0,0,0,TS,0,Es,[Ej,C3],0,3,0,0,0,V3,0,B,[],0,3,0,0,0,VJ,0,B,[],0,3,0,0,0,X9,0,B,[DR],0,3,0,0,0,T7,0,B,[W],0,3,0,0,["g",A$o(AVE)],AFC,0,B,[Ch],0,3,0,0,["bn",A$o(A4W)],AFB,0,B,[Ch],0,3,0,0,["bn",A$o(AZ8)],AEY,0,B,[Ch],0,3,0,0,["bn",A$o(A07)],ZW,0,DH,[CI],0,3,0,0,0,KH,0,B,[],4,3,0,0,0,Ve,0,B,[T],0,3,0,0,["e",A$n(AOp)],Vf,0,B,[T],0,3,0,0,["e",A$n(AQC)],Vg,0,B,[T],0,3,0,0,["e",A$n(A6m)],Vh,0,B,[T],0,3,0,0,["e",A$n(AS1)]]);
$rt_metadata([Vi,0,B,[T],0,3,0,0,["e",A$n(AVk)],PJ,0,B,[Ch],0,3,0,0,["bn",A$o(A7D)],W6,0,B,[],3,3,0,A8B,0,Us,0,B,[Gy],0,3,0,0,["q1",A$p(AQ8)],ADB,0,B,[],0,3,0,0,0,UG,0,B,[CF],0,3,0,0,["cQ",A$o(AYs)],Sg,0,B,[T],0,3,0,0,["e",A$n(A2Z)],Vm,0,B,[Gy],0,3,0,0,["q1",A$p(AU6)],X2,0,B,[T],0,3,0,0,["e",A$n(A2U)],YE,0,B,[],0,3,0,0,0,Vq,0,B,[W],0,3,0,0,["g",A$o(A6Q)],S7,0,B,[T],0,3,0,0,["e",A$n(A1u)],AEC,0,B,[T],0,3,0,0,["e",A$n(AXd)],ZN,0,B,[],1,3,0,0,0,AAJ,0,B,[M5],3,3,0,0,0,Qe,0,B,[AAJ],3,3,0,0,0,F6,0,B,[Qe],1,3,0,0,
0,ABL,0,F6,[],0,3,0,0,0,Sq,0,B,[],3,3,0,0,0,PI,0,B,[W],0,3,0,0,0,AFp,0,B,[W],0,3,0,0,["g",A$o(AOP)],AHL,0,B,[],3,3,0,0,0,Kb,0,Hn,[],0,0,0,0,0,IG,0,Bt,[],0,3,0,0,0,Uc,0,B,[],0,3,0,0,0,ADD,0,B,[Ir],0,3,0,0,["xW",A$q(ASE)],AMt,0,B,[],0,3,0,0,0,Gk,"ScopeNode",21,B,[],0,3,[0,0,0],0,0,K$,"DeclNode",23,B,[],0,3,[0,0,0],0,["M",A$n(A4$),"bT",A$o(AL5)],Fn,"RefNode",22,B,[],0,3,[0,0,0],0,["M",A$n(AWR),"bT",A$o(AKu)],Io,0,B,[],3,3,0,0,0,Uu,0,B,[Io],0,3,0,0,["mr",A$q(A2N)],RM,"InferenceNode",21,B,[],0,3,[0,0,0],0,0,Uv,0,
B,[Io],0,3,0,0,["mr",A$q(A1k)],Jr,0,B,[C3,CI],0,3,0,0,0,Lr,0,B,[],3,3,0,0,0,S6,0,B,[Lr],0,3,0,0,0,NL,0,B,[Lr],3,3,0,0,0,AHM,0,B,[NL],0,3,0,0,0,Tt,0,B,[Io],0,3,0,0,["mr",A$q(A3j)],Ts,0,B,[DR],0,3,0,0,["bQ",A$o(AW0)],Tr,0,B,[DR],0,3,0,0,["bQ",A$o(AUW)],Tv,0,B,[Io],0,3,0,0,["mr",A$q(A2T)],R7,0,B,[W],0,3,0,0,["g",A$o(AY1)],AGl,0,B,[W],0,3,0,0,0,WT,0,B,[BD],0,3,0,0,0,F7,0,B,[],0,3,0,0,0,AKr,0,B,[],0,3,0,0,0,AGK,0,B,[],0,3,0,0,0,ANz,0,B,[],0,3,0,0,0]);
$rt_metadata([AFf,0,B,[T],0,3,0,0,["e",A$n(AYK)],AFg,0,B,[T],0,3,0,0,["e",A$n(A1t)],H$,"ExprRefNode",22,Fn,[],0,3,[0,0,0],0,["M",A$n(A2V)],KQ,"MethodCallNode",22,Fn,[],0,3,[0,0,0],0,["bT",A$o(A6q)],Xl,0,B,[W],0,3,0,0,["g",A$o(A3o)],JX,"QualifiedRefNode",22,Fn,[],0,3,[0,0,0],0,["M",A$n(ATJ),"bT",A$o(AYx)],Xm,0,B,[W],0,3,0,0,["g",A$o(AQQ)],AJw,0,B,[CI],0,3,0,0,["bT",A$o(AT2),"M",A$n(AL4)],Xb,0,B,[W],0,3,0,0,["g",A$o(AQ_)],Oq,"FakeNode",21,Gk,[],0,3,[0,0,0],0,0,LS,"MemberNode",21,Gk,[],0,3,[0,0,0],0,0,Wi,0,B,[W],
0,3,0,0,["g",A$o(AYN)],Q$,0,B,[W],0,3,0,0,["g",A$o(A2M)],Rd,0,B,[HZ],3,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],EH,0,FS,[Rd],1,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],N5,0,EH,[],1,0,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],VB,0,N5,[],0,0,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],OJ,0,Es,[],1,0,0,0,0,Vy,0,OJ,[],0,0,0,0,0,O4,0,EF,[JF],1,0,0,0,["fJ",A$o(AXV),"jO",A$n(AZ2),"mT",A$o(ATm),"qm",A$o(ASh)],Vz,0,O4,[],0,0,0,0,["fJ",A$o(AXV),"jc",A$o(ATt),"dc",A$n(ASy),"cj",A$n(AQh),"e6",A$n(AOt)],Vw,0,B,[Fy],0,0,0,0,["c0",A$n(AOb),"cl",A$n(A3G),
"p5",A$n(AVu)],ZL,0,B,[Fy],3,3,0,0,0,Vx,0,B,[ZL],0,0,0,0,0,Xu,0,B,[GE],0,3,0,0,0,So,0,B,[DR],0,3,0,0,["bQ",A$o(A7F)],AA4,0,B,[C3],4,3,0,0,0,ABK,0,B,[W],0,3,0,0,["g",A$o(AXq)],K3,0,DV,[],0,3,0,0,0,Ki,0,Bt,[],0,3,0,0,0,OW,0,Bt,[],0,3,0,0,0,ZG,0,B,[W],0,3,0,0,["g",A$o(A3H)],AJS,0,B,[W],0,3,0,0,0,R6,0,B,[Sq],0,3,0,0,0,WM,0,B,[W],0,3,0,0,["g",A$o(A1D)],AGq,0,B,[],0,3,0,0,0,AB2,0,B,[T],0,3,0,0,["e",A$n(AYL)],AD0,0,B,[DR],0,0,0,0,["bQ",A$o(AQw)],Ro,0,EH,[],0,0,0,0,["qm",A$o(A1W)],UY,0,EH,[],0,0,0,0,["fJ",A$o(AXV),
"qm",A$o(A1W)],Rq,0,FS,[],0,0,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],Xx,0,B,[W],0,3,0,0,["g",A$o(A0y)],Vk,0,B,[W],0,3,0,0,["g",A$o(A2m)],MX,"MethodNode",23,K$,[],0,3,[0,0,0],0,["bT",A$o(AY$)],Ua,0,B,[W],0,3,0,0,["g",A$o(AW3)],AHd,0,F6,[],0,3,0,0,0,ADT,0,B,[W],0,3,0,0,["g",A$o(A2e)],NM,"FileDiffWindow",29,EB,[Fo],0,3,[0,0,0],0,["xA",A$n(A3i),"vK",A$n(AQU),"fB",A$p(ANO),"AL",A$n(AXM),"ek",A$o(A42),"bZ",A$n(A57),"mU",A$o(AYW),"bl",A$o(A58)],Xy,0,B,[CO],0,3,0,0,["cb",A$n(A5u)],Q_,0,B,[CO],0,3,0,0,["cb",A$n(AQ9)]]);
$rt_metadata([XR,0,B,[CO],0,3,0,0,["cb",A$n(APJ)],P7,0,B,[W],0,3,0,0,["g",A$o(A7d)],Vr,0,B,[W],0,3,0,0,["g",A$o(A0K)],Qk,0,B,[W],0,3,0,0,["g",A$o(ATh)],ZZ,0,B,[W],0,3,0,0,["g",A$o(AV8)],XS,0,B,[],0,3,0,0,0,SI,0,B,[],0,3,0,0,0,BW,0,B,[],1,0,0,0,["cK",A$q(Jc),"cY",A$r(Jl),"jt",A$n(AZk),"M",A$n(AVe),"Y",A$o(AWo),"b_",A$o(A5R),"g$",A$n(A6J),"fh",A$n(K9)],U3,0,B,[W],0,3,0,0,["g",A$o(A62)],Wa,0,B,[Mz],0,3,0,0,["AF",A$o(N$)],V6,0,IN,[Fs],0,0,0,0,0,Xp,0,B,[T],0,3,0,0,["e",A$n(A1I)],Xo,0,B,[T],0,3,0,0,["e",A$n(ASP)],SH,
0,B,[T],0,3,0,0,["e",A$n(A0Z)],Y7,0,B,[W],0,3,0,0,["g",A$o(ATw)],ACt,0,B,[T],0,3,0,0,["e",A$n(AOM)],X4,0,B,[W],0,3,0,0,["g",A$o(A2l)],Xk,0,B,[W],0,3,0,0,["g",A$o(A7C)],C7,"FSet",2,BW,[],0,0,[0,0,0],Pk,["c",A$q(AOL),"u",A$n(ARv),"P",A$o(AO2)],Hw,0,B,[],0,0,0,0,0,KR,0,BU,[],0,3,0,0,0,PH,0,B,[W],0,3,0,0,["g",A$o(A5_)],S5,"NonCapFSet",2,C7,[],0,0,[0,0,0],0,["c",A$q(AYt),"u",A$n(AZT),"P",A$o(A4L)],AFO,"AheadFSet",2,C7,[],0,0,[0,0,0],0,["c",A$q(AZK),"u",A$n(A1S)],RO,"BehindFSet",2,C7,[],0,0,[0,0,0],0,["c",A$q(AO7),
"u",A$n(A5L)],TV,"AtomicFSet",2,C7,[],0,0,[0,0,0],0,["c",A$q(AYw),"u",A$n(AVH),"P",A$o(A3J)],Gs,"FinalSet",2,C7,[],0,0,[0,0,0],0,["c",A$q(AWC),"u",A$n(AZu)],Cf,0,BW,[],1,0,0,0,["c",A$q(A7i),"cm",A$n(A5r),"P",A$o(AR1)],AI6,"EmptySet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(A43),"cK",A$q(A0D),"cY",A$r(AZH),"u",A$n(ARw),"P",A$o(AYv)],B$,"JointSet",2,BW,[],0,0,[0,0,0],0,["c",A$q(ARd),"Y",A$o(AUm),"u",A$n(AR$),"b_",A$o(A2i),"P",A$o(AUR),"fh",A$n(APs)],K2,"NonCapJointSet",2,B$,[],0,0,[0,0,0],0,["c",A$q(AT_),"u",A$n(ASR),
"P",A$o(A4o)],En,"AtomicJointSet",2,K2,[],0,0,[0,0,0],0,["c",A$q(AZ6),"Y",A$o(A4g),"u",A$n(AOh)],XK,"PositiveLookAhead",2,En,[],0,0,[0,0,0],0,["c",A$q(AUk),"P",A$o(AWt),"u",A$n(A6E)],AEw,"NegativeLookAhead",2,En,[],0,0,[0,0,0],0,["c",A$q(AOZ),"P",A$o(A5v),"u",A$n(AQ$)],AA7,"PositiveLookBehind",2,En,[],0,0,[0,0,0],0,["c",A$q(APq),"P",A$o(A7y),"u",A$n(AT0)],Ul,"NegativeLookBehind",2,En,[],0,0,[0,0,0],0,["c",A$q(AX9),"P",A$o(A4B),"u",A$n(AO9)],Ik,"SingleSet",2,B$,[],0,0,[0,0,0],0,["c",A$q(AN_),"cK",A$q(ASW),"cY",
A$r(A4N),"b_",A$o(A2g),"g$",A$n(A3F),"fh",A$n(AW7)],Hy,0,B,[],1,0,0,0,0,Ba,0,Hy,[],1,0,0,Q6,["ej",A$n(AY6),"gk",A$n(AYI),"mz",A$n(A5m),"iR",A$n(A6D)],AGP,0,Ba,[],0,0,0,0,["p",A$o(Df),"ej",A$n(C_),"gk",A$n(A0z),"mz",A$n(AWe),"M",A$n(A2X),"iR",A$n(AQL)],Nn,0,Bt,[],0,3,0,0,0,Ez,0,BW,[],1,0,0,0,["b_",A$o(AVs),"P",A$o(A50),"fh",A$n(ATf)],Dh,"LeafQuantifierSet",2,Ez,[],0,0,[0,0,0],0,["c",A$q(AX$),"u",A$n(AZC)],Ge,"CompositeQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$q(AYS),"u",A$n(AY8)],C8,"GroupQuantifierSet",2,
Ez,[],0,0,[0,0,0],0,["c",A$q(AYm),"u",A$n(A1z)],Fm,"AltQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$q(A2v),"Y",A$o(AXO)],Ws,"UnifiedQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$q(A7c),"cK",A$q(ATH)],Bg,0,B,[],1,0,0,0,0,Dz,0,BU,[],0,3,0,0,0,XX,0,Hy,[Ej],0,0,0,0,["M",A$n(ACM)]]);
$rt_metadata([Y3,"FSet$PossessiveFSet",2,BW,[],0,0,[C7,0,0],0,["c",A$q(ASj),"u",A$n(A3z),"P",A$o(A3D)],AFa,0,B,[Ej,C3],0,3,0,0,0,PN,0,B$,[],0,0,0,0,["u",A$n(A3L)],Se,"CompositeRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A$q(AOI),"Y",A$o(A3u),"u",A$n(A3W),"P",A$o(APb),"b_",A$o(AO1)],Eg,"SupplRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A$q(A0s),"u",A$n(A6y),"p",A$o(AQY),"b_",A$o(AOD),"Y",A$o(A5f),"P",A$o(AQB)],Nk,"UCISupplRangeSet",2,Eg,[],0,0,[0,0,0],0,["p",A$o(AR2),"u",A$n(AXa)],AGJ,"UCIRangeSet",2,Cf,[],0,0,[0,0,0],0,["bI",
A$p(A13),"u",A$n(AZa)],EV,"RangeSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(XA),"u",A$n(ASn),"b_",A$o(AUo)],Zl,"HangulDecomposedCharSet",2,B$,[],0,0,[0,0,0],0,["Y",A$o(AS3),"u",A$n(AVm),"c",A$q(ANR),"b_",A$o(AZd),"P",A$o(AWj)],E0,"CharSet",2,Cf,[],0,0,[0,0,0],0,["cm",A$n(A1T),"bI",A$p(ARn),"cK",A$q(AQn),"cY",A$r(ASe),"u",A$n(AWv),"b_",A$o(AWa)],AJs,"UCICharSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(AXY),"u",A$n(A3t)],AF7,"CICharSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(AN3),"u",A$n(ARB)],Gh,"DecomposedCharSet",2,B$,[],0,0,[0,0,0],
0,["Y",A$o(A6M),"c",A$q(AT$),"u",A$n(A3k),"b_",A$o(ASk),"P",A$o(A4i)],WW,"UCIDecomposedCharSet",2,Gh,[],0,0,[0,0,0],0,0,AC3,"CIDecomposedCharSet",2,Gh,[],0,0,[0,0,0],0,0,Xw,"PossessiveGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$q(AZP)],ZX,"PosPlusGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$q(A2P)],G6,"AltGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$q(A5b),"Y",A$o(A6c)],Rv,"PosAltGroupQuantifierSet",2,G6,[],0,0,[0,0,0],0,["c",A$q(ASa),"Y",A$o(A27)],GL,"CompositeGroupQuantifierSet",2,C8,[],0,0,[0,0,0],
0,["c",A$q(A7v),"u",A$n(AWI)],P2,"PosCompositeGroupQuantifierSet",2,GL,[],0,0,[0,0,0],0,["c",A$q(ARH)],SX,"ReluctantGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$q(AXb)],AAD,"RelAltGroupQuantifierSet",2,G6,[],0,0,[0,0,0],0,["c",A$q(APc)],U2,"RelCompositeGroupQuantifierSet",2,GL,[],0,0,[0,0,0],0,["c",A$q(AYB)],SY,"DotAllQuantifierSet",2,Ez,[],0,0,[0,0,0],0,["c",A$q(A7k),"cK",A$q(AVT),"u",A$n(A32)],Y9,"DotQuantifierSet",2,Ez,[],0,0,[0,0,0],0,["c",A$q(AUp),"cK",A$q(ANS),"u",A$n(A4H)],FR,0,B,[],1,0,0,0,0,AF4,
"PossessiveQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$q(AOs)],Wm,"PossessiveAltQuantifierSet",2,Fm,[],0,0,[0,0,0],0,["c",A$q(ATv)],Zx,"PossessiveCompositeQuantifierSet",2,Ge,[],0,0,[0,0,0],0,["c",A$q(A4Q)],AAC,"ReluctantQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$q(AUl)],ADc,"ReluctantAltQuantifierSet",2,Fm,[],0,0,[0,0,0],0,["c",A$q(AOB)],SN,"ReluctantCompositeQuantifierSet",2,Ge,[],0,0,[0,0,0],0,["c",A$q(A45)],LU,"SOLSet",2,BW,[],4,0,[0,0,0],0,["c",A$q(A2h),"P",A$o(A1J),"u",A$n(ATx)],AG4,"WordBoundary",2,
BW,[],0,0,[0,0,0],0,["c",A$q(AY4),"P",A$o(AZb),"u",A$n(A7t)],Y6,"PreviousMatch",2,BW,[],0,0,[0,0,0],0,["c",A$q(AR4),"P",A$o(AXE),"u",A$n(AYU)],WS,"EOLSet",2,BW,[],4,0,[0,0,0],0,["c",A$q(A35),"P",A$o(AZI),"u",A$n(A2w)],AET,"EOISet",2,BW,[],0,0,[0,0,0],0,["c",A$q(A3r),"P",A$o(AXX),"u",A$n(ARc)],Ye,"MultiLineSOLSet",2,BW,[],0,0,[0,0,0],0,["c",A$q(AZE),"P",A$o(AQ6),"u",A$n(AYO)],AJe,"DotAllSet",2,B$,[],0,0,[0,0,0],0,["c",A$q(AXe),"u",A$n(AP3),"Y",A$o(AZf),"jt",A$n(A3c),"P",A$o(AZe)],AGO,"DotSet",2,B$,[],4,0,[0,0,0],
0,["c",A$q(A3l),"u",A$n(AZO),"Y",A$o(A4G),"jt",A$n(ANE),"P",A$o(AXt)],AM4,"UEOLSet",2,BW,[],4,0,[0,0,0],0,["c",A$q(ASm),"P",A$o(A0V),"u",A$n(ASG)],AL1,"UMultiLineEOLSet",2,BW,[],0,0,[0,0,0],0,["c",A$q(AT3),"P",A$o(A0O),"u",A$n(AOf)],AJ3,"MultiLineEOLSet",2,BW,[],0,0,[0,0,0],0,["c",A$q(A1E),"P",A$o(APy),"u",A$n(AQ7)],II,"CIBackReferenceSet",2,B$,[],0,0,[0,0,0],0,["c",A$q(AOv),"Y",A$o(A4d),"u",A$n(AYu),"P",A$o(AU9)],AM$,"BackReferenceSet",2,II,[],0,0,[0,0,0],0,["c",A$q(APD),"cK",A$q(AWr),"cY",A$r(AOg),"b_",A$o(A2K),
"u",A$n(A6b)],ALi,"UCIBackReferenceSet",2,II,[],0,0,[0,0,0],0,["c",A$q(ASS),"u",A$n(AZc)],QM,0,Hi,[Kj],0,3,0,0,["qw",A$r(AQO),"pW",A$q(AY7),"ky",A$o(AZt),"qO",A$p(A5q)],ABl,"SequenceSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(APW),"cK",A$q(AY2),"cY",A$r(A00),"u",A$n(AUg),"b_",A$o(ARt)],AF6,"UCISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(ASX),"u",A$n(ARC)]]);
$rt_metadata([P6,"CISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(A4R),"u",A$n(A5K)],HK,0,B,[],4,0,0,AVi,0,XF,"UCISupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(AVy),"u",A$n(A7s)],Ov,"LowSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["Y",A$o(A3A),"c",A$q(AZJ),"cK",A$q(ARr),"cY",A$r(AZ$),"u",A$n(AVW),"b_",A$o(AOd),"P",A$o(AV3)],OD,"HighSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["Y",A$o(AZs),"c",A$q(ANX),"cK",A$q(A3P),"cY",A$r(AVt),"u",A$n(A6X),"b_",A$o(APX),"P",A$o(A3Y)],Et,"SupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bI",A$p(A4q),
"cK",A$q(A2Y),"cY",A$r(APg),"u",A$n(A6d),"b_",A$o(A4k)],AD5,0,FR,[],0,0,0,0,["jk",A$o(APl),"BH",A$p(AU4)],AD6,0,FR,[],0,0,0,0,["jk",A$o(A46),"BH",A$p(AW1)],AID,0,B,[],0,0,0,0,0,AGi,0,B,[],0,0,0,0,0,Ot,0,Bg,[],0,0,0,0,["L",A$n(ALq)],NV,0,Bg,[],0,0,0,0,["L",A$n(ALX)],AIy,0,Bg,[],0,0,0,0,["L",A$n(A4K)],AIS,0,Bg,[],0,0,0,0,["L",A$n(AV6)],AIU,0,Bg,[],0,0,0,0,["L",A$n(AQs)],Op,0,Bg,[],0,0,0,0,["L",A$n(AGR)],Mr,0,Op,[],0,0,0,0,["L",A$n(AHj)],AJU,0,Bg,[],0,0,0,0,["L",A$n(A1h)],Pr,0,Mr,[],0,0,0,0,["L",A$n(AJ1)],ALD,
0,Pr,[],0,0,0,0,["L",A$n(ATi)],AHP,0,Bg,[],0,0,0,0,["L",A$n(AZY)],AG0,0,Bg,[],0,0,0,0,["L",A$n(ATd)],AKQ,0,Bg,[],0,0,0,0,["L",A$n(AW5)],AMR,0,Bg,[],0,0,0,0,["L",A$n(A2$)],AJX,0,Bg,[],0,0,0,0,["L",A$n(AX2)],AMx,0,Bg,[],0,0,0,0,["L",A$n(ARN)],AIp,0,Bg,[],0,0,0,0,["L",A$n(AVd)],AI7,0,Bg,[],0,0,0,0,["L",A$n(AZW)],AGu,0,Bg,[],0,0,0,0,["L",A$n(AP8)],AJ$,0,Bg,[],0,0,0,0,["L",A$n(A6x)],AMD,0,Bg,[],0,0,0,0,["L",A$n(AXZ)],AIO,0,Bg,[],0,0,0,0,["L",A$n(ASo)],AK$,0,Bg,[],0,0,0,0,["L",A$n(AQe)],AHR,0,Bg,[],0,0,0,0,["L",A$n(A02)],AJD,
0,Bg,[],0,0,0,0,["L",A$n(A2b)],AMI,0,Bg,[],0,0,0,0,["L",A$n(AWk)],AHu,0,Bg,[],0,0,0,0,["L",A$n(AUJ)],AHa,0,Bg,[],0,0,0,0,["L",A$n(ATL)],AJV,0,Bg,[],0,0,0,0,["L",A$n(A4D)],Le,0,Bg,[],0,0,0,0,["L",A$n(AHQ)],AM0,0,Le,[],0,0,0,0,["L",A$n(ATC)],ALH,0,Ot,[],0,0,0,0,["L",A$n(AYZ)],AG$,0,NV,[],0,0,0,0,["L",A$n(ARl)],AKT,0,Bg,[],0,0,0,0,["L",A$n(ASC)],AK4,0,Bg,[],0,0,0,0,["L",A$n(AWP)],ALv,0,Bg,[],0,0,0,0,["L",A$n(A0L)],ALE,0,Bg,[],0,0,0,0,["L",A$n(ANJ)],AKW,0,B,[],4,0,0,0,0,AGH,0,B,[],4,3,0,0,0,Yh,"UnicodeHelper$Range",
8,B,[],0,3,[AGH,0,"Range"],0,0]);
$rt_metadata([AII,0,B,[],0,3,0,0,0,ALg,0,B,[],4,3,0,0,0,F0,0,B,[],0,0,0,0,0,ACb,0,F0,[Fy],0,0,0,0,0,UQ,0,F0,[Fy],0,0,0,0,0,AA6,0,F0,[Fy],0,0,0,0,0,AEy,0,B,[W],0,3,0,0,["g",A$o(ANL)],AEx,0,B,[W],0,3,0,0,["g",A$o(AWl)],AGB,0,B,[W],0,0,0,0,0,AFy,0,B,[W],0,3,0,0,["g",A$o(A4u)],ABF,0,B,[W],0,3,0,0,["g",A$o(ATj)],ABE,0,B,[W],0,3,0,0,["g",A$o(A4b)],ADk,0,B,[T],0,3,0,0,["e",A$n(A5y)],ADo,0,B,[W],0,3,0,0,["g",A$o(A0u)],ADq,0,B,[W],0,3,0,0,["g",A$o(A6g)],I1,0,B,[],3,3,0,0,0,Qy,0,B,[I1],0,0,0,0,["os",A$o(A4f),"pv",A$o(A1q),
"pc",A$n(AVz)],R4,0,B,[T],0,3,0,0,["e",A$n(A2y)],Wr,0,Ba,[],0,0,0,0,["p",A$o(AQy)],Wo,0,Ba,[],0,0,0,0,["p",A$o(AYl)],QZ,0,Ba,[],0,0,0,0,["p",A$o(ASu),"M",A$n(A05)],Zd,0,Ba,[],0,0,0,0,["p",A$o(A4t)],Zb,0,Ba,[],0,0,0,0,["p",A$o(AVx)],Zc,0,Ba,[],0,0,0,0,["p",A$o(A2s)],Zg,0,Ba,[],0,0,0,0,["p",A$o(A0g)],Zh,0,Ba,[],0,0,0,0,["p",A$o(ANF)],Ze,0,Ba,[],0,0,0,0,["p",A$o(ARf)],Zf,0,Ba,[],0,0,0,0,["p",A$o(AS2)],Zi,0,Ba,[],0,0,0,0,["p",A$o(AWu)],Zj,0,Ba,[],0,0,0,0,["p",A$o(AZR)],QY,0,Ba,[],0,0,0,0,["p",A$o(A7G)],Rg,0,Ba,
[],0,0,0,0,["p",A$o(ARj)],QW,0,Ba,[],0,0,0,0,["p",A$o(API)],QX,0,Ba,[],0,0,0,0,["p",A$o(A0S)],Q2,0,Ba,[],0,0,0,0,["p",A$o(AR6)],QV,0,Ba,[],0,0,0,0,["p",A$o(A5C)],Q0,0,Ba,[],0,0,0,0,["p",A$o(AY9)],Q1,0,Ba,[],0,0,0,0,["p",A$o(AUC)],MQ,0,B,[],3,3,0,0,0,ABV,0,B,[MQ],4,3,0,0,0,SR,0,B,[W],0,3,0,0,["g",A$o(A2D)],Y8,0,B,[W],0,3,0,0,["g",A$o(AZV)],RR,0,B,[W],0,3,0,0,["g",A$o(A1C)],AB8,0,B,[W],0,3,0,0,["g",A$o(ASi)],AFW,0,B,[W],0,3,0,0,["g",A$o(A5i)],AFV,0,B,[W],0,3,0,0,["g",A$o(APz)],ADA,0,B,[I1],0,3,0,0,["os",A$o(A5d),
"pv",A$o(ATM),"pc",A$n(A0a)],Tp,0,B,[W],0,3,0,0,0,FV,0,B,[T],0,3,0,AJL,0,Y5,0,B,[W],0,3,0,0,["g",A$o(AVn)]]);
$rt_metadata([ACJ,0,DH,[CI],0,3,0,0,0,P5,0,B,[],3,3,0,0,0,Tg,0,B,[P5],0,3,0,0,0,PY,"BackReferencedSingleSet",2,Ik,[],0,0,[0,0,0],0,["cK",A$q(AQT),"cY",A$r(A7u),"g$",A$n(APv)],M_,0,Bt,[],0,3,0,0,0,AKK,0,B,[DR],0,3,0,0,0,Wz,0,B,[Ch],0,3,0,0,["bn",A$o(AUD)],WA,0,B,[Ch],0,3,0,0,["bn",A$o(AUY)],TB,0,B,[W],0,3,0,0,["g",A$o(A0U)],AFn,0,B,[Ch],0,3,0,0,["bn",A$o(AWz)],AFm,0,B,[Ch],0,3,0,0,["bn",A$o(ATn)],AEd,0,B,[Ch],0,0,0,0,["bn",A$o(AUS)],AA3,0,B,[BD],0,3,0,0,0,ALV,0,B,[],4,3,0,0,0,Sk,0,B,[W],0,3,0,0,["g",A$o(A3M)],Sj,
0,B,[T],0,3,0,0,["e",A$n(A3_)],Sh,0,B,[T],0,3,0,0,["e",A$n(ARa)],Si,0,B,[T],0,3,0,0,["e",A$n(AWF)],Sl,0,B,[T],0,3,0,0,["e",A$n(AN0)],Ty,0,B,[T],0,3,0,0,["e",A$n(AV9)],Tx,0,B,[T],0,3,0,0,["e",A$n(A2x)],Tw,0,B,[T],0,3,0,0,["e",A$n(A34)],SG,0,B,[T],0,3,0,0,["e",A$n(AXH)],R5,0,B,[],3,3,0,0,0,ALo,0,B,[T],0,3,0,0,["e",A$n(A68)],ADY,0,B,[MQ],0,0,0,0,0,T0,0,B,[Ch],0,3,0,0,["bn",A$o(A5e)],ALJ,0,B,[Gy],0,3,0,0,0,ACT,0,B,[Gy],0,3,0,0,0,AMg,0,B,[NL],0,3,0,0,0,AMh,0,B,[CO],0,3,0,0,0,AMf,0,B,[BD],0,3,0,0,0,EI,0,CE,[],12,
3,0,AZq,0,YZ,0,B,[],3,3,0,0,0,AFd,0,B,[W],0,3,0,0,["g",A$o(A3v)],Rl,0,B,[T],0,3,0,0,["e",A$n(AUy)],Rj,0,B,[T],0,3,0,0,["e",A$n(A0M)],Rk,0,B,[T],0,3,0,0,["e",A$n(A6z)],Vj,0,B,[T],0,3,0,0,["e",A$n(A4m)],Vl,0,B,[T],0,3,0,0,["e",A$n(ATG)],AAz,0,B,[CO],0,3,0,0,["cb",A$n(A5t)],AA_,0,B,[T],0,3,0,0,["e",A$n(AOw)],AA9,0,B,[T],0,3,0,0,["e",A$n(APV)],T2,0,B,[T],0,3,0,0,["e",A$n(AWZ)],T3,0,B,[T],0,3,0,0,["e",A$n(AOu)],T4,0,B,[T],0,3,0,0,["e",A$n(APM)],T5,0,B,[T],0,3,0,0,["e",A$n(AWJ)],Uj,0,B,[T],0,3,0,0,["e",A$n(A2F)],AH9,
0,B,[CO],0,3,0,0,["cb",A$n(A6$)],AEn,0,B,[],0,3,0,0,0]);
$rt_metadata([Pm,0,EH,[Ej,C3],1,3,0,0,["fJ",A$o(AXV),"qm",A$o(A1W)],AH1,0,B,[YZ],0,0,0,0,0,UP,0,B,[Ir],0,3,0,0,0,Ph,0,Pm,[],0,0,0,0,["fJ",A$o(AXV),"qm",A$o(A1W),"qp",A$o(A4A)],P9,0,EF,[JF],0,0,0,0,["fJ",A$o(AXV),"qm",A$o(A1W),"jc",A$o(AXU),"dc",A$n(AT4)],R_,0,Bt,[],0,3,0,0,0,WU,0,Bt,[],0,3,0,0,0,Vn,0,GD,[],0,3,0,0,0,R3,0,GD,[],0,3,0,0,0,ACw,0,Ba,[],0,0,0,0,["p",A$o(AWB)],XN,0,Ba,[],0,0,0,0,["p",A$o(AYX)],Tc,0,Ba,[],0,0,0,0,["p",A$o(AOA)],Tb,0,Ba,[],0,0,0,0,["p",A$o(A0J)],WG,0,Ba,[],0,0,0,0,["p",A$o(ARV)],Zv,
0,Ba,[],0,0,0,0,["p",A$o(A5$)],QI,0,Ba,[],0,0,0,0,["p",A$o(AUe)],AAR,0,Ba,[],0,0,0,0,["p",A$o(AVh)],XJ,0,Ba,[],0,0,0,0,["p",A$o(A7e)],XL,0,Ba,[],0,0,0,0,["p",A$o(APZ)],Qo,0,Ba,[],0,0,0,0,["p",A$o(AWL)],ZK,0,Ba,[],0,0,0,0,["p",A$o(A2C)],ZP,0,Ba,[],0,0,0,0,["p",A$o(A4c)],ACX,0,Ba,[],0,0,0,0,["p",A$o(A5W)],ABW,0,Ba,[],0,0,0,0,["p",A$o(AW$)],PR,0,Ba,[],0,0,0,0,["p",A$o(APQ)],M0,0,Ba,[],0,0,0,0,["p",A$o(AUh)],ABs,0,M0,[],0,0,0,0,["p",A$o(A5g)],ADU,0,B,[],0,3,0,0,0,AGG,0,B,[],3,3,0,0,0,AD8,0,B,[T],0,3,0,0,["e",A$n(AWx)],AD$,
0,B,[E1],0,3,0,0,["gx",A$o(AXQ)],V4,0,B,[T],0,3,0,0,["e",A$n(AXu)],V5,0,B,[E1],0,3,0,0,["gx",A$o(AVw)],LZ,0,F6,[],1,3,0,0,0,SD,0,LZ,[],0,3,0,0,0,Y0,0,B,[T],0,3,0,0,0,AEe,0,B,[T],0,3,0,0,["e",A$n(A1b)],AAX,0,B,[T],0,3,0,0,["e",A$n(AS8)],AAW,0,B,[T],0,3,0,0,["e",A$n(A3C)],ST,0,B,[T],0,3,0,0,["e",A$n(A6s)],QJ,0,B,[E1],0,3,0,0,["gx",A$o(A2n)],AER,0,B,[W],0,3,0,0,["g",A$o(AQ5)],G_,0,CE,[],12,0,0,TK,0,F9,"DirectoryNode",26,Da,[],0,3,[0,0,0],0,["M",A$n(AWS)],RU,0,B,[T],0,3,0,0,["e",A$n(A1a)],SW,0,B,[W],0,3,0,0,["g",
A$o(AQW)],SL,0,B,[W],0,3,0,0,["g",A$o(AOJ)],ACV,0,B,[],32,0,0,A9G,0,PA,0,B,[T],0,3,0,0,["e",A$n(A1x)],IY,"FileNode",26,Da,[],0,3,[0,0,0],0,["M",A$n(APK)]]);
$rt_metadata([ABD,0,B,[Lz],0,0,0,0,["sr",A$p(AOX),"AY",A$o(ASs),"yC",A$o(AXG),"v4",A$o(AXP)],ACo,0,B,[W],0,3,0,0,["g",A$o(A3K)],Rs,0,B,[W],0,3,0,0,["g",A$o(A5D)],Ww,0,B,[DR],0,3,0,0,0,AFx,0,B,[BX],3,3,0,0,0,AAd,0,B,[AFx],0,3,0,0,["J8",A$n(ASJ)],AH8,0,B,[BX],3,3,0,0,0,Td,0,B,[W],0,3,0,0,["g",A$o(A5z)],Rp,0,B,[Ke],0,3,0,0,["qX",A$n(AQl),"o8",A$n(ANV),"oC",A$o(AVK),"k8",A$o(AT7)],S2,0,B,[T],0,3,0,0,["e",A$n(AN2)],ADI,0,B,[W],0,3,0,0,0,ACP,0,B,[W],0,3,0,0,0,S4,0,B,[T],0,3,0,0,["e",A$n(AT9)],De,0,B,[],3,3,0,AIW,
0,CD,0,CE,[],12,3,0,AIi,0,Ed,0,B,[],3,3,0,AYz,0,ACu,0,B,[I1],0,0,0,0,["os",A$o(A5O),"pv",A$o(AWs),"pc",A$n(A6a)],ACE,0,B,[T],0,3,0,0,["e",A$n(A1V)],Uh,0,B,[DR],0,3,0,0,["bQ",A$o(AOT)],AKx,0,B,[],0,0,0,0,0,PG,0,B,[T],0,3,0,0,["e",A$n(ATO)],AF2,0,B,[T],0,3,0,0,["e",A$n(A1U)],Rz,0,B,[W],0,3,0,0,["g",A$o(A08)],RA,0,B,[W],0,3,0,0,["g",A$o(A7f)]]);
function $rt_array(cls,data){this.Ze=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null"," is not subtype of ","[",", ","]","navigator.clipboard is undefined","Illegal argument sent to worker ","keydown",
"keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  outColor = texture(sDiffuse, textureUV);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
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
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","ns-resize","ew-resize","/Full file parsed in ",
"ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize",", z = ",", w = ","(this Collection)","JsArrayView{ buffer.byteLength = "," }"," -"," bold"," italic","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232",
"#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","",
"codicon.pixel.size = ","w = ","Window 1","Window ","Project root","Select left...","Select right...","- to worker ","- to edt ","folder","file","objects[","] = ","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","new folder diff window","new file diff window","new project view","new editor window","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"WorkerTest: \n  got ","  methodWithStringResult = ","charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ",
"/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","asyncDiffUtils.compareFolders","asyncDiffUtils.compareFiles","TreeNodes left & right should have same type","Open ...","Open project...","Project view","Open project ...","request new model, file = ","request in progress ","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","showOpenFilePicker -> ","dir: ","The last byte in dst "," onPastePlainText: ","Folder ","ClassFile ",
"Expected "," ints to write, but "," written","open file ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","openFile: ","dir = ",
"asyncWithDir","openFileEdt: ","dir on edt = ","Thread.currentThread() = ","Unexpected type: ","Unexpected ref node type: ","fSet","Is","In","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>",
"<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter",
"javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar",
"Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators",
"MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals",
"IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms",
"ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","file = ","file.content.length = ","  sub dir: ","  file: ","complete","dir[",", list.size = ","file[","asyncWithDir complete, size = ",
"main","openDirectory: "," - project view","readClipboardText error: ","CONCURRENT","UNORDERED","IDENTITY_FINISH","open dir = "," ↔ ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","opening file ... ","folderOpened ","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Error fetching file "]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AGI(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var C0=Long_add;var Kn=Long_sub;var Cm=Long_mul;var AIH=Long_div;var AYf=Long_rem;var A72=Long_or;var Dk=Long_and;var Bcu=Long_xor;var Ii=Long_shl;var A9p=Long_shr;var GA=Long_shru;var Bcv=Long_compare;var Jf=Long_eq;var Bcw=Long_ne;var A7Z=Long_lt;var AQi=Long_le;var Bcx=Long_gt;var A7Y=Long_ge;var Bcy=Long_not;var A9A=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A9B);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AC5.prototype;c.f=c.bn;c=AC6.prototype;c.f=c.bn;c=AC4.prototype;c.f=c.bn;c=X7.prototype;c.f=c.bn;c=ALG.prototype;c.get=c.Nh;Object.defineProperty(c,"length",{get:c.T5});c=AKi.prototype;c.createEntityReference=c.P3;c.getElementById=c.Sr;c.createTextNode=c.R$;c.hasChildNodes=c.Q7;c.querySelectorAll=c.PK;c.removeChild=c.TQ;c.cloneNode=c.HN;c.createComment=c.U5;c.insertBefore=c.Ql;c.getElementsByTagNameNS=c.T3;c.hasAttributes=c.Ky;c.normalize=c.NR;c.hasChildNodesJS=c.NJ;c.getElementsByTagName
=c.Ng;c.appendChild=c.OO;c.createAttributeNS=c.SM;c.dispatchEvent=c.Nv;c.replaceChild=c.Ih;c.createElementNS=c.Jr;c.createCDATASection=c.Mw;c.querySelector=c.Kx;c.createElement=c.Tj;c.isSupported=c.TU;c.importNode=c.Qv;c.removeEventListener=c.Jn;c.createAttribute=c.Nw;c.createDocumentFragment=c.G6;c.createProcessingInstruction=c.PX;c.addEventListener=c.LN;Object.defineProperty(c,"nodeName",{get:c.ON});Object.defineProperty(c,"documentElement",{get:c.Kc});Object.defineProperty(c,"childNodes",{get:c.Me});Object.defineProperty(c,
"prefix",{get:c.QB,set:c.Ve});Object.defineProperty(c,"implementation",{get:c.MU});Object.defineProperty(c,"textContent",{get:c.U$,set:c.R7});Object.defineProperty(c,"parentNode",{get:c.So});Object.defineProperty(c,"nextSibling",{get:c.J2});Object.defineProperty(c,"nodeType",{get:c.Ty});Object.defineProperty(c,"doctype",{get:c.Rm});Object.defineProperty(c,"localName",{get:c.Ul});Object.defineProperty(c,"nodeValue",{get:c.JI,set:c.UV});Object.defineProperty(c,"firstChild",{get:c.Nq});Object.defineProperty(c,
"lastChild",{get:c.LW});Object.defineProperty(c,"previousSibling",{get:c.OA});Object.defineProperty(c,"namespaceURI",{get:c.IB});Object.defineProperty(c,"attributes",{get:c.QI});Object.defineProperty(c,"ownerDocument",{get:c.IH});c=Qp.prototype;c.f=c.bn;c=AKN.prototype;c.removeEventListener=c.IJ;c.dispatchEvent=c.Qq;c.addEventListener=c.Ll;c=VG.prototype;c.onAnimationFrame=c.KA;c=VF.prototype;c.f=c.C6;c=VD.prototype;c.handleEvent=c.cQ;c=ABQ.prototype;c.f=c.bn;c=AEE.prototype;c.handleEvent=c.cQ;c=AEF.prototype;c.handleEvent
=c.cQ;c=AEG.prototype;c.handleEvent=c.cQ;c=AEH.prototype;c.handleEvent=c.cQ;c=AEI.prototype;c.handleEvent=c.cQ;c=AEJ.prototype;c.handleEvent=c.cQ;c=AEK.prototype;c.handleEvent=c.cQ;c=AEL.prototype;c.handleEvent=c.cQ;c=AEM.prototype;c.handleEvent=c.cQ;c=AEN.prototype;c.handleEvent=c.cQ;c=Xd.prototype;c.handleEvent=c.cQ;c=Xe.prototype;c.handleEvent=c.cQ;c=Xf.prototype;c.handleEvent=c.cQ;c=Xg.prototype;c.handleEvent=c.cQ;c=ADy.prototype;c.handleEvent=c.cQ;c=AFI.prototype;c.f=c.bn;c=AFJ.prototype;c.f=c.bn;c=Yd.prototype;c.f
=c.bn;c=Yc.prototype;c.f=c.bn;c=Ya.prototype;c.f=c.bn;c=X_.prototype;c.f=c.bn;c=Qi.prototype;c.accept=c.NC;c=V8.prototype;c.f=c.bn;c=PK.prototype;c.f=c.bn;c=PM.prototype;c.f=c.bn;c=PL.prototype;c.f=c.bn;c=ZC.prototype;c.f=c.C6;c=ZA.prototype;c.f=c.C6;c=ABH.prototype;c.f=c.bn;c=AEk.prototype;c.f=c.bn;c=AFC.prototype;c.f=c.bn;c=AFB.prototype;c.f=c.bn;c=AEY.prototype;c.f=c.bn;c=PJ.prototype;c.f=c.bn;c=UG.prototype;c.handleEvent=c.cQ;c=Wz.prototype;c.f=c.bn;c=WA.prototype;c.f=c.bn;c=AFn.prototype;c.f=c.bn;c=AFm.prototype;c.f
=c.bn;c=AEd.prototype;c.f=c.bn;c=T0.prototype;c.f=c.bn;c=AAd.prototype;c.onTimer=c.J8;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);