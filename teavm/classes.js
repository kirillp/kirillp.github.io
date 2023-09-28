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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.gE=f;}
function $rt_cls(cls){return ACt(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return FX(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b3.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_stecls(){return C;}
function $rt_throwableMessage(t){return APk(t);}
function $rt_throwableCause(t){return APt(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AVb());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AVc(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AVd());}
function $rt_throwCCE(){}
var A=Object.create(null);
var L=$rt_throw;var BD=$rt_compare;var AVe=$rt_nullCheck;var F=$rt_cls;var S=$rt_createArray;var IS=$rt_isInstance;var AVf=$rt_nativeThread;var AVg=$rt_suspending;var AVh=$rt_resuming;var AVi=$rt_invalidPointer;var B=$rt_s;var Bp=$rt_eraseClinit;var W=$rt_imul;var Ej=$rt_wrapException;var AVj=$rt_checkBounds;var AVk=$rt_checkUpperBound;var AVl=$rt_checkLowerBound;var AVm=$rt_wrapFunction0;var AVn=$rt_wrapFunction1;var AVo=$rt_wrapFunction2;var AVp=$rt_wrapFunction3;var AVq=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ABg=$rt_createCharArrayFromData;var ATU=$rt_createByteArrayFromData;var AU9=$rt_createShortArrayFromData;var Ee=$rt_createIntArrayFromData;var AVr=$rt_createBooleanArrayFromData;var AVs=$rt_createFloatArrayFromData;var AVt=$rt_createDoubleArrayFromData;var ZF=$rt_createLongArrayFromData;var AVa=$rt_createBooleanArray;var DZ=$rt_createByteArray;var AVu=$rt_createShortArray;var BQ=$rt_createCharArray;var BV=$rt_createIntArray;var AVv=$rt_createLongArray;var AFi=$rt_createFloatArray;var AVw
=$rt_createDoubleArray;var BD=$rt_compare;var AVx=$rt_castToClass;var AVy=$rt_castToInterface;var AVz=Long_toNumber;var Bm=Long_fromInt;var AVA=Long_fromNumber;var D=Long_create;var EX=Long_ZERO;var AVB=Long_hi;var Gg=Long_lo;
function C(){this.$id$=0;}
function AVC(){var a=new C();ADK(a);return a;}
function ADK(a){}
function Cf(a){return ACt(a.constructor);}
function AMe(a,b){return a!==b?0:1;}
function AGX(a){var b,c,d,e,f,g,h,i,j;b=YL(a);if(!b)c=B(0);else{d=(((32-NS(b)|0)+4|0)-1|0)/4|0;e=BQ(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Hj((b>>>g|0)&15,16);g=g-4|0;h=i;}c=FX(e);}j=new N;P(j);H(H(j,B(1)),c);return O(j);}
function YL(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ALv(a){var b,c,d;if(!IS(a,Ep)&&a.constructor.$meta.item===null){b=new V6;Z(b);L(b);}b=AFu(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RU(){var a=this;C.call(a);a.uW=0;a.rc=null;}
function AT_(b){var c,d,e,f,g,h,i,j,k,l;ADI();Y1();ABS();ACW();AE2();AAs();ADo();ADM();YS();AB9();YR();ACK();ACL();ABt();AAA();AA1();AAS();ZQ();AA3();Y_();ACd();YT();AEK();c=(Ze()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Pg(B(2),B(3));else{d=new RU;BN(d);e=new Uf;e.sR=d;f=new Nm;c=new $rt_globals.Worker("teavm/worker.js");g=new NW;g.pi=c;g.pj=e;g.pk=f;e=Bj(g,"f");c.onmessage=e;h=I(LV,[JX(B(4),B(5),400),JX(B(6),B(7),400),JX(B(8),B(5),
700),JX(B(9),B(7),700)]);b=S(LV,1);b.data[0]=AQl(B(10),Fe(B(11),B(12)),B(5),400);b=(LR(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.sm;f=c.q8;k=new N;P(k);BG(H(H(k,B(13)),f),41);k=O(k);f=c.q3;l=c.o3;f=AJk($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BN(d);c=new Ug;c.tS=d;g=new Ue;e.then(Bj(c,"f"),Bj(g,"f"));}}
function ABy(b){var c,d,e,f,g,h,i,j,k;c=new S5;d=new R8;c.qe=new $rt_globals.TextDecoder("utf-16");e=new V5;e.oX=c;c.r3=e;e=new VY;e.vb=c;c.mq=e;f=new VZ;f.rT=c;c.t1=new $rt_globals.ResizeObserver(Bj(f,"f"));e=new VW;e.oi=c;c.m$=e;c.is=1;f=new Pe;f.x0=null;f.jJ=AVD;c.l4=f;c.qF=b;f=new VX;f.t_=c;e=Bj(f,"f");b.onmessage=e;e=ABs();b.postMessage(e);c.m3=(Eb()).getElementById("canvasDiv");b=Ze();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.dM
=b;c.m3.appendChild(b);f=c.dM;e=ANF(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)Pg(B(2),B(14));else{g=new PB;e=c.dM;f=c.mq;g.dC=null;g.ha=e;g.co=AUi(f);h=$rt_globals.window;i=S(Ds,14);j=i.data;k=new WR;k.nq=g;j[0]=CU(g,e,B(15),k);f=new WS;f.sv=g;j[1]=CU(g,e,B(16),f);f=new WT;f.oG=g;j[2]=CU(g,e,B(17),f);f=new WU;f.u8=g;j[3]=CU(g,e,B(18),f);f=new WV;f.rF=g;j[4]=CU(g,e,B(19),f);f=new WW;f.nV=g;j[5]=CU(g,e,B(20),f);k=new WX;k.vm=g;j[6]=CU(g,e,B(21),k);k=new WY;k.rW=g;j[7]=CU(g,e,B(22),k);k=new WZ;k.n8
=g;j[8]=CU(g,e,B(23),k);k=new W0;k.ui=g;j[9]=CU(g,e,B(24),k);k=new Yf;k.tM=g;j[10]=CU(g,e,B(25),k);k=new Yg;k.sM=g;j[11]=ACE(g,h,B(26),k,1);k=new Yh;k.mM=g;j[12]=CU(g,h,B(27),k);k=new Yi;k.uF=g;j[13]=CU(g,h,B(28),k);g.xd=ARM(i);AAK(g,e);c.lB=g;c.ga=ATF(b,c.mq);APY(c.t1,c.dM);e=$rt_globals.window;g=c.m$;e.addEventListener("resize",Bj(g,"handleEvent"));c.fw=ABN(d,AAC(c));TJ(c);}AC_(c);}
var Ng=G(0);
var ML=G(0);
function WN(){var a=this;C.call(a);a.kt=null;a.fX=null;}
function ACt(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new WN;c.fX=b;d=c;b.classObject=d;}return c;}
function Id(a){if(a.kt===null)a.kt=$rt_str(a.fX.$meta.name);return a.kt;}
function H1(a){return a.fX.$meta.primitive?1:0;}
function Ik(a){return ACt(a.fX.$meta.item);}
var ZU=G();
function Bj(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Lq(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ZB=G();
function AFu(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ACw(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ACw(d[e],c))return 1;e=e+1|0;}return 0;}
function GA(){var a=this;C.call(a);a.hw=null;a.kZ=null;a.jo=0;a.jL=0;}
function AVE(){var a=new GA();Z(a);return a;}
function AVF(a){var b=new GA();Bo(b,a);return b;}
function Z(a){a.jo=1;a.jL=1;}
function Bo(a,b){a.jo=1;a.jL=1;a.hw=b;}
function AI1(a){return a;}
function APk(a){return a.hw;}
function APt(a){var b;b=a.kZ;if(b===a)b=null;return b;}
var D6=G(GA);
var Bq=G(D6);
function AVc(a){var b=new Bq();ARp(b,a);return b;}
function ARp(a,b){Bo(a,b);}
var ABw=G(Bq);
var Di=G(0);
var CK=G(0);
var I5=G(0);
function Bx(){var a=this;C.call(a);a.b3=null;a.hU=0;}
var AVG=null;var AVH=null;var AVI=null;function EO(){EO=Bp(Bx);AQY();}
function AJM(){var a=new Bx();YU(a);return a;}
function FX(a){var b=new Bx();Hs(b,a);return b;}
function HC(a,b,c){var d=new Bx();Mx(d,a,b,c);return d;}
function YU(a){EO();a.b3=AVG;}
function Hs(a,b){EO();Mx(a,b,0,b.data.length);}
function Mx(a,b,c,d){var e;EO();e=BQ(d);a.b3=e;Dx(b,c,e,0,d);}
function Mt(b){var c;EO();c=AJM();c.b3=b;return c;}
function M(a,b){var c,d;if(b>=0){c=a.b3.data;if(b<c.length)return c[b];}d=new Hh;Z(d);L(d);}
function J(a){return a.b3.data.length;}
function Fo(a){return a.b3.data.length?0:1;}
function PX(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dx(a.b3,b,d,e,c);return;}}g=new BB;Z(g);L(g);}
function UG(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=M(b,d);f=c+1|0;if(e!=M(a,c))return 0;d=d+1|0;c=f;}return 1;}
function KI(a,b){if(a===b)return 1;return UG(a,b,0);}
function Eg(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=M(a,d);f=c+1|0;if(e!=M(b,c))return 0;d=d+1|0;c=f;}return 1;}
function GL(a,b,c){var d,e,f,g,h;d=Bc(0,c);if(b<65536){e=b&65535;while(true){f=a.b3.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Ig(b);h=IY(b);while(true){f=a.b3.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function F2(a,b,c){var d,e,f,g,h;d=Ba(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b3.data[d]==e)break;d=d+(-1)|0;}return d;}f=Ig(b);g=IY(b);while(true){if(d<1)return (-1);h=a.b3.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function AAk(a,b,c){var d,e,f;d=Bc(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(M(a,d+f|0)!=M(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function PU(a,b,c){var d,e;d=Ba(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(M(a,d+e|0)!=M(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Cb(a,b,c){var d,e;d=BD(b,c);if(d>0){e=new BB;Z(e);L(e);}if(!d){EO();return AVH;}if(!b&&c==J(a))return a;return HC(a.b3,b,c-b|0);}
function Dk(a,b){return Cb(a,b,J(a));}
function P3(a,b,c){return Cb(a,b,c);}
function Fe(a,b){var c,d,e,f,g,h;if(Fo(b))return a;if(Fo(a))return b;c=BQ(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=M(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=M(b,g);g=g+1|0;e=h;}return Mt(c);}
function Vx(a,b,c){var d,e,f,g;d=new N;P(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(M(a,f+g|0)!=M(b,g))break;g=g+1|0;}BG(d,M(a,f));}f=f+1|0;}H(d,Dk(a,f));return O(d);}
function Sa(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(M(a,b)>32)break a;b=b+1|0;}}while(b<=c&&M(a,c)<=32){c=c+(-1)|0;}return Cb(a,b,c+1|0);}
function AGW(a){return a;}
function Gy(a){var b,c,d,e,f;b=a.b3.data;c=BQ(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cz(b){EO();return b===null?B(29):b.cB();}
function C7(b){var c;EO();c=new N;P(c);return O(V(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bx))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(M(a,d)!=M(c,d))return 0;d=d+1|0;}return 1;}
function Is(a){var b,c,d,e;a:{if(!a.hU){b=a.b3.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.hU=(31*a.hU|0)+e|0;d=d+1|0;}}}return a.hU;}
function L7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GF;Bo(b,B(30));L(b);}AVJ=1;d=new Rj;d.kd=S(CP,10);d.gi=(-1);d.eK=(-1);d.by=(-1);e=new GN;e.eH=1;e.bP=b;e.bg=BQ(J(b)+2|0);Dx(Gy(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.rJ=g;e.f1=0;E7(e);E7(e);d.g=e;d.dm=0;d.la=X9(d,(-1),0,null);if(!Dj(d.g)){b=new I1;h=d.g;Jt(b,B(31),h.bP,h.c8);L(b);}if(d.nu)d.la.eg();b=CC();h=new SP;h.ip=(-1);h.kx=(-1);h.wk=d;h.tY=d.la;h.iO=a;h.ip=0;g=J(a);h.kx=g;e=new VA;i=h.ip;j=d.gi;k=d.eK+1|0;l=d.by+
1|0;e.hD=(-1);m=j+1|0;e.oz=m;e.dL=BV(m*2|0);f=BV(l);e.jG=f;Hz(f,(-1));if(k>0)e.k1=BV(k);Hz(e.dL,(-1));X3(e,a,i,g);h.cu=e;e.fl=1;n=0;m=0;if(!J(a)){f=S(Bx,1);f.data[0]=B(31);}else{while(true){l=J(h.iO);if(!Y5(h))l=h.kx;e=h.cu;if(e.eb>=0&&AAQ(e)==1){e=h.cu;e.eb=Jf(e);if(Jf(h.cu)==ACV(h.cu)){e=h.cu;e.eb=e.eb+1|0;}g=h.cu.eb;g=g<=l&&MT(h,g)?1:0;}else g=MT(h,h.ip);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;B2(b,P3(a,m,AEu(h)));m=AAw(h);n=g;}a:{B2(b,P3(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bs(b,
g)))break a;D8(b,g);}}if(g<0)g=0;f=HS(b,S(Bx,g));}return f;}
function AI_(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Ba(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=M(a,e)-M(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AQY(){AVG=BQ(0);AVH=AJM();AVI=new Tl;}
var EI=G(GA);
var Hk=G(EI);
var AA$=G(Hk);
var DY=G();
function HW(){DY.call(this);this.gB=0;}
var AVK=null;var AVL=null;function AQD(a){var b=new HW();AAh(b,a);return b;}
function AAh(a,b){a.gB=b;}
function Ly(b){return (NC(AUX(20),b,10)).cB();}
function JF(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new De;Bo(b,B(32));L(b);}d=J(b);if(0==d){b=new De;Bo(b,B(33));L(b);}if(c>=2&&c<=36){a:{e=0;switch(M(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new De;Z(b);L(b);}b:{c:{while(f<d){h=f+1|0;i=O$(M(b,f));if(i<0){j=new De;k=Cb(b,0,d);b=new N;P(b);H(H(b,B(34)),k);Bo(j,O(b));L(j);}if(i>=c){j=new De;l=Cb(b,0,d);b=new N;P(b);H(H(V(H(b,B(35)),c),B(36)),l);Bo(j,O(b));L(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new De;k=Cb(b,0,d);b=new N;P(b);H(H(b,B(37)),k);Bo(j,O(b));L(j);}b=new De;j=new N;P(j);V(H(j,B(38)),c);Bo(b,O(j));L(b);}
function F1(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AVL===null){AVL=S(HW,256);c=0;while(true){d=AVL.data;if(c>=d.length)break a;d[c]=AQD(c-128|0);c=c+1|0;}}}return AVL.data[b+128|0];}return AQD(b);}
function NS(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Iw(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function ALq(a,b){b=b;return BD(a.gB,b.gB);}
function ADI(){AVK=F($rt_intcls());}
function Gn(){var a=this;C.call(a);a.A=null;a.Q=0;}
function AVM(){var a=new Gn();P(a);return a;}
function AUX(a){var b=new Gn();FZ(b,a);return b;}
function P(a){FZ(a,16);}
function FZ(a,b){a.A=BQ(b);}
function NC(a,b,c){return ABn(a,a.Q,b,c);}
function ABn(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ce(a,b,b+1|0);else{Ce(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=Hj(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ce(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.A.data;b=e+1|0;f[e]=Hj($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ACl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BD(c,0.0);if(!d){if(1.0/c===Infinity){Ce(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ce(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVN;ACe(c,f);d=f.kC;g=f.ko;h=f.nP;i=1;j=1;if(h)j=2;k=9;l=AQp(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bc(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ce(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.A.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.A.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.A.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.A.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AAd(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BD(c,0.0);if(!d){if(1.0/c===Infinity){Ce(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ce(a,b,b+4|0);e=a.A.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ce(a,b,b+3|0);e=a.A.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ce(a,b,b+8|0);d=b;}else{Ce(a,b,b+9|0);e=a.A.data;d=b+1|0;e[b]=45;}e=a.A.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AVO;ABq(c,f);g=f.lc;h=f.j$;i=f.no;j=1;k=1;if(i)k=2;l=18;m=AN8(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bc(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ce(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.A.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.A.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AIy(p,EX))d=0;else{d=Gg(AC5(g,p));g=AFB(g,p);}e=a.A.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AC5(p,Bm(10));q=q+1|0;}if(h){e=a.A.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AQp(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AN8(b){var c,d,e,f,g;c=Bm(1);d=0;e=16;f=AVP.data;g=f.length-1|0;while(g>=0){if(HN(AFB(b,B5(c,f[g])),EX)){d=d|e;c=B5(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BG(a,b){return a.ma(a.Q,b);}
function XP(a,b,c){Ce(a,b,b+1|0);a.A.data[b]=c;return a;}
function JI(a,b){var c,d;c=a.A.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bc(b,Bc(c*2|0,5));a.A=NM(a.A,d);}
function O(a){return HC(a.A,0,a.Q);}
function Xw(a,b,c,d){return a.lA(a.Q,b,c,d);}
function Na(a,b,c,d,e){var f,g,h,i;Ce(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ix(a,b){return a.kK(b,0,b.data.length);}
function Ce(a,b,c){var d,e,f,g;d=a.Q;e=d-b|0;a.hL((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.A.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.Q=a.Q+(c-b|0)|0;}
var H6=G(0);
var N=G(Gn);
function LZ(){var a=new N();ARS(a);return a;}
function ARS(a){P(a);}
function H(a,b){var c;c=a.Q;if(b===null)b=B(29);Mu(a,c,b);return a;}
function BX(a,b){Mu(a,a.Q,b);return a;}
function V(a,b){NC(a,b,10);return a;}
function H3(a,b){var c,d,e,f,g,h,i,j;c=a.Q;d=1;if(ATp(b,EX)){d=0;b=AT5(b);}a:{if(Dp(b,Bm(10))<0){if(d)Ce(a,c,c+1|0);else{Ce(a,c,c+2|0);e=a.A.data;f=c+1|0;e[c]=45;c=f;}a.A.data[c]=Hj(Gg(b),10);}else{g=1;h=Bm(1);i=C_(Bm(-1),Bm(10));b:{while(true){j=B5(h,Bm(10));if(Dp(j,b)>0){j=h;break b;}g=g+1|0;if(Dp(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ce(a,c,c+g|0);if(d)f=c;else{e=a.A.data;f=c+1|0;e[c]=45;}while(true){if(HN(j,EX))break a;e=a.A.data;c=f+1|0;e[f]=Hj(Gg((C_(b,j))),10);b=Y4(b,j);j=C_(j,Bm(10));f=c;}}}return a;}
function Fk(a,b){ACl(a,a.Q,b);return a;}
function YP(a,b){BG(a,b);return a;}
function F6(a,b){Mu(a,a.Q,!b?B(39):B(40));return a;}
function AEi(a,b,c){var d,e,f,g,h,i;d=BD(b,c);if(d<=0){e=a.Q;if(b<=e){if(d){f=e-c|0;a.Q=e-(c-b|0)|0;g=0;while(g<f){h=a.A.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Hh;Z(i);L(i);}
function Wz(a,b){var c,d,e,f;if(b>=0){c=a.Q;if(b<c){c=c-1|0;a.Q=c;while(b<c){d=a.A.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Hh;Z(f);L(f);}
function ALk(a,b,c,d,e){Na(a,b,c,d,e);return a;}
function AIf(a,b,c,d){Xw(a,b,c,d);return a;}
function Zo(a){return a.Q;}
function DW(a){return O(a);}
function ALt(a,b){JI(a,b);}
function ALW(a,b,c){XP(a,b,c);return a;}
function Mu(a,b,c){var d,e,f;if(b>=0&&b<=a.Q){a:{if(c===null)c=B(29);else if(Fo(c))break a;JI(a,a.Q+J(c)|0);d=a.Q-1|0;while(d>=b){a.A.data[d+J(c)|0]=a.A.data[d];d=d+(-1)|0;}a.Q=a.Q+J(c)|0;d=0;while(d<J(c)){e=a.A.data;f=b+1|0;e[b]=M(c,d);d=d+1|0;b=f;}}return a;}c=new Hh;Z(c);L(c);}
var Es=G(Hk);
var ACD=G(Es);
function AVQ(a){var b=new ACD();AG6(b,a);return b;}
function AG6(a,b){Bo(a,b);}
var AAX=G(Es);
function AVR(a){var b=new AAX();AHq(b,a);return b;}
function AHq(a,b){Bo(a,b);}
var T8=G(0);
var Ds=G(0);
function ARM(b){var c;c=new Qp;c.ww=b;return c;}
function CI(b,c){if(b!==null)b.d0();return c;}
var O3=G(0);
function IN(){var a=this;C.call(a);a.lO=0;a.kX=0;}
var AVS=0;function FQ(a){AVS=AVS-1|0;}
function F3(a,b,c){Jp(a,Z8(b,c,400,0));}
function Q8(a,b){return KS(a,b,0.875);}
function KS(a,b,c){return Er(a,b)+c|0;}
function RH(){var a=this;IN.call(a);a.jN=null;a.br=null;a.mS=null;}
function Ex(a){var b,c,d;b=a.br;c=a.lO;d=a.kX;b.clearRect(0.0,0.0,c,d);}
function St(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.br;d="center";c.textAlign=d;break a;case 2:c=a.br;d="right";c.textAlign=d;break a;default:break a;}d=a.br;c="left";d.textAlign=c;}}
function CA(a,b){Jp(a,F_(b.nb));}
function Jp(a,b){var c;if(!(a.mS==b?1:0)){c=a.br;a.mS=b;c.font=b;}}
function Z8(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.br;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Er(a,b){var c;c=$rt_ustr(b);return a.br.measureText(c).width;}
function Lz(a,b,c,d){var e,f;e=a.br;f=$rt_ustr(FX(ABg([35,GI(b/16|0),GI(b%16|0),GI(c/16|0),GI(c%16|0),GI(d/16|0),GI(d%16|0)])));e.fillStyle=f;}
var Y2=G();
var ADY=G();
function CE(b,c){if(b===c)return 1;return b!==null?b.cG(c):c!==null?0:1;}
function BN(b){if(b!==null)return b;b=new GF;Bo(b,B(31));L(b);}
var Bd=G(0);
function Uf(){C.call(this);this.sR=null;}
var Bw=G(0);
var ABM=G();
var Y7=G(0);
function JX(b,c,d){return AQl(B(41),Fe(B(11),b),c,d);}
var ADy=G(0);
var ADr=G(0);
function LR(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dl(b,f+g|0);Dx(c,0,d,f,g);return d;}
function K5(b,c,d){Dx(b,c,d,0,d.data.length);return d;}
function Rr(b,c,d){var e;if(c>0)Dx(b,0,d,0,c);e=d.data.length;if(c<e)Dx(b,c+1|0,d,c,e-c|0);return d;}
function AA2(b,c,d,e){var f;if(c>0)Dx(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dx(b,d,e,c,f-d|0);}return e;}
function FU(b){var c;c=new Wp;c.i5=b;return c;}
function Pn(b,c){if(b.data.length!=c)b=Dl(b,c);return b;}
function ADq(b,c,d){var e;e=c.data.length;if(e==d)c=Dl(c,e*2|0);c.data[d]=b;return c;}
function LV(){var a=this;C.call(a);a.sm=null;a.q8=null;a.q3=null;a.o3=0;}
function AQl(a,b,c,d){var e=new LV();APa(e,a,b,c,d);return e;}
function APa(a,b,c,d,e){a.sm=b;a.q8=c;a.q3=d;a.o3=e;}
var ZR=G();
function AJk(b,c){return {style:b,weight:c};}
var BP=G(0);
function Ug(){C.call(this);this.tS=null;}
function AE6(a,b){var c,d,e;c=a.tS;d=0;while(d<b.length){e=b[d];(Eb()).fonts.add(e);d=d+1|0;}c.uW=1;b=c.rc;if(b!==null)ABy(b);}
var Ue=G();
function AQ5(a,b){$rt_globals.console.info("font load error "+b);}
var Lw=G();
var AVT=null;var AVU=null;function By(){if(AVT===null)AVT=AMO(AVV,0);return AVT;}
function EY(){if(AVU===null)AVU=AMO(AVW,0);return AVU;}
function ATY(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LA(b)&&(e+f|0)<=LA(d)){a:{b:{if(b!==d){g=Ik(Cf(b));h=Ik(Cf(d));if(g!==null&&h!==null){if(g===h)break b;if(!H1(g)&&!H1(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.fX;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ACw(n.constructor,o)?1:0)){KK(b,c,d,e,j);b=new IZ;Z(b);L(b);}j=j+1|0;k=m;}KK(b,c,d,e,f);return;}if(!H1(g))break a;if(H1(h))break b;else break a;}b=new IZ;Z(b);L(b);}}KK(b,c,
d,e,f);return;}b=new IZ;Z(b);L(b);}b=new BB;Z(b);L(b);}d=new GF;Bo(d,B(42));L(d);}
function Dx(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=LA(b)&&(e+f|0)<=LA(d)){KK(b,c,d,e,f);return;}b=new BB;Z(b);L(b);}
function KK(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function FG(){return Long_fromNumber(new Date().getTime());}
function ACX(){return AVA($rt_globals.performance.now()*1000000.0);}
var ADn=G();
var AAx=G();
function Pg(b,c){var d,e,f;d=(Eb()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Eb()).getElementById($rt_ustr(b)).appendChild(d);}
function Ze(){return (Eb()).createElement("canvas");}
function AEm(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ANF(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AEZ=G();
var Nm=G();
function ANm(a,b){var c;c=new Bq;Bo(c,$rt_str(b.message));L(c);}
var ADO=G();
function FE(b){return $rt_str(b);}
var Zi=G();
function NM(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AEd(b,c){var d,e,f,g;b=b.data;d=DZ(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Mj(b,c){var d,e,f,g;b=b.data;d=BV(c);e=d.data;f=Ba(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dl(b,c){var d,e,f,g;d=b.data;e=ACU(Ik(Cf(b)),c);f=Ba(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Z4(b){var c,d,e;if(b===null)return B(29);c=new N;P(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));H(c,e[d]);d=d+1|0;}BX(c,B(45));return O(c);}
function ACS(b){var c,d,e;if(b===null)return B(29);c=new N;P(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));V(c,e[d]);d=d+1|0;}BX(c,B(45));return O(c);}
function APM(b){var c,d,e;if(b===null)return B(29);c=new N;P(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));Fk(c,e[d]);d=d+1|0;}BX(c,B(45));return O(c);}
function ASx(b){var c,d,e,f;if(b===null)return B(29);c=new N;P(c);BX(c,B(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BX(c,B(44));f=e[d];AAd(c,c.Q,f);d=d+1|0;}BX(c,B(45));return O(c);}
function Hz(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BH;Z(f);L(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ZH(b,c,d,e){var f,g;if(c>d){e=new BH;Z(e);L(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AAt(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AVD;e=S(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Ba(j,h+f|0);l=h+(2*f|0)|0;m=Ba(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.uO(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function Ul(b,c,d,e){var f,g,h,i,j;f=BD(c,d);if(f>0){g=new BH;Z(g);L(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Wf=G(0);
var ABx=G();
function AJP(a,b){return a.AH(b);}
function AL$(a){return a.xK();}
var ABl=G();
var Hg=G(0);
var Tl=G();
var BB=G(Bq);
var ACj=G();
function LA(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AVX());}return b.data.length;}
function ACU(b,c){if(b===null){b=new GF;Z(b);L(b);}if(b===F($rt_voidcls())){b=new BH;Z(b);L(b);}if(c>=0)return ARz(b.fX,c);b=new Yu;Z(b);L(b);}
function ARz(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GF=G(Bq);
var IZ=G(Bq);
var C8=G();
var AVY=null;var AVZ=null;var AV0=null;var AV1=null;var AV2=null;var AV3=null;var AV4=null;var AV5=null;var AV6=null;var AV7=null;function Xo(b){var c,d;c=new Bx;d=BQ(1);d.data[0]=b;Hs(c,d);return c;}
function Ma(b){return b>=65536&&b<=1114111?1:0;}
function CG(b){return (b&64512)!=55296?0:1;}
function C6(b){return (b&64512)!=56320?0:1;}
function Me(b){return !CG(b)&&!C6(b)?0:1;}
function Hr(b,c){return CG(b)&&C6(c)?1:0;}
function Ev(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Ig(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function IY(b){return (56320|b&1023)&65535;}
function EZ(b){return GE(b)&65535;}
function GE(b){if(AV1===null){if(AV4===null)AV4=ACR();AV1=AA6((AV4.value!==null?$rt_str(AV4.value):null));}return SX(AV1,b);}
function Ez(b){return GD(b)&65535;}
function GD(b){if(AV0===null){if(AV5===null)AV5=ADJ();AV0=AA6((AV5.value!==null?$rt_str(AV5.value):null));}return SX(AV0,b);}
function SX(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BD(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function U9(b,c){if(c>=2&&c<=36){b=O$(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function O$(b){var c,d,e,f,g,h,i,j,k,l;if(AVZ===null){if(AV6===null)AV6=ABa();c=(AV6.value!==null?$rt_str(AV6.value):null);d=APu(Gy(c));e=JU(d);f=BV(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Ni(d)|0;j=j+Ni(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AVZ=f;}g=AVZ.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BD(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Hj(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function Gv(b){var c;if(b<65536){c=BQ(1);c.data[0]=b&65535;return c;}return ABg([Ig(b),IY(b)]);}
function Cu(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Me(b&65535))return 19;if(AV2===null){if(AV7===null)AV7=AEO();d=(AV7.value!==null?$rt_str(AV7.value):null);e=S(Nx,16384);f=e.data;g=DZ(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=KJ(M(d,l));if(m==64){l=l+1|0;m=KJ(M(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,KJ(M(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=KJ(M(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AI8(k,k+i|0,AEd(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AI8(k,k+i|0,AEd(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AV2=Dl(e,j);}e=AV2.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.rt)o=p+1|0;else{c=d.pg;if(b>=c)return d.pt.data[b-c|0];c=p-1|0;}}return 0;}
function JD(b){a:{switch(Cu(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Gq(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cu(b)!=16?0:1;}
function PD(b){switch(Cu(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Rk(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return PD(b);}return 1;}
function Y1(){AVY=F($rt_charcls());AV3=S(C8,128);}
function ACR(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ADJ(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ABa(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AEO(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var ME=G(0);
var SW=G(0);
var Ek=G(0);
var ADX=G(0);
function Eb(){return $rt_globals.window.document;}
function NW(){var a=this;C.call(a);a.pi=null;a.pj=null;a.pk=null;}
function AOv(a,b){var c,d,e;c=a.pi;d=a.pj;e=a.pk;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=F_(KM(c));c=d.sR;c.rc=b;if(c.uW)ABy(b);}}
var ABi=G();
function Fy(){return ASh();}
function ASh(){return Math.random();}
function Ba(b,c){if(b<c)c=b;return c;}
function Bc(b,c){if(b>c)c=b;return c;}
function MP(b){if(b<0)b= -b|0;return b;}
function AJG(b){return Math.abs(b);}
var Ps=G(0);
var Ry=G(0);
var Ro=G(0);
var T2=G(0);
var Xx=G(0);
var U$=G(0);
var OJ=G(0);
var O4=G(0);
var Y6=G();
function ANz(a,b){b=a.xj(b);KB();return b===null?null:b instanceof $rt_objcls()&&b instanceof Eo?F_(b):b;}
function AP9(a,b,c){a.Ez($rt_str(b),Lq(c,"handleEvent"));}
function APx(a,b,c){a.BC($rt_str(b),Lq(c,"handleEvent"));}
function ANr(a,b,c,d){a.zS($rt_str(b),Lq(c,"handleEvent"),d?1:0);}
function ARn(a,b){return !!a.EE(b);}
function AHg(a){return a.xK();}
function AFs(a,b,c,d){a.Da($rt_str(b),Lq(c,"handleEvent"),d?1:0);}
var BH=G(Bq);
var Yu=G(Bq);
function Eo(){C.call(this);this.sz=null;}
var AV8=null;var AV9=null;var AV$=null;var AV_=null;var AWa=null;var AWb=null;function KB(){KB=Bp(Eo);AHo();}
function M7(a){var b=new Eo();AB$(b,a);return b;}
function AB$(a,b){KB();a.sz=b;}
function KM(b){var c,d,e,f,g,h;KB();if(b===null)return null;a:{c=b;if(AV9!==null){d=$rt_str(typeof c);if(!Bn(d,B(46))&&!Bn(d,B(47))){if(Bn(d,B(48))){e=AV$.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=M7(c);h=g;AV$.set(c,new $rt_globals.WeakRef(h));NK(AWa,h,c);return g;}if(!Bn(d,B(49)))break a;else{e=AV_.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=M7(c);h=g;AV_.set(c,new $rt_globals.WeakRef(h));NK(AWb,
h,c);return g;}}e=AV9.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=M7(c);AV9.set(c,new $rt_globals.WeakRef(g));return g;}}return M7(c);}
function F_(b){KB();if(b!==null)return b.sz;return null;}
function S9(b){KB();if(b===null)return null;return b instanceof $rt_objcls()?b:KM(b);}
function AHo(){AV8=new $rt_globals.WeakMap();AV9=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AV$=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AV_=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AWa=AV$===null?null:new $rt_globals.FinalizationRegistry(Bj(new OY,"accept"));AWb=AV_===null?null:new $rt_globals.FinalizationRegistry(Bj(new OZ,"accept"));}
function NK(b,c,d){return b.register(c,d);}
var AEr=G();
var AAP=G();
var AEU=G();
var J0=G(0);
var OY=G();
function AHc(a,b){var c;b=S9(b);c=AV$;b=F_(b);c.delete(b);}
var AA9=G();
var OZ=G();
function AFw(a,b){var c;b=S9(b);c=AV_;b=F_(b);c.delete(b);}
var Hh=G(BB);
var AAi=G();
function ABs(){return "ping";}
var OI=G(0);
function S5(){var a=this;C.call(a);a.qe=null;a.r3=null;a.mq=null;a.m3=null;a.dM=null;a.t1=null;a.m$=null;a.lB=null;a.ga=null;a.is=0;a.wY=0;a.rm=null;a.fw=null;a.qF=null;a.l4=null;a.sT=0;}
function AC_(a){a.dM.focus();}
function NG(a,b){var c;c=Eb();b=$rt_ustr(b);c.title=b;}
function AAC(a){var b,c,d;b=new MF;c=a.ga;d=a.lB.co;b.be=c;b.m=d;b.bS=a;return b;}
function TJ(a){a.wY=$rt_globals.requestAnimationFrame(Bj(a.r3,"onAnimationFrame"));}
function F5(a){a.is=1;}
function TI(a,b,c){var d,e;a.lB.dC=BZ(b,c);d=a.dM;e=b;d.width=e;d=a.dM;e=c;d.height=e;d=a.ga;U(d.dk,b,c);e=d.bq;d=d.dk;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fw.b6(a.ga.dk,KL(a));a.fw.bC();}
function Gx(a,b){var c,d,e;c=a.rm;d=a.dM;if(CE(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.rm=b;}
function JB(a){return $rt_globals.performance.now()/1000.0;}
function KL(a){return $rt_globals.window.devicePixelRatio;}
function Wq(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEp(b,1);else{c=new W_;d=$rt_globals.window.showDirectoryPicker();e=new W$;e.pl=b;e.pm=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function L1(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEp(b,0);else{c=new XL;d=$rt_globals.window.showOpenFilePicker();e=new XK;e.qc=b;e.qb=c;d.then(Bj(e,"f"),Bj(c,"f"));}}
function CQ(a,b,c,d){var e,f,g,h,i,j;d=d.data;e=a.sT+1|0;a.sT=e;f=a.l4;g=F1(e);f.hQ=Mc(f,f.hQ,g);g=Vf(f,g);MG(g,b);MG(g,b);f.jM=f.jM+1|0;b=a.qF;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;0;g[0]=f;c=$rt_ustr(c);1;g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof Bx)f=$rt_ustr(c);else if(IS(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(IS(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(IS(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof Lb)){b=new BH;c
=Id(Cf(c));f=new N;P(f);H(H(f,B(50)),c);Bo(b,O(f));L(b);}c=c;f=c.gM;if(f===null)f=c.fe;}j=e+2|0;j;g[j]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function Q9(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new QU;e.ne=b;b=AEW(c);d.then(Bj(e,"f"),Bj(b,"f"));}
function UI(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.qe;b=(Gy(b)).data;f=f.decode(b);b=e.writeText(f);e=new U0;e.sx=c;c=AEW(d);b.then(Bj(e,"f"),Bj(c,"f"));}
function X0(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AEW(b){var c;c=new MZ;c.sK=b;return c;}
var B4=G(0);
var R8=G();
function ABN(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(B(51),c)){d=new Nl;Em(d,b);b=$rt_globals.fetch("test.wasm");e=new Nv;b=b.then(Bj(e,"f"));e=new Nu;b=b.then(Bj(e,"f"));e=new Nt;f=new Ns;b.then(Bj(e,"f"),Bj(f,"f"));}else if(!Bn(B(52),c))d=(AQe(J(c)<=0?B(31):Dk(c,1))).bW(b);else{d=new Wg;ABj(d,b);d.E.ec=1;d.D.ec=1;c=new Yb;c.uC=d;Wr(d,c,B(53));c=new Yd;c.oA=d;Wr(d,c,B(54));}return d;}
var Bi=G(0);
var ABG=G();
var ABf=G();
var Rs=G(0);
function V5(){C.call(this);this.oX=null;}
function AKt(a,b){var c,d;c=b;b=a.oX;if(!(!b.fw.cN(c/1000.0)&&!b.is)){d=b.ga.dk;if(W(d.b,d.a)){b.is=0;b.fw.bC();}}TJ(b);}
function VY(){C.call(this);this.vb=null;}
function Dh(a){F5(a.vb);}
var Qg=G(0);
function VZ(){C.call(this);this.rT=null;}
function AIA(a,b,c){var d,e,f,g;c=a.rT;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.dM){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=KL(c);TI(c,Hm(f.width*g),Hm(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];TI(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AD5=G();
function APY(b,c){AOV(b,c,AFH());}
function AFH(){return {box:'device-pixel-content-box'};}
function AOV(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cm=G(0);
function VW(){C.call(this);this.oi=null;}
function AOD(a,b){b=a.oi;b.fw.b6(b.ga.dk,KL(b));b.fw.bC();}
var K9=G(0);
function ED(){C.call(this);this.kv=null;}
var Ep=G(0);
var XZ=G(0);
var Nf=G(0);
function Pe(){var a=this;ED.call(a);a.hQ=null;a.jJ=null;a.x0=null;a.jM=0;}
function Vf(a,b){var c,d;c=a.hQ;while(true){if(c===null)return null;d=JE(a.jJ,b,c.i$);if(!d)break;c=d>=0?c.b4:c.bQ;}return c;}
function Mc(a,b,c){var d,e;if(b===null){b=new JA;d=null;b.i$=c;b.iv=d;b.fz=1;b.fH=1;return b;}e=JE(a.jJ,c,b.i$);if(!e)return b;if(e>=0)b.b4=Mc(a,b.b4,c);else b.bQ=Mc(a,b.bQ,c);El(b);return JT(b);}
function Kf(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=JE(a.jJ,c,b.i$);if(d<0)b.bQ=Kf(a,b.bQ,c);else if(d>0)b.b4=Kf(a,b.b4,c);else{e=b.b4;if(e===null)return b.bQ;f=b.bQ;g=S(JA,e.fz).data;h=0;while(true){b=e.bQ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b4;while(h>0){h=h+(-1)|0;j=g[h];j.bQ=b;El(j);b=JT(j);}e.b4=b;e.bQ=f;El(e);b=e;}El(b);return JT(b);}
function VX(){C.call(this);this.t_=null;}
function APV(a,b){var c,d,e,f,g,h,i,j,k;c=a.t_.l4;b=b.data;if(!(b===ABs()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BH;Z(b);L(b);}if(b.length<1){b=new BH;Z(b);L(b);}d=F1(b[0]);e=Vf(c,d);if(e===null)c=null;else{c.hQ=Kf(c,c.hQ,d);c.jM=c.jM+1|0;c=e.iv;}f=S(C,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FE(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Tg;ADK(e);e.ht=k;}else e=(k instanceof $rt_globals.File?1:0)?ACo(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:ACo(k,null);g[h]=e;h=j;}c.l(f);}}
function PB(){var a=this;C.call(a);a.co=null;a.ha=null;a.xd=null;a.dC=null;}
function Nc(){return (Eb()).activeElement;}
function CU(a,b,c,d){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"));return Xk(a,b,c,d);}
function ACE(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bj(d,"handleEvent"),!!e);return Xk(a,b,c,d);}
function Xk(a,b,c,d){var e;e=new Qc;e.v$=b;e.wa=c;e.v_=d;return e;}
function Uh(a,b){var c;c=new Vi;c.u7=b;return c;}
function EE(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.ha.getBoundingClientRect();e=BZ(Hm((b.clientX-d.left)*c),Hm((b.clientY-d.top)*c));f=new Be;g=a.dC;f.b=g.b;f.a=g.a;d=new MB;UJ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.vT=f;return d;}
function Yk(a,b,c){var d,e,f,g;d=new O7;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;UJ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j7=0;d.dO=e;d.bk=f;d.hB=c;d.r5=g;return d;}
function DP(a,b){b.stopPropagation();b.preventDefault();}
function AAK(a,b){var c;c=new XW;c.pD=b;b.onpointerdown=Bj(c,"f");c=new XX;c.om=b;b.onpointerup=Bj(c,"f");}
function Lm(){var a=this;C.call(a);a.rk=null;a.cE=null;a.bq=null;a.ta=null;a.wC=0;a.xH=0;a.jP=null;a.yf=null;a.xX=null;a.wW=null;a.ge=null;a.hA=null;a.gI=null;a.x5=null;a.o6=null;a.dk=null;a.uQ=null;a.lt=0;a.j3=0;a.mc=0;a.lV=0;a.ig=0;a.l$=null;}
function Hq(a,b,c){return GW(a,b,c,400,0);}
function CL(a,b,c){return MO(a.rk,b,c);}
function Fu(a,b){var c,d,e,f,g;c=a.bq;d=b.bn;e=b.bG;f=b.bl;g=b.bH;c.clearColor(d,e,f,g);a.bq.clear(16384);}
function Cs(a,b){var c;if(b==a.j3)return b;if(!b)a.bq.disable(3042);else{a.bq.enable(3042);a.bq.blendFuncSeparate(770,771,1,1);}c=a.j3;a.j3=b;return c;}
function R4(a,b,c){LI(a,b.b,b.a,c);}
function LI(a,b,c,d){var e,f;e=d.b;f=d.a;a.lV=1;a.ig=1;d=a.l$;d.rw=b;d.rx=c;d.rv=e;d.ru=f;UK(a);}
function G2(a){a.lV=0;a.ig=0;UK(a);}
function UK(a){var b,c,d,e,f,g;b=a.mc;c=a.lV;if(b!=c){a.mc=c;if(!c)a.bq.disable(3089);else a.bq.enable(3089);}if(a.mc&&a.ig){a.ig=0;d=a.bq;e=a.l$;b=e.rw;c=a.dk.a-e.rx|0;f=e.ru;c=c-f|0;g=e.rv;d.scissor(b,c,g,f);}}
function Il(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.o6;c=a.lt;d=b.gr.sE;e=b.ej;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.ej;h=b.m7;e.bindBuffer(34962,h);i=b.gr.mv.data;g=i.length;j=0;while(j<g){k=i[j];l=b.ej;m=k.hi;n=k.e9;o=b.gr.kG*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.e9|0;j=j+1|0;}a:{e=b.u$;if(e!==null){c=0;b.ej.bindBuffer(34962,e);i=b.gr.rg.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.ej;j=e.hi;p=e.e9;m=e.pd;n=b.gr.px;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.e9|0;g=g+1|0;}}}q=b.uu;if(q===null){c=b.r$;if(c>0)b.ej.drawArrays(4,0,c);}else{b.ej.bindBuffer(34963,q);k=b.ej;g=b.uJ;k.drawElements(4,g,5123,0);}a.lt=d;}
function Bv(a,b,c,d,e){Iq(a,a.jP);Jb(a.jP,a.bq,b,c,d,a.dk);d=a.jP;GJ(a.bq,d.t$,e);Il(a);}
function Yz(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Iq(a,a.gI);Jb(a.gI,a.bq,b,c,d,a.dk);j=a.gI;d=a.bq;k=j.mz;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.my;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.gI;GJ(a.bq,d.nT,i);Il(a);}
function EJ(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Iq(a,a.ge);Jb(a.ge,a.bq,b,c,d,a.dk);UF(a.ge,a.bq,f);d=a.ge;j=a.bq;f=f.fD;b=f.b;c=f.a;k=e.bn;l=b;m=k/l;k=e.bG;n=c;o=k/n;k=e.bl/l;l=e.bH/n;d=d.tN;j.uniform4f(d,m,o,k,l);d=a.ge;e=a.bq;GJ(e,d.pM,g);GJ(e,d.nA,h);d=d.oL;e.uniform2f(d,i,0.0);Il(a);}
function CW(a){var b,c;b=new Jz;c=a.ta;b.fD=new Be;b.d7=c;b.e3=c.dt.createTexture();AWc=AWc+1|0;return b;}
function N1(a,b){Xz(a.bq,b);}
function Iq(a,b){var c,d;if(b!==a.uQ){c=a.bq;d=b.bV;c.useProgram(d);a.uQ=b;}}
function ADw(){var a=this;Lm.call(a);a.xh=null;a.xY=null;}
function ATF(a,b){var c=new ADw();AKQ(c,a,b);return c;}
function AKQ(a,b,c){var d,e,f,g,h,i,j,k,l;d=new UN;a.dk=new Be;a.lt=0;a.l$=new W4;a.rk=d;e=$rt_str(b.getParameter(7938));f=new N;P(f);H(H(f,B(55)),e);$rt_globals.console.info($rt_ustr(O(f)));a.bq=b;a.cE=MO(d,4,4);g=AFi(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BQ(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new Qe;JP();k=AWd;f.ej=b;f.gr=k;f.r$=h.length/k.kG|0;f.uJ
=j.length;k=b.createBuffer();f.m7=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.u$=null;k=b.createBuffer();f.uu=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.o6=f;a.xH=KI(e,B(56));f=new Qf;f.dt=b;a.ta=f;l=b.getParameter(3379);a.wC=l;f=new N;P(f);V(H(f,B(57)),l);$rt_globals.console.info($rt_ustr(O(f)));g=S(Dy,7);i=g.data;d=new WC;IK(d,b,B(58),B(59),AWd);f=d.bV;d.t$=b.getUniformLocation(f,"uColor");a.jP=d;i[0]
=d;f=AS8(b,B(60));a.yf=f;i[1]=f;f=AT8(b);a.xX=f;i[2]=f;f=AUy(b);a.wW=f;i[3]=f;f=ATG(b);a.ge=f;i[4]=f;f=AUL(b);a.hA=f;i[5]=f;f=AUu(b);a.gI=f;i[6]=f;a.x5=g;Xz(b,B(61));a.xY=new UL;a.xh=c;}
function GW(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cE;g=Z8(b,c,d,e);Jp(f,g);h=f.br.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Er(f,B(62));m=Er(f,B(63));h=new Lc;n=KM(g);h.mh=b;h.wi=c;o=c|0;if(o!==c){b=new N;P(b);Fk(H(b,B(64)),c);$rt_globals.console.info($rt_ustr(O(b)));}h.pb=o;h.wp=d;h.wU=e;h.dA=i;h.et=j;h.wg=l;h.l5=k;h.nb=n;h.rb=Dg(i);h.xQ=Dg(h.et);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.wm=d;switch(e){case 1:break;case 2:b=B(7);break a;default:b=B(5);break a;}b
=B(65);}h.v9=b;return h;}
function Cv(){C.call(this);this.bc=null;}
function Em(a,b){a.bc=b;}
function AR0(a,b){return 0;}
var Ji=G();
var AVD=null;function JE(a,b,c){return b.jO(c);}
function ABS(){AVD=new Ji;}
function AAo(){var a=this;C.call(a);a.b2=null;a.ms=null;a.bv=null;a.di=null;a.ew=null;a.fE=null;a.f6=null;a.jH=null;a.kl=null;a.c1=null;a.hy=null;a.of=0;}
function AUi(a){var b=new AAo();AN6(b,a);return b;}
function AN6(a,b){a.b2=CJ(S(Co,0));a.ms=CJ(S(Co,0));a.bv=CJ(S(Cq,0));a.di=CJ(S(DI,0));a.ew=CJ(S(Ey,0));a.fE=CJ(S(EK,0));a.f6=CJ(S(Fb,0));a.jH=CJ(S(Bi,0));a.kl=CJ(S(Bi,0));a.c1=b;}
function Un(a,b){var c,d,e,f;Dh(a.c1);c=(Cp(!b.hB?a.ms:a.b2)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bA(b);if(f)break;if(b.j7)break;e=e+1|0;}return f;}
function Q6(a,b,c){var d,e,f;Dh(a.c1);d=(Cp(a.fE)).data;e=d.length;f=0;while(f<e){if(d[f].gw(b,c))return 1;f=f+1|0;}return 0;}
function WR(){C.call(this);this.nq=null;}
function AN2(a,b){var c;c=a.nq;if(Un(c.co,Yk(c,b,1)))DP(c,b);}
function WS(){C.call(this);this.sv=null;}
function AOi(a,b){var c;c=a.sv;if(Un(c.co,Yk(c,b,0)))DP(c,b);}
function WT(){C.call(this);this.oG=null;}
function AMx(a,b){var c,d,e,f,g,h,i;c=a.oG;if(c.dC!==null){a:{b:{d=EE(c,b);e=c.co;Dh(e.c1);f=e.hy;if(f!==null)f.l(d);else{g=(Cp(e.bv)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bL(d))break a;i=i+1|0;}}}}DP(c,b);}}
function WU(){C.call(this);this.u8=null;}
function ALS(a,b){var c,d,e,f,g,h;c=a.u8;b.button;if(c.dC!==null)a:{d=EE(c,b);c=c.co;e=b.button;Dh(c.c1);if(c.hy===null){f=(Cp(c.bv)).data;g=f.length;h=0;while(h<g){b=f[h].b_(d,e);if(b!==null){c.hy=b;c.of=e;break a;}h=h+1|0;}}}}
function WV(){C.call(this);this.rF=null;}
function AMj(a,b){var c,d,e,f,g,h,i;c=a.rF;b.button;if(c.dC!==null){d=EE(c,b);e=c.co;f=b.button;Dh(e.c1);if(f==e.of&&e.hy!==null)e.hy=null;g=(Cp(e.bv)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cO(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DP(c,b);}}
function WW(){C.call(this);this.nV=null;}
function AOS(a,b){var c,d,e,f,g,h,i,j,k;c=a.nV;if(c.dC!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.co;f=EE(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dh(e.c1);i=(Cp(e.di)).data;j=i.length;k=0;b:{while(k<j){if(i[k].cY(f,d,h))break b;k=k+1|0;}}DP(c,b);}}
function WX(){C.call(this);this.vm=null;}
function AJ7(a,b){var c,d,e,f,g,h,i,j;c=a.vm;if(c.dC!==null){d=EE(c,b);e=c.co;f=b.button;g=b.detail;Dh(e.c1);h=(Cp(e.bv)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cr(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DP(c,b);}}
function WY(){C.call(this);this.rW=null;}
function ASn(a,b){var c,d,e,f,g,h,i;c=a.rW;if(c.dC!==null){d=EE(c,b);e=c.co;Dh(e.c1);f=(Cp(e.ew)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bA(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DP(c,b);}}
function WZ(){C.call(this);this.n8=null;}
function AJi(a,b){var c,d,e;b=a.n8.co;c=(Cp(b.kl)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.c1);}
function W0(){C.call(this);this.ui=null;}
function AP4(a,b){var c,d,e;b=a.ui.co;c=(Cp(b.jH)).data;d=c.length;e=0;while(e<d){c[e].p();e=e+1|0;}Dh(b.c1);}
function Yf(){C.call(this);this.tM=null;}
function AR1(a,b){var c;c=a.tM;if(c.dC!==null)EE(c,b);}
function Yg(){C.call(this);this.sM=null;}
function AL7(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.sM;if(Nc()===c.ha){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cp(c.co.f6)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dp();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.co.c1;m=new NQ;m.uw=k;m.ux=l;g.getAsString(Bj(m,"accept"));DP(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new N;P(l);H(H(H(H(l,B(66)),k),B(67)),g);$rt_globals.console.info($rt_ustr(O(l)));}e=e+1
|0;}}}
function Yh(){C.call(this);this.mM=null;}
function AMB(a,b){var c;c=a.mM;if(Nc()===c.ha&&Q6(c.co,Uh(c,b),0))DP(c,b);}
function Yi(){C.call(this);this.uF=null;}
function AOx(a,b){var c;c=a.uF;if(Nc()===c.ha&&Q6(c.co,Uh(c,b),1))DP(c,b);}
var UA=G(0);
var UN=G();
function MO(a,b,c){var d,e,f;d=new RH;AVS=AVS+1|0;d.lO=b;d.kX=c;e=(Eb()).createElement("canvas");d.jN=e;f=b;e.width=f;e=d.jN;f=c;e.height=f;d.br=d.jN.getContext("2d");return d;}
var UL=G();
function ALa(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function MF(){var a=this;C.call(a);a.be=null;a.m=null;a.bS=null;}
function AEh(){var a=this;C.call(a);a.hf=null;a.iN=null;a.g6=0;}
function CJ(a){var b=new AEh();AJ1(b,a);return b;}
function AJ1(a,b){a.hf=b;}
function Y(a,b){var c,d,e;c=a.g6;d=a.hf;if(c==d.data.length)a.hf=Dl(d,c+4|0);d=a.hf.data;e=a.g6;a.g6=e+1|0;d[e]=b;a.iN=null;}
function Cp(a){var b;b=a.iN;if(!(b!==null&&b.data.length==a.g6))a.iN=Dl(a.hf,a.g6);return a.iN;}
var I3=G(0);
var Co=G(0);
var Cq=G(0);
function ALf(a,b){return 0;}
function AQ6(a,b,c){return null;}
function AFZ(a,b,c){return 0;}
function AOQ(a,b,c,d){return 0;}
var DI=G(0);
var Ey=G(0);
var EK=G(0);
var EP=G(0);
var Fb=G(0);
function Qp(){C.call(this);this.ww=null;}
function Be(){var a=this;C.call(a);a.b=0;a.a=0;}
function BZ(a,b){var c=new Be();PF(c,a,b);return c;}
function PF(a,b,c){a.b=b;a.a=c;}
function Ct(a,b){a.b=b.b;a.a=b.a;}
function U(a,b,c){a.b=b;a.a=c;}
function YA(a){var b,c,d;b=a.b;c=a.a;d=new N;P(d);V(H(V(H(d,B(68)),b),B(69)),c);return O(d);}
function Le(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function W4(){var a=this;C.call(a);a.rw=0;a.rx=0;a.rv=0;a.ru=0;}
var ADu=G();
var Zy=G(0);
function Qf(){C.call(this);this.dt=null;}
function LM(){var a=this;C.call(a);a.bV=null;a.xS=null;}
function ACn(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?B(70):B(71);g=$rt_str(b.getShaderInfoLog(e));h=new N;P(h);H(H(h,f),g);g=O(h);b.deleteShader(e);Br(By(),g);Br(EY(),B(72));Br(EY(),d);Br(EY(),B(72));b=new Bq;Bo(b,g);L(b);}
function Dy(){var a=this;LM.call(a);a.n7=null;a.pJ=null;a.lG=null;}
function AWe(a,b,c,d){var e=new Dy();IK(e,a,b,c,d);return e;}
function IK(a,b,c,d,e){var f,g,h,i,j,k;a.xS=e;f=ACn(b,35633,c);d=ACn(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bV=g;h=e.sj.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bV;k=c.hi;c=c.p2;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bV;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Xz(b,B(73));a.lG=new Be;c=a.bV;a.n7=b.getUniformLocation(c,"uResolution");c=a.bV;a.pJ=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bq;c=new N;P(c);H(H(c,B(74)),d);Bo(b,O(c));L(b);}
function AAq(a,b,c){var d,e,f;if(!Le(a.lG,c)){Ct(a.lG,c);d=a.n7;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Jb(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.pJ;b.uniform4f(e,i,l,h,j);AAq(a,b,f);}
function WC(){Dy.call(this);this.t$=null;}
function EC(){Dy.call(this);this.rC=null;}
function AS8(a,b){var c=new EC();Uk(c,a,b);return c;}
function AWf(a,b,c){var d=new EC();Uo(d,a,b,c);return d;}
function Uk(a,b,c){Uo(a,b,B(58),c);}
function Uo(a,b,c,d){JP();IK(a,b,c,d,AWd);c=a.bV;a.rC=b.getUniformLocation(c,"sDiffuse");}
function UF(a,b,c){var d;d=a.rC;b.uniform1i(d,0);b.activeTexture(33984);c=c.e3;b.bindTexture(3553,c);}
var AA7=G(Dy);
function AT8(a){var b=new AA7();ARv(b,a);return b;}
function ARv(a,b){JP();IK(a,b,B(58),B(75),AWd);}
function AC8(){EC.call(this);this.wH=null;}
function AUy(a){var b=new AC8();AJp(b,a);return b;}
function AJp(a,b){var c;Uk(a,b,B(76));c=a.bV;a.wH=b.getUniformLocation(c,"uContrast");}
function ACI(){var a=this;EC.call(a);a.tN=null;a.pM=null;a.nA=null;a.oL=null;}
function ATG(a){var b=new ACI();AOM(b,a);return b;}
function AOM(a,b){var c;Uo(a,b,B(77),B(78));c=a.bV;a.tN=b.getUniformLocation(c,"uTexTransform");c=a.bV;a.pM=b.getUniformLocation(c,"uColor");c=a.bV;a.nA=b.getUniformLocation(c,"uBgColor");c=a.bV;a.oL=b.getUniformLocation(c,"uContrast");}
function ZT(){var a=this;EC.call(a);a.u_=null;a.u9=null;a.qn=null;}
function AUL(a){var b=new ZT();AIQ(b,a);return b;}
function AIQ(a,b){var c,d;Uk(a,b,B(79));c=a.bV;a.u_=b.getUniformLocation(c,"uColorB");d=a.bV;a.u9=b.getUniformLocation(d,"uColorF");d=a.bV;a.qn=b.getUniformLocation(d,"uContrast");}
function ACG(){var a=this;Dy.call(a);a.nT=null;a.mz=null;a.my=null;}
function AUu(a){var b=new ACG();AIR(b,a);return b;}
function AIR(a,b){var c;JP();IK(a,b,B(58),B(80),AWd);c=a.bV;a.nT=b.getUniformLocation(c,"uColor");c=a.bV;a.mz=b.getUniformLocation(c,"uPoints1");c=a.bV;a.my=b.getUniformLocation(c,"uPoints2");}
var Sg=G(0);
var AEX=G(0);
function GJ(b,c,d){var e,f,g,h;e=d.bn;f=d.bG;g=d.bl;h=d.bH;b.uniform4f(c,e,f,g,h);}
function Xz(b,c){var d,e;d=b.getError();if(d){b=By();e=new N;P(e);V(H(e,c),d);Br(b,O(e));}}
function Qc(){var a=this;C.call(a);a.v$=null;a.wa=null;a.v_=null;}
function Qe(){var a=this;C.call(a);a.ej=null;a.gr=null;a.m7=null;a.u$=null;a.uu=null;a.r$=0;a.uJ=0;}
function Ck(){var a=this;C.call(a);a.v7=null;a.eP=0;}
function Da(a,b,c){a.v7=b;a.eP=c;}
function GR(){var a=this;Ck.call(a);a.sj=null;a.mv=null;a.rg=null;a.kG=0;a.px=0;a.sE=0;}
var AWd=null;var AWg=null;function JP(){JP=Bp(GR);AKH();}
function AKH(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new GR;c=S(D0,2);d=c.data;ARg();d[0]=AWh;d[1]=AWi;JP();Da(b,B(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.lY.eP){case 0:f=f+l.e9|0;h=h+1|0;break a;case 1:e=e+l.e9|0;g=g+1|0;break a;default:}}i=i|1<<l.hi;k=k+1|0;}b.sj=c;b.kG=e;b.px=f;b.sE=i;c=S(D0,g);m=c.data;b.mv=c;c=S(D0,h);n=c.data;b.rg=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.lY.eP){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}AWd
=b;c=S(GR,1);c.data[0]=b;AWg=c;}
var Mn=G(0);
var TK=G(0);
var U1=G(0);
var Gs=G();
function Jy(){Gs.call(this);this.vF=null;}
function AAT(){var a=this;Jy.call(a);a.xE=0;a.kS=0;a.iH=null;a.kp=null;a.s3=null;}
function AMO(a,b){var c=new AAT();AQ0(c,a,b);return c;}
function AQ0(a,b,c){a.vF=b;b=new N;P(b);a.iH=b;a.kp=BQ(32);a.xE=c;AAH();a.s3=AWj;}
function TX(a,b,c,d){var e,$$je;e=a.vF;if(e===null)a.kS=1;if(!(a.kS?0:1))return;a:{try{e.ke(b,c,d);break a;}catch($$e){$$je=Ej($$e);if($$je instanceof ID){}else{throw $$e;}}a.kS=1;}}
function N$(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ABE(b,c,d-c|0);e=DZ(Bc(16,Ba(e.length,1024)));g=ABr(e,0,e.data.length);h=a.s3;i=new Py;b=DZ(1);j=b.data;j[0]=63;He();k=AWk;i.lK=k;i.kY=k;c=j.length;if(c&&c>=i.mw){i.v3=h;i.pX=b.gE();i.xt=2.0;i.mw=4.0;i.pc=BQ(512);i.nS=DZ(512);k=AWl;if(k===null){i=new BH;Bo(i,B(82));L(i);}i.lK=k;i.kY=k;a:while(true){if(i.iB==3){f=new D3;Z(f);L(f);}i.iB=2;b:{while(true){try{k=Zj(i,f,g);}catch($$e){$$je=Ej($$e);if($$je instanceof Bq){f=$$je;break a;}else{throw $$e;}}if(Ip(k))
{d=B6(f);if(d<=0)break b;k=D4(d);}else if(Hb(k))break;h=!L9(k)?i.lK:i.kY;c:{if(h!==AWl){if(h===AWm)break c;else break b;}d=B6(g);b=i.pX;l=b.data.length;if(d<l){k=AWn;break b;}Xm(g,b,0,l);}EG(f,f.W+Ki(k)|0);}}l=Hb(k);TX(a,e,0,g.W);N8(g);if(!l){while(true){d=i.iB;if(d!=2&&d!=4){f=new D3;Z(f);L(f);}f=AWo;if(f===f)i.iB=3;l=Hb(f);TX(a,e,0,g.W);N8(g);if(!l)break;}return;}}L(AH2(f));}i=new BH;Bo(i,B(83));L(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BG(BX(a.iH,b),10);b=a.iH;c=b.Q;d=a.kp;if(c>d.data.length)d=BQ(c);e=0;f=0;if(e>c){b=new BB;Bo(b,B(84));L(b);}while(e<c){g=d.data;h=f+1|0;i=b.A.data;j=e+1|0;g[f]=i[e];f=h;e=j;}N$(a,d,0,c);a.iH.Q=0;}
function Gd(){Gs.call(this);this.xi=null;}
function Yo(a){a.xi=DZ(1);}
var Lu=G(Gd);
var AVV=null;function AK5(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function ACW(){var b;b=new Lu;Yo(b);AVV=b;}
function D0(){var a=this;Ck.call(a);a.p2=null;a.lY=null;a.e9=0;a.pd=0;a.hi=0;}
var AWh=null;var AWi=null;var AWp=null;function ARg(){ARg=Bp(D0);AJN();}
function ATT(a,b,c,d,e,f,g){var h=new D0();Wu(h,a,b,c,d,e,f,g);return h;}
function Wu(a,b,c,d,e,f,g,h){ARg();Da(a,b,c);a.p2=d;a.lY=e;a.e9=f;a.pd=g;a.hi=h;}
function AJN(){var b;b=new D0;AMs();Wu(b,B(85),0,B(86),AWq,2,0,0);AWh=b;b=ATT(B(87),1,B(88),AWq,2,0,1);AWi=b;AWp=I(D0,[AWh,b]);}
function Jq(){var a=this;C.call(a);a.vS=null;a.wK=null;}
function ADd(b){var c,d;if(Fo(b))L(AAM(b));if(!ADg(M(b,0)))L(AAM(b));c=1;while(c<J(b)){a:{d=M(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ADg(d))break a;else L(AAM(b));}}c=c+1|0;}}
function ADg(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mq=G(Jq);
var AWj=null;function AAH(){AAH=Bp(Mq);AIN();}
function ADB(a){var b,c;b=new TY;b.e6=B(89);He();c=AWk;b.gX=c;b.lR=c;b.wz=a;b.mI=0.3333333432674408;b.wX=0.5;b.n0=DZ(512);b.su=BQ(512);return b;}
function AIN(){var b,c,d,e,f;b=new Mq;AAH();c=S(Bx,0);d=c.data;ADd(B(90));e=d.length;f=0;while(f<e){ADd(d[f]);f=f+1|0;}b.vS=B(90);b.wK=c.gE();AWj=b;}
function Pj(){var a=this;C.call(a);a.fy=null;a.ml=null;a.j5=null;a.sQ=null;a.pw=null;a.pP=null;}
function AAY(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.fy,b,c));}
function M8(a,b){var c,d,e,f,g,h,i,$$je;c=new Bx;d=b;while(a.ml[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.fy,b,d));f=e.data;EO();d=f.length;AAH();g=AWj;h=ABr(e,0,d);a:{try{i=ADB(g);He();g=ZI(ACr(AD$(i,AWl),AWl),h);break a;}catch($$e){$$je=Ej($$e);if($$je instanceof FP){g=$$je;}else{throw $$e;}}h=new Xt;h.jo=1;h.jL=1;h.hw=B(91);h.kZ=g;L(h);}if(!g.W&&g.dv==g.mj)c.b3=g.hh;else{f=BQ(B6(g));e=f.data;c.b3=f;NE(g,f,0,e.length);}return c;}
function Ne(a,b){var c,d,e;c=new Bx;d=b>>>1|0;e=d;while(a.j5[e]){e=e+1|0;}d=e-d|0;Hs(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.fy,b,d)));return c;}
var GV=G(Ck);
var AWr=null;var AWq=null;var AWs=null;function AMs(){AMs=Bp(GV);AIe();}
function AIF(a,b){var c=new GV();ADC(c,a,b);return c;}
function ADC(a,b,c){AMs();Da(a,b,c);}
function AIe(){var b;AWr=AIF(B(92),0);b=AIF(B(93),1);AWq=b;AWs=I(GV,[AWr,b]);}
var KQ=G(Gd);
var AVW=null;function AIY(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AE2(){var b;b=new KQ;Yo(b);AVW=b;}
function ADm(){BH.call(this);this.v6=null;}
function AAM(a){var b=new ADm();AQu(b,a);return b;}
function AQu(a,b){Z(a);a.v6=b;}
var V6=G(D6);
var Mp=G(0);
function XW(){C.call(this);this.pD=null;}
function APw(a,b){a.pD.setPointerCapture(b.pointerId);}
function XX(){C.call(this);this.om=null;}
function AGO(a,b){a.om.releasePointerCapture(b.pointerId);}
function G8(){var a=this;C.call(a);a.mj=0;a.W=0;a.dv=0;a.hs=0;}
function Ws(a,b){a.hs=(-1);a.mj=b;a.dv=b;}
function EG(a,b){var c,d,e;if(b>=0&&b<=a.dv){a.W=b;if(b<a.hs)a.hs=0;return a;}c=new BH;d=a.dv;e=new N;P(e);BG(V(H(V(H(e,B(94)),b),B(95)),d),93);Bo(c,O(e));L(c);}
function B6(a){return a.dv-a.W|0;}
function DQ(a){return a.W>=a.dv?0:1;}
var Sz=G(0);
var Ld=G(G8);
function AEC(b){var c,d;if(b>=0)return AOk(0,b,BQ(b),0,b,0);c=new BH;d=new N;P(d);V(H(d,B(96)),b);Bo(c,O(d));L(c);}
function ABE(b,c,d){return AOk(0,b.data.length,b,c,c+d|0,0);}
function NE(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BB;i=new N;P(i);V(H(V(H(i,B(97)),g),B(98)),f);Bo(h,O(i));L(h);}if(B6(a)<d){j=new L0;Z(j);L(j);}if(d<0){j=new BB;k=new N;P(k);H(V(H(k,B(99)),d),B(100));Bo(j,O(k));L(j);}g=a.W;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.hh.data[m+a.l7|0];l=l+1|0;c=n;m=o;}a.W=g+d|0;return a;}}b=b.data;j=new BB;d=b.length;k=new N;P(k);BG(V(H(V(H(k,B(101)),c),B(95)),d),41);Bo(j,O(k));L(j);}
function Kd(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.mm){b=new Jd;Z(b);L(b);}e=d-c|0;if(B6(a)<e){b=new H5;Z(b);L(b);}if(c>J(b)){f=new BB;d=J(b);b=new N;P(b);BG(V(H(V(H(b,B(102)),c),B(95)),d),41);Bo(f,O(b));L(f);}if(d>J(b)){f=new BB;c=J(b);b=new N;P(b);V(H(V(H(b,B(103)),d),B(104)),c);Bo(f,O(b));L(f);}if(c>d){b=new BB;f=new N;P(f);V(H(V(H(f,B(102)),c),B(105)),d);Bo(b,O(f));L(b);}g=a.W;while(c<d){h=g+1|0;i=c+1|0;SH(a,g,M(b,c));g=h;c=i;}a.W=a.W+e|0;return a;}
function JY(){var a=this;G8.call(a);a.kR=0;a.lz=null;a.w7=null;}
function ABr(b,c,d){var e,f,g;e=b.data;f=new Xl;g=e.length;d=c+d|0;Ws(f,g);AKN();f.w7=AWt;f.kR=0;f.lz=b;f.W=c;f.dv=d;f.w_=0;f.m1=0;return f;}
function Xm(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.m1){e=new Jd;Z(e);L(e);}if(B6(a)<d){e=new H5;Z(e);L(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BB;j=new N;P(j);V(H(V(H(j,B(106)),h),B(98)),g);Bo(i,O(j));L(i);}if(d<0){e=new BB;i=new N;P(i);H(V(H(i,B(99)),d),B(100));Bo(e,O(i));L(e);}h=a.W;k=h+a.kR|0;l=0;while(l<d){b=a.lz.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.W=h+d|0;return a;}}b=b.data;e=new BB;d=b.length;i=new N;P(i);BG(V(H(V(H(i,B(101)),c),B(95)),d),41);Bo(e,O(i));L(e);}
function N8(a){a.W=0;a.dv=a.mj;a.hs=(-1);return a;}
function HM(){C.call(this);this.x_=null;}
var AWm=null;var AWl=null;var AWk=null;function He(){He=Bp(HM);AMd();}
function AEj(a){var b=new HM();AC$(b,a);return b;}
function AC$(a,b){He();a.x_=b;}
function AMd(){AWm=AEj(B(107));AWl=AEj(B(108));AWk=AEj(B(109));}
var Nl=G(Cv);
function AL2(a){}
function AKw(a,b,c){}
function CS(){var a=this;Cv.call(a);a.gq=null;a.t=null;}
function Fi(a,b){var c,d,e;Em(a,b);a.gq=Z5(0,0,64);c=new Yn;c.cb=new Be;c.d1=CJ(S(Eq,0));c.dc=new Be;c.on=new Be;c.yH=new B1;c.yG=new B1;c.cM=b.be;d=b.bS;c.i2=d;c.cD=UY(d);d=b.m.kl;e=new MM;e.nE=c;Y(d,e);d=b.m.jH;e=new MN;e.qW=c;Y(d,e);a.t=c;Y(b.m.b2,new SE);b=b.m.b2;c=a.t;BN(c);d=new SF;d.sp=c;Y(b,d);}
function E9(a){Fu(a.bc.be,a.gq);}
function G1(a,b,c){var d,e,f,g,h;a:{d=a.t;Ct(d.cb,b);e=d.bR;if(e!==c){d.bR=c;f=(Cp(d.d1)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].gx(e,c);h=h+1|0;}}}}
var QB=G(0);
var LN=G(0);
function AEx(a){a.ii(Kq());}
function LQ(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new H2;c=new I8;d=new Hf;ANk();JW(d,AWu);Ls(c,d,BJ(AWv),BJ(AWw),BJ(AWx),BJ(AWv),BJ(AWy),BJ(AWz),BJ(AWA),BJ(AWB),BJ(AWC),BJ(AWD));ABK();e=(AWE.gE()).data;f=e.length;g=S(IT,f);h=g.data;i=0;while(i<f){h[i]=e[i].kF;i=i+1|0;}j=AA4(R(B(110)),R(B(111)),R(B(112)),R(B(113)));k=new Ic;l=new HH;AKb();m=AWF;J4(l,m,AWG,AWH,AWI,AWJ,m);K_(k,l,AAU(),Zv(R(B(114)),R(B(115)),R(B(116))),AAU(),ZO(1,0.17499999701976776),AWK,AWL);LY(b,c,g,j,k,ADA(R(B(117)),R(B(118)),R(B(119)),R(B(120))));a.ii(b);}
function AD0(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new H2;c=new I8;d=new Hf;AB3();JW(d,AWM);Ls(c,d,BJ(AWN),BJ(AWO),BJ(AWP),BJ(AWN),BJ(AWQ),BJ(AWR),BJ(AWS),BJ(AWT),BJ(AWU),BJ(AWV));AAn();e=(AWW.gE()).data;f=e.length;g=S(IT,f);h=g.data;i=0;while(i<f){h[i]=e[i].le;i=i+1|0;}j=AA4(R(B(121)),R(B(122)),R(B(123)),R(B(124)));k=new Ic;l=new HH;AO9();m=AWX;J4(l,m,AWY,AWZ,AW0,AW1,m);K_(k,l,Zd(),Zv(R(B(125)),R(B(126)),CM(0)),Zd(),ZO(1,0.07500000298023224),AW2,AW3);LY(b,c,g,j,k,ADA(R(B(127)),R(B(128)),R(B(129)),R(B(130))));a.ii(b);}
var Li=G(0);
function Mk(){var a=this;CS.call(a);a.E=null;a.D=null;a.d5=null;a.hm=0;a.gg=null;a.i0=null;a.tK=null;}
function AS6(a){var b=new Mk();ABj(b,a);return b;}
function ABj(a,b){var c,d,e;Fi(a,b);c=new VH;c.cZ=new Be;c.eS=new Be;c.iF=new Be;c.iE=new Be;c.iZ=new Be;c.iY=new Be;a.i0=c;a.tK=SA();c=AN7(a.t);a.d5=c;a.E=AEa(a.t,c);a.D=AEa(a.t,a.d5);c=a.E;c.bO=1;d=new Rf;d.s9=a;e=new Rd;e.uG=a;QW(c,d,d);QW(a.D,e,e);c=a.E;d=new Re;d.oK=a;c.iU=d;d=a.D;e=new Rb;e.sn=a;d.iU=e;Xh(a.t,c);Y(b.m.bv,a.d5);Y(b.m.di,a.d5);Y(b.m.di,a);Y(b.m.bv,a);c=b.m.b2;d=new Rc;d.mT=a;Y(c,d);c=b.m.b2;d=new HR;e=new Q_;e.qu=a;Su(d,b,e);Y(c,d);Y(b.m.fE,a);Y(b.m.f6,a);b=b.m.ew;c=new Ra;c.tH=a;Y(b,c);LQ(a);}
function QH(a,b){if(a.E===b)a.hm=a.hm|1;if(a.D===b)a.hm=a.hm|2;if((a.hm&3)==3)ACH(a);}
function AKg(a,b,c){if(D1(a.t,a.E))return GH(a.E,b,c);if(!D1(a.t,a.D))return 0;return GH(a.D,b,c);}
function Zu(a){if(D1(a.t,a.E))return Od(a,a.E);if(!D1(a.t,a.D))return null;return Od(a,a.D);}
function Od(a,b){var c;c=new N6;c.qZ=b;return c;}
function WH(a,b,c){var d,e,f,g,h,i,j;d=a.gg;if(d!==null&&d.fZ!==null){e=b!==a.E?0:1;f=Fx(b);g=(GX(b)+f|0)/2|0;h=g-f|0;d=a.gg;d=d.fZ.data[GK(d,g,e)];i=g-(!e?d.hx:d.hz)|0;j=b.bp-W(f,b.O)|0;c.bp=J3(W(((!e?d.hz:d.hx)+i|0)-h|0,c.O)+j|0,IL(c));return;}}
function ACH(a){var b,c,d,e,f,g;Br(By(),B(131));b=a.E.e;c=a.D.e;d=EH(b.f);e=EH(c.f);f=AEB(b.f);g=AEB(c.f);b=a.bc.bS;c=new Rt;c.un=a;CQ(b,c,B(132),I(C,[d,f,e,g]));}
function AIV(a,b){var c,d;c=K8(a.E,b);d=K8(a.D,b);return !c&&!d?0:1;}
function AQ_(a){E9(a);Ml(a.E);Ml(a.D);ABV(a.i0,a.gg,a.t,a.E,a.D,a.tK,a.d5.X);WB(a.d5);}
function APU(a){return Mm(0);}
function AJW(a){Yp(a.E);Yp(a.D);}
function APg(a){W6(a.E);W6(a.D);}
function AP2(a,b){Yq(a.E,b);Yq(a.D,b);}
function AOT(a,b,c){G1(a,b,c);Zh(a,b,c);}
function Zh(a,b,c){var d,e,f,g,h,i;d=new Be;e=B8(20.0,c);f=new Be;g=b.b/2|0;h=e/2|0;PF(f,g-h|0,b.a);LO(a.E,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;LO(a.D,d,f,c);U(a.i0.cZ,f.b,d.a);U(a.i0.eS,d.b-f.b|0,f.a);}
function AGM(a,b){BN(b);PW(a.d5,b);Ll(a.E,b);Ll(a.D,b);}
function ABJ(a,b){if(b.bk!=121)return 0;return 1;}
function ACQ(a,b){var c,d,e;if(D1(a.t,a.E)){c=a.d5;d=a.E;e=new MX;e.qI=a;KG(c,b,d,a,a,e);}if(D1(a.t,a.D)){c=a.d5;d=a.D;e=new MY;e.ng=a;KG(c,b,d,a,a,e);}return 1;}
function AMa(a,b){var c,d;c=DJ(a.E,b.h)&&PE(a.E,b)?1:0;d=DJ(a.D,b.h)&&PE(a.D,b)?1:0;return !c&&!d?0:1;}
function AL6(a,b,c,d){var e,f;e=DJ(a.E,b.h)&&Q4(a.E,b,c,d)?1:0;f=DJ(a.D,b.h)&&Q4(a.D,b,c,d)?1:0;return !e&&!f?0:1;}
function AGi(a,b,c){var d,e,f,g,h,i,j,k;d=DJ(a.E,b.h);e=DJ(a.D,b.h);f=a.t;g=f.ee;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.D?0:1;if(d&&!(!h&&!k))FS(f,i);if(e&&!(!h&&!j))FS(a.t,a.D);if(d){i=Vk(a.E,b,c);if(i!==null)return i;}return !e?null:Vk(a.D,b,c);}
function AJj(a,b,c){var d,e,f,g;d=DJ(a.E,b.h);e=DJ(a.D,b.h);f=d&&Vd(a.E,b,c)?1:0;g=e&&Vd(a.D,b,c)?1:0;return !f&&!g?0:1;}
function AOf(a,b,c,d){var e,f,g,h;e=DJ(a.E,b.h);f=DJ(a.D,b.h);g=e&&JO(a.E,c,d)?1:0;h=f&&JO(a.D,c,d)?1:0;return !g&&!h?0:1;}
function ALO(a){return Zu(a);}
var Wg=G(Mk);
function AH_(a){return Mm(1);}
function Wr(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new XT;d=d.then(Bj(e,"f"));f=new XR;f.td=b;f.te=c;g=new XS;d.then(Bj(f,"f"),Bj(g,"f"));}
var AEF=G();
function AQe(b){var c,d;if(J(b)>0){c=new N;P(c);H(H(c,B(133)),b);$rt_globals.console.info($rt_ustr(O(c)));}a:{d=(-1);switch(Is(b)){case -1570047148:if(!Bn(b,B(134)))break a;d=16;break a;case -1519338717:if(!Bn(b,B(135)))break a;d=2;break a;case -1509980539:if(!Bn(b,B(136)))break a;d=12;break a;case -1073555521:if(!Bn(b,B(137)))break a;d=13;break a;case -1045861099:if(!Bn(b,B(138)))break a;d=17;break a;case -1045861098:if(!Bn(b,B(139)))break a;d=18;break a;case -811765794:if(!Bn(b,B(140)))break a;d=5;break a;case -785237654:if
(!Bn(b,B(141)))break a;d=10;break a;case -631889171:if(!Bn(b,B(142)))break a;d=8;break a;case -439438829:if(!Bn(b,B(143)))break a;d=19;break a;case 2129957:if(!Bn(b,B(144)))break a;d=1;break a;case 3343967:if(!Bn(b,B(145)))break a;d=9;break a;case 3556498:if(!Bn(b,B(146)))break a;d=4;break a;case 485517998:if(!Bn(b,B(147)))break a;d=6;break a;case 544901384:if(!Bn(b,B(148)))break a;d=3;break a;case 1030621992:if(!Bn(b,B(149)))break a;d=15;break a;case 1465713255:if(!Bn(b,B(150)))break a;d=7;break a;case 1554501643:if
(!Bn(b,B(151)))break a;d=14;break a;case 1609169232:if(!Bn(b,B(152)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new TB;break b;case 3:case 4:b=new TA;break b;case 5:b=new Tz;break b;case 6:b=new Ty;break b;case 7:b=new Tx;break b;case 8:case 9:b=new Tw;break b;case 10:b=new Tv;break b;case 11:b=new Tu;break b;case 12:b=new Tt;break b;case 13:b=new Q5;break b;case 14:b=new Q1;break b;case 15:b=new Q3;break b;case 16:b=new QZ;break b;case 17:b=new Q0;break b;case 18:b=new QX;break b;case 19:b
=new QY;break b;default:b=new QV;break b;}b=new TC;}return b;}
var ABD=G();
var Ka=G(Ld);
function ABk(){var a=this;Ka.call(a);a.mm=0;a.l7=0;a.hh=null;}
function AOk(a,b,c,d,e,f){var g=new ABk();ASC(g,a,b,c,d,e,f);return g;}
function ASC(a,b,c,d,e,f,g){Ws(a,c);a.W=e;a.dv=f;a.l7=b;a.mm=g;a.hh=d;}
function SH(a,b,c){a.hh.data[b+a.l7|0]=c;}
function K1(){var a=this;C.call(a);a.v3=null;a.pX=null;a.xt=0.0;a.mw=0.0;a.lK=null;a.kY=null;a.iB=0;}
function LT(){var a=this;C.call(a);a.gu=0;a.h$=0;}
var AWo=null;var AWn=null;function Zr(a,b){var c=new LT();Z0(c,a,b);return c;}
function Z0(a,b,c){a.gu=b;a.h$=c;}
function Ip(a){return a.gu?0:1;}
function Hb(a){return a.gu!=1?0:1;}
function KP(a){return !QN(a)&&!L9(a)?0:1;}
function QN(a){return a.gu!=2?0:1;}
function L9(a){return a.gu!=3?0:1;}
function Ki(a){var b;if(KP(a))return a.h$;b=new Gl;Z(b);L(b);}
function D4(b){return Zr(2,b);}
function VL(a){var b,c;switch(a.gu){case 0:b=new Qh;Z(b);L(b);case 1:b=new Xy;Z(b);L(b);case 2:b=new VD;c=a.h$;Z(b);b.ys=c;L(b);case 3:b=new P8;c=a.h$;Z(b);b.yk=c;L(b);default:}}
function AAs(){AWo=Zr(0,0);AWn=Zr(1,0);}
var Zf=G();
var Iz=G(0);
var Nv=G();
function AI3(a,b){return b.arrayBuffer();}
var Nu=G();
function ANq(a,b){var c,d;c=new Ph;d=new Pf;return $rt_globals.WebAssembly.instantiate(b,AK_(Bj(c,"f"),Bj(d,"f")));}
var Nt=G();
function AOc(a,b){AGI(b);}
var Ns=G();
function AHp(a,b){AEm(b);}
function Yb(){C.call(this);this.uC=null;}
function AM$(a,b){Kg(a.uC.E,b);}
function Yd(){C.call(this);this.oA=null;}
function ANM(a,b){Kg(a.oA.D,b);}
var TC=G();
function ANI(a,b){return AS6(b);}
var TB=G();
function AGp(a,b){return AU4(b);}
var TA=G();
function AKa(a,b){return AS_(b);}
var Tz=G();
function AJ9(a,b){var c,d,e;c=new Wy;Fi(c,b);d=new Vh;d.l0=new Be;d.kj=new Be;c.rL=d;c.dD=Zn();c.cK=Zn();c.ed=M2(c.t);Y(c.t.d1,c);d=b.m.b2;e=new TE;e.tO=c;Y(d,e);Y(b.m.bv,c);b=b.m.ew;d=new TH;d.so=c;Y(b,d);S7(c.cK);c.lD=ES(B(153),25.0);If(c.ed,F0(),c.lD);BE(c.gq,CM(43));b=F0();Ii(c.dD,b);Ii(c.cK,b);b=c.dD;b.jA=new TG;d=c.cK;d.jA=new TD;d.jV=new Xu;d.to=new Xv;K0(b,(NN(0)).i5);K0(c.cK,(NN(0)).i5);return c;}
var Ty=G();
function AKP(a,b){var c,d,e;c=new XO;Fi(c,b);c.kI=ES(B(154),15.0);d=AEI();c.ev=d;Y(c.t.d1,d);Y(c.t.d1,c);BE(c.gq,CM(43));d=M2(c.t);c.hn=d;If(d,F0(),ES(B(153),25.0));d=b.m.b2;e=new ON;e.v0=c;Y(d,e);d=b.m.ew;e=new OO;e.qB=c;Y(d,e);Y(b.m.bv,Zl(c.hn));Y(b.m.bv,c.ev);b=b.m.di;d=c.ev;BN(d);e=new OP;e.t4=d;Y(b,e);return c;}
var Tx=G();
function AGx(a,b){var c,d,e;c=new Yt;Fi(c,b);c.fN=CC();c.fg=CC();c.oZ=R(B(155));c.iw=AQr();c.f8=0;d=c.t.d1;e=new Up;e.mO=c;Y(d,e);Y(b.m.bv,c);d=b.m.b2;e=new Uq;e.qv=c;Y(d,e);b=Hq(b.be,B(153),35);c.jz=b;c.ib=AEt(E6(b));BE(c.gq,R(B(156)));return c;}
var Tw=G();
function AIb(a,b){var c,d,e,f;c=new Pp;Em(c,b);c.f2=AB_();c.d9=0;c.sh=500;c.uM=HI(0,0,0,255,new B1);c.l2=20;c.u2=20;c.oQ=Kq();d=b.m.bv;e=new WO;e.iX=c;f=new Ys;f.r2=e;e.rp=f;Y(d,e);d=b.m.di;e=new Ta;e.n_=c;Y(d,e);c.d$=b.be;c.ti=UY(b.bS);T4(c.f2,Hq(c.d$,B(153),c.u2),c.l2,c.d$);c.gW=Hu();return c;}
var Tv=G();
function AN1(a,b){var c,d;c=new Rh;Gr(c,b);b=b.m.b2;d=new Qi;d.uP=c;Y(b,d);return c;}
var Tu=G();
function ARL(a,b){return AUE(b);}
var Tt=G();
function ASA(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Xe;Gr(c,b);c.dT=Fg(0,0,300,300);c.e4=S2(0,0,3,3);d=b.be;b=b.m.bv;e=new Ua;e.lb=c;Y(b,e);b=AAG(d);c.pT=b;Go(c.dT,b);G$(c.dT);b=c.dT.bw;FN();BE(b,AW4);BE(c.dT.bm,CN(204,120,50));AMA();e=AW5;f=DZ((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CW(d);switch(e.eP){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Es;Z(b);L(b);}b:
{Nn(m,5,5,h);b=m.d7.dt;switch(e.eP){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Es;Z(b);L(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.kw=m;U(c.e4.s,BM(m),C9(c.kw));BE(c.e4.bw,c.lM);return c;}
var Q5=G();
function ALG(a,b){var c,d,e;c=new SB;Gr(c,b);c.go=Fg(0,0,300,300);c.j_=new Be;c.iy=new Be;c.hG=new Be;d=b.be;b=b.m.bv;e=new We;e.jD=c;Y(b,e);b=AAG(d);c.rX=b;Go(c.go,b);G$(c.go);b=c.go.bw;FN();BE(b,AW4);BE(c.go.bm,CN(204,120,50));return c;}
var Q1=G();
function AFg(a,b){var c,d,e,f;c=new OX;Em(c,b);c.w0=20;c.yF=11;c.wF=220;c.jl=new Be;c.xl=5000;c.gJ=1;c.fA=I(Hf,[CM(0),CM(255)]);c.eh=b.be;d=b.m.bv;e=new Uz;e.jv=c;f=new PR;f.nn=e;e.p$=f;Y(d,e);b=b.m.di;d=new N5;d.t8=c;Y(b,d);b=CL(c.eh,200,220);c.j4=b;F3(b,B(153),20.0);b=CL(c.eh,200,20);c.fo=b;F3(b,B(153),20.0);c.hR=Hu();return c;}
var Q3=G();
function AIZ(a,b){var c,d,e;c=new IJ;Gr(c,b);Y(b.m.bv,c);d=b.m.b2;e=new SO;e.r6=c;Y(d,e);Y(b.m.fE,new SN);d=b.m.fE;e=new SL;e.pG=c;Y(d,e);Y(b.m.f6,new SK);d=b.m.f6;e=new SM;e.nt=c;Y(d,e);b=!X0(b.bS)?B(157):B(158);d=new N;P(d);H(H(d,B(159)),b);$rt_globals.console.info($rt_ustr(O(d)));return c;}
var QZ=G();
function ALX(a,b){var c,d,e,f,g,h,i,j;c=new Ql;Em(c,b);c.nC=CM(20);c.fi=Fg(0,0,300,300);d=b.m.b2;e=new Sh;e.ya=c;Y(d,e);b=b.be;d=Hq(b,B(10),88);CA(b.cE,d);f=Er(b.cE,B(160));g=Er(b.cE,B(161));if(f>g)g=f;h=Dg(g);i=Kc(d,1.1799999475479126);j=By();e=new N;P(e);V(H(V(H(e,B(162)),h),B(163)),i);Br(j,O(e));e=CL(b,h,i*2|0);c.ic=e;CA(e,d);Ch(c.ic,B(160),0.0,d.dA);Ch(c.ic,B(161),0.0,i+d.dA);b=CW(b);c.lE=b;CO(b,c.ic);Go(c.fi,c.lE);G$(c.fi);b=c.fi.bw;FN();BE(b,AW4);BE(c.fi.bm,AW6);return c;}
var Q0=G();
function APR(a,b){var c;c=new O8;Xg(c,b);Gj(c.b$,0,0,300,300);U(c.cX,300,300);return c;}
var QX=G();
function AE8(a,b){var c;c=new O9;Xg(c,b);c.fn=new Be;c.fh=new Be;U(c.dH,150,140);U(c.cX,500,100);U(c.eA,150,200);U(c.d6,500,250);return c;}
var QY=G();
function APD(a,b){var c,d,e,f;c=new WP;Fi(c,b);c.th=ES(B(154),20.0);d=AEI();c.ea=d;Y(c.t.d1,d);Y(c.t.d1,c);BE(c.gq,CM(43));d=M2(c.t);c.gP=d;If(d,F0(),ES(B(153),25.0));d=b.m.b2;e=new QI;e.x8=c;Y(d,e);d=b.m.ew;e=new QJ;e.qE=c;Y(d,e);Y(b.m.bv,Zl(c.gP));Y(b.m.bv,c.ea);d=b.m.bv;e=c.t.cD;f=new RN;f.mE=e;Y(d,f);b=b.m.di;d=c.ea;BN(d);e=new QK;e.r8=d;Y(b,e);return c;}
var QV=G();
function ALK(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new RB;YD(c,b);d=c.cL;e=new IM;f=AJQ(B(164));g=S(Bx,8);h=J(B(165));i=0;j=0;k=h+1|0;while(true){l=GL(B(165),10,j);m=l>=0?Cb(B(165),j,l):Dk(B(165),j);n=i+1|0;g=ADq(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}QL(e,Pn(g,n),B(166),f);Kg(d,e);return c;}
function Hd(){var a=this;C.call(a);a.bI=0;a.ck=0;a.c0=0;a.i4=0;}
function AW7(a,b,c,d){var e=new Hd();UJ(e,a,b,c,d);return e;}
function UJ(a,b,c,d,e){a.bI=d;a.ck=b;a.c0=c;a.i4=e;}
function O7(){var a=this;Hd.call(a);a.dO=null;a.bk=0;a.hB=0;a.r5=0;a.j7=0;}
var ADG=G();
function WF(b,c){return (b+(c/2|0)|0)/c|0;}
function PY(b,c,d){if(b<(2147483647/c|0))return WF(W(b,c),d);return 0.5+c*b/d|0;}
function IQ(b,c){return ((b+c|0)-1|0)/c|0;}
function Hm(b){return b+0.5|0;}
function Dg(b){return b+0.5|0;}
function Ew(b,c,d){return Bc(b,Ba(c,d));}
function MB(){var a=this;Hd.call(a);a.h=null;a.vT=null;}
var UC=G(0);
function NQ(){var a=this;C.call(a);a.uw=null;a.ux=null;}
function ALz(a,b){var c,d;c=a.uw;d=a.ux;$rt_globals.console.info("paste plain string "+b);c.l(FE(b));Dh(d);}
function Vi(){C.call(this);this.u7=null;}
function WE(a,b){a.u7.clipboardData.setData("text/plain",$rt_ustr(b));}
function Xl(){var a=this;JY.call(a);a.w_=0;a.m1=0;}
function VH(){var a=this;C.call(a);a.cZ=null;a.eS=null;a.iF=null;a.iE=null;a.iZ=null;a.iY=null;}
function ABV(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=c.cM;i=a.cZ;Bv(h,i.b,i.a,a.eS,g.b9.eq);if(b!==null&&b.fZ!==null){j=Cx(c,2.0);k=GK(b,Fx(d),1);l=GK(b,GX(d),1);m=GK(b,Fx(e),0);n=GK(b,GX(e),0);o=Ba(k,m);p=Bc(l,n);n=BD(o,p);if(n<=0)Cs(h,1);while(o<=p){q=b.fZ.data[o];if(q.jZ){k=d.O;r=W(k,q.hz)-d.bp|0;s=r+W(q.lu,k)|0;k=e.O;t=W(k,q.hx)-e.bp|0;u=t+W(q.k7,k)|0;U(a.iF,a.cZ.b,r);U(a.iZ,a.cZ.b,s);U(a.iE,a.cZ.b+a.eS.b|0,t);U(a.iY,a.cZ.b+a.eS.b|0,u);v=Bc(Ba(r,t),a.cZ.a);w=Ba(Bc(s,u),a.cZ.a+a.eS.a|0);Gj(f,
a.cZ.b,v,a.eS.b,w-v|0);BE(f.bw,g.hc.hq);BE(f.bm,HG(g.ds,g,q.jZ));if(r==s){x=c.dc;U(x,a.cZ.b-d.ba.b|0,j);if(t>=r){i=a.iZ;U(i,i.b,i.a+j|0);k=r;}else{k=r-j|0;i=a.iF;U(i,i.b,i.a-j|0);}Bv(h,d.ba.b,k,x,f.bm);}if(t==u){i=c.dc;U(i,e.cv.b,j);if(r>=t){x=a.iY;U(x,x.b,x.a+j|0);}else{t=t-j|0;x=a.iE;U(x,x.b,x.a-j|0);}Bv(h,a.cZ.b+a.eS.b|0,t,i,f.bm);}i=f.z;Yz(h,i.b,i.a,f.s,a.iF,a.iE,a.iZ,a.iY,f.bm);}o=o+1|0;}if(n<=0)Cs(h,0);return;}}
function IO(){var a=this;C.call(a);a.z=null;a.s=null;a.bm=null;a.bw=null;}
function SA(){var a=new IO();Sw(a);return a;}
function S2(a,b,c,d){var e=new IO();AIw(e,a,b,c,d);return e;}
function Sw(a){a.z=new Be;a.s=new Be;a.bm=new B1;a.bw=new B1;}
function AIw(a,b,c,d,e){a.z=new Be;a.s=new Be;a.bm=new B1;a.bw=new B1;Gj(a,b,c,d,e);}
function Gj(a,b,c,d,e){U(a.z,b,c);U(a.s,d,e);}
function To(a){U(a.s,0,0);}
function Mb(a){var b;b=a.s;return W(b.b,b.a)?0:1;}
function Et(a,b){return F8(b,a.z,a.s);}
function UP(a,b,c,d){var e;e=a.z;Bv(b,e.b+c|0,e.a+d|0,a.s,a.bm);}
function Uu(a,b,c,d,e,f){var g,h,i,j;g=a.z;d=g.b+d|0;e=g.a+e|0;g=a.s;h=a.bw;i=a.bm;Iq(b,b.hA);Jb(b.hA,b.bq,d,e,g,b.dk);UF(b.hA,b.bq,c);g=b.hA;j=b.bq;GJ(j,g.u_,h);GJ(j,g.u9,i);c=g.qn;j.uniform2f(c,f,0.0);Il(b);}
function ACY(){var a=this;C.call(a);a.d8=null;a.dV=null;a.dq=null;a.cc=null;a.X=null;}
function AN7(a){var b=new ACY();AK6(b,a);return b;}
function AK6(a,b){a.dV=AEI();a.d8=b;a.cc=M2(b);}
function PW(a,b){var c;a.X=b;c=a.dq;if(c!==null)c.eo=b.V;If(a.cc,b.V,b.qL);}
function WB(a){Jh(a.dV,a.d8.cM);IA(a.cc);}
function AO0(a,b){return !ZE(a.dV,b)&&!KA(a.cc,b)?0:1;}
function ASF(a,b,c,d){return !ABB(a.dV,b,c,d)&&!Jx(a.cc,b,c,d)?0:1;}
function AGP(a,b,c){var d;d=Js(a.cc,b,c);if(d!==null)return d;return YB(a.dV,b,c);}
function ANo(a,b,c){return !AEH(a.dV,b,c)&&!DM(a.cc)?0:1;}
function VB(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=AN9();i=c.i;j=0;while(j<i){if(f===null){k=(Bs(c,j)).bz;l=Sa(EM(B3(g.f,k)));m=V2(g.f5);}else{n=f.data;k=n[j].kf.kV;l=!CE(g.f5,n[j].ij)?B(31):Sa(EM(B3(g.f,k)));m=V2(n[j].ij);}if(J(l)>153){o=Cb(l,0,150);n=new N;P(n);H(H(n,o),B(167));l=O(n);}if(J(m)>153){o=Cb(m,0,150);n=new N;P(n);H(H(n,o),B(167));m=O(n);}p=C7(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bs(c,j);}if(f!==null){q=new UM;q.nx=d;q.nw=o;}else{q=new UO;q.vL=d;q.vG=n;}Nh(h,
m,p,l,q);j=j+1|0;}r=Q$(h);if(a.dq!==null)Ut(a);c=new Rg;n=a.d8;o=new SQ;o.oS=a;o.oR=d;AAI(c,n,o);Wj(c,r);d=a.X;X$(c,d.V,d.tm);a.dq=AB6(a.d8);d=ZL(c,a.d8);n=a.X.V;QR(d,n.lZ,n.kn);LW(a.dq,d);d=a.dq;n=new N;P(n);H(H(n,B(168)),e);IR(d,O(n),a.X.pI,4.0);d=a.dq;d.eo=a.X.V;I7(a.dV,d);d=a.dq;s=(d.U.q.a+Cx(d.bt,2.0)|0)+Cx(a.d8,2.0)|0;i=(c.dS+c.dU|0)+c.f3|0;t=Cx(c.cx,5.0);e=BZ(Ew(t,b.b,c.cx.cb.b-i|0),Ew(s,b.a,c.cx.cb.a-c.cH.a|0));TN(c);Z1(c);s=(c.dS+c.dU|0)+c.f3|0;b=c.cx;i=(b.cb.b-e.b|0)-Cx(b,5.0)|0;b=c.cx;t=(b.cb.a-e.a
|0)-Cx(b,5.0)|0;d=BZ(Ba(s,i),Ba(c.cH.a,t));Fn(a.dq,e,d);FS(a.d8,c);}
function Ut(a){Ke(a.dV,a.dq);J6(a.dq);a.dq=null;}
function ND(a,b){var c;c=new SG;c.tV=a;c.t0=b;return c;}
function KG(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DM(a.cc)){g=a.cc;h=b.h;b=new Tj;b.Y=a;b.bN=c;b.oF=f;b.h2=e;b.iQ=d;i=P7();e=b.bN.e;d=Do(e);e=G6(e);f=b.bN.ez;if(V0(f,d,e)!==null){j=b.Y.X.V.bj;k=new RR;k.oc=b;k.ob=h;D9(i,B(169),j,k);}if(KY(f,d,e)!==null){j=b.Y.X.V.bj;k=new RQ;k.po=b;k.pq=h;D9(i,B(170),j,k);}if(NA(f,d,e)!==null){e=b.Y.X.V.bj;f=new RO;f.nv=b;f.ny=h;D9(i,B(171),e,f);}e=b.Y.X.V.bj;f=new RP;f.vs=b;f.vt=h;D9(i,B(172),e,f);if(!b.bN.ec){e=b.Y.X.V.bj;f=new PN;f.tZ=b;D9(i,B(173),e,f);}e=b.Y.X.V.bj;f
=new PL;f.qw=b;D9(i,B(174),e,f);if(!b.bN.ec&&X0(IP(b))){e=b.Y.X.V.bj;f=new PO;f.sV=b;D9(i,B(175),e,f);}l=b.Y.X.V.bj;d=P7();m=b.Y.X.V.bj;n=S(C$,3);o=n.data;k=b.iQ;BN(k);e=new S$;e.oh=k;o[0]=D$(B(176),m,e);k=b.Y.X.V.bj;p=b.iQ;BN(p);e=new S_;e.rR=p;o[1]=D$(B(177),k,e);e=b.Y.X.V.bj;j=b.iQ;BN(j);k=new S8;k.vB=j;o[2]=D$(B(178),e,k);JK(d,B(179),m,FU(n),AW8);f=b.Y.X.V.bj;n=S(C$,2);o=n.data;k=b.h2;BN(k);j=new Oo;j.se=k;o[0]=D$(B(180),f,j);j=b.Y.X.V.bj;k=b.h2;BN(k);p=new Om;p.q2=k;o[1]=D$(B(181),j,p);GO(d,B(182),f,FU(n));f
=b.Y.X.V.bj;j=new Vy;j.rD=b;JK(d,B(183),f,j,AW8);GO(i,B(184),l,Hv(d));k=b.Y.X.V.bj;d=P7();GO(d,B(185),b.Y.X.V.bj,AE0(b));f=b.Y.X.V.bj;m=new Ww;m.s_=b;D9(d,B(186),f,m);GO(i,B(187),k,Hv(d));Gf(g,h,Hv(i),ND(a,c));}}
function ALQ(a,b,c,d){return Lh(a.dV,b,c,d);}
function Y9(b){var c;c=new Wl;c.ud=b;return c;}
var HY=G(0);
function AHP(a){}
function ASM(a){}
function AAZ(){var a=this;C.call(a);a.ba=null;a.cv=null;a.cs=null;a.S=null;a.iI=null;a.rO=0;a.lQ=null;a.cP=null;a.w=0;a.y=0;a.he=0;a.k9=0;a.f_=0;a.jh=null;a.eX=null;a.cz=null;a.O=0;a.e=null;a.en=null;a.ez=null;a.r=null;a.fI=null;a.dI=null;a.mp=null;a.gz=null;a.uf=0;a.sl=0;a.cJ=0;a.cl=0;a.cn=0;a.fb=null;a.eu=null;a.er=null;a.bp=0;a.db=0;a.hj=0;a.id=0;a.h3=0;a.wl=0;a.vW=0;a.jB=0;a.i1=0;a.dJ=0;a.cW=null;a.hZ=0;a.hY=0;a.eW=null;a.ec=0;a.bO=0;a.iu=null;a.ih=null;a.v8=null;a.g2=null;a.n2=null;a.vD=null;a.iU=null;a.k3
=0;a.rK=null;a.eZ=EX;a.tL=null;a.t9=null;}
function AEa(a,b){var c=new AAZ();AKy(c,a,b);return c;}
function AKy(a,b,c){var d,e,f,g;a.ba=new Be;a.cv=new Be;a.rO=0;a.lQ=S(Bi,10);a.cP=ANl();a.f_=16;a.jh=B(153);a.cz=S(Lc,4);d=new IM;e=new Kj;e.ek=KW();e.eI=KW();e.gt=CC();e.C=M3(B(31));e.gS=0;e.cC=0;e.da=Oh(e);d.f=e;d.jg=B(188);d.f5=null;a.e=d;f=new Wi;f.np=CJ(S(Ms,0));f.s5=CJ(S(Ms,0));f.tt=CJ(S(MQ,0));f.oT=CJ(S(Qm,0));f.mN=CJ(S(G3,0));f.rS=CJ(S(RI,0));a.ez=f;a.r=ANR();e=new Nz;e.eT=S(Ju,16);e.eU=0;e.dg=(-1);a.fI=e;a.gz=S(EW,0);a.fb=BZ(1,0);a.eu=Hu();a.er=Hu();a.bp=0;a.db=0;a.hj=0;a.h3=1;a.jB=1;a.i1=1;a.dJ=3;a.cW
=AB_();a.eW=B(189);a.ec=0;a.bO=0;a.iu=null;a.ih=CC();e=EY();BN(e);f=new U8;f.yt=e;a.g2=f;a.rK=new B1;e=new U7;e.rz=a;a.tL=e;e=new U3;e.nX=a;a.t9=e;a.cs=b;a.S=b.cM;a.iI=c;g=a.lQ.data;b=new U2;b.tJ=a;g[0]=b;b=new U5;b.rY=a;g[1]=b;b=new U4;b.og=a;g[2]=b;b=new Vu;b.t7=a;g[3]=b;b=new Vt;b.qT=a;g[4]=b;b=new Vv;b.nF=a;g[5]=b;AFG();a.id=AW9===AW$?0:1;}
function LO(a,b,c,d){Ct(a.ba,b);Ct(a.cv,c);Se(a,b,c,d);}
function QW(a,b,c){a.n2=b;a.vD=c;}
function Se(a,b,c,d){var e;a.cJ=B8(80.0,d);a.cl=B8(1.0,d);a.cn=B8(10.0,d);if(!a.bO)Ct(a.cs.dc,a.ba);else U(a.cs.dc,(b.b+c.b|0)-Lr(a)|0,b.a);VM(a.cW,a.cs.dc,Lr(a),c.a,d);b=a.cP;e=B8(2.0,d);b.dW.s.b=e;Um(a,a.jh,a.f_);V4(a);}
function AII(a){a.k9=1;LP(a);}
function AHl(a){a.k9=0;}
function LP(a){SJ(a.cP,JB(Cl(a)));}
function Ll(a,b){var c,d;a.dI=b;c=a.cP;d=b.b9.tB;BE(c.dW.bm,d);c=a.eu;d=b.b9;Gk(c,d.mf,d.lT);c=a.er;b=b.b9;Gk(c,b.mf,b.lT);}
function Yp(a){Lf(a,a.eX.mh,a.f_+1|0);}
function W6(a){var b;b=a.f_;if(b<=7)return;Lf(a,a.eX.mh,b-1|0);}
function Yq(a,b){Lf(a,b,a.f_);}
function Lf(a,b,c){if(a.cs.bR!==0.0){Um(a,b,c);F5(Cl(a));}a.f_=c;a.jh=b;}
function Um(a,b,c){var d,e,f,g,h,i;d=B8(c,a.cs.bR);e=a.eX;f=e!==null?e.pb:0;if(!(d==f&&CE(b,a.jh))){N7(a.cW);g=a.gz.data;c=g.length;f=0;while(f<c){QE(g[f]);f=f+1|0;}g=a.e.f.C.data;c=g.length;f=0;while(f<c){Ei(g[f]);f=f+1|0;}g=a.cz.data;c=Hp(0,0);e=a.S;h=d;g[c]=GW(e,b,h,400,0);a.cz.data[Hp(0,1)]=GW(a.S,b,h,400,2);a.cz.data[Hp(1,0)]=GW(a.S,b,h,700,0);a.cz.data[Hp(1,1)]=GW(a.S,b,h,700,2);e=a.cz.data[Hp(0,0)];a.eX=e;c=E6(e);a.O=Dg(c*1.25);a.cP.dW.s.a=E6(a.eX);a.mp=CI(a.mp,CL(a.S,1024,a.O));f=a.O;i=S1(a.cP);e=new N;P(e);b
=H(H(e,B(190)),b);BG(b,32);V(H(V(H(V(H(V(b,d),B(191)),c),B(163)),f),B(192)),i);$rt_globals.console.info($rt_ustr(O(e)));if(AW_){c=Lj(a.eX,a.O);b=new N;P(b);V(H(b,B(193)),c);$rt_globals.console.info($rt_ustr(O(b)));}a.he=G7(Ft(a),a.y,a.S.cE,a.cz);GY(a);V4(a);}}
function Vl(a){return W(Cy(a.e.f)+5|0,a.O);}
function IL(a){return Bc(Vl(a)-a.cv.a|0,0);}
function QT(a){return Bc(a.hj-Df(a)|0,0);}
function Df(a){var b;b=!a.bO?0:C3(a)+a.cn|0;return Bc(1,(a.cv.b-a.cJ|0)-b|0);}
function Lr(a){return a.bO?a.cJ:a.cJ-a.cn|0;}
function DL(a){return a.cv.a;}
function K8(a,b){var c,d,e;c=a.e.f;d=c.gS;e=c.cC;d=d!=e&&b-c.pO>0.03125?1:0;if(d&&a.k3!=e){a.k3=e;S4(a);}d=J3((a.bp+a.wl|0)-a.vW|0,IL(a));e=a.bp==d?0:1;if(e)Fa(a,d);return !Tk(a.cP,b)&&!e&&!a.rO?0:1;}
function Fa(a,b){var c,d;c=J3(b,IL(a));if(c!=a.bp){a.bp=c;d=a.vD;if(d!==null)d.h8(c);}}
function Ir(a,b){var c,d;c=J3(b,QT(a));if(c!=a.db){a.db=c;d=a.n2;if(d!==null)d.h8(c);}}
function Ml(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=IQ(a.cv.a,a.O)+7|0;c=a.gz;if(c.data.length<b)a.gz=AAJ(b,c,a.uf,a.sl,a.e.f);Cs(a.S,0);R4(a.S,a.ba,a.cv);d=(a.O-S1(a.cP)|0)/2|0;e=(a.he-(Qv(a.cP)/2|0)|0)-a.db|0;f=!a.bO?a.cJ:(a.cl+a.cn|0)+C3(a)|0;P4(a.cP,f+e|0,(d+W(a.w,a.O)|0)-a.bp|0);g=Cy(a.e.f);h=Fx(a);i=GX(a);a.uf=h;a.sl=i;j=a.cs.dc;U(j,Df(a),a.O);k=!a.bO?a.ba.b+a.cJ|0:((a.ba.b+a.cl|0)+a.cn|0)+C3(a)|0;l=h;while(l<=i&&l<g){m=B3(a.e.f,l);n=Rp(a,l);AB2(n,m,a.mp,a.cz,a.S,a.O,Df(a),a.db);o=n.bY;a.hj
=Bc(a.hj,E4(m)+(40.0*a.cs.bR|0)|0);p=W(a.O,l)-a.bp|0;c=a.en;q=c===null?null:c.data[l];b=a.ba.a+p|0;m=a.S;r=a.rK;s=!a.id?0.0:0.5;d=Df(a);f=a.O;p=a.db;t=a.dI;u=ADf(a.r,l);if(u!==null){if(u.a==(-1))u.a=o.T;u.b=G7(o,u.b,a.S.cE,a.cz);u.a=G7(o,u.a,a.S.cE,a.cz);}ADh(n,b,k,m,r,j,s,d,f,p,t,u,a.iu,a.ih,a.w!=l?0:1,a.en===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.jB){n=Rp(a,l);p=W(a.O,l)-a.bp|0;v=Z_(a.r,l);m=a.dI;q=m.b9;r=q.oB;w=a.w==l&&a.en===null?1:0;a:{if(v)r=q.k0;else{c=a.en;if(c!==null){c=c.data;if(l<c.length&&c[l]
!==null){r=HG(m.ds,m,c[l].fY);break a;}}if(w)r=q.jd;}}ACv(n,a.S,k,a.ba.a+p|0,a.O,j,a.db,Df(a),r);l=l+1|0;}if(a.h3){x=Ba(i+1|0,g);AB7(a,W(a.O,x)-a.bp|0);}Z7(a);ABd(a,h,i);if(a.i1)AEz(a,h,i,g);if(a.k9&&e>=(( -Qv(a.cP)|0)/2|0)){n=a.cP;m=a.cv;if(Zz(n.dW.z,0,0,m))Vq(a.cP,a.S,a.ba);}ACJ(a);ADs(a);G2(a.S);}
function AEz(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.en;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dI;h=HG(h.ds,h,g.fY);}else h=e!==null?a.dI.b9.eq:a.dI.b9.jd;if(!(a.w!=b&&g===null)){a.fb.b=!a.bO?(a.cn-a.cl|0)-a.dJ|0:((a.cn+C3(a)|0)+a.cl|0)-a.dJ|0;i=a.fb;j=a.O;i.a=j;k=a.bO?0:(a.cJ-a.cn|0)+a.cl|0;j=W(j,b)-a.bp|0;g=a.S;l=a.ba;Bv(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function ABd(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cv.a;e=Ba(d,W(Cy(a.e.f),a.O)-a.bp|0);f=a.cW;g=a.bp;h=a.en===null?a.w:(-1);i=a.S;j=a.dI;R4(i,f.fa,f.eB);J$(f,i,b,d);X6(f,b);Yl(f,g,e,j,i);k=j.hc;if(e<d){l=f.fa;Bv(i,l.b,l.a+e|0,BZ(f.eB.b,d-e|0),k.hq);}if(b<=h&&h<=c){m=j.hc;c=h/20|0;l=f.cy;j=Bs(l,c%l.i|0);k=f.fa;e=W(f.cy.i,f.iC);b=j.eJ.a;d=((j.je.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%C9(j.bo)|0)|0;b=h%j.dR|0;c=j.M;d=d+W(b,c)|0;if(d<( -c|0))d=d+e|0;U(j.dP,j.eJ.b,c);f=j.dZ;b=h%j.dR|0;c=j.M;Cr(f,0.0,W(b,c),j.eJ.b,
c);E5(j,i,d,k,m.oW,m.uH);}G2(i);}
function Fx(a){return Ba(a.bp/a.O|0,Cy(a.e.f)-1|0);}
function GX(a){return Ba(((a.bp+DL(a)|0)-1|0)/a.O|0,Cy(a.e.f)-1|0);}
function V4(a){T4(a.cW,a.cz.data[0],a.O,a.S);J$(a.cW,a.S,Fx(a),DL(a));}
function Rp(a,b){var c;c=a.gz.data;return c[b%c.length|0];}
function AEQ(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.r))Du(a,a.eW);else{b=D7(a.r);c=FB(a.r);d=c.N;e=b.N;f=(d-e|0)+1|0;g=BV(f);h=g.data;i=S(Bx,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.eW;e=e+1|0;k=f;}l=EU(a.w,a.y);m=new Tc;m.rn=a;Pz(a,g,0,0,i,l,m);b.bf=b.bf+J(a.eW)|0;c.bf=c.bf+J(a.eW)|0;L$(a,a.y+J(a.eW)|0,0);D2(a);}return 1;}
function ACp(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.r)){b=B3(a.e.f,a.w);if(b.o.data.length>0){c=R$(a,b);if(c===null)return 1;d=a.e.f;e=a.w;f=EU(e,a.y);d.cC=d.cC+1|0;g=d.gt;h=S(G9,1);h.data[0]=AFJ(e,0,1,c,f.bz,f.bJ);B2(g,h);JR(d,e,0,1,c);FV(b,0,J(c));L$(a,a.y-J(c)|0,0);}}else{f=D7(a.r);c=FB(a.r);i=c.N;j=f.N;i=(i-j|0)+1|0;k=BV(i);h=k.data;l=S(Bx,i);m=l.data;e=a.y;n=a.w;o=0;while(j<=c.N){b=B3(a.e.f,j);if(b.o.data.length>0){b=R$(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=Mj(k,o);h=Dl(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.N)f.bf=Bc(0,f.bf-J(b)|0);if(j==c.N){c.bf=Bc(0,c.bf-J(b)|0);L$(a,a.y-J(b)|0,0);}i=i+1|0;}f=EU(n,e);b=new Wh;b.rj=a;Pz(a,p,0,1,h,f,b);}D2(a);return 1;}
function R$(a,b){var c,d,e,f;c=Ew(0,J(a.eW),XC(b));if(!c)b=null;else{b=B(62);if(c<0){b=new BH;Z(b);L(b);}if(c!=1){d=b.b3.data.length;if(d&&c){e=BQ(W(d,c));d=0;f=0;while(f<c){PX(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Mt(e);}else b=AVH;}}return b;}
function Pz(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BV(i);k=AVa(i).data;Hz(j,c);c=0;l=k.length;if(c>l){f=new BH;Z(f);L(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cC=o.cC+1|0;p=S(G9,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AFJ(h[m],n[m],k[m],b[m],f.bz,f.bJ);m=m+1|0;}B2(o.gt,p);c=0;while(c<i){b=e.data;JR(o,h[c],n[c],k[c],b[c]);g.mn(F1(h[c]),b[c]);c=c+1|0;}}
function AD7(a){var b,c,d,e,f,g,h,i;if(Dq(a.r))GM(a);Ei(B3(a.e.f,a.w));b=a.e.f;c=a.w;d=a.y;e=b.C;f=e.data;g=f[c];e=Dl(e,f.length+1|0);f=e.data;b.C=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DS(S(B7,0));b.C.data[c+1|0]=g;}else if(d==g.T){f[c]=g;f[c+1|0]=DS(S(B7,0));}else{f=(IU(g,d)).data;e=b.C.data;e[c]=f[0];e[c+1|0]=f[1];}Fp(b,c,d,0,B(194));D2(a);return CD(a,a.w+1|0,0,0);}
function ADL(a){if(Dq(a.r))GM(a);else Pq(a.e.f,a.w,a.y);GY(a);D2(a);return 1;}
function YO(a){var b,c,d;if(Dq(a.r)){GM(a);return 1;}b=a.y;if(!b&&!a.w)return 1;if(b){c=a.w;b=b-1|0;Pq(a.e.f,c,b);}else{c=a.w-1|0;b=Fl(a.e.f,c);d=a.e.f;K$(d,c);Fp(d,c,Fl(d,c),1,B(194));}D2(a);return CD(a,c,b,0);}
function Du(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ec)return 0;if(Dq(a.r))GM(a);c=L7(Vx(b,B(195),B(31)),B(194),(-1));d=c.data;b=a.e.f;e=a.w;f=a.y;Yj(b,e,f,c);g=d.length;if(!g)h=AVH;else{i=0;j=0;while(j<g){i=i+J(d[j])|0;j=j+1|0;}k=BQ(i+W(g-1|0,J(B(194)))|0);c=k.data;l=0;h=d[0];j=0;while(j<J(h)){m=l+1|0;c[l]=M(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<J(B(194))){m=l+1|0;c[l]=M(B(194),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<J(h)){m=l+1|0;c[l]=M(h,j);j=j+1|0;l=m;}n=n+1|0;}h=Mt(k);}Fp(b,e,f,0,h);e=a.w;m=(e+g|0)-1|0;CD(a,
m,m!=e?J(d[g-1|0]):a.y+J(d[0])|0,0);E_(a);D2(a);return 1;}
function GM(a){var b,c,d;b=D7(a.r);c=a.e.f;d=a.r;TT(c,d,Wt(c,d));CD(a,b.N,b.bf,0);E_(a);D2(a);}
function E_(a){var b;b=a.r;b.c2=0;B0(b.bT,a.w,a.y);B0(a.r.bK,a.w,a.y);}
function C3(a){return a.eX.l5|0;}
function AB7(a,b){var c,d;c=a.cv.a;if(b<c){d=a.cs.dc;d.a=c-b|0;d.b=!a.bO?Df(a)+a.dJ|0:Df(a)+a.cl|0;c=!a.bO?(a.ba.b+a.cJ|0)-a.dJ|0:(((a.ba.b+a.cn|0)+C3(a)|0)+a.cl|0)-a.dJ|0;Bv(a.S,c,a.ba.a+b|0,d,a.dI.b9.eq);}}
function ACJ(a){var b;b=a.bO?a.ba.b+C3(a)|0:a.ba.b+a.cv.b|0;II(a.eu,a.bp,a.ba.a,DL(a),Vl(a),b,C3(a));b=!a.bO?a.ba.b+a.cJ|0:((a.ba.b+a.cl|0)+a.cn|0)+C3(a)|0;MC(a.er,a.db,b,Df(a),a.hj,a.ba.a+DL(a)|0,C3(a));}
function ADs(a){var b,c;b=P2(a.eu);c=P2(a.er);if(!(!b&&!c)){Cs(a.S,1);if(b)FY(a.eu,a.S);if(c)FY(a.er,a.S);if(b)Gi(a.eu,a.S);if(c)Gi(a.er,a.S);}}
function Z7(a){var b,c,d,e;b=a.fb;c=a.cv;b.a=c.a;b.b=a.cl;d=!a.bO?a.cJ-a.cn|0:(c.b-Lr(a)|0)-a.cl|0;b=a.S;c=a.ba;Bv(b,c.b+d|0,c.a,a.fb,a.dI.b9.vo);a.fb.b=!a.bO?(a.cn-a.cl|0)-a.dJ|0:((a.cn+C3(a)|0)+a.cl|0)-a.dJ|0;e=a.bO?0:(a.cJ-a.cn|0)+a.cl|0;b=a.S;c=a.ba;Bv(b,c.b+e|0,c.a,a.fb,a.dI.b9.eq);}
function J3(b,c){return Ba(Bc(0,b),c);}
function HO(a,b){var c,d,e,f,g;b=b.data;$rt_globals.console.info("onFileParsed");a.hZ=1;a.hY=1;c=D_(b[0]);d=FK(b[1]);e=(D_(b[2])).data[0];ABI(a.e.f,c,d);WD(a,ADR(e));Gx(Cl(a),AXa);F5(Cl(a));f=Kx(FG(),a.eZ);g=new N;P(g);H(H3(H(g,B(196)),f),B(197));$rt_globals.console.info($rt_ustr(O(g)));g=a.iU;if(g!==null)g.l(a);}
function WD(a,b){var c,d;c=Do(a.e);if(!CE(c,b)){d=new N;P(d);H(H(H(H(d,B(198)),c),B(199)),b);$rt_globals.console.info($rt_ustr(O(d)));a.e.jg=b;}}
function Cl(a){return a.cs.i2;}
function KN(a,b){var c,d,e,f,g,h;c=EB(b);d=new N;P(d);H(H(d,B(200)),c);$rt_globals.console.info($rt_ustr(O(d)));NG(Cl(a),EB(b));CD(a,0,0,0);a.eZ=FG();a.hZ=0;a.hY=0;a.en=null;Kn(a.cW,null);e=new IM;f=S(Bx,1);f.data[0]=B(31);AEJ(e,f,AU1(B(31),B(31),EB(b),null));a.e=e;CD(a,0,0,0);c=EB(b);g=F2(c,46,J(c)-1|0);if(g!=(-1))c=Dk(c,g);h=!Bn(c,B(201))?5120:10240;c=new Tp;c.uo=a;c.up=h;c.uq=b;d=b.fe;if(d!==null)Lt(c,JL(b,d.size));else{d=b.gM.getFile();e=new TW;e.mt=b;e.mu=c;b=new TZ;b.uL=c;d.then(Bj(e,"f"),Bj(b,"f"));}}
function HD(a,b,c,d,e){if(Hw(a,e))return 1;if(c&&d)return 1;if(c)Fa(a,a.bp+((W(b,a.O)*12|0)/10|0)|0);else if(!d){I0(a,a.w+b|0,e);TP(a);}return 1;}
function Uy(a,b,c,d){var e,f,g;if(Hw(a,d))return 1;e=Ft(a);if(!c)f=a.y+b|0;else if(b>=0)f=GZ(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=IC(e,f);if(c>0&&e.du.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.du.data[c-1|0];}}if(f>e.T){if((a.w+1|0)<Cy(a.e.f))CD(a,a.w+1|0,0,d);}else if(f>=0)Dr(a,f,d);else{b=a.w;if(b>0){g=(B3(a.e.f,b-1|0)).T;CD(a,a.w-1|0,g,d);}}PP(a);return 1;}
function Hw(a,b){if(Dq(a.r)&&!b){E_(a);GY(a);return 1;}if(!(b&&Dq(a.r)))E_(a);return 0;}
function CD(a,b,c,d){a.y=c;return I0(a,b,d);}
function I0(a,b,c){a.w=Ew(0,b,Cy(a.e.f)-1|0);return Dr(a,a.y,c);}
function Dr(a,b,c){a.y=Ew(0,b,(Ft(a)).T);a.he=a.cs.bR===0.0?0:G7(Ft(a),a.y,a.S.cE,a.cz);LP(a);GY(a);if(c)a.r.c2=1;KO(a.r,a.w,a.y);a.r.c2=0;return 1;}
function L$(a,b,c){var d;d=RV(a.r);Dr(a,b,c);a.r=d;}
function GY(a){TP(a);PP(a);}
function TP(a){var b,c,d,e,f;b=a.bp;c=b+DL(a)|0;d=a.w;e=a.O;d=W(d,e);f=d+e|0;if(d<(b+e|0))Fa(a,d-e|0);else if(f>(c-e|0))Fa(a,(f-DL(a)|0)+a.O|0);}
function PP(a){var b,c,d,e,f;b=Dg(a.cs.bR*30.0);c=a.db;d=c+Df(a)|0;e=a.he;f=e+b|0;if(e<(c+b|0))Ir(a,e-b|0);else if(f>(d-b|0))Ir(a,(f-Df(a)|0)+b|0);}
function TV(a,b,c){var d,e,f,g,h,i,j,k,l;Vr(a);d=a.e.f;e=DR(d.ek,c);if(e!==null)c=e;a:{f=DR(d.eI,c);if(f!==null){a.iu=Kl(d,c);c=B9(f);while(true){if(!Cd(c))break a;g=B_(c);B2(a.ih,Kl(d,g));}}}h=b.bz;i=b.bJ;b=a.ez;c=Do(a.e);d=G6(a.e);j=(Cp(b.oT)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.uh(c,d)){d=b.xR;break b;}l=l+1|0;}d=null;}if(d!==null){g=a.e;c=new On;c.xx=a;c.xz=g;c.xy=h;c.xw=i;d.sD(g,h,i,c,a.g2);}}
function HE(a,b){var c;CD(a,b.bz,b.bJ,0);c=GZ(Ft(a),a.y);B0(a.r.bK,a.w,c);B0(a.r.bT,a.w,a.y);}
function EV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ba;e=c-d.b|0;f=Ew(0,((b.a-d.a|0)+a.bp|0)/a.O|0,Cy(a.e.f)-1|0);g=!a.bO?a.cJ:(a.cl+a.cn|0)+C3(a)|0;h=Bc(0,(e-g|0)+a.db|0);b=B3(a.e.f,f);d=a.S.cE;i=a.cz;if(!(b.em!==null&&!b.fT))Lk(b,d,i);j=b.em;e=b.o.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.T;else{c=Ul(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.o.data.length)k=b.T;else{j=W9(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.o.data[e].u)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(AXb){d=new N;P(d);V(H(V(H(V(H(d,B(202)),e),B(203)),h),B(204)),c);$rt_globals.console.info($rt_ustr(O(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return EU(f,k);}
function TM(a,b){var c;c=b.bz;a.w=c;a.y=b.bJ;a.he=G7(B3(a.e.f,c),a.y,a.S.cE,a.cz);LP(a);}
function Ft(a){return B3(a.e.f,a.w);}
function JO(a,b,c){var d,e;d=Dg((a.O*4|0)*c/150.0);e=Dg(b);if(d)Fa(a,a.bp+d|0);if(e)Ir(a,a.db+e|0);return 1;}
function Vd(a,b,c){a.r.c2=0;return 1;}
function Vk(a,b,c){var d,e,f;if(c)return null;d=Fh(a.eu,b.h,a.tL,1);if(d!==null)return d;d=Fh(a.er,b.h,a.t9,0);if(d!==null)return d;I9(a);e=EV(a,b.h);f=HU(a.e.f,e.bz,e.bJ);TM(a,e);TV(a,e,f);if(!b.bI){b=a.r;if(!b.c2)B0(b.bT,a.w,a.y);}b=a.r;b.c2=1;KO(b,a.w,a.y);b=new RW;b.tc=a;return b;}
function Q4(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.ck){b=b.h;e=EV(a,b);f=HU(a.e.f,e.bz,e.bJ);g=OT(a,f);h=KY(a.ez,Do(a.e),G6(a.e));if(h!==null){f=a.e;c=e.bz;d=e.bJ;e=new Ud;e.xp=a;e.xo=b;e.xn=g;h.sD(f,c,d,e,a.g2);}else{e=DR(a.e.f.ek,f);if(e!==null){HE(a,e);c=1;}else{e=DR(a.e.f.eI,f);if(e!==null&&!EF(e)){if(e.i!=1){VB(a.iI,b,e,a,g);c=1;}else{HE(a,Bs(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EV(a,b.h)).bz;e=B3(a.e.f,c);c=G5(e,a.y);d=GZ(e,a.y);b=Vc(e,c);if((d-1|0)==e.T){B0(a.r.bT,a.w,XC(e));B0(a.r.bK,
a.w,e.T);}else{if(b!==null){b=b.u;i=0;c:{while(true){j=b.b3.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=G5(e,c-1|0);d=GZ(e,c);}else{if(d!=i){Qj(a.r,a.w);break b;}c=G5(e,d+1|0);d=GZ(e,c);}}}B0(a.r.bT,a.w,c);a.r.c2=1;CD(a,a.w,d,0);a.r.c2=0;I9(a);}}break a;case 3:break;default:break a;}Qj(a.r,a.w);XN(a.fI);I9(a);}}return 1;}
function PE(a,b){var c,d,e,f,g,h,i,j,k;c=a.cs.cD;if(Fq(a.eu,b.h,c))return 1;if(Fq(a.er,b.h,c))return 1;d=a.cW;if(F8(b.h,d.fa,d.eB)&&Hl(c)?1:0)return 1;e=b.h;f=!a.bO?a.ba.b+a.cJ|0:((a.ba.b+a.cn|0)+a.cl|0)+C3(a)|0;a:{g=a.ba.a;h=Df(a);i=DL(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Hl(c);if(b.ck){e=EV(a,b.h);e.bJ=G5(B3(a.e.f,e.bz),e.bJ);b=a.e.f;if(!NY(b.ek,e)&&!NY(b.eI,e)?0:1)return DF(c,B(205));}return DF(c,B(188));}
function ANE(a,b){var c,d,e,f;c=b.ck;if(c&&b.bk==65){c=Cy(a.e.f)-1|0;d=Fl(a.e.f,c);B0(a.r.bT,0,0);B0(a.r.bK,Cy(a.e.f)-1|0,d);return 1;}if(c&&b.bk==80){HQ(a);return 1;}if(!a.ec&&c&&b.bk==90){if(Dq(a.r))E_(a);b=a.e.f;b.cC=b.cC+1|0;e=b.gt;d=e.i;if(!d)e=null;else{f=(D8(e,d-1|0)).data;e=TL(b,f[0]);c=1;while(c<f.length){TL(b,f[c]);c=c+1|0;}}if(e!==null){CD(a,e.b,e.a,0);D2(a);}return 1;}if(!c&&!b.c0){if(Bn(b.dO,B(206))){Du(a,B(207));Dr(a,a.y-1|0,0);c=1;}else if(Bn(b.dO,B(208))){Du(a,B(209));Dr(a,a.y-1|0,0);c=1;}else if
(Bn(b.dO,B(43))){Du(a,B(210));Dr(a,a.y-1|0,0);c=1;}else if(Bn(b.dO,B(211))){Du(a,B(212));Dr(a,a.y-1|0,0);c=1;}else if(Bn(b.dO,B(213))){Du(a,B(214));Dr(a,a.y-1|0,0);c=1;}else if(!Bn(b.dO,B(215)))c=0;else{Du(a,B(216));Dr(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.c0&&!b.ck)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.lQ.data[c];if(e!==null)e.p();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bk){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ABe(a,b))return 1;if(a.ec)c=0;else c:{switch(b.bk){case 8:break;case 9:c=!b.bI?AEQ(a):ACp(a);break c;case 13:c=AD7(a);break c;case 46:c=ADL(a);break c;default:c=0;break c;}c=YO(a);}if(c)return 1;if(b.ck&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AJ4(b.bk)&&b.bk!=27){if(!b.ck&&!b.c0&&!b.i4)return J(b.dO)>0&&Du(a,b.dO)?1:0;return 0;}return 0;}
function W7(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(B(166),Do(a.e))){b=Cl(a);c=new Vw;c.u4=a;d=S(C,3);e=d.data;e[0]=EH(a.e.f);f=Fx(a);g=GX(a);h=Bc(0,f-100|0);f=Ba(Cy(a.e.f)-1|0,g+100|0);i=BV(3);j=i.data;j[0]=Gb(a.e.f,h);k=a.e.f;l=0;f=Ba(f+1|0,k.C.data.length);m=0;while(m<f){l=l+Fl(k,m)|0;if(m!=(k.C.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.da;k=CC();MA(n,n.dx,k);i=BV(3*k.i|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Bs(k,m);h=p+1|0;o[p]=q.b1;l=h+1|0;o[h]=q.b8;p=l+1|0;o[l]=q.ft;m=m+
1|0;}e[2]=i;CQ(b,c,B(217),d);}}
function HQ(a){var b,c,d,e;b=ABL(Do(a.e));if(b===null){b=a.iU;if(b!==null)b.l(a);}else{a.eZ=FG();c=Cl(a);d=new PS;d.vr=a;e=S(C,1);e.data[0]=EH(a.e.f);CQ(c,d,b,e);}}
function S4(a){var b,c,d,e,f,g,h;b=a.e.f.da;c=Vn(b,b.dx);if(c===null)return;if(Bn(B(188),Do(a.e)))PA(a.e.f);a:{d=Ee([CY(c),C5(c),c.bZ.ft]);e=EH(a.e.f);f=BV(1);g=Do(a.e);h=(-1);switch(Is(g)){case 3401:if(!Bn(g,B(218)))break a;h=3;break a;case 98723:if(!Bn(g,B(219)))break a;h=2;break a;case 3254818:if(!Bn(g,B(166)))break a;h=1;break a;case 3556653:if(!Bn(g,B(188)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:h=1;break b;case 2:h=2;break b;case 3:h=3;break b;default:h=(-1);break b;}h=0;}f.data[0]
=h;b=Cl(a);c=new Ya;c.tX=a;CQ(b,c,B(220),I(C,[e,f,d]));}
function GH(a,b,c){var d,e,f,g,h,i;if(c&&a.ec)return 0;d=D7(a.r);e=d.N;if(Dq(a.r)){f=a.e.f;g=a.r;h=Wt(f,g);if(c)TT(f,g,h);if(c){CD(a,d.N,d.bf,0);E_(a);D2(a);}}else{h=Fe(EM(a.e.f.C.data[e]),B(194));i=Ba(Cy(a.e.f)-1|0,e);B0(a.r.bK,i,0);if(e>=(Cy(a.e.f)-1|0))B0(a.r.bK,i,Fl(a.e.f,i));else B0(a.r.bT,i+1|0,0);if(c)GM(a);else CD(a,e,0,0);}b.l(h);return 1;}
function ABe(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.ck?I0(a,IQ(a.bp,a.O),b.bI):HD(a,2-WF(DL(a),a.O)|0,0,b.c0,b.bI);break a;case 34:c=!b.ck?HD(a,WF(DL(a),a.O)-2|0,0,b.c0,b.bI):I0(a,((a.bp+DL(a)|0)/a.O|0)-1|0,b.bI);break a;case 35:if(!Hw(a,b.bI)&&!Dr(a,(Ft(a)).T,b.bI)){c=0;break a;}c=1;break a;case 36:if(!Hw(a,b.bI)&&!Dr(a,0,b.bI)){c=0;break a;}c=1;break a;case 37:c=b.ck;if(c&&b.c0){I9(a);d=a.fI;e=d.dg;if(e<=0)d=null;else{f=d.eT.data;c=e-1|0;d.dg=c;d=f[c];}if(d===null)c=1;else{CD(a,Je(d),LU(d),0);a.r=RV(d.l9);c
=1;}break a;}c=Uy(a,(-1),c,b.bI);break a;case 38:c=HD(a,(-1),b.ck,b.c0,b.bI);break a;case 39:c=b.ck;if(c&&b.c0){d=a.fI;c=d.dg;if(c==(d.eU-1|0))d=null;else{f=d.eT.data;c=c+1|0;d.dg=c;d=f[c];}if(d===null)c=1;else{CD(a,Je(d),LU(d),0);a.r=RV(d.l9);c=1;}break a;}c=Uy(a,1,c,b.bI);break a;case 40:c=HD(a,1,b.ck,b.c0,b.bI);break a;default:}c=0;}if(c&&b.bI)B0(a.r.bK,a.w,a.y);if(c)TV(a,EU(a.w,a.y),HU(a.e.f,a.w,a.y));return c;}
function I9(a){var b,c,d,e,f,g,h;b=a.fI;c=b.dg;b=c<0?null:b.eT.data[c];if(b!==null&&a.w==Je(b)&&a.y==LU(b))return;d=a.fI;b=new Ju;c=a.w;e=a.y;f=a.r;b.ln=EU(c,e);g=RV(f);b.l9=g;g.c2=0;e=d.dg;h=d.eU;if(e==(h-1|0))M4(d,b);else{c=e+1|0;while(c<h){XN(d);c=c+1|0;}M4(d,b);}d.dg=d.dg+1|0;}
function D2(a){a.e.f.pO=JB(Cl(a));}
function Kg(a,b){var c,d,e,f,g,h,i;a.v8=null;Vr(a);c=a.e;a.e=b;a.eZ=FG();d=ABL(Do(a.e));if(d!==null){e=Cl(a);f=new M0;f.p3=a;g=S(C,1);g.data[0]=EH(a.e.f);CQ(e,f,d,g);}g=(Cp(a.ez.mN)).data;h=g.length;i=0;while(i<h){g[i].mn(c,b);i=i+1|0;}}
function Vr(a){a.iu=null;Hy(a.ih);}
function ABL(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(Is(b)){case 3401:if(!Bn(b,B(218)))break a;c=2;break a;case 98723:if(!Bn(b,B(219)))break a;c=1;break a;case 3254818:if(!Bn(b,B(166)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=B(221);break b;case 2:b=B(222);break b;default:b=null;break b;}b=B(223);}}return b;}
function OT(a,b){var c;c=Kl(a.e.f,b);if(c===null)return B(31);return c.u;}
function DJ(a,b){return F8(b,a.ba,a.cv);}
function Lx(a,b){var c,d,e,f,g;a.en=b;Br(By(),B(224));b=a.en;if(b===null){Br(By(),B(225));Kn(a.cW,null);}else{b=b.data;c=DZ(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fY<<24>>24;e=e+1|0;}Kn(a.cW,c);}}
var HV=G(0);
function Rf(){C.call(this);this.s9=null;}
function AKr(a,b){var c;c=a.s9;WH(c,c.E,c.D);}
function Rd(){C.call(this);this.uG=null;}
function AMy(a,b){var c;c=a.uG;WH(c,c.D,c.E);}
function Re(){C.call(this);this.oK=null;}
function AGd(a,b){QH(a.oK,b);}
function Rb(){C.call(this);this.sn=null;}
function AFP(a,b){QH(a.sn,b);}
function Rc(){C.call(this);this.mT=null;}
function AMb(a,b){return ABJ(a.mT,b);}
function HR(){var a=this;C.call(a);a.j9=null;a.o0=null;a.mA=null;}
function AXc(a,b){var c=new HR();Su(c,a,b);return c;}
function AXd(a,b,c){var d=new HR();VN(d,a,b,c);return d;}
function Su(a,b,c){VN(a,b,null,c);}
function VN(a,b,c,d){a.j9=b.bS;a.o0=c;a.mA=d;}
function APF(a,b){var c,d;if(b.ck&&b.bk==79){c=a.o0;if(c!==null&&b.bI)Wq(a.j9,c);else L1(a.j9,a.mA);d=1;}else d=0;return d;}
function Q_(){C.call(this);this.qu=null;}
function AN$(a,b){var c,d;c=a.qu;d=D1(c.t,c.E)?c.E:!D1(c.t,c.D)?null:c.D;if(d!==null){KN(d,b);c.gg=null;}}
function Ra(){C.call(this);this.tH=null;}
function AK3(a,b){b=b;return ACQ(a.tH,b);}
var ACs=G();
var Zt=G(0);
function Z5(b,c,d){return HI(b,c,d,255,new B1);}
function HI(b,c,d,e,f){Cr(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xj(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AJG(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bG=h+i;e.bl=j+i;return e;}
function JG(b,c,d,e,f){f=Xj(b,c,d,f);f.bH=e;return f;}
function GI(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Yn(){var a=this;C.call(a);a.cM=null;a.i2=null;a.cD=null;a.cb=null;a.bR=0.0;a.ee=null;a.d1=null;a.dc=null;a.on=null;a.yH=null;a.yG=null;}
function KT(a){var b;b=a.ee;if(b!==null)b.sS();}
function J2(a){var b;b=a.ee;if(b!==null)b.vv();}
function Xh(a,b){var c;c=a.i2.dM!==(Eb()).activeElement?0:1;if(c)J2(a);a.ee=b;if(c)KT(a);}
function FS(a,b){J2(a);a.ee=b;KT(a);}
function D1(a,b){return b!==a.ee?0:1;}
function IX(a){return a.cM.cE;}
function GU(a,b){return Hq(a.cM,b.iK,B8(b.h0,a.bR));}
function Cx(a,b){return B8(b,a.bR);}
var SE=G();
function ASI(a,b){var c,d,e;c=b.ck;d=c&&!b.bI&&!b.c0&&!b.i4?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bI&&!c&&!b.c0&&!b.i4?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.j7=1;}return 0;}
function SF(){C.call(this);this.sp=null;}
function AFz(a,b){var c;c=a.sp.ee;return c!==null&&c.g3(b)?1:0;}
function B1(){var a=this;C.call(a);a.bn=0.0;a.bG=0.0;a.bl=0.0;a.bH=0.0;}
function ARu(a){var b=new B1();ANh(b,a);return b;}
function Cr(a,b,c,d,e){a.bn=b;a.bG=c;a.bl=d;a.bH=e;}
function ANh(a,b){a.bn=b.bn;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;}
function BE(a,b){a.bn=b.bn;a.bG=b.bG;a.bl=b.bl;a.bH=b.bH;return a;}
function ASi(a,b){if(a===b)return 1;return b!==null&&Cf(a)===Cf(b)&&KF(a,b)?1:0;}
function KF(a,b){return b.bn===a.bn&&b.bG===a.bG&&b.bl===a.bl&&b.bH===a.bH?1:0;}
var Eq=G(0);
function ABC(){C.call(this);this.cR=null;}
function AEI(){var a=new ABC();ALL(a);return a;}
function ALL(a){a.cR=CC();}
function I7(a,b){RJ(a.cR,0,b);}
function Ke(a,b){Wn(a.cR,b);}
function Jh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cR.i-1|0;while(c>=0){d=Bs(a.cR,c);d.R.e8(b);e=d.U;f=d.eo.il;if(!LX(e)){if(!Ui(e)&&!(!e.gN&&e.dd!==null)){e.gN=0;Ri(e);g=e.d3;h=(g.dA+g.et+5.0)/10.0;i=Cx(e.g0,e.ja);g=b.cE;j=e.d3;k=e.g5;l=h*2.0;CA(g,j);m=i+KS(g,k,l)|0;e.hO=m;m=Ew(0,m,e.q.b);if(m){j=CL(b,m,e.q.a);CA(j,e.d3);g=e.g5;l=i;h=l+h;k=e.d3;n=k.dA;Ch(j,g,h,l+n-(n+k.et)/16.0);g=e.dd;if(g===null){g=CW(b);e.dd=g;}CO(g,j);FQ(j);Cr(e.lJ,0.0,0.0,BM(e.dd),C9(e.dd));}}g=f.rf;j=e.dd;if(j===null)Pu(e,b,0,e.q.b,
g);else{i=BM(j);f=f.qk;j=e.G;m=j.b;o=j.a;j=e.dd;EJ(b,m,o,j.fD,e.lJ,j,f,g,0.0);m=e.q.b;if(i<m)Pu(e,b,i,m-i|0,g);}}Cs(b,1);i=Cx(d.bt,2.0);m=LX(d.U);f=d.bt;e=f.dc;f=f.on;p=m?0:d.U.q.a;g=d.R.q;U(f,g.b,g.a+p|0);ADP(b,f,!m?d.U.G:d.R.G,d.eo.il.kh, -i|0,e);f=d.R;AC2(b,f.q,f.G,i,p,Rv(d.eo.jm,d.bt.bR),d.eo.jm.mk,e);c=c+(-1)|0;}}
function ZE(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cR;if(c>=d.i)break;a:{e=Bs(d,c);f=b.h;if(DK(e.U,f))g=DF(e.bt.cD,null);else{g=Cx(e.bt,7.0);h=Cx(e.bt,25.0);if(V1(e,f.b,g)){i=U_(e,f.b,h);if(PH(e,f.a,g)){g=DF(e.bt.cD,JQ(i,B(226)));break a;}if(Qq(e,f.a,g)){g=DF(e.bt.cD,JQ( -i|0,B(226)));break a;}}if(M5(e,f.a,g)){h=R_(e,f.a,h);if(Ol(e,f.b,g)){g=DF(e.bt.cD,JQ(h,B(227)));break a;}if(T9(e,f.b,g)){g=DF(e.bt.cD,JQ( -h|0,B(227)));break a;}}g=0;}}b:{c:{if(!g){if(!DK(e.R,b.h))break c;if(!e.R.bL(b)&&!DF(e.bt.cD,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABB(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cR;if(e>=f.i)break;a:{b:{g=Bs(f,e);if(!DK(g.U,b.h)){if(!DK(g.R,b.h))break b;if(!g.R.cr(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function YB(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cR;if(d>=e.i)return null;a:{f=Bs(e,d);if(!c){b:{e=b.h;if(!LX(f.U)&&DK(f.U,e)){g=f.R.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.U.G;i=e.b-i|0;k=e.a-k|0;e=new Be;g=new QM;g.o4=f;g.o7=i;g.o8=k;g.o9=e;g.o$=h;g.o5=j;}else{h=Cx(f.bt,7.0);i=Cx(f.bt,25.0);if(V1(f,e.b,h)){j=U_(f,e.b,i);if(PH(f,e.a,h)){g=Ih(f,e,j,(-1));break b;}if(Qq(f,e.a,h)){g=Ih(f,e,j,1);break b;}}if(M5(f,e.a,h)){i=R_(f,e.a,i);if(Ol(f,e.b,h)){g=Ih(f,e,(-1),i);break b;}if(T9(f,e.b,h)){g=
Ih(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DK(f.U,b.h)?AXe:f.R.b_(b,c);e=f.R;if(e===null)g=null;else if(g===null)g=!DK(e,b.h)?null:AXe;}if(g!==null)break;d=d+1|0;}return g;}
function AEH(a,b,c){var d,e,f,g;d=0;while(true){e=a.cR;if(d>=e.i)break;a:{b:{f=Bs(e,d);if(!DK(f.U,b.h)){if(!DK(f.R,b.h))break b;if(!f.R.cO(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function Lh(a,b,c,d){var e,f;e=0;while(true){f=a.cR;if(e>=f.i)break;if((Bs(f,e)).R.cY(b,c,d))return 1;e=e+1|0;}return 0;}
function ARx(a,b,c){var d,e,f;d=0;while(true){e=a.cR;if(d>=e.i)break;f=Bs(e,d);e=f.R;e.jf(e.G,e.q,c);e=f.U;if(e.gH!==null){e.d3=null;e.hO=0;e.gN=1;}J_(f);d=d+1|0;}}
function Ot(a,b){var c,d,e;c=0;d=0;while(true){e=a.cR;if(d>=e.i)break;Bs(e,d);c=0|c;d=d+1|0;}return c;}
function Qa(a,b,c){var d;d=0;while(true){b=a.cR;if(d>=b.i)break;Bs(b,d);d=d+1|0;}}
function Y3(){var a=this;C.call(a);a.cF=null;a.ch=null;a.jy=null;a.jq=null;a.hl=null;a.iS=null;}
function M2(a){var b=new Y3();AG$(b,a);return b;}
function AG$(a,b){a.ch=CC();a.iS=AXf;a.cF=b;Y(b.d1,a);}
function If(a,b,c){a.jy=c;a.hl=b;b=B9(a.ch);while(Cd(b)){Ii(B_(b),a.hl);}}
function Gf(a,b,c,d){var e,f;e=a.cF;f=e.cb;if(W(f.b,f.a)&&e.bR!==0.0){if(a.jy!==null&&!DM(a)){a.iS=d;a.jq=GU(a.cF,a.jy);e=T0(a,b,c,null);b=new Tr;b.tx=a;e.jA=b;FS(a.cF,a);return;}b=new BH;Z(b);L(b);}c=new D3;Bo(c,B(228));L(c);}
function DO(a){var b;if(DM(a)){b=a.cF;if(b.ee===a)b.ee=null;TQ(a,null);a.iS.p();a.iS=AXf;}}
function P0(a,b,c,d,e){var f,g,h;f=Zn();S7(f);K0(f,c.dp());Ii(f,a.hl);Ia(f,a.jq);G4(f,a.cF);if(d===null)g=b.b;else{g=b.b;g=a.cF.cb.b<((g+(Ed(d)).b|0)+(Ed(f)).b|0)?g-(Ed(f)).b|0:(g+(Ed(d)).b|0)-d.eY|0;}h=b.a;b=a.cF.cb;J8(f,Bc(0,Ba(g,b.b-(Ed(f)).b|0)),Bc(0,Ba(h,b.a-(Ed(f)).a|0)));b=new NB;b.uj=a;b.ul=f;b.uk=e;f.jV=b;B2(a.ch,f);return f;}
function T0(a,b,c,d){return P0(a,b,c,d,null);}
function AHj(a,b,c){var d,e;a.jq=GU(a.cF,a.jy);d=B9(a.ch);while(Cd(d)){e=B_(d);Ia(e,a.jq);G4(e,a.cF);}}
function IA(a){var b,c;if(EF(a.ch))return;Cs(a.cF.cM,1);b=0;while(true){c=a.ch;if(b>=c.i)break;JM(Bs(c,b),a.cF);b=b+1|0;}}
function KA(a,b){var c,d;c=0;d=a.ch.i-1|0;a:{while(d>=0){c=Ko(Bs(a.ch,d),b.h,a.cF.cD);if(c)break a;d=d+(-1)|0;}}return c;}
function Jx(a,b,c,d){var e,f;e=0;f=a.ch.i-1|0;a:{while(f>=0){e=Kh(Bs(a.ch,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Js(a,b,c){var d,e,f;d=null;e=a.ch.i-1|0;a:{while(e>=0){f=Bs(a.ch,e);d=b.h;c=Et(f.ci,d);if(!c&&!Mb(f.ci)){d=f.jA;if(d!==null)d.p();}d=!c?null:AXe;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AFQ(a,b){var c;if(!DM(a))return 0;a:{switch(b.bk){case 27:DO(a);c=1;break a;default:}c=0;}return c;}
function AEG(b,c){var d,e,f;d=b.dr;e=c.cT;f=c.eY;b=new Be;c=d.z;PF(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function TQ(a,b){var c,d;c=a.ch.i-1|0;a:{while(true){if(c<0)break a;d=Bs(a.ch,c);if(b===d)break;D8(a.ch,c);TS(d);c=c+(-1)|0;}}}
function DM(a){return a.ch.i<=0?0:1;}
function ABm(){var a=this;C.call(a);a.dW=null;a.li=0.0;a.gY=0.0;a.gA=0;}
function ANl(){var a=new ABm();AR4(a);return a;}
function AR4(a){var b;b=S2(0,0,2,20);a.dW=b;a.li=0.5;a.gY=0.0;HI(187,187,187,255,b.bm);}
function S1(a){return a.dW.s.a;}
function Qv(a){return a.dW.s.b;}
function Tk(a,b){var c,d;a:{c=a.gA;if(b>a.gY)while(true){d=a.gY+a.li;a.gY=d;a.gA=a.gA?0:1;if(b>d)continue;else break a;}}return a.gA==c?0:1;}
function P4(a,b,c){U(a.dW.z,b,c);}
function SJ(a,b){a.gY=b+a.li*1.25;a.gA=1;}
function Vq(a,b,c){if(a.gA)UP(a.dW,b,c.b,c.a);}
function Lc(){var a=this;C.call(a);a.mh=null;a.v9=null;a.wi=0.0;a.pb=0;a.wp=0;a.wU=0;a.rb=0;a.xQ=0;a.dA=0.0;a.et=0.0;a.wg=0.0;a.l5=0.0;a.wm=0;a.nb=null;}
function E6(a){return Dg(a.dA+a.et);}
function Kc(a,b){return Dg((a.dA+a.et)*b);}
function IM(){var a=this;C.call(a);a.f5=null;a.f=null;a.jg=null;a.qm=null;}
function ATm(a,b){var c=new IM();AEJ(c,a,b);return c;}
function AXg(a,b,c){var d=new IM();QL(d,a,b,c);return d;}
function AEJ(a,b,c){QL(a,b,null,c);}
function QL(a,b,c,d){var e,f,g,h,i,j,k;a.f5=d;a.jg=c;if(d===null)c=null;else{c=d.fm;c=c===null?null:!Eg(c,B(229))&&!Eg(c,B(230))&&!Eg(c,B(231))&&!Eg(c,B(232))&&!Eg(c,B(233))&&!Eg(c,B(234))?(Eg(c,B(201))?B(166):!Eg(c,B(235))?null:B(218)):B(219);}e=b.data;a.qm=c;c=new Kj;f=e.length;if(!f)g=M3(B(31));else{g=S(CB,f);h=g.data;i=0;while(i<f){j=new CB;k=S(B7,1);k.data[0]=Sj(e[i]);Ij(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.ek=KW();c.eI=KW();c.gt=CC();if(!b.length){c=new BH;Z(c);L(c);}c.C=g;c.gS=0;c.cC=0;c.da=Oh(c);a.f=c;}
function Do(a){var b;b=a.jg;if(b===null)b=a.qm;return b;}
function G6(a){var b;b=a.f5;return b===null?null:b.hX;}
function Wi(){var a=this;C.call(a);a.np=null;a.s5=null;a.tt=null;a.oT=null;a.mN=null;a.rS=null;}
function KY(a,b,c){return XU(a,Cp(a.np),b,c);}
function V0(a,b,c){return XU(a,Cp(a.s5),b,c);}
function XU(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.uh(c,d))return g.wA;f=f+1|0;}return null;}
function NA(a,b,c){var d,e,f,g;d=(Cp(a.tt)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.uh(b,c))return g.wJ;f=f+1|0;}return null;}
function YG(){var a=this;C.call(a);a.bT=null;a.bK=null;a.c2=0;}
function ANR(){var a=new YG();AF4(a);return a;}
function RV(a){var b=new YG();AFj(b,a);return b;}
function AF4(a){a.bT=new Gp;a.bK=new Gp;}
function AFj(a,b){var c;c=new Gp;a.bT=c;a.bK=new Gp;XG(c,b.bT);XG(a.bK,b.bK);a.c2=b.c2;}
function KO(a,b,c){B0(a.bK,b,c);if(!a.c2)B0(a.bT,b,c);}
function Qj(a,b){B0(a.bT,b,0);B0(a.bK,b+1|0,0);}
function D7(a){if(X8(a.bT,a.bK)>0)return a.bK;return a.bT;}
function FB(a){if(X8(a.bT,a.bK)<0)return a.bK;return a.bT;}
function ADf(a,b){var c,d,e,f;c=D7(a);d=FB(a);e=c.N;if(e<=b){f=BD(b,d.N);if(f<=0)return BZ(b<=e?c.bf:0,f>=0?d.bf:(-1));}return null;}
function Dq(a){var b,c;b=a.bT;c=a.bK;return (b===c?1:c!==null&&Cf(b)===Cf(c)?(b.N==c.N&&b.bf==c.bf?1:0):0)?0:1;}
function Z_(a,b){var c,d;if(!Dq(a))return 0;c=D7(a);d=FB(a);return c.N<=b&&b<d.N?1:0;}
function Nz(){var a=this;C.call(a);a.eT=null;a.eU=0;a.dg=0;}
function M4(a,b){var c,d,e;c=a.eU;d=a.eT;if(c==d.data.length)a.eT=Dl(d,c+16|0);d=a.eT.data;e=a.eU;a.eU=e+1|0;d[e]=b;}
function XN(a){var b,c,d;b=a.dg;c=a.eU-1|0;if(b==c)a.dg=b-1|0;d=a.eT.data;a.eU=c;d[c]=null;}
function EW(){var a=this;C.call(a);a.bX=0;a.bY=null;a.eD=null;a.dN=0;a.c9=0;}
var AXh=0;var AXi=0;var AW_=0;function AB2(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.bY;j=i===b&&!i.ia?0:1;if(j){a.bY=b;Lk(b,e.cE,d);}i=a.bY;k=i===null?0:E4(i)<g?IQ(E4(a.bY),1024):IQ(g,1024)+1|0;l=k<=a.dN?0:1;if(l)a.dN=k;if(!(!j&&!l)){if(AXh){m=b.fB;$rt_globals.console.info("fMeasure"+m.data);AXh=0;}if(!AW_){i=c.br;b="alphabetic";i.textBaseline=b;}else{b=c.br;i="top";b.textBaseline=i;}a.c9=h/1024|0;while(true){i=a.eD;if(i.i>=a.dN)break;B2(i,CW(e));}k=0;while(k<a.dN){Ie(a,c,f,d,a.c9+k|0);k=k+1|0;}a.bY.ia=0;}if(!EF(a.eD)
&&h<=E4(a.bY)){k=h/1024|0;g=a.c9;if(k!=g){if(MP(k-g|0)>=a.dN){g=0;while(g<a.dN){Ie(a,c,f,d,k+g|0);g=g+1|0;}a.c9=k;}else{while(true){h=a.c9;if(h>=k)break;Ie(a,c,f,d,h+a.dN|0);a.c9=a.c9+1|0;}while(true){h=a.c9;if(h<=k)break;Ie(a,c,f,d,h-1|0);a.c9=a.c9-1|0;}}}}}
function Lj(b,c){return (c-E6(b)|0)/2|0;}
function TO(b,c){return Lj(b,c)+b.rb|0;}
function Ie(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;Ex(b);f=a.bY.fB;g=e*1024|0;h=Pc(a,g);if(h>=a.bY.o.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.bX;a:{while(true){l=a.bY;if(h>=l.o.data.length)break a;l=NF(l,h);m=!AW_?TO(d.data[l.cd],c):Lj(d.data[l.cd],c);n=d.data;o=f.data;CA(b,n[l.cd]);Ch(b,l.u,k,m);k=o[h]-j+a.bX;if(k>1024.0)break;h=h+1|0;}}CO(Bs(a.eD,e%a.dN|0),b);}
function ADh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(EF(a.eD))return;if(!a.dN)return;if(j>E4(a.bY))return;r=a.bY;s=r.em;t=r.o;u=j/1024|0;v=Pc(a,j);w= -a.bX|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Bs(a.eD,u%a.dN|0);bc=y[v];bd=bb[v]+a.bX|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Ba(bh,bd)-j|0;if(bf&&ba)bi=bi+a.bX|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:{if
(!bj){bk=!ba?a.bX:2*a.bX|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.bX:2*a.bX|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b9.jd;if(bc===m)bo=k.b9.qr;bp=B9(n);d:{while(Cd(bp)){if(CE(B_(bp),bc)){bj=1;break d;}}bj=0;}if(bj)bo=k.b9.oE;if(q!==null){y=q.lf;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=Vo(k.ds,k,z,q.fY);}if(!bn&&!bl){l.a=Ba(l.a,E4(a.bY));bk=j>=l.b?bi:(Ba(bd,bh)-l.b|0)-(!ba?a.bX:0)|0;bh=(j+bi|0)<=(l.a
+(!ba?a.bX:2*a.bX|0)|0)?0:(Ba(bd,bh)-l.a|0)-(!ba?a.bX:0)|0;bm=j-be|0;bl=w+c|0;bq=bm;bj=bi-bk|0;Cr(e,bq,0.0,bj,x);U(f,bj,i);IE(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Cr(e,bj-bh|0,0.0,bh,x);U(f,bh,i);z=bl+bi|0;IE(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);br=bj-bk|0;bj=bk-bh|0;Cr(e,br,0.0,bj,x);U(f,bj,i);IE(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Cr(e,j-be|0,0.0,bi,x);U(f,bi,i);IE(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=bg;}v=v+1|0;}}}
function IE(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bH!==0.0&&f.bl!==0.0){m=j.u6.data[g.cS];if(k)n=j.b9.k0;else{g=m.nG;if(g===null)g=j.b9.eq;if(l===null)l=BN(g);n=l;}g=m.nK;if(AXi)i=0.0;EJ(b,c,d,e,f,h,g,n,i);return;}return;}}
function Pc(a,b){var c,d,e,f,g,h,i;c=a.bY;d=c.fB;e=0;f=c.o.data.length;g=b;b=BD(e,f);if(b>0){c=new BH;Z(c);L(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BD(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function QE(a){a.bY=null;Kb(a.eD,new QF);Hy(a.eD);}
function ACv(a,b,c,d,e,f,g,h,i){var j,k;j=E4(a.bY);if(j)j=j+a.bX|0;if(!j)j=j-a.bX|0;k=Bc( -a.bX|0,j-g|0);if(k>=h)return;U(f,h-k|0,e);Bv(b,c+k|0,d,f,i);}
function AAJ(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=S(EW,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=B3(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.bY===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EW;f.bX=3;f.eD=CC();f.c9=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)QE(o);h=h+1|0;}return g;}
function ADo(){AW_=0;}
function ABO(){var a=this;C.call(a);a.e_=null;a.cV=null;a.d2=null;a.eE=null;a.hW=null;a.hV=null;}
function Hu(){var a=new ABO();AIC(a);return a;}
function AIC(a){a.e_=new Be;a.cV=new Be;a.d2=new Be;a.eE=new Be;a.hW=new B1;a.hV=new B1;}
function P2(a){var b;b=a.cV;return !W(b.b,b.a)?0:1;}
function I4(a,b){return F8(b,a.d2,a.eE);}
function Fh(a,b,c,d){var e,f,g,h,i;e=I4(a,b);f=F8(b,a.e_,a.cV);if(!e&&!f)return null;if(!f){if(!d)c.l(XQ(a,b.b-a.d2.b|0));else c.l(OK(a,b.a-a.d2.a|0));}g=!d?a.e_.b+(a.cV.b/2|0)|0:a.e_.a+(a.cV.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new NZ;b.tu=a;b.tw=c;b.tv=i;}else{b=new NX;b.qh=a;b.qg=c;b.qi=i;}return b;}
function Gk(a,b,c){if(b!==null&&c!==null){BE(a.hW,c);BE(a.hV,b);return;}}
function AEs(b,c){var d;d=new Uj;d.ri=b;d.mC=c;return d;}
function OK(a,b){var c,d,e;c=a.eE.a;d=a.cV.a;e=c-d|0;return AEs(Ba(Bc(0,b-(d/2|0)|0),e),e);}
function XQ(a,b){var c,d,e;c=a.eE.b;d=a.cV.b;e=c-d|0;return AEs(Ba(Bc(0,b-(d/2|0)|0),e),e);}
function II(a,b,c,d,e,f,g){N3(a,b,c,d,e,f,g,1);}
function MC(a,b,c,d,e,f,g){N3(a,b,c,d,e,f,g,0);}
function N3(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){U(a.eE,0,0);U(a.cV,0,0);}else{i=Ba(g*3|0,d);j=Bc(PY(d,d,e),i);e=e-d|0;i=d-j|0;i=i?PY(b,i,e):0;if(!h){k=a.e_;k.b=i+c|0;k.a=f-g|0;l=a.cV;l.b=j;l.a=g;l=a.d2;l.b=c;l.a=k.a;k=a.eE;k.b=d;k.a=g;}else{k=a.e_;k.b=f-g|0;k.a=i+c|0;l=a.cV;l.b=g;l.a=j;l=a.d2;l.b=k.b;l.a=c;k=a.eE;k.b=g;k.a=d;}}}
function Qd(a,b){FY(a,b);Gi(a,b);}
function FY(a,b){var c;c=a.d2;Bv(b,c.b,c.a,a.eE,a.hW);}
function Gi(a,b){var c,d;c=a.cV;c.b=c.b-2|0;c.a=c.a-2|0;d=a.e_;Bv(b,d.b+1|0,d.a+1|0,c,a.hV);b=a.cV;b.b=b.b+2|0;b.a=b.a+2|0;}
function Fq(a,b,c){return I4(a,b)&&Hl(c)?1:0;}
function ABP(){var a=this;C.call(a);a.xD=20;a.fa=null;a.eB=null;a.iD=null;a.kH=0;a.iC=0;a.jn=0.0;a.cy=null;a.lH=null;a.eN=null;a.fu=null;a.fG=0;}
function AB_(){var a=new ABP();ARs(a);return a;}
function ARs(a){a.xD=20;a.fa=new Be;a.eB=new Be;a.cy=CC();a.lH=DZ(0);}
function X6(a,b){var c,d,e,f,g;c=a.fG;if(b==c)return;d=a.cy.i;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bc(0,(c-1|0)/20|0);f=Bc(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){SU(a,b);a.fG=b;}else{if(a.fG>=b)while(true){if(g<f)break a;a.fG=Tq(Bs(a.cy,g%d|0),a.eN,a.fu,a.fG,b,e,a.jn);g=g+(-1)|0;}while(f<=g){a.fG=Tq(Bs(a.cy,f%d|0),a.eN,a.fu,a.fG,b,e,a.jn);f=f+1|0;}}}}
function Kn(a,b){if(b===null)b=DZ(0);a.lH=b;}
function Yl(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=B9(a.cy);while(Cd(f)){g=B_(f);h=a.fa;i=W(a.cy.i,a.iC);j=a.lH;k=g.eJ.a;l=((g.je.a-(b%i|0)|0)+i|0)%i|0;m=d.hc;n=b+l|0;o=g.M;n=n/o|0;p=l+k|0;q=BD(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(K7(g,j,q,i,d,m)){i=W((p-k|0)+1|0,g.M);U(g.dP,BM(g.bo),i);Cr(g.dZ,0.0,W(k,g.M),BM(g.bo),i);i=q;}else{r=Fw(d,j,q,m);E5(g,e,l+W(k,g.M)|0,h,m.e$,r);U(g.dP,BM(g.bo),g.M);Cr(g.dZ,0.0,W(p,g.M),BM(g.bo),g.M);k=p;}p=p+1|0;q=i;}r=Fw(d,j,q,m);E5(g,e,l+W(k,g.M)|
0,h,m.e$,r);}else{if(q>0&&l<c){o=Bc(c-l|0,0);k=g.M;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(K7(g,j,u,v,d,m)){o=W((t-s|0)+1|0,g.M);U(g.dP,BM(g.bo),o);Cr(g.dZ,0.0,W(s,g.M),BM(g.bo),o);v=u;}else{r=Fw(d,j,u,m);E5(g,e,l+W(s,g.M)|0,h,m.e$,r);U(g.dP,BM(g.bo),g.M);Cr(g.dZ,0.0,W(t,g.M),BM(g.bo),g.M);s=t;}t=t+1|0;u=v;}r=Fw(d,j,u,m);E5(g,e,l+W(s,g.M)|0,h,m.e$,r);}if(p>i){n=b/g.M|0;o=Ba(p%i|0,c);U(g.dP,BM(g.bo),g.M);k=b%C9(g.bo)|0;l=g.M;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(K7(g,
j,i,n+(o-k|0)|0,d,m)){l=W((o-s|0)+1|0,g.M);U(g.dP,BM(g.bo),l);Cr(g.dZ,0.0,W(s,g.M),BM(g.bo),l);}else{r=Fw(d,j,i,m);l=s-k|0;q=g.M;E5(g,e,W(l,q)-(b%q|0)|0,h,m.e$,r);i=(n+o|0)-k|0;U(g.dP,BM(g.bo),g.M);Cr(g.dZ,0.0,W(o,g.M),BM(g.bo),g.M);s=o;}o=o+1|0;}r=Fw(d,j,i,m);n=s-k|0;o=g.M;E5(g,e,W(n,o)-(b%o|0)|0,h,m.e$,r);}}}}
function J$(a,b,c,d){var e,f,g,h,i,j;e=a.cy.i;while(true){f=a.cy.i;g=W(f,a.iC);if(g>(d+a.kH|0))break;h=BZ(0,g);i=new Nq;g=a.eB.b;f=a.kH;j=a.iD;i.dP=new Be;i.dZ=new B1;i.je=h;i.dR=20;i.M=f;i.eJ=BZ(g,20*f|0);i.fU=TO(j,f);if(i.bo===null)i.bo=CW(b);B2(a.cy,i);}if(f==e)return;SU(a,c);}
function SU(a,b){var c,d,e,f,g,h,i,j;c=a.cy;d=c.i;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=B9(c);while(Cd(c)){f=B_(c);g=a.eN;h=a.jn;Ex(g);i=0;while(true){j=f.dR;if(i>=j)break;j=e-W(d,j)|0;if(j<b)j=e;e=j+1|0;F$(f,g,C7(e),W(f.M,i)+f.fU|0,h);i=i+1|0;}CO(f.bo,g);}}
function T4(a,b,c,d){var e;a.iD=b;a.kH=c;e=c*20|0;a.iC=e;b=CI(a.eN,CL(d,a.eB.b,e));a.eN=b;CA(b,a.iD);St(a.eN,2);b=CI(a.fu,CL(d,a.eB.b,c));a.fu=b;CA(b,a.iD);St(a.fu,2);}
function N7(a){Kb(a.cy,new Qr);Hy(a.cy);a.eN=CI(a.eN,null);a.fu=CI(a.fu,null);}
function VM(a,b,c,d,e){Ct(a.fa,b);U(a.eB,c,d);a.jn=e;}
var WA=G(0);
var Hx=G(0);
var EQ=G();
function EF(a){return a.i?0:1;}
function HS(a,b){var c,d,e,f,g,h;c=b.data;d=a.i;e=c.length;if(e<d)b=ACU(Ik(Cf(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B9(a);while(Cd(f)){g=b.data;h=e+1|0;g[e]=B_(f);e=h;}return b;}
var Sb=G(0);
var Jm=G(0);
function F7(){EQ.call(this);this.cw=0;}
function B9(a){var b;b=new NH;b.gO=a;b.mg=a.cw;b.iG=a.i;b.gd=(-1);return b;}
function Qy(a,b){var c,d;c=a.i;d=0;while(true){if(d>=c)return (-1);if(CE(b,Bs(a,d)))break;d=d+1|0;}return d;}
function AMP(a,b){var c,d;if(!IS(b,Jm))return 0;c=b;if(a.i!=c.i)return 0;d=0;while(d<c.i){if(!CE(Bs(a,d),Bs(c,d)))return 0;d=d+1|0;}return 1;}
var Lv=G(0);
function Zm(){var a=this;F7.call(a);a.ct=null;a.i=0;}
function CC(){var a=new Zm();AJg(a);return a;}
function AJg(a){a.ct=S(C,10);}
function Jv(a,b){var c,d;c=a.ct.data.length;if(c<b){d=c>=1073741823?2147483647:Bc(b,Bc(c*2|0,5));a.ct=Dl(a.ct,d);}}
function Bs(a,b){Jk(a,b);return a.ct.data[b];}
function B2(a,b){var c,d;Jv(a,a.i+1|0);c=a.ct.data;d=a.i;a.i=d+1|0;c[d]=b;a.cw=a.cw+1|0;return 1;}
function RJ(a,b,c){var d,e,f;Pv(a,b);Jv(a,a.i+1|0);d=a.i;e=d;while(e>b){f=a.ct.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ct.data[b]=c;a.i=d+1|0;a.cw=a.cw+1|0;}
function D8(a,b){var c,d,e,f;Jk(a,b);c=a.ct.data;d=c[b];e=a.i-1|0;a.i=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cw=a.cw+1|0;return d;}
function Wn(a,b){var c;c=Qy(a,b);if(c<0)return 0;D8(a,c);return 1;}
function Hy(a){ZH(a.ct,0,a.i,null);a.i=0;a.cw=a.cw+1|0;}
function Jk(a,b){var c;if(b>=0&&b<a.i)return;c=new BB;Z(c);L(c);}
function Pv(a,b){var c;if(b>=0&&b<=a.i)return;c=new BB;Z(c);L(c);}
function Kb(a,b){var c;c=0;while(c<a.i){b.l(a.ct.data[c]);c=c+1|0;}}
function U8(){C.call(this);this.yt=null;}
function U7(){C.call(this);this.rz=null;}
function APE(a,b){var c;c=a.rz;Fa(c,FO(b,IL(c)));}
function U3(){C.call(this);this.nX=null;}
function ANs(a,b){var c;c=a.nX;Ir(c,FO(b,QT(c)));}
function U2(){C.call(this);this.tJ=null;}
function APA(a){var b,c;b=a.tJ;c=b.id?0:1;b.id=c;b=new N;P(b);F6(H(b,B(236)),c);$rt_globals.console.info($rt_ustr(O(b)));}
function U5(){C.call(this);this.rY=null;}
function AKp(a){var b,c;b=a.rY;c=b.h3?0:1;b.h3=c;b=new N;P(b);F6(H(b,B(237)),c);$rt_globals.console.info($rt_ustr(O(b)));}
function U4(){C.call(this);this.og=null;}
function AMJ(a){var b,c;b=a.og;c=b.jB^1;b.jB=c;b=new N;P(b);F6(H(b,B(238)),c);$rt_globals.console.info($rt_ustr(O(b)));}
function Vu(){C.call(this);this.t7=null;}
function AOZ(a){var b,c,d,e,f;b=a.t7;c=(b.dJ+3|0)%6|0;b.dJ=c;d=b.gz.data;e=d.length;f=0;while(f<e){b=d[f];b.bX=c;b=b.bY;if(b!==null)b.ia=1;f=f+1|0;}}
function Vt(){C.call(this);this.qT=null;}
function AJ2(a){var b;b=a.qT;b.bO=b.bO?0:1;N7(b.cW);b.cW=AB_();Se(b,b.ba,b.cv,b.cs.bR);}
function Vv(){C.call(this);this.nF=null;}
function AFt(a){var b;b=a.nF;b.i1=b.i1?0:1;}
var Fs=G(Ck);
var AW9=null;var AXj=null;var AW$=null;var AXk=null;function AFG(){AFG=Bp(Fs);AMS();}
function ACf(a,b){var c=new Fs();AB5(c,a,b);return c;}
function AB5(a,b,c){AFG();Da(a,b,c);}
function AMS(){var b;AW9=ACf(B(239),0);AXj=ACf(B(240),1);b=ACf(B(241),2);AW$=b;AXk=I(Fs,[AW9,AXj,b]);}
function Kr(){C.call(this);this.xB=null;}
var AWt=null;var AXl=null;function AKN(){AKN=Bp(Kr);ASr();}
function AIz(a){var b=new Kr();YC(b,a);return b;}
function YC(a,b){AKN();a.xB=b;}
function ASr(){AWt=AIz(B(242));AXl=AIz(B(243));}
var UT=G(0);
function Hl(a){return DF(a,null);}
function UY(b){var c;c=new N0;c.nW=b;return c;}
function MM(){C.call(this);this.nE=null;}
function ALR(a){KT(a.nE);}
function MN(){C.call(this);this.qW=null;}
function AKi(a){J2(a.qW);}
var Ye=G(0);
var AXf=null;function ADM(){AXf=new NR;}
function Kj(){var a=this;C.call(a);a.C=null;a.da=null;a.ek=null;a.eI=null;a.gt=null;a.cC=0;a.gS=0;a.pO=0.0;}
function Oh(a){var b;b=TR(a);return ARy(ADc(Ob(0,b,0),null));}
function B3(a,b){return a.C.data[b];}
function Cy(a){return a.C.data.length;}
function TR(a){return Gb(a,Cy(a));}
function Fl(a,b){return a.C.data[b].T;}
function K$(a,b){var c,d,e,f,g,h,i;c=a.C.data;d=c[b];e=c[b+1|0];f=DS(LR(d.o,e.o));g=a.C;h=g.data.length;if(b<h&&b>=0){i=S(CB,h-1|0);c=i.data;Rr(g,b,i);c[b]=f;a.C=i;return;}d=new Bq;Z(d);L(d);}
function Pq(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.C.data;if(!(c<d[b].T?0:1)){d=(B3(a,b)).o.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.u)){f=M(h.u,g);break a;}g=g-J(h.u)|0;f=f+1|0;}f=0;}EO();h=new Bx;d=BQ(1);d.data[0]=f;Hs(h,d);Fp(a,b,c,1,h);h=a.C.data[b];i=h.o;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=J(d[j].u);if(c<b)break;c=c-b|0;j=j+1|0;}}if(J(d[j].u)==1)h.o=Rr(i,j,S(B7,e-1|0));else{k=d[j];if(c<=0)l=DG(Dk(k.u,1),k.cS,k.cd);else if(c>=(J(k.u)-1|0)){l=new B7;m=k.u;VF(l,Cb(m,0,J(m)-
1|0),k.cS,k.cd);}else{i=BQ(J(k.u)-1|0);n=i.data;b=0;while(b<c){n[b]=M(k.u,b);b=b+1|0;}b=n.length;while(c<b){m=k.u;e=c+1|0;n[c]=M(m,e);c=e;}l=DG(FX(i),k.cS,k.cd);}d[j]=l;}h.T=h.T-1|0;Ei(h);}else if(b!=(d.length-1|0)){Fp(a,b,c,1,B(194));K$(a,b);}}
function Yj(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){XB(a.C.data[b],c,e[0]);return;}g=f-1|0;h=IU(a.C.data[b],c);d=a.C;i=Dl(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.o.data;m=l.length;c=!m?0:J(l[m-1|0].u);JH(j,j.o.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fo(e[m]))j=DS(S(B7,0));else{j=new CB;l=S(B7,1);l.data[0]=DG(e[m],0,0);Ij(j,l);}d[b+m|0]=j;m=m+1|0;}JH(h[1],0,0,e[g]);d[b+g|0]=h[1];a.C
=i;}
function Wt(a,b){var c,d,e,f,g,h,i;c=D7(b);d=FB(b);e=c.N;if(e==d.N)return Cb(EM(a.C.data[e]),c.bf,d.bf);f=new N;P(f);b=a.C.data[c.N];e=c.bf;BG(BX(f,Dk(EM(b),e)),10);g=a.C.data;e=c.N+1|0;h=d.N;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;YP(BX(f,EM(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.C.data[d.N];h=d.bf;BX(f,Cb(EM(b),0,h));return O(f);}b=new W1;Z(b);L(b);}
function TT(a,b,c){var d;U6(a,b);d=D7(b);Fp(a,d.N,d.bf,1,c);}
function U6(a,b){var c,d,e,f,g,h,i;a:{c=D7(b);d=FB(b);e=c.N;if(e==d.N)FV(a.C.data[e],c.bf,d.bf);else{b=a.C.data[e];FV(b,c.bf,b.T);FV(a.C.data[d.N],0,d.bf);e=c.N+1|0;f=d.N;g=a.C;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=S(CB,(h-f|0)+e|0);AA2(g,e,f,i);a.C=i;K$(a,c.N);break a;}b=new Bq;Z(b);L(b);}b=new Bq;Z(b);L(b);}}}
function HU(a,b,c){return EU(b,G5(B3(a,b),c));}
function NL(a,b){var c,d,e;c=0;d=0;while(true){e=a.C.data.length;if(c>=e)break;if((d+(B3(a,c)).T|0)>=b)return BZ(c,b-d|0);d=d+((B3(a,c)).T+1|0)|0;c=c+1|0;}return BZ(e,0);}
function Gb(a,b){var c,d,e;c=0;d=a.C.data.length;e=0;while(e<b){c=c+Fl(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Kl(a,b){return Vc(B3(a,b.bz),b.bJ);}
function EH(a){var b,c,d,e,f,g,h,i,j;b=BQ(TR(a));c=b.data;d=a.C.data.length;e=0;f=0;while(e<d){g=a.C.data[e].o.data;h=g.length;i=0;while(i<h){j=g[i].u;PX(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Fp(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cC=a.cC+1|0;f=a.gt;g=S(G9,1);h=new G9;h.eV=b;h.fv=c;i=L7(e,B(194),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BZ(b,c+J(i[0])|0);break a;}k=BZ((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BZ(b,c);}i=g.data;h.k2=k;h.jR=d;h.g8=e;i[0]=h;B2(f,g);JR(a,b,c,d,e);}
function JR(a,b,c,d,e){var f;f=Gb(a,b)+c|0;if(!d)OL(a.da,f,J(e));else P5(a.da,f,J(e));}
function TL(a,b){var c,d,e;c=L7(b.g8,B(194),(-1));if(b.jR){Yj(a,b.eV,b.fv,c);OL(a.da,Gb(a,b.eV)+b.fv|0,J(b.g8));}else{c=c.data;d=ANR();B0(d.bT,b.eV,b.fv);e=c.length;if(e==1)B0(d.bK,b.eV,b.fv+J(c[0])|0);else B0(d.bK,(b.eV+e|0)-1|0,J(c[e-1|0]));U6(a,d);P5(a.da,Gb(a,b.eV)+b.fv|0,J(b.g8));}return b.k2;}
function PA(a){a.gS=a.cC;}
var E0=G();
function Ms(){E0.call(this);this.wA=null;}
function MQ(){E0.call(this);this.wJ=null;}
function Qm(){E0.call(this);this.xR=null;}
var G3=G(0);
var RI=G(0);
function Gp(){var a=this;C.call(a);a.N=0;a.bf=0;}
function B0(a,b,c){a.N=b;a.bf=c;}
function XG(a,b){a.N=b.N;a.bf=b.bf;}
function X8(a,b){var c;c=BD(a.N,b.N);if(c)return c;return BD(a.bf,b.bf);}
function Ju(){var a=this;C.call(a);a.ln=null;a.l9=null;}
function Je(a){return a.ln.bz;}
function LU(a){return a.ln.bJ;}
var Wv=G(0);
function Tg(){C.call(this);this.ht=null;}
function FK(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ht));}
function D_(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.ht));}
function AHW(a){var b,c;b=a.ht.byteLength;c=new N;P(c);H(V(H(c,B(244)),b),B(245));return O(c);}
var UV=G(0);
function Lb(){var a=this;C.call(a);a.gM=null;a.fe=null;a.l3=null;}
function ACo(a,b){var c=new Lb();AKI(c,a,b);return c;}
function AS0(a,b,c){var d=new Lb();N9(d,a,b,c);return d;}
function YN(b){var c,d,e,f,g,h,i;c=new Lb;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=S(Bx,0);else{f=S(Bx,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FE(e[h]);h=h+1|0;}}}else f=S(Bx,0);N9(c,d,b,f);return c;}
function AKI(a,b,c){N9(a,b,c,S(Bx,0));}
function N9(a,b,c,d){a.gM=b;a.fe=c;a.l3=d;}
function JL(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EB(a);e=new N;P(e);H(H(e,B(246)),d);$rt_globals.console.info($rt_ustr(O(e))+b);return 0;}
function EB(a){var b;b=a.gM;return FE(b!==null?b.name:a.fe.name);}
function AK$(a){var b,c,d,e,f;if(a.fe===null){b=a.l3;c=EB(a);d=Z4(b);e=new N;P(e);H(H(H(e,d),B(247)),c);c=O(e);}else{b=a.l3;c=EB(a);f=JL(a,a.fe.size);d=Z4(b);e=new N;P(e);V(H(H(H(H(e,d),B(247)),c),B(248)),f);c=O(e);}return c;}
function N0(){C.call(this);this.nW=null;}
function DF(a,b){Gx(a.nW,b);return 1;}
function ABz(){var a=this;ED.call(a);a.dy=0;a.ca=null;a.c5=0;a.vu=0.0;a.kQ=0;}
function KW(){var a=new ABz();AIs(a);return a;}
function AIs(a){var b;b=AEn(16);a.dy=0;a.ca=S(In,b);a.vu=0.75;Va(a);}
function AEn(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ku(a){var b;if(a.dy>0){a.dy=0;b=a.ca;ZH(b,0,b.data.length,null);a.c5=a.c5+1|0;}}
function Va(a){a.kQ=a.ca.data.length*a.vu|0;}
function NY(a,b){return Ts(a,b)===null?0:1;}
function DR(a,b){var c;c=Ts(a,b);if(c===null)return null;return c.dE;}
function Ts(a,b){var c,d;if(b===null)c=Sx(a);else{d=b.lU();c=Qk(a,b,d&(a.ca.data.length-1|0),d);}return c;}
function Qk(a,b,c,d){var e;e=a.ca.data[c];while(e!==null&&!(e.jb==d&&Za(b,e.dB))){e=e.cQ;}return e;}
function Sx(a){var b;b=a.ca.data[0];while(b!==null&&b.dB!==null){b=b.cQ;}return b;}
function Lg(a,b,c){var d,e,f;if(b===null){d=Sx(a);if(d===null){a.c5=a.c5+1|0;d=UZ(a,null,0,0);e=a.dy+1|0;a.dy=e;if(e>a.kQ)Vm(a);}}else{e=b.lU();f=e&(a.ca.data.length-1|0);d=Qk(a,b,f,e);if(d===null){a.c5=a.c5+1|0;d=UZ(a,b,f,e);e=a.dy+1|0;a.dy=e;if(e>a.kQ)Vm(a);}}b=d.dE;d.dE=c;return b;}
function UZ(a,b,c,d){var e,f,g;e=new In;f=null;e.dB=b;e.dE=f;e.jb=d;g=a.ca.data;e.cQ=g[c];g[c]=e;return e;}
function Vm(a){var b,c,d,e,f,g,h,i;b=a.ca.data.length;b=AEn(!b?1:b<<1);c=S(In,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ca.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.jb&f;i=h.cQ;h.cQ=d[b];d[b]=h;h=i;}e=e+1|0;}a.ca=c;Va(a);}
function Za(b,c){return b!==c&&!b.cG(c)?0:1;}
function CB(){var a=this;C.call(a);a.o=null;a.T=0;a.fB=null;a.em=null;a.du=null;a.g7=null;a.fT=0;a.ia=0;a.hJ=0;}
var AXm=0;var AXn=0;var AXb=0;function DS(a){var b=new CB();Ij(b,a);return b;}
function Ij(a,b){var c,d,e,f;c=b.data;a.o=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].u)|0;f=f+1|0;}a.T=d;Ei(a);}
function NF(a,b){return a.o.data[b];}
function G5(a,b){var c;c=IC(a,b);return c<=0?0:a.du.data[c-1|0];}
function IC(a,b){var c,d,e,f;c=a.o.data.length;if(!c)return (-1);if(!(a.du!==null&&!a.hJ)){WQ(a);d=0;e=0;f=a.o.data.length;while(d<f){e=e+J(a.o.data[d].u)|0;a.du.data[d]=e;d=d+1|0;}a.hJ=0;}d=Ul(a.du,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Vc(a,b){var c;c=a.o.data;if(!c.length)return null;return c[IC(a,b)];}
function FV(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.T){a.o=S(B7,0);Ei(a);a.T=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.o.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].u);i=J(a.o.data[f].u);j=BD(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.o.data[f];if(!b&&c==J(k.u)?1:0){g=a.o;a.o=Rr(g,e,S(B7,g.data.length-1|0));a.T=a.T-d|0;Ei(a);return;}a.o.data[e]=DG(Fe(Cb(k.u,0,b),Dk(k.u,c)),k.cS,k.cd);}else{g=a.o.data;l=g[e];m=g[f];if(b){if(b!=
J(l.u))a.o.data[e]=DG(Cb(l.u,0,b),l.cS,l.cd);e=e+1|0;}if(c==J(m.u))f=f+1|0;else if(c)a.o.data[f]=DG(Dk(m.u,c),m.cS,m.cd);g=a.o;a.o=AA2(g,e,f,S(B7,(g.data.length-f|0)+e|0));}a.T=a.T-d|0;Ei(a);}
function IU(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(CB,[DS(S(B7,0)),a]);if(b>=a.T)return I(CB,[a,DS(S(B7,0))]);c=a.o;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].u);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(CB,[DS(K5(c,0,S(B7,d))),DS(K5(c,d,S(B7,f-d|0)))]);h=e[d];e=K5(c,0,S(B7,d+1|0));i=e.data;j=K5(c,d,S(B7,f-d|0));c=j.data;i[d]=DG(Cb(h.u,0,b),h.cS,h.cd);c[0]=DG(Dk(h.u,b),h.cS,h.cd);return I(CB,[DS(e),DS(j)]);}
function XB(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.o.data;if(e>=f.length)break a;g=J(f[d].u);if(b<=g)break;b=b-g|0;d=e;}}JH(a,d,b,c);}
function JH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.o;f=e.data;g=f.length;if(!g){h=S(B7,1);h.data[0]=Sj(d);a.o=h;}else if(!b&&!c){i=S(B7,g+1|0);h=i.data;Dx(e,0,i,1,g);h[0]=Sj(d);a.o=i;}else{j=f[b];if(c<=0)k=DG(Fe(d,j.u),j.cS,j.cd);else if(c>=J(j.u))k=DG(Fe(j.u,d),j.cS,j.cd);else{l=J(d);m=l+c|0;n=J(j.u)-c|0;h=BQ(J(j.u)+l|0);i=h.data;o=0;while(o<c){i[o]=M(j.u,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=M(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=M(j.u,g+c|0);g=g+1|0;}k=DG(FX(h),j.cS,j.cd);}f[b]=k;}a.T=a.T+J(d)|0;Ei(a);}
function XC(a){var b,c,d,e,f,g;b=0;c=a.o.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mr(f)){if(M(f.u,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lk(a,b,c){var d,e,f,g,h,i,j;d=a.o.data.length;e=a.fB;if(!(e!==null&&e.data.length>=d)){a.fB=AFi(d);a.em=BV(d);a.fT=1;}WQ(a);if(!a.fT)AXn=AXn+1|0;else{f=0;g=0.0;AXm=AXm+1|0;h=0;while(h<d){i=c.data;j=a.o.data[h];f=f+J(j.u)|0;a.du.data[h]=f;CA(b,i[j.cd]);g=g+Er(b,j.u);a.fB.data[h]=g;a.em.data[h]=g+0.5|0;h=h+1|0;}a.T=f;a.fT=0;a.hJ=0;}}
function WQ(a){var b;b=a.du;if(!(b!==null&&b.data.length>=a.o.data.length)){a.du=BV(a.o.data.length);a.hJ=1;}}
function Ei(a){a.fT=1;a.ia=1;a.hJ=1;a.g7=null;}
function W9(a,b,c,d){var e,f,g,h,i,j,k;if(a.g7===null)a.g7=S($rt_arraycls($rt_intcls()),a.o.data.length);e=a.g7.data[d];if(e===null){e=c.data;f=a.o.data[d];CA(b,e[f.cd]);f=f.u;e=BV(J(f)-1|0);c=Gy(f);g=!d?0.0:a.fB.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new Bx;k=i+1|0;Mx(f,c,0,k);h[i]=g+Er(b,f)+0.5|0;i=k;}a.g7.data[d]=e;}return e;}
function G7(a,b,c,d){var e,f,g,h,i;if(a.o.data.length&&b){if(!(!a.fT&&a.em!==null))Lk(a,c,d);if(b>=a.T)return a.em.data[a.o.data.length-1|0];e=0;f=0;a:{while(true){g=a.o.data;if(f>=g.length)break a;h=e+J(g[f].u)|0;i=BD(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.em.data[f];}return (W9(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E4(a){var b,c,d;a:{b=a.o.data.length;if(b){c=a.em.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function GZ(a,b){var c;if(b>=a.T)return b+1|0;c=IC(a,b);return a.du.data[c];}
function EM(a){var b,c,d,e;b=new N;FZ(b,a.T);c=a.o.data;d=c.length;e=0;while(e<d){BX(b,c[e].u);e=e+1|0;}return O(b);}
function M3(b){var c,d,e,f;c=S(CB,1);d=c.data;e=new CB;f=S(B7,1);f.data[0]=Sj(b);Ij(e,f);d[0]=e;return c;}
function YS(){AXb=0;}
var NR=G();
function AR7(a){}
function B7(){var a=this;C.call(a);a.u=null;a.cS=0;a.cd=0;}
function Sj(a){var b=new B7();AQR(b,a);return b;}
function DG(a,b,c){var d=new B7();VF(d,a,b,c);return d;}
function AQR(a,b){VF(a,b,0,0);}
function VF(a,b,c,d){a.u=b;a.cS=c;a.cd=d;}
function Hp(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mr(a){return J(a.u);}
function Nr(){var a=this;C.call(a);a.dx=null;a.ei=0;}
var AXo=null;function ARy(a){var b=new Nr();AAf(b,a);return b;}
function AAf(a,b){a.ei=0;a.dx=b;}
function Vn(a,b){var c;if(b.e2)return b;b=B9(b.bu);while(true){if(!Cd(b))return null;c=Vn(a,B_(b));if(c!==null)break;}return c;}
function J1(a,b,c){var d,e,f,g;d=b.bZ;if(d.b1==c.b1&&d.b8==c.b8?1:0){d=B9(b.bu);while(Cd(d)){e=J1(a,B_(d),c);if(e!==null)return e;}return b;}b=B9(b.bu);while(true){if(!Cd(b))return null;d=B_(b);f=c.b1;g=c.b8;e=d.bZ;if(e.b1<=f&&g<=e.b8?1:0){e=J1(a,d,c);if(e!==null)break;}}return e;}
function MA(a,b,c){B2(c,b.bZ);b=B9(b.bu);while(Cd(b)){MA(a,B_(b),c);}}
function OL(a,b,c){a.ei=0;K2(a,a.dx,b,c);}
function K2(a,b,c,d){var e;if(C5(b)<c)return;a:{if(CY(b)>c){Mf(b,d);GB(b,d);b=B9(b.bu);while(Cd(b)){K2(a,B_(b),c,d);}}else{if(!Ln(b,c)){if(a.ei)break a;if(C5(b)!=c)break a;}GB(b,d);if(CY(b)==c&&a.ei)Mf(b,d);e=B9(b.bu);while(Cd(e)){K2(a,B_(e),c,d);}if(!a.ei){b.e2=1;a.ei=1;}}}}
function P5(a,b,c){a.ei=0;JV(a,a.dx,b,c);}
function JV(a,b,c,d){var e,f,g,h;if(C5(b)<c)return;e=CY(b);f=c+d|0;if(e>f){e= -d|0;Mf(b,e);GB(b,e);g=B9(b.bu);while(Cd(g)){JV(a,B_(g),c,d);}b.bu=XA(a,b.bu);}else{g=b.bZ;if(c<=g.b1&&g.b8<=f?1:0){if(b!==a.dx){LD(b,(-1));J9(b,(-1));}else{LD(b,0);J9(b,0);}Hy(b.bu);}else{e=Ln(b,c);f=Ln(b,f);if(e&&f)GB(b, -d|0);else if(e)J9(b,c);else{if(!f)return;LD(b,c);GB(b, -d|0);}h=B9(b.bu);while(Cd(h)){JV(a,B_(h),c,d);}b.bu=XA(a,b.bu);if(!a.ei){b.e2=1;a.ei=1;}}}}
function XA(a,b){var c,d,e,f,g,h,i,j,k,l;c=CC();d=null;e=AXo;f=b.ct;g=b.i;if(e===null)e=AVD;h=S(C,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}AAt(h,e);j=0;while(j<g){f.data[j]=i[j-0|0];j=j+1|0;}b.cw=b.cw+1|0;b=B9(b);while(Cd(b)){l=B_(b);if(CY(l)==C5(l))continue;if(!l.e2){if(d!==null){B2(c,d);d=null;}B2(c,l);}else if(d===null)d=l;else{e=ADc(Ob(Ba(CY(d),CY(l)),Bc(C5(d),C5(l)),d.bZ.ft),d.d_);e.e2=1;d=e;}}if(d!==null)B2(c,d);return c;}
function Xp(a,b,c,d){var e,f,g,h,i,j;if((C5(c)-CY(c)|0)<43)e=Cb(d,CY(c),C5(c));else{e=Cb(d,CY(c),CY(c)+20|0);f=Cb(d,C5(c)-20|0,C5(c));g=new N;P(g);H(H(H(g,e),B(167)),f);e=O(g);}e=Vx(e,B(194),B(249));f=By();g=Cz(c);h=new N;P(h);i=V(h,b);BG(i,32);g=H(i,g);BG(g,9);H(g,e);Br(f,O(h));c=B9(c.bu);j=b+1|0;while(Cd(c)){Xp(a,j,B_(c),d);}}
function AB9(){AXo=new OR;}
function AEq(){var a=this;C.call(a);a.b1=0;a.b8=0;a.ft=0;}
function Ob(a,b,c){var d=new AEq();AIx(d,a,b,c);return d;}
function AIx(a,b,c,d){a.b1=b;a.b8=c;a.ft=d;}
function AQb(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return a.b1==c.b1&&a.b8==c.b8&&a.ft==c.ft?1:0;}return 0;}
function AG5(a,b){var c;b=b;c=BD(a.b1,b.b1);if(!c)c=BD(b.b8,a.b8);return c;}
var OR=G();
function AMm(a,b,c){var d;b=b;c=c;b=b.bZ;c=c.bZ;d=BD(b.b1,c.b1);if(!d)d=BD(c.b8,b.b8);return d;}
function ADv(){var a=this;C.call(a);a.bZ=null;a.d_=null;a.bu=null;a.e2=0;}
function ADc(a,b){var c=new ADv();AHJ(c,a,b);return c;}
function AHJ(a,b,c){a.e2=0;a.bZ=b;a.d_=c;a.bu=CC();}
function MI(b){var c,d,e,f,g,h,i,j;c=BC(b);d=BC(b);e=BC(b);f=BC(b);g=Ob(c,d,e);h=ADc(g,null);i=0;while(i<f){j=MI(b);j.d_=h;B2(h.bu,j);i=i+1|0;}return h;}
function CY(a){return a.bZ.b1;}
function C5(a){return a.bZ.b8;}
function LD(a,b){a.bZ.b1=b;}
function J9(a,b){a.bZ.b8=b;}
function Mf(a,b){var c;c=a.bZ;c.b1=c.b1+b|0;}
function GB(a,b){var c;c=a.bZ;c.b8=c.b8+b|0;}
function Ln(a,b){return CY(a)<=b&&b<C5(a)?1:0;}
function AKf(a){var b,c,d,e,f;b=a.bZ;c=b.b1;d=b.b8;e=b.ft;b=new N;P(b);BG(b,40);BG(V(H(V(H(V(b,c),B(44)),d),B(44)),e),41);b=O(b);c=a.e2;f=new N;P(f);F6(H(H(f,b),B(44)),c);return O(f);}
function APn(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return CE(a.bZ,c.bZ)&&CE(a.bu,c.bu)?1:0;}return 0;}
function KX(){var a=this;K1.call(a);a.pc=null;a.nS=null;}
function Zj(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.pc;e=0;f=0;g=a.nS;a:{while(true){if((e+32|0)>f&&DQ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Ba(B6(b)+j|0,i.length);NE(b,d,j,f-j|0);e=0;}if(!DQ(c)){k=!DQ(b)&&e>=f?AWo:AWn;break a;}i=g.data;j=Ba(B6(c),i.length);l=new NP;l.mQ=b;l.p9=c;k=ABQ(a,d,e,f,g,0,j,l);e=l.tE;j=l.uV;if(k===null){if(!DQ(b)&&e>=f)k=AWo;else if(!DQ(c)&&e>=f)k=AWn;}Xm(c,g,0,j);if(k!==null)break;}}EG(b,b.W-(f-e|0)|0);return k;}
var Py=G(KX);
function ABQ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(LS(h,2))break a;i=AWn;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Me(l)){if((f+3|0)>g){j=j+(-1)|0;if(LS(h,3))break a;i=AWn;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CG(l)){i=D4(1);break a;}if
(j>=d){if(DQ(h.mQ))break a;i=AWo;break a;}c=j+1|0;m=k[j];if(!C6(m)){j=c+(-2)|0;i=D4(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(LS(h,4))break a;i=AWn;break a;}k=e.data;o=Ev(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.tE=j;h.uV=f;return i;}
var ID=G(D6);
var XT=G();
function AHI(a,b){return b.text();}
function XR(){var a=this;C.call(a);a.td=null;a.te=null;}
function AFx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.td;d=a.te;e=S(Bx,8);f=BQ(16);g=0;h=0;i=b.length;j=0;while(true){k=BD(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=HC(f,0,g);m=h+1|0;e=ADq(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=NM(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.l(ATm(Pn(e,h),AJQ(d)));}
var XS=G();
function AJH(a,b){AEm(b);}
function H2(){var a=this;C.call(a);a.b9=null;a.V=null;a.u6=null;a.hc=null;a.ds=null;a.pI=null;a.qL=null;a.tm=null;}
function AXp(a,b,c,d,e){var f=new H2();LY(f,a,b,c,d,e);return f;}
function Kq(){var b,c,d,e,f,g,h,i;b=new H2;c=new I8;d=new Hf;FN();JW(d,AXq);Ls(c,d,BJ(AW4),BJ(AXr),BJ(AXs),BJ(AW4),BJ(AXt),BJ(AXu),BJ(AXv),BJ(AXw),BJ(AXx),BJ(AXy));ACb();e=(AXz.gE()).data;f=e.length;g=S(IT,f);h=g.data;i=0;while(i<f){h[i]=e[i].lq;i=i+1|0;}LY(b,c,g,AA4(R(B(250)),R(B(251)),R(B(252)),R(B(253))),F0(),ADA(R(B(117)),R(B(118)),R(B(119)),R(B(254))));return b;}
function LY(a,b,c,d,e,f){var g;g=c.data;a.pI=ES(B(154),16.0);a.qL=ES(B(154),17.0);a.tm=ES(B(153),15.0);a.b9=b;a.u6=c;a.hc=d;if(g.length>=15){a.V=e;a.ds=f;return;}b=new BH;Z(b);L(b);}
var Hn=G(0);
function KH(){var a=this;C.call(a);a.dB=null;a.dE=null;}
function AH1(a,b){var c,d;if(a===b)return 1;if(!IS(b,Hn))return 0;a:{b:{c:{d:{c=b;b=a.dB;if(b!==null){if(!b.cG(c.dB))break c;else break d;}if(c.dB!==null)break c;}b=a.dE;if(b!==null){if(!b.cG(c.dE))break c;else break b;}if(c.dE===null)break b;}d=0;break a;}d=1;}return d;}
function In(){var a=this;KH.call(a);a.jb=0;a.cQ=null;}
function KD(){var a=this;CS.call(a);a.cL=null;a.gb=null;}
function AU4(a){var b=new KD();YD(b,a);return b;}
function YD(a,b){var c,d,e,f;Fi(a,b);c=AN7(a.t);a.gb=c;d=AEa(a.t,c);a.cL=d;Xh(a.t,d);Y(b.m.bv,a.gb);Y(b.m.di,a.gb);Y(b.m.bv,a.cL);c=b.m.b2;d=new Sn;d.oO=a;Y(c,d);c=b.m.b2;d=new HR;e=a.cL;BN(e);f=new Sr;f.uE=e;Su(d,b,f);Y(c,d);c=b.m.fE;d=a.cL;BN(d);e=new Sq;e.mx=d;Y(c,e);c=b.m.f6;d=new Sp;d.pN=a;Y(c,d);c=b.m.di;d=new So;d.vw=a;Y(c,d);b=b.m.ew;c=new Ss;c.nl=a;Y(b,c);LQ(a);}
function AHy(a,b){return K8(a.cL,b);}
function AKs(a){E9(a);Ml(a.cL);WB(a.gb);}
function AOr(a){return Mm(0);}
function AMW(a,b,c){G1(a,b,c);a.k8(b,c);}
function AAu(a,b,c){LO(a.cL,new Be,b,c);}
function AGq(a,b){BN(b);PW(a.gb,b);Ll(a.cL,b);}
function AEE(a,b){if(b.bk!=121)return 0;return 1;}
function Zq(a,b){var c,d,e;if(D1(a.t,a.cL)){c=a.gb;d=a.cL;e=new Ti;e.qY=a;KG(c,b,d,a,d,e);}return 1;}
function Y$(){var a=this;Cv.call(a);a.mb=null;a.lm=null;a.df=null;a.gy=null;a.fr=null;a.hk=null;a.vM=null;a.g$=null;a.rA=null;a.md=null;a.v5=null;a.w3=null;a.f7=null;a.jW=null;a.qJ=0;}
function AS_(a){var b=new Y$();ALU(b,a);return b;}
function ALU(a,b){var c,d,e,f,g,h,i;Em(a,b);c=(Kq()).b9.eq;a.mb=c;a.lm=ARu(c);a.df=Fg(0,0,300,300);a.gy=S2(0,0,3,3);a.fr=Fg(0,0,300,300);a.hk=ANl();d=S(Bx,4);e=d.data;e[0]=B(205);e[1]=B(188);e[2]=B(227);e[3]=B(226);a.vM=d;a.g$=S(IO,e.length);c=b.be;f=b.m.bv;g=new Ub;g.fp=a;Y(f,g);f=b.m.b2;g=new R0;g.vy=a;Y(f,g);f=b.m.ms;g=new RZ;g.oM=a;Y(f,g);f=b.m.fE;g=new R2;g.xu=a;Y(f,g);f=b.m.jH;g=new R1;g.vZ=a;Y(f,g);f=b.m.ew;g=new RY;g.wZ=a;Y(f,g);b=b.m.di;f=new RX;f.tG=a;Y(b,f);h=CL(a.bc.be,300,300);f=h.br;b="white";f.fillStyle
=b;b=h.br;f="white";b.strokeStyle=f;b=h.br;f=10.0;b.lineWidth=f;h.br.strokeRect(75.0,140.0,150.0,110.0);h.br.fillRect(130.0,190.0,40.0,60.0);h.br.beginPath();h.br.moveTo(50.0,140.0);h.br.lineTo(150.0,60.0);h.br.lineTo(250.0,140.0);h.br.closePath();h.br.stroke();F3(h,B(255),11.0);Lz(h,187,187,187);Px(a,B(256),h);b=CW(a.bc.be);CO(b,h);FQ(h);a.rA=b;Go(a.df,b);G$(a.df);BE(a.df.bw,a.mb);BE(a.df.bm,CN(204,120,50));b=CL(c,255,100);a.f7=b;F3(b,B(154),11.0);b=By();i=$rt_str(a.f7.br.font);g=new N;P(g);H(H(g,B(257)),i);Br(b,
O(g));Er(a.f7,B(258));Lz(a.f7,169,183,198);Px(a,B(258),a.f7);b=CW(c);a.md=b;CO(b,a.f7);Go(a.fr,a.md);G$(a.fr);Ge(a.fr,CM(255));HF(a.fr,a.mb);a.v5=CW(c);BE(a.gy.bw,a.lm);}
function Px(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function Xa(a,b){JG(Fy(),0.5+Fy()*0.5,0.5+Fy()*0.5,1.0,b.bm);}
function AFK(a,b){var c;a.qJ=a.qJ+1|0;c=b/5.0;JG(c-(c|0),1.0,1.0,1.0,a.gy.bm);return Tk(a.hk,b);}
function AIP(a){var b,c,d,e,f,g;b=a.bc.be;Fu(b,a.lm);c=a.g$.data;d=c.length;e=0;while(e<d){UP(c[e],b,0,0);e=e+1|0;}DH(a.df,b,a.rA,0,0,0.5);f=a.md;d=0;while(d<7){g=a.fr;DH(g,b,f,W(d,10+((10*g.s.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.w3;if(g!==null)Uu(a.gy,b,g,0,0,0.0);Vq(a.hk,b,new Be);N1(b,B(259));}
function APv(a,b,c){var d,e,f,g,h,i,j,k,l;d=By();e=Cz(b);f=new N;P(f);H(H(f,B(260)),e);Br(d,O(f));g=By();d=new N;P(d);Fk(H(d,B(261)),c);Br(g,O(d));h=B8(30.0,c);i=B8(10.0,c);j=0;while(true){k=a.g$.data;if(j>=k.length)break;l=1+j|0;k[j]=S2(W(i,l)+W(h,j)|0,h,h,h);Xa(a,a.g$.data[j]);j=l;}U(a.gy.z,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.df;g=d.z;h=b.b;d=d.s;U(g,(h-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fr;d.z.a=b.a-d.s.a|0;}
function Pa(a,b){var c,d,e,f,g;c=By();d=!b.hB?B(262):B(263);e=b.dO;f=b.bk;g=b.r5;b=new N;P(b);F6(H(V(H(H(H(b,d),e),B(264)),f),B(265)),g);Br(c,O(b));return 0;}
function Wy(){var a=this;CS.call(a);a.rL=null;a.dD=null;a.cK=null;a.ed=null;a.lD=null;}
function AQ1(a,b,c){var d;d=GU(a.t,a.lD);Ia(a.dD,d);Ia(a.cK,d);G4(a.dD,a.t);G4(a.cK,a.t);}
function NN(b){return Jc(b,AQr());}
function Jc(b,c){var d;d=P7();KC(d,KV(b,IH(c,25)),!b?null:Jc(b-1|0,c));KC(d,KV(b,IH(c,20)),!b?null:Jc(b-1|0,c));KC(d,KV(b,IH(c,15)),!b?null:Jc(b-1|0,c));KC(d,KV(b,IH(c,10)),!b?null:Jc(b-1|0,c));return Hv(d);}
function KV(b,c){var d;if(b){d=new N;P(d);H(H(V(d,b),B(36)),c);c=O(d);}return c;}
function KC(b,c,d){var e,f;e=new GC;f=JG(Fy(),1.0,1.0,1.0,new B1);Yc();Ht(e,f,AXA,AXB);if(d!==null)GO(b,c,e,d);else{d=new UD;d.tI=c;D9(b,c,e,d);}}
function AIg(a,b,c){var d,e;G1(a,b,c);b=a.t.cb;d=Ed(a.dD);e=Ed(a.cK);J8(a.dD,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);J8(a.cK,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AI4(a){var b,c,d,e,f,g,h,i;E9(a);b=a.bc.be;Cs(b,1);c=a.rL;d=a.t;e=d.cb;U(c.l0,e.b,B8(2.0,d.bR));U(c.kj,B8(2.0,d.bR),e.a);FN();f=AXx;g=d.cM;h=e.a/2|0;i=c.l0;Bv(g,0,h-(i.a/2|0)|0,i,f);g=d.cM;h=e.b/2|0;c=c.kj;Bv(g,h-(c.b/2|0)|0,0,c,f);JM(a.dD,a.t);JM(a.cK,a.t);IA(a.ed);Cs(b,0);}
function AON(a,b){var c,d,e;c=KA(a.ed,b);d=Ko(a.dD,b.h,a.t.cD);e=Ko(a.cK,b.h,a.t.cD);return !c&&!d&&!e?0:1;}
function AJa(a,b,c){return Js(a.ed,b,c);}
function AGT(a,b,c){return DM(a.ed);}
function AN4(a,b,c,d){var e,f,g;e=Jx(a.ed,b,c,d);f=Kh(a.dD,b.h,c,d);g=Kh(a.cK,b.h,c,d);return !e&&!f&&!g?0:1;}
function XO(){var a=this;CS.call(a);a.hn=null;a.ev=null;a.ie=null;a.kI=null;}
function AJd(a,b,c){if(b===0.0)X7(a);}
function AOp(a){var b;E9(a);b=a.bc.be;Jh(a.ev,b);IA(a.hn);}
function X7(a){var b,c,d,e,f,g,h;b=a.ie;if(b!==null){Ke(a.ev,b);J6(b);}b=(Kq()).V;c=AUS(a.t,new Wd);d=ES(B(153),14.0);e=AN9();f=0;while(f<300){g=C7(f);h=new Yx;h.st=B(266);h.ss=g;h.sr=B(267);Nh(e,B(266),g,B(267),h);f=f+1|0;}Wj(c,Q$(e));X$(c,b,d);g=AB6(a.t);h=ZL(c,a.t);QR(h,b.lZ,b.kn);LW(g,h);g.eo=b;IR(g,B(268),a.kI,2.0);a.ie=g;I7(a.ev,g);UR(a);}
function AHt(a,b,c){G1(a,b,c);Qa(a.ev,b,c);UR(a);}
function UR(a){var b,c,d;b=a.t.cb;Fn(a.ie,BZ((b.b*2|0)/10|0,(b.a*4|0)/10|0),BZ((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.ie;b=YA(c.R.q);d=new N;P(d);H(H(d,B(269)),b);IR(c,O(d),a.kI,2.0);}
function APC(a,b){return Ot(a.ev,b);}
function Yt(){var a=this;CS.call(a);a.ib=null;a.fN=null;a.fg=null;a.jz=null;a.oZ=null;a.iw=null;a.fV=null;a.fJ=null;a.ju=0;a.f8=0;}
function W5(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.fN.i>0){d=Fy();e=a.fN;f=d*(e.i-1|0)|0;e=D8(e,f);D8(a.fg,f);f=a.f8;g=e.s;a.f8=f-W(g.b,g.a)|0;It(a.ib,e.c7);}c=c+1|0;}}
function Ky(a,b){var c,d,e,f,g,h,i,j;c=IX(a.t);CA(c,a.jz);d=0;while(d<b){e=IH(a.iw,1+(Fy()*19.0|0)|0);f=AL9();g=f.c7;h=a.ib;BN(c);i=new RG;i.pf=c;BE(g,Ho(h,e,i));(Xj(Fy(),1.0,1.0,f.bw)).bH=0.5;h=f.z;g=f.c7;U(h,g.bn|0,g.bG|0);h=f.s;g=f.c7;U(h,g.bl|0,g.bH|0);B2(a.fg,e);B2(a.fN,f);j=a.f8;h=f.s;a.f8=j+W(h.b,h.a)|0;d=d+1|0;}a.fJ=Mh(a.ib);}
function AOY(a){var b,c,d,e,f,g,h,i;E9(a);b=a.bc.be;Cs(b,1);c=a.t.cM;if(a.fg.i){d=a.fJ;d=CL(c,d.b,d.a);CA(d,a.jz);e=a.jz.dA;Bv(c,0,0,a.fJ,a.oZ);f=0;while(f<a.fg.i){g=Bs(a.fN,f);h=Bs(a.fg,f);g=g.c7;Ch(d,h,g.bn,g.bG+e);f=f+1|0;}g=a.fV;if(!(g!==null&&BM(g)==a.fJ.b&&C9(a.fV)==a.fJ.a))a.fV=CI(a.fV,CW(c));CO(a.fV,d);FQ(d);i=0;while(i<a.fg.i){d=Bs(a.fN,i);Ge(d,CM(0));DH(d,c,a.fV,0,0,0.0);i=i+1|0;}}Cs(b,0);}
function AHU(a,b){var c,d;if(a.ju){c=a.fJ;d=Ba(W(c.b,c.a),2211840);if(a.f8/d<=0.7)Ky(a,Iv(a.iw,5));else W5(a,Iv(a.iw,5));}return a.ju;}
function Pp(){var a=this;Cv.call(a);a.d$=null;a.f2=null;a.gW=null;a.kW=null;a.d9=0;a.sh=0;a.uM=null;a.l2=0;a.u2=0;a.ti=null;a.oQ=null;}
function AF2(a){var b,c;b=a.d9;c=new N;P(c);V(H(c,B(270)),b);$rt_globals.console.info($rt_ustr(O(c)));Fu(a.d$,a.uM);II(a.gW,a.d9,0,Gc(a),5000,a.kW.b,20);Cs(a.d$,1);Qd(a.gW,a.d$);Cs(a.d$,0);b=a.d9;c=new N;P(c);V(H(c,B(270)),b);$rt_globals.console.info($rt_ustr(O(c)));X6(a.f2,a.d9/a.l2|0);Yl(a.f2,a.d9,Gc(a),a.oQ,a.d$);}
function AQJ(a,b,c){a.kW=b;VM(a.f2,BZ(0,0),50,Gc(a),c);J$(a.f2,a.d$,0,Gc(a));}
function P6(a){return 5000-Gc(a)|0;}
function Gc(a){return Ba(a.sh,a.kW.a);}
function Dc(){var a=this;Cv.call(a);a.lM=null;a.gG=null;a.v1=0.0;}
function AXC(a){var b=new Dc();Gr(b,a);return b;}
function Gr(a,b){Em(a,b);a.lM=Z5(0,0,64);a.gG=new Be;NG(b.bS,Id(Cf(a)));}
function Sy(a){Fu(a.bc.be,a.lM);}
function S6(a,b,c){Ct(a.gG,b);a.v1=c;}
var Rh=G(Dc);
var AEy=G(Dc);
function AUE(a){var b=new AEy();ANC(b,a);return b;}
function ANC(a,b){var c,d,e,f,g,h;Gr(a,b);c=b.bS;d=new RF;d.wr=a;e=S(C,1);e.data[0]=B(271);CQ(c,d,B(272),e);f=b.bS;g=new RE;g.ym=a;h=S(C,1);h.data[0]=ABg([1,2,3,4,5]);CQ(f,g,B(273),h);f=b.bS;g=new RD;g.oJ=a;h=S(C,1);h.data[0]=ATU([1,2,3,4,5]);CQ(f,g,B(274),h);f=b.bS;g=new RC;g.wc=a;h=S(C,1);h.data[0]=Ee([1,2,3,4,5]);CQ(f,g,B(275),h);f=b.m.b2;d=new HR;g=new RA;g.xg=a;c=new Rz;c.qt=a;VN(d,b,g,c);Y(f,d);}
function US(a,b){var c,d,e,f,g,h;c=b.data;d=By();e=Cz(c[0]);f=new N;P(f);H(H(f,B(276)),e);Br(d,O(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Sf(b,1)).ht));d=By();e=Cz(c[1]);if(b===null)f=B(29);else{f=new N;P(f);BX(f,B(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BX(f,B(44));V(f,c[g]);g=g+1|0;}BX(f,B(45));f=O(f);}h=new N;P(h);H(H(H(H(h,B(277)),e),B(278)),f);Br(d,O(h));}
function Xe(){var a=this;Dc.call(a);a.dT=null;a.e4=null;a.kw=null;a.pT=null;a.lC=null;}
function ALr(a,b){b=b/5.0;JG(b-(b|0),1.0,1.0,1.0,a.e4.bm);return 0;}
function AFC(a){Sy(a);DH(a.dT,a.bc.be,a.pT,0,0,0.5);Uu(a.e4,a.bc.be,a.kw,0,0,0.0);N1(a.bc.be,B(259));}
function AOm(a,b,c){var d,e,f;S6(a,b,c);U(a.e4.z,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.dT;e=d.z;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function SB(){var a=this;Dc.call(a);a.go=null;a.rX=null;a.j_=null;a.iy=null;a.hG=null;}
function ASc(a){var b,c,d,e,f,g;Sy(a);b=a.bc.be;c=a.iy;LI(b,c.b,c.a,a.hG);b=a.go;c=a.rX;d=a.gG;e=a.bc.be;f=0;while(true){g=0;while(true){DH(b,e,c,g,f,0.5);g=g+BM(c)|0;if(g>=d.b)break;}f=f+C9(c)|0;if(f>=d.a)break;}G2(a.bc.be);}
function AHk(a,b,c){S6(a,b,c);U(a.hG,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function OX(){var a=this;Cv.call(a);a.eh=null;a.j4=null;a.fo=null;a.b7=null;a.eL=0;a.hR=null;a.eM=0;a.w0=20;a.yF=11;a.wF=220;a.jl=null;a.xl=5000;a.gJ=0;a.fA=null;}
function ASf(a){var b,c,d,e,f,g,h;b=a.hR;c=a.eM;d=a.jl;II(b,c,0,d.a,5000,d.b,20);Cs(a.eh,1);Qd(a.hR,a.eh);if(a.b7===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.j4,C7(e),0.0,c);}b=CW(a.eh);a.b7=b;CO(b,a.j4);}if(a.eM<=a.eL)while(true){f=a.eL;if(f<=a.eM)break;a.eL=f-20|0;b=a.fo;g=a.gJ-1|0;a.gJ=g;Ch(b,C7(g),0.0,20.0);H8(a.b7,a.fo,0,a.eL%220|0);Ex(a.fo);}else while(a.eL<(a.eM-20|0)){b=a.fo;g=a.gJ+1|0;a.gJ=g;Ch(b,C7((g+11|0)-1|0),0.0,20.0);H8(a.b7,a.fo,0,a.eL%220|0);Ex(a.fo);a.eL=a.eL+20|0;}b=Fg(0,0,BM(a.b7),C9(a.b7));HL(b,
0,0,BM(a.b7),C9(a.b7));Ge(b,a.fA.data[0]);HF(b,a.fA.data[1]);DH(b,a.eh,a.b7,400,0,1.0);g=a.eM%220|0;f=Ba(C9(a.b7)-g|0,200);d=Fg(0,0,BM(a.b7),f);HL(d,0,g,BM(a.b7),f);Ge(d,a.fA.data[0]);HF(d,a.fA.data[1]);DH(d,a.eh,a.b7,0,0,1.0);h=Fg(0,f,BM(a.b7),(C9(a.b7)-f|0)-20|0);HL(h,0,0,BM(a.b7),(C9(a.b7)-f|0)-20|0);Ge(h,a.fA.data[1]);HF(h,a.fA.data[0]);DH(h,a.eh,a.b7,0,0,1.0);}
function AJy(a,b,c){Ct(a.jl,b);}
function AH0(a,b){return 0;}
function R9(a){return 5000-a.jl.a|0;}
function IJ(){Dc.call(this);this.dF=0;}
function Rw(a){var b,c;b=a.bc.bS;c=new Qt;c.mV=a;Q9(b,c,RS(a));}
function MK(a){var b,c,d,e;b=a.dF+1|0;a.dF=b;c=Id(F(IJ));d=new N;P(d);H(H(V(H(d,B(279)),b),B(36)),c);e=O(d);c=a.bc.bS;d=new Ux;d.p_=e;UI(c,e,d,RS(a));}
function RS(a){var b;b=new V7;b.oV=a;return b;}
function APp(a,b,c,d){a:{switch(c){case 0:break;case 2:MK(a);break a;default:break a;}Rw(a);}return 1;}
function Ql(){var a=this;Cv.call(a);a.nC=null;a.fi=null;a.lE=null;a.ic=null;}
function AR8(a){var b;b=a.bc.be;Fu(b,a.nC);DH(a.fi,b,a.lE,0,0,0.5);}
function AMr(a,b,c){var d,e,f;d=a.fi;e=d.z;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function F9(){var a=this;Cv.call(a);a.ol=null;a.b$=null;a.dH=null;a.cX=null;a.eA=null;a.d6=null;}
function Xg(a,b){var c,d;Em(a,b);a.ol=CM(20);a.b$=SA();a.dH=new Be;a.cX=new Be;a.eA=new Be;a.d6=new Be;c=b.m.b2;d=new Qu;d.x7=a;Y(c,d);Y(b.m.bv,a);b=a.b$.bw;FN();BE(b,AW4);BE(a.b$.bm,AW6);}
function AAV(a){var b,c,d;b=a.bc.be;Fu(b,a.ol);c=a.b$;d=c.z;Bv(b,d.b,d.a,c.s,c.bw);Cs(b,1);c=a.b$;d=c.z;Yz(b,d.b,d.a,c.s,a.dH,a.cX,a.eA,a.d6,c.bm);Cs(b,0);}
function AMc(a,b){return 0;}
var O8=G(F9);
function AM4(a,b,c){var d,e,f;d=a.b$;e=d.z;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);U(a.dH,0,0);U(a.cX,Ba(b.b,b.a),Ba(b.b,b.a));b=a.eA;d=a.dH;U(b,d.b,d.a+20|0);b=a.d6;d=a.cX;U(b,d.b,d.a+40|0);}
function AIq(a,b){var c,d,e;Ct(a.dH,b.h);b=a.cX;c=a.b$;d=c.z;e=d.b;c=c.s;U(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.eA;c=a.dH;U(b,c.b,c.a+20|0);b=a.d6;c=a.cX;U(b,c.b,c.a+40|0);return 0;}
function O9(){var a=this;F9.call(a);a.fn=null;a.fh=null;}
function AKo(a,b){var c;c=a.cX;b=b.h;c.a=b.a-50|0;a.d6.a=b.a+100|0;return 1;}
function AGU(a){var b,c,d,e,f,g,h;b=Bc(a.dH.b,a.eA.b);c=Ba(a.cX.b,a.d6.b);d=Ba(a.dH.a,a.cX.a)-50|0;e=Bc(a.eA.a,a.d6.a)+50|0;Gj(a.b$,b,d,c-b|0,e-d|0);AAV(a);f=a.b$.z.b-10|0;W2(a,a.bc.be,10,f,a.dH,a.eA);g=a.b$;h=g.z.b+g.s.b|0;W2(a,a.bc.be,h,f,a.cX,a.d6);}
function W2(a,b,c,d,e,f){var g;U(a.fn,c,a.b$.z.a);U(a.fh,d,e.a-a.b$.z.a|0);g=a.fn;Bv(b,g.b,g.a,a.fh,a.b$.bw);U(a.fn,c,e.a);U(a.fh,d,f.a-e.a|0);e=a.fn;Bv(b,e.b,e.a,a.fh,a.b$.bm);U(a.fn,c,f.a);e=a.fh;g=a.b$;U(e,d,(g.z.a+g.s.a|0)-f.a|0);e=a.fn;Bv(b,e.b,e.a,a.fh,a.b$.bw);}
function ALx(a,b,c){}
function WP(){var a=this;CS.call(a);a.gP=null;a.ea=null;a.jr=null;a.js=null;a.th=null;}
function AKA(a,b,c){if(b===0.0)NU(a);}
function ASv(a){var b;E9(a);b=a.bc.be;Jh(a.ea,b);IA(a.gP);}
function NU(a){W3(a,a.jr);W3(a,a.js);a.jr=Nb(a,0.5,0,B(280));a.js=Nb(a,1.0,1,B(281));I7(a.ea,a.jr);I7(a.ea,a.js);Xr(a);}
function W3(a,b){if(b!==null){Ke(a.ea,b);J6(b);}}
function Nb(a,b,c,d){var e,f,g;e=AB6(a.t);f=new Wm;g=new PJ;g.tk=a;g.tl=e;g.tj=d;T_(f);f.h5=new B1;f.lp=new Be;f.sq=g;f.p8=b;if(c)f=ZL(f,a.t);LW(e,f);e.eo=F0();return e;}
function AOF(a,b,c){G1(a,b,c);Qa(a.ea,b,c);Xr(a);}
function Xr(a){var b;b=a.t.cb;Fn(a.js,BZ((b.b*2|0)/10|0,(b.a*2|0)/10|0),BZ((b.b*7|0)/10|0,(b.a*7|0)/10|0));Fn(a.jr,BZ(b.b/10|0,b.a/10|0),BZ((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function ALm(a,b){return Ot(a.ea,b);}
var RB=G(KD);
function AKG(a){return Mm(1);}
function AMv(a,b,c){AAu(a,b,c);}
function I8(){var a=this;C.call(a);a.tB=null;a.eq=null;a.vo=null;a.yr=null;a.oB=null;a.k0=null;a.qr=null;a.oE=null;a.lT=null;a.mf=null;a.jd=null;}
function AXD(a,b,c,d,e,f,g,h,i,j,k){var l=new I8();Ls(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Ls(a,b,c,d,e,f,g,h,i,j,k,l){a.tB=b;a.eq=c;a.vo=d;a.yr=e;a.oB=f;a.k0=g;a.qr=h;a.oE=i;a.lT=j;a.mf=k;a.jd=l;}
var ACB=G(0);
function ZG(){var a=this;C.call(a);a.e$=null;a.hq=null;a.oW=null;a.uH=null;}
function AA4(a,b,c,d){var e=new ZG();AN_(e,a,b,c,d);return e;}
function AN_(a,b,c,d,e){a.e$=b;a.hq=c;a.oW=d;a.uH=e;}
function Ic(){var a=this;C.call(a);a.jm=null;a.il=null;a.nI=null;a.p0=null;a.bj=null;a.lZ=null;a.kn=null;}
function AXE(a,b,c,d,e,f,g){var h=new Ic();K_(h,a,b,c,d,e,f,g);return h;}
function K_(a,b,c,d,e,f,g,h){a.nI=b;a.p0=c;a.il=d;a.bj=e;a.jm=f;a.lZ=g;a.kn=h;}
function F0(){var b,c,d;b=new Ic;c=new HH;Yc();d=AXF;J4(c,d,AXG,AXH,AXI,AXJ,d);K_(b,c,ABX(),Zv(R(B(282)),R(B(115)),R(B(116))),ABX(),ZO(1,0.125),AXK,AXL);return b;}
function ADx(){var a=this;C.call(a);a.nd=null;a.s8=null;a.rG=null;a.qx=null;}
function ADA(a,b,c,d){var e=new ADx();AKE(e,a,b,c,d);return e;}
function AKE(a,b,c,d,e){a.nd=b;a.s8=c;a.rG=d;a.qx=e;}
function Vo(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.ds.s8;break a;case 3:if(c!=3){b=b.ds.qx;break a;}b=b.ds.rG;break a;default:b=b.b9.eq;break a;}b=b.ds.nd;}return b;}
function HG(a,b,c){return Vo(a,b,0,c);}
function Mv(){var a=this;C.call(a);a.i$=null;a.iv=null;}
function MG(a,b){var c;c=a.iv;a.iv=b;return c;}
function JA(){var a=this;Mv.call(a);a.bQ=null;a.b4=null;a.fz=0;a.fH=0;}
function JT(a){var b;b=K3(a);if(b==2){if(K3(a.b4)<0)a.b4=Nk(a.b4);return OU(a);}if(b!=(-2))return a;if(K3(a.bQ)>0)a.bQ=OU(a.bQ);return Nk(a);}
function K3(a){var b,c;b=a.b4;c=b===null?0:b.fz;b=a.bQ;return c-(b===null?0:b.fz)|0;}
function Nk(a){var b;b=a.bQ;a.bQ=b.b4;b.b4=a;El(a);El(b);return b;}
function OU(a){var b;b=a.b4;a.b4=b.bQ;b.bQ=a;El(a);El(b);return b;}
function El(a){var b,c,d;b=a.b4;c=b===null?0:b.fz;b=a.bQ;d=b===null?0:b.fz;a.fz=Bc(c,d)+1|0;a.fH=1;b=a.bQ;if(b!==null)a.fH=1+b.fH|0;b=a.b4;if(b!==null)a.fH=a.fH+b.fH|0;}
var AEe=G();
function AGI(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Pj;c=c.buffer;d.fy=c;d.ml=new $rt_globals.Int8Array(c);d.j5=new $rt_globals.Uint16Array(c);d.sQ=new $rt_globals.Int32Array(c);d.pw=new $rt_globals.Float32Array(c);d.pP=new $rt_globals.Float64Array(c);e=d.fy.byteLength;c=new N;P(c);V(H(c,B(283)),e);CH(O(c));e=b.callToCpp1();c=new N;P(c);V(H(c,B(284)),e);CH(O(c));f=b.callToCpp2();c=new N;P(c);Fk(H(c,B(285)),f);CH(O(c));c=M8(d,b.getC8String());g=new N;P(g);H(H(g,B(286)),c);CH(O(g));c
=Ne(d,b.getC16String());g=new N;P(g);H(H(g,B(287)),c);CH(O(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.fy,h,8));c=ACS(i);g=new N;P(g);H(H(g,B(288)),c);CH(O(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.fy,h,8));c=APM(j);g=new N;P(g);H(H(g,B(289)),c);CH(O(g));k=AAY(d,b.getCDoubleArray8(),8);l=ASx(k);c=new N;P(c);H(H(c,B(290)),l);CH(DW(c));l=ASk(b.getC8String(),B(291),d);c=LZ();H(H(c,B(292)),l);CH(DW(c));l=AMh(b.getC16String(),B(293),
d);c=LZ();H(H(c,B(294)),l);CH(DW(c));c=AOh(i,d,b.getCIntArray8(),Ee([11,22,33,44,55,66,77,88]));g=LZ();H(H(g,B(295)),c);CH(DW(g));c=AP3(j,d,b.getCFloatArray8(),100,Ee([111,222,333,444,555,666,777,888]));g=LZ();H(H(g,B(296)),c);CH(DW(g));b=AQj(k,d,b.getCDoubleArray8(),1000,Ee([1111,2222,3333,4444,5555,6666,7777,8888]));c=LZ();H(H(c,B(297)),b);CH(DW(c));}
function AP3(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(298);h=0;i=e;a:{while(h<g){if(Dg(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.pw[e>>>2|0]!==b[h])break a;h=h+1|0;}return B(299);}return B(300);}
function AQj(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return B(298);h=0;i=e;a:{while(h<g){if(Hm(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.pP[e>>>3|0]!==b[h])break a;h=h+1|0;}return B(299);}return B(300);}
function AOh(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return B(298);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.sQ[h>>>2|0]!=b[g])break a;g=g+1|0;}return B(299);}return B(300);}
function ASk(b,c,d){var e,f,g,h;e=M8(d,b);if(!Bn(c,e))return B(301);f=0;while(f<J(e)){g=M(e,f);h=b+f|0;if(g!=d.ml[h])return B(302);f=f+1|0;}return B(299);}
function AMh(b,c,d){var e,f,g,h;e=Ne(d,b);if(!Bn(c,e))return B(301);f=0;while(f<J(e)){g=M(e,f);h=b+(f*2|0)|0;if(g!=(d.j5[h>>>1|0]&65535))return B(302);f=f+1|0;}return B(299);}
function CH(b){Pg(B(2),b);}
function AK_(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Sn(){C.call(this);this.oO=null;}
function AMF(a,b){return AEE(a.oO,b);}
function Sr(){C.call(this);this.uE=null;}
function ARO(a,b){KN(a.uE,b);}
function Sq(){C.call(this);this.mx=null;}
function AMG(a,b,c){return GH(a.mx,b,c);}
function Sp(){C.call(this);this.pN=null;}
function ARw(a){var b,c;b=a.pN.cL;BN(b);c=new QS;c.nD=b;return c;}
function So(){C.call(this);this.vw=null;}
function AQV(a,b,c,d){return JO(a.vw.cL,c,d);}
function Ss(){C.call(this);this.nl=null;}
function AJL(a,b){b=b;return Zq(a.nl,b);}
function ADH(){IO.call(this);this.c7=null;}
function AL9(){var a=new ADH();AGD(a);return a;}
function Fg(a,b,c,d){var e=new ADH();AL8(e,a,b,c,d);return e;}
function AGD(a){Sw(a);a.c7=new B1;}
function AL8(a,b,c,d,e){Sw(a);a.c7=new B1;Gj(a,b,c,d,e);}
function G$(a){var b,c;b=a.s;c=a.c7;U(b,c.bl-c.bn|0,c.bH-c.bG|0);}
function Go(a,b){HL(a,0,0,BM(b),C9(b));}
function HL(a,b,c,d,e){Cr(a.c7,b,c,d,e);}
function DH(a,b,c,d,e,f){var g;g=a.z;EJ(b,g.b+d|0,g.a+e|0,a.s,a.c7,c,a.bm,a.bw,f);}
function Ge(a,b){BE(a.bm,b);}
function HF(a,b){BE(a.bw,b);}
function Ub(){C.call(this);this.fp=null;}
function AOy(a,b){var c,d,e,f,g,h,i;c=a.fp;d=c.jW;if(d!==null){e=c.df.z;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.jW=g;}d=b.h;f=d.b;c=c.gy;e=c.s;h=f-e.b|0;f=d.a-e.a|0;U(c.z,h,f);c=a.fp;d=c.bc.bS;b=b.h;f=0;a:{while(true){i=c.g$.data;if(f>=i.length)break;if(Et(i[f],b)){b=c.vM.data[f];break a;}f=f+1|0;}b=null;}Gx(d,b);return 1;}
function AP_(a,b,c,d){if(!c&&d==2){b=a.fp;Xa(b,b.df);}return 1;}
function AIM(a,b,c){var d,e;d=By();e=new N;P(e);V(H(e,B(303)),c);Br(d,O(e));if(!c){d=b.h;b=a.fp;b.jW=!Et(b.df,d)?null:d;P4(a.fp.hk,d.b,d.a);b=a.fp;SJ(b.hk,JB(b.bc.bS));}return AXe;}
function AIl(a,b,c){var d;b=By();d=new N;P(d);V(H(d,B(304)),c);Br(b,O(d));return 1;}
function R0(){C.call(this);this.vy=null;}
function AOs(a,b){return Pa(a.vy,b);}
function RZ(){C.call(this);this.oM=null;}
function AQ8(a,b){return Pa(a.oM,b);}
function R2(){C.call(this);this.xu=null;}
function ARF(a,b,c){var d,e;Br(By(),B(305));d=!c?B(306):B(28);e=new N;P(e);H(H(H(e,B(307)),d),B(308));WE(b,O(e));return 1;}
function R1(){C.call(this);this.vZ=null;}
function ARD(a){Br(By(),B(309));}
function RY(){C.call(this);this.wZ=null;}
function AMM(a,b){Br(By(),B(310));return 1;}
function RX(){C.call(this);this.tG=null;}
function AKn(a,b,c,d){var e,f,g;b=a.tG;e=( -d|0)/10|0;b=b.df;f=b.s;f.b=f.b+e|0;f.a=f.a+e|0;b=b.z;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function Hf(){var a=this;B1.call(a);a.gk=0;a.gn=0;a.gl=0;a.gm=0;}
function CM(a){var b=new Hf();ASa(b,a);return b;}
function CN(a,b,c){var d=new Hf();AId(d,a,b,c);return d;}
function R(a){var b=new Hf();AP6(b,a);return b;}
function Fv(a,b,c,d){var e=new Hf();QQ(e,a,b,c,d);return e;}
function BJ(a){var b=new Hf();JW(b,a);return b;}
function ASa(a,b){QQ(a,b,b,b,255);}
function AId(a,b,c,d){QQ(a,b,c,d,255);}
function AP6(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&M(b,0)==35){if(J(b)==4){a.gk=I$(M(b,1))*17|0;a.gn=I$(M(b,2))*17|0;a.gl=I$(M(b,3))*17|0;a.gm=255;}else{a.gk=LH(M(b,1),M(b,2));a.gn=LH(M(b,3),M(b,4));a.gl=LH(M(b,5),M(b,6));a.gm=J(b)!=9?255:LH(M(b,7),M(b,8));}HI(a.gk,a.gn,a.gl,a.gm,a);return;}}
function QQ(a,b,c,d,e){a.gk=b;a.gn=c;a.gl=d;a.gm=e;HI(b,c,d,e,a);}
function JW(a,b){a.gk=b.gk;a.gn=b.gn;a.gl=b.gl;a.gm=b.gm;BE(a,b);}
function I$(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LH(b,c){return (16*I$(b)|0)+I$(c)|0;}
function Vh(){var a=this;C.call(a);a.l0=null;a.kj=null;}
function Z2(){var a=this;C.call(a);a.fs=null;a.ci=null;a.es=null;a.gp=null;a.lx=null;a.cf=null;a.fO=null;a.cT=0;a.eY=0;a.lP=0;a.g4=0;a.fQ=0;a.jA=null;a.jV=null;a.to=null;}
function Zn(){var a=new Z2();ARG(a);return a;}
function ARG(a){a.ci=SA();a.es=new Be;a.gp=new Be;a.cf=AXM;a.g4=(-1);}
function K0(a,b){T6(a);a.cf=b;}
function Ia(a,b){a.fs=b;T6(a);}
function Ii(a,b){var c,d,e,f,g;a.lx=b.jm;c=b.bj.hI;BE(a.ci.bm,c);c=b.il.kh;BE(a.ci.bw,c);d=0;while(true){e=a.cf.data;if(d>=e.length)break;c=e[d];f=b.bj;c.jE=f;c=c.dr;g=f.lo;f=f.hI;BE(c.bm,g);BE(c.bw,f);d=d+1|0;}}
function TS(a){a.fO=CI(a.fO,null);U(a.es,0,0);a.cf=AXM;a.g4=(-1);To(a.ci);}
function G4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=IX(b);d=b.bR;BN(a.fs);CA(c,a.fs);e=Kc(a.fs,1.25);f=0;a.cT=B8(2.0,d);a.eY=B8(3.0,d);a.lP=B8(12.0,d);g=0;h=a.cf.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Q8(c,l.ky);n=a.lP;n=(n+m|0)+n|0;f=Bc(f,n);b=l.dr;l=b.z;l.b=g;l.a=0;l=b.s;l.b=n;l.a=e;Cr(b.c7,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.es;b.b=g;b.a=e;b=a.ci.s;n=a.fQ;if(!n){m=a.cT;m=(g+m|0)+W(m,a.cf.data.length)|0;}else m=(f+(a.cT*2|0)|0)+(a.eY*2|0)|0;b.b=m;if(!n)e=e+(a.cT*2|0)|0;else{n=a.cT;e=(W(e+n|0,a.cf.data.length)
+n|0)+(a.eY*2|0)|0;}b.a=e;}
function J8(a,b,c){var d,e,f,g,h,i,j;U(a.ci.z,b,c);d=a.cT+a.eY|0;e=a.cf.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dr;j=i.z;j.b=b+d|0;j.a=c+h|0;if(!a.fQ){if(!i.s.b)AEP();d=d+(i.s.b+a.cT|0)|0;}else{if(!i.s.a)AEP();h=h+(i.s.a+a.cT|0)|0;}g=g+1|0;}}
function AEP(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ed(a){var b,c;b=a.es;if(b.b&&b.a)return a.ci.s;c=new Bq;Bo(c,B(311));L(c);}
function T6(a){U(a.es,0,0);}
function JM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.cM;if(!a.cf.data.length)return;a:{if(a.fO!==null){d=a.es;if(W(d.b,d.a))break a;}d=a.es;if(!W(d.b,d.a))G4(a,b);d=a.es;e=d.b;f=d.a;if(!W(e,f))return;d=CL(c,e,f);CA(d,a.fs);g=Kc(a.fs,0.125);h=a.fs;i=h.dA;j=g+i-(i+h.et)/16.0;k=a.cf.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.ky,h.dr.c7.bn+a.lP,j);l=l+1|0;}h=CI(a.fO,CW(c));a.fO=h;CO(h,d);FQ(d);}if(!Mb(a.ci)){d=a.ci;ADP(c,d.s,d.z,d.bw,a.cT,a.gp);d=a.ci;h=d.s;m=d.z;d=d.bm;e=a.cT;n=a.gp;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bv(c,m.b+e|0,m.a+e|0,n,d);if(a.fQ){d=a.ci;AC2(c,d.s,d.z,0,0,Rv(a.lx,b.bR),a.lx.mk,a.gp);}}k=a.cf.data;l=k.length;o=0;while(o<l){DH(k[o].dr,c,a.fO,0,0,0.0);o=o+1|0;}b:{if(a.fQ){k=a.cf.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dr;m=a.gp;e=(a.ci.s.b-(a.cT*2|0)|0)-(a.eY*2|0)|0;b=h.s;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.z;Bv(c,d.b+b.b|0,d.a,m,h.bw);}o=o+1|0;}}}}
function Ko(a,b,c){var d,e,f,g,h,i;d=Et(a.ci,b);e=!d?(-1):Vj(a,b);f=a.g4;if(f!=e){if(f>=0){g=a.cf.data[f];NT(g,0);if(a.to!==null){f=a.g4;h=By();g=Cz(g);i=new N;P(i);H(H(V(H(i,B(312)),f),B(313)),g);Br(h,O(i));}}if(e>=0){h=a.cf.data[e];g=a.jV;if(g!==null)g.nY(b,e,h);NT(h,1);}a.g4=e;}return d&&Hl(c)?1:0;}
function Kh(a,b,c,d){var e,f;e=Vj(a,b);if(e>=0){f=a.cf.data[e];if(!MH(f))f.mr.p();}return 1;}
function Vj(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cf.data;if(c>=d.length)return (-1);e=d[c].dr;if(Et(e,b))return c;if(a.fQ){f=e.z;g=f.b;e=e.s;h=e.b;g=g+h|0;i=f.a;f=a.gp;f.b=(a.ci.s.b-(a.cT*2|0)|0)-h|0;f.a=e.a;if(Zz(b,g,i,f))break;}c=c+1|0;}return c;}
function S7(a){a.fQ=1;}
function TE(){C.call(this);this.tO=null;}
function AOX(a,b){var c;c=a.tO;if(b.bk==32)TS(c.cK);return 0;}
function TH(){C.call(this);this.so=null;}
function AFl(a,b){var c,d,e,f;b=b;c=a.so;Br(By(),B(314));if(!DM(c.ed)){d=c.ed;b=b.h;e=NN(4);f=new VG;f.yI=c;Gf(d,b,e,f);}return 1;}
function AEv(){var a=this;C.call(a);a.iK=null;a.h0=0.0;}
function ES(a,b){var c=new AEv();AFb(c,a,b);return c;}
function AFb(a,b,c){a.iK=b;a.h0=c;}
function ASE(a,b){if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){b=b;return a.h0===b.h0&&CE(a.iK,b.iK)?1:0;}return 0;}
var TG=G();
function AJ6(a){Br(By(),B(315));}
var TD=G();
function AQm(a){Br(By(),B(316));}
function C$(){var a=this;C.call(a);a.dr=null;a.mr=null;a.jE=null;a.im=null;a.jU=null;a.ky=null;}
function ACg(a,b,c){var d=new C$();La(d,a,b,c);return d;}
function AUG(a,b,c,d,e){var f=new C$();ABR(f,a,b,c,d,e);return f;}
function La(a,b,c,d){ABR(a,b,c,d,null,null);}
function ABR(a,b,c,d,e,f){var g;g=AL9();a.dr=g;a.ky=c;a.jE=d;a.jU=f;a.mr=b;BE(g.bm,d.lo);BE(a.dr.bw,d.hI);a.im=e;}
function MH(a){return a.im===null?0:1;}
function NT(a,b){BE(a.dr.bw,!b?a.jE.hI:a.jE.pQ);}
function ON(){C.call(this);this.v0=null;}
function AHi(a,b){return b.hB&&b.bk==32?1:0;}
function OO(){C.call(this);this.qB=null;}
function AQF(a,b){var c,d,e,f,g,h;b=b;c=a.qB;if(!DM(c.hn)){d=c.hn;b=b.h;e=S(C$,1);f=e.data;g=new C$;h=new VI;h.pE=c;La(g,h,B(317),d.hl.bj);f[0]=g;Gf(d,b,FU(e),AXf);}return 1;}
var ACu=G();
function AAG(b){var c,d;c=CL(b,250,64);F3(c,B(255),25.0);Lz(c,187,187,187);Ch(c,B(318),0.0,24.0);Ch(c,B(318),0.25,56.0);d=CW(b);CO(d,c);FQ(c);return d;}
function Zl(b){var c;c=new Wk;c.gL=b;return c;}
function OP(){C.call(this);this.t4=null;}
function ANB(a,b,c,d){return Lh(a.t4,b,c,d);}
function AEg(){var a=this;C.call(a);a.lL=0;a.lN=0;}
function AQr(){var a=new AEg();ARf(a);return a;}
function ARf(a){var b,c;b=AD3(Gg((ACX())));c=Gg((ACX()))^(-559038737);a.lL=b;a.lN=c;c=0;while(c<19){R3(a);c=c+1|0;}}
function R3(a){var b,c;b=a.lL;c=a.lN;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.lL=c;a.lN=b;return b;}
function AD3(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function Iv(a,b){return 5.960464477539063E-8*(R3(a)&16777215)*b|0;}
function Up(){C.call(this);this.mO=null;}
function ANe(a,b,c){var d;d=a.mO;if(b===0.0)Ky(d,100);}
function Uq(){C.call(this);this.qv=null;}
function AFq(a,b){var c,d,e;c=a.qv;d=b.bk;if(d==32){c.ju=c.ju?0:1;e=1;}else if(d==13){Ky(c,1);e=1;}else if(d!=8)e=0;else{W5(c,1);e=1;}return e;}
var Ny=G(0);
function AEV(b,c){var d;d=new VE;d.vz=b;d.vA=c;return d;}
function ADE(){var a=this;C.call(a);a.fP=null;a.f$=0;a.iT=0;a.f9=0;}
function AEt(a){var b=new ADE();AJf(b,a);return b;}
function AJf(a,b){a.fP=CC();a.f9=0;a.iT=2048;a.f$=b;}
function Ho(a,b,c){var d,e,f,g,h,i,j;d=c.q$(b);e=a.iT;if(d>e){c=new Bq;f=new N;P(f);BG(V(H(V(H(f,B(319)),d),B(320)),e),41);Bo(c,O(f));L(c);}if(!a.f$){b=new BH;Bo(b,B(321));L(b);}a:{b=new B1;if(d){b:{c=a.fP;if(c.i>0){c=B9(c);g=d;while(true){if(!Cd(c))break b;f=B_(c);if(f.bl>=g)break;}Cr(b,f.bn,f.bG,g,a.f$);f.bn=f.bn+g;h=f.bl-g;f.bl=h;if(h===0.0)Wn(a.fP,f);break a;}}g=a.f9;i=d;Cr(b,0.0,g,i,a.f$);c=a.fP;f=new B1;h=a.f9;g=a.iT-d|0;j=a.f$;f.bn=i;f.bG=h;f.bl=g;f.bH=j;B2(c,f);a.f9=a.f9+a.f$|0;}}return b;}
function It(a,b){var c,d,e,f,g,h,i;a:{c=ARu(b);b=a.fP;if(b.i>0){d=B9(b);while(true){if(!Cd(d))break a;e=B_(d);if(e.bG===c.bG){f=e.bn;g=e.bl;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bl=c.bl+g;Q7(d);}else{h=c.bl;if(i+h===f){c.bl=h+g;Q7(d);}}}}}}B2(a.fP,c);}
function Mh(a){return BZ(a.iT,a.f9);}
function WO(){var a=this;C.call(a);a.rp=null;a.iX=null;}
function AHd(a,b,c){if(c)return AXe;return Fh(a.iX.gW,b.h,a.rp,1);}
function AOI(a,b,c){return 1;}
function AIG(a,b){var c;c=a.iX;return Fq(c.gW,b.h,c.ti);}
function Ta(){C.call(this);this.n_=null;}
function AHZ(a,b,c,d){var e,f;b=a.n_;e=(MP(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.d9=Ba(Bc(0,b.d9+W(e,f)|0),P6(b));return 1;}
function Qi(){C.call(this);this.uP=null;}
function APs(a,b){var c,d,e;c=a.uP;if(b.ck&&b.bk==79){if(!b.bI){b=c.bc.bS;d=new SD;d.uY=c;L1(b,d);}else{b=c.bc.bS;d=new SC;d.xe=c;Wq(b,d);}e=1;}else e=0;return e;}
function RF(){C.call(this);this.wr=null;}
function AFX(a,b){var c,d,e,f;c=b.data;b=By();d=Cz(c[0]);e=new N;P(e);H(H(e,B(276)),d);Br(b,O(e));b=By();f=c[1];d=new N;P(d);H(H(d,B(322)),f);Br(b,O(d));}
function RE(){C.call(this);this.ym=null;}
function ASj(a,b){var c,d,e,f,g,h,i;c=b.data;d=By();e=Cz(c[0]);f=new N;P(f);H(H(f,B(276)),e);Br(d,O(f));g=FK(Sf(b,1));b=By();d=Cz(c[1]);if(g===null)c=B(29);else{c=new N;P(c);BX(c,B(43));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BX(c,B(44));BG(c,i[h]);h=h+1|0;}BX(c,B(45));c=O(c);}e=new N;P(e);H(H(H(H(e,B(323)),d),B(324)),c);Br(b,O(e));}
function RD(){C.call(this);this.oJ=null;}
function AIi(a,b){US(a.oJ,b);}
function RC(){C.call(this);this.wc=null;}
function ANu(a,b){var c,d,e,f,g;c=b.data;d=By();e=Cz(c[0]);f=new N;P(f);H(H(f,B(276)),e);Br(d,O(f));g=D_(Sf(b,1));b=By();d=Cz(c[1]);c=ACS(g);e=new N;P(e);H(H(H(H(e,B(325)),d),B(326)),c);Br(b,O(e));}
function RA(){C.call(this);this.xg=null;}
function AMz(a,b){var c,d;c=EY();b=Cz(b);d=new N;P(d);H(H(d,B(327)),b);Br(c,O(d));b=new Gl;Z(b);L(b);}
function Rz(){C.call(this);this.qt=null;}
function AOG(a,b){var c,d,e,f;c=a.qt;d=c.bc.bS;e=new Og;e.rE=c;f=S(C,1);f.data[0]=b;CQ(d,e,B(328),f);}
function Ua(){C.call(this);this.lb=null;}
function AQH(a,b){var c,d,e,f,g,h;c=a.lb;d=c.lC;if(d!==null){e=c.dT.z;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.lC=g;}b=b.h;f=b.b;c=c.e4;d=c.s;f=f-d.b|0;h=b.a-d.a|0;U(c.z,f,h);return 1;}
function AME(a,b,c){var d;if(!c){d=b.h;b=a.lb;if(!Et(b.dT,d))d=null;b.lC=d;}return AXe;}
var C1=G(0);
var AXq=null;var AW6=null;var AXr=null;var AW4=null;var AXt=null;var AXs=null;var AXv=null;var AXu=null;var AXx=null;var AXw=null;var AXy=null;function FN(){FN=Bp(C1);AJA();}
function AJA(){AXq=CM(187);AW6=R(B(329));AXr=CM(55);AW4=CM(43);AXt=CN(33,66,131);AXs=CN(60,63,65);AXv=R(B(330));AXu=R(B(331));AXx=Fv(85,85,85,128);AXw=Fv(43,43,43,0);AXy=R(B(253));}
function Uz(){var a=this;C.call(a);a.p$=null;a.jv=null;}
function ANJ(a,b,c){var d;if(!c){d=Fh(a.jv.hR,b.h,a.p$,1);if(d!==null)return d;}return AXe;}
function AHe(a,b,c){return 1;}
function AF9(a,b){var c;c=a.jv;return Fq(c.hR,b.h,UY(c.bc.bS));}
function N5(){C.call(this);this.t8=null;}
function AF1(a,b,c,d){var e,f;b=a.t8;e=(MP(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eM=Ba(Bc(0,b.eM+W(e,f)|0),R9(b));return 1;}
function SO(){C.call(this);this.r6=null;}
function AQM(a,b){var c,d;a:{c=a.r6;switch(b.bk){case 67:MK(c);d=1;break a;case 86:Rw(c);d=1;break a;default:}d=0;}return d;}
var SN=G();
function AIH(a,b,c){return 0;}
function SL(){C.call(this);this.pG=null;}
function AQa(a,b,c){var d,e;d=a.pG;c=d.dF+1|0;d.dF=c;d=Id(F(IJ));e=new N;P(e);H(H(V(e,c),B(332)),d);e=O(e);$rt_globals.console.info($rt_ustr(e));WE(b,e);return 1;}
var SK=G();
function AN3(a){return null;}
function SM(){C.call(this);this.nt=null;}
function AG7(a){var b,c;b=a.nt;c=new P_;c.sc=b;return c;}
function Sh(){C.call(this);this.ya=null;}
function AIO(a,b){return 0;}
function QI(){C.call(this);this.x8=null;}
function AJl(a,b){return b.hB&&b.bk==32?1:0;}
function QJ(){C.call(this);this.qE=null;}
function AFr(a,b){var c,d,e,f,g,h;b=b;c=a.qE;if(!DM(c.gP)){d=c.gP;b=b.h;e=S(C$,1);f=e.data;g=new C$;h=new RL;h.mU=c;La(g,h,B(317),d.hl.bj);f[0]=g;Gf(d,b,FU(e),AXf);}return 1;}
function QK(){C.call(this);this.r8=null;}
function AO5(a,b,c,d){return Lh(a.r8,b,c,d);}
function ABo(){var a=this;C.call(a);a.hX=null;a.k$=null;a.fm=null;a.yE=null;}
function AJQ(a){var b=new ABo();AQL(b,a);return b;}
function AU1(a,b,c,d){var e=new ABo();ABU(e,a,b,c,d);return e;}
function AQL(a,b){ABU(a,null,null,b,null);}
function ABU(a,b,c,d,e){a.hX=b;a.k$=c;a.fm=d;a.yE=e;}
function ARi(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return CE(a.hX,c.hX)&&CE(a.k$,c.k$)&&CE(a.fm,c.fm)?1:0;}return 0;}
var CZ=G(0);
var AWu=null;var AXN=null;var AWw=null;var AWv=null;var AWy=null;var AWx=null;var AWA=null;var AWz=null;var AWC=null;var AWB=null;var AWD=null;function ANk(){ANk=Bp(CZ);AMk();}
function AMk(){AWu=CM(206);AXN=R(B(333));AWw=R(B(334));AWv=R(B(111));AWy=R(B(335));AWx=R(B(336));AWA=R(B(337));AWz=R(B(338));AWC=Fv(107,106,107,128);AWB=Fv(30,31,34,0);AWD=R(B(113));}
function Cc(){Ck.call(this);this.kF=null;}
var AXO=null;var AXP=null;var AXQ=null;var AXR=null;var AXS=null;var AXT=null;var AXU=null;var AXV=null;var AXW=null;var AXX=null;var AXY=null;var AXZ=null;var AX0=null;var AX1=null;var AX2=null;var AWE=null;function ABK(){ABK=Bp(Cc);AGR();}
function Dz(a,b,c){var d=new Cc();XD(d,a,b,c);return d;}
function ATl(a,b,c,d){var e=new Cc();QO(e,a,b,c,d);return e;}
function XD(a,b,c,d){ABK();Da(a,b,c);a.kF=Iy(d,null);}
function QO(a,b,c,d,e){ABK();Da(a,b,c);a.kF=Iy(d,e);}
function AGR(){var b,c;b=new Cc;ANk();XD(b,B(339),0,AXN);AXO=b;AXP=Dz(B(340),1,R(B(341)));AXQ=Dz(B(342),2,R(B(343)));AXR=Dz(B(48),3,R(B(344)));AXS=Dz(B(345),4,AXN);AXT=Dz(B(346),5,R(B(347)));AXU=Dz(B(348),6,R(B(349)));AXV=Dz(B(49),7,R(B(350)));AXW=Dz(B(351),8,R(B(352)));c=new Cc;FN();QO(c,B(353),9,AW6,R(B(337)));AXX=c;AXY=ATl(B(354),10,AW6,R(B(114)));AXZ=Dz(B(355),11,R(B(356)));AX0=Dz(B(357),12,R(B(358)));AX1=Dz(B(359),13,AXN);b=Dz(B(360),14,R(B(361)));AX2=b;AWE=I(Cc,[AXO,AXP,AXQ,AXR,AXS,AXT,AXU,AXV,AXW,AXX,
AXY,AXZ,AX0,AX1,b]);}
function IT(){var a=this;C.call(a);a.nK=null;a.nG=null;}
function Iy(a,b){var c=new IT();ALN(c,a,b);return c;}
function ALN(a,b,c){a.nK=b;a.nG=c;}
function HH(){var a=this;C.call(a);a.vI=null;a.pF=null;a.u0=null;a.r4=null;a.ql=null;a.ji=null;}
function AX3(a,b,c,d,e,f){var g=new HH();J4(g,a,b,c,d,e,f);return g;}
function J4(a,b,c,d,e,f,g){a.vI=b;a.pF=c;a.u0=d;a.r4=e;a.ql=f;a.ji=g;}
function ADa(){var a=this;C.call(a);a.kh=null;a.rf=null;a.qk=null;}
function Zv(a,b,c){var d=new ADa();AOL(d,a,b,c);return d;}
function AOL(a,b,c,d){a.kh=b;a.rf=c;a.qk=d;}
function GC(){var a=this;C.call(a);a.lo=null;a.hI=null;a.pQ=null;}
function AX4(a,b,c){var d=new GC();Ht(d,a,b,c);return d;}
function Ht(a,b,c,d){a.lo=b;a.hI=c;a.pQ=d;}
function ABX(){var b,c;b=new GC;c=R(B(362));Yc();Ht(b,c,AXA,AXB);return b;}
function AAU(){var b,c;b=new GC;c=R(B(116));AKb();Ht(b,c,AX5,AX6);return b;}
function Zd(){var b,c;b=new GC;AB3();c=AX7;AO9();Ht(b,c,AX8,AX9);return b;}
function AE1(){var a=this;C.call(a);a.mk=null;a.rB=0;}
function ZO(a,b){var c=new AE1();AR3(c,a,b);return c;}
function AR3(a,b,c){var d;d=new B1;a.mk=d;a.rB=b;d.bH=c;}
function Rv(a,b){return B8(a.rB,b);}
var DV=G(0);
var AWI=null;var AWJ=null;var AWF=null;var AWG=null;var AWH=null;var AX5=null;var AX6=null;var AWK=null;var AWL=null;function AKb(){AKb=Bp(DV);ANv();}
function ANv(){AWI=R(B(336));AWJ=R(B(363));AWF=R(B(116));AWG=R(B(349));AWH=R(B(333));AX5=R(B(336));AX6=R(B(364));AWK=R(B(365));AWL=CN(43,45,48);}
var OV=G(0);
var Ph=G();
function AJr(a,b,c){var d,e;d=b;e=c;b=new N;P(b);V(H(V(H(b,B(366)),d),B(367)),e);CH(O(b));return d+e|0;}
var OW=G(0);
var Pf=G();
function AKF(a,b,c){var d,e;d=b;e=c;b=new N;P(b);Fk(H(Fk(H(b,B(368)),d),B(367)),e);CH(O(b));return d+e;}
var ZV=G();
var YY=G(0);
function Jz(){var a=this;C.call(a);a.d7=null;a.e3=null;a.fD=null;}
var AWc=0;function ACM(a){var b;b=a.e3;if(b!==null){AWc=AWc-1|0;a.d7.dt.deleteTexture(b);a.e3=null;}}
function BM(a){return a.fD.b;}
function C9(a){return a.fD.a;}
function T3(a,b,c,d){var e;e=a.fD;e.b=b;e.a=c;L8(a);a.d7.dt.texStorage2D(3553,1,d,b,c);e=a.d7.dt;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function L8(a){var b,c;b=a.d7.dt;c=a.e3;b.bindTexture(3553,c);}
function CO(a,b){Nn(a,b.lO,b.kX,32856);PZ(a,b,0,0);}
function Nn(a,b,c,d){var e,f,g,h;a:{e=a.fD;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){L8(a);break a;}e=a.d7.dt;h=a.e3;e.deleteTexture(h);a.e3=a.d7.dt.createTexture();T3(a,b,c,d);break a;}}T3(a,b,c,d);}}
function H8(a,b,c,d){L8(a);PZ(a,b,c,d);}
function PZ(a,b,c,d){var e;e=a.d7.dt;b=b.jN;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function T7(){C.call(this);this.kg=null;}
var AXM=null;function P7(){var a=new T7();ABc(a);return a;}
function ABc(a){a.kg=CC();}
function D9(a,b,c,d){PM(a,ACg(d,b,c));}
function D$(b,c,d){return ACg(d,b,c);}
function GO(a,b,c,d){JK(a,b,c,d,null);}
function JK(a,b,c,d,e){PM(a,AUG(null,b,c,d,e));}
function PM(a,b){B2(a.kg,b);}
function Hv(a){return FU(HS(a.kg,AXM));}
function YR(){AXM=S(C$,0);}
var DU=G(0);
var AXI=null;var AXJ=null;var AXF=null;var AXG=null;var AXH=null;var AXA=null;var AXB=null;var AXK=null;var AXL=null;function Yc(){Yc=Bp(DU);AP7();}
function AP7(){AXI=R(B(369));AXJ=R(B(370));AXF=R(B(362));AXG=R(B(371));AXH=R(B(329));AXA=R(B(369));AXB=R(B(370));AXK=Fv(118,121,122,128);AXL=CN(63,66,68);}
var Gt=G(0);
var Xu=G();
function APj(a,b,c,d){var e;b=By();d=Cz(d);e=new N;P(e);H(H(V(H(e,B(372)),c),B(313)),d);Br(b,O(e));}
var Xv=G();
function Wk(){C.call(this);this.gL=null;}
function AFy(a,b){return KA(a.gL,b);}
function APl(a,b,c,d){return Jx(a.gL,b,c,d);}
function ANi(a,b,c){return Js(a.gL,b,c);}
function AKO(a,b,c){return DM(a.gL);}
function Ys(){C.call(this);this.r2=null;}
function AOJ(a,b){var c;c=a.r2.iX;c.d9=FO(b,P6(c));}
var AB0=G();
function PR(){C.call(this);this.nn=null;}
function AKW(a,b){var c;c=a.nn.jv;c.eM=FO(b,R9(c));}
function Qu(){C.call(this);this.x7=null;}
function AK1(a,b){return 0;}
function RN(){C.call(this);this.mE=null;}
function AFD(a,b){return DF(a.mE,null);}
var Z9=G();
function Ci(){Ck.call(this);this.lq=null;}
var AX$=null;var AX_=null;var AYa=null;var AYb=null;var AYc=null;var AYd=null;var AYe=null;var AYf=null;var AYg=null;var AYh=null;var AYi=null;var AYj=null;var AYk=null;var AYl=null;var AYm=null;var AXz=null;function ACb(){ACb=Bp(Ci);ARY();}
function DN(a,b,c){var d=new Ci();X_(d,a,b,c);return d;}
function AQW(a,b,c,d){var e=new Ci();ABT(e,a,b,c,d);return e;}
function X_(a,b,c,d){ACb();Da(a,b,c);a.lq=Iy(d,null);}
function ABT(a,b,c,d,e){ACb();Da(a,b,c);a.lq=Iy(d,e);}
function ARY(){var b;b=new Ci;FN();X_(b,B(339),0,AW6);AX$=b;AX_=DN(B(340),1,R(B(373)));AYa=DN(B(342),2,R(B(374)));AYb=DN(B(48),3,R(B(375)));AYc=DN(B(345),4,R(B(373)));AYd=DN(B(346),5,CN(188,63,60));AYe=DN(B(348),6,R(B(376)));AYf=DN(B(49),7,R(B(377)));AYg=DN(B(351),8,R(B(378)));AYh=AQW(B(353),9,AW6,CN(52,65,52));AYi=AQW(B(354),10,R(B(379)),R(B(380)));AYj=DN(B(355),11,R(B(381)));AYk=DN(B(357),12,R(B(382)));AYl=DN(B(359),13,AW6);b=DN(B(360),14,R(B(361)));AYm=b;AXz=I(Ci,[AX$,AX_,AYa,AYb,AYc,AYd,AYe,AYf,AYg,AYh,
AYi,AYj,AYk,AYl,b]);}
var AEl=G();
function IH(b,c){var d,e,f;if(c<=0)return B(31);d=BQ(c);e=d.data;e[0]=AC6(Iv(b,52));f=1;while(f<c){e[f]=AC6(Iv(b,62));f=f+1|0;}return FX(d);}
function AC6(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AAW=G();
function AEN(){var a=this;C.call(a);a.ER=null;a.Ct=null;a.DE=0;a.C$=0;}
var AD8=G(0);
function ADR(b){var c;a:{switch(b){case 0:break;case 1:c=B(166);break a;case 2:c=B(219);break a;case 3:c=B(218);break a;default:c=null;break a;}c=B(188);}return c;}
var CT=G();
var ACm=G(CT);
var AC4=G(CT);
var ZZ=G(CT);
var AAj=G(CT);
var ADF=G(CT);
function UD(){C.call(this);this.tI=null;}
function AMf(a){var b;b=a.tI;Br(By(),b);}
var Gm=G(Ck);
var AYn=null;var AW5=null;var AYo=null;function AMA(){AMA=Bp(Gm);AIW();}
function ASu(a,b){var c=new Gm();ZD(c,a,b);return c;}
function ZD(a,b,c){AMA();Da(a,b,c);}
function AIW(){var b;AYn=ASu(B(383),0);b=ASu(B(384),1);AW5=b;AYo=I(Gm,[AYn,b]);}
var Zs=G();
function B8(b,c){return Dg(b*c);}
function Ib(){var a=this;C.call(a);a.fY=0;a.lf=null;}
function Q2(){var a=this;C.call(a);a.w9=null;a.rh=null;a.fZ=null;}
function GK(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.fZ.data;f=e.length-1|0;g=f;while(true){if(d>g)return Ba(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hx:i.hz;k=!c?i.k7:i.lu;if(j<=k&&k<(j+k|0))return h;j=BD(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function L6(){var a=this;C.call(a);a.hz=0;a.lu=0;a.hx=0;a.k7=0;a.jZ=0;}
var AAF=G();
function We(){C.call(this);this.jD=null;}
function APN(a,b){var c,d,e,f,g;c=a.jD;d=c.j_;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.iy;e.b=Ew(0,e.b+f|0,c.gG.b-c.hG.b|0);c=a.jD;d=c.iy;d.a=Ew(0,d.a+g|0,c.gG.a-c.hG.a|0);}a.jD.j_=b.h;return 1;}
var AAR=G();
function M0(){C.call(this);this.p3=null;}
function APZ(a,b){HO(a.p3,b);}
function Wp(){C.call(this);this.i5=null;}
function AR_(a){return a.i5;}
function AET(){var a=this;C.call(a);a.bt=null;a.U=null;a.R=null;a.eo=null;}
function AB6(a){var b=new AET();AR9(b,a);return b;}
function AR9(a,b){var c;a.R=AS7();a.bt=b;c=new TU;LF(c);c.lJ=new B1;c.g0=b;a.U=c;}
function IR(a,b,c,d){var e,f,g,h;e=a.U;f=CE(e.gH,c)?0:1;g=CE(e.g5,b)?0:1;h=d===e.ja?0:1;if(f){e.gH=c;e.d3=null;X5(e,0);}e.gN=!f&&!g&&!h?0:1;e.g5=b;e.ja=d;e.hO=0;J_(a);}
function J6(a){var b;b=a.U;b.dd=CI(b.dd,null);a.R=CI(a.R,null);}
function LW(a,b){var c,d,e;c=a.R;d=c.G;e=c.q;b=CI(c,b);a.R=b;b.jf(d,e,a.bt.bR);}
function Fn(a,b,c){var d;d=a.R;d.jf(b,c,d.d4);J_(a);}
function J_(a){var b,c,d,e;b=a.U;c=a.R.q.b;b.q.b=c;d=b.dd;if(d!==null&&c!=BM(d)&&!(c>=b.hO&&BM(b.dd)>=b.hO))b.gN=1;b=a.U;b.d4=a.bt.bR;if(Ui(b))c=0;else{b=a.U;Ri(b);e=Cx(b.g0,b.ja);X5(b,E6(b.d3)+(e*2|0)|0);c=b.q.a;}b=a.U.G;d=a.R.G;U(b,d.b,d.a-c|0);}
function JQ(b,c){if(b<0)c=B(385);else if(b>0)c=B(386);return c;}
function Ol(a,b,c){var d;d=a.U.G.b;return (d-c|0)<=b&&b<d?1:0;}
function T9(a,b,c){var d,e;d=a.U;e=d.G.b+d.q.b|0;return e<=b&&b<(e+c|0)?1:0;}
function PH(a,b,c){var d;d=a.U.G.a;return (d-c|0)<=b&&b<d?1:0;}
function Qq(a,b,c){var d,e;d=a.R;e=d.G.a+d.q.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M5(a,b,c){var d,e,f;d=a.U.G.a-c|0;e=a.R;f=(e.G.a+e.q.a|0)+c|0;return d<=b&&b<f?1:0;}
function R_(a,b,c){var d,e;d=a.U.G.a+c|0;e=a.R;return AC9(b,d,(e.G.a+e.q.a|0)-c|0);}
function V1(a,b,c){var d,e,f;d=a.U;e=d.G.b;f=e-c|0;e=(e+d.q.b|0)+c|0;return f<=b&&b<e?1:0;}
function U_(a,b,c){var d,e;d=a.U;e=d.G.b;return AC9(b,e+c|0,(e+d.q.b|0)-c|0);}
function AC9(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BD(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Ih(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Be;f=new Be;g=b.b;h=b.a;b=a.R;i=b.G;j=i.b;k=i.a;b=b.q;l=b.b;m=b.a;b=new XV;b.os=a;b.or=e;b.op=f;b.oo=c;b.ow=g;b.ov=j;b.ou=l;b.ot=d;b.oy=h;b.ox=k;b.sw=m;return b;}
var ACk=G(0);
var LJ=G(0);
function RG(){C.call(this);this.pf=null;}
function AMX(a,b){return Q8(a.pf,b);}
var QF=G();
function ARl(a,b){ACM(b);}
var YF=G();
function ADP(b,c,d,e,f,g){g.b=c.b;g.a=f;Bv(b,d.b,d.a,g,e);Bv(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bv(b,d.b,d.a+f|0,g,e);Bv(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AC2(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bv(b,j,k,i,h);Bv(b,j,k,i,h);Bv(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bv(b,l,j,i,h);Bv(b,l,j,i,h);Bv(b,l+g|0,j+g|0,i,h);}
function Nq(){var a=this;C.call(a);a.bo=null;a.je=null;a.eJ=null;a.dR=0;a.M=0;a.dP=null;a.dZ=null;a.fU=0;}
function Tq(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.dR;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bc(i,e))a:{while(true){if(d<=e){j=d;break a;}Ex(c);j=d+(-1)|0;b=C7(d);d=W(j,a.M)%a.eJ.a|0;F$(a,c,b,a.fU,g);H8(a.bo,c,0,d);if(!(j%a.dR|0))break;d=j;}}else{Ex(b);k=a.dR-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;F$(a,b,C7(j),W(a.M,k)+a.fU|0,g);k=k+(-1)|0;j=h;}CO(a.bo,b);j=Bc(i,e);}return j;}k=a.dR;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Ba(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Ex(c);b=C7((d+f|0)+1|0);j=d+1|0;d
=W(d,a.M)%a.eJ.a|0;F$(a,c,b,a.fU,g);H8(a.bo,c,0,d);if(!(j%a.dR|0))break;d=j;}}else{Ex(b);d=0;while(d<a.dR){h=h+1|0;F$(a,b,C7((h>e?h-f|0:h)+f|0),W(a.M,d)+a.fU|0,g);d=d+1|0;}CO(a.bo,b);j=Ba(i,e);}return j;}
function K7(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&Fw(e,b,c,f)!==f.hq?0:1;}
function Fw(b,c,d,e){c=c.data;return d<c.length&&c[d]?HG(b.ds,b,c[d]):e.hq;}
function E5(a,b,c,d,e,f){EJ(b,a.je.b+d.b|0,c+d.a|0,a.dP,a.dZ,a.bo,e,f,0.0);}
function F$(a,b,c,d,e){Ch(b,c,a.eJ.b-20.0*e,d);}
function Ya(){C.call(this);this.tX=null;}
function ANY(a,b){var c,d,e;c=a.tX;if(c.e.f.cC==c.k3){b=b.data;d=D_(b[0]);e=FK(b[1]);ADj(c.e.f,d,e);PA(c.e.f);}}
var YV=G();
function F8(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function Zz(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function ADT(){var a=this;C.call(a);a.bz=0;a.bJ=0;}
function EU(a,b){var c=new ADT();ALB(c,a,b);return c;}
function ALB(a,b,c){a.bz=b;a.bJ=c;}
function AFL(a,b){var c;if(a===b)return 1;if(b!==null&&Cf(a)===Cf(b)){c=b;return a.bz==c.bz&&a.bJ==c.bJ?1:0;}return 0;}
function AO4(a){var b,c,d,e;b=S(C,2).data;b[0]=F1(a.bz);b[1]=F1(a.bJ);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.gB)|0;d=d+1|0;}return c;}
function AOB(a,b){var c;b=b;c=BD(a.bz,b.bz);if(!c)c=BD(a.bJ,b.bJ);return c;}
function RW(){C.call(this);this.tc=null;}
function AMT(a,b){var c;c=a.tc;TM(c,EV(c,b.h));KO(c.r,c.w,c.y);GY(c);}
var SI=G(0);
var AXe=null;function ACK(){AXe=new Qx;}
var FF=G(0);
function NH(){var a=this;C.call(a);a.hH=0;a.mg=0;a.iG=0;a.gd=0;a.gO=null;}
function Cd(a){return a.hH>=a.iG?0:1;}
function B_(a){var b,c;Pk(a);b=a.hH;a.gd=b;c=a.gO;a.hH=b+1|0;return Bs(c,b);}
function Q7(a){var b,c,d;if(a.gd<0){b=new D3;Z(b);L(b);}Pk(a);D8(a.gO,a.gd);a.mg=a.gO.cw;c=a.gd;d=a.hH;if(c<d)a.hH=d-1|0;a.iG=a.iG-1|0;a.gd=(-1);}
function Pk(a){var b;if(a.mg>=a.gO.cw)return;b=new IW;Z(b);L(b);}
var FP=G(ID);
var Xt=G(EI);
function Qt(){C.call(this);this.mV=null;}
function ANZ(a,b){var c,d;c=a.mV;d=c.dF+1|0;c.dF=d;c=new N;P(c);H(H(V(c,d),B(387)),b);$rt_globals.console.info($rt_ustr(O(c)));}
function Ux(){C.call(this);this.p_=null;}
function AQB(a){var b,c;b=a.p_;c=new N;P(c);H(H(H(c,B(388)),b),B(389));$rt_globals.console.info($rt_ustr(O(c)));}
var XE=G(DY);
var AYp=null;function ACL(){AYp=F($rt_floatcls());}
var FC=G();
var AYq=null;var AYr=null;var AVP=null;var AVO=null;var AVN=null;function ABt(){AYq=Ee([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);AYr=ZF([Bm(1),Bm(10),Bm(100),Bm(1000),Bm(10000),Bm(100000),Bm(1000000),Bm(10000000),Bm(100000000),Bm(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);AVP=ZF([Bm(1),Bm(10),Bm(100),Bm(10000),Bm(100000000),D(1874919424, 2328306)]);AVO
=new Uv;AVN=new VO;}
var HP=G();
var AYs=0;var AYt=null;var AYu=null;function ACe(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.nP=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.kC=0;c.ko=0;return;}if(f)d=e|8388608;else{d=e<<1;while(HN(CX(Bm(d),Bm(8388608)),EX)){d=d<<1;f=f+(-1)|0;}}g=AYu;h=Ul(g,0,g.data.length,f);if(h<0)h= -h|0;g=AYu.data;e=h+1|0;i=9+(f-g[e]|0)|0;j=HJ(d,AYt.data[e],i);if(j<AYs){while($rt_ucmp(j,AYs)<=0){h=h+(-1)|0;j=(j*10|0)+9|0;}g=AYu.data;e=h+1|0;i=9+
(f-g[e]|0)|0;j=HJ(d,AYt.data[e],i);}e=d<<1;d=e+1|0;g=AYt.data;f=h+1|0;k=g[f];l=i-1|0;m=HJ(d,k,l);n=HJ(e-1|0,AYt.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?W($rt_udiv(j,o),o):q<0?W($rt_udiv(j,k),k)+k|0:W($rt_udiv((j+(k/2|0)|0),k),k);if(Dp(Bm(d),Bm(1000000000))>=0)while(true){h=h+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)
<0){h=h+(-1)|0;d=d*10|0;}c.kC=d;c.ko=h-50|0;}
function HJ(b,c,d){return Gg(FI(B5(CX(Bm(b),D(4294967295, 0)),CX(Bm(c),D(4294967295, 0))),32-d|0));}
function AAA(){AYs=$rt_udiv((-1),10);AYt=Ee([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);AYu=Ee([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function VO(){var a=this;C.call(a);a.kC=0;a.ko=0;a.nP=0;}
function L_(){var a=this;C.call(a);a.wz=null;a.mI=0.0;a.wX=0.0;a.e6=null;a.gX=null;a.lR=null;a.ff=0;}
function AD$(a,b){var c;if(b!==null){a.gX=b;return a;}c=new BH;Bo(c,B(390));L(c);}
function ACr(a,b){var c;if(b!==null){a.lR=b;return a;}c=new BH;Bo(c,B(390));L(c);}
function Qb(a,b,c,d){var e,f,g,$$je;e=a.ff;if(!(e==2&&!d)&&e!=3){a.ff=d?2:1;while(true){try{f=AEb(a,b,c);}catch($$e){$$je=Ej($$e);if($$je instanceof Bq){g=$$je;L(AH2(g));}else{throw $$e;}}if(Hb(f))return f;if(Ip(f)){if(d&&DQ(b)){g=a.gX;He();if(g===AWk)return D4(B6(b));if(B6(c)<=J(a.e6))return AWn;EG(b,b.W+B6(b)|0);if(a.gX===AWl)Kd(c,a.e6);}return f;}if(QN(f)){g=a.gX;He();if(g===AWk)return f;if(g===AWl){if(B6(c)<J(a.e6))return AWn;Kd(c,a.e6);}EG(b,b.W+Ki(f)|0);}else if(L9(f)){g=a.lR;He();if(g===AWk)break;if(g
===AWl){if(B6(c)<J(a.e6))return AWn;Kd(c,a.e6);}EG(b,b.W+Ki(f)|0);}}return f;}b=new D3;Z(b);L(b);}
function ZI(a,b){var c,d,e,f;c=a.ff;if(c&&c!=3){b=new D3;Z(b);L(b);}if(!B6(b))return AEC(0);if(a.ff)a.ff=0;d=AEC(Bc(8,B6(b)*a.mI|0));while(true){e=Qb(a,b,d,0);if(Ip(e))break;if(Hb(e))d=S0(a,d);if(!KP(e))continue;VL(e);}b=Qb(a,b,d,1);if(KP(b))VL(b);while(true){f=a.ff;if(f!=3&&f!=2)break;a.ff=3;if(Ip(AWo)){d.dv=d.W;d.W=0;d.hs=(-1);return d;}d=S0(a,d);}b=new D3;Z(b);L(b);}
function S0(a,b){var c,d,e;c=b.hh;d=NM(c,Bc(8,c.data.length*2|0));e=ABE(d,0,d.data.length);EG(e,b.W);return e;}
var ABb=G(CT);
function QS(){C.call(this);this.nD=null;}
function AJV(a,b){Du(a.nD,b);}
function V7(){C.call(this);this.oV=null;}
function ASl(a,b){var c,d;c=a.oV;d=c.dF+1|0;c.dF=d;c=b.hw;b=new N;P(b);H(H(V(b,d),B(391)),c);$rt_globals.console.info($rt_ustr(O(b)));}
var Qx=G();
function AM5(a,b){}
function EL(){var a=this;C.call(a);a.G=null;a.q=null;a.d4=0.0;}
function AS7(){var a=new EL();LF(a);return a;}
function LF(a){a.G=new Be;a.q=new Be;}
function ANy(a){}
function ARo(a){return BZ(0,0);}
function P9(a,b,c,d){var e;if(!Le(a.G,b)){a.km(b);Ct(a.G,b);}if(!Le(a.q,c)){a.kc(c);Ct(a.q,c);}e=a.d4;if(e!==d){a.d4=d;a.pR(e,d);}}
function DK(a,b){return F8(b,a.G,a.q);}
function ZJ(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.q;Yc();Bv(b,d,e,f,AXA);}
function V8(a,b){var c;c=a.G;LI(b,c.b,c.a,a.q);}
function AQx(a,b){return 0;}
function AIL(a,b){}
function AQf(a,b){}
function ASs(a,b,c){}
function AQP(a,b,c,d){return 0;}
function AP5(a,b,c){return null;}
function ARb(a,b,c){return 0;}
function AMR(a,b){return 0;}
function AID(a,b,c,d){return 0;}
function GG(){var a=this;EL.call(a);a.cH=null;a.bB=null;a.fd=null;}
function AYv(){var a=new GG();T_(a);return a;}
function T_(a){LF(a);a.cH=new Be;a.bB=new Be;}
function AFv(a,b){a.fd=b;}
function AED(a){var b;b=a.bB;b.b=L4(a,b.b);b=a.bB;b.a=Ks(a,b.a);}
function Vp(a,b){a.bB.b=L4(a,b);}
function Rx(a,b){a.bB.a=Ks(a,b);}
function ACA(a,b,c){a.bB.b=L4(a,b);a.bB.a=Ks(a,c);}
function Ks(a,b){return Bc(0,Ba(b,a.cH.a-a.q.a|0));}
function L4(a,b){return Bc(0,Ba(b,a.cH.b-a.q.b|0));}
function Rg(){var a=this;GG.call(a);a.cx=null;a.dz=null;a.fR=null;a.qN=null;a.dK=null;a.b5=null;a.dX=null;a.fj=null;a.c$=0;a.eO=0;a.mD=null;a.dS=0;a.dU=0;a.f3=0;a.fc=0;a.fF=0;a.cA=0;a.dY=null;a.iV=null;a.nQ=null;a.gK=null;}
function AUS(a,b){var c=new Rg();AAI(c,a,b);return c;}
function AAI(a,b,c){T_(a);a.dz=SA();a.fR=new Be;a.b5=AYw;a.dX=S(H9,0);a.dS=0;a.dU=0;a.f3=0;a.fc=0;a.fF=0;a.dY=AEt(0);a.gK=KW();a.cx=b;a.iV=c;a.mD=c;TF(a);}
function TF(a){a.c$=B8(2.0,a.cx.bR);}
function WG(a){return a.b5.data.length?0:1;}
function Wj(a,b){O0(a);a.b5=b;}
function O0(a){U(a.fR,0,0);}
function X$(a,b,c){a.nQ=b;a.qN=c;a.dK=null;a.dY=null;a.eO=0;O0(a);}
function ASG(a){a.fj=CI(a.fj,null);U(a.fR,0,0);Ku(a.gK);a.dY=null;a.b5=AYw;a.dX=null;a.dS=0;a.dU=0;a.f3=0;To(a.dz);a.iV=null;}
function AHM(a,b,c){TN(a);TF(a);a.dK=null;a.dY=null;a.eO=0;}
function AKx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=IX(a.cx);if(WG(a))return;LB(a);CA(c,a.dK);d=Ea(a);e=AEV(c,a.eO);f=Ba(IQ(a.q.a,d),a.b5.data.length)+30|0;g=a.nQ.nI;h=a.dX.data;i=h.length;if(i<f){a:{j=a.fc;k=a.fF;l=a.b5;m=a.dY;n=a.gK;o=S(H9,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gv!==q){Vz(m,t,n);p[r]=LK(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=LK(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=LK(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){Vz(m,q,n);h[j]=null;}j=j+1|0;}a.dX=o;Ct(a.fR,Mh(a.dY));T5(a,a.cx.cM);}a.fc=Ba((a.bB.a+a.c$|0)/(Ea(a)+a.c$|0)|0,a.b5.data.length-1|0);a.fF=Ba((((a.bB.a+a.dz.s.a|0)-1|0)+a.c$|0)/(Ea(a)+a.c$|0)|0,a.b5.data.length-1|0);if(!a.dX.data.length)return;YQ(a,e);V8(a,b);t=g.r4;m=a.G;Bv(b,m.b,m.a,a.q,t);m=a.dz.z;u=m.b;v=m.a;w=Cx(a.cx,2.0);m=a.cx.dc;x=a.fc;j=u+w|0;while(x<=a.fF){n=No(a,x);k=W(x,Ea(a));i=x+
1|0;y=k+W(i,a.c$)|0;k=j+a.dS|0;r=k+a.dU|0;z=a.cA!=x?0:1;ba=!z?t:g.ql;q=!z?g.vI:g.ji;bb=!z?g.pF:g.ji;bc=!z?g.u0:g.ji;bd=(v+y|0)-a.bB.a|0;EJ(b,j,bd,n.gT,n.rQ,a.fj,q,ba,0.0);EJ(b,k,bd,n.ho,n.h_,a.fj,bb,ba,0.0);EJ(b,r,bd,n.hu,n.iM,a.fj,bc,ba,0.0);k=n.gT.b;s=j+k|0;U(m,Bc(0,a.dS-k|0),n.gT.a);Bv(b,s,bd,m,ba);k=j+a.dS|0;s=n.ho.b;be=k+s|0;U(m,Bc(0,a.dU-s|0),n.ho.a);Bv(b,be,bd,m,ba);k=n.hu.b;bf=r+k|0;U(m,Bc(0,(((a.dz.s.b-k|0)-a.dU|0)-a.dS|0)-w|0),n.hu.a);Bv(b,bf,bd,m,ba);bg=(u+a.q.b|0)-w|0;U(m,w,Ea(a)+a.c$|0);Bv(b,bg,
bd,m,t);x=i;}G2(b);}
function YQ(a,b){var c,d,e,f,g,h;c=0;d=a.fc;while(d<=a.fF){e=No(a,d);if(!(e!==null&&e.gv===a.b5.data[d])){f=a.dX.data;g=a.b5;e=a.dY;h=a.gK;c=d%f.length|0;if(f[c]!==null)Vz(e,f[c],h);f[c]=LK(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.fR,Mh(a.dY));T5(a,a.cx.cM);}}
function T5(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.fR;c=CL(b,c.b+150|0,c.a);CA(c,a.dK);d=a.dK;e=d.dA;f=e-(e+d.et)/16.0;g=a.dX.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gv.iz;k=d.h_;Ch(c,j,k.bn+a.eO,f+k.bG);j=d.gv.iP;d=d.iM;Ch(c,j,d.bn+a.eO,f+d.bG);}i=i+1|0;}a:{d=a.gK;if(d.dy>0){h=d.c5;i=0;b:while(true){g=d.ca.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.dB;l=j.dE;k=k;l=l.iq;Ch(c,k,l.bn+a.eO,f+l.bG);j=j.cQ;if(h!=d.c5)break b;}i=i+1|0;}b=new IW;Z(b);L(b);}}b=CI(a.fj,CW(b));a.fj=b;CO(b,c);FQ(c);}
function No(a,b){var c;c=a.dX.data;return c[b%c.length|0];}
function ALI(a,b){Ct(a.dz.s,b);}
function AIj(a,b){Ct(a.dz.z,b);}
function Z1(a){var b,c;LB(a);b=Ea(a);c=a.b5.data.length;b=W(b,c)+W(a.c$,c+1|0)|0;U(a.cH,a.q.b,b);}
function TN(a){var b,c,d,e,f,g,h,i,j;b=IX(a.cx);if(WG(a))return;LB(a);CA(b,a.dK);c=AEV(b,a.eO);d=a.b5.data;e=d.length;f=0;while(f<e){g=d[f];h=JZ(c,g.gD);i=JZ(c,g.iz);j=JZ(c,g.iP);a.dS=Bc(a.dS,h);a.dU=Bc(a.dU,i);a.f3=Bc(a.f3,j);f=f+1|0;}}
function ARB(a,b){var c;c=N2(a,b.h);if(c>=0)a.cA=c;return Et(a.dz,a.G)&&Hl(a.cx.cD)?1:0;}
function AFR(a,b,c){if(!Et(a.dz,b.h)&&!Mb(a.dz)){b=a.mD;if(b!==null)b.p();}return null;}
function AF6(a,b,c,d){var e;if(d==1){e=N2(a,b.h);if(e>=0)NO(a,a.b5.data[e]);}return 1;}
function NO(a,b){a.iV.p();b.mH.p();}
function N2(a,b){var c,d,e;if(!a.dX.data.length)return (-1);c=Ea(a);d=(b.a-a.G.a|0)+a.bB.a|0;e=a.c$;e=(d+e|0)/(c+e|0)|0;if(e<a.b5.data.length)return e;return (-1);}
function Ea(a){return E6(a.dK);}
function LB(a){var b;if(a.dK===null){b=GU(a.cx,a.qN);a.dK=b;a.dY=AEt(E6(b));a.eO=Dg(a.dK.l5);}}
function ALe(a,b){var c,d,e;a:{switch(b.bk){case 13:NO(a,a.b5.data[a.cA]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cA=a.fc;b=a.fd;c=a.bB;H4(b,c.b,c.a-(a.q.a/2|0)|0);return 0;case 34:a.cA=a.fF;b=a.fd;c=a.bB;H4(b,c.b,c.a+(a.q.a/2|0)|0);return 0;case 35:case 39:a.cA=a.b5.data.length-1|0;break a;case 36:case 37:a.cA=0;break a;case 38:d=a.cA;e=a.b5.data.length;a.cA=((d+e
|0)-1|0)%e|0;break a;case 40:a.cA=(a.cA+1|0)%a.b5.data.length|0;break a;default:break a;}a.iV.p();return 0;}e=a.cA;if(e<=a.fc)H4(a.fd,a.bB.b,W(e,Ea(a))+W(a.cA,a.c$)|0);else if(e>=a.fF)H4(a.fd,a.bB.b,(W(e+1|0,Ea(a))+W(a.cA+2|0,a.c$)|0)-a.q.a|0);return 0;}
var Wd=G();
function ASt(a){}
function AAO(){var a=this;EL.call(a);a.lw=null;a.rV=null;a.ue=null;a.bD=null;a.c3=null;a.c4=null;a.sL=0.0;a.mF=null;a.m2=null;}
function ZL(a,b){var c=new AAO();ARk(c,a,b);return c;}
function ARk(a,b,c){var d;c=c.cD;LF(a);d=new VP;d.rP=a;a.rV=d;d=new VQ;d.od=a;a.ue=d;a.sL=10.0;a.bD=b;a.lw=c;b.fd=a;}
function AF$(a){var b;b=a.bD;b.fd=null;a.bD=CI(b,null);}
function QR(a,b,c){var d;a.mF=b;a.m2=c;d=a.c3;if(d!==null)Gk(d,b,c);d=a.c4;if(d!==null)Gk(d,b,c);}
function AHS(a,b,c,d){P9(a,b,c,d);P9(a.bD,b,c,d);if(d!==0.0){a.bD.u1();AED(a.bD);if(Qn(a))H$(a);else a.c4=null;if(XY(a))Im(a);else a.c3=null;}}
function H4(a,b,c){ACA(a.bD,b,c);if(Qn(a))H$(a);if(XY(a))Im(a);}
function XY(a){var b;b=a.q.a;return b>0&&a.bD.cH.a>b?1:0;}
function Qn(a){var b;b=a.q.b;return b>0&&a.bD.cH.b>b?1:0;}
function H$(a){var b,c,d,e,f,g;b=a.c4;if(b===null)b=Hu();a.c4=b;Uw(a,b);c=a.c4;b=a.bD;d=b.bB.b;e=a.G;f=e.b;g=a.q;MC(c,d,f,g.b,b.cH.b,e.a+g.a|0,JN(a));}
function Im(a){var b,c,d,e,f,g;b=a.c3;if(b===null)b=Hu();a.c3=b;Uw(a,b);c=a.c3;b=a.bD;d=b.bB.a;e=a.G;f=e.a;g=a.q;II(c,d,f,g.a,b.cH.a,e.b+g.b|0,JN(a));}
function JN(a){return B8(a.sL,a.d4);}
function Uw(a,b){var c,d;c=a.mF;d=a.m2;if(!(c!==null&&d!==null?(KF(b.hW,c)&&KF(b.hV,d)?1:0):0))Gk(b,c,d);}
function APK(a,b){var c;a.bD.e8(b);if(!(a.c3===null&&a.c4===null)){Cs(b,1);c=a.c3;if(c!==null)FY(c,b);c=a.c4;if(c!==null)FY(c,b);c=a.c3;if(c!==null)Gi(c,b);c=a.c4;if(c!==null)Gi(c,b);Cs(b,0);}}
function M$(a,b){var c,d;a:{b:{c=a.c3;if(!(c!==null&&I4(c,b))){c=a.c4;if(c===null)break b;if(!I4(c,b))break b;}d=1;break a;}d=0;}return d;}
function AJ3(a,b,c,d){return !M$(a,b.h)&&!a.bD.cr(b,c,d)?0:1;}
function AQS(a,b,c){var d,e;d=a.c3;if(d!==null){e=Fh(d,b.h,a.rV,1);if(e!==null)return e;}d=a.c4;if(d!==null){e=Fh(d,b.h,a.ue,0);if(e!==null)return e;}return a.bD.b_(b,c);}
function AJB(a,b,c){return M$(a,b.h)?1:0;}
function AKY(a,b){var c,d,e;c=a.c3;d=c!==null&&Fq(c,b.h,a.lw)?1:0;c=a.c4;e=c!==null&&Fq(c,b.h,a.lw)?1:0;return !d&&!e&&!a.bD.bL(b)?0:1;}
function APX(a,b,c,d){var e,f;if(!DK(a,b.h))return 0;e=B8(d*0.25,a.d4);f=B8(c*0.25,a.d4);if(b.bI){f=f+e|0;e=0;}if(a.c3!==null&&e){b=a.bD;Rx(b,b.bB.a+e|0);Im(a);}if(a.c4!==null&&f){b=a.bD;Vp(b,b.bB.b+f|0);H$(a);}return 1;}
function ANd(a){var b,c;b=JN(a);c=a.bD.jc();c.b=Bc(c.b,b);c.a=Bc(c.a,b);return c;}
function Wm(){var a=this;GG.call(a);a.h5=null;a.lp=null;a.sq=null;a.p8=0.0;}
function AN0(a){var b,c;b=a.cH;c=a.q;U(b,c.b*3|0,c.a*5|0);}
function ALM(a){var b;b=B8(20.0,a.d4);return BZ(b,b);}
function AKz(a,b){var c,d,e,f;c=a.sq;d=c.tk;e=c.tl;c=c.tj;b=Cz(b);f=new N;P(f);H(H(H(f,c),B(36)),b);IR(e,O(f),d.th,3.0);}
function AIc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;ZJ(a,b);V8(a,b);c=B8(30.0,a.d4);d=a.bB;e=d.b;f=W(e/c|0,c);g=d.a;h=W(g/c|0,c);d=a.q;i=W(((e+d.b|0)-1|0)/c|0,c);e=W(((g+d.a|0)-1|0)/c|0,c);d=a.lp;d.a=c;d.b=c;a.h5.bH=1.0;while(h<=e){g=a.G.a-a.bB.a|0;j=f;while(j<=i){k=a.G.b-a.bB.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AD3(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;Xj(n,0.75,a.p8,a.h5);Bv(b,k+j|0,g+h|0,a.lp,a.h5);j=j+c|0;}h=h+c|0;}G2(b);}
function ALc(a,b){}
function PJ(){var a=this;C.call(a);a.tk=null;a.tl=null;a.tj=null;}
var Sm=G(DY);
var AYx=null;function C_(b,c){return Long_udiv(b, c);}
function Y4(b,c){return Long_urem(b, c);}
function Dp(b,c){return Long_ucompare(b, c);}
function AA1(){AYx=F($rt_longcls());}
function VI(){C.call(this);this.pE=null;}
function AOl(a){X7(a.pE);}
function RL(){C.call(this);this.mU=null;}
function AKh(a){NU(a.mU);}
function X1(){C.call(this);this.ll=null;}
var AYw=null;function AN9(){var a=new X1();AAg(a);return a;}
function AAg(a){a.ll=CC();}
function Nh(a,b,c,d,e){var f;f=new JC;f.mH=e;f.iz=c;f.iP=d;f.gD=b;B2(a.ll,f);}
function Q$(a){return HS(a.ll,AYw);}
function V2(b){var c,d;if(b===null)b=B(31);else{c=b.fm;if(c===null)b=B(31);else{d=PU(c,B(392),J(c));b=d==(-1)?b.fm:Dk(b.fm,d+1|0);}}return b;}
function AAS(){AYw=S(JC,0);}
function H9(){var a=this;C.call(a);a.rQ=null;a.h_=null;a.iM=null;a.gT=null;a.ho=null;a.hu=null;a.gv=null;}
function LK(b,c,d,e){var f,g,h;f=new H9;f.gT=new Be;f.ho=new Be;f.hu=new Be;f.gv=b;g=DR(e,b.gD);if(g!==null)g.g9=g.g9+1|0;else{g=new Oj;h=Ho(c,b.gD,d);g.g9=1;g.iq=h;Lg(e,b.gD,g);}e=g.iq;f.rQ=e;U(f.gT,e.bl|0,e.bH|0);e=Ho(c,b.iz,d);f.h_=e;U(f.ho,e.bl|0,e.bH|0);b=Ho(c,b.iP,d);f.iM=b;U(f.hu,b.bl|0,b.bH|0);return f;}
function Vz(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gv.gD;f=DR(d,e);g=f.g9-1|0;f.g9=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ca.data[0];while(j!==null){if(j.dB===null)break a;e=j.cQ;i=j;j=e;}}else{k=Is(e);l=d.ca.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.jb==k&&Za(e,j.dB))){m=j.cQ;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cQ=j.cQ;else d.ca.data[h]=j.cQ;d.c5=d.c5+1|0;d.dy=d.dy-1|0;}It(b,f.iq);}It(b,c.h_);It(b,c.iM);}
function TU(){var a=this;EL.call(a);a.g0=null;a.g5=null;a.gH=null;a.d3=null;a.ja=0.0;a.gN=0;a.hO=0;a.dd=null;a.lJ=null;}
function LX(a){var b;b=a.q;return b.b&&b.a?0:1;}
function Ui(a){var b,c;a:{if(a.gH!==null){b=a.g5;if(b!==null&&!Fo(b)){c=0;break a;}}c=1;}return c;}
function X5(a,b){a.q.a=b;}
function Pu(a,b,c,d,e){var f,g;f=a.g0.dc;U(f,d,a.q.a);g=a.G;Bv(b,g.b+c|0,g.a,f,e);}
function Ri(a){if(a.d3===null)a.d3=GU(a.g0,a.gH);}
function Uv(){var a=this;C.call(a);a.lc=EX;a.j$=0;a.no=0;}
function Yx(){var a=this;C.call(a);a.st=null;a.ss=null;a.sr=null;}
function AIr(a){var b,c,d,e,f;b=a.st;c=a.ss;d=a.sr;e=By();f=new N;P(f);b=H(f,b);BG(b,9);b=H(b,c);BG(b,9);H(b,d);Br(e,O(f));}
function VP(){C.call(this);this.rP=null;}
function ARm(a,b){var c,d;c=a.rP;d=FO(b,c.bD.cH.a-c.q.a|0);Rx(c.bD,d);Im(c);}
function VQ(){C.call(this);this.od=null;}
function AGg(a,b){var c,d;c=a.od;d=FO(b,c.bD.cH.b-c.q.b|0);Vp(c.bD,d);H$(c);}
function JC(){var a=this;C.call(a);a.mH=null;a.iz=null;a.iP=null;a.gD=null;}
var D3=G(Bq);
var ACF=G(EI);
function AH2(a){var b=new ACF();AMt(b,a);return b;}
function AMt(a,b){a.jo=1;a.jL=1;a.kZ=b;}
function Ud(){var a=this;C.call(a);a.xp=null;a.xo=null;a.xn=null;}
function NZ(){var a=this;C.call(a);a.tu=null;a.tw=null;a.tv=0;}
function AF0(a,b){var c,d,e;c=a.tu;d=a.tw;e=a.tv;d.l(XQ(c,(b.h.b+e|0)-c.d2.b|0));}
function NX(){var a=this;C.call(a);a.qh=null;a.qg=null;a.qi=0;}
function AH3(a,b){var c,d,e;c=a.qh;d=a.qg;e=a.qi;d.l(OK(c,(b.h.a+e|0)-c.d2.a|0));}
function Kw(){var a=this;L_.call(a);a.n0=null;a.su=null;}
function AEb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.n0;e=0;f=0;g=a.su;a:{b:{while(true){if((e+32|0)>f&&DQ(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=B6(b)+k|0;h=j.length;f=Ba(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BB;c=new N;P(c);V(H(V(H(c,B(393)),l),B(98)),h);Bo(b,O(c));L(b);}if(B6(b)<m){b=new L0;Z(b);L(b);}if(m<0){b=new BB;c=new N;P(c);H(V(H(c,B(99)),m),B(100));Bo(b,O(c));L(b);}n=b.W;h=n+b.kR|0;e=0;while(e<m){o=k+1|0;i=b.lz.data;l=h+1|0;j[k]=i[h];e=
e+1|0;k=o;h=l;}b.W=n+m|0;e=0;}if(!DQ(c)){p=!DQ(b)&&e>=f?AWo:AWn;break a;}i=g.data;n=B6(c);o=i.length;n=Ba(n,o);q=new Vs;q.rr=b;q.tA=c;p=AEo(a,d,e,f,g,0,n,q);e=q.u5;if(p===null&&0==q.ka)p=AWo;k=q.ka;h=0;if(c.mm){b=new Jd;Z(b);L(b);}if(B6(c)<k)break;if(h>o){b=new BB;c=new N;P(c);BG(V(H(V(H(c,B(101)),h),B(95)),o),41);Bo(b,O(c));L(b);}l=h+k|0;if(l>o){b=new BB;c=new N;P(c);V(H(V(H(c,B(103)),l),B(98)),o);Bo(b,O(c));L(b);}if(k<0){b=new BB;c=new N;P(c);H(V(H(c,B(99)),k),B(100));Bo(b,O(c));L(b);}o=c.W;m=0;while(m<k)
{l=o+1|0;n=h+1|0;SH(c,o,i[h]);m=m+1|0;o=l;h=n;}c.W=c.W+k|0;if(p!==null)break a;}b=new H5;Z(b);L(b);}b=new BB;c=new N;P(c);BG(V(H(V(H(c,B(101)),k),B(95)),h),41);Bo(b,O(c));L(b);}EG(b,b.W-(f-e|0)|0);return p;}
var TY=G(Kw);
function AEo(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Kz(h,2))break a;i=AWo;break a;}c=k+1|0;n=j[k];if(!FH(a,n)){c=c+(-2)|0;i=D4(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Kz(h,3))break a;i=AWo;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FH(a,n))break b;if(!FH(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Me(p)){c=k+(-3)|0;i=D4(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=D4(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Kz(h,4))break a;i=AWo;break a;}if((f+2|0)>g){c=k+(-1)|0;if(B6(h.tA)<2?0:1)break a;i=AWn;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FH(a,n))break c;if(!FH(a,o))break c;if(!FH(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Ig(r);m=c+1|0;j[c]=IY(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=D4(1);break a;}c=k+(-3)|0;i
=D4(1);}h.u5=c;h.ka=f;return i;}
function FH(a,b){return (b&192)!=128?0:1;}
function P_(){C.call(this);this.sc=null;}
function AG8(a,b){var c,d;c=a.sc;d=c.dF+1|0;c.dF=d;c=new N;P(c);H(H(V(c,d),B(394)),b);$rt_globals.console.info($rt_ustr(O(c)));}
function MX(){C.call(this);this.qI=null;}
function AHR(a){return a.qI.f0();}
function MY(){C.call(this);this.ng=null;}
function AOn(a){return a.ng.f0();}
function Ti(){C.call(this);this.qY=null;}
function AP$(a){return a.qY.f0();}
function VG(){C.call(this);this.yI=null;}
function ANg(a){Br(By(),B(395));}
function QU(){C.call(this);this.ne=null;}
function AFe(a,b){a.ne.l(FE(b));}
function U0(){C.call(this);this.sx=null;}
function ARX(a,b){a.sx.p();}
function On(){var a=this;C.call(a);a.xx=null;a.xz=null;a.xy=0;a.xw=0;}
var AAy=G();
var ZW=G();
function SD(){C.call(this);this.uY=null;}
function AGf(a,b){var c,d,e,f;c=a.uY;d=Cz(b);e=new N;P(e);H(H(e,B(396)),d);$rt_globals.console.info($rt_ustr(O(e)));d=new SZ;d.wP=c;d.pu=b;e=new SY;e.vR=c;f=new UW;f.wE=e;e=new V_;e.nR=d;c=b.fe;if(c!==null)c.arrayBuffer().then(Bj(e,"f"),Bj(f,"f"));else{b=b.gM.getFile();c=new Wc;c.tq=e;c.tr=f;b.then(Bj(c,"f"),Bj(f,"f"));}}
function SC(){C.call(this);this.xe=null;}
function AGZ(a,b){var c;b=Cz(b);c=new N;P(c);H(H(c,B(397)),b);$rt_globals.console.info($rt_ustr(O(c)));}
var Qr=G();
function AOR(a,b){b=b;b.bo=CI(b.bo,null);}
function Tr(){C.call(this);this.tx=null;}
function AKj(a){DO(a.tx);}
var IW=G(Bq);
function N6(){C.call(this);this.qZ=null;}
function ANX(a,b){var c;c=a.qZ;Du(c,b);Lx(c,null);HQ(c);}
var PI=G(DY);
var AYy=null;function ZQ(){AYy=F($rt_doublecls());}
var IF=G();
var AYz=EX;var AYA=null;var AYB=null;function ABq(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.no=HN(CX(d,D(0, 2147483648)),EX)?0:1;e=CX(d,D(4294967295, 1048575));f=Gg(ATL(d,52))&2047;if(HN(e,EX)&&!f){c.lc=EX;c.j$=0;return;}if(f)e=ATu(e,D(0, 1048576));else{e=Gu(e,1);while(HN(CX(e,D(0, 1048576)),EX)){e=Gu(e,1);f=f+(-1)|0;}}g=AYB.data;h=f<<16>>16;i=0;j=g.length;k=BD(i,j);if(k>0){c=new BH;Z(c);L(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BD(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=H_(e,AYA.data[h],i);if(AIy(m,AYz)){while(Dp(m,AYz)<=0){j=j+(-1)|0;m=CF(B5(m,Bm(10)),Bm(9));}g=AYB.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=H_(e,AYA.data[h],i);}e=Gu(e,1);d=CF(e,Bm(1));g=AYA.data;h=j+1|0;n=g[h];f=i-1|0;n=H_(d,n,f);o=H_(Kx(e,Bm(1)),AYA.data[h],f);p=Bm(1);while(true){q=B5(p,Bm(10));if(Dp(C_(m,q),C_(o,q))<=0)break;p=q;}r=Bm(1);while
(true){s=B5(r,Bm(10));if(Dp(C_(m,s),C_(n,s))>=0)break;r=s;}h=Dp(p,r);e=h>0?B5(C_(m,p),p):h<0?CF(B5(C_(m,r),r),r):B5(C_(CF(m,AC5(r,Bm(2))),r),r);if(Dp(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=C_(e,Bm(10));if(Dp(e,D(2808348672, 232830643))<0)break;}else if(Dp(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=B5(e,Bm(10));}c.lc=e;c.j$=j-330|0;}
function H_(b,c,d){var e,f,g,h,i,j,k,l;e=CX(b,Bm(65535));f=CX(FI(b,16),Bm(65535));g=CX(FI(b,32),Bm(65535));h=CX(FI(b,48),Bm(65535));i=CX(c,Bm(65535));j=CX(FI(c,16),Bm(65535));k=CX(FI(c,32),Bm(65535));l=CX(FI(c,48),Bm(65535));return CF(CF(CF(Gu(B5(l,h),32+d|0),Gu(CF(B5(l,g),B5(k,h)),16+d|0)),Gu(CF(CF(B5(l,f),B5(k,g)),B5(j,h)),d)),FI(CF(CF(CF(B5(k,e),B5(j,f)),B5(i,g)),Gu(CF(CF(CF(B5(l,e),B5(k,f)),B5(j,g)),B5(i,h)),16)),32-d|0));}
function AA3(){AYz=C_(Bm(-1),Bm(10));AYA=ZF([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);AYB=AU9([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function MZ(){C.call(this);this.sK=null;}
function ASL(a,b){var c,d;c=a.sK;d=new Bq;Bo(d,$rt_str(b.message));c.l(d);}
function Uj(){var a=this;C.call(a);a.ri=0;a.mC=0;}
function FO(a,b){return PY(a.ri,b,a.mC);}
function NB(){var a=this;C.call(a);a.uj=null;a.ul=null;a.uk=null;}
function ARE(a,b,c,d){var e,f;b=a.uj;e=a.ul;f=a.uk;TQ(b,e);if(f!==null)d.mr.p();if(MH(d)){if(d.jU===null)T0(b,AEG(d,e),d.im,e);else P0(b,AEG(d,e),d.im,e,d.jU);}}
var Gl=G(Bq);
function NP(){var a=this;C.call(a);a.mQ=null;a.p9=null;a.tE=0;a.uV=0;}
function LS(a,b){return B6(a.p9)<b?0:1;}
var ADV=G();
function UU(b,c,d,e){var f,g;f=b.next();g=new XJ;g.m5=b;g.m4=c;g.m8=d;g.m6=e;f.then(Bj(g,"f"),Bj(d,"f"));}
function Zc(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEp(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Eb()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new XF;f.qO=b;f.qP=d;d.addEventListener("change",Bj(f,"handleEvent"));d.click();}
function Zk(b,c){var d;if(c.isFile?1:0)b.l(YN(c.file()));else{c=c.createReader();d=new Xs;d.tT=b;c.readEntries(Bj(d,"f"));}}
function Tj(){var a=this;C.call(a);a.bN=null;a.oF=null;a.h2=null;a.iQ=null;a.Y=null;}
function IP(a){return a.bN.cs.i2;}
function Oi(a){var b;b=new Pm;b.p6=a;return b;}
function AE0(a){var b,c,d,e,f,g;b=S(C$,4);c=b.data;d=a.Y.X.V.bj;e=a.bN;BN(e);f=new V9;f.tg=e;c[0]=D$(B(398),d,f);e=a.Y.X.V.bj;f=a.bN;BN(f);g=new Wb;g.nO=f;c[1]=D$(B(399),e,g);e=a.Y.X.V.bj;f=a.bN;BN(f);g=new Wa;g.r_=f;c[2]=D$(B(400),e,g);e=a.Y.X.V.bj;f=a.bN;BN(f);g=new V$;g.vJ=f;c[3]=D$(B(401),e,g);return FU(b);}
function Jn(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DO(a.Y.cc);d=a.bN.e;e=Do(d);f=G6(d);g=a.bN.ez;if(c===null)h=null;else{ATd();switch(AYC.data[c.eP]){case 1:h=KY(g,e,f);break a;case 2:h=V0(g,e,f);break a;default:}b=new Es;Z(b);L(b);}}c=a.bN;e=EV(c,b);f=HU(c.e.f,e.bz,e.bJ);g=OT(c,f);if(h!==null){f=c.e;i=e.bz;j=e.bJ;e=new Us;e.vO=c;e.vN=b;e.vP=g;h.sD(f,i,j,e,c.g2);}else{e=DR(c.e.f.ek,f);if(e!==null)HE(c,e);else{e=DR(c.e.f.eI,f);if(e!==null&&!EF(e))VB(c.iI,b,e,c,g);else{g=c.iI;DO(g.cc);h=g.cc;k=S(C$,1);l=k.data;d=new C$;BN(h);f
=new V3;f.oa=h;La(d,f,B(402),g.X.V.p0);l[0]=d;Gf(h,b,FU(k),ND(g,c));}}}}
var Zw=G(0);
function AJ4(b){return 112<=b&&b<=123?1:0;}
var XL=G();
function APQ(a,b){Zc(b);}
function XK(){var a=this;C.call(a);a.qc=null;a.qb=null;}
function AH9(a,b){var c,d,e,f,g,h,i;c=a.qc;d=a.qb;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new P$;i.n$=c;i.n9=g;h.then(Bj(i,"f"),Bj(d,"f"));e=e+1|0;}}
var W_=G();
function AJF(a,b){Zc(b);}
function W$(){var a=this;C.call(a);a.pl=null;a.pm=null;}
function AKD(a,b){var c,d,e,f,g;c=a.pl;d=a.pm;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=S(Bx,1);g.data[0]=FE(b.name);UU(f,c,d,g);}
var YX=G();
function ABI(b,c,d){AAa(b,c,d,0);}
function AAa(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=AD1(c);g=BC(f);BC(f);h=BC(f);i=Cy(b);b.C=!e?S(CB,g):Pn(b.C,g);j=0;while(j<g){if(e&&j<i){k=4*BC(f)|0;f.e1=f.e1+k|0;}else b.C.data[j]=DS(ABZ(f,d,0));j=j+1|0;}b.da=ARy(MI(f));Ku(b.ek);Ku(b.eI);l=b.ek;g=0;while(g<h){Lg(l,EU(BC(f),BC(f)),EU(BC(f),BC(f)));g=g+1|0;}l=b.ek;m=b.eI;b=new UX;SV(b,l);while(Jr(b)){UE(b);n=b.g_;o=n.dB;n=n.dE;l=CC();if(DR(m,n)===null)Lg(m,n,l);B2(DR(m,n),o);}if(m.kv===null){b=new Pl;b.va=m;m.kv=b;}b=m.kv;m=new Rl;SV(m,b.va);while(Jr(m)){UE(m);b
=m.g_.dE;l=AVD;c=S(C,b.i);d=c.data;HS(b,c);AAt(c,l);e=0;h=d.length;while(e<h){l=d[e];Jk(b,e);b.ct.data[e]=l;e=e+1|0;}}Qw(f);}
function ADj(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;e=c.data;if(e.length==1&&e[0]==(-1))return;f=AD1(c);g=BC(f);h=BC(f);i=BC(f);j=BC(f);k=NL(b,g);l=NL(b,h);m=(IU(B3(b,k.b),k.a)).data[0].o;n=(IU(B3(b,l.b),l.a)).data[1].o;o=0;p=i-1|0;while(o<i){e=ABZ(f,d,g);if(!o)e=LR(m,e);if(o==p)e=LR(e,n);q=k.b+o|0;r=DS(e);b.C.data[q]=r;o=o+1|0;}if(j){s=MI(f);r=Ob(g,h,(-1));b=b.da;r=J1(b,b.dx,r);if(r!==null&&!EF(s.bu)){s=s.bu;if(r===b.dx)b.dx=Bs(s,0);else if(r.d_!==null){b=new Tb;b.oj=r;Kb(s,b);o=Qy(r.d_.bu,r);D8(r.d_.bu,
o);b=r.d_.bu;Pv(b,o);if(!EF(s)){Jv(b,b.i+s.i|0);i=s.i;g=b.i;q=g-1|0;while(q>=o){c=b.ct.data;c[q+i|0]=c[q];q=q+(-1)|0;}b.i=g+i|0;r=B9(s);g=0;while(g<i){c=b.ct.data;q=o+1|0;c[o]=B_(r);g=g+1|0;o=q;}b.cw=b.cw+1|0;}}}}Qw(f);}
function ABZ(b,c,d){var e,f,g,h,i,j,k,l;e=BC(b);f=S(B7,e);g=f.data;h=0;while(h<e){i=BC(b);j=BC(b);k=BC(b);l=BC(b);g[h]=DG(HC(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var Xi=G(0);
var AXa=null;function Y_(){AXa=null;}
function XF(){var a=this;C.call(a);a.qO=null;a.qP=null;}
function AJw(a,b){var c,d,e,f,g,h;b=a.qO;c=a.qP;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new MU;h.mZ=b;h.mY=g;$rt_globals.setTimeout(Bj(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=YN(d.item(f));g=new MD;g.sf=b;g.sg=c;$rt_globals.setTimeout(Bj(g,"onTimer"),0);f=f+1|0;}}
function AAz(){var a=this;C.call(a);a.ij=null;a.kf=null;}
function AEf(){var a=this;C.call(a);a.yB=0;a.yl=0;a.sN=0;a.kV=0;}
function UM(){var a=this;C.call(a);a.nx=null;a.nw=null;}
function AKc(a){var b,c,d,e,f,g;b=a.nx;c=a.nw;if(CE(c.ij,b.e.f5)){c=c.kf;CD(b,c.kV,c.sN,0);B0(b.r.bT,c.kV,c.sN);B0(b.r.bK,c.yl,c.yB);}else{d=(Cp(b.ez.rS)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Cl(b);b=new Sk;b.vp=g;b.vq=c;BN(b);c=new P1;c.vH=b;$rt_globals.setTimeout(Bj(c,"onTimer"),0);}}}
function UO(){var a=this;C.call(a);a.vL=null;a.vG=null;}
function APf(a){HE(a.vL,a.vG);}
function ACP(){var a=this;C.call(a);a.ix=null;a.e1=0;}
function AD1(a){var b=new ACP();AFk(b,a);return b;}
function AFk(a,b){a.ix=b;a.e1=0;}
function BC(a){var b,c;b=a.ix.data;c=a.e1;a.e1=c+1|0;return b[c];}
function Qw(a){var b,c,d,e;if(a.e1!=a.ix.data.length){b=EY();c=a.ix.data.length;d=a.e1;e=new N;P(e);H(V(H(V(H(e,B(403)),c),B(404)),d),B(405));Br(b,O(e));}}
var E1=G();
var AYD=null;var AYE=null;var AYF=null;var AYG=null;var AYH=null;var AYI=null;function ACd(){AYD=new VV;AYE=new VT;AYF=new VU;AYG=new VR;AYH=new VS;AYI=new Yr;}
var O6=G(0);
var Gh=G(EQ);
var Kk=G(Gh);
var VV=G(Kk);
var LC=G(ED);
var VT=G(LC);
var L5=G(F7);
var VU=G(L5);
var VR=G();
var Pw=G(0);
var VS=G();
var Yr=G();
var Jd=G(Gl);
var H5=G(Bq);
var L0=G(Bq);
function AA0(){C.call(this);this.BK=null;}
function SG(){var a=this;C.call(a);a.tV=null;a.t0=null;}
function AR2(a){var b,c;b=a.tV;c=a.t0;FS(b.d8,c);}
function PS(){C.call(this);this.vr=null;}
function AL_(a,b){HO(a.vr,b);}
function SQ(){var a=this;C.call(a);a.oS=null;a.oR=null;}
function AGn(a){var b,c;b=a.oS;c=a.oR;FS(b.d8,c);Ut(b);}
var YH=G();
function Sf(b,c){return b.data[c];}
function G9(){var a=this;C.call(a);a.eV=0;a.fv=0;a.k2=null;a.jR=0;a.g8=null;}
function AFJ(a,b,c,d,e,f){var g=new G9();AKU(g,a,b,c,d,e,f);return g;}
function AKU(a,b,c,d,e,f,g){a.eV=b;a.fv=c;a.k2=BZ(f,g);a.jR=d;a.g8=e;}
function ACZ(){Gh.call(this);this.C6=null;}
function Pl(){EQ.call(this);this.va=null;}
var QD=G(0);
var NI=G(0);
var L3=G();
function AAE(){var a=this;L3.call(a);a.E_=null;a.He=0;a.FM=0;a.Dk=0;}
function RR(){var a=this;C.call(a);a.oc=null;a.ob=null;}
function AG1(a){var b,c;b=a.oc;c=a.ob;Vb();Jn(b,c,AYJ);}
function RQ(){var a=this;C.call(a);a.po=null;a.pq=null;}
function AFm(a){var b,c;b=a.po;c=a.pq;Vb();Jn(b,c,AYK);}
function RP(){var a=this;C.call(a);a.vs=null;a.vt=null;}
function ALE(a){Jn(a.vs,a.vt,null);}
function RO(){var a=this;C.call(a);a.nv=null;a.ny=null;}
function AQz(a){var b,c,d,e,f,g,h;b=a.nv;c=a.ny;d=Do(b.bN.e);e=G6(b.bN.e);d=NA(b.bN.ez,d,e);DO(b.Y.cc);b=b.bN;e=EV(b,c);if(d!==null){f=b.e;g=e.bz;h=e.bJ;e=new PV;e.yd=b;e.ye=c;d.H_(f,g,h,1,e,b.g2);}}
function PL(){C.call(this);this.qw=null;}
function APT(a){var b;b=a.qw;DO(b.Y.cc);GH(b.bN,Oi(b),0);}
function PN(){C.call(this);this.tZ=null;}
function AKJ(a){var b;b=a.tZ;DO(b.Y.cc);GH(b.bN,Oi(b),1);}
function PO(){C.call(this);this.sV=null;}
function AHs(a){var b,c,d;b=a.sV;DO(b.Y.cc);c=IP(b);b=b.bN;BN(b);d=new Tm;d.sY=b;Q9(c,d,Y9(B(406)));}
var XM=G(0);
var AW8=null;function YT(){AW8=new PG;}
function Ww(){C.call(this);this.s_=null;}
function AGk(a){var b,c,d;b=a.s_;DO(b.Y.cc);c=IP(b);b=b.bN;BN(b);d=new Ru;d.q5=b;L1(c,d);}
function Tc(){C.call(this);this.rn=null;}
function AGe(a,b,c){var d,e;c=a.rn;d=c.e.f;e=b.gB;b=c.eW;XB(d.C.data[e],0,b);}
function QM(){var a=this;C.call(a);a.o4=null;a.o7=0;a.o8=0;a.o9=null;a.o$=0;a.o5=0;}
function AJ$(a,b){var c,d,e,f,g,h,i,j;c=a.o4;d=a.o7;e=a.o8;f=a.o9;g=a.o$;h=a.o5;i=Cx(c.bt,5.0);d=Ba((c.bt.cb.b-d|0)-i|0,Bc((i-d|0)-c.U.q.b|0,b.h.b));j=Ba((c.bt.cb.a-e|0)-i|0,Bc((i-e|0)-c.U.q.a|0,b.h.a));U(f,d+g|0,j+h|0);Fn(c,f,c.R.q);}
function XV(){var a=this;C.call(a);a.os=null;a.or=null;a.op=null;a.oo=0;a.ow=0;a.ov=0;a.ou=0;a.ot=0;a.oy=0;a.ox=0;a.sw=0;}
function ALD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.os;d=a.or;e=a.op;f=a.oo;g=a.ow;h=a.ov;i=a.ou;j=a.ot;k=a.oy;l=a.ox;m=a.sw;n=Cx(c.bt,5.0);o=c.R.jc();Ct(d,c.R.q);Ct(e,c.R.G);switch(f){case -1:f=Ba(h+(b.h.b-g|0)|0,c.bt.cb.b-n|0);g=o.b;h=h+i|0;f=Bc(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bc((i+b.h.b|0)-g|0,Bc(o.b,n-c.U.G.b|0));}b:{switch(j){case -1:f=Bc(n,Ba(l+(b.h.a-k|0)|0,(c.bt.cb.a+c.U.q.a|0)-n|0));g=o.a;h=l+m|0;f=Bc(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bc((m+b.h.a|0)-k|0,o.a);}Fn(c,e,d);}
function VE(){var a=this;C.call(a);a.vz=null;a.vA=0.0;}
function JZ(a,b){return KS(a.vz,b,a.vA*2.0+0.875);}
var W1=G(BB);
function S$(){C.call(this);this.oh=null;}
function ALd(a){AEx(a.oh);}
function S_(){C.call(this);this.rR=null;}
function AMw(a){LQ(a.rR);}
function S8(){C.call(this);this.vB=null;}
function ANU(a){AD0(a.vB);}
function Oo(){C.call(this);this.se=null;}
function AJ8(a){a.se.uS();}
function Om(){C.call(this);this.q2=null;}
function AQK(a){a.q2.vh();}
function Vy(){C.call(this);this.rD=null;}
function AHY(a){var b,c,d,e,f,g,h,i;b=a.rD;c=(b.oF.dp()).data;d=S(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Yy;i.p5=b;i.p4=h;e[f]=ACg(i,h,b.Y.X.V.bj);f=f+1|0;}return d;}
function V9(){C.call(this);this.tg=null;}
function AOw(a){var b,c,d,e,f;b=a.tg.e.f;c=b.cC;d=new N;P(d);V(H(d,B(407)),c);$rt_globals.console.info($rt_ustr(O(d)));c=b.gS;d=new N;P(d);V(H(d,B(408)),c);$rt_globals.console.info($rt_ustr(O(d)));d=b.da;e=FX(EH(b));Xp(d,0,d.dx,e);b=By();f=b.kp;f.data[0]=10;N$(b,f,0,1);}
function Wb(){C.call(this);this.nO=null;}
function ALl(a){S4(a.nO);}
function Wa(){C.call(this);this.r_=null;}
function AGc(a){W7(a.r_);}
function V$(){C.call(this);this.vJ=null;}
function AH6(a){HQ(a.vJ);}
function Wh(){C.call(this);this.rj=null;}
function ARq(a,b,c){FV(B3(a.rj.e.f,b.gB),0,J(c));}
function P$(){var a=this;C.call(a);a.n$=null;a.n9=null;}
function AIk(a,b){a.n$.l(ACo(a.n9,b));}
var I6=G(0);
function MU(){var a=this;C.call(a);a.mZ=null;a.mY=null;}
function AKK(a){Zk(a.mZ,a.mY);}
function MD(){var a=this;C.call(a);a.sf=null;a.sg=null;}
function AE9(a){a.sf.l(a.sg);}
var PG=G();
function XJ(){var a=this;C.call(a);a.m5=null;a.m4=null;a.m8=null;a.m6=null;}
function AJZ(a,b){var c,d,e,f,g,h,i;c=a.m5;d=a.m4;e=a.m8;f=a.m6;if(!(b.done?1:0)){UU(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new UB;c.pn=d;c.pp=g;c.pr=f;b.then(Bj(c,"f"),Bj(e,"f"));}else{h=f.data;c=g.values();b=FE(g.name);i=h.length;f=Dl(f,i+1|0);f.data[i]=b;UU(c,d,e,f);}}}
function G0(){var a=this;C.call(a);a.it=0;a.si=0;a.hE=null;a.g_=null;a.pB=null;a.jj=null;}
function AYL(a){var b=new G0();SV(b,a);return b;}
function SV(a,b){a.jj=b;a.si=b.c5;a.hE=null;}
function Jr(a){var b,c;if(a.hE!==null)return 1;while(true){b=a.it;c=a.jj.ca.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.it=b+1|0;}return 0;}
function AAc(a){var b;if(a.si==a.jj.c5)return;b=new IW;Z(b);L(b);}
function UE(a){var b,c,d,e;AAc(a);if(!Jr(a)){b=new Ym;Z(b);L(b);}b=a.hE;if(b!==null){c=a.g_;if(c!==null)a.pB=c;a.g_=b;a.hE=b.cQ;}else{d=a.jj.ca.data;e=a.it;a.it=e+1|0;b=d[e];a.g_=b;a.hE=b.cQ;a.pB=null;}}
var UX=G(G0);
var Rl=G(G0);
function Rj(){var a=this;C.call(a);a.g=null;a.dm=0;a.kd=null;a.nu=0;a.gi=0;a.eK=0;a.by=0;a.la=null;}
function J5(a){return a.g.bP;}
function X9(a,b,c,d){var e,f,g,h,i,j;e=CC();f=a.dm;g=0;if(c!=f)a.dm=c;a:{switch(b){case -1073741784:h=new R5;c=a.by+1|0;a.by=c;Fm(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new PT;c=a.by+1|0;a.by=c;Fm(h,c);break a;case -33554392:h=new Th;c=a.by+1|0;a.by=c;Fm(h,c);break a;default:c=a.gi+1|0;a.gi=c;if(d!==null)h=AUv(c);else{h=new Fz;Fm(h,0);g=1;}c=a.gi;if(c<=(-1))break a;if(c>=10)break a;a.kd.data[c]=h;break a;}h=new X4;Fm(h,(-1));}while(true){if(E2(a.g)&&a.g.j==(-536870788))
{d=AQ7(Ca(a,2),Ca(a,64));while(!Dj(a.g)&&E2(a.g)){i=a.g;j=i.j;if(j&&j!=(-536870788)&&j!=(-536870871))break;Cw(d,Bh(i));i=a.g;if(i.bi!=(-536870788))continue;Bh(i);}i=KU(a,d);i.P(h);}else if(a.g.bi==(-536870788)){i=GQ(h);Bh(a.g);}else{i=Pd(a,h);d=a.g;if(d.bi==(-536870788))Bh(d);}if(i!==null)B2(e,i);if(Dj(a.g))break;if(a.g.bi==(-536870871))break;}if(a.g.kA==(-536870788))B2(e,GQ(h));if(a.dm!=f&&!g){a.dm=f;d=a.g;d.f1=f;d.j=d.bi;d.eF=d.eR;j=d.c8;d.v=j+1|0;d.hb=j;E7(d);}switch(b){case -1073741784:break;case -536870872:d
=new MS;FA(d,e,h);return d;case -268435416:d=new Wx;FA(d,e,h);return d;case -134217688:d=new Rm;FA(d,e,h);return d;case -67108824:d=new T1;FA(d,e,h);return d;case -33554392:d=new DT;FA(d,e,h);return d;default:switch(e.i){case 0:break;case 1:return AUh(Bs(e,0),h);default:return ATS(e,h);}return GQ(h);}d=new Ja;FA(d,e,h);return d;}
function ADp(a){var b,c,d,e,f,g,h;b=BV(4);c=(-1);d=(-1);if(!Dj(a.g)&&E2(a.g)){e=b.data;c=Bh(a.g);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BQ(3);b=e.data;b[0]=c&65535;f=a.g;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bh(f);f=a.g;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bh(f);return AQO(e,3);}return AQO(e,2);}if(!Ca(a,2))return AAb(b[0]);if(Ca(a,64))return AOO(b[0]);return AHa(b[0]);}e=b.data;c=1;while(c<4&&!Dj(a.g)&&E2(a.g)){h=c+1|0;e[c]=Bh(a.g);c=h;}if(c==1){h=e[0];if(!(AYM.x1(h)==AYN?0:1))return X2(a,e[0]);}if
(!Ca(a,2))return AU_(b,c);if(Ca(a,64)){f=new XI;N4(f,b,c);return f;}f=new Uc;N4(f,b,c);return f;}
function Pd(a,b){var c,d,e,f,g,h,i;if(E2(a.g)&&!JS(a.g)&&Kp(a.g.j)){if(Ca(a,128)){c=ADp(a);if(!Dj(a.g)){d=a.g;e=d.bi;if(!(e==(-536870871)&&!(b instanceof Fz))&&e!=(-536870788)&&!E2(d))c=Mg(a,b,c);}}else if(!Oc(a.g)&&!VC(a.g)){f=new Oe;P(f);while(!Dj(a.g)&&E2(a.g)&&!Oc(a.g)&&!VC(a.g)){if(!(!JS(a.g)&&!a.g.j)&&!(!JS(a.g)&&Kp(a.g.j))){g=a.g.j;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bh(a.g);if(!Ma(e))BG(f,e&65535);else Ix(f,Gv(e));}if(!Ca(a,2)){c=new RT;DB(c);c.cq
=O(f);e=f.Q;c.bM=e;c.ku=AM6(e);c.ld=AM6(c.bM);h=0;while(h<(c.bM-1|0)){Rq(c.ku,M(c.cq,h),(c.bM-h|0)-1|0);Rq(c.ld,M(c.cq,(c.bM-h|0)-1|0),(c.bM-h|0)-1|0);h=h+1|0;}}else if(Ca(a,64))c=AU$(f);else{c=new Np;DB(c);c.hd=O(f);c.bM=f.Q;}}else c=Mg(a,b,XH(a,b));}else{d=a.g;if(d.bi!=(-536870871))c=Mg(a,b,XH(a,b));else{if(b instanceof Fz)L(B$(B(31),d.bP,Oa(d)));c=GQ(b);}}a:{if(!Dj(a.g)){e=a.g.bi;if(!(e==(-536870871)&&!(b instanceof Fz))&&e!=(-536870788)){f=Pd(a,b);if(c instanceof C4&&!(c instanceof E8)&&!(c instanceof CR)
&&!(c instanceof EA)){i=c;if(!f.bU(i.J)){c=new WM;ET(c,i.J,i.d,i.hC);c.J.P(c);}}if((f.hF()&65535)!=43)c.P(f);else c.P(f.J);break a;}}if(c===null)return null;c.P(b);}if((c.hF()&65535)!=43)return c;return c.J;}
function Mg(a,b,c){var d,e,f,g,h;d=a.g;e=d.bi;if(c!==null&&!(c instanceof BW)){switch(e){case -2147483606:Bh(d);d=new Yv;Dd(d,c,b,e);Mo();c.P(AYO);return d;case -2147483605:Bh(d);d=new PK;Dd(d,c,b,(-2147483606));Mo();c.P(AYO);return d;case -2147483585:Bh(d);d=new Po;Dd(d,c,b,(-536870849));Mo();c.P(AYO);return d;case -2147483525:f=new Nj;d=Fc(d);g=a.eK+1|0;a.eK=g;Jj(f,d,c,b,(-536870849),g);Mo();c.P(AYO);return f;case -1073741782:case -1073741781:Bh(d);d=new RK;Dd(d,c,b,e);c.P(d);return d;case -1073741761:Bh(d);d
=new Qz;Dd(d,c,b,(-536870849));c.P(b);return d;case -1073741701:h=new Ve;d=Fc(d);e=a.eK+1|0;a.eK=e;Jj(h,d,c,b,(-536870849),e);c.P(h);return h;case -536870870:case -536870869:Bh(d);if(c.hF()!=(-2147483602)){d=new CR;Dd(d,c,b,e);}else if(Ca(a,32)){d=new RM;Dd(d,c,b,e);}else{d=new Op;f=Pr(a.dm);Dd(d,c,b,e);d.kz=f;}c.P(d);return d;case -536870849:Bh(d);d=new FR;Dd(d,c,b,(-536870849));c.P(b);return d;case -536870789:h=new Fd;d=Fc(d);e=a.eK+1|0;a.eK=e;Jj(h,d,c,b,(-536870849),e);c.P(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bh(d);d=new Yw;ET(d,f,b,e);f.d=d;return d;case -2147483585:Bh(d);c=new WI;ET(c,f,b,(-2147483585));return c;case -2147483525:c=new Pb;Sv(c,Fc(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bh(d);d=new Qs;ET(d,f,b,e);f.d=d;return d;case -1073741761:Bh(d);c=new Ur;ET(c,f,b,(-1073741761));return c;case -1073741701:c=new Rn;Sv(c,Fc(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bh(d);d=AUn(f,b,e);f.d=d;return d;case -536870849:Bh(d);c
=new EA;ET(c,f,b,(-536870849));return c;case -536870789:return ATr(Fc(d),f,b,(-536870789));default:}return c;}
function XH(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Fz;while(true){a:{e=a.g;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bh(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dm=g;else{if(f!=(-1073741784))g=a.dm;c=X9(a,f,g,b);e=a.g;if(e.bi!=(-536870871))L(B$(B(31),e.bP,e.c8));Bh(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bh(e);c
=AQy(0);break a;case -2147483577:Bh(e);c=new Ok;BO(c);break a;case -2147483558:Bh(e);c=new Xq;h=a.by+1|0;a.by=h;ADS(c,h);break a;case -2147483550:Bh(e);c=AQy(1);break a;case -2147483526:Bh(e);c=new W8;BO(c);break a;case -536870876:Bh(e);a.by=a.by+1|0;if(Ca(a,8)){if(Ca(a,1)){c=ATH(a.by);break a;}c=ASZ(a.by);break a;}if(Ca(a,1)){c=ATX(a.by);break a;}c=AUB(a.by);break a;case -536870866:Bh(e);if(Ca(a,32)){c=AUV();break a;}c=AUt(Pr(a.dm));break a;case -536870821:Bh(e);i=0;c=a.g;if(c.bi==(-536870818)){i=1;Bh(c);}c
=KU(a,F4(a,i));c.P(b);e=a.g;if(e.bi!=(-536870819))L(B$(B(31),e.bP,e.c8));OS(e,1);Bh(a.g);break a;case -536870818:Bh(e);a.by=a.by+1|0;if(!Ca(a,8)){c=new Kv;BO(c);break a;}c=new Nw;e=Pr(a.dm);BO(c);c.ra=e;break a;case 0:j=e.eR;if(j!==null)c=KU(a,j);else{if(Dj(e)){c=GQ(b);break a;}c=AAb(f&65535);}Bh(a.g);break a;default:break b;}Bh(e);c=new Kv;BO(c);break a;}h=(f&2147483647)-48|0;if(a.gi<h)L(B$(B(31),Fj(e),Oa(a.g)));Bh(e);a.by=a.by+1|0;c=!Ca(a,2)?AS4(h,a.by):Ca(a,64)?ATI(h,a.by):AU6(h,a.by);a.kd.data[h].kb=1;a.nu
=1;break a;}if(f>=0&&!GS(e)){c=X2(a,f);Bh(a.g);}else if(f==(-536870788))c=GQ(b);else{if(f!=(-536870871)){b=new I1;c=!GS(a.g)?Xo(f&65535):a.g.eR.cB();e=a.g;Jt(b,c,e.bP,e.c8);L(b);}if(d){b=new I1;e=a.g;Jt(b,B(31),e.bP,e.c8);L(b);}c=GQ(b);}}}if(f!=(-16777176))break;}return c;}
function F4(a,b){var c,d,e,f,g,h,i,j,$$je;c=AQ7(Ca(a,2),Ca(a,64));Eu(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dj(a.g))break a;h=a.g;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)Cw(c,d);d=Bh(a.g);h=a.g;if(h.bi!=(-536870874)){d=38;break d;}if(h.j==(-536870821)){Bh(h);e=1;d=(-1);break d;}Bh(h);if(g){c=F4(a,0);break d;}if(a.g.bi==(-536870819))break d;Xd(c,F4(a,0));break d;case -536870867:if(!g){b=h.j;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bh(h);h=a.g;i=h.bi;if(GS(h))break c;if
(i<0){j=a.g.j;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Kp(i))break e;i=i&65535;break e;}catch($$e){$$je=Ej($$e);if($$je instanceof D6){break b;}else{throw $$e;}}}try{BT(c,d,i);}catch($$e){$$je=Ej($$e);if($$je instanceof D6){break b;}else{throw $$e;}}Bh(a.g);d=(-1);break d;}}if(d>=0)Cw(c,d);d=45;Bh(a.g);break d;case -536870821:if(d>=0){Cw(c,d);d=(-1);}Bh(a.g);j=0;h=a.g;if(h.bi==(-536870818)){Bh(h);j=1;}if(!e)YK(c,F4(a,j));else Xd(c,F4(a,j));e=0;Bh(a.g);break d;case -536870819:if(d>=0)Cw(c,
d);d=93;Bh(a.g);break d;case -536870818:if(d>=0)Cw(c,d);d=94;Bh(a.g);break d;case 0:if(d>=0)Cw(c,d);h=a.g.eR;if(h===null)d=0;else{AES(c,h);d=(-1);}Bh(a.g);break d;default:}if(d>=0)Cw(c,d);d=Bh(a.g);}g=0;}L(B$(B(31),J5(a),a.g.c8));}L(B$(B(31),J5(a),a.g.c8));}if(!f){if(d>=0)Cw(c,d);return c;}L(B$(B(31),J5(a),a.g.c8-1|0));}
function X2(a,b){var c,d,e;c=Ma(b);if(Ca(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AHa(b&65535);}if(Ca(a,64)&&b>128){if(c){d=new MJ;DB(d);d.bM=2;d.qC=GE(GD(b));return d;}if(O2(b))return ANb(b&65535);if(!SS(b))return AOO(b&65535);return AKu(b&65535);}}if(!c){if(O2(b))return ANb(b&65535);if(!SS(b))return AAb(b&65535);return AKu(b&65535);}d=new DX;DB(d);d.bM=2;d.fL=b;e=(Gv(b)).data;d.jK=e[0];d.ik=e[1];return d;}
function KU(a,b){var c,d,e;if(!AB8(b)){if(!b.L){if(b.gU())return AJT(b);return AQA(b);}if(!b.gU())return ALb(b);c=new Jl;UH(c,b);return c;}c=Zb(b);d=new M1;BO(d);d.ph=c;d.vX=c.bh;if(!b.L){if(b.gU())return ACN(AJT(HA(b)),d);return ACN(AQA(HA(b)),d);}if(!b.gU())return ACN(ALb(HA(b)),d);c=new Qo;e=new Jl;UH(e,HA(b));AEA(c,e,d);return c;}
function HB(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ca(a,b){return (a.dm&b)!=b?0:1;}
function Tb(){C.call(this);this.oj=null;}
function AGr(a,b){b.d_=a.oj.d_;}
var Gw=G(Ck);
var AYK=null;var AYJ=null;var AYP=null;function Vb(){Vb=Bp(Gw);AIp();}
function AKR(a,b){var c=new Gw();Z6(c,a,b);return c;}
function Z6(a,b,c){Vb();Da(a,b,c);}
function AIp(){var b;AYK=AKR(B(409),0);b=AKR(B(410),1);AYJ=b;AYP=I(Gw,[AYK,b]);}
function Tm(){C.call(this);this.sY=null;}
function ALp(a,b){Du(a.sY,b);}
function BF(){var a=this;C.call(a);a.d=null;a.cj=0;a.oC=null;a.hC=0;}
var AVJ=0;function BO(a){var b;b=AVJ;AVJ=b+1|0;a.oC=Ly(b);}
function KR(a,b){var c;c=AVJ;AVJ=c+1|0;a.oC=Ly(c);a.d=b;}
function HK(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function H0(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AHE(a,b){a.hC=b;}
function AGQ(a){return a.hC;}
function AP1(a){return a.d;}
function AQX(a,b){a.d=b;}
function AQU(a,b){return 1;}
function ARR(a){return null;}
function Jg(a){var b;a.cj=1;b=a.d;if(b!==null){if(!b.cj){b=b.fq();if(b!==null){a.d.cj=1;a.d=b;}a.d.eg();}else if(b instanceof Gz&&b.el.kb)a.d=b.d;}}
function AEK(){AVJ=1;}
var UQ=G();
var AYC=null;function ATd(){ATd=Bp(UQ);AGu();}
function AGu(){var b,c;Vb();b=BV((AYP.gE()).data.length);c=b.data;AYC=b;c[AYK.eP]=1;c[AYJ.eP]=2;}
function Pm(){C.call(this);this.p6=null;}
function AHO(a,b){UI(IP(a.p6),b,AXf,Y9(B(411)));}
function Wl(){C.call(this);this.ud=null;}
function AJt(a,b){var c,d;c=a.ud;d=b.hw;b=new N;P(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(O(b)));}
function Yy(){var a=this;C.call(a);a.p5=null;a.p4=null;}
function AHz(a){var b,c;b=a.p5;c=a.p4;b.h2.s2(c);}
function CP(){var a=this;BF.call(a);a.kb=0;a.dw=0;}
var AYO=null;function Mo(){Mo=Bp(CP);AIU();}
function AUv(a){var b=new CP();Fm(b,a);return b;}
function Fm(a,b){Mo();BO(a);a.dw=b;}
function AGj(a,b,c,d){var e,f;e=IG(d,a.dw);JJ(d,a.dw,b);f=a.d.c(b,c,d);if(f<0)JJ(d,a.dw,e);return f;}
function AMg(a){return a.dw;}
function AGE(a,b){return 0;}
function AIU(){var b;b=new Of;BO(b);AYO=b;}
function GN(){var a=this;C.call(a);a.bg=null;a.f1=0;a.eH=0;a.t6=0;a.kA=0;a.bi=0;a.j=0;a.rJ=0;a.eR=null;a.eF=null;a.v=0;a.hM=0;a.c8=0;a.hb=0;a.bP=null;}
var AYQ=null;var AYM=null;var AYN=0;function OS(a,b){if(b>0&&b<3)a.eH=b;if(b==1){a.j=a.bi;a.eF=a.eR;a.v=a.hb;a.hb=a.c8;E7(a);}}
function GS(a){return a.eR===null?0:1;}
function JS(a){return a.eF===null?0:1;}
function Bh(a){E7(a);return a.kA;}
function Fc(a){var b;b=a.eR;E7(a);return b;}
function E7(a){var b,c,d,e,f,g,h,$$je;a.kA=a.bi;a.bi=a.j;a.eR=a.eF;a.c8=a.hb;a.hb=a.v;while(true){b=0;c=a.v>=a.bg.data.length?0:LL(a);a.j=c;a.eF=null;if(a.eH==4){if(c!=92)return;c=a.v;d=a.bg.data;c=c>=d.length?0:d[BU(a)];a.j=c;switch(c){case 69:break;default:a.j=92;a.v=a.hM;return;}a.eH=a.t6;a.j=a.v>(a.bg.data.length-2|0)?0:LL(a);}a:{c=a.j;if(c!=92){e=a.eH;if(e==1)switch(c){case 36:a.j=(-536870876);break a;case 40:if(a.bg.data[a.v]!=63){a.j=(-2147483608);break a;}BU(a);c=a.bg.data[a.v];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.j=(-134217688);BU(a);break b;default:L(B$(B(31),Fj(a),a.v));}a.j=(-67108824);BU(a);}else{switch(c){case 33:break;case 60:BU(a);c=a.bg.data[a.v];e=1;break b;case 61:a.j=(-536870872);BU(a);break b;case 62:a.j=(-33554392);BU(a);break b;default:f=AEL(a);a.j=f;if(f<256){a.f1=f;f=f<<16;a.j=f;a.j=(-1073741784)|f;break b;}f=f&255;a.j=f;a.f1=f;f=f<<16;a.j=f;a.j=(-16777176)|f;break b;}a.j=(-268435416);BU(a);}}if(!e)break;}break a;case 41:a.j=(-536870871);break a;case 42:case 43:case 63:e
=a.v;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.j=c|(-2147483648);BU(a);break a;case 63:a.j=c|(-1073741824);BU(a);break a;default:}a.j=c|(-536870912);break a;case 46:a.j=(-536870866);break a;case 91:a.j=(-536870821);OS(a,2);break a;case 93:if(e!=2)break a;a.j=(-536870819);break a;case 94:a.j=(-536870818);break a;case 123:a.eF=AEc(a,c);break a;case 124:a.j=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.j=(-536870874);break a;case 45:a.j=(-536870867);break a;case 91:a.j=(-536870821);break a;case 93:a.j
=(-536870819);break a;case 94:a.j=(-536870818);break a;default:}}else{c=a.v>=(a.bg.data.length-2|0)?(-1):LL(a);c:{a.j=c;switch(c){case -1:L(B$(B(31),Fj(a),a.v));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.j
=ACx(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.eH!=1)break a;a.j=(-2147483648)|c;break a;case 65:a.j=(-2147483583);break a;case 66:a.j=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:L(B$(B(31),Fj(a),a.v));case 68:case 83:case 87:case 100:case 115:case 119:a.eF=Sl(HC(a.bg,
a.hM,1),0);a.j=0;break a;case 71:a.j=(-2147483577);break a;case 80:case 112:break c;case 81:a.t6=a.eH;a.eH=4;b=1;break a;case 90:a.j=(-2147483558);break a;case 97:a.j=7;break a;case 98:a.j=(-2147483550);break a;case 99:c=a.v;d=a.bg.data;if(c>=(d.length-2|0))L(B$(B(31),Fj(a),a.v));a.j=d[BU(a)]&31;break a;case 101:a.j=27;break a;case 102:a.j=12;break a;case 110:a.j=10;break a;case 114:a.j=13;break a;case 116:a.j=9;break a;case 117:a.j=PQ(a,4);break a;case 120:a.j=PQ(a,2);break a;case 122:a.j=(-2147483526);break a;default:}break a;}g
=ACi(a);h=0;if(a.j==80)h=1;try{a.eF=Sl(g,h);}catch($$e){$$je=Ej($$e);if($$je instanceof Jo){L(B$(B(31),Fj(a),a.v));}else{throw $$e;}}a.j=0;}}if(b)continue;else break;}}
function ACi(a){var b,c,d,e,f,g;b=new N;FZ(b,10);c=a.v;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=HC(d,BU(a),1);f=new N;P(f);H(H(f,B(412)),b);return O(f);}BU(a);c=0;a:{while(true){g=a.v;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[BU(a)];if(c==125)break a;BG(b,c);}}if(c!=125)L(B$(B(31),a.bP,a.v));}if(!b.Q)L(B$(B(31),a.bP,a.v));f=O(b);if(J(f)==1){b=new N;P(b);H(H(b,B(412)),f);return O(b);}b:{c:{if(J(f)>3){if(KI(f,B(412)))break c;if(KI(f,B(413)))break c;}break b;}f=Dk(f,2);}return f;}
function AEc(a,b){var c,d,e,f,g,$$je;c=new N;FZ(c,4);d=(-1);e=2147483647;a:{while(true){f=a.v;g=a.bg.data;if(f>=g.length)break a;b=g[BU(a)];if(b==125)break a;if(b==44&&d<0)try{d=JF(DW(c),10);AEi(c,0,Zo(c));continue;}catch($$e){$$je=Ej($$e);if($$je instanceof De){break;}else{throw $$e;}}BG(c,b&65535);}L(B$(B(31),a.bP,a.v));}if(b!=125)L(B$(B(31),a.bP,a.v));if(c.Q>0)b:{try{e=JF(DW(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Ej($$e);if($$je instanceof De){}else{throw $$e;}}L(B$(B(31),a.bP,a.v));}else if
(d<0)L(B$(B(31),a.bP,a.v));if((d|e|(e-d|0))<0)L(B$(B(31),a.bP,a.v));b=a.v;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.j=(-2147483525);BU(a);break c;case 63:a.j=(-1073741701);BU(a);break c;default:}a.j=(-536870789);}c=new M_;c.eG=d;c.eC=e;return c;}
function Fj(a){return a.bP;}
function Dj(a){return !a.bi&&!a.j&&a.v==a.rJ&&!GS(a)?1:0;}
function Kp(b){return b<0?0:1;}
function E2(a){return !Dj(a)&&!GS(a)&&Kp(a.bi)?1:0;}
function Oc(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function VC(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function SS(b){return b<=56319&&b>=55296?1:0;}
function O2(b){return b<=57343&&b>=56320?1:0;}
function PQ(a,b){var c,d,e,f,$$je;c=new N;FZ(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BD(e,b);if(f>=0)break;if(a.v>=d)break;BG(c,a.bg.data[BU(a)]);e=e+1|0;}if(!f)a:{try{b=JF(DW(c),16);}catch($$e){$$je=Ej($$e);if($$je instanceof De){break a;}else{throw $$e;}}return b;}L(B$(B(31),a.bP,a.v));}
function ACx(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=U9(d[a.v],8);switch(f){case -1:break;default:if(f>3)b=2;BU(a);a:{while(true){if(c>=b)break a;g=a.v;if(g>=e)break a;g=U9(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;BU(a);c=c+1|0;}}return f;}L(B$(B(31),a.bP,a.v));}
function AEL(a){var b,c,d,e;b=1;c=a.f1;a:while(true){d=a.v;e=a.bg.data;if(d>=e.length)L(B$(B(31),a.bP,d));b:{c:{switch(e[d]){case 41:BU(a);return c|256;case 45:if(!b)L(B$(B(31),a.bP,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}BU(a);}BU(a);return c;}
function BU(a){var b,c,d,e,f;b=a.v;a.hM=b;if(!(a.f1&4))a.v=b+1|0;else{c=a.bg.data.length-2|0;a.v=b+1|0;a:while(true){d=a.v;if(d<c&&Rk(a.bg.data[d])){a.v=a.v+1|0;continue;}d=a.v;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.v=d+1|0;while(true){f=a.v;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.v=f+1|0;}}}return a.hM;}
function AD4(b){return AYQ.CT(b);}
function LL(a){var b,c,d,e;b=a.bg.data[BU(a)];if(CG(b)){c=a.hM+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(C6(e)){BU(a);return Ev(b,e);}}}return b;}
function Oa(a){return a.c8;}
function I1(){var a=this;BH.call(a);a.xI=null;a.xb=null;a.qo=0;}
function B$(a,b,c){var d=new I1();Jt(d,a,b,c);return d;}
function Jt(a,b,c,d){Z(a);a.qo=(-1);a.xI=b;a.xb=c;a.qo=d;}
function Xs(){C.call(this);this.tT=null;}
function AOa(a,b){var c,d;c=a.tT;d=0;while(d<b.length){Zk(c,b[d]);d=d+1|0;}}
var ACc=G(0);
function UB(){var a=this;C.call(a);a.pn=null;a.pp=null;a.pr=null;}
function ANL(a,b){a.pn.l(AS0(a.pp,b,a.pr));}
var R5=G(CP);
function AFT(a,b,c,d){var e;e=a.dw;BK(d,e,b-Dm(d,e)|0);return a.d.c(b,c,d);}
function APr(a,b){return 0;}
var X4=G(CP);
function AHC(a,b,c,d){return b;}
var PT=G(CP);
function AGN(a,b,c,d){if(Dm(d,a.dw)!=b)b=(-1);return b;}
function Th(){CP.call(this);this.nh=0;}
function AFY(a,b,c,d){var e;e=a.dw;BK(d,e,b-Dm(d,e)|0);a.nh=b;return b;}
function ANW(a,b){return 0;}
var Fz=G(CP);
function ARc(a,b,c,d){if(d.jx!=1&&b!=d.x)return (-1);d.iR=1;JJ(d,0,b);return b;}
function BW(){BF.call(this);this.bM=0;}
function DB(a){BO(a);a.bM=1;}
function ASg(a,b,c,d){var e;if((b+a.b0()|0)>d.x){d.dh=1;return (-1);}e=a.bx(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function AQo(a){return a.bM;}
function AKS(a,b){return 1;}
var ADQ=G(BW);
function GQ(a){var b=new ADQ();AMq(b,a);return b;}
function AMq(a,b){KR(a,b);a.bM=1;a.hC=1;a.bM=0;}
function APS(a,b,c){return 0;}
function AI0(a,b,c,d){var e,f,g;e=d.x;f=d.cI;while(true){g=BD(b,e);if(g>0)return (-1);if(g<0&&C6(M(c,b))&&b>f&&CG(M(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AHr(a,b,c,d,e){var f,g;f=e.x;g=e.cI;while(true){if(c<b)return (-1);if(c<f&&C6(M(d,c))&&c>g&&CG(M(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AFW(a,b){return 0;}
function BS(){var a=this;BF.call(a);a.bF=null;a.el=null;a.Z=0;}
function ATS(a,b){var c=new BS();FA(c,a,b);return c;}
function FA(a,b,c){BO(a);a.bF=b;a.el=c;a.Z=c.dw;}
function AJC(a,b,c,d){var e,f,g,h;if(a.bF===null)return (-1);e=FD(d,a.Z);DA(d,a.Z,b);f=a.bF.i;g=0;while(true){if(g>=f){DA(d,a.Z,e);return (-1);}h=(Bs(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ANO(a,b){a.el.d=b;}
function ALF(a,b){var c;a:{c=a.bF;if(c!==null){c=B9(c);while(true){if(!Cd(c))break a;if(!(B_(c)).bU(b))continue;else return 1;}}}return 0;}
function AOA(a,b){return IG(b,a.Z)>=0&&FD(b,a.Z)==IG(b,a.Z)?0:1;}
function AHn(a){var b,c,d,e;a.cj=1;b=a.el;if(b!==null&&!b.cj)Jg(b);a:{b=a.bF;if(b!==null){c=b.i;d=0;while(true){if(d>=c)break a;b=Bs(a.bF,d);e=b.fq();if(e===null)e=b;else{b.cj=1;D8(a.bF,d);RJ(a.bF,d,e);}if(!e.cj)e.eg();d=d+1|0;}}}if(a.d!==null)Jg(a);}
var Ja=G(BS);
function ANx(a,b,c,d){var e,f,g,h;e=Dm(d,a.Z);BK(d,a.Z,b);f=a.bF.i;g=0;while(true){if(g>=f){BK(d,a.Z,e);return (-1);}h=(Bs(a.bF,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AO1(a,b){return !Dm(b,a.Z)?0:1;}
var DT=G(Ja);
function AH7(a,b,c,d){var e,f,g;e=Dm(d,a.Z);BK(d,a.Z,b);f=a.bF.i;g=0;while(g<f){if((Bs(a.bF,g)).c(b,c,d)>=0)return a.d.c(a.el.nh,c,d);g=g+1|0;}BK(d,a.Z,e);return (-1);}
function AOH(a,b){a.d=b;}
var MS=G(DT);
function ANH(a,b,c,d){var e,f;e=a.bF.i;f=0;while(f<e){if((Bs(a.bF,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function AQ2(a,b){return 0;}
var Wx=G(DT);
function AGz(a,b,c,d){var e,f;e=a.bF.i;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bF,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AQs(a,b){return 0;}
var Rm=G(DT);
function AHh(a,b,c,d){var e,f,g,h;e=a.bF.i;f=d.i3?0:d.cI;a:{g=a.d.c(b,c,d);if(g>=0){BK(d,a.Z,b);h=0;while(true){if(h>=e)break a;if((Bs(a.bF,h)).cp(f,b,c,d)>=0){BK(d,a.Z,(-1));return g;}h=h+1|0;}}}return (-1);}
function ASH(a,b){return 0;}
var T1=G(DT);
function AFn(a,b,c,d){var e,f;e=a.bF.i;BK(d,a.Z,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Bs(a.bF,f)).cp(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function APe(a,b){return 0;}
function Gz(){BS.call(this);this.cU=null;}
function AUh(a,b){var c=new Gz();ZY(c,a,b);return c;}
function ZY(a,b,c){BO(a);a.cU=b;a.el=c;a.Z=c.dw;}
function AFN(a,b,c,d){var e,f;e=FD(d,a.Z);DA(d,a.Z,b);f=a.cU.c(b,c,d);if(f>=0)return f;DA(d,a.Z,e);return (-1);}
function ALZ(a,b,c,d){var e;e=a.cU.cm(b,c,d);if(e>=0)DA(d,a.Z,e);return e;}
function APy(a,b,c,d,e){var f;f=a.cU.cp(b,c,d,e);if(f>=0)DA(e,a.Z,f);return f;}
function ALA(a,b){return a.cU.bU(b);}
function ANS(a){var b;b=new Nd;ZY(b,a.cU,a.el);a.d=b;return b;}
function ARU(a){var b;a.cj=1;b=a.el;if(b!==null&&!b.cj)Jg(b);b=a.cU;if(b!==null&&!b.cj){b=b.fq();if(b!==null){a.cU.cj=1;a.cU=b;}a.cU.eg();}}
var GP=G();
function X(){var a=this;GP.call(a);a.bh=0;a.cg=0;a.K=null;a.jC=null;a.j8=null;a.L=0;}
var AYR=null;function OM(){OM=Bp(X);AHQ();}
function Bt(a){var b;OM();b=new Xn;b.B=BV(64);a.K=b;}
function AGB(a){return null;}
function AF8(a){return a.K;}
function AB8(a){var b,c,d,e,f;if(!a.cg)b=Hi(a.K,0)>=2048?0:1;else{a:{c=a.K;b=0;d=c.bs;if(b<d){e=c.B.data;f=(e[0]^(-1))>>>0|0;if(f)b=Iw(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Iw(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AJS(a){return a.L;}
function AQi(a){return a;}
function Zb(a){var b,c;if(a.j8===null){b=a.eQ();c=new WK;c.x9=a;c.nL=b;Bt(c);a.j8=c;Eu(c,a.cg);}return a.j8;}
function HA(a){var b,c;if(a.jC===null){b=a.eQ();c=new WJ;c.xL=a;c.ty=b;c.ug=a;Bt(c);a.jC=c;Eu(c,a.bh);a.jC.L=a.L;}return a.jC;}
function ARQ(a){return 0;}
function Eu(a,b){var c;c=a.bh;if(c^b){a.bh=c?0:1;a.cg=a.cg?0:1;}if(!a.L)a.L=1;return a;}
function AI2(a){return a.bh;}
function Km(b,c){OM();return b.k(c);}
function Iu(b,c){var d,e;OM();if(b.de()!==null&&c.de()!==null){b=b.de();c=c.de();d=Ba(b.B.data.length,c.B.data.length);e=0;a:{while(e<d){if(b.B.data[e]&c.B.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Sl(b,c){var d,e,f;OM();d=0;while(true){APc();e=AYS.data;if(d>=e.length){f=new Jo;Bo(f,B(31));f.yv=B(31);f.yb=b;L(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return ADe(e[1],c);}
function AHQ(){var b;b=new G_;APc();AYR=b;}
function ZN(){var a=this;X.call(a);a.lh=0;a.nf=0;a.gj=0;a.kU=0;a.dQ=0;a.fk=0;a.H=null;a.bE=null;}
function Dn(){var a=new ZN();ASp(a);return a;}
function AQ7(a,b){var c=new ZN();AHD(c,a,b);return c;}
function ASp(a){Bt(a);a.H=ASJ();}
function AHD(a,b,c){Bt(a);a.H=ASJ();a.lh=b;a.nf=c;}
function Cw(a,b){a:{if(a.lh){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.dQ){Mw(a.H,HB(b&65535));break a;}LG(a.H,HB(b&65535));break a;}if(a.nf&&b>128){a.gj=1;b=GE(GD(b));}}}if(!(!SS(b)&&!O2(b))){if(a.kU)Mw(a.K,b-55296|0);else LG(a.K,b-55296|0);}if(a.dQ)Mw(a.H,b);else LG(a.H,b);if(!a.L&&Ma(b))a.L=1;return a;}
function AES(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(a.kU){if(!b.cg)FT(a.K,b.eQ());else Db(a.K,b.eQ());}else if(!b.cg)FM(a.K,b.eQ());else{Fr(a.K,b.eQ());Db(a.K,b.eQ());a.cg=a.cg?0:1;a.kU=1;}if(!a.fk&&b.de()!==null){if(a.dQ){if(!b.bh)FT(a.H,b.de());else Db(a.H,b.de());}else if(!b.bh)FM(a.H,b.de());else{Fr(a.H,b.de());Db(a.H,b.de());a.bh=a.bh?0:1;a.dQ=1;}}else{c=a.bh;d=a.bE;if(d!==null){if(!c){e=new OE;e.wf=a;e.uN=c;e.t2=d;e.tR=b;Bt(e);a.bE=e;}else{e=new OF;e.yD=a;e.q4=c;e.qH=d;e.pV=b;Bt(e);a.bE=e;}}else{if(c&&!a.dQ
&&Md(a.H)){d=new OB;d.xa=a;d.qR=b;Bt(d);a.bE=d;}else if(!c){d=new Oz;d.kE=a;d.jT=c;d.oq=b;Bt(d);a.bE=d;}else{d=new OA;d.lv=a;d.j1=c;d.tW=b;Bt(d);a.bE=d;}a.fk=1;}}return a;}
function BT(a,b,c){var d,e,f,g,h;if(b>c){d=new BH;Z(d);L(d);}a:{b:{if(!a.lh){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cw(a,b);b=b+1|0;}}if(!a.dQ)H7(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new BB;Z(d);L(d);}e=d.bs;if(b<e){f=Ba(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.B.data;h[g]=h[g]&(Io(d,b)|HT(d,f));}else{h=d.B.data;h[g]=h[g]&Io(d,b);e=g+1|0;while(e<c){d.B.data[e]=0;e=e+1|0;}if(f&31){h=d.B.data;h[c]=h[c]&HT(d,f);}}Hc(d);}}}}return a;}
function YK(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gj)a.gj=1;c=a.cg;if(!(c^b.cg)){if(!c)FM(a.K,b.K);else Db(a.K,b.K);}else if(c)FT(a.K,b.K);else{Fr(a.K,b.K);Db(a.K,b.K);a.cg=1;}if(!a.fk&&CV(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)FM(a.H,CV(b));else Db(a.H,CV(b));}else if(c)FT(a.H,CV(b));else{Fr(a.H,CV(b));Db(a.H,CV(b));a.bh=1;}}else{c=a.bh;d=a.bE;if(d!==null){if(!c){e=new Ou;e.v2=a;e.s1=c;e.tU=d;e.uv=b;Bt(e);a.bE=e;}else{e=new Pi;e.wo=a;e.us=c;e.mW=d;e.nj=b;Bt(e);a.bE=e;}}else{if(!a.dQ&&Md(a.H)){if(!c){d=new OC;d.yJ
=a;d.py=b;Bt(d);a.bE=d;}else{d=new OD;d.ws=a;d.uc=b;Bt(d);a.bE=d;}}else if(!c){d=new OG;d.s4=a;d.rl=b;d.qM=c;Bt(d);a.bE=d;}else{d=new OH;d.rN=a;d.r9=b;d.sk=c;Bt(d);a.bE=d;}a.fk=1;}}}
function Xd(a,b){var c,d,e;if(!a.L&&b.L)a.L=1;if(b.gj)a.gj=1;c=a.cg;if(!(c^b.cg)){if(!c)Db(a.K,b.K);else FM(a.K,b.K);}else if(!c)FT(a.K,b.K);else{Fr(a.K,b.K);Db(a.K,b.K);a.cg=0;}if(!a.fk&&CV(b)!==null){c=a.bh;if(!(c^b.bh)){if(!c)Db(a.H,CV(b));else FM(a.H,CV(b));}else if(!c)FT(a.H,CV(b));else{Fr(a.H,CV(b));Db(a.H,CV(b));a.bh=0;}}else{c=a.bh;d=a.bE;if(d!==null){if(!c){e=new Ow;e.we=a;e.s$=c;e.nJ=d;e.q0=b;Bt(e);a.bE=e;}else{e=new Ox;e.wy=a;e.sA=c;e.mL=d;e.s0=b;Bt(e);a.bE=e;}}else{if(!a.dQ&&Md(a.H)){if(!c){d=new Or;d.wt
=a;d.o_=b;Bt(d);a.bE=d;}else{d=new Os;d.yz=a;d.pe=b;Bt(d);a.bE=d;}}else if(!c){d=new Oy;d.vE=a;d.uK=b;d.r1=c;Bt(d);a.bE=d;}else{d=new Oq;d.rZ=a;d.sF=b;d.q6=c;Bt(d);a.bE=d;}a.fk=1;}}}
function C0(a,b){var c;c=a.bE;if(c!==null)return a.bh^c.k(b);return a.bh^Dw(a.H,b);}
function CV(a){if(!a.fk)return a.H;return null;}
function AIT(a){return a.K;}
function AQI(a){var b,c;if(a.bE!==null)return a;b=CV(a);c=new Ov;c.vY=a;c.io=b;Bt(c);return Eu(c,a.bh);}
function AMU(a){var b,c,d;b=new N;P(b);c=Hi(a.H,0);while(c>=0){Ix(b,Gv(c));BG(b,124);c=Hi(a.H,c+1|0);}d=b.Q;if(d>0)Wz(b,d-1|0);return O(b);}
function AI5(a){return a.gj;}
function Jo(){var a=this;Bq.call(a);a.yv=null;a.yb=null;}
function D5(){BF.call(this);this.J=null;}
function Dd(a,b,c,d){KR(a,c);a.J=b;a.hC=d;}
function ASo(a){return a.J;}
function APB(a,b){return !a.J.bU(b)&&!a.d.bU(b)?0:1;}
function AQ9(a,b){return 1;}
function AMo(a){var b;a.cj=1;b=a.d;if(b!==null&&!b.cj){b=b.fq();if(b!==null){a.d.cj=1;a.d=b;}a.d.eg();}b=a.J;if(b!==null){if(!b.cj){b=b.fq();if(b!==null){a.J.cj=1;a.J=b;}a.J.eg();}else if(b instanceof Gz&&b.el.kb)a.J=b.d;}}
function C4(){D5.call(this);this.bd=null;}
function AUn(a,b,c){var d=new C4();ET(d,a,b,c);return d;}
function ET(a,b,c,d){Dd(a,b,c,d);a.bd=b;}
function AFp(a,b,c,d){var e,f;e=0;a:{while((b+a.bd.b0()|0)<=d.x){f=a.bd.bx(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.bd.b0()|0;e=e+(-1)|0;}return f;}
function E8(){C4.call(this);this.jw=null;}
function ATr(a,b,c,d){var e=new E8();Sv(e,a,b,c,d);return e;}
function Sv(a,b,c,d,e){ET(a,c,d,e);a.jw=b;}
function AGm(a,b,c,d){var e,f,g,h,i;e=a.jw;f=e.eG;g=e.eC;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bd.b0()|0)>d.x)break a;i=a.bd.bx(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.bd.b0()|0;h=h+(-1)|0;}return i;}if((b+a.bd.b0()|0)>d.x){d.dh=1;return (-1);}i=a.bd.bx(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CR=G(D5);
function AFM(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EA=G(C4);
function AL5(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function ASK(a,b){a.d=b;a.J.P(b);}
var WM=G(C4);
function AR$(a,b,c,d){while((b+a.bd.b0()|0)<=d.x&&a.bd.bx(b,c)>0){b=b+a.bd.b0()|0;}return a.d.c(b,c,d);}
function AMQ(a,b,c,d){var e,f,g;e=a.d.cm(b,c,d);if(e<0)return (-1);f=e-a.bd.b0()|0;while(f>=b&&a.bd.bx(f,c)>0){g=f-a.bd.b0()|0;e=f;f=g;}return e;}
function Bb(){var a=this;C.call(a);a.lF=null;a.kB=null;}
function ADe(a,b){if(!b&&a.lF===null)a.lF=a.F();else if(b&&a.kB===null)a.kB=Eu(a.F(),1);if(b)return a.kB;return a.lF;}
var De=G(BH);
function M_(){var a=this;GP.call(a);a.eG=0;a.eC=0;}
function AM1(a){var b,c,d,e,f;b=a.eG;c=a.eC;d=c!=2147483647?Ly(c):B(31);e=new N;P(e);BG(e,123);f=V(e,b);BG(f,44);BG(H(f,d),125);return O(e);}
var Of=G(BF);
function ALh(a,b,c,d){return b;}
function ANN(a,b){return 0;}
function Xn(){var a=this;C.call(a);a.B=null;a.bs=0;}
function ASJ(){var a=new Xn();AG4(a);return a;}
function AG4(a){a.B=BV(0);}
function LG(a,b){var c,d;c=b/32|0;if(b>=a.bs){IB(a,c+1|0);a.bs=b+1|0;}d=a.B.data;d[c]=d[c]|1<<(b%32|0);}
function H7(a,b,c){var d,e,f,g,h;d=BD(b,c);if(d>0){e=new BB;Z(e);L(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bs){IB(a,f+1|0);a.bs=c;}if(d==f){g=a.B.data;g[d]=g[d]|HT(a,b)&Io(a,c);}else{g=a.B.data;g[d]=g[d]|HT(a,b);h=d+1|0;while(h<f){a.B.data[h]=(-1);h=h+1|0;}if(c&31){g=a.B.data;g[f]=g[f]|Io(a,c);}}}
function HT(a,b){return (-1)<<(b%32|0);}
function Io(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Mw(a,b){var c,d,e,f;c=b/32|0;d=a.B.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bs-1|0))Hc(a);}}
function Dw(a,b){var c,d;c=b/32|0;d=a.B.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Hi(a,b){var c,d,e,f;c=a.bs;if(b>=c)return (-1);d=b/32|0;e=a.B.data;f=e[d]>>>(b%32|0)|0;if(f)return Iw(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Iw(e[f])|0;f=f+1|0;}return (-1);}
function IB(a,b){var c;c=a.B.data.length;if(c>=b)return;c=Bc((b*3|0)/2|0,(c*2|0)+1|0);a.B=Mj(a.B,c);}
function Hc(a){var b,c,d;b=(a.bs+31|0)/32|0;a.bs=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=NS(a.B.data[c]);if(d<32)break;c=c+(-1)|0;a.bs=a.bs-32|0;}a.bs=a.bs-d|0;}}
function Db(a,b){var c,d,e,f;c=Ba(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]&b.B.data[d];d=d+1|0;}while(true){f=a.B.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bs=Ba(a.bs,b.bs);Hc(a);}
function FT(a,b){var c,d,e;c=Ba(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]&(b.B.data[d]^(-1));d=d+1|0;}Hc(a);}
function FM(a,b){var c,d,e;c=Bc(a.bs,b.bs);a.bs=c;IB(a,(c+31|0)/32|0);c=Ba(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]|b.B.data[d];d=d+1|0;}}
function Fr(a,b){var c,d,e;c=Bc(a.bs,b.bs);a.bs=c;IB(a,(c+31|0)/32|0);c=Ba(a.B.data.length,b.B.data.length);d=0;while(d<c){e=a.B.data;e[d]=e[d]^b.B.data[d];d=d+1|0;}Hc(a);}
function Md(a){return a.bs?0:1;}
function M1(){var a=this;BS.call(a);a.ph=null;a.vX=0;}
function Qo(){var a=this;BS.call(a);a.l6=null;a.ly=null;}
function ACN(a,b){var c=new Qo();AEA(c,a,b);return c;}
function AEA(a,b,c){BO(a);a.l6=b;a.ly=c;}
function AGh(a,b,c,d){var e,f,g,h,i;e=a.l6.c(b,c,d);if(e<0)a:{f=a.ly;g=d.cI;e=d.x;h=b+1|0;e=BD(h,e);if(e>0){d.dh=1;e=(-1);}else{i=M(c,b);if(!f.ph.k(i))e=(-1);else{if(CG(i)){if(e<0&&C6(M(c,h))){e=(-1);break a;}}else if(C6(i)&&b>g&&CG(M(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ANt(a,b){a.d=b;a.ly.d=b;a.l6.P(b);}
function AGS(a,b){return 1;}
function AGA(a,b){return 1;}
function DD(){var a=this;BS.call(a);a.dG=null;a.w5=0;}
function ALb(a){var b=new DD();UH(b,a);return b;}
function UH(a,b){BO(a);a.dG=b.i_();a.w5=b.bh;}
function AIJ(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=M(c,b);if(a.k(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=M(c,f);if(Hr(g,f)&&a.k(Ev(g,f)))return a.d.c(b,c,d);}}return (-1);}
function AJh(a,b){return a.dG.k(b);}
function AGb(a,b){if(b instanceof DX)return Km(a.dG,b.fL);if(b instanceof En)return Km(a.dG,b.c_);if(b instanceof DD)return Iu(a.dG,b.dG);if(!(b instanceof Eh))return 1;return Iu(a.dG,b.e5);}
function AK8(a){return a.dG;}
function AQc(a,b){a.d=b;}
function AIX(a,b){return 1;}
var Jl=G(DD);
function AKT(a,b){return a.dG.k(GE(GD(b)));}
function ZC(){var a=this;BW.call(a);a.qf=null;a.wR=0;}
function AJT(a){var b=new ZC();AM7(b,a);return b;}
function AM7(a,b){DB(a);a.qf=b.i_();a.wR=b.bh;}
function ALi(a,b,c){return !a.qf.k(EZ(Ez(M(c,b))))?(-1):1;}
function Eh(){var a=this;BW.call(a);a.e5=null;a.xq=0;}
function AQA(a){var b=new Eh();AOj(b,a);return b;}
function AOj(a,b){DB(a);a.e5=b.i_();a.xq=b.bh;}
function Mz(a,b,c){return !a.e5.k(M(c,b))?(-1):1;}
function ANQ(a,b){if(b instanceof En)return Km(a.e5,b.c_);if(b instanceof Eh)return Iu(a.e5,b.e5);if(!(b instanceof DD)){if(!(b instanceof DX))return 1;return 0;}return Iu(a.e5,b.dG);}
function OQ(){var a=this;BS.call(a);a.gF=null;a.lS=null;a.jt=0;}
function AQO(a,b){var c=new OQ();AFO(c,a,b);return c;}
function AFO(a,b,c){BO(a);a.gF=b;a.jt=c;}
function AL4(a,b){a.d=b;}
function QA(a){if(a.lS===null)a.lS=FX(a.gF);return a.lS;}
function AFd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BV(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=M(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?Ee([k,l]):Ee([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.jt;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.gF.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=M(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=M(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.jt==3){k=f[0];m=a.gF.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.jt==2){b=f[0];m=a.gF.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AGJ(a,b){return b instanceof OQ&&!Bn(QA(b),QA(a))?0:1;}
function AQN(a,b){return 1;}
function En(){BW.call(this);this.c_=0;}
function AAb(a){var b=new En();AOo(b,a);return b;}
function AOo(a,b){DB(a);a.c_=b;}
function AK4(a){return 1;}
function AJO(a,b,c){return a.c_!=M(c,b)?(-1):1;}
function AIE(a,b,c,d){var e,f,g;if(!(c instanceof Bx))return HK(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GL(c,a.c_,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AK9(a,b,c,d,e){var f;if(!(d instanceof Bx))return H0(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F2(d,a.c_,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AQE(a,b){if(b instanceof En)return b.c_!=a.c_?0:1;if(!(b instanceof Eh)){if(b instanceof DD)return b.k(a.c_);if(!(b instanceof DX))return 1;return 0;}return Mz(b,0,Xo(a.c_))<=0?0:1;}
function AEk(){BW.call(this);this.mG=0;}
function AOO(a){var b=new AEk();AMN(b,a);return b;}
function AMN(a,b){DB(a);a.mG=EZ(Ez(b));}
function AE$(a,b,c){return a.mG!=EZ(Ez(M(c,b)))?(-1):1;}
function YM(){var a=this;BW.call(a);a.uz=0;a.nB=0;}
function AHa(a){var b=new YM();AO_(b,a);return b;}
function AO_(a,b){DB(a);a.uz=b;a.nB=HB(b);}
function AFE(a,b,c){return a.uz!=M(c,b)&&a.nB!=M(c,b)?(-1):1;}
function Ff(){var a=this;BS.call(a);a.hr=0;a.ks=null;a.jX=null;a.jS=0;}
function AU_(a,b){var c=new Ff();N4(c,a,b);return c;}
function N4(a,b,c){BO(a);a.hr=1;a.jX=b;a.jS=c;}
function ART(a,b){a.d=b;}
function ANw(a,b,c,d){var e,f,g,h,i,j,k,l;e=BV(4);f=d.x;if(b>=f)return (-1);g=KE(a,b,c,f);h=b+a.hr|0;i=AD4(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dx(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=KE(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AD4(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.hr|0;if(h>=f){b=k;break a;}g=KE(a,h,c,f);b=k;}}}if(b!=a.jS)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.jX.data[g])break;g=g+1|0;}return (-1);}
function Xb(a){var b,c;if(a.ks===null){b=new N;P(b);c=0;while(c<a.jS){Ix(b,Gv(a.jX.data[c]));c=c+1|0;}a.ks=O(b);}return a.ks;}
function KE(a,b,c,d){var e,f,g;a.hr=1;if(b>=(d-1|0))e=M(c,b);else{d=b+1|0;e=M(c,b);f=M(c,d);if(Hr(e,f)){g=BQ(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CG(g[0])&&C6(g[1])?Ev(g[0],g[1]):g[0];a.hr=2;}}return e;}
function ALj(a,b){return b instanceof Ff&&!Bn(Xb(b),Xb(a))?0:1;}
function AOK(a,b){return 1;}
var XI=G(Ff);
var Uc=G(Ff);
var Yv=G(CR);
function AHH(a,b,c,d){var e;while(true){e=a.J.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var PK=G(CR);
function AMD(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.J.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var FR=G(CR);
function AP8(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.J.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function ARh(a,b){a.d=b;a.J.P(b);}
var Po=G(FR);
function AK7(a,b,c,d){var e;e=a.J.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function AM2(a,b){a.d=b;}
function Fd(){var a=this;CR.call(a);a.fW=null;a.dj=0;}
function AYT(a,b,c,d,e){var f=new Fd();Jj(f,a,b,c,d,e);return f;}
function Jj(a,b,c,d,e,f){Dd(a,c,d,e);a.fW=b;a.dj=f;}
function ASB(a,b,c,d){var e,f;e=M6(d,a.dj);if(!a.J.I(d))return a.d.c(b,c,d);if(e>=a.fW.eC)return a.d.c(b,c,d);f=a.dj;e=e+1|0;Ef(d,f,e);f=a.J.c(b,c,d);if(f>=0){Ef(d,a.dj,0);return f;}f=a.dj;e=e+(-1)|0;Ef(d,f,e);if(e>=a.fW.eG)return a.d.c(b,c,d);Ef(d,a.dj,0);return (-1);}
var Nj=G(Fd);
function AKl(a,b,c,d){var e,f,g;e=0;f=a.fW.eC;a:{while(true){g=a.J.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.fW.eG)return (-1);return a.d.c(b,c,d);}
var RK=G(CR);
function ARZ(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Qz=G(FR);
function AGV(a,b,c,d){var e;if(!a.J.I(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.J.c(b,c,d);return e;}
var Ve=G(Fd);
function AF3(a,b,c,d){var e,f,g;e=M6(d,a.dj);if(!a.J.I(d))return a.d.c(b,c,d);f=a.fW;if(e>=f.eC){Ef(d,a.dj,0);return a.d.c(b,c,d);}if(e<f.eG){Ef(d,a.dj,e+1|0);g=a.J.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Ef(d,a.dj,0);return g;}Ef(d,a.dj,e+1|0);g=a.J.c(b,c,d);}return g;}
var RM=G(D5);
function ASm(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cp(b,e,c,d);return a.d.c(b,c,d);}
function AQk(a,b,c,d){var e;e=d.x;if(a.d.cp(b,e,c,d)>=0)return b;return (-1);}
function Op(){D5.call(this);this.kz=null;}
function ANT(a,b,c,d){var e,f;e=d.x;f=Vg(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cp(b,e,c,d);return a.d.c(b,c,d);}
function AFh(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cm(b,c,d);if(f<0)return (-1);g=Vg(a,f,e,c);if(g>=0)e=g;g=Bc(f,a.d.cp(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.kz.hv(M(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Vg(a,b,c,d){while(true){if(b>=c)return (-1);if(a.kz.hv(M(d,b)))break;b=b+1|0;}return b;}
var EN=G();
var AYU=null;var AYV=null;function Pr(b){var c;if(!(b&1)){c=AYV;if(c!==null)return c;c=new VK;AYV=c;return c;}c=AYU;if(c!==null)return c;c=new VJ;AYU=c;return c;}
var Yw=G(C4);
function AF5(a,b,c,d){var e;a:{while(true){if((b+a.bd.b0()|0)>d.x)break a;e=a.bd.bx(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var WI=G(EA);
function AMC(a,b,c,d){var e;if((b+a.bd.b0()|0)<=d.x){e=a.bd.bx(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var Pb=G(E8);
function APG(a,b,c,d){var e,f,g,h,i;e=a.jw;f=e.eG;g=e.eC;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bd.b0()|0)>d.x)break a;i=a.bd.bx(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.bd.b0()|0)>d.x){d.dh=1;return (-1);}i=a.bd.bx(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Qs=G(C4);
function ANK(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.bd.b0()|0)<=d.x){e=a.bd.bx(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Ur=G(EA);
function AGa(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.J.c(b,c,d);}
var Rn=G(E8);
function APW(a,b,c,d){var e,f,g,h,i,j;e=a.jw;f=e.eG;g=e.eC;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.bd.b0()|0)<=d.x){i=a.bd.bx(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bd.b0()|0)>d.x){d.dh=1;return (-1);}j=a.bd.bx(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Kv=G(BF);
function ALC(a,b,c,d){if(b&&!(d.fl&&b==d.cI))return (-1);return a.d.c(b,c,d);}
function AKC(a,b){return 0;}
function AAl(){BF.call(this);this.t3=0;}
function AQy(a){var b=new AAl();AKZ(b,a);return b;}
function AKZ(a,b){BO(a);a.t3=b;}
function AGy(a,b,c,d){var e,f,g;e=b<d.x?M(c,b):32;f=!b?32:M(c,b-1|0);g=d.i3?0:d.cI;return (e!=32&&!QC(a,e,b,g,c)?0:1)^(f!=32&&!QC(a,f,b-1|0,g,c)?0:1)^a.t3?(-1):a.d.c(b,c,d);}
function AGH(a,b){return 0;}
function QC(a,b,c,d,e){var f;if(!JD(b)&&b!=95){a:{if(Cu(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=M(e,c);if(JD(f))return 0;if(Cu(f)!=6)return 1;}}return 1;}return 0;}
var Ok=G(BF);
function AKX(a,b,c,d){if(b!=d.hD)return (-1);return a.d.c(b,c,d);}
function ASw(a,b){return 0;}
function Xq(){BF.call(this);this.f4=0;}
function AUB(a){var b=new Xq();ADS(b,a);return b;}
function ADS(a,b){BO(a);a.f4=b;}
function AOu(a,b,c,d){var e,f,g;e=!d.fl?J(c):d.x;if(b>=e){BK(d,a.f4,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&M(c,b)==13&&M(c,b+1|0)==10){BK(d,a.f4,0);return a.d.c(b,c,d);}a:{if(f==1){g=M(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BK(d,a.f4,0);return a.d.c(b,c,d);}
function AHw(a,b){var c;c=!Dm(b,a.f4)?0:1;BK(b,a.f4,(-1));return c;}
var W8=G(BF);
function ANp(a,b,c,d){if(b<(d.i3?J(c):d.x))return (-1);d.dh=1;d.xV=1;return a.d.c(b,c,d);}
function AE7(a,b){return 0;}
function Nw(){BF.call(this);this.ra=null;}
function AHm(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fl&&b==d.cI)break a;if(a.ra.sC(M(c,b-1|0),M(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AJv(a,b){return 0;}
var AD_=G(BS);
function AUV(){var a=new AD_();ANc(a);return a;}
function ANc(a){BO(a);}
function AR5(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dh=1;return (-1);}g=M(c,b);if(CG(g)){h=b+2|0;if(h<=e&&Hr(g,M(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AGL(a,b){a.d=b;}
function AM8(a){return (-2147483602);}
function AGK(a,b){return 1;}
function ZK(){BS.call(this);this.k4=null;}
function AUt(a){var b=new ZK();AHu(b,a);return b;}
function AHu(a,b){BO(a);a.k4=b;}
function ANf(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dh=1;return (-1);}g=M(c,b);if(CG(g)){b=b+2|0;if(b<=e){h=M(c,f);if(Hr(g,h))return a.k4.hv(Ev(g,h))?(-1):a.d.c(b,c,d);}}return a.k4.hv(g)?(-1):a.d.c(f,c,d);}
function APm(a,b){a.d=b;}
function AE4(a){return (-2147483602);}
function ASd(a,b){return 1;}
function AD2(){BF.call(this);this.hg=0;}
function ATX(a){var b=new AD2();AJq(b,a);return b;}
function AJq(a,b){BO(a);a.hg=b;}
function ALo(a,b,c,d){var e;e=!d.fl?J(c):d.x;if(b>=e){BK(d,a.hg,0);return a.d.c(b,c,d);}if((e-b|0)==1&&M(c,b)==10){BK(d,a.hg,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AJo(a,b){var c;c=!Dm(b,a.hg)?0:1;BK(b,a.hg,(-1));return c;}
function ACa(){BF.call(this);this.hp=0;}
function ATH(a){var b=new ACa();AJU(b,a);return b;}
function AJU(a,b){BO(a);a.hp=b;}
function ANn(a,b,c,d){if((!d.fl?J(c)-b|0:d.x-b|0)<=0){BK(d,a.hp,0);return a.d.c(b,c,d);}if(M(c,b)!=10)return (-1);BK(d,a.hp,1);return a.d.c(b+1|0,c,d);}
function AJe(a,b){var c;c=!Dm(b,a.hp)?0:1;BK(b,a.hp,(-1));return c;}
function YJ(){BF.call(this);this.fC=0;}
function ASZ(a){var b=new YJ();ASD(b,a);return b;}
function ASD(a,b){BO(a);a.fC=b;}
function AKq(a,b,c,d){var e,f,g;e=!d.fl?J(c)-b|0:d.x-b|0;if(!e){BK(d,a.fC,0);return a.d.c(b,c,d);}if(e<2){f=M(c,b);g=97;}else{f=M(c,b);g=M(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BK(d,a.fC,0);return a.d.c(b,c,d);case 13:if(g!=10){BK(d,a.fC,0);return a.d.c(b,c,d);}BK(d,a.fC,0);return a.d.c(b,c,d);default:}return (-1);}
function AHB(a,b){var c;c=!Dm(b,a.fC)?0:1;BK(b,a.fC,(-1));return c;}
function Ha(){var a=this;BS.call(a);a.na=0;a.gC=0;}
function AU6(a,b){var c=new Ha();O1(c,a,b);return c;}
function O1(a,b,c){BO(a);a.na=b;a.gC=c;}
function AF7(a,b,c,d){var e,f,g,h;e=Ga(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BK(d,a.gC,J(e));return a.d.c(b+J(e)|0,c,d);}g=M(e,f);h=b+f|0;if(g!=M(c,h)&&HB(M(e,f))!=M(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AOE(a,b){a.d=b;}
function Ga(a,b){var c,d;c=a.na;d=FD(b,c);c=IG(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.k6)?Cb(b.k6,d,c):null;}
function AO2(a,b){var c;c=!Dm(b,a.gC)?0:1;BK(b,a.gC,(-1));return c;}
var AD6=G(Ha);
function AS4(a,b){var c=new AD6();AQ$(c,a,b);return c;}
function AQ$(a,b,c){O1(a,b,c);}
function AHG(a,b,c,d){var e,f;e=Ga(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=!UG(c,e,b)?(-1):J(e);if(f<0)return (-1);BK(d,a.gC,f);return a.d.c(b+f|0,c,d);}return (-1);}
function AQZ(a,b,c,d){var e,f;e=Ga(a,d);f=d.cI;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=AAk(c,e,b);if(b<0)return (-1);if(a.d.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AFU(a,b,c,d,e){var f,g;f=Ga(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=PU(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMu(a,b){return 1;}
var AA_=G(Ha);
function ATI(a,b){var c=new AA_();AJn(c,a,b);return c;}
function AJn(a,b,c){O1(a,b,c);}
function ALT(a,b,c,d){var e,f;e=Ga(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BK(d,a.gC,J(e));return a.d.c(b+J(e)|0,c,d);}if(EZ(Ez(M(e,f)))!=EZ(Ez(M(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Oe=G(Gn);
function AI6(a,b,c,d,e){Na(a,b,c,d,e);return a;}
function AGC(a,b,c,d){Xw(a,b,c,d);return a;}
function AG3(a,b){JI(a,b);}
function AQn(a,b,c){XP(a,b,c);return a;}
function RT(){var a=this;BW.call(a);a.cq=null;a.ku=null;a.ld=null;}
function AH4(a,b,c){return !Kt(a,c,b)?(-1):a.bM;}
function AGt(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=M(a.cq,a.bM-1|0);a:{while(true){g=a.bM;if(b>(e-g|0)){b=(-1);break a;}g=M(c,(b+g|0)-1|0);if(g==f&&Kt(a,c,b))break;b=b+S3(a.ku,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bM|0,c,d)>=0)break;b=b+1|0;}return b;}
function AJs(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=M(a.cq,0);g=(J(d)-c|0)-a.bM|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=M(d,c);if(g==f&&Kt(a,d,c))break;c=c-S3(a.ld,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bM|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ0(a,b){var c;if(b instanceof En)return b.c_!=M(a.cq,0)?0:1;if(b instanceof Eh)return Mz(b,0,Cb(a.cq,0,1))<=0?0:1;if(!(b instanceof DD)){if(!(b instanceof DX))return 1;return J(a.cq)>1&&b.fL==Ev(M(a.cq,0),M(a.cq,1))?1:0;}a:{b:{b=b;if(!b.k(M(a.cq,0))){if(J(a.cq)<=1)break b;if(!b.k(Ev(M(a.cq,0),M(a.cq,1))))break b;}c=1;break a;}c=0;}return c;}
function Kt(a,b,c){var d;d=0;while(d<a.bM){if(M(b,d+c|0)!=M(a.cq,d))return 0;d=d+1|0;}return 1;}
function YI(){BW.call(this);this.i7=null;}
function AU$(a){var b=new YI();AQG(b,a);return b;}
function AQG(a,b){var c,d,e;DB(a);c=new N;P(c);d=0;while(true){e=BD(d,b.Q);if(e>=0){a.i7=O(c);a.bM=c.Q;return;}if(d<0)break;if(e>=0)break;BG(c,EZ(Ez(b.A.data[d])));d=d+1|0;}b=new BB;Z(b);L(b);}
function AL1(a,b,c){var d;d=0;while(true){if(d>=J(a.i7))return J(a.i7);if(M(a.i7,d)!=EZ(Ez(M(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Np(){BW.call(this);this.hd=null;}
function API(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.hd))return J(a.hd);e=M(a.hd,d);f=b+d|0;if(e!=M(c,f)&&HB(M(a.hd,d))!=M(c,f))break;d=d+1|0;}return (-1);}
var G_=G();
var AYW=null;var AYX=null;var AYS=null;function APc(){APc=Bp(G_);AIo();}
function AIo(){AYW=AUM();AYX=ATR();AYS=I($rt_arraycls(C),[I(C,[B(414),AU7()]),I(C,[B(415),ASW()]),I(C,[B(416),AUJ()]),I(C,[B(417),AUQ()]),I(C,[B(418),AYX]),I(C,[B(419),AT2()]),I(C,[B(420),ATP()]),I(C,[B(421),AS9()]),I(C,[B(422),AS3()]),I(C,[B(423),ATe()]),I(C,[B(424),ATt()]),I(C,[B(425),ATb()]),I(C,[B(426),AUm()]),I(C,[B(427),ASR()]),I(C,[B(428),AUN()]),I(C,[B(429),ATs()]),I(C,[B(430),AT0()]),I(C,[B(431),ATq()]),I(C,[B(432),AT1()]),I(C,[B(433),ATh()]),I(C,[B(434),AUU()]),I(C,[B(435),ATj()]),I(C,[B(436),AT6()]),
I(C,[B(437),AUH()]),I(C,[B(438),AUC()]),I(C,[B(439),AUR()]),I(C,[B(440),ATg()]),I(C,[B(441),AUr()]),I(C,[B(442),AYW]),I(C,[B(443),AUb()]),I(C,[B(444),AS$()]),I(C,[B(445),AYW]),I(C,[B(446),ASP()]),I(C,[B(447),AYX]),I(C,[B(448),ATB()]),I(C,[B(449),Q(0,127)]),I(C,[B(450),Q(128,255)]),I(C,[B(451),Q(256,383)]),I(C,[B(452),Q(384,591)]),I(C,[B(453),Q(592,687)]),I(C,[B(454),Q(688,767)]),I(C,[B(455),Q(768,879)]),I(C,[B(456),Q(880,1023)]),I(C,[B(457),Q(1024,1279)]),I(C,[B(458),Q(1280,1327)]),I(C,[B(459),Q(1328,1423)]),
I(C,[B(460),Q(1424,1535)]),I(C,[B(461),Q(1536,1791)]),I(C,[B(462),Q(1792,1871)]),I(C,[B(463),Q(1872,1919)]),I(C,[B(464),Q(1920,1983)]),I(C,[B(465),Q(2304,2431)]),I(C,[B(466),Q(2432,2559)]),I(C,[B(467),Q(2560,2687)]),I(C,[B(468),Q(2688,2815)]),I(C,[B(469),Q(2816,2943)]),I(C,[B(470),Q(2944,3071)]),I(C,[B(471),Q(3072,3199)]),I(C,[B(472),Q(3200,3327)]),I(C,[B(473),Q(3328,3455)]),I(C,[B(474),Q(3456,3583)]),I(C,[B(475),Q(3584,3711)]),I(C,[B(476),Q(3712,3839)]),I(C,[B(477),Q(3840,4095)]),I(C,[B(478),Q(4096,4255)]),
I(C,[B(479),Q(4256,4351)]),I(C,[B(480),Q(4352,4607)]),I(C,[B(481),Q(4608,4991)]),I(C,[B(482),Q(4992,5023)]),I(C,[B(483),Q(5024,5119)]),I(C,[B(484),Q(5120,5759)]),I(C,[B(485),Q(5760,5791)]),I(C,[B(486),Q(5792,5887)]),I(C,[B(487),Q(5888,5919)]),I(C,[B(488),Q(5920,5951)]),I(C,[B(489),Q(5952,5983)]),I(C,[B(490),Q(5984,6015)]),I(C,[B(491),Q(6016,6143)]),I(C,[B(492),Q(6144,6319)]),I(C,[B(493),Q(6400,6479)]),I(C,[B(494),Q(6480,6527)]),I(C,[B(495),Q(6528,6623)]),I(C,[B(496),Q(6624,6655)]),I(C,[B(497),Q(6656,6687)]),
I(C,[B(498),Q(7424,7551)]),I(C,[B(499),Q(7552,7615)]),I(C,[B(500),Q(7616,7679)]),I(C,[B(501),Q(7680,7935)]),I(C,[B(502),Q(7936,8191)]),I(C,[B(503),Q(8192,8303)]),I(C,[B(504),Q(8304,8351)]),I(C,[B(505),Q(8352,8399)]),I(C,[B(506),Q(8400,8447)]),I(C,[B(507),Q(8448,8527)]),I(C,[B(508),Q(8528,8591)]),I(C,[B(509),Q(8592,8703)]),I(C,[B(510),Q(8704,8959)]),I(C,[B(511),Q(8960,9215)]),I(C,[B(512),Q(9216,9279)]),I(C,[B(513),Q(9280,9311)]),I(C,[B(514),Q(9312,9471)]),I(C,[B(515),Q(9472,9599)]),I(C,[B(516),Q(9600,9631)]),
I(C,[B(517),Q(9632,9727)]),I(C,[B(518),Q(9728,9983)]),I(C,[B(519),Q(9984,10175)]),I(C,[B(520),Q(10176,10223)]),I(C,[B(521),Q(10224,10239)]),I(C,[B(522),Q(10240,10495)]),I(C,[B(523),Q(10496,10623)]),I(C,[B(524),Q(10624,10751)]),I(C,[B(525),Q(10752,11007)]),I(C,[B(526),Q(11008,11263)]),I(C,[B(527),Q(11264,11359)]),I(C,[B(528),Q(11392,11519)]),I(C,[B(529),Q(11520,11567)]),I(C,[B(530),Q(11568,11647)]),I(C,[B(531),Q(11648,11743)]),I(C,[B(532),Q(11776,11903)]),I(C,[B(533),Q(11904,12031)]),I(C,[B(534),Q(12032,12255)]),
I(C,[B(535),Q(12272,12287)]),I(C,[B(536),Q(12288,12351)]),I(C,[B(537),Q(12352,12447)]),I(C,[B(538),Q(12448,12543)]),I(C,[B(539),Q(12544,12591)]),I(C,[B(540),Q(12592,12687)]),I(C,[B(541),Q(12688,12703)]),I(C,[B(542),Q(12704,12735)]),I(C,[B(543),Q(12736,12783)]),I(C,[B(544),Q(12784,12799)]),I(C,[B(545),Q(12800,13055)]),I(C,[B(546),Q(13056,13311)]),I(C,[B(547),Q(13312,19893)]),I(C,[B(548),Q(19904,19967)]),I(C,[B(549),Q(19968,40959)]),I(C,[B(550),Q(40960,42127)]),I(C,[B(551),Q(42128,42191)]),I(C,[B(552),Q(42752,
42783)]),I(C,[B(553),Q(43008,43055)]),I(C,[B(554),Q(44032,55203)]),I(C,[B(555),Q(55296,56191)]),I(C,[B(556),Q(56192,56319)]),I(C,[B(557),Q(56320,57343)]),I(C,[B(558),Q(57344,63743)]),I(C,[B(559),Q(63744,64255)]),I(C,[B(560),Q(64256,64335)]),I(C,[B(561),Q(64336,65023)]),I(C,[B(562),Q(65024,65039)]),I(C,[B(563),Q(65040,65055)]),I(C,[B(564),Q(65056,65071)]),I(C,[B(565),Q(65072,65103)]),I(C,[B(566),Q(65104,65135)]),I(C,[B(567),Q(65136,65279)]),I(C,[B(568),Q(65280,65519)]),I(C,[B(569),Q(0,1114111)]),I(C,[B(570),
ATc()]),I(C,[B(571),BL(0,1)]),I(C,[B(572),I2(62,1)]),I(C,[B(573),BL(1,1)]),I(C,[B(574),BL(2,1)]),I(C,[B(575),BL(3,0)]),I(C,[B(576),BL(4,0)]),I(C,[B(577),BL(5,1)]),I(C,[B(578),I2(448,1)]),I(C,[B(579),BL(6,1)]),I(C,[B(580),BL(7,0)]),I(C,[B(581),BL(8,1)]),I(C,[B(582),I2(3584,1)]),I(C,[B(583),BL(9,1)]),I(C,[B(584),BL(10,1)]),I(C,[B(585),BL(11,1)]),I(C,[B(586),I2(28672,0)]),I(C,[B(587),BL(12,0)]),I(C,[B(588),BL(13,0)]),I(C,[B(589),BL(14,0)]),I(C,[B(590),ATK(983040,1,1)]),I(C,[B(591),BL(15,0)]),I(C,[B(592),BL(16,
1)]),I(C,[B(593),BL(18,1)]),I(C,[B(594),ATW(19,0,1)]),I(C,[B(595),I2(1643118592,1)]),I(C,[B(596),BL(20,0)]),I(C,[B(597),BL(21,0)]),I(C,[B(598),BL(22,0)]),I(C,[B(599),BL(23,0)]),I(C,[B(600),BL(24,1)]),I(C,[B(601),I2(2113929216,1)]),I(C,[B(602),BL(25,1)]),I(C,[B(603),BL(26,0)]),I(C,[B(604),BL(27,0)]),I(C,[B(605),BL(28,1)]),I(C,[B(606),BL(29,0)]),I(C,[B(607),BL(30,0)])]);}
function MJ(){BW.call(this);this.qC=0;}
function APP(a,b,c){var d,e;d=b+1|0;e=M(c,b);d=M(c,d);return a.qC!=GE(GD(Ev(e,d)))?(-1):2;}
function K6(){BS.call(this);this.gf=0;}
function ANb(a){var b=new K6();AGY(b,a);return b;}
function AGY(a,b){BO(a);a.gf=b;}
function ANG(a,b){a.d=b;}
function AHx(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dh=1;return (-1);}f=M(c,b);if(b>d.cI&&CG(M(c,b-1|0)))return (-1);if(a.gf!=f)return (-1);return a.d.c(e,c,d);}
function AJY(a,b,c,d){var e,f,g,h;if(!(c instanceof Bx))return HK(a,b,c,d);e=d.cI;f=d.x;while(true){if(b>=f)return (-1);g=GL(c,a.gf,b);if(g<0)return (-1);if(g>e&&CG(M(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AIa(a,b,c,d,e){var f,g;if(!(d instanceof Bx))return H0(a,b,c,d,e);f=e.cI;a:{while(true){if(c<b)return (-1);g=F2(d,a.gf,c);if(g<0)break a;if(g<b)break a;if(g>f&&CG(M(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AFS(a,b){if(b instanceof En)return 0;if(b instanceof Eh)return 0;if(b instanceof DD)return 0;if(b instanceof DX)return 0;if(b instanceof Lp)return 0;if(!(b instanceof K6))return 1;return b.gf!=a.gf?0:1;}
function AQt(a,b){return 1;}
function Lp(){BS.call(this);this.fS=0;}
function AKu(a){var b=new Lp();ANj(b,a);return b;}
function ANj(a,b){BO(a);a.fS=b;}
function AG2(a,b){a.d=b;}
function AFo(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BD(f,e);if(g>0){d.dh=1;return (-1);}h=M(c,b);if(g<0&&C6(M(c,f)))return (-1);if(a.fS!=h)return (-1);return a.d.c(f,c,d);}
function AN5(a,b,c,d){var e,f;if(!(c instanceof Bx))return HK(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=GL(c,a.fS,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C6(M(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function APH(a,b,c,d,e){var f,g;if(!(d instanceof Bx))return H0(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=F2(d,a.fS,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C6(M(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AH5(a,b){if(b instanceof En)return 0;if(b instanceof Eh)return 0;if(b instanceof DD)return 0;if(b instanceof DX)return 0;if(b instanceof K6)return 0;if(!(b instanceof Lp))return 1;return b.fS!=a.fS?0:1;}
function AOg(a,b){return 1;}
function DX(){var a=this;BW.call(a);a.jK=0;a.ik=0;a.fL=0;}
function AO3(a,b,c){var d,e;d=b+1|0;e=M(c,b);d=M(c,d);return a.jK==e&&a.ik==d?2:(-1);}
function AMV(a,b,c,d){var e,f;if(!(c instanceof Bx))return HK(a,b,c,d);e=d.x;while(b<e){b=GL(c,a.jK,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=M(c,b);if(a.ik==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AG0(a,b,c,d,e){var f;if(!(d instanceof Bx))return H0(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=F2(d,a.ik,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.jK==M(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AOP(a,b){if(b instanceof DX)return b.fL!=a.fL?0:1;if(b instanceof DD)return b.k(a.fL);if(b instanceof En)return 0;if(!(b instanceof Eh))return 1;return 0;}
var VJ=G(EN);
function AHb(a,b){return b!=10?0:1;}
function AOW(a,b,c){return b!=10?0:1;}
var VK=G(EN);
function AP0(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ARN(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AC0(){var a=this;C.call(a);a.mo=null;a.j0=null;a.gR=0;a.vf=0;}
function AM6(a){var b=new AC0();AKV(b,a);return b;}
function AKV(a,b){var c,d;while(true){c=a.gR;if(b<c)break;a.gR=c<<1|1;}d=c<<1|1;a.gR=d;d=d+1|0;a.mo=BV(d);a.j0=BV(d);a.vf=b;}
function Rq(a,b,c){var d,e,f,g;d=0;e=a.gR;f=b&e;while(true){g=a.mo.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.j0.data[f]=c;}
function S3(a,b){var c,d,e,f;c=a.gR;d=b&c;e=0;while(true){f=a.mo.data[d];if(!f)break;if(f==b)return a.j0.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.vf;}
var YZ=G();
var K4=G(Bb);
function AUM(){var a=new K4();AKm(a);return a;}
function AKm(a){}
function ABh(a){return Cw(BT(Dn(),9,13),32);}
var J7=G(Bb);
function ATR(){var a=new J7();AQq(a);return a;}
function AQq(a){}
function AB4(a){return BT(Dn(),48,57);}
var ACT=G(Bb);
function AU7(){var a=new ACT();AJD(a);return a;}
function AJD(a){}
function APq(a){return BT(Dn(),97,122);}
var ADt=G(Bb);
function ASW(){var a=new ADt();AK2(a);return a;}
function AK2(a){}
function AQv(a){return BT(Dn(),65,90);}
var ADz=G(Bb);
function AUJ(){var a=new ADz();AGv(a);return a;}
function AGv(a){}
function AIK(a){return BT(Dn(),0,127);}
var KZ=G(Bb);
function AUQ(){var a=new KZ();AHK(a);return a;}
function AHK(a){}
function ZP(a){return BT(BT(Dn(),97,122),65,90);}
var LE=G(KZ);
function AT2(){var a=new LE();AKB(a);return a;}
function AKB(a){}
function AAL(a){return BT(ZP(a),48,57);}
var AER=G(Bb);
function ATP(){var a=new AER();AMH(a);return a;}
function AMH(a){}
function AJX(a){return BT(BT(BT(Dn(),33,64),91,96),123,126);}
var My=G(LE);
function AS9(){var a=new My();AOz(a);return a;}
function AOz(a){}
function YE(a){return BT(BT(BT(AAL(a),33,64),91,96),123,126);}
var ABu=G(My);
function AS3(){var a=new ABu();AQh(a);return a;}
function AQh(a){}
function AMp(a){return Cw(YE(a),32);}
var ABW=G(Bb);
function ATe(){var a=new ABW();APJ(a);return a;}
function APJ(a){}
function AHX(a){return Cw(Cw(Dn(),32),9);}
var AAe=G(Bb);
function ATt(){var a=new AAe();ARA(a);return a;}
function ARA(a){}
function AMl(a){return Cw(BT(Dn(),0,31),127);}
var ZX=G(Bb);
function ATb(){var a=new ZX();AGG(a);return a;}
function AGG(a){}
function ARP(a){return BT(BT(BT(Dn(),48,57),97,102),65,70);}
var ADD=G(Bb);
function AUm(){var a=new ADD();AGl(a);return a;}
function AGl(a){}
function AM3(a){var b;b=new Tn;b.w4=a;Bt(b);b.L=1;return b;}
var AE3=G(Bb);
function ASR(){var a=new AE3();AOU(a);return a;}
function AOU(a){}
function AFf(a){var b;b=new MW;b.xc=a;Bt(b);b.L=1;return b;}
var AC1=G(Bb);
function AUN(){var a=new AC1();AGw(a);return a;}
function AGw(a){}
function AKv(a){var b;b=new Sd;b.wN=a;Bt(b);return b;}
var ACO=G(Bb);
function ATs(){var a=new ACO();AMn(a);return a;}
function AMn(a){}
function AO7(a){var b;b=new Sc;b.wu=a;Bt(b);return b;}
var ADU=G(Bb);
function AT0(){var a=new ADU();AHF(a);return a;}
function AHF(a){}
function AHT(a){var b;b=new Xf;b.x2=a;Bt(b);H7(b.K,0,2048);b.L=1;return b;}
var Zg=G(Bb);
function ATq(){var a=new Zg();AG9(a);return a;}
function AG9(a){}
function AIh(a){var b;b=new O5;b.xr=a;Bt(b);b.L=1;return b;}
var YW=G(Bb);
function AT1(){var a=new YW();ALY(a);return a;}
function ALY(a){}
function ARJ(a){var b;b=new N_;b.yw=a;Bt(b);b.L=1;return b;}
var AC7=G(Bb);
function ATh(){var a=new AC7();AMI(a);return a;}
function AMI(a){}
function AE_(a){var b;b=new QP;b.w6=a;Bt(b);return b;}
var ADk=G(Bb);
function AUU(){var a=new ADk();AJ_(a);return a;}
function AJ_(a){}
function ALs(a){var b;b=new MR;b.vQ=a;Bt(b);b.L=1;return b;}
var AAD=G(Bb);
function ATj(){var a=new AAD();AFV(a);return a;}
function AFV(a){}
function AIt(a){var b;b=new MV;b.xv=a;Bt(b);b.L=1;return b;}
var AB1=G(Bb);
function AT6(){var a=new AB1();AHf(a);return a;}
function AHf(a){}
function AJx(a){var b;b=new NV;b.xZ=a;Bt(b);b.L=1;return b;}
var AEw=G(Bb);
function AUH(){var a=new AEw();ALw(a);return a;}
function ALw(a){}
function ALu(a){var b;b=new Pt;b.yg=a;Bt(b);b.L=1;return b;}
var ADi=G(Bb);
function AUC(){var a=new ADi();AM0(a);return a;}
function AM0(a){}
function AQQ(a){var b;b=new PC;b.wQ=a;Bt(b);return b;}
var AA8=G(Bb);
function AUR(){var a=new AA8();AG_(a);return a;}
function AG_(a){}
function AOq(a){var b;b=new T$;b.xG=a;Bt(b);return b;}
var AAB=G(Bb);
function ATg(){var a=new AAB();AO$(a);return a;}
function AO$(a){}
function AMY(a){var b;b=new SR;b.vU=a;Bt(b);b.L=1;return b;}
var AEY=G(Bb);
function AUr(){var a=new AEY();AJ5(a);return a;}
function AJ5(a){}
function APi(a){var b;b=new M9;b.yL=a;Bt(b);b.L=1;return b;}
var Jw=G(Bb);
function AUb(){var a=new Jw();AIB(a);return a;}
function AIB(a){}
function ABY(a){return Cw(BT(BT(BT(Dn(),97,122),65,90),48,57),95);}
var ADW=G(Jw);
function AS$(){var a=new ADW();AKe(a);return a;}
function AKe(a){}
function AMK(a){var b;b=Eu(ABY(a),1);b.L=1;return b;}
var ABA=G(K4);
function ASP(){var a=new ABA();ARj(a);return a;}
function ARj(a){}
function AGs(a){var b;b=Eu(ABh(a),1);b.L=1;return b;}
var AAv=G(J7);
function ATB(){var a=new AAv();ALg(a);return a;}
function ALg(a){}
function AJK(a){var b;b=Eu(AB4(a),1);b.L=1;return b;}
function Z3(){var a=this;Bb.call(a);a.qp=0;a.q7=0;}
function Q(a,b){var c=new Z3();ARH(c,a,b);return c;}
function ARH(a,b,c){a.qp=b;a.q7=c;}
function ALH(a){return BT(Dn(),a.qp,a.q7);}
var AAp=G(Bb);
function ATc(){var a=new AAp();ARV(a);return a;}
function ARV(a){}
function ARt(a){return BT(BT(Dn(),65279,65279),65520,65533);}
function ABp(){var a=this;Bb.call(a);a.lX=0;a.jQ=0;a.oD=0;}
function BL(a,b){var c=new ABp();AHA(c,a,b);return c;}
function ATW(a,b,c){var d=new ABp();ARI(d,a,b,c);return d;}
function AHA(a,b,c){a.jQ=c;a.lX=b;}
function ARI(a,b,c,d){a.oD=d;a.jQ=c;a.lX=b;}
function AI$(a){var b;b=AU2(a.lX);if(a.oD)H7(b.K,0,2048);b.L=a.jQ;return b;}
function ABv(){var a=this;Bb.call(a);a.lW=0;a.j2=0;a.ni=0;}
function I2(a,b){var c=new ABv();AIu(c,a,b);return c;}
function ATK(a,b,c){var d=new ABv();AFc(d,a,b,c);return d;}
function AIu(a,b,c){a.j2=c;a.lW=b;}
function AFc(a,b,c,d){a.ni=d;a.j2=c;a.lW=b;}
function AFa(a){var b;b=new R7;ACz(b,a.lW);if(a.ni)H7(b.K,0,2048);b.L=a.j2;return b;}
var Z$=G();
var ZA=G();
function AA6(b){var c,d,e,f,g,h,i;c=APu(Gy(b));d=JU(c);e=BV(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+JU(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Ni(c);h=h+1|0;}return e;}
function KJ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Nx(){var a=this;C.call(a);a.pg=0;a.rt=0;a.pt=null;}
function AI8(a,b,c){var d=new Nx();AQg(d,a,b,c);return d;}
function AQg(a,b,c,d){a.pg=b;a.rt=c;a.pt=d;}
function ADb(){var a=this;C.call(a);a.n4=null;a.qz=0;}
function APu(a){var b=new ADb();AH8(b,a);return b;}
function AH8(a,b){a.n4=b;}
var AA5=G();
function JU(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.n4.data;f=b.qz;b.qz=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Ni(b){var c,d;c=JU(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function ZM(){C.call(this);this.Ie=null;}
function Vw(){C.call(this);this.u4=null;}
function AQw(a,b){var c,d,e,f;c=b.data;b=a.u4;d=D_(c[0]);e=FK(c[1]);ADj(b.e.f,d,e);Gx(Cl(b),AXa);F5(Cl(b));f=Kx(FG(),b.eZ);b=new N;P(b);H(H3(H(b,B(608)),f),B(197));$rt_globals.console.info($rt_ustr(O(b)));}
function Ru(){C.call(this);this.q5=null;}
function AI7(a,b){KN(a.q5,b);}
var Y8=G();
function AEB(b){var c,d,e,f,g,h,i,j,k,l;c=new Wo;c.lg=0;c.gZ=BV(16);c.e7=0;d=Cy(b);HZ(c,d);e=0;f=0;while(f<d){g=B3(b,f);h=g.o.data.length;HZ(c,h);i=0;while(i<h){j=NF(g,i);k=Mr(j);HZ(c,e);HZ(c,k);e=e+Mr(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}d=c.lg;if(d&&c.e7!=d){b=EY();d=c.lg;e=c.e7;j=new N;P(j);H(V(H(V(H(j,B(403)),d),B(609)),e),B(610));Br(b,O(j));}l=c.gZ;d=l.data.length;e=c.e7;if(d!=e)l=Mj(l,e);return l;}
function ADl(b){var c,d,e,f,g,h,i,j,k;c=BC(b);d=S(Ib,c);e=d.data;f=0;while(f<c){a:{g=BC(b);if(g!=(-1)){h=BC(b);i=BC(b);if(i==(-1)){j=new Ib;j.fY=h;e[g]=j;}else{j=new Ib;j.fY=h;j.lf=BV(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].lf.data[k]=BC(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Rt(){C.call(this);this.un=null;}
function AO8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.un;d=D_(c[0]);c=AD1(d);e=new Q2;d=ADl(c);f=ADl(c);g=BC(c);h=S(L6,g);i=h.data;j=0;while(j<g){k=BC(c);l=BC(c);m=BC(c);n=BC(c);o=BC(c);p=new L6;p.hz=k;p.lu=l;p.hx=m;p.k7=n;p.jZ=o;i[j]=p;j=j+1|0;}e.w9=d;e.rh=f;e.fZ=h;b.gg=e;Lx(b.E,d);Lx(b.D,b.gg.rh);}
function Us(){var a=this;C.call(a);a.vO=null;a.vN=null;a.vP=null;}
function PV(){var a=this;C.call(a);a.yd=null;a.ye=null;}
function WK(){var a=this;X.call(a);a.nL=null;a.x9=null;}
function AIS(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cg^Dw(a.nL,c):0;}
function WJ(){var a=this;X.call(a);a.ty=null;a.ug=null;a.xL=null;}
function AFI(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cg^Dw(a.ty,c):0;return a.ug.k(b)&&!d?1:0;}
function Ov(){var a=this;X.call(a);a.io=null;a.vY=null;}
function ALy(a,b){return a.bh^Dw(a.io,b);}
function AJz(a){var b,c,d;b=new N;P(b);c=Hi(a.io,0);while(c>=0){Ix(b,Gv(c));BG(b,124);c=Hi(a.io,c+1|0);}d=b.Q;if(d>0)Wz(b,d-1|0);return O(b);}
function OB(){var a=this;X.call(a);a.qR=null;a.xa=null;}
function AO6(a,b){return a.qR.k(b);}
function Oz(){var a=this;X.call(a);a.jT=0;a.oq=null;a.kE=null;}
function APO(a,b){return !(a.jT^Dw(a.kE.H,b))&&!(a.jT^a.kE.dQ^a.oq.k(b))?0:1;}
function OA(){var a=this;X.call(a);a.j1=0;a.tW=null;a.lv=null;}
function AL0(a,b){return !(a.j1^Dw(a.lv.H,b))&&!(a.j1^a.lv.dQ^a.tW.k(b))?1:0;}
function OE(){var a=this;X.call(a);a.uN=0;a.t2=null;a.tR=null;a.wf=null;}
function AIm(a,b){return a.uN^(!a.t2.k(b)&&!a.tR.k(b)?0:1);}
function OF(){var a=this;X.call(a);a.q4=0;a.qH=null;a.pV=null;a.yD=null;}
function AE5(a,b){return a.q4^(!a.qH.k(b)&&!a.pV.k(b)?0:1)?0:1;}
function OC(){var a=this;X.call(a);a.py=null;a.yJ=null;}
function AJE(a,b){return C0(a.py,b);}
function OD(){var a=this;X.call(a);a.uc=null;a.ws=null;}
function AL3(a,b){return C0(a.uc,b)?0:1;}
function OG(){var a=this;X.call(a);a.rl=null;a.qM=0;a.s4=null;}
function AQ3(a,b){return !C0(a.rl,b)&&!(a.qM^Dw(a.s4.H,b))?0:1;}
function OH(){var a=this;X.call(a);a.r9=null;a.sk=0;a.rN=null;}
function AHN(a,b){return !C0(a.r9,b)&&!(a.sk^Dw(a.rN.H,b))?1:0;}
function Ou(){var a=this;X.call(a);a.s1=0;a.tU=null;a.uv=null;a.v2=null;}
function ASN(a,b){return !(a.s1^a.tU.k(b))&&!C0(a.uv,b)?0:1;}
function Pi(){var a=this;X.call(a);a.us=0;a.mW=null;a.nj=null;a.wo=null;}
function AJJ(a,b){return !(a.us^a.mW.k(b))&&!C0(a.nj,b)?1:0;}
function Or(){var a=this;X.call(a);a.o_=null;a.wt=null;}
function AHL(a,b){return C0(a.o_,b);}
function Os(){var a=this;X.call(a);a.pe=null;a.yz=null;}
function AJm(a,b){return C0(a.pe,b)?0:1;}
function Oy(){var a=this;X.call(a);a.uK=null;a.r1=0;a.vE=null;}
function AK0(a,b){return C0(a.uK,b)&&a.r1^Dw(a.vE.H,b)?1:0;}
function Oq(){var a=this;X.call(a);a.sF=null;a.q6=0;a.rZ=null;}
function AQC(a,b){return C0(a.sF,b)&&a.q6^Dw(a.rZ.H,b)?0:1;}
function Ow(){var a=this;X.call(a);a.s$=0;a.nJ=null;a.q0=null;a.we=null;}
function AGF(a,b){return a.s$^a.nJ.k(b)&&C0(a.q0,b)?1:0;}
function Ox(){var a=this;X.call(a);a.sA=0;a.mL=null;a.s0=null;a.wy=null;}
function AOe(a,b){return a.sA^a.mL.k(b)&&C0(a.s0,b)?0:1;}
var L2=G(0);
function SP(){var a=this;C.call(a);a.wk=null;a.tY=null;a.iO=null;a.cu=null;a.ip=0;a.kx=0;}
function MT(a,b){var c,d,e;c=J(a.iO);if(b>=0&&b<=c){X3(a.cu,null,(-1),(-1));d=a.cu;d.jx=1;d.eb=b;c=d.hD;if(c<0)c=b;d.hD=c;b=a.tY.cm(b,a.iO,d);if(b==(-1))a.cu.dh=1;if(b>=0){d=a.cu;if(d.iR){e=d.dL.data;if(e[0]==(-1)){c=d.eb;e[0]=c;e[1]=c;}d.hD=Jf(d);return 1;}}a.cu.eb=(-1);return 0;}d=new BB;Bo(d,C7(b));L(d);}
function AEu(a){return O_(a.cu,0);}
function AAw(a){return Si(a.cu,0);}
function Y5(a){return a.cu.i3;}
function ADN(){var a=this;C.call(a);a.B1=null;a.B2=null;a.B0=0.0;}
function Wo(){var a=this;C.call(a);a.gZ=null;a.lg=0;a.e7=0;}
function HZ(a,b){var c,d;c=a.gZ;d=c.data.length;if(d==a.e7)a.gZ=Mj(c,d*2|0);c=a.gZ.data;d=a.e7;a.e7=d+1|0;c[d]=b;}
var C2=G(0);
var AWM=null;var AX7=null;var AWO=null;var AWN=null;var AWQ=null;var AWP=null;var AWS=null;var AWR=null;var AWU=null;var AWT=null;var AWV=null;function AB3(){AB3=Bp(C2);ALV();}
function ALV(){AWM=CM(0);AX7=CN(0,0,0);AWO=R(B(611));AWN=CN(255,255,255);AWQ=CN(166,214,255);AWP=R(B(612));AWS=R(B(613));AWR=R(B(614));AWU=Fv(205,205,205,153);AWT=Fv(255,255,255,0);AWV=R(B(124));}
function Cg(){Ck.call(this);this.le=null;}
var AYY=null;var AYZ=null;var AY0=null;var AY1=null;var AY2=null;var AY3=null;var AY4=null;var AY5=null;var AY6=null;var AY7=null;var AY8=null;var AY9=null;var AY$=null;var AY_=null;var AZa=null;var AWW=null;function AAn(){AAn=Bp(Cg);AJc();}
function DE(a,b,c){var d=new Cg();WL(d,a,b,c);return d;}
function AKk(a,b,c,d){var e=new Cg();ACC(e,a,b,c,d);return e;}
function WL(a,b,c,d){AAn();Da(a,b,c);a.le=Iy(d,null);}
function ACC(a,b,c,d,e){AAn();Da(a,b,c);a.le=Iy(d,e);}
function AJc(){var b;b=new Cg;AB3();WL(b,B(339),0,AX7);AYY=b;AYZ=DE(B(340),1,CN(0,49,191));AY0=DE(B(342),2,R(B(615)));AY1=DE(B(48),3,R(B(616)));AY2=DE(B(345),4,AX7);AY3=DE(B(346),5,R(B(617)));AY4=DE(B(348),6,R(B(381)));AY5=DE(B(49),7,R(B(618)));AY6=DE(B(351),8,R(B(619)));AY7=AKk(B(353),9,AX7,CN(237,235,252));AY8=AKk(B(354),10,R(B(379)),R(B(620)));AY9=DE(B(355),11,R(B(381)));AY$=DE(B(357),12,R(B(382)));AY_=DE(B(359),13,R(B(621)));b=DE(B(360),14,R(B(361)));AZa=b;AWW=I(Cg,[AYY,AYZ,AY0,AY1,AY2,AY3,AY4,AY5,AY6,AY7,
AY8,AY9,AY$,AY_,b]);}
var Dv=G(0);
var AW0=null;var AW1=null;var AWX=null;var AWY=null;var AWZ=null;var AX8=null;var AX9=null;var AW2=null;var AW3=null;function AO9(){AO9=Bp(Dv);AJu();}
function AJu(){AW0=R(B(122));AW1=R(B(622));AWX=R(B(623));AWY=R(B(624));AWZ=R(B(625));AX8=R(B(122));AX9=R(B(622));AW2=Fv(205,205,205,153);AW3=CN(247,248,250);}
function Oj(){var a=this;C.call(a);a.iq=null;a.g9=0;}
function Og(){C.call(this);this.rE=null;}
function APh(a,b){US(a.rE,b);}
var Nd=G(Gz);
function AJb(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FD(d,a.Z);DA(d,a.Z,b);e=a.cU.c(b,c,d);if(e>=0)break;DA(d,a.Z,g);b=b+1|0;}}return b;}
function ASz(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FD(e,a.Z);DA(e,a.Z,c);f=a.cU.c(c,d,e);if(f>=0)break;DA(e,a.Z,g);c=c+(-1)|0;}}return c;}
function AHv(a){return null;}
var Qh=G(Bq);
var Xy=G(Bq);
function VD(){FP.call(this);this.ys=0;}
function P8(){FP.call(this);this.yk=0;}
var Ym=G(Bq);
function Vs(){var a=this;C.call(a);a.rr=null;a.tA=null;a.u5=0;a.ka=0;}
function Kz(a,b){return B6(a.rr)<b?0:1;}
function Sk(){var a=this;C.call(a);a.vp=null;a.vq=null;}
function SZ(){var a=this;C.call(a);a.wP=null;a.pu=null;}
function SY(){C.call(this);this.vR=null;}
var AC3=G(0);
function Mm(b){return !b?I(Bx,[B(153),B(154),B(626)]):I(Bx,[B(153),B(154),B(626),B(41)]);}
var AAr=G();
function Tp(){var a=this;C.call(a);a.uo=null;a.up=0;a.uq=null;}
function Lt(a,b){var c,d,e,f,g,h,i,j,k;c=a.uo;d=a.up;e=a.uq;if(b<=d){f=Cl(c);g=new Td;g.o2=c;h=S(C,1);h.data[0]=e;CQ(f,g,B(627),h);}else{i=Cl(c);g=new Te;g.rM=c;j=S(C,2);k=j.data;k[0]=e;h=BV(1);h.data[0]=250;k[1]=h;CQ(i,g,B(628),j);f=Cl(c);g=new Tf;g.nZ=c;h=S(C,1);h.data[0]=e;CQ(f,g,B(629),h);}}
function VA(){var a=this;C.call(a);a.dL=null;a.jG=null;a.k1=null;a.k6=null;a.oz=0;a.iR=0;a.cI=0;a.x=0;a.eb=0;a.i3=0;a.fl=0;a.dh=0;a.xV=0;a.hD=0;a.jx=0;}
function BK(a,b,c){a.jG.data[b]=c;}
function Dm(a,b){return a.jG.data[b];}
function Jf(a){return Si(a,0);}
function Si(a,b){R6(a,b);return a.dL.data[(b*2|0)+1|0];}
function DA(a,b,c){a.dL.data[b*2|0]=c;}
function JJ(a,b,c){a.dL.data[(b*2|0)+1|0]=c;}
function FD(a,b){return a.dL.data[b*2|0];}
function IG(a,b){return a.dL.data[(b*2|0)+1|0];}
function ACV(a){return O_(a,0);}
function O_(a,b){R6(a,b);return a.dL.data[b*2|0];}
function M6(a,b){return a.k1.data[b];}
function Ef(a,b,c){a.k1.data[b]=c;}
function R6(a,b){var c;if(!a.iR){c=new D3;Z(c);L(c);}if(b>=0&&b<a.oz)return;c=new BB;Bo(c,C7(b));L(c);}
function X3(a,b,c,d){a.iR=0;a.jx=2;Hz(a.dL,(-1));Hz(a.jG,(-1));if(b!==null)a.k6=b;if(c>=0){a.cI=c;a.x=d;}a.eb=a.cI;}
function AAQ(a){return a.jx;}
function V3(){C.call(this);this.oa=null;}
function ARd(a){DO(a.oa);}
function Tn(){X.call(this);this.w4=null;}
function ARa(a,b){return Cu(b)!=2?0:1;}
function MW(){X.call(this);this.xc=null;}
function AGo(a,b){return Cu(b)!=1?0:1;}
function Sd(){X.call(this);this.wN=null;}
function AF_(a,b){return Rk(b);}
function Sc(){X.call(this);this.wu=null;}
function AI9(a,b){return 0;}
function Xf(){X.call(this);this.x2=null;}
function AKL(a,b){return !Cu(b)?0:1;}
function O5(){X.call(this);this.xr=null;}
function ARe(a,b){return Cu(b)!=9?0:1;}
function N_(){X.call(this);this.yw=null;}
function ANA(a,b){return Gq(b);}
function QP(){X.call(this);this.w6=null;}
function APb(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function MR(){X.call(this);this.vQ=null;}
function ASb(a,b){a:{b:{switch(Cu(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function MV(){X.call(this);this.xv=null;}
function AH$(a,b){a:{b:{switch(Cu(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function NV(){X.call(this);this.xZ=null;}
function ARr(a,b){a:{switch(Cu(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Pt(){X.call(this);this.yg=null;}
function AMi(a,b){return JD(b);}
function PC(){X.call(this);this.wQ=null;}
function AOC(a,b){return PD(b);}
function T$(){X.call(this);this.xG=null;}
function AQ4(a,b){return Cu(b)!=3?0:1;}
function SR(){X.call(this);this.vU=null;}
function ARW(a,b){a:{b:{switch(Cu(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function M9(){X.call(this);this.yL=null;}
function AHV(a,b){a:{b:{switch(Cu(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Gq(b);}return b;}
function Mi(){X.call(this);this.lk=0;}
function AU2(a){var b=new Mi();ACz(b,a);return b;}
function ACz(a,b){Bt(a);a.lk=b;}
function AND(a,b){return a.bh^(a.lk!=Cu(b&65535)?0:1);}
var R7=G(Mi);
function AQd(a,b){return a.bh^(!(a.lk>>Cu(b&65535)&1)?0:1);}
function P1(){C.call(this);this.vH=null;}
function ALP(a){var b,c;b=a.vH;c=b.vp;b=b.vq;c.Gk(b.ij,b.kf,null);}
function V_(){C.call(this);this.nR=null;}
function AOt(a,b){var c,d,e,f;c=a.nR;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.pu;c=By();b=Cz(b);e=new N;P(e);H(H(e,B(630)),b);Br(c,O(e));b=By();f=d.length;c=new N;P(c);V(H(c,B(631)),f);Br(b,O(c));}
function Wc(){var a=this;C.call(a);a.tq=null;a.tr=null;}
function AM9(a,b){var c,d;c=a.tq;d=a.tr;b.arrayBuffer().then(Bj(c,"f"),Bj(d,"f"));}
function TW(){var a=this;C.call(a);a.mt=null;a.mu=null;}
function AJR(a,b){var c;c=a.mt;Lt(a.mu,JL(c,b.size));}
function TZ(){C.call(this);this.uL=null;}
function AFA(a,b){var c;c=a.uL;Br(EY(),$rt_str(b.message));Lt(c,0);}
function UW(){C.call(this);this.wE=null;}
function ALJ(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function Te(){C.call(this);this.rM=null;}
function AOd(a,b){var c,d,e,f;c=a.rM;if(!c.hZ){b=b.data;d=D_(b[0]);e=FK(b[1]);ABI(c.e.f,d,e);c.hY=1;f=Kx(FG(),c.eZ);b=new N;P(b);H(H3(H(b,B(632)),f),B(197));$rt_globals.console.info($rt_ustr(O(b)));}}
function Tf(){C.call(this);this.nZ=null;}
function AML(a,b){var c,d,e,f,g,h;c=b.data;d=a.nZ;e=(D_(c[2])).data[0];if(e!=1)HO(d,b);else{d.hZ=1;f=D_(c[0]);g=FK(c[1]);AAa(d.e.f,f,g,d.hY);WD(d,ADR(e));Gx(Cl(d),AXa);F5(Cl(d));h=Kx(FG(),d.eZ);b=new N;P(b);H(H3(H(b,B(633)),h),B(197));$rt_globals.console.info($rt_ustr(O(b)));W7(d);HQ(d);}}
function Td(){C.call(this);this.o2=null;}
function ALn(a,b){HO(a.o2,b);}
var Zp=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"js",4,"demo",6,"worker"]);
$rt_metadata([C,0,0,[],0,3,0,0,["cG",AVn(AMe),"cB",AVm(AGX)],RU,0,C,[],0,3,0,0,0,Ng,0,C,[],3,3,0,0,0,ML,0,C,[],3,3,0,0,0,WN,0,C,[Ng,ML],0,3,0,0,0,ZU,0,C,[],4,0,0,0,0,ZB,0,C,[],4,3,0,0,0,GA,0,C,[],0,3,0,0,0,D6,0,GA,[],0,3,0,0,0,Bq,0,D6,[],0,3,0,0,0,ABw,0,Bq,[],0,3,0,0,0,Di,0,C,[],3,3,0,0,0,CK,0,C,[],3,3,0,0,0,I5,0,C,[],3,3,0,0,0,Bx,"String",1,C,[Di,CK,I5],0,3,0,EO,["cB",AVm(AGW),"cG",AVn(Bn),"lU",AVm(Is),"jO",AVn(AI_)],EI,0,GA,[],0,3,0,0,0,Hk,0,EI,[],0,3,0,0,0,AA$,0,Hk,[],0,3,0,0,0,DY,0,C,[Di],1,3,0,0,0,HW,0,
DY,[CK],0,3,0,0,["jO",AVn(ALq)],Gn,0,C,[Di,I5],0,0,0,0,["hL",AVn(JI),"cB",AVm(O)],H6,0,C,[],3,3,0,0,0,N,0,Gn,[H6],0,3,0,0,["lA",AVq(ALk),"kK",AVp(AIf),"cB",AVm(DW),"hL",AVn(ALt),"ma",AVo(ALW)],Es,0,Hk,[],0,3,0,0,0,ACD,0,Es,[],0,3,0,0,0,AAX,0,Es,[],0,3,0,0,0,T8,0,C,[],3,3,0,0,0,Ds,0,C,[],3,3,0,0,0,O3,0,C,[],3,0,0,0,0,IN,0,C,[T8,Ds,O3],1,3,0,0,["d0",AVm(FQ)],RH,0,IN,[],0,3,0,0,0,Y2,0,C,[],0,3,0,0,0,ADY,0,C,[],4,3,0,0,0,Bd,0,C,[],3,3,0,0,0,Uf,0,C,[Bd],0,3,0,0,0,Bw,0,C,[],3,3,0,0,0,ABM,0,C,[Bw],1,3,0,0,0,Y7,0,C,
[],3,3,0,0,0,ADy,0,C,[],3,3,0,0,0,ADr,0,C,[],3,3,0,0,0,LV,0,C,[],0,3,0,0,0,ZR,0,C,[Bw],1,3,0,0,0,BP,0,C,[Bw],3,3,0,0,0,Ug,0,C,[BP],0,3,0,0,["bb",AVn(AE6)],Ue,0,C,[BP],0,3,0,0,["bb",AVn(AQ5)],Lw,0,C,[],4,3,0,0,0,ADn,0,C,[],4,3,0,0,0,AAx,0,C,[],0,3,0,0,0,AEZ,0,C,[],4,3,0,0,0,Nm,0,C,[BP],0,3,0,0,["bb",AVn(ANm)]]);
$rt_metadata([ADO,0,C,[Bw],1,3,0,0,0,Zi,0,C,[],0,3,0,0,0,Wf,0,C,[Bw],3,3,0,0,0,ABx,0,C,[Wf],1,3,0,0,["yn",AVn(AJP),"GP",AVm(AL$)],ABl,0,C,[Bw],1,3,0,0,0,Hg,0,C,[],3,3,0,0,0,Tl,0,C,[Hg],0,3,0,0,0,BB,0,Bq,[],0,3,0,0,0,ACj,0,C,[],4,3,0,0,0,GF,0,Bq,[],0,3,0,0,0,IZ,0,Bq,[],0,3,0,0,0,C8,0,C,[CK],0,3,0,0,0,ME,0,C,[Bw],3,3,0,0,0,SW,0,C,[ME],3,3,0,0,0,Ek,0,C,[Bw],3,3,0,0,0,ADX,0,C,[SW,Ek],3,3,0,0,0,NW,0,C,[BP],0,3,0,0,["bb",AVn(AOv)],ABi,0,C,[],4,3,0,0,0,Ps,0,C,[Ek],3,3,0,0,0,Ry,0,C,[Ek],3,3,0,0,0,Ro,0,C,[Ek],3,3,0,
0,0,T2,0,C,[Ek],3,3,0,0,0,Xx,0,C,[Ek],3,3,0,0,0,U$,0,C,[Ek,Ps,Ry,Ro,T2,Xx],3,3,0,0,0,OJ,0,C,[],3,3,0,0,0,O4,0,C,[Bw],3,3,0,0,0,Y6,0,C,[Bw,U$,OJ,O4],1,3,0,0,["yn",AVn(ANz),"A5",AVo(AP9),"Hw",AVo(APx),"DZ",AVp(ANr),"BW",AVn(ARn),"B7",AVm(AHg),"Ao",AVp(AFs)],BH,0,Bq,[],0,3,0,0,0,Yu,0,Bq,[],0,3,0,0,0,Eo,0,C,[],4,3,0,KB,0,AEr,0,C,[Bw],1,3,0,0,0,AAP,0,C,[Bw],1,3,0,0,0,AEU,0,C,[Bw],1,3,0,0,0,J0,0,C,[Bw],3,3,0,0,0,OY,0,C,[J0],0,3,0,0,["vc",AVn(AHc)],AA9,0,C,[Bw],1,3,0,0,0,OZ,0,C,[J0],0,3,0,0,["vc",AVn(AFw)],Hh,0,BB,
[],0,3,0,0,0,AAi,0,C,[],0,3,0,0,0,OI,0,C,[],3,3,0,0,0,S5,0,C,[OI],0,3,0,0,0,B4,0,C,[],3,3,0,0,0,R8,0,C,[B4],0,3,0,0,0,Bi,0,C,[],3,3,0,0,0,ABG,0,C,[Bi],0,3,0,0,0,ABf,0,C,[Bw],1,3,0,0,0,Rs,0,C,[Bw],3,3,0,0,0,V5,0,C,[Rs],0,3,0,0,["D1",AVn(AKt)],VY,0,C,[Bi],0,3,0,0,0,Qg,0,C,[Bw],3,3,0,0,0]);
$rt_metadata([VZ,0,C,[Qg],0,3,0,0,["uZ",AVo(AIA)],AD5,0,C,[Bw],1,3,0,0,0,Cm,0,C,[Bw],3,3,0,0,0,VW,0,C,[Cm],0,3,0,0,["ce",AVn(AOD)],K9,0,C,[],3,3,0,0,0,ED,0,C,[K9],1,3,0,0,0,Ep,0,C,[],3,3,0,0,0,XZ,0,C,[K9],3,3,0,0,0,Nf,0,C,[XZ],3,3,0,0,0,Pe,0,ED,[Ep,Di,Nf],0,3,0,0,0,VX,0,C,[BP],0,3,0,0,["bb",AVn(APV)],PB,0,C,[],0,3,0,0,0,Lm,0,C,[],1,3,0,0,0,ADw,0,Lm,[],0,3,0,0,0,Cv,0,C,[Ds],1,3,0,0,["cN",AVn(AR0)],Ji,0,C,[Hg],0,3,0,0,["uO",AVo(JE)],AAo,0,C,[],0,3,0,0,0,WR,0,C,[Cm],0,3,0,0,["ce",AVn(AN2)],WS,0,C,[Cm],0,3,0,0,
["ce",AVn(AOi)],WT,0,C,[Cm],0,3,0,0,["ce",AVn(AMx)],WU,0,C,[Cm],0,3,0,0,["ce",AVn(ALS)],WV,0,C,[Cm],0,3,0,0,["ce",AVn(AMj)],WW,0,C,[Cm],0,3,0,0,["ce",AVn(AOS)],WX,0,C,[Cm],0,3,0,0,["ce",AVn(AJ7)],WY,0,C,[Cm],0,3,0,0,["ce",AVn(ASn)],WZ,0,C,[Cm],0,3,0,0,["ce",AVn(AJi)],W0,0,C,[Cm],0,3,0,0,["ce",AVn(AP4)],Yf,0,C,[Cm],0,3,0,0,["ce",AVn(AR1)],Yg,0,C,[Cm],0,3,0,0,["ce",AVn(AL7)],Yh,0,C,[Cm],0,3,0,0,["ce",AVn(AMB)],Yi,0,C,[Cm],0,3,0,0,["ce",AVn(AOx)],UA,0,C,[],3,3,0,0,0,UN,0,C,[UA],0,3,0,0,0,UL,0,C,[Cm],0,3,0,0,["ce",
AVn(ALa)],MF,0,C,[],0,3,0,0,0,AEh,0,C,[],0,3,0,0,0,I3,0,C,[],3,3,0,0,0,Co,0,C,[I3],3,3,0,0,0,Cq,0,C,[],3,3,0,0,["bL",AVn(ALf),"b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ)],DI,0,C,[],3,3,0,0,0,Ey,0,C,[I3],3,3,0,0,0,EK,0,C,[],3,3,0,0,0,EP,0,C,[],3,3,0,0,0,Fb,0,C,[EP],3,3,0,0,0,Qp,0,C,[Ds],0,3,0,0,0,Be,0,C,[],0,3,0,0,["cB",AVm(YA)],W4,0,C,[],0,3,0,0,0,ADu,0,C,[],0,3,0,0,0,Zy,0,C,[],3,3,0,0,0,Qf,0,C,[],0,3,0,0,0]);
$rt_metadata([LM,0,C,[],0,3,0,0,0,Dy,0,LM,[],0,3,0,0,0,WC,0,Dy,[],0,3,0,0,0,EC,0,Dy,[],0,3,0,0,0,AA7,0,Dy,[],0,3,0,0,0,AC8,0,EC,[],0,3,0,0,0,ACI,0,EC,[],0,3,0,0,0,ZT,0,EC,[],0,3,0,0,0,ACG,0,Dy,[],0,3,0,0,0,Sg,0,C,[Bw],3,3,0,0,0,AEX,0,C,[Sg],3,3,0,0,0,Qc,0,C,[Ds],0,3,0,0,0,Qe,0,C,[],0,3,0,0,0,Ck,0,C,[CK,Di],1,3,0,0,0,GR,0,Ck,[],12,3,0,JP,0,Mn,0,C,[],3,3,0,0,0,TK,0,C,[Mn],3,3,0,0,0,U1,0,C,[],3,3,0,0,0,Gs,0,C,[TK,U1],1,3,0,0,0,Jy,0,Gs,[],0,3,0,0,0,AAT,0,Jy,[],0,3,0,0,0,Gd,0,Gs,[],1,3,0,0,0,Lu,0,Gd,[],0,3,0,0,["ke",
AVp(AK5)],D0,0,Ck,[],12,3,0,ARg,0,Jq,0,C,[CK],1,3,0,0,0,Mq,0,Jq,[],0,3,0,AAH,0,Pj,0,C,[],0,3,0,0,0,GV,0,Ck,[],12,0,0,AMs,0,KQ,0,Gd,[],0,3,0,0,["ke",AVp(AIY)],ADm,0,BH,[],0,3,0,0,0,V6,0,D6,[],0,3,0,0,0,Mp,0,C,[Bw],3,3,0,0,0,XW,0,C,[Mp],0,3,0,0,["bb",AVn(APw)],XX,0,C,[Mp],0,3,0,0,["bb",AVn(AGO)],G8,0,C,[],1,3,0,0,0,Sz,0,C,[],3,3,0,0,0,Ld,0,G8,[CK,H6,I5,Sz],1,3,0,0,0,JY,0,G8,[CK],1,3,0,0,0,HM,0,C,[],0,3,0,He,0,Nl,0,Cv,[],0,3,0,0,["bC",AVm(AL2),"b6",AVo(AKw)],CS,0,Cv,[],1,3,0,0,["b6",AVo(G1)],QB,0,C,[],3,3,0,0,
0,LN,0,C,[QB],3,3,0,0,0,Li,0,C,[],3,3,0,0,0,Mk,0,CS,[Cq,LN,Li,DI,EK,Fb],0,3,0,0,["gw",AVo(AKg),"cN",AVn(AIV),"bC",AVm(AQ_),"f0",AVm(APU),"uS",AVm(AJW),"vh",AVm(APg),"s2",AVn(AP2),"b6",AVo(AOT),"ii",AVn(AGM),"bL",AVn(AMa),"cr",AVp(AL6),"b_",AVo(AGi),"cO",AVo(AJj),"cY",AVp(AOf),"dp",AVm(ALO)],Wg,0,Mk,[],0,3,0,0,["f0",AVm(AH_)],AEF,0,C,[],0,3,0,0,0,ABD,0,C,[Bw],1,3,0,0,0,Ka,0,Ld,[],1,0,0,0,0,ABk,0,Ka,[],0,0,0,0,0]);
$rt_metadata([K1,0,C,[],1,3,0,0,0,LT,0,C,[],0,3,0,0,0,Zf,0,C,[],0,3,0,0,0,Iz,0,C,[Bw],3,3,0,0,0,Nv,0,C,[Iz],0,3,0,0,["bb",AVn(AI3)],Nu,0,C,[Iz],0,3,0,0,["bb",AVn(ANq)],Nt,0,C,[BP],0,3,0,0,["bb",AVn(AOc)],Ns,0,C,[BP],0,3,0,0,["bb",AVn(AHp)],Yb,0,C,[Bd],0,3,0,0,["l",AVn(AM$)],Yd,0,C,[Bd],0,3,0,0,["l",AVn(ANM)],TC,0,C,[B4],0,3,0,0,["bW",AVn(ANI)],TB,0,C,[B4],0,3,0,0,["bW",AVn(AGp)],TA,0,C,[B4],0,3,0,0,["bW",AVn(AKa)],Tz,0,C,[B4],0,3,0,0,["bW",AVn(AJ9)],Ty,0,C,[B4],0,3,0,0,["bW",AVn(AKP)],Tx,0,C,[B4],0,3,0,0,["bW",
AVn(AGx)],Tw,0,C,[B4],0,3,0,0,["bW",AVn(AIb)],Tv,0,C,[B4],0,3,0,0,["bW",AVn(AN1)],Tu,0,C,[B4],0,3,0,0,["bW",AVn(ARL)],Tt,0,C,[B4],0,3,0,0,["bW",AVn(ASA)],Q5,0,C,[B4],0,3,0,0,["bW",AVn(ALG)],Q1,0,C,[B4],0,3,0,0,["bW",AVn(AFg)],Q3,0,C,[B4],0,3,0,0,["bW",AVn(AIZ)],QZ,0,C,[B4],0,3,0,0,["bW",AVn(ALX)],Q0,0,C,[B4],0,3,0,0,["bW",AVn(APR)],QX,0,C,[B4],0,3,0,0,["bW",AVn(AE8)],QY,0,C,[B4],0,3,0,0,["bW",AVn(APD)],QV,0,C,[B4],0,3,0,0,["bW",AVn(ALK)],Hd,0,C,[],0,3,0,0,0,O7,0,Hd,[],0,3,0,0,0,ADG,0,C,[],0,3,0,0,0,MB,0,Hd,
[],0,3,0,0,0,UC,0,C,[Bw],3,3,0,0,0,NQ,0,C,[UC],0,3,0,0,["vc",AVn(ALz)],Vi,0,C,[Bd],0,3,0,0,["l",AVn(WE)],Xl,0,JY,[],0,0,0,0,0,VH,0,C,[],0,3,0,0,0,IO,0,C,[],0,3,0,0,0,ACY,0,C,[Cq,DI],0,0,0,0,["bL",AVn(AO0),"cr",AVp(ASF),"b_",AVo(AGP),"cO",AVo(ANo),"cY",AVp(ALQ)],HY,0,C,[],3,3,0,0,["vv",AVm(AHP),"sS",AVm(ASM)],AAZ,0,C,[HY,Cq,Li],0,3,0,0,["sS",AVm(AII),"vv",AVm(AHl),"uS",AVm(Yp),"vh",AVm(W6),"s2",AVn(Yq),"cO",AVo(Vd),"b_",AVo(Vk),"cr",AVp(Q4),"bL",AVn(PE),"g3",AVn(ANE)],HV,0,C,[],3,3,0,0,0,Rf,0,C,[HV],0,3,0,0,
["h8",AVn(AKr)],Rd,0,C,[HV],0,3,0,0,["h8",AVn(AMy)],Re,0,C,[Bd],0,3,0,0,["l",AVn(AGd)],Rb,0,C,[Bd],0,3,0,0,["l",AVn(AFP)],Rc,0,C,[Co],0,3,0,0,["bA",AVn(AMb)],HR,0,C,[Co],0,3,0,0,["bA",AVn(APF)],Q_,0,C,[Bd],0,3,0,0,["l",AVn(AN$)],Ra,0,C,[Ey],0,3,0,0,["bA",AVn(AK3)]]);
$rt_metadata([ACs,0,C,[Bw],1,3,0,0,0,Zt,0,C,[],3,3,0,0,0,Yn,0,C,[],0,3,0,0,0,SE,0,C,[Co],0,3,0,0,["bA",AVn(ASI)],SF,0,C,[Co],0,3,0,0,["bA",AVn(AFz)],B1,0,C,[],0,3,0,0,["cG",AVn(ASi)],Eq,0,C,[],3,3,0,0,0,ABC,0,C,[Cq,Eq],0,3,0,0,["bL",AVn(ZE),"cr",AVp(ABB),"b_",AVo(YB),"cO",AVo(AEH),"gx",AVo(ARx)],Y3,0,C,[Eq,HY],0,3,0,0,["vv",AVm(AHP),"sS",AVm(ASM),"gx",AVo(AHj),"g3",AVn(AFQ)],ABm,0,C,[],0,3,0,0,0,Lc,0,C,[],0,3,0,0,0,IM,0,C,[],0,3,0,0,0,Wi,0,C,[],0,3,0,0,0,YG,0,C,[],0,3,0,0,0,Nz,0,C,[],0,3,0,0,0,EW,0,C,[Ds],0,
0,0,0,0,ABO,0,C,[],0,3,0,0,0,ABP,0,C,[Ds],0,3,0,0,0,WA,0,C,[],3,3,0,0,0,Hx,0,C,[WA],3,3,0,0,0,EQ,0,C,[Hx],1,3,0,0,0,Sb,0,C,[Hx],3,3,0,0,0,Jm,0,C,[Sb],3,3,0,0,0,F7,0,EQ,[Jm],1,3,0,0,["cG",AVn(AMP)],Lv,0,C,[],3,3,0,0,0,Zm,0,F7,[Ep,Di,Lv],0,3,0,0,0,U8,0,C,[Bd],0,3,0,0,0,U7,0,C,[Bd],0,3,0,0,["l",AVn(APE)],U3,0,C,[Bd],0,3,0,0,["l",AVn(ANs)],U2,0,C,[Bi],0,3,0,0,["p",AVm(APA)],U5,0,C,[Bi],0,3,0,0,["p",AVm(AKp)],U4,0,C,[Bi],0,3,0,0,["p",AVm(AMJ)],Vu,0,C,[Bi],0,3,0,0,["p",AVm(AOZ)],Vt,0,C,[Bi],0,3,0,0,["p",AVm(AJ2)],Vv,
0,C,[Bi],0,3,0,0,["p",AVm(AFt)],Fs,0,Ck,[],12,3,0,AFG,0,Kr,0,C,[],4,3,0,AKN,0,UT,0,C,[],3,3,0,0,0,MM,0,C,[Bi],0,3,0,0,["p",AVm(ALR)],MN,0,C,[Bi],0,3,0,0,["p",AVm(AKi)],Ye,0,C,[],3,3,0,0,0,Kj,0,C,[],0,3,0,0,0,E0,0,C,[],0,3,0,0,0,Ms,0,E0,[],0,3,0,0,0,MQ,0,E0,[],0,3,0,0,0,Qm,0,E0,[],0,3,0,0,0,G3,0,C,[],3,3,0,0,0,RI,0,C,[],3,3,0,0,0,Gp,0,C,[CK],0,3,0,0,0,Ju,0,C,[],0,3,0,0,0]);
$rt_metadata([Wv,0,C,[],3,3,0,0,0,Tg,0,C,[Wv],0,3,0,0,["cB",AVm(AHW)],UV,0,C,[],3,3,0,0,0,Lb,"JsFileHandle",5,C,[UV],0,3,0,0,["cB",AVm(AK$)],N0,0,C,[UT],0,3,0,0,0,ABz,0,ED,[Ep,Di],0,3,0,0,0,CB,0,C,[],0,3,0,0,0,NR,0,C,[Bi],0,3,0,0,["p",AVm(AR7)],B7,0,C,[],0,3,0,0,0,Nr,0,C,[],0,3,0,0,0,AEq,0,C,[CK],0,3,0,0,["cG",AVn(AQb),"jO",AVn(AG5)],OR,0,C,[Hg],0,3,0,0,["uO",AVo(AMm)],ADv,0,C,[],0,3,0,0,["cB",AVm(AKf),"cG",AVn(APn)],KX,0,K1,[],1,3,0,0,0,Py,0,KX,[],0,3,0,0,0,ID,0,D6,[],0,3,0,0,0,XT,0,C,[Iz],0,3,0,0,["bb",AVn(AHI)],XR,
0,C,[BP],0,3,0,0,["bb",AVn(AFx)],XS,0,C,[BP],0,3,0,0,["bb",AVn(AJH)],H2,0,C,[],0,3,0,0,0,Hn,0,C,[],3,3,0,0,0,KH,0,C,[Hn,Ep],0,0,0,0,["cG",AVn(AH1)],In,0,KH,[],0,0,0,0,0,KD,0,CS,[LN],0,3,0,0,["cN",AVn(AHy),"bC",AVm(AKs),"f0",AVm(AOr),"b6",AVo(AMW),"k8",AVo(AAu),"ii",AVn(AGq)],Y$,0,Cv,[],0,3,0,0,["cN",AVn(AFK),"bC",AVm(AIP),"b6",AVo(APv)],Wy,0,CS,[Cq,Eq],0,3,0,0,["gx",AVo(AQ1),"b6",AVo(AIg),"bC",AVm(AI4),"bL",AVn(AON),"b_",AVo(AJa),"cO",AVo(AGT),"cr",AVp(AN4)],XO,0,CS,[Eq],0,3,0,0,["gx",AVo(AJd),"bC",AVm(AOp),
"b6",AVo(AHt),"cN",AVn(APC)],Yt,0,CS,[Cq],0,3,0,0,["bL",AVn(ALf),"b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ),"bC",AVm(AOY),"cN",AVn(AHU)],Pp,0,Cv,[],0,3,0,0,["bC",AVm(AF2),"b6",AVo(AQJ)],Dc,0,Cv,[],0,3,0,0,["bC",AVm(Sy),"b6",AVo(S6)],Rh,"SelectFileTest",6,Dc,[],0,3,0,0,0,AEy,"WorkerTest",7,Dc,[],0,3,0,0,0,Xe,"RenderTexture",6,Dc,[],0,3,0,0,["cN",AVn(ALr),"bC",AVm(AFC),"b6",AVo(AOm)],SB,"ScissorDemo",6,Dc,[],0,3,0,0,["bC",AVm(ASc),"b6",AVo(AHk)],OX,0,Cv,[],0,3,0,0,["bC",AVm(ASf),"b6",AVo(AJy),"cN",AVn(AH0)],IJ,
"ClipboardTest",6,Dc,[Cq],0,3,0,0,["bL",AVn(ALf),"b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(APp)],Ql,0,Cv,[],0,3,0,0,["bC",AVm(AR8),"b6",AVo(AMr)],F9,0,Cv,[Cq],1,3,0,0,["bL",AVn(ALf),"b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ),"bC",AVm(AAV)],O8,0,F9,[],0,3,0,0,["b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ),"b6",AVo(AM4),"bL",AVn(AIq)],O9,0,F9,[],0,3,0,0,["b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ),"bL",AVn(AKo),"bC",AVm(AGU),"b6",AVo(ALx)],WP,0,CS,[Eq],0,3,0,0,["gx",AVo(AKA),"bC",AVm(ASv),"b6",AVo(AOF),"cN",AVn(ALm)],RB,
0,KD,[],0,3,0,0,["f0",AVm(AKG),"k8",AVo(AMv)],I8,0,C,[],0,3,0,0,0,ACB,0,C,[],3,3,0,0,0,ZG,0,C,[],0,3,0,0,0,Ic,0,C,[],0,3,0,0,0,ADx,0,C,[],0,3,0,0,0,Mv,0,C,[Hn,Di],0,3,0,0,0,JA,0,Mv,[],0,0,0,0,0,AEe,0,C,[],0,3,0,0,0]);
$rt_metadata([Sn,0,C,[Co],0,3,0,0,["bA",AVn(AMF)],Sr,0,C,[Bd],0,3,0,0,["l",AVn(ARO)],Sq,0,C,[EK],0,3,0,0,["gw",AVo(AMG)],Sp,0,C,[Fb],0,3,0,0,["dp",AVm(ARw)],So,0,C,[DI],0,3,0,0,["cY",AVp(AQV)],Ss,0,C,[Ey],0,3,0,0,["bA",AVn(AJL)],ADH,0,IO,[],0,3,0,0,0,Ub,0,C,[Cq],0,0,0,0,["bL",AVn(AOy),"cr",AVp(AP_),"b_",AVo(AIM),"cO",AVo(AIl)],R0,0,C,[Co],0,3,0,0,["bA",AVn(AOs)],RZ,0,C,[Co],0,3,0,0,["bA",AVn(AQ8)],R2,0,C,[EK],0,3,0,0,["gw",AVo(ARF)],R1,0,C,[Bi],0,3,0,0,["p",AVm(ARD)],RY,0,C,[Ey],0,3,0,0,["bA",AVn(AMM)],RX,0,
C,[DI],0,3,0,0,["cY",AVp(AKn)],Hf,0,B1,[],0,3,0,0,0,Vh,0,C,[],0,3,0,0,0,Z2,0,C,[],0,3,0,0,0,TE,0,C,[Co],0,3,0,0,["bA",AVn(AOX)],TH,0,C,[Ey],0,3,0,0,["bA",AVn(AFl)],AEv,0,C,[],0,3,0,0,["cG",AVn(ASE)],TG,0,C,[Bi],0,3,0,0,["p",AVm(AJ6)],TD,0,C,[Bi],0,3,0,0,["p",AVm(AQm)],C$,0,C,[],0,3,0,0,0,ON,0,C,[Co],0,3,0,0,["bA",AVn(AHi)],OO,0,C,[Ey],0,3,0,0,["bA",AVn(AQF)],ACu,0,C,[],0,3,0,0,0,OP,0,C,[DI],0,3,0,0,["cY",AVp(ANB)],AEg,0,C,[],0,3,0,0,0,Up,0,C,[Eq],0,3,0,0,["gx",AVo(ANe)],Uq,0,C,[Co],0,3,0,0,["bA",AVn(AFq)],Ny,
0,C,[],3,3,0,0,0,ADE,0,C,[Ny],0,3,0,0,0,WO,0,C,[Cq],0,0,0,0,["cr",AVp(AOQ),"b_",AVo(AHd),"cO",AVo(AOI),"bL",AVn(AIG)],Ta,0,C,[DI],0,3,0,0,["cY",AVp(AHZ)],Qi,0,C,[Co],0,3,0,0,["bA",AVn(APs)],RF,0,C,[Bd],0,3,0,0,["l",AVn(AFX)],RE,0,C,[Bd],0,3,0,0,["l",AVn(ASj)],RD,0,C,[Bd],0,3,0,0,["l",AVn(AIi)],RC,0,C,[Bd],0,3,0,0,["l",AVn(ANu)],RA,0,C,[Bd],0,3,0,0,["l",AVn(AMz)],Rz,0,C,[Bd],0,3,0,0,["l",AVn(AOG)],Ua,0,C,[Cq],0,0,0,0,["cO",AVo(AFZ),"cr",AVp(AOQ),"bL",AVn(AQH),"b_",AVo(AME)],C1,0,C,[],3,3,0,FN,0,Uz,0,C,[Cq],0,
0,0,0,["cr",AVp(AOQ),"b_",AVo(ANJ),"cO",AVo(AHe),"bL",AVn(AF9)],N5,0,C,[DI],0,3,0,0,["cY",AVp(AF1)],SO,0,C,[Co],0,3,0,0,["bA",AVn(AQM)],SN,0,C,[EK],0,3,0,0,["gw",AVo(AIH)],SL,0,C,[EK],0,3,0,0,["gw",AVo(AQa)],SK,0,C,[Fb],0,3,0,0,["dp",AVm(AN3)],SM,0,C,[Fb],0,3,0,0,["dp",AVm(AG7)]]);
$rt_metadata([Sh,0,C,[Co],0,3,0,0,["bA",AVn(AIO)],QI,0,C,[Co],0,3,0,0,["bA",AVn(AJl)],QJ,0,C,[Ey],0,3,0,0,["bA",AVn(AFr)],QK,0,C,[DI],0,3,0,0,["cY",AVp(AO5)],ABo,0,C,[],0,3,0,0,["cG",AVn(ARi)],CZ,0,C,[],3,3,0,ANk,0,Cc,0,Ck,[],12,3,0,ABK,0,IT,0,C,[],0,3,0,0,0,HH,0,C,[],0,3,0,0,0,ADa,0,C,[],0,3,0,0,0,GC,0,C,[],4,3,0,0,0,AE1,0,C,[],0,3,0,0,0,DV,0,C,[],3,3,0,AKb,0,OV,0,C,[Bw],3,3,0,0,0,Ph,0,C,[OV],0,3,0,0,["uZ",AVo(AJr)],OW,0,C,[Bw],3,3,0,0,0,Pf,0,C,[OW],0,3,0,0,["uZ",AVo(AKF)],ZV,0,C,[],0,3,0,0,0,YY,0,C,[Bw],3,
3,0,0,0,Jz,0,C,[Ds],0,3,0,0,["d0",AVm(ACM)],T7,0,C,[],0,3,0,0,0,DU,0,C,[],3,3,0,Yc,0,Gt,0,C,[],3,3,0,0,0,Xu,0,C,[Gt],0,3,0,0,["nY",AVp(APj)],Xv,0,C,[Gt],0,3,0,0,0,Wk,0,C,[Cq],0,0,0,0,["bL",AVn(AFy),"cr",AVp(APl),"b_",AVo(ANi),"cO",AVo(AKO)],Ys,0,C,[Bd],0,3,0,0,["l",AVn(AOJ)],AB0,0,C,[],0,3,0,0,0,PR,0,C,[Bd],0,3,0,0,["l",AVn(AKW)],Qu,0,C,[Co],0,3,0,0,["bA",AVn(AK1)],RN,0,C,[Cq],0,0,0,0,["b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ),"bL",AVn(AFD)],Z9,0,C,[],0,3,0,0,0,Ci,0,Ck,[],12,3,0,ACb,0,AEl,0,C,[],0,3,0,0,0,AAW,
0,C,[Bw],4,3,0,0,0,AEN,0,C,[],0,3,0,0,0,AD8,0,C,[],3,3,0,0,0,CT,0,C,[Bw],1,3,0,0,0,ACm,0,CT,[],1,3,0,0,0,AC4,0,CT,[],1,3,0,0,0,ZZ,0,CT,[],1,3,0,0,0,AAj,0,CT,[],1,3,0,0,0,ADF,0,CT,[],1,3,0,0,0,UD,0,C,[Bi],0,3,0,0,["p",AVm(AMf)],Gm,0,Ck,[],12,0,0,AMA,0,Zs,0,C,[],0,3,0,0,0,Ib,0,C,[],0,3,0,0,0,Q2,0,C,[],0,3,0,0,0,L6,0,C,[],0,3,0,0,0,AAF,0,C,[],4,3,0,0,0]);
$rt_metadata([We,0,C,[Cq],0,0,0,0,["b_",AVo(AQ6),"cO",AVo(AFZ),"cr",AVp(AOQ),"bL",AVn(APN)],AAR,0,C,[Bw],1,3,0,0,0,M0,0,C,[Bd],0,3,0,0,["l",AVn(APZ)],Wp,0,C,[EP],0,3,0,0,["dp",AVm(AR_)],AET,0,C,[],0,3,0,0,0,ACk,0,C,[],3,3,0,0,0,LJ,0,C,[],3,3,0,0,0,RG,0,C,[LJ],0,3,0,0,["q$",AVn(AMX)],QF,0,C,[Bd],0,3,0,0,["l",AVn(ARl)],YF,0,C,[],0,3,0,0,0,Nq,0,C,[Ds],0,3,0,0,0,Ya,0,C,[Bd],0,3,0,0,["l",AVn(ANY)],YV,0,C,[],0,3,0,0,0,ADT,0,C,[CK],0,3,0,0,["cG",AVn(AFL),"lU",AVm(AO4),"jO",AVn(AOB)],RW,0,C,[Bd],0,3,0,0,["l",AVn(AMT)],SI,
0,C,[],3,3,0,0,0,FF,0,C,[],3,3,0,0,0,NH,0,C,[FF],0,0,0,0,0,FP,0,ID,[],0,3,0,0,0,Xt,0,EI,[],0,3,0,0,0,Qt,0,C,[Bd],0,3,0,0,["l",AVn(ANZ)],Ux,0,C,[Bi],0,3,0,0,["p",AVm(AQB)],XE,0,DY,[CK],0,3,0,0,0,FC,0,C,[],0,0,0,0,0,HP,0,C,[],4,3,0,0,0,VO,0,C,[],0,3,0,0,0,L_,0,C,[],1,3,0,0,0,ABb,0,CT,[],1,3,0,0,0,QS,0,C,[Bd],0,3,0,0,["l",AVn(AJV)],V7,0,C,[Bd],0,3,0,0,["l",AVn(ASl)],Qx,0,C,[Bd],0,3,0,0,["l",AVn(AM5)],EL,0,C,[Ds],0,3,0,0,["d0",AVm(ANy),"jc",AVm(ARo),"jf",AVp(P9),"e8",AVn(ZJ),"km",AVn(AIL),"kc",AVn(AQf),"pR",AVo(ASs),
"cr",AVp(AQP),"b_",AVo(AP5),"cO",AVo(ARb),"bL",AVn(AMR),"cY",AVp(AID)],GG,0,EL,[],0,3,0,0,0,Rg,0,GG,[HY],0,3,0,0,["vv",AVm(AHP),"sS",AVm(ASM),"d0",AVm(ASG),"pR",AVo(AHM),"e8",AVn(AKx),"kc",AVn(ALI),"km",AVn(AIj),"u1",AVm(Z1),"bL",AVn(ARB),"b_",AVo(AFR),"cr",AVp(AF6),"g3",AVn(ALe)],Wd,0,C,[Bi],0,3,0,0,["p",AVm(ASt)],AAO,0,EL,[],0,3,0,0,["d0",AVm(AF$),"jf",AVp(AHS),"e8",AVn(APK),"cr",AVp(AJ3),"b_",AVo(AQS),"cO",AVo(AJB),"bL",AVn(AKY),"cY",AVp(APX),"jc",AVm(ANd)],Wm,0,GG,[],0,3,0,0,["u1",AVm(AN0),"jc",AVm(ALM),
"kc",AVn(AKz),"e8",AVn(AIc),"km",AVn(ALc)],PJ,0,C,[Bd],0,3,0,0,0,Sm,0,DY,[CK],0,3,0,0,0,VI,0,C,[Bi],0,3,0,0,["p",AVm(AOl)],RL,0,C,[Bi],0,3,0,0,["p",AVm(AKh)],X1,0,C,[],0,3,0,0,0,H9,0,C,[],0,3,0,0,0,TU,0,EL,[],0,3,0,0,0,Uv,0,C,[],0,3,0,0,0,Yx,0,C,[Bi],0,3,0,0,["p",AVm(AIr)],VP,0,C,[Bd],0,3,0,0,["l",AVn(ARm)],VQ,0,C,[Bd],0,3,0,0,["l",AVn(AGg)],JC,0,C,[],0,3,0,0,0,D3,0,Bq,[],0,3,0,0,0]);
$rt_metadata([ACF,0,EI,[],0,3,0,0,0,Ud,0,C,[Bd],0,3,0,0,0,NZ,0,C,[Bd],0,3,0,0,["l",AVn(AF0)],NX,0,C,[Bd],0,3,0,0,["l",AVn(AH3)],Kw,0,L_,[],1,3,0,0,0,TY,0,Kw,[],0,3,0,0,0,P_,0,C,[Bd],0,3,0,0,["l",AVn(AG8)],MX,0,C,[EP],0,3,0,0,["dp",AVm(AHR)],MY,0,C,[EP],0,3,0,0,["dp",AVm(AOn)],Ti,0,C,[EP],0,3,0,0,["dp",AVm(AP$)],VG,0,C,[Bi],0,3,0,0,["p",AVm(ANg)],QU,0,C,[BP],0,3,0,0,["bb",AVn(AFe)],U0,0,C,[BP],0,3,0,0,["bb",AVn(ARX)],On,0,C,[Bd],0,3,0,0,0,AAy,0,C,[B4],0,3,0,0,0,ZW,0,C,[B4],0,3,0,0,0,SD,0,C,[Bd],0,3,0,0,["l",
AVn(AGf)],SC,0,C,[Bd],0,3,0,0,["l",AVn(AGZ)],Qr,0,C,[Bd],0,3,0,0,["l",AVn(AOR)],Tr,0,C,[Bi],0,3,0,0,["p",AVm(AKj)],IW,0,Bq,[],0,3,0,0,0,N6,0,C,[Bd],0,3,0,0,["l",AVn(ANX)],PI,0,DY,[CK],0,3,0,0,0,IF,0,C,[],4,3,0,0,0,MZ,0,C,[BP],0,3,0,0,["bb",AVn(ASL)],Uj,0,C,[],0,3,0,0,0,NB,0,C,[Gt],0,3,0,0,["nY",AVp(ARE)],Gl,0,Bq,[],0,3,0,0,0,NP,0,C,[],0,3,0,0,0,ADV,0,C,[],0,3,0,0,0,Tj,0,C,[],0,0,0,0,0,Zw,0,C,[],3,3,0,0,0,XL,0,C,[BP],0,3,0,0,["bb",AVn(APQ)],XK,0,C,[BP],0,3,0,0,["bb",AVn(AH9)],W_,0,C,[BP],0,3,0,0,["bb",AVn(AJF)],W$,
0,C,[BP],0,3,0,0,["bb",AVn(AKD)],YX,0,C,[],1,3,0,0,0,Xi,0,C,[],3,3,0,0,0,XF,0,C,[Cm],0,3,0,0,["ce",AVn(AJw)],AAz,0,C,[],0,3,0,0,0,AEf,0,C,[],0,3,0,0,0,UM,0,C,[Bi],0,3,0,0,["p",AVm(AKc)],UO,0,C,[Bi],0,3,0,0,["p",AVm(APf)],ACP,0,C,[],0,3,0,0,0,E1,0,C,[],0,3,0,0,0,O6,0,C,[Hx],3,3,0,0,0,Gh,0,EQ,[O6],1,3,0,0,0,Kk,0,Gh,[],1,0,0,0,0,VV,0,Kk,[],0,0,0,0,0,LC,0,ED,[],1,0,0,0,0]);
$rt_metadata([VT,0,LC,[],0,0,0,0,0,L5,0,F7,[Lv],1,0,0,0,0,VU,0,L5,[],0,0,0,0,0,VR,0,C,[FF],0,0,0,0,0,Pw,0,C,[FF],3,3,0,0,0,VS,0,C,[Pw],0,0,0,0,0,Yr,0,C,[Hg],0,3,0,0,0,Jd,0,Gl,[],0,3,0,0,0,H5,0,Bq,[],0,3,0,0,0,L0,0,Bq,[],0,3,0,0,0,AA0,0,C,[Bd],0,3,0,0,0,SG,0,C,[Bi],0,3,0,0,["p",AVm(AR2)],PS,0,C,[Bd],0,3,0,0,["l",AVn(AL_)],SQ,0,C,[Bi],0,3,0,0,["p",AVm(AGn)],YH,0,C,[],0,3,0,0,0,G9,0,C,[],0,3,0,0,0,ACZ,0,Gh,[],0,0,0,0,0,Pl,0,EQ,[],0,0,0,0,0,QD,0,C,[Mn],3,3,0,0,0,NI,0,C,[QD],3,3,0,0,0,L3,0,C,[NI],1,3,0,0,0,AAE,0,
L3,[],0,3,0,0,0,RR,0,C,[Bi],0,3,0,0,["p",AVm(AG1)],RQ,0,C,[Bi],0,3,0,0,["p",AVm(AFm)],RP,0,C,[Bi],0,3,0,0,["p",AVm(ALE)],RO,0,C,[Bi],0,3,0,0,["p",AVm(AQz)],PL,0,C,[Bi],0,3,0,0,["p",AVm(APT)],PN,0,C,[Bi],0,3,0,0,["p",AVm(AKJ)],PO,0,C,[Bi],0,3,0,0,["p",AVm(AHs)],XM,0,C,[],3,3,0,0,0,Ww,0,C,[Bi],0,3,0,0,["p",AVm(AGk)],Tc,0,C,[G3],0,3,0,0,["mn",AVo(AGe)],QM,0,C,[Bd],0,3,0,0,["l",AVn(AJ$)],XV,0,C,[Bd],0,3,0,0,["l",AVn(ALD)],VE,0,C,[LJ],0,3,0,0,["q$",AVn(JZ)],W1,0,BB,[],0,3,0,0,0,S$,0,C,[Bi],0,3,0,0,["p",AVm(ALd)],S_,
0,C,[Bi],0,3,0,0,["p",AVm(AMw)],S8,0,C,[Bi],0,3,0,0,["p",AVm(ANU)],Oo,0,C,[Bi],0,3,0,0,["p",AVm(AJ8)],Om,0,C,[Bi],0,3,0,0,["p",AVm(AQK)],Vy,0,C,[EP],0,3,0,0,["dp",AVm(AHY)],V9,0,C,[Bi],0,3,0,0,["p",AVm(AOw)],Wb,0,C,[Bi],0,3,0,0,["p",AVm(ALl)],Wa,0,C,[Bi],0,3,0,0,["p",AVm(AGc)],V$,0,C,[Bi],0,3,0,0,["p",AVm(AH6)],Wh,0,C,[G3],0,3,0,0,["mn",AVo(ARq)],P$,0,C,[BP],0,3,0,0,["bb",AVn(AIk)],I6,0,C,[Bw],3,3,0,0,0,MU,0,C,[I6],0,3,0,0,["q9",AVm(AKK)]]);
$rt_metadata([MD,0,C,[I6],0,3,0,0,["q9",AVm(AE9)],PG,0,C,[Gt],0,3,0,0,0,XJ,0,C,[BP],0,3,0,0,["bb",AVn(AJZ)],G0,0,C,[],0,0,0,0,0,UX,0,G0,[FF],0,0,0,0,0,Rl,0,G0,[FF],0,0,0,0,0,Rj,0,C,[Di],4,3,0,0,0,Tb,0,C,[Bd],0,3,0,0,["l",AVn(AGr)],Gw,0,Ck,[],12,0,0,Vb,0,Tm,0,C,[Bd],0,3,0,0,["l",AVn(ALp)],BF,0,C,[],1,0,0,0,["cm",AVp(HK),"cp",AVq(H0),"hF",AVm(AGQ),"P",AVn(AQX),"bU",AVn(AQU),"fq",AVm(ARR),"eg",AVm(Jg)],UQ,0,C,[],32,0,0,ATd,0,Pm,0,C,[Bd],0,3,0,0,["l",AVn(AHO)],Wl,0,C,[Bd],0,3,0,0,["l",AVn(AJt)],Yy,0,C,[Bi],0,3,
0,0,["p",AVm(AHz)],CP,0,BF,[],0,0,0,Mo,["c",AVp(AGj),"I",AVn(AGE)],GN,0,C,[],0,0,0,0,0,I1,0,BH,[],0,3,0,0,0,Xs,0,C,[BP],0,3,0,0,["bb",AVn(AOa)],ACc,0,C,[Bw],3,3,0,0,0,UB,0,C,[BP],0,3,0,0,["bb",AVn(ANL)],R5,0,CP,[],0,0,0,0,["c",AVp(AFT),"I",AVn(APr)],X4,0,CP,[],0,0,0,0,["c",AVp(AHC)],PT,0,CP,[],0,0,0,0,["c",AVp(AGN)],Th,0,CP,[],0,0,0,0,["c",AVp(AFY),"I",AVn(ANW)],Fz,0,CP,[],0,0,0,0,["c",AVp(ARc)],BW,0,BF,[],1,0,0,0,["c",AVp(ASg),"b0",AVm(AQo),"I",AVn(AKS)],ADQ,0,BW,[],0,0,0,0,["bx",AVo(APS),"cm",AVp(AI0),"cp",
AVq(AHr),"I",AVn(AFW)],BS,0,BF,[],0,0,0,0,["c",AVp(AJC),"P",AVn(ANO),"bU",AVn(ALF),"I",AVn(AOA),"eg",AVm(AHn)],Ja,0,BS,[],0,0,0,0,["c",AVp(ANx),"I",AVn(AO1)],DT,0,Ja,[],0,0,0,0,["c",AVp(AH7),"P",AVn(AOH)],MS,0,DT,[],0,0,0,0,["c",AVp(ANH),"I",AVn(AQ2)],Wx,0,DT,[],0,0,0,0,["c",AVp(AGz),"I",AVn(AQs)],Rm,0,DT,[],0,0,0,0,["c",AVp(AHh),"I",AVn(ASH)],T1,0,DT,[],0,0,0,0,["c",AVp(AFn),"I",AVn(APe)],Gz,0,BS,[],0,0,0,0,["c",AVp(AFN),"cm",AVp(ALZ),"cp",AVq(APy),"bU",AVn(ALA),"fq",AVm(ANS),"eg",AVm(ARU)],GP,0,C,[],1,0,0,
0,0,X,0,GP,[],1,0,0,OM,["de",AVm(AGB),"eQ",AVm(AF8),"i_",AVm(AQi),"gU",AVm(ARQ)],ZN,0,X,[],0,0,0,0,["k",AVn(C0),"de",AVm(CV),"eQ",AVm(AIT),"i_",AVm(AQI),"cB",AVm(AMU),"gU",AVm(AI5)],Jo,0,Bq,[],0,3,0,0,0,D5,0,BF,[],1,0,0,0,["bU",AVn(APB),"I",AVn(AQ9),"eg",AVm(AMo)],C4,0,D5,[],0,0,0,0,["c",AVp(AFp)],E8,0,C4,[],0,0,0,0,["c",AVp(AGm)],CR,0,D5,[],0,0,0,0,["c",AVp(AFM)],EA,0,C4,[],0,0,0,0,["c",AVp(AL5),"P",AVn(ASK)],WM,0,C4,[],0,0,0,0,["c",AVp(AR$),"cm",AVp(AMQ)],Bb,0,C,[],1,0,0,0,0,De,0,BH,[],0,3,0,0,0,M_,0,GP,[Ep],
0,0,0,0,["cB",AVm(AM1)],Of,0,BF,[],0,0,0,0,["c",AVp(ALh),"I",AVn(ANN)]]);
$rt_metadata([Xn,0,C,[Ep,Di],0,3,0,0,0,M1,0,BS,[],0,0,0,0,0,Qo,0,BS,[],0,0,0,0,["c",AVp(AGh),"P",AVn(ANt),"I",AVn(AGS),"bU",AVn(AGA)],DD,0,BS,[],0,0,0,0,["c",AVp(AIJ),"k",AVn(AJh),"bU",AVn(AGb),"P",AVn(AQc),"I",AVn(AIX)],Jl,0,DD,[],0,0,0,0,["k",AVn(AKT)],ZC,0,BW,[],0,0,0,0,["bx",AVo(ALi)],Eh,0,BW,[],0,0,0,0,["bx",AVo(Mz),"bU",AVn(ANQ)],OQ,0,BS,[],0,0,0,0,["P",AVn(AL4),"c",AVp(AFd),"bU",AVn(AGJ),"I",AVn(AQN)],En,0,BW,[],0,0,0,0,["b0",AVm(AK4),"bx",AVo(AJO),"cm",AVp(AIE),"cp",AVq(AK9),"bU",AVn(AQE)],AEk,0,BW,
[],0,0,0,0,["bx",AVo(AE$)],YM,0,BW,[],0,0,0,0,["bx",AVo(AFE)],Ff,0,BS,[],0,0,0,0,["P",AVn(ART),"c",AVp(ANw),"bU",AVn(ALj),"I",AVn(AOK)],XI,0,Ff,[],0,0,0,0,0,Uc,0,Ff,[],0,0,0,0,0,Yv,0,CR,[],0,0,0,0,["c",AVp(AHH)],PK,0,CR,[],0,0,0,0,["c",AVp(AMD)],FR,0,CR,[],0,0,0,0,["c",AVp(AP8),"P",AVn(ARh)],Po,0,FR,[],0,0,0,0,["c",AVp(AK7),"P",AVn(AM2)],Fd,0,CR,[],0,0,0,0,["c",AVp(ASB)],Nj,0,Fd,[],0,0,0,0,["c",AVp(AKl)],RK,0,CR,[],0,0,0,0,["c",AVp(ARZ)],Qz,0,FR,[],0,0,0,0,["c",AVp(AGV)],Ve,0,Fd,[],0,0,0,0,["c",AVp(AF3)],RM,
0,D5,[],0,0,0,0,["c",AVp(ASm),"cm",AVp(AQk)],Op,0,D5,[],0,0,0,0,["c",AVp(ANT),"cm",AVp(AFh)],EN,0,C,[],1,0,0,0,0,Yw,0,C4,[],0,0,0,0,["c",AVp(AF5)],WI,0,EA,[],0,0,0,0,["c",AVp(AMC)],Pb,0,E8,[],0,0,0,0,["c",AVp(APG)],Qs,0,C4,[],0,0,0,0,["c",AVp(ANK)],Ur,0,EA,[],0,0,0,0,["c",AVp(AGa)],Rn,0,E8,[],0,0,0,0,["c",AVp(APW)],Kv,0,BF,[],4,0,0,0,["c",AVp(ALC),"I",AVn(AKC)],AAl,0,BF,[],0,0,0,0,["c",AVp(AGy),"I",AVn(AGH)],Ok,0,BF,[],0,0,0,0,["c",AVp(AKX),"I",AVn(ASw)],Xq,0,BF,[],4,0,0,0,["c",AVp(AOu),"I",AVn(AHw)],W8,0,BF,
[],0,0,0,0,["c",AVp(ANp),"I",AVn(AE7)],Nw,0,BF,[],0,0,0,0,["c",AVp(AHm),"I",AVn(AJv)],AD_,0,BS,[],0,0,0,0,["c",AVp(AR5),"P",AVn(AGL),"hF",AVm(AM8),"I",AVn(AGK)],ZK,0,BS,[],4,0,0,0,["c",AVp(ANf),"P",AVn(APm),"hF",AVm(AE4),"I",AVn(ASd)],AD2,0,BF,[],4,0,0,0,["c",AVp(ALo),"I",AVn(AJo)],ACa,0,BF,[],0,0,0,0,["c",AVp(ANn),"I",AVn(AJe)],YJ,0,BF,[],0,0,0,0,["c",AVp(AKq),"I",AVn(AHB)],Ha,0,BS,[],0,0,0,0,["c",AVp(AF7),"P",AVn(AOE),"I",AVn(AO2)],AD6,0,Ha,[],0,0,0,0,["c",AVp(AHG),"cm",AVp(AQZ),"cp",AVq(AFU),"bU",AVn(AMu)],AA_,
0,Ha,[],0,0,0,0,["c",AVp(ALT)],Oe,0,Gn,[H6],0,3,0,0,["lA",AVq(AI6),"kK",AVp(AGC),"hL",AVn(AG3),"ma",AVo(AQn)],RT,0,BW,[],0,0,0,0,["bx",AVo(AH4),"cm",AVp(AGt),"cp",AVq(AJs),"bU",AVn(AJ0)],YI,0,BW,[],0,0,0,0,["bx",AVo(AL1)],Np,0,BW,[],0,0,0,0,["bx",AVo(API)]]);
$rt_metadata([G_,0,C,[],4,0,0,APc,0,MJ,0,BW,[],0,0,0,0,["bx",AVo(APP)],K6,0,BS,[],0,0,0,0,["P",AVn(ANG),"c",AVp(AHx),"cm",AVp(AJY),"cp",AVq(AIa),"bU",AVn(AFS),"I",AVn(AQt)],Lp,0,BS,[],0,0,0,0,["P",AVn(AG2),"c",AVp(AFo),"cm",AVp(AN5),"cp",AVq(APH),"bU",AVn(AH5),"I",AVn(AOg)],DX,0,BW,[],0,0,0,0,["bx",AVo(AO3),"cm",AVp(AMV),"cp",AVq(AG0),"bU",AVn(AOP)],VJ,0,EN,[],0,0,0,0,["hv",AVn(AHb),"sC",AVo(AOW)],VK,0,EN,[],0,0,0,0,["hv",AVn(AP0),"sC",AVo(ARN)],AC0,0,C,[],0,0,0,0,0,YZ,0,C,[],0,0,0,0,0,K4,0,Bb,[],0,0,0,0,["F",
AVm(ABh)],J7,0,Bb,[],0,0,0,0,["F",AVm(AB4)],ACT,0,Bb,[],0,0,0,0,["F",AVm(APq)],ADt,0,Bb,[],0,0,0,0,["F",AVm(AQv)],ADz,0,Bb,[],0,0,0,0,["F",AVm(AIK)],KZ,0,Bb,[],0,0,0,0,["F",AVm(ZP)],LE,0,KZ,[],0,0,0,0,["F",AVm(AAL)],AER,0,Bb,[],0,0,0,0,["F",AVm(AJX)],My,0,LE,[],0,0,0,0,["F",AVm(YE)],ABu,0,My,[],0,0,0,0,["F",AVm(AMp)],ABW,0,Bb,[],0,0,0,0,["F",AVm(AHX)],AAe,0,Bb,[],0,0,0,0,["F",AVm(AMl)],ZX,0,Bb,[],0,0,0,0,["F",AVm(ARP)],ADD,0,Bb,[],0,0,0,0,["F",AVm(AM3)],AE3,0,Bb,[],0,0,0,0,["F",AVm(AFf)],AC1,0,Bb,[],0,0,0,0,
["F",AVm(AKv)],ACO,0,Bb,[],0,0,0,0,["F",AVm(AO7)],ADU,0,Bb,[],0,0,0,0,["F",AVm(AHT)],Zg,0,Bb,[],0,0,0,0,["F",AVm(AIh)],YW,0,Bb,[],0,0,0,0,["F",AVm(ARJ)],AC7,0,Bb,[],0,0,0,0,["F",AVm(AE_)],ADk,0,Bb,[],0,0,0,0,["F",AVm(ALs)],AAD,0,Bb,[],0,0,0,0,["F",AVm(AIt)],AB1,0,Bb,[],0,0,0,0,["F",AVm(AJx)],AEw,0,Bb,[],0,0,0,0,["F",AVm(ALu)],ADi,0,Bb,[],0,0,0,0,["F",AVm(AQQ)],AA8,0,Bb,[],0,0,0,0,["F",AVm(AOq)],AAB,0,Bb,[],0,0,0,0,["F",AVm(AMY)],AEY,0,Bb,[],0,0,0,0,["F",AVm(APi)],Jw,0,Bb,[],0,0,0,0,["F",AVm(ABY)],ADW,0,Jw,[],
0,0,0,0,["F",AVm(AMK)],ABA,0,K4,[],0,0,0,0,["F",AVm(AGs)],AAv,0,J7,[],0,0,0,0,["F",AVm(AJK)],Z3,0,Bb,[],0,0,0,0,["F",AVm(ALH)],AAp,0,Bb,[],0,0,0,0,["F",AVm(ARt)],ABp,0,Bb,[],0,0,0,0,["F",AVm(AI$)],ABv,0,Bb,[],0,0,0,0,["F",AVm(AFa)],Z$,0,C,[],4,0,0,0,0,ZA,0,C,[],4,3,0,0,0,Nx,0,C,[],0,3,0,0,0,ADb,0,C,[],0,3,0,0,0]);
$rt_metadata([AA5,0,C,[],4,3,0,0,0,ZM,0,C,[I3],0,3,0,0,0,Vw,0,C,[Bd],0,3,0,0,["l",AVn(AQw)],Ru,0,C,[Bd],0,3,0,0,["l",AVn(AI7)],Y8,0,C,[],0,3,0,0,0,Rt,0,C,[Bd],0,3,0,0,["l",AVn(AO8)],Us,0,C,[Bd],0,3,0,0,0,PV,0,C,[Bd],0,3,0,0,0,WK,0,X,[],0,0,0,0,["k",AVn(AIS)],WJ,0,X,[],0,0,0,0,["k",AVn(AFI)],Ov,0,X,[],0,0,0,0,["k",AVn(ALy),"cB",AVm(AJz)],OB,0,X,[],0,0,0,0,["k",AVn(AO6)],Oz,0,X,[],0,0,0,0,["k",AVn(APO)],OA,0,X,[],0,0,0,0,["k",AVn(AL0)],OE,0,X,[],0,0,0,0,["k",AVn(AIm)],OF,0,X,[],0,0,0,0,["k",AVn(AE5)],OC,0,X,[],
0,0,0,0,["k",AVn(AJE)],OD,0,X,[],0,0,0,0,["k",AVn(AL3)],OG,0,X,[],0,0,0,0,["k",AVn(AQ3)],OH,0,X,[],0,0,0,0,["k",AVn(AHN)],Ou,0,X,[],0,0,0,0,["k",AVn(ASN)],Pi,0,X,[],0,0,0,0,["k",AVn(AJJ)],Or,0,X,[],0,0,0,0,["k",AVn(AHL)],Os,0,X,[],0,0,0,0,["k",AVn(AJm)],Oy,0,X,[],0,0,0,0,["k",AVn(AK0)],Oq,0,X,[],0,0,0,0,["k",AVn(AQC)],Ow,0,X,[],0,0,0,0,["k",AVn(AGF)],Ox,0,X,[],0,0,0,0,["k",AVn(AOe)],L2,0,C,[],3,3,0,0,0,SP,0,C,[L2],4,3,0,0,0,ADN,0,C,[G3],0,3,0,0,0,Wo,0,C,[],0,3,0,0,0,C2,0,C,[],3,3,0,AB3,0,Cg,0,Ck,[],12,3,0,AAn,
0,Dv,0,C,[],3,3,0,AO9,0,Oj,0,C,[],0,3,0,0,0,Og,0,C,[Bd],0,3,0,0,["l",AVn(APh)],Nd,0,Gz,[],0,0,0,0,["cm",AVp(AJb),"cp",AVq(ASz),"fq",AVm(AHv)],Qh,0,Bq,[],0,3,0,0,0,Xy,0,Bq,[],0,3,0,0,0,VD,0,FP,[],0,3,0,0,0,P8,0,FP,[],0,3,0,0,0,Ym,0,Bq,[],0,3,0,0,0,Vs,0,C,[],0,3,0,0,0,Sk,0,C,[Bi],0,3,0,0,0,SZ,0,C,[Bd],0,3,0,0,0,SY,0,C,[Bd],0,3,0,0,0,AC3,0,C,[],3,3,0,0,0,AAr,0,C,[],0,3,0,0,0,Tp,0,C,[HV],0,3,0,0,0]);
$rt_metadata([VA,0,C,[L2],0,0,0,0,0,V3,0,C,[Bi],0,3,0,0,["p",AVm(ARd)],Tn,0,X,[],0,0,0,0,["k",AVn(ARa)],MW,0,X,[],0,0,0,0,["k",AVn(AGo)],Sd,0,X,[],0,0,0,0,["k",AVn(AF_)],Sc,0,X,[],0,0,0,0,["k",AVn(AI9)],Xf,0,X,[],0,0,0,0,["k",AVn(AKL)],O5,0,X,[],0,0,0,0,["k",AVn(ARe)],N_,0,X,[],0,0,0,0,["k",AVn(ANA)],QP,0,X,[],0,0,0,0,["k",AVn(APb)],MR,0,X,[],0,0,0,0,["k",AVn(ASb)],MV,0,X,[],0,0,0,0,["k",AVn(AH$)],NV,0,X,[],0,0,0,0,["k",AVn(ARr)],Pt,0,X,[],0,0,0,0,["k",AVn(AMi)],PC,0,X,[],0,0,0,0,["k",AVn(AOC)],T$,0,X,[],0,
0,0,0,["k",AVn(AQ4)],SR,0,X,[],0,0,0,0,["k",AVn(ARW)],M9,0,X,[],0,0,0,0,["k",AVn(AHV)],Mi,0,X,[],0,0,0,0,["k",AVn(AND)],R7,0,Mi,[],0,0,0,0,["k",AVn(AQd)],P1,0,C,[I6],0,3,0,0,["q9",AVm(ALP)],V_,0,C,[BP],0,3,0,0,["bb",AVn(AOt)],Wc,0,C,[BP],0,3,0,0,["bb",AVn(AM9)],TW,0,C,[BP],0,3,0,0,["bb",AVn(AJR)],TZ,0,C,[BP],0,3,0,0,["bb",AVn(AFA)],UW,0,C,[BP],0,3,0,0,["bb",AVn(ALJ)],Te,0,C,[Bd],0,3,0,0,["l",AVn(AOd)],Tf,0,C,[Bd],0,3,0,0,["l",AVn(AML)],Td,0,C,[Bd],0,3,0,0,["l",AVn(ALn)],Zp,0,C,[],0,0,0,0,0]);
function $rt_array(cls,data){this.LW=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Regular.ttf","normal","JetBrainsMono-Italic.ttf","italic","JetBrainsMono-Bold.ttf","JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser",
"keydown","keyup","mousemove","mousedown","mouseup","wheel","click","contextmenu","focus","blur","drop","paste","copy","cut","null","Patter is null","","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","object","function","string","number","Illegal argument javaObject instanceof ","#wasm","#diffDemo","ClassL.java","ClassR.java",
"[Graphics] ","WebGL 2","[Graphics] maxTextureSize: ","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = vTex;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}",
"#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nvoid main() {\n  outColor = uColor;\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  outColor = vec4(t.xyz, 1.0);\n}","WebGraphics::ctor finish"," ",".","FontDesk::FontDesk iSize != size: ","oblique","onPaste: item.type = ",", item.kind = ",
"x = ",", y = ","pixel shader error: ","vertex shader error: ","----","compileProgram exit: ","vs <-> ps link error: ","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nin vec2 textureUV;\nvoid main() {\n  outColor = vec4(textureUV.x, 0, textureUV.y, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\n\nfloat contrastN(float value, float factor) {\n  float c = contrast(value);\n  return mix(value, textCon"
+"trast(value), factor);\n}\n\nvoid main() {\n  vec4 t = texture(sDiffuse, textureUV);\n  float v = contrastN(t.a, uContrast.x);\n  outColor = vec4(v, v, v, 1.0);\n}","#version 300 es\nprecision highp float;\nvec2 pixelPos(vec2 pos, vec2 resolution) {  return vec2((pos.x + 1.0) * 0.5 * resolution.x, (1.0 - pos.y) * 0.5 * resolution.y); }\nuniform vec4 uSizePos;\nuniform vec2 uResolution;\nuniform vec4 uTexTransform;\nin vec2 vPos, vTex;\nout vec2 outScreenPos;\nout vec2 textureUV;\nvoid main() {\n  vec2 pos = vec2(vPos.x * uSizePos.x + uSizePos.z, vPos.y * uSizePos.y + uSizePos.w);\n  outScreenPos = pixelPos(pos, uResolution.xy);\n  textureUV = uTexTransform.xy + vTex * uTexTransform"
+".zw;\n  gl_Position = vec4(pos, 0.0, 1.0);\n}","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\n          layout(location = 0) out vec4 outColor;\n          uniform vec4 uColor;\n          uniform vec4 uBgColor;\n          uniform vec2 uContrast;\n          uniform sampler2D sDiffuse;\n          in vec2 textureUV;\n          void main"
+"() {\n            float t = texture(sDiffuse, textureUV).a;\n//            if (t == 0.0) { discard; }\n            float text = mix(t, textContrast(t), uContrast.x);\n\n            outColor = mix(uBgColor, uColor, text);\n          }","#version 300 es\nprecision highp float;\nfloat contrast(float x) {\n  return x * x * (3.0 - x * 2.0);\n}\nfloat contrast2(float x) {\n  return contrast(contrast(x));\n}\nfloat textContrast(float x) {\n  return x + x * (x - x * x);\n}\nfloat textContrastBold(float x) {\n  return sqrt(x);\n}\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColorB;\nuniform vec4 uColorF;\nuniform vec2 uContrast;\nuniform sampler2D sDiffuse;\nin vec2 textureUV;\nvoid main() {\n  vec3 t = texture(sDiffuse, textureUV).rgb;\n  float gray = (t.r "
+"+ t.b + t.g) / 3.0;\n  float value = mix(gray, contrast(gray), uContrast.x);\n  outColor = vec4(mix(uColorB.rgb, uColorF.rgb, value), 1.0);\n}","#version 300 es\nprecision highp float;\nlayout(location = 0) out vec4 outColor;\nuniform vec4 uColor;\nuniform vec4 uPoints1, uPoints2;\nin vec2 outScreenPos;\n\nfloat signedDistanceToLine(vec2 pt, vec2 p1, vec2 p2) {\n  return ((p2.x - p1.x) * (p1.y - pt.y)\n        - (p1.x - pt.x) * (p2.y - p1.y)) / distance(p1, p2);\n}\n\nvoid main() {\n  vec2 pt = outScreenPos;\n  vec2 p11 = uPoints1.xy, p12 = uPoints1.zw;\n  vec2 p21 = uPoints2.xy, p22 = uPoints2.zw;\n  float sd1 = signedDistanceToLine(pt, p11, p12);\n  float sd2 = si"
+"gnedDistanceToLine(pt, p22, p21);\n  float t1 = clamp(sd1 / 1. + .5, 0.0, 1.0);\n  float t2 = clamp(sd2 / 1. + .5, 0.0, 1.0);\n  float alpha = 1.0 - (t1 + t2 - t1 * t2);\n  outColor = vec4(uColor.xyz, alpha);\n}","POS2_UV2","Action must be non-null","Replacement preconditions do not hold","Index out of bounds","POS2","vPos","TEX2","vTex","�","UTF-8","Should never been thrown","BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ",
"Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#484A4A","#294436","#385570","#283541","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","selectScene ","CodiconDemo","DemoEdit0","RenderTexture","ScissorDemo","LineShaderDemo1",
"LineShaderDemo2","ToolbarDemo","SelectFileTest","ManyTexturesLineNumbersScene","WindowDemo","Diff","many","test","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","Consolas","Segoe UI","#e3c8ab","#39322b","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","example.java","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    System.out.println(helloWorld + n);\n    sum(a + a);\n  }\n\n  @Deprecated\n  private static void sum() {\n  }\n\n  @Deprecated\n  private static int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField"
+"(int field) {\n    return field + this.field;\n  }\n\n  public interface A {\n    int sumField(int field);\n\n    default void foo() {\n      sumField(10);\n    }\n  }\n}\n","java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Settings >","parser >","open ...","Development >","text","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ",
"\n","\r","Full file parsed in ","ms","change model language: from = "," to = ","opening file ",".java","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaParser.parseViewport","js","cpp","asyncIterativeParsing","CppParser.parse","JavaScriptParser.parseBytes","JavaParser.parse","setDiffModel","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".js","applyContrast = ",
"renderBlankLines = ","drawTails = ","Chrome","Firefox","Direct2D","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","File is too large: "," name: ",", size = ","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#303C47","Courier New","jsCanvas.setFont(11, CourierNew);","textCanvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","main.java","private static void foo (...);","FindUsagesView1","Window 1: ",
"scrollPos: ","hello string","withString","withChars","withBytes","withInts","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","#616161","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","toolbar size is unknown","onLeave item ",", item ","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ",
"methodWithIntsResult: ",", ints = ","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","#6AAB73","comma","error","#F75464","unused","#6F737A","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#BBBBBB","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41",
"#4B6EAF","#787878","onEnter item ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","nwse-resize","nesw-resize"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Int","Iter","VP","Rep","No definition or usages","Expected "," ints to read, but "," read","readClipboardText error: ",
"Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W",
"s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic",
"Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing",
"BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","Viewport parsed in "," ints to write, but "," written","#EBECF0","#F8F9FB","#edebfc","#FCE8F4","#C44193","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Verdana","asyncFullParseFile",
"asyncParseFirstLines","asyncParseFile","file = ","file.content.length = ","First lines parsed in ","File structure parsed in "]);
Bx.prototype.toString=function(){return $rt_ustr(this);};
Bx.prototype.valueOf=Bx.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AGX(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CF=Long_add;var Kx=Long_sub;var B5=Long_mul;var AC5=Long_div;var AFB=Long_rem;var ATu=Long_or;var CX=Long_and;var AZb=Long_xor;var Gu=Long_shl;var ATL=Long_shr;var FI=Long_shru;var AZc=Long_compare;var HN=Long_eq;var AZd=Long_ne;var ATp=Long_lt;var AIy=Long_le;var AZe=Long_gt;var AZf=Long_ge;var AZg=Long_not;var AT5=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AT_);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Ug.prototype;c.f=c.bb;c=Ue.prototype;c.f=c.bb;c=Nm.prototype;c.f=c.bb;c=ABx.prototype;c.get=c.yn;Object.defineProperty(c,"length",{get:c.GP});c=NW.prototype;c.f=c.bb;c=Y6.prototype;c.removeEventListener=c.DZ;c.dispatchEvent=c.BW;c.get=c.yn;c.addEventListener=c.Ao;Object.defineProperty(c,"length",{get:c.B7});c=OY.prototype;c.accept=c.vc;c=OZ.prototype;c.accept=c.vc;c=V5.prototype;c.onAnimationFrame=c.D1;c=VZ.prototype;c.f=c.uZ;c=VW.prototype;c.handleEvent=c.ce;c=VX.prototype;c.f=c.bb;c=WR.prototype;c.handleEvent
=c.ce;c=WS.prototype;c.handleEvent=c.ce;c=WT.prototype;c.handleEvent=c.ce;c=WU.prototype;c.handleEvent=c.ce;c=WV.prototype;c.handleEvent=c.ce;c=WW.prototype;c.handleEvent=c.ce;c=WX.prototype;c.handleEvent=c.ce;c=WY.prototype;c.handleEvent=c.ce;c=WZ.prototype;c.handleEvent=c.ce;c=W0.prototype;c.handleEvent=c.ce;c=Yf.prototype;c.handleEvent=c.ce;c=Yg.prototype;c.handleEvent=c.ce;c=Yh.prototype;c.handleEvent=c.ce;c=Yi.prototype;c.handleEvent=c.ce;c=UL.prototype;c.handleEvent=c.ce;c=XW.prototype;c.f=c.bb;c=XX.prototype;c.f
=c.bb;c=Nv.prototype;c.f=c.bb;c=Nu.prototype;c.f=c.bb;c=Nt.prototype;c.f=c.bb;c=Ns.prototype;c.f=c.bb;c=NQ.prototype;c.accept=c.vc;c=XT.prototype;c.f=c.bb;c=XR.prototype;c.f=c.bb;c=XS.prototype;c.f=c.bb;c=Ph.prototype;c.f=c.uZ;c=Pf.prototype;c.f=c.uZ;c=QU.prototype;c.f=c.bb;c=U0.prototype;c.f=c.bb;c=MZ.prototype;c.f=c.bb;c=XL.prototype;c.f=c.bb;c=XK.prototype;c.f=c.bb;c=W_.prototype;c.f=c.bb;c=W$.prototype;c.f=c.bb;c=XF.prototype;c.handleEvent=c.ce;c=P$.prototype;c.f=c.bb;c=MU.prototype;c.onTimer=c.q9;c=MD.prototype;c.onTimer
=c.q9;c=XJ.prototype;c.f=c.bb;c=Xs.prototype;c.f=c.bb;c=UB.prototype;c.f=c.bb;c=P1.prototype;c.onTimer=c.q9;c=V_.prototype;c.f=c.bb;c=Wc.prototype;c.f=c.bb;c=TW.prototype;c.f=c.bb;c=TZ.prototype;c.f=c.bb;c=UW.prototype;c.f=c.bb;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);