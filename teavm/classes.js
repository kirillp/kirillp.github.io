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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.fq=f;}
function $rt_cls(cls){return AEH(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gd(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b_.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AR4(t);}
function $rt_throwableCause(t){return ASa(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(AYq());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return AYr(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(AYs());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BF=$rt_compare;var AYt=$rt_nullCheck;var F=$rt_cls;var R=$rt_createArray;var Je=$rt_isInstance;var AYu=$rt_nativeThread;var AYv=$rt_suspending;var AYw=$rt_resuming;var AYx=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var W=$rt_imul;var Er=$rt_wrapException;var AYy=$rt_checkBounds;var AYz=$rt_checkUpperBound;var AYA=$rt_checkLowerBound;var AYB=$rt_wrapFunction0;var AYC=$rt_wrapFunction1;var AYD=$rt_wrapFunction2;var AYE=$rt_wrapFunction3;var AYF=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ADq=$rt_createCharArrayFromData;var AW6=$rt_createByteArrayFromData;var AYm=$rt_createShortArrayFromData;var El=$rt_createIntArrayFromData;var AYG=$rt_createBooleanArrayFromData;var AYH=$rt_createFloatArrayFromData;var AYI=$rt_createDoubleArrayFromData;var ABI=$rt_createLongArrayFromData;var AYp=$rt_createBooleanArray;var D7=$rt_createByteArray;var AYJ=$rt_createShortArray;var BU=$rt_createCharArray;var BM=$rt_createIntArray;var AYK=$rt_createLongArray;var AHK=$rt_createFloatArray;var AYL
=$rt_createDoubleArray;var BF=$rt_compare;var AYM=$rt_castToClass;var AYN=$rt_castToInterface;var AYO=Long_toNumber;var Bp=Long_fromInt;var AYP=Long_fromNumber;var D=Long_create;var E9=Long_ZERO;var AYQ=Long_hi;var GB=Long_lo;
function B(){this.$id$=0;}
function AYR(){var a=new B();AFV(a);return a;}
function AFV(a){}
function BG(a){return AEH(a.constructor);}
function AOP(a,b){return a!==b?0:1;}
function AJC(a){var b,c,d,e,f,g,h,i,j;b=JI(a);if(!b)c=C(0);else{d=(((32-OZ(b)|0)+4|0)-1|0)/4|0;e=BU(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HL((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gd(e);}j=new M;O(j);H(H(j,C(1)),c);return N(j);}
function JI(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AN5(a){var b,c,d;if(!Je(a,Ee)&&a.constructor.$meta.item===null){b=new Xd;Y(b);K(b);}b=AHT(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tb(){var a=this;B.call(a);a.w5=0;a.sG=null;}
function AXl(b){var c,d,e,f,g,h,i,j,k,l;AFT();AAU();AD2();AFc();AHk();ACz();AEb();AFW();AC4();AEd();AAR();AEX();AEZ();ADI();ACG();AC_();AGj();ABU();ADb();AA5();AEn();AE6();ABl();AG7();c=(AA$()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))QK(C(2),C(3));else{d=new Tb;BP(d);e=new Vd;e.ul=d;f=new Od;c=new $rt_globals.Worker("teavm/worker.js");g=new O3;g.qL=c;g.qM=e;g.qN=f;e=Bl(g,"f");c.onmessage=e;h=I(Mp,[Kv(C(4),C(5),400),Kv(C(6),C(7),400),
Kv(C(8),C(5),700),Kv(C(9),C(7),700)]);b=R(Mp,1);b.data[0]=AS_(C(10),Fp(C(11),C(12)),C(5),400);b=(Mk(h,b)).data;g=new $rt_globals.Array();i=b.length;j=0;while(j<i){c=b[j];e=c.tL;f=c.sx;k=new M;O(k);BL(H(H(k,C(13)),f),41);k=N(k);f=c.sr;l=c.qu;f=ALW($rt_ustr(f),l);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(k),f)).load();g.push(c);j=j+1|0;}e=$rt_globals.Promise.all(g);BP(d);c=new Ve;c.vL=d;g=new Vc;e.then(Bl(c,"f"),Bl(g,"f"));}}
function ADN(b){var c,d,e,f,g,h,i,j,k;c=new Ub;d=new Tl;c.rz=new $rt_globals.TextDecoder("utf-16");e=new Xc;e.qp=c;c.to=e;e=new W_;e.xl=c;c.nB=e;f=new Xa;f.ti=c;c.vV=new $rt_globals.ResizeObserver(Bl(f,"f"));e=new W9;e.pN=c;c.ot=e;c.ji=1;f=new QI;f.z6=null;f.kv=AYS;c.m9=f;c.r6=b;f=new W$;f.v_=c;e=Bl(f,"f");b.onmessage=e;e=ADH();b.postMessage(e);c.ol=(Eh()).getElementById("canvasDiv");b=AA$();g=0;b.tabIndex=g;f=b.style;f.setProperty("width","100%");f.setProperty("height","100%");f.setProperty("outline","none");c.d5
=b;c.ol.appendChild(b);f=c.d5;e=AQg(!!0,!!0,!!1,!!1);b=f.getContext("webgl2",e);if(b===null)QK(C(2),C(14));else{g=new Q$;e=c.d5;f=c.nB;g.d0=null;g.hS=e;g.cs=AXv(f);h=$rt_globals.window;i=R(Dw,14);j=i.data;k=new Yj;k.oV=g;j[0]=CX(g,e,C(15),k);f=new Yk;f.tT=g;j[1]=CX(g,e,C(16),f);f=new Yl;f.qd=g;j[2]=CX(g,e,C(17),f);f=new Ym;f.xe=g;j[3]=CX(g,e,C(18),f);f=new Yn;f.tb=g;j[4]=CX(g,e,C(19),f);f=new Yo;f.pl=g;j[5]=CX(g,e,C(20),f);k=new Yp;k.xw=g;j[6]=CX(g,e,C(21),k);k=new Yq;k.tk=g;j[7]=CX(g,e,C(22),k);k=new Yr;k.py
=g;j[8]=CX(g,e,C(23),k);k=new Ys;k.wj=g;j[9]=CX(g,e,C(24),k);k=new Z2;k.vB=g;j[10]=CX(g,e,C(25),k);k=new Z3;k.ue=g;j[11]=AER(g,h,C(26),k,1);k=new Z4;k.n6=g;j[12]=CX(g,h,C(27),k);k=new Z5;k.wH=g;j[13]=CX(g,h,C(28),k);g.zp=AUD(i);ACR(g,e);c.mI=g;c.gN=AWQ(b,c.nB);ASF(c.vV,c.d5);e=$rt_globals.window;g=c.ot;e.addEventListener("resize",Bl(g,"handleEvent"));c.fY=ADZ(d,ACI(c));UM(c);}AFt(c);}
var N9=G(0);
var No=G(0);
function Ye(){var a=this;B.call(a);a.lu=null;a.gw=null;}
function AEH(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ye;c.gw=b;d=c;b.classObject=d;}return c;}
function IE(a){if(a.lu===null)a.lu=$rt_str(a.gw.$meta.name);return a.lu;}
function Im(a){return a.gw.$meta.primitive?1:0;}
function IK(a){return AEH(a.gw.$meta.item);}
var AB0=G();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function LT(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ABC=G();
function AHT(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AEK(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AEK(d[e],c))return 1;e=e+1|0;}return 0;}
function GW(){var a=this;B.call(a);a.id=null;a.l6=null;a.j2=0;a.kA=0;}
function AYT(){var a=new GW();Y(a);return a;}
function AYU(a){var b=new GW();Bi(b,a);return b;}
function Y(a){a.j2=1;a.kA=1;}
function Bi(a,b){a.j2=1;a.kA=1;a.id=b;}
function ALx(a){return a;}
function AR4(a){return a.id;}
function ASa(a){var b;b=a.l6;if(b===a)b=null;return b;}
var Ed=G(GW);
var Bu=G(Ed);
function AYr(a){var b=new Bu();AUf(b,a);return b;}
function AUf(a,b){Bi(a,b);}
var ADL=G(Bu);
var CN=G(0);
var CG=G(0);
var Jo=G(0);
function BA(){var a=this;B.call(a);a.b_=null;a.iJ=0;}
var AYV=null;var AYW=null;var AYX=null;function FA(){FA=Bq(BA);ATM();}
function AMq(){var a=new BA();AAJ(a);return a;}
function Gd(a){var b=new BA();HW(b,a);return b;}
function EO(a,b,c){var d=new BA();M9(d,a,b,c);return d;}
function AAJ(a){FA();a.b_=AYV;}
function HW(a,b){FA();M9(a,b,0,b.data.length);}
function M9(a,b,c,d){var e;FA();e=BU(d);a.b_=e;DB(b,c,e,0,d);}
function M3(b){var c;FA();c=AMq();c.b_=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b_.data;if(b<c.length)return c[b];}d=new HJ;Y(d);K(d);}
function J(a){return a.b_.data.length;}
function Fw(a){return a.b_.data.length?0:1;}
function RA(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DB(a.b_,b,d,e,c);return;}}g=new BC;Y(g);K(g);}
function VP(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ld(a,b){if(a===b)return 1;return VP(a,b,0);}
function Eo(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function G8(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b_.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=II(b);h=Jh(b);while(true){f=a.b_.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Gl(a,b,c){var d,e,f,g,h;d=Bb(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b_.data[d]==e)break;d=d+(-1)|0;}return d;}f=II(b);g=Jh(b);while(true){if(d<1)return (-1);h=a.b_.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function ACq(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Ry(a,b,c){var d,e;d=Bb(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Cg(a,b,c){var d,e;d=BF(b,c);if(d>0){e=new BC;Y(e);K(e);}if(!d){FA();return AYW;}if(!b&&c==J(a))return a;return EO(a.b_,b,c-b|0);}
function Do(a,b){return Cg(a,b,J(a));}
function RM(a,b,c){return Cg(a,b,c);}
function Fp(a,b){var c,d,e,f,g,h;if(Fw(b))return a;if(Fw(a))return b;c=BU(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return M3(c);}
function WI(a,b,c){var d,e,f,g;d=new M;O(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BL(d,P(a,f));}f=f+1|0;}H(d,Do(a,f));return N(d);}
function Tn(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cg(a,b,c+1|0);}
function AJA(a){return a;}
function Fx(a){var b,c,d,e,f;b=a.b_.data;c=BU(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function C8(b){var c;FA();c=new M;O(c);return N(V(c,b));}
function Bn(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BA))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function IU(a){var b,c,d,e;a:{if(!a.iJ){b=a.b_.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.iJ=(31*a.iJ|0)+e|0;d=d+1|0;}}}return a.iJ;}
function MG(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new G3;Bi(b,C(29));K(b);}AYY=1;d=new SL;d.le=R(CT,10);d.gV=(-1);d.fc=(-1);d.bB=(-1);e=new G_;e.e$=1;e.bU=b;e.bi=BU(J(b)+2|0);DB(Fx(b),0,e.bi,0,J(b));f=e.bi.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.td=g;e.gD=0;Fh(e);Fh(e);d.h=e;d.dL=0;d.me=ZL(d,(-1),0,null);if(!Dn(d.h)){b=new Jj;h=d.h;J1(b,C(30),h.bU,h.dl);K(b);}if(d.o0)d.me.eH();b=BJ();h=new TX;h.je=(-1);h.lz=(-1);h.yk=d;h.vR=d.me;h.jz=a;h.je=0;g=J(a);h.lz=g;e=new WK;i=h.je;j=d.gV;k=d.fc+1|0;l=d.bB+
1|0;e.io=(-1);m=j+1|0;e.p0=m;e.d4=BM(m*2|0);f=BM(l);e.kn=f;H0(f,(-1));if(k>0)e.l7=BM(k);H0(e.d4,(-1));ZE(e,a,i,g);h.cD=e;e.fN=1;n=0;m=0;if(!J(a)){f=R(BA,1);f.data[0]=C(30);}else{while(true){l=J(h.jz);if(!AAZ(h))l=h.lz;e=h.cD;if(e.eB>=0&&ACX(e)==1){e=h.cD;e.eB=JF(e);if(JF(h.cD)==AFb(h.cD)){e=h.cD;e.eB=e.eB+1|0;}g=h.cD.eB;g=g<=l&&Nv(h,g)?1:0;}else g=Nv(h,h.je);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BH(b,RM(a,m,AGU(h)));m=ACD(h);n=g;}a:{BH(b,RM(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Br(b,
g)))break a;Ey(b,g);}}if(g<0)g=0;f=Ic(b,R(BA,g));}return f;}
function ALN(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bb(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function ATM(){AYV=BU(0);AYW=AMq();AYX=new Ux;}
var EX=G(GW);
var HM=G(EX);
var ADj=G(HM);
var D6=G();
function GC(){D6.call(this);this.bD=0;}
var AYZ=null;var AY0=null;function ATu(a){var b=new GC();ACl(b,a);return b;}
function ACl(a,b){a.bD=b;}
function L1(b){return (Ow(AYa(20),b,10)).cM();}
function Ka(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dj;Bi(b,C(31));K(b);}d=J(b);if(0==d){b=new Dj;Bi(b,C(32));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dj;Y(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=QE(P(b,f));if(i<0){j=new Dj;k=Cg(b,0,d);b=new M;O(b);H(H(b,C(33)),k);Bi(j,N(b));K(j);}if(i>=c){j=new Dj;l=Cg(b,0,d);b=new M;O(b);H(H(V(H(b,C(34)),c),C(35)),l);Bi(j,N(b));K(j);}g=W(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dj;k=Cg(b,0,d);b=new M;O(b);H(H(b,C(36)),k);Bi(j,N(b));K(j);}b=new Dj;j=new M;O(j);V(H(j,C(37)),c);Bi(b,N(j));K(b);}
function Dh(b){var c,d;if(b>=(-128)&&b<=127){a:{if(AY0===null){AY0=R(GC,256);c=0;while(true){d=AY0.data;if(c>=d.length)break a;d[c]=ATu(c-128|0);c=c+1|0;}}}return AY0.data[b+128|0];}return ATu(b);}
function AU3(a,b){if(a===b)return 1;return b instanceof GC&&b.bD==a.bD?1:0;}
function OZ(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function IX(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function ANY(a,b){b=b;return BF(a.bD,b.bD);}
function AFT(){AYZ=F($rt_intcls());}
function GG(){var a=this;B.call(a);a.B=null;a.I=0;}
function AY1(){var a=new GG();O(a);return a;}
function AYa(a){var b=new GG();Gj(b,a);return b;}
function O(a){Gj(a,16);}
function Gj(a,b){a.B=BU(b);}
function Ow(a,b,c){return ADz(a,a.I,b,c);}
function ADz(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Ci(a,b,b+1|0);else{Ci(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=HL(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=W(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Ci(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=HL($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AEx(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ci(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ci(a,b,b+8|0);d=b;}else{Ci(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AY2;AEo(c,f);d=f.lE;g=f.lm;h=f.pe;i=1;j=1;if(h)j=2;k=9;l=ATe(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Ci(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ACg(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BF(c,0.0);if(!d){if(1.0/c===Infinity){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Ci(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Ci(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Ci(a,b,b+8|0);d=b;}else{Ci(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=AY3;ADD(c,f);g=f.mg;h=f.k8;i=f.oU;j=1;k=1;if(i)k=2;l=18;m=AQK(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Ci(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AK7(p,E9))d=0;else{d=GB(AFm(g,p));g=AHY(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AFm(p,Bp(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ATe(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AQK(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=AY4.data;g=f.length-1|0;while(g>=0){if(H$(AHY(b,Ca(c,f[g])),E9)){d=d|e;c=Ca(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BL(a,b){return a.nf(a.I,b);}
function Zw(a,b,c){Ci(a,b,b+1|0);a.B.data[b]=c;return a;}
function Kf(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.B=OS(a.B,d);}
function N(a){return EO(a.B,0,a.I);}
function Zd(a,b,c,d){return a.mH(a.I,b,c,d);}
function N1(a,b,c,d,e){var f,g,h,i;Ci(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function IZ(a,b){return a.lN(b,0,b.data.length);}
function Ci(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.iA((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var It=G(0);
var M=G(GG);
function Mu(){var a=new M();AUP(a);return a;}
function AUP(a){O(a);}
function H(a,b){M5(a,a.I,b===null?C(38):b.cM());return a;}
function BT(a,b){M5(a,a.I,b);return a;}
function V(a,b){Ow(a,b,10);return a;}
function GH(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(AWy(b,E9)){d=0;b=AXf(b);}a:{if(Dt(b,Bp(10))<0){if(d)Ci(a,c,c+1|0);else{Ci(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=HL(GB(b),10);}else{g=1;h=Bp(1);i=Dc(Bp(-1),Bp(10));b:{while(true){j=Ca(h,Bp(10));if(Dt(j,b)>0){j=h;break b;}g=g+1|0;if(Dt(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Ci(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(H$(j,E9))break a;e=a.B.data;c=f+1|0;e[f]=HL(GB((Dc(b,j))),10);b=AAY(b,j);j=Dc(j,Bp(10));f=c;}}}return a;}
function Fu(a,b){AEx(a,a.I,b);return a;}
function AAE(a,b){BL(a,b);return a;}
function Gr(a,b){M5(a,a.I,!b?C(39):C(40));return a;}
function AGB(a,b,c){var d,e,f,g,h,i;d=BF(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HJ;Y(i);K(i);}
function XX(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HJ;Y(f);K(f);}
function ANS(a,b,c,d,e){N1(a,b,c,d,e);return a;}
function AKQ(a,b,c,d){Zd(a,b,c,d);return a;}
function ABm(a){return a.I;}
function D3(a){return N(a);}
function AN1(a,b){Kf(a,b);}
function AOx(a,b,c){Zw(a,b,c);return a;}
function M5(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(38);else if(Fw(c))break a;Kf(a,a.I+J(c)|0);d=a.I-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.I=a.I+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HJ;Y(c);K(c);}
var EB=G(HM);
var AEP=G(EB);
function AY5(a){var b=new AEP();AJM(b,a);return b;}
function AJM(a,b){Bi(a,b);}
var AC2=G(EB);
function AY6(a){var b=new AC2();AJ4(b,a);return b;}
function AJ4(a,b){Bi(a,b);}
var U4=G(0);
var Dw=G(0);
function AUD(b){var c;c=new R$;c.yx=b;return c;}
function CK(b,c){if(b!==null)b.el();return c;}
var Qy=G(0);
function Jb(){var a=this;B.call(a);a.mV=0;a.l2=0;}
var AY7=0;function F7(a){AY7=AY7-1|0;}
function Gn(a,b,c){JV(a,ACa(b,c,400,0));}
function SH(a,b){return Ll(a,b,0.875);}
function Ll(a,b,c){return EA(a,b)+c|0;}
function S6(){var a=this;Jb.call(a);a.kC=null;a.bu=null;a.ob=null;}
function EH(a){var b,c,d;b=a.bu;c=a.mV;d=a.l2;b.clearRect(0.0,0.0,c,d);}
function TC(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.bu;d="center";c.textAlign=d;break a;case 2:c=a.bu;d="right";c.textAlign=d;break a;default:break a;}d=a.bu;c="left";d.textAlign=c;}}
function CC(a,b){JV(a,Gw(b.oz));}
function JV(a,b){var c;if(!(a.ob==b?1:0)){c=a.bu;a.ob=b;c.font=b;}}
function ACa(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function Ch(a,b,c,d){var e,f,g;e=a.bu;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EA(a,b){var c;c=$rt_ustr(b);return a.bu.measureText(c).width;}
function L3(a,b,c,d){var e,f;e=a.bu;f=$rt_ustr(Gd(ADq([35,G5(b/16|0),G5(b%16|0),G5(c/16|0),G5(c%16|0),G5(d/16|0),G5(d%16|0)])));e.fillStyle=f;}
var AAV=G();
var AF9=G();
function B2(b,c){if(b===c)return 1;return b!==null?b.bT(c):c!==null?0:1;}
function BP(b){if(b!==null)return b;b=new G3;Bi(b,C(30));K(b);}
var Z=G(0);
function Vd(){B.call(this);this.ul=null;}
var By=G(0);
var ADX=G();
var AA2=G(0);
function Kv(b,c,d){return AS_(C(41),Fp(C(11),b),c,d);}
var AFJ=G(0);
var AFF=G(0);
function Mk(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=Dp(b,f+g|0);DB(c,0,d,f,g);return d;}
function Lz(b,c,d){DB(b,c,d,0,d.data.length);return d;}
function SV(b,c,d){var e;if(c>0)DB(b,0,d,0,c);e=d.data.length;if(c<e)DB(b,c+1|0,d,c,e-c|0);return d;}
function ADa(b,c,d,e){var f;if(c>0)DB(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DB(b,d,e,c,f-d|0);}return e;}
function F$(b){var c;c=new XI;c.jJ=b;return c;}
function QX(b,c){if(b.data.length!=c)b=Dp(b,c);return b;}
function AFE(b,c,d){var e;e=c.data.length;if(e==d)c=Dp(c,e*2|0);c.data[d]=b;return c;}
function Mp(){var a=this;B.call(a);a.tL=null;a.sx=null;a.sr=null;a.qu=0;}
function AS_(a,b,c,d){var e=new Mp();ARO(e,a,b,c,d);return e;}
function ARO(a,b,c,d,e){a.tL=b;a.sx=c;a.sr=d;a.qu=e;}
var ABW=G();
function ALW(b,c){return {style:b,weight:c};}
var BZ=G(0);
function Ve(){B.call(this);this.vL=null;}
function AHp(a,b){var c,d,e;c=a.vL;d=0;while(d<b.length){e=b[d];(Eh()).fonts.add(e);d=d+1|0;}c.w5=1;b=c.sG;if(b!==null)ADN(b);}
var Vc=G();
function ATT(a,b){$rt_globals.console.info("font load error "+b);}
var L0=G();
var AY8=null;var AY9=null;function Bz(){if(AY8===null)AY8=APm(AY$,0);return AY8;}
function E$(){if(AY9===null)AY9=APm(AY_,0);return AY9;}
function AW$(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L6(b)&&(e+f|0)<=L6(d)){a:{b:{if(b!==d){g=IK(BG(b));h=IK(BG(d));if(g!==null&&h!==null){if(g===h)break b;if(!Im(g)&&!Im(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gw;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AEK(n.constructor,o)?1:0)){Lf(b,c,d,e,j);b=new Ji;Y(b);K(b);}j=j+1|0;k=m;}Lf(b,c,d,e,f);return;}if(!Im(g))break a;if(Im(h))break b;else break a;}b=new Ji;Y(b);K(b);}}Lf(b,c,
d,e,f);return;}b=new Ji;Y(b);K(b);}b=new BC;Y(b);K(b);}d=new G3;Bi(d,C(42));K(d);}
function DB(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=L6(b)&&(e+f|0)<=L6(d)){Lf(b,c,d,e,f);return;}b=new BC;Y(b);K(b);}
function Lf(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function Ez(){return Long_fromNumber(new Date().getTime());}
function AFe(){return AYP($rt_globals.performance.now()*1000000.0);}
var AFC=G();
var ACE=G();
function QK(b,c){var d,e,f;d=(Eh()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Eh()).getElementById($rt_ustr(b)).appendChild(d);}
function AA$(){return (Eh()).createElement("canvas");}
function AGI(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AQg(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AHj=G();
var Od=G();
function AP1(a,b){var c;c=new Bu;Bi(c,$rt_str(b.message));K(c);}
var AFY=G();
function FP(b){return $rt_str(b);}
var ABd=G();
function OS(b,c){var d,e,f,g;b=b.data;d=BU(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function AGu(b,c){var d,e,f,g;b=b.data;d=D7(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function MV(b,c){var d,e,f,g;b=b.data;d=BM(c);e=d.data;f=Bb(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Dp(b,c){var d,e,f,g;d=b.data;e=AFa(IK(BG(b)),c);f=Bb(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AB9(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));H(c,e[d]);d=d+1|0;}BT(c,C(45));return N(c);}
function AE7(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));V(c,e[d]);d=d+1|0;}BT(c,C(45));return N(c);}
function ASq(b){var c,d,e;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));Fu(c,e[d]);d=d+1|0;}BT(c,C(45));return N(c);}
function AVI(b){var c,d,e,f;if(b===null)return C(38);c=new M;O(c);BT(c,C(43));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BT(c,C(44));f=e[d];ACg(c,c.I,f);d=d+1|0;}BT(c,C(45));return N(c);}
function H0(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BD;Y(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ABJ(b,c,d,e){var f,g;if(c>d){e=new BD;Y(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ACB(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=AYS;e=R(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bb(j,h+f|0);l=h+(2*f|0)|0;m=Bb(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.wP(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AEy(b,c){return Vp(b,0,b.data.length,c);}
function Vp(b,c,d,e){var f,g,h,i,j;f=BF(c,d);if(f>0){g=new BD;Y(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Xp=G(0);
var ADM=G();
function AMw(a,b){return a.C7(b);}
function AON(a){return a.zR();}
var ADy=G();
var HI=G(0);
var Ux=G();
var BC=G(Bu);
var AEu=G();
function L6(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(AZa());}return b.data.length;}
function AFa(b,c){if(b===null){b=new G3;Y(b);K(b);}if(b===F($rt_voidcls())){b=new BD;Y(b);K(b);}if(c>=0)return AUt(b.gw,c);b=new AAm;Y(b);K(b);}
function AUt(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var G3=G(Bu);
var Ji=G(Bu);
var C_=G();
var AZb=null;var AZc=null;var AZd=null;var AZe=null;var AZf=null;var AZg=null;var AZh=null;var AZi=null;var AZj=null;var AZk=null;function Y0(b){var c,d;c=new BA;d=BU(1);d.data[0]=b;HW(c,d);return c;}
function ML(b){return b>=65536&&b<=1114111?1:0;}
function CI(b){return (b&64512)!=55296?0:1;}
function C7(b){return (b&64512)!=56320?0:1;}
function MP(b){return !CI(b)&&!C7(b)?0:1;}
function HU(b,c){return CI(b)&&C7(c)?1:0;}
function ED(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function II(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jh(b){return (56320|b&1023)&65535;}
function Fa(b){return G2(b)&65535;}
function G2(b){if(AZe===null){if(AZh===null)AZh=AE5();AZe=ADd((AZh.value!==null?$rt_str(AZh.value):null));}return T7(AZe,b);}
function EJ(b){return GZ(b)&65535;}
function GZ(b){if(AZd===null){if(AZi===null)AZi=AFU();AZd=ADd((AZi.value!==null?$rt_str(AZi.value):null));}return T7(AZd,b);}
function T7(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BF(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function Wb(b,c){if(c>=2&&c<=36){b=QE(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function QE(b){var c,d,e,f,g,h,i,j,k,l;if(AZc===null){if(AZj===null)AZj=ADl();c=(AZj.value!==null?$rt_str(AZj.value):null);d=ASb(Fx(c));e=Kp(d);f=BM(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+N$(d)|0;j=j+N$(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}AZc=f;}g=AZc.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BF(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HL(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GS(b){var c;if(b<65536){c=BU(1);c.data[0]=b&65535;return c;}return ADq([II(b),Jh(b)]);}
function Cy(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&MP(b&65535))return 19;if(AZf===null){if(AZk===null)AZk=AHb();d=(AZk.value!==null?$rt_str(AZk.value):null);e=R(Op,16384);f=e.data;g=D7(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Le(P(d,l));if(m==64){l=l+1|0;m=Le(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|W(c,Le(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Le(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ALJ(k,k+i|0,AGu(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ALJ(k,k+i|0,AGu(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}AZf=Dp(e,j);}e=AZf.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.sV)o=p+1|0;else{c=d.qJ;if(b>=c)return d.qY.data[b-c|0];c=p-1|0;}}return 0;}
function J$(b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GJ(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Cy(b)!=16?0:1;}
function Rb(b){switch(Cy(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function SN(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Rb(b);}return 1;}
function AAU(){AZb=F($rt_charcls());AZg=R(C_,128);}
function AE5(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AFU(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ADl(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHb(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Nj=G(0);
var T6=G(0);
var Es=G(0);
var AF8=G(0);
function Eh(){return $rt_globals.window.document;}
function O3(){var a=this;B.call(a);a.qL=null;a.qM=null;a.qN=null;}
function AQ_(a,b){var c,d,e;c=a.qL;d=a.qM;e=a.qN;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");e.f(b);}else{b=null;c.onmessage=b;b=Gw(Lh(c));c=d.ul;c.sG=b;if(c.w5)ADN(b);}}
var ADt=G();
function FG(){return AVs();}
function AVs(){return Math.random();}
function Bb(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AUy(b,c){return Math.max(b,c);}
function Ns(b){if(b<0)b= -b|0;return b;}
function AMj(b){return Math.abs(b);}
var Q3=G(0);
var S3=G(0);
var SS=G(0);
var U2=G(0);
var Zg=G(0);
var Wc=G(0);
var Qc=G(0);
var Qz=G(0);
var AA1=G();
function AQa(a,b){b=a.h6(b);K8();return b===null?null:b instanceof $rt_objcls()&&b instanceof Ex?Gw(b):b;}
function AST(a,b,c){a.He($rt_str(b),LT(c,"handleEvent"));}
function ASd(a,b,c){a.D7($rt_str(b),LT(c,"handleEvent"));}
function AP7(a,b,c,d){a.B8($rt_str(b),LT(c,"handleEvent"),d?1:0);}
function AUd(a,b){return !!a.Hk(b);}
function AJV(a){return a.zR();}
function AHS(a,b,c,d){a.FO($rt_str(b),LT(c,"handleEvent"),d?1:0);}
var BD=G(Bu);
var AAm=G(Bu);
function Ex(){B.call(this);this.tX=null;}
var AZl=null;var AZm=null;var AZn=null;var AZo=null;var AZp=null;var AZq=null;function K8(){K8=Bq(Ex);AJ2();}
function NN(a){var b=new Ex();AEf(b,a);return b;}
function AEf(a,b){K8();a.tX=b;}
function Lh(b){var c,d,e,f,g,h;K8();if(b===null)return null;a:{c=b;if(AZm!==null){d=$rt_str(typeof c);if(!Bn(d,C(46))&&!Bn(d,C(47))){if(Bn(d,C(48))){e=AZn.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NN(c);h=g;AZn.set(c,new $rt_globals.WeakRef(h));OQ(AZp,h,c);return g;}if(!Bn(d,C(49)))break a;else{e=AZo.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NN(c);h=g;AZo.set(c,new $rt_globals.WeakRef(h));OQ(AZq,
h,c);return g;}}e=AZm.get(c);f=(typeof e==='undefined'?1:0)?void 0:e.deref();if(!(typeof f==='undefined'?1:0))return f;g=NN(c);AZm.set(c,new $rt_globals.WeakRef(g));return g;}}return NN(c);}
function Gw(b){K8();if(b!==null)return b.tX;return null;}
function Uf(b){K8();if(b===null)return null;return b instanceof $rt_objcls()?b:Lh(b);}
function AJ2(){AZl=new $rt_globals.WeakMap();AZm=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();AZn=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZo=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();AZp=AZn===null?null:new $rt_globals.FinalizationRegistry(Bl(new Qs,"accept"));AZq=AZo===null?null:new $rt_globals.FinalizationRegistry(Bl(new Qt,"accept"));}
function OQ(b,c,d){return b.register(c,d);}
var AGR=G();
var ACW=G();
var AHe=G();
var Kx=G(0);
var Qs=G();
function AJT(a,b){var c;b=Uf(b);c=AZn;b=Gw(b);c.delete(b);}
var ADh=G();
var Qt=G();
function AHU(a,b){var c;b=Uf(b);c=AZo;b=Gw(b);c.delete(b);}
var HJ=G(BC);
var ACm=G();
function ADH(){return "ping";}
var Qb=G(0);
function Ub(){var a=this;B.call(a);a.rz=null;a.to=null;a.nB=null;a.ol=null;a.d5=null;a.vV=null;a.ot=null;a.mI=null;a.gN=null;a.ji=0;a.y4=0;a.sP=null;a.fY=null;a.r6=null;a.m9=null;a.ur=0;}
function AFt(a){a.d5.focus();}
function OA(a,b){var c;c=Eh();b=$rt_ustr(b);c.title=b;}
function ACI(a){var b,c,d;b=new Nk;c=a.gN;d=a.mI.cs;b.bf=c;b.m=d;b.b0=a;return b;}
function UM(a){a.y4=$rt_globals.requestAnimationFrame(Bl(a.to,"onAnimationFrame"));}
function Gq(a){a.ji=1;}
function UK(a,b,c){var d,e;a.mI.d0=B$(b,c);d=a.d5;e=b;d.width=e;d=a.d5;e=c;d.height=e;d=a.gN;U(d.dI,b,c);e=d.bs;d=d.dI;b=d.b;c=d.a;e.viewport(0,0,b,c);a.fY.cc(a.gN.dI,Lg(a));a.fY.bG();}
function GT(a,b){var c,d,e;c=a.sP;d=a.d5;if(B2(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.sP=b;}
function J8(a){return $rt_globals.performance.now()/1000.0;}
function Lg(a){return $rt_globals.window.devicePixelRatio;}
function XJ(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGP(b,1);else{c=new YB;d=$rt_globals.window.showDirectoryPicker();e=new YA;e.qQ=b;e.qR=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function Mz(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGP(b,0);else{c=new Zv;d=$rt_globals.window.showOpenFilePicker();e=new Zu;e.rw=b;e.rv=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CU(a,b,c,d){var e,f,g,h,i,j;d=d.data;e=a.ur+1|0;a.ur=e;f=a.m9;g=Dh(e);f.iE=MN(f,f.iE,g);g=Wk(f,g);Nl(g,b);Nl(g,b);f.kB=f.kB+1|0;b=a.r6;h=d.length;g=new $rt_globals.Array(h+2|0);f=e;0;g[0]=f;c=$rt_ustr(c);1;g[1]=c;i=new $rt_globals.Array();e=0;while(e<h){c=d[e];if(c instanceof BA)f=$rt_ustr(c);else if(Je(c,$rt_arraycls($rt_bytecls())))f=c.data.buffer;else if(Je(c,$rt_arraycls($rt_charcls())))f=c.data.buffer;else if(Je(c,$rt_arraycls($rt_intcls())))f=c.data.buffer;else{if(!(c instanceof LD)){b=new BD;c
=IE(BG(c));f=new M;O(f);H(H(f,C(50)),c);Bi(b,N(f));K(b);}c=c;f=c.hn;if(f===null)f=c.fJ;}j=e+2|0;j;g[j]=f;if(f instanceof $rt_globals.ArrayBuffer?1:0)i.push(f);e=e+1|0;}b.postMessage(g,i);}
function SJ(a,b,c){var d,e;d=$rt_globals.navigator.clipboard.readText();e=new SB;e.oD=b;b=AHg(c);d.then(Bl(e,"f"),Bl(b,"f"));}
function VR(a,b,c,d){var e,f;e=$rt_globals.navigator.clipboard;f=a.rz;b=(Fx(b)).data;f=f.decode(b);b=e.writeText(f);e=new V8;e.tW=c;c=AHg(d);b.then(Bl(e,"f"),Bl(c,"f"));}
function ZC(a){return "readText" in $rt_globals.navigator.clipboard?1:0;}
function AHg(b){var c;c=new NB;c.ub=b;return c;}
var B9=G(0);
var Tl=G();
function ADZ(a,b){var c,d,e,f;c=$rt_str($rt_globals.window.location.hash);if(Bn(C(51),c)){d=new Oc;Eu(d,b);b=$rt_globals.fetch("test.wasm");e=new Om;b=b.then(Bl(e,"f"));e=new Ol;b=b.then(Bl(e,"f"));e=new Oj;f=new Oi;b.then(Bl(e,"f"),Bl(f,"f"));}else if(!Bn(C(52),c))d=(ATA(J(c)<=0?C(30):Do(c,1))).bX(b);else{d=new Xq;ACU(d,b);d.F.ei=1;d.E.ei=1;c=new Vg;c.oG=d;Ql(d,c,C(53));c=new Vh;c.up=d;Ql(d,c,C(54));}return d;}
var Bk=G(0);
var ADU=G();
var ADp=G();
var SW=G(0);
function Xc(){B.call(this);this.qp=null;}
function AM2(a,b){var c,d;c=b;b=a.qp;if(!(!b.fY.c1(c/1000.0)&&!b.ji)){d=b.gN.dI;if(W(d.b,d.a)){b.ji=0;b.fY.bG();}}UM(b);}
function W_(){B.call(this);this.xl=null;}
function Dm(a){Gq(a.xl);}
var R3=G(0);
function Xa(){B.call(this);this.ti=null;}
function AK9(a,b,c){var d,e,f,g;c=a.ti;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.d5){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lg(c);UK(c,HN(f.width*g),HN(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];UK(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AGe=G();
function ASF(b,c){ARv(b,c,AH4());}
function AH4(){return {box:'device-pixel-content-box'};}
function ARv(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cp=G(0);
function W9(){B.call(this);this.pN=null;}
function ARh(a,b){b=a.pN;b.fY.cc(b.gN.dI,Lg(b));b.fY.bG();}
var LC=G(0);
function R_(a,b,c){var d;d=Cl(a,b);if(d===null)d=F1(a,b,c);return d;}
function D4(){var a=this;B.call(a);a.lo=null;a.ly=null;}
var Ee=G(0);
var ZB=G(0);
var N7=G(0);
function QI(){var a=this;D4.call(a);a.iE=null;a.kv=null;a.z6=null;a.kB=0;}
function Wk(a,b){var c,d;c=a.iE;while(true){if(c===null)return null;d=J_(a.kv,b,c.jQ);if(!d)break;c=d>=0?c.ca:c.bW;}return c;}
function MN(a,b,c){var d,e;if(b===null){b=new J7;d=null;b.jQ=c;b.jl=d;b.f4=1;b.gh=1;return b;}e=J_(a.kv,c,b.jQ);if(!e)return b;if(e>=0)b.ca=MN(a,b.ca,c);else b.bW=MN(a,b.bW,c);Et(b);return Ko(b);}
function KN(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=J_(a.kv,c,b.jQ);if(d<0)b.bW=KN(a,b.bW,c);else if(d>0)b.ca=KN(a,b.ca,c);else{e=b.ca;if(e===null)return b.bW;f=b.bW;g=R(J7,e.f4).data;h=0;while(true){b=e.bW;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.ca;while(h>0){h=h+(-1)|0;j=g[h];j.bW=b;Et(j);b=Ko(j);}e.ca=b;e.bW=f;Et(e);b=e;}Et(b);return Ko(b);}
function W$(){B.call(this);this.v_=null;}
function ASD(a,b){var c,d,e,f,g,h,i,j,k;c=a.v_.m9;b=b.data;if(!(b===ADH()?1:0)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BD;Y(b);K(b);}if(b.length<1){b=new BD;Y(b);K(b);}d=Dh(b[0]);e=Wk(c,d);if(e===null)c=null;else{c.iE=KN(c,c.iE,d);c.kB=c.kB+1|0;c=e.jl;}f=R(B,b.length-1|0);g=f.data;h=0;i=g.length;while(h<i){j=h+1|0;k=b[j];if(typeof k==='string'?1:0)e=FP(k);else if(k instanceof $rt_globals.ArrayBuffer?1:0){e=new Uj;AFV(e);e.h$=k;}else e=(k instanceof $rt_globals.File?1:0)?AEB(null,k):!(k instanceof $rt_globals.FileSystemFileHandle
?1:0)?null:AEB(k,null);g[h]=e;h=j;}c.g(f);}}
function Q$(){var a=this;B.call(a);a.cs=null;a.hS=null;a.zp=null;a.d0=null;}
function N3(){return (Eh()).activeElement;}
function CX(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return YQ(a,b,c,d);}
function AER(a,b,c,d,e){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"),!!e);return YQ(a,b,c,d);}
function YQ(a,b,c,d){var e;e=new RZ;e.x$=b;e.ya=c;e.x_=d;return e;}
function Vf(a,b){var c;c=new Wm;c.xd=b;return c;}
function EP(a,b){var c,d,e,f,g;c=$rt_globals.window.devicePixelRatio;d=a.hS.getBoundingClientRect();e=B$(HN((b.clientX-d.left)*c),HN((b.clientY-d.top)*c));f=new Bf;g=a.d0;f.b=g.b;f.a=g.a;d=new Nh;VT(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.xS=f;return d;}
function Z$(a,b,c){var d,e,f,g;d=new QD;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;VT(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.k4=0;d.d_=e;d.bl=f;d.ih=c;d.tp=g;return d;}
function DT(a,b){b.stopPropagation();b.preventDefault();}
function ACR(a,b){var c;c=new Zz;c.q8=b;b.onpointerdown=Bl(c,"f");c=new ZA;c.pS=b;b.onpointerup=Bl(c,"f");}
function LO(){var a=this;B.call(a);a.sM=null;a.cR=null;a.bs=null;a.uV=null;a.yD=0;a.zN=0;a.kE=null;a.Ap=null;a.z3=null;a.y1=null;a.gS=null;a.ig=null;a.hl=null;a.Ab=null;a.qv=null;a.dI=null;a.wQ=null;a.mD=0;a.kX=0;a.nh=0;a.m2=0;a.i9=0;a.nc=null;}
function HT(a,b,c){return Hk(a,b,c,400,0);}
function CO(a,b,c){return Nq(a.sM,b,c);}
function FB(a,b){var c,d,e,f,g;c=a.bs;d=b.bp;e=b.bN;f=b.bm;g=b.bO;c.clearColor(d,e,f,g);a.bs.clear(16384);}
function Cw(a,b){var c;if(b==a.kX)return b;if(!b)a.bs.disable(3042);else{a.bs.enable(3042);a.bs.blendFuncSeparate(770,771,1,1);}c=a.kX;a.kX=b;return c;}
function Te(a,b,c){Mb(a,b.b,b.a,c);}
function Mb(a,b,c,d){var e,f;e=d.b;f=d.a;a.m2=1;a.i9=1;d=a.nc;d.s0=b;d.s2=c;d.sZ=e;d.sY=f;VU(a);}
function Hp(a){a.m2=0;a.i9=0;VU(a);}
function VU(a){var b,c,d,e,f,g;b=a.nh;c=a.m2;if(b!=c){a.nh=c;if(!c)a.bs.disable(3089);else a.bs.enable(3089);}if(a.nh&&a.i9){a.i9=0;d=a.bs;e=a.nc;b=e.s0;c=a.dI.a-e.s2|0;f=e.sY;c=c-f|0;g=e.sZ;d.scissor(b,c,g,f);}}
function IL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.qv;c=a.mD;d=b.g6.t$;e=b.eL;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eL;h=b.op;e.bindBuffer(34962,h);i=b.g6.nJ.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eL;m=k.h0;n=k.fI;o=b.g6.lJ*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fI|0;j=j+1|0;}a:{e=b.xg;if(e!==null){c=0;b.eL.bindBuffer(34962,e);i=b.g6.sJ.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eL;j=e.h0;p=e.fI;m=e.qF;n=b.g6.q2;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fI|0;g=g+1|0;}}}q=b.wt;if(q===null){c=b.tu;if(c>0)b.eL.drawArrays(4,0,c);}else{b.eL.bindBuffer(34963,q);k=b.eL;g=b.wJ;k.drawElements(4,g,5123,0);}a.mD=d;}
function Bx(a,b,c,d,e){IS(a,a.kE);JA(a.kE,a.bs,b,c,d,a.dI);d=a.kE;G6(a.bs,d.v$,e);IL(a);}
function AAq(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IS(a,a.hl);JA(a.hl,a.bs,b,c,d,a.dI);j=a.hl;d=a.bs;k=j.nM;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.nL;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.hl;G6(a.bs,d.pk,i);IL(a);}
function EY(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;IS(a,a.gS);JA(a.gS,a.bs,b,c,d,a.dI);VO(a.gS,a.bs,f);d=a.gS;j=a.bs;f=f.f7;b=f.b;c=f.a;k=e.bp;l=b;m=k/l;k=e.bN;n=c;o=k/n;k=e.bm/l;l=e.bO/n;d=d.vD;j.uniform4f(d,m,o,k,l);d=a.gS;e=a.bs;G6(e,d.rg,g);G6(e,d.o2,h);d=d.qk;e.uniform2f(d,i,0.0);IL(a);}
function CZ(a){var b,c;b=new J6;c=a.uV;b.f7=new Bf;b.es=c;b.fx=c.dP.createTexture();AZr=AZr+1|0;return b;}
function Ph(a,b){Zi(a.bs,b);}
function IS(a,b){var c,d;if(b!==a.wQ){c=a.bs;d=b.b5;c.useProgram(d);a.wQ=b;}}
function AFI(){var a=this;LO.call(a);a.zs=null;a.z4=null;}
function AWQ(a,b){var c=new AFI();ANi(c,a,b);return c;}
function ANi(a,b,c){var d,e,f,g,h,i,j,k,l;d=new VW;a.dI=new Bf;a.mD=0;a.nc=new Yw;a.sM=d;e=$rt_str(b.getParameter(7938));f=new M;O(f);H(H(f,C(55)),e);$rt_globals.console.info($rt_ustr(N(f)));a.bs=b;a.cR=Nq(d,4,4);g=AHK(16);h=g.data;h[0]=1.0;h[1]=(-1.0);h[2]=1.0;h[3]=1.0;h[4]=1.0;h[5]=1.0;h[6]=1.0;h[7]=0.0;h[8]=(-1.0);h[9]=(-1.0);h[10]=0.0;h[11]=1.0;h[12]=(-1.0);h[13]=1.0;h[14]=0.0;h[15]=0.0;i=BU(6);j=i.data;j[0]=0;j[1]=1;j[2]=2;j[3]=1;j[4]=2;j[5]=3;f=new R0;Kl();k=AZs;f.eL=b;f.g6=k;f.tu=h.length/k.lJ|0;f.wJ
=j.length;k=b.createBuffer();f.op=k;b.bindBuffer(34962,k);k=g.data;b.bufferData(34962,k,35044);f.xg=null;k=b.createBuffer();f.wt=k;if(k!==null){b.bindBuffer(34963,k);k=i.data;b.bufferData(34963,k,35044);}k=null;b.bindBuffer(34962,k);k=null;b.bindBuffer(34963,k);a.qv=f;a.zN=Ld(e,C(56));f=new R1;f.dP=b;a.uV=f;l=b.getParameter(3379);a.yD=l;f=new M;O(f);V(H(f,C(57)),l);$rt_globals.console.info($rt_ustr(N(f)));g=R(DC,7);i=g.data;d=new X0;I_(d,b,C(58),C(59),AZs);f=d.b5;d.v$=b.getUniformLocation(f,"uColor");a.kE=d;i[0]
=d;f=AWh(b,C(60));a.Ap=f;i[1]=f;f=AXi(b);a.z3=f;i[2]=f;f=AXO(b);a.y1=f;i[3]=f;f=AWR(b);a.gS=f;i[4]=f;f=AX0(b);a.ig=f;i[5]=f;f=AXJ(b);a.hl=f;i[6]=f;a.Ab=g;Zi(b,C(61));a.z4=new VV;a.zs=c;}
function Hk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cR;g=ACa(b,c,d,e);JV(f,g);h=f.bu.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EA(f,C(62));m=EA(f,C(63));h=new LE;n=Lh(g);h.no=b;h.yi=c;o=c|0;if(o!==c){b=new M;O(b);Fu(H(b,C(64)),c);$rt_globals.console.info($rt_ustr(N(b)));}h.qA=o;h.yq=d;h.yZ=e;h.ds=i;h.eT=j;h.yh=l;h.m$=k;h.oz=n;h.sC=Dl(i);h.zW=Dl(h.eT);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.yn=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b
=C(65);}h.x9=b;return h;}
function Cz(){B.call(this);this.bd=null;}
function Eu(a,b){a.bd=b;}
function AU0(a,b){return 0;}
var JO=G();
var AYS=null;function J_(a,b,c){return b.kD(c);}
function AD2(){AYS=new JO;}
function ACw(){var a=this;B.call(a);a.b$=null;a.nD=null;a.bz=null;a.dC=null;a.eZ=null;a.f8=null;a.gH=null;a.kp=null;a.lj=null;a.dh=null;a.ie=null;a.pK=0;}
function AXv(a){var b=new ACw();AQH(b,a);return b;}
function AQH(a,b){a.b$=CM(R(Cr,0));a.nD=CM(R(Cr,0));a.bz=CM(R(Cu,0));a.dC=CM(R(DO,0));a.eZ=CM(R(EI,0));a.f8=CM(R(EZ,0));a.gH=CM(R(Fl,0));a.kp=CM(R(Bk,0));a.lj=CM(R(Bk,0));a.dh=b;}
function Vr(a,b){var c,d,e,f;Dm(a.dh);c=(Cs(!b.ih?a.nD:a.b$)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].X(b);if(f)break;if(b.k4)break;e=e+1|0;}return f;}
function SC(a,b,c){var d,e,f;Dm(a.dh);d=(Cs(a.f8)).data;e=d.length;f=0;while(f<e){if(d[f].g9(b,c))return 1;f=f+1|0;}return 0;}
function Yj(){B.call(this);this.oV=null;}
function AQD(a,b){var c;c=a.oV;if(Vr(c.cs,Z$(c,b,1)))DT(c,b);}
function Yk(){B.call(this);this.tT=null;}
function AQV(a,b){var c;c=a.tT;if(Vr(c.cs,Z$(c,b,0)))DT(c,b);}
function Yl(){B.call(this);this.qd=null;}
function AO5(a,b){var c,d,e,f,g,h,i;c=a.qd;if(c.d0!==null){a:{b:{d=EP(c,b);e=c.cs;Dm(e.dh);f=e.ie;if(f!==null)f.g(d);else{g=(Cs(e.bz)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bQ(d))break a;i=i+1|0;}}}}DT(c,b);}}
function Ym(){B.call(this);this.xe=null;}
function AOt(a,b){var c,d,e,f,g,h;c=a.xe;b.button;if(c.d0!==null)a:{d=EP(c,b);c=c.cs;e=b.button;Dm(c.dh);if(c.ie===null){f=(Cs(c.bz)).data;g=f.length;h=0;while(h<g){b=f[h].ch(d,e);if(b!==null){c.ie=b;c.pK=e;break a;}h=h+1|0;}}}}
function Yn(){B.call(this);this.tb=null;}
function AOV(a,b){var c,d,e,f,g,h,i;c=a.tb;b.button;if(c.d0!==null){d=EP(c,b);e=c.cs;f=b.button;Dm(e.dh);if(f==e.pK&&e.ie!==null)e.ie=null;g=(Cs(e.bz)).data;h=g.length;i=0;a:{while(i<h){if(g[i].c4(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DT(c,b);}}
function Yo(){B.call(this);this.pl=null;}
function ARr(a,b){var c,d,e,f,g,h,i,j,k;c=a.pl;if(c.d0!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cs;f=EP(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dm(e.dh);i=(Cs(e.dC)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dc(f,d,h))break b;k=k+1|0;}}DT(c,b);}}
function Yp(){B.call(this);this.xw=null;}
function AMM(a,b){var c,d,e,f,g,h,i,j;c=a.xw;if(c.d0!==null){d=EP(c,b);e=c.cs;f=b.button;g=b.detail;Dm(e.dh);h=(Cs(e.bz)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cB(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DT(c,b);}}
function Yq(){B.call(this);this.tk=null;}
function AVy(a,b){var c,d,e,f,g,h,i;c=a.tk;if(c.d0!==null){d=EP(c,b);e=c.cs;Dm(e.dh);f=(Cs(e.eZ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].X(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DT(c,b);}}
function Yr(){B.call(this);this.py=null;}
function ALV(a,b){var c,d,e;b=a.py.cs;c=(Cs(b.lj)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dh);}
function Ys(){B.call(this);this.wj=null;}
function ASN(a,b){var c,d,e;b=a.wj.cs;c=(Cs(b.kp)).data;d=c.length;e=0;while(e<d){c[e].o();e=e+1|0;}Dm(b.dh);}
function Z2(){B.call(this);this.vB=null;}
function AU1(a,b){var c;c=a.vB;if(c.d0!==null)EP(c,b);}
function Z3(){B.call(this);this.ue=null;}
function AOL(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.ue;if(N3()===c.hS){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cs(c.cs.gH)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dO();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cs.dh;m=new OW;m.wz=k;m.wA=l;g.getAsString(Bl(m,"accept"));DT(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new M;O(l);H(H(H(H(l,C(66)),k),C(67)),g);$rt_globals.console.info($rt_ustr(N(l)));}e=e+1
|0;}}}
function Z4(){B.call(this);this.n6=null;}
function AO_(a,b){var c;c=a.n6;if(N3()===c.hS&&SC(c.cs,Vf(c,b),0))DT(c,b);}
function Z5(){B.call(this);this.wH=null;}
function ARb(a,b){var c;c=a.wH;if(N3()===c.hS&&SC(c.cs,Vf(c,b),1))DT(c,b);}
var VE=G(0);
var VW=G();
function Nq(a,b,c){var d,e,f;d=new S6;AY7=AY7+1|0;d.mV=b;d.l2=c;e=(Eh()).createElement("canvas");d.kC=e;f=b;e.width=f;e=d.kC;f=c;e.height=f;d.bu=d.kC.getContext("2d");return d;}
var VV=G();
function ANF(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Nk(){var a=this;B.call(a);a.bf=null;a.m=null;a.b0=null;}
function AGA(){var a=this;B.call(a);a.hX=null;a.jy=null;a.hI=0;}
function CM(a){var b=new AGA();AMG(b,a);return b;}
function AMG(a,b){a.hX=b;}
function Ba(a,b){var c,d,e;c=a.hI;d=a.hX;if(c==d.data.length)a.hX=Dp(d,c+4|0);d=a.hX.data;e=a.hI;a.hI=e+1|0;d[e]=b;a.jy=null;}
function Cs(a){var b;b=a.jy;if(!(b!==null&&b.data.length==a.hI))a.jy=Dp(a.hX,a.hI);return a.jy;}
var Eg=G(0);
var Cr=G(0);
var Cu=G(0);
function ANL(a,b){return 0;}
function ATV(a,b,c){return null;}
function AIq(a,b,c){return 0;}
function ARq(a,b,c,d){return 0;}
var DO=G(0);
var EI=G(0);
var EZ=G(0);
var E1=G(0);
var Fl=G(0);
function R$(){B.call(this);this.yx=null;}
function Bf(){var a=this;B.call(a);a.b=0;a.a=0;}
function B$(a,b){var c=new Bf();Ri(c,a,b);return c;}
function Ri(a,b,c){a.b=b;a.a=c;}
function Cx(a,b){a.b=b.b;a.a=b.a;}
function U(a,b,c){a.b=b;a.a=c;}
function AAr(a){var b,c,d;b=a.b;c=a.a;d=new M;O(d);V(H(V(H(d,C(68)),b),C(69)),c);return N(d);}
function LI(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function Yw(){var a=this;B.call(a);a.s0=0;a.s2=0;a.sZ=0;a.sY=0;}
var AFH=G();
var ABx=G(0);
function R1(){B.call(this);this.dP=null;}
function Mf(){var a=this;B.call(a);a.b5=null;a.zY=null;}
function AEA(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(70):C(71);g=$rt_str(b.getShaderInfoLog(e));h=new M;O(h);H(H(h,f),g);g=N(h);b.deleteShader(e);Bt(Bz(),g);Bt(E$(),C(72));Bt(E$(),d);Bt(E$(),C(72));b=new Bu;Bi(b,g);K(b);}
function DC(){var a=this;Mf.call(a);a.px=null;a.rd=null;a.mL=null;}
function AZt(a,b,c,d){var e=new DC();I_(e,a,b,c,d);return e;}
function I_(a,b,c,d,e){var f,g,h,i,j,k;a.zY=e;f=AEA(b,35633,c);d=AEA(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.b5=g;h=e.tG.data;i=h.length;j=0;while(j<i){c=h[j];d=a.b5;k=c.h0;c=c.rn;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.b5;b.linkProgram(c);if(b.getProgramParameter(c,35714)){Zi(b,C(73));a.mL=new Bf;c=a.b5;a.px=b.getUniformLocation(c,"uResolution");c=a.b5;a.rd=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new M;O(c);H(H(c,C(74)),d);Bi(b,N(c));K(b);}
function ACy(a,b,c){var d,e,f;if(!LI(a.mL,c)){Cx(a.mL,c);d=a.px;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function JA(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.rd;b.uniform4f(e,i,l,h,j);ACy(a,b,f);}
function X0(){DC.call(this);this.v$=null;}
function EN(){DC.call(this);this.s8=null;}
function AWh(a,b){var c=new EN();Vm(c,a,b);return c;}
function AZu(a,b,c){var d=new EN();Vs(d,a,b,c);return d;}
function Vm(a,b,c){Vs(a,b,C(58),c);}
function Vs(a,b,c,d){Kl();I_(a,b,c,d,AZs);c=a.b5;a.s8=b.getUniformLocation(c,"sDiffuse");}
function VO(a,b,c){var d;d=a.s8;b.uniform1i(d,0);b.activeTexture(33984);c=c.fx;b.bindTexture(3553,c);}
var ADe=G(DC);
function AXi(a){var b=new ADe();AUq(b,a);return b;}
function AUq(a,b){Kl();I_(a,b,C(58),C(75),AZs);}
function AFp(){EN.call(this);this.yJ=null;}
function AXO(a){var b=new AFp();AL1(b,a);return b;}
function AL1(a,b){var c;Vm(a,b,C(76));c=a.b5;a.yJ=b.getUniformLocation(c,"uContrast");}
function AEV(){var a=this;EN.call(a);a.vD=null;a.rg=null;a.o2=null;a.qk=null;}
function AWR(a){var b=new AEV();ARm(b,a);return b;}
function ARm(a,b){var c;Vs(a,b,C(77),C(78));c=a.b5;a.vD=b.getUniformLocation(c,"uTexTransform");c=a.b5;a.rg=b.getUniformLocation(c,"uColor");c=a.b5;a.o2=b.getUniformLocation(c,"uBgColor");c=a.b5;a.qk=b.getUniformLocation(c,"uContrast");}
function ABZ(){var a=this;EN.call(a);a.xh=null;a.xf=null;a.rE=null;}
function AX0(a){var b=new ABZ();ALj(b,a);return b;}
function ALj(a,b){var c,d;Vm(a,b,C(79));c=a.b5;a.xh=b.getUniformLocation(c,"uColorB");d=a.b5;a.xf=b.getUniformLocation(d,"uColorF");d=a.b5;a.rE=b.getUniformLocation(d,"uContrast");}
function AEU(){var a=this;DC.call(a);a.pk=null;a.nM=null;a.nL=null;}
function AXJ(a){var b=new AEU();ALl(b,a);return b;}
function ALl(a,b){var c;Kl();I_(a,b,C(58),C(80),AZs);c=a.b5;a.pk=b.getUniformLocation(c,"uColor");c=a.b5;a.nM=b.getUniformLocation(c,"uPoints1");c=a.b5;a.nL=b.getUniformLocation(c,"uPoints2");}
var Tr=G(0);
var AHh=G(0);
function G6(b,c,d){var e,f,g,h;e=d.bp;f=d.bN;g=d.bm;h=d.bO;b.uniform4f(c,e,f,g,h);}
function Zi(b,c){var d,e;d=b.getError();if(d){b=Bz();e=new M;O(e);V(H(e,c),d);Bt(b,N(e));}}
function RZ(){var a=this;B.call(a);a.x$=null;a.ya=null;a.x_=null;}
function R0(){var a=this;B.call(a);a.eL=null;a.g6=null;a.op=null;a.xg=null;a.wt=null;a.tu=0;a.wJ=0;}
function Co(){var a=this;B.call(a);a.x6=null;a.dg=0;}
function Dd(a,b,c){a.x6=b;a.dg=c;}
function Hd(){var a=this;Co.call(a);a.tG=null;a.nJ=null;a.sJ=null;a.lJ=0;a.q2=0;a.t$=0;}
var AZs=null;var AZv=null;function Kl(){Kl=Bq(Hd);ANa();}
function ANa(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hd;c=R(D_,2);d=c.data;AT$();d[0]=AZw;d[1]=AZx;Kl();Dd(b,C(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];AA0();switch(AZy.data[l.m5.dg]){case 1:f=f+l.fI|0;h=h+1|0;break a;case 2:e=e+l.fI|0;g=g+1|0;break a;default:}}i=i|1<<l.h0;k=k+1|0;}b.tG=c;b.lJ=e;b.q2=f;b.t$=i;c=R(D_,g);m=c.data;b.nJ=c;c=R(D_,h);n=c.data;b.sJ=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];AA0();switch(AZy.data[l.m5.dg]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}AZs=b;c=R(Hd,1);c.data[0]=b;AZv=c;}
var MX=G(0);
var UQ=G(0);
var V9=G(0);
var GN=G();
function J5(){GN.call(this);this.xK=null;}
function ACZ(){var a=this;J5.call(a);a.zK=0;a.lX=0;a.ju=null;a.ln=null;a.uK=null;}
function APm(a,b){var c=new ACZ();ATP(c,a,b);return c;}
function ATP(a,b,c){a.xK=b;b=new M;O(b);a.ju=b;a.ln=BU(32);a.zK=c;ACQ();a.uK=AZz;}
function UY(a,b,c,d){var e,$$je;e=a.xK;if(e===null)a.lX=1;if(!(a.lX?0:1))return;a:{try{e.lf(b,c,d);break a;}catch($$e){$$je=Er($$e);if($$je instanceof I5){}else{throw $$e;}}a.lX=1;}}
function Pt(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ADS(b,c,d-c|0);e=D7(Bd(16,Bb(e.length,1024)));g=ADF(e,0,e.data.length);h=a.uK;i=new Q8;b=D7(1);j=b.data;j[0]=63;HD();k=AZA;i.mQ=k;i.l3=k;c=j.length;if(c&&c>=i.nK){i.x3=h;i.rl=b.fq();i.zE=2.0;i.nK=4.0;i.qE=BU(512);i.pi=D7(512);k=AZB;if(k===null){i=new BD;Bi(i,C(82));K(i);}i.mQ=k;i.l3=k;a:while(true){if(i.jq==3){f=new CL;Y(f);K(f);}i.jq=2;b:{while(true){try{k=ABe(i,f,g);}catch($$e){$$je=Er($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(IR(k))
{d=Cb(f);if(d<=0)break b;k=Eb(d);}else if(Hz(k))break;h=!MJ(k)?i.mQ:i.l3;c:{if(h!==AZB){if(h===AZC)break c;else break b;}d=Cb(g);b=i.rl;l=b.data.length;if(d<l){k=AZD;break b;}YT(g,b,0,l);}EU(f,f.Z+KP(k)|0);}}l=Hz(k);UY(a,e,0,g.Z);Pq(g);if(!l){while(true){d=i.jq;if(d!=2&&d!=4){f=new CL;Y(f);K(f);}f=AZE;if(f===f)i.jq=3;l=Hz(f);UY(a,e,0,g.Z);Pq(g);if(!l)break;}return;}}K(AKy(f));}i=new BD;Bi(i,C(83));K(i);}
function Bt(a,b){var c,d,e,f,g,h,i,j;BL(BT(a.ju,b),10);b=a.ju;c=b.I;d=a.ln;if(c>d.data.length)d=BU(c);e=0;f=0;if(e>c){b=new BC;Bi(b,C(84));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Pt(a,d,0,c);a.ju.I=0;}
function GA(){GN.call(this);this.zu=null;}
function AAd(a){a.zu=D7(1);}
var LY=G(GA);
var AY$=null;function ANu(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AFc(){var b;b=new LY;AAd(b);AY$=b;}
function D_(){var a=this;Co.call(a);a.rn=null;a.m5=null;a.fI=0;a.qF=0;a.h0=0;}
var AZw=null;var AZx=null;var AZF=null;function AT$(){AT$=Bq(D_);AMr();}
function AW5(a,b,c,d,e,f,g){var h=new D_();XS(h,a,b,c,d,e,f,g);return h;}
function XS(a,b,c,d,e,f,g,h){AT$();Dd(a,b,c);a.rn=d;a.m5=e;a.fI=f;a.qF=g;a.h0=h;}
function AMr(){var b;b=new D_;AEi();XS(b,C(85),0,C(86),AZG,2,0,0);AZw=b;b=AW5(C(87),1,C(88),AZG,2,0,1);AZx=b;AZF=I(D_,[AZw,b]);}
function JX(){var a=this;B.call(a);a.xR=null;a.yL=null;}
function AFw(b){var c,d;if(Fw(b))K(ACT(b));if(!AFy(P(b,0)))K(ACT(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AFy(d))break a;else K(ACT(b));}}c=c+1|0;}}
function AFy(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var M1=G(JX);
var AZz=null;function ACQ(){ACQ=Bq(M1);ALh();}
function AFL(a){var b,c;b=new UZ;b.fC=C(89);HD();c=AZA;b.hB=c;b.mY=c;b.yA=a;b.nS=0.3333333432674408;b.y3=0.5;b.pr=D7(512);b.tR=BU(512);return b;}
function ALh(){var b,c,d,e,f;b=new M1;ACQ();c=R(BA,0);d=c.data;AFw(C(90));e=d.length;f=0;while(f<e){AFw(d[f]);f=f+1|0;}b.xR=C(90);b.yL=c.fq();AZz=b;}
var K4=G();
var AZH=null;var AZy=null;function AA0(){AA0=Bq(K4);AQo();}
function AQo(){var b,c;AEi();b=BM((AZI.fq()).data.length);c=b.data;AZy=b;c[AZJ.dg]=1;c[AZG.dg]=2;AEk();c=BM((AZK.fq()).data.length);b=c.data;AZH=c;b[AZL.dg]=1;b[AZM.dg]=2;}
function QN(){var a=this;B.call(a);a.f3=null;a.nv=null;a.k0=null;a.uk=null;a.q1=null;a.rh=null;}
function AC6(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.f3,b,c));}
function NO(a,b){var c,d,e,f,g,h,i,$$je;c=new BA;d=b;while(a.nv[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.f3,b,d));f=e.data;FA();d=f.length;ACQ();g=AZz;h=ADF(e,0,d);a:{try{i=AFL(g);HD();g=ABN(AEE(AGm(i,AZB),AZB),h);break a;}catch($$e){$$je=Er($$e);if($$je instanceof F6){g=$$je;}else{throw $$e;}}h=new Y_;h.j2=1;h.kA=1;h.id=C(91);h.l6=g;K(h);}if(!g.Z&&g.dS==g.nq)c.b_=g.hZ;else{f=BU(Cb(g));e=f.data;c.b_=f;Oy(g,f,0,e.length);}return c;}
function N5(a,b){var c,d,e;c=new BA;d=b>>>1|0;e=d;while(a.k0[e]){e=e+1|0;}d=e-d|0;HW(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.f3,b,d)));return c;}
var Hj=G(Co);
var AZJ=null;var AZG=null;var AZI=null;function AEi(){AEi=Bq(Hj);AKO();}
function ALd(a,b){var c=new Hj();AFO(c,a,b);return c;}
function AFO(a,b,c){AEi();Dd(a,b,c);}
function AKO(){var b;AZJ=ALd(C(92),0);b=ALd(C(93),1);AZG=b;AZI=I(Hj,[AZJ,b]);}
var GE=G(Co);
var AZL=null;var AZM=null;var AZK=null;function AEk(){AEk=Bq(GE);ALr();}
function AVG(a,b){var c=new GE();ABH(c,a,b);return c;}
function ABH(a,b,c){AEk();Dd(a,b,c);}
function ALr(){var b;AZL=AVG(C(94),0);b=AVG(C(95),1);AZM=b;AZK=I(GE,[AZL,b]);}
var Lj=G(GA);
var AY_=null;function ALt(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHk(){var b;b=new Lj;AAd(b);AY_=b;}
var Xd=G(Ed);
function AFB(){BD.call(this);this.x5=null;}
function ACT(a){var b=new AFB();ATk(b,a);return b;}
function ATk(a,b){Y(a);a.x5=b;}
var M0=G(0);
function Zz(){B.call(this);this.q8=null;}
function ASc(a,b){a.q8.setPointerCapture(b.pointerId);}
function ZA(){B.call(this);this.pS=null;}
function AJu(a,b){a.pS.releasePointerCapture(b.pointerId);}
function Hv(){var a=this;B.call(a);a.nq=0;a.Z=0;a.dS=0;a.h8=0;}
function XO(a,b){a.h8=(-1);a.nq=b;a.dS=b;}
function EU(a,b){var c,d,e;if(b>=0&&b<=a.dS){a.Z=b;if(b<a.h8)a.h8=0;return a;}c=new BD;d=a.dS;e=new M;O(e);BL(V(H(V(H(e,C(96)),b),C(97)),d),93);Bi(c,N(e));K(c);}
function Cb(a){return a.dS-a.Z|0;}
function DV(a){return a.Z>=a.dS?0:1;}
var TK=G(0);
var LF=G(Hv);
function AGZ(b){var c,d;if(b>=0)return AQ2(0,b,BU(b),0,b,0);c=new BD;d=new M;O(d);V(H(d,C(98)),b);Bi(c,N(d));K(c);}
function ADS(b,c,d){return AQ2(0,b.data.length,b,c,c+d|0,0);}
function Oy(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BC;i=new M;O(i);V(H(V(H(i,C(99)),g),C(100)),f);Bi(h,N(i));K(h);}if(Cb(a)<d){j=new Mw;Y(j);K(j);}if(d<0){j=new BC;k=new M;O(k);H(V(H(k,C(101)),d),C(102));Bi(j,N(k));K(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.hZ.data[m+a.na|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BC;d=b.length;k=new M;O(k);BL(V(H(V(H(k,C(103)),c),C(97)),d),41);Bi(j,N(k));K(j);}
function KM(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.nx){b=new JB;Y(b);K(b);}e=d-c|0;if(Cb(a)<e){b=new Ir;Y(b);K(b);}if(c>J(b)){f=new BC;d=J(b);b=new M;O(b);BL(V(H(V(H(b,C(104)),c),C(97)),d),41);Bi(f,N(b));K(f);}if(d>J(b)){f=new BC;c=J(b);b=new M;O(b);V(H(V(H(b,C(105)),d),C(106)),c);Bi(f,N(b));K(f);}if(c>d){b=new BC;f=new M;O(f);V(H(V(H(f,C(104)),c),C(107)),d);Bi(b,N(f));K(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;TR(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function Kw(){var a=this;Hv.call(a);a.lW=0;a.mG=null;a.zh=null;}
function ADF(b,c,d){var e,f,g;e=b.data;f=new YS;g=e.length;d=c+d|0;XO(f,g);ANg();f.zh=AZN;f.lW=0;f.mG=b;f.Z=c;f.dS=d;f.zl=0;f.ok=0;return f;}
function YT(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.ok){e=new JB;Y(e);K(e);}if(Cb(a)<d){e=new Ir;Y(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BC;j=new M;O(j);V(H(V(H(j,C(108)),h),C(100)),g);Bi(i,N(j));K(i);}if(d<0){e=new BC;i=new M;O(i);H(V(H(i,C(101)),d),C(102));Bi(e,N(i));K(e);}h=a.Z;k=h+a.lW|0;l=0;while(l<d){b=a.mG.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BC;d=b.length;i=new M;O(i);BL(V(H(V(H(i,C(103)),c),C(97)),d),41);Bi(e,N(i));K(e);}
function Pq(a){a.Z=0;a.dS=a.nq;a.h8=(-1);return a;}
function H9(){B.call(this);this.Ai=null;}
var AZC=null;var AZB=null;var AZA=null;function HD(){HD=Bq(H9);AOO();}
function AGE(a){var b=new H9();AFs(b,a);return b;}
function AFs(a,b){HD();a.Ai=b;}
function AOO(){AZC=AGE(C(109));AZB=AGE(C(110));AZA=AGE(C(111));}
var Oc=G(Cz);
function AOE(a){}
function AM5(a,b,c){}
function CP(){var a=this;Cz.call(a);a.gl=null;a.t=null;}
function FT(a,b){var c,d,e;Eu(a,b);a.gl=AB$(0,0,64);c=new V0;c.ci=new Bf;c.em=CM(R(EF,0));c.dG=new Bf;c.vE=new Bf;c.xO=new B_;c.xP=new B_;c.c6=b.bf;d=b.b0;c.i$=d;c.cN=Sk(d);d=b.m.lj;e=new RT;e.s6=c;Ba(d,e);d=b.m.kp;e=new RR;e.w$=c;Ba(d,e);a.t=c;Ba(b.m.b$,new Tx);b=b.m.b$;c=a.t;BP(c);d=new Tw;d.pq=c;Ba(b,d);}
function FM(a){FB(a.bd.bf,a.gl);}
function G1(a,b,c){var d,e,f,g,h;a:{d=a.t;Cx(d.ci,b);e=d.b4;if(e!==c){d.b4=c;f=(Cs(d.em)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].g$(e,c);h=h+1|0;}}}}
var P_=G(0);
var KF=G(0);
function AG3(a){a.jp(KB());}
function KQ(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IG;c=new Ja;d=new HF;ALA();Kt(d,AZO);M2(c,d,BO(AZP),BO(AZQ),BO(AZR),BO(AZP),BO(AZS),BO(AZT),BO(AZU),BO(AZV),BO(AZW),BO(AZX));AFr();e=(AZY.fq()).data;f=e.length;g=R(Jx,f);h=g.data;i=0;while(i<f){h[i]=e[i].kW;i=i+1|0;}j=AEY(S(C(112)),S(C(113)),S(C(114)),S(C(115)));k=new IN;l=new I1;AIb();m=AZZ;M6(l,m,AZ0,AZ1,AZ2,AZ3,m);Mc(k,l,AFZ(),AGS(S(C(116)),S(C(117)),S(C(118))),AFZ(),AAt(1,0.17499999701976776),AZ4,AZ5);JH(b,c,g,j,k,AAI(S(C(119)),S(C(120)),S(C(121)),S(C(122))));a.jp(b);}
function ADW(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IG;c=new Ja;d=new HF;AFN();Kt(d,AZ6);M2(c,d,BO(AZ7),BO(AZ8),BO(AZ9),BO(AZ7),BO(AZ$),BO(AZ_),BO(A0a),BO(A0b),BO(A0c),BO(A0d));AEQ();e=(A0e.fq()).data;f=e.length;g=R(Jx,f);h=g.data;i=0;while(i<f){h[i]=e[i].l4;i=i+1|0;}j=AEY(S(C(123)),S(C(124)),S(C(125)),S(C(126)));k=new IN;l=new I1;AIt();m=A0f;M6(l,m,A0g,A0h,A0i,A0j,m);Mc(k,l,AGp(),AGS(S(C(127)),S(C(128)),CQ(0)),AGp(),AAt(1,0.07500000298023224),A0k,A0l);JH(b,c,g,j,k,AAI(S(C(129)),S(C(130)),S(C(131)),S(C(132))));a.jp(b);}
var KI=G(0);
function Km(){var a=this;CP.call(a);a.F=null;a.E=null;a.ez=null;a.hD=0;a.gi=null;a.jf=null;a.xa=null;}
function AXK(a){var b=new Km();ACU(b,a);return b;}
function ACU(a,b){var c,d,e;FT(a,b);c=new RS;c.dj=new Bf;c.e1=new Bf;c.i5=new Bf;c.i6=new Bf;c.i3=new Bf;c.i4=new Bf;a.jf=c;a.xa=TM();c=ASK(a.t);a.ez=c;a.F=AC3(a.t,c);a.E=AC3(a.t,a.ez);c=a.F;c.bS=1;d=new Wx;d.wq=a;e=new Wy;e.r3=a;Yg(c,d,d);Yg(a.E,e,e);c=a.F;d=new Wz;d.oy=a;c.jg=d;d=a.E;e=new Ws;e.vm=a;d.jg=e;Pa(a.t,c);Ba(b.m.bz,a.ez);Ba(b.m.dC,a.ez);Ba(b.m.dC,a);Ba(b.m.bz,a);c=b.m.b$;d=new Wu;d.rH=a;Ba(c,d);c=b.m.b$;d=new Iz;e=new Wv;e.oc=a;N0(d,b,e);Ba(c,d);Ba(b.m.f8,a);Ba(b.m.gH,a);b=b.m.eZ;c=new Ww;c.tI=
a;Ba(b,c);KQ(a);}
function AAj(a,b){if(a.F===b)a.hD=a.hD|1;if(a.E===b)a.hD=a.hD|2;if((a.hD&3)==3)AGD(a);}
function AUu(a,b,c){if(D$(a.t,a.F))return Hm(a.F,b,c);if(!D$(a.t,a.E))return 0;return Hm(a.E,b,c);}
function ADw(a){if(D$(a.t,a.F))return ZR(a,a.F);if(!D$(a.t,a.E))return null;return ZR(a,a.E);}
function ZR(a,b){var c;c=new WE;c.rQ=b;return c;}
function Xo(a,b,c){var d,e,f,g,h,i,j;d=a.gi;if(d!==null&&d.gt!==null){e=b!==a.F?0:1;f=FQ(b);g=(Hi(b)+f|0)/2|0;h=g-f|0;d=a.gi;d=d.gt.data[Gp(d,g,e)];i=g-(!e?d.is:d.it)|0;j=b.bo-W(f,b.R)|0;c.bo=LX(W(((!e?d.it:d.is)+i|0)-h|0,c.R)+j|0,H5(c));return;}}
function AGD(a){var b,c,d,e,f,g;Bt(Bz(),C(133));b=a.F.e;c=a.E.e;d=ER(b.f);e=ER(c.f);f=ABM(b.f);g=ABM(c.f);b=a.bd.b0;c=new Z6;c.s_=a;CU(b,c,C(134),I(B,[d,f,e,g]));}
function ARH(a,b){var c,d;c=LH(a.F,b);d=LH(a.E,b);return !c&&!d?0:1;}
function AOT(a){FM(a);JE(a.F);JE(a.E);AG5(a.jf,a.gi,a.t,a.F,a.E,a.xa,a.ez.Y);Z1(a.ez);}
function AMW(a){return MW(0);}
function ASv(a){OP(a.F);OP(a.E);}
function AOJ(a){ZZ(a.F);ZZ(a.E);}
function ATC(a,b){PC(a.F,b);PC(a.E,b);}
function AN6(a,b,c){G1(a,b,c);AD9(a,b,c);}
function AD9(a,b,c){var d,e,f,g,h,i;d=new Bf;e=Cc(20.0,c);f=new Bf;g=b.b/2|0;h=e/2|0;Ri(f,g-h|0,b.a);JT(a.F,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;JT(a.E,d,f,c);U(a.jf.dj,f.b,d.a);U(a.jf.e1,d.b-f.b|0,f.a);}
function AIv(a,b){BP(b);NT(a.ez,b);KL(a.F,b);KL(a.E,b);}
function AGk(a,b){if(b.bl!=121)return 0;return 1;}
function ADE(a,b){var c,d,e;if(D$(a.t,a.F)){c=a.ez;d=a.F;e=new Qi;e.nV=a;MR(c,b,d,a,a,e);}if(D$(a.t,a.E)){c=a.ez;d=a.E;e=new Qh;e.w2=a;MR(c,b,d,a,a,e);}return 1;}
function AQJ(a,b){var c,d;c=DR(a.F,b.i)&&Pd(a.F,b)?1:0;d=DR(a.E,b.i)&&Pd(a.E,b)?1:0;return !c&&!d?0:1;}
function AMZ(a,b,c,d){var e,f;e=DR(a.F,b.i)&&NR(a.F,b,c,d)?1:0;f=DR(a.E,b.i)&&NR(a.E,b,c,d)?1:0;return !e&&!f?0:1;}
function AO4(a,b,c){var d,e,f,g,h,i,j,k;d=DR(a.F,b.i);e=DR(a.E,b.i);f=a.t;g=f.ev;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.E?0:1;if(d&&!(!h&&!k))F3(f,i);if(e&&!(!h&&!j))F3(a.t,a.E);if(d){i=Ny(a.F,b,c);if(i!==null)return i;}return !e?null:Ny(a.E,b,c);}
function ARy(a,b,c){var d,e,f,g;d=DR(a.F,b.i);e=DR(a.E,b.i);f=d&&UO(a.F,b,c)?1:0;g=e&&UO(a.E,b,c)?1:0;return !f&&!g?0:1;}
function AQ7(a,b,c,d){var e,f,g,h;e=DR(a.F,b.i);f=DR(a.E,b.i);g=e&&Kr(a.F,c,d)?1:0;h=f&&Kr(a.E,c,d)?1:0;return !g&&!h?0:1;}
function ANR(a){return ADw(a);}
var Xq=G(Km);
function APg(a){return MW(1);}
function Ql(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new NC;d=d.then(Bl(e,"f"));f=new NF;f.s$=b;f.s9=c;g=new ND;d.then(Bl(f,"f"),Bl(g,"f"));}
var AGy=G();
function ATA(b){var c,d;if(J(b)>0){c=new M;O(c);H(H(c,C(135)),b);$rt_globals.console.info($rt_ustr(N(c)));}a:{d=(-1);switch(IU(b)){case -1570047148:if(!Bn(b,C(136)))break a;d=16;break a;case -1509980539:if(!Bn(b,C(137)))break a;d=12;break a;case -1073555521:if(!Bn(b,C(138)))break a;d=13;break a;case -1045861099:if(!Bn(b,C(139)))break a;d=17;break a;case -1045861098:if(!Bn(b,C(140)))break a;d=18;break a;case -811765794:if(!Bn(b,C(141)))break a;d=5;break a;case -785237654:if(!Bn(b,C(142)))break a;d=10;break a;case -631889171:if
(!Bn(b,C(143)))break a;d=8;break a;case -439438829:if(!Bn(b,C(144)))break a;d=19;break a;case -223304637:if(!Bn(b,C(145)))break a;d=2;break a;case 2129957:if(!Bn(b,C(146)))break a;d=1;break a;case 3343967:if(!Bn(b,C(147)))break a;d=9;break a;case 3556498:if(!Bn(b,C(148)))break a;d=4;break a;case 485517998:if(!Bn(b,C(149)))break a;d=6;break a;case 544901384:if(!Bn(b,C(150)))break a;d=3;break a;case 1030621992:if(!Bn(b,C(151)))break a;d=15;break a;case 1465713255:if(!Bn(b,C(152)))break a;d=7;break a;case 1554501643:if
(!Bn(b,C(153)))break a;d=14;break a;case 1609169232:if(!Bn(b,C(154)))break a;d=11;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Xw;break b;case 3:case 4:b=new Xt;break b;case 5:b=new Xs;break b;case 6:b=new Xv;break b;case 7:b=new Xu;break b;case 8:case 9:b=new XA;break b;case 10:b=new Xz;break b;case 11:b=new XC;break b;case 12:b=new XB;break b;case 13:b=new UC;break b;case 14:b=new UB;break b;case 15:b=new UA;break b;case 16:b=new Uu;break b;case 17:b=new Ut;break b;case 18:b=new Ur;break b;case 19:b
=new Uq;break b;default:b=new Up;break b;}b=new Xx;}return b;}
var ADP=G();
var KG=G(LF);
function ADu(){var a=this;KG.call(a);a.nx=0;a.na=0;a.hZ=null;}
function AQ2(a,b,c,d,e,f){var g=new ADu();AVO(g,a,b,c,d,e,f);return g;}
function AVO(a,b,c,d,e,f,g){XO(a,c);a.Z=e;a.dS=f;a.na=b;a.nx=g;a.hZ=d;}
function TR(a,b,c){a.hZ.data[b+a.na|0]=c;}
function Lr(){var a=this;B.call(a);a.x3=null;a.rl=null;a.zE=0.0;a.nK=0.0;a.mQ=null;a.l3=null;a.jq=0;}
function Mn(){var a=this;B.call(a);a.g8=0;a.i2=0;}
var AZE=null;var AZD=null;function ABo(a,b){var c=new Mn();AB7(c,a,b);return c;}
function AB7(a,b,c){a.g8=b;a.i2=c;}
function IR(a){return a.g8?0:1;}
function Hz(a){return a.g8!=1?0:1;}
function Li(a){return !Ss(a)&&!MJ(a)?0:1;}
function Ss(a){return a.g8!=2?0:1;}
function MJ(a){return a.g8!=3?0:1;}
function KP(a){var b;if(Li(a))return a.i2;b=new D9;Y(b);K(b);}
function Eb(b){return ABo(2,b);}
function WY(a){var b,c;switch(a.g8){case 0:b=new R4;Y(b);K(b);case 1:b=new Zh;Y(b);K(b);case 2:b=new WO;c=a.i2;Y(b);b.AF=c;K(b);case 3:b=new RP;c=a.i2;Y(b);b.Ax=c;K(b);default:}}
function ACz(){AZE=ABo(0,0);AZD=ABo(1,0);}
var AA_=G();
var I0=G(0);
var Om=G();
function ALC(a,b){return b.arrayBuffer();}
var Ol=G();
function AP5(a,b){var c,d;c=new QL;d=new QJ;return $rt_globals.WebAssembly.instantiate(b,AND(Bl(c,"f"),Bl(d,"f")));}
var Oj=G();
function AQQ(a,b){AJl(b);}
var Oi=G();
function AJ3(a,b){AGI(b);}
function Vg(){B.call(this);this.oG=null;}
function AU4(a,b){LV(a.oG.F,b);}
function Vh(){B.call(this);this.up=null;}
function ANX(a,b){LV(a.up.E,b);}
var Xx=G();
function ATU(a,b){return AXK(b);}
var Xw=G();
function AH9(a,b){return AXU(b);}
var Xt=G();
function AK$(a,b){return AYl(b);}
var Xs=G();
function AP3(a,b){var c,d,e;c=new Pk;FT(c,b);d=new NE;d.mJ=new Bf;d.nn=new Bf;c.rk=d;c.ee=ADR();c.c8=ADR();c.ey=R8(c.t);Ba(c.t.em,c);d=b.m.b$;e=new Vz;e.us=c;Ba(d,e);Ba(b.m.bz,c);b=b.m.eZ;d=new Vv;d.v1=c;Ba(b,d);AAg(c.c8);c.nE=EV(C(155),25.0);JD(c.ey,Hh(),c.nE);BI(c.gl,CQ(43));b=Hh();Ik(c.ee,b);Ik(c.c8,b);b=c.ee;b.kb=new Vw;d=c.c8;d.kb=new Vx;d.lv=new PY;d.nQ=new PZ;KR(b,(SO(0)).jJ);KR(c.c8,(SO(0)).jJ);return c;}
var Xv=G();
function ALe(a,b){var c,d,e;c=new Us;FT(c,b);c.lh=EV(C(156),15.0);d=AEw();c.fi=d;Ba(c.t.em,d);Ba(c.t.em,c);BI(c.gl,CQ(43));d=R8(c.t);c.iF=d;JD(d,Hh(),EV(C(155),25.0));d=b.m.b$;e=new Xl;e.yl=c;Ba(d,e);d=b.m.eZ;e=new Xn;e.v2=c;Ba(d,e);Ba(b.m.bz,ACs(c.iF));Ba(b.m.bz,c.fi);b=b.m.dC;d=c.fi;BP(d);e=new Xm;e.r5=d;Ba(b,e);return c;}
var Xu=G();
function AHo(a,b){var c,d,e;c=new Or;FT(c,b);c.g2=BJ();c.fR=BJ();c.qr=S(C(157));c.iX=ATg();c.g1=0;d=c.t.em;e=new NU;e.qc=c;Ba(d,e);Ba(b.m.bz,c);d=b.m.b$;e=new NS;e.wu=c;Ba(d,e);b=HT(b.bf,C(155),35);c.i8=b;c.ku=ABb(Fg(b));BI(c.gl,S(C(158)));return c;}
var XA=G();
function AKM(a,b){var c,d,e,f;c=new Uo;Eu(c,b);c.g4=AGH();c.er=0;c.uO=500;c.qs=H6(0,0,0,255,new B_);c.kP=20;c.o5=20;c.tY=KB();d=b.m.bz;e=new N8;e.jB=c;f=new Wr;f.tP=e;e.qe=f;Ba(d,e);d=b.m.dC;e=new Ty;e.uY=c;Ba(d,e);c.eM=b.bf;c.pH=Sk(b.b0);S9(c.g4,HT(c.eM,C(155),c.o5),c.kP,c.eM);c.iv=I$();return c;}
var Xz=G();
function AOs(a,b){var c,d;c=new R5;GM(c,b);b=b.m.b$;d=new Rm;d.rV=c;Ba(b,d);return c;}
var XC=G();
function ASx(a,b){return AYc(b);}
var XB=G();
function AHB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new NP;GM(c,b);c.ep=FW(0,0,300,300);c.fW=UV(0,0,3,3);d=b.bf;b=b.m.bz;e=new VK;e.lA=c;Ba(b,e);b=AG2(d);c.vr=b;Gb(c.ep,b);GF(c.ep);b=c.ep.bx;FX();BI(b,A0m);BI(c.ep.bn,CR(204,120,50));AEk();e=AZM;f=D7((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CZ(d);AA0();switch(AZH.data[e.dg]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b
=new EB;Y(b);K(b);}b:{Oe(m,5,5,h);b=m.es.dP;switch(AZH.data[e.dg]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new EB;Y(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.mn=m;U(c.fW.s,BS(m),Da(c.mn));BI(c.fW.bx,c.mT);return c;}
var UC=G();
function AH0(a,b){var c,d,e;c=new Ui;GM(c,b);c.gk=FW(0,0,300,300);c.kJ=new Bf;c.jC=new Bf;c.il=new Bf;d=b.bf;b=b.m.bz;e=new PB;e.jr=c;Ba(b,e);b=AG2(d);c.oT=b;Gb(c.gk,b);GF(c.gk);b=c.gk.bx;FX();BI(b,A0m);BI(c.gk.bn,CR(204,120,50));return c;}
var UB=G();
function AN4(a,b){var c,d,e,f;c=new Ua;Eu(c,b);c.z$=20;c.Az=11;c.xU=220;c.kf=new Bf;c.zt=5000;c.hx=1;c.ga=I(HF,[CQ(0),CQ(255)]);c.eu=b.bf;d=b.m.bz;e=new Rj;e.jP=c;f=new XQ;f.sL=e;e.ov=f;Ba(d,e);b=b.m.dC;d=new Z8;d.pM=c;Ba(b,d);b=CO(c.eu,200,220);c.kQ=b;Gn(b,C(155),20.0);b=CO(c.eu,200,20);c.fZ=b;Gn(b,C(155),20.0);c.h2=I$();return c;}
var UA=G();
function APD(a,b){var c,d,e;c=new Js;GM(c,b);Ba(b.m.bz,c);d=b.m.b$;e=new YL;e.nO=c;Ba(d,e);Ba(b.m.f8,new YK);d=b.m.f8;e=new YJ;e.q$=c;Ba(d,e);Ba(b.m.gH,new YH);d=b.m.gH;e=new YM;e.ts=c;Ba(d,e);b=!ZC(b.b0)?C(159):C(160);d=new M;O(d);H(H(d,C(161)),b);$rt_globals.console.info($rt_ustr(N(d)));return c;}
var Uu=G();
function ALH(a,b){var c,d,e,f,g,h;c=new TS;Eu(c,b);c.t7=CQ(20);c.gd=FW(0,0,300,300);d=b.m.b$;e=new Tv;e.Ar=c;Ba(d,e);b=b.bf;d=HT(b,C(10),88);CC(b.cR,d);f=Dl(AUy(EA(b.cR,C(162)),EA(b.cR,C(163))));g=KH(d,1.1799999475479126);h=Bz();e=new M;O(e);V(H(V(H(e,C(164)),f),C(165)),g);Bt(h,N(e));e=CO(b,f,g*3|0);c.hR=e;CC(e,d);Ch(c.hR,C(162),0.0,d.ds);Ch(c.hR,C(163),0.0,g+d.ds);Ch(c.hR,C(166),0.0,(g*2|0)+d.ds);b=CZ(b);c.lL=b;CS(b,c.hR);Gb(c.gd,c.lL);GF(c.gd);b=c.gd.bx;FX();BI(b,A0m);BI(c.gd.bn,A0n);return c;}
var Ut=G();
function AHJ(a,b){var c;c=new U$;Ne(c,b);Hu(c.cj,0,0,300,300);U(c.da,300,300);return c;}
var Ur=G();
function AT2(a,b){var c;c=new U9;Ne(c,b);c.fw=new Bf;c.gf=new Bf;U(c.d3,150,140);U(c.da,500,100);U(c.e6,150,200);U(c.et,500,250);return c;}
var Uq=G();
function AOF(a,b){var c,d,e,f;c=new Y7;FT(c,b);c.pT=EV(C(156),20.0);d=AEw();c.ew=d;Ba(c.t.em,d);Ba(c.t.em,c);BI(c.gl,CQ(43));d=R8(c.t);c.hV=d;JD(d,Hh(),EV(C(155),25.0));d=b.m.b$;e=new ZW;e.zv=c;Ba(d,e);d=b.m.eZ;e=new ZY;e.rS=c;Ba(d,e);Ba(b.m.bz,ACs(c.hV));Ba(b.m.bz,c.ew);d=b.m.bz;e=c.t.cN;f=new T_;f.u5=e;Ba(d,f);b=b.m.dC;d=c.ew;BP(d);e=new ZX;e.vC=d;Ba(b,e);return c;}
var Up=G();
function ASz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=new Nr;AG6(c,b);d=c.cZ;e=new Jt;f=ARn(C(167));g=R(BA,8);h=J(C(168));i=0;j=0;k=h+1|0;while(true){l=G8(C(168),10,j);m=l>=0?Cg(C(168),j,l):Do(C(168),j);n=i+1|0;g=AFE(m,g,i);j=l<0?k:l+1|0;if(j>h)break;i=n;}Zy(e,QX(g,n),C(169),f);LV(d,e);return c;}
function HB(){var a=this;B.call(a);a.bP=0;a.cp=0;a.de=0;a.jI=0;}
function A0o(a,b,c,d){var e=new HB();VT(e,a,b,c,d);return e;}
function VT(a,b,c,d,e){a.bP=d;a.cp=b;a.de=c;a.jI=e;}
function QD(){var a=this;HB.call(a);a.d_=null;a.bl=0;a.ih=0;a.tp=0;a.k4=0;}
var AFS=G();
function X7(b,c){return (b+(c/2|0)|0)/c|0;}
function RB(b,c,d){if(b<(2147483647/c|0))return X7(W(b,c),d);return 0.5+c*b/d|0;}
function Jd(b,c){return ((b+c|0)-1|0)/c|0;}
function HN(b){return b+0.5|0;}
function Dl(b){return b+0.5|0;}
function EG(b,c,d){return Bd(b,Bb(c,d));}
function Nh(){var a=this;HB.call(a);a.i=null;a.xS=null;}
var VH=G(0);
function OW(){var a=this;B.call(a);a.wz=null;a.wA=null;}
function AN9(a,b){var c,d;c=a.wz;d=a.wA;$rt_globals.console.info("paste plain string "+b);c.g(FP(b));Dm(d);}
function Wm(){B.call(this);this.xd=null;}
function X2(a,b){a.xd.clipboardData.setData("text/plain",$rt_ustr(b));}
function YS(){var a=this;Kw.call(a);a.zl=0;a.ok=0;}
function RS(){var a=this;B.call(a);a.dj=null;a.e1=null;a.i5=null;a.i6=null;a.i3=null;a.i4=null;}
function AG5(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;h=c.c6;i=a.dj;Bx(h,i.b,i.a,a.e1,g.b7.fg);if(b!==null&&b.gt!==null){j=CF(c,2.0);k=Gp(b,FQ(d),1);l=Gp(b,Hi(d),1);m=Gp(b,FQ(e),0);n=Gp(b,Hi(e),0);o=Bb(k,m);p=Bd(l,n);n=BF(o,p);if(n<=0)Cw(h,1);while(o<=p){q=b.gt.data[o];if(q.lc){k=d.R;r=W(k,q.it)-d.bo|0;s=r+W(q.nl,k)|0;k=e.R;t=W(k,q.is)-e.bo|0;u=t+W(q.nk,k)|0;U(a.i5,a.dj.b,r);U(a.i3,a.dj.b,s);U(a.i6,a.dj.b+a.e1.b|0,t);U(a.i4,a.dj.b+a.e1.b|0,u);v=Bd(Bb(r,t),a.dj.a);w=Bb(Bd(s,u),a.dj.a+a.e1.a|0);Hu(f,
a.dj.b,v,a.e1.b,w-v|0);BI(f.bx,g.ho.hh);BI(f.bn,IY(g.dW,g,q.lc));if(r==s){x=c.dG;U(x,a.dj.b-d.ba.b|0,j);if(t>=r){i=a.i3;U(i,i.b,i.a+j|0);k=r;}else{k=r-j|0;i=a.i5;U(i,i.b,i.a-j|0);}Bx(h,d.ba.b,k,x,f.bn);}if(t==u){i=c.dG;U(i,e.cz.b,j);if(r>=t){x=a.i4;U(x,x.b,x.a+j|0);}else{t=t-j|0;x=a.i6;U(x,x.b,x.a-j|0);}Bx(h,a.dj.b+a.e1.b|0,t,i,f.bn);}i=f.A;AAq(h,i.b,i.a,f.s,a.i5,a.i6,a.i3,a.i4,f.bn);}o=o+1|0;}if(n<=0)Cw(h,0);return;}}
function Jq(){var a=this;B.call(a);a.A=null;a.s=null;a.bn=null;a.bx=null;}
function TM(){var a=new Jq();Wq(a);return a;}
function UV(a,b,c,d){var e=new Jq();AJX(e,a,b,c,d);return e;}
function Wq(a){a.A=new Bf;a.s=new Bf;a.bn=new B_;a.bx=new B_;}
function AJX(a,b,c,d,e){a.A=new Bf;a.s=new Bf;a.bn=new B_;a.bx=new B_;Hu(a,b,c,d,e);}
function Hu(a,b,c,d,e){U(a.A,b,c);U(a.s,d,e);}
function UU(a){U(a.s,0,0);}
function KY(a){var b;b=a.s;return W(b.b,b.a)?0:1;}
function Eq(a,b){return Gu(b,a.A,a.s);}
function S2(a,b,c,d){var e;e=a.A;Bx(b,e.b+c|0,e.a+d|0,a.s,a.bn);}
function ZV(a,b,c,d,e,f){var g,h,i,j;g=a.A;d=g.b+d|0;e=g.a+e|0;g=a.s;h=a.bx;i=a.bn;IS(b,b.ig);JA(b.ig,b.bs,d,e,g,b.dI);VO(b.ig,b.bs,c);g=b.ig;j=b.bs;G6(j,g.xh,h);G6(j,g.xf,i);c=g.rE;j.uniform2f(c,f,0.0);IL(b);}
function ADC(){var a=this;B.call(a);a.eD=null;a.eJ=null;a.dn=null;a.cg=null;a.Y=null;}
function ASK(a){var b=new ADC();AQ4(b,a);return b;}
function AQ4(a,b){a.eJ=AEw();a.eD=b;a.cg=R8(b);}
function NT(a,b){var c;a.Y=b;c=a.dn;if(c!==null)c.e7=b.U;JD(a.cg,b.U,b.wl);}
function Z1(a){LL(a.eJ,a.eD.c6);HV(a.cg);}
function AQO(a,b){return !AAH(a.eJ,b)&&!Ly(a.cg,b)?0:1;}
function AUm(a,b,c,d){return !ABK(a.eJ,b,c,d)&&!Ku(a.cg,b,c,d)?0:1;}
function ARY(a,b,c){var d;d=MZ(a.cg,b,c);if(d!==null)return d;return ADx(a.eJ,b,c);}
function AOe(a,b,c){return !AGN(a.eJ,b,c)&&!DD(a.cg)?0:1;}
function SE(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.e;h=ANh();i=c.j;j=0;while(j<i){if(f===null){k=(Br(c,j)).by;l=Tn(Fb(BV(g.f,k)));m=Ug(g.gK);}else{n=f.data;k=n[j].mf.l0;l=!B2(g.gK,n[j].jS)?C(30):Tn(Fb(BV(g.f,k)));m=Ug(n[j].jS);}if(J(l)>153){o=Cg(l,0,150);n=new M;O(n);H(H(n,o),C(170));l=N(n);}if(J(m)>153){o=Cg(m,0,150);n=new M;O(n);H(H(n,o),C(170));m=N(n);}p=C8(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Br(c,j);}if(f!==null){q=new Za;q.re=d;q.rf=o;}else{q=new Zb;q.wD=d;q.wC=n;}Nc(h,
m,p,l,q);j=j+1|0;}r=Yu(h);if(a.dn!==null)UL(a);c=new Sa;n=a.eD;o=new P7;o.u7=a;o.u6=d;AGi(c,n,o);OG(c,r);d=a.Y;AAh(c,d.U,d.w0);a.dn=AAN(a.eD);d=AAs(c,a.eD);n=a.Y.U;AAa(d,n.lp,n.k5);KX(a.dn,d);d=a.dn;n=new M;O(n);H(H(n,C(171)),e);Ip(d,N(n),a.Y.vA,4.0);d=a.dn;d.e7=a.Y.U;HS(a.eJ,d);d=a.dn;s=(d.T.r.a+CF(d.bC,2.0)|0)+CF(a.eD,2.0)|0;i=(c.dR+c.eA|0)+c.gr|0;t=CF(c.cx,5.0);e=B$(EG(t,b.b,c.cx.ci.b-i|0),EG(s,b.a,c.cx.ci.a-c.c0.a|0));Q_(c);AB1(c);s=(c.dR+c.eA|0)+c.gr|0;b=c.cx;i=(b.ci.b-e.b|0)-CF(b,5.0)|0;b=c.cx;t=(b.ci.a
-e.a|0)-CF(b,5.0)|0;d=B$(Bb(s,i),Bb(c.c0.a,t));FF(a.dn,e,d);F3(a.eD,c);}
function UL(a){JW(a.eJ,a.dn);LN(a.dn);a.dn=null;}
function So(a,b){var c;c=new Th;c.qH=a;c.qI=b;return c;}
function MR(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(!DD(a.cg)){g=a.cg;h=b.i;b=new UN;b.W=a;b.bJ=c;b.pp=f;b.iK=e;b.kz=d;i=UR();e=b.bJ.e;d=DX(e);e=Gv(e);f=b.bJ.fj;if(Si(f,d,e)!==null){j=b.W.Y.U.bg;k=new VM;k.u2=b;k.u3=h;D2(i,C(172),j,k);}if(MM(f,d,e)!==null){j=b.W.Y.U.bg;k=new VN;k.u9=b;k.u$=h;D2(i,C(173),j,k);}if(VI(f,d,e)!==null){e=b.W.Y.U.bg;f=new VL;f.sX=b;f.sW=h;D2(i,C(174),e,f);}e=b.W.Y.U.bg;f=new VJ;f.rs=b;f.rr=h;D2(i,C(175),e,f);if(!b.bJ.ei){e=b.W.Y.U.bg;f=new Vl;f.pm=b;D2(i,C(176),e,f);}e=b.W.Y.U.bg;f
=new Vj;f.sQ=b;D2(i,C(177),e,f);if(!b.bJ.ei&&ZC(IH(b))){e=b.W.Y.U.bg;f=new Vk;f.vz=b;D2(i,C(178),e,f);}l=b.W.Y.U.bg;d=UR();m=b.W.Y.U.bg;n=R(C$,3);o=n.data;k=b.kz;BP(k);e=new X4;e.tx=k;o[0]=DL(C(179),m,e);k=b.W.Y.U.bg;p=b.kz;BP(p);e=new X3;e.p1=p;o[1]=DL(C(180),k,e);e=b.W.Y.U.bg;j=b.kz;BP(j);k=new X6;k.rp=j;o[2]=DL(C(181),e,k);Kk(d,C(182),m,F$(n),A0p);f=b.W.Y.U.bg;n=R(C$,2);o=n.data;k=b.iK;BP(k);j=new Zf;j.wa=k;o[0]=DL(C(183),f,j);j=b.W.Y.U.bg;k=b.iK;BP(k);p=new Ze;p.ry=k;o[1]=DL(C(184),j,p);GO(d,C(185),f,F$(n));f
=b.W.Y.U.bg;j=new Pj;j.va=b;Kk(d,C(186),f,j,A0p);GO(i,C(187),l,IF(d));k=b.W.Y.U.bg;d=UR();GO(d,C(188),b.W.Y.U.bg,ADf(b));f=b.W.Y.U.bg;m=new AAb;m.p2=b;D2(d,C(189),f,m);GO(i,C(190),k,IF(d));GD(g,h,IF(i),So(a,c));}}
function ASn(a,b,c,d){return LG(a.eJ,b,c,d);}
function ABY(b){var c;c=new UT;c.we=b;return c;}
var H3=G(0);
function APU(a){}
function ALP(a){}
function ACO(){var a=this;B.call(a);a.ba=null;a.cz=null;a.cE=null;a.V=null;a.j9=null;a.xy=0;a.nu=null;a.c3=null;a.u=0;a.y=0;a.ia=0;a.mx=0;a.gq=0;a.kl=null;a.fO=null;a.cH=null;a.R=0;a.e=null;a.eF=null;a.fj=null;a.q=null;a.hd=null;a.dY=null;a.kH=null;a.hc=null;a.vI=0;a.tj=0;a.cT=0;a.ck=0;a.ct=0;a.fu=null;a.fm=null;a.fo=null;a.bo=0;a.dy=0;a.hJ=0;a.iN=0;a.iT=0;a.AJ=0;a.yc=0;a.kt=0;a.jN=0;a.d$=0;a.df=null;a.kj=0;a.i0=0;a.fe=null;a.ei=0;a.bS=0;a.h3=null;a.hi=null;a.xY=null;a.iH=null;a.sk=null;a.ui=null;a.jg=null;a.lK
=0;a.xG=null;a.ft=E9;a.pE=null;a.vo=null;}
function AC3(a,b){var c=new ACO();ARu(c,a,b);return c;}
function ARu(a,b,c){var d,e,f,g;a.ba=new Bf;a.cz=new Bf;a.xy=0;a.nu=R(Bk,10);a.c3=AMs();a.gq=16;a.kl=C(155);a.cH=R(LE,4);d=new Jt;e=new K_;e.dM=IJ();e.dp=IJ();e.gR=BJ();e.z=VA(C(30));e.h1=0;e.cK=0;e.c7=VB(e);e.d1=AR0();d.f=e;d.j0=C(191);d.gK=null;a.e=d;f=new Zm;f.qP=CM(R(KV,0));f.xv=CM(R(KV,0));f.oi=CM(R(Uv,0));f.wf=CM(R(RE,0));f.vH=CM(R(FS,0));f.vj=CM(R(TV,0));a.fj=f;a.q=AI2();e=new VS;e.e8=R(Lx,16);e.e2=0;e.dA=(-1);a.hd=e;a.hc=R(EQ,0);a.fu=B$(1,0);a.fm=I$();a.fo=I$();a.bo=0;a.dy=0;a.hJ=0;a.iT=1;a.kt=1;a.jN
=1;a.d$=3;a.df=AGH();a.fe=C(192);a.ei=0;a.bS=0;a.h3=null;a.hi=BJ();e=E$();BP(e);f=new O8;f.zP=e;a.iH=f;a.xG=new B_;e=new O7;e.n0=a;a.pE=e;e=new O6;e.si=a;a.vo=e;a.cE=b;a.V=b.c6;a.j9=c;g=a.nu.data;b=new O5;b.vS=a;g[0]=b;b=new Pb;b.pv=a;g[1]=b;b=new O_;b.tA=a;g[2]=b;b=new O$;b.xD=a;g[3]=b;b=new O9;b.ph=a;g[4]=b;b=new O4;b.sO=a;g[5]=b;AH3();a.iN=A0q===A0r?0:1;}
function JT(a,b,c,d){Cx(a.ba,b);Cx(a.cz,c);Uk(a,b,c,d);}
function Yg(a,b,c){a.sk=b;a.ui=c;}
function Uk(a,b,c,d){var e;a.cT=Cc(80.0,d);a.ck=Cc(1.0,d);a.ct=Cc(10.0,d);if(!a.bS)Cx(a.cE.dG,a.ba);else U(a.cE.dG,(b.b+c.b|0)-JM(a)|0,b.a);TI(a.df,a.cE.dG,JM(a),c.a,d);b=a.c3;e=Cc(2.0,d);b.eC.s.b=e;SD(a,a.kl,a.gq);Wa(a);}
function ALD(a){a.mx=1;L4(a);}
function AIz(a){a.mx=0;}
function L4(a){Rp(a.c3,J8(Ct(a)));}
function KL(a,b){var c,d;a.dY=b;c=a.c3;d=b.b7.xu;BI(c.eC.bn,d);c=a.fm;d=b.b7;Hl(c,d.lZ,d.l8);c=a.fo;b=b.b7;Hl(c,b.lZ,b.l8);}
function OP(a){JL(a,a.fO.no,a.gq+1|0);}
function ZZ(a){var b;b=a.gq;if(b<=7)return;JL(a,a.fO.no,b-1|0);}
function PC(a,b){JL(a,b,a.gq);}
function JL(a,b,c){if(a.cE.b4!==0.0){SD(a,b,c);Gq(Ct(a));}a.gq=c;a.kl=b;}
function SD(a,b,c){var d,e,f,g,h,i;d=Cc(c,a.cE.b4);e=a.fO;f=e!==null?e.qA:0;if(!(d==f&&B2(b,a.kl))){Qu(a.df);g=a.hc.data;c=g.length;f=0;while(f<c){ZF(g[f]);f=f+1|0;}g=a.e.f.z.data;c=g.length;f=0;while(f<c){Ev(g[f]);f=f+1|0;}g=a.cH.data;c=HO(0,0);e=a.V;h=d;g[c]=Hk(e,b,h,400,0);a.cH.data[HO(0,1)]=Hk(a.V,b,h,400,2);a.cH.data[HO(1,0)]=Hk(a.V,b,h,700,0);a.cH.data[HO(1,1)]=Hk(a.V,b,h,700,2);e=a.cH.data[HO(0,0)];a.fO=e;c=Fg(e);a.R=Dl(c*1.25);a.c3.eC.s.a=Fg(a.fO);a.kH=CK(a.kH,CO(a.V,1024,a.R));f=a.R;i=Y2(a.c3);e=new M;O(e);b
=H(H(e,C(193)),b);BL(b,32);V(H(V(H(V(H(V(b,d),C(194)),c),C(165)),f),C(195)),i);$rt_globals.console.info($rt_ustr(N(e)));if(A0s){c=Ln(a.fO,a.R);b=new M;O(b);V(H(b,C(196)),c);$rt_globals.console.info($rt_ustr(N(b)));}a.ia=GQ(FC(a),a.y,a.V.cR,a.cH);Hq(a);Wa(a);}}
function Ng(a){return W(CB(a.e.f)+5|0,a.R);}
function H5(a){return Bd(Ng(a)-a.cz.a|0,0);}
function UP(a){return Bd(a.hJ-Dk(a)|0,0);}
function Dk(a){var b;b=!a.bS?0:C9(a)+a.ct|0;return Bd(1,(a.cz.b-a.cT|0)-b|0);}
function JM(a){return a.bS?a.cT:a.cT-a.ct|0;}
function DP(a){return a.cz.a;}
function LH(a,b){var c,d,e;c=a.e.f;d=c.h1;e=c.cK;d=d!=e&&b-c.tJ>0.03125?1:0;if(d&&a.lK!=e){a.lK=e;S0(a);}d=LX((a.bo+a.AJ|0)-a.yc|0,H5(a));e=a.bo==d?0:1;if(e)FU(a,d);return !US(a.c3,b)&&!e&&!a.xy?0:1;}
function FU(a,b){var c,d;c=LX(b,H5(a));if(c!=a.bo){a.bo=c;d=a.ui;if(d!==null)d.iZ(c);}}
function Jg(a,b){var c,d;c=LX(b,UP(a));if(c!=a.dy){a.dy=c;d=a.sk;if(d!==null)d.iZ(c);}}
function JE(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;b=Jd(a.cz.a,a.R)+7|0;c=a.hc;if(c.data.length<b)a.hc=ACF(b,c,a.vI,a.tj,a.e.f);Cw(a.V,0);Te(a.V,a.ba,a.cz);d=(a.R-Y2(a.c3)|0)/2|0;e=(a.ia-(UJ(a.c3)/2|0)|0)-a.dy|0;f=!a.bS?a.cT:(a.ck+a.ct|0)+C9(a)|0;WX(a.c3,f+e|0,(d+W(a.u,a.R)|0)-a.bo|0);g=CB(a.e.f);h=FQ(a);i=Hi(a);a.vI=h;a.tj=i;j=a.cE.dG;U(j,Dk(a),a.R);k=!a.bS?a.ba.b+a.cT|0:((a.ba.b+a.ck|0)+a.ct|0)+C9(a)|0;l=h;while(l<=i&&l<g){m=BV(a.e.f,l);n=Xe(a,l);ABF(n,m,a.kH,a.cH,a.V,a.R,Dk(a),a.dy);o=n.b6;a.hJ
=Bd(a.hJ,E5(m)+(40.0*a.cE.b4|0)|0);p=W(a.R,l)-a.bo|0;c=a.eF;q=c===null?null:c.data[l];b=a.ba.a+p|0;m=a.V;r=a.xG;s=!a.iN?0.0:0.5;d=Dk(a);f=a.R;p=a.dy;t=a.dY;u=AEJ(a.q,l);if(u!==null){if(u.a==(-1))u.a=o.M;u.b=GQ(o,u.b,a.V.cR,a.cH);u.a=GQ(o,u.a,a.V.cR,a.cH);}AFk(n,b,k,m,r,j,s,d,f,p,t,u,a.h3,a.hi,a.u!=l?0:1,a.eF===null?0:1,q);l=l+1|0;}l=h;while(l<=i&&l<g&&a.kt){n=Xe(a,l);p=W(a.R,l)-a.bo|0;v=AFR(a.q,l);m=a.dY;q=m.b7;r=q.rF;w=a.u==l&&a.eF===null?1:0;a:{if(v)r=q.nr;else{c=a.eF;if(c!==null){c=c.data;if(l<c.length&&
c[l]!==null){r=IY(m.dW,m,c[l].gx);break a;}}if(w)r=q.i7;}}ABV(n,a.V,k,a.ba.a+p|0,a.R,j,a.dy,Dk(a),r);l=l+1|0;}if(a.iT){x=Bb(i+1|0,g);AD0(a,W(a.R,x)-a.bo|0);}AE8(a);AEa(a,h,i);if(a.jN)AG1(a,h,i,g);if(a.mx&&e>=(( -UJ(a.c3)|0)/2|0)){n=a.c3;m=a.cz;if(ABz(n.eC.A,0,0,m))Wp(a.c3,a.V,a.ba);}AEF(a);ADG(a);Hp(a.V);}
function AG1(a,b,c,d){var e,f,g,h,i,j,k,l;while(b<=c&&b<d){a:{e=a.eF;if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dY;h=IY(h.dW,h,g.gx);}else h=e!==null?a.dY.b7.fg:a.dY.b7.i7;if(!(a.u!=b&&g===null)){a.fu.b=!a.bS?(a.ct-a.ck|0)-a.d$|0:((a.ct+C9(a)|0)+a.ck|0)-a.d$|0;i=a.fu;j=a.R;i.a=j;k=a.bS?0:(a.cT-a.ct|0)+a.ck|0;j=W(j,b)-a.bo|0;g=a.V;l=a.ba;Bx(g,l.b+k|0,l.a+j|0,i,h);}b=b+1|0;}}
function AEa(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.cz.a;e=Bb(d,W(CB(a.e.f),a.R)-a.bo|0);f=a.df;g=a.bo;h=a.eF===null?a.u:(-1);i=a.V;j=a.dY;Te(i,f.fT,f.fd);LJ(f,i,b,d);U6(f,b);UG(f,g,e,j,i);k=j.ho;if(e<d){l=f.fT;Bx(i,l.b,l.a+e|0,B$(f.fd.b,d-e|0),k.hh);}if(b<=h&&h<=c){m=j.ho;c=h/20|0;l=f.cJ;j=Br(l,c%l.j|0);k=f.fT;e=W(f.cJ.j,f.jU);b=j.fb.a;d=((j.kq.a-(g%e|0)|0)+e|0)%e|0;if((d+b|0)>e)d= -(g%Da(j.bq)|0)|0;b=h%j.d9|0;c=j.O;d=d+W(b,c)|0;if(d<( -c|0))d=d+e|0;U(j.dU,j.fb.b,c);f=j.eK;b=h%j.d9|0;c=j.O;Cv(f,0.0,W(b,c),j.fb.b,
c);ET(j,i,d,k,m.pI,m.n5);}Hp(i);}
function FQ(a){return Bb(a.bo/a.R|0,CB(a.e.f)-1|0);}
function Hi(a){return Bb(((a.bo+DP(a)|0)-1|0)/a.R|0,CB(a.e.f)-1|0);}
function Wa(a){S9(a.df,a.cH.data[0],a.R,a.V);LJ(a.df,a.V,FQ(a),DP(a));}
function Xe(a,b){var c;c=a.hc.data;return c[b%c.length|0];}
function AGV(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(!Dq(a.q))Dv(a,a.fe);else{b=D1(a.q);c=FI(a.q);d=c.P;e=b.P;f=(d-e|0)+1|0;g=BM(f);h=g.data;i=R(BA,f);j=i.data;k=0;while(e<=d){h[k]=e;f=k+1|0;j[k]=a.fe;e=e+1|0;k=f;}l=Du(a.u,a.y);m=new YY;m.nP=a;PI(a,g,0,0,i,l,m);b.bh=b.bh+J(a.fe)|0;c.bh=c.bh+J(a.fe)|0;Mo(a,a.y+J(a.fe)|0,0);Ef(a);}return 1;}
function AAx(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(!Dq(a.q)){b=BV(a.e.f,a.u);if(b.p.data.length>0){c=Yd(a,b);if(c===null)return 1;d=a.e.f;e=a.u;f=Du(e,a.y);d.cK=d.cK+1|0;g=d.gR;h=R(He,1);h.data[0]=ATo(e,0,1,c,f.by,f.bH);BH(g,h);KO(d,e,0,1,c);GI(b,0,J(c));Mo(a,a.y-J(c)|0,0);}}else{f=D1(a.q);c=FI(a.q);i=c.P;j=f.P;i=(i-j|0)+1|0;k=BM(i);h=k.data;l=R(BA,i);m=l.data;e=a.y;n=a.u;o=0;while(j<=c.P){b=BV(a.e.f,j);if(b.p.data.length>0){b=Yd(a,b);if(b!==null){h[o]=j;i=o+1|0;m[o]=b;o=i;}}j=j+1|0;}p=MV(k,o);h=Dp(l,o);i
=0;while(i<o){m=h.data;k=p.data;b=m[i];j=k[i];if(j==f.P)f.bh=Bd(0,f.bh-J(b)|0);if(j==c.P){c.bh=Bd(0,c.bh-J(b)|0);Mo(a,a.y-J(b)|0,0);}i=i+1|0;}f=Du(n,e);b=new X5;b.vy=a;PI(a,p,0,1,h,f,b);}Ef(a);return 1;}
function Yd(a,b){var c,d,e,f;c=EG(0,J(a.fe),Ox(b));if(!c)b=null;else{b=C(62);if(c<0){b=new BD;Y(b);K(b);}if(c!=1){d=b.b_.data.length;if(d&&c){e=BU(W(d,c));d=0;f=0;while(f<c){RA(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=M3(e);}else b=AYW;}}return b;}
function PI(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BM(i);k=AYp(i).data;H0(j,c);c=0;l=k.length;if(c>l){f=new BD;Y(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.e.f;o.cK=o.cK+1|0;p=R(He,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ATo(h[m],n[m],k[m],b[m],f.by,f.bH);m=m+1|0;}BH(o.gR,p);c=0;while(c<i){b=e.data;KO(o,h[c],n[c],k[c],b[c]);g.ny(Dh(h[c]),b[c]);c=c+1|0;}}
function AF5(a){var b,c,d,e,f,g,h,i;if(Dq(a.q))GL(a);Ev(BV(a.e.f,a.u));b=a.e.f;c=a.u;d=a.y;e=b.z;f=e.data;g=f[c];e=Dp(e,f.length+1|0);f=e.data;b.z=e;h=f.length-1|0;while(true){i=h-1|0;if(i<=c)break;f[h]=f[i];h=h+(-1)|0;}if(!d){f[c]=DS(R(Ce,0));b.z.data[c+1|0]=g;}else if(d==g.M){f[c]=g;f[c+1|0]=DS(R(Ce,0));}else{f=(Is(g,d)).data;e=b.z.data;e[c]=f[0];e[c+1|0]=f[1];}FH(b,c,d,0,C(197));Ef(a);return CE(a,a.u+1|0,0,0);}
function AG8(a){if(Dq(a.q))GL(a);else NL(a.e.f,a.u,a.y);Hq(a);Ef(a);return 1;}
function ADv(a){var b,c,d;if(Dq(a.q)){GL(a);return 1;}b=a.y;if(!b&&!a.u)return 1;if(b){c=a.u;b=b-1|0;NL(a.e.f,c,b);}else{c=a.u-1|0;b=FY(a.e.f,c);d=a.e.f;LM(d,c);FH(d,c,FY(d,c),1,C(197));}Ef(a);return CE(a,c,b,0);}
function Dv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.ei)return 0;if(Dq(a.q))GL(a);c=MG(WI(b,C(198),C(30)),C(197),(-1));d=c.data;b=a.e.f;e=a.u;f=a.y;AAe(b,e,f,c);g=d.length;if(!g)h=AYW;else{i=0;j=0;while(j<g){i=i+J(d[j])|0;j=j+1|0;}k=BU(i+W(g-1|0,J(C(197)))|0);c=k.data;l=0;h=d[0];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=1;while(n<g){j=0;while(j<J(C(197))){m=l+1|0;c[l]=P(C(197),j);j=j+1|0;l=m;}h=d[n];j=0;while(j<J(h)){m=l+1|0;c[l]=P(h,j);j=j+1|0;l=m;}n=n+1|0;}h=M3(k);}FH(b,e,f,0,h);e=a.u;m=(e+g|0)-1|
0;CE(a,m,m!=e?J(d[g-1|0]):a.y+J(d[0])|0,0);FN(a);Ef(a);return 1;}
function GL(a){var b,c,d;b=D1(a.q);c=a.e.f;d=a.q;N2(c,d,XV(c,d));CE(a,b.P,b.bh,0);FN(a);Ef(a);}
function FN(a){var b;b=a.q;b.dm=0;B7(b.b1,a.u,a.y);B7(a.q.bL,a.u,a.y);}
function C9(a){return a.fO.m$|0;}
function AD0(a,b){var c,d;c=a.cz.a;if(b<c){d=a.cE.dG;d.a=c-b|0;d.b=!a.bS?Dk(a)+a.d$|0:Dk(a)+a.ck|0;c=!a.bS?(a.ba.b+a.cT|0)-a.d$|0:(((a.ba.b+a.ct|0)+C9(a)|0)+a.ck|0)-a.d$|0;Bx(a.V,c,a.ba.a+b|0,d,a.dY.b7.fg);}}
function AEF(a){var b;b=a.bS?a.ba.b+C9(a)|0:a.ba.b+a.cz.b|0;Jr(a.fm,a.bo,a.ba.a,DP(a),Ng(a),b,C9(a));b=!a.bS?a.ba.b+a.cT|0:((a.ba.b+a.ck|0)+a.ct|0)+C9(a)|0;Sm(a.fo,a.dy,b,Dk(a),a.hJ,a.ba.a+DP(a)|0,C9(a));}
function ADG(a){var b,c;b=SI(a.fm);c=SI(a.fo);if(!(!b&&!c)){Cw(a.V,1);if(b)GP(a.fm,a.V);if(c)GP(a.fo,a.V);if(b)GY(a.fm,a.V);if(c)GY(a.fo,a.V);}}
function AE8(a){var b,c,d,e;b=a.fu;c=a.cz;b.a=c.a;b.b=a.ck;d=!a.bS?a.cT-a.ct|0:(c.b-JM(a)|0)-a.ck|0;b=a.V;c=a.ba;Bx(b,c.b+d|0,c.a,a.fu,a.dY.b7.uv);a.fu.b=!a.bS?(a.ct-a.ck|0)-a.d$|0:((a.ct+C9(a)|0)+a.ck|0)-a.d$|0;e=a.bS?0:(a.cT-a.ct|0)+a.ck|0;b=a.V;c=a.ba;Bx(b,c.b+e|0,c.a,a.fu,a.dY.b7.fg);}
function LX(b,c){return Bb(Bd(0,b),c);}
function IM(a,b){var c,d,e,f,g,h,i;b=b.data;$rt_globals.console.info("onFileParsed");a.kj=1;a.i0=1;c=Dy(b[0]);d=EE(b[1]);e=(Dy(b[2])).data[0];if(b.length<5)AFq(a.e.f,c,d);else{f=Dy(b[3]);g=EE(b[4]);ABi(a.e.f,c,d,f,g,0);Ii(a);}Wi(a,ADi(e));GT(Ct(a),A0t);Gq(Ct(a));h=Iy(Ez(),a.ft);i=new M;O(i);H(GH(H(i,C(199)),h),C(200));$rt_globals.console.info($rt_ustr(N(i)));i=a.jg;if(i!==null)i.g(a);}
function Ii(a){var b,c,d,e,f,g;b=Ez();c=a.e.f;if(c.gE===null)Q9(c);c=a.e.f;d=c.d1;BP(c);e=new WC;e.rP=c;f=d.eP;if(f!==null){c=new Pg;c.iI=d;c.o6=e;UE(d,f,c);}g=Ez();c=Bz();b=Iy(g,b);d=new M;O(d);H(GH(H(d,C(201)),b),C(202));Bt(c,N(d));}
function Wi(a,b){var c,d;c=DX(a.e);if(!B2(c,b)){d=new M;O(d);H(H(H(H(d,C(203)),c),C(204)),b);$rt_globals.console.info($rt_ustr(N(d)));a.e.j0=b;}}
function Ct(a){return a.cE.i$;}
function JK(a,b){var c,d,e,f,g,h;c=EL(b);d=new M;O(d);H(H(d,C(205)),c);$rt_globals.console.info($rt_ustr(N(d)));OA(Ct(a),EL(b));CE(a,0,0,0);a.ft=Ez();a.kj=0;a.i0=0;a.eF=null;L9(a.df,null);e=new Jt;f=R(BA,1);f.data[0]=C(30);AEO(e,f,AWs(C(30),C(30),EL(b),null));a.e=e;CE(a,0,0,0);c=EL(b);g=Gl(c,46,J(c)-1|0);if(g!=(-1))c=Do(c,g);h=!Bn(c,C(206))?5120:10240;c=new TO;c.ql=a;c.qm=h;c.qn=b;d=b.fJ;if(d!==null)LW(c,Ki(b,d.size));else{d=b.hn.getFile();e=new UX;e.nH=b;e.nI=c;b=new U0;b.wL=c;d.then(Bl(e,"f"),Bl(b,"f"));}}
function Ia(a,b,c,d,e){if(Iq(a,e))return 1;if(c&&d)return 1;if(c)FU(a,a.bo+((W(b,a.R)*12|0)/10|0)|0);else if(!d){HR(a,a.u+b|0,e);VC(a);}return 1;}
function Tt(a,b,c,d){var e,f,g;if(Iq(a,d))return 1;e=FC(a);if(!c)f=a.y+b|0;else if(b>=0)f=Ha(e,a.y);else{f=a.y;if(!f)f=(-1);else{c=Jm(e,f);if(c>0&&e.d6.data[c-1|0]==f)c=c+(-1)|0;f=c<=0?0:e.d6.data[c-1|0];}}if(f>e.M){if((a.u+1|0)<CB(a.e.f))CE(a,a.u+1|0,0,d);}else if(f>=0)Dg(a,f,d);else{b=a.u;if(b>0){g=(BV(a.e.f,b-1|0)).M;CE(a,a.u-1|0,g,d);}}XG(a);return 1;}
function Iq(a,b){if(Dq(a.q)&&!b){FN(a);Hq(a);return 1;}if(!(b&&Dq(a.q)))FN(a);return 0;}
function CE(a,b,c,d){a.y=c;return HR(a,b,d);}
function HR(a,b,c){a.u=EG(0,b,CB(a.e.f)-1|0);return Dg(a,a.y,c);}
function Dg(a,b,c){a.y=EG(0,b,(FC(a)).M);a.ia=a.cE.b4===0.0?0:GQ(FC(a),a.y,a.V.cR,a.cH);L4(a);Hq(a);if(c)a.q.dm=1;L5(a.q,a.u,a.y);a.q.dm=0;return 1;}
function Mo(a,b,c){var d;d=QW(a.q);Dg(a,b,c);a.q=d;}
function Hq(a){VC(a);XG(a);}
function VC(a){var b,c,d,e,f;b=a.bo;c=b+DP(a)|0;d=a.u;e=a.R;d=W(d,e);f=d+e|0;if(d<(b+e|0))FU(a,d-e|0);else if(f>(c-e|0))FU(a,(f-DP(a)|0)+a.R|0);}
function XG(a){var b,c,d,e,f;b=Dl(a.cE.b4*30.0);c=a.dy;d=c+Dk(a)|0;e=a.ia;f=e+b|0;if(e<(c+b|0))Jg(a,e-b|0);else if(f>(d-b|0))Jg(a,(f-Dk(a)|0)+b|0);}
function Z_(a){var b;LK(a,Du(a.u,a.y),Ho(a.e.f,a.u,a.y));if(!(a.h3!==null&&!D8(a.hi))){b=a.y;if(b>0)LK(a,Du(a.u,b-1|0),Ho(a.e.f,a.u,a.y-1|0));}}
function LK(a,b,c){var d,e,f,g,h,i,j,k,l;Uw(a);d=a.e.f;e=Cl(d.dM,c);if(e!==null)c=e;a:{f=Cl(d.dp,c);if(f!==null){a.h3=Mj(d,c);c=BW(f);while(true){if(!BX(c))break a;g=B0(c);BH(a.hi,Mj(d,g));}}}h=b.by;i=b.bH;b=a.fj;c=DX(a.e);d=Gv(a.e);j=(Cs(b.wf)).data;k=j.length;l=0;b:{while(l<k){b=j[l];if(b.wi(c,d)){d=b.Ay;break b;}l=l+1|0;}d=null;}if(d!==null){g=a.e;c=new NA;c.zb=a;c.zd=g;c.y_=h;c.za=i;d.tc(g,h,i,c,a.iH);}}
function ID(a,b){var c;CE(a,b.by,b.bH,0);c=Ha(FC(a),a.y);B7(a.q.bL,a.u,c);B7(a.q.b1,a.u,a.y);}
function EW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.ba;e=c-d.b|0;f=EG(0,((b.a-d.a|0)+a.bo|0)/a.R|0,CB(a.e.f)-1|0);g=!a.bS?a.cT:(a.ck+a.ct|0)+C9(a)|0;h=Bd(0,(e-g|0)+a.dy|0);b=BV(a.e.f,f);d=a.V.cR;i=a.cH;if(!(b.eN!==null&&!b.gs))Lb(b,d,i);j=b.eN;e=b.p.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.M;else{c=Vp(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.p.data.length)k=b.M;else{j=TB(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.p.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];g=l[c];m=0;a:{while(true){i=j.data;if
(m>=i.length){c=g;break a;}c=i[m];if(h<c)break;k=k+1|0;m=m+1|0;g=c;e=c;}}if(A0u){d=new M;O(d);V(H(V(H(V(H(d,C(207)),e),C(208)),h),C(209)),c);$rt_globals.console.info($rt_ustr(N(d)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(c-h|0))k=k+1|0;}}}return Du(f,k);}
function ZI(a,b){var c;c=b.by;a.u=c;a.y=b.bH;a.ia=GQ(BV(a.e.f,c),a.y,a.V.cR,a.cH);L4(a);}
function FC(a){return BV(a.e.f,a.u);}
function Kr(a,b,c){var d,e;d=Dl((a.R*4|0)*c/150.0);e=Dl(b);if(d)FU(a,a.bo+d|0);if(e)Jg(a,a.dy+e|0);return 1;}
function UO(a,b,c){a.q.dm=0;return 1;}
function Ny(a,b,c){var d,e,f;if(c)return null;d=FE(a.fm,b.i,a.pE,1);if(d!==null)return d;d=FE(a.fo,b.i,a.vo,0);if(d!==null)return d;Jl(a);e=EW(a,b.i);f=Ho(a.e.f,e.by,e.bH);ZI(a,e);LK(a,e,f);if(!b.bP){b=a.q;if(!b.dm)B7(b.b1,a.u,a.y);}b=a.q;b.dm=1;L5(b,a.u,a.y);b=new Zc;b.vF=a;return b;}
function NR(a,b,c,d){var e,f,g,h,i,j;a:{if(!c){switch(d){case 1:if(b.cp){b=b.i;e=EW(a,b);f=Ho(a.e.f,e.by,e.bH);g=Uy(a,f);h=MM(a.fj,DX(a.e),Gv(a.e));if(h!==null){f=a.e;c=e.by;d=e.bH;e=new Yy;e.y6=a;e.y7=b;e.y5=g;h.tc(f,c,d,e,a.iH);}else{e=Cl(a.e.f.dM,f);if(e!==null){ID(a,e);c=1;}else{e=Cl(a.e.f.dp,f);if(e!==null&&!D8(e)){if(e.j!=1){SE(a.j9,b,e,a,g);c=1;}else{ID(a,Br(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(EW(a,b.i)).by;e=BV(a.e.f,c);c=Gh(e,a.y);d=Ha(e,a.y);b=MD(e,c);if((d-1|0)==e.M){B7(a.q.b1,a.u,Ox(e));B7(a.q.bL,
a.u,e.M);}else{if(b!==null){b=b.v;i=0;c:{while(true){j=b.b_.data;if(i>=j.length)break;if(j[i]!=32){i=0;break c;}i=i+1|0;}i=1;}if(i){i=a.y;if(c==i){c=Gh(e,c-1|0);d=Ha(e,c);}else{if(d!=i){Rk(a.q,a.u);break b;}c=Gh(e,d+1|0);d=Ha(e,c);}}}B7(a.q.b1,a.u,c);a.q.dm=1;CE(a,a.u,d,0);a.q.dm=0;Jl(a);}}break a;case 3:break;default:break a;}Rk(a.q,a.u);Tc(a.hd);Jl(a);}}return 1;}
function Pd(a,b){var c,d,e,f,g,h,i,j,k;c=a.cE.cN;if(FR(a.fm,b.i,c))return 1;if(FR(a.fo,b.i,c))return 1;d=a.df;if(Gu(b.i,d.fT,d.fd)&&Ge(c)?1:0)return 1;e=b.i;f=!a.bS?a.ba.b+a.cT|0:((a.ba.b+a.ct|0)+a.ck|0)+C9(a)|0;a:{g=a.ba.a;h=Dk(a);i=DP(a);j=e.b;if(f<=j&&j<(f+h|0)){k=e.a;if(g<=k&&k<(g+i|0)){k=1;break a;}}k=0;}if(!k)return Ge(c);if(b.cp){e=EW(a,b.i);e.bH=Gh(BV(a.e.f,e.by),e.bH);b=a.e.f;if(!Gm(b.dM,e)&&!Gm(b.dp,e)?0:1)return DE(c,C(210));}return DE(c,C(191));}
function AUG(a,b){var c,d,e,f;c=b.cp;if(c&&b.bl==65){c=CB(a.e.f)-1|0;d=FY(a.e.f,c);B7(a.q.b1,0,0);B7(a.q.bL,CB(a.e.f)-1|0,d);return 1;}if(c&&b.bl==80){Jy(a);return 1;}if(!a.ei&&c&&b.bl==90){if(Dq(a.q))FN(a);b=a.e.f;b.cK=b.cK+1|0;e=b.gR;d=e.j;if(!d)e=null;else{f=(Ey(e,d-1|0)).data;e=Ok(b,f[0]);c=1;while(c<f.length){Ok(b,f[c]);c=c+1|0;}}if(e!==null){CE(a,e.b,e.a,0);Ef(a);}return 1;}if(!c&&!b.de){if(Bn(b.d_,C(211))){Dv(a,C(212));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.d_,C(213))){Dv(a,C(214));Dg(a,a.y-1|0,0);c=1;}else if
(Bn(b.d_,C(43))){Dv(a,C(215));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.d_,C(216))){Dv(a,C(217));Dg(a,a.y-1|0,0);c=1;}else if(Bn(b.d_,C(218))){Dv(a,C(219));Dg(a,a.y-1|0,0);c=1;}else if(!Bn(b.d_,C(220)))c=0;else{Dv(a,C(221));Dg(a,a.y-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.de&&!b.cp)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.nu.data[c];if(e!==null)e.o();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c=0;break b;}c=1;}if(c)return 1;if
(ADB(a,b))return 1;if(a.ei)c=0;else c:{switch(b.bl){case 8:break;case 9:c=!b.bP?AGV(a):AAx(a);break c;case 13:c=AF5(a);break c;case 46:c=AG8(a);break c;default:c=0;break c;}c=ADv(a);}if(c)return 1;if(b.cp&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!AMI(b.bl)&&b.bl!=27){if(!b.cp&&!b.de&&!b.jI)return J(b.d_)>0&&Dv(a,b.d_)?1:0;return 0;}return 0;}
function UH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(Bn(C(169),DX(a.e))){b=Ct(a);c=new Po;c.uy=a;d=R(B,3);e=d.data;e[0]=ER(a.e.f);f=FQ(a);g=Hi(a);h=Bd(0,f-100|0);f=Bb(CB(a.e.f)-1|0,g+100|0);i=BM(3);j=i.data;j[0]=E4(a.e.f,h);k=a.e.f;l=0;f=Bb(f+1|0,k.z.data.length);m=0;while(m<f){l=l+FY(k,m)|0;if(m!=(k.z.data.length-1|0))l=l+1|0;m=m+1|0;}j[1]=l;j[2]=h;e[1]=i;n=a.e.f.c7;k=BJ();Nf(n,n.dX,k);i=BM(3*k.j|0);o=i.data;p=0;m=0;g=o.length;while(p<g){q=Br(k,m);h=p+1|0;o[p]=q.bZ;l=h+1|0;o[h]=q.b3;p=l+1|0;o[l]=q.ff;m=m+
1|0;}e[2]=i;CU(b,c,C(222),d);}}
function Jy(a){var b,c,d,e;b=AB_(DX(a.e));if(b===null){b=a.jg;if(b!==null)b.g(a);}else{a.ft=Ez();c=Ct(a);d=new Wo;d.pD=a;e=R(B,1);e.data[0]=ER(a.e.f);CU(c,d,b,e);}}
function S0(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=DX(a.e);if(b!==null&&!Bn(C(191),b)){c=a.e.f.c7;d=WB(c,c.dX);if(d===null){Ii(a);return;}a:{e=El([C1(d),C6(d),d.bY.ff]);f=ER(a.e.f);g=BM(1);h=(-1);switch(IU(b)){case 3401:if(!Bn(b,C(223)))break a;h=3;break a;case 98723:if(!Bn(b,C(224)))break a;h=2;break a;case 3254818:if(!Bn(b,C(169)))break a;h=1;break a;case 3556653:if(!Bn(b,C(191)))break a;h=0;break a;default:}}b:{switch(h){case 0:break;case 1:i=1;break b;case 2:i=2;break b;case 3:i=3;break b;default:i=(-1);break b;}i
=0;}g.data[0]=i;c=a.e.f.d1;if(c.eP===null){j=BM(0);k=BU(0);}else{c:{l=AKd(d.dw,c.dH);m=new Zk;m.ex=l;m.oY=d;m.bV=AJv();b=new M;O(b);m.h4=b;m.fp=IJ();b=new Ud;n=AF_(16);b.f0=0;b.dQ=R(H_,n);b.pY=0.75;Xr(b);m.f$=b;b=new XF;c=m.bV;d=m.h4;l=m.fp;b.dE=c;b.kI=d;b.rO=l;m.mk=b;b=new Xi;b.cQ=c;b.lU=d;b.qC=l;m.ms=b;b=Kz(m.ex.dH);c=b.hs;if(c.cU>0){n=c.cS;i=0;d:while(true){j=b.hs.ce.data;if(i>=j.length)break c;c=j[i];while(c!==null){d=c.cI;if(Gm(m.fp,d))Cl(m.fp,d);else{l=m.fp;F1(l,d,Dh(l.cU));}c=c.cO;if(n!=b.hs.cS)break d;}i
=i+1|0;}b=new Ht;Y(b);K(b);}}b=m.ex.eP;if(b!==null)SU(m,b);Bs(m.bV,m.ex.dH.cU);b=TP(Kz(m.ex.dH));while(Fi(b)){c=QB(b);G0(m.bV,m.h4.I,J(c));BT(m.h4,c);}ADY(m);AC5(m);AEC(m.oY,m.bV,m.f$);m.rq=RL(m.bV);k=Fx(N(m.h4));m.AU=k;j=m.rq;}b=Ct(a);d=new ZM;d.p6=a;CU(b,d,C(225),I(B,[f,g,e,j,k]));}else OR(a.e.f);}
function Hm(a,b,c){var d,e,f,g,h,i;if(c&&a.ei)return 0;d=D1(a.q);e=d.P;if(Dq(a.q)){f=a.e.f;g=a.q;h=XV(f,g);if(c)N2(f,g,h);if(c){CE(a,d.P,d.bh,0);FN(a);Ef(a);}}else{h=Fp(Fb(a.e.f.z.data[e]),C(197));i=Bb(CB(a.e.f)-1|0,e);B7(a.q.bL,i,0);if(e>=(CB(a.e.f)-1|0))B7(a.q.bL,i,FY(a.e.f,i));else B7(a.q.b1,i+1|0,0);if(c)GL(a);else CE(a,e,0,0);}b.g(h);return 1;}
function ADB(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cp?HR(a,Jd(a.bo,a.R),b.bP):Ia(a,2-X7(DP(a),a.R)|0,0,b.de,b.bP);break a;case 34:c=!b.cp?Ia(a,X7(DP(a),a.R)-2|0,0,b.de,b.bP):HR(a,((a.bo+DP(a)|0)/a.R|0)-1|0,b.bP);break a;case 35:if(!Iq(a,b.bP)&&!Dg(a,(FC(a)).M,b.bP)){c=0;break a;}c=1;break a;case 36:if(!Iq(a,b.bP)&&!Dg(a,0,b.bP)){c=0;break a;}c=1;break a;case 37:c=b.cp;if(c&&b.de){Jl(a);d=a.hd;e=d.dA;if(e<=0)d=null;else{f=d.e8.data;c=e-1|0;d.dA=c;d=f[c];}if(d===null)c=1;else{CE(a,Mq(d),Kh(d),0);a.q=QW(d.kO);c
=1;}break a;}c=Tt(a,(-1),c,b.bP);break a;case 38:c=Ia(a,(-1),b.cp,b.de,b.bP);break a;case 39:c=b.cp;if(c&&b.de){d=a.hd;c=d.dA;if(c==(d.e2-1|0))d=null;else{f=d.e8.data;c=c+1|0;d.dA=c;d=f[c];}if(d===null)c=1;else{CE(a,Mq(d),Kh(d),0);a.q=QW(d.kO);c=1;}break a;}c=Tt(a,1,c,b.bP);break a;case 40:c=Ia(a,1,b.cp,b.de,b.bP);break a;default:}c=0;}if(c&&b.bP)B7(a.q.bL,a.u,a.y);if(c)Z_(a);return c;}
function Jl(a){var b,c,d,e,f,g,h;b=a.hd;c=b.dA;b=c<0?null:b.e8.data[c];if(b!==null&&a.u==Mq(b)&&a.y==Kh(b))return;d=a.hd;b=new Lx;c=a.u;e=a.y;f=a.q;b.mb=Du(c,e);g=QW(f);b.kO=g;g.dm=0;e=d.dA;h=d.e2;if(e==(h-1|0))Xg(d,b);else{c=e+1|0;while(c<h){Tc(d);c=c+1|0;}Xg(d,b);}d.dA=d.dA+1|0;}
function Ef(a){a.e.f.tJ=J8(Ct(a));}
function LV(a,b){var c,d,e,f,g,h,i;a.xY=null;Uw(a);c=a.e;a.e=b;a.ft=Ez();d=AB_(DX(a.e));if(d!==null){e=Ct(a);f=new S4;f.t9=a;g=R(B,1);g.data[0]=ER(a.e.f);CU(e,f,d,g);}g=(Cs(a.fj.vH)).data;h=g.length;i=0;while(i<h){g[i].ny(c,b);i=i+1|0;}}
function Uw(a){a.h3=null;HZ(a.hi);}
function AB_(b){var c;if(b===null)b=null;else{a:{c=(-1);switch(IU(b)){case 3401:if(!Bn(b,C(223)))break a;c=2;break a;case 98723:if(!Bn(b,C(224)))break a;c=1;break a;case 3254818:if(!Bn(b,C(169)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:b=C(226);break b;case 2:b=C(227);break b;default:b=null;break b;}b=C(228);}}return b;}
function Uy(a,b){var c;c=Mj(a.e.f,b);if(c===null)return C(30);return c.v;}
function DR(a,b){return Gu(b,a.ba,a.cz);}
function Ks(a,b){var c,d,e,f,g;a.eF=b;Bt(Bz(),C(229));b=a.eF;if(b===null){Bt(Bz(),C(230));L9(a.df,null);}else{b=b.data;c=D7(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gx<<24>>24;e=e+1|0;}L9(a.df,c);}}
var If=G(0);
function Wx(){B.call(this);this.wq=null;}
function ANZ(a,b){var c;c=a.wq;Xo(c,c.F,c.E);}
function Wy(){B.call(this);this.r3=null;}
function AIN(a,b){var c;c=a.r3;Xo(c,c.E,c.F);}
function Wz(){B.call(this);this.oy=null;}
function AOb(a,b){AAj(a.oy,b);}
function Ws(){B.call(this);this.vm=null;}
function AO7(a,b){AAj(a.vm,b);}
function Wu(){B.call(this);this.rH=null;}
function AT3(a,b){return AGk(a.rH,b);}
function Iz(){var a=this;B.call(a);a.kY=null;a.ra=null;a.qo=null;}
function A0v(a,b){var c=new Iz();N0(c,a,b);return c;}
function A0w(a,b,c){var d=new Iz();Y$(d,a,b,c);return d;}
function N0(a,b,c){Y$(a,b,null,c);}
function Y$(a,b,c,d){a.kY=b.b0;a.ra=c;a.qo=d;}
function ALS(a,b){var c,d;if(b.cp&&b.bl==79){c=a.ra;if(c!==null&&b.bP)XJ(a.kY,c);else Mz(a.kY,a.qo);d=1;}else d=0;return d;}
function Wv(){B.call(this);this.oc=null;}
function ASO(a,b){var c,d;c=a.oc;d=D$(c.t,c.F)?c.F:!D$(c.t,c.E)?null:c.E;if(d!==null){JK(d,b);c.gi=null;}}
function Ww(){B.call(this);this.tI=null;}
function AKL(a,b){b=b;return ADE(a.tI,b);}
var AEG=G();
var ABs=G(0);
function AB$(b,c,d){return H6(b,c,d,255,new B_);}
function H6(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function YO(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AMj(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bp=g+i;e.bN=h+i;e.bm=j+i;return e;}
function Kb(b,c,d,e,f){f=YO(b,c,d,f);f.bO=e;return f;}
function G5(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function V0(){var a=this;B.call(a);a.c6=null;a.i$=null;a.cN=null;a.ci=null;a.b4=0.0;a.ev=null;a.em=null;a.dG=null;a.vE=null;a.xO=null;a.xP=null;}
function Kc(a){var b;b=a.ev;if(b!==null)b.uo();}
function KK(a){var b;b=a.ev;if(b!==null)b.xC();}
function Pa(a,b){var c;c=a.i$.d5!==(Eh()).activeElement?0:1;if(c)KK(a);a.ev=b;if(c)Kc(a);}
function F3(a,b){KK(a);a.ev=b;Kc(a);}
function D$(a,b){return b!==a.ev?0:1;}
function Jn(a){return a.c6.cR;}
function HH(a,b){return HT(a.c6,b.ko,Cc(b.iP,a.b4));}
function CF(a,b){return Cc(b,a.b4);}
var Tx=G();
function AMu(a,b){var c,d,e;c=b.cp;d=c&&!b.bP&&!b.de&&!b.jI?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bP&&!c&&!b.de&&!b.jI?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.k4=1;}return 0;}
function Tw(){B.call(this);this.pq=null;}
function AJ0(a,b){var c;c=a.pq.ev;return c!==null&&c.hG(b)?1:0;}
function B_(){var a=this;B.call(a);a.bp=0.0;a.bN=0.0;a.bm=0.0;a.bO=0.0;}
function AUo(a){var b=new B_();APX(b,a);return b;}
function Cv(a,b,c,d,e){a.bp=b;a.bN=c;a.bm=d;a.bO=e;}
function APX(a,b){a.bp=b.bp;a.bN=b.bN;a.bm=b.bm;a.bO=b.bO;}
function BI(a,b){a.bp=b.bp;a.bN=b.bN;a.bm=b.bm;a.bO=b.bO;return a;}
function AVu(a,b){if(a===b)return 1;return b!==null&&BG(a)===BG(b)&&K$(a,b)?1:0;}
function K$(a,b){return b.bp===a.bp&&b.bN===a.bN&&b.bm===a.bm&&b.bO===a.bO?1:0;}
var EF=G(0);
function AGL(){B.call(this);this.c2=null;}
function AEw(){var a=new AGL();AR1(a);return a;}
function AR1(a){a.c2=BJ();}
function HS(a,b){S7(a.c2,0,b);}
function JW(a,b){XH(a.c2,b);}
function LL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.c2.j-1|0;while(c>=0){d=Br(a.c2,c);d.S.fH(b);e=d.T;f=d.e7.iO;if(!La(e)){if(!Yc(e)&&!(!e.hQ&&e.dD!==null)){e.hQ=0;WS(e);g=e.eE;h=(g.ds+g.eT+5.0)/10.0;i=CF(e.hK,e.j4);g=b.cR;j=e.eE;k=e.ht;l=h*2.0;CC(g,j);m=i+Ll(g,k,l)|0;e.hu=m;m=EG(0,m,e.r.b);if(m){j=CO(b,m,e.r.a);CC(j,e.eE);g=e.ht;l=i;h=l+h;k=e.eE;n=k.ds;Ch(j,g,h,l+n-(n+k.eT)/16.0);g=e.dD;if(g===null){g=CZ(b);e.dD=g;}CS(g,j);F7(j);Cv(e.k3,0.0,0.0,BS(e.dD),Da(e.dD));}}g=f.tv;j=e.dD;if(j===null)Rc(e,b,0,e.r.b,
g);else{i=BS(j);f=f.v7;j=e.G;m=j.b;o=j.a;j=e.dD;EY(b,m,o,j.f7,e.k3,j,f,g,0.0);m=e.r.b;if(i<m)Rc(e,b,i,m-i|0,g);}}Cw(b,1);i=CF(d.bC,2.0);m=La(d.T);f=d.bC;e=f.dG;f=f.vE;p=m?0:d.T.r.a;g=d.S.r;U(f,g.b,g.a+p|0);ACj(b,f,!m?d.T.G:d.S.G,d.e7.iO.l_, -i|0,e);f=d.S;AEI(b,f.r,f.G,i,p,QQ(d.e7.js,d.bC.b4),d.e7.js.m1,e);c=c+(-1)|0;}}
function AAH(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c2;if(c>=d.j)break;a:{e=Br(d,c);f=b.i;if(DN(e.T,f))g=DE(e.bC.cN,null);else{g=CF(e.bC,7.0);h=CF(e.bC,25.0);if(Px(e,f.b,g)){i=O0(e,f.b,h);if(QZ(e,f.a,g)){g=DE(e.bC.cN,Mr(i,C(231)));break a;}if(OT(e,f.a,g)){g=DE(e.bC.cN,Mr( -i|0,C(231)));break a;}}if(Yi(e,f.a,g)){h=YW(e,f.a,h);if(Z9(e,f.b,g)){g=DE(e.bC.cN,Mr(h,C(232)));break a;}if(NV(e,f.b,g)){g=DE(e.bC.cN,Mr( -h|0,C(232)));break a;}}g=0;}}b:{c:{if(!g){if(!DN(e.S,b.i))break c;if(!e.S.bQ(b)&&!DE(e.bC.cN,null))break c;}g
=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ABK(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.c2;if(e>=f.j)break;a:{b:{g=Br(f,e);if(!DN(g.T,b.i)){if(!DN(g.S,b.i))break b;if(!g.S.cB(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function ADx(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.c2;if(d>=e.j)return null;a:{f=Br(e,d);if(!c){b:{e=b.i;if(!La(f.T)&&DN(f.T,e)){g=f.S.G;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.T.G;i=e.b-i|0;k=e.a-k|0;e=new Bf;g=new O2;g.oL=f;g.oM=i;g.oN=k;g.oO=e;g.oH=h;g.oJ=j;}else{h=CF(f.bC,7.0);i=CF(f.bC,25.0);if(Px(f,e.b,h)){j=O0(f,e.b,i);if(QZ(f,e.a,h)){g=I4(f,e,j,(-1));break b;}if(OT(f,e.a,h)){g=I4(f,e,j,1);break b;}}if(Yi(f,e.a,h)){i=YW(f,e.a,i);if(Z9(f,e.b,h)){g=I4(f,e,(-1),i);break b;}if(NV(f,e.b,h)){g
=I4(f,e,1,i);break b;}}g=null;}}if(g!==null)break a;}g=DN(f.T,b.i)?A0x:f.S.ch(b,c);e=f.S;if(e===null)g=null;else if(g===null)g=!DN(e,b.i)?null:A0x;}if(g!==null)break;d=d+1|0;}return g;}
function AGN(a,b,c){var d,e,f,g;d=0;while(true){e=a.c2;if(d>=e.j)break;a:{b:{f=Br(e,d);if(!DN(f.T,b.i)){if(!DN(f.S,b.i))break b;if(!f.S.c4(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function LG(a,b,c,d){var e,f;e=0;while(true){f=a.c2;if(e>=f.j)break;if((Br(f,e)).S.dc(b,c,d))return 1;e=e+1|0;}return 0;}
function ANH(a,b,c){var d,e,f;d=0;while(true){e=a.c2;if(d>=e.j)break;f=Br(e,d);e=f.S;e.jY(e.G,e.r,c);e=f.T;if(e.hp!==null){e.eE=null;e.hu=0;e.hQ=1;}J4(f);d=d+1|0;}}
function RN(a,b){var c,d,e;c=0;d=0;while(true){e=a.c2;if(d>=e.j)break;Br(e,d);c=0|c;d=d+1|0;}return c;}
function ZK(a,b,c){var d;d=0;while(true){b=a.c2;if(d>=b.j)break;Br(b,d);d=d+1|0;}}
function AF0(){var a=this;B.call(a);a.c5=null;a.cv=null;a.jF=null;a.j8=null;a.im=null;a.ks=null;}
function R8(a){var b=new AF0();ARE(b,a);return b;}
function ARE(a,b){a.cv=BJ();a.ks=A0y;a.c5=b;Ba(b.em,a);}
function JD(a,b,c){a.jF=c;a.im=b;b=BW(a.cv);while(BX(b)){Ik(B0(b),a.im);}}
function GD(a,b,c,d){var e,f;e=a.c5;f=e.ci;if(W(f.b,f.a)&&e.b4!==0.0){if(a.jF!==null&&!DD(a)){a.ks=d;a.j8=HH(a.c5,a.jF);e=PH(a,b,c,null);b=new XE;b.tM=a;e.kb=b;F3(a.c5,a);return;}b=new BD;Y(b);K(b);}c=new CL;Bi(c,C(233));K(c);}
function DY(a){var b;if(DD(a)){b=a.c5;if(b.ev===a)b.ev=null;U_(a,null);a.ks.o();a.ks=A0y;}}
function YR(a,b,c,d,e){var f,g,h;f=ADR();AAg(f);KR(f,c.dO());Ik(f,a.im);Ih(f,a.j8);Hs(f,a.c5);if(d===null)g=b.b;else{g=b.b;g=a.c5.ci.b<((g+(Ej(d)).b|0)+(Ej(f)).b|0)?g-(Ej(f)).b|0:(g+(Ej(d)).b|0)-d.fF|0;}h=b.a;b=a.c5.ci;KJ(f,Bd(0,Bb(g,b.b-(Ej(f)).b|0)),Bd(0,Bb(h,b.a-(Ej(f)).a|0)));b=new ZO;b.s3=a;b.s4=f;b.s5=e;f.lv=b;BH(a.cv,f);return f;}
function PH(a,b,c,d){return YR(a,b,c,d,null);}
function AVe(a,b,c){var d,e;a.j8=HH(a.c5,a.jF);d=BW(a.cv);while(BX(d)){e=B0(d);Ih(e,a.j8);Hs(e,a.c5);}}
function HV(a){var b,c;if(D8(a.cv))return;Cw(a.c5.c6,1);b=0;while(true){c=a.cv;if(b>=c.j)break;MB(Br(c,b),a.c5);b=b+1|0;}}
function Ly(a,b){var c,d;c=0;d=a.cv.j-1|0;a:{while(d>=0){c=LB(Br(a.cv,d),b.i,a.c5.cN);if(c)break a;d=d+(-1)|0;}}return c;}
function Ku(a,b,c,d){var e,f;e=0;f=a.cv.j-1|0;a:{while(f>=0){e=Ms(Br(a.cv,f),b.i,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function MZ(a,b,c){var d,e,f;d=null;e=a.cv.j-1|0;a:{while(e>=0){f=Br(a.cv,e);d=b.i;c=Eq(f.cq,d);if(!c&&!KY(f.cq)){d=f.kb;if(d!==null)d.o();}d=!c?null:A0x;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function AOz(a,b){var c;if(!DD(a))return 0;a:{switch(b.bl){case 27:DY(a);c=1;break a;default:}c=0;}return c;}
function AC8(b,c){var d,e,f;d=b.dx;e=c.cX;f=c.fF;b=new Bf;c=d.A;Ri(b,(c.b-(e*3|0)|0)-f|0,(c.a-e|0)-f|0);return b;}
function U_(a,b){var c,d;c=a.cv.j-1|0;a:{while(true){if(c<0)break a;d=Br(a.cv,c);if(b===d)break;Ey(a.cv,c);OM(d);c=c+(-1)|0;}}}
function DD(a){return a.cv.j<=0?0:1;}
function ACp(){var a=this;B.call(a);a.eC=null;a.lg=0.0;a.hO=0.0;a.gJ=0;}
function AMs(){var a=new ACp();AQX(a);return a;}
function AQX(a){var b;b=UV(0,0,2,20);a.eC=b;a.lg=0.5;a.hO=0.0;H6(187,187,187,255,b.bn);}
function Y2(a){return a.eC.s.a;}
function UJ(a){return a.eC.s.b;}
function US(a,b){var c,d;a:{c=a.gJ;if(b>a.hO)while(true){d=a.hO+a.lg;a.hO=d;a.gJ=a.gJ?0:1;if(b>d)continue;else break a;}}return a.gJ==c?0:1;}
function WX(a,b,c){U(a.eC.A,b,c);}
function Rp(a,b){a.hO=b+a.lg*1.25;a.gJ=1;}
function Wp(a,b,c){if(a.gJ)S2(a.eC,b,c.b,c.a);}
function LE(){var a=this;B.call(a);a.no=null;a.x9=null;a.yi=0.0;a.qA=0;a.yq=0;a.yZ=0;a.sC=0;a.zW=0;a.ds=0.0;a.eT=0.0;a.yh=0.0;a.m$=0.0;a.yn=0;a.oz=null;}
function Fg(a){return Dl(a.ds+a.eT);}
function KH(a,b){return Dl((a.ds+a.eT)*b);}
function Jt(){var a=this;B.call(a);a.gK=null;a.f=null;a.j0=null;a.u8=null;}
function AWF(a,b){var c=new Jt();AEO(c,a,b);return c;}
function A0z(a,b,c){var d=new Jt();Zy(d,a,b,c);return d;}
function AEO(a,b,c){Zy(a,b,null,c);}
function Zy(a,b,c,d){var e,f,g,h,i,j,k;a.gK=d;a.j0=c;if(d===null)c=null;else{c=d.f9;c=c===null?null:!Eo(c,C(234))&&!Eo(c,C(235))&&!Eo(c,C(236))&&!Eo(c,C(237))&&!Eo(c,C(238))&&!Eo(c,C(239))?(Eo(c,C(206))?C(169):!Eo(c,C(240))?null:C(223)):C(224);}e=b.data;a.u8=c;c=new K_;f=e.length;if(!f)g=VA(C(30));else{g=R(CD,f);h=g.data;i=0;while(i<f){j=new CD;k=R(Ce,1);k.data[0]=Rr(e[i]);Io(j,k);h[i]=j;i=i+1|0;}}b=g.data;c.dM=IJ();c.dp=IJ();c.gR=BJ();if(!b.length){c=new BD;Y(c);K(c);}c.z=g;c.h1=0;c.cK=0;c.c7=VB(c);c.d1=AR0();a.f
=c;}
function DX(a){var b;b=a.j0;if(b===null)b=a.u8;return b;}
function Gv(a){var b;b=a.gK;return b===null?null:b.jn;}
function Zm(){var a=this;B.call(a);a.qP=null;a.xv=null;a.oi=null;a.wf=null;a.vH=null;a.vj=null;}
function MM(a,b,c){return SF(a,Cs(a.qP),b,c);}
function Si(a,b,c){return SF(a,Cs(a.xv),b,c);}
function SF(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.wi(c,d))return g.zi;f=f+1|0;}return null;}
function VI(a,b,c){var d,e,f,g;d=(Cs(a.oi)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.wi(b,c))return g.zc;f=f+1|0;}return null;}
function AGf(){var a=this;B.call(a);a.b1=null;a.bL=null;a.dm=0;}
function AI2(){var a=new AGf();AVc(a);return a;}
function QW(a){var b=new AGf();APA(b,a);return b;}
function AVc(a){a.b1=new Hr;a.bL=new Hr;}
function APA(a,b){var c;c=new Hr;a.b1=c;a.bL=new Hr;V5(c,b.b1);V5(a.bL,b.bL);a.dm=b.dm;}
function L5(a,b,c){B7(a.bL,b,c);if(!a.dm)B7(a.b1,b,c);}
function Rk(a,b){B7(a.b1,b,0);B7(a.bL,b+1|0,0);}
function D1(a){if(S_(a.b1,a.bL)>0)return a.bL;return a.b1;}
function FI(a){if(S_(a.b1,a.bL)<0)return a.bL;return a.b1;}
function AEJ(a,b){var c,d,e,f;c=D1(a);d=FI(a);e=c.P;if(e<=b){f=BF(b,d.P);if(f<=0)return B$(b<=e?c.bh:0,f>=0?d.bh:(-1));}return null;}
function Dq(a){var b,c;b=a.b1;c=a.bL;return (b===c?1:c!==null&&BG(b)===BG(c)?(b.P==c.P&&b.bh==c.bh?1:0):0)?0:1;}
function AFR(a,b){var c,d;if(!Dq(a))return 0;c=D1(a);d=FI(a);return c.P<=b&&b<d.P?1:0;}
function VS(){var a=this;B.call(a);a.e8=null;a.e2=0;a.dA=0;}
function Xg(a,b){var c,d,e;c=a.e2;d=a.e8;if(c==d.data.length)a.e8=Dp(d,c+16|0);d=a.e8.data;e=a.e2;a.e2=e+1|0;d[e]=b;}
function Tc(a){var b,c,d;b=a.dA;c=a.e2-1|0;if(b==c)a.dA=b-1|0;d=a.e8.data;a.e2=c;d[c]=null;}
function EQ(){var a=this;B.call(a);a.b9=0;a.b6=null;a.fa=null;a.d8=0;a.dz=0;}
var A0A=0;var A0B=0;var A0s=0;function ABF(a,b,c,d,e,f,g,h){var i,j,k,l,m;i=a.b6;j=i===b&&!i.iV?0:1;if(j){a.b6=b;Lb(b,e.cR,d);}i=a.b6;k=i===null?0:E5(i)<g?Jd(E5(a.b6),1024):Jd(g,1024)+1|0;l=k<=a.d8?0:1;if(l)a.d8=k;if(!(!j&&!l)){if(A0A){m=b.gb;$rt_globals.console.info("fMeasure"+m.data);A0A=0;}if(!A0s){i=c.bu;b="alphabetic";i.textBaseline=b;}else{b=c.bu;i="top";b.textBaseline=i;}a.dz=h/1024|0;while(true){i=a.fa;if(i.j>=a.d8)break;BH(i,CZ(e));}k=0;while(k<a.d8){Jc(a,c,f,d,a.dz+k|0);k=k+1|0;}a.b6.iV=0;}if(!D8(a.fa)
&&h<=E5(a.b6)){k=h/1024|0;g=a.dz;if(k!=g){if(Ns(k-g|0)>=a.d8){g=0;while(g<a.d8){Jc(a,c,f,d,k+g|0);g=g+1|0;}a.dz=k;}else{while(true){h=a.dz;if(h>=k)break;Jc(a,c,f,d,h+a.d8|0);a.dz=a.dz+1|0;}while(true){h=a.dz;if(h<=k)break;Jc(a,c,f,d,h-1|0);a.dz=a.dz-1|0;}}}}}
function Ln(b,c){return (c-Fg(b)|0)/2|0;}
function NW(b,c){return Ln(b,c)+b.sC|0;}
function Jc(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o;EH(b);f=a.b6.gb;g=e*1024|0;h=QP(a,g);if(h>=a.b6.p.data.length)return;i=!h?0.0:f.data[h-1|0];j=g;k=i-j+a.b9;a:{while(true){l=a.b6;if(h>=l.p.data.length)break a;l=UD(l,h);m=!A0s?NW(d.data[l.cf],c):Ln(d.data[l.cf],c);n=d.data;o=f.data;CC(b,n[l.cf]);Ch(b,l.v,k,m);k=o[h]-j+a.b9;if(k>1024.0)break;h=h+1|0;}}CS(Br(a.fa,e%a.d8|0),b);}
function AFk(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;if(D8(a.fa))return;if(!a.d8)return;if(j>E5(a.b6))return;r=a.b6;s=r.eN;t=r.p;u=j/1024|0;v=QP(a,j);w= -a.b9|0;x=i;a:{while(true){y=t.data;z=y.length;if(v>=z)break a;ba=v!=(z-1|0)?0:1;if(w>=h)break;bb=s.data;r=Br(a.fa,u%a.d8|0);bc=y[v];bd=bb[v]+a.b9|0;be=u*1024|0;bf=(bd-be|0)>1024?0:1;bg=u+1|0;bh=bg*1024|0;bi=Bb(bh,bd)-j|0;if(bf&&ba)bi=bi+a.b9|0;if((w+bi|0)>h)bi=h-w|0;bj=l!==null?0:1;b:{if
(!bj){bk=!ba?a.b9:2*a.b9|0;z=l.b;bl=l.a;if(!(z<bl&&j<=bl&&(j+bi|0)>(z+bk|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bj){bm=!ba?a.b9:2*a.b9|0;if(j>=l.b&&(j+bi|0)<=(l.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(o&&!p)bo=k.b7.i7;if(bc===m)bo=k.b7.pG;bp=BW(n);d:{while(BX(bp)){if(B2(B0(bp),bc)){bj=1;break d;}}bj=0;}if(bj)bo=k.b7.xx;if(q!==null){y=q.mm;if(y===null)z=0;else{y=y.data;z=v>=y.length?0:y[v];}bo=AAl(k.dW,k,z,q.gx);}if(!bn&&!bl){l.a=Bb(l.a,E5(a.b6));bk=j>=l.b?bi:(Bb(bd,bh)-l.b|0)-(!ba?a.b9:0)|0;bh=(j+bi|0)<=
(l.a+(!ba?a.b9:2*a.b9|0)|0)?0:(Bb(bd,bh)-l.a|0)-(!ba?a.b9:0)|0;bm=j-be|0;bl=w+c|0;bq=bm;bj=bi-bk|0;Cv(e,bq,0.0,bj,x);U(f,bj,i);In(a,d,bl,b,f,e,bc,r,g,k,0,bo);bj=bm+bi|0;Cv(e,bj-bh|0,0.0,bh,x);U(f,bh,i);z=bl+bi|0;In(a,d,z-bh|0,b,f,e,bc,r,g,k,0,bo);br=bj-bk|0;bj=bk-bh|0;Cv(e,br,0.0,bj,x);U(f,bj,i);In(a,d,z-bk|0,b,f,e,bc,r,g,k,1,bo);}else{Cv(e,j-be|0,0.0,bi,x);U(f,bi,i);In(a,d,w+c|0,b,f,e,bc,r,g,k,bn,bo);}j=j+bi|0;w=w+bi|0;if(!bf){v=v+(-1)|0;u=bg;}v=v+1|0;}}}
function In(a,b,c,d,e,f,g,h,i,j,k,l){var m,n;if(e.b&&e.a){if(f.bO!==0.0&&f.bm!==0.0){m=j.t6.data[g.cG];if(k)n=j.b7.nr;else{g=m.pu;if(g===null)g=j.b7.fg;if(l===null)l=BP(g);n=l;}g=m.pw;if(A0B)i=0.0;EY(b,c,d,e,f,h,g,n,i);return;}return;}}
function QP(a,b){var c,d,e,f,g,h,i;c=a.b6;d=c.gb;e=0;f=c.p.data.length;g=b;b=BF(e,f);if(b>0){c=new BD;Y(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BF(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ZF(a){a.b6=null;En(a.fa,new X_);HZ(a.fa);}
function ABV(a,b,c,d,e,f,g,h,i){var j,k;j=E5(a.b6);if(j)j=j+a.b9|0;if(!j)j=j-a.b9|0;k=Bd( -a.b9|0,j-g|0);if(k>=h)return;U(f,h-k|0,e);Bx(b,c+k|0,d,f,i);}
function ACF(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{c=c.data;g=R(EQ,b);h=0;i=c.length;if(i>0){j=g.data;while(true){if(d>e)break a;k=BV(f,d);l=d%j.length|0;m=d%i|0;n=c[m];if(n.b6===k&&j[l]===null){j[l]=n;c[m]=null;}d=d+1|0;}}}j=g.data;d=0;e=j.length;while(d<e){if(j[d]===null){if(h>=i)o=null;else{b=h+1|0;o=c[h];h=b;}while(h<i&&o===null){b=h+1|0;o=c[h];h=b;}if(o!==null){j[d]=o;c[h-1|0]=null;}else{f=new EQ;f.b9=3;f.fa=BJ();f.dz=0;j[d]=f;}}d=d+1|0;}while(h<i){o=c[h];if(o!==null)ZF(o);h=h+1|0;}return g;}
function AEb(){A0s=0;}
function AGT(){var a=this;B.call(a);a.fB=null;a.db=null;a.eq=null;a.eS=null;a.iQ=null;a.iR=null;}
function I$(){var a=new AGT();ANe(a);return a;}
function ANe(a){a.fB=new Bf;a.db=new Bf;a.eq=new Bf;a.eS=new Bf;a.iQ=new B_;a.iR=new B_;}
function SI(a){var b;b=a.db;return !W(b.b,b.a)?0:1;}
function Ie(a,b){return Gu(b,a.eq,a.eS);}
function FE(a,b,c,d){var e,f,g,h,i;e=Ie(a,b);f=Gu(b,a.fB,a.db);if(!e&&!f)return null;if(!f){if(!d)c.g(Yh(a,b.b-a.eq.b|0));else c.g(Rh(a,b.a-a.eq.a|0));}g=!d?a.fB.b+(a.db.b/2|0)|0:a.fB.a+(a.db.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new TG;b.wF=a;b.wG=c;b.wE=i;}else{b=new TF;b.p9=a;b.p7=c;b.p8=i;}return b;}
function Hl(a,b,c){if(b!==null&&c!==null){BI(a.iQ,c);BI(a.iR,b);return;}}
function ACK(b,c){var d;d=new VX;d.sE=b;d.xF=c;return d;}
function Rh(a,b){var c,d,e;c=a.eS.a;d=a.db.a;e=c-d|0;return ACK(Bb(Bd(0,b-(d/2|0)|0),e),e);}
function Yh(a,b){var c,d,e;c=a.eS.b;d=a.db.b;e=c-d|0;return ACK(Bb(Bd(0,b-(d/2|0)|0),e),e);}
function Jr(a,b,c,d,e,f,g){YC(a,b,c,d,e,f,g,1);}
function Sm(a,b,c,d,e,f,g){YC(a,b,c,d,e,f,g,0);}
function YC(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){U(a.eS,0,0);U(a.db,0,0);}else{i=Bb(g*3|0,d);j=Bd(RB(d,d,e),i);e=e-d|0;i=d-j|0;i=i?RB(b,i,e):0;if(!h){k=a.fB;k.b=i+c|0;k.a=f-g|0;l=a.db;l.b=j;l.a=g;l=a.eq;l.b=c;l.a=k.a;k=a.eS;k.b=d;k.a=g;}else{k=a.fB;k.b=f-g|0;k.a=i+c|0;l=a.db;l.b=g;l.a=j;l=a.eq;l.b=k.b;l.a=c;k=a.eS;k.b=g;k.a=d;}}}
function Y5(a,b){GP(a,b);GY(a,b);}
function GP(a,b){var c;c=a.eq;Bx(b,c.b,c.a,a.eS,a.iQ);}
function GY(a,b){var c,d;c=a.db;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fB;Bx(b,d.b+1|0,d.a+1|0,c,a.iR);b=a.db;b.b=b.b+2|0;b.a=b.a+2|0;}
function FR(a,b,c){return Ie(a,b)&&Ge(c)?1:0;}
function ACn(){var a=this;B.call(a);a.zx=20;a.fT=null;a.fd=null;a.jb=null;a.m7=0;a.jU=0;a.jk=0.0;a.cJ=null;a.kN=null;a.eR=null;a.f5=null;a.f1=0;}
function AGH(){var a=new ACn();AUN(a);return a;}
function AUN(a){a.zx=20;a.fT=new Bf;a.fd=new Bf;a.cJ=BJ();a.kN=D7(0);}
function U6(a,b){var c,d,e,f,g;c=a.f1;if(b==c)return;d=a.cJ.j;e=d*20|0;if(c<b){f=c/20|0;g=b/20|0;}else{g=Bd(0,(c-1|0)/20|0);f=Bd(0,(b-1|0)/20|0);}a:{if((g-f|0)>=d){S5(a,b);a.f1=b;}else{if(a.f1>=b)while(true){if(g<f)break a;a.f1=OJ(Br(a.cJ,g%d|0),a.eR,a.f5,a.f1,b,e,a.jk);g=g+(-1)|0;}while(f<=g){a.f1=OJ(Br(a.cJ,f%d|0),a.eR,a.f5,a.f1,b,e,a.jk);f=f+1|0;}}}}
function L9(a,b){if(b===null)b=D7(0);a.kN=b;}
function UG(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;f=BW(a.cJ);while(BX(f)){g=B0(f);h=a.fT;i=W(a.cJ.j,a.jU);j=a.kN;k=g.fb.a;l=((g.kq.a-(b%i|0)|0)+i|0)%i|0;m=d.ho;n=b+l|0;o=g.O;n=n/o|0;p=l+k|0;q=BF(p,c);if(q<=0){o=k/o|0;k=0;p=0;q=0;while(p<o){i=n+p|0;if(MF(g,j,q,i,d,m)){i=W((p-k|0)+1|0,g.O);U(g.dU,BS(g.bq),i);Cv(g.eK,0.0,W(k,g.O),BS(g.bq),i);i=q;}else{r=F_(d,j,q,m);ET(g,e,l+W(k,g.O)|0,h,m.fy,r);U(g.dU,BS(g.bq),g.O);Cv(g.eK,0.0,W(p,g.O),BS(g.bq),g.O);k=p;}p=p+1|0;q=i;}r=F_(d,j,q,m);ET(g,e,l+W(k,g.O)|
0,h,m.fy,r);}else{if(q>0&&l<c){o=Bd(c-l|0,0);k=g.O;q=o/k|0;if(o%k|0)q=q+1|0;s=0;t=0;u=0;while(t<q){v=n+t|0;if(MF(g,j,u,v,d,m)){o=W((t-s|0)+1|0,g.O);U(g.dU,BS(g.bq),o);Cv(g.eK,0.0,W(s,g.O),BS(g.bq),o);v=u;}else{r=F_(d,j,u,m);ET(g,e,l+W(s,g.O)|0,h,m.fy,r);U(g.dU,BS(g.bq),g.O);Cv(g.eK,0.0,W(t,g.O),BS(g.bq),g.O);s=t;}t=t+1|0;u=v;}r=F_(d,j,u,m);ET(g,e,l+W(s,g.O)|0,h,m.fy,r);}if(p>i){n=b/g.O|0;o=Bb(p%i|0,c);U(g.dU,BS(g.bq),g.O);k=b%Da(g.bq)|0;l=g.O;k=k/l|0;p=k+(o/l|0)|0;if(o%l|0)p=p+1|0;o=k;s=k;i=n;while(o<p){if(MF(g,
j,i,n+(o-k|0)|0,d,m)){l=W((o-s|0)+1|0,g.O);U(g.dU,BS(g.bq),l);Cv(g.eK,0.0,W(s,g.O),BS(g.bq),l);}else{r=F_(d,j,i,m);l=s-k|0;q=g.O;ET(g,e,W(l,q)-(b%q|0)|0,h,m.fy,r);i=(n+o|0)-k|0;U(g.dU,BS(g.bq),g.O);Cv(g.eK,0.0,W(o,g.O),BS(g.bq),g.O);s=o;}o=o+1|0;}r=F_(d,j,i,m);n=s-k|0;o=g.O;ET(g,e,W(n,o)-(b%o|0)|0,h,m.fy,r);}}}}
function LJ(a,b,c,d){var e,f,g,h,i,j;e=a.cJ.j;while(true){f=a.cJ.j;g=W(f,a.jU);if(g>(d+a.m7|0))break;h=B$(0,g);i=new Rs;g=a.fd.b;f=a.m7;j=a.jb;i.dU=new Bf;i.eK=new B_;i.kq=h;i.d9=20;i.O=f;i.fb=B$(g,20*f|0);i.g_=NW(j,f);if(i.bq===null)i.bq=CZ(b);BH(a.cJ,i);}if(f==e)return;S5(a,c);}
function S5(a,b){var c,d,e,f,g,h,i,j;c=a.cJ;d=c.j;e=W((b/(d*20|0)|0)+1|0,d)*20|0;c=BW(c);while(BX(c)){f=B0(c);g=a.eR;h=a.jk;EH(g);i=0;while(true){j=f.d9;if(i>=j)break;j=e-W(d,j)|0;if(j<b)j=e;e=j+1|0;Gz(f,g,C8(e),W(f.O,i)+f.g_|0,h);i=i+1|0;}CS(f.bq,g);}}
function S9(a,b,c,d){var e;a.jb=b;a.m7=c;e=c*20|0;a.jU=e;b=CK(a.eR,CO(d,a.fd.b,e));a.eR=b;CC(b,a.jb);TC(a.eR,2);b=CK(a.f5,CO(d,a.fd.b,c));a.f5=b;CC(b,a.jb);TC(a.f5,2);}
function Qu(a){En(a.cJ,new Np);HZ(a.cJ);a.eR=CK(a.eR,null);a.f5=CK(a.f5,null);}
function TI(a,b,c,d,e){Cx(a.fT,b);U(a.fd,c,d);a.jk=e;}
var XZ=G(0);
function AHq(a,b){var c;c=a.bv();while(c.bK()){b.g(c.br());}}
var HY=G(0);
function ANz(a,b){var c,d;c=a.bv();d=0;while(c.bK()){if(b.X(c.br())){c.rI();d=1;}}return d;}
var E2=G();
function D8(a){return a.cV()?0:1;}
function Ic(a,b){var c,d,e,f,g,h;c=b.data;d=a.j;e=c.length;if(e<d)b=AFa(IK(BG(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=BW(a);while(BX(f)){g=b.data;h=e+1|0;g[e]=B0(f);e=h;}return b;}
function Vn(a,b){var c,d;c=0;d=BW(b);while(BX(d)){if(!a.tw(B0(d)))continue;c=1;}return c;}
var To=G(0);
var JS=G(0);
function Gt(){E2.call(this);this.cF=0;}
function ARA(a,b){a.nA(a.cV(),b);return 1;}
function BW(a){var b;b=new OK;b.hr=a;b.nm=a.cF;b.jt=a.cV();b.gP=(-1);return b;}
function AQB(a,b,c){var d,e;if(b>=0&&b<=a.cV()){if(c.eh())return 0;d=c.bv();while(d.bK()){e=b+1|0;a.nA(b,d.br());b=e;}return 1;}c=new BD;Y(c);K(c);}
function ATv(a,b,c){c=new D9;Y(c);K(c);}
function KW(a,b){var c,d;c=a.cV();d=0;while(true){if(d>=c)return (-1);if(B2(b,a.h6(d)))break;d=d+1|0;}return d;}
function APp(a,b){var c,d;if(!Je(b,JS))return 0;c=b;if(a.j!=c.j)return 0;d=0;while(d<c.j){if(!B2(Br(a,d),Br(c,d)))return 0;d=d+1|0;}return 1;}
var LZ=G(0);
function ABh(){var a=this;Gt.call(a);a.cC=null;a.j=0;}
function BJ(){var a=new ABh();ALT(a);return a;}
function ALT(a){a.cC=R(B,10);}
function J2(a,b){var c,d;c=a.cC.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cC=Dp(a.cC,d);}}
function Br(a,b){JQ(a,b);return a.cC.data[b];}
function AQj(a){return a.j;}
function BH(a,b){var c,d;J2(a,a.j+1|0);c=a.cC.data;d=a.j;a.j=d+1|0;c[d]=b;a.cF=a.cF+1|0;return 1;}
function S7(a,b,c){var d,e,f;Q5(a,b);J2(a,a.j+1|0);d=a.j;e=d;while(e>b){f=a.cC.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cC.data[b]=c;a.j=d+1|0;a.cF=a.cF+1|0;}
function Ey(a,b){var c,d,e,f;JQ(a,b);c=a.cC.data;d=c[b];e=a.j-1|0;a.j=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cF=a.cF+1|0;return d;}
function XH(a,b){var c;c=KW(a,b);if(c<0)return 0;Ey(a,c);return 1;}
function HZ(a){ABJ(a.cC,0,a.j,null);a.j=0;a.cF=a.cF+1|0;}
function ABL(a,b,c){var d,e,f,g,h,i;Q5(a,b);if(c.eh())return 0;J2(a,a.j+c.cV()|0);d=c.cV();e=a.j;f=e-1|0;while(f>=b){g=a.cC.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.j=e+d|0;h=c.bv();i=0;while(i<d){g=a.cC.data;e=b+1|0;g[b]=h.br();i=i+1|0;b=e;}a.cF=a.cF+1|0;return 1;}
function JQ(a,b){var c;if(b>=0&&b<a.j)return;c=new BC;Y(c);K(c);}
function Q5(a,b){var c;if(b>=0&&b<=a.j)return;c=new BC;Y(c);K(c);}
function En(a,b){var c;c=0;while(c<a.j){b.g(a.cC.data[c]);c=c+1|0;}}
function O8(){B.call(this);this.zP=null;}
function O7(){B.call(this);this.n0=null;}
function AIZ(a,b){var c;c=a.n0;FU(c,Fn(b,H5(c)));}
function O6(){B.call(this);this.si=null;}
function AH6(a,b){var c;c=a.si;Jg(c,Fn(b,UP(c)));}
function O5(){B.call(this);this.vS=null;}
function AH5(a){var b,c;b=a.vS;c=b.iN?0:1;b.iN=c;b=new M;O(b);Gr(H(b,C(241)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function Pb(){B.call(this);this.pv=null;}
function ALR(a){var b,c;b=a.pv;c=b.iT?0:1;b.iT=c;b=new M;O(b);Gr(H(b,C(242)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function O_(){B.call(this);this.tA=null;}
function AVX(a){var b,c;b=a.tA;c=b.kt^1;b.kt=c;b=new M;O(b);Gr(H(b,C(243)),c);$rt_globals.console.info($rt_ustr(N(b)));}
function O$(){B.call(this);this.xD=null;}
function AOo(a){var b,c,d,e,f;b=a.xD;c=(b.d$+3|0)%6|0;b.d$=c;d=b.hc.data;e=d.length;f=0;while(f<e){b=d[f];b.b9=c;b=b.b6;if(b!==null)b.iV=1;f=f+1|0;}}
function O9(){B.call(this);this.ph=null;}
function AQR(a){var b;b=a.ph;b.bS=b.bS?0:1;Qu(b.df);b.df=AGH();Uk(b,b.ba,b.cz,b.cE.b4);}
function O4(){B.call(this);this.sO=null;}
function AU7(a){var b;b=a.sO;b.jN=b.jN?0:1;}
var Fz=G(Co);
var A0q=null;var A0C=null;var A0r=null;var A0D=null;function AH3(){AH3=Bq(Fz);APr();}
function AEp(a,b){var c=new Fz();AD_(c,a,b);return c;}
function AD_(a,b,c){AH3();Dd(a,b,c);}
function APr(){var b;A0q=AEp(C(244),0);A0C=AEp(C(245),1);b=AEp(C(246),2);A0r=b;A0D=I(Fz,[A0q,A0C,b]);}
function K1(){B.call(this);this.zH=null;}
var AZN=null;var A0E=null;function ANg(){ANg=Bq(K1);AVD();}
function AK8(a){var b=new K1();AAu(b,a);return b;}
function AAu(a,b){ANg();a.zH=b;}
function AVD(){AZN=AK8(C(247));A0E=AK8(C(248));}
var Nb=G(0);
function Ge(a){return DE(a,null);}
function Sk(b){var c;c=new Ti;c.v0=b;return c;}
function RT(){B.call(this);this.s6=null;}
function AMK(a){Kc(a.s6);}
function RR(){B.call(this);this.w$=null;}
function AHH(a){KK(a.w$);}
var Z0=G(0);
var A0y=null;function AFW(){A0y=new OX;}
function K_(){var a=this;B.call(a);a.z=null;a.c7=null;a.d1=null;a.dM=null;a.dp=null;a.gR=null;a.gE=null;a.cK=0;a.h1=0;a.tJ=0.0;}
function VB(a){var b;b=WQ(a);return AGJ(AJk(Kj(0,b,0),null,null));}
function BV(a,b){return a.z.data[b];}
function CB(a){return a.z.data.length;}
function WQ(a){return E4(a,CB(a));}
function FY(a,b){return a.z.data[b].M;}
function LM(a,b){var c,d,e,f,g,h,i;c=a.z.data;d=c[b];e=c[b+1|0];f=DS(Mk(d.p,e.p));g=a.z;h=g.data.length;if(b<h&&b>=0){i=R(CD,h-1|0);c=i.data;SV(g,b,i);c[b]=f;a.z=i;return;}d=new Bu;Y(d);K(d);}
function NL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.z.data;if(!(c<d[b].M?0:1)){d=(BV(a,b)).p.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){f=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}f=0;}FA();h=new BA;d=BU(1);d.data[0]=f;HW(h,d);FH(a,b,c,1,h);h=a.z.data[b];i=h.p;j=0;b:{while(true){d=i.data;e=d.length;if(j>=e)break b;b=J(d[j].v);if(c<b)break;c=c-b|0;j=j+1|0;}}if(J(d[j].v)==1)h.p=SV(i,j,R(Ce,e-1|0));else{k=d[j];if(c<=0)l=Dz(Do(k.v,1),k.cG,k.cf);else if(c>=(J(k.v)-1|0)){l=new Ce;m=k.v;Va(l,Cg(m,0,J(m)-
1|0),k.cG,k.cf);}else{i=BU(J(k.v)-1|0);n=i.data;b=0;while(b<c){n[b]=P(k.v,b);b=b+1|0;}b=n.length;while(c<b){m=k.v;e=c+1|0;n[c]=P(m,e);c=e;}l=Dz(Gd(i),k.cG,k.cf);}d[j]=l;}h.M=h.M-1|0;Ev(h);}else if(b!=(d.length-1|0)){FH(a,b,c,1,C(197));LM(a,b);}}
function AAe(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){TH(a.z.data[b],c,e[0]);return;}g=f-1|0;h=Is(a.z.data[b],c);d=a.z;i=Dp(d,d.data.length+g|0);d=i.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}h=h.data;j=h[0];k=e[0];l=j.p.data;m=l.length;c=!m?0:J(l[m-1|0].v);M_(j,j.p.data.length-1|0,c,k);d[b]=h[0];m=1;while(m<g){if(Fw(e[m]))j=DS(R(Ce,0));else{j=new CD;l=R(Ce,1);l.data[0]=Dz(e[m],0,0);Io(j,l);}d[b+m|0]=j;m=m+1|0;}M_(h[1],0,0,e[g]);d[b+g|0]=h[1];a.z
=i;}
function XV(a,b){var c,d,e,f,g,h,i;c=D1(b);d=FI(b);e=c.P;if(e==d.P)return Cg(Fb(a.z.data[e]),c.bh,d.bh);f=new M;O(f);b=a.z.data[c.P];e=c.bh;BL(BT(f,Do(Fb(b),e)),10);g=a.z.data;e=c.P+1|0;h=d.P;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AAE(BT(f,Fb(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.z.data[d.P];h=d.bh;BT(f,Cg(Fb(b),0,h));return N(f);}b=new Yt;Y(b);K(b);}
function N2(a,b,c){var d;Yf(a,b);d=D1(b);FH(a,d.P,d.bh,1,c);}
function Yf(a,b){var c,d,e,f,g,h,i;a:{c=D1(b);d=FI(b);e=c.P;if(e==d.P)GI(a.z.data[e],c.bh,d.bh);else{b=a.z.data[e];GI(b,c.bh,b.M);GI(a.z.data[d.P],0,d.bh);e=c.P+1|0;f=d.P;g=a.z;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=R(CD,(h-f|0)+e|0);ADa(g,e,f,i);a.z=i;LM(a,c.P);break a;}b=new Bu;Y(b);K(b);}b=new Bu;Y(b);K(b);}}}
function Ho(a,b,c){return Du(b,Gh(BV(a,b),c));}
function YU(a,b){var c,d,e;c=0;d=0;while(true){e=a.z.data.length;if(c>=e)break;if((d+(BV(a,c)).M|0)>=b)return B$(c,b-d|0);d=d+((BV(a,c)).M+1|0)|0;c=c+1|0;}return B$(e,0);}
function E4(a,b){var c,d,e;c=0;d=a.z.data.length;e=0;while(e<b){c=c+FY(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Mj(a,b){return MD(BV(a,b.by),b.bH);}
function ER(a){var b,c,d,e,f,g,h,i,j;b=BU(WQ(a));c=b.data;d=a.z.data.length;e=0;f=0;while(e<d){g=a.z.data[e].p.data;h=g.length;i=0;while(i<h){j=g[i].v;RA(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function FH(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cK=a.cK+1|0;f=a.gR;g=R(He,1);h=new He;h.ed=b;h.ej=c;i=MG(e,C(197),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=B$(b,c+J(i[0])|0);break a;}k=B$((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=B$(b,c);}i=g.data;h.l5=k;h.nd=d;h.ge=e;i[0]=h;BH(f,g);KO(a,b,c,d,e);}
function KO(a,b,c,d,e){var f;f=E4(a,b)+c|0;if(!d){Qe(a.c7,f,J(e));V$(a.d1,f,J(e));}else{RO(a.c7,f,J(e));Ot(a.d1,f,J(e));}}
function Ok(a,b){var c,d,e;c=MG(b.ge,C(197),(-1));if(b.nd){AAe(a,b.ed,b.ej,c);Qe(a.c7,E4(a,b.ed)+b.ej|0,J(b.ge));V$(a.d1,E4(a,b.ed)+b.ej|0,J(b.ge));}else{c=c.data;d=AI2();B7(d.b1,b.ed,b.ej);e=c.length;if(e==1)B7(d.bL,b.ed,b.ej+J(c[0])|0);else B7(d.bL,(b.ed+e|0)-1|0,J(c[e-1|0]));Yf(a,d);RO(a.c7,E4(a,b.ed)+b.ej|0,J(b.ge));Ot(a.d1,E4(a,b.ed)+b.ej|0,J(b.ge));}return b.l5;}
function OR(a){a.h1=a.cK;}
function Q7(a,b){var c,d,e,f,g;c=0;d=0;while(true){e=a.z.data;f=e.length;if(d>=f)break;g=e[d].M;if(b<=(c+g|0))return Du(d,b-c|0);c=c+(g+1|0)|0;d=d+1|0;}return Du(f,0);}
function Q9(a){var b,c,d;a.gE=BM(a.z.data.length+1|0);b=0;while(b<a.z.data.length){c=a.gE.data;d=b+1|0;c[d]=(c[b]+(BV(a,b)).M|0)+1|0;b=d;}}
var Ff=G();
function KV(){Ff.call(this);this.zi=null;}
function Uv(){Ff.call(this);this.zc=null;}
function RE(){Ff.call(this);this.Ay=null;}
var FS=G(0);
var TV=G(0);
function Hr(){var a=this;B.call(a);a.P=0;a.bh=0;}
function B7(a,b,c){a.P=b;a.bh=c;}
function V5(a,b){a.P=b.P;a.bh=b.bh;}
function S_(a,b){var c;c=BF(a.P,b.P);if(c)return c;return BF(a.bh,b.bh);}
function Lx(){var a=this;B.call(a);a.mb=null;a.kO=null;}
function Mq(a){return a.mb.by;}
function Kh(a){return a.mb.bH;}
var XT=G(0);
function Uj(){B.call(this);this.h$=null;}
function EE(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.h$));}
function Dy(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.h$));}
function AKu(a){var b,c;b=a.h$.byteLength;c=new M;O(c);H(V(H(c,C(249)),b),C(250));return N(c);}
var V3=G(0);
function LD(){var a=this;B.call(a);a.hn=null;a.fJ=null;a.m8=null;}
function AEB(a,b){var c=new LD();ANb(c,a,b);return c;}
function AWb(a,b,c){var d=new LD();Pr(d,a,b,c);return d;}
function AAD(b){var c,d,e,f,g,h,i;c=new LD;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=R(BA,0);else{f=R(BA,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FP(e[h]);h=h+1|0;}}}else f=R(BA,0);Pr(c,d,b,f);return c;}
function ANb(a,b,c){Pr(a,b,c,R(BA,0));}
function Pr(a,b,c,d){a.hn=b;a.fJ=c;a.m8=d;}
function Ki(a,b){var c,d,e;c=b|0;if(c===b)return c;d=EL(a);e=new M;O(e);H(H(e,C(251)),d);$rt_globals.console.info($rt_ustr(N(e))+b);return 0;}
function EL(a){var b;b=a.hn;return FP(b!==null?b.name:a.fJ.name);}
function ANC(a){var b,c,d,e,f;if(a.fJ===null){b=a.m8;c=EL(a);d=AB9(b);e=new M;O(e);H(H(H(e,d),C(252)),c);c=N(e);}else{b=a.m8;c=EL(a);f=Ki(a,a.fJ.size);d=AB9(b);e=new M;O(e);V(H(H(H(H(e,d),C(252)),c),C(253)),f);c=N(e);}return c;}
function Ti(){B.call(this);this.v0=null;}
function DE(a,b){GT(a.v0,b);return 1;}
function Lc(){var a=this;D4.call(a);a.cU=0;a.ce=null;a.cS=0;a.xA=0.0;a.lV=0;}
function IJ(){var a=new Lc();Rt(a);return a;}
function AMk(a,b){return R(G4,b);}
function Rt(a){var b;b=AGK(16);a.cU=0;a.ce=R(G4,b);a.xA=0.75;We(a);}
function AGK(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function GK(a){var b;if(a.cU>0){a.cU=0;b=a.ce;ABJ(b,0,b.data.length,null);a.cS=a.cS+1|0;}}
function We(a){a.lV=a.ce.data.length*a.xA|0;}
function Gm(a,b){return UI(a,b)===null?0:1;}
function WD(a){var b;b=new Wf;b.sj=a;return b;}
function Cl(a,b){var c;c=UI(a,b);if(c===null)return null;return c.cY;}
function UI(a,b){var c,d;if(b===null)c=TE(a);else{d=b.m0();c=R6(a,b,d&(a.ce.data.length-1|0),d);}return c;}
function R6(a,b,c,d){var e;e=a.ce.data[c];while(e!==null&&!(e.jT==d&&AA6(b,e.cI))){e=e.cO;}return e;}
function TE(a){var b;b=a.ce.data[0];while(b!==null&&b.cI!==null){b=b.cO;}return b;}
function Kz(a){var b;if(a.lo===null){b=new QT;b.hs=a;a.lo=b;}return a.lo;}
function F1(a,b,c){var d,e,f,g;if(b===null){d=TE(a);if(d===null){a.cS=a.cS+1|0;d=V7(a,null,0,0);e=a.cU+1|0;a.cU=e;if(e>a.lV)Wt(a);}}else{e=b.m0();f=e&(a.ce.data.length-1|0);d=R6(a,b,f,e);if(d===null){a.cS=a.cS+1|0;d=V7(a,b,f,e);e=a.cU+1|0;a.cU=e;if(e>a.lV)Wt(a);}}g=d.cY;d.cY=c;return g;}
function V7(a,b,c,d){var e,f;e=new G4;Z7(e,b,null);e.jT=d;f=a.ce.data;e.cO=f[c];f[c]=e;return e;}
function AC0(a,b){var c,d,e,f,g,h,i,j;c=AGK(!b?1:b<<1);d=R(G4,c);e=d.data;f=0;b=c-1|0;while(true){g=a.ce.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.jT&b;j=h.cO;h.cO=e[i];e[i]=h;h=j;}f=f+1|0;}a.ce=d;We(a);}
function Wt(a){AC0(a,a.ce.data.length);}
function AA6(b,c){return b!==c&&!b.bT(c)?0:1;}
function CD(){var a=this;B.call(a);a.p=null;a.M=0;a.gb=null;a.eN=null;a.d6=null;a.hm=null;a.gs=0;a.iV=0;a.hU=0;}
var A0F=0;var A0G=0;var A0u=0;function DS(a){var b=new CD();Io(b,a);return b;}
function Io(a,b){var c,d,e,f;c=b.data;a.p=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.M=d;Ev(a);}
function UD(a,b){return a.p.data[b];}
function Gh(a,b){var c;c=Jm(a,b);return c<=0?0:a.d6.data[c-1|0];}
function Jm(a,b){var c,d,e,f;c=a.p.data.length;if(!c)return (-1);if(!(a.d6!==null&&!a.hU)){YV(a);d=0;e=0;f=a.p.data.length;while(d<f){e=e+J(a.p.data[d].v)|0;a.d6.data[d]=e;d=d+1|0;}a.hU=0;}d=Vp(a.d6,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function MD(a,b){var c;c=a.p.data;if(!c.length)return null;return c[Jm(a,b)];}
function GI(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.M){a.p=R(Ce,0);Ev(a);a.M=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.p.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.p.data[f].v);j=BF(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.p.data[f];if(!b&&c==J(k.v)?1:0){g=a.p;a.p=SV(g,e,R(Ce,g.data.length-1|0));a.M=a.M-d|0;Ev(a);return;}a.p.data[e]=Dz(Fp(Cg(k.v,0,b),Do(k.v,c)),k.cG,k.cf);}else{g=a.p.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.p.data[e]=Dz(Cg(l.v,0,b),l.cG,l.cf);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.p.data[f]=Dz(Do(m.v,c),m.cG,m.cf);g=a.p;a.p=ADa(g,e,f,R(Ce,(g.data.length-f|0)+e|0));}a.M=a.M-d|0;Ev(a);}
function Is(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(CD,[DS(R(Ce,0)),a]);if(b>=a.M)return I(CD,[a,DS(R(Ce,0))]);c=a.p;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(CD,[DS(Lz(c,0,R(Ce,d))),DS(Lz(c,d,R(Ce,f-d|0)))]);h=e[d];e=Lz(c,0,R(Ce,d+1|0));i=e.data;j=Lz(c,d,R(Ce,f-d|0));c=j.data;i[d]=Dz(Cg(h.v,0,b),h.cG,h.cf);c[0]=Dz(Do(h.v,b),h.cG,h.cf);return I(CD,[DS(e),DS(j)]);}
function TH(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.p.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}M_(a,d,b,c);}
function M_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;e=a.p;f=e.data;g=f.length;if(!g){h=R(Ce,1);h.data[0]=Rr(d);a.p=h;}else if(!b&&!c){i=R(Ce,g+1|0);h=i.data;DB(e,0,i,1,g);h[0]=Rr(d);a.p=i;}else{j=f[b];if(c<=0)k=Dz(Fp(d,j.v),j.cG,j.cf);else if(c>=J(j.v))k=Dz(Fp(j.v,d),j.cG,j.cf);else{l=J(d);m=l+c|0;n=J(j.v)-c|0;h=BU(J(j.v)+l|0);i=h.data;o=0;while(o<c){i[o]=P(j.v,o);o=o+1|0;}p=0;while(p<l){i[p+c|0]=P(d,p);p=p+1|0;}g=0;while(g<n){i[g+m|0]=P(j.v,g+c|0);g=g+1|0;}k=Dz(Gd(h),j.cG,j.cf);}f[b]=k;}a.M=a.M+J(d)|0;Ev(a);}
function Ox(a){var b,c,d,e,f,g;b=0;c=a.p.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<My(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lb(a,b,c){var d,e,f,g,h,i,j;d=a.p.data.length;e=a.gb;if(!(e!==null&&e.data.length>=d)){a.gb=AHK(d);a.eN=BM(d);a.gs=1;}YV(a);if(!a.gs)A0G=A0G+1|0;else{f=0;g=0.0;A0F=A0F+1|0;h=0;while(h<d){i=c.data;j=a.p.data[h];f=f+J(j.v)|0;a.d6.data[h]=f;CC(b,i[j.cf]);g=g+EA(b,j.v);a.gb.data[h]=g;a.eN.data[h]=g+0.5|0;h=h+1|0;}a.M=f;a.gs=0;a.hU=0;}}
function YV(a){var b;b=a.d6;if(!(b!==null&&b.data.length>=a.p.data.length)){a.d6=BM(a.p.data.length);a.hU=1;}}
function Ev(a){a.gs=1;a.iV=1;a.hU=1;a.hm=null;}
function TB(a,b,c,d){var e,f,g,h,i,j,k;if(a.hm===null)a.hm=R($rt_arraycls($rt_intcls()),a.p.data.length);e=a.hm.data[d];if(e===null){e=c.data;f=a.p.data[d];CC(b,e[f.cf]);f=f.v;e=BM(J(f)-1|0);c=Fx(f);g=!d?0.0:a.gb.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BA;k=i+1|0;M9(f,c,0,k);h[i]=g+EA(b,f)+0.5|0;i=k;}a.hm.data[d]=e;}return e;}
function GQ(a,b,c,d){var e,f,g,h,i;if(a.p.data.length&&b){if(!(!a.gs&&a.eN!==null))Lb(a,c,d);if(b>=a.M)return a.eN.data[a.p.data.length-1|0];e=0;f=0;a:{while(true){g=a.p.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BF(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eN.data[f];}return (TB(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function E5(a){var b,c,d;a:{b=a.p.data.length;if(b){c=a.eN.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Ha(a,b){var c;if(b>=a.M)return b+1|0;c=Jm(a,b);return a.d6.data[c];}
function Fb(a){var b,c,d,e;b=new M;Gj(b,a.M);c=a.p.data;d=c.length;e=0;while(e<d){BT(b,c[e].v);e=e+1|0;}return N(b);}
function VA(b){var c,d,e,f;c=R(CD,1);d=c.data;e=new CD;f=R(Ce,1);f.data[0]=Rr(b);Io(e,f);d[0]=e;return c;}
function AC4(){A0u=0;}
function ACc(){var a=this;B.call(a);a.eP=null;a.dH=null;}
function AR0(){var a=new ACc();AHV(a);return a;}
function AKd(a,b){var c=new ACc();AL4(c,a,b);return c;}
function AHV(a){var b;b=new Lu;Rt(b);a.dH=b;}
function AL4(a,b,c){a.eP=b;a.dH=c;}
function UE(a,b,c){var d;d=new NI;d.w8=c;d.w6=b;AGq(b,d);b=b.cw;d=new NJ;d.nZ=a;d.nY=c;b.eY(d);}
function V$(a,b,c){var d;d=a.eP;if(d===null)return;Sn(a,d,b,c);}
function Ot(a,b,c){var d;d=a.eP;if(d===null)return;Vu(a,d,b,c);}
function Sn(a,b,c,d){var e,f,g,h;e=b.dr.bv();while(e.bK()){ZP(a,e.br(),c,d);}e=b.eg.bv();while(e.bK()){f=e.br();g=new WR;g.t2=a;Ei(a,g,f,c,d);}h=b.e3.bv();while(h.bK()){e=h.br();ZP(a,e.fE,c,d);f=new WP;f.qf=a;Ei(a,f,e.ik,c,d);}b=b.cw.bv();while(b.bK()){Sn(a,b.br(),c,d);}}
function ZP(a,b,c,d){Ke(a,b.c$,c,d);}
function Ei(a,b,c,d,e){var f,g;a:{if(c instanceof Fr){f=c.kc;g=new OB;g.rY=a;g.rZ=b;g.r0=d;g.r1=e;En(f,g);}else{if(!(c instanceof FZ)){if(!(c instanceof Ga))break a;f=c;Ei(a,b,f.fX,d,e);Ei(a,b,f.gj,d,e);return;}g=c.fs;f=new OD;f.v9=a;f.v5=b;f.v6=d;f.v8=e;En(g,f);}}if(c!==null){c=c.dJ;if(c!==null)b.jK(c,Dh(d),Dh(e));}}
function Ke(a,b,c,d){var e;e=b.cy;if(e>=c)b.cy=e+d|0;}
function Vu(a,b,c,d){var e,f,g,h;e=b.dr.bv();while(e.bK()){IO(a,(e.br()).c$,c,d);}e=b.eg.bv();while(e.bK()){f=e.br();g=new T4;g.xN=a;Ei(a,g,f,c,d);}h=b.e3.bv();while(h.bK()){e=h.br();IO(a,e.fE.c$,c,d);f=new T0;f.nU=a;Ei(a,f,e.ik,c,d);}b.dr.mw(new T2);b.eg.mw(new T1);b=b.cw.bv();while(b.bK()){Vu(a,b.br(),c,d);}}
function IO(a,b,c,d){var e;e=b.cy;if(e>=c)b.cy=e-d|0;}
var OX=G();
function AU_(a){}
function Ce(){var a=this;B.call(a);a.v=null;a.cG=0;a.cf=0;}
function Rr(a){var b=new Ce();ALb(b,a);return b;}
function Dz(a,b,c){var d=new Ce();Va(d,a,b,c);return d;}
function ALb(a,b){Va(a,b,0,0);}
function Va(a,b,c,d){a.v=b;a.cG=c;a.cf=d;}
function HO(b,c){return (!b?0:2)+(!c?0:1)|0;}
function My(a){return J(a.v);}
function Og(){var a=this;B.call(a);a.dX=null;a.eI=0;}
var A0H=null;function AGJ(a){var b=new Og();ACi(b,a);return b;}
function ACi(a,b){a.eI=0;a.dX=b;}
function WB(a,b){var c;if(b.eU)return b;b=BW(b.bt);while(true){if(!BX(b))return null;c=WB(a,B0(b));if(c!==null)break;}return c;}
function Wg(a,b,c){var d,e,f,g;d=Ky(a,a.dX,b);if(d===null)return;e=c.dw.cw;f=c.bt;if(d===a.dX){b=Br(f,0);a.dX=b;b.dw=e.h6(0);return;}if(!D8(f)){b=d.h9;if(b!==null){c=new W2;c.qa=b;En(f,c);g=KW(b.bt,d);Ey(b.bt,g);ABL(b.bt,g,f);}}b=d.dw.fP;c=new YI;c.n$=b;e.eY(c);g=KW(b.cw,d.dw);if(g!=(-1)){b.cw.np(g);b.cw.ug(g,e);}}
function Ky(a,b,c){var d,e,f,g;d=b.bY;if(d.bZ==c.bZ&&d.b3==c.b3?1:0){d=BW(b.bt);while(BX(d)){e=Ky(a,B0(d),c);if(e!==null)return e;}return b;}b=BW(b.bt);while(true){if(!BX(b))return null;d=B0(b);f=c.bZ;g=c.b3;e=d.bY;if(e.bZ<=f&&g<=e.b3?1:0){e=Ky(a,d,c);if(e!==null)break;}}return e;}
function Nf(a,b,c){BH(c,b.bY);b=BW(b.bt);while(BX(b)){Nf(a,B0(b),c);}}
function Qe(a,b,c){a.eI=0;Ls(a,a.dX,b,c);}
function Ls(a,b,c,d){var e;if(C6(b)<c)return;a:{if(C1(b)>c){MQ(b,d);GX(b,d);b=BW(b.bt);while(BX(b)){Ls(a,B0(b),c,d);}}else{if(!LP(b,c)){if(a.eI)break a;if(C6(b)!=c)break a;}GX(b,d);if(C1(b)==c&&a.eI)MQ(b,d);e=BW(b.bt);while(BX(e)){Ls(a,B0(e),c,d);}if(!a.eI){b.eU=1;a.eI=1;}}}}
function RO(a,b,c){a.eI=0;Kq(a,a.dX,b,c);}
function Kq(a,b,c,d){var e,f,g,h,i,j;if(C6(b)<c)return;e=C1(b);f=c+d|0;if(e>f){e= -d|0;MQ(b,e);GX(b,e);g=BW(b.bt);while(BX(g)){Kq(a,B0(g),c,d);}b.bt=Zj(a,b.bt);}else{g=b.bY;if(c<=g.bZ&&g.b3<=f?1:0){if(b!==a.dX){L8(b,(-1));KE(b,(-1));}else{L8(b,0);KE(b,0);}HZ(b.bt);b.dw.cw.iS();}else{e=LP(b,c);f=LP(b,f);if(e&&f)GX(b, -d|0);else if(e)KE(b,c);else{if(!f)return;L8(b,c);GX(b, -d|0);}g=BW(b.bt);while(BX(g)){Kq(a,B0(g),c,d);}g=b.bt;h=null;i=Qr(0);while(true){d=0;a:{while(true){if(h===null)h=BW(g);if(!BX(h))c=0;else
{j=B0(h);i=Qr(!AC7(i)&&!j.eU?0:1);c=1;d=1;}if(!c){c=0;break a;}if(!d)break;}c=1;}if(!c)break;}if(!i.nt&&!a.eI)b.eU=1;else a.eI=1;b.bt=Zj(a,b.bt);}}}
function Zj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BJ();d=null;e=A0H;f=b.cC;g=b.j;if(e===null)e=AYS;h=R(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}ACB(h,e);j=0;while(j<g){f.data[j]=i[j-0|0];j=j+1|0;}b.cF=b.cF+1|0;b=BW(b);while(BX(b)){l=B0(b);if(C1(l)==C6(l))continue;if(!l.eU){if(d!==null){BH(c,d);d=null;}BH(c,l);}else if(d===null)d=l;else{j=Bb(C1(d),C1(l));m=Bd(C6(d),C6(l));e=d.dw;if(e===null)e=l.dw;n=AJk(Kj(j,m,d.bY.ff),d.h9,e);n.eU=1;d=n;}}if(d!==null)BH(c,d);return c;}
function Y1(a,b,c,d){var e,f,g,h,i;if((C6(c)-C1(c)|0)<43)e=Cg(d,C1(c),C6(c));else{e=Cg(d,C1(c),C1(c)+20|0);f=Cg(d,C6(c)-20|0,C6(c));g=new M;O(g);H(H(H(g,e),C(170)),f);e=N(g);}e=WI(e,C(197),C(254));f=Bz();g=new M;O(g);h=V(g,b);BL(h,32);h=H(h,c);BL(h,9);H(h,e);Bt(f,N(g));c=BW(c.bt);i=b+1|0;while(BX(c)){Y1(a,i,B0(c),d);}}
function AEd(){A0H=new TQ;}
var Lu=G(Lc);
function Mx(a,b,c){var d;if(b!==null&&c!==null){if(!Gm(a,b)){c=new BD;d=new M;O(d);H(H(d,C(255)),b);Bi(c,N(d));K(c);}if(!Gm(a,c)){b=new BD;d=new M;O(d);H(H(d,C(255)),c);Bi(b,N(d));K(b);}if(Bn(b,c))return 1;c=BW(Cl(a,c));while(BX(c)){if(Mx(a,b,B0(c)))return 1;}return 0;}return 1;}
function AGQ(){var a=this;B.call(a);a.bZ=0;a.b3=0;a.ff=0;}
function Kj(a,b,c){var d=new AGQ();AK6(d,a,b,c);return d;}
function AK6(a,b,c,d){a.bZ=b;a.b3=c;a.ff=d;}
function ASU(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.bZ==c.bZ&&a.b3==c.b3&&a.ff==c.ff?1:0;}return 0;}
function AJL(a,b){var c;b=b;c=BF(a.bZ,b.bZ);if(!c)c=BF(b.b3,a.b3);return c;}
var TQ=G();
function ATH(a,b,c){var d;b=b;c=c;b=b.bY;c=c.bY;d=BF(b.bZ,c.bZ);if(!d)d=BF(c.b3,b.b3);return d;}
function W1(){var a=this;B.call(a);a.bY=null;a.h9=null;a.bt=null;a.dw=null;a.eU=0;}
function AJk(a,b,c){var d=new W1();AGg(d,a,b,c);return d;}
function AGg(a,b,c,d){a.eU=0;a.bY=b;a.h9=c;a.bt=BJ();a.dw=d;}
function ABy(b){return AAo(b,null);}
function AAo(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Be(b);e=Be(b);f=Be(b);g=Be(b);h=Be(b);i=Kj(d,e,f);j=new W1;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGg(j,i,null,l);m=0;while(m<g){l=AAo(b,c);l.h9=j;BH(j.bt,l);m=m+1|0;}return j;}
function AEC(b,c,d){var e,f,g,h,i;a:{e=b.bY;f=b.bt;g=e.bZ;h=e.b3;i=e.ff;Bs(c,g);G0(c,h,i);Bs(c,f.j);if(d!==null){e=b.dw;if(e!==null&&XR(d,e)){g=(MI(d,b.dw)).bD;break a;}}g=(-1);}Bs(c,g);b=BW(f);while(BX(b)){AEC(B0(b),c,d);}}
function C1(a){return a.bY.bZ;}
function C6(a){return a.bY.b3;}
function L8(a,b){a.bY.bZ=b;}
function KE(a,b){a.bY.b3=b;}
function MQ(a,b){var c;c=a.bY;c.bZ=c.bZ+b|0;}
function GX(a,b){var c;c=a.bY;c.b3=c.b3+b|0;}
function LP(a,b){return C1(a)<=b&&b<C6(a)?1:0;}
function AMT(a){var b,c,d,e,f;b=a.bY;c=b.bZ;d=b.b3;e=b.ff;b=new M;O(b);BL(b,40);BL(V(H(V(H(V(b,c),C(44)),d),C(44)),e),41);b=N(b);c=a.eU;f=new M;O(f);Gr(H(H(f,b),C(44)),c);return N(f);}
function AR6(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return B2(a.bY,c.bY)&&B2(a.bt,c.bt)?1:0;}return 0;}
var HQ=G(0);
function GU(){var a=this;B.call(a);a.cI=null;a.cY=null;}
function A0I(a,b){var c=new GU();Z7(c,a,b);return c;}
function Z7(a,b,c){a.cI=b;a.cY=c;}
function AKx(a,b){var c,d;if(a===b)return 1;if(!Je(b,HQ))return 0;a:{b:{c:{d:{c=b;b=a.cI;if(b!==null){if(!b.bT(c.cI))break c;else break d;}if(c.cI!==null)break c;}b=a.cY;if(b!==null){if(!b.bT(c.cY))break c;else break b;}if(c.cY===null)break b;}d=0;break a;}d=1;}return d;}
function G4(){var a=this;GU.call(a);a.jT=0;a.cO=null;}
function Lo(){var a=this;Lr.call(a);a.qE=null;a.pi=null;}
function ABe(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.qE;e=0;f=0;g=a.pi;a:{while(true){if((e+32|0)>f&&DV(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bb(Cb(b)+j|0,i.length);Oy(b,d,j,f-j|0);e=0;}if(!DV(c)){k=!DV(b)&&e>=f?AZE:AZD;break a;}i=g.data;j=Bb(Cb(c),i.length);l=new OV;l.n7=b;l.rt=c;k=AD1(a,d,e,f,g,0,j,l);e=l.vv;j=l.w4;if(k===null){if(!DV(b)&&e>=f)k=AZE;else if(!DV(c)&&e>=f)k=AZD;}YT(c,g,0,j);if(k!==null)break;}}EU(b,b.Z-(f-e|0)|0);return k;}
var Q8=G(Lo);
function AD1(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ml(h,2))break a;i=AZD;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!MP(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ml(h,3))break a;i=AZD;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CI(l)){i=Eb(1);break a;}if
(j>=d){if(DV(h.n7))break a;i=AZE;break a;}c=j+1|0;m=k[j];if(!C7(m)){j=c+(-2)|0;i=Eb(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ml(h,4))break a;i=AZD;break a;}k=e.data;o=ED(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vv=j;h.w4=f;return i;}
var I5=G(Ed);
var NC=G();
function AVh(a,b){return b.text();}
function NF(){var a=this;B.call(a);a.s$=null;a.s9=null;}
function AUe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.s$;d=a.s9;e=R(BA,8);f=BU(16);g=0;h=0;i=b.length;j=0;while(true){k=BF(j,i);if(k>0)break;k=k>=0?10:b.charCodeAt(j)&65535;if(k==10){l=EO(f,0,g);m=h+1|0;e=AFE(l,e,h);g=0;}else{m=f.data.length;if(m==g)f=OS(f,m*2|0);n=f.data;o=g+1|0;n[g]=k;m=h;g=o;}j=j+1|0;h=m;}c.g(AWF(QX(e,h),ARn(d)));}
var ND=G();
function AIP(a,b){AGI(b);}
function IG(){var a=this;B.call(a);a.b7=null;a.U=null;a.t6=null;a.ho=null;a.dW=null;a.vA=null;a.wl=null;a.w0=null;}
function A0J(a,b,c,d,e){var f=new IG();JH(f,a,b,c,d,e);return f;}
function KB(){var b,c,d,e,f,g,h,i;b=new IG;c=new Ja;d=new HF;FX();Kt(d,A0K);M2(c,d,BO(A0m),BO(A0L),BO(A0M),BO(A0m),BO(A0N),BO(A0O),BO(A0P),BO(A0Q),BO(A0R),BO(A0S));ACu();e=(A0T.fq()).data;f=e.length;g=R(Jx,f);h=g.data;i=0;while(i<f){h[i]=e[i].mX;i=i+1|0;}JH(b,c,g,AEY(S(C(256)),S(C(257)),S(C(258)),S(C(259))),Hh(),AAI(S(C(119)),S(C(120)),S(C(121)),S(C(260))));return b;}
function JH(a,b,c,d,e,f){var g;g=c.data;a.vA=EV(C(156),16.0);a.wl=EV(C(156),17.0);a.w0=EV(C(155),15.0);a.b7=b;a.t6=c;a.ho=d;if(g.length>=15){a.U=e;a.dW=f;return;}b=new BD;Y(b);K(b);}
function JG(){var a=this;CP.call(a);a.cZ=null;a.g3=null;}
function AXU(a){var b=new JG();AG6(b,a);return b;}
function AG6(a,b){var c,d,e,f;FT(a,b);c=ASK(a.t);a.g3=c;d=AC3(a.t,c);a.cZ=d;Pa(a.t,d);Ba(b.m.bz,a.g3);Ba(b.m.dC,a.g3);Ba(b.m.bz,a.cZ);c=b.m.b$;d=new Rg;d.p$=a;Ba(c,d);c=b.m.b$;d=new Iz;e=a.cZ;BP(e);f=new Rd;f.wy=e;N0(d,b,f);Ba(c,d);c=b.m.f8;d=a.cZ;BP(d);e=new Re;e.p4=d;Ba(c,e);c=b.m.gH;d=new Pe;d.q0=a;Ba(c,d);c=b.m.dC;d=new Pf;d.xs=a;Ba(c,d);b=b.m.eZ;c=new Pc;c.oC=a;Ba(b,c);KQ(a);}
function ATd(a,b){return LH(a.cZ,b);}
function AMx(a){FM(a);JE(a.cZ);Z1(a.g3);}
function AUW(a){return MW(0);}
function AHA(a,b,c){G1(a,b,c);a.mc(b,c);}
function AET(a,b,c){JT(a.cZ,new Bf,b,c);}
function AK1(a,b){BP(b);NT(a.g3,b);KL(a.cZ,b);}
function AC$(a,b){if(b.bl!=121)return 0;return 1;}
function ABj(a,b){var c,d,e;if(D$(a.t,a.cZ)){c=a.g3;d=a.cZ;e=new T9;e.tN=a;MR(c,b,d,a,d,e);}return 1;}
function AAP(){var a=this;Cz.call(a);a.lO=null;a.lq=null;a.du=null;a.g5=null;a.fQ=null;a.hP=null;a.n1=null;a.iu=null;a.wd=null;a.mh=null;a.yE=null;a.yG=null;a.gI=null;a.mM=null;a.rL=0;}
function AYl(a){var b=new AAP();AOH(b,a);return b;}
function AOH(a,b){var c,d,e,f,g,h,i;Eu(a,b);c=(KB()).b7.fg;a.lO=c;a.lq=AUo(c);a.du=FW(0,0,300,300);a.g5=UV(0,0,3,3);a.fQ=FW(0,0,300,300);a.hP=AMs();d=R(BA,4);e=d.data;e[0]=C(210);e[1]=C(191);e[2]=C(232);e[3]=C(231);a.n1=d;a.iu=R(Jq,e.length);c=b.bf;f=b.m.bz;g=new Wn;g.fV=a;Ba(f,g);f=b.m.b$;g=new RK;g.xB=a;Ba(f,g);f=b.m.nD;g=new RJ;g.qX=a;Ba(f,g);f=b.m.f8;g=new RI;g.zT=a;Ba(f,g);f=b.m.kp;g=new RH;g.x0=a;Ba(f,g);f=b.m.eZ;g=new RG;g.y8=a;Ba(f,g);b=b.m.dC;f=new RF;f.vl=a;Ba(b,f);h=CO(a.bd.bf,300,300);f=h.bu;b="white";f.fillStyle
=b;b=h.bu;f="white";b.strokeStyle=f;b=h.bu;f=10.0;b.lineWidth=f;h.bu.strokeRect(75.0,140.0,150.0,110.0);h.bu.fillRect(130.0,190.0,40.0,60.0);h.bu.beginPath();h.bu.moveTo(50.0,140.0);h.bu.lineTo(150.0,60.0);h.bu.lineTo(250.0,140.0);h.bu.closePath();h.bu.stroke();Gn(h,C(261),11.0);L3(h,187,187,187);Rq(a,C(262),h);b=CZ(a.bd.bf);CS(b,h);F7(h);a.wd=b;Gb(a.du,b);GF(a.du);BI(a.du.bx,a.lO);BI(a.du.bn,CR(204,120,50));b=CO(c,255,100);a.gI=b;Gn(b,C(156),11.0);b=Bz();i=$rt_str(a.gI.bu.font);g=new M;O(g);H(H(g,C(263)),i);Bt(b,
N(g));EA(a.gI,C(264));L3(a.gI,169,183,198);Rq(a,C(264),a.gI);b=CZ(c);a.mh=b;CS(b,a.gI);Gb(a.fQ,a.mh);GF(a.fQ);HE(a.fQ,CQ(255));HP(a.fQ,a.lO);a.yE=CZ(c);BI(a.g5.bx,a.lq);}
function Rq(a,b,c){Ch(c,b,0.0,20.0);Ch(c,b,0.25,40.0);Ch(c,b,0.5,60.0);Ch(c,b,0.75,80.0);}
function TN(a,b){Kb(FG(),0.5+FG()*0.5,0.5+FG()*0.5,1.0,b.bn);}
function AIc(a,b){var c;a.rL=a.rL+1|0;c=b/5.0;Kb(c-(c|0),1.0,1.0,1.0,a.g5.bn);return US(a.hP,b);}
function AKV(a){var b,c,d,e,f,g;b=a.bd.bf;FB(b,a.lq);c=a.iu.data;d=c.length;e=0;while(e<d){S2(c[e],b,0,0);e=e+1|0;}DG(a.du,b,a.wd,0,0,0.5);f=a.mh;d=0;while(d<7){g=a.fQ;DG(g,b,f,W(d,10+((10*g.s.b|0)/15|0)|0)+5|0,(-5),1.0*d/7.0);d=d+1|0;}g=a.yG;if(g!==null)ZV(a.g5,b,g,0,0,0.0);Wp(a.hP,b,new Bf);Ph(b,C(265));}
function AOa(a,b,c){var d,e,f,g,h,i,j;d=Bz();e=new M;O(e);H(H(e,C(266)),b);Bt(d,N(e));d=Bz();e=new M;O(e);Fu(H(e,C(267)),c);Bt(d,N(e));f=Cc(30.0,c);g=Cc(10.0,c);h=0;while(true){i=a.iu.data;if(h>=i.length)break;j=1+h|0;i[h]=UV(W(g,j)+W(f,h)|0,f,f,f);TN(a,a.iu.data[h]);h=j;}U(a.g5.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.du;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);d=a.fQ;d.A.a=b.a-d.s.a|0;}
function Ov(a,b){var c,d,e,f,g;c=Bz();d=!b.ih?C(268):C(269);e=b.d_;f=b.bl;g=b.tp;b=new M;O(b);Gr(H(V(H(H(H(b,d),e),C(270)),f),C(271)),g);Bt(c,N(b));return 0;}
function Pk(){var a=this;CP.call(a);a.rk=null;a.ee=null;a.c8=null;a.ey=null;a.nE=null;}
function ANk(a,b,c){var d;d=HH(a.t,a.nE);Ih(a.ee,d);Ih(a.c8,d);Hs(a.ee,a.t);Hs(a.c8,a.t);}
function SO(b){return IT(b,ATg());}
function IT(b,c){var d;d=UR();MC(d,KS(b,I8(c,25)),!b?null:IT(b-1|0,c));MC(d,KS(b,I8(c,20)),!b?null:IT(b-1|0,c));MC(d,KS(b,I8(c,15)),!b?null:IT(b-1|0,c));MC(d,KS(b,I8(c,10)),!b?null:IT(b-1|0,c));return IF(d);}
function KS(b,c){var d;if(b){d=new M;O(d);H(H(V(d,b),C(35)),c);c=N(d);}return c;}
function MC(b,c,d){var e,f;e=new HG;f=Kb(FG(),1.0,1.0,1.0,new B_);AEm();Ij(e,f,A0U,A0V);if(d!==null)GO(b,c,e,d);else{d=new YP;d.qy=c;D2(b,c,e,d);}}
function ALE(a,b,c){var d,e;G1(a,b,c);b=a.t.ci;d=Ej(a.ee);e=Ej(a.c8);KJ(a.ee,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);KJ(a.c8,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AKW(a){var b,c,d,e,f,g,h,i;FM(a);b=a.bd.bf;Cw(b,1);c=a.rk;d=a.t;e=d.ci;U(c.mJ,e.b,Cc(2.0,d.b4));U(c.nn,Cc(2.0,d.b4),e.a);FX();f=A0R;g=d.c6;h=e.a/2|0;i=c.mJ;Bx(g,0,h-(i.a/2|0)|0,i,f);g=d.c6;h=e.b/2|0;c=c.nn;Bx(g,h-(c.b/2|0)|0,0,c,f);MB(a.ee,a.t);MB(a.c8,a.t);HV(a.ey);Cw(b,0);}
function AOc(a,b){var c,d,e;c=Ly(a.ey,b);d=LB(a.ee,b.i,a.t.cN);e=LB(a.c8,b.i,a.t.cN);return !c&&!d&&!e?0:1;}
function ATq(a,b,c){return MZ(a.ey,b,c);}
function ASH(a,b,c){return DD(a.ey);}
function AI0(a,b,c,d){var e,f,g;e=Ku(a.ey,b,c,d);f=Ms(a.ee,b.i,c,d);g=Ms(a.c8,b.i,c,d);return !e&&!f&&!g?0:1;}
function Us(){var a=this;CP.call(a);a.iF=null;a.fi=null;a.jV=null;a.lh=null;}
function AKE(a,b,c){if(b===0.0)R2(a);}
function AQA(a){var b;FM(a);b=a.bd.bf;LL(a.fi,b);HV(a.iF);}
function R2(a){var b,c,d,e,f,g,h;b=a.jV;if(b!==null){JW(a.fi,b);LN(b);}b=(KB()).U;c=AX7(a.t,new Oa);d=EV(C(155),14.0);e=ANh();f=0;while(f<300){g=C8(f);h=new Ul;h.pb=C(272);h.pa=g;h.o_=C(273);Nc(e,C(272),g,C(273),h);f=f+1|0;}OG(c,Yu(e));AAh(c,b,d);g=AAN(a.t);h=AAs(c,a.t);AAa(h,b.lp,b.k5);KX(g,h);g.e7=b;Ip(g,C(274),a.lh,2.0);a.jV=g;HS(a.fi,g);QY(a);}
function AJn(a,b,c){G1(a,b,c);ZK(a.fi,b,c);QY(a);}
function QY(a){var b,c,d;b=a.t.ci;FF(a.jV,B$((b.b*2|0)/10|0,(b.a*4|0)/10|0),B$((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.jV;b=AAr(c.S.r);d=new M;O(d);H(H(d,C(275)),b);Ip(c,N(d),a.lh,2.0);}
function AKP(a,b){return RN(a.fi,b);}
function Or(){var a=this;CP.call(a);a.ku=null;a.g2=null;a.fR=null;a.i8=null;a.qr=null;a.iX=null;a.he=null;a.gB=null;a.jx=0;a.g1=0;}
function Pi(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.g2.j>0){d=FG();e=a.g2;f=d*(e.j-1|0)|0;e=Ey(e,f);Ey(a.fR,f);f=a.g1;g=e.s;a.g1=f-W(g.b,g.a)|0;IP(a.ku,e.c_);}c=c+1|0;}}
function Mm(a,b){var c,d,e,f,g,h,i,j;c=Jn(a.t);CC(c,a.i8);d=0;while(d<b){e=I8(a.iX,1+(FG()*19.0|0)|0);f=AI1();g=f.c_;h=a.ku;BP(c);i=new RY;i.uc=c;BI(g,JC(h,e,i));(YO(FG(),1.0,1.0,f.bx)).bO=0.5;h=f.A;g=f.c_;U(h,g.bp|0,g.bN|0);h=f.s;g=f.c_;U(h,g.bm|0,g.bO|0);BH(a.fR,e);BH(a.g2,f);j=a.g1;h=f.s;a.g1=j+W(h.b,h.a)|0;d=d+1|0;}a.gB=JY(a.ku);}
function ASw(a){var b,c,d,e,f,g,h,i;FM(a);b=a.bd.bf;Cw(b,1);c=a.t.c6;if(a.fR.j){d=a.gB;d=CO(c,d.b,d.a);CC(d,a.i8);e=a.i8.ds;Bx(c,0,0,a.gB,a.qr);f=0;while(f<a.fR.j){g=Br(a.g2,f);h=Br(a.fR,f);g=g.c_;Ch(d,h,g.bp,g.bN+e);f=f+1|0;}g=a.he;if(!(g!==null&&BS(g)==a.gB.b&&Da(a.he)==a.gB.a))a.he=CK(a.he,CZ(c));CS(a.he,d);F7(d);i=0;while(i<a.fR.j){d=Br(a.g2,i);HE(d,CQ(0));DG(d,c,a.he,0,0,0.0);i=i+1|0;}}Cw(b,0);}
function AH1(a,b){var c,d;if(a.jx){c=a.gB;d=Bb(W(c.b,c.a),2211840);if(a.g1/d<=0.7)Mm(a,IW(a.iX,5));else Pi(a,IW(a.iX,5));}return a.jx;}
function Uo(){var a=this;Cz.call(a);a.eM=null;a.g4=null;a.iv=null;a.k9=null;a.er=0;a.uO=0;a.qs=null;a.kP=0;a.o5=0;a.pH=null;a.tY=null;}
function AHz(a){var b,c;b=a.er;c=new M;O(c);V(H(c,C(276)),b);$rt_globals.console.info($rt_ustr(N(c)));FB(a.eM,a.qs);Jr(a.iv,a.er,0,Gk(a),5000,a.k9.b,20);Cw(a.eM,1);Y5(a.iv,a.eM);Cw(a.eM,0);b=a.er;c=new M;O(c);V(H(c,C(276)),b);$rt_globals.console.info($rt_ustr(N(c)));U6(a.g4,a.er/a.kP|0);UG(a.g4,a.er,Gk(a),a.tY,a.eM);}
function AHy(a,b,c){a.k9=b;TI(a.g4,B$(0,0),50,Gk(a),c);LJ(a.g4,a.eM,0,Gk(a));}
function XL(a){return 5000-Gk(a)|0;}
function Gk(a){return Bb(a.uO,a.k9.a);}
function Df(){var a=this;Cz.call(a);a.mT=null;a.hj=null;a.x1=0.0;}
function A0W(a){var b=new Df();GM(b,a);return b;}
function GM(a,b){Eu(a,b);a.mT=AB$(0,0,64);a.hj=new Bf;OA(b.b0,IE(BG(a)));}
function TJ(a){FB(a.bd.bf,a.mT);}
function Uc(a,b,c){Cx(a.hj,b);a.x1=c;}
var R5=G(Df);
var AA3=G(Df);
function AYc(a){var b=new AA3();AQY(b,a);return b;}
function AQY(a,b){var c,d,e,f,g,h;GM(a,b);c=b.b0;d=new Sy;d.yt=a;e=R(B,1);e.data[0]=C(277);CU(c,d,C(278),e);f=b.b0;g=new Sx;g.zI=a;h=R(B,1);h.data[0]=ADq([1,2,3,4,5]);CU(f,g,C(279),h);f=b.b0;g=new SA;g.n3=a;h=R(B,1);h.data[0]=AW6([1,2,3,4,5]);CU(f,g,C(280),h);f=b.b0;g=new Sz;g.y2=a;h=R(B,1);h.data[0]=El([1,2,3,4,5]);CU(f,g,C(281),h);f=b.m.b$;d=new Iz;g=new Sw;g.z7=a;c=new Sv;c.pC=a;Y$(d,b,g,c);Ba(f,d);}
function Y8(a,b){var c,d,e,f,g,h;c=b.data;d=Bz();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((RU(b,1)).h$));d=Bz();e=c[1];if(b===null)f=C(38);else{f=new M;O(f);BT(f,C(43));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BT(f,C(44));V(f,c[g]);g=g+1|0;}BT(f,C(45));f=N(f);}h=new M;O(h);H(H(H(H(h,C(283)),e),C(284)),f);Bt(d,N(h));}
function NP(){var a=this;Df.call(a);a.ep=null;a.fW=null;a.mn=null;a.vr=null;a.nF=null;}
function AMS(a,b){b=b/5.0;Kb(b-(b|0),1.0,1.0,1.0,a.fW.bn);return 0;}
function AKF(a){TJ(a);DG(a.ep,a.bd.bf,a.vr,0,0,0.5);ZV(a.fW,a.bd.bf,a.mn,0,0,0.0);Ph(a.bd.bf,C(265));}
function AUQ(a,b,c){var d,e,f;Uc(a,b,c);U(a.fW.A,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.ep;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Ui(){var a=this;Df.call(a);a.gk=null;a.oT=null;a.kJ=null;a.jC=null;a.il=null;}
function AVF(a){var b,c,d,e,f,g;TJ(a);b=a.bd.bf;c=a.jC;Mb(b,c.b,c.a,a.il);b=a.gk;c=a.oT;d=a.hj;e=a.bd.bf;f=0;while(true){g=0;while(true){DG(b,e,c,g,f,0.5);g=g+BS(c)|0;if(g>=d.b)break;}f=f+Da(c)|0;if(f>=d.a)break;}Hp(a.bd.bf);}
function AMn(a,b,c){Uc(a,b,c);U(a.il,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function Ua(){var a=this;Cz.call(a);a.eu=null;a.kQ=null;a.fZ=null;a.cb=null;a.eX=0;a.h2=null;a.eW=0;a.z$=20;a.Az=11;a.xU=220;a.kf=null;a.zt=5000;a.hx=0;a.ga=null;}
function AUj(a){var b,c,d,e,f,g,h;b=a.h2;c=a.eW;d=a.kf;Jr(b,c,0,d.a,5000,d.b,20);Cw(a.eu,1);Y5(a.h2,a.eu);if(a.cb===null){e=0;while(e<11){e=e+1|0;c=20*e|0;Ch(a.kQ,C8(e),0.0,c);}b=CZ(a.eu);a.cb=b;CS(b,a.kQ);}if(a.eW<=a.eX)while(true){f=a.eX;if(f<=a.eW)break;a.eX=f-20|0;b=a.fZ;g=a.hx-1|0;a.hx=g;Ch(b,C8(g),0.0,20.0);Ix(a.cb,a.fZ,0,a.eX%220|0);EH(a.fZ);}else while(a.eX<(a.eW-20|0)){b=a.fZ;g=a.hx+1|0;a.hx=g;Ch(b,C8((g+11|0)-1|0),0.0,20.0);Ix(a.cb,a.fZ,0,a.eX%220|0);EH(a.fZ);a.eX=a.eX+20|0;}b=FW(0,0,BS(a.cb),Da(a.cb));H2(b,
0,0,BS(a.cb),Da(a.cb));HE(b,a.ga.data[0]);HP(b,a.ga.data[1]);DG(b,a.eu,a.cb,400,0,1.0);g=a.eW%220|0;f=Bb(Da(a.cb)-g|0,200);d=FW(0,0,BS(a.cb),f);H2(d,0,g,BS(a.cb),f);HE(d,a.ga.data[0]);HP(d,a.ga.data[1]);DG(d,a.eu,a.cb,0,0,1.0);h=FW(0,f,BS(a.cb),(Da(a.cb)-f|0)-20|0);H2(h,0,0,BS(a.cb),(Da(a.cb)-f|0)-20|0);HE(h,a.ga.data[1]);HP(h,a.ga.data[0]);DG(h,a.eu,a.cb,0,0,1.0);}
function AKZ(a,b,c){Cx(a.kf,b);}
function AR2(a,b){return 0;}
function Tz(a){return 5000-a.kf.a|0;}
function Js(){Df.call(this);this.d7=0;}
function S1(a){var b,c;b=a.bd.b0;c=new W7;c.pB=a;SJ(b,c,NY(a));}
function QV(a){var b,c,d,e;b=a.d7+1|0;a.d7=b;c=IE(F(Js));d=new M;O(d);H(H(V(H(d,C(285)),b),C(35)),c);e=N(d);c=a.bd.b0;d=new ZN;d.pU=e;VR(c,e,d,NY(a));}
function NY(a){var b;b=new RV;b.xk=a;return b;}
function ANT(a,b,c,d){a:{switch(c){case 0:break;case 2:QV(a);break a;default:break a;}S1(a);}return 1;}
function TS(){var a=this;Cz.call(a);a.t7=null;a.gd=null;a.lL=null;a.hR=null;}
function AVt(a){var b;b=a.bd.bf;FB(b,a.t7);DG(a.gd,b,a.lL,0,0,0.5);}
function AP6(a,b,c){var d,e,f;d=a.gd;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function G9(){var a=this;Cz.call(a);a.vG=null;a.cj=null;a.d3=null;a.da=null;a.e6=null;a.et=null;}
function Ne(a,b){var c,d;Eu(a,b);a.vG=CQ(20);a.cj=TM();a.d3=new Bf;a.da=new Bf;a.e6=new Bf;a.et=new Bf;c=b.m.b$;d=new WG;d.zX=a;Ba(c,d);Ba(b.m.bz,a);b=a.cj.bx;FX();BI(b,A0m);BI(a.cj.bn,A0n);}
function ACA(a){var b,c,d;b=a.bd.bf;FB(b,a.vG);c=a.cj;d=c.A;Bx(b,d.b,d.a,c.s,c.bx);Cw(b,1);c=a.cj;d=c.A;AAq(b,d.b,d.a,c.s,a.d3,a.da,a.e6,a.et,c.bn);Cw(b,0);}
function AOw(a,b){return 0;}
var U$=G(G9);
function ARB(a,b,c){var d,e,f;d=a.cj;e=d.A;f=b.b;d=d.s;U(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);U(a.d3,0,0);U(a.da,Bb(b.b,b.a),Bb(b.b,b.a));b=a.e6;d=a.d3;U(b,d.b,d.a+20|0);b=a.et;d=a.da;U(b,d.b,d.a+40|0);}
function ATa(a,b){var c,d,e;Cx(a.d3,b.i);b=a.da;c=a.cj;d=c.A;e=d.b;c=c.s;U(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.e6;c=a.d3;U(b,c.b,c.a+20|0);b=a.et;c=a.da;U(b,c.b,c.a+40|0);return 0;}
function U9(){var a=this;G9.call(a);a.fw=null;a.gf=null;}
function AU$(a,b){var c;c=a.da;b=b.i;c.a=b.a-50|0;a.et.a=b.a+100|0;return 1;}
function AKA(a){var b,c,d,e,f,g,h;b=Bd(a.d3.b,a.e6.b);c=Bb(a.da.b,a.et.b);d=Bb(a.d3.a,a.da.a)-50|0;e=Bd(a.e6.a,a.et.a)+50|0;Hu(a.cj,b,d,c-b|0,e-d|0);ACA(a);f=a.cj.A.b-10|0;Ue(a,a.bd.bf,10,f,a.d3,a.e6);g=a.cj;h=g.A.b+g.s.b|0;Ue(a,a.bd.bf,h,f,a.da,a.et);}
function Ue(a,b,c,d,e,f){var g;U(a.fw,c,a.cj.A.a);U(a.gf,d,e.a-a.cj.A.a|0);g=a.fw;Bx(b,g.b,g.a,a.gf,a.cj.bx);U(a.fw,c,e.a);U(a.gf,d,f.a-e.a|0);e=a.fw;Bx(b,e.b,e.a,a.gf,a.cj.bn);U(a.fw,c,f.a);e=a.gf;g=a.cj;U(e,d,(g.A.a+g.s.a|0)-f.a|0);e=a.fw;Bx(b,e.b,e.a,a.gf,a.cj.bx);}
function AID(a,b,c){}
function Y7(){var a=this;CP.call(a);a.hV=null;a.ew=null;a.iL=null;a.iM=null;a.pT=null;}
function ALz(a,b,c){if(b===0.0)VZ(a);}
function ATY(a){var b;FM(a);b=a.bd.bf;LL(a.ew,b);HV(a.hV);}
function VZ(a){SY(a,a.iL);SY(a,a.iM);a.iL=Y4(a,0.5,0,C(286));a.iM=Y4(a,1.0,1,C(287));HS(a.ew,a.iL);HS(a.ew,a.iM);XY(a);}
function SY(a,b){if(b!==null){JW(a.ew,b);LN(b);}}
function Y4(a,b,c,d){var e,f,g;e=AAN(a.t);f=new Qa;g=new Yv;g.q5=a;g.q6=e;g.q4=d;Wd(f);f.ki=new B_;f.mB=new Bf;f.qw=g;f.qt=b;if(c)f=AAs(f,a.t);KX(e,f);e.e7=Hh();return e;}
function AS7(a,b,c){G1(a,b,c);ZK(a.ew,b,c);XY(a);}
function XY(a){var b;b=a.t.ci;FF(a.iM,B$((b.b*2|0)/10|0,(b.a*2|0)/10|0),B$((b.b*7|0)/10|0,(b.a*7|0)/10|0));FF(a.iL,B$(b.b/10|0,b.a/10|0),B$((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function AMo(a,b){return RN(a.ew,b);}
var Nr=G(JG);
function AJD(a){return MW(1);}
function AVR(a,b,c){AET(a,b,c);}
function Ja(){var a=this;B.call(a);a.xu=null;a.fg=null;a.uv=null;a.zA=null;a.rF=null;a.nr=null;a.pG=null;a.xx=null;a.l8=null;a.lZ=null;a.i7=null;}
function A0X(a,b,c,d,e,f,g,h,i,j,k){var l=new Ja();M2(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function M2(a,b,c,d,e,f,g,h,i,j,k,l){a.xu=b;a.fg=c;a.uv=d;a.zA=e;a.rF=f;a.nr=g;a.pG=h;a.xx=i;a.l8=j;a.lZ=k;a.i7=l;}
var ABr=G(0);
function AAF(){var a=this;B.call(a);a.fy=null;a.hh=null;a.pI=null;a.n5=null;}
function AEY(a,b,c,d){var e=new AAF();AVd(e,a,b,c,d);return e;}
function AVd(a,b,c,d,e){a.fy=b;a.hh=c;a.pI=d;a.n5=e;}
var AEe=G(0);
function Hh(){var b,c,d;b=new IN;c=new I1;AEm();d=A0Y;M6(c,d,A0Z,A00,A01,A02,d);Mc(b,c,AGC(),AGS(S(C(288)),S(C(117)),S(C(118))),AGC(),AAt(1,0.125),A03,A04);return b;}
function AGC(){var b,c;b=new HG;c=S(C(289));AEm();Ij(b,c,A0U,A0V);return b;}
function AFZ(){var b,c;b=new HG;c=S(C(118));AIb();Ij(b,c,A05,A06);return b;}
function AGp(){var b,c;b=new HG;AFN();c=A07;AIt();Ij(b,c,A08,A09);return b;}
function AG4(){var a=this;B.call(a);a.sD=null;a.nG=null;a.uW=null;a.oj=null;}
function AAI(a,b,c,d){var e=new AG4();AIQ(e,a,b,c,d);return e;}
function AIQ(a,b,c,d,e){a.sD=b;a.nG=c;a.uW=d;a.oj=e;}
function AAl(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dW.nG;break a;case 3:if(c!=3){b=b.dW.oj;break a;}b=b.dW.uW;break a;default:b=b.b7.fg;break a;}b=b.dW.sD;}return b;}
function IY(a,b,c){return AAl(a,b,0,c);}
function M7(){var a=this;B.call(a);a.jQ=null;a.jl=null;}
function Nl(a,b){var c;c=a.jl;a.jl=b;return c;}
function J7(){var a=this;M7.call(a);a.bW=null;a.ca=null;a.f4=0;a.gh=0;}
function Ko(a){var b;b=Lt(a);if(b==2){if(Lt(a.ca)<0)a.ca=Ob(a.ca);return Qn(a);}if(b!=(-2))return a;if(Lt(a.bW)>0)a.bW=Qn(a.bW);return Ob(a);}
function Lt(a){var b,c;b=a.ca;c=b===null?0:b.f4;b=a.bW;return c-(b===null?0:b.f4)|0;}
function Ob(a){var b;b=a.bW;a.bW=b.ca;b.ca=a;Et(a);Et(b);return b;}
function Qn(a){var b;b=a.ca;a.ca=b.bW;b.bW=a;Et(a);Et(b);return b;}
function Et(a){var b,c,d;b=a.ca;c=b===null?0:b.f4;b=a.bW;d=b===null?0:b.f4;a.f4=Bd(c,d)+1|0;a.gh=1;b=a.bW;if(b!==null)a.gh=1+b.gh|0;b=a.ca;if(b!==null)a.gh=a.gh+b.gh|0;}
var AGw=G();
function AJl(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new QN;c=c.buffer;d.f3=c;d.nv=new $rt_globals.Int8Array(c);d.k0=new $rt_globals.Uint16Array(c);d.uk=new $rt_globals.Int32Array(c);d.q1=new $rt_globals.Float32Array(c);d.rh=new $rt_globals.Float64Array(c);e=d.f3.byteLength;c=new M;O(c);V(H(c,C(290)),e);CJ(N(c));e=b.callToCpp1();c=new M;O(c);V(H(c,C(291)),e);CJ(N(c));f=b.callToCpp2();c=new M;O(c);Fu(H(c,C(292)),f);CJ(N(c));c=NO(d,b.getC8String());g=new M;O(g);H(H(g,C(293)),c);CJ(N(g));c
=N5(d,b.getC16String());g=new M;O(g);H(H(g,C(294)),c);CJ(N(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.f3,h,8));c=AE7(i);g=new M;O(g);H(H(g,C(295)),c);CJ(N(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.f3,h,8));c=ASq(j);g=new M;O(g);H(H(g,C(296)),c);CJ(N(g));k=AC6(d,b.getCDoubleArray8(),8);l=AVI(k);c=new M;O(c);H(H(c,C(297)),l);CJ(D3(c));l=AVv(b.getC8String(),C(298),d);c=Mu();H(H(c,C(299)),l);CJ(D3(c));l=AOS(b.getC16String(),C(300),
d);c=Mu();H(H(c,C(301)),l);CJ(D3(c));c=AQU(i,d,b.getCIntArray8(),El([11,22,33,44,55,66,77,88]));g=Mu();H(H(g,C(302)),c);CJ(D3(g));c=ASJ(j,d,b.getCFloatArray8(),100,El([111,222,333,444,555,666,777,888]));g=Mu();H(H(g,C(303)),c);CJ(D3(g));b=AS8(k,d,b.getCDoubleArray8(),1000,El([1111,2222,3333,4444,5555,6666,7777,8888]));c=Mu();H(H(c,C(304)),b);CJ(D3(c));}
function ASJ(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(305);h=0;i=e;a:{while(h<g){if(Dl(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.q1[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(306);}return C(307);}
function AS8(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(305);h=0;i=e;a:{while(h<g){if(HN(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.rh[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(306);}return C(307);}
function AQU(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(305);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.uk[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(306);}return C(307);}
function AVv(b,c,d){var e,f,g,h;e=NO(d,b);if(!Bn(c,e))return C(308);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.nv[h])return C(309);f=f+1|0;}return C(306);}
function AOS(b,c,d){var e,f,g,h;e=N5(d,b);if(!Bn(c,e))return C(308);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.k0[h>>>1|0]&65535))return C(309);f=f+1|0;}return C(306);}
function CJ(b){QK(C(2),b);}
function AND(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Rg(){B.call(this);this.p$=null;}
function AJg(a,b){return AC$(a.p$,b);}
function Rd(){B.call(this);this.wy=null;}
function ALZ(a,b){JK(a.wy,b);}
function Re(){B.call(this);this.p4=null;}
function ATp(a,b,c){return Hm(a.p4,b,c);}
function Pe(){B.call(this);this.q0=null;}
function AQ1(a){var b,c;b=a.q0.cZ;BP(b);c=new Pn;c.oZ=b;return c;}
function Pf(){B.call(this);this.xs=null;}
function ANE(a,b,c,d){return Kr(a.xs.cZ,c,d);}
function Pc(){B.call(this);this.oC=null;}
function AOu(a,b){b=b;return ABj(a.oC,b);}
function AGY(){Jq.call(this);this.c_=null;}
function AI1(){var a=new AGY();AUM(a);return a;}
function FW(a,b,c,d){var e=new AGY();ANA(e,a,b,c,d);return e;}
function AUM(a){Wq(a);a.c_=new B_;}
function ANA(a,b,c,d,e){Wq(a);a.c_=new B_;Hu(a,b,c,d,e);}
function GF(a){var b,c;b=a.s;c=a.c_;U(b,c.bm-c.bp|0,c.bO-c.bN|0);}
function Gb(a,b){H2(a,0,0,BS(b),Da(b));}
function H2(a,b,c,d,e){Cv(a.c_,b,c,d,e);}
function DG(a,b,c,d,e,f){var g;g=a.A;EY(b,g.b+d|0,g.a+e|0,a.s,a.c_,c,a.bn,a.bx,f);}
function HE(a,b){BI(a.bn,b);}
function HP(a,b){BI(a.bx,b);}
function Wn(){B.call(this);this.fV=null;}
function AJy(a,b){var c,d,e,f,g,h,i;c=a.fV;d=c.mM;if(d!==null){e=c.du.A;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.mM=g;}d=b.i;f=d.b;c=c.g5;e=c.s;h=f-e.b|0;f=d.a-e.a|0;U(c.A,h,f);c=a.fV;d=c.bd.b0;b=b.i;f=0;a:{while(true){i=c.iu.data;if(f>=i.length)break;if(Eq(i[f],b)){b=c.n1.data[f];break a;}f=f+1|0;}b=null;}GT(d,b);return 1;}
function AHQ(a,b,c,d){if(!c&&d==2){b=a.fV;TN(b,b.du);}return 1;}
function AJs(a,b,c){var d,e;d=Bz();e=new M;O(e);V(H(e,C(310)),c);Bt(d,N(e));if(!c){d=b.i;b=a.fV;b.mM=!Eq(b.du,d)?null:d;WX(a.fV.hP,d.b,d.a);b=a.fV;Rp(b.hP,J8(b.bd.b0));}return A0x;}
function AIF(a,b,c){var d;b=Bz();d=new M;O(d);V(H(d,C(311)),c);Bt(b,N(d));return 1;}
function RK(){B.call(this);this.xB=null;}
function ATF(a,b){return Ov(a.xB,b);}
function RJ(){B.call(this);this.qX=null;}
function AQ3(a,b){return Ov(a.qX,b);}
function RI(){B.call(this);this.zT=null;}
function ANU(a,b,c){var d,e;Bt(Bz(),C(312));d=!c?C(313):C(28);e=new M;O(e);H(H(H(e,C(314)),d),C(315));X2(b,N(e));return 1;}
function RH(){B.call(this);this.x0=null;}
function AHW(a){Bt(Bz(),C(316));}
function RG(){B.call(this);this.y8=null;}
function AP_(a,b){Bt(Bz(),C(317));return 1;}
function RF(){B.call(this);this.vl=null;}
function ATO(a,b,c,d){var e,f,g;b=a.vl;e=( -d|0)/10|0;b=b.du;f=b.s;f.b=f.b+e|0;f.a=f.a+e|0;b=b.A;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function HF(){var a=this;B_.call(a);a.gX=0;a.g0=0;a.gY=0;a.gZ=0;}
function CQ(a){var b=new HF();AVj(b,a);return b;}
function CR(a,b,c){var d=new HF();AKN(d,a,b,c);return d;}
function S(a){var b=new HF();ASP(b,a);return b;}
function FD(a,b,c,d){var e=new HF();Su(e,a,b,c,d);return e;}
function BO(a){var b=new HF();Kt(b,a);return b;}
function AVj(a,b){Su(a,b,b,b,255);}
function AKN(a,b,c,d){Su(a,b,c,d,255);}
function ASP(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.gX=Ju(P(b,1))*17|0;a.g0=Ju(P(b,2))*17|0;a.gY=Ju(P(b,3))*17|0;a.gZ=255;}else{a.gX=Ma(P(b,1),P(b,2));a.g0=Ma(P(b,3),P(b,4));a.gY=Ma(P(b,5),P(b,6));a.gZ=J(b)!=9?255:Ma(P(b,7),P(b,8));}H6(a.gX,a.g0,a.gY,a.gZ,a);return;}}
function Su(a,b,c,d,e){a.gX=b;a.g0=c;a.gY=d;a.gZ=e;H6(b,c,d,e,a);}
function Kt(a,b){a.gX=b.gX;a.g0=b.g0;a.gY=b.gY;a.gZ=b.gZ;BI(a,b);}
function Ju(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Ma(b,c){return (16*Ju(b)|0)+Ju(c)|0;}
function NE(){var a=this;B.call(a);a.mJ=null;a.nn=null;}
function AEg(){var a=this;B.call(a);a.fA=null;a.cq=null;a.fn=null;a.gQ=null;a.mW=null;a.cn=null;a.gy=null;a.cX=0;a.fF=0;a.nj=0;a.hH=0;a.gM=0;a.kb=null;a.lv=null;a.nQ=null;}
function ADR(){var a=new AEg();ASY(a);return a;}
function ASY(a){a.cq=TM();a.fn=new Bf;a.gQ=new Bf;a.cn=A0$;a.hH=(-1);}
function KR(a,b){Xj(a);a.cn=b;}
function Ih(a,b){a.fA=b;Xj(a);}
function Ik(a,b){var c,d,e,f,g;a.mW=b.js;c=b.bg.h_;BI(a.cq.bn,c);c=b.iO.l_;BI(a.cq.bx,c);d=0;while(true){e=a.cn.data;if(d>=e.length)break;c=e[d];f=b.bg;c.kh=f;c=c.dx;g=f.ls;f=f.h_;BI(c.bn,g);BI(c.bx,f);d=d+1|0;}}
function OM(a){a.gy=CK(a.gy,null);U(a.fn,0,0);a.cn=A0$;a.hH=(-1);UU(a.cq);}
function Hs(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Jn(b);d=b.b4;BP(a.fA);CC(c,a.fA);e=KH(a.fA,1.25);f=0;a.cX=Cc(2.0,d);a.fF=Cc(3.0,d);a.nj=Cc(12.0,d);g=0;h=a.cn.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=SH(c,l.mj);n=a.nj;n=(n+m|0)+n|0;f=Bd(f,n);b=l.dx;l=b.A;l.b=g;l.a=0;l=b.s;l.b=n;l.a=e;Cv(b.c_,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.fn;b.b=g;b.a=e;b=a.cq.s;n=a.gM;if(!n){m=a.cX;m=(g+m|0)+W(m,a.cn.data.length)|0;}else m=(f+(a.cX*2|0)|0)+(a.fF*2|0)|0;b.b=m;if(!n)e=e+(a.cX*2|0)|0;else{n=a.cX;e=(W(e+n|0,a.cn.data.length)
+n|0)+(a.fF*2|0)|0;}b.a=e;}
function KJ(a,b,c){var d,e,f,g,h,i,j;U(a.cq.A,b,c);d=a.cX+a.fF|0;e=a.cn.data;f=e.length;g=0;h=d;while(g<f){i=e[g].dx;j=i.A;j.b=b+d|0;j.a=c+h|0;if(!a.gM){if(!i.s.b)AAX();d=d+(i.s.b+a.cX|0)|0;}else{if(!i.s.a)AAX();h=h+(i.s.a+a.cX|0)|0;}g=g+1|0;}}
function AAX(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Ej(a){var b,c;b=a.fn;if(b.b&&b.a)return a.cq.s;c=new Bu;Bi(c,C(318));K(c);}
function Xj(a){U(a.fn,0,0);}
function MB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=b.c6;if(!a.cn.data.length)return;a:{if(a.gy!==null){d=a.fn;if(W(d.b,d.a))break a;}d=a.fn;if(!W(d.b,d.a))Hs(a,b);d=a.fn;e=d.b;f=d.a;if(!W(e,f))return;d=CO(c,e,f);CC(d,a.fA);g=KH(a.fA,0.125);h=a.fA;i=h.ds;j=g+i-(i+h.eT)/16.0;k=a.cn.data;f=k.length;l=0;while(l<f){h=k[l];Ch(d,h.mj,h.dx.c_.bp+a.nj,j);l=l+1|0;}h=CK(a.gy,CZ(c));a.gy=h;CS(h,d);F7(d);}if(!KY(a.cq)){d=a.cq;ACj(c,d.s,d.A,d.bx,a.cX,a.gQ);d=a.cq;h=d.s;m=d.A;d=d.bn;e=a.cX;n=a.gQ;n.b=(h.b-e|0)-e|0;n.a=(h.a-
e|0)-e|0;Bx(c,m.b+e|0,m.a+e|0,n,d);if(a.gM){d=a.cq;AEI(c,d.s,d.A,0,0,QQ(a.mW,b.b4),a.mW.m1,a.gQ);}}k=a.cn.data;l=k.length;o=0;while(o<l){DG(k[o].dx,c,a.gy,0,0,0.0);o=o+1|0;}b:{if(a.gM){k=a.cn.data;l=k.length;o=0;while(true){if(o>=l)break b;h=k[o].dx;m=a.gQ;e=(a.cq.s.b-(a.cX*2|0)|0)-(a.fF*2|0)|0;b=h.s;e=e-b.b|0;m.b=e;m.a=b.a;if(e>0){d=h.A;Bx(c,d.b+b.b|0,d.a,m,h.bx);}o=o+1|0;}}}}
function LB(a,b,c){var d,e,f,g,h,i,j;d=Eq(a.cq,b);e=!d?(-1):OU(a,b);f=a.hH;if(f!=e){if(f>=0){g=a.cn.data[f];WH(g,0);if(a.nQ!==null){h=a.hH;i=Bz();j=new M;O(j);H(H(V(H(j,C(319)),h),C(320)),g);Bt(i,N(j));}}if(e>=0){i=a.cn.data[e];g=a.lv;if(g!==null)g.nW(b,e,i);WH(i,1);}a.hH=e;}return d&&Ge(c)?1:0;}
function Ms(a,b,c,d){var e,f;e=OU(a,b);if(e>=0){f=a.cn.data[e];if(!WA(f))f.ll.o();}return 1;}
function OU(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cn.data;if(c>=d.length)return (-1);e=d[c].dx;if(Eq(e,b))return c;if(a.gM){f=e.A;g=f.b;e=e.s;h=e.b;g=g+h|0;i=f.a;f=a.gQ;f.b=(a.cq.s.b-(a.cX*2|0)|0)-h|0;f.a=e.a;if(ABz(b,g,i,f))break;}c=c+1|0;}return c;}
function AAg(a){a.gM=1;}
function Vz(){B.call(this);this.us=null;}
function APC(a,b){var c;c=a.us;if(b.bl==32)OM(c.c8);return 0;}
function Vv(){B.call(this);this.v1=null;}
function ASL(a,b){var c,d,e,f;b=b;c=a.v1;Bt(Bz(),C(321));if(!DD(c.ey)){d=c.ey;b=b.i;e=SO(4);f=new UF;f.yT=c;GD(d,b,e,f);}return 1;}
function ACk(){var a=this;B.call(a);a.ko=null;a.iP=0.0;}
function EV(a,b){var c=new ACk();AQz(c,a,b);return c;}
function AQz(a,b,c){a.ko=b;a.iP=c;}
function ASB(a,b){if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){b=b;return a.iP===b.iP&&B2(a.ko,b.ko)?1:0;}return 0;}
var Vw=G();
function AVN(a){Bt(Bz(),C(322));}
var Vx=G();
function AIS(a){Bt(Bz(),C(323));}
function C$(){var a=this;B.call(a);a.dx=null;a.ll=null;a.kh=null;a.jv=null;a.mq=null;a.mj=null;}
function AE9(a,b,c){var d=new C$();Mg(d,a,b,c);return d;}
function AXz(a,b,c,d,e){var f=new C$();ABp(f,a,b,c,d,e);return f;}
function Mg(a,b,c,d){ABp(a,b,c,d,null,null);}
function ABp(a,b,c,d,e,f){var g;g=AI1();a.dx=g;a.mj=c;a.kh=d;a.mq=f;a.ll=b;BI(g.bn,d.ls);BI(a.dx.bx,d.h_);a.jv=e;}
function WA(a){return a.jv===null?0:1;}
function WH(a,b){BI(a.dx.bx,!b?a.kh.h_:a.kh.uL);}
function Xl(){B.call(this);this.yl=null;}
function ANK(a,b){return b.ih&&b.bl==32?1:0;}
function Xn(){B.call(this);this.v2=null;}
function AIr(a,b){var c,d,e,f,g,h;b=b;c=a.v2;if(!DD(c.iF)){d=c.iF;b=b.i;e=R(C$,1);f=e.data;g=new C$;h=new Qw;h.oq=c;Mg(g,h,C(324),d.im.bg);f[0]=g;GD(d,b,F$(e),A0y);}return 1;}
var AEs=G();
function AG2(b){var c,d;c=CO(b,250,64);Gn(c,C(261),25.0);L3(c,187,187,187);Ch(c,C(325),0.0,24.0);Ch(c,C(325),0.25,56.0);d=CZ(b);CS(d,c);F7(c);return d;}
function ACs(b){var c;c=new Tk;c.ix=b;return c;}
function Xm(){B.call(this);this.r5=null;}
function ARx(a,b,c,d){return LG(a.r5,b,c,d);}
function AGz(){var a=this;B.call(a);a.mS=0;a.mU=0;}
function ATg(){var a=new AGz();AT9(a);return a;}
function AT9(a){var b,c;b=AGc(GB((AFe())));c=GB((AFe()))^(-559038737);a.mS=b;a.mU=c;c=0;while(c<19){Td(a);c=c+1|0;}}
function Td(a){var b,c;b=a.mS;c=a.mU;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.mS=c;a.mU=b;return b;}
function AGc(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function IW(a,b){return 5.9604644775390625E-8*(Td(a)&16777215)*b|0;}
function NU(){B.call(this);this.qc=null;}
function APN(a,b,c){var d;d=a.qc;if(b===0.0)Mm(d,100);}
function NS(){B.call(this);this.wu=null;}
function AQb(a,b){var c,d,e;c=a.wu;d=b.bl;if(d==32){c.jx=c.jx?0:1;e=1;}else if(d==13){Mm(c,1);e=1;}else if(d!=8)e=0;else{Pi(c,1);e=1;}return e;}
var SZ=G(0);
function AAG(b,c){var d;d=new XM;d.pR=b;d.pQ=c;return d;}
function AAQ(){var a=this;B.call(a);a.gp=null;a.hb=0;a.jG=0;a.gL=0;}
function ABb(a){var b=new AAQ();ALw(b,a);return b;}
function ALw(a,b){a.gp=BJ();a.gL=0;a.jG=2048;a.hb=b;}
function JC(a,b,c){var d,e,f,g,h,i,j;d=c.sA(b);e=a.jG;if(d>e){c=new Bu;f=new M;O(f);BL(V(H(V(H(f,C(326)),d),C(327)),e),41);Bi(c,N(f));K(c);}if(!a.hb){b=new BD;Bi(b,C(328));K(b);}a:{b=new B_;if(d){b:{c=a.gp;if(c.j>0){c=BW(c);g=d;while(true){if(!BX(c))break b;f=B0(c);if(f.bm>=g)break;}Cv(b,f.bp,f.bN,g,a.hb);f.bp=f.bp+g;h=f.bm-g;f.bm=h;if(h===0.0)XH(a.gp,f);break a;}}g=a.gL;i=d;Cv(b,0.0,g,i,a.hb);c=a.gp;f=new B_;h=a.gL;g=a.jG-d|0;j=a.hb;f.bp=i;f.bN=h;f.bm=g;f.bO=j;BH(c,f);a.gL=a.gL+a.hb|0;}}return b;}
function IP(a,b){var c,d,e,f,g,h,i;a:{c=AUo(b);b=a.gp;if(b.j>0){d=BW(b);while(true){if(!BX(d))break a;e=B0(d);if(e.bN===c.bN){f=e.bp;g=e.bm;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bm=c.bm+g;SG(d);}else{h=c.bm;if(i+h===f){c.bm=h+g;SG(d);}}}}}}BH(a.gp,c);}
function JY(a){return B$(a.jG,a.gL);}
function N8(){var a=this;B.call(a);a.qe=null;a.jB=null;}
function AIg(a,b,c){if(c)return A0x;return FE(a.jB.iv,b.i,a.qe,1);}
function AIk(a,b,c){return 1;}
function ALi(a,b){var c;c=a.jB;return FR(c.iv,b.i,c.pH);}
function Ty(){B.call(this);this.uY=null;}
function APK(a,b,c,d){var e,f;b=a.uY;e=(Ns(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.er=Bb(Bd(0,b.er+W(e,f)|0),XL(b));return 1;}
function Rm(){B.call(this);this.rV=null;}
function APs(a,b){var c,d,e;c=a.rV;if(b.cp&&b.bl==79){if(!b.bP){b=c.bd.b0;d=new OE;d.vk=c;Mz(b,d);}else{b=c.bd.b0;d=new OC;d.x8=c;XJ(b,d);}e=1;}else e=0;return e;}
function Sy(){B.call(this);this.yt=null;}
function APn(a,b){var c,d,e;c=b.data;b=Bz();d=c[0];e=new M;O(e);H(H(e,C(282)),d);Bt(b,N(e));b=Bz();c=c[1];e=new M;O(e);H(H(e,C(329)),c);Bt(b,N(e));}
function Sx(){B.call(this);this.zI=null;}
function AR9(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bz();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));e=EE(RU(b,1));b=Bz();g=c[1];if(e===null)d=C(38);else{d=new M;O(d);BT(d,C(43));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BT(d,C(44));BL(d,i[h]);h=h+1|0;}BT(d,C(45));d=N(d);}c=new M;O(c);H(H(H(H(c,C(330)),g),C(331)),d);Bt(b,N(c));}
function SA(){B.call(this);this.n3=null;}
function AJF(a,b){Y8(a.n3,b);}
function Sz(){B.call(this);this.y2=null;}
function AIR(a,b){var c,d,e,f,g;c=b.data;d=Bz();e=c[0];f=new M;O(f);H(H(f,C(282)),e);Bt(d,N(f));e=Dy(RU(b,1));b=Bz();g=c[1];d=AE7(e);c=new M;O(c);H(H(H(H(c,C(332)),g),C(333)),d);Bt(b,N(c));}
function Sw(){B.call(this);this.z7=null;}
function AUH(a,b){var c,d;c=E$();d=new M;O(d);H(H(d,C(334)),b);Bt(c,N(d));b=new D9;Y(b);K(b);}
function Sv(){B.call(this);this.pC=null;}
function ANt(a,b){var c,d,e,f;c=a.pC;d=c.bd.b0;e=new WZ;e.ud=c;f=R(B,1);f.data[0]=b;CU(d,e,C(335),f);}
function VK(){B.call(this);this.lA=null;}
function AQI(a,b){var c,d,e,f,g,h;c=a.lA;d=c.nF;if(d!==null){e=c.ep.A;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.nF=g;}b=b.i;f=b.b;c=c.fW;d=c.s;f=f-d.b|0;h=b.a-d.a|0;U(c.A,f,h);return 1;}
function AVf(a,b,c){var d;if(!c){d=b.i;b=a.lA;if(!Eq(b.ep,d))d=null;b.nF=d;}return A0x;}
var C3=G(0);
var A0K=null;var A0n=null;var A0L=null;var A0m=null;var A0N=null;var A0M=null;var A0P=null;var A0O=null;var A0R=null;var A0Q=null;var A0S=null;function FX(){FX=Bq(C3);AVz();}
function AVz(){A0K=CQ(187);A0n=S(C(336));A0L=CQ(55);A0m=CQ(43);A0N=CR(33,66,131);A0M=CR(60,63,65);A0P=S(C(337));A0O=S(C(338));A0R=FD(85,85,85,128);A0Q=FD(43,43,43,0);A0S=S(C(259));}
function Rj(){var a=this;B.call(a);a.ov=null;a.jP=null;}
function AM7(a,b,c){var d;if(!c){d=FE(a.jP.h2,b.i,a.ov,1);if(d!==null)return d;}return A0x;}
function AIA(a,b,c){return 1;}
function ALq(a,b){var c;c=a.jP;return FR(c.h2,b.i,Sk(c.bd.b0));}
function Z8(){B.call(this);this.pM=null;}
function ATJ(a,b,c,d){var e,f;b=a.pM;e=(Ns(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eW=Bb(Bd(0,b.eW+W(e,f)|0),Tz(b));return 1;}
function YL(){B.call(this);this.nO=null;}
function AKp(a,b){var c,d;a:{c=a.nO;switch(b.bl){case 67:QV(c);d=1;break a;case 86:S1(c);d=1;break a;default:}d=0;}return d;}
var YK=G();
function AN3(a,b,c){return 0;}
function YJ(){B.call(this);this.q$=null;}
function AKw(a,b,c){var d,e;d=a.q$;c=d.d7+1|0;d.d7=c;d=IE(F(Js));e=new M;O(e);H(H(V(e,c),C(339)),d);e=N(e);$rt_globals.console.info($rt_ustr(e));X2(b,e);return 1;}
var YH=G();
function AOM(a){return null;}
function YM(){B.call(this);this.ts=null;}
function AS1(a){var b,c;b=a.ts;c=new ZH;c.or=b;return c;}
function Tv(){B.call(this);this.Ar=null;}
function AUE(a,b){return 0;}
function ZW(){B.call(this);this.zv=null;}
function AJ$(a,b){return b.ih&&b.bl==32?1:0;}
function ZY(){B.call(this);this.rS=null;}
function AIm(a,b){var c,d,e,f,g,h;b=b;c=a.rS;if(!DD(c.hV)){d=c.hV;b=b.i;e=R(C$,1);f=e.data;g=new C$;h=new OO;h.n9=c;Mg(g,h,C(324),d.im.bg);f[0]=g;GD(d,b,F$(e),A0y);}return 1;}
function ZX(){B.call(this);this.vC=null;}
function AR7(a,b,c,d){return LG(a.vC,b,c,d);}
function AFM(){var a=this;B.call(a);a.jn=null;a.li=null;a.f9=null;a.Ae=null;}
function ARn(a){var b=new AFM();ASy(b,a);return b;}
function AWs(a,b,c,d){var e=new AFM();AAO(e,a,b,c,d);return e;}
function ASy(a,b){AAO(a,null,null,b,null);}
function AAO(a,b,c,d,e){a.jn=b;a.li=c;a.f9=d;a.Ae=e;}
function AKj(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return B2(a.jn,c.jn)&&B2(a.li,c.li)&&B2(a.f9,c.f9)?1:0;}return 0;}
var Db=G(0);
var AZO=null;var A0_=null;var AZQ=null;var AZP=null;var AZS=null;var AZR=null;var AZU=null;var AZT=null;var AZW=null;var AZV=null;var AZX=null;function ALA(){ALA=Bq(Db);ATh();}
function ATh(){AZO=CQ(206);A0_=S(C(340));AZQ=S(C(341));AZP=S(C(113));AZS=S(C(342));AZR=S(C(343));AZU=S(C(344));AZT=S(C(345));AZW=FD(107,106,107,128);AZV=FD(30,31,34,0);AZX=S(C(115));}
function Cj(){Co.call(this);this.kW=null;}
var A1a=null;var A1b=null;var A1c=null;var A1d=null;var A1e=null;var A1f=null;var A1g=null;var A1h=null;var A1i=null;var A1j=null;var A1k=null;var A1l=null;var A1m=null;var A1n=null;var A1o=null;var AZY=null;function AFr(){AFr=Bq(Cj);AOl();}
function D0(a,b,c){var d=new Cj();Tm(d,a,b,c);return d;}
function AWN(a,b,c,d){var e=new Cj();Y3(e,a,b,c,d);return e;}
function Tm(a,b,c,d){AFr();Dd(a,b,c);a.kW=Iv(d,null);}
function Y3(a,b,c,d,e){AFr();Dd(a,b,c);a.kW=Iv(d,e);}
function AOl(){var b,c;b=new Cj;ALA();Tm(b,C(346),0,A0_);A1a=b;A1b=D0(C(347),1,S(C(348)));A1c=D0(C(349),2,S(C(350)));A1d=D0(C(48),3,S(C(351)));A1e=D0(C(352),4,A0_);A1f=D0(C(353),5,S(C(354)));A1g=D0(C(355),6,S(C(356)));A1h=D0(C(49),7,S(C(357)));A1i=D0(C(358),8,S(C(359)));c=new Cj;FX();Y3(c,C(360),9,A0n,S(C(344)));A1j=c;A1k=AWN(C(361),10,A0n,S(C(116)));A1l=D0(C(362),11,S(C(363)));A1m=D0(C(364),12,S(C(365)));A1n=D0(C(366),13,A0_);b=D0(C(367),14,S(C(368)));A1o=b;AZY=I(Cj,[A1a,A1b,A1c,A1d,A1e,A1f,A1g,A1h,A1i,A1j,
A1k,A1l,A1m,A1n,b]);}
function Jx(){var a=this;B.call(a);a.pw=null;a.pu=null;}
function Iv(a,b){var c=new Jx();APf(c,a,b);return c;}
function APf(a,b,c){a.pw=b;a.pu=c;}
function IN(){var a=this;B.call(a);a.js=null;a.iO=null;a.wX=null;a.wI=null;a.bg=null;a.lp=null;a.k5=null;}
function A1p(a,b,c,d,e,f,g){var h=new IN();Mc(h,a,b,c,d,e,f,g);return h;}
function Mc(a,b,c,d,e,f,g,h){a.wX=b;a.wI=c;a.iO=d;a.bg=e;a.js=f;a.lp=g;a.k5=h;}
function AD7(){var a=this;B.call(a);a.m1=null;a.sc=0;}
function AAt(a,b){var c=new AD7();ASM(c,a,b);return c;}
function ASM(a,b,c){var d;d=new B_;a.m1=d;a.sc=b;d.bO=c;}
function QQ(a,b){return Cc(a.sc,b);}
var DQ=G(0);
var AZ2=null;var AZ3=null;var AZZ=null;var AZ0=null;var AZ1=null;var A05=null;var A06=null;var AZ4=null;var AZ5=null;function AIb(){AIb=Bq(DQ);AQM();}
function AQM(){AZ2=S(C(343));AZ3=S(C(369));AZZ=S(C(118));AZ0=S(C(356));AZ1=S(C(340));A05=S(C(343));A06=S(C(370));AZ4=S(C(371));AZ5=CR(43,45,48);}
var Qp=G(0);
var QL=G();
function AL3(a,b,c){var d,e;d=b;e=c;b=new M;O(b);V(H(V(H(b,C(372)),d),C(373)),e);CJ(N(b));return d+e|0;}
var Qq=G(0);
var QJ=G();
function AM$(a,b,c){var d,e;d=b;e=c;b=new M;O(b);Fu(H(Fu(H(b,C(374)),d),C(373)),e);CJ(N(b));return d+e;}
var AB2=G();
var AAM=G(0);
function J6(){var a=this;B.call(a);a.es=null;a.fx=null;a.f7=null;}
var AZr=0;function AE0(a){var b;b=a.fx;if(b!==null){AZr=AZr-1|0;a.es.dP.deleteTexture(b);a.fx=null;}}
function BS(a){return a.f7.b;}
function Da(a){return a.f7.a;}
function U3(a,b,c,d){var e;e=a.f7;e.b=b;e.a=c;MH(a);a.es.dP.texStorage2D(3553,1,d,b,c);e=a.es.dP;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function MH(a){var b,c;b=a.es.dP;c=a.fx;b.bindTexture(3553,c);}
function CS(a,b){Oe(a,b.mV,b.l2,32856);RC(a,b,0,0);}
function Oe(a,b,c,d){var e,f,g,h;a:{e=a.f7;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){MH(a);break a;}e=a.es.dP;h=a.fx;e.deleteTexture(h);a.fx=a.es.dP.createTexture();U3(a,b,c,d);break a;}}U3(a,b,c,d);}}
function Ix(a,b,c,d){MH(a);RC(a,b,c,d);}
function RC(a,b,c,d){var e;e=a.es.dP;b=b.kC;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
function Yz(){B.call(this);this.ns=null;}
var A0$=null;function UR(){var a=new Yz();ABO(a);return a;}
function ABO(a){a.ns=BJ();}
function D2(a,b,c,d){Qk(a,AE9(d,b,c));}
function DL(b,c,d){return AE9(d,b,c);}
function GO(a,b,c,d){Kk(a,b,c,d,null);}
function Kk(a,b,c,d,e){Qk(a,AXz(null,b,c,d,e));}
function Qk(a,b){BH(a.ns,b);}
function IF(a){return F$(Ic(a.ns,A0$));}
function AAR(){A0$=R(C$,0);}
var DU=G(0);
var A01=null;var A02=null;var A0Y=null;var A0Z=null;var A00=null;var A0U=null;var A0V=null;var A03=null;var A04=null;function AEm(){AEm=Bq(DU);AQc();}
function AQc(){A01=S(C(375));A02=S(C(376));A0Y=S(C(289));A0Z=S(C(377));A00=S(C(336));A0U=S(C(375));A0V=S(C(376));A03=FD(118,121,122,128);A04=CR(63,66,68);}
var G$=G(0);
var PY=G();
function ARP(a,b,c,d){var e;b=Bz();e=new M;O(e);H(H(V(H(e,C(378)),c),C(320)),d);Bt(b,N(e));}
var PZ=G();
function Tk(){B.call(this);this.ix=null;}
function AVo(a,b){return Ly(a.ix,b);}
function ARa(a,b,c,d){return Ku(a.ix,b,c,d);}
function AVa(a,b,c){return MZ(a.ix,b,c);}
function AO8(a,b,c){return DD(a.ix);}
function Wr(){B.call(this);this.tP=null;}
function AP0(a,b){var c;c=a.tP.jB;c.er=Fn(b,XL(c));}
var AHa=G();
function XQ(){B.call(this);this.sL=null;}
function AM_(a,b){var c;c=a.sL.jP;c.eW=Fn(b,Tz(c));}
function WG(){B.call(this);this.zX=null;}
function AMH(a,b){return 0;}
function T_(){B.call(this);this.u5=null;}
function AU8(a,b){return DE(a.u5,null);}
var AB5=G();
function I1(){var a=this;B.call(a);a.tO=null;a.oW=null;a.pZ=null;a.uQ=null;a.rx=null;a.i1=null;}
function A1q(a,b,c,d,e,f){var g=new I1();M6(g,a,b,c,d,e,f);return g;}
function M6(a,b,c,d,e,f,g){a.tO=b;a.oW=c;a.pZ=d;a.uQ=e;a.rx=f;a.i1=g;}
function HG(){var a=this;B.call(a);a.ls=null;a.h_=null;a.uL=null;}
function A1r(a,b,c){var d=new HG();Ij(d,a,b,c);return d;}
function Ij(a,b,c,d){a.ls=b;a.h_=c;a.uL=d;}
function ABA(){var a=this;B.call(a);a.l_=null;a.tv=null;a.v7=null;}
function AGS(a,b,c){var d=new ABA();AT7(d,a,b,c);return d;}
function AT7(a,b,c,d){a.l_=b;a.tv=c;a.v7=d;}
function Ck(){Co.call(this);this.mX=null;}
var A1s=null;var A1t=null;var A1u=null;var A1v=null;var A1w=null;var A1x=null;var A1y=null;var A1z=null;var A1A=null;var A1B=null;var A1C=null;var A1D=null;var A1E=null;var A1F=null;var A1G=null;var A0T=null;function ACu(){ACu=Bq(Ck);ANj();}
function DZ(a,b,c){var d=new Ck();U8(d,a,b,c);return d;}
function ASQ(a,b,c,d){var e=new Ck();AGb(e,a,b,c,d);return e;}
function U8(a,b,c,d){ACu();Dd(a,b,c);a.mX=Iv(d,null);}
function AGb(a,b,c,d,e){ACu();Dd(a,b,c);a.mX=Iv(d,e);}
function ANj(){var b;b=new Ck;FX();U8(b,C(346),0,A0n);A1s=b;A1t=DZ(C(347),1,S(C(379)));A1u=DZ(C(349),2,S(C(380)));A1v=DZ(C(48),3,S(C(381)));A1w=DZ(C(352),4,S(C(379)));A1x=DZ(C(353),5,CR(188,63,60));A1y=DZ(C(355),6,S(C(382)));A1z=DZ(C(49),7,S(C(383)));A1A=DZ(C(358),8,S(C(384)));A1B=ASQ(C(360),9,A0n,CR(52,65,52));A1C=ASQ(C(361),10,S(C(385)),S(C(386)));A1D=DZ(C(362),11,S(C(387)));A1E=DZ(C(364),12,S(C(388)));A1F=DZ(C(366),13,A0n);b=DZ(C(367),14,S(C(368)));A1G=b;A0T=I(Ck,[A1s,A1t,A1u,A1v,A1w,A1x,A1y,A1z,A1A,A1B,
A1C,A1D,A1E,A1F,b]);}
var AGG=G();
function I8(b,c){var d,e,f;if(c<=0)return C(30);d=BU(c);e=d.data;e[0]=AFn(IW(b,52));f=1;while(f<c){e[f]=AFn(IW(b,62));f=f+1|0;}return Gd(d);}
function AFn(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AC1=G();
function AG_(){var a=this;B.call(a);a.HA=null;a.E1=null;a.Gh=0;a.FL=0;}
var ABE=G(0);
function ADi(b){var c;a:{switch(b){case 0:break;case 1:c=C(169);break a;case 2:c=C(224);break a;case 3:c=C(223);break a;default:c=null;break a;}c=C(191);}return c;}
var CW=G();
var AEz=G(CW);
var AFl=G(CW);
var AB6=G(CW);
var ACo=G(CW);
var AFQ=G(CW);
function YP(){B.call(this);this.qy=null;}
function ANy(a){var b;b=a.qy;Bt(Bz(),b);}
var ABq=G();
function Cc(b,c){return Dl(b*c);}
function IB(){var a=this;B.call(a);a.gx=0;a.mm=null;}
function WW(){var a=this;B.call(a);a.Av=null;a.wo=null;a.gt=null;}
function Gp(a,b,c){var d,e,f,g,h,i,j,k;d=0;e=a.gt.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bb(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.is:i.it;k=!c?i.nk:i.nl;if(j<=k&&k<(j+k|0))return h;j=BF(j,b);if(j<0)d=h+1|0;else{if(j<=0)break;g=h-1|0;}}return h;}
function Mt(){var a=this;B.call(a);a.it=0;a.nl=0;a.is=0;a.nk=0;a.lc=0;}
var ACP=G();
function PB(){B.call(this);this.jr=null;}
function AVS(a,b){var c,d,e,f,g;c=a.jr;d=c.kJ;if(d!==null){e=b.i;f=e.b-d.b|0;g=e.a-d.a|0;e=c.jC;e.b=EG(0,e.b+f|0,c.hj.b-c.il.b|0);c=a.jr;d=c.jC;d.a=EG(0,d.a+g|0,c.hj.a-c.il.a|0);}a.jr.kJ=b.i;return 1;}
var ACY=G();
function S4(){B.call(this);this.t9=null;}
function AI8(a,b){IM(a.t9,b);}
function XI(){B.call(this);this.jJ=null;}
function AVi(a){return a.jJ;}
function AFf(){var a=this;B.call(a);a.bC=null;a.T=null;a.S=null;a.e7=null;}
function AAN(a){var b=new AFf();AQy(b,a);return b;}
function AQy(a,b){var c;a.S=AVZ();a.bC=b;c=new Xf;Mh(c);c.k3=new B_;c.hK=b;a.T=c;}
function Ip(a,b,c,d){var e,f,g,h;e=a.T;f=B2(e.hp,c)?0:1;g=B2(e.ht,b)?0:1;h=d===e.j4?0:1;if(f){e.hp=c;e.eE=null;Q1(e,0);}e.hQ=!f&&!g&&!h?0:1;e.ht=b;e.j4=d;e.hu=0;J4(a);}
function LN(a){var b;b=a.T;b.dD=CK(b.dD,null);a.S=CK(a.S,null);}
function KX(a,b){var c,d,e;c=a.S;d=c.G;e=c.r;b=CK(c,b);a.S=b;b.jY(d,e,a.bC.b4);}
function FF(a,b,c){var d;d=a.S;d.jY(b,c,d.ek);J4(a);}
function J4(a){var b,c,d,e;b=a.T;c=a.S.r.b;b.r.b=c;d=b.dD;if(d!==null&&c!=BS(d)&&!(c>=b.hu&&BS(b.dD)>=b.hu))b.hQ=1;b=a.T;b.ek=a.bC.b4;if(Yc(b))c=0;else{b=a.T;WS(b);e=CF(b.hK,b.j4);Q1(b,Fg(b.eE)+(e*2|0)|0);c=b.r.a;}b=a.T.G;d=a.S.G;U(b,d.b,d.a-c|0);}
function Mr(b,c){if(b<0)c=C(389);else if(b>0)c=C(390);return c;}
function Z9(a,b,c){var d;d=a.T.G.b;return (d-c|0)<=b&&b<d?1:0;}
function NV(a,b,c){var d,e;d=a.T;e=d.G.b+d.r.b|0;return e<=b&&b<(e+c|0)?1:0;}
function QZ(a,b,c){var d;d=a.T.G.a;return (d-c|0)<=b&&b<d?1:0;}
function OT(a,b,c){var d,e;d=a.S;e=d.G.a+d.r.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Yi(a,b,c){var d,e,f;d=a.T.G.a-c|0;e=a.S;f=(e.G.a+e.r.a|0)+c|0;return d<=b&&b<f?1:0;}
function YW(a,b,c){var d,e;d=a.T.G.a+c|0;e=a.S;return ADr(b,d,(e.G.a+e.r.a|0)-c|0);}
function Px(a,b,c){var d,e,f;d=a.T;e=d.G.b;f=e-c|0;e=(e+d.r.b|0)+c|0;return f<=b&&b<e?1:0;}
function O0(a,b,c){var d,e;d=a.T;e=d.G.b;return ADr(b,e+c|0,(e+d.r.b|0)-c|0);}
function ADr(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BF(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function I4(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bf;f=new Bf;g=b.b;h=b.a;b=a.S;i=b.G;j=i.b;k=i.a;b=b.r;l=b.b;m=b.a;b=new XN;b.uH=a;b.uJ=e;b.uI=f;b.uD=c;b.uC=g;b.uG=j;b.uE=l;b.uS=d;b.uR=h;b.uT=k;b.vt=m;return b;}
var AEv=G(0);
var Md=G(0);
function RY(){B.call(this);this.uc=null;}
function AJO(a,b){return SH(a.uc,b);}
var X_=G();
function APL(a,b){AE0(b);}
var AE$=G();
function ACj(b,c,d,e,f,g){g.b=c.b;g.a=f;Bx(b,d.b,d.a,g,e);Bx(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bx(b,d.b,d.a+f|0,g,e);Bx(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AEI(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bx(b,j,k,i,h);Bx(b,j,k,i,h);Bx(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bx(b,l,j,i,h);Bx(b,l,j,i,h);Bx(b,l+g|0,j+g|0,i,h);}
function Rs(){var a=this;B.call(a);a.bq=null;a.kq=null;a.fb=null;a.d9=0;a.O=0;a.dU=null;a.eK=null;a.g_=0;}
function OJ(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d9;i=W(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EH(c);j=d+(-1)|0;b=C8(d);d=W(j,a.O)%a.fb.a|0;Gz(a,c,b,a.g_,g);Ix(a.bq,c,0,d);if(!(j%a.d9|0))break;d=j;}}else{EH(b);k=a.d9-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Gz(a,b,C8(j),W(a.O,k)+a.g_|0,g);k=k+(-1)|0;j=h;}CS(a.bq,b);j=Bd(i,e);}return j;}k=a.d9;h=W(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bb(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EH(c);b=C8((d+f|0)+1|0);j=d+1|0;d
=W(d,a.O)%a.fb.a|0;Gz(a,c,b,a.g_,g);Ix(a.bq,c,0,d);if(!(j%a.d9|0))break;d=j;}}else{EH(b);d=0;while(d<a.d9){h=h+1|0;Gz(a,b,C8((h>e?h-f|0:h)+f|0),W(a.O,d)+a.g_|0,g);d=d+1|0;}CS(a.bq,b);j=Bb(i,e);}return j;}
function MF(a,b,c,d,e,f){var g,h;g=b.data;h=g.length;if(d<h)return g[c]!=g[d]?0:1;return c<h&&F_(e,b,c,f)!==f.hh?0:1;}
function F_(b,c,d,e){c=c.data;return d<c.length&&c[d]?IY(b.dW,b,c[d]):e.hh;}
function ET(a,b,c,d,e,f){EY(b,a.kq.b+d.b|0,c+d.a|0,a.dU,a.eK,a.bq,e,f,0.0);}
function Gz(a,b,c,d,e){Ch(b,c,a.fb.b-20.0*e,d);}
function Zk(){var a=this;B.call(a);a.ex=null;a.oY=null;a.rq=null;a.AU=null;a.bV=null;a.mk=null;a.ms=null;a.fp=null;a.f$=null;a.h4=null;}
function SU(a,b){var c,d,e,f,g,h;if(XR(a.f$,b))MI(a.f$,b);else{c=a.f$;d=Dh(c.f0);if(b===null){e=R9(c);if(e===null){c.kd=c.kd+1|0;e=XU(c,null,0,0);f=c.f0+1|0;c.f0=f;if(f>c.mo)Ou(c);}}else{g=JI(b);h=g&(c.dQ.data.length-1|0);e=OI(c,b,h,g);if(e===null){c.kd=c.kd+1|0;e=XU(c,b,h,g);f=c.f0+1|0;c.f0=f;if(f>c.mo)Ou(c);}}e.cY=d;}b=b.cw;if(b===null)return;c=new ZU;c.qD=a;b.eY(c);}
function ADY(a){var b,c,d,e,f;b=TP(Kz(a.ex.dH));while(Fi(b)){c=QB(b);d=Cl(a.ex.dH,c);Bs(a.bV,d.j);c=BW(d);while(BX(c)){e=B0(c);f=Cl(a.fp,e);Bs(a.bV,f.bD);}}}
function AC5(a){if(a.ex.eP===null){Bs(a.bV,(-1));return;}Bs(a.bV,a.f$.f0);TW(a,a.ex.eP);}
function TW(a,b){var c,d,e,f;c=(MI(a.f$,b)).bD;Bs(a.bV,c);if(b instanceof Lq)Bs(a.bV,(-1));else if(!(b instanceof Iw))Bs(a.bV,0);else Bs(a.bV,1);d=a.mk;Bs(d.dE,b.dr.cV());e=b.dr;f=new Na;f.w1=d;e.eY(f);d=a.ms;Bs(d.cQ,b.eg.cV());e=b.eg;f=new WJ;f.ux=d;e.eY(f);d=b.hC;Bs(a.bV,d.cV());e=new X1;e.vw=a;d.eY(e);d=b.e3;Bs(a.bV,d.cV());d=d.bv();while(d.bK()){e=d.br();Oh(a.mk,e.fE);Hn(a.ms,e.ik);}d=b.j7;if(d===null)Bs(a.bV,(-1));else Bs(a.bV,(Cl(a.fp,d)).bD);b=b.cw;Bs(a.bV,b.cV());d=new Qo;d.n8=a;b.eY(d);}
function ZM(){B.call(this);this.p6=null;}
function ALk(a,b){var c,d,e,f,g;c=a.p6;if(c.e.f.cK==c.lK){b=b.data;d=Dy(b[0]);e=EE(b[1]);f=null;g=null;if(b.length>=4){f=Dy(b[2]);g=EE(b[3]);}AAB(c.e.f,d,e,f,g);GK(c.e.f.dp);GK(c.e.f.dM);Q9(c.e.f);Ii(c);OR(c.e.f);Z_(c);}}
var AAK=G();
function Gu(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ABz(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function AF3(){var a=this;B.call(a);a.by=0;a.bH=0;}
function Du(a,b){var c=new AF3();AOd(c,a,b);return c;}
function AOd(a,b,c){a.by=b;a.bH=c;}
function AH8(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.by==c.by&&a.bH==c.bH?1:0;}return 0;}
function ARG(a){var b,c,d,e;b=R(B,2).data;b[0]=Dh(a.by);b[1]=Dh(a.bH);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bD)|0;d=d+1|0;}return c;}
function ARf(a,b){var c;b=b;c=BF(a.by,b.by);if(!c)c=BF(a.bH,b.bH);return c;}
function Zc(){B.call(this);this.vF=null;}
function AHR(a,b){var c;c=a.vF;ZI(c,EW(c,b.i));L5(c.q,c.u,c.y);Hq(c);}
var TT=G(0);
var A0x=null;function AEX(){A0x=new Sf;}
var E7=G(0);
function OK(){var a=this;B.call(a);a.iw=0;a.nm=0;a.jt=0;a.gP=0;a.hr=null;}
function BX(a){return a.iw>=a.jt?0:1;}
function B0(a){var b,c;QR(a);b=a.iw;a.gP=b;c=a.hr;a.iw=b+1|0;return c.h6(b);}
function SG(a){var b,c,d;if(a.gP<0){b=new CL;Y(b);K(b);}QR(a);a.hr.np(a.gP);a.nm=a.hr.cF;c=a.gP;d=a.iw;if(c<d)a.iw=d-1|0;a.jt=a.jt-1|0;a.gP=(-1);}
function QR(a){var b;if(a.nm>=a.hr.cF)return;b=new Ht;Y(b);K(b);}
var F6=G(I5);
var Y_=G(EX);
function AFX(){var a=this;B.call(a);a.hE=null;a.mp=0;a.fD=0;}
function AJv(){var a=new AFX();AVl(a);return a;}
function AVl(a){a.mp=0;a.hE=BM(16);a.fD=0;}
function G0(a,b,c){Bs(a,b);Bs(a,c);}
function Bs(a,b){var c,d;c=a.hE;d=c.data.length;if(d==a.fD)a.hE=MV(c,d*2|0);c=a.hE.data;d=a.fD;a.fD=d+1|0;c[d]=b;}
function RL(a){var b,c,d,e,f;b=a.mp;if(b&&a.fD!=b){c=E$();b=a.mp;d=a.fD;e=new M;O(e);H(V(H(V(H(e,C(391)),b),C(392)),d),C(393));Bt(c,N(e));}f=a.hE;b=f.data.length;d=a.fD;if(b!=d)f=MV(f,d);return f;}
function Ud(){var a=this;D4.call(a);a.f0=0;a.dQ=null;a.kd=0;a.pY=0.0;a.mo=0;}
function AF_(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Xr(a){a.mo=a.dQ.data.length*a.pY|0;}
function XR(a,b){return ZJ(a,b)===null?0:1;}
function MI(a,b){var c;c=ZJ(a,b);if(c===null)return null;return c.cY;}
function ZJ(a,b){var c,d;if(b===null)c=R9(a);else{d=JI(b);c=OI(a,b,d&(a.dQ.data.length-1|0),d);}return c;}
function OI(a,b,c,d){var e;e=a.dQ.data[c];while(e!==null&&!(e.ml==d&&(b!==e.cI?0:1))){e=e.hy;}return e;}
function R9(a){var b;b=a.dQ.data[0];while(b!==null&&b.cI!==null){b=b.hy;}return b;}
function XU(a,b,c,d){var e,f;e=new H_;Z7(e,b,null);e.ml=d;f=a.dQ.data;e.hy=f[c];f[c]=e;return e;}
function Ou(a){var b,c,d,e,f,g,h,i;b=a.dQ.data.length;b=AF_(!b?1:b<<1);c=R(H_,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dQ.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.ml&f;i=h.hy;h.hy=d[b];d[b]=h;h=i;}e=e+1|0;}a.dQ=c;Xr(a);}
function XF(){var a=this;B.call(a);a.dE=null;a.kI=null;a.rO=null;}
function Oh(a,b){var c;if(!(b instanceof HC)){Bs(a.dE,3);YX(a,b);Bs(a.dE,b.gC);}else{c=b;Bs(a.dE,5);YX(a,c);Bs(a.dE,c.kL);b=c.gc;Bs(a.dE,b.j);c=new N6;c.o8=a;En(b,c);}}
function YX(a,b){var c;c=b.c$.fL;G0(a.dE,a.kI.I,J(c));Bs(a.dE,b.c$.cy);Nm(a,b.fl);BT(a.kI,c);}
function Nm(a,b){if(b===null)Bs(a.dE,(-1));else Bs(a.dE,(Cl(a.rO,b)).bD);}
function Xi(){var a=this;B.call(a);a.cQ=null;a.lU=null;a.qC=null;}
function Hn(a,b){var c,d,e;if(b instanceof Fr){c=b;Bs(a.cQ,9);Rx(a,c.kc);}else if(b instanceof FZ){d=b;Bs(a.cQ,3);Sb(a,d);Bs(a.cQ,d.kU);Rx(a,d.fs);}else if(b instanceof Ga){e=b;Bs(a.cQ,4);Hn(a,e.fX);Hn(a,e.gj);}else if(b===null)Bs(a.cQ,(-1));else{Bs(a.cQ,5);Sb(a,b);Bs(a.cQ,b.jX);}}
function Sb(a,b){var c;c=b.dJ.fL;G0(a.cQ,a.lU.I,J(c));Bs(a.cQ,b.dJ.cy);b=b.ec;if(b===null)Bs(a.cQ,(-1));else Bs(a.cQ,(Cl(a.qC,b)).bD);BT(a.lU,c);}
function Rx(a,b){var c;Bs(a.cQ,b.j);c=new AAc;c.pd=a;En(b,c);}
function W7(){B.call(this);this.pB=null;}
function AUk(a,b){var c,d;c=a.pB;d=c.d7+1|0;c.d7=d;c=new M;O(c);H(H(V(c,d),C(394)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function ZN(){B.call(this);this.pU=null;}
function ASi(a){var b,c;b=a.pU;c=new M;O(c);H(H(H(c,C(395)),b),C(396));$rt_globals.console.info($rt_ustr(N(c)));}
var Zp=G(D6);
var A1H=null;function AEZ(){A1H=F($rt_floatcls());}
var FL=G();
var A1I=null;var A1J=null;var AY4=null;var AY3=null;var AY2=null;function ADI(){A1I=El([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A1J=ABI([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);AY4=ABI([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);AY3=new Vy;AY2=new W0;}
var Ib=G();
var A1K=0;var A1L=null;var A1M=null;function AEo(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.pe=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.lE=0;c.lm=0;return;}if(f)d=e|8388608;else{d=e<<1;while(H$(C0(Bp(d),Bp(8388608)),E9)){d=d<<1;f=f+(-1)|0;}}g=AEy(A1M,f);if(g<0)g= -g|0;h=A1M.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H7(d,A1L.data[e],i);if(j<A1K){while($rt_ucmp(j,A1K)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A1M.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=H7(d,
A1L.data[e],i);}e=d<<1;d=e+1|0;h=A1L.data;f=g+1|0;k=h[f];l=i-1|0;m=H7(d,k,l);n=H7(e-1|0,A1L.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?W($rt_udiv(j,o),o):q<0?W($rt_udiv(j,k),k)+k|0:W($rt_udiv((j+(k/2|0)|0),k),k);if(Dt(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d=d
*10|0;}c.lE=d;c.lm=g-50|0;}
function H7(b,c,d){return GB(F0(Ca(C0(Bp(b),D(4294967295, 0)),C0(Bp(c),D(4294967295, 0))),32-d|0));}
function ACG(){A1K=$rt_udiv((-1),10);A1L=El([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A1M=El([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function W0(){var a=this;B.call(a);a.lE=0;a.lm=0;a.pe=0;}
function MK(){var a=this;B.call(a);a.yA=null;a.nS=0.0;a.y3=0.0;a.fC=null;a.hB=null;a.mY=null;a.fK=0;}
function AGm(a,b){var c;if(b!==null){a.hB=b;return a;}c=new BD;Bi(c,C(397));K(c);}
function AEE(a,b){var c;if(b!==null){a.mY=b;return a;}c=new BD;Bi(c,C(397));K(c);}
function RX(a,b,c,d){var e,f,g,$$je;e=a.fK;if(!(e==2&&!d)&&e!=3){a.fK=d?2:1;while(true){try{f=AGo(a,b,c);}catch($$e){$$je=Er($$e);if($$je instanceof Bu){g=$$je;K(AKy(g));}else{throw $$e;}}if(Hz(f))return f;if(IR(f)){if(d&&DV(b)){g=a.hB;HD();if(g===AZA)return Eb(Cb(b));if(Cb(c)<=J(a.fC))return AZD;EU(b,b.Z+Cb(b)|0);if(a.hB===AZB)KM(c,a.fC);}return f;}if(Ss(f)){g=a.hB;HD();if(g===AZA)return f;if(g===AZB){if(Cb(c)<J(a.fC))return AZD;KM(c,a.fC);}EU(b,b.Z+KP(f)|0);}else if(MJ(f)){g=a.mY;HD();if(g===AZA)break;if(g
===AZB){if(Cb(c)<J(a.fC))return AZD;KM(c,a.fC);}EU(b,b.Z+KP(f)|0);}}return f;}b=new CL;Y(b);K(b);}
function ABN(a,b){var c,d,e,f;c=a.fK;if(c&&c!=3){b=new CL;Y(b);K(b);}if(!Cb(b))return AGZ(0);if(a.fK)a.fK=0;d=AGZ(Bd(8,Cb(b)*a.nS|0));while(true){e=RX(a,b,d,0);if(IR(e))break;if(Hz(e))d=T8(a,d);if(!Li(e))continue;WY(e);}b=RX(a,b,d,1);if(Li(b))WY(b);while(true){f=a.fK;if(f!=3&&f!=2)break;a.fK=3;if(IR(AZE)){d.dS=d.Z;d.Z=0;d.h8=(-1);return d;}d=T8(a,d);}b=new CL;Y(b);K(b);}
function T8(a,b){var c,d,e;c=b.hZ;d=OS(c,Bd(8,c.data.length*2|0));e=ADS(d,0,d.data.length);EU(e,b.Z);return e;}
var ADn=G(CW);
function Pn(){B.call(this);this.oZ=null;}
function AJc(a,b){Dv(a.oZ,b);}
function RV(){B.call(this);this.xk=null;}
function AIW(a,b){var c,d;c=a.xk;d=c.d7+1|0;c.d7=d;c=b.id;b=new M;O(b);H(H(V(b,d),C(398)),c);$rt_globals.console.info($rt_ustr(N(b)));}
var Sf=G();
function APF(a,b){}
function E_(){var a=this;B.call(a);a.G=null;a.r=null;a.ek=0.0;}
function AVZ(){var a=new E_();Mh(a);return a;}
function Mh(a){a.G=new Bf;a.r=new Bf;}
function ARJ(a){}
function APT(a){return B$(0,0);}
function SX(a,b,c,d){var e;if(!LI(a.G,b)){a.lk(b);Cx(a.G,b);}if(!LI(a.r,c)){a.ld(c);Cx(a.r,c);}e=a.ek;if(e!==d){a.ek=d;a.ri(e,d);}}
function DN(a,b){return Gu(b,a.G,a.r);}
function AGv(a,b){var c,d,e,f;c=a.G;d=c.b;e=c.a;f=a.r;AWW();Bx(b,d,e,f,A1N);}
function Xb(a,b){var c;c=a.G;Mb(b,c.b,c.a,a.r);}
function AJN(a,b){return 0;}
function AOy(a,b){}
function AUJ(a,b){}
function ARX(a,b,c){}
function AMU(a,b,c,d){return 0;}
function AJB(a,b,c){return null;}
function APo(a,b,c){return 0;}
function AUl(a,b){return 0;}
function ARF(a,b,c,d){return 0;}
function Gg(){var a=this;E_.call(a);a.c0=null;a.bE=null;a.gg=null;}
function A1O(){var a=new Gg();Wd(a);return a;}
function Wd(a){Mh(a);a.c0=new Bf;a.bE=new Bf;}
function AMd(a,b){a.gg=b;}
function ADm(a){var b;b=a.bE;b.b=J0(a,b.b);b=a.bE;b.a=Mv(a,b.a);}
function WT(a,b){a.bE.b=J0(a,b);}
function AAk(a,b){a.bE.a=Mv(a,b);}
function AG0(a,b,c){a.bE.b=J0(a,b);a.bE.a=Mv(a,c);}
function Mv(a,b){return Bd(0,Bb(b,a.c0.a-a.r.a|0));}
function J0(a,b){return Bd(0,Bb(b,a.c0.b-a.r.b|0));}
function Sa(){var a=this;Gg.call(a);a.cx=null;a.dZ=null;a.hf=null;a.vc=null;a.ef=null;a.cd=null;a.en=null;a.fS=null;a.dq=0;a.e_=0;a.xo=null;a.dR=0;a.eA=0;a.gr=0;a.fG=0;a.fr=0;a.cL=0;a.eo=null;a.jc=null;a.rM=null;a.hM=null;}
function AX7(a,b){var c=new Sa();AGi(c,a,b);return c;}
function AGi(a,b,c){Wd(a);a.dZ=TM();a.hf=new Bf;a.cd=A1P;a.en=R(I3,0);a.dR=0;a.eA=0;a.gr=0;a.fG=0;a.fr=0;a.eo=ABb(0);a.hM=IJ();a.cx=b;a.jc=c;a.xo=c;QS(a);}
function QS(a){a.dq=Cc(2.0,a.cx.b4);}
function Zn(a){return a.cd.data.length?0:1;}
function OG(a,b){Vo(a);a.cd=b;}
function Vo(a){U(a.hf,0,0);}
function AAh(a,b,c){a.rM=b;a.vc=c;a.ef=null;a.eo=null;a.e_=0;Vo(a);}
function AUi(a){a.fS=CK(a.fS,null);U(a.hf,0,0);GK(a.hM);a.eo=null;a.cd=A1P;a.en=null;a.dR=0;a.eA=0;a.gr=0;UU(a.dZ);a.jc=null;}
function AKU(a,b,c){Q_(a);QS(a);a.ef=null;a.eo=null;a.e_=0;}
function AIe(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg;c=Jn(a.cx);if(Zn(a))return;KA(a);CC(c,a.ef);d=Ea(a);e=AAG(c,a.e_);f=Bb(Jd(a.r.a,d),a.cd.data.length)+30|0;g=a.rM.wX;h=a.en.data;i=h.length;if(i<f){a:{j=a.fG;k=a.fr;l=a.cd;m=a.eo;n=a.hM;o=R(I3,f);if(i>0){p=o.data;while(j<=k){q=l.data[j];r=j%p.length|0;s=j%i|0;t=h[s];if(t!==null&&t.gm!==q){XD(m,t,n);p[r]=JZ(q,m,e,n);h[s]=null;}else if(t!==null&&p[r]===null){p[r]=t;h[s]=null;}else p[r]=JZ(q,m,e,n);j=j+1|0;}}else if(f>0){p
=o.data;while(true){if(j>k)break a;p[j%p.length|0]=JZ(l.data[j],m,e,n);j=j+1|0;}}}j=0;while(j<i){q=h[j];if(q!==null){XD(m,q,n);h[j]=null;}j=j+1|0;}a.en=o;Cx(a.hf,JY(a.eo));Rv(a,a.cx.c6);}a.fG=Bb((a.bE.a+a.dq|0)/(Ea(a)+a.dq|0)|0,a.cd.data.length-1|0);a.fr=Bb((((a.bE.a+a.dZ.s.a|0)-1|0)+a.dq|0)/(Ea(a)+a.dq|0)|0,a.cd.data.length-1|0);if(!a.en.data.length)return;AAw(a,e);Xb(a,b);t=g.uQ;m=a.G;Bx(b,m.b,m.a,a.r,t);m=a.dZ.A;u=m.b;v=m.a;w=CF(a.cx,2.0);m=a.cx.dG;x=a.fG;j=u+w|0;while(x<=a.fr){n=Qm(a,x);k=W(x,Ea(a));i=x
+1|0;y=k+W(i,a.dq)|0;k=j+a.dR|0;r=k+a.eA|0;z=a.cL!=x?0:1;ba=!z?t:g.rx;q=!z?g.tO:g.i1;bb=!z?g.oW:g.i1;bc=!z?g.pZ:g.i1;bd=(v+y|0)-a.bE.a|0;EY(b,j,bd,n.hL,n.sK,a.fS,q,ba,0.0);EY(b,k,bd,n.iz,n.iW,a.fS,bb,ba,0.0);EY(b,r,bd,n.hN,n.j6,a.fS,bc,ba,0.0);k=n.hL.b;s=j+k|0;U(m,Bd(0,a.dR-k|0),n.hL.a);Bx(b,s,bd,m,ba);k=j+a.dR|0;s=n.iz.b;be=k+s|0;U(m,Bd(0,a.eA-s|0),n.iz.a);Bx(b,be,bd,m,ba);k=n.hN.b;bf=r+k|0;U(m,Bd(0,(((a.dZ.s.b-k|0)-a.eA|0)-a.dR|0)-w|0),n.hN.a);Bx(b,bf,bd,m,ba);bg=(u+a.r.b|0)-w|0;U(m,w,Ea(a)+a.dq|0);Bx(b,bg,
bd,m,t);x=i;}Hp(b);}
function AAw(a,b){var c,d,e,f,g,h;c=0;d=a.fG;while(d<=a.fr){e=Qm(a,d);if(!(e!==null&&e.gm===a.cd.data[d])){f=a.en.data;g=a.cd;e=a.eo;h=a.hM;c=d%f.length|0;if(f[c]!==null)XD(e,f[c],h);f[c]=JZ(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cx(a.hf,JY(a.eo));Rv(a,a.cx.c6);}}
function Rv(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hf;c=CO(b,c.b+150|0,c.a);CC(c,a.ef);d=a.ef;e=d.ds;f=e-(e+d.eT)/16.0;g=a.en.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gm.jo;k=d.iW;Ch(c,j,k.bp+a.e_,f+k.bN);j=d.gm.jD;d=d.j6;Ch(c,j,d.bp+a.e_,f+d.bN);}i=i+1|0;}a:{d=a.hM;if(d.cU>0){h=d.cS;i=0;b:while(true){g=d.ce.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cI;l=j.cY;k=k;l=l.ke;Ch(c,k,l.bp+a.e_,f+l.bN);j=j.cO;if(h!=d.cS)break b;}i=i+1|0;}b=new Ht;Y(b);K(b);}}b=CK(a.fS,CZ(b));a.fS=b;CS(b,c);F7(c);}
function Qm(a,b){var c;c=a.en.data;return c[b%c.length|0];}
function ARc(a,b){Cx(a.dZ.s,b);}
function AS3(a,b){Cx(a.dZ.A,b);}
function AB1(a){var b,c;KA(a);b=Ea(a);c=a.cd.data.length;b=W(b,c)+W(a.dq,c+1|0)|0;U(a.c0,a.r.b,b);}
function Q_(a){var b,c,d,e,f,g,h,i,j;b=Jn(a.cx);if(Zn(a))return;KA(a);CC(b,a.ef);c=AAG(b,a.e_);d=a.cd.data;e=d.length;f=0;while(f<e){g=d[f];h=K2(c,g.gz);i=K2(c,g.jo);j=K2(c,g.jD);a.dR=Bd(a.dR,h);a.eA=Bd(a.eA,i);a.gr=Bd(a.gr,j);f=f+1|0;}}
function AOr(a,b){var c;c=TL(a,b.i);if(c>=0)a.cL=c;return Eq(a.dZ,a.G)&&Ge(a.cx.cN)?1:0;}
function ALG(a,b,c){if(!Eq(a.dZ,b.i)&&!KY(a.dZ)){b=a.xo;if(b!==null)b.o();}return null;}
function ARt(a,b,c,d){var e;if(d==1){e=TL(a,b.i);if(e>=0)Xy(a,a.cd.data[e]);}return 1;}
function Xy(a,b){a.jc.o();b.ty.o();}
function TL(a,b){var c,d,e;if(!a.en.data.length)return (-1);c=Ea(a);d=(b.a-a.G.a|0)+a.bE.a|0;e=a.dq;e=(d+e|0)/(c+e|0)|0;if(e<a.cd.data.length)return e;return (-1);}
function Ea(a){return Fg(a.ef);}
function KA(a){var b;if(a.ef===null){b=HH(a.cx,a.vc);a.ef=b;a.eo=ABb(Fg(b));a.e_=Dl(a.ef.m$);}}
function ATn(a,b){var c,d,e;a:{switch(b.bl){case 13:Xy(a,a.cd.data[a.cL]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cL=a.fG;b=a.gg;c=a.bE;Jv(b,c.b,c.a-(a.r.a/2|0)|0);return 0;case 34:a.cL=a.fr;b=a.gg;c=a.bE;Jv(b,c.b,c.a+(a.r.a/2|0)|0);return 0;case 35:case 39:a.cL=a.cd.data.length-1|0;break a;case 36:case 37:a.cL=0;break a;case 38:d=a.cL;e=a.cd.data.length;a.cL=((d+e
|0)-1|0)%e|0;break a;case 40:a.cL=(a.cL+1|0)%a.cd.data.length|0;break a;default:break a;}a.jc.o();return 0;}e=a.cL;if(e<=a.fG)Jv(a.gg,a.bE.b,W(e,Ea(a))+W(a.cL,a.dq)|0);else if(e>=a.fr)Jv(a.gg,a.bE.b,(W(e+1|0,Ea(a))+W(a.cL+2|0,a.dq)|0)-a.r.a|0);return 0;}
var Oa=G();
function AL7(a){}
function ACt(){var a=this;E_.call(a);a.nw=null;a.pW=null;a.uU=null;a.bF=null;a.dd=null;a.di=null;a.v4=0.0;a.wY=null;a.wR=null;}
function AAs(a,b){var c=new ACt();AHM(c,a,b);return c;}
function AHM(a,b,c){var d;c=c.cN;Mh(a);d=new PE;d.rJ=a;a.pW=d;d=new PD;d.s7=a;a.uU=d;a.v4=10.0;a.bF=b;a.nw=c;b.gg=a;}
function ASX(a){var b;b=a.bF;b.gg=null;a.bF=CK(b,null);}
function AAa(a,b,c){var d;a.wY=b;a.wR=c;d=a.dd;if(d!==null)Hl(d,b,c);d=a.di;if(d!==null)Hl(d,b,c);}
function AMh(a,b,c,d){SX(a,b,c,d);SX(a.bF,b,c,d);if(d!==0.0){a.bF.w9();ADm(a.bF);if(XP(a))I9(a);else a.di=null;if(PK(a))HX(a);else a.dd=null;}}
function Jv(a,b,c){AG0(a.bF,b,c);if(XP(a))I9(a);if(PK(a))HX(a);}
function PK(a){var b;b=a.r.a;return b>0&&a.bF.c0.a>b?1:0;}
function XP(a){var b;b=a.r.b;return b>0&&a.bF.c0.b>b?1:0;}
function I9(a){var b,c,d,e,f,g;b=a.di;if(b===null)b=I$();a.di=b;Sr(a,b);c=a.di;b=a.bF;d=b.bE.b;e=a.G;f=e.b;g=a.r;Sm(c,d,f,g.b,b.c0.b,e.a+g.a|0,MS(a));}
function HX(a){var b,c,d,e,f,g;b=a.dd;if(b===null)b=I$();a.dd=b;Sr(a,b);c=a.dd;b=a.bF;d=b.bE.a;e=a.G;f=e.a;g=a.r;Jr(c,d,f,g.a,b.c0.a,e.b+g.b|0,MS(a));}
function MS(a){return Cc(a.v4,a.ek);}
function Sr(a,b){var c,d;c=a.wY;d=a.wR;if(!(c!==null&&d!==null?(K$(b.iQ,c)&&K$(b.iR,d)?1:0):0))Hl(b,c,d);}
function AR3(a,b){var c;a.bF.fH(b);if(!(a.dd===null&&a.di===null)){Cw(b,1);c=a.dd;if(c!==null)GP(c,b);c=a.di;if(c!==null)GP(c,b);c=a.dd;if(c!==null)GY(c,b);c=a.di;if(c!==null)GY(c,b);Cw(b,0);}}
function VY(a,b){var c,d;a:{b:{c=a.dd;if(!(c!==null&&Ie(c,b))){c=a.di;if(c===null)break b;if(!Ie(c,b))break b;}d=1;break a;}d=0;}return d;}
function ATz(a,b,c,d){return !VY(a,b.i)&&!a.bF.cB(b,c,d)?0:1;}
function AS2(a,b,c){var d,e;d=a.dd;if(d!==null){e=FE(d,b.i,a.pW,1);if(e!==null)return e;}d=a.di;if(d!==null){e=FE(d,b.i,a.uU,0);if(e!==null)return e;}return a.bF.ch(b,c);}
function APQ(a,b,c){return VY(a,b.i)?1:0;}
function APt(a,b){var c,d,e;c=a.dd;d=c!==null&&FR(c,b.i,a.nw)?1:0;c=a.di;e=c!==null&&FR(c,b.i,a.nw)?1:0;return !d&&!e&&!a.bF.bQ(b)?0:1;}
function ALv(a,b,c,d){var e,f;if(!DN(a,b.i))return 0;e=Cc(d*0.25,a.ek);f=Cc(c*0.25,a.ek);if(b.bP){f=f+e|0;e=0;}if(a.dd!==null&&e){b=a.bF;AAk(b,b.bE.a+e|0);HX(a);}if(a.di!==null&&f){b=a.bF;WT(b,b.bE.b+f|0);I9(a);}return 1;}
function AU2(a){var b,c;b=MS(a);c=a.bF.jW();c.b=Bd(c.b,b);c.a=Bd(c.a,b);return c;}
function Qa(){var a=this;Gg.call(a);a.ki=null;a.mB=null;a.qw=null;a.qt=0.0;}
function AKr(a){var b,c;b=a.c0;c=a.r;U(b,c.b*3|0,c.a*5|0);}
function AU5(a){var b;b=Cc(20.0,a.ek);return B$(b,b);}
function ARj(a,b){var c,d,e,f;c=a.qw;d=c.q5;e=c.q6;c=c.q4;f=new M;O(f);H(H(H(f,c),C(35)),b);Ip(e,N(f),d.pT,3.0);}
function AVr(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;AGv(a,b);Xb(a,b);c=Cc(30.0,a.ek);d=a.bE;e=d.b;f=W(e/c|0,c);g=d.a;h=W(g/c|0,c);d=a.r;i=W(((e+d.b|0)-1|0)/c|0,c);e=W(((g+d.a|0)-1|0)/c|0,c);d=a.mB;d.a=c;d.b=c;a.ki.bO=1.0;while(h<=e){g=a.G.a-a.bE.a|0;j=f;while(j<=i){k=a.G.b-a.bE.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AGc(l);m=m+1|0;}n=2.3283064365386963E-10*l;if(n<0.0)n=n+1.0;YO(n,0.75,a.qt,a.ki);Bx(b,k+j|0,g+h|0,a.mB,a.ki);j=j+c|0;}h=h+c|0;}Hp(b);}
function AIE(a,b){}
function Yv(){var a=this;B.call(a);a.q5=null;a.q6=null;a.q4=null;}
var TA=G(D6);
var A1Q=null;function Dc(b,c){return Long_udiv(b, c);}
function AAY(b,c){return Long_urem(b, c);}
function Dt(b,c){return Long_ucompare(b, c);}
function AC_(){A1Q=F($rt_longcls());}
function Qw(){B.call(this);this.oq=null;}
function AS$(a){R2(a.oq);}
function OO(){B.call(this);this.n9=null;}
function AJZ(a){VZ(a.n9);}
function Vq(){B.call(this);this.ng=null;}
var A1P=null;function ANh(){var a=new Vq();ABS(a);return a;}
function ABS(a){a.ng=BJ();}
function Nc(a,b,c,d,e){var f;f=new K0;f.ty=e;f.jo=c;f.jD=d;f.gz=b;BH(a.ng,f);}
function Yu(a){return Ic(a.ng,A1P);}
function Ug(b){var c,d;if(b===null)b=C(30);else{c=b.f9;if(c===null)b=C(30);else{d=Ry(c,C(399),J(c));b=d==(-1)?b.f9:Do(b.f9,d+1|0);}}return b;}
function AGj(){A1P=R(K0,0);}
function I3(){var a=this;B.call(a);a.sK=null;a.iW=null;a.j6=null;a.hL=null;a.iz=null;a.hN=null;a.gm=null;}
function JZ(b,c,d,e){var f,g,h;f=new I3;f.hL=new Bf;f.iz=new Bf;f.hN=new Bf;f.gm=b;g=Cl(e,b.gz);if(g!==null)g.ib=g.ib+1|0;else{g=new XK;h=JC(c,b.gz,d);g.ib=1;g.ke=h;F1(e,b.gz,g);}e=g.ke;f.sK=e;U(f.hL,e.bm|0,e.bO|0);e=JC(c,b.jo,d);f.iW=e;U(f.iz,e.bm|0,e.bO|0);b=JC(c,b.jD,d);f.j6=b;U(f.hN,b.bm|0,b.bO|0);return f;}
function XD(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gm.gz;f=Cl(d,e);g=f.ib-1|0;f.ib=g;if(!g){a:{h=0;i=null;if(e===null){j=d.ce.data[0];while(j!==null){if(j.cI===null)break a;e=j.cO;i=j;j=e;}}else{k=IU(e);l=d.ce.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.jT==k&&AA6(e,j.cI))){m=j.cO;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cO=j.cO;else d.ce.data[h]=j.cO;d.cS=d.cS+1|0;d.cU=d.cU-1|0;}IP(b,f.ke);}IP(b,c.iW);IP(b,c.j6);}
function Xf(){var a=this;E_.call(a);a.hK=null;a.ht=null;a.hp=null;a.eE=null;a.j4=0.0;a.hQ=0;a.hu=0;a.dD=null;a.k3=null;}
function La(a){var b;b=a.r;return b.b&&b.a?0:1;}
function Yc(a){var b,c;a:{if(a.hp!==null){b=a.ht;if(b!==null&&!Fw(b)){c=0;break a;}}c=1;}return c;}
function Q1(a,b){a.r.a=b;}
function Rc(a,b,c,d,e){var f,g;f=a.hK.dG;U(f,d,a.r.a);g=a.G;Bx(b,g.b+c|0,g.a,f,e);}
function WS(a){if(a.eE===null)a.eE=HH(a.hK,a.hp);}
function Vy(){var a=this;B.call(a);a.mg=E9;a.k8=0;a.oU=0;}
function Ul(){var a=this;B.call(a);a.pb=null;a.pa=null;a.o_=null;}
function AJa(a){var b,c,d,e,f;b=a.pb;c=a.pa;d=a.o_;e=Bz();f=new M;O(f);b=H(f,b);BL(b,9);b=H(b,c);BL(b,9);H(b,d);Bt(e,N(f));}
function PE(){B.call(this);this.rJ=null;}
function AIo(a,b){var c,d;c=a.rJ;d=Fn(b,c.bF.c0.a-c.r.a|0);AAk(c.bF,d);HX(c);}
function PD(){B.call(this);this.s7=null;}
function AIM(a,b){var c,d;c=a.s7;d=Fn(b,c.bF.c0.b-c.r.b|0);WT(c.bF,d);I9(c);}
function K0(){var a=this;B.call(a);a.ty=null;a.jo=null;a.jD=null;a.gz=null;}
var CL=G(Bu);
var AES=G(EX);
function AKy(a){var b=new AES();AO2(b,a);return b;}
function AO2(a,b){a.j2=1;a.kA=1;a.l6=b;}
function WC(){B.call(this);this.rP=null;}
function Yy(){var a=this;B.call(a);a.y6=null;a.y7=null;a.y5=null;}
function TG(){var a=this;B.call(a);a.wF=null;a.wG=null;a.wE=0;}
function ALa(a,b){var c,d,e;c=a.wF;d=a.wG;e=a.wE;d.g(Yh(c,(b.i.b+e|0)-c.eq.b|0));}
function TF(){var a=this;B.call(a);a.p9=null;a.p7=null;a.p8=0;}
function AUh(a,b){var c,d,e;c=a.p9;d=a.p7;e=a.p8;d.g(Rh(c,(b.i.a+e|0)-c.eq.a|0));}
function K6(){var a=this;MK.call(a);a.pr=null;a.tR=null;}
function AGo(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.pr;e=0;f=0;g=a.tR;a:{b:{while(true){if((e+32|0)>f&&DV(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cb(b)+k|0;h=j.length;f=Bb(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BC;c=new M;O(c);V(H(V(H(c,C(400)),l),C(100)),h);Bi(b,N(c));K(b);}if(Cb(b)<m){b=new Mw;Y(b);K(b);}if(m<0){b=new BC;c=new M;O(c);H(V(H(c,C(101)),m),C(102));Bi(b,N(c));K(b);}n=b.Z;h=n+b.lW|0;e=0;while(e<m){o=k+1|0;i=b.mG.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!DV(c)){p=!DV(b)&&e>=f?AZE:AZD;break a;}i=g.data;n=Cb(c);o=i.length;n=Bb(n,o);q=new WF;q.sS=b;q.vq=c;p=AGO(a,d,e,f,g,0,n,q);e=q.xc;if(p===null&&0==q.k$)p=AZE;k=q.k$;h=0;if(c.nx){b=new JB;Y(b);K(b);}if(Cb(c)<k)break;if(h>o){b=new BC;c=new M;O(c);BL(V(H(V(H(c,C(103)),h),C(97)),o),41);Bi(b,N(c));K(b);}l=h+k|0;if(l>o){b=new BC;c=new M;O(c);V(H(V(H(c,C(105)),l),C(100)),o);Bi(b,N(c));K(b);}if(k<0){b=new BC;c=new M;O(c);H(V(H(c,C(101)),k),C(102));Bi(b,N(c));K(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;TR(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new Ir;Y(b);K(b);}b=new BC;c=new M;O(c);BL(V(H(V(H(c,C(103)),k),C(97)),h),41);Bi(b,N(c));K(b);}EU(b,b.Z-(f-e|0)|0);return p;}
var UZ=G(K6);
function AGO(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(K7(h,2))break a;i=AZE;break a;}c=k+1|0;n=j[k];if(!FV(a,n)){c=c+(-2)|0;i=Eb(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(K7(h,3))break a;i=AZE;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!FV(a,n))break b;if(!FV(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(MP(p)){c=k+(-3)|0;i=Eb(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eb(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(K7(h,4))break a;i=AZE;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cb(h.vq)<2?0:1)break a;i=AZD;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!FV(a,n))break c;if(!FV(a,o))break c;if(!FV(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=II(r);m=c+1|0;j[c]=Jh(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eb(1);break a;}c=k+(-3)|0;i
=Eb(1);}h.xc=c;h.k$=f;return i;}
function FV(a,b){return (b&192)!=128?0:1;}
function ZH(){B.call(this);this.or=null;}
function AUa(a,b){var c,d;c=a.or;d=c.d7+1|0;c.d7=d;c=new M;O(c);H(H(V(c,d),C(401)),b);$rt_globals.console.info($rt_ustr(N(c)));}
function Qi(){B.call(this);this.nV=null;}
function AIu(a){return a.nV.gA();}
function Qh(){B.call(this);this.w2=null;}
function ALy(a){return a.w2.gA();}
function T9(){B.call(this);this.tN=null;}
function AQu(a){return a.tN.gA();}
function UF(){B.call(this);this.yT=null;}
function AT4(a){Bt(Bz(),C(402));}
function SB(){B.call(this);this.oD=null;}
function AHF(a,b){a.oD.g(FP(b));}
function V8(){B.call(this);this.tW=null;}
function AUX(a,b){a.tW.o();}
function NA(){var a=this;B.call(a);a.zb=null;a.zd=null;a.y_=0;a.za=0;}
var AD6=G();
var AFi=G();
function OE(){B.call(this);this.vk=null;}
function AKl(a,b){var c,d,e,f;c=a.vk;d=new M;O(d);H(H(d,C(403)),b);$rt_globals.console.info($rt_ustr(N(d)));d=new VD;d.y$=c;d.r$=b;e=new VG;e.Ad=c;f=new V4;f.yH=e;e=new Xh;e.pg=d;c=b.fJ;if(c!==null)c.arrayBuffer().then(Bl(e,"f"),Bl(f,"f"));else{b=b.hn.getFile();c=new Xk;c.vg=e;c.vh=f;b.then(Bl(c,"f"),Bl(f,"f"));}}
function OC(){B.call(this);this.x8=null;}
function ASC(a,b){var c;c=new M;O(c);H(H(c,C(404)),b);$rt_globals.console.info($rt_ustr(N(c)));}
var Np=G();
function ASZ(a,b){b=b;b.bq=CK(b.bq,null);}
function XE(){B.call(this);this.tM=null;}
function AJr(a){DY(a.tM);}
function H_(){var a=this;GU.call(a);a.ml=0;a.hy=null;}
var Ht=G(Bu);
function WE(){B.call(this);this.rQ=null;}
function AQe(a,b){var c;c=a.rQ;Dv(c,b);Ks(c,null);Jy(c);}
var Rl=G(D6);
var A1R=null;function ABU(){A1R=F($rt_doublecls());}
var I6=G();
var A1S=E9;var A1T=null;var A1U=null;function ADD(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.oU=H$(C0(d,D(0, 2147483648)),E9)?0:1;e=C0(d,D(4294967295, 1048575));f=GB(AWX(d,52))&2047;if(H$(e,E9)&&!f){c.mg=E9;c.k8=0;return;}if(f)e=AWD(e,D(0, 1048576));else{e=GR(e,1);while(H$(C0(e,D(0, 1048576)),E9)){e=GR(e,1);f=f+(-1)|0;}}g=A1U.data;h=f<<16>>16;i=0;j=g.length;k=BF(i,j);if(k>0){c=new BD;Y(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BF(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IA(e,A1T.data[h],i);if(AK7(m,A1S)){while(Dt(m,A1S)<=0){j=j+(-1)|0;m=CH(Ca(m,Bp(10)),Bp(9));}g=A1U.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IA(e,A1T.data[h],i);}e=GR(e,1);d=CH(e,Bp(1));g=A1T.data;h=j+1|0;n=g[h];f=i-1|0;n=IA(d,n,f);o=IA(Iy(e,Bp(1)),A1T.data[h],f);p=Bp(1);while(true){q=Ca(p,Bp(10));if(Dt(Dc(m,q),Dc(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ca(r,Bp(10));if(Dt(Dc(m,s),Dc(n,s))>=0)break;r=s;}h=Dt(p,r);e=h>0?Ca(Dc(m,p),p):h<0?CH(Ca(Dc(m,r),r),r):Ca(Dc(CH(m,AFm(r,Bp(2))),r),r);if(Dt(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dc(e,Bp(10));if(Dt(e,D(2808348672, 232830643))<0)break;}else if(Dt(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ca(e,Bp(10));}c.mg=e;c.k8=j-330|0;}
function IA(b,c,d){var e,f,g,h,i,j,k,l;e=C0(b,Bp(65535));f=C0(F0(b,16),Bp(65535));g=C0(F0(b,32),Bp(65535));h=C0(F0(b,48),Bp(65535));i=C0(c,Bp(65535));j=C0(F0(c,16),Bp(65535));k=C0(F0(c,32),Bp(65535));l=C0(F0(c,48),Bp(65535));return CH(CH(CH(GR(Ca(l,h),32+d|0),GR(CH(Ca(l,g),Ca(k,h)),16+d|0)),GR(CH(CH(Ca(l,f),Ca(k,g)),Ca(j,h)),d)),F0(CH(CH(CH(Ca(k,e),Ca(j,f)),Ca(i,g)),GR(CH(CH(CH(Ca(l,e),Ca(k,f)),Ca(j,g)),Ca(i,h)),16)),32-d|0));}
function ADb(){A1S=Dc(Bp(-1),Bp(10));A1T=ABI([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A1U=AYm([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function NB(){B.call(this);this.ub=null;}
function AVW(a,b){var c,d;c=a.ub;d=new Bu;Bi(d,$rt_str(b.message));c.g(d);}
function AAW(){B.call(this);this.Fx=null;}
function VX(){var a=this;B.call(a);a.sE=0;a.xF=0;}
function Fn(a,b){return RB(a.sE,b,a.xF);}
function ZO(){var a=this;B.call(a);a.s3=null;a.s4=null;a.s5=null;}
function ARR(a,b,c,d){var e,f;b=a.s3;e=a.s4;f=a.s5;U_(b,e);if(f!==null)d.ll.o();if(WA(d)){if(d.mq===null)PH(b,AC8(d,e),d.jv,e);else YR(b,AC8(d,e),d.jv,e,d.mq);}}
function Ft(){var a=this;B.call(a);a.fP=null;a.cw=null;a.eg=null;a.dr=null;a.e3=null;a.hC=null;a.j7=null;}
function AV4(a){var b=new Ft();AEj(b,a);return b;}
function AEj(a,b){a.fP=b;a.cw=BJ();a.eg=BJ();a.dr=BJ();a.hC=BJ();a.e3=BJ();}
function AGq(a,b){var c,d,e;c=a.e3.bv();while(c.bK()){d=c.br();e=Zl(b,d.ik);if(e!==null){e=e.fl;if(e!==null)d.fE.fl=e;}}c=a.eg.bv();while(c.bK()){Zl(b,c.br());}}
function Uh(a,b){var c,d,e,f;c=a.e3.bv();while(true){if(!c.bK()){c=a.dr.bv();while(true){if(!c.bK()){c=a.cw.bv();a:while(true){if(!c.bK())return null;d=c.br();if(!(d instanceof Iw))continue;e=d.dr.bv();while(e.bK()){f=e.br();if(b.X(f))break a;}}return f;}e=c.br();if(b.X(e))break;}return e;}e=c.br();if(b.X(e.fE))break;}return e.fE;}
function ZU(){B.call(this);this.qD=null;}
function AMa(a,b){b=b;SU(a.qD,b);}
var Lq=G(Ft);
function Iw(){Ft.call(this);this.yQ=null;}
function X1(){B.call(this);this.vw=null;}
function AIL(a,b){var c;b=b;c=a.vw;Bs(c.bV,(Cl(c.fp,b)).bD);}
function Ru(){var a=this;B.call(a);a.fE=null;a.ik=null;}
function Qo(){B.call(this);this.n8=null;}
function AO9(a,b){b=b;TW(a.n8,b);}
var D9=G(Bu);
function OV(){var a=this;B.call(a);a.n7=null;a.rt=null;a.vv=0;a.w4=0;}
function Ml(a,b){return Cb(a.rt)<b?0:1;}
function Pg(){var a=this;B.call(a);a.iI=null;a.o6=null;}
function Gy(a,b,c){var d,e,f,g,h,i;if(c===null)return null;d=c.jX;if(d!=4&&d!=5){e=LU(a,b,c);if(e!==null){b=e.fl;if(b!==null)c.ec=b;}if(c.jX!=3&&!(c instanceof Ga)&&!(c instanceof Fr)){b=a.o6.rP;f=c.dJ.cy;g=b.gE;if(g===null)c=Q7(b,f);else{d=AEy(g,f);if(d<0)d=( -d|0)-1|0;d=d-1|0;c=Du(d,f-(d<0?0:b.gE.data[d])|0);}h=MD(BV(b,c.by),c.bH);if(e===null)h.cG=5;else{f=e.gC!=3?0:2;d=!(e instanceof HC)?0:2;i=Q7(b,e.c$.cy);F1(b.dM,c,i);R_(b.dp,i,BJ());BH(Cl(b.dp,i),c);h.cG=f;h.cf=d;}}return e;}a:{while(true){if(b===null)
{e=null;break a;}e=b.j7;if(e!==null)break;b=b.fP;}}c.ec=e;return null;}
function LU(a,b,c){var d,e,f;if(c instanceof Fr){c=c.kc;d=new Zo;d.sn=a;d.so=b;En(c,d);return null;}if(c instanceof FZ){e=c;c=BW(e.fs);while(BX(c)){Gy(a,b,B0(c));}return Kd(a,b,e);}if(c instanceof Ga){d=c;Gy(a,b,d.fX);b=PF(a,d.fX.ec);return b===null?null:Gy(a,b,d.gj);}d=new OH;d.wT=a;d.wV=c;f=Uh(b,d);if(f===null){d=new OF;d.qi=a;f=NZ(a,b,c,d);}if(f!==null)return f;b=b.fP;return b===null?null:LU(a,b,c);}
function Kd(a,b,c){var d,e;d=new WL;d.u1=a;d.u0=c;d=Uh(b,d);if(d!==null)return d;d=new WM;d.oR=a;e=NZ(a,b,c,d);if(e!==null)return e;b=b.fP;return b===null?null:Kd(a,b,c);}
function NZ(a,b,c,d){var e,f;b=b.hC.bv();while(true){if(!b.bK())return null;e=PF(a,b.br());if(e===null)continue;f=d.o$(e,c);if(f!==null)break;}return f;}
function PF(a,b){if(b===null)return null;return QO(a,a.iI.eP,b);}
function QO(a,b,c){var d,e;d=b.j7;if(d!==null&&Bn(d,c))return b;b=b.cw.bv();while(true){if(!b.bK())return null;e=QO(a,b.br(),c);if(e!==null)break;}return e;}
var AF6=G();
function V1(b,c,d,e){var f,g;f=b.next();g=new Zt;g.on=b;g.om=c;g.os=d;g.oo=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function AA8(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AGP(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Eh()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new Zq;f.sd=b;f.se=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function ABg(b,c){var d;if(c.isFile?1:0)b.g(AAD(c.file()));else{c=c.createReader();d=new Y9;d.vM=b;c.readEntries(Bl(d,"f"));}}
function UN(){var a=this;B.call(a);a.bJ=null;a.pp=null;a.iK=null;a.kz=null;a.W=null;}
function IH(a){return a.bJ.cE.i$;}
function AAf(a){var b;b=new Vi;b.pc=a;return b;}
function ADf(a){var b,c,d,e,f,g;b=R(C$,5);c=b.data;d=a.W.Y.U.bg;e=a.bJ;BP(e);f=new PM;f.sm=e;c[0]=DL(C(405),d,f);d=a.W.Y.U.bg;e=a.bJ;BP(e);f=new PN;f.wk=e;c[1]=DL(C(406),d,f);e=a.W.Y.U.bg;f=a.bJ;BP(f);g=new PO;g.ut=f;c[2]=DL(C(407),e,g);e=a.W.Y.U.bg;f=a.bJ;BP(f);g=new PJ;g.oE=f;c[3]=DL(C(408),e,g);e=a.W.Y.U.bg;f=a.bJ;BP(f);g=new PL;g.xp=f;c[4]=DL(C(409),e,g);return F$(b);}
function J9(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DY(a.W.cg);d=a.bJ.e;e=DX(d);f=Gv(d);g=a.bJ.fj;if(c===null)h=null;else{AXu();switch(A1V.data[c.dg]){case 1:h=MM(g,e,f);break a;case 2:h=Si(g,e,f);break a;default:}b=new EB;Y(b);K(b);}}c=a.bJ;e=EW(c,b);f=Ho(c.e.f,e.by,e.bH);g=Uy(c,f);if(h!==null){f=c.e;i=e.by;j=e.bH;e=new UW;e.Al=c;e.Ak=b;e.Aj=g;h.tc(f,i,j,e,c.iH);}else{e=Cl(c.e.f.dM,f);if(e!==null)ID(c,e);else{e=Cl(c.e.f.dp,f);if(e!==null&&!D8(e))SE(c.j9,b,e,c,g);else{g=c.j9;DY(g.cg);h=g.cg;k=R(C$,1);l=k.data;d=new C$;BP(h);f
=new Oz;f.n_=h;Mg(d,f,C(410),g.Y.U.wI);l[0]=d;GD(h,b,F$(k),So(g,c));}}}}
var ABu=G(0);
function AMI(b){return 112<=b&&b<=123?1:0;}
var QC=G(0);
var ES=G(E2);
function QT(){ES.call(this);this.hs=null;}
function TP(a){var b;b=new Um;Lv(b,a.hs);return b;}
function Na(){B.call(this);this.w1=null;}
function ALn(a,b){b=b;Oh(a.w1,b);}
function WJ(){B.call(this);this.ux=null;}
function AOp(a,b){b=b;Hn(a.ux,b);}
function JN(){var a=this;B.call(a);a.c$=null;a.fl=null;a.gC=0;}
function AXE(a,b,c){var d=new JN();AFd(d,a,b,c);return d;}
function AFd(a,b,c,d){a.c$=b;a.fl=c;a.gC=d;}
function Rf(a,b,c){var d,e,f,g;a:{d=b.dJ;if(d!==null){e=a.c$;if(!Bn(d.fL,e.fL)){f=0;break a;}}f=1;}d=b.ec;g=d!==null&&!Mx(c,a.fl,d)?0:1;if(f&&g){if(a.gC!=1)return 1;b=b.dJ;return b!==null&&a.c$.cy<b.cy?1:0;}return 0;}
function AEq(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return B2(a.c$,c.c$)&&B2(a.fl,c.fl)&&B2(Dh(a.gC),Dh(c.gC))?1:0;}return 0;}
function HC(){var a=this;JN.call(a);a.gc=null;a.kL=0;}
function AJh(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!AEq(a,b))return 0;c=b;return B2(a.gc,c.gc);}return 0;}
function EM(){var a=this;B.call(a);a.dJ=null;a.ec=null;a.jX=0;}
function AWr(a,b,c){var d=new EM();LR(d,a,b,c);return d;}
function LR(a,b,c,d){a.dJ=b;a.ec=c;a.jX=d;}
function ABk(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return B2(a.dJ,c.dJ)&&B2(a.ec,c.ec)?1:0;}return 0;}
function Fr(){EM.call(this);this.kc=null;}
function FZ(){var a=this;EM.call(a);a.fs=null;a.kU=0;}
function AUs(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!ABk(a,b))return 0;c=b;return B2(a.fs,c.fs);}return 0;}
function Ga(){var a=this;EM.call(a);a.fX=null;a.gj=null;}
function AIs(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return B2(a.fX,c.fX)&&B2(a.gj,c.gj)?1:0;}return 0;}
function NI(){var a=this;B.call(a);a.w8=null;a.w6=null;}
function Zl(a,b){return Gy(a.w8,a.w6,b);}
function NJ(){var a=this;B.call(a);a.nZ=null;a.nY=null;}
function AM0(a,b){b=b;UE(a.nZ,b,a.nY);}
var Zv=G();
function ASu(a,b){AA8(b);}
function Zu(){var a=this;B.call(a);a.rw=null;a.rv=null;}
function AKI(a,b){var c,d,e,f,g,h,i;c=a.rw;d=a.rv;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new RQ;i.pA=c;i.pz=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var YB=G();
function AMi(a,b){AA8(b);}
function YA(){var a=this;B.call(a);a.qQ=null;a.qR=null;}
function AM9(a,b){var c,d,e,f,g;c=a.qQ;d=a.qR;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=R(BA,1);g.data[0]=FP(b.name);V1(f,c,d,g);}
var ACd=G();
function AFq(b,c,d){AC9(b,c,d,0);}
function AC9(b,c,d,e){ABi(b,c,d,null,null,e);}
function ABi(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u;h=X9(c);i=Be(h);j=Be(h);k=Be(h);l=CB(b);m=BM(i+1|0);n=!g?R(CD,i):QX(b.z,i);c=m.data;b.z=n;o=0;while(o<i){if(g&&o<l){p=4*Be(h)|0;h.fv=h.fv+p|0;c[o+1|0]=(c[o]+(BV(b,o)).M|0)+1|0;}else{b.z.data[o]=DS(ACM(h,d,0));c[o+1|0]=(c[o]+(BV(b,o)).M|0)+1|0;}o=o+1|0;}if(j)b.c7=AGJ(ABy(h));b.gE=m;GK(b.dM);GK(b.dp);q=b.dM;g=0;while(g<k){F1(q,Du(Be(h),Be(h)),Du(Be(h),Be(h)));g=g+1|0;}r=b.dM;s=b.dp;r=Pp(WD(r));while(Fi(r)){t=Zx(r);q=t.cI;t=t.cY;R_(s,t,BJ());BH(Cl(s,t),
q);}if(s.ly===null){r=new QU;r.xj=s;s.ly=r;}r=s.ly;q=new SP;Lv(q,r.xj);while(Fi(q)){L2(q);r=q.gG.cY;t=AYS;c=R(B,r.j);d=c.data;Ic(r,c);ACB(c,t);g=0;u=d.length;while(g<u){t=d[g];JQ(r,g);r.cC.data[g]=t;g=g+1|0;}}Se(h);if(e!==null&&f!==null){r=APc(e,f);Py(r);b.d1=AKd(r.lY,r.ij);b.c7=AGJ(r.mz);}}
function AAB(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;g=c.data;if(g.length==1&&g[0]==(-1))return;h=X9(c);i=Be(h);j=Be(h);k=Be(h);l=Be(h);m=YU(b,i);n=YU(b,j);o=(Is(BV(b,m.b),m.a)).data[0].p;p=(Is(BV(b,n.b),n.a)).data[1].p;q=0;r=k-1|0;while(q<k){g=ACM(h,d,i);if(!q)g=Mk(o,g);if(q==r)g=Mk(g,p);s=m.b+q|0;t=DS(g);b.z.data[s]=t;q=q+1|0;}if(l){u=ABy(h);v=Kj(i,j,(-1));Wg(b.c7,v,u);}else if(e!==null&&f!==null){t=APc(e,f);Py(t);v=Kj(i,j,(-1));Wg(b.c7,v,t.mz);b.d1.dH=t.ij;}Se(h);}
function ACM(b,c,d){var e,f,g,h,i,j,k,l;e=Be(b);f=R(Ce,e);g=f.data;h=0;while(h<e){i=Be(b);j=Be(b);k=Be(b);l=Be(b);g[h]=Dz(EO(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
var YN=G(0);
var A0t=null;function AA5(){A0t=null;}
function Zq(){var a=this;B.call(a);a.sd=null;a.se=null;}
function AL8(a,b){var c,d,e,f,g,h;b=a.sd;c=a.se;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new Nw;h.og=b;h.of=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=AAD(d.item(f));g=new Ni;g.tB=b;g.tC=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function ABG(){var a=this;B.call(a);a.jS=null;a.mf=null;}
function AHf(){var a=this;B.call(a);a.yM=0;a.Ao=0;a.pV=0;a.l0=0;}
function Za(){var a=this;B.call(a);a.re=null;a.rf=null;}
function AII(a){var b,c,d,e,f,g;b=a.re;c=a.rf;if(B2(c.jS,b.e.gK)){c=c.mf;CE(b,c.l0,c.pV,0);B7(b.q.b1,c.l0,c.pV);B7(b.q.bL,c.Ao,c.yM);}else{d=(Cs(b.fj.vj)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Ct(b);b=new Ps;b.rb=g;b.rc=c;BP(b);c=new RD;c.xM=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function Zb(){var a=this;B.call(a);a.wD=null;a.wC=null;}
function AMO(a){ID(a.wD,a.wC);}
function AGM(){var a=this;B.call(a);a.fL=null;a.cy=0;}
function AL$(a,b){var c=new AGM();AHx(c,a,b);return c;}
function AHx(a,b,c){a.fL=b;a.cy=c;}
function APZ(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.cy==c.cy&&B2(a.fL,c.fL)?1:0;}return 0;}
function N6(){B.call(this);this.o8=null;}
function AOn(a,b){b=b;Nm(a.o8,b);}
function AAc(){B.call(this);this.pd=null;}
function AVU(a,b){b=b;Hn(a.pd,b);}
function AE3(){var a=this;B.call(a);a.jm=null;a.fv=0;}
function X9(a){var b=new AE3();AHL(b,a);return b;}
function AHL(a,b){a.jm=b;a.fv=0;}
function Be(a){var b,c;b=a.jm.data;c=a.fv;a.fv=c+1|0;return b[c];}
function Se(a){var b,c,d,e;if(a.fv!=a.jm.data.length){b=E$();c=a.jm.data.length;d=a.fv;e=new M;O(e);H(V(H(V(H(e,C(391)),c),C(411)),d),C(412));Bt(b,N(e));}}
var Fc=G();
var A1W=null;var A1X=null;var A1Y=null;var A1Z=null;var A10=null;var A11=null;function AEn(){A1W=new W8;A1X=new W5;A1Y=new W6;A1Z=new W3;A10=new W4;A11=new AAi;}
function ABc(){var a=this;B.call(a);a.cP=null;a.k2=null;a.lG=null;a.my=null;a.mt=null;a.lY=null;a.mz=null;a.hk=null;a.ij=null;}
function APc(a,b){var c=new ABc();AT0(c,a,b);return c;}
function AT0(a,b,c){a.cP=X9(b);a.k2=c;}
function Py(a){var b,c,d,e,f,g,h,i;b=Be(a.cP);c=new Lu;Rt(c);a.ij=c;a.hk=BJ();d=0;while(d<b){e=Be(a.cP);f=Be(a.cP);g=EO(a.k2,e,f);F1(a.ij,g,BJ());BH(a.hk,g);d=d+1|0;}c=Pp(WD(a.ij));while(Fi(c)){Vn((Zx(c)).cY,Oq(a));}d=Be(a.cP);if(d==(-1))a.lY=null;else{a.lG=R(Ft,d);c=new NG;h=a.cP;i=a.k2;g=a.hk;c.dV=h;c.su=i;c.rD=g;a.my=c;c=new SM;c.ea=h;c.vx=i;c.v3=g;a.mt=c;a.lY=Sq(a,null);}a.mz=AAo(a.cP,a.lG);}
function Sq(a,b){var c,d,e,f,g,h,i,j;c=Be(a.cP);d=Be(a.cP);e=a.my;f=Be(e.dV);g=BJ();h=0;while(h<f){BH(g,NK(e));h=h+1|0;}a:{switch(d){case -1:e=new Lq;e.fP=b;b=A1Y;e.cw=b;e.eg=b;e.dr=b;e.hC=b;e.e3=b;break a;case 0:e=AV4(b);break a;case 1:e=new Iw;AEj(e,b);if(D8(g)){b=new CL;Bi(b,C(413));K(b);}e.yQ=Br(g,0);Vn(e.dr,g);break a;default:}b=new CL;e=new M;O(e);V(H(e,C(414)),d);Bi(b,N(e));K(b);}e.dr=g;b=a.mt;d=Be(b.ea);g=BJ();h=0;while(h<d){BH(g,Gi(b));h=h+1|0;}e.eg=g;e.hC=Oq(a);d=Be(a.cP);b=BJ();h=0;while(h<d){g=NK(a.my);i
=Gi(a.mt);j=new Ru;j.fE=g;j.ik=i;BH(b,j);h=h+1|0;}e.e3=b;h=Be(a.cP);e.j7=h==(-1)?null:Br(a.hk,h);d=Be(a.cP);b=BJ();h=0;while(h<d){BH(b,Sq(a,e));h=h+1|0;}e.cw=b;a.lG.data[c]=e;return e;}
function Oq(a){var b,c,d,e;b=Be(a.cP);c=BJ();d=0;while(d<b){e=Be(a.cP);BH(c,Br(a.hk,e));d=d+1|0;}return c;}
var KT=G(ES);
var W8=G(KT);
var L7=G(D4);
var W5=G(L7);
var ME=G(Gt);
function AKz(a){var b;b=new D9;Y(b);K(b);}
function AO1(a,b){var c;c=new D9;Y(c);K(c);}
function ANG(a,b){b=new D9;Y(b);K(b);}
var W6=G(ME);
function AO$(a,b){var c;c=new BC;Y(c);K(c);}
function AOg(a){return 0;}
function AK5(a){return A1Z;}
function AIy(a){return 1;}
var W3=G();
function AIf(a){return 0;}
function AQt(a){var b;b=new M4;Y(b);K(b);}
function ASl(a){var b;b=new CL;Y(b);K(b);}
var Q6=G(0);
var W4=G();
var AAi=G();
function E8(){var a=this;B.call(a);a.jj=0;a.tE=0;a.ip=null;a.gG=null;a.q7=null;a.jZ=null;}
function A12(a){var b=new E8();Lv(b,a);return b;}
function Lv(a,b){a.jZ=b;a.tE=b.cS;a.ip=null;}
function Fi(a){var b,c;if(a.ip!==null)return 1;while(true){b=a.jj;c=a.jZ.ce.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.jj=b+1|0;}return 0;}
function ACf(a){var b;if(a.tE==a.jZ.cS)return;b=new Ht;Y(b);K(b);}
function L2(a){var b,c,d,e;ACf(a);if(!Fi(a)){b=new M4;Y(b);K(b);}b=a.ip;if(b!==null){c=a.gG;if(c!==null)a.q7=c;a.gG=b;a.ip=b.cO;}else{d=a.jZ.ce.data;e=a.jj;a.jj=e+1|0;b=d[e];a.gG=b;a.ip=b.cO;a.q7=null;}}
var Um=G(E8);
function QB(a){L2(a);return a.gG.cI;}
var JB=G(D9);
var Ir=G(Bu);
var Mw=G(Bu);
function AGx(){B.call(this);this.A5=null;}
function Th(){var a=this;B.call(a);a.qH=null;a.qI=null;}
function AQF(a){var b,c;b=a.qH;c=a.qI;F3(b.eD,c);}
function Wo(){B.call(this);this.pD=null;}
function AMc(a,b){IM(a.pD,b);}
function P7(){var a=this;B.call(a);a.u7=null;a.u6=null;}
function AJI(a){var b,c;b=a.u7;c=a.u6;F3(b.eD,c);UL(b);}
var AEW=G();
function RU(b,c){return b.data[c];}
function He(){var a=this;B.call(a);a.ed=0;a.ej=0;a.l5=null;a.nd=0;a.ge=null;}
function ATo(a,b,c,d,e,f){var g=new He();AOj(g,a,b,c,d,e,f);return g;}
function AOj(a,b,c,d,e,f,g){a.ed=b;a.ej=c;a.l5=B$(f,g);a.nd=d;a.ge=e;}
function Wf(){ES.call(this);this.sj=null;}
function Pp(a){var b;b=new V6;Lv(b,a.sj);return b;}
function QU(){E2.call(this);this.xj=null;}
var Sl=G(0);
var OL=G(0);
var Hw=G();
function ACN(){var a=this;Hw.call(a);a.HV=null;a.J7=0;a.Ix=0;a.FX=0;}
function VM(){var a=this;B.call(a);a.u2=null;a.u3=null;}
function AKB(a){var b,c;b=a.u2;c=a.u3;T5();J9(b,c,A13);}
function VN(){var a=this;B.call(a);a.u9=null;a.u$=null;}
function AHE(a){var b,c;b=a.u9;c=a.u$;T5();J9(b,c,A14);}
function VJ(){var a=this;B.call(a);a.rs=null;a.rr=null;}
function ANN(a){J9(a.rs,a.rr,null);}
function VL(){var a=this;B.call(a);a.sX=null;a.sW=null;}
function AQ0(a){var b,c,d,e,f,g,h;b=a.sX;c=a.sW;d=DX(b.bJ.e);e=Gv(b.bJ.e);d=VI(b.bJ.fj,d,e);DY(b.W.cg);b=b.bJ;e=EW(b,c);if(d!==null){f=b.e;g=e.by;h=e.bH;e=new Wh;e.AB=b;e.AC=c;d.IH(f,g,h,1,e,b.iH);}}
function Vj(){B.call(this);this.sQ=null;}
function AO6(a){var b;b=a.sQ;DY(b.W.cg);Hm(b.bJ,AAf(b),0);}
function Vl(){B.call(this);this.pm=null;}
function AQZ(a){var b;b=a.pm;DY(b.W.cg);Hm(b.bJ,AAf(b),1);}
function Vk(){B.call(this);this.vz=null;}
function ATw(a){var b,c,d;b=a.vz;DY(b.W.cg);c=IH(b);b=b.bJ;BP(b);d=new OY;d.sl=b;SJ(c,d,ABY(C(415)));}
var RW=G(0);
var A0p=null;function AE6(){A0p=new V2;}
function AAb(){B.call(this);this.p2=null;}
function ARU(a){var b,c,d;b=a.p2;DY(b.W.cg);c=IH(b);b=b.bJ;BP(b);d=new Qd;d.sw=b;Mz(c,d);}
function YY(){B.call(this);this.nP=null;}
function ANv(a,b,c){var d,e;c=a.nP;d=c.e.f;e=b.bD;b=c.fe;TH(d.z.data[e],0,b);}
function NG(){var a=this;B.call(a);a.dV=null;a.su=null;a.rD=null;}
function NK(a){var b,c,d,e,f,g,h;a:{b=Be(a.dV);switch(b){case 3:break;case 5:c=Pm(a);d=Mi(a);b=Be(a.dV);e=Be(a.dV);f=BJ();g=0;while(g<e){BH(f,Mi(a));g=g+1|0;}h=new HC;AFd(h,c,d,4);h.gc=f;h.kL=b;break a;default:c=new CL;d=new M;O(d);V(H(d,C(416)),b);Bi(c,N(d));K(c);}h=AXE(Pm(a),Mi(a),Be(a.dV));}return h;}
function Pm(a){var b,c;b=Be(a.dV);c=Be(a.dV);return AL$(EO(a.su,b,c),Be(a.dV));}
function Mi(a){var b;b=Be(a.dV);if(b==(-1))return null;return Br(a.rD,b);}
function SM(){var a=this;B.call(a);a.ea=null;a.vx=null;a.v3=null;}
function Gi(a){var b,c,d,e,f;a:{b:{b=Be(a.ea);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Os(a);d=Rz(a);b=Be(a.ea);e=TU(a);f=new FZ;LR(f,c,d,2);f.kU=b;f.fs=e;break a;case 4:c=Gi(a);d=Gi(a);f=new Ga;LR(f,c.dJ,c.ec,(-1));f.fX=c;f.gj=d;break a;case 5:f=AWr(Os(a),Rz(a),Be(a.ea));break a;case 9:c=TU(a);f=new Fr;LR(f,null,null,(-1));if(D8(c)){c=new BD;Bi(c,C(417));K(c);}f.kc=c;break a;default:break b;}f=null;break a;}c=new CL;d=new M;O(d);V(H(d,C(418)),b);Bi(c,N(d));K(c);}return f;}
function Os(a){var b,c;b=Be(a.ea);c=Be(a.ea);return AL$(EO(a.vx,b,c),Be(a.ea));}
function Rz(a){var b;b=Be(a.ea);if(b==(-1))return null;return Br(a.v3,b);}
function TU(a){var b,c,d;b=Be(a.ea);c=BJ();d=0;while(d<b){BH(c,Gi(a));d=d+1|0;}return c;}
function O2(){var a=this;B.call(a);a.oL=null;a.oM=0;a.oN=0;a.oO=null;a.oH=0;a.oJ=0;}
function APh(a,b){var c,d,e,f,g,h,i,j;c=a.oL;d=a.oM;e=a.oN;f=a.oO;g=a.oH;h=a.oJ;i=CF(c.bC,5.0);d=Bb((c.bC.ci.b-d|0)-i|0,Bd((i-d|0)-c.T.r.b|0,b.i.b));j=Bb((c.bC.ci.a-e|0)-i|0,Bd((i-e|0)-c.T.r.a|0,b.i.a));U(f,d+g|0,j+h|0);FF(c,f,c.S.r);}
function XN(){var a=this;B.call(a);a.uH=null;a.uJ=null;a.uI=null;a.uD=0;a.uC=0;a.uG=0;a.uE=0;a.uS=0;a.uR=0;a.uT=0;a.vt=0;}
function AL_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uH;d=a.uJ;e=a.uI;f=a.uD;g=a.uC;h=a.uG;i=a.uE;j=a.uS;k=a.uR;l=a.uT;m=a.vt;n=CF(c.bC,5.0);o=c.S.jW();Cx(d,c.S.r);Cx(e,c.S.G);switch(f){case -1:f=Bb(h+(b.i.b-g|0)|0,c.bC.ci.b-n|0);g=o.b;h=h+i|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bd((i+b.i.b|0)-g|0,Bd(o.b,n-c.T.G.b|0));}b:{switch(j){case -1:f=Bd(n,Bb(l+(b.i.a-k|0)|0,(c.bC.ci.a+c.T.r.a|0)-n|0));g=o.a;h=l+m|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bd((m+b.i.a|0)-k|0,o.a);}FF(c,e,d);}
function XM(){var a=this;B.call(a);a.pR=null;a.pQ=0.0;}
function K2(a,b){return Ll(a.pR,b,a.pQ*2.0+0.875);}
var Yt=G(BC);
function X4(){B.call(this);this.tx=null;}
function AJf(a){AG3(a.tx);}
function X3(){B.call(this);this.p1=null;}
function AId(a){KQ(a.p1);}
function X6(){B.call(this);this.rp=null;}
function ANJ(a){ADW(a.rp);}
function Zf(){B.call(this);this.wa=null;}
function ARL(a){a.wa.wU();}
function Ze(){B.call(this);this.ry=null;}
function AML(a){a.ry.xr();}
function Pj(){B.call(this);this.va=null;}
function ATm(a){var b,c,d,e,f,g,h,i;b=a.va;c=(b.pp.dO()).data;d=R(C$,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new On;i.vf=b;i.ve=h;e[f]=AE9(i,h,b.W.Y.U.bg);f=f+1|0;}return d;}
function PM(){B.call(this);this.sm=null;}
function ALL(a){var b,c,d,e,f;b=a.sm.e.f;c=b.cK;d=new M;O(d);V(H(d,C(419)),c);$rt_globals.console.info($rt_ustr(N(d)));c=b.h1;d=new M;O(d);V(H(d,C(420)),c);$rt_globals.console.info($rt_ustr(N(d)));d=b.c7;e=Gd(ER(b));Y1(d,0,d.dX,e);b=Bz();f=b.ln;f.data[0]=10;Pt(b,f,0,1);}
function PN(){B.call(this);this.wk=null;}
function AUp(a){S0(a.wk);}
function PO(){B.call(this);this.ut=null;}
function ARQ(a){UH(a.ut);}
function PJ(){B.call(this);this.oE=null;}
function AMt(a){Ii(a.oE);}
function PL(){B.call(this);this.xp=null;}
function AVq(a){Jy(a.xp);}
function X5(){B.call(this);this.vy=null;}
function APi(a,b,c){GI(BV(a.vy.e.f,b.bD),0,J(c));}
function RQ(){var a=this;B.call(a);a.pA=null;a.pz=null;}
function AKT(a,b){a.pA.g(AEB(a.pz,b));}
var Jp=G(0);
function Nw(){var a=this;B.call(a);a.og=null;a.of=null;}
function ANc(a){ABg(a.og,a.of);}
function Ni(){var a=this;B.call(a);a.tB=null;a.tC=null;}
function AHs(a){a.tB.g(a.tC);}
var V2=G();
function Zt(){var a=this;B.call(a);a.on=null;a.om=null;a.os=null;a.oo=null;}
function AME(a,b){var c,d,e,f,g,h,i;c=a.on;d=a.om;e=a.os;f=a.oo;if(!(b.done?1:0)){V1(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new VF;c.qT=d;c.qU=g;c.qV=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=FP(g.name);i=h.length;f=Dp(f,i+1|0);f.data[i]=b;V1(c,d,e,f);}}}
var V6=G(E8);
function Zx(a){L2(a);return a.gG;}
var SP=G(E8);
var V_=G(0);
var A1N=null;function AWW(){AWW=Bq(V_);AUT();}
function AUT(){A1N=S(C(375));}
function SL(){var a=this;B.call(a);a.h=null;a.dL=0;a.le=null;a.o0=0;a.gV=0;a.fc=0;a.bB=0;a.me=null;}
function KC(a){return a.h.bU;}
function ZL(a,b,c,d){var e,f,g,h,i,j;e=BJ();f=a.dL;g=0;if(c!=f)a.dL=c;a:{switch(b){case -1073741784:h=new Tf;c=a.bB+1|0;a.bB=c;Fv(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Rw;c=a.bB+1|0;a.bB=c;Fv(h,c);break a;case -33554392:h=new Un;c=a.bB+1|0;a.bB=c;Fv(h,c);break a;default:c=a.gV+1|0;a.gV=c;if(d!==null)h=AXL(c);else{h=new FJ;Fv(h,0);g=1;}c=a.gV;if(c<=(-1))break a;if(c>=10)break a;a.le.data[c]=h;break a;}h=new ZG;Fv(h,(-1));}while(true){if(Fd(a.h)&&a.h.k==(-536870788))
{d=ATX(Cf(a,2),Cf(a,64));while(!Dn(a.h)&&Fd(a.h)){i=a.h;j=i.k;if(j&&j!=(-536870788)&&j!=(-536870871))break;CA(d,Bj(i));i=a.h;if(i.bk!=(-536870788))continue;Bj(i);}i=Lm(a,d);i.Q(h);}else if(a.h.bk==(-536870788)){i=Hc(h);Bj(a.h);}else{i=QH(a,h);d=a.h;if(d.bk==(-536870788))Bj(d);}if(i!==null)BH(e,i);if(Dn(a.h))break;if(a.h.bk==(-536870871))break;}if(a.h.lC==(-536870788))BH(e,Hc(h));if(a.dL!=f&&!g){a.dL=f;d=a.h;d.gD=f;d.k=d.bk;d.e5=d.fk;j=d.dl;d.w=j+1|0;d.hT=j;Fh(d);}switch(b){case -1073741784:break;case -536870872:d
=new Nu;FK(d,e,h);return d;case -268435416:d=new XW;FK(d,e,h);return d;case -134217688:d=new SQ;FK(d,e,h);return d;case -67108824:d=new U1;FK(d,e,h);return d;case -33554392:d=new DW;FK(d,e,h);return d;default:switch(e.j){case 0:break;case 1:return AXt(Br(e,0),h);default:return AW4(e,h);}return Hc(h);}d=new Jz;FK(d,e,h);return d;}
function AFD(a){var b,c,d,e,f,g,h;b=BM(4);c=(-1);d=(-1);if(!Dn(a.h)&&Fd(a.h)){e=b.data;c=Bj(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=BU(3);b=e.data;b[0]=c&65535;f=a.h;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bj(f);f=a.h;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bj(f);return ATE(e,3);}return ATE(e,2);}if(!Cf(a,2))return ACe(b[0]);if(Cf(a,64))return ARo(b[0]);return AJR(b[0]);}e=b.data;c=1;while(c<4&&!Dn(a.h)&&Fd(a.h)){h=c+1|0;e[c]=Bj(a.h);c=h;}if(c==1){h=e[0];if(!(A15.z8(h)==A16?0:1))return ZD(a,e[0]);}if
(!Cf(a,2))return AYo(b,c);if(Cf(a,64)){f=new Zs;Pl(f,b,c);return f;}f=new Vb;Pl(f,b,c);return f;}
function QH(a,b){var c,d,e,f,g,h,i;if(Fd(a.h)&&!Kn(a.h)&&KZ(a.h.k)){if(Cf(a,128)){c=AFD(a);if(!Dn(a.h)){d=a.h;e=d.bk;if(!(e==(-536870871)&&!(b instanceof FJ))&&e!=(-536870788)&&!Fd(d))c=MT(a,b,c);}}else if(!Pw(a.h)&&!WN(a.h)){f=new Pz;O(f);while(!Dn(a.h)&&Fd(a.h)&&!Pw(a.h)&&!WN(a.h)){if(!(!Kn(a.h)&&!a.h.k)&&!(!Kn(a.h)&&KZ(a.h.k))){g=a.h.k;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bj(a.h);if(!ML(e))BL(f,e&65535);else IZ(f,GS(e));}if(!Cf(a,2)){c=new Ta;DH(c);c.cA
=N(f);e=f.I;c.bR=e;c.lw=APG(e);c.mi=APG(c.bR);h=0;while(h<(c.bR-1|0)){ST(c.lw,P(c.cA,h),(c.bR-h|0)-1|0);ST(c.mi,P(c.cA,(c.bR-h|0)-1|0),(c.bR-h|0)-1|0);h=h+1|0;}}else if(Cf(a,64))c=AYn(f);else{c=new Of;DH(c);c.hW=N(f);c.bR=f.I;}}else c=MT(a,b,Zr(a,b));}else{d=a.h;if(d.bk!=(-536870871))c=MT(a,b,Zr(a,b));else{if(b instanceof FJ)K(Cd(C(30),d.bU,Pv(d)));c=Hc(b);}}a:{if(!Dn(a.h)){e=a.h.bk;if(!(e==(-536870871)&&!(b instanceof FJ))&&e!=(-536870788)){f=QH(a,b);if(c instanceof C5&&!(c instanceof Fj)&&!(c instanceof CV)
&&!(c instanceof EK)){i=c;if(!f.b2(i.K)){c=new Yb;E6(c,i.K,i.d,i.ii);c.K.Q(c);}}if((f.iq()&65535)!=43)c.Q(f);else c.Q(f.K);break a;}}if(c===null)return null;c.Q(b);}if((c.iq()&65535)!=43)return c;return c.K;}
function MT(a,b,c){var d,e,f,g,h;d=a.h;e=d.bk;if(c!==null&&!(c instanceof B6)){switch(e){case -2147483606:Bj(d);d=new AAn;Di(d,c,b,e);MY();c.Q(A17);return d;case -2147483605:Bj(d);d=new Rn;Di(d,c,b,(-2147483606));MY();c.Q(A17);return d;case -2147483585:Bj(d);d=new Q0;Di(d,c,b,(-536870849));MY();c.Q(A17);return d;case -2147483525:f=new N_;d=Fm(d);g=a.fc+1|0;a.fc=g;JP(f,d,c,b,(-536870849),g);MY();c.Q(A17);return f;case -1073741782:case -1073741781:Bj(d);d=new S8;Di(d,c,b,e);c.Q(d);return d;case -1073741761:Bj(d);d
=new Sg;Di(d,c,b,(-536870849));c.Q(b);return d;case -1073741701:h=new Wj;d=Fm(d);e=a.fc+1|0;a.fc=e;JP(h,d,c,b,(-536870849),e);c.Q(h);return h;case -536870870:case -536870869:Bj(d);if(c.iq()!=(-2147483602)){d=new CV;Di(d,c,b,e);}else if(Cf(a,32)){d=new S$;Di(d,c,b,e);}else{d=new PP;f=Q2(a.dL);Di(d,c,b,e);d.lB=f;}c.Q(d);return d;case -536870849:Bj(d);d=new F8;Di(d,c,b,(-536870849));c.Q(b);return d;case -536870789:h=new Fo;d=Fm(d);e=a.fc+1|0;a.fc=e;JP(h,d,c,b,(-536870849),e);c.Q(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bj(d);d=new AAp;E6(d,f,b,e);f.d=d;return d;case -2147483585:Bj(d);c=new X8;E6(c,f,b,(-2147483585));return c;case -2147483525:c=new QG;TD(c,Fm(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bj(d);d=new Sc;E6(d,f,b,e);f.d=d;return d;case -1073741761:Bj(d);c=new Vt;E6(c,f,b,(-1073741761));return c;case -1073741701:c=new SR;TD(c,Fm(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bj(d);d=AXB(f,b,e);f.d=d;return d;case -536870849:Bj(d);c
=new EK;E6(c,f,b,(-536870849));return c;case -536870789:return AWA(Fm(d),f,b,(-536870789));default:}return c;}
function Zr(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof FJ;while(true){a:{e=a.h;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bj(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dL=g;else{if(f!=(-1073741784))g=a.dL;c=ZL(a,f,g,b);e=a.h;if(e.bk!=(-536870871))K(Cd(C(30),e.bU,e.dl));Bj(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bj(e);c
=ATr(0);break a;case -2147483577:Bj(e);c=new PG;BY(c);break a;case -2147483558:Bj(e);c=new Y6;h=a.bB+1|0;a.bB=h;AF2(c,h);break a;case -2147483550:Bj(e);c=ATr(1);break a;case -2147483526:Bj(e);c=new Yx;BY(c);break a;case -536870876:Bj(e);a.bB=a.bB+1|0;if(Cf(a,8)){if(Cf(a,1)){c=AWS(a.bB);break a;}c=AWa(a.bB);break a;}if(Cf(a,1)){c=AW9(a.bB);break a;}c=AXR(a.bB);break a;case -536870866:Bj(e);if(Cf(a,32)){c=AX$();break a;}c=AXI(Q2(a.dL));break a;case -536870821:Bj(e);i=0;c=a.h;if(c.bk==(-536870818)){i=1;Bj(c);}c
=Lm(a,Go(a,i));c.Q(b);e=a.h;if(e.bk!=(-536870819))K(Cd(C(30),e.bU,e.dl));Qj(e,1);Bj(a.h);break a;case -536870818:Bj(e);a.bB=a.bB+1|0;if(!Cf(a,8)){c=new K5;BY(c);break a;}c=new Oo;e=Q2(a.dL);BY(c);c.sB=e;break a;case 0:j=e.fk;if(j!==null)c=Lm(a,j);else{if(Dn(e)){c=Hc(b);break a;}c=ACe(f&65535);}Bj(a.h);break a;default:break b;}Bj(e);c=new K5;BY(c);break a;}h=(f&2147483647)-48|0;if(a.gV<h)K(Cd(C(30),Fs(e),Pv(a.h)));Bj(e);a.bB=a.bB+1|0;c=!Cf(a,2)?AWf(h,a.bB):Cf(a,64)?AWT(h,a.bB):AYi(h,a.bB);a.le.data[h].lb=1;a.o0
=1;break a;}if(f>=0&&!Hf(e)){c=ZD(a,f);Bj(a.h);}else if(f==(-536870788))c=Hc(b);else{if(f!=(-536870871)){b=new Jj;c=!Hf(a.h)?Y0(f&65535):a.h.fk.cM();e=a.h;J1(b,c,e.bU,e.dl);K(b);}if(d){b=new Jj;e=a.h;J1(b,C(30),e.bU,e.dl);K(b);}c=Hc(b);}}}if(f!=(-16777176))break;}return c;}
function Go(a,b){var c,d,e,f,g,h,i,j,$$je;c=ATX(Cf(a,2),Cf(a,64));EC(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dn(a.h))break a;h=a.h;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CA(c,d);d=Bj(a.h);h=a.h;if(h.bk!=(-536870874)){d=38;break d;}if(h.k==(-536870821)){Bj(h);e=1;d=(-1);break d;}Bj(h);if(g){c=Go(a,0);break d;}if(a.h.bk==(-536870819))break d;YF(c,Go(a,0));break d;case -536870867:if(!g){b=h.k;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bj(h);h=a.h;i=h.bk;if(Hf(h))break c;if
(i<0){j=a.h.k;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(KZ(i))break e;i=i&65535;break e;}catch($$e){$$je=Er($$e);if($$je instanceof Ed){break b;}else{throw $$e;}}}try{B4(c,d,i);}catch($$e){$$je=Er($$e);if($$je instanceof Ed){break b;}else{throw $$e;}}Bj(a.h);d=(-1);break d;}}if(d>=0)CA(c,d);d=45;Bj(a.h);break d;case -536870821:if(d>=0){CA(c,d);d=(-1);}Bj(a.h);j=0;h=a.h;if(h.bk==(-536870818)){Bj(h);j=1;}if(!e)AAA(c,Go(a,j));else YF(c,Go(a,j));e=0;Bj(a.h);break d;case -536870819:if(d>=0)CA(c,
d);d=93;Bj(a.h);break d;case -536870818:if(d>=0)CA(c,d);d=94;Bj(a.h);break d;case 0:if(d>=0)CA(c,d);h=a.h.fk;if(h===null)d=0;else{AHd(c,h);d=(-1);}Bj(a.h);break d;default:}if(d>=0)CA(c,d);d=Bj(a.h);}g=0;}K(Cd(C(30),KC(a),a.h.dl));}K(Cd(C(30),KC(a),a.h.dl));}if(!f){if(d>=0)CA(c,d);return c;}K(Cd(C(30),KC(a),a.h.dl-1|0));}
function ZD(a,b){var c,d,e;c=ML(b);if(Cf(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AJR(b&65535);}if(Cf(a,64)&&b>128){if(c){d=new Nn;DH(d);d.bR=2;d.rX=G2(GZ(b));return d;}if(Qx(b))return APR(b&65535);if(!TZ(b))return ARo(b&65535);return AM3(b&65535);}}if(!c){if(Qx(b))return APR(b&65535);if(!TZ(b))return ACe(b&65535);return AM3(b&65535);}d=new D5;DH(d);d.bR=2;d.gn=b;e=(GS(b)).data;d.kx=e[0];d.ja=e[1];return d;}
function Lm(a,b){var c,d,e;if(!AEc(b)){if(!b.N){if(b.hz())return AMA(b);return ATs(b);}if(!b.hz())return ANI(b);c=new JR;VQ(c,b);return c;}c=AA7(b);d=new NH;BY(d);d.qK=c;d.xW=c.bj;if(!b.N){if(b.hz())return AE1(AMA(H1(b)),d);return AE1(ATs(H1(b)),d);}if(!b.hz())return AE1(ANI(H1(b)),d);c=new R7;e=new JR;VQ(e,H1(b));AGX(c,e,d);return c;}
function H4(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cf(a,b){return (a.dL&b)!=b?0:1;}
var Gf=G(Co);
var A14=null;var A13=null;var A18=null;function T5(){T5=Bq(Gf);AVx();}
function ASr(a,b){var c=new Gf();ADo(c,a,b);return c;}
function ADo(a,b,c){T5();Dd(a,b,c);}
function AVx(){var b;A14=ASr(C(421),0);b=ASr(C(422),1);A13=b;A18=I(Gf,[A14,b]);}
function OY(){B.call(this);this.sl=null;}
function AMR(a,b){Dv(a.sl,b);}
function W2(){B.call(this);this.qa=null;}
function AKb(a,b){b.h9=a.qa;}
var G7=G(0);
function WR(){B.call(this);this.t2=null;}
function ANV(a,b,c,d){Ke(a.t2,b,c.bD,d.bD);}
function WP(){B.call(this);this.qf=null;}
function AI5(a,b,c,d){Ke(a.qf,b,c.bD,d.bD);}
function IC(){B.call(this);this.nt=0;}
var A19=null;var A1$=null;var A1_=null;function AQL(a){var b=new IC();AE4(b,a);return b;}
function AE4(a,b){a.nt=b;}
function AC7(a){return a.nt;}
function Qr(b){return !b?A1$:A19;}
function ABl(){A19=AQL(1);A1$=AQL(0);A1_=F($rt_booleancls());}
var Gs=G(0);
var AGr=G();
var P$=G(0);
var AGs=G();
function T4(){B.call(this);this.xN=null;}
function AQv(a,b,c,d){IO(a.xN,b,c.bD,d.bD);}
var T2=G();
function AN_(a,b){return b.c$.cy>=0?0:1;}
var T1=G();
function ASR(a,b){var c;a:{b:{b=b;if(b!==null){b=b.dJ;if(b===null)break b;if(b.cy>=0)break b;}c=1;break a;}c=0;}return c;}
function T0(){B.call(this);this.nU=null;}
function AQ8(a,b,c,d){IO(a.nU,b,c.bD,d.bD);}
function BK(){var a=this;B.call(a);a.d=null;a.co=0;a.p_=null;a.ii=0;}
var AYY=0;function BY(a){var b;b=AYY;AYY=b+1|0;a.p_=L1(b);}
function Lk(a,b){var c;c=AYY;AYY=c+1|0;a.p_=L1(c);a.d=b;}
function H8(a,b,c,d){var e;e=d.x;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Il(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AKf(a,b){a.ii=b;}
function AJw(a){return a.ii;}
function ASI(a){return a.d;}
function ATL(a,b){a.d=b;}
function ATK(a,b){return 1;}
function AUO(a){return null;}
function JJ(a){var b;a.co=1;b=a.d;if(b!==null){if(!b.co){b=b.fU();if(b!==null){a.d.co=1;a.d=b;}a.d.eH();}else if(b instanceof GV&&b.eO.lb)a.d=b.d;}}
function AG7(){AYY=1;}
var U5=G();
var A1V=null;function AXu(){AXu=Bq(U5);AIB();}
function AIB(){var b,c;T5();b=BM((A18.fq()).data.length);c=b.data;A1V=b;c[A14.dg]=1;c[A13.dg]=2;}
function Vi(){B.call(this);this.pc=null;}
function AJm(a,b){VR(IH(a.pc),b,A0y,ABY(C(423)));}
function UT(){B.call(this);this.we=null;}
function AVJ(a,b){var c,d;c=a.we;d=b.id;b=new M;O(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(N(b)));}
function On(){var a=this;B.call(a);a.vf=null;a.ve=null;}
function ATW(a){var b,c;b=a.vf;c=a.ve;b.iK.uF(c);}
function OB(){var a=this;B.call(a);a.rY=null;a.rZ=null;a.r0=0;a.r1=0;}
function AKn(a,b){b=b;Ei(a.rY,a.rZ,b,a.r0,a.r1);}
function OD(){var a=this;B.call(a);a.v9=null;a.v5=null;a.v6=0;a.v8=0;}
function AQC(a,b){b=b;Ei(a.v9,a.v5,b,a.v6,a.v8);}
function CT(){var a=this;BK.call(a);a.lb=0;a.dT=0;}
var A17=null;function MY(){MY=Bq(CT);ALp();}
function AXL(a){var b=new CT();Fv(b,a);return b;}
function Fv(a,b){MY();BY(a);a.dT=b;}
function AIT(a,b,c,d){var e,f;e=I7(d,a.dT);Kg(d,a.dT,b);f=a.d.c(b,c,d);if(f<0)Kg(d,a.dT,e);return f;}
function AOR(a){return a.dT;}
function AJd(a,b){return 0;}
function ALp(){var b;b=new PA;BY(b);A17=b;}
function G_(){var a=this;B.call(a);a.bi=null;a.gD=0;a.e$=0;a.vZ=0;a.lC=0;a.bk=0;a.k=0;a.td=0;a.fk=null;a.e5=null;a.w=0;a.iB=0;a.dl=0;a.hT=0;a.bU=null;}
var A2a=null;var A15=null;var A16=0;function Qj(a,b){if(b>0&&b<3)a.e$=b;if(b==1){a.k=a.bk;a.e5=a.fk;a.w=a.hT;a.hT=a.dl;Fh(a);}}
function Hf(a){return a.fk===null?0:1;}
function Kn(a){return a.e5===null?0:1;}
function Bj(a){Fh(a);return a.lC;}
function Fm(a){var b;b=a.fk;Fh(a);return b;}
function Fh(a){var b,c,d,e,f,g,h,$$je;a.lC=a.bk;a.bk=a.k;a.fk=a.e5;a.dl=a.hT;a.hT=a.w;while(true){b=0;c=a.w>=a.bi.data.length?0:Me(a);a.k=c;a.e5=null;if(a.e$==4){if(c!=92)return;c=a.w;d=a.bi.data;c=c>=d.length?0:d[B5(a)];a.k=c;switch(c){case 69:break;default:a.k=92;a.w=a.iB;return;}a.e$=a.vZ;a.k=a.w>(a.bi.data.length-2|0)?0:Me(a);}a:{c=a.k;if(c!=92){e=a.e$;if(e==1)switch(c){case 36:a.k=(-536870876);break a;case 40:if(a.bi.data[a.w]!=63){a.k=(-2147483608);break a;}B5(a);c=a.bi.data[a.w];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.k=(-134217688);B5(a);break b;default:K(Cd(C(30),Fs(a),a.w));}a.k=(-67108824);B5(a);}else{switch(c){case 33:break;case 60:B5(a);c=a.bi.data[a.w];e=1;break b;case 61:a.k=(-536870872);B5(a);break b;case 62:a.k=(-33554392);B5(a);break b;default:f=AG9(a);a.k=f;if(f<256){a.gD=f;f=f<<16;a.k=f;a.k=(-1073741784)|f;break b;}f=f&255;a.k=f;a.gD=f;f=f<<16;a.k=f;a.k=(-16777176)|f;break b;}a.k=(-268435416);B5(a);}}if(!e)break;}break a;case 41:a.k=(-536870871);break a;case 42:case 43:case 63:e
=a.w;d=a.bi.data;switch(e>=d.length?42:d[e]){case 43:a.k=c|(-2147483648);B5(a);break a;case 63:a.k=c|(-1073741824);B5(a);break a;default:}a.k=c|(-536870912);break a;case 46:a.k=(-536870866);break a;case 91:a.k=(-536870821);Qj(a,2);break a;case 93:if(e!=2)break a;a.k=(-536870819);break a;case 94:a.k=(-536870818);break a;case 123:a.e5=AGt(a,c);break a;case 124:a.k=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.k=(-536870874);break a;case 45:a.k=(-536870867);break a;case 91:a.k=(-536870821);break a;case 93:a.k
=(-536870819);break a;case 94:a.k=(-536870818);break a;default:}}else{c=a.w>=(a.bi.data.length-2|0)?(-1):Me(a);c:{a.k=c;switch(c){case -1:K(Cd(C(30),Fs(a),a.w));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.k
=AEL(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.e$!=1)break a;a.k=(-2147483648)|c;break a;case 65:a.k=(-2147483583);break a;case 66:a.k=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Cd(C(30),Fs(a),a.w));case 68:case 83:case 87:case 100:case 115:case 119:a.e5=Tu(EO(a.bi,
a.iB,1),0);a.k=0;break a;case 71:a.k=(-2147483577);break a;case 80:case 112:break c;case 81:a.vZ=a.e$;a.e$=4;b=1;break a;case 90:a.k=(-2147483558);break a;case 97:a.k=7;break a;case 98:a.k=(-2147483550);break a;case 99:c=a.w;d=a.bi.data;if(c>=(d.length-2|0))K(Cd(C(30),Fs(a),a.w));a.k=d[B5(a)]&31;break a;case 101:a.k=27;break a;case 102:a.k=12;break a;case 110:a.k=10;break a;case 114:a.k=13;break a;case 116:a.k=9;break a;case 117:a.k=Ro(a,4);break a;case 120:a.k=Ro(a,2);break a;case 122:a.k=(-2147483526);break a;default:}break a;}g
=AEt(a);h=0;if(a.k==80)h=1;try{a.e5=Tu(g,h);}catch($$e){$$je=Er($$e);if($$je instanceof JU){K(Cd(C(30),Fs(a),a.w));}else{throw $$e;}}a.k=0;}}if(b)continue;else break;}}
function AEt(a){var b,c,d,e,f,g;b=new M;Gj(b,10);c=a.w;d=a.bi;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EO(d,B5(a),1);f=new M;O(f);H(H(f,C(424)),b);return N(f);}B5(a);c=0;a:{while(true){g=a.w;d=a.bi.data;if(g>=(d.length-2|0))break;c=d[B5(a)];if(c==125)break a;BL(b,c);}}if(c!=125)K(Cd(C(30),a.bU,a.w));}if(!b.I)K(Cd(C(30),a.bU,a.w));f=N(b);if(J(f)==1){b=new M;O(b);H(H(b,C(424)),f);return N(b);}b:{c:{if(J(f)>3){if(Ld(f,C(424)))break c;if(Ld(f,C(425)))break c;}break b;}f=Do(f,2);}return f;}
function AGt(a,b){var c,d,e,f,g,$$je;c=new M;Gj(c,4);d=(-1);e=2147483647;a:{while(true){f=a.w;g=a.bi.data;if(f>=g.length)break a;b=g[B5(a)];if(b==125)break a;if(b==44&&d<0)try{d=Ka(D3(c),10);AGB(c,0,ABm(c));continue;}catch($$e){$$je=Er($$e);if($$je instanceof Dj){break;}else{throw $$e;}}BL(c,b&65535);}K(Cd(C(30),a.bU,a.w));}if(b!=125)K(Cd(C(30),a.bU,a.w));if(c.I>0)b:{try{e=Ka(D3(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Er($$e);if($$je instanceof Dj){}else{throw $$e;}}K(Cd(C(30),a.bU,a.w));}else if
(d<0)K(Cd(C(30),a.bU,a.w));if((d|e|(e-d|0))<0)K(Cd(C(30),a.bU,a.w));b=a.w;g=a.bi.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.k=(-2147483525);B5(a);break c;case 63:a.k=(-1073741701);B5(a);break c;default:}a.k=(-536870789);}c=new NX;c.e9=d;c.e4=e;return c;}
function Fs(a){return a.bU;}
function Dn(a){return !a.bk&&!a.k&&a.w==a.td&&!Hf(a)?1:0;}
function KZ(b){return b<0?0:1;}
function Fd(a){return !Dn(a)&&!Hf(a)&&KZ(a.bk)?1:0;}
function Pw(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function WN(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function TZ(b){return b<=56319&&b>=55296?1:0;}
function Qx(b){return b<=57343&&b>=56320?1:0;}
function Ro(a,b){var c,d,e,f,$$je;c=new M;Gj(c,b);d=a.bi.data.length-2|0;e=0;while(true){f=BF(e,b);if(f>=0)break;if(a.w>=d)break;BL(c,a.bi.data[B5(a)]);e=e+1|0;}if(!f)a:{try{b=Ka(D3(c),16);}catch($$e){$$je=Er($$e);if($$je instanceof Dj){break a;}else{throw $$e;}}return b;}K(Cd(C(30),a.bU,a.w));}
function AEL(a){var b,c,d,e,f,g;b=3;c=1;d=a.bi.data;e=d.length-2|0;f=Wb(d[a.w],8);switch(f){case -1:break;default:if(f>3)b=2;B5(a);a:{while(true){if(c>=b)break a;g=a.w;if(g>=e)break a;g=Wb(a.bi.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B5(a);c=c+1|0;}}return f;}K(Cd(C(30),a.bU,a.w));}
function AG9(a){var b,c,d,e;b=1;c=a.gD;a:while(true){d=a.w;e=a.bi.data;if(d>=e.length)K(Cd(C(30),a.bU,d));b:{c:{switch(e[d]){case 41:B5(a);return c|256;case 45:if(!b)K(Cd(C(30),a.bU,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B5(a);}B5(a);return c;}
function B5(a){var b,c,d,e,f;b=a.w;a.iB=b;if(!(a.gD&4))a.w=b+1|0;else{c=a.bi.data.length-2|0;a.w=b+1|0;a:while(true){d=a.w;if(d<c&&SN(a.bi.data[d])){a.w=a.w+1|0;continue;}d=a.w;if(d>=c)break;e=a.bi.data;if(e[d]!=35)break;a.w=d+1|0;while(true){f=a.w;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.w=f+1|0;}}}return a.iB;}
function AGd(b){return A2a.Ft(b);}
function Me(a){var b,c,d,e;b=a.bi.data[B5(a)];if(CI(b)){c=a.iB+1|0;d=a.bi.data;if(c<d.length){e=d[c];if(C7(e)){B5(a);return ED(b,e);}}}return b;}
function Pv(a){return a.dl;}
function Jj(){var a=this;BD.call(a);a.zO=null;a.zn=null;a.rG=0;}
function Cd(a,b,c){var d=new Jj();J1(d,a,b,c);return d;}
function J1(a,b,c,d){Y(a);a.rG=(-1);a.zO=b;a.zn=c;a.rG=d;}
function Y9(){B.call(this);this.vM=null;}
function AQN(a,b){var c,d;c=a.vM;d=0;while(d<b.length){ABg(c,b[d]);d=d+1|0;}}
var AEl=G(0);
function VF(){var a=this;B.call(a);a.qT=null;a.qU=null;a.qV=null;}
function AQl(a,b){a.qT.g(AWb(a.qU,b,a.qV));}
var Tf=G(CT);
function AIi(a,b,c,d){var e;e=a.dT;BQ(d,e,b-Dr(d,e)|0);return a.d.c(b,c,d);}
function AR_(a,b){return 0;}
var ZG=G(CT);
function AKc(a,b,c,d){return b;}
var Rw=G(CT);
function AJt(a,b,c,d){if(Dr(d,a.dT)!=b)b=(-1);return b;}
function Un(){CT.call(this);this.oI=0;}
function AIp(a,b,c,d){var e;e=a.dT;BQ(d,e,b-Dr(d,e)|0);a.oI=b;return b;}
function AQx(a,b){return 0;}
var FJ=G(CT);
function AT6(a,b,c,d){if(d.ka!=1&&b!=d.x)return (-1);d.jA=1;Kg(d,0,b);return b;}
function B6(){BK.call(this);this.bR=0;}
function DH(a){BY(a);a.bR=1;}
function AVp(a,b,c,d){var e;if((b+a.b8()|0)>d.x){d.dB=1;return (-1);}e=a.bA(b,c);if(e<0)return (-1);return a.d.c(b+e|0,c,d);}
function ATc(a){return a.bR;}
function ANl(a,b){return 1;}
var AF1=G(B6);
function Hc(a){var b=new AF1();AO0(b,a);return b;}
function AO0(a,b){Lk(a,b);a.bR=1;a.ii=1;a.bR=0;}
function ASA(a,b,c){return 0;}
function ALu(a,b,c,d){var e,f,g;e=d.x;f=d.cW;while(true){g=BF(b,e);if(g>0)return (-1);if(g<0&&C7(P(c,b))&&b>f&&CI(P(c,b-1|0))){b=b+1|0;continue;}if(a.d.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AJ5(a,b,c,d,e){var f,g;f=e.x;g=e.cW;while(true){if(c<b)return (-1);if(c<f&&C7(P(d,c))&&c>g&&CI(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AIn(a,b){return 0;}
function B3(){var a=this;BK.call(a);a.bM=null;a.eO=null;a.bb=0;}
function AW4(a,b){var c=new B3();FK(c,a,b);return c;}
function FK(a,b,c){BY(a);a.bM=b;a.eO=c;a.bb=c.dT;}
function AMe(a,b,c,d){var e,f,g,h;if(a.bM===null)return (-1);e=FO(d,a.bb);DF(d,a.bb,b);f=a.bM.j;g=0;while(true){if(g>=f){DF(d,a.bb,e);return (-1);}h=(Br(a.bM,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AQn(a,b){a.eO.d=b;}
function AOh(a,b){var c;a:{c=a.bM;if(c!==null){c=BW(c);while(true){if(!BX(c))break a;if(!(B0(c)).b2(b))continue;else return 1;}}}return 0;}
function ARe(a,b){return I7(b,a.bb)>=0&&FO(b,a.bb)==I7(b,a.bb)?0:1;}
function AJ1(a){var b,c,d,e;a.co=1;b=a.eO;if(b!==null&&!b.co)JJ(b);a:{b=a.bM;if(b!==null){c=b.j;d=0;while(true){if(d>=c)break a;b=Br(a.bM,d);e=b.fU();if(e===null)e=b;else{b.co=1;Ey(a.bM,d);S7(a.bM,d,e);}if(!e.co)e.eH();d=d+1|0;}}}if(a.d!==null)JJ(a);}
var Jz=G(B3);
function AP$(a,b,c,d){var e,f,g,h;e=Dr(d,a.bb);BQ(d,a.bb,b);f=a.bM.j;g=0;while(true){if(g>=f){BQ(d,a.bb,e);return (-1);}h=(Br(a.bM,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARz(a,b){return !Dr(b,a.bb)?0:1;}
var DW=G(Jz);
function AKG(a,b,c,d){var e,f,g;e=Dr(d,a.bb);BQ(d,a.bb,b);f=a.bM.j;g=0;while(g<f){if((Br(a.bM,g)).c(b,c,d)>=0)return a.d.c(a.eO.oI,c,d);g=g+1|0;}BQ(d,a.bb,e);return (-1);}
function ARk(a,b){a.d=b;}
var Nu=G(DW);
function AQi(a,b,c,d){var e,f;e=a.bM.j;f=0;while(f<e){if((Br(a.bM,f)).c(b,c,d)>=0)return a.d.c(b,c,d);f=f+1|0;}return (-1);}
function ATQ(a,b){return 0;}
var XW=G(DW);
function AI9(a,b,c,d){var e,f;e=a.bM.j;f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bM,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ATi(a,b){return 0;}
var SQ=G(DW);
function AJW(a,b,c,d){var e,f,g,h;e=a.bM.j;f=d.jH?0:d.cW;a:{g=a.d.c(b,c,d);if(g>=0){BQ(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((Br(a.bM,h)).cu(f,b,c,d)>=0){BQ(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function AVQ(a,b){return 0;}
var U1=G(DW);
function AHN(a,b,c,d){var e,f;e=a.bM.j;BQ(d,a.bb,b);f=0;while(true){if(f>=e)return a.d.c(b,c,d);if((Br(a.bM,f)).cu(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function ARW(a,b){return 0;}
function GV(){B3.call(this);this.c9=null;}
function AXt(a,b){var c=new GV();AB4(c,a,b);return c;}
function AB4(a,b,c){BY(a);a.c9=b;a.eO=c;a.bb=c.dT;}
function AH_(a,b,c,d){var e,f;e=FO(d,a.bb);DF(d,a.bb,b);f=a.c9.c(b,c,d);if(f>=0)return f;DF(d,a.bb,e);return (-1);}
function AOB(a,b,c,d){var e;e=a.c9.cr(b,c,d);if(e>=0)DF(d,a.bb,e);return e;}
function ASe(a,b,c,d,e){var f;f=a.c9.cu(b,c,d,e);if(f>=0)DF(e,a.bb,f);return f;}
function AN$(a,b){return a.c9.b2(b);}
function AQr(a){var b;b=new N4;AB4(b,a.c9,a.eO);a.d=b;return b;}
function AUS(a){var b;a.co=1;b=a.eO;if(b!==null&&!b.co)JJ(b);b=a.c9;if(b!==null&&!b.co){b=b.fU();if(b!==null){a.c9.co=1;a.c9=b;}a.c9.eH();}}
var Hb=G();
function X(){var a=this;Hb.call(a);a.bj=0;a.cm=0;a.L=null;a.kg=null;a.k6=null;a.N=0;}
var A2b=null;function Qf(){Qf=Bq(X);AKq();}
function Bv(a){var b;Qf();b=new YZ;b.C=BM(64);a.L=b;}
function AI_(a){return null;}
function AIG(a){return a.L;}
function AEc(a){var b,c,d,e,f;if(!a.cm)b=HK(a.L,0)>=2048?0:1;else{a:{c=a.L;b=0;d=c.bw;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=IX(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+IX(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AMz(a){return a.N;}
function AS6(a){return a;}
function AA7(a){var b,c;if(a.k6===null){b=a.fh();c=new Ya;c.Af=a;c.o9=b;Bv(c);a.k6=c;EC(c,a.cm);}return a.k6;}
function H1(a){var b,c;if(a.kg===null){b=a.fh();c=new X$;c.zS=a;c.vn=b;c.wg=a;Bv(c);a.kg=c;EC(c,a.bj);a.kg.N=a.N;}return a.kg;}
function AUL(a){return 0;}
function EC(a,b){var c;c=a.bj;if(c^b){a.bj=c?0:1;a.cm=a.cm?0:1;}if(!a.N)a.N=1;return a;}
function ALB(a){return a.bj;}
function KU(b,c){Qf();return b.l(c);}
function IV(b,c){var d,e;Qf();if(b.dv()!==null&&c.dv()!==null){b=b.dv();c=c.dv();d=Bb(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function Tu(b,c){var d,e,f;Qf();d=0;while(true){ART();e=A2c.data;if(d>=e.length){f=new JU;Bi(f,C(30));f.AH=C(30);f.Am=b;K(f);}e=e[d].data;if(Bn(b,e[0]))break;d=d+1|0;}return AFx(e[1],c);}
function AKq(){var b;b=new Hx;ART();A2b=b;}
function ABR(){var a=this;X.call(a);a.mr=0;a.oF=0;a.gW=0;a.l1=0;a.eb=0;a.fM=0;a.H=null;a.bI=null;}
function Ds(){var a=new ABR();AVB(a);return a;}
function ATX(a,b){var c=new ABR();AKe(c,a,b);return c;}
function AVB(a){Bv(a);a.H=AVT();}
function AKe(a,b,c){Bv(a);a.H=AVT();a.mr=b;a.oF=c;}
function CA(a,b){a:{if(a.mr){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eb){M8(a.H,H4(b&65535));break a;}L_(a.H,H4(b&65535));break a;}if(a.oF&&b>128){a.gW=1;b=G2(GZ(b));}}}if(!(!TZ(b)&&!Qx(b))){if(a.l1)M8(a.L,b-55296|0);else L_(a.L,b-55296|0);}if(a.eb)M8(a.H,b);else L_(a.H,b);if(!a.N&&ML(b))a.N=1;return a;}
function AHd(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(a.l1){if(!b.cm)F9(a.L,b.fh());else De(a.L,b.fh());}else if(!b.cm)F5(a.L,b.fh());else{Fy(a.L,b.fh());De(a.L,b.fh());a.cm=a.cm?0:1;a.l1=1;}if(!a.fM&&b.dv()!==null){if(a.eb){if(!b.bj)F9(a.H,b.dv());else De(a.H,b.dv());}else if(!b.bj)F5(a.H,b.dv());else{Fy(a.H,b.dv());De(a.H,b.dv());a.bj=a.bj?0:1;a.eb=1;}}else{c=a.bj;d=a.bI;if(d!==null){if(!c){e=new P5;e.yg=a;e.wO=c;e.vW=d;e.vJ=b;Bv(e);a.bI=e;}else{e=new P6;e.AQ=a;e.ss=c;e.r8=d;e.rj=b;Bv(e);a.bI=e;}}else{if(c&&!a.eb
&&MO(a.H)){d=new P2;d.zm=a;d.sg=b;Bv(d);a.bI=d;}else if(!c){d=new P0;d.lH=a;d.kK=c;d.pX=b;Bv(d);a.bI=d;}else{d=new P1;d.mE=a;d.kT=c;d.vP=b;Bv(d);a.bI=d;}a.fM=1;}}return a;}
function B4(a,b,c){var d,e,f,g,h;if(b>c){d=new BD;Y(d);K(d);}a:{b:{if(!a.mr){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CA(a,b);b=b+1|0;}}if(!a.eb)Iu(a.H,b,c+1|0);else{d=a.H;c=c+1|0;if(b>c){d=new BC;Y(d);K(d);}e=d.bw;if(b<e){f=Bb(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(IQ(d,b)|Id(d,f));}else{h=d.C.data;h[g]=h[g]&IQ(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&Id(d,f);}}HA(d);}}}}return a;}
function AAA(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(b.gW)a.gW=1;c=a.cm;if(!(c^b.cm)){if(!c)F5(a.L,b.L);else De(a.L,b.L);}else if(c)F9(a.L,b.L);else{Fy(a.L,b.L);De(a.L,b.L);a.cm=1;}if(!a.fM&&CY(b)!==null){c=a.bj;if(!(c^b.bj)){if(!c)F5(a.H,CY(b));else De(a.H,CY(b));}else if(c)F9(a.H,CY(b));else{Fy(a.H,CY(b));De(a.H,CY(b));a.bj=1;}}else{c=a.bj;d=a.bI;if(d!==null){if(!c){e=new PT;e.x2=a;e.uB=c;e.vO=d;e.wv=b;Bv(e);a.bI=e;}else{e=new QM;e.yp=a;e.wr=c;e.oe=d;e.oP=b;Bv(e);a.bI=e;}}else{if(!a.eb&&MO(a.H)){if(!c){d=new P3;d.AR
=a;d.q3=b;Bv(d);a.bI=d;}else{d=new P4;d.ys=a;d.wc=b;Bv(d);a.bI=d;}}else if(!c){d=new P8;d.uM=a;d.sN=b;d.r_=c;Bv(d);a.bI=d;}else{d=new P9;d.tf=a;d.tt=b;d.tH=c;Bv(d);a.bI=d;}a.fM=1;}}}
function YF(a,b){var c,d,e;if(!a.N&&b.N)a.N=1;if(b.gW)a.gW=1;c=a.cm;if(!(c^b.cm)){if(!c)De(a.L,b.L);else F5(a.L,b.L);}else if(!c)F9(a.L,b.L);else{Fy(a.L,b.L);De(a.L,b.L);a.cm=0;}if(!a.fM&&CY(b)!==null){c=a.bj;if(!(c^b.bj)){if(!c)De(a.H,CY(b));else F5(a.H,CY(b));}else if(!c)F9(a.H,CY(b));else{Fy(a.H,CY(b));De(a.H,CY(b));a.bj=0;}}else{c=a.bj;d=a.bI;if(d!==null){if(!c){e=new PV;e.ye=a;e.uP=c;e.o7=d;e.sp=b;Bv(e);a.bI=e;}else{e=new PW;e.yz=a;e.t0=c;e.n4=d;e.uz=b;Bv(e);a.bI=e;}}else{if(!a.eb&&MO(a.H)){if(!c){d=new PR;d.yu
=a;d.qx=b;Bv(d);a.bI=d;}else{d=new PS;d.AN=a;d.qG=b;Bv(d);a.bI=d;}}else if(!c){d=new PX;d.xJ=a;d.wK=b;d.tn=c;Bv(d);a.bI=d;}else{d=new PQ;d.tl=a;d.t_=b;d.st=c;Bv(d);a.bI=d;}a.fM=1;}}}
function C4(a,b){var c;c=a.bI;if(c!==null)return a.bj^c.l(b);return a.bj^DA(a.H,b);}
function CY(a){if(!a.fM)return a.H;return null;}
function ALo(a){return a.L;}
function ATB(a){var b,c;if(a.bI!==null)return a;b=CY(a);c=new PU;c.xX=a;c.jd=b;Bv(c);return EC(c,a.bj);}
function APu(a){var b,c,d;b=new M;O(b);c=HK(a.H,0);while(c>=0){IZ(b,GS(c));BL(b,124);c=HK(a.H,c+1|0);}d=b.I;if(d>0)XX(b,d-1|0);return N(b);}
function ALF(a){return a.gW;}
function JU(){var a=this;Bu.call(a);a.AH=null;a.Am=null;}
function Ec(){BK.call(this);this.K=null;}
function Di(a,b,c,d){Lk(a,c);a.K=b;a.ii=d;}
function AVA(a){return a.K;}
function ASh(a,b){return !a.K.b2(b)&&!a.d.b2(b)?0:1;}
function ATZ(a,b){return 1;}
function AOY(a){var b;a.co=1;b=a.d;if(b!==null&&!b.co){b=b.fU();if(b!==null){a.d.co=1;a.d=b;}a.d.eH();}b=a.K;if(b!==null){if(!b.co){b=b.fU();if(b!==null){a.K.co=1;a.K=b;}a.K.eH();}else if(b instanceof GV&&b.eO.lb)a.K=b.d;}}
function C5(){Ec.call(this);this.be=null;}
function AXB(a,b,c){var d=new C5();E6(d,a,b,c);return d;}
function E6(a,b,c,d){Di(a,b,c,d);a.be=b;}
function AHP(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b8()|0)<=d.x){f=a.be.bA(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.d.c(b,c,d);if(f>=0)break;b=b-a.be.b8()|0;e=e+(-1)|0;}return f;}
function Fj(){C5.call(this);this.j_=null;}
function AWA(a,b,c,d){var e=new Fj();TD(e,a,b,c,d);return e;}
function TD(a,b,c,d,e){E6(a,c,d,e);a.j_=b;}
function AIV(a,b,c,d){var e,f,g,h,i;e=a.j_;f=e.e9;g=e.e4;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b8()|0)>d.x)break a;i=a.be.bA(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.d.c(b,c,d);if(i>=0)break;b=b-a.be.b8()|0;h=h+(-1)|0;}return i;}if((b+a.be.b8()|0)>d.x){d.dB=1;return (-1);}i=a.be.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var CV=G(Ec);
function AH$(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.K.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
var EK=G(C5);
function AOK(a,b,c,d){var e;e=a.K.c(b,c,d);if(e<0)e=a.d.c(b,c,d);return e;}
function AVV(a,b){a.d=b;a.K.Q(b);}
var Yb=G(C5);
function AVg(a,b,c,d){while((b+a.be.b8()|0)<=d.x&&a.be.bA(b,c)>0){b=b+a.be.b8()|0;}return a.d.c(b,c,d);}
function APq(a,b,c,d){var e,f,g;e=a.d.cr(b,c,d);if(e<0)return (-1);f=e-a.be.b8()|0;while(f>=b&&a.be.bA(f,c)>0){g=f-a.be.b8()|0;e=f;f=g;}return e;}
function Bc(){var a=this;B.call(a);a.mK=null;a.lD=null;}
function AFx(a,b){if(!b&&a.mK===null)a.mK=a.D();else if(b&&a.lD===null)a.lD=EC(a.D(),1);if(b)return a.lD;return a.mK;}
var Dj=G(BD);
function NX(){var a=this;Hb.call(a);a.e9=0;a.e4=0;}
function APz(a){var b,c,d,e,f;b=a.e9;c=a.e4;d=c!=2147483647?L1(c):C(30);e=new M;O(e);BL(e,123);f=V(e,b);BL(f,44);BL(H(f,d),125);return N(e);}
var PA=G(BK);
function ANO(a,b,c,d){return b;}
function AQm(a,b){return 0;}
function YZ(){var a=this;B.call(a);a.C=null;a.bw=0;}
function AVT(){var a=new YZ();AJK(a);return a;}
function AJK(a){a.C=BM(0);}
function L_(a,b){var c,d;c=b/32|0;if(b>=a.bw){I2(a,c+1|0);a.bw=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function Iu(a,b,c){var d,e,f,g,h;d=BF(b,c);if(d>0){e=new BC;Y(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bw){I2(a,f+1|0);a.bw=c;}if(d==f){g=a.C.data;g[d]=g[d]|Id(a,b)&IQ(a,c);}else{g=a.C.data;g[d]=g[d]|Id(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|IQ(a,c);}}}
function Id(a,b){return (-1)<<(b%32|0);}
function IQ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function M8(a,b){var c,d,e,f;c=b/32|0;d=a.C.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bw-1|0))HA(a);}}
function DA(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HK(a,b){var c,d,e,f;c=a.bw;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return IX(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+IX(e[f])|0;f=f+1|0;}return (-1);}
function I2(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.C=MV(a.C,c);}
function HA(a){var b,c,d;b=(a.bw+31|0)/32|0;a.bw=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=OZ(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.bw=a.bw-32|0;}a.bw=a.bw-d|0;}}
function De(a,b){var c,d,e,f;c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bw=Bb(a.bw,b.bw);HA(a);}
function F9(a,b){var c,d,e;c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}HA(a);}
function F5(a,b){var c,d,e;c=Bd(a.bw,b.bw);a.bw=c;I2(a,(c+31|0)/32|0);c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function Fy(a,b){var c,d,e;c=Bd(a.bw,b.bw);a.bw=c;I2(a,(c+31|0)/32|0);c=Bb(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}HA(a);}
function MO(a){return a.bw?0:1;}
function NH(){var a=this;B3.call(a);a.qK=null;a.xW=0;}
function R7(){var a=this;B3.call(a);a.m_=null;a.mF=null;}
function AE1(a,b){var c=new R7();AGX(c,a,b);return c;}
function AGX(a,b,c){BY(a);a.m_=b;a.mF=c;}
function AIO(a,b,c,d){var e,f,g,h,i;e=a.m_.c(b,c,d);if(e<0)a:{f=a.mF;g=d.cW;e=d.x;h=b+1|0;e=BF(h,e);if(e>0){d.dB=1;e=(-1);}else{i=P(c,b);if(!f.qK.l(i))e=(-1);else{if(CI(i)){if(e<0&&C7(P(c,h))){e=(-1);break a;}}else if(C7(i)&&b>g&&CI(P(c,b-1|0))){e=(-1);break a;}e=f.d.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AP8(a,b){a.d=b;a.mF.d=b;a.m_.Q(b);}
function AJx(a,b){return 1;}
function AI$(a,b){return 1;}
function DM(){var a=this;B3.call(a);a.d2=null;a.zf=0;}
function ANI(a){var b=new DM();VQ(b,a);return b;}
function VQ(a,b){BY(a);a.d2=b.jR();a.zf=b.bj;}
function ALf(a,b,c,d){var e,f,g,h;e=d.x;if(b<e){f=b+1|0;g=P(c,b);if(a.l(g)){h=a.d.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(HU(g,f)&&a.l(ED(g,f)))return a.d.c(b,c,d);}}return (-1);}
function ALU(a,b){return a.d2.l(b);}
function AIK(a,b){if(b instanceof D5)return KU(a.d2,b.gn);if(b instanceof Ew)return KU(a.d2,b.dt);if(b instanceof DM)return IV(a.d2,b.d2);if(!(b instanceof Ep))return 1;return IV(a.d2,b.fz);}
function ANx(a){return a.d2;}
function ASV(a,b){a.d=b;}
function ALs(a,b){return 1;}
var JR=G(DM);
function ANm(a,b){return a.d2.l(G2(GZ(b)));}
function ABD(){var a=this;B6.call(a);a.rB=null;a.yS=0;}
function AMA(a){var b=new ABD();APH(b,a);return b;}
function APH(a,b){DH(a);a.rB=b.jR();a.yS=b.bj;}
function ANP(a,b,c){return !a.rB.l(Fa(EJ(P(c,b))))?(-1):1;}
function Ep(){var a=this;B6.call(a);a.fz=null;a.zz=0;}
function ATs(a){var b=new Ep();AQW(b,a);return b;}
function AQW(a,b){DH(a);a.fz=b.jR();a.zz=b.bj;}
function Nd(a,b,c){return !a.fz.l(P(c,b))?(-1):1;}
function AQq(a,b){if(b instanceof Ew)return KU(a.fz,b.dt);if(b instanceof Ep)return IV(a.fz,b.fz);if(!(b instanceof DM)){if(!(b instanceof D5))return 1;return 0;}return IV(a.fz,b.d2);}
function Qg(){var a=this;B3.call(a);a.hg=null;a.mZ=null;a.j$=0;}
function ATE(a,b){var c=new Qg();AIa(c,a,b);return c;}
function AIa(a,b,c){BY(a);a.hg=b;a.j$=c;}
function AOI(a,b){a.d=b;}
function Sh(a){if(a.mZ===null)a.mZ=Gd(a.hg);return a.mZ;}
function AHD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.x;f=BM(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?El([k,l]):El([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.j$;if(b!=n)return (-1);while(true){if(l>=n)return a.d.c(i,c,d);if(m[l]!=a.hg.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.j$==3){k=f[0];m=a.hg.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.d.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.j$==2){b=f[0];m=a.hg.data;if(b==m[0]&&f[1]==m[1]){b=a.d.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AJo(a,b){return b instanceof Qg&&!Bn(Sh(b),Sh(a))?0:1;}
function ATD(a,b){return 1;}
function Ew(){B6.call(this);this.dt=0;}
function ACe(a){var b=new Ew();AQ5(b,a);return b;}
function AQ5(a,b){DH(a);a.dt=b;}
function ANs(a){return 1;}
function AMv(a,b,c){return a.dt!=P(c,b)?(-1):1;}
function ALc(a,b,c,d){var e,f,g;if(!(c instanceof BA))return H8(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=G8(c,a.dt,b);if(f<0)return (-1);g=a.d;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ANB(a,b,c,d,e){var f;if(!(d instanceof BA))return Il(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gl(d,a.dt,c);if(f<0)break a;if(f<b)break a;if(a.d.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ATx(a,b){if(b instanceof Ew)return b.dt!=a.dt?0:1;if(!(b instanceof Ep)){if(b instanceof DM)return b.l(a.dt);if(!(b instanceof D5))return 1;return 0;}return Nd(b,0,Y0(a.dt))<=0?0:1;}
function AGF(){B6.call(this);this.nR=0;}
function ARo(a){var b=new AGF();APl(b,a);return b;}
function APl(a,b){DH(a);a.nR=Fa(EJ(b));}
function AHt(a,b,c){return a.nR!=Fa(EJ(P(c,b)))?(-1):1;}
function AAC(){var a=this;B6.call(a);a.wB=0;a.o3=0;}
function AJR(a){var b=new AAC();ARN(b,a);return b;}
function ARN(a,b){DH(a);a.wB=b;a.o3=H4(b);}
function AHZ(a,b,c){return a.wB!=P(c,b)&&a.o3!=P(c,b)?(-1):1;}
function Fq(){var a=this;B3.call(a);a.h7=0;a.lt=null;a.kM=null;a.kG=0;}
function AYo(a,b){var c=new Fq();Pl(c,a,b);return c;}
function Pl(a,b,c){BY(a);a.h7=1;a.kM=b;a.kG=c;}
function AUR(a,b){a.d=b;}
function AP9(a,b,c,d){var e,f,g,h,i,j,k,l;e=BM(4);f=d.x;if(b>=f)return (-1);g=K9(a,b,c,f);h=b+a.h7|0;i=AGd(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DB(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=K9(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AGd(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.h7|0;if(h>=f){b=k;break a;}g=K9(a,h,c,f);b=k;}}}if(b!=a.kG)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.d.c(h,c,d);if(i[g]!=a.kM.data[g])break;g=g+1|0;}return (-1);}
function YD(a){var b,c;if(a.lt===null){b=new M;O(b);c=0;while(c<a.kG){IZ(b,GS(a.kM.data[c]));c=c+1|0;}a.lt=N(b);}return a.lt;}
function K9(a,b,c,d){var e,f,g;a.h7=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(HU(e,f)){g=BU(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CI(g[0])&&C7(g[1])?ED(g[0],g[1]):g[0];a.h7=2;}}return e;}
function ANQ(a,b){return b instanceof Fq&&!Bn(YD(b),YD(a))?0:1;}
function ARl(a,b){return 1;}
var Zs=G(Fq);
var Vb=G(Fq);
var AAn=G(CV);
function AKi(a,b,c,d){var e;while(true){e=a.K.c(b,c,d);if(e<=0)break;b=e;}return a.d.c(b,c,d);}
var Rn=G(CV);
function APb(a,b,c,d){var e;e=a.K.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.K.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.d.c(b,c,d);}
var F8=G(CV);
function ASS(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.K.c(b,c,d);if(e>=0)return e;return a.d.c(b,c,d);}
function AT_(a,b){a.d=b;a.K.Q(b);}
var Q0=G(F8);
function ANw(a,b,c,d){var e;e=a.K.c(b,c,d);if(e<=0)e=b;return a.d.c(e,c,d);}
function APB(a,b){a.d=b;}
function Fo(){var a=this;CV.call(a);a.gv=null;a.dF=0;}
function A2d(a,b,c,d,e){var f=new Fo();JP(f,a,b,c,d,e);return f;}
function JP(a,b,c,d,e,f){Di(a,c,d,e);a.gv=b;a.dF=f;}
function AVM(a,b,c,d){var e,f;e=NM(d,a.dF);if(!a.K.J(d))return a.d.c(b,c,d);if(e>=a.gv.e4)return a.d.c(b,c,d);f=a.dF;e=e+1|0;Em(d,f,e);f=a.K.c(b,c,d);if(f>=0){Em(d,a.dF,0);return f;}f=a.dF;e=e+(-1)|0;Em(d,f,e);if(e>=a.gv.e9)return a.d.c(b,c,d);Em(d,a.dF,0);return (-1);}
var N_=G(Fo);
function AMX(a,b,c,d){var e,f,g;e=0;f=a.gv.e4;a:{while(true){g=a.K.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gv.e9)return (-1);return a.d.c(b,c,d);}
var S8=G(CV);
function AUZ(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e>=0)return e;return a.K.c(b,c,d);}
var Sg=G(F8);
function AJz(a,b,c,d){var e;if(!a.K.J(d))return a.d.c(b,c,d);e=a.d.c(b,c,d);if(e<0)e=a.K.c(b,c,d);return e;}
var Wj=G(Fo);
function AIw(a,b,c,d){var e,f,g;e=NM(d,a.dF);if(!a.K.J(d))return a.d.c(b,c,d);f=a.gv;if(e>=f.e4){Em(d,a.dF,0);return a.d.c(b,c,d);}if(e<f.e9){Em(d,a.dF,e+1|0);g=a.K.c(b,c,d);}else{g=a.d.c(b,c,d);if(g>=0){Em(d,a.dF,0);return g;}Em(d,a.dF,e+1|0);g=a.K.c(b,c,d);}return g;}
var S$=G(Ec);
function AVw(a,b,c,d){var e;e=d.x;if(e>b)return a.d.cu(b,e,c,d);return a.d.c(b,c,d);}
function AS9(a,b,c,d){var e;e=d.x;if(a.d.cu(b,e,c,d)>=0)return b;return (-1);}
function PP(){Ec.call(this);this.lB=null;}
function AQs(a,b,c,d){var e,f;e=d.x;f=Wl(a,b,e,c);if(f>=0)e=f;if(e>b)return a.d.cu(b,e,c,d);return a.d.c(b,c,d);}
function AHI(a,b,c,d){var e,f,g,h;e=d.x;f=a.d.cr(b,c,d);if(f<0)return (-1);g=Wl(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.d.cu(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.lB.ic(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function Wl(a,b,c,d){while(true){if(b>=c)return (-1);if(a.lB.ic(P(d,b)))break;b=b+1|0;}return b;}
var E0=G();
var A2e=null;var A2f=null;function Q2(b){var c;if(!(b&1)){c=A2f;if(c!==null)return c;c=new WV;A2f=c;return c;}c=A2e;if(c!==null)return c;c=new WU;A2e=c;return c;}
var AAp=G(C5);
function AIx(a,b,c,d){var e;a:{while(true){if((b+a.be.b8()|0)>d.x)break a;e=a.be.bA(b,c);if(e<1)break;b=b+e|0;}}return a.d.c(b,c,d);}
var X8=G(EK);
function APa(a,b,c,d){var e;if((b+a.be.b8()|0)<=d.x){e=a.be.bA(b,c);if(e>=1)b=b+e|0;}return a.d.c(b,c,d);}
var QG=G(Fj);
function ASj(a,b,c,d){var e,f,g,h,i;e=a.j_;f=e.e9;g=e.e4;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b8()|0)>d.x)break a;i=a.be.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.d.c(b,c,d);}if((b+a.be.b8()|0)>d.x){d.dB=1;return (-1);}i=a.be.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Sc=G(C5);
function AQk(a,b,c,d){var e;while(true){e=a.d.c(b,c,d);if(e>=0)break;if((b+a.be.b8()|0)<=d.x){e=a.be.bA(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Vt=G(EK);
function AIJ(a,b,c,d){var e;e=a.d.c(b,c,d);if(e>=0)return e;return a.K.c(b,c,d);}
var SR=G(Fj);
function ASE(a,b,c,d){var e,f,g,h,i,j;e=a.j_;f=e.e9;g=e.e4;h=0;while(true){if(h>=f){a:{while(true){i=a.d.c(b,c,d);if(i>=0)break;if((b+a.be.b8()|0)<=d.x){i=a.be.bA(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b8()|0)>d.x){d.dB=1;return (-1);}j=a.be.bA(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var K5=G(BK);
function AOf(a,b,c,d){if(b&&!(d.fN&&b==d.cW))return (-1);return a.d.c(b,c,d);}
function AM8(a,b){return 0;}
function ACr(){BK.call(this);this.vY=0;}
function ATr(a){var b=new ACr();ANp(b,a);return b;}
function ANp(a,b){BY(a);a.vY=b;}
function AI7(a,b,c,d){var e,f,g;e=b<d.x?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.jH?0:d.cW;return (e!=32&&!Sj(a,e,b,g,c)?0:1)^(f!=32&&!Sj(a,f,b-1|0,g,c)?0:1)^a.vY?(-1):a.d.c(b,c,d);}
function AJj(a,b){return 0;}
function Sj(a,b,c,d,e){var f;if(!J$(b)&&b!=95){a:{if(Cy(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(J$(f))return 0;if(Cy(f)!=6)return 1;}}return 1;}return 0;}
var PG=G(BK);
function ANo(a,b,c,d){if(b!=d.io)return (-1);return a.d.c(b,c,d);}
function AVH(a,b){return 0;}
function Y6(){BK.call(this);this.gF=0;}
function AXR(a){var b=new Y6();AF2(b,a);return b;}
function AF2(a,b){BY(a);a.gF=b;}
function AQ$(a,b,c,d){var e,f,g;e=!d.fN?J(c):d.x;if(b>=e){BQ(d,a.gF,0);return a.d.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BQ(d,a.gF,0);return a.d.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BQ(d,a.gF,0);return a.d.c(b,c,d);}
function AJ8(a,b){var c;c=!Dr(b,a.gF)?0:1;BQ(b,a.gF,(-1));return c;}
var Yx=G(BK);
function AP4(a,b,c,d){if(b<(d.jH?J(c):d.x))return (-1);d.dB=1;d.z1=1;return a.d.c(b,c,d);}
function AHr(a,b){return 0;}
function Oo(){BK.call(this);this.sB=null;}
function AJY(a,b,c,d){a:{if(b!=d.x){if(!b)break a;if(d.fN&&b==d.cW)break a;if(a.sB.t5(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.d.c(b,c,d);}
function AL6(a,b){return 0;}
var AGn=G(B3);
function AX$(){var a=new AGn();APS(a);return a;}
function APS(a){BY(a);}
function AU6(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dB=1;return (-1);}g=P(c,b);if(CI(g)){h=b+2|0;if(h<=e&&HU(g,P(c,f)))return a.d.c(h,c,d);}return a.d.c(f,c,d);}
function AJq(a,b){a.d=b;}
function API(a){return (-2147483602);}
function AJp(a,b){return 1;}
function ABP(){B3.call(this);this.l9=null;}
function AXI(a){var b=new ABP();AJ6(b,a);return b;}
function AJ6(a,b){BY(a);a.l9=b;}
function APV(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;if(f>e){d.dB=1;return (-1);}g=P(c,b);if(CI(g)){b=b+2|0;if(b<=e){h=P(c,f);if(HU(g,h))return a.l9.ic(ED(g,h))?(-1):a.d.c(b,c,d);}}return a.l9.ic(g)?(-1):a.d.c(f,c,d);}
function AR5(a,b){a.d=b;}
function AHm(a){return (-2147483602);}
function AVm(a,b){return 1;}
function AGa(){BK.call(this);this.hY=0;}
function AW9(a){var b=new AGa();AL2(b,a);return b;}
function AL2(a,b){BY(a);a.hY=b;}
function ANW(a,b,c,d){var e;e=!d.fN?J(c):d.x;if(b>=e){BQ(d,a.hY,0);return a.d.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BQ(d,a.hY,1);return a.d.c(b+1|0,c,d);}return (-1);}
function AL0(a,b){var c;c=!Dr(b,a.hY)?0:1;BQ(b,a.hY,(-1));return c;}
function AEh(){BK.call(this);this.h5=0;}
function AWS(a){var b=new AEh();AMB(b,a);return b;}
function AMB(a,b){BY(a);a.h5=b;}
function AP2(a,b,c,d){if((!d.fN?J(c)-b|0:d.x-b|0)<=0){BQ(d,a.h5,0);return a.d.c(b,c,d);}if(P(c,b)!=10)return (-1);BQ(d,a.h5,1);return a.d.c(b+1|0,c,d);}
function ALQ(a,b){var c;c=!Dr(b,a.h5)?0:1;BQ(b,a.h5,(-1));return c;}
function AAz(){BK.call(this);this.f6=0;}
function AWa(a){var b=new AAz();AVP(b,a);return b;}
function AVP(a,b){BY(a);a.f6=b;}
function AM1(a,b,c,d){var e,f,g;e=!d.fN?J(c)-b|0:d.x-b|0;if(!e){BQ(d,a.f6,0);return a.d.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BQ(d,a.f6,0);return a.d.c(b,c,d);case 13:if(g!=10){BQ(d,a.f6,0);return a.d.c(b,c,d);}BQ(d,a.f6,0);return a.d.c(b,c,d);default:}return (-1);}
function AKa(a,b){var c;c=!Dr(b,a.f6)?0:1;BQ(b,a.f6,(-1));return c;}
function Hy(){var a=this;B3.call(a);a.ow=0;a.ha=0;}
function AYi(a,b){var c=new Hy();Qv(c,a,b);return c;}
function Qv(a,b,c){BY(a);a.ow=b;a.ha=c;}
function AIC(a,b,c,d){var e,f,g,h;e=Gx(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BQ(d,a.ha,J(e));return a.d.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&H4(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function ARi(a,b){a.d=b;}
function Gx(a,b){var c,d;c=a.ow;d=FO(b,c);c=I7(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.ma)?Cg(b.ma,d,c):null;}
function ARC(a,b){var c;c=!Dr(b,a.ha)?0:1;BQ(b,a.ha,(-1));return c;}
var AGh=G(Hy);
function AWf(a,b){var c=new AGh();AT1(c,a,b);return c;}
function AT1(a,b,c){Qv(a,b,c);}
function AKh(a,b,c,d){var e,f;e=Gx(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=!VP(c,e,b)?(-1):J(e);if(f<0)return (-1);BQ(d,a.ha,f);return a.d.c(b+f|0,c,d);}return (-1);}
function ATN(a,b,c,d){var e,f;e=Gx(a,d);f=d.cW;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=ACq(c,e,b);if(b<0)return (-1);if(a.d.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AIj(a,b,c,d,e){var f,g;f=Gx(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Ry(d,f,c);if(g<0)break a;if(g<b)break a;if(a.d.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AO3(a,b){return 1;}
var ADk=G(Hy);
function AWT(a,b){var c=new ADk();ALY(c,a,b);return c;}
function ALY(a,b,c){Qv(a,b,c);}
function AOv(a,b,c,d){var e,f;e=Gx(a,d);if(e!==null&&(b+J(e)|0)<=d.x){f=0;while(true){if(f>=J(e)){BQ(d,a.ha,J(e));return a.d.c(b+J(e)|0,c,d);}if(Fa(EJ(P(e,f)))!=Fa(EJ(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Pz=G(GG);
function ALI(a,b,c,d,e){N1(a,b,c,d,e);return a;}
function AJb(a,b,c,d){Zd(a,b,c,d);return a;}
function AJJ(a,b){Kf(a,b);}
function ATb(a,b,c){Zw(a,b,c);return a;}
function Ta(){var a=this;B6.call(a);a.cA=null;a.lw=null;a.mi=null;}
function AKC(a,b,c){return !K3(a,c,b)?(-1):a.bR;}
function AI3(a,b,c,d){var e,f,g;e=d.x;while(true){if(b>e)return (-1);f=P(a.cA,a.bR-1|0);a:{while(true){g=a.bR;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&K3(a,c,b))break;b=b+T$(a.lw,g)|0;}}if(b<0)return (-1);if(a.d.c(b+a.bR|0,c,d)>=0)break;b=b+1|0;}return b;}
function AL5(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cA,0);g=(J(d)-c|0)-a.bR|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&K3(a,d,c))break;c=c-T$(a.mi,g)|0;}}if(c<0)return (-1);if(a.d.c(c+a.bR|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMF(a,b){var c;if(b instanceof Ew)return b.dt!=P(a.cA,0)?0:1;if(b instanceof Ep)return Nd(b,0,Cg(a.cA,0,1))<=0?0:1;if(!(b instanceof DM)){if(!(b instanceof D5))return 1;return J(a.cA)>1&&b.gn==ED(P(a.cA,0),P(a.cA,1))?1:0;}a:{b:{b=b;if(!b.l(P(a.cA,0))){if(J(a.cA)<=1)break b;if(!b.l(ED(P(a.cA,0),P(a.cA,1))))break b;}c=1;break a;}c=0;}return c;}
function K3(a,b,c){var d;d=0;while(d<a.bR){if(P(b,d+c|0)!=P(a.cA,d))return 0;d=d+1|0;}return 1;}
function AAy(){B6.call(this);this.jL=null;}
function AYn(a){var b=new AAy();ATy(b,a);return b;}
function ATy(a,b){var c,d,e;DH(a);c=new M;O(c);d=0;while(true){e=BF(d,b.I);if(e>=0){a.jL=N(c);a.bR=c.I;return;}if(d<0)break;if(e>=0)break;BL(c,Fa(EJ(b.B.data[d])));d=d+1|0;}b=new BC;Y(b);K(b);}
function AOD(a,b,c){var d;d=0;while(true){if(d>=J(a.jL))return J(a.jL);if(P(a.jL,d)!=Fa(EJ(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Of(){B6.call(this);this.hW=null;}
function ASm(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.hW))return J(a.hW);e=P(a.hW,d);f=b+d|0;if(e!=P(c,f)&&H4(P(a.hW,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hx=G();
var A2g=null;var A2h=null;var A2c=null;function ART(){ART=Bq(Hx);AK0();}
function AK0(){A2g=AX1();A2h=AW3();A2c=I($rt_arraycls(B),[I(B,[C(426),AYj()]),I(B,[C(427),AV9()]),I(B,[C(428),AXY()]),I(B,[C(429),AX5()]),I(B,[C(430),A2h]),I(B,[C(431),AXc()]),I(B,[C(432),AW1()]),I(B,[C(433),AWi()]),I(B,[C(434),AWe()]),I(B,[C(435),AWn()]),I(B,[C(436),AWC()]),I(B,[C(437),AWl()]),I(B,[C(438),AXA()]),I(B,[C(439),AV3()]),I(B,[C(440),AX2()]),I(B,[C(441),AWB()]),I(B,[C(442),AXa()]),I(B,[C(443),AWz()]),I(B,[C(444),AXb()]),I(B,[C(445),AWq()]),I(B,[C(446),AX9()]),I(B,[C(447),AWu()]),I(B,[C(448),AXg()]),
I(B,[C(449),AXW()]),I(B,[C(450),AXS()]),I(B,[C(451),AX6()]),I(B,[C(452),AWp()]),I(B,[C(453),AXG()]),I(B,[C(454),A2g]),I(B,[C(455),AXn()]),I(B,[C(456),AWj()]),I(B,[C(457),A2g]),I(B,[C(458),AV1()]),I(B,[C(459),A2h]),I(B,[C(460),AWL()]),I(B,[C(461),Q(0,127)]),I(B,[C(462),Q(128,255)]),I(B,[C(463),Q(256,383)]),I(B,[C(464),Q(384,591)]),I(B,[C(465),Q(592,687)]),I(B,[C(466),Q(688,767)]),I(B,[C(467),Q(768,879)]),I(B,[C(468),Q(880,1023)]),I(B,[C(469),Q(1024,1279)]),I(B,[C(470),Q(1280,1327)]),I(B,[C(471),Q(1328,1423)]),
I(B,[C(472),Q(1424,1535)]),I(B,[C(473),Q(1536,1791)]),I(B,[C(474),Q(1792,1871)]),I(B,[C(475),Q(1872,1919)]),I(B,[C(476),Q(1920,1983)]),I(B,[C(477),Q(2304,2431)]),I(B,[C(478),Q(2432,2559)]),I(B,[C(479),Q(2560,2687)]),I(B,[C(480),Q(2688,2815)]),I(B,[C(481),Q(2816,2943)]),I(B,[C(482),Q(2944,3071)]),I(B,[C(483),Q(3072,3199)]),I(B,[C(484),Q(3200,3327)]),I(B,[C(485),Q(3328,3455)]),I(B,[C(486),Q(3456,3583)]),I(B,[C(487),Q(3584,3711)]),I(B,[C(488),Q(3712,3839)]),I(B,[C(489),Q(3840,4095)]),I(B,[C(490),Q(4096,4255)]),
I(B,[C(491),Q(4256,4351)]),I(B,[C(492),Q(4352,4607)]),I(B,[C(493),Q(4608,4991)]),I(B,[C(494),Q(4992,5023)]),I(B,[C(495),Q(5024,5119)]),I(B,[C(496),Q(5120,5759)]),I(B,[C(497),Q(5760,5791)]),I(B,[C(498),Q(5792,5887)]),I(B,[C(499),Q(5888,5919)]),I(B,[C(500),Q(5920,5951)]),I(B,[C(501),Q(5952,5983)]),I(B,[C(502),Q(5984,6015)]),I(B,[C(503),Q(6016,6143)]),I(B,[C(504),Q(6144,6319)]),I(B,[C(505),Q(6400,6479)]),I(B,[C(506),Q(6480,6527)]),I(B,[C(507),Q(6528,6623)]),I(B,[C(508),Q(6624,6655)]),I(B,[C(509),Q(6656,6687)]),
I(B,[C(510),Q(7424,7551)]),I(B,[C(511),Q(7552,7615)]),I(B,[C(512),Q(7616,7679)]),I(B,[C(513),Q(7680,7935)]),I(B,[C(514),Q(7936,8191)]),I(B,[C(515),Q(8192,8303)]),I(B,[C(516),Q(8304,8351)]),I(B,[C(517),Q(8352,8399)]),I(B,[C(518),Q(8400,8447)]),I(B,[C(519),Q(8448,8527)]),I(B,[C(520),Q(8528,8591)]),I(B,[C(521),Q(8592,8703)]),I(B,[C(522),Q(8704,8959)]),I(B,[C(523),Q(8960,9215)]),I(B,[C(524),Q(9216,9279)]),I(B,[C(525),Q(9280,9311)]),I(B,[C(526),Q(9312,9471)]),I(B,[C(527),Q(9472,9599)]),I(B,[C(528),Q(9600,9631)]),
I(B,[C(529),Q(9632,9727)]),I(B,[C(530),Q(9728,9983)]),I(B,[C(531),Q(9984,10175)]),I(B,[C(532),Q(10176,10223)]),I(B,[C(533),Q(10224,10239)]),I(B,[C(534),Q(10240,10495)]),I(B,[C(535),Q(10496,10623)]),I(B,[C(536),Q(10624,10751)]),I(B,[C(537),Q(10752,11007)]),I(B,[C(538),Q(11008,11263)]),I(B,[C(539),Q(11264,11359)]),I(B,[C(540),Q(11392,11519)]),I(B,[C(541),Q(11520,11567)]),I(B,[C(542),Q(11568,11647)]),I(B,[C(543),Q(11648,11743)]),I(B,[C(544),Q(11776,11903)]),I(B,[C(545),Q(11904,12031)]),I(B,[C(546),Q(12032,12255)]),
I(B,[C(547),Q(12272,12287)]),I(B,[C(548),Q(12288,12351)]),I(B,[C(549),Q(12352,12447)]),I(B,[C(550),Q(12448,12543)]),I(B,[C(551),Q(12544,12591)]),I(B,[C(552),Q(12592,12687)]),I(B,[C(553),Q(12688,12703)]),I(B,[C(554),Q(12704,12735)]),I(B,[C(555),Q(12736,12783)]),I(B,[C(556),Q(12784,12799)]),I(B,[C(557),Q(12800,13055)]),I(B,[C(558),Q(13056,13311)]),I(B,[C(559),Q(13312,19893)]),I(B,[C(560),Q(19904,19967)]),I(B,[C(561),Q(19968,40959)]),I(B,[C(562),Q(40960,42127)]),I(B,[C(563),Q(42128,42191)]),I(B,[C(564),Q(42752,
42783)]),I(B,[C(565),Q(43008,43055)]),I(B,[C(566),Q(44032,55203)]),I(B,[C(567),Q(55296,56191)]),I(B,[C(568),Q(56192,56319)]),I(B,[C(569),Q(56320,57343)]),I(B,[C(570),Q(57344,63743)]),I(B,[C(571),Q(63744,64255)]),I(B,[C(572),Q(64256,64335)]),I(B,[C(573),Q(64336,65023)]),I(B,[C(574),Q(65024,65039)]),I(B,[C(575),Q(65040,65055)]),I(B,[C(576),Q(65056,65071)]),I(B,[C(577),Q(65072,65103)]),I(B,[C(578),Q(65104,65135)]),I(B,[C(579),Q(65136,65279)]),I(B,[C(580),Q(65280,65519)]),I(B,[C(581),Q(0,1114111)]),I(B,[C(582),
AWm()]),I(B,[C(583),BR(0,1)]),I(B,[C(584),Jk(62,1)]),I(B,[C(585),BR(1,1)]),I(B,[C(586),BR(2,1)]),I(B,[C(587),BR(3,0)]),I(B,[C(588),BR(4,0)]),I(B,[C(589),BR(5,1)]),I(B,[C(590),Jk(448,1)]),I(B,[C(591),BR(6,1)]),I(B,[C(592),BR(7,0)]),I(B,[C(593),BR(8,1)]),I(B,[C(594),Jk(3584,1)]),I(B,[C(595),BR(9,1)]),I(B,[C(596),BR(10,1)]),I(B,[C(597),BR(11,1)]),I(B,[C(598),Jk(28672,0)]),I(B,[C(599),BR(12,0)]),I(B,[C(600),BR(13,0)]),I(B,[C(601),BR(14,0)]),I(B,[C(602),AWV(983040,1,1)]),I(B,[C(603),BR(15,0)]),I(B,[C(604),BR(16,
1)]),I(B,[C(605),BR(18,1)]),I(B,[C(606),AW8(19,0,1)]),I(B,[C(607),Jk(1643118592,1)]),I(B,[C(608),BR(20,0)]),I(B,[C(609),BR(21,0)]),I(B,[C(610),BR(22,0)]),I(B,[C(611),BR(23,0)]),I(B,[C(612),BR(24,1)]),I(B,[C(613),Jk(2113929216,1)]),I(B,[C(614),BR(25,1)]),I(B,[C(615),BR(26,0)]),I(B,[C(616),BR(27,0)]),I(B,[C(617),BR(28,1)]),I(B,[C(618),BR(29,0)]),I(B,[C(619),BR(30,0)])]);}
function Nn(){B6.call(this);this.rX=0;}
function ASt(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.rX!=G2(GZ(ED(e,d)))?(-1):2;}
function LA(){B3.call(this);this.gT=0;}
function APR(a){var b=new LA();AJE(b,a);return b;}
function AJE(a,b){BY(a);a.gT=b;}
function AQh(a,b){a.d=b;}
function AJ9(a,b,c,d){var e,f;e=b+1|0;if(e>d.x){d.dB=1;return (-1);}f=P(c,b);if(b>d.cW&&CI(P(c,b-1|0)))return (-1);if(a.gT!=f)return (-1);return a.d.c(e,c,d);}
function AMD(a,b,c,d){var e,f,g,h;if(!(c instanceof BA))return H8(a,b,c,d);e=d.cW;f=d.x;while(true){if(b>=f)return (-1);g=G8(c,a.gT,b);if(g<0)return (-1);if(g>e&&CI(P(c,g-1|0))){b=g+1|0;continue;}h=a.d;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AKK(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Il(a,b,c,d,e);f=e.cW;a:{while(true){if(c<b)return (-1);g=Gl(d,a.gT,c);if(g<0)break a;if(g<b)break a;if(g>f&&CI(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.d.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AIh(a,b){if(b instanceof Ew)return 0;if(b instanceof Ep)return 0;if(b instanceof DM)return 0;if(b instanceof D5)return 0;if(b instanceof LS)return 0;if(!(b instanceof LA))return 1;return b.gT!=a.gT?0:1;}
function ATj(a,b){return 1;}
function LS(){B3.call(this);this.gu=0;}
function AM3(a){var b=new LS();APY(b,a);return b;}
function APY(a,b){BY(a);a.gu=b;}
function AJH(a,b){a.d=b;}
function AHO(a,b,c,d){var e,f,g,h;e=d.x;f=b+1|0;g=BF(f,e);if(g>0){d.dB=1;return (-1);}h=P(c,b);if(g<0&&C7(P(c,f)))return (-1);if(a.gu!=h)return (-1);return a.d.c(f,c,d);}
function AQG(a,b,c,d){var e,f;if(!(c instanceof BA))return H8(a,b,c,d);e=d.x;while(true){if(b>=e)return (-1);f=G8(c,a.gu,b);if(f<0)return (-1);b=f+1|0;if(b<e&&C7(P(c,b))){b=f+2|0;continue;}if(a.d.c(b,c,d)>=0)break;}return f;}
function ASk(a,b,c,d,e){var f,g;if(!(d instanceof BA))return Il(a,b,c,d,e);f=e.x;a:{while(true){if(c<b)return (-1);g=Gl(d,a.gu,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&C7(P(d,c))){c=g+(-1)|0;continue;}if(a.d.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKD(a,b){if(b instanceof Ew)return 0;if(b instanceof Ep)return 0;if(b instanceof DM)return 0;if(b instanceof D5)return 0;if(b instanceof LA)return 0;if(!(b instanceof LS))return 1;return b.gu!=a.gu?0:1;}
function AQT(a,b){return 1;}
function D5(){var a=this;B6.call(a);a.kx=0;a.ja=0;a.gn=0;}
function ARD(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.kx==e&&a.ja==d?2:(-1);}
function APv(a,b,c,d){var e,f;if(!(c instanceof BA))return H8(a,b,c,d);e=d.x;while(b<e){b=G8(c,a.kx,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.ja==f&&a.d.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AJG(a,b,c,d,e){var f;if(!(d instanceof BA))return Il(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Gl(d,a.ja,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kx==P(d,f)&&a.d.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function ARp(a,b){if(b instanceof D5)return b.gn!=a.gn?0:1;if(b instanceof DM)return b.l(a.gn);if(b instanceof Ew)return 0;if(!(b instanceof Ep))return 1;return 0;}
var WU=G(E0);
function AJS(a,b){return b!=10?0:1;}
function ARw(a,b,c){return b!=10?0:1;}
var WV=G(E0);
function ASG(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AUF(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFg(){var a=this;B.call(a);a.nz=null;a.kS=null;a.hw=0;a.xq=0;}
function APG(a){var b=new AFg();ANn(b,a);return b;}
function ANn(a,b){var c,d;while(true){c=a.hw;if(b<c)break;a.hw=c<<1|1;}d=c<<1|1;a.hw=d;d=d+1|0;a.nz=BM(d);a.kS=BM(d);a.xq=b;}
function ST(a,b,c){var d,e,f,g;d=0;e=a.hw;f=b&e;while(true){g=a.nz.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.kS.data[f]=c;}
function T$(a,b){var c,d,e,f;c=a.hw;d=b&c;e=0;while(true){f=a.nz.data[d];if(!f)break;if(f==b)return a.kS.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xq;}
var AAS=G();
var Lw=G(Bc);
function AX1(){var a=new Lw();AMY(a);return a;}
function AMY(a){}
function ADs(a){return CA(B4(Ds(),9,13),32);}
var KD=G(Bc);
function AW3(){var a=new KD();ATf(a);return a;}
function ATf(a){}
function AD$(a){return B4(Ds(),48,57);}
var AE_=G(Bc);
function AYj(){var a=new AE_();AMf(a);return a;}
function AMf(a){}
function AR$(a){return B4(Ds(),97,122);}
var AFG=G(Bc);
function AV9(){var a=new AFG();ANr(a);return a;}
function ANr(a){}
function ATl(a){return B4(Ds(),65,90);}
var AFK=G(Bc);
function AXY(){var a=new AFK();AI4(a);return a;}
function AI4(a){}
function ALg(a){return B4(Ds(),0,127);}
var Lp=G(Bc);
function AX5(){var a=new Lp();AKk(a);return a;}
function AKk(a){}
function ABT(a){return B4(B4(Ds(),97,122),65,90);}
var L$=G(Lp);
function AXc(){var a=new L$();AM6(a);return a;}
function AM6(a){}
function ACS(a){return B4(ABT(a),48,57);}
var AHc=G(Bc);
function AW1(){var a=new AHc();APd(a);return a;}
function APd(a){}
function AMC(a){return B4(B4(B4(Ds(),33,64),91,96),123,126);}
var M$=G(L$);
function AWi(){var a=new M$();ARd(a);return a;}
function ARd(a){}
function AAv(a){return B4(B4(B4(ACS(a),33,64),91,96),123,126);}
var ADJ=G(M$);
function AWe(){var a=new ADJ();AS5(a);return a;}
function AS5(a){}
function AOZ(a){return CA(AAv(a),32);}
var AD3=G(Bc);
function AWn(){var a=new AD3();ASo(a);return a;}
function ASo(a){}
function AKv(a){return CA(CA(Ds(),32),9);}
var ACh=G(Bc);
function AWC(){var a=new ACh();AUv(a);return a;}
function AUv(a){}
function AOW(a){return CA(B4(Ds(),0,31),127);}
var AB3=G(Bc);
function AWl(){var a=new AB3();AJi(a);return a;}
function AJi(a){}
function AUK(a){return B4(B4(B4(Ds(),48,57),97,102),65,70);}
var AFP=G(Bc);
function AXA(){var a=new AFP();AIU(a);return a;}
function AIU(a){}
function APE(a){var b;b=new Uz;b.ze=a;Bv(b);b.N=1;return b;}
var AHl=G(Bc);
function AV3(){var a=new AHl();ARs(a);return a;}
function ARs(a){}
function AHG(a){var b;b=new Nz;b.zo=a;Bv(b);b.N=1;return b;}
var AFh=G(Bc);
function AX2(){var a=new AFh();AI6(a);return a;}
function AI6(a){}
function AM4(a){var b;b=new Tq;b.yP=a;Bv(b);return b;}
var AE2=G(Bc);
function AWB(){var a=new AE2();AOX(a);return a;}
function AOX(a){}
function ARK(a){var b;b=new Tp;b.yw=a;Bv(b);return b;}
var AF4=G(Bc);
function AXa(){var a=new AF4();AKg(a);return a;}
function AKg(a){}
function AKs(a){var b;b=new YG;b.z9=a;Bv(b);Iu(b.L,0,2048);b.N=1;return b;}
var ABa=G(Bc);
function AWz(){var a=new ABa();AJP(a);return a;}
function AJP(a){}
function AKS(a){var b;b=new QA;b.zB=a;Bv(b);b.N=1;return b;}
var AAL=G(Bc);
function AXb(){var a=new AAL();AOA(a);return a;}
function AOA(a){}
function AUA(a){var b;b=new Pu;b.AK=a;Bv(b);b.N=1;return b;}
var AFo=G(Bc);
function AWq(){var a=new AFo();APe(a);return a;}
function APe(a){}
function AHu(a){var b;b=new St;b.zg=a;Bv(b);return b;}
var AFA=G(Bc);
function AX9(){var a=new AFA();AMN(a);return a;}
function AMN(a){}
function AN0(a){var b;b=new Nt;b.xQ=a;Bv(b);b.N=1;return b;}
var ACJ=G(Bc);
function AWu(){var a=new ACJ();AIl(a);return a;}
function AIl(a){}
function AK2(a){var b;b=new Nx;b.zF=a;Bv(b);b.N=1;return b;}
var AD8=G(Bc);
function AXg(){var a=new AD8();AJU(a);return a;}
function AJU(a){}
function AL9(a){var b;b=new O1;b.z5=a;Bv(b);b.N=1;return b;}
var AGW=G(Bc);
function AXW(){var a=new AGW();AN7(a);return a;}
function AN7(a){}
function AN2(a){var b;b=new Q4;b.Aq=a;Bv(b);b.N=1;return b;}
var AFz=G(Bc);
function AXS(){var a=new AFz();APy(a);return a;}
function APy(a){}
function ATG(a){var b;b=new Ra;b.yR=a;Bv(b);return b;}
var ADg=G(Bc);
function AX6(){var a=new ADg();AJQ(a);return a;}
function AJQ(a){}
function AQ6(a){var b;b=new U7;b.zM=a;Bv(b);return b;}
var ACH=G(Bc);
function AWp(){var a=new ACH();ARM(a);return a;}
function ARM(a){}
function APw(a){var b;b=new TY;b.xT=a;Bv(b);b.N=1;return b;}
var AHi=G(Bc);
function AXG(){var a=new AHi();AMJ(a);return a;}
function AMJ(a){}
function ARZ(a){var b;b=new NQ;b.AS=a;Bv(b);b.N=1;return b;}
var J3=G(Bc);
function AXn(){var a=new J3();AK_(a);return a;}
function AK_(a){}
function AD5(a){return CA(B4(B4(B4(Ds(),97,122),65,90),48,57),95);}
var AF7=G(J3);
function AWj(){var a=new AF7();AMQ(a);return a;}
function AMQ(a){}
function APj(a){var b;b=EC(AD5(a),1);b.N=1;return b;}
var ADO=G(Lw);
function AV1(){var a=new ADO();AUb(a);return a;}
function AUb(a){}
function AIY(a){var b;b=EC(ADs(a),1);b.N=1;return b;}
var ACC=G(KD);
function AWL(){var a=new ACC();ANM(a);return a;}
function ANM(a){}
function AMp(a){var b;b=EC(AD$(a),1);b.N=1;return b;}
function AB8(){var a=this;Bc.call(a);a.rK=0;a.sv=0;}
function Q(a,b){var c=new AB8();AUx(c,a,b);return c;}
function AUx(a,b,c){a.rK=b;a.sv=c;}
function AOi(a){return B4(Ds(),a.rK,a.sv);}
var ACx=G(Bc);
function AWm(){var a=new ACx();AUU(a);return a;}
function AUU(a){}
function AUn(a){return B4(B4(Ds(),65279,65279),65520,65533);}
function ADA(){var a=this;Bc.call(a);a.m4=0;a.kF=0;a.qb=0;}
function BR(a,b){var c=new ADA();AJ_(c,a,b);return c;}
function AW8(a,b,c){var d=new ADA();AUz(d,a,b,c);return d;}
function AJ_(a,b,c){a.kF=c;a.m4=b;}
function AUz(a,b,c,d){a.qb=d;a.kF=c;a.m4=b;}
function ALM(a){var b;b=AYf(a.m4);if(a.qb)Iu(b.L,0,2048);b.N=a.kF;return b;}
function ADK(){var a=this;Bc.call(a);a.m3=0;a.kV=0;a.oK=0;}
function Jk(a,b){var c=new ADK();AK3(c,a,b);return c;}
function AWV(a,b,c){var d=new ADK();AHw(d,a,b,c);return d;}
function AK3(a,b,c){a.kV=c;a.m3=b;}
function AHw(a,b,c,d){a.oK=d;a.kV=c;a.m3=b;}
function AHv(a){var b;b=new Tj;AEN(b,a.m3);if(a.oK)Iu(b.L,0,2048);b.N=a.kV;return b;}
var ACb=G();
var ABB=G();
function ADd(b){var c,d,e,f,g,h,i;c=ASb(Fx(b));d=Kp(c);e=BM(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Kp(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=N$(c);h=h+1|0;}return e;}
function Le(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Op(){var a=this;B.call(a);a.qJ=0;a.sV=0;a.qY=null;}
function ALJ(a,b,c){var d=new Op();AS4(d,a,b,c);return d;}
function AS4(a,b,c,d){a.qJ=b;a.sV=c;a.qY=d;}
function AFu(){var a=this;B.call(a);a.pt=null;a.rR=0;}
function ASb(a){var b=new AFu();AKH(b,a);return b;}
function AKH(a,b){a.pt=b;}
var ADc=G();
function Kp(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.pt.data;f=b.rR;b.rR=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+W(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function N$(b){var c,d;c=Kp(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var M4=G(Bu);
function ABQ(){B.call(this);this.K9=null;}
function Po(){B.call(this);this.uy=null;}
function AUB(a,b){var c,d,e,f;c=b.data;b=a.uy;d=Dy(c[0]);e=EE(c[1]);AAB(b.e.f,d,e,null,null);GT(Ct(b),A0t);Gq(Ct(b));f=Iy(Ez(),b.ft);b=new M;O(b);H(GH(H(b,C(620)),f),C(200));$rt_globals.console.info($rt_ustr(N(b)));}
function Qd(){B.call(this);this.sw=null;}
function AMV(a,b){JK(a.sw,b);}
function YI(){B.call(this);this.n$=null;}
function AQE(a,b){b.fP=a.n$;}
var AA9=G();
function ABM(b){var c,d,e,f,g,h,i,j;c=AJv();d=CB(b);Bs(c,d);e=0;f=0;while(f<d){g=BV(b,f);h=g.p.data.length;Bs(c,h);i=0;while(i<h){j=UD(g,i);G0(c,e,My(j));e=e+My(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RL(c);}
function ABf(b){var c,d,e,f,g,h,i,j,k;c=Be(b);d=R(IB,c);e=d.data;f=0;while(f<c){a:{g=Be(b);if(g!=(-1)){h=Be(b);i=Be(b);if(i==(-1)){j=new IB;j.gx=h;e[g]=j;}else{j=new IB;j.gx=h;j.mm=BM(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].mm.data[k]=Be(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Z6(){B.call(this);this.s_=null;}
function APW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.data;b=a.s_;d=Dy(c[0]);c=X9(d);e=new WW;d=ABf(c);f=ABf(c);g=Be(c);h=R(Mt,g);i=h.data;j=0;while(j<g){k=Be(c);l=Be(c);m=Be(c);n=Be(c);o=Be(c);p=new Mt;p.it=k;p.nl=l;p.is=m;p.nk=n;p.lc=o;i[j]=p;j=j+1|0;}e.Av=d;e.wo=f;e.gt=h;b.gi=e;Ks(b.F,d);Ks(b.E,b.gi.wo);}
function AD4(){Hw.call(this);this.IK=null;}
var Sd=G(0);
function UW(){var a=this;B.call(a);a.Al=null;a.Ak=null;a.Aj=null;}
function Wh(){var a=this;B.call(a);a.AB=null;a.AC=null;}
function Ya(){var a=this;X.call(a);a.o9=null;a.Af=null;}
function ALm(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cm^DA(a.o9,c):0;}
function X$(){var a=this;X.call(a);a.vn=null;a.wg=null;a.zS=null;}
function AH7(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cm^DA(a.vn,c):0;return a.wg.l(b)&&!d?1:0;}
function PU(){var a=this;X.call(a);a.jd=null;a.xX=null;}
function AN8(a,b){return a.bj^DA(a.jd,b);}
function AMb(a){var b,c,d;b=new M;O(b);c=HK(a.jd,0);while(c>=0){IZ(b,GS(c));BL(b,124);c=HK(a.jd,c+1|0);}d=b.I;if(d>0)XX(b,d-1|0);return N(b);}
function P2(){var a=this;X.call(a);a.sg=null;a.zm=null;}
function ARI(a,b){return a.sg.l(b);}
function P0(){var a=this;X.call(a);a.kK=0;a.pX=null;a.lH=null;}
function ASs(a,b){return !(a.kK^DA(a.lH.H,b))&&!(a.kK^a.lH.eb^a.pX.l(b))?0:1;}
function P1(){var a=this;X.call(a);a.kT=0;a.vP=null;a.mE=null;}
function AOC(a,b){return !(a.kT^DA(a.mE.H,b))&&!(a.kT^a.mE.eb^a.vP.l(b))?1:0;}
function P5(){var a=this;X.call(a);a.wO=0;a.vW=null;a.vJ=null;a.yg=null;}
function AKX(a,b){return a.wO^(!a.vW.l(b)&&!a.vJ.l(b)?0:1);}
function P6(){var a=this;X.call(a);a.ss=0;a.r8=null;a.rj=null;a.AQ=null;}
function AHn(a,b){return a.ss^(!a.r8.l(b)&&!a.rj.l(b)?0:1)?0:1;}
function P3(){var a=this;X.call(a);a.q3=null;a.AR=null;}
function AMg(a,b){return C4(a.q3,b);}
function P4(){var a=this;X.call(a);a.wc=null;a.ys=null;}
function AOG(a,b){return C4(a.wc,b)?0:1;}
function P8(){var a=this;X.call(a);a.sN=null;a.r_=0;a.uM=null;}
function ATR(a,b){return !C4(a.sN,b)&&!(a.r_^DA(a.uM.H,b))?0:1;}
function P9(){var a=this;X.call(a);a.tt=null;a.tH=0;a.tf=null;}
function AKo(a,b){return !C4(a.tt,b)&&!(a.tH^DA(a.tf.H,b))?1:0;}
function PT(){var a=this;X.call(a);a.uB=0;a.vO=null;a.wv=null;a.x2=null;}
function AVY(a,b){return !(a.uB^a.vO.l(b))&&!C4(a.wv,b)?0:1;}
function QM(){var a=this;X.call(a);a.wr=0;a.oe=null;a.oP=null;a.yp=null;}
function AMm(a,b){return !(a.wr^a.oe.l(b))&&!C4(a.oP,b)?1:0;}
function PR(){var a=this;X.call(a);a.qx=null;a.yu=null;}
function AKm(a,b){return C4(a.qx,b);}
function PS(){var a=this;X.call(a);a.qG=null;a.AN=null;}
function ALX(a,b){return C4(a.qG,b)?0:1;}
function PX(){var a=this;X.call(a);a.wK=null;a.tn=0;a.xJ=null;}
function ANq(a,b){return C4(a.wK,b)&&a.tn^DA(a.xJ.H,b)?1:0;}
function PQ(){var a=this;X.call(a);a.t_=null;a.st=0;a.tl=null;}
function ATt(a,b){return C4(a.t_,b)&&a.st^DA(a.tl.H,b)?0:1;}
function PV(){var a=this;X.call(a);a.uP=0;a.o7=null;a.sp=null;a.ye=null;}
function AJe(a,b){return a.uP^a.o7.l(b)&&C4(a.sp,b)?1:0;}
function PW(){var a=this;X.call(a);a.t0=0;a.n4=null;a.uz=null;a.yz=null;}
function AQS(a,b){return a.t0^a.n4.l(b)&&C4(a.uz,b)?0:1;}
var MA=G(0);
function TX(){var a=this;B.call(a);a.yk=null;a.vR=null;a.jz=null;a.cD=null;a.je=0;a.lz=0;}
function Nv(a,b){var c,d,e;c=J(a.jz);if(b>=0&&b<=c){ZE(a.cD,null,(-1),(-1));d=a.cD;d.ka=1;d.eB=b;c=d.io;if(c<0)c=b;d.io=c;b=a.vR.cr(b,a.jz,d);if(b==(-1))a.cD.dB=1;if(b>=0){d=a.cD;if(d.jA){e=d.d4.data;if(e[0]==(-1)){c=d.eB;e[0]=c;e[1]=c;}d.io=JF(d);return 1;}}a.cD.eB=(-1);return 0;}d=new BC;Bi(d,C8(b));K(d);}
function AGU(a){return QF(a.cD,0);}
function ACD(a){return Ts(a.cD,0);}
function AAZ(a){return a.cD.jH;}
function ADQ(){var a=this;B.call(a);a.E7=null;a.E5=null;a.E$=0.0;}
var C2=G(0);
var AZ6=null;var A07=null;var AZ8=null;var AZ7=null;var AZ$=null;var AZ9=null;var A0a=null;var AZ_=null;var A0c=null;var A0b=null;var A0d=null;function AFN(){AFN=Bq(C2);AUI();}
function AUI(){AZ6=CQ(0);A07=CR(0,0,0);AZ8=S(C(621));AZ7=CR(255,255,255);AZ$=CR(166,214,255);AZ9=S(C(622));A0a=S(C(623));AZ_=S(C(624));A0c=FD(205,205,205,153);A0b=FD(255,255,255,0);A0d=S(C(126));}
function Cn(){Co.call(this);this.l4=null;}
var A2i=null;var A2j=null;var A2k=null;var A2l=null;var A2m=null;var A2n=null;var A2o=null;var A2p=null;var A2q=null;var A2r=null;var A2s=null;var A2t=null;var A2u=null;var A2v=null;var A2w=null;var A0e=null;function AEQ(){AEQ=Bq(Cn);AVb();}
function DJ(a,b,c){var d=new Cn();SK(d,a,b,c);return d;}
function AUY(a,b,c,d){var e=new Cn();ABv(e,a,b,c,d);return e;}
function SK(a,b,c,d){AEQ();Dd(a,b,c);a.l4=Iv(d,null);}
function ABv(a,b,c,d,e){AEQ();Dd(a,b,c);a.l4=Iv(d,e);}
function AVb(){var b;b=new Cn;AFN();SK(b,C(346),0,A07);A2i=b;A2j=DJ(C(347),1,CR(0,49,191));A2k=DJ(C(349),2,S(C(625)));A2l=DJ(C(48),3,S(C(626)));A2m=DJ(C(352),4,A07);A2n=DJ(C(353),5,S(C(627)));A2o=DJ(C(355),6,S(C(387)));A2p=DJ(C(49),7,S(C(628)));A2q=DJ(C(358),8,S(C(629)));A2r=AUY(C(360),9,A07,CR(237,235,252));A2s=AUY(C(361),10,S(C(385)),S(C(630)));A2t=DJ(C(362),11,S(C(387)));A2u=DJ(C(364),12,S(C(388)));A2v=DJ(C(366),13,S(C(631)));b=DJ(C(367),14,S(C(368)));A2w=b;A0e=I(Cn,[A2i,A2j,A2k,A2l,A2m,A2n,A2o,A2p,A2q,A2r,
A2s,A2t,A2u,A2v,b]);}
var DI=G(0);
var A0i=null;var A0j=null;var A0f=null;var A0g=null;var A0h=null;var A08=null;var A09=null;var A0k=null;var A0l=null;function AIt(){AIt=Bq(DI);AKR();}
function AKR(){A0i=S(C(124));A0j=S(C(632));A0f=S(C(633));A0g=S(C(634));A0h=S(C(635));A08=S(C(124));A09=S(C(632));A0k=FD(205,205,205,153);A0l=CR(247,248,250);}
function XK(){var a=this;B.call(a);a.ke=null;a.ib=0;}
function WZ(){B.call(this);this.ud=null;}
function AOk(a,b){Y8(a.ud,b);}
var N4=G(GV);
function ALO(a,b,c,d){var e,f,g;e=0;f=d.x;a:{while(true){if(b>f){b=e;break a;}g=FO(d,a.bb);DF(d,a.bb,b);e=a.c9.c(b,c,d);if(e>=0)break;DF(d,a.bb,g);b=b+1|0;}}return b;}
function AVL(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=FO(e,a.bb);DF(e,a.bb,c);f=a.c9.c(c,d,e);if(f>=0)break;DF(e,a.bb,g);c=c+(-1)|0;}}return c;}
function AJ7(a){return null;}
var R4=G(Bu);
var Zh=G(Bu);
function WO(){F6.call(this);this.AF=0;}
function RP(){F6.call(this);this.Ax=0;}
function AFv(){var a=this;B.call(a);a.Lh=null;a.Hi=null;}
function WF(){var a=this;B.call(a);a.sS=null;a.vq=null;a.xc=0;a.k$=0;}
function K7(a,b){return Cb(a.sS)<b?0:1;}
function ACL(){var a=this;B.call(a);a.Eg=null;a.CI=null;}
function Ps(){var a=this;B.call(a);a.rb=null;a.rc=null;}
function VD(){var a=this;B.call(a);a.y$=null;a.r$=null;}
function VG(){B.call(this);this.Ad=null;}
var AFj=G(0);
function MW(b){return !b?I(BA,[C(155),C(156),C(636)]):I(BA,[C(155),C(156),C(636),C(41)]);}
var AA4=G();
function TO(){var a=this;B.call(a);a.ql=null;a.qm=0;a.qn=null;}
function LW(a,b){var c,d,e,f,g,h,i,j,k;c=a.ql;d=a.qm;e=a.qn;if(b<=d){f=Ct(c);g=new ZT;g.uj=c;h=R(B,1);h.data[0]=e;CU(f,g,C(637),h);}else{i=Ct(c);g=new ZQ;g.rU=c;j=R(B,2);k=j.data;k[0]=e;h=BM(1);h.data[0]=250;k[1]=h;CU(i,g,C(638),j);f=Ct(c);g=new ZS;g.vU=c;h=R(B,1);h.data[0]=e;CU(f,g,C(639),h);}}
function WK(){var a=this;B.call(a);a.d4=null;a.kn=null;a.l7=null;a.ma=null;a.p0=0;a.jA=0;a.cW=0;a.x=0;a.eB=0;a.jH=0;a.fN=0;a.dB=0;a.z1=0;a.io=0;a.ka=0;}
function BQ(a,b,c){a.kn.data[b]=c;}
function Dr(a,b){return a.kn.data[b];}
function JF(a){return Ts(a,0);}
function Ts(a,b){Tg(a,b);return a.d4.data[(b*2|0)+1|0];}
function DF(a,b,c){a.d4.data[b*2|0]=c;}
function Kg(a,b,c){a.d4.data[(b*2|0)+1|0]=c;}
function FO(a,b){return a.d4.data[b*2|0];}
function I7(a,b){return a.d4.data[(b*2|0)+1|0];}
function AFb(a){return QF(a,0);}
function QF(a,b){Tg(a,b);return a.d4.data[b*2|0];}
function NM(a,b){return a.l7.data[b];}
function Em(a,b,c){a.l7.data[b]=c;}
function Tg(a,b){var c;if(!a.jA){c=new CL;Y(c);K(c);}if(b>=0&&b<a.p0)return;c=new BC;Bi(c,C8(b));K(c);}
function ZE(a,b,c,d){a.jA=0;a.ka=2;H0(a.d4,(-1));H0(a.kn,(-1));if(b!==null)a.ma=b;if(c>=0){a.cW=c;a.x=d;}a.eB=a.cW;}
function ACX(a){return a.ka;}
function Oz(){B.call(this);this.n_=null;}
function AS0(a){DY(a.n_);}
function Zo(){var a=this;B.call(a);a.sn=null;a.so=null;}
function AVE(a,b){b=b;Gy(a.sn,a.so,b);}
function WL(){var a=this;B.call(a);a.u1=null;a.u0=null;}
function AOQ(a,b){var c,d,e,f,g;a:{c=a.u1;d=a.u0;if(b instanceof HC){b:{b=b;c=c.iI.dH;if(d instanceof FZ&&d.kU==b.kL&&Rf(b,d,c)){c:{d=d.fs;if(b.gc.j!=d.j)e=0;else{e=0;while(e<b.gc.j){f=Br(d,e);g=Br(b.gc,e);if(f!==null){f=f.ec;if(f!==null&&!Mx(c,f,g)){e=0;break c;}}e=e+1|0;}e=1;}}if(e){e=1;break b;}}e=0;}if(e){e=1;break a;}}e=0;}return e;}
function WM(){B.call(this);this.oR=null;}
function AHC(a,b,c){c=c;return Kd(a.oR,b,c);}
function OH(){var a=this;B.call(a);a.wT=null;a.wV=null;}
function AUr(a,b){var c;c=a.wT;return Rf(b,a.wV,c.iI.dH);}
function OF(){B.call(this);this.qi=null;}
function AUc(a,b,c){return LU(a.qi,b,c);}
function Uz(){X.call(this);this.ze=null;}
function AT5(a,b){return Cy(b)!=2?0:1;}
function Nz(){X.call(this);this.zo=null;}
function AIX(a,b){return Cy(b)!=1?0:1;}
function Tq(){X.call(this);this.yP=null;}
function AIH(a,b){return SN(b);}
function Tp(){X.call(this);this.yw=null;}
function ALK(a,b){return 0;}
function YG(){X.call(this);this.z9=null;}
function ANd(a,b){return !Cy(b)?0:1;}
function QA(){X.call(this);this.zB=null;}
function AT8(a,b){return Cy(b)!=9?0:1;}
function Pu(){X.call(this);this.AK=null;}
function AQd(a,b){return GJ(b);}
function St(){X.call(this);this.zg=null;}
function ARS(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Nt(){X.call(this);this.xQ=null;}
function AVk(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function Nx(){X.call(this);this.zF=null;}
function AKJ(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function O1(){X.call(this);this.z5=null;}
function AUg(a,b){a:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Q4(){X.call(this);this.Aq=null;}
function AOU(a,b){return J$(b);}
function Ra(){X.call(this);this.yR=null;}
function ARg(a,b){return Rb(b);}
function U7(){X.call(this);this.zM=null;}
function ATS(a,b){return Cy(b)!=3?0:1;}
function TY(){X.call(this);this.xT=null;}
function AUV(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function NQ(){X.call(this);this.AS=null;}
function AKt(a,b){a:{b:{switch(Cy(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GJ(b);}return b;}
function MU(){X.call(this);this.mu=0;}
function AYf(a){var b=new MU();AEN(b,a);return b;}
function AEN(a,b){Bv(a);a.mu=b;}
function AQf(a,b){return a.bj^(a.mu!=Cy(b&65535)?0:1);}
var Tj=G(MU);
function ASW(a,b){return a.bj^(!(a.mu>>Cy(b&65535)&1)?0:1);}
function ABt(){var a=this;B.call(a);a.FT=null;a.KS=0;}
function RD(){B.call(this);this.xM=null;}
function AOq(a){var b,c;b=a.xM;c=b.rb;b=b.rc;c.Bb(b.jS,b.mf,null);}
function Xh(){B.call(this);this.pg=null;}
function AQ9(a,b){var c,d,e,f;c=a.pg;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.r$;c=Bz();e=new M;O(e);H(H(e,C(640)),b);Bt(c,N(e));b=Bz();f=d.length;c=new M;O(c);V(H(c,C(641)),f);Bt(b,N(c));}
function Xk(){var a=this;B.call(a);a.vg=null;a.vh=null;}
function APJ(a,b){var c,d;c=a.vg;d=a.vh;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function UX(){var a=this;B.call(a);a.nH=null;a.nI=null;}
function AMy(a,b){var c;c=a.nH;LW(a.nI,Ki(c,b.size));}
function U0(){B.call(this);this.wL=null;}
function AHX(a,b){var c;c=a.wL;Bt(E$(),$rt_str(b.message));LW(c,0);}
function V4(){B.call(this);this.yH=null;}
function AOm(a,b){$rt_globals.console.info($rt_ustr($rt_str(b.message)));}
function ZQ(){B.call(this);this.rU=null;}
function ASf(a,b){var c,d,e,f;c=a.rU;if(!c.kj){b=b.data;d=Dy(b[0]);e=EE(b[1]);AFq(c.e.f,d,e);c.i0=1;f=Iy(Ez(),c.ft);b=new M;O(b);H(GH(H(b,C(642)),f),C(200));$rt_globals.console.info($rt_ustr(N(b)));}}
function ZS(){B.call(this);this.vU=null;}
function APk(a,b){var c,d,e,f,g,h;c=b.data;d=a.vU;e=(Dy(c[2])).data[0];if(e!=1)IM(d,b);else{d.kj=1;f=Dy(c[0]);g=EE(c[1]);AC9(d.e.f,f,g,d.i0);Wi(d,ADi(e));GT(Ct(d),A0t);Gq(Ct(d));h=Iy(Ez(),d.ft);b=new M;O(b);H(GH(H(b,C(643)),h),C(200));$rt_globals.console.info($rt_ustr(N(b)));UH(d);Jy(d);}}
function ZT(){B.call(this);this.uj=null;}
function APO(a,b){IM(a.uj,b);}
var ABn=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",5,"worker",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bT",AYC(AOP),"cM",AYB(AJC)],Tb,0,B,[],0,3,0,0,0,N9,0,B,[],3,3,0,0,0,No,0,B,[],3,3,0,0,0,Ye,0,B,[N9,No],0,3,0,0,0,AB0,0,B,[],4,0,0,0,0,ABC,0,B,[],4,3,0,0,0,GW,0,B,[],0,3,0,0,0,Ed,0,GW,[],0,3,0,0,0,Bu,0,Ed,[],0,3,0,0,0,ADL,0,Bu,[],0,3,0,0,0,CN,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,Jo,0,B,[],3,3,0,0,0,BA,"String",1,B,[CN,CG,Jo],0,3,0,FA,["cM",AYB(AJA),"bT",AYC(Bn),"m0",AYB(IU),"kD",AYC(ALN)],EX,0,GW,[],0,3,0,0,0,HM,0,EX,[],0,3,0,0,0,ADj,0,HM,[],0,3,0,0,0,D6,0,B,[CN],1,3,0,0,0,GC,
0,D6,[CG],0,3,0,0,["bT",AYC(AU3),"kD",AYC(ANY)],GG,0,B,[CN,Jo],0,0,0,0,["iA",AYC(Kf),"cM",AYB(N)],It,0,B,[],3,3,0,0,0,M,0,GG,[It],0,3,0,0,["mH",AYF(ANS),"lN",AYE(AKQ),"cM",AYB(D3),"iA",AYC(AN1),"nf",AYD(AOx)],EB,0,HM,[],0,3,0,0,0,AEP,0,EB,[],0,3,0,0,0,AC2,0,EB,[],0,3,0,0,0,U4,0,B,[],3,3,0,0,0,Dw,0,B,[],3,3,0,0,0,Qy,0,B,[],3,0,0,0,0,Jb,0,B,[U4,Dw,Qy],1,3,0,0,["el",AYB(F7)],S6,0,Jb,[],0,3,0,0,0,AAV,0,B,[],0,3,0,0,0,AF9,0,B,[],4,3,0,0,0,Z,0,B,[],3,3,0,0,0,Vd,0,B,[Z],0,3,0,0,0,By,0,B,[],3,3,0,0,0,ADX,0,B,[By],1,
3,0,0,0,AA2,0,B,[],3,3,0,0,0,AFJ,0,B,[],3,3,0,0,0,AFF,0,B,[],3,3,0,0,0,Mp,0,B,[],0,3,0,0,0,ABW,0,B,[By],1,3,0,0,0,BZ,0,B,[By],3,3,0,0,0,Ve,0,B,[BZ],0,3,0,0,["bc",AYC(AHp)],Vc,0,B,[BZ],0,3,0,0,["bc",AYC(ATT)],L0,0,B,[],4,3,0,0,0,AFC,0,B,[],4,3,0,0,0,ACE,0,B,[],0,3,0,0,0,AHj,0,B,[],4,3,0,0,0,Od,0,B,[BZ],0,3,0,0,["bc",AYC(AP1)]]);
$rt_metadata([AFY,0,B,[By],1,3,0,0,0,ABd,0,B,[],0,3,0,0,0,Xp,0,B,[By],3,3,0,0,0,ADM,0,B,[Xp],1,3,0,0,["AA",AYC(AMw),"JM",AYB(AON)],ADy,0,B,[By],1,3,0,0,0,HI,0,B,[],3,3,0,0,0,Ux,0,B,[HI],0,3,0,0,0,BC,0,Bu,[],0,3,0,0,0,AEu,0,B,[],4,3,0,0,0,G3,0,Bu,[],0,3,0,0,0,Ji,0,Bu,[],0,3,0,0,0,C_,0,B,[CG],0,3,0,0,0,Nj,0,B,[By],3,3,0,0,0,T6,0,B,[Nj],3,3,0,0,0,Es,0,B,[By],3,3,0,0,0,AF8,0,B,[T6,Es],3,3,0,0,0,O3,0,B,[BZ],0,3,0,0,["bc",AYC(AQ_)],ADt,0,B,[],4,3,0,0,0,Q3,0,B,[Es],3,3,0,0,0,S3,0,B,[Es],3,3,0,0,0,SS,0,B,[Es],3,3,0,
0,0,U2,0,B,[Es],3,3,0,0,0,Zg,0,B,[Es],3,3,0,0,0,Wc,0,B,[Es,Q3,S3,SS,U2,Zg],3,3,0,0,0,Qc,0,B,[],3,3,0,0,0,Qz,0,B,[By],3,3,0,0,0,AA1,0,B,[By,Wc,Qc,Qz],1,3,0,0,["AA",AYC(AQa),"Dp",AYD(AST),"Kn",AYD(ASd),"GE",AYE(AP7),"Et",AYC(AUd),"ED",AYB(AJV),"CH",AYE(AHS)],BD,0,Bu,[],0,3,0,0,0,AAm,0,Bu,[],0,3,0,0,0,Ex,0,B,[],4,3,0,K8,0,AGR,0,B,[By],1,3,0,0,0,ACW,0,B,[By],1,3,0,0,0,AHe,0,B,[By],1,3,0,0,0,Kx,0,B,[By],3,3,0,0,0,Qs,0,B,[Kx],0,3,0,0,["xn",AYC(AJT)],ADh,0,B,[By],1,3,0,0,0,Qt,0,B,[Kx],0,3,0,0,["xn",AYC(AHU)],HJ,0,
BC,[],0,3,0,0,0,ACm,0,B,[],0,3,0,0,0,Qb,0,B,[],3,3,0,0,0,Ub,0,B,[Qb],0,3,0,0,0,B9,0,B,[],3,3,0,0,0,Tl,0,B,[B9],0,3,0,0,0,Bk,0,B,[],3,3,0,0,0,ADU,0,B,[Bk],0,3,0,0,0,ADp,0,B,[By],1,3,0,0,0,SW,0,B,[By],3,3,0,0,0,Xc,0,B,[SW],0,3,0,0,["GH",AYC(AM2)],W_,0,B,[Bk],0,3,0,0,0,R3,0,B,[By],3,3,0,0,0]);
$rt_metadata([Xa,0,B,[R3],0,3,0,0,["w7",AYD(AK9)],AGe,0,B,[By],1,3,0,0,0,Cp,0,B,[By],3,3,0,0,0,W9,0,B,[Cp],0,3,0,0,["cl",AYC(ARh)],LC,0,B,[],3,3,0,0,0,D4,0,B,[LC],1,3,0,0,0,Ee,0,B,[],3,3,0,0,0,ZB,0,B,[LC],3,3,0,0,0,N7,0,B,[ZB],3,3,0,0,0,QI,0,D4,[Ee,CN,N7],0,3,0,0,0,W$,0,B,[BZ],0,3,0,0,["bc",AYC(ASD)],Q$,0,B,[],0,3,0,0,0,LO,0,B,[],1,3,0,0,0,AFI,0,LO,[],0,3,0,0,0,Cz,0,B,[Dw],1,3,0,0,["c1",AYC(AU0)],JO,0,B,[HI],0,3,0,0,["wP",AYD(J_)],ACw,0,B,[],0,3,0,0,0,Yj,0,B,[Cp],0,3,0,0,["cl",AYC(AQD)],Yk,0,B,[Cp],0,3,0,0,
["cl",AYC(AQV)],Yl,0,B,[Cp],0,3,0,0,["cl",AYC(AO5)],Ym,0,B,[Cp],0,3,0,0,["cl",AYC(AOt)],Yn,0,B,[Cp],0,3,0,0,["cl",AYC(AOV)],Yo,0,B,[Cp],0,3,0,0,["cl",AYC(ARr)],Yp,0,B,[Cp],0,3,0,0,["cl",AYC(AMM)],Yq,0,B,[Cp],0,3,0,0,["cl",AYC(AVy)],Yr,0,B,[Cp],0,3,0,0,["cl",AYC(ALV)],Ys,0,B,[Cp],0,3,0,0,["cl",AYC(ASN)],Z2,0,B,[Cp],0,3,0,0,["cl",AYC(AU1)],Z3,0,B,[Cp],0,3,0,0,["cl",AYC(AOL)],Z4,0,B,[Cp],0,3,0,0,["cl",AYC(AO_)],Z5,0,B,[Cp],0,3,0,0,["cl",AYC(ARb)],VE,0,B,[],3,3,0,0,0,VW,0,B,[VE],0,3,0,0,0,VV,0,B,[Cp],0,3,0,0,["cl",
AYC(ANF)],Nk,0,B,[],0,3,0,0,0,AGA,0,B,[],0,3,0,0,0,Eg,0,B,[],3,3,0,0,0,Cr,0,B,[Eg],3,3,0,0,0,Cu,0,B,[],3,3,0,0,["bQ",AYC(ANL),"ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq)],DO,0,B,[],3,3,0,0,0,EI,0,B,[Eg],3,3,0,0,0,EZ,0,B,[],3,3,0,0,0,E1,0,B,[],3,3,0,0,0,Fl,0,B,[E1],3,3,0,0,0,R$,0,B,[Dw],0,3,0,0,0,Bf,0,B,[],0,3,0,0,["cM",AYB(AAr)],Yw,0,B,[],0,3,0,0,0,AFH,0,B,[],0,3,0,0,0,ABx,0,B,[],3,3,0,0,0,R1,0,B,[],0,3,0,0,0]);
$rt_metadata([Mf,0,B,[],0,3,0,0,0,DC,0,Mf,[],0,3,0,0,0,X0,0,DC,[],0,3,0,0,0,EN,0,DC,[],0,3,0,0,0,ADe,0,DC,[],0,3,0,0,0,AFp,0,EN,[],0,3,0,0,0,AEV,0,EN,[],0,3,0,0,0,ABZ,0,EN,[],0,3,0,0,0,AEU,0,DC,[],0,3,0,0,0,Tr,0,B,[By],3,3,0,0,0,AHh,0,B,[Tr],3,3,0,0,0,RZ,0,B,[Dw],0,3,0,0,0,R0,0,B,[],0,3,0,0,0,Co,0,B,[CG,CN],1,3,0,0,0,Hd,0,Co,[],12,3,0,Kl,0,MX,0,B,[],3,3,0,0,0,UQ,0,B,[MX],3,3,0,0,0,V9,0,B,[],3,3,0,0,0,GN,0,B,[UQ,V9],1,3,0,0,0,J5,0,GN,[],0,3,0,0,0,ACZ,0,J5,[],0,3,0,0,0,GA,0,GN,[],1,3,0,0,0,LY,0,GA,[],0,3,0,0,
["lf",AYE(ANu)],D_,0,Co,[],12,3,0,AT$,0,JX,0,B,[CG],1,3,0,0,0,M1,0,JX,[],0,3,0,ACQ,0,K4,0,B,[],32,0,0,AA0,0,QN,0,B,[],0,3,0,0,0,Hj,0,Co,[],12,0,0,AEi,0,GE,0,Co,[],12,0,0,AEk,0,Lj,0,GA,[],0,3,0,0,["lf",AYE(ALt)],Xd,0,Ed,[],0,3,0,0,0,AFB,0,BD,[],0,3,0,0,0,M0,0,B,[By],3,3,0,0,0,Zz,0,B,[M0],0,3,0,0,["bc",AYC(ASc)],ZA,0,B,[M0],0,3,0,0,["bc",AYC(AJu)],Hv,0,B,[],1,3,0,0,0,TK,0,B,[],3,3,0,0,0,LF,0,Hv,[CG,It,Jo,TK],1,3,0,0,0,Kw,0,Hv,[CG],1,3,0,0,0,H9,0,B,[],0,3,0,HD,0,Oc,0,Cz,[],0,3,0,0,["bG",AYB(AOE),"cc",AYD(AM5)],CP,
0,Cz,[],1,3,0,0,["cc",AYD(G1)],P_,0,B,[],3,3,0,0,0,KF,0,B,[P_],3,3,0,0,0,KI,0,B,[],3,3,0,0,0,Km,0,CP,[Cu,KF,KI,DO,EZ,Fl],0,3,0,0,["g9",AYD(AUu),"c1",AYC(ARH),"bG",AYB(AOT),"gA",AYB(AMW),"wU",AYB(ASv),"xr",AYB(AOJ),"uF",AYC(ATC),"cc",AYD(AN6),"jp",AYC(AIv),"bQ",AYC(AQJ),"cB",AYE(AMZ),"ch",AYD(AO4),"c4",AYD(ARy),"dc",AYE(AQ7),"dO",AYB(ANR)],Xq,0,Km,[],0,3,0,0,["gA",AYB(APg)],AGy,0,B,[],0,3,0,0,0,ADP,0,B,[By],1,3,0,0,0]);
$rt_metadata([KG,0,LF,[],1,0,0,0,0,ADu,0,KG,[],0,0,0,0,0,Lr,0,B,[],1,3,0,0,0,Mn,0,B,[],0,3,0,0,0,AA_,0,B,[],0,3,0,0,0,I0,0,B,[By],3,3,0,0,0,Om,0,B,[I0],0,3,0,0,["bc",AYC(ALC)],Ol,0,B,[I0],0,3,0,0,["bc",AYC(AP5)],Oj,0,B,[BZ],0,3,0,0,["bc",AYC(AQQ)],Oi,0,B,[BZ],0,3,0,0,["bc",AYC(AJ3)],Vg,0,B,[Z],0,3,0,0,["g",AYC(AU4)],Vh,0,B,[Z],0,3,0,0,["g",AYC(ANX)],Xx,0,B,[B9],0,3,0,0,["bX",AYC(ATU)],Xw,0,B,[B9],0,3,0,0,["bX",AYC(AH9)],Xt,0,B,[B9],0,3,0,0,["bX",AYC(AK$)],Xs,0,B,[B9],0,3,0,0,["bX",AYC(AP3)],Xv,0,B,[B9],0,3,
0,0,["bX",AYC(ALe)],Xu,0,B,[B9],0,3,0,0,["bX",AYC(AHo)],XA,0,B,[B9],0,3,0,0,["bX",AYC(AKM)],Xz,0,B,[B9],0,3,0,0,["bX",AYC(AOs)],XC,0,B,[B9],0,3,0,0,["bX",AYC(ASx)],XB,0,B,[B9],0,3,0,0,["bX",AYC(AHB)],UC,0,B,[B9],0,3,0,0,["bX",AYC(AH0)],UB,0,B,[B9],0,3,0,0,["bX",AYC(AN4)],UA,0,B,[B9],0,3,0,0,["bX",AYC(APD)],Uu,0,B,[B9],0,3,0,0,["bX",AYC(ALH)],Ut,0,B,[B9],0,3,0,0,["bX",AYC(AHJ)],Ur,0,B,[B9],0,3,0,0,["bX",AYC(AT2)],Uq,0,B,[B9],0,3,0,0,["bX",AYC(AOF)],Up,0,B,[B9],0,3,0,0,["bX",AYC(ASz)],HB,0,B,[],0,3,0,0,0,QD,0,
HB,[],0,3,0,0,0,AFS,0,B,[],0,3,0,0,0,Nh,0,HB,[],0,3,0,0,0,VH,0,B,[By],3,3,0,0,0,OW,0,B,[VH],0,3,0,0,["xn",AYC(AN9)],Wm,0,B,[Z],0,3,0,0,["g",AYC(X2)],YS,0,Kw,[],0,0,0,0,0,RS,0,B,[],0,3,0,0,0,Jq,0,B,[],0,3,0,0,0,ADC,0,B,[Cu,DO],0,0,0,0,["bQ",AYC(AQO),"cB",AYE(AUm),"ch",AYD(ARY),"c4",AYD(AOe),"dc",AYE(ASn)],H3,0,B,[],3,3,0,0,["xC",AYB(APU),"uo",AYB(ALP)],ACO,0,B,[H3,Cu,KI],0,3,0,0,["uo",AYB(ALD),"xC",AYB(AIz),"wU",AYB(OP),"xr",AYB(ZZ),"uF",AYC(PC),"c4",AYD(UO),"ch",AYD(Ny),"cB",AYE(NR),"bQ",AYC(Pd),"hG",AYC(AUG)],If,
0,B,[],3,3,0,0,0,Wx,0,B,[If],0,3,0,0,["iZ",AYC(ANZ)],Wy,0,B,[If],0,3,0,0,["iZ",AYC(AIN)],Wz,0,B,[Z],0,3,0,0,["g",AYC(AOb)],Ws,0,B,[Z],0,3,0,0,["g",AYC(AO7)],Wu,0,B,[Cr],0,3,0,0,["X",AYC(AT3)],Iz,0,B,[Cr],0,3,0,0,["X",AYC(ALS)]]);
$rt_metadata([Wv,0,B,[Z],0,3,0,0,["g",AYC(ASO)],Ww,0,B,[EI],0,3,0,0,["X",AYC(AKL)],AEG,0,B,[By],1,3,0,0,0,ABs,0,B,[],3,3,0,0,0,V0,0,B,[],0,3,0,0,0,Tx,0,B,[Cr],0,3,0,0,["X",AYC(AMu)],Tw,0,B,[Cr],0,3,0,0,["X",AYC(AJ0)],B_,0,B,[],0,3,0,0,["bT",AYC(AVu)],EF,0,B,[],3,3,0,0,0,AGL,0,B,[Cu,EF],0,3,0,0,["bQ",AYC(AAH),"cB",AYE(ABK),"ch",AYD(ADx),"c4",AYD(AGN),"g$",AYD(ANH)],AF0,0,B,[EF,H3],0,3,0,0,["xC",AYB(APU),"uo",AYB(ALP),"g$",AYD(AVe),"hG",AYC(AOz)],ACp,0,B,[],0,3,0,0,0,LE,0,B,[],0,3,0,0,0,Jt,0,B,[],0,3,0,0,0,Zm,
0,B,[],0,3,0,0,0,AGf,0,B,[],0,3,0,0,0,VS,0,B,[],0,3,0,0,0,EQ,0,B,[Dw],0,0,0,0,0,AGT,0,B,[],0,3,0,0,0,ACn,0,B,[Dw],0,3,0,0,0,XZ,0,B,[],3,3,0,0,["eY",AYC(AHq)],HY,0,B,[XZ],3,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],E2,0,B,[HY],1,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz),"eh",AYB(D8)],To,0,B,[HY],3,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],JS,0,B,[To],3,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],Gt,0,E2,[JS],1,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz),"tw",AYC(ARA),"bv",AYB(BW),"ug",AYD(AQB),"nA",AYD(ATv),"bT",AYC(APp)],LZ,0,B,[],3,3,0,0,0,ABh,
0,Gt,[Ee,CN,LZ],0,3,0,0,["mw",AYC(ANz),"h6",AYC(Br),"cV",AYB(AQj),"tw",AYC(BH),"nA",AYD(S7),"np",AYC(Ey),"iS",AYB(HZ),"ug",AYD(ABL),"eY",AYC(En)],O8,0,B,[Z],0,3,0,0,0,O7,0,B,[Z],0,3,0,0,["g",AYC(AIZ)],O6,0,B,[Z],0,3,0,0,["g",AYC(AH6)],O5,0,B,[Bk],0,3,0,0,["o",AYB(AH5)],Pb,0,B,[Bk],0,3,0,0,["o",AYB(ALR)],O_,0,B,[Bk],0,3,0,0,["o",AYB(AVX)],O$,0,B,[Bk],0,3,0,0,["o",AYB(AOo)],O9,0,B,[Bk],0,3,0,0,["o",AYB(AQR)],O4,0,B,[Bk],0,3,0,0,["o",AYB(AU7)],Fz,0,Co,[],12,3,0,AH3,0,K1,0,B,[],4,3,0,ANg,0,Nb,0,B,[],3,3,0,0,0,RT,
0,B,[Bk],0,3,0,0,["o",AYB(AMK)],RR,0,B,[Bk],0,3,0,0,["o",AYB(AHH)],Z0,0,B,[],3,3,0,0,0,K_,0,B,[],0,3,0,0,0,Ff,0,B,[],0,3,0,0,0,KV,0,Ff,[],0,3,0,0,0,Uv,0,Ff,[],0,3,0,0,0,RE,0,Ff,[],0,3,0,0,0,FS,0,B,[],3,3,0,0,0,TV,0,B,[],3,3,0,0,0]);
$rt_metadata([Hr,0,B,[CG],0,3,0,0,0,Lx,0,B,[],0,3,0,0,0,XT,0,B,[],3,3,0,0,0,Uj,0,B,[XT],0,3,0,0,["cM",AYB(AKu)],V3,0,B,[],3,3,0,0,0,LD,"JsFileHandle",7,B,[V3],0,3,0,0,["cM",AYB(ANC)],Ti,0,B,[Nb],0,3,0,0,0,Lc,0,D4,[Ee,CN],0,3,0,0,0,CD,0,B,[],0,3,0,0,0,ACc,0,B,[],0,3,0,0,0,OX,0,B,[Bk],0,3,0,0,["o",AYB(AU_)],Ce,0,B,[],0,3,0,0,0,Og,0,B,[],0,3,0,0,0,Lu,0,Lc,[],0,3,0,0,0,AGQ,0,B,[CG],0,3,0,0,["bT",AYC(ASU),"kD",AYC(AJL)],TQ,0,B,[HI],0,3,0,0,["wP",AYD(ATH)],W1,0,B,[],0,3,0,0,["cM",AYB(AMT),"bT",AYC(AR6)],HQ,0,B,[],
3,3,0,0,0,GU,0,B,[HQ,Ee],0,0,0,0,["bT",AYC(AKx)],G4,0,GU,[],0,0,0,0,0,Lo,0,Lr,[],1,3,0,0,0,Q8,0,Lo,[],0,3,0,0,0,I5,0,Ed,[],0,3,0,0,0,NC,0,B,[I0],0,3,0,0,["bc",AYC(AVh)],NF,0,B,[BZ],0,3,0,0,["bc",AYC(AUe)],ND,0,B,[BZ],0,3,0,0,["bc",AYC(AIP)],IG,0,B,[],0,3,0,0,0,JG,0,CP,[KF],0,3,0,0,["c1",AYC(ATd),"bG",AYB(AMx),"gA",AYB(AUW),"cc",AYD(AHA),"mc",AYD(AET),"jp",AYC(AK1)],AAP,0,Cz,[],0,3,0,0,["c1",AYC(AIc),"bG",AYB(AKV),"cc",AYD(AOa)],Pk,0,CP,[Cu,EF],0,3,0,0,["g$",AYD(ANk),"cc",AYD(ALE),"bG",AYB(AKW),"bQ",AYC(AOc),
"ch",AYD(ATq),"c4",AYD(ASH),"cB",AYE(AI0)],Us,0,CP,[EF],0,3,0,0,["g$",AYD(AKE),"bG",AYB(AQA),"cc",AYD(AJn),"c1",AYC(AKP)],Or,0,CP,[Cu],0,3,0,0,["bQ",AYC(ANL),"ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq),"bG",AYB(ASw),"c1",AYC(AH1)],Uo,0,Cz,[],0,3,0,0,["bG",AYB(AHz),"cc",AYD(AHy)],Df,0,Cz,[],0,3,0,0,["bG",AYB(TJ),"cc",AYD(Uc)],R5,"SelectFileTest",5,Df,[],0,3,0,0,0,AA3,"WorkerTest",6,Df,[],0,3,0,0,0,NP,"RenderTexture",5,Df,[],0,3,0,0,["c1",AYC(AMS),"bG",AYB(AKF),"cc",AYD(AUQ)],Ui,"ScissorDemo",5,Df,[],0,3,0,0,["bG",
AYB(AVF),"cc",AYD(AMn)],Ua,0,Cz,[],0,3,0,0,["bG",AYB(AUj),"cc",AYD(AKZ),"c1",AYC(AR2)],Js,"ClipboardTest",5,Df,[Cu],0,3,0,0,["bQ",AYC(ANL),"ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ANT)],TS,0,Cz,[],0,3,0,0,["bG",AYB(AVt),"cc",AYD(AP6)],G9,0,Cz,[Cu],1,3,0,0,["bQ",AYC(ANL),"ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq),"bG",AYB(ACA)],U$,0,G9,[],0,3,0,0,["ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq),"cc",AYD(ARB),"bQ",AYC(ATa)],U9,0,G9,[],0,3,0,0,["ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq),"bQ",AYC(AU$),"bG",AYB(AKA),"cc",AYD(AID)],Y7,
0,CP,[EF],0,3,0,0,["g$",AYD(ALz),"bG",AYB(ATY),"cc",AYD(AS7),"c1",AYC(AMo)],Nr,0,JG,[],0,3,0,0,["gA",AYB(AJD),"mc",AYD(AVR)],Ja,0,B,[],0,3,0,0,0,ABr,0,B,[],3,3,0,0,0,AAF,0,B,[],0,3,0,0,0,AEe,0,B,[],3,3,0,0,0]);
$rt_metadata([AG4,0,B,[],0,3,0,0,0,M7,0,B,[HQ,CN],0,3,0,0,0,J7,0,M7,[],0,0,0,0,0,AGw,0,B,[],0,3,0,0,0,Rg,0,B,[Cr],0,3,0,0,["X",AYC(AJg)],Rd,0,B,[Z],0,3,0,0,["g",AYC(ALZ)],Re,0,B,[EZ],0,3,0,0,["g9",AYD(ATp)],Pe,0,B,[Fl],0,3,0,0,["dO",AYB(AQ1)],Pf,0,B,[DO],0,3,0,0,["dc",AYE(ANE)],Pc,0,B,[EI],0,3,0,0,["X",AYC(AOu)],AGY,0,Jq,[],0,3,0,0,0,Wn,0,B,[Cu],0,0,0,0,["bQ",AYC(AJy),"cB",AYE(AHQ),"ch",AYD(AJs),"c4",AYD(AIF)],RK,0,B,[Cr],0,3,0,0,["X",AYC(ATF)],RJ,0,B,[Cr],0,3,0,0,["X",AYC(AQ3)],RI,0,B,[EZ],0,3,0,0,["g9",AYD(ANU)],RH,
0,B,[Bk],0,3,0,0,["o",AYB(AHW)],RG,0,B,[EI],0,3,0,0,["X",AYC(AP_)],RF,0,B,[DO],0,3,0,0,["dc",AYE(ATO)],HF,0,B_,[],0,3,0,0,0,NE,0,B,[],0,3,0,0,0,AEg,0,B,[],0,3,0,0,0,Vz,0,B,[Cr],0,3,0,0,["X",AYC(APC)],Vv,0,B,[EI],0,3,0,0,["X",AYC(ASL)],ACk,0,B,[],0,3,0,0,["bT",AYC(ASB)],Vw,0,B,[Bk],0,3,0,0,["o",AYB(AVN)],Vx,0,B,[Bk],0,3,0,0,["o",AYB(AIS)],C$,0,B,[],0,3,0,0,0,Xl,0,B,[Cr],0,3,0,0,["X",AYC(ANK)],Xn,0,B,[EI],0,3,0,0,["X",AYC(AIr)],AEs,0,B,[],0,3,0,0,0,Xm,0,B,[DO],0,3,0,0,["dc",AYE(ARx)],AGz,0,B,[],0,3,0,0,0,NU,0,
B,[EF],0,3,0,0,["g$",AYD(APN)],NS,0,B,[Cr],0,3,0,0,["X",AYC(AQb)],SZ,0,B,[],3,3,0,0,0,AAQ,0,B,[SZ],0,3,0,0,0,N8,0,B,[Cu],0,0,0,0,["cB",AYE(ARq),"ch",AYD(AIg),"c4",AYD(AIk),"bQ",AYC(ALi)],Ty,0,B,[DO],0,3,0,0,["dc",AYE(APK)],Rm,0,B,[Cr],0,3,0,0,["X",AYC(APs)],Sy,0,B,[Z],0,3,0,0,["g",AYC(APn)],Sx,0,B,[Z],0,3,0,0,["g",AYC(AR9)],SA,0,B,[Z],0,3,0,0,["g",AYC(AJF)],Sz,0,B,[Z],0,3,0,0,["g",AYC(AIR)],Sw,0,B,[Z],0,3,0,0,["g",AYC(AUH)],Sv,0,B,[Z],0,3,0,0,["g",AYC(ANt)],VK,0,B,[Cu],0,0,0,0,["c4",AYD(AIq),"cB",AYE(ARq),"bQ",
AYC(AQI),"ch",AYD(AVf)],C3,0,B,[],3,3,0,FX,0,Rj,0,B,[Cu],0,0,0,0,["cB",AYE(ARq),"ch",AYD(AM7),"c4",AYD(AIA),"bQ",AYC(ALq)],Z8,0,B,[DO],0,3,0,0,["dc",AYE(ATJ)],YL,0,B,[Cr],0,3,0,0,["X",AYC(AKp)]]);
$rt_metadata([YK,0,B,[EZ],0,3,0,0,["g9",AYD(AN3)],YJ,0,B,[EZ],0,3,0,0,["g9",AYD(AKw)],YH,0,B,[Fl],0,3,0,0,["dO",AYB(AOM)],YM,0,B,[Fl],0,3,0,0,["dO",AYB(AS1)],Tv,0,B,[Cr],0,3,0,0,["X",AYC(AUE)],ZW,0,B,[Cr],0,3,0,0,["X",AYC(AJ$)],ZY,0,B,[EI],0,3,0,0,["X",AYC(AIm)],ZX,0,B,[DO],0,3,0,0,["dc",AYE(AR7)],AFM,0,B,[],0,3,0,0,["bT",AYC(AKj)],Db,0,B,[],3,3,0,ALA,0,Cj,0,Co,[],12,3,0,AFr,0,Jx,0,B,[],0,3,0,0,0,IN,0,B,[],0,3,0,0,0,AD7,0,B,[],0,3,0,0,0,DQ,0,B,[],3,3,0,AIb,0,Qp,0,B,[By],3,3,0,0,0,QL,0,B,[Qp],0,3,0,0,["w7",AYD(AL3)],Qq,
0,B,[By],3,3,0,0,0,QJ,0,B,[Qq],0,3,0,0,["w7",AYD(AM$)],AB2,0,B,[],0,3,0,0,0,AAM,0,B,[By],3,3,0,0,0,J6,0,B,[Dw],0,3,0,0,["el",AYB(AE0)],Yz,0,B,[],0,3,0,0,0,DU,0,B,[],3,3,0,AEm,0,G$,0,B,[],3,3,0,0,0,PY,0,B,[G$],0,3,0,0,["nW",AYE(ARP)],PZ,0,B,[G$],0,3,0,0,0,Tk,0,B,[Cu],0,0,0,0,["bQ",AYC(AVo),"cB",AYE(ARa),"ch",AYD(AVa),"c4",AYD(AO8)],Wr,0,B,[Z],0,3,0,0,["g",AYC(AP0)],AHa,0,B,[],0,3,0,0,0,XQ,0,B,[Z],0,3,0,0,["g",AYC(AM_)],WG,0,B,[Cr],0,3,0,0,["X",AYC(AMH)],T_,0,B,[Cu],0,0,0,0,["ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq),
"bQ",AYC(AU8)],AB5,0,B,[],0,3,0,0,0,I1,0,B,[],0,3,0,0,0,HG,0,B,[],4,3,0,0,0,ABA,0,B,[],0,3,0,0,0,Ck,0,Co,[],12,3,0,ACu,0,AGG,0,B,[],0,3,0,0,0,AC1,0,B,[By],4,3,0,0,0,AG_,0,B,[],0,3,0,0,0,ABE,0,B,[],3,3,0,0,0,CW,0,B,[By],1,3,0,0,0,AEz,0,CW,[],1,3,0,0,0,AFl,0,CW,[],1,3,0,0,0,AB6,0,CW,[],1,3,0,0,0,ACo,0,CW,[],1,3,0,0,0,AFQ,0,CW,[],1,3,0,0,0,YP,0,B,[Bk],0,3,0,0,["o",AYB(ANy)],ABq,0,B,[],0,3,0,0,0]);
$rt_metadata([IB,0,B,[],0,3,0,0,0,WW,0,B,[],0,3,0,0,0,Mt,0,B,[],0,3,0,0,0,ACP,0,B,[],4,3,0,0,0,PB,0,B,[Cu],0,0,0,0,["ch",AYD(ATV),"c4",AYD(AIq),"cB",AYE(ARq),"bQ",AYC(AVS)],ACY,0,B,[By],1,3,0,0,0,S4,0,B,[Z],0,3,0,0,["g",AYC(AI8)],XI,0,B,[E1],0,3,0,0,["dO",AYB(AVi)],AFf,0,B,[],0,3,0,0,0,AEv,0,B,[],3,3,0,0,0,Md,0,B,[],3,3,0,0,0,RY,0,B,[Md],0,3,0,0,["sA",AYC(AJO)],X_,0,B,[Z],0,3,0,0,["g",AYC(APL)],AE$,0,B,[],0,3,0,0,0,Rs,0,B,[Dw],0,3,0,0,0,Zk,0,B,[],0,3,0,0,0,ZM,0,B,[Z],0,3,0,0,["g",AYC(ALk)],AAK,0,B,[],0,3,0,
0,0,AF3,0,B,[CG],0,3,0,0,["bT",AYC(AH8),"m0",AYB(ARG),"kD",AYC(ARf)],Zc,0,B,[Z],0,3,0,0,["g",AYC(AHR)],TT,0,B,[],3,3,0,0,0,E7,0,B,[],3,3,0,0,0,OK,0,B,[E7],0,0,0,0,["bK",AYB(BX),"br",AYB(B0),"rI",AYB(SG)],F6,0,I5,[],0,3,0,0,0,Y_,0,EX,[],0,3,0,0,0,AFX,0,B,[],0,3,0,0,0,Ud,0,D4,[Ee,CN],0,3,0,0,0,XF,0,B,[],0,3,0,0,0,Xi,0,B,[],0,3,0,0,0,W7,0,B,[Z],0,3,0,0,["g",AYC(AUk)],ZN,0,B,[Bk],0,3,0,0,["o",AYB(ASi)],Zp,0,D6,[CG],0,3,0,0,0,FL,0,B,[],0,0,0,0,0,Ib,0,B,[],4,3,0,0,0,W0,0,B,[],0,3,0,0,0,MK,0,B,[],1,3,0,0,0,ADn,0,CW,
[],1,3,0,0,0,Pn,0,B,[Z],0,3,0,0,["g",AYC(AJc)],RV,0,B,[Z],0,3,0,0,["g",AYC(AIW)],Sf,0,B,[Z],0,3,0,0,["g",AYC(APF)],E_,0,B,[Dw],0,3,0,0,["el",AYB(ARJ),"jW",AYB(APT),"jY",AYE(SX),"fH",AYC(AGv),"lk",AYC(AOy),"ld",AYC(AUJ),"ri",AYD(ARX),"cB",AYE(AMU),"ch",AYD(AJB),"c4",AYD(APo),"bQ",AYC(AUl),"dc",AYE(ARF)],Gg,0,E_,[],0,3,0,0,0,Sa,0,Gg,[H3],0,3,0,0,["xC",AYB(APU),"uo",AYB(ALP),"el",AYB(AUi),"ri",AYD(AKU),"fH",AYC(AIe),"ld",AYC(ARc),"lk",AYC(AS3),"w9",AYB(AB1),"bQ",AYC(AOr),"ch",AYD(ALG),"cB",AYE(ARt),"hG",AYC(ATn)],Oa,
0,B,[Bk],0,3,0,0,["o",AYB(AL7)],ACt,0,E_,[],0,3,0,0,["el",AYB(ASX),"jY",AYE(AMh),"fH",AYC(AR3),"cB",AYE(ATz),"ch",AYD(AS2),"c4",AYD(APQ),"bQ",AYC(APt),"dc",AYE(ALv),"jW",AYB(AU2)],Qa,0,Gg,[],0,3,0,0,["w9",AYB(AKr),"jW",AYB(AU5),"ld",AYC(ARj),"fH",AYC(AVr),"lk",AYC(AIE)],Yv,0,B,[Z],0,3,0,0,0,TA,0,D6,[CG],0,3,0,0,0,Qw,0,B,[Bk],0,3,0,0,["o",AYB(AS$)],OO,0,B,[Bk],0,3,0,0,["o",AYB(AJZ)]]);
$rt_metadata([Vq,0,B,[],0,3,0,0,0,I3,0,B,[],0,3,0,0,0,Xf,0,E_,[],0,3,0,0,0,Vy,0,B,[],0,3,0,0,0,Ul,0,B,[Bk],0,3,0,0,["o",AYB(AJa)],PE,0,B,[Z],0,3,0,0,["g",AYC(AIo)],PD,0,B,[Z],0,3,0,0,["g",AYC(AIM)],K0,0,B,[],0,3,0,0,0,CL,0,Bu,[],0,3,0,0,0,AES,0,EX,[],0,3,0,0,0,WC,0,B,[FS],0,3,0,0,0,Yy,0,B,[Z],0,3,0,0,0,TG,0,B,[Z],0,3,0,0,["g",AYC(ALa)],TF,0,B,[Z],0,3,0,0,["g",AYC(AUh)],K6,0,MK,[],1,3,0,0,0,UZ,0,K6,[],0,3,0,0,0,ZH,0,B,[Z],0,3,0,0,["g",AYC(AUa)],Qi,0,B,[E1],0,3,0,0,["dO",AYB(AIu)],Qh,0,B,[E1],0,3,0,0,["dO",AYB(ALy)],T9,
0,B,[E1],0,3,0,0,["dO",AYB(AQu)],UF,0,B,[Bk],0,3,0,0,["o",AYB(AT4)],SB,0,B,[BZ],0,3,0,0,["bc",AYC(AHF)],V8,0,B,[BZ],0,3,0,0,["bc",AYC(AUX)],NA,0,B,[Z],0,3,0,0,0,AD6,0,B,[B9],0,3,0,0,0,AFi,0,B,[B9],0,3,0,0,0,OE,0,B,[Z],0,3,0,0,["g",AYC(AKl)],OC,0,B,[Z],0,3,0,0,["g",AYC(ASC)],Np,0,B,[Z],0,3,0,0,["g",AYC(ASZ)],XE,0,B,[Bk],0,3,0,0,["o",AYB(AJr)],H_,0,GU,[],0,0,0,0,0,Ht,0,Bu,[],0,3,0,0,0,WE,0,B,[Z],0,3,0,0,["g",AYC(AQe)],Rl,0,D6,[CG],0,3,0,0,0,I6,0,B,[],4,3,0,0,0,NB,0,B,[BZ],0,3,0,0,["bc",AYC(AVW)],AAW,0,B,[Z],0,
3,0,0,0,VX,0,B,[],0,3,0,0,0,ZO,0,B,[G$],0,3,0,0,["nW",AYE(ARR)],Ft,0,B,[],0,3,0,0,0,ZU,0,B,[Z],0,3,0,0,["g",AYC(AMa)],Lq,0,Ft,[],0,3,0,0,0,Iw,0,Ft,[],0,3,0,0,0,X1,0,B,[Z],0,3,0,0,["g",AYC(AIL)],Ru,0,B,[],0,3,0,0,0,Qo,0,B,[Z],0,3,0,0,["g",AYC(AO9)],D9,0,Bu,[],0,3,0,0,0,OV,0,B,[],0,3,0,0,0,Pg,0,B,[],0,3,0,0,0,AF6,0,B,[],0,3,0,0,0]);
$rt_metadata([UN,0,B,[],0,0,0,0,0,ABu,0,B,[],3,3,0,0,0,QC,0,B,[HY],3,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],ES,0,E2,[QC],1,3,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],QT,0,ES,[],0,0,0,0,["mw",AYC(ANz)],Na,0,B,[Z],0,3,0,0,["g",AYC(ALn)],WJ,0,B,[Z],0,3,0,0,["g",AYC(AOp)],JN,0,B,[],0,3,0,0,["bT",AYC(AEq)],HC,0,JN,[],0,3,0,0,["bT",AYC(AJh)],EM,0,B,[],0,3,0,0,["bT",AYC(ABk)],Fr,0,EM,[],0,3,0,0,0,FZ,0,EM,[],0,3,0,0,["bT",AYC(AUs)],Ga,0,EM,[],0,3,0,0,["bT",AYC(AIs)],NI,0,B,[B9],0,3,0,0,0,NJ,0,B,[Z],0,3,0,0,["g",AYC(AM0)],Zv,
0,B,[BZ],0,3,0,0,["bc",AYC(ASu)],Zu,0,B,[BZ],0,3,0,0,["bc",AYC(AKI)],YB,0,B,[BZ],0,3,0,0,["bc",AYC(AMi)],YA,0,B,[BZ],0,3,0,0,["bc",AYC(AM9)],ACd,0,B,[],1,3,0,0,0,YN,0,B,[],3,3,0,0,0,Zq,0,B,[Cp],0,3,0,0,["cl",AYC(AL8)],ABG,0,B,[],0,3,0,0,0,AHf,0,B,[],0,3,0,0,0,Za,0,B,[Bk],0,3,0,0,["o",AYB(AII)],Zb,0,B,[Bk],0,3,0,0,["o",AYB(AMO)],AGM,0,B,[CG],0,3,0,0,["bT",AYC(APZ)],N6,0,B,[Z],0,3,0,0,["g",AYC(AOn)],AAc,0,B,[Z],0,3,0,0,["g",AYC(AVU)],AE3,0,B,[],0,3,0,0,0,Fc,0,B,[],0,3,0,0,0,ABc,0,B,[],0,3,0,0,0,KT,0,ES,[],1,0,
0,0,["eY",AYC(AHq),"mw",AYC(ANz)],W8,0,KT,[],0,0,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],L7,0,D4,[],1,0,0,0,0,W5,0,L7,[],0,0,0,0,0,ME,0,Gt,[LZ],1,0,0,0,["eY",AYC(AHq),"iS",AYB(AKz),"np",AYC(AO1),"mw",AYC(ANG)],W6,0,ME,[],0,0,0,0,["eY",AYC(AHq),"h6",AYC(AO$),"cV",AYB(AOg),"bv",AYB(AK5),"eh",AYB(AIy)],W3,0,B,[E7],0,0,0,0,["bK",AYB(AIf),"br",AYB(AQt),"rI",AYB(ASl)],Q6,0,B,[E7],3,3,0,0,0,W4,0,B,[Q6],0,0,0,0,0,AAi,0,B,[HI],0,3,0,0,0,E8,0,B,[],0,0,0,0,0,Um,0,E8,[E7],0,0,0,0,0,JB,0,D9,[],0,3,0,0,0,Ir,0,Bu,[],0,3,0,0,0,Mw,
0,Bu,[],0,3,0,0,0,AGx,0,B,[Z],0,3,0,0,0,Th,0,B,[Bk],0,3,0,0,["o",AYB(AQF)],Wo,0,B,[Z],0,3,0,0,["g",AYC(AMc)]]);
$rt_metadata([P7,0,B,[Bk],0,3,0,0,["o",AYB(AJI)],AEW,0,B,[],0,3,0,0,0,He,0,B,[],0,3,0,0,0,Wf,0,ES,[],0,0,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],QU,0,E2,[],0,0,0,0,["eY",AYC(AHq),"mw",AYC(ANz)],Sl,0,B,[MX],3,3,0,0,0,OL,0,B,[Sl],3,3,0,0,0,Hw,0,B,[OL],1,3,0,0,0,ACN,0,Hw,[],0,3,0,0,0,VM,0,B,[Bk],0,3,0,0,["o",AYB(AKB)],VN,0,B,[Bk],0,3,0,0,["o",AYB(AHE)],VJ,0,B,[Bk],0,3,0,0,["o",AYB(ANN)],VL,0,B,[Bk],0,3,0,0,["o",AYB(AQ0)],Vj,0,B,[Bk],0,3,0,0,["o",AYB(AO6)],Vl,0,B,[Bk],0,3,0,0,["o",AYB(AQZ)],Vk,0,B,[Bk],0,3,0,0,["o",AYB(ATw)],RW,
0,B,[],3,3,0,0,0,AAb,0,B,[Bk],0,3,0,0,["o",AYB(ARU)],YY,0,B,[FS],0,3,0,0,["ny",AYD(ANv)],NG,0,B,[],0,3,0,0,0,SM,0,B,[],0,3,0,0,0,O2,0,B,[Z],0,3,0,0,["g",AYC(APh)],XN,0,B,[Z],0,3,0,0,["g",AYC(AL_)],XM,0,B,[Md],0,3,0,0,["sA",AYC(K2)],Yt,0,BC,[],0,3,0,0,0,X4,0,B,[Bk],0,3,0,0,["o",AYB(AJf)],X3,0,B,[Bk],0,3,0,0,["o",AYB(AId)],X6,0,B,[Bk],0,3,0,0,["o",AYB(ANJ)],Zf,0,B,[Bk],0,3,0,0,["o",AYB(ARL)],Ze,0,B,[Bk],0,3,0,0,["o",AYB(AML)],Pj,0,B,[E1],0,3,0,0,["dO",AYB(ATm)],PM,0,B,[Bk],0,3,0,0,["o",AYB(ALL)],PN,0,B,[Bk],0,
3,0,0,["o",AYB(AUp)],PO,0,B,[Bk],0,3,0,0,["o",AYB(ARQ)],PJ,0,B,[Bk],0,3,0,0,["o",AYB(AMt)],PL,0,B,[Bk],0,3,0,0,["o",AYB(AVq)],X5,0,B,[FS],0,3,0,0,["ny",AYD(APi)],RQ,0,B,[BZ],0,3,0,0,["bc",AYC(AKT)],Jp,0,B,[By],3,3,0,0,0,Nw,0,B,[Jp],0,3,0,0,["sy",AYB(ANc)],Ni,0,B,[Jp],0,3,0,0,["sy",AYB(AHs)],V2,0,B,[G$],0,3,0,0,0,Zt,0,B,[BZ],0,3,0,0,["bc",AYC(AME)],V6,0,E8,[E7],0,0,0,0,0,SP,0,E8,[E7],0,0,0,0,0,V_,0,B,[],3,3,0,AWW,0,SL,0,B,[CN],4,3,0,0,0,Gf,0,Co,[],12,0,0,T5,0,OY,0,B,[Z],0,3,0,0,["g",AYC(AMR)],W2,0,B,[Z],0,3,
0,0,["g",AYC(AKb)]]);
$rt_metadata([G7,0,B,[],3,3,0,0,0,WR,0,B,[G7],0,3,0,0,["jK",AYE(ANV)],WP,0,B,[G7],0,3,0,0,["jK",AYE(AI5)],IC,0,B,[CN,CG],0,3,0,0,0,Gs,0,B,[],3,3,0,0,0,AGr,0,B,[Gs],0,3,0,0,0,P$,0,B,[Gs],3,3,0,0,0,AGs,0,B,[P$],0,3,0,0,0,T4,0,B,[G7],0,3,0,0,["jK",AYE(AQv)],T2,0,B,[Eg],0,3,0,0,["X",AYC(AN_)],T1,0,B,[Eg],0,3,0,0,["X",AYC(ASR)],T0,0,B,[G7],0,3,0,0,["jK",AYE(AQ8)],BK,0,B,[],1,0,0,0,["cr",AYE(H8),"cu",AYF(Il),"iq",AYB(AJw),"Q",AYC(ATL),"b2",AYC(ATK),"fU",AYB(AUO),"eH",AYB(JJ)],U5,0,B,[],32,0,0,AXu,0,Vi,0,B,[Z],0,3,
0,0,["g",AYC(AJm)],UT,0,B,[Z],0,3,0,0,["g",AYC(AVJ)],On,0,B,[Bk],0,3,0,0,["o",AYB(ATW)],OB,0,B,[Z],0,3,0,0,["g",AYC(AKn)],OD,0,B,[Z],0,3,0,0,["g",AYC(AQC)],CT,0,BK,[],0,0,0,MY,["c",AYE(AIT),"J",AYC(AJd)],G_,0,B,[],0,0,0,0,0,Jj,0,BD,[],0,3,0,0,0,Y9,0,B,[BZ],0,3,0,0,["bc",AYC(AQN)],AEl,0,B,[By],3,3,0,0,0,VF,0,B,[BZ],0,3,0,0,["bc",AYC(AQl)],Tf,0,CT,[],0,0,0,0,["c",AYE(AIi),"J",AYC(AR_)],ZG,0,CT,[],0,0,0,0,["c",AYE(AKc)],Rw,0,CT,[],0,0,0,0,["c",AYE(AJt)],Un,0,CT,[],0,0,0,0,["c",AYE(AIp),"J",AYC(AQx)],FJ,0,CT,[],
0,0,0,0,["c",AYE(AT6)],B6,0,BK,[],1,0,0,0,["c",AYE(AVp),"b8",AYB(ATc),"J",AYC(ANl)],AF1,0,B6,[],0,0,0,0,["bA",AYD(ASA),"cr",AYE(ALu),"cu",AYF(AJ5),"J",AYC(AIn)],B3,0,BK,[],0,0,0,0,["c",AYE(AMe),"Q",AYC(AQn),"b2",AYC(AOh),"J",AYC(ARe),"eH",AYB(AJ1)],Jz,0,B3,[],0,0,0,0,["c",AYE(AP$),"J",AYC(ARz)],DW,0,Jz,[],0,0,0,0,["c",AYE(AKG),"Q",AYC(ARk)],Nu,0,DW,[],0,0,0,0,["c",AYE(AQi),"J",AYC(ATQ)],XW,0,DW,[],0,0,0,0,["c",AYE(AI9),"J",AYC(ATi)],SQ,0,DW,[],0,0,0,0,["c",AYE(AJW),"J",AYC(AVQ)],U1,0,DW,[],0,0,0,0,["c",AYE(AHN),
"J",AYC(ARW)],GV,0,B3,[],0,0,0,0,["c",AYE(AH_),"cr",AYE(AOB),"cu",AYF(ASe),"b2",AYC(AN$),"fU",AYB(AQr),"eH",AYB(AUS)],Hb,0,B,[],1,0,0,0,0,X,0,Hb,[],1,0,0,Qf,["dv",AYB(AI_),"fh",AYB(AIG),"jR",AYB(AS6),"hz",AYB(AUL)],ABR,0,X,[],0,0,0,0,["l",AYC(C4),"dv",AYB(CY),"fh",AYB(ALo),"jR",AYB(ATB),"cM",AYB(APu),"hz",AYB(ALF)],JU,0,Bu,[],0,3,0,0,0,Ec,0,BK,[],1,0,0,0,["b2",AYC(ASh),"J",AYC(ATZ),"eH",AYB(AOY)],C5,0,Ec,[],0,0,0,0,["c",AYE(AHP)],Fj,0,C5,[],0,0,0,0,["c",AYE(AIV)],CV,0,Ec,[],0,0,0,0,["c",AYE(AH$)],EK,0,C5,[],
0,0,0,0,["c",AYE(AOK),"Q",AYC(AVV)],Yb,0,C5,[],0,0,0,0,["c",AYE(AVg),"cr",AYE(APq)]]);
$rt_metadata([Bc,0,B,[],1,0,0,0,0,Dj,0,BD,[],0,3,0,0,0,NX,0,Hb,[Ee],0,0,0,0,["cM",AYB(APz)],PA,0,BK,[],0,0,0,0,["c",AYE(ANO),"J",AYC(AQm)],YZ,0,B,[Ee,CN],0,3,0,0,0,NH,0,B3,[],0,0,0,0,0,R7,0,B3,[],0,0,0,0,["c",AYE(AIO),"Q",AYC(AP8),"J",AYC(AJx),"b2",AYC(AI$)],DM,0,B3,[],0,0,0,0,["c",AYE(ALf),"l",AYC(ALU),"b2",AYC(AIK),"Q",AYC(ASV),"J",AYC(ALs)],JR,0,DM,[],0,0,0,0,["l",AYC(ANm)],ABD,0,B6,[],0,0,0,0,["bA",AYD(ANP)],Ep,0,B6,[],0,0,0,0,["bA",AYD(Nd),"b2",AYC(AQq)],Qg,0,B3,[],0,0,0,0,["Q",AYC(AOI),"c",AYE(AHD),"b2",
AYC(AJo),"J",AYC(ATD)],Ew,0,B6,[],0,0,0,0,["b8",AYB(ANs),"bA",AYD(AMv),"cr",AYE(ALc),"cu",AYF(ANB),"b2",AYC(ATx)],AGF,0,B6,[],0,0,0,0,["bA",AYD(AHt)],AAC,0,B6,[],0,0,0,0,["bA",AYD(AHZ)],Fq,0,B3,[],0,0,0,0,["Q",AYC(AUR),"c",AYE(AP9),"b2",AYC(ANQ),"J",AYC(ARl)],Zs,0,Fq,[],0,0,0,0,0,Vb,0,Fq,[],0,0,0,0,0,AAn,0,CV,[],0,0,0,0,["c",AYE(AKi)],Rn,0,CV,[],0,0,0,0,["c",AYE(APb)],F8,0,CV,[],0,0,0,0,["c",AYE(ASS),"Q",AYC(AT_)],Q0,0,F8,[],0,0,0,0,["c",AYE(ANw),"Q",AYC(APB)],Fo,0,CV,[],0,0,0,0,["c",AYE(AVM)],N_,0,Fo,[],0,
0,0,0,["c",AYE(AMX)],S8,0,CV,[],0,0,0,0,["c",AYE(AUZ)],Sg,0,F8,[],0,0,0,0,["c",AYE(AJz)],Wj,0,Fo,[],0,0,0,0,["c",AYE(AIw)],S$,0,Ec,[],0,0,0,0,["c",AYE(AVw),"cr",AYE(AS9)],PP,0,Ec,[],0,0,0,0,["c",AYE(AQs),"cr",AYE(AHI)],E0,0,B,[],1,0,0,0,0,AAp,0,C5,[],0,0,0,0,["c",AYE(AIx)],X8,0,EK,[],0,0,0,0,["c",AYE(APa)],QG,0,Fj,[],0,0,0,0,["c",AYE(ASj)],Sc,0,C5,[],0,0,0,0,["c",AYE(AQk)],Vt,0,EK,[],0,0,0,0,["c",AYE(AIJ)],SR,0,Fj,[],0,0,0,0,["c",AYE(ASE)],K5,0,BK,[],4,0,0,0,["c",AYE(AOf),"J",AYC(AM8)],ACr,0,BK,[],0,0,0,0,["c",
AYE(AI7),"J",AYC(AJj)],PG,0,BK,[],0,0,0,0,["c",AYE(ANo),"J",AYC(AVH)],Y6,0,BK,[],4,0,0,0,["c",AYE(AQ$),"J",AYC(AJ8)],Yx,0,BK,[],0,0,0,0,["c",AYE(AP4),"J",AYC(AHr)],Oo,0,BK,[],0,0,0,0,["c",AYE(AJY),"J",AYC(AL6)],AGn,0,B3,[],0,0,0,0,["c",AYE(AU6),"Q",AYC(AJq),"iq",AYB(API),"J",AYC(AJp)],ABP,0,B3,[],4,0,0,0,["c",AYE(APV),"Q",AYC(AR5),"iq",AYB(AHm),"J",AYC(AVm)],AGa,0,BK,[],4,0,0,0,["c",AYE(ANW),"J",AYC(AL0)],AEh,0,BK,[],0,0,0,0,["c",AYE(AP2),"J",AYC(ALQ)],AAz,0,BK,[],0,0,0,0,["c",AYE(AM1),"J",AYC(AKa)],Hy,0,B3,
[],0,0,0,0,["c",AYE(AIC),"Q",AYC(ARi),"J",AYC(ARC)],AGh,0,Hy,[],0,0,0,0,["c",AYE(AKh),"cr",AYE(ATN),"cu",AYF(AIj),"b2",AYC(AO3)],ADk,0,Hy,[],0,0,0,0,["c",AYE(AOv)]]);
$rt_metadata([Pz,0,GG,[It],0,3,0,0,["mH",AYF(ALI),"lN",AYE(AJb),"iA",AYC(AJJ),"nf",AYD(ATb)],Ta,0,B6,[],0,0,0,0,["bA",AYD(AKC),"cr",AYE(AI3),"cu",AYF(AL5),"b2",AYC(AMF)],AAy,0,B6,[],0,0,0,0,["bA",AYD(AOD)],Of,0,B6,[],0,0,0,0,["bA",AYD(ASm)],Hx,0,B,[],4,0,0,ART,0,Nn,0,B6,[],0,0,0,0,["bA",AYD(ASt)],LA,0,B3,[],0,0,0,0,["Q",AYC(AQh),"c",AYE(AJ9),"cr",AYE(AMD),"cu",AYF(AKK),"b2",AYC(AIh),"J",AYC(ATj)],LS,0,B3,[],0,0,0,0,["Q",AYC(AJH),"c",AYE(AHO),"cr",AYE(AQG),"cu",AYF(ASk),"b2",AYC(AKD),"J",AYC(AQT)],D5,0,B6,[],
0,0,0,0,["bA",AYD(ARD),"cr",AYE(APv),"cu",AYF(AJG),"b2",AYC(ARp)],WU,0,E0,[],0,0,0,0,["ic",AYC(AJS),"t5",AYD(ARw)],WV,0,E0,[],0,0,0,0,["ic",AYC(ASG),"t5",AYD(AUF)],AFg,0,B,[],0,0,0,0,0,AAS,0,B,[],0,0,0,0,0,Lw,0,Bc,[],0,0,0,0,["D",AYB(ADs)],KD,0,Bc,[],0,0,0,0,["D",AYB(AD$)],AE_,0,Bc,[],0,0,0,0,["D",AYB(AR$)],AFG,0,Bc,[],0,0,0,0,["D",AYB(ATl)],AFK,0,Bc,[],0,0,0,0,["D",AYB(ALg)],Lp,0,Bc,[],0,0,0,0,["D",AYB(ABT)],L$,0,Lp,[],0,0,0,0,["D",AYB(ACS)],AHc,0,Bc,[],0,0,0,0,["D",AYB(AMC)],M$,0,L$,[],0,0,0,0,["D",AYB(AAv)],ADJ,
0,M$,[],0,0,0,0,["D",AYB(AOZ)],AD3,0,Bc,[],0,0,0,0,["D",AYB(AKv)],ACh,0,Bc,[],0,0,0,0,["D",AYB(AOW)],AB3,0,Bc,[],0,0,0,0,["D",AYB(AUK)],AFP,0,Bc,[],0,0,0,0,["D",AYB(APE)],AHl,0,Bc,[],0,0,0,0,["D",AYB(AHG)],AFh,0,Bc,[],0,0,0,0,["D",AYB(AM4)],AE2,0,Bc,[],0,0,0,0,["D",AYB(ARK)],AF4,0,Bc,[],0,0,0,0,["D",AYB(AKs)],ABa,0,Bc,[],0,0,0,0,["D",AYB(AKS)],AAL,0,Bc,[],0,0,0,0,["D",AYB(AUA)],AFo,0,Bc,[],0,0,0,0,["D",AYB(AHu)],AFA,0,Bc,[],0,0,0,0,["D",AYB(AN0)],ACJ,0,Bc,[],0,0,0,0,["D",AYB(AK2)],AD8,0,Bc,[],0,0,0,0,["D",AYB(AL9)],AGW,
0,Bc,[],0,0,0,0,["D",AYB(AN2)],AFz,0,Bc,[],0,0,0,0,["D",AYB(ATG)],ADg,0,Bc,[],0,0,0,0,["D",AYB(AQ6)],ACH,0,Bc,[],0,0,0,0,["D",AYB(APw)],AHi,0,Bc,[],0,0,0,0,["D",AYB(ARZ)],J3,0,Bc,[],0,0,0,0,["D",AYB(AD5)],AF7,0,J3,[],0,0,0,0,["D",AYB(APj)],ADO,0,Lw,[],0,0,0,0,["D",AYB(AIY)],ACC,0,KD,[],0,0,0,0,["D",AYB(AMp)],AB8,0,Bc,[],0,0,0,0,["D",AYB(AOi)],ACx,0,Bc,[],0,0,0,0,["D",AYB(AUn)],ADA,0,Bc,[],0,0,0,0,["D",AYB(ALM)],ADK,0,Bc,[],0,0,0,0,["D",AYB(AHv)]]);
$rt_metadata([ACb,0,B,[],4,0,0,0,0,ABB,0,B,[],4,3,0,0,0,Op,0,B,[],0,3,0,0,0,AFu,0,B,[],0,3,0,0,0,ADc,0,B,[],4,3,0,0,0,M4,0,Bu,[],0,3,0,0,0,ABQ,0,B,[Eg],0,3,0,0,0,Po,0,B,[Z],0,3,0,0,["g",AYC(AUB)],Qd,0,B,[Z],0,3,0,0,["g",AYC(AMV)],YI,0,B,[Z],0,3,0,0,["g",AYC(AQE)],AA9,0,B,[],0,3,0,0,0,Z6,0,B,[Z],0,3,0,0,["g",AYC(APW)],AD4,0,Hw,[],0,3,0,0,0,Sd,0,B,[],3,3,0,0,0,UW,0,B,[Z],0,3,0,0,0,Wh,0,B,[Z],0,3,0,0,0,Ya,0,X,[],0,0,0,0,["l",AYC(ALm)],X$,0,X,[],0,0,0,0,["l",AYC(AH7)],PU,0,X,[],0,0,0,0,["l",AYC(AN8),"cM",AYB(AMb)],P2,
0,X,[],0,0,0,0,["l",AYC(ARI)],P0,0,X,[],0,0,0,0,["l",AYC(ASs)],P1,0,X,[],0,0,0,0,["l",AYC(AOC)],P5,0,X,[],0,0,0,0,["l",AYC(AKX)],P6,0,X,[],0,0,0,0,["l",AYC(AHn)],P3,0,X,[],0,0,0,0,["l",AYC(AMg)],P4,0,X,[],0,0,0,0,["l",AYC(AOG)],P8,0,X,[],0,0,0,0,["l",AYC(ATR)],P9,0,X,[],0,0,0,0,["l",AYC(AKo)],PT,0,X,[],0,0,0,0,["l",AYC(AVY)],QM,0,X,[],0,0,0,0,["l",AYC(AMm)],PR,0,X,[],0,0,0,0,["l",AYC(AKm)],PS,0,X,[],0,0,0,0,["l",AYC(ALX)],PX,0,X,[],0,0,0,0,["l",AYC(ANq)],PQ,0,X,[],0,0,0,0,["l",AYC(ATt)],PV,0,X,[],0,0,0,0,["l",
AYC(AJe)],PW,0,X,[],0,0,0,0,["l",AYC(AQS)],MA,0,B,[],3,3,0,0,0,TX,0,B,[MA],4,3,0,0,0,ADQ,0,B,[FS],0,3,0,0,0,C2,0,B,[],3,3,0,AFN,0,Cn,0,Co,[],12,3,0,AEQ,0,DI,0,B,[],3,3,0,AIt,0,XK,0,B,[],0,3,0,0,0,WZ,0,B,[Z],0,3,0,0,["g",AYC(AOk)],N4,0,GV,[],0,0,0,0,["cr",AYE(ALO),"cu",AYF(AVL),"fU",AYB(AJ7)],R4,0,Bu,[],0,3,0,0,0,Zh,0,Bu,[],0,3,0,0,0,WO,0,F6,[],0,3,0,0,0,RP,0,F6,[],0,3,0,0,0,AFv,0,B,[Eg],0,0,0,0,0]);
$rt_metadata([WF,0,B,[],0,3,0,0,0,ACL,0,B,[Sd],0,3,0,0,0,Ps,0,B,[Bk],0,3,0,0,0,VD,0,B,[Z],0,3,0,0,0,VG,0,B,[Z],0,3,0,0,0,AFj,0,B,[],3,3,0,0,0,AA4,0,B,[],0,3,0,0,0,TO,0,B,[If],0,3,0,0,0,WK,0,B,[MA],0,0,0,0,0,Oz,0,B,[Bk],0,3,0,0,["o",AYB(AS0)],Zo,0,B,[Z],0,3,0,0,["g",AYC(AVE)],WL,0,B,[Eg],0,3,0,0,["X",AYC(AOQ)],WM,0,B,[Gs],0,3,0,0,["o$",AYD(AHC)],OH,0,B,[Eg],0,3,0,0,["X",AYC(AUr)],OF,0,B,[Gs],0,3,0,0,["o$",AYD(AUc)],Uz,0,X,[],0,0,0,0,["l",AYC(AT5)],Nz,0,X,[],0,0,0,0,["l",AYC(AIX)],Tq,0,X,[],0,0,0,0,["l",AYC(AIH)],Tp,
0,X,[],0,0,0,0,["l",AYC(ALK)],YG,0,X,[],0,0,0,0,["l",AYC(ANd)],QA,0,X,[],0,0,0,0,["l",AYC(AT8)],Pu,0,X,[],0,0,0,0,["l",AYC(AQd)],St,0,X,[],0,0,0,0,["l",AYC(ARS)],Nt,0,X,[],0,0,0,0,["l",AYC(AVk)],Nx,0,X,[],0,0,0,0,["l",AYC(AKJ)],O1,0,X,[],0,0,0,0,["l",AYC(AUg)],Q4,0,X,[],0,0,0,0,["l",AYC(AOU)],Ra,0,X,[],0,0,0,0,["l",AYC(ARg)],U7,0,X,[],0,0,0,0,["l",AYC(ATS)],TY,0,X,[],0,0,0,0,["l",AYC(AUV)],NQ,0,X,[],0,0,0,0,["l",AYC(AKt)],MU,0,X,[],0,0,0,0,["l",AYC(AQf)],Tj,0,MU,[],0,0,0,0,["l",AYC(ASW)],ABt,0,B,[Z],0,0,0,0,
0,RD,0,B,[Jp],0,3,0,0,["sy",AYB(AOq)],Xh,0,B,[BZ],0,3,0,0,["bc",AYC(AQ9)],Xk,0,B,[BZ],0,3,0,0,["bc",AYC(APJ)],UX,0,B,[BZ],0,3,0,0,["bc",AYC(AMy)],U0,0,B,[BZ],0,3,0,0,["bc",AYC(AHX)],V4,0,B,[BZ],0,3,0,0,["bc",AYC(AOm)],ZQ,0,B,[Z],0,3,0,0,["g",AYC(ASf)],ZS,0,B,[Z],0,3,0,0,["g",AYC(APk)],ZT,0,B,[Z],0,3,0,0,["g",AYC(APO)],ABn,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.OT=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
BA.prototype.valueOf=BA.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AJC(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CH=Long_add;var Iy=Long_sub;var Ca=Long_mul;var AFm=Long_div;var AHY=Long_rem;var AWD=Long_or;var C0=Long_and;var A2x=Long_xor;var GR=Long_shl;var AWX=Long_shr;var F0=Long_shru;var A2y=Long_compare;var H$=Long_eq;var A2z=Long_ne;var AWy=Long_lt;var AK7=Long_le;var A2A=Long_gt;var A2B=Long_ge;var A2C=Long_not;var AXf=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(AXl);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Ve.prototype;c.f=c.bc;c=Vc.prototype;c.f=c.bc;c=Od.prototype;c.f=c.bc;c=ADM.prototype;c.get=c.AA;Object.defineProperty(c,"length",{get:c.JM});c=O3.prototype;c.f=c.bc;c=AA1.prototype;c.removeEventListener=c.GE;c.dispatchEvent=c.Et;c.get=c.AA;c.addEventListener=c.CH;Object.defineProperty(c,"length",{get:c.ED});c=Qs.prototype;c.accept=c.xn;c=Qt.prototype;c.accept=c.xn;c=Xc.prototype;c.onAnimationFrame=c.GH;c=Xa.prototype;c.f=c.w7;c=W9.prototype;c.handleEvent=c.cl;c=W$.prototype;c.f=c.bc;c=Yj.prototype;c.handleEvent
=c.cl;c=Yk.prototype;c.handleEvent=c.cl;c=Yl.prototype;c.handleEvent=c.cl;c=Ym.prototype;c.handleEvent=c.cl;c=Yn.prototype;c.handleEvent=c.cl;c=Yo.prototype;c.handleEvent=c.cl;c=Yp.prototype;c.handleEvent=c.cl;c=Yq.prototype;c.handleEvent=c.cl;c=Yr.prototype;c.handleEvent=c.cl;c=Ys.prototype;c.handleEvent=c.cl;c=Z2.prototype;c.handleEvent=c.cl;c=Z3.prototype;c.handleEvent=c.cl;c=Z4.prototype;c.handleEvent=c.cl;c=Z5.prototype;c.handleEvent=c.cl;c=VV.prototype;c.handleEvent=c.cl;c=Zz.prototype;c.f=c.bc;c=ZA.prototype;c.f
=c.bc;c=Om.prototype;c.f=c.bc;c=Ol.prototype;c.f=c.bc;c=Oj.prototype;c.f=c.bc;c=Oi.prototype;c.f=c.bc;c=OW.prototype;c.accept=c.xn;c=NC.prototype;c.f=c.bc;c=NF.prototype;c.f=c.bc;c=ND.prototype;c.f=c.bc;c=QL.prototype;c.f=c.w7;c=QJ.prototype;c.f=c.w7;c=SB.prototype;c.f=c.bc;c=V8.prototype;c.f=c.bc;c=NB.prototype;c.f=c.bc;c=Zv.prototype;c.f=c.bc;c=Zu.prototype;c.f=c.bc;c=YB.prototype;c.f=c.bc;c=YA.prototype;c.f=c.bc;c=Zq.prototype;c.handleEvent=c.cl;c=RQ.prototype;c.f=c.bc;c=Nw.prototype;c.onTimer=c.sy;c=Ni.prototype;c.onTimer
=c.sy;c=Zt.prototype;c.f=c.bc;c=Y9.prototype;c.f=c.bc;c=VF.prototype;c.f=c.bc;c=RD.prototype;c.onTimer=c.sy;c=Xh.prototype;c.f=c.bc;c=Xk.prototype;c.f=c.bc;c=UX.prototype;c.f=c.bc;c=U0.prototype;c.f=c.bc;c=V4.prototype;c.f=c.bc;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);