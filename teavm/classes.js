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
function $rt_cls(cls){return AGu(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gt(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b5.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AVw(t);}
function $rt_throwableCause(t){return AVD(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A2t());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A2u(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A2v());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BI=$rt_compare;var A2w=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var JA=$rt_isInstance;var A2x=$rt_nativeThread;var A2y=$rt_suspending;var A2z=$rt_resuming;var A2A=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var Bb=$rt_imul;var EA=$rt_wrapException;var A2B=$rt_checkBounds;var A2C=$rt_checkUpperBound;var A2D=$rt_checkLowerBound;var A2E=$rt_wrapFunction0;var A2F=$rt_wrapFunction1;var A2G=$rt_wrapFunction2;var A2H=$rt_wrapFunction3;var A2I=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AFf=$rt_createCharArrayFromData;var A07=$rt_createByteArrayFromData;var A2o=$rt_createShortArrayFromData;var DD=$rt_createIntArrayFromData;var A2J=$rt_createBooleanArrayFromData;var A2K=$rt_createFloatArrayFromData;var A2L=$rt_createDoubleArrayFromData;var ADO=$rt_createLongArrayFromData;var A2r=$rt_createBooleanArray;var DE=$rt_createByteArray;var A2M=$rt_createShortArray;var B1=$rt_createCharArray;var BK=$rt_createIntArray;var A2N=$rt_createLongArray;var AJH=$rt_createFloatArray;var A2O
=$rt_createDoubleArray;var BI=$rt_compare;var A2P=$rt_castToClass;var A2Q=$rt_castToInterface;var A2R=Long_toNumber;var Bp=Long_fromInt;var A2S=Long_fromNumber;var D=Long_create;var Fq=Long_ZERO;var A2T=Long_hi;var GN=Long_lo;
function B(){this.$id$=0;}
function BJ(a){return AGu(a.constructor);}
function ARP(a,b){return a!==b?0:1;}
function ALV(a){var b,c,d,e,f,g,h,i,j;b=J4(a);if(!b)c=C(0);else{d=(((32-PN(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HZ((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gt(e);}j=new L;N(j);H(H(j,C(1)),c);return M(j);}
function J4(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AQ2(a){var b,c,d;if(!JA(a,Em)&&a.constructor.$meta.item===null){b=new YU;X(b);K(b);}b=AJQ(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Uo(){var a=this;B.call(a);a.zs=0;a.pD=null;}
function A1l(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AHM();AC2();AFQ();AG2();AJf();AEw();AF2();ACU();AEX();AIp();ACZ();AHO();AGv();AGJ();AGL();AFx();AEE();AE1();AId();AF5();ADZ();AE3();AG8();AGT();AGa();ADr();AI0();c=(ADe()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Rz(C(2),C(3));else{d=new Uo;BL(d);e=new WW;e.wR=d;f=new O2;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new PU;j.s8=i;j.s9=g;j.s$=3;j.s_
=e;j.s3=f;k=Bl(j,"f");i.onmessage=k;h=h+1|0;}l=I(MX,[E2(C(4),C(5),300),E2(C(6),C(7),300),E2(C(8),C(5),400),E2(C(9),C(7),400),E2(C(10),C(5),600),E2(C(11),C(7),600),E2(C(12),C(5),700),E2(C(13),C(7),700)]);m=Q(MX,1);m.data[0]=AWB(C(14),FP(C(15),C(16)),C(5),400);b=(MT(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.we;f=c.u2;i=new L;N(i);BM(H(H(i,C(17)),f),41);i=M(i);f=c.uX;o=c.sO;c=AOA($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);BL(d);c
=new WX;c.ya=d;g=new WV;e.then(Bl(c,"f"),Bl(g,"f"));}}
function AHa(b){var c,d,e,f,g,h,i,j;c=new VI;d=new YT;d.sH=c;c.vL=d;d=new YQ;d.zK=c;c.o_=d;e=new YR;e.vF=c;c.ym=new $rt_globals.ResizeObserver(Bl(e,"f"));d=new YP;d.rU=c;c.qr=d;c.j$=1;d=new Vf;d.lA=new XR;e=new Rx;e.CQ=null;e.lm=A2U;d.tt=e;BL(e);f=new Vl;f.v2=e;d.zu=f;d.yr=b;g=b.length;h=0;while(h<g){e=b[h];i=new Vm;i.uR=d;i.uQ=h;f=Bl(i,"f");e.onmessage=f;e=b[h];f=AFw();e.postMessage(f);h=h+1|0;}d.ic=0;d.m4=BK(g);c.yQ=d;c.qe=(Ej()).getElementById("canvasDiv");d=ADe();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.d6=d;c.qe.appendChild(d);b=c.d6;d=ATK(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Rz(C(2),C(18));else{c.n2=A0T(c.d6,c.o_);b=new YI;j=c.o_;AHL(b,e,new XF,1,2.25,0.625);b.CN=new XE;b.B8=j;c.g1=b;AU2(c.ym,c.d6,AJZ());d=$rt_globals.window;j=c.qr;d.addEventListener("resize",Bl(j,"handleEvent"));j=new N8;b=c.g1;d=c.n2.ct;j.E=b;j.q=d;j.cg=c;d=$rt_str($rt_globals.window.location.hash);if(Bm(C(19),d)){b=new O1;DT(b,j);d=$rt_globals.fetch("test.wasm");j
=new Pa;d=d.then(Bl(j,"f"));j=new O_;e=d.then(Bl(j,"f"));j=new O9;d=new O8;e.then(Bl(j,"f"),Bl(d,"f"));}else b=Bm(C(20),d)?A0K(j):(AW7(J(d)<=0?C(21):Ed(d,1))).be(j);c.f7=b;Wp(c);}c.d6.focus();}
var OW=G(0);
var Od=G(0);
function Z0(){var a=this;B.call(a);a.my=null;a.gJ=null;}
function AGu(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Z0;c.gJ=b;d=c;b.classObject=d;}return c;}
function I1(a){if(a.my===null)a.my=$rt_str(a.gJ.$meta.name);return a.my;}
function IM(a){return a.gJ.$meta.primitive?1:0;}
function I4(a){return AGu(a.gJ.$meta.item);}
var AD5=G();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fj(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ADJ=G();
function AJQ(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AGy(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AGy(d[e],c))return 1;e=e+1|0;}return 0;}
function G8(){var a=this;B.call(a);a.iV=null;a.nf=null;a.kT=0;a.lr=0;}
function A2V(){var a=new G8();X(a);return a;}
function A2W(a){var b=new G8();Bn(b,a);return b;}
function X(a){a.kT=1;a.lr=1;}
function Bn(a,b){a.kT=1;a.lr=1;a.iV=b;}
function AN$(a){return a;}
function AVw(a){return a.iV;}
function AVD(a){var b;b=a.nf;if(b===a)b=null;return b;}
var El=G(G8);
function A2X(){var a=new El();AGX(a);return a;}
function AGX(a){X(a);}
var Bt=G(El);
function A2u(a){var b=new Bt();AX1(b,a);return b;}
function AX1(a,b){Bn(a,b);}
var AFA=G(Bt);
var CW=G(0);
var CJ=G(0);
var JL=G(0);
function BC(){var a=this;B.call(a);a.b5=null;a.jw=0;}
var A2Y=null;var A2Z=null;var A20=null;function Ff(){Ff=Bq(BC);AXp();}
function AO$(){var a=new BC();ACQ(a);return a;}
function Gt(a){var b=new BC();H_(b,a);return b;}
function Ev(a,b,c){var d=new BC();NT(d,a,b,c);return d;}
function ACQ(a){Ff();a.b5=A2Y;}
function H_(a,b){Ff();NT(a,b,0,b.data.length);}
function NT(a,b,c,d){var e;Ff();e=B1(d);a.b5=e;DB(b,c,e,0,d);}
function NM(b){var c;Ff();c=AO$();c.b5=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b5.data;if(b<c.length)return c[b];}d=new HV;X(d);K(d);}
function J(a){return a.b5.data.length;}
function Fd(a){return a.b5.data.length?0:1;}
function SA(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DB(a.b5,b,d,e,c);return;}}g=new BE;X(g);K(g);}
function Xy(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function LI(a,b){if(a===b)return 1;return Xy(a,b,0);}
function D_(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Jd(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b5.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=I3(b);h=JE(b);while(true){f=a.b5.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Ic(a,b,c){var d,e,f,g,h;d=Bc(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b5.data[d]==e)break;d=d+(-1)|0;}return d;}f=I3(b);g=JE(b);while(true){if(d<1)return (-1);h=a.b5.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Sh(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function ATH(a,b){return Sh(a,b,0);}
function Sv(a,b,c){var d,e;d=Bc(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AE9(a,b){return Sv(a,b,J(a));}
function Cr(a,b,c){var d,e;d=BI(b,c);if(d>0){e=new BE;X(e);K(e);}if(!d){Ff();return A2Z;}if(!b&&c==J(a))return a;return Ev(a.b5,b,c-b|0);}
function Ed(a,b){return Cr(a,b,J(a));}
function SQ(a,b,c){return Cr(a,b,c);}
function FP(a,b){var c,d,e,f,g,h;if(Fd(b))return a;if(Fd(a))return b;c=B1(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return NM(c);}
function Yp(a,b,c){var d,e,f,g;d=new L;N(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BM(d,P(a,f));}f=f+1|0;}H(d,Ed(a,f));return M(d);}
function UE(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cr(a,b,c+1|0);}
function ALT(a){return a;}
function FY(a){var b,c,d,e,f;b=a.b5.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CG(b){Ff();return b===null?C(22):b.cP();}
function LO(b){var c,d;Ff();c=new BC;d=B1(1);d.data[0]=b;H_(c,d);return c;}
function Dc(b){var c;Ff();c=new L;N(c);return M(U(c,b));}
function Bm(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function Je(a){var b,c,d,e;a:{if(!a.jw){b=a.b5.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.jw=(31*a.jw|0)+e|0;d=d+1|0;}}}return a.jw;}
function Nh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new He;Bn(b,C(23));K(b);}A21=1;d=new TV;d.mf=Q(CZ,10);d.g$=(-1);d.fj=(-1);d.bA=(-1);e=new Hk;e.fg=1;e.bQ=b;e.bf=B1(J(b)+2|0);DB(FY(b),0,e.bf,0,J(b));f=e.bf.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.vA=g;e.gS=0;FE(e);FE(e);d.k=e;d.dN=0;d.nt=ABS(d,(-1),0,null);if(!Dq(d.k)){b=new JG;h=d.k;Km(b,C(21),h.bQ,h.dt);K(b);}if(d.qU)d.nt.eS();b=BN();h=new Vt;h.j9=(-1);h.mE=(-1);h.AX=d;h.yg=d.nt;h.ks=a;h.j9=0;g=J(a);h.mE=g;e=new Yr;i=h.j9;j=d.g$;k=d.fj+1|0;l=d.bA
+1|0;e.i4=(-1);m=j+1|0;e.r$=m;e.d5=BK(m*2|0);f=BK(l);e.lf=f;Ih(f,(-1));if(k>0)e.ng=BK(k);Ih(e.d5,(-1));ABG(e,a,i,g);h.cJ=e;e.f1=1;n=0;m=0;if(!J(a)){f=Q(BC,1);f.data[0]=C(21);}else{while(true){l=J(h.ks);if(!AC7(h))l=h.mE;e=h.cJ;if(e.eN>=0&&AER(e)==1){e=h.cJ;e.eN=J1(e);if(J1(h.cJ)==AG1(h.cJ)){e=h.cJ;e.eN=e.eN+1|0;}g=h.cJ.eN;g=g<=l&&Om(h,g)?1:0;}else g=Om(h,h.j9);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BG(b,SQ(a,m,AIO(h)));m=AEA(h);n=g;}a:{BG(b,SQ(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bw(b,
g)))break a;EJ(b,g);}}if(g<0)g=0;f=IE(b,Q(BC,g));}return f;}
function AOq(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bc(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AXp(){A2Y=B1(0);A2Z=AO$();A20=new V8;}
var Fb=G(G8);
var H0=G(Fb);
var AE8=G(H0);
var D$=G();
function GO(){D$.call(this);this.br=0;}
var A22=null;var A23=null;function AW0(a){var b=new GO();AEm(b,a);return b;}
function AEm(a,b){a.br=b;}
function Mu(b){return (Pq(A2d(20),b,10)).cP();}
function KC(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Do;Bn(b,C(24));K(b);}d=J(b);if(0==d){b=new Do;Bn(b,C(25));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Do;X(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=Rr(P(b,f));if(i<0){j=new Do;k=Cr(b,0,d);b=new L;N(b);H(H(b,C(26)),k);Bn(j,M(b));K(j);}if(i>=c){j=new Do;l=Cr(b,0,d);b=new L;N(b);H(H(U(H(b,C(27)),c),C(28)),l);Bn(j,M(b));K(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Do;k=Cr(b,0,d);b=new L;N(b);H(H(b,C(29)),k);Bn(j,M(b));K(j);}b=new Do;j=new L;N(j);U(H(j,C(30)),c);Bn(b,M(j));K(b);}
function CU(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A23===null){A23=Q(GO,256);c=0;while(true){d=A23.data;if(c>=d.length)break a;d[c]=AW0(c-128|0);c=c+1|0;}}}return A23.data[b+128|0];}return AW0(b);}
function AYO(a,b){if(a===b)return 1;return b instanceof GO&&b.br==a.br?1:0;}
function PN(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Jg(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AQW(a,b){b=b;return BI(a.br,b.br);}
function AHM(){A22=F($rt_intcls());}
function GU(){var a=this;B.call(a);a.C=null;a.K=0;}
function A24(){var a=new GU();N(a);return a;}
function A2d(a){var b=new GU();GA(b,a);return b;}
function N(a){GA(a,16);}
function GA(a,b){a.C=B1(b);}
function Pq(a,b,c){return AFn(a,a.K,b,c);}
function AFn(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cl(a,b,b+1|0);else{Cl(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=HZ(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cl(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=HZ($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AGk(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BI(c,0.0);if(!d){if(1.0/c===Infinity){Cl(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cl(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cl(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cl(a,b,b+8|0);d=b;}else{Cl(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A25;AGb(c,f);d=f.mN;g=f.mr;h=f.rc;i=1;j=1;if(h)j=2;k=9;l=AWG(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cl(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AEi(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BI(c,0.0);if(!d){if(1.0/c===Infinity){Cl(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cl(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cl(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cl(a,b,b+8|0);d=b;}else{Cl(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A26;AFr(c,f);g=f.nv;h=f.l2;i=f.qO;j=1;k=1;if(i)k=2;l=18;m=AUa(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cl(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AND(p,Fq))d=0;else{d=GN(AHd(g,p));g=AJU(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AHd(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AWG(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AUa(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A27.data;g=f.length-1|0;while(g>=0){if(Ix(AJU(b,Ce(c,f[g])),Fq)){d=d|e;c=Ce(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BM(a,b){return a.oI(a.K,b);}
function ABs(a,b,c){Cl(a,b,b+1|0);a.C.data[b]=c;return a;}
function KJ(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=Ky(a.C,d);}
function M(a){return Ev(a.C,0,a.K);}
function ABc(a,b,c,d){return a.n1(a.K,b,c,d);}
function ON(a,b,c,d,e){var f,g,h,i;Cl(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Jj(a,b){return a.mV(b,0,b.data.length);}
function Cl(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.jj((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var IQ=G(0);
var L=G(GU);
function M3(){var a=new L();AYy(a);return a;}
function AYy(a){N(a);}
function H(a,b){var c;c=a.K;if(b===null)b=C(22);NP(a,c,b);return a;}
function B0(a,b){NP(a,a.K,b);return a;}
function U(a,b){Pq(a,b,10);return a;}
function GV(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(A0z(b,Fq)){d=0;b=A1h(b);}a:{if(Dv(b,Bp(10))<0){if(d)Cl(a,c,c+1|0);else{Cl(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=HZ(GN(b),10);}else{g=1;h=Bp(1);i=Di(Bp(-1),Bp(10));b:{while(true){j=Ce(h,Bp(10));if(Dv(j,b)>0){j=h;break b;}g=g+1|0;if(Dv(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cl(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(Ix(j,Fq))break a;e=a.C.data;c=f+1|0;e[f]=HZ(GN((Di(b,j))),10);b=AC6(b,j);j=Di(j,Bp(10));f=c;}}}return a;}
function E9(a,b){AGk(a,a.K,b);return a;}
function ACJ(a,b){BM(a,b);return a;}
function If(a,b){NP(a,a.K,!b?C(31):C(32));return a;}
function AIv(a,b,c){var d,e,f,g,h,i;d=BI(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HV;X(i);K(i);}
function ZJ(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HV;X(f);K(f);}
function AQO(a,b,c,d,e){ON(a,b,c,d,e);return a;}
function ANk(a,b,c,d){ABc(a,b,c,d);return a;}
function ADs(a){return a.K;}
function D7(a){return M(a);}
function AQY(a,b){KJ(a,b);}
function ARw(a,b,c){ABs(a,b,c);return a;}
function NP(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(22);else if(Fd(c))break a;KJ(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HV;X(c);K(c);}
var EM=G(H0);
var AGC=G(EM);
function A28(a){var b=new AGC();AL6(b,a);return b;}
function AL6(a,b){Bn(a,b);}
var AEW=G(EM);
function A29(a){var b=new AEW();AMo(b,a);return b;}
function AMo(a,b){Bn(a,b);}
var WI=G(0);
var C1=G(0);
function Ct(b,c){if(b!==null)b.cH();return c;}
var Rl=G(0);
function Jy(){var a=this;B.call(a);a.hU=0;a.og=0;a.nb=0;}
var A2$=0;function Eq(a){A2$=A2$-1|0;}
function GD(a,b,c){Kf(a,AEd(b,c,400,0));}
function Lw(a,b){return LW(a,b,0.875);}
function LW(a,b,c){return DZ(a,b)+c|0;}
function Uh(){var a=this;Jy.call(a);a.js=null;a.c6=null;a.p0=null;}
function ET(a){var b,c,d;b=a.c6;c=a.og;d=a.nb;b.clearRect(0.0,0.0,c,d);}
function UT(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c6;d="center";c.textAlign=d;break a;case 2:c=a.c6;d="right";c.textAlign=d;break a;default:break a;}d=a.c6;c="left";d.textAlign=c;}}
function Ck(a,b){Kf(a,b.qB);}
function Kf(a,b){var c;if(a.p0!==b){c=a.c6;a.p0=b;c.font=b;}}
function AEd(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BS(a,b,c,d){var e,f,g;e=a.c6;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function DZ(a,b){var c;c=$rt_ustr(b);return a.c6.measureText(c).width;}
function Jp(a,b,c,d){var e,f;e=a.c6;f=$rt_ustr(Gt(AFf([35,Hg(b/16|0),Hg(b%16|0),Hg(c/16|0),Hg(c%16|0),Hg(d/16|0),Hg(d%16|0)])));e.fillStyle=f;}
function ALi(){return {alpha:false};}
var AC3=G();
var AH2=G();
function BV(b,c){if(b===c)return 1;return b!==null?b.bI(c):c!==null?0:1;}
function BL(b){if(b!==null)return b;b=new He;Bn(b,C(21));K(b);}
var BP=G(0);
function Ll(b){return b;}
var BY=G(0);
function WW(){B.call(this);this.wR=null;}
function AY9(a,b){var c;c=a.wR;c.pD=b;if(c.zs)AHa(b);}
var AGH=G();
function Le(b,c){return b.data[c];}
var AFO=G();
var AC9=G(0);
function E2(b,c,d){return AWB(C(33),FP(C(15),b),c,d);}
var AHB=G(0);
var AHy=G(0);
function MT(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C_(b,f+g|0);DB(c,0,d,f,g);return d;}
function L9(b,c,d){DB(b,c,d,0,d.data.length);return d;}
function T6(b,c,d){var e;if(c>0)DB(b,0,d,0,c);e=d.data.length;if(c<e)DB(b,c+1|0,d,c,e-c|0);return d;}
function AE2(b,c,d,e){var f;if(c>0)DB(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DB(b,d,e,c,f-d|0);}return e;}
function ER(b){var c;c=new Zp;c.kD=b;return c;}
function AD9(b,c){if(b.data.length!=c)b=C_(b,c);return b;}
function AHx(b,c,d){var e;e=c.data.length;if(e==d)c=C_(c,e*2|0);c.data[d]=b;return c;}
function Yh(b,c,d){var e;e=c.data.length;if(e==d)c=Ng(c,e*2|0);c.data[d]=b;return c;}
function Nf(b){return Ky(b,b.data.length);}
function MX(){var a=this;B.call(a);a.we=null;a.u2=null;a.uX=null;a.sO=0;}
function AWB(a,b,c,d){var e=new MX();AVj(e,a,b,c,d);return e;}
function AVj(a,b,c,d,e){a.we=b;a.u2=c;a.uX=d;a.sO=e;}
var AD1=G();
function AOA(b,c){return {style:b,weight:c};}
function WX(){B.call(this);this.ya=null;}
function AJl(a,b){var c,d,e;c=a.ya;d=0;while(d<b.length){e=b[d];(Ej()).fonts.add(e);d=d+1|0;}c.zs=1;b=c.pD;if(b!==null)AHa(b);}
var WV=G();
function AXw(a,b){$rt_globals.console.info("font load error "+b);}
var Mt=G();
var A2_=null;var A3a=null;function Bz(){if(A2_===null)A2_=ASw(A3b,0);return A2_;}
function EL(){if(A3a===null)A3a=ASw(A3c,0);return A3a;}
function A1a(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mz(b)&&(e+f|0)<=Mz(d)){a:{b:{if(b!==d){g=I4(BJ(b));h=I4(BJ(d));if(g!==null&&h!==null){if(g===h)break b;if(!IM(g)&&!IM(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gJ;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AGy(n.constructor,o)?1:0)){LM(b,c,d,e,j);b=new JF;X(b);K(b);}j=j+1|0;k=m;}LM(b,c,d,e,f);return;}if(!IM(g))break a;if(IM(h))break b;else break a;}b=new JF;X(b);K(b);}}LM(b,c,
d,e,f);return;}b=new JF;X(b);K(b);}b=new BE;X(b);K(b);}d=new He;Bn(d,C(34));K(d);}
function DB(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mz(b)&&(e+f|0)<=Mz(d)){LM(b,c,d,e,f);return;}b=new BE;X(b);K(b);}
function LM(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EK(){return Long_fromNumber(new Date().getTime());}
function AG4(){return A2S($rt_globals.performance.now()*1000000.0);}
var AHu=G();
var AEB=G();
function Rz(b,c){var d,e,f;d=(Ej()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ej()).getElementById($rt_ustr(b)).appendChild(d);}
function ADe(){return (Ej()).createElement("canvas");}
function AID(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ATK(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AJe=G();
var O2=G();
function ATk(a,b){var c;c=new Bt;Bn(c,$rt_str(b.message));K(c);}
var AHQ=G();
function Fn(b){return $rt_str(b);}
var ADj=G();
function Ky(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ng(b,c){var d,e,f,g;b=b.data;d=DE(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JV(b,c){var d,e,f,g;b=b.data;d=BK(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C_(b,c){var d,e,f,g;d=b.data;e=AG0(I4(BJ(b)),c);f=Bc(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AEb(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));H(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AGU(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));U(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AVQ(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));E9(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AZD(b){var c,d,e,f;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));f=e[d];AEi(c,c.K,f);d=d+1|0;}B0(c,C(37));return M(c);}
function Ih(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BR;X(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ADP(b,c,d,e){var f,g;if(c>d){e=new BR;X(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AEy(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A2U;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bc(j,h+f|0);l=h+(2*f|0)|0;m=Bc(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.zg(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AGl(b,c){return W9(b,0,b.data.length,c);}
function W9(b,c,d,e){var f,g,h,i,j;f=BI(c,d);if(f>0){g=new BR;X(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var Y4=G(0);
var AFB=G();
function APd(a,b){return a.Ge(b);}
function ARM(a){return a.L$();}
var AFm=G();
var HT=G(0);
var V8=G();
var BE=G(Bt);
var AGg=G();
function Mz(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A3d());}return b.data.length;}
function AG0(b,c){if(b===null){b=new He;X(b);K(b);}if(b===F($rt_voidcls())){b=new BR;X(b);K(b);}if(c>=0)return AYa(b.gJ,c);b=new ACt;X(b);K(b);}
function AYa(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var He=G(Bt);
var JF=G(Bt);
function De(){B.call(this);this.mp=0;}
var A3e=null;var A3f=null;var A3g=null;var A3h=null;var A3i=null;var A3j=null;var A3k=null;var A3l=null;var A3m=null;var A3n=null;function AY6(a){var b=new De();AEM(b,a);return b;}
function AEM(a,b){a.mp=b;}
function PV(b){var c,d;c=A3j.data;if(b>=c.length)return AY6(b);d=c[b];if(d===null){d=AY6(b);A3j.data[b]=d;}return d;}
function AAQ(b){var c,d;c=new BC;d=B1(1);d.data[0]=b;H_(c,d);return c;}
function Np(b){return b>=65536&&b<=1114111?1:0;}
function CO(b){return (b&64512)!=55296?0:1;}
function Db(b){return (b&64512)!=56320?0:1;}
function Nu(b){return !CO(b)&&!Db(b)?0:1;}
function H9(b,c){return CO(b)&&Db(c)?1:0;}
function EP(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function I3(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function JE(b){return (56320|b&1023)&65535;}
function Ft(b){return Hd(b)&65535;}
function Hd(b){if(A3h===null){if(A3k===null)A3k=AGS();A3h=AE5((A3k.value!==null?$rt_str(A3k.value):null));}return Vz(A3h,b);}
function EV(b){return Hb(b)&65535;}
function Hb(b){if(A3g===null){if(A3l===null)A3l=AHN();A3g=AE5((A3l.value!==null?$rt_str(A3l.value):null));}return Vz(A3g,b);}
function Vz(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BI(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function XW(b,c){if(c>=2&&c<=36){b=Rr(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Rr(b){var c,d,e,f,g,h,i,j,k,l;if(A3f===null){if(A3m===null)A3m=AE_();c=(A3m.value!==null?$rt_str(A3m.value):null);d=AVE(FY(c));e=KT(d);f=BK(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+OX(d)|0;j=j+OX(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A3f=f;}g=A3f.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BI(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HZ(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function G4(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return AFf([I3(b),JE(b)]);}
function CA(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Nu(b&65535))return 19;if(A3i===null){if(A3n===null)A3n=AI7();d=(A3n.value!==null?$rt_str(A3n.value):null);e=Q(Ph,16384);f=e.data;g=DE(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=LJ(P(d,l));if(m==64){l=l+1|0;m=LJ(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,LJ(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=LJ(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOl(k,k+i|0,Ng(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOl(k,k+i|0,Ng(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A3i=C_(e,j);}e=A3i.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.vk)o=p+1|0;else{c=d.s4;if(b>=c)return d.tl.data[b-c|0];c=p-1|0;}}return 0;}
function KA(b){a:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GX(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CA(b)!=16?0:1;}
function R5(b){switch(CA(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function TY(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return R5(b);}return 1;}
function AC2(){A3e=F($rt_charcls());A3j=Q(De,128);}
function AGS(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AHN(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AE_(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AI7(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var N4=G(0);
var Vy=G(0);
var EE=G(0);
var AC8=G();
function Ej(){return $rt_globals.window.document;}
function ASL(a){return a.JJ();}
function AWu(a,b){return a.MS($rt_str(b));}
function AWc(a,b){a.H2($rt_str(b));}
function AMQ(a,b){return a.GE($rt_str(b));}
function AJP(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANc(a){return a.MW();}
function AWn(a,b,c){return a.KV($rt_str(b),$rt_str(c));}
function AQt(a,b,c,d){a.BQ($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
function AK4(a){return a.IE();}
function AUd(a){return !!a.Nv();}
function AXo(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ASh(a){return a.Iu();}
function APX(a,b){a.KI($rt_str(b));}
function ASN(a){return !!a.HF();}
function AZG(a){return a.M8();}
function ARi(a){return $rt_ustr(a.DV());}
function AKR(a,b){return a.IW(b?1:0);}
function AYQ(a){return a.Nu();}
function APT(a,b,c){return a.N8($rt_str(b),$rt_str(c));}
function AR5(a,b,c){return a.HC(b,c?1:0);}
function AYg(a,b,c){return !!a.Mb($rt_str(b),$rt_str(c));}
function AJS(a){return a.Kx();}
function APv(a){return $rt_ustr(a.OS());}
function ANq(a,b){return !!a.Cg(b);}
function AOC(a,b){return a.PV($rt_str(b));}
function AQe(a,b,c){return a.JG($rt_str(b),$rt_str(c));}
function ARp(a){return a.E6();}
function AK7(a,b){return a.M3($rt_str(b));}
function AOB(a){return $rt_ustr(a.Ef());}
function AUN(a){a.Hy();}
function AJx(a,b){return a.Ob($rt_str(b));}
function AW_(a,b){return a.Ic($rt_str(b));}
function ALH(a,b){return a.Hx($rt_str(b));}
function AXc(a){return $rt_ustr(a.Fl());}
function ALW(a,b,c){return a.JO(b,c);}
function AUz(a,b){return a.DU(b);}
function AVr(a){return a.LH();}
function ATB(a,b,c){a.Bg($rt_str(b),Fj(c,"handleEvent"));}
function AS3(a,b,c){return a.Fm(b,c);}
function AW5(a){return !!a.L8();}
function AY4(a,b){return a.JA($rt_str(b));}
function AS8(a,b,c,d){a.AG($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
function ANg(a){return a.LM();}
function AMl(a,b,c){return a.IU($rt_str(b),$rt_str(c));}
function AKu(a){return $rt_ustr(a.FN());}
function AYJ(a){return a.EQ();}
function ATw(a){return a.Fa();}
function AKq(a){return a.Mc();}
function ATC(a,b,c){a.Cd($rt_str(b),Fj(c,"handleEvent"));}
function AM4(a,b){return a.OB(b);}
function AOY(a,b){a.El($rt_str(b));}
function AVz(a){return $rt_ustr(a.D4());}
function PU(){var a=this;B.call(a);a.s8=null;a.s9=null;a.s$=0;a.s_=null;a.s3=null;}
function AUy(a,b){var c,d,e,f,g;c=a.s8;d=a.s9;e=a.s$;f=a.s_;g=a.s3;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AFj=G();
function AV3(b){return Math.exp(b);}
function AC$(b){return Math.log(b);}
function JZ(b,c){return ARU(b,c);}
function ARU(b,c){return Math.pow(b,c);}
function DR(){return AZl();}
function AZl(){return Math.random();}
function Bc(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AYi(b,c){return Math.max(b,c);}
function ADI(b,c){return AYi(b,c);}
function Oj(b){if(b<0)b= -b|0;return b;}
function AO4(b){return Math.abs(b);}
var RT=G(0);
var Ud=G(0);
var T3=G(0);
var WD=G(0);
var ABe=G(0);
var XY=G(0);
var AD2=G();
function ATG(a,b,c){a.Cd($rt_str(b),Fj(c,"handleEvent"));}
function AQU(a,b,c){a.Bg($rt_str(b),Fj(c,"handleEvent"));}
function APx(a,b,c,d){a.AG($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
function ALd(a,b){return !!a.Cg(b);}
function ANw(a,b,c,d){a.BQ($rt_str(b),Fj(c,"handleEvent"),d?1:0);}
var BR=G(Bt);
var ACt=G(Bt);
var HV=G(BE);
var AEn=G();
function AFw(){return "ping";}
function AI4(b){return b===AFw()?1:0;}
var Tq=G(0);
var Q4=G(0);
function VI(){var a=this;B.call(a);a.vL=null;a.o_=null;a.qe=null;a.d6=null;a.ym=null;a.qr=null;a.n2=null;a.g1=null;a.j$=0;a.BD=0;a.vf=null;a.f7=null;a.yQ=null;}
function Pv(a,b){var c;c=Ej();b=$rt_ustr(b);c.title=b;}
function Wp(a){a.BD=$rt_globals.requestAnimationFrame(Bl(a.vL,"onAnimationFrame"));}
function Ie(a){a.j$=1;}
function Wn(a,b,c){var d,e;a.n2.d0=BD(b,c);d=a.d6;e=b;d.width=e;d=a.d6;e=c;d.height=e;d=a.g1;V(d.c_,b,c);e=d.X;d=d.c_;b=d.b;c=d.a;e.viewport(0,0,b,c);a.f7.bS(a.g1.c_,LN(a));a.f7.bs();}
function Uf(a,b){var c,d,e;c=a.vf;d=a.d6;if(BV(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.vf=b;}
function Kw(a){return $rt_globals.performance.now()/1000.0;}
function LN(a){return $rt_globals.window.devicePixelRatio;}
function Zq(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AII(b,1);else{c=new AAp;d=$rt_globals.window.showDirectoryPicker();e=new AAo;e.tc=b;e.td=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function M7(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AII(b,0);else{c=new ABr;d=$rt_globals.window.showOpenFilePicker();e=new ABq;e.tU=b;e.tT=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CQ(a,b,c,d){var e,f,g,h;e=a.yQ;f=e.ic;if(f>0){g=e.m4.data;f=f-1|0;e.ic=f;Xs(e,b,c,d,g[f]);}else{h=e.lA;e=new AAq;e.wU=b;e.xF=c;e.wr=d;b=new Xx;b.rt=e;c=h.ly;b.xs=c;if(c===null)h.mU=b;else c.wu=b;h.ly=b;h.b0=h.b0+1|0;h.jC=h.jC+1|0;}}
function TS(a,b,c){var d,e;if(!MO()){b=new Bt;Bn(b,C(38));c.i(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new U8;e.uN=b;b=AI_(c);d.then(Bl(e,"f"),Bl(b,"f"));}}
function XA(a,b,c,d){var e,f,g;if(!MO()){b=new Bt;Bn(b,C(38));d.i(b);}else{e=$rt_globals.navigator.clipboard;f=FY(b);A1M();b=A3o;g=f.data;g=b.decode(g);b=e.writeText(g);e=new Zm;e.yA=c;c=AI_(d);b.then(Bl(e,"f"),Bl(c,"f"));}}
function ABE(a){return MO()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AI_(b){var c;c=new Os;c.wI=b;return c;}
var BH=G(0);
var AFK=G();
var Be=G(0);
var AFL=G();
var T8=G(0);
function YT(){B.call(this);this.sH=null;}
function APS(a,b){var c,d;c=b;b=a.sH;if(!(!b.f7.cv(c/1000.0)&&!b.j$)){d=b.g1.c_;if(Bb(d.b,d.a)){b.j$=0;b.f7.bs();}}Wp(b);}
function YQ(){B.call(this);this.zK=null;}
function Dp(a){Ie(a.zK);}
var S7=G(0);
function YR(){B.call(this);this.vF=null;}
function ANF(a,b,c){var d,e,f,g;c=a.vF;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.d6){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=LN(c);Wn(c,Gs(f.width*g),Gs(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Wn(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AH9=G();
function AJZ(){return {box:'device-pixel-content-box'};}
function AU2(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cx=G(0);
function YP(){B.call(this);this.rU=null;}
function AUK(a,b){b=a.rU;b.f7.bS(b.g1.c_,LN(b));b.f7.bs();}
function Vf(){var a=this;B.call(a);a.lA=null;a.yr=null;a.tt=null;a.m4=null;a.qI=0;a.ic=0;a.zu=null;}
function Xs(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.qI+1|0;a.qI=f;g=a.tt;h=CU(f);g.jn=Ns(g,g.jn,h);h=X5(g,h);N$(h,b);N$(h,b);g.ls=g.ls+1|0;b=a.yr[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BC)g=$rt_ustr(c);else if(JA(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(JA(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(JA(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof Mc)){b=new BR;c
=I1(BJ(c));g=new L;N(g);H(H(g,C(39)),c);Bn(b,M(g));K(b);}c=c;g=c.hP;if(g===null)g=c.fV;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var ZL=G(0);
function AJm(a,b){var c;c=a.b_();while(c.cA()){b.i(c.b2());}}
var GF=G(0);
function Yj(a){var b,c;b=new Va;c=new SZ;c.s2=a;b.xi=c;return b;}
function AQw(a,b){var c,d;c=a.b_();d=0;while(c.cA()){if(b.S(c.b2())){c.m7();d=1;}}return d;}
var Fg=G();
function FR(a){return a.cY()?0:1;}
function IE(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AG0(I4(BJ(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B4(a);while(B5(f)){g=b.data;h=e+1|0;g[e]=B7(f);e=h;}return b;}
function AVY(a,b){var c;c=a.b_();while(c.cA()){if(BV(c.b2(),b)){c.m7();return 1;}}return 0;}
function Hl(a,b){var c,d;c=0;d=b.b_();while(d.cA()){if(!a.vX(d.b2()))continue;c=1;}return c;}
var LR=G(0);
var J_=G(0);
function EY(){Fg.call(this);this.b0=0;}
function AU8(a,b){a.o$(a.cY(),b);return 1;}
function B4(a){var b;b=new PB;b.hV=a;b.oS=a.b0;b.ki=a.cY();b.g4=(-1);return b;}
function AT3(a,b,c){var d,e;if(b>=0&&b<=a.cY()){if(c.eo())return 0;d=c.b_();while(d.cA()){e=b+1|0;a.o$(b,d.b2());b=e;}return 1;}c=new BR;X(c);K(c);}
function AW1(a,b,c){c=new Ea;X(c);K(c);}
function Lr(a,b){var c,d;c=a.cY();d=0;while(true){if(d>=c)return (-1);if(BV(b,a.nO(d)))break;d=d+1|0;}return d;}
function ASy(a,b){var c,d;if(!JA(b,J_))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BV(Bw(a,d),Bw(c,d)))return 0;d=d+1|0;}return 1;}
var Nk=G(EY);
var Oe=G(0);
var ABH=G(0);
function XR(){var a=this;Nk.call(a);a.mU=null;a.ly=null;a.jC=0;}
var Ma=G(0);
function D8(){var a=this;B.call(a);a.mt=null;a.mC=null;}
var Em=G(0);
var ABD=G(0);
var OU=G(0);
function Rx(){var a=this;D8.call(a);a.jn=null;a.lm=null;a.CQ=null;a.ls=0;}
function AIj(a,b){var c;c=X5(a,b);if(c===null)return null;a.jn=Lf(a,a.jn,b);a.ls=a.ls+1|0;return c.kb;}
function X5(a,b){var c,d;c=a.jn;while(true){if(c===null)return null;d=KB(a.lm,b,c.kJ);if(!d)break;c=d>=0?c.b6:c.bT;}return c;}
function Ns(a,b,c){var d,e;if(b===null){b=new Kv;d=null;b.kJ=c;b.kb=d;b.gc=1;b.gq=1;return b;}e=KB(a.lm,c,b.kJ);if(!e)return b;if(e>=0)b.b6=Ns(a,b.b6,c);else b.bT=Ns(a,b.bT,c);EF(b);return KS(b);}
function Lf(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=KB(a.lm,c,b.kJ);if(d<0)b.bT=Lf(a,b.bT,c);else if(d>0)b.b6=Lf(a,b.b6,c);else{e=b.b6;if(e===null)return b.bT;f=b.bT;g=Q(Kv,e.gc).data;h=0;while(true){b=e.bT;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b6;while(h>0){h=h+(-1)|0;j=g[h];j.bT=b;EF(j);b=KS(j);}e.b6=b;e.bT=f;EF(e);b=e;}EF(b);return KS(b);}
function Vl(){B.call(this);this.v2=null;}
function Vm(){var a=this;B.call(a);a.uR=null;a.uQ=0;}
function AJR(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.uR;d=a.uQ;AI4(b.data);e=c.lA;f=e.mU;if(f===null)g=null;else{g=f.wu;e.mU=g;if(g!==null)g.xs=null;else e.ly=null;e.jC=e.jC-1|0;e.b0=e.b0+1|0;g=f.rt;}if(g!==null)Xs(c,g.wU,g.xF,g.wr,d);else{h=c.m4.data;i=c.ic;c.ic=i+1|0;h[i]=d;}c=c.zu;b=b.data;if(!AI4(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BR;X(b);K(b);}if(b.length<1){b=new BR;AGX(b);K(b);}e=CU(b[0]);c=AIj(c.v2,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?Fn(Ll(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A0J(Ll(e)):(e instanceof $rt_globals.File?1:0)?AGp(null,Ll(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AGp(Ll(e),null);k=l;}c.i(h);}}
function AEg(){var a=this;B.call(a);a.ct=null;a.ir=null;a.B5=null;a.d0=null;}
function A0T(a,b){var c=new AEg();AWV(c,a,b);return c;}
function AWV(a,b,c){var d,e,f,g;a.d0=null;a.ir=b;d=new Su;d.bM=CR(Q(Cm,0));d.pc=CR(Q(Cm,0));d.bx=CR(Q(Cw,0));d.fk=CR(Q(EC,0));d.dD=CR(Q(Dz,0));d.gh=CR(Q(Fc,0));d.gV=CR(Q(FJ,0));d.lh=CR(Q(Be,0));d.mm=CR(Q(Be,0));d.dp=c;a.ct=d;e=$rt_globals.window;f=Q(C1,14);g=f.data;d=new Z5;d.qP=a;g[0]=C3(a,b,C(40),d);d=new Z6;d.wo=a;g[1]=C3(a,b,C(41),d);d=new Z7;d.sn=a;g[2]=C3(a,b,C(42),d);d=new Z8;d.zB=a;g[3]=C3(a,b,C(43),d);d=new Z9;d.vx=a;g[4]=C3(a,b,C(44),d);d=new Z$;d.ro=a;g[5]=C3(a,b,C(45),d);d=new Z_;d.zY=a;g[6]=C3(a,
b,C(46),d);d=new AAa;d.vH=a;g[7]=C3(a,b,C(47),d);d=new AAb;d.rF=a;g[8]=C3(a,b,C(48),d);d=new AAc;d.yG=a;g[9]=C3(a,b,C(49),d);d=new AB8;d.x3=a;g[10]=C3(a,b,C(50),d);d=new AB9;d.wK=a;e.addEventListener("paste",Bl(d,"handleEvent"),!!1);g[11]=AAH(a,e,C(51),d);d=new AB$;d.pM=a;g[12]=C3(a,e,C(52),d);d=new AB_;d.y_=a;g[13]=C3(a,e,C(53),d);c=new Td;c.A_=f;a.B5=c;e=new ABA;e.tw=b;b.onpointerdown=Bl(e,"f");e=new ABB;e.r1=b;b.onpointerup=Bl(e,"f");}
function OP(){return (Ej()).activeElement;}
function C3(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return AAH(a,b,c,d);}
function AAH(a,b,c,d){var e;e=new S3;e.AM=b;e.AO=c;e.AN=d;return e;}
function W2(a,b){var c;c=new X7;c.zA=b;return c;}
function E1(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.ir.getBoundingClientRect();e=BD(Gs((b.clientX-d.left)*c),Gs((b.clientY-d.top)*c));f=AR1(a.d0);d=new N2;XC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.Ar=f;return d;}
function ACc(a,b,c){var d,e,f,g;d=new Rq;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;XC(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.lZ=0;d.d_=e;d.bk=f;d.iY=c;d.vO=g;return d;}
function DX(a,b){b.stopPropagation();b.preventDefault();}
function Mm(){var a=this;B.call(a);a.nr=null;a.ck=null;a.X=null;a.kL=0;a.xq=null;a.Bf=0;a.Cv=0;a.lv=null;a.la=null;a.CM=null;a.CB=null;a.xm=null;a.qR=null;a.iX=null;a.hI=null;a.jd=null;a.CW=null;a.sP=null;a.c_=null;a.zi=null;a.nV=0;a.lQ=0;a.oK=0;a.op=0;a.jX=0;a.oF=null;a.oV=0.0;a.n6=0.0;}
function AHL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c_=new Bh;a.nV=0;a.oF=new AAf;a.nr=c;a.kL=d;g=$rt_str(b.getParameter(7938));h=new L;N(h);H(H(h,C(54)),g);$rt_globals.console.info($rt_ustr(M(h)));a.X=b;a.ck=Kt(c,4,4,1);i=AJH(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B1(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new S4;Ij();c=A3p;m.eT=b;m.hp=c;m.vV=j.length/c.mR|0;m.zb
=l.length;n=b.createBuffer();m.qj=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.zD=null;n=b.createBuffer();m.yT=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sP=m;a.Cv=LI(g,C(55));c=new S5;c.dR=b;a.xq=c;a.oV=e;a.n6=f;d=b.getParameter(3379);a.Bf=d;c=new L;N(c);U(H(c,C(56)),d);$rt_globals.console.info($rt_ustr(M(c)));k=Q(C6,9);i=k.data;c=A0Q(b);a.lv=c;i[0]=c;c=A0h(b,C(57));a.la=c;i[1]=c;c=new TM;HA(c,b,C(58),
C(59),A3p);a.CM=c;i[2]=c;c=A1R(b);a.CB=c;i[3]=c;c=new P_;ABQ(c,b,C(60),C(61));a.xm=c;i[4]=c;c=A19(b);a.qR=c;i[5]=c;c=A11(b);a.iX=c;i[6]=c;c=A1K(b);a.hI=c;i[7]=c;c=A1L(b);a.jd=c;i[8]=c;a.CW=k;ABg(b,C(62));}
function Gw(a,b,c){return Hu(a,b,c,400,0);}
function GR(a,b,c){return Kt(a.nr,b,c,0);}
function DS(a,b,c,d){return Kt(a.nr,b,c,d);}
function EB(a,b){var c,d,e,f,g;c=a.X;d=b.bl;e=b.bp;f=b.bd;g=b.bD;c.clearColor(d,e,f,g);a.X.clear(16384);}
function B2(a,b){var c;if(b==a.lQ)return b;if(!b)a.X.disable(3042);else{a.X.enable(3042);a.X.blendFuncSeparate(770,771,1,1);}c=a.lQ;a.lQ=b;return c;}
function LL(a,b,c){MH(a,b.b,b.a,c);}
function MH(a,b,c,d){var e,f;e=d.b;f=d.a;a.op=1;a.jX=1;d=a.oF;d.vn=b;d.vp=c;d.vm=e;d.vl=f;XD(a);}
function Gf(a){a.op=0;a.jX=0;XD(a);}
function XD(a){var b,c,d,e,f,g;b=a.oK;c=a.op;if(b!=c){a.oK=c;if(!c)a.X.disable(3089);else a.X.enable(3089);}if(a.oK&&a.jX){a.jX=0;d=a.X;e=a.oF;b=e.vn;c=a.c_.a-e.vp|0;f=e.vl;c=c-f|0;g=e.vm;d.scissor(b,c,g,f);}}
function F1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sP;c=a.nV;d=b.hp.wE;e=b.eT;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eT;h=b.qj;e.bindBuffer(34962,h);i=b.hp.pi.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eT;m=k.iC;n=k.fS;o=b.hp.mR*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fS|0;j=j+1|0;}a:{e=b.zD;if(e!==null){c=0;b.eT.bindBuffer(34962,e);i=b.hp.va.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eT;j=e.iC;p=e.fS;m=e.sZ;n=b.hp.tq;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fS|0;g=g+1|0;}}}q=b.yT;if(q===null){c=b.vV;if(c>0)b.eT.drawArrays(4,0,c);}else{b.eT.bindBuffer(34963,q);k=b.eT;g=b.zb;k.drawElements(4,g,5123,0);}a.nV=d;}
function Bu(a,b,c,d,e){F4(a,a.lv);Gq(a.lv,a.X,b,c,d,a.c_);d=a.lv;Fh(a.X,d.yy,e);F1(a);}
function ACw(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;F4(a,a.hI);Gq(a.hI,a.X,b,c,d,a.c_);j=a.hI;d=a.X;k=j.po;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.pn;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.hI;Fh(a.X,d.rn,i);F1(a);}
function M8(a,b,c,d,e,f,g,h){var i,j;F4(a,a.jd);Gq(a.jd,a.X,b,c,d,a.c_);d=a.jd;i=a.X;j=d.vS;i.uniform2f(j,e,f);Fh(i,d.sM,g);d=a.jd;Fh(a.X,d.qq,h);F1(a);}
function DW(a,b,c,d,e,f,g,h,i){var j;j=!i?a.xm:a.qR;F4(a,j);AIq(j,a.X,!i?a.n6:a.oV);Gq(j,a.X,b,c,d,a.c_);Mw(j,a.X,f);ACL(j,a.X,f,e);AGi(j,a.X,g,h);F1(a);}
function CT(a){var b,c;b=new Ia;c=a.xq;b.fw=new Bh;b.eD=c;b.fI=c.dR.createTexture();A3q=A3q+1|0;return b;}
function KG(a,b){ABg(a.X,b);}
function F4(a,b){var c,d;if(b!==a.zi){c=a.X;d=b.bH;c.useProgram(d);a.zi=b;}}
function YI(){var a=this;Mm.call(a);a.B8=null;a.CN=null;}
function Hu(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ck;g=AEd(b,c,d,e);Kf(f,g);h=f.c6.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=DZ(f,C(63));m=DZ(f,C(64));h=new Md;n=g;h.oU=b;h.rM=c;h.A4=d;h.BA=e;h.dd=i;h.es=j;h.AU=l;h.oB=k;h.qB=n;h.u7=CV(i);h.CD=CV(h.es);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.A0=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(65);}h.AL=b;return h;}
function Ci(){B.call(this);this.B=null;}
function DT(a,b){a.B=b;}
function AYL(a,b){return 0;}
function Su(){var a=this;B.call(a);a.bM=null;a.pc=null;a.bx=null;a.fk=null;a.dD=null;a.gh=null;a.gV=null;a.lh=null;a.mm=null;a.dp=null;a.iW=null;a.rQ=0;}
function W_(a,b){var c,d,e,f;Dp(a.dp);c=(Cz(!b.iY?a.pc:a.bM)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].S(b);if(f)break;if(b.lZ)break;e=e+1|0;}return f;}
function TN(a,b,c){var d,e,f;Dp(a.dp);d=(Cz(a.gh)).data;e=d.length;f=0;while(f<e){if(d[f].ht(b,c))return 1;f=f+1|0;}return 0;}
function Z5(){B.call(this);this.qP=null;}
function AT5(a,b){var c;c=a.qP;if(W_(c.ct,ACc(c,b,1)))DX(c,b);}
function Z6(){B.call(this);this.wo=null;}
function AUl(a,b){var c;c=a.wo;if(W_(c.ct,ACc(c,b,0)))DX(c,b);}
function Z7(){B.call(this);this.sn=null;}
function ASc(a,b){var c,d,e,f,g,h,i;c=a.sn;if(c.d0!==null){a:{b:{d=E1(c,b);e=c.ct;Dp(e.dp);f=e.iW;if(f!==null)f.i(d);else{g=(Cz(e.bx)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bF(d))break a;i=i+1|0;}}}}DX(c,b);}}
function Z8(){B.call(this);this.zB=null;}
function ARs(a,b){var c,d,e,f,g,h;c=a.zB;b.button;if(c.d0!==null)a:{d=E1(c,b);c=c.ct;e=b.button;Dp(c.dp);if(c.iW===null){f=(Cz(c.bx)).data;g=f.length;h=0;while(h<g){b=f[h].bX(d,e);if(b!==null){c.iW=b;c.rQ=e;break a;}h=h+1|0;}}}}
function Z9(){B.call(this);this.vx=null;}
function ARW(a,b){var c,d,e,f,g,h,i;c=a.vx;b.button;if(c.d0!==null){d=E1(c,b);e=c.ct;f=b.button;Dp(e.dp);if(f==e.rQ&&e.iW!==null)e.iW=null;g=(Cz(e.bx)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cR(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DX(c,b);}}
function Z$(){B.call(this);this.ro=null;}
function AUW(a,b){var c,d,e,f,g,h,i,j,k;c=a.ro;if(c.d0!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.ct;f=E1(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Dp(e.dp);i=(Cz(e.fk)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dJ(f,d,h))break b;k=k+1|0;}}DX(c,b);}}
function Z_(){B.call(this);this.zY=null;}
function APw(a,b){var c,d,e,f,g,h,i,j;c=a.zY;if(c.d0!==null){d=E1(c,b);e=c.ct;f=b.button;g=b.detail;Dp(e.dp);h=(Cz(e.bx)).data;i=h.length;j=0;a:{while(j<i){if(h[j].ce(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DX(c,b);}}
function AAa(){B.call(this);this.vH=null;}
function AZv(a,b){var c,d,e,f,g,h,i;c=a.vH;if(c.d0!==null){d=E1(c,b);e=c.ct;Dp(e.dp);f=(Cz(e.dD)).data;g=f.length;h=0;a:{while(h<g){if(f[h].S(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DX(c,b);}}
function AAb(){B.call(this);this.rF=null;}
function AOy(a,b){var c,d,e;b=a.rF.ct;c=(Cz(b.mm)).data;d=c.length;e=0;while(e<d){c[e].l();e=e+1|0;}Dp(b.dp);}
function AAc(){B.call(this);this.yG=null;}
function AWf(a,b){var c,d,e;b=a.yG.ct;c=(Cz(b.lh)).data;d=c.length;e=0;while(e<d){c[e].l();e=e+1|0;}Dp(b.dp);}
function AB8(){B.call(this);this.x3=null;}
function AYM(a,b){var c;c=a.x3;if(c.d0!==null)E1(c,b);}
function AB9(){B.call(this);this.wK=null;}
function ARK(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.wK;if(OP()===c.ir){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cz(c.ct.gV)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].da();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.ct.dp;m=new PK;m.y0=k;m.y1=l;g.getAsString(Bl(m,"accept"));DX(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new L;N(l);H(H(H(H(l,C(66)),k),C(67)),g);$rt_globals.console.info($rt_ustr(M(l)));}e=e+1
|0;}}}
function AB$(){B.call(this);this.pM=null;}
function ASj(a,b){var c;c=a.pM;if(OP()===c.ir&&TN(c.ct,W2(c,b),0))DX(c,b);}
function AB_(){B.call(this);this.y_=null;}
function AUC(a,b){var c;c=a.y_;if(OP()===c.ir&&TN(c.ct,W2(c,b),1))DX(c,b);}
var Xo=G(0);
var XF=G();
function Kt(a,b,c,d){var e,f,g,h,i;e=new Uh;e.hU=d;A2$=A2$+1|0;e.og=b;e.nb=c;f=(Ej()).createElement("canvas");e.js=f;g=b;f.width=g;h=e.js;f=c;h.height=f;if(!d)g=e.js.getContext("2d");else{i=e.js;h=ALi();g=i.getContext("2d",h);}e.c6=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var XE=G();
function AQC(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function N8(){var a=this;B.call(a);a.E=null;a.q=null;a.cg=null;}
var J7=G();
var A2U=null;function KB(a,b,c){return b.lu(c);}
function AFQ(){A2U=new J7;}
function AIt(){var a=this;B.call(a);a.gY=null;a.iu=null;a.fT=0;}
function CR(a){var b=new AIt();APq(b,a);return b;}
function APq(a,b){a.gY=b;}
function Z(a,b){var c,d,e;c=a.fT;d=a.gY;if(c==d.data.length)a.gY=C_(d,c+4|0);d=a.gY.data;e=a.fT;a.fT=e+1|0;d[e]=b;a.iu=null;}
function Cz(a){var b;b=a.iu;if(!(b!==null&&b.data.length==a.fT))a.iu=C_(a.gY,a.fT);return a.iu;}
var Eo=G(0);
var Cm=G(0);
var Cw=G(0);
function AQH(a,b){return 0;}
function AXA(a,b,c){return null;}
function AKm(a,b,c){return 0;}
function AUV(a,b,c,d){return 0;}
var EC=G(0);
var Dz=G(0);
var Fc=G(0);
var Eg=G(0);
var FJ=G(0);
function Td(){B.call(this);this.A_=null;}
function Bh(){var a=this;B.call(a);a.b=0;a.a=0;}
function BD(a,b){var c=new Bh();AEk(c,a,b);return c;}
function AR1(a){var b=new Bh();ANf(b,a);return b;}
function AEk(a,b,c){a.b=b;a.a=c;}
function ANf(a,b){a.b=b.b;a.a=b.a;}
function Co(a,b){a.b=b.b;a.a=b.a;}
function V(a,b,c){a.b=b;a.a=c;}
function ACx(a){var b,c,d;b=a.b;c=a.a;d=new L;N(d);U(H(U(H(d,C(68)),b),C(69)),c);return M(d);}
function AQo(a,b){var c;a:{b:{if(a!==b){if(BJ(b)!==BJ(a))break b;if(!I_(a,b))break b;}c=1;break a;}c=0;}return c;}
function I_(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function AAf(){var a=this;B.call(a);a.vn=0;a.vp=0;a.vm=0;a.vl=0;}
var AHA=G();
var ADD=G(0);
function S5(){B.call(this);this.dR=null;}
function MN(){var a=this;B.call(a);a.bH=null;a.CG=null;}
function AGo(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(70):C(71);g=$rt_str(b.getShaderInfoLog(e));h=new L;N(h);H(H(h,f),g);g=M(h);b.deleteShader(e);Bs(Bz(),g);Bs(EL(),C(72));Bs(EL(),d);Bs(EL(),C(72));b=new Bt;Bn(b,g);K(b);}
function C6(){var a=this;MN.call(a);a.rE=null;a.tE=null;a.n9=null;}
function A3r(a,b,c,d){var e=new C6();HA(e,a,b,c,d);return e;}
function HA(a,b,c,d,e){var f,g,h,i,j,k;a.CG=e;f=AGo(b,35633,c);d=AGo(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bH=g;h=e.v_.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bH;k=c.iC;c=c.tO;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bH;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ABg(b,C(73));a.n9=new Bh;c=a.bH;a.rE=b.getUniformLocation(c,"uResolution");c=a.bH;a.tE=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new L;N(c);H(H(c,C(74)),d);Bn(b,M(c));K(b);}
function AEv(a,b,c){var d,e,f;if(!I_(a.n9,c)){Co(a.n9,c);d=a.rE;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Gq(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.tE;b.uniform4f(e,i,l,h,j);AEv(a,b,f);}
function AHY(){C6.call(this);this.yy=null;}
function A0Q(a){var b=new AHY();AP$(b,a);return b;}
function AP$(a,b){var c;Ij();HA(a,b,C(58),C(75),A3p);c=a.bH;a.yy=b.getUniformLocation(c,"uColor");}
function E0(){C6.call(this);this.vt=null;}
function A0h(a,b){var c=new E0();W7(c,a,b);return c;}
function A3s(a,b,c){var d=new E0();Xb(d,a,b,c);return d;}
function W7(a,b,c){Xb(a,b,C(58),c);}
function Xb(a,b,c,d){Ij();HA(a,b,c,d,A3p);c=a.bH;a.vt=b.getUniformLocation(c,"sDiffuse");}
function Mw(a,b,c){var d;d=a.vt;b.uniform1i(d,0);b.activeTexture(33984);c=c.fI;b.bindTexture(3553,c);}
var TM=G(C6);
function AFt(){E0.call(this);this.Az=null;}
function A1R(a){var b=new AFt();AT4(b,a);return b;}
function AT4(a,b){var c;W7(a,b,C(76));c=a.bH;a.Az=b.getUniformLocation(c,"uContrast");}
function GB(){var a=this;E0.call(a);a.sF=null;a.t4=null;a.vN=null;a.w4=null;a.p5=0.0;}
function A3t(a,b,c){var d=new GB();ABQ(d,a,b,c);return d;}
function ABQ(a,b,c,d){Xb(a,b,c,d);c=a.bH;a.sF=b.getUniformLocation(c,"uTexTransform");c=a.bH;a.t4=b.getUniformLocation(c,"uColor");c=a.bH;a.vN=b.getUniformLocation(c,"uBgColor");c=a.bH;a.w4=b.getUniformLocation(c,"uTextPow");}
function AIq(a,b,c){var d;if(a.p5!==c){a.p5=c;d=a.w4;b.uniform2f(d,c,0.0);}}
function AGi(a,b,c,d){Fh(b,a.t4,c);Fh(b,a.vN,d);}
function ACL(a,b,c,d){var e,f,g,h,i,j;c=c.fw;e=c.b;f=c.a;g=d.bl;h=e;g=g/h;i=d.bp;j=f;i=i/j;h=d.bd/h;j=d.bD/j;c=a.sF;b.uniform4f(c,g,i,h,j);}
var P_=G(GB);
var AIR=G(GB);
function A19(a){var b=new AIR();ANR(b,a);return b;}
function ANR(a,b){ABQ(a,b,C(60),C(77));}
function AD4(){var a=this;E0.call(a);a.zG=null;a.zC=null;a.t7=null;}
function A11(a){var b=new AD4();ANU(b,a);return b;}
function ANU(a,b){var c,d;W7(a,b,C(78));c=a.bH;a.zG=b.getUniformLocation(c,"uColorB");d=a.bH;a.zC=b.getUniformLocation(d,"uColorF");d=a.bH;a.t7=b.getUniformLocation(d,"uContrast");}
function AGG(){var a=this;C6.call(a);a.rn=null;a.po=null;a.pn=null;}
function A1K(a){var b=new AGG();ANX(b,a);return b;}
function ANX(a,b){var c;Ij();HA(a,b,C(58),C(79),A3p);c=a.bH;a.rn=b.getUniformLocation(c,"uColor");c=a.bH;a.po=b.getUniformLocation(c,"uPoints1");c=a.bH;a.pn=b.getUniformLocation(c,"uPoints2");}
function ADz(){var a=this;C6.call(a);a.qq=null;a.vS=null;a.sM=null;}
function A1L(a){var b=new ADz();ALJ(b,a);return b;}
function ALJ(a,b){var c;Ij();HA(a,b,C(58),C(80),A3p);c=a.bH;a.qq=b.getUniformLocation(c,"uColor");c=a.bH;a.vS=b.getUniformLocation(c,"uBaseline");c=a.bH;a.sM=b.getUniformLocation(c,"uScaleHExp");}
var UH=G(0);
var AJa=G(0);
function Fh(b,c,d){var e,f,g,h;e=d.bl;f=d.bp;g=d.bd;h=d.bD;b.uniform4f(c,e,f,g,h);}
function ABg(b,c){var d,e;d=b.getError();if(d){b=Bz();e=new L;N(e);U(H(e,c),d);Bs(b,M(e));}}
function S3(){var a=this;B.call(a);a.AM=null;a.AO=null;a.AN=null;}
function S4(){var a=this;B.call(a);a.eT=null;a.hp=null;a.qj=null;a.zD=null;a.yT=null;a.vV=0;a.zb=0;}
function CE(){var a=this;B.call(a);a.AJ=null;a.fr=0;}
function Dy(a,b,c){a.AJ=b;a.fr=c;}
function Hp(){var a=this;CE.call(a);a.v_=null;a.pi=null;a.va=null;a.mR=0;a.tq=0;a.wE=0;}
var A3p=null;var A3u=null;function Ij(){Ij=Bq(Hp);AP7();}
function AP7(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hp;c=Q(Ee,2);d=c.data;AXT();d[0]=A3v;d[1]=A3w;Ij();Dy(b,C(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.ot.fr){case 0:f=f+l.fS|0;h=h+1|0;break a;case 1:e=e+l.fS|0;g=g+1|0;break a;default:}}i=i|1<<l.iC;k=k+1|0;}b.v_=c;b.mR=e;b.tq=f;b.wE=i;c=Q(Ee,g);m=c.data;b.pi=c;c=Q(Ee,h);n=c.data;b.va=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.ot.fr){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A3p
=b;c=Q(Hp,1);c.data[0]=b;A3u=c;}
var NE=G(0);
var Wt=G(0);
var XS=G(0);
var GZ=G();
function Ks(){GZ.call(this);this.Af=null;}
function AET(){var a=this;Ks.call(a);a.Cs=0;a.m5=0;a.kk=null;a.ms=null;a.xe=null;}
function ASw(a,b){var c=new AET();AXs(c,a,b);return c;}
function AXs(a,b,c){a.Af=b;b=new L;N(b);a.kk=b;a.ms=B1(32);a.Cs=c;AEN();a.xe=A3x;}
function WA(a,b,c,d){var e,$$je;e=a.Af;if(e===null)a.m5=1;if(!(a.m5?0:1))return;a:{try{e.mg(b,c,d);break a;}catch($$e){$$je=EA($$e);if($$je instanceof Jq){}else{throw $$e;}}a.m5=1;}}
function Qn(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AFG(b,c,d-c|0);e=DE(Bd(16,Bc(e.length,1024)));g=AFu(e,0,e.data.length);h=a.xe;i=new R1;b=DE(1);j=b.data;j[0]=63;HP();k=A3y;i.oc=k;i.nc=k;c=j.length;if(c&&c>=i.pm){i.AF=h;i.tM=b.hA();i.Cm=2.0;i.pm=4.0;i.sY=B1(512);i.rl=DE(512);k=A3z;if(k===null){i=new BR;Bn(i,C(82));K(i);}i.oc=k;i.nc=k;a:while(true){if(i.ke==3){f=new CY;X(f);K(f);}i.ke=2;b:{while(true){try{k=ADk(i,f,g);}catch($$e){$$je=EA($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Ja(k))
{d=Cf(f);if(d<=0)break b;k=Ei(d);}else if(HM(k))break;h=!Nm(k)?i.oc:i.nc;c:{if(h!==A3z){if(h===A3A)break c;else break b;}d=Cf(g);b=i.tM;l=b.data.length;if(d<l){k=A3B;break b;}AAK(g,b,0,l);}E7(f,f.Z+Lh(k)|0);}}l=HM(k);WA(a,e,0,g.Z);Qk(g);if(!l){while(true){d=i.ke;if(d!=2&&d!=4){f=new CY;X(f);K(f);}f=A3C;if(f===f)i.ke=3;l=HM(f);WA(a,e,0,g.Z);Qk(g);if(!l)break;}return;}}K(AM0(f));}i=new BR;Bn(i,C(83));K(i);}
function Bs(a,b){var c,d,e,f,g,h,i,j;BM(B0(a.kk,b),10);b=a.kk;c=b.K;d=a.ms;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BE;Bn(b,C(84));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Qn(a,d,0,c);a.kk.K=0;}
function GM(){GZ.call(this);this.B$=null;}
function ACj(a){a.B$=DE(1);}
var Mr=G(GM);
var A3b=null;function AQr(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AG2(){var b;b=new Mr;ACj(b);A3b=b;}
function Ee(){var a=this;CE.call(a);a.tO=null;a.ot=null;a.fS=0;a.sZ=0;a.iC=0;}
var A3v=null;var A3w=null;var A3D=null;function AXT(){AXT=Bq(Ee);AO_();}
function A06(a,b,c,d,e,f,g){var h=new Ee();ZB(h,a,b,c,d,e,f,g);return h;}
function ZB(a,b,c,d,e,f,g,h){AXT();Dy(a,b,c);a.tO=d;a.ot=e;a.fS=f;a.sZ=g;a.iC=h;}
function AO_(){var b;b=new Ee;AR7();ZB(b,C(85),0,C(86),A3E,2,0,0);A3v=b;b=A06(C(87),1,C(88),A3E,2,0,1);A3w=b;A3D=I(Ee,[A3v,b]);}
function Kh(){var a=this;B.call(a);a.Aq=null;a.Bk=null;}
function AHk(b){var c,d;if(Fd(b))K(AEP(b));if(!AHm(P(b,0)))K(AEP(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AHm(d))break a;else K(AEP(b));}}c=c+1|0;}}
function AHm(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var NJ=G(Kh);
var A3x=null;function AEN(){AEN=Bq(NJ);ANS();}
function AHD(a){var b,c;b=new WB;b.fM=C(89);HP();c=A3y;b.h5=c;b.ol=c;b.Bc=a;b.pu=0.3333333432674408;b.BC=0.5;b.rw=DE(512);b.wm=B1(512);return b;}
function ANS(){var b,c,d,e,f;b=new NJ;AEN();c=Q(BC,0);d=c.data;AHk(C(90));e=d.length;f=0;while(f<e){AHk(d[f]);f=f+1|0;}b.Aq=C(90);b.Bk=c.hA();A3x=b;}
function RC(){var a=this;B.call(a);a.gb=null;a.o5=null;a.lT=null;a.wQ=null;a.tp=null;a.tH=null;}
function AEY(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gb,b,c));}
function OE(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.o5[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gb,b,d));f=e.data;Ff();d=f.length;AEN();g=A3x;h=AFu(e,0,d);a:{try{i=AHD(g);HP();g=ADS(AGr(AIf(i,A3z),A3z),h);break a;}catch($$e){$$je=EA($$e);if($$je instanceof Go){g=$$je;}else{throw $$e;}}h=new AA6;h.kT=1;h.lr=1;h.iV=C(91);h.nf=g;K(h);}if(!g.Z&&g.dU==g.oX)c.b5=g.iB;else{f=B1(Cf(g));e=f.data;c.b5=f;Ps(g,f,0,e.length);}return c;}
function OR(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.lT[e]){e=e+1|0;}d=e-d|0;H_(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gb,b,d)));return c;}
var Ht=G(CE);
var A3F=null;var A3E=null;var A3G=null;function AR7(){AR7=Bq(Ht);ANj();}
function ANL(a,b){var c=new Ht();AHG(c,a,b);return c;}
function AHG(a,b,c){AR7();Dy(a,b,c);}
function ANj(){var b;A3F=ANL(C(92),0);b=ANL(C(93),1);A3E=b;A3G=I(Ht,[A3F,b]);}
var LT=G(GM);
var A3c=null;function AN5(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AJf(){var b;b=new LT;ACj(b);A3c=b;}
function AHt(){BR.call(this);this.AI=null;}
function AEP(a){var b=new AHt();AWO(b,a);return b;}
function AWO(a,b){X(a);a.AI=b;}
var YU=G(El);
var NI=G(0);
function ABA(){B.call(this);this.tw=null;}
function AVF(a,b){a.tw.setPointerCapture(b.pointerId);}
function ABB(){B.call(this);this.r1=null;}
function ALI(a,b){a.r1.releasePointerCapture(b.pointerId);}
function HI(){var a=this;B.call(a);a.oX=0;a.Z=0;a.dU=0;a.iN=0;}
function Zw(a,b){a.iN=(-1);a.oX=b;a.dU=b;}
function E7(a,b){var c,d,e;if(b>=0&&b<=a.dU){a.Z=b;if(b<a.iN)a.iN=0;return a;}c=new BR;d=a.dU;e=new L;N(e);BM(U(H(U(H(e,C(94)),b),C(95)),d),93);Bn(c,M(e));K(c);}
function Cf(a){return a.dU-a.Z|0;}
function D0(a){return a.Z>=a.dU?0:1;}
var U_=G(0);
var Me=G(HI);
function AIU(b){var c,d;if(b>=0)return AUo(0,b,B1(b),0,b,0);c=new BR;d=new L;N(d);U(H(d,C(96)),b);Bn(c,M(d));K(c);}
function AFG(b,c,d){return AUo(0,b.data.length,b,c,c+d|0,0);}
function Ps(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BE;i=new L;N(i);U(H(U(H(i,C(97)),g),C(98)),f);Bn(h,M(i));K(h);}if(Cf(a)<d){j=new M5;X(j);K(j);}if(d<0){j=new BE;k=new L;N(k);H(U(H(k,C(99)),d),C(100));Bn(j,M(k));K(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iB.data[m+a.oD|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BE;d=b.length;k=new L;N(k);BM(U(H(U(H(k,C(101)),c),C(95)),d),41);Bn(j,M(k));K(j);}
function Ld(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.o7){b=new JX;X(b);K(b);}e=d-c|0;if(Cf(a)<e){b=new IO;X(b);K(b);}if(c>J(b)){f=new BE;d=J(b);b=new L;N(b);BM(U(H(U(H(b,C(102)),c),C(95)),d),41);Bn(f,M(b));K(f);}if(d>J(b)){f=new BE;c=J(b);b=new L;N(b);U(H(U(H(b,C(103)),d),C(104)),c);Bn(f,M(b));K(f);}if(c>d){b=new BE;f=new L;N(f);U(H(U(H(f,C(102)),c),C(105)),d);Bn(b,M(f));K(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;Vj(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function KZ(){var a=this;HI.call(a);a.m3=0;a.n0=null;a.BV=null;}
function AFu(b,c,d){var e,f,g;e=b.data;f=new AAJ;g=e.length;d=c+d|0;Zw(f,g);AQc();f.BV=A3H;f.m3=0;f.n0=b;f.Z=c;f.dU=d;f.B1=0;f.qd=0;return f;}
function AAK(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.qd){e=new JX;X(e);K(e);}if(Cf(a)<d){e=new IO;X(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BE;j=new L;N(j);U(H(U(H(j,C(106)),h),C(98)),g);Bn(i,M(j));K(i);}if(d<0){e=new BE;i=new L;N(i);H(U(H(i,C(99)),d),C(100));Bn(e,M(i));K(e);}h=a.Z;k=h+a.m3|0;l=0;while(l<d){b=a.n0.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BE;d=b.length;i=new L;N(i);BM(U(H(U(H(i,C(101)),c),C(95)),d),41);Bn(e,M(i));K(e);}
function Qk(a){a.Z=0;a.dU=a.oX;a.iN=(-1);return a;}
function Iv(){B.call(this);this.C3=null;}
var A3A=null;var A3z=null;var A3y=null;function HP(){HP=Bq(Iv);ARN();}
function AIy(a){var b=new Iv();AHh(b,a);return b;}
function AHh(a,b){HP();a.C3=b;}
function ARN(){A3A=AIy(C(107));A3z=AIy(C(108));A3y=AIy(C(109));}
var O1=G(Ci);
function ARD(a){}
function APW(a,b,c){}
function Eb(){var a=this;Ci.call(a);a.dX=null;a.n=null;}
function Jz(a,b){var c,d,e;DT(a,b);a.dX=AEc(0,0,64);c=new XJ;c.bP=new Bh;c.c3=CR(Q(Dj,0));c.c$=new Bh;c.ox=new Bh;c.Aj=new BZ;c.Ak=new BZ;d=b.E;c.b$=d;e=b.cg;c.gC=e;c.cu=d.kL;c.cK=Ts(e);d=b.q.mm;e=new SW;e.vr=c;Z(d,e);d=b.q.lh;e=new SV;e.zw=c;Z(d,e);a.n=c;Z(b.q.bM,new UO);b=b.q.bM;c=a.n;BL(c);d=new UN;d.rv=c;Z(b,d);}
function FI(a){EB(a.B.E,a.dX);}
function VA(a,b,c){var d,e,f,g,h;a:{d=a.n;Co(d.bP,b);e=d.ci;if(e!==c){d.ci=c;f=(Cz(d.c3)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].ej(e,c);h=h+1|0;}}}}
function CD(){Eb.call(this);this.bC=null;}
function Gc(a,b){KM(a,b,1);}
function KM(a,b,c){var d,e,f;Jz(a,b);d=new ABb;e=a.n;d.cQ=BN();d.hj=e;a.bC=d;Z(a.n.c3,d);Z(b.q.bx,a.bC);e=b.q.fk;f=a.bC;BL(f);d=new N9;d.zh=f;Z(e,d);if(c){b=b.q.bx;d=a.n.cK;e=new Pp;e.ph=d;Z(b,e);}}
function SG(a){FI(a);Mg(a.bC,a.B.E);}
function Ip(a,b,c){var d,e;VA(a,b,c);b=a.bC;d=0;while(true){e=b.cQ;if(d>=e.m)break;Bw(e,d);d=d+1|0;}}
function ALv(a,b){var c,d,e,f;c=a.bC;d=0;e=0;while(true){f=c.cQ;if(e>=f.m)break;d=(Bw(f,e)).T.cv(b)|d;e=e+1|0;}return d;}
var Q2=G(0);
var Iw=G(0);
function AIX(a){a.ii(Ir());}
function IH(a){a.ii(AAh());}
function AFN(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new I2;c=new Jx;d=new HQ;AHF();KW(d,A3I);NK(c,d,BU(A3J),BU(A3K),BU(A3L),BU(A3J),BU(A3M),BU(A3N),BU(A3O),BU(A3P),BU(A3Q),BU(A3R));AGD();e=(A3S.hA()).data;f=e.length;g=Q(JU,f);h=g.data;i=0;while(i<f){h[i]=e[i].nd;i=i+1|0;}j=AGK(S(C(110)),S(C(111)),S(C(112)),S(C(113)));k=new I5;l=new Jl;AKr();m=A3T;NQ(l,m,A3U,A3V,A3W,A3X,m);MI(k,l,AIi(),AIM(S(C(114)),S(C(115)),CI(0)),AIi(),ACz(1,0.07500000298023224),A3Y,A3Z);J3(b,c,g,j,k,ACP(S(C(116)),S(C(117)),S(C(118)),S(C(119))));a.ii(b);}
var La=G(0);
var Ju=G(0);
function KQ(){var a=this;CD.call(a);a.G=null;a.H=null;a.iQ=null;a.h7=0;a.jv=null;a.lF=null;a.e8=null;}
function A1N(a){var b=new KQ();AEQ(b,a);return b;}
function AEQ(a,b){var c,d,e;KM(a,b,0);a.e8=AL0(a.n);c=ADC(a.bC);a.iQ=c;a.G=To(a.n,c);c=To(a.n,a.iQ);a.H=c;a.lF=AXG(a.G,c);c=a.G;c.cc=1;Z2(a.e8,c,a.H);c=a.G;d=new Yd;d.yO=a;c.mB=d;c=a.H;d=new Ye;d.uu=a;c.mB=d;AIk(a,0);KF(a.n,a.G);Z(b.q.fk,a);Z(b.q.bx,a);c=b.q.bM;d=new Yf;d.qz=a;Z(c,d);c=b.q.bM;d=new G5;e=new Ya;e.xN=a;Ke(d,b,e);Z(c,d);Z(b.q.gh,a);Z(b.q.gV,a);b=b.q.dD;c=new Yc;c.t$=a;Z(b,c);IH(a);}
function ACq(a,b){if(a.G===b)a.h7=a.h7|1;if(a.H===b)a.h7=a.h7|2;if((a.h7&3)==3)AIx(a);}
function AIk(a,b){UV(a.G,b);UV(a.H,b);}
function AYb(a,b,c){if(DN(a.n,a.G))return Hw(a.G,b,c);if(!DN(a.n,a.H))return 0;return Hw(a.H,b,c);}
function AFl(a){if(DN(a.n,a.G))return AB0(a,a.G);if(!DN(a.n,a.H))return null;return AB0(a,a.H);}
function AB0(a,b){var c;c=new Wj;c.tx=b;return c;}
function AIx(a){var b,c,d,e,f,g;Bs(Bz(),C(120));b=a.G.d.f;c=a.H.d.f;d=E5(b);e=E5(c);f=ADR(b);g=ADR(c);b=a.B.cg;c=new RV;c.rx=a;CQ(b,c,C(121),I(B,[d,f,e,g]));}
function AVd(a,b){var c,d;c=I$(a.G,b);d=I$(a.H,b);return !c&&!d?0:1;}
function ART(a){var b;FI(a);H3(a.G);H3(a.H);b=a.e8;AGY(b,b.g3.b$);Mg(a.bC,a.B.E);}
function API(a){return HX(0);}
function AVW(a){PF(a.G);PF(a.H);}
function ARI(a){AB6(a.G);AB6(a.H);}
function AW$(a,b){Qw(a.G,b);Qw(a.H,b);}
function ATp(a,b){N_(a.n,b);}
function AMS(a,b){if(AAD(a.n,b)){ZS(a.bC);MK(a.G);MK(a.H);}}
function AQ3(a,b,c){Ip(a,b,c);AFX(a,b,c);}
function AFX(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Cc(20.0,c);f=new Bh;g=b.b/2|0;h=e/2|0;AEk(f,g-h|0,b.a);NF(a.G,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;NF(a.H,d,f,c);V(a.e8.g,f.b,d.a);V(a.e8.j,d.b-f.b|0,f.a);}
function AKt(a,b){BL(b);Ka(a.iQ,b);ID(a.G,b);ID(a.H,b);a.e8.jV=b;}
function AIe(a,b){if(b.bk!=121)return 0;return 1;}
function AFs(a,b){var c,d,e,f;if(DN(a.n,a.G)){c=a.iQ;d=b.h;e=a.G;f=new Q8;f.py=a;Iq(c,d,e,a,a,a,f);}if(DN(a.n,a.H)){c=a.iQ;b=b.h;d=a.H;e=new Q7;e.zp=a;Iq(c,b,d,a,a,a,e);}return 1;}
function AT_(a,b){var c,d;c=Cd(a.G,b.h)&&P6(a.G,b)?1:0;d=Cd(a.H,b.h)&&P6(a.H,b)?1:0;return !c&&!d?0:1;}
function APO(a,b,c,d){var e,f;e=Cd(a.G,b.h)&&OH(a.G,b,c,d)?1:0;f=Cd(a.H,b.h)&&OH(a.H,b,c,d)?1:0;return !e&&!f?0:1;}
function ASa(a,b,c){var d,e,f,g,h,i,j,k;d=Cd(a.G,b.h);e=Cd(a.H,b.h);f=a.n;g=f.eG;h=g!==null?0:1;i=a.G;j=g!==i?0:1;k=g!==a.H?0:1;if(d&&!(!h&&!k))Gk(f,i);if(e&&!(!h&&!j))Gk(a.n,a.H);if(d){i=Op(a.G,b,c);if(i!==null)return i;}return !e?null:Op(a.H,b,c);}
function AU5(a,b,c){var d,e,f,g;d=Cd(a.G,b.h);e=Cd(a.H,b.h);f=d&&Wr(a.G,b,c)?1:0;g=e&&Wr(a.H,b,c)?1:0;return !f&&!g?0:1;}
function AUu(a,b,c,d){var e,f,g,h;e=Cd(a.G,b.h);f=Cd(a.H,b.h);g=e&&KU(a.G,c,d)?1:0;h=f&&KU(a.H,c,d)?1:0;return !g&&!h?0:1;}
function AQN(a){return AFl(a);}
var AHJ=G(KQ);
function A0K(a){var b=new AHJ();AXY(b,a);return b;}
function AXY(a,b){var c;AEQ(a,b);a.G.er=1;a.H.er=1;c=new W4;c.qF=a;Q_(a,c,C(122));c=new W5;c.wW=a;Q_(a,c,C(123));}
function ASs(a){return HX(1);}
function Q_(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Ot;d=d.then(Bl(e,"f"));f=new Ow;f.vv=b;f.vu=c;g=new Ou;d.then(Bl(f,"f"),Bl(g,"f"));}
var AIr=G();
function AW7(b){var c,d;if(J(b)>0){c=new L;N(c);H(H(c,C(124)),b);$rt_globals.console.info($rt_ustr(M(c)));}a:{d=(-1);switch(Je(b)){case -1570047148:if(!Bm(b,C(125)))break a;d=17;break a;case -1509980539:if(!Bm(b,C(126)))break a;d=13;break a;case -1351411913:if(!Bm(b,C(127)))break a;d=5;break a;case -1073555521:if(!Bm(b,C(128)))break a;d=14;break a;case -1045861099:if(!Bm(b,C(129)))break a;d=18;break a;case -1045861098:if(!Bm(b,C(130)))break a;d=19;break a;case -811765794:if(!Bm(b,C(131)))break a;d=6;break a;case -785237654:if
(!Bm(b,C(132)))break a;d=11;break a;case -749978331:if(!Bm(b,C(133)))break a;d=21;break a;case -631889171:if(!Bm(b,C(134)))break a;d=9;break a;case -536831301:if(!Bm(b,C(135)))break a;d=24;break a;case -439438829:if(!Bm(b,C(136)))break a;d=20;break a;case -357667878:if(!Bm(b,C(137)))break a;d=22;break a;case -223304637:if(!Bm(b,C(138)))break a;d=2;break a;case 2129957:if(!Bm(b,C(139)))break a;d=1;break a;case 3343967:if(!Bm(b,C(140)))break a;d=10;break a;case 3556498:if(!Bm(b,C(141)))break a;d=4;break a;case 91636708:if
(!Bm(b,C(142)))break a;d=23;break a;case 485517998:if(!Bm(b,C(143)))break a;d=7;break a;case 544901384:if(!Bm(b,C(144)))break a;d=3;break a;case 1030621992:if(!Bm(b,C(145)))break a;d=16;break a;case 1465713255:if(!Bm(b,C(146)))break a;d=8;break a;case 1554501643:if(!Bm(b,C(147)))break a;d=15;break a;case 1609169232:if(!Bm(b,C(148)))break a;d=12;break a;case 2090248989:if(!Bm(b,C(149)))break a;d=25;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Za;break b;case 3:case 4:b=new Y9;break b;case 5:b=new Y8;break b;case 6:b
=new Y_;break b;case 7:b=new Y$;break b;case 8:b=new Zf;break b;case 9:case 10:b=new Ze;break b;case 11:b=new Zh;break b;case 12:b=new Zg;break b;case 13:b=new Wb;break b;case 14:b=new Wa;break b;case 15:b=new V_;break b;case 16:b=new V1;break b;case 17:b=new V0;break b;case 18:b=new VY;break b;case 19:b=new VX;break b;case 20:b=new VW;break b;case 21:b=new VV;break b;case 22:b=new VU;break b;case 23:b=new V5;break b;case 24:b=new V4;break b;case 25:b=new V3;break b;default:b=new V2;break b;}b=new Zc;}return b;}
var AFD=G();
var K9=G(Me);
function AFk(){var a=this;K9.call(a);a.o7=0;a.oD=0;a.iB=null;}
function AUo(a,b,c,d,e,f){var g=new AFk();AZL(g,a,b,c,d,e,f);return g;}
function AZL(a,b,c,d,e,f,g){Zw(a,c);a.Z=e;a.dU=f;a.oD=b;a.o7=g;a.iB=d;}
function Vj(a,b,c){a.iB.data[b+a.oD|0]=c;}
function L2(){var a=this;B.call(a);a.AF=null;a.tM=null;a.Cm=0.0;a.pm=0.0;a.oc=null;a.nc=null;a.ke=0;}
function MW(){var a=this;B.call(a);a.hs=0;a.jN=0;}
var A3C=null;var A3B=null;function ADu(a,b){var c=new MW();AD_(c,a,b);return c;}
function AD_(a,b,c){a.hs=b;a.jN=c;}
function Ja(a){return a.hs?0:1;}
function HM(a){return a.hs!=1?0:1;}
function LS(a){return !TC(a)&&!Nm(a)?0:1;}
function TC(a){return a.hs!=2?0:1;}
function Nm(a){return a.hs!=3?0:1;}
function Lh(a){var b;if(LS(a))return a.jN;b=new Ea;X(b);K(b);}
function Ei(b){return ADu(2,b);}
function YG(a){var b,c;switch(a.hs){case 0:b=new S9;X(b);K(b);case 1:b=new ABf;X(b);K(b);case 2:b=new Yu;c=a.jN;X(b);b.Dm=c;K(b);case 3:b=new ST;c=a.jN;X(b);b.De=c;K(b);default:}}
function AEw(){A3C=ADu(0,0);A3B=ADu(1,0);}
var ADf=G();
var Jk=G(0);
var Pa=G();
function AOe(a,b){return b.arrayBuffer();}
var O_=G();
function ATq(a,b){var c,d;c=new RA;d=new Ry;return $rt_globals.WebAssembly.instantiate(b,AQA(Bl(c,"f"),Bl(d,"f")));}
var O9=G();
function AUf(a,b){ALy(b);}
var O8=G();
function AMn(a,b){AID(b);}
var Y=G(0);
function W4(){B.call(this);this.qF=null;}
function AYR(a,b){Ji(a.qF.G,b);}
function W5(){B.call(this);this.wW=null;}
function AQV(a,b){Ji(a.wW.H,b);}
var Zc=G();
function AXx(a,b){return A1N(b);}
var Za=G();
function AJ5(a,b){return A1V(b);}
var Y9=G();
function ANG(a,b){return A2n(b);}
var Y8=G();
function ATm(a,b){var c,d,e,f,g;c=new WE;DT(c,b);d=(Ir()).bo.ed;c.BP=d;c.jD=AIA(d);c.i$=new Bh;c.hv=new Bh;c.dg=KI();c.dG=KI();c.mK=HX(1);b=b.q.bx;d=new OB;d.k$=c;Z(b,d);b=c.mK.data[DR()*c.mK.data.length|0];d=Gw(c.B.E,b,10);c.mq=d;Ck(c.B.E.ck,d);e=DZ(c.B.E.ck,C(150));d=c.B.E.ck;f=new L;N(f);BM(f,43);H(f,b);g=CV(e+DZ(d,M(f)));c.ix=g;c.iH=Ct(c.iH,ACk(c,1,g,b,c.mq,c.B.E));c.iG=Ct(c.iG,ACk(c,0,c.ix,b,c.mq,c.B.E));Ta(c,c.dg,c.iH);Ta(c,c.dG,c.iG);Cs(c.dg.V,1.0,1.0,1.0,1.0);Fw(c.dg,c.jD);Cs(c.dG.V,1.0,1.0,1.0,1.0);Fw(c.dG,
c.jD);b=Bz();g=c.ix;d=new L;N(d);U(H(d,C(151)),g);Bs(b,M(d));return c;}
var Y_=G();
function ANO(a,b){var c,d,e;c=new Qa;Jz(c,b);d=new Ov;d.n4=new Bh;d.oT=new Bh;c.tL=d;c.eU=AFF();c.dr=AFF();c.eJ=IJ(c.n);Z(c.n.c3,c);d=b.q.bM;e=new Xj;e.w1=c;Z(d,e);Z(b.q.bx,c);b=b.q.dD;d=new Xf;d.yt=c;Z(b,d);ACn(c.dr);c.pe=Ec(C(152),25.0);FB(c.eJ,Fm(),c.pe);BT(c.dX,CI(43));b=Fm();IK(c.eU,b);IK(c.dr,b);b=c.eU;b.k4=new Xg;d=c.dr;d.k4=new Xh;d.mz=new QN;d.ps=new QP;Lk(b,(TZ(0)).kD);Lk(c.dr,(TZ(0)).kD);return c;}
var Y$=G();
function AJj(a,b){var c,d,e;c=new VZ;Gc(c,b);c.mj=Ec(C(153),15.0);Z(c.n.c3,c);BT(c.dX,CI(43));d=IJ(c.n);c.jo=d;FB(d,Fm(),Ec(C(152),25.0));d=b.q.bM;e=new Y2;e.AY=c;Z(d,e);d=b.q.dD;e=new Y3;e.yu=c;Z(d,e);Z(b.q.bx,Sk(c.jo));return c;}
var Zf=G();
function ANh(a,b){var c,d,e;c=new Pj;Jz(c,b);c.hf=BN();c.f2=BN();c.sK=S(C(154));c.jI=AHX();c.he=0;d=c.n.c3;e=new OJ;e.sm=c;Z(d,e);Z(b.q.bx,c);d=b.q.bM;e=new OI;e.yV=c;Z(d,e);b=Gw(b.E,C(152),35);c.jW=b;c.ll=ADh(EU(b));BT(c.dX,S(C(155)));return c;}
var Ze=G();
function ARr(a,b){var c,d,e,f;c=new VT;DT(c,b);c.hl=AIC();c.eB=0;c.xj=500;c.sL=Is(0,0,0,255,new BZ);c.lJ=20;c.q2=20;c.wt=Ir();d=b.q.bx;e=new OV;e.ku=c;f=new X_;f.wj=e;e.sp=f;Z(d,e);d=b.q.fk;e=new UP;e.xu=c;Z(d,e);c.ek=b.E;c.rN=Ts(b.cg);St(c.hl,Gw(c.ek,C(152),c.q2),c.lJ,c.ek.kL);c.i9=Jw();return c;}
var Zh=G();
function AV0(a,b){var c,d;c=new S$;IV(c,b);b=b.q.bM;d=new Sf;d.uq=c;Z(b,d);return c;}
var Zg=G();
function AJA(a,b){var c,d,e,f,g,h,i;c=new PH;Jz(c,b);d=IJ(c.n);c.ji=d;FB(d,Fm(),Ec(C(152),25.0));Z(b.q.bx,Sk(c.ji));e=b.q.dD;d=new TH;d.so=c;Z(e,d);e=b.cg;f=new Qi;f.CE=c;g=Q(B,1);g.data[0]=C(156);CQ(e,f,C(157),g);h=new Qg;h.Bs=c;g=Q(B,1);g.data[0]=AFf([1,2,3,4,5]);CQ(e,h,C(158),g);h=new Qe;h.Ag=c;i=Q(B,1);i.data[0]=A07([1,2,3,4,5]);CQ(e,h,C(159),i);h=new Qc;h.BW=c;g=Q(B,1);g.data[0]=DD([1,2,3,4,5]);CQ(e,h,C(160),g);e=b.q.bM;d=new G5;h=new TG;h.Cq=c;f=new TI;f.pI=c;AA2(d,b,h,f);Z(e,d);return c;}
var Wb=G();
function AJW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new OF;IV(c,b);c.ez=HF(0,0,300,300);c.f6=Wy(0,0,3,3);d=b.E;b=b.q.bx;e=new Xw;e.mF=c;Z(b,e);b=AIW(d);c.xW=b;FC(c.ez,b);FU(c.ez);b=c.ez.bj;Fs();BT(b,A30);BT(c.ez.V,Ds(204,120,50));ASf();e=A31;f=DE((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CT(d);switch(e.fr){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EM;X(b);K(b);}b:
{O3(m,5,5,h);b=m.eD.dR;switch(e.fr){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EM;X(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nD=m;V(c.f6.t,Cb(m),Df(c.nD));BT(c.f6.bj,c.oe);return c;}
var Wa=G();
function AQ1(a,b){var c,d,e;c=new VO;IV(c,b);c.gr=HF(0,0,300,300);c.lC=new Bh;c.kv=new Bh;c.i3=new Bh;d=b.E;b=b.q.bx;e=new Qu;e.kf=c;Z(b,e);b=AIW(d);c.qN=b;FC(c.gr,b);FU(c.gr);b=c.gr.bj;Fs();BT(b,A30);BT(c.gr.V,Ds(204,120,50));return c;}
var V_=G();
function ASS(a,b){var c,d,e,f;c=new VH;DT(c,b);c.CT=20;c.Dg=11;c.Au=220;c.k7=new Bh;c.B9=5000;c.h1=1;c.gk=I(HQ,[CI(0),CI(255)]);c.eF=b.E;d=b.q.bx;e=new Sb;e.kI=c;f=new Zy;f.vc=e;e.qv=f;Z(d,e);b=b.q.fk;d=new ACb;d.rS=c;Z(b,d);b=GR(c.eF,200,220);c.lK=b;GD(b,C(152),20.0);b=GR(c.eF,200,20);c.f8=b;GD(b,C(152),20.0);c.iE=Jw();return c;}
var V1=G();
function AOj(a,b){var c,d,e;c=new JQ;IV(c,b);Z(b.q.bx,c);d=b.q.bM;e=new AAA;e.pr=c;Z(d,e);Z(b.q.gh,new AAz);d=b.q.gh;e=new AAy;e.tz=c;Z(d,e);Z(b.q.gV,new AAx);d=b.q.gV;e=new AAB;e.vT=c;Z(d,e);b=!ABE(b.cg)?C(161):C(162);d=new L;N(d);H(H(d,C(163)),b);$rt_globals.console.info($rt_ustr(M(d)));return c;}
var V0=G();
function AJG(a,b){var c,d,e,f,g,h;c=new Vk;DT(c,b);c.wA=CI(20);c.gm=HF(0,0,300,300);d=b.q.bM;e=new UM;e.C_=c;Z(d,e);b=b.E;d=Gw(b,C(14),88);Ck(b.ck,d);f=CV(ADI(DZ(b.ck,C(164)),DZ(b.ck,C(165))));g=K_(d,1.1799999475479126);h=Bz();e=new L;N(e);U(H(U(H(e,C(166)),f),C(167)),g);Bs(h,M(e));e=GR(b,f,g*3|0);c.ip=e;Ck(e,d);BS(c.ip,C(164),0.0,d.dd);BS(c.ip,C(165),0.0,g+d.dd);BS(c.ip,C(168),0.0,(g*2|0)+d.dd);b=CT(b);c.mS=b;CK(b,c.ip);FC(c.gm,c.mS);FU(c.gm);b=c.gm.bj;Fs();BT(b,A30);BT(c.gm.V,A32);return c;}
var VY=G();
function AXJ(a,b){var c;c=new WR;N0(c,b);HH(c.cj,0,0,300,300);V(c.dj,300,300);return c;}
var VX=G();
function ARE(a,b){var c;c=new WQ;N0(c,b);c.fH=new Bh;c.gp=new Bh;V(c.d4,150,140);V(c.dj,500,100);V(c.fd,150,200);V(c.eE,500,250);return c;}
var VW=G();
function AV2(a,b){var c,d,e;c=new AAX;Gc(c,b);c.r2=Ec(C(153),20.0);Z(c.n.c3,c);BT(c.dX,CI(43));d=IJ(c.n);c.iv=d;FB(d,Fm(),Ec(C(152),25.0));d=b.q.bM;e=new AB3;e.B_=c;Z(d,e);d=b.q.dD;e=new AB4;e.ul=c;Z(d,e);Z(b.q.bx,Sk(c.iv));return c;}
var VV=G();
function AJr(a,b){var c;c=new YV;Gc(c,b);Z(c.n.c3,c);BT(c.dX,CI(43));b=H$(c.n);c.kr=b;b.di=Fm();E8(c.kr,C(133),Ec(C(152),15.0),3.0);Es(c.bC,c.kr);return c;}
var VU=G();
function AVI(a,b){var c,d,e,f,g;c=new RI;Gc(c,b);Z(c.n.c3,c);BT(c.dX,CI(43));d=ADC(c.bC);c.ou=d;e=To(c.n,d);c.eC=e;AHn(e);KF(c.n,c.eC);c.Ba=Wv(c.eC,b.q,1);d=b.q.bM;e=new G5;f=c.eC;BL(f);g=new PR;g.yN=f;Ke(e,b,g);Z(d,e);b=b.q.dD;d=new PS;d.uS=c;Z(b,d);b=A2h(c.n,c.eC);c.mL=b;Es(c.bC,b);IH(c);return c;}
var V5=G();
function AUp(a,b){var c,d,e,f,g;c=new SE;Gc(c,b);Z(c.n.c3,c);BT(c.dX,CI(43));c.gy=H$(c.n);b=AAh();c.y3=b;c.gy.di=b.df;AGI(new Sa,C(152),15.0);b=A1F(C(153),15.0,400,700);E8(c.gy,C(142),b,3.0);d=new T7;e=c.n;ME(d);d.eu=ALh(Q(HR,0));d.g8=Q(E3,0);d.pd=(-1);d.gg=e;d.cs=ARd(e.cu);c.ia=d;BL(d);f=new Pl;f.xS=d;d=ACy(C(169),0,4,f,AHX());e=c.ia;e.l6=d;VN(e);d=c.ia;d.fN=c.y3;if(!BV(d.ny,b)){d.ny=b;if(d.bR!==0.0)We(d);}b=Bz();g=N5(c.ia.l6);d=new L;N(d);U(H(d,C(170)),g);Bs(b,M(d));b=c.gy;d=c.ia;e=N6(d,c.n);d=d.fN.bo;HU(e,
d.iq,d.iy);GT(b,e);Es(c.bC,c.gy);return c;}
var V4=G();
function AMB(a,b){return A2s(b);}
var V3=G();
function APl(a,b){var c,d,e,f,g,h,i;c=new P$;Gc(c,b);c.oy=AAh();d=new ABM;e=c.n;f=ASE(e);g=AL0(e);h=ASE(e);i=I(CS,[f,g,h]);Ge(d);d.dQ=i;d.lE=g;d.xy=f;d.w0=h;Z2(g,f.iO,h.iO);d.p2=AXG(f.iO,h.iO);c.kQ=d;c.jp=H$(c.n);Z(c.n.c3,c);BT(c.dX,CI(43));d=b.q.dD;e=new Y7;e.AV=c;Z(d,e);b=b.q.bM;d=new Y6;d.vP=c;Z(b,d);b=c.jp;d=c.oy;b.di=d.df;E8(b,C(171),d.ow,2.0);GT(c.jp,c.kQ);Es(c.bC,c.jp);b=c.kQ;d=c.oy;b.lE.jV=d;ABi(b.xy,d);ABi(b.w0,d);return c;}
var V2=G();
function APN(a,b){var c;c=new Oh;AIZ(c,b);AHn(c.dE);return c;}
function AAq(){var a=this;B.call(a);a.wU=null;a.xF=null;a.wr=null;}
function HO(){var a=this;B.call(a);a.bK=0;a.cG=0;a.dm=0;a.kB=0;}
function A33(a,b,c,d){var e=new HO();XC(e,a,b,c,d);return e;}
function XC(a,b,c,d,e){a.bK=d;a.cG=b;a.dm=c;a.kB=e;}
function Rq(){var a=this;HO.call(a);a.d_=null;a.bk=0;a.iY=0;a.vO=0;a.lZ=0;}
var AHK=G();
function ZQ(b,c){return (b+(c/2|0)|0)/c|0;}
function SB(b,c,d){if(b<(2147483647/c|0))return ZQ(Bb(b,c),d);return 0.5+c*b/d|0;}
function HE(b,c){return ((b+c|0)-1|0)/c|0;}
function Gs(b){return b+0.5|0;}
function CV(b){return b+0.5|0;}
function ES(b,c,d){return Bd(b,Bc(c,d));}
function KY(b,c){return AC$(b)/AC$(c);}
function N2(){var a=this;HO.call(a);a.h=null;a.Ar=null;}
var Xr=G(0);
function PK(){var a=this;B.call(a);a.y0=null;a.y1=null;}
function AQ7(a,b){var c,d;c=a.y0;d=a.y1;$rt_globals.console.info("paste plain string "+b);c.i(Fn(b));Dp(d);}
function X7(){B.call(this);this.zA=null;}
function ZP(a,b){a.zA.clipboardData.setData("text/plain",$rt_ustr(b));}
function AAJ(){var a=this;KZ.call(a);a.B1=0;a.qd=0;}
function CS(){var a=this;B.call(a);a.g=null;a.j=null;a.bR=0.0;}
function AZZ(){var a=new CS();Ge(a);return a;}
function Ge(a){a.g=new Bh;a.j=new Bh;}
function AVf(a){}
function AS$(a){return BD(0,0);}
function G0(a,b,c,d){var e;if(!I_(a.g,b)){a.mn(b);Co(a.g,b);}if(!I_(a.j,c)){a.mc(c);Co(a.j,c);}e=a.bR;if(e!==d){a.bR=d;a.il(e,d);}}
function EN(a,b){return Cc(b,a.bR);}
function Cd(a,b){return GH(b,a.g,a.j);}
function AIn(a,b){var c,d,e,f;c=a.g;d=c.b;e=c.a;f=a.j;A0W();Bu(b,d,e,f,A34);}
function YS(a,b){var c;c=a.g;MH(b,c.b,c.a,a.j);}
function AL7(a,b){return 0;}
function ARx(a,b){}
function AYq(a,b){}
function AVq(a,b,c){}
function AYH(a){}
function APF(a,b,c,d){return 0;}
function ALU(a,b,c){return null;}
function ASx(a,b,c){return 0;}
function AX7(a,b){return 0;}
function AVb(a,b,c,d){return 0;}
function AED(){var a=this;CS.call(a);a.g3=null;a.jR=null;a.jS=null;a.jO=null;a.jP=null;a.ew=null;a.gK=null;a.gL=null;a.jV=null;}
function AL0(a){var b=new AED();AMG(b,a);return b;}
function AMG(a,b){Ge(a);a.jR=new Bh;a.jS=new Bh;a.jO=new Bh;a.jP=new Bh;a.g3=b;}
function Z2(a,b,c){a.gK=b;a.gL=c;}
function AGY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.g;Bu(b,c.b,c.a,a.j,a.jV.bo.ed);if(a.ew===null)return;d=CB(a.g3,2.0);e=GG(a.ew,a.gK.jM(),1);f=GG(a.ew,a.gK.km(),1);g=GG(a.ew,a.gL.jM(),0);h=GG(a.ew,a.gL.km(),0);i=Bc(e,g);j=Bd(f,h);h=BI(i,j);if(h<=0)B2(b,1);k=a.gK.x2();l=a.gL.nG();m=a.g3.ox;while(i<=j){n=a.ew.h6.data[i];if(n.l_){o=a.gK.gH(n.hr);p=a.gK.gH(n.hr+n.oP|0);q=a.gL.gH(n.hq);r=a.gL.gH(n.hq+n.oO|0);V(a.jR,a.g.b,o);V(a.jO,a.g.b,p);V(a.jS,a.g.b+a.j.b|0,q);V(a.jP,a.g.b+a.j.b|0,r);s=Bd(Bc(o,q),
a.g.a);t=Bc(Bd(p,r),a.g.a+a.j.a|0);if(t>s){V(m,a.j.b,t-s|0);c=a.jV;u=Jh(c.dW,c,n.l_);if(o==p){n=a.g3.c$;V(n,a.g.b-k.b|0,d);if(q>=o){c=a.jO;V(c,c.b,c.a+d|0);g=o;}else{g=o-d|0;c=a.jR;V(c,c.b,c.a-d|0);}Bu(b,k.b,g,n,u);}if(q==r){n=a.g3.c$;V(n,l.b,d);if(o>=q){c=a.jP;V(c,c.b,c.a+d|0);}else{q=q-d|0;c=a.jS;V(c,c.b,c.a-d|0);}Bu(b,a.g.b+a.j.b|0,q,n,u);}ACw(b,a.g.b,s,m,a.jR,a.jS,a.jO,a.jP,u);}}i=i+1|0;}if(h<=0)B2(b,0);}
function AFq(){var a=this;B.call(a);a.cb=null;a.dv=null;a.gD=null;a.fR=null;}
function ADC(a){var b=new AFq();AKS(b,a);return b;}
function AKS(a,b){a.cb=b;}
function Ka(a,b){var c;a.fR=b;c=a.dv;if(c!==null)c.di=b.df;c=a.cb.d3;if(c!==null)FB(c,b.df,b.lb);}
function TO(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r;f=null;g=d.d;h=AQd();i=c.m;j=0;while(j<i){if(f===null){k=(Bw(c,j)).bn;l=UE(Fu(B$(g.f,k)));m=VM(g.fX);}else{n=f.data;k=n[j].nu.m8;l=!BV(g.fX,n[j].kM)?C(21):UE(Fu(B$(g.f,k)));m=VM(n[j].kM);}if(J(l)>153){o=Cr(l,0,150);n=new L;N(n);H(H(n,o),C(172));l=M(n);}if(J(m)>153){o=Cr(m,0,150);n=new L;N(n);H(H(n,o),C(172));m=M(n);}p=Dc(k+1|0);if(f!==null){o=f.data;n=null;o=o[j];}else{o=null;n=Bw(c,j);}if(f!==null){q=new AA$;q.tF=d;q.tG=o;}else{q=new AA_;q.y5=d;q.y4=n;}NY(h,
m,p,l,q);j=j+1|0;}r=AAe(h);if(a.dv!==null)Wo(a);c=a.cb.hj;g=new Tf;f=new VD;f.qo=a;f.qp=d;AIb(g,c,f);Py(g,r);d=a.fR;ACo(g,d.df,d.zn);d=H$(c);a.dv=d;d.n3=d.n3|1;d=N6(g,c);f=a.fR.df;HU(d,f.mu,f.l0);GT(a.dv,d);d=a.dv;f=new L;N(f);H(H(f,C(173)),e);E8(d,M(f),a.fR.ow,4.0);d=a.dv;d.di=a.fR.df;Es(a.cb,d);d=a.dv;i=(d.Q.j.a+CB(d.bq,2.0)|0)+CB(c,2.0)|0;k=(g.dT+g.eL|0)+g.gA|0;j=CB(g.bU,5.0);e=BD(ES(j,b.b,g.bU.bP.b-k|0),ES(i,b.a,g.bU.bP.a-g.cO.a|0));R3(g);K4(g);i=Ef(g);k=g.b8.data.length;i=Bb(i,k)+Bb(g.dy,k+1|0)|0;V(g.cO,
g.j.b,i);i=(g.dT+g.eL|0)+g.gA|0;b=g.bU;k=(b.bP.b-e.b|0)-CB(b,5.0)|0;b=g.bU;j=(b.bP.a-e.a|0)-CB(b,5.0)|0;d=BD(Bc(i,k),Bc(g.cO.a,j));DQ(a.dv,e,d);Gk(c,g);}
function Wo(a){Kg(a.cb,a.dv);Mj(a.dv);a.dv=null;}
function Tx(a,b){var c;c=new Se;c.xc=a;c.xb=b;return c;}
function Iq(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=IJ(a.cb.hj);a.gD=h;i=a.fR;FB(h,i.df,i.lb);j=a.gD;i=new Wq;i.fG=a;i.bt=c;i.ru=g;i.hJ=e;i.o4=f;i.lq=d;h=Mf();e=i.bt.d;d=Ep(e);e=GJ(e);f=i.bt.fu;if(Tp(f,d,e)!==null){k=new UC;k.qw=i;k.qx=b;DK(h,C(174),k);}if(Nr(f,d,e)!==null){k=new UD;k.ui=i;k.uj=b;DK(h,C(175),k);}if(Xt(f,d,e)!==null){e=new UB;e.p1=i;e.p3=b;DK(h,C(176),e);}e=new UA;e.yl=i;e.yk=b;DK(h,C(177),e);G_(i);if(MO()){if(!i.bt.er){e=new TK;e.yU=i;DK(h,C(178),e);}e=new TL;e.st=i;DK(h,C(179),e);if(!i.bt.er
&&ABE(G_(i))){e=new TJ;e.v8=i;DK(h,C(180),e);}}e=Mf();l=Q(BC,4).data;l[0]=C(181);l[1]=C(182);l[2]=C(183);l[3]=C(184);m=l.length;n=0;while(n<m){f=l[n];g=new Rs;g.qt=i;g.qu=f;DK(e,f,g);n=n+1|0;}Fl(h,C(185),G9(e));o=Mf();l=Q(Cn,3);p=l.data;f=i.lq;BL(f);g=new Pc;g.r5=f;p[0]=CX(C(186),g);f=i.lq;BL(f);g=new Pd;g.tm=f;p[1]=CX(C(187),g);f=i.lq;BL(f);g=new Pb;g.zS=f;p[2]=CX(C(188),g);Jc(o,C(189),ER(l),A35);l=Q(Cn,2);p=l.data;f=i.hJ;BL(f);g=new AAn;g.t6=f;p[0]=CX(C(190),g);f=i.hJ;BL(f);g=new AAm;g.xT=f;p[1]=CX(C(191),
g);Fl(o,C(192),ER(l));f=new Rn;f.ra=i;Jc(o,C(193),f,A35);if(i.bt.cx.b$.kL){l=Q(Cn,2);p=l.data;f=new Vh;f.rC=i;p[0]=CX(C(194),f);f=new Vi;f.s7=i;p[1]=CX(C(195),f);Fl(o,C(196),ER(l));}Fl(h,C(197),G9(o));e=Mf();Fl(e,C(198),AE6(i));g=new Sz;g.zU=i;DK(e,C(199),g);k=new Og;k.rV=i;Jc(e,C(200),k,A35);Fl(h,C(201),G9(e));FS(j,b,G9(h),Tx(a,c));K6(a.cb,a.gD);}
function AD3(b){var c;c=new P7;c.pH=b;return c;}
var FK=G(0);
function ATa(a){}
function AOs(a){}
var SS=G(0);
var NC=G(0);
function AEK(){var a=this;CS.call(a);a.cx=null;a.bh=null;a.kZ=null;a.z1=0;a.o2=null;a.c7=null;a.nQ=0;a.gw=0.0;a.le=null;a.B0=null;a.fF=null;a.U=0;a.cZ=0;a.d=null;a.fu=null;a.dY=null;a.eV=null;a.x7=0;a.vG=0;a.cW=0;a.cd=0;a.ch=0;a.hK=null;a.fz=null;a.fB=null;a.ie=0;a.jE=0;a.Dr=0;a.AQ=0;a.lk=0;a.kG=0;a.ob=0;a.d$=0;a.c8=null;a.fn=null;a.er=0;a.cc=0;a.Ay=null;a.jt=null;a.uP=null;a.wO=null;a.mB=null;a.bv=0;a.cE=null;a.tI=0;a.rJ=null;a.xQ=null;}
function To(a,b){var c=new AEK();AU1(c,a,b);return c;}
function AU1(a,b,c){var d,e,f;Ge(a);a.z1=0;a.o2=Q(Be,10);a.c7=APa();a.gw=16.0;a.le=C(152);a.d=A0u(Q(BC,0),null,null);d=new ABj;d.tb=CR(Q(Lp,0));d.zX=CR(Q(Lp,0));d.qa=CR(Q(V7,0));d.yC=CR(Q(SI,0));d.x6=CR(Q(HC,0));d.xI=CR(Q(Vp,0));a.fu=d;a.eV=Q(E3,0);a.hK=BD(1,0);a.fz=Jw();a.fB=Jw();a.ie=0;a.jE=1;a.lk=1;a.kG=1;a.ob=1;a.d$=3;a.c8=AIC();a.fn=C(202);a.er=0;a.cc=0;e=EL();BL(e);d=new P1;d.Cx=e;a.jt=d;a.bv=0;e=new P0;e.pE=a;a.rJ=e;e=new PZ;e.uM=a;a.xQ=e;a.cx=b;a.bh=b.b$;a.kZ=c;c=ARd(b.cu);a.cE=c;a.fF=c.gE;f=a.o2.data;b
=new PY;b.yh=a;f[1]=b;b=new P5;b.rD=a;f[2]=b;b=new P4;b.v1=a;f[3]=b;b=new P3;b.z9=a;f[4]=b;b=new P2;b.rf=a;f[5]=b;b=new PX;b.ve=a;f[6]=b;}
function Wv(a,b,c){var d,e,f,g;if(!c)Z(b.bx,a);d=new WZ;d.qY=a;e=new WY;e.xn=a;f=new W1;f.tn=a;Z(b.gh,d);Z(b.gV,e);Z(b.fk,f);g=new W0;g.Ao=b;g.Am=d;g.An=e;g.Ap=f;return g;}
function NF(a,b,c,d){G0(a,b,c,d);VP(a,b,c,d);}
function ATM(a,b,c){AAE(a,a.le,a.gw);Qv(a.cE,c);}
function AYT(a,b,c){a.uP=b;a.wO=c;}
function VP(a,b,c,d){var e;a.cW=Cc(80.0,d);a.cd=Cc(1.0,d);a.ch=Cc(10.0,d);if(!a.cc)Co(a.cx.c$,a.g);else V(a.cx.c$,(b.b+c.b|0)-H7(a)|0,b.a);U2(a.c8,a.cx.c$,H7(a),c.a,d);b=a.c7;e=Cc(2.0,d);b.eO.t.b=e;}
function AOf(a){a.nQ=1;Mx(a);}
function AKz(a){a.nQ=0;}
function Mx(a){Sj(a.c7,Kw(Gn(a)));}
function ID(a,b){var c,d;a.dY=b;c=a.c7;d=b.bo.zW;BT(c.eO.V,d);c=a.fz;d=b.bo;Hx(c,d.iq,d.iy);c=a.fB;b=b.bo;Hx(c,b.iq,b.iy);}
function PF(a){Nv(a,a.cE.cf.oU,a.gw+1.0);}
function AB6(a){var b;b=a.gw;if(b<=7.0)return;Nv(a,a.cE.cf.oU,b-1.0);}
function Qw(a,b){Nv(a,b,a.gw);}
function AUZ(a,b){N_(a.cx,b);}
function Nv(a,b,c){if(a.cx.ci!==0.0){AAE(a,b,c);Ie(Gn(a));}a.gw=c;a.le=b;}
function MK(a){var b,c,d;b=a.cE;c=a.cx.cu;d=a.bh;b.iS=c;if(b.e9.hU!=c&&b.d1)AB5(b,d);Wk(a.eV);Io(a.c8);MD(a);}
function AAE(a,b,c){var d,e,f,g,h,i,j,k;d=a.bR;e=c*d;Cc(c,d);f=a.cE.cf;d=f===null?0.0:f.rM;if(!(e===d&&BV(b,a.le))){Io(a.c8);Nq(a.eV);g=a.d.f.A.data;h=g.length;i=0;while(i<h){EG(g[i]);i=i+1|0;}j=a.cE;f=a.bh;j.cf=AEC(b,e,300,600,j.gE,f);f=a.cE;a.B0=f.cf;a.U=U6(f,1.25,a.bh);a.cZ=CV(a.cE.cf.oB);a.c7.eO.t.a=EU(a.cE.cf);h=EU(a.cE.cf);i=a.U;k=AAS(a.c7);f=new L;N(f);b=H(H(f,C(203)),b);BM(b,32);U(H(U(H(U(H(E9(b,e),C(204)),h),C(167)),i),C(205)),k);$rt_globals.console.info($rt_ustr(M(f)));if(A36){h=LY(a.cE.cf,a.U);b=
new L;N(b);U(H(b,C(206)),h);$rt_globals.console.info($rt_ustr(M(b)));}a.d.h9=G2(F0(a),a.d.z,a.bh.ck,a.fF);HB(a);MD(a);}}
function ALe(a){Nq(a.eV);RN(a.cE);Io(a.c8);}
function N1(a){return Bb(CH(a.d.f)+5|0,a.U);}
function K0(a){return Bd(N1(a)-a.j.a|0,0);}
function Ws(a){return Bd(a.ie-FL(a)|0,0);}
function FL(a){var b;b=!a.cc?0:a.cZ+a.ch|0;return Bd(1,(a.j.b-a.cW|0)-b|0);}
function H7(a){return a.cc?a.cW:a.cW-a.ch|0;}
function Eh(a){return a.j.a;}
function I$(a,b){var c,d,e;c=a.d.f;if(Xa(c)&&b-c.wb>0.03125?1:0){d=a.tI;e=a.d.f.cq;if(d!=e){a.tI=e;Ua(a);}}Wg(a);d=Xk((a.bv+a.Dr|0)-a.AQ|0,K0(a));e=a.bv==d?0:1;if(e)F2(a,d);return !Ww(a.c7,b)&&!e&&!a.z1?0:1;}
function Iy(a,b){var c,d;b=Xk(b,Ws(a));c=a.d;d=b==c.dA?0:1;if(d)c.dA=b;if(d){c=a.uP;if(c!==null)c.l();}}
function F2(a,b){var c;if(AFd(a,b)){c=a.wO;if(c!==null)c.l();}}
function AFd(a,b){var c,d;c=Xk(b,K0(a));d=c==a.bv?0:1;if(d){a.bv=c;a.d.lU=c/a.U;}return d;}
function AWH(a){return BD((H7(a)+a.cd|0)+a.ch|0,a.U);}
function AWJ(a){return a.U;}
function AR9(a,b){H3(a);}
function H3(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=HE(a.j.a,a.U)+7|0;c=a.eV;if(c.data.length<b)a.eV=Tt(b,c,a.cE,a.x7,a.vG,a.d.f);B2(a.bh,0);LL(a.bh,a.g,a.j);d=(a.U-AAS(a.c7)|0)/2|0;b=a.d.h9-(Wl(a.c7)/2|0)|0;e=a.d;f=b-e.dA|0;g=!a.cc?a.cW:(a.cd+a.ch|0)+a.cZ|0;YF(a.c7,g+f|0,(d+Bb(e.w,a.U)|0)-a.bv|0);h=CH(a.d.f);i=X3(a);j=X2(a);a.x7=i;a.vG=j;k=!a.cc?a.g.b+a.cW|0:((a.g.b+a.cd|0)+a.ch|0)+a.cZ|0;l=FL(a);c=a.d.kh;m=EN(a,40.0);n=i;while(n<=j&&n<h){o=B$(a.d.f,n);p=YW(a,n);Qj(p,o,a.bh,a.U,l,a.d.dA,n,
n%a.eV.data.length|0);a.ie=Bd(a.ie,F8(o)+m|0);b=a.U;q=Bb(b,n)-a.bv|0;r=c===null?null:c.data[n];d=a.g.a+q|0;e=a.bh;g=a.d.dA;s=a.dY;t=AGx(Bj(a),n);if(t!==null){if(t.a==(-1))t.a=o.P;t.b=G2(o,t.b,a.bh.ck,a.fF);t.a=G2(o,t.a,a.bh.ck,a.fF);}o=a.d;Rc(p,d,k,e,l,b,g,s,t,o.i1,o.iF,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cx.c$;n=i;while(n<=j&&n<h&&a.lk){p=YW(a,n);q=Bb(a.U,n)-a.bv|0;r=Bj(a);if(!Dr(r))u=0;else{o=D5(r);r=F6(r);u=o.J<=n&&n<r.J?1:0;}s=a.dY;r=s.bo;v=r.t8;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.lg;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=Jh(s.dW,s,x[n].gM);break a;}}if(w)v=r.gz;}}AD0(p,a.bh,k,a.g.a+q|0,a.U,e,a.d.dA,l,v);n=n+1|0;}if(a.jE){y=Bc(j+1|0,h);AG9(a,Bb(a.U,y)-a.bv|0,l);}AGV(a);AF1(a,i,j);if(a.kG)AIV(a,i,j,h);if(a.nQ&&f>=(( -Wl(a.c7)|0)/2|0)){e=a.c7;p=a.j;if(ADE(e.eO.u,0,0,p))X9(a.c7,a.bh,a.g);}AGs(a);AFv(a);Gf(a.bh);}
function AIV(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.kh;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dY;h=Jh(h.dW,h,g.gM);}else h=e!==null?a.dY.bo.ed:a.dY.bo.gz;if(!(a.d.w!=b&&g===null)){g=a.hK;i=a.cc;g.b=!i?(a.ch-a.cd|0)-a.d$|0:((a.ch+a.cZ|0)+a.cd|0)-a.d$|0;j=a.U;g.a=j;i=i?0:(a.cW-a.ch|0)+a.cd|0;j=Bb(j,b)-a.bv|0;k=a.bh;l=a.g;Bu(k,l.b+i|0,l.a+j|0,g,h);}b=b+1|0;}}
function AF1(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.j.a;e=Bc(d,Bb(CH(a.d.f),a.U)-a.bv|0);f=a.c8;g=a.bv;h=a.d;i=h.kh===null?h.w:(-1);j=a.bh;k=a.dY;LL(j,f.f4,f.fl);Wi(f,j,b,d);Xl(f,b,j);Wf(f,g,e,k,j);l=k.jG;if(e<d){h=f.f4;Bu(j,h.b,h.a+e|0,BD(f.fl.b,d-e|0),l.ju);}if(b<=i&&i<=c){k=k.jG;c=i/20|0;h=f.c4;l=Bw(h,c%h.m|0);h=f.f4;d=Bb(f.c4.m,f.g5);c=l.fi.a;b=((l.o1.a-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%Df(l.cL)|0)|0;c=i%l.d9|0;e=l.cw;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.hM,l.fi.b,e);f=l.jb;c=i%l.d9|0;d=l.cw;Cs(f,0.0,
Bb(c,d),l.fi.b,d);Li(l,j,b,h,k.rO,k.pL);}Gf(j);}
function X3(a){return Bc(a.bv/a.U|0,CH(a.d.f)-1|0);}
function X2(a){return Bc(((a.bv+Eh(a)|0)-1|0)/a.U|0,CH(a.d.f)-1|0);}
function AUq(a,b){return Bb(a.U,b)-a.bv|0;}
function AT8(a){return a.g;}
function AZF(a){return a.j;}
function MD(a){St(a.c8,a.cE.cf,a.U,a.cx.cu);}
function YW(a,b){var c;c=a.eV.data;return c[b%c.length|0];}
function ZZ(a,b){var c,d,e,f;c=ES(0,J(a.fn),Pr(b));if(!c)b=null;else{b=C(63);if(c<0){b=new BR;X(b);K(b);}if(c!=1){d=b.b5.data.length;if(d&&c){e=B1(Bb(d,c));d=0;f=0;while(f<c){SA(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=NM(e);}else b=A2Z;}}return b;}
function QB(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BK(i);k=A2r(i).data;Ih(j,c);c=0;l=k.length;if(c>l){f=new BR;X(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.cq=o.cq+1|0;p=Q(Hq,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AWS(h[m],n[m],k[m],b[m],f.bn,f.by);m=m+1|0;}BG(o.iM,p);c=0;while(c<i){b=e.data;Lg(o,h[c],n[c],k[c],b[c]);g.o8(CU(h[c]),b[c]);c=c+1|0;}}
function AI1(a){var b;if(Dr(Bj(a)))GY(a);else{b=a.d;OC(b.f,b.w,b.z);}HB(a);En(a);return 1;}
function Dx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.er)return 0;if(Dr(Bj(a)))GY(a);c=Nh(Yp(b,C(207),C(21)),C(208),(-1));d=c.data;b=a.d;e=b.f;f=b.w;g=b.z;ACl(e,f,g,c);h=d.length;if(!h)b=A2Z;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B1(i+Bb(h-1|0,J(C(208)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(208))){m=l+1|0;c[l]=P(C(208),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=NM(k);}F5(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CL(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);Ga(a);En(a);return 1;}
function GY(a){var b,c,d;b=D5(Bj(a));c=a.d.f;d=Bj(a);OO(c,d,ZF(c,d));CL(a,b.J,b.ba,0);Ga(a);En(a);}
function Ga(a){var b,c;(Bj(a)).du=0;b=(Bj(a)).bN;c=a.d;Ca(b,c.w,c.z);b=(Bj(a)).bB;c=a.d;Ca(b,c.w,c.z);}
function AG9(a,b,c){var d,e;d=a.j.a;if(b<d){e=a.cx.c$;e.a=d-b|0;d=a.cc;e.b=!d?c+a.d$|0:c+a.cd|0;d=!d?(a.g.b+a.cW|0)-a.d$|0:(((a.g.b+a.ch|0)+a.cZ|0)+a.cd|0)-a.d$|0;Bu(a.bh,d,a.g.a+b|0,e,a.dY.bo.ed);}}
function AGs(a){var b;b=a.cc?a.g.b+a.cZ|0:a.g.b+a.j.b|0;JP(a.fz,a.bv,a.g.a,Eh(a),N1(a),b,a.cZ);b=!a.cc?a.g.b+a.cW|0:((a.g.b+a.cd|0)+a.ch|0)+a.cZ|0;Tv(a.fB,a.d.dA,b,FL(a),a.ie,a.g.a+Eh(a)|0,a.cZ);}
function AFv(a){var b,c;b=TR(a.fz);c=TR(a.fB);if(!(!b&&!c)){B2(a.bh,1);if(b)G1(a.fz,a.bh);if(c)G1(a.fB,a.bh);if(b)Ha(a.fz,a.bh);if(c)Ha(a.fB,a.bh);}}
function AGV(a){var b,c,d,e,f;b=a.hK;c=a.j;b.a=c.a;b.b=a.cd;d=!a.cc?a.cW-a.ch|0:(c.b-H7(a)|0)-a.cd|0;b=a.bh;c=a.g;Bu(b,c.b+d|0,c.a,a.hK,a.dY.bo.w7);b=a.hK;d=a.cc;b.b=!d?(a.ch-a.cd|0)-a.d$|0:((a.ch+a.cZ|0)+a.cd|0)-a.d$|0;e=d?0:(a.cW-a.ch|0)+a.cd|0;c=a.bh;f=a.g;Bu(c,f.b+e|0,f.a,b,a.dY.bo.ed);}
function Xk(b,c){return Bc(Bd(0,b),c);}
function Gn(a){return a.cx.gC;}
function H5(a,b){var c,d,e,f;c=FH(b);d=new L;N(d);H(H(d,C(209)),c);$rt_globals.console.info($rt_ustr(M(d)));Pv(Gn(a),FH(b));CL(a,0,0,0);c=new ZI;c.un=a;c.uo=b;d=EL();BL(d);e=new ZH;e.rB=d;d=AH_(e);e=new AA1;e.qT=c;c=b.fV;if(c!==null)c.text().then(Bl(e,"f"),Bl(d,"f"));else{b=b.hP.getFile();f=new AA3;f.sv=e;f.sw=d;b.then(Bl(f,"f"),Bl(d,"f"));}}
function IA(a,b,c,d,e){if(IN(a,e))return 1;if(c&&d)return 1;if(c)F2(a,a.bv+((Bb(b,a.U)*12|0)/10|0)|0);else if(!d){H6(a,a.d.w+b|0,e);Xm(a);}return 1;}
function UK(a,b,c,d){var e,f,g;if(IN(a,d))return 1;e=F0(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=Hm(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=JJ(e,b);if(c>0&&e.d7.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.d7.data[c-1|0];}}if(f>e.P){e=a.d;if((e.w+1|0)<CH(e.f))CL(a,a.d.w+1|0,0,d);}else if(f>=0)Dm(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(B$(e.f,b-1|0)).P;CL(a,a.d.w-1|0,g,d);}}Zn(a);return 1;}
function IN(a,b){if(Dr(Bj(a))&&!b){Ga(a);HB(a);return 1;}if(!(b&&Dr(Bj(a))))Ga(a);return 0;}
function CL(a,b,c,d){a.d.z=c;return H6(a,b,d);}
function H6(a,b,c){var d;d=a.d;d.w=ES(0,b,CH(d.f)-1|0);return Dm(a,a.d.z,c);}
function Dm(a,b,c){var d,e;a.d.z=ES(0,b,(F0(a)).P);a.d.h9=a.bR===0.0?0:G2(F0(a),a.d.z,a.bh.ck,a.fF);Mx(a);HB(a);if(c)(Bj(a)).du=1;d=Bj(a);e=a.d;My(d,e.w,e.z);(Bj(a)).du=0;return 1;}
function NO(a,b){var c;c=AMO(Bj(a));Dm(a,b,0);IT(Bj(a),c);}
function HB(a){Xm(a);Zn(a);}
function Xm(a){var b,c,d,e,f;b=a.bv;c=b+Eh(a)|0;d=a.d.w;e=a.U;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))F2(a,d-e|0);else if(f>(c-e|0))F2(a,(f-Eh(a)|0)+a.U|0);}
function Zn(a){var b,c,d,e,f;b=CV(a.cx.ci*30.0);c=a.d.dA;d=c+FL(a)|0;e=a.d.h9;f=e+b|0;if(e<(c+b|0))Iy(a,e-b|0);else if(f>(d-b|0))Iy(a,(f-FL(a)|0)+b|0);}
function I0(a,b){var c,d;CL(a,b.bn,b.by,0);c=Hm(F0(a),a.d.z);Ca((Bj(a)).bB,a.d.w,c);b=(Bj(a)).bN;d=a.d;Ca(b,d.w,d.z);}
function E$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.g;e=c-d.b|0;f=ES(0,((b.a-d.a|0)+a.bv|0)/a.U|0,CH(a.d.f)-1|0);g=!a.cc?a.cW:(a.cd+a.ch|0)+a.cZ|0;h=Bd(0,(e-g|0)+a.d.dA|0);b=B$(a.d.f,f);d=a.bh.ck;i=a.fF;if(!(b.eW!==null&&!b.gB))LG(b,d,i);j=b.eW;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.P;else{c=W9(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.P;else{j=US(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A37){b=new L;N(b);U(H(U(H(U(H(b,C(210)),e),C(211)),h),C(212)),m);$rt_globals.console.info($rt_ustr(M(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DU(f,k);}
function ABN(a,b){var c,d;c=a.d;d=b.bn;c.w=d;c.z=b.by;c.h9=G2(B$(c.f,d),a.d.z,a.bh.ck,a.fF);Mx(a);}
function F0(a){var b;b=a.d;return B$(b.f,b.w);}
function KU(a,b,c){var d,e;d=CV((a.U*4|0)*c/150.0);e=CV(b);if(d)F2(a,a.bv+d|0);if(e)Iy(a,a.d.dA+e|0);return 1;}
function Wr(a,b,c){(Bj(a)).du=0;return 1;}
function Op(a,b,c){var d;if(c)return null;d=F3(a.fz,b.h,a.rJ,1);if(d!==null)return d;d=F3(a.fB,b.h,a.xQ,0);if(d!==null)return d;JI(a);ABN(a,E$(a,b.h));Mb(a.d);if(!b.bK&&!(Bj(a)).du){b=(Bj(a)).bN;d=a.d;Ca(b,d.w,d.z);}(Bj(a)).du=1;b=Bj(a);d=a.d;My(b,d.w,d.z);b=new ABa;b.x4=a;return b;}
function OH(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cG){b=b.h;e=E$(a,b);f=Jv(a.d.f,e.bn,e.by);g=V9(a,f);h=Nr(a.fu,Ep(a.d),GJ(a.d));if(h!==null){i=a.d;c=e.bn;d=e.by;e=new AAj;e.BF=a;e.BG=b;e.BE=g;h.vy(i,c,d,e,a.jt);}else{e=Cy(a.d.f.dO,f);if(e!==null){I0(a,e);c=1;}else{e=Cy(a.d.f.dw,f);if(e!==null&&!FR(e)){if(e.m!=1){TO(a.kZ,b,e,a,g);c=1;}else{I0(a,Bw(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(E$(a,b.h)).bn;g=B$(a.d.f,c);c=Gx(g,a.d.z);d=Hm(g,a.d.z);b=Nc(g,c);if((d-1|0)==g.P){Ca((Bj(a)).bN,
a.d.w,Pr(g));Ca((Bj(a)).bB,a.d.w,g.P);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b5.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=Gx(g,c-1|0);d=Hm(g,c);}else{if(d!=j){Sc(Bj(a),a.d.w);break b;}c=Gx(g,d+1|0);d=Hm(g,c);}}}Ca((Bj(a)).bN,a.d.w,c);(Bj(a)).du=1;CL(a,a.d.w,d,0);(Bj(a)).du=0;JI(a);}}break a;case 3:break;default:break a;}Sc(Bj(a),a.d.w);Up(a.d.hg);JI(a);}}return 1;}
function P6(a,b){var c,d,e,f,g,h,i,j;c=a.cx.cK;if(Gd(a.fz,b.h,c))return 1;if(Gd(a.fB,b.h,c))return 1;d=a.c8;if(GH(b.h,d.f4,d.fl)&&Gu(c)?1:0)return 1;e=b.h;f=!a.cc?a.cW:(a.ch+a.cd|0)+a.cZ|0;a:{d=a.g;f=d.b+f|0;g=d.a;h=FL(a);i=Eh(a);j=e.b;if(f<=j&&j<(f+h|0)){f=e.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Gu(c);if(b.cG){e=E$(a,b.h);e.by=Gx(B$(a.d.f,e.bn),e.by);b=a.d.f;if(!KD(b.dO,e)&&!KD(b.dw,e)?0:1)return DF(c,C(213));}return DF(c,C(181));}
function AYo(a,b){var c,d,e,f,g;c=b.cG;if(c&&b.bk==65){c=CH(a.d.f)-1|0;d=Gh(a.d.f,c);Ca((Bj(a)).bN,0,0);Ca((Bj(a)).bB,CH(a.d.f)-1|0,d);return 1;}if(c&&b.bk==80){JR(a.d);return 1;}if(!a.er&&c&&b.bk==90){if(Dr(Bj(a)))Ga(a);b=a.d.f;b.cq=b.cq+1|0;e=b.iM;d=e.m;if(!d)e=null;else{f=(EJ(e,d-1|0)).data;e=O$(b,f[0]);c=1;while(c<f.length){O$(b,f[c]);c=c+1|0;}}if(e!==null){CL(a,e.b,e.a,0);En(a);}return 1;}if(!c&&!b.dm){if(Bm(b.d_,C(214))){Dx(a,C(215));Dm(a,a.d.z-1|0,0);c=1;}else if(Bm(b.d_,C(216))){Dx(a,C(217));Dm(a,a.d.z
-1|0,0);c=1;}else if(Bm(b.d_,C(35))){Dx(a,C(218));Dm(a,a.d.z-1|0,0);c=1;}else if(Bm(b.d_,C(219))){Dx(a,C(220));Dm(a,a.d.z-1|0,0);c=1;}else if(Bm(b.d_,C(221))){Dx(a,C(222));Dm(a,a.d.z-1|0,0);c=1;}else if(!Bm(b.d_,C(223)))c=0;else{Dx(a,C(224));Dm(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dm&&!b.cG)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.o2.data[c];if(e!==null)e.l();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bk){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AFp(a,b))return 1;if(AGj(a,b))return 1;c=b.cG;if(c&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bk;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dm&&!b.kB)return J(b.d_)>0&&Dx(a,b.d_)?1:0;return 0;}return 0;}
function Wg(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=X3(a);d=X2(a);if(b.fy!=3&&b.hi==3){e=Yj(b.m9);f=new RZ;f.wX=c;f.wY=d;g=new Ti;g.ts=f;while(!g.md&&XX(e,g)){}if(!g.md&&Bm(C(182),Ep(b))){c=Bd(0,c-100|0);d=Bc(CH(b.f)-1|0,d+100|0);BG(b.m9,BD(c,d));h=BK(3);i=h.data;i[0]=Fi(b.f,c);e=b.f;j=0;d=Bc(d+1|0,e.A.data.length);k=0;while(k<d){j=j+Gh(e,k)|0;if(k!=(e.A.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.w3=EK();e=b.eP;l=new Xv;l.pv=b;i=Q(B,3);m=i.data;m[0]=E5(b.f);m[1]=h;b=b.f.db;g=BN();WG(b,b.c9,g);h
=BK(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bw(g,o);d=k+1|0;n[k]=b.bV;q=d+1|0;n[d]=b.bZ;k=q+1|0;n[q]=b.fq;o=o+1|0;}m[2]=h;CQ(e,l,C(225),i);}}}
function ABJ(a){JR(a.d);}
function Ua(a){AHi(a.d);}
function Hw(a,b,c){var d,e,f,g,h,i;if(c&&a.er)return 0;d=D5(Bj(a));e=d.J;if(Dr(Bj(a))){f=a.d.f;g=Bj(a);h=ZF(f,g);if(c)OO(f,g,h);if(c){CL(a,d.J,d.ba,0);Ga(a);En(a);}}else{h=FP(Fu(a.d.f.A.data[e]),C(208));i=Bc(CH(a.d.f)-1|0,e);Ca((Bj(a)).bB,i,0);if(e>=(CH(a.d.f)-1|0))Ca((Bj(a)).bB,i,Gh(a.d.f,i));else Ca((Bj(a)).bN,i+1|0,0);if(c)GY(a);else CL(a,e,0,0);}b.i(h);return 1;}
function AGj(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.er)return 0;a:{switch(b.bk){case 8:if(Dr(Bj(a))){GY(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OC(b.f,e,c);}else{e=b.w-1|0;c=Gh(b.f,e);b=a.d.f;Mi(b,e);F5(b,e,Gh(b,e),1,C(208));}En(a);c=CL(a,e,c,0);}}break a;case 9:if(!b.bK){if(!Dr(Bj(a)))Dx(a,a.fn);else{f=D5(Bj(a));g=F6(Bj(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BK(e);i=h.data;j=Q(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fn;d=d+1|0;e=l;}b=new ZA;m=a.d;AFR(b,m.w,m.z);m=new WH;m.xL
=a;QB(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fn)|0;g.ba=g.ba+J(a.fn)|0;NO(a,a.d.z+J(a.fn)|0);En(a);}c=1;}else b:{if(!Dr(Bj(a))){b=a.d;f=B$(b.f,b.w);if(f.s.data.length>0){g=ZZ(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.w;b=DU(e,m.z);n.cq=n.cq+1|0;o=n.iM;h=Q(Hq,1);h.data[0]=AWS(e,0,1,g,b.bn,b.by);BG(o,h);Lg(n,e,0,1,g);GW(f,0,J(g));NO(a,a.d.z-J(g)|0);}}else{b=D5(Bj(a));f=F6(Bj(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BK(c);k=h.data;j=Q(BC,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.J){g=B$(a.d.f,p);if(g.s.data.length>0){g=ZZ(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JV(h,c);j=C_(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.J){f.ba=Bd(0,f.ba-J(g)|0);NO(a,a.d.z-J(g)|0);}d=d+1|0;}b=DU(l,e);f=new Yt;f.u4=a;QB(a,h,0,1,j,b,f);}En(a);c=1;}break a;case 13:if(Dr(Bj(a)))GY(a);b=a.d;EG(B$(b.f,b.w));b=a.d;AHT(b.f,b.w,b.z);En(a);c=CL(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AI1(a);}return c;}
function AFp(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.cG?H6(a,HE(a.bv,a.U),b.bK):IA(a,2-ZQ(Eh(a),a.U)|0,0,b.dm,b.bK);break a;case 34:c=!b.cG?IA(a,ZQ(Eh(a),a.U)-2|0,0,b.dm,b.bK):H6(a,((a.bv+Eh(a)|0)/a.U|0)-1|0,b.bK);break a;case 35:if(!IN(a,b.bK)&&!Dm(a,(F0(a)).P,b.bK)){c=0;break a;}c=1;break a;case 36:if(!IN(a,b.bK)&&!Dm(a,0,b.bK)){c=0;break a;}c=1;break a;case 37:c=b.cG;if(c&&b.dm){JI(a);d=a.d.hg;e=d.dH;if(e<=0)d=null;else{f=d.fe.data;c=e-1|0;d.dH=c;d=f[c];}if(d===null)c=1;else{CL(a,MZ(d),KN(d),0);IT(Bj(a),
d.lI);c=1;}break a;}c=UK(a,(-1),c,b.bK);break a;case 38:c=IA(a,(-1),b.cG,b.dm,b.bK);break a;case 39:c=b.cG;if(c&&b.dm){d=a.d.hg;e=d.dH;if(e==(d.fa-1|0))d=null;else{f=d.fe.data;c=e+1|0;d.dH=c;d=f[c];}if(d===null)c=1;else{CL(a,MZ(d),KN(d),0);IT(Bj(a),d.lI);c=1;}break a;}c=UK(a,1,c,b.bK);break a;case 40:c=IA(a,1,b.cG,b.dm,b.bK);break a;default:}c=0;}if(c&&b.bK){b=(Bj(a)).bB;d=a.d;Ca(b,d.w,d.z);}if(c)Mb(a.d);return c;}
function JI(a){var b,c,d,e,f,g,h;b=a.d;c=b.hg;d=c.dH;c=d<0?null:c.fe.data[d];if(c!==null&&b.w==MZ(c)&&a.d.z==KN(c))return;c=a.d;e=c.hg;b=new L7;d=c.w;f=c.z;c=Bj(a);b.np=DU(d,f);g=AMO(c);b.lI=g;g.du=0;f=e.dH;h=e.fa;if(f==(h-1|0))YY(e,b);else{d=f+1|0;while(d<h){Up(e);d=d+1|0;}YY(e,b);}e.dH=e.dH+1|0;}
function En(a){a.d.f.wb=Kw(Gn(a));}
function Ji(a,b){var c,d,e,f;a.Ay=null;MB(a.c8,null);ACd(a.d);c=a.d;a.d=b;SF(c,null,null);SF(b,a,Gn(a));d=(Cz(a.fu.x6)).data;e=d.length;f=0;while(f<e){d[f].o8(c,b);f=f+1|0;}a.bv=Gs(b.lU*a.U);}
function V9(a,b){var c;c=MQ(a.d.f,b);if(c===null)return C(21);return c.v;}
function KV(a,b){var c,d,e,f,g;a.d.kh=b;if(b===null){Bs(Bz(),C(226));MB(a.c8,null);}else{b=b.data;c=DE(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gM<<24>>24;e=e+1|0;}MB(a.c8,c);}}
function UV(a,b){a.d.pJ=b;}
function Bj(a){return a.d.rT;}
function YE(a){var b;b=a.mB;if(b!==null)b.i(a);}
function ACS(){var a=this;B.call(a);a.ko=null;a.oz=null;a.hF=null;}
function AXG(a,b){var c=new ACS();AM1(c,a,b);return c;}
function AM1(a,b,c){var d,e;a.ko=b;a.oz=c;d=null;e=new Zt;e.tv=a;b.m_(d,e);b=null;d=new Zu;d.rY=a;c.m_(b,d);}
function Sm(a,b,c){var d,e,f,g,h,i,j;d=a.hF;if(d!==null&&d.h6!==null){e=b!==a.ko?0:1;f=b.jM();g=(b.km()+f|0)/2|0;h=g-f|0;d=a.hF;d=d.h6.data[GG(d,g,e)];i=g-(!e?d.hq:d.hr)|0;j= -b.gH(f)|0;c.oZ(Bb(((!e?d.hr:d.hq)+i|0)-h|0,c.nm())+j|0);return;}}
function Yd(){B.call(this);this.yO=null;}
function AKM(a,b){ACq(a.yO,b);}
function Ye(){B.call(this);this.uu=null;}
function AWQ(a,b){ACq(a.uu,b);}
function Yf(){B.call(this);this.qz=null;}
function AQ$(a,b){return AIe(a.qz,b);}
function G5(){var a=this;B.call(a);a.lR=null;a.tB=null;a.sG=null;}
function A38(a,b){var c=new G5();Ke(c,a,b);return c;}
function A39(a,b,c){var d=new G5();AA2(d,a,b,c);return d;}
function Ke(a,b,c){AA2(a,b,null,c);}
function AA2(a,b,c,d){a.lR=b.cg;a.tB=c;a.sG=d;}
function AOv(a,b){var c,d;if(b.cG&&b.bk==79){c=a.tB;if(c!==null&&b.bK)Zq(a.lR,c);else M7(a.lR,a.sG);d=1;}else d=0;return d;}
function Ya(){B.call(this);this.xN=null;}
function ASd(a,b){var c,d;c=a.xN;d=DN(c.n,c.G)?c.G:!DN(c.n,c.H)?null:c.H;if(d!==null){H5(d,b);c.jv=null;c.lF.hF=null;c.e8.ew=null;}}
function Yc(){B.call(this);this.t$=null;}
function AXK(a,b){b=b;return AFs(a.t$,b);}
var Dj=G(0);
function ABb(){var a=this;B.call(a);a.hj=null;a.cQ=null;a.d3=null;}
function K6(a,b){var c;c=a.d3;if(c!==b)a.d3=Ct(c,b);}
function Fr(a){var b;b=a.d3;if(b!==null){NA(b);K6(a,null);}}
function Es(a,b){Ui(a.cQ,0,b);}
function Kg(a,b){Zo(a.cQ,b);}
function Mg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.cQ.m-1|0;while(c>=0){d=Bw(a.cQ,c);d.T.dh(b);e=d.Q;f=d.di.jA;if(!LF(e)){if(!ZY(e)&&!(!e.gG&&e.dK!==null)){e.gG=0;Yy(e);g=e.ee;h=(g.dd+g.es+5.0)/10.0;i=CB(e.fU,e.kW);g=b.ck;j=e.ee;k=e.hX;l=h*2.0;Ck(g,j);m=i+LW(g,k,l)|0;e.hY=m;m=ES(0,m,e.j.b);if(m){g=DS(b,m,e.j.a,e.fU.cu);Ck(g,e.ee);j=e.hX;l=i;h=l+h;k=e.ee;n=k.dd;BS(g,j,h,l+n-(n+k.es)/16.0);j=e.dK;if(j===null){j=CT(b);e.dK=j;}CK(j,g);Eq(g);Cs(e.lY,0.0,0.0,Cb(e.dK),Df(e.dK));}}g=f.vW;j=e.dK;if(j===null)R7(e,b,0,
e.j.b,g);else{i=Cb(j);f=f.yx;j=e.g;m=j.b;o=j.a;j=e.dK;DW(b,m,o,j.fw,e.lY,j,f,g,e.fU.cu);m=e.j.b;if(i<m)R7(e,b,i,m-i|0,g);}}B2(b,1);i=CB(d.bq,2.0);m=LF(d.Q);e=d.bq;f=e.c$;e=e.ox;o=m?0:d.Q.j.a;g=d.T.j;V(e,g.b,g.a+o|0);AEl(b,e,!m?d.Q.g:d.T.g,d.di.jA.nl, -i|0,f);e=d.T;AGw(b,e.j,e.g,i,o,RF(d.di.kg,d.bq.ci),d.di.kg.oo,f);c=c+(-1)|0;}b=a.d3;if(b!==null)Gy(b);}
function ZS(a){var b,c;b=a.d3;if(b!==null){b=B4(b.ca);while(B5(b)){MS(B7(b));}}c=0;while(true){b=a.cQ;if(c>=b.m)break;b=Bw(b,c);b.Q.gG=1;b.T.l5();c=c+1|0;}}
function AJX(a,b){var c,d,e,f,g,h,i;c=a.d3;if(c!==null&&L8(c,b))return 1;d=0;while(true){c=a.cQ;if(d>=c.m)break;a:{e=Bw(c,d);f=b.h;if(Cd(e.Q,f))g=DF(e.bq.cK,null);else{g=CB(e.bq,7.0);h=CB(e.bq,25.0);if(KP(e,f.b,g)){i=PP(e,f.b,h);if(K2(e,f.a,g)){g=DF(e.bq.cK,M0(i,C(227)));break a;}if(Kz(e,f.a,g)){g=DF(e.bq.cK,M0( -i|0,C(227)));break a;}}if(M$(e,f.a,g)){h=AAN(e,f.a,h);if(NL(e,f.b,g)){g=DF(e.bq.cK,M0(h,C(228)));break a;}if(Kb(e,f.b,g)){g=DF(e.bq.cK,M0( -h|0,C(228)));break a;}}g=0;}}b:{c:{if(!g){if(!Cd(e.T,b.h))break c;if
(!e.T.bF(b)&&!DF(e.bq.cK,null))break c;}g=1;break b;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function AMd(a,b,c,d){var e,f,g,h;e=a.d3;if(e!==null&&KX(e,b,c,d))return 1;f=0;while(true){e=a.cQ;if(f>=e.m)break;a:{b:{g=Bw(e,f);if(!Cd(g.Q,b.h)){c:{d:{e:{e=b.h;h=CB(g.bq,7.0);if(KP(g,e.b,h)){if(K2(g,e.a,h))break e;if(Kz(g,e.a,h))break e;}if(!M$(g,e.a,h))break d;if(!NL(g,e.b,h)&&!Kb(g,e.b,h))break d;}h=1;break c;}h=0;}if(!h){if(!Na(g,b))break b;if(!g.T.ce(b,c,d))break b;}}h=1;break a;}h=0;}if(h)return 1;f=f+1|0;}return 0;}
function APK(a,b,c){var d,e,f,g,h,i,j,k;d=a.d3;if(d!==null){d=NH(d,b,c);if(d!==null)return d;}e=0;while(true){d=a.cQ;if(e>=d.m)return null;a:{f=Bw(d,e);if(!c){b:{d=b.h;if(!LF(f.Q)&&Cd(f.Q,d)){g=f.T.g;h=g.b;i=d.b;h=h-i|0;j=g.a;k=d.a;j=j-k|0;d=f.Q.g;i=d.b-i|0;k=d.a-k|0;d=new Bh;g=new Te;g.sy=f;g.sx=i;g.sA=k;g.sz=d;g.sC=h;g.sB=j;}else{h=CB(f.bq,7.0);i=CB(f.bq,25.0);if(KP(f,d.b,h)){j=PP(f,d.b,i);if(K2(f,d.a,h)){g=Jo(f,d,j,(-1));break b;}if(Kz(f,d.a,h)){g=Jo(f,d,j,1);break b;}}if(M$(f,d.a,h)){i=AAN(f,d.a,i);if(NL(f,
d.b,h)){g=Jo(f,d,(-1),i);break b;}if(Kb(f,d.b,h)){g=Jo(f,d,1,i);break b;}}g=null;}}if(g!==null)break a;}g=Cd(f.Q,b.h)?A3$:!Na(f,b)?null:f.T.bX(b,c);}if(g!==null)break;e=e+1|0;}return g;}
function AYf(a,b,c){var d,e,f;d=a.d3;if(d!==null&&DC(d))return 1;e=0;while(true){d=a.cQ;if(e>=d.m)break;a:{b:{d=Bw(d,e);if(!Cd(d.Q,b.h)){if(!Na(d,b))break b;if(!d.T.cR(b,c))break b;}f=1;break a;}f=0;}if(f)return 1;e=e+1|0;}return 0;}
function AQE(a,b,c){var d,e,f;d=0;while(true){e=a.cQ;if(d>=e.m)break;f=Bw(e,d);e=f.T;e.eK(e.g,e.j,c);e=f.Q;if(e.hS!==null){e.ee=null;e.hY=0;e.gG=1;}Kq(f);d=d+1|0;}}
function XJ(){var a=this;B.call(a);a.b$=null;a.gC=null;a.cK=null;a.bP=null;a.ci=0.0;a.cu=0;a.eG=null;a.c3=null;a.c$=null;a.ox=null;a.Aj=null;a.Ak=null;}
function KE(a){var b;b=a.eG;if(b!==null)b.wV();}
function Lc(a){var b;b=a.eG;if(b!==null)b.z8();}
function KF(a,b){var c;c=a.gC.d6!==(Ej()).activeElement?0:1;if(c)Lc(a);a.eG=b;if(c)KE(a);}
function Gk(a,b){Lc(a);a.eG=b;KE(a);}
function W6(a,b){if(a.eG===b)a.eG=null;}
function DN(a,b){return b!==a.eG?0:1;}
function JK(a){return a.b$.ck;}
function HS(a,b){return Gw(a.b$,b.je,Cc(b.hL,a.ci));}
function CB(a,b){return Cc(b,a.ci);}
function AAD(a,b){if(a.cu==b)return 0;a.cu=b;Ie(a.gC);return 1;}
function N_(a,b){var c;c=a.b$;if(!a.cu)c.n6=b;else c.oV=b;Ie(a.gC);}
function N9(){B.call(this);this.zh=null;}
function AX9(a,b,c,d){var e,f,g,h;e=a.zh;f=0;a:{while(true){g=e.cQ;if(f>=g.m)break;if((Bw(g,f)).T.dJ(b,c,d)){h=1;break a;}f=f+1|0;}h=0;}return h;}
function AEq(){var a=this;B.call(a);a.eO=null;a.mh=0.0;a.im=0.0;a.gW=0;}
function APa(){var a=new AEq();AUn(a);return a;}
function AUn(a){var b;b=Wy(0,0,2,20);a.eO=b;a.mh=0.5;a.im=0.0;Is(187,187,187,255,b.V);}
function AAS(a){return a.eO.t.a;}
function Wl(a){return a.eO.t.b;}
function Ww(a,b){var c,d;a:{c=a.gW;if(b>a.im)while(true){d=a.im+a.mh;a.im=d;a.gW=a.gW?0:1;if(b>d)continue;else break a;}}return a.gW==c?0:1;}
function YF(a,b,c){V(a.eO.u,b,c);}
function Sj(a,b){a.im=b+a.mh*1.25;a.gW=1;}
function X9(a,b,c){if(a.gW)Uc(a.eO,b,c.b,c.a);}
function Nz(){var a=this;B.call(a);a.fX=null;a.f=null;a.n5=null;a.rT=null;a.hg=null;a.j4=null;a.eP=null;a.kh=null;a.w=0;a.z=0;a.h9=0;a.i1=null;a.iF=null;a.m9=null;a.fy=0;a.hi=0;a.hD=0;a.i_=Fq;a.w3=Fq;a.yj=Fq;a.pJ=0;a.Bq=0;a.dA=0;a.lU=0.0;a.fo=0;}
function A0j(a,b,c){var d=new Nz();AIm(d,a,b,c);return d;}
function A0u(a,b,c){var d=new Nz();ABy(d,a,b,c);return d;}
function AIm(a,b,c,d){var e,f;e=J(b);BL(b);f=new PW;f.v9=b;ABy(a,(AHv(e,f)).me,c,d);}
function ABy(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rT=ALa();f=new XB;f.fe=Q(L7,16);f.fa=0;f.dH=(-1);a.hg=f;a.i1=null;a.iF=BN();a.m9=BN();a.fy=1;a.hi=1;a.hD=1;a.dA=0;a.lU=0.0;a.fo=0;a.fX=d;a.n5=c;c=new Ue;g=e.length;b=Q(Dw,Bd(1,g));if(!g)b.data[0]=QR(C(21));h=b.data;i=0;while(i<g){h[i]=QR(e[i]);i=i+1|0;}d=new R0;f=new L4;Sn(f);d.eQ=f;c.ey=d;c.dO=U$();c.dw=U$();c.iM=BN();if(!h.length){c=new BR;X(c);K(c);}c.A=b;j=Yw(c);c.db=AHr(AXR(KO(0,j,0),null,null));a.f=c;}
function Ep(a){var b;b=a.n5;if(b===null){b=a.fX;if(b===null)b=C(181);else{b=b.gi;b=b===null?C(181):!D_(b,C(229))&&!D_(b,C(230))&&!D_(b,C(231))&&!D_(b,C(232))&&!D_(b,C(233))&&!D_(b,C(234))?(D_(b,C(235))?C(182):D_(b,C(236))?C(237):!D_(b,C(238))?C(181):C(184)):C(183);}}return b;}
function GJ(a){var b;b=a.fX;return b===null?null:b.kc;}
function NB(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hi=3;a.hD=3;a.fy=3;c=CM(b[0]);d=EQ(b[1]);CM(b[2]);if(b.length<5)Ym(a.f,c,d);else{e=CM(b[3]);f=e.data;g=EQ(b[4]);P9(a.f,c,d,e,g,0);XV(a,JV(e,f.length),Nf(g));}if(a.fo){h=EH(a);i=IW(EK(),a.i_);j=new L;N(j);H(GV(H(H(j,h),C(239)),i),C(240));$rt_globals.console.info($rt_ustr(M(j)));}h=a.j4;if(h!==null)YE(h);}
function Mb(a){var b;Vq(a,DU(a.w,a.z),Jv(a.f,a.w,a.z));if(!(a.i1!==null&&!FR(a.iF))){b=a.z;if(b>0)Vq(a,DU(a.w,b-1|0),Jv(a.f,a.w,a.z-1|0));}}
function Vq(a,b,c){var d,e,f,g,h,i,j,k;ACd(a);d=Cy(a.f.dO,c);if(d!==null)c=d;a:{e=Cy(a.f.dw,c);if(e!==null){a.i1=MQ(a.f,c);c=B4(e);while(true){if(!B5(c))break a;f=B7(c);BG(a.iF,MQ(a.f,f));}}}c=a.j4;if(c!==null){g=b.bn;h=b.by;b=c.fu;f=Ep(c.d);e=GJ(c.d);i=(Cz(b.yC)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.yF(f,e)){b=b.Df;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Or;e.BM=c;e.BO=f;e.BK=g;e.BL=h;b.vy(f,g,h,e,c.jt);}}}
function ACd(a){a.i1=null;Ig(a.iF);}
function XV(a,b,c){var d,e,f,g,h;if(a.eP!==null){a.yj=EK();d=a.f.cq;e=a.eP;f=new RM;f.uV=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BK(1);b.data[0]=d;h[2]=b;CQ(e,f,C(241),g);}}
function SF(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.j4=b;a.eP=c;if(c===null){d=a.f.A.data;e=d.length;f=0;while(f<e){WN(d[f]);f=f+1|0;}}else if(a.fy==1){a.i_=EK();b=Ep(a);e=BV(b,C(182));f=BV(b,C(184));d=E5(a.f);g=d.data.length;h=!e?5120:10240;i=ACO(b);if(f)IY(a,d,i);else if(g<=h)IY(a,d,i);else if(!e){AAR(a,Nf(d),i);IY(a,d,i);}else{AAR(a,Nf(d),i);j=Nf(d);c=a.eP;k=new Xu;k.wi=a;l=Q(B,2);m=l.data;m[0]=j;j=BK(1);j.data[0]=i;m[1]=j;CQ(c,k,C(242),l);a.hi=2;IY(a,d,i);}}}
function AAR(a,b,c){var d,e;d=a.eP;e=new Rd;e.xK=a;CQ(d,e,C(243),I(B,[b,DD([c,250])]));a.hD=2;}
function IY(a,b,c){var d,e,f,g;d=a.eP;e=new ACe;e.qZ=a;f=Q(B,2);g=f.data;g[0]=b;b=BK(1);b.data[0]=c;g[1]=b;CQ(d,e,C(244),f);a.fy=2;}
function EH(a){var b;b=a.fX;return b===null?C(21):YB(b);}
function JR(a){var b,c,d,e,f;if(a.fo){b=EH(a);c=new L;N(c);H(H(c,b),C(245));$rt_globals.console.info($rt_ustr(M(c)));}b=Ep(a);if(b===null)d=null;else{a:{e=(-1);switch(Je(b)){case -1655966961:if(!Bm(b,C(184)))break a;e=3;break a;case 3401:if(!Bm(b,C(237)))break a;e=2;break a;case 98723:if(!Bm(b,C(183)))break a;e=1;break a;case 3254818:if(!Bm(b,C(182)))break a;e=0;break a;case 3556653:if(!Bm(b,C(181)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(246);break b;case 2:d=C(247);break b;case 3:d
=C(248);break b;case 4:d=C(249);break b;default:d=null;break b;}d=C(250);}}if(d===null)YE(a.j4);else{a.i_=EK();b=a.eP;c=new YC;c.pp=a;f=Q(B,1);f.data[0]=E5(a.f);CQ(b,c,d,f);}}
function AHi(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.fo){b=EH(a);c=new L;N(c);H(H(c,b),C(251));$rt_globals.console.info($rt_ustr(M(c)));}b=Ep(a);if(b!==null&&!Bm(C(181),b)){if(Bm(C(184),b)){JR(a);Ib(a.f);}else{c=a.f.db;d=R6(c,c.c9);if(d===null){Ne(a);Ib(a.f);return;}e=DD([Dg(d),Dd(d),d.bW.fq]);f=E5(a.f);g=BK(1);g.data[0]=ACO(b);c=a.f.ey;if(c.fD===null){h=BK(0);i=B1(0);}else{j=AZf(AMA(d.cl,c.eQ),d);Pu(j);h=j.lP;i=j.mi;}k=a.f.cq;d=a.eP;c=new UJ;c.yR=a;l=Q(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=BK(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;CQ(d,c,C(252),l);}}else Ib(a.f);}
function Ne(a){var b;b=AZf(a.f.ey,null);Pu(b);XV(a,b.lP,b.mi);}
function ABj(){var a=this;B.call(a);a.tb=null;a.zX=null;a.qa=null;a.yC=null;a.x6=null;a.xI=null;}
function Nr(a,b,c){return TP(a,Cz(a.tb),b,c);}
function Tp(a,b,c){return TP(a,Cz(a.zX),b,c);}
function TP(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.yF(c,d))return g.BX;f=f+1|0;}return null;}
function Xt(a,b,c){var d,e,f,g;d=(Cz(a.qa)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.yF(b,c))return g.BN;f=f+1|0;}return null;}
function E3(){var a=this;B.call(a);a.b4=0;a.c1=null;a.cC=null;a.en=null;a.dF=0;}
var A3_=0;var A36=0;function Qj(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cC;j=i===b&&!i.hR?0:1;if(j){a.cC=b;LG(b,c.ck,a.c1.gE);}k=HE(Bc(F8(b),e+2048|0),1024);l=a.en;m=l.data.length;n=k<=m?0:1;if(n){a.en=C_(l,k);while(m<k){a.en.data[m]=CT(c);m=m+1|0;}}o=a.c1.e9;if(!(!j&&!n)){if(A3_){l=b.gl;$rt_globals.console.info("fMeasure"+l.data);A3_=0;}if(!A36){c=o.c6;b="alphabetic";c.textBaseline=b;}else{b=o.c6;c="top";b.textBaseline=c;}a.dF=f/1024|0;p=0;while(p<k){JC(a,o,d,a.dF+p|0);p=p+1|0;}a.cC.hR=0;}e=a.en.data.length;if
(e&&f<=F8(a.cC)){f=f/1024|0;g=a.dF;if(f!=g){if(Oj(f-g|0)>=e){g=0;while(g<e){JC(a,o,d,f+g|0);g=g+1|0;}a.dF=f;}else{while(true){g=a.dF;if(g>=f)break;JC(a,o,d,g+e|0);a.dF=a.dF+1|0;}while(true){g=a.dF;if(g<=f)break;JC(a,o,d,g-1|0);a.dF=a.dF-1|0;}}}}}
function LY(b,c){return (c-EU(b)|0)/2|0;}
function Kc(b,c){return LY(b,c)+b.u7|0;}
function JC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=RD(a,e);g=a.cC;if(f>=g.s.data.length)return;h=g.gl;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b4;l=a.c1.gE;ET(b);a:{while(true){g=a.cC;if(f>=g.s.data.length)break a;m=l.data;g=I8(g,f);n=m[Ki(g)];o=!A36?Kc(n,c):LY(n,c);m=h.data;Ck(b,n);BS(b,g.v,k,o);k=m[f]-j+a.b4;if(k>1024.0)break;f=f+1|0;}}h=a.en.data;CK(h[d%h.length|0],b);}
function Rc(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.en.data.length;if(!o)return;if(g>F8(a.cC))return;p=a.cC;q=p.eW;r=p.s;s=g/1024|0;t=RD(a,g);u= -a.b4|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.en.data[s%o|0];bb=w[t];bc=z[t]+a.b4|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Bc(bf,bc)-g|0;if(bd&&y)bg=bg+a.b4|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b4:2*a.b4|0;bj=
i.b;bk=i.a;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b4:2*a.b4|0;if(g>=i.b&&(g+bg|0)<=(i.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bo.gz;if(bb===j)bo=h.bo.rL;if(k!==null){p=B4(k);d:{while(B5(p)){if(BV(B7(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bo.z0;}if(n!==null){w=n.nC;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=ACs(h.dW,h,bi,n.gM);}if(!bn&&!bl){i.a=Bc(i.a,F8(a.cC));AF0(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.b?bg:(Bc(bc,bf)-i.b|0)-(!y?a.b4:0)|0,(g
+bg|0)<=(i.a+(!y?a.b4:2*a.b4|0)|0)?0:(Bc(bc,bf)-i.a|0)-(!y?a.b4:0)|0,g-x|0,bo);}else{bp=h.kU.data[bb.b1];p=bn?h.bo.lg:Wu(bo,Pf(h,bp.mb));Cs(a.c1.h$,g-x|0,0.0,bg,v);V(a.c1.hN,bg,f);Hv(a.c1,d,ba,u+c|0,b,bp.h0,p);}if((bb.bL&12)>>2>0){bc=u+c|0;B2(d,1);p=a.c1;bq=p.nF;bq.b=bg;x=b+p.wc|0;bk=x-p.zt|0;br=p.qs;bs=x+br;ba=p.hh;Yo();M8(d,bc,bk,bq,br,bs,ba,A4a.jB.h0);B2(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AF0(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kU.data[h.b1];o=n.h0;p=Wu(m,Pf(f,n.mb));q=f.bo.lg;f=a.c1;r=f.h$;s=f.hN;t=l;u=i-j|0;v=u;w=e;Cs(r,t,0.0,v,w);V(s,u,e);Hv(a.c1,b,g,c,d,o,p);l=l+i|0;Cs(r,l-k|0,0.0,k,w);V(s,k,e);f=a.c1;c=c+i|0;Hv(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cs(r,t,0.0,i,w);V(s,i,e);Hv(a.c1,b,g,c-j|0,d,o,q);}
function Wu(b,c){if(b!==null)c=b;return c;}
function RD(a,b){var c,d,e,f,g,h,i;c=a.cC;d=c.gl;e=0;f=c.s.data.length;g=b;b=BI(e,f);if(b>0){c=new BR;X(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BI(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ABI(a){var b,c,d;b=a.en.data;c=b.length;d=0;while(d<c){AGM(b[d]);d=d+1|0;}a.en=a.c1.n$;a.cC=null;}
function AD0(a,b,c,d,e,f,g,h,i){var j,k;j=F8(a.cC);if(j)j=j+a.b4|0;if(!j)j=j-a.b4|0;k=Bd( -a.b4|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function Tt(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(E3,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.wk(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cC===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new E3;g.b4=3;g.dF=0;g.c1=d;g.en=d.n$;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)ABI(q);j=j+1|0;}return i;}
function Wk(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cC;if(e!==null)e.hR=1;d=d+1|0;}}
function Nq(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){ABI(b[d]);d=d+1|0;}}
function AF2(){A36=0;}
function AIN(){var a=this;B.call(a);a.fL=null;a.dk=null;a.eA=null;a.e2=null;a.lz=null;a.o3=null;}
function Jw(){var a=new AIN();AQa(a);return a;}
function AQa(a){a.fL=new Bh;a.dk=new Bh;a.eA=new Bh;a.e2=new Bh;a.lz=new BZ;a.o3=new BZ;}
function TR(a){var b;b=a.dk;return !Bb(b.b,b.a)?0:1;}
function IG(a,b){return GH(b,a.eA,a.e2);}
function F3(a,b,c,d){var e,f,g,h,i;e=IG(a,b);f=GH(b,a.fL,a.dk);if(!e&&!f)return null;if(!f){if(!d)c.i(Z4(a,b.b-a.eA.b|0));else c.i(R_(a,b.a-a.eA.a|0));}g=!d?a.fL.b+(a.dk.b/2|0)|0:a.fL.a+(a.dk.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new U0;b.y9=a;b.y$=c;b.y8=i;}else{b=new UZ;b.se=a;b.sc=c;b.sd=i;}return b;}
function Hx(a,b,c){if(c!==null)BT(a.lz,c);if(b!==null)BT(a.o3,b);}
function AEI(b,c){var d;d=new XG;d.u9=b;d.Aa=c;return d;}
function R_(a,b){var c,d,e;c=a.e2.a;d=a.dk.a;e=c-d|0;return AEI(Bc(Bd(0,b-(d/2|0)|0),e),e);}
function Z4(a,b){var c,d,e;c=a.e2.b;d=a.dk.b;e=c-d|0;return AEI(Bc(Bd(0,b-(d/2|0)|0),e),e);}
function JP(a,b,c,d,e,f,g){AAr(a,b,c,d,e,f,g,1);}
function Tv(a,b,c,d,e,f,g){AAr(a,b,c,d,e,f,g,0);}
function AAr(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bc(i,d);j=Bd(SB(d,d,e),i);e=e-d|0;i=d-j|0;i=i?SB(b,i,e):0;if(!h){k=a.fL;k.b=i+c|0;k.a=f-g|0;l=a.dk;l.b=j;l.a=g;l=a.eA;l.b=c;l.a=k.a;k=a.e2;k.b=d;k.a=g;break a;}k=a.fL;k.b=f-g|0;k.a=i+c|0;l=a.dk;l.b=g;l.a=j;l=a.eA;l.b=k.b;l.a=c;k=a.e2;k.b=g;k.a=d;break a;}}V(a.e2,0,0);V(a.dk,0,0);}}
function AAV(a,b){G1(a,b);Ha(a,b);}
function G1(a,b){var c;c=a.eA;Bu(b,c.b,c.a,a.e2,a.lz);}
function Ha(a,b){var c,d;c=a.dk;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fL;Bu(b,d.b+1|0,d.a+1|0,c,a.o3);b=a.dk;b.b=b.b+2|0;b.a=b.a+2|0;}
function Gd(a,b,c){return IG(a,b)&&Gu(c)?1:0;}
function AEo(){var a=this;B.call(a);a.Cc=20;a.f4=null;a.fl=null;a.ka=0.0;a.j5=null;a.h4=0;a.k8=0;a.g5=0;a.c4=null;a.lH=null;a.e1=null;a.ge=null;a.f_=0;}
function AIC(){var a=new AEo();AYv(a);return a;}
function AYv(a){a.Cc=20;a.f4=new Bh;a.fl=new Bh;a.c4=BN();a.lH=DE(0);}
function Xl(a,b,c){var d,e,f,g,h;d=a.f_;if(b==d)return;e=a.c4.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Ug(a,b);a.f_=b;}else{QO(a,c);if(a.f_>=b)while(true){if(h<g)break a;a.f_=PA(Bw(a.c4,h%e|0),a.e1,a.ge,a.f_,b,f,a.ka);h=h+(-1)|0;}while(g<=h){a.f_=PA(Bw(a.c4,g%e|0),a.e1,a.ge,a.f_,b,f,a.ka);g=g+1|0;}}}}
function MB(a,b){if(b===null)b=DE(0);a.lH=b;}
function Wf(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.g5;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c4;h=Bw(h,g%h.m|0);i=a.f4;j=a.lH;k=h.fi.a;l=d.jG;m=b+f|0;n=h.cw;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&ACi(d,j,r,l)!==l.ju?0:1){k=Bb((q-p|0)+1|0,h.cw);V(h.hM,Cb(h.cL),k);Cs(h.jb,0.0,Bb(p,h.cw),Cb(h.cL),k);t=r;}else{u=ACi(d,j,r,l);Li(h,e,f+Bb(p,h.cw)|0,i,l.ml,u);V(h.hM,Cb(h.cL),h.cw);Cs(h.jb,0.0,Bb(q,h.cw),Cb(h.cL),h.cw);p=q;}q=q+1|0;r=t;}u=ACi(d,j,r,
l);Li(h,e,f+Bb(p,h.cw)|0,i,l.ml,u);g=g+1|0;f=f+a.g5|0;}}
function Wi(a,b,c,d){var e,f,g,h,i,j;e=a.c4.m;while(true){f=a.c4.m;g=Bb(f,a.g5);if(g>(d+a.k8|0))break;h=BD(0,g);i=new Sl;g=a.fl.b;f=a.k8;j=a.j5;i.hM=new Bh;i.jb=new BZ;i.o1=h;i.d9=20;i.cw=f;i.fi=BD(g,20*f|0);i.hu=Kc(j,f);if(i.cL===null)i.cL=CT(b);BG(a.c4,i);}if(f==e)return;QO(a,b);Ug(a,c);}
function Ug(a,b){var c,d,e,f,g,h,i,j,k;c=a.c4;d=c.m;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B4(c);while(B5(c)){f=B7(c);g=a.e1;h=a.ka;ET(g);i=0;while(true){j=f.d9;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;GL(f,g,Dc(e),Bb(f.cw,i)+f.hu|0,h);i=i+1|0;}CK(f.cL,g);f.qb=g.hU;}}
function St(a,b,c,d){a.j5=b;a.k8=c;a.g5=c*20|0;a.h4=d;Sx(a);}
function QO(a,b){var c;c=a.e1;if(!(c!==null&&c.hU==a.h4)){c=DS(b,a.fl.b,a.g5,a.h4);a.e1=c;Ck(c,a.j5);UT(a.e1,2);}c=a.ge;if(!(c!==null&&c.hU==a.h4)){b=DS(b,a.fl.b,a.k8,a.h4);a.ge=b;Ck(b,a.j5);UT(a.ge,2);}}
function Io(a){E4(a.c4,new ABd);Ig(a.c4);Sx(a);}
function Sx(a){a.e1=Ct(a.e1,null);a.ge=Ct(a.ge,null);}
function U2(a,b,c,d,e){Co(a.f4,b);V(a.fl,c,d);a.ka=e;}
function P1(){B.call(this);this.Cx=null;}
function P0(){B.call(this);this.pE=null;}
function AK$(a,b){var c;c=a.pE;F2(c,FN(b,K0(c)));}
function PZ(){B.call(this);this.uM=null;}
function AJ1(a,b){var c;c=a.uM;Iy(c,FN(b,Ws(c)));}
function AGz(){var a=this;B.call(a);a.h$=null;a.hN=null;a.nF=null;a.hh=null;a.gE=null;a.n$=null;a.cf=null;a.e9=null;a.qs=0.0;a.d1=0;a.wc=0;a.zt=0;a.iS=0;}
function ARd(a){var b=new AGz();AXm(b,a);return b;}
function AXm(a,b){var c;a.h$=new BZ;a.hN=new Bh;a.nF=new Bh;c=new BZ;a.hh=c;a.gE=Q(Md,4);a.n$=Q(Ia,0);a.iS=b;Mh(c);}
function RN(a){a.e9=Ct(a.e9,null);}
function U6(a,b,c){var d,e;d=CV(EU(a.cf)*b);a.d1=d;e=a.cf;a.wc= -( -((d+e.dd+e.es)/2.0)|0)|0;AB5(a,c);return a.d1;}
function Qv(a,b){var c,d;Mh(a.hh);c=a.hh;ZO(c,b,c);a.qs=Pt(a.hh);c=a.hh;d=c.bp+c.bd+1.5|0;a.zt=d;V(a.nF,0,d*2|0);}
function AB5(a,b){a.e9=Ct(a.e9,DS(b,1024,a.d1,a.iS));}
function Hv(a,b,c,d,e,f,g){var h,i;h=a.hN;if(h.b&&h.a){i=a.h$;if(i.bD!==0.0&&i.bd!==0.0){DW(b,d,e,h,i,c,f,g,a.iS);return;}}}
function Xd(a,b,c,d){var e,f;Ck(a.e9,a.cf);e=DS(d,Lw(a.e9,b)+(c*2|0)|0,a.d1,a.iS);Ck(e,a.cf);BS(e,b,c,Kc(a.cf,a.d1));f=CT(d);CK(f,e);Eq(e);return f;}
function PY(){B.call(this);this.yh=null;}
function AJ0(a){var b,c;b=a.yh;c=b.jE?0:1;b.jE=c;b=new L;N(b);If(H(b,C(253)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function P5(){B.call(this);this.rD=null;}
function AOu(a){var b,c;b=a.rD;c=b.lk^1;b.lk=c;b=new L;N(b);If(H(b,C(254)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function P4(){B.call(this);this.v1=null;}
function AZV(a){var b,c,d,e,f;b=a.v1;c=(b.d$+3|0)%6|0;b.d$=c;d=b.eV.data;e=d.length;f=0;while(f<e){b=d[f];b.b4=c;b=b.cC;if(b!==null)b.hR=1;f=f+1|0;}}
function P3(){B.call(this);this.z9=null;}
function ARk(a){var b;b=a.z9;b.cc=b.cc?0:1;Io(b.c8);b.c8=AIC();MD(b);VP(b,b.g,b.j,b.cx.ci);}
function P2(){B.call(this);this.rf=null;}
function AUg(a){var b;b=a.rf;b.kG=b.kG?0:1;}
function PX(){B.call(this);this.ve=null;}
function AYV(a){var b;b=a.ve;b.ob=b.ob?0:1;}
function Zt(){B.call(this);this.tv=null;}
function ARo(a){var b;b=a.tv;Sm(b,b.ko,b.oz);}
function Zu(){B.call(this);this.rY=null;}
function AUi(a){var b;b=a.rY;Sm(b,b.oz,b.ko);}
var AGt=G();
function Ly(){B.call(this);this.Cp=null;}
var A3H=null;var A4b=null;function AQc(){AQc=Bq(Ly);AZz();}
function ANE(a){var b=new Ly();ACA(b,a);return b;}
function ACA(a,b){AQc();a.Cp=b;}
function AZz(){A3H=ANE(C(255));A4b=ANE(C(256));}
var ADx=G(0);
function AEc(b,c,d){return Is(b,c,d,255,new BZ);}
function Is(b,c,d,e,f){Cs(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function AAF(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AO4(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bl=g+i;e.bp=h+i;e.bd=j+i;return e;}
function Id(b,c,d,e,f){f=AAF(b,c,d,f);f.bD=e;return f;}
function Hg(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var UO=G();
function APb(a,b){var c,d,e;c=b.cG;d=c&&!b.bK&&!b.dm&&!b.kB?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bK&&!c&&!b.dm&&!b.kB?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.lZ=1;}return 0;}
function UN(){B.call(this);this.rv=null;}
function AMj(a,b){var c;c=a.rv.eG;return c!==null&&c.h_(b)?1:0;}
var Ms=G(0);
function ADn(){var a=this;EY.call(a);a.cI=null;a.m=0;}
function BN(){var a=new ADn();AOw(a);return a;}
function AOw(a){a.cI=Q(B,10);}
function Kn(a,b){var c,d;c=a.cI.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cI=C_(a.cI,d);}}
function Bw(a,b){J9(a,b);return a.cI.data[b];}
function ATO(a){return a.m;}
function BG(a,b){var c,d;Kn(a,a.m+1|0);c=a.cI.data;d=a.m;a.m=d+1|0;c[d]=b;a.b0=a.b0+1|0;return 1;}
function Ui(a,b,c){var d,e,f;RW(a,b);Kn(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cI.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cI.data[b]=c;a.m=d+1|0;a.b0=a.b0+1|0;}
function EJ(a,b){var c,d,e,f;J9(a,b);c=a.cI.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b0=a.b0+1|0;return d;}
function Zo(a,b){var c;c=Lr(a,b);if(c<0)return 0;EJ(a,c);return 1;}
function Ig(a){ADP(a.cI,0,a.m,null);a.m=0;a.b0=a.b0+1|0;}
function ADQ(a,b,c){var d,e,f,g,h,i;RW(a,b);if(c.eo())return 0;Kn(a,a.m+c.cY()|0);d=c.cY();e=a.m;f=e-1|0;while(f>=b){g=a.cI.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.b_();i=0;while(i<d){g=a.cI.data;e=b+1|0;g[b]=h.b2();i=i+1|0;b=e;}a.b0=a.b0+1|0;return 1;}
function J9(a,b){var c;if(b>=0&&b<a.m)return;c=new BE;X(c);K(c);}
function RW(a,b){var c;if(b>=0&&b<=a.m)return;c=new BE;X(c);K(c);}
function E4(a,b){var c;c=0;while(c<a.m){b.i(a.cI.data[c]);c=c+1|0;}}
function JN(){var a=this;B.call(a);a.u=null;a.t=null;a.V=null;a.bj=null;}
function Vc(){var a=new JN();X$(a);return a;}
function Wy(a,b,c,d){var e=new JN();AMh(e,a,b,c,d);return e;}
function X$(a){a.u=new Bh;a.t=new Bh;a.V=new BZ;a.bj=new BZ;}
function AMh(a,b,c,d,e){a.u=new Bh;a.t=new Bh;a.V=new BZ;a.bj=new BZ;HH(a,b,c,d,e);}
function HH(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function Wx(a){V(a.t,0,0);}
function Lt(a){var b;b=a.t;return Bb(b.b,b.a)?0:1;}
function Fa(a,b){return GH(b,a.u,a.t);}
function Uc(a,b,c,d){var e;e=a.u;Bu(b,e.b+c|0,e.a+d|0,a.t,a.V);}
function AB2(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.b+d|0;e=g.a+e|0;g=a.t;h=a.bj;i=a.V;F4(b,b.iX);Gq(b.iX,b.X,d,e,g,b.c_);Mw(b.iX,b.X,c);g=b.iX;j=b.X;Fh(j,g.zG,h);Fh(j,g.zC,i);c=g.t7;j.uniform2f(c,f,0.0);F1(b);}
var FA=G();
function Lp(){FA.call(this);this.BX=null;}
function V7(){FA.call(this);this.BN=null;}
function SI(){FA.call(this);this.Df=null;}
var HC=G(0);
var Vp=G(0);
function BZ(){var a=this;B.call(a);a.bl=0.0;a.bp=0.0;a.bd=0.0;a.bD=0.0;}
function ABt(a,b,c,d){var e=new BZ();AVl(e,a,b,c,d);return e;}
function AIA(a){var b=new BZ();ATe(b,a);return b;}
function AVl(a,b,c,d,e){a.bl=b;a.bp=c;a.bd=d;a.bD=e;}
function Cs(a,b,c,d,e){a.bl=b;a.bp=c;a.bd=d;a.bD=e;}
function ATe(a,b){a.bl=b.bl;a.bp=b.bp;a.bd=b.bd;a.bD=b.bD;}
function BT(a,b){a.bl=b.bl;a.bp=b.bp;a.bd=b.bd;a.bD=b.bD;return a;}
function AZn(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BJ(a)===BJ(b)){b=b;if(b.bl===a.bl&&b.bp===a.bp&&b.bd===a.bd&&b.bD===a.bD?1:0){c=1;break a;}}c=0;}return c;}
function Md(){var a=this;B.call(a);a.oU=null;a.AL=null;a.rM=0.0;a.A4=0;a.BA=0;a.u7=0;a.CD=0;a.dd=0.0;a.es=0.0;a.AU=0.0;a.oB=0.0;a.A0=0;a.qB=null;}
function EU(a){return CV(a.dd+a.es);}
function K_(a,b){return CV((a.dd+a.es)*b);}
function Ia(){var a=this;B.call(a);a.eD=null;a.fI=null;a.fw=null;}
var A3q=0;function AGM(a){var b;b=a.fI;if(b!==null){A3q=A3q-1|0;a.eD.dR.deleteTexture(b);a.fI=null;}}
function Cb(a){return a.fw.b;}
function Df(a){return a.fw.a;}
function WF(a,b,c,d){var e;e=a.fw;e.b=b;e.a=c;Nj(a);a.eD.dR.texStorage2D(3553,1,d,b,c);e=a.eD.dR;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Nj(a){var b,c;b=a.eD.dR;c=a.fI;b.bindTexture(3553,c);}
function CK(a,b){O3(a,b.og,b.nb,32856);SC(a,b,0,0);}
function O3(a,b,c,d){var e,f,g,h;a:{e=a.fw;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Nj(a);break a;}e=a.eD.dR;h=a.fI;e.deleteTexture(h);a.fI=a.eD.dR.createTexture();WF(a,b,c,d);break a;}}WF(a,b,c,d);}}
function IU(a,b,c,d){Nj(a);SC(a,b,c,d);}
function SC(a,b,c,d){var e;e=a.eD.dR;b=b.js;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Ss=G(0);
var A4c=0.0;function Mh(b){Cs(b,1.0471975803375244,0.75,1.25,0.375);}
function ZO(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JZ(b.bD,JZ(c,A4c));Cs(d,b.bl/c,b.bp*c,ADI(b.bd*c,1.25),e);}
function Pt(b){var c;c=b.bp;return c-(c|0)>=0.25?0.0:0.5;}
function ACU(){A4c=KY(KY(0.5,0.375),4.0);}
var NX=G(0);
function Gu(a){return DF(a,null);}
function Ts(b){var c;c=new Ut;c.ys=b;return c;}
function SW(){B.call(this);this.vr=null;}
function APu(a){KE(a.vr);}
function SV(){B.call(this);this.zw=null;}
function AJE(a){Lc(a.zw);}
function AH$(){var a=this;B.call(a);a.bN=null;a.bB=null;a.du=0;}
function ALa(){var a=new AH$();AY5(a);return a;}
function AMO(a){var b=new AH$();ASM(b,a);return b;}
function AY5(a){a.bN=new HD;a.bB=new HD;}
function ASM(a,b){a.bN=new HD;a.bB=new HD;IT(a,b);}
function IT(a,b){XO(a.bN,b.bN);XO(a.bB,b.bB);a.du=b.du;}
function My(a,b,c){Ca(a.bB,b,c);if(!a.du)Ca(a.bN,b,c);}
function Sc(a,b){Ca(a.bN,b,0);Ca(a.bB,b+1|0,0);}
function D5(a){if(Ul(a.bN,a.bB)>0)return a.bB;return a.bN;}
function F6(a){if(Ul(a.bN,a.bB)<0)return a.bB;return a.bN;}
function AGx(a,b){var c,d,e,f;c=a.bN;d=c.J;e=a.bB;if(d==e.J&&c.ba==e.ba?1:0)return null;c=D5(a);e=F6(a);d=c.J;if(d<=b){f=BI(b,e.J);if(f<=0)return BD(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dr(a){var b,c;b=a.bN;c=a.bB;return (b.J==c.J&&b.ba==c.ba?1:0)?0:1;}
function XB(){var a=this;B.call(a);a.fe=null;a.fa=0;a.dH=0;}
function YY(a,b){var c,d,e;c=a.fa;d=a.fe;if(c==d.data.length)a.fe=C_(d,c+16|0);d=a.fe.data;e=a.fa;a.fa=e+1|0;d[e]=b;}
function Up(a){var b,c,d;b=a.dH;c=a.fa-1|0;if(b==c)a.dH=b-1|0;d=a.fe.data;a.fa=c;d[c]=null;}
var G$=G();
function Ue(){var a=this;G$.call(a);a.A=null;a.db=null;a.ey=null;a.dO=null;a.dw=null;a.iM=null;a.kj=null;a.cq=0;a.nk=0;a.wb=0.0;}
function B$(a,b){return a.A.data[b];}
function CH(a){return a.A.data.length;}
function Yw(a){return Fi(a,CH(a));}
function Gh(a,b){return a.A.data[b].P;}
function AHT(a,b,c){var d,e,f,g,h;d=a.A;e=d.data;f=e[b];d=C_(d,e.length+1|0);e=d.data;a.A=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=DV(Q(Cu,0));a.A.data[b+1|0]=f;}else if(c==f.P){e[b]=f;e[b+1|0]=DV(Q(Cu,0));}else{e=(IP(f,c)).data;d=a.A.data;d[b]=e[0];d[b+1|0]=e[1];}F5(a,b,c,0,C(208));}
function Mi(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=DV(MT(d.s,e.s));g=a.A;h=g.data.length;if(b<h&&b>=0){i=Q(Dw,h-1|0);c=i.data;T6(g,b,i);c[b]=f;a.A=i;return;}d=new Bt;X(d);K(d);}
function OC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].P?0:1)){d=(B$(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F5(a,b,c,1,LO(e));h=a.A.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=T6(d,e,Q(Cu,f-1|0));else{j=i[e];if(c<=0)k=D6(Ed(j.v,1),j.b1,j.bL);else if(c>=(J(j.v)-1|0)){k=new Cu;l=j.v;WT(k,Cr(l,0,J(l)-1|0),j.b1,j.bL);}else{d=B1(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=D6(Gt(d),j.b1,j.bL);}i[e]=k;}h.P=h.P-1|0;EG(h);}else if(b!=(d.length-1|0)){F5(a,b,c,1,C(208));Mi(a,b);}}
function ACl(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){U1(a.A.data[b],c,e[0]);return;}g=f-1|0;d=(IP(a.A.data[b],c)).data;h=d[0];i=d[1];d=a.A;j=C_(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);NV(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Fd(e[m])?QR(e[m]):DV(Q(Cu,0));d[b+m|0]=k;m=m+1|0;}NV(i,0,0,e[g]);d[b+g|0]=i;a.A=j;}
function ZF(a,b){var c,d,e,f,g,h,i;c=D5(b);d=F6(b);e=c.J;if(e==d.J)return Cr(Fu(a.A.data[e]),c.ba,d.ba);f=new L;N(f);b=a.A.data[c.J];e=c.ba;BM(B0(f,Ed(Fu(b),e)),10);g=a.A.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;ACJ(B0(f,Fu(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.J];h=d.ba;B0(f,Cr(Fu(b),0,h));return M(f);}b=new AAd;X(b);K(b);}
function OO(a,b,c){var d;Z3(a,b);d=D5(b);F5(a,d.J,d.ba,1,c);}
function Z3(a,b){var c,d,e,f,g,h,i;a:{c=D5(b);d=F6(b);e=c.J;if(e==d.J)GW(a.A.data[e],c.ba,d.ba);else{b=a.A.data[e];GW(b,c.ba,b.P);GW(a.A.data[d.J],0,d.ba);e=c.J+1|0;f=d.J;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(Dw,(h-f|0)+e|0);AE2(g,e,f,i);a.A=i;Mi(a,c.J);break a;}b=new Bt;X(b);K(b);}b=new Bt;X(b);K(b);}}}
function Jv(a,b,c){return DU(b,Gx(B$(a,b),c));}
function AAL(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(B$(a,c)).P|0)>=b)return BD(c,b-d|0);d=d+((B$(a,c)).P+1|0)|0;c=c+1|0;}return BD(e,0);}
function Fi(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+Gh(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function MQ(a,b){return Nc(B$(a,b.bn),b.by);}
function E5(a){var b,c,d,e,f,g,h,i,j;b=B1(Yw(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;SA(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F5(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cq=a.cq+1|0;f=a.iM;g=Q(Hq,1);h=new Hq;h.ef=b;h.et=c;i=Nh(e,C(208),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BD(b,c+J(i[0])|0);break a;}k=BD((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BD(b,c);}i=g.data;h.ne=k;h.oG=d;h.go=e;i[0]=h;BG(f,g);Lg(a,b,c,d,e);}
function Lg(a,b,c,d,e){var f;f=Fi(a,b)+c|0;if(!d){QQ(a.db,f,J(e));XT(a.ey,f,J(e));}else{AAg(a.db,f,J(e));Pm(a.ey,f,J(e));}}
function O$(a,b){var c,d,e;c=Nh(b.go,C(208),(-1));if(b.oG){ACl(a,b.ef,b.et,c);QQ(a.db,Fi(a,b.ef)+b.et|0,J(b.go));XT(a.ey,Fi(a,b.ef)+b.et|0,J(b.go));}else{c=c.data;d=ALa();Ca(d.bN,b.ef,b.et);e=c.length;if(e==1)Ca(d.bB,b.ef,b.et+J(c[0])|0);else Ca(d.bB,(b.ef+e|0)-1|0,J(c[e-1|0]));Z3(a,d);AAg(a.db,Fi(a,b.ef)+b.et|0,J(b.go));Pm(a.ey,Fi(a,b.ef)+b.et|0,J(b.go));}return b.ne;}
function Xa(a){return a.nk==a.cq?0:1;}
function Ib(a){a.nk=a.cq;}
function K8(a){var b,c,d;a.kj=BK(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.kj.data;d=b+1|0;c[d]=(c[b]+(B$(a,b)).P|0)+1|0;b=d;}}
function ABR(a,b){var c,d,e,f,g,h;c=a.kj;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].P;if(b<=(d+g|0)){h=DU(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DU(f,0);}return h;}d=AGl(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DU(d,b-(d<0?0:a.kj.data[d])|0);if(h.by>=(B$(a,h.bn)).P){h.bn=h.bn+1|0;h.by=0;}return h;}
var XM=G(0);
function Mc(){var a=this;B.call(a);a.hP=null;a.fV=null;a.oA=null;}
function AGp(a,b){var c=new Mc();AP8(c,a,b);return c;}
function A0b(a,b,c){var d=new Mc();Ql(d,a,b,c);return d;}
function ACI(b){var c,d,e,f,g,h,i;c=new Mc;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=Q(BC,0);else{f=Q(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Fn(e[h]);h=h+1|0;}}}else f=Q(BC,0);Ql(c,d,b,f);return c;}
function AP8(a,b,c){Ql(a,b,c,Q(BC,0));}
function Ql(a,b,c,d){a.hP=b;a.fV=c;a.oA=d;}
function FH(a){var b;b=a.hP;return Fn(b!==null?b.name:a.fV.name);}
function AH_(b){var c;c=new XN;c.s1=b;return c;}
function AQz(a){var b,c,d,e,f,g;if(a.fV===null){b=a.oA;c=FH(a);d=AEb(b);e=new L;N(e);H(H(H(e,d),C(257)),c);c=M(e);}else{b=a.oA;c=FH(a);f=a.fV.size;g=f|0;if(g!==f){d=FH(a);e=new L;N(e);H(H(e,C(258)),d);$rt_globals.console.info($rt_ustr(M(e))+f);g=0;}d=AEb(b);e=new L;N(e);U(H(H(H(H(e,d),C(257)),c),C(259)),g);c=M(e);}return c;}
var ZD=G(0);
function AF6(){B.call(this);this.iP=null;}
function A0J(a){var b=new AF6();ASR(b,a);return b;}
function ASR(a,b){a.iP=b;}
function EQ(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iP));}
function CM(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iP));}
function AMW(a){var b,c;b=a.iP.byteLength;c=new L;N(c);H(U(H(c,C(260)),b),C(261));return M(c);}
function Ut(){B.call(this);this.ys=null;}
function DF(a,b){Uf(a.ys,b);return 1;}
function HD(){var a=this;B.call(a);a.J=0;a.ba=0;}
function Ca(a,b,c){a.J=b;a.ba=c;}
function XO(a,b){a.J=b.J;a.ba=b.ba;}
function Ul(a,b){var c;c=BI(a.J,b.J);if(c)return c;return BI(a.ba,b.ba);}
function L7(){var a=this;B.call(a);a.np=null;a.lI=null;}
function MZ(a){return a.np.bn;}
function KN(a){return a.np.by;}
function Dw(){var a=this;B.call(a);a.s=null;a.P=0;a.gl=null;a.eW=null;a.d7=null;a.hO=null;a.gB=0;a.hR=0;a.it=0;}
var A4d=0;var A4e=0;var A37=0;function QR(a){var b=new Dw();AGO(b,a);return b;}
function DV(a){var b=new Dw();TB(b,a);return b;}
function AGO(a,b){var c;c=Q(Cu,1);c.data[0]=AEs(b);TB(a,c);}
function TB(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.P=d;EG(a);}
function H8(a){return a.s.data.length;}
function I8(a,b){return a.s.data[b];}
function Gx(a,b){var c;c=JJ(a,b);return c<=0?0:a.d7.data[c-1|0];}
function JJ(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.d7!==null&&!a.it)){AAM(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.d7.data[d]=e;d=d+1|0;}a.it=0;}d=W9(a.d7,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Nc(a,b){var c;c=a.s.data;if(!c.length)return null;return c[JJ(a,b)];}
function GW(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.P){a.s=Q(Cu,0);EG(a);a.P=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BI(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=T6(g,e,Q(Cu,g.data.length-1|0));a.P=a.P-d|0;EG(a);return;}a.s.data[e]=D6(FP(Cr(k.v,0,b),Ed(k.v,c)),k.b1,k.bL);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=D6(Cr(l.v,0,b),l.b1,l.bL);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=D6(Ed(m.v,c),m.b1,m.bL);g=a.s;a.s=AE2(g,e,f,Q(Cu,(g.data.length-f|0)+e|0));}a.P=a.P-d|0;EG(a);}
function IP(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(Dw,[DV(Q(Cu,0)),a]);if(b>=a.P)return I(Dw,[a,DV(Q(Cu,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(Dw,[DV(L9(c,0,Q(Cu,d))),DV(L9(c,d,Q(Cu,f-d|0)))]);h=e[d];e=L9(c,0,Q(Cu,d+1|0));i=e.data;j=L9(c,d,Q(Cu,f-d|0));c=j.data;i[d]=D6(Cr(h.v,0,b),h.b1,h.bL);c[0]=D6(Ed(h.v,b),h.b1,h.bL);return I(Dw,[DV(e),DV(j)]);}
function U1(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}NV(a,d,b,c);}
function NV(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Fd(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cu,1);h.data[0]=AEs(d);a.s=h;}else if(!b&&!c){h=Q(Cu,g+1|0);f=h.data;DB(e,0,h,1,g);f[0]=AEs(d);a.s=h;}else{i=f[b];if(c<=0)j=D6(FP(d,i.v),i.b1,i.bL);else if(c>=J(i.v))j=D6(FP(i.v,d),i.b1,i.bL);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B1(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D6(Gt(e),i.b1,i.bL);}f[b]=j;}a.P=a.P
+J(d)|0;EG(a);}
function Pr(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<M6(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function LG(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gl;if(!(e!==null&&e.data.length>=d)){a.gl=AJH(d);a.eW=BK(d);a.gB=1;}AAM(a);if(!a.gB)A4e=A4e+1|0;else{f=0;g=0.0;A4d=A4d+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.d7.data[h]=f;Ck(b,i[Ki(j)]);g=g+DZ(b,j.v);a.gl.data[h]=g;a.eW.data[h]=g+0.5|0;h=h+1|0;}a.P=f;a.gB=0;a.it=0;}}
function AAM(a){var b;b=a.d7;if(!(b!==null&&b.data.length>=a.s.data.length)){a.d7=BK(a.s.data.length);a.it=1;}}
function WN(a){a.gB=1;a.hO=null;}
function EG(a){WN(a);a.hR=1;a.it=1;}
function US(a,b,c,d){var e,f,g,h,i,j,k;if(a.hO===null)a.hO=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.hO.data[d];if(e===null){e=c.data;f=a.s.data[d];Ck(b,e[Ki(f)]);f=f.v;e=BK(J(f)-1|0);c=FY(f);g=!d?0.0:a.gl.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;NT(f,c,0,k);h[i]=g+DZ(b,f)+0.5|0;i=k;}a.hO.data[d]=e;}return e;}
function G2(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gB&&a.eW!==null))LG(a,c,d);if(b>=a.P)return a.eW.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BI(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eW.data[f];}return (US(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function F8(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eW.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hm(a,b){var c;if(b>=a.P)return b+1|0;c=JJ(a,b);return a.d7.data[c];}
function Fu(a){var b,c,d,e;b=new L;GA(b,a.P);c=a.s.data;d=c.length;e=0;while(e<d){B0(b,c[e].v);e=e+1|0;}return M(b);}
function AEX(){A37=0;}
function R0(){var a=this;B.call(a);a.fD=null;a.eQ=null;}
function AMA(a,b){var c=new R0();AOL(c,a,b);return c;}
function AOL(a,b,c){a.fD=b;a.eQ=c;}
function XT(a,b,c){var d;d=a.fD;if(d===null)return;Tw(a,d,b,c);}
function Pm(a,b,c){var d;d=a.fD;if(d===null)return;Xe(a,d,b,c);}
function Tw(a,b,c,d){var e,f,g,h;e=b.ep.b_();while(e.cA()){ABY(a,e.b2(),c,d);}e=b.eZ.b_();while(e.cA()){f=e.b2();g=new WL;g.um=a;Et(a,g,f,c,d);}h=b.gX.b_();while(h.cA()){e=h.b2();ABY(a,e.j3,c,d);f=new WM;f.qn=a;Et(a,f,e.k1,c,d);}b=b.cB.b_();while(b.cA()){Tw(a,b.b2(),c,d);}}
function ABY(a,b,c,d){KH(a,b.eq,c,d);}
function Et(a,b,c,d,e){var f,g;a:{if(c instanceof GQ){f=c.ho;g=new ACg;g.rk=a;g.ri=b;g.rh=d;g.rj=e;E4(f,g);}else{if(!(c instanceof JD)){if(!(c instanceof J0))break a;f=c;Et(a,b,f.i2,d,e);Et(a,b,f.hG,d,e);return;}g=c.hC;f=new ACh;f.z5=a;f.z4=b;f.z3=d;f.z2=e;E4(g,f);}}if(c!==null){c=c.fx;if(c!==null)b.kE(c,CU(d),CU(e));}}
function KH(a,b,c,d){var e;e=b.dz;if(e>=c)b.dz=e+d|0;}
function Xe(a,b,c,d){var e,f,g,h;e=b.ep.b_();while(e.cA()){I6(a,(e.b2()).eq,c,d);}e=b.eZ.b_();while(e.cA()){f=e.b2();g=new U5;g.xR=a;Et(a,g,f,c,d);}h=b.gX.b_();while(h.cA()){e=h.b2();I6(a,e.j3.eq,c,d);f=new U7;f.w2=a;Et(a,f,e.k1,c,d);}b.ep.nP(new U4);b.eZ.nP(new U3);b=b.cB.b_();while(b.cA()){Xe(a,b.b2(),c,d);}}
function I6(a,b,c,d){var e;e=b.dz;if(e>=c)b.dz=e-d|0;}
function LH(){var a=this;D8.call(a);a.cX=0;a.b9=null;a.cV=0;a.z6=0.0;a.m2=0;}
function U$(){var a=new LH();Sn(a);return a;}
function AO5(a,b){return Q(Hf,b);}
function Sn(a){var b;b=AIE(16);a.cX=0;a.b9=Q(Hf,b);a.z6=0.75;XZ(a);}
function AIE(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E_(a){var b;if(a.cX>0){a.cX=0;b=a.b9;ADP(b,0,b.data.length,null);a.cV=a.cV+1|0;}}
function XZ(a){a.m2=a.b9.data.length*a.z6|0;}
function KD(a,b){return Wh(a,b)===null?0:1;}
function Yk(a){var b;b=new X0;b.uO=a;return b;}
function Cy(a,b){var c;c=Wh(a,b);if(c===null)return null;return c.c5;}
function Wh(a,b){var c,d;if(b===null)c=UY(a);else{d=b.on();c=S_(a,b,d&(a.b9.data.length-1|0),d);}return c;}
function S_(a,b,c,d){var e;e=a.b9.data[c];while(e!==null&&!(e.kN==d&&AC_(b,e.cM))){e=e.cT;}return e;}
function UY(a){var b;b=a.b9.data[0];while(b!==null&&b.cM!==null){b=b.cT;}return b;}
function K1(a){var b;if(a.mt===null){b=new RJ;b.hW=a;a.mt=b;}return a.mt;}
function Fv(a,b,c){var d,e,f,g;if(b===null){d=UY(a);if(d===null){a.cV=a.cV+1|0;d=XQ(a,null,0,0);e=a.cX+1|0;a.cX=e;if(e>a.m2)Yb(a);}}else{e=b.on();f=e&(a.b9.data.length-1|0);d=S_(a,b,f,e);if(d===null){a.cV=a.cV+1|0;d=XQ(a,b,f,e);e=a.cX+1|0;a.cX=e;if(e>a.m2)Yb(a);}}g=d.c5;d.c5=c;return g;}
function XQ(a,b,c,d){var e,f;e=new Hf;ACa(e,b,null);e.kN=d;f=a.b9.data;e.cT=f[c];f[c]=e;return e;}
function AEU(a,b){var c,d,e,f,g,h,i,j;c=AIE(!b?1:b<<1);d=Q(Hf,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b9.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.kN&b;j=h.cT;h.cT=e[i];e[i]=h;h=j;}f=f+1|0;}a.b9=d;XZ(a);}
function Yb(a){AEU(a,a.b9.data.length);}
function AC_(b,c){return b!==c&&!b.bI(c)?0:1;}
function Cu(){var a=this;B.call(a);a.v=null;a.b1=0;a.bL=0;}
function AEs(a){var b=new Cu();ANJ(b,a);return b;}
function D6(a,b,c){var d=new Cu();WT(d,a,b,c);return d;}
function ANJ(a,b){WT(a,b,0,0);}
function WT(a,b,c,d){a.v=b;a.b1=c;a.bL=d;}
function Ki(a){return a.bL&3;}
function H2(b,c){return (!b?0:2)+(!c?0:1)|0;}
function M6(a){return J(a.v);}
var L4=G(LH);
function Uq(){var a=this;B.call(a);a.c9=null;a.eM=0;}
var A4f=null;function AHr(a){var b=new Uq();AIc(b,a);return b;}
function AIc(a,b){a.eM=0;a.c9=b;}
function R6(a,b){var c;if(b.eI)return b;b=B4(b.bm);while(true){if(!B5(b))return null;c=R6(a,B7(b));if(c!==null)break;}return c;}
function PO(a,b,c){var d,e,f,g;d=LQ(a,a.c9,b);if(d===null)return;b=c.cl;e=b===null?A4g:b.cB;f=c.bm;c=a.c9;if(d===c){if(c.cl===null)c.cl=b;b=new UX;b.ug=a;E4(f,b);b=new UW;b.xO=a;e.e7(b);b=a.c9;b.bm=f;b.cl.cB=e;b.eI=0;return;}if(!FR(f)){c=d.hm;if(c!==null){b=new QC;b.rp=c;E4(f,b);g=Lr(c.bm,d);if(g==(-1))Hl(c.bm,f);else{EJ(c.bm,g);ADQ(c.bm,g,f);}}}b=d.cl;if(b!==null){b=b.g6;c=new Ve;c.tX=b;e.e7(c);g=Lr(b.cB,d.cl);if(g==(-1))Hl(b.cB,e);else{b.cB.oW(g);b.cB.wM(g,e);}}}
function LQ(a,b,c){var d,e,f,g;d=b.bW;if(d.bV==c.bV&&d.bZ==c.bZ?1:0){d=B4(b.bm);while(B5(d)){e=LQ(a,B7(d),c);if(e!==null)return e;}return b;}b=B4(b.bm);while(true){if(!B5(b))return null;d=B7(b);f=c.bV;g=c.bZ;e=d.bW;if(e.bV<=f&&g<=e.bZ?1:0){e=LQ(a,d,c);if(e!==null)break;}}return e;}
function WG(a,b,c){BG(c,b.bW);b=B4(b.bm);while(B5(b)){WG(a,B7(b),c);}}
function QQ(a,b,c){a.eM=0;LP(a,a.c9,b,c);}
function LP(a,b,c,d){var e;if(Dd(b)<c)return;a:{if(Dg(b)>c){ML(b,d);H1(b,d);b=B4(b.bm);while(B5(b)){LP(a,B7(b),c,d);}}else{if(!Kl(b,c)){if(a.eM)break a;if(Dd(b)!=c)break a;}H1(b,d);if(Dg(b)==c&&a.eM)ML(b,d);e=B4(b.bm);while(B5(e)){LP(a,B7(e),c,d);}if(!a.eM){b.eI=1;a.eM=1;}}}}
function AAg(a,b,c){a.eM=0;Kr(a,a.c9,b,c);}
function Kr(a,b,c,d){var e,f,g,h,i,j;if(Dd(b)<c)return;e=Dg(b);f=c+d|0;if(e>f){e= -d|0;ML(b,e);H1(b,e);g=B4(b.bm);while(B5(g)){Kr(a,B7(g),c,d);}b.bm=OM(a,b.bm);}else{h=b.bW;if(c<=h.bV&&h.bZ<=f?1:0){if(b===a.c9){MY(b,0);Ko(b,0);h=b.cl;if(h!==null)h.cB.hQ();}else{MY(b,(-1));Ko(b,(-1));h=b.cl;if(h!==null){ABz(h);b.cl=null;}}Ig(b.bm);}else{e=Kl(b,c);f=Kl(b,f);if(e&&f)H1(b, -d|0);else if(e)Ko(b,c);else{if(!f)return;MY(b,c);H1(b, -d|0);}h=B4(b.bm);while(B5(h)){Kr(a,B7(h),c,d);}h=Yj(b.bm);g=Rh(0);i=new Uv;j=new Yv;j.DD
=i;j.kP=g;while(XX(h,j)){}if(!j.kP.o0&&!a.eM)b.eI=1;else a.eM=1;b.bm=OM(a,b.bm);}}}
function OM(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BN();d=null;e=A4f;f=b.cI;g=b.m;if(e===null)e=A2U;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}AEy(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b0=b.b0+1|0;b=B4(b);while(B5(b)){m=B7(b);if(Dg(m)==Dd(m))continue;if(!m.eI){if(d!==null){BG(c,d);d=null;}BG(c,m);}else if(d===null)d=m;else{n=AXR(KO(Bc(Dg(d),Dg(m)),Bd(Dd(d),Dd(m)),d.bW.fq),d.hm,d.cl);n.eI=1;d=m.cl;if(d===null)d=n;else{ABz(d);d=n;}}}if(d!==null)BG(c,d);return c;}
function AAC(a,b,c,d){var e,f,g,h,i,j;if((Dd(c)-Dg(c)|0)<43)e=Cr(d,Dg(c),Dd(c));else{e=Cr(d,Dg(c),Dg(c)+20|0);f=Cr(d,Dd(c)-20|0,Dd(c));g=new L;N(g);H(H(H(g,e),C(172)),f);e=M(g);}e=Yp(e,C(208),C(262));f=Bz();g=CG(c);h=new L;N(h);i=U(h,b);BM(i,32);g=H(i,g);BM(g,9);H(g,e);Bs(f,M(h));c=B4(c.bm);j=b+1|0;while(B5(c)){AAC(a,j,B7(c),d);}}
function AIp(){A4f=new ZR;}
function AIL(){var a=this;B.call(a);a.bV=0;a.bZ=0;a.fq=0;}
function KO(a,b,c){var d=new AIL();ANC(d,a,b,c);return d;}
function ANC(a,b,c,d){a.bV=b;a.bZ=c;a.fq=d;}
function AWk(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.bV==c.bV&&a.bZ==c.bZ&&a.fq==c.fq?1:0;}return 0;}
function AL5(a,b){var c;b=b;c=BI(a.bV,b.bV);if(!c)c=BI(b.bZ,a.bZ);return c;}
var ZR=G();
function ARq(a,b,c){var d;b=b;c=c;b=b.bW;c=c.bW;d=BI(b.bV,c.bV);if(!d)d=BI(c.bZ,b.bZ);return d;}
function TF(){var a=this;B.call(a);a.bW=null;a.hm=null;a.bm=null;a.cl=null;a.eI=0;}
function AXR(a,b,c){var d=new TF();AHq(d,a,b,c);return d;}
function AHq(a,b,c,d){a.eI=0;a.bW=b;a.hm=c;a.bm=BN();a.cl=d;}
function AIQ(b){return TU(b,null);}
function TU(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=KO(d,e,f);j=new TF;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AHq(j,i,null,l);m=0;while(m<g){l=TU(b,c);l.hm=j;BG(j.bm,l);m=m+1|0;}return j;}
function ADd(b,c,d){var e,f,g,h,i;a:{e=b.bW;f=b.bm;g=e.bV;h=e.bZ;i=e.fq;Br(c,g);Hc(c,h,i);Br(c,f.m);if(d!==null){e=b.cl;if(e!==null&&Zz(d,e)){g=(Nl(d,b.cl)).br;break a;}}g=(-1);}Br(c,g);b=B4(f);while(B5(b)){ADd(B7(b),c,d);}}
function Dg(a){return a.bW.bV;}
function Dd(a){return a.bW.bZ;}
function MY(a,b){a.bW.bV=b;}
function Ko(a,b){a.bW.bZ=b;}
function ML(a,b){var c;c=a.bW;c.bV=c.bV+b|0;}
function H1(a,b){var c;c=a.bW;c.bZ=c.bZ+b|0;}
function Kl(a,b){return Dg(a)<=b&&b<Dd(a)?1:0;}
function AKo(a){var b,c,d,e,f;b=a.bW;c=b.bV;d=b.bZ;e=b.fq;b=new L;N(b);BM(b,40);BM(U(H(U(H(U(b,c),C(36)),d),C(36)),e),41);b=M(b);c=a.eI;f=new L;N(f);If(H(H(f,b),C(36)),c);return M(f);}
function ALM(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BV(a.bW,c.bW)&&BV(a.bm,c.bm)?1:0;}return 0;}
var H4=G(0);
function G6(){var a=this;B.call(a);a.cM=null;a.c5=null;}
function A4h(a,b){var c=new G6();ACa(c,a,b);return c;}
function ACa(a,b,c){a.cM=b;a.c5=c;}
function AMZ(a,b){var c,d;if(a===b)return 1;if(!JA(b,H4))return 0;a:{b:{c:{d:{c=b;b=a.cM;if(b!==null){if(!b.bI(c.cM))break c;else break d;}if(c.cM!==null)break c;}b=a.c5;if(b!==null){if(!b.bI(c.c5))break c;else break b;}if(c.c5===null)break b;}d=0;break a;}d=1;}return d;}
function Hf(){var a=this;G6.call(a);a.kN=0;a.cT=null;}
function LZ(){var a=this;L2.call(a);a.sY=null;a.rl=null;}
function ADk(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.sY;e=0;f=0;g=a.rl;a:{while(true){if((e+32|0)>f&&D0(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bc(Cf(b)+j|0,i.length);Ps(b,d,j,f-j|0);e=0;}if(!D0(c)){k=!D0(b)&&e>=f?A3C:A3B;break a;}i=g.data;j=Bc(Cf(c),i.length);l=new PJ;l.pX=b;l.tR=c;k=AFP(a,d,e,f,g,0,j,l);e=l.xZ;j=l.zr;if(k===null){if(!D0(b)&&e>=f)k=A3C;else if(!D0(c)&&e>=f)k=A3B;}AAK(c,g,0,j);if(k!==null)break;}}E7(b,b.Z-(f-e|0)|0);return k;}
var R1=G(LZ);
function AFP(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(MU(h,2))break a;i=A3B;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Nu(l)){if((f+3|0)>g){j=j+(-1)|0;if(MU(h,3))break a;i=A3B;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CO(l)){i=Ei(1);break a;}if
(j>=d){if(D0(h.pX))break a;i=A3C;break a;}c=j+1|0;m=k[j];if(!Db(m)){j=c+(-2)|0;i=Ei(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(MU(h,4))break a;i=A3B;break a;}k=e.data;o=EP(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.xZ=j;h.zr=f;return i;}
var Jq=G(El);
var Ot=G();
function AZa(a,b){return b.text();}
function Ow(){var a=this;B.call(a);a.vv=null;a.vu=null;}
function AX0(a,b){var c,d,e,f,g;c=a.vv;d=a.vu;e=b.length;f=new PG;f.xx=b;g=(AHv(e,f)).me;b=new Nz;f=AHb(d);ABy(b,g,null,f);c.i(b);}
var Ou=G();
function AKU(a,b){AID(b);}
function I2(){var a=this;B.call(a);a.bo=null;a.df=null;a.kU=null;a.jG=null;a.dW=null;a.ow=null;a.lb=null;a.zn=null;}
function A4i(a,b,c,d,e){var f=new I2();J3(f,a,b,c,d,e);return f;}
function Ir(){var b,c,d,e,f,g,h,i;b=new I2;c=new Jx;d=new HQ;Fs();KW(d,A4j);NK(c,d,BU(A30),BU(A4k),BU(A4l),BU(A30),BU(A4m),BU(A4n),BU(A4o),BU(A4p),BU(A4q),BU(A4r));AEt();e=(A4s.hA()).data;f=e.length;g=Q(JU,f);h=g.data;i=0;while(i<f){h[i]=e[i].oj;i=i+1|0;}J3(b,c,g,AGK(S(C(263)),S(C(264)),S(C(265)),S(C(266))),Fm(),ACP(S(C(267)),S(C(268)),S(C(269)),S(C(270))));return b;}
function AAh(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new I2;c=new Jx;d=new HQ;AOc();KW(d,A4t);NK(c,d,BU(A4u),BU(A4v),BU(A4w),BU(A4u),BU(A4x),BU(A4y),BU(A4z),BU(A4A),BU(A4B),BU(A4C));Yo();e=(A4D.hA()).data;f=e.length;g=Q(JU,f);h=g.data;i=0;while(i<f){h[i]=e[i].jB;i=i+1|0;}j=AGK(S(C(271)),S(C(272)),S(C(273)),S(C(274)));k=new I5;l=new Jl;AJ9();m=A4E;NQ(l,m,A4F,A4G,A4H,A4I,m);MI(k,l,AHR(),AIM(S(C(275)),S(C(276)),S(C(277))),AHR(),ACz(1,0.17499999701976776),A4J,A4K);J3(b,c,g,j,k,ACP(S(C(267)),S(C(268)),S(C(269)),S(C(278))));return b;}
function J3(a,b,c,d,e,f){var g;g=c.data;a.ow=Ec(C(153),16.0);a.lb=Ec(C(153),17.0);a.zn=Ec(C(152),15.0);a.bo=b;a.kU=c;a.jG=d;if(g.length>=15){a.df=e;a.dW=f;return;}b=new BR;X(b);K(b);}
function Pf(a,b){if(b===null)b=a.bo.ed;return b;}
function J2(){var a=this;CD.call(a);a.dE=null;a.oi=null;}
function A1V(a){var b=new J2();AIZ(b,a);return b;}
function AIZ(a,b){var c,d,e,f;KM(a,b,0);c=ADC(a.bC);a.oi=c;d=To(a.n,c);a.dE=d;KF(a.n,d);c=b.q.bM;d=new R$;d.sf=a;Z(c,d);c=b.q.bM;d=new G5;e=a.dE;BL(e);f=new R8;f.yZ=e;Ke(d,b,f);Z(c,d);Wv(a.dE,b.q,0);b=b.q.dD;c=new R9;c.sa=a;Z(b,c);IH(a);}
function APG(a,b){if(AAD(a.n,b)){ZS(a.bC);MK(a.dE);}}
function AWF(a,b){return I$(a.dE,b);}
function APe(a){FI(a);H3(a.dE);Mg(a.bC,a.B.E);}
function AYG(a){return HX(0);}
function AJz(a,b,c){Ip(a,b,c);a.nq(b,c);}
function AGF(a,b,c){var d;d=a.dE;NF(d,d.g,b,c);}
function ANx(a,b){BL(b);Ka(a.oi,b);ID(a.dE,b);}
function AE0(a,b){if(b.bk!=121)return 0;return 1;}
function ADo(a,b){var c,d,e;if(DN(a.n,a.dE)){c=a.oi;b=b.h;d=a.dE;e=new VC;e.wg=a;Iq(c,b,d,a,d,a,e);}return 1;}
function ACW(){var a=this;Ci.call(a);a.tV=null;a.mv=null;a.jQ=null;a.eh=null;a.kC=null;a.hn=null;a.ei=null;a.io=null;a.pF=null;a.i8=null;a.oQ=null;a.oR=null;a.na=null;a.uw=null;a.Bh=null;a.ud=0;}
function A2n(a){var b=new ACW();ARG(b,a);return b;}
function ARG(a,b){var c,d,e,f;DT(a,b);c=(Ir()).bo.ed;a.tV=c;a.mv=AIA(c);a.jQ=new Bh;a.eh=KI();a.kC=KI();a.hn=Wy(0,0,3,3);a.ei=HF(0,0,300,300);a.io=APa();d=Q(BC,4);e=d.data;e[0]=C(213);e[1]=C(181);e[2]=C(228);e[3]=C(227);a.pF=d;a.i8=Q(JN,e.length);c=b.q.bx;f=new X8;f.fp=a;Z(c,f);c=b.q.bM;f=new SO;f.z7=a;Z(c,f);c=b.q.pc;f=new SN;f.tk=a;Z(c,f);c=b.q.gh;f=new SM;f.CA=a;Z(c,f);c=b.q.lh;f=new SL;f.AB=a;Z(c,f);c=b.q.dD;f=new SK;f.BH=a;Z(c,f);b=b.q.fk;c=new SJ;c.xM=a;Z(b,c);a.oQ=Zl(a,1);a.oR=Zl(a,0);Ux(a,a.eh,a.oQ);Ux(a,
a.kC,a.oR);a.na=ABu(a,0);a.uw=ABu(a,1);FC(a.ei,a.na);FU(a.ei);GI(a.ei,Ds(169,183,198));Fw(a.ei,a.tV);Cs(a.eh.V,1.0,1.0,1.0,1.0);Fw(a.eh,a.ei.bj);BT(a.hn.bj,a.mv);}
function Ux(a,b,c){FC(b,c);FU(b);}
function Vd(a,b){Id(DR(),0.5+DR()*0.5,0.5+DR()*0.5,1.0,b.V);}
function Zl(a,b){var c,d;c=DS(a.B.E,200,100,b);GD(c,C(279),11.0);BS(c,C(280),0.0,20.0);Jp(c,255,0,0);BS(c,C(280),0.25,40.0);Jp(c,0,255,0);BS(c,C(280),0.5,60.0);Jp(c,0,0,255);BS(c,C(280),0.75,80.0);d=CT(a.B.E);CK(d,c);Eq(c);return d;}
function ABu(a,b){var c,d,e,f;c=DS(a.B.E,255,100,b);GD(c,C(153),10.0);d=Bz();e=$rt_str(c.c6.font);f=new L;N(f);H(H(f,C(281)),e);Bs(d,M(f));DZ(c,C(282));BS(c,C(282),0.0,20.0);BS(c,C(282),0.25,40.0);BS(c,C(282),0.5,60.0);BS(c,C(282),0.75,80.0);e=CT(a.B.E);CK(e,c);Eq(c);return e;}
function AJ$(a,b){var c;a.ud=a.ud+1|0;c=b/5.0;Id(c-(c|0),1.0,1.0,1.0,a.hn.V);return Ww(a.io,b);}
function ANp(a){var b,c,d,e,f,g,h,i;b=a.B.E;EB(b,a.mv);c=a.i8.data;d=c.length;e=0;while(e<d){Uc(c[e],b,0,0);e=e+1|0;}f=a.ei;g=f.u;g.a=(a.jQ.a-f.t.a|0)-5|0;g.b=0;B2(b,0);h=0;while(h<7){f=a.ei;Ey(f,b,a.na,Bb(h,10+((10*f.t.b|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.ei;f.u.a=(a.jQ.a-(f.t.a*2|0)|0)-10|0;h=0;while(h<7){g=a.uw;f=a.ei;f.u.b=Bb(h,10+((10*f.t.b|0)/15|0)|0)+5|0;Wc(f,b,g,1);h=h+1|0;}Wc(a.eh,b,a.oQ,1);B2(b,1);g=a.kC;f=a.oR;i=g.u;h=i.b;d=i.a;g=g.t;F4(b,b.la);Gq(b.la,b.X,h,d,g,b.c_);Mw(b.la,b.X,f);F1(b);B2(b,0);f=
a.Bh;if(f!==null)AB2(a.hn,b,f,0,0,0.0);X9(a.io,b,new Bh);KG(b,C(283));}
function AQ9(a,b,c){var d,e,f,g,h,i,j,k;d=Bz();e=CG(b);f=new L;N(f);H(H(f,C(284)),e);Bs(d,M(f));d=Bz();f=new L;N(f);E9(H(f,C(285)),c);Bs(d,M(f));g=Cc(30.0,c);h=Cc(10.0,c);i=0;while(true){j=a.i8.data;if(i>=j.length)break;k=1+i|0;j[i]=Wy(Bb(h,k)+Bb(g,i)|0,g,g,g);Vd(a,a.i8.data[i]);i=k;}V(a.hn.u,(b.b/2|0)-1|0,(b.a/2|0)-1|0);f=a.eh;V(f.u,((b.b/2|0)-f.t.b|0)-10|0,50);V(a.kC.u,(b.b/2|0)+10|0,50);Co(a.jQ,b);}
function Po(a,b){var c,d,e,f,g;c=Bz();d=!b.iY?C(286):C(287);e=b.d_;f=b.bk;g=b.vO;b=new L;N(b);If(H(U(H(H(H(b,d),e),C(288)),f),C(289)),g);Bs(c,M(b));return 0;}
function WE(){var a=this;Ci.call(a);a.BP=null;a.jD=null;a.i$=null;a.hv=null;a.dg=null;a.dG=null;a.mK=null;a.mq=null;a.ix=0;a.iH=null;a.iG=null;}
function Ta(a,b,c){FC(b,c);FU(b);}
function ACk(a,b,c,d,e,f){var g,h;g=DS(f,c,120,b);Ck(g,e);e=!b?C(290):C(291);h=new L;N(h);H(H(H(h,e),d),C(150));d=M(h);BS(g,d,0.0,20.0);BS(g,d,0.25,40.0);BS(g,d,0.5,60.0);BS(g,d,0.75,80.0);BS(g,d,1.0,100.0);h=CT(f);CK(h,g);Eq(g);return h;}
function ATn(a,b){return 0;}
function ALQ(a){var b,c,d,e,f,g,h,i;b=a.B.E;EB(b,a.jD);B2(b,0);c=a.i$;d=c.a;e=a.hv;f=d-e.a|0;g=c.b-e.b|0;Bu(b,0,0,e,a.dg.bj);Bu(b,g,0,a.hv,a.dG.bj);Bu(b,0,f,a.hv,a.dg.V);Bu(b,g,f,a.hv,a.dG.V);c=a.dg;e=c.u;h=e.a;i=((a.i$.a*3|0)/4|0)-(c.t.a/2|0)|0;Ii(c,b,e.b,h,a.iH,0,1);c=a.dg;Ii(c,b,c.u.b,i,a.iH,1,1);c=a.dG;Ii(c,b,c.u.b,h,a.iG,0,0);e=a.dG;Ii(e,b,e.u.b,i,a.iG,1,0);KG(b,C(283));}
function AN_(a,b,c){var d,e;Co(a.i$,b);V(a.hv,b.b/2|0,b.a/2|0);d=a.i$.a/4|0;e=a.dg;d=d-(e.t.a/2|0)|0;V(e.u,(b.b/4|0)-(a.ix/2|0)|0,d);V(a.dG.u,((b.b*3|0)/4|0)-(a.ix/2|0)|0,d);}
function Qa(){var a=this;Eb.call(a);a.tL=null;a.eU=null;a.dr=null;a.eJ=null;a.pe=null;}
function AQg(a,b,c){var d;d=HS(a.n,a.pe);IC(a.eU,d,a.n);IC(a.dr,d,a.n);}
function TZ(b){return Jb(b,AHX());}
function Jb(b,c){var d;d=Mf();Nb(d,Lm(b,Jt(c,25)),!b?null:Jb(b-1|0,c));Nb(d,Lm(b,Jt(c,20)),!b?null:Jb(b-1|0,c));Nb(d,Lm(b,Jt(c,15)),!b?null:Jb(b-1|0,c));Nb(d,Lm(b,Jt(c,10)),!b?null:Jb(b-1|0,c));return G9(d);}
function Lm(b,c){var d;if(b){d=new L;N(d);H(H(U(d,b),C(28)),c);c=M(d);}return c;}
function Nb(b,c,d){if(d!==null)Fl(b,c,d);else{d=new AAG;d.sS=c;DK(b,c,d);}}
function AOg(a,b,c){var d,e;VA(a,b,c);b=a.n.bP;d=Eu(a.eU);e=Eu(a.dr);Lb(a.eU,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);Lb(a.dr,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function ANr(a){var b,c,d,e,f,g,h,i;FI(a);b=a.B.E;B2(b,1);c=a.tL;d=a.n;e=d.bP;V(c.n4,e.b,Cc(2.0,d.ci));V(c.oT,Cc(2.0,d.ci),e.a);Fs();f=A4q;g=d.b$;h=e.a/2|0;i=c.n4;Bu(g,0,h-(i.a/2|0)|0,i,f);g=d.b$;h=e.b/2|0;c=c.oT;Bu(g,h-(c.b/2|0)|0,0,c,f);M_(a.eU,a.n);M_(a.dr,a.n);Gy(a.eJ);B2(b,0);}
function AQ_(a,b){var c,d,e;c=L8(a.eJ,b);d=L_(a.eU,b.h,a.n.cK);e=L_(a.dr,b.h,a.n.cK);return !c&&!d&&!e?0:1;}
function AWU(a,b,c){return NH(a.eJ,b,c);}
function AV$(a,b,c){return DC(a.eJ);}
function AK_(a,b,c,d){var e,f,g;e=KX(a.eJ,b,c,d);f=M1(a.eU,b.h,c,d);g=M1(a.dr,b.h,c,d);return !e&&!f&&!g?0:1;}
function VZ(){var a=this;CD.call(a);a.jo=null;a.kO=null;a.mj=null;}
function AM7(a,b,c){if(b===0.0)S6(a);}
function AT2(a){SG(a);Gy(a.jo);}
function S6(a){var b,c,d,e,f,g,h;b=a.kO;if(b!==null){Kg(a.bC,b);Mj(b);}b=(Ir()).df;c=A18(a.n,new OZ);d=Ec(C(152),14.0);e=AQd();f=0;while(f<300){g=Dc(f);h=new VQ;h.q_=C(292);h.q$=g;h.q9=C(293);NY(e,C(292),g,C(293),h);f=f+1|0;}Py(c,AAe(e));ACo(c,b,d);g=H$(a.n);h=N6(c,a.n);HU(h,b.mu,b.l0);GT(g,h);g.di=b;E8(g,C(294),a.mj,2.0);a.kO=g;Es(a.bC,g);RO(a);}
function ALA(a,b,c){Ip(a,b,c);RO(a);}
function RO(a){var b,c,d;b=a.n.bP;DQ(a.kO,BD((b.b*2|0)/10|0,(b.a*4|0)/10|0),BD((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.kO;b=ACx(c.T.j);d=new L;N(d);H(H(d,C(295)),b);E8(c,M(d),a.mj,2.0);}
function Pj(){var a=this;Eb.call(a);a.ll=null;a.hf=null;a.f2=null;a.jW=null;a.sK=null;a.jI=null;a.hy=null;a.gR=null;a.kq=0;a.he=0;}
function P8(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hf.m>0){d=DR();e=a.hf;f=d*(e.m-1|0)|0;e=EJ(e,f);EJ(a.f2,f);f=a.he;g=e.t;a.he=f-Bb(g.b,g.a)|0;I7(a.ll,e.de);}c=c+1|0;}}
function MV(a,b){var c,d,e,f,g,h,i,j;c=JK(a.n);Ck(c,a.jW);d=0;while(d<b){e=Jt(a.jI,1+(DR()*19.0|0)|0);f=KI();g=f.de;h=a.ll;BL(c);i=new S2;i.wJ=c;BT(g,JY(h,e,i));(AAF(DR(),1.0,1.0,f.bj)).bD=0.5;h=f.u;g=f.de;V(h,g.bl|0,g.bp|0);h=f.t;g=f.de;V(h,g.bd|0,g.bD|0);BG(a.f2,e);BG(a.hf,f);j=a.he;h=f.t;a.he=j+Bb(h.b,h.a)|0;d=d+1|0;}a.gR=Kj(a.ll);}
function AVZ(a){var b,c,d,e,f,g,h,i;FI(a);b=a.B.E;B2(b,1);c=a.n.b$;if(a.f2.m){d=a.gR;d=GR(c,d.b,d.a);Ck(d,a.jW);e=a.jW.dd;Bu(c,0,0,a.gR,a.sK);f=0;while(f<a.f2.m){g=Bw(a.hf,f);h=Bw(a.f2,f);g=g.de;BS(d,h,g.bl,g.bp+e);f=f+1|0;}g=a.hy;if(!(g!==null&&Cb(g)==a.gR.b&&Df(a.hy)==a.gR.a))a.hy=Ct(a.hy,CT(c));CK(a.hy,d);Eq(d);i=0;while(i<a.f2.m){d=Bw(a.hf,i);GI(d,CI(0));Ey(d,c,a.hy,0,0);i=i+1|0;}}B2(b,0);}
function AJY(a,b){var c,d;if(a.kq){c=a.gR;d=Bc(Bb(c.b,c.a),2211840);if(a.he/d<=0.7)MV(a,F$(a.jI,5));else P8(a,F$(a.jI,5));}return a.kq;}
function VT(){var a=this;Ci.call(a);a.ek=null;a.hl=null;a.i9=null;a.l7=null;a.eB=0;a.xj=0;a.sL=null;a.lJ=0;a.q2=0;a.rN=null;a.wt=null;}
function AJy(a){var b,c;b=a.eB;c=new L;N(c);U(H(c,C(296)),b);$rt_globals.console.info($rt_ustr(M(c)));EB(a.ek,a.sL);JP(a.i9,a.eB,0,GC(a),5000,a.l7.b,20);B2(a.ek,1);AAV(a.i9,a.ek);B2(a.ek,0);b=a.eB;c=new L;N(c);U(H(c,C(296)),b);$rt_globals.console.info($rt_ustr(M(c)));Xl(a.hl,a.eB/a.lJ|0,a.ek);Wf(a.hl,a.eB,GC(a),a.wt,a.ek);}
function AJw(a,b,c){a.l7=b;U2(a.hl,BD(0,0),50,GC(a),c);Wi(a.hl,a.ek,0,GC(a));}
function Zs(a){return 5000-GC(a)|0;}
function GC(a){return Bc(a.xj,a.l7.a);}
function D4(){var a=this;Ci.call(a);a.oe=null;a.hE=null;a.AD=0.0;}
function A4L(a){var b=new D4();IV(b,a);return b;}
function IV(a,b){DT(a,b);a.oe=AEc(0,0,64);a.hE=new Bh;Pv(b.cg,I1(BJ(a)));}
function U9(a){EB(a.B.E,a.oe);}
function VJ(a,b,c){Co(a.hE,b);a.AD=c;}
var S$=G(D4);
function PH(){Eb.call(this);this.ji=null;}
function AX$(a){FI(a);Gy(a.ji);}
function Hz(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.B.cg;f=new N7;f.DC=a;f.z$=b;g=Q(B,1);h=g.data;i=BK(1);i.data[0]=b;h[0]=i;CQ(e,f,C(297),g);d=d+1|0;}}
function AAY(a,b){var c,d,e,f,g,h;c=b.data;d=Bz();e=CG(c[0]);f=new L;N(f);H(H(f,C(298)),e);Bs(d,M(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((Le(b,1)).iP));d=Bz();e=CG(c[1]);if(b===null)f=C(22);else{f=new L;N(f);B0(f,C(35));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B0(f,C(36));U(f,c[g]);g=g+1|0;}B0(f,C(37));f=M(f);}h=new L;N(h);H(H(H(H(h,C(299)),e),C(300)),f);Bs(d,M(h));}
function OF(){var a=this;D4.call(a);a.ez=null;a.f6=null;a.nD=null;a.xW=null;a.pf=null;}
function APE(a,b){b=b/5.0;Id(b-(b|0),1.0,1.0,1.0,a.f6.V);return 0;}
function AM8(a){U9(a);Ey(a.ez,a.B.E,a.xW,0,0);AB2(a.f6,a.B.E,a.nD,0,0,0.0);KG(a.B.E,C(283));}
function AYz(a,b,c){var d,e,f;VJ(a,b,c);V(a.f6.u,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.ez;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function VO(){var a=this;D4.call(a);a.gr=null;a.qN=null;a.lC=null;a.kv=null;a.i3=null;}
function AZA(a){var b,c,d,e,f,g;U9(a);b=a.B.E;c=a.kv;MH(b,c.b,c.a,a.i3);b=a.gr;c=a.qN;d=a.hE;e=a.B.E;f=0;while(true){g=0;while(true){Ey(b,e,c,g,f);g=g+Cb(c)|0;if(g>=d.b)break;}f=f+Df(c)|0;if(f>=d.a)break;}Gf(a.B.E);}
function AO8(a,b,c){VJ(a,b,c);V(a.i3,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function VH(){var a=this;Ci.call(a);a.eF=null;a.lK=null;a.f8=null;a.b7=null;a.e6=0;a.iE=null;a.e5=0;a.CT=20;a.Dg=11;a.Au=220;a.k7=null;a.B9=5000;a.h1=0;a.gk=null;}
function AX5(a){var b,c,d,e,f,g,h;b=a.iE;c=a.e5;d=a.k7;JP(b,c,0,d.a,5000,d.b,20);B2(a.eF,1);AAV(a.iE,a.eF);if(a.b7===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BS(a.lK,Dc(e),0.0,c);}b=CT(a.eF);a.b7=b;CK(b,a.lK);}if(a.e5<=a.e6)while(true){f=a.e6;if(f<=a.e5)break;a.e6=f-20|0;b=a.f8;g=a.h1-1|0;a.h1=g;BS(b,Dc(g),0.0,20.0);IU(a.b7,a.f8,0,a.e6%220|0);ET(a.f8);}else while(a.e6<(a.e5-20|0)){b=a.f8;g=a.h1+1|0;a.h1=g;BS(b,Dc((g+11|0)-1|0),0.0,20.0);IU(a.b7,a.f8,0,a.e6%220|0);ET(a.f8);a.e6=a.e6+20|0;}b=HF(0,0,Cb(a.b7),Df(a.b7));Il(b,
0,0,Cb(a.b7),Df(a.b7));GI(b,a.gk.data[0]);Fw(b,a.gk.data[1]);Ey(b,a.eF,a.b7,400,0);g=a.e5%220|0;f=Bc(Df(a.b7)-g|0,200);d=HF(0,0,Cb(a.b7),f);Il(d,0,g,Cb(a.b7),f);GI(d,a.gk.data[0]);Fw(d,a.gk.data[1]);Ey(d,a.eF,a.b7,0,0);h=HF(0,f,Cb(a.b7),(Df(a.b7)-f|0)-20|0);Il(h,0,0,Cb(a.b7),(Df(a.b7)-f|0)-20|0);GI(h,a.gk.data[1]);Fw(h,a.gk.data[0]);Ey(h,a.eF,a.b7,0,0);}
function ANu(a,b,c){Co(a.k7,b);}
function AVt(a,b){return 0;}
function UQ(a){return 5000-a.k7.a|0;}
function JQ(){D4.call(this);this.d8=0;}
function Ub(a){var b,c;b=a.B.cg;c=new YN;c.rI=a;TS(b,c,OL(a));}
function RL(a){var b,c,d,e;b=a.d8+1|0;a.d8=b;c=I1(F(JQ));d=new L;N(d);H(H(U(H(d,C(301)),b),C(28)),c);e=M(d);c=a.B.cg;d=new ABT;d.r3=e;XA(c,e,d,OL(a));}
function OL(a){var b;b=new SX;b.zJ=a;return b;}
function AQP(a,b,c,d){a:{switch(c){case 0:break;case 2:RL(a);break a;default:break a;}Ub(a);}return 1;}
function Vk(){var a=this;Ci.call(a);a.wA=null;a.gm=null;a.mS=null;a.ip=null;}
function AZm(a){var b;b=a.B.E;EB(b,a.wA);Ey(a.gm,b,a.mS,0,0);}
function ATr(a,b,c){var d,e,f;d=a.gm;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Hi(){var a=this;Ci.call(a);a.x5=null;a.cj=null;a.d4=null;a.dj=null;a.fd=null;a.eE=null;}
function N0(a,b){var c,d;DT(a,b);a.x5=CI(20);a.cj=Vc();a.d4=new Bh;a.dj=new Bh;a.fd=new Bh;a.eE=new Bh;c=b.q.bM;d=new Yn;d.CF=a;Z(c,d);Z(b.q.bx,a);b=a.cj.bj;Fs();BT(b,A30);BT(a.cj.V,A32);}
function AEx(a){var b,c,d;b=a.B.E;EB(b,a.x5);c=a.cj;d=c.u;Bu(b,d.b,d.a,c.t,c.bj);B2(b,1);c=a.cj;d=c.u;ACw(b,d.b,d.a,c.t,a.d4,a.dj,a.fd,a.eE,c.V);B2(b,0);}
function ARu(a,b){return 0;}
var WR=G(Hi);
function AU9(a,b,c){var d,e,f;d=a.cj;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);V(a.d4,0,0);V(a.dj,Bc(b.b,b.a),Bc(b.b,b.a));b=a.fd;d=a.d4;V(b,d.b,d.a+20|0);b=a.eE;d=a.dj;V(b,d.b,d.a+40|0);}
function AWC(a,b){var c,d,e;Co(a.d4,b.h);b=a.dj;c=a.cj;d=c.u;e=d.b;c=c.t;V(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.fd;c=a.d4;V(b,c.b,c.a+20|0);b=a.eE;c=a.dj;V(b,c.b,c.a+40|0);return 0;}
function WQ(){var a=this;Hi.call(a);a.fH=null;a.gp=null;}
function AYY(a,b){var c;c=a.dj;b=b.h;c.a=b.a-50|0;a.eE.a=b.a+100|0;return 1;}
function AM3(a){var b,c,d,e,f,g,h;b=Bd(a.d4.b,a.fd.b);c=Bc(a.dj.b,a.eE.b);d=Bc(a.d4.a,a.dj.a)-50|0;e=Bd(a.fd.a,a.eE.a)+50|0;HH(a.cj,b,d,c-b|0,e-d|0);AEx(a);f=a.cj.u.b-10|0;VL(a,a.B.E,10,f,a.d4,a.fd);g=a.cj;h=g.u.b+g.t.b|0;VL(a,a.B.E,h,f,a.dj,a.eE);}
function VL(a,b,c,d,e,f){var g;V(a.fH,c,a.cj.u.a);V(a.gp,d,e.a-a.cj.u.a|0);g=a.fH;Bu(b,g.b,g.a,a.gp,a.cj.bj);V(a.fH,c,e.a);V(a.gp,d,f.a-e.a|0);e=a.fH;Bu(b,e.b,e.a,a.gp,a.cj.V);V(a.fH,c,f.a);e=a.gp;g=a.cj;V(e,d,(g.u.a+g.t.a|0)-f.a|0);e=a.fH;Bu(b,e.b,e.a,a.gp,a.cj.bj);}
function AKE(a,b,c){}
function AAX(){var a=this;CD.call(a);a.iv=null;a.jx=null;a.jy=null;a.r2=null;}
function AOb(a,b,c){if(b===0.0)XI(a);}
function AXC(a){SG(a);Gy(a.iv);}
function XI(a){T9(a,a.jx);T9(a,a.jy);a.jx=AAU(a,0.5,0,C(302));a.jy=AAU(a,1.0,1,C(303));Es(a.bC,a.jx);Es(a.bC,a.jy);ZK(a);}
function T9(a,b){if(b!==null){Kg(a.bC,b);Mj(b);}}
function AAU(a,b,c,d){var e,f,g;e=H$(a.n);f=new Q3;g=new RR;g.pj=a;g.pl=e;g.pk=d;ME(f);f.lc=new BZ;f.nU=new Bh;f.sQ=g;f.sN=b;if(c){g=N6(f,a.n);HU(g,A4M,A4N);f=g;}GT(e,f);e.di=Fm();return e;}
function AWx(a,b,c){Ip(a,b,c);ZK(a);}
function ZK(a){var b;b=a.n.bP;DQ(a.jy,BD((b.b*2|0)/10|0,(b.a*2|0)/10|0),BD((b.b*7|0)/10|0,(b.a*7|0)/10|0));DQ(a.jx,BD(b.b/10|0,b.a/10|0),BD((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function YV(){CD.call(this);this.kr=null;}
function AQB(a,b,c){var d;if(b===0.0){d=a.n.bP;DQ(a.kr,BD(d.b/10|0,d.a/10|0),BD((d.b*6|0)/10|0,(d.a*6|0)/10|0));}}
function RI(){var a=this;CD.call(a);a.ou=null;a.eC=null;a.mL=null;a.Ba=null;}
function AMy(a,b){return I$(a.eC,b);}
function ALs(a,b,c){var d;if(b===0.0){d=a.n.bP;DQ(a.mL,BD(d.b/20|0,d.a/20|0),BD((d.b*9|0)/10|0,(d.a*9|0)/10|0));}}
function AV7(a,b){BL(b);Ka(a.ou,b);ID(a.eC,b);a.mL.di=b.df;}
function AUT(a,b){}
function Pp(){B.call(this);this.ph=null;}
function AVS(a,b){return DF(a.ph,null);}
var Oh=G(J2);
function ALX(a){return HX(1);}
function AZO(a,b,c){AGF(a,b,c);}
function P$(){var a=this;CD.call(a);a.oy=null;a.kQ=null;a.jp=null;}
function AXH(a,b,c){var d,e,f,g;if(b===0.0){d=a.jp;e=a.n.bP;f=ABw(d.Q);g=e.a-f|0;DQ(d,BD(e.b/20|0,f+(g/20|0)|0),BD((e.b*9|0)/10|0,(g*9|0)/10|0));}}
function SE(){var a=this;CD.call(a);a.gy=null;a.ia=null;a.y3=null;}
function ACy(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BI(c,d);h=g>=0?0:1+SD(f,2.0)|0;i=g>0?0:1+SD(f,3.0)|0;j=Q(FD,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new L;N(m);U(H(m,C(304)),g);k[g]=ACy(M(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){m=new FD;n=new L;N(n);U(H(n,C(305)),g);Wm(m,M(n),c);m.hk=A4O;n=new PQ;n.qW=m;m.Ae=n;if(ZM(f)<0.25){n=I8(m.iD,0);n.bL=n.bL|2;}k[h+g|0]=m;g=g+1|0;}n=new FD;Wm(n,b,c);n.hk=A4O;n.hk=j;b=new S8;b.zE=n;b.zF=e;n.qf=b;n.tQ=b;if((c+c|0)>d)RX(n);else WK(n);return n;}
function AVX(a,b,c){var d;if(b===0.0){d=a.n.bP;DQ(a.gy,BD(d.b/30|0,d.a/10|0),BD((d.b*3|0)/10|0,(d.a*8|0)/10|0));}}
function Zb(){var a=this;Ci.call(a);a.uA=null;a.ma=null;a.e3=null;a.l4=null;a.l9=0.0;a.gP=null;a.zP=null;a.vz=null;a.sD=null;a.t_=null;a.s5=null;a.pB=null;a.As=null;a.pw=null;a.kl=null;}
var A4P=0;function A2s(a){var b=new Zb();AY2(b,a);return b;}
function AY2(a,b){var c,d,e;DT(a,b);a.uA=new BZ;a.ma=ABt(1.0,0.0,0.0,1.0);a.e3=Vc();a.l4=new Bh;a.l9=3.1415927410125732;c=AFY();a.gP=c;a.zP=GP(c,1.25);a.vz=GP(a.gP,1.3333333730697632);a.sD=GP(a.gP,1.5);a.t_=GP(a.gP,1.6666666269302368);a.s5=GP(a.gP,2.0);a.pB=ABt(a.l9/24.0,15.0,3.0,0.5);c=ABt(a.l9/12.0,25.0,3.0,0.5);a.As=c;a.pw=DD([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.kl=I(BZ,[a.gP,a.zP,a.vz,a.sD,a.t_,a.s5,a.pB,c]);c=b.q.bM;d=new Sw;d.Dc=a;Z(c,d);Z(b.q.bx,a);b=a.e3.V;Fs();BT(b,A30);HH(a.e3,0,0,600,60);e
=KY(0.5,0.375);JZ(0.375,e);JZ(0.375,JZ(3.0,KY(e,3.0)));GP(AFY(),3.0);}
function AYP(a,b,c){var d,e,f;Co(a.l4,b);d=a.e3;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function GP(b,c){var d;d=new BZ;ZO(b,c,d);return d;}
function AFY(){var b;b=new BZ;Mh(b);return b;}
function APt(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.B.E;EB(b,a.uA);B2(b,1);c=a.e3;d=c.u.b;e=c.t.a/2|0;f=0;while(true){g=a.kl.data;if(f>=g.length)break;h=a.pw.data[f];c=g[f];i=Pt(c);j=a.e3;k=j.u;l=k.b;m=k.a;M8(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.ma);f=f+1|0;}if(A4P){c=A1$(1,2);n=0;while(n<1000){h=F$(c,a.kl.data.length);l=F$(c,a.l4.a-a.e3.t.a|0);j=a.kl.data[h];i=j.bp;i=i-(i|0)>=0.25?0.0:0.5;k=a.e3;M8(b,k.u.b,l,k.t,d+i,(e+l|0)+i,j,a.ma);n=n+1|0;}}B2(b,0);}
function AVB(a,b){return A4P;}
function Jx(){var a=this;B.call(a);a.zW=null;a.ed=null;a.w7=null;a.Ch=null;a.t8=null;a.lg=null;a.rL=null;a.z0=null;a.iy=null;a.iq=null;a.gz=null;}
function A4Q(a,b,c,d,e,f,g,h,i,j,k){var l=new Jx();NK(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function NK(a,b,c,d,e,f,g,h,i,j,k,l){a.zW=b;a.ed=c;a.w7=d;a.Ch=e;a.t8=f;a.lg=g;a.rL=h;a.z0=i;a.iy=j;a.iq=k;a.gz=l;}
var ADw=G(0);
function ACK(){var a=this;B.call(a);a.ml=null;a.ju=null;a.rO=null;a.pL=null;}
function AGK(a,b,c,d){var e=new ACK();AY7(e,a,b,c,d);return e;}
function AY7(a,b,c,d,e){a.ml=b;a.ju=c;a.rO=d;a.pL=e;}
var AF7=G(0);
function Fm(){var b,c,d;b=new I5;c=new Jl;ASm();d=A4R;NQ(c,d,A4S,A4T,A4U,A4V,d);MI(b,c,AIw(),AIM(S(C(306)),S(C(276)),S(C(277))),AIw(),ACz(1,0.125),A4W,A4X);return b;}
function AIw(){var b,c;b=new JO;c=S(C(307));ASm();Lq(b,c,A4Y,A4Z);return b;}
function AHR(){var b,c;b=new JO;c=S(C(277));AJ9();Lq(b,c,A40,A41);return b;}
function AIi(){var b,c;b=new JO;AHF();c=A42;AKr();Lq(b,c,A43,A44);return b;}
function AIY(){var a=this;B.call(a);a.u8=null;a.pg=null;a.xr=null;a.qc=null;}
function ACP(a,b,c,d){var e=new AIY();AKV(e,a,b,c,d);return e;}
function AKV(a,b,c,d,e){a.u8=b;a.pg=c;a.xr=d;a.qc=e;}
function ACs(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dW.pg;break a;case 3:if(c!=3){b=b.dW.qc;break a;}b=b.dW.xr;break a;default:b=b.bo.ed;break a;}b=b.dW.u8;}return b;}
function Jh(a,b,c){return ACs(a,b,0,c);}
function NR(){var a=this;B.call(a);a.kJ=null;a.kb=null;}
function N$(a,b){var c;c=a.kb;a.kb=b;return c;}
function Kv(){var a=this;NR.call(a);a.bT=null;a.b6=null;a.gc=0;a.gq=0;}
function KS(a){var b;b=L3(a);if(b==2){if(L3(a.b6)<0)a.b6=O0(a.b6);return Rb(a);}if(b!=(-2))return a;if(L3(a.bT)>0)a.bT=Rb(a.bT);return O0(a);}
function L3(a){var b,c;b=a.b6;c=b===null?0:b.gc;b=a.bT;return c-(b===null?0:b.gc)|0;}
function O0(a){var b;b=a.bT;a.bT=b.b6;b.b6=a;EF(a);EF(b);return b;}
function Rb(a){var b;b=a.b6;a.b6=b.bT;b.bT=a;EF(a);EF(b);return b;}
function EF(a){var b,c,d;b=a.b6;c=b===null?0:b.gc;b=a.bT;d=b===null?0:b.gc;a.gc=Bd(c,d)+1|0;a.gq=1;b=a.bT;if(b!==null)a.gq=1+b.gq|0;b=a.b6;if(b!==null)a.gq=a.gq+b.gq|0;}
var AIo=G();
function ALy(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new RC;c=c.buffer;d.gb=c;d.o5=new $rt_globals.Int8Array(c);d.lT=new $rt_globals.Uint16Array(c);d.wQ=new $rt_globals.Int32Array(c);d.tp=new $rt_globals.Float32Array(c);d.tH=new $rt_globals.Float64Array(c);e=d.gb.byteLength;c=new L;N(c);U(H(c,C(308)),e);CP(M(c));e=b.callToCpp1();c=new L;N(c);U(H(c,C(309)),e);CP(M(c));f=b.callToCpp2();c=new L;N(c);E9(H(c,C(310)),f);CP(M(c));c=OE(d,b.getC8String());g=new L;N(g);H(H(g,C(311)),c);CP(M(g));c
=OR(d,b.getC16String());g=new L;N(g);H(H(g,C(312)),c);CP(M(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gb,h,8));c=AGU(i);g=new L;N(g);H(H(g,C(313)),c);CP(M(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gb,h,8));c=AVQ(j);g=new L;N(g);H(H(g,C(314)),c);CP(M(g));k=AEY(d,b.getCDoubleArray8(),8);l=AZD(k);c=new L;N(c);H(H(c,C(315)),l);CP(D7(c));l=AZr(b.getC8String(),C(316),d);c=M3();H(H(c,C(317)),l);CP(D7(c));l=ARS(b.getC16String(),C(318),
d);c=M3();H(H(c,C(319)),l);CP(D7(c));c=AUk(i,d,b.getCIntArray8(),DD([11,22,33,44,55,66,77,88]));g=M3();H(H(g,C(320)),c);CP(D7(g));c=AWb(j,d,b.getCFloatArray8(),100,DD([111,222,333,444,555,666,777,888]));g=M3();H(H(g,C(321)),c);CP(D7(g));b=AWy(k,d,b.getCDoubleArray8(),1000,DD([1111,2222,3333,4444,5555,6666,7777,8888]));c=M3();H(H(c,C(322)),b);CP(D7(c));}
function AWb(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(323);h=0;i=e;a:{while(h<g){if(CV(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.tp[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(324);}return C(325);}
function AWy(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(323);h=0;i=e;a:{while(h<g){if(Gs(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.tH[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(324);}return C(325);}
function AUk(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(323);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.wQ[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(324);}return C(325);}
function AZr(b,c,d){var e,f,g,h;e=OE(d,b);if(!Bm(c,e))return C(326);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.o5[h])return C(327);f=f+1|0;}return C(324);}
function ARS(b,c,d){var e,f,g,h;e=OR(d,b);if(!Bm(c,e))return C(326);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.lT[h>>>1|0]&65535))return C(327);f=f+1|0;}return C(324);}
function CP(b){Rz(C(2),b);}
function AQA(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function R$(){B.call(this);this.sf=null;}
function ALt(a,b){return AE0(a.sf,b);}
function R8(){B.call(this);this.yZ=null;}
function AOF(a,b){H5(a.yZ,b);}
function R9(){B.call(this);this.sa=null;}
function AWM(a,b){b=b;return ADo(a.sa,b);}
function AIT(){JN.call(this);this.de=null;}
function KI(){var a=new AIT();AYt(a);return a;}
function HF(a,b,c,d){var e=new AIT();AQx(e,a,b,c,d);return e;}
function AYt(a){X$(a);a.de=new BZ;}
function AQx(a,b,c,d,e){X$(a);a.de=new BZ;HH(a,b,c,d,e);}
function FU(a){var b,c;b=a.t;c=a.de;V(b,c.bd-c.bl|0,c.bD-c.bp|0);}
function FC(a,b){Il(a,0,0,Cb(b),Df(b));}
function Il(a,b,c,d,e){Cs(a.de,b,c,d,e);}
function Ey(a,b,c,d,e){var f;f=a.u;DW(b,f.b+d|0,f.a+e|0,a.t,a.de,c,a.V,a.bj,0);}
function Wc(a,b,c,d){var e;e=a.u;DW(b,e.b,e.a,a.t,a.de,c,a.V,a.bj,d);}
function Ii(a,b,c,d,e,f,g){DW(b,c,d,a.t,a.de,e,!f?a.V:a.bj,!f?a.bj:a.V,g);}
function GI(a,b){BT(a.V,b);}
function Fw(a,b){BT(a.bj,b);}
function X8(){B.call(this);this.fp=null;}
function ALR(a,b){var c,d,e,f,g,h;c=b.h;d=c.b;e=a.fp.hn;f=e.t;d=d-f.b|0;g=c.a-f.a|0;V(e.u,d,g);c=a.fp;e=c.B.cg;b=b.h;d=0;a:{while(true){h=c.i8.data;if(d>=h.length)break;if(Fa(h[d],b)){b=c.pF.data[d];break a;}d=d+1|0;}b=null;}Uf(e,b);return 1;}
function AJN(a,b,c,d){if(!c&&d==2){b=a.fp;Vd(b,b.eh);}return 1;}
function ALF(a,b,c){var d,e;d=Bz();e=new L;N(e);U(H(e,C(328)),c);Bs(d,M(e));if(c)return null;d=b.h;e=!Fa(a.fp.eh,d)?null:d;YF(a.fp.io,d.b,d.a);b=a.fp;Sj(b.io,Kw(b.B.cg));if(e===null)b=A3$;else{b=new Yx;b.tY=a;b.tZ=e;}return b;}
function AKG(a,b,c){var d;b=Bz();d=new L;N(d);U(H(d,C(329)),c);Bs(b,M(d));return 1;}
function SO(){B.call(this);this.z7=null;}
function AXe(a,b){return Po(a.z7,b);}
function SN(){B.call(this);this.tk=null;}
function AUr(a,b){return Po(a.tk,b);}
function SM(){B.call(this);this.CA=null;}
function AQR(a,b,c){var d,e;Bs(Bz(),C(330));d=!c?C(331):C(53);e=new L;N(e);H(H(H(e,C(332)),d),C(333));ZP(b,M(e));return 1;}
function SL(){B.call(this);this.AB=null;}
function AJT(a){Bs(Bz(),C(334));}
function SK(){B.call(this);this.BH=null;}
function ATz(a,b){Bs(Bz(),C(335));return 1;}
function SJ(){B.call(this);this.xM=null;}
function AXr(a,b,c,d){var e,f,g;b=a.xM;e=( -d|0)/10|0;b=b.eh;f=b.t;f.b=f.b+e|0;f.a=f.a+e|0;b=b.u;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function HQ(){var a=this;BZ.call(a);a.ha=0;a.hd=0;a.hb=0;a.hc=0;}
function CI(a){var b=new HQ();AZc(b,a);return b;}
function Ds(a,b,c){var d=new HQ();ANi(d,a,b,c);return d;}
function S(a){var b=new HQ();AWg(b,a);return b;}
function ED(a,b,c,d){var e=new HQ();TE(e,a,b,c,d);return e;}
function BU(a){var b=new HQ();KW(b,a);return b;}
function AZc(a,b){TE(a,b,b,b,255);}
function ANi(a,b,c,d){TE(a,b,c,d,255);}
function AWg(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.ha=JS(P(b,1))*17|0;a.hd=JS(P(b,2))*17|0;a.hb=JS(P(b,3))*17|0;a.hc=255;}else{a.ha=MG(P(b,1),P(b,2));a.hd=MG(P(b,3),P(b,4));a.hb=MG(P(b,5),P(b,6));a.hc=J(b)!=9?255:MG(P(b,7),P(b,8));}Is(a.ha,a.hd,a.hb,a.hc,a);return;}}
function TE(a,b,c,d,e){a.ha=b;a.hd=c;a.hb=d;a.hc=e;Is(b,c,d,e,a);}
function KW(a,b){a.ha=b.ha;a.hd=b.hd;a.hb=b.hb;a.hc=b.hc;BT(a,b);}
function JS(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function MG(b,c){return (16*JS(b)|0)+JS(c)|0;}
var AG_=G(0);
function HX(b){return !b?I(BC,[C(152),C(153),C(336)]):I(BC,[C(152),C(153),C(336),C(33)]);}
function OB(){B.call(this);this.k$=null;}
function ANV(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.k$.dg;e=DR();f=e-0.5+(DR()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DR()*0.3;h=0.5+DR()*0.5;Id(e,g,h,1.0,b.V);Id(f,g,h,1.0,b.bj);b=a.k$;BT(b.dG.V,b.dg.V);b=a.k$;BT(b.dG.bj,b.dg.bj);}return 1;}
function Ov(){var a=this;B.call(a);a.n4=null;a.oT=null;}
function AF8(){var a=this;B.call(a);a.fK=null;a.cp=null;a.gn=null;a.g7=null;a.oh=null;a.cD=null;a.gN=null;a.c2=0;a.fP=0;a.oN=0;a.j6=0;a.kH=0;a.g0=0;a.k4=null;a.mz=null;a.ps=null;a.nW=null;}
function AFF(){var a=new AF8();AWp(a);return a;}
function AWp(a){a.cp=Vc();a.gn=new Bh;a.g7=new Bh;a.cD=A45;a.j6=(-1);a.kH=1;}
function Lk(a,b){MS(a);a.cD=b;}
function IC(a,b,c){a.fK=b;ZC(a,c);MS(a);}
function IK(a,b){var c;a.oh=b.kg;c=b.mD.nY;BT(a.cp.V,c);c=b.jA.nl;BT(a.cp.bj,c);a.nW=b.mD;}
function Ku(a){a.gN=Ct(a.gN,null);V(a.gn,0,0);a.cD=A45;a.j6=(-1);Wx(a.cp);}
function ZC(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=JK(b);d=b.ci;BL(a.fK);Ck(c,a.fK);e=K_(a.fK,1.25);f=0;a.c2=Cc(2.0,d);a.fP=Cc(3.0,d);a.oN=Cc(12.0,d);g=0;h=a.cD.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Lw(c,l.nx);n=a.oN;n=(n+m|0)+n|0;f=Bd(f,n);b=l.e$;b.b=g;b.a=0;b=l.eb;b.b=n;b.a=e;Cs(l.jZ,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gn;b.b=g;b.a=e;b=a.cp.t;n=a.g0;if(!n){m=a.c2;m=(g+m|0)+Bb(m,a.cD.data.length)|0;}else m=(f+(a.c2*2|0)|0)+(a.fP*2|0)|0;b.b=m;if(!n)e=e+(a.c2*2|0)|0;else{n=a.c2;e=(Bb(e+n|0,a.cD.data.length)+n|
0)+(a.fP*2|0)|0;}b.a=e;}
function Lb(a,b,c){var d,e,f,g,h,i,j;V(a.cp.u,b,c);d=a.c2+a.fP|0;e=a.cD.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.e$;j.b=b+d|0;j.a=c+h|0;if(!a.g0){if(!i.eb.b)AC5();d=d+(i.eb.b+a.c2|0)|0;}else{if(!i.eb.a)AC5();h=h+(i.eb.a+a.c2|0)|0;}g=g+1|0;}}
function AC5(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Eu(a){var b,c;b=a.gn;if(b.b&&b.a)return a.cp.t;c=new Bt;Bn(c,C(337));K(c);}
function MS(a){a.kH=1;}
function M_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.b$;if(!a.cD.data.length)return;if(a.gN===null)a.gN=CT(c);a:{if(!a.kH){d=a.gn;if(Bb(d.b,d.a))break a;}d=a.gn;if(!Bb(d.b,d.a))ZC(a,b);d=a.gn;e=d.b;f=d.a;if(!Bb(e,f))return;d=DS(c,e,f,b.cu);Ck(d,a.fK);g=K_(a.fK,0.125);h=a.fK;i=h.dd;g=g+i-(i+h.es)/16.0;j=a.cD.data;e=j.length;f=0;while(f<e){h=j[f];BS(d,h.nx,h.jZ.bl+a.oN,g);f=f+1|0;}CK(a.gN,d);a.kH=0;Eq(d);}if(!Lt(a.cp)){d=a.cp;AEl(c,d.t,d.u,d.bj,a.c2,a.g7);d=a.cp;h=d.t;k=d.u;d=d.V;e=a.c2;l=a.g7;l.b=(h.b-e|0)-e
|0;l.a=(h.a-e|0)-e|0;Bu(c,k.b+e|0,k.a+e|0,l,d);if(a.g0){d=a.cp;AGw(c,d.t,d.u,0,0,RF(a.oh,b.ci),a.oh.oo,a.g7);}}j=a.cD.data;m=j.length;n=0;while(n<m){d=j[n];h=d.e$;e=h.b;f=h.a;h=d.eb;k=d.jZ;l=a.gN;o=a.nW;DW(c,e,f,h,k,l,o.sq,AAv(o,d.jz),b.cu);n=n+1|0;}b:{if(a.g0){j=a.cD.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.g7;e=(a.cp.t.b-(a.c2*2|0)|0)-(a.fP*2|0)|0;h=d.eb;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.e$;Bu(c,k.b+h.b|0,k.a,b,AAv(a.nW,d.jz));}p=p+1|0;}}}}
function L_(a,b,c){var d,e,f,g,h,i;d=Fa(a.cp,b);e=!d?(-1):PI(a,b);f=a.j6;if(f!=e){if(f>=0){g=a.cD.data[f];g.jz=0;if(a.ps!==null){h=Bz();g=CG(g);i=new L;N(i);H(H(U(H(i,C(338)),f),C(339)),g);Bs(h,M(i));}}if(e>=0){h=a.cD.data[e];g=a.mz;if(g!==null)g.pA(b,e,h);h.jz=1;}a.j6=e;}return d&&Gu(c)?1:0;}
function M1(a,b,c,d){var e,f;e=PI(a,b);if(e>=0){f=a.cD.data[e];if(!Yi(f))f.mo.l();}return 1;}
function PI(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cD.data;if(c>=d.length)return (-1);e=d[c];if(GH(b,e.e$,e.eb))return c;if(a.g0){f=e.e$;g=f.b;e=e.eb;h=e.b;g=g+h|0;i=f.a;f=a.g7;f.b=(a.cp.t.b-(a.c2*2|0)|0)-h|0;f.a=e.a;if(ADE(b,g,i,f))break;}c=c+1|0;}return c;}
function ACn(a){a.g0=1;}
function AHS(){var a=this;B.call(a);a.cS=null;a.ca=null;a.ky=null;a.kY=null;a.oq=null;a.li=null;}
function IJ(a){var b=new AHS();AVa(b,a);return b;}
function AVa(a,b){a.ca=BN();a.li=A46;a.cS=b;Z(b.c3,a);}
function FB(a,b,c){a.ky=c;a.oq=b;b=B4(a.ca);while(B5(b)){IK(B7(b),a.oq);}}
function FS(a,b,c,d){var e,f;e=a.cS;f=e.bP;if(Bb(f.b,f.a)&&e.ci!==0.0){if(a.ky!==null&&!DC(a)){a.li=d;a.kY=HS(a.cS,a.ky);e=QA(a,b,c,null);b=new Zj;b.wf=a;e.k4=b;Gk(a.cS,a);return;}b=new BR;X(b);K(b);}c=new CY;Bn(c,C(340));K(c);}
function NA(a){if(DC(a)){W6(a.cS,a);WS(a,null);a.li.l();a.li=A46;}}
function AAI(a,b,c,d,e){var f,g,h;f=AFF();ACn(f);Lk(f,c.da());IK(f,a.oq);IC(f,a.kY,a.cS);if(d===null)g=b.b;else{g=b.b;g=a.cS.bP.b<((g+(Eu(d)).b|0)+(Eu(f)).b|0)?g-(Eu(f)).b|0:(g+(Eu(d)).b|0)-d.fP|0;}h=b.a;b=a.cS.bP;Lb(f,Bd(0,Bc(g,b.b-(Eu(f)).b|0)),Bd(0,Bc(h,b.a-(Eu(f)).a|0)));b=new ABh;b.sh=a;b.si=f;b.sj=e;f.mz=b;BG(a.ca,f);return f;}
function QA(a,b,c,d){return AAI(a,b,c,d,null);}
function AY8(a,b,c){var d;a.kY=HS(a.cS,a.ky);d=B4(a.ca);while(B5(d)){IC(B7(d),a.kY,a.cS);}}
function Gy(a){var b,c;if(FR(a.ca))return;B2(a.cS.b$,1);b=0;while(true){c=a.ca;if(b>=c.m)break;M_(Bw(c,b),a.cS);b=b+1|0;}}
function L8(a,b){var c,d;c=0;d=a.ca.m-1|0;a:{while(d>=0){c=L_(Bw(a.ca,d),b.h,a.cS.cK);if(c)break a;d=d+(-1)|0;}}return c;}
function KX(a,b,c,d){var e,f;e=0;f=a.ca.m-1|0;a:{while(f>=0){e=M1(Bw(a.ca,f),b.h,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function NH(a,b,c){var d,e,f;d=null;e=a.ca.m-1|0;a:{while(e>=0){f=Bw(a.ca,e);d=b.h;c=Fa(f.cp,d);if(!c&&!Lt(f.cp)){d=f.k4;if(d!==null)d.l();}d=!c?null:A3$;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function ARy(a,b){var c;if(!DC(a))return 0;a:{switch(b.bk){case 27:NA(a);c=1;break a;default:}c=0;}return c;}
function AEZ(b,c){var d,e,f;d=b.e$;e=c.c2;f=c.fP;return BD((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function WS(a,b){var c,d;c=a.ca.m-1|0;a:{while(true){if(c<0)break a;d=Bw(a.ca,c);if(b===d)break;EJ(a.ca,c);Ku(d);c=c+(-1)|0;}}}
function DC(a){return a.ca.m<=0?0:1;}
function AUQ(a){var b,c,d,e,f,g;b=a.cS;c=b.c3;d=0;while(true){e=c.gY.data;f=e.length;if(d>=f)break;if(e[d]===a){while(true){g=d+1|0;if(g>=f)break;e[d]=e[g];d=g;}e[d]=null;c.fT=c.fT-1|0;c.iu=null;}d=d+1|0;}W6(b,a);b=a.ca;c=B4(b);while(B5(c)){Ku(B7(c));}Ig(b);}
function Xj(){B.call(this);this.w1=null;}
function ASQ(a,b){var c;c=a.w1;if(b.bk==32)Ku(c.dr);return 0;}
function Xf(){B.call(this);this.yt=null;}
function AWd(a,b){var c,d,e,f;b=b;c=a.yt;Bs(Bz(),C(341));if(!DC(c.eJ)){d=c.eJ;b=b.h;e=TZ(4);f=new Wd;f.Bv=c;FS(d,b,e,f);}return 1;}
function Sa(){var a=this;B.call(a);a.je=null;a.hL=0.0;a.lt=0;a.j1=0;}
function Ec(a,b){var c=new Sa();AGI(c,a,b);return c;}
function A1F(a,b,c,d){var e=new Sa();AJb(e,a,b,c,d);return e;}
function AGI(a,b,c){AJb(a,b,c,300,600);}
function AJb(a,b,c,d,e){a.je=b;a.hL=c;a.lt=d;a.j1=e;}
function AV5(a,b){if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){b=b;return a.hL===b.hL&&a.lt==b.lt&&a.j1==b.j1&&BV(a.je,b.je)?1:0;}return 0;}
var Xg=G();
function AZK(a){Bs(Bz(),C(342));}
var Xh=G();
function AKW(a){Bs(Bz(),C(343));}
function Cn(){var a=this;B.call(a);a.mo=null;a.jZ=null;a.e$=null;a.eb=null;a.kn=null;a.nI=null;a.jz=0;a.nx=null;}
function PD(a,b){var c=new Cn();Er(c,a,b);return c;}
function A0$(a,b,c,d){var e=new Cn();AFh(e,a,b,c,d);return e;}
function Er(a,b,c){AFh(a,b,c,null,null);}
function AFh(a,b,c,d,e){a.jZ=new BZ;a.e$=new Bh;a.eb=new Bh;a.nx=c;a.nI=e;a.mo=b;a.kn=d;}
function Yi(a){return a.kn===null?0:1;}
function Y2(){B.call(this);this.AY=null;}
function AQG(a,b){return b.iY&&b.bk==32?1:0;}
function Y3(){B.call(this);this.yu=null;}
function AKn(a,b){var c,d,e,f,g,h;b=b;c=a.yu;if(!DC(c.jo)){d=c.jo;b=b.h;e=Q(Cn,1);f=e.data;g=new Cn;h=new Rj;h.qk=c;Er(g,h,C(344));f[0]=g;FS(d,b,ER(e),A46);}return 1;}
var AGe=G();
function AIW(b){var c,d;c=GR(b,250,64);GD(c,C(279),25.0);Jp(c,187,187,187);BS(c,C(345),0.0,24.0);BS(c,C(345),0.25,56.0);d=CT(b);CK(d,c);Eq(c);return d;}
function Sk(b){var c;c=new Uw;c.jc=b;return c;}
function AIs(){var a=this;B.call(a);a.od=0;a.of=0;}
function AHX(){var a=new AIs();AXS(a);return a;}
function A1$(a,b){var c=new AIs();AIG(c,a,b);return c;}
function AXS(a){AIG(a,AH7(GN((AG4()))),GN((AG4()))^(-559038737));}
function AIG(a,b,c){var d;a.od=b;a.of=c;d=0;while(d<19){LK(a);d=d+1|0;}}
function LK(a){var b,c;b=a.od;c=a.of;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.od=c;a.of=b;return b;}
function AH7(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AHe(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function F$(a,b){return ZM(a)*b|0;}
function ZM(a){return 5.960464477539063E-8*(LK(a)&16777215);}
function SD(a,b){var c,d,e;c=AHe(LK(a));d=AV3( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function OJ(){B.call(this);this.sm=null;}
function AS1(a,b,c){var d;d=a.sm;if(b===0.0)MV(d,100);}
function OI(){B.call(this);this.yV=null;}
function ATD(a,b){var c,d,e;c=a.yV;d=b.bk;if(d==32){c.kq=c.kq?0:1;e=1;}else if(d==13){MV(c,1);e=1;}else if(d!=8)e=0;else{P8(c,1);e=1;}return e;}
var T$=G(0);
function ACN(b,c){var d;d=new Zv;d.r0=b;d.rZ=c;return d;}
function ACX(){var a=this;B.call(a);a.gv=null;a.hx=0;a.kz=0;a.gZ=0;}
function ADh(a){var b=new ACX();AN9(b,a);return b;}
function AN9(a,b){a.gv=BN();a.gZ=0;a.kz=2048;a.hx=b;}
function JY(a,b,c){var d,e,f,g,h,i;d=c.u5(b);e=a.kz;if(d>e){c=new Bt;f=new L;N(f);BM(U(H(U(H(f,C(346)),d),C(347)),e),41);Bn(c,M(f));K(c);}if(!a.hx){b=new BR;Bn(b,C(348));K(b);}a:{b=new BZ;if(d){b:{c=a.gv;if(c.m>0){c=B4(c);g=d;while(true){if(!B5(c))break b;f=B7(c);if(f.bd>=g)break;}Cs(b,f.bl,f.bp,g,a.hx);f.bl=f.bl+g;h=f.bd-g;f.bd=h;if(h===0.0)Zo(a.gv,f);break a;}}g=a.gZ;i=d;Cs(b,0.0,g,i,a.hx);BG(a.gv,ABt(i,a.gZ,a.kz-d|0,a.hx));a.gZ=a.gZ+a.hx|0;}}return b;}
function I7(a,b){var c,d,e,f,g,h,i;a:{c=AIA(b);b=a.gv;if(b.m>0){d=B4(b);while(true){if(!B5(d))break a;e=B7(d);if(e.bp===c.bp){f=e.bl;g=e.bd;h=f+g;i=c.bl;if(h===i){c.bl=f;c.bd=c.bd+g;TQ(d);}else{h=c.bd;if(i+h===f){c.bd=h+g;TQ(d);}}}}}}BG(a.gv,c);}
function Kj(a){return BD(a.kz,a.gZ);}
function OV(){var a=this;B.call(a);a.sp=null;a.ku=null;}
function AKc(a,b,c){if(c)return A3$;return F3(a.ku.i9,b.h,a.sp,1);}
function AKg(a,b,c){return 1;}
function ANT(a,b){var c;c=a.ku;return Gd(c.i9,b.h,c.rN);}
function UP(){B.call(this);this.xu=null;}
function ASZ(a,b,c,d){var e,f;b=a.xu;e=(Oj(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eB=Bc(Bd(0,b.eB+Bb(e,f)|0),Zs(b));return 1;}
function Sf(){B.call(this);this.uq=null;}
function ASC(a,b){var c,d,e;c=a.uq;if(b.cG&&b.bk==79){if(!b.bK){b=c.B.cg;d=new Px;d.xJ=c;M7(b,d);}else{b=c.B.cg;d=new Pw;d.AK=c;Zq(b,d);}e=1;}else e=0;return e;}
function TH(){B.call(this);this.so=null;}
function AZo(a,b){var c,d,e,f,g,h;b=b;c=a.so;if(!DC(c.ji)){d=c.ji;b=b.h;e=Q(Cn,5);f=e.data;g=new Cn;h=new AA4;h.tJ=c;Er(g,h,C(349));f[0]=g;g=new Cn;h=new AA5;h.x8=c;Er(g,h,C(350));f[1]=g;g=new Cn;h=new AA7;h.rr=c;Er(g,h,C(351));f[2]=g;g=new Cn;h=new AA8;h.vq=c;Er(g,h,C(352));f[3]=g;g=new Cn;h=new AA9;h.zQ=c;Er(g,h,C(353));f[4]=g;FS(d,b,ER(e),A46);}return 1;}
function TG(){B.call(this);this.Cq=null;}
function AVy(a,b){var c,d;c=EL();b=CG(b);d=new L;N(d);H(H(d,C(354)),b);Bs(c,M(d));b=new Ea;X(b);K(b);}
function TI(){B.call(this);this.pI=null;}
function ALZ(a,b){var c,d,e,f;c=a.pI;d=c.B.cg;e=new ABx;e.ux=c;f=Q(B,1);f.data[0]=b;CQ(d,e,C(355),f);}
function Xw(){B.call(this);this.mF=null;}
function AT$(a,b){var c,d,e,f,g,h;c=a.mF;d=c.pf;if(d!==null){e=c.ez.u;f=e.b;g=b.h;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.pf=g;}b=b.h;f=b.b;c=c.f6;d=c.t;f=f-d.b|0;h=b.a-d.a|0;V(c.u,f,h);return 1;}
function AY$(a,b,c){var d;if(!c){d=b.h;b=a.mF;if(!Fa(b.ez,d))d=null;b.pf=d;}return A3$;}
var C8=G(0);
var A4j=null;var A32=null;var A4k=null;var A30=null;var A4m=null;var A4l=null;var A4o=null;var A4n=null;var A4q=null;var A4p=null;var A4r=null;function Fs(){Fs=Bq(C8);AZw();}
function AZw(){A4j=CI(187);A32=S(C(356));A4k=CI(55);A30=CI(43);A4m=Ds(33,66,131);A4l=Ds(60,63,65);A4o=S(C(357));A4n=S(C(358));A4q=ED(85,85,85,128);A4p=ED(43,43,43,0);A4r=S(C(266));}
function Sb(){var a=this;B.call(a);a.qv=null;a.kI=null;}
function AP0(a,b,c){var d;if(!c){d=F3(a.kI.iE,b.h,a.qv,1);if(d!==null)return d;}return A3$;}
function AKA(a,b,c){return 1;}
function AN2(a,b){var c;c=a.kI;return Gd(c.iE,b.h,Ts(c.B.cg));}
function ACb(){B.call(this);this.rS=null;}
function AXk(a,b,c,d){var e,f;b=a.rS;e=(Oj(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e5=Bc(Bd(0,b.e5+Bb(e,f)|0),UQ(b));return 1;}
function AAA(){B.call(this);this.pr=null;}
function AMN(a,b){var c,d;a:{c=a.pr;switch(b.bk){case 67:RL(c);d=1;break a;case 86:Ub(c);d=1;break a;default:}d=0;}return d;}
var AAz=G();
function AQ0(a,b,c){return 0;}
function AAy(){B.call(this);this.tz=null;}
function AMY(a,b,c){var d,e;d=a.tz;c=d.d8+1|0;d.d8=c;d=I1(F(JQ));e=new L;N(e);H(H(U(e,c),C(359)),d);e=M(e);$rt_globals.console.info($rt_ustr(e));ZP(b,e);return 1;}
var AAx=G();
function ARL(a){return null;}
function AAB(){B.call(this);this.vT=null;}
function AWq(a){var b,c;b=a.vT;c=new ABL;c.ql=b;return c;}
function UM(){B.call(this);this.C_=null;}
function AYm(a,b){return 0;}
function AB3(){B.call(this);this.B_=null;}
function AMv(a,b){return b.iY&&b.bk==32?1:0;}
function AB4(){B.call(this);this.ul=null;}
function AKi(a,b){var c,d,e,f,g,h;b=b;c=a.ul;if(!DC(c.iv)){d=c.iv;b=b.h;e=Q(Cn,1);f=e.data;g=new Cn;h=new Ru;h.uW=c;Er(g,h,C(344));f[0]=g;FS(d,b,ER(e),A46);}return 1;}
function AG5(){var a=this;B.call(a);a.bq=null;a.Q=null;a.T=null;a.di=null;a.n3=0;}
function H$(a){var b=new AG5();AT1(b,a);return b;}
function A2h(a,b){var c=new AG5();AEG(c,a,b);return c;}
function AT1(a,b){AEG(a,b,AZZ());}
function AEG(a,b,c){var d;a.bq=b;d=new YX;Ge(d);d.lY=new BZ;d.fU=b;a.Q=d;a.T=c;}
function E8(a,b,c,d){var e,f,g,h;e=a.Q;f=BV(e.hS,c)?0:1;g=BV(e.hX,b)?0:1;h=d===e.kW?0:1;if(f){e.hS=c;e.ee=null;RQ(e,0);}e.gG=!f&&!g&&!h?0:1;e.hX=b;e.kW=d;e.hY=0;Kq(a);}
function Mj(a){var b;b=a.Q;b.dK=Ct(b.dK,null);b.ee=null;a.T=Ct(a.T,null);}
function GT(a,b){var c,d,e;c=a.T;d=c.g;e=c.j;b=Ct(c,b);a.T=b;b.eK(d,e,a.bq.ci);}
function DQ(a,b,c){var d;d=a.T;d.eK(b,c,d.bR);Kq(a);}
function Kq(a){var b,c,d;if(a.bq.ci===0.0)return;b=a.Q;c=a.T.j.b;b.j.b=c;d=b.dK;if(d!==null&&c!=Cb(d)&&!(c>=b.hY&&Cb(b.dK)>=b.hY))b.gG=1;b=a.Q;b.bR=a.bq.ci;if(ZY(b))c=0;else{b=a.Q;RQ(b,ABw(b));c=b.j.a;}b=a.Q.g;d=a.T.g;V(b,d.b,d.a-c|0);}
function Na(a,b){var c;c=!(a.n3&1)?0:1;return !c&&!Cd(a.T,b.h)?0:1;}
function M0(b,c){if(b<0)c=C(360);else if(b>0)c=C(361);return c;}
function NL(a,b,c){var d;d=a.Q.g.b;return (d-c|0)<=b&&b<d?1:0;}
function Kb(a,b,c){var d,e;d=a.Q;e=d.g.b+d.j.b|0;return e<=b&&b<(e+c|0)?1:0;}
function K2(a,b,c){var d;d=a.Q.g.a;return (d-c|0)<=b&&b<d?1:0;}
function Kz(a,b,c){var d,e;d=a.T;e=d.g.a+d.j.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M$(a,b,c){var d,e,f;d=a.Q.g.a-c|0;e=a.T;f=(e.g.a+e.j.a|0)+c|0;return d<=b&&b<f?1:0;}
function AAN(a,b,c){var d,e;d=a.Q.g.a+c|0;e=a.T;return AFg(b,d,(e.g.a+e.j.a|0)-c|0);}
function KP(a,b,c){var d,e,f;d=a.Q;e=d.g.b;f=e-c|0;e=(e+d.j.b|0)+c|0;return f<=b&&b<e?1:0;}
function PP(a,b,c){var d,e;d=a.Q;e=d.g.b;return AFg(b,e+c|0,(e+d.j.b|0)-c|0);}
function AFg(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BI(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Jo(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.b;h=b.a;b=a.T;i=b.g;j=i.b;k=i.a;b=b.j;l=b.b;m=b.a;b=new Un;b.pS=a;b.pV=e;b.pW=f;b.pT=c;b.pU=g;b.pP=j;b.pQ=l;b.pN=d;b.pO=h;b.pR=k;b.xo=m;return b;}
var AH4=G(0);
function AHn(b){Ji(b,A0j(C(362),C(182),AHb(C(363))));}
function PR(){B.call(this);this.yN=null;}
function AT7(a,b){H5(a.yN,b);}
function PS(){B.call(this);this.uS=null;}
function AW3(a,b){var c,d,e;b=b;c=a.uS;if(DN(c.n,c.eC)){d=c.ou;b=b.h;e=c.eC;Iq(d,b,e,c,e,c,new Uy);}return 1;}
function Mk(){CS.call(this);this.dQ=null;}
function AS2(a){var b,c,d;b=a.dQ.data;c=b.length;d=0;while(d<c){b[d].cH();d=d+1|0;}}
function ASt(a,b){var c,d,e;c=a.dQ.data;d=c.length;e=0;while(e<d){c[e].dh(b);e=e+1|0;}}
function AKy(a,b){var c,d,e;c=0;d=a.dQ.data.length;e=0;while(e<d){c=c|0;e=e+1|0;}return c;}
function ANd(a,b,c,d){var e,f,g;G0(a,b,c,d);e=Cc(20.0,a.bR);f=a.j.b;g=(f/2|0)-(e/2|0)|0;e=f-g|0;b=AR1(a.g);c=BD(g,a.j.a);a.dQ.data[0].eK(b,c,a.bR);b.b=a.g.b+e|0;a.dQ.data[2].eK(b,c,a.bR);b.b=a.g.b+g|0;c.b=e-g|0;a.dQ.data[1].eK(b,c,a.bR);}
function AXI(a,b,c,d){return 0;}
function AW9(a,b,c){var d,e,f,g,h;d=a.dQ.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(Cd(g,b.h)){h=g.bX(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function AXX(a,b,c){var d,e,f,g,h;d=0;e=a.dQ.data;f=e.length;g=0;while(g<f){h=e[g];if(Cd(h,b.h))d=d|h.cR(b,c);g=g+1|0;}return d;}
function AYu(a,b){var c,d,e,f,g;c=0;d=a.dQ.data;e=d.length;f=0;while(f<e){g=d[f];if(Cd(g,b.h))c=c|g.bF(b);f=f+1|0;}return c;}
function AN6(a,b,c,d){var e,f,g,h,i;e=0;f=a.dQ.data;g=f.length;h=0;while(h<g){i=f[h];if(Cd(i,b.h))e=e|i.dJ(b,c,d);h=h+1|0;}return e;}
function ABM(){var a=this;Mk.call(a);a.lE=null;a.xy=null;a.w0=null;a.p2=null;}
function Y7(){B.call(this);this.AV=null;}
function AUx(a,b){return 1;}
function Y6(){B.call(this);this.vP=null;}
function ATx(a,b){var c,d,e,f;c=a.vP;if(b.bk!=32)d=0;else{b=c.kQ;e=I(M2,[Lj(1,3,4,5,1),Lj(5,6,10,2,2),Lj(12,2,13,3,3),Lj(15,3,17,2,4)]);f=A1D(Q(FX,0),Q(FX,0),e);b.p2.hF=f;b.lE.ew=f;d=1;}return d;}
function EX(){var a=this;CS.call(a);a.cO=null;a.W=null;a.em=null;}
function AS_(){var a=new EX();ME(a);return a;}
function ME(a){Ge(a);a.cO=new Bh;a.W=new Bh;}
function AOX(a,b){a.em=b;}
function Ml(a,b,c){V(a.cO,b,c);}
function AFa(a){var b;b=a.W;b.b=Pg(a,b.b);b=a.W;b.a=ZU(a,b.a);}
function AHp(a,b){var c,d;c=a.W.b;d=Pg(a,b);a.W.b=d;return c==d?0:1;}
function AJd(a,b){var c,d;c=a.W.a;d=ZU(a,b);a.W.a=d;return c==d?0:1;}
function ZU(a,b){return Bd(0,Bc(b,a.cO.a-a.j.a|0));}
function Pg(a,b){return Bd(0,Bc(b,a.cO.b-a.j.b|0));}
function LU(){var a=this;EX.call(a);a.gg=null;a.cs=null;a.eu=null;a.g8=null;a.fN=null;a.ny=null;a.xG=0;a.q0=0;a.pd=0;a.fZ=null;a.f0=null;}
function AT6(a){Nq(a.g8);RN(a.cs);V6(a);}
function V6(a){a.fZ=Ct(a.fZ,null);a.f0=Ct(a.f0,null);}
function AK6(a,b,c){Qv(a.cs,c);We(a);}
function We(a){var b,c,d,e,f;Wk(a.g8);b=a.cs;c=a.ny;d=a.bR;e=a.gg.b$;f=b.gE;b.cf=AEC(c.je,c.hL*d,c.lt,c.j1,f,e);U6(a.cs,1.25,a.gg.b$);V6(a);a.fZ=Ct(a.fZ,Xd(a.cs,LO(707),2,a.gg.b$));a.f0=Ct(a.f0,Xd(a.cs,LO(709),2,a.gg.b$));Oa(a);}
function Oa(a){var b;Ml(a,0,Bb(a.eu.ft.data.length,a.cs.d1));b=a.em;if(b!==null)MR(b);}
function ASb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;c=a.fN.bo.ed;d=a.g;Bu(b,d.b,d.a,a.j,c);BL(a.cs.cf);e=a.cs.d1;f=HE(a.j.a,e)+7|0;g=a.g8;if(g.data.length<f)a.g8=Tt(f,g,a.cs,a.xG,a.q0,a.eu);B2(b,0);LL(b,a.g,a.j);h=a.eu.ft.data.length;i=a.W.a;j=h-1|0;k=AGn(i,e,j);i=AGn((a.W.a+a.j.a|0)-1|0,e,j);a.xG=k;a.q0=i;l=a.j.b;m=EN(a,15.0);n=EN(a,10.0);o=EN(a,8.0);p=Bd(Cb(a.f0),Cb(a.fZ));f=n+p|0;while(k<=i){q=a.eu.ft.data[k];g=a.g8.data;n=k%g.length|0;r=g[n];Qj(r,q.iD,b,e,l,0,k,n);s=Bb(e,k)-a.W.a|0;t=null;u
=m+Bb(f,q.ok)|0;v=a.pd!=k?0:1;if(v){V(a.gg.c$,a.j.b,e);d=a.g;Bu(b,d.b,d.a+s|0,a.gg.c$,a.fN.bo.gz);}a:{switch(q.jq){case 1:break;case 2:w=a.f0;break a;default:w=null;break a;}w=a.fZ;}if(w!==null){x=a.fN.kU.data[0];Cs(a.cs.h$,0.0,0.0,Cb(w),Df(w));Co(a.cs.hN,w.fw);d=a.cs;q=a.g;Hv(d,b,w,q.b+u|0,q.a+s|0,x.h0,!v?c:a.fN.bo.gz);}d=a.g;Rc(r,d.a+s|0,((d.b+u|0)+p|0)+o|0,b,l,e,0,a.fN,null,null,null,v,0,t);k=k+1|0;}Gf(b);}
function AXi(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cs.d1;f=((b.h.a-a.g.a|0)+a.W.a|0)/e|0;if(f>=0){g=a.eu.ft.data;if(f<g.length){h=g[f];if(!Oz(a,b,f)){b=h.Ae;if(b!==null)b.l();}}}}return 1;}
function AMP(a,b,c){var d,e,f,g;d=a.cs.d1;e=((b.h.a-a.g.a|0)+a.W.a|0)/d|0;if(!c&&e>=0){f=a.eu.ft.data;if(e<f.length){g=f[e];if(Oz(a,b,e)){b=g.qf;if(b!==null)Vs(b);}else{a.pd=e;b=g.tQ;if(b!==null)Vs(b);}}}return A3$;}
function Oz(a,b,c){var d,e,f,g,h,i,j;d=a.eu.ft.data[c];e=EN(a,15.0);f=EN(a,10.0);g=Bd(Cb(a.f0),Cb(a.fZ));h=e+Bb(f+g|0,d.ok)|0;i=(a.g.b-a.W.b|0)+h|0;j=i+g|0;c=b.h.b;return i<=c&&c<j?1:0;}
function AGn(b,c,d){return Bc(b/c|0,d);}
function T7(){LU.call(this);this.l6=null;}
function VN(a){var b,c,d;b=a.l6;c=Q(HR,ABC(b));d=c.data;if(SR(b,c,0)!=d.length){b=new Bt;X(b);K(b);}a.eu=ALh(c);if(a.bR!==0.0)Oa(a);}
function Pl(){B.call(this);this.xS=null;}
function K$(){var a=this;CS.call(a);a.o6=null;a.r6=null;a.xp=null;a.bE=null;a.dl=null;a.dq=null;a.wC=null;a.q6=null;a.yw=0.0;a.nh=null;a.l3=null;}
function N6(a,b){var c=new K$();AJJ(c,a,b);return c;}
function A47(a,b){var c=new K$();W3(c,a,b);return c;}
function AJJ(a,b,c){W3(a,b,c.cK);}
function W3(a,b,c){var d;Ge(a);d=new Qy;d.ub=a;a.r6=d;d=new Qx;d.vs=a;a.xp=d;a.yw=10.0;a.bE=b;a.o6=c;b.em=a;}
function AWo(a){var b;b=a.bE;b.em=null;a.bE=Ct(b,null);}
function HU(a,b,c){var d;a.l3=c;a.nh=b;d=a.dl;if(d!==null)Hx(d,b,c);b=a.dq;if(b!==null)Hx(b,a.nh,a.l3);}
function AO2(a,b,c,d){G0(a,b,c,d);G0(a.bE,b,c,d);if(d!==0.0)MR(a);}
function JT(a,b,c){Ls(a,b);Mp(a,c);}
function MR(a){AFa(a.bE);if(Zx(a))Yg(a);else a.dq=null;if(QD(a))O5(a);else a.dl=null;}
function QD(a){var b;b=a.j.a;return b>0&&a.bE.cO.a>b?1:0;}
function Zx(a){var b;b=a.j.b;return b>0&&a.bE.cO.b>b?1:0;}
function Yg(a){var b,c,d,e,f,g;b=a.dq;if(b===null)b=Jw();a.dq=b;OS(a,b);c=a.dq;b=a.bE;d=b.W.b;e=a.g;f=e.b;g=a.j;Tv(c,d,f,g.b,b.cO.b,e.a+g.a|0,Nw(a));}
function O5(a){var b,c,d,e,f,g;b=a.dl;if(b===null)b=Jw();a.dl=b;OS(a,b);c=a.dl;b=a.bE;d=b.W.a;e=a.g;f=e.a;g=a.j;JP(c,d,f,g.a,b.cO.a,e.b+g.b|0,Nw(a));}
function Nw(a){return EN(a,a.yw);}
function OS(a,b){Hx(b,a.nh,a.l3);}
function AVv(a,b){var c;a.bE.dh(b);if(!(a.dl===null&&a.dq===null)){B2(b,1);c=a.dl;if(c!==null)G1(c,b);c=a.dq;if(c!==null)G1(c,b);c=a.dl;if(c!==null)Ha(c,b);c=a.dq;if(c!==null)Ha(c,b);B2(b,0);}}
function XH(a,b){var c,d;a:{b:{c=a.dl;if(!(c!==null&&IG(c,b))){c=a.dq;if(c===null)break b;if(!IG(c,b))break b;}d=1;break a;}d=0;}return d;}
function AW6(a,b,c,d){return !XH(a,b.h)&&!a.bE.ce(b,c,d)?0:1;}
function Ls(a,b){var c;if(AIK(a,b)){c=a.wC;if(c!==null)c.l();}}
function Mp(a,b){var c;if(Z1(a,b)){c=a.q6;if(c!==null)c.l();}}
function AIK(a,b){var c;c=AHp(a.bE,b);if(Zx(a))Yg(a);return c;}
function Z1(a,b){var c;c=AJd(a.bE,b);if(QD(a))O5(a);return c;}
function AWr(a,b,c){var d,e;d=a.dl;if(d!==null){e=F3(d,b.h,a.r6,1);if(e!==null)return e;}d=a.dq;if(d!==null){e=F3(d,b.h,a.xp,0);if(e!==null)return e;}return a.bE.bX(b,c);}
function AS6(a,b,c){return XH(a,b.h)?1:0;}
function ASD(a,b){var c,d,e;c=a.dl;d=c!==null&&Gd(c,b.h,a.o6)?1:0;c=a.dq;e=c!==null&&Gd(c,b.h,a.o6)?1:0;return !d&&!e&&!a.bE.bF(b)?0:1;}
function AN8(a,b,c,d){var e,f;if(!Cd(a,b.h))return 0;e=Cc(d*0.25,a.bR);f=Cc(c*0.25,a.bR);if(b.bK){f=f+e|0;e=0;}if(a.dl!==null&&e)Mp(a,a.bE.W.a+e|0);if(a.dq!==null&&f)Ls(a,a.bE.W.b+f|0);return 1;}
function AYN(a){var b,c;b=Nw(a);c=a.bE.iK();c.b=Bd(c.b,b);c.a=Bd(c.a,b);return c;}
function Sw(){B.call(this);this.Dc=null;}
function AQS(a,b){return 0;}
var Dh=G(0);
var A4t=null;var A48=null;var A4v=null;var A4u=null;var A4x=null;var A4w=null;var A4z=null;var A4y=null;var A4B=null;var A4A=null;var A4C=null;function AOc(){AOc=Bq(Dh);AWK();}
function AWK(){A4t=CI(206);A48=S(C(364));A4v=S(C(365));A4u=S(C(272));A4x=S(C(366));A4w=S(C(367));A4z=S(C(368));A4y=S(C(369));A4B=ED(107,106,107,128);A4A=ED(30,31,34,0);A4C=S(C(274));}
function Cp(){CE.call(this);this.jB=null;}
var A49=null;var A4$=null;var A4_=null;var A5a=null;var A5b=null;var A4a=null;var A5c=null;var A5d=null;var A5e=null;var A5f=null;var A5g=null;var A5h=null;var A5i=null;var A5j=null;var A5k=null;var A4D=null;function Yo(){Yo=Bq(Cp);ARg();}
function D3(a,b,c){var d=new Cp();Uz(d,a,b,c);return d;}
function A0N(a,b,c,d){var e=new Cp();AAT(e,a,b,c,d);return e;}
function Uz(a,b,c,d){Yo();Dy(a,b,c);a.jB=IS(d,null);}
function AAT(a,b,c,d,e){Yo();Dy(a,b,c);a.jB=IS(d,e);}
function ARg(){var b,c;b=new Cp;AOc();Uz(b,C(370),0,A48);A49=b;A4$=D3(C(371),1,S(C(372)));A4_=D3(C(373),2,S(C(374)));A5a=D3(C(375),3,S(C(376)));A5b=D3(C(377),4,A48);A4a=D3(C(378),5,S(C(379)));A5c=D3(C(380),6,S(C(381)));A5d=D3(C(382),7,S(C(383)));A5e=D3(C(384),8,S(C(385)));c=new Cp;Fs();AAT(c,C(386),9,A32,S(C(368)));A5f=c;A5g=A0N(C(387),10,A32,S(C(275)));A5h=D3(C(388),11,S(C(389)));A5i=D3(C(390),12,S(C(391)));A5j=D3(C(392),13,A48);b=D3(C(393),14,S(C(394)));A5k=b;A4D=I(Cp,[A49,A4$,A4_,A5a,A5b,A4a,A5c,A5d,A5e,
A5f,A5g,A5h,A5i,A5j,b]);}
function JU(){var a=this;B.call(a);a.h0=null;a.mb=null;}
function IS(a,b){var c=new JU();ASr(c,a,b);return c;}
function ASr(a,b,c){a.h0=b;a.mb=c;}
function I5(){var a=this;B.call(a);a.kg=null;a.jA=null;a.zm=null;a.Dj=null;a.mD=null;a.mu=null;a.l0=null;}
function A5l(a,b,c,d,e,f,g){var h=new I5();MI(h,a,b,c,d,e,f,g);return h;}
function MI(a,b,c,d,e,f,g,h){a.zm=b;a.Dj=c;a.jA=d;a.mD=e;a.kg=f;a.mu=g;a.l0=h;}
function AFV(){var a=this;B.call(a);a.oo=null;a.uF=0;}
function ACz(a,b){var c=new AFV();AWe(c,a,b);return c;}
function AWe(a,b,c){var d;d=new BZ;a.oo=d;a.uF=b;d.bD=c;}
function RF(a,b){return Cc(a.uF,b);}
var DP=G(0);
var A4H=null;var A4I=null;var A4E=null;var A4F=null;var A4G=null;var A40=null;var A41=null;var A4J=null;var A4K=null;function AJ9(){AJ9=Bq(DP);AUc();}
function AUc(){A4H=S(C(367));A4I=S(C(395));A4E=S(C(277));A4F=S(C(381));A4G=S(C(364));A40=S(C(367));A41=S(C(396));A4J=S(C(397));A4K=Ds(43,45,48);}
var Rf=G(0);
var RA=G();
function AOK(a,b,c){var d,e;d=b;e=c;b=new L;N(b);U(H(U(H(b,C(398)),d),C(399)),e);CP(M(b));return d+e|0;}
var Rg=G(0);
var Ry=G();
function AP4(a,b,c){var d,e;d=b;e=c;b=new L;N(b);E9(H(E9(H(b,C(400)),d),C(399)),e);CP(M(b));return d+e;}
var AD6=G();
var ACV=G(0);
function AAk(){B.call(this);this.oY=null;}
var A45=null;function Mf(){var a=new AAk();ADT(a);return a;}
function ADT(a){a.oY=BN();}
function DK(a,b,c){Q$(a,CX(b,c));}
function CX(b,c){return PD(c,b);}
function Fl(a,b,c){Jc(a,b,c,null);}
function Jc(a,b,c,d){Q$(a,A0$(null,b,c,d));}
function Q$(a,b){BG(a.oY,b);}
function G9(a){return ER(IE(a.oY,A45));}
function ACZ(){A45=Q(Cn,0);}
var AB7=G(0);
var A46=null;function AHO(){A46=new PL;}
var DY=G(0);
var A4U=null;var A4V=null;var A4R=null;var A4S=null;var A4T=null;var A4Y=null;var A4Z=null;var A4W=null;var A4X=null;function ASm(){ASm=Bq(DY);ATE();}
function ATE(){A4U=S(C(401));A4V=S(C(402));A4R=S(C(307));A4S=S(C(403));A4T=S(C(356));A4Y=S(C(401));A4Z=S(C(402));A4W=ED(118,121,122,128);A4X=Ds(63,66,68);}
var Hj=G(0);
var QN=G();
function AVk(a,b,c,d){var e;b=Bz();d=CG(d);e=new L;N(e);H(H(U(H(e,C(404)),c),C(339)),d);Bs(b,M(e));}
var QP=G();
function Uw(){B.call(this);this.jc=null;}
function AZi(a,b){return L8(a.jc,b);}
function AUA(a,b,c,d){return KX(a.jc,b,c,d);}
function AY1(a,b,c){return NH(a.jc,b,c);}
function ASe(a,b,c){return DC(a.jc);}
function X_(){B.call(this);this.wj=null;}
function ATi(a,b){var c;c=a.wj.ku;c.eB=FN(b,Zs(c));}
function Qi(){B.call(this);this.CE=null;}
function ANM(a,b){var c,d,e,f;c=b.data;b=Bz();d=CG(c[0]);e=new L;N(e);H(H(e,C(298)),d);Bs(b,M(e));b=Bz();f=c[1];d=new L;N(d);H(H(d,C(405)),f);Bs(b,M(d));}
function Qg(){B.call(this);this.Bs=null;}
function ALk(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bz();e=CG(c[0]);f=new L;N(f);H(H(f,C(298)),e);Bs(d,M(f));g=EQ(Le(b,1));b=Bz();d=CG(c[1]);if(g===null)c=C(22);else{c=new L;N(c);B0(c,C(35));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B0(c,C(36));BM(c,i[h]);h=h+1|0;}B0(c,C(37));c=M(c);}e=new L;N(e);H(H(H(H(e,C(406)),d),C(407)),c);Bs(b,M(e));}
function Qe(){B.call(this);this.Ag=null;}
function AJ2(a,b){AAY(a.Ag,b);}
function Qc(){B.call(this);this.BW=null;}
function AYZ(a,b){var c,d,e,f,g;c=b.data;d=Bz();e=CG(c[0]);f=new L;N(f);H(H(f,C(298)),e);Bs(d,M(f));g=CM(Le(b,1));b=Bz();d=CG(c[1]);c=AGU(g);e=new L;N(e);H(H(H(H(e,C(408)),d),C(409)),c);Bs(b,M(e));}
var AI5=G();
function Zy(){B.call(this);this.vc=null;}
function AP6(a,b){var c;c=a.vc.kI;c.e5=FN(b,UQ(c));}
function Yn(){B.call(this);this.CF=null;}
function APr(a,b){return 0;}
function AHE(){var a=this;B.call(a);a.kc=null;a.mk=null;a.gi=null;a.CZ=null;}
function AHb(a){var b=new AHE();AV1(b,a);return b;}
function AV1(a,b){var c,d,e;c=null;d=null;e=null;a.kc=c;a.mk=d;a.gi=b;a.CZ=e;}
function YB(a){var b,c;b=a.gi;if(b===null)return C(21);c=AE9(b,C(410));return c==(-1)?a.gi:Ed(a.gi,c+1|0);}
function AMI(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BV(a.kc,c.kc)&&BV(a.mk,c.mk)&&BV(a.gi,c.gi)?1:0;}return 0;}
function YX(){var a=this;CS.call(a);a.fU=null;a.hX=null;a.hS=null;a.ee=null;a.kW=0.0;a.gG=0;a.hY=0;a.dK=null;a.lY=null;}
function ABw(a){var b;Yy(a);b=CB(a.fU,a.kW);return EU(a.ee)+(b*2|0)|0;}
function LF(a){var b;b=a.j;return b.b&&b.a?0:1;}
function ZY(a){var b,c;a:{if(a.hS!==null){b=a.hX;if(b!==null&&!Fd(b)){c=0;break a;}}c=1;}return c;}
function RQ(a,b){a.j.a=b;}
function R7(a,b,c,d,e){var f,g;f=a.fU.c$;V(f,d,a.j.a);g=a.g;Bu(b,g.b+c|0,g.a,f,e);}
function Yy(a){if(a.ee===null)a.ee=HS(a.fU,a.hS);}
function AH1(){var a=this;K$.call(a);a.wH=null;a.iO=null;}
function ASE(a){var b=new AH1();ATA(b,a);return b;}
function ATA(a,b){var c;W3(a,AS_(),b.cK);b=AS_();a.wH=b;c=new Of;c.t2=15.0;c.mM=a;c.gd=b;a.iO=c;c=a.bE;if(c!==b){c.em=null;a.bE=Ct(c,b);b.em=a;G0(b,a.g,a.j,a.bR);if(a.bR!==0.0)MR(a);}}
function APA(a,b,c){if(b===0.0)Ml(a.wH,700,1600);}
function ABi(a,b){b=b.bo;HU(a,b.iq,b.iy);}
function HR(){var a=this;B.call(a);a.tQ=null;a.qf=null;a.Ae=null;a.iD=null;a.ok=0;a.jq=0;}
function A5m(a,b){var c=new HR();Wm(c,a,b);return c;}
function Wm(a,b,c){a.iD=QR(b);a.ok=c;a.jq=0;}
function FD(){HR.call(this);this.hk=null;}
var A4O=null;function Ni(a){return a.jq!=2?0:1;}
function ABC(a){var b,c,d,e;b=1;if(Ni(a)){c=a.hk.data;d=c.length;e=0;while(e<d){b=b+ABC(c[e])|0;e=e+1|0;}}return b;}
function N5(a){var b,c,d,e;b=1;c=a.hk.data;d=c.length;e=0;while(e<d){b=b+N5(c[e])|0;e=e+1|0;}return b;}
function SR(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(Ni(a)){d=a.hk.data;c=d.length;f=0;while(f<c){e=SR(d[f],b,e);f=f+1|0;}}return e;}
function WK(a){a.jq=2;}
function RX(a){a.jq=1;}
function AGv(){A4O=Q(FD,0);}
function PQ(){B.call(this);this.qW=null;}
function ATs(a){var b,c,d;b=a.qW;c=Bz();d=(I8(b.iD,0)).v;b=new L;N(b);H(H(b,C(411)),d);Bs(c,M(b));}
function Jl(){var a=this;B.call(a);a.wh=null;a.qQ=null;a.r9=null;a.xl=null;a.tW=null;a.jL=null;}
function A5n(a,b,c,d,e,f){var g=new Jl();NQ(g,a,b,c,d,e,f);return g;}
function NQ(a,b,c,d,e,f,g){a.wh=b;a.qQ=c;a.r9=d;a.xl=e;a.tW=f;a.jL=g;}
function JO(){var a=this;B.call(a);a.sq=null;a.nY=null;a.xf=null;}
function A5o(a,b,c){var d=new JO();Lq(d,a,b,c);return d;}
function Lq(a,b,c,d){a.sq=b;a.nY=c;a.xf=d;}
function AAv(a,b){return !b?a.nY:a.xf;}
function ADG(){var a=this;B.call(a);a.nl=null;a.vW=null;a.yx=null;}
function AIM(a,b,c){var d=new ADG();AXP(d,a,b,c);return d;}
function AXP(a,b,c,d){a.nl=b;a.vW=c;a.yx=d;}
function Cq(){CE.call(this);this.oj=null;}
var A5p=null;var A5q=null;var A5r=null;var A5s=null;var A5t=null;var A5u=null;var A5v=null;var A5w=null;var A5x=null;var A5y=null;var A5z=null;var A5A=null;var A5B=null;var A5C=null;var A5D=null;var A4s=null;function AEt(){AEt=Bq(Cq);AQf();}
function D2(a,b,c){var d=new Cq();WP(d,a,b,c);return d;}
function AWh(a,b,c,d){var e=new Cq();AH6(e,a,b,c,d);return e;}
function WP(a,b,c,d){AEt();Dy(a,b,c);a.oj=IS(d,null);}
function AH6(a,b,c,d,e){AEt();Dy(a,b,c);a.oj=IS(d,e);}
function AQf(){var b;b=new Cq;Fs();WP(b,C(370),0,A32);A5p=b;A5q=D2(C(371),1,S(C(412)));A5r=D2(C(373),2,S(C(413)));A5s=D2(C(375),3,S(C(414)));A5t=D2(C(377),4,S(C(412)));A5u=D2(C(378),5,Ds(188,63,60));A5v=D2(C(380),6,S(C(415)));A5w=D2(C(382),7,S(C(416)));A5x=D2(C(384),8,S(C(417)));A5y=AWh(C(386),9,A32,Ds(52,65,52));A5z=AWh(C(387),10,S(C(418)),S(C(419)));A5A=D2(C(388),11,S(C(420)));A5B=D2(C(390),12,S(C(421)));A5C=D2(C(392),13,A32);b=D2(C(393),14,S(C(394)));A5D=b;A4s=I(Cq,[A5p,A5q,A5r,A5s,A5t,A5u,A5v,A5w,A5x,A5y,
A5z,A5A,A5B,A5C,b]);}
var AIB=G();
function Jt(b,c){var d,e,f;if(c<=0)return C(21);d=B1(c);e=d.data;e[0]=AHf(F$(b,52));f=1;while(f<c){e[f]=AHf(F$(b,62));f=f+1|0;}return Gt(d);}
function AHf(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AEV=G();
function AI3(){var a=this;B.call(a);a.Lh=null;a.Iq=null;a.JR=0;a.Jf=0;}
var ACM=G(0);
function AHv(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BC,8);e=DE(8);f=B1(16);g=0;h=0;i=0;while(true){j=BI(i,b);if(j>0)break;k=j>=0?10:(c.be(CU(i))).mp;if(k==10){d=AHx(Ev(f,0,g),d,h);e=Yh(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Ky(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AHx(Ev(f,0,g),d,h);j=i+1|0;if(j<b&&(c.be(CU(j))).mp==10){e=Yh(1,e,h);i=j;}else e=Yh(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new TW;d=AD9(d,h);if(m.length!=h)e=Ng(e,h);c.me=d;c.A3=e;return c;}
function Of(){var a=this;B.call(a);a.mM=null;a.gd=null;a.t2=0.0;}
function AXy(a){return a.gd.W.a/K3(a)|0;}
function AUJ(a){return HE(a.gd.cO.a,K3(a));}
function AZp(a,b){var c;b=Bb(b,K3(a));c=a.gd;return (b+c.g.a|0)-c.W.a|0;}
function AQL(a){return a.gd.g;}
function ATJ(a){return a.gd.j;}
function AOU(a,b,c){var d;d=a.mM;d.wC=b;d.q6=c;}
function AOH(a,b){return Z1(a.mM,b);}
function K3(a){return EN(a.gd,a.t2);}
function AIu(){G$.call(this);this.ft=null;}
function ALh(a){var b=new AIu();ANN(b,a);return b;}
function ANN(a,b){a.ft=b;}
function AZu(a,b){return a.ft.data[b].iD;}
function Qy(){B.call(this);this.ub=null;}
function AKk(a,b){var c;c=a.ub;Mp(c,FN(b,c.bE.cO.a-c.j.a|0));}
function Qx(){B.call(this);this.vs=null;}
function AKQ(a,b){var c;c=a.vs;Ls(c,FN(b,c.bE.cO.b-c.j.b|0));}
var C2=G();
var AGm=G(C2);
var AHc=G(C2);
var AD$=G(C2);
var AEp=G(C2);
var AHI=G(C2);
var PL=G();
function AY0(a){}
function AAG(){B.call(this);this.sS=null;}
function AQv(a){var b;b=a.sS;Bs(Bz(),b);}
var GS=G(CE);
var A5E=null;var A31=null;var A5F=null;function ASf(){ASf=Bq(GS);AN3();}
function AZB(a,b){var c=new GS();ADN(c,a,b);return c;}
function ADN(a,b,c){ASf();Dy(a,b,c);}
function AN3(){var b;A5E=AZB(C(422),0);b=AZB(C(423),1);A31=b;A5F=I(GS,[A5E,b]);}
function PW(){B.call(this);this.v9=null;}
function AKB(a,b){return PV(P(a.v9,b.br));}
function TW(){var a=this;B.call(a);a.me=null;a.A3=null;}
var ADv=G();
function Cc(b,c){return CV(b*c);}
function FX(){var a=this;B.call(a);a.gM=0;a.nC=null;}
var AEL=G();
function Xx(){var a=this;B.call(a);a.rt=null;a.wu=null;a.xs=null;}
function WZ(){B.call(this);this.qY=null;}
function AWY(a,b,c){return Hw(a.qY,b,c);}
function WY(){B.call(this);this.xn=null;}
function AZR(a){var b,c;b=a.xn;c=new VE;c.to=b;return c;}
function W1(){B.call(this);this.tn=null;}
function AK3(a,b,c,d){return KU(a.tn,c,d);}
function W0(){var a=this;B.call(a);a.Ao=null;a.Am=null;a.An=null;a.Ap=null;}
function Qu(){B.call(this);this.kf=null;}
function AZP(a,b){var c,d,e,f,g;c=a.kf;d=c.lC;if(d!==null){e=b.h;f=e.b-d.b|0;g=e.a-d.a|0;e=c.kv;e.b=ES(0,e.b+f|0,c.hE.b-c.i3.b|0);c=a.kf;d=c.kv;d.a=ES(0,d.a+g|0,c.hE.a-c.i3.a|0);}a.kf.lC=b.h;return 1;}
var AES=G();
function MO(){return "clipboard" in $rt_globals.navigator?1:0;}
function Zp(){B.call(this);this.kD=null;}
function AZb(a){return a.kD;}
var AGh=G(0);
var MJ=G(0);
function S2(){B.call(this);this.wJ=null;}
function AL9(a,b){return Lw(a.wJ,b);}
function PG(){B.call(this);this.xx=null;}
function AXz(a,b){var c,d;c=a.xx;d=b.br;return PV(c.charCodeAt(d)&65535);}
var AGW=G();
function AEl(b,c,d,e,f,g){g.b=c.b;g.a=f;Bu(b,d.b,d.a,g,e);Bu(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bu(b,d.b,d.a+f|0,g,e);Bu(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AGw(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function Sl(){var a=this;B.call(a);a.cL=null;a.o1=null;a.fi=null;a.d9=0;a.cw=0;a.hM=null;a.jb=null;a.hu=0;a.qb=0;}
function PA(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d9;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}ET(c);j=d+(-1)|0;b=Dc(d);d=Bb(j,a.cw)%a.fi.a|0;GL(a,c,b,a.hu,g);IU(a.cL,c,0,d);if(!(j%a.d9|0))break;d=j;}}else{ET(b);k=a.d9-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GL(a,b,Dc(j),Bb(a.cw,k)+a.hu|0,g);k=k+(-1)|0;j=h;}CK(a.cL,b);j=Bd(i,e);}return j;}k=a.d9;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bc(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}ET(c);b=Dc((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cw)%a.fi.a|0;GL(a,c,b,a.hu,g);IU(a.cL,c,0,d);if(!(j%a.d9|0))break;d=j;}}else{ET(b);d=0;while(d<a.d9){h=h+1|0;GL(a,b,Dc((h>e?h-f|0:h)+f|0),Bb(a.cw,d)+a.hu|0,g);d=d+1|0;}CK(a.cL,b);j=Bc(i,e);}return j;}
function ACi(b,c,d,e){c=c.data;return d<c.length&&c[d]?Jh(b.dW,b,c[d]):e.ju;}
function Li(a,b,c,d,e,f){DW(b,a.o1.b+d.b|0,c+d.a|0,a.hM,a.jb,a.cL,e,f,a.qb);}
function GL(a,b,c,d,e){BS(b,c,a.fi.b-20.0*e,d);}
var ACR=G();
function GH(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ADE(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function YD(){var a=this;B.call(a);a.yK=null;a.yL=null;a.h6=null;}
function A1D(a,b,c){var d=new YD();AF4(d,a,b,c);return d;}
function AF4(a,b,c,d){a.yK=b;a.yL=c;a.h6=d;}
function GG(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.h6.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bc(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hq:i.hr;k=!c?i.oO:i.oP;l=BI(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function M2(){var a=this;B.call(a);a.hr=0;a.oP=0;a.hq=0;a.oO=0;a.l_=0;}
function Lj(a,b,c,d,e){var f=new M2();AWj(f,a,b,c,d,e);return f;}
function AWj(a,b,c,d,e,f){a.hr=b;a.oP=c;a.hq=d;a.oO=e;a.l_=f;}
var Vn=G(0);
var A3$=null;function AGJ(){A3$=new Tl;}
function Yx(){var a=this;B.call(a);a.tY=null;a.tZ=null;}
function AL$(a,b){var c,d,e;c=a.tY;d=a.tZ;c=c.fp.eh.u;e=c.b;b=b.h;c.b=e+(b.b-d.b|0)|0;c.a=c.a+(b.a-d.a|0)|0;Co(d,b);}
var Fo=G(0);
function PB(){var a=this;B.call(a);a.ja=0;a.oS=0;a.ki=0;a.g4=0;a.hV=null;}
function B5(a){return a.ja>=a.ki?0:1;}
function B7(a){var b,c;RG(a);b=a.ja;a.g4=b;c=a.hV;a.ja=b+1|0;return c.nO(b);}
function TQ(a){var b,c,d;if(a.g4<0){b=new CY;X(b);K(b);}RG(a);a.hV.oW(a.g4);a.oS=a.hV.b0;c=a.g4;d=a.ja;if(c<d)a.ja=d-1|0;a.ki=a.ki-1|0;a.g4=(-1);}
function RG(a){var b;if(a.oS>=a.hV.b0)return;b=new HG;X(b);K(b);}
function S8(){var a=this;B.call(a);a.zE=null;a.zF=null;}
function Vs(a){var b,c;b=a.zE;c=a.zF;if(!Ni(b))WK(b);else RX(b);VN(c.xS);}
var AFH=G(0);
function AEC(b,c,d,e,f,g){f=f.data;f[H2(0,0)]=Hu(g,b,c,d,0);f[H2(0,1)]=Hu(g,b,c,d,2);f[H2(1,0)]=Hu(g,b,c,e,0);f[H2(1,1)]=Hu(g,b,c,e,2);return f[H2(0,0)];}
var Go=G(Jq);
var AA6=G(Fb);
function ABa(){B.call(this);this.x4=null;}
function AJO(a,b){var c,d;c=a.x4;ABN(c,E$(c,b.h));b=Bj(c);d=c.d;My(b,d.w,d.z);HB(c);}
function YN(){B.call(this);this.rI=null;}
function AX6(a,b){var c,d;c=a.rI;d=c.d8+1|0;c.d8=d;c=new L;N(c);H(H(U(c,d),C(424)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function ABT(){B.call(this);this.r3=null;}
function AVJ(a){var b,c;b=a.r3;c=new L;N(c);H(H(H(c,C(425)),b),C(426));$rt_globals.console.info($rt_ustr(M(c)));}
var ABl=G(D$);
var A5G=null;function PM(b){var c;c=new L;N(c);return M(E9(c,b));}
function AGL(){A5G=F($rt_floatcls());}
var F_=G();
var A5H=null;var A5I=null;var A27=null;var A26=null;var A25=null;function AFx(){A5H=DD([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A5I=ADO([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A27=ADO([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A26=new Xi;A25=new YH;}
var IB=G();
var A5J=0;var A5K=null;var A5L=null;function AGb(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rc=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.mN=0;c.mr=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Ix(C5(Bp(d),Bp(8388608)),Fq)){d=d<<1;f=f+(-1)|0;}}g=AGl(A5L,f);if(g<0)g= -g|0;h=A5L.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=It(d,A5K.data[e],i);if(j<A5J){while($rt_ucmp(j,A5J)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A5L.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=It(d,
A5K.data[e],i);}e=d<<1;d=e+1|0;h=A5K.data;f=g+1|0;k=h[f];l=i-1|0;m=It(d,k,l);n=It(e-1|0,A5K.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(Dv(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.mN=d;c.mr=g-50|0;}
function It(b,c,d){return GN(Gi(Ce(C5(Bp(b),D(4294967295, 0)),C5(Bp(c),D(4294967295, 0))),32-d|0));}
function AEE(){A5J=$rt_udiv((-1),10);A5K=DD([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A5L=DD([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function YH(){var a=this;B.call(a);a.mN=0;a.mr=0;a.rc=0;}
function No(){var a=this;B.call(a);a.Bc=null;a.pu=0.0;a.BC=0.0;a.fM=null;a.h5=null;a.ol=null;a.fW=0;}
function AIf(a,b){var c;if(b!==null){a.h5=b;return a;}c=new BR;Bn(c,C(427));K(c);}
function AGr(a,b){var c;if(b!==null){a.ol=b;return a;}c=new BR;Bn(c,C(427));K(c);}
function S1(a,b,c,d){var e,f,g,$$je;e=a.fW;if(!(e==2&&!d)&&e!=3){a.fW=d?2:1;while(true){try{f=AIh(a,b,c);}catch($$e){$$je=EA($$e);if($$je instanceof Bt){g=$$je;K(AM0(g));}else{throw $$e;}}if(HM(f))return f;if(Ja(f)){if(d&&D0(b)){g=a.h5;HP();if(g===A3y)return Ei(Cf(b));if(Cf(c)<=J(a.fM))return A3B;E7(b,b.Z+Cf(b)|0);if(a.h5===A3z)Ld(c,a.fM);}return f;}if(TC(f)){g=a.h5;HP();if(g===A3y)return f;if(g===A3z){if(Cf(c)<J(a.fM))return A3B;Ld(c,a.fM);}E7(b,b.Z+Lh(f)|0);}else if(Nm(f)){g=a.ol;HP();if(g===A3y)break;if(g
===A3z){if(Cf(c)<J(a.fM))return A3B;Ld(c,a.fM);}E7(b,b.Z+Lh(f)|0);}}return f;}b=new CY;X(b);K(b);}
function ADS(a,b){var c,d,e,f;c=a.fW;if(c&&c!=3){b=new CY;X(b);K(b);}if(!Cf(b))return AIU(0);if(a.fW)a.fW=0;d=AIU(Bd(8,Cf(b)*a.pu|0));while(true){e=S1(a,b,d,0);if(Ja(e))break;if(HM(e))d=VB(a,d);if(!LS(e))continue;YG(e);}b=S1(a,b,d,1);if(LS(b))YG(b);while(true){f=a.fW;if(f!=3&&f!=2)break;a.fW=3;if(Ja(A3C)){d.dU=d.Z;d.Z=0;d.iN=(-1);return d;}d=VB(a,d);}b=new CY;X(b);K(b);}
function VB(a,b){var c,d,e;c=b.iB;d=Ky(c,Bd(8,c.data.length*2|0));e=AFG(d,0,d.data.length);E7(e,b.Z);return e;}
function ZA(){var a=this;B.call(a);a.bn=0;a.by=0;}
function DU(a,b){var c=new ZA();AFR(c,a,b);return c;}
function AFR(a,b,c){a.bn=b;a.by=c;}
function AJ4(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.bn==c.bn&&a.by==c.by?1:0;}return 0;}
function AVc(a){var b,c,d,e;b=Q(B,2).data;b[0]=CU(a.bn);b[1]=CU(a.by);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.br)|0;d=d+1|0;}return c;}
function AUG(a,b){var c;b=b;c=BI(a.bn,b.bn);if(!c)c=BI(a.by,b.by);return c;}
var AFb=G(C2);
function SX(){B.call(this);this.zJ=null;}
function AK1(a,b){var c,d;c=a.zJ;d=c.d8+1|0;c.d8=d;c=b.iV;b=new L;N(b);H(H(U(b,d),C(428)),c);$rt_globals.console.info($rt_ustr(M(b)));}
var Tl=G();
function ASU(a,b){}
function Tf(){var a=this;EX.call(a);a.bU=null;a.dZ=null;a.hz=null;a.xB=null;a.el=null;a.b8=null;a.ev=null;a.fm=null;a.dy=0;a.fh=0;a.zO=null;a.dT=0;a.eL=0;a.gA=0;a.fQ=0;a.fE=0;a.cN=0;a.ex=null;a.j7=null;a.ue=null;a.ij=null;}
function A18(a,b){var c=new Tf();AIb(c,a,b);return c;}
function AIb(a,b,c){ME(a);a.dZ=Vc();a.hz=new Bh;a.b8=A5M;a.ev=Q(Jn,0);a.dT=0;a.eL=0;a.gA=0;a.fQ=0;a.fE=0;a.ex=ADh(0);a.ij=U$();a.bU=b;a.j7=c;a.zO=c;RH(a);}
function RH(a){a.dy=Cc(2.0,a.bU.ci);}
function ABk(a){return a.b8.data.length?0:1;}
function Py(a,b){W8(a);a.b8=b;}
function W8(a){V(a.hz,0,0);}
function ACo(a,b,c){a.ue=b;a.xB=c;a.el=null;a.ex=null;a.fh=0;W8(a);}
function AX4(a){a.fm=Ct(a.fm,null);V(a.hz,0,0);E_(a.ij);a.ex=null;a.b8=A5M;a.ev=null;a.dT=0;a.eL=0;a.gA=0;Wx(a.dZ);a.j7=null;}
function ANo(a,b,c){R3(a);RH(a);a.el=null;a.ex=null;a.fh=0;}
function AKa(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=JK(a.bU);if(ABk(a))return;K4(a);Ck(c,a.el);d=Ef(a);e=ACN(c,a.fh);f=Bc(HE(a.j.a,d),a.b8.data.length)+30|0;g=a.ue.zm;h=a.ev.data;d=h.length;if(d<f){a:{i=a.fQ;j=a.fE;k=a.b8;l=a.ex;m=a.ij;n=Q(Jn,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gs!==c){Zi(l,q,m);o[f]=Kk(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Kk(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Kk(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){Zi(l,c,m);h[f]=null;}f=f+1|0;}a.ev=n;Co(a.hz,Kj(a.ex));Sp(a,a.bU.b$);}a.fQ=Bc((a.W.a+a.dy|0)/(Ef(a)+a.dy|0)|0,a.b8.data.length-1|0);a.fE=Bc((((a.W.a+a.dZ.t.a|0)-1|0)+a.dy|0)/(Ef(a)+a.dy|0)|0,a.b8.data.length-1|0);if(!a.ev.data.length)return;ACC(a,e);YS(a,b);q=g.xl;c=a.g;Bu(b,c.b,c.a,a.j,q);c=a.dZ.u;i=c.b;j=c.a;p=CB(a.bU,2.0);s=a.bU.c$;t=a.fQ;u=i+p|0;while(t<=a.fE){l=Ra(a,t);d=Bb(t,Ef(a));v
=t+1|0;w=d+Bb(v,a.dy)|0;x=u+a.dT|0;y=x+a.eL|0;z=a.cN!=t?0:1;m=!z?q:g.tW;ba=!z?g.wh:g.jL;bb=!z?g.qQ:g.jL;bc=!z?g.r9:g.jL;bd=(j+w|0)-a.W.a|0;DW(b,u,bd,l.ih,l.vb,a.fm,ba,m,a.bU.cu);DW(b,x,bd,l.jg,l.jH,a.fm,bb,m,a.bU.cu);DW(b,y,bd,l.ik,l.kX,a.fm,bc,m,a.bU.cu);d=l.ih.b;be=u+d|0;V(s,Bd(0,a.dT-d|0),l.ih.a);Bu(b,be,bd,s,m);d=u+a.dT|0;f=l.jg.b;bf=d+f|0;V(s,Bd(0,a.eL-f|0),l.jg.a);Bu(b,bf,bd,s,m);d=l.ik.b;bg=y+d|0;V(s,Bd(0,(((a.dZ.t.b-d|0)-a.eL|0)-a.dT|0)-p|0),l.ik.a);Bu(b,bg,bd,s,m);bh=(i+a.j.b|0)-p|0;V(s,p,Ef(a)+a.dy
|0);Bu(b,bh,bd,s,q);t=v;}Gf(b);}
function ACC(a,b){var c,d,e,f,g,h;c=0;d=a.fQ;while(d<=a.fE){e=Ra(a,d);if(!(e!==null&&e.gs===a.b8.data[d])){f=a.ev.data;g=a.b8;e=a.ex;h=a.ij;c=d%f.length|0;if(f[c]!==null)Zi(e,f[c],h);f[c]=Kk(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Co(a.hz,Kj(a.ex));Sp(a,a.bU.b$);}}
function Sp(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hz;c=DS(b,c.b+150|0,c.a,a.bU.cu);Ck(c,a.el);d=a.el;e=d.dd;f=e-(e+d.es)/16.0;g=a.ev.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gs.kd;k=d.jH;BS(c,j,k.bl+a.fh,f+k.bp);j=d.gs.kw;d=d.kX;BS(c,j,d.bl+a.fh,f+d.bp);}i=i+1|0;}a:{d=a.ij;if(d.cX>0){h=d.cV;i=0;b:while(true){g=d.b9.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cM;l=j.c5;k=k;l=l.k6;BS(c,k,l.bl+a.fh,f+l.bp);j=j.cT;if(h!=d.cV)break b;}i=i+1|0;}b=new HG;X(b);K(b);}}if(a.fm===null)a.fm=CT(b);CK(a.fm,
c);Eq(c);}
function Ra(a,b){var c;c=a.ev.data;return c[b%c.length|0];}
function AUD(a,b){Co(a.dZ.t,b);}
function AWs(a,b){Co(a.dZ.u,b);}
function R3(a){var b,c,d,e,f,g,h,i,j;b=JK(a.bU);if(ABk(a))return;K4(a);Ck(b,a.el);c=ACN(b,a.fh);d=a.b8.data;e=d.length;f=0;while(f<e){g=d[f];h=Lz(c,g.gO);i=Lz(c,g.kd);j=Lz(c,g.kw);a.dT=Bd(a.dT,h);a.eL=Bd(a.eL,i);a.gA=Bd(a.gA,j);f=f+1|0;}}
function ARn(a,b){var c;c=Vb(a,b.h);if(c>=0)a.cN=c;return Fa(a.dZ,a.g)&&Gu(a.bU.cK)?1:0;}
function AOi(a,b,c){if(!Fa(a.dZ,b.h)&&!Lt(a.dZ)){b=a.zO;if(b!==null)b.l();}return null;}
function AU0(a,b,c,d){var e;if(d==1){e=Vb(a,b.h);if(e>=0)Zd(a,a.b8.data[e]);}return 1;}
function Zd(a,b){a.j7.l();b.vZ.l();}
function Vb(a,b){var c,d,e;if(!a.ev.data.length)return (-1);c=Ef(a);d=(b.a-a.g.a|0)+a.W.a|0;e=a.dy;e=(d+e|0)/(c+e|0)|0;if(e<a.b8.data.length)return e;return (-1);}
function Ef(a){return EU(a.el);}
function K4(a){var b;if(a.el===null){b=HS(a.bU,a.xB);a.el=b;a.ex=ADh(EU(b));a.fh=CV(a.el.oB);}}
function AWR(a,b){var c,d,e;a:{switch(b.bk){case 13:Zd(a,a.b8.data[a.cN]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cN=a.fQ;b=a.em;c=a.W;JT(b,c.b,c.a-(a.j.a/2|0)|0);return 0;case 34:a.cN=a.fE;b=a.em;c=a.W;JT(b,c.b,c.a+(a.j.a/2|0)|0);return 0;case 35:case 39:a.cN=a.b8.data.length-1|0;break a;case 36:case 37:a.cN=0;break a;case 38:d=a.cN;e=a.b8.data.length;a.cN=((d+e|0)
-1|0)%e|0;break a;case 40:a.cN=(a.cN+1|0)%a.b8.data.length|0;break a;default:break a;}a.j7.l();return 0;}e=a.cN;if(e<=a.fQ)JT(a.em,a.W.b,Bb(e,Ef(a))+Bb(a.cN,a.dy)|0);else if(e>=a.fE)JT(a.em,a.W.b,(Bb(e+1|0,Ef(a))+Bb(a.cN+2|0,a.dy)|0)-a.j.a|0);return 0;}
var OZ=G();
function AOO(a){}
function Q3(){var a=this;EX.call(a);a.lc=null;a.nU=null;a.sQ=null;a.sN=0.0;}
function AYS(a){var b;b=Cc(20.0,a.bR);return BD(b,b);}
function AUM(a,b){var c,d,e,f;Ml(a,b.b*3|0,b.a*5|0);c=a.sQ;d=c.pj;e=c.pl;c=c.pk;b=CG(b);f=new L;N(f);H(H(H(f,c),C(28)),b);E8(e,M(f),d.r2,3.0);}
function AZk(a,b){var c,d,e,f,g,h,i,j,k,l,m;AIn(a,b);YS(a,b);c=Cc(30.0,a.bR);d=a.W;e=d.b;f=Bb(e/c|0,c);g=d.a;h=Bb(g/c|0,c);d=a.j;i=Bb(((e+d.b|0)-1|0)/c|0,c);e=Bb(((g+d.a|0)-1|0)/c|0,c);d=a.nU;d.a=c;d.b=c;a.lc.bD=1.0;while(h<=e){g=a.g.a-a.W.a|0;j=f;while(j<=i){k=a.g.b-a.W.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AH7(l);m=m+1|0;}AAF(AHe(l),0.75,a.sN,a.lc);Bu(b,k+j|0,g+h|0,a.nU,a.lc);j=j+c|0;}h=h+c|0;}Gf(b);}
function AKF(a,b){}
function RR(){var a=this;B.call(a);a.pj=null;a.pl=null;a.pk=null;}
var UR=G(D$);
var A5N=null;function Di(b,c){return Long_udiv(b, c);}
function AC6(b,c){return Long_urem(b, c);}
function Dv(b,c){return Long_ucompare(b, c);}
function AE1(){A5N=F($rt_longcls());}
function VE(){B.call(this);this.to=null;}
function ASP(a,b){Dx(a.to,b);}
function Rj(){B.call(this);this.qk=null;}
function AWA(a){S6(a.qk);}
function Ru(){B.call(this);this.uW=null;}
function AK0(a){XI(a.uW);}
function W$(){B.call(this);this.oJ=null;}
var A5M=null;function AQd(){var a=new W$();ADX(a);return a;}
function ADX(a){a.oJ=BN();}
function NY(a,b,c,d,e){var f;f=new Lv;f.vZ=e;f.kd=c;f.kw=d;f.gO=b;BG(a.oJ,f);}
function AAe(a){return IE(a.oJ,A5M);}
function VM(b){return b===null?C(21):YB(b);}
function AId(){A5M=Q(Lv,0);}
function Jn(){var a=this;B.call(a);a.vb=null;a.jH=null;a.kX=null;a.ih=null;a.jg=null;a.ik=null;a.gs=null;}
function Kk(b,c,d,e){var f,g,h;f=new Jn;f.ih=new Bh;f.jg=new Bh;f.ik=new Bh;f.gs=b;g=Cy(e,b.gO);if(g!==null)g.iT=g.iT+1|0;else{g=new Zr;h=JY(c,b.gO,d);g.iT=1;g.k6=h;Fv(e,b.gO,g);}e=g.k6;f.vb=e;V(f.ih,e.bd|0,e.bD|0);e=JY(c,b.kd,d);f.jH=e;V(f.jg,e.bd|0,e.bD|0);b=JY(c,b.kw,d);f.kX=b;V(f.ik,b.bd|0,b.bD|0);return f;}
function Zi(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gs.gO;f=Cy(d,e);g=f.iT-1|0;f.iT=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b9.data[0];while(j!==null){if(j.cM===null)break a;e=j.cT;i=j;j=e;}}else{k=Je(e);l=d.b9.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.kN==k&&AC_(e,j.cM))){m=j.cT;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cT=j.cT;else d.b9.data[h]=j.cT;d.cV=d.cV+1|0;d.cX=d.cX-1|0;}I7(b,f.k6);}I7(b,c.jH);I7(b,c.kX);}
var ND=G(0);
var A4M=null;var A4N=null;function AF5(){A4M=ED(40,40,40,200);A4N=ED(43,43,43,128);}
function Xi(){var a=this;B.call(a);a.nv=Fq;a.l2=0;a.qO=0;}
function VQ(){var a=this;B.call(a);a.q_=null;a.q$=null;a.q9=null;}
function ALn(a){var b,c,d,e,f;b=a.q_;c=a.q$;d=a.q9;e=Bz();f=new L;N(f);b=H(f,b);BM(b,9);b=H(b,c);BM(b,9);H(b,d);Bs(e,M(f));}
function Lv(){var a=this;B.call(a);a.vZ=null;a.kd=null;a.kw=null;a.gO=null;}
var CY=G(Bt);
var AGE=G(Fb);
function AM0(a){var b=new AGE();AR$(b,a);return b;}
function AR$(a,b){a.kT=1;a.lr=1;a.nf=b;}
function Xv(){B.call(this);this.pv=null;}
function APR(a,b){var c,d,e,f;c=a.pv;if(c.fy!=3){b=b.data;d=CM(b[0]);e=EQ(b[1]);Oi(c.f,d,e,null,null);if(c.fo){b=EH(c);f=IW(EK(),c.w3);c=new L;N(c);H(GV(H(H(c,b),C(429)),f),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}
var ADL=G(0);
function ACO(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Je(b)){case -1655966961:if(!Bm(b,C(184)))break a;c=4;break a;case 3401:if(!Bm(b,C(237)))break a;c=3;break a;case 98723:if(!Bm(b,C(183)))break a;c=2;break a;case 3254818:if(!Bm(b,C(182)))break a;c=1;break a;case 3556653:if(!Bm(b,C(181)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=EL();e=new L;N(e);H(H(e,C(430)),b);Bs(d,M(e));c=0;break b;}c=0;}return c;}
function AIJ(){var a=this;B.call(a);a.lP=null;a.mi=null;a.eH=null;a.lX=null;a.bw=null;a.nz=null;a.nK=null;a.fC=null;a.gj=null;a.iI=null;}
function AZf(a,b){var c=new AIJ();ARX(c,a,b);return c;}
function ARX(a,b,c){var d,e,f;a.eH=b;a.lX=c;a.bw=ALK();b=new L;N(b);a.iI=b;a.fC=U$();b=new VK;d=AH3(16);b.f$=0;b.dS=Q(Iz,d);b.r8=0.75;Y5(b);a.gj=b;b=new Zk;c=a.bw;e=a.iI;f=a.fC;b.dn=c;b.lB=e;b.uh=f;a.nz=b;b=new Y0;b.cU=c;b.m1=e;b.sU=f;a.nK=b;}
function Pu(a){var b,c,d,e,f,g,h;a:{b=K1(a.eH.eQ);c=b.hW;if(c.cX>0){d=c.cV;e=0;b:while(true){f=b.hW.b9.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cM;if(KD(a.fC,g))Cy(a.fC,g);else{h=a.fC;Fv(h,g,CU(h.cX));}c=c.cT;if(d!=b.hW.cV)break b;}e=e+1|0;}b=new HG;X(b);K(b);}}b=a.eH.fD;if(b!==null)T5(a,b);Br(a.bw,a.eH.eQ.cX);b=Vg(K1(a.eH.eQ));while(FF(b)){c=Ro(b);Hc(a.bw,a.iI.K,J(c));B0(a.iI,c);}b=Vg(K1(a.eH.eQ));while(FF(b)){c=Ro(b);c=Cy(a.eH.eQ,c);Br(a.bw,c.m);c=B4(c);while(B5(c)){g=B7(c);g=Cy(a.fC,g);Br(a.bw,
g.br);}}if(a.eH.fD===null)Br(a.bw,(-1));else{Br(a.bw,a.gj.f$);Vr(a,a.eH.fD);}if(a.lX===null)Br(a.bw,(-1));else{Br(a.bw,1);ADd(a.lX,a.bw,a.gj);}a.lP=SP(a.bw);a.mi=FY(M(a.iI));}
function T5(a,b){var c,d,e,f,g,h;if(Zz(a.gj,b))Nl(a.gj,b);else{c=a.gj;d=CU(c.f$);if(b===null){e=Tc(c);if(e===null){c.k5=c.k5+1|0;e=ZE(c,null,0,0);f=c.f$+1|0;c.f$=f;if(f>c.nE)Pn(c);}}else{g=J4(b);h=g&(c.dS.data.length-1|0);e=Pz(c,b,h,g);if(e===null){c.k5=c.k5+1|0;e=ZE(c,b,h,g);f=c.f$+1|0;c.f$=f;if(f>c.nE)Pn(c);}}e.c5=d;}b=b.cB;if(b===null)return;c=new AB1;c.sX=a;b.e7(c);}
function Vr(a,b){var c,d,e,f;c=(Nl(a.gj,b)).br;Br(a.bw,c);if(b instanceof L1)Br(a.bw,(-1));else if(!(b instanceof Lx))Br(a.bw,0);else Br(a.bw,1);d=a.nz;Br(d.dn,b.ep.cY());e=b.ep;f=new NW;f.zo=d;e.e7(f);d=a.nK;Br(d.cU,b.eZ.cY());e=b.eZ;f=new Yq;f.w9=d;e.e7(f);d=b.jY;Br(a.bw,d.cY());e=new ZN;e.x0=a;d.e7(e);d=b.gX;Br(a.bw,d.cY());d=d.b_();while(d.cA()){e=d.b2();O7(a.nz,e.j3);Hy(a.nK,e.k1);Br(a.bw,e.sg);}d=b.w5;if(d===null)Br(a.bw,(-1));else Br(a.bw,(Cy(a.fC,d)).br);b=b.cB;Br(a.bw,b.cY());d=new Re;d.pY=a;b.e7(d);}
function UJ(){B.call(this);this.yR=null;}
function AS4(a,b){var c,d,e,f,g,h,i,j;c=a.yR;if(c.fo){d=EH(c);e=new L;N(e);H(H(e,d),C(431));$rt_globals.console.info($rt_ustr(M(e)));}b=b.data;f=CM(b[0]);g=EQ(b[1]);h=(CM(b[2])).data[0];if(c.f.cq==h){i=null;j=null;if(b.length>=5){i=CM(b[3]);j=EQ(b[4]);}Oi(c.f,f,g,i,j);E_(c.f.dw);E_(c.f.dO);K8(c.f);Ib(c.f);Ne(c);}}
function U0(){var a=this;B.call(a);a.y9=null;a.y$=null;a.y8=0;}
function ANI(a,b){var c,d,e;c=a.y9;d=a.y$;e=a.y8;d.i(Z4(c,(b.h.b+e|0)-c.eA.b|0));}
function UZ(){var a=this;B.call(a);a.se=null;a.sc=null;a.sd=0;}
function AX3(a,b){var c,d,e;c=a.se;d=a.sc;e=a.sd;d.i(R_(c,(b.h.a+e|0)-c.eA.a|0));}
var ABd=G();
function AK8(a,b){b=b;b.cL=Ct(b.cL,null);}
function LC(){var a=this;No.call(a);a.rw=null;a.wm=null;}
function AIh(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.rw;e=0;f=0;g=a.wm;a:{b:{while(true){if((e+32|0)>f&&D0(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cf(b)+k|0;h=j.length;f=Bc(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BE;c=new L;N(c);U(H(U(H(c,C(432)),l),C(98)),h);Bn(b,M(c));K(b);}if(Cf(b)<m){b=new M5;X(b);K(b);}if(m<0){b=new BE;c=new L;N(c);H(U(H(c,C(99)),m),C(100));Bn(b,M(c));K(b);}n=b.Z;h=n+b.m3|0;e=0;while(e<m){o=k+1|0;i=b.n0.data;l=h+1|0;j[k]=i[h];e=
e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D0(c)){p=!D0(b)&&e>=f?A3C:A3B;break a;}i=g.data;n=Cf(c);o=i.length;n=Bc(n,o);q=new Yl;q.vh=b;q.xV=c;p=AIH(a,d,e,f,g,0,n,q);e=q.zz;if(p===null&&0==q.l8)p=A3C;k=q.l8;h=0;if(c.o7){b=new JX;X(b);K(b);}if(Cf(c)<k)break;if(h>o){b=new BE;c=new L;N(c);BM(U(H(U(H(c,C(101)),h),C(95)),o),41);Bn(b,M(c));K(b);}l=h+k|0;if(l>o){b=new BE;c=new L;N(c);U(H(U(H(c,C(103)),l),C(98)),o);Bn(b,M(c));K(b);}if(k<0){b=new BE;c=new L;N(c);H(U(H(c,C(99)),k),C(100));Bn(b,M(c));K(b);}o=c.Z;m=0;while(m<k)
{l=o+1|0;n=h+1|0;Vj(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new IO;X(b);K(b);}b=new BE;c=new L;N(c);BM(U(H(U(H(c,C(101)),k),C(95)),h),41);Bn(b,M(c));K(b);}E7(b,b.Z-(f-e|0)|0);return p;}
var WB=G(LC);
function AIH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(LD(h,2))break a;i=A3C;break a;}c=k+1|0;n=j[k];if(!Gg(a,n)){c=c+(-2)|0;i=Ei(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(LD(h,3))break a;i=A3C;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gg(a,n))break b;if(!Gg(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Nu(p)){c=k+(-3)|0;i=Ei(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ei(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(LD(h,4))break a;i=A3C;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cf(h.xV)<2?0:1)break a;i=A3B;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gg(a,n))break c;if(!Gg(a,o))break c;if(!Gg(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=I3(r);m=c+1|0;j[c]=JE(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ei(1);break a;}c=k+(-3)|0;i
=Ei(1);}h.zz=c;h.l8=f;return i;}
function Gg(a,b){return (b&192)!=128?0:1;}
function AAj(){var a=this;B.call(a);a.BF=null;a.BG=null;a.BE=null;}
function ABL(){B.call(this);this.ql=null;}
function AXV(a,b){var c,d;c=a.ql;d=c.d8+1|0;c.d8=d;c=new L;N(c);H(H(U(c,d),C(433)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function Q8(){B.call(this);this.py=null;}
function AKs(a){return a.py.gQ();}
function Q7(){B.call(this);this.zp=null;}
function AOa(a){return a.zp.gQ();}
function VC(){B.call(this);this.wg=null;}
function ATZ(a){return a.wg.gQ();}
function Wd(){B.call(this);this.Bv=null;}
function AXL(a){Bs(Bz(),C(434));}
var Uy=G();
function AR0(a){return HX(1);}
function U8(){B.call(this);this.uN=null;}
function AYw(a,b){a.uN.i(Fn(b));}
var AFe=G();
function Zm(){B.call(this);this.yA=null;}
function AOz(a,b){a.yA.l();}
var AFU=G();
var AG$=G();
function Px(){B.call(this);this.xJ=null;}
function AMK(a,b){var c,d,e,f;c=a.xJ;d=CG(b);e=new L;N(e);H(H(e,C(435)),d);$rt_globals.console.info($rt_ustr(M(e)));d=new Xn;d.BJ=c;d.uB=b;e=new Xq;e.CY=c;c=AH_(e);e=new YZ;e.re=d;d=b.fV;if(d!==null)d.arrayBuffer().then(Bl(e,"f"),Bl(c,"f"));else{b=b.hP.getFile();f=new Y1;f.xD=e;f.xE=c;b.then(Bl(f,"f"),Bl(c,"f"));}}
function Pw(){B.call(this);this.AK=null;}
function AV6(a,b){var c;b=CG(b);c=new L;N(c);H(H(c,C(436)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function Zj(){B.call(this);this.wf=null;}
function ALE(a){NA(a.wf);}
var HG=G(Bt);
function RZ(){var a=this;B.call(a);a.wX=0;a.wY=0;}
function AHP(){var a=this;B.call(a);a.h8=null;a.nH=0;a.fO=0;}
function ALK(){var a=new AHP();AZe(a);return a;}
function AZe(a){a.nH=0;a.h8=BK(16);a.fO=0;}
function Hc(a,b,c){Br(a,b);Br(a,c);}
function Br(a,b){var c,d;c=a.h8;d=c.data.length;if(d==a.fO)a.h8=JV(c,d*2|0);c=a.h8.data;d=a.fO;a.fO=d+1|0;c[d]=b;}
function SP(a){var b,c,d,e,f;b=a.nH;if(b&&a.fO!=b){c=EL();b=a.nH;d=a.fO;e=new L;N(e);H(U(H(U(H(e,C(437)),b),C(438)),d),C(439));Bs(c,M(e));}f=a.h8;b=f.data.length;d=a.fO;if(b!=d)f=JV(f,d);return f;}
function VK(){var a=this;D8.call(a);a.f$=0;a.dS=null;a.k5=0;a.r8=0.0;a.nE=0;}
function AH3(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Y5(a){a.nE=a.dS.data.length*a.r8|0;}
function Zz(a,b){return ABO(a,b)===null?0:1;}
function Nl(a,b){var c;c=ABO(a,b);if(c===null)return null;return c.c5;}
function ABO(a,b){var c,d;if(b===null)c=Tc(a);else{d=J4(b);c=Pz(a,b,d&(a.dS.data.length-1|0),d);}return c;}
function Pz(a,b,c,d){var e;e=a.dS.data[c];while(e!==null&&!(e.nA==d&&(b!==e.cM?0:1))){e=e.h2;}return e;}
function Tc(a){var b;b=a.dS.data[0];while(b!==null&&b.cM!==null){b=b.h2;}return b;}
function ZE(a,b,c,d){var e,f;e=new Iz;ACa(e,b,null);e.nA=d;f=a.dS.data;e.h2=f[c];f[c]=e;return e;}
function Pn(a){var b,c,d,e,f,g,h,i;b=a.dS.data.length;b=AH3(!b?1:b<<1);c=Q(Iz,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dS.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nA&f;i=h.h2;h.h2=d[b];d[b]=h;h=i;}e=e+1|0;}a.dS=c;Y5(a);}
function Zk(){var a=this;B.call(a);a.dn=null;a.lB=null;a.uh=null;}
function O7(a,b){var c;if(!(b instanceof Nn)){Br(a.dn,3);AAO(a,b);Br(a.dn,b.ig);}else{c=b;Br(a.dn,5);AAO(a,c);Br(a.dn,c.ig);Br(a.dn,c.pz);b=c.lj;Br(a.dn,b.m);c=new OT;c.q5=a;E4(b,c);}}
function AAO(a,b){var c;c=b.eq.iz;Hc(a.dn,a.lB.K,J(c));Br(a.dn,b.eq.dz);Ob(a,b.k9);B0(a.lB,c);}
function Ob(a,b){if(b===null)Br(a.dn,(-1));else Br(a.dn,(Cy(a.uh,b)).br);}
function Y0(){var a=this;B.call(a);a.cU=null;a.m1=null;a.sU=null;}
function Hy(a,b){var c,d,e;if(b instanceof GQ){c=b;Br(a.cU,9);Sr(a,c.ho);}else if(b instanceof JD){d=b;Br(a.cU,3);Tg(a,d);Br(a.cU,d.p_);Sr(a,d.hC);}else if(b instanceof J0){e=b;Br(a.cU,4);Hy(a,e.i2);Hy(a,e.hG);}else if(b===null)Br(a.cU,(-1));else{Br(a.cU,5);Tg(a,b);Br(a.cU,b.vY);}}
function Tg(a,b){var c;c=b.fx.iz;Hc(a.cU,a.m1.K,J(c));Br(a.cU,b.fx.dz);b=b.f9;if(b===null)Br(a.cU,(-1));else Br(a.cU,(Cy(a.sU,b)).br);B0(a.m1,c);}
function Sr(a,b){var c;Br(a.cU,b.m);c=new ACf;c.rb=a;E4(b,c);}
function Wj(){B.call(this);this.tx=null;}
function AV_(a,b){var c;c=a.tx;Dx(c,b);KV(c,null);ABJ(c);}
function ACe(){B.call(this);this.qZ=null;}
function APH(a,b){NB(a.qZ,b);}
function Rd(){B.call(this);this.xK=null;}
function AZq(a,b){var c,d,e,f;c=a.xK;if(c.hi!=3&&c.fy!=3){b=b.data;c.hD=3;d=CM(b[0]);e=EQ(b[1]);Ym(c.f,d,e);if(c.fo){b=EH(c);f=IW(EK(),c.i_);c=new L;N(c);H(GV(H(H(c,b),C(440)),f),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}
function Xu(){B.call(this);this.wi=null;}
function ASB(a,b){var c,d,e,f,g,h;c=a.wi;if(c.fy!=3){d=b.data;c.hi=3;if((CM(d[2])).data[0]!=1)NB(c,b);else{e=CM(d[0]);f=EQ(d[1]);g=c.hD!=3?0:1;Ty(c.f,e,f,g);if(c.fo){b=EH(c);h=IW(EK(),c.i_);c=new L;N(c);H(GV(H(H(c,b),C(441)),h),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}}
var Sd=G(D$);
var A5O=null;function ADZ(){A5O=F($rt_doublecls());}
var Jr=G();
var A5P=Fq;var A5Q=null;var A5R=null;function AFr(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.qO=Ix(C5(d,D(0, 2147483648)),Fq)?0:1;e=C5(d,D(4294967295, 1048575));f=GN(A0X(d,52))&2047;if(Ix(e,Fq)&&!f){c.nv=Fq;c.l2=0;return;}if(f)e=A0E(e,D(0, 1048576));else{e=G3(e,1);while(Ix(C5(e,D(0, 1048576)),Fq)){e=G3(e,1);f=f+(-1)|0;}}g=A5R.data;h=f<<16>>16;i=0;j=g.length;k=BI(i,j);if(k>0){c=new BR;X(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BI(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IX(e,A5Q.data[h],i);if(AND(m,A5P)){while(Dv(m,A5P)<=0){j=j+(-1)|0;m=CN(Ce(m,Bp(10)),Bp(9));}g=A5R.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IX(e,A5Q.data[h],i);}e=G3(e,1);d=CN(e,Bp(1));g=A5Q.data;h=j+1|0;n=g[h];f=i-1|0;n=IX(d,n,f);o=IX(IW(e,Bp(1)),A5Q.data[h],f);p=Bp(1);while(true){q=Ce(p,Bp(10));if(Dv(Di(m,q),Di(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ce(r,Bp(10));if(Dv(Di(m,s),Di(n,s))>=0)break;r=s;}h=Dv(p,r);e=h>0?Ce(Di(m,p),p):h<0?CN(Ce(Di(m,r),r),r):Ce(Di(CN(m,AHd(r,Bp(2))),r),r);if(Dv(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Di(e,Bp(10));if(Dv(e,D(2808348672, 232830643))<0)break;}else if(Dv(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ce(e,Bp(10));}c.nv=e;c.l2=j-330|0;}
function IX(b,c,d){var e,f,g,h,i,j,k,l;e=C5(b,Bp(65535));f=C5(Gi(b,16),Bp(65535));g=C5(Gi(b,32),Bp(65535));h=C5(Gi(b,48),Bp(65535));i=C5(c,Bp(65535));j=C5(Gi(c,16),Bp(65535));k=C5(Gi(c,32),Bp(65535));l=C5(Gi(c,48),Bp(65535));return CN(CN(CN(G3(Ce(l,h),32+d|0),G3(CN(Ce(l,g),Ce(k,h)),16+d|0)),G3(CN(CN(Ce(l,f),Ce(k,g)),Ce(j,h)),d)),Gi(CN(CN(CN(Ce(k,e),Ce(j,f)),Ce(i,g)),G3(CN(CN(CN(Ce(l,e),Ce(k,f)),Ce(j,g)),Ce(i,h)),16)),32-d|0));}
function AE3(){A5P=Di(Bp(-1),Bp(10));A5Q=ADO([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A5R=A2o([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function AA4(){B.call(this);this.tJ=null;}
function AZY(a){Hz(a.tJ,37,3);}
function AA5(){B.call(this);this.x8=null;}
function AJo(a){Hz(a.x8,40,3);}
function AA7(){B.call(this);this.rr=null;}
function ALN(a){Hz(a.rr,42,3);}
function AA8(){B.call(this);this.vq=null;}
function AYW(a){Hz(a.vq,45,3);}
function AA9(){B.call(this);this.zQ=null;}
function ARQ(a){Hz(a.zQ,45,5);}
function Os(){B.call(this);this.wI=null;}
function AZU(a,b){var c,d;c=a.wI;d=new Bt;Bn(d,$rt_str(b.message));c.i(d);}
var ABP=G(0);
var A3o=null;function A1M(){A1M=Bq(ABP);AUB();}
function AUB(){A3o=new $rt_globals.TextDecoder("utf-16");}
function Zv(){var a=this;B.call(a);a.r0=null;a.rZ=0.0;}
function Lz(a,b){return LW(a.r0,b,a.rZ*2.0+0.875);}
function Te(){var a=this;B.call(a);a.sy=null;a.sx=0;a.sA=0;a.sz=null;a.sC=0;a.sB=0;}
function AMg(a,b){var c,d,e,f,g,h,i,j;c=a.sy;d=a.sx;e=a.sA;f=a.sz;g=a.sC;h=a.sB;i=CB(c.bq,5.0);d=Bc((c.bq.bP.b-d|0)-i|0,Bd((i-d|0)-c.Q.j.b|0,b.h.b));j=Bc((c.bq.bP.a-e|0)-i|0,Bd((i-e|0)-c.Q.j.a|0,b.h.a));V(f,d+g|0,j+h|0);DQ(c,f,c.T.j);}
function Un(){var a=this;B.call(a);a.pS=null;a.pV=null;a.pW=null;a.pT=0;a.pU=0;a.pP=0;a.pQ=0;a.pN=0;a.pO=0;a.pR=0;a.xo=0;}
function ATy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.pS;d=a.pV;e=a.pW;f=a.pT;g=a.pU;h=a.pP;i=a.pQ;j=a.pN;k=a.pO;l=a.pR;m=a.xo;n=CB(c.bq,5.0);o=c.T.iK();Co(d,c.T.j);Co(e,c.T.g);switch(f){case -1:f=Bc(h+(b.h.b-g|0)|0,c.bq.bP.b-n|0);g=o.b;h=h+i|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bd((i+b.h.b|0)-g|0,Bd(o.b,n-c.Q.g.b|0));}b:{switch(j){case -1:f=Bd(n,Bc(l+(b.h.a-k|0)|0,(c.bq.bP.a+c.Q.j.a|0)-n|0));g=o.a;h=l+m|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bd((m+b.h.a|0)-k|0,o.a);}DQ(c,e,d);}
function XG(){var a=this;B.call(a);a.u9=0;a.Aa=0;}
function FN(a,b){var c;c=a.Aa;if(c<=0)return 0;return SB(a.u9,b,c);}
function ABh(){var a=this;B.call(a);a.sh=null;a.si=null;a.sj=null;}
function AYe(a,b,c,d){var e,f;b=a.sh;e=a.si;f=a.sj;WS(b,e);if(f!==null)d.mo.l();if(Yi(d)){if(d.nI===null)QA(b,AEZ(d,e),d.kn,e);else AAI(b,AEZ(d,e),d.kn,e,d.nI);}}
var Ea=G(Bt);
function PJ(){var a=this;B.call(a);a.pX=null;a.tR=null;a.xZ=0;a.zr=0;}
function MU(a,b){return Cf(a.tR)<b?0:1;}
var XU=G(0);
var A34=null;function A0W(){A0W=Bq(XU);AYC();}
function AYC(){A34=S(C(401));}
function YC(){B.call(this);this.pp=null;}
function ALz(a,b){NB(a.pp,b);}
var AHZ=G();
function XK(b,c,d,e){var f,g;f=b.next();g=new ABp;g.qh=b;g.qg=c;g.qm=d;g.qi=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function ADb(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AII(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ej()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new ABm;f.uG=b;f.uH=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function ADm(b,c){var d;if(c.isFile?1:0)b.i(ACI(c.file()));else{c=c.createReader();d=new AA0;d.yb=b;c.readEntries(Bl(d,"f"));}}
function Wq(){var a=this;B.call(a);a.bt=null;a.ru=null;a.hJ=null;a.o4=null;a.lq=null;a.fG=null;}
function G_(a){return a.bt.cx.gC;}
function ACm(a){var b;b=new VG;b.za=a;return b;}
function AE6(a){var b,c,d,e,f;b=Q(Cn,5);c=b.data;d=a.bt;BL(d);e=new ABZ;e.v0=d;c[0]=CX(C(442),e);e=a.bt;BL(e);f=new ABU;f.rg=e;c[1]=CX(C(443),f);d=a.bt;BL(d);e=new ABV;e.sr=d;c[2]=CX(C(444),e);d=a.bt;BL(d);e=new ABW;e.y6=d;c[3]=CX(C(445),e);d=a.bt;BL(d);e=new ABX;e.p4=d;c[4]=CX(C(446),e);return ER(b);}
function RE(a,b){var c;c=new Qb;c.zM=a;c.zN=b;return c;}
function Kx(a,b,c){var d,e,f,g,h,i,j,k,l;a:{Fr(a.fG.cb);d=a.bt.d;e=Ep(d);f=GJ(d);g=a.bt.fu;if(c===null)h=null;else{A1v();switch(A5S.data[c.fr]){case 1:h=Nr(g,e,f);break a;case 2:h=Tp(g,e,f);break a;default:}b=new EM;X(b);K(b);}}c=a.bt;e=E$(c,b);f=Jv(c.d.f,e.bn,e.by);g=V9(c,f);if(h!==null){f=c.d;i=e.bn;j=e.by;e=new Wz;e.C6=c;e.C5=b;e.C4=g;h.vy(f,i,j,e,c.jt);}else{e=Cy(c.d.f.dO,f);if(e!==null)I0(c,e);else{e=Cy(c.d.f.dw,f);if(e!==null&&!FR(e))TO(c.kZ,b,e,c,g);else{e=c.kZ;f=IJ(e.cb.hj);e.gD=f;g=e.fR;FB(f,g.df,g.lb);f
=e.gD;k=Q(Cn,1);l=k.data;g=new Cn;h=e.cb;BL(h);d=new AAl;d.v6=h;Er(g,d,C(447));l[0]=g;FS(f,b,ER(k),Tx(e,c));K6(e.cb,e.gD);}}}}
var ADA=G(0);
var Tu=G(0);
var PC=G(0);
var HJ=G();
function Va(){HJ.call(this);this.xi=null;}
function XX(a,b){var c,d,e;c=0;while(true){d=a.xi;if(d.jT===null)d.jT=B4(d.s2);if(!B5(d.jT))e=0;else{c=b.S(B7(d.jT));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Tj=G(0);
function Or(){var a=this;B.call(a);a.BM=null;a.BO=null;a.BK=0;a.BL=0;}
function Iz(){var a=this;G6.call(a);a.nA=0;a.h2=null;}
var ABr=G();
function AVV(a,b){ADb(b);}
function ABq(){var a=this;B.call(a);a.tU=null;a.tT=null;}
function AM_(a,b){var c,d,e,f,g,h,i;c=a.tU;d=a.tT;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new SU;i.rH=c;i.rG=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var AAp=G();
function AO3(a,b){ADb(b);}
function AAo(){var a=this;B.call(a);a.tc=null;a.td=null;}
function AP3(a,b){var c,d,e,f,g;c=a.tc;d=a.td;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=Q(BC,1);g.data[0]=Fn(b.name);XK(f,c,d,g);}
function N7(){var a=this;B.call(a);a.DC=null;a.z$=0;}
function AK2(a,b){var c,d,e,f;c=a.z$;d=(CM(Le(b,0))).data;b=Bz();e=d[0];f=new L;N(f);U(H(U(H(f,C(448)),c),C(449)),e);Bs(b,M(f));b=Bz();e=d[1];f=new L;N(f);U(H(U(H(f,C(448)),c),C(450)),e);Bs(b,M(f));}
function AC4(){B.call(this);this.I3=null;}
function ABm(){var a=this;B.call(a);a.uG=null;a.uH=null;}
function AOQ(a,b){var c,d,e,f,g,h;b=a.uG;c=a.uH;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new On;h.p9=b;h.p8=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=ACI(d.item(f));g=new N3;g.v3=b;g.v4=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function ADM(){var a=this;B.call(a);a.kM=null;a.nu=null;}
function AI$(){var a=this;B.call(a);a.Bl=0;a.C9=0;a.r4=0;a.m8=0;}
function AA$(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function AKJ(a){var b,c,d,e,f,g;b=a.tF;c=a.tG;if(BV(c.kM,b.d.fX)){c=c.nu;CL(b,c.m8,c.r4,0);Ca((Bj(b)).bN,c.m8,c.r4);Ca((Bj(b)).bB,c.C9,c.Bl);}else{d=(Cz(b.fu.xI)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Gn(b);b=new Qm;b.tC=g;b.tD=c;BL(b);c=new SH;c.Ai=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function AA_(){var a=this;B.call(a);a.y5=null;a.y4=null;}
function APz(a){I0(a.y5,a.y4);}
function FV(){var a=this;B.call(a);a.g6=null;a.cB=null;a.eZ=null;a.ep=null;a.gX=null;a.jY=null;a.w5=null;}
function AZ4(a){var b=new FV();AF$(b,a);return b;}
function AF$(a,b){a.g6=b;a.cB=BN();a.eZ=BN();a.ep=BN();a.jY=BN();a.gX=BN();}
function ABz(a){var b;b=a.g6;if(b!==null)b.cB.qK(a);}
function AB1(){B.call(this);this.sX=null;}
function AOV(a,b){b=b;T5(a.sX,b);}
var L1=G(FV);
var Lx=G(FV);
function ZN(){B.call(this);this.x0=null;}
function AKP(a,b){var c;b=b;c=a.x0;Br(c.bw,(Cy(c.fC,b)).br);}
function So(){var a=this;B.call(a);a.j3=null;a.k1=null;a.sg=0;}
function Re(){B.call(this);this.pY=null;}
function ASg(a,b){b=b;Vr(a.pY,b);}
function Ti(){var a=this;B.call(a);a.md=0;a.ts=null;}
function AZW(a,b){var c,d,e;c=a.ts;b=b;d=c.wX;e=c.wY;d=b.b<=d&&e<=b.a?1:0;a.md=d;return d?0:1;}
var JX=G(Ea);
var IO=G(Bt);
var M5=G(Bt);
function RM(){B.call(this);this.uV=null;}
function ATY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.uV;d=CM(c[0]);e=(CM(c[1])).data[0];if(!Xa(b.f)){c=b.f;if(c.cq==e){e=b.pJ;f=M4(d);E_(c.dO);E_(c.dw);K8(c);while(f.e0>=f.id.data.length?0:1){if(Ba(f)==(-1))continue;g=ABR(c,Ba(f));h=Nc(B$(c,g.bn),g.by);if(Ba(f)==(-1)){if(!e)continue;h.b1=0;h.bL=h.bL|4;continue;}i=ABR(c,Ba(f));j=Ba(f);k=Ba(f);Fv(c.dO,g,i);l=c.dw;m=BN();if(Cy(l,i)===null)Fv(l,i,m);BG(Cy(c.dw,i),g);h.b1=j;h.bL=k;}Mb(b);if(b.Bq){n=IW(EK(),b.yj);if(A0w(n,Bp(100))){b=EH(b);c=new L;N(c);H(GV(H(H(c,
b),C(451)),n),C(240));$rt_globals.console.info($rt_ustr(M(c)));}}}}}
function AI6(){B.call(this);this.M5=null;}
function Se(){var a=this;B.call(a);a.xc=null;a.xb=null;}
function ALO(a){var b,c;b=a.xc;c=a.xb;Gk(b.cb.hj,c);}
function SZ(){var a=this;B.call(a);a.s2=null;a.jT=null;}
function VD(){var a=this;B.call(a);a.qo=null;a.qp=null;}
function AKN(a){var b,c;b=a.qo;c=a.qp;Gk(b.cb.hj,c);Wo(b);}
var R2=G();
var A5T=null;function Ym(b,c,d){Ty(b,c,d,0);}
function Ty(b,c,d,e){P9(b,c,d,null,null,e);}
function P9(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=M4(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CH(b);c=b.A;if(c.data.length<i)b.A=AD9(c,i);m=0;while(m<i){if(g&&m<l){n=4*Ba(h)|0;h.e0=h.e0+n|0;}else b.A.data[m]=DV(S0(h,d,0));m=m+1|0;}K8(b);if(j)b.db=AHr(AIQ(h));E_(b.dO);E_(b.dw);o=b.dO;g=0;while(g<k){Fv(o,DU(Ba(h),Ba(h)),DU(Ba(h),Ba(h)));g=g+1|0;}p=b.dO;o=b.dw;q=Qh(Yk(p));while(FF(q)){r=ABv(q);s=r.cM;p=r.c5;BL(A5T);r=Cy(o,p);if(r===null){r=BN();Fv(o,p,r);}BG(r,s);}if(o.mC===null){p=new RK;p.zI=o;o.mC=p;}p=o.mC;r=new T0;L5(r,
p.zI);while(FF(r)){Mv(r);o=r.gU.c5;p=A2U;c=Q(B,o.m);d=c.data;IE(o,c);AEy(c,p);g=0;t=d.length;while(g<t){p=d[g];J9(o,g);o.cI.data[g]=p;g=g+1|0;}}Tk(h);if(e!==null&&f!==null){p=ASo(e,f);Qr(p);b.ey=AMA(p.m6,p.i0);b.db=AHr(p.nS);}}
function Oi(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=M4(c);i=Ba(h);j=Ba(h);k=Ba(h)!=1?0:1;l=Ba(h);m=Ba(h);n=AAL(b,i);o=AAL(b,j);p=(IP(B$(b,n.b),n.a)).data[0].s;q=(IP(B$(b,o.b),o.a)).data[1].s;r=0;s=l-1|0;while(r<l){g=S0(h,d,i);if(!r)g=MT(p,g);if(r==s)g=MT(g,q);t=n.b+r|0;u=DV(g);c=b.A.data;v=c[t];c[t]=u;if(!k&&H8(v)==H8(u)){t=0;while(t<H8(v)){w=v.s.data[t];o=u.s.data[t];x=w.b1;if(x!=5&&x&&!o.b1){o.b1=x;o.bL=w.bL;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=AIQ(h);v
=KO(i,j,(-1));PO(b.db,v,w);}else if(e!==null&&f!==null){u=ASo(e,f);Qr(u);v=KO(i,j,(-1));PO(b.db,v,u.nS);n=b.ey;n.fD=b.db.c9.cl;n.eQ=u.i0;}}Tk(h);}
function S0(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=Q(Cu,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=D6(Ev(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AG8(){A5T=new AAZ;}
function Hq(){var a=this;B.call(a);a.ef=0;a.et=0;a.ne=null;a.oG=0;a.go=null;}
function AWS(a,b,c,d,e,f){var g=new Hq();ARf(g,a,b,c,d,e,f);return g;}
function ARf(a,b,c,d,e,f,g){a.ef=b;a.et=c;a.ne=BD(f,g);a.oG=d;a.go=e;}
var Rp=G(0);
var E6=G(Fg);
function RJ(){E6.call(this);this.hW=null;}
function Vg(a){var b;b=new VR;L5(b,a.hW);return b;}
function NW(){B.call(this);this.zo=null;}
function ANZ(a,b){b=b;O7(a.zo,b);}
function Yq(){B.call(this);this.w9=null;}
function ARl(a,b){b=b;Hy(a.w9,b);}
function J6(){var a=this;B.call(a);a.eq=null;a.k9=null;a.ig=0;}
function A1E(a,b,c){var d=new J6();AG3(d,a,b,c);return d;}
function AG3(a,b,c,d){a.eq=b;a.k9=c;a.ig=d;}
function AGc(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BV(a.eq,c.eq)&&BV(a.k9,c.k9)&&BV(CU(a.ig),CU(c.ig))?1:0;}return 0;}
function Nn(){var a=this;J6.call(a);a.lj=null;a.pz=0;}
function ALu(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){if(!AGc(a,b))return 0;c=b;return BV(a.lj,c.lj);}return 0;}
function EZ(){var a=this;B.call(a);a.fx=null;a.f9=null;a.vY=0;}
function A0s(a,b,c){var d=new EZ();Mo(d,a,b,c);return d;}
function Mo(a,b,c,d){a.fx=b;a.f9=c;a.vY=d;}
function ADp(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BV(a.fx,c.fx)&&BV(a.f9,c.f9)?1:0;}return 0;}
function GQ(){EZ.call(this);this.ho=null;}
function JD(){var a=this;EZ.call(a);a.hC=null;a.p_=0;}
function AX_(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){if(!ADp(a,b))return 0;c=b;return BV(a.hC,c.hC);}return 0;}
function J0(){var a=this;EZ.call(a);a.i2=null;a.hG=null;}
function AKp(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return BV(a.i2,c.i2)&&BV(a.hG,c.hG)?1:0;}return 0;}
function AFE(){var a=this;B.call(a);a.Iz=null;a.Ix=null;a.IB=0.0;}
function AEJ(){var a=this;HJ.call(a);a.LG=null;a.On=0;a.Mw=0;a.Jt=0;}
function UC(){var a=this;B.call(a);a.qw=null;a.qx=null;}
function APQ(a){var b,c;b=a.qw;c=a.qx;Vx();Kx(b,c,A5U);}
function UD(){var a=this;B.call(a);a.ui=null;a.uj=null;}
function AMm(a){var b,c;b=a.ui;c=a.uj;Vx();Kx(b,c,A5V);}
function UA(){var a=this;B.call(a);a.yl=null;a.yk=null;}
function AKK(a){Kx(a.yl,a.yk,null);}
function UB(){var a=this;B.call(a);a.p1=null;a.p3=null;}
function APJ(a){var b,c,d,e,f,g,h;b=a.p1;c=a.p3;d=Ep(b.bt.d);e=GJ(b.bt.d);d=Xt(b.bt.fu,d,e);Fr(b.fG.cb);b=b.bt;e=E$(b,c);if(d!==null){f=b.d;g=e.bn;h=e.by;e=new X1;e.Dh=b;e.Di=c;d.MJ(f,g,h,1,e,b.jt);}}
function TL(){B.call(this);this.st=null;}
function AU4(a){var b;b=a.st;Fr(b.fG.cb);Hw(b.bt,ACm(b),0);}
function TK(){B.call(this);this.yU=null;}
function ATg(a){var b;b=a.yU;Fr(b.fG.cb);Hw(b.bt,ACm(b),1);}
function TJ(){B.call(this);this.v8=null;}
function AZH(a){var b,c,d;b=a.v8;Fr(b.fG.cb);c=G_(b);b=b.bt;BL(b);d=new ACr;d.te=b;TS(c,d,AD3(C(452)));}
function Rs(){var a=this;B.call(a);a.qt=null;a.qu=null;}
function ATb(a){var b,c;b=a.qt;c=a.qu;b=b.bt.d;b.n5=c;JR(b);}
var SY=G(0);
var A35=null;function AGT(){A35=new XL;}
function Sz(){B.call(this);this.zU=null;}
function AL8(a){var b,c,d;b=a.zU;Fr(b.fG.cb);c=G_(b);b=b.bt;BL(b);d=new T_;d.ws=b;M7(c,d);}
function AGQ(){var a=this;B.call(a);a.id=null;a.e0=0;}
function M4(a){var b=new AGQ();AJI(b,a);return b;}
function AJI(a,b){a.id=b;a.e0=0;}
function Ba(a){var b,c;b=a.id.data;c=a.e0;a.e0=c+1|0;return b[c];}
function Tk(a){var b,c,d,e;if(a.e0!=a.id.data.length){b=EL();c=a.id.data.length;d=a.e0;e=new L;N(e);H(U(H(U(H(e,C(437)),c),C(453)),d),C(454));Bs(b,M(e));}}
function ADi(){var a=this;B.call(a);a.m6=null;a.nS=null;a.i0=null;a.cz=null;a.lW=null;a.mP=null;a.hH=null;a.nR=null;a.nL=null;}
function ASo(a,b){var c=new ADi();AXE(c,a,b);return c;}
function AXE(a,b,c){a.cz=M4(b);a.lW=c;}
function Qr(a){var b,c,d,e,f,g,h,i;b=Ba(a.cz);c=new L4;Sn(c);a.i0=c;a.hH=BN();d=0;while(d<b){e=Ba(a.cz);f=Ba(a.cz);g=Ev(a.lW,e,f);Fv(a.i0,g,BN());BG(a.hH,g);d=d+1|0;}c=Qh(Yk(a.i0));while(FF(c)){Hl((ABv(c)).c5,Pi(a));}d=Ba(a.cz);if(d==(-1))a.m6=null;else{a.mP=Q(FV,d);c=new Ox;h=a.cz;i=a.lW;g=a.hH;c.dx=h;c.u0=i;c.t5=g;a.nR=c;c=new TX;c.ea=h;c.x1=i;c.yv=g;a.nL=c;a.m6=TA(a,null);}if(Ba(a.cz)!=(-1))a.nS=TU(a.cz,a.mP);}
function TA(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cz);d=Ba(a.cz);e=a.nR;f=Ba(e.dx);g=BN();h=0;while(h<f){BG(g,OA(e));h=h+1|0;}a:{switch(d){case -1:i=new L1;i.g6=b;b=A4g;i.cB=b;i.eZ=b;i.ep=b;i.jY=b;i.gX=b;break a;case 0:i=AZ4(b);break a;case 1:i=new Lx;AF$(i,b);Hl(i.ep,g);break a;default:}b=new CY;i=new L;N(i);U(H(i,C(455)),d);Bn(b,M(i));K(b);}i.ep=g;b=a.nL;d=Ba(b.ea);e=BN();j=0;while(j<d){BG(e,Gz(b));j=j+1|0;}i.eZ=e;i.jY=Pi(a);d=Ba(a.cz);b=BN();j=0;while(j<d){e=OA(a.nR);g=Gz(a.nL);f=Ba(a.cz);k=new So;k.j3=e;k.k1
=g;k.sg=f;BG(b,k);j=j+1|0;}i.gX=b;j=Ba(a.cz);i.w5=j==(-1)?null:Bw(a.hH,j);d=Ba(a.cz);b=BN();j=0;while(j<d){BG(b,TA(a,i));j=j+1|0;}i.cB=b;a.mP.data[c]=i;return i;}
function Pi(a){var b,c,d,e;b=Ba(a.cz);c=BN();d=0;while(d<b){e=Ba(a.cz);BG(c,Bw(a.hH,e));d=d+1|0;}return c;}
function WH(){B.call(this);this.xL=null;}
function AOR(a,b,c){var d,e;c=a.xL;d=c.d.f;e=b.br;b=c.fn;U1(d.A.data[e],0,b);}
function Zr(){var a=this;B.call(a);a.k6=null;a.iT=0;}
var AAd=G(BE);
function Pc(){B.call(this);this.r5=null;}
function AQq(a){AIX(a.r5);}
function Pd(){B.call(this);this.tm=null;}
function AXg(a){IH(a.tm);}
function Pb(){B.call(this);this.zS=null;}
function AJk(a){AFN(a.zS);}
function AAn(){B.call(this);this.t6=null;}
function ARv(a){a.t6.zk();}
function AAm(){B.call(this);this.xT=null;}
function AVu(a){a.xT.zT();}
function Rn(){B.call(this);this.ra=null;}
function ANe(a){var b,c,d,e,f,g,h,i;b=a.ra;c=(b.ru.da()).data;d=Q(Cn,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new O6;i.sW=b;i.sV=h;e[f]=PD(i,h);f=f+1|0;}return d;}
function Vh(){B.call(this);this.rC=null;}
function AP1(a){a.rC.o4.jU(0);}
function Vi(){B.call(this);this.s7=null;}
function AWT(a){a.s7.o4.jU(1);}
function ABZ(){B.call(this);this.v0=null;}
function AJD(a){var b,c,d,e,f;b=a.v0.d.f;c=b.cq;d=new L;N(d);U(H(d,C(456)),c);$rt_globals.console.info($rt_ustr(M(d)));c=b.nk;d=new L;N(d);U(H(d,C(457)),c);$rt_globals.console.info($rt_ustr(M(d)));d=b.db;e=Gt(E5(b));AAC(d,0,d.c9,e);b=Bz();f=b.ms;f.data[0]=10;Qn(b,f,0,1);}
function ABU(){B.call(this);this.rg=null;}
function AP5(a){Ua(a.rg);}
function ABV(){B.call(this);this.sr=null;}
function AYE(a){Wg(a.sr);}
function ABW(){B.call(this);this.y6=null;}
function ARO(a){Ne(a.y6.d);}
function ABX(){B.call(this);this.p4=null;}
function APh(a){ABJ(a.p4);}
function Og(){B.call(this);this.rV=null;}
function AXa(a){var b,c,d,e,f,g,h;b=a.rV;c=Q(Cn,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=PD(RE(b,g),PM(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=PD(RE(b,g),PM(g));e=h;}return c;}
var AAZ=G();
function Yt(){B.call(this);this.u4=null;}
function AU6(a,b,c){GW(B$(a.u4.d.f,b.br),0,J(c));}
var Fx=G();
var A5W=null;var A5X=null;var A4g=null;var A5Y=null;var A5Z=null;var A50=null;function AGa(){A5W=new YO;A5X=new YL;A4g=new YM;A5Y=new YJ;A5Z=new YK;A50=new ACp;}
function SU(){var a=this;B.call(a);a.rH=null;a.rG=null;}
function ANn(a,b){a.rH.i(AGp(a.rG,b));}
function AIF(){var a=this;B.call(a);a.iz=null;a.dz=0;}
function AOT(a,b){var c=new AIF();AJv(c,a,b);return c;}
function AJv(a,b,c){a.iz=b;a.dz=c;}
function ATh(a,b){var c;if(a===b)return 1;if(b!==null&&BJ(a)===BJ(b)){c=b;return a.dz==c.dz&&BV(a.iz,c.iz)?1:0;}return 0;}
function OT(){B.call(this);this.q5=null;}
function ARj(a,b){b=b;Ob(a.q5,b);}
function ACf(){B.call(this);this.rb=null;}
function AZS(a,b){b=b;Hy(a.rb,b);}
var JM=G(0);
function On(){var a=this;B.call(a);a.p9=null;a.p8=null;}
function AP9(a){ADm(a.p9,a.p8);}
function N3(){var a=this;B.call(a);a.v3=null;a.v4=null;}
function AJp(a){a.v3.i(a.v4);}
var XL=G();
function ABp(){var a=this;B.call(a);a.qh=null;a.qg=null;a.qm=null;a.qi=null;}
function APn(a,b){var c,d,e,f,g,h,i;c=a.qh;d=a.qg;e=a.qm;f=a.qi;if(!(b.done?1:0)){XK(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new Xp;c.tg=d;c.th=g;c.ti=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=Fn(g.name);i=h.length;f=C_(f,i+1|0);f.data[i]=b;XK(c,d,e,f);}}}
var Ln=G(E6);
var YO=G(Ln);
var MA=G(D8);
var YL=G(MA);
var Nd=G(EY);
function AM2(a){var b;b=new Ea;X(b);K(b);}
function AR8(a,b){var c;c=new Ea;X(c);K(c);}
function AQD(a,b){b=new Ea;X(b);K(b);}
var YM=G(Nd);
function ASi(a,b){var c;c=new BE;X(c);K(c);}
function ARb(a){return 0;}
function ANB(a){return A5Y;}
function AKx(a){return 1;}
var YJ=G();
function AKb(a){return 0;}
function ATX(a){var b;b=new NN;X(b);K(b);}
function AVM(a){var b;b=new CY;X(b);K(b);}
var RY=G(0);
var YK=G();
var ACp=G();
function Fp(){var a=this;B.call(a);a.j_=0;a.v7=0;a.i5=null;a.gU=null;a.tu=null;a.kR=null;}
function A51(a){var b=new Fp();L5(b,a);return b;}
function L5(a,b){a.kR=b;a.v7=b.cV;a.i5=null;}
function FF(a){var b,c;if(a.i5!==null)return 1;while(true){b=a.j_;c=a.kR.b9.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.j_=b+1|0;}return 0;}
function AEh(a){var b;if(a.v7==a.kR.cV)return;b=new HG;X(b);K(b);}
function Mv(a){var b,c,d,e;AEh(a);if(!FF(a)){b=new NN;X(b);K(b);}b=a.i5;if(b!==null){c=a.gU;if(c!==null)a.tu=c;a.gU=b;a.i5=b.cT;}else{d=a.kR.b9.data;e=a.j_;a.j_=e+1|0;b=d[e];a.gU=b;a.i5=b.cT;a.tu=null;}}
var VR=G(Fp);
function Ro(a){Mv(a);return a.gU.cM;}
function ADy(){var a=this;B.call(a);a.Jo=null;a.Pk=0;}
function TV(){var a=this;B.call(a);a.k=null;a.dN=0;a.mf=null;a.qU=0;a.g$=0;a.fj=0;a.bA=0;a.nt=null;}
function K5(a){return a.k.bQ;}
function ABS(a,b,c,d){var e,f,g,h,i,j;e=BN();f=a.dN;g=0;if(c!=f)a.dN=c;a:{switch(b){case -1073741784:h=new Ur;c=a.bA+1|0;a.bA=c;FW(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Sq;c=a.bA+1|0;a.bA=c;FW(h,c);break a;case -33554392:h=new VS;c=a.bA+1|0;a.bA=c;FW(h,c);break a;default:c=a.g$+1|0;a.g$=c;if(d!==null)h=A1O(c);else{h=new F7;FW(h,0);g=1;}c=a.g$;if(c<=(-1))break a;if(c>=10)break a;a.mf.data[c]=h;break a;}h=new ABK;FW(h,(-1));}while(true){if(Fy(a.k)&&a.k.o==(-536870788))
{d=AXB(Cj(a,2),Cj(a,64));while(!Dq(a.k)&&Fy(a.k)){i=a.k;j=i.o;if(j&&j!=(-536870788)&&j!=(-536870871))break;CF(d,Bk(i));i=a.k;if(i.bi!=(-536870788))continue;Bk(i);}i=LX(a,d);i.R(h);}else if(a.k.bi==(-536870788)){i=Ho(h);Bk(a.k);}else{i=Rw(a,h);d=a.k;if(d.bi==(-536870788))Bk(d);}if(i!==null)BG(e,i);if(Dq(a.k))break;if(a.k.bi==(-536870871))break;}if(a.k.mH==(-536870788))BG(e,Ho(h));if(a.dN!=f&&!g){a.dN=f;d=a.k;d.gS=f;d.o=d.bi;d.fc=d.fv;j=d.dt;d.x=j+1|0;d.is=j;FE(d);}switch(b){case -1073741784:break;case -536870872:d
=new Ol;F9(d,e,h);return d;case -268435416:d=new ZG;F9(d,e,h);return d;case -134217688:d=new T1;F9(d,e,h);return d;case -67108824:d=new WC;F9(d,e,h);return d;case -33554392:d=new D1;F9(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A1u(Bw(e,0),h);default:return A05(e,h);}return Ho(h);}d=new JW;F9(d,e,h);return d;}
function AHw(a){var b,c,d,e,f,g,h;b=BK(4);c=(-1);d=(-1);if(!Dq(a.k)&&Fy(a.k)){e=b.data;c=Bk(a.k);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.k;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.k;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return AXd(e,3);}return AXd(e,2);}if(!Cj(a,2))return AEf(b[0]);if(Cj(a,64))return AUS(b[0]);return AMb(b[0]);}e=b.data;c=1;while(c<4&&!Dq(a.k)&&Fy(a.k)){h=c+1|0;e[c]=Bk(a.k);c=h;}if(c==1){h=e[0];if(!(A52.CR(h)==A53?0:1))return ABF(a,e[0]);}if
(!Cj(a,2))return A2q(b,c);if(Cj(a,64)){f=new ABo;Qd(f,b,c);return f;}f=new WU;Qd(f,b,c);return f;}
function Rw(a,b){var c,d,e,f,g,h,i;if(Fy(a.k)&&!KR(a.k)&&Lu(a.k.o)){if(Cj(a,128)){c=AHw(a);if(!Dq(a.k)){d=a.k;e=d.bi;if(!(e==(-536870871)&&!(b instanceof F7))&&e!=(-536870788)&&!Fy(d))c=Nx(a,b,c);}}else if(!Qq(a.k)&&!Ys(a.k)){f=new Qs;N(f);while(!Dq(a.k)&&Fy(a.k)&&!Qq(a.k)&&!Ys(a.k)){if(!(!KR(a.k)&&!a.k.o)&&!(!KR(a.k)&&Lu(a.k.o))){g=a.k.o;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.k);if(!Np(e))BM(f,e&65535);else Jj(f,G4(e));}if(!Cj(a,2)){c=new Um;DH(c);c.cF
=M(f);e=f.K;c.bO=e;c.mA=ASV(e);c.nw=ASV(c.bO);h=0;while(h<(c.bO-1|0)){T4(c.mA,P(c.cF,h),(c.bO-h|0)-1|0);T4(c.nw,P(c.cF,(c.bO-h|0)-1|0),(c.bO-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A2p(f);else{c=new O4;DH(c);c.iw=M(f);c.bO=f.K;}}else c=Nx(a,b,ABn(a,b));}else{d=a.k;if(d.bi!=(-536870871))c=Nx(a,b,ABn(a,b));else{if(b instanceof F7)K(Ch(C(21),d.bQ,Qp(d)));c=Ho(b);}}a:{if(!Dq(a.k)){e=a.k.bi;if(!(e==(-536870871)&&!(b instanceof F7))&&e!=(-536870788)){f=Rw(a,b);if(c instanceof C$&&!(c instanceof FG)&&!(c instanceof C0)
&&!(c instanceof EW)){i=c;if(!f.bY(i.M)){c=new ZX;Fk(c,i.M,i.e,i.iZ);c.M.R(c);}}if((f.i6()&65535)!=43)c.R(f);else c.R(f.M);break a;}}if(c===null)return null;c.R(b);}if((c.i6()&65535)!=43)return c;return c.M;}
function Nx(a,b,c){var d,e,f,g,h;d=a.k;e=d.bi;if(c!==null&&!(c instanceof B_)){switch(e){case -2147483606:Bk(d);d=new ACu;Dn(d,c,b,e);NG();c.R(A54);return d;case -2147483605:Bk(d);d=new Sg;Dn(d,c,b,(-2147483606));NG();c.R(A54);return d;case -2147483585:Bk(d);d=new RP;Dn(d,c,b,(-536870849));NG();c.R(A54);return d;case -2147483525:f=new OY;d=FM(d);g=a.fj+1|0;a.fj=g;J8(f,d,c,b,(-536870849),g);NG();c.R(A54);return f;case -1073741782:case -1073741781:Bk(d);d=new Uj;Dn(d,c,b,e);c.R(d);return d;case -1073741761:Bk(d);d
=new Tm;Dn(d,c,b,(-536870849));c.R(b);return d;case -1073741701:h=new X4;d=FM(d);e=a.fj+1|0;a.fj=e;J8(h,d,c,b,(-536870849),e);c.R(h);return h;case -536870870:case -536870869:Bk(d);if(c.i6()!=(-2147483602)){d=new C0;Dn(d,c,b,e);}else if(Cj(a,32)){d=new Uk;Dn(d,c,b,e);}else{d=new QE;f=RS(a.dN);Dn(d,c,b,e);d.mG=f;}c.R(d);return d;case -536870849:Bk(d);d=new Gp;Dn(d,c,b,(-536870849));c.R(b);return d;case -536870789:h=new FO;d=FM(d);e=a.fj+1|0;a.fj=e;J8(h,d,c,b,(-536870849),e);c.R(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new ACv;Fk(d,f,b,e);f.e=d;return d;case -2147483585:Bk(d);c=new ZT;Fk(c,f,b,(-2147483585));return c;case -2147483525:c=new Rv;UU(c,FM(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new Th;Fk(d,f,b,e);f.e=d;return d;case -1073741761:Bk(d);c=new Xc;Fk(c,f,b,(-1073741761));return c;case -1073741701:c=new T2;UU(c,FM(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=A1z(f,b,e);f.e=d;return d;case -536870849:Bk(d);c
=new EW;Fk(c,f,b,(-536870849));return c;case -536870789:return A0B(FM(d),f,b,(-536870789));default:}return c;}
function ABn(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F7;while(true){a:{e=a.k;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dN=g;else{if(f!=(-1073741784))g=a.dN;c=ABS(a,f,g,b);e=a.k;if(e.bi!=(-536870871))K(Ch(C(21),e.bQ,e.dt));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=AWW(0);break a;case -2147483577:Bk(e);c=new Qz;B3(c);break a;case -2147483558:Bk(e);c=new AAW;h=a.bA+1|0;a.bA=h;AHV(c,h);break a;case -2147483550:Bk(e);c=AWW(1);break a;case -2147483526:Bk(e);c=new AAi;B3(c);break a;case -536870876:Bk(e);a.bA=a.bA+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A0R(a.bA);break a;}c=A0a(a.bA);break a;}if(Cj(a,1)){c=A0_(a.bA);break a;}c=A1S(a.bA);break a;case -536870866:Bk(e);if(Cj(a,32)){c=A2b();break a;}c=A1J(RS(a.dN));break a;case -536870821:Bk(e);i=0;c=a.k;if(c.bi==(-536870818)){i=1;Bk(c);}c
=LX(a,GE(a,i));c.R(b);e=a.k;if(e.bi!=(-536870819))K(Ch(C(21),e.bQ,e.dt));Q9(e,1);Bk(a.k);break a;case -536870818:Bk(e);a.bA=a.bA+1|0;if(!Cj(a,8)){c=new LB;B3(c);break a;}c=new Pe;e=RS(a.dN);B3(c);c.u6=e;break a;case 0:j=e.fv;if(j!==null)c=LX(a,j);else{if(Dq(e)){c=Ho(b);break a;}c=AEf(f&65535);}Bk(a.k);break a;default:break b;}Bk(e);c=new LB;B3(c);break a;}h=(f&2147483647)-48|0;if(a.g$<h)K(Ch(C(21),FT(e),Qp(a.k)));Bk(e);a.bA=a.bA+1|0;c=!Cj(a,2)?A0f(h,a.bA):Cj(a,64)?A0S(h,a.bA):A2k(h,a.bA);a.mf.data[h].l$=1;a.qU
=1;break a;}if(f>=0&&!Hr(e)){c=ABF(a,f);Bk(a.k);}else if(f==(-536870788))c=Ho(b);else{if(f!=(-536870871)){b=new JG;c=!Hr(a.k)?AAQ(f&65535):a.k.fv.cP();e=a.k;Km(b,c,e.bQ,e.dt);K(b);}if(d){b=new JG;e=a.k;Km(b,C(21),e.bQ,e.dt);K(b);}c=Ho(b);}}}if(f!=(-16777176))break;}return c;}
function GE(a,b){var c,d,e,f,g,h,i,j,$$je;c=AXB(Cj(a,2),Cj(a,64));EO(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dq(a.k))break a;h=a.k;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CF(c,d);d=Bk(a.k);h=a.k;if(h.bi!=(-536870874)){d=38;break d;}if(h.o==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=GE(a,0);break d;}if(a.k.bi==(-536870819))break d;AAu(c,GE(a,0));break d;case -536870867:if(!g){b=h.o;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.k;i=h.bi;if(Hr(h))break c;if
(i<0){j=a.k.o;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Lu(i))break e;i=i&65535;break e;}catch($$e){$$je=EA($$e);if($$je instanceof El){break b;}else{throw $$e;}}}try{B8(c,d,i);}catch($$e){$$je=EA($$e);if($$je instanceof El){break b;}else{throw $$e;}}Bk(a.k);d=(-1);break d;}}if(d>=0)CF(c,d);d=45;Bk(a.k);break d;case -536870821:if(d>=0){CF(c,d);d=(-1);}Bk(a.k);j=0;h=a.k;if(h.bi==(-536870818)){Bk(h);j=1;}if(!e)ACF(c,GE(a,j));else AAu(c,GE(a,j));e=0;Bk(a.k);break d;case -536870819:if(d>=0)CF(c,
d);d=93;Bk(a.k);break d;case -536870818:if(d>=0)CF(c,d);d=94;Bk(a.k);break d;case 0:if(d>=0)CF(c,d);h=a.k.fv;if(h===null)d=0;else{AI9(c,h);d=(-1);}Bk(a.k);break d;default:}if(d>=0)CF(c,d);d=Bk(a.k);}g=0;}K(Ch(C(21),K5(a),a.k.dt));}K(Ch(C(21),K5(a),a.k.dt));}if(!f){if(d>=0)CF(c,d);return c;}K(Ch(C(21),K5(a),a.k.dt-1|0));}
function ABF(a,b){var c,d,e;c=Np(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AMb(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new Oc;DH(d);d.bO=2;d.us=Hd(Hb(b));return d;}if(Rk(b))return AS7(b&65535);if(!Vv(b))return AUS(b&65535);return APU(b&65535);}}if(!c){if(Rk(b))return AS7(b&65535);if(!Vv(b))return AEf(b&65535);return APU(b&65535);}d=new D9;DH(d);d.bO=2;d.gt=b;e=(G4(b)).data;d.lo=e[0];d.j2=e[1];return d;}
function LX(a,b){var c,d,e;if(!AF3(b)){if(!b.O){if(b.h3())return APi(b);return AWX(b);}if(!b.h3())return AQF(b);c=new J$;Xz(c,b);return c;}c=ADa(b);d=new Oy;B3(d);d.s6=c;d.Aw=c.bg;if(!b.O){if(b.h3())return AGN(APi(Ik(b)),d);return AGN(AWX(Ik(b)),d);}if(!b.h3())return AGN(AQF(Ik(b)),d);c=new Tb;e=new J$;Xz(e,Ik(b));AIS(c,e,d);return c;}
function In(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dN&b)!=b?0:1;}
function UX(){B.call(this);this.ug=null;}
function AR4(a,b){b.hm=a.ug.c9;}
function UW(){B.call(this);this.xO=null;}
function AUH(a,b){b.g6=a.xO.c9.cl;}
function X0(){E6.call(this);this.uO=null;}
function Qh(a){var b;b=new XP;L5(b,a.uO);return b;}
function RK(){Fg.call(this);this.zI=null;}
function QC(){B.call(this);this.rp=null;}
function AMT(a,b){b.hm=a.rp;}
function Ox(){var a=this;B.call(a);a.dx=null;a.u0=null;a.t5=null;}
function OA(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.dx);switch(b){case 3:break;case 5:c=Qf(a);d=MP(a);b=Ba(a.dx);e=Ba(a.dx);f=Ba(a.dx);g=BN();h=0;while(h<f){BG(g,MP(a));h=h+1|0;}i=new Nn;AG3(i,c,d,b);i.lj=g;i.pz=e;break a;default:c=new CY;d=new L;N(d);U(H(d,C(458)),b);Bn(c,M(d));K(c);}i=A1E(Qf(a),MP(a),Ba(a.dx));}return i;}
function Qf(a){var b,c;b=Ba(a.dx);c=Ba(a.dx);return AOT(Ev(a.u0,b,c),Ba(a.dx));}
function MP(a){var b;b=Ba(a.dx);if(b==(-1))return null;return Bw(a.t5,b);}
function TX(){var a=this;B.call(a);a.ea=null;a.x1=null;a.yv=null;}
function Gz(a){var b,c,d,e,f;a:{b:{b=Ba(a.ea);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=Pk(a);d=Sy(a);b=Ba(a.ea);e=Vo(a);f=new JD;Mo(f,c,d,2);f.p_=b;f.hC=e;break a;case 4:c=Gz(a);d=Gz(a);f=new J0;Mo(f,c.fx,c.f9,9);f.i2=c;f.hG=d;break a;case 5:f=A0s(Pk(a),Sy(a),Ba(a.ea));break a;case 9:c=Vo(a);f=new GQ;d=!FR(c)&&Bw(c,0)!==null?(Bw(c,0)).f9:null;Mo(f,null,null,7);f.ho=BN();c=B4(c);while(B5(c)){e=B7(c);if(!(e instanceof GQ))BG(f.ho,e);else{e=e;Hl(f.ho,e.ho);}}f.f9=d;break a;default:break b;}f
=null;break a;}c=new CY;d=new L;N(d);U(H(d,C(459)),b);Bn(c,M(d));K(c);}return f;}
function Pk(a){var b,c;b=Ba(a.ea);c=Ba(a.ea);return AOT(Ev(a.x1,b,c),Ba(a.ea));}
function Sy(a){var b;b=Ba(a.ea);if(b==(-1))return null;return Bw(a.yv,b);}
function Vo(a){var b,c,d;b=Ba(a.ea);c=BN();d=0;while(d<b){BG(c,Gz(a));d=d+1|0;}return c;}
var Hh=G(0);
function WL(){B.call(this);this.um=null;}
function ASl(a,b,c,d){KH(a.um,b,c.br,d.br);}
function WM(){B.call(this);this.qn=null;}
function APo(a,b,c,d){KH(a.qn,b,c.br,d.br);}
function IZ(){B.call(this);this.o0=0;}
var A55=null;var A56=null;var A57=null;function AUb(a){var b=new IZ();AGR(b,a);return b;}
function AGR(a,b){a.o0=b;}
function Rh(b){return !b?A56:A55;}
function ADr(){A55=AUb(1);A56=AUb(0);A57=F($rt_booleancls());}
var KL=G(0);
var Uv=G();
var Q1=G(0);
var AFI=G();
function U5(){B.call(this);this.xR=null;}
function ATc(a,b,c,d){I6(a.xR,b,c.br,d.br);}
var U4=G();
function AYl(a,b){return b.eq.dz>=0?0:1;}
var U3=G();
function AUR(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fx;if(b===null)break b;if(b.dz>=0)break b;}c=1;break a;}c=0;}return c;}
function U7(){B.call(this);this.w2=null;}
function ASz(a,b,c,d){I6(a.w2,b,c.br,d.br);}
function ACr(){B.call(this);this.te=null;}
function AOn(a,b){Dx(a.te,b);}
var Gv=G(CE);
var A5V=null;var A5U=null;var A58=null;function Vx(){Vx=Bq(Gv);AZt();}
function AVR(a,b){var c=new Gv();AFc(c,a,b);return c;}
function AFc(a,b,c){Vx();Dy(a,b,c);}
function AZt(){var b;A5V=AVR(C(460),0);b=AVR(C(461),1);A5U=b;A58=I(Gv,[A5V,b]);}
function BQ(){var a=this;B.call(a);a.e=null;a.co=0;a.sk=null;a.iZ=0;}
var A21=0;function B3(a){var b;b=A21;A21=b+1|0;a.sk=Mu(b);}
function LV(a,b){var c;c=A21;A21=c+1|0;a.sk=Mu(c);a.e=b;}
function Iu(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IL(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMD(a,b){a.iZ=b;}
function ALL(a){return a.iZ;}
function AWa(a){return a.e;}
function AXn(a,b){a.e=b;}
function AXl(a,b){return 1;}
function AYx(a){return null;}
function J5(a){var b;a.co=1;b=a.e;if(b!==null){if(!b.co){b=b.f5();if(b!==null){a.e.co=1;a.e=b;}a.e.eS();}else if(b instanceof G7&&b.eX.l$)a.e=b.e;}}
function AI0(){A21=1;}
function O6(){var a=this;B.call(a);a.sW=null;a.sV=null;}
function APf(a){var b,c;b=a.sW;c=a.sV;b.hJ.xd(c);}
function ACg(){var a=this;B.call(a);a.rk=null;a.ri=null;a.rh=0;a.rj=0;}
function ATj(a,b){b=b;Et(a.rk,a.ri,b,a.rh,a.rj);}
function ACh(){var a=this;B.call(a);a.z5=null;a.z4=null;a.z3=0;a.z2=0;}
function AOp(a,b){b=b;Et(a.z5,a.z4,b,a.z3,a.z2);}
function VG(){B.call(this);this.za=null;}
function AUX(a,b){XA(G_(a.za),b,A46,AD3(C(462)));}
function P7(){B.call(this);this.pH=null;}
function AQ4(a,b){var c,d;c=a.pH;d=b.iV;b=new L;N(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(M(b)));}
var WJ=G();
var A5S=null;function A1v(){A1v=Bq(WJ);AKC();}
function AKC(){var b,c;Vx();b=BK((A58.hA()).data.length);c=b.data;A5S=b;c[A5V.fr]=1;c[A5U.fr]=2;}
function CZ(){var a=this;BQ.call(a);a.l$=0;a.dV=0;}
var A54=null;function NG(){NG=Bq(CZ);AN1();}
function A1O(a){var b=new CZ();FW(b,a);return b;}
function FW(a,b){NG();B3(a);a.dV=b;}
function AKX(a,b,c,d){var e,f;e=Js(d,a.dV);KK(d,a.dV,b);f=a.e.c(b,c,d);if(f<0)KK(d,a.dV,e);return f;}
function ARR(a){return a.dV;}
function ALp(a,b){return 0;}
function AN1(){var b;b=new Qt;B3(b);A54=b;}
function Hk(){var a=this;B.call(a);a.bf=null;a.gS=0;a.fg=0;a.yq=0;a.mH=0;a.bi=0;a.o=0;a.vA=0;a.fv=null;a.fc=null;a.x=0;a.jk=0;a.dt=0;a.is=0;a.bQ=null;}
var A59=null;var A52=null;var A53=0;function Q9(a,b){if(b>0&&b<3)a.fg=b;if(b==1){a.o=a.bi;a.fc=a.fv;a.x=a.is;a.is=a.dt;FE(a);}}
function Hr(a){return a.fv===null?0:1;}
function KR(a){return a.fc===null?0:1;}
function Bk(a){FE(a);return a.mH;}
function FM(a){var b;b=a.fv;FE(a);return b;}
function FE(a){var b,c,d,e,f,g,h,$$je;a.mH=a.bi;a.bi=a.o;a.fv=a.fc;a.dt=a.is;a.is=a.x;while(true){b=0;c=a.x>=a.bf.data.length?0:MM(a);a.o=c;a.fc=null;if(a.fg==4){if(c!=92)return;c=a.x;d=a.bf.data;c=c>=d.length?0:d[B9(a)];a.o=c;switch(c){case 69:break;default:a.o=92;a.x=a.jk;return;}a.fg=a.yq;a.o=a.x>(a.bf.data.length-2|0)?0:MM(a);}a:{c=a.o;if(c!=92){e=a.fg;if(e==1)switch(c){case 36:a.o=(-536870876);break a;case 40:if(a.bf.data[a.x]!=63){a.o=(-2147483608);break a;}B9(a);c=a.bf.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.o=(-134217688);B9(a);break b;default:K(Ch(C(21),FT(a),a.x));}a.o=(-67108824);B9(a);}else{switch(c){case 33:break;case 60:B9(a);c=a.bf.data[a.x];e=1;break b;case 61:a.o=(-536870872);B9(a);break b;case 62:a.o=(-33554392);B9(a);break b;default:f=AI2(a);a.o=f;if(f<256){a.gS=f;f=f<<16;a.o=f;a.o=(-1073741784)|f;break b;}f=f&255;a.o=f;a.gS=f;f=f<<16;a.o=f;a.o=(-16777176)|f;break b;}a.o=(-268435416);B9(a);}}if(!e)break;}break a;case 41:a.o=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.bf.data;switch(e>=d.length?42:d[e]){case 43:a.o=c|(-2147483648);B9(a);break a;case 63:a.o=c|(-1073741824);B9(a);break a;default:}a.o=c|(-536870912);break a;case 46:a.o=(-536870866);break a;case 91:a.o=(-536870821);Q9(a,2);break a;case 93:if(e!=2)break a;a.o=(-536870819);break a;case 94:a.o=(-536870818);break a;case 123:a.fc=AIl(a,c);break a;case 124:a.o=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.o=(-536870874);break a;case 45:a.o=(-536870867);break a;case 91:a.o=(-536870821);break a;case 93:a.o
=(-536870819);break a;case 94:a.o=(-536870818);break a;default:}}else{c=a.x>=(a.bf.data.length-2|0)?(-1):MM(a);c:{a.o=c;switch(c){case -1:K(Ch(C(21),FT(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.o
=AGA(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fg!=1)break a;a.o=(-2147483648)|c;break a;case 65:a.o=(-2147483583);break a;case 66:a.o=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Ch(C(21),FT(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.fc=UL(Ev(a.bf,
a.jk,1),0);a.o=0;break a;case 71:a.o=(-2147483577);break a;case 80:case 112:break c;case 81:a.yq=a.fg;a.fg=4;b=1;break a;case 90:a.o=(-2147483558);break a;case 97:a.o=7;break a;case 98:a.o=(-2147483550);break a;case 99:c=a.x;d=a.bf.data;if(c>=(d.length-2|0))K(Ch(C(21),FT(a),a.x));a.o=d[B9(a)]&31;break a;case 101:a.o=27;break a;case 102:a.o=12;break a;case 110:a.o=10;break a;case 114:a.o=13;break a;case 116:a.o=9;break a;case 117:a.o=Si(a,4);break a;case 120:a.o=Si(a,2);break a;case 122:a.o=(-2147483526);break a;default:}break a;}g
=AGf(a);h=0;if(a.o==80)h=1;try{a.fc=UL(g,h);}catch($$e){$$je=EA($$e);if($$je instanceof Kd){K(Ch(C(21),FT(a),a.x));}else{throw $$e;}}a.o=0;}}if(b)continue;else break;}}
function AGf(a){var b,c,d,e,f,g;b=new L;GA(b,10);c=a.x;d=a.bf;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ev(d,B9(a),1);f=new L;N(f);H(H(f,C(463)),b);return M(f);}B9(a);c=0;a:{while(true){g=a.x;d=a.bf.data;if(g>=(d.length-2|0))break;c=d[B9(a)];if(c==125)break a;BM(b,c);}}if(c!=125)K(Ch(C(21),a.bQ,a.x));}if(!b.K)K(Ch(C(21),a.bQ,a.x));f=M(b);if(J(f)==1){b=new L;N(b);H(H(b,C(463)),f);return M(b);}b:{c:{if(J(f)>3){if(LI(f,C(463)))break c;if(LI(f,C(464)))break c;}break b;}f=Ed(f,2);}return f;}
function AIl(a,b){var c,d,e,f,g,$$je;c=new L;GA(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.bf.data;if(f>=g.length)break a;b=g[B9(a)];if(b==125)break a;if(b==44&&d<0)try{d=KC(D7(c),10);AIv(c,0,ADs(c));continue;}catch($$e){$$je=EA($$e);if($$je instanceof Do){break;}else{throw $$e;}}BM(c,b&65535);}K(Ch(C(21),a.bQ,a.x));}if(b!=125)K(Ch(C(21),a.bQ,a.x));if(c.K>0)b:{try{e=KC(D7(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EA($$e);if($$je instanceof Do){}else{throw $$e;}}K(Ch(C(21),a.bQ,a.x));}else if
(d<0)K(Ch(C(21),a.bQ,a.x));if((d|e|(e-d|0))<0)K(Ch(C(21),a.bQ,a.x));b=a.x;g=a.bf.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.o=(-2147483525);B9(a);break c;case 63:a.o=(-1073741701);B9(a);break c;default:}a.o=(-536870789);}c=new OK;c.ff=d;c.fb=e;return c;}
function FT(a){return a.bQ;}
function Dq(a){return !a.bi&&!a.o&&a.x==a.vA&&!Hr(a)?1:0;}
function Lu(b){return b<0?0:1;}
function Fy(a){return !Dq(a)&&!Hr(a)&&Lu(a.bi)?1:0;}
function Qq(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function Ys(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function Vv(b){return b<=56319&&b>=55296?1:0;}
function Rk(b){return b<=57343&&b>=56320?1:0;}
function Si(a,b){var c,d,e,f,$$je;c=new L;GA(c,b);d=a.bf.data.length-2|0;e=0;while(true){f=BI(e,b);if(f>=0)break;if(a.x>=d)break;BM(c,a.bf.data[B9(a)]);e=e+1|0;}if(!f)a:{try{b=KC(D7(c),16);}catch($$e){$$je=EA($$e);if($$je instanceof Do){break a;}else{throw $$e;}}return b;}K(Ch(C(21),a.bQ,a.x));}
function AGA(a){var b,c,d,e,f,g;b=3;c=1;d=a.bf.data;e=d.length-2|0;f=XW(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B9(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=XW(a.bf.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B9(a);c=c+1|0;}}return f;}K(Ch(C(21),a.bQ,a.x));}
function AI2(a){var b,c,d,e;b=1;c=a.gS;a:while(true){d=a.x;e=a.bf.data;if(d>=e.length)K(Ch(C(21),a.bQ,d));b:{c:{switch(e[d]){case 41:B9(a);return c|256;case 45:if(!b)K(Ch(C(21),a.bQ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B9(a);}B9(a);return c;}
function B9(a){var b,c,d,e,f;b=a.x;a.jk=b;if(!(a.gS&4))a.x=b+1|0;else{c=a.bf.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&TY(a.bf.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.bf.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.jk;}
function AH8(b){return A59.I0(b);}
function MM(a){var b,c,d,e;b=a.bf.data[B9(a)];if(CO(b)){c=a.jk+1|0;d=a.bf.data;if(c<d.length){e=d[c];if(Db(e)){B9(a);return EP(b,e);}}}return b;}
function Qp(a){return a.dt;}
function JG(){var a=this;BR.call(a);a.Cw=null;a.B3=null;a.t9=0;}
function Ch(a,b,c){var d=new JG();Km(d,a,b,c);return d;}
function Km(a,b,c,d){X(a);a.t9=(-1);a.Cw=b;a.B3=c;a.t9=d;}
function Qb(){var a=this;B.call(a);a.zM=null;a.zN=0.0;}
function AJ_(a){var b,c;b=a.zM;c=a.zN;b.hJ.nB(c);}
function AA0(){B.call(this);this.yb=null;}
function AUe(a,b){var c,d;c=a.yb;d=0;while(d<b.length){ADm(c,b[d]);d=d+1|0;}}
var AF_=G(0);
function Xp(){var a=this;B.call(a);a.tg=null;a.th=null;a.ti=null;}
function ATQ(a,b){a.tg.i(A0b(a.th,b,a.ti));}
var Ur=G(CZ);
function AKe(a,b,c,d){var e;e=a.dV;BW(d,e,b-Dt(d,e)|0);return a.e.c(b,c,d);}
function AVC(a,b){return 0;}
var ABK=G(CZ);
function AMz(a,b,c,d){return b;}
var Sq=G(CZ);
function ALG(a,b,c,d){if(Dt(d,a.dV)!=b)b=(-1);return b;}
function VS(){CZ.call(this);this.qG=0;}
function AKl(a,b,c,d){var e;e=a.dV;BW(d,e,b-Dt(d,e)|0);a.qG=b;return b;}
function AT0(a,b){return 0;}
var F7=G(CZ);
function AXO(a,b,c,d){if(d.k3!=1&&b!=d.y)return (-1);d.kt=1;KK(d,0,b);return b;}
function B_(){BQ.call(this);this.bO=0;}
function DH(a){B3(a);a.bO=1;}
function AZj(a,b,c,d){var e;if((b+a.b3()|0)>d.y){d.dI=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AWE(a){return a.bO;}
function AQh(a,b){return 1;}
var AHU=G(B_);
function Ho(a){var b=new AHU();AR6(b,a);return b;}
function AR6(a,b){LV(a,b);a.bO=1;a.iZ=1;a.bO=0;}
function AV4(a,b,c){return 0;}
function AN7(a,b,c,d){var e,f,g;e=d.y;f=d.c0;while(true){g=BI(b,e);if(g>0)return (-1);if(g<0&&Db(P(c,b))&&b>f&&CO(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AMq(a,b,c,d,e){var f,g;f=e.y;g=e.c0;while(true){if(c<b)return (-1);if(c<f&&Db(P(d,c))&&c>g&&CO(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AKj(a,b){return 0;}
function B6(){var a=this;BQ.call(a);a.bJ=null;a.eX=null;a.bb=0;}
function A05(a,b){var c=new B6();F9(c,a,b);return c;}
function F9(a,b,c){B3(a);a.bJ=b;a.eX=c;a.bb=c.dV;}
function AOZ(a,b,c,d){var e,f,g,h;if(a.bJ===null)return (-1);e=Gb(d,a.bb);DG(d,a.bb,b);f=a.bJ.m;g=0;while(true){if(g>=f){DG(d,a.bb,e);return (-1);}h=(Bw(a.bJ,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATS(a,b){a.eX.e=b;}
function ARc(a,b){var c;a:{c=a.bJ;if(c!==null){c=B4(c);while(true){if(!B5(c))break a;if(!(B7(c)).bY(b))continue;else return 1;}}}return 0;}
function AUF(a,b){return Js(b,a.bb)>=0&&Gb(b,a.bb)==Js(b,a.bb)?0:1;}
function AMk(a){var b,c,d,e;a.co=1;b=a.eX;if(b!==null&&!b.co)J5(b);a:{b=a.bJ;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bw(a.bJ,d);e=b.f5();if(e===null)e=b;else{b.co=1;EJ(a.bJ,d);Ui(a.bJ,d,e);}if(!e.co)e.eS();d=d+1|0;}}}if(a.e!==null)J5(a);}
var JW=G(B6);
function ATv(a,b,c,d){var e,f,g,h;e=Dt(d,a.bb);BW(d,a.bb,b);f=a.bJ.m;g=0;while(true){if(g>=f){BW(d,a.bb,e);return (-1);}h=(Bw(a.bJ,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AU7(a,b){return !Dt(b,a.bb)?0:1;}
var D1=G(JW);
function AM9(a,b,c,d){var e,f,g;e=Dt(d,a.bb);BW(d,a.bb,b);f=a.bJ.m;g=0;while(g<f){if((Bw(a.bJ,g)).c(b,c,d)>=0)return a.e.c(a.eX.qG,c,d);g=g+1|0;}BW(d,a.bb,e);return (-1);}
function AUO(a,b){a.e=b;}
var Ol=G(D1);
function ATN(a,b,c,d){var e,f;e=a.bJ.m;f=0;while(f<e){if((Bw(a.bJ,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AXt(a,b){return 0;}
var ZG=G(D1);
function ALj(a,b,c,d){var e,f;e=a.bJ.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bJ,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AWL(a,b){return 0;}
var T1=G(D1);
function AMf(a,b,c,d){var e,f,g,h;e=a.bJ.m;f=d.kA?0:d.c0;a:{g=a.e.c(b,c,d);if(g>=0){BW(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((Bw(a.bJ,h)).cy(f,b,c,d)>=0){BW(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function AZN(a,b){return 0;}
var WC=G(D1);
function AJK(a,b,c,d){var e,f;e=a.bJ.m;BW(d,a.bb,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bJ,f)).cy(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AVp(a,b){return 0;}
function G7(){B6.call(this);this.dc=null;}
function A1u(a,b){var c=new G7();AD8(c,a,b);return c;}
function AD8(a,b,c){B3(a);a.dc=b;a.eX=c;a.bb=c.dV;}
function AJ7(a,b,c,d){var e,f;e=Gb(d,a.bb);DG(d,a.bb,b);f=a.dc.c(b,c,d);if(f>=0)return f;DG(d,a.bb,e);return (-1);}
function ARA(a,b,c,d){var e;e=a.dc.cr(b,c,d);if(e>=0)DG(d,a.bb,e);return e;}
function AVG(a,b,c,d,e){var f;f=a.dc.cy(b,c,d,e);if(f>=0)DG(e,a.bb,f);return f;}
function AQ8(a,b){return a.dc.bY(b);}
function ATV(a){var b;b=new OQ;AD8(b,a.dc,a.eX);a.e=b;return b;}
function AYB(a){var b;a.co=1;b=a.eX;if(b!==null&&!b.co)J5(b);b=a.dc;if(b!==null&&!b.co){b=b.f5();if(b!==null){a.dc.co=1;a.dc=b;}a.dc.eS();}}
var Hn=G();
function W(){var a=this;Hn.call(a);a.bg=0;a.cn=0;a.N=null;a.k_=null;a.l1=null;a.O=0;}
var A5$=null;function Q5(){Q5=Bq(W);AMR();}
function By(a){var b;Q5();b=new AAP;b.D=BK(64);a.N=b;}
function ALm(a){return null;}
function AKH(a){return a.N;}
function AF3(a){var b,c,d,e,f;if(!a.cn)b=HY(a.N,0)>=2048?0:1;else{a:{c=a.N;b=0;d=c.bu;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=Jg(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Jg(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function APg(a){return a.O;}
function AWw(a){return a;}
function ADa(a){var b,c;if(a.l1===null){b=a.fs();c=new ZW;c.C0=a;c.q7=b;By(c);a.l1=c;EO(c,a.cn);}return a.l1;}
function Ik(a){var b,c;if(a.k_===null){b=a.fs();c=new ZV;c.Cz=a;c.xP=b;c.yD=a;By(c);a.k_=c;EO(c,a.bg);a.k_.O=a.O;}return a.k_;}
function AYs(a){return 0;}
function EO(a,b){var c;c=a.bg;if(c^b){a.bg=c?0:1;a.cn=a.cn?0:1;}if(!a.O)a.O=1;return a;}
function AOd(a){return a.bg;}
function Lo(b,c){Q5();return b.p(c);}
function Jf(b,c){var d,e;Q5();if(b.dC()!==null&&c.dC()!==null){b=b.dC();c=c.dC();d=Bc(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function UL(b,c){var d,e,f;Q5();d=0;while(true){AVn();e=A5_.data;if(d>=e.length){f=new Kd;Bn(f,C(21));f.Dp=C(21);f.C7=b;K(f);}e=e[d].data;if(Bm(b,e[0]))break;d=d+1|0;}return AHl(e[1],c);}
function AMR(){var b;b=new HK;AVn();A5$=b;}
function ADW(){var a=this;W.call(a);a.nJ=0;a.qE=0;a.g_=0;a.m$=0;a.ec=0;a.fY=0;a.I=null;a.bG=null;}
function Du(){var a=new ADW();AZy(a);return a;}
function AXB(a,b){var c=new ADW();AMC(c,a,b);return c;}
function AZy(a){By(a);a.I=AZQ();}
function AMC(a,b,c){By(a);a.I=AZQ();a.nJ=b;a.qE=c;}
function CF(a,b){a:{if(a.nJ){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ec){NS(a.I,In(b&65535));break a;}MF(a.I,In(b&65535));break a;}if(a.qE&&b>128){a.g_=1;b=Hd(Hb(b));}}}if(!(!Vv(b)&&!Rk(b))){if(a.m$)NS(a.N,b-55296|0);else MF(a.N,b-55296|0);}if(a.ec)NS(a.I,b);else MF(a.I,b);if(!a.O&&Np(b))a.O=1;return a;}
function AI9(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(a.m$){if(!b.cn)Gr(a.N,b.fs());else Dk(a.N,b.fs());}else if(!b.cn)Gm(a.N,b.fs());else{FZ(a.N,b.fs());Dk(a.N,b.fs());a.cn=a.cn?0:1;a.m$=1;}if(!a.fY&&b.dC()!==null){if(a.ec){if(!b.bg)Gr(a.I,b.dC());else Dk(a.I,b.dC());}else if(!b.bg)Gm(a.I,b.dC());else{FZ(a.I,b.dC());Dk(a.I,b.dC());a.bg=a.bg?0:1;a.ec=1;}}else{c=a.bg;d=a.bG;if(d!==null){if(!c){e=new QX;e.AT=a;e.zf=c;e.yn=d;e.x$=b;By(e);a.bG=e;}else{e=new QY;e.Dy=a;e.uY=c;e.uy=d;e.tK=b;By(e);a.bG=e;}}else{if(c&&!a.ec
&&Nt(a.I)){d=new QU;d.B2=a;d.uK=b;By(d);a.bG=d;}else if(!c){d=new QS;d.mQ=a;d.lD=c;d.r7=b;By(d);a.bG=d;}else{d=new QT;d.nX=a;d.lN=c;d.ye=b;By(d);a.bG=d;}a.fY=1;}}return a;}
function B8(a,b,c){var d,e,f,g,h;if(b>c){d=new BR;X(d);K(d);}a:{b:{if(!a.nJ){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CF(a,b);b=b+1|0;}}if(!a.ec)IR(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BE;X(d);K(d);}e=d.bu;if(b<e){f=Bc(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(I9(d,b)|IF(d,f));}else{h=d.D.data;h[g]=h[g]&I9(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IF(d,f);}}HN(d);}}}}return a;}
function ACF(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(b.g_)a.g_=1;c=a.cn;if(!(c^b.cn)){if(!c)Gm(a.N,b.N);else Dk(a.N,b.N);}else if(c)Gr(a.N,b.N);else{FZ(a.N,b.N);Dk(a.N,b.N);a.cn=1;}if(!a.fY&&C4(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)Gm(a.I,C4(b));else Dk(a.I,C4(b));}else if(c)Gr(a.I,C4(b));else{FZ(a.I,C4(b));Dk(a.I,C4(b));a.bg=1;}}else{c=a.bg;d=a.bG;if(d!==null){if(!c){e=new QI;e.AE=a;e.xa=c;e.yd=d;e.yW=b;By(e);a.bG=e;}else{e=new RB;e.A2=a;e.yP=c;e.p7=d;e.qJ=b;By(e);a.bG=e;}}else{if(!a.ec&&Nt(a.I)){if(!c){d=new QV;d.Dz
=a;d.tr=b;By(d);a.bG=d;}else{d=new QW;d.A6=a;d.yB=b;By(d);a.bG=d;}}else if(!c){d=new QZ;d.xg=a;d.vd=b;d.uC=c;By(d);a.bG=d;}else{d=new Q0;d.vC=a;d.vU=b;d.wa=c;By(d);a.bG=d;}a.fY=1;}}}
function AAu(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(b.g_)a.g_=1;c=a.cn;if(!(c^b.cn)){if(!c)Dk(a.N,b.N);else Gm(a.N,b.N);}else if(!c)Gr(a.N,b.N);else{FZ(a.N,b.N);Dk(a.N,b.N);a.cn=0;}if(!a.fY&&C4(b)!==null){c=a.bg;if(!(c^b.bg)){if(!c)Dk(a.I,C4(b));else Gm(a.I,C4(b));}else if(!c)Gr(a.I,C4(b));else{FZ(a.I,C4(b));Dk(a.I,C4(b));a.bg=0;}}else{c=a.bg;d=a.bG;if(d!==null){if(!c){e=new QK;e.AS=a;e.xk=c;e.q4=d;e.uT=b;By(e);a.bG=e;}else{e=new QL;e.Bb=a;e.wv=c;e.pK=d;e.w$=b;By(e);a.bG=e;}}else{if(!a.ec&&Nt(a.I)){if(!c){d=new QG;d.A7
=a;d.sR=b;By(d);a.bG=d;}else{d=new QH;d.Dv=a;d.s0=b;By(d);a.bG=d;}}else if(!c){d=new QM;d.Ad=a;d.zc=b;d.vK=c;By(d);a.bG=d;}else{d=new QF;d.vI=a;d.wF=b;d.uZ=c;By(d);a.bG=d;}a.fY=1;}}}
function C9(a,b){var c;c=a.bG;if(c!==null)return a.bg^c.p(b);return a.bg^DA(a.I,b);}
function C4(a){if(!a.fY)return a.I;return null;}
function AN0(a){return a.N;}
function AW8(a){var b,c;if(a.bG!==null)return a;b=C4(a);c=new QJ;c.Ax=a;c.j8=b;By(c);return EO(c,a.bg);}
function ASF(a){var b,c,d;b=new L;N(b);c=HY(a.I,0);while(c>=0){Jj(b,G4(c));BM(b,124);c=HY(a.I,c+1|0);}d=b.K;if(d>0)ZJ(b,d-1|0);return M(b);}
function AOh(a){return a.g_;}
function Kd(){var a=this;Bt.call(a);a.Dp=null;a.C7=null;}
function Ek(){BQ.call(this);this.M=null;}
function Dn(a,b,c,d){LV(a,c);a.M=b;a.iZ=d;}
function AZx(a){return a.M;}
function AVH(a,b){return !a.M.bY(b)&&!a.e.bY(b)?0:1;}
function AXD(a,b){return 1;}
function AR2(a){var b;a.co=1;b=a.e;if(b!==null&&!b.co){b=b.f5();if(b!==null){a.e.co=1;a.e=b;}a.e.eS();}b=a.M;if(b!==null){if(!b.co){b=b.f5();if(b!==null){a.M.co=1;a.M=b;}a.M.eS();}else if(b instanceof G7&&b.eX.l$)a.M=b.e;}}
function C$(){Ek.call(this);this.bc=null;}
function A1z(a,b,c){var d=new C$();Fk(d,a,b,c);return d;}
function Fk(a,b,c,d){Dn(a,b,c,d);a.bc=b;}
function AJM(a,b,c,d){var e,f;e=0;a:{while((b+a.bc.b3()|0)<=d.y){f=a.bc.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.bc.b3()|0;e=e+(-1)|0;}return f;}
function FG(){C$.call(this);this.k2=null;}
function A0B(a,b,c,d){var e=new FG();UU(e,a,b,c,d);return e;}
function UU(a,b,c,d,e){Fk(a,c,d,e);a.k2=b;}
function AKZ(a,b,c,d){var e,f,g,h,i;e=a.k2;f=e.ff;g=e.fb;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bc.b3()|0)>d.y)break a;i=a.bc.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.bc.b3()|0;h=h+(-1)|0;}return i;}if((b+a.bc.b3()|0)>d.y){d.dI=1;return (-1);}i=a.bc.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C0=G(Ek);
function AJ6(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var EW=G(C$);
function ARJ(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AZT(a,b){a.e=b;a.M.R(b);}
var ZX=G(C$);
function AY_(a,b,c,d){while((b+a.bc.b3()|0)<=d.y&&a.bc.bz(b,c)>0){b=b+a.bc.b3()|0;}return a.e.c(b,c,d);}
function ASA(a,b,c,d){var e,f,g;e=a.e.cr(b,c,d);if(e<0)return (-1);f=e-a.bc.b3()|0;while(f>=b&&a.bc.bz(f,c)>0){g=f-a.bc.b3()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.n8=null;a.mJ=null;}
function AHl(a,b){if(!b&&a.n8===null)a.n8=a.F();else if(b&&a.mJ===null)a.mJ=EO(a.F(),1);if(b)return a.mJ;return a.n8;}
var Do=G(BR);
function OK(){var a=this;Hn.call(a);a.ff=0;a.fb=0;}
function ASK(a){var b,c,d,e,f;b=a.ff;c=a.fb;d=c!=2147483647?Mu(c):C(21);e=new L;N(e);BM(e,123);f=U(e,b);BM(f,44);BM(H(f,d),125);return M(e);}
var Qt=G(BQ);
function AQJ(a,b,c,d){return b;}
function ATR(a,b){return 0;}
function AAP(){var a=this;B.call(a);a.D=null;a.bu=0;}
function AZQ(){var a=new AAP();AL4(a);return a;}
function AL4(a){a.D=BK(0);}
function MF(a,b){var c,d;c=b/32|0;if(b>=a.bu){Jm(a,c+1|0);a.bu=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IR(a,b,c){var d,e,f,g,h;d=BI(b,c);if(d>0){e=new BE;X(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bu){Jm(a,f+1|0);a.bu=c;}if(d==f){g=a.D.data;g[d]=g[d]|IF(a,b)&I9(a,c);}else{g=a.D.data;g[d]=g[d]|IF(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|I9(a,c);}}}
function IF(a,b){return (-1)<<(b%32|0);}
function I9(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function NS(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bu-1|0))HN(a);}}
function DA(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HY(a,b){var c,d,e,f;c=a.bu;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return Jg(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Jg(e[f])|0;f=f+1|0;}return (-1);}
function Jm(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=JV(a.D,c);}
function HN(a){var b,c,d;b=(a.bu+31|0)/32|0;a.bu=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=PN(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bu=a.bu-32|0;}a.bu=a.bu-d|0;}}
function Dk(a,b){var c,d,e,f;c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bu=Bc(a.bu,b.bu);HN(a);}
function Gr(a,b){var c,d,e;c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}HN(a);}
function Gm(a,b){var c,d,e;c=Bd(a.bu,b.bu);a.bu=c;Jm(a,(c+31|0)/32|0);c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function FZ(a,b){var c,d,e;c=Bd(a.bu,b.bu);a.bu=c;Jm(a,(c+31|0)/32|0);c=Bc(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}HN(a);}
function Nt(a){return a.bu?0:1;}
function Oy(){var a=this;B6.call(a);a.s6=null;a.Aw=0;}
function Tb(){var a=this;B6.call(a);a.oC=null;a.nZ=null;}
function AGN(a,b){var c=new Tb();AIS(c,a,b);return c;}
function AIS(a,b,c){B3(a);a.oC=b;a.nZ=c;}
function AKT(a,b,c,d){var e,f,g,h,i;e=a.oC.c(b,c,d);if(e<0)a:{f=a.nZ;g=d.c0;e=d.y;h=b+1|0;e=BI(h,e);if(e>0){d.dI=1;e=(-1);}else{i=P(c,b);if(!f.s6.p(i))e=(-1);else{if(CO(i)){if(e<0&&Db(P(c,h))){e=(-1);break a;}}else if(Db(i)&&b>g&&CO(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ATt(a,b){a.e=b;a.nZ.e=b;a.oC.R(b);}
function ALP(a,b){return 1;}
function ALl(a,b){return 1;}
function DM(){var a=this;B6.call(a);a.d2=null;a.BT=0;}
function AQF(a){var b=new DM();Xz(b,a);return b;}
function Xz(a,b){B3(a);a.d2=b.kK();a.BT=b.bg;}
function ANP(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.p(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(H9(g,f)&&a.p(EP(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOx(a,b){return a.d2.p(b);}
function AKO(a,b){if(b instanceof D9)return Lo(a.d2,b.gt);if(b instanceof EI)return Lo(a.d2,b.dB);if(b instanceof DM)return Jf(a.d2,b.d2);if(!(b instanceof Ex))return 1;return Jf(a.d2,b.fJ);}
function AQu(a){return a.d2;}
function AWl(a,b){a.e=b;}
function AN4(a,b){return 1;}
var J$=G(DM);
function AQi(a,b){return a.d2.p(Hd(Hb(b)));}
function ADK(){var a=this;B_.call(a);a.t1=null;a.Bt=0;}
function APi(a){var b=new ADK();ASW(b,a);return b;}
function ASW(a,b){DH(a);a.t1=b.kK();a.Bt=b.bg;}
function AQK(a,b,c){return !a.t1.p(Ft(EV(P(c,b))))?(-1):1;}
function Ex(){var a=this;B_.call(a);a.fJ=null;a.Cf=0;}
function AWX(a){var b=new Ex();AUm(b,a);return b;}
function AUm(a,b){DH(a);a.fJ=b.kK();a.Cf=b.bg;}
function NZ(a,b,c){return !a.fJ.p(P(c,b))?(-1):1;}
function ATU(a,b){if(b instanceof EI)return Lo(a.fJ,b.dB);if(b instanceof Ex)return Jf(a.fJ,b.fJ);if(!(b instanceof DM)){if(!(b instanceof D9))return 1;return 0;}return Jf(a.fJ,b.d2);}
function Q6(){var a=this;B6.call(a);a.hB=null;a.om=null;a.k0=0;}
function AXd(a,b){var c=new Q6();AJ8(c,a,b);return c;}
function AJ8(a,b,c){B3(a);a.hB=b;a.k0=c;}
function ARH(a,b){a.e=b;}
function Tn(a){if(a.om===null)a.om=Gt(a.hB);return a.om;}
function AJB(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BK(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DD([k,l]):DD([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.k0;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.hB.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.k0==3){k=f[0];m=a.hB.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.k0==2){b=f[0];m=a.hB.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ALB(a,b){return b instanceof Q6&&!Bm(Tn(b),Tn(a))?0:1;}
function AXb(a,b){return 1;}
function EI(){B_.call(this);this.dB=0;}
function AEf(a){var b=new EI();AUs(b,a);return b;}
function AUs(a,b){DH(a);a.dB=b;}
function AQp(a){return 1;}
function APc(a,b,c){return a.dB!=P(c,b)?(-1):1;}
function ANK(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Iu(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=Jd(c,a.dB,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AQy(a,b,c,d,e){var f;if(!(d instanceof BC))return IL(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Ic(d,a.dB,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AW2(a,b){if(b instanceof EI)return b.dB!=a.dB?0:1;if(!(b instanceof Ex)){if(b instanceof DM)return b.p(a.dB);if(!(b instanceof D9))return 1;return 0;}return NZ(b,0,AAQ(a.dB))<=0?0:1;}
function AIz(){B_.call(this);this.pt=0;}
function AUS(a){var b=new AIz();ASv(b,a);return b;}
function ASv(a,b){DH(a);a.pt=Ft(EV(b));}
function AJq(a,b,c){return a.pt!=Ft(EV(P(c,b)))?(-1):1;}
function ACH(){var a=this;B_.call(a);a.y2=0;a.qX=0;}
function AMb(a){var b=new ACH();AVi(b,a);return b;}
function AVi(a,b){DH(a);a.y2=b;a.qX=In(b);}
function AJV(a,b,c){return a.y2!=P(c,b)&&a.qX!=P(c,b)?(-1):1;}
function FQ(){var a=this;B6.call(a);a.iL=0;a.mx=null;a.lG=null;a.lx=0;}
function A2q(a,b){var c=new FQ();Qd(c,a,b);return c;}
function Qd(a,b,c){B3(a);a.iL=1;a.lG=b;a.lx=c;}
function AYA(a,b){a.e=b;}
function ATu(a,b,c,d){var e,f,g,h,i,j,k,l;e=BK(4);f=d.y;if(b>=f)return (-1);g=LE(a,b,c,f);h=b+a.iL|0;i=AH8(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DB(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LE(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AH8(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.iL|0;if(h>=f){b=k;break a;}g=LE(a,h,c,f);b=k;}}}if(b!=a.lx)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.lG.data[g])break;g=g+1|0;}return (-1);}
function AAs(a){var b,c;if(a.mx===null){b=new L;N(b);c=0;while(c<a.lx){Jj(b,G4(a.lG.data[c]));c=c+1|0;}a.mx=M(b);}return a.mx;}
function LE(a,b,c,d){var e,f,g;a.iL=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(H9(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CO(g[0])&&Db(g[1])?EP(g[0],g[1]):g[0];a.iL=2;}}return e;}
function AQM(a,b){return b instanceof FQ&&!Bm(AAs(b),AAs(a))?0:1;}
function AUP(a,b){return 1;}
var ABo=G(FQ);
var WU=G(FQ);
var ACu=G(C0);
function AMH(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Sg=G(C0);
function ASn(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gp=G(C0);
function AWi(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AXU(a,b){a.e=b;a.M.R(b);}
var RP=G(Gp);
function AQs(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function ASO(a,b){a.e=b;}
function FO(){var a=this;C0.call(a);a.gI=null;a.dL=0;}
function A6a(a,b,c,d,e){var f=new FO();J8(f,a,b,c,d,e);return f;}
function J8(a,b,c,d,e,f){Dn(a,c,d,e);a.gI=b;a.dL=f;}
function AZJ(a,b,c,d){var e,f;e=OD(d,a.dL);if(!a.M.L(d))return a.e.c(b,c,d);if(e>=a.gI.fb)return a.e.c(b,c,d);f=a.dL;e=e+1|0;Ew(d,f,e);f=a.M.c(b,c,d);if(f>=0){Ew(d,a.dL,0);return f;}f=a.dL;e=e+(-1)|0;Ew(d,f,e);if(e>=a.gI.ff)return a.e.c(b,c,d);Ew(d,a.dL,0);return (-1);}
var OY=G(FO);
function APL(a,b,c,d){var e,f,g;e=0;f=a.gI.fb;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gI.ff)return (-1);return a.e.c(b,c,d);}
var Uj=G(C0);
function AYK(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Tm=G(Gp);
function ALS(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var X4=G(FO);
function AKv(a,b,c,d){var e,f,g;e=OD(d,a.dL);if(!a.M.L(d))return a.e.c(b,c,d);f=a.gI;if(e>=f.fb){Ew(d,a.dL,0);return a.e.c(b,c,d);}if(e<f.ff){Ew(d,a.dL,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){Ew(d,a.dL,0);return g;}Ew(d,a.dL,e+1|0);g=a.M.c(b,c,d);}return g;}
var Uk=G(Ek);
function AZs(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cy(b,e,c,d);return a.e.c(b,c,d);}
function AWz(a,b,c,d){var e;e=d.y;if(a.e.cy(b,e,c,d)>=0)return b;return (-1);}
function QE(){Ek.call(this);this.mG=null;}
function ATW(a,b,c,d){var e,f;e=d.y;f=X6(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cy(b,e,c,d);return a.e.c(b,c,d);}
function AJF(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cr(b,c,d);if(f<0)return (-1);g=X6(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cy(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.mG.iU(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function X6(a,b,c,d){while(true){if(b>=c)return (-1);if(a.mG.iU(P(d,b)))break;b=b+1|0;}return b;}
var Fe=G();
var A6b=null;var A6c=null;function RS(b){var c;if(!(b&1)){c=A6c;if(c!==null)return c;c=new YA;A6c=c;return c;}c=A6b;if(c!==null)return c;c=new Yz;A6b=c;return c;}
var ACv=G(C$);
function AKw(a,b,c,d){var e;a:{while(true){if((b+a.bc.b3()|0)>d.y)break a;e=a.bc.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var ZT=G(EW);
function ASk(a,b,c,d){var e;if((b+a.bc.b3()|0)<=d.y){e=a.bc.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Rv=G(FG);
function AVK(a,b,c,d){var e,f,g,h,i;e=a.k2;f=e.ff;g=e.fb;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bc.b3()|0)>d.y)break a;i=a.bc.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.bc.b3()|0)>d.y){d.dI=1;return (-1);}i=a.bc.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Th=G(C$);
function ATP(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.bc.b3()|0)<=d.y){e=a.bc.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var Xc=G(EW);
function AKL(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var T2=G(FG);
function AV8(a,b,c,d){var e,f,g,h,i,j;e=a.k2;f=e.ff;g=e.fb;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.bc.b3()|0)<=d.y){i=a.bc.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bc.b3()|0)>d.y){d.dI=1;return (-1);}j=a.bc.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LB=G(BQ);
function ARa(a,b,c,d){if(b&&!(d.f1&&b==d.c0))return (-1);return a.e.c(b,c,d);}
function AP2(a,b){return 0;}
function AEr(){BQ.call(this);this.yp=0;}
function AWW(a){var b=new AEr();AQl(b,a);return b;}
function AQl(a,b){B3(a);a.yp=b;}
function ALg(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kA?0:d.c0;return (e!=32&&!Tr(a,e,b,g,c)?0:1)^(f!=32&&!Tr(a,f,b-1|0,g,c)?0:1)^a.yp?(-1):a.e.c(b,c,d);}
function ALx(a,b){return 0;}
function Tr(a,b,c,d,e){var f;if(!KA(b)&&b!=95){a:{if(CA(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KA(f))return 0;if(CA(f)!=6)return 1;}}return 1;}return 0;}
var Qz=G(BQ);
function AQk(a,b,c,d){if(b!=d.i4)return (-1);return a.e.c(b,c,d);}
function AZC(a,b){return 0;}
function AAW(){BQ.call(this);this.gT=0;}
function A1S(a){var b=new AAW();AHV(b,a);return b;}
function AHV(a,b){B3(a);a.gT=b;}
function AUw(a,b,c,d){var e,f,g;e=!d.f1?J(c):d.y;if(b>=e){BW(d,a.gT,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BW(d,a.gT,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BW(d,a.gT,0);return a.e.c(b,c,d);}
function AMt(a,b){var c;c=!Dt(b,a.gT)?0:1;BW(b,a.gT,(-1));return c;}
var AAi=G(BQ);
function ATo(a,b,c,d){if(b<(d.kA?J(c):d.y))return (-1);d.dI=1;d.CJ=1;return a.e.c(b,c,d);}
function AJn(a,b){return 0;}
function Pe(){BQ.call(this);this.u6=null;}
function AMi(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.f1&&b==d.c0)break a;if(a.u6.wz(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AON(a,b){return 0;}
var AIg=G(B6);
function A2b(){var a=new AIg();AS9(a);return a;}
function AS9(a){B3(a);}
function AYU(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dI=1;return (-1);}g=P(c,b);if(CO(g)){h=b+2|0;if(h<=e&&H9(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ALD(a,b){a.e=b;}
function ASX(a){return (-2147483602);}
function ALC(a,b){return 1;}
function ADU(){B6.call(this);this.ni=null;}
function A1J(a){var b=new ADU();AMr(b,a);return b;}
function AMr(a,b){B3(a);a.ni=b;}
function ATd(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dI=1;return (-1);}g=P(c,b);if(CO(g)){b=b+2|0;if(b<=e){h=P(c,f);if(H9(g,h))return a.ni.iU(EP(g,h))?(-1):a.e.c(b,c,d);}}return a.ni.iU(g)?(-1):a.e.c(f,c,d);}
function AVx(a,b){a.e=b;}
function AJh(a){return (-2147483602);}
function AZg(a,b){return 1;}
function AH5(){BQ.call(this);this.iA=0;}
function A0_(a){var b=new AH5();AOJ(b,a);return b;}
function AOJ(a,b){B3(a);a.iA=b;}
function AQT(a,b,c,d){var e;e=!d.f1?J(c):d.y;if(b>=e){BW(d,a.iA,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BW(d,a.iA,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AOI(a,b){var c;c=!Dt(b,a.iA)?0:1;BW(b,a.iA,(-1));return c;}
function AF9(){BQ.call(this);this.iJ=0;}
function A0R(a){var b=new AF9();APj(b,a);return b;}
function APj(a,b){B3(a);a.iJ=b;}
function ATl(a,b,c,d){if((!d.f1?J(c)-b|0:d.y-b|0)<=0){BW(d,a.iJ,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BW(d,a.iJ,1);return a.e.c(b+1|0,c,d);}
function AOt(a,b){var c;c=!Dt(b,a.iJ)?0:1;BW(b,a.iJ,(-1));return c;}
function ACE(){BQ.call(this);this.gf=0;}
function A0a(a){var b=new ACE();AZM(b,a);return b;}
function AZM(a,b){B3(a);a.gf=b;}
function APP(a,b,c,d){var e,f,g;e=!d.f1?J(c)-b|0:d.y-b|0;if(!e){BW(d,a.gf,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BW(d,a.gf,0);return a.e.c(b,c,d);case 13:if(g!=10){BW(d,a.gf,0);return a.e.c(b,c,d);}BW(d,a.gf,0);return a.e.c(b,c,d);default:}return (-1);}
function AMx(a,b){var c;c=!Dt(b,a.gf)?0:1;BW(b,a.gf,(-1));return c;}
function HL(){var a=this;B6.call(a);a.qy=0;a.hw=0;}
function A2k(a,b){var c=new HL();Ri(c,a,b);return c;}
function Ri(a,b,c){B3(a);a.qy=b;a.hw=c;}
function AKD(a,b,c,d){var e,f,g,h;e=GK(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BW(d,a.hw,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&In(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AUL(a,b){a.e=b;}
function GK(a,b){var c,d;c=a.qy;d=Gb(b,c);c=Js(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nn)?Cr(b.nn,d,c):null;}
function AU$(a,b){var c;c=!Dt(b,a.hw)?0:1;BW(b,a.hw,(-1));return c;}
var AIa=G(HL);
function A0f(a,b){var c=new AIa();AXF(c,a,b);return c;}
function AXF(a,b,c){Ri(a,b,c);}
function AMF(a,b,c,d){var e,f;e=GK(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!Xy(c,e,b)?(-1):J(e);if(f<0)return (-1);BW(d,a.hw,f);return a.e.c(b+f|0,c,d);}return (-1);}
function AXq(a,b,c,d){var e,f;e=GK(a,d);f=d.c0;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=Sh(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AKf(a,b,c,d,e){var f,g;f=GK(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Sv(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AR_(a,b){return 1;}
var AE$=G(HL);
function A0S(a,b){var c=new AE$();AOE(c,a,b);return c;}
function AOE(a,b,c){Ri(a,b,c);}
function ARt(a,b,c,d){var e,f;e=GK(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BW(d,a.hw,J(e));return a.e.c(b+J(e)|0,c,d);}if(Ft(EV(P(e,f)))!=Ft(EV(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Qs=G(GU);
function AOk(a,b,c,d,e){ON(a,b,c,d,e);return a;}
function ALo(a,b,c,d){ABc(a,b,c,d);return a;}
function AL3(a,b){KJ(a,b);}
function AWD(a,b,c){ABs(a,b,c);return a;}
function Um(){var a=this;B_.call(a);a.cF=null;a.mA=null;a.nw=null;}
function AM5(a,b,c){return !LA(a,c,b)?(-1):a.bO;}
function ALb(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cF,a.bO-1|0);a:{while(true){g=a.bO;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&LA(a,c,b))break;b=b+VF(a.mA,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bO|0,c,d)>=0)break;b=b+1|0;}return b;}
function AOM(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cF,0);g=(J(d)-c|0)-a.bO|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&LA(a,d,c))break;c=c-VF(a.nw,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bO|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function APp(a,b){var c;if(b instanceof EI)return b.dB!=P(a.cF,0)?0:1;if(b instanceof Ex)return NZ(b,0,Cr(a.cF,0,1))<=0?0:1;if(!(b instanceof DM)){if(!(b instanceof D9))return 1;return J(a.cF)>1&&b.gt==EP(P(a.cF,0),P(a.cF,1))?1:0;}a:{b:{b=b;if(!b.p(P(a.cF,0))){if(J(a.cF)<=1)break b;if(!b.p(EP(P(a.cF,0),P(a.cF,1))))break b;}c=1;break a;}c=0;}return c;}
function LA(a,b,c){var d;d=0;while(d<a.bO){if(P(b,d+c|0)!=P(a.cF,d))return 0;d=d+1|0;}return 1;}
function ACD(){B_.call(this);this.kF=null;}
function A2p(a){var b=new ACD();AW4(b,a);return b;}
function AW4(a,b){var c,d,e;DH(a);c=new L;N(c);d=0;while(true){e=BI(d,b.K);if(e>=0){a.kF=M(c);a.bO=c.K;return;}if(d<0)break;if(e>=0)break;BM(c,Ft(EV(b.C.data[d])));d=d+1|0;}b=new BE;X(b);K(b);}
function ARC(a,b,c){var d;d=0;while(true){if(d>=J(a.kF))return J(a.kF);if(P(a.kF,d)!=Ft(EV(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function O4(){B_.call(this);this.iw=null;}
function AVN(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.iw))return J(a.iw);e=P(a.iw,d);f=b+d|0;if(e!=P(c,f)&&In(P(a.iw,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var HK=G();
var A6d=null;var A6e=null;var A5_=null;function AVn(){AVn=Bq(HK);ANv();}
function ANv(){A6d=A12();A6e=A04();A5_=I($rt_arraycls(B),[I(B,[C(465),A2l()]),I(B,[C(466),AZ9()]),I(B,[C(467),A1Z()]),I(B,[C(468),A16()]),I(B,[C(469),A6e]),I(B,[C(470),A1e()]),I(B,[C(471),A01()]),I(B,[C(472),A0i()]),I(B,[C(473),A0e()]),I(B,[C(474),A0o()]),I(B,[C(475),A0D()]),I(B,[C(476),A0m()]),I(B,[C(477),A1y()]),I(B,[C(478),AZ3()]),I(B,[C(479),A13()]),I(B,[C(480),A0C()]),I(B,[C(481),A1c()]),I(B,[C(482),A0A()]),I(B,[C(483),A1d()]),I(B,[C(484),A0r()]),I(B,[C(485),A2a()]),I(B,[C(486),A0t()]),I(B,[C(487),A1i()]),
I(B,[C(488),A1X()]),I(B,[C(489),A1T()]),I(B,[C(490),A17()]),I(B,[C(491),A0q()]),I(B,[C(492),A1H()]),I(B,[C(493),A6d]),I(B,[C(494),A1n()]),I(B,[C(495),A0k()]),I(B,[C(496),A6d]),I(B,[C(497),AZ0()]),I(B,[C(498),A6e]),I(B,[C(499),A0M()]),I(B,[C(500),R(0,127)]),I(B,[C(501),R(128,255)]),I(B,[C(502),R(256,383)]),I(B,[C(503),R(384,591)]),I(B,[C(504),R(592,687)]),I(B,[C(505),R(688,767)]),I(B,[C(506),R(768,879)]),I(B,[C(507),R(880,1023)]),I(B,[C(508),R(1024,1279)]),I(B,[C(509),R(1280,1327)]),I(B,[C(510),R(1328,1423)]),
I(B,[C(511),R(1424,1535)]),I(B,[C(512),R(1536,1791)]),I(B,[C(513),R(1792,1871)]),I(B,[C(514),R(1872,1919)]),I(B,[C(515),R(1920,1983)]),I(B,[C(516),R(2304,2431)]),I(B,[C(517),R(2432,2559)]),I(B,[C(518),R(2560,2687)]),I(B,[C(519),R(2688,2815)]),I(B,[C(520),R(2816,2943)]),I(B,[C(521),R(2944,3071)]),I(B,[C(522),R(3072,3199)]),I(B,[C(523),R(3200,3327)]),I(B,[C(524),R(3328,3455)]),I(B,[C(525),R(3456,3583)]),I(B,[C(526),R(3584,3711)]),I(B,[C(527),R(3712,3839)]),I(B,[C(528),R(3840,4095)]),I(B,[C(529),R(4096,4255)]),
I(B,[C(530),R(4256,4351)]),I(B,[C(531),R(4352,4607)]),I(B,[C(532),R(4608,4991)]),I(B,[C(533),R(4992,5023)]),I(B,[C(534),R(5024,5119)]),I(B,[C(535),R(5120,5759)]),I(B,[C(536),R(5760,5791)]),I(B,[C(537),R(5792,5887)]),I(B,[C(538),R(5888,5919)]),I(B,[C(539),R(5920,5951)]),I(B,[C(540),R(5952,5983)]),I(B,[C(541),R(5984,6015)]),I(B,[C(542),R(6016,6143)]),I(B,[C(543),R(6144,6319)]),I(B,[C(544),R(6400,6479)]),I(B,[C(545),R(6480,6527)]),I(B,[C(546),R(6528,6623)]),I(B,[C(547),R(6624,6655)]),I(B,[C(548),R(6656,6687)]),
I(B,[C(549),R(7424,7551)]),I(B,[C(550),R(7552,7615)]),I(B,[C(551),R(7616,7679)]),I(B,[C(552),R(7680,7935)]),I(B,[C(553),R(7936,8191)]),I(B,[C(554),R(8192,8303)]),I(B,[C(555),R(8304,8351)]),I(B,[C(556),R(8352,8399)]),I(B,[C(557),R(8400,8447)]),I(B,[C(558),R(8448,8527)]),I(B,[C(559),R(8528,8591)]),I(B,[C(560),R(8592,8703)]),I(B,[C(561),R(8704,8959)]),I(B,[C(562),R(8960,9215)]),I(B,[C(563),R(9216,9279)]),I(B,[C(564),R(9280,9311)]),I(B,[C(565),R(9312,9471)]),I(B,[C(566),R(9472,9599)]),I(B,[C(567),R(9600,9631)]),
I(B,[C(568),R(9632,9727)]),I(B,[C(569),R(9728,9983)]),I(B,[C(570),R(9984,10175)]),I(B,[C(571),R(10176,10223)]),I(B,[C(572),R(10224,10239)]),I(B,[C(573),R(10240,10495)]),I(B,[C(574),R(10496,10623)]),I(B,[C(575),R(10624,10751)]),I(B,[C(576),R(10752,11007)]),I(B,[C(577),R(11008,11263)]),I(B,[C(578),R(11264,11359)]),I(B,[C(579),R(11392,11519)]),I(B,[C(580),R(11520,11567)]),I(B,[C(581),R(11568,11647)]),I(B,[C(582),R(11648,11743)]),I(B,[C(583),R(11776,11903)]),I(B,[C(584),R(11904,12031)]),I(B,[C(585),R(12032,12255)]),
I(B,[C(586),R(12272,12287)]),I(B,[C(587),R(12288,12351)]),I(B,[C(588),R(12352,12447)]),I(B,[C(589),R(12448,12543)]),I(B,[C(590),R(12544,12591)]),I(B,[C(591),R(12592,12687)]),I(B,[C(592),R(12688,12703)]),I(B,[C(593),R(12704,12735)]),I(B,[C(594),R(12736,12783)]),I(B,[C(595),R(12784,12799)]),I(B,[C(596),R(12800,13055)]),I(B,[C(597),R(13056,13311)]),I(B,[C(598),R(13312,19893)]),I(B,[C(599),R(19904,19967)]),I(B,[C(600),R(19968,40959)]),I(B,[C(601),R(40960,42127)]),I(B,[C(602),R(42128,42191)]),I(B,[C(603),R(42752,
42783)]),I(B,[C(604),R(43008,43055)]),I(B,[C(605),R(44032,55203)]),I(B,[C(606),R(55296,56191)]),I(B,[C(607),R(56192,56319)]),I(B,[C(608),R(56320,57343)]),I(B,[C(609),R(57344,63743)]),I(B,[C(610),R(63744,64255)]),I(B,[C(611),R(64256,64335)]),I(B,[C(612),R(64336,65023)]),I(B,[C(613),R(65024,65039)]),I(B,[C(614),R(65040,65055)]),I(B,[C(615),R(65056,65071)]),I(B,[C(616),R(65072,65103)]),I(B,[C(617),R(65104,65135)]),I(B,[C(618),R(65136,65279)]),I(B,[C(619),R(65280,65519)]),I(B,[C(620),R(0,1114111)]),I(B,[C(621),
A0n()]),I(B,[C(622),BX(0,1)]),I(B,[C(623),JH(62,1)]),I(B,[C(624),BX(1,1)]),I(B,[C(625),BX(2,1)]),I(B,[C(626),BX(3,0)]),I(B,[C(627),BX(4,0)]),I(B,[C(628),BX(5,1)]),I(B,[C(629),JH(448,1)]),I(B,[C(630),BX(6,1)]),I(B,[C(631),BX(7,0)]),I(B,[C(632),BX(8,1)]),I(B,[C(633),JH(3584,1)]),I(B,[C(634),BX(9,1)]),I(B,[C(635),BX(10,1)]),I(B,[C(636),BX(11,1)]),I(B,[C(637),JH(28672,0)]),I(B,[C(638),BX(12,0)]),I(B,[C(639),BX(13,0)]),I(B,[C(640),BX(14,0)]),I(B,[C(641),A0V(983040,1,1)]),I(B,[C(642),BX(15,0)]),I(B,[C(643),BX(16,
1)]),I(B,[C(644),BX(18,1)]),I(B,[C(645),A09(19,0,1)]),I(B,[C(646),JH(1643118592,1)]),I(B,[C(647),BX(20,0)]),I(B,[C(648),BX(21,0)]),I(B,[C(649),BX(22,0)]),I(B,[C(650),BX(23,0)]),I(B,[C(651),BX(24,1)]),I(B,[C(652),JH(2113929216,1)]),I(B,[C(653),BX(25,1)]),I(B,[C(654),BX(26,0)]),I(B,[C(655),BX(27,0)]),I(B,[C(656),BX(28,1)]),I(B,[C(657),BX(29,0)]),I(B,[C(658),BX(30,0)])]);}
function Oc(){B_.call(this);this.us=0;}
function AVU(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.us!=Hd(Hb(EP(e,d)))?(-1):2;}
function L$(){B6.call(this);this.g9=0;}
function AS7(a){var b=new L$();ALY(b,a);return b;}
function ALY(a,b){B3(a);a.g9=b;}
function ATL(a,b){a.e=b;}
function AMu(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dI=1;return (-1);}f=P(c,b);if(b>d.c0&&CO(P(c,b-1|0)))return (-1);if(a.g9!=f)return (-1);return a.e.c(e,c,d);}
function APm(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Iu(a,b,c,d);e=d.c0;f=d.y;while(true){if(b>=f)return (-1);g=Jd(c,a.g9,b);if(g<0)return (-1);if(g>e&&CO(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function ANb(a,b,c,d,e){var f,g;if(!(d instanceof BC))return IL(a,b,c,d,e);f=e.c0;a:{while(true){if(c<b)return (-1);g=Ic(d,a.g9,c);if(g<0)break a;if(g<b)break a;if(g>f&&CO(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AKd(a,b){if(b instanceof EI)return 0;if(b instanceof Ex)return 0;if(b instanceof DM)return 0;if(b instanceof D9)return 0;if(b instanceof Mq)return 0;if(!(b instanceof L$))return 1;return b.g9!=a.g9?0:1;}
function AWN(a,b){return 1;}
function Mq(){B6.call(this);this.gF=0;}
function APU(a){var b=new Mq();ATf(b,a);return b;}
function ATf(a,b){B3(a);a.gF=b;}
function AL2(a,b){a.e=b;}
function AJL(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BI(f,e);if(g>0){d.dI=1;return (-1);}h=P(c,b);if(g<0&&Db(P(c,f)))return (-1);if(a.gF!=h)return (-1);return a.e.c(f,c,d);}
function AT9(a,b,c,d){var e,f;if(!(c instanceof BC))return Iu(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=Jd(c,a.gF,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Db(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AVL(a,b,c,d,e){var f,g;if(!(d instanceof BC))return IL(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=Ic(d,a.gF,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Db(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AM6(a,b){if(b instanceof EI)return 0;if(b instanceof Ex)return 0;if(b instanceof DM)return 0;if(b instanceof D9)return 0;if(b instanceof L$)return 0;if(!(b instanceof Mq))return 1;return b.gF!=a.gF?0:1;}
function AUj(a,b){return 1;}
function D9(){var a=this;B_.call(a);a.lo=0;a.j2=0;a.gt=0;}
function AU_(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.lo==e&&a.j2==d?2:(-1);}
function ASG(a,b,c,d){var e,f;if(!(c instanceof BC))return Iu(a,b,c,d);e=d.y;while(b<e){b=Jd(c,a.lo,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.j2==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AL1(a,b,c,d,e){var f;if(!(d instanceof BC))return IL(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Ic(d,a.j2,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.lo==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AUU(a,b){if(b instanceof D9)return b.gt!=a.gt?0:1;if(b instanceof DM)return b.p(a.gt);if(b instanceof EI)return 0;if(!(b instanceof Ex))return 1;return 0;}
var Yz=G(Fe);
function AMc(a,b){return b!=10?0:1;}
function AU3(a,b,c){return b!=10?0:1;}
var YA=G(Fe);
function AV9(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AYn(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AG6(){var a=this;B.call(a);a.o9=null;a.lM=null;a.hZ=0;a.zR=0;}
function ASV(a){var b=new AG6();AQj(b,a);return b;}
function AQj(a,b){var c,d;while(true){c=a.hZ;if(b<c)break;a.hZ=c<<1|1;}d=c<<1|1;a.hZ=d;d=d+1|0;a.o9=BK(d);a.lM=BK(d);a.zR=b;}
function T4(a,b,c){var d,e,f,g;d=0;e=a.hZ;f=b&e;while(true){g=a.o9.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.lM.data[f]=c;}
function VF(a,b){var c,d,e,f;c=a.hZ;d=b&c;e=0;while(true){f=a.o9.data[d];if(!f)break;if(f==b)return a.lM.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.zR;}
var AC0=G();
var L6=G(Bf);
function A12(){var a=new L6();APM(a);return a;}
function APM(a){}
function AFi(a){return CF(B8(Du(),9,13),32);}
var K7=G(Bf);
function A04(){var a=new K7();AWI(a);return a;}
function AWI(a){}
function AFZ(a){return B8(Du(),48,57);}
var AGZ=G(Bf);
function A2l(){var a=new AGZ();AO0(a);return a;}
function AO0(a){}
function AVA(a){return B8(Du(),97,122);}
var AHz=G(Bf);
function AZ9(){var a=new AHz();AQn(a);return a;}
function AQn(a){}
function AWP(a){return B8(Du(),65,90);}
var AHC=G(Bf);
function A1Z(){var a=new AHC();ALc(a);return a;}
function ALc(a){}
function ANQ(a){return B8(Du(),0,127);}
var L0=G(Bf);
function A16(){var a=new L0();AMJ(a);return a;}
function AMJ(a){}
function ADY(a){return B8(B8(Du(),97,122),65,90);}
var MC=G(L0);
function A1e(){var a=new MC();APZ(a);return a;}
function APZ(a){}
function AEO(a){return B8(ADY(a),48,57);}
var AI8=G(Bf);
function A01(){var a=new AI8();ASp(a);return a;}
function ASp(a){}
function APk(a){return B8(B8(B8(Du(),33,64),91,96),123,126);}
var NU=G(MC);
function A0i(){var a=new NU();AUE(a);return a;}
function AUE(a){}
function ACB(a){return B8(B8(B8(AEO(a),33,64),91,96),123,126);}
var AFy=G(NU);
function A0e(){var a=new AFy();AWv(a);return a;}
function AWv(a){}
function AR3(a){return CF(ACB(a),32);}
var AFS=G(Bf);
function A0o(){var a=new AFS();AVO(a);return a;}
function AVO(a){}
function AMX(a){return CF(CF(Du(),32),9);}
var AEj=G(Bf);
function A0D(){var a=new AEj();AYc(a);return a;}
function AYc(a){}
function ARY(a){return CF(B8(Du(),0,31),127);}
var AD7=G(Bf);
function A0m(){var a=new AD7();ALw(a);return a;}
function ALw(a){}
function AYr(a){return B8(B8(B8(Du(),48,57),97,102),65,70);}
var AHH=G(Bf);
function A1y(){var a=new AHH();AKY(a);return a;}
function AKY(a){}
function AST(a){var b;b=new V$;b.BS=a;By(b);b.O=1;return b;}
var AJg=G(Bf);
function AZ3(){var a=new AJg();AUY(a);return a;}
function AUY(a){}
function AJC(a){var b;b=new Oq;b.B4=a;By(b);b.O=1;return b;}
var AG7=G(Bf);
function A13(){var a=new AG7();ALf(a);return a;}
function ALf(a){}
function APV(a){var b;b=new UG;b.Bo=a;By(b);return b;}
var AGP=G(Bf);
function A0C(){var a=new AGP();ARZ(a);return a;}
function ARZ(a){}
function AVg(a){var b;b=new UF;b.A9=a;By(b);return b;}
var AHW=G(Bf);
function A1c(){var a=new AHW();AME(a);return a;}
function AME(a){}
function AMU(a){var b;b=new AAw;b.CS=a;By(b);IR(b.N,0,2048);b.O=1;return b;}
var ADg=G(Bf);
function A0A(){var a=new ADg();AL_(a);return a;}
function AL_(a){}
function ANm(a){var b;b=new Rm;b.Cj=a;By(b);b.O=1;return b;}
var ACT=G(Bf);
function A1d(){var a=new ACT();ARz(a);return a;}
function ARz(a){}
function AYk(a){var b;b=new Qo;b.Ds=a;By(b);b.O=1;return b;}
var AHg=G(Bf);
function A0r(){var a=new AHg();ASq(a);return a;}
function ASq(a){}
function AJs(a){var b;b=new TD;b.BU=a;By(b);return b;}
var AHs=G(Bf);
function A2a(){var a=new AHs();APy(a);return a;}
function APy(a){}
function AQX(a){var b;b=new Ok;b.Al=a;By(b);b.O=1;return b;}
var AEH=G(Bf);
function A0t(){var a=new AEH();AKh(a);return a;}
function AKh(a){}
function ANy(a){var b;b=new Oo;b.Cn=a;By(b);b.O=1;return b;}
var AFW=G(Bf);
function A1i(){var a=new AFW();AMe(a);return a;}
function AMe(a){}
function AOS(a){var b;b=new PT;b.CP=a;By(b);b.O=1;return b;}
var AIP=G(Bf);
function A1X(){var a=new AIP();AQ5(a);return a;}
function AQ5(a){}
function AQZ(a){var b;b=new RU;b.C$=a;By(b);b.O=1;return b;}
var AHo=G(Bf);
function A1T(){var a=new AHo();ASJ(a);return a;}
function ASJ(a){}
function AXf(a){var b;b=new R4;b.Br=a;By(b);return b;}
var AE7=G(Bf);
function A17(){var a=new AE7();AMa(a);return a;}
function AMa(a){}
function AUt(a){var b;b=new WO;b.Cu=a;By(b);return b;}
var AEF=G(Bf);
function A0q(){var a=new AEF();AVh(a);return a;}
function AVh(a){}
function ASH(a){var b;b=new Vu;b.At=a;By(b);b.O=1;return b;}
var AJc=G(Bf);
function A1H(){var a=new AJc();APs(a);return a;}
function APs(a){}
function AVs(a){var b;b=new OG;b.DA=a;By(b);b.O=1;return b;}
var Kp=G(Bf);
function A1n(){var a=new Kp();ANH(a);return a;}
function ANH(a){}
function AFT(a){return CF(B8(B8(B8(Du(),97,122),65,90),48,57),95);}
var AH0=G(Kp);
function A0k(){var a=new AH0();APC(a);return a;}
function APC(a){}
function ASu(a){var b;b=EO(AFT(a),1);b.O=1;return b;}
var AFC=G(L6);
function AZ0(){var a=new AFC();AXW(a);return a;}
function AXW(a){}
function AK9(a){var b;b=EO(AFi(a),1);b.O=1;return b;}
var AEz=G(K7);
function A0M(){var a=new AEz();AQI(a);return a;}
function AQI(a){}
function AO9(a){var b;b=EO(AFZ(a),1);b.O=1;return b;}
function AEa(){var a=this;Bf.call(a);a.uc=0;a.u1=0;}
function R(a,b){var c=new AEa();AYh(c,a,b);return c;}
function AYh(a,b,c){a.uc=b;a.u1=c;}
function ARe(a){return B8(Du(),a.uc,a.u1);}
var AEu=G(Bf);
function A0n(){var a=new AEu();AYD(a);return a;}
function AYD(a){}
function AX8(a){return B8(B8(Du(),65279,65279),65520,65533);}
function AFo(){var a=this;Bf.call(a);a.os=0;a.lw=0;a.sl=0;}
function BX(a,b){var c=new AFo();AMw(c,a,b);return c;}
function A09(a,b,c){var d=new AFo();AYj(d,a,b,c);return d;}
function AMw(a,b,c){a.lw=c;a.os=b;}
function AYj(a,b,c,d){a.sl=d;a.lw=c;a.os=b;}
function AOo(a){var b;b=A2g(a.os);if(a.sl)IR(b.N,0,2048);b.O=a.lw;return b;}
function AFz(){var a=this;Bf.call(a);a.or=0;a.lO=0;a.qH=0;}
function JH(a,b){var c=new AFz();ANz(c,a,b);return c;}
function A0V(a,b,c){var d=new AFz();AJu(d,a,b,c);return d;}
function ANz(a,b,c){a.lO=c;a.or=b;}
function AJu(a,b,c,d){a.qH=d;a.lO=c;a.or=b;}
function AJt(a){var b;b=new Uu;AGB(b,a.or);if(a.qH)IR(b.N,0,2048);b.O=a.lO;return b;}
var AEe=G();
var ADH=G();
function AE5(b){var c,d,e,f,g,h,i;c=AVE(FY(b));d=KT(c);e=BK(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+KT(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=OX(c);h=h+1|0;}return e;}
function LJ(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function Ph(){var a=this;B.call(a);a.s4=0;a.vk=0;a.tl=null;}
function AOl(a,b,c){var d=new Ph();AWt(d,a,b,c);return d;}
function AWt(a,b,c,d){a.s4=b;a.vk=c;a.tl=d;}
function AHj(){var a=this;B.call(a);a.rA=null;a.uk=0;}
function AVE(a){var b=new AHj();AM$(b,a);return b;}
function AM$(a,b){a.rA=b;}
var AE4=G();
function KT(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.rA.data;f=b.uk;b.uk=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function OX(b){var c,d;c=KT(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var XP=G(Fp);
function ABv(a){Mv(a);return a.gU;}
var T0=G(Fp);
function ADV(){B.call(this);this.PK=null;}
function Ve(){B.call(this);this.tX=null;}
function AOG(a,b){b.g6=a.tX;}
function T_(){B.call(this);this.ws=null;}
function AMp(a,b){H5(a.ws,b);}
function Qm(){var a=this;B.call(a);a.tC=null;a.tD=null;}
function Yv(){var a=this;B.call(a);a.DD=null;a.kP=null;}
function ANW(a,b){var c;c=a.kP;b=b;a.kP=Rh(!c.o0&&!b.eI?0:1);return 1;}
function Wz(){var a=this;B.call(a);a.C6=null;a.C5=null;a.C4=null;}
function X1(){var a=this;B.call(a);a.Dh=null;a.Di=null;}
function ZW(){var a=this;W.call(a);a.q7=null;a.C0=null;}
function ANY(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cn^DA(a.q7,c):0;}
function ZV(){var a=this;W.call(a);a.xP=null;a.yD=null;a.Cz=null;}
function AJ3(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cn^DA(a.xP,c):0;return a.yD.p(b)&&!d?1:0;}
function QJ(){var a=this;W.call(a);a.j8=null;a.Ax=null;}
function AQ6(a,b){return a.bg^DA(a.j8,b);}
function AOW(a){var b,c,d;b=new L;N(b);c=HY(a.j8,0);while(c>=0){Jj(b,G4(c));BM(b,124);c=HY(a.j8,c+1|0);}d=b.K;if(d>0)ZJ(b,d-1|0);return M(b);}
function QU(){var a=this;W.call(a);a.uK=null;a.B2=null;}
function AVe(a,b){return a.uK.p(b);}
function QS(){var a=this;W.call(a);a.lD=0;a.r7=null;a.mQ=null;}
function AVT(a,b){return !(a.lD^DA(a.mQ.I,b))&&!(a.lD^a.mQ.ec^a.r7.p(b))?0:1;}
function QT(){var a=this;W.call(a);a.lN=0;a.ye=null;a.nX=null;}
function ARB(a,b){return !(a.lN^DA(a.nX.I,b))&&!(a.lN^a.nX.ec^a.ye.p(b))?1:0;}
function QX(){var a=this;W.call(a);a.zf=0;a.yn=null;a.x$=null;a.AT=null;}
function ANs(a,b){return a.zf^(!a.yn.p(b)&&!a.x$.p(b)?0:1);}
function QY(){var a=this;W.call(a);a.uY=0;a.uy=null;a.tK=null;a.Dy=null;}
function AJi(a,b){return a.uY^(!a.uy.p(b)&&!a.tK.p(b)?0:1)?0:1;}
function QV(){var a=this;W.call(a);a.tr=null;a.Dz=null;}
function AO1(a,b){return C9(a.tr,b);}
function QW(){var a=this;W.call(a);a.yB=null;a.A6=null;}
function ARF(a,b){return C9(a.yB,b)?0:1;}
function QZ(){var a=this;W.call(a);a.vd=null;a.uC=0;a.xg=null;}
function AXu(a,b){return !C9(a.vd,b)&&!(a.uC^DA(a.xg.I,b))?0:1;}
function Q0(){var a=this;W.call(a);a.vU=null;a.wa=0;a.vC=null;}
function AMM(a,b){return !C9(a.vU,b)&&!(a.wa^DA(a.vC.I,b))?1:0;}
function QI(){var a=this;W.call(a);a.xa=0;a.yd=null;a.yW=null;a.AE=null;}
function AZX(a,b){return !(a.xa^a.yd.p(b))&&!C9(a.yW,b)?0:1;}
function RB(){var a=this;W.call(a);a.yP=0;a.p7=null;a.qJ=null;a.A2=null;}
function AO7(a,b){return !(a.yP^a.p7.p(b))&&!C9(a.qJ,b)?1:0;}
function QG(){var a=this;W.call(a);a.sR=null;a.A7=null;}
function AML(a,b){return C9(a.sR,b);}
function QH(){var a=this;W.call(a);a.s0=null;a.Dv=null;}
function AOD(a,b){return C9(a.s0,b)?0:1;}
function QM(){var a=this;W.call(a);a.zc=null;a.vK=0;a.Ad=null;}
function AQm(a,b){return C9(a.zc,b)&&a.vK^DA(a.Ad.I,b)?1:0;}
function QF(){var a=this;W.call(a);a.wF=null;a.uZ=0;a.vI=null;}
function AWZ(a,b){return C9(a.wF,b)&&a.uZ^DA(a.vI.I,b)?0:1;}
function QK(){var a=this;W.call(a);a.xk=0;a.q4=null;a.uT=null;a.AS=null;}
function ALr(a,b){return a.xk^a.q4.p(b)&&C9(a.uT,b)?1:0;}
function QL(){var a=this;W.call(a);a.wv=0;a.pK=null;a.w$=null;a.Bb=null;}
function AUh(a,b){return a.wv^a.pK.p(b)&&C9(a.w$,b)?0:1;}
var M9=G(0);
function Vt(){var a=this;B.call(a);a.AX=null;a.yg=null;a.ks=null;a.cJ=null;a.j9=0;a.mE=0;}
function Om(a,b){var c,d,e;c=J(a.ks);if(b>=0&&b<=c){ABG(a.cJ,null,(-1),(-1));d=a.cJ;d.k3=1;d.eN=b;c=d.i4;if(c<0)c=b;d.i4=c;b=a.yg.cr(b,a.ks,d);if(b==(-1))a.cJ.dI=1;if(b>=0){d=a.cJ;if(d.kt){e=d.d5.data;if(e[0]==(-1)){c=d.eN;e[0]=c;e[1]=c;}d.i4=J1(d);return 1;}}a.cJ.eN=(-1);return 0;}d=new BE;Bn(d,Dc(b));K(d);}
function AIO(a){return Rt(a.cJ,0);}
function AEA(a){return UI(a.cJ,0);}
function AC7(a){return a.cJ.kA;}
var C7=G(0);
var A3I=null;var A42=null;var A3K=null;var A3J=null;var A3M=null;var A3L=null;var A3O=null;var A3N=null;var A3Q=null;var A3P=null;var A3R=null;function AHF(){AHF=Bq(C7);AYp();}
function AYp(){A3I=CI(0);A42=Ds(8,8,8);A3K=S(C(659));A3J=Ds(255,255,255);A3M=S(C(660));A3L=S(C(661));A3O=S(C(662));A3N=S(C(663));A3Q=ED(205,205,205,153);A3P=ED(255,255,255,0);A3R=S(C(113));}
function Cv(){CE.call(this);this.nd=null;}
var A6f=null;var A6g=null;var A6h=null;var A6i=null;var A6j=null;var A6k=null;var A6l=null;var A6m=null;var A6n=null;var A6o=null;var A6p=null;var A6q=null;var A6r=null;var A6s=null;var A6t=null;var A3S=null;function AGD(){AGD=Bq(Cv);AY3();}
function DJ(a,b,c){var d=new Cv();TT(d,a,b,c);return d;}
function AYI(a,b,c,d){var e=new Cv();ADB(e,a,b,c,d);return e;}
function TT(a,b,c,d){AGD();Dy(a,b,c);a.nd=IS(d,null);}
function ADB(a,b,c,d,e){AGD();Dy(a,b,c);a.nd=IS(d,e);}
function AY3(){var b;b=new Cv;AHF();TT(b,C(370),0,A42);A6f=b;A6g=DJ(C(371),1,S(C(664)));A6h=DJ(C(373),2,S(C(665)));A6i=DJ(C(375),3,S(C(666)));A6j=DJ(C(377),4,A42);A6k=DJ(C(378),5,S(C(667)));A6l=DJ(C(380),6,S(C(420)));A6m=DJ(C(382),7,S(C(668)));A6n=DJ(C(384),8,S(C(669)));A6o=AYI(C(386),9,A42,Ds(237,235,252));A6p=AYI(C(387),10,S(C(418)),S(C(670)));A6q=DJ(C(388),11,S(C(420)));A6r=DJ(C(390),12,S(C(421)));A6s=DJ(C(392),13,S(C(671)));b=DJ(C(393),14,S(C(394)));A6t=b;A3S=I(Cv,[A6f,A6g,A6h,A6i,A6j,A6k,A6l,A6m,A6n,A6o,
A6p,A6q,A6r,A6s,b]);}
var DI=G(0);
var A3W=null;var A3X=null;var A3T=null;var A3U=null;var A3V=null;var A43=null;var A44=null;var A3Y=null;var A3Z=null;function AKr(){AKr=Bq(DI);ANl();}
function ANl(){A3W=S(C(111));A3X=S(C(672));A3T=S(C(673));A3U=S(C(674));A3V=S(C(675));A43=S(C(111));A44=S(C(672));A3Y=ED(205,205,205,153);A3Z=Ds(247,248,250);}
function ABx(){B.call(this);this.ux=null;}
function AXM(a,b){AAY(a.ux,b);}
var OQ=G(G7);
function AOr(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=Gb(d,a.bb);DG(d,a.bb,b);e=a.dc.c(b,c,d);if(e>=0)break;DG(d,a.bb,g);b=b+1|0;}}return b;}
function AZI(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gb(e,a.bb);DG(e,a.bb,c);f=a.dc.c(c,d,e);if(f>=0)break;DG(e,a.bb,g);c=c+(-1)|0;}}return c;}
function AMs(a){return null;}
var S9=G(Bt);
var ABf=G(Bt);
function Yu(){Go.call(this);this.Dm=0;}
function ST(){Go.call(this);this.De=0;}
var NN=G(Bt);
function ZI(){var a=this;B.call(a);a.un=null;a.uo=null;}
function ZH(){B.call(this);this.rB=null;}
function AXh(a,b){Bs(a.rB,b);}
function Yl(){var a=this;B.call(a);a.vh=null;a.xV=null;a.zz=0;a.l8=0;}
function LD(a,b){return Cf(a.vh)<b?0:1;}
var ADc=G();
function ADR(b){var c,d,e,f,g,h,i,j;c=ALK();d=CH(b);Br(c,d);e=0;f=0;while(f<d){g=B$(b,f);h=H8(g);Br(c,h);i=0;while(i<h){j=I8(g,i);Hc(c,e,M6(j));e=e+M6(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return SP(c);}
function ADl(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=Q(FX,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1)){j=new FX;j.gM=h;e[g]=j;}else{j=new FX;j.gM=h;j.nC=BK(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nC.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function RV(){B.call(this);this.rx=null;}
function AQQ(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.rx;d=CM(c[0]);c=M4(d);e=new YD;d=ADl(c);f=ADl(c);g=Ba(c);h=Q(M2,g);i=h.data;j=0;while(j<g){i[j]=Lj(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));j=j+1|0;}AF4(e,d,f,h);b.jv=e;KV(b.G,e.yK);KV(b.H,b.jv.yL);c=b.lF;e=b.jv;c.hF=e;b.e8.ew=e;}
var ADF=G(0);
function SH(){B.call(this);this.Ai=null;}
function ARm(a){var b,c;b=a.Ai;c=b.tC;b=b.tD;c.D5(b.kM,b.nu,null);}
function Xn(){var a=this;B.call(a);a.BJ=null;a.uB=null;}
function Xq(){B.call(this);this.CY=null;}
function AXZ(a,b){$rt_globals.console.info($rt_ustr(b));}
function Yr(){var a=this;B.call(a);a.d5=null;a.lf=null;a.ng=null;a.nn=null;a.r$=0;a.kt=0;a.c0=0;a.y=0;a.eN=0;a.kA=0;a.f1=0;a.dI=0;a.CJ=0;a.i4=0;a.k3=0;}
function BW(a,b,c){a.lf.data[b]=c;}
function Dt(a,b){return a.lf.data[b];}
function J1(a){return UI(a,0);}
function UI(a,b){Us(a,b);return a.d5.data[(b*2|0)+1|0];}
function DG(a,b,c){a.d5.data[b*2|0]=c;}
function KK(a,b,c){a.d5.data[(b*2|0)+1|0]=c;}
function Gb(a,b){return a.d5.data[b*2|0];}
function Js(a,b){return a.d5.data[(b*2|0)+1|0];}
function AG1(a){return Rt(a,0);}
function Rt(a,b){Us(a,b);return a.d5.data[b*2|0];}
function OD(a,b){return a.ng.data[b];}
function Ew(a,b,c){a.ng.data[b]=c;}
function Us(a,b){var c;if(!a.kt){c=new CY;X(c);K(c);}if(b>=0&&b<a.r$)return;c=new BE;Bn(c,Dc(b));K(c);}
function ABG(a,b,c,d){a.kt=0;a.k3=2;Ih(a.d5,(-1));Ih(a.lf,(-1));if(b!==null)a.nn=b;if(c>=0){a.c0=c;a.y=d;}a.eN=a.c0;}
function AER(a){return a.k3;}
function AAl(){B.call(this);this.v6=null;}
function APD(a){Fr(a.v6);}
function V$(){W.call(this);this.BS=null;}
function AXN(a,b){return CA(b)!=2?0:1;}
function Oq(){W.call(this);this.B4=null;}
function AK5(a,b){return CA(b)!=1?0:1;}
function UG(){W.call(this);this.Bo=null;}
function AKI(a,b){return TY(b);}
function UF(){W.call(this);this.A9=null;}
function AOm(a,b){return 0;}
function AAw(){W.call(this);this.CS=null;}
function AP_(a,b){return !CA(b)?0:1;}
function Rm(){W.call(this);this.Cj=null;}
function AXQ(a,b){return CA(b)!=9?0:1;}
function Qo(){W.call(this);this.Ds=null;}
function ATF(a,b){return GX(b);}
function TD(){W.call(this);this.BU=null;}
function AVm(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Ok(){W.call(this);this.Al=null;}
function AZd(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GX(b);}return b;}
function Oo(){W.call(this);this.Cn=null;}
function ANa(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GX(b);}return b;}
function PT(){W.call(this);this.CP=null;}
function AX2(a,b){a:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function RU(){W.call(this);this.C$=null;}
function ARV(a,b){return KA(b);}
function R4(){W.call(this);this.Br=null;}
function AUI(a,b){return R5(b);}
function WO(){W.call(this);this.Cu=null;}
function AXv(a,b){return CA(b)!=3?0:1;}
function Vu(){W.call(this);this.At=null;}
function AYF(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GX(b);}return b;}
function OG(){W.call(this);this.DA=null;}
function AMV(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GX(b);}return b;}
function Ny(){W.call(this);this.nN=0;}
function A2g(a){var b=new Ny();AGB(b,a);return b;}
function AGB(a,b){By(a);a.nN=b;}
function ATI(a,b){return a.bg^(a.nN!=CA(b&65535)?0:1);}
var Uu=G(Ny);
function AWm(a,b){return a.bg^(!(a.nN>>CA(b&65535)&1)?0:1);}
function AA1(){B.call(this);this.qT=null;}
function AOP(a,b){var c,d,e,f;c=a.qT;b=Fn(b);d=c.un;c=c.uo;e=new Nz;f=AHb(FH(c));AIm(e,b,null,f);Ji(d,e);}
function AA3(){var a=this;B.call(a);a.sv=null;a.sw=null;}
function ALq(a,b){var c,d;c=a.sv;d=a.sw;b.text().then(Bl(c,"f"),Bl(d,"f"));}
function YZ(){B.call(this);this.re=null;}
function AUv(a,b){var c,d,e,f;c=a.re;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.uB;c=Bz();b=CG(b);e=new L;N(e);H(H(e,C(676)),b);Bs(c,M(e));b=Bz();f=d.length;c=new L;N(c);U(H(c,C(677)),f);Bs(b,M(c));}
function Y1(){var a=this;B.call(a);a.xD=null;a.xE=null;}
function ASY(a,b){var c,d;c=a.xD;d=a.xE;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function XN(){B.call(this);this.s1=null;}
function ARh(a,b){a.s1.i($rt_str(b.message));}
var ADt=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bI",A2F(ARP),"cP",A2E(ALV)],Uo,0,B,[],0,3,0,0,0,OW,0,B,[],3,3,0,0,0,Od,0,B,[],3,3,0,0,0,Z0,0,B,[OW,Od],0,3,0,0,0,AD5,0,B,[],4,0,0,0,0,ADJ,0,B,[],4,3,0,0,0,G8,0,B,[],0,3,0,0,0,El,0,G8,[],0,3,0,0,0,Bt,0,El,[],0,3,0,0,0,AFA,0,Bt,[],0,3,0,0,0,CW,0,B,[],3,3,0,0,0,CJ,0,B,[],3,3,0,0,0,JL,0,B,[],3,3,0,0,0,BC,"String",1,B,[CW,CJ,JL],0,3,0,Ff,["cP",A2E(ALT),"bI",A2F(Bm),"on",A2E(Je),"lu",A2F(AOq)],Fb,0,G8,[],0,3,0,0,0,H0,0,Fb,[],0,3,0,0,0,AE8,0,H0,[],0,3,0,0,0,D$,0,B,[CW],1,3,0,0,0,GO,
0,D$,[CJ],0,3,0,0,["bI",A2F(AYO),"lu",A2F(AQW)],GU,0,B,[CW,JL],0,0,0,0,["jj",A2F(KJ),"cP",A2E(M)],IQ,0,B,[],3,3,0,0,0,L,0,GU,[IQ],0,3,0,0,["n1",A2I(AQO),"mV",A2H(ANk),"cP",A2E(D7),"jj",A2F(AQY),"oI",A2G(ARw)],EM,0,H0,[],0,3,0,0,0,AGC,0,EM,[],0,3,0,0,0,AEW,0,EM,[],0,3,0,0,0,WI,0,B,[],3,3,0,0,0,C1,0,B,[],3,3,0,0,0,Rl,0,B,[],3,0,0,0,0,Jy,0,B,[WI,C1,Rl],1,3,0,0,["cH",A2E(Eq)],Uh,0,Jy,[],0,3,0,0,0,AC3,0,B,[],0,3,0,0,0,AH2,0,B,[],4,3,0,0,0,BP,0,B,[],3,3,0,0,0,BY,0,B,[BP],3,3,0,0,0,WW,0,B,[BY],0,3,0,0,["Y",A2F(AY9)],AGH,
0,B,[],0,3,0,0,0,AFO,0,B,[BP],1,3,0,0,0,AC9,0,B,[],3,3,0,0,0,AHB,0,B,[],3,3,0,0,0,AHy,0,B,[],3,3,0,0,0,MX,0,B,[],0,3,0,0,0,AD1,0,B,[BP],1,3,0,0,0,WX,0,B,[BY],0,3,0,0,["Y",A2F(AJl)],WV,0,B,[BY],0,3,0,0,["Y",A2F(AXw)],Mt,0,B,[],4,3,0,0,0,AHu,0,B,[],4,3,0,0,0,AEB,0,B,[],0,3,0,0,0,AJe,0,B,[],4,3,0,0,0,O2,0,B,[BY],0,3,0,0,["Y",A2F(ATk)]]);
$rt_metadata([AHQ,0,B,[BP],1,3,0,0,0,ADj,0,B,[],0,3,0,0,0,Y4,0,B,[BP],3,3,0,0,0,AFB,0,B,[Y4],1,3,0,0,["OI",A2F(APd),"N1",A2E(ARM)],AFm,0,B,[BP],1,3,0,0,0,HT,0,B,[],3,3,0,0,0,V8,0,B,[HT],0,3,0,0,0,BE,0,Bt,[],0,3,0,0,0,AGg,0,B,[],4,3,0,0,0,He,0,Bt,[],0,3,0,0,0,JF,0,Bt,[],0,3,0,0,0,De,0,B,[CJ],0,3,0,0,0,N4,0,B,[BP],3,3,0,0,0,Vy,0,B,[N4],3,3,0,0,0,EE,0,B,[BP],3,3,0,0,0,AC8,0,B,[BP,Vy,EE],1,3,0,0,["MK",A2E(ASL),"ND",A2F(AWu),"Pp",A2F(AWc),"Hb",A2F(AMQ),"Mz",A2F(AJP),"ER",A2E(ANc),"NW",A2G(AWn),"N2",A2H(AQt),"OR",
A2E(AK4),"PB",A2E(AUd),"Lb",A2F(AXo),"Ii",A2E(ASh),"P6",A2F(APX),"Kf",A2E(ASN),"Jd",A2E(AZG),"PO",A2E(ARi),"EH",A2F(AKR),"N$",A2E(AYQ),"LJ",A2G(APT),"H3",A2G(AR5),"NF",A2G(AYg),"M1",A2E(AJS),"OA",A2E(APv),"O9",A2F(ANq),"KN",A2F(AOC),"G5",A2G(AQe),"JE",A2E(ARp),"OH",A2F(AK7),"Fb",A2E(AOB),"PR",A2E(AUN),"GI",A2F(AJx),"Ke",A2F(AW_),"PF",A2F(ALH),"IS",A2E(AXc),"HI",A2G(ALW),"Nq",A2F(AUz),"Jp",A2E(AVr),"FG",A2G(ATB),"FL",A2G(AS3),"IQ",A2E(AW5),"Pb",A2F(AY4),"HU",A2H(AS8),"GB",A2E(ANg),"H6",A2G(AMl),"Ib",A2E(AKu),
"Ne",A2E(AYJ),"K$",A2E(ATw),"DI",A2E(AKq),"Mv",A2G(ATC),"Fc",A2F(AM4),"KL",A2F(AOY),"Gm",A2E(AVz)],PU,0,B,[BY],0,3,0,0,["Y",A2F(AUy)],AFj,0,B,[],4,3,0,0,0,RT,0,B,[EE],3,3,0,0,0,Ud,0,B,[EE],3,3,0,0,0,T3,0,B,[EE],3,3,0,0,0,WD,0,B,[EE],3,3,0,0,0,ABe,0,B,[EE],3,3,0,0,0,XY,0,B,[EE,RT,Ud,T3,WD,ABe],3,3,0,0,0,AD2,0,B,[BP,XY],1,3,0,0,["L2",A2G(ATG),"OP",A2G(AQU),"GK",A2H(APx),"HR",A2F(ALd),"LD",A2H(ANw)],BR,0,Bt,[],0,3,0,0,0,ACt,0,Bt,[],0,3,0,0,0,HV,0,BE,[],0,3,0,0,0,AEn,0,B,[],0,3,0,0,0,Tq,0,B,[],3,3,0,0,0,Q4,0,B,
[Tq],3,3,0,0,0,VI,0,B,[Q4],0,3,0,0,0,BH,0,B,[],3,3,0,0,0,AFK,0,B,[BH],0,3,0,0,0,Be,0,B,[],3,3,0,0,0,AFL,0,B,[Be],0,3,0,0,0,T8,0,B,[BP],3,3,0,0,0,YT,0,B,[T8],0,3,0,0,["Kh",A2F(APS)],YQ,0,B,[Be],0,3,0,0,0,S7,0,B,[BP],3,3,0,0,0,YR,0,B,[S7],0,3,0,0,["zv",A2G(ANF)],AH9,0,B,[BP],1,3,0,0,0,Cx,0,B,[BP],3,3,0,0,0,YP,0,B,[Cx],0,3,0,0,["cm",A2F(AUK)],Vf,0,B,[],0,3,0,0,0,ZL,0,B,[],3,3,0,0,["e7",A2F(AJm)],GF,0,B,[ZL],3,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],Fg,0,B,[GF],1,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw),"eo",A2E(FR),"qK",
A2F(AVY)],LR,0,B,[GF],3,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],J_,0,B,[LR],3,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)]]);
$rt_metadata([EY,0,Fg,[J_],1,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw),"vX",A2F(AU8),"b_",A2E(B4),"wM",A2G(AT3),"o$",A2G(AW1),"bI",A2F(ASy)],Nk,0,EY,[],1,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],Oe,0,B,[GF],3,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],ABH,0,B,[Oe,LR],3,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],XR,0,Nk,[ABH],0,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],Ma,0,B,[],3,3,0,0,0,D8,0,B,[Ma],1,3,0,0,0,Em,0,B,[],3,3,0,0,0,ABD,0,B,[Ma],3,3,0,0,0,OU,0,B,[ABD],3,3,0,0,0,Rx,0,D8,[Em,CW,OU],0,3,0,0,0,Vl,0,B,[BH],0,3,0,0,0,Vm,0,B,[BY],0,
3,0,0,["Y",A2F(AJR)],AEg,0,B,[],0,3,0,0,0,Mm,0,B,[],1,3,0,0,0,YI,0,Mm,[],0,3,0,0,0,Ci,0,B,[C1],1,3,0,0,["cv",A2F(AYL)],Su,0,B,[],0,3,0,0,0,Z5,0,B,[Cx],0,3,0,0,["cm",A2F(AT5)],Z6,0,B,[Cx],0,3,0,0,["cm",A2F(AUl)],Z7,0,B,[Cx],0,3,0,0,["cm",A2F(ASc)],Z8,0,B,[Cx],0,3,0,0,["cm",A2F(ARs)],Z9,0,B,[Cx],0,3,0,0,["cm",A2F(ARW)],Z$,0,B,[Cx],0,3,0,0,["cm",A2F(AUW)],Z_,0,B,[Cx],0,3,0,0,["cm",A2F(APw)],AAa,0,B,[Cx],0,3,0,0,["cm",A2F(AZv)],AAb,0,B,[Cx],0,3,0,0,["cm",A2F(AOy)],AAc,0,B,[Cx],0,3,0,0,["cm",A2F(AWf)],AB8,0,B,[Cx],
0,3,0,0,["cm",A2F(AYM)],AB9,0,B,[Cx],0,3,0,0,["cm",A2F(ARK)],AB$,0,B,[Cx],0,3,0,0,["cm",A2F(ASj)],AB_,0,B,[Cx],0,3,0,0,["cm",A2F(AUC)],Xo,0,B,[],3,3,0,0,0,XF,0,B,[Xo],0,3,0,0,0,XE,0,B,[Cx],0,3,0,0,["cm",A2F(AQC)],N8,0,B,[],0,3,0,0,0,J7,0,B,[HT],0,3,0,0,["zg",A2G(KB)],AIt,0,B,[],0,3,0,0,0,Eo,0,B,[],3,3,0,0,0,Cm,0,B,[Eo],3,3,0,0,0,Cw,0,B,[],3,3,0,0,["bF",A2F(AQH),"bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV)],EC,0,B,[],3,3,0,0,0,Dz,0,B,[Eo],3,3,0,0,0,Fc,0,B,[],3,3,0,0,0,Eg,0,B,[],3,3,0,0,0,FJ,0,B,[Eg],3,3,0,0,0,Td,
0,B,[C1],0,3,0,0,0,Bh,0,B,[],0,3,0,0,["cP",A2E(ACx),"bI",A2F(AQo)],AAf,0,B,[],0,3,0,0,0,AHA,0,B,[],0,3,0,0,0]);
$rt_metadata([ADD,0,B,[],3,3,0,0,0,S5,0,B,[],0,3,0,0,0,MN,0,B,[],0,3,0,0,0,C6,0,MN,[],0,3,0,0,0,AHY,0,C6,[],0,3,0,0,0,E0,0,C6,[],0,3,0,0,0,TM,0,C6,[],0,3,0,0,0,AFt,0,E0,[],0,3,0,0,0,GB,0,E0,[],0,3,0,0,0,P_,0,GB,[],0,3,0,0,0,AIR,0,GB,[],0,3,0,0,0,AD4,0,E0,[],0,3,0,0,0,AGG,0,C6,[],0,3,0,0,0,ADz,0,C6,[],0,3,0,0,0,UH,0,B,[BP],3,3,0,0,0,AJa,0,B,[UH],3,3,0,0,0,S3,0,B,[C1],0,3,0,0,0,S4,0,B,[],0,3,0,0,0,CE,0,B,[CJ,CW],1,3,0,0,0,Hp,0,CE,[],12,3,0,Ij,0,NE,0,B,[],3,3,0,0,0,Wt,0,B,[NE],3,3,0,0,0,XS,0,B,[],3,3,0,0,0,GZ,
0,B,[Wt,XS],1,3,0,0,0,Ks,0,GZ,[],0,3,0,0,0,AET,0,Ks,[],0,3,0,0,0,GM,0,GZ,[],1,3,0,0,0,Mr,0,GM,[],0,3,0,0,["mg",A2H(AQr)],Ee,0,CE,[],12,3,0,AXT,0,Kh,0,B,[CJ],1,3,0,0,0,NJ,0,Kh,[],0,3,0,AEN,0,RC,0,B,[],0,3,0,0,0,Ht,0,CE,[],12,0,0,AR7,0,LT,0,GM,[],0,3,0,0,["mg",A2H(AN5)],AHt,0,BR,[],0,3,0,0,0,YU,0,El,[],0,3,0,0,0,NI,0,B,[BP],3,3,0,0,0,ABA,0,B,[NI],0,3,0,0,["Y",A2F(AVF)],ABB,0,B,[NI],0,3,0,0,["Y",A2F(ALI)],HI,0,B,[],1,3,0,0,0,U_,0,B,[],3,3,0,0,0,Me,0,HI,[CJ,IQ,JL,U_],1,3,0,0,0,KZ,0,HI,[CJ],1,3,0,0,0,Iv,0,B,[],0,
3,0,HP,0,O1,0,Ci,[],0,3,0,0,["bs",A2E(ARD),"bS",A2G(APW)],Eb,0,Ci,[],1,3,0,0,["bS",A2G(VA)],CD,0,Eb,[],1,3,0,0,["bs",A2E(SG),"bS",A2G(Ip),"cv",A2F(ALv)],Q2,0,B,[],3,3,0,0,0,Iw,0,B,[Q2],3,3,0,0,0,La,0,B,[],3,3,0,0,0]);
$rt_metadata([Ju,0,B,[],3,3,0,0,0,KQ,0,CD,[Cw,Iw,La,Ju,EC,Fc,FJ],0,3,0,0,["ht",A2G(AYb),"cv",A2F(AVd),"bs",A2E(ART),"gQ",A2E(API),"zk",A2E(AVW),"zT",A2E(ARI),"xd",A2F(AW$),"nB",A2F(ATp),"jU",A2F(AMS),"bS",A2G(AQ3),"ii",A2F(AKt),"bF",A2F(AT_),"ce",A2H(APO),"bX",A2G(ASa),"cR",A2G(AU5),"dJ",A2H(AUu),"da",A2E(AQN)],AHJ,0,KQ,[],0,3,0,0,["gQ",A2E(ASs)],AIr,0,B,[],0,3,0,0,0,AFD,0,B,[BP],1,3,0,0,0,K9,0,Me,[],1,0,0,0,0,AFk,0,K9,[],0,0,0,0,0,L2,0,B,[],1,3,0,0,0,MW,0,B,[],0,3,0,0,0,ADf,0,B,[],0,3,0,0,0,Jk,0,B,[BP],3,3,
0,0,0,Pa,0,B,[Jk],0,3,0,0,["Y",A2F(AOe)],O_,0,B,[Jk],0,3,0,0,["Y",A2F(ATq)],O9,0,B,[BY],0,3,0,0,["Y",A2F(AUf)],O8,0,B,[BY],0,3,0,0,["Y",A2F(AMn)],Y,0,B,[],3,3,0,0,0,W4,0,B,[Y],0,3,0,0,["i",A2F(AYR)],W5,0,B,[Y],0,3,0,0,["i",A2F(AQV)],Zc,0,B,[BH],0,3,0,0,["be",A2F(AXx)],Za,0,B,[BH],0,3,0,0,["be",A2F(AJ5)],Y9,0,B,[BH],0,3,0,0,["be",A2F(ANG)],Y8,0,B,[BH],0,3,0,0,["be",A2F(ATm)],Y_,0,B,[BH],0,3,0,0,["be",A2F(ANO)],Y$,0,B,[BH],0,3,0,0,["be",A2F(AJj)],Zf,0,B,[BH],0,3,0,0,["be",A2F(ANh)],Ze,0,B,[BH],0,3,0,0,["be",A2F(ARr)],Zh,
0,B,[BH],0,3,0,0,["be",A2F(AV0)],Zg,0,B,[BH],0,3,0,0,["be",A2F(AJA)],Wb,0,B,[BH],0,3,0,0,["be",A2F(AJW)],Wa,0,B,[BH],0,3,0,0,["be",A2F(AQ1)],V_,0,B,[BH],0,3,0,0,["be",A2F(ASS)],V1,0,B,[BH],0,3,0,0,["be",A2F(AOj)],V0,0,B,[BH],0,3,0,0,["be",A2F(AJG)],VY,0,B,[BH],0,3,0,0,["be",A2F(AXJ)],VX,0,B,[BH],0,3,0,0,["be",A2F(ARE)],VW,0,B,[BH],0,3,0,0,["be",A2F(AV2)],VV,0,B,[BH],0,3,0,0,["be",A2F(AJr)],VU,0,B,[BH],0,3,0,0,["be",A2F(AVI)],V5,0,B,[BH],0,3,0,0,["be",A2F(AUp)],V4,0,B,[BH],0,3,0,0,["be",A2F(AMB)],V3,0,B,[BH],
0,3,0,0,["be",A2F(APl)],V2,0,B,[BH],0,3,0,0,["be",A2F(APN)],AAq,0,B,[],0,0,0,0,0,HO,0,B,[],0,3,0,0,0,Rq,0,HO,[],0,3,0,0,0,AHK,0,B,[],0,3,0,0,0,N2,0,HO,[],0,3,0,0,0,Xr,0,B,[BP],3,3,0,0,0,PK,0,B,[Xr],0,3,0,0,["Pq",A2F(AQ7)],X7,0,B,[Y],0,3,0,0,["i",A2F(ZP)]]);
$rt_metadata([AAJ,0,KZ,[],0,0,0,0,0,CS,0,B,[C1],0,3,0,0,["cH",A2E(AVf),"iK",A2E(AS$),"eK",A2H(G0),"dh",A2F(AIn),"cv",A2F(AL7),"mn",A2F(ARx),"mc",A2F(AYq),"il",A2G(AVq),"l5",A2E(AYH),"ce",A2H(APF),"bX",A2G(ALU),"cR",A2G(ASx),"bF",A2F(AX7),"dJ",A2H(AVb)],AED,0,CS,[],0,3,0,0,["dh",A2F(AGY)],AFq,0,B,[],0,0,0,0,0,FK,0,B,[],3,3,0,0,["z8",A2E(ATa),"wV",A2E(AOs)],SS,0,B,[],3,0,0,0,0,NC,0,B,[FK],3,3,0,0,["z8",A2E(ATa),"wV",A2E(AOs)],AEK,0,CS,[FK,Cw,La,SS,NC],0,3,0,0,["eK",A2H(NF),"il",A2G(ATM),"m_",A2G(AYT),"wV",A2E(AOf),
"z8",A2E(AKz),"zk",A2E(PF),"zT",A2E(AB6),"xd",A2F(Qw),"nB",A2F(AUZ),"l5",A2E(MK),"cH",A2E(ALe),"cv",A2F(I$),"oZ",A2F(AFd),"iK",A2E(AWH),"nm",A2E(AWJ),"dh",A2F(AR9),"jM",A2E(X3),"km",A2E(X2),"gH",A2F(AUq),"x2",A2E(AT8),"nG",A2E(AZF),"cR",A2G(Wr),"bX",A2G(Op),"ce",A2H(OH),"bF",A2F(P6),"h_",A2F(AYo)],ACS,0,B,[],0,3,0,0,0,Yd,0,B,[Y],0,3,0,0,["i",A2F(AKM)],Ye,0,B,[Y],0,3,0,0,["i",A2F(AWQ)],Yf,0,B,[Cm],0,3,0,0,["S",A2F(AQ$)],G5,0,B,[Cm],0,3,0,0,["S",A2F(AOv)],Ya,0,B,[Y],0,3,0,0,["i",A2F(ASd)],Yc,0,B,[Dz],0,3,0,0,
["S",A2F(AXK)],Dj,0,B,[],3,3,0,0,0,ABb,0,B,[Cw,Dj],0,3,0,0,["bF",A2F(AJX),"ce",A2H(AMd),"bX",A2G(APK),"cR",A2G(AYf),"ej",A2G(AQE)],XJ,0,B,[],0,3,0,0,0,N9,0,B,[EC],0,3,0,0,["dJ",A2H(AX9)],AEq,0,B,[],0,3,0,0,0,Nz,0,B,[],0,3,0,0,0,ABj,0,B,[],0,3,0,0,0,E3,0,B,[C1],0,3,0,0,0,AIN,0,B,[],0,3,0,0,0,AEo,0,B,[C1],0,3,0,0,0,P1,0,B,[Y],0,3,0,0,0,P0,0,B,[Y],0,3,0,0,["i",A2F(AK$)],PZ,0,B,[Y],0,3,0,0,["i",A2F(AJ1)],AGz,0,B,[],0,3,0,0,0,PY,0,B,[Be],0,3,0,0,["l",A2E(AJ0)],P5,0,B,[Be],0,3,0,0,["l",A2E(AOu)],P4,0,B,[Be],0,3,0,
0,["l",A2E(AZV)],P3,0,B,[Be],0,3,0,0,["l",A2E(ARk)],P2,0,B,[Be],0,3,0,0,["l",A2E(AUg)],PX,0,B,[Be],0,3,0,0,["l",A2E(AYV)],Zt,0,B,[Be],0,3,0,0,["l",A2E(ARo)],Zu,0,B,[Be],0,3,0,0,["l",A2E(AUi)],AGt,0,B,[BP],1,3,0,0,0,Ly,0,B,[],4,3,0,AQc,0,ADx,0,B,[],3,3,0,0,0,UO,0,B,[Cm],0,3,0,0,["S",A2F(APb)],UN,0,B,[Cm],0,3,0,0,["S",A2F(AMj)],Ms,0,B,[],3,3,0,0,0,ADn,0,EY,[Em,CW,Ms],0,3,0,0,["nP",A2F(AQw),"nO",A2F(Bw),"cY",A2E(ATO),"vX",A2F(BG),"o$",A2G(Ui),"oW",A2F(EJ),"qK",A2F(Zo),"hQ",A2E(Ig),"wM",A2G(ADQ),"e7",A2F(E4)],JN,
0,B,[],0,3,0,0,0,FA,0,B,[],0,3,0,0,0,Lp,0,FA,[],0,3,0,0,0,V7,0,FA,[],0,3,0,0,0,SI,0,FA,[],0,3,0,0,0,HC,0,B,[],3,3,0,0,0]);
$rt_metadata([Vp,0,B,[],3,3,0,0,0,BZ,0,B,[],0,3,0,0,["bI",A2F(AZn)],Md,0,B,[],0,3,0,0,0,Ia,0,B,[C1],0,3,0,0,["cH",A2E(AGM)],Ss,0,B,[],3,0,0,0,0,NX,0,B,[],3,3,0,0,0,SW,0,B,[Be],0,3,0,0,["l",A2E(APu)],SV,0,B,[Be],0,3,0,0,["l",A2E(AJE)],AH$,0,B,[],0,3,0,0,0,XB,0,B,[],0,3,0,0,0,G$,0,B,[],1,3,0,0,0,Ue,0,G$,[],0,3,0,0,["wk",A2F(B$)],XM,0,B,[],3,3,0,0,0,Mc,"JsFileHandle",6,B,[XM],0,3,0,0,["cP",A2E(AQz)],ZD,0,B,[],3,3,0,0,0,AF6,0,B,[ZD],0,3,0,0,["cP",A2E(AMW)],Ut,0,B,[NX],0,3,0,0,0,HD,0,B,[CJ],0,3,0,0,0,L7,0,B,[],0,
3,0,0,0,Dw,0,B,[],0,3,0,0,0,R0,0,B,[],0,3,0,0,0,LH,0,D8,[Em,CW],0,3,0,0,0,Cu,0,B,[],0,3,0,0,0,L4,0,LH,[],0,3,0,0,0,Uq,0,B,[],0,3,0,0,0,AIL,0,B,[CJ],0,3,0,0,["bI",A2F(AWk),"lu",A2F(AL5)],ZR,0,B,[HT],0,3,0,0,["zg",A2G(ARq)],TF,0,B,[],0,3,0,0,["cP",A2E(AKo),"bI",A2F(ALM)],H4,0,B,[],3,3,0,0,0,G6,0,B,[H4,Em],0,0,0,0,["bI",A2F(AMZ)],Hf,0,G6,[],0,0,0,0,0,LZ,0,L2,[],1,3,0,0,0,R1,0,LZ,[],0,3,0,0,0,Jq,0,El,[],0,3,0,0,0,Ot,0,B,[Jk],0,3,0,0,["Y",A2F(AZa)],Ow,0,B,[BY],0,3,0,0,["Y",A2F(AX0)],Ou,0,B,[BY],0,3,0,0,["Y",A2F(AKU)],I2,
0,B,[],0,3,0,0,0,J2,0,CD,[Iw,Ju],0,3,0,0,["jU",A2F(APG),"cv",A2F(AWF),"bs",A2E(APe),"gQ",A2E(AYG),"bS",A2G(AJz),"nq",A2G(AGF),"ii",A2F(ANx)],ACW,0,Ci,[],0,3,0,0,["cv",A2F(AJ$),"bs",A2E(ANp),"bS",A2G(AQ9)],WE,0,Ci,[],0,3,0,0,["cv",A2F(ATn),"bs",A2E(ALQ),"bS",A2G(AN_)],Qa,0,Eb,[Cw,Dj],0,3,0,0,["ej",A2G(AQg),"bS",A2G(AOg),"bs",A2E(ANr),"bF",A2F(AQ_),"bX",A2G(AWU),"cR",A2G(AV$),"ce",A2H(AK_)],VZ,0,CD,[Dj],0,3,0,0,["ej",A2G(AM7),"bs",A2E(AT2),"bS",A2G(ALA)],Pj,0,Eb,[Cw],0,3,0,0,["bF",A2F(AQH),"bX",A2G(AXA),"cR",
A2G(AKm),"ce",A2H(AUV),"bs",A2E(AVZ),"cv",A2F(AJY)],VT,0,Ci,[],0,3,0,0,["bs",A2E(AJy),"bS",A2G(AJw)],D4,0,Ci,[],0,3,0,0,["bs",A2E(U9),"bS",A2G(VJ)],S$,"SelectFileTest",5,D4,[],0,3,0,0,0,PH,0,Eb,[],0,3,0,0,["bs",A2E(AX$)],OF,"RenderTexture",5,D4,[],0,3,0,0,["cv",A2F(APE),"bs",A2E(AM8),"bS",A2G(AYz)],VO,"ScissorDemo",5,D4,[],0,3,0,0,["bs",A2E(AZA),"bS",A2G(AO8)]]);
$rt_metadata([VH,0,Ci,[],0,3,0,0,["bs",A2E(AX5),"bS",A2G(ANu),"cv",A2F(AVt)],JQ,"ClipboardTest",5,D4,[Cw],0,3,0,0,["bF",A2F(AQH),"bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AQP)],Vk,0,Ci,[],0,3,0,0,["bs",A2E(AZm),"bS",A2G(ATr)],Hi,0,Ci,[Cw],1,3,0,0,["bF",A2F(AQH),"bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV),"bs",A2E(AEx)],WR,0,Hi,[],0,3,0,0,["bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV),"bS",A2G(AU9),"bF",A2F(AWC)],WQ,0,Hi,[],0,3,0,0,["bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV),"bF",A2F(AYY),"bs",A2E(AM3),"bS",A2G(AKE)],AAX,
0,CD,[Dj],0,3,0,0,["ej",A2G(AOb),"bs",A2E(AXC),"bS",A2G(AWx)],YV,0,CD,[Dj],0,3,0,0,["ej",A2G(AQB)],RI,0,CD,[Dj,Iw,Ju],0,3,0,0,["cv",A2F(AMy),"ej",A2G(ALs),"ii",A2F(AV7),"jU",A2F(AUT)],Pp,0,B,[Cw],0,0,0,0,["bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV),"bF",A2F(AVS)],Oh,0,J2,[],0,3,0,0,["gQ",A2E(ALX),"nq",A2G(AZO)],P$,0,CD,[Dj],0,3,0,0,["ej",A2G(AXH)],SE,0,CD,[Dj],0,3,0,0,["ej",A2G(AVX)],Zb,0,Ci,[Cw],0,3,0,0,["bF",A2F(AQH),"bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV),"bS",A2G(AYP),"bs",A2E(APt),"cv",A2F(AVB)],Jx,0,B,
[],0,3,0,0,0,ADw,0,B,[],3,3,0,0,0,ACK,0,B,[],0,3,0,0,0,AF7,0,B,[],3,3,0,0,0,AIY,0,B,[],0,3,0,0,0,NR,0,B,[H4,CW],0,3,0,0,0,Kv,0,NR,[],0,0,0,0,0,AIo,0,B,[],0,3,0,0,0,R$,0,B,[Cm],0,3,0,0,["S",A2F(ALt)],R8,0,B,[Y],0,3,0,0,["i",A2F(AOF)],R9,0,B,[Dz],0,3,0,0,["S",A2F(AWM)],AIT,0,JN,[],0,3,0,0,0,X8,0,B,[Cw],0,0,0,0,["bF",A2F(ALR),"ce",A2H(AJN),"bX",A2G(ALF),"cR",A2G(AKG)],SO,0,B,[Cm],0,3,0,0,["S",A2F(AXe)],SN,0,B,[Cm],0,3,0,0,["S",A2F(AUr)],SM,0,B,[Fc],0,3,0,0,["ht",A2G(AQR)],SL,0,B,[Be],0,3,0,0,["l",A2E(AJT)],SK,
0,B,[Dz],0,3,0,0,["S",A2F(ATz)],SJ,0,B,[EC],0,3,0,0,["dJ",A2H(AXr)],HQ,0,BZ,[],0,3,0,0,0,AG_,0,B,[],3,3,0,0,0,OB,0,B,[Cw],0,0,0,0,["bF",A2F(AQH),"bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(ANV)],Ov,0,B,[],0,3,0,0,0,AF8,0,B,[],0,3,0,0,0,AHS,0,B,[Dj,FK,C1],0,3,0,0,["z8",A2E(ATa),"wV",A2E(AOs),"ej",A2G(AY8),"h_",A2F(ARy),"cH",A2E(AUQ)],Xj,0,B,[Cm],0,3,0,0,["S",A2F(ASQ)],Xf,0,B,[Dz],0,3,0,0,["S",A2F(AWd)],Sa,0,B,[],0,3,0,0,["bI",A2F(AV5)],Xg,0,B,[Be],0,3,0,0,["l",A2E(AZK)],Xh,0,B,[Be],0,3,0,0,["l",A2E(AKW)],Cn,0,B,[],
0,3,0,0,0,Y2,0,B,[Cm],0,3,0,0,["S",A2F(AQG)],Y3,0,B,[Dz],0,3,0,0,["S",A2F(AKn)],AGe,0,B,[],0,3,0,0,0,AIs,0,B,[],0,3,0,0,0,OJ,0,B,[Dj],0,3,0,0,["ej",A2G(AS1)]]);
$rt_metadata([OI,0,B,[Cm],0,3,0,0,["S",A2F(ATD)],T$,0,B,[],3,3,0,0,0,ACX,0,B,[T$],0,3,0,0,0,OV,0,B,[Cw],0,0,0,0,["ce",A2H(AUV),"bX",A2G(AKc),"cR",A2G(AKg),"bF",A2F(ANT)],UP,0,B,[EC],0,3,0,0,["dJ",A2H(ASZ)],Sf,0,B,[Cm],0,3,0,0,["S",A2F(ASC)],TH,0,B,[Dz],0,3,0,0,["S",A2F(AZo)],TG,0,B,[Y],0,3,0,0,["i",A2F(AVy)],TI,0,B,[Y],0,3,0,0,["i",A2F(ALZ)],Xw,0,B,[Cw],0,0,0,0,["cR",A2G(AKm),"ce",A2H(AUV),"bF",A2F(AT$),"bX",A2G(AY$)],C8,0,B,[],3,3,0,Fs,0,Sb,0,B,[Cw],0,0,0,0,["ce",A2H(AUV),"bX",A2G(AP0),"cR",A2G(AKA),"bF",A2F(AN2)],ACb,
0,B,[EC],0,3,0,0,["dJ",A2H(AXk)],AAA,0,B,[Cm],0,3,0,0,["S",A2F(AMN)],AAz,0,B,[Fc],0,3,0,0,["ht",A2G(AQ0)],AAy,0,B,[Fc],0,3,0,0,["ht",A2G(AMY)],AAx,0,B,[FJ],0,3,0,0,["da",A2E(ARL)],AAB,0,B,[FJ],0,3,0,0,["da",A2E(AWq)],UM,0,B,[Cm],0,3,0,0,["S",A2F(AYm)],AB3,0,B,[Cm],0,3,0,0,["S",A2F(AMv)],AB4,0,B,[Dz],0,3,0,0,["S",A2F(AKi)],AG5,0,B,[],0,3,0,0,0,AH4,0,B,[],3,3,0,0,0,PR,0,B,[Y],0,3,0,0,["i",A2F(AT7)],PS,0,B,[Dz],0,3,0,0,["S",A2F(AW3)],Mk,0,CS,[],1,3,0,0,["cH",A2E(AS2),"dh",A2F(ASt),"cv",A2F(AKy),"eK",A2H(ANd),"ce",
A2H(AXI),"bX",A2G(AW9),"cR",A2G(AXX),"bF",A2F(AYu),"dJ",A2H(AN6)],ABM,0,Mk,[],0,0,0,0,0,Y7,0,B,[Dz],0,3,0,0,["S",A2F(AUx)],Y6,0,B,[Cm],0,3,0,0,["S",A2F(ATx)],EX,0,CS,[],0,3,0,0,0,LU,0,EX,[FK],0,3,0,0,["z8",A2E(ATa),"wV",A2E(AOs),"cH",A2E(AT6),"il",A2G(AK6),"dh",A2F(ASb),"ce",A2H(AXi),"bX",A2G(AMP)],T7,0,LU,[],0,3,0,0,["z8",A2E(ATa),"wV",A2E(AOs)],Pl,0,B,[Be],0,3,0,0,0,K$,0,CS,[],0,3,0,0,["cH",A2E(AWo),"eK",A2H(AO2),"dh",A2F(AVv),"ce",A2H(AW6),"bX",A2G(AWr),"cR",A2G(AS6),"bF",A2F(ASD),"dJ",A2H(AN8),"iK",A2E(AYN)],Sw,
0,B,[Cm],0,3,0,0,["S",A2F(AQS)],Dh,0,B,[],3,3,0,AOc,0,Cp,0,CE,[],12,3,0,Yo,0,JU,0,B,[],0,3,0,0,0,I5,0,B,[],0,3,0,0,0,AFV,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AJ9,0,Rf,0,B,[BP],3,3,0,0,0,RA,0,B,[Rf],0,3,0,0,["zv",A2G(AOK)],Rg,0,B,[BP],3,3,0,0,0,Ry,0,B,[Rg],0,3,0,0,["zv",A2G(AP4)],AD6,0,B,[],0,3,0,0,0,ACV,0,B,[BP],3,3,0,0,0,AAk,0,B,[],0,3,0,0,0,AB7,0,B,[],3,3,0,0,0,DY,0,B,[],3,3,0,ASm,0]);
$rt_metadata([Hj,0,B,[],3,3,0,0,0,QN,0,B,[Hj],0,3,0,0,["pA",A2H(AVk)],QP,0,B,[Hj],0,3,0,0,0,Uw,0,B,[Cw],0,0,0,0,["bF",A2F(AZi),"ce",A2H(AUA),"bX",A2G(AY1),"cR",A2G(ASe)],X_,0,B,[Y],0,3,0,0,["i",A2F(ATi)],Qi,0,B,[Y],0,3,0,0,["i",A2F(ANM)],Qg,0,B,[Y],0,3,0,0,["i",A2F(ALk)],Qe,0,B,[Y],0,3,0,0,["i",A2F(AJ2)],Qc,0,B,[Y],0,3,0,0,["i",A2F(AYZ)],AI5,0,B,[],0,3,0,0,0,Zy,0,B,[Y],0,3,0,0,["i",A2F(AP6)],Yn,0,B,[Cm],0,3,0,0,["S",A2F(APr)],AHE,0,B,[],0,3,0,0,["bI",A2F(AMI)],YX,0,CS,[],0,3,0,0,0,AH1,0,K$,[],0,0,0,0,["il",
A2G(APA)],HR,0,B,[],0,3,0,0,0,FD,0,HR,[],0,3,0,0,0,PQ,0,B,[Be],0,3,0,0,["l",A2E(ATs)],Jl,0,B,[],0,3,0,0,0,JO,0,B,[],4,3,0,0,0,ADG,0,B,[],0,3,0,0,0,Cq,0,CE,[],12,3,0,AEt,0,AIB,0,B,[],0,3,0,0,0,AEV,0,B,[BP],4,3,0,0,0,AI3,0,B,[],0,3,0,0,0,ACM,0,B,[],3,3,0,0,0,Of,0,B,[NC],0,0,0,0,["z8",A2E(ATa),"wV",A2E(AOs),"jM",A2E(AXy),"km",A2E(AUJ),"gH",A2F(AZp),"x2",A2E(AQL),"nG",A2E(ATJ),"m_",A2G(AOU),"oZ",A2F(AOH),"nm",A2E(K3)],AIu,0,G$,[],0,0,0,0,["wk",A2F(AZu)],Qy,0,B,[Y],0,3,0,0,["i",A2F(AKk)],Qx,0,B,[Y],0,3,0,0,["i",
A2F(AKQ)],C2,0,B,[BP],1,3,0,0,0,AGm,0,C2,[],1,3,0,0,0,AHc,0,C2,[],1,3,0,0,0,AD$,0,C2,[],1,3,0,0,0,AEp,0,C2,[],1,3,0,0,0,AHI,0,C2,[],1,3,0,0,0,PL,0,B,[Be],0,3,0,0,["l",A2E(AY0)],AAG,0,B,[Be],0,3,0,0,["l",A2E(AQv)],GS,0,CE,[],12,3,0,ASf,0,PW,0,B,[BH],0,3,0,0,["be",A2F(AKB)],TW,0,B,[],0,3,0,0,0,ADv,0,B,[],0,3,0,0,0,FX,0,B,[],0,3,0,0,0,AEL,0,B,[],4,3,0,0,0,Xx,0,B,[],0,0,0,0,0,WZ,0,B,[Fc],0,3,0,0,["ht",A2G(AWY)],WY,0,B,[FJ],0,3,0,0,["da",A2E(AZR)],W1,0,B,[EC],0,3,0,0,["dJ",A2H(AK3)],W0,0,B,[C1],0,3,0,0,0,Qu,0,B,
[Cw],0,0,0,0,["bX",A2G(AXA),"cR",A2G(AKm),"ce",A2H(AUV),"bF",A2F(AZP)]]);
$rt_metadata([AES,0,B,[BP],1,3,0,0,0,Zp,0,B,[Eg],0,3,0,0,["da",A2E(AZb)],AGh,0,B,[],3,3,0,0,0,MJ,0,B,[],3,3,0,0,0,S2,0,B,[MJ],0,3,0,0,["u5",A2F(AL9)],PG,0,B,[BH],0,3,0,0,["be",A2F(AXz)],AGW,0,B,[],0,3,0,0,0,Sl,0,B,[C1],0,3,0,0,0,ACR,0,B,[],0,3,0,0,0,YD,0,B,[],0,3,0,0,0,M2,0,B,[],0,3,0,0,0,Vn,0,B,[],3,3,0,0,0,Yx,0,B,[Y],0,3,0,0,["i",A2F(AL$)],Fo,0,B,[],3,3,0,0,0,PB,0,B,[Fo],0,0,0,0,["cA",A2E(B5),"b2",A2E(B7),"m7",A2E(TQ)],S8,0,B,[Be],0,3,0,0,["l",A2E(Vs)],AFH,0,B,[],3,3,0,0,0,Go,0,Jq,[],0,3,0,0,0,AA6,0,Fb,[],
0,3,0,0,0,ABa,0,B,[Y],0,3,0,0,["i",A2F(AJO)],YN,0,B,[Y],0,3,0,0,["i",A2F(AX6)],ABT,0,B,[Be],0,3,0,0,["l",A2E(AVJ)],ABl,0,D$,[CJ],0,3,0,0,0,F_,0,B,[],0,0,0,0,0,IB,0,B,[],4,3,0,0,0,YH,0,B,[],0,3,0,0,0,No,0,B,[],1,3,0,0,0,ZA,0,B,[CJ],0,3,0,0,["bI",A2F(AJ4),"on",A2E(AVc),"lu",A2F(AUG)],AFb,0,C2,[],1,3,0,0,0,SX,0,B,[Y],0,3,0,0,["i",A2F(AK1)],Tl,0,B,[Y],0,3,0,0,["i",A2F(ASU)],Tf,0,EX,[FK],0,3,0,0,["z8",A2E(ATa),"wV",A2E(AOs),"cH",A2E(AX4),"il",A2G(ANo),"dh",A2F(AKa),"mc",A2F(AUD),"mn",A2F(AWs),"bF",A2F(ARn),"bX",
A2G(AOi),"ce",A2H(AU0),"h_",A2F(AWR)],OZ,0,B,[Be],0,3,0,0,["l",A2E(AOO)],Q3,0,EX,[],0,3,0,0,["iK",A2E(AYS),"mc",A2F(AUM),"dh",A2F(AZk),"mn",A2F(AKF)],RR,0,B,[Y],0,3,0,0,0,UR,0,D$,[CJ],0,3,0,0,0,VE,0,B,[Y],0,3,0,0,["i",A2F(ASP)],Rj,0,B,[Be],0,3,0,0,["l",A2E(AWA)],Ru,0,B,[Be],0,3,0,0,["l",A2E(AK0)],W$,0,B,[],0,3,0,0,0,Jn,0,B,[],0,3,0,0,0,ND,0,B,[],3,3,0,0,0,Xi,0,B,[],0,3,0,0,0,VQ,0,B,[Be],0,3,0,0,["l",A2E(ALn)],Lv,0,B,[],0,3,0,0,0,CY,0,Bt,[],0,3,0,0,0,AGE,0,Fb,[],0,3,0,0,0,Xv,0,B,[Y],0,3,0,0,["i",A2F(APR)],ADL,
0,B,[],3,3,0,0,0,AIJ,0,B,[],0,3,0,0,0]);
$rt_metadata([UJ,0,B,[Y],0,3,0,0,["i",A2F(AS4)],U0,0,B,[Y],0,3,0,0,["i",A2F(ANI)],UZ,0,B,[Y],0,3,0,0,["i",A2F(AX3)],ABd,0,B,[Y],0,3,0,0,["i",A2F(AK8)],LC,0,No,[],1,3,0,0,0,WB,0,LC,[],0,3,0,0,0,AAj,0,B,[Y],0,3,0,0,0,ABL,0,B,[Y],0,3,0,0,["i",A2F(AXV)],Q8,0,B,[Eg],0,3,0,0,["da",A2E(AKs)],Q7,0,B,[Eg],0,3,0,0,["da",A2E(AOa)],VC,0,B,[Eg],0,3,0,0,["da",A2E(ATZ)],Wd,0,B,[Be],0,3,0,0,["l",A2E(AXL)],Uy,0,B,[Eg],0,3,0,0,["da",A2E(AR0)],U8,0,B,[BY],0,3,0,0,["Y",A2F(AYw)],AFe,0,B,[BP],1,3,0,0,0,Zm,0,B,[BY],0,3,0,0,["Y",
A2F(AOz)],AFU,0,B,[BH],0,3,0,0,0,AG$,0,B,[BH],0,3,0,0,0,Px,0,B,[Y],0,3,0,0,["i",A2F(AMK)],Pw,0,B,[Y],0,3,0,0,["i",A2F(AV6)],Zj,0,B,[Be],0,3,0,0,["l",A2E(ALE)],HG,0,Bt,[],0,3,0,0,0,RZ,0,B,[Eo],0,3,0,0,0,AHP,0,B,[],0,3,0,0,0,VK,0,D8,[Em,CW],0,3,0,0,0,Zk,0,B,[],0,3,0,0,0,Y0,0,B,[],0,3,0,0,0,Wj,0,B,[Y],0,3,0,0,["i",A2F(AV_)],ACe,0,B,[Y],0,3,0,0,["i",A2F(APH)],Rd,0,B,[Y],0,3,0,0,["i",A2F(AZq)],Xu,0,B,[Y],0,3,0,0,["i",A2F(ASB)],Sd,0,D$,[CJ],0,3,0,0,0,Jr,0,B,[],4,3,0,0,0,AA4,0,B,[Be],0,3,0,0,["l",A2E(AZY)],AA5,0,B,
[Be],0,3,0,0,["l",A2E(AJo)],AA7,0,B,[Be],0,3,0,0,["l",A2E(ALN)],AA8,0,B,[Be],0,3,0,0,["l",A2E(AYW)],AA9,0,B,[Be],0,3,0,0,["l",A2E(ARQ)],Os,0,B,[BY],0,3,0,0,["Y",A2F(AZU)],ABP,0,B,[],3,3,0,A1M,0,Zv,0,B,[MJ],0,3,0,0,["u5",A2F(Lz)],Te,0,B,[Y],0,3,0,0,["i",A2F(AMg)],Un,0,B,[Y],0,3,0,0,["i",A2F(ATy)],XG,0,B,[],0,3,0,0,0,ABh,0,B,[Hj],0,3,0,0,["pA",A2H(AYe)],Ea,0,Bt,[],0,3,0,0,0,PJ,0,B,[],0,3,0,0,0,XU,0,B,[],3,3,0,A0W,0,YC,0,B,[Y],0,3,0,0,["i",A2F(ALz)],AHZ,0,B,[],0,3,0,0,0]);
$rt_metadata([Wq,0,B,[],0,0,0,0,0,ADA,0,B,[],3,3,0,0,0,Tu,0,B,[NE],3,3,0,0,0,PC,0,B,[Tu],3,3,0,0,0,HJ,0,B,[PC],1,3,0,0,0,Va,0,HJ,[],0,3,0,0,0,Tj,0,B,[],3,3,0,0,0,Or,0,B,[Y],0,3,0,0,0,Iz,0,G6,[],0,0,0,0,0,ABr,0,B,[BY],0,3,0,0,["Y",A2F(AVV)],ABq,0,B,[BY],0,3,0,0,["Y",A2F(AM_)],AAp,0,B,[BY],0,3,0,0,["Y",A2F(AO3)],AAo,0,B,[BY],0,3,0,0,["Y",A2F(AP3)],N7,0,B,[Y],0,3,0,0,["i",A2F(AK2)],AC4,0,B,[Y],0,3,0,0,0,ABm,0,B,[Cx],0,3,0,0,["cm",A2F(AOQ)],ADM,0,B,[],0,3,0,0,0,AI$,0,B,[],0,3,0,0,0,AA$,0,B,[Be],0,3,0,0,["l",A2E(AKJ)],AA_,
0,B,[Be],0,3,0,0,["l",A2E(APz)],FV,0,B,[],0,3,0,0,0,AB1,0,B,[Y],0,3,0,0,["i",A2F(AOV)],L1,0,FV,[],0,3,0,0,0,Lx,0,FV,[],0,3,0,0,0,ZN,0,B,[Y],0,3,0,0,["i",A2F(AKP)],So,0,B,[],0,3,0,0,0,Re,0,B,[Y],0,3,0,0,["i",A2F(ASg)],Ti,0,B,[Eo],0,3,0,0,["S",A2F(AZW)],JX,0,Ea,[],0,3,0,0,0,IO,0,Bt,[],0,3,0,0,0,M5,0,Bt,[],0,3,0,0,0,RM,0,B,[Y],0,3,0,0,["i",A2F(ATY)],AI6,0,B,[Y],0,3,0,0,0,Se,0,B,[Be],0,3,0,0,["l",A2E(ALO)],SZ,0,B,[Tj],0,3,0,0,0,VD,0,B,[Be],0,3,0,0,["l",A2E(AKN)],R2,0,B,[],1,3,0,0,0,Hq,0,B,[],0,3,0,0,0,Rp,0,B,[GF],
3,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],E6,0,Fg,[Rp],1,3,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],RJ,0,E6,[],0,0,0,0,["nP",A2F(AQw)],NW,0,B,[Y],0,3,0,0,["i",A2F(ANZ)],Yq,0,B,[Y],0,3,0,0,["i",A2F(ARl)],J6,0,B,[],0,3,0,0,["bI",A2F(AGc)],Nn,0,J6,[],0,3,0,0,["bI",A2F(ALu)],EZ,0,B,[],0,3,0,0,["bI",A2F(ADp)],GQ,0,EZ,[],0,3,0,0,0,JD,0,EZ,[],0,3,0,0,["bI",A2F(AX_)],J0,0,EZ,[],0,3,0,0,["bI",A2F(AKp)],AFE,0,B,[HC],0,3,0,0,0]);
$rt_metadata([AEJ,0,HJ,[],0,3,0,0,0,UC,0,B,[Be],0,3,0,0,["l",A2E(APQ)],UD,0,B,[Be],0,3,0,0,["l",A2E(AMm)],UA,0,B,[Be],0,3,0,0,["l",A2E(AKK)],UB,0,B,[Be],0,3,0,0,["l",A2E(APJ)],TL,0,B,[Be],0,3,0,0,["l",A2E(AU4)],TK,0,B,[Be],0,3,0,0,["l",A2E(ATg)],TJ,0,B,[Be],0,3,0,0,["l",A2E(AZH)],Rs,0,B,[Be],0,3,0,0,["l",A2E(ATb)],SY,0,B,[],3,3,0,0,0,Sz,0,B,[Be],0,3,0,0,["l",A2E(AL8)],AGQ,0,B,[],0,3,0,0,0,ADi,0,B,[],0,3,0,0,0,WH,0,B,[HC],0,3,0,0,["o8",A2G(AOR)],Zr,0,B,[],0,3,0,0,0,AAd,0,BE,[],0,3,0,0,0,Pc,0,B,[Be],0,3,0,0,["l",
A2E(AQq)],Pd,0,B,[Be],0,3,0,0,["l",A2E(AXg)],Pb,0,B,[Be],0,3,0,0,["l",A2E(AJk)],AAn,0,B,[Be],0,3,0,0,["l",A2E(ARv)],AAm,0,B,[Be],0,3,0,0,["l",A2E(AVu)],Rn,0,B,[Eg],0,3,0,0,["da",A2E(ANe)],Vh,0,B,[Be],0,3,0,0,["l",A2E(AP1)],Vi,0,B,[Be],0,3,0,0,["l",A2E(AWT)],ABZ,0,B,[Be],0,3,0,0,["l",A2E(AJD)],ABU,0,B,[Be],0,3,0,0,["l",A2E(AP5)],ABV,0,B,[Be],0,3,0,0,["l",A2E(AYE)],ABW,0,B,[Be],0,3,0,0,["l",A2E(ARO)],ABX,0,B,[Be],0,3,0,0,["l",A2E(APh)],Og,0,B,[Eg],0,3,0,0,["da",A2E(AXa)],AAZ,0,B,[BH],0,3,0,0,0,Yt,0,B,[HC],0,3,
0,0,["o8",A2G(AU6)],Fx,0,B,[],0,3,0,0,0,SU,0,B,[BY],0,3,0,0,["Y",A2F(ANn)],AIF,0,B,[CJ],0,3,0,0,["bI",A2F(ATh)],OT,0,B,[Y],0,3,0,0,["i",A2F(ARj)],ACf,0,B,[Y],0,3,0,0,["i",A2F(AZS)],JM,0,B,[BP],3,3,0,0,0,On,0,B,[JM],0,3,0,0,["u3",A2E(AP9)],N3,0,B,[JM],0,3,0,0,["u3",A2E(AJp)],XL,0,B,[Hj],0,3,0,0,0,ABp,0,B,[BY],0,3,0,0,["Y",A2F(APn)],Ln,0,E6,[],1,0,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],YO,0,Ln,[],0,0,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],MA,0,D8,[],1,0,0,0,0,YL,0,MA,[],0,0,0,0,0,Nd,0,EY,[Ms],1,0,0,0,["e7",A2F(AJm),"hQ",
A2E(AM2),"oW",A2F(AR8),"nP",A2F(AQD)],YM,0,Nd,[],0,0,0,0,["e7",A2F(AJm),"nO",A2F(ASi),"cY",A2E(ARb),"b_",A2E(ANB),"eo",A2E(AKx)],YJ,0,B,[Fo],0,0,0,0,["cA",A2E(AKb),"b2",A2E(ATX),"m7",A2E(AVM)],RY,0,B,[Fo],3,3,0,0,0]);
$rt_metadata([YK,0,B,[RY],0,0,0,0,0,ACp,0,B,[HT],0,3,0,0,0,Fp,0,B,[],0,0,0,0,0,VR,0,Fp,[Fo],0,0,0,0,0,ADy,0,B,[Y],0,0,0,0,0,TV,0,B,[CW],4,3,0,0,0,UX,0,B,[Y],0,3,0,0,["i",A2F(AR4)],UW,0,B,[Y],0,3,0,0,["i",A2F(AUH)],X0,0,E6,[],0,0,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],RK,0,Fg,[],0,0,0,0,["e7",A2F(AJm),"nP",A2F(AQw)],QC,0,B,[Y],0,3,0,0,["i",A2F(AMT)],Ox,0,B,[],0,3,0,0,0,TX,0,B,[],0,3,0,0,0,Hh,0,B,[],3,3,0,0,0,WL,0,B,[Hh],0,3,0,0,["kE",A2H(ASl)],WM,0,B,[Hh],0,3,0,0,["kE",A2H(APo)],IZ,0,B,[CW,CJ],0,3,0,0,0,KL,0,B,[],
3,3,0,0,0,Uv,0,B,[KL],0,3,0,0,0,Q1,0,B,[KL],3,3,0,0,0,AFI,0,B,[Q1],0,3,0,0,0,U5,0,B,[Hh],0,3,0,0,["kE",A2H(ATc)],U4,0,B,[Eo],0,3,0,0,["S",A2F(AYl)],U3,0,B,[Eo],0,3,0,0,["S",A2F(AUR)],U7,0,B,[Hh],0,3,0,0,["kE",A2H(ASz)],ACr,0,B,[Y],0,3,0,0,["i",A2F(AOn)],Gv,0,CE,[],12,0,0,Vx,0,BQ,0,B,[],1,0,0,0,["cr",A2H(Iu),"cy",A2I(IL),"i6",A2E(ALL),"R",A2F(AXn),"bY",A2F(AXl),"f5",A2E(AYx),"eS",A2E(J5)],O6,0,B,[Be],0,3,0,0,["l",A2E(APf)],ACg,0,B,[Y],0,3,0,0,["i",A2F(ATj)],ACh,0,B,[Y],0,3,0,0,["i",A2F(AOp)],VG,0,B,[Y],0,3,0,
0,["i",A2F(AUX)],P7,0,B,[Y],0,3,0,0,["i",A2F(AQ4)],WJ,0,B,[],32,0,0,A1v,0,CZ,0,BQ,[],0,0,0,NG,["c",A2H(AKX),"L",A2F(ALp)],Hk,0,B,[],0,0,0,0,0,JG,0,BR,[],0,3,0,0,0,Qb,0,B,[Be],0,3,0,0,["l",A2E(AJ_)],AA0,0,B,[BY],0,3,0,0,["Y",A2F(AUe)],AF_,0,B,[BP],3,3,0,0,0,Xp,0,B,[BY],0,3,0,0,["Y",A2F(ATQ)],Ur,0,CZ,[],0,0,0,0,["c",A2H(AKe),"L",A2F(AVC)],ABK,0,CZ,[],0,0,0,0,["c",A2H(AMz)],Sq,0,CZ,[],0,0,0,0,["c",A2H(ALG)],VS,0,CZ,[],0,0,0,0,["c",A2H(AKl),"L",A2F(AT0)],F7,0,CZ,[],0,0,0,0,["c",A2H(AXO)],B_,0,BQ,[],1,0,0,0,["c",
A2H(AZj),"b3",A2E(AWE),"L",A2F(AQh)],AHU,0,B_,[],0,0,0,0,["bz",A2G(AV4),"cr",A2H(AN7),"cy",A2I(AMq),"L",A2F(AKj)],B6,0,BQ,[],0,0,0,0,["c",A2H(AOZ),"R",A2F(ATS),"bY",A2F(ARc),"L",A2F(AUF),"eS",A2E(AMk)],JW,0,B6,[],0,0,0,0,["c",A2H(ATv),"L",A2F(AU7)]]);
$rt_metadata([D1,0,JW,[],0,0,0,0,["c",A2H(AM9),"R",A2F(AUO)],Ol,0,D1,[],0,0,0,0,["c",A2H(ATN),"L",A2F(AXt)],ZG,0,D1,[],0,0,0,0,["c",A2H(ALj),"L",A2F(AWL)],T1,0,D1,[],0,0,0,0,["c",A2H(AMf),"L",A2F(AZN)],WC,0,D1,[],0,0,0,0,["c",A2H(AJK),"L",A2F(AVp)],G7,0,B6,[],0,0,0,0,["c",A2H(AJ7),"cr",A2H(ARA),"cy",A2I(AVG),"bY",A2F(AQ8),"f5",A2E(ATV),"eS",A2E(AYB)],Hn,0,B,[],1,0,0,0,0,W,0,Hn,[],1,0,0,Q5,["dC",A2E(ALm),"fs",A2E(AKH),"kK",A2E(AWw),"h3",A2E(AYs)],ADW,0,W,[],0,0,0,0,["p",A2F(C9),"dC",A2E(C4),"fs",A2E(AN0),"kK",
A2E(AW8),"cP",A2E(ASF),"h3",A2E(AOh)],Kd,0,Bt,[],0,3,0,0,0,Ek,0,BQ,[],1,0,0,0,["bY",A2F(AVH),"L",A2F(AXD),"eS",A2E(AR2)],C$,0,Ek,[],0,0,0,0,["c",A2H(AJM)],FG,0,C$,[],0,0,0,0,["c",A2H(AKZ)],C0,0,Ek,[],0,0,0,0,["c",A2H(AJ6)],EW,0,C$,[],0,0,0,0,["c",A2H(ARJ),"R",A2F(AZT)],ZX,0,C$,[],0,0,0,0,["c",A2H(AY_),"cr",A2H(ASA)],Bf,0,B,[],1,0,0,0,0,Do,0,BR,[],0,3,0,0,0,OK,0,Hn,[Em],0,0,0,0,["cP",A2E(ASK)],Qt,0,BQ,[],0,0,0,0,["c",A2H(AQJ),"L",A2F(ATR)],AAP,0,B,[Em,CW],0,3,0,0,0,Oy,0,B6,[],0,0,0,0,0,Tb,0,B6,[],0,0,0,0,["c",
A2H(AKT),"R",A2F(ATt),"L",A2F(ALP),"bY",A2F(ALl)],DM,0,B6,[],0,0,0,0,["c",A2H(ANP),"p",A2F(AOx),"bY",A2F(AKO),"R",A2F(AWl),"L",A2F(AN4)],J$,0,DM,[],0,0,0,0,["p",A2F(AQi)],ADK,0,B_,[],0,0,0,0,["bz",A2G(AQK)],Ex,0,B_,[],0,0,0,0,["bz",A2G(NZ),"bY",A2F(ATU)],Q6,0,B6,[],0,0,0,0,["R",A2F(ARH),"c",A2H(AJB),"bY",A2F(ALB),"L",A2F(AXb)],EI,0,B_,[],0,0,0,0,["b3",A2E(AQp),"bz",A2G(APc),"cr",A2H(ANK),"cy",A2I(AQy),"bY",A2F(AW2)],AIz,0,B_,[],0,0,0,0,["bz",A2G(AJq)],ACH,0,B_,[],0,0,0,0,["bz",A2G(AJV)],FQ,0,B6,[],0,0,0,0,["R",
A2F(AYA),"c",A2H(ATu),"bY",A2F(AQM),"L",A2F(AUP)],ABo,0,FQ,[],0,0,0,0,0,WU,0,FQ,[],0,0,0,0,0,ACu,0,C0,[],0,0,0,0,["c",A2H(AMH)],Sg,0,C0,[],0,0,0,0,["c",A2H(ASn)],Gp,0,C0,[],0,0,0,0,["c",A2H(AWi),"R",A2F(AXU)],RP,0,Gp,[],0,0,0,0,["c",A2H(AQs),"R",A2F(ASO)],FO,0,C0,[],0,0,0,0,["c",A2H(AZJ)],OY,0,FO,[],0,0,0,0,["c",A2H(APL)],Uj,0,C0,[],0,0,0,0,["c",A2H(AYK)],Tm,0,Gp,[],0,0,0,0,["c",A2H(ALS)],X4,0,FO,[],0,0,0,0,["c",A2H(AKv)],Uk,0,Ek,[],0,0,0,0,["c",A2H(AZs),"cr",A2H(AWz)],QE,0,Ek,[],0,0,0,0,["c",A2H(ATW),"cr",
A2H(AJF)],Fe,0,B,[],1,0,0,0,0,ACv,0,C$,[],0,0,0,0,["c",A2H(AKw)],ZT,0,EW,[],0,0,0,0,["c",A2H(ASk)],Rv,0,FG,[],0,0,0,0,["c",A2H(AVK)],Th,0,C$,[],0,0,0,0,["c",A2H(ATP)]]);
$rt_metadata([Xc,0,EW,[],0,0,0,0,["c",A2H(AKL)],T2,0,FG,[],0,0,0,0,["c",A2H(AV8)],LB,0,BQ,[],4,0,0,0,["c",A2H(ARa),"L",A2F(AP2)],AEr,0,BQ,[],0,0,0,0,["c",A2H(ALg),"L",A2F(ALx)],Qz,0,BQ,[],0,0,0,0,["c",A2H(AQk),"L",A2F(AZC)],AAW,0,BQ,[],4,0,0,0,["c",A2H(AUw),"L",A2F(AMt)],AAi,0,BQ,[],0,0,0,0,["c",A2H(ATo),"L",A2F(AJn)],Pe,0,BQ,[],0,0,0,0,["c",A2H(AMi),"L",A2F(AON)],AIg,0,B6,[],0,0,0,0,["c",A2H(AYU),"R",A2F(ALD),"i6",A2E(ASX),"L",A2F(ALC)],ADU,0,B6,[],4,0,0,0,["c",A2H(ATd),"R",A2F(AVx),"i6",A2E(AJh),"L",A2F(AZg)],AH5,
0,BQ,[],4,0,0,0,["c",A2H(AQT),"L",A2F(AOI)],AF9,0,BQ,[],0,0,0,0,["c",A2H(ATl),"L",A2F(AOt)],ACE,0,BQ,[],0,0,0,0,["c",A2H(APP),"L",A2F(AMx)],HL,0,B6,[],0,0,0,0,["c",A2H(AKD),"R",A2F(AUL),"L",A2F(AU$)],AIa,0,HL,[],0,0,0,0,["c",A2H(AMF),"cr",A2H(AXq),"cy",A2I(AKf),"bY",A2F(AR_)],AE$,0,HL,[],0,0,0,0,["c",A2H(ARt)],Qs,0,GU,[IQ],0,3,0,0,["n1",A2I(AOk),"mV",A2H(ALo),"jj",A2F(AL3),"oI",A2G(AWD)],Um,0,B_,[],0,0,0,0,["bz",A2G(AM5),"cr",A2H(ALb),"cy",A2I(AOM),"bY",A2F(APp)],ACD,0,B_,[],0,0,0,0,["bz",A2G(ARC)],O4,0,B_,
[],0,0,0,0,["bz",A2G(AVN)],HK,0,B,[],4,0,0,AVn,0,Oc,0,B_,[],0,0,0,0,["bz",A2G(AVU)],L$,0,B6,[],0,0,0,0,["R",A2F(ATL),"c",A2H(AMu),"cr",A2H(APm),"cy",A2I(ANb),"bY",A2F(AKd),"L",A2F(AWN)],Mq,0,B6,[],0,0,0,0,["R",A2F(AL2),"c",A2H(AJL),"cr",A2H(AT9),"cy",A2I(AVL),"bY",A2F(AM6),"L",A2F(AUj)],D9,0,B_,[],0,0,0,0,["bz",A2G(AU_),"cr",A2H(ASG),"cy",A2I(AL1),"bY",A2F(AUU)],Yz,0,Fe,[],0,0,0,0,["iU",A2F(AMc),"wz",A2G(AU3)],YA,0,Fe,[],0,0,0,0,["iU",A2F(AV9),"wz",A2G(AYn)],AG6,0,B,[],0,0,0,0,0,AC0,0,B,[],0,0,0,0,0,L6,0,Bf,
[],0,0,0,0,["F",A2E(AFi)],K7,0,Bf,[],0,0,0,0,["F",A2E(AFZ)],AGZ,0,Bf,[],0,0,0,0,["F",A2E(AVA)],AHz,0,Bf,[],0,0,0,0,["F",A2E(AWP)],AHC,0,Bf,[],0,0,0,0,["F",A2E(ANQ)],L0,0,Bf,[],0,0,0,0,["F",A2E(ADY)],MC,0,L0,[],0,0,0,0,["F",A2E(AEO)],AI8,0,Bf,[],0,0,0,0,["F",A2E(APk)],NU,0,MC,[],0,0,0,0,["F",A2E(ACB)],AFy,0,NU,[],0,0,0,0,["F",A2E(AR3)],AFS,0,Bf,[],0,0,0,0,["F",A2E(AMX)],AEj,0,Bf,[],0,0,0,0,["F",A2E(ARY)],AD7,0,Bf,[],0,0,0,0,["F",A2E(AYr)],AHH,0,Bf,[],0,0,0,0,["F",A2E(AST)],AJg,0,Bf,[],0,0,0,0,["F",A2E(AJC)],AG7,
0,Bf,[],0,0,0,0,["F",A2E(APV)],AGP,0,Bf,[],0,0,0,0,["F",A2E(AVg)],AHW,0,Bf,[],0,0,0,0,["F",A2E(AMU)],ADg,0,Bf,[],0,0,0,0,["F",A2E(ANm)],ACT,0,Bf,[],0,0,0,0,["F",A2E(AYk)],AHg,0,Bf,[],0,0,0,0,["F",A2E(AJs)]]);
$rt_metadata([AHs,0,Bf,[],0,0,0,0,["F",A2E(AQX)],AEH,0,Bf,[],0,0,0,0,["F",A2E(ANy)],AFW,0,Bf,[],0,0,0,0,["F",A2E(AOS)],AIP,0,Bf,[],0,0,0,0,["F",A2E(AQZ)],AHo,0,Bf,[],0,0,0,0,["F",A2E(AXf)],AE7,0,Bf,[],0,0,0,0,["F",A2E(AUt)],AEF,0,Bf,[],0,0,0,0,["F",A2E(ASH)],AJc,0,Bf,[],0,0,0,0,["F",A2E(AVs)],Kp,0,Bf,[],0,0,0,0,["F",A2E(AFT)],AH0,0,Kp,[],0,0,0,0,["F",A2E(ASu)],AFC,0,L6,[],0,0,0,0,["F",A2E(AK9)],AEz,0,K7,[],0,0,0,0,["F",A2E(AO9)],AEa,0,Bf,[],0,0,0,0,["F",A2E(ARe)],AEu,0,Bf,[],0,0,0,0,["F",A2E(AX8)],AFo,0,Bf,
[],0,0,0,0,["F",A2E(AOo)],AFz,0,Bf,[],0,0,0,0,["F",A2E(AJt)],AEe,0,B,[],4,0,0,0,0,ADH,0,B,[],4,3,0,0,0,Ph,0,B,[],0,3,0,0,0,AHj,0,B,[],0,3,0,0,0,AE4,0,B,[],4,3,0,0,0,XP,0,Fp,[Fo],0,0,0,0,0,T0,0,Fp,[Fo],0,0,0,0,0,ADV,0,B,[Eo],0,3,0,0,0,Ve,0,B,[Y],0,3,0,0,["i",A2F(AOG)],T_,0,B,[Y],0,3,0,0,["i",A2F(AMp)],Qm,0,B,[Be],0,3,0,0,0,Yv,0,B,[Eo],0,0,0,0,["S",A2F(ANW)],Wz,0,B,[Y],0,3,0,0,0,X1,0,B,[Y],0,3,0,0,0,ZW,0,W,[],0,0,0,0,["p",A2F(ANY)],ZV,0,W,[],0,0,0,0,["p",A2F(AJ3)],QJ,0,W,[],0,0,0,0,["p",A2F(AQ6),"cP",A2E(AOW)],QU,
0,W,[],0,0,0,0,["p",A2F(AVe)],QS,0,W,[],0,0,0,0,["p",A2F(AVT)],QT,0,W,[],0,0,0,0,["p",A2F(ARB)],QX,0,W,[],0,0,0,0,["p",A2F(ANs)],QY,0,W,[],0,0,0,0,["p",A2F(AJi)],QV,0,W,[],0,0,0,0,["p",A2F(AO1)],QW,0,W,[],0,0,0,0,["p",A2F(ARF)],QZ,0,W,[],0,0,0,0,["p",A2F(AXu)],Q0,0,W,[],0,0,0,0,["p",A2F(AMM)],QI,0,W,[],0,0,0,0,["p",A2F(AZX)],RB,0,W,[],0,0,0,0,["p",A2F(AO7)],QG,0,W,[],0,0,0,0,["p",A2F(AML)],QH,0,W,[],0,0,0,0,["p",A2F(AOD)],QM,0,W,[],0,0,0,0,["p",A2F(AQm)],QF,0,W,[],0,0,0,0,["p",A2F(AWZ)],QK,0,W,[],0,0,0,0,["p",
A2F(ALr)],QL,0,W,[],0,0,0,0,["p",A2F(AUh)]]);
$rt_metadata([M9,0,B,[],3,3,0,0,0,Vt,0,B,[M9],4,3,0,0,0,C7,0,B,[],3,3,0,AHF,0,Cv,0,CE,[],12,3,0,AGD,0,DI,0,B,[],3,3,0,AKr,0,ABx,0,B,[Y],0,3,0,0,["i",A2F(AXM)],OQ,0,G7,[],0,0,0,0,["cr",A2H(AOr),"cy",A2I(AZI),"f5",A2E(AMs)],S9,0,Bt,[],0,3,0,0,0,ABf,0,Bt,[],0,3,0,0,0,Yu,0,Go,[],0,3,0,0,0,ST,0,Go,[],0,3,0,0,0,NN,0,Bt,[],0,3,0,0,0,ZI,0,B,[Y],0,3,0,0,0,ZH,0,B,[Y],0,3,0,0,["i",A2F(AXh)],Yl,0,B,[],0,3,0,0,0,ADc,0,B,[],0,3,0,0,0,RV,0,B,[Y],0,3,0,0,["i",A2F(AQQ)],ADF,0,B,[],3,3,0,0,0,SH,0,B,[JM],0,3,0,0,["u3",A2E(ARm)],Xn,
0,B,[Y],0,3,0,0,0,Xq,0,B,[Y],0,3,0,0,["i",A2F(AXZ)],Yr,0,B,[M9],0,0,0,0,0,AAl,0,B,[Be],0,3,0,0,["l",A2E(APD)],V$,0,W,[],0,0,0,0,["p",A2F(AXN)],Oq,0,W,[],0,0,0,0,["p",A2F(AK5)],UG,0,W,[],0,0,0,0,["p",A2F(AKI)],UF,0,W,[],0,0,0,0,["p",A2F(AOm)],AAw,0,W,[],0,0,0,0,["p",A2F(AP_)],Rm,0,W,[],0,0,0,0,["p",A2F(AXQ)],Qo,0,W,[],0,0,0,0,["p",A2F(ATF)],TD,0,W,[],0,0,0,0,["p",A2F(AVm)],Ok,0,W,[],0,0,0,0,["p",A2F(AZd)],Oo,0,W,[],0,0,0,0,["p",A2F(ANa)],PT,0,W,[],0,0,0,0,["p",A2F(AX2)],RU,0,W,[],0,0,0,0,["p",A2F(ARV)],R4,0,
W,[],0,0,0,0,["p",A2F(AUI)],WO,0,W,[],0,0,0,0,["p",A2F(AXv)],Vu,0,W,[],0,0,0,0,["p",A2F(AYF)],OG,0,W,[],0,0,0,0,["p",A2F(AMV)],Ny,0,W,[],0,0,0,0,["p",A2F(ATI)],Uu,0,Ny,[],0,0,0,0,["p",A2F(AWm)],AA1,0,B,[BY],0,3,0,0,["Y",A2F(AOP)],AA3,0,B,[BY],0,3,0,0,["Y",A2F(ALq)],YZ,0,B,[BY],0,3,0,0,["Y",A2F(AUv)],Y1,0,B,[BY],0,3,0,0,["Y",A2F(ASY)],XN,0,B,[BY],0,3,0,0,["Y",A2F(ARh)],ADt,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.TU=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","FATAL: WebGL is not enabled in the browser","#wasm","#diffDemo","","null","Patter is null","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null","[",", ","]","navigator.clipboard is undefined","Illegal argument javaObject instanceof ","keydown","keyup","mousemove",
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
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#F7F8FA","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","DiffUtils.findDiffs","ClassL.java","ClassR.java","selectScene ","CodiconDemo",
"RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowMinDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas","Segoe UI","#e3c8ab","#39322b","hello string",
"withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","Project root","root.countAll() = ","DiffMiddleLine","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >",
"open ...","font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","ns-resize","ew-resize",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile",
"/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN"," name: ","File is too large: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40",
"#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","Folder ","ClassFile ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ",
"callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",
", item ","trying to display with unknown screen size and dpr","onContextMenu","tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","nwse-resize","nesw-resize","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF",
"#787878","onEnter item ","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","open file ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/Viewport parsed in ","Illegal language: ","/Model::onFileIterativeParsed","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ",
"showDirectoryPicker -> ","Expected "," ints to write, but "," written","/First lines parsed in ","/File structure parsed in ","Int","Iter","VP","Resolve","Rep","No definition or usages","fib(",") result = ",") time = ","/Resolved in ","readClipboardText error: "," ints to read, but "," read","Unknown scope type: ","Current Version: ","Last Parsed Version: ","Unexpected type: ","Unexpected ref node type: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct",
"Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks",
"Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement",
"CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B",
"MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA",
"YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn",
"Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = "]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ALV(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CN=Long_add;var IW=Long_sub;var Ce=Long_mul;var AHd=Long_div;var AJU=Long_rem;var A0E=Long_or;var C5=Long_and;var A6u=Long_xor;var G3=Long_shl;var A0X=Long_shr;var Gi=Long_shru;var A6v=Long_compare;var Ix=Long_eq;var A6w=Long_ne;var A0z=Long_lt;var AND=Long_le;var A6x=Long_gt;var A0w=Long_ge;var A6y=Long_not;var A1h=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A1l);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=WW.prototype;c.f=c.Y;c=WX.prototype;c.f=c.Y;c=WV.prototype;c.f=c.Y;c=O2.prototype;c.f=c.Y;c=AFB.prototype;c.get=c.OI;Object.defineProperty(c,"length",{get:c.N1});c=AC8.prototype;c.createEntityReference=c.Hb;c.getElementById=c.Lb;c.createTextNode=c.KN;c.hasChildNodes=c.IQ;c.querySelectorAll=c.GI;c.removeChild=c.Nq;c.cloneNode=c.EH;c.createComment=c.PF;c.insertBefore=c.HI;c.getElementsByTagNameNS=c.NW;c.hasAttributes=c.Kf;c.normalize=c.PR;c.hasChildNodesJS=c.PB;c.getElementsByTagName=c.OH;c.appendChild
=c.Fc;c.createAttributeNS=c.LJ;c.dispatchEvent=c.O9;c.replaceChild=c.FL;c.createElementNS=c.H6;c.createCDATASection=c.ND;c.querySelector=c.Ke;c.createElement=c.Mz;c.isSupported=c.NF;c.importNode=c.H3;c.removeEventListener=c.HU;c.createAttribute=c.Pb;c.createDocumentFragment=c.DI;c.createProcessingInstruction=c.G5;c.addEventListener=c.Mv;Object.defineProperty(c,"nodeName",{get:c.Fb});Object.defineProperty(c,"documentElement",{get:c.JE});Object.defineProperty(c,"childNodes",{get:c.Ne});Object.defineProperty(c,
"prefix",{get:c.Ib,set:c.P6});Object.defineProperty(c,"implementation",{get:c.N$});Object.defineProperty(c,"textContent",{get:c.PO,set:c.KL});Object.defineProperty(c,"parentNode",{get:c.K$});Object.defineProperty(c,"nextSibling",{get:c.Jp});Object.defineProperty(c,"nodeType",{get:c.M1});Object.defineProperty(c,"doctype",{get:c.Jd});Object.defineProperty(c,"localName",{get:c.OA});Object.defineProperty(c,"nodeValue",{get:c.IS,set:c.Pp});Object.defineProperty(c,"firstChild",{get:c.OR});Object.defineProperty(c,
"lastChild",{get:c.MK});Object.defineProperty(c,"previousSibling",{get:c.ER});Object.defineProperty(c,"namespaceURI",{get:c.Gm});Object.defineProperty(c,"attributes",{get:c.Ii});Object.defineProperty(c,"ownerDocument",{get:c.GB});c=PU.prototype;c.f=c.Y;c=AD2.prototype;c.removeEventListener=c.GK;c.dispatchEvent=c.HR;c.addEventListener=c.LD;c=YT.prototype;c.onAnimationFrame=c.Kh;c=YR.prototype;c.f=c.zv;c=YP.prototype;c.handleEvent=c.cm;c=Vm.prototype;c.f=c.Y;c=Z5.prototype;c.handleEvent=c.cm;c=Z6.prototype;c.handleEvent
=c.cm;c=Z7.prototype;c.handleEvent=c.cm;c=Z8.prototype;c.handleEvent=c.cm;c=Z9.prototype;c.handleEvent=c.cm;c=Z$.prototype;c.handleEvent=c.cm;c=Z_.prototype;c.handleEvent=c.cm;c=AAa.prototype;c.handleEvent=c.cm;c=AAb.prototype;c.handleEvent=c.cm;c=AAc.prototype;c.handleEvent=c.cm;c=AB8.prototype;c.handleEvent=c.cm;c=AB9.prototype;c.handleEvent=c.cm;c=AB$.prototype;c.handleEvent=c.cm;c=AB_.prototype;c.handleEvent=c.cm;c=XE.prototype;c.handleEvent=c.cm;c=ABA.prototype;c.f=c.Y;c=ABB.prototype;c.f=c.Y;c=Pa.prototype;c.f
=c.Y;c=O_.prototype;c.f=c.Y;c=O9.prototype;c.f=c.Y;c=O8.prototype;c.f=c.Y;c=PK.prototype;c.accept=c.Pq;c=Ot.prototype;c.f=c.Y;c=Ow.prototype;c.f=c.Y;c=Ou.prototype;c.f=c.Y;c=RA.prototype;c.f=c.zv;c=Ry.prototype;c.f=c.zv;c=U8.prototype;c.f=c.Y;c=Zm.prototype;c.f=c.Y;c=Os.prototype;c.f=c.Y;c=ABr.prototype;c.f=c.Y;c=ABq.prototype;c.f=c.Y;c=AAp.prototype;c.f=c.Y;c=AAo.prototype;c.f=c.Y;c=ABm.prototype;c.handleEvent=c.cm;c=SU.prototype;c.f=c.Y;c=On.prototype;c.onTimer=c.u3;c=N3.prototype;c.onTimer=c.u3;c=ABp.prototype;c.f
=c.Y;c=AA0.prototype;c.f=c.Y;c=Xp.prototype;c.f=c.Y;c=SH.prototype;c.onTimer=c.u3;c=AA1.prototype;c.f=c.Y;c=AA3.prototype;c.f=c.Y;c=YZ.prototype;c.f=c.Y;c=Y1.prototype;c.f=c.Y;c=XN.prototype;c.f=c.Y;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);