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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.dZ=f;}
function $rt_cls(cls){return TU(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gv(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cf.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AUo(t);}
function $rt_throwableCause(t){return A3w(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A8V());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IC();}
function $rt_setThread(t){return ATI(t);}
function $rt_createException(message){return A8W(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A8X());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BP=$rt_compare;var A8Y=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var Jv=$rt_isInstance;var A8Z=$rt_nativeThread;var A80=$rt_suspending;var A81=$rt_resuming;var A82=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var Bc=$rt_imul;var E5=$rt_wrapException;var A83=$rt_checkBounds;var A84=$rt_checkUpperBound;var A85=$rt_checkLowerBound;var A86=$rt_wrapFunction0;var A87=$rt_wrapFunction1;var A88=$rt_wrapFunction2;var A89=$rt_wrapFunction3;var A8$=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AKv=$rt_createCharArrayFromData;var A6Z=$rt_createByteArrayFromData;var A7w=$rt_createShortArrayFromData;var D4=$rt_createIntArrayFromData;var A8_=$rt_createBooleanArrayFromData;var A9a=$rt_createFloatArrayFromData;var A9b=$rt_createDoubleArrayFromData;var AJP=$rt_createLongArrayFromData;var A8U=$rt_createBooleanArray;var DR=$rt_createByteArray;var A9c=$rt_createShortArray;var B6=$rt_createCharArray;var BQ=$rt_createIntArray;var A9d=$rt_createLongArray;var AM2=$rt_createFloatArray;var A9e
=$rt_createDoubleArray;var BP=$rt_compare;var A9f=$rt_castToClass;var A9g=$rt_castToInterface;var A9h=Long_toNumber;var Bq=Long_fromInt;var A9i=Long_fromNumber;var D=Long_create;var FU=Long_ZERO;var A9j=Long_hi;var G5=Long_lo;
function B(){this.$id$=0;}
function BG(a){return TU(a.constructor);}
function AR_(a,b){return a!==b?0:1;}
function AFS(a){var b,c,d,e,f,g,h,i,j;b=M1(a);if(!b)c=C(0);else{d=(((32-X7(b)|0)+4|0)-1|0)/4|0;e=B6(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Iz((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gv(e);}j=new J;L(j);H(H(j,C(1)),c);return K(j);}
function M1(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ARr(a){var b,c,d;if(!Jv(a,Eb)&&a.constructor.$meta.item===null){b=new U7;X(b);N(b);}b=AM9(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Sv(){var a=this;B.call(a);a.Ct=0;a.qS=null;}
function A8h(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AL5();AJo();AGZ();AHK();AI6();AKd();AG9();AFo();AFk();AGB();AIv();AJn();ALB();AHw();AKL();AKh();AH_();AHq();AKp();AMk();AG_();AJV();AGD();ALJ();ALa();AJF();AIY();ALG();ALh();AIq();c=(AFC()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Y1(C(2),C(3));else{d=new Sv;BF(d);e=new ACm;e.Be=d;f=new Xu;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new P1;j.y$
=i;j.y_=g;j.za=6;j.zb=e;j.y7=f;k=Bw(j,"f");i.onmessage=k;h=h+1|0;}l=I(Mn,[Fi(C(4),C(5),300),Fi(C(6),C(7),300),Fi(C(8),C(5),400),Fi(C(9),C(7),400),Fi(C(10),C(5),600),Fi(C(11),C(7),600),Fi(C(12),C(5),700),Fi(C(13),C(7),700)]);m=P(Mn,1);m.data[0]=AUW(C(14),FF(C(15),C(16)),C(5),400);b=(Mk(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.uV;f=c.t3;i=new J;L(i);Br(H(H(i,C(17)),f),41);i=K(i);f=c.t0;o=c.sv;c=AZM($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BF(d);c=new ACn;c.BO=d;g=new ACl;e.then(Bw(c,"f"),Bw(g,"f"));}}
function AHQ(b){var c,d,e,f,g,h,i,j;c=new ABm;d=new U6;d.yX=c;c.uB=d;d=new U4;d.CB=c;c.oR=d;e=new U5;e.Az=c;c.v_=new $rt_globals.ResizeObserver(Bw(e,"f"));d=new U3;d.rZ=c;c.xO=d;c.lL=1;d=new AA8;d.mN=new Ul;e=new YZ;e.Ey=null;e.mF=A9k;d.sZ=e;BF(e);f=new AA$;f.AP=e;d.Cv=f;d.BX=b;g=b.length;h=0;while(h<g){e=b[h];i=new AA_;i.z0=d;i.zZ=h;f=Bw(i,"f");e.onmessage=f;e=b[h];f=AKJ();e.postMessage(f);h=h+1|0;}d.iK=0;d.pM=BQ(g);c.Cd=d;c.q$=(ED()).getElementById("canvasDiv");d=AFC();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eA=d;c.q$.appendChild(d);b=c.eA;d=ATg(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Y1(C(2),C(18));else{c.qg=A75(c.eA,c.oR);b=new UW;j=c.oR;AL4(b,e,new ACS,1,2.25,0.625);b.Ew=new ACR;b.D7=j;c.h2=b;AT3(c.v_,c.eA,AXf());d=$rt_globals.window;j=c.xO;d.addEventListener("resize",Bw(j,"handleEvent"));j=new O$;b=c.h2;d=c.qg.cA;j.R=b;j.n=d;j.bG=c;d=$rt_str($rt_globals.window.location.hash);if(Bk(C(19),d)){b=new PE;Er(b,j);d=$rt_globals.fetch("test.wasm");j
=new XC;d=d.then(Bw(j,"f"));j=new XB;e=d.then(Bw(j,"f"));j=new Xz;d=new Xy;e.then(Bw(j,"f"),Bw(d,"f"));}else b=Bk(C(20),d)?A70(j):(A4r(M(d)<=0?C(21):DB(d,1))).bb(j);c.gU=b;TG(c);}c.eA.focus();}
var Xt=G(0);
var W6=G(0);
function ADP(){var a=this;B.call(a);a.nj=null;a.wb=null;a.dR=null;}
function TU(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ADP;c.dR=b;d=c;b.classObject=d;}return c;}
function J$(a){if(a.nj===null)a.nj=AH8(a.dR);return a.nj;}
function HO(a){var b,c,d,e;b=a.wb;if(b===null){if(AMB(a.dR)===null?0:1){b=HO(H7(a));c=new J;L(c);H(H(c,b),C(22));b=K(c);}else{b=a.dR.$meta.enclosingClass;if((b===null?null:TU(b))!==null){b=$rt_str(a.dR.$meta.simpleName);if(b===null)b=C(21);}else{b=AH8(a.dR);d=Sm(b,36);if(d==(-1)){e=Sm(b,46);if(e!=(-1))b=DB(b,e+1|0);}else{b=DB(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(21);}}}a.wb=b;}return b;}
function I8(a){return a.dR.$meta.primitive?1:0;}
function H7(a){return TU(AMB(a.dR));}
var AJZ=G();
function Bw(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fn(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AJN=G();
function AM9(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ALu(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ALu(d[e],c))return 1;e=e+1|0;}return 0;}
function ASN(b){var c='$$enumConstants$$';Hl[c]=ANm;En[c]=AM1;Ig[c]=ARO;Cs[c]=AGK;Cv[c]=AKV;HX[c]=AT$;EA[c]=AW0;GY[c]=AJv;CC[c]=AL3;ASN=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return ASN(b);}
function AMB(b){return b.$meta.item;}
function AH8(b){return $rt_str(b.$meta.name);}
function Hb(){var a=this;B.call(a);a.i6=null;a.nJ=null;a.k4=0;a.ln=0;}
function A9l(){var a=new Hb();X(a);return a;}
function A9m(a){var b=new Hb();Bp(b,a);return b;}
function X(a){a.k4=1;a.ln=1;}
function Bp(a,b){a.k4=1;a.ln=1;a.i6=b;}
function AZB(a){return a;}
function AUo(a){return a.i6;}
function A3w(a){var b;b=a.nJ;if(b===a)b=null;return b;}
var EE=G(Hb);
function A9n(){var a=new EE();AHE(a);return a;}
function AHE(a){X(a);}
var Bt=G(EE);
function A8W(a){var b=new Bt();A40(b,a);return b;}
function A40(a,b){Bp(a,b);}
var AKO=G(Bt);
var CZ=G(0);
var CG=G(0);
var KD=G(0);
function BB(){var a=this;B.call(a);a.cf=null;a.kp=0;}
var A9o=null;var A9p=null;var A9q=null;function Fm(){Fm=Bm(BB);AVp();}
function AQo(){var a=new BB();AFm(a);return a;}
function Gv(a){var b=new BB();JL(b,a);return b;}
function EK(a,b,c){var d=new BB();O3(d,a,b,c);return d;}
function AFm(a){Fm();a.cf=A9o;}
function JL(a,b){Fm();O3(a,b,0,b.data.length);}
function O3(a,b,c,d){var e;Fm();e=B6(d);a.cf=e;C_(b,c,e,0,d);}
function MR(b){var c;Fm();c=AQo();c.cf=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.cf.data;if(b<c.length)return c[b];}d=new Iv;X(d);N(d);}
function M(a){return a.cf.data.length;}
function GF(a){return a.cf.data.length?0:1;}
function Rq(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C_(a.cf,b,d,e,c);return;}}g=new BJ;X(g);N(g);}
function ON(a,b){var c,d,e;if(a===b)return 0;c=Be(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ACM(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function NS(a,b){if(a===b)return 1;return ACM(a,b,0);}
function DH(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Kg(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cf.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=J_(b);h=Jw(b);while(true){f=a.cf.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function HF(a,b,c){var d,e,f,g,h;d=Be(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cf.data[d]==e)break;d=d+(-1)|0;}return d;}f=J_(b);g=Jw(b);while(true){if(d<1)return (-1);h=a.cf.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Sm(a,b){return HF(a,b,M(a)-1|0);}
function Zn(a,b,c){var d,e,f;d=Bd(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A2k(a,b){return Zn(a,b,0);}
function Rm(a,b,c){var d,e;d=Be(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AGG(a,b){return Rm(a,b,M(a));}
function Cw(a,b,c){var d,e;d=BP(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d){Fm();return A9p;}if(!b&&c==M(a))return a;return EK(a.cf,b,c-b|0);}
function DB(a,b){return Cw(a,b,M(a));}
function Rw(a,b,c){return Cw(a,b,c);}
function FF(a,b){var c,d,e,f,g,h;if(GF(b))return a;if(GF(a))return b;c=B6(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return MR(c);}
function ADc(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Br(d,Q(a,f));}f=f+1|0;}H(d,DB(a,f));return K(d);}
function AAQ(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cw(a,b,c+1|0);}
function AOl(a){return a;}
function GH(a){var b,c,d,e,f;b=a.cf.data;c=B6(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){Fm();return b===null?C(23):b.K();}
function NY(b){var c,d;Fm();c=new BB;d=B6(1);d.data[0]=b;JL(c,d);return c;}
function Dn(b){var c;Fm();c=new J;L(c);return K(V(c,b));}
function Bk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BB))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function Kh(a){var b,c,d,e;a:{if(!a.kp){b=a.cf.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kp=(31*a.kp|0)+e|0;d=d+1|0;}}}return a.kp;}
function MB(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gd;Bp(b,C(24));N(b);}A9r=1;d=new AAp;d.m$=P(C5,10);d.h9=(-1);d.fW=(-1);d.bD=(-1);e=new Hi;e.fz=1;e.bV=b;e.bk=B6(M(b)+2|0);C_(GH(b),0,e.bk,0,M(b));f=e.bk.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.As=g;e.ho=0;F2(e);F2(e);d.l=e;d.d$=0;d.nT=Wx(d,(-1),0,null);if(!DJ(d.l)){b=new Kz;h=d.l;M_(b,C(21),h.bV,h.dB);N(b);}if(d.ru)d.nT.e0();b=BN();h=new ABc;h.kI=(-1);h.pA=(-1);h.Dn=d;h.BQ=d.nT;h.l1=a;h.kI=0;g=M(a);h.pA=g;e=new ADd;i=h.kI;j=d.h9;k=d.fW+1|0;l=d.bD
+1|0;e.jc=(-1);m=j+1|0;e.r7=m;e.ej=BQ(m*2|0);f=BQ(l);e.lh=f;JQ(f,(-1));if(k>0)e.pW=BQ(k);JQ(e.ej,(-1));AEV(e,a,i,g);h.cR=e;e.gO=1;n=0;m=0;if(!M(a)){f=P(BB,1);f.data[0]=C(21);}else{while(true){l=M(h.l1);if(!AFx(h))l=h.pA;e=h.cR;if(e.eX>=0&&AGx(e)==1){e=h.cR;e.eX=M0(e);if(M0(h.cR)==AHJ(h.cR)){e=h.cR;e.eX=e.eX+1|0;}g=h.cR.eX;g=g<=l&&Pf(h,g)?1:0;}else g=Pf(h,h.kI);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;Bz(b,Rw(a,m,AIM(h)));m=AKe(h);n=g;}a:{Bz(b,Rw(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BI(b,
g)))break a;EV(b,g);}}if(g<0)g=0;f=GB(b,P(BB,g));}return f;}
function APW(a,b){return ON(a,b);}
function AVp(){A9o=B6(0);A9p=AQo();A9q=new Tq;}
var FJ=G(Hb);
var IA=G(FJ);
var AKr=G(IA);
var DG=G();
function HS(){DG.call(this);this.br=0;}
var A9s=null;var A9t=null;function A4n(a){var b=new HS();AF_(b,a);return b;}
function AF_(a,b){a.br=b;}
function Id(b){return (XN(A8M(20),b,10)).K();}
function K6(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dy;Bp(b,C(25));N(b);}d=M(b);if(0==d){b=new Dy;Bp(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dy;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=YV(Q(b,f));if(i<0){j=new Dy;k=Cw(b,0,d);b=new J;L(b);H(H(b,C(27)),k);Bp(j,K(b));N(j);}if(i>=c){j=new Dy;l=Cw(b,0,d);b=new J;L(b);H(H(V(H(b,C(28)),c),C(29)),l);Bp(j,K(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dy;k=Cw(b,0,d);b=new J;L(b);H(H(b,C(30)),k);Bp(j,K(b));N(j);}b=new Dy;j=new J;L(j);V(H(j,C(31)),c);Bp(b,K(j));N(b);}
function C3(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A9t===null){A9t=P(HS,256);c=0;while(true){d=A9t.data;if(c>=d.length)break a;d[c]=A4n(c-128|0);c=c+1|0;}}}return A9t.data[b+128|0];}return A4n(b);}
function AVL(a){return Id(a.br);}
function A5C(a,b){if(a===b)return 1;return b instanceof HS&&b.br==a.br?1:0;}
function X7(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Jl(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A01(a,b){b=b;return BP(a.br,b.br);}
function AL5(){A9s=F($rt_intcls());}
function G7(){var a=this;B.call(a);a.D=null;a.I=0;}
function A9u(){var a=new G7();L(a);return a;}
function A8M(a){var b=new G7();F3(b,a);return b;}
function L(a){F3(a,16);}
function F3(a,b){a.D=B6(b);}
function XN(a,b,c){return AKE(a,a.I,b,c);}
function AKE(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=Iz(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=Iz($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ALj(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BP(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A9v;ALb(c,f);d=f.nr;g=f.nf;h=f.rB;i=1;j=1;if(h)j=2;k=9;l=AUX(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AJ8(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BP(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A9w;AGT(c,f);g=f.nU;h=f.m3;i=f.rq;j=1;k=1;if(i)k=2;l=18;m=ATv(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Co(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(APn(p,FU))d=0;else{d=G5(AHR(g,p));g=AXb(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AHR(p,Bq(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AUX(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ATv(b){var c,d,e,f,g;c=Bq(1);d=0;e=16;f=A9x.data;g=f.length-1|0;while(g>=0){if(I1(AXb(b,Ck(c,f[g])),FU)){d=d|e;c=Ck(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Br(a,b){return a.qx(a.I,b);}
function AEN(a,b,c){Co(a,b,b+1|0);a.D.data[b]=c;return a;}
function Nj(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.D=K3(a.D,d);}
function K(a){return EK(a.D,0,a.I);}
function AEv(a,b,c,d){return a.qf(a.I,b,c,d);}
function Xn(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Kk(a,b){return a.pF(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.ki((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var J2=G(0);
var J=G(G7);
function Ms(){var a=new J();A5r(a);return a;}
function A51(a){var b=new J();AXe(b,a);return b;}
function A5r(a){L(a);}
function AXe(a,b){var c,d;a.D=B6(M(b));c=0;while(true){d=a.D.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.I=M(b);}
function H(a,b){MU(a,a.I,b===null?C(23):b.K());return a;}
function BL(a,b){MU(a,a.I,b);return a;}
function V(a,b){XN(a,b,10);return a;}
function HY(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(A6F(b,FU)){d=0;b=A8g(b);}a:{if(DM(b,Bq(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=Iz(G5(b),10);}else{g=1;h=Bq(1);i=Dh(Bq(-1),Bq(10));b:{while(true){j=Ck(h,Bq(10));if(DM(j,b)>0){j=h;break b;}g=g+1|0;if(DM(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(I1(j,FU))break a;e=a.D.data;c=f+1|0;e[f]=Iz(G5((Dh(b,j))),10);b=AJr(b,j);j=Dh(j,Bq(10));f=c;}}}return a;}
function De(a,b){ALj(a,a.I,b);return a;}
function AFh(a,b){Br(a,b);return a;}
function Lp(a,b){var c;c=M(b);ACF(a,a.I,b,0,c);return a;}
function JP(a,b){MU(a,a.I,!b?C(32):C(33));return a;}
function AIz(a,b,c){var d,e,f,g,h,i;d=BP(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Iv;X(i);N(i);}
function VD(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Iv;X(f);N(f);}
function A0X(a,b,c,d,e){Xn(a,b,c,d,e);return a;}
function APb(a,b,c,d){AEv(a,b,c,d);return a;}
function ACF(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Co(a,b,(b+e|0)-d|0);while(d<e){f=a.D.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BJ;X(c);N(c);}
function AJG(a){return a.I;}
function Ek(a){return K(a);}
function ARq(a,b){Nj(a,b);}
function A1g(a,b,c){AEN(a,b,c);return a;}
function MU(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(23);else if(GF(c))break a;Nj(a,a.I+M(c)|0);d=a.I-1|0;while(d>=b){a.D.data[d+M(c)|0]=a.D.data[d];d=d+(-1)|0;}a.I=a.I+M(c)|0;d=0;while(d<M(c)){e=a.D.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new Iv;X(c);N(c);}
var Fa=G(IA);
var ALx=G(Fa);
function A9y(a){var b=new ALx();AOp(b,a);return b;}
function AOp(a,b){Bp(a,b);}
var AKm=G(Fa);
function A9z(a){var b=new AKm();AOA(b,a);return b;}
function AOA(a,b){Bp(a,b);}
var ACc=G(0);
var Dr=G(0);
function BY(b,c){if(b!==null)b.b1();return c;}
var YT=G(0);
function Kv(){var a=this;B.call(a);a.jz=0;a.og=0;a.nH=0;}
var A9A=0;function EI(a){A9A=A9A-1|0;}
function HH(a,b,c){KU(a,AJ5(b,c,400,0));}
function Lx(a,b){return LJ(a,b,0.875);}
function LJ(a,b,c){return Et(a,b)+c|0;}
function AAF(){var a=this;Kv.call(a);a.jo=null;a.di=null;a.xE=null;}
function EZ(a){var b,c,d;b=a.di;c=a.og;d=a.nH;b.clearRect(0.0,0.0,c,d);}
function AAY(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.di;d="center";c.textAlign=d;break a;case 2:c=a.di;d="right";c.textAlign=d;break a;default:break a;}d=a.di;c="left";d.textAlign=c;}}
function Cq(a,b){KU(a,b.rg);}
function KU(a,b){var c;if(a.xE!==b){c=a.di;a.xE=b;c.font=b;}}
function AJ5(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.di;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Et(a,b){var c;c=$rt_ustr(b);return a.di.measureText(c).width;}
function Ko(a,b,c,d){var e,f;e=a.di;f=$rt_ustr(Gv(AKv([35,H9(b/16|0),H9(b%16|0),H9(c/16|0),H9(c%16|0),H9(d/16|0),H9(d%16|0)])));e.fillStyle=f;}
function AX2(){return {alpha:false};}
var AJp=G();
var AL_=G();
function BR(b,c){if(b===c)return 1;return b!==null?b.bN(c):c!==null?0:1;}
function BF(b){if(b!==null)return b;b=new Gd;Bp(b,C(21));N(b);}
var BW=G(0);
function GC(b){return b;}
var Cg=G(0);
function ACm(){B.call(this);this.Be=null;}
function A5T(a,b){var c;c=a.Be;c.qS=b;if(c.Ct)AHQ(b);}
var AHv=G();
function I5(b,c){return b.data[c];}
var AK1=G();
var AFy=G(0);
function Fi(b,c,d){return AUW(C(34),FF(C(15),b),c,d);}
var ALY=G(0);
var AH2=G(0);
function Mk(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C0(b,f+g|0);C_(c,0,d,f,g);return d;}
function LN(b,c,d){C_(b,c,d,0,d.data.length);return d;}
function AAx(b,c,d){var e;if(c>0)C_(b,0,d,0,c);e=d.data.length;if(c<e)C_(b,c+1|0,d,c,e-c|0);return d;}
function AGC(b,c,d,e){var f;if(c>0)C_(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C_(b,d,e,c,f-d|0);}return e;}
function CO(b){var c;c=new Qh;c.kA=b;return c;}
function AF7(b,c){if(b.data.length!=c)b=C0(b,c);return b;}
function AH1(b,c,d){var e;e=c.data.length;if(e==d)c=C0(c,e*2|0);c.data[d]=b;return c;}
function AC9(b,c,d){var e;e=c.data.length;if(e==d)c=OJ(c,e*2|0);c.data[d]=b;return c;}
function OI(b){return K3(b,b.data.length);}
function Mn(){var a=this;B.call(a);a.uV=null;a.t3=null;a.t0=null;a.sv=0;}
function AUW(a,b,c,d){var e=new Mn();AUg(e,a,b,c,d);return e;}
function AUg(a,b,c,d,e){a.uV=b;a.t3=c;a.t0=d;a.sv=e;}
var AF2=G();
function AZM(b,c){return {style:b,weight:c};}
function ACn(){B.call(this);this.BO=null;}
function AMO(a,b){var c,d,e;c=a.BO;d=0;while(d<b.length){e=b[d];(ED()).fonts.add(e);d=d+1|0;}c.Ct=1;b=c.qS;if(b!==null)AHQ(b);}
var ACl=G();
function A4F(a,b){$rt_globals.console.info("font load error "+b);}
var L1=G();
var A9B=null;var A9C=null;function Bj(){if(A9B===null)A9B=ASB(A9D,0);return A9B;}
function DY(){if(A9C===null)A9C=ASB(A9E,0);return A9C;}
function A62(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ok(b)&&(e+f|0)<=Ok(d)){a:{b:{if(b!==d){g=H7(BG(b));h=H7(BG(d));if(g!==null&&h!==null){if(g===h)break b;if(!I8(g)&&!I8(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dR;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ALu(n.constructor,o)?1:0)){NX(b,c,d,e,j);b=new Jx;X(b);N(b);}j=j+1|0;k=m;}NX(b,c,d,e,f);return;}if(!I8(g))break a;if(I8(h))break b;else break a;}b=new Jx;X(b);N(b);}}NX(b,c,
d,e,f);return;}b=new Jx;X(b);N(b);}b=new BJ;X(b);N(b);}d=new Gd;Bp(d,C(35));N(d);}
function C_(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ok(b)&&(e+f|0)<=Ok(d)){NX(b,c,d,e,f);return;}b=new BJ;X(b);N(b);}
function NX(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EF(){return Long_fromNumber(new Date().getTime());}
function AHM(){return A9i($rt_globals.performance.now()*1000000.0);}
var AH0=G();
var AKf=G();
function Y1(b,c){var d,e,f;d=(ED()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(ED()).getElementById($rt_ustr(b)).appendChild(d);}
function AFC(){return (ED()).createElement("canvas");}
function AIE(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ATg(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AML=G();
var Xu=G();
function A2b(a,b){var c;c=new Bt;Bp(c,$rt_str(b.message));N(c);}
var AIc=G();
function FS(b){return $rt_str(b);}
var AJC=G();
function K3(b,c){var d,e,f,g;b=b.data;d=B6(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function OJ(b,c){var d,e,f,g;b=b.data;d=DR(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JB(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C0(b,c){var d,e,f,g;d=b.data;e=AHI(H7(BG(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AHB(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BL(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BL(c,C(37));V(c,e[d]);d=d+1|0;}BL(c,C(38));return K(c);}
function AUw(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BL(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BL(c,C(37));De(c,e[d]);d=d+1|0;}BL(c,C(38));return K(c);}
function AWD(b){var c,d,e,f;if(b===null)return C(23);c=new J;L(c);BL(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BL(c,C(37));f=e[d];AJ8(c,c.I,f);d=d+1|0;}BL(c,C(38));return K(c);}
function JQ(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BX;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AFW(b,c,d,e){var f,g;if(c>d){e=new BX;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Ll(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A9k;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qE(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ALk(b,c){return ACr(b,0,b.data.length,c);}
function ACr(b,c,d,e){var f,g,h,i,j;f=BP(c,d);if(f>0){g=new BX;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ADt=G(0);
var AKQ=G();
function AZ8(a,b){return a.OK(b);}
function AR7(a){return a.Sd();}
var AGR=G();
var Gt=G(0);
var Tq=G();
var BJ=G(Bt);
var ALf=G();
function Ok(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A9F());}return b.data.length;}
function AHI(b,c){if(b===null){b=new Gd;X(b);N(b);}if(b===F($rt_voidcls())){b=new BX;X(b);N(b);}if(c>=0)return AVR(b.dR,c);b=new AFb;X(b);N(b);}
function AVR(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gd=G(Bt);
var Jx=G(Bt);
function Do(){B.call(this);this.nd=0;}
var A9G=null;var A9H=null;var A9I=null;var A9J=null;var A9K=null;var A9L=null;var A9M=null;var A9N=null;var A9O=null;var A9P=null;function AWl(a){var b=new Do();AGr(b,a);return b;}
function AGr(a,b){a.nd=b;}
function P2(b){var c,d;c=A9L.data;if(b>=c.length)return AWl(b);d=c[b];if(d===null){d=AWl(b);A9L.data[b]=d;}return d;}
function Wc(b){var c,d;c=new BB;d=B6(1);d.data[0]=b;JL(c,d);return c;}
function MF(b){return b>=65536&&b<=1114111?1:0;}
function CX(b){return (b&64512)!=55296?0:1;}
function Dm(b){return (b&64512)!=56320?0:1;}
function OT(b){return !CX(b)&&!Dm(b)?0:1;}
function JK(b,c){return CX(b)&&Dm(c)?1:0;}
function EX(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function J_(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jw(b){return (56320|b&1023)&65535;}
function FW(b){return Hg(b)&65535;}
function Hg(b){if(A9J===null){if(A9M===null)A9M=ALF();A9J=AGE((A9M.value!==null?$rt_str(A9M.value):null));}return Te(A9J,b);}
function Fy(b){return He(b)&65535;}
function He(b){if(A9I===null){if(A9N===null)A9N=AL6();A9I=AGE((A9N.value!==null?$rt_str(A9N.value):null));}return Te(A9I,b);}
function Te(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BP(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ACZ(b,c){if(c>=2&&c<=36){b=YV(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function YV(b){var c,d,e,f,g,h,i,j,k,l;if(A9H===null){if(A9O===null)A9O=AKt();c=(A9O.value!==null?$rt_str(A9O.value):null);d=AUq(GH(c));e=Nq(d);f=BQ(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+PB(d)|0;j=j+PB(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A9H=f;}g=A9H.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BP(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Iz(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GE(b){var c;if(b<65536){c=B6(1);c.data[0]=b&65535;return c;}return AKv([J_(b),Jw(b)]);}
function CI(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&OT(b&65535))return 19;if(A9K===null){if(A9P===null)A9P=AI3();d=(A9P.value!==null?$rt_str(A9P.value):null);e=P(XG,16384);f=e.data;g=DR(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=NT(Q(d,l));if(m==64){l=l+1|0;m=NT(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,NT(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=NT(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=APU(k,k+i|0,OJ(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=APU(k,k+i|0,OJ(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A9K=C0(e,j);}e=A9K.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.ue)o=p+1|0;else{c=d.y8;if(b>=c)return d.zg.data[b-c|0];c=p-1|0;}}return 0;}
function K5(b){a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function H1(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CI(b)!=16?0:1;}
function Zf(b){switch(CI(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Sf(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Zf(b);}return 1;}
function AJo(){A9G=F($rt_charcls());A9L=P(Do,128);}
function ALF(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AL6(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AKt(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AI3(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var W1=G(0);
var ABe=G(0);
var E7=G(0);
var AJs=G();
function ED(){return $rt_globals.window.document;}
function A1S(a){return a.Jz();}
function A37(a,b){return a.Li($rt_str(b));}
function A3S(a,b){a.IM($rt_str(b));}
function AYT(a,b){return a.OV($rt_str(b));}
function AM7(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AO6(a){return a.SA();}
function A33(a,b,c){return a.Rl($rt_str(b),$rt_str(c));}
function ARb(a,b,c,d){a.DW($rt_str(b),Fn(c,"handleEvent"),d?1:0);}
function AXS(a){return a.Qa();}
function A2F(a){return !!a.LI();}
function A4B(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ASq(a){return a.IV();}
function AQQ(a,b){a.Rc($rt_str(b));}
function ASM(a){return !!a.ID();}
function AWI(a){return a.Lr();}
function ARF(a){return $rt_ustr(a.GF());}
function ANM(a,b){return a.I7(b?1:0);}
function A5F(a){return a.LH();}
function A0y(a,b,c){return a.Tb($rt_str(b),$rt_str(c));}
function ASj(a,b,c){return a.Pu(b,c?1:0);}
function AVU(a,b,c){return !!a.KU($rt_str(b),$rt_str(c));}
function AW9(a){return a.J6();}
function AQB(a){return $rt_ustr(a.MI());}
function APe(a,b){return !!a.FO(b);}
function AP6(a,b){return a.Na($rt_str(b));}
function A0H(a,b,c){return a.Jx($rt_str(b),$rt_str(c));}
function ARP(a){return a.NX();}
function AXV(a,b){return a.SG($rt_str(b));}
function AP5(a){return $rt_ustr(a.NB());}
function ATT(a){a.Iz();}
function AMU(a,b){return a.Te($rt_str(b));}
function AVi(a,b){return a.IR($rt_str(b));}
function AYf(a,b){return a.Ix($rt_str(b));}
function A4u(a){return $rt_ustr(a.N9());}
function AYm(a,b,c){return a.QQ(b,c);}
function A2S(a,b){return a.GE(b);}
function AUl(a){return a.KG();}
function ATb(a,b,c){a.Fj($rt_str(b),Fn(c,"handleEvent"));}
function ASU(a,b,c){return a.Hx(b,c);}
function AVc(a){return !!a.Sb();}
function AWj(a,b){return a.Js($rt_str(b));}
function A12(a,b,c,d){a.Dc($rt_str(b),Fn(c,"handleEvent"),d?1:0);}
function AO_(a){return a.KH();}
function AYE(a,b,c){return a.I6($rt_str(b),$rt_str(c));}
function AXx(a){return $rt_ustr(a.Op());}
function A5z(a){return a.NP();}
function AS$(a){return a.N2();}
function AXv(a){return a.KV();}
function ATc(a,b,c){a.FN($rt_str(b),Fn(c,"handleEvent"));}
function AY2(a,b){return a.Mt(b);}
function AQe(a,b){a.GZ($rt_str(b));}
function A3t(a){return $rt_ustr(a.Nu());}
function P1(){var a=this;B.call(a);a.y$=null;a.y_=null;a.za=0;a.zb=null;a.y7=null;}
function ATO(a,b){var c,d,e,f,g;c=a.y$;d=a.y_;e=a.za;f=a.zb;g=a.y7;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AKB=G();
function AUC(b){return Math.exp(b);}
function AJt(b){return Math.log(b);}
function JE(b,c){return A1p(b,c);}
function A1p(b,c){return Math.pow(b,c);}
function DV(){return AWv();}
function AWv(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AVV(b,c){return Math.max(b,c);}
function W8(b){if(b<0)b= -b|0;return b;}
function AQk(b){return Math.abs(b);}
var Y$=G(0);
var So=G(0);
var AAt=G(0);
var TR=G(0);
var AEA=G(0);
var AC0=G(0);
var AJX=G();
function A2j(a,b,c){a.FN($rt_str(b),Fn(c,"handleEvent"));}
function A0Z(a,b,c){a.Fj($rt_str(b),Fn(c,"handleEvent"));}
function AQD(a,b,c,d){a.Dc($rt_str(b),Fn(c,"handleEvent"),d?1:0);}
function AN3(a,b){return !!a.FO(b);}
function AZh(a,b,c,d){a.DW($rt_str(b),Fn(c,"handleEvent"),d?1:0);}
var BX=G(Bt);
var AFb=G(Bt);
var Iv=G(BJ);
var AJ_=G();
function AKJ(){return "ping";}
function AI0(b){return b===AKJ()?1:0;}
var Z3=G(0);
var YL=G(0);
function ABm(){var a=this;B.call(a);a.uB=null;a.oR=null;a.q$=null;a.eA=null;a.v_=null;a.xO=null;a.qg=null;a.h2=null;a.lL=0;a.Fs=0;a.Aj=null;a.gU=null;a.Cd=null;}
function Gw(a,b){var c;c=ED();b=$rt_ustr(b);c.title=b;}
function TG(a){a.Fs=$rt_globals.requestAnimationFrame(Bw(a.uB,"onAnimationFrame"));}
function JO(a){a.lL=1;}
function AB0(a,b,c){var d,e;a.qg.ex=BK(b,c);d=a.eA;e=b;d.width=e;d=a.eA;e=c;d.height=e;d=a.h2;Y(d.db,b,c);e=d.bc;d=d.db;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gU.ch(a.h2.db,LG(a));a.gU.bR();}
function AAE(a,b){var c,d,e;c=a.Aj;d=a.eA;if(BR(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.Aj=b;}
function Nf(a){return $rt_globals.performance.now()/1000.0;}
function LG(a){return $rt_globals.window.devicePixelRatio;}
function Go(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AFr(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AD$;d.CD=b;b=A9Q;c.then(Bw(d,"f"),Bw(b,"f"));}}
function GQ(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AFr(b,null);else{c=new AEM;d=$rt_globals.window.showOpenFilePicker();e=new AEL;e.tg=b;d.then(Bw(e,"f"),Bw(c,"f"));}}
function CL(a,b,c,d){var e,f,g,h;e=a.Cd;f=e.iK;if(f>0){g=e.pM.data;f=f-1|0;e.iK=f;Ub(e,b,c,d,g[f]);}else{h=e.mN;e=new AD_;e.vi=b;e.BB=c;e.A4=d;b=new Uc;b.rO=e;c=h.mM;b.Bu=c;if(c===null)h.pE=b;else c.u1=b;h.mM=b;h.b7=h.b7+1|0;h.lu=h.lu+1|0;}}
function Sb(a,b,c){var d,e;if(!Mi()){b=new Bt;Bp(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new AA3;e.tX=b;b=AMI(c);d.then(Bw(e,"f"),Bw(b,"f"));}}
function Ud(a,b,c,d){var e,f,g;if(!Mi()){b=new Bt;Bp(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=GH(b);A7h();b=A9R;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ADy;e.wk=c;c=AMI(d);b.then(Bw(e,"f"),Bw(c,"f"));}}
function Wo(a){return Mi()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AMI(b){var c;c=new Pi;c.Bb=b;return c;}
var BE=G(0);
var AKY=G();
var U=G(0);
var AKZ=G();
var AAy=G(0);
function U6(){B.call(this);this.yX=null;}
function A0x(a,b){var c,d;c=b;b=a.yX;if(!(!b.gU.cB(c/1000.0)&&!b.lL)){d=b.h2.db;if(Bc(d.a,d.b)){b.lL=0;b.gU.bR();}}TG(b);}
function U4(){B.call(this);this.CB=null;}
function DI(a){JO(a.CB);}
var ZT=G(0);
function U5(){B.call(this);this.Az=null;}
function APp(a,b,c){var d,e,f,g;c=a.Az;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eA){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=LG(c);AB0(c,GV(f.width*g),GV(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AB0(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AIl=G();
function AXf(){return {box:'device-pixel-content-box'};}
function AT3(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CE=G(0);
function U3(){B.call(this);this.rZ=null;}
function ATS(a,b){b=a.rZ;b.gU.ch(b.h2.db,LG(b));b.gU.bR();}
function AA8(){var a=this;B.call(a);a.mN=null;a.BX=null;a.sZ=null;a.pM=null;a.xU=0;a.iK=0;a.Cv=null;}
function Ub(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.xU+1|0;a.xU=f;g=a.sZ;h=C3(f);g.kk=OQ(g,g.kk,h);h=AC2(g,h);W4(h,b);W4(h,b);g.mI=g.mI+1|0;b=a.BX[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BB){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(Jv(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(Jv(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(Jv(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof LR)){if(!(c instanceof Os)){b=new BX;c=J$(BG(c));g=new J;L(g);H(H(g,C(40)),c);Bp(b,K(g));N(b);}c=c;e=j+1|0;g=c.iu;j;h[j]=g;f=e+1|0;c=P9(c.fN);e;h[e]=c;}else{c=c;g=c.ix;if(g===null){f=j+1|0;c=c.hp;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=P9(c.ih);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
var VF=G(0);
function AWR(a,b){var c;c=a.ca();while(c.cM()){b.g(c.cc());}}
var HJ=G(0);
function Mc(a){var b,c;b=new AA6;c=new RD;c.y6=a;b.Bo=c;return b;}
function A0N(a,b){var c,d;c=a.ca();d=0;while(c.cM()){if(b.G(c.cc())){c.pO();d=1;}}return d;}
var FM=G();
function EL(a){return a.cZ()?0:1;}
function GB(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=AHI(H7(BG(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B9(a);while(Cb(f)){g=b.data;h=e+1|0;g[e]=Cc(f);e=h;}return b;}
function A3H(a,b){var c;c=a.ca();while(c.cM()){if(BR(c.cc(),b)){c.pO();return 1;}}return 0;}
function GK(a,b){var c,d;c=0;d=b.ca();while(d.cM()){if(!a.p$(d.cc()))continue;c=1;}return c;}
var N0=G(0);
var M4=G(0);
function Ex(){FM.call(this);this.b7=0;}
function AT8(a,b){a.oQ(a.cZ(),b);return 1;}
function B9(a){var b;b=new XW;b.jA=a;b.qD=a.b7;b.lU=a.cZ();b.h5=(-1);return b;}
function ATr(a,b,c){var d,e;if(b>=0&&b<=a.cZ()){if(c.eN())return 0;d=c.ca();while(d.cM()){e=b+1|0;a.oQ(b,d.cc());b=e;}return 1;}c=new BX;X(c);N(c);}
function A4o(a,b,c){c=new DT;X(c);N(c);}
function A2R(a,b){var c;c=new DT;X(c);N(c);}
function Lr(a,b){var c,d;c=a.cZ();d=0;while(true){if(d>=c)return (-1);if(BR(b,a.iY(d)))break;d=d+1|0;}return d;}
function ASD(a,b){var c,d;if(!Jv(b,M4))return 0;c=b;if(a.p!=c.p)return 0;d=0;while(d<c.p){if(!BR(BI(a,d),BI(c,d)))return 0;d=d+1|0;}return 1;}
var MC=G(Ex);
var Pa=G(0);
var AEW=G(0);
function Ul(){var a=this;MC.call(a);a.pE=null;a.mM=null;a.lu=0;}
var LO=G(0);
function El(){var a=this;B.call(a);a.pr=null;a.py=null;}
var Eb=G(0);
var Wn=G(0);
var PA=G(0);
function YZ(){var a=this;El.call(a);a.kk=null;a.mF=null;a.Ey=null;a.mI=0;}
function AIr(a,b){var c;c=AC2(a,b);if(c===null)return null;a.kk=Ln(a,a.kk,b);a.mI=a.mI+1|0;return c.kK;}
function AC2(a,b){var c,d;c=a.kk;while(true){if(c===null)return null;d=Ng(a.mF,b,c.mh);if(!d)break;c=d>=0?c.b9:c.bZ;}return c;}
function OQ(a,b,c){var d,e;if(b===null){b=new K1;d=null;b.mh=c;b.kK=d;b.gZ=1;b.g8=1;return b;}e=Ng(a.mF,c,b.mh);if(!e)return b;if(e>=0)b.b9=OQ(a,b.b9,c);else b.bZ=OQ(a,b.bZ,c);E8(b);return Np(b);}
function Ln(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ng(a.mF,c,b.mh);if(d<0)b.bZ=Ln(a,b.bZ,c);else if(d>0)b.b9=Ln(a,b.b9,c);else{e=b.b9;if(e===null)return b.bZ;f=b.bZ;g=P(K1,e.gZ).data;h=0;while(true){b=e.bZ;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b9;while(h>0){h=h+(-1)|0;j=g[h];j.bZ=b;E8(j);b=Np(j);}e.b9=b;e.bZ=f;E8(e);b=e;}E8(b);return Np(b);}
function AA$(){B.call(this);this.AP=null;}
function AA_(){var a=this;B.call(a);a.z0=null;a.zZ=0;}
function AW8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.z0;d=a.zZ;AI0(b.data);e=c.mN;f=e.pE;if(f===null)g=null;else{g=f.u1;e.pE=g;if(g!==null)g.Bu=null;else e.mM=null;e.lu=e.lu-1|0;e.b7=e.b7+1|0;g=f.rO;}if(g!==null)Ub(c,g.vi,g.BB,g.A4,d);else{h=c.pM.data;i=c.iK;c.iK=i+1|0;h[i]=d;}c=c.Cv;b=b.data;if(!AI0(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BX;X(b);N(b);}if(b.length<1){b=new BX;AHE(b);N(b);}e=C3(b[0]);f=AIr(c.AP,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=FS(GC(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A6J(GC(e));else if(e instanceof $rt_globals.File?1:0)k[i]=AM4(GC(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ABb(GC(b[m]));k[i]=AHW(GC(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=GC(b[m]);k[i]=A7R(GC(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=C0(h,i);f.g(h);}}
function AF9(){var a=this;B.call(a);a.cA=null;a.jR=null;a.FE=null;a.ex=null;}
function A75(a,b){var c=new AF9();A4k(c,a,b);return c;}
function A4k(a,b,c){var d,e,f,g;a.ex=null;a.jR=b;d=new Zv;d.bF=CQ(P(Cp,0));d.oU=CQ(P(Cp,0));d.bX=CQ(P(CH,0));d.fB=CQ(P(ES,0));d.cP=CQ(P(CU,0));d.g2=CQ(P(FK,0));d.hs=CQ(P(F5,0));d.mD=CQ(P(U,0));d.nb=CQ(P(U,0));d.dz=c;a.cA=d;e=$rt_globals.window;f=P(Dr,14);g=f.data;d=new ADT;d.rs=a;g[0]=C8(a,b,C(41),d);d=new ADU;d.A1=a;g[1]=C8(a,b,C(42),d);d=new ADV;d.yJ=a;g[2]=C8(a,b,C(43),d);d=new ADW;d.wV=a;g[3]=C8(a,b,C(44),d);d=new ADX;d.ur=a;g[4]=C8(a,b,C(45),d);d=new ADY;d.rK=a;g[5]=C8(a,b,C(46),d);d=new ADZ;d.CN=a;g[6]
=C8(a,b,C(47),d);d=new AD0;d.AB=a;g[7]=C8(a,b,C(48),d);d=new AD1;d.yl=a;g[8]=C8(a,b,C(49),d);d=new AD2;d.wn=a;g[9]=C8(a,b,C(50),d);d=new WD;d.vU=a;g[10]=C8(a,b,C(51),d);d=new WE;d.u$=a;e.addEventListener("paste",Bw(d,"handleEvent"),!!1);g[11]=V9(a,e,C(52),d);d=new WF;d.xB=a;g[12]=C8(a,e,C(53),d);d=new WG;d.Cj=a;g[13]=C8(a,e,C(54),d);c=new RO;c.Dy=f;a.FE=c;e=new AES;e.zk=b;b.onpointerdown=Bw(e,"f");e=new AET;e.yx=b;b.onpointerup=Bw(e,"f");}
function Xo(){return (ED()).activeElement;}
function C8(a,b,c,d){b.addEventListener($rt_ustr(c),Bw(d,"handleEvent"));return V9(a,b,c,d);}
function V9(a,b,c,d){var e;e=new ZQ;e.E9=b;e.E_=c;e.E$=d;return e;}
function ACo(a,b){var c;c=new AC4;c.wU=b;return c;}
function Fh(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jR.getBoundingClientRect();e=BK(GV((b.clientX-d.left)*c),GV((b.clientY-d.top)*c));f=AK$(a.ex);d=new O8;ACO(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.EY=f;return d;}
function WJ(a,b,c){var d,e,f,g;d=new QO;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ACO(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.pc=0;d.eo=e;d.bj=f;d.j7=c;d.AG=g;return d;}
function Ed(a,b){b.stopPropagation();b.preventDefault();}
function Oc(){var a=this;B.call(a);a.p0=null;a.ck=null;a.bc=null;a.mj=0;a.Bt=null;a.Fi=0;a.Ei=0;a.lp=null;a.lf=null;a.Ev=null;a.FU=null;a.vy=null;a.xX=null;a.i7=null;a.is=null;a.ke=null;a.EC=null;a.sw=null;a.db=null;a.Co=null;a.qc=0;a.mW=0;a.oy=0;a.on=0;a.lG=0;a.ot=null;a.oG=0.0;a.qj=0.0;}
function AL4(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.db=new Bh;a.qc=0;a.ot=new AD7;a.p0=c;a.mj=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(K(h)));a.bc=b;a.ck=KZ(c,4,4,1);i=AM2(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B6(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new RG;HL();c=A9S;m.e1=b;m.ig=c;m.uH=j.length/c.nt|0;m.Ck
=l.length;n=b.createBuffer();m.xL=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.wX=null;n=b.createBuffer();m.wr=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sw=m;a.Ei=NS(g,C(56));c=new ZR;c.ea=b;a.Bt=c;a.oG=e;a.qj=f;d=b.getParameter(3379);a.Fi=d;c=new J;L(c);V(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dj,9);i=k.data;c=A6O(b);a.lp=c;i[0]=c;c=A7G(b,C(58));a.lf=c;i[1]=c;c=new AAe;Il(c,b,C(59),
C(60),A9S);a.Ev=c;i[2]=c;c=A8w(b);a.FU=c;i[3]=c;c=new P8;Wv(c,b,C(61),C(62));a.vy=c;i[4]=c;c=A8J(b);a.xX=c;i[5]=c;c=A7l(b);a.i7=c;i[6]=c;c=A8r(b);a.is=c;i[7]=c;c=A8s(b);a.ke=c;i[8]=c;a.EC=k;AEE(b,C(63));}
function IG(a,b,c){return GN(a,b,c,400,0);}
function HW(a,b,c){return KZ(a.p0,b,c,0);}
function D_(a,b,c,d){return KZ(a.p0,b,c,d);}
function AEj(a,b,c,d,e,f){var g,h;Cq(a.ck,c);g=D_(a,Lx(a.ck,b)+(d*2|0)|0,e,f);Cq(g,c);B1(g,b,d,L3(c,e));h=C1(a);CP(h,g);EI(g);return h;}
function ER(a,b){var c,d,e,f,g;c=a.bc;d=b.bp;e=b.bt;f=b.bg;g=b.bA;c.clearColor(d,e,f,g);a.bc.clear(16384);}
function Ca(a,b){var c;if(b==a.mW)return b;if(!b)a.bc.disable(3042);else{a.bc.enable(3042);a.bc.blendFuncSeparate(770,771,1,1);}c=a.mW;a.mW=b;return c;}
function NW(a,b,c){Ma(a,b.a,b.b,c);}
function Ma(a,b,c,d){var e,f;e=d.a;f=d.b;a.on=1;a.lG=1;d=a.ot;d.uh=b;d.ui=c;d.ug=e;d.uf=f;ACQ(a);}
function Gm(a){a.on=0;a.lG=0;ACQ(a);}
function ACQ(a){var b,c,d,e,f,g;b=a.oy;c=a.on;if(b!=c){a.oy=c;if(!c)a.bc.disable(3089);else a.bc.enable(3089);}if(a.oy&&a.lG){a.lG=0;d=a.bc;e=a.ot;b=e.uh;c=a.db.b-e.ui|0;f=e.uf;c=c-f|0;g=e.ug;d.scissor(b,c,g,f);}}
function Gb(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sw;c=a.qc;d=b.ig.A$;e=b.e1;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.e1;h=b.xL;e.bindBuffer(34962,h);i=b.ig.qP.data;g=i.length;j=0;while(j<g){k=i[j];l=b.e1;m=k.jW;n=k.gJ;o=b.ig.nt*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gJ|0;j=j+1|0;}a:{e=b.wX;if(e!==null){c=0;b.e1.bindBuffer(34962,e);i=b.ig.Ag.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.e1;j=e.jW;p=e.gJ;m=e.sE;n=b.ig.zi;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gJ|0;g=g+1|0;}}}q=b.wr;if(q===null){c=b.uH;if(c>0)b.e1.drawArrays(4,0,c);}else{b.e1.bindBuffer(34963,q);k=b.e1;g=b.Ck;k.drawElements(4,g,5123,0);}a.qc=d;}
function Bv(a,b,c,d,e){GJ(a,a.lp);GU(a.lp,a.bc,b,c,d,a.db);d=a.lp;FP(a.bc,d.B1,e);Gb(a);}
function AFd(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;GJ(a,a.is);GU(a.is,a.bc,b,c,d,a.db);j=a.is;d=a.bc;k=j.xm;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.xl;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.is;FP(a.bc,d.x$,i);Gb(a);}
function Mw(a,b,c,d,e,f,g,h){var i,j;GJ(a,a.ke);GU(a.ke,a.bc,b,c,d,a.db);d=a.ke;i=a.bc;j=d.uE;i.uniform2f(j,e,f);FP(i,d.y0,g);d=a.ke;FP(a.bc,d.xN,h);Gb(a);}
function DP(a,b,c,d,e,f,g,h,i){var j;j=!i?a.vy:a.xX;GJ(a,j);AMr(j,a.bc,!i?a.qj:a.oG);GU(j,a.bc,b,c,d,a.db);Oh(j,a.bc,f);AFi(j,a.bc,f,e);ALi(j,a.bc,g,h);Gb(a);}
function C1(a){var b,c;b=new IK;c=a.Bt;b.eZ=new Bh;b.eQ=c;b.gc=c.ea.createTexture();A9T=A9T+1|0;return b;}
function Ni(a,b){AEE(a.bc,b);}
function GJ(a,b){var c,d;if(b!==a.Co){c=a.bc;d=b.bK;c.useProgram(d);a.Co=b;}}
function UW(){var a=this;Oc.call(a);a.D7=null;a.Ew=null;}
function GN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ck;g=AJ5(b,c,d,e);KU(f,g);h=f.di.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Et(f,C(64));m=Et(f,C(65));h=new LS;n=g;h.oE=b;h.po=c;h.Dt=d;h.DK=e;h.ev=i;h.eO=j;h.Dk=l;h.qv=k;h.rg=n;h.t6=C4(i);h.Ep=C4(h.eO);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Dp=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Dg=b;return h;}
function Cy(){B.call(this);this.C=null;}
function Er(a,b){a.C=b;}
function A5A(a,b){return 0;}
function Zv(){var a=this;B.call(a);a.bF=null;a.oU=null;a.bX=null;a.fB=null;a.cP=null;a.g2=null;a.hs=null;a.mD=null;a.nb=null;a.dz=null;a.fe=null;a.yr=0;}
function T8(a,b){var c,d,e,f;DI(a.dz);c=(B5(!b.j7?a.oU:a.bF)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].G(b);if(f)break;if(b.pc)break;e=e+1|0;}return f;}
function R$(a,b,c){var d,e,f;DI(a.dz);d=(B5(a.g2)).data;e=d.length;f=0;while(f<e){if(d[f].f3(b,c))return 1;f=f+1|0;}return 0;}
function ADT(){B.call(this);this.rs=null;}
function A2y(a,b){var c;c=a.rs;if(T8(c.cA,WJ(c,b,1)))Ed(c,b);}
function ADU(){B.call(this);this.A1=null;}
function A2L(a,b){var c;c=a.A1;if(T8(c.cA,WJ(c,b,0)))Ed(c,b);}
function ADV(){B.call(this);this.yJ=null;}
function ASo(a,b){var c,d,e,f,g,h,i;c=a.yJ;if(c.ex!==null){a:{b:{d=Fh(c,b);e=c.cA;DI(e.dz);f=e.fe;if(f!==null)f.g(d);else{g=(B5(e.bX)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bY(d))break a;i=i+1|0;}}}}Ed(c,b);}}
function ADW(){B.call(this);this.wV=null;}
function A1e(a,b){var c,d,e,f,g,h;c=a.wV;b.button;if(c.ex!==null)a:{d=Fh(c,b);c=c.cA;e=b.button;DI(c.dz);if(c.fe===null){f=(B5(c.bX)).data;g=f.length;h=0;while(h<g){b=f[h].cr(d,e);if(b!==null){c.fe=b;c.yr=e;break a;}h=h+1|0;}}}}
function ADX(){B.call(this);this.ur=null;}
function A1r(a,b){var c,d,e,f,g,h,i;c=a.ur;b.button;if(c.ex!==null){d=Fh(c,b);e=c.cA;f=b.button;DI(e.dz);if(f==e.yr&&e.fe!==null)e.fe=null;g=(B5(e.bX)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dM(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Ed(c,b);}}
function ADY(){B.call(this);this.rK=null;}
function ATZ(a,b){var c,d,e,f,g,h,i,j,k;c=a.rK;if(c.ex!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cA;f=Fh(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DI(e.dz);i=(B5(e.fB)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dJ(f,d,h))break b;k=k+1|0;}}Ed(c,b);}}
function ADZ(){B.call(this);this.CN=null;}
function AQC(a,b){var c,d,e,f,g,h,i,j;c=a.CN;if(c.ex!==null){d=Fh(c,b);e=c.cA;f=b.button;g=b.detail;DI(e.dz);h=(B5(e.bX)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cI(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Ed(c,b);}}
function AD0(){B.call(this);this.AB=null;}
function A55(a,b){var c,d,e,f,g,h,i;c=a.AB;if(c.ex!==null){d=Fh(c,b);e=c.cA;DI(e.dz);f=(B5(e.cP)).data;g=f.length;h=0;a:{while(h<g){if(f[h].G(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Ed(c,b);}}
function AD1(){B.call(this);this.yl=null;}
function AP3(a,b){var c,d,e,f,g,h;b=a.yl.cA;if(b.fe!==null){c=DY();d=BT(b.fe);e=new J;L(e);H(H(e,C(67)),d);Bf(c,K(e));}f=(B5(b.nb)).data;g=f.length;h=0;while(h<g){f[h].e();h=h+1|0;}DI(b.dz);}
function AD2(){B.call(this);this.wn=null;}
function AUL(a,b){var c,d,e;b=a.wn.cA;c=(B5(b.mD)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.fe!==null)b.fe=null;DI(b.dz);}
function WD(){B.call(this);this.vU=null;}
function A5B(a,b){var c;c=a.vU;if(c.ex!==null)Fh(c,b);}
function WE(){B.call(this);this.u$=null;}
function AR5(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.u$;if(Xo()===c.jR){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B5(c.cA.hs)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].ct();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cA.dz;m=new PU;m.wx=k;m.wy=l;g.getAsString(Bw(m,"accept"));Ed(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function WF(){B.call(this);this.xB=null;}
function ASs(a,b){var c;c=a.xB;if(Xo()===c.jR&&R$(c.cA,ACo(c,b),0))Ed(c,b);}
function WG(){B.call(this);this.Cj=null;}
function A2U(a,b){var c;c=a.Cj;if(Xo()===c.jR&&R$(c.cA,ACo(c,b),1))Ed(c,b);}
var ACI=G(0);
var ACS=G();
function KZ(a,b,c,d){var e,f,g,h,i;e=new AAF;e.jz=d;A9A=A9A+1|0;e.og=b;e.nH=c;f=(ED()).createElement("canvas");e.jo=f;g=b;f.width=g;h=e.jo;f=c;h.height=f;if(!d)g=e.jo.getContext("2d");else{i=e.jo;h=AX2();g=i.getContext("2d",h);}e.di=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ACR=G();
function ARg(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function O$(){var a=this;B.call(a);a.R=null;a.n=null;a.bG=null;}
var KS=G();
var A9k=null;function Ng(a,b,c){return b.mJ(c);}
function AGZ(){A9k=new KS;}
function AIy(){var a=this;B.call(a);a.c$=null;a.gm=null;a.cV=0;}
function CQ(a){var b=new AIy();AQx(b,a);return b;}
function AQx(a,b){a.c$=b;}
function Fz(a,b){return a.c$.data[b];}
function Ba(a,b){var c,d,e;c=a.cV;d=a.c$;if(c==d.data.length)a.c$=C0(d,c+4|0);d=a.c$.data;e=a.cV;a.cV=e+1|0;d[e]=b;a.gm=null;}
function SP(a,b){var c,d,e,f;c=0;while(true){d=a.c$.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cV=a.cV-1|0;a.gm=null;}c=c+1|0;}}
function B5(a){var b;b=a.gm;if(!(b!==null&&b.data.length==a.cV))a.gm=C0(a.c$,a.cV);return a.gm;}
var Ds=G(0);
var Cp=G(0);
var CH=G(0);
function A0T(a,b){return 0;}
function AVx(a,b,c){return null;}
function ANu(a,b,c){return 0;}
function A27(a,b,c,d){return 0;}
var ES=G(0);
var CU=G(0);
var FK=G(0);
var CV=G(0);
var F5=G(0);
function RO(){B.call(this);this.Dy=null;}
function Bh(){var a=this;B.call(a);a.a=0;a.b=0;}
function BK(a,b){var c=new Bh();Rc(c,a,b);return c;}
function AK$(a){var b=new Bh();AO$(b,a);return b;}
function Rc(a,b,c){a.a=b;a.b=c;}
function AO$(a,b){a.a=b.a;a.b=b.b;}
function Cr(a,b){a.a=b.a;a.b=b.b;}
function Y(a,b,c){a.a=b;a.b=c;}
function AI8(a){var b,c,d;b=a.a;c=a.b;d=new J;L(d);V(H(V(H(d,C(70)),b),C(71)),c);return K(d);}
function AQ8(a,b){var c;a:{b:{if(a!==b){if(BG(b)!==BG(a))break b;if(!Ke(a,b))break b;}c=1;break a;}c=0;}return c;}
function Ke(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AD7(){var a=this;B.call(a);a.uh=0;a.ui=0;a.ug=0;a.uf=0;}
var AH4=G();
var AJK=G(0);
function ZR(){B.call(this);this.ea=null;}
function Or(){var a=this;B.call(a);a.bK=null;a.FX=null;}
function ALm(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bf(Bj(),g);Bf(DY(),C(74));Bf(DY(),d);Bf(DY(),C(74));b=new Bt;Bp(b,g);N(b);}
function Dj(){var a=this;Or.call(a);a.yk=null;a.s5=null;a.oc=null;}
function A9U(a,b,c,d){var e=new Dj();Il(e,a,b,c,d);return e;}
function Il(a,b,c,d,e){var f,g,h,i,j,k;a.FX=e;f=ALm(b,35633,c);d=ALm(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bK=g;h=e.uT.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bK;k=c.jW;c=c.td;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bK;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AEE(b,C(75));a.oc=new Bh;c=a.bK;a.yk=b.getUniformLocation(c,"uResolution");c=a.bK;a.s5=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new J;L(c);H(H(c,C(76)),d);Bp(b,K(c));N(b);}
function AGg(a,b,c){var d,e,f;if(!Ke(a.oc,c)){Cr(a.oc,c);d=a.yk;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GU(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.s5;b.uniform4f(e,i,l,h,j);AGg(a,b,f);}
function AL9(){Dj.call(this);this.B1=null;}
function A6O(a){var b=new AL9();A0E(b,a);return b;}
function A0E(a,b){var c;HL();Il(a,b,C(59),C(77),A9S);c=a.bK;a.B1=b.getUniformLocation(c,"uColor");}
function FC(){Dj.call(this);this.um=null;}
function A7G(a,b){var c=new FC();ACq(c,a,b);return c;}
function A9V(a,b,c){var d=new FC();ACu(d,a,b,c);return d;}
function ACq(a,b,c){ACu(a,b,C(59),c);}
function ACu(a,b,c,d){HL();Il(a,b,c,d,A9S);c=a.bK;a.um=b.getUniformLocation(c,"sDiffuse");}
function Oh(a,b,c){var d;d=a.um;b.uniform1i(d,0);b.activeTexture(33984);c=c.gc;b.bindTexture(3553,c);}
var AAe=G(Dj);
function AGU(){FC.call(this);this.C_=null;}
function A8w(a){var b=new AGU();ATs(b,a);return b;}
function ATs(a,b){var c;ACq(a,b,C(78));c=a.bK;a.C_=b.getUniformLocation(c,"uContrast");}
function HD(){var a=this;FC.call(a);a.sl=null;a.tm=null;a.uC=null;a.Bk=null;a.q0=0.0;}
function A9W(a,b,c){var d=new HD();Wv(d,a,b,c);return d;}
function Wv(a,b,c,d){ACu(a,b,c,d);c=a.bK;a.sl=b.getUniformLocation(c,"uTexTransform");c=a.bK;a.tm=b.getUniformLocation(c,"uColor");c=a.bK;a.uC=b.getUniformLocation(c,"uBgColor");c=a.bK;a.Bk=b.getUniformLocation(c,"uTextPow");}
function AMr(a,b,c){var d;if(a.q0!==c){a.q0=c;d=a.Bk;b.uniform2f(d,c,0.0);}}
function ALi(a,b,c,d){FP(b,a.tm,c);FP(b,a.uC,d);}
function AFi(a,b,c,d){var e,f,g,h,i,j;c=c.eZ;e=c.a;f=c.b;g=d.bp;h=e;g=g/h;i=d.bt;j=f;i=i/j;h=d.bg/h;j=d.bA/j;c=a.sl;b.uniform4f(c,g,i,h,j);}
var P8=G(HD);
var AIP=G(HD);
function A8J(a){var b=new AIP();AZq(b,a);return b;}
function AZq(a,b){Wv(a,b,C(61),C(79));}
function AJY(){var a=this;FC.call(a);a.wY=null;a.wW=null;a.tn=null;}
function A7l(a){var b=new AJY();APz(b,a);return b;}
function APz(a,b){var c,d;ACq(a,b,C(80));c=a.bK;a.wY=b.getUniformLocation(c,"uColorB");d=a.bK;a.wW=b.getUniformLocation(d,"uColorF");d=a.bK;a.tn=b.getUniformLocation(d,"uContrast");}
function ALz(){var a=this;Dj.call(a);a.x$=null;a.xm=null;a.xl=null;}
function A8r(a){var b=new ALz();AZt(b,a);return b;}
function AZt(a,b){var c;HL();Il(a,b,C(59),C(81),A9S);c=a.bK;a.x$=b.getUniformLocation(c,"uColor");c=a.bK;a.xm=b.getUniformLocation(c,"uPoints1");c=a.bK;a.xl=b.getUniformLocation(c,"uPoints2");}
function AFM(){var a=this;Dj.call(a);a.xN=null;a.uE=null;a.y0=null;}
function A8s(a){var b=new AFM();AYg(b,a);return b;}
function AYg(a,b){var c;HL();Il(a,b,C(59),C(82),A9S);c=a.bK;a.xN=b.getUniformLocation(c,"uColor");c=a.bK;a.uE=b.getUniformLocation(c,"uBaseline");c=a.bK;a.y0=b.getUniformLocation(c,"uScaleHExp");}
var AAR=G(0);
var AMJ=G(0);
function FP(b,c,d){var e,f,g,h;e=d.bp;f=d.bt;g=d.bg;h=d.bA;b.uniform4f(c,e,f,g,h);}
function AEE(b,c){var d,e;d=b.getError();if(d){b=Bj();e=new J;L(e);V(H(e,c),d);Bf(b,K(e));}}
function ZQ(){var a=this;B.call(a);a.E9=null;a.E_=null;a.E$=null;}
function RG(){var a=this;B.call(a);a.e1=null;a.ig=null;a.xL=null;a.wX=null;a.wr=null;a.uH=0;a.Ck=0;}
function CD(){var a=this;B.call(a);a.E7=null;a.fg=0;}
function Dt(a,b,c){a.E7=b;a.fg=c;}
function Hl(){var a=this;CD.call(a);a.uT=null;a.qP=null;a.Ag=null;a.nt=0;a.zi=0;a.A$=0;}
var A9S=null;var A9X=null;function HL(){HL=Bm(Hl);AQU();}
function ANm(){HL();return A9X.dZ();}
function AQU(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hl;c=P(En,2);d=c.data;AMs();d[0]=A9Y;d[1]=A9Z;HL();Dt(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.qt.fg){case 0:f=f+l.gJ|0;h=h+1|0;break a;case 1:e=e+l.gJ|0;g=g+1|0;break a;default:}}i=i|1<<l.jW;k=k+1|0;}b.uT=c;b.nt=e;b.zi=f;b.A$=i;c=P(En,g);m=c.data;b.qP=c;c=P(En,h);n=c.data;b.Ag=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.qt.fg){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A9S
=b;c=P(Hl,1);c.data[0]=b;A9X=c;}
var MM=G(0);
var TJ=G(0);
var ACY=G(0);
var G9=G();
function Nd(){G9.call(this);this.C2=null;}
function AGz(){var a=this;Nd.call(a);a.Ef=0;a.nD=0;a.lW=null;a.ng=null;a.vu=null;}
function ASB(a,b){var c=new AGz();A4D(c,a,b);return c;}
function A4D(a,b,c){a.C2=b;b=new J;L(b);a.lW=b;a.ng=B6(32);a.Ef=c;AGs();a.vu=A90;}
function AB$(a,b,c,d){var e,$$je;e=a.C2;if(e===null)a.nD=1;if(!(a.nD?0:1))return;a:{try{e.m_(b,c,d);break a;}catch($$e){$$je=E5($$e);if($$je instanceof Jp){}else{throw $$e;}}a.nD=1;}}
function Yp(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AKW(b,c,d-c|0);e=DR(Bd(16,Be(e.length,1024)));g=AKI(e,0,e.data.length);h=a.vu;i=new Q7;b=DR(1);j=b.data;j[0]=63;Hx();k=A91;i.of=k;i.nI=k;c=j.length;if(c&&c>=i.xk){i.E6=h;i.tb=b.dZ();i.Eb=2.0;i.xk=4.0;i.y5=B6(512);i.rI=DR(512);k=A92;if(k===null){i=new BX;Bp(i,C(84));N(i);}i.of=k;i.nI=k;a:while(true){if(i.lO==3){f=new Db;X(f);N(f);}i.lO=2;b:{while(true){try{k=AFF(i,f,g);}catch($$e){$$je=E5($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Jj(k))
{d=Cj(f);if(d<=0)break b;k=EC(d);}else if(Is(k))break;h=!MD(k)?i.of:i.nI;c:{if(h!==A92){if(h===A93)break c;else break b;}d=Cj(g);b=i.tb;l=b.data.length;if(d<l){k=A94;break b;}AEh(g,b,0,l);}FH(f,f.bd+Lo(k)|0);}}l=Is(k);AB$(a,e,0,g.bd);Qg(g);if(!l){while(true){d=i.lO;if(d!=2&&d!=4){f=new Db;X(f);N(f);}f=A95;if(f===f)i.lO=3;l=Is(f);AB$(a,e,0,g.bd);Qg(g);if(!l)break;}return;}}N(AYZ(f));}i=new BX;Bp(i,C(85));N(i);}
function Bf(a,b){var c,d,e,f,g,h,i,j;Br(BL(a.lW,b),10);b=a.lW;c=b.I;d=a.ng;if(c>d.data.length)d=B6(c);e=0;f=0;if(e>c){b=new BJ;Bp(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Yp(a,d,0,c);a.lW.I=0;}
function HR(){G9.call(this);this.FI=null;}
function WR(a){a.FI=DR(1);}
var L0=G(HR);
var A9D=null;function AQ_(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AHK(){var b;b=new L0;WR(b);A9D=b;}
function En(){var a=this;CD.call(a);a.td=null;a.qt=null;a.gJ=0;a.sE=0;a.jW=0;}
var A9Y=null;var A9Z=null;var A96=null;function AMs(){AMs=Bm(En);AZ6();}
function A6Y(a,b,c,d,e,f,g){var h=new En();VB(h,a,b,c,d,e,f,g);return h;}
function AM1(){AMs();return A96.dZ();}
function VB(a,b,c,d,e,f,g,h){AMs();Dt(a,b,c);a.td=d;a.qt=e;a.gJ=f;a.sE=g;a.jW=h;}
function AZ6(){var b;b=new En;AHd();VB(b,C(87),0,C(88),A97,2,0,0);A9Y=b;b=A6Y(C(89),1,C(90),A97,2,0,1);A9Z=b;A96=I(En,[A9Y,b]);}
function M7(){var a=this;B.call(a);a.EX=null;a.Fl=null;}
function AHT(b){var c,d;if(GF(b))N(AKk(b));if(!ALR(Q(b,0)))N(AKk(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ALR(d))break a;else N(AKk(b));}}c=c+1|0;}}
function ALR(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var MP=G(M7);
var A90=null;function AGs(){AGs=Bm(MP);APy();}
function AH6(a){var b,c;b=new TP;b.gG=C(91);Hx();c=A91;b.jF=c;b.ol=c;b.Fg=a;b.xq=0.3333333432674408;b.DM=0.5;b.yd=DR(512);b.AZ=B6(512);return b;}
function APy(){var b,c,d,e,f;b=new MP;AGs();c=P(BB,0);d=c.data;AHT(C(92));e=d.length;f=0;while(f<e){AHT(d[f]);f=f+1|0;}b.EX=C(92);b.Fl=c.dZ();A90=b;}
function Y3(){var a=this;B.call(a);a.gw=null;a.qJ=null;a.mX=null;a.Bd=null;a.sQ=null;a.s$=null;}
function AKn(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gw,b,c));}
function Pp(a,b){var c,d,e,f,g,h,i,$$je;c=new BB;d=b;while(a.qJ[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gw,b,d));f=e.data;Fm();d=f.length;AGs();g=A90;h=AKI(e,0,d);a:{try{i=AH6(g);Hx();g=AJR(AHn(AMm(i,A92),A92),h);break a;}catch($$e){$$je=E5($$e);if($$je instanceof Gs){g=$$je;}else{throw $$e;}}h=new AEp;h.k4=1;h.ln=1;h.i6=C(93);h.nJ=g;N(h);}if(!g.bd&&g.et==g.oH)c.cf=g.iQ;else{f=B6(Cj(g));e=f.data;c.cf=f;PO(g,f,0,e.length);}return c;}
function Xq(a,b){var c,d,e;c=new BB;d=b>>>1|0;e=d;while(a.mX[e]){e=e+1|0;}d=e-d|0;JL(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gw,b,d)));return c;}
var Ig=G(CD);
var A98=null;var A97=null;var A99=null;function AHd(){AHd=Bm(Ig);AZa();}
function APt(a,b){var c=new Ig();AL0(c,a,b);return c;}
function ARO(){AHd();return A99.dZ();}
function AL0(a,b,c){AHd();Dt(a,b,c);}
function AZa(){var b;A98=APt(C(94),0);b=APt(C(95),1);A97=b;A99=I(Ig,[A98,b]);}
var N2=G(HR);
var A9E=null;function API(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AI6(){var b;b=new N2;WR(b);A9E=b;}
function AHZ(){BX.call(this);this.Df=null;}
function AKk(a){var b=new AHZ();AU6(b,a);return b;}
function AU6(a,b){X(a);a.Df=b;}
var U7=G(EE);
var MO=G(0);
function AES(){B.call(this);this.zk=null;}
function AUs(a,b){a.zk.setPointerCapture(b.pointerId);}
function AET(){B.call(this);this.yx=null;}
function AOe(a,b){a.yx.releasePointerCapture(b.pointerId);}
function Iq(){var a=this;B.call(a);a.oH=0;a.bd=0;a.et=0;a.j2=0;}
function ADE(a,b){a.j2=(-1);a.oH=b;a.et=b;}
function FH(a,b){var c,d,e;if(b>=0&&b<=a.et){a.bd=b;if(b<a.j2)a.j2=0;return a;}c=new BX;d=a.et;e=new J;L(e);Br(V(H(V(H(e,C(96)),b),C(97)),d),93);Bp(c,K(e));N(c);}
function Cj(a){return a.et-a.bd|0;}
function Ee(a){return a.bd>=a.et?0:1;}
var AA5=G(0);
var LT=G(Iq);
function AIS(b){var c,d;if(b>=0)return ATF(0,b,B6(b),0,b,0);c=new BX;d=new J;L(d);V(H(d,C(98)),b);Bp(c,K(d));N(c);}
function AKW(b,c,d){return ATF(0,b.data.length,b,c,c+d|0,0);}
function PO(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BJ;i=new J;L(i);V(H(V(H(i,C(99)),g),C(100)),f);Bp(h,K(i));N(h);}if(Cj(a)<d){j=new Oy;X(j);N(j);}if(d<0){j=new BJ;k=new J;L(k);H(V(H(k,C(101)),d),C(102));Bp(j,K(k));N(j);}g=a.bd;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iQ.data[m+a.qw|0];l=l+1|0;c=n;m=o;}a.bd=g+d|0;return a;}}b=b.data;j=new BJ;d=b.length;k=new J;L(k);Br(V(H(V(H(k,C(103)),c),C(97)),d),41);Bp(j,K(k));N(j);}
function NE(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.qK){b=new KL;X(b);N(b);}e=d-c|0;if(Cj(a)<e){b=new J1;X(b);N(b);}if(c>M(b)){f=new BJ;d=M(b);b=new J;L(b);Br(V(H(V(H(b,C(104)),c),C(97)),d),41);Bp(f,K(b));N(f);}if(d>M(b)){f=new BJ;c=M(b);b=new J;L(b);V(H(V(H(b,C(105)),d),C(106)),c);Bp(f,K(b));N(f);}if(c>d){b=new BJ;f=new J;L(f);V(H(V(H(f,C(104)),c),C(107)),d);Bp(b,K(f));N(b);}g=a.bd;while(c<d){h=g+1|0;i=c+1|0;AA9(a,g,Q(b,c));g=h;c=i;}a.bd=a.bd+e|0;return a;}
function Nv(){var a=this;Iq.call(a);a.nC=0;a.qe=null;a.DZ=null;}
function AKI(b,c,d){var e,f,g;e=b.data;f=new AEg;g=e.length;d=c+d|0;ADE(f,g);A0G();f.DZ=A9$;f.nC=0;f.qe=b;f.bd=c;f.et=d;f.D3=0;f.xK=0;return f;}
function AEh(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.xK){e=new KL;X(e);N(e);}if(Cj(a)<d){e=new J1;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BJ;j=new J;L(j);V(H(V(H(j,C(108)),h),C(100)),g);Bp(i,K(j));N(i);}if(d<0){e=new BJ;i=new J;L(i);H(V(H(i,C(101)),d),C(102));Bp(e,K(i));N(e);}h=a.bd;k=h+a.nC|0;l=0;while(l<d){b=a.qe.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bd=h+d|0;return a;}}b=b.data;e=new BJ;d=b.length;i=new J;L(i);Br(V(H(V(H(i,C(103)),c),C(97)),d),41);Bp(e,
K(i));N(e);}
function Qg(a){a.bd=0;a.et=a.oH;a.j2=(-1);return a;}
function I0(){B.call(this);this.EE=null;}
var A93=null;var A92=null;var A91=null;function Hx(){Hx=Bm(I0);AR9();}
function AIB(a){var b=new I0();ALP(b,a);return b;}
function ALP(a,b){Hx();a.EE=b;}
function AR9(){A93=AIB(C(109));A92=AIB(C(110));A91=AIB(C(111));}
var PE=G(Cy);
function AR0(a){}
function AQP(a,b,c){}
function H0(){var a=this;Cy.call(a);a.dc=null;a.q=null;}
function ADD(a,b){var c,d,e;Er(a,b);a.dc=AJ4(0,0,64);c=new Ug;c.bT=new Bh;c.dF=CQ(P(CN,0));c.d8=new Bh;c.qu=new Bh;c.mK=new B4;c.C4=new B4;d=b.R;c.bL=d;e=b.bG;c.cG=e;c.cJ=d.mj;c.c2=R2(e);d=b.n.nb;e=new ZM;e.ul=c;Ba(d,e);d=b.n.mD;e=new ZL;e.wR=c;Ba(d,e);Ba(b.n.g2,c);Ba(b.n.hs,c);a.q=c;Ba(b.n.bF,new AAT);b=b.n.bF;c=a.q;BF(c);d=new AAS;d.yc=c;Ba(b,d);}
function HK(a){ER(a.C.R,a.dc);}
function AG5(a,b,c){var d,e,f,g,h;a:{d=a.q;Cr(d.bT,b);e=d.ci;if(e!==c){d.ci=c;f=(B5(d.dF)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].fk(e,c);h=h+1|0;}}}}
function CB(){H0.call(this);this.y=null;}
function Gk(a,b){IO(a,b,1);}
function IO(a,b,c){var d,e,f;ADD(a,b);d=new AEu;e=a.q;d.bH=CQ(P(Ur,0));d.bi=e;a.y=d;Ba(a.q.dF,d);Ba(b.n.bX,a.y);d=b.n.fB;e=a.y;BF(e);f=new W3;f.wI=e;Ba(d,f);d=b.n.cP;e=a.y;BF(e);f=new W2;f.t8=e;Ba(d,f);if(c){b=b.n.bX;f=a.q.c2;d=new XM;d.xi=f;Ba(b,d);}}
function APC(a){HK(a);J8(a.y);}
function IU(a,b,c){var d,e;AG5(a,b,c);d=(B5(a.y.bH)).data.length;e=0;while(e<d){e=e+1|0;}}
function Qq(a,b){var c,d,e,f,g;c=a.y;d=0;e=(B5(c.bH)).data;f=e.length;g=0;while(g<f){d=e[g].Y.cB(b)|d;g=g+1|0;}return d;}
var Fk=G(0);
function AIH(a){a.ez(IV());}
function JI(a){a.ez(Hv());}
function AJx(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Je;c=new Ku;d=new Hy;AH7();Le(d,A9_);MQ(c,d,B0(A$a),B0(A$b),B0(A$c),B0(A$a),B0(A$d),B0(A$e),B0(A$f),B0(A$g),B0(A$h),B0(A$i));e=AKP(S(C(112)));f=(AL3()).data;g=f.length;h=P(KJ,g);i=h.data;j=0;while(j<g){i[j]=f[j].pU;j=j+1|0;}k=ALC(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new Jg;m=new Jn;AXw();d=A$j;O1(m,d,A$k,A$l,A$m,A$n,d);Mb(l,m,AMn(),AIK(S(C(117)),S(C(112)),Cx(0)),AMn(),AI9(1,0.07500000298023224),A$o,A$p);L2(b,c,e,h,k,l,AFl(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.ez(b);}
var JX=G(0);
var Fr=G(0);
function Lb(){var a=this;CB.call(a);a.H=null;a.L=null;a.i1=null;a.jH=0;a.lr=null;a.mQ=null;a.Ai=null;a.nB=null;a.fR=null;}
function A8t(a){var b=new Lb();AGv(b,a);return b;}
function AGv(a,b){var c,d,e;IO(a,b,0);a.fR=AYp(a.q);c=Ld(a.y);a.i1=c;a.H=Iu(c);c=Iu(a.i1);a.L=c;a.mQ=AIu(a.H,c);c=a.H;c.b8=1;OA(a.fR,c,a.L);c=a.H;d=new UC;d.Cb=a;c.iI=d;c=a.L;d=new UD;d.zN=a;c.iI=d;AIs(a,0);Nh(a.q,a.H);Ba(b.n.fB,a);Ba(b.n.bX,a);c=b.n.bF;d=new UE;d.xP=a;Ba(c,d);c=b.n.bF;d=new H4;e=new UA;e.vK=a;IH(d,b,e);Ba(c,d);Ba(b.n.g2,a);Ba(b.n.hs,a);b=b.n.cP;c=new UB;c.tr=a;Ba(b,c);JI(a);}
function WV(a,b){if(a.H===b)a.jH=a.jH|1;if(a.L===b)a.jH=a.jH|2;if((a.jH&3)==3)AMu(a);}
function AIs(a,b){Jf(a.H,b);Jf(a.L,b);}
function A4_(a,b,c){if(Dz(a.q,a.H))return Js(a.H,b,c);if(!Dz(a.q,a.L))return 0;return Js(a.L,b,c);}
function AGQ(a){if(Dz(a.q,a.H))return WA(a,a.H);if(!Dz(a.q,a.L))return null;return WA(a,a.L);}
function WA(a,b){var c;c=new TA;c.s1=b;return c;}
function AGt(a,b,c){var d;d=E1(c);if(b!==a.H)a.nB=d;else a.Ai=d;b=a.Ai;if(b!==null&&a.nB!==null)Gw(a.C.bG,E1(c));else{if(b!==null)Gw(a.C.bG,b);b=a.nB;if(b!==null)Gw(a.C.bG,b);}}
function AMu(a){var b,c,d;Bf(Bj(),C(122));b=a.H.d.h;c=a.L.d.h;d=new V_;d.s_=a;AJA(b,c,d,a.C.bG);}
function AUb(a,b){var c;c=Qq(a,b);return LU(a.H,b)|LU(a.L,b)|c;}
function A1o(a){var b;HK(a);ID(a.H);ID(a.L);b=a.fR;AHG(b,b.iT.bL);J8(a.y);}
function A0q(a){return Fb(0);}
function AUB(a){JN(a.H);JN(a.L);}
function A1j(a){KN(a.H);KN(a.L);}
function AVg(a,b){IQ(a.H,b);IQ(a.L,b);}
function A2e(a,b){KO(a.q,b);}
function AOV(a,b){if(Ii(a.y,b)){Me(a.H);Me(a.L);}}
function ARs(a,b,c){IU(a,b,c);AG3(a,b,c);}
function AG3(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Ci(20.0,c);f=new Bh;g=b.a/2|0;h=e/2|0;Rc(f,g-h|0,b.b);MN(a.H,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;MN(a.L,d,f,c);Y(a.fR.i,f.a,d.b);Y(a.fR.k,d.a-f.a|0,f.b);}
function ANy(a,b){BF(b);G0(a.i1,b);FG(a.H,b);FG(a.L,b);a.fR.iA=b;}
function AIn(a,b){if(b.bj!=121)return 0;return 1;}
function AKH(a,b){var c,d,e,f;if(Dz(a.q,a.H)){c=a.i1;d=b.j;e=a.H;f=new Pv;f.vF=a;IZ(c,d,e,a,a,a,f);}if(Dz(a.q,a.L)){c=a.i1;b=b.j;d=a.L;e=new Pu;e.uR=a;IZ(c,b,d,a,a,a,e);}return 1;}
function A2C(a,b){var c,d;c=B3(a.H,b.j)&&Yh(a.H,b)?1:0;d=B3(a.L,b.j)&&Yh(a.L,b)?1:0;return !c&&!d?0:1;}
function A0t(a,b,c,d){var e,f;e=B3(a.H,b.j)&&Pr(a.H,b,c,d)?1:0;f=B3(a.L,b.j)&&Pr(a.L,b,c,d)?1:0;return !e&&!f?0:1;}
function ASn(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.H,b.j);e=B3(a.L,b.j);f=a.q;g=f.c1;h=g!==null?0:1;i=a.H;j=g!==i?0:1;k=g!==a.L?0:1;if(d&&!(!h&&!k))DQ(f,i);if(e&&!(!h&&!j))DQ(a.q,a.L);if(d){i=Xa(a.H,b,c);if(i!==null)return i;}return !e?null:Xa(a.L,b,c);}
function A29(a,b,c){var d,e,f,g;d=B3(a.H,b.j);e=B3(a.L,b.j);f=d&&TI(a.H,b,c)?1:0;g=e&&TI(a.L,b,c)?1:0;return !f&&!g?0:1;}
function ATK(a,b,c,d){var e,f,g,h;e=B3(a.H,b.j);f=B3(a.L,b.j);g=e&&L$(a.H,b,c,d)?1:0;h=f&&L$(a.L,b,c,d)?1:0;return !g&&!h?0:1;}
function A0W(a){return AGQ(a);}
var AH9=G(Lb);
function A70(a){var b=new AH9();A4Y(b,a);return b;}
function A4Y(a,b){var c;AGv(a,b);a.H.e6=1;a.L.e6=1;c=new T3;c.xS=a;QF(a,c,C(123));c=new T5;c.Bg=a;QF(a,c,C(124));}
function ASy(a){return Fb(1);}
function QF(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Pj;d=d.then(Bw(e,"f"));f=new Pl;f.uo=b;f.un=c;g=new Pk;d.then(Bw(f,"f"),Bw(g,"f"));}
var AIw=G();
function A4r(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(Kh(b)){case -1570047148:if(!Bk(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bk(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bk(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bk(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bk(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bk(b,C(131)))break a;d=19;break a;case -811765794:if(!Bk(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bk(b,C(133)))break a;d=11;break a;case -695287066:if(!Bk(b,C(134)))break a;d=20;break a;case -643550180:if(!Bk(b,C(135)))break a;d=27;break a;case -631889171:if(!Bk(b,C(136)))break a;d=9;break a;case -536831301:if(!Bk(b,C(137)))break a;d=25;break a;case -439438829:if(!Bk(b,C(138)))break a;d=21;break a;case -357667878:if(!Bk(b,C(139)))break a;d=22;break a;case -223304637:if(!Bk(b,C(140)))break a;d=2;break a;case -193916863:if(!Bk(b,C(141)))break a;d=23;break a;case 2129957:if(!Bk(b,C(142)))break a;d=1;break a;case 3343967:if
(!Bk(b,C(143)))break a;d=10;break a;case 3556498:if(!Bk(b,C(144)))break a;d=4;break a;case 91636708:if(!Bk(b,C(145)))break a;d=24;break a;case 485517998:if(!Bk(b,C(146)))break a;d=7;break a;case 544901384:if(!Bk(b,C(147)))break a;d=3;break a;case 1030621992:if(!Bk(b,C(148)))break a;d=16;break a;case 1164939699:if(!Bk(b,C(149)))break a;d=28;break a;case 1465713255:if(!Bk(b,C(150)))break a;d=8;break a;case 1554501643:if(!Bk(b,C(151)))break a;d=15;break a;case 1609169232:if(!Bk(b,C(152)))break a;d=12;break a;case 2090248989:if
(!Bk(b,C(153)))break a;d=26;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Vj;break b;case 3:case 4:b=new Vg;break b;case 5:b=new Vf;break b;case 6:b=new Vi;break b;case 7:b=new Vh;break b;case 8:b=new Vn;break b;case 9:case 10:b=new Vm;break b;case 11:b=new Vp;break b;case 12:b=new Vo;break b;case 13:b=new ABQ;break b;case 14:b=new ABP;break b;case 15:b=new ABO;break b;case 16:b=new ABC;break b;case 17:b=new ABB;break b;case 18:b=new ABz;break b;case 19:b=new ABy;break b;case 20:b=new ABx;break b;case 21:b
=new ABw;break b;case 22:b=new ABv;break b;case 23:b=new ABG;break b;case 24:b=new ABF;break b;case 25:b=new ABE;break b;case 26:b=new ABD;break b;case 27:b=new ABJ;break b;case 28:b=new ABI;break b;default:b=new ABH;break b;}b=new Vk;}return b;}
var AKS=G();
var Lj=G(LT);
function AGO(){var a=this;Lj.call(a);a.qK=0;a.qw=0;a.iQ=null;}
function ATF(a,b,c,d,e,f){var g=new AGO();AWJ(g,a,b,c,d,e,f);return g;}
function AWJ(a,b,c,d,e,f,g){ADE(a,c);a.bd=e;a.et=f;a.qw=b;a.qK=g;a.iQ=d;}
function AA9(a,b,c){a.iQ.data[b+a.qw|0]=c;}
function LL(){var a=this;B.call(a);a.E6=null;a.tb=null;a.Eb=0.0;a.xk=0.0;a.of=null;a.nI=null;a.lO=0;}
function Ow(){var a=this;B.call(a);a.ik=0;a.kv=0;}
var A95=null;var A94=null;function AFI(a,b){var c=new Ow();AJ2(c,a,b);return c;}
function AJ2(a,b,c){a.ik=b;a.kv=c;}
function Jj(a){return a.ik?0:1;}
function Is(a){return a.ik!=1?0:1;}
function N1(a){return !R6(a)&&!MD(a)?0:1;}
function R6(a){return a.ik!=2?0:1;}
function MD(a){return a.ik!=3?0:1;}
function Lo(a){var b;if(N1(a))return a.kv;b=new DT;X(b);N(b);}
function EC(b){return AFI(2,b);}
function UU(a){var b,c;switch(a.ik){case 0:b=new RI;X(b);N(b);case 1:b=new Wi;X(b);N(b);case 2:b=new UQ;c=a.kv;X(b);b.EP=c;N(b);case 3:b=new RB;c=a.kv;X(b);b.Ge=c;N(b);default:}}
function AKd(){A95=AFI(0,0);A94=AFI(1,0);}
var AFD=G();
var Jm=G(0);
var XC=G();
function APO(a,b){return b.arrayBuffer();}
var XB=G();
function AS6(a,b){var c,d;c=new Y2;d=new Y0;return $rt_globals.WebAssembly.instantiate(b,ARf(Bw(c,"f"),Bw(d,"f")));}
var Xz=G();
function ATz(a,b){AOa(b);}
var Xy=G();
function AYF(a,b){AIE(b);}
var W=G(0);
function T3(){B.call(this);this.xS=null;}
function A5G(a,b){Ic(a.xS.H,b);}
function T5(){B.call(this);this.Bg=null;}
function A00(a,b){Ic(a.Bg.L,b);}
var Vk=G();
function AVw(a,b){return A8t(b);}
var Vj=G();
function ANf(a,b){return A7k(b);}
var Vg=G();
function AZk(a,b){return A7v(b);}
var Vf=G();
function A2c(a,b){var c,d,e,f,g;c=new AB_;Er(c,b);d=(IV()).bv.ep;c.Fw=d;c.lv=AMv(d);c.jh=new Bh;c.il=new Bh;c.ds=K9();c.d5=K9();c.np=Fb(1);b=b.n.bX;d=new Xh;d.mv=c;Ba(b,d);b=c.np.data[DV()*c.np.data.length|0];d=IG(c.C.R,b,10);c.ne=d;Cq(c.C.R.ck,d);e=Et(c.C.R.ck,C(154));d=c.C.R.ck;f=new J;L(f);Br(f,43);H(f,b);g=C4(e+Et(d,K(f)));c.jU=g;c.iV=BY(c.iV,AE6(c,1,g,b,c.ne,c.C.R));c.iU=BY(c.iU,AE6(c,0,c.jU,b,c.ne,c.C.R));RL(c,c.ds,c.iV);RL(c,c.d5,c.iU);Ct(c.ds.ba,1.0,1.0,1.0,1.0);Ft(c.ds,c.lv);Ct(c.d5.ba,1.0,1.0,1.0,
1.0);Ft(c.d5,c.lv);b=Bj();g=c.jU;d=new J;L(d);V(H(d,C(155)),g);Bf(b,K(d));return c;}
var Vi=G();
function APw(a,b){var c,d,e;c=new Yk;Gk(c,b);d=new Xe;d.oa=new Bh;d.oD=new Bh;c.zr=d;c.fl=AKU();c.dP=AKU();c.oX=DA(C(156),25.0);Ba(c.q.dF,c);d=b.n.bF;e=new ACB;e.vl=c;Ba(d,e);Ba(b.n.bX,c);b=b.n.cP;d=new ACx;d.wi=c;Ba(b,d);AE9(c.dP);BO(c.dc,Cx(43));b=Fp();J0(c.fl,b);J0(c.dP,b);b=c.fl;b.lb=new ACy;d=c.dP;d.lb=new ACz;d.pw=new QB;d.xp=new QC;NI(b,(Si(0)).kA);NI(c.dP,(Si(0)).kA);return c;}
var Vh=G();
function AWO(a,b){var c,d,e;c=new ABA;Gk(c,b);Ba(c.q.dF,c);BO(c.dc,Cx(43));d=b.n.bF;e=new U_;e.Do=c;Ba(d,e);b=b.n.cP;d=new Va;d.BZ=c;Ba(b,d);return c;}
var Vn=G();
function APa(a,b){var c,d,e;c=new XH;ADD(c,b);c.ia=BN();c.gs=BN();c.ss=S(C(157));c.kt=VE();c.h_=0;d=c.q.dF;e=new Pt;e.yI=c;Ba(d,e);Ba(b.n.bX,c);d=b.n.bF;e=new Ps;e.ws=c;Ba(d,e);b=IG(b.R,C(156),35);c.ky=b;c.mE=AJy(Fd(b));BO(c.dc,S(C(158)));return c;}
var Vm=G();
function ARS(a,b){var c,d,e,f;c=new Tp;Er(c,b);c.id=AID();c.fc=0;c.vx=500;c.st=IW(0,0,0,255,new B4);c.mS=20;c.x3=20;c.A5=IV();d=b.n.bX;e=new Xs;e.l4=c;f=new Uz;f.AY=e;e.sd=f;Ba(d,e);d=b.n.fB;e=new AAU;e.Bw=c;Ba(d,e);c.eJ=b.R;c.yp=R2(b.bG);Zu(c.id,IG(c.eJ,C(156),c.x3),c.mS,c.eJ.mj);c.jg=Ju();return c;}
var Vp=G();
function A3J(a,b){var c,d;c=new RJ;H2(c,b);b=b.n.bF;d=new Re;d.tA=c;Ba(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var Vo=G();
function AMY(a,b){var c,d,e,f,g,h,i;c=new X3;Gk(c,b);d=b.n.cP;e=new R9;e.yL=c;Ba(d,e);d=b.bG;f=new Qf;f.Eq=c;g=P(B,1);g.data[0]=C(159);CL(d,f,C(160),g);h=new Qe;h.Fp=c;g=P(B,1);g.data[0]=AKv([1,2,3,4,5]);CL(d,h,C(161),g);h=new Qb;h.Gs=c;i=P(B,1);i.data[0]=A6Z([1,2,3,4,5]);CL(d,h,C(162),i);h=new P_;h.Fz=c;g=P(B,1);g.data[0]=D4([1,2,3,4,5]);CL(d,h,C(163),g);d=b.n.bF;e=new H4;h=new R8;h.A2=c;IH(e,b,h);Ba(d,e);return c;}
var ABQ=G();
function AM_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Xj;H2(c,b);c.fa=Io(0,0,300,300);c.gT=TN(0,0,3,3);d=b.R;b=b.n.bX;e=new ACL;e.nk=c;Ba(b,e);b=AMC(d);c.BI=b;F1(c.fa,b);F$(c.fa);b=c.fa.bq;FV();BO(b,A$q);BO(c.fa.ba,DD(204,120,50));AHf();e=A$r;f=DR((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C1(d);switch(e.fg){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Fa;X(b);N(b);}b:
{Xv(m,5,5,h);b=m.eQ.ea;switch(e.fg){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Fa;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.n1=m;Y(c.gT.u,BU(m),CR(c.n1));BO(c.gT.bq,c.qo);return c;}
var ABP=G();
function A06(a,b){var c,d,e;c=new Tn;H2(c,b);c.hb=Io(0,0,300,300);c.mP=new Bh;c.kR=new Bh;c.j$=new Bh;d=b.R;b=b.n.bX;e=new Ys;e.kN=c;Ba(b,e);b=AMC(d);c.ro=b;F1(c.hb,b);F$(c.hb);b=c.hb.bq;FV();BO(b,A$q);BO(c.hb.ba,DD(204,120,50));return c;}
var ABO=G();
function ASP(a,b){var c,d,e,f;c=new ABl;Er(c,b);c.EB=20;c.Gf=11;c.EZ=220;c.mt=new Bh;c.FH=5000;c.iB=1;c.g4=I(Hy,[Cx(0),Cx(255)]);c.eS=b.R;d=b.n.bX;e=new Zj;e.mg=c;f=new VA;f.ua=e;e.rd=f;Ba(d,e);b=b.n.fB;d=new WI;d.rW=c;Ba(b,d);b=HW(c.eS,200,220);c.o6=b;HH(b,C(156),20.0);b=HW(c.eS,200,20);c.gW=b;HH(b,C(156),20.0);c.iR=Ju();return c;}
var ABC=G();
function APS(a,b){var c,d,e;c=new KH;H2(c,b);Ba(b.n.bX,c);d=b.n.bF;e=new AEd;e.xo=c;Ba(d,e);Ba(b.n.g2,new AEc);d=b.n.g2;e=new AEb;e.s2=c;Ba(d,e);Ba(b.n.hs,new AEa);d=b.n.hs;e=new AEe;e.AJ=c;Ba(d,e);b=!Wo(b.bG)?C(164):C(165);d=new J;L(d);H(H(d,C(166)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ABB=G();
function AW2(a,b){var c,d;c=new S8;H2(c,b);c.u2=Cx(20);c.gB=Io(0,0,300,300);c.ww=DA(C(14),80.0);b=b.n.bF;d=new SN;d.EG=c;Ba(b,d);return c;}
var ABz=G();
function A4N(a,b){var c;c=new T2;O6(c,b);Ht(c.co,0,0,300,300);Y(c.dw,300,300);return c;}
var ABy=G();
function AR1(a,b){var c;c=new T1;O6(c,b);c.gb=new Bh;c.gC=new Bh;Y(c.ei,150,140);Y(c.dw,500,100);Y(c.fx,150,200);Y(c.eR,500,250);return c;}
var ABx=G();
function A3L(a,b){var c,d,e;c=new WQ;Gk(c,b);c.C$=3;c.wZ=DA(C(167),20.0);c.km=VE();c.qN=1;Ba(c.q.dF,c);BO(c.dc,Cx(43));d=b.n.bF;e=new PV;e.z4=c;Ba(d,e);b=b.n.cP;d=new PX;d.wq=c;Ba(b,d);return c;}
var ABw=G();
function AMQ(a,b){return A7X(b);}
var ABv=G();
function A3y(a,b){var c,d,e,f;c=new QX;Kt(c,b);BO(c.dc,Cx(43));c.mu=Ld(c.y);d=b.n.bF;e=new H4;f=new PY;f.Ca=c;IH(e,b,f);Ba(d,e);b=b.n.cP;d=new PZ;d.z1=c;Ba(b,d);return c;}
var ABG=G();
function A2N(a,b){var c,d;c=new Sn;IO(c,b,1);c.nq=Hv();Ba(c.q.dF,c);BO(c.dc,Cx(43));b=b.n.cP;d=new Yl;d.yV=c;Ba(b,d);return c;}
var ABF=G();
function AOH(a,b){var c;c=new ZB;Kt(c,b);c.wz=Hv();BO(c.dc,Cx(43));return c;}
var ABE=G();
function A0a(a,b){return A7x(b);}
var ABD=G();
function AQL(a,b){var c,d,e;c=new P7;Kt(c,b);c.vX=Hv();BO(c.dc,Cx(43));d=b.n.cP;e=new Ve;e.Dl=c;Ba(d,e);b=b.n.bF;d=new Vd;d.uD=c;Ba(b,d);return c;}
var ABJ=G();
function AQM(a,b){var c,d,e;c=new AAk;Kt(c,b);c.pv=Hv();BO(c.dc,Cx(43));d=b.n.cP;e=new Rg;e.B2=c;Ba(d,e);b=b.n.bF;d=new Rf;d.DX=c;Ba(b,d);return c;}
var ABI=G();
function AXJ(a,b){var c,d;c=new Uw;Gk(c,b);c.iy=Hv();Ba(c.q.dF,c);BO(c.dc,Cx(43));b=b.n.cP;d=new ABT;d.rh=c;Ba(b,d);return c;}
var ABH=G();
function AOW(a,b){var c;c=new Pc;AIX(c,b);ALS(c.d4);return c;}
function AD_(){var a=this;B.call(a);a.vi=null;a.BB=null;a.A4=null;}
function It(){var a=this;B.call(a);a.bQ=0;a.cU=0;a.dL=0;a.kV=0;}
function A$s(a,b,c,d){var e=new It();ACO(e,a,b,c,d);return e;}
function ACO(a,b,c,d,e){a.bQ=d;a.cU=b;a.dL=c;a.kV=e;}
function QO(){var a=this;It.call(a);a.eo=null;a.bj=0;a.j7=0;a.AG=0;a.pc=0;}
var AH$=G();
function VJ(b,c){return (b+(c/2|0)|0)/c|0;}
function Zx(b,c,d){if(b<(2147483647/c|0))return VJ(Bc(b,c),d);return 0.5+c*b/d|0;}
function In(b,c){return ((b+c|0)-1|0)/c|0;}
function GV(b){return b+0.5|0;}
function C4(b){return b+0.5|0;}
function Fc(b,c,d){return Bd(b,Be(c,d));}
function Nu(b,c){return AJt(b)/AJt(c);}
function O8(){var a=this;It.call(a);a.j=null;a.EY=null;}
var Ua=G(0);
function PU(){var a=this;B.call(a);a.wx=null;a.wy=null;}
function A07(a,b){var c,d;c=a.wx;d=a.wy;$rt_globals.console.info("paste plain string "+b);c.g(FS(b));DI(d);}
function AC4(){B.call(this);this.wU=null;}
function ADN(a,b){a.wU.clipboardData.setData("text/plain",$rt_ustr(b));}
function AEg(){var a=this;Nv.call(a);a.D3=0;a.xK=0;}
function CF(){var a=this;B.call(a);a.i=null;a.k=null;a.bW=0.0;}
function AWN(){var a=new CF();E_(a);return a;}
function E_(a){a.i=new Bh;a.k=new Bh;}
function AUc(a){}
function A14(a){return BK(0,0);}
function J7(a,b,c,d){var e;if(!Ke(a.i,b)){a.r3(b);Cr(a.i,b);}if(!Ke(a.k,c)){a.pm(c);Cr(a.k,c);}e=a.bW;if(e!==d){a.bW=d;a.lR(e,d);}}
function DE(a,b){return Ci(b,a.bW);}
function B3(a,b){return Gx(b,a.i,a.k);}
function AMp(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AQN();Bv(b,d,e,f,A$t);}
function ADn(a,b){var c;c=a.i;Ma(b,c.a,c.b,a.k);}
function AYv(a,b){return 0;}
function ARV(a,b){}
function AV3(a,b){}
function A3m(a,b,c){}
function AV$(a){}
function AQH(a,b,c,d){return 0;}
function AOm(a,b,c){return null;}
function ASC(a,b,c){return 0;}
function AVN(a,b){return 0;}
function A3c(a,b,c,d){return 0;}
function AGj(){var a=this;CF.call(a);a.iT=null;a.lD=null;a.lE=null;a.lB=null;a.lC=null;a.ey=null;a.gK=null;a.gL=null;a.iA=null;}
function AYp(a){var b=new AGj();AOM(b,a);return b;}
function AOM(a,b){E_(a);a.lD=new Bh;a.lE=new Bh;a.lB=new Bh;a.lC=new Bh;a.iT=b;}
function OA(a,b,c){a.gK=b;a.gL=c;}
function AHG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bv(b,c.a,c.b,a.k,a.iA.bv.ep);if(a.ey===null)return;d=Cu(a.iT,2.0);e=G2(a.ey,a.gK.lA(),1);f=G2(a.ey,a.gK.kO(),1);g=G2(a.ey,a.gL.lA(),0);h=G2(a.ey,a.gL.kO(),0);i=Be(e,g);j=Bd(f,h);g=BP(i,j);if(g<=0)Ca(b,1);k=a.gK.lc();l=a.gK.md();m=a.gL.md();n=a.gL.lc();o=a.iT.qu;while(i<=j){p=a.ey.iE.data[i];if(p.pl){q=a.gK.hS(p.ij);r=a.gK.hS(p.ij+p.oC|0);s=a.gL.hS(p.ii);t=a.gL.hS(p.ii+p.oB|0);Y(a.lD,a.i.a,q);Y(a.lB,a.i.a,r);Y(a.lE,a.i.a+a.k.a|0,s);Y(a.lC,
a.i.a+a.k.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.k.b|0);if(v>u){Y(o,a.k.a,v-u|0);c=a.iA;w=Kj(c.ed,c,p.pl);if(q==r)RH(a,b,q,s,d,k.a,l.a,w,a.lD,a.lB);if(s==t)RH(a,b,s,q,d,n.a,m.a,w,a.lE,a.lC);AFd(b,a.i.a,u,o,a.lD,a.lE,a.lB,a.lC,w);}}i=i+1|0;}if(g<=0)Ca(b,0);}
function RH(a,b,c,d,e,f,g,h,i,j){var k;k=a.iT.d8;Y(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bv(b,f,c,k,h);}
function AGS(){var a=this;B.call(a);a.cb=null;a.dD=null;a.iL=null;}
function Ld(a){var b=new AGS();ANO(b,a);return b;}
function ANO(a,b){a.cb=b;}
function G0(a,b){var c;a.iL=b;c=a.dD;if(c!==null)EQ(c,b.cw);c=a.cb.eh;if(c!==null)HA(c,b.cw,b.gy);}
function AAf(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AQY();i=c.p;j=0;while(j<i){if(f===null){k=(BI(c,j)).bs;l=AAQ(FX(Cf(g.h,k)));m=ABo(g.fv);}else{n=f.data;k=n[j].p1.nE;l=!BR(g.fv,n[j].mk)?C(21):AAQ(FX(Cf(g.h,k)));m=ABo(n[j].mk);}if(M(l)>153){o=Cw(l,0,150);n=new J;L(n);H(H(n,o),C(168));l=K(n);}if(M(m)>153){n=Cw(m,0,150);o=new J;L(o);H(H(o,n),C(168));m=K(o);}n=Dn(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BI(c,j);}if(f!==null){q=new AEq;q.s6=d;q.s7=p;}else{q=new AEr;q.Ci=d;q.Ch
=o;}WZ(h,m,n,l,q);j=j+1|0;}r=AD3(h);if(a.dD!==null)AB1(a);c=a.cb.bi;g=new RV;f=new ABj;f.ra=a;f.rb=d;AMj(g,c,f);XU(g,r);d=a.iL;WT(g,d.cw,d.Cr);d=AFp(c);a.dD=d;d.qh=d.qh|1;d=GW(g,c);f=a.iL.cw;Jz(d,f.nh,f.pd);Lu(a.dD,d);EQ(a.dD,a.iL.cw);d=a.dD;f=new J;L(f);H(H(f,C(169)),e);C2(d,K(f));Ep(a.cb,a.dD);d=a.dD;i=(d.S.k.b+Cu(d.bf,2.0)|0)+Cu(c,2.0)|0;s=(g.ec+g.eW|0)+g.hR|0;t=Cu(g.b0,5.0);e=BK(Fc(t,b.a,g.b0.bT.a-s|0),Fc(i,b.b,g.b0.bT.b-g.cS.b|0));Zd(g);Lg(g);i=Eo(g);s=g.b$.data.length;i=Bc(i,s)+Bc(g.d1,s+1|0)|0;Y(g.cS,
g.k.a,i);i=(g.ec+g.eW|0)+g.hR|0;b=g.b0;s=(b.bT.a-e.a|0)-Cu(b,5.0)|0;b=g.b0;t=(b.bT.b-e.b|0)-Cu(b,5.0)|0;d=BK(Be(i,s),Be(g.cS.b,t));EB(a.dD,e,d);DQ(c,g);}
function AB1(a){II(a.cb,a.dD);Kf(a.dD);a.dD=null;}
function Sg(a,b,c){var d,e;d=a.cb;e=a.iL;Gp(d,e.cw,e.gy,b,c);}
function IZ(a,b,c,d,e,f,g){Sg(a,b,AAH(Mm(a,c,g,d,e,f),b));}
function Mm(a,b,c,d,e,f){var g;g=new TH;g.gD=a;g.by=b;g.rQ=c;g.js=e;g.oM=f;g.mG=d;return g;}
function AF3(b){var c;c=new Sr;c.AM=b;return c;}
var F6=G(0);
function A16(a){}
function APY(a){}
function AMW(a,b,c){return 0;}
function AWK(a){return null;}
var Rz=G(0);
var ML=G(0);
function AGp(){var a=this;CF.call(a);a.cn=null;a.bn=null;a.k$=null;a.CO=0;a.oK=null;a.d6=null;a.n6=0;a.hQ=0.0;a.mA=null;a.D2=null;a.f$=null;a.X=0;a.de=0;a.d=null;a.fH=null;a.ew=null;a.e2=null;a.BN=0;a.AA=0;a.c7=0;a.cl=0;a.cs=0;a.it=null;a.f5=null;a.fK=null;a.jM=0;a.kq=0;a.Gj=0;a.Di=0;a.lk=0;a.mb=0;a.qm=0;a.en=0;a.dj=null;a.fD=null;a.e6=0;a.b8=0;a.C8=null;a.ko=null;a.zY=null;a.vd=null;a.iI=null;a.bz=0;a.c3=null;a.ta=0;a.rS=null;a.vM=null;}
function Iu(a){var b=new AGp();AUa(b,a);return b;}
function AUa(a,b){var c,d,e;E_(a);a.CO=0;a.oK=P(U,10);a.d6=AZ7();a.hQ=16.0;a.mA=C(156);a.d=A7P(P(BB,0),null,null);c=new AEG;c.zc=CQ(P(NM,0));c.CL=CQ(P(NM,0));c.q5=CQ(P(ABM,0));c.wl=CQ(P(ZD,0));c.vZ=CQ(P(Gn,0));c.BE=CQ(P(S_,0));a.fH=c;a.e2=P(FD,0);a.it=BK(1,0);a.f5=Ju();a.fK=Ju();a.jM=0;a.kq=1;a.lk=1;a.mb=1;a.qm=1;a.en=3;a.dj=AID();a.fD=C(170);a.e6=0;a.b8=0;c=DY();BF(c);d=new Yc;d.Ek=c;a.ko=d;a.bz=0;c=new Yb;c.qT=a;a.rS=c;c=new Ya;c.tW=a;a.vM=c;c=b.cb.bi;a.cn=c;a.bn=c.bL;a.k$=b;b=ARC(c.cJ);a.c3=b;a.f$=b.hj;e
=a.oK.data;b=new X_;b.BR=a;e[1]=b;b=new Yg;b.yi=a;e[2]=b;b=new Yf;b.uN=a;e[3]=b;b=new Ye;b.xa=a;e[4]=b;b=new Yd;b.rD=a;e[5]=b;b=new X$;b.Ah=a;e[6]=b;Lm(a.d,a,GS(a));}
function MN(a,b,c,d){J7(a,b,c,d);ABq(a,b,c,d);}
function ATh(a,b,c){V6(a,a.mA,a.hQ);Qn(a.c3,c);}
function A5H(a,b,c){a.zY=b;a.vd=c;}
function ABq(a,b,c,d){var e;a.c7=Ci(80.0,d);a.cl=Ci(1.0,d);a.cs=Ci(10.0,d);e=!a.b8?b.a:(b.a+c.a|0)-IF(a)|0;Y(a.cn.d8,e,b.b);SV(a.dj,a.cn.d8,Be(IF(a),c.a),c.b,d);b=a.d6;e=Ci(2.0,d);b.eY.u.a=e;}
function AZE(a){a.n6=1;Oi(a);}
function AXA(a){a.n6=0;}
function Oi(a){Zp(a.d6,Nf(GS(a)));}
function FG(a,b){var c,d;a.ew=b;c=a.d6;d=b.bv.CK;BO(c.eY.ba,d);c=a.f5;d=b.bv;Ik(c,d.lY,d.l3);c=a.fK;b=b.bv;Ik(c,b.lY,b.l3);}
function JN(a){OU(a,a.c3.dh.oE,a.hQ+1.0);}
function KN(a){var b;b=a.hQ;if(b<=7.0)return;OU(a,a.c3.dh.oE,b-1.0);}
function IQ(a,b){OU(a,b,a.hQ);}
function AT1(a,b){KO(a.cn,b);}
function OU(a,b,c){if(a.cn.ci!==0.0){V6(a,b,c);JO(GS(a));}a.hQ=c;a.mA=b;}
function Me(a){var b,c,d;b=a.c3;c=a.cn.cJ;d=a.bn;b.i3=c;if(b.hT.jz!=c&&b.eg)AE1(b,d);TB(a.e2);IT(a.dj);Om(a);}
function V6(a,b,c){var d,e,f,g,h,i,j;d=a.bW;e=c*d;Ci(c,d);f=a.c3.dh;d=f===null?0.0:f.po;if(!(e===d&&BR(b,a.mA))){IT(a.dj);OO(a.e2);g=a.d.h.E.data;h=g.length;i=0;while(i<h){E9(g[i]);i=i+1|0;}j=a.c3;f=a.bn;j.dh=AKg(b,e,300,600,j.hj,f);f=a.c3;a.D2=f.dh;a.X=SZ(f,1.25,a.bn);a.de=C4(a.c3.dh.qv);a.d6.eY.u.b=Fd(a.c3.dh);i=a.X;f=new J;L(f);b=H(H(f,C(171)),b);Br(b,32);V(H(De(b,e),C(172)),i);$rt_globals.console.info($rt_ustr(K(f)));if(A$u){h=NB(a.c3.dh,a.X);b=new J;L(b);V(H(b,C(173)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iF
=G_(Ga(a),a.d.B,a.bn.ck,a.f$);Im(a);Om(a);}}
function AX0(a){OO(a.e2);Y7(a.c3);IT(a.dj);}
function O7(a){return Bc(CK(a.d.h)+5|0,a.X);}
function Lf(a){return Bd(O7(a)-a.k.b|0,0);}
function AB2(a){return Bd(a.jM-Gy(a)|0,0);}
function Gy(a){var b;b=!a.b8?0:a.de+a.cs|0;return Bd(1,(a.k.a-a.c7|0)-b|0);}
function IF(a){return a.b8?a.c7:a.c7-a.cs|0;}
function Eq(a){return a.k.b;}
function LU(a,b){var c,d,e;c=a.d.h;if(ACt(c)&&b-c.AU>0.03125?1:0){d=a.ta;e=a.d.h.cx;if(d!=e){a.ta=e;AAA(a);}}if(a.X)ABV(a);d=ACC((a.bz+a.Gj|0)-a.Di|0,Lf(a));e=a.bz==d?0:1;if(e)Gc(a,d);return !AB4(a.d6,b)&&!e&&!a.CO?0:1;}
function I2(a,b){var c,d;b=ACC(b,AB2(a));c=a.d;d=b==c.d2?0:1;if(d)c.d2=b;if(d){c=a.zY;if(c!==null)c.e();}}
function Gc(a,b){var c;if(AKu(a,b)){c=a.vd;if(c!==null)c.e();}}
function AKu(a,b){var c,d;c=ACC(b,Lf(a));d=c==a.bz?0:1;if(d){a.bz=c;a.d.mY=c/a.X;}return d;}
function AIh(a){return BK((IF(a)+a.cl|0)+a.cs|0,a.X);}
function AU0(a){return a.X;}
function A1w(a,b){ID(a);}
function ID(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=In(a.k.b,a.X)+7|0;c=a.e2;if(c.data.length<b)a.e2=Z6(b,c,a.c3,a.BN,a.AA,a.d.h);Ca(a.bn,0);NW(a.bn,a.i,a.k);b=a.X;d=a.d6;e=(b-d.eY.u.b|0)/2|0;b=a.d.iF-(TD(d)/2|0)|0;d=a.d;f=b-d.d2|0;g=!a.b8?a.c7:(a.cl+a.cs|0)+a.de|0;UT(a.d6,g+f|0,(e+Bc(d.x,a.X)|0)-a.bz|0);h=CK(a.d.h);i=Ut(a);j=Us(a);a.BN=i;a.AA=j;k=!a.b8?a.i.a+a.c7|0:((a.i.a+a.cl|0)+a.cs|0)+a.de|0;l=Gy(a);m=a.d.lT;n=DE(a,40.0);o=i;while(o<=j&&o<h){p=Cf(a.d.h,o);q=ADo(a,o);Ym(q,p,a.bn,a.X,l,a.d.d2,
o,o%a.e2.data.length|0);a.jM=Bd(a.jM,FR(p)+n|0);g=a.X;r=Bc(g,o)-a.bz|0;s=m===null?null:m.data[o];r=a.i.b+r|0;t=a.bn;u=a.d.d2;v=a.ew;d=ALt(Bl(a),o);if(d!==null){if(d.b==(-1))d.b=p.U;d.a=G_(p,d.a,a.bn.ck,a.f$);d.b=G_(p,d.b,a.bn.ck,a.f$);}w=a.d;QH(q,r,k,t,l,g,u,v,d,w.i9,w.iS,w.x!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.cn.d8;o=i;while(o<=j&&o<h&&a.lk){q=ADo(a,o);r=Bc(a.X,o)-a.bz|0;w=Bl(a);if(!DC(w))u=0;else{d=Ew(w);w=Gg(w);u=d.O<=o&&o<w.O?1:0;}d=a.ew;w=d.bv;t=w.to;x=a.d.x==o&&m===null?1:0;a:{if(u)t=w.li;else{if(m!==
null){c=m.data;if(o<c.length&&c[o]!==null){t=Kj(d.ed,d,c[o].hl);break a;}}if(x)t=w.gF;}}AJW(q,a.bn,k,a.i.b+r|0,a.X,v,a.d.d2,l,t);o=o+1|0;}if(a.kq){y=Be(j+1|0,h);ALK(a,Bc(a.X,y)-a.bz|0,l);}AHC(a);if(a.mb)AIT(a,i,j,h);if(a.n6&&f>=(( -TD(a.d6)|0)/2|0)&&ALn(a.d6,a.k))AC6(a.d6,a.bn,a.i);AHo(a);AGV(a);Gm(a.bn);AG8(a,i,j);}
function AIT(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lT;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.ew;h=Kj(h.ed,h,g.hl);}else h=e!==null?a.ew.bv.ep:a.ew.bv.gF;if(!(a.d.x!=b&&g===null)){g=a.it;i=a.b8;g.a=!i?(a.cs-a.cl|0)-a.en|0:((a.cs+a.de|0)+a.cl|0)-a.en|0;j=a.X;g.b=j;i=i?0:(a.c7-a.cs|0)+a.cl|0;j=Bc(j,b)-a.bz|0;k=a.bn;l=a.i;Bv(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AG8(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CK(a.d.h),a.X)-a.bz|0);f=a.dj;g=a.bz;h=a.d;i=h.lT===null?h.x:(-1);j=a.bn;k=a.ew;NW(j,f.gP,f.fC);Tz(f,j,b,d);ACE(f,b,j);ABU(f,g,e,k,j);l=k.lw;if(e<d){h=f.gP;Bv(j,h.a,h.b+e|0,BK(f.fC.a,d-e|0),l.lq);}if(b<=i&&i<=c){k=k.lw;c=i/20|0;h=f.c9;l=BI(h,c%h.p|0);h=f.gP;d=Bc(f.c9.p,f.hx);c=l.fA.b;b=((l.qI.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CR(l.cY)|0)|0;c=i%l.el|0;e=l.cC;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;Y(l.jv,l.fA.a,e);f=l.kd;c=i%l.el|0;d=l.cC;Ct(f,0.0,
Bc(c,d),l.fA.a,d);NG(l,j,b,h,k.yq,k.qW);}Gm(j);}
function Ut(a){return Be(a.bz/a.X|0,CK(a.d.h)-1|0);}
function Us(a){return Be(((a.bz+Eq(a)|0)-1|0)/a.X|0,CK(a.d.h)-1|0);}
function ATG(a,b){return (Bc(a.X,b)-a.bz|0)+a.i.b|0;}
function ATu(a){return a.i;}
function AWH(a){return a.k;}
function Om(a){Zu(a.dj,a.c3.dh,a.X,a.cn.cJ);}
function ADo(a,b){var c;c=a.e2.data;return c[b%c.length|0];}
function VS(a,b){var c,d,e,f;c=Fc(0,M(a.fD),PN(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BX;X(b);N(b);}if(c!=1){d=b.cf.data.length;if(d&&c){e=B6(Bc(d,c));d=0;f=0;while(f<c){Rq(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=MR(e);}else b=A9p;}}return b;}
function Qs(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BQ(i);k=A8U(i).data;JQ(j,c);c=0;l=k.length;if(c>l){f=new BX;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cx=o.cx+1|0;p=P(Hm,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AU9(h[m],n[m],k[m],b[m],f.bs,f.bw);m=m+1|0;}Bz(o.iZ,p);c=0;while(c<i){b=e.data;NF(o,h[c],n[c],k[c],b[c]);g.qL(C3(h[c]),b[c]);c=c+1|0;}}
function AMD(a){var b;if(DC(Bl(a)))G8(a);else{b=a.d;Po(b.h,b.x,b.B);}Im(a);EG(a);return 1;}
function DO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e6)return 0;if(DC(Bl(a)))G8(a);c=MB(ADc(b,C(174),C(21)),C(175),(-1));d=c.data;b=a.d;e=b.h;f=b.x;g=b.B;AE7(e,f,g,c);h=d.length;if(!h)b=A9p;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B6(i+Bc(h-1|0,M(C(175)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(175))){m=l+1|0;c[l]=Q(C(175),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=MR(k);}Gf(e,f,g,0,b);b=a.d;f=b.x;m
=(f+h|0)-1|0;CS(a,m,m!=f?M(d[h-1|0]):b.B+M(d[0])|0,0);Gj(a);EG(a);return 1;}
function G8(a){var b,c,d;b=Ew(Bl(a));c=a.d.h;d=Bl(a);Px(c,d,VC(c,d));CS(a,b.O,b.be,0);Gj(a);EG(a);}
function Gj(a){var b,c;(Bl(a)).dC=0;b=(Bl(a)).bS;c=a.d;Ch(b,c.x,c.B);b=(Bl(a)).bI;c=a.d;Ch(b,c.x,c.B);}
function ALK(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cn.d8;e.b=d-b|0;d=a.b8;e.a=!d?c+a.en|0:c+a.cl|0;d=!d?(a.i.a+a.c7|0)-a.en|0:(((a.i.a+a.cs|0)+a.de|0)+a.cl|0)-a.en|0;Bv(a.bn,d,a.i.b+b|0,e,a.ew.bv.ep);}}
function AHo(a){var b;b=a.b8?a.i.a+a.de|0:a.i.a+a.k.a|0;KG(a.f5,a.bz,a.i.b,Eq(a),O7(a),b,a.de);b=!a.b8?a.i.a+a.c7|0:((a.i.a+a.cl|0)+a.cs|0)+a.de|0;R3(a.fK,a.d.d2,b,Gy(a),a.jM,a.i.b+Eq(a)|0,a.de);}
function AGV(a){var b,c;b=AAj(a.f5);c=AAj(a.fK);if(!(!b&&!c)){Ca(a.bn,1);if(b)G$(a.f5,a.bn);if(c)G$(a.fK,a.bn);if(b)Hd(a.f5,a.bn);if(c)Hd(a.fK,a.bn);}}
function AHC(a){var b,c,d,e,f;b=a.it;c=a.k;b.b=c.b;b.a=a.cl;d=!a.b8?a.c7-a.cs|0:(c.a-IF(a)|0)-a.cl|0;b=a.bn;c=a.i;Bv(b,c.a+d|0,c.b,a.it,a.ew.bv.vp);b=a.it;d=a.b8;b.a=!d?(a.cs-a.cl|0)-a.en|0:((a.cs+a.de|0)+a.cl|0)-a.en|0;e=d?0:(a.c7-a.cs|0)+a.cl|0;c=a.bn;f=a.i;Bv(c,f.a+e|0,f.b,b,a.ew.bv.ep);}
function ACC(b,c){return Be(Bd(0,b),c);}
function GS(a){return a.cn.cG;}
function GZ(a,b,c){var d,e,f;d=E1(b);e=new J;L(e);H(H(e,C(176)),d);$rt_globals.console.info($rt_ustr(K(e)));CS(a,0,0,0);f=new ADM;f.zJ=a;f.zK=b;f.zI=c;c=DY();BF(c);d=new ADL;d.yh=c;VP(b,f,d);}
function JV(a,b,c,d,e){if(I9(a,e))return 1;if(c&&d)return 1;if(c)Gc(a,a.bz+((Bc(b,a.X)*12|0)/10|0)|0);else if(!d){IE(a,a.d.x+b|0,e);ACG(a);}return 1;}
function SK(a,b,c,d){var e,f,g;if(I9(a,d))return 1;e=Ga(a);if(!c)f=a.d.B+b|0;else if(b>=0)f=Hj(e,a.d.B);else{b=a.d.B;if(!b)f=(-1);else{c=KB(e,b);if(c>0&&e.eB.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eB.data[c-1|0];}}if(f>e.U){e=a.d;if((e.x+1|0)<CK(e.h))CS(a,a.d.x+1|0,0,d);}else if(f>=0)DF(a,f,d);else{e=a.d;b=e.x;if(b>0){g=(Cf(e.h,b-1|0)).U;CS(a,a.d.x-1|0,g,d);}}ADz(a);return 1;}
function I9(a,b){if(DC(Bl(a))&&!b){Gj(a);Im(a);return 1;}if(!(b&&DC(Bl(a))))Gj(a);return 0;}
function CS(a,b,c,d){a.d.B=c;return IE(a,b,d);}
function IE(a,b,c){var d;d=a.d;d.x=Fc(0,b,CK(d.h)-1|0);return DF(a,a.d.B,c);}
function DF(a,b,c){var d,e;a.d.B=Fc(0,b,(Ga(a)).U);a.d.iF=a.bW===0.0?0:G_(Ga(a),a.d.B,a.bn.ck,a.f$);Oi(a);Im(a);if(c)(Bl(a)).dC=1;d=Bl(a);e=a.d;Oj(d,e.x,e.B);(Bl(a)).dC=0;return 1;}
function MT(a,b){var c;c=AYR(Bl(a));DF(a,b,0);J4(Bl(a),c);}
function Im(a){ACG(a);ADz(a);}
function ACG(a){var b,c,d,e,f;b=a.bz;c=b+Eq(a)|0;d=a.d.x;e=a.X;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))Gc(a,d-e|0);else if(f>(c-e|0))Gc(a,(f-Eq(a)|0)+a.X|0);}
function ADz(a){var b,c,d,e,f;b=C4(a.cn.ci*30.0);c=a.d.d2;d=c+Gy(a)|0;e=a.d.iF;f=e+b|0;if(e<(c+b|0))I2(a,e-b|0);else if(f>(d-b|0))I2(a,(f-Gy(a)|0)+b|0);}
function Jc(a,b){var c,d;CS(a,b.bs,b.bw,0);c=Hj(Ga(a),a.d.B);Ch((Bl(a)).bI,a.d.x,c);b=(Bl(a)).bS;d=a.d;Ch(b,d.x,d.B);Jh(a.d);}
function FI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=Fc(0,((b.b-d.b|0)+a.bz|0)/a.X|0,CK(a.d.h)-1|0);g=!a.b8?a.c7:(a.cl+a.cs|0)+a.de|0;h=Bd(0,(e-g|0)+a.d.d2|0);b=Cf(a.d.h,f);d=a.bn.ck;i=a.f$;if(!(b.e3!==null&&!b.hi))NR(b,d,i);j=b.e3;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.U;else{c=ACr(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.U;else{j=AAX(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.s.data[e].w)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A$v){b=new J;L(b);V(H(V(H(V(H(b,C(177)),e),C(178)),h),C(179)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DW(f,k);}
function Ws(a,b){var c,d;c=a.d;d=b.bs;c.x=d;c.B=b.bw;c.iF=G_(Cf(c.h,d),a.d.B,a.bn.ck,a.f$);Oi(a);}
function Ga(a){var b;b=a.d;return Cf(b.h,b.x);}
function L$(a,b,c,d){var e,f;e=C4((a.X*4|0)*d/150.0);f=C4(c);if(e)Gc(a,a.bz+e|0);if(f)I2(a,a.d.d2+f|0);return 1;}
function TI(a,b,c){(Bl(a)).dC=0;return 1;}
function Xa(a,b,c){var d;if(!Dz(a.cn,a))DQ(a.cn,a);if(c)return null;d=Ge(a.f5,b.j,a.rS,1);if(d!==null)return d;d=Ge(a.fK,b.j,a.vM,0);if(d!==null)return d;Jy(a);Ws(a,FI(a,b.j));Jh(a.d);if(!b.bQ&&!(Bl(a)).dC){b=(Bl(a)).bS;d=a.d;Ch(b,d.x,d.B);}(Bl(a)).dC=1;b=Bl(a);d=a.d;Oj(b,d.x,d.B);b=new AEs;b.vW=a;return b;}
function Pr(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cU){b=b.j;e=FI(a,b);f=Jt(a.d.h,e.bs,e.bw);g=Tr(a,f);h=OP(a.fH,Eh(a.d),HP(a.d));if(h!==null){i=a.d;c=e.bs;d=e.bw;e=new AD9;e.DO=a;e.DP=b;e.DN=g;h.us(i,c,d,e,a.ko);}else{e=CA(a.d.h.dY,f);if(e!==null){Jc(a,e);c=1;}else{e=CA(a.d.h.dQ,f);if(e!==null&&!EL(e)){if(e.p!=1){AAf(a.k$,b,e,a,g);c=1;}else{Jc(a,BI(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FI(a,b.j)).bs;g=Cf(a.d.h,c);c=G1(g,a.d.B);d=Hj(g,a.d.B);b=OF(g,c);if((d-1|0)==g.U){Ch((Bl(a)).bS,
a.d.x,PN(g));Ch((Bl(a)).bI,a.d.x,g.U);}else{if(b!==null){b=b.w;j=0;c:{while(true){k=b.cf.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.B;if(c==j){c=G1(g,c-1|0);d=Hj(g,c);}else{if(d!=j){Rd(Bl(a),a.d.x);break b;}c=G1(g,d+1|0);d=Hj(g,c);}}}Ch((Bl(a)).bS,a.d.x,c);(Bl(a)).dC=1;CS(a,a.d.x,d,0);(Bl(a)).dC=0;Jy(a);}}break a;case 3:break;default:break a;}Rd(Bl(a),a.d.x);AAI(a.d.ib);Jy(a);}}return 1;}
function Yh(a,b){var c,d,e,f,g,h,i,j;c=a.cn.c2;if(Gl(a.f5,b.j,c))return 1;if(Gl(a.fK,b.j,c))return 1;d=a.dj;if(Gx(b.j,d.gP,d.fC)&&GX(c)?1:0)return 1;e=b.j;f=!a.b8?a.c7:(a.cs+a.cl|0)+a.de|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gy(a);i=Eq(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GX(c);if(b.cU){e=FI(a,b.j);e.bw=G1(Cf(a.d.h,e.bs),e.bw);b=a.d.h;if(!HG(b.dY,e)&&!HG(b.dQ,e)?0:1)return D5(c,C(180));}return D5(c,C(181));}
function A5i(a,b){var c,d,e,f,g;c=b.cU;if(c&&b.bj==65){c=CK(a.d.h)-1|0;d=GP(a.d.h,c);Ch((Bl(a)).bS,0,0);Ch((Bl(a)).bI,CK(a.d.h)-1|0,d);return 1;}if(c&&b.bj==80){MI(a.d);return 1;}if(!a.e6&&c&&b.bj==90){if(DC(Bl(a)))Gj(a);b=a.d.h;b.cx=b.cx+1|0;e=b.iZ;d=e.p;if(!d)e=null;else{f=(EV(e,d-1|0)).data;e=XA(b,f[0]);c=1;while(c<f.length){XA(b,f[c]);c=c+1|0;}}if(e!==null){CS(a,e.a,e.b,0);EG(a);}return 1;}if(!c&&!b.dL){if(Bk(b.eo,C(182))){DO(a,C(183));DF(a,a.d.B-1|0,0);c=1;}else if(Bk(b.eo,C(184))){DO(a,C(185));DF(a,a.d.B
-1|0,0);c=1;}else if(Bk(b.eo,C(36))){DO(a,C(22));DF(a,a.d.B-1|0,0);c=1;}else if(Bk(b.eo,C(186))){DO(a,C(187));DF(a,a.d.B-1|0,0);c=1;}else if(Bk(b.eo,C(188))){DO(a,C(189));DF(a,a.d.B-1|0,0);c=1;}else if(!Bk(b.eo,C(190)))c=0;else{DO(a,C(191));DF(a,a.d.B-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dL&&!b.cU)){d=b.bj;if(d>=48&&d<=57){c=d-48|0;e=a.oK.data[c];if(e!==null)e.e();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bj){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AKG(a,b))return 1;if(AHl(a,b))return 1;c=b.cU;if(c&&b.bj==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bj;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dL&&!b.kV)return M(b.eo)>0&&DO(a,b.eo)?1:0;return 0;}return 0;}
function ABV(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Ut(a);d=Us(a);if(b.fj!=3&&b.gS==3){e=Mc(b.pP);f=new Xw;f.zv=c;f.zu=d;g=new RX;g.sY=f;while(!g.m9&&On(e,g)){}if(!g.m9&&Bk(C(192),Eh(b))){c=Bd(0,c-100|0);d=Be(CK(b.h)-1|0,d+100|0);Bz(b.pP,BK(c,d));h=BQ(3);i=h.data;i[0]=FQ(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.E.data.length);k=0;while(k<d){j=j+GP(e,k)|0;if(k!=(e.E.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Bi=EF();e=b.fh;l=new ADA;l.sL=b;i=P(B,3);m=i.data;m[0]=Fj(b.h);m[1]=h;b=b.h.dm;g=BN();ACa(b,b.dk,
g);h=BQ(3*g.p|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BI(g,o);d=k+1|0;n[k]=b.b5;q=d+1|0;n[d]=b.b3;k=q+1|0;n[q]=b.f0;o=o+1|0;}m[2]=h;CL(e,l,C(193),i);}}}
function Wq(a){MI(a.d);}
function AAA(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fZ){c=E$(b);d=new J;L(d);H(H(d,c),C(194));$rt_globals.console.info($rt_ustr(K(d)));}c=Eh(b);if(c!==null&&!Bk(C(181),c)){d=b.h.dm;e=Q$(d,d.dk);if(e===null){OH(b);K0(b.h);}else{f=D4([Dp(e),Dg(e),e.b2.f0]);g=Fj(b.h);h=BQ(1);h.data[0]=AJg(c);d=b.h.e_;if(d.fL===null){i=BQ(0);j=B6(0);}else{c=AWq(AYK(e.cq,d.fi),e);XQ(c);i=c.o9;j=c.na;}k=b.h.cx;c=b.fh;d=new Pd;d.Bm=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BQ(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CL(c,d,C(195),l);}}
else K0(b.h);}
function Js(a,b,c){var d,e,f,g,h,i;if(c&&a.e6)return 0;d=Ew(Bl(a));e=d.O;if(DC(Bl(a))){f=a.d.h;g=Bl(a);h=VC(f,g);if(c)Px(f,g,h);if(c){CS(a,d.O,d.be,0);Gj(a);EG(a);}}else{h=FF(FX(a.d.h.E.data[e]),C(175));i=Be(CK(a.d.h)-1|0,e);Ch((Bl(a)).bI,i,0);if(e>=(CK(a.d.h)-1|0))Ch((Bl(a)).bI,i,GP(a.d.h,i));else Ch((Bl(a)).bS,i+1|0,0);if(c)G8(a);else CS(a,e,0,0);}b.g(h);return 1;}
function AVS(a){var b;b=new Wa;b.vm=a;return b;}
function AHl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.e6)return 0;a:{switch(b.bj){case 8:if(DC(Bl(a))){G8(a);c=1;}else{b=a.d;d=b.B;if(!d&&!b.x)c=1;else{if(d){e=b.x;c=d-1|0;Po(b.h,e,c);}else{e=b.x-1|0;c=GP(b.h,e);b=a.d.h;LW(b,e);Gf(b,e,GP(b,e),1,C(175));}EG(a);c=CS(a,e,c,0);}}break a;case 9:if(!b.bQ){if(!DC(Bl(a)))DO(a,a.fD);else{f=Ew(Bl(a));g=Gg(Bl(a));c=g.O;d=f.O;e=(c-d|0)+1|0;h=BQ(e);i=h.data;j=P(BB,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fD;d=d+1|0;e=l;}b=new ADG;m=a.d;AK2(b,m.x,m.B);m=new TV;m.vJ
=a;Qs(a,h,0,0,j,b,m);f.be=f.be+M(a.fD)|0;g.be=g.be+M(a.fD)|0;MT(a,a.d.B+M(a.fD)|0);EG(a);}c=1;}else b:{if(!DC(Bl(a))){b=a.d;f=Cf(b.h,b.x);if(f.s.data.length>0){g=VS(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.x;b=DW(e,m.B);n.cx=n.cx+1|0;o=n.iZ;h=P(Hm,1);h.data[0]=AU9(e,0,1,g,b.bs,b.bw);Bz(o,h);NF(n,e,0,1,g);HZ(f,0,M(g));MT(a,a.d.B-M(g)|0);}}else{b=Ew(Bl(a));f=Gg(Bl(a));c=f.O;p=b.O;c=(c-p|0)+1|0;h=BQ(c);k=h.data;j=P(BB,c);q=j.data;g=a.d;e=g.B;l=g.x;c=0;while(p<=f.O){g=Cf(a.d.h,p);if(g.s.data.length>0){g=VS(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JB(h,c);j=C0(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.O)b.be=Bd(0,b.be-M(g)|0);if(p==f.O){f.be=Bd(0,f.be-M(g)|0);MT(a,a.d.B-M(g)|0);}d=d+1|0;}b=DW(l,e);f=new UP;f.t5=a;Qs(a,h,0,1,j,b,f);}EG(a);c=1;}break a;case 13:if(DC(Bl(a)))G8(a);b=a.d;E9(Cf(b.h,b.x));b=a.d;AL7(b.h,b.x,b.B);EG(a);c=CS(a,a.d.x+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AMD(a);}return c;}
function AKG(a,b){var c,d,e,f;a:{switch(b.bj){case 33:c=b.cU?IE(a,In(a.bz,a.X),b.bQ):JV(a,2-VJ(Eq(a),a.X)|0,0,b.dL,b.bQ);break a;case 34:c=!b.cU?JV(a,VJ(Eq(a),a.X)-2|0,0,b.dL,b.bQ):IE(a,((a.bz+Eq(a)|0)/a.X|0)-1|0,b.bQ);break a;case 35:if(!I9(a,b.bQ)&&!DF(a,(Ga(a)).U,b.bQ)){c=0;break a;}c=1;break a;case 36:if(!I9(a,b.bQ)&&!DF(a,0,b.bQ)){c=0;break a;}c=1;break a;case 37:c=b.cU;if(c&&b.dL){Jy(a);d=a.d.ib;e=d.dT;if(e<=0)d=null;else{f=d.fy.data;c=e-1|0;d.dT=c;d=f[c];}if(d===null)c=1;else{CS(a,Mp(d),K_(d),0);J4(Bl(a),
d.o5);c=1;}break a;}c=SK(a,(-1),c,b.bQ);break a;case 38:c=JV(a,(-1),b.cU,b.dL,b.bQ);break a;case 39:c=b.cU;if(c&&b.dL){d=a.d.ib;e=d.dT;if(e==(d.fu-1|0))d=null;else{f=d.fy.data;c=e+1|0;d.dT=c;d=f[c];}if(d===null)c=1;else{CS(a,Mp(d),K_(d),0);J4(Bl(a),d.o5);c=1;}break a;}c=SK(a,1,c,b.bQ);break a;case 40:c=JV(a,1,b.cU,b.dL,b.bQ);break a;default:}c=0;}if(c&&b.bQ){b=(Bl(a)).bI;d=a.d;Ch(b,d.x,d.B);}if(c)Jh(a.d);return c;}
function Jy(a){var b,c,d,e,f,g,h;b=a.d;c=b.ib;d=c.dT;c=d<0?null:c.fy.data[d];if(c!==null&&b.x==Mp(c)&&a.d.B==K_(c))return;c=a.d;e=c.ib;b=new N$;d=c.x;f=c.B;c=Bl(a);b.pZ=DW(d,f);g=AYR(c);b.o5=g;g.dC=0;f=e.dT;h=e.fu;if(f==(h-1|0))ADp(e,b);else{d=f+1|0;while(d<h){AAI(e);d=d+1|0;}ADp(e,b);}e.dT=e.dT+1|0;}
function EG(a){a.d.h.AU=Nf(GS(a));}
function Ic(a,b){var c,d,e,f;a.C8=null;L5(a.dj,null);c=a.d;a.d=b;Lm(c,null,null);Lm(b,a,GS(a));d=(B5(a.fH.vZ)).data;e=d.length;f=0;while(f<e){d[f].qL(c,b);f=f+1|0;}a.bz=GV(b.mY*a.X);}
function Tr(a,b){var c;c=Mj(a.d.h,b);if(c===null)return C(21);return c.w;}
function HM(a,b){var c,d,e,f,g;a.d.lT=b;if(b===null){Bf(Bj(),C(196));L5(a.dj,null);}else{b=b.data;c=DR(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.hl<<24>>24;e=e+1|0;}L5(a.dj,c);}}
function Jf(a,b){a.d.qV=b;}
function Bl(a){return a.d.rX;}
function Mh(a){var b;b=a.iI;if(b!==null)b.g(a);}
function AY9(a){var b,c,d;b=a.d.fv;c=AFS(a);if(b!==null){b=b.f4;d=new J;L(d);H(H(H(d,c),C(197)),b);c=K(d);}return c;}
function AJh(){var a=this;B.call(a);a.lZ=null;a.or=null;a.g_=null;}
function AIu(a,b){var c=new AJh();AY0(c,a,b);return c;}
function AY0(a,b,c){var d,e;a.lZ=b;a.or=c;d=null;e=new Vx;e.s0=a;b.pR(d,e);b=null;d=new Vy;d.r2=a;c.pR(b,d);}
function Zq(a,b,c){var d,e,f,g,h,i,j;d=a.g_;if(d!==null&&d.iE!==null){e=b!==a.lZ?0:1;f=b.lA();g=(b.kO()+f|0)/2|0;h=g-f|0;d=a.g_;d=d.iE.data[G2(d,g,e)];i=g-(!e?d.ii:d.ij)|0;j= -(b.hS(f)-(b.lc()).b|0)|0;c.qG(Bc(((!e?d.ij:d.ii)+i|0)-h|0,c.pY())+j|0);return;}}
function UC(){B.call(this);this.Cb=null;}
function ANJ(a,b){WV(a.Cb,b);}
function UD(){B.call(this);this.zN=null;}
function A4g(a,b){WV(a.zN,b);}
function UE(){B.call(this);this.xP=null;}
function ARy(a,b){return AIn(a.xP,b);}
function H4(){var a=this;B.call(a);a.o$=null;a.s4=null;a.sm=null;}
function A$w(a,b){var c=new H4();IH(c,a,b);return c;}
function IH(a,b,c){var d;d=null;a.o$=b.bG;a.s4=d;a.sm=c;}
function AP0(a,b){var c,d;if(b.cU&&b.bj==79){c=a.s4;if(c!==null&&b.bQ)Go(a.o$,c);else GQ(a.o$,a.sm);d=1;}else d=0;return d;}
function UA(){B.call(this);this.vK=null;}
function ASp(a,b){var c,d,e;c=a.vK;d=Dz(c.q,c.H)?c.H:!Dz(c.q,c.L)?null:c.L;if(d!==null){e=new Sd;e.yP=c;e.yN=d;e.yO=b;GZ(d,b,e);c.lr=null;c.mQ.g_=null;c.fR.ey=null;}}
function UB(){B.call(this);this.tr=null;}
function A4O(a,b){b=b;return AKH(a.tr,b);}
var CN=G(0);
function AEu(){var a=this;B.call(a);a.bi=null;a.bH=null;a.eh=null;}
function Gp(a,b,c,d,e){var f,g;f=ZU(a.bi);HA(f,b,c);b=a.bi;c=b.c1;g=new ADR;g.xH=b;g.xG=c;f.kh=g;SO(f,d,e);HQ(a,f);}
function HQ(a,b){var c;c=a.eh;if(c!==b)a.eh=BY(c,b);}
function EH(a,b){var c;c=new ADC;c.rp=a;c.rr=b;return c;}
function Y9(a,b){var c;c=new AEI;c.y3=a;c.y4=b;return c;}
function DX(a){var b;b=a.eh;if(b!==null){MJ(b);HQ(a,null);}}
function Ep(a,b){var c,d,e,f;c=a.bH;if(c.cV>0)Li(Fz(c,0));c=a.bH;d=c.cV;e=c.c$;if(d==e.data.length)c.c$=C0(e,d+4|0);d=c.cV;f=d;while(0<f){e=c.c$.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.c$.data[0]=b;c.cV=d+1|0;c.gm=null;KY(b);return b;}
function II(a,b){if(OR(a)!==b?0:1)Li(b);SP(a.bH,b);b=a.bH;if(b.cV>0)KY(Fz(b,0));}
function J8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B5(a.bH)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.bi.bL;d.Y.dH(e);f=d.S;g=d.go.ju;if(!Sp(f)){if(!Oz(f)&&!(!f.eP&&f.d7!==null)){f.eP=0;ADj(f);h=f.eF;i=(h.ev+h.eO+5.0)/10.0;j=Cu(f.gk,f.k6);h=e.ck;k=f.eF;l=f.jZ;m=i*2.0;Cq(h,k);n=j+LJ(h,l,m)|0;f.iz=n;n=Fc(0,n,f.k.a);if(n){h=D_(e,n,f.k.b,f.gk.cJ);Cq(h,f.eF);k=f.jZ;m=j;i=m+i;l=f.eF;o=l.ev;B1(h,k,i,m+o-(o+l.eO)/16.0);k=f.d7;if(k===null){k=C1(e);f.d7=k;}CP(k,h);EI(h);Ct(f.m0,0.0,0.0,BU(f.d7),CR(f.d7));}}h=g.mm;k
=f.d7;if(k===null)Q_(f,e,0,f.k.a,h);else{j=BU(k);g=g.ox;k=f.i;n=k.a;p=k.b;k=f.d7;DP(e,n,p,k.eZ,f.m0,k,g,h,f.gk.cJ);n=f.k.a;if(j<n)Q_(f,e,j,n-j|0,h);}}l=d.dn;if(l!==null){q=d.bf;h=d.S;k=d.go.ju;if(l.jn!==null){if(l.dl===null)AHu(l,q);n=Cu(q,2.0);j=Bd(0,((h.k.b-CR(l.dl)|0)/2|0)-n|0);l.gp.a=(((h.i.a+h.k.a|0)-j|0)-BU(l.dl)|0)-n|0;f=l.gp;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.k0;j=BU(l.dl);r=n*2|0;Y(f,j+r|0,CR(l.dl)+r|0);f=q.bL;g=l.gp;Bv(f,g.a,g.b,l.k0,!l.l8?k.mm:k.jX);Ct(q.mK,0.0,0.0,BU(l.dl),CR(l.dl));f=q.bL;g=l.gp;n
=g.a+n|0;p=g.b+p|0;g=l.dl;DP(f,n,p,g.eZ,q.mK,g,k.ox,!l.l8?k.mm:k.jX,0);}}Ca(e,1);j=Cu(d.bf,2.0);n=Sp(d.S);f=d.bf;g=f.d8;f=f.qu;p=n?0:d.S.k.b;h=d.Y.k;Y(f,h.a,h.b+p|0);AJ9(e,f,!n?d.S.i:d.Y.i,d.go.ju.jX, -j|0,g);f=d.Y;ALs(e,f.k,f.i,j,p,Y5(d.go.lQ,d.bf.ci),d.go.lQ.om,g);c=c+(-1)|0;}f=a.eh;if(f!==null)AFq(f);}
function Ii(a,b){var c,d,e,f;c=a.bi;if(c.cJ==b)d=0;else{c.cJ=b;JO(c.cG);d=1;}if(d){c=a.eh;if(c!==null){c=B9(c.cj);while(Cb(c)){Ou(Cc(c));}}e=(B5(a.bH)).data;b=e.length;f=0;while(f<b){c=e[f];c.S.eP=1;c.Y.ku();f=f+1|0;}}return d;}
function AXc(a,b){var c,d,e,f,g,h,i,j,k;c=a.eh;if(c!==null){d=0;e=c.cj.p-1|0;a:{while(e>=0){d=Oa(BI(c.cj,e),b.j,c.cX.c2);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B5(a.bH)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(B3(h.S,c)){i=h.dn;if(i!==null)i.l8=TW(i,c);e=D5(h.bf.c2,null);}else{i=h.dn;if(i!==null)i.l8=0;e=Cu(h.bf,7.0);j=Cu(h.bf,25.0);if(No(h,c.a,e)){k=X9(h,c.a,j);if(Nx(h,c.b,e)){e=D5(h.bf.c2,Mq(k,C(198)));break b;}if(K4(h,c.b,e)){e=D5(h.bf.c2,Mq( -k|0,C(198)));break b;}}if(OC(h,c.b,e)){j=AEk(h,
c.b,j);if(OZ(h,c.a,e)){e=D5(h.bf.c2,Mq(j,C(199)));break b;}if(M5(h,c.a,e)){e=D5(h.bf.c2,Mq( -j|0,C(199)));break b;}}e=0;}}c:{d:{if(!e){if(!B3(h.Y,b.j))break d;if(!h.Y.bY(b)&&!D5(h.bf.c2,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AOt(a,b,c,d){var e,f,g,h,i,j;e=a.eh;if(e!==null){f=0;g=e.cj.p-1|0;a:{while(g>=0){f=Ox(BI(e.cj,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B5(a.bH)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B3(i.S,b.j)&&!Qc(i,b.j)){if(!Mz(i,b))break c;if(!i.Y.cI(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AQI(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=a.eh;if(d!==null){e=null;f=d.cj.p-1|0;a:{while(f>=0){g=BI(d.cj,f);h=b.j;i=Fl(g.cv,h);if(!i&&!Lv(g.cv)){g=g.lb;if(g!==null)g.e();}e=!i?null:A$x;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}j=B5(a.bH);k=0;while(true){l=j.data;if(k>=l.length)return null;b:{g=l[k];d=b.j;if(!c){c:{m=Cu(g.bf,7.0);f=Cu(g.bf,25.0);if(No(g,d.a,m)){i=X9(g,d.a,f);if(Nx(g,d.b,m)){h=Kn(g,d,i,(-1));break c;}if(K4(g,d.b,m)){h=Kn(g,d,i,1);break c;}}if(OC(g,d.b,m)){f=AEk(g,d.b,f);if
(OZ(g,d.a,m)){h=Kn(g,d,(-1),f);break c;}if(M5(g,d.a,m)){h=Kn(g,d,1,f);break c;}}h=null;}if(h!==null)break b;if(B3(g.S,d)){h=g.dn;if(h!==null&&TW(h,d)){g.dn.jn.e();h=A$x;break b;}h=g.Y.i;f=h.a;i=d.a;f=f-i|0;n=h.b;m=d.b;n=n-m|0;d=g.S.i;i=d.a-i|0;m=d.b-m|0;d=new Bh;h=new TF;h.sW=g;h.sX=i;h.sR=m;h.sT=d;h.sU=f;h.sV=n;break b;}}h=null;}f=h===null&&!Mz(g,b)?0:1;i=!c&&g!==OR(a)&&f?1:0;if(i){d=a.bH;n=0;l=d.c$.data;m=l.length;d:{while(true){if(n>=m){n=(-1);break d;}if(g===l[n])break;n=n+1|0;}}if(n>0){Li(Fz(d,0));d=a.bH;m
=d.cV;if(m<=n){b=new OD;Bp(b,Id(n));N(b);}if(n){l=d.c$;o=l.data;e=o[n];while(n>0){o[n]=o[n-1|0];n=n+(-1)|0;}o[0]=e;o=d.gm;if(o!==null)C_(l,0,o,0,m);}KY(Fz(a.bH,0));}}if(h===null&&f)h=g.Y.cr(b,c);if(h!==null)break;if(i)break;k=k+1|0;}return h;}
function A5b(a,b,c){var d,e,f,g,h;d=a.eh;if(d!==null&&JM(d))return 1;e=(B5(a.bH)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B3(d.S,b.j)){if(!Mz(d,b))break b;if(!d.Y.dM(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A0Q(a,b,c){var d,e,f,g,h;d=(B5(a.bH)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.Y;h.dK(h.i,h.k,c);h=g.S;if(h.hM!==null){h.eF=null;h.iz=0;h.eP=1;}IJ(g);h=g.dn;if(h!==null)Ob(h);f=f+1|0;}}
function OR(a){var b;b=a.bH;return b.cV<=0?null:Fz(b,0);}
function Ug(){var a=this;B.call(a);a.bL=null;a.cG=null;a.c2=null;a.bT=null;a.ci=0.0;a.cJ=0;a.c1=null;a.dF=null;a.d8=null;a.qu=null;a.mK=null;a.C4=null;}
function K7(a){var b;b=a.c1;if(b!==null)b.vj();}
function Lk(a){var b;b=a.c1;if(b!==null)b.w$();}
function Nh(a,b){var c;c=a.cG.eA!==(ED()).activeElement?0:1;if(c)Lk(a);a.c1=b;if(c)K7(a);}
function DQ(a,b){Lk(a);a.c1=b;K7(a);}
function ACp(a,b){if(a.c1===b)a.c1=null;}
function Dz(a,b){return b!==a.c1?0:1;}
function KC(a){return a.bL.ck;}
function Fu(a,b){return GN(a.bL,b.im,b.ha*a.ci,b.kn,0);}
function Cu(a,b){return Ci(b,a.ci);}
function KO(a,b){var c;c=a.bL;if(!a.cJ)c.qj=b;else c.oG=b;JO(a.cG);}
function A3$(a,b,c){var d;d=a.c1;return d!==null&&d.f3(b,c)?1:0;}
function A15(a){var b;b=a.c1;return b===null?null:b.Ae();}
function W3(){B.call(this);this.wI=null;}
function A47(a,b,c,d){var e,f,g,h;e=(B5(a.wI.bH)).data;f=e.length;g=0;a:{while(g<f){if(e[g].Y.dJ(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function W2(){B.call(this);this.t8=null;}
function AOv(a,b){var c,d,e,f;b=b;c=a.t8;b=b.j;d=0;e=c.bH.cV;a:{while(d<e){f=Fz(c.bH,d);if(!B3(f.S,b)&&!Qc(f,b)&&!ADi(f,b)?0:1){c=Fz(c.bH,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.xx;if(c!==null&&AJw(c.xj,b)?1:0){d=1;break b;}}d=0;}return d;}
function AGb(){var a=this;B.call(a);a.eY=null;a.pn=0.0;a.iP=0.0;a.ht=0;}
function AZ7(){var a=new AGb();ATE(a);return a;}
function ATE(a){var b;b=TN(0,0,2,20);a.eY=b;a.pn=0.5;a.iP=0.0;IW(187,187,187,255,b.ba);}
function TD(a){return a.eY.u.a;}
function AB4(a,b){var c,d;a:{c=a.ht;if(b>a.iP)while(true){d=a.iP+a.pn;a.iP=d;a.ht=a.ht?0:1;if(b>d)continue;else break a;}}return a.ht==c?0:1;}
function UT(a,b,c){Y(a.eY.v,b,c);}
function Zp(a,b){a.iP=b+a.pn*1.25;a.ht=1;}
function ALn(a,b){return AFP(a.eY.v,0,0,b);}
function AC6(a,b,c){if(a.ht)AAC(a.eY,b,c.a,c.b);}
function AEQ(){var a=this;B.call(a);a.fv=null;a.h=null;a.qi=null;a.rX=null;a.ib=null;a.jL=null;a.fh=null;a.lT=null;a.x=0;a.B=0;a.iF=0;a.i9=null;a.iS=null;a.pP=null;a.fj=0;a.gS=0;a.g9=0;a.ji=FU;a.Bi=FU;a.BT=FU;a.qV=0;a.Fo=0;a.d2=0;a.mY=0.0;a.fZ=0;}
function A7I(a,b,c){var d=new AEQ();AMo(d,a,b,c);return d;}
function APE(a,b){var c=new AEQ();AS4(c,a,b);return c;}
function A7P(a,b,c){var d=new AEQ();Wm(d,a,b,c);return d;}
function AMo(a,b,c,d){Wm(a,(AJL(b)).kz,c,d);}
function AS4(a,b,c){Wm(a,b,null,c);}
function Wm(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rX=AN0();f=new Ue;f.fy=P(N$,16);f.fu=0;f.dT=(-1);a.ib=f;a.i9=null;a.iS=BN();a.pP=BN();a.fj=1;a.gS=1;a.g9=1;a.d2=0;a.mY=0.0;a.fZ=0;a.fv=d;a.qi=c;c=new AAD;g=e.length;b=P(DN,Bd(1,g));if(!g)b.data[0]=YA(C(21));h=b.data;i=0;while(i<g){h[i]=YA(e[i]);i=i+1|0;}d=new Zb;f=new N7;Ri(f);d.fi=f;c.e_=d;c.dY=Ka();c.dQ=Ka();c.iZ=BN();if(!h.length){c=new BX;X(c);N(c);}c.E=b;j=ADg(c);c.dm=AHX(AVC(La(0,j,0),null,null));a.h=c;}
function Eh(a){var b;b=a.qi;if(b===null){b=a.fv;b=b===null?C(181):AIZ(b.f4);}return b;}
function HP(a){var b;b=a.fv;return b===null?null:b.kL;}
function MK(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gS=3;a.g9=3;a.fj=3;c=CT(b[0]);d=EY(b[1]);CT(b[2]);if(b.length<5)Oq(a.h,c,d);else{e=CT(b[3]);f=e.data;g=EY(b[4]);Yi(a.h,c,d,e,g,0);Uo(a,JB(e,f.length),OI(g));}if(a.fZ){h=E$(a);i=J6(EF(),a.ji);j=new J;L(j);H(HY(H(H(j,h),C(200)),i),C(201));$rt_globals.console.info($rt_ustr(K(j)));}h=a.jL;if(h!==null)Mh(h);}
function Jh(a){var b;Ta(a,DW(a.x,a.B),Jt(a.h,a.x,a.B));if(!(a.i9!==null&&!EL(a.iS))){b=a.B;if(b>0)Ta(a,DW(a.x,b-1|0),Jt(a.h,a.x,a.B-1|0));}}
function Ta(a,b,c){var d,e,f,g,h,i,j,k;a.i9=null;IN(a.iS);d=CA(a.h.dY,c);if(d!==null)c=d;a:{e=CA(a.h.dQ,c);if(e!==null){a.i9=Mj(a.h,c);c=B9(e);while(true){if(!Cb(c))break a;f=Cc(c);Bz(a.iS,Mj(a.h,f));}}}c=a.jL;if(c!==null){g=b.bs;h=b.bw;b=c.fH;f=Eh(c.d);e=HP(c.d);i=(B5(b.wl)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.B8(f,e)){b=b.EK;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Ph;e.DU=c;e.DV=f;e.DS=g;e.DT=h;b.us(f,g,h,e,c.ko);}}}
function Uo(a,b,c){var d,e,f,g,h;if(a.fh!==null){a.BT=EF();d=a.h.cx;e=a.fh;f=new Y6;f.z3=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BQ(1);b.data[0]=d;h[2]=b;CL(e,f,C(202),g);}}
function Lm(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jL=b;a.fh=c;if(c===null){d=a.h.E.data;e=d.length;f=0;while(f<e){T0(d[f]);f=f+1|0;}}else if(a.fj==1){a.ji=EF();b=Eh(a);if(BR(b,C(181))){a.gS=3;a.g9=3;a.fj=3;b=a.jL;if(b!==null)Mh(b);}else{e=BR(b,C(192));f=BR(b,C(203));d=Fj(a.h);g=d.data.length;h=!e?5120:10240;i=AJg(b);if(f)J9(a,d,i);else if(g<=h)J9(a,d,i);else if(!e){Wd(a,OI(d),i);J9(a,d,i);}else{Wd(a,OI(d),i);j=OI(d);k=a.fh;c=new RA;c.z5=a;l=P(B,2);m=l.data;m[0]=j;j=BQ(1);j.data[0]=i;m[1]=j;CL(k,c,C(204),l);a.gS=
2;J9(a,d,i);}}}}
function Wd(a,b,c){var d,e;d=a.fh;e=new VM;e.Am=a;CL(d,e,C(205),I(B,[b,D4([c,250])]));a.g9=2;}
function J9(a,b,c){var d,e,f,g;d=a.fh;e=new XR;e.yG=a;f=P(B,2);g=f.data;g[0]=b;b=BQ(1);b.data[0]=c;g[1]=b;CL(d,e,C(206),f);a.fj=2;}
function E$(a){var b;b=a.fv;return b===null?C(21):ADm(b);}
function MI(a){var b,c,d,e,f;if(a.fZ){b=E$(a);c=new J;L(c);H(H(c,b),C(207));$rt_globals.console.info($rt_ustr(K(c)));}b=Eh(a);if(b===null)d=null;else{a:{e=(-1);switch(Kh(b)){case -1655966961:if(!Bk(b,C(203)))break a;e=3;break a;case 3401:if(!Bk(b,C(208)))break a;e=2;break a;case 98723:if(!Bk(b,C(209)))break a;e=1;break a;case 3254818:if(!Bk(b,C(192)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(210);break b;case 2:d=C(211);break b;case 3:d=C(212);break b;default:d=null;break b;}d=C(213);}}if
(d===null)Mh(a.jL);else{a.ji=EF();b=a.fh;c=new ACi;c.v0=a;f=P(B,1);f.data[0]=Fj(a.h);CL(b,c,d,f);}}
function OH(a){var b;b=AWq(a.h.e_,null);XQ(b);Uo(a,b.o9,b.na);}
function AEG(){var a=this;B.call(a);a.zc=null;a.CL=null;a.q5=null;a.wl=null;a.vZ=null;a.BE=null;}
function OP(a,b,c){return Sa(a,B5(a.zc),b,c);}
function Z2(a,b,c){return Sa(a,B5(a.CL),b,c);}
function Sa(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.B8(c,d))return g.FA;f=f+1|0;}return null;}
function ACK(a,b,c){var d,e,f,g;d=(B5(a.q5)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.B8(b,c))return g.Fv;f=f+1|0;}return null;}
function FD(){var a=this;B.call(a);a.ce=0;a.dg=null;a.cN=null;a.eK=null;a.dS=0;}
var A$y=0;var A$u=0;function Ym(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cN;j=i===b&&!i.jy?0:1;if(j){a.cN=b;NR(b,c.ck,a.dg.hj);}k=In(Be(FR(b),e+2048|0),1024);l=a.eK;m=l.data.length;n=k<=m?0:1;if(n){a.eK=C0(l,k);while(m<k){a.eK.data[m]=C1(c);m=m+1|0;}}o=a.dg.hT;if(!(!j&&!n)){if(A$y){l=b.gA;$rt_globals.console.info("fMeasure"+l.data);A$y=0;}if(!A$u){c=o.di;b="alphabetic";c.textBaseline=b;}else{b=o.di;c="top";b.textBaseline=c;}a.dS=f/1024|0;p=0;while(p<k){Kx(a,o,d,a.dS+p|0);p=p+1|0;}a.cN.jy=0;}e=a.eK.data.length;if
(e&&f<=FR(a.cN)){f=f/1024|0;g=a.dS;if(f!=g){if(W8(f-g|0)>=e){g=0;while(g<e){Kx(a,o,d,f+g|0);g=g+1|0;}a.dS=f;}else{while(true){g=a.dS;if(g>=f)break;Kx(a,o,d,g+e|0);a.dS=a.dS+1|0;}while(true){g=a.dS;if(g<=f)break;Kx(a,o,d,g-1|0);a.dS=a.dS-1|0;}}}}}
function Kx(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Y4(a,e);g=a.cN;if(f>=g.s.data.length)return;h=g.gA;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.ce;l=a.dg.hj;EZ(b);a:{while(true){g=a.cN;if(f>=g.s.data.length)break a;m=l.data;g=Kc(g,f);n=m[KV(g)];o=!A$u?L3(n,c):NB(n,c);m=h.data;Cq(b,n);B1(b,g.w,k,o);k=m[f]-j+a.ce;if(k>1024.0)break;f=f+1|0;}}h=a.eK.data;CP(h[d%h.length|0],b);}
function QH(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eK.data.length;if(!o)return;if(g>FR(a.cN))return;p=a.cN;q=p.e3;r=p.s;s=g/1024|0;t=Y4(a,g);u= -a.ce|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eK.data[s%o|0];bb=w[t];bc=z[t]+a.ce|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.ce|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.ce:2*a.ce|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.ce:2*a.ce|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bv.gF;if(bb===j)bo=h.bv.rT;if(k!==null){p=B9(k);d:{while(Cb(p)){if(BR(Cc(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bv.w9;}if(n!==null){w=n.n0;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AE_(h.ed,h,bi,n.hl);}if(!bn&&!bl){i.b=Be(i.b,FR(a.cN));AG6(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.ce:0)|0,(g
+bg|0)<=(i.b+(!y?a.ce:2*a.ce|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.ce:0)|0,g-x|0,bo);}else{bp=h.j4.data[bb.b4];p=bn?h.bv.li:TK(bo,XE(h,bp.m8));Ct(a.dg.jK,g-x|0,0.0,bg,v);Y(a.dg.iv,bg,f);Hp(a.dg,d,ba,u+c|0,b,bp.hh,p);}if((bb.bE&12)>>2>0){bc=u+c|0;Ca(d,1);p=a.dg;bq=p.n2;bq.a=bg;x=b+p.uU|0;bk=x-p.Cu|0;br=p.rc;bs=x+br;ba=p.hE;UG();Mw(d,bc,bk,bq,br,bs,ba,A$z.lt.hh);Ca(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AG6(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.j4.data[h.b4];o=n.hh;p=TK(m,XE(f,n.m8));q=f.bv.li;f=a.dg;r=f.jK;s=f.iv;t=l;u=i-j|0;v=u;w=e;Ct(r,t,0.0,v,w);Y(s,u,e);Hp(a.dg,b,g,c,d,o,p);l=l+i|0;Ct(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.dg;c=c+i|0;Hp(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Ct(r,t,0.0,i,w);Y(s,i,e);Hp(a.dg,b,g,c-j|0,d,o,q);}
function TK(b,c){if(b!==null)c=b;return c;}
function Y4(a,b){var c,d,e,f,g,h,i;c=a.cN;d=c.gA;e=0;f=c.s.data.length;g=b;b=BP(e,f);if(b>0){c=new BX;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BP(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AEX(a){var b,c,d;b=a.eK.data;c=b.length;d=0;while(d<c){AHx(b[d]);d=d+1|0;}a.eK=a.dg.od;a.cN=null;}
function AJW(a,b,c,d,e,f,g,h,i){var j,k;j=FR(a.cN);if(j)j=j+a.ce|0;if(!j)j=j-a.ce|0;k=Bd( -a.ce|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bv(b,c+k|0,d,f,i);}
function Z6(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FD,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.uX(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cN===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FD;g.ce=3;g.dS=0;g.dg=d;g.eK=d.od;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AEX(q);j=j+1|0;}return i;}
function TB(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cN;if(e!==null)e.jy=1;d=d+1|0;}}
function OO(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AEX(b[d]);d=d+1|0;}}
function AG9(){A$u=0;}
function AIL(){var a=this;B.call(a);a.gf=null;a.dx=null;a.fb=null;a.fO=null;a.o1=null;a.oL=null;}
function Ju(){var a=new AIL();A0F(a);return a;}
function A0F(a){a.gf=new Bh;a.dx=new Bh;a.fb=new Bh;a.fO=new Bh;a.o1=new B4;a.oL=new B4;}
function AAj(a){var b;b=a.dx;return !Bc(b.a,b.b)?0:1;}
function I4(a,b){return Gx(b,a.fb,a.fO);}
function Ge(a,b,c,d){var e,f,g,h,i;e=I4(a,b);f=Gx(b,a.gf,a.dx);if(!e&&!f)return null;if(!f){if(!d)c.g(VU(a,b.a-a.fb.a|0));else c.g(Rb(a,b.b-a.fb.b|0));}g=!d?a.gf.a+(a.dx.a/2|0)|0:a.gf.b+(a.dx.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new ST;b.wC=a;b.wD=c;b.wB=i;}else{b=new SS;b.r_=a;b.r9=c;b.r$=i;}return b;}
function Ik(a,b,c){if(c!==null)BO(a.o1,c);if(b!==null)BO(a.oL,b);}
function AGm(b,c){var d;d=new ACU;d.t7=b;d.CX=c;return d;}
function Rb(a,b){var c,d,e;c=a.fO.b;d=a.dx.b;e=c-d|0;return AGm(Be(Bd(0,b-(d/2|0)|0),e),e);}
function VU(a,b){var c,d,e;c=a.fO.a;d=a.dx.a;e=c-d|0;return AGm(Be(Bd(0,b-(d/2|0)|0),e),e);}
function KG(a,b,c,d,e,f,g){V1(a,b,c,d,e,f,g,1);}
function R3(a,b,c,d,e,f,g){V1(a,b,c,d,e,f,g,0);}
function V1(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(Zx(d,d,e),i);e=e-d|0;i=d-j|0;i=i?Zx(b,i,e):0;if(!h){k=a.gf;k.a=i+c|0;k.b=f-g|0;l=a.dx;l.a=j;l.b=g;l=a.fb;l.a=c;l.b=k.b;k=a.fO;k.a=d;k.b=g;break a;}k=a.gf;k.a=f-g|0;k.b=i+c|0;l=a.dx;l.a=g;l.b=j;l=a.fb;l.a=k.a;l.b=c;k=a.fO;k.a=g;k.b=d;break a;}}Y(a.fO,0,0);Y(a.dx,0,0);}}
function Wf(a,b){G$(a,b);Hd(a,b);}
function G$(a,b){var c;c=a.fb;Bv(b,c.a,c.b,a.fO,a.o1);}
function Hd(a,b){var c,d;c=a.dx;c.a=c.a-2|0;c.b=c.b-2|0;d=a.gf;Bv(b,d.a+1|0,d.b+1|0,c,a.oL);b=a.dx;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gl(a,b,c){return I4(a,b)&&GX(c)?1:0;}
function AGa(){var a=this;B.call(a);a.FM=20;a.gP=null;a.fC=null;a.lM=0.0;a.lJ=null;a.jE=0;a.ld=0;a.hx=0;a.c9=null;a.o3=null;a.fo=null;a.g0=null;a.gY=0;}
function AID(){var a=new AGa();A5o(a);return a;}
function A5o(a){a.FM=20;a.gP=new Bh;a.fC=new Bh;a.c9=BN();a.o3=DR(0);}
function ACE(a,b,c){var d,e,f,g,h;d=a.gY;if(b==d)return;e=a.c9.p;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Sq(a,b);a.gY=b;}else{Yy(a,c);if(a.gY>=b)while(true){if(h<g)break a;a.gY=PP(BI(a.c9,h%e|0),a.fo,a.g0,a.gY,b,f,a.lM);h=h+(-1)|0;}while(g<=h){a.gY=PP(BI(a.c9,g%e|0),a.fo,a.g0,a.gY,b,f,a.lM);g=g+1|0;}}}}
function L5(a,b){if(b===null)b=DR(0);a.o3=b;}
function ABU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hx;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c9;h=BI(h,g%h.p|0);i=a.gP;j=a.o3;k=h.fA.b;l=d.lw;m=b+f|0;n=h.cC;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&WN(d,j,r,l)!==l.lq?0:1){k=Bc((q-p|0)+1|0,h.cC);Y(h.jv,BU(h.cY),k);Ct(h.kd,0.0,Bc(p,h.cC),BU(h.cY),k);t=r;}else{u=WN(d,j,r,l);NG(h,e,f+Bc(p,h.cC)|0,i,l.pq,u);Y(h.jv,BU(h.cY),h.cC);Ct(h.kd,0.0,Bc(q,h.cC),BU(h.cY),h.cC);p=q;}q=q+1|0;r=t;}u=WN(d,j,r,l);NG(h,
e,f+Bc(p,h.cC)|0,i,l.pq,u);g=g+1|0;f=f+a.hx|0;}}
function Tz(a,b,c,d){var e,f,g,h,i,j;e=a.c9.p;while(true){f=a.c9.p;g=Bc(f,a.hx);if(g>(d+a.ld|0))break;h=BK(0,g);i=new Rh;g=a.fC.a;f=a.ld;j=a.lJ;i.jv=new Bh;i.kd=new B4;i.qI=h;i.el=20;i.cC=f;i.fA=BK(g,20*f|0);i.hH=L3(j,f);if(i.cY===null)i.cY=C1(b);Bz(a.c9,i);}if(f==e)return;Yy(a,b);Sq(a,c);}
function Sq(a,b){var c,d,e,f,g,h,i,j,k;c=a.c9;d=c.p;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B9(c);while(Cb(c)){f=Cc(c);g=a.fo;h=a.lM;EZ(g);i=0;while(true){j=f.el;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;G4(f,g,Dn(e),Bc(f.cC,i)+f.hH|0,h);i=i+1|0;}CP(f.cY,g);f.xJ=g.jz;}}
function Zu(a,b,c,d){a.lJ=b;a.ld=c;a.hx=c*20|0;a.jE=d;Zw(a);}
function Yy(a,b){var c;c=a.fo;if(!(c!==null&&c.jz==a.jE)){c=D_(b,a.fC.a,a.hx,a.jE);a.fo=c;Cq(c,a.lJ);AAY(a.fo,2);}c=a.g0;if(!(c!==null&&c.jz==a.jE)){b=D_(b,a.fC.a,a.ld,a.jE);a.g0=b;Cq(b,a.lJ);AAY(a.g0,2);}}
function IT(a){FE(a.c9,new AEz);IN(a.c9);Zw(a);}
function Zw(a){a.fo=BY(a.fo,null);a.g0=BY(a.g0,null);}
function SV(a,b,c,d,e){Cr(a.gP,b);Y(a.fC,c,d);a.lM=e;}
function Yc(){B.call(this);this.Ek=null;}
function Yb(){B.call(this);this.qT=null;}
function ANY(a,b){var c;c=a.qT;Gc(c,F7(b,Lf(c)));}
function Ya(){B.call(this);this.tW=null;}
function ANb(a,b){var c;c=a.tW;I2(c,F7(b,AB2(c)));}
function ALv(){var a=this;B.call(a);a.jK=null;a.iv=null;a.n2=null;a.hE=null;a.hj=null;a.od=null;a.dh=null;a.hT=null;a.rc=0.0;a.eg=0;a.uU=0;a.Cu=0;a.i3=0;}
function ARC(a){var b=new ALv();AVn(b,a);return b;}
function AVn(a,b){var c;a.jK=new B4;a.iv=new Bh;a.n2=new Bh;c=new B4;a.hE=c;a.hj=P(LS,4);a.od=P(IK,0);a.i3=b;LV(c);}
function Y7(a){a.hT=BY(a.hT,null);}
function SZ(a,b,c){var d,e;d=C4(Fd(a.dh)*b);a.eg=d;e=a.dh;a.uU= -( -((d+e.ev+e.eO)/2.0)|0)|0;AE1(a,c);return a.eg;}
function Qn(a,b){var c,d;LV(a.hE);c=a.hE;VI(c,b,c);a.rc=XO(a.hE);c=a.hE;d=c.bt+c.bg+1.5|0;a.Cu=d;Y(a.n2,0,d*2|0);}
function AE1(a,b){a.hT=BY(a.hT,D_(b,1024,a.eg,a.i3));}
function Hp(a,b,c,d,e,f,g){var h,i;h=a.iv;if(h.a&&h.b){i=a.jK;if(i.bA!==0.0&&i.bg!==0.0){DP(b,d,e,h,i,c,f,g,a.i3);return;}}}
function X_(){B.call(this);this.BR=null;}
function AXg(a){var b,c;b=a.BR;c=b.kq?0:1;b.kq=c;b=new J;L(b);JP(H(b,C(214)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Yg(){B.call(this);this.yi=null;}
function AZL(a){var b,c;b=a.yi;c=b.lk^1;b.lk=c;b=new J;L(b);JP(H(b,C(215)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Yf(){B.call(this);this.uN=null;}
function A6k(a){var b,c,d,e,f;b=a.uN;c=(b.en+3|0)%6|0;b.en=c;d=b.e2.data;e=d.length;f=0;while(f<e){b=d[f];b.ce=c;b=b.cN;if(b!==null)b.jy=1;f=f+1|0;}}
function Ye(){B.call(this);this.xa=null;}
function ARK(a){var b;b=a.xa;b.b8=b.b8?0:1;IT(b.dj);b.dj=AID();Om(b);ABq(b,b.i,b.k,b.cn.ci);}
function Yd(){B.call(this);this.rD=null;}
function ATA(a){var b;b=a.rD;b.mb=b.mb?0:1;}
function X$(){B.call(this);this.Ah=null;}
function A5J(a){var b;b=a.Ah;b.qm=b.qm?0:1;}
function Vx(){B.call(this);this.s0=null;}
function ARN(a){var b;b=a.s0;Zq(b,b.lZ,b.or);}
function Vy(){B.call(this);this.r2=null;}
function A2I(a){var b;b=a.r2;Zq(b,b.or,b.lZ);}
var AHp=G();
function NO(){B.call(this);this.Ed=null;}
var A9$=null;var A$A=null;function A0G(){A0G=Bm(NO);A57();}
function APo(a){var b=new NO();AI$(b,a);return b;}
function AI$(a,b){A0G();a.Ed=b;}
function A57(){A9$=APo(C(216));A$A=APo(C(217));}
var AFK=G(0);
function AJ4(b,c,d){return IW(b,c,d,255,new B4);}
function IW(b,c,d,e,f){Ct(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function V7(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AQk(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bp=g+i;e.bt=h+i;e.bg=j+i;return e;}
function IM(b,c,d,e,f){f=V7(b,c,d,f);f.bA=e;return f;}
function H9(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var AAT=G();
function AQp(a,b){var c,d,e;c=b.cU;d=c&&!b.bQ&&!b.dL&&!b.kV?1:0;a:{if(d){d=b.bj;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bQ&&!c&&!b.dL&&!b.kV?1:0;d=d&&b.bj==46?1:0;}b:{if(!d){e=b.bj;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.pc=1;}return 0;}
function AAS(){B.call(this);this.yc=null;}
function AYD(a,b){var c;c=a.yc.c1;return c!==null&&c.iH(b)?1:0;}
function Ur(){var a=this;B.call(a);a.bf=null;a.xx=null;a.kS=null;a.kM=null;a.S=null;a.dn=null;a.Y=null;a.go=null;a.qh=0;}
function AFp(a){var b=new Ur();ATp(b,a);return b;}
function A5u(a,b){var c=new Ur();AGl(c,a,b);return c;}
function ATp(a,b){AGl(a,b,AWN());}
function AGl(a,b,c){var d;a.bf=b;d=new U8;E_(d);d.m0=new B4;d.gk=b;a.S=d;a.Y=c;}
function T4(a,b){var c,d;if(a.dn===null){c=new Ra;c.gp=new Bh;c.k0=new Bh;a.dn=c;d=a.go;if(d!==null)ABf(c,d);}a.dn.jn=b;}
function KY(a){var b;b=a.kS;if(b!==null)b.e();}
function Li(a){var b;b=a.kM;if(b!==null)b.e();}
function C2(a,b){var c;c=a.S;c.eP=c.eP|(BR(c.jZ,b)?0:1);c.jZ=b;IJ(a);}
function ABg(a,b,c){var d,e,f;d=a.S;e=BR(d.hM,b)?0:1;f=c===d.k6?0:1;if(e){d.hM=b;d.eF=null;Q4(d,0);}d.eP=d.eP|(!e&&!f?0:1);d.k6=c;d.iz=0;IJ(a);}
function EQ(a,b){var c;a.go=b;c=b.tY;BF(b);ABg(a,c,3.0);c=a.dn;if(c!==null)ABf(c,b);}
function Kf(a){var b;b=a.S;b.d7=BY(b.d7,null);b.eF=null;a.Y=BY(a.Y,null);b=a.dn;if(b!==null){Ob(b);b.jn=null;}}
function Lu(a,b){var c,d,e;c=a.Y;d=c.i;e=c.k;b=BY(c,b);a.Y=b;b.dK(d,e,a.bf.ci);}
function EB(a,b,c){a.Y.dK(b,c,a.bf.ci);IJ(a);}
function IJ(a){var b,c,d;if(a.bf.ci!==0.0){b=a.S;if(b.hM!==null){c=a.Y.k.a;b.k.a=c;d=b.d7;if(d!==null&&c!=BU(d)&&!(c>=b.iz&&BU(b.d7)>=b.iz))b.eP=1;b=a.S;b.bW=a.bf.ci;if(Oz(b))c=0;else{b=a.S;Q4(b,Wl(b));c=b.k.b;}b=a.S.i;d=a.Y.i;Y(b,d.a,d.b-c|0);b=a.dn;if(b!==null)Cr(b.gp,a.S.i);return;}}}
function ADw(a){return Wl(a.S);}
function Mz(a,b){return ADi(a,b.j);}
function ADi(a,b){var c;c=!(a.qh&1)?0:1;return !c&&!B3(a.Y,b)?0:1;}
function Mq(b,c){if(b<0)c=C(218);else if(b>0)c=C(219);return c;}
function OZ(a,b,c){var d;d=a.S.i.a;return (d-c|0)<=b&&b<d?1:0;}
function M5(a,b,c){var d,e;d=a.S;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function Nx(a,b,c){var d;d=a.S.i.b;return (d-c|0)<=b&&b<d?1:0;}
function K4(a,b,c){var d,e;d=a.Y;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OC(a,b,c){var d,e,f;d=a.S.i.b-c|0;e=a.Y;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function AEk(a,b,c){var d,e;d=a.S.i.b+c|0;e=a.Y;return AKw(b,d,(e.i.b+e.k.b|0)-c|0);}
function No(a,b,c){var d,e,f;d=a.S;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function X9(a,b,c){var d,e;d=a.S;e=d.i.a;return AKw(b,e+c|0,(e+d.k.a|0)-c|0);}
function AKw(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BP(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Qc(a,b){var c;a:{b:{c:{c=Cu(a.bf,7.0);if(No(a,b.a,c)){if(Nx(a,b.b,c))break c;if(K4(a,b.b,c))break c;}if(!OC(a,b.b,c))break b;if(!OZ(a,b.a,c)&&!M5(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function Kn(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.a;h=b.b;b=a.Y;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new Uv;b.tM=a;b.tJ=e;b.tI=f;b.tL=c;b.tK=g;b.tP=j;b.tO=l;b.tR=d;b.tQ=h;b.tN=k;b.sH=m;return b;}
function KE(){var a=this;B.call(a);a.v=null;a.u=null;a.ba=null;a.bq=null;}
function S4(){var a=new KE();AC7(a);return a;}
function TN(a,b,c,d){var e=new KE();AOy(e,a,b,c,d);return e;}
function AC7(a){a.v=new Bh;a.u=new Bh;a.ba=new B4;a.bq=new B4;}
function AOy(a,b,c,d,e){a.v=new Bh;a.u=new Bh;a.ba=new B4;a.bq=new B4;Ht(a,b,c,d,e);}
function Ht(a,b,c,d,e){Y(a.v,b,c);Y(a.u,d,e);}
function AB5(a){Y(a.u,0,0);}
function Lv(a){var b;b=a.u;return Bc(b.a,b.b)?0:1;}
function Fl(a,b){return Gx(b,a.v,a.u);}
function AAC(a,b,c,d){var e;e=a.v;Bv(b,e.a+c|0,e.b+d|0,a.u,a.ba);}
function WC(a,b,c,d,e,f){var g,h,i,j;g=a.v;d=g.a+d|0;e=g.b+e|0;g=a.u;h=a.bq;i=a.ba;GJ(b,b.i7);GU(b.i7,b.bc,d,e,g,b.db);Oh(b.i7,b.bc,c);g=b.i7;j=b.bc;FP(j,g.wY,h);FP(j,g.wW,i);c=g.tn;j.uniform2f(c,f,0.0);Gb(b);}
var Fx=G();
function NM(){Fx.call(this);this.FA=null;}
function ABM(){Fx.call(this);this.Fv=null;}
function ZD(){Fx.call(this);this.EK=null;}
var Gn=G(0);
var S_=G(0);
function B4(){var a=this;B.call(a);a.bp=0.0;a.bt=0.0;a.bg=0.0;a.bA=0.0;}
function AEO(a,b,c,d){var e=new B4();A3j(e,a,b,c,d);return e;}
function AMv(a){var b=new B4();ALw(b,a);return b;}
function A3j(a,b,c,d,e){a.bp=b;a.bt=c;a.bg=d;a.bA=e;}
function Ct(a,b,c,d,e){a.bp=b;a.bt=c;a.bg=d;a.bA=e;}
function ALw(a,b){a.bp=b.bp;a.bt=b.bt;a.bg=b.bg;a.bA=b.bA;}
function BO(a,b){a.bp=b.bp;a.bt=b.bt;a.bg=b.bg;a.bA=b.bA;return a;}
function AWx(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BG(a)===BG(b)){b=b;if(b.bp===a.bp&&b.bt===a.bt&&b.bg===a.bg&&b.bA===a.bA?1:0){c=1;break a;}}c=0;}return c;}
function AOu(a){var b,c,d,e,f;b=a.bp;c=a.bt;d=a.bg;e=a.bA;f=new J;L(f);De(H(De(H(De(H(De(H(f,C(70)),b),C(71)),c),C(220)),d),C(221)),e);return K(f);}
var Jo=G(0);
function AJD(){var a=this;Ex.call(a);a.cm=null;a.p=0;}
function BN(){var a=new AJD();AP1(a);return a;}
function AP1(a){a.cm=P(B,10);}
function Na(a,b){var c,d;c=a.cm.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cm=C0(a.cm,d);}}
function BI(a,b){KT(a,b);return a.cm.data[b];}
function A2n(a){return a.p;}
function Bz(a,b){var c,d;Na(a,a.p+1|0);c=a.cm.data;d=a.p;a.p=d+1|0;c[d]=b;a.b7=a.b7+1|0;return 1;}
function AKK(a,b,c){var d,e,f;Q6(a,b);Na(a,a.p+1|0);d=a.p;e=d;while(e>b){f=a.cm.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cm.data[b]=c;a.p=d+1|0;a.b7=a.b7+1|0;}
function EV(a,b){var c,d,e,f;KT(a,b);c=a.cm.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b7=a.b7+1|0;return d;}
function AIa(a,b){var c;c=Lr(a,b);if(c<0)return 0;EV(a,c);return 1;}
function IN(a){AFW(a.cm,0,a.p,null);a.p=0;a.b7=a.b7+1|0;}
function AJQ(a,b,c){var d,e,f,g,h,i;Q6(a,b);if(c.eN())return 0;Na(a,a.p+c.cZ()|0);d=c.cZ();e=a.p;f=e-1|0;while(f>=b){g=a.cm.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.p=e+d|0;h=c.ca();i=0;while(i<d){g=a.cm.data;e=b+1|0;g[b]=h.cc();i=i+1|0;b=e;}a.b7=a.b7+1|0;return 1;}
function KT(a,b){var c;if(b>=0&&b<a.p)return;c=new BJ;X(c);N(c);}
function Q6(a,b){var c;if(b>=0&&b<=a.p)return;c=new BJ;X(c);N(c);}
function FE(a,b){var c;c=0;while(c<a.p){b.g(a.cm.data[c]);c=c+1|0;}}
function ALA(a){var b,c,d,e;b=a.p;if(!b)return C(22);c=b-1|0;d=new J;F3(d,b*16|0);Br(d,91);b=0;while(b<c){e=a.cm.data;BL(H(d,e[b]!==a?e[b]:C(222)),C(37));b=b+1|0;}e=a.cm.data;H(d,e[c]!==a?e[c]:C(222));Br(d,93);return K(d);}
function LS(){var a=this;B.call(a);a.oE=null;a.Dg=null;a.po=0.0;a.Dt=0;a.DK=0;a.t6=0;a.Ep=0;a.ev=0.0;a.eO=0.0;a.Dk=0.0;a.qv=0.0;a.Dp=0;a.rg=null;}
function L3(a,b){return NB(a,b)+a.t6|0;}
function NB(a,b){return (b-Fd(a)|0)/2|0;}
function Fd(a){return C4(a.ev+a.eO);}
function NC(a,b){return C4((a.ev+a.eO)*b);}
function IK(){var a=this;B.call(a);a.eQ=null;a.gc=null;a.eZ=null;}
var A9T=0;function AHx(a){var b;b=a.gc;if(b!==null){A9T=A9T-1|0;a.eQ.ea.deleteTexture(b);a.gc=null;}}
function BU(a){return a.eZ.a;}
function CR(a){return a.eZ.b;}
function TS(a,b,c,d){var e;e=a.eZ;e.a=b;e.b=c;OK(a);a.eQ.ea.texStorage2D(3553,1,d,b,c);e=a.eQ.ea;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function OK(a){var b,c;b=a.eQ.ea;c=a.gc;b.bindTexture(3553,c);}
function CP(a,b){Xv(a,b.og,b.nH,32856);Zz(a,b,0,0);}
function Xv(a,b,c,d){var e,f,g,h;a:{e=a.eZ;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){OK(a);break a;}e=a.eQ.ea;h=a.gc;e.deleteTexture(h);a.gc=a.eQ.ea.createTexture();TS(a,b,c,d);break a;}}TS(a,b,c,d);}}
function J5(a,b,c,d){OK(a);Zz(a,b,c,d);}
function Zz(a,b,c,d){var e;e=a.eQ.ea;b=b.jo;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Zt=G(0);
var A$B=0.0;function LV(b){Ct(b,1.0471975803375244,0.75,1.25,0.375);}
function VI(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JE(b.bA,JE(c,A$B));Ct(d,b.bp/c,b.bt*c,AVV(b.bg*c,1.25),e);}
function XO(b){var c;c=b.bt;return c-(c|0)>=0.25?0.0:0.5;}
function AFo(){A$B=Nu(Nu(0.5,0.375),4.0);}
var O5=G(0);
function GX(a){return D5(a,null);}
function R2(b){var c;c=new AAM;c.wh=b;return c;}
function ZM(){B.call(this);this.ul=null;}
function A0h(a){K7(a.ul);}
function ZL(){B.call(this);this.wR=null;}
function AW1(a){Lk(a.wR);}
function AMg(){var a=this;B.call(a);a.bS=null;a.bI=null;a.dC=0;}
function AN0(){var a=new AMg();A5P(a);return a;}
function AYR(a){var b=new AMg();ASL(b,a);return b;}
function A5P(a){a.bS=new Hs;a.bI=new Hs;}
function ASL(a,b){a.bS=new Hs;a.bI=new Hs;J4(a,b);}
function J4(a,b){ACX(a.bS,b.bS);ACX(a.bI,b.bI);a.dC=b.dC;}
function Oj(a,b,c){Ch(a.bI,b,c);if(!a.dC)Ch(a.bS,b,c);}
function Rd(a,b){Ch(a.bS,b,0);Ch(a.bI,b+1|0,0);}
function Ew(a){if(Su(a.bS,a.bI)>0)return a.bI;return a.bS;}
function Gg(a){if(Su(a.bS,a.bI)<0)return a.bI;return a.bS;}
function ALt(a,b){var c,d,e,f;c=a.bS;d=c.O;e=a.bI;if(d==e.O&&c.be==e.be?1:0)return null;c=Ew(a);e=Gg(a);d=c.O;if(d<=b){f=BP(b,e.O);if(f<=0)return BK(b<=d?c.be:0,f>=0?e.be:(-1));}return null;}
function DC(a){var b,c;b=a.bS;c=a.bI;return (b.O==c.O&&b.be==c.be?1:0)?0:1;}
function Ue(){var a=this;B.call(a);a.fy=null;a.fu=0;a.dT=0;}
function ADp(a,b){var c,d,e;c=a.fu;d=a.fy;if(c==d.data.length)a.fy=C0(d,c+16|0);d=a.fy.data;e=a.fu;a.fu=e+1|0;d[e]=b;}
function AAI(a){var b,c,d,e;b=a.fu;if(b?0:1)return;c=a.dT;d=b-1|0;if(c==d)a.dT=c-1|0;e=a.fy.data;a.fu=d;e[d]=null;}
var Hc=G();
function AAD(){var a=this;Hc.call(a);a.E=null;a.dm=null;a.e_=null;a.dY=null;a.dQ=null;a.iZ=null;a.lV=null;a.cx=0;a.nM=0;a.AU=0.0;}
function Cf(a,b){return a.E.data[b];}
function CK(a){return a.E.data.length;}
function ADg(a){return FQ(a,CK(a));}
function GP(a,b){return a.E.data[b].U;}
function AL7(a,b,c){var d,e,f,g,h;d=a.E;e=d.data;f=e[b];d=C0(d,e.length+1|0);e=d.data;a.E=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ec(P(Cz,0));a.E.data[b+1|0]=f;}else if(c==f.U){e[b]=f;e[b+1|0]=Ec(P(Cz,0));}else{e=(I$(f,c)).data;d=a.E.data;d[b]=e[0];d[b+1|0]=e[1];}Gf(a,b,c,0,C(175));}
function LW(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=Ec(Mk(d.s,e.s));g=a.E;h=g.data.length;if(b<h&&b>=0){i=P(DN,h-1|0);c=i.data;AAx(g,b,i);c[b]=f;a.E=i;return;}d=new Bt;X(d);N(d);}
function Po(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].U?0:1)){d=(Cf(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.w)){e=Q(h.w,g);break a;}g=g-M(h.w)|0;f=f+1|0;}e=0;}Gf(a,b,c,1,NY(e));h=a.E.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].w);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].w)==1)h.s=AAx(d,e,P(Cz,f-1|0));else{j=i[e];if(c<=0)k=Ej(DB(j.w,1),j.b4,j.bE);else if(c>=(M(j.w)-1|0)){k=new Cz;l=j.w;ACh(k,Cw(l,0,M(l)-1|0),j.b4,j.bE);}else{d=B6(M(j.w)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.w,b);b=b+1|0;}b=m.length;while(c<b){k=j.w;n=c+1|0;m[c]=Q(k,n);c=n;}k=Ej(Gv(d),j.b4,j.bE);}i[e]=k;}h.U=h.U-1|0;E9(h);}else if(b!=(d.length-1|0)){Gf(a,b,c,1,C(175));LW(a,b);}}
function AE7(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AA2(a.E.data[b],c,e[0]);return;}g=f-1|0;d=(I$(a.E.data[b],c)).data;h=d[0];i=d[1];d=a.E;j=C0(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:M(l[f-1|0].w);MX(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!GF(e[m])?YA(e[m]):Ec(P(Cz,0));d[b+m|0]=k;m=m+1|0;}MX(i,0,0,e[g]);d[b+g|0]=i;a.E=j;}
function VC(a,b){var c,d,e,f,g,h,i;c=Ew(b);d=Gg(b);e=c.O;if(e==d.O)return Cw(FX(a.E.data[e]),c.be,d.be);f=new J;L(f);b=a.E.data[c.O];e=c.be;Br(BL(f,DB(FX(b),e)),10);g=a.E.data;e=c.O+1|0;h=d.O;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AFh(BL(f,FX(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.E.data[d.O];h=d.be;BL(f,Cw(FX(b),0,h));return K(f);}b=new OD;X(b);N(b);}
function Px(a,b,c){var d;ADS(a,b);d=Ew(b);Gf(a,d.O,d.be,1,c);}
function ADS(a,b){var c,d,e,f,g,h,i;a:{c=Ew(b);d=Gg(b);e=c.O;if(e==d.O)HZ(a.E.data[e],c.be,d.be);else{b=a.E.data[e];HZ(b,c.be,b.U);HZ(a.E.data[d.O],0,d.be);e=c.O+1|0;f=d.O;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DN,(h-f|0)+e|0);AGC(g,e,f,i);a.E=i;LW(a,c.O);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function Jt(a,b,c){return DW(b,G1(Cf(a,b),c));}
function AEi(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(Cf(a,c)).U|0)>=b)return BK(c,b-d|0);d=d+((Cf(a,c)).U+1|0)|0;c=c+1|0;}return BK(e,0);}
function FQ(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+GP(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Mj(a,b){return OF(Cf(a,b.bs),b.bw);}
function Fj(a){var b,c,d,e,f,g,h,i,j;b=B6(ADg(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].w;Rq(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gf(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cx=a.cx+1|0;f=a.iZ;g=P(Hm,1);h=new Hm;h.eq=b;h.e7=c;i=MB(e,C(175),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BK(b,c+M(i[0])|0);break a;}k=BK((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BK(b,c);}i=g.data;h.pV=k;h.ou=d;h.g7=e;i[0]=h;Bz(f,g);NF(a,b,c,d,e);}
function NF(a,b,c,d,e){var f;f=FQ(a,b)+c|0;if(!d){Yz(a.dm,f,M(e));Um(a.e_,f,M(e));}else{VW(a.dm,f,M(e));PL(a.e_,f,M(e));}}
function XA(a,b){var c,d,e;c=MB(b.g7,C(175),(-1));if(b.ou){AE7(a,b.eq,b.e7,c);Yz(a.dm,FQ(a,b.eq)+b.e7|0,M(b.g7));Um(a.e_,FQ(a,b.eq)+b.e7|0,M(b.g7));}else{c=c.data;d=AN0();Ch(d.bS,b.eq,b.e7);e=c.length;if(e==1)Ch(d.bI,b.eq,b.e7+M(c[0])|0);else Ch(d.bI,(b.eq+e|0)-1|0,M(c[e-1|0]));ADS(a,d);VW(a.dm,FQ(a,b.eq)+b.e7|0,M(b.g7));PL(a.e_,FQ(a,b.eq)+b.e7|0,M(b.g7));}return b.pV;}
function ACt(a){return a.nM==a.cx?0:1;}
function K0(a){a.nM=a.cx;}
function NA(a){var b,c,d;a.lV=BQ(a.E.data.length+1|0);b=0;while(b<a.E.data.length){c=a.lV.data;d=b+1|0;c[d]=(c[b]+(Cf(a,b)).U|0)+1|0;b=d;}}
function Ww(a,b){var c,d,e,f,g,h;c=a.lV;if(c===null){d=0;e=0;a:{while(true){c=a.E.data;f=c.length;if(e>=f)break;g=c[e].U;if(b<=(d+g|0)){h=DW(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DW(f,0);}return h;}d=ALk(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DW(d,b-(d<0?0:a.lV.data[d])|0);if(h.bw>=(Cf(a,h.bs)).U){h.bs=h.bs+1|0;h.bw=0;}return h;}
var Mv=G(0);
function Ff(a){return Vc(a.t4(),a.t());}
function Vc(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AG4(b,c,d));}
function AG4(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Br(BL(d,b[f]),47);f=f+1|0;}return BL(d,c);}
var Ui=G(0);
function LR(){var a=this;B.call(a);a.ix=null;a.hp=null;a.ih=null;}
function AHW(a,b){var c=new LR();AYB(c,a,b);return c;}
function A$C(a,b,c){var d=new LR();Qi(d,a,b,c);return d;}
function AM4(b){var c,d,e,f,g,h,i;c=new LR;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BB,0);else{f=P(BB,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FS(e[h]);h=h+1|0;}}}else f=P(BB,0);Qi(c,d,b,f);return c;}
function AYB(a,b,c){Qi(a,b,null,c);}
function Qi(a,b,c,d){a.ix=b;a.hp=c;a.ih=d;}
function E1(a){var b;b=a.ix;return FS(b!==null?b.name:a.hp.name);}
function ANz(a){return a.ih;}
function VP(a,b,c){var d,e,f;d=AMh(c);e=new VY;e.tF=b;b=a.hp;if(b!==null)b.text().then(Bw(e,"f"),Bw(d,"f"));else{b=a.ix.getFile();f=new VZ;f.Ax=e;f.Aw=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function We(a,b,c){var d,e,f;d=AMh(c);e=new AEy;e.wG=b;b=a.hp;if(b!==null)b.arrayBuffer().then(Bw(e,"f"),Bw(d,"f"));else{b=a.ix.getFile();f=new AEx;f.t$=e;f.t9=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function AMh(b){var c;c=new Tt;c.uI=b;return c;}
function NU(a){var b,c,d;if(a.hp===null)b=Vc(a.ih,E1(a));else{b=HO(BG(a));c=a.ih;d=E1(a);b=BL(A51(b),C(29));AG4(c,d,b);b=K(b);}return b;}
var YH=G(0);
function Os(){var a=this;B.call(a);a.iu=null;a.fN=null;a.kF=null;}
var A9Q=null;function A7R(a,b){var c=new Os();AFu(c,a,b);return c;}
function A5Y(a,b,c){var d=new Os();AKj(d,a,b,c);return d;}
function AFu(a,b,c){a.iu=b;if(c.length)a.fN=ABb(c);else{a.fN=P(BB,0);a.kF=P(BB,0);}}
function AKj(a,b,c,d){a.iu=b;a.fN=c;a.kF=d;}
function ABb(b){var c,d,e,f;if(!b.length)c=P(BB,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BB,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=FS(b[e]);e=e+1|0;}}}return c;}
function HV(a,b){var c,d;c=new ADr;d=a.iu.values();c.ny=a;c.zd=d;c.lo=b;ACj(c);}
function Zy(a){var b,c,d,e;b=a.kF;if(b===null){b=a.fN;c=b.data;d=JC(a);e=c.length;b=C0(b,e+1|0);b.data[e]=d;b=b;a.kF=b;}return b;}
function JC(a){return FS(a.iu.name);}
function A48(a){return a.fN;}
function I6(a){return Vc(a.fN,JC(a));}
function P9(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AFk(){A9Q=new Vv;}
var ADI=G(0);
function AK9(){B.call(this);this.i0=null;}
function A6J(a){var b=new AK9();A1W(b,a);return b;}
function A1W(a,b){a.i0=b;}
function YP(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.i0));}
function EY(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i0));}
function CT(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i0));}
function AYW(a){var b,c;b=a.i0.byteLength;c=new J;L(c);H(V(H(c,C(223)),b),C(224));return K(c);}
function AAM(){B.call(this);this.wh=null;}
function D5(a,b){AAE(a.wh,b);return 1;}
function Hs(){var a=this;B.call(a);a.O=0;a.be=0;}
function Ch(a,b,c){a.O=b;a.be=c;}
function ACX(a,b){a.O=b.O;a.be=b.be;}
function Su(a,b){var c;c=BP(a.O,b.O);if(c)return c;return BP(a.be,b.be);}
function N$(){var a=this;B.call(a);a.pZ=null;a.o5=null;}
function Mp(a){return a.pZ.bs;}
function K_(a){return a.pZ.bw;}
function DN(){var a=this;B.call(a);a.s=null;a.U=0;a.gA=null;a.e3=null;a.eB=null;a.iw=null;a.hi=0;a.jy=0;a.jT=0;}
var A$D=0;var A$E=0;var A$v=0;function YA(a){var b=new DN();ALD(b,a);return b;}
function Ec(a){var b=new DN();AAb(b,a);return b;}
function ALD(a,b){var c;c=P(Cz,1);c.data[0]=AKb(b);AAb(a,c);}
function AAb(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].w)|0;f=f+1|0;}a.U=d;E9(a);}
function JJ(a){return a.s.data.length;}
function Kc(a,b){return a.s.data[b];}
function G1(a,b){var c;c=KB(a,b);return c<=0?0:a.eB.data[c-1|0];}
function KB(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eB!==null&&!a.jT)){Wb(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+M(a.s.data[d].w)|0;a.eB.data[d]=e;d=d+1|0;}a.jT=0;}d=ACr(a.eB,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function OF(a,b){var c;c=a.s.data;if(!c.length)return null;return c[KB(a,b)];}
function HZ(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.U){a.s=P(Cz,0);E9(a);a.U=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].w);i=M(a.s.data[f].w);j=BP(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==M(k.w)?1:0){g=a.s;a.s=AAx(g,e,P(Cz,g.data.length-1|0));a.U=a.U-d|0;E9(a);return;}a.s.data[e]=Ej(FF(Cw(k.w,0,b),DB(k.w,c)),k.b4,k.bE);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b
!=M(l.w))a.s.data[e]=Ej(Cw(l.w,0,b),l.b4,l.bE);e=e+1|0;}if(c==M(m.w))f=f+1|0;else if(c)a.s.data[f]=Ej(DB(m.w,c),m.b4,m.bE);g=a.s;a.s=AGC(g,e,f,P(Cz,(g.data.length-f|0)+e|0));}a.U=a.U-d|0;E9(a);}
function I$(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DN,[Ec(P(Cz,0)),a]);if(b>=a.U)return I(DN,[a,Ec(P(Cz,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].w);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DN,[Ec(LN(c,0,P(Cz,d))),Ec(LN(c,d,P(Cz,f-d|0)))]);h=e[d];e=LN(c,0,P(Cz,d+1|0));i=e.data;j=LN(c,d,P(Cz,f-d|0));c=j.data;i[d]=Ej(Cw(h.w,0,b),h.b4,h.bE);c[0]=Ej(DB(h.w,b),h.b4,h.bE);return I(DN,[Ec(e),Ec(j)]);}
function AA2(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=M(f[d].w);if(b<=g)break;b=b-g|0;d=e;}}MX(a,d,b,c);}
function MX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(GF(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=P(Cz,1);h.data[0]=AKb(d);a.s=h;}else if(!b&&!c){h=P(Cz,g+1|0);f=h.data;C_(e,0,h,1,g);f[0]=AKb(d);a.s=h;}else{i=f[b];if(c<=0)j=Ej(FF(d,i.w),i.b4,i.bE);else if(c>=M(i.w))j=Ej(FF(i.w,d),i.b4,i.bE);else{k=M(d);l=k+c|0;m=M(i.w)-c|0;e=B6(M(i.w)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.w,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.w,g+c|0);g=g+1|0;}j=Ej(Gv(e),i.b4,i.bE);}f[b]=j;}a.U=a.U
+M(d)|0;E9(a);}
function PN(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<Mu(f)){if(Q(f.w,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function NR(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gA;if(!(e!==null&&e.data.length>=d)){a.gA=AM2(d);a.e3=BQ(d);a.hi=1;}Wb(a);if(!a.hi)A$E=A$E+1|0;else{f=0;g=0.0;A$D=A$D+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+M(j.w)|0;a.eB.data[h]=f;Cq(b,i[KV(j)]);g=g+Et(b,j.w);a.gA.data[h]=g;a.e3.data[h]=g+0.5|0;h=h+1|0;}a.U=f;a.hi=0;a.jT=0;}}
function Wb(a){var b;b=a.eB;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eB=BQ(a.s.data.length);a.jT=1;}}
function T0(a){a.hi=1;a.iw=null;}
function E9(a){T0(a);a.jy=1;a.jT=1;}
function AAX(a,b,c,d){var e,f,g,h,i,j,k;if(a.iw===null)a.iw=P($rt_arraycls($rt_intcls()),a.s.data.length);e=a.iw.data[d];if(e===null){e=c.data;f=a.s.data[d];Cq(b,e[KV(f)]);f=f.w;e=BQ(M(f)-1|0);c=GH(f);g=!d?0.0:a.gA.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BB;k=i+1|0;O3(f,c,0,k);h[i]=g+Et(b,f)+0.5|0;i=k;}a.iw.data[d]=e;}return e;}
function G_(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.hi&&a.e3!==null))NR(a,c,d);if(b>=a.U)return a.e3.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+M(g[f].w)|0;i=BP(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.e3.data[f];}return (AAX(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FR(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.e3.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hj(a,b){var c;if(b>=a.U)return b+1|0;c=KB(a,b);return a.eB.data[c];}
function FX(a){var b,c,d,e;b=new J;F3(b,a.U);c=a.s.data;d=c.length;e=0;while(e<d){BL(b,c[e].w);e=e+1|0;}return K(b);}
function A2D(a){var b,c,d,e;b=a.s.data;c=b.length;if(c==1)d=AGw(b[0]);else{d=new J;L(d);BL(d,C(36));e=0;while(e<c){if(e>0)BL(d,C(37));H(d,b[e]);e=e+1|0;}BL(d,C(38));d=K(d);}return d;}
function AGB(){A$v=0;}
function Zb(){var a=this;B.call(a);a.fL=null;a.fi=null;}
function AYK(a,b){var c=new Zb();AZT(c,a,b);return c;}
function AZT(a,b,c){a.fL=b;a.fi=c;}
function Um(a,b,c){var d;d=a.fL;if(d===null)return;Z8(a,d,b,c);}
function PL(a,b,c){var d;d=a.fL;if(d===null)return;ACw(a,d,b,c);}
function Z8(a,b,c,d){var e,f,g,h;e=b.e5.ca();while(e.cM()){Wz(a,e.cc(),c,d);}e=b.fM.ca();while(e.cM()){f=e.cc();g=new TX;g.zH=a;E0(a,g,f,c,d);}h=b.hZ.ca();while(h.cM()){e=h.cc();Wz(a,e.lI,c,d);f=new TY;f.xM=a;E0(a,f,e.la,c,d);}b=b.cT.ca();while(b.cM()){Z8(a,b.cc(),c,d);}}
function Wz(a,b,c,d){K8(a,b.ee,c,d);}
function E0(a,b,c,d,e){var f,g;a:{if(c instanceof HU){f=c.fF;g=new WL;g.rH=a;g.rF=b;g.rE=d;g.rG=e;FE(f,g);}else{if(!(c instanceof Ky)){if(!(c instanceof JF))break a;f=c;E0(a,b,f.ie,d,e);E0(a,b,f.hL,d,e);return;}g=c.ir;f=new WM;f.CU=a;f.CT=b;f.CS=d;f.CR=e;FE(g,f);}}if(c!==null){c=c.eH;if(c!==null)b.ma(c,C3(d),C3(e));}}
function K8(a,b,c,d){var e;e=b.dq;if(e>=c)b.dq=e+d|0;}
function ACw(a,b,c,d){var e,f,g,h;e=b.e5.ca();while(e.cM()){Kb(a,(e.cc()).ee,c,d);}e=b.fM.ca();while(e.cM()){f=e.cc();g=new SY;g.vN=a;E0(a,g,f,c,d);}h=b.hZ.ca();while(h.cM()){e=h.cc();Kb(a,e.lI.ee,c,d);f=new S0;f.Bh=a;E0(a,f,e.la,c,d);}b.e5.p7(new SX);b.fM.p7(new SW);b=b.cT.ca();while(b.cM()){ACw(a,b.cc(),c,d);}}
function Kb(a,b,c,d){var e;e=b.dq;if(e>=c)b.dq=e-d|0;}
function LE(){var a=this;El.call(a);a.dd=0;a.b_=null;a.c6=0;a.CV=0.0;a.nA=0;}
function Ka(){var a=new LE();Ri(a);return a;}
function AZ2(a,b){return P(H8,b);}
function Ri(a){var b;b=AIF(16);a.dd=0;a.b_=P(H8,b);a.CV=0.75;Up(a);}
function AIF(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E4(a){var b;if(a.dd>0){a.dd=0;b=a.b_;AFW(b,0,b.data.length,null);a.c6=a.c6+1|0;}}
function Up(a){a.nA=a.b_.data.length*a.CV|0;}
function HG(a,b){return ABY(a,b)===null?0:1;}
function Op(a){var b;b=new Uq;b.zX=a;return b;}
function CA(a,b){var c;c=ABY(a,b);if(c===null)return null;return c.cQ;}
function ABY(a,b){var c,d;if(b===null)c=SR(a);else{d=b.qr();c=RK(a,b,d&(a.b_.data.length-1|0),d);}return c;}
function RK(a,b,c,d){var e;e=a.b_.data[c];while(e!==null&&!(e.ml==d&&AJu(b,e.cH))){e=e.c4;}return e;}
function SR(a){var b;b=a.b_.data[0];while(b!==null&&b.cH!==null){b=b.c4;}return b;}
function Nw(a){var b;if(a.pr===null){b=new QY;b.jB=a;a.pr=b;}return a.pr;}
function D0(a,b,c){var d,e,f,g;if(b===null){d=SR(a);if(d===null){a.c6=a.c6+1|0;d=Uk(a,null,0,0);e=a.dd+1|0;a.dd=e;if(e>a.nA)AC8(a);}}else{e=b.qr();f=e&(a.b_.data.length-1|0);d=RK(a,b,f,e);if(d===null){a.c6=a.c6+1|0;d=Uk(a,b,f,e);e=a.dd+1|0;a.dd=e;if(e>a.nA)AC8(a);}}g=d.cQ;d.cQ=c;return g;}
function Uk(a,b,c,d){var e,f;e=new H8;WH(e,b,null);e.ml=d;f=a.b_.data;e.c4=f[c];f[c]=e;return e;}
function AKl(a,b){var c,d,e,f,g,h,i,j;c=AIF(!b?1:b<<1);d=P(H8,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b_.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.ml&b;j=h.c4;h.c4=e[i];e[i]=h;h=j;}f=f+1|0;}a.b_=d;Up(a);}
function AC8(a){AKl(a,a.b_.data.length);}
function LP(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b_.data[0];while(e!==null){if(e.cH===null)break a;b=e.c4;d=e;e=b;}}else{f=Kh(b);g=a.b_.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.ml==f&&AJu(b,e.cH))){h=e.c4;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.c4=e.c4;else a.b_.data[c]=e.c4;a.c6=a.c6+1|0;a.dd=a.dd-1|0;}if(e===null)return null;return e.cQ;}
function AJu(b,c){return b!==c&&!b.bN(c)?0:1;}
var Vv=G();
function A0P(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function Cz(){var a=this;B.call(a);a.w=null;a.b4=0;a.bE=0;}
function AKb(a){var b=new Cz();AZn(b,a);return b;}
function Ej(a,b,c){var d=new Cz();ACh(d,a,b,c);return d;}
function AZn(a,b){ACh(a,b,0,0);}
function ACh(a,b,c,d){a.w=b;a.b4=c;a.bE=d;}
function KV(a){return a.bE&3;}
function JG(b,c){return (!b?0:2)+(!c?0:1)|0;}
function Mu(a){return M(a.w);}
function AGw(a){var b,c,d,e;b=A51(a.w);c=a.bE;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BL(b,C(225));if(d)BL(b,C(226));if(e)BL(b,C(227));return K(b);}
var N7=G(LE);
function AAJ(){var a=this;B.call(a);a.dk=null;a.fd=0;}
var A$F=null;function AHX(a){var b=new AAJ();AIm(b,a);return b;}
function AIm(a,b){a.fd=0;a.dk=b;}
function Q$(a,b){var c;if(b.eV)return b;b=B9(b.bu);while(true){if(!Cb(b))return null;c=Q$(a,Cc(b));if(c!==null)break;}return c;}
function X8(a,b,c){var d,e,f,g;d=NZ(a,a.dk,b);if(d===null)return;b=c.cq;e=b===null?A$G:b.cT;f=c.bu;c=a.dk;if(d===c){if(c.cq===null)c.cq=b;b=new AA1;b.zE=a;FE(f,b);b=new AA0;b.vL=a;e.fs(b);b=a.dk;b.bu=f;b.cq.cT=e;b.eV=0;return;}if(!EL(f)){c=d.hF;if(c!==null){b=new Yw;b.rL=c;FE(f,b);g=Lr(c.bu,d);if(g==(-1))GK(c.bu,f);else{EV(c.bu,g);AJQ(c.bu,g,f);}}}b=d.cq;if(b!==null){b=b.hy;c=new S6;c.ti=b;e.fs(c);g=Lr(b.cT,d.cq);if(g==(-1))GK(b.cT,e);else{b.cT.mC(g);b.cT.vb(g,e);}}}
function NZ(a,b,c){var d,e,f,g;d=b.b2;if(d.b5==c.b5&&d.b3==c.b3?1:0){d=B9(b.bu);while(Cb(d)){e=NZ(a,Cc(d),c);if(e!==null)return e;}return b;}b=B9(b.bu);while(true){if(!Cb(b))return null;d=Cc(b);f=c.b5;g=c.b3;e=d.b2;if(e.b5<=f&&g<=e.b3?1:0){e=NZ(a,d,c);if(e!==null)break;}}return e;}
function ACa(a,b,c){Bz(c,b.b2);b=B9(b.bu);while(Cb(b)){ACa(a,Cc(b),c);}}
function Yz(a,b,c){a.fd=0;LH(a,a.dk,b,c);}
function LH(a,b,c,d){var e;if(Dg(b)<c)return;a:{if(Dp(b)>c){Mf(b,d);HB(b,d);b=B9(b.bu);while(Cb(b)){LH(a,Cc(b),c,d);}}else{if(!M$(b,c)){if(a.fd)break a;if(Dg(b)!=c)break a;}HB(b,d);if(Dp(b)==c&&a.fd)Mf(b,d);e=B9(b.bu);while(Cb(e)){LH(a,Cc(e),c,d);}if(!a.fd){b.eV=1;a.fd=1;}}}}
function VW(a,b,c){a.fd=0;Nc(a,a.dk,b,c);}
function Nc(a,b,c,d){var e,f,g,h,i,j;if(Dg(b)<c)return;e=Dp(b);f=c+d|0;if(e>f){e= -d|0;Mf(b,e);HB(b,e);g=B9(b.bu);while(Cb(g)){Nc(a,Cc(g),c,d);}b.bu=Xm(a,b.bu);}else{h=b.b2;if(c<=h.b5&&h.b3<=f?1:0){if(b===a.dk){Mo(b,0);Nb(b,0);h=b.cq;if(h!==null)h.cT.jx();}else{Mo(b,(-1));Nb(b,(-1));h=b.cq;if(h!==null){AER(h);b.cq=null;}}IN(b.bu);}else{e=M$(b,c);f=M$(b,f);if(e&&f)HB(b, -d|0);else if(e)Nb(b,c);else{if(!f)return;Mo(b,c);HB(b, -d|0);}h=B9(b.bu);while(Cb(h)){Nc(a,Cc(h),c,d);}h=Mc(b.bu);g=YS(0);i=new Sz;j=new ADf;j.Gr
=i;j.k1=g;while(On(h,j)){}if(!j.k1.oJ&&!a.fd)b.eV=1;else a.fd=1;b.bu=Xm(a,b.bu);}}}
function Xm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BN();d=null;e=A$F;f=b.cm;g=b.p;if(e===null)e=A9k;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}Ll(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b7=b.b7+1|0;b=B9(b);while(Cb(b)){m=Cc(b);if(Dp(m)==Dg(m))continue;if(!m.eV){if(d!==null){Bz(c,d);d=null;}Bz(c,m);}else if(d===null)d=m;else{n=AVC(La(Be(Dp(d),Dp(m)),Bd(Dg(d),Dg(m)),d.b2.f0),d.hF,d.cq);n.eV=1;d=m.cq;if(d===null)d=n;else{AER(d);d=n;}}}if(d!==null)Bz(c,d);return c;}
function AEf(a,b,c,d){var e,f,g,h,i,j;if((Dg(c)-Dp(c)|0)<43)e=Cw(d,Dp(c),Dg(c));else{e=Cw(d,Dp(c),Dp(c)+20|0);f=Cw(d,Dg(c)-20|0,Dg(c));g=new J;L(g);H(H(H(g,e),C(168)),f);e=K(g);}e=ADc(e,C(175),C(228));f=Bj();g=BT(c);h=new J;L(h);i=V(h,b);Br(i,32);g=H(i,g);Br(g,9);H(g,e);Bf(f,K(h));c=B9(c.bu);j=b+1|0;while(Cb(c)){AEf(a,j,Cc(c),d);}}
function AIv(){A$F=new VK;}
function AMA(){var a=this;B.call(a);a.b5=0;a.b3=0;a.f0=0;}
function La(a,b,c){var d=new AMA();AZj(d,a,b,c);return d;}
function AZj(a,b,c,d){a.b5=b;a.b3=c;a.f0=d;}
function AUP(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.b5==c.b5&&a.b3==c.b3&&a.f0==c.f0?1:0;}return 0;}
function AJq(a){var b,c,d,e;b=a.b5;c=a.b3;d=a.f0;e=new J;L(e);Br(e,40);Br(V(H(V(H(V(e,b),C(37)),c),C(37)),d),41);return K(e);}
function AYu(a,b){var c;b=b;c=BP(a.b5,b.b5);if(!c)c=BP(b.b3,a.b3);return c;}
var VK=G();
function ARQ(a,b,c){var d;b=b;c=c;b=b.b2;c=c.b2;d=BP(b.b5,c.b5);if(!d)d=BP(c.b3,b.b3);return d;}
function AAd(){var a=this;B.call(a);a.b2=null;a.hF=null;a.bu=null;a.cq=null;a.eV=0;}
function AVC(a,b,c){var d=new AAd();AHV(d,a,b,c);return d;}
function AHV(a,b,c,d){a.eV=0;a.b2=b;a.hF=c;a.bu=BN();a.cq=d;}
function AIO(b){return AAn(b,null);}
function AAn(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=La(d,e,f);j=new AAd;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AHV(j,i,null,l);m=0;while(m<g){l=AAn(b,c);l.hF=j;Bz(j.bu,l);m=m+1|0;}return j;}
function AFB(b,c,d){var e,f,g,h,i;a:{e=b.b2;f=b.bu;g=e.b5;h=e.b3;i=e.f0;Bu(c,g);Hf(c,h,i);Bu(c,f.p);if(d!==null){e=b.cq;if(e!==null&&ADF(d,e)){g=(OL(d,b.cq)).br;break a;}}g=(-1);}Bu(c,g);b=B9(f);while(Cb(b)){AFB(Cc(b),c,d);}}
function Dp(a){return a.b2.b5;}
function Dg(a){return a.b2.b3;}
function Mo(a,b){a.b2.b5=b;}
function Nb(a,b){a.b2.b3=b;}
function Mf(a,b){var c;c=a.b2;c.b5=c.b5+b|0;}
function HB(a,b){var c;c=a.b2;c.b3=c.b3+b|0;}
function M$(a,b){return Dp(a)<=b&&b<Dg(a)?1:0;}
function ANw(a){var b,c,d;b=AJq(a.b2);c=a.eV;d=new J;L(d);JP(H(H(d,b),C(37)),c);return K(d);}
function AOi(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.b2,c.b2)&&BR(a.bu,c.bu)?1:0;}return 0;}
var JH=G(0);
function Ha(){var a=this;B.call(a);a.cH=null;a.cQ=null;}
function A$H(a,b){var c=new Ha();WH(c,a,b);return c;}
function WH(a,b,c){a.cH=b;a.cQ=c;}
function AYY(a,b){var c,d;if(a===b)return 1;if(!Jv(b,JH))return 0;a:{b:{c:{d:{c=b;b=a.cH;if(b!==null){if(!b.bN(c.cH))break c;else break d;}if(c.cH!==null)break c;}b=a.cQ;if(b!==null){if(!b.bN(c.cQ))break c;else break b;}if(c.cQ===null)break b;}d=0;break a;}d=1;}return d;}
function AOY(a){var b,c,d;b=a.cH;c=a.cQ;d=new J;L(d);b=H(d,b);Br(b,61);H(b,c);return K(d);}
function H8(){var a=this;Ha.call(a);a.ml=0;a.c4=null;}
function N4(){var a=this;LL.call(a);a.y5=null;a.rI=null;}
function AFF(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.y5;e=0;f=0;g=a.rI;a:{while(true){if((e+32|0)>f&&Ee(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Cj(b)+j|0,i.length);PO(b,d,j,f-j|0);e=0;}if(!Ee(c)){k=!Ee(b)&&e>=f?A95:A94;break a;}i=g.data;j=Be(Cj(c),i.length);l=new X4;l.qX=b;l.zs=c;k=AGY(a,d,e,f,g,0,j,l);e=l.vS;j=l.wO;if(k===null){if(!Ee(b)&&e>=f)k=A95;else if(!Ee(c)&&e>=f)k=A94;}AEh(c,g,0,j);if(k!==null)break;}}FH(b,b.bd-(f-e|0)|0);return k;}
var Q7=G(N4);
function AGY(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ov(h,2))break a;i=A94;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!OT(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ov(h,3))break a;i=A94;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CX(l)){i=EC(1);break a;}if
(j>=d){if(Ee(h.qX))break a;i=A95;break a;}c=j+1|0;m=k[j];if(!Dm(m)){j=c+(-2)|0;i=EC(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ov(h,4))break a;i=A94;break a;}k=e.data;o=EX(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vS=j;h.wO=f;return i;}
var Jp=G(EE);
var Pj=G();
function AWn(a,b){return b.text();}
function Pl(){var a=this;B.call(a);a.uo=null;a.un=null;}
function AVJ(a,b){var c,d,e,f;c=a.uo;d=a.un;e=b.length;f=new PS;f.By=b;c.g(APE((ALV(e,f)).kz,AC5(d)));}
var Pk=G();
function AXM(a,b){AIE(b);}
function Je(){var a=this;B.call(a);a.bv=null;a.Gc=null;a.cw=null;a.j4=null;a.lw=null;a.ed=null;a.gy=null;a.Cr=null;a.p8=null;a.pg=null;}
function A$I(a,b,c,d,e,f){var g=new Je();L2(g,a,b,c,d,e,f);return g;}
function IV(){var b,c,d,e,f,g,h,i,j;b=new Je;c=new Ku;d=new Hy;FV();Le(d,A$J);MQ(c,d,B0(A$q),B0(A$K),B0(A$L),B0(A$q),B0(A$M),B0(A$N),B0(A$O),B0(A$P),B0(A$Q),B0(A$R));e=AKP(S(C(229)));f=(AKV()).data;g=f.length;h=P(KJ,g);i=h.data;j=0;while(j<g){i[j]=f[j].ok;j=j+1|0;}L2(b,c,e,h,ALC(S(C(230)),S(C(231)),S(C(232)),S(C(233))),Fp(),AFl(S(C(234)),S(C(235)),S(C(236)),S(C(237))));return b;}
function Hv(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new Je;c=new Ku;d=new Hy;APM();Le(d,A$S);MQ(c,d,B0(A$T),B0(A$U),B0(A$V),B0(A$T),B0(A$W),B0(A$X),B0(A$Y),B0(A$Z),B0(A$0),B0(A$1));e=AKP(S(C(238)));f=(AGK()).data;g=f.length;h=P(KJ,g);i=h.data;j=0;while(j<g){i[j]=f[j].lt;j=j+1|0;}k=ALC(S(C(239)),S(C(240)),S(C(241)),S(C(242)));l=new Jg;m=new Jn;AXk();n=A$2;O1(m,n,A$3,A$4,A$5,A$6,n);Mb(l,m,AId(),AIK(S(C(243)),S(C(244)),S(C(245))),AId(),AI9(1,0.17499999701976776),A$7,A$8);L2(b,c,e,h,k,l,AFl(S(C(234)),S(C(235)),S(C(236)),
S(C(246))));return b;}
function L2(a,b,c,d,e,f,g){var h;h=d.data;a.gy=DA(C(167),17.0);a.Cr=DA(C(156),15.0);a.p8=DA(C(167),15.0);a.pg=DA(C(14),15.0);a.bv=b;a.Gc=c;a.j4=d;a.lw=e;if(h.length>=15){a.cw=f;a.ed=g;return;}b=new BX;X(b);N(b);}
function XE(a,b){if(b===null)b=a.bv.ep;return b;}
function KP(){var a=this;CB.call(a);a.d4=null;a.oj=null;}
function A7k(a){var b=new KP();AIX(b,a);return b;}
function AIX(a,b){var c,d,e,f;IO(a,b,0);c=Ld(a.y);a.oj=c;d=Iu(c);a.d4=d;Nh(a.q,d);c=b.n.bF;d=new Zi;d.sa=a;Ba(c,d);c=b.n.bF;d=new H4;e=new Zg;e.Cg=a;IH(d,b,e);Ba(c,d);c=a.d4;d=b.n;f=new ADb;f.w7=c;Ba(d.bX,c);Ba(d.fB,f);b=b.n.cP;c=new Zh;c.yE=a;Ba(b,c);JI(a);}
function AKD(a,b){var c,d;c=a.d4;d=new ACD;d.vG=a;d.vH=b;GZ(c,b,d);}
function A0o(a,b){if(Ii(a.y,b))Me(a.d4);}
function A4c(a,b){var c;c=Qq(a,b);return LU(a.d4,b)|c;}
function AQr(a){HK(a);ID(a.d4);J8(a.y);}
function A5x(a){return Fb(0);}
function AMX(a,b,c){var d;IU(a,b,c);d=a.d4;MN(d,d.i,b,c);}
function AZi(a,b){BF(b);G0(a.oj,b);FG(a.d4,b);}
function AKo(a,b){if(b.bj!=121)return 0;return 1;}
function AFH(a,b){var c,d,e;if(Dz(a.q,a.d4)){c=a.oj;b=b.j;d=a.d4;e=new ABi;e.AX=a;IZ(c,b,d,a,d,a,e);}return 1;}
function AJk(){var a=this;Cy.call(a);a.zw=null;a.ps=null;a.kw=null;a.er=null;a.l_=null;a.hG=null;a.eI=null;a.jQ=null;a.qU=null;a.jf=null;a.qy=null;a.qz=null;a.pS=null;a.zP=null;a.DB=null;a.tu=0;}
function A7v(a){var b=new AJk();A1i(b,a);return b;}
function A1i(a,b){var c,d,e,f;Er(a,b);c=(IV()).bv.ep;a.zw=c;a.ps=AMv(c);a.kw=new Bh;a.er=K9();a.l_=K9();a.hG=TN(0,0,3,3);a.eI=Io(0,0,300,300);a.jQ=AZ7();d=P(BB,4);e=d.data;e[0]=C(180);e[1]=C(181);e[2]=C(199);e[3]=C(198);a.qU=d;a.jf=P(KE,e.length);c=b.n.bX;f=new Ux;f.fE=a;Ba(c,f);c=b.n.bF;f=new ZJ;f.CW=a;Ba(c,f);c=b.n.oU;f=new ZI;f.sO=a;Ba(c,f);c=b.n.g2;f=new ZH;f.En=a;Ba(c,f);c=b.n.mD;f=new ZG;f.E2=a;Ba(c,f);c=b.n.cP;f=new ZF;f.Ft=a;Ba(c,f);b=b.n.fB;c=new ZE;c.BF=a;Ba(b,c);a.qy=ADx(a,1);a.qz=ADx(a,0);SB(a,a.er,
a.qy);SB(a,a.l_,a.qz);a.pS=AEP(a,0);a.zP=AEP(a,1);F1(a.eI,a.pS);F$(a.eI);HN(a.eI,DD(169,183,198));Ft(a.eI,a.zw);Ct(a.er.ba,1.0,1.0,1.0,1.0);Ft(a.er,a.eI.bq);BO(a.hG.bq,a.ps);}
function SB(a,b,c){F1(b,c);F$(b);}
function S5(a,b){IM(DV(),0.5+DV()*0.5,0.5+DV()*0.5,1.0,b.ba);}
function ADx(a,b){var c,d;c=D_(a.C.R,200,100,b);HH(c,C(247),11.0);B1(c,C(248),0.0,20.0);Ko(c,255,0,0);B1(c,C(248),0.25,40.0);Ko(c,0,255,0);B1(c,C(248),0.5,60.0);Ko(c,0,0,255);B1(c,C(248),0.75,80.0);d=C1(a.C.R);CP(d,c);EI(c);return d;}
function AEP(a,b){var c,d,e,f;c=D_(a.C.R,255,100,b);HH(c,C(167),10.0);d=Bj();e=$rt_str(c.di.font);f=new J;L(f);H(H(f,C(249)),e);Bf(d,K(f));Et(c,C(250));B1(c,C(250),0.0,20.0);B1(c,C(250),0.25,40.0);B1(c,C(250),0.5,60.0);B1(c,C(250),0.75,80.0);e=C1(a.C.R);CP(e,c);EI(c);return e;}
function ANh(a,b){var c;a.tu=a.tu+1|0;c=b/5.0;IM(c-(c|0),1.0,1.0,1.0,a.hG.ba);return AB4(a.jQ,b);}
function APd(a){var b,c,d,e,f,g,h,i;b=a.C.R;ER(b,a.ps);c=a.jf.data;d=c.length;e=0;while(e<d){AAC(c[e],b,0,0);e=e+1|0;}f=a.eI;g=f.v;g.b=(a.kw.b-f.u.b|0)-5|0;g.a=0;Ca(b,0);h=0;while(h<7){f=a.eI;EN(f,b,a.pS,Bc(h,10+((10*f.u.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eI;f.v.b=(a.kw.b-(f.u.b*2|0)|0)-10|0;h=0;while(h<7){g=a.zP;f=a.eI;f.v.a=Bc(h,10+((10*f.u.a|0)/15|0)|0)+5|0;Ts(f,b,g,1);h=h+1|0;}Ts(a.er,b,a.qy,1);Ca(b,1);g=a.l_;f=a.qz;i=g.v;h=i.a;d=i.b;g=g.u;GJ(b,b.lf);GU(b.lf,b.bc,h,d,g,b.db);Oh(b.lf,b.bc,f);Gb(b);Ca(b,0);f
=a.DB;if(f!==null)WC(a.hG,b,f,0,0,0.0);AC6(a.jQ,b,new Bh);Ni(b,C(251));}
function ARw(a,b,c){var d,e,f,g,h,i,j,k;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(252)),e);Bf(d,K(f));d=Bj();f=new J;L(f);De(H(f,C(253)),c);Bf(d,K(f));g=Ci(30.0,c);h=Ci(10.0,c);i=0;while(true){j=a.jf.data;if(i>=j.length)break;k=1+i|0;j[i]=TN(Bc(h,k)+Bc(g,i)|0,g,g,g);S5(a,a.jf.data[i]);i=k;}Y(a.hG.v,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.er;Y(f.v,((b.a/2|0)-f.u.a|0)-10|0,50);Y(a.l_.v,(b.a/2|0)+10|0,50);Cr(a.kw,b);}
function XL(a,b){var c,d,e,f,g;c=Bj();d=!b.j7?C(254):C(255);e=b.eo;f=b.bj;g=b.AG;b=new J;L(b);JP(H(V(H(H(H(b,d),e),C(256)),f),C(257)),g);Bf(c,K(b));return 0;}
function AB_(){var a=this;Cy.call(a);a.Fw=null;a.lv=null;a.jh=null;a.il=null;a.ds=null;a.d5=null;a.np=null;a.ne=null;a.jU=0;a.iV=null;a.iU=null;}
function RL(a,b,c){F1(b,c);F$(b);}
function AE6(a,b,c,d,e,f){var g,h;g=D_(f,c,120,b);Cq(g,e);e=!b?C(258):C(259);h=new J;L(h);H(H(H(h,e),d),C(154));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C1(f);CP(h,g);EI(g);return h;}
function AS3(a,b){return 0;}
function AYk(a){var b,c,d,e,f,g,h,i;b=a.C.R;ER(b,a.lv);Ca(b,0);c=a.jh;d=c.b;e=a.il;f=d-e.b|0;g=c.a-e.a|0;Bv(b,0,0,e,a.ds.bq);Bv(b,g,0,a.il,a.d5.bq);Bv(b,0,f,a.il,a.ds.ba);Bv(b,g,f,a.il,a.d5.ba);c=a.ds;e=c.v;h=e.b;i=((a.jh.b*3|0)/4|0)-(c.u.b/2|0)|0;IP(c,b,e.a,h,a.iV,0,1);c=a.ds;IP(c,b,c.v.a,i,a.iV,1,1);c=a.d5;IP(c,b,c.v.a,h,a.iU,0,0);e=a.d5;IP(e,b,e.v.a,i,a.iU,1,0);Ni(b,C(251));}
function AZD(a,b,c){var d,e;Cr(a.jh,b);Y(a.il,b.a/2|0,b.b/2|0);d=a.jh.b/4|0;e=a.ds;d=d-(e.u.b/2|0)|0;Y(e.v,(b.a/4|0)-(a.jU/2|0)|0,d);Y(a.d5.v,((b.a*3|0)/4|0)-(a.jU/2|0)|0,d);}
function Yk(){var a=this;CB.call(a);a.zr=null;a.fl=null;a.dP=null;a.oX=null;}
function AQ0(a,b,c){var d;d=Fu(a.q,a.oX);JY(a.fl,d,a.q);JY(a.dP,d,a.q);}
function Si(b){return Jk(b,VE());}
function Jk(b,c){var d;d=TL();OE(d,NJ(b,Ks(c,25)),!b?null:Jk(b-1|0,c));OE(d,NJ(b,Ks(c,20)),!b?null:Jk(b-1|0,c));OE(d,NJ(b,Ks(c,15)),!b?null:Jk(b-1|0,c));OE(d,NJ(b,Ks(c,10)),!b?null:Jk(b-1|0,c));return Jd(d);}
function NJ(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(29)),c);c=K(d);}return c;}
function OE(b,c,d){if(d!==null)If(b,c,d);else{d=new V8;d.sx=c;Ey(b,c,d);}}
function APP(a,b,c){var d,e;IU(a,b,c);b=a.q.bT;d=EJ(a.fl);e=EJ(a.dP);ND(a.fl,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);ND(a.dP,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AZd(a){var b,c,d,e,f,g,h,i;HK(a);b=a.C.R;Ca(b,1);c=a.zr;d=a.q;e=d.bT;Y(c.oa,e.a,Ci(2.0,d.ci));Y(c.oD,Ci(2.0,d.ci),e.b);FV();f=A$Q;g=d.bL;h=e.b/2|0;i=c.oa;Bv(g,0,h-(i.b/2|0)|0,i,f);g=d.bL;h=e.a/2|0;c=c.oD;Bv(g,h-(c.a/2|0)|0,0,c,f);My(a.fl,a.q);My(a.dP,a.q);J8(a.y);Ca(b,0);}
function ARz(a,b){var c,d;c=Oa(a.fl,b.j,a.q.c2);d=Oa(a.dP,b.j,a.q.c2);return !c&&!d?0:1;}
function ANZ(a,b,c,d){var e,f;e=Ox(a.fl,b.j,c,d);f=Ox(a.dP,b.j,c,d);return !e&&!f?0:1;}
function ABA(){CB.call(this);this.kZ=null;}
function AO4(a,b,c){if(b===0.0)ZS(a);}
function ZS(a){var b,c,d,e,f,g,h,i;b=a.kZ;if(b!==null){II(a.y,b);Kf(b);}b=(IV()).cw;c=A8I(a.q,new VT);d=DA(C(156),14.0);e=AQY();f=0;while(f<300){g=Dn(f);h=new Tj;h.BY=C(260);h.BV=g;h.BW=C(261);WZ(e,C(260),g,C(261),h);f=f+1|0;}XU(c,AD3(e));WT(c,b,d);g=AFp(a.q);i=GW(c,a.q);Jz(i,b.nh,b.pd);Lu(g,i);EQ(g,b);C2(g,C(146));a.kZ=g;Ep(a.y,g);Q2(a);}
function AOc(a,b,c){IU(a,b,c);Q2(a);}
function Q2(a){var b,c,d;b=a.q.bT;EB(a.kZ,BK((b.a*2|0)/10|0,(b.b*4|0)/10|0),BK((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kZ;b=AI8(c.Y.k);d=new J;L(d);H(H(d,C(262)),b);C2(c,K(d));}
function XH(){var a=this;H0.call(a);a.mE=null;a.ia=null;a.gs=null;a.ky=null;a.ss=null;a.kt=null;a.ip=null;a.hX=null;a.l0=0;a.h_=0;}
function P5(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.ia.p>0){d=DV();e=a.ia;f=d*(e.p-1|0)|0;e=EV(e,f);EV(a.gs,f);f=a.h_;g=e.u;a.h_=f-Bc(g.a,g.b)|0;Ji(a.mE,e.dE);}c=c+1|0;}}
function Ml(a,b){var c,d,e,f,g,h,i,j;c=KC(a.q);Cq(c,a.ky);d=0;while(d<b){e=Ks(a.kt,1+(DV()*19.0|0)|0);f=K9();g=f.dE;h=a.mE;BF(c);i=new RF;i.u9=c;BO(g,KM(h,e,i));(V7(DV(),1.0,1.0,f.bq)).bA=0.5;h=f.v;g=f.dE;Y(h,g.bp|0,g.bt|0);h=f.u;g=f.dE;Y(h,g.bg|0,g.bA|0);Bz(a.gs,e);Bz(a.ia,f);j=a.h_;h=f.u;a.h_=j+Bc(h.a,h.b)|0;d=d+1|0;}a.hX=M8(a.mE);}
function A3I(a){var b,c,d,e,f,g,h,i;HK(a);b=a.C.R;Ca(b,1);c=a.q.bL;if(a.gs.p){d=a.hX;d=HW(c,d.a,d.b);Cq(d,a.ky);e=a.ky.ev;Bv(c,0,0,a.hX,a.ss);f=0;while(f<a.gs.p){g=BI(a.ia,f);h=BI(a.gs,f);g=g.dE;B1(d,h,g.bp,g.bt+e);f=f+1|0;}g=a.ip;if(!(g!==null&&BU(g)==a.hX.a&&CR(a.ip)==a.hX.b))a.ip=BY(a.ip,C1(c));CP(a.ip,d);EI(d);i=0;while(i<a.gs.p){d=BI(a.ia,i);HN(d,Cx(0));EN(d,c,a.ip,0,0);i=i+1|0;}}Ca(b,0);}
function ANa(a,b){var c,d;if(a.l0){c=a.hX;d=Be(Bc(c.a,c.b),2211840);if(a.h_/d<=0.7)Ml(a,Ea(a.kt,5));else P5(a,Ea(a.kt,5));}return a.l0;}
function Tp(){var a=this;Cy.call(a);a.eJ=null;a.id=null;a.jg=null;a.pj=null;a.fc=0;a.vx=0;a.st=null;a.mS=0;a.x3=0;a.yp=null;a.A5=null;}
function AMV(a){var b,c;b=a.fc;c=new J;L(c);V(H(c,C(263)),b);$rt_globals.console.info($rt_ustr(K(c)));ER(a.eJ,a.st);KG(a.jg,a.fc,0,HE(a),5000,a.pj.a,20);Ca(a.eJ,1);Wf(a.jg,a.eJ);Ca(a.eJ,0);b=a.fc;c=new J;L(c);V(H(c,C(263)),b);$rt_globals.console.info($rt_ustr(K(c)));ACE(a.id,a.fc/a.mS|0,a.eJ);ABU(a.id,a.fc,HE(a),a.A5,a.eJ);}
function AWX(a,b,c){a.pj=b;SV(a.id,BK(0,0),50,HE(a),c);Tz(a.id,a.eJ,0,HE(a));}
function Vw(a){return 5000-HE(a)|0;}
function HE(a){return Be(a.vx,a.pj.b);}
function Dw(){var a=this;Cy.call(a);a.qo=null;a.g$=null;a.q9=0.0;}
function A$9(a){var b=new Dw();H2(b,a);return b;}
function H2(a,b){Er(a,b);a.qo=AJ4(0,0,64);a.g$=new Bh;Gw(b.bG,J$(BG(a)));}
function AA4(a){ER(a.C.R,a.qo);}
function Tk(a,b,c){Cr(a.g$,b);a.q9=c;}
var RJ=G(Dw);
var X3=G(CB);
function Hr(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.bG;f=new RE;f.D_=a;f.uO=b;g=P(B,1);h=g.data;i=BQ(1);i.data[0]=b;h[0]=i;CL(e,f,C(264),g);d=d+1|0;}}
function ALW(b){var c;c=b.data;AJz(c[0],c[1],YP(I5(b,2)));}
function AJz(b,c,d){var e,f,g,h,i;d=d.data;e=Bj();b=BT(b);c=BT(c);f=new J;L(f);H(H(H(H(f,C(265)),b),C(266)),c);Bf(e,K(f));b=Bj();g=d.length;h=1;i=0;while(i<g){h=(31*h|0)+d[i]|0;i=i+1|0;}c=new J;L(c);V(H(V(H(c,C(267)),g),C(268)),h);Bf(b,K(c));}
function Xj(){var a=this;Dw.call(a);a.fa=null;a.gT=null;a.n1=null;a.BI=null;a.qO=null;}
function AQG(a,b){b=b/5.0;IM(b-(b|0),1.0,1.0,1.0,a.gT.ba);return 0;}
function AY3(a){AA4(a);EN(a.fa,a.C.R,a.BI,0,0);WC(a.gT,a.C.R,a.n1,0,0,0.0);Ni(a.C.R,C(251));}
function A5s(a,b,c){var d,e,f;Tk(a,b,c);Y(a.gT.v,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.fa;e=d.v;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Tn(){var a=this;Dw.call(a);a.hb=null;a.ro=null;a.mP=null;a.kR=null;a.j$=null;}
function A58(a){var b,c,d,e,f,g;AA4(a);b=a.C.R;c=a.kR;Ma(b,c.a,c.b,a.j$);b=a.hb;c=a.ro;d=a.g$;e=a.C.R;f=0;while(true){g=0;while(true){EN(b,e,c,g,f);g=g+BU(c)|0;if(g>=d.a)break;}f=f+CR(c)|0;if(f>=d.b)break;}Gm(a.C.R);}
function AQm(a,b,c){Tk(a,b,c);Y(a.j$,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ABl(){var a=this;Cy.call(a);a.eS=null;a.o6=null;a.gW=null;a.cg=null;a.fr=0;a.iR=null;a.fQ=0;a.EB=20;a.Gf=11;a.EZ=220;a.mt=null;a.FH=5000;a.iB=0;a.g4=null;}
function AVM(a){var b,c,d,e,f,g,h;b=a.iR;c=a.fQ;d=a.mt;KG(b,c,0,d.b,5000,d.a,20);Ca(a.eS,1);Wf(a.iR,a.eS);if(a.cg===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.o6,Dn(e),0.0,c);}b=C1(a.eS);a.cg=b;CP(b,a.o6);}if(a.fQ<=a.fr)while(true){f=a.fr;if(f<=a.fQ)break;a.fr=f-20|0;b=a.gW;g=a.iB-1|0;a.iB=g;B1(b,Dn(g),0.0,20.0);J5(a.cg,a.gW,0,a.fr%220|0);EZ(a.gW);}else while(a.fr<(a.fQ-20|0)){b=a.gW;g=a.iB+1|0;a.iB=g;B1(b,Dn((g+11|0)-1|0),0.0,20.0);J5(a.cg,a.gW,0,a.fr%220|0);EZ(a.gW);a.fr=a.fr+20|0;}b=Io(0,0,BU(a.cg),CR(a.cg));IR(b,
0,0,BU(a.cg),CR(a.cg));HN(b,a.g4.data[0]);Ft(b,a.g4.data[1]);EN(b,a.eS,a.cg,400,0);g=a.fQ%220|0;f=Be(CR(a.cg)-g|0,200);d=Io(0,0,BU(a.cg),f);IR(d,0,g,BU(a.cg),f);HN(d,a.g4.data[0]);Ft(d,a.g4.data[1]);EN(d,a.eS,a.cg,0,0);h=Io(0,f,BU(a.cg),(CR(a.cg)-f|0)-20|0);IR(h,0,0,BU(a.cg),(CR(a.cg)-f|0)-20|0);HN(h,a.g4.data[1]);Ft(h,a.g4.data[0]);EN(h,a.eS,a.cg,0,0);}
function AZf(a,b,c){Cr(a.mt,b);}
function A3o(a,b){return 0;}
function AAV(a){return 5000-a.mt.b|0;}
function KH(){Dw.call(this);this.ek=0;}
function AAB(a){var b,c;b=a.C.bG;c=new U1;c.ym=a;Sb(b,c,Xl(a));}
function Q1(a){var b,c,d,e;b=a.ek+1|0;a.ek=b;c=J$(F(KH));d=new J;L(d);H(H(V(H(d,C(269)),b),C(29)),c);e=K(d);c=a.C.bG;d=new Wy;d.yy=e;Ud(c,e,d,Xl(a));}
function Xl(a){var b;b=new ZN;b.CA=a;return b;}
function ARl(a,b,c,d){a:{switch(c){case 0:break;case 2:Q1(a);break a;default:break a;}AAB(a);}return 1;}
function S8(){var a=this;Dw.call(a);a.u2=null;a.gB=null;a.lS=null;a.pL=null;a.ww=null;}
function AWw(a){var b,c,d,e,f,g,h,i;if(a.lS===null){b=a.C.R;c=a.ww;d=IG(b,c.im,Ci(c.ha,a.q9));Cq(b.ck,d);e=C4(Et(b.ck,C(270)));f=Bj();g=d.po;c=new J;L(c);De(H(c,C(271)),g);Bf(f,K(c));h=NC(d,1.1799999475479126);c=Bj();i=new J;L(i);V(H(V(H(i,C(272)),e),C(172)),h);Bf(c,K(i));c=HW(b,e,h);a.pL=c;Cq(c,d);B1(a.pL,C(270),0.0,d.ev);b=C1(b);a.lS=b;CP(b,a.pL);F1(a.gB,a.lS);F$(a.gB);b=a.gB.bq;FV();BO(b,A$q);BO(a.gB.ba,A$$);}b=a.C.R;ER(b,a.u2);c=a.gB;i=c.v;f=a.g$;e=f.a;c=c.u;Y(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EN(a.gB,b,
a.lS,0,0);}
function Hh(){var a=this;Cy.call(a);a.vY=null;a.co=null;a.ei=null;a.dw=null;a.fx=null;a.eR=null;}
function O6(a,b){var c,d;Er(a,b);a.vY=Cx(20);a.co=S4();a.ei=new Bh;a.dw=new Bh;a.fx=new Bh;a.eR=new Bh;c=b.n.bF;d=new ADa;d.Er=a;Ba(c,d);Ba(b.n.bX,a);b=a.co.bq;FV();BO(b,A$q);BO(a.co.ba,A$$);}
function AGh(a){var b,c,d;b=a.C.R;ER(b,a.vY);c=a.co;d=c.v;Bv(b,d.a,d.b,c.u,c.bq);Ca(b,1);c=a.co;d=c.v;AFd(b,d.a,d.b,c.u,a.ei,a.dw,a.fx,a.eR,c.ba);Ca(b,0);}
function A1f(a,b){return 0;}
var T2=G(Hh);
function A2_(a,b,c){var d,e,f;d=a.co;e=d.v;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);Y(a.ei,0,0);Y(a.dw,Be(b.a,b.b),Be(b.a,b.b));b=a.fx;d=a.ei;Y(b,d.a,d.b+20|0);b=a.eR;d=a.dw;Y(b,d.a,d.b+40|0);}
function A3_(a,b){var c,d,e;Cr(a.ei,b.j);b=a.dw;c=a.co;d=c.v;e=d.a;c=c.u;Y(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fx;c=a.ei;Y(b,c.a,c.b+20|0);b=a.eR;c=a.dw;Y(b,c.a,c.b+40|0);return 0;}
function T1(){var a=this;Hh.call(a);a.gb=null;a.gC=null;}
function A5K(a,b){var c;c=a.dw;b=b.j;c.b=b.b-50|0;a.eR.b=b.b+100|0;return 1;}
function AO0(a){var b,c,d,e,f,g,h;b=Bd(a.ei.a,a.fx.a);c=Be(a.dw.a,a.eR.a);d=Be(a.ei.b,a.dw.b)-50|0;e=Bd(a.fx.b,a.eR.b)+50|0;Ht(a.co,b,d,c-b|0,e-d|0);AGh(a);f=a.co.v.a-10|0;ABn(a,a.C.R,10,f,a.ei,a.fx);g=a.co;h=g.v.a+g.u.a|0;ABn(a,a.C.R,h,f,a.dw,a.eR);}
function ABn(a,b,c,d,e,f){var g;Y(a.gb,c,a.co.v.b);Y(a.gC,d,e.b-a.co.v.b|0);g=a.gb;Bv(b,g.a,g.b,a.gC,a.co.bq);Y(a.gb,c,e.b);Y(a.gC,d,f.b-e.b|0);e=a.gb;Bv(b,e.a,e.b,a.gC,a.co.ba);Y(a.gb,c,f.b);e=a.gC;g=a.co;Y(e,d,(g.v.b+g.u.b|0)-f.b|0);e=a.gb;Bv(b,e.a,e.b,a.gC,a.co.bq);}
function ANG(a,b,c){}
function WQ(){var a=this;CB.call(a);a.C$=3;a.wZ=null;a.km=null;a.qN=0;}
function AQZ(a,b,c){var d,e;if(b===0.0){Ep(a.y,ZA(a));d=TC(a,0.5,0,C(273));e=a.q.bT;EB(Ep(a.y,d),BK(e.a/10|0,e.b/10|0),BK((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function ZA(a){var b,c,d,e,f,g;b=a.qN+1|0;a.qN=b;c=new J;L(c);V(H(c,C(274)),b);c=TC(a,1.0,1,K(c));d=a.q.bT;e=d.a/10|0;f=e+Ea(a.km,e)|0;e=d.b/20|0;e=e+Ea(a.km,e)|0;b=d.a;b=((b*7|0)/10|0)+Ea(a.km,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+Ea(a.km,g/10|0)|0;EB(c,BK(f,e),BK(b,g));return c;}
function TC(a,b,c,d){var e,f,g;e=AFp(a.q);if(d===null)f=new AEB;else{f=new AED;f.vf=e;f.vg=d;}g=new QD;L8(g);g.mz=new B4;g.qb=new Bh;g.y1=f;g.su=b;if(c){d=GW(g,a.q);Jz(d,A$_,A_a);g=d;}Lu(e,g);EQ(e,Fp());ABg(e,a.wZ,3.0);d=new AEC;d.q7=a;d.q8=e;T4(e,d);return e;}
function Ev(){CB.call(this);this.iX=null;}
function A7X(a){var b=new Ev();Kt(b,a);return b;}
function Kt(a,b){Gk(a,b);Ba(a.q.dF,a);BO(a.dc,Cx(43));}
function AYL(a){return AWN();}
function ARH(a){return 1;}
function ACV(a,b){EQ(a.iX,b);}
function AJT(a,b){var c,d,e;c=a.q.bT;d=!a.pT()?0:ADw(b);e=c.b-d|0;EB(b,BK(c.a/20|0,d+(e/20|0)|0),BK((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A3R(a,b,c){if(b===0.0){a.iX=A5u(a.q,a.jG());ACV(a,Fp());if(a.pT())C2(a.iX,HO(BG(a)));Ep(a.y,a.iX);a.n$(a.iX);}}
function QX(){var a=this;Ev.call(a);a.mu=null;a.gn=null;}
function AOg(a){var b;b=Iu(a.mu);a.gn=b;ALS(b);Nh(a.q,a.gn);return a.gn;}
function AXl(a){return 0;}
function A5M(a,b){AJT(a,b);JI(a);}
function AUF(a,b){BF(b);G0(a.mu,b);FG(a.gn,b);ACV(a,b.cw);}
function ATW(a,b){Ii(a.y,b);}
function XM(){B.call(this);this.xi=null;}
function A3F(a,b){D5(a.xi,null);return 0;}
function AAk(){var a=this;Ev.call(a);a.pv=null;a.my=null;}
function AQs(a){var b,c,d,e,f,g;b=AMa(a.q);a.my=b;OB(b,a.pv);b=Ih(C(275),1);c=new SD;c.uM=a;b.cW=c;EP(b);c=Ih(C(276),1);d=new SC;d.yu=a;c.cW=d;EP(c);e=Ih(C(275),1);d=new SF;d.y9=a;e.cW=d;EP(e);f=Ih(C(276),1);d=new SE;d.CE=a;f.cW=d;EP(f);d=ALH(C(277),0,I(C$,[b,c]));Ia(d);g=ALH(C(278),0,I(C$,[e,f]));Ia(g);D3(a.my.dI,d);D3(a.my.dG,g);return a.my;}
function ABS(a){var b,c;b=a.y.bi.cG;c=new US;c.Av=a;Go(b,c);}
function AEo(a){var b,c;b=a.y.bi.cG;c=new Zm;c.x_=a;Go(b,c);}
function AEF(a){var b,c;b=a.y.bi.cG;c=new PH;c.w4=a;GQ(b,c);}
function Z5(a){var b,c;b=a.y.bi.cG;c=new PW;c.Eh=a;GQ(b,c);}
function Tm(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bj();f=HO(BG(d[c]));g=BT(d[c]);h=new J;L(h);H(H(H(H(V(H(h,C(279)),c),C(280)),f),C(29)),g);Bf(e,K(h));c=c+1|0;}}
function Uw(){CB.call(this);this.iy=null;}
function ABZ(){return Fb(1);}
function ZW(a){var b,c,d,e;b=new ZY;c=a.iy;Oo(b,a.y,c,new V0);d=AMa(b.bO.bi);b.dW=d;OB(d,c);c=Ih(C(281),0);d=Ih(C(282),0);EP(c);EP(d);e=new Ti;e.tp=b;c.cW=e;e=new Tg;e.vT=b;d.cW=e;D3(b.dW.dI,c);D3(b.dW.dG,d);d=Pw(b,b.dW,0.0);b.i$=d;c=new Th;c.yj=b;d.kS=c;c=new Tf;c.FJ=b;d.kM=c;Ep(b.bO,d);}
function AWf(a,b,c){if(b===0.0)ZW(a);}
var Pc=G(KP);
function AYn(a){return Fb(1);}
function ADu(){var a=this;Cy.call(a);a.tG=null;a.m7=null;a.fp=null;a.pi=null;a.m6=0.0;a.hm=null;a.w3=null;a.ut=null;a.yS=null;a.zB=null;a.sJ=null;a.qR=null;a.C6=null;a.xr=null;a.lX=null;}
var A_b=0;function A7x(a){var b=new ADu();AWi(b,a);return b;}
function AWi(a,b){var c,d,e;Er(a,b);a.tG=new B4;a.m7=AEO(1.0,0.0,0.0,1.0);a.fp=S4();a.pi=new Bh;a.m6=3.1415927410125732;c=AK6();a.hm=c;a.w3=HT(c,1.25);a.ut=HT(a.hm,1.3333333730697632);a.yS=HT(a.hm,1.5);a.zB=HT(a.hm,1.6666666269302368);a.sJ=HT(a.hm,2.0);a.qR=AEO(a.m6/24.0,15.0,3.0,0.5);c=AEO(a.m6/12.0,25.0,3.0,0.5);a.C6=c;a.xr=D4([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lX=I(B4,[a.hm,a.w3,a.ut,a.yS,a.zB,a.sJ,a.qR,c]);c=b.n.bF;d=new Rn;d.Gd=a;Ba(c,d);Ba(b.n.bX,a);b=a.fp.ba;FV();BO(b,A$q);Ht(a.fp,0,0,600,60);e
=Nu(0.5,0.375);JE(0.375,e);JE(0.375,JE(3.0,Nu(e,3.0)));HT(AK6(),3.0);}
function A5E(a,b,c){var d,e,f;Cr(a.pi,b);d=a.fp;e=d.v;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HT(b,c){var d;d=new B4;VI(b,c,d);return d;}
function AK6(){var b;b=new B4;LV(b);return b;}
function A0g(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.R;ER(b,a.tG);Ca(b,1);c=a.fp;d=c.v.a;e=c.u.b/2|0;f=0;while(true){g=a.lX.data;if(f>=g.length)break;h=a.xr.data[f];c=g[f];i=XO(c);j=a.fp;k=j.v;l=k.a;m=k.b;Mw(b,l,m+h|0,j.u,d+i,((m+e|0)+h|0)+i,c,a.m7);f=f+1|0;}if(A_b){c=A7o(1,2);n=0;while(n<1000){h=Ea(c,a.lX.data.length);l=Ea(c,a.pi.b-a.fp.u.b|0);j=a.lX.data[h];i=j.bt;i=i-(i|0)>=0.25?0.0:0.5;k=a.fp;Mw(b,k.v.a,l,k.u,d+i,(e+l|0)+i,j,a.m7);n=n+1|0;}}Ca(b,0);}
function AUp(a,b){return A_b;}
function P7(){var a=this;Ev.call(a);a.vX=null;a.fX=null;}
function AJJ(){var b;b=I(Mr,[NH(1,3,4,5,1),NH(5,6,10,2,2),NH(12,2,13,3,3),NH(15,3,17,2,4)]);return A8p(P(GG,0),P(GG,0),b);}
function AZy(a){var b,c,d,e;b=AMa(a.q);a.fX=b;OB(b,a.vX);c=a.fX.dI;BF(c);d=new AB7;d.rA=c;b=P6(C(283),4,d);d=a.fX.dG;BF(d);e=new AB8;e.t2=d;c=P6(C(283),4,e);D3(a.fX.dI,b);D3(a.fX.dG,c);ABR(a.fX,AJJ());return a.fX;}
function ZB(){var a=this;Ev.call(a);a.lP=null;a.wz=null;}
function A1V(a){var b,c,d,e;b=Uy(a.q);a.lP=b;BF(b);c=new T6;c.tC=b;b=P6(C(283),4,c);d=Bj();e=O9(b);c=new J;L(c);V(H(c,C(284)),e);Bf(d,K(c));D3(a.lP,b);Kr(a.lP,a.wz);b=a.lP;return JZ(b,GW(b,a.q));}
function A3i(a,b){var c;c=a.q.bT;EB(b,BK(c.a/30|0,c.b/10|0),BK((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function Sn(){CB.call(this);this.nq=null;}
function AZg(a,b,c){if(b===0.0)ACP(a);}
function ACP(a){AD4(new L4,a.y,a.nq,new AD5);}
function Ku(){var a=this;B.call(a);a.CK=null;a.ep=null;a.vp=null;a.D$=null;a.to=null;a.li=null;a.rT=null;a.w9=null;a.l3=null;a.lY=null;a.gF=null;}
function A_c(a,b,c,d,e,f,g,h,i,j,k){var l=new Ku();MQ(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function MQ(a,b,c,d,e,f,g,h,i,j,k,l){a.CK=b;a.ep=c;a.vp=d;a.D$=e;a.to=f;a.li=g;a.rT=h;a.w9=i;a.l3=j;a.lY=k;a.gF=l;}
function AGL(){B.call(this);this.FS=null;}
function AKP(a){var b=new AGL();AW_(b,a);return b;}
function AW_(a,b){a.FS=b;}
var AFJ=G(0);
function AJe(){var a=this;B.call(a);a.pq=null;a.lq=null;a.yq=null;a.qW=null;}
function ALC(a,b,c,d){var e=new AJe();A5R(e,a,b,c,d);return e;}
function A5R(a,b,c,d,e){a.pq=b;a.lq=c;a.yq=d;a.qW=e;}
var AHb=G(0);
function Fp(){var b,c,d;b=new Jg;c=new Jn;A1B();d=A_d;O1(c,d,A_e,A_f,A_g,A_h,d);Mb(b,c,AIA(),AIK(S(C(285)),S(C(244)),S(C(245))),AIA(),AI9(1,0.125),A_i,A_j);return b;}
function AIA(){var b,c;b=new KF;c=S(C(286));A1B();Lq(b,c,A_k,A_l);return b;}
function AId(){var b,c;b=new KF;c=S(C(245));AXk();Lq(b,c,A_m,A_n);return b;}
function AMn(){var b,c;b=new KF;AH7();c=A_o;AXw();Lq(b,c,A_p,A_q);return b;}
function AIW(){var a=this;B.call(a);a.Aa=null;a.xh=null;a.vz=null;a.q6=null;}
function AFl(a,b,c,d){var e=new AIW();AXN(e,a,b,c,d);return e;}
function AXN(a,b,c,d,e){a.Aa=b;a.xh=c;a.vz=d;a.q6=e;}
function AE_(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.ed.xh;break a;case 3:if(c!=3){b=b.ed.q6;break a;}b=b.ed.vz;break a;default:b=b.bv.ep;break a;}b=b.ed.Aa;}return b;}
function Kj(a,b,c){return AE_(a,b,0,c);}
function MW(){var a=this;B.call(a);a.mh=null;a.kK=null;}
function W4(a,b){var c;c=a.kK;a.kK=b;return c;}
function K1(){var a=this;MW.call(a);a.bZ=null;a.b9=null;a.gZ=0;a.g8=0;}
function Np(a){var b;b=LM(a);if(b==2){if(LM(a.b9)<0)a.b9=PD(a.b9);return QG(a);}if(b!=(-2))return a;if(LM(a.bZ)>0)a.bZ=QG(a.bZ);return PD(a);}
function LM(a){var b,c;b=a.b9;c=b===null?0:b.gZ;b=a.bZ;return c-(b===null?0:b.gZ)|0;}
function PD(a){var b;b=a.bZ;a.bZ=b.b9;b.b9=a;E8(a);E8(b);return b;}
function QG(a){var b;b=a.b9;a.b9=b.bZ;b.bZ=a;E8(a);E8(b);return b;}
function E8(a){var b,c,d;b=a.b9;c=b===null?0:b.gZ;b=a.bZ;d=b===null?0:b.gZ;a.gZ=Bd(c,d)+1|0;a.g8=1;b=a.bZ;if(b!==null)a.g8=1+b.g8|0;b=a.b9;if(b!==null)a.g8=a.g8+b.g8|0;}
var AMq=G();
function AOa(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Y3;c=c.buffer;d.gw=c;d.qJ=new $rt_globals.Int8Array(c);d.mX=new $rt_globals.Uint16Array(c);d.Bd=new $rt_globals.Int32Array(c);d.sQ=new $rt_globals.Float32Array(c);d.s$=new $rt_globals.Float64Array(c);e=d.gw.byteLength;c=new J;L(c);V(H(c,C(287)),e);CY(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(288)),e);CY(K(c));f=b.callToCpp2();c=new J;L(c);De(H(c,C(289)),f);CY(K(c));c=Pp(d,b.getC8String());g=new J;L(g);H(H(g,C(290)),c);CY(K(g));c
=Xq(d,b.getC16String());g=new J;L(g);H(H(g,C(291)),c);CY(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gw,h,8));c=AHB(i);g=new J;L(g);H(H(g,C(292)),c);CY(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gw,h,8));c=AUw(j);g=new J;L(g);H(H(g,C(293)),c);CY(K(g));k=AKn(d,b.getCDoubleArray8(),8);l=AWD(k);c=new J;L(c);H(H(c,C(294)),l);CY(Ek(c));l=AWz(b.getC8String(),C(295),d);c=Ms();H(H(c,C(296)),l);CY(Ek(c));l=ASb(b.getC16String(),C(297),
d);c=Ms();H(H(c,C(298)),l);CY(Ek(c));c=A2K(i,d,b.getCIntArray8(),D4([11,22,33,44,55,66,77,88]));g=Ms();H(H(g,C(299)),c);CY(Ek(g));c=AUI(j,d,b.getCFloatArray8(),100,D4([111,222,333,444,555,666,777,888]));g=Ms();H(H(g,C(300)),c);CY(Ek(g));b=A39(k,d,b.getCDoubleArray8(),1000,D4([1111,2222,3333,4444,5555,6666,7777,8888]));c=Ms();H(H(c,C(301)),b);CY(Ek(c));}
function AUI(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(302);h=0;i=e;a:{while(h<g){if(C4(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sQ[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(303);}return C(304);}
function A39(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(302);h=0;i=e;a:{while(h<g){if(GV(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.s$[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(303);}return C(304);}
function A2K(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(302);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Bd[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(303);}return C(304);}
function AWz(b,c,d){var e,f,g,h;e=Pp(d,b);if(!Bk(c,e))return C(305);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.qJ[h])return C(306);f=f+1|0;}return C(303);}
function ASb(b,c,d){var e,f,g,h;e=Xq(d,b);if(!Bk(c,e))return C(305);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.mX[h>>>1|0]&65535))return C(306);f=f+1|0;}return C(303);}
function CY(b){Y1(C(2),b);}
function ARf(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Zi(){B.call(this);this.sa=null;}
function AX7(a,b){return AKo(a.sa,b);}
function Zg(){B.call(this);this.Cg=null;}
function AZO(a,b){AKD(a.Cg,b);}
function Zh(){B.call(this);this.yE=null;}
function AU3(a,b){b=b;return AFH(a.yE,b);}
function AIR(){KE.call(this);this.dE=null;}
function K9(){var a=new AIR();A5m(a);return a;}
function Io(a,b,c,d){var e=new AIR();A0O(e,a,b,c,d);return e;}
function A5m(a){AC7(a);a.dE=new B4;}
function A0O(a,b,c,d,e){AC7(a);a.dE=new B4;Ht(a,b,c,d,e);}
function F$(a){var b,c;b=a.u;c=a.dE;Y(b,c.bg-c.bp|0,c.bA-c.bt|0);}
function F1(a,b){IR(a,0,0,BU(b),CR(b));}
function IR(a,b,c,d,e){Ct(a.dE,b,c,d,e);}
function EN(a,b,c,d,e){var f;f=a.v;DP(b,f.a+d|0,f.b+e|0,a.u,a.dE,c,a.ba,a.bq,0);}
function Ts(a,b,c,d){var e;e=a.v;DP(b,e.a,e.b,a.u,a.dE,c,a.ba,a.bq,d);}
function IP(a,b,c,d,e,f,g){DP(b,c,d,a.u,a.dE,e,!f?a.ba:a.bq,!f?a.bq:a.ba,g);}
function HN(a,b){BO(a.ba,b);}
function Ft(a,b){BO(a.bq,b);}
function Ux(){B.call(this);this.fE=null;}
function AYl(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fE.hG;f=e.u;d=d-f.a|0;g=c.b-f.b|0;Y(e.v,d,g);c=a.fE;e=c.C.bG;b=b.j;d=0;a:{while(true){h=c.jf.data;if(d>=h.length)break;if(Fl(h[d],b)){b=c.qU.data[d];break a;}d=d+1|0;}b=null;}AAE(e,b);return 1;}
function AM6(a,b,c,d){if(!c&&d==2){b=a.fE;S5(b,b.er);}return 1;}
function AYe(a,b,c){var d,e;d=Bj();e=new J;L(e);V(H(e,C(307)),c);Bf(d,K(e));if(c)return null;d=b.j;e=!Fl(a.fE.er,d)?null:d;UT(a.fE.jQ,d.a,d.b);b=a.fE;Zp(b.jQ,Nf(b.C.bG));if(e===null)b=A$x;else{b=new ADh;b.tj=a;b.tk=e;}return b;}
function AXE(a,b,c){var d;b=Bj();d=new J;L(d);V(H(d,C(308)),c);Bf(b,K(d));return 1;}
function ZJ(){B.call(this);this.CW=null;}
function A4w(a,b){return XL(a.CW,b);}
function ZI(){B.call(this);this.sO=null;}
function A2O(a,b){return XL(a.sO,b);}
function ZH(){B.call(this);this.En=null;}
function A0Y(a,b,c){var d,e;Bf(Bj(),C(309));d=!c?C(310):C(54);e=new J;L(e);H(H(H(e,C(311)),d),C(312));ADN(b,K(e));return 1;}
function ZG(){B.call(this);this.E2=null;}
function AXa(a){Bf(Bj(),C(313));}
function ZF(){B.call(this);this.Ft=null;}
function ATa(a,b){Bf(Bj(),C(314));return 1;}
function ZE(){B.call(this);this.BF=null;}
function A4C(a,b,c,d){var e,f,g;b=a.BF;e=( -d|0)/10|0;b=b.er;f=b.u;f.a=f.a+e|0;f.b=f.b+e|0;b=b.v;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hy(){var a=this;B4.call(a);a.hz=0;a.hC=0;a.hA=0;a.hB=0;}
function Cx(a){var b=new Hy();AWo(b,a);return b;}
function DD(a,b,c){var d=new Hy();AY_(d,a,b,c);return d;}
function S(a){var b=new Hy();A3V(b,a);return b;}
function E6(a,b,c,d){var e=new Hy();R7(e,a,b,c,d);return e;}
function B0(a){var b=new Hy();Le(b,a);return b;}
function AWo(a,b){R7(a,b,b,b,255);}
function AY_(a,b,c,d){R7(a,b,c,d,255);}
function A3V(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hz=KI(Q(b,1))*17|0;a.hC=KI(Q(b,2))*17|0;a.hA=KI(Q(b,3))*17|0;a.hB=255;}else{a.hz=L_(Q(b,1),Q(b,2));a.hC=L_(Q(b,3),Q(b,4));a.hA=L_(Q(b,5),Q(b,6));a.hB=M(b)!=9?255:L_(Q(b,7),Q(b,8));}IW(a.hz,a.hC,a.hA,a.hB,a);return;}}
function R7(a,b,c,d,e){a.hz=b;a.hC=c;a.hA=d;a.hB=e;IW(b,c,d,e,a);}
function Le(a,b){a.hz=b.hz;a.hC=b.hC;a.hA=b.hA;a.hB=b.hB;BO(a,b);}
function KI(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function L_(b,c){return (16*KI(b)|0)+KI(c)|0;}
var AHP=G(0);
function Fb(b){return !b?I(BB,[C(156),C(167),C(315)]):I(BB,[C(156),C(167),C(315),C(34)]);}
function Xh(){B.call(this);this.mv=null;}
function APA(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mv.ds;e=DV();f=e-0.5+(DV()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DV()*0.3;h=0.5+DV()*0.5;IM(e,g,h,1.0,b.ba);IM(f,g,h,1.0,b.bq);b=a.mv;BO(b.d5.ba,b.ds.ba);b=a.mv;BO(b.d5.bq,b.ds.bq);}return 1;}
function Xe(){var a=this;B.call(a);a.oa=null;a.oD=null;}
function AHc(){var a=this;B.call(a);a.ge=null;a.cv=null;a.g6=null;a.h7=null;a.oi=null;a.cO=null;a.hU=null;a.c8=0;a.gh=0;a.oA=0;a.kG=0;a.kW=0;a.h1=0;a.lb=null;a.pw=null;a.xp=null;a.n8=null;}
function AKU(){var a=new AHc();AUR(a);return a;}
function AUR(a){a.cv=S4();a.g6=new Bh;a.h7=new Bh;a.cO=A_r;a.kG=(-1);a.kW=1;}
function NI(a,b){Ou(a);a.cO=b;}
function JY(a,b,c){a.ge=b;ADH(a,c);Ou(a);}
function J0(a,b){var c;a.oi=b.lQ;c=b.pz.qd;BO(a.cv.ba,c);c=b.ju.jX;BO(a.cv.bq,c);a.n8=b.pz;}
function Ne(a){a.hU=BY(a.hU,null);Y(a.g6,0,0);a.cO=A_r;a.kG=(-1);AB5(a.cv);}
function ADH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KC(b);d=b.ci;BF(a.ge);Cq(c,a.ge);e=NC(a.ge,1.25);f=0;a.c8=Ci(2.0,d);a.gh=Ci(3.0,d);a.oA=Ci(12.0,d);g=0;h=a.cO.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Lx(c,l.nX);n=a.oA;n=(n+m|0)+n|0;f=Bd(f,n);b=l.ft;b.a=g;b.b=0;b=l.eD;b.a=n;b.b=e;Ct(l.kC,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.g6;b.a=g;b.b=e;b=a.cv.u;n=a.h1;if(!n){m=a.c8;m=(g+m|0)+Bc(m,a.cO.data.length)|0;}else m=(f+(a.c8*2|0)|0)+(a.gh*2|0)|0;b.a=m;if(!n)e=e+(a.c8*2|0)|0;else{n=a.c8;e=(Bc(e+n|0,a.cO.data.length)+n
|0)+(a.gh*2|0)|0;}b.b=e;}
function ND(a,b,c){var d,e,f,g,h,i,j;Y(a.cv.v,b,c);d=a.c8+a.gh|0;e=a.cO.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.ft;j.a=b+d|0;j.b=c+h|0;if(!a.h1){if(!i.eD.a)AFw();d=d+(i.eD.a+a.c8|0)|0;}else{if(!i.eD.b)AFw();h=h+(i.eD.b+a.c8|0)|0;}g=g+1|0;}}
function AFw(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EJ(a){var b,c;b=a.g6;if(b.a&&b.b)return a.cv.u;c=new Bt;Bp(c,C(316));N(c);}
function Ou(a){a.kW=1;}
function My(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bL;if(!a.cO.data.length)return;if(a.hU===null)a.hU=C1(c);a:{if(!a.kW){d=a.g6;if(Bc(d.a,d.b))break a;}d=a.g6;if(!Bc(d.a,d.b))ADH(a,b);d=a.g6;e=d.a;f=d.b;if(!Bc(e,f))return;d=D_(c,e,f,b.cJ);Cq(d,a.ge);g=NC(a.ge,0.125);h=a.ge;i=h.ev;g=g+i-(i+h.eO)/16.0;j=a.cO.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.nX,h.kC.bp+a.oA,g);f=f+1|0;}CP(a.hU,d);a.kW=0;EI(d);}if(!Lv(a.cv)){d=a.cv;AJ9(c,d.u,d.v,d.bq,a.c8,a.h7);d=a.cv;h=d.u;k=d.v;d=d.ba;e=a.c8;l=a.h7;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;Bv(c,k.a+e|0,k.b+e|0,l,d);if(a.h1){d=a.cv;ALs(c,d.u,d.v,0,0,Y5(a.oi,b.ci),a.oi.om,a.h7);}}j=a.cO.data;m=j.length;n=0;while(n<m){d=j[n];h=d.ft;e=h.a;f=h.b;h=d.eD;k=d.kC;l=a.hU;o=a.n8;DP(c,e,f,h,k,l,o.se,V4(o,d.ls),b.cJ);n=n+1|0;}b:{if(a.h1){j=a.cO.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.h7;e=(a.cv.u.a-(a.c8*2|0)|0)-(a.gh*2|0)|0;h=d.eD;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.ft;Bv(c,k.a+h.a|0,k.b,b,V4(a.n8,d.ls));}p=p+1|0;}}}}
function Oa(a,b,c){var d,e,f,g,h,i;d=Fl(a.cv,b);e=!d?(-1):PT(a,b);f=a.kG;if(f!=e){if(f>=0){g=a.cO.data[f];g.ls=0;if(a.xp!==null){h=Bj();g=BT(g);i=new J;L(i);H(H(V(H(i,C(317)),f),C(318)),g);Bf(h,K(i));}}if(e>=0){h=a.cO.data[e];g=a.pw;if(g!==null)g.xu(b,e,h);h.ls=1;}a.kG=e;}return d&&GX(c)?1:0;}
function Ox(a,b,c,d){var e,f;e=PT(a,b);if(e>=0){f=a.cO.data[e];if(!AC$(f))f.nc.e();}return 1;}
function PT(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cO.data;if(c>=d.length)return (-1);e=d[c];if(Gx(b,e.ft,e.eD))return c;if(a.h1){f=e.ft;g=f.a;e=e.eD;h=e.a;g=g+h|0;i=f.b;f=a.h7;f.a=(a.cv.u.a-(a.c8*2|0)|0)-h|0;f.b=e.b;if(AFP(b,g,i,f))break;}c=c+1|0;}return c;}
function AE9(a){a.h1=1;}
function AJ$(){var a=this;B.call(a);a.im=null;a.ha=0.0;a.kn=0;a.kE=0;}
function DA(a,b){var c=new AJ$();ATq(c,a,b);return c;}
function ATq(a,b,c){a.im=b;a.ha=c;a.kn=400;a.kE=700;}
function A3O(a,b){if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){b=b;return a.ha===b.ha&&a.kn==b.kn&&a.kE==b.kE&&BR(a.im,b.im)?1:0;}return 0;}
function ACB(){B.call(this);this.vl=null;}
function ASO(a,b){var c;c=a.vl;if(b.bj==32)Ne(c.dP);return 0;}
function ACx(){B.call(this);this.wi=null;}
function AUK(a,b){var c,d,e,f;b=b;c=a.wi;d=ZU(c.q);HA(d,Fp(),c.oX);b=b.j;e=Si(4);f=new Vu;f.Eo=c;MY(d,b,e,f);HQ(c.y,d);return 1;}
var ACy=G();
function A6c(a){Bf(Bj(),C(319));}
var ACz=G();
function ANR(a){Bf(Bj(),C(320));}
function BC(){var a=this;B.call(a);a.nc=null;a.kC=null;a.ft=null;a.eD=null;a.nx=null;a.uq=null;a.ls=0;a.nX=null;}
function XX(a,b){var c=new BC();Cl(c,a,b);return c;}
function A8a(a,b,c,d){var e=new BC();AKx(e,a,b,c,d);return e;}
function Cl(a,b,c){AKx(a,b,c,null,null);}
function AKx(a,b,c,d,e){a.kC=new B4;a.ft=new Bh;a.eD=new Bh;a.nX=c;a.uq=e;a.nc=b;a.nx=d;}
function AC$(a){return a.nx===null?0:1;}
function U_(){B.call(this);this.Do=null;}
function A0S(a,b){return b.j7&&b.bj==32?1:0;}
function Va(){B.call(this);this.BZ=null;}
function ANv(a,b){var c,d,e,f,g,h;b=b;c=a.BZ;d=ZU(c.q);HA(d,Fp(),DA(C(156),25.0));b=b.j;e=P(BC,1);f=e.data;g=new BC;h=new AE0;h.Cf=c;Cl(g,h,C(321));f[0]=g;MY(d,b,CO(e),A_s);HQ(c.y,d);return 1;}
function AIx(){var a=this;B.call(a);a.qn=0;a.qp=0;}
function VE(){var a=new AIx();AVD(a);return a;}
function A7o(a,b){var c=new AIx();AMx(c,a,b);return c;}
function AVD(a){AMx(a,AMd(G5((AHM()))),G5((AHM()))^(-559038737));}
function AMx(a,b,c){var d;a.qn=b;a.qp=c;d=0;while(d<19){NV(a);d=d+1|0;}}
function NV(a){var b,c;b=a.qn;c=a.qp;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.qn=c;a.qp=b;return b;}
function AMd(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function ALM(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Ea(a,b){return VG(a)*b|0;}
function VG(a){return 5.960464477539063E-8*(NV(a)&16777215);}
function Rs(a,b){var c,d,e;c=ALM(NV(a));d=AUC( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function Pt(){B.call(this);this.yI=null;}
function AST(a,b,c){var d;d=a.yI;if(b===0.0)Ml(d,100);}
function Ps(){B.call(this);this.ws=null;}
function A2h(a,b){var c,d,e;c=a.ws;d=b.bj;if(d==32){c.l0=c.l0?0:1;e=1;}else if(d==13){Ml(c,1);e=1;}else if(d!=8)e=0;else{P5(c,1);e=1;}return e;}
var AAz=G(0);
function AJf(b,c){var d;d=new Vz;d.yw=b;d.yv=c;return d;}
function AJl(){var a=this;B.call(a);a.hP=null;a.io=0;a.l$=0;a.hu=0;}
function AJy(a){var b=new AJl();APK(b,a);return b;}
function APK(a,b){a.hP=BN();a.hu=0;a.l$=2048;a.io=b;}
function KM(a,b,c){var d,e,f,g,h,i;d=c.z$(b);e=a.l$;if(d>e){c=new Bt;f=new J;L(f);Br(V(H(V(H(f,C(322)),d),C(323)),e),41);Bp(c,K(f));N(c);}if(!a.io){b=new BX;Bp(b,C(324));N(b);}a:{b=new B4;if(d){b:{c=a.hP;if(c.p>0){c=B9(c);g=d;while(true){if(!Cb(c))break b;f=Cc(c);if(f.bg>=g)break;}Ct(b,f.bp,f.bt,g,a.io);f.bp=f.bp+g;h=f.bg-g;f.bg=h;if(h===0.0)AIa(a.hP,f);break a;}}g=a.hu;i=d;Ct(b,0.0,g,i,a.io);Bz(a.hP,AEO(i,a.hu,a.l$-d|0,a.io));a.hu=a.hu+a.io|0;}}return b;}
function Ji(a,b){var c,d,e,f,g,h,i;a:{c=AMv(b);b=a.hP;if(b.p>0){d=B9(b);while(true){if(!Cb(d))break a;e=Cc(d);if(e.bt===c.bt){f=e.bp;g=e.bg;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bg=c.bg+g;AAg(d);}else{h=c.bg;if(i+h===f){c.bg=h+g;AAg(d);}}}}}}Bz(a.hP,c);}
function M8(a){return BK(a.l$,a.hu);}
function Xs(){var a=this;B.call(a);a.sd=null;a.l4=null;}
function AXn(a,b,c){if(c)return A$x;return Ge(a.l4.jg,b.j,a.sd,1);}
function ANq(a,b,c){return 1;}
function AZs(a,b){var c;c=a.l4;return Gl(c.jg,b.j,c.yp);}
function AAU(){B.call(this);this.Bw=null;}
function ASR(a,b,c,d){var e,f;b=a.Bw;e=(W8(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fc=Be(Bd(0,b.fc+Bc(e,f)|0),Vw(b));return 1;}
function Re(){B.call(this);this.tA=null;}
function ASG(a,b){var c,d,e;c=a.tA;if(b.cU&&b.bj==79){if(!b.bQ){b=c.C.bG;d=new XT;d.vI=c;GQ(b,d);}else{b=c.C.bG;d=new XS;d.x7=c;Go(b,d);}e=1;}else e=0;return e;}
function R9(){B.call(this);this.yL=null;}
function AWy(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.yL;d=c.y;e=Fp();f=DA(C(156),25.0);g=b.j;h=P(BC,5);i=h.data;b=new BC;j=new UH;j.rY=c;Cl(b,j,C(325));i[0]=b;b=new BC;j=new UI;j.sI=c;Cl(b,j,C(326));i[1]=b;b=new BC;j=new UJ;j.uj=c;Cl(b,j,C(327));i[2]=b;b=new BC;j=new UK;j.yf=c;Cl(b,j,C(328));i[3]=b;b=new BC;k=new UL;k.yK=c;Cl(b,k,C(329));i[4]=b;Gp(d,e,f,g,CO(h));return 1;}
function R8(){B.call(this);this.A2=null;}
function A3s(a,b){var c,d,e;c=a.A2.C.bG;d=new Yv;e=P(B,1);e.data[0]=b;CL(c,d,C(330),e);}
function ACL(){B.call(this);this.nk=null;}
function A2B(a,b){var c,d,e,f,g,h;c=a.nk;d=c.qO;if(d!==null){e=c.fa.v;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qO=g;}b=b.j;f=b.a;c=c.gT;d=c.u;f=f-d.a|0;h=b.b-d.b|0;Y(c.v,f,h);return 1;}
function AWm(a,b,c){var d;if(!c){d=b.j;b=a.nk;if(!Fl(b.fa,d))d=null;b.qO=d;}return A$x;}
var AHk=G();
function AMC(b){var c,d;c=HW(b,250,64);HH(c,C(247),25.0);Ko(c,187,187,187);B1(c,C(331),0.0,24.0);B1(c,C(331),0.25,56.0);d=C1(b);CP(d,c);EI(c);return d;}
var Dk=G(0);
var A$J=null;var A$$=null;var A$K=null;var A$q=null;var A$M=null;var A$L=null;var A$O=null;var A$N=null;var A$Q=null;var A$P=null;var A$R=null;function FV(){FV=Bm(Dk);AWA();}
function AWA(){A$J=Cx(187);A$$=S(C(332));A$K=Cx(55);A$q=Cx(43);A$M=DD(33,66,131);A$L=DD(60,63,65);A$O=S(C(333));A$N=S(C(334));A$Q=E6(85,85,85,128);A$P=E6(43,43,43,0);A$R=S(C(233));}
function Zj(){var a=this;B.call(a);a.rd=null;a.mg=null;}
function AQT(a,b,c){var d;if(!c){d=Ge(a.mg.iR,b.j,a.rd,1);if(d!==null)return d;}return A$x;}
function AXB(a,b,c){return 1;}
function APF(a,b){var c;c=a.mg;return Gl(c.iR,b.j,R2(c.C.bG));}
function WI(){B.call(this);this.rW=null;}
function A4z(a,b,c,d){var e,f;b=a.rW;e=(W8(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fQ=Be(Bd(0,b.fQ+Bc(e,f)|0),AAV(b));return 1;}
function AEd(){B.call(this);this.xo=null;}
function AOQ(a,b){var c,d;a:{c=a.xo;switch(b.bj){case 67:Q1(c);d=1;break a;case 86:AAB(c);d=1;break a;default:}d=0;}return d;}
var AEc=G();
function A05(a,b,c){return 0;}
function AEb(){B.call(this);this.s2=null;}
function AOZ(a,b,c){var d,e;d=a.s2;c=d.ek+1|0;d.ek=c;d=J$(F(KH));e=new J;L(e);H(H(V(e,c),C(335)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));ADN(b,e);return 1;}
var AEa=G();
function AR6(a){return null;}
function AEe(){B.call(this);this.AJ=null;}
function A35(a){var b,c;b=a.AJ;c=new Wr;c.q_=b;return c;}
function SN(){B.call(this);this.EG=null;}
function AVZ(a,b){return 0;}
function PV(){B.call(this);this.z4=null;}
function ANj(a,b){var c;c=a.z4;if(b.j7&&b.bj==27){b=OR(c.y);if(b!==null){b=b.dn;if(b===null){b=new Gd;X(b);N(b);}b.jn.e();}}return 0;}
function PX(){B.call(this);this.wq=null;}
function A0b(a,b){var c,d,e,f,g,h,i;b=b;c=a.wq;d=ZU(c.q);HA(d,Fp(),DA(C(156),25.0));b=b.j;e=P(BC,1);f=e.data;g=new BC;h=c.y;i=new Yj;i.zA=c;Cl(g,EH(h,i),C(336));f[0]=g;MY(d,b,CO(e),A_s);HQ(c.y,d);return 1;}
function PY(){B.call(this);this.Ca=null;}
function A2z(a,b){var c,d,e;c=a.Ca;d=c.gn;if(d!==null){e=new ABK;e.CP=c;e.CQ=b;GZ(d,b,e);}}
function PZ(){B.call(this);this.z1=null;}
function A4p(a,b){var c,d,e;b=b;c=a.z1;if(Dz(c.q,c.gn)){d=c.mu;b=b.j;e=c.gn;IZ(d,b,e,c,e,c,new XJ);}return 1;}
function Rg(){B.call(this);this.B2=null;}
function ATy(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.B2;d=c.y;e=c.pv;f=e.cw;g=e.gy;h=b.j;i=P(BC,4);j=i.data;b=new BC;e=new X2;e.sp=c;Cl(b,EH(d,e),C(337));j[0]=b;k=new BC;b=c.y;e=new X0;e.rN=c;Cl(k,EH(b,e),C(338));j[1]=k;b=new BC;e=c.y;k=new XZ;k.uF=c;Cl(b,EH(e,k),C(339));j[2]=b;b=new BC;e=c.y;k=new X1;k.zR=c;Cl(b,EH(e,k),C(340));j[3]=b;Gp(d,f,g,h,CO(i));return 1;}
function Rf(){B.call(this);this.DX=null;}
function AWb(a,b){return b.bj!=32?0:1;}
function ABT(){B.call(this);this.rh=null;}
function ATM(a,b){var c,d,e,f,g,h;b=b;c=a.rh;d=P(BC,3);e=d.data;f=new BC;g=c.y;h=new Z_;h.Bc=c;Cl(f,EH(g,h),C(341));e[0]=f;g=new BC;f=c.y;h=new Z$;h.so=c;Cl(g,EH(f,h),C(342));e[1]=g;f=new BC;h=c.y;g=new AAa;g.wM=c;Cl(f,EH(h,g),C(343));e[2]=f;f=CO(d);h=c.y;c=c.iy;Gp(h,c.cw,c.gy,b.j,f);return 1;}
var AIj=G(0);
function ALS(b){Ic(b,A7I(C(344),C(192),AC5(C(345))));}
function Rn(){B.call(this);this.Gd=null;}
function ARm(a,b){return 0;}
function Ve(){B.call(this);this.Dl=null;}
function ATN(a,b){return 1;}
function Vd(){B.call(this);this.uD=null;}
function AS_(a,b){var c,d;c=a.uD;if(b.bj!=32)d=0;else{ABR(c.fX,AJJ());d=1;}return d;}
function Yl(){B.call(this);this.yV=null;}
function APi(a,b){var c,d,e,f,g,h;b=b;c=a.yV;d=P(BC,1);e=d.data;f=new BC;g=c.y;h=new Sw;h.yn=c;Cl(f,EH(g,h),C(343));e[0]=f;f=CO(d);g=c.y;c=c.nq;Gp(g,c.cw,c.gy,b.j,f);return 1;}
var Dq=G(0);
var A$S=null;var A_t=null;var A$U=null;var A$T=null;var A$W=null;var A$V=null;var A$Y=null;var A$X=null;var A$0=null;var A$Z=null;var A$1=null;function APM(){APM=Bm(Dq);AU2();}
function AU2(){A$S=Cx(206);A_t=S(C(346));A$U=S(C(347));A$T=S(C(240));A$W=S(C(348));A$V=S(C(229));A$Y=S(C(349));A$X=S(C(350));A$0=E6(107,106,107,128);A$Z=E6(30,31,34,0);A$1=S(C(242));}
function Cs(){CD.call(this);this.lt=null;}
var A_u=null;var A_v=null;var A_w=null;var A_x=null;var A_y=null;var A$z=null;var A_z=null;var A_A=null;var A_B=null;var A_C=null;var A_D=null;var A_E=null;var A_F=null;var A_G=null;var A_H=null;var A_I=null;function UG(){UG=Bm(Cs);A1a();}
function D1(a,b,c){var d=new Cs();AAO(d,a,b,c);return d;}
function A72(a,b,c,d){var e=new Cs();AEn(e,a,b,c,d);return e;}
function AGK(){UG();return A_I.dZ();}
function AAO(a,b,c,d){UG();Dt(a,b,c);a.lt=J3(d,null);}
function AEn(a,b,c,d,e){UG();Dt(a,b,c);a.lt=J3(d,e);}
function A1a(){var b,c;b=new Cs;APM();AAO(b,C(351),0,A_t);A_u=b;A_v=D1(C(352),1,S(C(353)));A_w=D1(C(354),2,S(C(355)));A_x=D1(C(356),3,S(C(357)));A_y=D1(C(358),4,A_t);A$z=D1(C(359),5,S(C(360)));A_z=D1(C(361),6,S(C(362)));A_A=D1(C(363),7,S(C(364)));A_B=D1(C(365),8,S(C(366)));c=new Cs;FV();AEn(c,C(367),9,A$$,S(C(349)));A_C=c;A_D=A72(C(368),10,A$$,S(C(243)));A_E=D1(C(369),11,S(C(370)));A_F=D1(C(371),12,S(C(372)));A_G=D1(C(373),13,A_t);b=D1(C(374),14,S(C(375)));A_H=b;A_I=I(Cs,[A_u,A_v,A_w,A_x,A_y,A$z,A_z,A_A,A_B,
A_C,A_D,A_E,A_F,A_G,b]);}
function KJ(){var a=this;B.call(a);a.hh=null;a.m8=null;}
function J3(a,b){var c=new KJ();A1E(c,a,b);return c;}
function A1E(a,b,c){a.hh=b;a.m8=c;}
function Jg(){var a=this;B.call(a);a.lQ=null;a.tY=null;a.o4=null;a.E5=3;a.ju=null;a.Cq=null;a.Gg=null;a.pz=null;a.nh=null;a.pd=null;}
function A_J(a,b,c,d,e,f,g){var h=new Jg();Mb(h,a,b,c,d,e,f,g);return h;}
function Mb(a,b,c,d,e,f,g,h){a.tY=DA(C(167),16.0);a.o4=DA(C(14),16.0);a.E5=3;a.Cq=b;a.Gg=c;a.ju=d;a.pz=e;a.lQ=f;a.nh=g;a.pd=h;}
function AK4(){var a=this;B.call(a);a.om=null;a.tT=0;}
function AI9(a,b){var c=new AK4();A3T(c,a,b);return c;}
function A3T(a,b,c){var d;d=new B4;a.om=d;a.tT=b;d.bA=c;}
function Y5(a,b){return Ci(a.tT,b);}
var DU=G(0);
var A$5=null;var A$6=null;var A$2=null;var A$3=null;var A$4=null;var A_m=null;var A_n=null;var A$7=null;var A$8=null;function AXk(){AXk=Bm(DU);A2E();}
function A2E(){A$5=S(C(229));A$6=S(C(376));A$2=S(C(245));A$3=S(C(362));A$4=S(C(346));A_m=S(C(229));A_n=S(C(377));A$7=S(C(378));A$8=DD(43,45,48);}
var YQ=G(0);
var Y2=G();
function AZS(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(379)),d),C(380)),e);CY(K(b));return d+e|0;}
var YR=G(0);
var Y0=G();
function A0C(a,b,c){var d,e;d=b;e=c;b=new J;L(b);De(H(De(H(b,C(381)),d),C(380)),e);CY(K(b));return d+e;}
var AF4=G();
var AJj=G(0);
function VX(){B.call(this);this.oI=null;}
var A_r=null;function TL(){var a=new VX();AJS(a);return a;}
function AJS(a){a.oI=BN();}
function Ey(a,b,c){Nt(a,Da(b,c));}
function Da(b,c){return XX(c,b);}
function If(a,b,c){LY(a,b,c,null);}
function LY(a,b,c,d){Nt(a,A8a(null,b,c,d));}
function Nt(a,b){Bz(a.oI,b);}
function Jd(a){return CO(GB(a.oI,A_r));}
function AJn(){A_r=P(BC,0);}
var DZ=G(0);
var A_g=null;var A_h=null;var A_d=null;var A_e=null;var A_f=null;var A_k=null;var A_l=null;var A_i=null;var A_j=null;function A1B(){A1B=Bm(DZ);A2i();}
function A2i(){A_g=S(C(238));A_h=S(C(382));A_d=S(C(286));A_e=S(C(383));A_f=S(C(332));A_k=S(C(238));A_l=S(C(382));A_i=E6(118,121,122,128);A_j=DD(63,66,68);}
var Ib=G(0);
var QB=G();
function A3h(a,b,c,d){var e;b=Bj();d=BT(d);e=new J;L(e);H(H(V(H(e,C(384)),c),C(318)),d);Bf(b,K(e));}
var QC=G();
function Uz(){B.call(this);this.AY=null;}
function A1_(a,b){var c;c=a.AY.l4;c.fc=F7(b,Vw(c));}
function Qf(){B.call(this);this.Eq=null;}
function APu(a,b){var c,d,e,f;c=b.data;b=Bj();d=BT(c[0]);e=new J;L(e);H(H(e,C(385)),d);Bf(b,K(e));b=Bj();f=c[1];d=new J;L(d);H(H(d,C(386)),f);Bf(b,K(d));}
function Qe(){B.call(this);this.Fp=null;}
function AN8(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(387)),e);Bf(d,K(f));g=EY(I5(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BL(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BL(c,C(37));Br(c,i[h]);h=h+1|0;}BL(c,C(38));c=K(c);}e=new J;L(e);H(H(H(H(e,C(388)),d),C(389)),c);Bf(b,K(e));}
function Qb(){B.call(this);this.Gs=null;}
function ANc(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(390)),e);Bf(d,K(f));g=YP(I5(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BL(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BL(c,C(37));V(c,i[h]);h=h+1|0;}BL(c,C(38));c=K(c);}e=new J;L(e);H(H(H(H(e,C(391)),d),C(392)),c);Bf(b,K(e));}
function P_(){B.call(this);this.Fz=null;}
function A5L(a,b){var c,d,e,f,g;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(393)),e);Bf(d,K(f));g=CT(I5(b,1));b=Bj();d=BT(c[1]);c=AHB(g);e=new J;L(e);H(H(H(H(e,C(170)),d),C(394)),c);Bf(b,K(e));}
var AI1=G();
function VA(){B.call(this);this.ua=null;}
function A0D(a,b){var c;c=a.ua.mg;c.fQ=F7(b,AAV(c));}
function ADa(){B.call(this);this.Er=null;}
function AQA(a,b){return 0;}
function ALZ(){var a=this;B.call(a);a.kL=null;a.pp=null;a.f4=null;a.F4=null;}
function AC5(a){var b=new ALZ();A3K(b,a);return b;}
function A3K(a,b){var c,d,e;c=null;d=null;e=null;a.kL=c;a.pp=d;a.f4=b;a.F4=e;}
function ADm(a){var b,c;b=a.f4;if(b===null)return C(21);c=AGG(b,C(395));return c==(-1)?a.f4:DB(a.f4,c+1|0);}
function AYP(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.kL,c.kL)&&BR(a.pp,c.pp)&&BR(a.f4,c.f4)?1:0;}return 0;}
function Jn(){var a=this;B.call(a);a.uW=null;a.rt=null;a.r5=null;a.Bq=null;a.th=null;a.lz=null;}
function A_K(a,b,c,d,e,f){var g=new Jn();O1(g,a,b,c,d,e,f);return g;}
function O1(a,b,c,d,e,f,g){a.uW=b;a.rt=c;a.r5=d;a.Bq=e;a.th=f;a.lz=g;}
function KF(){var a=this;B.call(a);a.se=null;a.qd=null;a.vv=null;}
function A_L(a,b,c){var d=new KF();Lq(d,a,b,c);return d;}
function Lq(a,b,c,d){a.se=b;a.qd=c;a.vv=d;}
function V4(a,b){return !b?a.qd:a.vv;}
function AJM(){var a=this;B.call(a);a.jX=null;a.mm=null;a.ox=null;}
function AIK(a,b,c){var d=new AJM();A4Q(d,a,b,c);return d;}
function A4Q(a,b,c,d){a.jX=b;a.mm=c;a.ox=d;}
function Cv(){CD.call(this);this.ok=null;}
var A_M=null;var A_N=null;var A_O=null;var A_P=null;var A_Q=null;var A_R=null;var A_S=null;var A_T=null;var A_U=null;var A_V=null;var A_W=null;var A_X=null;var A_Y=null;var A_Z=null;var A_0=null;var A_1=null;function AGf(){AGf=Bm(Cv);A0I();}
function Ei(a,b,c){var d=new Cv();ACf(d,a,b,c);return d;}
function A3W(a,b,c,d){var e=new Cv();AIk(e,a,b,c,d);return e;}
function AKV(){AGf();return A_1.dZ();}
function ACf(a,b,c,d){AGf();Dt(a,b,c);a.ok=J3(d,null);}
function AIk(a,b,c,d,e){AGf();Dt(a,b,c);a.ok=J3(d,e);}
function A0I(){var b;b=new Cv;FV();ACf(b,C(351),0,A$$);A_M=b;A_N=Ei(C(352),1,S(C(396)));A_O=Ei(C(354),2,S(C(397)));A_P=Ei(C(356),3,S(C(398)));A_Q=Ei(C(358),4,S(C(396)));A_R=Ei(C(359),5,DD(188,63,60));A_S=Ei(C(361),6,S(C(399)));A_T=Ei(C(363),7,S(C(400)));A_U=Ei(C(365),8,S(C(401)));A_V=A3W(C(367),9,A$$,DD(52,65,52));A_W=A3W(C(368),10,S(C(402)),S(C(403)));A_X=Ei(C(369),11,S(C(404)));A_Y=Ei(C(371),12,S(C(405)));A_Z=Ei(C(373),13,A$$);b=Ei(C(374),14,S(C(375)));A_0=b;A_1=I(Cv,[A_M,A_N,A_O,A_P,A_Q,A_R,A_S,A_T,A_U,A_V,
A_W,A_X,A_Y,A_Z,b]);}
var AMw=G();
function Ks(b,c){var d,e,f;if(c<=0)return C(21);d=B6(c);e=d.data;e[0]=ALN(Ea(b,52));f=1;while(f<c){e[f]=ALN(Ea(b,62));f=f+1|0;}return Gv(d);}
function ALN(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AGA=G();
function AMF(){var a=this;B.call(a);a.Ks=null;a.P3=null;a.JF=0;a.QA=0;}
var AFj=G(0);
function ALV(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BB,8);e=DR(8);f=B6(16);g=0;h=0;i=0;while(true){j=BP(i,b);if(j>0)break;k=j>=0?10:(c.bb(C3(i))).nd;if(k==10){d=AH1(EK(f,0,g),d,h);e=AC9(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=K3(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AH1(EK(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bb(C3(j))).nd==10){e=AC9(1,e,h);i=j;}else e=AC9(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new AAq;d=AF7(d,h);if(m.length!=h)e=OJ(e,h);c.kz=d;c.Ds=e;return c;}
function AJL(b){var c,d;c=M(b);BF(b);d=new P3;d.uQ=b;return ALV(c,d);}
var C7=G();
var ALl=G(C7);
var ALL=G(C7);
var AJ1=G(C7);
var AKa=G(C7);
var AL2=G(C7);
function V8(){B.call(this);this.sx=null;}
function ARd(a){var b;b=a.sx;Bf(Bj(),b);}
var HX=G(CD);
var A_2=null;var A$r=null;var A_3=null;function AHf(){AHf=Bm(HX);AZx();}
function A59(a,b){var c=new HX();AFV(c,a,b);return c;}
function AT$(){AHf();return A_3.dZ();}
function AFV(a,b,c){AHf();Dt(a,b,c);}
function AZx(){var b;A_2=A59(C(406),0);b=A59(C(407),1);A$r=b;A_3=I(HX,[A_2,b]);}
function P3(){B.call(this);this.uQ=null;}
function AXC(a,b){return P2(Q(a.uQ,b.br));}
function AAq(){var a=this;B.call(a);a.kz=null;a.Ds=null;}
var AJI=G();
function Ci(b,c){return C4(b*c);}
function GG(){var a=this;B.call(a);a.hl=0;a.n0=null;}
var AGq=G();
function Uc(){var a=this;B.call(a);a.rO=null;a.u1=null;a.Bu=null;}
var AJO=G(0);
function AIZ(b){if(b===null)return C(181);if(!DH(b,C(408))&&!DH(b,C(409))&&!DH(b,C(410))&&!DH(b,C(411))&&!DH(b,C(412))&&!DH(b,C(413))){if(DH(b,C(414)))return C(192);if(DH(b,C(415)))return C(208);if(DH(b,C(416)))return C(203);if(!DH(b,C(417))&&!DH(b,C(418)))return C(181);return C(419);}return C(209);}
function AJg(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kh(b)){case -1655966961:if(!Bk(b,C(203)))break a;c=4;break a;case 3401:if(!Bk(b,C(208)))break a;c=3;break a;case 98723:if(!Bk(b,C(209)))break a;c=2;break a;case 3213227:if(!Bk(b,C(419)))break a;c=5;break a;case 3254818:if(!Bk(b,C(192)))break a;c=1;break a;case 3556653:if(!Bk(b,C(181)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=DY();e
=new J;L(e);H(H(e,C(420)),b);Bf(d,K(e));c=0;break b;}c=0;}return c;}
function ADb(){B.call(this);this.w7=null;}
function AXd(a,b,c,d){return L$(a.w7,b,c,d);}
function Ys(){B.call(this);this.kN=null;}
function A6f(a,b){var c,d,e,f,g;c=a.kN;d=c.mP;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kR;e.a=Fc(0,e.a+f|0,c.g$.a-c.j$.a|0);c=a.kN;d=c.kR;d.b=Fc(0,d.b+g|0,c.g$.b-c.j$.b|0);}a.kN.mP=b.j;return 1;}
var AGy=G();
function Mi(){return "clipboard" in $rt_globals.navigator?1:0;}
function AIe(){var a=this;B.call(a);a.cX=null;a.cj=null;a.kT=null;a.k9=null;a.oo=null;a.kh=null;}
function ZU(a){var b=new AIe();A3b(b,a);return b;}
function A3b(a,b){a.cj=BN();a.kh=A_s;a.cX=b;Ba(b.dF,a);}
function HA(a,b,c){a.kT=c;a.oo=b;b=B9(a.cj);while(Cb(b)){J0(Cc(b),a.oo);}}
function MY(a,b,c,d){a.kh=d;SO(a,b,c);}
function SO(a,b,c){var d,e;d=a.cX;e=d.bT;if(Bc(e.a,e.b)&&d.ci!==0.0){if(a.kT!==null&&!JM(a)){a.k9=Fu(a.cX,a.kT);d=V$(a,b,c,null,null);b=new SA;b.uJ=a;d.lb=b;DQ(a.cX,a);return;}b=new BX;X(b);N(b);}c=new Db;Bp(c,C(421));N(c);}
function MJ(a){if(JM(a)){ACp(a.cX,a);ACg(a,null);a.kh.e();a.kh=A_s;}}
function V$(a,b,c,d,e){var f,g,h;f=AKU();AE9(f);NI(f,c.ct());J0(f,a.oo);JY(f,a.k9,a.cX);if(d===null)g=b.a;else{g=b.a;g=a.cX.bT.a<((g+(EJ(d)).a|0)+(EJ(f)).a|0)?g-(EJ(f)).a|0:(g+(EJ(d)).a|0)-d.gh|0;}h=b.b;b=a.cX.bT;ND(f,Bd(0,Be(g,b.a-(EJ(f)).a|0)),Bd(0,Be(h,b.b-(EJ(f)).b|0)));b=new ACW;b.wg=a;b.wd=f;b.we=e;f.pw=b;Bz(a.cj,f);return f;}
function A5S(a,b,c){var d;a.k9=Fu(a.cX,a.kT);d=B9(a.cj);while(Cb(d)){JY(Cc(d),a.k9,a.cX);}}
function AFq(a){var b,c;if(EL(a.cj))return;Ca(a.cX.bL,1);b=0;while(true){c=a.cj;if(b>=c.p)break;My(BI(c,b),a.cX);b=b+1|0;}}
function ARW(a,b){var c;if(!JM(a))return 0;a:{switch(b.bj){case 27:MJ(a);c=1;break a;default:}c=0;}return c;}
function ACg(a,b){var c,d;c=a.cj.p-1|0;a:{while(true){if(c<0)break a;d=BI(a.cj,c);if(b===d)break;EV(a.cj,c);Ne(d);c=c+(-1)|0;}}}
function JM(a){return a.cj.p<=0?0:1;}
function ATU(a){var b,c;SP(a.cX.dF,a);ACp(a.cX,a);b=a.cj;c=B9(b);while(Cb(c)){Ne(Cc(c));}IN(b);}
function XR(){B.call(this);this.yG=null;}
function ARD(a,b){MK(a.yG,b);}
function VM(){B.call(this);this.Am=null;}
function A5v(a,b){var c,d,e,f;c=a.Am;if(c.gS!=3&&c.fj!=3){b=b.data;c.g9=3;d=CT(b[0]);e=EY(b[1]);Oq(c.h,d,e);if(c.fZ){b=E$(c);f=J6(EF(),c.ji);c=new J;L(c);H(HY(H(H(c,b),C(422)),f),C(201));$rt_globals.console.info($rt_ustr(K(c)));}}}
function RA(){B.call(this);this.z5=null;}
function AX9(a,b){var c,d,e,f,g,h;c=a.z5;if(c.fj!=3){d=b.data;c.gS=3;if((CT(d[2])).data[0]!=1)MK(c,b);else{e=CT(d[0]);f=EY(d[1]);g=c.g9!=3?0:1;R4(c.h,e,f,g);if(c.fZ){b=E$(c);h=J6(EF(),c.ji);c=new J;L(c);H(HY(H(H(c,b),C(423)),h),C(201));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function Qh(){B.call(this);this.kA=null;}
function AXr(a){return a.kA;}
var ALg=G(0);
var Md=G(0);
function RF(){B.call(this);this.u9=null;}
function AYw(a,b){return Lx(a.u9,b);}
function PS(){B.call(this);this.By=null;}
function A4G(a,b){var c,d;c=a.By;d=b.br;return P2(c.charCodeAt(d)&65535);}
var AHD=G();
function AJ9(b,c,d,e,f,g){g.a=c.a;g.b=f;Bv(b,d.a,d.b,g,e);Bv(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bv(b,d.a,d.b+f|0,g,e);Bv(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ALs(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bv(b,j,k,i,h);Bv(b,j,k,i,h);Bv(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bv(b,l,j,i,h);Bv(b,l,j,i,h);Bv(b,l+g|0,j+g|0,i,h);}
function Rh(){var a=this;B.call(a);a.cY=null;a.qI=null;a.fA=null;a.el=0;a.cC=0;a.jv=null;a.kd=null;a.hH=0;a.xJ=0;}
function PP(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.el;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}EZ(c);j=d+(-1)|0;b=Dn(d);d=Bc(j,a.cC)%a.fA.b|0;G4(a,c,b,a.hH,g);J5(a.cY,c,0,d);if(!(j%a.el|0))break;d=j;}}else{EZ(b);k=a.el-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;G4(a,b,Dn(j),Bc(a.cC,k)+a.hH|0,g);k=k+(-1)|0;j=h;}CP(a.cY,b);j=Bd(i,e);}return j;}k=a.el;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}EZ(c);b=Dn((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cC)%a.fA.b|0;G4(a,c,b,a.hH,g);J5(a.cY,c,0,d);if(!(j%a.el|0))break;d=j;}}else{EZ(b);d=0;while(d<a.el){h=h+1|0;G4(a,b,Dn((h>e?h-f|0:h)+f|0),Bc(a.cC,d)+a.hH|0,g);d=d+1|0;}CP(a.cY,b);j=Be(i,e);}return j;}
function WN(b,c,d,e){c=c.data;return d<c.length&&c[d]?Kj(b.ed,b,c[d]):e.lq;}
function NG(a,b,c,d,e,f){DP(b,a.qI.a+d.a|0,c+d.b|0,a.jv,a.kd,a.cY,e,f,a.xJ);}
function G4(a,b,c,d,e){B1(b,c,a.fA.a-20.0*e,d);}
var AFn=G();
function Gx(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AFP(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function UR(){var a=this;B.call(a);a.qA=null;a.qB=null;a.iE=null;}
function A8p(a,b,c){var d=new UR();AG$(d,a,b,c);return d;}
function AG$(a,b,c,d){a.qA=b;a.qB=c;a.iE=d;}
function G2(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iE.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.ii:i.ij;k=!c?i.oB:i.oC;l=BP(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function Mr(){var a=this;B.call(a);a.ij=0;a.oC=0;a.ii=0;a.oB=0;a.pl=0;}
function NH(a,b,c,d,e){var f=new Mr();A3Y(f,a,b,c,d,e);return f;}
function A3Y(a,b,c,d,e,f){a.ij=b;a.oC=c;a.ii=d;a.oB=e;a.pl=f;}
var S9=G(0);
var A$x=null;function ALB(){A$x=new R1;}
function ADh(){var a=this;B.call(a);a.tj=null;a.tk=null;}
function AYx(a,b){var c,d,e;c=a.tj;d=a.tk;c=c.fE.er.v;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Cr(d,b);}
var Gs=G(Jp);
var AEp=G(FJ);
function AEs(){B.call(this);this.vW=null;}
function AW7(a,b){var c,d;c=a.vW;Ws(c,FI(c,b.j));b=Bl(c);d=c.d;Oj(b,d.x,d.B);Im(c);}
function U1(){B.call(this);this.ym=null;}
function A46(a,b){var c,d;c=a.ym;d=c.ek+1|0;c.ek=d;c=new J;L(c);H(H(V(c,d),C(424)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function Wy(){B.call(this);this.yy=null;}
function A3z(a){var b,c;b=a.yy;c=new J;L(c);H(H(H(c,C(425)),b),C(426));$rt_globals.console.info($rt_ustr(K(c)));}
function Fs(){var a=this;B.call(a);a.bO=null;a.kB=null;a.hv=null;}
function Oo(a,b,c,d){a.bO=b;a.hv=c;a.kB=d;}
function Pw(a,b,c){return TZ(a,b,HO(BG(a)),c);}
function TZ(a,b,c,d){var e,f,g,h,i,j,k;e=A5u(a.bO.bi,b);EQ(e,a.hv.cw);C2(e,c);b=new Xd;b.wE=a;b.wF=e;T4(e,b);b=new Xc;b.xj=a;e.xx=b;b=e.bf.bT;f=ADw(e);g=Cu(e.bf,5.0);h=Cu(e.bf,d);i=h?h+f|0:0;c=BK(g+h|0,(g+i|0)+f|0);j=new Bh;k=b.a;g=g*2|0;Rc(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);EB(e,c,j);return e;}
function AJw(a,b){var c,d,e;c=a.qF(b);if(c!==null){d=a.bO;e=a.hv;Gp(d,e.cw,e.gy,b,c);}return c===null?0:1;}
function ZY(){var a=this;Fs.call(a);a.i$=null;a.dW=null;a.hN=null;a.gR=null;}
function AOh(a){var b;a.i$=null;a.dW=null;b=null;a.gR=b;a.hN=b;}
function A0j(a,b){var c,d,e,f;if(B3(a.dW.dI,b))return AAK(a,1,C(281));if(B3(a.dW.dG,b))return AAK(a,0,C(282));c=P(BC,2);d=c.data;b=new BC;e=new AAi;e.qZ=a;Cl(b,e,C(281));d[0]=b;b=new BC;f=new AAh;f.wJ=a;Cl(b,f,C(282));d[1]=b;return CO(c);}
function AAK(a,b,c){var d,e,f,g;d=P(BC,1);e=d.data;f=new BC;g=new ADs;g.AC=a;g.AD=b;Cl(f,g,c);e[0]=f;return CO(d);}
function Ij(a,b){var c,d;c=a.bO.bi.cG;d=new T$;d.Cx=a;d.Cy=b;Go(c,d);}
var V0=G();
function AWr(a){return ABZ();}
var Lh=G(0);
function AN5(a,b,c){LQ(b);}
function AMf(a,b){var c;c=new Sj;c.u7=a;c.u8=b;return c;}
function L4(){var a=this;Fs.call(a);a.k2=null;a.c_=null;a.xR=null;a.iM=null;a.fJ=null;a.tf=null;}
function A_4(a,b,c){var d=new L4();AD4(d,a,b,c);return d;}
function AD4(a,b,c,d){var e,f;Oo(a,b,c,d);a.iM=Ka();a.fJ=Ka();e=new Rt;E_(e);e.jt=Ld(b);d=Uy(b.bi);e.gE=d;e.k8=GW(d,b.bi);d=new P4;E_(d);f=new B4;AQN();ALw(f,A$t);d.BM=f;e.o8=d;d=Iu(e.jt);e.f7=d;e.FV=a;MV(e,I(CF,[e.k8,e.o8,d]));e.DC=Fb(1);a.c_=e;VO(e,c);f=Ih(C(427),0);EP(f);c=new ABs;c.sh=a;f.cW=c;D3(a.c_.gE,f);c=TZ(a,a.c_,C(428),0.0);a.k2=c;d=new ABr;d.wP=a;c.kS=d;d=new ABt;d.uu=a;c.kM=d;Ep(b,c);}
function AYz(a,b){var c,d,e,f,g,h,i;if(B3(a.c_.f7,b)){c=a.c_;d=c.jt;c=c.f7;e=a.kB;f=a.bO;BF(f);g=new Vs;g.CH=f;return AAH(Mm(d,c,e,a,c,g),b);}h=P(BC,1);i=h.data;b=new BC;c=new Vr;c.q3=a;Cl(b,c,C(429));i[0]=b;return CO(h);}
function AEt(a){var b,c;b=a.bO.bi.cG;c=new RT;c.q2=a;Go(b,c);}
function A03(a){a.k2=null;a.c_=null;a.iM=null;a.fJ=null;}
function AZo(a,b){a.hv=b;EQ(a.k2,b.cw);VO(a.c_,b);}
function AZm(a,b){var c,d,e;c=b.gI;d=Ff(c);a.xR=d;e=CA(a.iM,d);if(e!==null)Ru(a,e);else{b=Bj();e=new J;L(e);H(H(e,C(430)),d);Bf(b,K(e));if(HG(a.fJ,d)){b=new J;L(b);H(H(b,C(431)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D0(a.fJ,d,d);b=new Q8;b.vP=a;b.vQ=d;e=new Q9;e.tw=a;e.tv=d;VP(c,b,e);}}}
function Ru(a,b){Ic(a.c_.f7,b);b=a.c_;DQ(b.jt.cb.bi,b.f7);}
function AUO(a,b){var c;AEw(b);if(JD(b)>0)ET(a.c_.gE);c=b.gx.data;if(c.length==1&&!b.g5.data.length)c[0].cW.e();}
function A2q(a,b){if(JD(b)>0)ET(a.c_.gE);LD(b);}
function A1T(a,b,c){if(AIZ(c)!==C(181))Rk(b);else LQ(b);}
var AD5=G();
function AWk(a){return Fb(1);}
var AEJ=G(DG);
var A_5=null;function X6(b){var c;c=new J;L(c);return K(De(c,b));}
function AHw(){A_5=F($rt_floatcls());}
var GL=G();
var A_6=null;var A_7=null;var A9x=null;var A9w=null;var A9v=null;function AKL(){A_6=D4([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A_7=AJP([Bq(1),Bq(10),Bq(100),Bq(1000),Bq(10000),Bq(100000),Bq(1000000),Bq(10000000),Bq(100000000),Bq(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A9x=AJP([Bq(1),Bq(10),Bq(100),Bq(10000),Bq(100000000),
D(1874919424, 2328306)]);A9w=new ACA;A9v=new UV;}
var JW=G();
var A_8=0;var A_9=null;var A_$=null;function ALb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rB=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nr=0;c.nf=0;return;}if(f)d=e|8388608;else{d=e<<1;while(I1(Di(Bq(d),Bq(8388608)),FU)){d=d<<1;f=f+(-1)|0;}}g=ALk(A_$,f);if(g<0)g= -g|0;h=A_$.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JT(d,A_9.data[e],i);if(j<A_8){while($rt_ucmp(j,A_8)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A_$.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JT(d,
A_9.data[e],i);}e=d<<1;d=e+1|0;h=A_9.data;f=g+1|0;k=h[f];l=i-1|0;m=JT(d,k,l);n=JT(e-1|0,A_9.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DM(Bq(d),Bq(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.nr=d;c.nf=g-50|0;}
function JT(b,c,d){return G5(Gq(Ck(Di(Bq(b),D(4294967295, 0)),Di(Bq(c),D(4294967295, 0))),32-d|0));}
function AKh(){A_8=$rt_udiv((-1),10);A_9=D4([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A_$=D4([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function UV(){var a=this;B.call(a);a.nr=0;a.nf=0;a.rB=0;}
function OM(){var a=this;B.call(a);a.Fg=null;a.xq=0.0;a.DM=0.0;a.gG=null;a.jF=null;a.ol=null;a.gl=0;}
function AMm(a,b){var c;if(b!==null){a.jF=b;return a;}c=new BX;Bp(c,C(432));N(c);}
function AHn(a,b){var c;if(b!==null){a.ol=b;return a;}c=new BX;Bp(c,C(432));N(c);}
function ZP(a,b,c,d){var e,f,g,$$je;e=a.gl;if(!(e==2&&!d)&&e!=3){a.gl=d?2:1;while(true){try{f=AIp(a,b,c);}catch($$e){$$je=E5($$e);if($$je instanceof Bt){g=$$je;N(AYZ(g));}else{throw $$e;}}if(Is(f))return f;if(Jj(f)){if(d&&Ee(b)){g=a.jF;Hx();if(g===A91)return EC(Cj(b));if(Cj(c)<=M(a.gG))return A94;FH(b,b.bd+Cj(b)|0);if(a.jF===A92)NE(c,a.gG);}return f;}if(R6(f)){g=a.jF;Hx();if(g===A91)return f;if(g===A92){if(Cj(c)<M(a.gG))return A94;NE(c,a.gG);}FH(b,b.bd+Lo(f)|0);}else if(MD(f)){g=a.ol;Hx();if(g===A91)break;if
(g===A92){if(Cj(c)<M(a.gG))return A94;NE(c,a.gG);}FH(b,b.bd+Lo(f)|0);}}return f;}b=new Db;X(b);N(b);}
function AJR(a,b){var c,d,e,f;c=a.gl;if(c&&c!=3){b=new Db;X(b);N(b);}if(!Cj(b))return AIS(0);if(a.gl)a.gl=0;d=AIS(Bd(8,Cj(b)*a.xq|0));while(true){e=ZP(a,b,d,0);if(Jj(e))break;if(Is(e))d=ABh(a,d);if(!N1(e))continue;UU(e);}b=ZP(a,b,d,1);if(N1(b))UU(b);while(true){f=a.gl;if(f!=3&&f!=2)break;a.gl=3;if(Jj(A95)){d.et=d.bd;d.bd=0;d.j2=(-1);return d;}d=ABh(a,d);}b=new Db;X(b);N(b);}
function ABh(a,b){var c,d,e;c=b.iQ;d=K3(c,Bd(8,c.data.length*2|0));e=AKW(d,0,d.data.length);FH(e,b.bd);return e;}
function ADG(){var a=this;B.call(a);a.bs=0;a.bw=0;}
function DW(a,b){var c=new ADG();AK2(c,a,b);return c;}
function AK2(a,b,c){a.bs=b;a.bw=c;}
function ANd(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.bs==c.bs&&a.bw==c.bw?1:0;}return 0;}
function AT_(a){var b,c,d,e;b=P(B,2).data;b[0]=C3(a.bs);b[1]=C3(a.bw);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.br)|0;d=d+1|0;}return c;}
function ANN(a){var b,c,d;b=a.bs;c=a.bw;d=new J;L(d);Br(d,40);Br(V(H(V(d,b),C(37)),c),41);return K(d);}
function A2X(a,b){var c;b=b;c=BP(a.bs,b.bs);if(!c)c=BP(a.bw,b.bw);return c;}
var AGI=G(C7);
function Vu(){B.call(this);this.Eo=null;}
function AOb(a){Bf(Bj(),C(433));}
var AE2=G(0);
var A_s=null;function AH_(){A_s=new X5;}
function X2(){B.call(this);this.sp=null;}
function A42(a){AEF(a.sp);}
function X0(){B.call(this);this.rN=null;}
function APL(a){ABS(a.rN);}
function XZ(){B.call(this);this.uF=null;}
function ANF(a){Z5(a.uF);}
function X1(){B.call(this);this.zR=null;}
function A6g(a){AEo(a.zR);}
function Z_(){B.call(this);this.Bc=null;}
function AVh(a){ZW(a.Bc);}
function Z$(){B.call(this);this.so=null;}
function A1d(a){var b;b=a.so;XY(new Ns,b.iy,b.y,new WY);}
function AAa(){B.call(this);this.wM=null;}
function A2G(a){var b;b=a.wM;AD4(new L4,b.y,b.iy,new QJ);}
function Sw(){B.call(this);this.yn=null;}
function A1u(a){ACP(a.yn);}
function ZN(){B.call(this);this.CA=null;}
function AXQ(a,b){var c,d;c=a.CA;d=c.ek+1|0;c.ek=d;c=b.i6;b=new J;L(b);H(H(V(b,d),C(434)),c);$rt_globals.console.info($rt_ustr(K(b)));}
var R1=G();
function A1Y(a,b){}
function FA(){var a=this;CF.call(a);a.cS=null;a.W=null;a.fm=null;}
function A__(){var a=new FA();L8(a);return a;}
function L8(a){E_(a);a.cS=new Bh;a.W=new Bh;}
function AZZ(a,b){a.fm=b;}
function TT(a,b,c){Y(a.cS,b,c);}
function T9(a){var b;b=a.fm;if(b!==null)ADq(b);}
function AGH(a){var b;b=a.W;b.a=XF(a,b.a);b=a.W;b.b=ADO(a,b.b);}
function AHU(a,b){var c,d;c=a.W.a;d=XF(a,b);a.W.a=d;return c==d?0:1;}
function AMK(a,b){var c,d;c=a.W.b;d=ADO(a,b);a.W.b=d;return c==d?0:1;}
function ADO(a,b){return Bd(0,Be(b,a.cS.b-a.k.b|0));}
function XF(a,b){return Bd(0,Be(b,a.cS.a-a.k.a|0));}
function RV(){var a=this;FA.call(a);a.b0=null;a.ef=null;a.iq=null;a.Bz=null;a.es=null;a.b$=null;a.e9=null;a.fY=null;a.d1=0;a.fV=0;a.CF=null;a.ec=0;a.eW=0;a.hR=0;a.gi=0;a.f9=0;a.c0=0;a.e$=null;a.kH=null;a.zD=null;a.iO=null;}
function A8I(a,b){var c=new RV();AMj(c,a,b);return c;}
function AMj(a,b,c){L8(a);a.ef=S4();a.iq=new Bh;a.b$=Baa;a.e9=P(Km,0);a.ec=0;a.eW=0;a.hR=0;a.gi=0;a.f9=0;a.e$=AJy(0);a.iO=Ka();a.b0=b;a.kH=c;a.CF=c;QW(a);}
function QW(a){a.d1=Ci(2.0,a.b0.ci);}
function Wj(a){return a.b$.data.length?0:1;}
function XU(a,b){T7(a);a.b$=b;}
function T7(a){Y(a.iq,0,0);}
function WT(a,b,c){a.zD=b;a.Bz=c;a.es=null;a.e$=null;a.fV=0;T7(a);}
function A44(a){a.fY=BY(a.fY,null);Y(a.iq,0,0);E4(a.iO);a.e$=null;a.b$=Baa;a.e9=null;a.ec=0;a.eW=0;a.hR=0;AB5(a.ef);a.kH=null;}
function AZc(a,b,c){Zd(a);QW(a);a.es=null;a.e$=null;a.fV=0;}
function AXm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KC(a.b0);if(Wj(a))return;Lg(a);Cq(c,a.es);d=Eo(a);e=AJf(c,a.fV);f=Be(In(a.k.b,d),a.b$.data.length)+30|0;g=a.zD.Cq;h=a.e9.data;d=h.length;if(d<f){a:{i=a.gi;j=a.f9;k=a.b$;l=a.e$;m=a.iO;n=P(Km,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hc!==c){ADv(l,q,m);o[f]=M9(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=M9(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=M9(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ADv(l,c,m);h[f]=null;}f=f+1|0;}a.e9=n;Cr(a.iq,M8(a.e$));Zr(a,a.b0.bL);}a.gi=Be((a.W.b+a.d1|0)/(Eo(a)+a.d1|0)|0,a.b$.data.length-1|0);a.f9=Be((((a.W.b+a.ef.u.b|0)-1|0)+a.d1|0)/(Eo(a)+a.d1|0)|0,a.b$.data.length-1|0);if(!a.e9.data.length)return;AJa(a,e);ADn(a,b);q=g.Bq;c=a.i;Bv(b,c.a,c.b,a.k,q);c=a.ef.v;i=c.a;j=c.b;p=Cu(a.b0,2.0);s=a.b0.d8;t=a.gi;u=i+p|0;while(t<=a.f9){l=YO(a,t);d=Bc(t,Eo(a));v
=t+1|0;w=d+Bc(v,a.d1)|0;x=u+a.ec|0;y=x+a.eW|0;z=a.c0!=t?0:1;m=!z?q:g.th;ba=!z?g.uW:g.lz;bb=!z?g.rt:g.lz;bc=!z?g.r5:g.lz;bd=(j+w|0)-a.W.b|0;DP(b,u,bd,l.jO,l.t_,a.fY,ba,m,a.b0.cJ);DP(b,x,bd,l.kg,l.lx,a.fY,bb,m,a.b0.cJ);DP(b,y,bd,l.jP,l.k7,a.fY,bc,m,a.b0.cJ);d=l.jO.a;be=u+d|0;Y(s,Bd(0,a.ec-d|0),l.jO.b);Bv(b,be,bd,s,m);d=u+a.ec|0;f=l.kg.a;bf=d+f|0;Y(s,Bd(0,a.eW-f|0),l.kg.b);Bv(b,bf,bd,s,m);d=l.jP.a;bg=y+d|0;Y(s,Bd(0,(((a.ef.u.a-d|0)-a.eW|0)-a.ec|0)-p|0),l.jP.b);Bv(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;Y(s,p,Eo(a)+a.d1
|0);Bv(b,bh,bd,s,q);t=v;}Gm(b);}
function AJa(a,b){var c,d,e,f,g,h;c=0;d=a.gi;while(d<=a.f9){e=YO(a,d);if(!(e!==null&&e.hc===a.b$.data[d])){f=a.e9.data;g=a.b$;e=a.e$;h=a.iO;c=d%f.length|0;if(f[c]!==null)ADv(e,f[c],h);f[c]=M9(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Cr(a.iq,M8(a.e$));Zr(a,a.b0.bL);}}
function Zr(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.iq;c=D_(b,c.a+150|0,c.b,a.b0.cJ);Cq(c,a.es);d=a.es;e=d.ev;f=e-(e+d.eO)/16.0;g=a.e9.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hc.lN;k=d.lx;B1(c,j,k.bp+a.fV,f+k.bt);j=d.hc.l5;d=d.k7;B1(c,j,d.bp+a.fV,f+d.bt);}i=i+1|0;}a:{d=a.iO;if(d.dd>0){h=d.c6;i=0;b:while(true){g=d.b_.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cH;l=j.cQ;k=k;l=l.ms;B1(c,k,l.bp+a.fV,f+l.bt);j=j.c4;if(h!=d.c6)break b;}i=i+1|0;}b=new Ip;X(b);N(b);}}if(a.fY===null)a.fY=C1(b);CP(a.fY,
c);EI(c);}
function YO(a,b){var c;c=a.e9.data;return c[b%c.length|0];}
function A2V(a,b){Cr(a.ef.u,b);}
function A36(a,b){Cr(a.ef.v,b);}
function Zd(a){var b,c,d,e,f,g,h,i,j;b=KC(a.b0);if(Wj(a))return;Lg(a);Cq(b,a.es);c=AJf(b,a.fV);d=a.b$.data;e=d.length;f=0;while(f<e){g=d[f];h=NP(c,g.hV);i=NP(c,g.lN);j=NP(c,g.l5);a.ec=Bd(a.ec,h);a.eW=Bd(a.eW,i);a.hR=Bd(a.hR,j);f=f+1|0;}}
function ARM(a,b){var c;c=AA7(a,b.j);if(c>=0)a.c0=c;return Fl(a.ef,a.i)&&GX(a.b0.c2)?1:0;}
function APR(a,b,c){if(!Fl(a.ef,b.j)&&!Lv(a.ef)){b=a.CF;if(b!==null)b.e();}return null;}
function AT2(a,b,c,d){var e;if(d==1){e=AA7(a,b.j);if(e>=0)Vl(a,a.b$.data[e]);}return 1;}
function Vl(a,b){a.kH.e();b.uL.e();}
function AA7(a,b){var c,d,e;if(!a.e9.data.length)return (-1);c=Eo(a);d=(b.b-a.i.b|0)+a.W.b|0;e=a.d1;e=(d+e|0)/(c+e|0)|0;if(e<a.b$.data.length)return e;return (-1);}
function Eo(a){return Fd(a.es);}
function Lg(a){var b;if(a.es===null){b=Fu(a.b0,a.Bz);a.es=b;a.e$=AJy(Fd(b));a.fV=C4(a.es.qv);}}
function A4h(a,b){var c,d,e;a:{switch(b.bj){case 13:Vl(a,a.b$.data[a.c0]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.c0=a.gi;b=a.fm;c=a.W;JA(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.c0=a.f9;b=a.fm;c=a.W;JA(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.c0=a.b$.data.length-1|0;break a;case 36:case 37:a.c0=0;break a;case 38:d=a.c0;e=a.b$.data.length;a.c0=((d+e|0)
-1|0)%e|0;break a;case 40:a.c0=(a.c0+1|0)%a.b$.data.length|0;break a;default:break a;}a.kH.e();return 0;}e=a.c0;if(e<=a.gi)JA(a.fm,a.W.a,Bc(e,Eo(a))+Bc(a.c0,a.d1)|0);else if(e>=a.f9)JA(a.fm,a.W.a,(Bc(e+1|0,Eo(a))+Bc(a.c0+2|0,a.d1)|0)-a.k.b|0);return 0;}
var VT=G();
function AV5(a){}
function AGe(){var a=this;CF.call(a);a.oN=null;a.yz=null;a.Bs=null;a.bU=null;a.dy=null;a.dO=null;a.u4=null;a.rz=null;a.wj=0.0;a.pX=null;a.ph=null;}
function GW(a,b){var c=new AGe();AW4(c,a,b);return c;}
function AW4(a,b,c){var d;c=c.c2;E_(a);d=new Qp;d.zC=a;a.yz=d;d=new Qo;d.Ap=a;a.Bs=d;a.wj=10.0;a.bU=b;a.oN=c;b.fm=a;}
function AUQ(a){var b;b=a.bU;b.fm=null;a.bU=BY(b,null);}
function Jz(a,b,c){var d;a.ph=c;a.pX=b;d=a.dy;if(d!==null)Ik(d,b,c);b=a.dO;if(b!==null)Ik(b,a.pX,a.ph);}
function AQj(a,b,c,d){J7(a,b,c,d);J7(a.bU,b,c,d);if(d!==0.0)ADq(a);}
function JA(a,b,c){Lt(a,b);LZ(a,c);}
function ADq(a){var b;AGH(a.bU);b=F0(a)*3|0;if(AAm(a,b))UF(a);else a.dO=null;if(AEZ(a,b))Xx(a);else a.dy=null;}
function AEZ(a,b){var c;c=a.k.b;return c>b&&a.bU.cS.b>c?1:0;}
function AAm(a,b){var c;c=a.k.a;return c>b&&a.bU.cS.a>c?1:0;}
function UF(a){var b,c,d,e,f,g;b=a.dO;if(b===null)b=Ju();a.dO=b;Pz(a,b);c=a.dO;b=a.bU;d=b.W.a;e=a.i;f=e.a;g=a.k;R3(c,d,f,g.a,b.cS.a,e.b+g.b|0,F0(a));}
function Xx(a){var b,c,d,e,f,g;b=a.dy;if(b===null)b=Ju();a.dy=b;Pz(a,b);c=a.dy;b=a.bU;d=b.W.b;e=a.i;f=e.b;g=a.k;KG(c,d,f,g.b,b.cS.b,e.a+g.a|0,F0(a));}
function F0(a){return DE(a,a.wj);}
function Pz(a,b){Ik(b,a.pX,a.ph);}
function A3p(a,b){var c;a.bU.dH(b);if(!(a.dy===null&&a.dO===null)){Ca(b,1);c=a.dy;if(c!==null)G$(c,b);c=a.dO;if(c!==null)G$(c,b);c=a.dy;if(c!==null)Hd(c,b);c=a.dO;if(c!==null)Hd(c,b);Ca(b,0);}}
function Uf(a,b){var c,d;a:{b:{c=a.dy;if(!(c!==null&&I4(c,b))){c=a.dO;if(c===null)break b;if(!I4(c,b))break b;}d=1;break a;}d=0;}return d;}
function AVd(a,b,c,d){return !Uf(a,b.j)&&!a.bU.cI(b,c,d)?0:1;}
function Lt(a,b){var c;b=AHU(a.bU,b);if(AAm(a,F0(a)*3|0))UF(a);if(b){c=a.u4;if(c!==null)c.e();}}
function LZ(a,b){var c;if(ADQ(a,b)){c=a.rz;if(c!==null)c.e();}}
function ADQ(a,b){var c;c=AMK(a.bU,b);if(AEZ(a,F0(a)*3|0))Xx(a);return c;}
function AUS(a,b,c){var d,e;d=a.dy;if(d!==null){e=Ge(d,b.j,a.yz,1);if(e!==null)return e;}d=a.dO;if(d!==null){e=Ge(d,b.j,a.Bs,0);if(e!==null)return e;}return a.bU.cr(b,c);}
function ASW(a,b,c){return Uf(a,b.j)?1:0;}
function ASH(a,b){var c,d,e;c=a.dy;d=c!==null&&Gl(c,b.j,a.oN)?1:0;c=a.dO;e=c!==null&&Gl(c,b.j,a.oN)?1:0;return !d&&!e&&!a.bU.bY(b)?0:1;}
function AZA(a,b,c,d){var e,f;if(!B3(a,b.j))return 0;e=Ci(d*0.5,a.bW);f=Ci(c*0.5,a.bW);if(b.bQ){f=f+e|0;e=0;}if(a.dy!==null&&e)LZ(a,a.bU.W.b+e|0);if(a.dO!==null&&f)Lt(a,a.bU.W.a+f|0);return 1;}
function AIU(a){var b,c;b=F0(a);c=a.bU.h6();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var AEB=G();
function AO8(a,b){}
function AED(){var a=this;B.call(a);a.vf=null;a.vg=null;}
function ANe(a,b){var c,d,e;c=a.vf;d=a.vg;b=BT(b);e=new J;L(e);H(H(H(e,d),C(29)),b);C2(c,K(e));}
function QD(){var a=this;FA.call(a);a.mz=null;a.qb=null;a.y1=null;a.su=0.0;}
function AWc(a){var b;b=Ci(20.0,a.bW);return BK(b,b);}
function A21(a,b){TT(a,b.a*3|0,b.b*5|0);a.y1.g(b);}
function AWu(a,b){var c,d,e,f,g,h,i,j,k,l,m;AMp(a,b);ADn(a,b);c=Ci(30.0,a.bW);d=a.W;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.qb;d.b=c;d.a=c;a.mz.bA=1.0;while(h<=e){g=a.i.b-a.W.b|0;j=f;while(j<=i){k=a.i.a-a.W.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AMd(l);m=m+1|0;}V7(ALM(l),0.75,a.su,a.mz);Bv(b,k+j|0,g+h|0,a.qb,a.mz);j=j+c|0;}h=h+c|0;}Gm(b);}
function ASf(a,b,c){return A$x;}
function AEC(){var a=this;B.call(a);a.q7=null;a.q8=null;}
function AU7(a){var b,c;b=a.q7;c=a.q8;II(b.y,c);Kf(c);}
function U8(){var a=this;CF.call(a);a.gk=null;a.hM=null;a.jZ=null;a.eF=null;a.k6=0.0;a.eP=0;a.iz=0;a.d7=null;a.m0=null;}
function Wl(a){var b;if(Oz(a))return 0;ADj(a);b=Cu(a.gk,a.k6);return Fd(a.eF)+(b*2|0)|0;}
function Sp(a){var b;b=a.k;return b.a&&b.b?0:1;}
function Oz(a){return a.hM!==null&&a.jZ!==null?0:1;}
function Q4(a,b){a.k.b=b;}
function Q_(a,b,c,d,e){var f,g;f=a.gk.d8;Y(f,d,a.k.b);g=a.i;Bv(b,g.a+c|0,g.b,f,e);}
function ADj(a){if(a.eF===null)a.eF=Fu(a.gk,a.hM);}
function H_(){CF.call(this);this.cp=null;}
function MV(a,b){var c;if(a.cp===null){a.cp=b;return;}c=new DT;X(c);N(c);}
function A11(a){var b,c,d;b=a.cp.data;c=b.length;d=0;while(d<c){b[d].b1();d=d+1|0;}}
function ASz(a,b){var c,d,e;c=a.cp.data;d=c.length;e=0;while(e<d){c[e].dH(b);e=e+1|0;}}
function AXz(a,b){var c,d,e,f;c=0;d=a.cp.data;e=d.length;f=0;while(f<e){c=c|d[f].cB(b);f=f+1|0;}return c;}
function AO7(a,b,c,d){J7(a,b,c,d);a.CG();}
function A4M(a,b,c,d){var e,f,g,h,i;e=0;f=a.cp.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.cI(b,c,d);h=h+1|0;}return e;}
function AVf(a,b,c){var d,e,f,g,h;d=a.cp.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.j)){h=g.cr(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A4X(a,b,c){var d,e,f,g,h;d=0;e=a.cp.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.j))d=d|h.dM(b,c);g=g+1|0;}return d;}
function A5n(a,b){var c,d,e,f,g;c=0;d=a.cp.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.j))c=c|g.bY(b);f=f+1|0;}return c;}
function APJ(a,b,c,d){var e,f,g,h,i;e=0;f=a.cp.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.dJ(b,c,d);h=h+1|0;}return e;}
function A4$(a){var b,c,d;b=a.cp.data;c=b.length;d=0;while(d<c){b[d].ku();d=d+1|0;}}
function Ix(){H_.call(this);this.eL=null;}
function Qr(a,b){E_(a);a.eL=AYp(b);}
function ARJ(a){var b,c,d,e;b=Ci(20.0,a.bW);c=(a.k.a-b|0)/2|0;d=AK$(a.i);e=BK(c,a.k.b);a.cp.data[0].dK(d,e,a.bW);d.a=(a.i.a+a.k.a|0)-c|0;a.cp.data[1].dK(d,e,a.bW);e.a=(a.k.a-c|0)-c|0;d.a=a.i.a+c|0;a.cp.data[2].dK(d,e,a.bW);}
function AGP(){var a=this;Ix.call(a);a.dI=null;a.dG=null;a.kY=null;a.l9=null;a.v7=null;}
function AMa(a){var b=new AGP();A1$(b,a);return b;}
function A1$(a,b){var c,d;Qr(a,b);a.dI=Uy(b);a.dG=Uy(b);a.kY=GW(a.dI,b);a.l9=GW(a.dG,b);c=ANt(a.kY,a.dI);d=ANt(a.l9,a.dG);OA(a.eL,c,d);a.v7=AIu(c,d);MV(a,I(CF,[a.kY,a.l9,a.eL]));}
function OB(a,b){a.eL.iA=b;Kr(a.dI,b);JZ(a.dI,a.kY);Kr(a.dG,b);JZ(a.dG,a.l9);}
function ABR(a,b){a.v7.g_=b;a.eL.ey=b;}
function Hz(){var a=this;B.call(a);a.cW=null;a.jw=null;a.oY=null;a.hw=null;a.j9=0;a.hK=0;a.hI=0;}
function Bab(a,b){var c=new Hz();TE(c,a,b);return c;}
function TE(a,b,c){a.hw=YA(b);a.j9=c;a.hK=0;}
function Eg(a){return (Kc(a.hw,0)).w;}
function AFg(a){a.hK=60084;}
function Jr(a){return a.hK!=60084?0:1;}
function AGd(a){a.hK=60086;}
function AGn(a){a.hI=60035;}
function LQ(a){a.hI=60027;}
function Rk(a){a.hI=60137;}
function EP(a){a.hI=60151;}
function C$(){Hz.call(this);this.ff=null;}
var Bac=null;var Bad=null;function Ih(a,b){var c=new C$();Kp(c,a,b);return c;}
function ALH(a,b,c){var d=new C$();ALU(d,a,b,c);return d;}
function Kp(a,b,c){TE(a,b,c);a.ff=Bac;}
function ALU(a,b,c,d){TE(a,b,c);a.ff=Bac;a.ff=d;}
function A5g(a){return Eg(a);}
function AMl(a){var b,c,d;b=P(Hz,AEU(a));c=b.data;if(Ry(a,b,0)==c.length)return b;d=new Bt;X(d);N(d);}
function JD(a){return a.ff.data.length;}
function AEU(a){var b,c,d,e;b=1;if(Jr(a)){c=a.ff.data;d=c.length;e=0;while(e<d){b=b+AEU(c[e])|0;e=e+1|0;}}return b;}
function O9(a){var b,c,d,e;b=1;c=a.ff.data;d=c.length;e=0;while(e<d){b=b+O9(c[e])|0;e=e+1|0;}return b;}
function Ry(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(Jr(a)){d=a.ff.data;c=d.length;f=0;while(f<c){e=Ry(d[f],b,e);f=f+1|0;}}return e;}
function Ia(a){AFg(a);EP(a);}
function IX(a){AGd(a);AGn(a);}
function U$(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=ON(Eg(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AHq(){Bac=P(C$,0);Bad=new AE8;}
function Ti(){B.call(this);this.tp=null;}
function AYj(a){Ij(a.tp,1);}
function Tg(){B.call(this);this.vT=null;}
function AWS(a){Ij(a.vT,0);}
function Th(){B.call(this);this.yj=null;}
function A0s(a){DQ(a.yj.bO.bi,null);}
function Tf(){B.call(this);this.FJ=null;}
function AU4(a){}
function Rt(){var a=this;H_.call(a);a.DC=null;a.FV=null;a.jt=null;a.o8=null;a.k8=null;a.gE=null;a.f7=null;}
function AQ9(a){var b,c,d,e;b=a.k.a/4|0;c=b+DE(a,1.0)|0;d=AK$(a.i);e=BK(b,a.k.b);a.cp.data[0].dK(d,e,a.bW);d.a=a.i.a+b|0;e.a=c-b|0;a.cp.data[1].dK(d,e,a.bW);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.cp.data[2].dK(d,e,a.bW);}
function VO(a,b){Kr(a.gE,b);JZ(a.gE,a.k8);G0(a.jt,b);FG(a.f7,b);}
function A0e(a){var b,c;b=AIh(a.f7);c=AIU(a.k8);return BK((b.a+a.o8.k.a|0)+c.a|0,b.b);}
function ABs(){B.call(this);this.sh=null;}
function APg(a){AEt(a.sh);}
function ABr(){B.call(this);this.wP=null;}
function ATL(a){var b;b=a.wP;DQ(b.bO.bi,b.tf);}
function ABt(){B.call(this);this.uu=null;}
function A1O(a){var b,c;b=a.uu;c=b.bO.bi.c1;if(b.c_.f7!==c)c=null;b.tf=c;}
var AAW=G(DG);
var Bae=null;function Dh(b,c){return Long_udiv(b, c);}
function AJr(b,c){return Long_urem(b, c);}
function DM(b,c){return Long_ucompare(b, c);}
function AKp(){Bae=F($rt_longcls());}
function AE0(){B.call(this);this.Cf=null;}
function A02(a){ZS(a.Cf);}
function Yj(){B.call(this);this.zA=null;}
function AXX(a){var b;b=a.zA;Ep(b.y,ZA(b));}
function ACs(){B.call(this);this.ow=null;}
var Baa=null;function AQY(){var a=new ACs();AF0(a);return a;}
function AF0(a){a.ow=BN();}
function WZ(a,b,c,d,e){var f;f=new Lw;f.uL=e;f.lN=c;f.l5=d;f.hV=b;Bz(a.ow,f);}
function AD3(a){return GB(a.ow,Baa);}
function ABo(b){return b===null?C(21):ADm(b);}
function AMk(){Baa=P(Lw,0);}
function Km(){var a=this;B.call(a);a.t_=null;a.lx=null;a.k7=null;a.jO=null;a.kg=null;a.jP=null;a.hc=null;}
function M9(b,c,d,e){var f,g,h;f=new Km;f.jO=new Bh;f.kg=new Bh;f.jP=new Bh;f.hc=b;g=CA(e,b.hV);if(g!==null)g.i4=g.i4+1|0;else{g=new ADB;h=KM(c,b.hV,d);g.i4=1;g.ms=h;D0(e,b.hV,g);}e=g.ms;f.t_=e;Y(f.jO,e.bg|0,e.bA|0);e=KM(c,b.lN,d);f.lx=e;Y(f.kg,e.bg|0,e.bA|0);b=KM(c,b.l5,d);f.k7=b;Y(f.jP,b.bg|0,b.bA|0);return f;}
function ADv(b,c,d){var e,f,g;e=c.hc.hV;f=CA(d,e);g=f.i4-1|0;f.i4=g;if(!g){LP(d,e);Ji(b,f.ms);}Ji(b,c.lx);Ji(b,c.k7);}
var OX=G(0);
var A$_=null;var A_a=null;function AG_(){A$_=E6(40,40,40,200);A_a=E6(43,43,43,128);}
function LI(){var a=this;FA.call(a);a.gz=null;a.cz=null;a.e8=null;a.h8=null;a.gH=null;a.mc=null;a.m2=null;a.BC=0;a.rv=0;a.oW=null;a.gq=null;a.gr=null;a.hk=null;a.hY=null;a.h4=null;a.jD=null;a.gV=null;a.r8=0;a.ks=0;}
function ATt(a){OO(a.h8);Y7(a.cz);Pe(a);}
function Pe(a){a.gq=BY(a.gq,null);a.gr=BY(a.gr,null);a.hk=BY(a.hk,null);a.hY=BY(a.hY,null);a.h4=BY(a.h4,null);a.jD=BY(a.jD,null);a.gV=BY(a.gV,null);}
function XP(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hk;break a;case 60084:c=a.gr;break a;case 60086:c=a.gq;break a;case 60136:c=a.gV;break a;case 60137:c=a.jD;break a;case 60151:c=a.hY;break a;default:c=null;break a;}c=a.h4;}return c;}
function Kr(a,b){var c,d;a.gH=b;c=BR(a.mc,b.p8);d=BR(a.m2,b.pg);if(!(c&&d)){a.mc=b.p8;a.m2=b.pg;if(a.bW!==0.0)Tu(a);}}
function ANV(a,b,c){Qn(a.cz,c);if(a.mc!==null)Tu(a);}
function Tu(a){var b,c,d,e,f;TB(a.h8);b=a.cz;c=a.mc;d=a.bW;e=a.gz.bL;f=b.hj;b.dh=AKg(c.im,c.ha*d,c.kn,c.kE,f,e);SZ(a.cz,1.25,a.gz.bL);Pe(a);b=Fu(a.gz,a.m2);a.gq=BY(a.gq,FN(a,60086,b));a.gr=BY(a.gr,FN(a,60084,b));a.hk=BY(a.hk,FN(a,60035,b));a.hY=BY(a.hY,FN(a,60151,b));a.h4=BY(a.h4,FN(a,60027,b));a.jD=BY(a.jD,FN(a,60137,b));a.gV=BY(a.gV,FN(a,60136,b));a.r8=Bd(Bd(Bd(Bd(BU(a.hk),BU(a.hY)),BU(a.h4)),BU(a.gV)),BU(a.gV));a.ks=Bd(BU(a.gr),BU(a.gq));PM(a);}
function PM(a){TT(a,a.cS.a,Bc(a.e8.fG.data.length,a.cz.eg));T9(a);}
function A1y(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;c=a.gH.bv.ep;d=a.i;Bv(b,d.a,d.b,a.k,c);BF(a.cz.dh);e=a.cz.eg;f=a.e8.fG.data.length;if(!f)return;g=Be(f,In(a.k.b,e)+7|0);h=a.h8;if(h.data.length<g)a.h8=Z6(g,h,a.cz,a.BC,a.rv,a.e8);NW(b,a.i,a.k);i=a.W.b;j=f-1|0;k=AHm(i,e,j);i=AHm((a.W.b+a.k.b|0)-1|0,e,j);a.BC=k;a.rv=i;l=a.k.a;m=DE(a,4.0);n=DE(a,1.0)+a.ks|0;o=DE(a,3.0);p=DE(a,5.0);q=DE(a,1.0);r=0;s=a.i.a-a.W.a|0;t=DE(a,1.0);d=a.fm;u=t+(d===null?0:F0(d))|0;while(k<=i){v=a.e8.fG.data[k];h
=a.h8.data;t=k%h.length|0;w=h[t];Ym(w,v.hw,b,e,l,0,k,t);x=Bc(e,k)-a.W.b|0;y=null;z=m+Bc(n,v.j9)|0;ba=a.oW!==v?0:1;if(ba){Y(a.gz.d8,a.k.a,e);d=a.i;Bv(b,d.a,d.b+x|0,a.gz.d8,a.gH.bv.gF);}bb=XP(a,v.hK);bc=XP(a,v.hI);if(bb!==null){d=a.gH;bd=d.j4.data[0];AE$(a,b,bb,s+z|0,(a.i.b+x|0)-q|0,!ba?c:d.bv.gF,bd.hh);}if(bc!==null){d=a.gH;bd=d.j4.data[0];AE$(a,b,bc,((s+z|0)+a.ks|0)+o|0,(a.i.b+x|0)-q|0,!ba?c:d.bv.gF,bd.hh);}be=FR(v.hw);bf=(((z+a.ks|0)+o|0)+a.r8|0)+p|0;r=Bd(r,(bf+be|0)+u|0);QH(w,a.i.b+x|0,s+bf|0,b,l,e,0,a.gH,
null,null,null,ba,0,y);k=k+1|0;}d=a.cS;if(d.a!=r){d.a=r;T9(a);}Gm(b);}
function AE$(a,b,c,d,e,f,g){Ct(a.cz.jK,0.0,0.0,BU(c),CR(c));Cr(a.cz.iv,c.eZ);Hp(a.cz,b,c,d,e,g,f);}
function A4y(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cz.eg;f=((b.j.b-a.i.b|0)+a.W.b|0)/e|0;if(f>=0){g=a.e8.fG.data;if(f<g.length){h=g[f];if(!Xg(a,b,f)){b=h.oY;if(b!==null)b.e();}}}}return 1;}
function AOS(a,b,c){var d,e,f,g;d=a.cz.eg;e=((b.j.b-a.i.b|0)+a.W.b|0)/d|0;if(!c&&e>=0){f=a.e8.fG.data;if(e<f.length){g=f[e];if(Xg(a,b,e)){b=g.jw;if(b!==null)b.e();}else{a.oW=g;b=g.cW;if(b!==null)b.e();}}}return A$x;}
function Xg(a,b,c){var d,e,f,g,h,i,j;d=a.e8.fG.data[c];e=DE(a,4.0);f=DE(a,1.0);g=Bd(BU(a.gr),BU(a.gq));h=e+Bc(f+g|0,d.j9)|0;i=(a.i.a-a.W.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FN(a,b,c){var d,e,f;d=a.gz.bL;e=NY(b);f=a.cz;return AEj(d,e,c,1,f.eg,f.i3);}
function AHm(b,c,d){return Be(b/c|0,d);}
function AKC(){LI.call(this);this.rJ=null;}
function Uy(a){var b=new AKC();AVq(b,a);return b;}
function AVq(a,b){L8(a);a.e8=AN6(P(Hz,0));a.h8=P(FD,0);a.gz=b;a.cz=ARC(b.cJ);}
function ET(a){a.e8=AN6(AMl(a.rJ));if(a.bW!==0.0)PM(a);}
function D3(a,b){a.rJ=b;ET(a);}
function JZ(a,b){var c;c=a.gH.bv;Jz(b,c.lY,c.l3);return b;}
function AG7(){var a=this;B.call(a);a.nV=null;a.f_=null;}
function ANt(a,b){var c=new AG7();AOD(c,a,b);return c;}
function AOD(a,b,c){a.nV=b;a.f_=c;}
function AU1(a){return a.f_.W.b/MZ(a)|0;}
function A4J(a){var b;b=a.f_;return In((b.W.b+b.k.b|0)-1|0,MZ(a));}
function AV1(a,b){var c;b=Bc(b,MZ(a));c=a.f_;return (b+c.i.b|0)-c.W.b|0;}
function ARx(a){return a.f_.i;}
function AXG(a){return a.f_.k;}
function AR$(a,b,c){var d;d=a.nV;d.u4=b;d.rz=c;}
function A1Q(a,b){return ADQ(a.nV,b);}
function MZ(a){return a.f_.cz.eg;}
function P4(){CF.call(this);this.BM=null;}
function ANk(a,b){var c;c=a.i;Bv(b,c.a,c.b,a.k,a.BM);}
function ACA(){var a=this;B.call(a);a.nU=FU;a.m3=0;a.rq=0;}
var X5=G();
function AWh(a){}
function Tj(){var a=this;B.call(a);a.BY=null;a.BV=null;a.BW=null;}
function ARB(a){var b,c,d,e,f;b=a.BY;c=a.BV;d=a.BW;e=Bj();f=new J;L(f);b=H(f,b);Br(b,9);b=H(b,c);Br(b,9);H(b,d);Bf(e,K(f));}
function Qp(){B.call(this);this.zC=null;}
function ANs(a,b){var c;c=a.zC;LZ(c,F7(b,c.bU.cS.b-c.k.b|0));}
function Qo(){B.call(this);this.Ap=null;}
function ANL(a,b){var c;c=a.Ap;Lt(c,F7(b,c.bU.cS.a-c.k.a|0));}
var AE8=G();
function AUr(a,b,c){b=b;c=c;return ON(Eg(b),Eg(c));}
var Un=G(0);
var A$t=null;function AQN(){AQN=Bm(Un);AV7();}
function AV7(){A$t=S(C(238));}
function Lw(){var a=this;B.call(a);a.uL=null;a.lN=null;a.l5=null;a.hV=null;}
function AMt(){Hc.call(this);this.fG=null;}
function AN6(a){var b=new AMt();APv(b,a);return b;}
function APv(a,b){a.fG=b;}
function A54(a,b){return a.fG.data[b].hw;}
var Db=G(Bt);
var ALy=G(FJ);
function AYZ(a){var b=new ALy();ASm(b,a);return b;}
function ASm(a,b){a.k4=1;a.ln=1;a.nJ=b;}
function AMz(){var a=this;B.call(a);a.o9=null;a.na=null;a.eT=null;a.mZ=null;a.bB=null;a.p2=null;a.n4=null;a.f8=null;a.g3=null;a.j0=null;}
function AWq(a,b){var c=new AMz();A1t(c,a,b);return c;}
function A1t(a,b,c){var d,e,f;a.eT=b;a.mZ=c;a.bB=AYh();b=new J;L(b);a.j0=b;a.f8=Ka();b=new Tl;d=AMb(16);b.gX=0;b.eb=P(JU,d);b.yB=0.75;Vb(b);a.g3=b;b=new Vq;c=a.bB;e=a.j0;f=a.f8;b.dN=c;b.mO=e;b.ty=f;a.p2=b;b=new U9;b.c5=c;b.nz=e;b.sz=f;a.n4=b;}
function XQ(a){var b,c,d,e,f,g,h;a:{b=Nw(a.eT.fi);c=b.jB;if(c.dd>0){d=c.c6;e=0;b:while(true){f=b.jB.b_.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cH;if(HG(a.f8,g))CA(a.f8,g);else{h=a.f8;D0(h,g,C3(h.dd));}c=c.c4;if(d!=b.jB.c6)break b;}e=e+1|0;}b=new Ip;X(b);N(b);}}b=a.eT.fL;if(b!==null)AAv(a,b);Bu(a.bB,a.eT.fi.dd);b=S7(Nw(a.eT.fi));while(FB(b)){c=QM(b);Hf(a.bB,a.j0.I,M(c));BL(a.j0,c);}b=S7(Nw(a.eT.fi));while(FB(b)){c=QM(b);c=CA(a.eT.fi,c);Bu(a.bB,c.p);c=B9(c);while(Cb(c)){g=Cc(c);g=CA(a.f8,g);Bu(a.bB,
g.br);}}if(a.eT.fL===null)Bu(a.bB,(-1));else{Bu(a.bB,a.g3.gX);ABa(a,a.eT.fL);}if(a.mZ===null)Bu(a.bB,(-1));else{Bu(a.bB,1);AFB(a.mZ,a.bB,a.g3);}a.o9=Rv(a.bB);a.na=GH(K(a.j0));}
function AAv(a,b){var c,d,e,f,g,h;if(ADF(a.g3,b))OL(a.g3,b);else{c=a.g3;d=C3(c.gX);if(b===null){e=ZV(c);if(e===null){c.mr=c.mr+1|0;e=ADJ(c,null,0,0);f=c.gX+1|0;c.gX=f;if(f>c.p3)XK(c);}}else{g=M1(b);h=g&(c.eb.data.length-1|0);e=XV(c,b,h,g);if(e===null){c.mr=c.mr+1|0;e=ADJ(c,b,h,g);f=c.gX+1|0;c.gX=f;if(f>c.p3)XK(c);}}e.cQ=d;}b=b.cT;if(b===null)return;c=new WB;c.sD=a;b.fs(c);}
function ABa(a,b){var c,d,e,f;c=(OL(a.g3,b)).br;Bu(a.bB,c);if(b instanceof N6)Bu(a.bB,(-1));else if(!(b instanceof Ly))Bu(a.bB,0);else Bu(a.bB,1);d=a.p2;Bu(d.dN,b.e5.cZ());e=b.e5;f=new WX;f.wN=d;e.fs(f);d=a.n4;Bu(d.c5,b.fM.cZ());e=b.fM;f=new UN;f.vr=d;e.fs(f);d=b.lH;Bu(a.bB,d.cZ());e=new VH;e.BK=a;d.fs(e);d=b.hZ;Bu(a.bB,d.cZ());d=d.ca();while(d.cM()){e=d.cc();PI(a.p2,e.lI);Hq(a.n4,e.la);Bu(a.bB,e.sb);}d=b.vn;if(d===null)Bu(a.bB,(-1));else Bu(a.bB,(CA(a.f8,d)).br);b=b.cT;Bu(a.bB,b.cZ());d=new QI;d.qY=a;b.fs(d);}
function Pd(){B.call(this);this.Bm=null;}
function AWP(a,b){var c,d,e,f,g,h,i,j;c=a.Bm;if(c.fZ){d=E$(c);e=new J;L(e);H(H(e,d),C(435));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CT(b[0]);g=EY(b[1]);h=(CT(b[2])).data[0];if(c.h.cx==h){i=null;j=null;if(b.length>=5){i=CT(b[3]);j=EY(b[4]);}b=Eh(c);if(!Bk(b,C(203))&&!Bk(b,C(419))?0:1)Oq(c.h,f,g);else{W7(c.h,f,g,i,j);E4(c.h.dQ);E4(c.h.dY);NA(c.h);K0(c.h);OH(c);}}}
function ADA(){B.call(this);this.sL=null;}
function A1J(a,b){var c,d,e,f;c=a.sL;if(c.fj!=3){b=b.data;d=CT(b[0]);e=EY(b[1]);W7(c.h,d,e,null,null);if(c.fZ){b=E$(c);f=J6(EF(),c.Bi);c=new J;L(c);H(HY(H(H(c,b),C(436)),f),C(201));$rt_globals.console.info($rt_ustr(K(c)));}}}
var OD=G(BJ);
function ST(){var a=this;B.call(a);a.wC=null;a.wD=null;a.wB=0;}
function AZl(a,b){var c,d,e;c=a.wC;d=a.wD;e=a.wB;d.g(VU(c,(b.j.a+e|0)-c.fb.a|0));}
function SS(){var a=this;B.call(a);a.r_=null;a.r9=null;a.r$=0;}
function A43(a,b){var c,d,e;c=a.r_;d=a.r9;e=a.r$;d.g(Rb(c,(b.j.b+e|0)-c.fb.b|0));}
var Fq=G(0);
function XW(){var a=this;B.call(a);a.kb=0;a.qD=0;a.lU=0;a.h5=0;a.jA=null;}
function Cb(a){return a.kb>=a.lU?0:1;}
function Cc(a){var b,c;QS(a);b=a.kb;a.h5=b;c=a.jA;a.kb=b+1|0;return c.iY(b);}
function AAg(a){var b,c,d;if(a.h5<0){b=new Db;X(b);N(b);}QS(a);a.jA.mC(a.h5);a.qD=a.jA.b7;c=a.h5;d=a.kb;if(c<d)a.kb=d-1|0;a.lU=a.lU-1|0;a.h5=(-1);}
function QS(a){var b;if(a.qD>=a.jA.b7)return;b=new Ip;X(b);N(b);}
function LB(){var a=this;OM.call(a);a.yd=null;a.AZ=null;}
function AIp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.yd;e=0;f=0;g=a.AZ;a:{b:{while(true){if((e+32|0)>f&&Ee(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cj(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BJ;c=new J;L(c);V(H(V(H(c,C(437)),l),C(100)),h);Bp(b,K(c));N(b);}if(Cj(b)<m){b=new Oy;X(b);N(b);}if(m<0){b=new BJ;c=new J;L(c);H(V(H(c,C(101)),m),C(102));Bp(b,K(c));N(b);}n=b.bd;h=n+b.nC|0;e=0;while(e<m){o=k+1|0;i=b.qe.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bd=n+m|0;e=0;}if(!Ee(c)){p=!Ee(b)&&e>=f?A95:A94;break a;}i=g.data;n=Cj(c);o=i.length;n=Be(n,o);q=new AC_;q.uc=b;q.BH=c;p=AMy(a,d,e,f,g,0,n,q);e=q.wT;if(p===null&&0==q.m5)p=A95;k=q.m5;h=0;if(c.qK){b=new KL;X(b);N(b);}if(Cj(c)<k)break;if(h>o){b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(103)),h),C(97)),o),41);Bp(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BJ;c=new J;L(c);V(H(V(H(c,C(105)),l),C(100)),o);Bp(b,K(c));N(b);}if(k<0){b=new BJ;c=new J;L(c);H(V(H(c,C(101)),k),C(102));Bp(b,K(c));N(b);}o=c.bd;m=0;while
(m<k){l=o+1|0;n=h+1|0;AA9(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bd=c.bd+k|0;if(p!==null)break a;}b=new J1;X(b);N(b);}b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(103)),k),C(97)),h),41);Bp(b,K(c));N(b);}FH(b,b.bd-(f-e|0)|0);return p;}
var TP=G(LB);
function AMy(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NQ(h,2))break a;i=A95;break a;}c=k+1|0;n=j[k];if(!GO(a,n)){c=c+(-2)|0;i=EC(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NQ(h,3))break a;i=A95;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!GO(a,n))break b;if(!GO(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(OT(p)){c=k+(-3)|0;i=EC(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EC(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NQ(h,4))break a;i=A95;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cj(h.BH)<2?0:1)break a;i=A94;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!GO(a,n))break c;if(!GO(a,o))break c;if(!GO(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=J_(r);m=c+1|0;j[c]=Jw(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EC(1);break a;}c=k+(-3)|0;i
=EC(1);}h.wT=c;h.m5=f;return i;}
function GO(a,b){return (b&192)!=128?0:1;}
function AD9(){var a=this;B.call(a);a.DO=null;a.DP=null;a.DN=null;}
function Wr(){B.call(this);this.q_=null;}
function AVF(a,b){var c,d;c=a.q_;d=c.ek+1|0;c.ek=d;c=new J;L(c);H(H(V(c,d),C(438)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function Pv(){B.call(this);this.vF=null;}
function AT5(a){return a.vF.hn();}
function Pu(){B.call(this);this.uR=null;}
function AY7(a){return a.uR.hn();}
function ABi(){B.call(this);this.AX=null;}
function A2u(a){return a.AX.hn();}
var XJ=G();
function A3f(a){return Fb(1);}
function AA3(){B.call(this);this.tX=null;}
function A5p(a,b){a.tX.g(FS(b));}
var AGM=G();
function ADy(){B.call(this);this.wk=null;}
function AP4(a,b){a.wk.e();}
var AIJ=G();
var AHO=G();
function XT(){B.call(this);this.vI=null;}
function AOO(a,b){var c,d,e;c=a.vI;d=BT(b);e=new J;L(e);H(H(e,C(439)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new ACH;d.DR=c;d.tH=b;e=new ACJ;e.F3=c;We(b,d,e);}
function XS(){B.call(this);this.x7=null;}
function AUE(a,b){var c,d,e;c=a.x7;d=BT(b);e=new J;L(e);H(H(e,C(440)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new P$;d.C9=c;HV(b,d);}
function SD(){B.call(this);this.uM=null;}
function AT7(a){ABS(a.uM);}
function SC(){B.call(this);this.yu=null;}
function AZC(a){AEo(a.yu);}
function SF(){B.call(this);this.y9=null;}
function A41(a){AEF(a.y9);}
function SE(){B.call(this);this.CE=null;}
function AWZ(a){Z5(a.CE);}
function AB7(){B.call(this);this.rA=null;}
function AMP(a){ET(a.rA);}
var AF5=G();
function P6(b,c,d){return AHF(b,0,c,d,VE());}
function AHF(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BP(c,d);h=g>=0?0:1+Rs(f,2.0)|0;i=g>0?0:1+Rs(f,3.0)|0;j=P(C$,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(441)),g);k[g]=AHF(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new C$;n=new J;L(n);V(H(n,C(442)),g);Kp(m,K(n),l);n=new RP;n.uk=m;m.oY=n;switch((l+g|0)%3|0){case 0:break;case 1:Rk(m);break a;case 2:m.hI=60136;break a;default:break a;}LQ(m);}if(VG(f)<0.25){n=Kc(m.hw,0);n.bE=n.bE|2;}k[h+g|0]=m;g=g+1|0;}n=ALH(b,c,j);b=new Xp;b.w_=n;b.xb=e;n.jw=b;n.cW
=b;if((c+c|0)>d)IX(n);else Ia(n);return n;}
function AB8(){B.call(this);this.t2=null;}
function AQv(a){ET(a.t2);}
function T6(){B.call(this);this.tC=null;}
function AVz(a){ET(a.tC);}
function ADC(){var a=this;B.call(a);a.rp=null;a.rr=null;}
function A5w(a){var b,c;b=a.rp;c=a.rr;DX(b);c.e();}
function Ra(){var a=this;B.call(a);a.gp=null;a.k0=null;a.jn=null;a.qM=null;a.dl=null;a.l8=0;}
function ABf(a,b){if(!BR(b.o4,a.qM)){a.qM=b.o4;Ob(a);}}
function Ob(a){a.dl=BY(a.dl,null);}
function AHu(a,b){var c,d;c=Fu(b,a.qM);d=Fd(c);a.dl=BY(a.dl,AEj(b.bL,NY(60088),c,0,d,0));}
function TW(a,b){return a.dl!==null&&Gx(b,a.gp,a.k0)?1:0;}
function Xd(){var a=this;B.call(a);a.wE=null;a.wF=null;}
function AZJ(a){var b,c;b=a.wE;c=a.wF;II(b.bO,c);Kf(c);b.b1();}
function Xc(){B.call(this);this.xj=null;}
var AII=G();
var DT=G(Bt);
function AIb(){var a=this;B.call(a);a.jI=null;a.n3=0;a.gg=0;}
function AYh(){var a=new AIb();AWp(a);return a;}
function AWp(a){a.n3=0;a.jI=BQ(16);a.gg=0;}
function Hf(a,b,c){Bu(a,b);Bu(a,c);}
function Bu(a,b){var c,d;c=a.jI;d=c.data.length;if(d==a.gg)a.jI=JB(c,d*2|0);c=a.jI.data;d=a.gg;a.gg=d+1|0;c[d]=b;}
function Rv(a){var b,c,d,e,f;b=a.n3;if(b&&a.gg!=b){c=DY();b=a.n3;d=a.gg;e=new J;L(e);H(V(H(V(H(e,C(443)),b),C(444)),d),C(445));Bf(c,K(e));}f=a.jI;b=f.data.length;d=a.gg;if(b!=d)f=JB(f,d);return f;}
function Tl(){var a=this;El.call(a);a.gX=0;a.eb=null;a.mr=0;a.yB=0.0;a.p3=0;}
function AMb(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vb(a){a.p3=a.eb.data.length*a.yB|0;}
function ADF(a,b){return Wt(a,b)===null?0:1;}
function OL(a,b){var c;c=Wt(a,b);if(c===null)return null;return c.cQ;}
function Wt(a,b){var c,d;if(b===null)c=ZV(a);else{d=M1(b);c=XV(a,b,d&(a.eb.data.length-1|0),d);}return c;}
function XV(a,b,c,d){var e;e=a.eb.data[c];while(e!==null&&!(e.nY==d&&(b!==e.cH?0:1))){e=e.iC;}return e;}
function ZV(a){var b;b=a.eb.data[0];while(b!==null&&b.cH!==null){b=b.iC;}return b;}
function ADJ(a,b,c,d){var e,f;e=new JU;WH(e,b,null);e.nY=d;f=a.eb.data;e.iC=f[c];f[c]=e;return e;}
function XK(a){var b,c,d,e,f,g,h,i;b=a.eb.data.length;b=AMb(!b?1:b<<1);c=P(JU,b);d=c.data;e=0;f=b-1|0;while(true){g=a.eb.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nY&f;i=h.iC;h.iC=d[b];d[b]=h;h=i;}e=e+1|0;}a.eb=c;Vb(a);}
function Vq(){var a=this;B.call(a);a.dN=null;a.mO=null;a.ty=null;}
function PI(a,b){var c;if(!(b instanceof ME)){Bu(a.dN,3);AEl(a,b);Bu(a.dN,b.jN);}else{c=b;Bu(a.dN,5);AEl(a,c);Bu(a.dN,c.jN);Bu(a.dN,c.xt);b=c.lj;Bu(a.dN,b.p);c=new Xr;c.ry=a;FE(b,c);}}
function AEl(a,b){var c;c=b.ee.gM;Hf(a.dN,a.mO.I,M(c));Bu(a.dN,b.ee.dq);O_(a,b.ka);BL(a.mO,c);}
function O_(a,b){if(b===null)Bu(a.dN,(-1));else Bu(a.dN,(CA(a.ty,b)).br);}
function U9(){var a=this;B.call(a);a.c5=null;a.nz=null;a.sz=null;}
function Hq(a,b){var c,d,e;if(b instanceof HU){c=b;Bu(a.c5,9);Zs(a,c.fF);}else if(b instanceof Ky){d=b;Bu(a.c5,3);ZZ(a,d);Bu(a.c5,d.q4);Zs(a,d.ir);}else if(b instanceof JF){e=b;Bu(a.c5,4);Hq(a,e.ie);Hq(a,e.hL);}else if(b===null)Bu(a.c5,(-1));else{Bu(a.c5,5);ZZ(a,b);Bu(a.c5,b.AN);}}
function ZZ(a,b){var c;c=b.eH.gM;Hf(a.c5,a.nz.I,M(c));Bu(a.c5,b.eH.dq);b=b.f2;if(b===null)Bu(a.c5,(-1));else Bu(a.c5,(CA(a.sz,b)).br);BL(a.nz,c);}
function Zs(a,b){var c;Bu(a.c5,b.p);c=new WK;c.x8=a;FE(b,c);}
function Xw(){var a=this;B.call(a);a.zv=0;a.zu=0;}
function TA(){B.call(this);this.s1=null;}
function AUG(a,b){var c;c=a.s1;DO(c,b);HM(c,null);Wq(c);}
var Zk=G(DG);
var Baf=null;function AJV(){Baf=F($rt_doublecls());}
var Kq=G();
var Bag=FU;var Bah=null;var Bai=null;function AGT(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.rq=I1(Di(d,D(0, 2147483648)),FU)?0:1;e=Di(d,D(4294967295, 1048575));f=G5(A77(d,52))&2047;if(I1(e,FU)&&!f){c.nU=FU;c.m3=0;return;}if(f)e=A6I(e,D(0, 1048576));else{e=H3(e,1);while(I1(Di(e,D(0, 1048576)),FU)){e=H3(e,1);f=f+(-1)|0;}}g=Bai.data;h=f<<16>>16;i=0;j=g.length;k=BP(i,j);if(k>0){c=new BX;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BP(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Ja(e,Bah.data[h],i);if(APn(m,Bag)){while(DM(m,Bag)<=0){j=j+(-1)|0;m=CW(Ck(m,Bq(10)),Bq(9));}g=Bai.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Ja(e,Bah.data[h],i);}e=H3(e,1);d=CW(e,Bq(1));g=Bah.data;h=j+1|0;n=g[h];f=i-1|0;n=Ja(d,n,f);o=Ja(J6(e,Bq(1)),Bah.data[h],f);p=Bq(1);while(true){q=Ck(p,Bq(10));if(DM(Dh(m,q),Dh(o,q))<=0)break;p=q;}r=Bq(1);while
(true){s=Ck(r,Bq(10));if(DM(Dh(m,s),Dh(n,s))>=0)break;r=s;}h=DM(p,r);e=h>0?Ck(Dh(m,p),p):h<0?CW(Ck(Dh(m,r),r),r):Ck(Dh(CW(m,AHR(r,Bq(2))),r),r);if(DM(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dh(e,Bq(10));if(DM(e,D(2808348672, 232830643))<0)break;}else if(DM(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ck(e,Bq(10));}c.nU=e;c.m3=j-330|0;}
function Ja(b,c,d){var e,f,g,h,i,j,k,l;e=Di(b,Bq(65535));f=Di(Gq(b,16),Bq(65535));g=Di(Gq(b,32),Bq(65535));h=Di(Gq(b,48),Bq(65535));i=Di(c,Bq(65535));j=Di(Gq(c,16),Bq(65535));k=Di(Gq(c,32),Bq(65535));l=Di(Gq(c,48),Bq(65535));return CW(CW(CW(H3(Ck(l,h),32+d|0),H3(CW(Ck(l,g),Ck(k,h)),16+d|0)),H3(CW(CW(Ck(l,f),Ck(k,g)),Ck(j,h)),d)),Gq(CW(CW(CW(Ck(k,e),Ck(j,f)),Ck(i,g)),H3(CW(CW(CW(Ck(l,e),Ck(k,f)),Ck(j,g)),Ck(i,h)),16)),32-d|0));}
function AGD(){Bag=Dh(Bq(-1),Bq(10));Bah=AJP([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);Bai=A7w([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function UH(){B.call(this);this.rY=null;}
function ANx(a){Hr(a.rY,37,3);}
function UI(){B.call(this);this.sI=null;}
function APH(a){Hr(a.sI,40,3);}
function UJ(){B.call(this);this.uj=null;}
function A45(a){Hr(a.uj,42,3);}
function UK(){B.call(this);this.yf=null;}
function AR2(a){Hr(a.yf,45,3);}
function UL(){B.call(this);this.yK=null;}
function AUk(a){Hr(a.yK,45,5);}
function Pi(){B.call(this);this.Bb=null;}
function A6j(a,b){var c,d;c=a.Bb;d=new Bt;Bp(d,$rt_str(b.message));c.g(d);}
var Wu=G(0);
var A9R=null;function A7h(){A7h=Bm(Wu);A2T();}
function A2T(){A9R=new $rt_globals.TextDecoder("utf-16");}
function ACU(){var a=this;B.call(a);a.t7=0;a.CX=0;}
function F7(a,b){var c;c=a.CX;if(c<=0)return 0;return Zx(a.t7,b,c);}
function RP(){B.call(this);this.uk=null;}
function A1N(a){var b,c,d;b=a.uk;c=Bj();d=Eg(b);b=new J;L(b);H(H(b,C(446)),d);Bf(c,K(b));}
function Xp(){var a=this;B.call(a);a.w_=null;a.xb=null;}
function A1H(a){var b,c;b=a.w_;c=a.xb;if(!Jr(b))Ia(b);else IX(b);c.e();}
function X4(){var a=this;B.call(a);a.qX=null;a.zs=null;a.vS=0;a.wO=0;}
function Ov(a,b){return Cj(a.zs)<b?0:1;}
function Wa(){B.call(this);this.vm=null;}
function AUM(a,b){DO(a.vm,b);}
var AIi=G();
function AFr(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(ED()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new T_;d.addEventListener("change",Bw(e,"handleEvent"));d.click();}
var AFN=G(0);
function SA(){B.call(this);this.uJ=null;}
function A0m(a){MJ(a.uJ);}
function ADR(){var a=this;B.call(a);a.xH=null;a.xG=null;}
function AWd(a){DQ(a.xH,a.xG);}
var Zc=G();
var Baj=null;function Oq(b,c,d){R4(b,c,d,0);}
function R4(b,c,d,e){Yi(b,c,d,null,null,e);}
function Yi(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Mt(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CK(b);c=b.E;if(c.data.length<i)b.E=AF7(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fn=h.fn+n|0;}else b.E.data[m]=Ec(ZO(h,d,0));m=m+1|0;}NA(b);if(j)b.dm=AHX(AIO(h));E4(b.dY);E4(b.dQ);o=b.dY;g=0;while(g<k){D0(o,DW(Bb(h),Bb(h)),DW(Bb(h),Bb(h)));g=g+1|0;}p=b.dY;o=b.dQ;q=Nm(Op(p));while(FB(q)){r=OW(q);s=r.cH;p=r.cQ;BF(Baj);r=CA(o,p);if(r===null){r=BN();D0(o,p,r);}Bz(r,s);}if(o.py===null){p=new Q0;p.w1=o;o.py=p;}p=o.py;r=new AAr;N8(r,
p.w1);while(FB(r)){Og(r);o=r.hr.cQ;p=A9k;c=P(B,o.p);d=c.data;GB(o,c);Ll(c,p);g=0;t=d.length;while(g<t){p=d[g];KT(o,g);o.cm.data[g]=p;g=g+1|0;}}R0(h);if(e!==null&&f!==null){p=ASw(e,f);Ql(p);b.e_=AYK(p.pN,p.i8);b.dm=AHX(p.p_);}}
function W7(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Mt(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=AEi(b,i);o=AEi(b,j);p=(I$(Cf(b,n.a),n.b)).data[0].s;q=(I$(Cf(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=ZO(h,d,i);if(!r)g=Mk(p,g);if(r==s)g=Mk(g,q);t=n.a+r|0;u=Ec(g);c=b.E.data;v=c[t];c[t]=u;if(!k&&JJ(v)==JJ(u)){t=0;while(t<JJ(v)){o=v.s.data[t];w=u.s.data[t];x=o.b4;y=x!=5?0:1;if(!y&&x&&!w.b4){w.b4=x;w.bE=o.bE;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AIO(h);w=La(i,j,(-1));X8(b.dm,w,u);}else if(e!==null&&f!==null){v=ASw(e,f);Ql(v);w=La(i,j,(-1));X8(b.dm,w,v.p_);n=b.e_;n.fL=b.dm.dk.cq;n.fi=v.i8;}}R0(h);}
function ZO(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=P(Cz,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=Ej(EK(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ALJ(){Baj=new Wh;}
var Z7=G(0);
var PQ=G(0);
var FY=G();
function AA6(){FY.call(this);this.Bo=null;}
function On(a,b){var c,d,e;c=0;while(true){d=a.Bo;if(d.kx===null)d.kx=B9(d.y6);if(!Cb(d.kx))e=0;else{c=b.G(Cc(d.kx));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var RZ=G(0);
function Ph(){var a=this;B.call(a);a.DU=null;a.DV=null;a.DS=0;a.DT=0;}
var AEz=G();
function ANX(a,b){b=b;b.cY=BY(b.cY,null);}
var AGW=G(0);
function AKg(b,c,d,e,f,g){f=f.data;f[JG(0,0)]=GN(g,b,c,d,0);f[JG(0,1)]=GN(g,b,c,d,2);f[JG(1,0)]=GN(g,b,c,e,0);f[JG(1,1)]=GN(g,b,c,e,2);return f[JG(0,0)];}
function JU(){var a=this;Ha.call(a);a.nY=0;a.iC=null;}
var Ip=G(Bt);
var AEM=G();
function A3G(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEL(){B.call(this);this.tg=null;}
function AY6(a,b){var c,d,e;c=a.tg;d=0;e=b.length;while(d<e){c.g(AHW(b[d],P(BB,0)));d=d+1|0;}}
function AD$(){B.call(this);this.CD=null;}
function AZ0(a,b){var c,d;c=a.CD;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A5Y(b,P(BB,0),P(BB,0)));}
function TH(){var a=this;B.call(a);a.by=null;a.rQ=null;a.js=null;a.oM=null;a.mG=null;a.gD=null;}
function YW(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=TL();e=a.by.d;f=Eh(e);e=HP(e);g=a.by.fH;if(Z2(g,f,e)!==null){h=new RS;h.si=a;h.sj=b;Ey(d,C(447),h);}if(OP(g,f,e)!==null){h=new RQ;h.AL=a;h.AK=b;Ey(d,C(448),h);}if(ACK(g,f,e)!==null){e=new RU;e.zo=a;e.zp=b;Ey(d,C(449),e);}e=new RR;e.C0=a;e.CZ=b;Ey(d,C(450),e);H6(a);if(Mi()){if(!a.by.e6){f=new S2;f.va=a;Ey(d,C(451),f);}f=new S3;f.xC=a;Ey(d,C(452),f);if(!a.by.e6&&Wo(H6(a))){f=new S1;f.sk=a;Ey(d,C(453),f);}}if(c!==null)Nt(d,c);f=TL();i=P(BB,5).data;i[0]=C(181);i[1]=C(192);i[2]
=C(209);i[3]=C(208);i[4]=C(203);j=i.length;k=0;while(k<j){b=i[k];e=new Sc;e.Ad=a;e.Ac=b;Ey(f,b,e);k=k+1|0;}If(d,C(454),Jd(f));c=TL();i=P(BC,3);l=i.data;g=a.mG;BF(g);m=new QV;m.yQ=g;l[0]=Da(C(455),m);g=a.mG;BF(g);m=new QT;m.AS=g;l[1]=Da(C(456),m);g=a.mG;BF(g);m=new QU;m.qQ=g;l[2]=Da(C(457),m);LY(c,C(458),CO(i),Bak);i=P(BC,2);l=i.data;g=a.js;BF(g);m=new UM;m.AW=g;l[0]=Da(C(459),m);g=a.js;BF(g);m=new UO;m.C3=g;l[1]=Da(C(460),m);If(c,C(461),CO(i));g=new ZX;g.zF=a;LY(c,C(462),g,Bak);if(a.by.cn.bL.mj){i=P(BC,2);l
=i.data;g=new AAw;g.sP=a;l[0]=Da(C(463),g);g=new AAu;g.Br=a;l[1]=Da(C(464),g);If(c,C(465),CO(i));}If(d,C(466),Jd(c));return Jd(d);}
function AAH(a,b){return YW(a,b,null);}
function H6(a){return a.by.cn.cG;}
function WS(a){var b;b=new Sh;b.u6=a;return b;}
function A0d(a){var b,c,d,e,f;b=P(BC,5);c=b.data;d=a.by;BF(d);e=new Tv;e.w2=d;c[0]=Da(C(467),e);e=a.by;BF(e);f=new Tw;f.sM=e;c[1]=Da(C(468),f);d=a.by;BF(d);e=new Tx;e.Bj=d;c[2]=Da(C(469),e);d=a.by;BF(d);e=new Ty;e.xW=d;c[3]=Da(C(470),e);d=a.by;BF(d);e=new TO;e.z8=d;c[4]=Da(C(471),e);return CO(b);}
function QR(a,b){var c;c=new Pb;c.ys=a;c.yt=b;return c;}
function K2(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DX(a.gD.cb);d=a.by.d;e=Eh(d);f=HP(d);g=a.by.fH;if(c===null)h=null;else{A8m();switch(Bal.data[c.fg]){case 1:h=OP(g,e,f);break a;case 2:h=Z2(g,e,f);break a;default:}b=new Fa;X(b);N(b);}}c=a.by;e=FI(c,b);g=Jt(c.d.h,e.bs,e.bw);f=Tr(c,g);if(h!==null){g=c.d;i=e.bs;j=e.bw;e=new AB9;e.F9=c;e.F8=b;e.F7=f;h.us(g,i,j,e,c.ko);}else{e=CA(c.d.h.dY,g);if(e!==null)Jc(c,e);else{e=CA(c.d.h.dQ,g);if(e!==null&&!EL(e))AAf(c.k$,b,e,c,f);else{c=c.k$;k=P(BC,1);l=k.data;e=new BC;f=c.cb;BF(f);g
=new ABX;g.B6=f;Cl(e,g,C(472));l[0]=e;Sg(c,b,CO(k));}}}}
function ACW(){var a=this;B.call(a);a.wg=null;a.wd=null;a.we=null;}
function ARG(a,b,c,d){var e,f,g,h;b=a.wg;e=a.wd;f=a.we;ACg(b,e);if(f!==null)d.nc.e();if(AC$(d)){f=d.ft;g=e.c8;h=e.gh;V$(b,BK((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nx,e,d.uq);}}
function ALE(){var a=this;B.call(a);a.iN=null;a.fn=0;}
function Mt(a){var b=new ALE();AW3(b,a);return b;}
function AW3(a,b){a.iN=b;a.fn=0;}
function Bb(a){var b,c;b=a.iN.data;c=a.fn;a.fn=c+1|0;return b[c];}
function R0(a){var b,c,d,e;if(a.fn!=a.iN.data.length){b=DY();c=a.iN.data.length;d=a.fn;e=new J;L(e);H(V(H(V(H(e,C(443)),c),C(473)),d),C(474));Bf(b,K(e));}}
function RE(){var a=this;B.call(a);a.D_=null;a.uO=0;}
function AXY(a,b){var c,d,e,f;c=a.uO;d=(CT(I5(b,0))).data;b=Bj();e=d[0];f=new J;L(f);V(H(V(H(f,C(475)),c),C(476)),e);Bf(b,K(f));b=Bj();e=d[1];f=new J;L(f);V(H(V(H(f,C(475)),c),C(477)),e);Bf(b,K(f));}
function AFv(){B.call(this);this.Qq=null;}
var T_=G();
function AXo(a,b){}
var Wh=G();
var FZ=G();
var Bam=null;var Ban=null;var A$G=null;var Bao=null;var Bap=null;var Baq=null;function ALa(){Bam=new U2;Ban=new UZ;A$G=new U0;Bao=new UX;Bap=new UY;Baq=new WU;}
function AJB(){var a=this;B.call(a);a.pN=null;a.p_=null;a.i8=null;a.cL=null;a.pb=null;a.ns=null;a.jr=null;a.n7=null;a.p5=null;}
function ASw(a,b){var c=new AJB();A4K(c,a,b);return c;}
function A4K(a,b,c){a.cL=Mt(b);a.pb=c;}
function Ql(a){var b,c,d,e,f,g,h,i;b=Bb(a.cL);c=new N7;Ri(c);a.i8=c;a.jr=BN();d=0;while(d<b){e=Bb(a.cL);f=Bb(a.cL);g=EK(a.pb,e,f);D0(a.i8,g,BN());Bz(a.jr,g);d=d+1|0;}c=Nm(Op(a.i8));while(FB(c)){GK((OW(c)).cQ,PK(a));}d=Bb(a.cL);if(d==(-1))a.pN=null;else{a.ns=P(F_,d);c=new Xf;h=a.cL;i=a.pb;g=a.jr;c.d0=h;c.z7=i;c.zz=g;a.n7=c;c=new Se;c.eC=h;c.BL=i;c.B0=g;a.p5=c;a.pN=R5(a,null);}if(Bb(a.cL)!=(-1))a.p_=AAn(a.cL,a.ns);}
function R5(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cL);d=Bb(a.cL);e=a.n7;f=Bb(e.d0);g=BN();h=0;while(h<f){Bz(g,Pn(e));h=h+1|0;}a:{switch(d){case -1:i=new N6;i.hy=b;b=A$G;i.cT=b;i.fM=b;i.e5=b;i.lH=b;i.hZ=b;break a;case 0:i=A7z(b);break a;case 1:i=new Ly;AHe(i,b);GK(i.e5,g);break a;default:}b=new Db;i=new J;L(i);V(H(i,C(478)),d);Bp(b,K(i));N(b);}i.e5=g;b=a.p5;d=Bb(b.eC);e=BN();j=0;while(j<d){Bz(e,HC(b));j=j+1|0;}i.fM=e;i.lH=PK(a);d=Bb(a.cL);b=BN();j=0;while(j<d){e=Pn(a.n7);g=HC(a.p5);f=Bb(a.cL);k=new Rj;k.lI=e;k.la
=g;k.sb=f;Bz(b,k);j=j+1|0;}i.hZ=b;j=Bb(a.cL);i.vn=j==(-1)?null:BI(a.jr,j);d=Bb(a.cL);b=BN();j=0;while(j<d){Bz(b,R5(a,i));j=j+1|0;}i.cT=b;a.ns.data[c]=i;return i;}
function PK(a){var b,c,d,e;b=Bb(a.cL);c=BN();d=0;while(d<b){e=Bb(a.cL);Bz(c,BI(a.jr,e));d=d+1|0;}return c;}
function AFU(){var a=this;B.call(a);a.mk=null;a.p1=null;}
function AMH(){var a=this;B.call(a);a.Fm=0;a.EF=0;a.r4=0;a.nE=0;}
function AEq(){var a=this;B.call(a);a.s6=null;a.s7=null;}
function AXH(a){var b,c,d,e,f,g;b=a.s6;c=a.s7;if(BR(c.mk,b.d.fv)){c=c.p1;CS(b,c.nE,c.r4,0);Ch((Bl(b)).bS,c.nE,c.r4);Ch((Bl(b)).bI,c.EF,c.Fm);}else{d=(B5(b.fH.BE)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GS(b);b=new Yo;b.zm=g;b.zn=c;BF(b);c=new ZC;c.xf=b;$rt_globals.setTimeout(Bw(c,"onTimer"),0);}}}
function AEr(){var a=this;B.call(a);a.Ci=null;a.Ch=null;}
function A0l(a){Jc(a.Ci,a.Ch);}
function F_(){var a=this;B.call(a);a.hy=null;a.cT=null;a.fM=null;a.e5=null;a.hZ=null;a.lH=null;a.vn=null;}
function A7z(a){var b=new F_();AHe(b,a);return b;}
function AHe(a,b){a.hy=b;a.cT=BN();a.fM=BN();a.e5=BN();a.lH=BN();a.hZ=BN();}
function AER(a){var b;b=a.hy;if(b!==null)b.cT.rm(a);}
function WB(){B.call(this);this.sD=null;}
function AQc(a,b){b=b;AAv(a.sD,b);}
var N6=G(F_);
var Ly=G(F_);
function VH(){B.call(this);this.BK=null;}
function AXK(a,b){var c;b=b;c=a.BK;Bu(c.bB,(CA(c.f8,b)).br);}
function Rj(){var a=this;B.call(a);a.lI=null;a.la=null;a.sb=0;}
function QI(){B.call(this);this.qY=null;}
function A1z(a,b){b=b;ABa(a.qY,b);}
var QN=G(0);
var Ez=G(FM);
var NK=G(Ez);
var U2=G(NK);
var Ol=G(El);
var UZ=G(Ol);
var OG=G(Ex);
function AY1(a){var b;b=new DT;X(b);N(b);}
function ASk(a,b){var c;c=new DT;X(c);N(c);}
function ARh(a,b){b=new DT;X(b);N(b);}
var U0=G(OG);
function ASr(a,b){var c;c=new BJ;X(c);N(c);}
function ARA(a){return 0;}
function APm(a){return Bao;}
function ANB(a){return 1;}
var UX=G();
function ANi(a){return 0;}
function A2s(a){var b;b=new MS;X(b);N(b);}
function AUv(a){var b;b=new Db;X(b);N(b);}
var Za=G(0);
var UY=G();
var WU=G();
function RX(){var a=this;B.call(a);a.m9=0;a.sY=null;}
function A6l(a,b){var c,d,e;c=a.sY;b=b;d=c.zv;e=c.zu;d=b.a<=d&&e<=b.b?1:0;a.m9=d;return d?0:1;}
var KL=G(DT);
var J1=G(Bt);
var Oy=G(Bt);
function Y6(){B.call(this);this.z3=null;}
function A2t(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.z3;d=CT(c[0]);e=(CT(c[1])).data[0];if(!ACt(b.h)){c=b.h;if(c.cx==e){e=b.qV;f=Mt(d);E4(c.dY);E4(c.dQ);NA(c);while(f.fn>=f.iN.data.length?0:1){if(Bb(f)==(-1))continue;g=Ww(c,Bb(f));h=OF(Cf(c,g.bs),g.bw);if(Bb(f)==(-1)){if(!e)continue;h.b4=0;h.bE=h.bE|4;continue;}i=Ww(c,Bb(f));j=Bb(f);k=Bb(f);D0(c.dY,g,i);l=c.dQ;m=BN();if(CA(l,i)===null)D0(l,i,m);Bz(CA(c.dQ,i),g);h.b4=j;h.bE=k;}Jh(b);if(b.Fo){n=J6(EF(),b.BT);if(A6E(n,Bq(100))){b=E$(b);c=new J;L(c);H(HY(H(H(c,
b),C(479)),n),C(201));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function AI2(){B.call(this);this.SH=null;}
function ACi(){B.call(this);this.v0=null;}
function ASa(a,b){MK(a.v0,b);}
function RD(){var a=this;B.call(a);a.y6=null;a.kx=null;}
function V_(){B.call(this);this.s_=null;}
function A0v(a,b){var c,d;c=a.s_;c.lr=b;HM(c.H,b.qA);HM(c.L,c.lr.qB);b=c.mQ;d=c.lr;b.g_=d;c.fR.ey=d;}
var AFA=G();
function AFX(b){var c,d,e,f,g,h,i,j;c=AYh();d=CK(b);Bu(c,d);e=0;f=0;while(f<d){g=Cf(b,f);h=JJ(g);Bu(c,h);i=0;while(i<h){j=Kc(g,i);Hf(c,e,Mu(j));e=e+Mu(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Rv(c);}
function AFG(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=P(GG,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new GG;j.hl=h;e[g]=j;}else{j=new GG;j.hl=h;j.n0=BQ(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].n0.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AJA(b,c,d,e){var f,g,h,i;f=Fj(b);g=Fj(c);h=AFX(b);i=AFX(c);b=new ABW;b.B5=d;CL(e,b,C(480),I(B,[f,h,g,i]));}
function ABj(){var a=this;B.call(a);a.ra=null;a.rb=null;}
function AXI(a){var b,c;b=a.ra;c=a.rb;DQ(b.cb.bi,c);AB1(b);}
function Hm(){var a=this;B.call(a);a.eq=0;a.e7=0;a.pV=null;a.ou=0;a.g7=null;}
function AU9(a,b,c,d,e,f){var g=new Hm();A0_(g,a,b,c,d,e,f);return g;}
function A0_(a,b,c,d,e,f,g){a.eq=b;a.e7=c;a.pV=BK(f,g);a.ou=d;a.g7=e;}
function QY(){Ez.call(this);this.jB=null;}
function S7(a){var b;b=new ABu;N8(b,a.jB);return b;}
function Uq(){Ez.call(this);this.zX=null;}
function Nm(a){var b;b=new Uj;N8(b,a.zX);return b;}
function Q0(){FM.call(this);this.w1=null;}
function WX(){B.call(this);this.wN=null;}
function AZu(a,b){b=b;PI(a.wN,b);}
function UN(){B.call(this);this.vr=null;}
function A1c(a,b){b=b;Hq(a.vr,b);}
function KR(){var a=this;B.call(a);a.ee=null;a.ka=null;a.jN=0;}
function A7d(a,b,c){var d=new KR();AHL(d,a,b,c);return d;}
function AHL(a,b,c,d){a.ee=b;a.ka=c;a.jN=d;}
function A3U(a){var b,c,d;b=ALc(a.ee);c=a.ka;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function ALd(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.ee,c.ee)&&BR(a.ka,c.ka)&&BR(C3(a.jN),C3(c.jN))?1:0;}return 0;}
function ME(){var a=this;KR.call(a);a.lj=null;a.xt=0;}
function AX8(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!ALd(a,b))return 0;c=b;return BR(a.lj,c.lj);}return 0;}
function Fg(){var a=this;B.call(a);a.eH=null;a.f2=null;a.AN=0;}
function A6D(a,b,c){var d=new Fg();Oe(d,a,b,c);return d;}
function Oe(a,b,c,d){a.eH=b;a.f2=c;a.AN=d;}
function AVP(a){var b,c,d;b=BT(a.eH);c=a.f2;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AJE(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.eH,c.eH)&&BR(a.f2,c.f2)?1:0;}return 0;}
function HU(){Fg.call(this);this.fF=null;}
function A1I(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=Mc(a.fF);c=new AAo;c.B9=a;d=new R_;d.tz=b;d.sf=c;e=new ACb;e.w6=C(37);f=P(EA,0);g=new OV;g.nS=F(EA);h=F(EA).dR;h.$clinit();g.mH=BQ((((ASN(h)).data.length-1|0)/32|0)+1|0);BF(f);h=new PJ;h.pQ=f;if(h instanceof OV){i=h;if(g.nS===i.nS){j=0;while(true){f=g.mH.data;if(j>=f.length)break;k=f[j];l=i.mH.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}GK(g,h);}m=new J;L(m);while(true){h=new VV;h.xZ=e;h.x0=m;g=d.tz;i=new TM;i.sr=d;i.sq=h;if(!On(g,i))break;}ACF(m,
0,C(21),0,M(C(21)));return K(Lp(m,C(21)));}
function Ky(){var a=this;Fg.call(a);a.ir=null;a.q4=0;}
function A49(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!AJE(a,b))return 0;c=b;return BR(a.ir,c.ir);}return 0;}
function JF(){var a=this;Fg.call(a);a.ie=null;a.hL=null;}
function ASI(a){var b,c,d;b=a.ie.eH.gM;c=BT(a.hL);d=new J;L(d);b=H(d,b);Br(b,46);H(b,c);return K(d);}
function AXu(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.ie,c.ie)&&BR(a.hL,c.hL)?1:0;}return 0;}
function TF(){var a=this;B.call(a);a.sW=null;a.sX=0;a.sR=0;a.sT=null;a.sU=0;a.sV=0;}
function AV2(a,b){var c,d,e,f,g,h,i,j;c=a.sW;d=a.sX;e=a.sR;f=a.sT;g=a.sU;h=a.sV;i=Cu(c.bf,5.0);d=Be((c.bf.bT.a-d|0)-i|0,Bd((i-d|0)-c.S.k.a|0,b.j.a));j=Be((c.bf.bT.b-e|0)-i|0,Bd((i-e|0)-c.S.k.b|0,b.j.b));Y(f,d+g|0,j+h|0);EB(c,f,c.Y.k);}
function AGo(){var a=this;FY.call(a);a.RS=null;a.Tj=0;a.K8=0;a.Jo=0;}
function ABW(){B.call(this);this.B5=null;}
function ATo(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.B5;d=CT(c[0]);c=Mt(d);e=new UR;d=AFG(c);f=AFG(c);g=Bb(c);h=P(Mr,g);i=h.data;j=0;while(j<g){i[j]=NH(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AG$(e,d,f,h);b.g(e);}
function PH(){B.call(this);this.w4=null;}
function A5V(a,b){var c,d,e,f,g;c=a.w4;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(481)),e);Bf(d,K(f));d=c.q.cG;e=new Ro;g=P(B,1);g.data[0]=b;CL(d,e,C(330),g);}
function US(){B.call(this);this.Av=null;}
function AZG(a,b){var c,d,e,f,g;c=a.Av;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(482)),e);Bf(d,K(f));e=c.q.cG;d=new ABp;d.Ar=c;g=P(B,1);g.data[0]=b;CL(e,d,C(483),g);}
function PW(){B.call(this);this.Eh=null;}
function ASg(a,b){var c,d,e;c=Bj();d=BT(b);e=new J;L(e);H(H(e,C(484)),d);Bf(c,K(e));d=new AE4;d.CM=b;c=DY();BF(c);e=new AE3;e.sG=c;We(b,d,e);}
function Zm(){B.call(this);this.x_=null;}
function AU$(a,b){var c,d,e,f;c=a.x_;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(485)),e);Bf(d,K(f));d=new ACT;e=new SU;e.yC=c;d.kc=IC();c=BN();d.em=c;d.jq=1;d.jb=0;d.sc=e;Bz(c,I6(b));Bz(d.em,b);e=Bj();c=BT(d.kc);f=new J;L(f);H(H(f,C(486)),c);Bf(e,K(f));HV(b,d);}
function Ns(){var a=this;Fs.call(a);a.eU=null;a.hO=null;a.xy=null;a.nQ=null;a.At=null;}
function Bar(a,b,c){var d=new Ns();XY(d,a,b,c);return d;}
function XY(a,b,c,d){var e;Oo(a,c,b,d);b=new Vt;c=a.bO;Qr(b,c.bi);d=Ld(c);b.iG=d;b.dv=Iu(d);c=Iu(b.iG);b.du=c;OA(b.eL,b.dv,c);e=new Pg;e.uy=b;c=b.dv;c.iI=e;b.du.iI=e;Jf(c,0);Jf(b.du,0);c=b.dv;c.b8=1;b.ux=AIu(c,b.du);MV(b,I(CF,[b.dv,b.du,b.eL]));a.eU=b;ZK(b,a.hv);b=Pw(a,a.eU,30.0);a.hO=b;c=new WP;c.vB=a;b.kS=c;c=new WO;c.u0=a;b.kM=c;Ep(a.bO,b);}
function A3M(a,b){EQ(a.hO,b.cw);ZK(a.eU,b);}
function Nn(a,b,c){var d,e;d=!c?a.eU.du:a.eU.dv;e=new RM;e.v8=a;e.v9=b;e.v$=c;GZ(d,b,e);}
function A4P(a){a.hO=null;a.eU=null;}
function AXT(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.eU;d=c.dv;c=c.du;e=B3(d,b);f=B3(c,b);if(!e&&!f)return CO(I(BC,[Nl(a,1,C(281)),Nl(a,0,C(282))]));g=!e?C(282):C(281);if(e)c=d;d=Nl(a,e,g);h=a.eU;i=h.iG;j=a.kB;k=new QZ;g=h.dv;h=h.du;l=i.cb.bi;k.mf=g;k.me=h;k.yT=l;g=a.bO;BF(g);h=new Q5;h.zf=g;return YW(Mm(i,c,j,a,k,h),b,d);}
function Nl(a,b,c){var d,e;d=new BC;e=new AAP;e.tE=a;e.tD=b;Cl(d,e,c);return d;}
var WY=G();
function A4e(a){return ABZ();}
var QJ=G();
function AQa(a){return ABZ();}
function TV(){B.call(this);this.vJ=null;}
function AP_(a,b,c){var d,e;c=a.vJ;d=c.d.h;e=b.br;b=c.fD;AA2(d.E.data[e],0,b);}
function Xf(){var a=this;B.call(a);a.d0=null;a.z7=null;a.zz=null;}
function Pn(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.d0);switch(b){case 3:break;case 5:c=Qd(a);d=Ot(a);b=Bb(a.d0);e=Bb(a.d0);f=Bb(a.d0);g=BN();h=0;while(h<f){Bz(g,Ot(a));h=h+1|0;}i=new ME;AHL(i,c,d,b);i.lj=g;i.xt=e;break a;default:c=new Db;d=new J;L(d);V(H(d,C(487)),b);Bp(c,K(d));N(c);}i=A7d(Qd(a),Ot(a),Bb(a.d0));}return i;}
function Qd(a){var b,c;b=Bb(a.d0);c=Bb(a.d0);return AZX(EK(a.z7,b,c),Bb(a.d0));}
function Ot(a){var b;b=Bb(a.d0);if(b==(-1))return null;return BI(a.zz,b);}
function Se(){var a=this;B.call(a);a.eC=null;a.BL=null;a.B0=null;}
function HC(a){var b,c,d,e,f;a:{b:{b=Bb(a.eC);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=XI(a);d=Rp(a);b=Bb(a.eC);e=S$(a);f=new Ky;Oe(f,c,d,2);f.q4=b;f.ir=e;break a;case 4:c=HC(a);d=HC(a);f=new JF;Oe(f,c.eH,c.f2,9);f.ie=c;f.hL=d;break a;case 5:f=A6D(XI(a),Rp(a),Bb(a.eC));break a;case 9:c=S$(a);f=new HU;d=!EL(c)&&BI(c,0)!==null?(BI(c,0)).f2:null;Oe(f,null,null,7);f.fF=BN();c=B9(c);while(Cb(c)){e=Cc(c);if(!(e instanceof HU))Bz(f.fF,e);else{e=e;GK(f.fF,e.fF);}}f.f2=d;break a;default:break b;}f
=null;break a;}c=new Db;d=new J;L(d);V(H(d,C(488)),b);Bp(c,K(d));N(c);}return f;}
function XI(a){var b,c;b=Bb(a.eC);c=Bb(a.eC);return AZX(EK(a.BL,b,c),Bb(a.eC));}
function Rp(a){var b;b=Bb(a.eC);if(b==(-1))return null;return BI(a.B0,b);}
function S$(a){var b,c,d;b=Bb(a.eC);c=BN();d=0;while(d<b){Bz(c,HC(a));d=d+1|0;}return c;}
function Uv(){var a=this;B.call(a);a.tM=null;a.tJ=null;a.tI=null;a.tL=0;a.tK=0;a.tP=0;a.tO=0;a.tR=0;a.tQ=0;a.tN=0;a.sH=0;}
function A5I(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tM;d=a.tJ;e=a.tI;f=a.tL;g=a.tK;h=a.tP;i=a.tO;j=a.tR;k=a.tQ;l=a.tN;m=a.sH;n=Cu(c.bf,5.0);o=c.Y.h6();Cr(d,c.Y.k);Cr(e,c.Y.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bf.bT.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.S.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bf.bT.b+c.S.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}EB(c,e,d);}
function Vz(){var a=this;B.call(a);a.yw=null;a.yv=0.0;}
function NP(a,b){return LJ(a.yw,b,a.yv*2.0+0.875);}
function Vt(){var a=this;Ix.call(a);a.iG=null;a.dv=null;a.du=null;a.ux=null;a.m4=null;a.j6=0;}
function ZK(a,b){G0(a.iG,b);a.eL.iA=b;FG(a.dv,b);FG(a.du,b);}
function WP(){B.call(this);this.vB=null;}
function A0A(a){var b;b=a.vB;DQ(b.bO.bi,b.At);}
function WO(){B.call(this);this.u0=null;}
function ARR(a){var b,c,d;b=a.u0;c=b.bO.bi.c1;d=b.eU;if(d.dv!==c&&d.du!==c)c=null;b.At=c;}
function UP(){B.call(this);this.t5=null;}
function AT6(a,b,c){HZ(Cf(a.t5.d.h,b.br),0,M(c));}
function AIG(){var a=this;B.call(a);a.gM=null;a.dq=0;}
function AZX(a,b){var c=new AIG();AMS(c,a,b);return c;}
function AMS(a,b,c){a.gM=b;a.dq=c;}
function AS0(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.dq==c.dq&&BR(a.gM,c.gM)?1:0;}return 0;}
function ALc(a){var b,c,d;b=a.gM;c=a.dq;d=new J;L(d);b=H(d,b);Br(b,40);Br(V(b,c),41);return K(d);}
function Xr(){B.call(this);this.ry=null;}
function A1b(a,b){b=b;O_(a.ry,b);}
function WK(){B.call(this);this.x8=null;}
function A6i(a,b){b=b;Hq(a.x8,b);}
function Pg(){B.call(this);this.uy=null;}
function A4S(a,b){var c,d,e;c=a.uy;d=c.dv;if(d===b)c.j6=c.j6|1;e=c.du;if(e===b)c.j6=c.j6|2;if((c.j6&3)==3){b=d.d.h;d=e.d.h;e=new Yt;e.xg=c;AJA(b,d,e,c.iG.cb.bi.cG);}}
function FT(){var a=this;B.call(a);a.kJ=0;a.uP=0;a.j_=null;a.hr=null;a.zj=null;a.mo=null;}
function Bas(a){var b=new FT();N8(b,a);return b;}
function N8(a,b){a.mo=b;a.uP=b.c6;a.j_=null;}
function FB(a){var b,c;if(a.j_!==null)return 1;while(true){b=a.kJ;c=a.mo.b_.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kJ=b+1|0;}return 0;}
function AJ7(a){var b;if(a.uP==a.mo.c6)return;b=new Ip;X(b);N(b);}
function Og(a){var b,c,d,e;AJ7(a);if(!FB(a)){b=new MS;X(b);N(b);}b=a.j_;if(b!==null){c=a.hr;if(c!==null)a.zj=c;a.hr=b;a.j_=b.c4;}else{d=a.mo.b_.data;e=a.kJ;a.kJ=e+1|0;b=d[e];a.hr=b;a.j_=b.c4;a.zj=null;}}
var ABu=G(FT);
function QM(a){Og(a);return a.hr.cH;}
var Uj=G(FT);
function OW(a){Og(a);return a.hr;}
var AAr=G(FT);
function AFL(){var a=this;B.call(a);a.QF=null;a.TU=0;}
function AAp(){var a=this;B.call(a);a.l=null;a.d$=0;a.m$=null;a.ru=0;a.h9=0;a.fW=0;a.bD=0;a.nT=null;}
function Ny(a){return a.l.bV;}
function Wx(a,b,c,d){var e,f,g,h,i,j;e=BN();f=a.d$;g=0;if(c!=f)a.d$=c;a:{switch(b){case -1073741784:h=new Sy;c=a.bD+1|0;a.bD=c;GD(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Rl;c=a.bD+1|0;a.bD=c;GD(h,c);break a;case -33554392:h=new To;c=a.bD+1|0;a.bD=c;GD(h,c);break a;default:c=a.h9+1|0;a.h9=c;if(d!==null)h=A8u(c);else{h=new Gh;GD(h,0);g=1;}c=a.h9;if(c<=(-1))break a;if(c>=10)break a;a.m$.data[c]=h;break a;}h=new AEY;GD(h,(-1));}while(true){if(Fv(a.l)&&a.l.m==(-536870788))
{d=A4H(Cm(a,2),Cm(a,64));while(!DJ(a.l)&&Fv(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CJ(d,Bo(i));i=a.l;if(i.bo!=(-536870788))continue;Bo(i);}i=LK(a,d);i.V(h);}else if(a.l.bo==(-536870788)){i=Ie(h);Bo(a.l);}else{i=YY(a,h);d=a.l;if(d.bo==(-536870788))Bo(d);}if(i!==null)Bz(e,i);if(DJ(a.l))break;if(a.l.bo==(-536870871))break;}if(a.l.nm==(-536870788))Bz(e,Ie(h));if(a.d$!=f&&!g){a.d$=f;d=a.l;d.ho=f;d.m=d.bo;d.fw=d.fI;j=d.dB;d.z=j+1|0;d.jS=j;F2(d);}switch(b){case -1073741784:break;case -536870872:d
=new W$;Gi(d,e,h);return d;case -268435416:d=new ADK;Gi(d,e,h);return d;case -134217688:d=new AAs;Gi(d,e,h);return d;case -67108824:d=new TQ;Gi(d,e,h);return d;case -33554392:d=new Ef;Gi(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return A8l(BI(e,0),h);default:return A6X(e,h);}return Ie(h);}d=new KK;Gi(d,e,h);return d;}
function ALX(a){var b,c,d,e,f,g,h;b=BQ(4);c=(-1);d=(-1);if(!DJ(a.l)&&Fv(a.l)){e=b.data;c=Bo(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B6(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bo;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bo(f);f=a.l;g=f.bo;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bo(f);return A4v(e,3);}return A4v(e,2);}if(!Cm(a,2))return AF8(b[0]);if(Cm(a,64))return A25(b[0]);return AYy(b[0]);}e=b.data;c=1;while(c<4&&!DJ(a.l)&&Fv(a.l)){h=c+1|0;e[c]=Bo(a.l);c=h;}if(c==1){h=e[0];if(!(Bat.Ez(h)==Bau?0:1))return Wp(a,e[0]);}if
(!Cm(a,2))return A8T(b,c);if(Cm(a,64)){f=new Wk;Qa(f,b,c);return f;}f=new ACk;Qa(f,b,c);return f;}
function YY(a,b){var c,d,e,f,g,h,i;if(Fv(a.l)&&!Lc(a.l)&&NN(a.l.m)){if(Cm(a,128)){c=ALX(a);if(!DJ(a.l)){d=a.l;e=d.bo;if(!(e==(-536870871)&&!(b instanceof Gh))&&e!=(-536870788)&&!Fv(d))c=MG(a,b,c);}}else if(!Yq(a.l)&&!ADe(a.l)){f=new Qm;L(f);while(!DJ(a.l)&&Fv(a.l)&&!Yq(a.l)&&!ADe(a.l)){if(!(!Lc(a.l)&&!a.l.m)&&!(!Lc(a.l)&&NN(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bo(a.l);if(!MF(e))Br(f,e&65535);else Kk(f,GE(e));}if(!Cm(a,2)){c=new AAG;D7(c);c.cu
=K(f);e=f.I;c.bM=e;c.px=A1Z(e);c.nW=A1Z(c.bM);h=0;while(h<(c.bM-1|0)){Sl(c.px,Q(c.cu,h),(c.bM-h|0)-1|0);Sl(c.nW,Q(c.cu,(c.bM-h|0)-1|0),(c.bM-h|0)-1|0);h=h+1|0;}}else if(Cm(a,64))c=A8S(f);else{c=new PG;D7(c);c.h0=K(f);c.bM=f.I;}}else c=MG(a,b,AEK(a,b));}else{d=a.l;if(d.bo!=(-536870871))c=MG(a,b,AEK(a,b));else{if(b instanceof Gh)N(Cn(C(21),d.bV,Qk(d)));c=Ie(b);}}a:{if(!DJ(a.l)){e=a.l.bo;if(!(e==(-536870871)&&!(b instanceof Gh))&&e!=(-536870788)){f=YY(a,b);if(c instanceof Df&&!(c instanceof F4)&&!(c instanceof C6)
&&!(c instanceof Fe)){i=c;if(!f.b6(i.P)){c=new VR;Fo(c,i.P,i.f,i.j8);c.P.V(c);}}if((f.jd()&65535)!=43)c.V(f);else c.V(f.P);break a;}}if(c===null)return null;c.V(b);}if((c.jd()&65535)!=43)return c;return c.P;}
function MG(a,b,c){var d,e,f,g,h;d=a.l;e=d.bo;if(c!==null&&!(c instanceof Ce)){switch(e){case -2147483606:Bo(d);d=new WW;Dx(d,c,b,e);OY();c.V(Bav);return d;case -2147483605:Bo(d);d=new Zl;Dx(d,c,b,(-2147483606));OY();c.V(Bav);return d;case -2147483585:Bo(d);d=new Q3;Dx(d,c,b,(-536870849));OY();c.V(Bav);return d;case -2147483525:f=new PC;d=Gz(d);g=a.fW+1|0;a.fW=g;M2(f,d,c,b,(-536870849),g);OY();c.V(Bav);return f;case -1073741782:case -1073741781:Bo(d);d=new Ss;Dx(d,c,b,e);c.V(d);return d;case -1073741761:Bo(d);d
=new Z1;Dx(d,c,b,(-536870849));c.V(b);return d;case -1073741701:h=new Uu;d=Gz(d);e=a.fW+1|0;a.fW=e;M2(h,d,c,b,(-536870849),e);c.V(h);return h;case -536870870:case -536870869:Bo(d);if(c.jd()!=(-2147483602)){d=new C6;Dx(d,c,b,e);}else if(Cm(a,32)){d=new St;Dx(d,c,b,e);}else{d=new Yx;f=Y8(a.d$);Dx(d,c,b,e);d.nl=f;}c.V(d);return d;case -536870849:Bo(d);d=new GT;Dx(d,c,b,(-536870849));c.V(b);return d;case -536870789:h=new GA;d=Gz(d);e=a.fW+1|0;a.fW=e;M2(h,d,c,b,(-536870849),e);c.V(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bo(d);d=new AFc;Fo(d,f,b,e);f.f=d;return d;case -2147483585:Bo(d);c=new VL;Fo(c,f,b,(-2147483585));return c;case -2147483525:c=new YX;SQ(c,Gz(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bo(d);d=new Z0;Fo(d,f,b,e);f.f=d;return d;case -1073741761:Bo(d);c=new ACv;Fo(c,f,b,(-1073741761));return c;case -1073741701:c=new Sk;SQ(c,Gz(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bo(d);d=A7a(f,b,e);f.f=d;return d;case -536870849:Bo(d);c
=new Fe;Fo(c,f,b,(-536870849));return c;case -536870789:return A7V(Gz(d),f,b,(-536870789));default:}return c;}
function AEK(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Gh;while(true){a:{e=a.l;f=e.bo;if((f&(-2147418113))==(-2147483608)){Bo(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.d$=g;else{if(f!=(-1073741784))g=a.d$;c=Wx(a,f,g,b);e=a.l;if(e.bo!=(-536870871))N(Cn(C(21),e.bV,e.dB));Bo(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bo(e);c
=A4l(0);break a;case -2147483577:Bo(e);c=new Yu;B8(c);break a;case -2147483558:Bo(e);c=new Wg;h=a.bD+1|0;a.bD=h;AL8(c,h);break a;case -2147483550:Bo(e);c=A4l(1);break a;case -2147483526:Bo(e);c=new AD8;B8(c);break a;case -536870876:Bo(e);a.bD=a.bD+1|0;if(Cm(a,8)){if(Cm(a,1)){c=A6P(a.bD);break a;}c=A6v(a.bD);break a;}if(Cm(a,1)){c=A61(a.bD);break a;}c=A7j(a.bD);break a;case -536870866:Bo(e);if(Cm(a,32)){c=A7q();break a;}c=A7g(Y8(a.d$));break a;case -536870821:Bo(e);i=0;c=a.l;if(c.bo==(-536870818)){i=1;Bo(c);}c
=LK(a,HI(a,i));c.V(b);e=a.l;if(e.bo!=(-536870819))N(Cn(C(21),e.bV,e.dB));YN(e,1);Bo(a.l);break a;case -536870818:Bo(e);a.bD=a.bD+1|0;if(!Cm(a,8)){c=new LA;B8(c);break a;}c=new XD;e=Y8(a.d$);B8(c);c.z_=e;break a;case 0:j=e.fI;if(j!==null)c=LK(a,j);else{if(DJ(e)){c=Ie(b);break a;}c=AF8(f&65535);}Bo(a.l);break a;default:break b;}Bo(e);c=new LA;B8(c);break a;}h=(f&2147483647)-48|0;if(a.h9<h)N(Cn(C(21),F9(e),Qk(a.l)));Bo(e);a.bD=a.bD+1|0;c=!Cm(a,2)?A7F(h,a.bD):Cm(a,64)?A6Q(h,a.bD):A8Q(h,a.bD);a.m$.data[h].pk=1;a.ru
=1;break a;}if(f>=0&&!Hn(e)){c=Wp(a,f);Bo(a.l);}else if(f==(-536870788))c=Ie(b);else{if(f!=(-536870871)){b=new Kz;c=!Hn(a.l)?Wc(f&65535):a.l.fI.K();e=a.l;M_(b,c,e.bV,e.dB);N(b);}if(d){b=new Kz;e=a.l;M_(b,C(21),e.bV,e.dB);N(b);}c=Ie(b);}}}if(f!=(-16777176))break;}return c;}
function HI(a,b){var c,d,e,f,g,h,i,j,$$je;c=A4H(Cm(a,2),Cm(a,64));EW(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DJ(a.l))break a;h=a.l;b=h.bo;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CJ(c,d);d=Bo(a.l);h=a.l;if(h.bo!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bo(h);e=1;d=(-1);break d;}Bo(h);if(g){c=HI(a,0);break d;}if(a.l.bo==(-536870819))break d;V3(c,HI(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bo(h);h=a.l;i=h.bo;if(Hn(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(NN(i))break e;i=i&65535;break e;}catch($$e){$$je=E5($$e);if($$je instanceof EE){break b;}else{throw $$e;}}}try{Cd(c,d,i);}catch($$e){$$je=E5($$e);if($$je instanceof EE){break b;}else{throw $$e;}}Bo(a.l);d=(-1);break d;}}if(d>=0)CJ(c,d);d=45;Bo(a.l);break d;case -536870821:if(d>=0){CJ(c,d);d=(-1);}Bo(a.l);j=0;h=a.l;if(h.bo==(-536870818)){Bo(h);j=1;}if(!e)AJc(c,HI(a,j));else V3(c,HI(a,j));e=0;Bo(a.l);break d;case -536870819:if(d>=0)CJ(c,
d);d=93;Bo(a.l);break d;case -536870818:if(d>=0)CJ(c,d);d=94;Bo(a.l);break d;case 0:if(d>=0)CJ(c,d);h=a.l.fI;if(h===null)d=0;else{AMG(c,h);d=(-1);}Bo(a.l);break d;default:}if(d>=0)CJ(c,d);d=Bo(a.l);}g=0;}N(Cn(C(21),Ny(a),a.l.dB));}N(Cn(C(21),Ny(a),a.l.dB));}if(!f){if(d>=0)CJ(c,d);return c;}N(Cn(C(21),Ny(a),a.l.dB-1|0));}
function Wp(a,b){var c,d,e;c=MF(b);if(Cm(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AYy(b&65535);}if(Cm(a,64)&&b>128){if(c){d=new W5;D7(d);d.bM=2;d.nG=Hg(He(b));return d;}if(QL(b))return ASX(b&65535);if(!Tb(b))return A25(b&65535);return A0z(b&65535);}}if(!c){if(QL(b))return ASX(b&65535);if(!Tb(b))return AF8(b&65535);return A0z(b&65535);}d=new Em;D7(d);d.bM=2;d.hd=b;e=(GE(b)).data;d.kl=e[0];d.jJ=e[1];return d;}
function LK(a,b){var c,d,e;if(!AK8(b)){if(!b.T){if(b.iD())return AQt(b);return AVa(b);}if(!b.iD())return A0R(b);c=new M3;ACN(c,b);return c;}c=AFz(b);d=new Pm;B8(d);d.nn=c;d.xz=c.bm;if(!b.T){if(b.iD())return AHy(AQt(JR(b)),d);return AHy(AVa(JR(b)),d);}if(!b.iD())return AHy(A0R(JR(b)),d);c=new RN;e=new M3;ACN(e,JR(b));AIQ(c,e,d);return c;}
function JS(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cm(a,b){return (a.d$&b)!=b?0:1;}
function AA1(){B.call(this);this.zE=null;}
function ASi(a,b){b.hF=a.zE.dk;}
function AA0(){B.call(this);this.vL=null;}
function A2Y(a,b){b.hy=a.vL.dk.cq;}
function Yw(){B.call(this);this.rL=null;}
function AYU(a,b){b.hF=a.rL;}
var H$=G(0);
function TX(){B.call(this);this.zH=null;}
function A1A(a,b,c,d){K8(a.zH,b,c.br,d.br);}
function TY(){B.call(this);this.xM=null;}
function A0c(a,b,c,d){K8(a.xM,b,c.br,d.br);}
function Jb(){B.call(this);this.oJ=0;}
var Baw=null;var Bax=null;var Bay=null;function ATw(a){var b=new Jb();AHA(b,a);return b;}
function AHA(a,b){a.oJ=b;}
function YS(b){return !b?Bax:Baw;}
function AJF(){Baw=ATw(1);Bax=ATw(0);Bay=F($rt_booleancls());}
var K$=G(0);
var Sz=G();
var Nr=G(0);
var AGX=G();
function SY(){B.call(this);this.vN=null;}
function A17(a,b,c,d){Kb(a.vN,b,c.br,d.br);}
var SX=G();
function AVY(a,b){return b.ee.dq>=0?0:1;}
var SW=G();
function ATV(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eH;if(b===null)break b;if(b.dq>=0)break b;}c=1;break a;}c=0;}return c;}
function S0(){B.call(this);this.Bh=null;}
function A1G(a,b,c,d){Kb(a.Bh,b,c.br,d.br);}
function BV(){var a=this;B.call(a);a.f=null;a.cF=0;a.pt=null;a.j8=0;}
var A9r=0;function B8(a){var b;b=A9r;A9r=b+1|0;a.pt=Id(b);}
function N3(a,b){var c;c=A9r;A9r=c+1|0;a.pt=Id(c);a.f=b;}
function IY(a,b,c,d){var e;e=d.A;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function I7(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AYM(a,b){a.j8=b;}
function AYi(a){return a.j8;}
function AHg(a){var b,c,d;b=a.pt;c=a.t();d=new J;L(d);Br(d,60);b=H(d,b);Br(b,58);Br(H(b,c),62);return K(d);}
function AUe(a){return AHg(a);}
function AUH(a){return a.f;}
function AVo(a,b){a.f=b;}
function A4A(a,b){return 1;}
function A5q(a){return null;}
function KQ(a){var b;a.cF=1;b=a.f;if(b!==null){if(!b.cF){b=b.gQ();if(b!==null){a.f.cF=1;a.f=b;}a.f.e0();}else if(b instanceof H5&&b.e4.pk)a.f=b.f;}}
function AIY(){A9r=1;}
var Ro=G();
function A0u(a,b){ALW(b);}
function ABp(){B.call(this);this.Ar=null;}
function ARi(a,b){Tm(a.Ar,b);}
function AE4(){B.call(this);this.CM=null;}
function A34(a,b){var c;c=a.CM;AJz(NU(c),c,b);}
function AE3(){B.call(this);this.sG=null;}
function AOG(a,b){Bf(a.sG,b);}
var IL=G(0);
function ACT(){var a=this;B.call(a);a.sc=null;a.kc=null;a.em=null;a.jq=0;a.jb=0;}
function A3Z(a,b){var c,d,e,f,g;if(a.kc!==IC()){b=new Bt;X(b);N(b);}Bz(a.em,I6(b));Bz(a.em,b);c=Bj();d=a.jb;a.jb=d+1|0;e=BT(b);f=a.em.p;g=new J;L(g);V(H(H(H(V(H(g,C(489)),d),C(280)),e),C(490)),f);Bf(c,K(g));a.jq=a.jq+1|0;HV(b,a);}
function ASK(a,b){var c,d,e,f;if(a.kc!==IC()){b=new Bt;X(b);N(b);}Bz(a.em,NU(b));Bz(a.em,b);c=Bj();d=a.jb;a.jb=d+1|0;b=BT(b);e=a.em.p;f=new J;L(f);V(H(H(H(V(H(f,C(491)),d),C(280)),b),C(490)),e);Bf(c,K(f));}
function AY$(a){var b,c,d,e,f,g;if(a.kc!==IC()){b=new Bt;X(b);N(b);}c=a.jq-1|0;a.jq=c;if(!c){b=Bj();c=a.em.p;d=new J;L(d);V(H(d,C(492)),c);Bf(b,K(d));b=a.em;d=a.sc;e=P(B,b.p);f=e.data;c=0;g=f.length;while(c<g){f[c]=BI(b,c);c=c+1|0;}Tm(d.yC,e);}}
function SU(){B.call(this);this.yC=null;}
function WL(){var a=this;B.call(a);a.rH=null;a.rF=null;a.rE=0;a.rG=0;}
function A2a(a,b){b=b;E0(a.rH,a.rF,b,a.rE,a.rG);}
function WM(){var a=this;B.call(a);a.CU=null;a.CT=null;a.CS=0;a.CR=0;}
function APV(a,b){b=b;E0(a.CU,a.CT,b,a.CS,a.CR);}
function Sd(){var a=this;B.call(a);a.yP=null;a.yN=null;a.yO=null;}
function AZU(a){AGt(a.yP,a.yN,a.yO);}
var Yv=G();
function ASu(a,b){ALW(b);}
function ABK(){var a=this;B.call(a);a.CP=null;a.CQ=null;}
function ANT(a){var b,c;b=a.CP;c=a.CQ;Gw(b.C.bG,Ff(c));}
function C5(){var a=this;BV.call(a);a.pk=0;a.eu=0;}
var Bav=null;function OY(){OY=Bm(C5);AZw();}
function A8u(a){var b=new C5();GD(b,a);return b;}
function GD(a,b){OY();B8(a);a.eu=b;}
function ANS(a,b,c,d){var e,f;e=Jq(d,a.eu);Nk(d,a.eu,b);f=a.f.c(b,c,d);if(f<0)Nk(d,a.eu,e);return f;}
function A1n(a){return a.eu;}
function AQy(a){return C(493);}
function AN$(a,b){return 0;}
function AZw(){var b;b=new Yr;B8(b);Bav=b;}
function Hi(){var a=this;B.call(a);a.bk=null;a.ho=0;a.fz=0;a.wf=0;a.nm=0;a.bo=0;a.m=0;a.As=0;a.fI=null;a.fw=null;a.z=0;a.kj=0;a.dB=0;a.jS=0;a.bV=null;}
var Baz=null;var Bat=null;var Bau=0;function YN(a,b){if(b>0&&b<3)a.fz=b;if(b==1){a.m=a.bo;a.fw=a.fI;a.z=a.jS;a.jS=a.dB;F2(a);}}
function Hn(a){return a.fI===null?0:1;}
function Lc(a){return a.fw===null?0:1;}
function Bo(a){F2(a);return a.nm;}
function Gz(a){var b;b=a.fI;F2(a);return b;}
function F2(a){var b,c,d,e,f,g,h,$$je;a.nm=a.bo;a.bo=a.m;a.fI=a.fw;a.dB=a.jS;a.jS=a.z;while(true){b=0;c=a.z>=a.bk.data.length?0:Mg(a);a.m=c;a.fw=null;if(a.fz==4){if(c!=92)return;c=a.z;d=a.bk.data;c=c>=d.length?0:d[B_(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.z=a.kj;return;}a.fz=a.wf;a.m=a.z>(a.bk.data.length-2|0)?0:Mg(a);}a:{c=a.m;if(c!=92){e=a.fz;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bk.data[a.z]!=63){a.m=(-2147483608);break a;}B_(a);c=a.bk.data[a.z];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B_(a);break b;default:N(Cn(C(21),F9(a),a.z));}a.m=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bk.data[a.z];e=1;break b;case 61:a.m=(-536870872);B_(a);break b;case 62:a.m=(-33554392);B_(a);break b;default:f=AME(a);a.m=f;if(f<256){a.ho=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.ho=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B_(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.z;d=a.bk.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B_(a);break a;case 63:a.m=c|(-1073741824);B_(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);YN(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fw=AIt(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.z>=(a.bk.data.length-2|0)?(-1):Mg(a);c:{a.m=c;switch(c){case -1:N(Cn(C(21),F9(a),a.z));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AHr(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fz!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cn(C(21),F9(a),a.z));case 68:case 83:case 87:case 100:case 115:case 119:a.fw=SM(EK(a.bk,
a.kj,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.wf=a.fz;a.fz=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.z;d=a.bk.data;if(c>=(d.length-2|0))N(Cn(C(21),F9(a),a.z));a.m=d[B_(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Zo(a,4);break a;case 120:a.m=Zo(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=ALe(a);h=0;if(a.m==80)h=1;try{a.fw=SM(g,h);}catch($$e){$$je=E5($$e);if($$je instanceof M6){N(Cn(C(21),F9(a),a.z));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function ALe(a){var b,c,d,e,f,g;b=new J;F3(b,10);c=a.z;d=a.bk;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EK(d,B_(a),1);f=new J;L(f);H(H(f,C(494)),b);return K(f);}B_(a);c=0;a:{while(true){g=a.z;d=a.bk.data;if(g>=(d.length-2|0))break;c=d[B_(a)];if(c==125)break a;Br(b,c);}}if(c!=125)N(Cn(C(21),a.bV,a.z));}if(!b.I)N(Cn(C(21),a.bV,a.z));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(494)),f);return K(b);}b:{c:{if(M(f)>3){if(NS(f,C(494)))break c;if(NS(f,C(495)))break c;}break b;}f=DB(f,2);}return f;}
function AIt(a,b){var c,d,e,f,g,$$je;c=new J;F3(c,4);d=(-1);e=2147483647;a:{while(true){f=a.z;g=a.bk.data;if(f>=g.length)break a;b=g[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=K6(Ek(c),10);AIz(c,0,AJG(c));continue;}catch($$e){$$je=E5($$e);if($$je instanceof Dy){break;}else{throw $$e;}}Br(c,b&65535);}N(Cn(C(21),a.bV,a.z));}if(b!=125)N(Cn(C(21),a.bV,a.z));if(c.I>0)b:{try{e=K6(Ek(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E5($$e);if($$je instanceof Dy){}else{throw $$e;}}N(Cn(C(21),a.bV,a.z));}else if
(d<0)N(Cn(C(21),a.bV,a.z));if((d|e|(e-d|0))<0)N(Cn(C(21),a.bV,a.z));b=a.z;g=a.bk.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B_(a);break c;case 63:a.m=(-1073741701);B_(a);break c;default:}a.m=(-536870789);}c=new Xk;c.fU=d;c.fT=e;return c;}
function F9(a){return a.bV;}
function DJ(a){return !a.bo&&!a.m&&a.z==a.As&&!Hn(a)?1:0;}
function NN(b){return b<0?0:1;}
function Fv(a){return !DJ(a)&&!Hn(a)&&NN(a.bo)?1:0;}
function Yq(a){var b;b=a.bo;return b<=56319&&b>=55296?1:0;}
function ADe(a){var b;b=a.bo;return b<=57343&&b>=56320?1:0;}
function Tb(b){return b<=56319&&b>=55296?1:0;}
function QL(b){return b<=57343&&b>=56320?1:0;}
function Zo(a,b){var c,d,e,f,$$je;c=new J;F3(c,b);d=a.bk.data.length-2|0;e=0;while(true){f=BP(e,b);if(f>=0)break;if(a.z>=d)break;Br(c,a.bk.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=K6(Ek(c),16);}catch($$e){$$je=E5($$e);if($$je instanceof Dy){break a;}else{throw $$e;}}return b;}N(Cn(C(21),a.bV,a.z));}
function AHr(a){var b,c,d,e,f,g;b=3;c=1;d=a.bk.data;e=d.length-2|0;f=ACZ(d[a.z],8);switch(f){case -1:break;default:if(f>3)b=2;B_(a);a:{while(true){if(c>=b)break a;g=a.z;if(g>=e)break a;g=ACZ(a.bk.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B_(a);c=c+1|0;}}return f;}N(Cn(C(21),a.bV,a.z));}
function AME(a){var b,c,d,e;b=1;c=a.ho;a:while(true){d=a.z;e=a.bk.data;if(d>=e.length)N(Cn(C(21),a.bV,d));b:{c:{switch(e[d]){case 41:B_(a);return c|256;case 45:if(!b)N(Cn(C(21),a.bV,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c,d,e,f;b=a.z;a.kj=b;if(!(a.ho&4))a.z=b+1|0;else{c=a.bk.data.length-2|0;a.z=b+1|0;a:while(true){d=a.z;if(d<c&&Sf(a.bk.data[d])){a.z=a.z+1|0;continue;}d=a.z;if(d>=c)break;e=a.bk.data;if(e[d]!=35)break;a.z=d+1|0;while(true){f=a.z;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.z=f+1|0;}}}return a.kj;}
function AMe(b){return Baz.I9(b);}
function Mg(a){var b,c,d,e;b=a.bk.data[B_(a)];if(CX(b)){c=a.kj+1|0;d=a.bk.data;if(c<d.length){e=d[c];if(Dm(e)){B_(a);return EX(b,e);}}}return b;}
function Qk(a){return a.dB;}
function Kz(){var a=this;BX.call(a);a.Ej=null;a.D4=null;a.tq=0;}
function Cn(a,b,c){var d=new Kz();M_(d,a,b,c);return d;}
function M_(a,b,c,d){X(a);a.tq=(-1);a.Ej=b;a.D4=c;a.tq=d;}
function FO(){var a=this;B.call(a);a.Gi=FU;a.FB=FU;a.E8=null;a.DA=null;a.E4=0;a.Go=null;}
var BaA=null;var BaB=null;var BaC=0;var BaD=0;var BaE=null;function AIV(){AIV=Bm(FO);ANW();}
function ATI(b){AIV();if(BaB!==b)BaB=b;BaB.FB=EF();}
function IC(){AIV();return BaB;}
function ANW(){var b,c,d;b=new FO;AIV();c=null;b.E8=new B;b.E4=1;b.DA=C(496);b.Go=c;d=BaC;BaC=d+1|0;b.Gi=Bq(d);BaA=b;BaB=b;BaC=1;BaD=1;BaE=new SL;}
function Yt(){B.call(this);this.xg=null;}
function AUn(a,b){var c,d;c=a.xg;c.m4=b;HM(c.dv,b.qA);HM(c.du,c.m4.qB);b=c.ux;d=c.m4;b.g_=d;c.eL.ey=d;}
var Sy=G(C5);
function AXp(a,b,c,d){var e;e=a.eu;B2(d,e,b-DK(d,e)|0);return a.f.c(b,c,d);}
function AYS(a){return C(497);}
function A3v(a,b){return 0;}
var AEY=G(C5);
function AYJ(a,b,c,d){return b;}
function A0J(a){return C(498);}
var Rl=G(C5);
function AOd(a,b,c,d){if(DK(d,a.eu)!=b)b=(-1);return b;}
function A4t(a){return C(499);}
function To(){C5.call(this);this.xT=0;}
function AXt(a,b,c,d){var e;e=a.eu;B2(d,e,b-DK(d,e)|0);a.xT=b;return b;}
function AUJ(a){return C(500);}
function A2v(a,b){return 0;}
var Gh=G(C5);
function AVB(a,b,c,d){if(d.mq!=1&&b!=d.A)return (-1);d.kQ=1;Nk(d,0,b);return b;}
function AYs(a){return C(501);}
function Ce(){BV.call(this);this.bM=0;}
function D7(a){B8(a);a.bM=1;}
function A50(a,b,c,d){var e;if((b+a.cd()|0)>d.A){d.dU=1;return (-1);}e=a.bC(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A4b(a){return a.bM;}
function AQ1(a,b){return 1;}
var AIf=G(Ce);
function Ie(a){var b=new AIf();A1v(b,a);return b;}
function A1v(a,b){N3(a,b);a.bM=1;a.j8=1;a.bM=0;}
function A3N(a,b,c){return 0;}
function AZz(a,b,c,d){var e,f,g;e=d.A;f=d.df;while(true){g=BP(b,e);if(g>0)return (-1);if(g<0&&Dm(Q(c,b))&&b>f&&CX(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AYG(a,b,c,d,e){var f,g;f=e.A;g=e.df;while(true){if(c<b)return (-1);if(c<f&&Dm(Q(d,c))&&c>g&&CX(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AQz(a){return C(502);}
function AXs(a,b){return 0;}
function B$(){var a=this;BV.call(a);a.bP=null;a.e4=null;a.Z=0;}
function A6X(a,b){var c=new B$();Gi(c,a,b);return c;}
function Gi(a,b,c){B8(a);a.bP=b;a.e4=c;a.Z=c.eu;}
function AQg(a,b,c,d){var e,f,g,h;if(a.bP===null)return (-1);e=GM(d,a.Z);D6(d,a.Z,b);f=a.bP.p;g=0;while(true){if(g>=f){D6(d,a.Z,e);return (-1);}h=(BI(a.bP,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATk(a,b){a.e4.f=b;}
function AQ$(a){return C(503);}
function A0$(a,b){var c;a:{c=a.bP;if(c!==null){c=B9(c);while(true){if(!Cb(c))break a;if(!(Cc(c)).b6(b))continue;else return 1;}}}return 0;}
function ATQ(a,b){return Jq(b,a.Z)>=0&&GM(b,a.Z)==Jq(b,a.Z)?0:1;}
function AOz(a){var b,c,d,e;a.cF=1;b=a.e4;if(b!==null&&!b.cF)KQ(b);a:{b=a.bP;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break a;b=BI(a.bP,d);e=b.gQ();if(e===null)e=b;else{b.cF=1;EV(a.bP,d);AKK(a.bP,d,e);}if(!e.cF)e.e0();d=d+1|0;}}}if(a.f!==null)KQ(a);}
var KK=G(B$);
function AS9(a,b,c,d){var e,f,g,h;e=DK(d,a.Z);B2(d,a.Z,b);f=a.bP.p;g=0;while(true){if(g>=f){B2(d,a.Z,e);return (-1);}h=(BI(a.bP,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ART(a){return C(504);}
function A2$(a,b){return !DK(b,a.Z)?0:1;}
var Ef=G(KK);
function AY4(a,b,c,d){var e,f,g;e=DK(d,a.Z);B2(d,a.Z,b);f=a.bP.p;g=0;while(g<f){if((BI(a.bP,g)).c(b,c,d)>=0)return a.f.c(a.e4.xT,c,d);g=g+1|0;}B2(d,a.Z,e);return (-1);}
function A23(a,b){a.f=b;}
function ANp(a){return C(504);}
var W$=G(Ef);
function ATi(a,b,c,d){var e,f;e=a.bP.p;f=0;while(f<e){if((BI(a.bP,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AVt(a,b){return 0;}
function A5l(a){return C(505);}
var ADK=G(Ef);
function AN7(a,b,c,d){var e,f;e=a.bP.p;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bP,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A4f(a,b){return 0;}
function AQb(a){return C(506);}
var AAs=G(Ef);
function AOx(a,b,c,d){var e,f,g,h;e=a.bP.p;f=d.kU?0:d.df;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.Z,b);h=0;while(true){if(h>=e)break a;if((BI(a.bP,h)).cK(f,b,c,d)>=0){B2(d,a.Z,(-1));return g;}h=h+1|0;}}}return (-1);}
function A6e(a,b){return 0;}
function ASY(a){return C(507);}
var TQ=G(Ef);
function AW5(a,b,c,d){var e,f;e=a.bP.p;B2(d,a.Z,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bP,f)).cK(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A3l(a,b){return 0;}
function AOf(a){return C(508);}
function H5(){B$.call(this);this.dp=null;}
function A8l(a,b){var c=new H5();AF6(c,a,b);return c;}
function AF6(a,b,c){B8(a);a.dp=b;a.e4=c;a.Z=c.eu;}
function ANg(a,b,c,d){var e,f;e=GM(d,a.Z);D6(d,a.Z,b);f=a.dp.c(b,c,d);if(f>=0)return f;D6(d,a.Z,e);return (-1);}
function ARY(a,b,c,d){var e;e=a.dp.cy(b,c,d);if(e>=0)D6(d,a.Z,e);return e;}
function A3x(a,b,c,d,e){var f;f=a.dp.cK(b,c,d,e);if(f>=0)D6(e,a.Z,f);return f;}
function A08(a,b){return a.dp.b6(b);}
function A2r(a){var b;b=new Py;AF6(b,a.dp,a.e4);a.f=b;return b;}
function AV6(a){var b;a.cF=1;b=a.e4;if(b!==null&&!b.cF)KQ(b);b=a.dp;if(b!==null&&!b.cF){b=b.gQ();if(b!==null){a.dp.cF=1;a.dp=b;}a.dp.e0();}}
var Hk=G();
function Z(){var a=this;Hk.call(a);a.bm=0;a.cE=0;a.Q=null;a.mx=null;a.m1=null;a.T=0;}
var BaF=null;function QE(){QE=Bm(Z);AOU();}
function BA(a){var b;QE();b=new AEm;b.F=BQ(64);a.Q=b;}
function AX3(a){return null;}
function AXF(a){return a.Q;}
function AK8(a){var b,c,d,e,f;if(!a.cE)b=Iy(a.Q,0)>=2048?0:1;else{a:{c=a.Q;b=0;d=c.bx;if(b<d){e=c.F.data;f=(e[0]^(-1))>>>0|0;if(f)b=Jl(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Jl(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AZ9(a){return a.T;}
function A38(a){return a;}
function AFz(a){var b,c;if(a.m1===null){b=a.f1();c=new VQ;c.F5=a;c.x5=b;BA(c);a.m1=c;EW(c,a.cE);}return a.m1;}
function JR(a){var b,c;if(a.mx===null){b=a.f1();c=new VN;c.Em=a;c.BG=b;c.wm=a;BA(c);a.mx=c;EW(c,a.bm);a.mx.T=a.T;}return a.mx;}
function A5k(a){return 0;}
function EW(a,b){var c;c=a.bm;if(c^b){a.bm=c?0:1;a.cE=a.cE?0:1;}if(!a.T)a.T=1;return a;}
function APN(a){return a.bm;}
function NL(b,c){QE();return b.o(c);}
function Ki(b,c){var d,e;QE();if(b.d3()!==null&&c.d3()!==null){b=b.d3();c=c.d3();d=Be(b.F.data.length,c.F.data.length);e=0;a:{while(e<d){if(b.F.data[e]&c.F.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function SM(b,c){var d,e,f;QE();d=0;while(true){AUi();e=BaG.data;if(d>=e.length){f=new M6;Bp(f,C(21));f.ER=C(21);f.F$=b;N(f);}e=e[d].data;if(Bk(b,e[0]))break;d=d+1|0;}return ALQ(e[1],c);}
function AOU(){var b;b=new Hu;AUi();BaF=b;}
function AFZ(){var a=this;Z.call(a);a.p4=0;a.rj=0;a.h$=0;a.nF=0;a.eE=0;a.gN=0;a.N=null;a.bJ=null;}
function DL(){var a=new AFZ();AWB(a);return a;}
function A4H(a,b){var c=new AFZ();AOI(c,a,b);return c;}
function AWB(a){BA(a);a.N=A6h();}
function AOI(a,b,c){BA(a);a.N=A6h();a.p4=b;a.rj=c;}
function CJ(a,b){a:{if(a.p4){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eE){O2(a.N,JS(b&65535));break a;}L9(a.N,JS(b&65535));break a;}if(a.rj&&b>128){a.h$=1;b=Hg(He(b));}}}if(!(!Tb(b)&&!QL(b))){if(a.nF)O2(a.Q,b-55296|0);else L9(a.Q,b-55296|0);}if(a.eE)O2(a.N,b);else L9(a.N,b);if(!a.T&&MF(b))a.T=1;return a;}
function AMG(a,b){var c,d,e;if(!a.T&&b.T)a.T=1;if(a.nF){if(!b.cE)Gu(a.Q,b.f1());else Du(a.Q,b.f1());}else if(!b.cE)GR(a.Q,b.f1());else{GI(a.Q,b.f1());Du(a.Q,b.f1());a.cE=a.cE?0:1;a.nF=1;}if(!a.gN&&b.d3()!==null){if(a.eE){if(!b.bm)Gu(a.N,b.d3());else Du(a.N,b.d3());}else if(!b.bm)GR(a.N,b.d3());else{GI(a.N,b.d3());Du(a.N,b.d3());a.bm=a.bm?0:1;a.eE=1;}}else{c=a.bm;d=a.bJ;if(d!==null){if(!c){e=new YG;e.Fb=a;e.Cn=c;e.wa=d;e.v2=b;BA(e);a.bJ=e;}else{e=new YI;e.Gn=a;e.t1=c;e.zQ=d;e.zq=b;BA(e);a.bJ=e;}}else{if(c&&!a.eE
&&OS(a.N)){d=new YD;d.FC=a;d.zV=b;BA(d);a.bJ=d;}else if(!c){d=new YB;d.pD=a;d.o2=c;d.yA=b;BA(d);a.bJ=d;}else{d=new YC;d.n_=a;d.mU=c;d.v5=b;BA(d);a.bJ=d;}a.gN=1;}}return a;}
function Cd(a,b,c){var d,e,f,g,h;if(b>c){d=new BX;X(d);N(d);}a:{b:{if(!a.p4){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CJ(a,b);b=b+1|0;}}if(!a.eE)I_(a.N,b,c+1|0);else{d=a.N;c=c+1|0;if(b>c){d=new BJ;X(d);N(d);}e=d.bx;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.F.data;h[g]=h[g]&(Kd(d,b)|I3(d,f));}else{h=d.F.data;h[g]=h[g]&Kd(d,b);e=g+1|0;while(e<c){d.F.data[e]=0;e=e+1|0;}if(f&31){h=d.F.data;h[c]=h[c]&I3(d,f);}}Hw(d);}}}}return a;}
function AJc(a,b){var c,d,e;if(!a.T&&b.T)a.T=1;if(b.h$)a.h$=1;c=a.cE;if(!(c^b.cE)){if(!c)GR(a.Q,b.Q);else Du(a.Q,b.Q);}else if(c)Gu(a.Q,b.Q);else{GI(a.Q,b.Q);Du(a.Q,b.Q);a.cE=1;}if(!a.gN&&C9(b)!==null){c=a.bm;if(!(c^b.bm)){if(!c)GR(a.N,C9(b));else Du(a.N,C9(b));}else if(c)Gu(a.N,C9(b));else{GI(a.N,C9(b));Du(a.N,C9(b));a.bm=1;}}else{c=a.bm;d=a.bJ;if(d!==null){if(!c){e=new Qw;e.Db=a;e.vt=c;e.BP=d;e.wt=b;BA(e);a.bJ=e;}else{e=new QQ;e.Dr=a;e.Cc=c;e.q1=d;e.rl=b;BA(e);a.bJ=e;}}else{if(!a.eE&&OS(a.N)){if(!c){d=new YE;d.Gp
=a;d.sS=b;BA(d);a.bJ=d;}else{d=new YF;d.Fe=a;d.B4=b;BA(d);a.bJ=d;}}else if(!c){d=new YJ;d.vw=a;d.ub=b;d.zT=c;BA(d);a.bJ=d;}else{d=new YK;d.uw=a;d.uG=b;d.AT=c;BA(d);a.bJ=d;}a.gN=1;}}}
function V3(a,b){var c,d,e;if(!a.T&&b.T)a.T=1;if(b.h$)a.h$=1;c=a.cE;if(!(c^b.cE)){if(!c)Du(a.Q,b.Q);else GR(a.Q,b.Q);}else if(!c)Gu(a.Q,b.Q);else{GI(a.Q,b.Q);Du(a.Q,b.Q);a.cE=0;}if(!a.gN&&C9(b)!==null){c=a.bm;if(!(c^b.bm)){if(!c)Du(a.N,C9(b));else GR(a.N,C9(b));}else if(!c)Gu(a.N,C9(b));else{GI(a.N,C9(b));Du(a.N,C9(b));a.bm=0;}}else{c=a.bm;d=a.bJ;if(d!==null){if(!c){e=new Qy;e.Fa=a;e.Bp=c;e.x4=d;e.tZ=b;BA(e);a.bJ=e;}else{e=new Qz;e.Ff=a;e.A6=c;e.xA=d;e.Bl=b;BA(e);a.bJ=e;}}else{if(!a.eE&&OS(a.N)){if(!c){d=new Qu;d.Du
=a;d.y2=b;BA(d);a.bJ=d;}else{d=new Qv;d.Gl=a;d.sF=b;BA(d);a.bJ=d;}}else if(!c){d=new QA;d.C1=a;d.Cl=b;d.uA=c;BA(d);a.bJ=d;}else{d=new Qt;d.uz=a;d.A_=b;d.z6=c;BA(d);a.bJ=d;}a.gN=1;}}}
function Dd(a,b){var c;c=a.bJ;if(c!==null)return a.bm^c.o(b);return a.bm^D2(a.N,b);}
function C9(a){if(!a.gN)return a.N;return null;}
function AZv(a){return a.Q;}
function AVe(a){var b,c;if(a.bJ!==null)return a;b=C9(a);c=new Qx;c.E1=a;c.lK=b;BA(c);return EW(c,a.bm);}
function A1K(a){var b,c,d;b=new J;L(b);c=Iy(a.N,0);while(c>=0){Kk(b,GE(c));Br(b,124);c=Iy(a.N,c+1|0);}d=b.I;if(d>0)VD(b,d-1|0);return K(b);}
function APQ(a){return a.h$;}
function M6(){var a=this;Bt.call(a);a.ER=null;a.F$=null;}
function Es(){BV.call(this);this.P=null;}
function Dx(a,b,c,d){N3(a,c);a.P=b;a.j8=d;}
function A56(a){return a.P;}
function AUt(a,b){return !a.P.b6(b)&&!a.f.b6(b)?0:1;}
function A4I(a,b){return 1;}
function ASe(a){var b;a.cF=1;b=a.f;if(b!==null&&!b.cF){b=b.gQ();if(b!==null){a.f.cF=1;a.f=b;}a.f.e0();}b=a.P;if(b!==null){if(!b.cF){b=b.gQ();if(b!==null){a.P.cF=1;a.P=b;}a.P.e0();}else if(b instanceof H5&&b.e4.pk)a.P=b.f;}}
function Df(){Es.call(this);this.bh=null;}
function A7a(a,b,c){var d=new Df();Fo(d,a,b,c);return d;}
function Fo(a,b,c,d){Dx(a,b,c,d);a.bh=b;}
function AW6(a,b,c,d){var e,f;e=0;a:{while((b+a.bh.cd()|0)<=d.A){f=a.bh.bC(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bh.cd()|0;e=e+(-1)|0;}return f;}
function AYA(a){return C(509);}
function F4(){Df.call(this);this.ja=null;}
function A7V(a,b,c,d){var e=new F4();SQ(e,a,b,c,d);return e;}
function SQ(a,b,c,d,e){Fo(a,c,d,e);a.ja=b;}
function AXP(a,b,c,d){var e,f,g,h,i;e=a.ja;f=e.fU;g=e.fT;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bh.cd()|0)>d.A)break a;i=a.bh.bC(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bh.cd()|0;h=h+(-1)|0;}return i;}if((b+a.bh.cd()|0)>d.A){d.dU=1;return (-1);}i=a.bh.bC(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AX5(a){return AB6(a.ja);}
var C6=G(Es);
function AXi(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.P.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A0r(a){return C(510);}
var Fe=G(Df);
function A1k(a,b,c,d){var e;e=a.P.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AWL(a,b){a.f=b;a.P.V(b);}
var VR=G(Df);
function A5U(a,b,c,d){while((b+a.bh.cd()|0)<=d.A&&a.bh.bC(b,c)>0){b=b+a.bh.cd()|0;}return a.f.c(b,c,d);}
function ASF(a,b,c,d){var e,f,g;e=a.f.cy(b,c,d);if(e<0)return (-1);f=e-a.bh.cd()|0;while(f>=b&&a.bh.bC(f,c)>0){g=f-a.bh.cd()|0;e=f;f=g;}return e;}
var PF=G(0);
var SL=G();
function Bg(){var a=this;B.call(a);a.ob=null;a.no=null;}
function ALQ(a,b){if(!b&&a.ob===null)a.ob=a.J();else if(b&&a.no===null)a.no=EW(a.J(),1);if(b)return a.no;return a.ob;}
var Dy=G(BX);
function Xk(){var a=this;Hk.call(a);a.fU=0;a.fT=0;}
function AB6(a){var b,c,d,e,f;b=a.fU;c=a.fT;d=c!=2147483647?Id(c):C(21);e=new J;L(e);Br(e,123);f=V(e,b);Br(f,44);Br(H(f,d),125);return K(e);}
var Yr=G(BV);
function ARj(a,b,c,d){return b;}
function A2l(a){return C(511);}
function A2p(a,b){return 0;}
function AEm(){var a=this;B.call(a);a.F=null;a.bx=0;}
function A6h(){var a=new AEm();AYt(a);return a;}
function AYt(a){a.F=BQ(0);}
function L9(a,b){var c,d;c=b/32|0;if(b>=a.bx){Kl(a,c+1|0);a.bx=b+1|0;}d=a.F.data;d[c]=d[c]|1<<(b%32|0);}
function I_(a,b,c){var d,e,f,g,h;d=BP(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bx){Kl(a,f+1|0);a.bx=c;}if(d==f){g=a.F.data;g[d]=g[d]|I3(a,b)&Kd(a,c);}else{g=a.F.data;g[d]=g[d]|I3(a,b);h=d+1|0;while(h<f){a.F.data[h]=(-1);h=h+1|0;}if(c&31){g=a.F.data;g[f]=g[f]|Kd(a,c);}}}
function I3(a,b){return (-1)<<(b%32|0);}
function Kd(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function O2(a,b){var c,d,e,f;c=b/32|0;d=a.F.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bx-1|0))Hw(a);}}
function D2(a,b){var c,d;c=b/32|0;d=a.F.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Iy(a,b){var c,d,e,f;c=a.bx;if(b>=c)return (-1);d=b/32|0;e=a.F.data;f=e[d]>>>(b%32|0)|0;if(f)return Jl(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Jl(e[f])|0;f=f+1|0;}return (-1);}
function Kl(a,b){var c;c=a.F.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.F=JB(a.F,c);}
function Hw(a){var b,c,d;b=(a.bx+31|0)/32|0;a.bx=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=X7(a.F.data[c]);if(d<32)break;c=c+(-1)|0;a.bx=a.bx-32|0;}a.bx=a.bx-d|0;}}
function Du(a,b){var c,d,e,f;c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]&b.F.data[d];d=d+1|0;}while(true){f=a.F.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bx=Be(a.bx,b.bx);Hw(a);}
function Gu(a,b){var c,d,e;c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]&(b.F.data[d]^(-1));d=d+1|0;}Hw(a);}
function GR(a,b){var c,d,e;c=Bd(a.bx,b.bx);a.bx=c;Kl(a,(c+31|0)/32|0);c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]|b.F.data[d];d=d+1|0;}}
function GI(a,b){var c,d,e;c=Bd(a.bx,b.bx);a.bx=c;Kl(a,(c+31|0)/32|0);c=Be(a.F.data.length,b.F.data.length);d=0;while(d<c){e=a.F.data;e[d]=e[d]^b.F.data[d];d=d+1|0;}Hw(a);}
function OS(a){return a.bx?0:1;}
function Pm(){var a=this;B$.call(a);a.nn=null;a.xz=0;}
function A2w(a){var b,c,d;b=!a.xz?C(64):C(512);c=a.nn.K();d=new J;L(d);H(H(H(d,C(513)),b),c);return K(d);}
function RN(){var a=this;B$.call(a);a.le=null;a.mn=null;}
function AHy(a,b){var c=new RN();AIQ(c,a,b);return c;}
function AIQ(a,b,c){B8(a);a.le=b;a.mn=c;}
function ANP(a,b,c,d){var e,f,g,h,i;e=a.le.c(b,c,d);if(e<0)a:{f=a.mn;g=d.df;e=d.A;h=b+1|0;e=BP(h,e);if(e>0){d.dU=1;e=(-1);}else{i=Q(c,b);if(!f.nn.o(i))e=(-1);else{if(CX(i)){if(e<0&&Dm(Q(c,h))){e=(-1);break a;}}else if(Dm(i)&&b>g&&CX(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A2g(a,b){a.f=b;a.mn.f=b;a.le.V(b);}
function A2H(a){var b,c,d;b=a.le;c=a.mn;d=new J;L(d);H(H(H(H(d,C(514)),b),C(515)),c);return K(d);}
function AOj(a,b){return 1;}
function AN9(a,b){return 1;}
function D$(){var a=this;B$.call(a);a.dt=null;a.nN=0;}
function A0R(a){var b=new D$();ACN(b,a);return b;}
function ACN(a,b){B8(a);a.dt=b.mi();a.nN=b.bm;}
function AZp(a,b,c,d){var e,f,g,h;e=d.A;if(b<e){f=b+1|0;g=Q(c,b);if(a.o(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(JK(g,f)&&a.o(EX(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A5e(a){var b,c,d;b=!a.nN?C(64):C(512);c=a.dt.K();d=new J;L(d);H(H(H(d,C(513)),b),c);return K(d);}
function AP2(a,b){return a.dt.o(b);}
function ANK(a,b){if(b instanceof Em)return NL(a.dt,b.hd);if(b instanceof EU)return NL(a.dt,b.dr);if(b instanceof D$)return Ki(a.dt,b.dt);if(!(b instanceof EM))return 1;return Ki(a.dt,b.fP);}
function ARc(a){return a.dt;}
function A31(a,b){a.f=b;}
function APG(a,b){return 1;}
var M3=G(D$);
function AQ2(a,b){return a.dt.o(Hg(He(b)));}
function AV_(a){var b,c,d;b=!a.nN?C(64):C(512);c=a.dt.K();d=new J;L(d);H(H(H(d,C(516)),b),c);return K(d);}
function AFT(){var a=this;Ce.call(a);a.pK=null;a.s9=0;}
function AQt(a){var b=new AFT();ASQ(b,a);return b;}
function ASQ(a,b){D7(a);a.pK=b.mi();a.s9=b.bm;}
function A0V(a,b,c){return !a.pK.o(FW(Fy(Q(c,b))))?(-1):1;}
function AX$(a){var b,c,d;b=!a.s9?C(64):C(512);c=a.pK.K();d=new J;L(d);H(H(H(d,C(516)),b),c);return K(d);}
function EM(){var a=this;Ce.call(a);a.fP=null;a.uK=0;}
function AVa(a){var b=new EM();ATD(b,a);return b;}
function ATD(a,b){D7(a);a.fP=b.mi();a.uK=b.bm;}
function W0(a,b,c){return !a.fP.o(Q(c,b))?(-1):1;}
function ARo(a){var b,c,d;b=!a.uK?C(64):C(512);c=a.fP.K();d=new J;L(d);H(H(H(d,C(513)),b),c);return K(d);}
function ATm(a,b){if(b instanceof EU)return NL(a.fP,b.dr);if(b instanceof EM)return Ki(a.fP,b.fP);if(!(b instanceof D$)){if(!(b instanceof Em))return 1;return 0;}return Ki(a.fP,b.dt);}
function YM(){var a=this;B$.call(a);a.jp=null;a.qq=null;a.k_=0;}
function A4v(a,b){var c=new YM();AXj(c,a,b);return c;}
function AXj(a,b,c){B8(a);a.jp=b;a.k_=c;}
function AR4(a,b){a.f=b;}
function Ls(a){if(a.qq===null)a.qq=Gv(a.jp);return a.qq;}
function AUm(a){var b,c;b=Ls(a);c=new J;L(c);H(H(c,C(517)),b);return K(c);}
function AMZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.A;f=BQ(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?D4([k,l]):D4([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.k_;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jp.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.k_==3){k=f[0];m=a.jp.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.k_==2){b=f[0];m=a.jp.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AYb(a,b){return b instanceof YM&&!Bk(Ls(b),Ls(a))?0:1;}
function AVj(a,b){return 1;}
function EU(){Ce.call(this);this.dr=0;}
function AF8(a){var b=new EU();ATH(b,a);return b;}
function ATH(a,b){D7(a);a.dr=b;}
function A0K(a){return 1;}
function AQq(a,b,c){return a.dr!=Q(c,b)?(-1):1;}
function APs(a,b,c,d){var e,f,g;if(!(c instanceof BB))return IY(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Kg(c,a.dr,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ARe(a,b,c,d,e){var f;if(!(d instanceof BB))return I7(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HF(d,a.dr,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AVv(a){var b,c;b=a.dr;c=new J;L(c);Br(c,b);return K(c);}
function AVb(a,b){if(b instanceof EU)return b.dr!=a.dr?0:1;if(!(b instanceof EM)){if(b instanceof D$)return b.o(a.dr);if(!(b instanceof Em))return 1;return 0;}return W0(b,0,Wc(a.dr))<=0?0:1;}
function AIC(){Ce.call(this);this.o0=0;}
function A25(a){var b=new AIC();A1F(b,a);return b;}
function A1F(a,b){D7(a);a.o0=FW(Fy(b));}
function AWU(a,b,c){return a.o0!=FW(Fy(Q(c,b)))?(-1):1;}
function A2f(a){var b,c;b=a.o0;c=new J;L(c);Br(H(c,C(518)),b);return K(c);}
function AFf(){var a=this;Ce.call(a);a.oF=0;a.x2=0;}
function AYy(a){var b=new AFf();AUf(b,a);return b;}
function AUf(a,b){D7(a);a.oF=b;a.x2=JS(b);}
function AM$(a,b,c){return a.oF!=Q(c,b)&&a.x2!=Q(c,b)?(-1):1;}
function AQE(a){var b,c;b=a.oF;c=new J;L(c);Br(H(c,C(519)),b);return K(c);}
function F8(){var a=this;B$.call(a);a.j1=0;a.ni=null;a.mR=null;a.mL=0;}
function A8T(a,b){var c=new F8();Qa(c,a,b);return c;}
function Qa(a,b,c){B8(a);a.j1=1;a.mR=b;a.mL=c;}
function A5t(a,b){a.f=b;}
function AS8(a,b,c,d){var e,f,g,h,i,j,k,l;e=BQ(4);f=d.A;if(b>=f)return (-1);g=LC(a,b,c,f);h=b+a.j1|0;i=AMe(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C_(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LC(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AMe(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.j1|0;if(h>=f){b=k;break a;}g=LC(a,h,c,f);b=k;}}}if(b!=a.mL)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.mR.data[g])break;g=g+1|0;}return (-1);}
function MA(a){var b,c;if(a.ni===null){b=new J;L(b);c=0;while(c<a.mL){Kk(b,GE(a.mR.data[c]));c=c+1|0;}a.ni=K(b);}return a.ni;}
function A18(a){var b,c;b=MA(a);c=new J;L(c);H(H(c,C(520)),b);return K(c);}
function LC(a,b,c,d){var e,f,g;a.j1=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(JK(e,f)){g=B6(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CX(g[0])&&Dm(g[1])?EX(g[0],g[1]):g[0];a.j1=2;}}return e;}
function ARk(a,b){return b instanceof F8&&!Bk(MA(b),MA(a))?0:1;}
function A24(a,b){return 1;}
var Wk=G(F8);
var ACk=G(F8);
var WW=G(C6);
function AYO(a,b,c,d){var e;while(true){e=a.P.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var Zl=G(C6);
function A1C(a,b,c,d){var e;e=a.P.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.P.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var GT=G(C6);
function A3X(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.P.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A4V(a,b){a.f=b;a.P.V(b);}
var Q3=G(GT);
function ARa(a,b,c,d){var e;e=a.P.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A1U(a,b){a.f=b;}
function GA(){var a=this;C6.call(a);a.gj=null;a.dV=0;}
function BaH(a,b,c,d,e){var f=new GA();M2(f,a,b,c,d,e);return f;}
function M2(a,b,c,d,e,f){Dx(a,c,d,e);a.gj=b;a.dV=f;}
function A6b(a,b,c,d){var e,f;e=Xi(d,a.dV);if(!a.P.M(d))return a.f.c(b,c,d);if(e>=a.gj.fT)return a.f.c(b,c,d);f=a.dV;e=e+1|0;E2(d,f,e);f=a.P.c(b,c,d);if(f>=0){E2(d,a.dV,0);return f;}f=a.dV;e=e+(-1)|0;E2(d,f,e);if(e>=a.gj.fU)return a.f.c(b,c,d);E2(d,a.dV,0);return (-1);}
function AVH(a){return AB6(a.gj);}
var PC=G(GA);
function AQJ(a,b,c,d){var e,f,g;e=0;f=a.gj.fT;a:{while(true){g=a.P.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gj.fU)return (-1);return a.f.c(b,c,d);}
var Ss=G(C6);
function AWa(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.P.c(b,c,d);}
var Z1=G(GT);
function AOk(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.P.c(b,c,d);return e;}
var Uu=G(GA);
function AXy(a,b,c,d){var e,f,g;e=Xi(d,a.dV);if(!a.P.M(d))return a.f.c(b,c,d);f=a.gj;if(e>=f.fT){E2(d,a.dV,0);return a.f.c(b,c,d);}if(e<f.fU){E2(d,a.dV,e+1|0);g=a.P.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){E2(d,a.dV,0);return g;}E2(d,a.dV,e+1|0);g=a.P.c(b,c,d);}return g;}
var St=G(Es);
function A52(a,b,c,d){var e;e=d.A;if(e>b)return a.f.cK(b,e,c,d);return a.f.c(b,c,d);}
function AUV(a,b,c,d){var e;e=d.A;if(a.f.cK(b,e,c,d)>=0)return b;return (-1);}
function A2M(a){return C(521);}
function Yx(){Es.call(this);this.nl=null;}
function ATn(a,b,c,d){var e,f;e=d.A;f=AC3(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cK(b,e,c,d);return a.f.c(b,c,d);}
function AM0(a,b,c,d){var e,f,g,h;e=d.A;f=a.f.cy(b,c,d);if(f<0)return (-1);g=AC3(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.f.cK(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.nl.i5(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AC3(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nl.i5(Q(d,b)))break;b=b+1|0;}return b;}
function A3r(a){return C(522);}
var FL=G();
var BaI=null;var BaJ=null;function Y8(b){var c;if(!(b&1)){c=BaJ;if(c!==null)return c;c=new ADl;BaJ=c;return c;}c=BaI;if(c!==null)return c;c=new ADk;BaI=c;return c;}
var AFc=G(Df);
function ANA(a,b,c,d){var e;a:{while(true){if((b+a.bh.cd()|0)>d.A)break a;e=a.bh.bC(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var VL=G(Fe);
function ASt(a,b,c,d){var e;if((b+a.bh.cd()|0)<=d.A){e=a.bh.bC(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var YX=G(F4);
function A3A(a,b,c,d){var e,f,g,h,i;e=a.ja;f=e.fU;g=e.fT;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bh.cd()|0)>d.A)break a;i=a.bh.bC(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bh.cd()|0)>d.A){d.dU=1;return (-1);}i=a.bh.bC(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Z0=G(Df);
function ATj(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bh.cd()|0)<=d.A){e=a.bh.bC(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ACv=G(Fe);
function ANI(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.P.c(b,c,d);}
var Sk=G(F4);
function A3P(a,b,c,d){var e,f,g,h,i,j;e=a.ja;f=e.fU;g=e.fT;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bh.cd()|0)<=d.A){i=a.bh.bC(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bh.cd()|0)>d.A){d.dU=1;return (-1);}j=a.bh.bC(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LA=G(BV);
function A09(a,b,c,d){if(b&&!(d.gO&&b==d.df))return (-1);return a.f.c(b,c,d);}
function A0B(a,b){return 0;}
function ASv(a){return C(523);}
function AGc(){BV.call(this);this.wc=0;}
function A4l(a){var b=new AGc();AQ5(b,a);return b;}
function AQ5(a,b){B8(a);a.wc=b;}
function AX1(a,b,c,d){var e,f,g;e=b<d.A?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.kU?0:d.df;return (e!=32&&!Z4(a,e,b,g,c)?0:1)^(f!=32&&!Z4(a,f,b-1|0,g,c)?0:1)^a.wc?(-1):a.f.c(b,c,d);}
function AX_(a,b){return 0;}
function A5_(a){return C(524);}
function Z4(a,b,c,d,e){var f;if(!K5(b)&&b!=95){a:{if(CI(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(K5(f))return 0;if(CI(f)!=6)return 1;}}return 1;}return 0;}
var Yu=G(BV);
function AQ4(a,b,c,d){if(b!=d.jc)return (-1);return a.f.c(b,c,d);}
function AWC(a,b){return 0;}
function AXR(a){return C(525);}
function Wg(){BV.call(this);this.hq=0;}
function A7j(a){var b=new Wg();AL8(b,a);return b;}
function AL8(a,b){B8(a);a.hq=b;}
function A2Q(a,b,c,d){var e,f,g;e=!d.gO?M(c):d.A;if(b>=e){B2(d,a.hq,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hq,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hq,0);return a.f.c(b,c,d);}
function AYH(a,b){var c;c=!DK(b,a.hq)?0:1;B2(b,a.hq,(-1));return c;}
function A1l(a){return C(526);}
var AD8=G(BV);
function A2d(a,b,c,d){if(b<(d.kU?M(c):d.A))return (-1);d.dU=1;d.FY=1;return a.f.c(b,c,d);}
function AWT(a,b){return 0;}
function AQf(a){return C(527);}
function XD(){BV.call(this);this.z_=null;}
function AYC(a,b,c,d){a:{if(b!=d.A){if(!b)break a;if(d.gO&&b==d.df)break a;if(a.z_.A9(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function AP9(a,b){return 0;}
function AXL(a){return C(528);}
var AIo=G(B$);
function A7q(){var a=new AIo();A13(a);return a;}
function A13(a){B8(a);}
function AWe(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.dU=1;return (-1);}g=Q(c,b);if(CX(g)){h=b+2|0;if(h<=e&&JK(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function AO9(a){return C(529);}
function AYd(a,b){a.f=b;}
function A10(a){return (-2147483602);}
function AYc(a,b){return 1;}
function AFY(){B$.call(this);this.nK=null;}
function A7g(a){var b=new AFY();AOB(b,a);return b;}
function AOB(a,b){B8(a);a.nK=b;}
function A19(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.dU=1;return (-1);}g=Q(c,b);if(CX(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(JK(g,h))return a.nK.i5(EX(g,h))?(-1):a.f.c(b,c,d);}}return a.nK.i5(g)?(-1):a.f.c(f,c,d);}
function AYN(a){return C(65);}
function A3q(a,b){a.f=b;}
function AMM(a){return (-2147483602);}
function AWs(a,b){return 1;}
function AMc(){BV.call(this);this.jV=0;}
function A61(a){var b=new AMc();AZR(b,a);return b;}
function AZR(a,b){B8(a);a.jV=b;}
function ARn(a,b,c,d){var e;e=!d.gO?M(c):d.A;if(b>=e){B2(d,a.jV,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.jV,1);return a.f.c(b+1|0,c,d);}return (-1);}
function AZQ(a,b){var c;c=!DK(b,a.jV)?0:1;B2(b,a.jV,(-1));return c;}
function ARI(a){return C(526);}
function AK_(){BV.call(this);this.iW=0;}
function A6P(a){var b=new AK_();AZ$(b,a);return b;}
function AZ$(a,b){B8(a);a.iW=b;}
function AS1(a,b,c,d){if((!d.gO?M(c)-b|0:d.A-b|0)<=0){B2(d,a.iW,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.iW,1);return a.f.c(b+1|0,c,d);}
function AZK(a,b){var c;c=!DK(b,a.iW)?0:1;B2(b,a.iW,(-1));return c;}
function ANn(a){return C(530);}
function AJb(){BV.call(this);this.g1=0;}
function A6v(a){var b=new AJb();A6d(b,a);return b;}
function A6d(a,b){B8(a);a.g1=b;}
function A0w(a,b,c,d){var e,f,g;e=!d.gO?M(c)-b|0:d.A-b|0;if(!e){B2(d,a.g1,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.g1,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.g1,0);return a.f.c(b,c,d);}B2(d,a.g1,0);return a.f.c(b,c,d);default:}return (-1);}
function AOF(a,b){var c;c=!DK(b,a.g1)?0:1;B2(b,a.g1,(-1));return c;}
function AP$(a){return C(531);}
function Ir(){var a=this;B$.call(a);a.re=0;a.hJ=0;}
function A8Q(a,b){var c=new Ir();QK(c,a,b);return c;}
function QK(a,b,c){B8(a);a.re=b;a.hJ=c;}
function AND(a,b,c,d){var e,f,g,h;e=G3(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.hJ,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&JS(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A20(a,b){a.f=b;}
function G3(a,b){var c,d;c=a.re;d=GM(b,c);c=Jq(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.nO)?Cw(b.nO,d,c):null;}
function AXq(a){var b,c;b=a.Z;c=new J;L(c);V(H(c,C(532)),b);return K(c);}
function AT9(a,b){var c;c=!DK(b,a.hJ)?0:1;B2(b,a.hJ,(-1));return c;}
var AMi=G(Ir);
function A7F(a,b){var c=new AMi();A4L(c,a,b);return c;}
function A4L(a,b,c){QK(a,b,c);}
function AOK(a,b,c,d){var e,f;e=G3(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=!ACM(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.hJ,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AVr(a,b,c,d){var e,f;e=G3(a,d);f=d.df;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=Zn(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ANo(a,b,c,d,e){var f,g;f=G3(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Rm(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A1x(a,b){return 1;}
function A4U(a){var b,c;b=a.Z;c=new J;L(c);V(H(c,C(533)),b);return K(c);}
function AKs(){Ir.call(this);this.Dd=0;}
function A6Q(a,b){var c=new AKs();AP7(c,a,b);return c;}
function AP7(a,b,c){QK(a,b,c);}
function ARU(a,b,c,d){var e,f;e=G3(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.hJ,M(e));return a.f.c(b+M(e)|0,c,d);}if(FW(Fy(Q(e,f)))!=FW(Fy(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AYa(a){var b,c;b=a.Dd;c=new J;L(c);V(H(c,C(534)),b);return K(c);}
var Qm=G(G7);
function APT(a,b,c,d,e){Xn(a,b,c,d,e);return a;}
function AX4(a,b,c,d){AEv(a,b,c,d);return a;}
function AYr(a,b){Nj(a,b);}
function A4a(a,b,c){AEN(a,b,c);return a;}
function AAG(){var a=this;Ce.call(a);a.cu=null;a.px=null;a.nW=null;}
function AO2(a,b,c){return !Lz(a,c,b)?(-1):a.bM;}
function AXZ(a,b,c,d){var e,f,g;e=d.A;while(true){if(b>e)return (-1);f=Q(a.cu,a.bM-1|0);a:{while(true){g=a.bM;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&Lz(a,c,b))break;b=b+ABk(a.px,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bM|0,c,d)>=0)break;b=b+1|0;}return b;}
function AZV(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cu,0);g=(M(d)-c|0)-a.bM|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&Lz(a,d,c))break;c=c-ABk(a.nW,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bM|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ATe(a){var b,c;b=a.cu;c=new J;L(c);H(H(c,C(535)),b);return K(c);}
function AQw(a,b){var c;if(b instanceof EU)return b.dr!=Q(a.cu,0)?0:1;if(b instanceof EM)return W0(b,0,Cw(a.cu,0,1))<=0?0:1;if(!(b instanceof D$)){if(!(b instanceof Em))return 1;return M(a.cu)>1&&b.hd==EX(Q(a.cu,0),Q(a.cu,1))?1:0;}a:{b:{b=b;if(!b.o(Q(a.cu,0))){if(M(a.cu)<=1)break b;if(!b.o(EX(Q(a.cu,0),Q(a.cu,1))))break b;}c=1;break a;}c=0;}return c;}
function Lz(a,b,c){var d;d=0;while(d<a.bM){if(Q(b,d+c|0)!=Q(a.cu,d))return 0;d=d+1|0;}return 1;}
function AFe(){Ce.call(this);this.jY=null;}
function A8S(a){var b=new AFe();A4q(b,a);return b;}
function A4q(a,b){var c,d,e;D7(a);c=new J;L(c);d=0;while(true){e=BP(d,b.I);if(e>=0){a.jY=K(c);a.bM=c.I;return;}if(d<0)break;if(e>=0)break;Br(c,FW(Fy(b.D.data[d])));d=d+1|0;}b=new BJ;X(b);N(b);}
function ARZ(a,b,c){var d;d=0;while(true){if(d>=M(a.jY))return M(a.jY);if(Q(a.jY,d)!=FW(Fy(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function AQF(a){var b,c;b=a.jY;c=new J;L(c);H(H(c,C(536)),b);return K(c);}
function PG(){Ce.call(this);this.h0=null;}
function A3B(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.h0))return M(a.h0);e=Q(a.h0,d);f=b+d|0;if(e!=Q(c,f)&&JS(Q(a.h0,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A4s(a){var b,c;b=a.h0;c=new J;L(c);H(H(c,C(537)),b);return K(c);}
var Hu=G();
var BaK=null;var BaL=null;var BaG=null;function AUi(){AUi=Bm(Hu);APh();}
function APh(){BaK=A7m();BaL=A79();BaG=I($rt_arraycls(B),[I(B,[C(538),A7t()]),I(B,[C(539),A6t()]),I(B,[C(540),A8C()]),I(B,[C(541),A8H()]),I(B,[C(542),BaL]),I(B,[C(543),A8e()]),I(B,[C(544),A6U()]),I(B,[C(545),A7H()]),I(B,[C(546),A7E()]),I(B,[C(547),A6A()]),I(B,[C(548),A6H()]),I(B,[C(549),A7K()]),I(B,[C(550),A6_()]),I(B,[C(551),A6p()]),I(B,[C(552),A8F()]),I(B,[C(553),A6G()]),I(B,[C(554),A8c()]),I(B,[C(555),A7U()]),I(B,[C(556),A8d()]),I(B,[C(557),A6C()]),I(B,[C(558),A8K()]),I(B,[C(559),A7O()]),I(B,[C(560),A63()]),
I(B,[C(561),A8A()]),I(B,[C(562),A8x()]),I(B,[C(563),A7n()]),I(B,[C(564),A6B()]),I(B,[C(565),A8q()]),I(B,[C(566),BaK]),I(B,[C(567),A66()]),I(B,[C(568),A7J()]),I(B,[C(569),BaK]),I(B,[C(570),A6n()]),I(B,[C(571),BaL]),I(B,[C(572),A6L()]),I(B,[C(573),R(0,127)]),I(B,[C(574),R(128,255)]),I(B,[C(575),R(256,383)]),I(B,[C(576),R(384,591)]),I(B,[C(577),R(592,687)]),I(B,[C(578),R(688,767)]),I(B,[C(579),R(768,879)]),I(B,[C(580),R(880,1023)]),I(B,[C(581),R(1024,1279)]),I(B,[C(582),R(1280,1327)]),I(B,[C(583),R(1328,1423)]),
I(B,[C(584),R(1424,1535)]),I(B,[C(585),R(1536,1791)]),I(B,[C(586),R(1792,1871)]),I(B,[C(587),R(1872,1919)]),I(B,[C(588),R(1920,1983)]),I(B,[C(589),R(2304,2431)]),I(B,[C(590),R(2432,2559)]),I(B,[C(591),R(2560,2687)]),I(B,[C(592),R(2688,2815)]),I(B,[C(593),R(2816,2943)]),I(B,[C(594),R(2944,3071)]),I(B,[C(595),R(3072,3199)]),I(B,[C(596),R(3200,3327)]),I(B,[C(597),R(3328,3455)]),I(B,[C(598),R(3456,3583)]),I(B,[C(599),R(3584,3711)]),I(B,[C(600),R(3712,3839)]),I(B,[C(601),R(3840,4095)]),I(B,[C(602),R(4096,4255)]),
I(B,[C(603),R(4256,4351)]),I(B,[C(604),R(4352,4607)]),I(B,[C(605),R(4608,4991)]),I(B,[C(606),R(4992,5023)]),I(B,[C(607),R(5024,5119)]),I(B,[C(608),R(5120,5759)]),I(B,[C(609),R(5760,5791)]),I(B,[C(610),R(5792,5887)]),I(B,[C(611),R(5888,5919)]),I(B,[C(612),R(5920,5951)]),I(B,[C(613),R(5952,5983)]),I(B,[C(614),R(5984,6015)]),I(B,[C(615),R(6016,6143)]),I(B,[C(616),R(6144,6319)]),I(B,[C(617),R(6400,6479)]),I(B,[C(618),R(6480,6527)]),I(B,[C(619),R(6528,6623)]),I(B,[C(620),R(6624,6655)]),I(B,[C(621),R(6656,6687)]),
I(B,[C(622),R(7424,7551)]),I(B,[C(623),R(7552,7615)]),I(B,[C(624),R(7616,7679)]),I(B,[C(625),R(7680,7935)]),I(B,[C(626),R(7936,8191)]),I(B,[C(627),R(8192,8303)]),I(B,[C(628),R(8304,8351)]),I(B,[C(629),R(8352,8399)]),I(B,[C(630),R(8400,8447)]),I(B,[C(631),R(8448,8527)]),I(B,[C(632),R(8528,8591)]),I(B,[C(633),R(8592,8703)]),I(B,[C(634),R(8704,8959)]),I(B,[C(635),R(8960,9215)]),I(B,[C(636),R(9216,9279)]),I(B,[C(637),R(9280,9311)]),I(B,[C(638),R(9312,9471)]),I(B,[C(639),R(9472,9599)]),I(B,[C(640),R(9600,9631)]),
I(B,[C(641),R(9632,9727)]),I(B,[C(642),R(9728,9983)]),I(B,[C(643),R(9984,10175)]),I(B,[C(644),R(10176,10223)]),I(B,[C(645),R(10224,10239)]),I(B,[C(646),R(10240,10495)]),I(B,[C(647),R(10496,10623)]),I(B,[C(648),R(10624,10751)]),I(B,[C(649),R(10752,11007)]),I(B,[C(650),R(11008,11263)]),I(B,[C(651),R(11264,11359)]),I(B,[C(652),R(11392,11519)]),I(B,[C(653),R(11520,11567)]),I(B,[C(654),R(11568,11647)]),I(B,[C(655),R(11648,11743)]),I(B,[C(656),R(11776,11903)]),I(B,[C(657),R(11904,12031)]),I(B,[C(658),R(12032,12255)]),
I(B,[C(659),R(12272,12287)]),I(B,[C(660),R(12288,12351)]),I(B,[C(661),R(12352,12447)]),I(B,[C(662),R(12448,12543)]),I(B,[C(663),R(12544,12591)]),I(B,[C(664),R(12592,12687)]),I(B,[C(665),R(12688,12703)]),I(B,[C(666),R(12704,12735)]),I(B,[C(667),R(12736,12783)]),I(B,[C(668),R(12784,12799)]),I(B,[C(669),R(12800,13055)]),I(B,[C(670),R(13056,13311)]),I(B,[C(671),R(13312,19893)]),I(B,[C(672),R(19904,19967)]),I(B,[C(673),R(19968,40959)]),I(B,[C(674),R(40960,42127)]),I(B,[C(675),R(42128,42191)]),I(B,[C(676),R(42752,
42783)]),I(B,[C(677),R(43008,43055)]),I(B,[C(678),R(44032,55203)]),I(B,[C(679),R(55296,56191)]),I(B,[C(680),R(56192,56319)]),I(B,[C(681),R(56320,57343)]),I(B,[C(682),R(57344,63743)]),I(B,[C(683),R(63744,64255)]),I(B,[C(684),R(64256,64335)]),I(B,[C(685),R(64336,65023)]),I(B,[C(686),R(65024,65039)]),I(B,[C(687),R(65040,65055)]),I(B,[C(688),R(65056,65071)]),I(B,[C(689),R(65072,65103)]),I(B,[C(690),R(65104,65135)]),I(B,[C(691),R(65136,65279)]),I(B,[C(692),R(65280,65519)]),I(B,[C(693),R(0,1114111)]),I(B,[C(694),
A7L()]),I(B,[C(695),B7(0,1)]),I(B,[C(696),KA(62,1)]),I(B,[C(697),B7(1,1)]),I(B,[C(698),B7(2,1)]),I(B,[C(699),B7(3,0)]),I(B,[C(700),B7(4,0)]),I(B,[C(701),B7(5,1)]),I(B,[C(702),KA(448,1)]),I(B,[C(703),B7(6,1)]),I(B,[C(704),B7(7,0)]),I(B,[C(705),B7(8,1)]),I(B,[C(706),KA(3584,1)]),I(B,[C(707),B7(9,1)]),I(B,[C(708),B7(10,1)]),I(B,[C(709),B7(11,1)]),I(B,[C(710),KA(28672,0)]),I(B,[C(711),B7(12,0)]),I(B,[C(712),B7(13,0)]),I(B,[C(713),B7(14,0)]),I(B,[C(714),A76(983040,1,1)]),I(B,[C(715),B7(15,0)]),I(B,[C(716),B7(16,
1)]),I(B,[C(717),B7(18,1)]),I(B,[C(718),A60(19,0,1)]),I(B,[C(719),KA(1643118592,1)]),I(B,[C(720),B7(20,0)]),I(B,[C(721),B7(21,0)]),I(B,[C(722),B7(22,0)]),I(B,[C(723),B7(23,0)]),I(B,[C(724),B7(24,1)]),I(B,[C(725),KA(2113929216,1)]),I(B,[C(726),B7(25,1)]),I(B,[C(727),B7(26,0)]),I(B,[C(728),B7(27,0)]),I(B,[C(729),B7(28,1)]),I(B,[C(730),B7(29,0)]),I(B,[C(731),B7(30,0)])]);}
function W5(){Ce.call(this);this.nG=0;}
function AUz(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.nG!=Hg(He(EX(e,d)))?(-1):2;}
function A5$(a){var b,c;b=Gv(GE(a.nG));c=new J;L(c);H(H(c,C(518)),b);return K(c);}
function N_(){B$.call(this);this.gt=0;}
function ASX(a){var b=new N_();AOn(b,a);return b;}
function AOn(a,b){B8(a);a.gt=b;}
function A2m(a,b){a.f=b;}
function AYI(a,b,c,d){var e,f;e=b+1|0;if(e>d.A){d.dU=1;return (-1);}f=Q(c,b);if(b>d.df&&CX(Q(c,b-1|0)))return (-1);if(a.gt!=f)return (-1);return a.f.c(e,c,d);}
function AQu(a,b,c,d){var e,f,g,h;if(!(c instanceof BB))return IY(a,b,c,d);e=d.df;f=d.A;while(true){if(b>=f)return (-1);g=Kg(c,a.gt,b);if(g<0)return (-1);if(g>e&&CX(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AY8(a,b,c,d,e){var f,g;if(!(d instanceof BB))return I7(a,b,c,d,e);f=e.df;a:{while(true){if(c<b)return (-1);g=HF(d,a.gt,c);if(g<0)break a;if(g<b)break a;if(g>f&&CX(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AUY(a){var b,c;b=a.gt;c=new J;L(c);Br(c,b);return K(c);}
function ANl(a,b){if(b instanceof EU)return 0;if(b instanceof EM)return 0;if(b instanceof D$)return 0;if(b instanceof Em)return 0;if(b instanceof Of)return 0;if(!(b instanceof N_))return 1;return b.gt!=a.gt?0:1;}
function AU5(a,b){return 1;}
function Of(){B$.call(this);this.gd=0;}
function A0z(a){var b=new Of();ASZ(b,a);return b;}
function ASZ(a,b){B8(a);a.gd=b;}
function AYq(a,b){a.f=b;}
function AM5(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;g=BP(f,e);if(g>0){d.dU=1;return (-1);}h=Q(c,b);if(g<0&&Dm(Q(c,f)))return (-1);if(a.gd!=h)return (-1);return a.f.c(f,c,d);}
function A2A(a,b,c,d){var e,f;if(!(c instanceof BB))return IY(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Kg(c,a.gd,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dm(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AUu(a,b,c,d,e){var f,g;if(!(d instanceof BB))return I7(a,b,c,d,e);f=e.A;a:{while(true){if(c<b)return (-1);g=HF(d,a.gd,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dm(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A5D(a){var b,c;b=a.gd;c=new J;L(c);Br(c,b);return K(c);}
function AO3(a,b){if(b instanceof EU)return 0;if(b instanceof EM)return 0;if(b instanceof D$)return 0;if(b instanceof Em)return 0;if(b instanceof N_)return 0;if(!(b instanceof Of))return 1;return b.gd!=a.gd?0:1;}
function A2J(a,b){return 1;}
function Em(){var a=this;Ce.call(a);a.kl=0;a.jJ=0;a.hd=0;}
function A3a(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.kl==e&&a.jJ==d?2:(-1);}
function A1L(a,b,c,d){var e,f;if(!(c instanceof BB))return IY(a,b,c,d);e=d.A;while(b<e){b=Kg(c,a.kl,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.jJ==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AOo(a,b,c,d,e){var f;if(!(d instanceof BB))return I7(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HF(d,a.jJ,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kl==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A4W(a){var b,c,d;b=a.kl;c=a.jJ;d=new J;L(d);Br(d,b);Br(d,c);return K(d);}
function A26(a,b){if(b instanceof Em)return b.hd!=a.hd?0:1;if(b instanceof D$)return b.o(a.hd);if(b instanceof EU)return 0;if(!(b instanceof EM))return 1;return 0;}
var ADk=G(FL);
function AOs(a,b){return b!=10?0:1;}
function AT4(a,b,c){return b!=10?0:1;}
var ADl=G(FL);
function A3Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AV0(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AHN(){var a=this;B.call(a);a.oO=null;a.mT=null;a.jC=0;a.w5=0;}
function A1Z(a){var b=new AHN();AQ3(b,a);return b;}
function AQ3(a,b){var c,d;while(true){c=a.jC;if(b<c)break;a.jC=c<<1|1;}d=c<<1|1;a.jC=d;d=d+1|0;a.oO=BQ(d);a.mT=BQ(d);a.w5=b;}
function Sl(a,b,c){var d,e,f,g;d=0;e=a.jC;f=b&e;while(true){g=a.oO.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mT.data[f]=c;}
function ABk(a,b){var c,d,e,f;c=a.jC;d=b&c;e=0;while(true){f=a.oO.data[d];if(!f)break;if(f==b)return a.mT.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.w5;}
var AFs=G();
var N9=G(Bg);
function A7m(){var a=new N9();AQK(a);return a;}
function AQK(a){}
function AKA(a){return CJ(Cd(DL(),9,13),32);}
var Nz=G(Bg);
function A79(){var a=new Nz();AUZ(a);return a;}
function AUZ(a){}
function AK7(a){return Cd(DL(),48,57);}
var AHH=G(Bg);
function A7t(){var a=new AHH();AQh(a);return a;}
function AQh(a){}
function A3u(a){return Cd(DL(),97,122);}
var AH3=G(Bg);
function A6t(){var a=new AH3();AQ7(a);return a;}
function AQ7(a){}
function AU8(a){return Cd(DL(),65,90);}
var AH5=G(Bg);
function A8C(){var a=new AH5();AN2(a);return a;}
function AN2(a){}
function APx(a){return Cd(DL(),0,127);}
var N5=G(Bg);
function A8H(){var a=new N5();AON(a);return a;}
function AON(a){}
function AF1(a){return Cd(Cd(DL(),97,122),65,90);}
var L7=G(N5);
function A8e(){var a=new L7();AQS(a);return a;}
function AQS(a){}
function AGu(a){return Cd(AF1(a),48,57);}
var AI4=G(Bg);
function A6U(){var a=new AI4();A1D(a);return a;}
function A1D(a){}
function AZ_(a){return Cd(Cd(Cd(DL(),33,64),91,96),123,126);}
var O4=G(L7);
function A7H(){var a=new O4();ATP(a);return a;}
function ATP(a){}
function AI_(a){return Cd(Cd(Cd(AGu(a),33,64),91,96),123,126);}
var AKM=G(O4);
function A7E(){var a=new AKM();AUU(a);return a;}
function AUU(a){}
function ASh(a){return CJ(AI_(a),32);}
var AG0=G(Bg);
function A6A(){var a=new AG0();A3C(a);return a;}
function A3C(a){}
function AYX(a){return CJ(CJ(DL(),32),9);}
var AF$=G(Bg);
function A6H(){var a=new AF$();A5a(a);return a;}
function A5a(a){}
function ASc(a){return CJ(Cd(DL(),0,31),127);}
var AJ0=G(Bg);
function A7K(){var a=new AJ0();AN_(a);return a;}
function AN_(a){}
function AV4(a){return Cd(Cd(Cd(DL(),48,57),97,102),65,70);}
var AL1=G(Bg);
function A6_(){var a=new AL1();AXO(a);return a;}
function AXO(a){}
function A1X(a){var b;b=new ABN;b.Fy=a;BA(b);b.T=1;return b;}
var AI7=G(Bg);
function A6p(){var a=new AI7();AT0(a);return a;}
function AT0(a){}
function AWY(a){var b;b=new Xb;b.FD=a;BA(b);b.T=1;return b;}
var ALI=G(Bg);
function A8F(){var a=new ALI();AN4(a);return a;}
function AN4(a){}
function AQO(a){var b;b=new SH;b.Fn=a;BA(b);return b;}
var AHz=G(Bg);
function A6G(){var a=new AHz();ASd(a);return a;}
function ASd(a){}
function AUd(a){var b;b=new SG;b.Dx=a;BA(b);return b;}
var AIg=G(Bg);
function A8c(){var a=new AIg();AOJ(a);return a;}
function AOJ(a){}
function AYV(a){var b;b=new V5;b.EA=a;BA(b);I_(b.Q,0,2048);b.T=1;return b;}
var AFE=G(Bg);
function A7U(){var a=new AFE();AOq(a);return a;}
function AOq(a){}
function APc(a){var b;b=new YU;b.FP=a;BA(b);b.T=1;return b;}
var AJi=G(Bg);
function A8d(){var a=new AJi();ARX(a);return a;}
function ARX(a){}
function A5d(a){var b;b=new Qj;b.ET=a;BA(b);b.T=1;return b;}
var ALO=G(Bg);
function A6C(){var a=new ALO();ASx(a);return a;}
function ASx(a){}
function AWV(a){var b;b=new AAc;b.DY=a;BA(b);return b;}
var AHY=G(Bg);
function A8K(){var a=new AHY();A0k(a);return a;}
function A0k(a){}
function ARp(a){var b;b=new W9;b.C5=a;BA(b);b.T=1;return b;}
var AKi=G(Bg);
function A7O(){var a=new AKi();ANr(a);return a;}
function ANr(a){}
function APj(a){var b;b=new W_;b.Ec=a;BA(b);b.T=1;return b;}
var AG2=G(Bg);
function A63(){var a=new AG2();AOw(a);return a;}
function AOw(a){}
function AZW(a){var b;b=new P0;b.Ex=a;BA(b);b.T=1;return b;}
var AIN=G(Bg);
function A8A(){var a=new AIN();ARu(a);return a;}
function ARu(a){}
function A04(a){var b;b=new Y_;b.Gb=a;BA(b);b.T=1;return b;}
var ALT=G(Bg);
function A8x(){var a=new ALT();A1R(a);return a;}
function A1R(a){}
function AVk(a){var b;b=new Ze;b.DG=a;BA(b);return b;}
var AGF=G(Bg);
function A7n(){var a=new AGF();AOr(a);return a;}
function AOr(a){}
function ATJ(a){var b;b=new ACe;b.FR=a;BA(b);return b;}
var AGk=G(Bg);
function A6B(){var a=new AGk();A3g(a);return a;}
function A3g(a){}
function ASJ(a){var b;b=new ABd;b.C7=a;BA(b);b.T=1;return b;}
var AI5=G(Bg);
function A8q(){var a=new AI5();A0f(a);return a;}
function A0f(a){}
function A3n(a){var b;b=new Pq;b.Gq=a;BA(b);b.T=1;return b;}
var KX=G(Bg);
function A66(){var a=new KX();APr(a);return a;}
function APr(a){}
function AG1(a){return CJ(Cd(Cd(Cd(DL(),97,122),65,90),48,57),95);}
var AL$=G(KX);
function A7J(){var a=new AL$();A0n(a);return a;}
function A0n(a){}
function ASA(a){var b;b=EW(AG1(a),1);b.T=1;return b;}
var AKR=G(N9);
function A6n(){var a=new AKR();AVG(a);return a;}
function AVG(a){}
function AXW(a){var b;b=EW(AKA(a),1);b.T=1;return b;}
var AGi=G(Nz);
function A6L(){var a=new AGi();A0U(a);return a;}
function A0U(a){}
function AQn(a){var b;b=EW(AK7(a),1);b.T=1;return b;}
function AJ3(){var a=this;Bg.call(a);a.tt=0;a.z9=0;}
function R(a,b){var c=new AJ3();A5c(c,a,b);return c;}
function A5c(a,b,c){a.tt=b;a.z9=c;}
function ARE(a){return Cd(DL(),a.tt,a.z9);}
var AKc=G(Bg);
function A7L(){var a=new AKc();AV8(a);return a;}
function AV8(a){}
function AVO(a){return Cd(Cd(DL(),65279,65279),65520,65533);}
function AKF(){var a=this;Bg.call(a);a.qs=0;a.oZ=0;a.yH=0;}
function B7(a,b){var c=new AKF();AOE(c,a,b);return c;}
function A60(a,b,c){var d=new AKF();AVW(d,a,b,c);return d;}
function AOE(a,b,c){a.oZ=c;a.qs=b;}
function AVW(a,b,c,d){a.yH=d;a.oZ=c;a.qs=b;}
function AZH(a){var b;b=A7s(a.qs);if(a.yH)I_(b.Q,0,2048);b.T=a.oZ;return b;}
function AKN(){var a=this;Bg.call(a);a.op=0;a.mV=0;a.rk=0;}
function KA(a,b){var c=new AKN();APk(c,a,b);return c;}
function A76(a,b,c){var d=new AKN();AWW(d,a,b,c);return d;}
function APk(a,b,c){a.mV=c;a.op=b;}
function AWW(a,b,c,d){a.rk=d;a.mV=c;a.op=b;}
function AMR(a){var b;b=new AAN;AHs(b,a.op);if(a.rk)I_(b.Q,0,2048);b.T=a.mV;return b;}
var AJ6=G();
var AFR=G();
function AGE(b){var c,d,e,f,g,h,i;c=AUq(GH(b));d=Nq(c);e=BQ(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Nq(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=PB(c);h=h+1|0;}return e;}
function NT(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function XG(){var a=this;B.call(a);a.y8=0;a.ue=0;a.zg=null;}
function APU(a,b,c){var d=new XG();AUT(d,a,b,c);return d;}
function AUT(a,b,c,d){a.y8=b;a.ue=c;a.zg=d;}
function AHS(){var a=this;B.call(a);a.yg=null;a.zG=0;}
function AUq(a){var b=new AHS();AY5(b,a);return b;}
function AY5(a,b){a.yg=b;}
var AKq=G();
function Nq(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.yg.data;f=b.zG;b.zG=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function PB(b){var c,d;c=Nq(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var MS=G(Bt);
function ADM(){var a=this;B.call(a);a.zJ=null;a.zK=null;a.zI=null;}
function AMT(a,b){var c,d,e,f,g;c=a.zJ;d=a.zK;e=a.zI;f=new AEQ;g=AC5(E1(d));AMo(f,b,null,g);Ic(c,f);e.e();}
function ADL(){B.call(this);this.yh=null;}
function AVl(a,b){Bf(a.yh,b);}
function AJU(){B.call(this);this.Ub=null;}
function S6(){B.call(this);this.ti=null;}
function AZP(a,b){b.hy=a.ti;}
function ADf(){var a=this;B.call(a);a.Gr=null;a.k1=null;}
function APB(a,b){var c;c=a.k1;b=b;a.k1=YS(!c.oJ&&!b.eV?0:1);return 1;}
function ACD(){var a=this;B.call(a);a.vG=null;a.vH=null;}
function A4i(a){var b,c;b=a.vG;c=a.vH;Gw(b.C.bG,Ff(c));}
function ACH(){var a=this;B.call(a);a.DR=null;a.tH=null;}
function AZr(a,b){var c,d,e,f;c=b.data;b=a.tH;d=Bj();b=BT(b);e=new J;L(e);H(H(e,C(732)),b);Bf(d,K(e));b=Bj();f=c.length;d=new J;L(d);V(H(d,C(733)),f);Bf(b,K(d));}
function ACJ(){B.call(this);this.F3=null;}
function A4Z(a,b){$rt_globals.console.info($rt_ustr(b));}
function P$(){var a=this;B.call(a);a.lF=0;a.C9=null;}
function A22(a,b){var c,d;c=BT(b);d=new J;L(d);H(H(d,C(734)),c);$rt_globals.console.info($rt_ustr(K(d)));a.lF=a.lF+1|0;HV(b,a);}
function A0i(a,b){var c;b=BT(b);c=new J;L(c);H(H(c,C(735)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AUA(a){var b;b=a.lF-1|0;a.lF=b;if(!b)Bf(Bj(),C(736));}
function AEy(){B.call(this);this.wG=null;}
function AVy(a,b){a.wG.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function AEx(){var a=this;B.call(a);a.t$=null;a.t9=null;}
function ASl(a,b){var c,d;c=a.t$;d=a.t9;b.arrayBuffer().then(Bw(c,"f"),Bw(d,"f"));}
function ADr(){var a=this;B.call(a);a.zd=null;a.lo=null;a.ny=null;}
function ACj(a){var b,c;b=a.zd.next();c=A9Q;b.then(Bw(a,"f"),Bw(c,"f"));}
function ATR(a,b){var c;if(b.done?1:0)a.lo.oV();else{ACj(a);c=b.value;if(c.kind==='file'?1:0){b=AHW(c,Zy(a.ny));a.lo.pe(b);}else{b=A5Y(c,Zy(a.ny),null);a.lo.n9(b);}}}
function VQ(){var a=this;Z.call(a);a.x5=null;a.F5=null;}
function APD(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cE^D2(a.x5,c):0;}
function VN(){var a=this;Z.call(a);a.BG=null;a.wm=null;a.Em=null;}
function AXh(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cE^D2(a.BG,c):0;return a.wm.o(b)&&!d?1:0;}
function Qx(){var a=this;Z.call(a);a.lK=null;a.E1=null;}
function ARv(a,b){return a.bm^D2(a.lK,b);}
function AZY(a){var b,c,d;b=new J;L(b);c=Iy(a.lK,0);while(c>=0){Kk(b,GE(c));Br(b,124);c=Iy(a.lK,c+1|0);}d=b.I;if(d>0)VD(b,d-1|0);return K(b);}
function YD(){var a=this;Z.call(a);a.zV=null;a.FC=null;}
function A3d(a,b){return a.zV.o(b);}
function YB(){var a=this;Z.call(a);a.o2=0;a.yA=null;a.pD=null;}
function AUy(a,b){return !(a.o2^D2(a.pD.N,b))&&!(a.o2^a.pD.eE^a.yA.o(b))?0:1;}
function YC(){var a=this;Z.call(a);a.mU=0;a.v5=null;a.n_=null;}
function A1h(a,b){return !(a.mU^D2(a.n_.N,b))&&!(a.mU^a.n_.eE^a.v5.o(b))?1:0;}
function YG(){var a=this;Z.call(a);a.Cn=0;a.wa=null;a.v2=null;a.Fb=null;}
function AZe(a,b){return a.Cn^(!a.wa.o(b)&&!a.v2.o(b)?0:1);}
function YI(){var a=this;Z.call(a);a.t1=0;a.zQ=null;a.zq=null;a.Gn=null;}
function AMN(a,b){return a.t1^(!a.zQ.o(b)&&!a.zq.o(b)?0:1)?0:1;}
function YE(){var a=this;Z.call(a);a.sS=null;a.Gp=null;}
function AQi(a,b){return Dd(a.sS,b);}
function YF(){var a=this;Z.call(a);a.B4=null;a.Fe=null;}
function AR3(a,b){return Dd(a.B4,b)?0:1;}
function YJ(){var a=this;Z.call(a);a.ub=null;a.zT=0;a.vw=null;}
function AVu(a,b){return !Dd(a.ub,b)&&!(a.zT^D2(a.vw.N,b))?0:1;}
function YK(){var a=this;Z.call(a);a.uG=null;a.AT=0;a.uw=null;}
function AYQ(a,b){return !Dd(a.uG,b)&&!(a.AT^D2(a.uw.N,b))?1:0;}
function Qw(){var a=this;Z.call(a);a.vt=0;a.BP=null;a.wt=null;a.Db=null;}
function A6m(a,b){return !(a.vt^a.BP.o(b))&&!Dd(a.wt,b)?0:1;}
function QQ(){var a=this;Z.call(a);a.Cc=0;a.q1=null;a.rl=null;a.Dr=null;}
function AQl(a,b){return !(a.Cc^a.q1.o(b))&&!Dd(a.rl,b)?1:0;}
function Qu(){var a=this;Z.call(a);a.y2=null;a.Du=null;}
function AOP(a,b){return Dd(a.y2,b);}
function Qv(){var a=this;Z.call(a);a.sF=null;a.Gl=null;}
function AZN(a,b){return Dd(a.sF,b)?0:1;}
function QA(){var a=this;Z.call(a);a.Cl=null;a.uA=0;a.C1=null;}
function AQ6(a,b){return Dd(a.Cl,b)&&a.uA^D2(a.C1.N,b)?1:0;}
function Qt(){var a=this;Z.call(a);a.A_=null;a.z6=0;a.uz=null;}
function A4m(a,b){return Dd(a.A_,b)&&a.z6^D2(a.uz.N,b)?0:1;}
function Qy(){var a=this;Z.call(a);a.Bp=0;a.x4=null;a.tZ=null;a.Fa=null;}
function AX6(a,b){return a.Bp^a.x4.o(b)&&Dd(a.tZ,b)?1:0;}
function Qz(){var a=this;Z.call(a);a.A6=0;a.xA=null;a.Bl=null;a.Ff=null;}
function ATB(a,b){return a.A6^a.xA.o(b)&&Dd(a.Bl,b)?0:1;}
function AAo(){B.call(this);this.B9=null;}
var AK5=G();
var Mx=G(0);
function ABc(){var a=this;B.call(a);a.Dn=null;a.BQ=null;a.l1=null;a.cR=null;a.kI=0;a.pA=0;}
function Pf(a,b){var c,d,e;c=M(a.l1);if(b>=0&&b<=c){AEV(a.cR,null,(-1),(-1));d=a.cR;d.mq=1;d.eX=b;c=d.jc;if(c<0)c=b;d.jc=c;b=a.BQ.cy(b,a.l1,d);if(b==(-1))a.cR.dU=1;if(b>=0){d=a.cR;if(d.kQ){e=d.ej.data;if(e[0]==(-1)){c=d.eX;e[0]=c;e[1]=c;}d.jc=M0(d);return 1;}}a.cR.eX=(-1);return 0;}d=new BJ;Bp(d,Dn(b));N(d);}
function AIM(a){return QP(a.cR,0);}
function AKe(a){return SJ(a.cR,0);}
function AFx(a){return a.cR.kU;}
function RS(){var a=this;B.call(a);a.si=null;a.sj=null;}
function A2W(a){var b,c;b=a.si;c=a.sj;Td();K2(b,c,BaM);}
function RQ(){var a=this;B.call(a);a.AL=null;a.AK=null;}
function AQd(a){var b,c;b=a.AL;c=a.AK;Td();K2(b,c,BaN);}
function RR(){var a=this;B.call(a);a.C0=null;a.CZ=null;}
function AVE(a){K2(a.C0,a.CZ,null);}
function RU(){var a=this;B.call(a);a.zo=null;a.zp=null;}
function AM8(a){var b,c,d,e,f,g,h;b=a.zo;c=a.zp;d=Eh(b.by.d);e=HP(b.by.d);d=ACK(b.by.fH,d,e);DX(b.gD.cb);b=b.by;e=FI(b,c);if(d!==null){f=b.d;g=e.bs;h=e.bw;e=new AC1;e.EL=b;e.EM=c;d.Lc(f,g,h,1,e,b.ko);}}
function S3(){B.call(this);this.xC=null;}
function AU_(a){var b;b=a.xC;DX(b.gD.cb);Js(b.by,WS(b),0);}
function S2(){B.call(this);this.va=null;}
function A1m(a){var b;b=a.va;DX(b.gD.cb);Js(b.by,WS(b),1);}
function S1(){B.call(this);this.sk=null;}
function A2P(a){var b,c,d;b=a.sk;DX(b.gD.cb);c=H6(b);b=b.by;BF(b);d=new AD6;d.rP=b;Sb(c,d,AF3(C(737)));}
function Sc(){var a=this;B.call(a);a.Ad=null;a.Ac=null;}
function AWF(a){var b,c;b=a.Ad;c=a.Ac;b=b.by.d;b.qi=c;MI(b);}
var RC=G(0);
var Bak=null;function ALG(){Bak=new Uh;}
function AKy(){B.call(this);this.F0=null;}
function A5O(a){var b,c,d,e;b=a.F0;c=H6(b);d=b.gD.cb;e=new SI;e.CI=b;GQ(c,Y9(d,e));}
function AKT(){var a=this;B.call(a);a.P8=null;a.P6=null;a.P9=0.0;}
function Tt(){B.call(this);this.uI=null;}
function A30(a,b){a.uI.g($rt_str(b.message));}
function ACb(){B.call(this);this.w6=null;}
function ALq(){B.call(this);this.HJ=null;}
var ALr=G();
function ALp(){var a=this;B.call(a);a.T1=null;a.T0=null;}
var EA=G(CD);
var BaO=null;var BaP=null;var BaQ=null;var BaR=null;function AYo(){AYo=Bm(EA);AQW();}
function AKz(a,b){var c=new EA();AGN(c,a,b);return c;}
function AW0(){AYo();return BaR.dZ();}
function AGN(a,b,c){AYo();Dt(a,b,c);}
function AQW(){var b;BaO=AKz(C(738),0);BaP=AKz(C(739),1);b=AKz(C(740),2);BaQ=b;BaR=I(EA,[BaO,BaP,b]);}
var Yn=G(0);
function QV(){B.call(this);this.yQ=null;}
function ATx(a){AIH(a.yQ);}
function QT(){B.call(this);this.AS=null;}
function AZI(a){JI(a.AS);}
function QU(){B.call(this);this.qQ=null;}
function A5f(a){AJx(a.qQ);}
function UM(){B.call(this);this.AW=null;}
function A28(a){a.AW.qH();}
function UO(){B.call(this);this.C3=null;}
function ASE(a){a.C3.oP();}
function ZX(){B.call(this);this.zF=null;}
function A4d(a){var b,c,d,e,f,g,h,i;b=a.zF;c=(b.rQ.ct()).data;d=P(BC,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Rr;i.sC=b;i.sB=h;e[f]=XX(i,h);f=f+1|0;}return d;}
function AAw(){B.call(this);this.sP=null;}
function ANE(a){a.sP.oM.hg(0);}
function AAu(){B.call(this);this.Br=null;}
function AO1(a){a.Br.oM.hg(1);}
function Tv(){B.call(this);this.w2=null;}
function AVX(a){var b,c,d,e,f;b=a.w2.d.h;c=b.cx;d=new J;L(d);V(H(d,C(741)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.nM;d=new J;L(d);V(H(d,C(742)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dm;e=Gv(Fj(b));AEf(d,0,d.dk,e);b=Bj();f=b.ng;f.data[0]=10;Yp(b,f,0,1);}
function Tw(){B.call(this);this.sM=null;}
function ANC(a){AAA(a.sM);}
function Tx(){B.call(this);this.Bj=null;}
function AOT(a){ABV(a.Bj);}
function Ty(){B.call(this);this.xW=null;}
function AVI(a){OH(a.xW.d);}
function TO(){B.call(this);this.z8=null;}
function A1s(a){Wq(a.z8);}
function AHi(){B.call(this);this.Ga=null;}
function A5Q(a){var b,c,d,e,f,g,h;b=a.Ga;c=P(BC,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=XX(QR(b,g),X6(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=XX(QR(b,g),X6(g));e=h;}return c;}
function ADB(){var a=this;B.call(a);a.ms=null;a.i4=0;}
var O0=G(Ez);
function AHa(){var a=this;B.call(a);a.Ob=null;a.SJ=null;a.Mh=null;a.JT=null;a.OT=null;}
var Uh=G();
function OV(){var a=this;O0.call(a);a.nS=null;a.mH=null;}
function A3k(a,b){var c,d,e,f;c=b.fg;d=c/32|0;e=1<<(c%32|0);f=a.mH.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function PJ(){Ex.call(this);this.pQ=null;}
function AWQ(a,b){return a.pQ.data[b];}
function AS2(a){return a.pQ.data.length;}
var AB3=G(DG);
var BaS=null;function ALh(){BaS=F($rt_bytecls());}
var Py=G(H5);
function APX(a,b,c,d){var e,f,g;e=0;f=d.A;a:{while(true){if(b>f){b=e;break a;}g=GM(d,a.Z);D6(d,a.Z,b);e=a.dp.c(b,c,d);if(e>=0)break;D6(d,a.Z,g);b=b+1|0;}}return b;}
function A6a(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=GM(e,a.Z);D6(e,a.Z,c);f=a.dp.c(c,d,e);if(f>=0)break;D6(e,a.Z,g);c=c+(-1)|0;}}return c;}
function AOC(a){return null;}
var RI=G(Bt);
var Wi=G(Bt);
function UQ(){Gs.call(this);this.EP=0;}
function RB(){Gs.call(this);this.Ge=0;}
function VY(){B.call(this);this.tF=null;}
function ATC(a,b){a.tF.g(FS(b));}
function VZ(){var a=this;B.call(a);a.Ax=null;a.Aw=null;}
function ATX(a,b){var c,d;c=a.Ax;d=a.Aw;b.text().then(Bw(c,"f"),Bw(d,"f"));}
function AC_(){var a=this;B.call(a);a.uc=null;a.BH=null;a.wT=0;a.m5=0;}
function NQ(a,b){return Cj(a.uc)<b?0:1;}
var AFQ=G(0);
function Vr(){B.call(this);this.q3=null;}
function AWt(a){AEt(a.q3);}
function Vs(){B.call(this);this.CH=null;}
function AUx(a,b){Ii(a.CH,b);}
function LF(){FY.call(this);this.tz=null;}
function R_(){LF.call(this);this.sf=null;}
function Yo(){var a=this;B.call(a);a.zm=null;a.zn=null;}
function ADd(){var a=this;B.call(a);a.ej=null;a.lh=null;a.pW=null;a.nO=null;a.r7=0;a.kQ=0;a.df=0;a.A=0;a.eX=0;a.kU=0;a.gO=0;a.dU=0;a.FY=0;a.jc=0;a.mq=0;}
function B2(a,b,c){a.lh.data[b]=c;}
function DK(a,b){return a.lh.data[b];}
function M0(a){return SJ(a,0);}
function SJ(a,b){AAL(a,b);return a.ej.data[(b*2|0)+1|0];}
function D6(a,b,c){a.ej.data[b*2|0]=c;}
function Nk(a,b,c){a.ej.data[(b*2|0)+1|0]=c;}
function GM(a,b){return a.ej.data[b*2|0];}
function Jq(a,b){return a.ej.data[(b*2|0)+1|0];}
function AHJ(a){return QP(a,0);}
function QP(a,b){AAL(a,b);return a.ej.data[b*2|0];}
function Xi(a,b){return a.pW.data[b];}
function E2(a,b,c){a.pW.data[b]=c;}
function AAL(a,b){var c;if(!a.kQ){c=new Db;X(c);N(c);}if(b>=0&&b<a.r7)return;c=new BJ;Bp(c,Dn(b));N(c);}
function AEV(a,b,c,d){a.kQ=0;a.mq=2;JQ(a.ej,(-1));JQ(a.lh,(-1));if(b!==null)a.nO=b;if(c>=0){a.df=c;a.A=d;}a.eX=a.df;}
function AGx(a){return a.mq;}
function RT(){B.call(this);this.q2=null;}
function A2x(a,b){var c,d,e,f,g;c=a.q2;DX(c.bO);E4(c.iM);d=Nm(Op(c.fJ));while(FB(d)){e=OW(d);f=c.fJ;g=e.cH;e=null;if(HG(f,g))D0(f,g,e);}e=Bj();d=BT(b);f=new J;L(f);H(H(f,C(743)),d);Bf(e,K(f));e=AUD(b,c);D3(c.c_.gE,e);e.jw.e();C2(c.k2,FF(Ff(b),C(744)));}
function ADs(){var a=this;B.call(a);a.AC=null;a.AD=0;}
function AZ5(a){Ij(a.AC,a.AD);}
function AAi(){B.call(this);this.qZ=null;}
function AR8(a){Ij(a.qZ,1);}
function AAh(){B.call(this);this.wJ=null;}
function A2o(a){Ij(a.wJ,0);}
function AAP(){var a=this;B.call(a);a.tE=null;a.tD=0;}
function ATY(a){var b,c,d,e,f;b=a.tE;c=a.tD;d=b.bO;e=d.bi.cG;f=new Rx;f.AR=b;f.AO=c;GQ(e,Y9(d,f));}
function Q5(){B.call(this);this.zf=null;}
function AW$(a,b){Ii(a.zf,b);}
var GY=G(CD);
var BaN=null;var BaM=null;var BaT=null;function Td(){Td=Bm(GY);A53();}
function A3E(a,b){var c=new GY();AGJ(c,a,b);return c;}
function AJv(){Td();return BaT.dZ();}
function AGJ(a,b,c){Td();Dt(a,b,c);}
function A53(){var b;BaN=A3E(C(745),0);b=A3E(C(746),1);BaM=b;BaT=I(GY,[BaN,b]);}
function AD6(){B.call(this);this.rP=null;}
function AP8(a,b){DO(a.rP,b);}
function T$(){var a=this;B.call(a);a.Cx=null;a.Cy=0;}
function A1M(a,b){var c,d,e,f,g,h;c=a.Cx;d=a.Cy;e=!d?c.dW.dG:c.dW.dI;DX(c.bO);f=Bj();g=Ff(b);h=new J;L(h);H(H(h,C(747)),g);Bf(f,K(h));f=new AAZ;f.hD=c;f.i_=d;f.nv=e;g=AUD(b,f);if(!d)c.gR=g;else c.hN=g;g.cW.e();D3(e,g);b=c.hN;if(b!==null&&c.gR===null)C2(c.i$,Eg(b));if(c.hN===null){b=c.gR;if(b!==null)C2(c.i$,Eg(b));}b=c.hN;if(b!==null&&c.gR!==null){e=c.i$;b=Eg(b);g=Eg(c.gR);c=new J;L(c);H(H(H(c,b),C(748)),g);C2(e,K(c));}}
function Rr(){var a=this;B.call(a);a.sC=null;a.sB=null;}
function AZ4(a){var b,c;b=a.sC;c=a.sB;b.js.oh(c);}
var ACd=G();
var Bal=null;function A8m(){A8m=Bm(ACd);AXD();}
function AXD(){var b,c;b=BQ((AJv()).data.length);c=b.data;Bal=b;c[BaN.fg]=1;c[BaM.fg]=2;}
function Sh(){B.call(this);this.u6=null;}
function ANQ(a,b){Ud(H6(a.u6),b,A_s,AF3(C(749)));}
function Sr(){B.call(this);this.AM=null;}
function APZ(a,b){var c,d;c=a.AM;d=b.i6;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
function Pb(){var a=this;B.call(a);a.ys=null;a.yt=0.0;}
function A0p(a){var b,c;b=a.ys;c=a.yt;b.js.kX(c);}
function VV(){var a=this;B.call(a);a.xZ=null;a.x0=null;}
function ABN(){Z.call(this);this.Fy=null;}
function AVA(a,b){return CI(b)!=2?0:1;}
function Xb(){Z.call(this);this.FD=null;}
function AXU(a,b){return CI(b)!=1?0:1;}
function SH(){Z.call(this);this.Fn=null;}
function ANH(a,b){return Sf(b);}
function SG(){Z.call(this);this.Dx=null;}
function AZF(a,b){return 0;}
function V5(){Z.call(this);this.EA=null;}
function AQV(a,b){return !CI(b)?0:1;}
function YU(){Z.call(this);this.FP=null;}
function A4R(a,b){return CI(b)!=9?0:1;}
function Qj(){Z.call(this);this.ET=null;}
function ATd(a,b){return H1(b);}
function AAc(){Z.call(this);this.DY=null;}
function AUh(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function W9(){Z.call(this);this.C5=null;}
function A5W(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H1(b);}return b;}
function W_(){Z.call(this);this.Ec=null;}
function AO5(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H1(b);}return b;}
function P0(){Z.call(this);this.Ex=null;}
function AVK(a,b){a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Y_(){Z.call(this);this.Gb=null;}
function A1q(a,b){return K5(b);}
function Ze(){Z.call(this);this.DG=null;}
function A2Z(a,b){return Zf(b);}
function ACe(){Z.call(this);this.FR=null;}
function A4E(a,b){return CI(b)!=3?0:1;}
function ABd(){Z.call(this);this.C7=null;}
function AV9(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=H1(b);}return b;}
function Pq(){Z.call(this);this.Gq=null;}
function AOX(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=H1(b);}return b;}
function MH(){Z.call(this);this.n5=0;}
function A7s(a){var b=new MH();AHs(b,a);return b;}
function AHs(a,b){BA(a);a.n5=b;}
function ATf(a,b){return a.bm^(a.n5!=CI(b&65535)?0:1);}
var AAN=G(MH);
function A32(a,b){return a.bm^(!(a.n5>>CI(b&65535)&1)?0:1);}
var AEH=G(0);
function ZC(){B.call(this);this.xf=null;}
function ARL(a){var b,c;b=a.xf;c=b.zm;b=b.zn;c.GO(b.mk,b.p1,null);}
var AHh=G(0);
function SI(){B.call(this);this.CI=null;}
function A4j(a,b){GZ(a.CI.by,b,A_s);}
function QZ(){var a=this;B.call(a);a.mf=null;a.me=null;a.yT=null;}
function APq(a){JN(a.mf);JN(a.me);}
function AM3(a){KN(a.mf);KN(a.me);}
function AUN(a,b){IQ(a.mf,b);IQ(a.me,b);}
function AS5(a,b){KO(a.yT,b);}
function AB9(){var a=this;B.call(a);a.F9=null;a.F8=null;a.F7=null;}
function AC1(){var a=this;B.call(a);a.EL=null;a.EM=null;}
function Rx(){var a=this;B.call(a);a.AR=null;a.AO=0;}
function AOL(a,b){Nn(a.AR,b,a.AO);}
var Dc=G(0);
var A9_=null;var A_o=null;var A$b=null;var A$a=null;var A$d=null;var A$c=null;var A$f=null;var A$e=null;var A$h=null;var A$g=null;var A$i=null;function AH7(){AH7=Bm(Dc);A5j();}
function A5j(){A9_=Cx(0);A_o=DD(8,8,8);A$b=S(C(750));A$a=DD(255,255,255);A$d=S(C(751));A$c=S(C(752));A$f=S(C(753));A$e=S(C(754));A$h=E6(205,205,205,153);A$g=E6(255,255,255,0);A$i=S(C(116));}
function CC(){CD.call(this);this.pU=null;}
var BaU=null;var BaV=null;var BaW=null;var BaX=null;var BaY=null;var BaZ=null;var Ba0=null;var Ba1=null;var Ba2=null;var Ba3=null;var Ba4=null;var Ba5=null;var Ba6=null;var Ba7=null;var Ba8=null;var Ba9=null;function AHt(){AHt=Bm(CC);A5N();}
function DS(a,b,c){var d=new CC();AAl(d,a,b,c);return d;}
function A5y(a,b,c,d){var e=new CC();AFO(e,a,b,c,d);return e;}
function AL3(){AHt();return Ba9.dZ();}
function AAl(a,b,c,d){AHt();Dt(a,b,c);a.pU=J3(d,null);}
function AFO(a,b,c,d,e){AHt();Dt(a,b,c);a.pU=J3(d,e);}
function A5N(){var b;b=new CC;AH7();AAl(b,C(351),0,A_o);BaU=b;BaV=DS(C(352),1,S(C(755)));BaW=DS(C(354),2,S(C(756)));BaX=DS(C(356),3,S(C(757)));BaY=DS(C(358),4,A_o);BaZ=DS(C(359),5,S(C(758)));Ba0=DS(C(361),6,S(C(404)));Ba1=DS(C(363),7,S(C(759)));Ba2=DS(C(365),8,S(C(760)));Ba3=A5y(C(367),9,A_o,DD(237,235,252));Ba4=A5y(C(368),10,S(C(402)),S(C(761)));Ba5=DS(C(369),11,S(C(404)));Ba6=DS(C(371),12,S(C(405)));Ba7=DS(C(373),13,S(C(762)));b=DS(C(374),14,S(C(375)));Ba8=b;Ba9=I(CC,[BaU,BaV,BaW,BaX,BaY,BaZ,Ba0,Ba1,Ba2,Ba3,
Ba4,Ba5,Ba6,Ba7,b]);}
var D8=G(0);
var A$m=null;var A$n=null;var A$j=null;var A$k=null;var A$l=null;var A_p=null;var A_q=null;var A$o=null;var A$p=null;function AXw(){AXw=Bm(D8);AZb();}
function AZb(){A$m=S(C(114));A$n=S(C(763));A$j=S(C(764));A$k=S(C(765));A$l=S(C(766));A_p=S(C(114));A_q=S(C(763));A$o=E6(205,205,205,153);A$p=DD(247,248,250);}
function IB(){var a=this;C$.call(a);a.ic=null;a.hW=null;a.gx=null;a.g5=null;}
var Ba$=null;var Ba_=null;function AUD(a,b){var c=new IB();AK3(c,a,b);return c;}
function Bba(a,b,c){var d=new IB();L6(d,a,b,c);return d;}
function AK3(a,b,c){L6(a,b,0,c);}
function L6(a,b,c,d){Kp(a,JC(b),c);a.gx=Ba$;a.g5=Ba_;a.ic=b;a.hW=d;LD(a);IX(a);}
function AVQ(a){return I6(a.ic);}
function RY(a,b){return U$(a.gx,b);}
function LD(a){var b;b=new Sx;b.tl=a;a.cW=b;a.jw=b;a.ff=Bac;}
function AEw(a){var b;b=new AFa;b.up=a;a.cW=b;a.jw=b;}
function AIq(){Ba$=P(IB,0);Ba_=P(KW,0);}
function AAZ(){var a=this;B.call(a);a.i_=0;a.nv=null;a.hD=null;}
function ARt(a,b){var c,d,e;c=Bj();d=Ff(b.gI);e=new J;L(e);H(H(e,C(767)),d);Bf(c,K(e));c=new Ns;d=a.hD;XY(c,d.hv,d.bO,d.kB);Nn(c,b.gI,a.i_);b=b.gI;d=RW(a,b.ih);if(d===null)d=null;else{b=E1(b);d=U$(d.g5,b);}LX(a,d);if(d!==null)Nn(c,d.gI,a.i_?0:1);}
function AWE(a,b){var c,d,e;AEw(b);c=Bj();d=I6(b.ic);e=new J;L(e);H(H(e,C(768)),d);Bf(c,K(e));c=AE5(a,b.ic);LX(a,c);if(c!==null&&(c.hK!=60086?0:1))c.cW.e();if(JD(b)>0)ET(a.nv);}
function LX(a,b){(!a.i_?a.hD.dW.dI:a.hD.dW.dG).oW=b;}
function AWM(a,b){var c;if(JD(b)>0)ET(a.nv);LD(b);c=AE5(a,b.ic);LX(a,c);if(c!==null&&Jr(c))c.cW.e();}
function RW(a,b){var c,d,e;c=!a.i_?a.hD.hN:a.hD.gR;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=RY(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AE5(a,b){var c;c=RW(a,b.fN);return c===null?null:RY(c,JC(b));}
function KW(){C$.call(this);this.gI=null;}
function AOR(a){return NU(a.gI);}
function AEI(){var a=this;B.call(a);a.y3=null;a.y4=null;}
function A3e(a,b){var c,d;c=a.y3;d=a.y4;DX(c);d.g(b);}
function Sx(){B.call(this);this.tl=null;}
function AS7(a){var b,c,d,e;b=a.tl;c=Bj();d=Eg(b);e=new J;L(e);H(H(e,C(769)),d);Bf(c,K(e));c=b.ic;e=new ABL;e.da=b;e.l6=BN();e.mB=BN();HV(c,e);}
function ABX(){B.call(this);this.B6=null;}
function A0M(a){DX(a.B6);}
function TM(){var a=this;B.call(a);a.sr=null;a.sq=null;}
function AN1(a,b){var c,d;b=a.sr;c=a.sq;d=ALA(b.sf.B9.fF);b=c.xZ;c=c.x0;b=b.w6;if(c.I>0)Lp(c,b);Lp(c,d);return 1;}
function ABL(){var a=this;B.call(a);a.l6=null;a.mB=null;a.da=null;}
function A4x(a,b){var c,d;c=new IB;d=a.da;L6(c,b,d.j9+1|0,d.hW);Bz(a.l6,c);}
function AVs(a,b){var c,d;c=E1(b);d=new KW;Kp(d,c,a.da.j9+1|0);d.gI=b;a.da.hW.r6(d,c);d.oY=AMf(a.da.hW,d);Bz(a.mB,d);}
function A4T(a){var b,c,d,e,f,g,h;if(!(EL(a.l6)&&EL(a.mB))){a.da.gx=GB(a.l6,Ba$);a.da.g5=GB(a.mB,Ba_);Ll(a.da.gx,Bad);Ll(a.da.g5,Bad);b=a.da;c=b.gx;d=c.data;e=b.g5;f=e.data;g=d.length;h=f.length;d=P(C$,g+h|0);C_(c,0,d,0,g);C_(e,0,d,g,h);a.da.ff=d;}Ia(a.da);b=a.da;b.hW.ya(b);}
var AJH=G();
function Sj(){var a=this;B.call(a);a.u7=null;a.u8=null;}
function A5h(a){a.u7.Ao(a.u8);}
function RM(){var a=this;B.call(a);a.v8=null;a.v9=null;a.v$=0;}
function ANU(a){var b,c,d,e;b=a.v8;c=a.v9;d=a.v$;c=Ff(c);if(!d)b.nQ=c;else b.xy=c;e=b.xy;if(e!==null&&b.nQ!==null)C2(b.hO,c);else{if(e!==null)C2(b.hO,e);c=b.nQ;if(c!==null)C2(b.hO,c);}}
function AFa(){B.call(this);this.up=null;}
function A0L(a){var b;b=a.up;IX(b);b.hW.vC(b);b.gx=Ba$;b.g5=Ba_;}
function Q8(){var a=this;B.call(a);a.vP=null;a.vQ=null;}
function AZ1(a,b){var c,d,e;c=a.vP;d=a.vQ;LP(c.fJ,d);b=AJL(b);e=APE(b.kz,AC5(d));D0(c.iM,d,e);if(BR(c.xR,d))Ru(c,e);}
function Q9(){var a=this;B.call(a);a.tw=null;a.tv=null;}
function A5X(a,b){var c,d,e;c=a.tw;d=a.tv;LP(c.fJ,d);c=DY();e=new J;L(e);H(H(H(H(e,C(770)),d),C(29)),b);Bf(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",11,"menu",10,"parser",16,"common",17,"tree",17,"graph",19,"node",20,"ref",20,"decl",10,"ui",23,"window",23,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bN",A87(AR_),"K",A86(AFS)],Sv,0,B,[],0,3,0,0,0,Xt,0,B,[],3,3,0,0,0,W6,0,B,[],3,3,0,0,0,ADP,0,B,[Xt,W6],0,3,0,0,0,AJZ,0,B,[],4,0,0,0,0,AJN,0,B,[],4,3,0,0,0,Hb,0,B,[],0,3,0,0,0,EE,0,Hb,[],0,3,0,0,0,Bt,0,EE,[],0,3,0,0,0,AKO,0,Bt,[],0,3,0,0,0,CZ,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,KD,0,B,[],3,3,0,0,0,BB,"String",3,B,[CZ,CG,KD],0,3,[0,0,0],Fm,["K",A86(AOl),"bN",A87(Bk),"qr",A86(Kh),"mJ",A87(APW)],FJ,0,Hb,[],0,3,0,0,0,IA,0,FJ,[],0,3,0,0,0,AKr,0,IA,[],0,3,0,0,0,DG,0,B,[CZ],1,3,0,0,
0,HS,0,DG,[CG],0,3,0,0,["K",A86(AVL),"bN",A87(A5C),"mJ",A87(A01)],G7,0,B,[CZ,KD],0,0,0,0,["ki",A87(Nj),"K",A86(K)],J2,0,B,[],3,3,0,0,0,J,0,G7,[J2],0,3,0,0,["qf",A8$(A0X),"pF",A89(APb),"K",A86(Ek),"ki",A87(ARq),"qx",A88(A1g)],Fa,0,IA,[],0,3,0,0,0,ALx,0,Fa,[],0,3,0,0,0,AKm,0,Fa,[],0,3,0,0,0,ACc,0,B,[],3,3,0,0,0,Dr,0,B,[],3,3,0,0,0,YT,0,B,[],3,0,0,0,0,Kv,0,B,[ACc,Dr,YT],1,3,0,0,["b1",A86(EI)],AAF,0,Kv,[],0,3,0,0,0,AJp,0,B,[],0,3,0,0,0,AL_,0,B,[],4,3,0,0,0,BW,0,B,[],3,3,0,0,0,Cg,0,B,[BW],3,3,0,0,0,ACm,0,B,[Cg],
0,3,0,0,["bl",A87(A5T)],AHv,0,B,[],0,3,0,0,0,AK1,0,B,[BW],1,3,0,0,0,AFy,0,B,[],3,3,0,0,0,ALY,0,B,[],3,3,0,0,0,AH2,0,B,[],3,3,0,0,0,Mn,"FontConfigJs",26,B,[],0,3,[0,0,0],0,0,AF2,0,B,[BW],1,3,0,0,0,ACn,0,B,[Cg],0,3,0,0,["bl",A87(AMO)],ACl,0,B,[Cg],0,3,0,0,["bl",A87(A4F)],L1,0,B,[],4,3,0,0,0,AH0,0,B,[],4,3,0,0,0,AKf,0,B,[],0,3,0,0,0,AML,0,B,[],4,3,0,0,0,Xu,0,B,[Cg],0,3,0,0,["bl",A87(A2b)]]);
$rt_metadata([AIc,0,B,[BW],1,3,0,0,0,AJC,0,B,[],0,3,0,0,0,ADt,0,B,[BW],3,3,0,0,0,AKQ,0,B,[ADt],1,3,0,0,["My",A87(AZ8),"S$",A86(AR7)],AGR,0,B,[BW],1,3,0,0,0,Gt,0,B,[],3,3,0,0,0,Tq,0,B,[Gt],0,3,0,0,0,BJ,0,Bt,[],0,3,0,0,0,ALf,0,B,[],4,3,0,0,0,Gd,0,Bt,[],0,3,0,0,0,Jx,0,Bt,[],0,3,0,0,0,Do,0,B,[CG],0,3,0,0,0,W1,0,B,[BW],3,3,0,0,0,ABe,0,B,[W1],3,3,0,0,0,E7,0,B,[BW],3,3,0,0,0,AJs,0,B,[BW,ABe,E7],1,3,0,0,["Ld",A86(A1S),"LO",A87(A37),"TZ",A87(A3S),"Pf",A87(AYT),"Sq",A87(AM7),"NQ",A86(AO6),"S8",A88(A33),"L7",A89(ARb),
"MH",A86(AXS),"M1",A86(A2F),"RA",A87(A4B),"PW",A86(ASq),"Ui",A87(AQQ),"JS",A86(ASM),"Qz",A86(AWI),"Uc",A86(ARF),"Hb",A87(ANM),"L_",A86(A5F),"RU",A88(A0y),"PJ",A88(ASj),"S0",A88(AVU),"SF",A86(AW9),"Tq",A86(AQB),"MN",A87(APe),"Ri",A87(AP6),"O_",A88(A0H),"Jw",A86(ARP),"Mx",A87(AXV),"N3",A86(AP5),"M9",A86(ATT),"OY",A87(AMU),"JR",A87(AVi),"T9",A87(AYf),"I5",A86(A4u),"Pz",A88(AYm),"SW",A87(A2S),"Jl",A86(AUl),"Om",A88(ATb),"HG",A88(ASU),"Qj",A86(AVc),"MO",A87(AWj),"IK",A89(A12),"H5",A86(AO_),"IO",A88(AYE),"PP",A86(AXx),
"Lw",A86(A5z),"Rx",A86(AS$),"Gx",A86(AXv),"K7",A88(ATc),"N4",A87(AY2),"Rf",A87(AQe),"HZ",A86(A3t)],P1,0,B,[Cg],0,3,0,0,["bl",A87(ATO)],AKB,0,B,[],4,3,0,0,0,Y$,0,B,[E7],3,3,0,0,0,So,0,B,[E7],3,3,0,0,0,AAt,0,B,[E7],3,3,0,0,0,TR,0,B,[E7],3,3,0,0,0,AEA,0,B,[E7],3,3,0,0,0,AC0,0,B,[E7,Y$,So,AAt,TR,AEA],3,3,0,0,0,AJX,0,B,[BW,AC0],1,3,0,0,["R9",A88(A2j),"Tw",A88(A0Z),"H7",A89(AQD),"PE",A87(AN3),"KF",A89(AZh)],BX,0,Bt,[],0,3,0,0,0,AFb,0,Bt,[],0,3,0,0,0,Iv,0,BJ,[],0,3,0,0,0,AJ_,0,B,[],0,3,0,0,0,Z3,0,B,[],3,3,0,0,0,YL,
0,B,[Z3],3,3,0,0,0,ABm,0,B,[YL],0,3,0,0,0,BE,0,B,[],3,3,0,0,0,AKY,0,B,[BE],0,3,0,0,0,U,0,B,[],3,3,0,0,0,AKZ,0,B,[U],0,3,0,0,0,AAy,0,B,[BW],3,3,0,0,0,U6,0,B,[AAy],0,3,0,0,["JU",A87(A0x)],U4,0,B,[U],0,3,0,0,0,ZT,0,B,[BW],3,3,0,0,0,U5,0,B,[ZT],0,3,0,0,["Cw",A88(APp)],AIl,0,B,[BW],1,3,0,0,0,CE,0,B,[BW],3,3,0,0,0,U3,0,B,[CE],0,3,0,0,["cD",A87(ATS)],AA8,0,B,[],0,3,0,0,0,VF,0,B,[],3,3,0,0,["fs",A87(AWR)],HJ,0,B,[VF],3,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],FM,0,B,[HJ],1,3,0,0,["fs",A87(AWR),"p7",A87(A0N),"eN",A86(EL),
"rm",A87(A3H)],N0,0,B,[HJ],3,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],M4,0,B,[N0],3,3,0,0,["fs",A87(AWR),"p7",A87(A0N)]]);
$rt_metadata([Ex,0,FM,[M4],1,3,0,0,["fs",A87(AWR),"p7",A87(A0N),"p$",A87(AT8),"ca",A86(B9),"vb",A88(ATr),"oQ",A88(A4o),"mC",A87(A2R),"bN",A87(ASD)],MC,0,Ex,[],1,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],Pa,0,B,[HJ],3,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],AEW,0,B,[Pa,N0],3,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],Ul,0,MC,[AEW],0,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],LO,0,B,[],3,3,0,0,0,El,0,B,[LO],1,3,0,0,0,Eb,0,B,[],3,3,0,0,0,Wn,0,B,[LO],3,3,0,0,0,PA,0,B,[Wn],3,3,0,0,0,YZ,0,El,[Eb,CZ,PA],0,3,0,0,0,AA$,0,B,[BE],0,3,0,0,0,AA_,
0,B,[Cg],0,3,0,0,["bl",A87(AW8)],AF9,0,B,[],0,3,0,0,0,Oc,0,B,[],1,3,0,0,0,UW,0,Oc,[],0,3,0,0,0,Cy,0,B,[Dr],1,3,0,0,["cB",A87(A5A)],Zv,0,B,[],0,3,0,0,0,ADT,0,B,[CE],0,3,0,0,["cD",A87(A2y)],ADU,0,B,[CE],0,3,0,0,["cD",A87(A2L)],ADV,0,B,[CE],0,3,0,0,["cD",A87(ASo)],ADW,0,B,[CE],0,3,0,0,["cD",A87(A1e)],ADX,0,B,[CE],0,3,0,0,["cD",A87(A1r)],ADY,0,B,[CE],0,3,0,0,["cD",A87(ATZ)],ADZ,0,B,[CE],0,3,0,0,["cD",A87(AQC)],AD0,0,B,[CE],0,3,0,0,["cD",A87(A55)],AD1,0,B,[CE],0,3,0,0,["cD",A87(AP3)],AD2,0,B,[CE],0,3,0,0,["cD",A87(AUL)],WD,
0,B,[CE],0,3,0,0,["cD",A87(A5B)],WE,0,B,[CE],0,3,0,0,["cD",A87(AR5)],WF,0,B,[CE],0,3,0,0,["cD",A87(ASs)],WG,0,B,[CE],0,3,0,0,["cD",A87(A2U)],ACI,0,B,[],3,3,0,0,0,ACS,0,B,[ACI],0,3,0,0,0,ACR,0,B,[CE],0,3,0,0,["cD",A87(ARg)],O$,0,B,[],0,3,0,0,0,KS,0,B,[Gt],0,3,0,0,["qE",A88(Ng)],AIy,0,B,[],0,3,0,0,0,Ds,0,B,[],3,3,0,0,0,Cp,0,B,[Ds],3,3,0,0,0,CH,0,B,[],3,3,0,0,["bY",A87(A0T),"cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27)],ES,0,B,[],3,3,0,0,0,CU,0,B,[Ds],3,3,0,0,0,FK,0,B,[],3,3,0,0,0,CV,0,B,[],3,3,0,0,0,F5,0,B,[CV],3,
3,0,0,0,RO,0,B,[Dr],0,3,0,0,0,Bh,"V2i",29,B,[],0,3,[0,0,0],0,["K",A86(AI8),"bN",A87(AQ8)],AD7,0,B,[],0,3,0,0,0,AH4,0,B,[],0,3,0,0,0]);
$rt_metadata([AJK,0,B,[],3,3,0,0,0,ZR,0,B,[],0,3,0,0,0,Or,0,B,[],0,3,0,0,0,Dj,0,Or,[],0,3,0,0,0,AL9,0,Dj,[],0,3,0,0,0,FC,0,Dj,[],0,3,0,0,0,AAe,0,Dj,[],0,3,0,0,0,AGU,0,FC,[],0,3,0,0,0,HD,0,FC,[],0,3,0,0,0,P8,0,HD,[],0,3,0,0,0,AIP,0,HD,[],0,3,0,0,0,AJY,0,FC,[],0,3,0,0,0,ALz,0,Dj,[],0,3,0,0,0,AFM,0,Dj,[],0,3,0,0,0,AAR,0,B,[BW],3,3,0,0,0,AMJ,0,B,[AAR],3,3,0,0,0,ZQ,0,B,[Dr],0,3,0,0,0,RG,0,B,[],0,3,0,0,0,CD,0,B,[CG,CZ],1,3,0,0,0,Hl,0,CD,[],12,3,0,HL,0,MM,0,B,[],3,3,0,0,0,TJ,0,B,[MM],3,3,0,0,0,ACY,0,B,[],3,3,0,0,0,G9,
0,B,[TJ,ACY],1,3,0,0,0,Nd,0,G9,[],0,3,0,0,0,AGz,0,Nd,[],0,3,0,0,0,HR,0,G9,[],1,3,0,0,0,L0,0,HR,[],0,3,0,0,["m_",A89(AQ_)],En,0,CD,[],12,3,0,AMs,0,M7,0,B,[CG],1,3,0,0,0,MP,0,M7,[],0,3,0,AGs,0,Y3,0,B,[],0,3,0,0,0,Ig,0,CD,[],12,0,0,AHd,0,N2,0,HR,[],0,3,0,0,["m_",A89(API)],AHZ,0,BX,[],0,3,0,0,0,U7,0,EE,[],0,3,0,0,0,MO,0,B,[BW],3,3,0,0,0,AES,0,B,[MO],0,3,0,0,["bl",A87(AUs)],AET,0,B,[MO],0,3,0,0,["bl",A87(AOe)],Iq,0,B,[],1,3,0,0,0,AA5,0,B,[],3,3,0,0,0,LT,0,Iq,[CG,J2,KD,AA5],1,3,0,0,0,Nv,0,Iq,[CG],1,3,0,0,0,I0,0,B,
[],0,3,0,Hx,0,PE,0,Cy,[],0,3,0,0,["bR",A86(AR0),"ch",A88(AQP)],H0,0,Cy,[],1,3,0,0,["ch",A88(AG5)],CB,0,H0,[],1,3,0,0,["bR",A86(APC),"ch",A88(IU),"cB",A87(Qq)],Fk,0,B,[],3,3,0,0,0,JX,0,B,[],3,3,0,0,0,Fr,0,B,[],3,3,0,0,0]);
$rt_metadata([Lb,"Diff0",11,CB,[CH,Fk,JX,Fr,ES,FK,F5],0,3,[0,0,0],0,["f3",A88(A4_),"cB",A87(AUb),"bR",A86(A1o),"hn",A86(A0q),"qH",A86(AUB),"oP",A86(A1j),"oh",A87(AVg),"kX",A87(A2e),"hg",A87(AOV),"ch",A88(ARs),"ez",A87(ANy),"bY",A87(A2C),"cI",A89(A0t),"cr",A88(ASn),"dM",A88(A29),"dJ",A89(ATK),"ct",A86(A0W)],AH9,"DiffDemoJs",11,Lb,[],0,3,[0,0,0],0,["hn",A86(ASy)],AIw,0,B,[],0,3,0,0,0,AKS,0,B,[BW],1,3,0,0,0,Lj,0,LT,[],1,0,0,0,0,AGO,0,Lj,[],0,0,0,0,0,LL,0,B,[],1,3,0,0,0,Ow,0,B,[],0,3,0,0,0,AFD,0,B,[],0,3,0,0,0,Jm,
0,B,[BW],3,3,0,0,0,XC,0,B,[Jm],0,3,0,0,["bl",A87(APO)],XB,0,B,[Jm],0,3,0,0,["bl",A87(AS6)],Xz,0,B,[Cg],0,3,0,0,["bl",A87(ATz)],Xy,0,B,[Cg],0,3,0,0,["bl",A87(AYF)],W,0,B,[],3,3,0,0,0,T3,0,B,[W],0,3,0,0,["g",A87(A5G)],T5,0,B,[W],0,3,0,0,["g",A87(A00)],Vk,0,B,[BE],0,3,0,0,["bb",A87(AVw)],Vj,0,B,[BE],0,3,0,0,["bb",A87(ANf)],Vg,0,B,[BE],0,3,0,0,["bb",A87(AZk)],Vf,0,B,[BE],0,3,0,0,["bb",A87(A2c)],Vi,0,B,[BE],0,3,0,0,["bb",A87(APw)],Vh,0,B,[BE],0,3,0,0,["bb",A87(AWO)],Vn,0,B,[BE],0,3,0,0,["bb",A87(APa)],Vm,0,B,[BE],
0,3,0,0,["bb",A87(ARS)],Vp,0,B,[BE],0,3,0,0,["bb",A87(A3J)],Vo,0,B,[BE],0,3,0,0,["bb",A87(AMY)],ABQ,0,B,[BE],0,3,0,0,["bb",A87(AM_)],ABP,0,B,[BE],0,3,0,0,["bb",A87(A06)],ABO,0,B,[BE],0,3,0,0,["bb",A87(ASP)],ABC,0,B,[BE],0,3,0,0,["bb",A87(APS)],ABB,0,B,[BE],0,3,0,0,["bb",A87(AW2)],ABz,0,B,[BE],0,3,0,0,["bb",A87(A4N)],ABy,0,B,[BE],0,3,0,0,["bb",A87(AR1)],ABx,0,B,[BE],0,3,0,0,["bb",A87(A3L)],ABw,0,B,[BE],0,3,0,0,["bb",A87(AMQ)],ABv,0,B,[BE],0,3,0,0,["bb",A87(A3y)],ABG,0,B,[BE],0,3,0,0,["bb",A87(A2N)],ABF,0,B,[BE],
0,3,0,0,["bb",A87(AOH)],ABE,0,B,[BE],0,3,0,0,["bb",A87(A0a)],ABD,0,B,[BE],0,3,0,0,["bb",A87(AQL)],ABJ,0,B,[BE],0,3,0,0,["bb",A87(AQM)],ABI,0,B,[BE],0,3,0,0,["bb",A87(AXJ)],ABH,0,B,[BE],0,3,0,0,["bb",A87(AOW)],AD_,0,B,[],0,0,0,0,0,It,0,B,[],0,3,0,0,0,QO,0,It,[],0,3,0,0,0,AH$,0,B,[],0,3,0,0,0,O8,0,It,[],0,3,0,0,0,Ua,0,B,[BW],3,3,0,0,0]);
$rt_metadata([PU,0,B,[Ua],0,3,0,0,["MU",A87(A07)],AC4,0,B,[W],0,3,0,0,["g",A87(ADN)],AEg,0,Nv,[],0,0,0,0,0,CF,0,B,[Dr],0,3,0,0,["b1",A86(AUc),"h6",A86(A14),"dK",A89(J7),"dH",A87(AMp),"cB",A87(AYv),"r3",A87(ARV),"pm",A87(AV3),"lR",A88(A3m),"ku",A86(AV$),"cI",A89(AQH),"cr",A88(AOm),"dM",A88(ASC),"bY",A87(AVN),"dJ",A89(A3c)],AGj,0,CF,[],0,3,0,0,["dH",A87(AHG)],AGS,0,B,[],0,3,0,0,0,F6,0,B,[],3,3,0,0,["w$",A86(A16),"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK)],Rz,0,B,[],3,0,0,0,0,ML,0,B,[F6],3,3,0,0,["w$",A86(A16),
"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK)],AGp,"EditorComponent",11,CF,[F6,CH,JX,Rz,ML],0,3,[0,0,0],0,["dK",A89(MN),"lR",A88(ATh),"pR",A88(A5H),"vj",A86(AZE),"w$",A86(AXA),"qH",A86(JN),"oP",A86(KN),"oh",A87(IQ),"kX",A87(AT1),"ku",A86(Me),"b1",A86(AX0),"cB",A87(LU),"qG",A87(AKu),"h6",A86(AIh),"pY",A86(AU0),"dH",A87(A1w),"lA",A86(Ut),"kO",A86(Us),"hS",A87(ATG),"lc",A86(ATu),"md",A86(AWH),"dJ",A89(L$),"dM",A88(TI),"cr",A88(Xa),"cI",A89(Pr),"bY",A87(Yh),"iH",A87(A5i),"f3",A88(Js),"Ae",A86(AVS),"K",A86(AY9)],AJh,
0,B,[],0,3,0,0,0,UC,0,B,[W],0,3,0,0,["g",A87(ANJ)],UD,0,B,[W],0,3,0,0,["g",A87(A4g)],UE,"Diff0$<init>$lambda$_0_2",11,B,[Cp],0,3,[0,0,0],0,["G",A87(ARy)],H4,"CtrlO",11,B,[Cp],0,3,[0,0,0],0,["G",A87(AP0)],UA,0,B,[W],0,3,0,0,["g",A87(ASp)],UB,"Diff0$<init>$lambda$_0_4",11,B,[CU],0,3,[0,0,0],0,["G",A87(A4O)],CN,0,B,[],3,3,0,0,0,AEu,"WindowManager",24,B,[CH,CN],0,3,[0,0,0],0,["bY",A87(AXc),"cI",A89(AOt),"cr",A88(AQI),"dM",A88(A5b),"fk",A88(A0Q)],Ug,"UiContext",23,B,[FK,F5],0,3,[0,0,0],0,["f3",A88(A3$),"ct",A86(A15)],W3,
"WindowScene$<init>$lambda$_1_0",11,B,[ES],0,3,[0,0,0],0,["dJ",A89(A47)],W2,"WindowScene$<init>$lambda$_1_1",11,B,[CU],0,3,[0,0,0],0,["G",A87(AOv)],AGb,0,B,[],0,3,0,0,0,AEQ,0,B,[],0,3,0,0,0,AEG,0,B,[],0,3,0,0,0,FD,0,B,[Dr],0,3,0,0,0,AIL,0,B,[],0,3,0,0,0,AGa,0,B,[Dr],0,3,0,0,0,Yc,0,B,[W],0,3,0,0,0,Yb,0,B,[W],0,3,0,0,["g",A87(ANY)],Ya,0,B,[W],0,3,0,0,["g",A87(ANb)],ALv,0,B,[],0,3,0,0,0,X_,0,B,[U],0,3,0,0,["e",A86(AXg)],Yg,0,B,[U],0,3,0,0,["e",A86(AZL)],Yf,0,B,[U],0,3,0,0,["e",A86(A6k)],Ye,0,B,[U],0,3,0,0,["e",
A86(ARK)],Yd,0,B,[U],0,3,0,0,["e",A86(ATA)],X$,0,B,[U],0,3,0,0,["e",A86(A5J)],Vx,0,B,[U],0,3,0,0,["e",A86(ARN)],Vy,0,B,[U],0,3,0,0,["e",A86(A2I)],AHp,0,B,[BW],1,3,0,0,0,NO,0,B,[],4,3,0,A0G,0,AFK,0,B,[],3,3,0,0,0,AAT,"Scene1$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(AQp)],AAS,"Scene1$<init>$lambda$_0_1",11,B,[Cp],0,3,[0,0,0],0,["G",A87(AYD)],Ur,"Window",24,B,[],0,3,[0,0,0],0,0,KE,0,B,[],0,3,0,0,0,Fx,0,B,[],0,3,0,0,0,NM,0,Fx,[],0,3,0,0,0,ABM,0,Fx,[],0,3,0,0,0]);
$rt_metadata([ZD,0,Fx,[],0,3,0,0,0,Gn,0,B,[],3,3,0,0,0,S_,0,B,[],3,3,0,0,0,B4,"V4f",29,B,[],0,3,[0,0,0],0,["bN",A87(AWx),"K",A86(AOu)],Jo,0,B,[],3,3,0,0,0,AJD,0,Ex,[Eb,CZ,Jo],0,3,0,0,["p7",A87(A0N),"iY",A87(BI),"cZ",A86(A2n),"p$",A87(Bz),"oQ",A88(AKK),"mC",A87(EV),"rm",A87(AIa),"jx",A86(IN),"vb",A88(AJQ),"fs",A87(FE),"K",A86(ALA)],LS,0,B,[],0,3,0,0,0,IK,"GL$Texture",10,B,[Dr],0,3,[AJK,0,"Texture"],0,["b1",A86(AHx)],Zt,0,B,[],3,0,0,0,0,O5,0,B,[],3,3,0,0,0,ZM,"UiContext$<init>$lambda$_0_0",23,B,[U],0,3,[0,0,0],
0,["e",A86(A0h)],ZL,"UiContext$<init>$lambda$_0_1",23,B,[U],0,3,[0,0,0],0,["e",A86(AW1)],AMg,0,B,[],0,3,0,0,0,Ue,0,B,[],0,3,0,0,0,Hc,0,B,[],1,3,0,0,0,AAD,0,Hc,[],0,3,0,0,["uX",A87(Cf)],Mv,0,B,[],3,3,0,0,0,Ui,0,B,[Mv],3,3,0,0,0,LR,"JsFileHandle",27,B,[Ui],0,3,[0,0,0],0,["t",A86(E1),"t4",A86(ANz),"K",A86(NU)],YH,0,B,[Mv],3,3,0,0,0,Os,"JsDirectoryHandle",27,B,[YH],0,0,[0,0,0],0,["t",A86(JC),"t4",A86(A48),"K",A86(I6)],ADI,0,B,[],3,3,0,0,0,AK9,"JsArrayView",27,B,[ADI],0,3,[0,0,0],0,["K",A86(AYW)],AAM,0,B,[O5],0,
3,0,0,0,Hs,0,B,[CG],0,3,0,0,0,N$,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DN,"CodeLine",11,B,[],0,3,[0,0,0],0,["K",A86(A2D)],Zb,0,B,[],0,3,0,0,0,LE,0,El,[Eb,CZ],0,3,0,0,0,Vv,0,B,[Cg],0,3,0,0,["bl",A87(A0P)],Cz,"CodeElement",11,B,[],0,3,[0,0,0],0,["K",A86(AGw)],N7,0,LE,[],0,3,0,0,0,AAJ,0,B,[],0,3,0,0,0,AMA,"Interval",16,B,[CG],0,3,[0,0,0],0,["bN",A87(AUP),"K",A86(AJq),"mJ",A87(AYu)],VK,0,B,[Gt],0,3,0,0,["qE",A88(ARQ)],AAd,"IntervalNode",18,B,[],0,3,[0,0,0],0,["K",A86(ANw),"bN",A87(AOi)],JH,0,B,[],3,3,0,0,
0,Ha,0,B,[JH,Eb],0,0,0,0,["bN",A87(AYY),"K",A86(AOY)],H8,"HashMap$HashEntry",1,Ha,[],0,0,[LE,0,0],0,0,N4,0,LL,[],1,3,0,0,0,Q7,0,N4,[],0,3,0,0,0,Jp,0,EE,[],0,3,0,0,0,Pj,0,B,[Jm],0,3,0,0,["bl",A87(AWn)],Pl,0,B,[Cg],0,3,0,0,["bl",A87(AVJ)],Pk,0,B,[Cg],0,3,0,0,["bl",A87(AXM)],Je,0,B,[],0,3,0,0,0,KP,0,CB,[Fk,Fr],0,3,0,0,["hg",A87(A0o),"cB",A87(A4c),"bR",A86(AQr),"hn",A86(A5x),"ch",A88(AMX),"ez",A87(AZi)],AJk,0,Cy,[],0,3,0,0,["cB",A87(ANh),"bR",A86(APd),"ch",A88(ARw)],AB_,0,Cy,[],0,3,0,0,["cB",A87(AS3),"bR",A86(AYk),
"ch",A88(AZD)],Yk,"ToolbarDemo",15,CB,[CH,CN],0,3,[0,0,0],0,["cr",A88(AVx),"dM",A88(ANu),"fk",A88(AQ0),"ch",A88(APP),"bR",A86(AZd),"bY",A87(ARz),"cI",A89(ANZ)]]);
$rt_metadata([ABA,"FindUsagesDemo",15,CB,[CN],0,3,[0,0,0],0,["fk",A88(AO4),"ch",A88(AOc)],XH,"RegionTextureAllocatorDemo",11,H0,[CH],0,3,[0,0,0],0,["bY",A87(A0T),"cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27),"bR",A86(A3I),"cB",A87(ANa)],Tp,0,Cy,[],0,3,0,0,["bR",A86(AMV),"ch",A88(AWX)],Dw,0,Cy,[],0,3,0,0,["bR",A86(AA4),"ch",A88(Tk)],RJ,"SelectFileTest",11,Dw,[],0,3,0,0,0,X3,0,CB,[],0,3,0,0,0,Xj,"RenderTexture",11,Dw,[],0,3,0,0,["cB",A87(AQG),"bR",A86(AY3),"ch",A88(A5s)],Tn,"ScissorDemo",11,Dw,[],0,3,0,0,["bR",A86(A58),
"ch",A88(AQm)],ABl,0,Cy,[],0,3,0,0,["bR",A86(AVM),"ch",A88(AZf),"cB",A87(A3o)],KH,"ClipboardTest",11,Dw,[CH],0,3,[0,0,0],0,["bY",A87(A0T),"cr",A88(AVx),"dM",A88(ANu),"cI",A89(ARl)],S8,"CodiconDemo",11,Dw,[],0,3,0,0,["bR",A86(AWw)],Hh,0,Cy,[CH],1,3,0,0,["bY",A87(A0T),"cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27),"bR",A86(AGh)],T2,"LineShaderDemo1",11,Hh,[],0,3,[0,0,0],0,["cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27),"ch",A88(A2_),"bY",A87(A3_)],T1,"LineShaderDemo2",11,Hh,[],0,3,[0,0,0],0,["cr",A88(AVx),"dM",A88(ANu),
"cI",A89(A27),"bY",A87(A5K),"bR",A86(AO0),"ch",A88(ANG)],WQ,"WindowsDemo",13,CB,[CN],0,3,[0,0,0],0,["fk",A88(AQZ)],Ev,"WindowDemo",23,CB,[CN],0,3,[0,0,0],0,["jG",A86(AYL),"pT",A86(ARH),"n$",A87(AJT),"fk",A88(A3R)],QX,"EditorInViewDemo",11,Ev,[CN,Fk,Fr],0,3,[0,0,0],0,["jG",A86(AOg),"pT",A86(AXl),"n$",A87(A5M),"ez",A87(AUF),"hg",A87(ATW)],XM,"UiContext$1",23,B,[CH],0,0,[Ug,0,0],0,["cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27),"bY",A87(A3F)],AAk,"FolderTransferDemo",28,Ev,[CN],0,3,[0,0,0],0,["jG",A86(AQs)],Uw,"FolderDiff",
28,CB,[CN],0,3,[0,0,0],0,["fk",A88(AWf)],Pc,0,KP,[],0,3,0,0,["hn",A86(AYn)],ADu,"SinDemo",11,Cy,[CH],0,3,[0,0,0],0,["bY",A87(A0T),"cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27),"ch",A88(A5E),"bR",A86(A0g),"cB",A87(AUp)],P7,"DiffMiddleDemo",28,Ev,[CN],0,3,[0,0,0],0,["jG",A86(AZy)],ZB,"FileViewDemo",23,Ev,[CN],0,3,[0,0,0],0,["jG",A86(A1V),"n$",A87(A3i)],Sn,"ProjectViewDemo",11,CB,[CN],0,3,[0,0,0],0,["fk",A88(AZg)],Ku,0,B,[],0,3,0,0,0,AGL,0,B,[],0,3,0,0,0,AFJ,0,B,[],3,3,0,0,0,AJe,0,B,[],0,3,0,0,0,AHb,0,B,[],3,3,0,0,
0,AIW,0,B,[],0,3,0,0,0,MW,0,B,[JH,CZ],0,3,0,0,0,K1,0,MW,[],0,0,0,0,0,AMq,0,B,[],0,3,0,0,0,Zi,"Editor0$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(AX7)],Zg,0,B,[W],0,3,0,0,["g",A87(AZO)],Zh,"Editor0$<init>$lambda$_0_2",11,B,[CU],0,3,[0,0,0],0,["G",A87(AU3)],AIR,"TextRect",11,KE,[],0,3,[0,0,0],0,0,Ux,"DemoScene1$MyInputListener",11,B,[CH],0,0,[AJk,0,"MyInputListener"],0,["bY",A87(AYl),"cI",A89(AM6),"cr",A88(AYe),"dM",A88(AXE)],ZJ,"DemoScene1$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(A4w)],ZI,
"DemoScene1$<init>$lambda$_0_1",11,B,[Cp],0,3,[0,0,0],0,["G",A87(A2O)],ZH,"DemoScene1$<init>$lambda$_0_2",11,B,[FK],0,3,[0,0,0],0,["f3",A88(A0Y)],ZG,"DemoScene1$<init>$lambda$_0_3",11,B,[U],0,3,[0,0,0],0,["e",A86(AXa)],ZF,"DemoScene1$<init>$lambda$_0_4",11,B,[CU],0,3,[0,0,0],0,["G",A87(ATa)],ZE,"DemoScene1$<init>$lambda$_0_5",11,B,[ES],0,3,[0,0,0],0,["dJ",A89(A4C)],Hy,0,B4,[],0,3,0,0,0,AHP,0,B,[],3,3,0,0,0,Xh,"CleartypeColors$MyInputListener",11,B,[CH],0,0,[AB_,0,"MyInputListener"],0,["bY",A87(A0T),"cr",A88(AVx),
"dM",A88(ANu),"cI",A89(APA)],Xe,0,B,[],0,3,0,0,0,AHc,"Toolbar",23,B,[],0,3,[0,0,0],0,0]);
$rt_metadata([AJ$,0,B,[],0,3,0,0,["bN",A87(A3O)],ACB,"ToolbarDemo$<init>$lambda$_0_0",15,B,[Cp],0,3,[0,0,0],0,["G",A87(ASO)],ACx,"ToolbarDemo$<init>$lambda$_0_1",15,B,[CU],0,3,[0,0,0],0,["G",A87(AUK)],ACy,0,B,[U],0,3,0,0,["e",A86(A6c)],ACz,0,B,[U],0,3,0,0,["e",A86(ANR)],BC,"ToolbarItem",23,B,[],0,3,[0,0,0],0,0,U_,"FindUsagesDemo$<init>$lambda$_0_0",15,B,[Cp],0,3,[0,0,0],0,["G",A87(A0S)],Va,"FindUsagesDemo$<init>$lambda$_0_1",15,B,[CU],0,3,[0,0,0],0,["G",A87(ANv)],AIx,0,B,[],0,3,0,0,0,Pt,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",
11,B,[CN],0,3,[0,0,0],0,["fk",A88(AST)],Ps,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Cp],0,3,[0,0,0],0,["G",A87(A2h)],AAz,0,B,[],3,3,0,0,0,AJl,0,B,[AAz],0,3,0,0,0,Xs,"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CH],0,0,[Tp,0,"LineNumbersInputListener"],0,["cI",A89(A27),"cr",A88(AXn),"dM",A88(ANq),"bY",A87(AZs)],AAU,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[ES],0,3,[0,0,0],0,["dJ",A89(ASR)],Re,"SelectFileTest$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(ASG)],R9,
"WorkerTest$<init>$lambda$_0_0",14,B,[CU],0,3,[0,0,0],0,["G",A87(AWy)],R8,0,B,[W],0,3,0,0,["g",A87(A3s)],ACL,"RenderTexture$MyInputListener",11,B,[CH],0,0,[Xj,0,"MyInputListener"],0,["dM",A88(ANu),"cI",A89(A27),"bY",A87(A2B),"cr",A88(AWm)],AHk,0,B,[],0,3,0,0,0,Dk,0,B,[],3,3,0,FV,0,Zj,"TextureRegionTestScene$MListener",11,B,[CH],0,0,[ABl,0,"MListener"],0,["cI",A89(A27),"cr",A88(AQT),"dM",A88(AXB),"bY",A87(APF)],WI,"TextureRegionTestScene$<init>$lambda$_0_0",11,B,[ES],0,3,[0,0,0],0,["dJ",A89(A4z)],AEd,"ClipboardTest$<init>$lambda$_0_0",
11,B,[Cp],0,3,[0,0,0],0,["G",A87(AOQ)],AEc,"ClipboardTest$<init>$lambda$_0_1",11,B,[FK],0,3,[0,0,0],0,["f3",A88(A05)],AEb,"ClipboardTest$<init>$lambda$_0_2",11,B,[FK],0,3,[0,0,0],0,["f3",A88(AOZ)],AEa,"ClipboardTest$<init>$lambda$_0_3",11,B,[F5],0,3,[0,0,0],0,["ct",A86(AR6)],AEe,"ClipboardTest$<init>$lambda$_0_4",11,B,[F5],0,3,[0,0,0],0,["ct",A86(A35)],SN,"CodiconDemo$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(AVZ)],PV,"WindowsDemo$<init>$lambda$_0_0",13,B,[Cp],0,3,[0,0,0],0,["G",A87(ANj)],PX,"WindowsDemo$<init>$lambda$_0_1",
13,B,[CU],0,3,[0,0,0],0,["G",A87(A0b)],PY,0,B,[W],0,3,0,0,["g",A87(A2z)],PZ,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CU],0,3,[0,0,0],0,["G",A87(A4p)],Rg,"FolderTransferDemo$<init>$lambda$_0_0",28,B,[CU],0,3,[0,0,0],0,["G",A87(ATy)],Rf,"FolderTransferDemo$<init>$lambda$_0_1",28,B,[Cp],0,3,[0,0,0],0,["G",A87(AWb)],ABT,"FolderDiff$<init>$lambda$_0_0",28,B,[CU],0,3,[0,0,0],0,["G",A87(ATM)],AIj,0,B,[],3,3,0,0,0,Rn,"SinDemo$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(ARm)],Ve,"DiffMiddleDemo$<init>$lambda$_0_0",
28,B,[CU],0,3,[0,0,0],0,["G",A87(ATN)],Vd,"DiffMiddleDemo$<init>$lambda$_0_1",28,B,[Cp],0,3,[0,0,0],0,["G",A87(AS_)],Yl,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CU],0,3,[0,0,0],0,["G",A87(APi)],Dq,0,B,[],3,3,0,APM,0,Cs,0,CD,[],12,3,0,UG,0,KJ,0,B,[],0,3,0,0,0,Jg,0,B,[],0,3,0,0,0,AK4,0,B,[],0,3,0,0,0,DU,0,B,[],3,3,0,AXk,0,YQ,0,B,[BW],3,3,0,0,0,Y2,0,B,[YQ],0,3,0,0,["Cw",A88(AZS)],YR,0,B,[BW],3,3,0,0,0]);
$rt_metadata([Y0,0,B,[YR],0,3,0,0,["Cw",A88(A0C)],AF4,0,B,[],0,3,0,0,0,AJj,0,B,[BW],3,3,0,0,0,VX,0,B,[],0,3,0,0,0,DZ,0,B,[],3,3,0,A1B,0,Ib,0,B,[],3,3,0,0,0,QB,0,B,[Ib],0,3,0,0,["xu",A89(A3h)],QC,0,B,[Ib],0,3,0,0,0,Uz,0,B,[W],0,3,0,0,["g",A87(A1_)],Qf,0,B,[W],0,3,0,0,["g",A87(APu)],Qe,0,B,[W],0,3,0,0,["g",A87(AN8)],Qb,0,B,[W],0,3,0,0,["g",A87(ANc)],P_,0,B,[W],0,3,0,0,["g",A87(A5L)],AI1,0,B,[],0,3,0,0,0,VA,0,B,[W],0,3,0,0,["g",A87(A0D)],ADa,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["G",A87(AQA)],ALZ,
0,B,[],0,3,0,0,["bN",A87(AYP)],Jn,0,B,[],0,3,0,0,0,KF,0,B,[],4,3,0,0,0,AJM,0,B,[],0,3,0,0,0,Cv,0,CD,[],12,3,0,AGf,0,AMw,0,B,[],0,3,0,0,0,AGA,0,B,[BW],4,3,0,0,0,AMF,0,B,[],0,3,0,0,0,AFj,0,B,[],3,3,0,0,0,C7,0,B,[BW],1,3,0,0,0,ALl,0,C7,[],1,3,0,0,0,ALL,0,C7,[],1,3,0,0,0,AJ1,0,C7,[],1,3,0,0,0,AKa,0,C7,[],1,3,0,0,0,AL2,0,C7,[],1,3,0,0,0,V8,0,B,[U],0,3,0,0,["e",A86(ARd)],HX,0,CD,[],12,3,0,AHf,0,P3,0,B,[BE],0,3,0,0,["bb",A87(AXC)],AAq,0,B,[],0,3,0,0,0,AJI,0,B,[],0,3,0,0,0,GG,0,B,[],0,3,0,0,0,AGq,0,B,[],4,3,0,0,0,Uc,
0,B,[],0,0,0,0,0,AJO,0,B,[],3,3,0,0,0,ADb,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[ES],0,3,[0,0,0],0,["dJ",A89(AXd)],Ys,"ScissorDemo$1",11,B,[CH],0,0,[Tn,0,0],0,["cr",A88(AVx),"dM",A88(ANu),"cI",A89(A27),"bY",A87(A6f)],AGy,0,B,[BW],1,3,0,0,0,AIe,"PopupMenu",23,B,[CN,F6,Dr],0,3,[0,0,0],0,["w$",A86(A16),"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK),"fk",A88(A5S),"iH",A87(ARW),"b1",A86(ATU)],XR,0,B,[W],0,3,0,0,["g",A87(ARD)],VM,0,B,[W],0,3,0,0,["g",A87(A5v)],RA,0,B,[W],0,3,0,0,["g",A87(AX9)],Qh,0,B,
[CV],0,3,0,0,["ct",A86(AXr)],ALg,0,B,[],3,3,0,0,0,Md,0,B,[],3,3,0,0,0]);
$rt_metadata([RF,0,B,[Md],0,3,0,0,["z$",A87(AYw)],PS,0,B,[BE],0,3,0,0,["bb",A87(A4G)],AHD,0,B,[],0,3,0,0,0,Rh,"LineNumbersTexture",11,B,[Dr],0,3,[0,0,0],0,0,AFn,0,B,[],0,3,0,0,0,UR,0,B,[],0,3,0,0,0,Mr,0,B,[],0,3,0,0,0,S9,0,B,[],3,3,0,0,0,ADh,0,B,[W],0,3,0,0,["g",A87(AYx)],Gs,0,Jp,[],0,3,0,0,0,AEp,0,FJ,[],0,3,0,0,0,AEs,0,B,[W],0,3,0,0,["g",A87(AW7)],U1,0,B,[W],0,3,0,0,["g",A87(A46)],Wy,0,B,[U],0,3,0,0,["e",A86(A3z)],Fs,0,B,[Fk],1,3,0,0,0,ZY,"FolderDiffWindow",28,Fs,[],0,3,[0,0,0],0,["b1",A86(AOh),"qF",A87(A0j)],V0,
0,B,[CV],0,3,0,0,["ct",A86(AWr)],Lh,0,B,[],3,3,0,0,["r6",A88(AN5)],L4,0,Fs,[Lh],0,3,0,0,["qF",A87(AYz),"b1",A86(A03),"ez",A87(AZo),"Ao",A87(AZm),"ya",A87(AUO),"vC",A87(A2q),"r6",A88(A1T)],AD5,0,B,[CV],0,3,0,0,["ct",A86(AWk)],AEJ,0,DG,[CG],0,3,0,0,0,GL,0,B,[],0,0,0,0,0,JW,0,B,[],4,3,0,0,0,UV,0,B,[],0,3,0,0,0,OM,0,B,[],1,3,0,0,0,ADG,"Pos",17,B,[CG],0,3,[0,0,0],0,["bN",A87(ANd),"qr",A86(AT_),"K",A86(ANN),"mJ",A87(A2X)],AGI,0,C7,[],1,3,0,0,0,Vu,0,B,[U],0,3,0,0,["e",A86(AOb)],AE2,0,B,[],3,3,0,0,0,X2,0,B,[U],0,3,
0,0,["e",A86(A42)],X0,0,B,[U],0,3,0,0,["e",A86(APL)],XZ,0,B,[U],0,3,0,0,["e",A86(ANF)],X1,0,B,[U],0,3,0,0,["e",A86(A6g)],Z_,0,B,[U],0,3,0,0,["e",A86(AVh)],Z$,0,B,[U],0,3,0,0,["e",A86(A1d)],AAa,0,B,[U],0,3,0,0,["e",A86(A2G)],Sw,0,B,[U],0,3,0,0,["e",A86(A1u)],ZN,0,B,[W],0,3,0,0,["g",A87(AXQ)],R1,0,B,[W],0,3,0,0,["g",A87(A1Y)],FA,0,CF,[],0,3,0,0,0,RV,0,FA,[F6],0,3,0,0,["w$",A86(A16),"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK),"b1",A86(A44),"lR",A88(AZc),"dH",A87(AXm),"pm",A87(A2V),"r3",A87(A36),"bY",A87(ARM),"cr",
A88(APR),"cI",A89(AT2),"iH",A87(A4h)],VT,0,B,[U],0,3,0,0,["e",A86(AV5)],AGe,0,CF,[],0,3,0,0,["b1",A86(AUQ),"dK",A89(AQj),"dH",A87(A3p),"cI",A89(AVd),"cr",A88(AUS),"dM",A88(ASW),"bY",A87(ASH),"dJ",A89(AZA),"h6",A86(AIU)],AEB,0,B,[W],0,3,0,0,["g",A87(AO8)],AED,0,B,[W],0,3,0,0,["g",A87(ANe)],QD,0,FA,[],0,3,0,0,["h6",A86(AWc),"pm",A87(A21),"dH",A87(AWu),"cr",A88(ASf)],AEC,0,B,[U],0,3,0,0,["e",A86(AU7)],U8,0,CF,[],0,3,0,0,0,H_,0,CF,[],1,3,0,0,["b1",A86(A11),"dH",A87(ASz),"cB",A87(AXz),"dK",A89(AO7),"cI",A89(A4M),
"cr",A88(AVf),"dM",A88(A4X),"bY",A87(A5n),"dJ",A89(APJ),"ku",A86(A4$)],Ix,0,H_,[],1,0,0,0,["CG",A86(ARJ)]]);
$rt_metadata([AGP,0,Ix,[Fk],0,0,0,0,0,Hz,0,B,[],0,3,0,0,0,C$,"FileTreeNode",23,Hz,[],0,3,[0,0,0],0,0,Ti,0,B,[U],0,3,0,0,["e",A86(AYj)],Tg,0,B,[U],0,3,0,0,["e",A86(AWS)],Th,0,B,[U],0,3,0,0,["e",A86(A0s)],Tf,0,B,[U],0,3,0,0,["e",A86(AU4)],Rt,0,H_,[Fr],0,3,0,0,["CG",A86(AQ9),"h6",A86(A0e)],ABs,0,B,[U],0,3,0,0,["e",A86(APg)],ABr,0,B,[U],0,3,0,0,["e",A86(ATL)],ABt,0,B,[U],0,3,0,0,["e",A86(A1O)],AAW,0,DG,[CG],0,3,0,0,0,AE0,0,B,[U],0,3,0,0,["e",A86(A02)],Yj,0,B,[U],0,3,0,0,["e",A86(AXX)],ACs,0,B,[],0,3,0,0,0,Km,0,
B,[],0,3,0,0,0,OX,0,B,[],3,3,0,0,0,LI,0,FA,[F6],0,3,0,0,["w$",A86(A16),"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK),"b1",A86(ATt),"lR",A88(ANV),"dH",A87(A1y),"cI",A89(A4y),"cr",A88(AOS)],AKC,0,LI,[],0,3,0,0,["w$",A86(A16),"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK)],AG7,0,B,[ML],0,3,0,0,["w$",A86(A16),"vj",A86(APY),"f3",A88(AMW),"Ae",A86(AWK),"lA",A86(AU1),"kO",A86(A4J),"hS",A87(AV1),"lc",A86(ARx),"md",A86(AXG),"pR",A88(AR$),"qG",A87(A1Q),"pY",A86(MZ)],P4,0,CF,[],0,3,0,0,["dH",A87(ANk)],ACA,0,B,[],0,3,0,0,0,X5,0,
B,[U],0,3,0,0,["e",A86(AWh)],Tj,0,B,[U],0,3,0,0,["e",A86(ARB)],Qp,0,B,[W],0,3,0,0,["g",A87(ANs)],Qo,0,B,[W],0,3,0,0,["g",A87(ANL)],AE8,0,B,[Gt],0,3,0,0,["qE",A88(AUr)],Un,0,B,[],3,3,0,AQN,0,Lw,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,AMt,0,Hc,[],0,0,0,0,["uX",A87(A54)],Db,0,Bt,[],0,3,0,0,0,ALy,0,FJ,[],0,3,0,0,0,AMz,0,B,[],0,3,0,0,0,Pd,0,B,[W],0,3,0,0,["g",A87(AWP)],ADA,0,B,[W],0,3,0,0,["g",A87(A1J)],OD,0,BJ,[],0,3,0,0,0,ST,0,B,[W],0,3,0,0,["g",A87(AZl)],SS,0,B,[W],0,3,0,0,["g",A87(A43)],Fq,0,B,[],3,3,0,
0,0,XW,0,B,[Fq],0,0,0,0,["cM",A86(Cb),"cc",A86(Cc),"pO",A86(AAg)],LB,0,OM,[],1,3,0,0,0,TP,0,LB,[],0,3,0,0,0,AD9,0,B,[W],0,3,0,0,0,Wr,0,B,[W],0,3,0,0,["g",A87(AVF)],Pv,0,B,[CV],0,3,0,0,["ct",A86(AT5)],Pu,0,B,[CV],0,3,0,0,["ct",A86(AY7)],ABi,0,B,[CV],0,3,0,0,["ct",A86(A2u)],XJ,0,B,[CV],0,3,0,0,["ct",A86(A3f)],AA3,0,B,[Cg],0,3,0,0,["bl",A87(A5p)],AGM,0,B,[BW],1,3,0,0,0]);
$rt_metadata([ADy,0,B,[Cg],0,3,0,0,["bl",A87(AP4)],AIJ,0,B,[BE],0,3,0,0,0,AHO,0,B,[BE],0,3,0,0,0,XT,0,B,[W],0,3,0,0,["g",A87(AOO)],XS,0,B,[W],0,3,0,0,["g",A87(AUE)],SD,0,B,[U],0,3,0,0,["e",A86(AT7)],SC,0,B,[U],0,3,0,0,["e",A86(AZC)],SF,0,B,[U],0,3,0,0,["e",A86(A41)],SE,0,B,[U],0,3,0,0,["e",A86(AWZ)],AB7,0,B,[U],0,3,0,0,["e",A86(AMP)],AF5,0,B,[],0,3,0,0,0,AB8,0,B,[U],0,3,0,0,["e",A86(AQv)],T6,0,B,[U],0,3,0,0,["e",A86(AVz)],ADC,0,B,[U],0,3,0,0,["e",A86(A5w)],Ra,0,B,[],0,3,0,0,0,Xd,0,B,[U],0,3,0,0,["e",A86(AZJ)],Xc,
0,B,[Ds],0,3,0,0,0,AII,0,B,[],0,3,0,0,0,DT,0,Bt,[],0,3,0,0,0,AIb,0,B,[],0,3,0,0,0,Tl,0,El,[Eb,CZ],0,3,0,0,0,Vq,0,B,[],0,3,0,0,0,U9,0,B,[],0,3,0,0,0,Xw,0,B,[Ds],0,3,0,0,0,TA,0,B,[W],0,3,0,0,["g",A87(AUG)],Zk,0,DG,[CG],0,3,0,0,0,Kq,0,B,[],4,3,0,0,0,UH,0,B,[U],0,3,0,0,["e",A86(ANx)],UI,0,B,[U],0,3,0,0,["e",A86(APH)],UJ,0,B,[U],0,3,0,0,["e",A86(A45)],UK,0,B,[U],0,3,0,0,["e",A86(AR2)],UL,0,B,[U],0,3,0,0,["e",A86(AUk)],Pi,0,B,[Cg],0,3,0,0,["bl",A87(A6j)],Wu,0,B,[],3,3,0,A7h,0,ACU,0,B,[],0,3,0,0,0,RP,0,B,[U],0,3,0,
0,["e",A86(A1N)],Xp,0,B,[U],0,3,0,0,["e",A86(A1H)],X4,0,B,[],0,3,0,0,0,Wa,0,B,[W],0,3,0,0,["g",A87(AUM)],AIi,0,B,[],0,3,0,0,0,AFN,0,B,[],3,3,0,0,0,SA,0,B,[U],0,3,0,0,["e",A86(A0m)],ADR,0,B,[U],0,3,0,0,["e",A86(AWd)],Zc,0,B,[],1,3,0,0,0,Z7,0,B,[MM],3,3,0,0,0,PQ,0,B,[Z7],3,3,0,0,0,FY,0,B,[PQ],1,3,0,0,0,AA6,0,FY,[],0,3,0,0,0,RZ,0,B,[],3,3,0,0,0,Ph,0,B,[W],0,3,0,0,0]);
$rt_metadata([AEz,0,B,[W],0,3,0,0,["g",A87(ANX)],AGW,0,B,[],3,3,0,0,0,JU,0,Ha,[],0,0,0,0,0,Ip,0,Bt,[],0,3,0,0,0,AEM,0,B,[Cg],0,3,0,0,["bl",A87(A3G)],AEL,0,B,[Cg],0,3,0,0,["bl",A87(AY6)],AD$,0,B,[Cg],0,3,0,0,["bl",A87(AZ0)],TH,0,B,[],0,3,0,0,0,ACW,0,B,[Ib],0,3,0,0,["xu",A89(ARG)],ALE,0,B,[],0,3,0,0,0,RE,0,B,[W],0,3,0,0,["g",A87(AXY)],AFv,0,B,[W],0,3,0,0,0,T_,0,B,[CE],0,3,0,0,["cD",A87(AXo)],Wh,0,B,[BE],0,3,0,0,0,FZ,0,B,[],0,3,0,0,0,AJB,0,B,[],0,3,0,0,0,AFU,0,B,[],0,3,0,0,0,AMH,0,B,[],0,3,0,0,0,AEq,0,B,[U],0,
3,0,0,["e",A86(AXH)],AEr,0,B,[U],0,3,0,0,["e",A86(A0l)],F_,"ScopeNode",20,B,[],0,3,[0,0,0],0,0,WB,0,B,[W],0,3,0,0,["g",A87(AQc)],N6,"FakeNode",20,F_,[],0,3,[0,0,0],0,0,Ly,"MemberNode",20,F_,[],0,3,[0,0,0],0,0,VH,0,B,[W],0,3,0,0,["g",A87(AXK)],Rj,"InferenceNode",20,B,[],0,3,[0,0,0],0,0,QI,0,B,[W],0,3,0,0,["g",A87(A1z)],QN,0,B,[HJ],3,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],Ez,0,FM,[QN],1,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],NK,0,Ez,[],1,0,0,0,["fs",A87(AWR),"p7",A87(A0N)],U2,0,NK,[],0,0,0,0,["fs",A87(AWR),"p7",A87(A0N)],Ol,
0,El,[],1,0,0,0,0,UZ,0,Ol,[],0,0,0,0,0,OG,0,Ex,[Jo],1,0,0,0,["fs",A87(AWR),"jx",A86(AY1),"mC",A87(ASk),"p7",A87(ARh)],U0,0,OG,[],0,0,0,0,["fs",A87(AWR),"iY",A87(ASr),"cZ",A86(ARA),"ca",A86(APm),"eN",A86(ANB)],UX,0,B,[Fq],0,0,0,0,["cM",A86(ANi),"cc",A86(A2s),"pO",A86(AUv)],Za,0,B,[Fq],3,3,0,0,0,UY,0,B,[Za],0,0,0,0,0,WU,0,B,[Gt],0,3,0,0,0,RX,0,B,[Ds],0,3,0,0,["G",A87(A6l)],KL,0,DT,[],0,3,0,0,0,J1,0,Bt,[],0,3,0,0,0,Oy,0,Bt,[],0,3,0,0,0,Y6,0,B,[W],0,3,0,0,["g",A87(A2t)],AI2,0,B,[W],0,3,0,0,0,ACi,0,B,[W],0,3,0,0,
["g",A87(ASa)],RD,0,B,[RZ],0,3,0,0,0,V_,0,B,[W],0,3,0,0,["g",A87(A0v)],AFA,0,B,[],0,3,0,0,0,ABj,0,B,[U],0,3,0,0,["e",A86(AXI)]]);
$rt_metadata([Hm,"Diff",11,B,[],0,3,[0,0,0],0,0,QY,0,Ez,[],0,0,0,0,["p7",A87(A0N)],Uq,0,Ez,[],0,0,0,0,["fs",A87(AWR),"p7",A87(A0N)],Q0,0,FM,[],0,0,0,0,["fs",A87(AWR),"p7",A87(A0N)],WX,0,B,[W],0,3,0,0,["g",A87(AZu)],UN,0,B,[W],0,3,0,0,["g",A87(A1c)],KR,"DeclNode",22,B,[],0,3,[0,0,0],0,["K",A86(A3U),"bN",A87(ALd)],ME,"MethodNode",22,KR,[],0,3,[0,0,0],0,["bN",A87(AX8)],Fg,"RefNode",21,B,[],0,3,[0,0,0],0,["K",A86(AVP),"bN",A87(AJE)],HU,"ExprRefNode",21,Fg,[],0,3,[0,0,0],0,["K",A86(A1I)],Ky,"MethodCallNode",21,Fg,
[],0,3,[0,0,0],0,["bN",A87(A49)],JF,"QualifiedRefNode",21,Fg,[],0,3,[0,0,0],0,["K",A86(ASI),"bN",A87(AXu)],TF,0,B,[W],0,3,0,0,["g",A87(AV2)],AGo,0,FY,[],0,3,0,0,0,ABW,0,B,[W],0,3,0,0,["g",A87(ATo)],PH,0,B,[W],0,3,0,0,["g",A87(A5V)],US,0,B,[W],0,3,0,0,["g",A87(AZG)],PW,0,B,[W],0,3,0,0,["g",A87(ASg)],Zm,0,B,[W],0,3,0,0,["g",A87(AU$)],Ns,"FileDiffWindow",28,Fs,[],0,3,[0,0,0],0,["ez",A87(A3M),"b1",A86(A4P),"qF",A87(AXT)],WY,0,B,[CV],0,3,0,0,["ct",A86(A4e)],QJ,0,B,[CV],0,3,0,0,["ct",A86(AQa)],TV,0,B,[Gn],0,3,0,0,
["qL",A88(AP_)],Xf,0,B,[],0,3,0,0,0,Se,0,B,[],0,3,0,0,0,Uv,0,B,[W],0,3,0,0,["g",A87(A5I)],Vz,0,B,[Md],0,3,0,0,["z$",A87(NP)],Vt,0,Ix,[Fk],0,0,0,0,0,WP,0,B,[U],0,3,0,0,["e",A86(A0A)],WO,0,B,[U],0,3,0,0,["e",A86(ARR)],UP,0,B,[Gn],0,3,0,0,["qL",A88(AT6)],AIG,0,B,[CG],0,3,0,0,["bN",A87(AS0),"K",A86(ALc)],Xr,0,B,[W],0,3,0,0,["g",A87(A1b)],WK,0,B,[W],0,3,0,0,["g",A87(A6i)],Pg,0,B,[W],0,3,0,0,["g",A87(A4S)],FT,0,B,[],0,0,0,0,0,ABu,0,FT,[Fq],0,0,0,0,0,Uj,0,FT,[Fq],0,0,0,0,0,AAr,0,FT,[Fq],0,0,0,0,0,AFL,0,B,[W],0,0,0,
0,0,AAp,0,B,[CZ],4,3,0,0,0,AA1,0,B,[W],0,3,0,0,["g",A87(ASi)],AA0,0,B,[W],0,3,0,0,["g",A87(A2Y)],Yw,0,B,[W],0,3,0,0,["g",A87(AYU)],H$,0,B,[],3,3,0,0,0,TX,0,B,[H$],0,3,0,0,["ma",A89(A1A)],TY,0,B,[H$],0,3,0,0,["ma",A89(A0c)],Jb,0,B,[CZ,CG],0,3,0,0,0,K$,0,B,[],3,3,0,0,0,Sz,0,B,[K$],0,3,0,0,0]);
$rt_metadata([Nr,0,B,[K$],3,3,0,0,0,AGX,0,B,[Nr],0,3,0,0,0,SY,0,B,[H$],0,3,0,0,["ma",A89(A17)],SX,0,B,[Ds],0,3,0,0,["G",A87(AVY)],SW,0,B,[Ds],0,3,0,0,["G",A87(ATV)],S0,0,B,[H$],0,3,0,0,["ma",A89(A1G)],BV,0,B,[],1,0,0,0,["cy",A89(IY),"cK",A8$(I7),"jd",A86(AYi),"K",A86(AUe),"V",A87(AVo),"b6",A87(A4A),"gQ",A86(A5q),"e0",A86(KQ)],Ro,0,B,[W],0,3,0,0,["g",A87(A0u)],ABp,0,B,[W],0,3,0,0,["g",A87(ARi)],AE4,0,B,[W],0,3,0,0,["g",A87(A34)],AE3,0,B,[W],0,3,0,0,["g",A87(AOG)],IL,0,B,[],3,3,0,0,0,ACT,0,B,[IL],0,3,0,0,["n9",
A87(A3Z),"pe",A87(ASK),"oV",A86(AY$)],SU,0,B,[W],0,3,0,0,0,WL,0,B,[W],0,3,0,0,["g",A87(A2a)],WM,0,B,[W],0,3,0,0,["g",A87(APV)],Sd,0,B,[U],0,3,0,0,["e",A86(AZU)],Yv,0,B,[W],0,3,0,0,["g",A87(ASu)],ABK,0,B,[U],0,3,0,0,["e",A86(ANT)],C5,"FSet",2,BV,[],0,0,[0,0,0],OY,["c",A89(ANS),"t",A86(AQy),"M",A87(AN$)],Hi,0,B,[],0,0,0,0,0,Kz,0,BX,[],0,3,0,0,0,FO,0,B,[U],0,3,0,AIV,0,Yt,0,B,[W],0,3,0,0,["g",A87(AUn)],Sy,"NonCapFSet",2,C5,[],0,0,[0,0,0],0,["c",A89(AXp),"t",A86(AYS),"M",A87(A3v)],AEY,"AheadFSet",2,C5,[],0,0,[0,0,0],
0,["c",A89(AYJ),"t",A86(A0J)],Rl,"BehindFSet",2,C5,[],0,0,[0,0,0],0,["c",A89(AOd),"t",A86(A4t)],To,"AtomicFSet",2,C5,[],0,0,[0,0,0],0,["c",A89(AXt),"t",A86(AUJ),"M",A87(A2v)],Gh,"FinalSet",2,C5,[],0,0,[0,0,0],0,["c",A89(AVB),"t",A86(AYs)],Ce,0,BV,[],1,0,0,0,["c",A89(A50),"cd",A86(A4b),"M",A87(AQ1)],AIf,"EmptySet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(A3N),"cy",A89(AZz),"cK",A8$(AYG),"t",A86(AQz),"M",A87(AXs)],B$,"JointSet",2,BV,[],0,0,[0,0,0],0,["c",A89(AQg),"V",A87(ATk),"t",A86(AQ$),"b6",A87(A0$),"M",A87(ATQ),"e0",
A86(AOz)],KK,"NonCapJointSet",2,B$,[],0,0,[0,0,0],0,["c",A89(AS9),"t",A86(ART),"M",A87(A2$)],Ef,"AtomicJointSet",2,KK,[],0,0,[0,0,0],0,["c",A89(AY4),"V",A87(A23),"t",A86(ANp)],W$,"PositiveLookAhead",2,Ef,[],0,0,[0,0,0],0,["c",A89(ATi),"M",A87(AVt),"t",A86(A5l)],ADK,"NegativeLookAhead",2,Ef,[],0,0,[0,0,0],0,["c",A89(AN7),"M",A87(A4f),"t",A86(AQb)],AAs,"PositiveLookBehind",2,Ef,[],0,0,[0,0,0],0,["c",A89(AOx),"M",A87(A6e),"t",A86(ASY)],TQ,"NegativeLookBehind",2,Ef,[],0,0,[0,0,0],0,["c",A89(AW5),"M",A87(A3l),"t",
A86(AOf)],H5,"SingleSet",2,B$,[],0,0,[0,0,0],0,["c",A89(ANg),"cy",A89(ARY),"cK",A8$(A3x),"b6",A87(A08),"gQ",A86(A2r),"e0",A86(AV6)],Hk,0,B,[],1,0,0,0,0,Z,0,Hk,[],1,0,0,QE,["d3",A86(AX3),"f1",A86(AXF),"mi",A86(A38),"iD",A86(A5k)],AFZ,0,Z,[],0,0,0,0,["o",A87(Dd),"d3",A86(C9),"f1",A86(AZv),"mi",A86(AVe),"K",A86(A1K),"iD",A86(APQ)],M6,0,Bt,[],0,3,0,0,0,Es,0,BV,[],1,0,0,0,["b6",A87(AUt),"M",A87(A4I),"e0",A86(ASe)],Df,"LeafQuantifierSet",2,Es,[],0,0,[0,0,0],0,["c",A89(AW6),"t",A86(AYA)],F4,"CompositeQuantifierSet",
2,Df,[],0,0,[0,0,0],0,["c",A89(AXP),"t",A86(AX5)],C6,"GroupQuantifierSet",2,Es,[],0,0,[0,0,0],0,["c",A89(AXi),"t",A86(A0r)],Fe,"AltQuantifierSet",2,Df,[],0,0,[0,0,0],0,["c",A89(A1k),"V",A87(AWL)],VR,"UnifiedQuantifierSet",2,Df,[],0,0,[0,0,0],0,["c",A89(A5U),"cy",A89(ASF)],PF,0,B,[],3,3,0,0,0]);
$rt_metadata([SL,0,B,[PF],0,3,0,0,0,Bg,0,B,[],1,0,0,0,0,Dy,0,BX,[],0,3,0,0,0,Xk,0,Hk,[Eb],0,0,0,0,["K",A86(AB6)],Yr,"FSet$PossessiveFSet",2,BV,[],0,0,[C5,0,0],0,["c",A89(ARj),"t",A86(A2l),"M",A87(A2p)],AEm,0,B,[Eb,CZ],0,3,0,0,0,Pm,0,B$,[],0,0,0,0,["t",A86(A2w)],RN,"CompositeRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A89(ANP),"V",A87(A2g),"t",A86(A2H),"M",A87(AOj),"b6",A87(AN9)],D$,"SupplRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A89(AZp),"t",A86(A5e),"o",A87(AP2),"b6",A87(ANK),"V",A87(A31),"M",A87(APG)],M3,"UCISupplRangeSet",
2,D$,[],0,0,[0,0,0],0,["o",A87(AQ2),"t",A86(AV_)],AFT,"UCIRangeSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(A0V),"t",A86(AX$)],EM,"RangeSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(W0),"t",A86(ARo),"b6",A87(ATm)],YM,"HangulDecomposedCharSet",2,B$,[],0,0,[0,0,0],0,["V",A87(AR4),"t",A86(AUm),"c",A89(AMZ),"b6",A87(AYb),"M",A87(AVj)],EU,"CharSet",2,Ce,[],0,0,[0,0,0],0,["cd",A86(A0K),"bC",A88(AQq),"cy",A89(APs),"cK",A8$(ARe),"t",A86(AVv),"b6",A87(AVb)],AIC,"UCICharSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(AWU),"t",A86(A2f)],AFf,"CICharSet",
2,Ce,[],0,0,[0,0,0],0,["bC",A88(AM$),"t",A86(AQE)],F8,"DecomposedCharSet",2,B$,[],0,0,[0,0,0],0,["V",A87(A5t),"c",A89(AS8),"t",A86(A18),"b6",A87(ARk),"M",A87(A24)],Wk,"UCIDecomposedCharSet",2,F8,[],0,0,[0,0,0],0,0,ACk,"CIDecomposedCharSet",2,F8,[],0,0,[0,0,0],0,0,WW,"PossessiveGroupQuantifierSet",2,C6,[],0,0,[0,0,0],0,["c",A89(AYO)],Zl,"PosPlusGroupQuantifierSet",2,C6,[],0,0,[0,0,0],0,["c",A89(A1C)],GT,"AltGroupQuantifierSet",2,C6,[],0,0,[0,0,0],0,["c",A89(A3X),"V",A87(A4V)],Q3,"PosAltGroupQuantifierSet",2,
GT,[],0,0,[0,0,0],0,["c",A89(ARa),"V",A87(A1U)],GA,"CompositeGroupQuantifierSet",2,C6,[],0,0,[0,0,0],0,["c",A89(A6b),"t",A86(AVH)],PC,"PosCompositeGroupQuantifierSet",2,GA,[],0,0,[0,0,0],0,["c",A89(AQJ)],Ss,"ReluctantGroupQuantifierSet",2,C6,[],0,0,[0,0,0],0,["c",A89(AWa)],Z1,"RelAltGroupQuantifierSet",2,GT,[],0,0,[0,0,0],0,["c",A89(AOk)],Uu,"RelCompositeGroupQuantifierSet",2,GA,[],0,0,[0,0,0],0,["c",A89(AXy)],St,"DotAllQuantifierSet",2,Es,[],0,0,[0,0,0],0,["c",A89(A52),"cy",A89(AUV),"t",A86(A2M)],Yx,"DotQuantifierSet",
2,Es,[],0,0,[0,0,0],0,["c",A89(ATn),"cy",A89(AM0),"t",A86(A3r)],FL,0,B,[],1,0,0,0,0,AFc,"PossessiveQuantifierSet",2,Df,[],0,0,[0,0,0],0,["c",A89(ANA)],VL,"PossessiveAltQuantifierSet",2,Fe,[],0,0,[0,0,0],0,["c",A89(ASt)],YX,"PossessiveCompositeQuantifierSet",2,F4,[],0,0,[0,0,0],0,["c",A89(A3A)],Z0,"ReluctantQuantifierSet",2,Df,[],0,0,[0,0,0],0,["c",A89(ATj)],ACv,"ReluctantAltQuantifierSet",2,Fe,[],0,0,[0,0,0],0,["c",A89(ANI)],Sk,"ReluctantCompositeQuantifierSet",2,F4,[],0,0,[0,0,0],0,["c",A89(A3P)],LA,"SOLSet",
2,BV,[],4,0,[0,0,0],0,["c",A89(A09),"M",A87(A0B),"t",A86(ASv)],AGc,"WordBoundary",2,BV,[],0,0,[0,0,0],0,["c",A89(AX1),"M",A87(AX_),"t",A86(A5_)],Yu,"PreviousMatch",2,BV,[],0,0,[0,0,0],0,["c",A89(AQ4),"M",A87(AWC),"t",A86(AXR)],Wg,"EOLSet",2,BV,[],4,0,[0,0,0],0,["c",A89(A2Q),"M",A87(AYH),"t",A86(A1l)],AD8,"EOISet",2,BV,[],0,0,[0,0,0],0,["c",A89(A2d),"M",A87(AWT),"t",A86(AQf)],XD,"MultiLineSOLSet",2,BV,[],0,0,[0,0,0],0,["c",A89(AYC),"M",A87(AP9),"t",A86(AXL)],AIo,"DotAllSet",2,B$,[],0,0,[0,0,0],0,["c",A89(AWe),
"t",A86(AO9),"V",A87(AYd),"jd",A86(A10),"M",A87(AYc)],AFY,"DotSet",2,B$,[],4,0,[0,0,0],0,["c",A89(A19),"t",A86(AYN),"V",A87(A3q),"jd",A86(AMM),"M",A87(AWs)],AMc,"UEOLSet",2,BV,[],4,0,[0,0,0],0,["c",A89(ARn),"M",A87(AZQ),"t",A86(ARI)],AK_,"UMultiLineEOLSet",2,BV,[],0,0,[0,0,0],0,["c",A89(AS1),"M",A87(AZK),"t",A86(ANn)],AJb,"MultiLineEOLSet",2,BV,[],0,0,[0,0,0],0,["c",A89(A0w),"M",A87(AOF),"t",A86(AP$)],Ir,"CIBackReferenceSet",2,B$,[],0,0,[0,0,0],0,["c",A89(AND),"V",A87(A20),"t",A86(AXq),"M",A87(AT9)],AMi,"BackReferenceSet",
2,Ir,[],0,0,[0,0,0],0,["c",A89(AOK),"cy",A89(AVr),"cK",A8$(ANo),"b6",A87(A1x),"t",A86(A4U)]]);
$rt_metadata([AKs,"UCIBackReferenceSet",2,Ir,[],0,0,[0,0,0],0,["c",A89(ARU),"t",A86(AYa)],Qm,0,G7,[J2],0,3,0,0,["qf",A8$(APT),"pF",A89(AX4),"ki",A87(AYr),"qx",A88(A4a)],AAG,"SequenceSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(AO2),"cy",A89(AXZ),"cK",A8$(AZV),"t",A86(ATe),"b6",A87(AQw)],AFe,"UCISequenceSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(ARZ),"t",A86(AQF)],PG,"CISequenceSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(A3B),"t",A86(A4s)],Hu,0,B,[],4,0,0,AUi,0,W5,"UCISupplCharSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(AUz),"t",A86(A5$)],N_,
"LowSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["V",A87(A2m),"c",A89(AYI),"cy",A89(AQu),"cK",A8$(AY8),"t",A86(AUY),"b6",A87(ANl),"M",A87(AU5)],Of,"HighSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["V",A87(AYq),"c",A89(AM5),"cy",A89(A2A),"cK",A8$(AUu),"t",A86(A5D),"b6",A87(AO3),"M",A87(A2J)],Em,"SupplCharSet",2,Ce,[],0,0,[0,0,0],0,["bC",A88(A3a),"cy",A89(A1L),"cK",A8$(AOo),"t",A86(A4W),"b6",A87(A26)],ADk,0,FL,[],0,0,0,0,["i5",A87(AOs),"A9",A88(AT4)],ADl,0,FL,[],0,0,0,0,["i5",A87(A3Q),"A9",A88(AV0)],AHN,0,B,[],0,0,0,
0,0,AFs,0,B,[],0,0,0,0,0,N9,0,Bg,[],0,0,0,0,["J",A86(AKA)],Nz,0,Bg,[],0,0,0,0,["J",A86(AK7)],AHH,0,Bg,[],0,0,0,0,["J",A86(A3u)],AH3,0,Bg,[],0,0,0,0,["J",A86(AU8)],AH5,0,Bg,[],0,0,0,0,["J",A86(APx)],N5,0,Bg,[],0,0,0,0,["J",A86(AF1)],L7,0,N5,[],0,0,0,0,["J",A86(AGu)],AI4,0,Bg,[],0,0,0,0,["J",A86(AZ_)],O4,0,L7,[],0,0,0,0,["J",A86(AI_)],AKM,0,O4,[],0,0,0,0,["J",A86(ASh)],AG0,0,Bg,[],0,0,0,0,["J",A86(AYX)],AF$,0,Bg,[],0,0,0,0,["J",A86(ASc)],AJ0,0,Bg,[],0,0,0,0,["J",A86(AV4)],AL1,0,Bg,[],0,0,0,0,["J",A86(A1X)],AI7,
0,Bg,[],0,0,0,0,["J",A86(AWY)],ALI,0,Bg,[],0,0,0,0,["J",A86(AQO)],AHz,0,Bg,[],0,0,0,0,["J",A86(AUd)],AIg,0,Bg,[],0,0,0,0,["J",A86(AYV)],AFE,0,Bg,[],0,0,0,0,["J",A86(APc)],AJi,0,Bg,[],0,0,0,0,["J",A86(A5d)],ALO,0,Bg,[],0,0,0,0,["J",A86(AWV)],AHY,0,Bg,[],0,0,0,0,["J",A86(ARp)],AKi,0,Bg,[],0,0,0,0,["J",A86(APj)],AG2,0,Bg,[],0,0,0,0,["J",A86(AZW)],AIN,0,Bg,[],0,0,0,0,["J",A86(A04)],ALT,0,Bg,[],0,0,0,0,["J",A86(AVk)],AGF,0,Bg,[],0,0,0,0,["J",A86(ATJ)],AGk,0,Bg,[],0,0,0,0,["J",A86(ASJ)],AI5,0,Bg,[],0,0,0,0,["J",A86(A3n)],KX,
0,Bg,[],0,0,0,0,["J",A86(AG1)],AL$,0,KX,[],0,0,0,0,["J",A86(ASA)],AKR,0,N9,[],0,0,0,0,["J",A86(AXW)],AGi,0,Nz,[],0,0,0,0,["J",A86(AQn)],AJ3,0,Bg,[],0,0,0,0,["J",A86(ARE)],AKc,0,Bg,[],0,0,0,0,["J",A86(AVO)],AKF,0,Bg,[],0,0,0,0,["J",A86(AZH)]]);
$rt_metadata([AKN,0,Bg,[],0,0,0,0,["J",A86(AMR)],AJ6,0,B,[],4,0,0,0,0,AFR,0,B,[],4,3,0,0,0,XG,"UnicodeHelper$Range",8,B,[],0,3,[AFR,0,"Range"],0,0,AHS,0,B,[],0,3,0,0,0,AKq,0,B,[],4,3,0,0,0,MS,0,Bt,[],0,3,0,0,0,ADM,0,B,[W],0,3,0,0,["g",A87(AMT)],ADL,0,B,[W],0,3,0,0,["g",A87(AVl)],AJU,0,B,[Ds],0,3,0,0,0,S6,0,B,[W],0,3,0,0,["g",A87(AZP)],ADf,0,B,[Ds],0,0,0,0,["G",A87(APB)],ACD,0,B,[U],0,3,0,0,["e",A86(A4i)],ACH,0,B,[W],0,3,0,0,["g",A87(AZr)],ACJ,0,B,[W],0,3,0,0,["g",A87(A4Z)],P$,0,B,[IL],0,0,0,0,["n9",A87(A22),
"pe",A87(A0i),"oV",A86(AUA)],AEy,0,B,[Cg],0,3,0,0,["bl",A87(AVy)],AEx,0,B,[Cg],0,3,0,0,["bl",A87(ASl)],ADr,0,B,[Cg],0,0,0,0,["bl",A87(ATR)],VQ,0,Z,[],0,0,0,0,["o",A87(APD)],VN,0,Z,[],0,0,0,0,["o",A87(AXh)],Qx,0,Z,[],0,0,0,0,["o",A87(ARv),"K",A86(AZY)],YD,0,Z,[],0,0,0,0,["o",A87(A3d)],YB,0,Z,[],0,0,0,0,["o",A87(AUy)],YC,0,Z,[],0,0,0,0,["o",A87(A1h)],YG,0,Z,[],0,0,0,0,["o",A87(AZe)],YI,0,Z,[],0,0,0,0,["o",A87(AMN)],YE,0,Z,[],0,0,0,0,["o",A87(AQi)],YF,0,Z,[],0,0,0,0,["o",A87(AR3)],YJ,0,Z,[],0,0,0,0,["o",A87(AVu)],YK,
0,Z,[],0,0,0,0,["o",A87(AYQ)],Qw,0,Z,[],0,0,0,0,["o",A87(A6m)],QQ,0,Z,[],0,0,0,0,["o",A87(AQl)],Qu,0,Z,[],0,0,0,0,["o",A87(AOP)],Qv,0,Z,[],0,0,0,0,["o",A87(AZN)],QA,0,Z,[],0,0,0,0,["o",A87(AQ6)],Qt,0,Z,[],0,0,0,0,["o",A87(A4m)],Qy,0,Z,[],0,0,0,0,["o",A87(AX6)],Qz,0,Z,[],0,0,0,0,["o",A87(ATB)],AAo,0,B,[BE],0,3,0,0,0,AK5,0,B,[],4,3,0,0,0,Mx,0,B,[],3,3,0,0,0,ABc,0,B,[Mx],4,3,0,0,0,RS,0,B,[U],0,3,0,0,["e",A86(A2W)],RQ,0,B,[U],0,3,0,0,["e",A86(AQd)],RR,0,B,[U],0,3,0,0,["e",A86(AVE)],RU,0,B,[U],0,3,0,0,["e",A86(AM8)],S3,
0,B,[U],0,3,0,0,["e",A86(AU_)],S2,0,B,[U],0,3,0,0,["e",A86(A1m)],S1,0,B,[U],0,3,0,0,["e",A86(A2P)]]);
$rt_metadata([Sc,0,B,[U],0,3,0,0,["e",A86(AWF)],RC,0,B,[],3,3,0,0,0,AKy,0,B,[U],0,3,0,0,["e",A86(A5O)],AKT,0,B,[Gn],0,3,0,0,0,Tt,0,B,[Cg],0,3,0,0,["bl",A87(A30)],ACb,0,B,[Gn],0,3,0,0,0,ALq,0,B,[Nr],0,3,0,0,0,ALr,0,B,[CV],0,3,0,0,0,ALp,0,B,[BE],0,3,0,0,0,EA,0,CD,[],12,3,0,AYo,0,Yn,0,B,[],3,3,0,0,0,QV,0,B,[U],0,3,0,0,["e",A86(ATx)],QT,0,B,[U],0,3,0,0,["e",A86(AZI)],QU,0,B,[U],0,3,0,0,["e",A86(A5f)],UM,0,B,[U],0,3,0,0,["e",A86(A28)],UO,0,B,[U],0,3,0,0,["e",A86(ASE)],ZX,0,B,[CV],0,3,0,0,["ct",A86(A4d)],AAw,0,B,
[U],0,3,0,0,["e",A86(ANE)],AAu,0,B,[U],0,3,0,0,["e",A86(AO1)],Tv,0,B,[U],0,3,0,0,["e",A86(AVX)],Tw,0,B,[U],0,3,0,0,["e",A86(ANC)],Tx,0,B,[U],0,3,0,0,["e",A86(AOT)],Ty,0,B,[U],0,3,0,0,["e",A86(AVI)],TO,0,B,[U],0,3,0,0,["e",A86(A1s)],AHi,0,B,[CV],0,3,0,0,["ct",A86(A5Q)],ADB,0,B,[],0,3,0,0,0,O0,0,Ez,[Eb,CZ],1,3,0,0,["fs",A87(AWR),"p7",A87(A0N)],AHa,0,B,[Yn],0,0,0,0,0,Uh,0,B,[Ib],0,3,0,0,0,OV,0,O0,[],0,0,0,0,["fs",A87(AWR),"p7",A87(A0N),"p$",A87(A3k)],PJ,0,Ex,[Jo],0,0,0,0,["fs",A87(AWR),"p7",A87(A0N),"iY",A87(AWQ),
"cZ",A86(AS2)],AB3,0,DG,[CG],0,3,0,0,0,Py,"BackReferencedSingleSet",2,H5,[],0,0,[0,0,0],0,["cy",A89(APX),"cK",A8$(A6a),"gQ",A86(AOC)],RI,0,Bt,[],0,3,0,0,0,Wi,0,Bt,[],0,3,0,0,0,UQ,0,Gs,[],0,3,0,0,0,RB,0,Gs,[],0,3,0,0,0,VY,0,B,[Cg],0,3,0,0,["bl",A87(ATC)],VZ,0,B,[Cg],0,3,0,0,["bl",A87(ATX)],AC_,0,B,[],0,3,0,0,0,AFQ,0,B,[],3,3,0,0,0,Vr,0,B,[U],0,3,0,0,["e",A86(AWt)],Vs,0,B,[Fr],0,3,0,0,["hg",A87(AUx)],LF,0,FY,[],1,3,0,0,0,R_,0,LF,[],0,3,0,0,0,Yo,0,B,[U],0,3,0,0,0,ADd,0,B,[Mx],0,0,0,0,0,RT,0,B,[W],0,3,0,0,["g",
A87(A2x)],ADs,0,B,[U],0,3,0,0,["e",A86(AZ5)],AAi,0,B,[U],0,3,0,0,["e",A86(AR8)]]);
$rt_metadata([AAh,0,B,[U],0,3,0,0,["e",A86(A2o)],AAP,0,B,[U],0,3,0,0,["e",A86(ATY)],Q5,0,B,[Fr],0,3,0,0,["hg",A87(AW$)],GY,0,CD,[],12,0,0,Td,0,AD6,0,B,[W],0,3,0,0,["g",A87(AP8)],T$,0,B,[W],0,3,0,0,["g",A87(A1M)],Rr,0,B,[U],0,3,0,0,["e",A86(AZ4)],ACd,0,B,[],32,0,0,A8m,0,Sh,0,B,[W],0,3,0,0,["g",A87(ANQ)],Sr,0,B,[W],0,3,0,0,["g",A87(APZ)],Pb,0,B,[U],0,3,0,0,["e",A86(A0p)],VV,0,B,[Ds],0,3,0,0,0,ABN,0,Z,[],0,0,0,0,["o",A87(AVA)],Xb,0,Z,[],0,0,0,0,["o",A87(AXU)],SH,0,Z,[],0,0,0,0,["o",A87(ANH)],SG,0,Z,[],0,0,0,0,
["o",A87(AZF)],V5,0,Z,[],0,0,0,0,["o",A87(AQV)],YU,0,Z,[],0,0,0,0,["o",A87(A4R)],Qj,0,Z,[],0,0,0,0,["o",A87(ATd)],AAc,0,Z,[],0,0,0,0,["o",A87(AUh)],W9,0,Z,[],0,0,0,0,["o",A87(A5W)],W_,0,Z,[],0,0,0,0,["o",A87(AO5)],P0,0,Z,[],0,0,0,0,["o",A87(AVK)],Y_,0,Z,[],0,0,0,0,["o",A87(A1q)],Ze,0,Z,[],0,0,0,0,["o",A87(A2Z)],ACe,0,Z,[],0,0,0,0,["o",A87(A4E)],ABd,0,Z,[],0,0,0,0,["o",A87(AV9)],Pq,0,Z,[],0,0,0,0,["o",A87(AOX)],MH,0,Z,[],0,0,0,0,["o",A87(ATf)],AAN,0,MH,[],0,0,0,0,["o",A87(A32)],AEH,0,B,[BW],3,3,0,0,0,ZC,0,B,
[AEH],0,3,0,0,["Jr",A86(ARL)],AHh,0,B,[BW],3,3,0,0,0,SI,0,B,[W],0,3,0,0,["g",A87(A4j)],QZ,0,B,[JX],0,3,0,0,["qH",A86(APq),"oP",A86(AM3),"oh",A87(AUN),"kX",A87(AS5)],AB9,0,B,[W],0,3,0,0,0,AC1,0,B,[W],0,3,0,0,0,Rx,0,B,[W],0,3,0,0,["g",A87(AOL)],Dc,0,B,[],3,3,0,AH7,0,CC,0,CD,[],12,3,0,AHt,0,D8,0,B,[],3,3,0,AXw,0,IB,"DirectoryNode",25,C$,[],0,3,[0,0,0],0,["K",A86(AVQ)],AAZ,0,B,[Lh],0,0,0,0,["r6",A88(AN5),"Ao",A87(ARt),"ya",A87(AWE),"vC",A87(AWM)],KW,"FileNode",25,C$,[],0,3,[0,0,0],0,["K",A86(AOR)],AEI,0,B,[W],0,
3,0,0,["g",A87(A3e)],Sx,0,B,[U],0,3,0,0,["e",A86(AS7)],ABX,0,B,[U],0,3,0,0,["e",A86(A0M)],TM,0,B,[Ds],0,3,0,0,["G",A87(AN1)],ABL,0,B,[IL],0,0,0,0,["n9",A87(A4x),"pe",A87(AVs),"oV",A86(A4T)],AJH,0,B,[],0,0,0,0,0]);
$rt_metadata([Sj,0,B,[U],0,3,0,0,["e",A86(A5h)],RM,0,B,[U],0,3,0,0,["e",A86(ANU)],AFa,0,B,[U],0,3,0,0,["e",A86(A0L)],Q8,0,B,[W],0,3,0,0,["g",A87(AZ1)],Q9,0,B,[W],0,3,0,0,["g",A87(A5X)]]);
function $rt_array(cls,data){this.Ye=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","[]","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument sent to worker ","keydown","keyup","mousemove",
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
"ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FolderTransferDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas","#e3c8ab","#39322b",
"hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll",
"activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize",", z = ",", w = ","(this Collection)","JsArrayView{ buffer.byteLength = "," }"," -"," bold"," italic","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570",
"#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","","codicon.pixel.size = ",
"w = ","Window 1","Window ","- to worker ","- to edt ","folder","file","objects[","] = ","Select left...","Select right...","Project root","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new folder diff window","new file diff window","new project view","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ",
"WorkerTest: \n  got ","  methodWithStringResult = ","charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ",
"/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","Open project...","Project view","Open project ...","request new model, file = ","request in progress ","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Go to Declaration","Go to Definition","Go to References",
"Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","No definition or usages"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","openFile: ","dir = ","asyncWithDir","openFileEdt: ","dir on edt = ","Thread.currentThread() = ","Unexpected type: ","Unexpected ref node type: ",
"dir[",", list.size = ","file[","asyncWithDir complete, size = ","fSet","Is","In","main","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch",
"<EOL>","EOI","^","DotAll","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","file = ","file.content.length = ","  sub dir: ","  file: ","complete","readClipboardText error: ","CONCURRENT","UNORDERED","IDENTITY_FINISH","Current Version: ",
"Last Parsed Version: ","openDirectory: "," - project view","DEF","DECL","open dir = "," ↔ ","writeClipboardText error: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","opening file ... ","folderOpened ","readDirectory: ","Error fetching file "]);
BB.prototype.toString=function(){return $rt_ustr(this);};
BB.prototype.valueOf=BB.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AFS(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CW=Long_add;var J6=Long_sub;var Ck=Long_mul;var AHR=Long_div;var AXb=Long_rem;var A6I=Long_or;var Di=Long_and;var Bbb=Long_xor;var H3=Long_shl;var A77=Long_shr;var Gq=Long_shru;var Bbc=Long_compare;var I1=Long_eq;var Bbd=Long_ne;var A6F=Long_lt;var APn=Long_le;var Bbe=Long_gt;var A6E=Long_ge;var Bbf=Long_not;var A8g=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A8h);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ACm.prototype;c.f=c.bl;c=ACn.prototype;c.f=c.bl;c=ACl.prototype;c.f=c.bl;c=Xu.prototype;c.f=c.bl;c=AKQ.prototype;c.get=c.My;Object.defineProperty(c,"length",{get:c.S$});c=AJs.prototype;c.createEntityReference=c.Pf;c.getElementById=c.RA;c.createTextNode=c.Ri;c.hasChildNodes=c.Qj;c.querySelectorAll=c.OY;c.removeChild=c.SW;c.cloneNode=c.Hb;c.createComment=c.T9;c.insertBefore=c.Pz;c.getElementsByTagNameNS=c.S8;c.hasAttributes=c.JS;c.normalize=c.M9;c.hasChildNodesJS=c.M1;c.getElementsByTagName
=c.Mx;c.appendChild=c.N4;c.createAttributeNS=c.RU;c.dispatchEvent=c.MN;c.replaceChild=c.HG;c.createElementNS=c.IO;c.createCDATASection=c.LO;c.querySelector=c.JR;c.createElement=c.Sq;c.isSupported=c.S0;c.importNode=c.PJ;c.removeEventListener=c.IK;c.createAttribute=c.MO;c.createDocumentFragment=c.Gx;c.createProcessingInstruction=c.O_;c.addEventListener=c.K7;Object.defineProperty(c,"nodeName",{get:c.N3});Object.defineProperty(c,"documentElement",{get:c.Jw});Object.defineProperty(c,"childNodes",{get:c.Lw});Object.defineProperty(c,
"prefix",{get:c.PP,set:c.Ui});Object.defineProperty(c,"implementation",{get:c.L_});Object.defineProperty(c,"textContent",{get:c.Uc,set:c.Rf});Object.defineProperty(c,"parentNode",{get:c.Rx});Object.defineProperty(c,"nextSibling",{get:c.Jl});Object.defineProperty(c,"nodeType",{get:c.SF});Object.defineProperty(c,"doctype",{get:c.Qz});Object.defineProperty(c,"localName",{get:c.Tq});Object.defineProperty(c,"nodeValue",{get:c.I5,set:c.TZ});Object.defineProperty(c,"firstChild",{get:c.MH});Object.defineProperty(c,
"lastChild",{get:c.Ld});Object.defineProperty(c,"previousSibling",{get:c.NQ});Object.defineProperty(c,"namespaceURI",{get:c.HZ});Object.defineProperty(c,"attributes",{get:c.PW});Object.defineProperty(c,"ownerDocument",{get:c.H5});c=P1.prototype;c.f=c.bl;c=AJX.prototype;c.removeEventListener=c.H7;c.dispatchEvent=c.PE;c.addEventListener=c.KF;c=U6.prototype;c.onAnimationFrame=c.JU;c=U5.prototype;c.f=c.Cw;c=U3.prototype;c.handleEvent=c.cD;c=AA_.prototype;c.f=c.bl;c=ADT.prototype;c.handleEvent=c.cD;c=ADU.prototype;c.handleEvent
=c.cD;c=ADV.prototype;c.handleEvent=c.cD;c=ADW.prototype;c.handleEvent=c.cD;c=ADX.prototype;c.handleEvent=c.cD;c=ADY.prototype;c.handleEvent=c.cD;c=ADZ.prototype;c.handleEvent=c.cD;c=AD0.prototype;c.handleEvent=c.cD;c=AD1.prototype;c.handleEvent=c.cD;c=AD2.prototype;c.handleEvent=c.cD;c=WD.prototype;c.handleEvent=c.cD;c=WE.prototype;c.handleEvent=c.cD;c=WF.prototype;c.handleEvent=c.cD;c=WG.prototype;c.handleEvent=c.cD;c=ACR.prototype;c.handleEvent=c.cD;c=AES.prototype;c.f=c.bl;c=AET.prototype;c.f=c.bl;c=XC.prototype;c.f
=c.bl;c=XB.prototype;c.f=c.bl;c=Xz.prototype;c.f=c.bl;c=Xy.prototype;c.f=c.bl;c=PU.prototype;c.accept=c.MU;c=Vv.prototype;c.f=c.bl;c=Pj.prototype;c.f=c.bl;c=Pl.prototype;c.f=c.bl;c=Pk.prototype;c.f=c.bl;c=Y2.prototype;c.f=c.Cw;c=Y0.prototype;c.f=c.Cw;c=AA3.prototype;c.f=c.bl;c=ADy.prototype;c.f=c.bl;c=Pi.prototype;c.f=c.bl;c=AEM.prototype;c.f=c.bl;c=AEL.prototype;c.f=c.bl;c=AD$.prototype;c.f=c.bl;c=T_.prototype;c.handleEvent=c.cD;c=AEy.prototype;c.f=c.bl;c=AEx.prototype;c.f=c.bl;c=ADr.prototype;c.f=c.bl;c=Tt.prototype;c.f
=c.bl;c=VY.prototype;c.f=c.bl;c=VZ.prototype;c.f=c.bl;c=ZC.prototype;c.onTimer=c.Jr;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);