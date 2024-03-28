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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eb=f;}
function $rt_cls(cls){return Ur(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GI(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cq.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AVs(t);}
function $rt_throwableCause(t){return A4T(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A$k());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IR();}
function $rt_setThread(t){return AUO(t);}
function $rt_createException(message){return A$l(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A$m());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BQ=$rt_compare;var A$n=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var E3=$rt_isInstance;var A$o=$rt_nativeThread;var A$p=$rt_suspending;var A$q=$rt_resuming;var A$r=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var Bb=$rt_imul;var Fc=$rt_wrapException;var A$s=$rt_checkBounds;var A$t=$rt_checkUpperBound;var A$u=$rt_checkLowerBound;var A$v=$rt_wrapFunction0;var A$w=$rt_wrapFunction1;var A$x=$rt_wrapFunction2;var A$y=$rt_wrapFunction3;var A$z=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ALv=$rt_createCharArrayFromData;var A8p=$rt_createByteArrayFromData;var A8Y=$rt_createShortArrayFromData;var D$=$rt_createIntArrayFromData;var A$A=$rt_createBooleanArrayFromData;var A$B=$rt_createFloatArrayFromData;var A$C=$rt_createDoubleArrayFromData;var AKO=$rt_createLongArrayFromData;var A$j=$rt_createBooleanArray;var DU=$rt_createByteArray;var A$D=$rt_createShortArray;var B6=$rt_createCharArray;var BP=$rt_createIntArray;var A$E=$rt_createLongArray;var AN1=$rt_createFloatArray;var A$F
=$rt_createDoubleArray;var BQ=$rt_compare;var A$G=$rt_castToClass;var A$H=$rt_castToInterface;var A$I=Long_toNumber;var Bq=Long_fromInt;var A$J=Long_fromNumber;var D=Long_create;var F2=Long_ZERO;var A$K=Long_hi;var Hi=Long_lo;
function B(){this.$id$=0;}
function BF(a){return Ur(a.constructor);}
function ATd(a,b){return a!==b?0:1;}
function AGP(a){var b,c,d,e,f,g,h,i,j;b=Ni(a);if(!b)c=C(0);else{d=(((32-YJ(b)|0)+4|0)-1|0)/4|0;e=B6(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=IP((b>>>g|0)&15,16);g=g-4|0;h=i;}c=GI(e);}j=new J;L(j);H(H(j,C(1)),c);return K(j);}
function Ni(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ASt(a){var b,c,d;if(!E3(a,Ei)&&a.constructor.$meta.item===null){b=new VI;X(b);N(b);}b=AN8(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function S1(){var a=this;B.call(a);a.C$=0;a.q$=null;}
function A9J(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AM5();AKn();AHV();AIH();AJ5();ALd();AH5();AGl();AGh();AHx();AJt();AKm();AMA();AIt();ALM();ALh();AI8();AIm();ALp();ANk();AH7();AKU();AHz();AMI();AKE();AMa();AJX();AMh();AMF();AJo();c=(AGz()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))ZD(C(2),C(3));else{d=new S1;BG(d);e=new AC$;e.BV=d;f=new X8;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new Qr;j.zI
=i;j.zJ=g;j.zK=6;j.zL=e;j.zF=f;k=Bw(j,"f");i.onmessage=k;h=h+1|0;}l=I(MI,[Fq(C(4),C(5),300),Fq(C(6),C(7),300),Fq(C(8),C(5),400),Fq(C(9),C(7),400),Fq(C(10),C(5),600),Fq(C(11),C(7),600),Fq(C(12),C(5),700),Fq(C(13),C(7),700)]);m=P(MI,1);m.data[0]=AVY(C(14),FN(C(15),C(16)),C(5),400);b=(MG(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.vt;f=c.uu;i=new J;L(i);Br(H(H(i,C(17)),f),41);i=K(i);f=c.ur;o=c.sW;c=A0U($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BG(d);c=new AC_;c.Cu=d;g=new AC9;e.then(Bw(c,"f"),Bw(g,"f"));}}
function AIN(b){var c,d,e,f,g,h,i,j;c=new AB8;d=new VH;d.zv=c;c.u_=d;d=new VF;d.De=c;c.o_=d;e=new VG;e.Bf=c;c.wG=new $rt_globals.ResizeObserver(Bw(e,"f"));d=new VE;d.so=c;c.yl=d;c.l0=1;d=new ABR;d.m5=new UT;e=new ZB;e.Fb=null;e.mX=A$L;d.tq=e;BG(e);f=new ABT;f.Bv=e;d.Da=f;d.CD=b;g=b.length;h=0;while(h<g){e=b[h];i=new ABU;i.AA=d;i.Az=h;f=Bw(i,"f");e.onmessage=f;e=b[h];f=ALK();e.postMessage(f);h=h+1|0;}d.iX=0;d.p4=BP(g);c.CU=d;c.rs=(EL()).getElementById("canvasDiv");d=AGz();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eQ=d;c.rs.appendChild(d);b=c.eQ;d=AUm(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)ZD(C(2),C(18));else{c.qy=A9v(c.eQ,c.o_);b=new Vw;j=c.o_;AM4(b,e,new ADF,1,2.25,0.625);b.E_=new ADE;b.EK=j;c.ie=b;AU7(c.wG,c.eQ,AYn());d=$rt_globals.window;j=c.yl;d.addEventListener("resize",Bw(j,"handleEvent"));j=new Py;b=c.ie;d=c.qy.cK;j.T=b;j.n=d;j.bI=c;d=$rt_str($rt_globals.window.location.hash);if(Bk(C(19),d)){b=new P5;Ex(b,j);d=$rt_globals.fetch("test.wasm");j
=new Ye;d=d.then(Bw(j,"f"));j=new Yd;e=d.then(Bw(j,"f"));j=new Yb;d=new Ya;e.then(Bw(j,"f"),Bw(d,"f"));}else b=Bk(C(20),d)?A9q(j):(A5P(M(d)<=0?C(21):DD(d,1))).ba(j);c.hb=b;Uc(c);}c.eQ.focus();}
var X7=G(0);
var XH=G(0);
function AEI(){var a=this;B.call(a);a.nC=null;a.wI=null;a.dl=null;}
function Ur(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AEI;c.dl=b;d=c;b.classObject=d;}return c;}
function GV(a){if(a.nC===null)a.nC=AI5(a.dl);return a.nC;}
function H5(a){var b,c,d,e;b=a.wI;if(b===null){if(ANA(a.dl)===null?0:1){b=H5(FV(a));c=new J;L(c);H(H(c,b),C(22));b=K(c);}else{b=a.dl.$meta.enclosingClass;if((b===null?null:Ur(b))!==null){b=$rt_str(a.dl.$meta.simpleName);if(b===null)b=C(21);}else{b=AI5(a.dl);d=SP(b,36);if(d==(-1)){e=SP(b,46);if(e!=(-1))b=DD(b,e+1|0);}else{b=DD(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(21);}}}a.wI=b;}return b;}
function Jm(a){return a.dl.$meta.primitive?1:0;}
function FV(a){return Ur(ANA(a.dl));}
var AKY=G();
function Bw(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fw(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AKM=G();
function AN8(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AC0(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AC0(d[e],c))return 1;e=e+1|0;}return 0;}
function ATU(b){var c='$$enumConstants$$';HB[c]=AOl;Et[c]=AN0;Ix[c]=ASQ;Cu[c]=AHG;Cy[c]=ALV;Ic[c]=AVc;EI[c]=AX8;Hb[c]=AKu;CD[c]=AM3;ATU=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return ATU(b);}
function ANA(b){return b.$meta.item;}
function AI5(b){return $rt_str(b.$meta.name);}
function Hq(){var a=this;B.call(a);a.jl=null;a.n4=null;a.le=0;a.lz=0;}
function A$M(){var a=new Hq();X(a);return a;}
function A$N(a){var b=new Hq();Bn(b,a);return b;}
function X(a){a.le=1;a.lz=1;}
function Bn(a,b){a.le=1;a.lz=1;a.jl=b;}
function A0J(a){return a;}
function AVs(a){return a.jl;}
function A4T(a){var b;b=a.n4;if(b===a)b=null;return b;}
var EM=G(Hq);
function A$O(){var a=new EM();AIC(a);return a;}
function AIC(a){X(a);}
var Bt=G(EM);
function A$l(a){var b=new Bt();A6o(b,a);return b;}
function A6o(a,b){Bn(a,b);}
var ABo=G(Bt);
var C3=G(0);
var CI=G(0);
var KV=G(0);
function BC(){var a=this;B.call(a);a.cq=null;a.kF=0;}
var A$P=null;var A$Q=null;var A$R=null;function Fv(){Fv=Bm(BC);AWt();}
function ARp(){var a=new BC();AGj(a);return a;}
function GI(a){var b=new BC();J3(b,a);return b;}
function ET(a,b,c){var d=new BC();Pq(d,a,b,c);return d;}
function AGj(a){Fv();a.cq=A$P;}
function J3(a,b){Fv();Pq(a,b,0,b.data.length);}
function Pq(a,b,c,d){var e;Fv();e=B6(d);a.cq=e;Db(b,c,e,0,d);}
function M$(b){var c;Fv();c=ARp();c.cq=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.cq.data;if(b<c.length)return c[b];}d=new IL;X(d);N(d);}
function M(a){return a.cq.data.length;}
function GT(a){return a.cq.data.length?0:1;}
function RU(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Db(a.cq,b,d,e,c);return;}}g=new BJ;X(g);N(g);}
function Pa(a,b){var c,d,e;if(a===b)return 0;c=Be(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ADz(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ob(a,b){if(a===b)return 1;return ADz(a,b,0);}
function DJ(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Ky(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cq.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kr(b);h=JO(b);while(true){f=a.cq.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function HW(a,b,c){var d,e,f,g,h;d=Be(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cq.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kr(b);g=JO(b);while(true){if(d<1)return (-1);h=a.cq.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function SP(a,b){return HW(a,b,M(a)-1|0);}
function Z1(a,b,c){var d,e,f;d=Bd(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A3F(a,b){return Z1(a,b,0);}
function RQ(a,b,c){var d,e;d=Be(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AHC(a,b){return RQ(a,b,M(a));}
function Cz(a,b,c){var d,e;d=BQ(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d){Fv();return A$Q;}if(!b&&c==M(a))return a;return ET(a.cq,b,c-b|0);}
function DD(a,b){return Cz(a,b,M(a));}
function R0(a,b,c){return Cz(a,b,c);}
function FN(a,b){var c,d,e,f,g,h;if(GT(b))return a;if(GT(a))return b;c=B6(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return M$(c);}
function AD5(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Br(d,Q(a,f));}f=f+1|0;}H(d,DD(a,f));return K(d);}
function ABy(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cz(a,b,c+1|0);}
function APj(a){return a;}
function GU(a){var b,c,d,e,f;b=a.cq.data;c=B6(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){Fv();return b===null?C(23):b.L();}
function Oh(b){var c,d;Fv();c=new BC;d=B6(1);d.data[0]=b;J3(c,d);return c;}
function Dq(b){var c;Fv();c=new J;L(c);return K(V(c,b));}
function Bk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function Kz(a){var b,c,d,e;a:{if(!a.kF){b=a.cq.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kF=(31*a.kF|0)+e|0;d=d+1|0;}}}return a.kF;}
function MU(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gp;Bn(b,C(24));N(b);}A$S=1;d=new AA7;d.nr=P(C7,10);d.io=(-1);d.ge=(-1);d.bG=(-1);e=new Hy;e.fR=1;e.b0=b;e.bl=B6(M(b)+2|0);Db(GU(b),0,e.bl,0,M(b));f=e.bl.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.A$=g;e.hI=0;Gc(e);Gc(e);d.l=e;d.en=0;d.oc=W$(d,(-1),0,null);if(!DL(d.l)){b=new KR;h=d.l;Ns(b,C(21),h.b0,h.dP);N(b);}if(d.rO)d.oc.ff();b=BO();h=new ABY;h.kW=(-1);h.pS=(-1);h.D3=d;h.Cw=d.oc;h.mf=a;h.kW=0;g=M(a);h.pS=g;e=new AD6;i=h.kW;j=d.io;k=d.ge+1|0;l=d.bG
+1|0;e.js=(-1);m=j+1|0;e.sw=m;e.ew=BP(m*2|0);f=BP(l);e.lt=f;J8(f,(-1));if(k>0)e.qc=BP(k);J8(e.ew,(-1));AFS(e,a,i,g);h.c3=e;e.g7=1;n=0;m=0;if(!M(a)){f=P(BC,1);f.data[0]=C(21);}else{while(true){l=M(h.mf);if(!AGu(h))l=h.pS;e=h.c3;if(e.fc>=0&&AHt(e)==1){e=h.c3;e.fc=Nh(e);if(Nh(h.c3)==AIG(h.c3)){e=h.c3;e.fc=e.fc+1|0;}g=h.c3.fc;g=g<=l&&PG(h,g)?1:0;}else g=PG(h,h.kW);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BA(b,R0(a,m,AJL(h)));m=ALe(h);n=g;}a:{BA(b,R0(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BI(b,
g)))break a;E2(b,g);}}if(g<0)g=0;f=GO(b,P(BC,g));}return f;}
function AQU(a,b){return Pa(a,b);}
function AWt(){A$P=B6(0);A$Q=ARp();A$R=new TY;}
var FQ=G(Hq);
var IQ=G(FQ);
var ALr=G(IQ);
var DI=G();
function H9(){DI.call(this);this.bs=0;}
var A$T=null;var A$U=null;function A5L(a){var b=new H9();AG8(b,a);return b;}
function AG8(a,b){a.bs=b;}
function Iu(b){return (Yp(A$b(20),b,10)).L();}
function Ln(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new DA;Bn(b,C(25));N(b);}d=M(b);if(0==d){b=new DA;Bn(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new DA;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Zy(Q(b,f));if(i<0){j=new DA;k=Cz(b,0,d);b=new J;L(b);H(H(b,C(27)),k);Bn(j,K(b));N(j);}if(i>=c){j=new DA;l=Cz(b,0,d);b=new J;L(b);H(H(V(H(b,C(28)),c),C(29)),l);Bn(j,K(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new DA;k=Cz(b,0,d);b=new J;L(b);H(H(b,C(30)),k);Bn(j,K(b));N(j);}b=new DA;j=new J;L(j);V(H(j,C(31)),c);Bn(b,K(j));N(b);}
function C5(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A$U===null){A$U=P(H9,256);c=0;while(true){d=A$U.data;if(c>=d.length)break a;d[c]=A5L(c-128|0);c=c+1|0;}}}return A$U.data[b+128|0];}return A5L(b);}
function AWQ(a){return Iu(a.bs);}
function A63(a,b){if(a===b)return 1;return b instanceof H9&&b.bs==a.bs?1:0;}
function YJ(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function JB(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A2d(a,b){b=b;return BQ(a.bs,b.bs);}
function AM5(){A$T=F($rt_intcls());}
function Hk(){var a=this;B.call(a);a.D=null;a.I=0;}
function A$V(){var a=new Hk();L(a);return a;}
function A$b(a){var b=new Hk();Gd(b,a);return b;}
function L(a){Gd(a,16);}
function Gd(a,b){a.D=B6(b);}
function Yp(a,b,c){return ALE(a,a.I,b,c);}
function ALE(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cp(a,b,b+1|0);else{Cp(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=IP(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cp(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=IP($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AMj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BQ(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$W;AMb(c,f);d=f.nM;g=f.ny;h=f.rX;i=1;j=1;if(h)j=2;k=9;l=AVZ(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cp(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AK8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BQ(c,0.0);if(!d){if(1.0/c===Infinity){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cp(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cp(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cp(a,b,b+8|0);d=b;}else{Cp(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A$X;AHP(c,f);g=f.od;h=f.nk;i=f.rK;j=1;k=1;if(i)k=2;l=18;m=AUA(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cp(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AQm(p,F2))d=0;else{d=Hi(AIO(g,p));g=AYj(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AIO(p,Bq(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AVZ(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AUA(b){var c,d,e,f,g;c=Bq(1);d=0;e=16;f=A$Y.data;g=f.length-1|0;while(g>=0){if(Jf(AYj(b,Cm(c,f[g])),F2)){d=d|e;c=Cm(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Br(a,b){return a.qQ(a.I,b);}
function AFK(a,b,c){Cp(a,b,b+1|0);a.D.data[b]=c;return a;}
function ND(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.D=Lk(a.D,d);}
function K(a){return ET(a.D,0,a.I);}
function AFs(a,b,c,d){return a.qx(a.I,b,c,d);}
function X1(a,b,c,d,e){var f,g,h,i;Cp(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function KB(a,b){return a.pX(b,0,b.data.length);}
function Cp(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.ky((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var Kj=G(0);
var J=G(Hk);
function MM(){var a=new J();A6R(a);return a;}
function A7q(a){var b=new J();AYm(b,a);return b;}
function A6R(a){L(a);}
function AYm(a,b){var c,d;a.D=B6(M(b));c=0;while(true){d=a.D.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.I=M(b);}
function H(a,b){Nb(a,a.I,b===null?C(23):b.L());return a;}
function BM(a,b){Nb(a,a.I,b);return a;}
function V(a,b){Yp(a,b,10);return a;}
function Id(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(A77(b,F2)){d=0;b=A9I(b);}a:{if(DO(b,Bq(10))<0){if(d)Cp(a,c,c+1|0);else{Cp(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=IP(Hi(b),10);}else{g=1;h=Bq(1);i=Dk(Bq(-1),Bq(10));b:{while(true){j=Cm(h,Bq(10));if(DO(j,b)>0){j=h;break b;}g=g+1|0;if(DO(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cp(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(Jf(j,F2))break a;e=a.D.data;c=f+1|0;e[f]=IP(Hi((Dk(b,j))),10);b=AKq(b,j);j=Dk(j,Bq(10));f=c;}}}return a;}
function Dg(a,b){AMj(a,a.I,b);return a;}
function AGe(a,b){Br(a,b);return a;}
function LJ(a,b){var c;c=M(b);ADs(a,a.I,b,0,c);return a;}
function J7(a,b){Nb(a,a.I,!b?C(32):C(33));return a;}
function AJx(a,b,c){var d,e,f,g,h,i;d=BQ(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new IL;X(i);N(i);}
function We(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new IL;X(f);N(f);}
function A1$(a,b,c,d,e){X1(a,b,c,d,e);return a;}
function AQa(a,b,c,d){AFs(a,b,c,d);return a;}
function ADs(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Cp(a,b,(b+e|0)-d|0);while(d<e){f=a.D.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BJ;X(c);N(c);}
function AKF(a){return a.I;}
function Eq(a){return K(a);}
function ASs(a,b){ND(a,b);}
function A2y(a,b,c){AFK(a,b,c);return a;}
function Nb(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(23);else if(GT(c))break a;ND(a,a.I+M(c)|0);d=a.I-1|0;while(d>=b){a.D.data[d+M(c)|0]=a.D.data[d];d=d+(-1)|0;}a.I=a.I+M(c)|0;d=0;while(d<M(c)){e=a.D.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new IL;X(c);N(c);}
var Fj=G(IQ);
var AMw=G(Fj);
function A$Z(a){var b=new AMw();APn(b,a);return b;}
function APn(a,b){Bn(a,b);}
var ALm=G(Fj);
function A$0(a){var b=new ALm();APz(b,a);return b;}
function APz(a,b){Bn(a,b);}
var ACY=G(0);
var Du=G(0);
function BY(b,c){if(b!==null)b.bX();return c;}
var Zw=G(0);
function KN(){var a=this;B.call(a);a.jQ=0;a.oC=0;a.n2=0;}
var A$1=0;function EP(a){A$1=A$1-1|0;}
function HY(a,b,c){Lc(a,AK4(b,c,400,0));}
function LR(a,b){return L3(a,b,0.875);}
function L3(a,b,c){return Ez(a,b)+c|0;}
function ABn(){var a=this;KN.call(a);a.jG=null;a.dx=null;a.yb=null;}
function E8(a){var b,c,d;b=a.dx;c=a.oC;d=a.n2;b.clearRect(0.0,0.0,c,d);}
function ABG(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dx;d="center";c.textAlign=d;break a;case 2:c=a.dx;d="right";c.textAlign=d;break a;default:break a;}d=a.dx;c="left";d.textAlign=c;}}
function Cr(a,b){Lc(a,b.rA);}
function Lc(a,b){var c;if(a.yb!==b){c=a.dx;a.yb=b;c.font=b;}}
function AK4(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.dx;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ez(a,b){var c;c=$rt_ustr(b);return a.dx.measureText(c).width;}
function KF(a,b,c,d){var e,f;e=a.dx;f=$rt_ustr(GI(ALv([35,In(b/16|0),In(b%16|0),In(c/16|0),In(c%16|0),In(d/16|0),In(d%16|0)])));e.fillStyle=f;}
function AY9(){return {alpha:false};}
var AKo=G();
var AM_=G();
function BR(b,c){if(b===c)return 1;return b!==null?b.bR(c):c!==null?0:1;}
function BG(b){if(b!==null)return b;b=new Gp;Bn(b,C(21));N(b);}
var BX=G(0);
function GP(b){return b;}
var Ch=G(0);
function AC$(){B.call(this);this.BV=null;}
function A7i(a,b){var c;c=a.BV;c.q$=b;if(c.C$)AIN(b);}
var AIr=G();
function Jj(b,c){return b.data[c];}
var AL1=G();
var AGv=G(0);
function Fq(b,c,d){return AVY(C(34),FN(C(15),b),c,d);}
var AMY=G(0);
var AIY=G(0);
function MG(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CT(b,f+g|0);Db(c,0,d,f,g);return d;}
function L8(b,c,d){Db(b,c,d,0,d.data.length);return d;}
function ABe(b,c,d){var e;if(c>0)Db(b,0,d,0,c);e=d.data.length;if(c<e)Db(b,c+1|0,d,c,e-c|0);return d;}
function AHy(b,c,d,e){var f;if(c>0)Db(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Db(b,d,e,c,f-d|0);}return e;}
function CQ(b){var c;c=new PE;c.me=b;return c;}
function AG4(b,c){if(b.data.length!=c)b=CT(b,c);return b;}
function D2(b,c,d){var e;e=c.data.length;if(e==d)c=CT(c,e*2|0);c.data[d]=b;return c;}
function ADZ(b,c,d){var e;e=c.data.length;if(e==d)c=O8(c,e*2|0);c.data[d]=b;return c;}
function O7(b){return Lk(b,b.data.length);}
function MI(){var a=this;B.call(a);a.vt=null;a.uu=null;a.ur=null;a.sW=0;}
function AVY(a,b,c,d){var e=new MI();AVk(e,a,b,c,d);return e;}
function AVk(a,b,c,d,e){a.vt=b;a.uu=c;a.ur=d;a.sW=e;}
var AGZ=G();
function A0U(b,c){return {style:b,weight:c};}
function AC_(){B.call(this);this.Cu=null;}
function ANN(a,b){var c,d,e;c=a.Cu;d=0;while(d<b.length){e=b[d];(EL()).fonts.add(e);d=d+1|0;}c.C$=1;b=c.q$;if(b!==null)AIN(b);}
var AC9=G();
function A54(a,b){$rt_globals.console.info("font load error "+b);}
var Mj=G();
var A$2=null;var A$3=null;function Bj(){if(A$2===null)A$2=ATH(A$4,0);return A$2;}
function D4(){if(A$3===null)A$3=ATH(A$5,0);return A$3;}
function A8s(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OI(b)&&(e+f|0)<=OI(d)){a:{b:{if(b!==d){g=FV(BF(b));h=FV(BF(d));if(g!==null&&h!==null){if(g===h)break b;if(!Jm(g)&&!Jm(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dl;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AC0(n.constructor,o)?1:0)){Og(b,c,d,e,j);b=new JP;X(b);N(b);}j=j+1|0;k=m;}Og(b,c,d,e,f);return;}if(!Jm(g))break a;if(Jm(h))break b;else break a;}b=new JP;X(b);N(b);}}Og(b,c,
d,e,f);return;}b=new JP;X(b);N(b);}b=new BJ;X(b);N(b);}d=new Gp;Bn(d,C(35));N(d);}
function Db(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OI(b)&&(e+f|0)<=OI(d)){Og(b,c,d,e,f);return;}b=new BJ;X(b);N(b);}
function Og(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EN(){return Long_fromNumber(new Date().getTime());}
function AIJ(){return A$J($rt_globals.performance.now()*1000000.0);}
var AIX=G();
var ALf=G();
function ZD(b,c){var d,e,f;d=(EL()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EL()).getElementById($rt_ustr(b)).appendChild(d);}
function AGz(){return (EL()).createElement("canvas");}
function AJC(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AUm(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ANK=G();
var X8=G();
function A3w(a,b){var c;c=new Bt;Bn(c,$rt_str(b.message));N(c);}
var AI_=G();
function F0(b){return $rt_str(b);}
var AKB=G();
function Lk(b,c){var d,e,f,g;b=b.data;d=B6(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function O8(b,c){var d,e,f,g;b=b.data;d=DU(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JU(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CT(b,c){var d,e,f,g;d=b.data;e=UW(FV(BF(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function ALJ(b,c,d){var e,f,g,h;e=BP(d-c|0);f=e.data;g=c;while(g<d){h=b.data;f[g-c|0]=h[g];g=g+1|0;}return e;}
function AJi(b,c,d,e){var f,g,h,i,j,k,l,m;f=UW(FV(e),d-c|0);g=c;while(g<d){h=b.data;i=g-c|0;j=FV(e);k=h[g];if(k!==null&&!AC0((BF(k)).dl,j.dl)){e=new ABo;k=GV(BF(k));l=GV(j);m=new J;L(m);H(H(H(m,k),C(36)),l);Bn(e,K(m));N(e);}f.data[i]=k;g=g+1|0;}return f;}
function AIz(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(37));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(38));V(c,e[d]);d=d+1|0;}BM(c,C(39));return K(c);}
function AVz(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(37));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(38));Dg(c,e[d]);d=d+1|0;}BM(c,C(39));return K(c);}
function AXJ(b){var c,d,e,f;if(b===null)return C(23);c=new J;L(c);BM(c,C(37));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(38));f=e[d];AK8(c,c.I,f);d=d+1|0;}BM(c,C(39));return K(c);}
function J8(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AGT(b,c,d,e){var f,g;if(c>d){e=new BU;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function LE(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A$L;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qX(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AMk(b,c){return ADd(b,0,b.data.length,c);}
function ADd(b,c,d,e){var f,g,h,i,j;f=BQ(c,d);if(f>0){g=new BU;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var AEn=G(0);
var ALQ=G();
function A1j(a,b){return a.PB(b);}
function AS_(a){return a.Tg();}
var AHN=G();
var GG=G(0);
var TY=G();
var BJ=G(Bt);
var AMf=G();
function OI(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A$6());}return b.data.length;}
function UW(b,c){if(b===null){b=new Gp;X(b);N(b);}if(b===F($rt_voidcls())){b=new BU;X(b);N(b);}if(c>=0)return AWX(b.dl,c);b=new AF$;X(b);N(b);}
function AWX(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gp=G(Bt);
var JP=G(Bt);
function Dr(){B.call(this);this.nw=0;}
var A$7=null;var A$8=null;var A$9=null;var A$$=null;var A$_=null;var A_a=null;var A_b=null;var A_c=null;var A_d=null;var A_e=null;function AXp(a){var b=new Dr();AHn(b,a);return b;}
function AHn(a,b){a.nw=b;}
function Qs(b){var c,d;c=A_a.data;if(b>=c.length)return AXp(b);d=c[b];if(d===null){d=AXp(b);A_a.data[b]=d;}return d;}
function WP(b){var c,d;c=new BC;d=B6(1);d.data[0]=b;J3(c,d);return c;}
function MY(b){return b>=65536&&b<=1114111?1:0;}
function C1(b){return (b&64512)!=55296?0:1;}
function Dp(b){return (b&64512)!=56320?0:1;}
function Pg(b){return !C1(b)&&!Dp(b)?0:1;}
function J2(b,c){return C1(b)&&Dp(c)?1:0;}
function E5(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kr(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function JO(b){return (56320|b&1023)&65535;}
function F4(b){return Hv(b)&65535;}
function Hv(b){if(A$$===null){if(A_b===null)A_b=AME();A$$=AHA((A_b.value!==null?$rt_str(A_b.value):null));}return TM(A$$,b);}
function FG(b){return Ht(b)&65535;}
function Ht(b){if(A$9===null){if(A_c===null)A_c=AM6();A$9=AHA((A_c.value!==null?$rt_str(A_c.value):null));}return TM(A$9,b);}
function TM(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BQ(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ADN(b,c){if(c>=2&&c<=36){b=Zy(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Zy(b){var c,d,e,f,g,h,i,j,k,l;if(A$8===null){if(A_d===null)A_d=ALt();c=(A_d.value!==null?$rt_str(A_d.value):null);d=AVu(GU(c));e=NK(d);f=BP(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+P2(d)|0;j=j+P2(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A$8=f;}g=A$8.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BQ(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function IP(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GR(b){var c;if(b<65536){c=B6(1);c.data[0]=b&65535;return c;}return ALv([Kr(b),JO(b)]);}
function CK(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Pg(b&65535))return 19;if(A$_===null){if(A_e===null)A_e=AJ2();d=(A_e.value!==null?$rt_str(A_e.value):null);e=P(Yi,16384);f=e.data;g=DU(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=Oc(Q(d,l));if(m==64){l=l+1|0;m=Oc(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Oc(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Oc(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AQS(k,k+i|0,O8(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AQS(k,k+i|0,O8(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A$_=CT(e,j);}e=A$_.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.uO)o=p+1|0;else{c=d.zG;if(b>=c)return d.zP.data[b-c|0];c=p-1|0;}}return 0;}
function Lm(b){a:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ig(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CK(b)!=16?0:1;}
function ZS(b){switch(CK(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function SJ(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return ZS(b);}return 1;}
function AKn(){A$7=F($rt_charcls());A_a=P(Dr,128);}
function AME(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AM6(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ALt(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AJ2(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var XC=G(0);
var AB0=G(0);
var Fe=G(0);
var AKr=G();
function EL(){return $rt_globals.window.document;}
function A3a(a){return a.Kl();}
function A5s(a,b){return a.L8($rt_str(b));}
function A5d(a,b){a.Jw($rt_str(b));}
function AZY(a,b){return a.PN($rt_str(b));}
function AN6(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AP5(a){return a.TG();}
function A5o(a,b,c){return a.Sm($rt_str(b),$rt_str(c));}
function ASe(a,b,c,d){a.Ez($rt_str(b),Fw(c,"handleEvent"),d?1:0);}
function AYZ(a){return a.Q5();}
function A31(a){return !!a.Mw();}
function A5Z(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ATw(a){return a.JF();}
function ARS(a,b){a.Sc($rt_str(b));}
function ATT(a){return !!a.Jn();}
function AXO(a){return a.Mf();}
function ASH(a){return $rt_ustr(a.Hj());}
function AOM(a,b){return a.JR(b?1:0);}
function A66(a){return a.Mv();}
function A1L(a,b,c){return a.Uj($rt_str(b),$rt_str(c));}
function ATp(a,b,c){return a.Qm(b,c?1:0);}
function AW0(a,b,c){return !!a.LH($rt_str(b),$rt_str(c));}
function AYg(a){return a.KR();}
function ARB(a){return $rt_ustr(a.Nx());}
function AQd(a,b){return !!a.Gs(b);}
function AQ5(a,b){return a.NZ($rt_str(b));}
function A1V(a,b,c){return a.Kj($rt_str(b),$rt_str(c));}
function ASR(a){return a.ON();}
function AY2(a,b){return a.TM($rt_str(b));}
function AQ4(a){return $rt_ustr(a.Or());}
function AUY(a){a.Jj();}
function ANT(a,b){return a.Um($rt_str(b));}
function AWm(a,b){return a.JB($rt_str(b));}
function AZl(a,b){return a.Jh($rt_str(b));}
function A5T(a){return $rt_ustr(a.OZ());}
function AZs(a,b,c){return a.RN(b,c);}
function A4c(a,b){return a.Hi(b);}
function AVp(a){return a.Ls();}
function AUg(a,b,c){a.FZ($rt_str(b),Fw(c,"handleEvent"));}
function AT0(a,b,c){return a.Ig(b,c);}
function AWf(a){return !!a.Te();}
function AXn(a,b){return a.Ke($rt_str(b));}
function A3l(a,b,c,d){a.DS($rt_str(b),Fw(c,"handleEvent"),d?1:0);}
function AP$(a){return a.Lt();}
function AZJ(a,b,c){return a.JQ($rt_str(b),$rt_str(c));}
function AYE(a){return $rt_ustr(a.Pg());}
function A60(a){return a.OF();}
function AUe(a){return a.OS();}
function AYC(a){return a.LI();}
function AUh(a,b,c){a.Gr($rt_str(b),Fw(c,"handleEvent"));}
function AZ7(a,b){return a.Ni(b);}
function ARe(a,b){a.HF($rt_str(b));}
function A4Q(a){return $rt_ustr(a.Oj());}
function Qr(){var a=this;B.call(a);a.zI=null;a.zJ=null;a.zK=0;a.zL=null;a.zF=null;}
function AUT(a,b){var c,d,e,f,g;c=a.zI;d=a.zJ;e=a.zK;f=a.zL;g=a.zF;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var ALB=G();
function AVF(b){return Math.exp(b);}
function AKs(b){return Math.log(b);}
function JW(b,c){return A2I(b,c);}
function A2I(b,c){return Math.pow(b,c);}
function D0(){return AXA();}
function AXA(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AW1(b,c){return Math.max(b,c);}
function XJ(b){if(b<0)b= -b|0;return b;}
function ARk(b){return Math.abs(b);}
var ZL=G(0);
var SS=G(0);
var ABa=G(0);
var Un=G(0);
var AFx=G(0);
var ADO=G(0);
var AKW=G();
function A3E(a,b,c){a.Gr($rt_str(b),Fw(c,"handleEvent"));}
function A2a(a,b,c){a.FZ($rt_str(b),Fw(c,"handleEvent"));}
function ARD(a,b,c,d){a.DS($rt_str(b),Fw(c,"handleEvent"),d?1:0);}
function AO2(a,b){return !!a.Gs(b);}
function A0o(a,b,c,d){a.Ez($rt_str(b),Fw(c,"handleEvent"),d?1:0);}
var BU=G(Bt);
var AF$=G(Bt);
var IL=G(BJ);
var AK_=G();
function ALK(){return "ping";}
function AJZ(b){return b===ALK()?1:0;}
var AAI=G(0);
var Zm=G(0);
function AB8(){var a=this;B.call(a);a.u_=null;a.o_=null;a.rs=null;a.eQ=null;a.wG=null;a.yl=null;a.qy=null;a.ie=null;a.l0=0;a.F8=0;a.AX=null;a.hb=null;a.CU=null;}
function GJ(a,b){var c;c=EL();b=$rt_ustr(b);c.title=b;}
function Uc(a){a.F8=$rt_globals.requestAnimationFrame(Bw(a.u_,"onAnimationFrame"));}
function J6(a){a.l0=1;}
function ACK(a,b,c){var d,e;a.qy.eN=BK(b,c);d=a.eQ;e=b;d.width=e;d=a.eQ;e=c;d.height=e;d=a.ie;Y(d.dq,b,c);e=d.be;d=d.dq;b=d.a;c=d.b;e.viewport(0,0,b,c);a.hb.cs(a.ie.dq,L0(a));a.hb.bT();}
function ABm(a,b){var c,d,e;c=a.AX;d=a.eQ;if(BR(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.AX=b;}
function Ny(a){return $rt_globals.performance.now()/1000.0;}
function L0(a){return $rt_globals.window.devicePixelRatio;}
function GB(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGo(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AE6;d.Dg=b;b=A_f;c.then(Bw(d,"f"),Bw(b,"f"));}}
function F5(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGo(b,null);else{c=new AFJ;d=$rt_globals.window.showOpenFilePicker();e=new AFI;e.tJ=b;d.then(Bw(e,"f"),Bw(c,"f"));}}
function CG(a,b,c,d){var e,f,g,h;e=a.CU;f=e.iX;if(f>0){g=e.p4.data;f=f-1|0;e.iX=f;UJ(e,b,c,d,g[f]);}else{h=e.m5;e=new AE7;e.vQ=b;e.Cg=c;e.BJ=d;b=new UK;b.r$=e;c=h.m4;b.B_=c;if(c===null)h.pW=b;else c.vz=b;h.m4=b;h.ca=h.ca+1|0;h.lI=h.lI+1|0;}}
function SF(a,b,c){var d,e;if(!MD()){b=new Bt;Bn(b,C(40));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new ABL;e.uo=b;b=ANI(c);d.then(Bw(e,"f"),Bw(b,"f"));}}
function UL(a,b,c,d){var e,f,g;if(!MD()){b=new Bt;Bn(b,C(40));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=GU(b);A8J();b=A_g;g=f.data;g=b.decode(g);b=e.writeText(g);e=new AEs;e.wR=c;c=ANI(d);b.then(Bw(e,"f"),Bw(c,"f"));}}
function W1(a){return MD()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ANI(b){var c;c=new PK;c.BS=b;return c;}
var BD=G(0);
var ALY=G();
var T=G(0);
var ALZ=G();
var ABf=G(0);
function VH(){B.call(this);this.zv=null;}
function A1K(a,b){var c,d;c=b;b=a.zv;if(!(!b.hb.cL(c/1000.0)&&!b.l0)){d=b.ie.dq;if(Bb(d.a,d.b)){b.l0=0;b.hb.bT();}}Uc(b);}
function VF(){B.call(this);this.De=null;}
function DK(a){J6(a.De);}
var AAx=G(0);
function VG(){B.call(this);this.Bf=null;}
function AQo(a,b,c){var d,e,f,g;c=a.Bf;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eQ){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=L0(c);ACK(c,G$(f.width*g),G$(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ACK(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AJj=G();
function AYn(){return {box:'device-pixel-content-box'};}
function AU7(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CF=G(0);
function VE(){B.call(this);this.so=null;}
function AUX(a,b){b=a.so;b.hb.cs(b.ie.dq,L0(b));b.hb.bT();}
function ABR(){var a=this;B.call(a);a.m5=null;a.CD=null;a.tq=null;a.p4=null;a.yr=0;a.iX=0;a.Da=null;}
function UJ(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.yr+1|0;a.yr=f;g=a.tq;h=C5(f);g.kA=Pd(g,g.kA,h);h=ADR(g,h);XF(h,b);XF(h,b);g.m0=g.m0+1|0;b=a.CD[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BC){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(E3(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E3(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E3(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof L_)){if(!(c instanceof OP)){b=new BU;c=GV(BF(c));g=new J;L(g);H(H(g,C(41)),c);Bn(b,K(g));N(b);}c=c;e=j+1|0;g=c.iJ;j;h[j]=g;f=e+1|0;c=Qz(c.f6);e;h[e]=c;}else{c=c;g=c.iM;if(g===null){f=j+1|0;c=c.hJ;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=Qz(c.ix);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
var Wg=G(0);
function AXZ(a,b){var c;c=a.ck();while(c.cZ()){b.g(c.cm());}}
var H0=G(0);
function Mw(a){var b,c;b=new ABP;c=new R6;c.zE=a;b.B5=c;return b;}
function A11(a,b){var c,d;c=a.ck();d=0;while(c.cZ()){if(b.bN(c.cm())){c.p6();d=1;}}return d;}
var FT=G();
function EU(a){return a.c$()?0:1;}
function GO(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=UW(FV(BF(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B9(a);while(Cb(f)){g=b.data;h=e+1|0;g[e]=Cc(f);e=h;}return b;}
function A44(a,b){var c;c=a.ck();while(c.cZ()){if(BR(c.cm(),b)){c.p6();return 1;}}return 0;}
function GY(a,b){var c,d;c=0;d=b.ck();while(d.cZ()){if(!a.qq(d.cm()))continue;c=1;}return c;}
var Oj=G(0);
var Nl=G(0);
function EF(){FT.call(this);this.ca=0;}
function AVa(a,b){a.o$(a.c$(),b);return 1;}
function B9(a){var b;b=new Yy;b.jR=a;b.qW=a.ca;b.l9=a.c$();b.ii=(-1);return b;}
function AUw(a,b,c){var d,e;if(b>=0&&b<=a.c$()){if(c.e5())return 0;d=c.ck();while(d.cZ()){e=b+1|0;a.o$(b,d.cm());b=e;}return 1;}c=new BU;X(c);N(c);}
function A5M(a,b,c){c=new DW;X(c);N(c);}
function A4b(a,b){var c;c=new DW;X(c);N(c);}
function LL(a,b){var c,d;c=a.c$();d=0;while(true){if(d>=c)return (-1);if(BR(b,a.jc(d)))break;d=d+1|0;}return d;}
function ATJ(a,b){var c,d;if(!E3(b,Nl))return 0;c=b;if(a.p!=c.p)return 0;d=0;while(d<c.p){if(!BR(BI(a,d),BI(c,d)))return 0;d=d+1|0;}return 1;}
var MV=G(EF);
var PA=G(0);
var AFT=G(0);
function UT(){var a=this;MV.call(a);a.pW=null;a.m4=null;a.lI=0;}
var L9=G(0);
function Er(){var a=this;B.call(a);a.pJ=null;a.pQ=null;}
var Ei=G(0);
var W0=G(0);
var P1=G(0);
function ZB(){var a=this;Er.call(a);a.kA=null;a.mX=null;a.Fb=null;a.m0=0;}
function AJp(a,b){var c;c=ADR(a,b);if(c===null)return null;a.kA=LG(a,a.kA,b);a.m0=a.m0+1|0;return c.kY;}
function ADR(a,b){var c,d;c=a.kA;while(true){if(c===null)return null;d=NA(a.mX,b,c.mx);if(!d)break;c=d>=0?c.ce:c.b4;}return c;}
function Pd(a,b,c){var d,e;if(b===null){b=new Li;d=null;b.mx=c;b.kY=d;b.hg=1;b.ho=1;return b;}e=NA(a.mX,c,b.mx);if(!e)return b;if(e>=0)b.ce=Pd(a,b.ce,c);else b.b4=Pd(a,b.b4,c);Ff(b);return NJ(b);}
function LG(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=NA(a.mX,c,b.mx);if(d<0)b.b4=LG(a,b.b4,c);else if(d>0)b.ce=LG(a,b.ce,c);else{e=b.ce;if(e===null)return b.b4;f=b.b4;g=P(Li,e.hg).data;h=0;while(true){b=e.b4;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.ce;while(h>0){h=h+(-1)|0;j=g[h];j.b4=b;Ff(j);b=NJ(j);}e.ce=b;e.b4=f;Ff(e);b=e;}Ff(b);return NJ(b);}
function ABT(){B.call(this);this.Bv=null;}
function ABU(){var a=this;B.call(a);a.AA=null;a.Az=0;}
function AYf(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.AA;d=a.Az;AJZ(b.data);e=c.m5;f=e.pW;if(f===null)g=null;else{g=f.vz;e.pW=g;if(g!==null)g.B_=null;else e.m4=null;e.lI=e.lI-1|0;e.ca=e.ca+1|0;g=f.r$;}if(g!==null)UJ(c,g.vQ,g.Cg,g.BJ,d);else{h=c.p4.data;i=c.iX;c.iX=i+1|0;h[i]=d;}c=c.Da;b=b.data;if(!AJZ(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;X(b);N(b);}if(b.length<1){b=new BU;AIC(b);N(b);}e=C5(b[0]);f=AJp(c.Bv,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=F0(GP(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A7_(GP(e));else if(e instanceof $rt_globals.File?1:0)k[i]=AN3(GP(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ABX(GP(b[m]));k[i]=AIT(GP(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=GP(b[m]);k[i]=A9h(GP(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=CT(h,i);f.g(h);}}
function AG6(){var a=this;B.call(a);a.cK=null;a.j8=null;a.Gi=null;a.eN=null;}
function A9v(a,b){var c=new AG6();A5H(c,a,b);return c;}
function A5H(a,b,c){var d,e,f,g;a.eN=null;a.j8=b;d=new Z$;d.bB=CW(P(Cj,0));d.pc=CW(P(Cj,0));d.b2=CW(P(CJ,0));d.fT=CW(P(EZ,0));d.cH=CW(P(CS,0));d.hj=CW(P(FR,0));d.hM=CW(P(Gf,0));d.mV=CW(P(T,0));d.nu=CW(P(T,0));d.dN=c;a.cK=d;e=$rt_globals.window;f=P(Du,14);g=f.data;d=new AEM;d.rM=a;g[0]=C$(a,b,C(42),d);d=new AEN;d.BG=a;g[1]=C$(a,b,C(43),d);d=new AEO;d.zh=a;g[2]=C$(a,b,C(44),d);d=new AEP;d.xs=a;g[3]=C$(a,b,C(45),d);d=new AEQ;d.u1=a;g[4]=C$(a,b,C(46),d);d=new AER;d.r6=a;g[5]=C$(a,b,C(47),d);d=new AES;d.Dq=a;g[6]
=C$(a,b,C(48),d);d=new AET;d.Bh=a;g[7]=C$(a,b,C(49),d);d=new AEU;d.yU=a;g[8]=C$(a,b,C(50),d);d=new AEV;d.wU=a;g[9]=C$(a,b,C(51),d);d=new Xe;d.wr=a;g[10]=C$(a,b,C(52),d);d=new Xf;d.vG=a;e.addEventListener("paste",Bw(d,"handleEvent"),!!1);g[11]=WL(a,e,C(53),d);d=new Xg;d.x$=a;g[12]=C$(a,e,C(54),d);d=new Xh;d.C0=a;g[13]=C$(a,e,C(55),d);c=new Sf;c.Ec=f;a.Gi=c;e=new AFP;e.zV=b;b.onpointerdown=Bw(e,"f");e=new AFQ;e.y6=b;b.onpointerup=Bw(e,"f");}
function X2(){return (EL()).activeElement;}
function C$(a,b,c,d){b.addEventListener($rt_ustr(c),Bw(d,"handleEvent"));return WL(a,b,c,d);}
function WL(a,b,c,d){var e;e=new AAu;e.FN=b;e.FP=c;e.FO=d;return e;}
function ADa(a,b){var c;c=new ADT;c.xr=b;return c;}
function Fp(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.j8.getBoundingClientRect();e=BK(G$((b.clientX-d.left)*c),G$((b.clientY-d.top)*c));f=AL$(a.eN);d=new Pw;ADB(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k=e;d.FC=f;return d;}
function Xk(a,b,c){var d,e,f,g;d=new Rg;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ADB(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.pu=0;d.eB=e;d.bb=f;d.km=c;d.Bm=g;return d;}
function Ek(a,b){b.stopPropagation();b.preventDefault();}
function OA(){var a=this;B.call(a);a.qg=null;a.cv=null;a.be=null;a.mz=0;a.B$=null;a.FY=0;a.EX=0;a.lC=null;a.lr=null;a.E$=null;a.Gy=null;a.v7=null;a.yu=null;a.jm=null;a.iH=null;a.ku=null;a.Ff=null;a.sX=null;a.dq=null;a.C5=null;a.qu=0;a.nd=0;a.oU=0;a.oJ=0;a.lU=0;a.oP=null;a.o0=0.0;a.qB=0.0;}
function AM4(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dq=new Bh;a.qu=0;a.oP=new AE0;a.qg=c;a.mz=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(56)),g);$rt_globals.console.info($rt_ustr(K(h)));a.be=b;a.cv=Lg(c,4,4,1);i=AN1(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B6(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new R9;H2();c=A_h;m.fg=b;m.iw=c;m.vf=j.length/c.nO|0;m.C1
=l.length;n=b.createBuffer();m.yi=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.xu=null;n=b.createBuffer();m.wY=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sX=m;a.EX=Ob(g,C(57));c=new AAv;c.ep=b;a.B$=c;a.o0=e;a.qB=f;d=b.getParameter(3379);a.FY=d;c=new J;L(c);V(H(c,C(58)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dm,9);i=k.data;c=A8e(b);a.lC=c;i[0]=c;c=A88(b,C(59));a.lr=c;i[1]=c;c=new AAW;IC(c,b,
C(60),C(61),A_h);a.E$=c;i[2]=c;c=A9X(b);a.Gy=c;i[3]=c;c=new Qy;W8(c,b,C(62),C(63));a.v7=c;i[4]=c;c=A9$(b);a.yu=c;i[5]=c;c=A8N(b);a.jm=c;i[6]=c;c=A9S(b);a.iH=c;i[7]=c;c=A9T(b);a.ku=c;i[8]=c;a.Ff=k;AFB(b,C(64));}
function IV(a,b,c){return G1(a,b,c,400,0);}
function Ib(a,b,c){return Lg(a.qg,b,c,0);}
function Eg(a,b,c,d){return Lg(a.qg,b,c,d);}
function AFf(a,b,c,d,e,f){var g,h;Cr(a.cv,c);g=Eg(a,LR(a.cv,b)+(d*2|0)|0,e,f);Cr(g,c);B1(g,b,d,Ml(c,e));h=C4(a);CU(h,g);EP(g);return h;}
function EY(a,b){var c,d,e,f,g;c=a.be;d=b.bq;e=b.bu;f=b.bi;g=b.bD;c.clearColor(d,e,f,g);a.be.clear(16384);}
function Ca(a,b){var c;if(b==a.nd)return b;if(!b)a.be.disable(3042);else{a.be.enable(3042);a.be.blendFuncSeparate(770,771,1,1);}c=a.nd;a.nd=b;return c;}
function Of(a,b,c){Mu(a,b.a,b.b,c);}
function Mu(a,b,c,d){var e,f;e=d.a;f=d.b;a.oJ=1;a.lU=1;d=a.oP;d.uR=b;d.uS=c;d.uQ=e;d.uP=f;ADD(a);}
function Gz(a){a.oJ=0;a.lU=0;ADD(a);}
function ADD(a){var b,c,d,e,f,g;b=a.oU;c=a.oJ;if(b!=c){a.oU=c;if(!c)a.be.disable(3089);else a.be.enable(3089);}if(a.oU&&a.lU){a.lU=0;d=a.be;e=a.oP;b=e.uR;c=a.dq.b-e.uS|0;f=e.uP;c=c-f|0;g=e.uQ;d.scissor(b,c,g,f);}}
function Gn(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sX;c=a.qu;d=b.iw.BP;e=b.fg;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.fg;h=b.yi;e.bindBuffer(34962,h);i=b.iw.q7.data;g=i.length;j=0;while(j<g){k=i[j];l=b.fg;m=k.kb;n=k.g1;o=b.iw.nO*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.g1|0;j=j+1|0;}a:{e=b.xu;if(e!==null){c=0;b.fg.bindBuffer(34962,e);i=b.iw.AU.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.fg;j=e.kb;p=e.g1;m=e.s5;n=b.iw.zT;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.g1|0;g=g+1|0;}}}q=b.wY;if(q===null){c=b.vf;if(c>0)b.fg.drawArrays(4,0,c);}else{b.fg.bindBuffer(34963,q);k=b.fg;g=b.C1;k.drawElements(4,g,5123,0);}a.qu=d;}
function Bv(a,b,c,d,e){GX(a,a.lC);G9(a.lC,a.be,b,c,d,a.dq);d=a.lC;FX(a.be,d.CH,e);Gn(a);}
function AGa(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;GX(a,a.iH);G9(a.iH,a.be,b,c,d,a.dq);j=a.iH;d=a.be;k=j.xV;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.xU;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.iH;FX(a.be,d.yH,i);Gn(a);}
function MP(a,b,c,d,e,f,g,h){var i,j;GX(a,a.ku);G9(a.ku,a.be,b,c,d,a.dq);d=a.ku;i=a.be;j=d.vc;i.uniform2f(j,e,f);FX(i,d.zy,g);d=a.ku;FX(a.be,d.yk,h);Gn(a);}
function DR(a,b,c,d,e,f,g,h,i){var j;j=!i?a.v7:a.yu;GX(a,j);ANq(j,a.be,!i?a.qB:a.o0);G9(j,a.be,b,c,d,a.dq);OF(j,a.be,f);AGf(j,a.be,f,e);AMi(j,a.be,g,h);Gn(a);}
function C4(a){var b,c;b=new I0;c=a.B$;b.fe=new Bh;b.e8=c;b.gw=c.ep.createTexture();A_i=A_i+1|0;return b;}
function NC(a,b){AFB(a.be,b);}
function GX(a,b){var c,d;if(b!==a.C5){c=a.be;d=b.bM;c.useProgram(d);a.C5=b;}}
function Vw(){var a=this;OA.call(a);a.EK=null;a.E_=null;}
function G1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cv;g=AK4(b,c,d,e);Lc(f,g);h=f.dx.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ez(f,C(65));m=Ez(f,C(66));h=new Ma;n=g;h.oY=b;h.pG=c;h.D9=d;h.En=e;h.eK=i;h.e6=j;h.D0=l;h.qO=k;h.rA=n;h.ux=C6(i);h.E4=C6(h.e6);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.D5=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(67);}h.DW=b;return h;}
function CA(){B.call(this);this.C=null;}
function Ex(a,b){a.C=b;}
function A61(a,b){return 0;}
function Z$(){var a=this;B.call(a);a.bB=null;a.pc=null;a.b2=null;a.fT=null;a.cH=null;a.hj=null;a.hM=null;a.mV=null;a.nu=null;a.dN=null;a.fu=null;a.y0=0;}
function UG(a,b){var c,d,e,f;DK(a.dN);c=(B5(!b.km?a.pc:a.bB)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bk(b);if(f)break;if(b.pu)break;e=e+1|0;}return f;}
function SC(a,b,c){var d,e,f;DK(a.dN);d=(B5(a.hj)).data;e=d.length;f=0;while(f<e){if(d[f].fz(b,c))return 1;f=f+1|0;}return 0;}
function AEM(){B.call(this);this.rM=null;}
function A3U(a,b){var c;c=a.rM;if(UG(c.cK,Xk(c,b,1)))Ek(c,b);}
function AEN(){B.call(this);this.BG=null;}
function A37(a,b){var c;c=a.BG;if(UG(c.cK,Xk(c,b,0)))Ek(c,b);}
function AEO(){B.call(this);this.zh=null;}
function ATu(a,b){var c,d,e,f,g,h,i;c=a.zh;if(c.eN!==null){a:{b:{d=Fp(c,b);e=c.cK;DK(e.dN);f=e.fu;if(f!==null)f.g(d);else{g=(B5(e.b2)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].b3(d))break a;i=i+1|0;}}}}Ek(c,b);}}
function AEP(){B.call(this);this.xs=null;}
function A2w(a,b){var c,d,e,f,g,h;c=a.xs;b.button;if(c.eN!==null)a:{d=Fp(c,b);c=c.cK;e=b.button;DK(c.dN);if(c.fu===null){f=(B5(c.b2)).data;g=f.length;h=0;while(h<g){b=f[h].cD(d,e);if(b!==null){c.fu=b;c.y0=e;break a;}h=h+1|0;}}}}
function AEQ(){B.call(this);this.u1=null;}
function A2L(a,b){var c,d,e,f,g,h,i;c=a.u1;b.button;if(c.eN!==null){d=Fp(c,b);e=c.cK;f=b.button;DK(e.dN);if(f==e.y0&&e.fu!==null)e.fu=null;g=(B5(e.b2)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dW(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Ek(c,b);}}
function AER(){B.call(this);this.r6=null;}
function AU3(a,b){var c,d,e,f,g,h,i,j,k;c=a.r6;if(c.eN!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cK;f=Fp(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DK(e.dN);i=(B5(e.fT)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dU(f,d,h))break b;k=k+1|0;}}Ek(c,b);}}
function AES(){B.call(this);this.Dq=null;}
function ARC(a,b){var c,d,e,f,g,h,i,j;c=a.Dq;if(c.eN!==null){d=Fp(c,b);e=c.cK;f=b.button;g=b.detail;DK(e.dN);h=(B5(e.b2)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cU(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Ek(c,b);}}
function AET(){B.call(this);this.Bh=null;}
function A7v(a,b){var c,d,e,f,g,h,i;c=a.Bh;if(c.eN!==null){d=Fp(c,b);e=c.cK;DK(e.dN);f=(B5(e.cH)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bN(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Ek(c,b);}}
function AEU(){B.call(this);this.yU=null;}
function AQ2(a,b){var c,d,e,f,g,h;b=a.yU.cK;if(b.fu!==null){c=D4();d=BT(b.fu);e=new J;L(e);H(H(e,C(68)),d);Bf(c,K(e));}f=(B5(b.nu)).data;g=f.length;h=0;while(h<g){f[h].e();h=h+1|0;}DK(b.dN);}
function AEV(){B.call(this);this.wU=null;}
function AVN(a,b){var c,d,e;b=a.wU.cK;c=(B5(b.mV)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.fu!==null)b.fu=null;DK(b.dN);}
function Xe(){B.call(this);this.wr=null;}
function A62(a,b){var c;c=a.wr;if(c.eN!==null)Fp(c,b);}
function Xf(){B.call(this);this.vG=null;}
function AS8(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vG;if(X2()===c.j8){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B5(c.cK.hM)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cb();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cK.dN;m=new Qj;m.w4=k;m.w5=l;g.getAsString(Bw(m,"accept"));Ek(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(69)),k),C(70)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function Xg(){B.call(this);this.x$=null;}
function ATy(a,b){var c;c=a.x$;if(X2()===c.j8&&SC(c.cK,ADa(c,b),0))Ek(c,b);}
function Xh(){B.call(this);this.C0=null;}
function A4e(a,b){var c;c=a.C0;if(X2()===c.j8&&SC(c.cK,ADa(c,b),1))Ek(c,b);}
var ADv=G(0);
var ADF=G();
function Lg(a,b,c,d){var e,f,g,h,i;e=new ABn;e.jQ=d;A$1=A$1+1|0;e.oC=b;e.n2=c;f=(EL()).createElement("canvas");e.jG=f;g=b;f.width=g;h=e.jG;f=c;h.height=f;if(!d)g=e.jG.getContext("2d");else{i=e.jG;h=AY9();g=i.getContext("2d",h);}e.dx=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ADE=G();
function ASj(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Py(){var a=this;B.call(a);a.T=null;a.n=null;a.bI=null;}
var K_=G();
var A$L=null;function NA(a,b,c){return b.m1(c);}
function AHV(){A$L=new K_;}
function AJw(){var a=this;B.call(a);a.dm=null;a.gG=null;a.cT=0;}
function CW(a){var b=new AJw();ARx(b,a);return b;}
function ARx(a,b){a.dm=b;}
function FH(a,b){return a.dm.data[b];}
function Z(a,b){var c,d,e;c=a.cT;d=a.dm;if(c==d.data.length)a.dm=CT(d,c+4|0);d=a.dm.data;e=a.cT;a.cT=e+1|0;d[e]=b;a.gG=null;}
function Tl(a,b){var c,d,e,f;c=0;while(true){d=a.dm.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cT=a.cT-1|0;a.gG=null;}c=c+1|0;}}
function B5(a){var b;b=a.gG;if(!(b!==null&&b.data.length==a.cT))a.gG=CT(a.dm,a.cT);return a.gG;}
var Cj=G(0);
var CJ=G(0);
function A16(a,b){return 0;}
function AWC(a,b,c){return null;}
function AOt(a,b,c){return 0;}
function A4s(a,b,c,d){return 0;}
var EZ=G(0);
var DS=G(0);
var CS=G(0);
var FR=G(0);
var CO=G(0);
var Gf=G(0);
function Sf(){B.call(this);this.Ec=null;}
function Bh(){var a=this;B.call(a);a.a=0;a.b=0;}
function BK(a,b){var c=new Bh();RG(c,a,b);return c;}
function AL$(a){var b=new Bh();AP9(b,a);return b;}
function RG(a,b,c){a.a=b;a.b=c;}
function AP9(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function Y(a,b,c){a.a=b;a.b=c;}
function AJ7(a){var b,c,d;b=a.a;c=a.b;d=new J;L(d);V(H(V(H(d,C(71)),b),C(72)),c);return K(d);}
function AR_(a,b){var c;a:{b:{if(a!==b){if(BF(b)!==BF(a))break b;if(!Kw(a,b))break b;}c=1;break a;}c=0;}return c;}
function Kw(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AE0(){var a=this;B.call(a);a.uR=0;a.uS=0;a.uQ=0;a.uP=0;}
var AI0=G();
var AKJ=G(0);
function AAv(){B.call(this);this.ep=null;}
function OO(){var a=this;B.call(a);a.bM=null;a.GB=null;}
function AMm(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(73):C(74);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bf(Bj(),g);Bf(D4(),C(75));Bf(D4(),d);Bf(D4(),C(75));b=new Bt;Bn(b,g);N(b);}
function Dm(){var a=this;OO.call(a);a.yT=null;a.tw=null;a.oy=null;}
function A_j(a,b,c,d){var e=new Dm();IC(e,a,b,c,d);return e;}
function IC(a,b,c,d,e){var f,g,h,i,j,k;a.GB=e;f=AMm(b,35633,c);d=AMm(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bM=g;h=e.vr.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bM;k=c.kb;c=c.tG;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bM;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AFB(b,C(76));a.oy=new Bh;c=a.bM;a.yT=b.getUniformLocation(c,"uResolution");c=a.bM;a.tw=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new J;L(c);H(H(c,C(77)),d);Bn(b,K(c));N(b);}
function AHd(a,b,c){var d,e,f;if(!Kw(a.oy,c)){Ct(a.oy,c);d=a.yT;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function G9(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.tw;b.uniform4f(e,i,l,h,j);AHd(a,b,f);}
function AM9(){Dm.call(this);this.CH=null;}
function A8e(a){var b=new AM9();A1R(b,a);return b;}
function A1R(a,b){var c;H2();IC(a,b,C(60),C(78),A_h);c=a.bM;a.CH=b.getUniformLocation(c,"uColor");}
function FK(){Dm.call(this);this.uW=null;}
function A88(a,b){var c=new FK();ADc(c,a,b);return c;}
function A_k(a,b,c){var d=new FK();ADh(d,a,b,c);return d;}
function ADc(a,b,c){ADh(a,b,C(60),c);}
function ADh(a,b,c,d){H2();IC(a,b,c,d,A_h);c=a.bM;a.uW=b.getUniformLocation(c,"sDiffuse");}
function OF(a,b,c){var d;d=a.uW;b.uniform1i(d,0);b.activeTexture(33984);c=c.gw;b.bindTexture(3553,c);}
var AAW=G(Dm);
function AHQ(){FK.call(this);this.DP=null;}
function A9X(a){var b=new AHQ();AUx(b,a);return b;}
function AUx(a,b){var c;ADc(a,b,C(79));c=a.bM;a.DP=b.getUniformLocation(c,"uContrast");}
function HU(){var a=this;FK.call(a);a.sM=null;a.tP=null;a.va=null;a.B1=null;a.rh=0.0;}
function A_l(a,b,c){var d=new HU();W8(d,a,b,c);return d;}
function W8(a,b,c,d){ADh(a,b,c,d);c=a.bM;a.sM=b.getUniformLocation(c,"uTexTransform");c=a.bM;a.tP=b.getUniformLocation(c,"uColor");c=a.bM;a.va=b.getUniformLocation(c,"uBgColor");c=a.bM;a.B1=b.getUniformLocation(c,"uTextPow");}
function ANq(a,b,c){var d;if(a.rh!==c){a.rh=c;d=a.B1;b.uniform2f(d,c,0.0);}}
function AMi(a,b,c,d){FX(b,a.tP,c);FX(b,a.va,d);}
function AGf(a,b,c,d){var e,f,g,h,i,j;c=c.fe;e=c.a;f=c.b;g=d.bq;h=e;g=g/h;i=d.bu;j=f;i=i/j;h=d.bi/h;j=d.bD/j;c=a.sM;b.uniform4f(c,g,i,h,j);}
var Qy=G(HU);
var AJO=G(HU);
function A9$(a){var b=new AJO();A0x(b,a);return b;}
function A0x(a,b){W8(a,b,C(62),C(80));}
function AKX(){var a=this;FK.call(a);a.xv=null;a.xt=null;a.tQ=null;}
function A8N(a){var b=new AKX();AQx(b,a);return b;}
function AQx(a,b){var c,d;ADc(a,b,C(81));c=a.bM;a.xv=b.getUniformLocation(c,"uColorB");d=a.bM;a.xt=b.getUniformLocation(d,"uColorF");d=a.bM;a.tQ=b.getUniformLocation(d,"uContrast");}
function AMy(){var a=this;Dm.call(a);a.yH=null;a.xV=null;a.xU=null;}
function A9S(a){var b=new AMy();A0B(b,a);return b;}
function A0B(a,b){var c;H2();IC(a,b,C(60),C(82),A_h);c=a.bM;a.yH=b.getUniformLocation(c,"uColor");c=a.bM;a.xV=b.getUniformLocation(c,"uPoints1");c=a.bM;a.xU=b.getUniformLocation(c,"uPoints2");}
function AGJ(){var a=this;Dm.call(a);a.yk=null;a.vc=null;a.zy=null;}
function A9T(a){var b=new AGJ();AZm(b,a);return b;}
function AZm(a,b){var c;H2();IC(a,b,C(60),C(83),A_h);c=a.bM;a.yk=b.getUniformLocation(c,"uColor");c=a.bM;a.vc=b.getUniformLocation(c,"uBaseline");c=a.bM;a.zy=b.getUniformLocation(c,"uScaleHExp");}
var ABz=G(0);
var ANJ=G(0);
function FX(b,c,d){var e,f,g,h;e=d.bq;f=d.bu;g=d.bi;h=d.bD;b.uniform4f(c,e,f,g,h);}
function AFB(b,c){var d,e;d=b.getError();if(d){b=Bj();e=new J;L(e);V(H(e,c),d);Bf(b,K(e));}}
function AAu(){var a=this;B.call(a);a.FN=null;a.FP=null;a.FO=null;}
function R9(){var a=this;B.call(a);a.fg=null;a.iw=null;a.yi=null;a.xu=null;a.wY=null;a.vf=0;a.C1=0;}
function CE(){var a=this;B.call(a);a.FL=null;a.fv=0;}
function Dv(a,b,c){a.FL=b;a.fv=c;}
function HB(){var a=this;CE.call(a);a.vr=null;a.q7=null;a.AU=null;a.nO=0;a.zT=0;a.BP=0;}
var A_h=null;var A_m=null;function H2(){H2=Bm(HB);ARX();}
function AOl(){H2();return A_m.eb();}
function ARX(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new HB;c=P(Et,2);d=c.data;ANr();d[0]=A_n;d[1]=A_o;H2();Dv(b,C(84),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.qM.fv){case 0:f=f+l.g1|0;h=h+1|0;break a;case 1:e=e+l.g1|0;g=g+1|0;break a;default:}}i=i|1<<l.kb;k=k+1|0;}b.vr=c;b.nO=e;b.zT=f;b.BP=i;c=P(Et,g);m=c.data;b.q7=c;c=P(Et,h);n=c.data;b.AU=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.qM.fv){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A_h
=b;c=P(HB,1);c.data[0]=b;A_m=c;}
var M5=G(0);
var Uf=G(0);
var ADM=G(0);
var Hm=G();
function Nw(){Hm.call(this);this.DF=null;}
function AHv(){var a=this;Nw.call(a);a.EU=0;a.nY=0;a.l_=null;a.nz=null;a.v2=null;}
function ATH(a,b){var c=new AHv();A51(c,a,b);return c;}
function A51(a,b,c){a.DF=b;b=new J;L(b);a.l_=b;a.nz=B6(32);a.EU=c;AHo();a.v2=A_p;}
function ACU(a,b,c,d){var e,$$je;e=a.DF;if(e===null)a.nY=1;if(!(a.nY?0:1))return;a:{try{e.ns(b,c,d);break a;}catch($$e){$$je=Fc($$e);if($$je instanceof JG){}else{throw $$e;}}a.nY=1;}}
function Y3(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ALW(b,c,d-c|0);e=DU(Bd(16,Be(e.length,1024)));g=ALI(e,0,e.data.length);h=a.v2;i=new Rz;b=DU(1);j=b.data;j[0]=63;HN();k=A_q;i.oB=k;i.n3=k;c=j.length;if(c&&c>=i.xT){i.FK=h;i.tE=b.eb();i.EQ=2.0;i.xT=4.0;i.zD=B6(512);i.r4=DU(512);k=A_r;if(k===null){i=new BU;Bn(i,C(85));N(i);}i.oB=k;i.n3=k;a:while(true){if(i.l3==3){f=new CV;X(f);N(f);}i.l3=2;b:{while(true){try{k=AGC(i,f,g);}catch($$e){$$je=Fc($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Jz(k))
{d=Cl(f);if(d<=0)break b;k=EK(d);}else if(IJ(k))break;h=!MW(k)?i.oB:i.n3;c:{if(h!==A_r){if(h===A_s)break c;else break b;}d=Cl(g);b=i.tE;l=b.data.length;if(d<l){k=A_t;break b;}AFd(g,b,0,l);}FO(f,f.bf+LH(k)|0);}}l=IJ(k);ACU(a,e,0,g.bf);QI(g);if(!l){while(true){d=i.l3;if(d!=2&&d!=4){f=new CV;X(f);N(f);}f=A_u;if(f===f)i.l3=3;l=IJ(f);ACU(a,e,0,g.bf);QI(g);if(!l)break;}return;}}N(AZ4(f));}i=new BU;Bn(i,C(86));N(i);}
function Bf(a,b){var c,d,e,f,g,h,i,j;Br(BM(a.l_,b),10);b=a.l_;c=b.I;d=a.nz;if(c>d.data.length)d=B6(c);e=0;f=0;if(e>c){b=new BJ;Bn(b,C(87));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Y3(a,d,0,c);a.l_.I=0;}
function ADY(a){var b;b=a.nz;b.data[0]=10;Y3(a,b,0,1);}
function H8(){Hm.call(this);this.Gm=null;}
function Xs(a){a.Gm=DU(1);}
var Mi=G(H8);
var A$4=null;function ASc(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AIH(){var b;b=new Mi;Xs(b);A$4=b;}
function Et(){var a=this;CE.call(a);a.tG=null;a.qM=null;a.g1=0;a.s5=0;a.kb=0;}
var A_n=null;var A_o=null;var A_v=null;function ANr(){ANr=Bm(Et);A1h();}
function A8o(a,b,c,d,e,f,g){var h=new Et();Wc(h,a,b,c,d,e,f,g);return h;}
function AN0(){ANr();return A_v.eb();}
function Wc(a,b,c,d,e,f,g,h){ANr();Dv(a,b,c);a.tG=d;a.qM=e;a.g1=f;a.s5=g;a.kb=h;}
function A1h(){var b;b=new Et;AH_();Wc(b,C(88),0,C(89),A_w,2,0,0);A_n=b;b=A8o(C(90),1,C(91),A_w,2,0,1);A_o=b;A_v=I(Et,[A_n,b]);}
function No(){var a=this;B.call(a);a.FB=null;a.F1=null;}
function AIQ(b){var c,d;if(GT(b))N(ALk(b));if(!AMQ(Q(b,0)))N(ALk(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AMQ(d))break a;else N(ALk(b));}}c=c+1|0;}}
function AMQ(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var M8=G(No);
var A_p=null;function AHo(){AHo=Bm(M8);AQw();}
function AI2(a){var b,c;b=new Ul;b.g0=C(92);HN();c=A_q;b.jW=c;b.oH=c;b.FW=a;b.xZ=0.3333333432674408;b.Ep=0.5;b.yM=DU(512);b.BE=B6(512);return b;}
function AQw(){var b,c,d,e,f;b=new M8;AHo();c=P(BC,0);d=c.data;AIQ(C(93));e=d.length;f=0;while(f<e){AIQ(d[f]);f=f+1|0;}b.FB=C(93);b.F1=c.eb();A_p=b;}
function ZF(){var a=this;B.call(a);a.gS=null;a.q1=null;a.ne=null;a.BU=null;a.th=null;a.tB=null;}
function ALn(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gS,b,c));}
function PR(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.q1[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gS,b,d));f=e.data;Fv();d=f.length;AHo();g=A_p;h=ALI(e,0,d);a:{try{i=AI2(g);HN();g=AKQ(AIj(ANl(i,A_r),A_r),h);break a;}catch($$e){$$je=Fc($$e);if($$je instanceof GF){g=$$je;}else{throw $$e;}}h=new AFm;h.le=1;h.lz=1;h.jl=C(94);h.n4=g;N(h);}if(!g.bf&&g.eI==g.o1)c.cq=g.i4;else{f=B6(Cl(g));e=f.data;c.cq=f;Qd(g,f,0,e.length);}return c;}
function X4(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.ne[e]){e=e+1|0;}d=e-d|0;J3(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gS,b,d)));return c;}
var Ix=G(CE);
var A_x=null;var A_w=null;var A_y=null;function AH_(){AH_=Bm(Ix);A0g();}
function AQs(a,b){var c=new Ix();AM0(c,a,b);return c;}
function ASQ(){AH_();return A_y.eb();}
function AM0(a,b,c){AH_();Dv(a,b,c);}
function A0g(){var b;A_x=AQs(C(95),0);b=AQs(C(96),1);A_w=b;A_y=I(Ix,[A_x,b]);}
var Ol=G(H8);
var A$5=null;function AQG(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AJ5(){var b;b=new Ol;Xs(b);A$5=b;}
function AIW(){BU.call(this);this.DV=null;}
function ALk(a){var b=new AIW();AV8(b,a);return b;}
function AV8(a,b){X(a);a.DV=b;}
var VI=G(EM);
var M7=G(0);
function AFP(){B.call(this);this.zV=null;}
function AVv(a,b){a.zV.setPointerCapture(b.pointerId);}
function AFQ(){B.call(this);this.y6=null;}
function APc(a,b){a.y6.releasePointerCapture(b.pointerId);}
function IH(){var a=this;B.call(a);a.o1=0;a.bf=0;a.eI=0;a.kh=0;}
function AEy(a,b){a.kh=(-1);a.o1=b;a.eI=b;}
function FO(a,b){var c,d,e;if(b>=0&&b<=a.eI){a.bf=b;if(b<a.kh)a.kh=0;return a;}c=new BU;d=a.eI;e=new J;L(e);Br(V(H(V(H(e,C(97)),b),C(98)),d),93);Bn(c,K(e));N(c);}
function Cl(a){return a.eI-a.bf|0;}
function El(a){return a.bf>=a.eI?0:1;}
var ABN=G(0);
var Mb=G(IH);
function AJR(b){var c,d;if(b>=0)return AUK(0,b,B6(b),0,b,0);c=new BU;d=new J;L(d);V(H(d,C(99)),b);Bn(c,K(d));N(c);}
function ALW(b,c,d){return AUK(0,b.data.length,b,c,c+d|0,0);}
function Qd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BJ;i=new J;L(i);V(H(V(H(i,C(100)),g),C(101)),f);Bn(h,K(i));N(h);}if(Cl(a)<d){j=new OW;X(j);N(j);}if(d<0){j=new BJ;k=new J;L(k);H(V(H(k,C(102)),d),C(103));Bn(j,K(k));N(j);}g=a.bf;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.i4.data[m+a.qP|0];l=l+1|0;c=n;m=o;}a.bf=g+d|0;return a;}}b=b.data;j=new BJ;d=b.length;k=new J;L(k);Br(V(H(V(H(k,C(104)),c),C(98)),d),41);Bn(j,K(k));N(j);}
function N0(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.q2){b=new K3;X(b);N(b);}e=d-c|0;if(Cl(a)<e){b=new Ki;X(b);N(b);}if(c>M(b)){f=new BJ;d=M(b);b=new J;L(b);Br(V(H(V(H(b,C(105)),c),C(98)),d),41);Bn(f,K(b));N(f);}if(d>M(b)){f=new BJ;c=M(b);b=new J;L(b);V(H(V(H(b,C(106)),d),C(107)),c);Bn(f,K(b));N(f);}if(c>d){b=new BJ;f=new J;L(f);V(H(V(H(f,C(105)),c),C(108)),d);Bn(b,K(f));N(b);}g=a.bf;while(c<d){h=g+1|0;i=c+1|0;ABS(a,g,Q(b,c));g=h;c=i;}a.bf=a.bf+e|0;return a;}
function NP(){var a=this;IH.call(a);a.nX=0;a.qw=null;a.EC=null;}
function ALI(b,c,d){var e,f,g;e=b.data;f=new AFc;g=e.length;d=c+d|0;AEy(f,g);A1U();f.EC=A_z;f.nX=0;f.qw=b;f.bf=c;f.eI=d;f.EG=0;f.yh=0;return f;}
function AFd(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.yh){e=new K3;X(e);N(e);}if(Cl(a)<d){e=new Ki;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BJ;j=new J;L(j);V(H(V(H(j,C(109)),h),C(101)),g);Bn(i,K(j));N(i);}if(d<0){e=new BJ;i=new J;L(i);H(V(H(i,C(102)),d),C(103));Bn(e,K(i));N(e);}h=a.bf;k=h+a.nX|0;l=0;while(l<d){b=a.qw.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bf=h+d|0;return a;}}b=b.data;e=new BJ;d=b.length;i=new J;L(i);Br(V(H(V(H(i,C(104)),c),C(98)),d),41);Bn(e,
K(i));N(e);}
function QI(a){a.bf=0;a.eI=a.o1;a.kh=(-1);return a;}
function Je(){B.call(this);this.Fh=null;}
var A_s=null;var A_r=null;var A_q=null;function HN(){HN=Bm(Je);ATb();}
function AJz(a){var b=new Je();AMO(b,a);return b;}
function AMO(a,b){HN();a.Fh=b;}
function ATb(){A_s=AJz(C(110));A_r=AJz(C(111));A_q=AJz(C(112));}
var P5=G(CA);
function AS2(a){}
function ARR(a,b,c){}
function If(){var a=this;CA.call(a);a.dd=null;a.q=null;}
function AEx(a,b){var c,d,e;Ex(a,b);a.dd=AK3(0,0,64);c=new UO;c.bV=new Bh;c.dv=CW(P(CP,0));c.dB=new Bh;c.qN=new Bh;c.m2=new B4;c.DH=new B4;d=b.T;c.bP=d;e=b.bI;c.b9=e;c.cW=d.mz;c.dc=St(e);d=b.n.nu;e=new AAp;e.uV=c;Z(d,e);d=b.n.mV;e=new AAo;e.xm=c;Z(d,e);Z(b.n.hj,c);Z(b.n.hM,c);a.q=c;Z(b.n.bB,new ABB);b=b.n.bB;c=a.q;BG(c);d=new ABA;d.yL=c;Z(b,d);}
function H1(a){EY(a.C.T,a.dd);}
function AH1(a,b,c){var d,e,f,g,h;a:{d=a.q;Ct(d.bV,b);e=d.ct;if(e!==c){d.ct=c;f=(B5(d.dv)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].e0(e,c);h=h+1|0;}}}}
function Cq(){If.call(this);this.v=null;}
function Gw(a,b){Hf(a,b,1);}
function Hf(a,b,c){var d,e,f;AEx(a,b);d=new AFr;e=a.q;d.by=CW(P(U0,0));d.F=e;a.v=d;Z(a.q.dv,d);Z(b.n.b2,a.v);d=b.n.fT;e=a.v;BG(e);f=new XE;f.xd=e;Z(d,f);d=b.n.cH;e=a.v;BG(e);f=new XD;f.uE=e;Z(d,f);if(c){b=b.n.b2;f=a.q.dc;d=new Yo;d.xR=f;Z(b,d);}}
function AQA(a){H1(a);Kp(a.v);}
function I$(a,b,c){var d,e;AH1(a,b,c);d=(B5(a.v.by)).data.length;e=0;while(e<d){e=e+1|0;}}
function QS(a,b){var c,d,e,f,g;c=a.v;d=0;e=(B5(c.by)).data;f=e.length;g=0;while(g<f){d=e[g].Z.cL(b)|d;g=g+1|0;}return d;}
var Fs=G(0);
function AJF(a){a.eh(I_());}
function J0(a){a.eh(GD());}
function AKw(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Ju;c=new KM;d=new HO;AI3();Lw(d,A_A);M9(c,d,B0(A_B),B0(A_C),B0(A_D),B0(A_B),B0(A_E),B0(A_F),B0(A_G),B0(A_H),B0(A_I),B0(A_J));e=ALP(S(C(113)));f=(AM3()).data;g=f.length;h=P(K1,g);i=h.data;j=0;while(j<g){i[j]=f[j].qa;j=j+1|0;}k=AMB(S(C(114)),S(C(115)),S(C(116)),S(C(117)));l=new Jw;m=new JE;AYD();d=A_K;Po(m,d,A_L,A_M,A_N,A_O,d);Mv(l,m,ANm(),AJI(S(C(118)),S(C(113)),Cs(0)),ANm(),AJ8(1,0.07500000298023224),A_P,A_Q);Mk(b,c,e,h,k,l,AGi(S(C(119)),S(C(120)),S(C(121)),
S(C(122))));a.eh(b);}
var Ke=G(0);
var E1=G(0);
function Lu(){var a=this;Cq.call(a);a.H=null;a.M=null;a.jf=null;a.jY=0;a.lE=null;a.m8=null;a.AW=null;a.nW=null;a.f_=null;}
function A9U(a){var b=new Lu();AHr(b,a);return b;}
function AHr(a,b){var c,d,e;Hf(a,b,0);a.f_=AZv(a.q);c=I8(a.v);a.jf=c;a.H=G5(c);c=G5(a.jf);a.M=c;a.m8=AJs(a.H,c);c=a.H;c.cc=1;OZ(a.f_,c,a.M);c=a.H;d=new U_;d.CS=a;c.iV=d;c=a.M;d=new Va;d.Am=a;c.iV=d;AJq(a,0);NB(a.q,a.H);Z(b.n.fT,a);Z(b.n.b2,a);c=b.n.bB;d=new Vb;d.ym=a;Z(c,d);c=b.n.bB;d=new GS;e=new U9;e.wh=a;Hc(d,b,e);Z(c,d);Z(b.n.hj,a);Z(b.n.hM,a);b=b.n.cH;c=new U$;c.tU=a;Z(b,c);J0(a);}
function Xw(a,b){if(a.H===b)a.jY=a.jY|1;if(a.M===b)a.jY=a.jY|2;if((a.jY&3)==3)ANt(a);}
function AJq(a,b){Jv(a.H,b);Jv(a.M,b);}
function A6A(a,b,c){if(DB(a.q,a.H))return JJ(a.H,b,c);if(!DB(a.q,a.M))return 0;return JJ(a.M,b,c);}
function AHM(a){if(DB(a.q,a.H))return Xb(a,a.H);if(!DB(a.q,a.M))return null;return Xb(a,a.M);}
function Xb(a,b){var c;c=new T8;c.ts=b;return c;}
function AHp(a,b,c){var d;d=EE(c);if(b!==a.H)a.nW=d;else a.AW=d;b=a.AW;if(b!==null&&a.nW!==null)GJ(a.C.bI,EE(c));else{if(b!==null)GJ(a.C.bI,b);b=a.nW;if(b!==null)GJ(a.C.bI,b);}}
function ANt(a){var b,c,d;Bf(Bj(),C(123));b=a.H.d.h;c=a.M.d.h;d=new WN;d.tC=a;AKz(b,c,d,a.C.bI);}
function AVf(a,b){var c;c=QS(a,b);return Mc(a.H,b)|Mc(a.M,b)|c;}
function A2H(a){var b;H1(a);IS(a.H);IS(a.M);b=a.f_;AIE(b,b.i9.bP);Kp(a.v);}
function A1D(a){return EQ(0);}
function AVE(a){J5(a.H);J5(a.M);}
function A2B(a){K5(a.H);K5(a.M);}
function AWk(a,b){I5(a.H,b);I5(a.M,b);}
function A3z(a,b){K6(a.q,b);}
function APU(a,b){if(G2(a.v,b)){My(a.H);My(a.M);}}
function ASv(a,b,c){I$(a,b,c);AHZ(a,b,c);}
function AHZ(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Ck(20.0,c);f=new Bh;g=b.a/2|0;h=e/2|0;RG(f,g-h|0,b.b);M6(a.H,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;M6(a.M,d,f,c);Y(a.f_.i,f.a,d.b);Y(a.f_.j,d.a-f.a|0,f.b);}
function AOx(a,b){BG(b);Gb(a.jf,b);E_(a.H,b);E_(a.M,b);a.f_.iO=b;}
function AJl(a,b){if(b.bb!=121)return 0;return 1;}
function ALH(a,b){var c,d,e,f;if(DB(a.q,a.H)){c=a.jf;d=b.k;e=a.H;f=new PX;f.wc=a;Jd(c,d,e,a,a,a,f);}if(DB(a.q,a.M)){c=a.jf;b=b.k;d=a.M;e=new PW;e.vp=a;Jd(c,b,d,a,a,a,e);}return 1;}
function A3Y(a,b){var c,d;c=B3(a.H,b.k)&&YV(a.H,b)?1:0;d=B3(a.M,b.k)&&YV(a.M,b)?1:0;return !c&&!d?0:1;}
function A1G(a,b,c,d){var e,f;e=B3(a.H,b.k)&&PT(a.H,b,c,d)?1:0;f=B3(a.M,b.k)&&PT(a.M,b,c,d)?1:0;return !e&&!f?0:1;}
function ATt(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.H,b.k);e=B3(a.M,b.k);f=a.q;g=f.cf;h=g!==null?0:1;i=a.H;j=g!==i?0:1;k=g!==a.M?0:1;if(d&&!(!h&&!k))Cx(f,i);if(e&&!(!h&&!j))Cx(a.q,a.M);if(d){i=XN(a.H,b,c);if(i!==null)return i;}return !e?null:XN(a.M,b,c);}
function A4u(a,b,c){var d,e,f,g;d=B3(a.H,b.k);e=B3(a.M,b.k);f=d&&Ue(a.H,b,c)?1:0;g=e&&Ue(a.M,b,c)?1:0;return !f&&!g?0:1;}
function AUP(a,b,c,d){var e,f,g,h;e=B3(a.H,b.k);f=B3(a.M,b.k);g=e&&Ms(a.H,b,c,d)?1:0;h=f&&Ms(a.M,b,c,d)?1:0;return !g&&!h?0:1;}
function A19(a){return AHM(a);}
var AI6=G(Lu);
function A9q(a){var b=new AI6();A6m(b,a);return b;}
function A6m(a,b){var c;AHr(a,b);a.H.fl=1;a.M.fl=1;c=new UB;c.yp=a;Q9(a,c,C(124));c=new UD;c.BX=a;Q9(a,c,C(125));}
function ATE(a){return EQ(1);}
function Q9(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new PL;d=d.then(Bw(e,"f"));f=new PN;f.uY=b;f.uX=c;g=new PM;d.then(Bw(f,"f"),Bw(g,"f"));}
var AJu=G();
function A5P(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(126)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(Kz(b)){case -1570047148:if(!Bk(b,C(127)))break a;d=17;break a;case -1509980539:if(!Bk(b,C(128)))break a;d=13;break a;case -1351411913:if(!Bk(b,C(129)))break a;d=5;break a;case -1073555521:if(!Bk(b,C(130)))break a;d=14;break a;case -1045861099:if(!Bk(b,C(131)))break a;d=18;break a;case -1045861098:if(!Bk(b,C(132)))break a;d=19;break a;case -811765794:if(!Bk(b,C(133)))break a;d=6;break a;case -785237654:if
(!Bk(b,C(134)))break a;d=11;break a;case -695287066:if(!Bk(b,C(135)))break a;d=20;break a;case -643550180:if(!Bk(b,C(136)))break a;d=28;break a;case -631889171:if(!Bk(b,C(137)))break a;d=9;break a;case -536831301:if(!Bk(b,C(138)))break a;d=26;break a;case -439438829:if(!Bk(b,C(139)))break a;d=21;break a;case -357667878:if(!Bk(b,C(140)))break a;d=22;break a;case -223304637:if(!Bk(b,C(141)))break a;d=2;break a;case -193916863:if(!Bk(b,C(142)))break a;d=23;break a;case 2129957:if(!Bk(b,C(143)))break a;d=1;break a;case 3343967:if
(!Bk(b,C(144)))break a;d=10;break a;case 3556498:if(!Bk(b,C(145)))break a;d=4;break a;case 91636708:if(!Bk(b,C(146)))break a;d=25;break a;case 485517998:if(!Bk(b,C(147)))break a;d=7;break a;case 544901384:if(!Bk(b,C(148)))break a;d=3;break a;case 654963552:if(!Bk(b,C(149)))break a;d=24;break a;case 1030621992:if(!Bk(b,C(150)))break a;d=16;break a;case 1164939699:if(!Bk(b,C(151)))break a;d=29;break a;case 1465713255:if(!Bk(b,C(152)))break a;d=8;break a;case 1554501643:if(!Bk(b,C(153)))break a;d=15;break a;case 1609169232:if
(!Bk(b,C(154)))break a;d=12;break a;case 2090248989:if(!Bk(b,C(155)))break a;d=27;break a;default:}}b:{switch(d){case 1:break;case 2:b=new VW;break b;case 3:case 4:b=new VT;break b;case 5:b=new VS;break b;case 6:b=new VV;break b;case 7:b=new VU;break b;case 8:b=new V0;break b;case 9:case 10:b=new VZ;break b;case 11:b=new V2;break b;case 12:b=new V1;break b;case 13:b=new ACD;break b;case 14:b=new ACC;break b;case 15:b=new ACB;break b;case 16:b=new ACm;break b;case 17:b=new ACl;break b;case 18:b=new ACj;break b;case 19:b
=new ACi;break b;case 20:b=new ACh;break b;case 21:b=new ACg;break b;case 22:b=new ACf;break b;case 23:b=new ACq;break b;case 24:b=new ACp;break b;case 25:b=new ACo;break b;case 26:b=new ACn;break b;case 27:b=new ACw;break b;case 28:b=new ACv;break b;case 29:b=new ACu;break b;default:b=new ACt;break b;}b=new VX;}return b;}
var ALS=G();
var LB=G(Mb);
function AHK(){var a=this;LB.call(a);a.q2=0;a.qP=0;a.i4=null;}
function AUK(a,b,c,d,e,f){var g=new AHK();AXP(g,a,b,c,d,e,f);return g;}
function AXP(a,b,c,d,e,f,g){AEy(a,c);a.bf=e;a.eI=f;a.qP=b;a.q2=g;a.i4=d;}
function ABS(a,b,c){a.i4.data[b+a.qP|0]=c;}
function L6(){var a=this;B.call(a);a.FK=null;a.tE=null;a.EQ=0.0;a.xT=0.0;a.oB=null;a.n3=null;a.l3=0;}
function OT(){var a=this;B.call(a);a.iA=0;a.kL=0;}
var A_u=null;var A_t=null;function AGF(a,b){var c=new OT();AK1(c,a,b);return c;}
function AK1(a,b,c){a.iA=b;a.kL=c;}
function Jz(a){return a.iA?0:1;}
function IJ(a){return a.iA!=1?0:1;}
function Ok(a){return !Sx(a)&&!MW(a)?0:1;}
function Sx(a){return a.iA!=2?0:1;}
function MW(a){return a.iA!=3?0:1;}
function LH(a){var b;if(Ok(a))return a.kL;b=new DW;X(b);N(b);}
function EK(b){return AGF(2,b);}
function Vu(a){var b,c;switch(a.iA){case 0:b=new R_;X(b);N(b);case 1:b=new WV;X(b);N(b);case 2:b=new Vo;c=a.kL;X(b);b.Fs=c;N(b);case 3:b=new R3;c=a.kL;X(b);b.GU=c;N(b);default:}}
function ALd(){A_u=AGF(0,0);A_t=AGF(1,0);}
var AGA=G();
var JD=G(0);
var Ye=G();
function AQM(a,b){return b.arrayBuffer();}
var Yd=G();
function AUa(a,b){var c,d;c=new ZE;d=new ZC;return $rt_globals.WebAssembly.instantiate(b,ASi(Bw(c,"f"),Bw(d,"f")));}
var Yb=G();
function AUE(a,b){AO$(b);}
var Ya=G();
function AZK(a,b){AJC(b);}
var W=G(0);
function UB(){B.call(this);this.yp=null;}
function A67(a,b){It(a.yp.H,b);}
function UD(){B.call(this);this.BX=null;}
function A2c(a,b){It(a.BX.M,b);}
var VX=G();
function AWA(a,b){return A9U(b);}
var VW=G();
function AOf(a,b){return A8M(b);}
var VT=G();
function A0r(a,b){return A8X(b);}
var VS=G();
function A3x(a,b){var c,d,e,f,g;c=new ACV;Ex(c,b);d=(I_()).bw.eC;c.Ga=d;c.lJ=ANu(d);c.jy=new Bh;c.iB=new Bh;c.dI=Lq();c.ej=Lq();c.nK=EQ(1);b=b.n.b2;d=new XV;d.mM=c;Z(b,d);b=c.nK.data[D0()*c.nK.data.length|0];d=IV(c.C.T,b,10);c.nx=d;Cr(c.C.T.cv,d);e=Ez(c.C.T.cv,C(156));d=c.C.T.cv;f=new J;L(f);Br(f,43);H(f,b);g=C6(e+Ez(d,K(f)));c.j_=g;c.i_=BY(c.i_,AF4(c,1,g,b,c.nx,c.C.T));c.i$=BY(c.i$,AF4(c,0,c.j_,b,c.nx,c.C.T));Sd(c,c.dI,c.i_);Sd(c,c.ej,c.i$);Cv(c.dI.bd,1.0,1.0,1.0,1.0);FB(c.dI,c.lJ);Cv(c.ej.bd,1.0,1.0,1.0,1.0);FB(c.ej,
c.lJ);b=Bj();g=c.j_;d=new J;L(d);V(H(d,C(157)),g);Bf(b,K(d));return c;}
var VV=G();
function AQu(a,b){var c,d,e;c=new YY;Gw(c,b);d=new XR;d.ow=new Bh;d.oX=new Bh;c.z2=d;c.fB=ALU();c.d1=ALU();c.pe=DC(C(158),25.0);Z(c.q.dv,c);d=b.n.bB;e=new ADo;e.vT=c;Z(d,e);Z(b.n.b2,c);b=b.n.cH;d=new ADk;d.wP=c;Z(b,d);AF6(c.d1);BL(c.dd,Cs(43));b=Fy();Kh(c.fB,b);Kh(c.d1,b);b=c.fB;b.ln=new ADl;d=c.d1;d.ln=new ADm;d.pO=new Q5;d.xY=new Q6;N3(b,(SM(0)).me);N3(c.d1,(SM(0)).me);return c;}
var VU=G();
function AXW(a,b){var c,d,e;c=new ACk;Gw(c,b);Z(c.q.dv,c);BL(c.dd,Cs(43));d=b.n.bB;e=new VM;e.D4=c;Z(d,e);b=b.n.cH;d=new VN;d.CF=c;Z(b,d);return c;}
var V0=G();
function AP_(a,b){var c,d,e;c=new Yj;AEx(c,b);c.ir=BO();c.gN=BO();c.sT=S(C(159));c.kJ=Wf();c.iq=0;d=c.q.dv;e=new PV;e.zg=c;Z(d,e);Z(b.n.b2,c);d=b.n.bB;e=new PU;e.wZ=c;Z(d,e);b=IV(b.T,C(158),35);c.kO=b;c.mW=AKx(Fl(b));BL(c.dd,S(C(160)));return c;}
var VZ=G();
function ASU(a,b){var c,d,e,f;c=new TX;Ex(c,b);c.iu=AJB();c.fs=0;c.v6=500;c.sU=Ja(0,0,0,255,new B4);c.m$=20;c.yA=20;c.BK=I_();d=b.n.b2;e=new X6;e.mi=c;f=new U8;f.BD=e;e.sE=f;Z(d,e);d=b.n.fT;e=new ABC;e.Cb=c;Z(d,e);c.e1=b.T;c.yY=St(b.bI);Z9(c.iu,IV(c.e1,C(158),c.yA),c.m$,c.e1.mz);c.jw=JL();return c;}
var V2=G();
function A46(a,b){var c,d;c=new Sa;Ih(c,b);b=b.n.bB;d=new RI;d.t4=c;Z(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var V1=G();
function ANX(a,b){var c,d,e,f,g,h,i;c=new YF;Gw(c,b);d=b.n.cH;e=new SB;e.zj=c;Z(d,e);d=b.bI;f=new QH;f.E5=c;g=P(B,1);g.data[0]=C(161);CG(d,f,C(162),g);h=new QG;h.F5=c;g=P(B,1);g.data[0]=ALv([1,2,3,4,5]);CG(d,h,C(163),g);h=new QD;h.G8=c;i=P(B,1);i.data[0]=A8p([1,2,3,4,5]);CG(d,h,C(164),i);h=new QB;h.Gd=c;g=P(B,1);g.data[0]=D$([1,2,3,4,5]);CG(d,h,C(165),g);d=b.n.bB;e=new GS;h=new SA;h.BH=c;Hc(e,b,h);Z(d,e);return c;}
var ACD=G();
function AN_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new XX;Ih(c,b);c.fq=IF(0,0,300,300);c.ha=Uj(0,0,3,3);d=b.T;b=b.n.b2;e=new ADy;e.nD=c;Z(b,e);b=ANB(d);c.Cn=b;F_(c.fq,b);Gj(c.fq);b=c.fq.br;F3();BL(b,A_R);BL(c.fq.bd,DF(204,120,50));AIb();e=A_S;f=DU((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C4(d);switch(e.fv){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Fj;X(b);N(b);}b:
{X9(m,5,5,h);b=m.e8.ep;switch(e.fv){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Fj;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.ok=m;Y(c.ha.u,BV(m),CX(c.ok));BL(c.ha.br,c.qG);return c;}
var ACC=G();
function A2k(a,b){var c,d,e;c=new TV;Ih(c,b);c.ht=IF(0,0,300,300);c.m7=new Bh;c.k4=new Bh;c.ko=new Bh;d=b.T;b=b.n.b2;e=new Y6;e.k0=c;Z(b,e);b=ANB(d);c.rI=b;F_(c.ht,b);Gj(c.ht);b=c.ht.br;F3();BL(b,A_R);BL(c.ht.bd,DF(204,120,50));return c;}
var ACB=G();
function ATV(a,b){var c,d,e,f;c=new AB7;Ex(c,b);c.Fe=20;c.GV=11;c.FD=220;c.mK=new Bh;c.Gl=5000;c.iP=1;c.hl=I(HO,[Cs(0),Cs(255)]);c.e$=b.T;d=b.n.b2;e=new ZW;e.mw=c;f=new Wb;f.uI=e;e.rx=f;Z(d,e);b=b.n.fT;d=new Xj;d.sl=c;Z(b,d);b=Ib(c.e$,200,220);c.pm=b;HY(b,C(158),20.0);b=Ib(c.e$,200,20);c.hd=b;HY(b,C(158),20.0);c.i6=JL();return c;}
var ACm=G();
function AQQ(a,b){var c,d,e;c=new KZ;Ih(c,b);Z(b.n.b2,c);d=b.n.bB;e=new AE_;e.xX=c;Z(d,e);Z(b.n.hj,new AE$);d=b.n.hj;e=new AE9;e.tt=c;Z(d,e);Z(b.n.hM,new AE8);d=b.n.hM;e=new AFa;e.Bq=c;Z(d,e);b=!W1(b.bI)?C(166):C(167);d=new J;L(d);H(H(d,C(168)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ACl=G();
function AX$(a,b){var c,d;c=new TE;Ih(c,b);c.vA=Cs(20);c.gV=IF(0,0,300,300);c.w3=DC(C(14),80.0);b=b.n.bB;d=new Tj;d.Fj=c;Z(b,d);return c;}
var ACj=G();
function A6a(a,b){var c;c=new UA;Pu(c,b);HJ(c.cy,0,0,300,300);Y(c.dK,300,300);return c;}
var ACi=G();
function AS4(a,b){var c;c=new Uz;Pu(c,b);c.gu=new Bh;c.gW=new Bh;Y(c.ev,150,140);Y(c.dK,500,100);Y(c.fO,150,200);Y(c.e9,500,250);return c;}
var ACh=G();
function A48(a,b){var c,d,e;c=new Xr;Gw(c,b);c.DO=3;c.xw=DC(C(169),20.0);c.kC=Wf();c.q5=1;Z(c.q.dv,c);BL(c.dd,Cs(43));d=b.n.bB;e=new Qk;e.AF=c;Z(d,e);b=b.n.cH;d=new Qm;d.wX=c;Z(b,d);return c;}
var ACg=G();
function ANP(a,b){return A9n(b);}
var ACf=G();
function A4V(a,b){var c,d,e,f;c=new Rp;KL(c,b);BL(c.dd,Cs(43));c.mL=I8(c.v);d=b.n.bB;e=new GS;f=new Qn;f.CR=c;Hc(e,b,f);Z(d,e);b=b.n.cH;d=new Qo;d.AB=c;Z(b,d);return c;}
var ACq=G();
function A3$(a,b){var c,d;c=new SQ;Hf(c,b,1);c.nL=GD();Z(c.q.dv,c);BL(c.dd,Cs(43));b=b.n.cH;d=new YZ;d.zt=c;Z(b,d);return c;}
var ACp=G();
function APG(a,b){var c,d,e,f;c=new Sb;Hf(c,b,1);c.nc=GD();Z(c.q.dv,c);BL(c.dd,Cs(43));d=b.n.bB;e=new GS;f=new QV;f.t7=c;Hc(e,b,f);Z(d,e);b=b.n.cH;d=new QU;d.wB=c;Z(b,d);return c;}
var ACo=G();
function A1n(a,b){var c;c=new AAe;KL(c,b);c.w6=GD();BL(c.dd,Cs(43));return c;}
var ACn=G();
function ARM(a,b){return A8Z(b);}
var ACw=G();
function ARN(a,b){var c,d,e;c=new Qx;KL(c,b);c.wu=GD();BL(c.dd,Cs(43));d=b.n.cH;e=new VR;e.D1=c;Z(d,e);b=b.n.bB;d=new VQ;d.vb=c;Z(b,d);return c;}
var ACv=G();
function AYQ(a,b){var c,d,e;c=new AA2;KL(c,b);c.pN=GD();BL(c.dd,Cs(43));d=b.n.cH;e=new RK;e.CI=c;Z(d,e);b=b.n.bB;d=new RJ;d.EA=c;Z(b,d);return c;}
var ACu=G();
function APV(a,b){var c,d;c=new U5;Gw(c,b);c.hy=GD();Z(c.q.dv,c);BL(c.dd,Cs(43));b=b.n.cH;d=new ACF;d.rB=c;Z(b,d);return c;}
var ACt=G();
function A38(a,b){var c;c=new PC;AJW(c,b);AMR(c.ei);return c;}
function AE7(){var a=this;B.call(a);a.vQ=null;a.Cg=null;a.BJ=null;}
function IK(){var a=this;B.call(a);a.bK=0;a.cB=0;a.dy=0;a.i8=0;}
function A_T(a,b,c,d){var e=new IK();ADB(e,a,b,c,d);return e;}
function ADB(a,b,c,d,e){a.bK=d;a.cB=b;a.dy=c;a.i8=e;}
function AAy(a){return !a.cB&&!a.bK&&!a.dy&&!a.i8?1:0;}
function Rg(){var a=this;IK.call(a);a.eB=null;a.bb=0;a.km=0;a.Bm=0;a.pu=0;}
var AI7=G();
function Wk(b,c){return (b+(c/2|0)|0)/c|0;}
function AAa(b,c,d){if(b<(2147483647/c|0))return Wk(Bb(b,c),d);return 0.5+c*b/d|0;}
function IE(b,c){return ((b+c|0)-1|0)/c|0;}
function G$(b){return b+0.5|0;}
function C6(b){return b+0.5|0;}
function Fk(b,c,d){return Bd(b,Be(c,d));}
function NO(b,c){return AKs(b)/AKs(c);}
function Pw(){var a=this;IK.call(a);a.k=null;a.FC=null;}
var UI=G(0);
function Qj(){var a=this;B.call(a);a.w4=null;a.w5=null;}
function A2m(a,b){var c,d;c=a.w4;d=a.w5;$rt_globals.console.info("paste plain string "+b);c.g(F0(b));DK(d);}
function ADT(){B.call(this);this.xr=null;}
function OV(a,b){a.xr.clipboardData.setData("text/plain",$rt_ustr(b));}
function AFc(){var a=this;NP.call(a);a.EG=0;a.yh=0;}
function CH(){var a=this;B.call(a);a.i=null;a.j=null;a.b1=0.0;}
function AXV(){var a=new CH();Fi(a);return a;}
function Fi(a){a.i=new Bh;a.j=new Bh;}
function AVg(a){}
function A3n(a){return BK(0,0);}
function Ko(a,b,c,d){var e;if(!Kw(a.i,b)){a.ss(b);Ct(a.i,b);}if(!Kw(a.j,c)){a.pE(c);Ct(a.j,c);}e=a.b1;if(e!==d){a.b1=d;a.l6(e,d);}}
function DG(a,b){return Ck(b,a.b1);}
function B3(a,b){return GK(b,a.i,a.j);}
function ANo(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.j;ARO();Bv(b,d,e,f,A_U);}
function AEf(a,b){var c;c=a.i;Mu(b,c.a,c.b,a.j);}
function AZB(a,b){return 0;}
function ASX(a,b){}
function AW8(a,b){}
function A4J(a,b,c){}
function AXd(a){}
function ARH(a,b,c,d){return 0;}
function APk(a,b,c){return null;}
function ATI(a,b,c){return 0;}
function AWS(a,b){return 0;}
function A4z(a,b,c,d){return 0;}
function AHg(){var a=this;CH.call(a);a.i9=null;a.lR=null;a.lS=null;a.lP=null;a.lQ=null;a.eO=null;a.g2=null;a.g3=null;a.iO=null;}
function AZv(a){var b=new AHg();APK(b,a);return b;}
function APK(a,b){Fi(a);a.lR=new Bh;a.lS=new Bh;a.lP=new Bh;a.lQ=new Bh;a.i9=b;}
function OZ(a,b,c){a.g2=b;a.g3=c;}
function AIE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bv(b,c.a,c.b,a.j,a.iO.bw.eC);if(a.eO===null)return;d=Cw(a.i9,2.0);e=He(a.eO,a.g2.lO(),1);f=He(a.eO,a.g2.k1(),1);g=He(a.eO,a.g3.lO(),0);h=He(a.eO,a.g3.k1(),0);i=Be(e,g);j=Bd(f,h);g=BQ(i,j);if(g<=0)Ca(b,1);k=a.g2.lo();l=a.g2.mt();m=a.g3.mt();n=a.g3.lo();o=a.i9.qN;while(i<=j){p=a.eO.iS.data[i];if(p.pD){q=a.g2.h7(p.iz);r=a.g2.h7(p.iz+p.jz|0);s=a.g3.h7(p.iy);t=a.g3.h7(p.iy+p.jx|0);Y(a.lR,a.i.a,q);Y(a.lP,a.i.a,r);Y(a.lS,a.i.a+a.j.a|0,s);Y(a.lQ,
a.i.a+a.j.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.j.b|0);if(v>u){Y(o,a.j.a,v-u|0);c=a.iO;w=Is(c.d3,c,p.pD);if(q==r)R$(a,b,q,s,d,k.a,l.a,w,a.lR,a.lP);if(s==t)R$(a,b,s,q,d,n.a,m.a,w,a.lS,a.lQ);AGa(b,a.i.a,u,o,a.lR,a.lS,a.lP,a.lQ,w);}}i=i+1|0;}if(g<=0)Ca(b,0);}
function R$(a,b,c,d,e,f,g,h,i,j){var k;k=a.i9.dB;Y(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bv(b,f,c,k,h);}
function AHO(){var a=this;B.call(a);a.cl=null;a.dR=null;a.iY=null;}
function I8(a){var b=new AHO();AOO(b,a);return b;}
function AOO(a,b){a.cl=b;}
function Gb(a,b){var c;a.iY=b;c=a.dR;if(c!==null)Eu(c,b.cd);c=a.cl.eu;if(c!==null)HR(c,b.cd,b.f1);}
function AAX(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AR1();i=c.p;j=0;while(j<i){if(f===null){k=(BI(c,j)).bt;l=ABy(F6(Cg(g.h,k)));m=AB$(g.fM);}else{n=f.data;k=n[j].qh.nZ;l=!BR(g.fM,n[j].mA)?C(21):ABy(F6(Cg(g.h,k)));m=AB$(n[j].mA);}if(M(l)>153){o=Cz(l,0,150);n=new J;L(n);H(H(n,o),C(170));l=K(n);}if(M(m)>153){n=Cz(m,0,150);o=new J;L(o);H(H(o,n),C(170));m=K(o);}n=Dq(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BI(c,j);}if(f!==null){q=new AFn;q.tx=d;q.ty=p;}else{q=new AFo;q.CZ=d;q.CY
=o;}XA(h,m,n,l,q);j=j+1|0;}r=AEW(h);if(a.dR!==null)ACL(a);c=a.cl.F;g=new Sm;f=new AB5;f.ru=a;f.rv=d;ANj(g,c,f);Yw(g,r);d=a.iY;Xu(g,d.cd,d.C8);d=AGm(c);a.dR=d;d.qz=d.qz|1;d=G_(g,c);f=a.iY.cd;JS(d,f.nA,f.pv);LO(a.dR,d);Eu(a.dR,a.iY.cd);d=a.dR;f=new J;L(f);H(H(f,C(171)),e);CZ(d,K(f));DY(a.cl,a.dR);d=a.dR;i=(d.U.j.b+Cw(d.bh,2.0)|0)+Cw(c,2.0)|0;s=(g.er+g.fb|0)+g.h6|0;t=Cw(g.b5,5.0);e=BK(Fk(t,b.a,g.b5.bV.a-s|0),Fk(i,b.b,g.b5.bV.b-g.c4.b|0));ZQ(g);Ly(g);i=Ev(g);s=g.ch.data.length;i=Bb(i,s)+Bb(g.ed,s+1|0)|0;Y(g.c4,
g.j.a,i);i=(g.er+g.fb|0)+g.h6|0;b=g.b5;s=(b.bV.a-e.a|0)-Cw(b,5.0)|0;b=g.b5;t=(b.bV.b-e.b|0)-Cw(b,5.0)|0;d=BK(Be(i,s),Be(g.c4.b,t));EJ(a.dR,e,d);Cx(c,g);}
function ACL(a){IW(a.cl,a.dR);Kx(a.dR);a.dR=null;}
function SK(a,b,c){var d,e;d=a.cl;e=a.iY;FA(d,e.cd,e.f1,b,c);}
function Jd(a,b,c,d,e,f,g){SK(a,b,ABq(JM(a,c,g,d,e,f),b));}
function JM(a,b,c,d,e,f){var g;g=new Ud;g.gX=a;g.bA=b;g.sa=c;g.jK=e;g.o6=f;g.mY=d;return g;}
function AG0(b){var c;c=new SW;c.Bt=b;return c;}
var Fo=G(0);
function A3p(a){}
function AQX(a){}
function ANV(a,b,c){return 0;}
function AXQ(a){return null;}
var R1=G(0);
var M4=G(0);
function AHl(){var a=this;CH.call(a);a.cj=null;a.bo=null;a.lk=null;a.Dr=0;a.o4=null;a.ek=null;a.oq=0;a.h5=0.0;a.mR=null;a.EF=null;a.gr=null;a.Y=0;a.ds=0;a.d=null;a.fY=null;a.eM=null;a.fh=null;a.Ct=0;a.Bg=0;a.di=0;a.cw=0;a.cE=0;a.iI=null;a.gm=null;a.f2=null;a.j3=0;a.kG=0;a.GZ=0;a.DY=0;a.lw=0;a.mr=0;a.qE=0;a.eA=0;a.dz=null;a.fV=null;a.fl=0;a.cc=0;a.DL=null;a.kE=null;a.Ay=null;a.vL=null;a.iV=null;a.bC=0;a.de=null;a.lW=null;a.tD=0;a.sh=null;a.wj=null;}
function G5(a){var b=new AHl();AVe(b,a);return b;}
function AVe(a,b){var c,d,e;Fi(a);a.Dr=0;a.o4=P(T,10);a.ek=A1i();a.h5=16.0;a.mR=C(158);a.d=A9f(P(BC,0),null,null);c=new AFD;c.zM=CW(P(N7,0));c.Do=CW(P(N7,0));c.rm=CW(P(ACz,0));c.wS=CW(P(AAg,0));c.ww=CW(P(GA,0));c.Cj=CW(P(TH,0));a.fY=c;a.fh=P(FL,0);a.iI=BK(1,0);a.gm=JL();a.f2=JL();a.j3=0;a.kG=1;a.lw=1;a.mr=1;a.qE=1;a.eA=3;a.dz=AJB();a.fV=C(172);a.fl=0;a.cc=0;c=D4();BG(c);d=new YQ;d.EZ=c;a.kE=d;a.bC=0;c=new YP;c.q_=a;a.sh=c;c=new YO;c.un=a;a.wj=c;c=b.cl.F;a.cj=c;a.bo=c.bP;a.lk=b;b=ASE(c.cW);a.de=b;a.gr=b.hC;e
=a.o4.data;b=new YN;b.Cx=a;e[1]=b;b=new YU;b.yR=a;e[2]=b;b=new YT;b.vl=a;e[3]=b;b=new YS;b.xJ=a;e[4]=b;b=new YR;b.rZ=a;e[5]=b;b=new YM;b.AV=a;e[6]=b;LF(a.d,a,G7(a));}
function M6(a,b,c,d){Ko(a,b,c,d);ACa(a,b,c,d);}
function AUn(a,b,c){WI(a,a.mR,a.h5);QP(a.de,c);}
function A68(a,b,c){a.Ay=b;a.vL=c;}
function ACa(a,b,c,d){var e;a.di=Ck(80.0,d);a.cw=Ck(1.0,d);a.cE=Ck(10.0,d);e=!a.cc?b.a:(b.a+c.a|0)-IU(a)|0;Y(a.cj.dB,e,b.b);Tr(a.dz,a.cj.dB,Be(IU(a),c.a),c.b,d);b=a.ek;e=Ck(2.0,d);b.fd.u.a=e;}
function A0M(a){a.oq=1;OG(a);}
function AYH(a){a.oq=0;}
function OG(a){Z3(a.ek,Ny(G7(a)));}
function E_(a,b){var c,d;a.eM=b;c=a.ek;d=b.bw.Dn;BL(c.fd.bd,d);c=a.gm;d=b.bw;IA(c,d.mb,d.mh);c=a.f2;b=b.bw;IA(c,b.mb,b.mh);}
function J5(a){Ph(a,a.de.dw.oY,a.h5+1.0);}
function K5(a){var b;b=a.h5;if(b<=7.0)return;Ph(a,a.de.dw.oY,b-1.0);}
function I5(a,b){Ph(a,b,a.h5);}
function AU5(a,b){K6(a.cj,b);}
function Ph(a,b,c){if(a.cj.ct!==0.0){WI(a,b,c);J6(G7(a));}a.h5=c;a.mR=b;}
function My(a){var b,c,d;b=a.de;c=a.cj.cW;d=a.bo;b.jh=c;if(b.h8.jQ!=c&&b.d5)AF0(b,d);T9(a.fh);I9(a.dz);OK(a);}
function WI(a,b,c){var d,e,f,g,h,i,j;d=a.b1;e=c*d;Ck(c,d);f=a.de.dw;d=f===null?0.0:f.pG;if(!(e===d&&BR(b,a.mR))){I9(a.dz);Pb(a.fh);g=a.d.h.E.data;h=g.length;i=0;while(i<h){Fg(g[i]);i=i+1|0;}j=a.de;f=a.bo;j.dw=ALg(b,e,300,600,j.hC,f);f=a.de;a.EF=f.dw;a.Y=Tv(f,1.25,a.bo);a.ds=C6(a.de.dw.qO);a.ek.fd.u.b=Fl(a.de.dw);i=a.Y;f=new J;L(f);b=H(H(f,C(173)),b);Br(b,32);V(H(Dg(b,e),C(174)),i);$rt_globals.console.info($rt_ustr(K(f)));if(A_V){h=NX(a.de.dw,a.Y);b=new J;L(b);V(H(b,C(175)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iT
=Ho(Gm(a),a.d.B,a.bo.cv,a.gr);ID(a);OK(a);}}
function AY7(a){Pb(a.fh);ZJ(a.de);I9(a.dz);}
function Pv(a){return Bb(CN(a.d.h)+5|0,a.Y);}
function Lx(a){return Bd(Pv(a)-a.j.b|0,0);}
function ACM(a){return Bd(a.j3-GL(a)|0,0);}
function GL(a){var b;b=!a.cc?0:a.ds+a.cE|0;return Bd(1,(a.j.a-a.di|0)-b|0);}
function IU(a){return a.cc?a.di:a.di-a.cE|0;}
function Ew(a){return a.j.b;}
function Mc(a,b){var c,d,e;c=a.d.h;if(ADg(c)&&b-c.Bz>0.03125?1:0){d=a.tD;e=a.d.h.cI;if(d!=e){a.tD=e;ABi(a);}}if(a.Y)ACH(a);d=ADp((a.bC+a.GZ|0)-a.DY|0,Lx(a));e=a.bC==d?0:1;if(e)Go(a,d);return !ACO(a.ek,b)&&!e&&!a.Dr?0:1;}
function Jg(a,b){var c,d;b=ADp(b,ACM(a));c=a.d;d=b==c.ef?0:1;if(d)c.ef=b;if(d){c=a.Ay;if(c!==null)c.e();}}
function Go(a,b){var c;if(ALu(a,b)){c=a.vL;if(c!==null)c.e();}}
function ALu(a,b){var c,d;c=ADp(b,Lx(a));d=c==a.bC?0:1;if(d){a.bC=c;a.d.nf=c/a.Y;}return d;}
function AJe(a){return BK((IU(a)+a.cw|0)+a.cE|0,a.Y);}
function AV2(a){return a.Y;}
function A2Q(a,b){IS(a);}
function IS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IE(a.j.b,a.Y)+7|0;c=a.fh;if(c.data.length<b)a.fh=AAL(b,c,a.de,a.Ct,a.Bg,a.d.h);Ca(a.bo,0);Of(a.bo,a.i,a.j);b=a.Y;d=a.ek;e=(b-d.fd.u.b|0)/2|0;b=a.d.iT-(T_(d)/2|0)|0;d=a.d;f=b-d.ef|0;g=!a.cc?a.di:(a.cw+a.cE|0)+a.ds|0;Vt(a.ek,g+f|0,(e+Bb(d.y,a.Y)|0)-a.bC|0);h=CN(a.d.h);i=U2(a);j=U1(a);a.Ct=i;a.Bg=j;k=!a.cc?a.i.a+a.di|0:((a.i.a+a.cw|0)+a.cE|0)+a.ds|0;l=GL(a);m=a.d.l8;n=DG(a,40.0);o=i;while(o<=j&&o<h){p=Cg(a.d.h,o);q=AEi(a,o);Y0(q,p,a.bo,a.Y,l,
a.d.ef,o,o%a.fh.data.length|0);a.j3=Bd(a.j3,FZ(p)+n|0);g=a.Y;r=Bb(g,o)-a.bC|0;s=m===null?null:m.data[o];r=a.i.b+r|0;t=a.bo;u=a.d.ef;v=a.eM;d=AMt(Bl(a),o);if(d!==null){if(d.b==(-1))d.b=p.W;d.a=Ho(p,d.a,a.bo.cv,a.gr);d.b=Ho(p,d.b,a.bo.cv,a.gr);}w=a.d;Q_(q,r,k,t,l,g,u,v,d,w.jo,w.i7,w.y!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.cj.dB;o=i;while(o<=j&&o<h&&a.lw){q=AEi(a,o);r=Bb(a.Y,o)-a.bC|0;w=Bl(a);if(!DE(w))u=0;else{d=ED(w);w=Gs(w);u=d.Q<=o&&o<w.Q?1:0;}d=a.eM;w=d.bw;t=w.tR;x=a.d.y==o&&m===null?1:0;a:{if(u)t=w.lu;else
{if(m!==null){c=m.data;if(o<c.length&&c[o]!==null){t=Is(d.d3,d,c[o].fJ);break a;}}if(x)t=w.gZ;}}AKV(q,a.bo,k,a.i.b+r|0,a.Y,v,a.d.ef,l,t);o=o+1|0;}if(a.kG){y=Be(j+1|0,h);AMJ(a,Bb(a.Y,y)-a.bC|0,l);}AIA(a);if(a.mr)AJS(a,i,j,h);if(a.oq&&f>=(( -T_(a.ek)|0)/2|0)&&AMn(a.ek,a.j))ADV(a.ek,a.bo,a.i);AIk(a);AHR(a);Gz(a.bo);AH4(a,i,j);}
function AJS(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.l8;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eM;h=Is(h.d3,h,g.fJ);}else h=e!==null?a.eM.bw.eC:a.eM.bw.gZ;if(!(a.d.y!=b&&g===null)){g=a.iI;i=a.cc;g.a=!i?(a.cE-a.cw|0)-a.eA|0:((a.cE+a.ds|0)+a.cw|0)-a.eA|0;j=a.Y;g.b=j;i=i?0:(a.di-a.cE|0)+a.cw|0;j=Bb(j,b)-a.bC|0;k=a.bo;l=a.i;Bv(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AH4(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.j.b;e=Be(d,Bb(CN(a.d.h),a.Y)-a.bC|0);f=a.dz;g=a.bC;h=a.d;i=h.l8===null?h.y:(-1);j=a.bo;k=a.eM;Of(j,f.g8,f.fU);T7(f,j,b,d);ADr(f,b,j);ACG(f,g,e,k,j);l=k.lK;if(e<d){h=f.g8;Bv(j,h.a,h.b+e|0,BK(f.fU.a,d-e|0),l.lD);}if(b<=i&&i<=c){k=k.lK;c=i/20|0;h=f.dk;l=BI(h,c%h.p|0);h=f.g8;d=Bb(f.dk.p,f.hQ);c=l.fS.b;b=((l.q0.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CX(l.c9)|0)|0;c=i%l.ey|0;e=l.cM;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;Y(l.jN,l.fS.a,e);f=l.kt;c=i%l.ey|0;d=l.cM;Cv(f,0.0,
Bb(c,d),l.fS.a,d);N2(l,j,b,h,k.yZ,k.rd);}Gz(j);}
function U2(a){return Be(a.bC/a.Y|0,CN(a.d.h)-1|0);}
function U1(a){return Be(((a.bC+Ew(a)|0)-1|0)/a.Y|0,CN(a.d.h)-1|0);}
function AUL(a,b){return (Bb(a.Y,b)-a.bC|0)+a.i.b|0;}
function AUz(a){return a.i;}
function AXN(a){return a.j;}
function OK(a){Z9(a.dz,a.de.dw,a.Y,a.cj.cW);}
function AEi(a,b){var c;c=a.fh.data;return c[b%c.length|0];}
function Wt(a,b){var c,d,e,f;c=Fk(0,M(a.fV),Qc(b));if(!c)b=null;else{b=C(65);if(c<0){b=new BU;X(b);N(b);}if(c!=1){d=b.cq.data.length;if(d&&c){e=B6(Bb(d,c));d=0;f=0;while(f<c){RU(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=M$(e);}else b=A$Q;}}return b;}
function QW(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BP(i);k=A$j(i).data;J8(j,c);c=0;l=k.length;if(c>l){f=new BU;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cI=o.cI+1|0;p=P(HC,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AV_(h[m],n[m],k[m],b[m],f.bt,f.bx);m=m+1|0;}BA(o.jd,p);c=0;while(c<i){b=e.data;N1(o,h[c],n[c],k[c],b[c]);g.q3(C5(h[c]),b[c]);c=c+1|0;}}
function ANC(a){var b;if(DE(Bl(a)))Hl(a);else{b=a.d;PQ(b.h,b.y,b.B);}ID(a);EO(a);return 1;}
function DQ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.fl)return 0;if(DE(Bl(a)))Hl(a);c=MU(AD5(b,C(176),C(21)),C(177),(-1));d=c.data;b=a.d;e=b.h;f=b.y;g=b.B;AF5(e,f,g,c);h=d.length;if(!h)b=A$Q;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B6(i+Bb(h-1|0,M(C(177)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(177))){m=l+1|0;c[l]=Q(C(177),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=M$(k);}Gr(e,f,g,0,b);b=a.d;f=b.y;m
=(f+h|0)-1|0;CY(a,m,m!=f?M(d[h-1|0]):b.B+M(d[0])|0,0);Gv(a);EO(a);return 1;}
function Hl(a){var b,c,d;b=ED(Bl(a));c=a.d.h;d=Bl(a);PY(c,d,Wd(c,d));CY(a,b.Q,b.bg,0);Gv(a);EO(a);}
function Gv(a){var b,c;(Bl(a)).dQ=0;b=(Bl(a)).bU;c=a.d;Ci(b,c.y,c.B);b=(Bl(a)).bJ;c=a.d;Ci(b,c.y,c.B);}
function AMJ(a,b,c){var d,e;d=a.j.b;if(b<d){e=a.cj.dB;e.b=d-b|0;d=a.cc;e.a=!d?c+a.eA|0:c+a.cw|0;d=!d?(a.i.a+a.di|0)-a.eA|0:(((a.i.a+a.cE|0)+a.ds|0)+a.cw|0)-a.eA|0;Bv(a.bo,d,a.i.b+b|0,e,a.eM.bw.eC);}}
function AIk(a){var b;b=a.cc?a.i.a+a.ds|0:a.i.a+a.j.a|0;KY(a.gm,a.bC,a.i.b,Ew(a),Pv(a),b,a.ds);b=!a.cc?a.i.a+a.di|0:((a.i.a+a.cw|0)+a.cE|0)+a.ds|0;Su(a.f2,a.d.ef,b,GL(a),a.j3,a.i.b+Ew(a)|0,a.ds);}
function AHR(a){var b,c;b=AA1(a.gm);c=AA1(a.f2);if(!(!b&&!c)){Ca(a.bo,1);if(b)Hn(a.gm,a.bo);if(c)Hn(a.f2,a.bo);if(b)Hs(a.gm,a.bo);if(c)Hs(a.f2,a.bo);}}
function AIA(a){var b,c,d,e,f;b=a.iI;c=a.j;b.b=c.b;b.a=a.cw;d=!a.cc?a.di-a.cE|0:(c.a-IU(a)|0)-a.cw|0;b=a.bo;c=a.i;Bv(b,c.a+d|0,c.b,a.iI,a.eM.bw.vX);b=a.iI;d=a.cc;b.a=!d?(a.cE-a.cw|0)-a.eA|0:((a.cE+a.ds|0)+a.cw|0)-a.eA|0;e=d?0:(a.di-a.cE|0)+a.cw|0;c=a.bo;f=a.i;Bv(c,f.a+e|0,f.b,b,a.eM.bw.eC);}
function ADp(b,c){return Be(Bd(0,b),c);}
function G7(a){return a.cj.b9;}
function Ga(a,b,c){var d,e,f;d=EE(b);e=new J;L(e);H(H(e,C(178)),d);$rt_globals.console.info($rt_ustr(K(e)));CY(a,0,0,0);f=new AEG;f.Ai=a;f.Aj=b;f.Ah=c;c=D4();BG(c);d=new AEF;d.yQ=c;Wq(b,f,d);}
function Kc(a,b,c,d,e){if(Jn(a,e))return 1;if(c&&d)return 1;if(c)Go(a,a.bC+((Bb(b,a.Y)*12|0)/10|0)|0);else if(!d){IT(a,a.d.y+b|0,e);ADt(a);}return 1;}
function Tg(a,b,c,d){var e,f,g;if(Jn(a,d))return 1;e=Gm(a);if(!c)f=a.d.B+b|0;else if(b>=0)f=Hz(e,a.d.B);else{b=a.d.B;if(!b)f=(-1);else{c=KT(e,b);if(c>0&&e.eR.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eR.data[c-1|0];}}if(f>e.W){e=a.d;if((e.y+1|0)<CN(e.h))CY(a,a.d.y+1|0,0,d);}else if(f>=0)DH(a,f,d);else{e=a.d;b=e.y;if(b>0){g=(Cg(e.h,b-1|0)).W;CY(a,a.d.y-1|0,g,d);}}AEt(a);return 1;}
function Jn(a,b){if(DE(Bl(a))&&!b){Gv(a);ID(a);return 1;}if(!(b&&DE(Bl(a))))Gv(a);return 0;}
function CY(a,b,c,d){a.d.B=c;return IT(a,b,d);}
function IT(a,b,c){var d;d=a.d;d.y=Fk(0,b,CN(d.h)-1|0);return DH(a,a.d.B,c);}
function DH(a,b,c){var d,e;a.d.B=Fk(0,b,(Gm(a)).W);a.d.iT=a.b1===0.0?0:Ho(Gm(a),a.d.B,a.bo.cv,a.gr);OG(a);ID(a);if(c)(Bl(a)).dQ=1;d=Bl(a);e=a.d;OH(d,e.y,e.B);(Bl(a)).dQ=0;return 1;}
function Na(a,b){var c;c=AZW(Bl(a));DH(a,b,0);Kl(Bl(a),c);}
function ID(a){ADt(a);AEt(a);}
function ADt(a){var b,c,d,e,f;b=a.bC;c=b+Ew(a)|0;d=a.d.y;e=a.Y;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))Go(a,d-e|0);else if(f>(c-e|0))Go(a,(f-Ew(a)|0)+a.Y|0);}
function AEt(a){var b,c,d,e,f;b=C6(a.cj.ct*30.0);c=a.d.ef;d=c+GL(a)|0;e=a.d.iT;f=e+b|0;if(e<(c+b|0))Jg(a,e-b|0);else if(f>(d-b|0))Jg(a,(f-GL(a)|0)+b|0);}
function Js(a,b){var c,d;CY(a,b.bt,b.bx,0);c=Hz(Gm(a),a.d.B);Ci((Bl(a)).bJ,a.d.y,c);b=(Bl(a)).bU;d=a.d;Ci(b,d.y,d.B);Jx(a.d);}
function FP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=Fk(0,((b.b-d.b|0)+a.bC|0)/a.Y|0,CN(a.d.h)-1|0);g=!a.cc?a.di:(a.cw+a.cE|0)+a.ds|0;h=Bd(0,(e-g|0)+a.d.ef|0);b=Cg(a.d.h,f);d=a.bo.cv;i=a.gr;if(!(b.fi!==null&&!b.hB))Oa(b,d,i);j=b.fi;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.W;else{c=ADd(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.W;else{j=ABF(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.s.data[e].x)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A_W){b=new J;L(b);V(H(V(H(V(H(b,C(179)),e),C(180)),h),C(181)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return D1(f,k);}
function W5(a,b){var c,d;c=a.d;d=b.bt;c.y=d;c.B=b.bx;c.iT=Ho(Cg(c.h,d),a.d.B,a.bo.cv,a.gr);OG(a);}
function Gm(a){var b;b=a.d;return Cg(b.h,b.y);}
function Ms(a,b,c,d){var e,f;e=C6((a.Y*4|0)*d/150.0);f=C6(c);if(e)Go(a,a.bC+e|0);if(f)Jg(a,a.d.ef+f|0);return 1;}
function Ue(a,b,c){(Bl(a)).dQ=0;return 1;}
function XN(a,b,c){var d;if(!DB(a.cj,a))Cx(a.cj,a);if(c)return null;d=Gq(a.gm,b.k,a.sh,1);if(d!==null)return d;d=Gq(a.f2,b.k,a.wj,0);if(d!==null)return d;JQ(a);W5(a,FP(a,b.k));Jx(a.d);if(!b.bK&&!(Bl(a)).dQ){b=(Bl(a)).bU;d=a.d;Ci(b,d.y,d.B);}(Bl(a)).dQ=1;b=Bl(a);d=a.d;OH(b,d.y,d.B);b=new AFp;b.wt=a;return b;}
function PT(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cB){b=b.k;e=FP(a,b);f=JK(a.d.h,e.bt,e.bx);g=TZ(a,f);h=Pc(a.fY,En(a.d),H6(a.d));if(h!==null){i=a.d;c=e.bt;d=e.bx;e=new AE3;e.Er=a;e.Es=b;e.Eq=g;h.u2(i,c,d,e,a.kE);}else{e=CC(a.d.h.ea,f);if(e!==null){Js(a,e);c=1;}else{e=CC(a.d.h.d2,f);if(e!==null&&!EU(e)){if(e.p!=1){AAX(a.lk,b,e,a,g);c=1;}else{Js(a,BI(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FP(a,b.k)).bt;g=Cg(a.d.h,c);c=Hd(g,a.d.B);d=Hz(g,a.d.B);b=O4(g,c);if((d-1|0)==g.W){Ci((Bl(a)).bU,
a.d.y,Qc(g));Ci((Bl(a)).bJ,a.d.y,g.W);}else{if(b!==null){b=b.x;j=0;c:{while(true){k=b.cq.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.B;if(c==j){c=Hd(g,c-1|0);d=Hz(g,c);}else{if(d!=j){RH(Bl(a),a.d.y);break b;}c=Hd(g,d+1|0);d=Hz(g,c);}}}Ci((Bl(a)).bU,a.d.y,c);(Bl(a)).dQ=1;CY(a,a.d.y,d,0);(Bl(a)).dQ=0;JQ(a);}}break a;case 3:break;default:break a;}RH(Bl(a),a.d.y);ABr(a.d.is);JQ(a);}}return 1;}
function YV(a,b){var c,d,e,f,g,h,i,j;c=a.cj.dc;if(Gy(a.gm,b.k,c))return 1;if(Gy(a.f2,b.k,c))return 1;d=a.dz;if(GK(b.k,d.g8,d.fU)&&Ha(c)?1:0)return 1;e=b.k;f=!a.cc?a.di:(a.cE+a.cw|0)+a.ds|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=GL(a);i=Ew(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Ha(c);if(b.cB){e=FP(a,b.k);e.bx=Hd(Cg(a.d.h,e.bt),e.bx);b=a.d.h;if(!HX(b.ea,e)&&!HX(b.d2,e)?0:1)return D_(c,C(182));}return D_(c,C(183));}
function A6I(a,b){var c,d,e,f;c=a.lW;if(c!==null&&c.bk(b))return 1;d=b.cB;if(d&&b.bb==65){d=CN(a.d.h)-1|0;e=G4(a.d.h,d);Ci((Bl(a)).bU,0,0);Ci((Bl(a)).bJ,CN(a.d.h)-1|0,e);return 1;}if(d&&b.bb==80){M1(a.d);return 1;}if(!a.fl&&d&&b.bb==90){if(DE(Bl(a)))Gv(a);b=a.d.h;b.cI=b.cI+1|0;c=b.jd;e=c.p;if(!e)c=null;else{f=(E2(c,e-1|0)).data;c=Yc(b,f[0]);d=1;while(d<f.length){Yc(b,f[d]);d=d+1|0;}}if(c!==null){CY(a,c.a,c.b,0);EO(a);}return 1;}if(!d&&!b.dy){if(Bk(b.eB,C(184))){DQ(a,C(185));DH(a,a.d.B-1|0,0);d=1;}else if(Bk(b.eB,
C(186))){DQ(a,C(187));DH(a,a.d.B-1|0,0);d=1;}else if(Bk(b.eB,C(37))){DQ(a,C(22));DH(a,a.d.B-1|0,0);d=1;}else if(Bk(b.eB,C(188))){DQ(a,C(189));DH(a,a.d.B-1|0,0);d=1;}else if(Bk(b.eB,C(190))){DQ(a,C(191));DH(a,a.d.B-1|0,0);d=1;}else if(!Bk(b.eB,C(192)))d=0;else{DQ(a,C(193));DH(a,a.d.B-1|0,0);d=1;}}else d=0;if(d)return 1;a:{if(!(!b.dy&&!b.cB)){e=b.bb;if(e>=48&&e<=57){d=e-48|0;c=a.o4.data[d];if(c!==null)c.e();d=1;break a;}}d=0;}if(d)return 1;b:{switch(b.bb){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:d
=0;break b;}d=1;}if(d)return 1;if(ALG(a,b))return 1;if(AIh(a,b))return 1;if(b.cB&&b.bb==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!ARA(b.bb)&&b.bb!=27){if(!b.cB&&!b.dy&&!b.i8)return M(b.eB)>0&&DQ(a,b.eB)?1:0;return 0;}return 0;}
function ACH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=U2(a);d=U1(a);if(b.fy!=3&&b.g$==3){e=Mw(b.p7);f=new X$;f.z6=c;f.z5=d;g=new So;g.tp=f;while(!g.nq&&OL(e,g)){}if(!g.nq&&Bk(C(194),En(b))){c=Bd(0,c-100|0);d=Be(CN(b.h)-1|0,d+100|0);BA(b.p7,BK(c,d));h=BP(3);i=h.data;i[0]=FY(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.E.data.length);k=0;while(k<d){j=j+G4(e,k)|0;if(k!=(e.E.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.BZ=EN();e=b.fw;l=new AEu;l.tc=b;i=P(B,3);m=i.data;m[0]=Fr(b.h);m[1]=h;b=b.h.dD;g=BO();ACW(b,b.dA,
g);h=BP(3*g.p|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BI(g,o);d=k+1|0;n[k]=b.b$;q=d+1|0;n[d]=b.b7;k=q+1|0;n[q]=b.gi;o=o+1|0;}m[2]=h;CG(e,l,C(195),i);}}}
function W3(a){M1(a.d);}
function ABi(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.gh){c=Fh(b);d=new J;L(d);H(H(d,c),C(196));$rt_globals.console.info($rt_ustr(K(d)));}c=En(b);if(c!==null&&!Bk(C(183),c)){d=b.h.dD;e=RC(d,d.dA);if(e===null){O6(b);Lh(b.h);}else{f=D$([Ds(e),Dj(e),e.b6.gi]);g=Fr(b.h);h=BP(1);h.data[0]=AKf(c);d=b.h.fp;if(d.f3===null){i=BP(0);j=B6(0);}else{c=AXv(AZP(e.cA,d.fx),e);Ys(c);i=c.pp;j=c.nt;}k=b.h.cI;c=b.fw;d=new PD;d.B3=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BP(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CG(c,d,C(197),l);}}
else Lh(b.h);}
function JJ(a,b,c){var d,e,f,g,h,i;if(c&&a.fl)return 0;d=ED(Bl(a));e=d.Q;if(DE(Bl(a))){f=a.d.h;g=Bl(a);h=Wd(f,g);if(c)PY(f,g,h);if(c){CY(a,d.Q,d.bg,0);Gv(a);EO(a);}}else{h=FN(F6(a.d.h.E.data[e]),C(177));i=Be(CN(a.d.h)-1|0,e);Ci((Bl(a)).bJ,i,0);if(e>=(CN(a.d.h)-1|0))Ci((Bl(a)).bJ,i,G4(a.d.h,i));else Ci((Bl(a)).bU,i+1|0,0);if(c)Hl(a);else CY(a,e,0,0);}b.g(h);return 1;}
function AWY(a){var b;b=new Vr;b.Bn=a;return b;}
function AIh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.fl)return 0;a:{switch(b.bb){case 8:if(DE(Bl(a))){Hl(a);c=1;}else{b=a.d;d=b.B;if(!d&&!b.y)c=1;else{if(d){e=b.y;c=d-1|0;PQ(b.h,e,c);}else{e=b.y-1|0;c=G4(b.h,e);b=a.d.h;Me(b,e);Gr(b,e,G4(b,e),1,C(177));}EO(a);c=CY(a,e,c,0);}}break a;case 9:if(!b.bK){if(!DE(Bl(a)))DQ(a,a.fV);else{f=ED(Bl(a));g=Gs(Bl(a));c=g.Q;d=f.Q;e=(c-d|0)+1|0;h=BP(e);i=h.data;j=P(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fV;d=d+1|0;e=l;}b=new AEA;m=a.d;AL2(b,m.y,m.B);m=new Ut;m.wg
=a;QW(a,h,0,0,j,b,m);f.bg=f.bg+M(a.fV)|0;g.bg=g.bg+M(a.fV)|0;Na(a,a.d.B+M(a.fV)|0);EO(a);}c=1;}else b:{if(!DE(Bl(a))){b=a.d;f=Cg(b.h,b.y);if(f.s.data.length>0){g=Wt(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.y;b=D1(e,m.B);n.cI=n.cI+1|0;o=n.jd;h=P(HC,1);h.data[0]=AV_(e,0,1,g,b.bt,b.bx);BA(o,h);N1(n,e,0,1,g);Ie(f,0,M(g));Na(a,a.d.B-M(g)|0);}}else{b=ED(Bl(a));f=Gs(Bl(a));c=f.Q;p=b.Q;c=(c-p|0)+1|0;h=BP(c);k=h.data;j=P(BC,c);q=j.data;g=a.d;e=g.B;l=g.y;c=0;while(p<=f.Q){g=Cg(a.d.h,p);if(g.s.data.length>0){g=Wt(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JU(h,c);j=CT(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.Q)b.bg=Bd(0,b.bg-M(g)|0);if(p==f.Q){f.bg=Bd(0,f.bg-M(g)|0);Na(a,a.d.B-M(g)|0);}d=d+1|0;}b=D1(l,e);f=new Vn;f.uw=a;QW(a,h,0,1,j,b,f);}EO(a);c=1;}break a;case 13:if(DE(Bl(a)))Hl(a);b=a.d;Fg(Cg(b.h,b.y));b=a.d;AM7(b.h,b.y,b.B);EO(a);c=CY(a,a.d.y+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=ANC(a);}return c;}
function ALG(a,b){var c,d,e,f;a:{switch(b.bb){case 33:c=b.cB?IT(a,IE(a.bC,a.Y),b.bK):Kc(a,2-Wk(Ew(a),a.Y)|0,0,b.dy,b.bK);break a;case 34:c=!b.cB?Kc(a,Wk(Ew(a),a.Y)-2|0,0,b.dy,b.bK):IT(a,((a.bC+Ew(a)|0)/a.Y|0)-1|0,b.bK);break a;case 35:if(!Jn(a,b.bK)&&!DH(a,(Gm(a)).W,b.bK)){c=0;break a;}c=1;break a;case 36:if(!Jn(a,b.bK)&&!DH(a,0,b.bK)){c=0;break a;}c=1;break a;case 37:c=b.cB;if(c&&b.dy){JQ(a);d=a.d.is;e=d.d7;if(e<=0)d=null;else{f=d.fP.data;c=e-1|0;d.d7=c;d=f[c];}if(d===null)c=1;else{CY(a,MK(d),Ls(d),0);Kl(Bl(a),
d.pl);c=1;}break a;}c=Tg(a,(-1),c,b.bK);break a;case 38:c=Kc(a,(-1),b.cB,b.dy,b.bK);break a;case 39:c=b.cB;if(c&&b.dy){d=a.d.is;e=d.d7;if(e==(d.fL-1|0))d=null;else{f=d.fP.data;c=e+1|0;d.d7=c;d=f[c];}if(d===null)c=1;else{CY(a,MK(d),Ls(d),0);Kl(Bl(a),d.pl);c=1;}break a;}c=Tg(a,1,c,b.bK);break a;case 40:c=Kc(a,1,b.cB,b.dy,b.bK);break a;default:}c=0;}if(c&&b.bK){b=(Bl(a)).bJ;d=a.d;Ci(b,d.y,d.B);}if(c)Jx(a.d);return c;}
function JQ(a){var b,c,d,e,f,g,h;b=a.d;c=b.is;d=c.d7;c=d<0?null:c.fP.data[d];if(c!==null&&b.y==MK(c)&&a.d.B==Ls(c))return;c=a.d;e=c.is;b=new Ou;d=c.y;f=c.B;c=Bl(a);b.qf=D1(d,f);g=AZW(c);b.pl=g;g.dQ=0;f=e.d7;h=e.fL;if(f==(h-1|0))AEj(e,b);else{d=f+1|0;while(d<h){ABr(e);d=d+1|0;}AEj(e,b);}e.d7=e.d7+1|0;}
function EO(a){a.d.h.Bz=Ny(G7(a));}
function It(a,b){var c,d,e,f;a.DL=null;Mn(a.dz,null);c=a.d;a.d=b;LF(c,null,null);LF(b,a,G7(a));d=(B5(a.fY.ww)).data;e=d.length;f=0;while(f<e){d[f].q3(c,b);f=f+1|0;}a.bC=G$(b.nf*a.Y);}
function TZ(a,b){var c;c=ME(a.d.h,b);if(c===null)return C(21);return c.x;}
function H3(a,b){var c,d,e,f,g;a.d.l8=b;if(b===null){Bf(Bj(),C(198));Mn(a.dz,null);}else{b=b.data;c=DU(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fJ<<24>>24;e=e+1|0;}Mn(a.dz,c);}}
function Jv(a,b){a.d.rc=b;}
function Bl(a){return a.d.sm;}
function MC(a){var b;b=a.iV;if(b!==null)b.g(a);}
function A0d(a){var b,c,d;b=a.d.fM;c=AGP(a);if(b!==null){b=b.gl;d=new J;L(d);H(H(H(d,c),C(199)),b);c=K(d);}return c;}
function AKg(){var a=this;B.call(a);a.mc=null;a.oN=null;a.hr=null;}
function AJs(a,b){var c=new AKg();AZ5(c,a,b);return c;}
function AZ5(a,b,c){var d,e;a.mc=b;a.oN=c;d=null;e=new V$;e.tr=a;b.p9(d,e);b=null;d=new V_;d.sr=a;c.p9(b,d);}
function Z4(a,b,c){var d,e,f,g,h,i,j;d=a.hr;if(d!==null&&d.iS!==null){e=b!==a.mc?0:1;f=b.lO();g=(b.k1()+f|0)/2|0;h=g-f|0;d=a.hr;d=d.iS.data[He(d,g,e)];i=g-(!e?d.iy:d.iz)|0;j= -(b.h7(f)-(b.lo()).b|0)|0;c.qY(Bb(((!e?d.iz:d.iy)+i|0)-h|0,c.qe())+j|0);return;}}
function U_(){B.call(this);this.CS=null;}
function AOJ(a,b){Xw(a.CS,b);}
function Va(){B.call(this);this.Am=null;}
function A5D(a,b){Xw(a.Am,b);}
function Vb(){B.call(this);this.ym=null;}
function A2b(a,b){return AJl(a.ym,b);}
function GS(){var a=this;B.call(a);a.pq=null;a.tv=null;a.sN=null;}
function A_X(a,b){var c=new GS();Hc(c,a,b);return c;}
function Hc(a,b,c){var d;d=null;a.pq=b.bI;a.tv=d;a.sN=c;}
function ATo(a,b){var c;if(!AEh(b))return 0;c=a.tv;if(c!==null&&b.bK)GB(a.pq,c);else F5(a.pq,a.sN);return 1;}
function AEh(b){return b.cB&&b.bb==79?1:0;}
function U9(){B.call(this);this.wh=null;}
function ATv(a,b){var c,d,e;c=a.wh;d=DB(c.q,c.H)?c.H:!DB(c.q,c.M)?null:c.M;if(d!==null){e=new SH;e.zn=c;e.zl=d;e.zm=b;Ga(d,b,e);c.lE=null;c.m8.hr=null;c.f_.eO=null;}}
function U$(){B.call(this);this.tU=null;}
function A6b(a,b){return ALH(a.tU,b);}
var CP=G(0);
function AFr(){var a=this;B.call(a);a.F=null;a.by=null;a.eu=null;}
function FA(a,b,c,d,e){var f,g;f=AAz(a.F);HR(f,b,c);b=a.F;c=b.cf;g=new AEK;g.ye=b;g.yd=c;f.kx=g;Tk(f,d,e);H7(a,f);}
function H7(a,b){var c;c=a.eu;if(c!==b)a.eu=BY(c,b);}
function DT(a,b){var c;c=new AEw;c.rJ=a;c.rL=b;return c;}
function NT(a,b){var c;c=new AFF;c.zB=a;c.zC=b;return c;}
function D3(a){var b;b=a.eu;if(b!==null){M2(b);H7(a,null);}}
function DY(a,b){var c,d,e,f;c=a.by;if(c.cT>0)LA(FH(c,0));c=a.by;d=c.cT;e=c.dm;if(d==e.data.length)c.dm=CT(e,d+4|0);d=c.cT;f=d;while(0<f){e=c.dm.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dm.data[0]=b;c.cT=d+1|0;c.gG=null;Lf(b);return b;}
function IW(a,b){if(Pe(a)!==b?0:1)LA(b);Tl(a.by,b);b=a.by;if(b.cT>0)Lf(FH(b,0));}
function Kp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B5(a.by)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.F.bP;d.Z.dT(e);f=d.U;g=d.gI.jM;if(!SU(f)){if(!OY(f)&&!(!f.e7&&f.el!==null)){f.e7=0;AEa(f);h=f.eW;i=(h.eK+h.e6+5.0)/10.0;j=Cw(f.gE,f.lg);h=e.cv;k=f.eW;l=f.ke;m=i*2.0;Cr(h,k);n=j+L3(h,l,m)|0;f.iN=n;n=Fk(0,n,f.j.a);if(n){h=Eg(e,n,f.j.b,f.gE.cW);Cr(h,f.eW);k=f.ke;m=j;i=m+i;l=f.eW;o=l.eK;B1(h,k,i,m+o-(o+l.e6)/16.0);k=f.el;if(k===null){k=C4(e);f.el=k;}CU(k,h);EP(h);Cv(f.nh,0.0,0.0,BV(f.el),CX(f.el));}}h=g.mC;k
=f.el;if(k===null)RD(f,e,0,f.j.a,h);else{j=BV(k);g=g.oT;k=f.i;n=k.a;p=k.b;k=f.el;DR(e,n,p,k.fe,f.nh,k,g,h,f.gE.cW);n=f.j.a;if(j<n)RD(f,e,j,n-j|0,h);}}l=d.dE;if(l!==null){q=d.bh;h=d.U;k=d.gI.jM;if(l.jF!==null){if(l.dC===null)AIq(l,q);n=Cw(q,2.0);j=Bd(0,((h.j.b-CX(l.dC)|0)/2|0)-n|0);l.gJ.a=(((h.i.a+h.j.a|0)-j|0)-BV(l.dC)|0)-n|0;f=l.gJ;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.k_;j=BV(l.dC);r=n*2|0;Y(f,j+r|0,CX(l.dC)+r|0);f=q.bP;g=l.gJ;Bv(f,g.a,g.b,l.k_,!l.mm?k.mC:k.kc);Cv(q.m2,0.0,0.0,BV(l.dC),CX(l.dC));f=q.bP;g=l.gJ;n
=g.a+n|0;p=g.b+p|0;g=l.dC;DR(f,n,p,g.fe,q.m2,g,k.oT,!l.mm?k.mC:k.kc,0);}}Ca(e,1);j=Cw(d.bh,2.0);n=SU(d.U);f=d.bh;g=f.dB;f=f.qN;p=n?0:d.U.j.b;h=d.Z.j;Y(f,h.a,h.b+p|0);AK9(e,f,!n?d.U.i:d.Z.i,d.gI.jM.kc, -j|0,g);f=d.Z;AMs(e,f.j,f.i,j,p,ZH(d.gI.l5,d.bh.ct),d.gI.l5.oI,g);c=c+(-1)|0;}f=a.eu;if(f!==null)AGn(f);}
function G2(a,b){var c,d,e,f;c=a.F;if(c.cW==b)d=0;else{c.cW=b;J6(c.b9);d=1;}if(d){c=a.eu;if(c!==null){c=B9(c.cu);while(Cb(c)){OR(Cc(c));}}e=(B5(a.by)).data;b=e.length;f=0;while(f<b){c=e[f];c.U.e7=1;c.Z.kK();f=f+1|0;}}return d;}
function AYk(a,b){var c,d,e,f,g,h,i,j,k;c=a.eu;if(c!==null){d=0;e=c.cu.p-1|0;a:{while(e>=0){d=Ow(BI(c.cu,e),b.k,c.c8.dc);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B5(a.by)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.k;if(B3(h.U,c)){i=h.dE;if(i!==null)i.mm=Uu(i,c);e=D_(h.bh.dc,null);}else{i=h.dE;if(i!==null)i.mm=0;e=Cw(h.bh,7.0);j=Cw(h.bh,25.0);if(NI(h,c.a,e)){k=YL(h,c.a,j);if(NS(h,c.b,e)){e=D_(h.bh.dc,ML(k,C(200)));break b;}if(Ll(h,c.b,e)){e=D_(h.bh.dc,ML( -k|0,C(200)));break b;}}if(O1(h,c.b,e)){j=AFg(h,
c.b,j);if(Pm(h,c.a,e)){e=D_(h.bh.dc,ML(j,C(201)));break b;}if(Nm(h,c.a,e)){e=D_(h.bh.dc,ML( -j|0,C(201)));break b;}}e=0;}}c:{d:{if(!e){if(!B3(h.Z,b.k))break d;if(!h.Z.b3(b)&&!D_(h.bh.dc,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function APs(a,b,c,d){var e,f,g,h,i,j;e=a.eu;if(e!==null){f=0;g=e.cu.p-1|0;a:{while(g>=0){f=OU(BI(e.cu,g),b.k,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B5(a.by)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B3(i.U,b.k)&&!QE(i,b.k)){if(!MS(i,b))break c;if(!i.Z.cU(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function ARJ(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.eu;if(d!==null){e=null;f=d.cu.p-1|0;a:{while(f>=0){e=BI(d.cu,f);g=b.k;h=Ft(e.cG,g);if(!h&&!LP(e.cG)){e=e.ln;if(e!==null)e.e();}e=!h?null:A_Y;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B5(a.by);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.k;if(!c){c:{k=Cw(d.bh,7.0);l=Cw(d.bh,25.0);if(NI(d,e.a,k)){m=YL(d,e.a,l);if(NS(d,e.b,k)){g=KE(d,e,m,(-1));break c;}if(Ll(d,e.b,k)){g=KE(d,e,m,1);break c;}}if(O1(d,e.b,k)){f=AFg(d,e.b,l);if(Pm(d,
e.a,k)){g=KE(d,e,(-1),f);break c;}if(Nm(d,e.a,k)){g=KE(d,e,1,f);break c;}}g=null;}if(g!==null)break b;if(B3(d.U,e)){g=d.dE;if(g!==null&&Uu(g,e)){d.dE.jF.e();g=A_Y;break b;}g=d.Z.i;f=g.a;l=e.a;f=f-l|0;k=g.b;m=e.b;k=k-m|0;e=d.U.i;l=e.a-l|0;m=e.b-m|0;e=new Bh;g=new Ub;g.tn=d;g.to=l;g.ti=m;g.tk=e;g.tl=f;g.tm=k;break b;}}g=null;}f=g===null&&!MS(d,b)?0:1;k=!c&&d!==Pe(a)&&f?1:0;if(k){e=a.by;l=0;j=e.dm.data;m=j.length;d:{while(true){if(l>=m){l=(-1);break d;}if(d===j[l])break;l=l+1|0;}}if(l>0)Vd(a,l);}if(g===null&&f)g
=d.Z.cD(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function Vd(a,b){var c,d,e,f,g;LA(FH(a.by,0));c=a.by;d=c.cT;if(d<=b){c=new O2;Bn(c,Iu(b));N(c);}if(b){e=c.dm;f=e.data;g=f[b];while(b>0){f[b]=f[b-1|0];b=b+(-1)|0;}f[0]=g;f=c.gG;if(f!==null)Db(e,0,f,0,d);}Lf(FH(a.by,0));}
function AFY(a){var b;b=a.by.cT;if(b>1)Vd(a,b-1|0);}
function A6C(a,b,c){var d,e,f,g,h;d=a.eu;if(d!==null&&J4(d))return 1;e=(B5(a.by)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B3(d.U,b.k)){if(!MS(d,b))break b;if(!d.Z.dW(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A14(a,b,c){var d,e,f,g,h;d=(B5(a.by)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.Z;h.dV(h.i,h.j,c);h=g.U;if(h.h3!==null){h.eW=null;h.iN=0;h.e7=1;}IZ(g);h=g.dE;if(h!==null)Ox(h);f=f+1|0;}}
function Pe(a){var b;b=a.by;return b.cT<=0?null:FH(b,0);}
function UO(){var a=this;B.call(a);a.bP=null;a.b9=null;a.dc=null;a.bV=null;a.ct=0.0;a.cW=0;a.cf=null;a.dv=null;a.dB=null;a.qN=null;a.m2=null;a.DH=null;}
function Lo(a){var b;b=a.cf;if(b!==null)b.vR();}
function LD(a){var b;b=a.cf;if(b!==null)b.xH();}
function NB(a,b){var c;c=a.b9.eQ!==(EL()).activeElement?0:1;if(c)LD(a);a.cf=b;if(c)Lo(a);}
function Cx(a,b){if(a.cf!==b){LD(a);a.cf=b;Lo(a);}}
function ADb(a,b){if(a.cf===b)a.cf=null;}
function DB(a,b){return b!==a.cf?0:1;}
function KU(a){return a.bP.cv;}
function FC(a,b){return G1(a.bP,b.iC,b.hs*a.ct,b.kD,0);}
function Cw(a,b){return Ck(b,a.ct);}
function K6(a,b){var c;c=a.bP;if(!a.cW)c.qB=b;else c.o0=b;J6(a.b9);}
function A5v(a,b,c){var d;d=a.cf;return d!==null&&d.fz(b,c)?1:0;}
function A3o(a){var b;b=a.cf;return b===null?null:b.AS();}
function XE(){B.call(this);this.xd=null;}
function A6v(a,b,c,d){var e,f,g,h;e=(B5(a.xd.by)).data;f=e.length;g=0;a:{while(g<f){if(e[g].Z.dU(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function XD(){B.call(this);this.uE=null;}
function APu(a,b){var c,d,e,f;c=a.uE;b=b.k;d=0;e=c.by.cT;a:{while(d<e){f=FH(c.by,d);if(!B3(f.U,b)&&!QE(f,b)&&!AD_(f,b)?0:1){c=FH(c.by,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.x6;if(c!==null&&AKv(c.xS,b)?1:0){d=1;break b;}}d=0;}return d;}
function AG$(){var a=this;B.call(a);a.fd=null;a.pF=0.0;a.i3=0.0;a.hN=0;}
function A1i(){var a=new AG$();AUJ(a);return a;}
function AUJ(a){var b;b=Uj(0,0,2,20);a.fd=b;a.pF=0.5;a.i3=0.0;Ja(187,187,187,255,b.bd);}
function T_(a){return a.fd.u.a;}
function ACO(a,b){var c,d;a:{c=a.hN;if(b>a.i3)while(true){d=a.i3+a.pF;a.i3=d;a.hN=a.hN?0:1;if(b>d)continue;else break a;}}return a.hN==c?0:1;}
function Vt(a,b,c){Y(a.fd.w,b,c);}
function Z3(a,b){a.i3=b+a.pF*1.25;a.hN=1;}
function AMn(a,b){return AGM(a.fd.w,0,0,b);}
function ADV(a,b,c){if(a.hN)ABk(a.fd,b,c.a,c.b);}
function AFN(){var a=this;B.call(a);a.fM=null;a.h=null;a.qA=null;a.sm=null;a.is=null;a.j2=null;a.fw=null;a.l8=null;a.y=0;a.B=0;a.iT=0;a.jo=null;a.i7=null;a.p7=null;a.fy=0;a.g$=0;a.hp=0;a.jA=F2;a.BZ=F2;a.Cz=F2;a.rc=0;a.F4=0;a.ef=0;a.nf=0.0;a.gh=0;}
function A8$(a,b,c){var d=new AFN();ANn(d,a,b,c);return d;}
function AQC(a,b){var c=new AFN();AT$(c,a,b);return c;}
function A9f(a,b,c){var d=new AFN();WZ(d,a,b,c);return d;}
function ANn(a,b,c,d){WZ(a,(AKK(b)).kP,c,d);}
function AT$(a,b,c){WZ(a,b,null,c);}
function WZ(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.sm=AOZ();f=new UM;f.fP=P(Ou,16);f.fL=0;f.d7=(-1);a.is=f;a.jo=null;a.i7=BO();a.p7=BO();a.fy=1;a.g$=1;a.hp=1;a.ef=0;a.nf=0.0;a.gh=0;a.fM=d;a.qA=c;c=new ABl;g=e.length;b=P(DP,Bd(1,g));if(!g)b.data[0]=Zc(C(21));h=b.data;i=0;while(i<g){h[i]=Zc(e[i]);i=i+1|0;}d=new ZO;f=new Or;RM(f);d.fx=f;c.fp=d;c.ea=Ks();c.d2=Ks();c.jd=BO();if(!h.length){c=new BU;X(c);N(c);}c.E=b;j=AD9(c);c.dD=AIU(AWH(Lt(0,j,0),null,null));a.h=c;}
function En(a){var b;b=a.qA;if(b===null){b=a.fM;b=b===null?C(183):AJY(b.gl);}return b;}
function H6(a){var b;b=a.fM;return b===null?null:b.kZ;}
function M3(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.g$=3;a.hp=3;a.fy=3;c=CL(b[0]);d=E6(b[1]);CL(b[2]);if(b.length<5)ON(a.h,c,d);else{e=CL(b[3]);f=e.data;g=E6(b[4]);YW(a.h,c,d,e,g,0);UX(a,JU(e,f.length),O7(g));}if(a.gh){h=Fh(a);i=Kn(EN(),a.jA);j=new J;L(j);H(Id(H(H(j,h),C(202)),i),C(203));$rt_globals.console.info($rt_ustr(K(j)));}h=a.j2;if(h!==null)MC(h);}
function Jx(a){var b;TI(a,D1(a.y,a.B),JK(a.h,a.y,a.B));if(!(a.jo!==null&&!EU(a.i7))){b=a.B;if(b>0)TI(a,D1(a.y,b-1|0),JK(a.h,a.y,a.B-1|0));}}
function TI(a,b,c){var d,e,f,g,h,i,j,k;a.jo=null;I3(a.i7);d=CC(a.h.ea,c);if(d!==null)c=d;a:{e=CC(a.h.d2,c);if(e!==null){a.jo=ME(a.h,c);c=B9(e);while(true){if(!Cb(c))break a;f=Cc(c);BA(a.i7,ME(a.h,f));}}}c=a.j2;if(c!==null){g=b.bt;h=b.bx;b=c.fY;f=En(c.d);e=H6(c.d);i=(B5(b.wS)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.CN(f,e)){b=b.Fn;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new PJ;e.Ex=c;e.Ey=f;e.Ev=g;e.Ew=h;b.u2(f,g,h,e,c.kE);}}}
function UX(a,b,c){var d,e,f,g,h;if(a.fw!==null){a.Cz=EN();d=a.h.cI;e=a.fw;f=new ZI;f.AE=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BP(1);b.data[0]=d;h[2]=b;CG(e,f,C(204),g);}}
function LF(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.j2=b;a.fw=c;if(c===null){d=a.h.E.data;e=d.length;f=0;while(f<e){Uy(d[f]);f=f+1|0;}}else if(a.fy==1){a.jA=EN();b=En(a);if(BR(b,C(183))){a.g$=3;a.hp=3;a.fy=3;b=a.j2;if(b!==null)MC(b);}else{e=BR(b,C(194));f=BR(b,C(205));d=Fr(a.h);g=d.data.length;h=!e?5120:10240;i=AKf(b);if(f)Kq(a,d,i);else if(g<=h)Kq(a,d,i);else if(!e){WQ(a,O7(d),i);Kq(a,d,i);}else{WQ(a,O7(d),i);j=O7(d);k=a.fw;c=new R2;c.AG=a;l=P(B,2);m=l.data;m[0]=j;j=BP(1);j.data[0]=i;m[1]=j;CG(k,c,C(206),l);a.g$=
2;Kq(a,d,i);}}}}
function WQ(a,b,c){var d,e;d=a.fw;e=new Wn;e.A3=a;CG(d,e,C(207),I(B,[b,D$([c,250])]));a.hp=2;}
function Kq(a,b,c){var d,e,f,g;d=a.fw;e=new Yt;e.ze=a;f=P(B,2);g=f.data;g[0]=b;b=BP(1);b.data[0]=c;g[1]=b;CG(d,e,C(208),f);a.fy=2;}
function Fh(a){var b;b=a.fM;return b===null?C(21):AEd(b);}
function M1(a){var b,c,d,e,f;if(a.gh){b=Fh(a);c=new J;L(c);H(H(c,b),C(209));$rt_globals.console.info($rt_ustr(K(c)));}b=En(a);if(b===null)d=null;else{a:{e=(-1);switch(Kz(b)){case -1655966961:if(!Bk(b,C(205)))break a;e=3;break a;case 3401:if(!Bk(b,C(210)))break a;e=2;break a;case 98723:if(!Bk(b,C(211)))break a;e=1;break a;case 3254818:if(!Bk(b,C(194)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(212);break b;case 2:d=C(213);break b;case 3:d=C(214);break b;default:d=null;break b;}d=C(215);}}if
(d===null)MC(a.j2);else{a.jA=EN();b=a.fw;c=new AC5;c.wx=a;f=P(B,1);f.data[0]=Fr(a.h);CG(b,c,d,f);}}
function O6(a){var b;b=AXv(a.h.fp,null);Ys(b);UX(a,b.pp,b.nt);}
function AFD(){var a=this;B.call(a);a.zM=null;a.Do=null;a.rm=null;a.wS=null;a.ww=null;a.Cj=null;}
function Pc(a,b,c){return SE(a,B5(a.zM),b,c);}
function AAH(a,b,c){return SE(a,B5(a.Do),b,c);}
function SE(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.CN(c,d))return g.Ge;f=f+1|0;}return null;}
function ADx(a,b,c){var d,e,f,g;d=(B5(a.rm)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.CN(b,c))return g.F_;f=f+1|0;}return null;}
function FL(){var a=this;B.call(a);a.co=0;a.du=null;a.c0=null;a.e2=null;a.d6=0;}
var A_Z=0;var A_V=0;function Y0(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.c0;j=i===b&&!i.jP?0:1;if(j){a.c0=b;Oa(b,c.cv,a.du.hC);}k=IE(Be(FZ(b),e+2048|0),1024);l=a.e2;m=l.data.length;n=k<=m?0:1;if(n){a.e2=CT(l,k);while(m<k){a.e2.data[m]=C4(c);m=m+1|0;}}o=a.du.h8;if(!(!j&&!n)){if(A_Z){l=b.gU;$rt_globals.console.info("fMeasure"+l.data);A_Z=0;}if(!A_V){c=o.dx;b="alphabetic";c.textBaseline=b;}else{b=o.dx;c="top";b.textBaseline=c;}a.d6=f/1024|0;p=0;while(p<k){KP(a,o,d,a.d6+p|0);p=p+1|0;}a.c0.jP=0;}e=a.e2.data.length;if
(e&&f<=FZ(a.c0)){f=f/1024|0;g=a.d6;if(f!=g){if(XJ(f-g|0)>=e){g=0;while(g<e){KP(a,o,d,f+g|0);g=g+1|0;}a.d6=f;}else{while(true){g=a.d6;if(g>=f)break;KP(a,o,d,g+e|0);a.d6=a.d6+1|0;}while(true){g=a.d6;if(g<=f)break;KP(a,o,d,g-1|0);a.d6=a.d6-1|0;}}}}}
function KP(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=ZG(a,e);g=a.c0;if(f>=g.s.data.length)return;h=g.gU;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.co;l=a.du.hC;E8(b);a:{while(true){g=a.c0;if(f>=g.s.data.length)break a;m=l.data;g=Ku(g,f);n=m[Ld(g)];o=!A_V?Ml(n,c):NX(n,c);m=h.data;Cr(b,n);B1(b,g.x,k,o);k=m[f]-j+a.co;if(k>1024.0)break;f=f+1|0;}}h=a.e2.data;CU(h[d%h.length|0],b);}
function Q_(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.e2.data.length;if(!o)return;if(g>FZ(a.c0))return;p=a.c0;q=p.fi;r=p.s;s=g/1024|0;t=ZG(a,g);u= -a.co|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.e2.data[s%o|0];bb=w[t];bc=z[t]+a.co|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.co|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.co:2*a.co|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.co:2*a.co|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bw.gZ;if(bb===j)bo=h.bw.si;if(k!==null){p=B9(k);d:{while(Cb(p)){if(BR(Cc(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bw.xG;}if(n!==null){w=n.oj;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AF8(h.d3,h,bi,n.fJ);}if(!bn&&!bl){i.b=Be(i.b,FZ(a.c0));AH2(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.co:0)|0,(g
+bg|0)<=(i.b+(!y?a.co:2*a.co|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.co:0)|0,g-x|0,bo);}else{bp=h.kj.data[bb.b8];p=bn?h.bw.lu:Ug(bo,Yg(h,bp.np));Cv(a.du.j1,g-x|0,0.0,bg,v);Y(a.du.iK,bg,f);HF(a.du,d,ba,u+c|0,b,bp.hA,p);}if((bb.bH&12)>>2>0){bc=u+c|0;Ca(d,1);p=a.du;bq=p.ol;bq.a=bg;x=b+p.vs|0;bk=x-p.C_|0;br=p.rw;bs=x+br;ba=p.gQ;Ve();MP(d,bc,bk,bq,br,bs,ba,A_0.lH.hA);Ca(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AH2(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kj.data[h.b8];o=n.hA;p=Ug(m,Yg(f,n.np));q=f.bw.lu;f=a.du;r=f.j1;s=f.iK;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);Y(s,u,e);HF(a.du,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.du;c=c+i|0;HF(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);Y(s,i,e);HF(a.du,b,g,c-j|0,d,o,q);}
function Ug(b,c){if(b!==null)c=b;return c;}
function ZG(a,b){var c,d,e,f,g,h,i;c=a.c0;d=c.gU;e=0;f=c.s.data.length;g=b;b=BQ(e,f);if(b>0){c=new BU;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BQ(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AFU(a){var b,c,d;b=a.e2.data;c=b.length;d=0;while(d<c){AIu(b[d]);d=d+1|0;}a.e2=a.du.oz;a.c0=null;}
function AKV(a,b,c,d,e,f,g,h,i){var j,k;j=FZ(a.c0);if(j)j=j+a.co|0;if(!j)j=j-a.co|0;k=Bd( -a.co|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bv(b,c+k|0,d,f,i);}
function AAL(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FL,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.vv(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.c0===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FL;g.co=3;g.d6=0;g.du=d;g.e2=d.oz;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AFU(q);j=j+1|0;}return i;}
function T9(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].c0;if(e!==null)e.jP=1;d=d+1|0;}}
function Pb(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AFU(b[d]);d=d+1|0;}}
function AH5(){A_V=0;}
function AJK(){var a=this;B.call(a);a.gz=null;a.dL=null;a.fr=null;a.f7=null;a.ph=null;a.o5=null;}
function JL(){var a=new AJK();A1T(a);return a;}
function A1T(a){a.gz=new Bh;a.dL=new Bh;a.fr=new Bh;a.f7=new Bh;a.ph=new B4;a.o5=new B4;}
function AA1(a){var b;b=a.dL;return !Bb(b.a,b.b)?0:1;}
function Ji(a,b){return GK(b,a.fr,a.f7);}
function Gq(a,b,c,d){var e,f,g,h,i;e=Ji(a,b);f=GK(b,a.gz,a.dL);if(!e&&!f)return null;if(!f){if(!d)c.g(Wv(a,b.a-a.fr.a|0));else c.g(RF(a,b.b-a.fr.b|0));}g=!d?a.gz.a+(a.dL.a/2|0)|0:a.gz.b+(a.dL.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Tp;b.w9=a;b.w$=c;b.w8=i;}else{b=new To;b.sA=a;b.sy=c;b.sz=i;}return b;}
function IA(a,b,c){if(c!==null)BL(a.ph,c);if(b!==null)BL(a.o5,b);}
function AHj(b,c){var d;d=new ADH;d.uy=b;d.DA=c;return d;}
function RF(a,b){var c,d,e;c=a.f7.b;d=a.dL.b;e=c-d|0;return AHj(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Wv(a,b){var c,d,e;c=a.f7.a;d=a.dL.a;e=c-d|0;return AHj(Be(Bd(0,b-(d/2|0)|0),e),e);}
function KY(a,b,c,d,e,f,g){WD(a,b,c,d,e,f,g,1);}
function Su(a,b,c,d,e,f,g){WD(a,b,c,d,e,f,g,0);}
function WD(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(AAa(d,d,e),i);e=e-d|0;i=d-j|0;i=i?AAa(b,i,e):0;if(!h){k=a.gz;k.a=i+c|0;k.b=f-g|0;l=a.dL;l.a=j;l.b=g;l=a.fr;l.a=c;l.b=k.b;k=a.f7;k.a=d;k.b=g;break a;}k=a.gz;k.a=f-g|0;k.b=i+c|0;l=a.dL;l.a=g;l.b=j;l=a.fr;l.a=k.a;l.b=c;k=a.f7;k.a=g;k.b=d;break a;}}Y(a.f7,0,0);Y(a.dL,0,0);}}
function WS(a,b){Hn(a,b);Hs(a,b);}
function Hn(a,b){var c;c=a.fr;Bv(b,c.a,c.b,a.f7,a.ph);}
function Hs(a,b){var c,d;c=a.dL;c.a=c.a-2|0;c.b=c.b-2|0;d=a.gz;Bv(b,d.a+1|0,d.b+1|0,c,a.o5);b=a.dL;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gy(a,b,c){return Ji(a,b)&&Ha(c)?1:0;}
function AG9(){var a=this;B.call(a);a.Gq=20;a.g8=null;a.fU=null;a.l1=0.0;a.lY=null;a.jV=0;a.lp=0;a.hQ=0;a.dk=null;a.pj=null;a.fE=null;a.hh=null;a.hf=0;}
function AJB(){var a=new AG9();A6O(a);return a;}
function A6O(a){a.Gq=20;a.g8=new Bh;a.fU=new Bh;a.dk=BO();a.pj=DU(0);}
function ADr(a,b,c){var d,e,f,g,h;d=a.hf;if(b==d)return;e=a.dk.p;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){SV(a,b);a.hf=b;}else{Za(a,c);if(a.hf>=b)while(true){if(h<g)break a;a.hf=Qe(BI(a.dk,h%e|0),a.fE,a.hh,a.hf,b,f,a.l1);h=h+(-1)|0;}while(g<=h){a.hf=Qe(BI(a.dk,g%e|0),a.fE,a.hh,a.hf,b,f,a.l1);g=g+1|0;}}}}
function Mn(a,b){if(b===null)b=DU(0);a.pj=b;}
function ACG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hQ;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.dk;h=BI(h,g%h.p|0);i=a.g8;j=a.pj;k=h.fS.b;l=d.lK;m=b+f|0;n=h.cM;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&Xo(d,j,r,l)!==l.lD?0:1){k=Bb((q-p|0)+1|0,h.cM);Y(h.jN,BV(h.c9),k);Cv(h.kt,0.0,Bb(p,h.cM),BV(h.c9),k);t=r;}else{u=Xo(d,j,r,l);N2(h,e,f+Bb(p,h.cM)|0,i,l.pI,u);Y(h.jN,BV(h.c9),h.cM);Cv(h.kt,0.0,Bb(q,h.cM),BV(h.c9),h.cM);p=q;}q=q+1|0;r=t;}u=Xo(d,j,r,l);N2(h,
e,f+Bb(p,h.cM)|0,i,l.pI,u);g=g+1|0;f=f+a.hQ|0;}}
function T7(a,b,c,d){var e,f,g,h,i,j;e=a.dk.p;while(true){f=a.dk.p;g=Bb(f,a.hQ);if(g>(d+a.lp|0))break;h=BK(0,g);i=new RL;g=a.fU.a;f=a.lp;j=a.lY;i.jN=new Bh;i.kt=new B4;i.q0=h;i.ey=20;i.cM=f;i.fS=BK(g,20*f|0);i.hZ=Ml(j,f);if(i.c9===null)i.c9=C4(b);BA(a.dk,i);}if(f==e)return;Za(a,b);SV(a,c);}
function SV(a,b){var c,d,e,f,g,h,i,j,k;c=a.dk;d=c.p;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B9(c);while(Cb(c)){f=Cc(c);g=a.fE;h=a.l1;E8(g);i=0;while(true){j=f.ey;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;Hh(f,g,Dq(e),Bb(f.cM,i)+f.hZ|0,h);i=i+1|0;}CU(f.c9,g);f.yg=g.jQ;}}
function Z9(a,b,c,d){a.lY=b;a.lp=c;a.hQ=c*20|0;a.jV=d;Z_(a);}
function Za(a,b){var c;c=a.fE;if(!(c!==null&&c.jQ==a.jV)){c=Eg(b,a.fU.a,a.hQ,a.jV);a.fE=c;Cr(c,a.lY);ABG(a.fE,2);}c=a.hh;if(!(c!==null&&c.jQ==a.jV)){b=Eg(b,a.fU.a,a.lp,a.jV);a.hh=b;Cr(b,a.lY);ABG(a.hh,2);}}
function I9(a){FM(a.dk,new AFw);I3(a.dk);Z_(a);}
function Z_(a){a.fE=BY(a.fE,null);a.hh=BY(a.hh,null);}
function Tr(a,b,c,d,e){Ct(a.g8,b);Y(a.fU,c,d);a.l1=e;}
function YQ(){B.call(this);this.EZ=null;}
function YP(){B.call(this);this.q_=null;}
function AOX(a,b){var c;c=a.q_;Go(c,Gg(b,Lx(c)));}
function YO(){B.call(this);this.un=null;}
function AOb(a,b){var c;c=a.un;Jg(c,Gg(b,ACM(c)));}
function AMu(){var a=this;B.call(a);a.j1=null;a.iK=null;a.ol=null;a.gQ=null;a.t2=null;a.hC=null;a.oz=null;a.dw=null;a.h8=null;a.rw=0.0;a.d5=0;a.vs=0;a.C_=0;a.jh=0;}
function ASE(a){var b=new AMu();AWr(b,a);return b;}
function AWr(a,b){a.j1=new B4;a.iK=new Bh;a.ol=new Bh;a.gQ=new B4;a.t2=AZ8(0);a.hC=P(Ma,4);a.oz=P(I0,0);a.jh=b;Md(a.gQ);}
function ZJ(a){a.h8=BY(a.h8,null);}
function Tv(a,b,c){var d,e;d=C6(Fl(a.dw)*b);a.d5=d;e=a.dw;a.vs= -( -((d+e.eK+e.e6)/2.0)|0)|0;AF0(a,c);return a.d5;}
function QP(a,b){var c,d;Md(a.gQ);c=a.gQ;Wj(c,b,c);a.rw=Yq(a.gQ);c=a.gQ;d=c.bu+c.bi+1.5|0;a.C_=d;Y(a.ol,0,d*2|0);}
function AF0(a,b){a.h8=BY(a.h8,Eg(b,1024,a.d5,a.jh));}
function HF(a,b,c,d,e,f,g){var h,i;h=a.iK;if(h.a&&h.b){i=a.j1;if(i.bD!==0.0&&i.bi!==0.0){DR(b,d,e,h,i,c,f,g,a.jh);return;}}}
function YN(){B.call(this);this.Cx=null;}
function AYo(a){var b,c;b=a.Cx;c=b.kG?0:1;b.kG=c;b=new J;L(b);J7(H(b,C(216)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function YU(){B.call(this);this.yR=null;}
function A0T(a){var b,c;b=a.yR;c=b.lw^1;b.lw=c;b=new J;L(b);J7(H(b,C(217)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function YT(){B.call(this);this.vl=null;}
function A7M(a){var b,c,d,e,f;b=a.vl;c=(b.eA+3|0)%6|0;b.eA=c;d=b.fh.data;e=d.length;f=0;while(f<e){b=d[f];b.co=c;b=b.c0;if(b!==null)b.jP=1;f=f+1|0;}}
function YS(){B.call(this);this.xJ=null;}
function ASM(a){var b;b=a.xJ;b.cc=b.cc?0:1;I9(b.dz);b.dz=AJB();OK(b);ACa(b,b.i,b.j,b.cj.ct);}
function YR(){B.call(this);this.rZ=null;}
function AUF(a){var b;b=a.rZ;b.mr=b.mr?0:1;}
function YM(){B.call(this);this.AV=null;}
function A6$(a){var b;b=a.AV;b.qE=b.qE?0:1;}
function V$(){B.call(this);this.tr=null;}
function ASP(a){var b;b=a.tr;Z4(b,b.mc,b.oN);}
function V_(){B.call(this);this.sr=null;}
function A34(a){var b;b=a.sr;Z4(b,b.oN,b.mc);}
var AIl=G();
function N9(){B.call(this);this.ES=null;}
var A_z=null;var A_1=null;function A1U(){A1U=Bm(N9);A7x();}
function AQn(a){var b=new N9();AJ9(b,a);return b;}
function AJ9(a,b){A1U();a.ES=b;}
function A7x(){A_z=AQn(C(218));A_1=AQn(C(219));}
var AGH=G(0);
function AK3(b,c,d){return Ja(b,c,d,255,new B4);}
function Ja(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function WJ(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ARk(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bq=g+i;e.bu=h+i;e.bi=j+i;return e;}
function I2(b,c,d,e,f){f=WJ(b,c,d,f);f.bD=e;return f;}
function In(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var ABB=G();
function AUj(a,b){var c,d,e;c=b.cB;d=c&&!b.bK&&!b.dy&&!b.i8?1:0;a:{if(d){d=b.bb;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bK&&!c&&!b.dy&&!b.i8?1:0;d=d&&b.bb==46?1:0;}b:{if(!d){e=b.bb;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.pu=1;}return 0;}
function ABA(){B.call(this);this.yL=null;}
function AXR(a,b){var c;c=a.yL.cf;return c!==null&&c.bk(b)?1:0;}
function U0(){var a=this;B.call(a);a.bh=null;a.x6=null;a.i5=null;a.i1=null;a.U=null;a.dE=null;a.Z=null;a.gI=null;a.qz=0;}
function AGm(a){var b=new U0();AUu(b,a);return b;}
function A6U(a,b){var c=new U0();AHi(c,a,b);return c;}
function AUu(a,b){AHi(a,b,AXV());}
function AHi(a,b,c){var d;a.bh=b;d=new VJ;Fi(d);d.nh=new B4;d.gE=b;a.U=d;a.Z=c;}
function UC(a,b){var c,d;if(a.dE===null){c=new RE;c.gJ=new Bh;c.k_=new Bh;a.dE=c;d=a.gI;if(d!==null)AB1(c,d);}a.dE.jF=b;}
function Lf(a){var b;b=a.i5;if(b!==null)b.e();}
function LA(a){var b;b=a.i1;if(b!==null)b.e();}
function CZ(a,b){var c;c=a.U;c.e7=c.e7|(BR(c.ke,b)?0:1);c.ke=b;IZ(a);}
function AB2(a,b,c){var d,e,f;d=a.U;e=BR(d.h3,b)?0:1;f=c===d.lg?0:1;if(e){d.h3=b;d.eW=null;Rx(d,0);}d.e7=d.e7|(!e&&!f?0:1);d.lg=c;d.iN=0;IZ(a);}
function Eu(a,b){var c;a.gI=b;c=b.up;BG(b);AB2(a,c,3.0);c=a.dE;if(c!==null)AB1(c,b);}
function Kx(a){var b;b=a.U;b.el=BY(b.el,null);b.eW=null;a.Z=BY(a.Z,null);b=a.dE;if(b!==null){Ox(b);b.jF=null;}}
function LO(a,b){var c,d,e;c=a.Z;d=c.i;e=c.j;b=BY(c,b);a.Z=b;b.dV(d,e,a.bh.ct);}
function EJ(a,b,c){a.Z.dV(b,c,a.bh.ct);IZ(a);}
function IZ(a){var b,c,d;if(a.bh.ct!==0.0){b=a.U;if(b.h3!==null){c=a.Z.j.a;b.j.a=c;d=b.el;if(d!==null&&c!=BV(d)&&!(c>=b.iN&&BV(b.el)>=b.iN))b.e7=1;b=a.U;b.b1=a.bh.ct;if(OY(b))c=0;else{b=a.U;Rx(b,WY(b));c=b.j.b;}b=a.U.i;d=a.Z.i;Y(b,d.a,d.b-c|0);b=a.dE;if(b!==null)Ct(b.gJ,a.U.i);return;}}}
function AEq(a){return WY(a.U);}
function MS(a,b){return AD_(a,b.k);}
function AD_(a,b){var c;c=!(a.qz&1)?0:1;return !c&&!B3(a.Z,b)?0:1;}
function ML(b,c){if(b<0)c=C(220);else if(b>0)c=C(221);return c;}
function Pm(a,b,c){var d;d=a.U.i.a;return (d-c|0)<=b&&b<d?1:0;}
function Nm(a,b,c){var d,e;d=a.U;e=d.i.a+d.j.a|0;return e<=b&&b<(e+c|0)?1:0;}
function NS(a,b,c){var d;d=a.U.i.b;return (d-c|0)<=b&&b<d?1:0;}
function Ll(a,b,c){var d,e;d=a.Z;e=d.i.b+d.j.b|0;return e<=b&&b<(e+c|0)?1:0;}
function O1(a,b,c){var d,e,f;d=a.U.i.b-c|0;e=a.Z;f=(e.i.b+e.j.b|0)+c|0;return d<=b&&b<f?1:0;}
function AFg(a,b,c){var d,e;d=a.U.i.b+c|0;e=a.Z;return ALw(b,d,(e.i.b+e.j.b|0)-c|0);}
function NI(a,b,c){var d,e,f;d=a.U;e=d.i.a;f=e-c|0;e=(e+d.j.a|0)+c|0;return f<=b&&b<e?1:0;}
function YL(a,b,c){var d,e;d=a.U;e=d.i.a;return ALw(b,e+c|0,(e+d.j.a|0)-c|0);}
function ALw(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BQ(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function QE(a,b){var c;a:{b:{c:{c=Cw(a.bh,7.0);if(NI(a,b.a,c)){if(NS(a,b.b,c))break c;if(Ll(a,b.b,c))break c;}if(!O1(a,b.b,c))break b;if(!Pm(a,b.a,c)&&!Nm(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function KE(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.a;h=b.b;b=a.Z;i=b.i;j=i.a;k=i.b;b=b.j;l=b.a;m=b.b;b=new U4;b.ud=a;b.ua=e;b.t_=f;b.uc=c;b.ub=g;b.ug=j;b.uf=l;b.ui=d;b.uh=h;b.ue=k;b.s8=m;return b;}
function Nz(a){var b;b=a.dE;if(b!==null){b.jF.e();return;}b=new Gp;X(b);N(b);}
function KW(){var a=this;B.call(a);a.w=null;a.u=null;a.bd=null;a.br=null;}
function TA(){var a=new KW();ADW(a);return a;}
function Uj(a,b,c,d){var e=new KW();APx(e,a,b,c,d);return e;}
function ADW(a){a.w=new Bh;a.u=new Bh;a.bd=new B4;a.br=new B4;}
function APx(a,b,c,d,e){a.w=new Bh;a.u=new Bh;a.bd=new B4;a.br=new B4;HJ(a,b,c,d,e);}
function HJ(a,b,c,d,e){Y(a.w,b,c);Y(a.u,d,e);}
function ACP(a){Y(a.u,0,0);}
function LP(a){var b;b=a.u;return Bb(b.a,b.b)?0:1;}
function Ft(a,b){return GK(b,a.w,a.u);}
function ABk(a,b,c,d){var e;e=a.w;Bv(b,e.a+c|0,e.b+d|0,a.u,a.bd);}
function Xd(a,b,c,d,e,f){var g,h,i,j;g=a.w;d=g.a+d|0;e=g.b+e|0;g=a.u;h=a.br;i=a.bd;GX(b,b.jm);G9(b.jm,b.be,d,e,g,b.dq);OF(b.jm,b.be,c);g=b.jm;j=b.be;FX(j,g.xv,h);FX(j,g.xt,i);c=g.tQ;j.uniform2f(c,f,0.0);Gn(b);}
var FF=G();
function N7(){FF.call(this);this.Ge=null;}
function ACz(){FF.call(this);this.F_=null;}
function AAg(){FF.call(this);this.Fn=null;}
var GA=G(0);
var TH=G(0);
function B4(){var a=this;B.call(a);a.bq=0.0;a.bu=0.0;a.bi=0.0;a.bD=0.0;}
function AFL(a,b,c,d){var e=new B4();A4G(e,a,b,c,d);return e;}
function ANu(a){var b=new B4();AMv(b,a);return b;}
function A4G(a,b,c,d,e){a.bq=b;a.bu=c;a.bi=d;a.bD=e;}
function Cv(a,b,c,d,e){a.bq=b;a.bu=c;a.bi=d;a.bD=e;}
function AMv(a,b){a.bq=b.bq;a.bu=b.bu;a.bi=b.bi;a.bD=b.bD;}
function BL(a,b){a.bq=b.bq;a.bu=b.bu;a.bi=b.bi;a.bD=b.bD;return a;}
function AXC(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BF(a)===BF(b)){b=b;if(b.bq===a.bq&&b.bu===a.bu&&b.bi===a.bi&&b.bD===a.bD?1:0){c=1;break a;}}c=0;}return c;}
function APt(a){var b,c,d,e,f;b=a.bq;c=a.bu;d=a.bi;e=a.bD;f=new J;L(f);Dg(H(Dg(H(Dg(H(Dg(H(f,C(71)),b),C(72)),c),C(222)),d),C(223)),e);return K(f);}
var JF=G(0);
function AKC(){var a=this;EF.call(a);a.cx=null;a.p=0;}
function BO(){var a=new AKC();AQ0(a);return a;}
function AQ0(a){a.cx=P(B,10);}
function Nt(a,b){var c,d;c=a.cx.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cx=CT(a.cx,d);}}
function BI(a,b){La(a,b);return a.cx.data[b];}
function A3I(a){return a.p;}
function BA(a,b){var c,d;Nt(a,a.p+1|0);c=a.cx.data;d=a.p;a.p=d+1|0;c[d]=b;a.ca=a.ca+1|0;return 1;}
function ALL(a,b,c){var d,e,f;Ry(a,b);Nt(a,a.p+1|0);d=a.p;e=d;while(e>b){f=a.cx.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cx.data[b]=c;a.p=d+1|0;a.ca=a.ca+1|0;}
function E2(a,b){var c,d,e,f;La(a,b);c=a.cx.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.ca=a.ca+1|0;return d;}
function AI9(a,b){var c;c=LL(a,b);if(c<0)return 0;E2(a,c);return 1;}
function I3(a){AGT(a.cx,0,a.p,null);a.p=0;a.ca=a.ca+1|0;}
function AKP(a,b,c){var d,e,f,g,h,i;Ry(a,b);if(c.e5())return 0;Nt(a,a.p+c.c$()|0);d=c.c$();e=a.p;f=e-1|0;while(f>=b){g=a.cx.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.p=e+d|0;h=c.ck();i=0;while(i<d){g=a.cx.data;e=b+1|0;g[b]=h.cm();i=i+1|0;b=e;}a.ca=a.ca+1|0;return 1;}
function La(a,b){var c;if(b>=0&&b<a.p)return;c=new BJ;X(c);N(c);}
function Ry(a,b){var c;if(b>=0&&b<=a.p)return;c=new BJ;X(c);N(c);}
function FM(a,b){var c;c=0;while(c<a.p){b.g(a.cx.data[c]);c=c+1|0;}}
function AMz(a){var b,c,d,e;b=a.p;if(!b)return C(22);c=b-1|0;d=new J;Gd(d,b*16|0);Br(d,91);b=0;while(b<c){e=a.cx.data;BM(H(d,e[b]!==a?e[b]:C(224)),C(38));b=b+1|0;}e=a.cx.data;H(d,e[c]!==a?e[c]:C(224));Br(d,93);return K(d);}
function Ij(){var a=this;B.call(a);a.fJ=0;a.oj=null;}
function AZ8(a){var b=new Ij();AS$(b,a);return b;}
function AS$(a,b){a.fJ=b;}
function Ma(){var a=this;B.call(a);a.oY=null;a.DW=null;a.pG=0.0;a.D9=0;a.En=0;a.ux=0;a.E4=0;a.eK=0.0;a.e6=0.0;a.D0=0.0;a.qO=0.0;a.D5=0;a.rA=null;}
function Ml(a,b){return NX(a,b)+a.ux|0;}
function NX(a,b){return (b-Fl(a)|0)/2|0;}
function Fl(a){return C6(a.eK+a.e6);}
function NY(a,b){return C6((a.eK+a.e6)*b);}
function I0(){var a=this;B.call(a);a.e8=null;a.gw=null;a.fe=null;}
var A_i=0;function AIu(a){var b;b=a.gw;if(b!==null){A_i=A_i-1|0;a.e8.ep.deleteTexture(b);a.gw=null;}}
function BV(a){return a.fe.a;}
function CX(a){return a.fe.b;}
function Uo(a,b,c,d){var e;e=a.fe;e.a=b;e.b=c;O9(a);a.e8.ep.texStorage2D(3553,1,d,b,c);e=a.e8.ep;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function O9(a){var b,c;b=a.e8.ep;c=a.gw;b.bindTexture(3553,c);}
function CU(a,b){X9(a,b.oC,b.n2,32856);AAc(a,b,0,0);}
function X9(a,b,c,d){var e,f,g,h;a:{e=a.fe;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){O9(a);break a;}e=a.e8.ep;h=a.gw;e.deleteTexture(h);a.gw=a.e8.ep.createTexture();Uo(a,b,c,d);break a;}}Uo(a,b,c,d);}}
function Km(a,b,c,d){O9(a);AAc(a,b,c,d);}
function AAc(a,b,c,d){var e;e=a.e8.ep;b=b.jG;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Z8=G(0);
var A_2=0.0;function Md(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function Wj(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JW(b.bD,JW(c,A_2));Cv(d,b.bq/c,b.bu*c,AW1(b.bi*c,1.25),e);}
function Yq(b){var c;c=b.bu;return c-(c|0)>=0.25?0.0:0.5;}
function AGl(){A_2=NO(NO(0.5,0.375),4.0);}
var Pt=G(0);
function Ha(a){return D_(a,null);}
function St(b){var c;c=new ABv;c.wO=b;return c;}
function AAp(){B.call(this);this.uV=null;}
function A1u(a){Lo(a.uV);}
function AAo(){B.call(this);this.xm=null;}
function AX9(a){LD(a.xm);}
function ANg(){var a=this;B.call(a);a.bU=null;a.bJ=null;a.dQ=0;}
function AOZ(){var a=new ANg();A7e(a);return a;}
function AZW(a){var b=new ANg();ATR(b,a);return b;}
function A7e(a){a.bU=new HI;a.bJ=new HI;}
function ATR(a,b){a.bU=new HI;a.bJ=new HI;Kl(a,b);}
function Kl(a,b){ADL(a.bU,b.bU);ADL(a.bJ,b.bJ);a.dQ=b.dQ;}
function OH(a,b,c){Ci(a.bJ,b,c);if(!a.dQ)Ci(a.bU,b,c);}
function RH(a,b){Ci(a.bU,b,0);Ci(a.bJ,b+1|0,0);}
function ED(a){if(S0(a.bU,a.bJ)>0)return a.bJ;return a.bU;}
function Gs(a){if(S0(a.bU,a.bJ)<0)return a.bJ;return a.bU;}
function AMt(a,b){var c,d,e,f;c=a.bU;d=c.Q;e=a.bJ;if(d==e.Q&&c.bg==e.bg?1:0)return null;c=ED(a);e=Gs(a);d=c.Q;if(d<=b){f=BQ(b,e.Q);if(f<=0)return BK(b<=d?c.bg:0,f>=0?e.bg:(-1));}return null;}
function DE(a){var b,c;b=a.bU;c=a.bJ;return (b.Q==c.Q&&b.bg==c.bg?1:0)?0:1;}
function UM(){var a=this;B.call(a);a.fP=null;a.fL=0;a.d7=0;}
function AEj(a,b){var c,d,e;c=a.fL;d=a.fP;if(c==d.data.length)a.fP=CT(d,c+16|0);d=a.fP.data;e=a.fL;a.fL=e+1|0;d[e]=b;}
function ABr(a){var b,c,d,e;b=a.fL;if(b?0:1)return;c=a.d7;d=b-1|0;if(c==d)a.d7=c-1|0;e=a.fP.data;a.fL=d;e[d]=null;}
var Hr=G();
function ABl(){var a=this;Hr.call(a);a.E=null;a.dD=null;a.fp=null;a.ea=null;a.d2=null;a.jd=null;a.l$=null;a.cI=0;a.n7=0;a.Bz=0.0;}
function Cg(a,b){return a.E.data[b];}
function CN(a){return a.E.data.length;}
function AD9(a){return FY(a,CN(a));}
function G4(a,b){return a.E.data[b].W;}
function AM7(a,b,c){var d,e,f,g,h;d=a.E;e=d.data;f=e[b];d=CT(d,e.length+1|0);e=d.data;a.E=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ej(P(CB,0));a.E.data[b+1|0]=f;}else if(c==f.W){e[b]=f;e[b+1|0]=Ej(P(CB,0));}else{e=(Jo(f,c)).data;d=a.E.data;d[b]=e[0];d[b+1|0]=e[1];}Gr(a,b,c,0,C(177));}
function Me(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=Ej(MG(d.s,e.s));g=a.E;h=g.data.length;if(b<h&&b>=0){i=P(DP,h-1|0);c=i.data;ABe(g,b,i);c[b]=f;a.E=i;return;}d=new Bt;X(d);N(d);}
function PQ(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].W?0:1)){d=(Cg(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.x)){e=Q(h.x,g);break a;}g=g-M(h.x)|0;f=f+1|0;}e=0;}Gr(a,b,c,1,Oh(e));h=a.E.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].x);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].x)==1)h.s=ABe(d,e,P(CB,f-1|0));else{j=i[e];if(c<=0)k=Ep(DD(j.x,1),j.b8,j.bH);else if(c>=(M(j.x)-1|0)){k=new CB;l=j.x;AC4(k,Cz(l,0,M(l)-1|0),j.b8,j.bH);}else{d=B6(M(j.x)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.x,b);b=b+1|0;}b=m.length;while(c<b){k=j.x;n=c+1|0;m[c]=Q(k,n);c=n;}k=Ep(GI(d),j.b8,j.bH);}i[e]=k;}h.W=h.W-1|0;Fg(h);}else if(b!=(d.length-1|0)){Gr(a,b,c,1,C(177));Me(a,b);}}
function AF5(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){ABK(a.E.data[b],c,e[0]);return;}g=f-1|0;d=(Jo(a.E.data[b],c)).data;h=d[0];i=d[1];d=a.E;j=CT(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:M(l[f-1|0].x);Ne(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!GT(e[m])?Zc(e[m]):Ej(P(CB,0));d[b+m|0]=k;m=m+1|0;}Ne(i,0,0,e[g]);d[b+g|0]=i;a.E=j;}
function Wd(a,b){var c,d,e,f,g,h,i;c=ED(b);d=Gs(b);e=c.Q;if(e==d.Q)return Cz(F6(a.E.data[e]),c.bg,d.bg);f=new J;L(f);b=a.E.data[c.Q];e=c.bg;Br(BM(f,DD(F6(b),e)),10);g=a.E.data;e=c.Q+1|0;h=d.Q;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AGe(BM(f,F6(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.E.data[d.Q];h=d.bg;BM(f,Cz(F6(b),0,h));return K(f);}b=new O2;X(b);N(b);}
function PY(a,b,c){var d;AEL(a,b);d=ED(b);Gr(a,d.Q,d.bg,1,c);}
function AEL(a,b){var c,d,e,f,g,h,i;a:{c=ED(b);d=Gs(b);e=c.Q;if(e==d.Q)Ie(a.E.data[e],c.bg,d.bg);else{b=a.E.data[e];Ie(b,c.bg,b.W);Ie(a.E.data[d.Q],0,d.bg);e=c.Q+1|0;f=d.Q;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DP,(h-f|0)+e|0);AHy(g,e,f,i);a.E=i;Me(a,c.Q);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function JK(a,b,c){return D1(b,Hd(Cg(a,b),c));}
function AFe(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(Cg(a,c)).W|0)>=b)return BK(c,b-d|0);d=d+((Cg(a,c)).W+1|0)|0;c=c+1|0;}return BK(e,0);}
function FY(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+G4(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function ME(a,b){return O4(Cg(a,b.bt),b.bx);}
function Fr(a){var b,c,d,e,f,g,h,i,j;b=B6(AD9(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].x;RU(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gr(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cI=a.cI+1|0;f=a.jd;g=P(HC,1);h=new HC;h.eD=b;h.fm=c;i=MU(e,C(177),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BK(b,c+M(i[0])|0);break a;}k=BK((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BK(b,c);}i=g.data;h.qb=k;h.oQ=d;h.hn=e;i[0]=h;BA(f,g);N1(a,b,c,d,e);}
function N1(a,b,c,d,e){var f;f=FY(a,b)+c|0;if(!d){Zb(a.dD,f,M(e));UU(a.fp,f,M(e));}else{Wx(a.dD,f,M(e));Qa(a.fp,f,M(e));}}
function Yc(a,b){var c,d,e;c=MU(b.hn,C(177),(-1));if(b.oQ){AF5(a,b.eD,b.fm,c);Zb(a.dD,FY(a,b.eD)+b.fm|0,M(b.hn));UU(a.fp,FY(a,b.eD)+b.fm|0,M(b.hn));}else{c=c.data;d=AOZ();Ci(d.bU,b.eD,b.fm);e=c.length;if(e==1)Ci(d.bJ,b.eD,b.fm+M(c[0])|0);else Ci(d.bJ,(b.eD+e|0)-1|0,M(c[e-1|0]));AEL(a,d);Wx(a.dD,FY(a,b.eD)+b.fm|0,M(b.hn));Qa(a.fp,FY(a,b.eD)+b.fm|0,M(b.hn));}return b.qb;}
function ADg(a){return a.n7==a.cI?0:1;}
function Lh(a){a.n7=a.cI;}
function NW(a){var b,c,d;a.l$=BP(a.E.data.length+1|0);b=0;while(b<a.E.data.length){c=a.l$.data;d=b+1|0;c[d]=(c[b]+(Cg(a,b)).W|0)+1|0;b=d;}}
function W9(a,b){var c,d,e,f,g,h;c=a.l$;if(c===null){d=0;e=0;a:{while(true){c=a.E.data;f=c.length;if(e>=f)break;g=c[e].W;if(b<=(d+g|0)){h=D1(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=D1(f,0);}return h;}d=AMk(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=D1(d,b-(d<0?0:a.l$.data[d])|0);if(h.bx>=(Cg(a,h.bt)).W){h.bt=h.bt+1|0;h.bx=0;}return h;}
var HK=G(0);
function ES(a){return VP(a.uv(),a.t());}
function VP(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AH0(b,c,d));}
function AH0(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Br(BM(d,b[f]),47);f=f+1|0;}return BM(d,c);}
var JH=G(0);
function L_(){var a=this;B.call(a);a.iM=null;a.hJ=null;a.ix=null;}
function AIT(a,b){var c=new L_();AZH(c,a,b);return c;}
function A_3(a,b,c){var d=new L_();QJ(d,a,b,c);return d;}
function AN3(b){var c,d,e,f,g,h,i;c=new L_;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BC,0);else{f=P(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=F0(e[h]);h=h+1|0;}}}else f=P(BC,0);QJ(c,d,b,f);return c;}
function AZH(a,b,c){QJ(a,b,null,c);}
function QJ(a,b,c,d){a.iM=b;a.hJ=c;a.ix=d;}
function EE(a){var b;b=a.iM;return F0(b!==null?b.name:a.hJ.name);}
function AOy(a){return a.ix;}
function Wq(a,b,c){var d,e,f;d=ANh(c);e=new WA;e.t8=b;b=a.hJ;if(b!==null)b.text().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iM.getFile();f=new WB;f.Bd=e;f.Bc=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function WR(a,b,c){var d,e,f;d=ANh(c);e=new AFv;e.xb=b;b=a.hJ;if(b!==null)b.arrayBuffer().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iM.getFile();f=new AFu;f.uG=e;f.uF=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function ANh(b){var c;c=new T1;c.vg=b;return c;}
function Od(a){var b,c,d;if(a.hJ===null)b=VP(a.ix,EE(a));else{b=H5(BF(a));c=a.ix;d=EE(a);b=BM(A7q(b),C(29));AH0(c,d,b);b=K(b);}return b;}
var J$=G(0);
function OP(){var a=this;B.call(a);a.iJ=null;a.f6=null;a.kT=null;}
var A_f=null;function A9h(a,b){var c=new OP();AGr(c,a,b);return c;}
function A7n(a,b,c){var d=new OP();ALj(d,a,b,c);return d;}
function AGr(a,b,c){a.iJ=b;if(c.length)a.f6=ABX(c);else{a.f6=P(BC,0);a.kT=P(BC,0);}}
function ALj(a,b,c,d){a.iJ=b;a.f6=c;a.kT=d;}
function ABX(b){var c,d,e,f;if(!b.length)c=P(BC,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BC,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=F0(b[e]);e=e+1|0;}}}return c;}
function Ia(a,b){var c,d;c=new AEl;d=a.iJ.values();c.nT=a;c.zN=d;c.lA=b;AC6(c);}
function AAb(a){var b,c,d,e;b=a.kT;if(b===null){b=a.f6;c=b.data;d=JV(a);e=c.length;b=CT(b,e+1|0);b.data[e]=d;b=b;a.kT=b;}return b;}
function JV(a){return F0(a.iJ.name);}
function A6w(a){return a.f6;}
function Jk(a){return VP(a.f6,JV(a));}
function Qz(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AGh(){A_f=new V8;}
var AEC=G(0);
function AL9(){B.call(this);this.je=null;}
function A7_(a){var b=new AL9();A3e(b,a);return b;}
function A3e(a,b){a.je=b;}
function Zq(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.je));}
function E6(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.je));}
function CL(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.je));}
function AZ1(a){var b,c;b=a.je.byteLength;c=new J;L(c);H(V(H(c,C(225)),b),C(226));return K(c);}
function ABv(){B.call(this);this.wO=null;}
function D_(a,b){ABm(a.wO,b);return 1;}
function HI(){var a=this;B.call(a);a.Q=0;a.bg=0;}
function Ci(a,b,c){a.Q=b;a.bg=c;}
function ADL(a,b){a.Q=b.Q;a.bg=b.bg;}
function S0(a,b){var c;c=BQ(a.Q,b.Q);if(c)return c;return BQ(a.bg,b.bg);}
function Ou(){var a=this;B.call(a);a.qf=null;a.pl=null;}
function MK(a){return a.qf.bt;}
function Ls(a){return a.qf.bx;}
function DP(){var a=this;B.call(a);a.s=null;a.W=0;a.gU=null;a.fi=null;a.eR=null;a.iL=null;a.hB=0;a.jP=0;a.j$=0;}
var A_4=0;var A_5=0;var A_W=0;function Zc(a){var b=new DP();AMC(b,a);return b;}
function Ej(a){var b=new DP();AAT(b,a);return b;}
function AMC(a,b){var c;c=P(CB,1);c.data[0]=ALb(b);AAT(a,c);}
function AAT(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].x)|0;f=f+1|0;}a.W=d;Fg(a);}
function J1(a){return a.s.data.length;}
function Ku(a,b){return a.s.data[b];}
function Hd(a,b){var c;c=KT(a,b);return c<=0?0:a.eR.data[c-1|0];}
function KT(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eR!==null&&!a.j$)){WO(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+M(a.s.data[d].x)|0;a.eR.data[d]=e;d=d+1|0;}a.j$=0;}d=ADd(a.eR,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function O4(a,b){var c;c=a.s.data;if(!c.length)return null;return c[KT(a,b)];}
function Ie(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.W){a.s=P(CB,0);Fg(a);a.W=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].x);i=M(a.s.data[f].x);j=BQ(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==M(k.x)?1:0){g=a.s;a.s=ABe(g,e,P(CB,g.data.length-1|0));a.W=a.W-d|0;Fg(a);return;}a.s.data[e]=Ep(FN(Cz(k.x,0,b),DD(k.x,c)),k.b8,k.bH);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b
!=M(l.x))a.s.data[e]=Ep(Cz(l.x,0,b),l.b8,l.bH);e=e+1|0;}if(c==M(m.x))f=f+1|0;else if(c)a.s.data[f]=Ep(DD(m.x,c),m.b8,m.bH);g=a.s;a.s=AHy(g,e,f,P(CB,(g.data.length-f|0)+e|0));}a.W=a.W-d|0;Fg(a);}
function Jo(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DP,[Ej(P(CB,0)),a]);if(b>=a.W)return I(DP,[a,Ej(P(CB,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].x);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DP,[Ej(L8(c,0,P(CB,d))),Ej(L8(c,d,P(CB,f-d|0)))]);h=e[d];e=L8(c,0,P(CB,d+1|0));i=e.data;j=L8(c,d,P(CB,f-d|0));c=j.data;i[d]=Ep(Cz(h.x,0,b),h.b8,h.bH);c[0]=Ep(DD(h.x,b),h.b8,h.bH);return I(DP,[Ej(e),Ej(j)]);}
function ABK(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=M(f[d].x);if(b<=g)break;b=b-g|0;d=e;}}Ne(a,d,b,c);}
function Ne(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(GT(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=P(CB,1);h.data[0]=ALb(d);a.s=h;}else if(!b&&!c){h=P(CB,g+1|0);f=h.data;Db(e,0,h,1,g);f[0]=ALb(d);a.s=h;}else{i=f[b];if(c<=0)j=Ep(FN(d,i.x),i.b8,i.bH);else if(c>=M(i.x))j=Ep(FN(i.x,d),i.b8,i.bH);else{k=M(d);l=k+c|0;m=M(i.x)-c|0;e=B6(M(i.x)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.x,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.x,g+c|0);g=g+1|0;}j=Ep(GI(e),i.b8,i.bH);}f[b]=j;}a.W=a.W
+M(d)|0;Fg(a);}
function Qc(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MO(f)){if(Q(f.x,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Oa(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gU;if(!(e!==null&&e.data.length>=d)){a.gU=AN1(d);a.fi=BP(d);a.hB=1;}WO(a);if(!a.hB)A_5=A_5+1|0;else{f=0;g=0.0;A_4=A_4+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+M(j.x)|0;a.eR.data[h]=f;Cr(b,i[Ld(j)]);g=g+Ez(b,j.x);a.gU.data[h]=g;a.fi.data[h]=g+0.5|0;h=h+1|0;}a.W=f;a.hB=0;a.j$=0;}}
function WO(a){var b;b=a.eR;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eR=BP(a.s.data.length);a.j$=1;}}
function Uy(a){a.hB=1;a.iL=null;}
function Fg(a){Uy(a);a.jP=1;a.j$=1;}
function ABF(a,b,c,d){var e,f,g,h,i,j,k;if(a.iL===null)a.iL=P($rt_arraycls($rt_intcls()),a.s.data.length);e=a.iL.data[d];if(e===null){e=c.data;f=a.s.data[d];Cr(b,e[Ld(f)]);f=f.x;e=BP(M(f)-1|0);c=GU(f);g=!d?0.0:a.gU.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;Pq(f,c,0,k);h[i]=g+Ez(b,f)+0.5|0;i=k;}a.iL.data[d]=e;}return e;}
function Ho(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.hB&&a.fi!==null))Oa(a,c,d);if(b>=a.W)return a.fi.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+M(g[f].x)|0;i=BQ(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.fi.data[f];}return (ABF(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FZ(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.fi.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hz(a,b){var c;if(b>=a.W)return b+1|0;c=KT(a,b);return a.eR.data[c];}
function F6(a){var b,c,d,e;b=new J;Gd(b,a.W);c=a.s.data;d=c.length;e=0;while(e<d){BM(b,c[e].x);e=e+1|0;}return K(b);}
function A3Z(a){var b,c,d,e;b=a.s.data;c=b.length;if(c==1)d=AHs(b[0]);else{d=new J;L(d);BM(d,C(37));e=0;while(e<c){if(e>0)BM(d,C(38));H(d,b[e]);e=e+1|0;}BM(d,C(39));d=K(d);}return d;}
function AHx(){A_W=0;}
function ZO(){var a=this;B.call(a);a.f3=null;a.fx=null;}
function AZP(a,b){var c=new ZO();A02(c,a,b);return c;}
function A02(a,b,c){a.f3=b;a.fx=c;}
function UU(a,b,c){var d;d=a.f3;if(d===null)return;AAN(a,d,b,c);}
function Qa(a,b,c){var d;d=a.f3;if(d===null)return;ADj(a,d,b,c);}
function AAN(a,b,c,d){var e,f,g,h;e=b.fk.ck();while(e.cZ()){Xa(a,e.cm(),c,d);}e=b.f5.ck();while(e.cZ()){f=e.cm();g=new Uv;g.Ag=a;E9(a,g,f,c,d);}h=b.ib.ck();while(h.cZ()){e=h.cm();Xa(a,e.lX,c,d);f=new Uw;f.yj=a;E9(a,f,e.lm,c,d);}b=b.c7.ck();while(b.cZ()){AAN(a,b.cm(),c,d);}}
function Xa(a,b,c,d){Lp(a,b.es,c,d);}
function E9(a,b,c,d,e){var f,g;a:{if(c instanceof H_){f=c.fX;g=new Xm;g.r3=a;g.r1=b;g.r0=d;g.r2=e;FM(f,g);}else{if(!(c instanceof KQ)){if(!(c instanceof JX))break a;f=c;E9(a,b,f.iv,d,e);E9(a,b,f.h2,d,e);return;}g=c.iG;f=new Xn;f.Dx=a;f.Dw=b;f.Dv=d;f.Du=e;FM(g,f);}}if(c!==null){c=c.eY;if(c!==null)b.mq(c,C5(d),C5(e));}}
function Lp(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e+d|0;}
function ADj(a,b,c,d){var e,f,g,h;e=b.fk.ck();while(e.cZ()){Kt(a,(e.cm()).es,c,d);}e=b.f5.ck();while(e.cZ()){f=e.cm();g=new Tu;g.wk=a;E9(a,g,f,c,d);}h=b.ib.ck();while(h.cZ()){e=h.cm();Kt(a,e.lX.es,c,d);f=new Tw;f.BY=a;E9(a,f,e.lm,c,d);}b.fk.qn(new Tt);b.f5.qn(new Ts);b=b.c7.ck();while(b.cZ()){ADj(a,b.cm(),c,d);}}
function Kt(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e-d|0;}
function LY(){var a=this;Er.call(a);a.dr=0;a.ci=null;a.dh=0;a.Dy=0.0;a.nV=0;}
function Ks(){var a=new LY();RM(a);return a;}
function A1c(a,b){return P(Im,b);}
function RM(a){var b;b=AJD(16);a.dr=0;a.ci=P(Im,b);a.Dy=0.75;UY(a);}
function AJD(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fb(a){var b;if(a.dr>0){a.dr=0;b=a.ci;AGT(b,0,b.data.length,null);a.dh=a.dh+1|0;}}
function UY(a){a.nV=a.ci.data.length*a.Dy|0;}
function HX(a,b){return ACJ(a,b)===null?0:1;}
function OM(a){var b;b=new UZ;b.Ax=a;return b;}
function CC(a,b){var c;c=ACJ(a,b);if(c===null)return null;return c.c2;}
function ACJ(a,b){var c,d;if(b===null)c=Tn(a);else{d=b.qK();c=Sc(a,b,d&(a.ci.data.length-1|0),d);}return c;}
function Sc(a,b,c,d){var e;e=a.ci.data[c];while(e!==null&&!(e.mB==d&&AKt(b,e.cS))){e=e.df;}return e;}
function Tn(a){var b;b=a.ci.data[0];while(b!==null&&b.cS!==null){b=b.df;}return b;}
function NR(a){var b;if(a.pJ===null){b=new Rq;b.jS=a;a.pJ=b;}return a.pJ;}
function D6(a,b,c){var d,e,f,g;if(b===null){d=Tn(a);if(d===null){a.dh=a.dh+1|0;d=US(a,null,0,0);e=a.dr+1|0;a.dr=e;if(e>a.nV)ADX(a);}}else{e=b.qK();f=e&(a.ci.data.length-1|0);d=Sc(a,b,f,e);if(d===null){a.dh=a.dh+1|0;d=US(a,b,f,e);e=a.dr+1|0;a.dr=e;if(e>a.nV)ADX(a);}}g=d.c2;d.c2=c;return g;}
function US(a,b,c,d){var e,f;e=new Im;Xi(e,b,null);e.mB=d;f=a.ci.data;e.df=f[c];f[c]=e;return e;}
function ALl(a,b){var c,d,e,f,g,h,i,j;c=AJD(!b?1:b<<1);d=P(Im,c);e=d.data;f=0;b=c-1|0;while(true){g=a.ci.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.mB&b;j=h.df;h.df=e[i];e[i]=h;h=j;}f=f+1|0;}a.ci=d;UY(a);}
function ADX(a){ALl(a,a.ci.data.length);}
function L$(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.ci.data[0];while(e!==null){if(e.cS===null)break a;b=e.df;d=e;e=b;}}else{f=Kz(b);g=a.ci.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.mB==f&&AKt(b,e.cS))){h=e.df;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.df=e.df;else a.ci.data[c]=e.df;a.dh=a.dh+1|0;a.dr=a.dr-1|0;}if(e===null)return null;return e.c2;}
function AKt(b,c){return b!==c&&!b.bR(c)?0:1;}
var V8=G();
function A13(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function CB(){var a=this;B.call(a);a.x=null;a.b8=0;a.bH=0;}
function ALb(a){var b=new CB();A0u(b,a);return b;}
function Ep(a,b,c){var d=new CB();AC4(d,a,b,c);return d;}
function A0u(a,b){AC4(a,b,0,0);}
function AC4(a,b,c,d){a.x=b;a.b8=c;a.bH=d;}
function Ld(a){return a.bH&3;}
function JY(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MO(a){return M(a.x);}
function AHs(a){var b,c,d,e;b=A7q(a.x);c=a.bH;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BM(b,C(227));if(d)BM(b,C(228));if(e)BM(b,C(229));return K(b);}
var Or=G(LY);
function ABs(){var a=this;B.call(a);a.dA=null;a.ft=0;}
var A_6=null;function AIU(a){var b=new ABs();AJk(b,a);return b;}
function AJk(a,b){a.ft=0;a.dA=b;}
function RC(a,b){var c;if(b.fa)return b;b=B9(b.bv);while(true){if(!Cb(b))return null;c=RC(a,Cc(b));if(c!==null)break;}return c;}
function YK(a,b,c){var d,e,f,g;d=Oi(a,a.dA,b);if(d===null)return;b=c.cA;e=b===null?A_7:b.c7;f=c.bv;c=a.dA;if(d===c){if(c.cA===null)c.cA=b;b=new ABJ;b.Ad=a;FM(f,b);b=new ABI;b.wi=a;e.fI(b);b=a.dA;b.bv=f;b.cA.c7=e;b.fa=0;return;}if(!EU(f)){c=d.hW;if(c!==null){b=new Y$;b.r7=c;FM(f,b);g=LL(c.bv,d);if(g==(-1))GY(c.bv,f);else{E2(c.bv,g);AKP(c.bv,g,f);}}}b=d.cA;if(b!==null){b=b.hR;c=new TC;c.tL=b;e.fI(c);g=LL(b.c7,d.cA);if(g==(-1))GY(b.c7,e);else{b.c7.mT(g);b.c7.vJ(g,e);}}}
function Oi(a,b,c){var d,e,f,g;d=b.b6;if(d.b$==c.b$&&d.b7==c.b7?1:0){d=B9(b.bv);while(Cb(d)){e=Oi(a,Cc(d),c);if(e!==null)return e;}return b;}b=B9(b.bv);while(true){if(!Cb(b))return null;d=Cc(b);f=c.b$;g=c.b7;e=d.b6;if(e.b$<=f&&g<=e.b7?1:0){e=Oi(a,d,c);if(e!==null)break;}}return e;}
function ACW(a,b,c){BA(c,b.b6);b=B9(b.bv);while(Cb(b)){ACW(a,Cc(b),c);}}
function Zb(a,b,c){a.ft=0;L1(a,a.dA,b,c);}
function L1(a,b,c,d){var e;if(Dj(b)<c)return;a:{if(Ds(b)>c){Mz(b,d);HS(b,d);b=B9(b.bv);while(Cb(b)){L1(a,Cc(b),c,d);}}else{if(!Nr(b,c)){if(a.ft)break a;if(Dj(b)!=c)break a;}HS(b,d);if(Ds(b)==c&&a.ft)Mz(b,d);e=B9(b.bv);while(Cb(e)){L1(a,Cc(e),c,d);}if(!a.ft){b.fa=1;a.ft=1;}}}}
function Wx(a,b,c){a.ft=0;Nv(a,a.dA,b,c);}
function Nv(a,b,c,d){var e,f,g,h,i,j;if(Dj(b)<c)return;e=Ds(b);f=c+d|0;if(e>f){e= -d|0;Mz(b,e);HS(b,e);g=B9(b.bv);while(Cb(g)){Nv(a,Cc(g),c,d);}b.bv=X0(a,b.bv);}else{h=b.b6;if(c<=h.b$&&h.b7<=f?1:0){if(b===a.dA){MJ(b,0);Nu(b,0);h=b.cA;if(h!==null)h.c7.jO();}else{MJ(b,(-1));Nu(b,(-1));h=b.cA;if(h!==null){AFO(h);b.cA=null;}}I3(b.bv);}else{e=Nr(b,c);f=Nr(b,f);if(e&&f)HS(b, -d|0);else if(e)Nu(b,c);else{if(!f)return;MJ(b,c);HS(b, -d|0);}h=B9(b.bv);while(Cb(h)){Nv(a,Cc(h),c,d);}h=Mw(b.bv);g=Zu(0);i=new S6;j=new AD8;j.G7
=i;j.la=g;while(OL(h,j)){}if(!j.la.o3&&!a.ft)b.fa=1;else a.ft=1;b.bv=X0(a,b.bv);}}}
function X0(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BO();d=null;e=A_6;f=b.cx;g=b.p;if(e===null)e=A$L;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}LE(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.ca=b.ca+1|0;b=B9(b);while(Cb(b)){m=Cc(b);if(Ds(m)==Dj(m))continue;if(!m.fa){if(d!==null){BA(c,d);d=null;}BA(c,m);}else if(d===null)d=m;else{n=AWH(Lt(Be(Ds(d),Ds(m)),Bd(Dj(d),Dj(m)),d.b6.gi),d.hW,d.cA);n.fa=1;d=m.cA;if(d===null)d=n;else{AFO(d);d=n;}}}if(d!==null)BA(c,d);return c;}
function AFb(a,b,c,d){var e,f,g,h,i,j;if((Dj(c)-Ds(c)|0)<43)e=Cz(d,Ds(c),Dj(c));else{e=Cz(d,Ds(c),Ds(c)+20|0);f=Cz(d,Dj(c)-20|0,Dj(c));g=new J;L(g);H(H(H(g,e),C(170)),f);e=K(g);}e=AD5(e,C(177),C(230));f=Bj();g=BT(c);h=new J;L(h);i=V(h,b);Br(i,32);g=H(i,g);Br(g,9);H(g,e);Bf(f,K(h));c=B9(c.bv);j=b+1|0;while(Cb(c)){AFb(a,j,Cc(c),d);}}
function AJt(){A_6=new Wl;}
function ANz(){var a=this;B.call(a);a.b$=0;a.b7=0;a.gi=0;}
function Lt(a,b,c){var d=new ANz();A0q(d,a,b,c);return d;}
function A0q(a,b,c,d){a.b$=b;a.b7=c;a.gi=d;}
function AVQ(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.b$==c.b$&&a.b7==c.b7&&a.gi==c.gi?1:0;}return 0;}
function AKp(a){var b,c,d,e;b=a.b$;c=a.b7;d=a.gi;e=new J;L(e);Br(e,40);Br(V(H(V(H(V(e,b),C(38)),c),C(38)),d),41);return K(e);}
function AZA(a,b){var c;b=b;c=BQ(a.b$,b.b$);if(!c)c=BQ(b.b7,a.b7);return c;}
var Wl=G();
function ASS(a,b,c){var d;b=b;c=c;b=b.b6;c=c.b6;d=BQ(b.b$,c.b$);if(!d)d=BQ(c.b7,b.b7);return d;}
function AAV(){var a=this;B.call(a);a.b6=null;a.hW=null;a.bv=null;a.cA=null;a.fa=0;}
function AWH(a,b,c){var d=new AAV();AIS(d,a,b,c);return d;}
function AIS(a,b,c,d){a.fa=0;a.b6=b;a.hW=c;a.bv=BO();a.cA=d;}
function AJN(b){return AA5(b,null);}
function AA5(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bc(b);e=Bc(b);f=Bc(b);g=Bc(b);h=Bc(b);i=Lt(d,e,f);j=new AAV;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AIS(j,i,null,l);m=0;while(m<g){l=AA5(b,c);l.hW=j;BA(j.bv,l);m=m+1|0;}return j;}
function AGy(b,c,d){var e,f,g,h,i;a:{e=b.b6;f=b.bv;g=e.b$;h=e.b7;i=e.gi;Bu(c,g);Hu(c,h,i);Bu(c,f.p);if(d!==null){e=b.cA;if(e!==null&&AEz(d,e)){g=(O$(d,b.cA)).bs;break a;}}g=(-1);}Bu(c,g);b=B9(f);while(Cb(b)){AGy(Cc(b),c,d);}}
function Ds(a){return a.b6.b$;}
function Dj(a){return a.b6.b7;}
function MJ(a,b){a.b6.b$=b;}
function Nu(a,b){a.b6.b7=b;}
function Mz(a,b){var c;c=a.b6;c.b$=c.b$+b|0;}
function HS(a,b){var c;c=a.b6;c.b7=c.b7+b|0;}
function Nr(a,b){return Ds(a)<=b&&b<Dj(a)?1:0;}
function AOv(a){var b,c,d;b=AKp(a.b6);c=a.fa;d=new J;L(d);J7(H(H(d,b),C(38)),c);return K(d);}
function APg(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.b6,c.b6)&&BR(a.bv,c.bv)?1:0;}return 0;}
var JZ=G(0);
function Hp(){var a=this;B.call(a);a.cS=null;a.c2=null;}
function A_8(a,b){var c=new Hp();Xi(c,a,b);return c;}
function Xi(a,b,c){a.cS=b;a.c2=c;}
function AZ3(a,b){var c,d;if(a===b)return 1;if(!E3(b,JZ))return 0;a:{b:{c:{d:{c=b;b=a.cS;if(b!==null){if(!b.bR(c.cS))break c;else break d;}if(c.cS!==null)break c;}b=a.c2;if(b!==null){if(!b.bR(c.c2))break c;else break b;}if(c.c2===null)break b;}d=0;break a;}d=1;}return d;}
function APX(a){var b,c,d;b=a.cS;c=a.c2;d=new J;L(d);b=H(d,b);Br(b,61);H(b,c);return K(d);}
function Im(){var a=this;Hp.call(a);a.mB=0;a.df=null;}
function On(){var a=this;L6.call(a);a.zD=null;a.r4=null;}
function AGC(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.zD;e=0;f=0;g=a.r4;a:{while(true){if((e+32|0)>f&&El(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Cl(b)+j|0,i.length);Qd(b,d,j,f-j|0);e=0;}if(!El(c)){k=!El(b)&&e>=f?A_u:A_t;break a;}i=g.data;j=Be(Cl(c),i.length);l=new YG;l.re=b;l.z3=c;k=AHU(a,d,e,f,g,0,j,l);e=l.wp;j=l.xj;if(k===null){if(!El(b)&&e>=f)k=A_u;else if(!El(c)&&e>=f)k=A_t;}AFd(c,g,0,j);if(k!==null)break;}}FO(b,b.bf-(f-e|0)|0);return k;}
var Rz=G(On);
function AHU(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(OS(h,2))break a;i=A_t;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Pg(l)){if((f+3|0)>g){j=j+(-1)|0;if(OS(h,3))break a;i=A_t;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!C1(l)){i=EK(1);break a;}if
(j>=d){if(El(h.re))break a;i=A_u;break a;}c=j+1|0;m=k[j];if(!Dp(m)){j=c+(-2)|0;i=EK(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(OS(h,4))break a;i=A_t;break a;}k=e.data;o=E5(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.wp=j;h.xj=f;return i;}
var JG=G(EM);
var PL=G();
function AXr(a,b){return b.text();}
function PN(){var a=this;B.call(a);a.uY=null;a.uX=null;}
function AWO(a,b){var c,d,e,f;c=a.uY;d=a.uX;e=b.length;f=new Qh;f.Cd=b;c.g(AQC((AMU(e,f)).kP,ADU(d)));}
var PM=G();
function AYT(a,b){AJC(b);}
function Ju(){var a=this;B.call(a);a.bw=null;a.GS=null;a.cd=null;a.kj=null;a.lK=null;a.d3=null;a.f1=null;a.C8=null;a.qo=null;a.py=null;}
function A_9(a,b,c,d,e,f){var g=new Ju();Mk(g,a,b,c,d,e,f);return g;}
function I_(){var b,c,d,e,f,g,h,i,j;b=new Ju;c=new KM;d=new HO;F3();Lw(d,A_$);M9(c,d,B0(A_R),B0(A__),B0(Baa),B0(A_R),B0(Bab),B0(Bac),B0(Bad),B0(Bae),B0(Baf),B0(Bag));e=ALP(S(C(231)));f=(ALV()).data;g=f.length;h=P(K1,g);i=h.data;j=0;while(j<g){i[j]=f[j].oG;j=j+1|0;}Mk(b,c,e,h,AMB(S(C(232)),S(C(233)),S(C(234)),S(C(235))),Fy(),AGi(S(C(236)),S(C(237)),S(C(238)),S(C(239))));return b;}
function GD(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new Ju;c=new KM;d=new HO;AQK();Lw(d,Bah);M9(c,d,B0(Bai),B0(Baj),B0(Bak),B0(Bai),B0(Bal),B0(Bam),B0(Ban),B0(Bao),B0(Bap),B0(Baq));e=ALP(S(C(240)));f=(AHG()).data;g=f.length;h=P(K1,g);i=h.data;j=0;while(j<g){i[j]=f[j].lH;j=j+1|0;}k=AMB(S(C(241)),S(C(242)),S(C(243)),S(C(244)));l=new Jw;m=new JE;AYs();n=Bar;Po(m,n,Bas,Bat,Bau,Bav,n);Mv(l,m,AJa(),AJI(S(C(245)),S(C(246)),S(C(247))),AJa(),AJ8(1,0.17499999701976776),Baw,Bax);Mk(b,c,e,h,k,l,AGi(S(C(236)),S(C(237)),S(C(238)),
S(C(248))));return b;}
function Mk(a,b,c,d,e,f,g){var h;h=d.data;a.f1=DC(C(169),17.0);a.C8=DC(C(158),15.0);a.qo=DC(C(169),15.0);a.py=DC(C(14),15.0);a.bw=b;a.GS=c;a.kj=d;a.lK=e;if(h.length>=15){a.cd=f;a.d3=g;return;}b=new BU;X(b);N(b);}
function Yg(a,b){if(b===null)b=a.bw.eC;return b;}
function K7(){var a=this;Cq.call(a);a.ei=null;a.oF=null;}
function A8M(a){var b=new K7();AJW(b,a);return b;}
function AJW(a,b){var c,d,e,f;Hf(a,b,0);c=I8(a.v);a.oF=c;d=G5(c);a.ei=d;NB(a.q,d);c=b.n.bB;d=new ZV;d.sB=a;Z(c,d);c=b.n.bB;d=new GS;e=new ZT;e.CX=a;Hc(d,b,e);Z(c,d);c=a.ei;d=b.n;f=new AD4;f.xE=c;Z(d.b2,c);Z(d.fT,f);b=b.n.cH;c=new ZU;c.zc=a;Z(b,c);J0(a);}
function ALD(a,b){var c,d;c=a.ei;d=new ADq;d.wd=a;d.we=b;Ga(c,b,d);}
function A1B(a,b){if(G2(a.v,b))My(a.ei);}
function A5z(a,b){var c;c=QS(a,b);return Mc(a.ei,b)|c;}
function ARr(a){H1(a);IS(a.ei);Kp(a.v);}
function A6Y(a){return EQ(0);}
function ANW(a,b,c){var d;I$(a,b,c);d=a.ei;M6(d,d.i,b,c);}
function A0p(a,b){BG(b);Gb(a.oF,b);E_(a.ei,b);}
function ALo(a,b){if(b.bb!=121)return 0;return 1;}
function AGE(a,b){var c,d,e;if(DB(a.q,a.ei)){c=a.oF;b=b.k;d=a.ei;e=new AB4;e.BC=a;Jd(c,b,d,a,d,a,e);}return 1;}
function AKj(){var a=this;CA.call(a);a.z7=null;a.pK=null;a.kM=null;a.eF=null;a.mp=null;a.hY=null;a.eZ=null;a.j7=null;a.ra=null;a.jv=null;a.qR=null;a.qS=null;a.p$=null;a.Ao=null;a.Ef=null;a.tX=0;}
function A8X(a){var b=new AKj();A2A(b,a);return b;}
function A2A(a,b){var c,d,e,f;Ex(a,b);c=(I_()).bw.eC;a.z7=c;a.pK=ANu(c);a.kM=new Bh;a.eF=Lq();a.mp=Lq();a.hY=Uj(0,0,3,3);a.eZ=IF(0,0,300,300);a.j7=A1i();d=P(BC,4);e=d.data;e[0]=C(182);e[1]=C(183);e[2]=C(201);e[3]=C(200);a.ra=d;a.jv=P(KW,e.length);c=b.n.b2;f=new U6;f.fW=a;Z(c,f);c=b.n.bB;f=new AAm;f.Dz=a;Z(c,f);c=b.n.pc;f=new AAl;f.tf=a;Z(c,f);c=b.n.hj;f=new AAk;f.E2=a;Z(c,f);c=b.n.mV;f=new AAj;f.FG=a;Z(c,f);c=b.n.cH;f=new AAi;f.F9=a;Z(c,f);b=b.n.fT;c=new AAh;c.Ck=a;Z(b,c);a.qR=AEr(a,1);a.qS=AEr(a,0);S8(a,a.eF,
a.qR);S8(a,a.mp,a.qS);a.p$=AFM(a,0);a.Ao=AFM(a,1);F_(a.eZ,a.p$);Gj(a.eZ);H4(a.eZ,DF(169,183,198));FB(a.eZ,a.z7);Cv(a.eF.bd,1.0,1.0,1.0,1.0);FB(a.eF,a.eZ.br);BL(a.hY.br,a.pK);}
function S8(a,b,c){F_(b,c);Gj(b);}
function TB(a,b){I2(D0(),0.5+D0()*0.5,0.5+D0()*0.5,1.0,b.bd);}
function AEr(a,b){var c,d;c=Eg(a.C.T,200,100,b);HY(c,C(249),11.0);B1(c,C(250),0.0,20.0);KF(c,255,0,0);B1(c,C(250),0.25,40.0);KF(c,0,255,0);B1(c,C(250),0.5,60.0);KF(c,0,0,255);B1(c,C(250),0.75,80.0);d=C4(a.C.T);CU(d,c);EP(c);return d;}
function AFM(a,b){var c,d,e,f;c=Eg(a.C.T,255,100,b);HY(c,C(169),10.0);d=Bj();e=$rt_str(c.dx.font);f=new J;L(f);H(H(f,C(251)),e);Bf(d,K(f));Ez(c,C(252));B1(c,C(252),0.0,20.0);B1(c,C(252),0.25,40.0);B1(c,C(252),0.5,60.0);B1(c,C(252),0.75,80.0);e=C4(a.C.T);CU(e,c);EP(c);return e;}
function AOh(a,b){var c;a.tX=a.tX+1|0;c=b/5.0;I2(c-(c|0),1.0,1.0,1.0,a.hY.bd);return ACO(a.j7,b);}
function AQc(a){var b,c,d,e,f,g,h,i;b=a.C.T;EY(b,a.pK);c=a.jv.data;d=c.length;e=0;while(e<d){ABk(c[e],b,0,0);e=e+1|0;}f=a.eZ;g=f.w;g.b=(a.kM.b-f.u.b|0)-5|0;g.a=0;Ca(b,0);h=0;while(h<7){f=a.eZ;EW(f,b,a.p$,Bb(h,10+((10*f.u.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eZ;f.w.b=(a.kM.b-(f.u.b*2|0)|0)-10|0;h=0;while(h<7){g=a.Ao;f=a.eZ;f.w.a=Bb(h,10+((10*f.u.a|0)/15|0)|0)+5|0;T0(f,b,g,1);h=h+1|0;}T0(a.eF,b,a.qR,1);Ca(b,1);g=a.mp;f=a.qS;i=g.w;h=i.a;d=i.b;g=g.u;GX(b,b.lr);G9(b.lr,b.be,h,d,g,b.dq);OF(b.lr,b.be,f);Gn(b);Ca(b,0);f
=a.Ef;if(f!==null)Xd(a.hY,b,f,0,0,0.0);ADV(a.j7,b,new Bh);NC(b,C(253));}
function ASz(a,b,c){var d,e,f,g,h,i,j,k;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(254)),e);Bf(d,K(f));d=Bj();f=new J;L(f);Dg(H(f,C(255)),c);Bf(d,K(f));g=Ck(30.0,c);h=Ck(10.0,c);i=0;while(true){j=a.jv.data;if(i>=j.length)break;k=1+i|0;j[i]=Uj(Bb(h,k)+Bb(g,i)|0,g,g,g);TB(a,a.jv.data[i]);i=k;}Y(a.hY.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eF;Y(f.w,((b.a/2|0)-f.u.a|0)-10|0,50);Y(a.mp.w,(b.a/2|0)+10|0,50);Ct(a.kM,b);}
function Yn(a,b){var c,d,e,f,g;c=Bj();d=!b.km?C(256):C(257);e=b.eB;f=b.bb;g=b.Bm;b=new J;L(b);J7(H(V(H(H(H(b,d),e),C(258)),f),C(259)),g);Bf(c,K(b));return 0;}
function ACV(){var a=this;CA.call(a);a.Ga=null;a.lJ=null;a.jy=null;a.iB=null;a.dI=null;a.ej=null;a.nK=null;a.nx=null;a.j_=0;a.i_=null;a.i$=null;}
function Sd(a,b,c){F_(b,c);Gj(b);}
function AF4(a,b,c,d,e,f){var g,h;g=Eg(f,c,120,b);Cr(g,e);e=!b?C(260):C(261);h=new J;L(h);H(H(H(h,e),d),C(156));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C4(f);CU(h,g);EP(g);return h;}
function AT9(a,b){return 0;}
function AZq(a){var b,c,d,e,f,g,h,i;b=a.C.T;EY(b,a.lJ);Ca(b,0);c=a.jy;d=c.b;e=a.iB;f=d-e.b|0;g=c.a-e.a|0;Bv(b,0,0,e,a.dI.br);Bv(b,g,0,a.iB,a.ej.br);Bv(b,0,f,a.iB,a.dI.bd);Bv(b,g,f,a.iB,a.ej.bd);c=a.dI;e=c.w;h=e.b;i=((a.jy.b*3|0)/4|0)-(c.u.b/2|0)|0;I4(c,b,e.a,h,a.i_,0,1);c=a.dI;I4(c,b,c.w.a,i,a.i_,1,1);c=a.ej;I4(c,b,c.w.a,h,a.i$,0,0);e=a.ej;I4(e,b,e.w.a,i,a.i$,1,0);NC(b,C(253));}
function A0L(a,b,c){var d,e;Ct(a.jy,b);Y(a.iB,b.a/2|0,b.b/2|0);d=a.jy.b/4|0;e=a.dI;d=d-(e.u.b/2|0)|0;Y(e.w,(b.a/4|0)-(a.j_/2|0)|0,d);Y(a.ej.w,((b.a*3|0)/4|0)-(a.j_/2|0)|0,d);}
function YY(){var a=this;Cq.call(a);a.z2=null;a.fB=null;a.d1=null;a.pe=null;}
function AR3(a,b,c){var d;d=FC(a.q,a.pe);Kf(a.fB,d,a.q);Kf(a.d1,d,a.q);}
function SM(b){return JA(b,Wf());}
function JA(b,c){var d;d=Uh();O3(d,N4(b,KJ(c,25)),!b?null:JA(b-1|0,c));O3(d,N4(b,KJ(c,20)),!b?null:JA(b-1|0,c));O3(d,N4(b,KJ(c,15)),!b?null:JA(b-1|0,c));O3(d,N4(b,KJ(c,10)),!b?null:JA(b-1|0,c));return Jt(d);}
function N4(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(29)),c);c=K(d);}return c;}
function O3(b,c,d){if(d!==null)Iw(b,c,d);else{d=new WK;d.sY=c;EG(b,c,d);}}
function AQN(a,b,c){var d,e;I$(a,b,c);b=a.q.bV;d=ER(a.fB);e=ER(a.d1);NZ(a.fB,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);NZ(a.d1,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function A0j(a){var b,c,d,e,f,g,h,i;H1(a);b=a.C.T;Ca(b,1);c=a.z2;d=a.q;e=d.bV;Y(c.ow,e.a,Ck(2.0,d.ct));Y(c.oX,Ck(2.0,d.ct),e.b);F3();f=Baf;g=d.bP;h=e.b/2|0;i=c.ow;Bv(g,0,h-(i.b/2|0)|0,i,f);g=d.bP;h=e.a/2|0;c=c.oX;Bv(g,h-(c.a/2|0)|0,0,c,f);MR(a.fB,a.q);MR(a.d1,a.q);Kp(a.v);Ca(b,0);}
function ASB(a,b){var c,d;c=Ow(a.fB,b.k,a.q.dc);d=Ow(a.d1,b.k,a.q.dc);return !c&&!d?0:1;}
function AOY(a,b,c,d){var e,f;e=OU(a.fB,b.k,c,d);f=OU(a.d1,b.k,c,d);return !e&&!f?0:1;}
function ACk(){Cq.call(this);this.k$=null;}
function AP3(a,b,c){if(b===0.0)AAw(a);}
function AAw(a){var b,c,d,e,f,g,h,i;b=a.k$;if(b!==null){IW(a.v,b);Kx(b);}b=(I_()).cd;c=A99(a.q,new Wu);d=DC(C(158),14.0);e=AR1();f=0;while(f<300){g=Dq(f);h=new TR;h.CE=C(262);h.CB=g;h.CC=C(263);XA(e,C(262),g,C(263),h);f=f+1|0;}Yw(c,AEW(e));Xu(c,b,d);g=AGm(a.q);i=G_(c,a.q);JS(i,b.nA,b.pv);LO(g,i);Eu(g,b);CZ(g,C(147));a.k$=g;DY(a.v,g);Rv(a);}
function APa(a,b,c){I$(a,b,c);Rv(a);}
function Rv(a){var b,c,d;b=a.q.bV;EJ(a.k$,BK((b.a*2|0)/10|0,(b.b*4|0)/10|0),BK((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.k$;b=AJ7(c.Z.j);d=new J;L(d);H(H(d,C(264)),b);CZ(c,K(d));}
function Yj(){var a=this;If.call(a);a.mW=null;a.ir=null;a.gN=null;a.kO=null;a.sT=null;a.kJ=null;a.iE=null;a.h_=null;a.md=0;a.iq=0;}
function Qv(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.ir.p>0){d=D0();e=a.ir;f=d*(e.p-1|0)|0;e=E2(e,f);E2(a.gN,f);f=a.iq;g=e.u;a.iq=f-Bb(g.a,g.b)|0;Jy(a.mW,e.dS);}c=c+1|0;}}
function MH(a,b){var c,d,e,f,g,h,i,j;c=KU(a.q);Cr(c,a.kO);d=0;while(d<b){e=KJ(a.kJ,1+(D0()*19.0|0)|0);f=Lq();g=f.dS;h=a.mW;BG(c);i=new R8;i.vF=c;BL(g,K4(h,e,i));(WJ(D0(),1.0,1.0,f.br)).bD=0.5;h=f.w;g=f.dS;Y(h,g.bq|0,g.bu|0);h=f.u;g=f.dS;Y(h,g.bi|0,g.bD|0);BA(a.gN,e);BA(a.ir,f);j=a.iq;h=f.u;a.iq=j+Bb(h.a,h.b)|0;d=d+1|0;}a.h_=Np(a.mW);}
function A45(a){var b,c,d,e,f,g,h,i;H1(a);b=a.C.T;Ca(b,1);c=a.q.bP;if(a.gN.p){d=a.h_;d=Ib(c,d.a,d.b);Cr(d,a.kO);e=a.kO.eK;Bv(c,0,0,a.h_,a.sT);f=0;while(f<a.gN.p){g=BI(a.ir,f);h=BI(a.gN,f);g=g.dS;B1(d,h,g.bq,g.bu+e);f=f+1|0;}g=a.iE;if(!(g!==null&&BV(g)==a.h_.a&&CX(a.iE)==a.h_.b))a.iE=BY(a.iE,C4(c));CU(a.iE,d);EP(d);i=0;while(i<a.gN.p){d=BI(a.ir,i);H4(d,Cs(0));EW(d,c,a.iE,0,0);i=i+1|0;}}Ca(b,0);}
function AOa(a,b){var c,d;if(a.md){c=a.h_;d=Be(Bb(c.a,c.b),2211840);if(a.iq/d<=0.7)MH(a,Eh(a.kJ,5));else Qv(a,Eh(a.kJ,5));}return a.md;}
function TX(){var a=this;CA.call(a);a.e1=null;a.iu=null;a.jw=null;a.pB=null;a.fs=0;a.v6=0;a.sU=null;a.m$=0;a.yA=0;a.yY=null;a.BK=null;}
function ANU(a){var b,c;b=a.fs;c=new J;L(c);V(H(c,C(265)),b);$rt_globals.console.info($rt_ustr(K(c)));EY(a.e1,a.sU);KY(a.jw,a.fs,0,HV(a),5000,a.pB.a,20);Ca(a.e1,1);WS(a.jw,a.e1);Ca(a.e1,0);b=a.fs;c=new J;L(c);V(H(c,C(265)),b);$rt_globals.console.info($rt_ustr(K(c)));ADr(a.iu,a.fs/a.m$|0,a.e1);ACG(a.iu,a.fs,HV(a),a.BK,a.e1);}
function AX5(a,b,c){a.pB=b;Tr(a.iu,BK(0,0),50,HV(a),c);T7(a.iu,a.e1,0,HV(a));}
function V9(a){return 5000-HV(a)|0;}
function HV(a){return Be(a.v6,a.pB.b);}
function Dy(){var a=this;CA.call(a);a.qG=null;a.hq=null;a.rr=0.0;}
function Bay(a){var b=new Dy();Ih(b,a);return b;}
function Ih(a,b){Ex(a,b);a.qG=AK3(0,0,64);a.hq=new Bh;GJ(b.bI,GV(BF(a)));}
function ABM(a){EY(a.C.T,a.qG);}
function TS(a,b,c){Ct(a.hq,b);a.rr=c;}
var Sa=G(Dy);
var YF=G(Cq);
function HH(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.bI;f=new R7;f.EO=a;f.vm=b;g=P(B,1);h=g.data;i=BP(1);i.data[0]=b;h[0]=i;CG(e,f,C(266),g);d=d+1|0;}}
function AMV(b){var c;c=b.data;AKy(c[0],c[1],Zq(Jj(b,2)));}
function AKy(b,c,d){var e,f,g,h,i;d=d.data;e=Bj();b=BT(b);c=BT(c);f=new J;L(f);H(H(H(H(f,C(267)),b),C(268)),c);Bf(e,K(f));b=Bj();g=d.length;h=1;i=0;while(i<g){h=(31*h|0)+d[i]|0;i=i+1|0;}c=new J;L(c);V(H(V(H(c,C(269)),g),C(270)),h);Bf(b,K(c));}
function XX(){var a=this;Dy.call(a);a.fq=null;a.ha=null;a.ok=null;a.Cn=null;a.q6=null;}
function ARG(a,b){b=b/5.0;I2(b-(b|0),1.0,1.0,1.0,a.ha.bd);return 0;}
function AZ9(a){ABM(a);EW(a.fq,a.C.T,a.Cn,0,0);Xd(a.ha,a.C.T,a.ok,0,0,0.0);NC(a.C.T,C(253));}
function A6S(a,b,c){var d,e,f;TS(a,b,c);Y(a.ha.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.fq;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function TV(){var a=this;Dy.call(a);a.ht=null;a.rI=null;a.m7=null;a.k4=null;a.ko=null;}
function A7y(a){var b,c,d,e,f,g;ABM(a);b=a.C.T;c=a.k4;Mu(b,c.a,c.b,a.ko);b=a.ht;c=a.rI;d=a.hq;e=a.C.T;f=0;while(true){g=0;while(true){EW(b,e,c,g,f);g=g+BV(c)|0;if(g>=d.a)break;}f=f+CX(c)|0;if(f>=d.b)break;}Gz(a.C.T);}
function ARn(a,b,c){TS(a,b,c);Y(a.ko,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AB7(){var a=this;CA.call(a);a.e$=null;a.pm=null;a.hd=null;a.cr=null;a.fH=0;a.i6=null;a.f9=0;a.Fe=20;a.GV=11;a.FD=220;a.mK=null;a.Gl=5000;a.iP=0;a.hl=null;}
function AWR(a){var b,c,d,e,f,g,h;b=a.i6;c=a.f9;d=a.mK;KY(b,c,0,d.b,5000,d.a,20);Ca(a.e$,1);WS(a.i6,a.e$);if(a.cr===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.pm,Dq(e),0.0,c);}b=C4(a.e$);a.cr=b;CU(b,a.pm);}if(a.f9<=a.fH)while(true){f=a.fH;if(f<=a.f9)break;a.fH=f-20|0;b=a.hd;g=a.iP-1|0;a.iP=g;B1(b,Dq(g),0.0,20.0);Km(a.cr,a.hd,0,a.fH%220|0);E8(a.hd);}else while(a.fH<(a.f9-20|0)){b=a.hd;g=a.iP+1|0;a.iP=g;B1(b,Dq((g+11|0)-1|0),0.0,20.0);Km(a.cr,a.hd,0,a.fH%220|0);E8(a.hd);a.fH=a.fH+20|0;}b=IF(0,0,BV(a.cr),CX(a.cr));I6(b,
0,0,BV(a.cr),CX(a.cr));H4(b,a.hl.data[0]);FB(b,a.hl.data[1]);EW(b,a.e$,a.cr,400,0);g=a.f9%220|0;f=Be(CX(a.cr)-g|0,200);d=IF(0,0,BV(a.cr),f);I6(d,0,g,BV(a.cr),f);H4(d,a.hl.data[0]);FB(d,a.hl.data[1]);EW(d,a.e$,a.cr,0,0);h=IF(0,f,BV(a.cr),(CX(a.cr)-f|0)-20|0);I6(h,0,0,BV(a.cr),(CX(a.cr)-f|0)-20|0);H4(h,a.hl.data[1]);FB(h,a.hl.data[0]);EW(h,a.e$,a.cr,0,0);}
function A0l(a,b,c){Ct(a.mK,b);}
function A4L(a,b){return 0;}
function ABD(a){return 5000-a.mK.b|0;}
function KZ(){Dy.call(this);this.ex=0;}
function ABj(a){var b,c;b=a.C.bI;c=new VB;c.yV=a;SF(b,c,XZ(a));}
function Rt(a){var b,c,d,e;b=a.ex+1|0;a.ex=b;c=GV(F(KZ));d=new J;L(d);H(H(V(H(d,C(271)),b),C(29)),c);e=K(d);c=a.C.bI;d=new W_;d.y7=e;UL(c,e,d,XZ(a));}
function XZ(a){var b;b=new AAr;b.Dd=a;return b;}
function ASo(a,b,c,d){a:{switch(c){case 0:break;case 2:Rt(a);break a;default:break a;}ABj(a);}return 1;}
function TE(){var a=this;Dy.call(a);a.vA=null;a.gV=null;a.l7=null;a.p3=null;a.w3=null;}
function AXB(a){var b,c,d,e,f,g,h,i;if(a.l7===null){b=a.C.T;c=a.w3;d=IV(b,c.iC,Ck(c.hs,a.rr));Cr(b.cv,d);e=C6(Ez(b.cv,C(272)));f=Bj();g=d.pG;c=new J;L(c);Dg(H(c,C(273)),g);Bf(f,K(c));h=NY(d,1.1799999475479126);c=Bj();i=new J;L(i);V(H(V(H(i,C(274)),e),C(174)),h);Bf(c,K(i));c=Ib(b,e,h);a.p3=c;Cr(c,d);B1(a.p3,C(272),0.0,d.eK);b=C4(b);a.l7=b;CU(b,a.p3);F_(a.gV,a.l7);Gj(a.gV);b=a.gV.br;F3();BL(b,A_R);BL(a.gV.bd,Baz);}b=a.C.T;EY(b,a.vA);c=a.gV;i=c.w;f=a.hq;e=f.a;c=c.u;Y(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EW(a.gV,b,
a.l7,0,0);}
function Hx(){var a=this;CA.call(a);a.wv=null;a.cy=null;a.ev=null;a.dK=null;a.fO=null;a.e9=null;}
function Pu(a,b){var c,d;Ex(a,b);a.wv=Cs(20);a.cy=TA();a.ev=new Bh;a.dK=new Bh;a.fO=new Bh;a.e9=new Bh;c=b.n.bB;d=new AD3;d.E6=a;Z(c,d);Z(b.n.b2,a);b=a.cy.br;F3();BL(b,A_R);BL(a.cy.bd,Baz);}
function AHe(a){var b,c,d;b=a.C.T;EY(b,a.wv);c=a.cy;d=c.w;Bv(b,d.a,d.b,c.u,c.br);Ca(b,1);c=a.cy;d=c.w;AGa(b,d.a,d.b,c.u,a.ev,a.dK,a.fO,a.e9,c.bd);Ca(b,0);}
function A2x(a,b){return 0;}
var UA=G(Hx);
function A4w(a,b,c){var d,e,f;d=a.cy;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);Y(a.ev,0,0);Y(a.dK,Be(b.a,b.b),Be(b.a,b.b));b=a.fO;d=a.ev;Y(b,d.a,d.b+20|0);b=a.e9;d=a.dK;Y(b,d.a,d.b+40|0);}
function A5w(a,b){var c,d,e;Ct(a.ev,b.k);b=a.dK;c=a.cy;d=c.w;e=d.a;c=c.u;Y(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fO;c=a.ev;Y(b,c.a,c.b+20|0);b=a.e9;c=a.dK;Y(b,c.a,c.b+40|0);return 0;}
function Uz(){var a=this;Hx.call(a);a.gu=null;a.gW=null;}
function A6_(a,b){var c;c=a.dK;b=b.k;c.b=b.b-50|0;a.e9.b=b.b+100|0;return 1;}
function APZ(a){var b,c,d,e,f,g,h;b=Bd(a.ev.a,a.fO.a);c=Be(a.dK.a,a.e9.a);d=Be(a.ev.b,a.dK.b)-50|0;e=Bd(a.fO.b,a.e9.b)+50|0;HJ(a.cy,b,d,c-b|0,e-d|0);AHe(a);f=a.cy.w.a-10|0;AB9(a,a.C.T,10,f,a.ev,a.fO);g=a.cy;h=g.w.a+g.u.a|0;AB9(a,a.C.T,h,f,a.dK,a.e9);}
function AB9(a,b,c,d,e,f){var g;Y(a.gu,c,a.cy.w.b);Y(a.gW,d,e.b-a.cy.w.b|0);g=a.gu;Bv(b,g.a,g.b,a.gW,a.cy.br);Y(a.gu,c,e.b);Y(a.gW,d,f.b-e.b|0);e=a.gu;Bv(b,e.a,e.b,a.gW,a.cy.bd);Y(a.gu,c,f.b);e=a.gW;g=a.cy;Y(e,d,(g.w.b+g.u.b|0)-f.b|0);e=a.gu;Bv(b,e.a,e.b,a.gW,a.cy.br);}
function AOF(a,b,c){}
function Xr(){var a=this;Cq.call(a);a.DO=3;a.xw=null;a.kC=null;a.q5=0;}
function AR2(a,b,c){var d,e;if(b===0.0){DY(a.v,AAd(a));d=T$(a,0.5,0,C(275));e=a.q.bV;EJ(DY(a.v,d),BK(e.a/10|0,e.b/10|0),BK((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function AAd(a){var b,c,d,e,f,g;b=a.q5+1|0;a.q5=b;c=new J;L(c);V(H(c,C(276)),b);c=T$(a,1.0,1,K(c));d=a.q.bV;e=d.a/10|0;f=e+Eh(a.kC,e)|0;e=d.b/20|0;e=e+Eh(a.kC,e)|0;b=d.a;b=((b*7|0)/10|0)+Eh(a.kC,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+Eh(a.kC,g/10|0)|0;EJ(c,BK(f,e),BK(b,g));return c;}
function T$(a,b,c,d){var e,f,g;e=AGm(a.q);if(d===null)f=new AFy;else{f=new AFA;f.vN=e;f.vO=d;}g=new Q7;Mq(g);g.mQ=new B4;g.qt=new Bh;g.zz=f;g.sV=b;if(c){d=G_(g,a.q);JS(d,BaA,BaB);g=d;}LO(e,g);Eu(e,Fy());AB2(e,a.xw,3.0);d=new AFz;d.rp=a;d.rq=e;UC(e,d);return e;}
function EC(){Cq.call(this);this.jb=null;}
function A9n(a){var b=new EC();KL(b,a);return b;}
function KL(a,b){Gw(a,b);Z(a.q.dv,a);BL(a.dd,Cs(43));}
function AZQ(a){return AXV();}
function ASJ(a){return 1;}
function ADI(a,b){Eu(a.jb,b);}
function AKS(a,b){var c,d,e;c=a.q.bV;d=!a.p_()?0:AEq(b);e=c.b-d|0;EJ(b,BK(c.a/20|0,d+(e/20|0)|0),BK((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A5c(a,b,c){if(b===0.0){a.jb=A6U(a.q,a.jX());ADI(a,Fy());if(a.p_())CZ(a.jb,H5(BF(a)));DY(a.v,a.jb);a.ou(a.jb);}}
function Rp(){var a=this;EC.call(a);a.mL=null;a.gH=null;}
function APe(a){var b;b=G5(a.mL);a.gH=b;AMR(b);NB(a.q,a.gH);return a.gH;}
function AYt(a){return 0;}
function A7b(a,b){AKS(a,b);J0(a);}
function AVH(a,b){BG(b);Gb(a.mL,b);E_(a.gH,b);ADI(a,b.cd);}
function AU1(a,b){G2(a.v,b);}
function Yo(){B.call(this);this.xR=null;}
function A42(a,b){D_(a.xR,null);return 0;}
function AA2(){var a=this;EC.call(a);a.pN=null;a.mP=null;}
function ARs(a){var b,c,d,e,f,g;b=ANa(a.q);a.mP=b;O0(b,a.pN);b=Iy(C(277),1);c=new S$;c.vk=a;b.cC=c;DX(b);c=Iy(C(278),1);d=new S9;d.y3=a;c.cC=d;DX(c);e=Iy(C(277),1);d=new Ta;d.zH=a;e.cC=d;DX(e);f=Iy(C(278),1);d=new S_;d.Dh=a;f.cC=d;DX(f);d=AMG(C(279),0,I(Da,[b,c]));Iq(d);g=AMG(C(280),0,I(Da,[e,f]));Iq(g);D9(a.mP.cV,d);D9(a.mP.cp,g);return a.mP;}
function ACE(a){var b,c;b=a.v.F.b9;c=new Vs;c.Bb=a;GB(b,c);}
function AFk(a){var b,c;b=a.v.F.b9;c=new Z0;c.yI=a;GB(b,c);}
function AFC(a){var b,c;b=a.v.F.b9;c=new P8;c.xB=a;F5(b,c);}
function AAK(a){var b,c;b=a.v.F.b9;c=new Ql;c.EW=a;F5(b,c);}
function TU(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bj();f=H5(BF(d[c]));g=BT(d[c]);h=new J;L(h);H(H(H(H(V(H(h,C(281)),c),C(282)),f),C(29)),g);Bf(e,K(h));c=c+1|0;}}
function AEo(){var a=this;CA.call(a);a.t9=null;a.no=null;a.fF=null;a.pA=null;a.nn=0.0;a.hF=null;a.xA=null;a.u3=null;a.zq=null;a.Aa=null;a.s$=null;a.q9=null;a.DJ=null;a.x0=null;a.ma=null;}
var BaC=0;function A8Z(a){var b=new AEo();AXm(b,a);return b;}
function AXm(a,b){var c,d,e;Ex(a,b);a.t9=new B4;a.no=AFL(1.0,0.0,0.0,1.0);a.fF=TA();a.pA=new Bh;a.nn=3.1415927410125732;c=AL6();a.hF=c;a.xA=H$(c,1.25);a.u3=H$(a.hF,1.3333333730697632);a.zq=H$(a.hF,1.5);a.Aa=H$(a.hF,1.6666666269302368);a.s$=H$(a.hF,2.0);a.q9=AFL(a.nn/24.0,15.0,3.0,0.5);c=AFL(a.nn/12.0,25.0,3.0,0.5);a.DJ=c;a.x0=D$([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.ma=I(B4,[a.hF,a.xA,a.u3,a.zq,a.Aa,a.s$,a.q9,c]);c=b.n.bB;d=new RR;d.GT=a;Z(c,d);Z(b.n.b2,a);b=a.fF.bd;F3();BL(b,A_R);HJ(a.fF,0,0,600,60);e
=NO(0.5,0.375);JW(0.375,e);JW(0.375,JW(3.0,NO(e,3.0)));H$(AL6(),3.0);}
function A65(a,b,c){var d,e,f;Ct(a.pA,b);d=a.fF;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function H$(b,c){var d;d=new B4;Wj(b,c,d);return d;}
function AL6(){var b;b=new B4;Md(b);return b;}
function A1t(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.T;EY(b,a.t9);Ca(b,1);c=a.fF;d=c.w.a;e=c.u.b/2|0;f=0;while(true){g=a.ma.data;if(f>=g.length)break;h=a.x0.data[f];c=g[f];i=Yq(c);j=a.fF;k=j.w;l=k.a;m=k.b;MP(b,l,m+h|0,j.u,d+i,((m+e|0)+h|0)+i,c,a.no);f=f+1|0;}if(BaC){c=A8Q(1,2);n=0;while(n<1000){h=Eh(c,a.ma.data.length);l=Eh(c,a.pA.b-a.fF.u.b|0);j=a.ma.data[h];i=j.bu;i=i-(i|0)>=0.25?0.0:0.5;k=a.fF;MP(b,k.w.a,l,k.u,d+i,(e+l|0)+i,j,a.no);n=n+1|0;}}Ca(b,0);}
function AVt(a,b){return BaC;}
function U5(){Cq.call(this);this.hy=null;}
function Oz(){return EQ(1);}
function AAB(a){var b,c,d,e;b=new AAD;c=a.hy;KK(b,a.v,c,new WC);d=new AFW;d.jj=0;b.fQ=d;d=ANa(b.J.F);b.bZ=d;O0(d,c);c=Iy(C(283),0);d=Iy(C(284),0);DX(c);DX(d);e=new TQ;e.tS=b;c.cC=e;e=new TO;e.wq=b;d.cC=e;D9(b.bZ.cV,c);D9(b.bZ.cp,d);d=Lb(b,b.bZ,0.0);b.jp=d;c=new TP;c.yS=b;d.i5=c;c=new TN;c.Gn=b;d.i1=c;DY(b.J,d);}
function AXj(a,b,c){if(b===0.0)AAB(a);}
function Sb(){Cq.call(this);this.nc=null;}
function A08(a,b,c){if(b===0.0)LC(a);}
function LC(a){var b;b=AVT(a.v,a.nc,new SZ);K8(b);return b;}
var PC=G(K7);
function AZt(a){return EQ(1);}
function SQ(){Cq.call(this);this.nL=null;}
function A0n(a,b,c){if(b===0.0)ADC(a);}
function ADC(a){AEX(new Mm,a.v,a.nL,new AEY);}
function AAe(){var a=this;EC.call(a);a.l4=null;a.w6=null;}
function A3d(a){var b,c,d,e;b=U7(a.q);a.l4=b;BG(b);c=new UE;c.t6=b;b=Qw(C(285),4,c);d=Bj();e=Px(b);c=new J;L(c);V(H(c,C(286)),e);Bf(d,K(c));D9(a.l4,b);KI(a.l4,a.w6);b=a.l4;return Kg(b,G_(b,a.q));}
function A4F(a,b){var c;c=a.q.bV;EJ(b,BK(c.a/30|0,c.b/10|0),BK((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function Qx(){var a=this;EC.call(a);a.wu=null;a.gf=null;}
function AKI(){var b;b=I(JN,[Ee(1,3,4,5,1),Ee(5,6,10,2,2),Ee(12,2,13,3,3),Ee(15,3,17,2,4)]);return A4o(P(Ij,0),P(Ij,0),b);}
function A0G(a){var b,c,d,e;b=ANa(a.q);a.gf=b;O0(b,a.wu);c=a.gf.cV;BG(c);d=new ACR;d.rV=c;b=Qw(C(285),4,d);d=a.gf.cp;BG(d);e=new ACS;e.ut=d;c=Qw(C(285),4,e);D9(a.gf.cV,b);D9(a.gf.cp,c);Oy(a.gf,AKI());return a.gf;}
function KM(){var a=this;B.call(a);a.Dn=null;a.eC=null;a.vX=null;a.EN=null;a.tR=null;a.lu=null;a.si=null;a.xG=null;a.mh=null;a.mb=null;a.gZ=null;}
function BaD(a,b,c,d,e,f,g,h,i,j,k){var l=new KM();M9(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function M9(a,b,c,d,e,f,g,h,i,j,k,l){a.Dn=b;a.eC=c;a.vX=d;a.EN=e;a.tR=f;a.lu=g;a.si=h;a.xG=i;a.mh=j;a.mb=k;a.gZ=l;}
function AHH(){B.call(this);this.Gw=null;}
function ALP(a){var b=new AHH();AYh(b,a);return b;}
function AYh(a,b){a.Gw=b;}
var AGG=G(0);
function AKd(){var a=this;B.call(a);a.pI=null;a.lD=null;a.yZ=null;a.rd=null;}
function AMB(a,b,c,d){var e=new AKd();A7g(e,a,b,c,d);return e;}
function A7g(a,b,c,d,e){a.pI=b;a.lD=c;a.yZ=d;a.rd=e;}
var AH9=G(0);
function Fy(){var b,c,d;b=new Jw;c=new JE;A2V();d=BaE;Po(c,d,BaF,BaG,BaH,BaI,d);Mv(b,c,AJy(),AJI(S(C(287)),S(C(246)),S(C(247))),AJy(),AJ8(1,0.125),BaJ,BaK);return b;}
function AJy(){var b,c;b=new KX;c=S(C(288));A2V();LK(b,c,BaL,BaM);return b;}
function AJa(){var b,c;b=new KX;c=S(C(247));AYs();LK(b,c,BaN,BaO);return b;}
function ANm(){var b,c;b=new KX;AI3();c=BaP;AYD();LK(b,c,BaQ,BaR);return b;}
function AJV(){var a=this;B.call(a);a.AO=null;a.xQ=null;a.v8=null;a.ro=null;}
function AGi(a,b,c,d){var e=new AJV();AYU(e,a,b,c,d);return e;}
function AYU(a,b,c,d,e){a.AO=b;a.xQ=c;a.v8=d;a.ro=e;}
function AF8(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d3.xQ;break a;case 3:if(c!=3){b=b.d3.ro;break a;}b=b.d3.v8;break a;default:b=b.bw.eC;break a;}b=b.d3.AO;}return b;}
function Is(a,b,c){return AF8(a,b,0,c);}
function Nd(){var a=this;B.call(a);a.mx=null;a.kY=null;}
function XF(a,b){var c;c=a.kY;a.kY=b;return c;}
function Li(){var a=this;Nd.call(a);a.b4=null;a.ce=null;a.hg=0;a.ho=0;}
function NJ(a){var b;b=L7(a);if(b==2){if(L7(a.ce)<0)a.ce=P4(a.ce);return Q$(a);}if(b!=(-2))return a;if(L7(a.b4)>0)a.b4=Q$(a.b4);return P4(a);}
function L7(a){var b,c;b=a.ce;c=b===null?0:b.hg;b=a.b4;return c-(b===null?0:b.hg)|0;}
function P4(a){var b;b=a.b4;a.b4=b.ce;b.ce=a;Ff(a);Ff(b);return b;}
function Q$(a){var b;b=a.ce;a.ce=b.b4;b.b4=a;Ff(a);Ff(b);return b;}
function Ff(a){var b,c,d;b=a.ce;c=b===null?0:b.hg;b=a.b4;d=b===null?0:b.hg;a.hg=Bd(c,d)+1|0;a.ho=1;b=a.b4;if(b!==null)a.ho=1+b.ho|0;b=a.ce;if(b!==null)a.ho=a.ho+b.ho|0;}
var ANp=G();
function AO$(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new ZF;c=c.buffer;d.gS=c;d.q1=new $rt_globals.Int8Array(c);d.ne=new $rt_globals.Uint16Array(c);d.BU=new $rt_globals.Int32Array(c);d.th=new $rt_globals.Float32Array(c);d.tB=new $rt_globals.Float64Array(c);e=d.gS.byteLength;c=new J;L(c);V(H(c,C(289)),e);C2(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(290)),e);C2(K(c));f=b.callToCpp2();c=new J;L(c);Dg(H(c,C(291)),f);C2(K(c));c=PR(d,b.getC8String());g=new J;L(g);H(H(g,C(292)),c);C2(K(g));c
=X4(d,b.getC16String());g=new J;L(g);H(H(g,C(293)),c);C2(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gS,h,8));c=AIz(i);g=new J;L(g);H(H(g,C(294)),c);C2(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gS,h,8));c=AVz(j);g=new J;L(g);H(H(g,C(295)),c);C2(K(g));k=ALn(d,b.getCDoubleArray8(),8);l=AXJ(k);c=new J;L(c);H(H(c,C(296)),l);C2(Eq(c));l=AXF(b.getC8String(),C(297),d);c=MM();H(H(c,C(298)),l);C2(Eq(c));l=ATf(b.getC16String(),C(299),
d);c=MM();H(H(c,C(300)),l);C2(Eq(c));c=A36(i,d,b.getCIntArray8(),D$([11,22,33,44,55,66,77,88]));g=MM();H(H(g,C(301)),c);C2(Eq(g));c=AVK(j,d,b.getCFloatArray8(),100,D$([111,222,333,444,555,666,777,888]));g=MM();H(H(g,C(302)),c);C2(Eq(g));b=A5u(k,d,b.getCDoubleArray8(),1000,D$([1111,2222,3333,4444,5555,6666,7777,8888]));c=MM();H(H(c,C(303)),b);C2(Eq(c));}
function AVK(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(304);h=0;i=e;a:{while(h<g){if(C6(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.th[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(305);}return C(306);}
function A5u(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(304);h=0;i=e;a:{while(h<g){if(G$(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.tB[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(305);}return C(306);}
function A36(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(304);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.BU[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(305);}return C(306);}
function AXF(b,c,d){var e,f,g,h;e=PR(d,b);if(!Bk(c,e))return C(307);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.q1[h])return C(308);f=f+1|0;}return C(305);}
function ATf(b,c,d){var e,f,g,h;e=X4(d,b);if(!Bk(c,e))return C(307);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.ne[h>>>1|0]&65535))return C(308);f=f+1|0;}return C(305);}
function C2(b){ZD(C(2),b);}
function ASi(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function ZV(){B.call(this);this.sB=null;}
function AWU(a,b){return ALo(a.sB,b);}
function ZT(){B.call(this);this.CX=null;}
function A0X(a,b){ALD(a.CX,b);}
function ZU(){B.call(this);this.zc=null;}
function AV5(a,b){return AGE(a.zc,b);}
function AJQ(){KW.call(this);this.dS=null;}
function Lq(){var a=new AJQ();A6M(a);return a;}
function IF(a,b,c,d){var e=new AJQ();A12(e,a,b,c,d);return e;}
function A6M(a){ADW(a);a.dS=new B4;}
function A12(a,b,c,d,e){ADW(a);a.dS=new B4;HJ(a,b,c,d,e);}
function Gj(a){var b,c;b=a.u;c=a.dS;Y(b,c.bi-c.bq|0,c.bD-c.bu|0);}
function F_(a,b){I6(a,0,0,BV(b),CX(b));}
function I6(a,b,c,d,e){Cv(a.dS,b,c,d,e);}
function EW(a,b,c,d,e){var f;f=a.w;DR(b,f.a+d|0,f.b+e|0,a.u,a.dS,c,a.bd,a.br,0);}
function T0(a,b,c,d){var e;e=a.w;DR(b,e.a,e.b,a.u,a.dS,c,a.bd,a.br,d);}
function I4(a,b,c,d,e,f,g){DR(b,c,d,a.u,a.dS,e,!f?a.bd:a.br,!f?a.br:a.bd,g);}
function H4(a,b){BL(a.bd,b);}
function FB(a,b){BL(a.br,b);}
function U6(){B.call(this);this.fW=null;}
function AZr(a,b){var c,d,e,f,g,h;c=b.k;d=c.a;e=a.fW.hY;f=e.u;d=d-f.a|0;g=c.b-f.b|0;Y(e.w,d,g);c=a.fW;e=c.C.bI;b=b.k;d=0;a:{while(true){h=c.jv.data;if(d>=h.length)break;if(Ft(h[d],b)){b=c.ra.data[d];break a;}d=d+1|0;}b=null;}ABm(e,b);return 1;}
function AN5(a,b,c,d){if(!c&&d==2){b=a.fW;TB(b,b.eF);}return 1;}
function AZk(a,b,c){var d,e;d=Bj();e=new J;L(e);V(H(e,C(309)),c);Bf(d,K(e));if(c)return null;d=b.k;e=!Ft(a.fW.eF,d)?null:d;Vt(a.fW.j7,d.a,d.b);b=a.fW;Z3(b.j7,Ny(b.C.bI));if(e===null)b=A_Y;else{b=new AD$;b.tM=a;b.tN=e;}return b;}
function AYL(a,b,c){var d;b=Bj();d=new J;L(d);V(H(d,C(310)),c);Bf(b,K(d));return 1;}
function AAm(){B.call(this);this.Dz=null;}
function A05(a,b){return Yn(a.Dz,b);}
function AAl(){B.call(this);this.tf=null;}
function AQY(a,b){return Yn(a.tf,b);}
function AAk(){B.call(this);this.E2=null;}
function A1_(a,b,c){var d,e;Bf(Bj(),C(311));d=!c?C(312):C(55);e=new J;L(e);H(H(H(e,C(313)),d),C(314));OV(b,K(e));return 1;}
function AAj(){B.call(this);this.FG=null;}
function AYi(a){Bf(Bj(),C(315));}
function AAi(){B.call(this);this.F9=null;}
function AUf(a,b){Bf(Bj(),C(316));return 1;}
function AAh(){B.call(this);this.Ck=null;}
function A50(a,b,c,d){var e,f,g;b=a.Ck;e=( -d|0)/10|0;b=b.eF;f=b.u;f.a=f.a+e|0;f.b=f.b+e|0;b=b.w;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function HO(){var a=this;B4.call(a);a.hS=0;a.hV=0;a.hT=0;a.hU=0;}
function Cs(a){var b=new HO();AXs(b,a);return b;}
function DF(a,b,c){var d=new HO();A0f(d,a,b,c);return d;}
function S(a){var b=new HO();A5g(b,a);return b;}
function Fd(a,b,c,d){var e=new HO();Sz(e,a,b,c,d);return e;}
function B0(a){var b=new HO();Lw(b,a);return b;}
function AXs(a,b){Sz(a,b,b,b,255);}
function A0f(a,b,c,d){Sz(a,b,c,d,255);}
function A5g(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hS=K0(Q(b,1))*17|0;a.hV=K0(Q(b,2))*17|0;a.hT=K0(Q(b,3))*17|0;a.hU=255;}else{a.hS=Mt(Q(b,1),Q(b,2));a.hV=Mt(Q(b,3),Q(b,4));a.hT=Mt(Q(b,5),Q(b,6));a.hU=M(b)!=9?255:Mt(Q(b,7),Q(b,8));}Ja(a.hS,a.hV,a.hT,a.hU,a);return;}}
function Sz(a,b,c,d,e){a.hS=b;a.hV=c;a.hT=d;a.hU=e;Ja(b,c,d,e,a);}
function Lw(a,b){a.hS=b.hS;a.hV=b.hV;a.hT=b.hT;a.hU=b.hU;BL(a,b);}
function K0(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mt(b,c){return (16*K0(b)|0)+K0(c)|0;}
var AIM=G(0);
function EQ(b){return !b?I(BC,[C(158),C(169),C(317)]):I(BC,[C(158),C(169),C(317),C(34)]);}
function XV(){B.call(this);this.mM=null;}
function AQy(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mM.dI;e=D0();f=e-0.5+(D0()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+D0()*0.3;h=0.5+D0()*0.5;I2(e,g,h,1.0,b.bd);I2(f,g,h,1.0,b.br);b=a.mM;BL(b.ej.bd,b.dI.bd);b=a.mM;BL(b.ej.br,b.dI.br);}return 1;}
function XR(){var a=this;B.call(a);a.ow=null;a.oX=null;}
function AH$(){var a=this;B.call(a);a.gy=null;a.cG=null;a.hm=null;a.il=null;a.oE=null;a.c1=null;a.h9=null;a.dj=0;a.gB=0;a.oW=0;a.kU=0;a.k7=0;a.id=0;a.ln=null;a.pO=null;a.xY=null;a.os=null;}
function ALU(){var a=new AH$();AVS(a);return a;}
function AVS(a){a.cG=TA();a.hm=new Bh;a.il=new Bh;a.c1=BaS;a.kU=(-1);a.k7=1;}
function N3(a,b){OR(a);a.c1=b;}
function Kf(a,b,c){a.gy=b;AEB(a,c);OR(a);}
function Kh(a,b){var c;a.oE=b.l5;c=b.pR.qv;BL(a.cG.bd,c);c=b.jM.kc;BL(a.cG.br,c);a.os=b.pR;}
function Nx(a){a.h9=BY(a.h9,null);Y(a.hm,0,0);a.c1=BaS;a.kU=(-1);ACP(a.cG);}
function AEB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KU(b);d=b.ct;BG(a.gy);Cr(c,a.gy);e=NY(a.gy,1.25);f=0;a.dj=Ck(2.0,d);a.gB=Ck(3.0,d);a.oW=Ck(12.0,d);g=0;h=a.c1.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=LR(c,l.og);n=a.oW;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fK;b.a=g;b.b=0;b=l.eT;b.a=n;b.b=e;Cv(l.kQ,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.hm;b.a=g;b.b=e;b=a.cG.u;n=a.id;if(!n){m=a.dj;m=(g+m|0)+Bb(m,a.c1.data.length)|0;}else m=(f+(a.dj*2|0)|0)+(a.gB*2|0)|0;b.a=m;if(!n)e=e+(a.dj*2|0)|0;else{n=a.dj;e=(Bb(e+n|0,a.c1.data.length)+n
|0)+(a.gB*2|0)|0;}b.b=e;}
function NZ(a,b,c){var d,e,f,g,h,i,j;Y(a.cG.w,b,c);d=a.dj+a.gB|0;e=a.c1.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fK;j.a=b+d|0;j.b=c+h|0;if(!a.id){if(!i.eT.a)AGt();d=d+(i.eT.a+a.dj|0)|0;}else{if(!i.eT.b)AGt();h=h+(i.eT.b+a.dj|0)|0;}g=g+1|0;}}
function AGt(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ER(a){var b,c;b=a.hm;if(b.a&&b.b)return a.cG.u;c=new Bt;Bn(c,C(318));N(c);}
function OR(a){a.k7=1;}
function MR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bP;if(!a.c1.data.length)return;if(a.h9===null)a.h9=C4(c);a:{if(!a.k7){d=a.hm;if(Bb(d.a,d.b))break a;}d=a.hm;if(!Bb(d.a,d.b))AEB(a,b);d=a.hm;e=d.a;f=d.b;if(!Bb(e,f))return;d=Eg(c,e,f,b.cW);Cr(d,a.gy);g=NY(a.gy,0.125);h=a.gy;i=h.eK;g=g+i-(i+h.e6)/16.0;j=a.c1.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.og,h.kQ.bq+a.oW,g);f=f+1|0;}CU(a.h9,d);a.k7=0;EP(d);}if(!LP(a.cG)){d=a.cG;AK9(c,d.u,d.w,d.br,a.dj,a.il);d=a.cG;h=d.u;k=d.w;d=d.bd;e=a.dj;l=a.il;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;Bv(c,k.a+e|0,k.b+e|0,l,d);if(a.id){d=a.cG;AMs(c,d.u,d.w,0,0,ZH(a.oE,b.ct),a.oE.oI,a.il);}}j=a.c1.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fK;e=h.a;f=h.b;h=d.eT;k=d.kQ;l=a.h9;o=a.os;DR(c,e,f,h,k,l,o.sF,WG(o,d.lG),b.cW);n=n+1|0;}b:{if(a.id){j=a.c1.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.il;e=(a.cG.u.a-(a.dj*2|0)|0)-(a.gB*2|0)|0;h=d.eT;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fK;Bv(c,k.a+h.a|0,k.b,b,WG(a.os,d.lG));}p=p+1|0;}}}}
function Ow(a,b,c){var d,e,f,g,h,i;d=Ft(a.cG,b);e=!d?(-1):Qi(a,b);f=a.kU;if(f!=e){if(f>=0){g=a.c1.data[f];g.lG=0;if(a.xY!==null){h=Bj();g=BT(g);i=new J;L(i);H(H(V(H(i,C(319)),f),C(320)),g);Bf(h,K(i));}}if(e>=0){h=a.c1.data[e];g=a.pO;if(g!==null)g.x3(b,e,h);h.lG=1;}a.kU=e;}return d&&Ha(c)?1:0;}
function OU(a,b,c,d){var e,f;e=Qi(a,b);if(e>=0){f=a.c1.data[e];if(!AD0(f))f.nv.e();}return 1;}
function Qi(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c1.data;if(c>=d.length)return (-1);e=d[c];if(GK(b,e.fK,e.eT))return c;if(a.id){f=e.fK;g=f.a;e=e.eT;h=e.a;g=g+h|0;i=f.b;f=a.il;f.a=(a.cG.u.a-(a.dj*2|0)|0)-h|0;f.b=e.b;if(AGM(b,g,i,f))break;}c=c+1|0;}return c;}
function AF6(a){a.id=1;}
function AK$(){var a=this;B.call(a);a.iC=null;a.hs=0.0;a.kD=0;a.kS=0;}
function DC(a,b){var c=new AK$();AUv(c,a,b);return c;}
function AUv(a,b,c){a.iC=b;a.hs=c;a.kD=400;a.kS=700;}
function A4_(a,b){if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){b=b;return a.hs===b.hs&&a.kD==b.kD&&a.kS==b.kS&&BR(a.iC,b.iC)?1:0;}return 0;}
function ADo(){B.call(this);this.vT=null;}
function ATg(a,b){var c;c=a.vT;if(b.bb==32)Nx(c.d1);return 0;}
function ADk(){B.call(this);this.wP=null;}
function AVM(a,b){var c,d,e,f;c=a.wP;d=AAz(c.q);HR(d,Fy(),c.pe);b=b.k;e=SM(4);f=new V7;f.E3=c;Nf(d,b,e,f);H7(c.v,d);return 1;}
var ADl=G();
function A7E(a){Bf(Bj(),C(321));}
var ADm=G();
function AOR(a){Bf(Bj(),C(322));}
function By(){var a=this;B.call(a);a.nv=null;a.kQ=null;a.fK=null;a.eT=null;a.nS=null;a.u0=null;a.lG=0;a.og=null;}
function Yz(a,b){var c=new By();Ce(c,a,b);return c;}
function A9C(a,b,c,d){var e=new By();ALx(e,a,b,c,d);return e;}
function Ce(a,b,c){ALx(a,b,c,null,null);}
function ALx(a,b,c,d,e){a.kQ=new B4;a.fK=new Bh;a.eT=new Bh;a.og=c;a.u0=e;a.nv=b;a.nS=d;}
function AD0(a){return a.nS===null?0:1;}
function VM(){B.call(this);this.D4=null;}
function AXD(a,b){return b.km&&b.bb==32?1:0;}
function VN(){B.call(this);this.CF=null;}
function AOu(a,b){var c,d,e,f,g,h;c=a.CF;d=AAz(c.q);HR(d,Fy(),DC(C(158),25.0));b=b.k;e=P(By,1);f=e.data;g=new By;h=new AFZ;h.CW=c;Ce(g,h,C(323));f[0]=g;Nf(d,b,CQ(e),BaT);H7(c.v,d);return 1;}
function AJv(){var a=this;B.call(a);a.qF=0;a.qH=0;}
function Wf(){var a=new AJv();AWI(a);return a;}
function A8Q(a,b){var c=new AJv();ANw(c,a,b);return c;}
function AWI(a){ANw(a,ANd(Hi((AIJ()))),Hi((AIJ()))^(-559038737));}
function ANw(a,b,c){var d;a.qF=b;a.qH=c;d=0;while(d<19){Oe(a);d=d+1|0;}}
function Oe(a){var b,c;b=a.qF;c=a.qH;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.qF=c;a.qH=b;return b;}
function ANd(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AML(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Eh(a,b){return Wh(a)*b|0;}
function Wh(a){return 5.960464477539063E-8*(Oe(a)&16777215);}
function RW(a,b){var c,d,e;c=AML(Oe(a));d=AVF( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function PV(){B.call(this);this.zg=null;}
function ATZ(a,b,c){var d;d=a.zg;if(b===0.0)MH(d,100);}
function PU(){B.call(this);this.wZ=null;}
function ARI(a,b){var c,d,e;c=a.wZ;d=b.bb;if(d==32){c.md=c.md?0:1;e=1;}else if(d==13){MH(c,1);e=1;}else if(d!=8)e=0;else{Qv(c,1);e=1;}return e;}
var ABg=G(0);
function AKe(b,c){var d;d=new Wa;d.y5=b;d.y4=c;return d;}
function AKk(){var a=this;B.call(a);a.h4=null;a.iD=0;a.mo=0;a.hO=0;}
function AKx(a){var b=new AKk();AQI(b,a);return b;}
function AQI(a,b){a.h4=BO();a.hO=0;a.mo=2048;a.iD=b;}
function K4(a,b,c){var d,e,f,g,h,i;d=c.AM(b);e=a.mo;if(d>e){c=new Bt;f=new J;L(f);Br(V(H(V(H(f,C(324)),d),C(325)),e),41);Bn(c,K(f));N(c);}if(!a.iD){b=new BU;Bn(b,C(326));N(b);}a:{b=new B4;if(d){b:{c=a.h4;if(c.p>0){c=B9(c);g=d;while(true){if(!Cb(c))break b;f=Cc(c);if(f.bi>=g)break;}Cv(b,f.bq,f.bu,g,a.iD);f.bq=f.bq+g;h=f.bi-g;f.bi=h;if(h===0.0)AI9(a.h4,f);break a;}}g=a.hO;i=d;Cv(b,0.0,g,i,a.iD);BA(a.h4,AFL(i,a.hO,a.mo-d|0,a.iD));a.hO=a.hO+a.iD|0;}}return b;}
function Jy(a,b){var c,d,e,f,g,h,i;a:{c=ANu(b);b=a.h4;if(b.p>0){d=B9(b);while(true){if(!Cb(d))break a;e=Cc(d);if(e.bu===c.bu){f=e.bq;g=e.bi;h=f+g;i=c.bq;if(h===i){c.bq=f;c.bi=c.bi+g;AAY(d);}else{h=c.bi;if(i+h===f){c.bi=h+g;AAY(d);}}}}}}BA(a.h4,c);}
function Np(a){return BK(a.mo,a.hO);}
function X6(){var a=this;B.call(a);a.sE=null;a.mi=null;}
function AYv(a,b,c){if(c)return A_Y;return Gq(a.mi.jw,b.k,a.sE,1);}
function AOp(a,b,c){return 1;}
function A0z(a,b){var c;c=a.mi;return Gy(c.jw,b.k,c.yY);}
function ABC(){B.call(this);this.Cb=null;}
function ATX(a,b,c,d){var e,f;b=a.Cb;e=(XJ(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fs=Be(Bd(0,b.fs+Bb(e,f)|0),V9(b));return 1;}
function RI(){B.call(this);this.t4=null;}
function AQV(a,b){var c,d,e;c=a.t4;if(b.cB&&b.bb==79){if(!b.bK){b=c.C.bI;d=new Yv;d.wf=c;F5(b,d);}else{b=c.C.bI;d=new Yu;d.yE=c;GB(b,d);}e=1;}else e=0;return e;}
function SB(){B.call(this);this.zj=null;}
function AXE(a,b){var c,d,e,f,g,h,i,j,k;c=a.zj;d=c.v;e=Fy();f=DC(C(158),25.0);g=b.k;h=P(By,5);i=h.data;b=new By;j=new Vf;j.sn=c;Ce(b,j,C(327));i[0]=b;b=new By;j=new Vg;j.s9=c;Ce(b,j,C(328));i[1]=b;b=new By;j=new Vh;j.uT=c;Ce(b,j,C(329));i[2]=b;b=new By;j=new Vi;j.yO=c;Ce(b,j,C(330));i[3]=b;b=new By;k=new Vj;k.zi=c;Ce(b,k,C(331));i[4]=b;FA(d,e,f,g,CQ(h));return 1;}
function SA(){B.call(this);this.BH=null;}
function A4P(a,b){var c,d,e;c=a.BH.C.bI;d=new Y9;e=P(B,1);e.data[0]=b;CG(c,d,C(332),e);}
function ADy(){B.call(this);this.nD=null;}
function A3X(a,b){var c,d,e,f,g,h;c=a.nD;d=c.q6;if(d!==null){e=c.fq.w;f=e.a;g=b.k;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.q6=g;}b=b.k;f=b.a;c=c.ha;d=c.u;f=f-d.a|0;h=b.b-d.b|0;Y(c.w,f,h);return 1;}
function AXq(a,b,c){var d;if(!c){d=b.k;b=a.nD;if(!Ft(b.fq,d))d=null;b.q6=d;}return A_Y;}
var AIg=G();
function ANB(b){var c,d;c=Ib(b,250,64);HY(c,C(249),25.0);KF(c,187,187,187);B1(c,C(333),0.0,24.0);B1(c,C(333),0.25,56.0);d=C4(b);CU(d,c);EP(c);return d;}
var Dn=G(0);
var A_$=null;var Baz=null;var A__=null;var A_R=null;var Bab=null;var Baa=null;var Bad=null;var Bac=null;var Baf=null;var Bae=null;var Bag=null;function F3(){F3=Bm(Dn);AXG();}
function AXG(){A_$=Cs(187);Baz=S(C(334));A__=Cs(55);A_R=Cs(43);Bab=DF(33,66,131);Baa=DF(60,63,65);Bad=S(C(335));Bac=S(C(336));Baf=Fd(85,85,85,128);Bae=Fd(43,43,43,0);Bag=S(C(235));}
function ZW(){var a=this;B.call(a);a.rx=null;a.mw=null;}
function ARV(a,b,c){var d;if(!c){d=Gq(a.mw.i6,b.k,a.rx,1);if(d!==null)return d;}return A_Y;}
function AYI(a,b,c){return 1;}
function AQD(a,b){var c;c=a.mw;return Gy(c.i6,b.k,St(c.C.bI));}
function Xj(){B.call(this);this.sl=null;}
function A5X(a,b,c,d){var e,f;b=a.sl;e=(XJ(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.f9=Be(Bd(0,b.f9+Bb(e,f)|0),ABD(b));return 1;}
function AE_(){B.call(this);this.xX=null;}
function ARW(a,b){var c,d;a:{c=a.xX;switch(b.bb){case 67:Rt(c);d=1;break a;case 86:ABj(c);d=1;break a;default:}d=0;}return d;}
var AE$=G();
function A2j(a,b,c){return 0;}
function AE9(){B.call(this);this.tt=null;}
function APY(a,b,c){var d,e;d=a.tt;c=d.ex+1|0;d.ex=c;d=GV(F(KZ));e=new J;L(e);H(H(V(e,c),C(337)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));OV(b,e);return 1;}
var AE8=G();
function AS9(a){return null;}
function AFa(){B.call(this);this.Bq=null;}
function A5q(a){var b,c;b=a.Bq;c=new W4;c.rt=b;return c;}
function Tj(){B.call(this);this.Fj=null;}
function APM(a,b){return 0;}
function Qk(){B.call(this);this.AF=null;}
function A3i(a,b){var c;c=a.AF;if(b.km&&b.bb==27){b=Pe(c.v);if(b!==null)Nz(b);}return 0;}
function Qm(){B.call(this);this.wX=null;}
function A1o(a,b){var c,d,e,f,g,h,i;c=a.wX;d=AAz(c.q);HR(d,Fy(),DC(C(158),25.0));b=b.k;e=P(By,1);f=e.data;g=new By;h=c.v;i=new YX;i.z_=c;Ce(g,DT(h,i),C(338));f[0]=g;Nf(d,b,CQ(e),BaT);H7(c.v,d);return 1;}
function Qn(){B.call(this);this.CR=null;}
function A3V(a,b){var c,d,e;c=a.CR;d=c.gH;if(d!==null){e=new ACx;e.Ds=c;e.Dt=b;Ga(d,b,e);}}
function Qo(){B.call(this);this.AB=null;}
function A5N(a,b){var c,d,e;c=a.AB;if(DB(c.q,c.gH)){d=c.mL;b=b.k;e=c.gH;Jd(d,b,e,c,e,c,new Yl);}return 1;}
function RK(){B.call(this);this.CI=null;}
function AUD(a,b){var c,d,e,f,g,h,i,j,k;c=a.CI;d=c.v;e=c.pN;f=e.cd;g=e.f1;h=b.k;i=P(By,4);j=i.data;b=new By;e=new YE;e.sQ=c;Ce(b,DT(d,e),C(339));j[0]=b;b=new By;e=c.v;k=new YB;k.r9=c;Ce(b,DT(e,k),C(340));j[1]=b;b=new By;e=c.v;k=new YA;k.vd=c;Ce(b,DT(e,k),C(341));j[2]=b;e=new By;k=c.v;b=new YD;b.Aq=c;Ce(e,DT(k,b),C(342));j[3]=e;FA(d,f,g,h,CQ(i));return 1;}
function RJ(){B.call(this);this.EA=null;}
function A1S(a,b){return b.bb!=32?0:1;}
function RR(){B.call(this);this.GT=null;}
function AOG(a,b){return 0;}
function ACF(){B.call(this);this.rB=null;}
function AUR(a,b){var c,d,e,f,g,h;c=a.rB;d=P(By,4);e=d.data;f=new By;g=c.v;h=new AAQ;h.BT=c;Ce(f,DT(g,h),C(343));e[0]=f;f=new By;h=c.v;g=new AAP;g.sP=c;Ce(f,DT(h,g),C(344));e[1]=f;f=new By;h=c.v;g=new AAS;g.xh=c;Ce(f,DT(h,g),C(345));e[2]=f;f=new By;h=c.v;g=new AAR;g.vW=c;Ce(f,DT(h,g),C(346));e[3]=f;f=CQ(d);h=c.v;c=c.hy;FA(h,c.cd,c.f1,b.k,f);return 1;}
function QV(){B.call(this);this.t7=null;}
function A52(a,b){L5(LC(a.t7),b);}
function QU(){B.call(this);this.wB=null;}
function A0A(a,b){var c,d,e,f,g,h;c=a.wB;d=P(By,1);e=d.data;f=new By;g=c.v;h=new Zt;h.v5=c;Ce(f,DT(g,h),C(346));e[0]=f;f=CQ(d);g=c.v;c=c.nc;FA(g,c.cd,c.f1,b.k,f);return 1;}
var AJg=G(0);
function AMR(b){It(b,A8$(C(347),C(194),ADU(C(348))));}
function YZ(){B.call(this);this.zt=null;}
function AQh(a,b){var c,d,e,f,g,h;c=a.zt;d=P(By,1);e=d.data;f=new By;g=c.v;h=new S3;h.yW=c;Ce(f,DT(g,h),C(345));e[0]=f;f=CQ(d);g=c.v;c=c.nL;FA(g,c.cd,c.f1,b.k,f);return 1;}
function VR(){B.call(this);this.D1=null;}
function AUS(a,b){return 1;}
function VQ(){B.call(this);this.vb=null;}
function A5Q(a,b){var c,d;c=a.vb;if(b.bb!=32)d=0;else{Oy(c.gf,AKI());d=1;}return d;}
var Dt=G(0);
var Bah=null;var BaU=null;var Baj=null;var Bai=null;var Bal=null;var Bak=null;var Ban=null;var Bam=null;var Bap=null;var Bao=null;var Baq=null;function AQK(){AQK=Bm(Dt);AV4();}
function AV4(){Bah=Cs(206);BaU=S(C(349));Baj=S(C(350));Bai=S(C(242));Bal=S(C(351));Bak=S(C(231));Ban=S(C(352));Bam=S(C(353));Bap=Fd(107,106,107,128);Bao=Fd(30,31,34,0);Baq=S(C(244));}
function Cu(){CE.call(this);this.lH=null;}
var BaV=null;var BaW=null;var BaX=null;var BaY=null;var BaZ=null;var A_0=null;var Ba0=null;var Ba1=null;var Ba2=null;var Ba3=null;var Ba4=null;var Ba5=null;var Ba6=null;var Ba7=null;var Ba8=null;var Ba9=null;function Ve(){Ve=Bm(Cu);A2r();}
function D7(a,b,c){var d=new Cu();ABx(d,a,b,c);return d;}
function A9s(a,b,c,d){var e=new Cu();AFj(e,a,b,c,d);return e;}
function AHG(){Ve();return Ba9.eb();}
function ABx(a,b,c,d){Ve();Dv(a,b,c);a.lH=Kk(d,null);}
function AFj(a,b,c,d,e){Ve();Dv(a,b,c);a.lH=Kk(d,e);}
function A2r(){var b,c;b=new Cu;AQK();ABx(b,C(354),0,BaU);BaV=b;BaW=D7(C(355),1,S(C(356)));BaX=D7(C(357),2,S(C(358)));BaY=D7(C(359),3,S(C(360)));BaZ=D7(C(361),4,BaU);A_0=D7(C(362),5,S(C(363)));Ba0=D7(C(364),6,S(C(365)));Ba1=D7(C(366),7,S(C(367)));Ba2=D7(C(368),8,S(C(369)));c=new Cu;F3();AFj(c,C(370),9,Baz,S(C(352)));Ba3=c;Ba4=A9s(C(371),10,Baz,S(C(245)));Ba5=D7(C(372),11,S(C(373)));Ba6=D7(C(374),12,S(C(375)));Ba7=D7(C(376),13,BaU);b=D7(C(377),14,S(C(378)));Ba8=b;Ba9=I(Cu,[BaV,BaW,BaX,BaY,BaZ,A_0,Ba0,Ba1,Ba2,
Ba3,Ba4,Ba5,Ba6,Ba7,b]);}
function K1(){var a=this;B.call(a);a.hA=null;a.np=null;}
function Kk(a,b){var c=new K1();A2Y(c,a,b);return c;}
function A2Y(a,b,c){a.hA=b;a.np=c;}
function Jw(){var a=this;B.call(a);a.l5=null;a.up=null;a.pk=null;a.FJ=3;a.jM=null;a.C7=null;a.GW=null;a.pR=null;a.nA=null;a.pv=null;}
function Ba$(a,b,c,d,e,f,g){var h=new Jw();Mv(h,a,b,c,d,e,f,g);return h;}
function Mv(a,b,c,d,e,f,g,h){a.up=DC(C(169),16.0);a.pk=DC(C(14),16.0);a.FJ=3;a.C7=b;a.GW=c;a.jM=d;a.pR=e;a.l5=f;a.nA=g;a.pv=h;}
function AL4(){var a=this;B.call(a);a.oI=null;a.uk=0;}
function AJ8(a,b){var c=new AL4();A5e(c,a,b);return c;}
function A5e(a,b,c){var d;d=new B4;a.oI=d;a.uk=b;d.bD=c;}
function ZH(a,b){return Ck(a.uk,b);}
var DZ=G(0);
var Bau=null;var Bav=null;var Bar=null;var Bas=null;var Bat=null;var BaN=null;var BaO=null;var Baw=null;var Bax=null;function AYs(){AYs=Bm(DZ);A30();}
function A30(){Bau=S(C(231));Bav=S(C(379));Bar=S(C(247));Bas=S(C(365));Bat=S(C(349));BaN=S(C(231));BaO=S(C(380));Baw=S(C(381));Bax=DF(43,45,48);}
var Zr=G(0);
var ZE=G();
function A01(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(382)),d),C(383)),e);C2(K(b));return d+e|0;}
var Zs=G(0);
var ZC=G();
function A1P(a,b,c){var d,e;d=b;e=c;b=new J;L(b);Dg(H(Dg(H(b,C(384)),d),C(383)),e);C2(K(b));return d+e;}
var AG1=G();
var AKi=G(0);
function Wz(){B.call(this);this.o2=null;}
var BaS=null;function Uh(){var a=new Wz();AKR(a);return a;}
function AKR(a){a.o2=BO();}
function EG(a,b,c){NN(a,Dc(b,c));}
function Dc(b,c){return Yz(c,b);}
function Iw(a,b,c){Mg(a,b,c,null);}
function Mg(a,b,c,d){NN(a,A9C(null,b,c,d));}
function NN(a,b){BA(a.o2,b);}
function Jt(a){return CQ(GO(a.o2,BaS));}
function AKm(){BaS=P(By,0);}
var D5=G(0);
var BaH=null;var BaI=null;var BaE=null;var BaF=null;var BaG=null;var BaL=null;var BaM=null;var BaJ=null;var BaK=null;function A2V(){A2V=Bm(D5);A3D();}
function A3D(){BaH=S(C(240));BaI=S(C(385));BaE=S(C(288));BaF=S(C(386));BaG=S(C(334));BaL=S(C(240));BaM=S(C(385));BaJ=Fd(118,121,122,128);BaK=DF(63,66,68);}
var Ir=G(0);
var Q5=G();
function A4E(a,b,c,d){var e;b=Bj();d=BT(d);e=new J;L(e);H(H(V(H(e,C(387)),c),C(320)),d);Bf(b,K(e));}
var Q6=G();
function U8(){B.call(this);this.BD=null;}
function A3u(a,b){var c;c=a.BD.mi;c.fs=Gg(b,V9(c));}
function QH(){B.call(this);this.E5=null;}
function AQt(a,b){var c,d,e,f;c=b.data;b=Bj();d=BT(c[0]);e=new J;L(e);H(H(e,C(388)),d);Bf(b,K(e));b=Bj();f=c[1];d=new J;L(d);H(H(d,C(389)),f);Bf(b,K(d));}
function QG(){B.call(this);this.F5=null;}
function AO6(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(390)),e);Bf(d,K(f));g=E6(Jj(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(37));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(38));Br(c,i[h]);h=h+1|0;}BM(c,C(39));c=K(c);}e=new J;L(e);H(H(H(H(e,C(391)),d),C(392)),c);Bf(b,K(e));}
function QD(){B.call(this);this.G8=null;}
function AOc(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(393)),e);Bf(d,K(f));g=Zq(Jj(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(37));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(38));V(c,i[h]);h=h+1|0;}BM(c,C(39));c=K(c);}e=new J;L(e);H(H(H(H(e,C(394)),d),C(395)),c);Bf(b,K(e));}
function QB(){B.call(this);this.Gd=null;}
function A7a(a,b){var c,d,e,f,g;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(396)),e);Bf(d,K(f));g=CL(Jj(b,1));b=Bj();d=BT(c[1]);c=AIz(g);e=new J;L(e);H(H(H(H(e,C(172)),d),C(397)),c);Bf(b,K(e));}
var AJ0=G();
function Wb(){B.call(this);this.uI=null;}
function A1Q(a,b){var c;c=a.uI.mw;c.f9=Gg(b,ABD(c));}
function AD3(){B.call(this);this.E6=null;}
function AYe(a,b){return 0;}
function AMZ(){var a=this;B.call(a);a.kZ=null;a.pH=null;a.gl=null;a.GI=null;}
function ADU(a){var b=new AMZ();A47(b,a);return b;}
function A47(a,b){var c,d,e;c=null;d=null;e=null;a.kZ=c;a.pH=d;a.gl=b;a.GI=e;}
function AEd(a){var b,c;b=a.gl;if(b===null)return C(21);c=AHC(b,C(398));return c==(-1)?a.gl:DD(a.gl,c+1|0);}
function AZU(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.kZ,c.kZ)&&BR(a.pH,c.pH)&&BR(a.gl,c.gl)?1:0;}return 0;}
function JE(){var a=this;B.call(a);a.vu=null;a.rN=null;a.su=null;a.B7=null;a.tK=null;a.lN=null;}
function Ba_(a,b,c,d,e,f){var g=new JE();Po(g,a,b,c,d,e,f);return g;}
function Po(a,b,c,d,e,f,g){a.vu=b;a.rN=c;a.su=d;a.B7=e;a.tK=f;a.lN=g;}
function KX(){var a=this;B.call(a);a.sF=null;a.qv=null;a.v3=null;}
function Bba(a,b,c){var d=new KX();LK(d,a,b,c);return d;}
function LK(a,b,c,d){a.sF=b;a.qv=c;a.v3=d;}
function WG(a,b){return !b?a.qv:a.v3;}
function AKL(){var a=this;B.call(a);a.kc=null;a.mC=null;a.oT=null;}
function AJI(a,b,c){var d=new AKL();A6e(d,a,b,c);return d;}
function A6e(a,b,c,d){a.kc=b;a.mC=c;a.oT=d;}
function Cy(){CE.call(this);this.oG=null;}
var Bbb=null;var Bbc=null;var Bbd=null;var Bbe=null;var Bbf=null;var Bbg=null;var Bbh=null;var Bbi=null;var Bbj=null;var Bbk=null;var Bbl=null;var Bbm=null;var Bbn=null;var Bbo=null;var Bbp=null;var Bbq=null;function AHc(){AHc=Bm(Cy);A1W();}
function Eo(a,b,c){var d=new Cy();AC2(d,a,b,c);return d;}
function A5h(a,b,c,d){var e=new Cy();AJh(e,a,b,c,d);return e;}
function ALV(){AHc();return Bbq.eb();}
function AC2(a,b,c,d){AHc();Dv(a,b,c);a.oG=Kk(d,null);}
function AJh(a,b,c,d,e){AHc();Dv(a,b,c);a.oG=Kk(d,e);}
function A1W(){var b;b=new Cy;F3();AC2(b,C(354),0,Baz);Bbb=b;Bbc=Eo(C(355),1,S(C(399)));Bbd=Eo(C(357),2,S(C(400)));Bbe=Eo(C(359),3,S(C(401)));Bbf=Eo(C(361),4,S(C(399)));Bbg=Eo(C(362),5,DF(188,63,60));Bbh=Eo(C(364),6,S(C(402)));Bbi=Eo(C(366),7,S(C(403)));Bbj=Eo(C(368),8,S(C(404)));Bbk=A5h(C(370),9,Baz,DF(52,65,52));Bbl=A5h(C(371),10,S(C(405)),S(C(406)));Bbm=Eo(C(372),11,S(C(407)));Bbn=Eo(C(374),12,S(C(408)));Bbo=Eo(C(376),13,Baz);b=Eo(C(377),14,S(C(378)));Bbp=b;Bbq=I(Cy,[Bbb,Bbc,Bbd,Bbe,Bbf,Bbg,Bbh,Bbi,Bbj,Bbk,
Bbl,Bbm,Bbn,Bbo,b]);}
var ANv=G();
function KJ(b,c){var d,e,f;if(c<=0)return C(21);d=B6(c);e=d.data;e[0]=AMM(Eh(b,52));f=1;while(f<c){e[f]=AMM(Eh(b,62));f=f+1|0;}return GI(d);}
function AMM(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AHw=G();
function ANE(){var a=this;B.call(a);a.Le=null;a.QW=null;a.Kr=0;a.Rv=0;}
var AGg=G(0);
function AMU(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BC,8);e=DU(8);f=B6(16);g=0;h=0;i=0;while(true){j=BQ(i,b);if(j>0)break;k=j>=0?10:(c.ba(C5(i))).nw;if(k==10){d=D2(ET(f,0,g),d,h);e=ADZ(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Lk(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=D2(ET(f,0,g),d,h);j=i+1|0;if(j<b&&(c.ba(C5(j))).nw==10){e=ADZ(1,e,h);i=j;}else e=ADZ(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new AA8;d=AG4(d,h);if(m.length!=h)e=O8(e,h);c.kP=d;c.D8=e;return c;}
function AKK(b){var c,d;c=M(b);BG(b);d=new Qt;d.vo=b;return AMU(c,d);}
var C9=G();
var AMl=G(C9);
var AMK=G(C9);
var AK0=G(C9);
var ALa=G(C9);
var AM2=G(C9);
function WK(){B.call(this);this.sY=null;}
function ASg(a){var b;b=a.sY;Bf(Bj(),b);}
var Ic=G(CE);
var Bbr=null;var A_S=null;var Bbs=null;function AIb(){AIb=Bm(Ic);A0F();}
function A7z(a,b){var c=new Ic();AGS(c,a,b);return c;}
function AVc(){AIb();return Bbs.eb();}
function AGS(a,b,c){AIb();Dv(a,b,c);}
function A0F(){var b;Bbr=A7z(C(409),0);b=A7z(C(410),1);A_S=b;Bbs=I(Ic,[Bbr,b]);}
function Qt(){B.call(this);this.vo=null;}
function AYJ(a,b){return Qs(Q(a.vo,b.bs));}
function AA8(){var a=this;B.call(a);a.kP=null;a.D8=null;}
var AKH=G();
function Ck(b,c){return C6(b*c);}
var AHm=G();
function UK(){var a=this;B.call(a);a.r$=null;a.vz=null;a.B_=null;}
var AKN=G(0);
function AJY(b){if(b===null)return C(183);if(!DJ(b,C(411))&&!DJ(b,C(412))&&!DJ(b,C(413))&&!DJ(b,C(414))&&!DJ(b,C(415))&&!DJ(b,C(416))){if(DJ(b,C(417)))return C(194);if(DJ(b,C(418)))return C(210);if(DJ(b,C(419)))return C(205);if(!DJ(b,C(420))&&!DJ(b,C(421)))return C(183);return C(422);}return C(211);}
function AKf(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kz(b)){case -1655966961:if(!Bk(b,C(205)))break a;c=4;break a;case 3401:if(!Bk(b,C(210)))break a;c=3;break a;case 98723:if(!Bk(b,C(211)))break a;c=2;break a;case 3213227:if(!Bk(b,C(422)))break a;c=5;break a;case 3254818:if(!Bk(b,C(194)))break a;c=1;break a;case 3556653:if(!Bk(b,C(183)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=D4();e
=new J;L(e);H(H(e,C(423)),b);Bf(d,K(e));c=0;break b;}c=0;}return c;}
function AD4(){B.call(this);this.xE=null;}
function AYl(a,b,c,d){return Ms(a.xE,b,c,d);}
function Y6(){B.call(this);this.k0=null;}
function A7H(a,b){var c,d,e,f,g;c=a.k0;d=c.m7;if(d!==null){e=b.k;f=e.a-d.a|0;g=e.b-d.b|0;e=c.k4;e.a=Fk(0,e.a+f|0,c.hq.a-c.ko.a|0);c=a.k0;d=c.k4;d.b=Fk(0,d.b+g|0,c.hq.b-c.ko.b|0);}a.k0.m7=b.k;return 1;}
var AHu=G();
function MD(){return "clipboard" in $rt_globals.navigator?1:0;}
function AJb(){var a=this;B.call(a);a.c8=null;a.cu=null;a.k5=null;a.lj=null;a.oK=null;a.kx=null;}
function AAz(a){var b=new AJb();A4y(b,a);return b;}
function A4y(a,b){a.cu=BO();a.kx=BaT;a.c8=b;Z(b.dv,a);}
function HR(a,b,c){a.k5=c;a.oK=b;b=B9(a.cu);while(Cb(b)){Kh(Cc(b),a.oK);}}
function Nf(a,b,c,d){a.kx=d;Tk(a,b,c);}
function Tk(a,b,c){var d,e;d=a.c8;e=d.bV;if(Bb(e.a,e.b)&&d.ct!==0.0){if(a.k5!==null&&!J4(a)){a.lj=FC(a.c8,a.k5);d=WM(a,b,c,null,null);b=new S7;b.vh=a;d.ln=b;Cx(a.c8,a);return;}b=new BU;X(b);N(b);}c=new CV;Bn(c,C(424));N(c);}
function M2(a){if(J4(a)){ADb(a.c8,a);AC3(a,null);a.kx.e();a.kx=BaT;}}
function WM(a,b,c,d,e){var f,g,h;f=ALU();AF6(f);N3(f,c.cb());Kh(f,a.oK);Kf(f,a.lj,a.c8);if(d===null)g=b.a;else{g=b.a;g=a.c8.bV.a<((g+(ER(d)).a|0)+(ER(f)).a|0)?g-(ER(f)).a|0:(g+(ER(d)).a|0)-d.gB|0;}h=b.b;b=a.c8.bV;NZ(f,Bd(0,Be(g,b.a-(ER(f)).a|0)),Bd(0,Be(h,b.b-(ER(f)).b|0)));b=new ADK;b.wN=a;b.wK=f;b.wL=e;f.pO=b;BA(a.cu,f);return f;}
function A7h(a,b,c){var d;a.lj=FC(a.c8,a.k5);d=B9(a.cu);while(Cb(d)){Kf(Cc(d),a.lj,a.c8);}}
function AGn(a){var b,c;if(EU(a.cu))return;Ca(a.c8.bP,1);b=0;while(true){c=a.cu;if(b>=c.p)break;MR(BI(c,b),a.c8);b=b+1|0;}}
function ASY(a,b){var c;if(!J4(a))return 0;a:{switch(b.bb){case 27:M2(a);c=1;break a;default:}c=0;}return c;}
function AC3(a,b){var c,d;c=a.cu.p-1|0;a:{while(true){if(c<0)break a;d=BI(a.cu,c);if(b===d)break;E2(a.cu,c);Nx(d);c=c+(-1)|0;}}}
function J4(a){return a.cu.p<=0?0:1;}
function AUZ(a){var b,c;Tl(a.c8.dv,a);ADb(a.c8,a);b=a.cu;c=B9(b);while(Cb(c)){Nx(Cc(c));}I3(b);}
function Yt(){B.call(this);this.ze=null;}
function ASF(a,b){M3(a.ze,b);}
function Wn(){B.call(this);this.A3=null;}
function A6V(a,b){var c,d,e,f;c=a.A3;if(c.g$!=3&&c.fy!=3){b=b.data;c.hp=3;d=CL(b[0]);e=E6(b[1]);ON(c.h,d,e);if(c.gh){b=Fh(c);f=Kn(EN(),c.jA);c=new J;L(c);H(Id(H(H(c,b),C(425)),f),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}
function R2(){B.call(this);this.AG=null;}
function AZd(a,b){var c,d,e,f,g,h;c=a.AG;if(c.fy!=3){d=b.data;c.g$=3;if((CL(d[2])).data[0]!=1)M3(c,b);else{e=CL(d[0]);f=E6(d[1]);g=c.hp!=3?0:1;Sv(c.h,e,f,g);if(c.gh){b=Fh(c);h=Kn(EN(),c.jA);c=new J;L(c);H(Id(H(H(c,b),C(426)),h),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function PE(){B.call(this);this.me=null;}
function AQ7(a){return a.me;}
var AMg=G(0);
var Mx=G(0);
function R8(){B.call(this);this.vF=null;}
function AZC(a,b){return LR(a.vF,b);}
function Qh(){B.call(this);this.Cd=null;}
function A55(a,b){var c,d;c=a.Cd;d=b.bs;return Qs(c.charCodeAt(d)&65535);}
var AIB=G();
function AK9(b,c,d,e,f,g){g.a=c.a;g.b=f;Bv(b,d.a,d.b,g,e);Bv(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bv(b,d.a,d.b+f|0,g,e);Bv(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AMs(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bv(b,j,k,i,h);Bv(b,j,k,i,h);Bv(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bv(b,l,j,i,h);Bv(b,l,j,i,h);Bv(b,l+g|0,j+g|0,i,h);}
function RL(){var a=this;B.call(a);a.c9=null;a.q0=null;a.fS=null;a.ey=0;a.cM=0;a.jN=null;a.kt=null;a.hZ=0;a.yg=0;}
function Qe(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.ey;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}E8(c);j=d+(-1)|0;b=Dq(d);d=Bb(j,a.cM)%a.fS.b|0;Hh(a,c,b,a.hZ,g);Km(a.c9,c,0,d);if(!(j%a.ey|0))break;d=j;}}else{E8(b);k=a.ey-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Hh(a,b,Dq(j),Bb(a.cM,k)+a.hZ|0,g);k=k+(-1)|0;j=h;}CU(a.c9,b);j=Bd(i,e);}return j;}k=a.ey;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}E8(c);b=Dq((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cM)%a.fS.b|0;Hh(a,c,b,a.hZ,g);Km(a.c9,c,0,d);if(!(j%a.ey|0))break;d=j;}}else{E8(b);d=0;while(d<a.ey){h=h+1|0;Hh(a,b,Dq((h>e?h-f|0:h)+f|0),Bb(a.cM,d)+a.hZ|0,g);d=d+1|0;}CU(a.c9,b);j=Be(i,e);}return j;}
function Xo(b,c,d,e){c=c.data;return d<c.length&&c[d]?Is(b.d3,b,c[d]):e.lD;}
function N2(a,b,c,d,e,f){DR(b,a.q0.a+d.a|0,c+d.b|0,a.jN,a.kt,a.c9,e,f,a.yg);}
function Hh(a,b,c,d,e){B1(b,c,a.fS.a-20.0*e,d);}
var AGk=G();
function GK(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AGM(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function Vq(){var a=this;B.call(a);a.qT=null;a.qU=null;a.iS=null;}
function A4o(a,b,c){var d=new Vq();AH6(d,a,b,c);return d;}
function AH6(a,b,c,d){a.qT=b;a.qU=c;a.iS=d;}
function He(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iS.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.iy:i.iz;k=!c?i.jx:i.jz;l=BQ(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function JN(){var a=this;B.call(a);a.iz=0;a.jz=0;a.iy=0;a.jx=0;a.pD=0;}
function Ee(a,b,c,d,e){var f=new JN();A5j(f,a,b,c,d,e);return f;}
function A5j(a,b,c,d,e,f){a.iz=b;a.jz=c;a.iy=d;a.jx=e;a.pD=f;}
var TF=G(0);
var A_Y=null;function AMA(){A_Y=new Ss;}
function AD$(){var a=this;B.call(a);a.tM=null;a.tN=null;}
function AZD(a,b){var c,d,e;c=a.tM;d=a.tN;c=c.fW.eF.w;e=c.a;b=b.k;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
var GF=G(JG);
var AFm=G(FQ);
function AFp(){B.call(this);this.wt=null;}
function AYd(a,b){var c,d;c=a.wt;W5(c,FP(c,b.k));b=Bl(c);d=c.d;OH(b,d.y,d.B);ID(c);}
var AGK=G(0);
function ARA(b){return 112<=b&&b<=123?1:0;}
function VB(){B.call(this);this.yV=null;}
function A6u(a,b){var c,d;c=a.yV;d=c.ex+1|0;c.ex=d;c=new J;L(c);H(H(V(c,d),C(427)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function W_(){B.call(this);this.y7=null;}
function A4W(a){var b,c;b=a.y7;c=new J;L(c);H(H(H(c,C(428)),b),C(429));$rt_globals.console.info($rt_ustr(K(c)));}
function EA(){var a=this;B.call(a);a.J=null;a.hE=null;a.gM=null;}
function KK(a,b,c,d){a.J=b;a.gM=c;a.hE=d;}
function Lb(a,b,c){return Ux(a,b,H5(BF(a)),c);}
function Ux(a,b,c,d){var e,f,g,h,i,j,k;e=A6U(a.J.F,b);Eu(e,a.gM.cd);CZ(e,c);b=new XQ;b.w_=a;b.xa=e;UC(e,b);b=new XP;b.xS=a;e.x6=b;b=e.bh.bV;f=AEq(e);g=Cw(e.bh,5.0);h=Cw(e.bh,d);i=h?h+f|0:0;c=BK(g+h|0,(g+i|0)+f|0);j=new Bh;k=b.a;g=g*2|0;RG(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);EJ(e,c,j);return e;}
function AKv(a,b){var c,d,e;c=a.mU(b);if(c!==null){d=a.J;e=a.gM;FA(d,e.cd,e.f1,b,c);}return c===null?0:1;}
function AAD(){var a=this;EA.call(a);a.jp=null;a.bZ=null;a.ee=null;a.dX=null;a.fQ=null;}
function APf(a){var b;a.jp=null;a.bZ=null;b=null;a.dX=b;a.ee=b;}
function A1w(a,b){var c,d,e,f;if(B3(a.bZ.cV,b))return ABt(a,1,C(283));if(B3(a.bZ.cp,b))return ABt(a,0,C(284));c=P(By,2);d=c.data;b=new By;e=new AA0;e.rg=a;Ce(b,e,C(283));d[0]=b;b=new By;f=new AAZ;f.xe=a;Ce(b,f,C(284));d[1]=b;return CQ(c);}
function ABt(a,b,c){var d,e,f,g;d=P(By,1);e=d.data;f=new By;g=new AEm;g.Bi=a;g.Bj=b;Ce(f,g,c);e[0]=f;return CQ(d);}
function MF(a,b,c,d,e){var f,g,h,i;a:{if(b instanceof F$){f=b;if(c instanceof F$){g=c;IX(f);IX(g);b=a.J.F.b9;c=new ACr;c.sc=a;c.sg=f;c.sf=g;c.se=d;c.sd=e;CG(b,c,C(430),I(B,[f.g_,g.g_]));break a;}}if(b instanceof IY){h=b;if(c instanceof IY){i=c;IX(h);IX(i);b=a.J.F.b9;f=new Ru;f.uD=a;f.uC=h;f.uA=i;f.uz=d;f.uB=e;CG(b,f,C(431),I(B,[h.eP,i.eP]));break a;}}c=new BU;Bn(c,C(432));N(c);}IB(a);}
function IB(a){var b,c;b=a.bZ;c=b.cV;if(c!==null&&b.cp!==null){Di(c);Di(a.bZ.cp);Oy(a.bZ,AIx(a));return;}}
function AIx(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=Wy(a.bZ.cV);c=Wy(a.bZ.cp);ADY(Bj());d=P(JN,1);e=0;f=0;g=0;a:{b:while(true){h=b.data;i=h.length;if(f>=i)break a;j=c.data;k=j.length;if(g>=k)break a;if(h[f].bO==j[g].bO&&h[f].bY==j[g].bY){l=h[f].bO;m=h[f].bY;n=0;o=0;c:{while(f<i){if(g>=k)break c;if(h[f].bY!=m)break c;if(j[g].bY!=m)break c;f=f+1|0;n=n+1|0;g=g+1|0;o=o+1|0;}}d:{while(f<i){if(h[f].bY!=m)break d;f=f+1|0;n=n+1|0;}}while(g<k&&j[g].bY==m){g=g+1|0;o=o+1|0;}p=Ee(f-n|0,n,g-o|0,o,l);l=e+1|0;d=D2(p,d,e);e
=l;continue;}q=h[f].lF<=j[g].lF?0:1;e:{if(!q){p=ADJ(a,c,g,f);if(p!==null){g=g+p.jx|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}p=YC(a,b,f,g);if(p===null)break e;f=f+p.jz|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}p=YC(a,b,f,g);if(p!==null){f=f+p.jz|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}p=ADJ(a,c,g,f);if(p!==null){g=g+p.jx|0;l=e+1|0;d=D2(p,d,e);e=l;continue b;}}if(h[f].bO&&h[f].bO!=3){if(j[g].bO&&j[g].bO!=3)break;p=Ee(f,0,g,1,j[g].bO);l=e+1|0;d=D2(p,d,e);g=g+1|0;}else{p=Ee(f,1,g,0,h[f].bO);l=e+1|0;d=D2(p,d,e);f=f+1|0;}e
=l;}p=new CV;X(p);N(p);}while(f<i){p=Ee(f,1,g,0,h[f].bO);l=e+1|0;d=D2(p,d,e);f=f+1|0;e=l;}while(true){b=c.data;if(g>=b.length)break;p=Ee(f,0,g,1,b[g].bO);l=e+1|0;d=D2(p,d,e);g=g+1|0;e=l;}return A4o(null,null,CT(d,e));}
function YC(a,b,c,d){var e,f;b=b.data;if(b[c].bO!=1)return null;e=b[c].bY;f=0;while(c<b.length&&b[c].bY==e){c=c+1|0;f=f+1|0;}return Ee(c-f|0,f,d,0,1);}
function ADJ(a,b,c,d){var e,f;b=b.data;if(b[c].bO!=2)return null;e=b[c].bY;f=0;while(c<b.length&&b[c].bY==e){c=c+1|0;f=f+1|0;}return Ee(d,0,c-f|0,f,2);}
function Iz(a,b){var c,d;c=a.J.F.b9;d=new AFl;d.ta=a;d.s_=b;GB(c,d);}
function AJJ(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;g=f.data;if(!g.length)return;g=CL(g[0]);h=g.data;i=h[0];j=h[1];k=2+i|0;h=ALJ(g,2,k);l=ALJ(g,k,k+j|0);m=1+i|0;n=AJi(f,1,m,F($rt_arraycls(HK)));o=AJi(f,m,m+j|0,F($rt_arraycls(HK)));ACs(d,i);ACs(e,j);p=0;q=0;r=1;a:while(true){if(!r){IB(a);if(E7(b))DX(b);else LI(b);if(E7(c))DX(c);else LI(c);return;}r=0;while(p<i&&q<j&&!h.data[p]&&!l.data[q]){b:{f=n.data;s=HQ(a.fQ);r=1;(Gl(d,p)).bY=s;(Gl(e,q)).bY=s;s=p+1|0;m=q+1|0;t=f[p];if(E3(t,J$)){g=o.data;t=t;u=g[q];if
(E3(u,J$)){u=u;MF(a,AAq(a,b,t,p),AAq(a,c,u,q),Fu(d,p),Fu(e,q));break b;}}t=f[p];if(!E3(t,JH))break a;f=o.data;t=t;u=f[q];if(!E3(u,JH))break a;u=u;MF(a,ADe(a,b,t,p),ADe(a,c,u,q),Fu(d,p),Fu(e,q));}p=s;q=m;}if(r)continue;m=HQ(a.fQ);while(p<i&&h.data[p]==1){r=1;(Gl(d,p)).bO=1;(Gl(d,p)).bY=m;MA(Fu(d,p),1);p=p+1|0;}if(r){OX(a.fQ,d,e);continue;}while(q<j&&l.data[q]==2){r=1;(Gl(e,q)).bO=2;(Gl(e,q)).bY=m;MA(Fu(e,q),2);q=q+1|0;}if(r)OX(a.fQ,d,e);}b=new CV;X(b);N(b);}
function AAq(a,b,c,d){return E7(b)<=0?AI4(c,b.g4):b.eE.data[d];}
function ADe(a,b,c,d){return E7(b)<=0?A7r(EE(c),b.it+1|0,c):b.fA.data[d-b.eE.data.length|0];}
var WC=G();
function AXw(a){return Oz();}
function ADQ(){var a=this;EA.call(a);a.ij=null;a.lc=null;a.d4=null;a.nH=null;a.rn=null;}
function AVT(a,b,c){var d=new ADQ();AMX(d,a,b,c);return d;}
function AMX(a,b,c,d){KK(a,b,c,d);d=I8(b);a.lc=d;b=G5(d);a.d4=b;b=Lb(a,b,25.0);a.ij=b;d=new AE5;d.Cr=a;b.i5=d;d=new AE4;d.rS=a;b.i1=d;a.d4.lW=a;ANH(a,c);DY(a.J,a.ij);}
function K8(a){Cx(a.J.F,a.d4);}
function Up(a){return a.J.F.cf;}
function ANH(a,b){Eu(a.ij,b.cd);Gb(a.lc,b);E_(a.d4,b);}
function L5(a,b){var c,d;c=a.d4;Cx(c.cj,c);c=a.d4;d=new R4;d.uL=a;d.uK=b;Ga(c,b,d);}
function APo(a){var b;if(Up(a)===a.d4)Cx(a.J.F,null);b=a.rn;if(b!==null)b.g(a);a.ij=null;a.d4=null;a.lc=null;a.nH=null;a.rn=null;}
function A1e(a,b){var c,d,e,f,g,h;c=new By;d=new AEe;d.rW=a;Ce(c,d,C(433));e=a.lc;f=a.d4;d=a.hE;g=a.J;BG(g);h=new AEg;h.A6=g;return NQ(JM(e,f,d,a,f,h),b,c);}
function ABV(a){var b,c,d;b=a.J;c=b.F.b9;d=new ABO;d.za=a;F5(c,NT(b,d));}
function A29(a,b){if(AEh(b)){ABV(a);return 1;}if(b.bb!=27)return 0;if(!AAy(b))AFY(a.J);else Nz(a.ij);return 1;}
var SZ=G();
function ATO(a){return EQ(1);}
var Lz=G(0);
function AO4(a,b,c){Hw(b);}
function ANf(a,b){var c;c=new PH;c.zS=a;c.zR=b;return c;}
function Mm(){var a=this;EA.call(a);a.lb=null;a.cN=null;a.yo=null;a.iZ=null;a.f0=null;a.tI=null;}
function Bbt(a,b,c){var d=new Mm();AEX(d,a,b,c);return d;}
function AEX(a,b,c,d){var e,f;KK(a,b,c,d);a.iZ=Ks();a.f0=Ks();e=new RX;Fi(e);e.jL=I8(b);d=U7(b.F);e.eL=d;e.li=G_(d,b.F);d=new Qu;Fi(d);f=new B4;ARO();AMv(f,A_U);d.Cs=f;e.po=d;d=G5(e.jL);e.go=d;e.Gz=a;Nc(e,I(CH,[e.li,e.po,d]));e.Eg=EQ(1);a.cN=e;Wp(e,c);f=Iy(C(434),0);DX(f);c=new ACc;c.sI=a;f.cC=c;D9(a.cN.eL,f);Z6(a.cN.eL);c=Ux(a,a.cN,C(435),0.0);a.lb=c;d=new ACb;d.xk=a;c.i5=d;d=new ACd;d.u4=a;c.i1=d;DY(b,c);Cx(b.F,a.cN.eL);}
function AZF(a,b){var c,d,e,f,g,h,i;if(B3(a.cN.go,b)){c=a.cN;d=c.jL;c=c.go;e=a.hE;f=a.J;BG(f);g=new V5;g.Dk=f;return ABq(JM(d,c,e,a,c,g),b);}h=P(By,1);i=h.data;b=new By;c=new V4;c.rk=a;Ce(b,c,C(436));i[0]=b;return CQ(h);}
function AFq(a){var b,c;b=a.J.F.b9;c=new Sk;c.rj=a;GB(b,c);}
function A2h(a){a.lb=null;a.cN=null;a.iZ=null;a.f0=null;}
function A0v(a,b){a.gM=b;Eu(a.lb,b.cd);Wp(a.cN,b);}
function A0t(a,b){var c,d,e;c=b.eP;d=ES(c);a.yo=d;e=CC(a.iZ,d);if(e!==null)RY(a,e);else{b=Bj();e=new J;L(e);H(H(e,C(437)),d);Bf(b,K(e));if(HX(a.f0,d)){b=new J;L(b);H(H(b,C(438)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D6(a.f0,d,d);b=new RA;b.wm=a;b.wn=d;e=new RB;e.tZ=a;e.tY=d;Wq(c,b,e);}}}
function RY(a,b){It(a.cN.go,b);b=a.cN;Cx(b.jL.cl.F,b.go);}
function AVP(a,b){var c;AFt(b);if(E7(b)>0)Di(a.cN.eL);c=b.eE.data;if(c.length==1&&!b.fA.data.length)c[0].cC.e();}
function A3L(a,b){if(E7(b)>0)Di(a.cN.eL);LX(b);}
function A3b(a,b,c){if(AJY(c)!==C(183))RO(b);else Hw(b);}
var AEY=G();
function AXo(a){return EQ(1);}
var AFG=G(DI);
var Bbu=null;function YI(b){var c;c=new J;L(c);return K(Dg(c,b));}
function AIt(){Bbu=F($rt_floatcls());}
var GZ=G();
var Bbv=null;var Bbw=null;var A$Y=null;var A$X=null;var A$W=null;function ALM(){Bbv=D$([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bbw=AKO([Bq(1),Bq(10),Bq(100),Bq(1000),Bq(10000),Bq(100000),Bq(1000000),Bq(10000000),Bq(100000000),Bq(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A$Y=AKO([Bq(1),Bq(10),Bq(100),Bq(10000),Bq(100000000),
D(1874919424, 2328306)]);A$X=new ADn;A$W=new Vv;}
var Kd=G();
var Bbx=0;var Bby=null;var Bbz=null;function AMb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rX=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nM=0;c.ny=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Jf(Dl(Bq(d),Bq(8388608)),F2)){d=d<<1;f=f+(-1)|0;}}g=AMk(Bbz,f);if(g<0)g= -g|0;h=Bbz.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ka(d,Bby.data[e],i);if(j<Bbx){while($rt_ucmp(j,Bbx)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=Bbz.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ka(d,
Bby.data[e],i);}e=d<<1;d=e+1|0;h=Bby.data;f=g+1|0;k=h[f];l=i-1|0;m=Ka(d,k,l);n=Ka(e-1|0,Bby.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DO(Bq(d),Bq(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.nM=d;c.ny=g-50|0;}
function Ka(b,c,d){return Hi(GC(Cm(Dl(Bq(b),D(4294967295, 0)),Dl(Bq(c),D(4294967295, 0))),32-d|0));}
function ALh(){Bbx=$rt_udiv((-1),10);Bby=D$([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Bbz=D$([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Vv(){var a=this;B.call(a);a.nM=0;a.ny=0;a.rX=0;}
function O_(){var a=this;B.call(a);a.FW=null;a.xZ=0.0;a.Ep=0.0;a.g0=null;a.jW=null;a.oH=null;a.gF=0;}
function ANl(a,b){var c;if(b!==null){a.jW=b;return a;}c=new BU;Bn(c,C(439));N(c);}
function AIj(a,b){var c;if(b!==null){a.oH=b;return a;}c=new BU;Bn(c,C(439));N(c);}
function AAt(a,b,c,d){var e,f,g,$$je;e=a.gF;if(!(e==2&&!d)&&e!=3){a.gF=d?2:1;while(true){try{f=AJn(a,b,c);}catch($$e){$$je=Fc($$e);if($$je instanceof Bt){g=$$je;N(AZ4(g));}else{throw $$e;}}if(IJ(f))return f;if(Jz(f)){if(d&&El(b)){g=a.jW;HN();if(g===A_q)return EK(Cl(b));if(Cl(c)<=M(a.g0))return A_t;FO(b,b.bf+Cl(b)|0);if(a.jW===A_r)N0(c,a.g0);}return f;}if(Sx(f)){g=a.jW;HN();if(g===A_q)return f;if(g===A_r){if(Cl(c)<M(a.g0))return A_t;N0(c,a.g0);}FO(b,b.bf+LH(f)|0);}else if(MW(f)){g=a.oH;HN();if(g===A_q)break;if
(g===A_r){if(Cl(c)<M(a.g0))return A_t;N0(c,a.g0);}FO(b,b.bf+LH(f)|0);}}return f;}b=new CV;X(b);N(b);}
function AKQ(a,b){var c,d,e,f;c=a.gF;if(c&&c!=3){b=new CV;X(b);N(b);}if(!Cl(b))return AJR(0);if(a.gF)a.gF=0;d=AJR(Bd(8,Cl(b)*a.xZ|0));while(true){e=AAt(a,b,d,0);if(Jz(e))break;if(IJ(e))d=AB3(a,d);if(!Ok(e))continue;Vu(e);}b=AAt(a,b,d,1);if(Ok(b))Vu(b);while(true){f=a.gF;if(f!=3&&f!=2)break;a.gF=3;if(Jz(A_u)){d.eI=d.bf;d.bf=0;d.kh=(-1);return d;}d=AB3(a,d);}b=new CV;X(b);N(b);}
function AB3(a,b){var c,d,e;c=b.i4;d=Lk(c,Bd(8,c.data.length*2|0));e=ALW(d,0,d.data.length);FO(e,b.bf);return e;}
function AEA(){var a=this;B.call(a);a.bt=0;a.bx=0;}
function D1(a,b){var c=new AEA();AL2(c,a,b);return c;}
function AL2(a,b,c){a.bt=b;a.bx=c;}
function AOd(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.bt==c.bt&&a.bx==c.bx?1:0;}return 0;}
function AVd(a){var b,c,d,e;b=P(B,2).data;b[0]=C5(a.bt);b[1]=C5(a.bx);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bs)|0;d=d+1|0;}return c;}
function AON(a){var b,c,d;b=a.bt;c=a.bx;d=new J;L(d);Br(d,40);Br(V(H(V(d,b),C(38)),c),41);return K(d);}
function A4h(a,b){var c;b=b;c=BQ(a.bt,b.bt);if(!c)c=BQ(a.bx,b.bx);return c;}
var AHE=G(C9);
function V7(){B.call(this);this.E3=null;}
function AO_(a){Bf(Bj(),C(440));}
var AF1=G(0);
var BaT=null;function AI8(){BaT=new YH;}
function YE(){B.call(this);this.sQ=null;}
function A6q(a){AFC(a.sQ);}
function YB(){B.call(this);this.r9=null;}
function AQJ(a){ACE(a.r9);}
function YA(){B.call(this);this.vd=null;}
function AOE(a){AAK(a.vd);}
function YD(){B.call(this);this.Aq=null;}
function A7I(a){AFk(a.Aq);}
function AAQ(){B.call(this);this.BT=null;}
function AWl(a){AAB(a.BT);}
function AAP(){B.call(this);this.sP=null;}
function A2v(a){var b;b=a.sP;UP(new NM,b.v,b.hy,new Xz);}
function AAS(){B.call(this);this.xh=null;}
function A32(a){var b;b=a.xh;AEX(new Mm,b.v,b.hy,new Rb);}
function AAR(){B.call(this);this.vW=null;}
function AWh(a){var b;b=a.vW;K8(AVT(b.v,b.hy,new XS));}
function Zt(){B.call(this);this.v5=null;}
function AS3(a){LC(a.v5);}
function S3(){B.call(this);this.yW=null;}
function A2O(a){ADC(a.yW);}
function AAr(){B.call(this);this.Dd=null;}
function AYX(a,b){var c,d;c=a.Dd;d=c.ex+1|0;c.ex=d;c=b.jl;b=new J;L(b);H(H(V(b,d),C(441)),c);$rt_globals.console.info($rt_ustr(K(b)));}
var Ss=G();
function A3g(a,b){}
function Ip(){CH.call(this);this.cz=null;}
function Nc(a,b){var c;if(a.cz===null){a.cz=b;return;}c=new DW;X(c);N(c);}
function A3k(a){var b,c,d;b=a.cz.data;c=b.length;d=0;while(d<c){b[d].bX();d=d+1|0;}}
function ATF(a,b){var c,d,e;c=a.cz.data;d=c.length;e=0;while(e<d){c[e].dT(b);e=e+1|0;}}
function AYG(a,b){var c,d,e,f;c=0;d=a.cz.data;e=d.length;f=0;while(f<e){c=c|d[f].cL(b);f=f+1|0;}return c;}
function AP6(a,b,c,d){Ko(a,b,c,d);a.Dj();}
function A5_(a,b,c,d){var e,f,g,h,i;e=0;f=a.cz.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.k))e=e|i.cU(b,c,d);h=h+1|0;}return e;}
function AWj(a,b,c){var d,e,f,g,h;d=a.cz.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.k)){h=g.cD(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A6l(a,b,c){var d,e,f,g,h;d=0;e=a.cz.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.k))d=d|h.dW(b,c);g=g+1|0;}return d;}
function A6N(a,b){var c,d,e,f,g;c=0;d=a.cz.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.k))c=c|g.b3(b);f=f+1|0;}return c;}
function AQH(a,b,c,d){var e,f,g,h,i;e=0;f=a.cz.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.k))e=e|i.dU(b,c,d);h=h+1|0;}return e;}
function A6y(a){var b,c,d;b=a.cz.data;c=b.length;d=0;while(d<c){b[d].kK();d=d+1|0;}}
function IN(){Ip.call(this);this.e3=null;}
function QT(a,b){Fi(a);a.e3=AZv(b);}
function ASL(a){var b,c,d,e;b=Ck(20.0,a.b1);c=(a.j.a-b|0)/2|0;d=AL$(a.i);e=BK(c,a.j.b);a.cz.data[0].dV(d,e,a.b1);d.a=(a.i.a+a.j.a|0)-c|0;a.cz.data[1].dV(d,e,a.b1);e.a=(a.j.a-c|0)-c|0;d.a=a.i.a+c|0;a.cz.data[2].dV(d,e,a.b1);}
function AHL(){var a=this;IN.call(a);a.cV=null;a.cp=null;a.k9=null;a.mn=null;a.wF=null;}
function ANa(a){var b=new AHL();A3t(b,a);return b;}
function A3t(a,b){var c,d;QT(a,b);a.cV=U7(b);a.cp=U7(b);a.k9=G_(a.cV,b);a.mn=G_(a.cp,b);c=AOs(a.k9,a.cV);d=AOs(a.mn,a.cp);OZ(a.e3,c,d);a.wF=AJs(c,d);Nc(a,I(CH,[a.k9,a.mn,a.e3]));}
function O0(a,b){a.e3.iO=b;KI(a.cV,b);Kg(a.cV,a.k9);KI(a.cp,b);Kg(a.cp,a.mn);}
function Oy(a,b){a.wF.hr=b;a.e3.eO=b;}
function FI(){var a=this;CH.call(a);a.c4=null;a.N=null;a.fC=null;}
function BbA(){var a=new FI();Mq(a);return a;}
function Mq(a){Fi(a);a.c4=new Bh;a.N=new Bh;}
function A0_(a,b){a.fC=b;}
function Uq(a,b,c){Y(a.c4,b,c);}
function JC(a){var b;b=a.fC;if(b!==null)AEk(b);}
function AHD(a){var b;b=a.N;b.a=Yh(a,b.a);b=a.N;b.b=AEH(a,b.b);}
function AIR(a,b){var c,d;c=a.N.a;d=Yh(a,b);a.N.a=d;return c==d?0:1;}
function Pr(a,b){var c,d;c=a.N.b;d=AEH(a,b);a.N.b=d;return c==d?0:1;}
function AEH(a,b){return Bd(0,Be(b,a.c4.b-a.j.b|0));}
function Yh(a,b){return Bd(0,Be(b,a.c4.a-a.j.a|0));}
function Sm(){var a=this;FI.call(a);a.b5=null;a.et=null;a.iF=null;a.Ce=null;a.eH=null;a.ch=null;a.fn=null;a.gg=null;a.ed=0;a.gd=0;a.Di=null;a.er=0;a.fb=0;a.h6=0;a.gC=0;a.gq=0;a.c_=0;a.fo=null;a.kV=null;a.Ac=null;a.i2=null;}
function A99(a,b){var c=new Sm();ANj(c,a,b);return c;}
function ANj(a,b,c){Mq(a);a.et=TA();a.iF=new Bh;a.ch=BbB;a.fn=P(KD,0);a.er=0;a.fb=0;a.h6=0;a.gC=0;a.gq=0;a.fo=AKx(0);a.i2=Ks();a.b5=b;a.kV=c;a.Di=c;Ro(a);}
function Ro(a){a.ed=Ck(2.0,a.b5.ct);}
function WW(a){return a.ch.data.length?0:1;}
function Yw(a,b){UF(a);a.ch=b;}
function UF(a){Y(a.iF,0,0);}
function Xu(a,b,c){a.Ac=b;a.Ce=c;a.eH=null;a.fo=null;a.gd=0;UF(a);}
function A6s(a){a.gg=BY(a.gg,null);Y(a.iF,0,0);Fb(a.i2);a.fo=null;a.ch=BbB;a.fn=null;a.er=0;a.fb=0;a.h6=0;ACP(a.et);a.kV=null;}
function A0i(a,b,c){ZQ(a);Ro(a);a.eH=null;a.fo=null;a.gd=0;}
function AYu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KU(a.b5);if(WW(a))return;Ly(a);Cr(c,a.eH);d=Ev(a);e=AKe(c,a.gd);f=Be(IE(a.j.b,d),a.ch.data.length)+30|0;g=a.Ac.C7;h=a.fn.data;d=h.length;if(d<f){a:{i=a.gC;j=a.gq;k=a.ch;l=a.fo;m=a.i2;n=P(KD,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hv!==c){AEp(l,q,m);o[f]=Nq(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Nq(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Nq(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){AEp(l,c,m);h[f]=null;}f=f+1|0;}a.fn=n;Ct(a.iF,Np(a.fo));Z5(a,a.b5.bP);}a.gC=Be((a.N.b+a.ed|0)/(Ev(a)+a.ed|0)|0,a.ch.data.length-1|0);a.gq=Be((((a.N.b+a.et.u.b|0)-1|0)+a.ed|0)/(Ev(a)+a.ed|0)|0,a.ch.data.length-1|0);if(!a.fn.data.length)return;AJ_(a,e);AEf(a,b);q=g.B7;c=a.i;Bv(b,c.a,c.b,a.j,q);c=a.et.w;i=c.a;j=c.b;p=Cw(a.b5,2.0);s=a.b5.dB;t=a.gC;u=i+p|0;while(t<=a.gq){l=Zp(a,t);d=Bb(t,Ev(a));v
=t+1|0;w=d+Bb(v,a.ed)|0;x=u+a.er|0;y=x+a.fb|0;z=a.c_!=t?0:1;m=!z?q:g.tK;ba=!z?g.vu:g.lN;bb=!z?g.rN:g.lN;bc=!z?g.su:g.lN;bd=(j+w|0)-a.N.b|0;DR(b,u,bd,l.j5,l.uH,a.gg,ba,m,a.b5.cW);DR(b,x,bd,l.kw,l.lL,a.gg,bb,m,a.b5.cW);DR(b,y,bd,l.j6,l.lh,a.gg,bc,m,a.b5.cW);d=l.j5.a;be=u+d|0;Y(s,Bd(0,a.er-d|0),l.j5.b);Bv(b,be,bd,s,m);d=u+a.er|0;f=l.kw.a;bf=d+f|0;Y(s,Bd(0,a.fb-f|0),l.kw.b);Bv(b,bf,bd,s,m);d=l.j6.a;bg=y+d|0;Y(s,Bd(0,(((a.et.u.a-d|0)-a.fb|0)-a.er|0)-p|0),l.j6.b);Bv(b,bg,bd,s,m);bh=(i+a.j.a|0)-p|0;Y(s,p,Ev(a)+a.ed
|0);Bv(b,bh,bd,s,q);t=v;}Gz(b);}
function AJ_(a,b){var c,d,e,f,g,h;c=0;d=a.gC;while(d<=a.gq){e=Zp(a,d);if(!(e!==null&&e.hv===a.ch.data[d])){f=a.fn.data;g=a.ch;e=a.fo;h=a.i2;c=d%f.length|0;if(f[c]!==null)AEp(e,f[c],h);f[c]=Nq(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.iF,Np(a.fo));Z5(a,a.b5.bP);}}
function Z5(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.iF;c=Eg(b,c.a+150|0,c.b,a.b5.cW);Cr(c,a.eH);d=a.eH;e=d.eK;f=e-(e+d.e6)/16.0;g=a.fn.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hv.l2;k=d.lL;B1(c,j,k.bq+a.gd,f+k.bu);j=d.hv.mj;d=d.lh;B1(c,j,d.bq+a.gd,f+d.bu);}i=i+1|0;}a:{d=a.i2;if(d.dr>0){h=d.dh;i=0;b:while(true){g=d.ci.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cS;l=j.c2;k=k;l=l.mJ;B1(c,k,l.bq+a.gd,f+l.bu);j=j.df;if(h!=d.dh)break b;}i=i+1|0;}b=new IG;X(b);N(b);}}if(a.gg===null)a.gg=C4(b);CU(a.gg,
c);EP(c);}
function Zp(a,b){var c;c=a.fn.data;return c[b%c.length|0];}
function A4f(a,b){Ct(a.et.u,b);}
function A5r(a,b){Ct(a.et.w,b);}
function ZQ(a){var b,c,d,e,f,g,h,i,j;b=KU(a.b5);if(WW(a))return;Ly(a);Cr(b,a.eH);c=AKe(b,a.gd);d=a.ch.data;e=d.length;f=0;while(f<e){g=d[f];h=N$(c,g.h$);i=N$(c,g.l2);j=N$(c,g.mj);a.er=Bd(a.er,h);a.fb=Bd(a.fb,i);a.h6=Bd(a.h6,j);f=f+1|0;}}
function ASO(a,b){var c;c=ABQ(a,b.k);if(c>=0)a.c_=c;return Ft(a.et,a.i)&&Ha(a.b5.dc)?1:0;}
function AQP(a,b,c){if(!Ft(a.et,b.k)&&!LP(a.et)){b=a.Di;if(b!==null)b.e();}return null;}
function AU6(a,b,c,d){var e;if(d==1){e=ABQ(a,b.k);if(e>=0)VY(a,a.ch.data[e]);}return 1;}
function VY(a,b){a.kV.e();b.vj.e();}
function ABQ(a,b){var c,d,e;if(!a.fn.data.length)return (-1);c=Ev(a);d=(b.b-a.i.b|0)+a.N.b|0;e=a.ed;e=(d+e|0)/(c+e|0)|0;if(e<a.ch.data.length)return e;return (-1);}
function Ev(a){return Fl(a.eH);}
function Ly(a){var b;if(a.eH===null){b=FC(a.b5,a.Ce);a.eH=b;a.fo=AKx(Fl(b));a.gd=C6(a.eH.qO);}}
function A5E(a,b){var c,d,e;a:{switch(b.bb){case 13:VY(a,a.ch.data[a.c_]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.c_=a.gC;b=a.fC;c=a.N;JT(b,c.a,c.b-(a.j.b/2|0)|0);return 0;case 34:a.c_=a.gq;b=a.fC;c=a.N;JT(b,c.a,c.b+(a.j.b/2|0)|0);return 0;case 35:case 39:a.c_=a.ch.data.length-1|0;break a;case 36:case 37:a.c_=0;break a;case 38:d=a.c_;e=a.ch.data.length;a.c_=((d+e|0)
-1|0)%e|0;break a;case 40:a.c_=(a.c_+1|0)%a.ch.data.length|0;break a;default:break a;}a.kV.e();return 0;}e=a.c_;if(e<=a.gC)JT(a.fC,a.N.a,Bb(e,Ev(a))+Bb(a.c_,a.ed)|0);else if(e>=a.gq)JT(a.fC,a.N.a,(Bb(e+1|0,Ev(a))+Bb(a.c_+2|0,a.ed)|0)-a.j.b|0);return 0;}
var Wu=G();
function AW$(a){}
function AHb(){var a=this;CH.call(a);a.o7=null;a.y8=null;a.B9=null;a.bW=null;a.dM=null;a.d0=null;a.vC=null;a.rU=null;a.wQ=0.0;a.qd=null;a.pz=null;}
function G_(a,b){var c=new AHb();AYa(c,a,b);return c;}
function AYa(a,b,c){var d;c=c.dc;Fi(a);d=new QR;d.Ab=a;a.y8=d;d=new QQ;d.A7=a;a.B9=d;a.wQ=10.0;a.bW=b;a.o7=c;b.fC=a;}
function AVR(a){var b;b=a.bW;b.fC=null;a.bW=BY(b,null);}
function JS(a,b,c){var d;a.pz=c;a.qd=b;d=a.dM;if(d!==null)IA(d,b,c);b=a.d0;if(b!==null)IA(b,a.qd,a.pz);}
function ARj(a,b,c,d){Ko(a,b,c,d);Ko(a.bW,b,c,d);if(d!==0.0)AEk(a);}
function JT(a,b,c){LN(a,b);Mh(a,c);}
function AEk(a){var b;AHD(a.bW);b=F9(a)*3|0;if(AA4(a,b))Vc(a);else a.d0=null;if(AFX(a,b))X_(a);else a.dM=null;}
function AFX(a,b){var c;c=a.j.b;return c>b&&a.bW.c4.b>c?1:0;}
function AA4(a,b){var c;c=a.j.a;return c>b&&a.bW.c4.a>c?1:0;}
function Vc(a){var b,c,d,e,f,g;b=a.d0;if(b===null)b=JL();a.d0=b;P0(a,b);c=a.d0;b=a.bW;d=b.N.a;e=a.i;f=e.a;g=a.j;Su(c,d,f,g.a,b.c4.a,e.b+g.b|0,F9(a));}
function X_(a){var b,c,d,e,f,g;b=a.dM;if(b===null)b=JL();a.dM=b;P0(a,b);c=a.dM;b=a.bW;d=b.N.b;e=a.i;f=e.b;g=a.j;KY(c,d,f,g.b,b.c4.b,e.a+g.a|0,F9(a));}
function F9(a){return DG(a,a.wQ);}
function P0(a,b){IA(b,a.qd,a.pz);}
function A4M(a,b){var c;a.bW.dT(b);if(!(a.dM===null&&a.d0===null)){Ca(b,1);c=a.dM;if(c!==null)Hn(c,b);c=a.d0;if(c!==null)Hn(c,b);c=a.dM;if(c!==null)Hs(c,b);c=a.d0;if(c!==null)Hs(c,b);Ca(b,0);}}
function UN(a,b){var c,d;a:{b:{c=a.dM;if(!(c!==null&&Ji(c,b))){c=a.d0;if(c===null)break b;if(!Ji(c,b))break b;}d=1;break a;}d=0;}return d;}
function AWg(a,b,c,d){return !UN(a,b.k)&&!a.bW.cU(b,c,d)?0:1;}
function LN(a,b){var c;b=AIR(a.bW,b);if(AA4(a,F9(a)*3|0))Vc(a);if(b){c=a.vC;if(c!==null)c.e();}}
function Mh(a,b){var c;if(AEJ(a,b)){c=a.rU;if(c!==null)c.e();}}
function AEJ(a,b){var c;c=Pr(a.bW,b);if(AFX(a,F9(a)*3|0))X_(a);return c;}
function AVU(a,b,c){var d,e;d=a.dM;if(d!==null){e=Gq(d,b.k,a.y8,1);if(e!==null)return e;}d=a.d0;if(d!==null){e=Gq(d,b.k,a.B9,0);if(e!==null)return e;}return a.bW.cD(b,c);}
function AT2(a,b,c){return UN(a,b.k)?1:0;}
function ATM(a,b){var c,d,e;c=a.dM;d=c!==null&&Gy(c,b.k,a.o7)?1:0;c=a.d0;e=c!==null&&Gy(c,b.k,a.o7)?1:0;return !d&&!e&&!a.bW.b3(b)?0:1;}
function A0I(a,b,c,d){var e,f;if(!B3(a,b.k))return 0;e=Ck(d*0.5,a.b1);f=Ck(c*0.5,a.b1);if(b.bK){f=f+e|0;e=0;}if(a.dM!==null&&e)Mh(a,a.bW.N.b+e|0);if(a.d0!==null&&f)LN(a,a.bW.N.a+f|0);return 1;}
function AJT(a){var b,c;b=F9(a);c=a.bW.ik();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var AFy=G();
function AP7(a,b){}
function AFA(){var a=this;B.call(a);a.vN=null;a.vO=null;}
function AOe(a,b){var c,d,e;c=a.vN;d=a.vO;b=BT(b);e=new J;L(e);H(H(H(e,d),C(29)),b);CZ(c,K(e));}
function Q7(){var a=this;FI.call(a);a.mQ=null;a.qt=null;a.zz=null;a.sV=0.0;}
function AXg(a){var b;b=Ck(20.0,a.b1);return BK(b,b);}
function A4l(a,b){Uq(a,b.a*3|0,b.b*5|0);a.zz.g(b);}
function AXz(a,b){var c,d,e,f,g,h,i,j,k,l,m;ANo(a,b);AEf(a,b);c=Ck(30.0,a.b1);d=a.N;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.j;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.qt;d.b=c;d.a=c;a.mQ.bD=1.0;while(h<=e){g=a.i.b-a.N.b|0;j=f;while(j<=i){k=a.i.a-a.N.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ANd(l);m=m+1|0;}WJ(AML(l),0.75,a.sV,a.mQ);Bv(b,k+j|0,g+h|0,a.qt,a.mQ);j=j+c|0;}h=h+c|0;}Gz(b);}
function ATk(a,b,c){return A_Y;}
function AFz(){var a=this;B.call(a);a.rp=null;a.rq=null;}
function AV9(a){var b,c;b=a.rp;c=a.rq;IW(b.v,c);Kx(c);}
function VJ(){var a=this;CH.call(a);a.gE=null;a.h3=null;a.ke=null;a.eW=null;a.lg=0.0;a.e7=0;a.iN=0;a.el=null;a.nh=null;}
function WY(a){var b;if(OY(a))return 0;AEa(a);b=Cw(a.gE,a.lg);return Fl(a.eW)+(b*2|0)|0;}
function SU(a){var b;b=a.j;return b.a&&b.b?0:1;}
function OY(a){return a.h3!==null&&a.ke!==null?0:1;}
function Rx(a,b){a.j.b=b;}
function RD(a,b,c,d,e){var f,g;f=a.gE.dB;Y(f,d,a.j.b);g=a.i;Bv(b,g.a+c|0,g.b,f,e);}
function AEa(a){if(a.eW===null)a.eW=FC(a.gE,a.h3);}
function AFW(){B.call(this);this.jj=0;}
function HQ(a){var b;b=a.jj;a.jj=b+1|0;return b;}
function OX(a,b,c){var d;d=HQ(a);Oq(b,3,a);a.jj=d+1|0;Oq(c,3,a);}
function HP(){var a=this;B.call(a);a.cC=null;a.f4=null;a.lB=null;a.hP=null;a.it=0;a.h1=0;a.gT=0;}
function BbC(a,b){var c=new HP();Ua(c,a,b);return c;}
function Ua(a,b,c){a.hP=Zc(b);a.it=c;a.h1=0;}
function Dd(a){return (Ku(a.hP,0)).x;}
function AGd(a){a.h1=60084;}
function Gx(a){return a.h1!=60084?0:1;}
function Sy(a){return a.h1!=60086?0:1;}
function AHa(a){a.h1=60086;}
function LI(a){a.gT=60035;}
function Hw(a){a.gT=60027;}
function RO(a){a.gT=60137;}
function DX(a){a.gT=60151;}
function IX(a){a.gT=60215;}
function AIs(a){var b;b=a.cC;if(b===null){b=a.lB;if(b===null)b=a.f4;}return b;}
function Da(){HP.call(this);this.eV=null;}
var BbD=null;var BbE=null;function Iy(a,b){var c=new Da();KG(c,a,b);return c;}
function AMG(a,b,c){var d=new Da();AMT(d,a,b,c);return d;}
function KG(a,b,c){Ua(a,b,c);a.eV=BbD;}
function AMT(a,b,c,d){Ua(a,b,c);a.eV=BbD;a.eV=d;}
function A6H(a){return Dd(a);}
function AK6(a,b){var c,d,e,f;c=AFR(a);d=P(HP,c);e=d.data;f=P(JR,c);if(AC7(a,d,f,b,0)==e.length)return A09(d,f);b=new Bt;X(b);N(b);}
function E7(a){return a.eV.data.length;}
function AFR(a){var b,c,d,e;b=1;if(Gx(a)){c=a.eV.data;d=c.length;e=0;while(e<d){b=b+AFR(c[e])|0;e=e+1|0;}}return b;}
function Px(a){var b,c,d,e;b=1;c=a.eV.data;d=c.length;e=0;while(e<d){b=b+Px(c[e])|0;e=e+1|0;}return b;}
function AC7(a,b,c,d,e){var f,g,h,i,j;f=d===null?null:d.em;g=d!==null&&d.hu!==null&&f!==null&&f.mF!=2?0:1;h=b.data;i=c.data;h[e]=a;i[e]=f;e=e+1|0;if(Gx(a)){j=0;while(true){h=a.eV.data;if(j>=h.length)break;e=g?Tb(h[j],b,c,f,e):AC7(h[j],b,c,Fu(d,j),e);j=j+1|0;}}return e;}
function Tb(a,b,c,d,e){var f,g,h,i,j;f=c.data;b.data[e]=a;f[e]=d;g=e+1|0;if(Gx(a)){h=a.eV.data;i=h.length;j=0;while(j<i){g=Tb(h[j],b,c,d,g);j=j+1|0;}}return g;}
function Iq(a){AGd(a);DX(a);}
function Jb(a){AHa(a);LI(a);}
function VL(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Pa(Dd(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AIm(){BbD=P(Da,0);BbE=new Qq;}
function TQ(){B.call(this);this.tS=null;}
function AZp(a){Iz(a.tS,1);}
function TO(){B.call(this);this.wq=null;}
function AX0(a){Iz(a.wq,0);}
function TP(){B.call(this);this.yS=null;}
function A1F(a){Cx(a.yS.J.F,null);}
function TN(){B.call(this);this.Gn=null;}
function AV6(a){}
function AE5(){B.call(this);this.Cr=null;}
function ARP(a){var b;b=a.Cr;Cx(b.J.F,b.nH);}
function AE4(){B.call(this);this.rS=null;}
function AWc(a){var b;b=a.rS;b.nH=b.d4!==Up(b)?null:b.d4;}
function RX(){var a=this;Ip.call(a);a.Eg=null;a.Gz=null;a.jL=null;a.po=null;a.li=null;a.eL=null;a.go=null;}
function ASa(a){var b,c,d,e;b=a.j.a/4|0;c=b+DG(a,1.0)|0;d=AL$(a.i);e=BK(b,a.j.b);a.cz.data[0].dV(d,e,a.b1);d.a=a.i.a+b|0;e.a=c-b|0;a.cz.data[1].dV(d,e,a.b1);d.a=a.i.a+c|0;e.a=a.j.a-c|0;a.cz.data[2].dV(d,e,a.b1);}
function Wp(a,b){KI(a.eL,b);Kg(a.eL,a.li);Gb(a.jL,b);E_(a.go,b);}
function A1r(a){var b,c;b=AJe(a.go);c=AJT(a.li);return BK((b.a+a.po.j.a|0)+c.a|0,b.b);}
function ACc(){B.call(this);this.sI=null;}
function AQf(a){AFq(a.sI);}
function ACb(){B.call(this);this.xk=null;}
function AUQ(a){var b;b=a.xk;Cx(b.J.F,b.tI);}
function ACd(){B.call(this);this.u4=null;}
function A27(a){var b,c;b=a.u4;c=b.J.F.cf;if(b.cN.go!==c)c=null;b.tI=c;}
var ABE=G(DI);
var BbF=null;function Dk(b,c){return Long_udiv(b, c);}
function AKq(b,c){return Long_urem(b, c);}
function DO(b,c){return Long_ucompare(b, c);}
function ALp(){BbF=F($rt_longcls());}
function AFZ(){B.call(this);this.CW=null;}
function A2e(a){AAw(a.CW);}
function YX(){B.call(this);this.z_=null;}
function AY4(a){var b;b=a.z_;DY(b.v,AAd(b));}
function ADf(){B.call(this);this.oS=null;}
var BbB=null;function AR1(){var a=new ADf();AGX(a);return a;}
function AGX(a){a.oS=BO();}
function XA(a,b,c,d,e){var f;f=new LQ;f.vj=e;f.l2=c;f.mj=d;f.h$=b;BA(a.oS,f);}
function AEW(a){return GO(a.oS,BbB);}
function AB$(b){return b===null?C(21):AEd(b);}
function ANk(){BbB=P(LQ,0);}
function KD(){var a=this;B.call(a);a.uH=null;a.lL=null;a.lh=null;a.j5=null;a.kw=null;a.j6=null;a.hv=null;}
function Nq(b,c,d,e){var f,g,h;f=new KD;f.j5=new Bh;f.kw=new Bh;f.j6=new Bh;f.hv=b;g=CC(e,b.h$);if(g!==null)g.ji=g.ji+1|0;else{g=new AEv;h=K4(c,b.h$,d);g.ji=1;g.mJ=h;D6(e,b.h$,g);}e=g.mJ;f.uH=e;Y(f.j5,e.bi|0,e.bD|0);e=K4(c,b.l2,d);f.lL=e;Y(f.kw,e.bi|0,e.bD|0);b=K4(c,b.mj,d);f.lh=b;Y(f.j6,b.bi|0,b.bD|0);return f;}
function AEp(b,c,d){var e,f,g;e=c.hv.h$;f=CC(d,e);g=f.ji-1|0;f.ji=g;if(!g){L$(d,e);Jy(b,f.mJ);}Jy(b,c.lL);Jy(b,c.lh);}
var Pk=G(0);
var BaA=null;var BaB=null;function AH7(){BaA=Fd(40,40,40,200);BaB=Fd(43,43,43,128);}
function L2(){var a=this;FI.call(a);a.eG=null;a.cg=null;a.cR=null;a.im=null;a.f$=null;a.ms=null;a.nj=null;a.Ch=0;a.rP=0;a.c6=null;a.gK=null;a.gL=null;a.hD=null;a.ia=null;a.ih=null;a.jU=null;a.hc=null;a.sx=0;a.kI=0;}
function AUy(a){Pb(a.im);ZJ(a.cg);PF(a);}
function PF(a){a.gK=BY(a.gK,null);a.gL=BY(a.gL,null);a.hD=BY(a.hD,null);a.ia=BY(a.ia,null);a.ih=BY(a.ih,null);a.jU=BY(a.jU,null);a.hc=BY(a.hc,null);}
function Yr(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hD;break a;case 60084:c=a.gL;break a;case 60086:c=a.gK;break a;case 60136:c=a.hc;break a;case 60137:c=a.jU;break a;case 60151:c=a.ia;break a;default:c=null;break a;}c=a.ih;}return c;}
function Wy(a){return a.cR.on;}
function KI(a,b){var c,d;a.f$=b;c=BR(a.ms,b.qo);d=BR(a.nj,b.py);if(!(c&&d)){a.ms=b.qo;a.nj=b.py;if(a.b1!==0.0)T2(a);}}
function AOU(a,b,c){QP(a.cg,c);if(a.ms!==null)T2(a);}
function T2(a){var b,c,d,e,f;T9(a.im);b=a.cg;c=a.ms;d=a.b1;e=a.eG.bP;f=b.hC;b.dw=ALg(c.iC,c.hs*d,c.kD,c.kS,f,e);Tv(a.cg,1.25,a.eG.bP);PF(a);b=FC(a.eG,a.nj);a.gK=BY(a.gK,FU(a,60086,b));a.gL=BY(a.gL,FU(a,60084,b));a.hD=BY(a.hD,FU(a,60035,b));a.ia=BY(a.ia,FU(a,60151,b));a.ih=BY(a.ih,FU(a,60027,b));a.jU=BY(a.jU,FU(a,60137,b));a.hc=BY(a.hc,FU(a,60136,b));a.sx=Bd(Bd(Bd(Bd(BV(a.hD),BV(a.ia)),BV(a.ih)),BV(a.hc)),BV(a.hc));a.kI=Bd(BV(a.gL),BV(a.gK));Qb(a);}
function Qb(a){Uq(a,a.c4.a,Bb(a.cR.c5.data.length,a.cg.d5));JC(a);}
function Z6(a){var b;b=a.cR.c5.data;a.c6=b.length<=0?null:b[0];}
function A2S(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=a.f$.bw.eC;d=a.i;Bv(b,d.a,d.b,a.j,c);BG(a.cg.dw);e=a.cg.d5;f=a.cR.c5.data.length;if(!f)return;g=Be(f,IE(a.j.b,e)+7|0);h=a.im;if(h.data.length<g)a.im=AAL(g,h,a.cg,a.Ch,a.rP,a.cR);Of(b,a.i,a.j);i=a.N.b;j=f-1|0;k=AIi(i,e,j);l=AIi((a.N.b+a.j.b|0)-1|0,e,j);a.Ch=k;a.rP=l;i=a.j.a;m=DG(a,4.0);n=DG(a,1.0)+a.kI|0;o=DG(a,3.0);p=DG(a,5.0);DG(a,1.0);q=0;r=a.i.a-a.N.a|0;s=DG(a,1.0);d=a.fC;t=s+(d===null?0:F9(d))|0;while(k<=l){a:
{d=a.cR;u=d.c5.data[k];v=d.on.data[k];h=a.im.data;s=k%h.length|0;w=h[s];Y0(w,u.hP,b,e,i,0,k,s);x=Bb(e,k);y=x-a.N.b|0;if(v!==null){s=v.bO;if(s){z=a.cg.t2;z.fJ=s;break a;}}z=null;}if(z===null)ba=null;else{d=a.f$;ba=Is(d.d3,d,z.fJ);}bb=m+Bb(n,u.it)|0;bc=a.c6!==u?0:1;if(z!==null){bd=x-a.N.b|0;Y(a.eG.dB,a.j.a,e);d=a.i;Bv(b,d.a,d.b+bd|0,a.eG.dB,ba);}else if(bc){bd=x-a.N.b|0;Y(a.eG.dB,a.j.a,e);d=a.i;Bv(b,d.a,d.b+bd|0,a.eG.dB,a.f$.bw.gZ);}d=Yr(a,u.h1);be=Yr(a,u.gT);if(d!==null){bf=a.f$;bg=bf.kj.data[0];AF7(a,b,d,r+
bb|0,a.i.b+y|0,z!==null?ba:!bc?c:bf.bw.gZ,bg.hA);}if(be!==null){d=a.f$;bf=d.kj.data[0];bh=((r+bb|0)+a.kI|0)+o|0;s=a.i.b+y|0;if(z===null)ba=!bc?c:d.bw.gZ;AF7(a,b,be,bh,s,ba,bf.hA);}s=FZ(u.hP);x=(((bb+a.kI|0)+o|0)+a.sx|0)+p|0;q=Bd(q,(x+s|0)+t|0);Q_(w,a.i.b+y|0,r+x|0,b,i,e,0,a.f$,null,null,null,bc,z===null?0:1,z);k=k+1|0;}d=a.c4;if(d.a!=q){d.a=q;JC(a);}Gz(b);}
function AF7(a,b,c,d,e,f,g){Cv(a.cg.j1,0.0,0.0,BV(c),CX(c));Ct(a.cg.iK,c.fe);HF(a.cg,b,c,d,e,g,f);}
function A5W(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cg.d5;f=((b.k.b-a.i.b|0)+a.N.b|0)/e|0;if(f>=0){g=a.cR.c5.data;if(f<g.length){h=g[f];if(!XU(a,b,f)){b=h.lB;if(b!==null)b.e();}}}}return 1;}
function APR(a,b,c){var d,e,f,g;Cx(a.eG,a);d=a.cg.d5;e=((b.k.b-a.i.b|0)+a.N.b|0)/d|0;if(!c&&e>=0){f=a.cR.c5.data;if(e<f.length){g=f[e];if(XU(a,b,e)){b=g.f4;if(b!==null)b.e();}else{a.c6=g;b=g.cC;if(b!==null)b.e();}}}return A_Y;}
function XU(a,b,c){var d,e,f,g,h,i,j;d=a.cR.c5.data[c];e=DG(a,4.0);f=DG(a,1.0);g=Bd(BV(a.gL),BV(a.gK));h=e+Bb(f+g|0,d.it)|0;i=(a.i.a-a.N.a|0)+h|0;j=i+g|0;c=b.k.a;return i<=c&&c<j?1:0;}
function FU(a,b,c){var d,e,f;d=a.eG.bP;e=Oh(b);f=a.cg;return AFf(d,e,c,1,f.d5,f.jh);}
function AIi(b,c,d){return Be(b/c|0,d);}
function ARl(a,b){var c;a:{switch(b.bb){case 13:b=a.c6;if(b!==null){b=AIs(b);if(b!==null)b.e();}c=1;break a;case 37:b=a.c6;if(b!==null&&Gx(b))a.c6.f4.e();c=1;break a;case 38:c=AE2(a)-1|0;if(c<0)c=a.cR.c5.data.length-1|0;a.c6=a.cR.c5.data[c];VD(a,c);c=1;break a;case 39:b=a.c6;if(b!==null&&Sy(b)){a.c6.f4.e();c=1;}else c=ABh(a);break a;case 40:break;default:c=0;break a;}c=ABh(a);}return c;}
function ABh(a){var b;b=AE2(a)+1|0;if(!(b>0&&b<a.cR.c5.data.length))b=0;a.c6=a.cR.c5.data[b];VD(a,b);return 1;}
function AE2(a){var b,c,d,e;b=a.cR.c5.data;c=a.c6;d=0;e=b.length;while(true){if(d>=e)return (-1);if(c===b[d])break;d=d+1|0;}return d;}
function VD(a,b){var c,d;c=a.cg.d5;d=Bb(b,c);if(d<a.N.b){Pr(a,d);JC(a);}b=d+c|0;c=a.N.b;d=a.j.b;if(b>(c+d|0)){Pr(a,b-d|0);JC(a);}}
function A0V(a,b,c){var d;d=a.c6;if(d===null)return 0;OV(b,Dd(d));return 1;}
function ALC(){var a=this;L2.call(a);a.r5=null;a.hH=null;}
function U7(a){var b=new ALC();AWu(b,a);return b;}
function AWu(a,b){Mq(a);a.cR=A09(P(HP,0),P(JR,0));a.im=P(FL,0);a.eG=b;a.cg=ASE(b.cW);}
function Di(a){var b,c,d,e,f;b=AK6(a.r5,a.hH);a.cR=b;c=a.c6;d=b.c5.data;e=d.length;f=0;a:{while(f<e){if(d[f]===c){e=1;break a;}f=f+1|0;}e=0;}if(!e)a.c6=null;if(a.b1!==0.0)Qb(a);}
function D9(a,b){a.r5=b;a.hH=Vp(null);Di(a);Z6(a);}
function Kg(a,b){var c;c=a.f$.bw;JS(b,c.mb,c.mh);return b;}
function AH3(){var a=this;B.call(a);a.oe=null;a.gs=null;}
function AOs(a,b){var c=new AH3();APC(c,a,b);return c;}
function APC(a,b,c){a.oe=b;a.gs=c;}
function AV3(a){return a.gs.N.b/Ng(a)|0;}
function A58(a){var b;b=a.gs;return IE((b.N.b+b.j.b|0)-1|0,Ng(a));}
function AW6(a,b){var c;b=Bb(b,Ng(a));c=a.gs;return (b+c.i.b|0)-c.N.b|0;}
function ASA(a){return a.gs.i;}
function AYN(a){return a.gs.j;}
function ATc(a,b,c){var d;d=a.oe;d.vC=b;d.rU=c;}
function A2$(a,b){return AEJ(a.oe,b);}
function Ng(a){return a.gs.cg.d5;}
function Qu(){CH.call(this);this.Cs=null;}
function AOj(a,b){var c;c=a.i;Bv(b,c.a,c.b,a.j,a.Cs);}
function ADn(){var a=this;B.call(a);a.od=F2;a.nk=0;a.rK=0;}
var YH=G();
function AXl(a){}
function TR(){var a=this;B.call(a);a.CE=null;a.CB=null;a.CC=null;}
function ASD(a){var b,c,d,e,f;b=a.CE;c=a.CB;d=a.CC;e=Bj();f=new J;L(f);b=H(f,b);Br(b,9);b=H(b,c);Br(b,9);H(b,d);Bf(e,K(f));}
function QR(){B.call(this);this.Ab=null;}
function AOr(a,b){var c;c=a.Ab;Mh(c,Gg(b,c.bW.c4.b-c.j.b|0));}
function QQ(){B.call(this);this.A7=null;}
function AOL(a,b){var c;c=a.A7;LN(c,Gg(b,c.bW.c4.a-c.j.a|0));}
var Qq=G();
function ASu(a,b,c){b=b;c=c;return Pa(Dd(b),Dd(c));}
var UV=G(0);
var A_U=null;function ARO(){ARO=Bm(UV);AXa();}
function AXa(){A_U=S(C(240));}
function LQ(){var a=this;B.call(a);a.vj=null;a.l2=null;a.mj=null;a.h$=null;}
function ANs(){var a=this;Hr.call(a);a.c5=null;a.on=null;}
function A09(a,b){var c=new ANs();A2g(c,a,b);return c;}
function A2g(a,b,c){a.c5=b;a.on=c;}
function A7u(a,b){return a.c5.data[b].hP;}
function JR(){var a=this;B.call(a);a.bO=0;a.mF=0;a.bY=0;a.lF=0;}
var CV=G(Bt);
var AMx=G(FQ);
function AZ4(a){var b=new AMx();ATs(b,a);return b;}
function ATs(a,b){a.le=1;a.lz=1;a.n4=b;}
function AA_(){var a=this;B.call(a);a.qI=null;a.hu=null;a.em=null;}
function Vp(a){var b=new AA_();A2f(b,a);return b;}
function A2f(a,b){var c;a.qI=b;c=new JR;c.bO=0;c.mF=0;a.em=c;if(b!==null)c.lF=b.em.lF+1|0;}
function ACs(a,b){var c;a.hu=P(AA_,b);c=0;while(c<b){a.hu.data[c]=Vp(a);c=c+1|0;}}
function Fu(a,b){return a.hu.data[b];}
function Gl(a,b){return a.hu.data[b].em;}
function Oq(a,b,c){var d;d=a.em;d.bO=b;d.mF=1;d.bY=HQ(c);d=a.qI;if(d!==null)Oq(d,b,c);}
function MA(a,b){var c,d,e,f,g;c=a.em;c.bO=b;c.mF=2;d=a.qI;if(d!==null)c.bY=d.em.bY;a:{e=a.hu;if(e!==null){e=e.data;f=e.length;g=0;while(true){if(g>=f)break a;MA(e[g],b);g=g+1|0;}}}}
function ANy(){var a=this;B.call(a);a.pp=null;a.nt=null;a.e_=null;a.ng=null;a.bE=null;a.qi=null;a.oo=null;a.gp=null;a.hk=null;a.kf=null;}
function AXv(a,b){var c=new ANy();A2N(c,a,b);return c;}
function A2N(a,b,c){var d,e,f;a.e_=b;a.ng=c;a.bE=AZn();b=new J;L(b);a.kf=b;a.gp=Ks();b=new TT;d=ANb(16);b.he=0;b.eq=P(Kb,d);b.y$=0.75;VO(b);a.hk=b;b=new V3;c=a.bE;e=a.kf;f=a.gp;b.dY=c;b.m6=e;b.t1=f;a.qi=b;b=new VK;b.dg=c;b.nU=e;b.s0=f;a.oo=b;}
function Ys(a){var b,c,d,e,f,g,h;a:{b=NR(a.e_.fx);c=b.jS;if(c.dr>0){d=c.dh;e=0;b:while(true){f=b.jS.ci.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cS;if(HX(a.gp,g))CC(a.gp,g);else{h=a.gp;D6(h,g,C5(h.dr));}c=c.df;if(d!=b.jS.dh)break b;}e=e+1|0;}b=new IG;X(b);N(b);}}b=a.e_.f3;if(b!==null)ABc(a,b);Bu(a.bE,a.e_.fx.dr);b=TD(NR(a.e_.fx));while(FJ(b)){c=Re(b);Hu(a.bE,a.kf.I,M(c));BM(a.kf,c);}b=TD(NR(a.e_.fx));while(FJ(b)){c=Re(b);c=CC(a.e_.fx,c);Bu(a.bE,c.p);c=B9(c);while(Cb(c)){g=Cc(c);g=CC(a.gp,g);Bu(a.bE,
g.bs);}}if(a.e_.f3===null)Bu(a.bE,(-1));else{Bu(a.bE,a.hk.he);ABW(a,a.e_.f3);}if(a.ng===null)Bu(a.bE,(-1));else{Bu(a.bE,1);AGy(a.ng,a.bE,a.hk);}a.pp=RZ(a.bE);a.nt=GU(K(a.kf));}
function ABc(a,b){var c,d,e,f,g,h;if(AEz(a.hk,b))O$(a.hk,b);else{c=a.hk;d=C5(c.he);if(b===null){e=AAA(c);if(e===null){c.mI=c.mI+1|0;e=AED(c,null,0,0);f=c.he+1|0;c.he=f;if(f>c.qj)Ym(c);}}else{g=Ni(b);h=g&(c.eq.data.length-1|0);e=Yx(c,b,h,g);if(e===null){c.mI=c.mI+1|0;e=AED(c,b,h,g);f=c.he+1|0;c.he=f;if(f>c.qj)Ym(c);}}e.c2=d;}b=b.c7;if(b===null)return;c=new Xc;c.s4=a;b.fI(c);}
function ABW(a,b){var c,d,e,f;c=(O$(a.hk,b)).bs;Bu(a.bE,c);if(b instanceof Op)Bu(a.bE,(-1));else if(!(b instanceof LS))Bu(a.bE,0);else Bu(a.bE,1);d=a.qi;Bu(d.dY,b.fk.c$());e=b.fk;f=new Xy;f.xi=d;e.fI(f);d=a.oo;Bu(d.dg,b.f5.c$());e=b.f5;f=new Vl;f.vZ=d;e.fI(f);d=b.lV;Bu(a.bE,d.c$());e=new Wi;e.Cp=a;d.fI(e);d=b.ib;Bu(a.bE,d.c$());d=d.ck();while(d.cZ()){e=d.cm();P9(a.qi,e.lX);HG(a.oo,e.lm);Bu(a.bE,e.sC);}d=b.vU;if(d===null)Bu(a.bE,(-1));else Bu(a.bE,(CC(a.gp,d)).bs);b=b.c7;Bu(a.bE,b.c$());d=new Ra;d.rf=a;b.fI(d);}
function PD(){B.call(this);this.B3=null;}
function AXX(a,b){var c,d,e,f,g,h,i,j;c=a.B3;if(c.gh){d=Fh(c);e=new J;L(e);H(H(e,d),C(442));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CL(b[0]);g=E6(b[1]);h=(CL(b[2])).data[0];if(c.h.cI==h){i=null;j=null;if(b.length>=5){i=CL(b[3]);j=E6(b[4]);}b=En(c);if(!Bk(b,C(205))&&!Bk(b,C(422))?0:1)ON(c.h,f,g);else{XI(c.h,f,g,i,j);Fb(c.h.d2);Fb(c.h.ea);NW(c.h);Lh(c.h);O6(c);}}}
function AEu(){B.call(this);this.tc=null;}
function A23(a,b){var c,d,e,f;c=a.tc;if(c.fy!=3){b=b.data;d=CL(b[0]);e=E6(b[1]);XI(c.h,d,e,null,null);if(c.gh){b=Fh(c);f=Kn(EN(),c.BZ);c=new J;L(c);H(Id(H(H(c,b),C(443)),f),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}
function Tp(){var a=this;B.call(a);a.w9=null;a.w$=null;a.w8=0;}
function A0s(a,b){var c,d,e;c=a.w9;d=a.w$;e=a.w8;d.g(Wv(c,(b.k.a+e|0)-c.fr.a|0));}
function To(){var a=this;B.call(a);a.sA=null;a.sy=null;a.sz=0;}
function A6r(a,b){var c,d,e;c=a.sA;d=a.sy;e=a.sz;d.g(RF(c,(b.k.b+e|0)-c.fr.b|0));}
var AJH=G();
var AJf=G();
function AGo(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EL()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new UH;d.addEventListener("change",Bw(e,"handleEvent"));d.click();}
var AIL=G();
function Yv(){B.call(this);this.wf=null;}
function APN(a,b){var c,d,e;c=a.wf;d=BT(b);e=new J;L(e);H(H(e,C(444)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new ADu;d.Eu=c;d.t$=b;e=new ADw;e.GH=c;WR(b,d,e);}
function Yu(){B.call(this);this.yE=null;}
function AVG(a,b){var c,d,e;c=a.yE;d=BT(b);e=new J;L(e);H(H(e,C(445)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new QA;d.DM=c;Ia(b,d);}
var Fz=G(0);
function Yy(){var a=this;B.call(a);a.kr=0;a.qW=0;a.l9=0;a.ii=0;a.jR=null;}
function Cb(a){return a.kr>=a.l9?0:1;}
function Cc(a){var b,c;Rk(a);b=a.kr;a.ii=b;c=a.jR;a.kr=b+1|0;return c.jc(b);}
function AAY(a){var b,c,d;if(a.ii<0){b=new CV;X(b);N(b);}Rk(a);a.jR.mT(a.ii);a.qW=a.jR.ca;c=a.ii;d=a.kr;if(c<d)a.kr=d-1|0;a.l9=a.l9-1|0;a.ii=(-1);}
function Rk(a){var b;if(a.qW>=a.jR.ca)return;b=new IG;X(b);N(b);}
function LV(){var a=this;O_.call(a);a.yM=null;a.BE=null;}
function AJn(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.yM;e=0;f=0;g=a.BE;a:{b:{while(true){if((e+32|0)>f&&El(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cl(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BJ;c=new J;L(c);V(H(V(H(c,C(446)),l),C(101)),h);Bn(b,K(c));N(b);}if(Cl(b)<m){b=new OW;X(b);N(b);}if(m<0){b=new BJ;c=new J;L(c);H(V(H(c,C(102)),m),C(103));Bn(b,K(c));N(b);}n=b.bf;h=n+b.nX|0;e=0;while(e<m){o=k+1|0;i=b.qw.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bf=n+m|0;e=0;}if(!El(c)){p=!El(b)&&e>=f?A_u:A_t;break a;}i=g.data;n=Cl(c);o=i.length;n=Be(n,o);q=new AD2;q.uM=b;q.Cm=c;p=ANx(a,d,e,f,g,0,n,q);e=q.xq;if(p===null&&0==q.nm)p=A_u;k=q.nm;h=0;if(c.q2){b=new K3;X(b);N(b);}if(Cl(c)<k)break;if(h>o){b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(104)),h),C(98)),o),41);Bn(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BJ;c=new J;L(c);V(H(V(H(c,C(106)),l),C(101)),o);Bn(b,K(c));N(b);}if(k<0){b=new BJ;c=new J;L(c);H(V(H(c,C(102)),k),C(103));Bn(b,K(c));N(b);}o=c.bf;m=0;while
(m<k){l=o+1|0;n=h+1|0;ABS(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bf=c.bf+k|0;if(p!==null)break a;}b=new Ki;X(b);N(b);}b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(104)),k),C(98)),h),41);Bn(b,K(c));N(b);}FO(b,b.bf-(f-e|0)|0);return p;}
var Ul=G(LV);
function ANx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(N_(h,2))break a;i=A_u;break a;}c=k+1|0;n=j[k];if(!G3(a,n)){c=c+(-2)|0;i=EK(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(N_(h,3))break a;i=A_u;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!G3(a,n))break b;if(!G3(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Pg(p)){c=k+(-3)|0;i=EK(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EK(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(N_(h,4))break a;i=A_u;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cl(h.Cm)<2?0:1)break a;i=A_t;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!G3(a,n))break c;if(!G3(a,o))break c;if(!G3(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Kr(r);m=c+1|0;j[c]=JO(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EK(1);break a;}c=k+(-3)|0;i
=EK(1);}h.xq=c;h.nm=f;return i;}
function G3(a,b){return (b&192)!=128?0:1;}
function AE3(){var a=this;B.call(a);a.Er=null;a.Es=null;a.Eq=null;}
function AC5(){B.call(this);this.wx=null;}
function ATe(a,b){M3(a.wx,b);}
function W4(){B.call(this);this.rt=null;}
function AWK(a,b){var c,d;c=a.rt;d=c.ex+1|0;c.ex=d;c=new J;L(c);H(H(V(c,d),C(447)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function PX(){B.call(this);this.wc=null;}
function AU9(a){return a.wc.hG();}
function PW(){B.call(this);this.vp=null;}
function A0b(a){return a.vp.hG();}
function AB4(){B.call(this);this.BC=null;}
function A3P(a){return a.BC.hG();}
var Yl=G();
function A4C(a){return EQ(1);}
function ABL(){B.call(this);this.uo=null;}
function A6P(a,b){a.uo.g(F0(b));}
var AHI=G();
function AEs(){B.call(this);this.wR=null;}
function AQ3(a,b){a.wR.e();}
var O2=G(BJ);
function S$(){B.call(this);this.vk=null;}
function AU_(a){ACE(a.vk);}
function S9(){B.call(this);this.y3=null;}
function A0K(a){AFk(a.y3);}
function Ta(){B.call(this);this.zH=null;}
function A6p(a){AFC(a.zH);}
function S_(){B.call(this);this.Dh=null;}
function AX7(a){AAK(a.Dh);}
function UE(){B.call(this);this.t6=null;}
function AWE(a){Di(a.t6);}
var AG2=G();
function Qw(b,c,d){return AID(b,0,c,d,Wf());}
function AID(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BQ(c,d);h=g>=0?0:1+RW(f,2.0)|0;i=g>0?0:1+RW(f,3.0)|0;j=P(Da,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(448)),g);k[g]=AID(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Da;n=new J;L(n);V(H(n,C(449)),g);KG(m,K(n),l);n=new Sg;n.uU=m;m.lB=n;switch((l+g|0)%3|0){case 0:break;case 1:RO(m);break a;case 2:m.gT=60136;break a;default:break a;}Hw(m);}if(Wh(f)<0.25){n=Ku(m.hP,0);n.bH=n.bH|2;}k[h+g|0]=m;g=g+1|0;}n=AMG(b,c,j);b=new X3;b.xI=n;b.xK=e;n.f4=b;n.cC
=b;if((c+c|0)>d)Jb(n);else Iq(n);return n;}
function ACR(){B.call(this);this.rV=null;}
function ANO(a){Di(a.rV);}
function ACS(){B.call(this);this.ut=null;}
function ARv(a){Di(a.ut);}
function HC(){var a=this;B.call(a);a.eD=0;a.fm=0;a.qb=null;a.oQ=0;a.hn=null;}
function AV_(a,b,c,d,e,f){var g=new HC();A2q(g,a,b,c,d,e,f);return g;}
function A2q(a,b,c,d,e,f,g){a.eD=b;a.fm=c;a.qb=BK(f,g);a.oQ=d;a.hn=e;}
function AEw(){var a=this;B.call(a);a.rJ=null;a.rL=null;}
function A6W(a){var b,c;b=a.rJ;c=a.rL;D3(b);c.e();}
function RE(){var a=this;B.call(a);a.gJ=null;a.k_=null;a.jF=null;a.q4=null;a.dC=null;a.mm=0;}
function AB1(a,b){if(!BR(b.pk,a.q4)){a.q4=b.pk;Ox(a);}}
function Ox(a){a.dC=BY(a.dC,null);}
function AIq(a,b){var c,d;c=FC(b,a.q4);d=Fl(c);a.dC=BY(a.dC,AFf(b.bP,Oh(60088),c,0,d,0));}
function Uu(a,b){return a.dC!==null&&GK(b,a.gJ,a.k_)?1:0;}
function XQ(){var a=this;B.call(a);a.w_=null;a.xa=null;}
function A0R(a){var b,c;b=a.w_;c=a.xa;IW(b.J,c);Kx(c);b.bX();}
function XP(){B.call(this);this.xS=null;}
var AJG=G();
var DW=G(Bt);
function AI$(){var a=this;B.call(a);a.jZ=null;a.om=0;a.gA=0;}
function AZn(){var a=new AI$();AXt(a);return a;}
function AXt(a){a.om=0;a.jZ=BP(16);a.gA=0;}
function Hu(a,b,c){Bu(a,b);Bu(a,c);}
function Bu(a,b){var c,d;c=a.jZ;d=c.data.length;if(d==a.gA)a.jZ=JU(c,d*2|0);c=a.jZ.data;d=a.gA;a.gA=d+1|0;c[d]=b;}
function RZ(a){var b,c,d,e,f;b=a.om;if(b&&a.gA!=b){c=D4();b=a.om;d=a.gA;e=new J;L(e);H(V(H(V(H(e,C(450)),b),C(451)),d),C(452));Bf(c,K(e));}f=a.jZ;b=f.data.length;d=a.gA;if(b!=d)f=JU(f,d);return f;}
function TT(){var a=this;Er.call(a);a.he=0;a.eq=null;a.mI=0;a.y$=0.0;a.qj=0;}
function ANb(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function VO(a){a.qj=a.eq.data.length*a.y$|0;}
function AEz(a,b){return W6(a,b)===null?0:1;}
function O$(a,b){var c;c=W6(a,b);if(c===null)return null;return c.c2;}
function W6(a,b){var c,d;if(b===null)c=AAA(a);else{d=Ni(b);c=Yx(a,b,d&(a.eq.data.length-1|0),d);}return c;}
function Yx(a,b,c,d){var e;e=a.eq.data[c];while(e!==null&&!(e.oh==d&&(b!==e.cS?0:1))){e=e.iQ;}return e;}
function AAA(a){var b;b=a.eq.data[0];while(b!==null&&b.cS!==null){b=b.iQ;}return b;}
function AED(a,b,c,d){var e,f;e=new Kb;Xi(e,b,null);e.oh=d;f=a.eq.data;e.iQ=f[c];f[c]=e;return e;}
function Ym(a){var b,c,d,e,f,g,h,i;b=a.eq.data.length;b=ANb(!b?1:b<<1);c=P(Kb,b);d=c.data;e=0;f=b-1|0;while(true){g=a.eq.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.oh&f;i=h.iQ;h.iQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.eq=c;VO(a);}
function V3(){var a=this;B.call(a);a.dY=null;a.m6=null;a.t1=null;}
function P9(a,b){var c;if(!(b instanceof MX)){Bu(a.dY,3);AFh(a,b);Bu(a.dY,b.j4);}else{c=b;Bu(a.dY,5);AFh(a,c);Bu(a.dY,c.j4);Bu(a.dY,c.x2);b=c.lv;Bu(a.dY,b.p);c=new X5;c.rT=a;FM(b,c);}}
function AFh(a,b){var c;c=b.es.g5;Hu(a.dY,a.m6.I,M(c));Bu(a.dY,b.es.dG);Pz(a,b.kq);BM(a.m6,c);}
function Pz(a,b){if(b===null)Bu(a.dY,(-1));else Bu(a.dY,(CC(a.t1,b)).bs);}
function VK(){var a=this;B.call(a);a.dg=null;a.nU=null;a.s0=null;}
function HG(a,b){var c,d,e;if(b instanceof H_){c=b;Bu(a.dg,9);Z7(a,c.fX);}else if(b instanceof KQ){d=b;Bu(a.dg,3);AAE(a,d);Bu(a.dg,d.rl);Z7(a,d.iG);}else if(b instanceof JX){e=b;Bu(a.dg,4);HG(a,e.iv);HG(a,e.h2);}else if(b===null)Bu(a.dg,(-1));else{Bu(a.dg,5);AAE(a,b);Bu(a.dg,b.Bu);}}
function AAE(a,b){var c;c=b.eY.g5;Hu(a.dg,a.nU.I,M(c));Bu(a.dg,b.eY.dG);b=b.gk;if(b===null)Bu(a.dg,(-1));else Bu(a.dg,(CC(a.s0,b)).bs);BM(a.nU,c);}
function Z7(a,b){var c;Bu(a.dg,b.p);c=new Xl;c.yF=a;FM(b,c);}
function X$(){var a=this;B.call(a);a.z6=0;a.z5=0;}
function T8(){B.call(this);this.ts=null;}
function AVI(a,b){var c;c=a.ts;DQ(c,b);H3(c,null);W3(c);}
var AFJ=G();
function A43(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AFI(){B.call(this);this.tJ=null;}
function A0a(a,b){var c,d,e;c=a.tJ;d=0;e=b.length;while(d<e){c.g(AIT(b[d],P(BC,0)));d=d+1|0;}}
function AE6(){B.call(this);this.Dg=null;}
function A1a(a,b){var c,d;c=a.Dg;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A7n(b,P(BC,0),P(BC,0)));}
var ZX=G(DI);
var BbG=null;function AKU(){BbG=F($rt_doublecls());}
var KH=G();
var BbH=F2;var BbI=null;var BbJ=null;function AHP(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.rK=Jf(Dl(d,D(0, 2147483648)),F2)?0:1;e=Dl(d,D(4294967295, 1048575));f=Hi(A9x(d,52))&2047;if(Jf(e,F2)&&!f){c.od=F2;c.nk=0;return;}if(f)e=A7$(e,D(0, 1048576));else{e=Ii(e,1);while(Jf(Dl(e,D(0, 1048576)),F2)){e=Ii(e,1);f=f+(-1)|0;}}g=BbJ.data;h=f<<16>>16;i=0;j=g.length;k=BQ(i,j);if(k>0){c=new BU;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BQ(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jq(e,BbI.data[h],i);if(AQm(m,BbH)){while(DO(m,BbH)<=0){j=j+(-1)|0;m=C0(Cm(m,Bq(10)),Bq(9));}g=BbJ.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jq(e,BbI.data[h],i);}e=Ii(e,1);d=C0(e,Bq(1));g=BbI.data;h=j+1|0;n=g[h];f=i-1|0;n=Jq(d,n,f);o=Jq(Kn(e,Bq(1)),BbI.data[h],f);p=Bq(1);while(true){q=Cm(p,Bq(10));if(DO(Dk(m,q),Dk(o,q))<=0)break;p=q;}r=Bq(1);while
(true){s=Cm(r,Bq(10));if(DO(Dk(m,s),Dk(n,s))>=0)break;r=s;}h=DO(p,r);e=h>0?Cm(Dk(m,p),p):h<0?C0(Cm(Dk(m,r),r),r):Cm(Dk(C0(m,AIO(r,Bq(2))),r),r);if(DO(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dk(e,Bq(10));if(DO(e,D(2808348672, 232830643))<0)break;}else if(DO(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cm(e,Bq(10));}c.od=e;c.nk=j-330|0;}
function Jq(b,c,d){var e,f,g,h,i,j,k,l;e=Dl(b,Bq(65535));f=Dl(GC(b,16),Bq(65535));g=Dl(GC(b,32),Bq(65535));h=Dl(GC(b,48),Bq(65535));i=Dl(c,Bq(65535));j=Dl(GC(c,16),Bq(65535));k=Dl(GC(c,32),Bq(65535));l=Dl(GC(c,48),Bq(65535));return C0(C0(C0(Ii(Cm(l,h),32+d|0),Ii(C0(Cm(l,g),Cm(k,h)),16+d|0)),Ii(C0(C0(Cm(l,f),Cm(k,g)),Cm(j,h)),d)),GC(C0(C0(C0(Cm(k,e),Cm(j,f)),Cm(i,g)),Ii(C0(C0(C0(Cm(l,e),Cm(k,f)),Cm(j,g)),Cm(i,h)),16)),32-d|0));}
function AHz(){BbH=Dk(Bq(-1),Bq(10));BbI=AKO([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);BbJ=A8Y([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function Vf(){B.call(this);this.sn=null;}
function AOw(a){HH(a.sn,37,3);}
function Vg(){B.call(this);this.s9=null;}
function AQF(a){HH(a.s9,40,3);}
function Vh(){B.call(this);this.uT=null;}
function A6t(a){HH(a.uT,42,3);}
function Vi(){B.call(this);this.yO=null;}
function AS5(a){HH(a.yO,45,3);}
function Vj(){B.call(this);this.zi=null;}
function AVo(a){HH(a.zi,45,5);}
function PK(){B.call(this);this.BS=null;}
function A7L(a,b){var c,d;c=a.BS;d=new Bt;Bn(d,$rt_str(b.message));c.g(d);}
var W7=G(0);
var A_g=null;function A8J(){A8J=Bm(W7);A4d();}
function A4d(){A_g=new $rt_globals.TextDecoder("utf-16");}
function Ut(){B.call(this);this.wg=null;}
function AQ_(a,b,c){var d,e;c=a.wg;d=c.d.h;e=b.bs;b=c.fV;ABK(d.E.data[e],0,b);}
function ADH(){var a=this;B.call(a);a.uy=0;a.DA=0;}
function Gg(a,b){var c;c=a.DA;if(c<=0)return 0;return AAa(a.uy,b,c);}
var UH=G();
function AYw(a,b){}
function Sg(){B.call(this);this.uU=null;}
function A26(a){var b,c,d;b=a.uU;c=Bj();d=Dd(b);b=new J;L(b);H(H(b,C(453)),d);Bf(c,K(b));}
function Vn(){B.call(this);this.uw=null;}
function AU$(a,b,c){Ie(Cg(a.uw.d.h,b.bs),0,M(c));}
function X3(){var a=this;B.call(a);a.xI=null;a.xK=null;}
function A21(a){var b,c;b=a.xI;c=a.xK;if(!Gx(b))Iq(b);else Jb(b);c.e();}
function YG(){var a=this;B.call(a);a.re=null;a.z3=null;a.wp=0;a.xj=0;}
function OS(a,b){return Cl(a.z3)<b?0:1;}
function Vr(){B.call(this);this.Bn=null;}
function A6X(a,b){DQ(a.Bn,b);}
function S7(){B.call(this);this.vh=null;}
function A1z(a){M2(a.vh);}
function AEK(){var a=this;B.call(a);a.ye=null;a.yd=null;}
function AXh(a){Cx(a.ye,a.yd);}
var ZP=G();
var BbK=null;function ON(b,c,d){Sv(b,c,d,0);}
function Sv(b,c,d,e){YW(b,c,d,null,null,e);}
function YW(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=MN(c);i=Bc(h);j=Bc(h);k=Bc(h);l=CN(b);c=b.E;if(c.data.length<i)b.E=AG4(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bc(h)|0;h.fD=h.fD+n|0;}else b.E.data[m]=Ej(AAs(h,d,0));m=m+1|0;}NW(b);if(j)b.dD=AIU(AJN(h));Fb(b.ea);Fb(b.d2);o=b.ea;g=0;while(g<k){D6(o,D1(Bc(h),Bc(h)),D1(Bc(h),Bc(h)));g=g+1|0;}p=b.ea;o=b.d2;q=NG(OM(p));while(FJ(q)){r=Pj(q);s=r.cS;p=r.c2;BG(BbK);r=CC(o,p);if(r===null){r=BO();D6(o,p,r);}BA(r,s);}if(o.pQ===null){p=new Rs;p.xy=o;o.pQ=p;}p=o.pQ;r=new AA9;Os(r,
p.xy);while(FJ(r)){OE(r);o=r.hL.c2;p=A$L;c=P(B,o.p);d=c.data;GO(o,c);LE(c,p);g=0;t=d.length;while(g<t){p=d[g];La(o,g);o.cx.data[g]=p;g=g+1|0;}}Sr(h);if(e!==null&&f!==null){p=ATC(e,f);QN(p);b.fp=AZP(p.p5,p.jn);b.dD=AIU(p.qr);}}
function XI(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MN(c);i=Bc(h);j=Bc(h);k=Bc(h)!=1?0:1;l=Bc(h);m=Bc(h);n=AFe(b,i);o=AFe(b,j);p=(Jo(Cg(b,n.a),n.b)).data[0].s;q=(Jo(Cg(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=AAs(h,d,i);if(!r)g=MG(p,g);if(r==s)g=MG(g,q);t=n.a+r|0;u=Ej(g);c=b.E.data;v=c[t];c[t]=u;if(!k&&J1(v)==J1(u)){t=0;while(t<J1(v)){o=v.s.data[t];w=u.s.data[t];x=o.b8;y=x!=5?0:1;if(!y&&x&&!w.b8){w.b8=x;w.bH=o.bH;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AJN(h);w=Lt(i,j,(-1));YK(b.dD,w,u);}else if(e!==null&&f!==null){v=ATC(e,f);QN(v);w=Lt(i,j,(-1));YK(b.dD,w,v.qr);n=b.fp;n.f3=b.dD.dA.cA;n.fx=v.jn;}}Sr(h);}
function AAs(b,c,d){var e,f,g,h,i,j,k,l;e=Bc(b);f=P(CB,e);g=f.data;h=0;while(h<e){i=Bc(b);j=Bc(b);k=Bc(b);l=Bc(b);g[h]=Ep(ET(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AMI(){BbK=new WU;}
var AAM=G(0);
var Qf=G(0);
var F7=G();
function ABP(){F7.call(this);this.B5=null;}
function OL(a,b){var c,d,e;c=0;while(true){d=a.B5;if(d.kN===null)d.kN=B9(d.zE);if(!Cb(d.kN))e=0;else{c=b.bN(Cc(d.kN));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Sq=G(0);
function PJ(){var a=this;B.call(a);a.Ex=null;a.Ey=null;a.Ev=0;a.Ew=0;}
var AFw=G();
function AOW(a,b){b=b;b.c9=BY(b.c9,null);}
var AHS=G(0);
function ALg(b,c,d,e,f,g){f=f.data;f[JY(0,0)]=G1(g,b,c,d,0);f[JY(0,1)]=G1(g,b,c,d,2);f[JY(1,0)]=G1(g,b,c,e,0);f[JY(1,1)]=G1(g,b,c,e,2);return f[JY(0,0)];}
function Kb(){var a=this;Hp.call(a);a.oh=0;a.iQ=null;}
var IG=G(Bt);
function Ud(){var a=this;B.call(a);a.bA=null;a.sa=null;a.jK=null;a.o6=null;a.mY=null;a.gX=null;}
function NQ(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=Uh();e=a.bA.d;f=En(e);e=H6(e);g=a.bA.fY;if(AAH(g,f,e)!==null){h=new Sj;h.sJ=a;h.sK=b;EG(d,C(454),h);}if(Pc(g,f,e)!==null){h=new Sh;h.Bs=a;h.Br=b;EG(d,C(455),h);}if(ADx(g,f,e)!==null){e=new Sl;e.zZ=a;e.z0=b;EG(d,C(456),e);}e=new Si;e.DD=a;e.DC=b;EG(d,C(457),e);Il(a);if(MD()){if(!a.bA.fl){f=new Ty;f.vI=a;EG(d,C(458),f);}f=new Tz;f.x_=a;EG(d,C(459),f);if(!a.bA.fl&&W1(Il(a))){f=new Tx;f.sL=a;EG(d,C(460),f);}}if(c!==null)NN(d,c);f=Uh();i=P(BC,5).data;i[0]=C(183);i[1]=
C(194);i[2]=C(211);i[3]=C(210);i[4]=C(205);j=i.length;k=0;while(k<j){b=i[k];e=new SG;e.AR=a;e.AQ=b;EG(f,b,e);k=k+1|0;}Iw(d,C(461),Jt(f));c=Uh();i=P(By,3);l=i.data;g=a.mY;BG(g);m=new Rn;m.zo=g;l[0]=Dc(C(462),m);g=a.mY;BG(g);m=new Rl;m.Bx=g;l[1]=Dc(C(463),m);g=a.mY;BG(g);m=new Rm;m.q8=g;l[2]=Dc(C(464),m);Mg(c,C(465),CQ(i),BbL);i=P(By,2);l=i.data;g=a.jK;BG(g);m=new Vk;m.BB=g;l[0]=Dc(C(466),m);g=a.jK;BG(g);m=new Vm;m.DG=g;l[1]=Dc(C(467),m);Iw(c,C(468),CQ(i));g=new AAC;g.Ae=a;Mg(c,C(469),g,BbL);if(a.bA.cj.bP.mz)
{i=P(By,2);l=i.data;g=new ABd;g.tg=a;l[0]=Dc(C(470),g);g=new ABb;g.B8=a;l[1]=Dc(C(471),g);Iw(c,C(472),CQ(i));}Iw(d,C(473),Jt(c));return Jt(d);}
function ABq(a,b){return NQ(a,b,null);}
function Il(a){return a.bA.cj.b9;}
function Xt(a){var b;b=new SL;b.vE=a;return b;}
function A1q(a){var b,c,d,e,f;b=P(By,5);c=b.data;d=a.bA;BG(d);e=new T3;e.xz=d;c[0]=Dc(C(474),e);e=a.bA;BG(e);f=new T4;f.td=e;c[1]=Dc(C(475),f);d=a.bA;BG(d);e=new T5;e.B0=d;c[2]=Dc(C(476),e);d=a.bA;BG(d);e=new T6;e.yt=d;c[3]=Dc(C(477),e);d=a.bA;BG(d);e=new Uk;e.AJ=d;c[4]=Dc(C(478),e);return CQ(b);}
function Rj(a,b){var c;c=new PB;c.y1=a;c.y2=b;return c;}
function Lj(a,b,c){var d,e,f,g,h,i,j,k,l;a:{D3(a.gX.cl);d=a.bA.d;e=En(d);f=H6(d);g=a.bA.fY;if(c===null)h=null;else{A9O();switch(BbM.data[c.fv]){case 1:h=Pc(g,e,f);break a;case 2:h=AAH(g,e,f);break a;default:}b=new Fj;X(b);N(b);}}c=a.bA;e=FP(c,b);g=JK(c.d.h,e.bt,e.bx);f=TZ(c,g);if(h!==null){g=c.d;i=e.bt;j=e.bx;e=new ACT;e.GN=c;e.GM=b;e.GL=f;h.u2(g,i,j,e,c.kE);}else{e=CC(c.d.h.ea,g);if(e!==null)Js(c,e);else{e=CC(c.d.h.d2,g);if(e!==null&&!EU(e))AAX(c.lk,b,e,c,f);else{c=c.lk;k=P(By,1);l=k.data;e=new By;f=c.cl;BG(f);g
=new ACI;g.CL=f;Ce(e,g,C(479));l[0]=e;SK(c,b,CQ(k));}}}}
function ADK(){var a=this;B.call(a);a.wN=null;a.wK=null;a.wL=null;}
function ASI(a,b,c,d){var e,f,g,h;b=a.wN;e=a.wK;f=a.wL;AC3(b,e);if(f!==null)d.nv.e();if(AD0(d)){f=d.fK;g=e.dj;h=e.gB;WM(b,BK((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nS,e,d.u0);}}
function AMD(){var a=this;B.call(a);a.i0=null;a.fD=0;}
function MN(a){var b=new AMD();AX_(b,a);return b;}
function AX_(a,b){a.i0=b;a.fD=0;}
function Bc(a){var b,c;b=a.i0.data;c=a.fD;a.fD=c+1|0;return b[c];}
function Sr(a){var b,c,d,e;if(a.fD!=a.i0.data.length){b=D4();c=a.i0.data.length;d=a.fD;e=new J;L(e);H(V(H(V(H(e,C(450)),c),C(480)),d),C(481));Bf(b,K(e));}}
function Gk(){var a=this;B.call(a);a.hR=null;a.c7=null;a.f5=null;a.fk=null;a.ib=null;a.lV=null;a.vU=null;}
function A81(a){var b=new Gk();AIa(b,a);return b;}
function AIa(a,b){a.hR=b;a.c7=BO();a.f5=BO();a.fk=BO();a.lV=BO();a.ib=BO();}
function AFO(a){var b;b=a.hR;if(b!==null)b.c7.rG(a);}
function K$(){var a=this;B.call(a);a.es=null;a.kq=null;a.j4=0;}
function A8F(a,b,c){var d=new K$();AII(d,a,b,c);return d;}
function AII(a,b,c,d){a.es=b;a.kq=c;a.j4=d;}
function A5f(a){var b,c,d;b=AMc(a.es);c=a.kq;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AMd(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.es,c.es)&&BR(a.kq,c.kq)&&BR(C5(a.j4),C5(c.j4))?1:0;}return 0;}
function Fn(){var a=this;B.call(a);a.eY=null;a.gk=null;a.Bu=0;}
function A75(a,b,c){var d=new Fn();OC(d,a,b,c);return d;}
function OC(a,b,c,d){a.eY=b;a.gk=c;a.Bu=d;}
function AWV(a){var b,c,d;b=BT(a.eY);c=a.gk;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AKD(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.eY,c.eY)&&BR(a.gk,c.gk)?1:0;}return 0;}
var Io=G(0);
function Uv(){B.call(this);this.Ag=null;}
function A2U(a,b,c,d){Lp(a.Ag,b,c.bs,d.bs);}
function RN(){var a=this;B.call(a);a.lX=null;a.lm=null;a.sC=0;}
function Uw(){B.call(this);this.yj=null;}
function A1p(a,b,c,d){Lp(a.yj,b,c.bs,d.bs);}
function Jr(){B.call(this);this.o3=0;}
var BbN=null;var BbO=null;var BbP=null;function AUB(a){var b=new Jr();AIy(b,a);return b;}
function AIy(a,b){a.o3=b;}
function Zu(b){return !b?BbO:BbN;}
function AKE(){BbN=AUB(1);BbO=AUB(0);BbP=F($rt_booleancls());}
var Lr=G(0);
var S6=G();
var NL=G(0);
var AHT=G();
function Tu(){B.call(this);this.wk=null;}
function A3q(a,b,c,d){Kt(a.wk,b,c.bs,d.bs);}
var Tt=G();
function AW4(a,b){return b.es.dG>=0?0:1;}
var Ts=G();
function AU0(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eY;if(b===null)break b;if(b.dG>=0)break b;}c=1;break a;}c=0;}return c;}
function Tw(){B.call(this);this.BY=null;}
function A20(a,b,c,d){Kt(a.BY,b,c.bs,d.bs);}
function R7(){var a=this;B.call(a);a.EO=null;a.vm=0;}
function AY5(a,b){var c,d,e,f;c=a.vm;d=(CL(Jj(b,0))).data;b=Bj();e=d[0];f=new J;L(f);V(H(V(H(f,C(482)),c),C(483)),e);Bf(b,K(f));b=Bj();e=d[1];f=new J;L(f);V(H(V(H(f,C(482)),c),C(484)),e);Bf(b,K(f));}
function AGs(){B.call(this);this.Rk=null;}
var WU=G();
var F8=G();
var BbQ=null;var BbR=null;var A_7=null;var BbS=null;var BbT=null;var BbU=null;function AMa(){BbQ=new VC;BbR=new Vz;A_7=new VA;BbS=new Vx;BbT=new Vy;BbU=new Xv;}
function AKA(){var a=this;B.call(a);a.p5=null;a.qr=null;a.jn=null;a.cY=null;a.pt=null;a.nN=null;a.jJ=null;a.or=null;a.ql=null;}
function ATC(a,b){var c=new AKA();A59(c,a,b);return c;}
function A59(a,b,c){a.cY=MN(b);a.pt=c;}
function QN(a){var b,c,d,e,f,g,h,i;b=Bc(a.cY);c=new Or;RM(c);a.jn=c;a.jJ=BO();d=0;while(d<b){e=Bc(a.cY);f=Bc(a.cY);g=ET(a.pt,e,f);D6(a.jn,g,BO());BA(a.jJ,g);d=d+1|0;}c=NG(OM(a.jn));while(FJ(c)){GY((Pj(c)).c2,P_(a));}d=Bc(a.cY);if(d==(-1))a.p5=null;else{a.nN=P(Gk,d);c=new XT;h=a.cY;i=a.pt;g=a.jJ;c.ec=h;c.AI=i;c.z$=g;a.or=c;c=new SI;c.eS=h;c.Cq=i;c.CG=g;a.ql=c;a.p5=Sw(a,null);}if(Bc(a.cY)!=(-1))a.qr=AA5(a.cY,a.nN);}
function Sw(a,b){var c,d,e,f,g,h,i,j,k;c=Bc(a.cY);d=Bc(a.cY);e=a.or;f=Bc(e.ec);g=BO();h=0;while(h<f){BA(g,PP(e));h=h+1|0;}a:{switch(d){case -1:i=new Op;i.hR=b;b=A_7;i.c7=b;i.f5=b;i.fk=b;i.lV=b;i.ib=b;break a;case 0:i=A81(b);break a;case 1:i=new LS;AIa(i,b);GY(i.fk,g);break a;default:}b=new CV;i=new J;L(i);V(H(i,C(485)),d);Bn(b,K(i));N(b);}i.fk=g;b=a.ql;d=Bc(b.eS);e=BO();j=0;while(j<d){BA(e,HT(b));j=j+1|0;}i.f5=e;i.lV=P_(a);d=Bc(a.cY);b=BO();j=0;while(j<d){e=PP(a.or);g=HT(a.ql);f=Bc(a.cY);k=new RN;k.lX=e;k.lm
=g;k.sC=f;BA(b,k);j=j+1|0;}i.ib=b;j=Bc(a.cY);i.vU=j==(-1)?null:BI(a.jJ,j);d=Bc(a.cY);b=BO();j=0;while(j<d){BA(b,Sw(a,i));j=j+1|0;}i.c7=b;a.nN.data[c]=i;return i;}
function P_(a){var b,c,d,e;b=Bc(a.cY);c=BO();d=0;while(d<b){e=Bc(a.cY);BA(c,BI(a.jJ,e));d=d+1|0;}return c;}
function AGR(){var a=this;B.call(a);a.mA=null;a.qh=null;}
function ANG(){var a=this;B.call(a);a.F2=0;a.Fi=0;a.st=0;a.nZ=0;}
function AFn(){var a=this;B.call(a);a.tx=null;a.ty=null;}
function AYO(a){var b,c,d,e,f,g;b=a.tx;c=a.ty;if(BR(c.mA,b.d.fM)){c=c.qh;CY(b,c.nZ,c.st,0);Ci((Bl(b)).bU,c.nZ,c.st);Ci((Bl(b)).bJ,c.Fi,c.F2);}else{d=(B5(b.fY.Cj)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){G7(b);b=new Y2;b.zX=g;b.zY=c;BG(b);c=new AAf;c.xO=b;$rt_globals.setTimeout(Bw(c,"onTimer"),0);}}}
function AFo(){var a=this;B.call(a);a.CZ=null;a.CY=null;}
function A1y(a){Js(a.CZ,a.CY);}
function H_(){Fn.call(this);this.fX=null;}
function A22(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=Mw(a.fX);c=new AA6;c.CO=a;d=new SD;d.t3=b;d.sG=c;e=new ACX;e.xD=C(38);f=P(EI,0);g=new Pi;g.ob=F(EI);h=F(EI).dl;h.$clinit();g.mZ=BP((((ATU(h)).data.length-1|0)/32|0)+1|0);BG(f);h=new P$;h.p8=f;if(h instanceof Pi){i=h;if(g.ob===i.ob){j=0;while(true){f=g.mZ.data;if(j>=f.length)break;k=f[j];l=i.mZ.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}GY(g,h);}m=new J;L(m);while(true){h=new Ww;h.yw=e;h.yx=m;g=d.t3;i=new Ui;i.sS=d;i.sR=h;if(!OL(g,i))break;}ADs(m,
0,C(21),0,M(C(21)));return K(LJ(m,C(21)));}
function KQ(){var a=this;Fn.call(a);a.iG=null;a.rl=0;}
function A6x(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AKD(a,b))return 0;c=b;return BR(a.iG,c.iG);}return 0;}
function Xm(){var a=this;B.call(a);a.r3=null;a.r1=null;a.r0=0;a.r2=0;}
function A3v(a,b){b=b;E9(a.r3,a.r1,b,a.r0,a.r2);}
function JX(){var a=this;Fn.call(a);a.iv=null;a.h2=null;}
function ATN(a){var b,c,d;b=a.iv.eY.g5;c=BT(a.h2);d=new J;L(d);b=H(d,b);Br(b,46);H(b,c);return K(d);}
function AYB(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BR(a.iv,c.iv)&&BR(a.h2,c.h2)?1:0;}return 0;}
function Xn(){var a=this;B.call(a);a.Dx=null;a.Dw=null;a.Dv=0;a.Du=0;}
function AQT(a,b){b=b;E9(a.Dx,a.Dw,b,a.Dv,a.Du);}
function AJE(){var a=this;B.call(a);a.g5=null;a.dG=0;}
function A07(a,b){var c=new AJE();ANR(c,a,b);return c;}
function ANR(a,b,c){a.g5=b;a.dG=c;}
function AT6(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.dG==c.dG&&BR(a.g5,c.g5)?1:0;}return 0;}
function AMc(a){var b,c,d;b=a.g5;c=a.dG;d=new J;L(d);b=H(d,b);Br(b,40);Br(V(b,c),41);return K(d);}
function Xc(){B.call(this);this.s4=null;}
function ARc(a,b){b=b;ABc(a.s4,b);}
var Op=G(Gk);
var LS=G(Gk);
function Wi(){B.call(this);this.Cp=null;}
function AYR(a,b){var c;b=b;c=a.Cp;Bu(c.bE,(CC(c.gp,b)).bs);}
function Ra(){B.call(this);this.rf=null;}
function A2T(a,b){b=b;ABW(a.rf,b);}
var Rf=G(0);
var EH=G(FT);
var N5=G(EH);
var VC=G(N5);
var OJ=G(Er);
var Vz=G(OJ);
var O5=G(EF);
function AZ6(a){var b;b=new DW;X(b);N(b);}
function ATq(a,b){var c;c=new DW;X(c);N(c);}
function ASk(a,b){b=new DW;X(b);N(b);}
var VA=G(O5);
function ATx(a,b){var c;c=new BJ;X(c);N(c);}
function ASC(a){return 0;}
function AQl(a){return BbS;}
function AOA(a){return 1;}
var Vx=G();
function AOi(a){return 0;}
function A3N(a){var b;b=new M_;X(b);N(b);}
function AVy(a){var b;b=new CV;X(b);N(b);}
var ZN=G(0);
var Vy=G();
var Xv=G();
function So(){var a=this;B.call(a);a.nq=0;a.tp=null;}
function A7N(a,b){var c,d,e;c=a.tp;b=b;d=c.z6;e=c.z5;d=b.a<=d&&e<=b.b?1:0;a.nq=d;return d?0:1;}
function AA7(){var a=this;B.call(a);a.l=null;a.en=0;a.nr=null;a.rO=0;a.io=0;a.ge=0;a.bG=0;a.oc=null;}
function NU(a){return a.l.b0;}
function W$(a,b,c,d){var e,f,g,h,i,j;e=BO();f=a.en;g=0;if(c!=f)a.en=c;a:{switch(b){case -1073741784:h=new S5;c=a.bG+1|0;a.bG=c;GQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RP;c=a.bG+1|0;a.bG=c;GQ(h,c);break a;case -33554392:h=new TW;c=a.bG+1|0;a.bG=c;GQ(h,c);break a;default:c=a.io+1|0;a.io=c;if(d!==null)h=A9V(c);else{h=new Gt;GQ(h,0);g=1;}c=a.io;if(c<=(-1))break a;if(c>=10)break a;a.nr.data[c]=h;break a;}h=new AFV;GQ(h,(-1));}while(true){if(FD(a.l)&&a.l.m==(-536870788))
{d=A56(Cn(a,2),Cn(a,64));while(!DL(a.l)&&FD(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CM(d,Bp(i));i=a.l;if(i.bp!=(-536870788))continue;Bp(i);}i=L4(a,d);i.X(h);}else if(a.l.bp==(-536870788)){i=Iv(h);Bp(a.l);}else{i=ZA(a,h);d=a.l;if(d.bp==(-536870788))Bp(d);}if(i!==null)BA(e,i);if(DL(a.l))break;if(a.l.bp==(-536870871))break;}if(a.l.nF==(-536870788))BA(e,Iv(h));if(a.en!=f&&!g){a.en=f;d=a.l;d.hI=f;d.m=d.bp;d.fN=d.fZ;j=d.dP;d.z=j+1|0;d.j9=j;Gc(d);}switch(b){case -1073741784:break;case -536870872:d
=new XL;Gu(d,e,h);return d;case -268435416:d=new AEE;Gu(d,e,h);return d;case -134217688:d=new AA$;Gu(d,e,h);return d;case -67108824:d=new Um;Gu(d,e,h);return d;case -33554392:d=new Em;Gu(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return A9N(BI(e,0),h);default:return A8n(e,h);}return Iv(h);}d=new K2;Gu(d,e,h);return d;}
function AMW(a){var b,c,d,e,f,g,h;b=BP(4);c=(-1);d=(-1);if(!DL(a.l)&&FD(a.l)){e=b.data;c=Bp(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B6(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bp;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bp(f);f=a.l;g=f.bp;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bp(f);return A5U(e,3);}return A5U(e,2);}if(!Cn(a,2))return AG5(b[0]);if(Cn(a,64))return A4q(b[0]);return AZE(b[0]);}e=b.data;c=1;while(c<4&&!DL(a.l)&&FD(a.l)){h=c+1|0;e[c]=Bp(a.l);c=h;}if(c==1){h=e[0];if(!(BbV.Fc(h)==BbW?0:1))return W2(a,e[0]);}if
(!Cn(a,2))return A$i(b,c);if(Cn(a,64)){f=new WX;QC(f,b,c);return f;}f=new AC8;QC(f,b,c);return f;}
function ZA(a,b){var c,d,e,f,g,h,i;if(FD(a.l)&&!Lv(a.l)&&N8(a.l.m)){if(Cn(a,128)){c=AMW(a);if(!DL(a.l)){d=a.l;e=d.bp;if(!(e==(-536870871)&&!(b instanceof Gt))&&e!=(-536870788)&&!FD(d))c=MZ(a,b,c);}}else if(!Y4(a.l)&&!AD7(a.l)){f=new QO;L(f);while(!DL(a.l)&&FD(a.l)&&!Y4(a.l)&&!AD7(a.l)){if(!(!Lv(a.l)&&!a.l.m)&&!(!Lv(a.l)&&N8(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bp(a.l);if(!MY(e))Br(f,e&65535);else KB(f,GR(e));}if(!Cn(a,2)){c=new ABp;Eb(c);c.cF
=K(f);e=f.I;c.bQ=e;c.pP=A3h(e);c.of=A3h(c.bQ);h=0;while(h<(c.bQ-1|0)){SO(c.pP,Q(c.cF,h),(c.bQ-h|0)-1|0);SO(c.of,Q(c.cF,(c.bQ-h|0)-1|0),(c.bQ-h|0)-1|0);h=h+1|0;}}else if(Cn(a,64))c=A$h(f);else{c=new P7;Eb(c);c.ic=K(f);c.bQ=f.I;}}else c=MZ(a,b,AFH(a,b));}else{d=a.l;if(d.bp!=(-536870871))c=MZ(a,b,AFH(a,b));else{if(b instanceof Gt)N(Co(C(21),d.b0,QM(d)));c=Iv(b);}}a:{if(!DL(a.l)){e=a.l.bp;if(!(e==(-536870871)&&!(b instanceof Gt))&&e!=(-536870788)){f=ZA(a,b);if(c instanceof Dh&&!(c instanceof Ge)&&!(c instanceof C8)
&&!(c instanceof Fm)){i=c;if(!f.b_(i.R)){c=new Ws;Fx(c,i.R,i.f,i.kn);c.R.X(c);}}if((f.jt()&65535)!=43)c.X(f);else c.X(f.R);break a;}}if(c===null)return null;c.X(b);}if((c.jt()&65535)!=43)return c;return c.R;}
function MZ(a,b,c){var d,e,f,g,h;d=a.l;e=d.bp;if(c!==null&&!(c instanceof Cf)){switch(e){case -2147483606:Bp(d);d=new Xx;Dz(d,c,b,e);Pl();c.X(BbX);return d;case -2147483605:Bp(d);d=new ZY;Dz(d,c,b,(-2147483606));Pl();c.X(BbX);return d;case -2147483585:Bp(d);d=new Rw;Dz(d,c,b,(-536870849));Pl();c.X(BbX);return d;case -2147483525:f=new P3;d=GM(d);g=a.ge+1|0;a.ge=g;Nj(f,d,c,b,(-536870849),g);Pl();c.X(BbX);return f;case -1073741782:case -1073741781:Bp(d);d=new SX;Dz(d,c,b,e);c.X(d);return d;case -1073741761:Bp(d);d
=new AAG;Dz(d,c,b,(-536870849));c.X(b);return d;case -1073741701:h=new U3;d=GM(d);e=a.ge+1|0;a.ge=e;Nj(h,d,c,b,(-536870849),e);c.X(h);return h;case -536870870:case -536870869:Bp(d);if(c.jt()!=(-2147483602)){d=new C8;Dz(d,c,b,e);}else if(Cn(a,32)){d=new SY;Dz(d,c,b,e);}else{d=new Y_;f=ZK(a.en);Dz(d,c,b,e);d.nE=f;}c.X(d);return d;case -536870849:Bp(d);d=new G8;Dz(d,c,b,(-536870849));c.X(b);return d;case -536870789:h=new GN;d=GM(d);e=a.ge+1|0;a.ge=e;Nj(h,d,c,b,(-536870849),e);c.X(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bp(d);d=new AF_;Fx(d,f,b,e);f.f=d;return d;case -2147483585:Bp(d);c=new Wm;Fx(c,f,b,(-2147483585));return c;case -2147483525:c=new Zz;Tm(c,GM(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bp(d);d=new AAF;Fx(d,f,b,e);f.f=d;return d;case -1073741761:Bp(d);c=new ADi;Fx(c,f,b,(-1073741761));return c;case -1073741701:c=new SN;Tm(c,GM(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bp(d);d=A8C(f,b,e);f.f=d;return d;case -536870849:Bp(d);c
=new Fm;Fx(c,f,b,(-536870849));return c;case -536870789:return A9l(GM(d),f,b,(-536870789));default:}return c;}
function AFH(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Gt;while(true){a:{e=a.l;f=e.bp;if((f&(-2147418113))==(-2147483608)){Bp(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.en=g;else{if(f!=(-1073741784))g=a.en;c=W$(a,f,g,b);e=a.l;if(e.bp!=(-536870871))N(Co(C(21),e.b0,e.dP));Bp(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bp(e);c
=A5I(0);break a;case -2147483577:Bp(e);c=new Y8;B8(c);break a;case -2147483558:Bp(e);c=new WT;h=a.bG+1|0;a.bG=h;AM8(c,h);break a;case -2147483550:Bp(e);c=A5I(1);break a;case -2147483526:Bp(e);c=new AE1;B8(c);break a;case -536870876:Bp(e);a.bG=a.bG+1|0;if(Cn(a,8)){if(Cn(a,1)){c=A8f(a.bG);break a;}c=A7X(a.bG);break a;}if(Cn(a,1)){c=A8r(a.bG);break a;}c=A8L(a.bG);break a;case -536870866:Bp(e);if(Cn(a,32)){c=A8S();break a;}c=A8I(ZK(a.en));break a;case -536870821:Bp(e);i=0;c=a.l;if(c.bp==(-536870818)){i=1;Bp(c);}c
=L4(a,HZ(a,i));c.X(b);e=a.l;if(e.bp!=(-536870819))N(Co(C(21),e.b0,e.dP));Zo(e,1);Bp(a.l);break a;case -536870818:Bp(e);a.bG=a.bG+1|0;if(!Cn(a,8)){c=new LU;B8(c);break a;}c=new Yf;e=ZK(a.en);B8(c);c.AN=e;break a;case 0:j=e.fZ;if(j!==null)c=L4(a,j);else{if(DL(e)){c=Iv(b);break a;}c=AG5(f&65535);}Bp(a.l);break a;default:break b;}Bp(e);c=new LU;B8(c);break a;}h=(f&2147483647)-48|0;if(a.io<h)N(Co(C(21),Gi(e),QM(a.l)));Bp(e);a.bG=a.bG+1|0;c=!Cn(a,2)?A87(h,a.bG):Cn(a,64)?A8g(h,a.bG):A$f(h,a.bG);a.nr.data[h].pC=1;a.rO
=1;break a;}if(f>=0&&!HD(e)){c=W2(a,f);Bp(a.l);}else if(f==(-536870788))c=Iv(b);else{if(f!=(-536870871)){b=new KR;c=!HD(a.l)?WP(f&65535):a.l.fZ.L();e=a.l;Ns(b,c,e.b0,e.dP);N(b);}if(d){b=new KR;e=a.l;Ns(b,C(21),e.b0,e.dP);N(b);}c=Iv(b);}}}if(f!=(-16777176))break;}return c;}
function HZ(a,b){var c,d,e,f,g,h,i,j,$$je;c=A56(Cn(a,2),Cn(a,64));E4(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DL(a.l))break a;h=a.l;b=h.bp;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CM(c,d);d=Bp(a.l);h=a.l;if(h.bp!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bp(h);e=1;d=(-1);break d;}Bp(h);if(g){c=HZ(a,0);break d;}if(a.l.bp==(-536870819))break d;WF(c,HZ(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bp(h);h=a.l;i=h.bp;if(HD(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(N8(i))break e;i=i&65535;break e;}catch($$e){$$je=Fc($$e);if($$je instanceof EM){break b;}else{throw $$e;}}}try{Cd(c,d,i);}catch($$e){$$je=Fc($$e);if($$je instanceof EM){break b;}else{throw $$e;}}Bp(a.l);d=(-1);break d;}}if(d>=0)CM(c,d);d=45;Bp(a.l);break d;case -536870821:if(d>=0){CM(c,d);d=(-1);}Bp(a.l);j=0;h=a.l;if(h.bp==(-536870818)){Bp(h);j=1;}if(!e)AKb(c,HZ(a,j));else WF(c,HZ(a,j));e=0;Bp(a.l);break d;case -536870819:if(d>=0)CM(c,
d);d=93;Bp(a.l);break d;case -536870818:if(d>=0)CM(c,d);d=94;Bp(a.l);break d;case 0:if(d>=0)CM(c,d);h=a.l.fZ;if(h===null)d=0;else{ANF(c,h);d=(-1);}Bp(a.l);break d;default:}if(d>=0)CM(c,d);d=Bp(a.l);}g=0;}N(Co(C(21),NU(a),a.l.dP));}N(Co(C(21),NU(a),a.l.dP));}if(!f){if(d>=0)CM(c,d);return c;}N(Co(C(21),NU(a),a.l.dP-1|0));}
function W2(a,b){var c,d,e;c=MY(b);if(Cn(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AZE(b&65535);}if(Cn(a,64)&&b>128){if(c){d=new XG;Eb(d);d.bQ=2;d.n1=Hv(Ht(b));return d;}if(Rd(b))return AT3(b&65535);if(!TJ(b))return A4q(b&65535);return A1M(b&65535);}}if(!c){if(Rd(b))return AT3(b&65535);if(!TJ(b))return AG5(b&65535);return A1M(b&65535);}d=new Es;Eb(d);d.bQ=2;d.hw=b;e=(GR(b)).data;d.kB=e[0];d.j0=e[1];return d;}
function L4(a,b){var c,d,e;if(!AL8(b)){if(!b.V){if(b.iR())return ARt(b);return AWd(b);}if(!b.iR())return A15(b);c=new Nk;ADA(c,b);return c;}c=AGw(b);d=new PO;B8(d);d.nI=c;d.x8=c.bn;if(!b.V){if(b.iR())return AIv(ARt(J9(b)),d);return AIv(AWd(J9(b)),d);}if(!b.iR())return AIv(A15(J9(b)),d);c=new Se;e=new Nk;ADA(e,J9(b));AJP(c,e,d);return c;}
function J_(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cn(a,b){return (a.en&b)!=b?0:1;}
function ABO(){B.call(this);this.za=null;}
function AXu(a,b){L5(a.za,b);}
var K3=G(DW);
var Ki=G(Bt);
var OW=G(Bt);
function ZI(){B.call(this);this.AE=null;}
function A3O(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.AE;d=CL(c[0]);e=(CL(c[1])).data[0];if(!ADg(b.h)){c=b.h;if(c.cI==e){e=b.rc;f=MN(d);Fb(c.ea);Fb(c.d2);NW(c);while(f.fD>=f.i0.data.length?0:1){if(Bc(f)==(-1))continue;g=W9(c,Bc(f));h=O4(Cg(c,g.bt),g.bx);if(Bc(f)==(-1)){if(!e)continue;h.b8=0;h.bH=h.bH|4;continue;}i=W9(c,Bc(f));j=Bc(f);k=Bc(f);D6(c.ea,g,i);l=c.d2;m=BO();if(CC(l,i)===null)D6(l,i,m);BA(CC(c.d2,i),g);h.b8=j;h.bH=k;}Jx(b);if(b.F4){n=Kn(EN(),b.Cz);if(A76(n,Bq(100))){b=Fh(b);c=new J;L(c);H(Id(H(H(c,
b),C(486)),n),C(203));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function AJ1(){B.call(this);this.TN=null;}
function R6(){var a=this;B.call(a);a.zE=null;a.kN=null;}
function WN(){B.call(this);this.tC=null;}
function A1I(a,b){var c,d;c=a.tC;c.lE=b;H3(c.H,b.qT);H3(c.M,c.lE.qU);b=c.m8;d=c.lE;b.hr=d;c.f_.eO=d;}
var AGx=G();
function AGU(b){var c,d,e,f,g,h,i,j;c=AZn();d=CN(b);Bu(c,d);e=0;f=0;while(f<d){g=Cg(b,f);h=J1(g);Bu(c,h);i=0;while(i<h){j=Ku(g,i);Hu(c,e,MO(j));e=e+MO(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RZ(c);}
function AGD(b){var c,d,e,f,g,h,i,j,k;c=Bc(b);d=P(Ij,c);e=d.data;f=0;while(f<c){a:{g=Bc(b);if(g!=(-1)){h=Bc(b);i=Bc(b);if(i==(-1))e[g]=AZ8(h);else{j=new Ij;j.fJ=h;j.oj=BP(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].oj.data[k]=Bc(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AKz(b,c,d,e){var f,g,h,i;f=Fr(b);g=Fr(c);h=AGU(b);i=AGU(c);b=new AD1;b.AD=d;CG(e,b,C(487),I(B,[f,h,g,i]));}
function AB5(){var a=this;B.call(a);a.ru=null;a.rv=null;}
function AYP(a){var b,c;b=a.ru;c=a.rv;Cx(b.cl.F,c);ACL(b);}
function AD8(){var a=this;B.call(a);a.G7=null;a.la=null;}
function AQz(a,b){var c;c=a.la;b=b;a.la=Zu(!c.o3&&!b.fa?0:1);return 1;}
function Rq(){EH.call(this);this.jS=null;}
function TD(a){var b;b=new ACe;Os(b,a.jS);return b;}
function UZ(){EH.call(this);this.Ax=null;}
function NG(a){var b;b=new UR;Os(b,a.Ax);return b;}
function Rs(){FT.call(this);this.xy=null;}
function Xy(){B.call(this);this.xi=null;}
function A0C(a,b){b=b;P9(a.xi,b);}
function Vl(){B.call(this);this.vZ=null;}
function A2t(a,b){b=b;HG(a.vZ,b);}
function MX(){var a=this;K$.call(a);a.lv=null;a.x2=0;}
function AZc(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AMd(a,b))return 0;c=b;return BR(a.lv,c.lv);}return 0;}
function Ub(){var a=this;B.call(a);a.tn=null;a.to=0;a.ti=0;a.tk=null;a.tl=0;a.tm=0;}
function AW7(a,b){var c,d,e,f,g,h,i,j;c=a.tn;d=a.to;e=a.ti;f=a.tk;g=a.tl;h=a.tm;i=Cw(c.bh,5.0);d=Be((c.bh.bV.a-d|0)-i|0,Bd((i-d|0)-c.U.j.a|0,b.k.a));j=Be((c.bh.bV.b-e|0)-i|0,Bd((i-e|0)-c.U.j.b|0,b.k.b));Y(f,d+g|0,j+h|0);EJ(c,f,c.Z.j);}
function AHk(){var a=this;F7.call(a);a.SU=null;a.Ur=0;a.LV=0;a.J_=0;}
function AD1(){B.call(this);this.AD=null;}
function A2l(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.AD;d=CL(c[0]);c=MN(d);e=new Vq;d=AGD(c);f=AGD(c);g=Bc(c);h=P(JN,g);i=h.data;j=0;while(j<g){i[j]=Ee(Bc(c),Bc(c),Bc(c),Bc(c),Bc(c));j=j+1|0;}AH6(e,d,f,h);b.g(e);}
function P8(){B.call(this);this.xB=null;}
function A7k(a,b){var c,d,e,f,g;c=a.xB;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(488)),e);Bf(d,K(f));d=c.q.b9;e=new RS;g=P(B,1);g.data[0]=b;CG(d,e,C(332),g);}
function Vs(){B.call(this);this.Bb=null;}
function A0O(a,b){var c,d,e,f,g;c=a.Bb;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(489)),e);Bf(d,K(f));e=c.q.b9;d=new AB_;d.A9=c;g=P(B,1);g.data[0]=b;CG(e,d,C(490),g);}
function Ql(){B.call(this);this.EW=null;}
function ATl(a,b){var c,d,e;c=Bj();d=BT(b);e=new J;L(e);H(H(e,C(491)),d);Bf(c,K(e));d=new AF3;d.Dp=b;c=D4();BG(c);e=new AF2;e.s7=c;WR(b,d,e);}
function Z0(){B.call(this);this.yI=null;}
function AWa(a,b){var c,d,e,f;c=a.yI;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(492)),e);Bf(d,K(f));d=new ADG;e=new Tq;e.y_=c;d.ks=IR();c=BO();d.ez=c;d.jI=1;d.jr=0;d.sD=e;BA(c,Jk(b));BA(d.ez,b);e=Bj();c=BT(d.ks);f=new J;L(f);H(H(f,C(493)),c);Bf(e,K(f));Ia(b,d);}
function NM(){var a=this;EA.call(a);a.d8=null;a.gY=null;a.x7=null;a.n_=null;a.A_=null;}
function BbY(a,b,c){var d=new NM();UP(d,a,b,c);return d;}
function UP(a,b,c,d){var e;KK(a,b,c,d);b=new V6;c=a.J;QT(b,c.F);d=I8(c);b.iU=d;b.db=G5(d);c=G5(b.iU);b.da=c;OZ(b.e3,b.db,c);e=new PI;e.u8=b;c=b.db;c.iV=e;b.da.iV=e;Jv(c,0);Jv(b.da,0);c=b.db;c.cc=1;b.u7=AJs(c,b.da);Nc(b,I(CH,[b.db,b.da,b.e3]));a.d8=b;AAn(b,a.gM);b=Lb(a,a.d8,30.0);a.gY=b;c=new Xq;c.v$=a;b.i5=c;c=new Xp;c.vy=a;b.i1=c;DY(a.J,b);b=a.d8;b.db.lW=a;b.da.lW=a;Cx(a.J.F,a);}
function Zv(a,b){var c;c=a.d8;return c.db!==b&&c.da!==b&&a!==b?0:1;}
function A49(a,b){Eu(a.gY,b.cd);AAn(a.d8,b);}
function NH(a,b,c){var d,e;d=!c?a.d8.da:a.d8.db;e=new S2;e.A0=a;e.AZ=b;e.AY=c;Ga(d,b,e);}
function A6c(a){if(Zv(a,a.J.F.cf))Cx(a.J.F,null);a.gY=null;a.d8=null;}
function AY0(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.d8;d=c.db;c=c.da;e=B3(d,b);f=B3(c,b);if(!e&&!f)return CQ(I(By,[NF(a,1,C(283)),NF(a,0,C(284))]));g=!e?C(284):C(283);if(e)c=d;d=NF(a,e,g);h=a.d8;i=h.iU;j=a.hE;k=new Rr;g=h.db;h=h.da;l=i.cl.F;k.mv=g;k.mu=h;k.zr=l;g=a.J;BG(g);h=new QL;h.rb=g;return NQ(JM(i,c,j,a,k,h),b,d);}
function NF(a,b,c){var d,e;d=new By;e=new ST;e.AL=a;e.Aw=b;Ce(d,e,c);return d;}
function ZZ(a,b){var c,d,e;c=a.J;d=c.F.b9;e=new SR;e.xo=a;e.xn=b;F5(d,NT(c,e));}
function A6d(a,b){var c,d;if(!AEh(b)){if(b.bb!=27)return 0;if(!AAy(b))AFY(a.J);else Nz(a.gY);return 1;}c=a.J.F.cf;b=a.d8;d=b.db;if(!(d!==c&&b.da!==c))ZZ(a,d!==c?0:1);return 1;}
var Xz=G();
function A5B(a){return Oz();}
var Rb=G();
function ARa(a){return Oz();}
var XS=G();
function APP(a){return Oz();}
function XT(){var a=this;B.call(a);a.ec=null;a.AI=null;a.z$=null;}
function PP(a){var b,c,d,e,f,g,h,i;a:{b=Bc(a.ec);switch(b){case 3:break;case 5:c=QF(a);d=OQ(a);b=Bc(a.ec);e=Bc(a.ec);f=Bc(a.ec);g=BO();h=0;while(h<f){BA(g,OQ(a));h=h+1|0;}i=new MX;AII(i,c,d,b);i.lv=g;i.x2=e;break a;default:c=new CV;d=new J;L(d);V(H(d,C(494)),b);Bn(c,K(d));N(c);}i=A8F(QF(a),OQ(a),Bc(a.ec));}return i;}
function QF(a){var b,c;b=Bc(a.ec);c=Bc(a.ec);return A07(ET(a.AI,b,c),Bc(a.ec));}
function OQ(a){var b;b=Bc(a.ec);if(b==(-1))return null;return BI(a.z$,b);}
function SI(){var a=this;B.call(a);a.eS=null;a.Cq=null;a.CG=null;}
function HT(a){var b,c,d,e,f;a:{b:{b=Bc(a.eS);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Yk(a);d=RT(a);b=Bc(a.eS);e=TG(a);f=new KQ;OC(f,c,d,2);f.rl=b;f.iG=e;break a;case 4:c=HT(a);d=HT(a);f=new JX;OC(f,c.eY,c.gk,9);f.iv=c;f.h2=d;break a;case 5:f=A75(Yk(a),RT(a),Bc(a.eS));break a;case 9:c=TG(a);f=new H_;d=!EU(c)&&BI(c,0)!==null?(BI(c,0)).gk:null;OC(f,null,null,7);f.fX=BO();c=B9(c);while(Cb(c)){e=Cc(c);if(!(e instanceof H_))BA(f.fX,e);else{e=e;GY(f.fX,e.fX);}}f.gk=d;break a;default:break b;}f
=null;break a;}c=new CV;d=new J;L(d);V(H(d,C(495)),b);Bn(c,K(d));N(c);}return f;}
function Yk(a){var b,c;b=Bc(a.eS);c=Bc(a.eS);return A07(ET(a.Cq,b,c),Bc(a.eS));}
function RT(a){var b;b=Bc(a.eS);if(b==(-1))return null;return BI(a.CG,b);}
function TG(a){var b,c,d;b=Bc(a.eS);c=BO();d=0;while(d<b){BA(c,HT(a));d=d+1|0;}return c;}
function BW(){var a=this;B.call(a);a.f=null;a.cQ=0;a.pL=null;a.kn=0;}
var A$S=0;function B8(a){var b;b=A$S;A$S=b+1|0;a.pL=Iu(b);}
function Om(a,b){var c;c=A$S;A$S=c+1|0;a.pL=Iu(c);a.f=b;}
function Jc(a,b,c,d){var e;e=d.A;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Jl(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZR(a,b){a.kn=b;}
function AZo(a){return a.kn;}
function AIc(a){var b,c,d;b=a.pL;c=a.t();d=new J;L(d);Br(d,60);b=H(d,b);Br(b,58);Br(H(b,c),62);return K(d);}
function AVi(a){return AIc(a);}
function AVJ(a){return a.f;}
function AWs(a,b){a.f=b;}
function A5Y(a,b){return 1;}
function A6Q(a){return null;}
function K9(a){var b;a.cQ=1;b=a.f;if(b!==null){if(!b.cQ){b=b.g9();if(b!==null){a.f.cQ=1;a.f=b;}a.f.ff();}else if(b instanceof Ik&&b.fj.pC)a.f=b.f;}}
function AJX(){A$S=1;}
function U4(){var a=this;B.call(a);a.ud=null;a.ua=null;a.t_=null;a.uc=0;a.ub=0;a.ug=0;a.uf=0;a.ui=0;a.uh=0;a.ue=0;a.s8=0;}
function A69(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.ud;d=a.ua;e=a.t_;f=a.uc;g=a.ub;h=a.ug;i=a.uf;j=a.ui;k=a.uh;l=a.ue;m=a.s8;n=Cw(c.bh,5.0);o=c.Z.ik();Ct(d,c.Z.j);Ct(e,c.Z.i);switch(f){case -1:f=Be(h+(b.k.a-g|0)|0,c.bh.bV.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.k.a|0)-g|0,Bd(o.a,n-c.U.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.k.b-k|0)|0,(c.bh.bV.b+c.U.j.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.k.b|0)-k|0,o.b);}EJ(c,e,d);}
function Wa(){var a=this;B.call(a);a.y5=null;a.y4=0.0;}
function N$(a,b){return L3(a.y5,b,a.y4*2.0+0.875);}
function V6(){var a=this;IN.call(a);a.iU=null;a.db=null;a.da=null;a.u7=null;a.nl=null;a.kl=0;}
function AAn(a,b){Gb(a.iU,b);a.e3.iO=b;E_(a.db,b);E_(a.da,b);}
function Xq(){B.call(this);this.v$=null;}
function A1N(a){var b;b=a.v$;Cx(b.J.F,b.A_);}
function Xp(){B.call(this);this.vy=null;}
function AST(a){var b,c;b=a.vy;c=b.J.F.cf;if(!Zv(b,c))c=null;b.A_=c;}
function SH(){var a=this;B.call(a);a.zn=null;a.zl=null;a.zm=null;}
function A03(a){AHp(a.zn,a.zl,a.zm);}
var Y9=G();
function ATA(a,b){AMV(b);}
function ACx(){var a=this;B.call(a);a.Ds=null;a.Dt=null;}
function AOT(a){var b,c;b=a.Ds;c=a.Dt;GJ(b.C.bI,ES(c));}
function X5(){B.call(this);this.rT=null;}
function A2s(a,b){b=b;Pz(a.rT,b);}
function Xl(){B.call(this);this.yF=null;}
function A7K(a,b){b=b;HG(a.yF,b);}
function C7(){var a=this;BW.call(a);a.pC=0;a.eJ=0;}
var BbX=null;function Pl(){Pl=Bm(C7);A0E();}
function A9V(a){var b=new C7();GQ(b,a);return b;}
function GQ(a,b){Pl();B8(a);a.eJ=b;}
function AOS(a,b,c,d){var e,f;e=JI(d,a.eJ);NE(d,a.eJ,b);f=a.f.c(b,c,d);if(f<0)NE(d,a.eJ,e);return f;}
function A2G(a){return a.eJ;}
function ARy(a){return C(496);}
function AO8(a,b){return 0;}
function A0E(){var b;b=new Y5;B8(b);BbX=b;}
function Hy(){var a=this;B.call(a);a.bl=null;a.hI=0;a.fR=0;a.wM=0;a.nF=0;a.bp=0;a.m=0;a.A$=0;a.fZ=null;a.fN=null;a.z=0;a.kz=0;a.dP=0;a.j9=0;a.b0=null;}
var BbZ=null;var BbV=null;var BbW=0;function Zo(a,b){if(b>0&&b<3)a.fR=b;if(b==1){a.m=a.bp;a.fN=a.fZ;a.z=a.j9;a.j9=a.dP;Gc(a);}}
function HD(a){return a.fZ===null?0:1;}
function Lv(a){return a.fN===null?0:1;}
function Bp(a){Gc(a);return a.nF;}
function GM(a){var b;b=a.fZ;Gc(a);return b;}
function Gc(a){var b,c,d,e,f,g,h,$$je;a.nF=a.bp;a.bp=a.m;a.fZ=a.fN;a.dP=a.j9;a.j9=a.z;while(true){b=0;c=a.z>=a.bl.data.length?0:MB(a);a.m=c;a.fN=null;if(a.fR==4){if(c!=92)return;c=a.z;d=a.bl.data;c=c>=d.length?0:d[B_(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.z=a.kz;return;}a.fR=a.wM;a.m=a.z>(a.bl.data.length-2|0)?0:MB(a);}a:{c=a.m;if(c!=92){e=a.fR;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bl.data[a.z]!=63){a.m=(-2147483608);break a;}B_(a);c=a.bl.data[a.z];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B_(a);break b;default:N(Co(C(21),Gi(a),a.z));}a.m=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bl.data[a.z];e=1;break b;case 61:a.m=(-536870872);B_(a);break b;case 62:a.m=(-33554392);B_(a);break b;default:f=AND(a);a.m=f;if(f<256){a.hI=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.hI=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B_(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.z;d=a.bl.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B_(a);break a;case 63:a.m=c|(-1073741824);B_(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);Zo(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fN=AJr(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.z>=(a.bl.data.length-2|0)?(-1):MB(a);c:{a.m=c;switch(c){case -1:N(Co(C(21),Gi(a),a.z));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AIn(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fR!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Co(C(21),Gi(a),a.z));case 68:case 83:case 87:case 100:case 115:case 119:a.fN=Ti(ET(a.bl,
a.kz,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.wM=a.fR;a.fR=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.z;d=a.bl.data;if(c>=(d.length-2|0))N(Co(C(21),Gi(a),a.z));a.m=d[B_(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Z2(a,4);break a;case 120:a.m=Z2(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AMe(a);h=0;if(a.m==80)h=1;try{a.fN=Ti(g,h);}catch($$e){$$je=Fc($$e);if($$je instanceof Nn){N(Co(C(21),Gi(a),a.z));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AMe(a){var b,c,d,e,f,g;b=new J;Gd(b,10);c=a.z;d=a.bl;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=ET(d,B_(a),1);f=new J;L(f);H(H(f,C(497)),b);return K(f);}B_(a);c=0;a:{while(true){g=a.z;d=a.bl.data;if(g>=(d.length-2|0))break;c=d[B_(a)];if(c==125)break a;Br(b,c);}}if(c!=125)N(Co(C(21),a.b0,a.z));}if(!b.I)N(Co(C(21),a.b0,a.z));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(497)),f);return K(b);}b:{c:{if(M(f)>3){if(Ob(f,C(497)))break c;if(Ob(f,C(498)))break c;}break b;}f=DD(f,2);}return f;}
function AJr(a,b){var c,d,e,f,g,$$je;c=new J;Gd(c,4);d=(-1);e=2147483647;a:{while(true){f=a.z;g=a.bl.data;if(f>=g.length)break a;b=g[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ln(Eq(c),10);AJx(c,0,AKF(c));continue;}catch($$e){$$je=Fc($$e);if($$je instanceof DA){break;}else{throw $$e;}}Br(c,b&65535);}N(Co(C(21),a.b0,a.z));}if(b!=125)N(Co(C(21),a.b0,a.z));if(c.I>0)b:{try{e=Ln(Eq(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Fc($$e);if($$je instanceof DA){}else{throw $$e;}}N(Co(C(21),a.b0,a.z));}else if
(d<0)N(Co(C(21),a.b0,a.z));if((d|e|(e-d|0))<0)N(Co(C(21),a.b0,a.z));b=a.z;g=a.bl.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B_(a);break c;case 63:a.m=(-1073741701);B_(a);break c;default:}a.m=(-536870789);}c=new XY;c.gc=d;c.gb=e;return c;}
function Gi(a){return a.b0;}
function DL(a){return !a.bp&&!a.m&&a.z==a.A$&&!HD(a)?1:0;}
function N8(b){return b<0?0:1;}
function FD(a){return !DL(a)&&!HD(a)&&N8(a.bp)?1:0;}
function Y4(a){var b;b=a.bp;return b<=56319&&b>=55296?1:0;}
function AD7(a){var b;b=a.bp;return b<=57343&&b>=56320?1:0;}
function TJ(b){return b<=56319&&b>=55296?1:0;}
function Rd(b){return b<=57343&&b>=56320?1:0;}
function Z2(a,b){var c,d,e,f,$$je;c=new J;Gd(c,b);d=a.bl.data.length-2|0;e=0;while(true){f=BQ(e,b);if(f>=0)break;if(a.z>=d)break;Br(c,a.bl.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=Ln(Eq(c),16);}catch($$e){$$je=Fc($$e);if($$je instanceof DA){break a;}else{throw $$e;}}return b;}N(Co(C(21),a.b0,a.z));}
function AIn(a){var b,c,d,e,f,g;b=3;c=1;d=a.bl.data;e=d.length-2|0;f=ADN(d[a.z],8);switch(f){case -1:break;default:if(f>3)b=2;B_(a);a:{while(true){if(c>=b)break a;g=a.z;if(g>=e)break a;g=ADN(a.bl.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B_(a);c=c+1|0;}}return f;}N(Co(C(21),a.b0,a.z));}
function AND(a){var b,c,d,e;b=1;c=a.hI;a:while(true){d=a.z;e=a.bl.data;if(d>=e.length)N(Co(C(21),a.b0,d));b:{c:{switch(e[d]){case 41:B_(a);return c|256;case 45:if(!b)N(Co(C(21),a.b0,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c,d,e,f;b=a.z;a.kz=b;if(!(a.hI&4))a.z=b+1|0;else{c=a.bl.data.length-2|0;a.z=b+1|0;a:while(true){d=a.z;if(d<c&&SJ(a.bl.data[d])){a.z=a.z+1|0;continue;}d=a.z;if(d>=c)break;e=a.bl.data;if(e[d]!=35)break;a.z=d+1|0;while(true){f=a.z;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.z=f+1|0;}}}return a.kz;}
function ANe(b){return BbZ.JT(b);}
function MB(a){var b,c,d,e;b=a.bl.data[B_(a)];if(C1(b)){c=a.kz+1|0;d=a.bl.data;if(c<d.length){e=d[c];if(Dp(e)){B_(a);return E5(b,e);}}}return b;}
function QM(a){return a.dP;}
function KR(){var a=this;BU.call(a);a.EY=null;a.EH=null;a.tT=0;}
function Co(a,b,c){var d=new KR();Ns(d,a,b,c);return d;}
function Ns(a,b,c,d){X(a);a.tT=(-1);a.EY=b;a.EH=c;a.tT=d;}
function PI(){B.call(this);this.u8=null;}
function A6g(a,b){var c,d,e;c=a.u8;d=c.db;if(d===b)c.kl=c.kl|1;e=c.da;if(e===b)c.kl=c.kl|2;if((c.kl&3)==3){b=d.d.h;d=e.d.h;e=new Y7;e.xP=c;AKz(b,d,e,c.iU.cl.F.b9);}}
var S5=G(C7);
function AYx(a,b,c,d){var e;e=a.eJ;B2(d,e,b-DM(d,e)|0);return a.f.c(b,c,d);}
function AZX(a){return C(499);}
function A4S(a,b){return 0;}
var AFV=G(C7);
function AZO(a,b,c,d){return b;}
function A1X(a){return C(500);}
var RP=G(C7);
function APb(a,b,c,d){if(DM(d,a.eJ)!=b)b=(-1);return b;}
function A5S(a){return C(501);}
function TW(){C7.call(this);this.yq=0;}
function AYA(a,b,c,d){var e;e=a.eJ;B2(d,e,b-DM(d,e)|0);a.yq=b;return b;}
function AVL(a){return C(502);}
function A3Q(a,b){return 0;}
var Gt=G(C7);
function AWG(a,b,c,d){if(d.mH!=1&&b!=d.A)return (-1);d.k3=1;NE(d,0,b);return b;}
function AZy(a){return C(503);}
function Cf(){BW.call(this);this.bQ=0;}
function Eb(a){B8(a);a.bQ=1;}
function A7p(a,b,c,d){var e;if((b+a.cn()|0)>d.A){d.d9=1;return (-1);}e=a.bF(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A5y(a){return a.bQ;}
function AR4(a,b){return 1;}
var AJc=G(Cf);
function Iv(a){var b=new AJc();A2P(b,a);return b;}
function A2P(a,b){Om(a,b);a.bQ=1;a.kn=1;a.bQ=0;}
function A4$(a,b,c){return 0;}
function A0H(a,b,c,d){var e,f,g;e=d.A;f=d.dt;while(true){g=BQ(b,e);if(g>0)return (-1);if(g<0&&Dp(Q(c,b))&&b>f&&C1(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AZL(a,b,c,d,e){var f,g;f=e.A;g=e.dt;while(true){if(c<b)return (-1);if(c<f&&Dp(Q(d,c))&&c>g&&C1(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ARz(a){return C(504);}
function AYz(a,b){return 0;}
function B$(){var a=this;BW.call(a);a.bS=null;a.fj=null;a.bc=0;}
function A8n(a,b){var c=new B$();Gu(c,a,b);return c;}
function Gu(a,b,c){B8(a);a.bS=b;a.fj=c;a.bc=c.eJ;}
function ARg(a,b,c,d){var e,f,g,h;if(a.bS===null)return (-1);e=G0(d,a.bc);Ea(d,a.bc,b);f=a.bS.p;g=0;while(true){if(g>=f){Ea(d,a.bc,e);return (-1);}h=(BI(a.bS,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AUq(a,b){a.fj.f=b;}
function ASb(a){return C(505);}
function A2p(a,b){var c;a:{c=a.bS;if(c!==null){c=B9(c);while(true){if(!Cb(c))break a;if(!(Cc(c)).b_(b))continue;else return 1;}}}return 0;}
function AUV(a,b){return JI(b,a.bc)>=0&&G0(b,a.bc)==JI(b,a.bc)?0:1;}
function APy(a){var b,c,d,e;a.cQ=1;b=a.fj;if(b!==null&&!b.cQ)K9(b);a:{b=a.bS;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break a;b=BI(a.bS,d);e=b.g9();if(e===null)e=b;else{b.cQ=1;E2(a.bS,d);ALL(a.bS,d,e);}if(!e.cQ)e.ff();d=d+1|0;}}}if(a.f!==null)K9(a);}
var K2=G(B$);
function AUd(a,b,c,d){var e,f,g,h;e=DM(d,a.bc);B2(d,a.bc,b);f=a.bS.p;g=0;while(true){if(g>=f){B2(d,a.bc,e);return (-1);}h=(BI(a.bS,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ASV(a){return C(506);}
function A4v(a,b){return !DM(b,a.bc)?0:1;}
var Em=G(K2);
function AZ$(a,b,c,d){var e,f,g;e=DM(d,a.bc);B2(d,a.bc,b);f=a.bS.p;g=0;while(g<f){if((BI(a.bS,g)).c(b,c,d)>=0)return a.f.c(a.fj.yq,c,d);g=g+1|0;}B2(d,a.bc,e);return (-1);}
function A4n(a,b){a.f=b;}
function AOo(a){return C(506);}
var XL=G(Em);
function AUo(a,b,c,d){var e,f;e=a.bS.p;f=0;while(f<e){if((BI(a.bS,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AWx(a,b){return 0;}
function A6L(a){return C(507);}
var AEE=G(Em);
function AO5(a,b,c,d){var e,f;e=a.bS.p;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bS,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A5C(a,b){return 0;}
function ARb(a){return C(508);}
var AA$=G(Em);
function APw(a,b,c,d){var e,f,g,h;e=a.bS.p;f=d.k6?0:d.dt;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((BI(a.bS,h)).cX(f,b,c,d)>=0){B2(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function A7G(a,b){return 0;}
function AT4(a){return C(509);}
var Um=G(Em);
function AYb(a,b,c,d){var e,f;e=a.bS.p;B2(d,a.bc,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bS,f)).cX(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A4I(a,b){return 0;}
function APd(a){return C(510);}
function Ik(){B$.call(this);this.dF=null;}
function A9N(a,b){var c=new Ik();AG3(c,a,b);return c;}
function AG3(a,b,c){B8(a);a.dF=b;a.fj=c;a.bc=c.eJ;}
function AOg(a,b,c,d){var e,f;e=G0(d,a.bc);Ea(d,a.bc,b);f=a.dF.c(b,c,d);if(f>=0)return f;Ea(d,a.bc,e);return (-1);}
function AS0(a,b,c,d){var e;e=a.dF.cJ(b,c,d);if(e>=0)Ea(d,a.bc,e);return e;}
function A4U(a,b,c,d,e){var f;f=a.dF.cX(b,c,d,e);if(f>=0)Ea(e,a.bc,f);return f;}
function A2n(a,b){return a.dF.b_(b);}
function A3M(a){var b;b=new PZ;AG3(b,a.dF,a.fj);a.f=b;return b;}
function AW_(a){var b;a.cQ=1;b=a.fj;if(b!==null&&!b.cQ)K9(b);b=a.dF;if(b!==null&&!b.cQ){b=b.g9();if(b!==null){a.dF.cQ=1;a.dF=b;}a.dF.ff();}}
var HA=G();
function Ba(){var a=this;HA.call(a);a.bn=0;a.cP=0;a.S=null;a.mO=null;a.ni=null;a.V=0;}
var Bb0=null;function Q8(){Q8=Bm(Ba);APT();}
function BB(a){var b;Q8();b=new AFi;b.G=BP(64);a.S=b;}
function AY$(a){return null;}
function AYM(a){return a.S;}
function AL8(a){var b,c,d,e,f;if(!a.cP)b=IO(a.S,0)>=2048?0:1;else{a:{c=a.S;b=0;d=c.bz;if(b<d){e=c.G.data;f=(e[0]^(-1))>>>0|0;if(f)b=JB(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+JB(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A1k(a){return a.V;}
function A5t(a){return a;}
function AGw(a){var b,c;if(a.ni===null){b=a.gj();c=new Wr;c.GJ=a;c.yC=b;BB(c);a.ni=c;E4(c,a.cP);}return a.ni;}
function J9(a){var b,c;if(a.mO===null){b=a.gj();c=new Wo;c.E1=a;c.Cl=b;c.wT=a;BB(c);a.mO=c;E4(c,a.bn);a.mO.V=a.V;}return a.mO;}
function A6K(a){return 0;}
function E4(a,b){var c;c=a.bn;if(c^b){a.bn=c?0:1;a.cP=a.cP?0:1;}if(!a.V)a.V=1;return a;}
function AQL(a){return a.bn;}
function N6(b,c){Q8();return b.o(c);}
function KA(b,c){var d,e;Q8();if(b.eg()!==null&&c.eg()!==null){b=b.eg();c=c.eg();d=Be(b.G.data.length,c.G.data.length);e=0;a:{while(e<d){if(b.G.data[e]&c.G.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Ti(b,c){var d,e,f;Q8();d=0;while(true){AVm();e=Bb1.data;if(d>=e.length){f=new Nn;Bn(f,C(21));f.Fu=C(21);f.GO=b;N(f);}e=e[d].data;if(Bk(b,e[0]))break;d=d+1|0;}return AMP(e[1],c);}
function APT(){var b;b=new HL;AVm();Bb0=b;}
function AGW(){var a=this;Ba.call(a);a.qk=0;a.rD=0;a.ip=0;a.n0=0;a.eU=0;a.g6=0;a.P=null;a.bL=null;}
function DN(){var a=new AGW();AXH(a);return a;}
function A56(a,b){var c=new AGW();APH(c,a,b);return c;}
function AXH(a){BB(a);a.P=A7J();}
function APH(a,b,c){BB(a);a.P=A7J();a.qk=b;a.rD=c;}
function CM(a,b){a:{if(a.qk){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eU){Pp(a.P,J_(b&65535));break a;}Mr(a.P,J_(b&65535));break a;}if(a.rD&&b>128){a.ip=1;b=Hv(Ht(b));}}}if(!(!TJ(b)&&!Rd(b))){if(a.n0)Pp(a.S,b-55296|0);else Mr(a.S,b-55296|0);}if(a.eU)Pp(a.P,b);else Mr(a.P,b);if(!a.V&&MY(b))a.V=1;return a;}
function ANF(a,b){var c,d,e;if(!a.V&&b.V)a.V=1;if(a.n0){if(!b.cP)GH(a.S,b.gj());else Dw(a.S,b.gj());}else if(!b.cP)G6(a.S,b.gj());else{GW(a.S,b.gj());Dw(a.S,b.gj());a.cP=a.cP?0:1;a.n0=1;}if(!a.g6&&b.eg()!==null){if(a.eU){if(!b.bn)GH(a.P,b.eg());else Dw(a.P,b.eg());}else if(!b.bn)G6(a.P,b.eg());else{GW(a.P,b.eg());Dw(a.P,b.eg());a.bn=a.bn?0:1;a.eU=1;}}else{c=a.bn;d=a.bL;if(d!==null){if(!c){e=new Zi;e.FR=a;e.C4=c;e.wH=d;e.wz=b;BB(e);a.bL=e;}else{e=new Zj;e.G3=a;e.us=c;e.Ap=d;e.z1=b;BB(e);a.bL=e;}}else{if(c&&!a.eU
&&Pf(a.P)){d=new Zf;d.Gg=a;d.Au=b;BB(d);a.bL=d;}else if(!c){d=new Zd;d.pV=a;d.pi=c;d.y9=b;BB(d);a.bL=d;}else{d=new Ze;d.ov=a;d.na=c;d.wD=b;BB(d);a.bL=d;}a.g6=1;}}return a;}
function Cd(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;X(d);N(d);}a:{b:{if(!a.qk){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CM(a,b);b=b+1|0;}}if(!a.eU)Jp(a.P,b,c+1|0);else{d=a.P;c=c+1|0;if(b>c){d=new BJ;X(d);N(d);}e=d.bz;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.G.data;h[g]=h[g]&(Kv(d,b)|Jh(d,f));}else{h=d.G.data;h[g]=h[g]&Kv(d,b);e=g+1|0;while(e<c){d.G.data[e]=0;e=e+1|0;}if(f&31){h=d.G.data;h[c]=h[c]&Jh(d,f);}}HM(d);}}}}return a;}
function AKb(a,b){var c,d,e;if(!a.V&&b.V)a.V=1;if(b.ip)a.ip=1;c=a.cP;if(!(c^b.cP)){if(!c)G6(a.S,b.S);else Dw(a.S,b.S);}else if(c)GH(a.S,b.S);else{GW(a.S,b.S);Dw(a.S,b.S);a.cP=1;}if(!a.g6&&C_(b)!==null){c=a.bn;if(!(c^b.bn)){if(!c)G6(a.P,C_(b));else Dw(a.P,C_(b));}else if(c)GH(a.P,C_(b));else{GW(a.P,C_(b));Dw(a.P,C_(b));a.bn=1;}}else{c=a.bn;d=a.bL;if(d!==null){if(!c){e=new Q0;e.DR=a;e.v1=c;e.Cv=d;e.w0=b;BB(e);a.bL=e;}else{e=new Ri;e.D7=a;e.CT=c;e.ri=d;e.rF=b;BB(e);a.bL=e;}}else{if(!a.eU&&Pf(a.P)){if(!c){d=new Zg;d.G5
=a;d.tj=b;BB(d);a.bL=d;}else{d=new Zh;d.FU=a;d.CK=b;BB(d);a.bL=d;}}else if(!c){d=new Zk;d.v4=a;d.uJ=b;d.As=c;BB(d);a.bL=d;}else{d=new Zl;d.u6=a;d.ve=b;d.By=c;BB(d);a.bL=d;}a.g6=1;}}}
function WF(a,b){var c,d,e;if(!a.V&&b.V)a.V=1;if(b.ip)a.ip=1;c=a.cP;if(!(c^b.cP)){if(!c)Dw(a.S,b.S);else G6(a.S,b.S);}else if(!c)GH(a.S,b.S);else{GW(a.S,b.S);Dw(a.S,b.S);a.cP=0;}if(!a.g6&&C_(b)!==null){c=a.bn;if(!(c^b.bn)){if(!c)Dw(a.P,C_(b));else G6(a.P,C_(b));}else if(!c)GH(a.P,C_(b));else{GW(a.P,C_(b));Dw(a.P,C_(b));a.bn=0;}}else{c=a.bn;d=a.bL;if(d!==null){if(!c){e=new Q2;e.FQ=a;e.B6=c;e.yB=d;e.uq=b;BB(e);a.bL=e;}else{e=new Q3;e.FV=a;e.BL=c;e.x9=d;e.B2=b;BB(e);a.bL=e;}}else{if(!a.eU&&Pf(a.P)){if(!c){d=new QY;d.D$
=a;d.zA=b;BB(d);a.bL=d;}else{d=new QZ;d.G1=a;d.s6=b;BB(d);a.bL=d;}}else if(!c){d=new Q4;d.DE=a;d.C2=b;d.u$=c;BB(d);a.bL=d;}else{d=new QX;d.u9=a;d.BQ=b;d.AH=c;BB(d);a.bL=d;}a.g6=1;}}}
function Df(a,b){var c;c=a.bL;if(c!==null)return a.bn^c.o(b);return a.bn^D8(a.P,b);}
function C_(a){if(!a.g6)return a.P;return null;}
function A0D(a){return a.S;}
function AWi(a){var b,c;if(a.bL!==null)return a;b=C_(a);c=new Q1;c.FF=a;c.lZ=b;BB(c);return E4(c,a.bn);}
function A24(a){var b,c,d;b=new J;L(b);c=IO(a.P,0);while(c>=0){KB(b,GR(c));Br(b,124);c=IO(a.P,c+1|0);}d=b.I;if(d>0)We(b,d-1|0);return K(b);}
function AQO(a){return a.ip;}
function Nn(){var a=this;Bt.call(a);a.Fu=null;a.GO=null;}
function Ey(){BW.call(this);this.R=null;}
function Dz(a,b,c,d){Om(a,c);a.R=b;a.kn=d;}
function A7w(a){return a.R;}
function AVw(a,b){return !a.R.b_(b)&&!a.f.b_(b)?0:1;}
function A57(a,b){return 1;}
function ATj(a){var b;a.cQ=1;b=a.f;if(b!==null&&!b.cQ){b=b.g9();if(b!==null){a.f.cQ=1;a.f=b;}a.f.ff();}b=a.R;if(b!==null){if(!b.cQ){b=b.g9();if(b!==null){a.R.cQ=1;a.R=b;}a.R.ff();}else if(b instanceof Ik&&b.fj.pC)a.R=b.f;}}
function Dh(){Ey.call(this);this.bj=null;}
function A8C(a,b,c){var d=new Dh();Fx(d,a,b,c);return d;}
function Fx(a,b,c,d){Dz(a,b,c,d);a.bj=b;}
function AYc(a,b,c,d){var e,f;e=0;a:{while((b+a.bj.cn()|0)<=d.A){f=a.bj.bF(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bj.cn()|0;e=e+(-1)|0;}return f;}
function AZG(a){return C(511);}
function Ge(){Dh.call(this);this.jq=null;}
function A9l(a,b,c,d){var e=new Ge();Tm(e,a,b,c,d);return e;}
function Tm(a,b,c,d,e){Fx(a,c,d,e);a.jq=b;}
function AYW(a,b,c,d){var e,f,g,h,i;e=a.jq;f=e.gc;g=e.gb;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bj.cn()|0)>d.A)break a;i=a.bj.bF(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bj.cn()|0;h=h+(-1)|0;}return i;}if((b+a.bj.cn()|0)>d.A){d.d9=1;return (-1);}i=a.bj.bF(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AZa(a){return ACQ(a.jq);}
var C8=G(Ey);
function AYq(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.R.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A1E(a){return C(512);}
var Fm=G(Dh);
function A2C(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AXS(a,b){a.f=b;a.R.X(b);}
var Ws=G(Dh);
function A7j(a,b,c,d){while((b+a.bj.cn()|0)<=d.A&&a.bj.bF(b,c)>0){b=b+a.bj.cn()|0;}return a.f.c(b,c,d);}
function ATL(a,b,c,d){var e,f,g;e=a.f.cJ(b,c,d);if(e<0)return (-1);f=e-a.bj.cn()|0;while(f>=b&&a.bj.bF(f,c)>0){g=f-a.bj.cn()|0;e=f;f=g;}return e;}
function Bg(){var a=this;B.call(a);a.ox=null;a.nJ=null;}
function AMP(a,b){if(!b&&a.ox===null)a.ox=a.K();else if(b&&a.nJ===null)a.nJ=E4(a.K(),1);if(b)return a.nJ;return a.ox;}
var DA=G(BU);
function XY(){var a=this;HA.call(a);a.gc=0;a.gb=0;}
function ACQ(a){var b,c,d,e,f;b=a.gc;c=a.gb;d=c!=2147483647?Iu(c):C(21);e=new J;L(e);Br(e,123);f=V(e,b);Br(f,44);Br(H(f,d),125);return K(e);}
var Y5=G(BW);
function ASm(a,b,c,d){return b;}
function A3G(a){return C(513);}
function A3K(a,b){return 0;}
function AFi(){var a=this;B.call(a);a.G=null;a.bz=0;}
function A7J(){var a=new AFi();AZz(a);return a;}
function AZz(a){a.G=BP(0);}
function Mr(a,b){var c,d;c=b/32|0;if(b>=a.bz){KC(a,c+1|0);a.bz=b+1|0;}d=a.G.data;d[c]=d[c]|1<<(b%32|0);}
function Jp(a,b,c){var d,e,f,g,h;d=BQ(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bz){KC(a,f+1|0);a.bz=c;}if(d==f){g=a.G.data;g[d]=g[d]|Jh(a,b)&Kv(a,c);}else{g=a.G.data;g[d]=g[d]|Jh(a,b);h=d+1|0;while(h<f){a.G.data[h]=(-1);h=h+1|0;}if(c&31){g=a.G.data;g[f]=g[f]|Kv(a,c);}}}
function Jh(a,b){return (-1)<<(b%32|0);}
function Kv(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Pp(a,b){var c,d,e,f;c=b/32|0;d=a.G.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bz-1|0))HM(a);}}
function D8(a,b){var c,d;c=b/32|0;d=a.G.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function IO(a,b){var c,d,e,f;c=a.bz;if(b>=c)return (-1);d=b/32|0;e=a.G.data;f=e[d]>>>(b%32|0)|0;if(f)return JB(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+JB(e[f])|0;f=f+1|0;}return (-1);}
function KC(a,b){var c;c=a.G.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.G=JU(a.G,c);}
function HM(a){var b,c,d;b=(a.bz+31|0)/32|0;a.bz=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=YJ(a.G.data[c]);if(d<32)break;c=c+(-1)|0;a.bz=a.bz-32|0;}a.bz=a.bz-d|0;}}
function Dw(a,b){var c,d,e,f;c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&b.G.data[d];d=d+1|0;}while(true){f=a.G.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bz=Be(a.bz,b.bz);HM(a);}
function GH(a,b){var c,d,e;c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&(b.G.data[d]^(-1));d=d+1|0;}HM(a);}
function G6(a,b){var c,d,e;c=Bd(a.bz,b.bz);a.bz=c;KC(a,(c+31|0)/32|0);c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]|b.G.data[d];d=d+1|0;}}
function GW(a,b){var c,d,e;c=Bd(a.bz,b.bz);a.bz=c;KC(a,(c+31|0)/32|0);c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]^b.G.data[d];d=d+1|0;}HM(a);}
function Pf(a){return a.bz?0:1;}
function PO(){var a=this;B$.call(a);a.nI=null;a.x8=0;}
function A3S(a){var b,c,d;b=!a.x8?C(65):C(514);c=a.nI.L();d=new J;L(d);H(H(H(d,C(515)),b),c);return K(d);}
function Se(){var a=this;B$.call(a);a.lq=null;a.mD=null;}
function AIv(a,b){var c=new Se();AJP(c,a,b);return c;}
function AJP(a,b,c){B8(a);a.lq=b;a.mD=c;}
function AOP(a,b,c,d){var e,f,g,h,i;e=a.lq.c(b,c,d);if(e<0)a:{f=a.mD;g=d.dt;e=d.A;h=b+1|0;e=BQ(h,e);if(e>0){d.d9=1;e=(-1);}else{i=Q(c,b);if(!f.nI.o(i))e=(-1);else{if(C1(i)){if(e<0&&Dp(Q(c,h))){e=(-1);break a;}}else if(Dp(i)&&b>g&&C1(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A3B(a,b){a.f=b;a.mD.f=b;a.lq.X(b);}
function A33(a){var b,c,d;b=a.lq;c=a.mD;d=new J;L(d);H(H(H(H(d,C(516)),b),C(517)),c);return K(d);}
function APh(a,b){return 1;}
function AO7(a,b){return 1;}
function Ef(){var a=this;B$.call(a);a.dJ=null;a.n8=0;}
function A15(a){var b=new Ef();ADA(b,a);return b;}
function ADA(a,b){B8(a);a.dJ=b.my();a.n8=b.bn;}
function A0w(a,b,c,d){var e,f,g,h;e=d.A;if(b<e){f=b+1|0;g=Q(c,b);if(a.o(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(J2(g,f)&&a.o(E5(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A6F(a){var b,c,d;b=!a.n8?C(65):C(514);c=a.dJ.L();d=new J;L(d);H(H(H(d,C(515)),b),c);return K(d);}
function AQ1(a,b){return a.dJ.o(b);}
function AOK(a,b){if(b instanceof Es)return N6(a.dJ,b.hw);if(b instanceof E0)return N6(a.dJ,b.dH);if(b instanceof Ef)return KA(a.dJ,b.dJ);if(!(b instanceof EV))return 1;return KA(a.dJ,b.f8);}
function ASf(a){return a.dJ;}
function A5m(a,b){a.f=b;}
function AQE(a,b){return 1;}
var Nk=G(Ef);
function AR5(a,b){return a.dJ.o(Hv(Ht(b)));}
function AXe(a){var b,c,d;b=!a.n8?C(65):C(514);c=a.dJ.L();d=new J;L(d);H(H(H(d,C(518)),b),c);return K(d);}
function AGQ(){var a=this;Cf.call(a);a.p2=null;a.tA=0;}
function ARt(a){var b=new AGQ();ATW(b,a);return b;}
function ATW(a,b){Eb(a);a.p2=b.my();a.tA=b.bn;}
function A18(a,b,c){return !a.p2.o(F4(FG(Q(c,b))))?(-1):1;}
function AZe(a){var b,c,d;b=!a.tA?C(65):C(514);c=a.p2.L();d=new J;L(d);H(H(H(d,C(518)),b),c);return K(d);}
function EV(){var a=this;Cf.call(a);a.f8=null;a.vi=0;}
function AWd(a){var b=new EV();AUI(b,a);return b;}
function AUI(a,b){Eb(a);a.f8=b.my();a.vi=b.bn;}
function XB(a,b,c){return !a.f8.o(Q(c,b))?(-1):1;}
function ASq(a){var b,c,d;b=!a.vi?C(65):C(514);c=a.f8.L();d=new J;L(d);H(H(H(d,C(515)),b),c);return K(d);}
function AUs(a,b){if(b instanceof E0)return N6(a.f8,b.dH);if(b instanceof EV)return KA(a.f8,b.f8);if(!(b instanceof Ef)){if(!(b instanceof Es))return 1;return 0;}return KA(a.f8,b.dJ);}
function Zn(){var a=this;B$.call(a);a.jH=null;a.qJ=null;a.ll=0;}
function A5U(a,b){var c=new Zn();AYr(c,a,b);return c;}
function AYr(a,b,c){B8(a);a.jH=b;a.ll=c;}
function AS7(a,b){a.f=b;}
function LM(a){if(a.qJ===null)a.qJ=GI(a.jH);return a.qJ;}
function AVq(a){var b,c;b=LM(a);c=new J;L(c);H(H(c,C(519)),b);return K(c);}
function ANY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.A;f=BP(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?D$([k,l]):D$([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ll;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jH.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ll==3){k=f[0];m=a.jH.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ll==2){b=f[0];m=a.jH.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AZh(a,b){return b instanceof Zn&&!Bk(LM(b),LM(a))?0:1;}
function AWn(a,b){return 1;}
function E0(){Cf.call(this);this.dH=0;}
function AG5(a){var b=new E0();AUM(b,a);return b;}
function AUM(a,b){Eb(a);a.dH=b;}
function A1Y(a){return 1;}
function ARq(a,b,c){return a.dH!=Q(c,b)?(-1):1;}
function AQr(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Ky(c,a.dH,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ASh(a,b,c,d,e){var f;if(!(d instanceof BC))return Jl(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HW(d,a.dH,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AWz(a){var b,c;b=a.dH;c=new J;L(c);Br(c,b);return K(c);}
function AWe(a,b){if(b instanceof E0)return b.dH!=a.dH?0:1;if(!(b instanceof EV)){if(b instanceof Ef)return b.o(a.dH);if(!(b instanceof Es))return 1;return 0;}return XB(b,0,WP(a.dH))<=0?0:1;}
function AJA(){Cf.call(this);this.pg=0;}
function A4q(a){var b=new AJA();A2Z(b,a);return b;}
function A2Z(a,b){Eb(a);a.pg=F4(FG(b));}
function AX2(a,b,c){return a.pg!=F4(FG(Q(c,b)))?(-1):1;}
function A3A(a){var b,c;b=a.pg;c=new J;L(c);Br(H(c,C(520)),b);return K(c);}
function AGc(){var a=this;Cf.call(a);a.oZ=0;a.yz=0;}
function AZE(a){var b=new AGc();AVj(b,a);return b;}
function AVj(a,b){Eb(a);a.oZ=b;a.yz=J_(b);}
function AN$(a,b,c){return a.oZ!=Q(c,b)&&a.yz!=Q(c,b)?(-1):1;}
function ARE(a){var b,c;b=a.oZ;c=new J;L(c);Br(H(c,C(521)),b);return K(c);}
function Gh(){var a=this;B$.call(a);a.kg=0;a.nB=null;a.m9=null;a.m3=0;}
function A$i(a,b){var c=new Gh();QC(c,a,b);return c;}
function QC(a,b,c){B8(a);a.kg=1;a.m9=b;a.m3=c;}
function A6T(a,b){a.f=b;}
function AUc(a,b,c,d){var e,f,g,h,i,j,k,l;e=BP(4);f=d.A;if(b>=f)return (-1);g=LW(a,b,c,f);h=b+a.kg|0;i=ANe(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Db(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LW(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ANe(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.kg|0;if(h>=f){b=k;break a;}g=LW(a,h,c,f);b=k;}}}if(b!=a.m3)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.m9.data[g])break;g=g+1|0;}return (-1);}
function MT(a){var b,c;if(a.nB===null){b=new J;L(b);c=0;while(c<a.m3){KB(b,GR(a.m9.data[c]));c=c+1|0;}a.nB=K(b);}return a.nB;}
function A3r(a){var b,c;b=MT(a);c=new J;L(c);H(H(c,C(522)),b);return K(c);}
function LW(a,b,c,d){var e,f,g;a.kg=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(J2(e,f)){g=B6(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&C1(g[0])&&Dp(g[1])?E5(g[0],g[1]):g[0];a.kg=2;}}return e;}
function ASn(a,b){return b instanceof Gh&&!Bk(MT(b),MT(a))?0:1;}
function A4p(a,b){return 1;}
var WX=G(Gh);
var AC8=G(Gh);
var Xx=G(C8);
function AZT(a,b,c,d){var e;while(true){e=a.R.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var ZY=G(C8);
function A2W(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.R.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var G8=G(C8);
function A5i(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.R.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A6j(a,b){a.f=b;a.R.X(b);}
var Rw=G(G8);
function ASd(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A3c(a,b){a.f=b;}
function GN(){var a=this;C8.call(a);a.gD=null;a.d$=0;}
function Bb2(a,b,c,d,e){var f=new GN();Nj(f,a,b,c,d,e);return f;}
function Nj(a,b,c,d,e,f){Dz(a,c,d,e);a.gD=b;a.d$=f;}
function A7D(a,b,c,d){var e,f;e=XW(d,a.d$);if(!a.R.O(d))return a.f.c(b,c,d);if(e>=a.gD.gb)return a.f.c(b,c,d);f=a.d$;e=e+1|0;E$(d,f,e);f=a.R.c(b,c,d);if(f>=0){E$(d,a.d$,0);return f;}f=a.d$;e=e+(-1)|0;E$(d,f,e);if(e>=a.gD.gc)return a.f.c(b,c,d);E$(d,a.d$,0);return (-1);}
function AWM(a){return ACQ(a.gD);}
var P3=G(GN);
function ARK(a,b,c,d){var e,f,g;e=0;f=a.gD.gb;a:{while(true){g=a.R.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gD.gc)return (-1);return a.f.c(b,c,d);}
var SX=G(C8);
function AXf(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.R.c(b,c,d);}
var AAG=G(G8);
function APi(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.R.c(b,c,d);return e;}
var U3=G(GN);
function AYF(a,b,c,d){var e,f,g;e=XW(d,a.d$);if(!a.R.O(d))return a.f.c(b,c,d);f=a.gD;if(e>=f.gb){E$(d,a.d$,0);return a.f.c(b,c,d);}if(e<f.gc){E$(d,a.d$,e+1|0);g=a.R.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){E$(d,a.d$,0);return g;}E$(d,a.d$,e+1|0);g=a.R.c(b,c,d);}return g;}
var SY=G(Ey);
function A7s(a,b,c,d){var e;e=d.A;if(e>b)return a.f.cX(b,e,c,d);return a.f.c(b,c,d);}
function AVX(a,b,c,d){var e;e=d.A;if(a.f.cX(b,e,c,d)>=0)return b;return (-1);}
function A39(a){return C(523);}
function Y_(){Ey.call(this);this.nE=null;}
function AUt(a,b,c,d){var e,f;e=d.A;f=ADS(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cX(b,e,c,d);return a.f.c(b,c,d);}
function ANZ(a,b,c,d){var e,f,g,h;e=d.A;f=a.f.cJ(b,c,d);if(f<0)return (-1);g=ADS(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.f.cX(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.nE.jk(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ADS(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nE.jk(Q(d,b)))break;b=b+1|0;}return b;}
function A4O(a){return C(524);}
var FS=G();
var Bb3=null;var Bb4=null;function ZK(b){var c;if(!(b&1)){c=Bb4;if(c!==null)return c;c=new AEc;Bb4=c;return c;}c=Bb3;if(c!==null)return c;c=new AEb;Bb3=c;return c;}
var AF_=G(Dh);
function AOz(a,b,c,d){var e;a:{while(true){if((b+a.bj.cn()|0)>d.A)break a;e=a.bj.bF(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var Wm=G(Fm);
function ATz(a,b,c,d){var e;if((b+a.bj.cn()|0)<=d.A){e=a.bj.bF(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var Zz=G(Ge);
function A4X(a,b,c,d){var e,f,g,h,i;e=a.jq;f=e.gc;g=e.gb;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bj.cn()|0)>d.A)break a;i=a.bj.bF(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bj.cn()|0)>d.A){d.d9=1;return (-1);}i=a.bj.bF(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var AAF=G(Dh);
function AUp(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bj.cn()|0)<=d.A){e=a.bj.bF(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ADi=G(Fm);
function AOI(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.R.c(b,c,d);}
var SN=G(Ge);
function A5a(a,b,c,d){var e,f,g,h,i,j;e=a.jq;f=e.gc;g=e.gb;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bj.cn()|0)<=d.A){i=a.bj.bF(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bj.cn()|0)>d.A){d.d9=1;return (-1);}j=a.bj.bF(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LU=G(BW);
function A2o(a,b,c,d){if(b&&!(d.g7&&b==d.dt))return (-1);return a.f.c(b,c,d);}
function A1O(a,b){return 0;}
function ATB(a){return C(525);}
function AG_(){BW.call(this);this.wJ=0;}
function A5I(a){var b=new AG_();AR8(b,a);return b;}
function AR8(a,b){B8(a);a.wJ=b;}
function AY8(a,b,c,d){var e,f,g;e=b<d.A?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.k6?0:d.dt;return (e!=32&&!AAJ(a,e,b,g,c)?0:1)^(f!=32&&!AAJ(a,f,b-1|0,g,c)?0:1)^a.wJ?(-1):a.f.c(b,c,d);}
function AZf(a,b){return 0;}
function A7B(a){return C(526);}
function AAJ(a,b,c,d,e){var f;if(!Lm(b)&&b!=95){a:{if(CK(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(Lm(f))return 0;if(CK(f)!=6)return 1;}}return 1;}return 0;}
var Y8=G(BW);
function AR7(a,b,c,d){if(b!=d.js)return (-1);return a.f.c(b,c,d);}
function AXI(a,b){return 0;}
function AYY(a){return C(527);}
function WT(){BW.call(this);this.hK=0;}
function A8L(a){var b=new WT();AM8(b,a);return b;}
function AM8(a,b){B8(a);a.hK=b;}
function A4a(a,b,c,d){var e,f,g;e=!d.g7?M(c):d.A;if(b>=e){B2(d,a.hK,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hK,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hK,0);return a.f.c(b,c,d);}
function AZM(a,b){var c;c=!DM(b,a.hK)?0:1;B2(b,a.hK,(-1));return c;}
function A2D(a){return C(528);}
var AE1=G(BW);
function A3y(a,b,c,d){if(b<(d.k6?M(c):d.A))return (-1);d.d9=1;d.GC=1;return a.f.c(b,c,d);}
function AX1(a,b){return 0;}
function ARf(a){return C(529);}
function Yf(){BW.call(this);this.AN=null;}
function AZI(a,b,c,d){a:{if(b!=d.A){if(!b)break a;if(d.g7&&b==d.dt)break a;if(a.AN.BO(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function AQ9(a,b){return 0;}
function AYS(a){return C(530);}
var AJm=G(B$);
function A8S(){var a=new AJm();A3m(a);return a;}
function A3m(a){B8(a);}
function AXi(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.d9=1;return (-1);}g=Q(c,b);if(C1(g)){h=b+2|0;if(h<=e&&J2(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function AP8(a){return C(531);}
function AZj(a,b){a.f=b;}
function A3j(a){return (-2147483602);}
function AZi(a,b){return 1;}
function AGV(){B$.call(this);this.n5=null;}
function A8I(a){var b=new AGV();APA(b,a);return b;}
function APA(a,b){B8(a);a.n5=b;}
function A3s(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.d9=1;return (-1);}g=Q(c,b);if(C1(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(J2(g,h))return a.n5.jk(E5(g,h))?(-1):a.f.c(b,c,d);}}return a.n5.jk(g)?(-1):a.f.c(f,c,d);}
function AZS(a){return C(66);}
function A4N(a,b){a.f=b;}
function ANL(a){return (-2147483602);}
function AXx(a,b){return 1;}
function ANc(){BW.call(this);this.ka=0;}
function A8r(a){var b=new ANc();A00(b,a);return b;}
function A00(a,b){B8(a);a.ka=b;}
function ASp(a,b,c,d){var e;e=!d.g7?M(c):d.A;if(b>=e){B2(d,a.ka,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.ka,1);return a.f.c(b+1|0,c,d);}return (-1);}
function A0Z(a,b){var c;c=!DM(b,a.ka)?0:1;B2(b,a.ka,(-1));return c;}
function ASK(a){return C(528);}
function AL_(){BW.call(this);this.ja=0;}
function A8f(a){var b=new AL_();A1l(b,a);return b;}
function A1l(a,b){B8(a);a.ja=b;}
function AT7(a,b,c,d){if((!d.g7?M(c)-b|0:d.A-b|0)<=0){B2(d,a.ja,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.ja,1);return a.f.c(b+1|0,c,d);}
function A0S(a,b){var c;c=!DM(b,a.ja)?0:1;B2(b,a.ja,(-1));return c;}
function AOm(a){return C(532);}
function AKa(){BW.call(this);this.hi=0;}
function A7X(a){var b=new AKa();A7F(b,a);return b;}
function A7F(a,b){B8(a);a.hi=b;}
function A1J(a,b,c,d){var e,f,g;e=!d.g7?M(c)-b|0:d.A-b|0;if(!e){B2(d,a.hi,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.hi,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.hi,0);return a.f.c(b,c,d);}B2(d,a.hi,0);return a.f.c(b,c,d);default:}return (-1);}
function APE(a,b){var c;c=!DM(b,a.hi)?0:1;B2(b,a.hi,(-1));return c;}
function AQ$(a){return C(533);}
function II(){var a=this;B$.call(a);a.ry=0;a.h0=0;}
function A$f(a,b){var c=new II();Rc(c,a,b);return c;}
function Rc(a,b,c){B8(a);a.ry=b;a.h0=c;}
function AOC(a,b,c,d){var e,f,g,h;e=Hg(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.h0,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&J_(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A4k(a,b){a.f=b;}
function Hg(a,b){var c,d;c=a.ry;d=G0(b,c);c=JI(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.n9)?Cz(b.n9,d,c):null;}
function AYy(a){var b,c;b=a.bc;c=new J;L(c);V(H(c,C(534)),b);return K(c);}
function AVb(a,b){var c;c=!DM(b,a.h0)?0:1;B2(b,a.h0,(-1));return c;}
var ANi=G(II);
function A87(a,b){var c=new ANi();A5$(c,a,b);return c;}
function A5$(a,b,c){Rc(a,b,c);}
function APJ(a,b,c,d){var e,f;e=Hg(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=!ADz(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.h0,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AWv(a,b,c,d){var e,f;e=Hg(a,d);f=d.dt;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=Z1(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AOn(a,b,c,d,e){var f,g;f=Hg(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=RQ(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A2R(a,b){return 1;}
function A6i(a){var b,c;b=a.bc;c=new J;L(c);V(H(c,C(535)),b);return K(c);}
function ALs(){II.call(this);this.DT=0;}
function A8g(a,b){var c=new ALs();AQ6(c,a,b);return c;}
function AQ6(a,b,c){Rc(a,b,c);}
function ASW(a,b,c,d){var e,f;e=Hg(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.h0,M(e));return a.f.c(b+M(e)|0,c,d);}if(F4(FG(Q(e,f)))!=F4(FG(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AZg(a){var b,c;b=a.DT;c=new J;L(c);V(H(c,C(536)),b);return K(c);}
var QO=G(Hk);
function AQR(a,b,c,d,e){X1(a,b,c,d,e);return a;}
function AY_(a,b,c,d){AFs(a,b,c,d);return a;}
function AZx(a,b){ND(a,b);}
function A5x(a,b,c){AFK(a,b,c);return a;}
function ABp(){var a=this;Cf.call(a);a.cF=null;a.pP=null;a.of=null;}
function AP1(a,b,c){return !LT(a,c,b)?(-1):a.bQ;}
function AY6(a,b,c,d){var e,f,g;e=d.A;while(true){if(b>e)return (-1);f=Q(a.cF,a.bQ-1|0);a:{while(true){g=a.bQ;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&LT(a,c,b))break;b=b+AB6(a.pP,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bQ|0,c,d)>=0)break;b=b+1|0;}return b;}
function A04(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cF,0);g=(M(d)-c|0)-a.bQ|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&LT(a,d,c))break;c=c-AB6(a.of,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bQ|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AUk(a){var b,c;b=a.cF;c=new J;L(c);H(H(c,C(537)),b);return K(c);}
function ARw(a,b){var c;if(b instanceof E0)return b.dH!=Q(a.cF,0)?0:1;if(b instanceof EV)return XB(b,0,Cz(a.cF,0,1))<=0?0:1;if(!(b instanceof Ef)){if(!(b instanceof Es))return 1;return M(a.cF)>1&&b.hw==E5(Q(a.cF,0),Q(a.cF,1))?1:0;}a:{b:{b=b;if(!b.o(Q(a.cF,0))){if(M(a.cF)<=1)break b;if(!b.o(E5(Q(a.cF,0),Q(a.cF,1))))break b;}c=1;break a;}c=0;}return c;}
function LT(a,b,c){var d;d=0;while(d<a.bQ){if(Q(b,d+c|0)!=Q(a.cF,d))return 0;d=d+1|0;}return 1;}
function AGb(){Cf.call(this);this.kd=null;}
function A$h(a){var b=new AGb();A5O(b,a);return b;}
function A5O(a,b){var c,d,e;Eb(a);c=new J;L(c);d=0;while(true){e=BQ(d,b.I);if(e>=0){a.kd=K(c);a.bQ=c.I;return;}if(d<0)break;if(e>=0)break;Br(c,F4(FG(b.D.data[d])));d=d+1|0;}b=new BJ;X(b);N(b);}
function AS1(a,b,c){var d;d=0;while(true){if(d>=M(a.kd))return M(a.kd);if(Q(a.kd,d)!=F4(FG(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function ARF(a){var b,c;b=a.kd;c=new J;L(c);H(H(c,C(538)),b);return K(c);}
function P7(){Cf.call(this);this.ic=null;}
function A4Y(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.ic))return M(a.ic);e=Q(a.ic,d);f=b+d|0;if(e!=Q(c,f)&&J_(Q(a.ic,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A5R(a){var b,c;b=a.ic;c=new J;L(c);H(H(c,C(539)),b);return K(c);}
var HL=G();
var Bb5=null;var Bb6=null;var Bb1=null;function AVm(){AVm=Bm(HL);AQg();}
function AQg(){Bb5=A8O();Bb6=A9z();Bb1=I($rt_arraycls(B),[I(B,[C(540),A8V()]),I(B,[C(541),A7V()]),I(B,[C(542),A93()]),I(B,[C(543),A98()]),I(B,[C(544),Bb6]),I(B,[C(545),A9G()]),I(B,[C(546),A8k()]),I(B,[C(547),A89()]),I(B,[C(548),A86()]),I(B,[C(549),A72()]),I(B,[C(550),A79()]),I(B,[C(551),A9a()]),I(B,[C(552),A8B()]),I(B,[C(553),A7R()]),I(B,[C(554),A96()]),I(B,[C(555),A78()]),I(B,[C(556),A9E()]),I(B,[C(557),A9k()]),I(B,[C(558),A9F()]),I(B,[C(559),A74()]),I(B,[C(560),A9_()]),I(B,[C(561),A9e()]),I(B,[C(562),A8t()]),
I(B,[C(563),A91()]),I(B,[C(564),A9Y()]),I(B,[C(565),A8P()]),I(B,[C(566),A73()]),I(B,[C(567),A9R()]),I(B,[C(568),Bb5]),I(B,[C(569),A8w()]),I(B,[C(570),A8_()]),I(B,[C(571),Bb5]),I(B,[C(572),A7P()]),I(B,[C(573),Bb6]),I(B,[C(574),A8b()]),I(B,[C(575),R(0,127)]),I(B,[C(576),R(128,255)]),I(B,[C(577),R(256,383)]),I(B,[C(578),R(384,591)]),I(B,[C(579),R(592,687)]),I(B,[C(580),R(688,767)]),I(B,[C(581),R(768,879)]),I(B,[C(582),R(880,1023)]),I(B,[C(583),R(1024,1279)]),I(B,[C(584),R(1280,1327)]),I(B,[C(585),R(1328,1423)]),
I(B,[C(586),R(1424,1535)]),I(B,[C(587),R(1536,1791)]),I(B,[C(588),R(1792,1871)]),I(B,[C(589),R(1872,1919)]),I(B,[C(590),R(1920,1983)]),I(B,[C(591),R(2304,2431)]),I(B,[C(592),R(2432,2559)]),I(B,[C(593),R(2560,2687)]),I(B,[C(594),R(2688,2815)]),I(B,[C(595),R(2816,2943)]),I(B,[C(596),R(2944,3071)]),I(B,[C(597),R(3072,3199)]),I(B,[C(598),R(3200,3327)]),I(B,[C(599),R(3328,3455)]),I(B,[C(600),R(3456,3583)]),I(B,[C(601),R(3584,3711)]),I(B,[C(602),R(3712,3839)]),I(B,[C(603),R(3840,4095)]),I(B,[C(604),R(4096,4255)]),
I(B,[C(605),R(4256,4351)]),I(B,[C(606),R(4352,4607)]),I(B,[C(607),R(4608,4991)]),I(B,[C(608),R(4992,5023)]),I(B,[C(609),R(5024,5119)]),I(B,[C(610),R(5120,5759)]),I(B,[C(611),R(5760,5791)]),I(B,[C(612),R(5792,5887)]),I(B,[C(613),R(5888,5919)]),I(B,[C(614),R(5920,5951)]),I(B,[C(615),R(5952,5983)]),I(B,[C(616),R(5984,6015)]),I(B,[C(617),R(6016,6143)]),I(B,[C(618),R(6144,6319)]),I(B,[C(619),R(6400,6479)]),I(B,[C(620),R(6480,6527)]),I(B,[C(621),R(6528,6623)]),I(B,[C(622),R(6624,6655)]),I(B,[C(623),R(6656,6687)]),
I(B,[C(624),R(7424,7551)]),I(B,[C(625),R(7552,7615)]),I(B,[C(626),R(7616,7679)]),I(B,[C(627),R(7680,7935)]),I(B,[C(628),R(7936,8191)]),I(B,[C(629),R(8192,8303)]),I(B,[C(630),R(8304,8351)]),I(B,[C(631),R(8352,8399)]),I(B,[C(632),R(8400,8447)]),I(B,[C(633),R(8448,8527)]),I(B,[C(634),R(8528,8591)]),I(B,[C(635),R(8592,8703)]),I(B,[C(636),R(8704,8959)]),I(B,[C(637),R(8960,9215)]),I(B,[C(638),R(9216,9279)]),I(B,[C(639),R(9280,9311)]),I(B,[C(640),R(9312,9471)]),I(B,[C(641),R(9472,9599)]),I(B,[C(642),R(9600,9631)]),
I(B,[C(643),R(9632,9727)]),I(B,[C(644),R(9728,9983)]),I(B,[C(645),R(9984,10175)]),I(B,[C(646),R(10176,10223)]),I(B,[C(647),R(10224,10239)]),I(B,[C(648),R(10240,10495)]),I(B,[C(649),R(10496,10623)]),I(B,[C(650),R(10624,10751)]),I(B,[C(651),R(10752,11007)]),I(B,[C(652),R(11008,11263)]),I(B,[C(653),R(11264,11359)]),I(B,[C(654),R(11392,11519)]),I(B,[C(655),R(11520,11567)]),I(B,[C(656),R(11568,11647)]),I(B,[C(657),R(11648,11743)]),I(B,[C(658),R(11776,11903)]),I(B,[C(659),R(11904,12031)]),I(B,[C(660),R(12032,12255)]),
I(B,[C(661),R(12272,12287)]),I(B,[C(662),R(12288,12351)]),I(B,[C(663),R(12352,12447)]),I(B,[C(664),R(12448,12543)]),I(B,[C(665),R(12544,12591)]),I(B,[C(666),R(12592,12687)]),I(B,[C(667),R(12688,12703)]),I(B,[C(668),R(12704,12735)]),I(B,[C(669),R(12736,12783)]),I(B,[C(670),R(12784,12799)]),I(B,[C(671),R(12800,13055)]),I(B,[C(672),R(13056,13311)]),I(B,[C(673),R(13312,19893)]),I(B,[C(674),R(19904,19967)]),I(B,[C(675),R(19968,40959)]),I(B,[C(676),R(40960,42127)]),I(B,[C(677),R(42128,42191)]),I(B,[C(678),R(42752,
42783)]),I(B,[C(679),R(43008,43055)]),I(B,[C(680),R(44032,55203)]),I(B,[C(681),R(55296,56191)]),I(B,[C(682),R(56192,56319)]),I(B,[C(683),R(56320,57343)]),I(B,[C(684),R(57344,63743)]),I(B,[C(685),R(63744,64255)]),I(B,[C(686),R(64256,64335)]),I(B,[C(687),R(64336,65023)]),I(B,[C(688),R(65024,65039)]),I(B,[C(689),R(65040,65055)]),I(B,[C(690),R(65056,65071)]),I(B,[C(691),R(65072,65103)]),I(B,[C(692),R(65104,65135)]),I(B,[C(693),R(65136,65279)]),I(B,[C(694),R(65280,65519)]),I(B,[C(695),R(0,1114111)]),I(B,[C(696),
A9b()]),I(B,[C(697),B7(0,1)]),I(B,[C(698),KS(62,1)]),I(B,[C(699),B7(1,1)]),I(B,[C(700),B7(2,1)]),I(B,[C(701),B7(3,0)]),I(B,[C(702),B7(4,0)]),I(B,[C(703),B7(5,1)]),I(B,[C(704),KS(448,1)]),I(B,[C(705),B7(6,1)]),I(B,[C(706),B7(7,0)]),I(B,[C(707),B7(8,1)]),I(B,[C(708),KS(3584,1)]),I(B,[C(709),B7(9,1)]),I(B,[C(710),B7(10,1)]),I(B,[C(711),B7(11,1)]),I(B,[C(712),KS(28672,0)]),I(B,[C(713),B7(12,0)]),I(B,[C(714),B7(13,0)]),I(B,[C(715),B7(14,0)]),I(B,[C(716),A9w(983040,1,1)]),I(B,[C(717),B7(15,0)]),I(B,[C(718),B7(16,
1)]),I(B,[C(719),B7(18,1)]),I(B,[C(720),A8q(19,0,1)]),I(B,[C(721),KS(1643118592,1)]),I(B,[C(722),B7(20,0)]),I(B,[C(723),B7(21,0)]),I(B,[C(724),B7(22,0)]),I(B,[C(725),B7(23,0)]),I(B,[C(726),B7(24,1)]),I(B,[C(727),KS(2113929216,1)]),I(B,[C(728),B7(25,1)]),I(B,[C(729),B7(26,0)]),I(B,[C(730),B7(27,0)]),I(B,[C(731),B7(28,1)]),I(B,[C(732),B7(29,0)]),I(B,[C(733),B7(30,0)])]);}
function XG(){Cf.call(this);this.n1=0;}
function AVC(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.n1!=Hv(Ht(E5(e,d)))?(-1):2;}
function A7A(a){var b,c;b=GI(GR(a.n1));c=new J;L(c);H(H(c,C(520)),b);return K(c);}
function Ov(){B$.call(this);this.gO=0;}
function AT3(a){var b=new Ov();APl(b,a);return b;}
function APl(a,b){B8(a);a.gO=b;}
function A3H(a,b){a.f=b;}
function AZN(a,b,c,d){var e,f;e=b+1|0;if(e>d.A){d.d9=1;return (-1);}f=Q(c,b);if(b>d.dt&&C1(Q(c,b-1|0)))return (-1);if(a.gO!=f)return (-1);return a.f.c(e,c,d);}
function ARu(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.dt;f=d.A;while(true){if(b>=f)return (-1);g=Ky(c,a.gO,b);if(g<0)return (-1);if(g>e&&C1(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function A0c(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Jl(a,b,c,d,e);f=e.dt;a:{while(true){if(c<b)return (-1);g=HW(d,a.gO,c);if(g<0)break a;if(g<b)break a;if(g>f&&C1(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AV0(a){var b,c;b=a.gO;c=new J;L(c);Br(c,b);return K(c);}
function AOk(a,b){if(b instanceof E0)return 0;if(b instanceof EV)return 0;if(b instanceof Ef)return 0;if(b instanceof Es)return 0;if(b instanceof OD)return 0;if(!(b instanceof Ov))return 1;return b.gO!=a.gO?0:1;}
function AV7(a,b){return 1;}
function OD(){B$.call(this);this.gx=0;}
function A1M(a){var b=new OD();AT5(b,a);return b;}
function AT5(a,b){B8(a);a.gx=b;}
function AZw(a,b){a.f=b;}
function AN4(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;g=BQ(f,e);if(g>0){d.d9=1;return (-1);}h=Q(c,b);if(g<0&&Dp(Q(c,f)))return (-1);if(a.gx!=h)return (-1);return a.f.c(f,c,d);}
function A3W(a,b,c,d){var e,f;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Ky(c,a.gx,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dp(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AVx(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Jl(a,b,c,d,e);f=e.A;a:{while(true){if(c<b)return (-1);g=HW(d,a.gx,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dp(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A64(a){var b,c;b=a.gx;c=new J;L(c);Br(c,b);return K(c);}
function AP2(a,b){if(b instanceof E0)return 0;if(b instanceof EV)return 0;if(b instanceof Ef)return 0;if(b instanceof Es)return 0;if(b instanceof Ov)return 0;if(!(b instanceof OD))return 1;return b.gx!=a.gx?0:1;}
function A35(a,b){return 1;}
function Es(){var a=this;Cf.call(a);a.kB=0;a.j0=0;a.hw=0;}
function A4x(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.kB==e&&a.j0==d?2:(-1);}
function A25(a,b,c,d){var e,f;if(!(c instanceof BC))return Jc(a,b,c,d);e=d.A;while(b<e){b=Ky(c,a.kB,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.j0==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function APm(a,b,c,d,e){var f;if(!(d instanceof BC))return Jl(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HW(d,a.j0,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kB==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A6k(a){var b,c,d;b=a.kB;c=a.j0;d=new J;L(d);Br(d,b);Br(d,c);return K(d);}
function A4r(a,b){if(b instanceof Es)return b.hw!=a.hw?0:1;if(b instanceof Ef)return b.o(a.hw);if(b instanceof E0)return 0;if(!(b instanceof EV))return 1;return 0;}
var AEb=G(FS);
function APr(a,b){return b!=10?0:1;}
function AU8(a,b,c){return b!=10?0:1;}
var AEc=G(FS);
function A5b(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AW5(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AIK(){var a=this;B.call(a);a.o8=null;a.m_=null;a.jT=0;a.xC=0;}
function A3h(a){var b=new AIK();AR6(b,a);return b;}
function AR6(a,b){var c,d;while(true){c=a.jT;if(b<c)break;a.jT=c<<1|1;}d=c<<1|1;a.jT=d;d=d+1|0;a.o8=BP(d);a.m_=BP(d);a.xC=b;}
function SO(a,b,c){var d,e,f,g;d=0;e=a.jT;f=b&e;while(true){g=a.o8.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.m_.data[f]=c;}
function AB6(a,b){var c,d,e,f;c=a.jT;d=b&c;e=0;while(true){f=a.o8.data[d];if(!f)break;if(f==b)return a.m_.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xC;}
var AGp=G();
var Ot=G(Bg);
function A8O(){var a=new Ot();ARL(a);return a;}
function ARL(a){}
function ALA(a){return CM(Cd(DN(),9,13),32);}
var NV=G(Bg);
function A9z(){var a=new NV();AV1(a);return a;}
function AV1(a){}
function AL7(a){return Cd(DN(),48,57);}
var AIF=G(Bg);
function A8V(){var a=new AIF();ARh(a);return a;}
function ARh(a){}
function A4R(a){return Cd(DN(),97,122);}
var AIZ=G(Bg);
function A7V(){var a=new AIZ();AR$(a);return a;}
function AR$(a){}
function AV$(a){return Cd(DN(),65,90);}
var AI1=G(Bg);
function A93(){var a=new AI1();AO1(a);return a;}
function AO1(a){}
function AQv(a){return Cd(DN(),0,127);}
var Oo=G(Bg);
function A98(){var a=new Oo();APL(a);return a;}
function APL(a){}
function AGY(a){return Cd(Cd(DN(),97,122),65,90);}
var Mp=G(Oo);
function A9G(){var a=new Mp();ARU(a);return a;}
function ARU(a){}
function AHq(a){return Cd(AGY(a),48,57);}
var AJ3=G(Bg);
function A8k(){var a=new AJ3();A2X(a);return a;}
function A2X(a){}
function A1m(a){return Cd(Cd(Cd(DN(),33,64),91,96),123,126);}
var Ps=G(Mp);
function A89(){var a=new Ps();AUU(a);return a;}
function AUU(a){}
function AJ$(a){return Cd(Cd(Cd(AHq(a),33,64),91,96),123,126);}
var ALN=G(Ps);
function A86(){var a=new ALN();AVW(a);return a;}
function AVW(a){}
function ATm(a){return CM(AJ$(a),32);}
var AHW=G(Bg);
function A72(){var a=new AHW();A4Z(a);return a;}
function A4Z(a){}
function AZ2(a){return CM(CM(DN(),32),9);}
var AG7=G(Bg);
function A79(){var a=new AG7();A6B(a);return a;}
function A6B(a){}
function ATh(a){return CM(Cd(DN(),0,31),127);}
var AKZ=G(Bg);
function A9a(){var a=new AKZ();AO9(a);return a;}
function AO9(a){}
function AW9(a){return Cd(Cd(Cd(DN(),48,57),97,102),65,70);}
var AM1=G(Bg);
function A8B(){var a=new AM1();AYV(a);return a;}
function AYV(a){}
function A3f(a){var b;b=new ACA;b.Gc=a;BB(b);b.V=1;return b;}
var AJ6=G(Bg);
function A7R(){var a=new AJ6();AU4(a);return a;}
function AU4(a){}
function AX6(a){var b;b=new XO;b.Gh=a;BB(b);b.V=1;return b;}
var AMH=G(Bg);
function A96(){var a=new AMH();AO3(a);return a;}
function AO3(a){}
function ARQ(a){var b;b=new Td;b.F3=a;BB(b);return b;}
var AIw=G(Bg);
function A78(){var a=new AIw();ATi(a);return a;}
function ATi(a){}
function AVh(a){var b;b=new Tc;b.Eb=a;BB(b);return b;}
var AJd=G(Bg);
function A9E(){var a=new AJd();API(a);return a;}
function API(a){}
function AZ0(a){var b;b=new WH;b.Fd=a;BB(b);Jp(b.S,0,2048);b.V=1;return b;}
var AGB=G(Bg);
function A9k(){var a=new AGB();APp(a);return a;}
function APp(a){}
function AQb(a){var b;b=new Zx;b.Gt=a;BB(b);b.V=1;return b;}
var AKh=G(Bg);
function A9F(){var a=new AKh();ASZ(a);return a;}
function ASZ(a){}
function A6E(a){var b;b=new QK;b.Fw=a;BB(b);b.V=1;return b;}
var AMN=G(Bg);
function A74(){var a=new AMN();ATD(a);return a;}
function ATD(a){}
function AX3(a){var b;b=new AAU;b.EB=a;BB(b);return b;}
var AIV=G(Bg);
function A9_(){var a=new AIV();A1x(a);return a;}
function A1x(a){}
function ASr(a){var b;b=new XK;b.DI=a;BB(b);b.V=1;return b;}
var ALi=G(Bg);
function A9e(){var a=new ALi();AOq(a);return a;}
function AOq(a){}
function AQi(a){var b;b=new XM;b.ER=a;BB(b);b.V=1;return b;}
var AHY=G(Bg);
function A8t(){var a=new AHY();APv(a);return a;}
function APv(a){}
function A06(a){var b;b=new Qp;b.Fa=a;BB(b);b.V=1;return b;}
var AJM=G(Bg);
function A91(){var a=new AJM();ASx(a);return a;}
function ASx(a){}
function A2i(a){var b;b=new ZM;b.GR=a;BB(b);b.V=1;return b;}
var AMS=G(Bg);
function A9Y(){var a=new AMS();A2_(a);return a;}
function A2_(a){}
function AWo(a){var b;b=new ZR;b.Ej=a;BB(b);return b;}
var AHB=G(Bg);
function A8P(){var a=new AHB();APq(a);return a;}
function APq(a){}
function AUN(a){var b;b=new AC1;b.Gv=a;BB(b);return b;}
var AHh=G(Bg);
function A73(){var a=new AHh();A4D(a);return a;}
function A4D(a){}
function ATP(a){var b;b=new ABZ;b.DK=a;BB(b);b.V=1;return b;}
var AJ4=G(Bg);
function A9R(){var a=new AJ4();A1s(a);return a;}
function A1s(a){}
function A4K(a){var b;b=new PS;b.G6=a;BB(b);b.V=1;return b;}
var Le=G(Bg);
function A8w(){var a=new Le();AQq(a);return a;}
function AQq(a){}
function AHX(a){return CM(Cd(Cd(Cd(DN(),97,122),65,90),48,57),95);}
var AM$=G(Le);
function A8_(){var a=new AM$();A1A(a);return a;}
function A1A(a){}
function ATG(a){var b;b=E4(AHX(a),1);b.V=1;return b;}
var ALR=G(Ot);
function A7P(){var a=new ALR();AWL(a);return a;}
function AWL(a){}
function AY3(a){var b;b=E4(ALA(a),1);b.V=1;return b;}
var AHf=G(NV);
function A8b(){var a=new AHf();A17(a);return a;}
function A17(a){}
function ARo(a){var b;b=E4(AL7(a),1);b.V=1;return b;}
function AK2(){var a=this;Bg.call(a);a.tW=0;a.AK=0;}
function R(a,b){var c=new AK2();A6D(c,a,b);return c;}
function A6D(a,b,c){a.tW=b;a.AK=c;}
function ASG(a){return Cd(DN(),a.tW,a.AK);}
var ALc=G(Bg);
function A9b(){var a=new ALc();AXb(a);return a;}
function AXb(a){}
function AWT(a){return Cd(Cd(DN(),65279,65279),65520,65533);}
function ALF(){var a=this;Bg.call(a);a.qL=0;a.pf=0;a.zf=0;}
function B7(a,b){var c=new ALF();APD(c,a,b);return c;}
function A8q(a,b,c){var d=new ALF();AW2(d,a,b,c);return d;}
function APD(a,b,c){a.pf=c;a.qL=b;}
function AW2(a,b,c,d){a.zf=d;a.pf=c;a.qL=b;}
function A0P(a){var b;b=A8U(a.qL);if(a.zf)Jp(b.S,0,2048);b.V=a.pf;return b;}
function ALO(){var a=this;Bg.call(a);a.oL=0;a.nb=0;a.rE=0;}
function KS(a,b){var c=new ALO();AQj(c,a,b);return c;}
function A9w(a,b,c){var d=new ALO();AX4(d,a,b,c);return d;}
function AQj(a,b,c){a.nb=c;a.oL=b;}
function AX4(a,b,c,d){a.rE=d;a.nb=c;a.oL=b;}
function ANQ(a){var b;b=new ABw;AIo(b,a.oL);if(a.rE)Jp(b.S,0,2048);b.V=a.nb;return b;}
var AK5=G();
var AGO=G();
function AHA(b){var c,d,e,f,g,h,i;c=AVu(GU(b));d=NK(c);e=BP(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+NK(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=P2(c);h=h+1|0;}return e;}
function Oc(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Yi(){var a=this;B.call(a);a.zG=0;a.uO=0;a.zP=null;}
function AQS(a,b,c){var d=new Yi();AVV(d,a,b,c);return d;}
function AVV(a,b,c,d){a.zG=b;a.uO=c;a.zP=d;}
function AIP(){var a=this;B.call(a);a.yP=null;a.Af=0;}
function AVu(a){var b=new AIP();AZ_(b,a);return b;}
function AZ_(a,b){a.yP=b;}
var ALq=G();
function NK(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.yP.data;f=b.Af;b.Af=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function P2(b){var c,d;c=NK(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function F1(){var a=this;B.call(a);a.kX=0;a.vn=0;a.kp=null;a.hL=null;a.zU=null;a.mE=null;}
function Bb7(a){var b=new F1();Os(b,a);return b;}
function Os(a,b){a.mE=b;a.vn=b.dh;a.kp=null;}
function FJ(a){var b,c;if(a.kp!==null)return 1;while(true){b=a.kX;c=a.mE.ci.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kX=b+1|0;}return 0;}
function AK7(a){var b;if(a.vn==a.mE.dh)return;b=new IG;X(b);N(b);}
function OE(a){var b,c,d,e;AK7(a);if(!FJ(a)){b=new M_;X(b);N(b);}b=a.kp;if(b!==null){c=a.hL;if(c!==null)a.zU=c;a.hL=b;a.kp=b.df;}else{d=a.mE.ci.data;e=a.kX;a.kX=e+1|0;b=d[e];a.hL=b;a.kp=b.df;a.zU=null;}}
var ACe=G(F1);
function Re(a){OE(a);return a.hL.cS;}
var UR=G(F1);
function Pj(a){OE(a);return a.hL;}
var AA9=G(F1);
function AEG(){var a=this;B.call(a);a.Ai=null;a.Aj=null;a.Ah=null;}
function ANS(a,b){var c,d,e,f,g;c=a.Ai;d=a.Aj;e=a.Ah;f=new AFN;g=ADU(EE(d));ANn(f,b,null,g);It(c,f);e.e();}
function AEF(){B.call(this);this.yQ=null;}
function AWp(a,b){Bf(a.yQ,b);}
function AGI(){var a=this;B.call(a);a.RB=null;a.U5=0;}
function AFF(){var a=this;B.call(a);a.zB=null;a.zC=null;}
function A4B(a,b){var c,d;c=a.zB;d=a.zC;D3(c);d.g(b);}
function ABJ(){B.call(this);this.Ad=null;}
function ATn(a,b){b.hW=a.Ad.dA;}
function ABI(){B.call(this);this.wi=null;}
function A4i(a,b){b.hR=a.wi.dA.cA;}
function ADq(){var a=this;B.call(a);a.wd=null;a.we=null;}
function A5F(a){var b,c;b=a.wd;c=a.we;GJ(b.C.bI,ES(c));}
function ADu(){var a=this;B.call(a);a.Eu=null;a.t$=null;}
function A0y(a,b){var c,d,e,f;c=b.data;b=a.t$;d=Bj();b=BT(b);e=new J;L(e);H(H(e,C(734)),b);Bf(d,K(e));b=Bj();f=c.length;d=new J;L(d);V(H(d,C(735)),f);Bf(b,K(d));}
function ADw(){B.call(this);this.GH=null;}
function A6n(a,b){$rt_globals.console.info($rt_ustr(b));}
var I1=G(0);
function QA(){var a=this;B.call(a);a.lT=0;a.DM=null;}
function A4m(a,b){var c,d;c=BT(b);d=new J;L(d);H(H(d,C(736)),c);$rt_globals.console.info($rt_ustr(K(d)));a.lT=a.lT+1|0;Ia(b,a);}
function A1v(a,b){var c;b=BT(b);c=new J;L(c);H(H(c,C(737)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AVD(a){var b;b=a.lT-1|0;a.lT=b;if(!b)Bf(Bj(),C(738));}
function R4(){var a=this;B.call(a);a.uL=null;a.uK=null;}
function A2F(a){var b,c;b=a.uL;c=ES(a.uK);CZ(b.ij,c);}
function Wr(){var a=this;Ba.call(a);a.yC=null;a.GJ=null;}
function AQB(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cP^D8(a.yC,c):0;}
function Wo(){var a=this;Ba.call(a);a.Cl=null;a.wT=null;a.E1=null;}
function AYp(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cP^D8(a.Cl,c):0;return a.wT.o(b)&&!d?1:0;}
function Q1(){var a=this;Ba.call(a);a.lZ=null;a.FF=null;}
function ASy(a,b){return a.bn^D8(a.lZ,b);}
function A0$(a){var b,c,d;b=new J;L(b);c=IO(a.lZ,0);while(c>=0){KB(b,GR(c));Br(b,124);c=IO(a.lZ,c+1|0);}d=b.I;if(d>0)We(b,d-1|0);return K(b);}
function Zf(){var a=this;Ba.call(a);a.Au=null;a.Gg=null;}
function A4A(a,b){return a.Au.o(b);}
function Zd(){var a=this;Ba.call(a);a.pi=0;a.y9=null;a.pV=null;}
function AVB(a,b){return !(a.pi^D8(a.pV.P,b))&&!(a.pi^a.pV.eU^a.y9.o(b))?0:1;}
function Ze(){var a=this;Ba.call(a);a.na=0;a.wD=null;a.ov=null;}
function A2z(a,b){return !(a.na^D8(a.ov.P,b))&&!(a.na^a.ov.eU^a.wD.o(b))?1:0;}
function Zi(){var a=this;Ba.call(a);a.C4=0;a.wH=null;a.wz=null;a.FR=null;}
function A0k(a,b){return a.C4^(!a.wH.o(b)&&!a.wz.o(b)?0:1);}
function Zj(){var a=this;Ba.call(a);a.us=0;a.Ap=null;a.z1=null;a.G3=null;}
function ANM(a,b){return a.us^(!a.Ap.o(b)&&!a.z1.o(b)?0:1)?0:1;}
function Zg(){var a=this;Ba.call(a);a.tj=null;a.G5=null;}
function ARi(a,b){return Df(a.tj,b);}
function Zh(){var a=this;Ba.call(a);a.CK=null;a.FU=null;}
function AS6(a,b){return Df(a.CK,b)?0:1;}
function Zk(){var a=this;Ba.call(a);a.uJ=null;a.As=0;a.v4=null;}
function AWy(a,b){return !Df(a.uJ,b)&&!(a.As^D8(a.v4.P,b))?0:1;}
function Zl(){var a=this;Ba.call(a);a.ve=null;a.By=0;a.u6=null;}
function AZV(a,b){return !Df(a.ve,b)&&!(a.By^D8(a.u6.P,b))?1:0;}
function Q0(){var a=this;Ba.call(a);a.v1=0;a.Cv=null;a.w0=null;a.DR=null;}
function A7O(a,b){return !(a.v1^a.Cv.o(b))&&!Df(a.w0,b)?0:1;}
function Ri(){var a=this;Ba.call(a);a.CT=0;a.ri=null;a.rF=null;a.D7=null;}
function ARm(a,b){return !(a.CT^a.ri.o(b))&&!Df(a.rF,b)?1:0;}
function QY(){var a=this;Ba.call(a);a.zA=null;a.D$=null;}
function APO(a,b){return Df(a.zA,b);}
function QZ(){var a=this;Ba.call(a);a.s6=null;a.G1=null;}
function A0W(a,b){return Df(a.s6,b)?0:1;}
function Q4(){var a=this;Ba.call(a);a.C2=null;a.u$=0;a.DE=null;}
function AR9(a,b){return Df(a.C2,b)&&a.u$^D8(a.DE.P,b)?1:0;}
function QX(){var a=this;Ba.call(a);a.BQ=null;a.AH=0;a.u9=null;}
function A5J(a,b){return Df(a.BQ,b)&&a.AH^D8(a.u9.P,b)?0:1;}
function Q2(){var a=this;Ba.call(a);a.B6=0;a.yB=null;a.uq=null;a.FQ=null;}
function AZb(a,b){return a.B6^a.yB.o(b)&&Df(a.uq,b)?1:0;}
function Q3(){var a=this;Ba.call(a);a.BL=0;a.x9=null;a.B2=null;a.FV=null;}
function AUG(a,b){return a.BL^a.x9.o(b)&&Df(a.B2,b)?0:1;}
var MQ=G(0);
function ABY(){var a=this;B.call(a);a.D3=null;a.Cw=null;a.mf=null;a.c3=null;a.kW=0;a.pS=0;}
function PG(a,b){var c,d,e;c=M(a.mf);if(b>=0&&b<=c){AFS(a.c3,null,(-1),(-1));d=a.c3;d.mH=1;d.fc=b;c=d.js;if(c<0)c=b;d.js=c;b=a.Cw.cJ(b,a.mf,d);if(b==(-1))a.c3.d9=1;if(b>=0){d=a.c3;if(d.k3){e=d.ew.data;if(e[0]==(-1)){c=d.fc;e[0]=c;e[1]=c;}d.js=Nh(d);return 1;}}a.c3.fc=(-1);return 0;}d=new BJ;Bn(d,Dq(b));N(d);}
function AJL(a){return Rh(a.c3,0);}
function ALe(a){return Tf(a.c3,0);}
function AGu(a){return a.c3.k6;}
function SR(){var a=this;B.call(a);a.xo=null;a.xn=0;}
function A2K(a,b){NH(a.xo,b,a.xn);}
function Y$(){B.call(this);this.r7=null;}
function AZZ(a,b){b.hW=a.r7;}
var RS=G();
function A1H(a,b){AMV(b);}
function AB_(){B.call(this);this.A9=null;}
function ASl(a,b){TU(a.A9,b);}
function AF3(){B.call(this);this.Dp=null;}
function A5p(a,b){var c;c=a.Dp;AKy(Od(c),c,b);}
function AF2(){B.call(this);this.s7=null;}
function APF(a,b){Bf(a.s7,b);}
function ADG(){var a=this;B.call(a);a.sD=null;a.ks=null;a.ez=null;a.jI=0;a.jr=0;}
function A5k(a,b){var c,d,e,f,g;if(a.ks!==IR()){b=new Bt;X(b);N(b);}BA(a.ez,Jk(b));BA(a.ez,b);c=Bj();d=a.jr;a.jr=d+1|0;e=BT(b);f=a.ez.p;g=new J;L(g);V(H(H(H(V(H(g,C(739)),d),C(282)),e),C(740)),f);Bf(c,K(g));a.jI=a.jI+1|0;Ia(b,a);}
function ATQ(a,b){var c,d,e,f;if(a.ks!==IR()){b=new Bt;X(b);N(b);}BA(a.ez,Od(b));BA(a.ez,b);c=Bj();d=a.jr;a.jr=d+1|0;b=BT(b);e=a.ez.p;f=new J;L(f);V(H(H(H(V(H(f,C(741)),d),C(282)),b),C(740)),e);Bf(c,K(f));}
function A0e(a){var b,c,d,e,f,g;if(a.ks!==IR()){b=new Bt;X(b);N(b);}c=a.jI-1|0;a.jI=c;if(!c){b=Bj();c=a.ez.p;d=new J;L(d);V(H(d,C(742)),c);Bf(b,K(d));b=a.ez;d=a.sD;e=P(B,b.p);f=e.data;c=0;g=f.length;while(c<g){f[c]=BI(b,c);c=c+1|0;}TU(d.y_,e);}}
function Tq(){B.call(this);this.y_=null;}
function FW(){var a=this;B.call(a);a.GY=F2;a.Gf=F2;a.FM=null;a.Ee=null;a.FI=0;a.G4=null;}
var Bb8=null;var Bb9=null;var Bb$=0;var Bb_=0;var Bca=null;function AJU(){AJU=Bm(FW);AOV();}
function AUO(b){AJU();if(Bb9!==b)Bb9=b;Bb9.Gf=EN();}
function IR(){AJU();return Bb9;}
function AOV(){var b,c,d;b=new FW;AJU();c=null;b.FM=new B;b.FI=1;b.Ee=C(743);b.G4=c;d=Bb$;Bb$=d+1|0;b.GY=Bq(d);Bb8=b;Bb9=b;Bb$=1;Bb_=1;Bca=new Th;}
function Y7(){B.call(this);this.xP=null;}
function AVr(a,b){var c,d;c=a.xP;c.nl=b;H3(c.db,b.qT);H3(c.da,c.nl.qU);b=c.u7;d=c.nl;b.hr=d;c.e3.eO=d;}
var ACN=G(DI);
var Bcb=null;function AMh(){Bcb=F($rt_bytecls());}
var P6=G(0);
var Th=G();
var PZ=G(Ik);
function AQW(a,b,c,d){var e,f,g;e=0;f=d.A;a:{while(true){if(b>f){b=e;break a;}g=G0(d,a.bc);Ea(d,a.bc,b);e=a.dF.c(b,c,d);if(e>=0)break;Ea(d,a.bc,g);b=b+1|0;}}return b;}
function A7C(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=G0(e,a.bc);Ea(e,a.bc,c);f=a.dF.c(c,d,e);if(f>=0)break;Ea(e,a.bc,g);c=c+(-1)|0;}}return c;}
function APB(a){return null;}
var M_=G(Bt);
function AKT(){B.call(this);this.Vm=null;}
function WA(){B.call(this);this.t8=null;}
function AUH(a,b){a.t8.g(F0(b));}
function WB(){var a=this;B.call(a);a.Bd=null;a.Bc=null;}
function AU2(a,b){var c,d;c=a.Bd;d=a.Bc;b.text().then(Bw(c,"f"),Bw(d,"f"));}
function TC(){B.call(this);this.tL=null;}
function A0Y(a,b){b.hR=a.tL;}
function AFv(){B.call(this);this.xb=null;}
function AWD(a,b){a.xb.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function AFu(){var a=this;B.call(a);a.uG=null;a.uF=null;}
function ATr(a,b){var c,d;c=a.uG;d=a.uF;b.arrayBuffer().then(Bw(c,"f"),Bw(d,"f"));}
function AEl(){var a=this;B.call(a);a.zN=null;a.lA=null;a.nT=null;}
function AC6(a){var b,c;b=a.zN.next();c=A_f;b.then(Bw(a,"f"),Bw(c,"f"));}
function AUW(a,b){var c;if(b.done?1:0)a.lA.pd();else{AC6(a);c=b.value;if(c.kind==='file'?1:0){b=AIT(c,AAb(a.nT));a.lA.pw(b);}else{b=A7n(c,AAb(a.nT),null);a.lA.ot(b);}}}
function AA6(){B.call(this);this.CO=null;}
var AL5=G();
function Sk(){B.call(this);this.rj=null;}
function A3T(a,b){var c,d,e,f,g;c=a.rj;D3(c.J);Fb(c.iZ);d=NG(OM(c.f0));while(FJ(d)){e=Pj(d);f=c.f0;g=e.cS;e=null;if(HX(f,g))D6(f,g,e);}e=Bj();d=BT(b);f=new J;L(f);H(H(f,C(744)),d);Bf(e,K(f));e=AI4(b,c);D9(c.cN.eL,e);e.f4.e();CZ(c.lb,FN(ES(b),C(745)));Cx(c.J.F,c.cN.eL);}
function Sj(){var a=this;B.call(a);a.sJ=null;a.sK=null;}
function A4g(a){var b,c;b=a.sJ;c=a.sK;TL();Lj(b,c,Bcc);}
function Sh(){var a=this;B.call(a);a.Bs=null;a.Br=null;}
function ARd(a){var b,c;b=a.Bs;c=a.Br;TL();Lj(b,c,Bcd);}
function Si(){var a=this;B.call(a);a.DD=null;a.DC=null;}
function AWJ(a){Lj(a.DD,a.DC,null);}
function Sl(){var a=this;B.call(a);a.zZ=null;a.z0=null;}
function AN7(a){var b,c,d,e,f,g,h;b=a.zZ;c=a.z0;d=En(b.bA.d);e=H6(b.bA.d);d=ADx(b.bA.fY,d,e);D3(b.gX.cl);b=b.bA;e=FP(b,c);if(d!==null){f=b.d;g=e.bt;h=e.bx;e=new ADP;e.Fo=b;e.Fp=c;d.L1(f,g,h,1,e,b.kE);}}
function Tz(){B.call(this);this.x_=null;}
function AWb(a){var b;b=a.x_;D3(b.gX.cl);JJ(b.bA,Xt(b),0);}
function Ty(){B.call(this);this.vI=null;}
function A2E(a){var b;b=a.vI;D3(b.gX.cl);JJ(b.bA,Xt(b),1);}
function Tx(){B.call(this);this.sL=null;}
function A3_(a){var b,c,d;b=a.sL;D3(b.gX.cl);c=Il(b);b=b.bA;BG(b);d=new AEZ;d.r_=b;SF(c,d,AG0(C(746)));}
function SG(){var a=this;B.call(a);a.AR=null;a.AQ=null;}
function AXL(a){var b,c;b=a.AR;c=a.AQ;b=b.bA.d;b.qA=c;M1(b);}
var R5=G(0);
var BbL=null;function AMF(){BbL=new UQ;}
function ALy(){B.call(this);this.GE=null;}
function A7d(a){var b,c,d,e;b=a.GE;c=Il(b);d=b.gX.cl;e=new Te;e.Dl=b;F5(c,NT(d,e));}
function AD6(){var a=this;B.call(a);a.ew=null;a.lt=null;a.qc=null;a.n9=null;a.sw=0;a.k3=0;a.dt=0;a.A=0;a.fc=0;a.k6=0;a.g7=0;a.d9=0;a.GC=0;a.js=0;a.mH=0;}
function B2(a,b,c){a.lt.data[b]=c;}
function DM(a,b){return a.lt.data[b];}
function Nh(a){return Tf(a,0);}
function Tf(a,b){ABu(a,b);return a.ew.data[(b*2|0)+1|0];}
function Ea(a,b,c){a.ew.data[b*2|0]=c;}
function NE(a,b,c){a.ew.data[(b*2|0)+1|0]=c;}
function G0(a,b){return a.ew.data[b*2|0];}
function JI(a,b){return a.ew.data[(b*2|0)+1|0];}
function AIG(a){return Rh(a,0);}
function Rh(a,b){ABu(a,b);return a.ew.data[b*2|0];}
function XW(a,b){return a.qc.data[b];}
function E$(a,b,c){a.qc.data[b]=c;}
function ABu(a,b){var c;if(!a.k3){c=new CV;X(c);N(c);}if(b>=0&&b<a.sw)return;c=new BJ;Bn(c,Dq(b));N(c);}
function AFS(a,b,c,d){a.k3=0;a.mH=2;J8(a.ew,(-1));J8(a.lt,(-1));if(b!==null)a.n9=b;if(c>=0){a.dt=c;a.A=d;}a.fc=a.dt;}
function AHt(a){return a.mH;}
function T1(){B.call(this);this.vg=null;}
function A5l(a,b){a.vg.g($rt_str(b.message));}
function ALT(){var a=this;B.call(a);a.Q1=null;a.QZ=null;a.Q2=0.0;}
function ACX(){B.call(this);this.xD=null;}
function AMq(){B.call(this);this.It=null;}
var AMr=G();
function AMp(){var a=this;B.call(a);a.Va=null;a.U_=null;}
var EI=G(CE);
var Bce=null;var Bcf=null;var Bcg=null;var Bch=null;function AZu(){AZu=Bm(EI);ARZ();}
function ALz(a,b){var c=new EI();AHJ(c,a,b);return c;}
function AX8(){AZu();return Bch.eb();}
function AHJ(a,b,c){AZu();Dv(a,b,c);}
function ARZ(){var b;Bce=ALz(C(747),0);Bcf=ALz(C(748),1);b=ALz(C(749),2);Bcg=b;Bch=I(EI,[Bce,Bcf,b]);}
var Y1=G(0);
function AFl(){var a=this;B.call(a);a.ta=null;a.s_=0;}
function A3C(a,b){var c,d,e,f,g,h;c=a.ta;d=a.s_;e=!d?c.bZ.cp:c.bZ.cV;D3(c.J);f=Bj();g=ES(b);h=new J;L(h);H(H(h,C(750)),g);Bf(f,K(h));g=new ABH;g.dn=c;g.hX=d;g.nQ=e;f=AI4(b,g);if(!d)c.dX=f;else c.ee=f;f.cC.e();D9(e,f);b=c.ee;if(b!==null&&c.dX===null)CZ(c.jp,Dd(b));if(c.ee===null){b=c.dX;if(b!==null)CZ(c.jp,Dd(b));}b=c.ee;if(b!==null&&c.dX!==null){e=c.jp;f=Dd(b);h=Dd(c.dX);b=new J;L(b);H(H(H(b,f),C(751)),h);CZ(e,K(b));}if(c.ee!==null&&c.dX!==null){c.fQ.jj=0;f=c.bZ.cV;b=Vp(null);f.hH=b;e=c.bZ.cp;f=Vp(null);e.hH
=f;if(!Bk(Dd(c.ee),Dd(c.dX))){e=c.bZ;g=e.cV;g.hH.em.bO=3;e.cp.hH.em.bO=3;Di(g);Di(c.bZ.cp);}MF(c,c.ee,c.dX,b,f);}}
function Rn(){B.call(this);this.zo=null;}
function AUC(a){AJF(a.zo);}
function Rl(){B.call(this);this.Bx=null;}
function A0Q(a){J0(a.Bx);}
function Rm(){B.call(this);this.q8=null;}
function A6G(a){AKw(a.q8);}
function Vk(){B.call(this);this.BB=null;}
function A4t(a){a.BB.qZ();}
function Vm(){B.call(this);this.DG=null;}
function ATK(a){a.DG.o9();}
function AAC(){B.call(this);this.Ae=null;}
function A5A(a){var b,c,d,e,f,g,h,i;b=a.Ae;c=(b.sa.cb()).data;d=P(By,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new RV;i.s3=b;i.s2=h;e[f]=Yz(i,h);f=f+1|0;}return d;}
function ABd(){B.call(this);this.tg=null;}
function AOD(a){a.tg.o6.gv(0);}
function ABb(){B.call(this);this.B8=null;}
function AP0(a){a.B8.o6.gv(1);}
function T3(){B.call(this);this.xz=null;}
function AW3(a){var b,c,d,e;b=a.xz.d.h;c=b.cI;d=new J;L(d);V(H(d,C(752)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.n7;d=new J;L(d);V(H(d,C(753)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dD;e=GI(Fr(b));AFb(d,0,d.dA,e);ADY(Bj());}
function T4(){B.call(this);this.td=null;}
function AOB(a){ABi(a.td);}
function T5(){B.call(this);this.B0=null;}
function APS(a){ACH(a.B0);}
function T6(){B.call(this);this.yt=null;}
function AWN(a){O6(a.yt.d);}
function Uk(){B.call(this);this.AJ=null;}
function A2M(a){W3(a.AJ);}
function AIe(){B.call(this);this.GQ=null;}
function A7f(a){var b,c,d,e,f,g,h;b=a.GQ;c=P(By,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Yz(Rj(b,g),YI(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Yz(Rj(b,g),YI(g));e=h;}return c;}
function AEv(){var a=this;B.call(a);a.mJ=null;a.ji=0;}
var Pn=G(EH);
function AH8(){var a=this;B.call(a);a.O3=null;a.TQ=null;a.M8=null;a.KF=null;a.PL=null;}
var UQ=G();
function Pi(){var a=this;Pn.call(a);a.ob=null;a.mZ=null;}
function A4H(a,b){var c,d,e,f;c=b.fv;d=c/32|0;e=1<<(c%32|0);f=a.mZ.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function P$(){EF.call(this);this.p8=null;}
function AXY(a,b){return a.p8.data[b];}
function AT8(a){return a.p8.data.length;}
var R_=G(Bt);
var WV=G(Bt);
function Vo(){GF.call(this);this.Fs=0;}
function R3(){GF.call(this);this.GU=0;}
function ACA(){Ba.call(this);this.Gc=null;}
function AWF(a,b){return CK(b)!=2?0:1;}
function XO(){Ba.call(this);this.Gh=null;}
function AY1(a,b){return CK(b)!=1?0:1;}
function Td(){Ba.call(this);this.F3=null;}
function AOH(a,b){return SJ(b);}
function Tc(){Ba.call(this);this.Eb=null;}
function A0N(a,b){return 0;}
function WH(){Ba.call(this);this.Fd=null;}
function ARY(a,b){return !CK(b)?0:1;}
function Zx(){Ba.call(this);this.Gt=null;}
function A6f(a,b){return CK(b)!=9?0:1;}
function QK(){Ba.call(this);this.Fw=null;}
function AUi(a,b){return Ig(b);}
function AAU(){Ba.call(this);this.EB=null;}
function AVl(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function XK(){Ba.call(this);this.DI=null;}
function A7l(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function XM(){Ba.call(this);this.ER=null;}
function AP4(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function Qp(){Ba.call(this);this.Fa=null;}
function AWP(a,b){a:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function ZM(){Ba.call(this);this.GR=null;}
function A2J(a,b){return Lm(b);}
function ZR(){Ba.call(this);this.Ej=null;}
function A4j(a,b){return ZS(b);}
function AC1(){Ba.call(this);this.Gv=null;}
function A53(a,b){return CK(b)!=3?0:1;}
function ABZ(){Ba.call(this);this.DK=null;}
function AXc(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function PS(){Ba.call(this);this.G6=null;}
function APW(a,b){a:{b:{switch(CK(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function M0(){Ba.call(this);this.op=0;}
function A8U(a){var b=new M0();AIo(b,a);return b;}
function AIo(a,b){BB(a);a.op=b;}
function AUl(a,b){return a.bn^(a.op!=CK(b&65535)?0:1);}
var ABw=G(M0);
function A5n(a,b){return a.bn^(!(a.op>>CK(b&65535)&1)?0:1);}
function AD2(){var a=this;B.call(a);a.uM=null;a.Cm=null;a.xq=0;a.nm=0;}
function N_(a,b){return Cl(a.uM)<b?0:1;}
var AGN=G(0);
function AEe(){B.call(this);this.rW=null;}
function AWB(a){ABV(a.rW);}
function AEg(){B.call(this);this.A6=null;}
function AXU(a,b){G2(a.A6,b);}
function V4(){B.call(this);this.rk=null;}
function AXy(a){AFq(a.rk);}
function V5(){B.call(this);this.Dk=null;}
function AVA(a,b){G2(a.Dk,b);}
function LZ(){F7.call(this);this.t3=null;}
function SD(){LZ.call(this);this.sG=null;}
function Y2(){var a=this;B.call(a);a.zX=null;a.zY=null;}
function AEm(){var a=this;B.call(a);a.Bi=null;a.Bj=0;}
function A1g(a){Iz(a.Bi,a.Bj);}
function AA0(){B.call(this);this.rg=null;}
function ATa(a){Iz(a.rg,1);}
function AAZ(){B.call(this);this.xe=null;}
function A3J(a){Iz(a.xe,0);}
function ST(){var a=this;B.call(a);a.AL=null;a.Aw=0;}
function A6z(a){ZZ(a.AL,a.Aw);}
function QL(){B.call(this);this.rb=null;}
function A2u(a,b){G2(a.rb,b);}
function AEZ(){B.call(this);this.r_=null;}
function AQ8(a,b){DQ(a.r_,b);}
var Hb=G(CE);
var Bcd=null;var Bcc=null;var Bci=null;function TL(){TL=Bm(Hb);A7t();}
function A41(a,b){var c=new Hb();AHF(c,a,b);return c;}
function AKu(){TL();return Bci.eb();}
function AHF(a,b,c){TL();Dv(a,b,c);}
function A7t(){var b;Bcd=A41(C(754),0);b=A41(C(755),1);Bcc=b;Bci=I(Hb,[Bcd,b]);}
function F$(){var a=this;Da.call(a);a.g_=null;a.g4=null;a.eE=null;a.fA=null;}
var Bcj=null;var Bck=null;function AI4(a,b){var c=new F$();AL3(c,a,b);return c;}
function Bcl(a,b,c){var d=new F$();Mo(d,a,b,c);return d;}
function AL3(a,b,c){Mo(a,b,0,c);}
function Mo(a,b,c,d){KG(a,JV(b),c);a.eE=Bcj;a.fA=Bck;a.g_=b;a.g4=d;LX(a);Jb(a);}
function AWW(a){return Jk(a.g_);}
function Sp(a,b){return VL(a.eE,b);}
function LX(a){var b;b=new S4;b.tO=a;a.cC=b;a.f4=b;a.eV=BbD;}
function AFt(a){var b;b=new AF9;b.uZ=a;a.cC=b;a.f4=b;}
function AJo(){Bcj=P(F$,0);Bck=P(IY,0);}
function RV(){var a=this;B.call(a);a.s3=null;a.s2=null;}
function A1f(a){var b,c;b=a.s3;c=a.s2;b.jK.oD(c);}
function SL(){B.call(this);this.vE=null;}
function AOQ(a,b){UL(Il(a.vE),b,BaT,AG0(C(756)));}
function SW(){B.call(this);this.Bt=null;}
function AQZ(a,b){var c,d;c=a.Bt;d=b.jl;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
var ACZ=G();
var BbM=null;function A9O(){A9O=Bm(ACZ);AYK();}
function AYK(){var b,c;b=BP((AKu()).data.length);c=b.data;BbM=b;c[Bcd.fv]=1;c[Bcc.fv]=2;}
function PB(){var a=this;B.call(a);a.y1=null;a.y2=0.0;}
function A1C(a){var b,c;b=a.y1;c=a.y2;b.jK.k8(c);}
function IY(){Da.call(this);this.eP=null;}
function A7r(a,b,c){var d=new IY();A0m(d,a,b,c);return d;}
function A0m(a,b,c,d){KG(a,b,c);a.eP=d;}
function APQ(a){return Od(a.eP);}
function ABH(){var a=this;B.call(a);a.hX=0;a.nQ=null;a.dn=null;}
function ASw(a,b){var c,d,e,f,g;c=Bj();d=ES(b.eP);e=new J;L(e);H(H(e,C(757)),d);Bf(c,K(e));c=b.eP;d=Sn(a,c.ix);if(d===null)f=null;else{c=EE(c);f=VL(d.fA,c);}if(f===null){c=new ADQ;d=a.dn;AMX(c,d.J,d.gM,d.hE);L5(c,b.eP);K8(c);}else{Mf(a,f);c=new NM;g=a.dn;UP(c,g.J,g.gM,g.hE);NH(c,b.eP,a.hX);NH(c,f.eP,a.hX?0:1);}}
function AXK(a,b){var c,d,e,f;AFt(b);c=Bj();d=Jk(b.g_);e=new J;L(e);H(H(e,C(758)),d);Bf(c,K(e));c=Us(a,b);Mf(a,c);if(c!==null&&Sy(c))c.cC.e();if(E7(b)>0)Di(a.nQ);IB(a.dn);f=b.eE.data;if(f.length==1&&!b.fA.data.length)f[0].cC.e();}
function Mf(a,b){(!a.hX?a.dn.bZ.cV:a.dn.bZ.cp).c6=b;}
function AXT(a,b){var c;if(E7(b)>0)Di(a.nQ);LX(b);c=Us(a,b);Mf(a,c);if(c!==null&&Gx(c))c.cC.e();IB(a.dn);}
function Us(a,b){var c,d;a:{c=a.hX;if(!(c&&b===a.dn.ee)){if(c)break a;if(b!==a.dn.dX)break a;}return !c?a.dn.ee:a.dn.dX;}b=b.g_;d=Sn(a,b.f6);return d===null?null:Sp(d,JV(b));}
function Sn(a,b){var c,d,e;c=!a.hX?a.dn.ee:a.dn.dX;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Sp(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function ACr(){var a=this;B.call(a);a.sc=null;a.sg=null;a.sf=null;a.se=null;a.sd=null;}
function A3R(a,b){AJJ(a.sc,a.sg,a.sf,a.se,a.sd,b);}
function Ru(){var a=this;B.call(a);a.uD=null;a.uC=null;a.uA=null;a.uz=null;a.uB=null;}
function A5K(a,b){var c,d,e,f,g,h;c=b.data;b=a.uD;d=a.uC;e=a.uA;f=a.uz;g=a.uB;Hw(d);Hw(e);if(c.length==1&&!((CL(c[0])).data[0]!=1?0:1)){h=HQ(b.fQ);f.em.bY=h;g.em.bY=h;OX(b.fQ,f,g);IB(b);}}
function Ww(){var a=this;B.call(a);a.yw=null;a.yx=null;}
var AFE=G(0);
function AAf(){B.call(this);this.xO=null;}
function ASN(a){var b,c;b=a.xO;c=b.zX;b=b.zY;c.Hs(b.mA,b.qh,null);}
var AId=G(0);
function Te(){B.call(this);this.Dl=null;}
function A5G(a,b){Ga(a.Dl.bA,b,BaT);}
function Rr(){var a=this;B.call(a);a.mv=null;a.mu=null;a.zr=null;}
function AQp(a){J5(a.mv);J5(a.mu);}
function AN2(a){K5(a.mv);K5(a.mu);}
function AVO(a,b){I5(a.mv,b);I5(a.mu,b);}
function AT_(a,b){K6(a.zr,b);}
function S2(){var a=this;B.call(a);a.A0=null;a.AZ=null;a.AY=0;}
function AN9(a){var b,c,d,e;b=a.A0;c=a.AZ;d=a.AY;c=ES(c);if(!d)b.n_=c;else b.x7=c;e=b.x7;if(e!==null&&b.n_!==null)CZ(b.gY,c);else{if(e!==null)CZ(b.gY,e);c=b.n_;if(c!==null)CZ(b.gY,c);}}
function ADP(){var a=this;B.call(a);a.Fo=null;a.Fp=null;}
function ACT(){var a=this;B.call(a);a.GN=null;a.GM=null;a.GL=null;}
function S4(){B.call(this);this.tO=null;}
function AUb(a){var b,c,d,e;b=a.tO;c=Bj();d=Dd(b);e=new J;L(e);H(H(e,C(759)),d);Bf(c,K(e));c=b.g_;e=new ACy;e.dp=b;e.mk=BO();e.mS=BO();Ia(c,e);}
var De=G(0);
var A_A=null;var BaP=null;var A_C=null;var A_B=null;var A_E=null;var A_D=null;var A_G=null;var A_F=null;var A_I=null;var A_H=null;var A_J=null;function AI3(){AI3=Bm(De);A6J();}
function A6J(){A_A=Cs(0);BaP=DF(8,8,8);A_C=S(C(760));A_B=DF(255,255,255);A_E=S(C(761));A_D=S(C(762));A_G=S(C(763));A_F=S(C(764));A_I=Fd(205,205,205,153);A_H=Fd(255,255,255,0);A_J=S(C(117));}
function CD(){CE.call(this);this.qa=null;}
var Bcm=null;var Bcn=null;var Bco=null;var Bcp=null;var Bcq=null;var Bcr=null;var Bcs=null;var Bct=null;var Bcu=null;var Bcv=null;var Bcw=null;var Bcx=null;var Bcy=null;var Bcz=null;var BcA=null;var BcB=null;function AIp(){AIp=Bm(CD);A7c();}
function DV(a,b,c){var d=new CD();AA3(d,a,b,c);return d;}
function A6Z(a,b,c,d){var e=new CD();AGL(e,a,b,c,d);return e;}
function AM3(){AIp();return BcB.eb();}
function AA3(a,b,c,d){AIp();Dv(a,b,c);a.qa=Kk(d,null);}
function AGL(a,b,c,d,e){AIp();Dv(a,b,c);a.qa=Kk(d,e);}
function A7c(){var b;b=new CD;AI3();AA3(b,C(354),0,BaP);Bcm=b;Bcn=DV(C(355),1,S(C(765)));Bco=DV(C(357),2,S(C(766)));Bcp=DV(C(359),3,S(C(767)));Bcq=DV(C(361),4,BaP);Bcr=DV(C(362),5,S(C(768)));Bcs=DV(C(364),6,S(C(407)));Bct=DV(C(366),7,S(C(769)));Bcu=DV(C(368),8,S(C(770)));Bcv=A6Z(C(370),9,BaP,DF(237,235,252));Bcw=A6Z(C(371),10,S(C(405)),S(C(771)));Bcx=DV(C(372),11,S(C(407)));Bcy=DV(C(374),12,S(C(408)));Bcz=DV(C(376),13,S(C(772)));b=DV(C(377),14,S(C(378)));BcA=b;BcB=I(CD,[Bcm,Bcn,Bco,Bcp,Bcq,Bcr,Bcs,Bct,Bcu,Bcv,
Bcw,Bcx,Bcy,Bcz,b]);}
var Ec=G(0);
var A_N=null;var A_O=null;var A_K=null;var A_L=null;var A_M=null;var BaQ=null;var BaR=null;var A_P=null;var A_Q=null;function AYD(){AYD=Bm(Ec);A0h();}
function A0h(){A_N=S(C(115));A_O=S(C(773));A_K=S(C(774));A_L=S(C(775));A_M=S(C(776));BaQ=S(C(115));BaR=S(C(773));A_P=Fd(205,205,205,153);A_Q=DF(247,248,250);}
function ACy(){var a=this;B.call(a);a.mk=null;a.mS=null;a.dp=null;}
function A5V(a,b){var c,d;c=new F$;d=a.dp;Mo(c,b,d.it+1|0,d.g4);BA(a.mk,c);}
function AWw(a,b){var c,d;c=EE(b);d=A7r(c,a.dp.it+1|0,b);a.dp.g4.sv(d,c);d.lB=ANf(a.dp.g4,d);BA(a.mS,d);}
function A6h(a){var b,c,d,e,f,g,h;if(!(EU(a.mk)&&EU(a.mS))){a.dp.eE=GO(a.mk,Bcj);a.dp.fA=GO(a.mS,Bck);LE(a.dp.eE,BbE);LE(a.dp.fA,BbE);b=a.dp;c=b.eE;d=c.data;e=b.fA;f=e.data;g=d.length;h=f.length;d=P(Da,g+h|0);Db(c,0,d,0,g);Db(e,0,d,g,h);a.dp.eV=d;}Iq(a.dp);b=a.dp;b.g4.yJ(b);}
function ACI(){B.call(this);this.CL=null;}
function A10(a){D3(a.CL);}
function Ui(){var a=this;B.call(a);a.sS=null;a.sR=null;}
function AO0(a,b){var c,d;b=a.sS;c=a.sR;d=AMz(b.sG.CO.fX);b=c.yw;c=c.yx;b=b.xD;if(c.I>0)LJ(c,b);LJ(c,d);return 1;}
var AKG=G();
function PH(){var a=this;B.call(a);a.zS=null;a.zR=null;}
function ATS(a){a.zS.A5(a.zR);}
function AF9(){B.call(this);this.uZ=null;}
function A1Z(a){var b;b=a.uZ;Jb(b);b.g4.v_(b);b.eE=Bcj;b.fA=Bck;}
function RA(){var a=this;B.call(a);a.wm=null;a.wn=null;}
function A1b(a,b){var c,d,e;c=a.wm;d=a.wn;L$(c.f0,d);b=AKK(b);e=AQC(b.kP,ADU(d));D6(c.iZ,d,e);if(BR(c.yo,d))RY(c,e);}
function RB(){var a=this;B.call(a);a.tZ=null;a.tY=null;}
function A7m(a,b){var c,d,e;c=a.tZ;d=a.tY;L$(c.f0,d);c=D4();e=new J;L(e);H(H(H(H(e,C(777)),d),C(29)),b);Bf(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",14,"diff",11,"menu",10,"parser",17,"common",18,"tree",18,"graph",20,"node",21,"ref",21,"decl",10,"ui",24,"window",24,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bR",A$w(ATd),"L",A$v(AGP)],S1,0,B,[],0,3,0,0,0,X7,0,B,[],3,3,0,0,0,XH,0,B,[],3,3,0,0,0,AEI,0,B,[X7,XH],0,3,0,0,0,AKY,0,B,[],4,0,0,0,0,AKM,0,B,[],4,3,0,0,0,Hq,0,B,[],0,3,0,0,0,EM,0,Hq,[],0,3,0,0,0,Bt,0,EM,[],0,3,0,0,0,ABo,0,Bt,[],0,3,0,0,0,C3,0,B,[],3,3,0,0,0,CI,0,B,[],3,3,0,0,0,KV,0,B,[],3,3,0,0,0,BC,"String",3,B,[C3,CI,KV],0,3,[0,0,0],Fv,["L",A$v(APj),"bR",A$w(Bk),"qK",A$v(Kz),"m1",A$w(AQU)],FQ,0,Hq,[],0,3,0,0,0,IQ,0,FQ,[],0,3,0,0,0,ALr,0,IQ,[],0,3,0,0,0,DI,0,B,[C3],1,3,0,0,
0,H9,0,DI,[CI],0,3,0,0,["L",A$v(AWQ),"bR",A$w(A63),"m1",A$w(A2d)],Hk,0,B,[C3,KV],0,0,0,0,["ky",A$w(ND),"L",A$v(K)],Kj,0,B,[],3,3,0,0,0,J,0,Hk,[Kj],0,3,0,0,["qx",A$z(A1$),"pX",A$y(AQa),"L",A$v(Eq),"ky",A$w(ASs),"qQ",A$x(A2y)],Fj,0,IQ,[],0,3,0,0,0,AMw,0,Fj,[],0,3,0,0,0,ALm,0,Fj,[],0,3,0,0,0,ACY,0,B,[],3,3,0,0,0,Du,0,B,[],3,3,0,0,0,Zw,0,B,[],3,0,0,0,0,KN,0,B,[ACY,Du,Zw],1,3,0,0,["bX",A$v(EP)],ABn,0,KN,[],0,3,0,0,0,AKo,0,B,[],0,3,0,0,0,AM_,0,B,[],4,3,0,0,0,BX,0,B,[],3,3,0,0,0,Ch,0,B,[BX],3,3,0,0,0,AC$,0,B,[Ch],
0,3,0,0,["bm",A$w(A7i)],AIr,0,B,[],0,3,0,0,0,AL1,0,B,[BX],1,3,0,0,0,AGv,0,B,[],3,3,0,0,0,AMY,0,B,[],3,3,0,0,0,AIY,0,B,[],3,3,0,0,0,MI,"FontConfigJs",27,B,[],0,3,[0,0,0],0,0,AGZ,0,B,[BX],1,3,0,0,0,AC_,0,B,[Ch],0,3,0,0,["bm",A$w(ANN)],AC9,0,B,[Ch],0,3,0,0,["bm",A$w(A54)],Mj,0,B,[],4,3,0,0,0,AIX,0,B,[],4,3,0,0,0,ALf,0,B,[],0,3,0,0,0,ANK,0,B,[],4,3,0,0,0,X8,0,B,[Ch],0,3,0,0,["bm",A$w(A3w)]]);
$rt_metadata([AI_,0,B,[BX],1,3,0,0,0,AKB,0,B,[],0,3,0,0,0,AEn,0,B,[BX],3,3,0,0,0,ALQ,0,B,[AEn],1,3,0,0,["Nn",A$w(A1j),"Ug",A$v(AS_)],AHN,0,B,[BX],1,3,0,0,0,GG,0,B,[],3,3,0,0,0,TY,0,B,[GG],0,3,0,0,0,BJ,0,Bt,[],0,3,0,0,0,AMf,0,B,[],4,3,0,0,0,Gp,0,Bt,[],0,3,0,0,0,JP,0,Bt,[],0,3,0,0,0,Dr,0,B,[CI],0,3,0,0,0,XC,0,B,[BX],3,3,0,0,0,AB0,0,B,[XC],3,3,0,0,0,Fe,0,B,[BX],3,3,0,0,0,AKr,0,B,[BX,AB0,Fe],1,3,0,0,["L2",A$v(A3a),"MC",A$w(A5s),"U$",A$w(A5d),"P9",A$w(AZY),"Tv",A$w(AN6),"OG",A$v(AP5),"Ue",A$x(A5o),"MV",A$y(ASe),
"Nw",A$v(AYZ),"NO",A$v(A31),"SB",A$w(A5Z),"QP",A$v(ATw),"Vt",A$w(ARS),"KE",A$v(ATT),"Ru",A$v(AXO),"Vn",A$v(ASH),"HV",A$w(AOM),"M0",A$v(A66),"SW",A$x(A1L),"QC",A$x(ATp),"T7",A$x(AW0),"TL",A$v(AYg),"Uz",A$v(ARB),"NB",A$w(AQd),"Si",A$w(AQ5),"P3",A$x(A1V),"Ki",A$v(ASR),"Nm",A$w(AY2),"OT",A$v(AQ4),"NW",A$v(AUY),"PQ",A$w(ANT),"KD",A$w(AWm),"Vi",A$w(AZl),"JP",A$v(A5T),"Qr",A$x(AZs),"T3",A$w(A4c),"J8",A$v(AVp),"Pc",A$x(AUg),"Iq",A$x(AT0),"Rc",A$v(AWf),"NC",A$w(AXn),"Ju",A$y(A3l),"IP",A$v(AP$),"Jy",A$x(AZJ),"QI",A$v(AYE),
"Mk",A$v(A60),"Sy",A$v(AUe),"Ha",A$v(AYC),"LU",A$x(AUh),"OU",A$w(AZ7),"Sf",A$w(ARe),"IJ",A$v(A4Q)],Qr,0,B,[Ch],0,3,0,0,["bm",A$w(AUT)],ALB,0,B,[],4,3,0,0,0,ZL,0,B,[Fe],3,3,0,0,0,SS,0,B,[Fe],3,3,0,0,0,ABa,0,B,[Fe],3,3,0,0,0,Un,0,B,[Fe],3,3,0,0,0,AFx,0,B,[Fe],3,3,0,0,0,ADO,0,B,[Fe,ZL,SS,ABa,Un,AFx],3,3,0,0,0,AKW,0,B,[BX,ADO],1,3,0,0,["S_",A$x(A3E),"UF",A$x(A2a),"IR",A$y(ARD),"Qw",A$w(AO2),"Lr",A$y(A0o)],BU,0,Bt,[],0,3,0,0,0,AF$,0,Bt,[],0,3,0,0,0,IL,0,BJ,[],0,3,0,0,0,AK_,0,B,[],0,3,0,0,0,AAI,0,B,[],3,3,0,0,0,Zm,
0,B,[AAI],3,3,0,0,0,AB8,0,B,[Zm],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,ALY,0,B,[BD],0,3,0,0,0,T,0,B,[],3,3,0,0,0,ALZ,0,B,[T],0,3,0,0,0,ABf,0,B,[BX],3,3,0,0,0,VH,0,B,[ABf],0,3,0,0,["KG",A$w(A1K)],VF,0,B,[T],0,3,0,0,0,AAx,0,B,[BX],3,3,0,0,0,VG,0,B,[AAx],0,3,0,0,["Db",A$x(AQo)],AJj,0,B,[BX],1,3,0,0,0,CF,0,B,[BX],3,3,0,0,0,VE,0,B,[CF],0,3,0,0,["cO",A$w(AUX)],ABR,0,B,[],0,3,0,0,0,Wg,0,B,[],3,3,0,0,["fI",A$w(AXZ)],H0,0,B,[Wg],3,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],FT,0,B,[H0],1,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11),"e5",A$v(EU),
"rG",A$w(A44)],Oj,0,B,[H0],3,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],Nl,0,B,[Oj],3,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)]]);
$rt_metadata([EF,0,FT,[Nl],1,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11),"qq",A$w(AVa),"ck",A$v(B9),"vJ",A$x(AUw),"o$",A$x(A5M),"mT",A$w(A4b),"bR",A$w(ATJ)],MV,0,EF,[],1,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],PA,0,B,[H0],3,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],AFT,0,B,[PA,Oj],3,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],UT,0,MV,[AFT],0,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],L9,0,B,[],3,3,0,0,0,Er,0,B,[L9],1,3,0,0,0,Ei,0,B,[],3,3,0,0,0,W0,0,B,[L9],3,3,0,0,0,P1,0,B,[W0],3,3,0,0,0,ZB,0,Er,[Ei,C3,P1],0,3,0,0,0,ABT,0,B,[BD],0,3,0,0,0,ABU,
0,B,[Ch],0,3,0,0,["bm",A$w(AYf)],AG6,0,B,[],0,3,0,0,0,OA,0,B,[],1,3,0,0,0,Vw,0,OA,[],0,3,0,0,0,CA,0,B,[Du],1,3,0,0,["cL",A$w(A61)],Z$,0,B,[],0,3,0,0,0,AEM,0,B,[CF],0,3,0,0,["cO",A$w(A3U)],AEN,0,B,[CF],0,3,0,0,["cO",A$w(A37)],AEO,0,B,[CF],0,3,0,0,["cO",A$w(ATu)],AEP,0,B,[CF],0,3,0,0,["cO",A$w(A2w)],AEQ,0,B,[CF],0,3,0,0,["cO",A$w(A2L)],AER,0,B,[CF],0,3,0,0,["cO",A$w(AU3)],AES,0,B,[CF],0,3,0,0,["cO",A$w(ARC)],AET,0,B,[CF],0,3,0,0,["cO",A$w(A7v)],AEU,0,B,[CF],0,3,0,0,["cO",A$w(AQ2)],AEV,0,B,[CF],0,3,0,0,["cO",A$w(AVN)],Xe,
0,B,[CF],0,3,0,0,["cO",A$w(A62)],Xf,0,B,[CF],0,3,0,0,["cO",A$w(AS8)],Xg,0,B,[CF],0,3,0,0,["cO",A$w(ATy)],Xh,0,B,[CF],0,3,0,0,["cO",A$w(A4e)],ADv,0,B,[],3,3,0,0,0,ADF,0,B,[ADv],0,3,0,0,0,ADE,0,B,[CF],0,3,0,0,["cO",A$w(ASj)],Py,0,B,[],0,3,0,0,0,K_,0,B,[GG],0,3,0,0,["qX",A$x(NA)],AJw,0,B,[],0,3,0,0,0,Cj,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,["b3",A$w(A16),"cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s)],EZ,0,B,[],3,3,0,0,0,DS,0,B,[],3,3,0,0,0,CS,0,B,[DS],3,3,0,0,0,FR,0,B,[],3,3,0,0,0,CO,0,B,[],3,3,0,0,0,Gf,0,B,[CO],3,3,
0,0,0,Sf,0,B,[Du],0,3,0,0,0,Bh,"V2i",30,B,[],0,3,[0,0,0],0,["L",A$v(AJ7),"bR",A$w(AR_)],AE0,0,B,[],0,3,0,0,0,AI0,0,B,[],0,3,0,0,0]);
$rt_metadata([AKJ,0,B,[],3,3,0,0,0,AAv,0,B,[],0,3,0,0,0,OO,0,B,[],0,3,0,0,0,Dm,0,OO,[],0,3,0,0,0,AM9,0,Dm,[],0,3,0,0,0,FK,0,Dm,[],0,3,0,0,0,AAW,0,Dm,[],0,3,0,0,0,AHQ,0,FK,[],0,3,0,0,0,HU,0,FK,[],0,3,0,0,0,Qy,0,HU,[],0,3,0,0,0,AJO,0,HU,[],0,3,0,0,0,AKX,0,FK,[],0,3,0,0,0,AMy,0,Dm,[],0,3,0,0,0,AGJ,0,Dm,[],0,3,0,0,0,ABz,0,B,[BX],3,3,0,0,0,ANJ,0,B,[ABz],3,3,0,0,0,AAu,0,B,[Du],0,3,0,0,0,R9,0,B,[],0,3,0,0,0,CE,0,B,[CI,C3],1,3,0,0,0,HB,0,CE,[],12,3,0,H2,0,M5,0,B,[],3,3,0,0,0,Uf,0,B,[M5],3,3,0,0,0,ADM,0,B,[],3,3,0,0,
0,Hm,0,B,[Uf,ADM],1,3,0,0,0,Nw,0,Hm,[],0,3,0,0,0,AHv,0,Nw,[],0,3,0,0,0,H8,0,Hm,[],1,3,0,0,0,Mi,0,H8,[],0,3,0,0,["ns",A$y(ASc)],Et,0,CE,[],12,3,0,ANr,0,No,0,B,[CI],1,3,0,0,0,M8,0,No,[],0,3,0,AHo,0,ZF,0,B,[],0,3,0,0,0,Ix,0,CE,[],12,0,0,AH_,0,Ol,0,H8,[],0,3,0,0,["ns",A$y(AQG)],AIW,0,BU,[],0,3,0,0,0,VI,0,EM,[],0,3,0,0,0,M7,0,B,[BX],3,3,0,0,0,AFP,0,B,[M7],0,3,0,0,["bm",A$w(AVv)],AFQ,0,B,[M7],0,3,0,0,["bm",A$w(APc)],IH,0,B,[],1,3,0,0,0,ABN,0,B,[],3,3,0,0,0,Mb,0,IH,[CI,Kj,KV,ABN],1,3,0,0,0,NP,0,IH,[CI],1,3,0,0,0,Je,
0,B,[],0,3,0,HN,0,P5,0,CA,[],0,3,0,0,["bT",A$v(AS2),"cs",A$x(ARR)],If,0,CA,[],1,3,0,0,["cs",A$x(AH1)],Cq,0,If,[],1,3,0,0,["bT",A$v(AQA),"cs",A$x(I$),"cL",A$w(QS)],Fs,0,B,[],3,3,0,0,0,Ke,0,B,[],3,3,0,0,0,E1,0,B,[],3,3,0,0,0]);
$rt_metadata([Lu,"Diff0",11,Cq,[CJ,Fs,Ke,E1,EZ,FR,Gf],0,3,[0,0,0],0,["fz",A$x(A6A),"cL",A$w(AVf),"bT",A$v(A2H),"hG",A$v(A1D),"qZ",A$v(AVE),"o9",A$v(A2B),"oD",A$w(AWk),"k8",A$w(A3z),"gv",A$w(APU),"cs",A$x(ASv),"eh",A$w(AOx),"b3",A$w(A3Y),"cU",A$y(A1G),"cD",A$x(ATt),"dW",A$x(A4u),"dU",A$y(AUP),"cb",A$v(A19)],AI6,"DiffDemoJs",11,Lu,[],0,3,[0,0,0],0,["hG",A$v(ATE)],AJu,0,B,[],0,3,0,0,0,ALS,0,B,[BX],1,3,0,0,0,LB,0,Mb,[],1,0,0,0,0,AHK,0,LB,[],0,0,0,0,0,L6,0,B,[],1,3,0,0,0,OT,0,B,[],0,3,0,0,0,AGA,0,B,[],0,3,0,0,0,JD,
0,B,[BX],3,3,0,0,0,Ye,0,B,[JD],0,3,0,0,["bm",A$w(AQM)],Yd,0,B,[JD],0,3,0,0,["bm",A$w(AUa)],Yb,0,B,[Ch],0,3,0,0,["bm",A$w(AUE)],Ya,0,B,[Ch],0,3,0,0,["bm",A$w(AZK)],W,0,B,[],3,3,0,0,0,UB,0,B,[W],0,3,0,0,["g",A$w(A67)],UD,0,B,[W],0,3,0,0,["g",A$w(A2c)],VX,0,B,[BD],0,3,0,0,["ba",A$w(AWA)],VW,0,B,[BD],0,3,0,0,["ba",A$w(AOf)],VT,0,B,[BD],0,3,0,0,["ba",A$w(A0r)],VS,0,B,[BD],0,3,0,0,["ba",A$w(A3x)],VV,0,B,[BD],0,3,0,0,["ba",A$w(AQu)],VU,0,B,[BD],0,3,0,0,["ba",A$w(AXW)],V0,0,B,[BD],0,3,0,0,["ba",A$w(AP_)],VZ,0,B,[BD],
0,3,0,0,["ba",A$w(ASU)],V2,0,B,[BD],0,3,0,0,["ba",A$w(A46)],V1,0,B,[BD],0,3,0,0,["ba",A$w(ANX)],ACD,0,B,[BD],0,3,0,0,["ba",A$w(AN_)],ACC,0,B,[BD],0,3,0,0,["ba",A$w(A2k)],ACB,0,B,[BD],0,3,0,0,["ba",A$w(ATV)],ACm,0,B,[BD],0,3,0,0,["ba",A$w(AQQ)],ACl,0,B,[BD],0,3,0,0,["ba",A$w(AX$)],ACj,0,B,[BD],0,3,0,0,["ba",A$w(A6a)],ACi,0,B,[BD],0,3,0,0,["ba",A$w(AS4)],ACh,0,B,[BD],0,3,0,0,["ba",A$w(A48)],ACg,0,B,[BD],0,3,0,0,["ba",A$w(ANP)],ACf,0,B,[BD],0,3,0,0,["ba",A$w(A4V)],ACq,0,B,[BD],0,3,0,0,["ba",A$w(A3$)],ACp,0,B,[BD],
0,3,0,0,["ba",A$w(APG)],ACo,0,B,[BD],0,3,0,0,["ba",A$w(A1n)],ACn,0,B,[BD],0,3,0,0,["ba",A$w(ARM)],ACw,0,B,[BD],0,3,0,0,["ba",A$w(ARN)],ACv,0,B,[BD],0,3,0,0,["ba",A$w(AYQ)],ACu,0,B,[BD],0,3,0,0,["ba",A$w(APV)],ACt,0,B,[BD],0,3,0,0,["ba",A$w(A38)],AE7,0,B,[],0,0,0,0,0,IK,0,B,[],0,3,0,0,0,Rg,0,IK,[],0,3,0,0,0,AI7,0,B,[],0,3,0,0,0,Pw,0,IK,[],0,3,0,0,0]);
$rt_metadata([UI,0,B,[BX],3,3,0,0,0,Qj,0,B,[UI],0,3,0,0,["NI",A$w(A2m)],ADT,0,B,[W],0,3,0,0,["g",A$w(OV)],AFc,0,NP,[],0,0,0,0,0,CH,0,B,[Du],0,3,0,0,["bX",A$v(AVg),"ik",A$v(A3n),"dV",A$y(Ko),"dT",A$w(ANo),"cL",A$w(AZB),"ss",A$w(ASX),"pE",A$w(AW8),"l6",A$x(A4J),"kK",A$v(AXd),"cU",A$y(ARH),"cD",A$x(APk),"dW",A$x(ATI),"b3",A$w(AWS),"dU",A$y(A4z)],AHg,0,CH,[],0,3,0,0,["dT",A$w(AIE)],AHO,0,B,[],0,3,0,0,0,Fo,0,B,[Cj],3,3,0,0,["xH",A$v(A3p),"vR",A$v(AQX),"fz",A$x(ANV),"AS",A$v(AXQ)],R1,0,B,[],3,0,0,0,0,M4,0,B,[Fo],
3,3,0,0,["xH",A$v(A3p),"vR",A$v(AQX),"fz",A$x(ANV),"AS",A$v(AXQ)],AHl,"EditorComponent",11,CH,[Fo,CJ,Ke,R1,M4],0,3,[0,0,0],0,["dV",A$y(M6),"l6",A$x(AUn),"p9",A$x(A68),"vR",A$v(A0M),"xH",A$v(AYH),"qZ",A$v(J5),"o9",A$v(K5),"oD",A$w(I5),"k8",A$w(AU5),"kK",A$v(My),"bX",A$v(AY7),"cL",A$w(Mc),"qY",A$w(ALu),"ik",A$v(AJe),"qe",A$v(AV2),"dT",A$w(A2Q),"lO",A$v(U2),"k1",A$v(U1),"h7",A$w(AUL),"lo",A$v(AUz),"mt",A$v(AXN),"dU",A$y(Ms),"dW",A$x(Ue),"cD",A$x(XN),"cU",A$y(PT),"b3",A$w(YV),"bk",A$w(A6I),"fz",A$x(JJ),"AS",A$v(AWY),
"L",A$v(A0d)],AKg,0,B,[],0,3,0,0,0,U_,0,B,[W],0,3,0,0,["g",A$w(AOJ)],Va,0,B,[W],0,3,0,0,["g",A$w(A5D)],Vb,"Diff0$<init>$lambda$_0_2",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(A2b)],GS,"CtrlO",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(ATo)],U9,0,B,[W],0,3,0,0,["g",A$w(ATv)],U$,"Diff0$<init>$lambda$_0_4",11,B,[CS],0,3,[0,0,0],0,["bN",A$w(A6b)],CP,0,B,[],3,3,0,0,0,AFr,"WindowManager",25,B,[CJ,CP],0,3,[0,0,0],0,["b3",A$w(AYk),"cU",A$y(APs),"cD",A$x(ARJ),"dW",A$x(A6C),"e0",A$x(A14)],UO,"UiContext",24,B,[FR,Gf],0,3,[0,0,0],0,["fz",
A$x(A5v),"cb",A$v(A3o)],XE,"WindowScene$<init>$lambda$_1_0",11,B,[EZ],0,3,[0,0,0],0,["dU",A$y(A6v)],XD,"WindowScene$<init>$lambda$_1_1",11,B,[CS],0,3,[0,0,0],0,["bN",A$w(APu)],AG$,0,B,[],0,3,0,0,0,AFN,0,B,[],0,3,0,0,0,AFD,0,B,[],0,3,0,0,0,FL,0,B,[Du],0,3,0,0,0,AJK,0,B,[],0,3,0,0,0,AG9,0,B,[Du],0,3,0,0,0,YQ,0,B,[W],0,3,0,0,0,YP,0,B,[W],0,3,0,0,["g",A$w(AOX)],YO,0,B,[W],0,3,0,0,["g",A$w(AOb)],AMu,0,B,[],0,3,0,0,0,YN,0,B,[T],0,3,0,0,["e",A$v(AYo)],YU,0,B,[T],0,3,0,0,["e",A$v(A0T)],YT,0,B,[T],0,3,0,0,["e",A$v(A7M)],YS,
0,B,[T],0,3,0,0,["e",A$v(ASM)],YR,0,B,[T],0,3,0,0,["e",A$v(AUF)],YM,0,B,[T],0,3,0,0,["e",A$v(A6$)],V$,0,B,[T],0,3,0,0,["e",A$v(ASP)],V_,0,B,[T],0,3,0,0,["e",A$v(A34)],AIl,0,B,[BX],1,3,0,0,0,N9,0,B,[],4,3,0,A1U,0,AGH,0,B,[],3,3,0,0,0,ABB,"Scene1$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AUj)],ABA,"Scene1$<init>$lambda$_0_1",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AXR)],U0,"Window",25,B,[],0,3,[0,0,0],0,0,KW,0,B,[],0,3,0,0,0,FF,0,B,[],0,3,0,0,0,N7,0,FF,[],0,3,0,0,0]);
$rt_metadata([ACz,0,FF,[],0,3,0,0,0,AAg,0,FF,[],0,3,0,0,0,GA,0,B,[],3,3,0,0,0,TH,0,B,[],3,3,0,0,0,B4,"V4f",30,B,[],0,3,[0,0,0],0,["bR",A$w(AXC),"L",A$v(APt)],JF,0,B,[],3,3,0,0,0,AKC,0,EF,[Ei,C3,JF],0,3,0,0,["qn",A$w(A11),"jc",A$w(BI),"c$",A$v(A3I),"qq",A$w(BA),"o$",A$x(ALL),"mT",A$w(E2),"rG",A$w(AI9),"jO",A$v(I3),"vJ",A$x(AKP),"fI",A$w(FM),"L",A$v(AMz)],Ij,0,B,[],0,3,0,0,0,Ma,0,B,[],0,3,0,0,0,I0,"GL$Texture",10,B,[Du],0,3,[AKJ,0,"Texture"],0,["bX",A$v(AIu)],Z8,0,B,[],3,0,0,0,0,Pt,0,B,[],3,3,0,0,0,AAp,"UiContext$<init>$lambda$_0_0",
24,B,[T],0,3,[0,0,0],0,["e",A$v(A1u)],AAo,"UiContext$<init>$lambda$_0_1",24,B,[T],0,3,[0,0,0],0,["e",A$v(AX9)],ANg,0,B,[],0,3,0,0,0,UM,0,B,[],0,3,0,0,0,Hr,0,B,[],1,3,0,0,0,ABl,0,Hr,[],0,3,0,0,["vv",A$w(Cg)],HK,"FsItem",10,B,[],3,3,0,0,0,JH,0,B,[HK],3,3,0,0,0,L_,"JsFileHandle",28,B,[JH],0,3,[0,0,0],0,["t",A$v(EE),"uv",A$v(AOy),"L",A$v(Od)],J$,0,B,[HK],3,3,0,0,0,OP,"JsDirectoryHandle",28,B,[J$],0,0,[0,0,0],0,["t",A$v(JV),"uv",A$v(A6w),"L",A$v(Jk)],AEC,0,B,[],3,3,0,0,0,AL9,"JsArrayView",28,B,[AEC],0,3,[0,0,0],
0,["L",A$v(AZ1)],ABv,0,B,[Pt],0,3,0,0,0,HI,0,B,[CI],0,3,0,0,0,Ou,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DP,"CodeLine",11,B,[],0,3,[0,0,0],0,["L",A$v(A3Z)],ZO,0,B,[],0,3,0,0,0,LY,0,Er,[Ei,C3],0,3,0,0,0,V8,0,B,[Ch],0,3,0,0,["bm",A$w(A13)],CB,"CodeElement",11,B,[],0,3,[0,0,0],0,["L",A$v(AHs)],Or,0,LY,[],0,3,0,0,0,ABs,0,B,[],0,3,0,0,0,ANz,"Interval",17,B,[CI],0,3,[0,0,0],0,["bR",A$w(AVQ),"L",A$v(AKp),"m1",A$w(AZA)],Wl,0,B,[GG],0,3,0,0,["qX",A$x(ASS)],AAV,"IntervalNode",19,B,[],0,3,[0,0,0],0,["L",A$v(AOv),"bR",
A$w(APg)],JZ,0,B,[],3,3,0,0,0,Hp,0,B,[JZ,Ei],0,0,0,0,["bR",A$w(AZ3),"L",A$v(APX)],Im,"HashMap$HashEntry",1,Hp,[],0,0,[LY,0,0],0,0,On,0,L6,[],1,3,0,0,0,Rz,0,On,[],0,3,0,0,0,JG,0,EM,[],0,3,0,0,0,PL,0,B,[JD],0,3,0,0,["bm",A$w(AXr)],PN,0,B,[Ch],0,3,0,0,["bm",A$w(AWO)],PM,0,B,[Ch],0,3,0,0,["bm",A$w(AYT)],Ju,0,B,[],0,3,0,0,0,K7,0,Cq,[Fs,E1],0,3,0,0,["gv",A$w(A1B),"cL",A$w(A5z),"bT",A$v(ARr),"hG",A$v(A6Y),"cs",A$x(ANW),"eh",A$w(A0p)],AKj,0,CA,[],0,3,0,0,["cL",A$w(AOh),"bT",A$v(AQc),"cs",A$x(ASz)]]);
$rt_metadata([ACV,0,CA,[],0,3,0,0,["cL",A$w(AT9),"bT",A$v(AZq),"cs",A$x(A0L)],YY,"ToolbarDemo",16,Cq,[CJ,CP],0,3,[0,0,0],0,["cD",A$x(AWC),"dW",A$x(AOt),"e0",A$x(AR3),"cs",A$x(AQN),"bT",A$v(A0j),"b3",A$w(ASB),"cU",A$y(AOY)],ACk,"FindUsagesDemo",16,Cq,[CP],0,3,[0,0,0],0,["e0",A$x(AP3),"cs",A$x(APa)],Yj,"RegionTextureAllocatorDemo",11,If,[CJ],0,3,[0,0,0],0,["b3",A$w(A16),"cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s),"bT",A$v(A45),"cL",A$w(AOa)],TX,0,CA,[],0,3,0,0,["bT",A$v(ANU),"cs",A$x(AX5)],Dy,0,CA,[],0,3,0,0,["bT",
A$v(ABM),"cs",A$x(TS)],Sa,"SelectFileTest",11,Dy,[],0,3,0,0,0,YF,0,Cq,[],0,3,0,0,0,XX,"RenderTexture",11,Dy,[],0,3,0,0,["cL",A$w(ARG),"bT",A$v(AZ9),"cs",A$x(A6S)],TV,"ScissorDemo",11,Dy,[],0,3,0,0,["bT",A$v(A7y),"cs",A$x(ARn)],AB7,0,CA,[],0,3,0,0,["bT",A$v(AWR),"cs",A$x(A0l),"cL",A$w(A4L)],KZ,"ClipboardTest",11,Dy,[CJ],0,3,[0,0,0],0,["b3",A$w(A16),"cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(ASo)],TE,"CodiconDemo",11,Dy,[],0,3,0,0,["bT",A$v(AXB)],Hx,0,CA,[CJ],1,3,0,0,["b3",A$w(A16),"cD",A$x(AWC),"dW",A$x(AOt),"cU",
A$y(A4s),"bT",A$v(AHe)],UA,"LineShaderDemo1",11,Hx,[],0,3,[0,0,0],0,["cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s),"cs",A$x(A4w),"b3",A$w(A5w)],Uz,"LineShaderDemo2",11,Hx,[],0,3,[0,0,0],0,["cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s),"b3",A$w(A6_),"bT",A$v(APZ),"cs",A$x(AOF)],Xr,"WindowsDemo",13,Cq,[CP],0,3,[0,0,0],0,["e0",A$x(AR2)],EC,"WindowDemo",24,Cq,[CP],0,3,[0,0,0],0,["jX",A$v(AZQ),"p_",A$v(ASJ),"ou",A$w(AKS),"e0",A$x(A5c)],Rp,"EditorInViewDemo",11,EC,[CP,Fs,E1],0,3,[0,0,0],0,["jX",A$v(APe),"p_",A$v(AYt),"ou",
A$w(A7b),"eh",A$w(AVH),"gv",A$w(AU1)],Yo,"UiContext$1",24,B,[CJ],0,0,[UO,0,0],0,["cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s),"b3",A$w(A42)],AA2,"FolderTransferDemo",29,EC,[CP],0,3,[0,0,0],0,["jX",A$v(ARs)],AEo,"SinDemo",11,CA,[CJ],0,3,[0,0,0],0,["b3",A$w(A16),"cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s),"cs",A$x(A65),"bT",A$v(A1t),"cL",A$w(AVt)],U5,"FolderDiff",29,Cq,[CP],0,3,[0,0,0],0,["e0",A$x(AXj)],Sb,"EditorWindowDemo",11,Cq,[CP],0,3,[0,0,0],0,["e0",A$x(A08)],PC,0,K7,[],0,3,0,0,["hG",A$v(AZt)],SQ,"ProjectViewDemo",
11,Cq,[CP],0,3,[0,0,0],0,["e0",A$x(A0n)],AAe,"FileViewDemo",24,EC,[CP],0,3,[0,0,0],0,["jX",A$v(A3d),"ou",A$w(A4F)],Qx,"DiffMiddleDemo",29,EC,[CP],0,3,[0,0,0],0,["jX",A$v(A0G)],KM,0,B,[],0,3,0,0,0,AHH,0,B,[],0,3,0,0,0,AGG,0,B,[],3,3,0,0,0,AKd,0,B,[],0,3,0,0,0,AH9,0,B,[],3,3,0,0,0,AJV,0,B,[],0,3,0,0,0,Nd,0,B,[JZ,C3],0,3,0,0,0,Li,0,Nd,[],0,0,0,0,0,ANp,0,B,[],0,3,0,0,0,ZV,"Editor0$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AWU)],ZT,0,B,[W],0,3,0,0,["g",A$w(A0X)],ZU,"Editor0$<init>$lambda$_0_2",11,B,[CS],
0,3,[0,0,0],0,["bN",A$w(AV5)],AJQ,"TextRect",11,KW,[],0,3,[0,0,0],0,0,U6,"DemoScene1$MyInputListener",11,B,[CJ],0,0,[AKj,0,"MyInputListener"],0,["b3",A$w(AZr),"cU",A$y(AN5),"cD",A$x(AZk),"dW",A$x(AYL)],AAm,"DemoScene1$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(A05)],AAl,"DemoScene1$<init>$lambda$_0_1",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AQY)],AAk,"DemoScene1$<init>$lambda$_0_2",11,B,[FR],0,3,[0,0,0],0,["fz",A$x(A1_)],AAj,"DemoScene1$<init>$lambda$_0_3",11,B,[T],0,3,[0,0,0],0,["e",A$v(AYi)],AAi,"DemoScene1$<init>$lambda$_0_4",
11,B,[CS],0,3,[0,0,0],0,["bN",A$w(AUf)],AAh,"DemoScene1$<init>$lambda$_0_5",11,B,[EZ],0,3,[0,0,0],0,["dU",A$y(A50)],HO,0,B4,[],0,3,0,0,0,AIM,0,B,[],3,3,0,0,0]);
$rt_metadata([XV,"CleartypeColors$MyInputListener",11,B,[CJ],0,0,[ACV,0,"MyInputListener"],0,["b3",A$w(A16),"cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(AQy)],XR,0,B,[],0,3,0,0,0,AH$,"Toolbar",24,B,[],0,3,[0,0,0],0,0,AK$,0,B,[],0,3,0,0,["bR",A$w(A4_)],ADo,"ToolbarDemo$<init>$lambda$_0_0",16,B,[Cj],0,3,[0,0,0],0,["bk",A$w(ATg)],ADk,"ToolbarDemo$<init>$lambda$_0_1",16,B,[CS],0,3,[0,0,0],0,["bN",A$w(AVM)],ADl,0,B,[T],0,3,0,0,["e",A$v(A7E)],ADm,0,B,[T],0,3,0,0,["e",A$v(AOR)],By,"ToolbarItem",24,B,[],0,3,[0,0,0],0,0,VM,
"FindUsagesDemo$<init>$lambda$_0_0",16,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AXD)],VN,"FindUsagesDemo$<init>$lambda$_0_1",16,B,[CS],0,3,[0,0,0],0,["bN",A$w(AOu)],AJv,0,B,[],0,3,0,0,0,PV,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",11,B,[CP],0,3,[0,0,0],0,["e0",A$x(ATZ)],PU,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(ARI)],ABg,0,B,[],3,3,0,0,0,AKk,0,B,[ABg],0,3,0,0,0,X6,"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CJ],0,0,[TX,0,"LineNumbersInputListener"],0,
["cU",A$y(A4s),"cD",A$x(AYv),"dW",A$x(AOp),"b3",A$w(A0z)],ABC,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[EZ],0,3,[0,0,0],0,["dU",A$y(ATX)],RI,"SelectFileTest$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AQV)],SB,"WorkerTest$<init>$lambda$_0_0",14,B,[CS],0,3,[0,0,0],0,["bN",A$w(AXE)],SA,0,B,[W],0,3,0,0,["g",A$w(A4P)],ADy,"RenderTexture$MyInputListener",11,B,[CJ],0,0,[XX,0,"MyInputListener"],0,["dW",A$x(AOt),"cU",A$y(A4s),"b3",A$w(A3X),"cD",A$x(AXq)],AIg,0,B,[],0,3,0,0,0,Dn,0,B,[],3,3,0,
F3,0,ZW,"TextureRegionTestScene$MListener",11,B,[CJ],0,0,[AB7,0,"MListener"],0,["cU",A$y(A4s),"cD",A$x(ARV),"dW",A$x(AYI),"b3",A$w(AQD)],Xj,"TextureRegionTestScene$<init>$lambda$_0_0",11,B,[EZ],0,3,[0,0,0],0,["dU",A$y(A5X)],AE_,"ClipboardTest$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(ARW)],AE$,"ClipboardTest$<init>$lambda$_0_1",11,B,[FR],0,3,[0,0,0],0,["fz",A$x(A2j)],AE9,"ClipboardTest$<init>$lambda$_0_2",11,B,[FR],0,3,[0,0,0],0,["fz",A$x(APY)],AE8,"ClipboardTest$<init>$lambda$_0_3",11,B,[Gf],0,
3,[0,0,0],0,["cb",A$v(AS9)],AFa,"ClipboardTest$<init>$lambda$_0_4",11,B,[Gf],0,3,[0,0,0],0,["cb",A$v(A5q)],Tj,"CodiconDemo$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(APM)],Qk,"WindowsDemo$<init>$lambda$_0_0",13,B,[Cj],0,3,[0,0,0],0,["bk",A$w(A3i)],Qm,"WindowsDemo$<init>$lambda$_0_1",13,B,[CS],0,3,[0,0,0],0,["bN",A$w(A1o)],Qn,0,B,[W],0,3,0,0,["g",A$w(A3V)],Qo,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CS],0,3,[0,0,0],0,["bN",A$w(A5N)],RK,"FolderTransferDemo$<init>$lambda$_0_0",29,B,[CS],0,3,[0,0,0],
0,["bN",A$w(AUD)],RJ,"FolderTransferDemo$<init>$lambda$_0_1",29,B,[Cj],0,3,[0,0,0],0,["bk",A$w(A1S)],RR,"SinDemo$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AOG)],ACF,"FolderDiff$<init>$lambda$_0_0",29,B,[CS],0,3,[0,0,0],0,["bN",A$w(AUR)],QV,0,B,[W],0,3,0,0,["g",A$w(A52)],QU,"EditorWindowDemo$<init>$lambda$_0_1",11,B,[CS],0,3,[0,0,0],0,["bN",A$w(A0A)],AJg,0,B,[],3,3,0,0,0,YZ,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CS],0,3,[0,0,0],0,["bN",A$w(AQh)],VR,"DiffMiddleDemo$<init>$lambda$_0_0",29,B,[CS],
0,3,[0,0,0],0,["bN",A$w(AUS)],VQ,"DiffMiddleDemo$<init>$lambda$_0_1",29,B,[Cj],0,3,[0,0,0],0,["bk",A$w(A5Q)],Dt,0,B,[],3,3,0,AQK,0,Cu,0,CE,[],12,3,0,Ve,0,K1,0,B,[],0,3,0,0,0,Jw,0,B,[],0,3,0,0,0]);
$rt_metadata([AL4,0,B,[],0,3,0,0,0,DZ,0,B,[],3,3,0,AYs,0,Zr,0,B,[BX],3,3,0,0,0,ZE,0,B,[Zr],0,3,0,0,["Db",A$x(A01)],Zs,0,B,[BX],3,3,0,0,0,ZC,0,B,[Zs],0,3,0,0,["Db",A$x(A1P)],AG1,0,B,[],0,3,0,0,0,AKi,0,B,[BX],3,3,0,0,0,Wz,0,B,[],0,3,0,0,0,D5,0,B,[],3,3,0,A2V,0,Ir,0,B,[],3,3,0,0,0,Q5,0,B,[Ir],0,3,0,0,["x3",A$y(A4E)],Q6,0,B,[Ir],0,3,0,0,0,U8,0,B,[W],0,3,0,0,["g",A$w(A3u)],QH,0,B,[W],0,3,0,0,["g",A$w(AQt)],QG,0,B,[W],0,3,0,0,["g",A$w(AO6)],QD,0,B,[W],0,3,0,0,["g",A$w(AOc)],QB,0,B,[W],0,3,0,0,["g",A$w(A7a)],AJ0,0,
B,[],0,3,0,0,0,Wb,0,B,[W],0,3,0,0,["g",A$w(A1Q)],AD3,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Cj],0,3,[0,0,0],0,["bk",A$w(AYe)],AMZ,0,B,[],0,3,0,0,["bR",A$w(AZU)],JE,0,B,[],0,3,0,0,0,KX,0,B,[],4,3,0,0,0,AKL,0,B,[],0,3,0,0,0,Cy,0,CE,[],12,3,0,AHc,0,ANv,0,B,[],0,3,0,0,0,AHw,0,B,[BX],4,3,0,0,0,ANE,0,B,[],0,3,0,0,0,AGg,0,B,[],3,3,0,0,0,C9,0,B,[BX],1,3,0,0,0,AMl,0,C9,[],1,3,0,0,0,AMK,0,C9,[],1,3,0,0,0,AK0,0,C9,[],1,3,0,0,0,ALa,0,C9,[],1,3,0,0,0,AM2,0,C9,[],1,3,0,0,0,WK,0,B,[T],0,3,0,0,["e",A$v(ASg)],Ic,0,CE,[],
12,3,0,AIb,0,Qt,0,B,[BD],0,3,0,0,["ba",A$w(AYJ)],AA8,0,B,[],0,3,0,0,0,AKH,0,B,[],0,3,0,0,0,AHm,0,B,[],4,3,0,0,0,UK,0,B,[],0,0,0,0,0,AKN,0,B,[],3,3,0,0,0,AD4,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[EZ],0,3,[0,0,0],0,["dU",A$y(AYl)],Y6,"ScissorDemo$1",11,B,[CJ],0,0,[TV,0,0],0,["cD",A$x(AWC),"dW",A$x(AOt),"cU",A$y(A4s),"b3",A$w(A7H)],AHu,0,B,[BX],1,3,0,0,0,AJb,"PopupMenu",24,B,[CP,Fo,Du],0,3,[0,0,0],0,["xH",A$v(A3p),"vR",A$v(AQX),"fz",A$x(ANV),"AS",A$v(AXQ),"e0",A$x(A7h),"bk",A$w(ASY),"bX",A$v(AUZ)],Yt,
0,B,[W],0,3,0,0,["g",A$w(ASF)],Wn,0,B,[W],0,3,0,0,["g",A$w(A6V)]]);
$rt_metadata([R2,0,B,[W],0,3,0,0,["g",A$w(AZd)],PE,0,B,[CO],0,3,0,0,["cb",A$v(AQ7)],AMg,0,B,[],3,3,0,0,0,Mx,0,B,[],3,3,0,0,0,R8,0,B,[Mx],0,3,0,0,["AM",A$w(AZC)],Qh,0,B,[BD],0,3,0,0,["ba",A$w(A55)],AIB,0,B,[],0,3,0,0,0,RL,"LineNumbersTexture",11,B,[Du],0,3,[0,0,0],0,0,AGk,0,B,[],0,3,0,0,0,Vq,0,B,[],0,3,0,0,0,JN,"DiffRange",15,B,[],0,3,[0,0,0],0,0,TF,0,B,[],3,3,0,0,0,AD$,0,B,[W],0,3,0,0,["g",A$w(AZD)],GF,0,JG,[],0,3,0,0,0,AFm,0,FQ,[],0,3,0,0,0,AFp,0,B,[W],0,3,0,0,["g",A$w(AYd)],AGK,0,B,[],3,3,0,0,0,VB,0,B,[W],
0,3,0,0,["g",A$w(A6u)],W_,0,B,[T],0,3,0,0,["e",A$v(A4W)],EA,0,B,[Fs],1,3,0,0,0,AAD,"FolderDiffWindow",29,EA,[],0,3,[0,0,0],0,["bX",A$v(APf),"mU",A$w(A1w)],WC,0,B,[CO],0,3,0,0,["cb",A$v(AXw)],ADQ,"EditorWindow",11,EA,[Cj],0,3,[0,0,0],0,["eh",A$w(ANH),"bX",A$v(APo),"mU",A$w(A1e),"bk",A$w(A29)],SZ,0,B,[CO],0,3,0,0,["cb",A$v(ATO)],Lz,0,B,[],3,3,0,0,["sv",A$x(AO4)],Mm,0,EA,[Lz],0,3,0,0,["mU",A$w(AZF),"bX",A$v(A2h),"eh",A$w(A0v),"A5",A$w(A0t),"yJ",A$w(AVP),"v_",A$w(A3L),"sv",A$x(A3b)],AEY,0,B,[CO],0,3,0,0,["cb",A$v(AXo)],AFG,
0,DI,[CI],0,3,0,0,0,GZ,0,B,[],0,0,0,0,0,Kd,0,B,[],4,3,0,0,0,Vv,0,B,[],0,3,0,0,0,O_,0,B,[],1,3,0,0,0,AEA,"Pos",18,B,[CI],0,3,[0,0,0],0,["bR",A$w(AOd),"qK",A$v(AVd),"L",A$v(AON),"m1",A$w(A4h)],AHE,0,C9,[],1,3,0,0,0,V7,0,B,[T],0,3,0,0,["e",A$v(AO_)],AF1,0,B,[],3,3,0,0,0,YE,0,B,[T],0,3,0,0,["e",A$v(A6q)],YB,0,B,[T],0,3,0,0,["e",A$v(AQJ)],YA,0,B,[T],0,3,0,0,["e",A$v(AOE)],YD,0,B,[T],0,3,0,0,["e",A$v(A7I)],AAQ,0,B,[T],0,3,0,0,["e",A$v(AWl)],AAP,0,B,[T],0,3,0,0,["e",A$v(A2v)],AAS,0,B,[T],0,3,0,0,["e",A$v(A32)],AAR,
0,B,[T],0,3,0,0,["e",A$v(AWh)],Zt,0,B,[T],0,3,0,0,["e",A$v(AS3)],S3,0,B,[T],0,3,0,0,["e",A$v(A2O)],AAr,0,B,[W],0,3,0,0,["g",A$w(AYX)],Ss,0,B,[W],0,3,0,0,["g",A$w(A3g)],Ip,0,CH,[],1,3,0,0,["bX",A$v(A3k),"dT",A$w(ATF),"cL",A$w(AYG),"dV",A$y(AP6),"cU",A$y(A5_),"cD",A$x(AWj),"dW",A$x(A6l),"b3",A$w(A6N),"dU",A$y(AQH),"kK",A$v(A6y)],IN,0,Ip,[],1,0,0,0,["Dj",A$v(ASL)]]);
$rt_metadata([AHL,0,IN,[Fs],0,0,0,0,0,FI,0,CH,[],0,3,0,0,0,Sm,0,FI,[Fo],0,3,0,0,["xH",A$v(A3p),"vR",A$v(AQX),"fz",A$x(ANV),"AS",A$v(AXQ),"bX",A$v(A6s),"l6",A$x(A0i),"dT",A$w(AYu),"pE",A$w(A4f),"ss",A$w(A5r),"b3",A$w(ASO),"cD",A$x(AQP),"cU",A$y(AU6),"bk",A$w(A5E)],Wu,0,B,[T],0,3,0,0,["e",A$v(AW$)],AHb,0,CH,[],0,3,0,0,["bX",A$v(AVR),"dV",A$y(ARj),"dT",A$w(A4M),"cU",A$y(AWg),"cD",A$x(AVU),"dW",A$x(AT2),"b3",A$w(ATM),"dU",A$y(A0I),"ik",A$v(AJT)],AFy,0,B,[W],0,3,0,0,["g",A$w(AP7)],AFA,0,B,[W],0,3,0,0,["g",A$w(AOe)],Q7,
0,FI,[],0,3,0,0,["ik",A$v(AXg),"pE",A$w(A4l),"dT",A$w(AXz),"cD",A$x(ATk)],AFz,0,B,[T],0,3,0,0,["e",A$v(AV9)],VJ,0,CH,[],0,3,0,0,0,AFW,0,B,[],0,3,0,0,0,HP,0,B,[],0,3,0,0,0,Da,"FileTreeNode",24,HP,[],0,3,[0,0,0],0,0,TQ,0,B,[T],0,3,0,0,["e",A$v(AZp)],TO,0,B,[T],0,3,0,0,["e",A$v(AX0)],TP,0,B,[T],0,3,0,0,["e",A$v(A1F)],TN,0,B,[T],0,3,0,0,["e",A$v(AV6)],AE5,0,B,[T],0,3,0,0,["e",A$v(ARP)],AE4,0,B,[T],0,3,0,0,["e",A$v(AWc)],RX,0,Ip,[E1],0,3,0,0,["Dj",A$v(ASa),"ik",A$v(A1r)],ACc,0,B,[T],0,3,0,0,["e",A$v(AQf)],ACb,0,
B,[T],0,3,0,0,["e",A$v(AUQ)],ACd,0,B,[T],0,3,0,0,["e",A$v(A27)],ABE,0,DI,[CI],0,3,0,0,0,AFZ,0,B,[T],0,3,0,0,["e",A$v(A2e)],YX,0,B,[T],0,3,0,0,["e",A$v(AY4)],ADf,0,B,[],0,3,0,0,0,KD,0,B,[],0,3,0,0,0,Pk,0,B,[],3,3,0,0,0,L2,0,FI,[Fo],0,3,0,0,["xH",A$v(A3p),"vR",A$v(AQX),"AS",A$v(AXQ),"bX",A$v(AUy),"l6",A$x(AOU),"dT",A$w(A2S),"cU",A$y(A5W),"cD",A$x(APR),"bk",A$w(ARl),"fz",A$x(A0V)],ALC,0,L2,[],0,3,0,0,["xH",A$v(A3p),"vR",A$v(AQX),"AS",A$v(AXQ)],AH3,0,B,[M4],0,3,0,0,["xH",A$v(A3p),"vR",A$v(AQX),"fz",A$x(ANV),"AS",
A$v(AXQ),"lO",A$v(AV3),"k1",A$v(A58),"h7",A$w(AW6),"lo",A$v(ASA),"mt",A$v(AYN),"p9",A$x(ATc),"qY",A$w(A2$),"qe",A$v(Ng)],Qu,0,CH,[],0,3,0,0,["dT",A$w(AOj)],ADn,0,B,[],0,3,0,0,0,YH,0,B,[T],0,3,0,0,["e",A$v(AXl)],TR,0,B,[T],0,3,0,0,["e",A$v(ASD)],QR,0,B,[W],0,3,0,0,["g",A$w(AOr)],QQ,0,B,[W],0,3,0,0,["g",A$w(AOL)],Qq,0,B,[GG],0,3,0,0,["qX",A$x(ASu)],UV,0,B,[],3,3,0,ARO,0,LQ,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,ANs,0,Hr,[],0,0,0,0,["vv",A$w(A7u)],JR,0,B,[],0,3,0,0,0,CV,0,Bt,[],0,3,0,0,0,AMx,0,FQ,[],0,3,
0,0,0,AA_,0,B,[],0,3,0,0,0,ANy,0,B,[],0,3,0,0,0,PD,0,B,[W],0,3,0,0,["g",A$w(AXX)],AEu,0,B,[W],0,3,0,0,["g",A$w(A23)],Tp,0,B,[W],0,3,0,0,["g",A$w(A0s)]]);
$rt_metadata([To,0,B,[W],0,3,0,0,["g",A$w(A6r)],AJH,0,B,[BD],0,3,0,0,0,AJf,0,B,[],0,3,0,0,0,AIL,0,B,[BD],0,3,0,0,0,Yv,0,B,[W],0,3,0,0,["g",A$w(APN)],Yu,0,B,[W],0,3,0,0,["g",A$w(AVG)],Fz,0,B,[],3,3,0,0,0,Yy,0,B,[Fz],0,0,0,0,["cZ",A$v(Cb),"cm",A$v(Cc),"p6",A$v(AAY)],LV,0,O_,[],1,3,0,0,0,Ul,0,LV,[],0,3,0,0,0,AE3,0,B,[W],0,3,0,0,0,AC5,0,B,[W],0,3,0,0,["g",A$w(ATe)],W4,0,B,[W],0,3,0,0,["g",A$w(AWK)],PX,0,B,[CO],0,3,0,0,["cb",A$v(AU9)],PW,0,B,[CO],0,3,0,0,["cb",A$v(A0b)],AB4,0,B,[CO],0,3,0,0,["cb",A$v(A3P)],Yl,0,
B,[CO],0,3,0,0,["cb",A$v(A4C)],ABL,0,B,[Ch],0,3,0,0,["bm",A$w(A6P)],AHI,0,B,[BX],1,3,0,0,0,AEs,0,B,[Ch],0,3,0,0,["bm",A$w(AQ3)],O2,0,BJ,[],0,3,0,0,0,S$,0,B,[T],0,3,0,0,["e",A$v(AU_)],S9,0,B,[T],0,3,0,0,["e",A$v(A0K)],Ta,0,B,[T],0,3,0,0,["e",A$v(A6p)],S_,0,B,[T],0,3,0,0,["e",A$v(AX7)],UE,0,B,[T],0,3,0,0,["e",A$v(AWE)],AG2,0,B,[],0,3,0,0,0,ACR,0,B,[T],0,3,0,0,["e",A$v(ANO)],ACS,0,B,[T],0,3,0,0,["e",A$v(ARv)],HC,"Diff",11,B,[],0,3,[0,0,0],0,0,AEw,0,B,[T],0,3,0,0,["e",A$v(A6W)],RE,0,B,[],0,3,0,0,0,XQ,0,B,[T],0,
3,0,0,["e",A$v(A0R)],XP,0,B,[DS],0,3,0,0,0,AJG,0,B,[],0,3,0,0,0,DW,0,Bt,[],0,3,0,0,0,AI$,0,B,[],0,3,0,0,0,TT,0,Er,[Ei,C3],0,3,0,0,0,V3,0,B,[],0,3,0,0,0,VK,0,B,[],0,3,0,0,0,X$,0,B,[DS],0,3,0,0,0,T8,0,B,[W],0,3,0,0,["g",A$w(AVI)],AFJ,0,B,[Ch],0,3,0,0,["bm",A$w(A43)],AFI,0,B,[Ch],0,3,0,0,["bm",A$w(A0a)],AE6,0,B,[Ch],0,3,0,0,["bm",A$w(A1a)],ZX,0,DI,[CI],0,3,0,0,0,KH,0,B,[],4,3,0,0,0,Vf,0,B,[T],0,3,0,0,["e",A$v(AOw)],Vg,0,B,[T],0,3,0,0,["e",A$v(AQF)],Vh,0,B,[T],0,3,0,0,["e",A$v(A6t)]]);
$rt_metadata([Vi,0,B,[T],0,3,0,0,["e",A$v(AS5)],Vj,0,B,[T],0,3,0,0,["e",A$v(AVo)],PK,0,B,[Ch],0,3,0,0,["bm",A$w(A7L)],W7,0,B,[],3,3,0,A8J,0,Ut,0,B,[GA],0,3,0,0,["q3",A$x(AQ_)],ADH,0,B,[],0,3,0,0,0,UH,0,B,[CF],0,3,0,0,["cO",A$w(AYw)],Sg,0,B,[T],0,3,0,0,["e",A$v(A26)],Vn,0,B,[GA],0,3,0,0,["q3",A$x(AU$)],X3,0,B,[T],0,3,0,0,["e",A$v(A21)],YG,0,B,[],0,3,0,0,0,Vr,0,B,[W],0,3,0,0,["g",A$w(A6X)],S7,0,B,[T],0,3,0,0,["e",A$v(A1z)],AEK,0,B,[T],0,3,0,0,["e",A$v(AXh)],ZP,0,B,[],1,3,0,0,0,AAM,0,B,[M5],3,3,0,0,0,Qf,0,B,[AAM],
3,3,0,0,0,F7,0,B,[Qf],1,3,0,0,0,ABP,0,F7,[],0,3,0,0,0,Sq,0,B,[],3,3,0,0,0,PJ,0,B,[W],0,3,0,0,0,AFw,0,B,[W],0,3,0,0,["g",A$w(AOW)],AHS,0,B,[],3,3,0,0,0,Kb,0,Hp,[],0,0,0,0,0,IG,0,Bt,[],0,3,0,0,0,Ud,0,B,[],0,3,0,0,0,ADK,0,B,[Ir],0,3,0,0,["x3",A$y(ASI)],AMD,0,B,[],0,3,0,0,0,Gk,"ScopeNode",21,B,[],0,3,[0,0,0],0,0,K$,"DeclNode",23,B,[],0,3,[0,0,0],0,["L",A$v(A5f),"bR",A$w(AMd)],Fn,"RefNode",22,B,[],0,3,[0,0,0],0,["L",A$v(AWV),"bR",A$w(AKD)],Io,0,B,[],3,3,0,0,0,Uv,0,B,[Io],0,3,0,0,["mq",A$y(A2U)],RN,"InferenceNode",
21,B,[],0,3,[0,0,0],0,0,Uw,0,B,[Io],0,3,0,0,["mq",A$y(A1p)],Jr,0,B,[C3,CI],0,3,0,0,0,Lr,0,B,[],3,3,0,0,0,S6,0,B,[Lr],0,3,0,0,0,NL,0,B,[Lr],3,3,0,0,0,AHT,0,B,[NL],0,3,0,0,0,Tu,0,B,[Io],0,3,0,0,["mq",A$y(A3q)],Tt,0,B,[DS],0,3,0,0,["bN",A$w(AW4)],Ts,0,B,[DS],0,3,0,0,["bN",A$w(AU0)],Tw,0,B,[Io],0,3,0,0,["mq",A$y(A20)],R7,0,B,[W],0,3,0,0,["g",A$w(AY5)],AGs,0,B,[W],0,3,0,0,0,WU,0,B,[BD],0,3,0,0,0,F8,0,B,[],0,3,0,0,0,AKA,0,B,[],0,3,0,0,0,AGR,0,B,[],0,3,0,0,0]);
$rt_metadata([ANG,0,B,[],0,3,0,0,0,AFn,0,B,[T],0,3,0,0,["e",A$v(AYO)],AFo,0,B,[T],0,3,0,0,["e",A$v(A1y)],H_,"ExprRefNode",22,Fn,[],0,3,[0,0,0],0,["L",A$v(A22)],KQ,"MethodCallNode",22,Fn,[],0,3,[0,0,0],0,["bR",A$w(A6x)],Xm,0,B,[W],0,3,0,0,["g",A$w(A3v)],JX,"QualifiedRefNode",22,Fn,[],0,3,[0,0,0],0,["L",A$v(ATN),"bR",A$w(AYB)],Xn,0,B,[W],0,3,0,0,["g",A$w(AQT)],AJE,0,B,[CI],0,3,0,0,["bR",A$w(AT6),"L",A$v(AMc)],Xc,0,B,[W],0,3,0,0,["g",A$w(ARc)],Op,"FakeNode",21,Gk,[],0,3,[0,0,0],0,0,LS,"MemberNode",21,Gk,[],0,3,
[0,0,0],0,0,Wi,0,B,[W],0,3,0,0,["g",A$w(AYR)],Ra,0,B,[W],0,3,0,0,["g",A$w(A2T)],Rf,0,B,[H0],3,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],EH,0,FT,[Rf],1,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],N5,0,EH,[],1,0,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],VC,0,N5,[],0,0,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],OJ,0,Er,[],1,0,0,0,0,Vz,0,OJ,[],0,0,0,0,0,O5,0,EF,[JF],1,0,0,0,["fI",A$w(AXZ),"jO",A$v(AZ6),"mT",A$w(ATq),"qn",A$w(ASk)],VA,0,O5,[],0,0,0,0,["fI",A$w(AXZ),"jc",A$w(ATx),"c$",A$v(ASC),"ck",A$v(AQl),"e5",A$v(AOA)],Vx,0,B,[Fz],0,0,0,0,["cZ",
A$v(AOi),"cm",A$v(A3N),"p6",A$v(AVy)],ZN,0,B,[Fz],3,3,0,0,0,Vy,0,B,[ZN],0,0,0,0,0,Xv,0,B,[GG],0,3,0,0,0,So,0,B,[DS],0,3,0,0,["bN",A$w(A7N)],AA7,0,B,[C3],4,3,0,0,0,ABO,0,B,[W],0,3,0,0,["g",A$w(AXu)],K3,0,DW,[],0,3,0,0,0,Ki,0,Bt,[],0,3,0,0,0,OW,0,Bt,[],0,3,0,0,0,ZI,0,B,[W],0,3,0,0,["g",A$w(A3O)],AJ1,0,B,[W],0,3,0,0,0,R6,0,B,[Sq],0,3,0,0,0,WN,0,B,[W],0,3,0,0,["g",A$w(A1I)],AGx,0,B,[],0,3,0,0,0,AB5,0,B,[T],0,3,0,0,["e",A$v(AYP)],AD8,0,B,[DS],0,0,0,0,["bN",A$w(AQz)],Rq,0,EH,[],0,0,0,0,["qn",A$w(A11)],UZ,0,EH,[],
0,0,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],Rs,0,FT,[],0,0,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],Xy,0,B,[W],0,3,0,0,["g",A$w(A0C)],Vl,0,B,[W],0,3,0,0,["g",A$w(A2t)],MX,"MethodNode",23,K$,[],0,3,[0,0,0],0,["bR",A$w(AZc)],Ub,0,B,[W],0,3,0,0,["g",A$w(AW7)],AHk,0,F7,[],0,3,0,0,0,AD1,0,B,[W],0,3,0,0,["g",A$w(A2l)],P8,0,B,[W],0,3,0,0,["g",A$w(A7k)],Vs,0,B,[W],0,3,0,0,["g",A$w(A0O)]]);
$rt_metadata([Ql,0,B,[W],0,3,0,0,["g",A$w(ATl)],Z0,0,B,[W],0,3,0,0,["g",A$w(AWa)],NM,"FileDiffWindow",29,EA,[Fo],0,3,[0,0,0],0,["xH",A$v(A3p),"vR",A$v(AQX),"fz",A$x(ANV),"AS",A$v(AXQ),"eh",A$w(A49),"bX",A$v(A6c),"mU",A$w(AY0),"bk",A$w(A6d)],Xz,0,B,[CO],0,3,0,0,["cb",A$v(A5B)],Rb,0,B,[CO],0,3,0,0,["cb",A$v(ARa)],XS,0,B,[CO],0,3,0,0,["cb",A$v(APP)],XT,0,B,[],0,3,0,0,0,SI,0,B,[],0,3,0,0,0,BW,0,B,[],1,0,0,0,["cJ",A$y(Jc),"cX",A$z(Jl),"jt",A$v(AZo),"L",A$v(AVi),"X",A$w(AWs),"b_",A$w(A5Y),"g9",A$v(A6Q),"ff",A$v(K9)],U4,
0,B,[W],0,3,0,0,["g",A$w(A69)],Wa,0,B,[Mx],0,3,0,0,["AM",A$w(N$)],V6,0,IN,[Fs],0,0,0,0,0,Xq,0,B,[T],0,3,0,0,["e",A$v(A1N)],Xp,0,B,[T],0,3,0,0,["e",A$v(AST)],SH,0,B,[T],0,3,0,0,["e",A$v(A03)],Y9,0,B,[W],0,3,0,0,["g",A$w(ATA)],ACx,0,B,[T],0,3,0,0,["e",A$v(AOT)],X5,0,B,[W],0,3,0,0,["g",A$w(A2s)],Xl,0,B,[W],0,3,0,0,["g",A$w(A7K)],C7,"FSet",2,BW,[],0,0,[0,0,0],Pl,["c",A$y(AOS),"t",A$v(ARy),"O",A$w(AO8)],Hy,0,B,[],0,0,0,0,0,KR,0,BU,[],0,3,0,0,0,PI,0,B,[W],0,3,0,0,["g",A$w(A6g)],S5,"NonCapFSet",2,C7,[],0,0,[0,0,0],
0,["c",A$y(AYx),"t",A$v(AZX),"O",A$w(A4S)],AFV,"AheadFSet",2,C7,[],0,0,[0,0,0],0,["c",A$y(AZO),"t",A$v(A1X)],RP,"BehindFSet",2,C7,[],0,0,[0,0,0],0,["c",A$y(APb),"t",A$v(A5S)],TW,"AtomicFSet",2,C7,[],0,0,[0,0,0],0,["c",A$y(AYA),"t",A$v(AVL),"O",A$w(A3Q)],Gt,"FinalSet",2,C7,[],0,0,[0,0,0],0,["c",A$y(AWG),"t",A$v(AZy)],Cf,0,BW,[],1,0,0,0,["c",A$y(A7p),"cn",A$v(A5y),"O",A$w(AR4)],AJc,"EmptySet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(A4$),"cJ",A$y(A0H),"cX",A$z(AZL),"t",A$v(ARz),"O",A$w(AYz)],B$,"JointSet",2,BW,[],0,0,
[0,0,0],0,["c",A$y(ARg),"X",A$w(AUq),"t",A$v(ASb),"b_",A$w(A2p),"O",A$w(AUV),"ff",A$v(APy)],K2,"NonCapJointSet",2,B$,[],0,0,[0,0,0],0,["c",A$y(AUd),"t",A$v(ASV),"O",A$w(A4v)],Em,"AtomicJointSet",2,K2,[],0,0,[0,0,0],0,["c",A$y(AZ$),"X",A$w(A4n),"t",A$v(AOo)],XL,"PositiveLookAhead",2,Em,[],0,0,[0,0,0],0,["c",A$y(AUo),"O",A$w(AWx),"t",A$v(A6L)],AEE,"NegativeLookAhead",2,Em,[],0,0,[0,0,0],0,["c",A$y(AO5),"O",A$w(A5C),"t",A$v(ARb)],AA$,"PositiveLookBehind",2,Em,[],0,0,[0,0,0],0,["c",A$y(APw),"O",A$w(A7G),"t",A$v(AT4)],Um,
"NegativeLookBehind",2,Em,[],0,0,[0,0,0],0,["c",A$y(AYb),"O",A$w(A4I),"t",A$v(APd)],Ik,"SingleSet",2,B$,[],0,0,[0,0,0],0,["c",A$y(AOg),"cJ",A$y(AS0),"cX",A$z(A4U),"b_",A$w(A2n),"g9",A$v(A3M),"ff",A$v(AW_)],HA,0,B,[],1,0,0,0,0,Ba,0,HA,[],1,0,0,Q8,["eg",A$v(AY$),"gj",A$v(AYM),"my",A$v(A5t),"iR",A$v(A6K)],AGW,0,Ba,[],0,0,0,0,["o",A$w(Df),"eg",A$v(C_),"gj",A$v(A0D),"my",A$v(AWi),"L",A$v(A24),"iR",A$v(AQO)],Nn,0,Bt,[],0,3,0,0,0,Ey,0,BW,[],1,0,0,0,["b_",A$w(AVw),"O",A$w(A57),"ff",A$v(ATj)],Dh,"LeafQuantifierSet",
2,Ey,[],0,0,[0,0,0],0,["c",A$y(AYc),"t",A$v(AZG)],Ge,"CompositeQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$y(AYW),"t",A$v(AZa)],C8,"GroupQuantifierSet",2,Ey,[],0,0,[0,0,0],0,["c",A$y(AYq),"t",A$v(A1E)],Fm,"AltQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$y(A2C),"X",A$w(AXS)],Ws,"UnifiedQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$y(A7j),"cJ",A$y(ATL)],Bg,0,B,[],1,0,0,0,0,DA,0,BU,[],0,3,0,0,0]);
$rt_metadata([XY,0,HA,[Ei],0,0,0,0,["L",A$v(ACQ)],Y5,"FSet$PossessiveFSet",2,BW,[],0,0,[C7,0,0],0,["c",A$y(ASm),"t",A$v(A3G),"O",A$w(A3K)],AFi,0,B,[Ei,C3],0,3,0,0,0,PO,0,B$,[],0,0,0,0,["t",A$v(A3S)],Se,"CompositeRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A$y(AOP),"X",A$w(A3B),"t",A$v(A33),"O",A$w(APh),"b_",A$w(AO7)],Ef,"SupplRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A$y(A0w),"t",A$v(A6F),"o",A$w(AQ1),"b_",A$w(AOK),"X",A$w(A5m),"O",A$w(AQE)],Nk,"UCISupplRangeSet",2,Ef,[],0,0,[0,0,0],0,["o",A$w(AR5),"t",A$v(AXe)],AGQ,"UCIRangeSet",
2,Cf,[],0,0,[0,0,0],0,["bF",A$x(A18),"t",A$v(AZe)],EV,"RangeSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(XB),"t",A$v(ASq),"b_",A$w(AUs)],Zn,"HangulDecomposedCharSet",2,B$,[],0,0,[0,0,0],0,["X",A$w(AS7),"t",A$v(AVq),"c",A$y(ANY),"b_",A$w(AZh),"O",A$w(AWn)],E0,"CharSet",2,Cf,[],0,0,[0,0,0],0,["cn",A$v(A1Y),"bF",A$x(ARq),"cJ",A$y(AQr),"cX",A$z(ASh),"t",A$v(AWz),"b_",A$w(AWe)],AJA,"UCICharSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(AX2),"t",A$v(A3A)],AGc,"CICharSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(AN$),"t",A$v(ARE)],Gh,"DecomposedCharSet",
2,B$,[],0,0,[0,0,0],0,["X",A$w(A6T),"c",A$y(AUc),"t",A$v(A3r),"b_",A$w(ASn),"O",A$w(A4p)],WX,"UCIDecomposedCharSet",2,Gh,[],0,0,[0,0,0],0,0,AC8,"CIDecomposedCharSet",2,Gh,[],0,0,[0,0,0],0,0,Xx,"PossessiveGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$y(AZT)],ZY,"PosPlusGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$y(A2W)],G8,"AltGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$y(A5i),"X",A$w(A6j)],Rw,"PosAltGroupQuantifierSet",2,G8,[],0,0,[0,0,0],0,["c",A$y(ASd),"X",A$w(A3c)],GN,"CompositeGroupQuantifierSet",
2,C8,[],0,0,[0,0,0],0,["c",A$y(A7D),"t",A$v(AWM)],P3,"PosCompositeGroupQuantifierSet",2,GN,[],0,0,[0,0,0],0,["c",A$y(ARK)],SX,"ReluctantGroupQuantifierSet",2,C8,[],0,0,[0,0,0],0,["c",A$y(AXf)],AAG,"RelAltGroupQuantifierSet",2,G8,[],0,0,[0,0,0],0,["c",A$y(APi)],U3,"RelCompositeGroupQuantifierSet",2,GN,[],0,0,[0,0,0],0,["c",A$y(AYF)],SY,"DotAllQuantifierSet",2,Ey,[],0,0,[0,0,0],0,["c",A$y(A7s),"cJ",A$y(AVX),"t",A$v(A39)],Y_,"DotQuantifierSet",2,Ey,[],0,0,[0,0,0],0,["c",A$y(AUt),"cJ",A$y(ANZ),"t",A$v(A4O)],FS,
0,B,[],1,0,0,0,0,AF_,"PossessiveQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$y(AOz)],Wm,"PossessiveAltQuantifierSet",2,Fm,[],0,0,[0,0,0],0,["c",A$y(ATz)],Zz,"PossessiveCompositeQuantifierSet",2,Ge,[],0,0,[0,0,0],0,["c",A$y(A4X)],AAF,"ReluctantQuantifierSet",2,Dh,[],0,0,[0,0,0],0,["c",A$y(AUp)],ADi,"ReluctantAltQuantifierSet",2,Fm,[],0,0,[0,0,0],0,["c",A$y(AOI)],SN,"ReluctantCompositeQuantifierSet",2,Ge,[],0,0,[0,0,0],0,["c",A$y(A5a)],LU,"SOLSet",2,BW,[],4,0,[0,0,0],0,["c",A$y(A2o),"O",A$w(A1O),"t",A$v(ATB)],AG_,
"WordBoundary",2,BW,[],0,0,[0,0,0],0,["c",A$y(AY8),"O",A$w(AZf),"t",A$v(A7B)],Y8,"PreviousMatch",2,BW,[],0,0,[0,0,0],0,["c",A$y(AR7),"O",A$w(AXI),"t",A$v(AYY)],WT,"EOLSet",2,BW,[],4,0,[0,0,0],0,["c",A$y(A4a),"O",A$w(AZM),"t",A$v(A2D)],AE1,"EOISet",2,BW,[],0,0,[0,0,0],0,["c",A$y(A3y),"O",A$w(AX1),"t",A$v(ARf)],Yf,"MultiLineSOLSet",2,BW,[],0,0,[0,0,0],0,["c",A$y(AZI),"O",A$w(AQ9),"t",A$v(AYS)],AJm,"DotAllSet",2,B$,[],0,0,[0,0,0],0,["c",A$y(AXi),"t",A$v(AP8),"X",A$w(AZj),"jt",A$v(A3j),"O",A$w(AZi)],AGV,"DotSet",
2,B$,[],4,0,[0,0,0],0,["c",A$y(A3s),"t",A$v(AZS),"X",A$w(A4N),"jt",A$v(ANL),"O",A$w(AXx)],ANc,"UEOLSet",2,BW,[],4,0,[0,0,0],0,["c",A$y(ASp),"O",A$w(A0Z),"t",A$v(ASK)],AL_,"UMultiLineEOLSet",2,BW,[],0,0,[0,0,0],0,["c",A$y(AT7),"O",A$w(A0S),"t",A$v(AOm)],AKa,"MultiLineEOLSet",2,BW,[],0,0,[0,0,0],0,["c",A$y(A1J),"O",A$w(APE),"t",A$v(AQ$)],II,"CIBackReferenceSet",2,B$,[],0,0,[0,0,0],0,["c",A$y(AOC),"X",A$w(A4k),"t",A$v(AYy),"O",A$w(AVb)],ANi,"BackReferenceSet",2,II,[],0,0,[0,0,0],0,["c",A$y(APJ),"cJ",A$y(AWv),"cX",
A$z(AOn),"b_",A$w(A2R),"t",A$v(A6i)],ALs,"UCIBackReferenceSet",2,II,[],0,0,[0,0,0],0,["c",A$y(ASW),"t",A$v(AZg)],QO,0,Hk,[Kj],0,3,0,0,["qx",A$z(AQR),"pX",A$y(AY_),"ky",A$w(AZx),"qQ",A$x(A5x)],ABp,"SequenceSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(AP1),"cJ",A$y(AY6),"cX",A$z(A04),"t",A$v(AUk),"b_",A$w(ARw)]]);
$rt_metadata([AGb,"UCISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(AS1),"t",A$v(ARF)],P7,"CISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(A4Y),"t",A$v(A5R)],HL,0,B,[],4,0,0,AVm,0,XG,"UCISupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(AVC),"t",A$v(A7A)],Ov,"LowSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["X",A$w(A3H),"c",A$y(AZN),"cJ",A$y(ARu),"cX",A$z(A0c),"t",A$v(AV0),"b_",A$w(AOk),"O",A$w(AV7)],OD,"HighSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["X",A$w(AZw),"c",A$y(AN4),"cJ",A$y(A3W),"cX",A$z(AVx),"t",A$v(A64),"b_",
A$w(AP2),"O",A$w(A35)],Es,"SupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bF",A$x(A4x),"cJ",A$y(A25),"cX",A$z(APm),"t",A$v(A6k),"b_",A$w(A4r)],AEb,0,FS,[],0,0,0,0,["jk",A$w(APr),"BO",A$x(AU8)],AEc,0,FS,[],0,0,0,0,["jk",A$w(A5b),"BO",A$x(AW5)],AIK,0,B,[],0,0,0,0,0,AGp,0,B,[],0,0,0,0,0,Ot,0,Bg,[],0,0,0,0,["K",A$v(ALA)],NV,0,Bg,[],0,0,0,0,["K",A$v(AL7)],AIF,0,Bg,[],0,0,0,0,["K",A$v(A4R)],AIZ,0,Bg,[],0,0,0,0,["K",A$v(AV$)],AI1,0,Bg,[],0,0,0,0,["K",A$v(AQv)],Oo,0,Bg,[],0,0,0,0,["K",A$v(AGY)],Mp,0,Oo,[],0,0,0,0,["K",A$v(AHq)],AJ3,
0,Bg,[],0,0,0,0,["K",A$v(A1m)],Ps,0,Mp,[],0,0,0,0,["K",A$v(AJ$)],ALN,0,Ps,[],0,0,0,0,["K",A$v(ATm)],AHW,0,Bg,[],0,0,0,0,["K",A$v(AZ2)],AG7,0,Bg,[],0,0,0,0,["K",A$v(ATh)],AKZ,0,Bg,[],0,0,0,0,["K",A$v(AW9)],AM1,0,Bg,[],0,0,0,0,["K",A$v(A3f)],AJ6,0,Bg,[],0,0,0,0,["K",A$v(AX6)],AMH,0,Bg,[],0,0,0,0,["K",A$v(ARQ)],AIw,0,Bg,[],0,0,0,0,["K",A$v(AVh)],AJd,0,Bg,[],0,0,0,0,["K",A$v(AZ0)],AGB,0,Bg,[],0,0,0,0,["K",A$v(AQb)],AKh,0,Bg,[],0,0,0,0,["K",A$v(A6E)],AMN,0,Bg,[],0,0,0,0,["K",A$v(AX3)],AIV,0,Bg,[],0,0,0,0,["K",A$v(ASr)],ALi,
0,Bg,[],0,0,0,0,["K",A$v(AQi)],AHY,0,Bg,[],0,0,0,0,["K",A$v(A06)],AJM,0,Bg,[],0,0,0,0,["K",A$v(A2i)],AMS,0,Bg,[],0,0,0,0,["K",A$v(AWo)],AHB,0,Bg,[],0,0,0,0,["K",A$v(AUN)],AHh,0,Bg,[],0,0,0,0,["K",A$v(ATP)],AJ4,0,Bg,[],0,0,0,0,["K",A$v(A4K)],Le,0,Bg,[],0,0,0,0,["K",A$v(AHX)],AM$,0,Le,[],0,0,0,0,["K",A$v(ATG)],ALR,0,Ot,[],0,0,0,0,["K",A$v(AY3)],AHf,0,NV,[],0,0,0,0,["K",A$v(ARo)],AK2,0,Bg,[],0,0,0,0,["K",A$v(ASG)],ALc,0,Bg,[],0,0,0,0,["K",A$v(AWT)],ALF,0,Bg,[],0,0,0,0,["K",A$v(A0P)],ALO,0,Bg,[],0,0,0,0,["K",A$v(ANQ)],AK5,
0,B,[],4,0,0,0,0,AGO,0,B,[],4,3,0,0,0]);
$rt_metadata([Yi,"UnicodeHelper$Range",8,B,[],0,3,[AGO,0,"Range"],0,0,AIP,0,B,[],0,3,0,0,0,ALq,0,B,[],4,3,0,0,0,F1,0,B,[],0,0,0,0,0,ACe,0,F1,[Fz],0,0,0,0,0,UR,0,F1,[Fz],0,0,0,0,0,AA9,0,F1,[Fz],0,0,0,0,0,AEG,0,B,[W],0,3,0,0,["g",A$w(ANS)],AEF,0,B,[W],0,3,0,0,["g",A$w(AWp)],AGI,0,B,[W],0,0,0,0,0,AFF,0,B,[W],0,3,0,0,["g",A$w(A4B)],ABJ,0,B,[W],0,3,0,0,["g",A$w(ATn)],ABI,0,B,[W],0,3,0,0,["g",A$w(A4i)],ADq,0,B,[T],0,3,0,0,["e",A$v(A5F)],ADu,0,B,[W],0,3,0,0,["g",A$w(A0y)],ADw,0,B,[W],0,3,0,0,["g",A$w(A6n)],I1,0,B,
[],3,3,0,0,0,QA,0,B,[I1],0,0,0,0,["ot",A$w(A4m),"pw",A$w(A1v),"pd",A$v(AVD)],R4,0,B,[T],0,3,0,0,["e",A$v(A2F)],Wr,0,Ba,[],0,0,0,0,["o",A$w(AQB)],Wo,0,Ba,[],0,0,0,0,["o",A$w(AYp)],Q1,0,Ba,[],0,0,0,0,["o",A$w(ASy),"L",A$v(A0$)],Zf,0,Ba,[],0,0,0,0,["o",A$w(A4A)],Zd,0,Ba,[],0,0,0,0,["o",A$w(AVB)],Ze,0,Ba,[],0,0,0,0,["o",A$w(A2z)],Zi,0,Ba,[],0,0,0,0,["o",A$w(A0k)],Zj,0,Ba,[],0,0,0,0,["o",A$w(ANM)],Zg,0,Ba,[],0,0,0,0,["o",A$w(ARi)],Zh,0,Ba,[],0,0,0,0,["o",A$w(AS6)],Zk,0,Ba,[],0,0,0,0,["o",A$w(AWy)],Zl,0,Ba,[],0,0,
0,0,["o",A$w(AZV)],Q0,0,Ba,[],0,0,0,0,["o",A$w(A7O)],Ri,0,Ba,[],0,0,0,0,["o",A$w(ARm)],QY,0,Ba,[],0,0,0,0,["o",A$w(APO)],QZ,0,Ba,[],0,0,0,0,["o",A$w(A0W)],Q4,0,Ba,[],0,0,0,0,["o",A$w(AR9)],QX,0,Ba,[],0,0,0,0,["o",A$w(A5J)],Q2,0,Ba,[],0,0,0,0,["o",A$w(AZb)],Q3,0,Ba,[],0,0,0,0,["o",A$w(AUG)],MQ,0,B,[],3,3,0,0,0,ABY,0,B,[MQ],4,3,0,0,0,SR,0,B,[W],0,3,0,0,["g",A$w(A2K)],Y$,0,B,[W],0,3,0,0,["g",A$w(AZZ)],RS,0,B,[W],0,3,0,0,["g",A$w(A1H)],AB_,0,B,[W],0,3,0,0,["g",A$w(ASl)],AF3,0,B,[W],0,3,0,0,["g",A$w(A5p)],AF2,0,
B,[W],0,3,0,0,["g",A$w(APF)],ADG,0,B,[I1],0,3,0,0,["ot",A$w(A5k),"pw",A$w(ATQ),"pd",A$v(A0e)],Tq,0,B,[W],0,3,0,0,0,FW,0,B,[T],0,3,0,AJU,0]);
$rt_metadata([Y7,0,B,[W],0,3,0,0,["g",A$w(AVr)],ACN,0,DI,[CI],0,3,0,0,0,P6,0,B,[],3,3,0,0,0,Th,0,B,[P6],0,3,0,0,0,PZ,"BackReferencedSingleSet",2,Ik,[],0,0,[0,0,0],0,["cJ",A$y(AQW),"cX",A$z(A7C),"g9",A$v(APB)],M_,0,Bt,[],0,3,0,0,0,AKT,0,B,[DS],0,3,0,0,0,WA,0,B,[Ch],0,3,0,0,["bm",A$w(AUH)],WB,0,B,[Ch],0,3,0,0,["bm",A$w(AU2)],TC,0,B,[W],0,3,0,0,["g",A$w(A0Y)],AFv,0,B,[Ch],0,3,0,0,["bm",A$w(AWD)],AFu,0,B,[Ch],0,3,0,0,["bm",A$w(ATr)],AEl,0,B,[Ch],0,0,0,0,["bm",A$w(AUW)],AA6,0,B,[BD],0,3,0,0,0,AL5,0,B,[],4,3,0,0,
0,Sk,0,B,[W],0,3,0,0,["g",A$w(A3T)],Sj,0,B,[T],0,3,0,0,["e",A$v(A4g)],Sh,0,B,[T],0,3,0,0,["e",A$v(ARd)],Si,0,B,[T],0,3,0,0,["e",A$v(AWJ)],Sl,0,B,[T],0,3,0,0,["e",A$v(AN7)],Tz,0,B,[T],0,3,0,0,["e",A$v(AWb)],Ty,0,B,[T],0,3,0,0,["e",A$v(A2E)],Tx,0,B,[T],0,3,0,0,["e",A$v(A3_)],SG,0,B,[T],0,3,0,0,["e",A$v(AXL)],R5,0,B,[],3,3,0,0,0,ALy,0,B,[T],0,3,0,0,["e",A$v(A7d)],AD6,0,B,[MQ],0,0,0,0,0,T1,0,B,[Ch],0,3,0,0,["bm",A$w(A5l)],ALT,0,B,[GA],0,3,0,0,0,ACX,0,B,[GA],0,3,0,0,0,AMq,0,B,[NL],0,3,0,0,0,AMr,0,B,[CO],0,3,0,0,
0,AMp,0,B,[BD],0,3,0,0,0,EI,0,CE,[],12,3,0,AZu,0,Y1,0,B,[],3,3,0,0,0,AFl,0,B,[W],0,3,0,0,["g",A$w(A3C)],Rn,0,B,[T],0,3,0,0,["e",A$v(AUC)],Rl,0,B,[T],0,3,0,0,["e",A$v(A0Q)],Rm,0,B,[T],0,3,0,0,["e",A$v(A6G)],Vk,0,B,[T],0,3,0,0,["e",A$v(A4t)],Vm,0,B,[T],0,3,0,0,["e",A$v(ATK)],AAC,0,B,[CO],0,3,0,0,["cb",A$v(A5A)],ABd,0,B,[T],0,3,0,0,["e",A$v(AOD)],ABb,0,B,[T],0,3,0,0,["e",A$v(AP0)],T3,0,B,[T],0,3,0,0,["e",A$v(AW3)],T4,0,B,[T],0,3,0,0,["e",A$v(AOB)],T5,0,B,[T],0,3,0,0,["e",A$v(APS)],T6,0,B,[T],0,3,0,0,["e",A$v(AWN)],Uk,
0,B,[T],0,3,0,0,["e",A$v(A2M)],AIe,0,B,[CO],0,3,0,0,["cb",A$v(A7f)]]);
$rt_metadata([AEv,0,B,[],0,3,0,0,0,Pn,0,EH,[Ei,C3],1,3,0,0,["fI",A$w(AXZ),"qn",A$w(A11)],AH8,0,B,[Y1],0,0,0,0,0,UQ,0,B,[Ir],0,3,0,0,0,Pi,0,Pn,[],0,0,0,0,["fI",A$w(AXZ),"qn",A$w(A11),"qq",A$w(A4H)],P$,0,EF,[JF],0,0,0,0,["fI",A$w(AXZ),"qn",A$w(A11),"jc",A$w(AXY),"c$",A$v(AT8)],R_,0,Bt,[],0,3,0,0,0,WV,0,Bt,[],0,3,0,0,0,Vo,0,GF,[],0,3,0,0,0,R3,0,GF,[],0,3,0,0,0,ACA,0,Ba,[],0,0,0,0,["o",A$w(AWF)],XO,0,Ba,[],0,0,0,0,["o",A$w(AY1)],Td,0,Ba,[],0,0,0,0,["o",A$w(AOH)],Tc,0,Ba,[],0,0,0,0,["o",A$w(A0N)],WH,0,Ba,[],0,0,
0,0,["o",A$w(ARY)],Zx,0,Ba,[],0,0,0,0,["o",A$w(A6f)],QK,0,Ba,[],0,0,0,0,["o",A$w(AUi)],AAU,0,Ba,[],0,0,0,0,["o",A$w(AVl)],XK,0,Ba,[],0,0,0,0,["o",A$w(A7l)],XM,0,Ba,[],0,0,0,0,["o",A$w(AP4)],Qp,0,Ba,[],0,0,0,0,["o",A$w(AWP)],ZM,0,Ba,[],0,0,0,0,["o",A$w(A2J)],ZR,0,Ba,[],0,0,0,0,["o",A$w(A4j)],AC1,0,Ba,[],0,0,0,0,["o",A$w(A53)],ABZ,0,Ba,[],0,0,0,0,["o",A$w(AXc)],PS,0,Ba,[],0,0,0,0,["o",A$w(APW)],M0,0,Ba,[],0,0,0,0,["o",A$w(AUl)],ABw,0,M0,[],0,0,0,0,["o",A$w(A5n)],AD2,0,B,[],0,3,0,0,0,AGN,0,B,[],3,3,0,0,0,AEe,0,
B,[T],0,3,0,0,["e",A$v(AWB)],AEg,0,B,[E1],0,3,0,0,["gv",A$w(AXU)],V4,0,B,[T],0,3,0,0,["e",A$v(AXy)],V5,0,B,[E1],0,3,0,0,["gv",A$w(AVA)],LZ,0,F7,[],1,3,0,0,0,SD,0,LZ,[],0,3,0,0,0,Y2,0,B,[T],0,3,0,0,0,AEm,0,B,[T],0,3,0,0,["e",A$v(A1g)],AA0,0,B,[T],0,3,0,0,["e",A$v(ATa)],AAZ,0,B,[T],0,3,0,0,["e",A$v(A3J)],ST,0,B,[T],0,3,0,0,["e",A$v(A6z)],QL,0,B,[E1],0,3,0,0,["gv",A$w(A2u)],AEZ,0,B,[W],0,3,0,0,["g",A$w(AQ8)],Hb,0,CE,[],12,0,0,TL,0,F$,"DirectoryNode",26,Da,[],0,3,[0,0,0],0,["L",A$v(AWW)],RV,0,B,[T],0,3,0,0,["e",
A$v(A1f)],SL,0,B,[W],0,3,0,0,["g",A$w(AOQ)],SW,0,B,[W],0,3,0,0,["g",A$w(AQZ)],ACZ,0,B,[],32,0,0,A9O,0,PB,0,B,[T],0,3,0,0,["e",A$v(A1C)]]);
$rt_metadata([IY,"FileNode",26,Da,[],0,3,[0,0,0],0,["L",A$v(APQ)],ABH,0,B,[Lz],0,0,0,0,["sv",A$x(AO4),"A5",A$w(ASw),"yJ",A$w(AXK),"v_",A$w(AXT)],ACr,0,B,[W],0,3,0,0,["g",A$w(A3R)],Ru,0,B,[W],0,3,0,0,["g",A$w(A5K)],Ww,0,B,[DS],0,3,0,0,0,AFE,0,B,[BX],3,3,0,0,0,AAf,0,B,[AFE],0,3,0,0,["Kc",A$v(ASN)],AId,0,B,[BX],3,3,0,0,0,Te,0,B,[W],0,3,0,0,["g",A$w(A5G)],Rr,0,B,[Ke],0,3,0,0,["qZ",A$v(AQp),"o9",A$v(AN2),"oD",A$w(AVO),"k8",A$w(AT_)],S2,0,B,[T],0,3,0,0,["e",A$v(AN9)],ADP,0,B,[W],0,3,0,0,0,ACT,0,B,[W],0,3,0,0,0,S4,
0,B,[T],0,3,0,0,["e",A$v(AUb)],De,0,B,[],3,3,0,AI3,0,CD,0,CE,[],12,3,0,AIp,0,Ec,0,B,[],3,3,0,AYD,0,ACy,0,B,[I1],0,0,0,0,["ot",A$w(A5V),"pw",A$w(AWw),"pd",A$v(A6h)],ACI,0,B,[T],0,3,0,0,["e",A$v(A10)],Ui,0,B,[DS],0,3,0,0,["bN",A$w(AO0)],AKG,0,B,[],0,0,0,0,0,PH,0,B,[T],0,3,0,0,["e",A$v(ATS)],AF9,0,B,[T],0,3,0,0,["e",A$v(A1Z)],RA,0,B,[W],0,3,0,0,["g",A$w(A1b)],RB,0,B,[W],0,3,0,0,["g",A$w(A7m)]]);
function $rt_array(cls,data){this.Zt=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"codicon.pixel.size = ","w = ","Window 1","Window ","- to worker ","- to edt ","folder","file","objects[","] = ","Select left...","Select right...","Project root","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new folder diff window","new file diff window","new project view","new editor window","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
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
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AGP(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var C0=Long_add;var Kn=Long_sub;var Cm=Long_mul;var AIO=Long_div;var AYj=Long_rem;var A7$=Long_or;var Dl=Long_and;var BcC=Long_xor;var Ii=Long_shl;var A9x=Long_shr;var GC=Long_shru;var BcD=Long_compare;var Jf=Long_eq;var BcE=Long_ne;var A77=Long_lt;var AQm=Long_le;var BcF=Long_gt;var A76=Long_ge;var BcG=Long_not;var A9I=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A9J);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=AC$.prototype;c.f=c.bm;c=AC_.prototype;c.f=c.bm;c=AC9.prototype;c.f=c.bm;c=X8.prototype;c.f=c.bm;c=ALQ.prototype;c.get=c.Nn;Object.defineProperty(c,"length",{get:c.Ug});c=AKr.prototype;c.createEntityReference=c.P9;c.getElementById=c.SB;c.createTextNode=c.Si;c.hasChildNodes=c.Rc;c.querySelectorAll=c.PQ;c.removeChild=c.T3;c.cloneNode=c.HV;c.createComment=c.Vi;c.insertBefore=c.Qr;c.getElementsByTagNameNS=c.Ue;c.hasAttributes=c.KE;c.normalize=c.NW;c.hasChildNodesJS=c.NO;c.getElementsByTagName
=c.Nm;c.appendChild=c.OU;c.createAttributeNS=c.SW;c.dispatchEvent=c.NB;c.replaceChild=c.Iq;c.createElementNS=c.Jy;c.createCDATASection=c.MC;c.querySelector=c.KD;c.createElement=c.Tv;c.isSupported=c.T7;c.importNode=c.QC;c.removeEventListener=c.Ju;c.createAttribute=c.NC;c.createDocumentFragment=c.Ha;c.createProcessingInstruction=c.P3;c.addEventListener=c.LU;Object.defineProperty(c,"nodeName",{get:c.OT});Object.defineProperty(c,"documentElement",{get:c.Ki});Object.defineProperty(c,"childNodes",{get:c.Mk});Object.defineProperty(c,
"prefix",{get:c.QI,set:c.Vt});Object.defineProperty(c,"implementation",{get:c.M0});Object.defineProperty(c,"textContent",{get:c.Vn,set:c.Sf});Object.defineProperty(c,"parentNode",{get:c.Sy});Object.defineProperty(c,"nextSibling",{get:c.J8});Object.defineProperty(c,"nodeType",{get:c.TL});Object.defineProperty(c,"doctype",{get:c.Ru});Object.defineProperty(c,"localName",{get:c.Uz});Object.defineProperty(c,"nodeValue",{get:c.JP,set:c.U$});Object.defineProperty(c,"firstChild",{get:c.Nw});Object.defineProperty(c,
"lastChild",{get:c.L2});Object.defineProperty(c,"previousSibling",{get:c.OG});Object.defineProperty(c,"namespaceURI",{get:c.IJ});Object.defineProperty(c,"attributes",{get:c.QP});Object.defineProperty(c,"ownerDocument",{get:c.IP});c=Qr.prototype;c.f=c.bm;c=AKW.prototype;c.removeEventListener=c.IR;c.dispatchEvent=c.Qw;c.addEventListener=c.Lr;c=VH.prototype;c.onAnimationFrame=c.KG;c=VG.prototype;c.f=c.Db;c=VE.prototype;c.handleEvent=c.cO;c=ABU.prototype;c.f=c.bm;c=AEM.prototype;c.handleEvent=c.cO;c=AEN.prototype;c.handleEvent
=c.cO;c=AEO.prototype;c.handleEvent=c.cO;c=AEP.prototype;c.handleEvent=c.cO;c=AEQ.prototype;c.handleEvent=c.cO;c=AER.prototype;c.handleEvent=c.cO;c=AES.prototype;c.handleEvent=c.cO;c=AET.prototype;c.handleEvent=c.cO;c=AEU.prototype;c.handleEvent=c.cO;c=AEV.prototype;c.handleEvent=c.cO;c=Xe.prototype;c.handleEvent=c.cO;c=Xf.prototype;c.handleEvent=c.cO;c=Xg.prototype;c.handleEvent=c.cO;c=Xh.prototype;c.handleEvent=c.cO;c=ADE.prototype;c.handleEvent=c.cO;c=AFP.prototype;c.f=c.bm;c=AFQ.prototype;c.f=c.bm;c=Ye.prototype;c.f
=c.bm;c=Yd.prototype;c.f=c.bm;c=Yb.prototype;c.f=c.bm;c=Ya.prototype;c.f=c.bm;c=Qj.prototype;c.accept=c.NI;c=V8.prototype;c.f=c.bm;c=PL.prototype;c.f=c.bm;c=PN.prototype;c.f=c.bm;c=PM.prototype;c.f=c.bm;c=ZE.prototype;c.f=c.Db;c=ZC.prototype;c.f=c.Db;c=ABL.prototype;c.f=c.bm;c=AEs.prototype;c.f=c.bm;c=AFJ.prototype;c.f=c.bm;c=AFI.prototype;c.f=c.bm;c=AE6.prototype;c.f=c.bm;c=PK.prototype;c.f=c.bm;c=UH.prototype;c.handleEvent=c.cO;c=WA.prototype;c.f=c.bm;c=WB.prototype;c.f=c.bm;c=AFv.prototype;c.f=c.bm;c=AFu.prototype;c.f
=c.bm;c=AEl.prototype;c.f=c.bm;c=T1.prototype;c.f=c.bm;c=AAf.prototype;c.onTimer=c.Kc;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);