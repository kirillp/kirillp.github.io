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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.eh=f;}
function $rt_cls(cls){return US(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GT(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cr.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AWp(t);}
function $rt_throwableCause(t){return A5Z(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A_w());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return I4();}
function $rt_setThread(t){return AVK(t);}
function $rt_createException(message){return A_x(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A_y());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BR=$rt_compare;var A_z=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var E6=$rt_isInstance;var A_A=$rt_nativeThread;var A_B=$rt_suspending;var A_C=$rt_resuming;var A_D=$rt_invalidPointer;var C=$rt_s;var Bl=$rt_eraseClinit;var Bb=$rt_imul;var Fh=$rt_wrapException;var A_E=$rt_checkBounds;var A_F=$rt_checkUpperBound;var A_G=$rt_checkLowerBound;var A_H=$rt_wrapFunction0;var A_I=$rt_wrapFunction1;var A_J=$rt_wrapFunction2;var A_K=$rt_wrapFunction3;var A_L=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AL_=$rt_createCharArrayFromData;var A9A=$rt_createByteArrayFromData;var A9_=$rt_createShortArrayFromData;var DL=$rt_createIntArrayFromData;var A_M=$rt_createBooleanArrayFromData;var A_N=$rt_createFloatArrayFromData;var A_O=$rt_createDoubleArrayFromData;var ALr=$rt_createLongArrayFromData;var A_v=$rt_createBooleanArray;var Dh=$rt_createByteArray;var A_P=$rt_createShortArray;var B6=$rt_createCharArray;var BI=$rt_createIntArray;var A_Q=$rt_createLongArray;var AOH=$rt_createFloatArray;var A_R
=$rt_createDoubleArray;var BR=$rt_compare;var A_S=$rt_castToClass;var A_T=$rt_castToInterface;var A_U=Long_toNumber;var Bs=Long_fromInt;var A_V=Long_fromNumber;var D=Long_create;var Ga=Long_ZERO;var A_W=Long_hi;var Hr=Long_lo;
function B(){this.$id$=0;}
function A_X(){var a=new B();AE4(a);return a;}
function AE4(a){}
function BF(a){return US(a.constructor);}
function AT9(a,b){return a!==b?0:1;}
function AHu(a){var b,c;b=AGE(Nr(a));c=new J;L(c);H(H(c,C(0)),b);return K(c);}
function Nr(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ATl(a){var b,c,d;if(!E6(a,Ek)&&a.constructor.$meta.item===null){b=new Wb;Z(b);N(b);}b=AOO(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tr(){var a=this;B.call(a);a.DR=0;a.rB=null;}
function A$W(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;ANJ();AK1();AIy();AJk();AKH();ALS();AGW();AII();AG0();AIa();AJ6();AMW();ANf();AK0();ANd();AI1();AJM();AI9();AMp();ALX();AL5();AN1();AIK();ALx();AId();ANm();ALg();AMP();AKz();ANj();AJ3();c=(AHd()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))AAe(C(1),C(2));else{d=new Tr;BE(d);e=new ADO;e.Cv=d;f=new YJ;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new QD;j.z9
=i;j.z$=g;j.z_=6;j.Aa=e;j.z6=f;k=Bz(j,"f");i.onmessage=k;h=h+1|0;}l=I(MQ,[FC(C(3),C(4),300),FC(C(5),C(6),300),FC(C(7),C(4),400),FC(C(8),C(6),400),FC(C(9),C(4),600),FC(C(10),C(6),600),FC(C(11),C(4),700),FC(C(12),C(6),700)]);m=P(MQ,1);m.data[0]=AWU(C(13),FX(C(14),C(15)),C(4),400);b=(MO(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.vI;f=c.uP;i=new J;L(i);Bq(H(H(i,C(16)),f),41);i=K(i);f=c.uM;o=c.tl;c=A1Y($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BE(d);c=new ADP;c.C_=d;g=new ADN;e.then(Bz(c,"f"),Bz(g,"f"));}}
function AJq(b){var c,d,e,f,g,h,i,j,k;c=new ACK;d=new AB_;e="canvasDiv";f=new U5;f.C5=c;c.vp=f;f=new U3;f.t6=c;c.pB=f;g=new U4;g.rx=c;c.w2=new $rt_globals.ResizeObserver(Bz(g,"f"));f=new U2;f.xf=c;c.yM=f;c.mf=1;c.p5=e;h=new ACt;f=new Vm;AE4(f);h.no=f;f=new AAc;f.F4=null;f.nf=A_Y;h.tJ=f;BE(f);g=new ACv;g.B7=f;h.DT=g;h.Di=b;i=b.length;j=0;while(j<i){f=b[j];k=new ACw;k.A8=h;k.A7=j;g=Bz(k,"f");f.onmessage=g;f=b[j];g=AMn();f.postMessage(g);j=j+1|0;}h.i2=0;h.qy=BI(i);c.DA=h;k=AHd();b=0;k.tabIndex=b;h=k.style;h.setProperty("width",
"100%");h.setProperty("height","100%");h.setProperty("outline","none");c.eo=k;f=AVh(!!0,!!0,!!1,!!1);g=k.getContext("webgl2",f);if(g!==null){if(c.eo.parentNode!==null)Bc(DG(),C(17));else{if((e?1:0)?1:0)c.p5=e;b=EP();f=c.p5;k=b.getElementById(f);if(k!==null){b=c.eo;k.appendChild(b);Mn(c);}}c.q3=A$I(c.eo,c.pB);b=new V5;f=c.pB;ANI(b,g,new AEg,1,2.25,0.625);b.F1=new AEf;b.Fz=f;c.gf=b;AV4(c.w2,c.eo,AZo());g=$rt_globals.window;f=c.yM;g.addEventListener("resize",Bz(f,"handleEvent"));}b=c.gf;if(b!==null){f=new PK;g
=c.q3.cL;f.V=b;f.m=g;f.bq=c;g=$rt_str($rt_globals.window.location.hash);if(Bk(C(18),g))b=A9B(f);else if(Bk(C(19),g)){b=new Wi;AHq(b,f);ANL(b,1);g=new U6;AE4(g);g.yP=b;Rk(b,g,C(20));Rk(b,A$s(b),C(21));}else b=(A6W(M(g)<=0?C(22):DD(g,1))).bc(f);c.hm=b;Mn(c);}if(!(c.gf===null?0:1))AJ$(d);AJs(c);}
var YI=G(0);
var Yg=G(0);
function AFi(){var a=this;B.call(a);a.n1=null;a.w4=null;a.dq=null;}
function US(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AFi;c.dq=b;d=c;b.classObject=d;}return c;}
function G6(a){if(a.n1===null)a.n1=AJK(a.dq);return a.n1;}
function Ig(a){var b,c,d,e;b=a.w4;if(b===null){if(AOe(a.dq)===null?0:1){b=Ig(F4(a));c=new J;L(c);H(H(c,b),C(23));b=K(c);}else{b=a.dq.$meta.enclosingClass;if((b===null?null:US(b))!==null){b=$rt_str(a.dq.$meta.simpleName);if(b===null)b=C(22);}else{b=AJK(a.dq);d=Tf(b,36);if(d==(-1)){e=Tf(b,46);if(e!=(-1))b=DD(b,e+1|0);}else{b=DD(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(22);}}}a.w4=b;}return b;}
function Jv(a){return a.dq.$meta.primitive?1:0;}
function F4(a){return US(AOe(a.dq));}
var ALC=G();
function Bz(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function FF(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ALo=G();
function AOO(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ADE(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ADE(d[e],c))return 1;e=e+1|0;}return 0;}
function AUN(b){var c='$$enumConstants$$';HL[c]=AO4;Ex[c]=AOG;IL[c]=AIC;Iq[c]=AJu;Cu[c]=AIk;Cx[c]=AMy;Hl[c]=AK9;EN[c]=AY9;CE[c]=ANH;AUN=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return AUN(b);}
function AOe(b){return b.$meta.item;}
function AJK(b){return $rt_str(b.$meta.name);}
function Hz(){var a=this;B.call(a);a.jt=null;a.os=null;a.ls=0;a.lP=0;}
function A_Z(){var a=new Hz();Z(a);return a;}
function A_0(a){var b=new Hz();Bn(b,a);return b;}
function Z(a){a.ls=1;a.lP=1;}
function Bn(a,b){a.ls=1;a.lP=1;a.jt=b;}
function A1K(a){return a;}
function AWp(a){return a.jt;}
function A5Z(a){var b;b=a.os;if(b===a)b=null;return b;}
var EQ=G(Hz);
function A_1(){var a=new EQ();AJf(a);return a;}
function AJf(a){Z(a);}
var Bu=G(EQ);
function A_x(a){var b=new Bu();A7w(b,a);return b;}
function A7w(a,b){Bn(a,b);}
var AB2=G(Bu);
var C3=G(0);
var CM=G(0);
var K3=G(0);
function BD(){var a=this;B.call(a);a.cr=null;a.kQ=0;}
var A_2=null;var A_3=null;var A_4=null;function Gw(){Gw=Bl(BD);AXp();}
function ASc(){var a=new BD();AGY(a);return a;}
function GT(a){var b=new BD();J$(b,a);return b;}
function EX(a,b,c){var d=new BD();PB(d,a,b,c);return d;}
function AGY(a){Gw();a.cr=A_2;}
function J$(a,b){Gw();PB(a,b,0,b.data.length);}
function PB(a,b,c,d){var e;Gw();e=B6(d);a.cr=e;Dc(b,c,e,0,d);}
function Nh(b){var c;Gw();c=ASc();c.cr=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.cr.data;if(b<c.length)return c[b];}d=new IY;Z(d);N(d);}
function M(a){return a.cr.data.length;}
function G4(a){return a.cr.data.length?0:1;}
function R$(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dc(a.cr,b,d,e,c);return;}}g=new BM;Z(g);N(g);}
function Pk(a,b){var c,d,e;if(a===b)return 0;c=Bf(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function AEa(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Ok(a,b){if(a===b)return 1;return AEa(a,b,0);}
function DN(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function KF(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.cr.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Ky(b);h=JW(b);while(true){f=a.cr.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function H_(a,b,c){var d,e,f,g,h;d=Bf(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cr.data[d]==e)break;d=d+(-1)|0;}return d;}f=Ky(b);g=JW(b);while(true){if(d<1)return (-1);h=a.cr.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Tf(a,b){return H_(a,b,M(a)-1|0);}
function AAC(a,b,c){var d,e,f;d=Be(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A4J(a,b){return AAC(a,b,0);}
function R6(a,b,c){var d,e;d=Bf(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AIg(a,b){return R6(a,b,M(a));}
function Cy(a,b,c){var d,e;d=BR(b,c);if(d>0){e=new BM;Z(e);N(e);}if(!d){Gw();return A_3;}if(!b&&c==M(a))return a;return EX(a.cr,b,c-b|0);}
function DD(a,b){return Cy(a,b,M(a));}
function Se(a,b,c){return Cy(a,b,c);}
function FX(a,b){var c,d,e,f,g,h;if(G4(b))return a;if(G4(a))return b;c=B6(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return Nh(c);}
function AEE(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Bq(d,Q(a,f));}f=f+1|0;}H(d,DD(a,f));return K(d);}
function ACb(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cy(a,b,c+1|0);}
function AP6(a){return a;}
function G5(a){var b,c,d,e,f;b=a.cr.data;c=B6(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Oq(b){var c,d;Gw();c=new BD;d=B6(1);d.data[0]=b;J$(c,d);return c;}
function Dr(b){var c;Gw();c=new J;L(c);return K(V(c,b));}
function Bk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BD))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function KG(a){var b,c,d,e;a:{if(!a.kQ){b=a.cr.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kQ=(31*a.kQ|0)+e|0;d=d+1|0;}}}return a.kQ;}
function M2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new GB;Bn(b,C(24));N(b);}A_5=1;d=new ABH;d.nQ=P(C8,10);d.iu=(-1);d.gj=(-1);d.bL=(-1);e=new HI;e.fU=1;e.b3=b;e.bn=B6(M(b)+2|0);Dc(G5(b),0,e.bn,0,M(b));f=e.bn.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.BJ=g;e.hP=0;Gl(e);Gl(e);d.l=e;d.es=0;d.oD=XH(d,(-1),0,null);if(!DO(d.l)){b=new KZ;h=d.l;NB(b,C(22),h.b3,h.dU);N(b);}if(d.sh)d.oD.fk();b=BP();h=new ACA;h.k9=(-1);h.ql=(-1);h.ET=d;h.Db=d.oD;h.mv=a;h.k9=0;g=M(a);h.ql=g;e=new AEF;i=h.k9;j=d.iu;k=d.gj+1|0;l=d.bL
+1|0;e.jz=(-1);m=j+1|0;e.sW=m;e.eC=BI(m*2|0);f=BI(l);e.lI=f;Ke(f,(-1));if(k>0)e.qI=BI(k);Ke(e.eC,(-1));AGr(e,a,i,g);h.c4=e;e.hf=1;n=0;m=0;if(!M(a)){f=P(BD,1);f.data[0]=C(22);}else{while(true){l=M(h.mv);if(!AG$(h))l=h.ql;e=h.c4;if(e.fi>=0&&AH8(e)==1){e=h.c4;e.fi=Nq(e);if(Nq(h.c4)==AJj(h.c4)){e=h.c4;e.fi=e.fi+1|0;}g=h.c4.fi;g=g<=l&&PT(h,g)?1:0;}else g=PT(h,h.k9);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BA(b,Se(a,m,AKm(h)));m=ALU(h);n=g;}a:{BA(b,Se(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BL(b,
g)))break a;E5(b,g);}}if(g<0)g=0;f=G0(b,P(BD,g));}return f;}
function ARH(a,b){return Pk(a,b);}
function AXp(){A_2=B6(0);A_3=ASc();A_4=new Uq;}
var F0=G(Hz);
var I3=G(F0);
var AL7=G(I3);
var DM=G();
function Il(){DM.call(this);this.bv=0;}
var A_6=null;var A_7=null;function A6S(a){var b=new Il();AHN(b,a);return b;}
function AHN(a,b){a.bv=b;}
function AGE(b){var c,d,e,f,g,h;if(!b)c=C(25);else{d=(((32-Zh(b)|0)+4|0)-1|0)/4|0;e=B6(d);f=e.data;g=(d-1|0)*4|0;d=0;while(g>=0){h=d+1|0;f[d]=I2((b>>>g|0)&15,16);g=g-4|0;d=h;}c=GT(e);}return c;}
function II(b){return (Y2(A_n(20),b,10)).M();}
function Lw(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new DB;Bn(b,C(26));N(b);}d=M(b);if(0==d){b=new DB;Bn(b,C(27));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new DB;Z(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Z_(Q(b,f));if(i<0){j=new DB;k=Cy(b,0,d);b=new J;L(b);H(H(b,C(28)),k);Bn(j,K(b));N(j);}if(i>=c){j=new DB;l=Cy(b,0,d);b=new J;L(b);H(H(V(H(b,C(29)),c),C(30)),l);Bn(j,K(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new DB;k=Cy(b,0,d);b=new J;L(b);H(H(b,C(31)),k);Bn(j,K(b));N(j);}b=new DB;j=new J;L(j);V(H(j,C(32)),c);Bn(b,K(j));N(b);}
function C5(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A_7===null){A_7=P(Il,256);c=0;while(true){d=A_7.data;if(c>=d.length)break a;d[c]=A6S(c-128|0);c=c+1|0;}}}return A_7.data[b+128|0];}return A6S(b);}
function AXM(a){return II(a.bv);}
function A8d(a,b){if(a===b)return 1;return b instanceof Il&&b.bv==a.bv?1:0;}
function Zh(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function JK(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A3h(a,b){b=b;return BR(a.bv,b.bv);}
function ANJ(){A_6=F($rt_intcls());}
function Ht(){var a=this;B.call(a);a.D=null;a.H=0;}
function A_8(){var a=new Ht();L(a);return a;}
function A_n(a){var b=new Ht();Gm(b,a);return b;}
function L(a){Gm(a,16);}
function Gm(a,b){a.D=B6(b);}
function Y2(a,b,c){return AMi(a,a.H,b,c);}
function AMi(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cq(a,b,b+1|0);else{Cq(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=I2(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cq(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=I2($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AMY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BR(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A_9;AMQ(c,f);d=f.n_;g=f.nX;h=f.sq;i=1;j=1;if(h)j=2;k=9;l=AWV(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cq(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALL(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BR(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A_$;AIs(c,f);g=f.oE;h=f.nG;i=f.sc;j=1;k=1;if(i)k=2;l=18;m=AVw(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cq(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AQ$(p,Ga))d=0;else{d=Hr(AJr(g,p));g=AZk(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AJr(p,Bs(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AWV(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AVw(b){var c,d,e,f,g;c=Bs(1);d=0;e=16;f=A__.data;g=f.length-1|0;while(g>=0){if(Jo(AZk(b,Cm(c,f[g])),Ga)){d=d|e;c=Cm(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Bq(a,b){return a.rj(a.H,b);}
function AGj(a,b,c){Cq(a,b,b+1|0);a.D.data[b]=c;return a;}
function NL(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.D=Lt(a.D,d);}
function K(a){return EX(a.D,0,a.H);}
function AF4(a,b,c,d){return a.q2(a.H,b,c,d);}
function YC(a,b,c,d,e){var f,g,h,i;Cq(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function KI(a,b){return a.qr(b,0,b.data.length);}
function Cq(a,b,c){var d,e,f,g;d=a.H;e=d-b|0;a.kI((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.H=a.H+(c-b|0)|0;}
var Kq=G(0);
var J=G(Ht);
function MU(){var a=new J();A73(a);return a;}
function A8B(a){var b=new J();AZn(b,a);return b;}
function A73(a){L(a);}
function AZn(a,b){var c,d;a.D=B6(M(b));c=0;while(true){d=a.D.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.H=M(b);}
function H(a,b){Nk(a,a.H,b===null?C(33):b.M());return a;}
function BO(a,b){Nk(a,a.H,b);return a;}
function V(a,b){Y2(a,b,10);return a;}
function Ir(a,b){var c,d,e,f,g,h,i,j;c=a.H;d=1;if(A9g(b,Ga)){d=0;b=A$V(b);}a:{if(DR(b,Bs(10))<0){if(d)Cq(a,c,c+1|0);else{Cq(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=I2(Hr(b),10);}else{g=1;h=Bs(1);i=Dl(Bs(-1),Bs(10));b:{while(true){j=Cm(h,Bs(10));if(DR(j,b)>0){j=h;break b;}g=g+1|0;if(DR(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cq(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(Jo(j,Ga))break a;e=a.D.data;c=f+1|0;e[f]=I2(Hr((Dl(b,j))),10);b=AK4(b,j);j=Dl(j,Bs(10));f=c;}}}return a;}
function Di(a,b){AMY(a,a.H,b);return a;}
function AGT(a,b){Bq(a,b);return a;}
function LU(a,b){var c;c=M(b);AD7(a,a.H,b,0,c);return a;}
function Kd(a,b){Nk(a,a.H,!b?C(34):C(35));return a;}
function AJ_(a,b,c){var d,e,f,g,h,i;d=BR(b,c);if(d<=0){e=a.H;if(b<=e){if(d){f=e-c|0;a.H=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new IY;Z(i);N(i);}
function WL(a,b){var c,d,e,f;if(b>=0){c=a.H;if(b<c){c=c-1|0;a.H=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new IY;Z(f);N(f);}
function A3c(a,b,c,d,e){YC(a,b,c,d,e);return a;}
function AQX(a,b,c,d){AF4(a,b,c,d);return a;}
function AD7(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Cq(a,b,(b+e|0)-d|0);while(d<e){f=a.D.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BM;Z(c);N(c);}
function ALh(a){return a.H;}
function Eu(a){return K(a);}
function ATk(a,b){NL(a,b);}
function A3B(a,b,c){AGj(a,b,c);return a;}
function Nk(a,b,c){var d,e,f;if(b>=0&&b<=a.H){a:{if(c===null)c=C(33);else if(G4(c))break a;NL(a,a.H+M(c)|0);d=a.H-1|0;while(d>=b){a.D.data[d+M(c)|0]=a.D.data[d];d=d+(-1)|0;}a.H=a.H+M(c)|0;d=0;while(d<M(c)){e=a.D.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new IY;Z(c);N(c);}
var Fq=G(I3);
var AM_=G(Fq);
function Baa(a){var b=new AM_();AP$(b,a);return b;}
function AP$(a,b){Bn(a,b);}
var AL2=G(Fq);
function Bab(a){var b=new AL2();AQk(b,a);return b;}
function AQk(a,b){Bn(a,b);}
var ADC=G(0);
var Dw=G(0);
function BV(b,c){if(b!==null)b.b1();return c;}
var Z9=G(0);
function KU(){var a=this;B.call(a);a.jY=0;a.o5=0;a.oq=0;}
var Bac=0;function ET(a){Bac=Bac-1|0;}
function Ib(a,b,c){Lk(a,ALI(b,c,400,0));}
function L2(a,b){return Mc(a,b,0.875);}
function Mc(a,b,c){return EF(a,b)+c|0;}
function AB1(){var a=this;KU.call(a);a.jO=null;a.dA=null;a.yC=null;}
function Fa(a){var b,c,d;b=a.dA;c=a.o5;d=a.oq;b.clearRect(0.0,0.0,c,d);}
function ACj(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dA;d="center";c.textAlign=d;break a;case 2:c=a.dA;d="right";c.textAlign=d;break a;default:break a;}d=a.dA;c="left";d.textAlign=c;}}
function Cr(a,b){Lk(a,b.r4);}
function Lk(a,b){var c;if(a.yC!==b){c=a.dA;a.yC=b;c.font=b;}}
function ALI(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.dA;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EF(a,b){var c;c=$rt_ustr(b);return a.dA.measureText(c).width;}
function KM(a,b,c,d){var e,f;e=a.dA;f=$rt_ustr(GT(AL_([35,IB(b/16|0),IB(b%16|0),IB(c/16|0),IB(c%16|0),IB(d/16|0),IB(d%16|0)])));e.fillStyle=f;}
function AZ$(){return {alpha:false};}
var AK2=G();
var ANQ=G();
function BS(b,c){if(b===c)return 1;return b!==null?b.bU(c):c!==null?0:1;}
function BE(b){if(b!==null)return b;b=new GB;Bn(b,C(22));N(b);}
var BY=G(0);
function G1(b){return b;}
var Ch=G(0);
function ADO(){B.call(this);this.Cv=null;}
function A8t(a,b){var c;c=a.Cv;c.rB=b;if(c.DR)AJq(b);}
var AI7=G();
function Js(b,c){return b.data[c];}
var AME=G();
var AG_=G(0);
function FC(b,c,d){return AWU(C(36),FX(C(14),b),c,d);}
var ANC=G(0);
var AJD=G(0);
function MO(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CT(b,f+g|0);Dc(c,0,d,f,g);return d;}
function Mh(b,c,d){Dc(b,c,d,0,d.data.length);return d;}
function ABS(b,c,d){var e;if(c>0)Dc(b,0,d,0,c);e=d.data.length;if(c<e)Dc(b,c+1|0,d,c,e-c|0);return d;}
function AIc(b,c,d,e){var f;if(c>0)Dc(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dc(b,d,e,c,f-d|0);}return e;}
function CN(b){var c;c=new PR;c.mu=b;return c;}
function AHJ(b,c){if(b.data.length!=c)b=CT(b,c);return b;}
function D3(b,c,d){var e;e=c.data.length;if(e==d)c=CT(c,e*2|0);c.data[d]=b;return c;}
function AEy(b,c,d){var e;e=c.data.length;if(e==d)c=Pg(c,e*2|0);c.data[d]=b;return c;}
function Pf(b){return Lt(b,b.data.length);}
function MQ(){var a=this;B.call(a);a.vI=null;a.uP=null;a.uM=null;a.tl=0;}
function AWU(a,b,c,d){var e=new MQ();AWh(e,a,b,c,d);return e;}
function AWh(a,b,c,d,e){a.vI=b;a.uP=c;a.uM=d;a.tl=e;}
var AHE=G();
function A1Y(b,c){return {style:b,weight:c};}
function ADP(){B.call(this);this.C_=null;}
function AOr(a,b){var c,d,e;c=a.C_;d=0;while(d<b.length){e=b[d];(EP()).fonts.add(e);d=d+1|0;}c.DR=1;b=c.rB;if(b!==null)AJq(b);}
var ADN=G();
function A7b(a,b){$rt_globals.console.info("font load error "+b);}
var Mu=G();
var Bad=null;var Bae=null;function Bh(){if(Bad===null)Bad=AUz(Baf,0);return Bad;}
function DG(){if(Bae===null)Bae=AUz(Bag,0);return Bae;}
function A9E(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OR(b)&&(e+f|0)<=OR(d)){a:{b:{if(b!==d){g=F4(BF(b));h=F4(BF(d));if(g!==null&&h!==null){if(g===h)break b;if(!Jv(g)&&!Jv(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dq;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ADE(n.constructor,o)?1:0)){Op(b,c,d,e,j);b=new JX;Z(b);N(b);}j=j+1|0;k=m;}Op(b,c,d,e,f);return;}if(!Jv(g))break a;if(Jv(h))break b;else break a;}b=new JX;Z(b);N(b);}}Op(b,c,
d,e,f);return;}b=new JX;Z(b);N(b);}b=new BM;Z(b);N(b);}d=new GB;Bn(d,C(37));N(d);}
function Dc(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OR(b)&&(e+f|0)<=OR(d)){Op(b,c,d,e,f);return;}b=new BM;Z(b);N(b);}
function Op(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function ER(){return Long_fromNumber(new Date().getTime());}
function AJm(){return A_V($rt_globals.performance.now()*1000000.0);}
var AJC=G();
var ALV=G();
function AAe(b,c){var d,e,f;d=(EP()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EP()).getElementById($rt_ustr(b)).appendChild(d);}
function AHd(){return (EP()).createElement("canvas");}
function AKe(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AVh(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AOo=G();
var YJ=G();
function A4B(a,b){var c;c=new Bu;Bn(c,$rt_str(b.message));N(c);}
var AJP=G();
function F9(b){return $rt_str(b);}
var ALd=G();
function Lt(b,c){var d,e,f,g;b=b.data;d=B6(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Pg(b,c){var d,e,f,g;b=b.data;d=Dh(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function J1(b,c){var d,e,f,g;b=b.data;d=BI(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CT(b,c){var d,e,f,g;d=b.data;e=Vp(F4(BF(b)),c);f=Bf(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AMm(b,c,d){var e,f,g,h;e=BI(d-c|0);f=e.data;g=c;while(g<d){h=b.data;f[g-c|0]=h[g];g=g+1|0;}return e;}
function AJY(b,c,d,e){var f,g,h,i,j,k,l,m;f=Vp(F4(e),d-c|0);g=c;while(g<d){h=b.data;i=g-c|0;j=F4(e);k=h[g];if(k!==null&&!ADE((BF(k)).dq,j.dq)){e=new AB2;k=G6(BF(k));l=G6(j);m=new J;L(m);H(H(H(m,k),C(38)),l);Bn(e,K(m));N(e);}f.data[i]=k;g=g+1|0;}return f;}
function AJc(b){var c,d,e;if(b===null)return C(33);c=new J;L(c);BO(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BO(c,C(40));V(c,e[d]);d=d+1|0;}BO(c,C(41));return K(c);}
function AWw(b){var c,d,e;if(b===null)return C(33);c=new J;L(c);BO(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BO(c,C(40));Di(c,e[d]);d=d+1|0;}BO(c,C(41));return K(c);}
function AYJ(b){var c,d,e,f;if(b===null)return C(33);c=new J;L(c);BO(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BO(c,C(40));f=e[d];ALL(c,c.H,f);d=d+1|0;}BO(c,C(41));return K(c);}
function Ke(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;Z(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AHy(b,c,d,e){var f,g;if(c>d){e=new BU;Z(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function LO(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A_Y;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bf(j,h+f|0);l=h+(2*f|0)|0;m=Bf(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.ro(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AMZ(b,c){return ADT(b,0,b.data.length,c);}
function ADT(b,c,d,e){var f,g,h,i,j;f=BR(c,d);if(f>0){g=new BU;Z(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function PU(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+e[d]|0;d=d+1|0;}return c;}
var AEY=G(0);
var AMt=G();
function A2m(a,b){return a.Qz(b);}
function AT4(a){return a.Ud();}
var AIq=G();
var GR=G(0);
var Uq=G();
var BM=G(Bu);
var AMU=G();
function OR(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Bah());}return b.data.length;}
function Vp(b,c){if(b===null){b=new GB;Z(b);N(b);}if(b===F($rt_voidcls())){b=new BU;Z(b);N(b);}if(c>=0)return AXU(b.dq,c);b=new AGL;Z(b);N(b);}
function AXU(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var GB=G(Bu);
var JX=G(Bu);
function Ds(){B.call(this);this.nV=0;}
var Bai=null;var Baj=null;var Bak=null;var Bal=null;var Bam=null;var Ban=null;var Bao=null;var Bap=null;var Baq=null;var Bar=null;function AYn(a){var b=new Ds();AH4(b,a);return b;}
function AH4(a,b){a.nV=b;}
function QE(b){var c,d;c=Ban.data;if(b>=c.length)return AYn(b);d=c[b];if(d===null){d=AYn(b);Ban.data[b]=d;}return d;}
function Xn(b){var c,d;c=new BD;d=B6(1);d.data[0]=b;J$(c,d);return c;}
function M6(b){return b>=65536&&b<=1114111?1:0;}
function C1(b){return (b&64512)!=55296?0:1;}
function Dq(b){return (b&64512)!=56320?0:1;}
function Pq(b){return !C1(b)&&!Dq(b)?0:1;}
function J9(b,c){return C1(b)&&Dq(c)?1:0;}
function E9(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Ky(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function JW(b){return (56320|b&1023)&65535;}
function Gc(b){return HE(b)&65535;}
function HE(b){if(Bal===null){if(Bao===null)Bao=ANi();Bal=AIe((Bao.value!==null?$rt_str(Bao.value):null));}return Uc(Bal,b);}
function FQ(b){return HC(b)&65535;}
function HC(b){if(Bak===null){if(Bap===null)Bap=ANK();Bak=AIe((Bap.value!==null?$rt_str(Bap.value):null));}return Uc(Bak,b);}
function Uc(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BR(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AEn(b,c){if(c>=2&&c<=36){b=Z_(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Z_(b){var c,d,e,f,g,h,i,j,k,l;if(Baj===null){if(Baq===null)Baq=AL9();c=(Baq.value!==null?$rt_str(Baq.value):null);d=AWr(G5(c));e=NS(d);f=BI(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Qb(d)|0;j=j+Qb(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}Baj=f;}g=Baj.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BR(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function I2(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function G3(b){var c;if(b<65536){c=B6(1);c.data[0]=b&65535;return c;}return AL_([Ky(b),JW(b)]);}
function CO(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Pq(b&65535))return 19;if(Bam===null){if(Bar===null)Bar=AKE();d=(Bar.value!==null?$rt_str(Bar.value):null);e=P(YV,16384);f=e.data;g=Dh(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=Ol(Q(d,l));if(m==64){l=l+1|0;m=Ol(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Ol(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Ol(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ARF(k,k+i|0,Pg(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ARF(k,k+i|0,Pg(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}Bam=CT(e,j);}e=Bam.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.u3)o=p+1|0;else{c=d.z7;if(b>=c)return d.Ae.data[b-c|0];c=p-1|0;}}return 0;}
function Lv(b){a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Iu(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CO(b)!=16?0:1;}
function AAt(b){switch(CO(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function S$(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return AAt(b);}return 1;}
function AK1(){Bai=F($rt_charcls());Ban=P(Ds,128);}
function ANi(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ANK(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AL9(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AKE(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Yb=G(0);
var ACC=G(0);
var Fk=G(0);
var AK6=G();
function EP(){return $rt_globals.window.document;}
function A4e(a){return a.Lf();}
function A6y(a,b){return a.M2($rt_str(b));}
function A6k(a,b){a.Kp($rt_str(b));}
function A00(a,b){return a.QL($rt_str(b));}
function AOM(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AQQ(a){return a.UC();}
function A6u(a,b,c){return a.Ti($rt_str(b),$rt_str(c));}
function AS8(a,b,c,d){a.Fo($rt_str(b),FF(c,"handleEvent"),d?1:0);}
function AZ0(a){return a.R5();}
function A44(a){return !!a.Nq();}
function A68(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AUp(a){return a.Ky();}
function ASF(a,b){a.S$($rt_str(b));}
function AUM(a){return !!a.Kg();}
function AYN(a){return a.M_();}
function ATB(a){return $rt_ustr(a.Ib());}
function APt(a,b){return a.KL(b?1:0);}
function A8g(a){return a.Np();}
function A2N(a,b,c){return a.Vh($rt_str(b),$rt_str(c));}
function AUj(a,b,c){return a.Rm(b,c?1:0);}
function AXX(a,b,c){return !!a.MA($rt_str(b),$rt_str(c));}
function AZh(a){return a.LL();}
function ASo(a){return $rt_ustr(a.Or());}
function AQ0(a,b){return !!a.Hl(b);}
function ARR(a,b){return a.OU($rt_str(b));}
function A2X(a,b,c){return a.Ld($rt_str(b),$rt_str(c));}
function ATJ(a){return a.PI();}
function AZ3(a,b){return a.UI($rt_str(b));}
function ARQ(a){return $rt_ustr(a.Pm());}
function AVU(a){a.Kc();}
function AOx(a,b){return a.Vk($rt_str(b));}
function AXi(a,b){return a.Ku($rt_str(b));}
function A0m(a,b){return a.Ka($rt_str(b));}
function A62(a){return $rt_ustr(a.PU());}
function A0v(a,b,c){return a.SK(b,c);}
function A5f(a,b){return a.Ia(b);}
function AWm(a){return a.Mm();}
function AVb(a,b,c){a.GQ($rt_str(b),FF(c,"handleEvent"));}
function AUU(a,b,c){return a.I8(b,c);}
function AXb(a){return !!a.Ub();}
function AYl(a,b){return a.K$($rt_str(b));}
function A4q(a,b,c,d){a.EI($rt_str(b),FF(c,"handleEvent"),d?1:0);}
function AQV(a){return a.Mn();}
function A0L(a,b,c){return a.KK($rt_str(b),$rt_str(c));}
function AZF(a){return $rt_ustr(a.Qc());}
function A8a(a){return a.PA();}
function AU_(a){return a.PN();}
function AZD(a){return a.MB();}
function AVc(a,b,c){a.Hk($rt_str(b),FF(c,"handleEvent"));}
function A09(a,b){return a.Oc(b);}
function AR3(a,b){a.Ix($rt_str(b));}
function A5W(a){return $rt_ustr(a.Pe());}
function QD(){var a=this;B.call(a);a.z9=null;a.z$=null;a.z_=0;a.Aa=null;a.z6=null;}
function AVQ(a,b){var c,d,e,f,g;c=a.z9;d=a.z$;e=a.z_;f=a.Aa;g=a.z6;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AMf=G();
function AWD(b){return Math.exp(b);}
function AK7(b){return Math.log(b);}
function J3(b,c){return A3L(b,c);}
function A3L(b,c){return Math.pow(b,c);}
function D1(){return AYz();}
function AYz(){return Math.random();}
function Bf(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function AXY(b,c){return Math.max(b,c);}
function Yj(b){if(b<0)b= -b|0;return b;}
function AR9(b){return Math.abs(b);}
var AAm=G(0);
var Ti=G(0);
var ABM=G(0);
var UO=G(0);
var AF7=G(0);
var AEo=G(0);
var ALA=G();
function A4I(a,b,c){a.Hk($rt_str(b),FF(c,"handleEvent"));}
function A3e(a,b,c){a.GQ($rt_str(b),FF(c,"handleEvent"));}
function ASq(a,b,c,d){a.EI($rt_str(b),FF(c,"handleEvent"),d?1:0);}
function APL(a,b){return !!a.Hl(b);}
function A1q(a,b,c,d){a.Fo($rt_str(b),FF(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AGL=G(Bu);
var IY=G(BM);
var ALO=G();
function AMn(){return "ping";}
function AKB(b){return b===AMn()?1:0;}
var ABi=G(0);
var ZZ=G(0);
function ACK(){var a=this;B.call(a);a.vp=null;a.pB=null;a.eo=null;a.w2=null;a.yM=null;a.p5=null;a.q3=null;a.gf=null;a.mf=0;a.G1=0;a.Bt=null;a.hm=null;a.DA=null;}
function AJs(a){a.eo.focus();}
function EJ(a,b){var c;c=EP();b=$rt_ustr(b);c.title=b;}
function Mn(a){a.G1=$rt_globals.requestAnimationFrame(Bz(a.vp,"onAnimationFrame"));}
function Kc(a){a.mf=1;}
function ADn(a,b,c){var d,e,f,g,h,i;a.q3.eU=BK(b,c);d=b&&c?1:0;if(d){e=a.eo;f=b;e.width=f;f=a.eo;g=c;f.height=g;}f=a.gf;X(f.df,b,c);e=f.bh;f=f.df;h=f.a;i=f.b;e.viewport(0,0,h,i);a.hm.b5(a.gf.df,L_(a));if(d)a.hm.bJ();}
function AB0(a,b){var c,d,e;c=a.Bt;d=a.eo;if(BS(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.Bt=b;}
function NH(a){return $rt_globals.performance.now()/1000.0;}
function L_(a){return $rt_globals.window.devicePixelRatio;}
function GN(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AG4(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AFG;d.DZ=b;b=Bas;c.then(Bz(d,"f"),Bz(b,"f"));}}
function Fp(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AG4(b,null);else{c=new AGi;d=$rt_globals.window.showOpenFilePicker();e=new AGh;e.t3=b;d.then(Bz(e,"f"),Bz(c,"f"));}}
function CI(a,b,c,d){var e,f,g,h;e=a.DA;f=e.i2;if(f>0){g=e.qy.data;f=f-1|0;e.i2=f;Vc(e,b,c,d,g[f]);}else{h=e.no;e=new AFH;e.v7=b;e.CV=c;e.Ck=d;b=new Vd;b.sC=e;c=h.nm;b.CN=c;if(c===null)h.qq=b;else c.vP=b;h.nm=b;h.cc=h.cc+1|0;h.lY=h.lY+1|0;}}
function S6(a,b,c){var d,e;if(!MM()){b=new Bu;Bn(b,C(42));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new VI;e.Ar=b;b=AOm(c);d.then(Bz(e,"f"),Bz(b,"f"));}}
function Ve(a,b,c,d){var e,f,g;if(!MM()){b=new Bu;Bn(b,C(42));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=G5(b);A9W();b=Bat;g=f.data;g=b.decode(g);b=e.writeText(g);e=new Yh;e.rT=c;c=AOm(d);b.then(Bz(e,"f"),Bz(c,"f"));}}
function Xz(a){return MM()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AOm(b){var c;c=new WU;c.CZ=b;return c;}
var BC=G(0);
var AMB=G();
var T=G(0);
var AB_=G();
function AJ$(a){AAe(C(1),C(43));}
var ABT=G(0);
function U5(){B.call(this);this.C5=null;}
function A57(a,b){var c,d;c=b;b=a.C5;if(!(!b.hm.cy(c/1000.0)&&!b.mf)){d=b.gf.df;if(Bb(d.a,d.b)){b.mf=0;b.hm.bJ();}}Mn(b);}
function U3(){B.call(this);this.t6=null;}
function DI(a){Kc(a.t6);}
var AA$=G(0);
function U4(){B.call(this);this.rx=null;}
function AUY(a,b,c){var d,e,f,g;c=a.rx;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eo){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=L_(c);ADn(c,Hi(f.width*g),Hi(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ADn(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AJZ=G();
function AZo(){return {box:'device-pixel-content-box'};}
function AV4(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CH=G(0);
function U2(){B.call(this);this.xf=null;}
function AY7(a,b){var c;b=a.xf;b.hm.b5(b.gf.df,L_(b));c=b.gf.df;if(Bb(c.a,c.b))b.hm.bJ();}
function ACt(){var a=this;B.call(a);a.no=null;a.Di=null;a.tJ=null;a.qy=null;a.yR=0;a.i2=0;a.DT=null;}
function Vc(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.yR+1|0;a.yR=f;g=a.tJ;h=C5(f);g.kK=Pn(g,g.kK,h);h=AEr(g,h);Ye(h,b);Ye(h,b);g.ni=g.ni+1|0;b=a.Di[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BD){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(E6(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E6(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E6(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof Mk)){if(!(c instanceof O0)){b=new BU;c=G6(BF(c));g=new J;L(g);H(H(g,C(44)),c);Bn(b,K(g));N(b);}c=c;e=j+1|0;g=c.iP;j;h[j]=g;f=e+1|0;c=QL(c.f8);e;h[e]=c;}else{c=c;g=c.iT;if(g===null){f=j+1|0;c=c.hQ;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=QL(c.iD);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
function AHL(){var a=this;B.call(a);a.cL=null;a.kf=null;a.Hb=null;a.eU=null;}
function A$I(a,b){var c=new AHL();A6P(c,a,b);return c;}
function A6P(a,b,c){var d,e,f,g;a.eU=null;a.kf=b;d=new AAL;d.bA=CW(P(Ck,0));d.pE=CW(P(Ck,0));d.bX=CW(P(CG,0));d.fg=CW(P(EA,0));d.cf=CW(P(CK,0));d.gr=CW(P(Fg,0));d.gO=CW(P(Fz,0));d.nd=CW(P(T,0));d.nT=CW(P(T,0));d.dS=c;a.cL=d;e=$rt_globals.window;f=P(Dw,14);g=f.data;d=new AFm;d.se=a;g[0]=C_(a,b,C(45),d);d=new AFn;d.Ch=a;g[1]=C_(a,b,C(46),d);d=new AFo;d.zG=a;g[2]=C_(a,b,C(47),d);d=new AFp;d.xT=a;g[3]=C_(a,b,C(48),d);d=new AFq;d.vf=a;g[4]=C_(a,b,C(49),d);d=new AFr;d.sy=a;g[5]=C_(a,b,C(50),d);d=new AFs;d.D_=a;g[6]
=C_(a,b,C(51),d);d=new AFt;d.BS=a;g[7]=C_(a,b,C(52),d);d=new AFu;d.zg=a;g[8]=C_(a,b,C(53),d);d=new AFv;d.xd=a;g[9]=C_(a,b,C(54),d);d=new XP;d.wN=a;g[10]=C_(a,b,C(55),d);d=new XQ;d.vY=a;e.addEventListener("paste",Bz(d,"handleEvent"),!!1);g[11]=Xi(a,e,C(56),d);d=new XR;d.yz=a;g[12]=C_(a,e,C(57),d);d=new XS;d.DH=a;g[13]=C_(a,e,C(58),d);c=new SC;c.E4=f;a.Hb=c;e=new AGo;e.Ai=b;b.onpointerdown=Bz(e,"f");e=new AGp;e.zs=b;b.onpointerup=Bz(e,"f");}
function YD(){return (EP()).activeElement;}
function C_(a,b,c,d){b.addEventListener($rt_ustr(c),Bz(d,"handleEvent"));return Xi(a,b,c,d);}
function Xi(a,b,c,d){var e;e=new AA6;e.GD=b;e.GF=c;e.GE=d;return e;}
function ADQ(a,b){var c;c=new AEt;c.xS=b;return c;}
function FB(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.kf.getBoundingClientRect();e=BK(Hi((b.clientX-d.left)*c),Hi((b.clientY-d.top)*c));f=AMN(a.eU);d=new PH;AEc(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.h=e;d.Gr=f;return d;}
function XV(a,b,c){var d,e,f,g;d=new Rt;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AEc(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.pW=0;d.eH=e;d.be=f;d.kw=c;d.BX=g;return d;}
function Em(a,b){b.stopPropagation();b.preventDefault();}
function OJ(){var a=this;B.call(a);a.qM=null;a.cv=null;a.bh=null;a.mR=0;a.CM=null;a.GP=0;a.FN=0;a.lS=null;a.lG=null;a.F0=null;a.Hr=null;a.ws=null;a.yV=null;a.ju=null;a.iN=null;a.kE=null;a.F8=null;a.tm=null;a.df=null;a.DM=null;a.qZ=0;a.nz=0;a.pl=0;a.pa=0;a.l$=0;a.pg=null;a.pr=0.0;a.q5=0.0;}
function ANI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.df=new Bg;a.qZ=0;a.pg=new AFA;a.qM=c;a.mR=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(59)),g);$rt_globals.console.info($rt_ustr(K(h)));a.bh=b;a.cv=Lo(c,4,4,1);i=AOH(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B6(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Sr;Ie();c=Bau;m.fl=b;m.iC=c;m.vv=j.length/c.ob|0;m.DI
=l.length;n=b.createBuffer();m.yJ=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.xV=null;n=b.createBuffer();m.xi=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.tm=m;a.FN=Ok(g,C(60));c=new AA7;c.ev=b;a.CM=c;a.pr=e;a.q5=f;d=b.getParameter(3379);a.GP=d;c=new J;L(c);V(H(c,C(61)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dn,9);i=k.data;c=A9p(b);a.lS=c;i[0]=c;c=A$j(b,C(62));a.lG=c;i[1]=c;c=new ABw;IP(c,b,
C(63),C(64),Bau);a.F0=c;i[2]=c;c=A$9(b);a.Hr=c;i[3]=c;c=new QK;XF(c,b,C(65),C(66));a.ws=c;i[4]=c;c=A_k(b);a.yV=c;i[5]=c;c=A90(b);a.ju=c;i[6]=c;c=A$5(b);a.iN=c;i[7]=c;c=A$6(b);a.kE=c;i[8]=c;a.F8=k;AF_(b,C(67));}
function I8(a,b,c){return Ha(a,b,c,400,0);}
function Ip(a,b,c){return Lo(a.qM,b,c,0);}
function Ei(a,b,c,d){return Lo(a.qM,b,c,d);}
function AFR(a,b,c,d,e,f){var g,h;Cr(a.cv,c);g=Ei(a,L2(a.cv,b)+(d*2|0)|0,e,f);Cr(g,c);B1(g,b,d,Mw(c,e));h=C4(a);CU(h,g);ET(g);return h;}
function E3(a,b){var c,d,e,f,g;c=a.bh;d=b.bt;e=b.bx;f=b.bk;g=b.bH;c.clearColor(d,e,f,g);a.bh.clear(16384);}
function Cb(a,b){var c;if(b==a.nz)return b;if(!b)a.bh.disable(3042);else{a.bh.enable(3042);a.bh.blendFuncSeparate(770,771,1,1);}c=a.nz;a.nz=b;return c;}
function Oo(a,b,c){ME(a,b.a,b.b,c);}
function ME(a,b,c,d){var e,f;e=d.a;f=d.b;a.pa=1;a.l$=1;d=a.pg;d.u6=b;d.u7=c;d.u5=e;d.u4=f;AEe(a);}
function GL(a){a.pa=0;a.l$=0;AEe(a);}
function AEe(a){var b,c,d,e,f,g;b=a.pl;c=a.pa;if(b!=c){a.pl=c;if(!c)a.bh.disable(3089);else a.bh.enable(3089);}if(a.pl&&a.l$){a.l$=0;d=a.bh;e=a.pg;b=e.u6;c=a.df.b-e.u7|0;f=e.u4;c=c-f|0;g=e.u5;d.scissor(b,c,g,f);}}
function Gz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.tm;c=a.qZ;d=b.iC.Cq;e=b.fl;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.fl;h=b.yJ;e.bindBuffer(34962,h);i=b.iC.ry.data;g=i.length;j=0;while(j<g){k=i[j];l=b.fl;m=k.kk;n=k.g_;o=b.iC.ob*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.g_|0;j=j+1|0;}a:{e=b.xV;if(e!==null){c=0;b.fl.bindBuffer(34962,e);i=b.iC.Bq.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.fl;j=e.kk;p=e.g_;m=e.tu;n=b.iC.Ag;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.g_|0;g=g+1|0;}}}q=b.xi;if(q===null){c=b.vv;if(c>0)b.fl.drawArrays(4,0,c);}else{b.fl.bindBuffer(34963,q);k=b.fl;g=b.DI;k.drawElements(4,g,5123,0);}a.qZ=d;}
function Bw(a,b,c,d,e){G8(a,a.lS);Hg(a.lS,a.bh,b,c,d,a.df);d=a.lS;F6(a.bh,d.Dm,e);Gz(a);}
function AGO(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;G8(a,a.iN);Hg(a.iN,a.bh,b,c,d,a.df);j=a.iN;d=a.bh;k=j.yk;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.yj;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.iN;F6(a.bh,d.y7,i);Gz(a);}
function MX(a,b,c,d,e,f,g,h){var i,j;G8(a,a.kE);Hg(a.kE,a.bh,b,c,d,a.df);d=a.kE;i=a.bh;j=d.vs;i.uniform2f(j,e,f);F6(i,d.zV,g);d=a.kE;F6(a.bh,d.yL,h);Gz(a);}
function DT(a,b,c,d,e,f,g,h,i){var j;j=!i?a.ws:a.yV;G8(a,j);AN7(j,a.bh,!i?a.q5:a.pr);Hg(j,a.bh,b,c,d,a.df);OO(j,a.bh,f);AGU(j,a.bh,f,e);AMX(j,a.bh,g,h);Gz(a);}
function C4(a){var b,c;b=new Lp;c=a.CM;b.ef=new Bg;b.d$=c;b.gD=c.ev.createTexture();c.k6=c.k6+1|0;return b;}
function NK(a,b){AF_(a.bh,b);}
function G8(a,b){var c,d;if(b!==a.DM){c=a.bh;d=b.bR;c.useProgram(d);a.DM=b;}}
function V5(){var a=this;OJ.call(a);a.Fz=null;a.F1=null;}
function Ha(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cv;g=ALI(b,c,d,e);Lk(f,g);h=f.dA.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EF(f,C(68));m=EF(f,C(69));h=new Ml;n=g;h.pp=b;h.p$=c;h.EZ=d;h.Fd=e;h.eR=i;h.fa=j;h.EQ=l;h.rh=k;h.r4=n;h.uS=C6(i);h.FU=C6(h.fa);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.EV=d;switch(e){case 1:break;case 2:b=C(6);break a;default:b=C(4);break a;}b=C(70);}h.EM=b;return h;}
var WN=G(0);
function AYZ(a,b){var c;c=a.cl();while(c.c0()){b.g(c.cn());}}
var Id=G(0);
function MG(a){var b,c;b=new ACr;c=new Sm;c.z4=a;b.CG=c;return b;}
function A24(a,b){var c,d;c=a.cl();d=0;while(c.c0()){if(b.bF(c.cn())){c.qA();d=1;}}return d;}
var F3=G();
function EY(a){return a.da()?0:1;}
function G0(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=Vp(F4(BF(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B$(a);while(Cc(f)){g=b.data;h=e+1|0;g[e]=Cd(f);e=h;}return b;}
function A5_(a,b){var c;c=a.cl();while(c.c0()){if(BS(c.cn(),b)){c.qA();return 1;}}return 0;}
function G9(a,b){var c,d;c=0;d=b.cl();while(d.c0()){if(!a.qV(d.cn()))continue;c=1;}return c;}
var Os=G(0);
var Nu=G(0);
function EK(){F3.call(this);this.cc=0;}
function AV9(a,b){a.pA(a.da(),b);return 1;}
function B$(a){var b;b=new Y9;b.jZ=a;b.rn=a.cc;b.mn=a.da();b.ip=(-1);return b;}
function AVr(a,b,c){var d,e;if(b>=0&&b<=a.da()){if(c.e_())return 0;d=c.cl();while(d.c0()){e=b+1|0;a.pA(b,d.cn());b=e;}return 1;}c=new BU;Z(c);N(c);}
function A6T(a,b,c){c=new DX;Z(c);N(c);}
function A5e(a,b){var c;c=new DX;Z(c);N(c);}
function LW(a,b){var c,d;c=a.da();d=0;while(true){if(d>=c)return (-1);if(BS(b,a.ji(d)))break;d=d+1|0;}return d;}
function AUB(a,b){var c,d;if(!E6(b,Nu))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BS(BL(a,d),BL(c,d)))return 0;d=d+1|0;}return 1;}
var M3=G(EK);
var PN=G(0);
var AGs=G(0);
function Vm(){var a=this;M3.call(a);a.qq=null;a.nm=null;a.lY=0;}
var Mi=G(0);
function Ev(){var a=this;B.call(a);a.qb=null;a.qj=null;}
var Ek=G(0);
var Xy=G(0);
var Qa=G(0);
function AAc(){var a=this;Ev.call(a);a.kK=null;a.nf=null;a.F4=null;a.ni=0;}
function AJ4(a,b){var c;c=AEr(a,b);if(c===null)return null;a.kK=LQ(a,a.kK,b);a.ni=a.ni+1|0;return c.k_;}
function AEr(a,b){var c,d;c=a.kK;while(true){if(c===null)return null;d=NJ(a.nf,b,c.mP);if(!d)break;c=d>=0?c.cg:c.b6;}return c;}
function Pn(a,b,c){var d,e;if(b===null){b=new Lr;d=null;b.mP=c;b.k_=d;b.hr=1;b.hy=1;return b;}e=NJ(a.nf,c,b.mP);if(!e)return b;if(e>=0)b.cg=Pn(a,b.cg,c);else b.b6=Pn(a,b.b6,c);Fl(b);return NR(b);}
function LQ(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=NJ(a.nf,c,b.mP);if(d<0)b.b6=LQ(a,b.b6,c);else if(d>0)b.cg=LQ(a,b.cg,c);else{e=b.cg;if(e===null)return b.b6;f=b.b6;g=P(Lr,e.hr).data;h=0;while(true){b=e.b6;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.cg;while(h>0){h=h+(-1)|0;j=g[h];j.b6=b;Fl(j);b=NR(j);}e.cg=b;e.b6=f;Fl(e);b=e;}Fl(b);return NR(b);}
function ACv(){B.call(this);this.B7=null;}
function ACw(){var a=this;B.call(a);a.A8=null;a.A7=0;}
function AZg(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.A8;d=a.A7;AKB(b.data);e=c.no;f=e.qq;if(f===null)g=null;else{g=f.vP;e.qq=g;if(g!==null)g.CN=null;else e.nm=null;e.lY=e.lY-1|0;e.cc=e.cc+1|0;g=f.sC;}if(g!==null)Vc(c,g.v7,g.CV,g.Ck,d);else{h=c.qy.data;i=c.i2;c.i2=i+1|0;h[i]=d;}c=c.DT;b=b.data;if(!AKB(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;Z(b);N(b);}if(b.length<1){b=new BU;AJf(b);N(b);}e=C5(b[0]);f=AJ4(c.B7,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=F9(G1(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A9k(G1(e));else if(e instanceof $rt_globals.File?1:0)k[i]=AOJ(G1(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ACz(G1(b[m]));k[i]=AJy(G1(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=G1(b[m]);k[i]=A$v(G1(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=CT(h,i);f.g(h);}}
function AAL(){var a=this;B.call(a);a.bA=null;a.pE=null;a.bX=null;a.fg=null;a.cf=null;a.gr=null;a.gO=null;a.nd=null;a.nT=null;a.dS=null;a.hk=null;a.zm=0;}
function U$(a,b){var c,d,e,f;DI(a.dS);c=(B4(!b.kw?a.pE:a.bA)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].bm(b);if(f)break;if(b.pW)break;e=e+1|0;}return f;}
function S2(a,b,c){var d,e,f;DI(a.dS);d=(B4(a.gr)).data;e=d.length;f=0;while(f<e){if(d[f].e6(b,c))return 1;f=f+1|0;}return 0;}
function AFm(){B.call(this);this.se=null;}
function A4X(a,b){var c;c=a.se;if(U$(c.cL,XV(c,b,1)))Em(c,b);}
function AFn(){B.call(this);this.Ch=null;}
function A4$(a,b){var c;c=a.Ch;if(U$(c.cL,XV(c,b,0)))Em(c,b);}
function AFo(){B.call(this);this.zG=null;}
function AUn(a,b){var c,d,e,f,g,h,i;c=a.zG;if(c.eU!==null){a:{b:{d=FB(c,b);e=c.cL;DI(e.dS);f=e.hk;if(f!==null)f.g(d);else{g=(B4(e.bX)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bZ(d))break a;i=i+1|0;}}}}Em(c,b);}}
function AFp(){B.call(this);this.xT=null;}
function A3z(a,b){var c,d,e,f,g,h;c=a.xT;b.button;if(c.eU!==null)a:{d=FB(c,b);c=c.cL;e=b.button;DI(c.dS);if(c.hk===null){f=(B4(c.bX)).data;g=f.length;h=0;while(h<g){b=f[h].ct(d,e);if(b!==null){c.hk=b;c.zm=e;break a;}h=h+1|0;}}}}
function AFq(){B.call(this);this.vf=null;}
function A3O(a,b){var c,d,e,f,g,h,i;c=a.vf;b.button;if(c.eU!==null){d=FB(c,b);e=c.cL;f=b.button;DI(e.dS);if(f==e.zm&&e.hk!==null)e.hk=null;g=(B4(e.bX)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dC(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Em(c,b);}}
function AFr(){B.call(this);this.sy=null;}
function AV0(a,b){var c,d,e,f,g,h,i,j,k;c=a.sy;if(c.eU!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cL;f=FB(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DI(e.dS);i=(B4(e.fg)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dz(f,d,h))break b;k=k+1|0;}}Em(c,b);}}
function AFs(){B.call(this);this.D_=null;}
function ASp(a,b){var c,d,e,f,g,h,i,j;c=a.D_;if(c.eU!==null){d=FB(c,b);e=c.cL;f=b.button;g=b.detail;DI(e.dS);h=(B4(e.bX)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cD(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Em(c,b);}}
function AFt(){B.call(this);this.BS=null;}
function A8G(a,b){var c,d,e,f,g,h,i;c=a.BS;if(c.eU!==null){d=FB(c,b);e=c.cL;DI(e.dS);f=(B4(e.cf)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bF(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Em(c,b);}}
function AFu(){B.call(this);this.zg=null;}
function ARP(a,b){var c,d,e;b=a.zg.cL;c=(B4(b.nT)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}DI(b.dS);}
function AFv(){B.call(this);this.xd=null;}
function AWK(a,b){var c,d,e;b=a.xd.cL;c=(B4(b.nd)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.hk!==null)b.hk=null;DI(b.dS);}
function XP(){B.call(this);this.wN=null;}
function A8c(a,b){var c;c=a.wN;if(c.eU!==null)FB(c,b);}
function XQ(){B.call(this);this.vY=null;}
function AT1(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vY;if(YD()===c.kf){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B4(c.cL.gO)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].bN();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cL.dS;m=new Qu;m.xo=k;m.xp=l;g.getAsString(Bz(m,"accept"));Em(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(71)),k),C(72)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function XR(){B.call(this);this.yz=null;}
function AUr(a,b){var c;c=a.yz;if(YD()===c.kf&&S2(c.cL,ADQ(c,b),0))Em(c,b);}
function XS(){B.call(this);this.DH=null;}
function A5h(a,b){var c;c=a.DH;if(YD()===c.kf&&S2(c.cL,ADQ(c,b),1))Em(c,b);}
var AD9=G(0);
var AEg=G();
function Lo(a,b,c,d){var e,f,g,h,i;e=new AB1;e.jY=d;Bac=Bac+1|0;e.o5=b;e.oq=c;f=(EP()).createElement("canvas");e.jO=f;g=b;f.width=g;h=e.jO;f=c;h.height=f;if(!d)g=e.jO.getContext("2d");else{i=e.jO;h=AZ$();g=i.getContext("2d",h);}e.dA=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AEf=G();
function ATb(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function AJ9(){var a=this;B.call(a);a.dr=null;a.gP=null;a.cW=0;}
function CW(a){var b=new AJ9();ASk(b,a);return b;}
function ASk(a,b){a.dr=b;}
function FR(a,b){return a.dr.data[b];}
function Y(a,b){var c,d,e;c=a.cW;d=a.dr;if(c==d.data.length)a.dr=CT(d,c+4|0);d=a.dr.data;e=a.cW;a.cW=e+1|0;d[e]=b;a.gP=null;}
function TM(a,b){var c,d,e,f;c=0;while(true){d=a.dr.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cW=a.cW-1|0;a.gP=null;}c=c+1|0;}}
function B4(a){var b;b=a.gP;if(!(b!==null&&b.data.length==a.cW))a.gP=CT(a.dr,a.cW);return a.gP;}
var Ck=G(0);
var CG=G(0);
function A2$(a,b){return 0;}
function AXy(a,b,c){return null;}
function APa(a,b,c){return 0;}
function A5w(a,b,c,d){return 0;}
var EA=G(0);
var DU=G(0);
var CK=G(0);
var Fg=G(0);
var CA=G(0);
var Fz=G(0);
function SC(){B.call(this);this.E4=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BK(a,b){var c=new Bg();LK(c,a,b);return c;}
function AMN(a){var b=new Bg();AQU(b,a);return b;}
function LK(a,b,c){a.a=b;a.b=c;}
function AQU(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function X(a,b,c){a.a=b;a.b=c;}
function AKJ(a){var b,c,d;b=a.a;c=a.b;d=new J;L(d);V(H(V(H(d,C(73)),b),C(74)),c);return K(d);}
function AS2(a,b){var c;a:{b:{if(a!==b){if(BF(b)!==BF(a))break b;if(!KD(a,b))break b;}c=1;break a;}c=0;}return c;}
function KD(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AFA(){var a=this;B.call(a);a.u6=0;a.u7=0;a.u5=0;a.u4=0;}
var AJF=G();
var ALl=G(0);
function AA7(){var a=this;B.call(a);a.ev=null;a.k6=0;a.gi=0;}
function OZ(){var a=this;B.call(a);a.bR=null;a.Hu=null;}
function AM1(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(75):C(76);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bc(Bh(),g);Bc(DG(),C(77));Bc(DG(),d);Bc(DG(),C(77));b=new Bu;Bn(b,g);N(b);}
function Dn(){var a=this;OZ.call(a);a.zf=null;a.tP=null;a.o0=null;}
function Bav(a,b,c,d){var e=new Dn();IP(e,a,b,c,d);return e;}
function IP(a,b,c,d,e){var f,g,h,i,j,k;a.Hu=e;f=AM1(b,35633,c);d=AM1(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bR=g;h=e.vG.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bR;k=c.kk;c=c.tZ;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bR;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AF_(b,C(78));a.o0=new Bg;c=a.bR;a.zf=b.getUniformLocation(c,"uResolution");c=a.bR;a.tP=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new J;L(c);H(H(c,C(79)),d);Bn(b,K(c));N(b);}
function AHU(a,b,c){var d,e,f;if(!KD(a.o0,c)){Ct(a.o0,c);d=a.zf;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function Hg(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.tP;b.uniform4f(e,i,l,h,j);AHU(a,b,f);}
function ANO(){Dn.call(this);this.Dm=null;}
function A9p(a){var b=new ANO();A2T(b,a);return b;}
function A2T(a,b){var c;Ie();IP(a,b,C(63),C(80),Bau);c=a.bR;a.Dm=b.getUniformLocation(c,"uColor");}
function FU(){Dn.call(this);this.u_=null;}
function A$j(a,b){var c=new FU();ADS(c,a,b);return c;}
function Baw(a,b,c){var d=new FU();ADW(d,a,b,c);return d;}
function ADS(a,b,c){ADW(a,b,C(63),c);}
function ADW(a,b,c,d){Ie();IP(a,b,c,d,Bau);c=a.bR;a.u_=b.getUniformLocation(c,"sDiffuse");}
function OO(a,b,c){var d;d=a.u_;b.uniform1i(d,0);b.activeTexture(33984);c=c.gD;b.bindTexture(3553,c);}
var ABw=G(Dn);
function AIt(){FU.call(this);this.EF=null;}
function A$9(a){var b=new AIt();AVs(b,a);return b;}
function AVs(a,b){var c;ADS(a,b,C(81));c=a.bR;a.EF=b.getUniformLocation(c,"uContrast");}
function H9(){var a=this;FU.call(a);a.ta=null;a.t_=null;a.vq=null;a.CC=null;a.rL=0.0;}
function Bax(a,b,c){var d=new H9();XF(d,a,b,c);return d;}
function XF(a,b,c,d){ADW(a,b,c,d);c=a.bR;a.ta=b.getUniformLocation(c,"uTexTransform");c=a.bR;a.t_=b.getUniformLocation(c,"uColor");c=a.bR;a.vq=b.getUniformLocation(c,"uBgColor");c=a.bR;a.CC=b.getUniformLocation(c,"uTextPow");}
function AN7(a,b,c){var d;if(a.rL!==c){a.rL=c;d=a.CC;b.uniform2f(d,c,0.0);}}
function AMX(a,b,c,d){F6(b,a.t_,c);F6(b,a.vq,d);}
function AGU(a,b,c,d){var e,f,g,h,i,j;c=c.ef;e=c.a;f=c.b;g=d.bt;h=e;g=g/h;i=d.bx;j=f;i=i/j;h=d.bk/h;j=d.bH/j;c=a.ta;b.uniform4f(c,g,i,h,j);}
var QK=G(H9);
var AKp=G(H9);
function A_k(a){var b=new AKp();A1z(b,a);return b;}
function A1z(a,b){XF(a,b,C(65),C(82));}
function ALB(){var a=this;FU.call(a);a.xW=null;a.xU=null;a.ug=null;}
function A90(a){var b=new ALB();ARk(b,a);return b;}
function ARk(a,b){var c,d;ADS(a,b,C(83));c=a.bR;a.xW=b.getUniformLocation(c,"uColorB");d=a.bR;a.xU=b.getUniformLocation(d,"uColorF");d=a.bR;a.ug=b.getUniformLocation(d,"uContrast");}
function ANb(){var a=this;Dn.call(a);a.y7=null;a.yk=null;a.yj=null;}
function A$5(a){var b=new ANb();A1C(b,a);return b;}
function A1C(a,b){var c;Ie();IP(a,b,C(63),C(84),Bau);c=a.bR;a.y7=b.getUniformLocation(c,"uColor");c=a.bR;a.yk=b.getUniformLocation(c,"uPoints1");c=a.bR;a.yj=b.getUniformLocation(c,"uPoints2");}
function AHn(){var a=this;Dn.call(a);a.yL=null;a.vs=null;a.zV=null;}
function A$6(a){var b=new AHn();A0o(b,a);return b;}
function A0o(a,b){var c;Ie();IP(a,b,C(63),C(85),Bau);c=a.bR;a.yL=b.getUniformLocation(c,"uColor");c=a.bR;a.vs=b.getUniformLocation(c,"uBaseline");c=a.bR;a.zV=b.getUniformLocation(c,"uScaleHExp");}
var ACc=G(0);
var AOn=G(0);
function F6(b,c,d){var e,f,g,h;e=d.bt;f=d.bx;g=d.bk;h=d.bH;b.uniform4f(c,e,f,g,h);}
function AF_(b,c){var d,e;d=b.getError();if(d){b=Bh();e=new J;L(e);V(H(e,c),d);Bc(b,K(e));}}
var Lh=G();
var A_Y=null;function NJ(a,b,c){return b.nj(c);}
function AIy(){A_Y=new Lh;}
function AA6(){var a=this;B.call(a);a.GD=null;a.GF=null;a.GE=null;}
function Sr(){var a=this;B.call(a);a.fl=null;a.iC=null;a.yJ=null;a.xV=null;a.xi=null;a.vv=0;a.DI=0;}
function CF(){var a=this;B.call(a);a.GB=null;a.dF=0;}
function Dx(a,b,c){a.GB=b;a.dF=c;}
function HL(){var a=this;CF.call(a);a.vG=null;a.ry=null;a.Bq=null;a.ob=0;a.Ag=0;a.Cq=0;}
var Bau=null;var Bay=null;function Ie(){Ie=Bl(HL);ASM();}
function AO4(){Ie();return Bay.eh();}
function ASM(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new HL;c=P(Ex,2);d=c.data;AN8();d[0]=Baz;d[1]=BaA;Ie();Dx(b,C(86),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];AK5();switch(BaB.data[l.rf.dF]){case 1:f=f+l.g_|0;h=h+1|0;break a;case 2:e=e+l.g_|0;g=g+1|0;break a;default:}}i=i|1<<l.kk;k=k+1|0;}b.vG=c;b.ob=e;b.Ag=f;b.Cq=i;c=P(Ex,g);m=c.data;b.ry=c;c=P(Ex,h);n=c.data;b.Bq=c;o=0;f=0;g=o;while(f<j){b:{l=d[f];AK5();switch(BaB.data[l.rf.dF]){case 1:e=o+1|0;n[o]=l;break b;case 2:e=g+1|0;m[g]=l;g=e;e=o;break b;default:}e
=o;}f=f+1|0;o=e;}Bau=b;c=P(HL,1);c.data[0]=b;Bay=c;}
var Nd=G(0);
var UG=G(0);
var AEm=G(0);
var Hv=G();
function NF(){Hv.call(this);this.Eu=null;}
function AH$(){var a=this;NF.call(a);a.FK=0;a.om=0;a.mp=null;a.nY=null;a.wn=null;}
function AUz(a,b){var c=new AH$();A6$(c,a,b);return c;}
function A6$(a,b,c){a.Eu=b;b=new J;L(b);a.mp=b;a.nY=B6(32);a.FK=c;AH5();a.wn=BaC;}
function ADy(a,b,c,d){var e,$$je;e=a.Eu;if(e===null)a.om=1;if(!(a.om?0:1))return;a:{try{e.nR(b,c,d);break a;}catch($$e){$$je=Fh($$e);if($$je instanceof JP){}else{throw $$e;}}a.om=1;}}
function ZD(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AMz(b,c,d-c|0);e=Dh(Be(16,Bf(e.length,1024)));g=AMl(e,0,e.data.length);h=a.wn;i=new RP;b=Dh(1);j=b.data;j[0]=63;HZ();k=BaD;i.o3=k;i.or=k;c=j.length;if(c&&c>=i.yi){i.GA=h;i.tX=b.eh();i.FG=2.0;i.yi=4.0;i.z1=B6(512);i.sx=Dh(512);k=BaE;if(k===null){i=new BU;Bn(i,C(87));N(i);}i.o3=k;i.or=k;a:while(true){if(i.mi==3){f=new CV;Z(f);N(f);}i.mi=2;b:{while(true){try{k=AHg(i,f,g);}catch($$e){$$je=Fh($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(JH(k))
{d=Cl(f);if(d<=0)break b;k=EO(d);}else if(IW(k))break;h=!M4(k)?i.o3:i.or;c:{if(h!==BaE){if(h===BaF)break c;else break b;}d=Cl(g);b=i.tX;l=b.data.length;if(d<l){k=BaG;break b;}AFP(g,b,0,l);}FY(f,f.bi+LR(k)|0);}}l=IW(k);ADy(a,e,0,g.bi);QU(g);if(!l){while(true){d=i.mi;if(d!=2&&d!=4){f=new CV;Z(f);N(f);}f=BaH;if(f===f)i.mi=3;l=IW(f);ADy(a,e,0,g.bi);QU(g);if(!l)break;}return;}}N(A06(f));}i=new BU;Bn(i,C(88));N(i);}
function Bc(a,b){var c,d,e,f,g,h,i,j;Bq(BO(a.mp,b),10);b=a.mp;c=b.H;d=a.nY;if(c>d.data.length)d=B6(c);e=0;f=0;if(e>c){b=new BM;Bn(b,C(89));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}ZD(a,d,0,c);a.mp.H=0;}
function Ij(){Hv.call(this);this.Hg=null;}
function X3(a){a.Hg=Dh(1);}
var Mt=G(Ij);
var Baf=null;function AS6(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AJk(){var b;b=new Mt;X3(b);Baf=b;}
function Ex(){var a=this;CF.call(a);a.tZ=null;a.rf=null;a.g_=0;a.tu=0;a.kk=0;}
var Baz=null;var BaA=null;var BaI=null;function AN8(){AN8=Bl(Ex);A2k();}
function A9z(a,b,c,d,e,f,g){var h=new Ex();WJ(h,a,b,c,d,e,f,g);return h;}
function AOG(){AN8();return BaI.eh();}
function WJ(a,b,c,d,e,f,g,h){AN8();Dx(a,b,c);a.tZ=d;a.rf=e;a.g_=f;a.tu=g;a.kk=h;}
function A2k(){var b;b=new Ex;AIO();WJ(b,C(90),0,C(91),BaJ,2,0,0);Baz=b;b=A9z(C(92),1,C(93),BaJ,2,0,1);BaA=b;BaI=I(Ex,[Baz,b]);}
function Nx(){var a=this;B.call(a);a.Gq=null;a.GT=null;}
function AJv(b){var c,d;if(G4(b))N(AL0(b));if(!ANu(Q(b,0)))N(AL0(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ANu(d))break a;else N(AL0(b));}}c=c+1|0;}}
function ANu(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Nf=G(Nx);
var BaC=null;function AH5(){AH5=Bl(Nf);ARj();}
function AJH(a){var b,c;b=new UM;b.g$=C(94);HZ();c=BaD;b.j4=c;b.o$=c;b.GN=a;b.yo=0.3333333432674408;b.Ff=0.5;b.y_=Dh(512);b.Cf=B6(512);return b;}
function ARj(){var b,c,d,e,f;b=new Nf;AH5();c=P(BD,0);d=c.data;AJv(C(95));e=d.length;f=0;while(f<e){AJv(d[f]);f=f+1|0;}b.Gq=C(95);b.GT=c.eh();BaC=b;}
var L5=G();
var BaK=null;var BaB=null;function AK5(){AK5=Bl(L5);A4P();}
function A4P(){var b,c;b=BI((AIC()).data.length);c=b.data;BaB=b;c[BaL.dF]=1;c[BaJ.dF]=2;c=BI((AJu()).data.length);b=c.data;BaK=c;b[BaM.dF]=1;b[BaN.dF]=2;}
function AAg(){var a=this;B.call(a);a.g2=null;a.rr=null;a.nA=null;a.Cu=null;a.tF=null;a.tU=null;}
function AL3(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.g2,b,c));}
function P3(a,b){var c,d,e,f,g,h,i,$$je;c=new BD;d=b;while(a.rr[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.g2,b,d));f=e.data;Gw();d=f.length;AH5();g=BaC;h=AMl(e,0,d);a:{try{i=AJH(g);HZ();g=ALt(AIY(AN2(i,BaE),BaE),h);break a;}catch($$e){$$je=Fh($$e);if($$je instanceof GQ){g=$$je;}else{throw $$e;}}h=new AFY;h.ls=1;h.lP=1;h.jt=C(96);h.os=g;N(h);}if(!g.bi&&g.eO==g.ps)c.cr=g.i9;else{f=B6(Cl(g));e=f.data;c.cr=f;Qo(g,f,0,e.length);}return c;}
function YF(a,b){var c,d,e;c=new BD;d=b>>>1|0;e=d;while(a.nA[e]){e=e+1|0;}d=e-d|0;J$(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.g2,b,d)));return c;}
var IL=G(CF);
var BaL=null;var BaJ=null;var BaO=null;function AIO(){AIO=Bl(IL);A1i();}
function ARe(a,b){var c=new IL();ANE(c,a,b);return c;}
function AIC(){AIO();return BaO.eh();}
function ANE(a,b,c){AIO();Dx(a,b,c);}
function A1i(){var b;BaL=ARe(C(97),0);b=ARe(C(98),1);BaJ=b;BaO=I(IL,[BaL,b]);}
var Iq=G(CF);
var BaM=null;var BaN=null;var BaP=null;function AIQ(){AIQ=Bl(Iq);A1G();}
function A8K(a,b){var c=new Iq();AHx(c,a,b);return c;}
function AJu(){AIQ();return BaP.eh();}
function AHx(a,b,c){AIQ();Dx(a,b,c);}
function A1G(){var b;BaM=A8K(C(99),0);b=A8K(C(100),1);BaN=b;BaP=I(Iq,[BaM,b]);}
var Ou=G(Ij);
var Bag=null;function ARt(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AKH(){var b;b=new Ou;X3(b);Bag=b;}
var Wb=G(EQ);
function AJB(){BU.call(this);this.EL=null;}
function AL0(a){var b=new AJB();AW4(b,a);return b;}
function AW4(a,b){Z(a);a.EL=b;}
function CB(){B.call(this);this.y=null;}
function EC(a,b){a.y=b;}
function A8b(a,b){return 0;}
var Ne=G(0);
function AGo(){B.call(this);this.Ai=null;}
function AWs(a,b){a.Ai.setPointerCapture(b.pointerId);}
function AGp(){B.call(this);this.zs=null;}
function APZ(a,b){a.zs.releasePointerCapture(b.pointerId);}
function PK(){var a=this;B.call(a);a.V=null;a.m=null;a.bq=null;}
function IU(){var a=this;B.call(a);a.ps=0;a.bi=0;a.eO=0;a.kr=0;}
function AE$(a,b){a.kr=(-1);a.ps=b;a.eO=b;}
function FY(a,b){var c,d,e;if(b>=0&&b<=a.eO){a.bi=b;if(b<a.kr)a.kr=0;return a;}c=new BU;d=a.eO;e=new J;L(e);Bq(V(H(V(H(e,C(101)),b),C(102)),d),93);Bn(c,K(e));N(c);}
function Cl(a){return a.eO-a.bi|0;}
function En(a){return a.bi>=a.eO?0:1;}
var ACp=G(0);
var Mm=G(IU);
function AKs(b){var c,d;if(b>=0)return AVH(0,b,B6(b),0,b,0);c=new BU;d=new J;L(d);V(H(d,C(103)),b);Bn(c,K(d));N(c);}
function AMz(b,c,d){return AVH(0,b.data.length,b,c,c+d|0,0);}
function Qo(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BM;i=new J;L(i);V(H(V(H(i,C(104)),g),C(105)),f);Bn(h,K(i));N(h);}if(Cl(a)<d){j=new O7;Z(j);N(j);}if(d<0){j=new BM;k=new J;L(k);H(V(H(k,C(106)),d),C(107));Bn(j,K(k));N(j);}g=a.bi;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.i9.data[m+a.ri|0];l=l+1|0;c=n;m=o;}a.bi=g+d|0;return a;}}b=b.data;j=new BM;d=b.length;k=new J;L(k);Bq(V(H(V(H(k,C(108)),c),C(102)),d),41);Bn(j,K(k));N(j);}
function N8(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.rs){b=new K_;Z(b);N(b);}e=d-c|0;if(Cl(a)<e){b=new Kp;Z(b);N(b);}if(c>M(b)){f=new BM;d=M(b);b=new J;L(b);Bq(V(H(V(H(b,C(109)),c),C(102)),d),41);Bn(f,K(b));N(f);}if(d>M(b)){f=new BM;c=M(b);b=new J;L(b);V(H(V(H(b,C(110)),d),C(111)),c);Bn(f,K(b));N(f);}if(c>d){b=new BM;f=new J;L(f);V(H(V(H(f,C(109)),c),C(112)),d);Bn(b,K(f));N(b);}g=a.bi;while(c<d){h=g+1|0;i=c+1|0;ACu(a,g,Q(b,c));g=h;c=i;}a.bi=a.bi+e|0;return a;}
function NX(){var a=this;IU.call(a);a.ol=0;a.q1=null;a.Fr=null;}
function AMl(b,c,d){var e,f,g;e=b.data;f=new AFO;g=e.length;d=c+d|0;AE$(f,g);A2W();f.Fr=BaQ;f.ol=0;f.q1=b;f.bi=c;f.eO=d;f.Fv=0;f.yI=0;return f;}
function AFP(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.yI){e=new K_;Z(e);N(e);}if(Cl(a)<d){e=new Kp;Z(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BM;j=new J;L(j);V(H(V(H(j,C(113)),h),C(105)),g);Bn(i,K(j));N(i);}if(d<0){e=new BM;i=new J;L(i);H(V(H(i,C(106)),d),C(107));Bn(e,K(i));N(e);}h=a.bi;k=h+a.ol|0;l=0;while(l<d){b=a.q1.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bi=h+d|0;return a;}}b=b.data;e=new BM;d=b.length;i=new J;L(i);Bq(V(H(V(H(i,C(108)),c),C(102)),d),41);Bn(e,
K(i));N(e);}
function QU(a){a.bi=0;a.eO=a.ps;a.kr=(-1);return a;}
function Jn(){B.call(this);this.F$=null;}
var BaF=null;var BaE=null;var BaD=null;function HZ(){HZ=Bl(Jn);AT6();}
function AKb(a){var b=new Jn();ANs(b,a);return b;}
function ANs(a,b){HZ();a.F$=b;}
function AT6(){BaF=AKb(C(114));BaE=AKb(C(115));BaD=AKb(C(116));}
var AMv=G();
var LL=G(Mm);
function AIo(){var a=this;LL.call(a);a.rs=0;a.ri=0;a.i9=null;}
function AVH(a,b,c,d,e,f){var g=new AIo();AYO(g,a,b,c,d,e,f);return g;}
function AYO(a,b,c,d,e,f,g){AE$(a,c);a.bi=e;a.eO=f;a.ri=b;a.rs=g;a.i9=d;}
function ACu(a,b,c){a.i9.data[b+a.ri|0]=c;}
function Mf(){var a=this;B.call(a);a.GA=null;a.tX=null;a.FG=0.0;a.yi=0.0;a.o3=null;a.or=null;a.mi=0;}
function O4(){var a=this;B.call(a);a.iG=0;a.kW=0;}
var BaH=null;var BaG=null;function AHj(a,b){var c=new O4();ALF(c,a,b);return c;}
function ALF(a,b,c){a.iG=b;a.kW=c;}
function JH(a){return a.iG?0:1;}
function IW(a){return a.iG!=1?0:1;}
function Ot(a){return !SW(a)&&!M4(a)?0:1;}
function SW(a){return a.iG!=2?0:1;}
function M4(a){return a.iG!=3?0:1;}
function LR(a){var b;if(Ot(a))return a.kW;b=new DX;Z(b);N(b);}
function EO(b){return AHj(2,b);}
function V3(a){var b,c;switch(a.iG){case 0:b=new Sv;Z(b);N(b);case 1:b=new Xt;Z(b);N(b);case 2:b=new VW;c=a.kW;Z(b);b.Gi=c;N(b);case 3:b=new Sh;c=a.kW;Z(b);b.HM=c;N(b);default:}}
function ALS(){BaH=AHj(0,0);BaG=AHj(1,0);}
function AFH(){var a=this;B.call(a);a.v7=null;a.CV=null;a.Ck=null;}
function IX(){var a=this;B.call(a);a.bW=0;a.cS=0;a.dB=0;a.jb=0;}
function BaR(a,b,c,d){var e=new IX();AEc(e,a,b,c,d);return e;}
function AEc(a,b,c,d,e){a.bW=d;a.cS=b;a.dB=c;a.jb=e;}
function AA_(a){return !a.cS&&!a.bW&&!a.dB&&!a.jb?1:0;}
function Rt(){var a=this;IX.call(a);a.eH=null;a.be=0;a.kw=0;a.BX=0;a.pW=0;}
var AJL=G();
function WS(b,c){return (b+(c/2|0)|0)/c|0;}
function AAN(b,c,d){if(b<(2147483647/c|0))return WS(Bb(b,c),d);return 0.5+c*b/d|0;}
function IR(b,c){return ((b+c|0)-1|0)/c|0;}
function Hi(b){return b+0.5|0;}
function C6(b){return b+0.5|0;}
function Fs(b,c,d){return Be(b,Bf(c,d));}
function NW(b,c){return AK7(b)/AK7(c);}
function PH(){var a=this;IX.call(a);a.h=null;a.Gr=null;}
var Vb=G(0);
function Qu(){var a=this;B.call(a);a.xo=null;a.xp=null;}
function A3p(a,b){var c,d;c=a.xo;d=a.xp;$rt_globals.console.info("paste plain string "+b);c.g(F9(b));DI(d);}
var W=G(0);
function AEt(){B.call(this);this.xS=null;}
function O6(a,b){a.xS.clipboardData.setData("text/plain",$rt_ustr(b));}
function AFO(){var a=this;NX.call(a);a.Fv=0;a.yI=0;}
var AI0=G();
function Og(){B.call(this);this.FI=null;}
var BaQ=null;var BaS=null;function A2W(){A2W=Bl(Og);A8I();}
function AQ_(a){var b=new Og();AKK(b,a);return b;}
function AKK(a,b){A2W();a.FI=b;}
function A8I(){BaQ=AQ_(C(117));BaS=AQ_(C(118));}
var HW=G(0);
function EW(a){return Wk(a.uQ(),a.u());}
function Wk(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AID(b,c,d));}
function AID(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Bq(BO(d,b[f]),47);f=f+1|0;}return BO(d,c);}
var JQ=G(0);
function Qe(a,b,c){ADt(a,b,c,0,(-1));}
function Mk(){var a=this;B.call(a);a.iT=null;a.hQ=null;a.iD=null;}
function AJy(a,b){var c=new Mk();A0J(c,a,b);return c;}
function BaT(a,b,c){var d=new Mk();QV(d,a,b,c);return d;}
function AOJ(b){var c,d,e,f,g,h,i;c=new Mk;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BD,0);else{f=P(BD,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=F9(e[h]);h=h+1|0;}}}else f=P(BD,0);QV(c,d,b,f);return c;}
function A0J(a,b,c){QV(a,b,null,c);}
function QV(a,b,c,d){a.iT=b;a.hQ=c;a.iD=d;}
function DJ(a){var b;b=a.iT;return F9(b!==null?b.name:a.hQ.name);}
function APf(a){return a.iD;}
function WZ(a,b,c){var d,e,f;d=ANY(c);e=new W8;e.uE=b;b=a.hQ;if(b!==null)b.text().then(Bz(e,"f"),Bz(d,"f"));else{b=a.iT.getFile();f=new W9;f.BO=e;f.BN=d;b.then(Bz(f,"f"),Bz(d,"f"));}}
function ADt(a,b,c,d,e){var f,g;f=ANY(c);c=new AA9;c.tc=b;b=a.hQ;if(b!==null)XO(a,d,e,c,f,b);else{g=a.iT.getFile();b=new AF5;b.xy=a;b.xx=d;b.xA=e;b.xz=c;b.xB=f;g.then(Bz(b,"f"),Bz(f,"f"));}}
function XO(a,b,c,d,e,f){if(c>=0){c=b+c|0;f=f.slice(b,c);}else if(b)f=f.slice(b);f.arrayBuffer().then(Bz(d,"f"),Bz(e,"f"));}
function ANY(b){var c;c=new WQ;c.xF=b;return c;}
function Om(a){var b,c,d;if(a.hQ===null)b=Wk(a.iD,DJ(a));else{b=Ig(BF(a));c=a.iD;d=DJ(a);b=BO(A8B(b),C(30));AID(c,d,b);b=K(b);}return b;}
var Kg=G(0);
function O0(){var a=this;B.call(a);a.iP=null;a.f8=null;a.k5=null;}
var Bas=null;function A$v(a,b){var c=new O0();AG7(c,a,b);return c;}
function A8y(a,b,c){var d=new O0();ALZ(d,a,b,c);return d;}
function AG7(a,b,c){a.iP=b;if(c.length)a.f8=ACz(c);else{a.f8=P(BD,0);a.k5=P(BD,0);}}
function ALZ(a,b,c,d){a.iP=b;a.f8=c;a.k5=d;}
function ACz(b){var c,d,e,f;if(!b.length)c=P(BD,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BD,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=F9(b[e]);e=e+1|0;}}}return c;}
function Io(a,b){var c,d;c=new AEW;d=a.iP.values();c.oh=a;c.Ac=d;c.lQ=b;ADL(c);}
function AAO(a){var b,c,d,e;b=a.k5;if(b===null){b=a.f8;c=b.data;d=J2(a);e=c.length;b=CT(b,e+1|0);b.data[e]=d;b=b;a.k5=b;}return b;}
function J2(a){return F9(a.iP.name);}
function A7E(a){return a.f8;}
function Jt(a){return Wk(a.f8,J2(a));}
function QL(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AGW(){Bas=new WD;}
var AFc=G(0);
function AMM(){B.call(this);this.jl=null;}
function A9k(a){var b=new AMM();A4j(b,a);return b;}
function A4j(a,b){a.jl=b;}
function Z3(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.jl));}
function E$(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.jl));}
function CP(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.jl));}
function A03(a){var b,c;b=a.jl.byteLength;c=new J;L(c);H(V(H(c,C(119)),b),C(120));return K(c);}
var WD=G();
function A27(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function Ow(){var a=this;Mf.call(a);a.z1=null;a.sx=null;}
function AHg(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.z1;e=0;f=0;g=a.sx;a:{while(true){if((e+32|0)>f&&En(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bf(Cl(b)+j|0,i.length);Qo(b,d,j,f-j|0);e=0;}if(!En(c)){k=!En(b)&&e>=f?BaH:BaG;break a;}i=g.data;j=Bf(Cl(c),i.length);l=new Ze;l.rH=b;l.At=c;k=AIx(a,d,e,f,g,0,j,l);e=l.wL;j=l.xK;if(k===null){if(!En(b)&&e>=f)k=BaH;else if(!En(c)&&e>=f)k=BaG;}AFP(c,g,0,j);if(k!==null)break;}}FY(b,b.bi-(f-e|0)|0);return k;}
var RP=G(Ow);
function AIx(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(O3(h,2))break a;i=BaG;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Pq(l)){if((f+3|0)>g){j=j+(-1)|0;if(O3(h,3))break a;i=BaG;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!C1(l)){i=EO(1);break a;}if
(j>=d){if(En(h.rH))break a;i=BaH;break a;}c=j+1|0;m=k[j];if(!Dq(m)){j=c+(-2)|0;i=EO(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(O3(h,4))break a;i=BaG;break a;}k=e.data;o=E9(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.wL=j;h.xK=f;return i;}
var JP=G(EQ);
var J6=G(0);
function Nm(){var a=this;B.call(a);a.mP=null;a.k_=null;}
function Ye(a,b){var c;c=a.k_;a.k_=b;return c;}
function Lr(){var a=this;Nm.call(a);a.b6=null;a.cg=null;a.hr=0;a.hy=0;}
function NR(a){var b;b=Mg(a);if(b==2){if(Mg(a.cg)<0)a.cg=Qd(a.cg);return Rl(a);}if(b!=(-2))return a;if(Mg(a.b6)>0)a.b6=Rl(a.b6);return Qd(a);}
function Mg(a){var b,c;b=a.cg;c=b===null?0:b.hr;b=a.b6;return c-(b===null?0:b.hr)|0;}
function Qd(a){var b;b=a.b6;a.b6=b.cg;b.cg=a;Fl(a);Fl(b);return b;}
function Rl(a){var b;b=a.cg;a.cg=b.b6;b.b6=a;Fl(a);Fl(b);return b;}
function Fl(a){var b,c,d;b=a.cg;c=b===null?0:b.hr;b=a.b6;d=b===null?0:b.hr;a.hr=Be(c,d)+1|0;a.hy=1;b=a.b6;if(b!==null)a.hy=1+b.hy|0;b=a.cg;if(b!==null)a.hy=a.hy+b.hy|0;}
var AG1=G(CB);
function A9B(a){var b=new AG1();A2E(b,a);return b;}
function A2E(a,b){var c,d;EC(a,b);b=$rt_globals.fetch("test.wasm");c=new YR;b=b.then(Bz(c,"f"));c=new YQ;b=b.then(Bz(c,"f"));c=new YO;d=new YN;b.then(Bz(c,"f"),Bz(d,"f"));}
function ATV(a){}
function ASE(a,b,c){}
function It(){var a=this;CB.call(a);a.dg=null;a.n=null;}
function AE9(a,b){var c,d,e;EC(a,b);a.dg=ALH(0,0,64);c=new Vh;c.bM=new Bg;c.di=CW(P(CL,0));c.c_=new Bg;c.rg=new Bg;c.nk=new B3;c.Ex=new B3;d=b.V;c.bS=d;e=b.bq;c.cq=e;c.cX=d.mR;c.de=SQ(e);d=b.m.nT;e=new AA2;e.u$=c;Y(d,e);d=b.m.nd;e=new AA1;e.xN=c;Y(d,e);Y(b.m.gr,c);Y(b.m.gO,c);a.n=c;Y(b.m.bA,new ACe);b=b.m.bA;c=a.n;BE(c);d=new ACd;d.y$=c;Y(b,d);}
function GW(a){E3(a.y.V,a.dg);}
function AIE(a,b,c){var d,e,f,g,h;a:{d=a.n;Ct(d.bM,b);e=d.cd;if(e!==c){d.cd=c;f=(B4(d.di)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eu(e,c);h=h+1|0;}}}}
function B8(){It.call(this);this.s=null;}
function FH(a,b){Fx(a,b,1);}
function Fx(a,b,c){var d,e,f;AE9(a,b);d=new AF3;e=a.n;d.bC=CW(P(Vt,0));d.F=e;a.s=d;Y(a.n.di,d);Y(b.m.bX,a.s);d=b.m.fg;e=a.s;BE(e);f=new Yd;f.xD=e;Y(d,f);d=b.m.cf;e=a.s;BE(e);f=new Yc;f.uU=e;Y(d,f);if(c){b=b.m.bX;f=a.n.de;d=new Y1;d.yg=f;Y(b,d);}}
function ARn(a){GW(a);Iv(a.s);}
function Gp(a,b,c){var d,e,f;AIE(a,b,c);d=(B4(a.s.bC)).data;e=d.length;f=0;while(f<e){b=d[f];if(AAS(b))Yq(b);f=f+1|0;}}
function LD(a,b){var c,d,e,f,g;c=a.s;d=0;e=(B4(c.bC)).data;f=e.length;g=0;while(g<f){d=e[g].ba.cy(b)|d;g=g+1|0;}return d;}
var E0=G(0);
function AKh(a){a.d0(Jj());}
function H6(a){a.d0(FK());}
function AK_(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new JD;c=new KT;d=new H0;AJI();LF(d,BaU);Ng(c,d,B0(BaV),B0(BaW),B0(BaX),B0(BaV),B0(BaY),B0(BaZ),B0(Ba0),B0(Ba1),B0(Ba2),B0(Ba3));e=AMs(S(C(121)));f=(ANH()).data;g=f.length;h=P(K9,g);i=h.data;j=0;while(j<g){i[j]=f[j].qG;j=j+1|0;}k=ANe(S(C(122)),S(C(123)),S(C(124)),S(C(125)));l=new JE;m=new JN;AZE();d=Ba4;Pz(m,d,Ba5,Ba6,Ba7,Ba8,d);MF(l,m,AN3(),AKk(S(C(126)),S(C(121)),Cs(0)),AN3(),AKL(1,0.07500000298023224),Ba9,Ba$);Mv(b,c,e,h,k,l,AGX(S(C(127)),S(C(128)),S(C(129)),
S(C(130))));a.d0(b);}
var Ik=G(0);
var EE=G(0);
function Lf(){var a=this;B8.call(a);a.I=null;a.K=null;a.jJ=null;a.jp=0;a.le=null;a.nw=null;a.t1=null;a.o8=null;a.gx=null;}
function Ba_(a){var b=new Lf();AHq(b,a);return b;}
function AHq(a,b){var c,d,e;Fx(a,b,0);a.gx=ALq(a.n);c=Ho(a.s);a.jJ=c;a.I=Fr(c);c=Fr(a.jJ);a.K=c;a.nw=Xe(a.I,c);c=a.I;c.b8=1;KW(a.gx,c,a.K);c=a.I;d=new Ss;d.sE=a;c.gK=d;d=a.K;e=new Sp;e.uX=a;d.gK=e;Gx(c,0);Gx(a.K,0);Ka(a.n,a.I);Y(b.m.fg,a);Y(b.m.bX,a);c=b.m.bA;d=new Sq;d.GZ=a;Y(c,d);c=b.m.bA;d=new F1;e=new Sk;e.CS=a;Gk(d,b,e);Y(c,d);Y(b.m.gr,a);Y(b.m.gO,a);b=b.m.cf;c=new Sl;c.B9=a;Y(b,c);H6(a);}
function Vx(a,b){var c,d;if(a.I===b)a.jp=a.jp|1;if(a.K===b)a.jp=a.jp|2;if((a.jp&3)==3){Bc(Bh(),C(131));b=a.I.d.i;c=a.K.d.i;d=new S5;d.As=a;Zk(b,c,d,a.y.bq);}}
function AX$(a,b,c){if(Cz(a.n,a.I))return GK(a.I,b,c);if(!Cz(a.n,a.K))return 0;return GK(a.K,b,c);}
function Wh(a,b){var c;c=new Xp;c.Am=b;return c;}
function ANL(a,b){a.I.fq=b;a.K.fq=b;}
function AUE(a,b){var c;c=LD(a,b);return HG(a.I,b)|HG(a.K,b)|c;}
function AOB(a){GW(a);Gj(a.I);Gj(a.K);SS(a.gx);Iv(a.s);}
function ASL(a){GU(a.I);GU(a.K);}
function ASK(a){Hh(a.I);Hh(a.K);}
function A8L(a,b){Go(a.I,b);Go(a.K,b);}
function A20(a,b){I5(a.n,b);}
function AOE(a,b){if(F$(a.s,b)){HR(a.I);HR(a.K);}}
function AOT(a,b,c){var d,e,f,g,h,i;Gp(a,b,c);d=new Bg;e=Ci(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;LK(f,g-h|0,b.b);H3(a.I,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;H3(a.K,d,f,c);X(a.gx.j,f.a,d.b);X(a.gx.k,d.a-f.a|0,f.b);}
function AYo(a,b){BE(b);Fw(a.jJ,b);Ed(a.I,b);Ed(a.K,b);a.gx.hI=b;}
function A0u(a,b){var c,d;c=BG(a.I,b.h)&&Kb(a.I,b)?1:0;d=BG(a.K,b.h)&&Kb(a.K,b)?1:0;return !c&&!d?0:1;}
function AV$(a,b,c,d){var e,f;e=BG(a.I,b.h)&&I9(a.I,b,c,d)?1:0;f=BG(a.K,b.h)&&I9(a.K,b,c,d)?1:0;return !e&&!f?0:1;}
function ASW(a,b,c){var d,e,f,g,h,i,j,k;d=BG(a.I,b.h);e=BG(a.K,b.h);f=a.n;g=f.b2;h=g!==null?0:1;i=a.I;j=g!==i?0:1;k=g!==a.K?0:1;if(d&&!(!h&&!k))Cn(f,i);if(e&&!(!h&&!j))Cn(a.n,a.K);if(d){i=J7(a.I,b,c);if(i!==null)return i;}return !e?null:J7(a.K,b,c);}
function A7P(a,b,c){var d,e,f,g;d=BG(a.I,b.h);e=BG(a.K,b.h);f=d&&JI(a.I,b,c)?1:0;g=e&&JI(a.K,b,c)?1:0;return !f&&!g?0:1;}
function ATv(a,b,c,d){var e,f,g,h;e=BG(a.I,b.h);f=BG(a.K,b.h);g=e&&HP(a.I,b,c,d)?1:0;h=f&&HP(a.K,b,c,d)?1:0;return !g&&!h?0:1;}
function A7H(a){return Cz(a.n,a.I)?Wh(a,a.I):!Cz(a.n,a.K)?null:Wh(a,a.K);}
var Wi=G(Lf);
function Uu(a){return Eq(1);}
function Rk(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new PX;d=d.then(Bz(e,"f"));f=new PZ;f.vb=b;f.va=c;g=new PY;d.then(Bz(f,"f"),Bz(g,"f"));}
var AJ7=G();
function A6W(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(132)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(KG(b)){case -1570047148:if(!Bk(b,C(133)))break a;d=17;break a;case -1509980539:if(!Bk(b,C(134)))break a;d=13;break a;case -1351411913:if(!Bk(b,C(135)))break a;d=5;break a;case -1073555521:if(!Bk(b,C(136)))break a;d=14;break a;case -1045861099:if(!Bk(b,C(137)))break a;d=18;break a;case -1045861098:if(!Bk(b,C(138)))break a;d=19;break a;case -811765794:if(!Bk(b,C(139)))break a;d=6;break a;case -785237654:if
(!Bk(b,C(140)))break a;d=11;break a;case -695287066:if(!Bk(b,C(141)))break a;d=20;break a;case -643550180:if(!Bk(b,C(142)))break a;d=28;break a;case -631889171:if(!Bk(b,C(143)))break a;d=9;break a;case -536831301:if(!Bk(b,C(144)))break a;d=26;break a;case -439438829:if(!Bk(b,C(145)))break a;d=21;break a;case -357667878:if(!Bk(b,C(146)))break a;d=22;break a;case -223304637:if(!Bk(b,C(147)))break a;d=2;break a;case -193916863:if(!Bk(b,C(148)))break a;d=23;break a;case 2129957:if(!Bk(b,C(149)))break a;d=1;break a;case 3343967:if
(!Bk(b,C(150)))break a;d=10;break a;case 3556498:if(!Bk(b,C(151)))break a;d=4;break a;case 91636708:if(!Bk(b,C(152)))break a;d=25;break a;case 485517998:if(!Bk(b,C(153)))break a;d=7;break a;case 544901384:if(!Bk(b,C(154)))break a;d=3;break a;case 654963552:if(!Bk(b,C(155)))break a;d=24;break a;case 1030621992:if(!Bk(b,C(156)))break a;d=16;break a;case 1164939699:if(!Bk(b,C(157)))break a;d=29;break a;case 1465713255:if(!Bk(b,C(158)))break a;d=8;break a;case 1554501643:if(!Bk(b,C(159)))break a;d=15;break a;case 1609169232:if
(!Bk(b,C(160)))break a;d=12;break a;case 1826008729:if(!Bk(b,C(161)))break a;d=30;break a;case 2090248989:if(!Bk(b,C(162)))break a;d=27;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Wr;break b;case 3:case 4:b=new Wo;break b;case 5:b=new Wn;break b;case 6:b=new Wq;break b;case 7:b=new Wp;break b;case 8:b=new Wv;break b;case 9:case 10:b=new Wu;break b;case 11:b=new Wx;break b;case 12:b=new Ww;break b;case 13:b=new ADg;break b;case 14:b=new ADf;break b;case 15:b=new ADe;break b;case 16:b=new AC0;break b;case 17:b
=new ACZ;break b;case 18:b=new ACX;break b;case 19:b=new ACW;break b;case 20:b=new ACV;break b;case 21:b=new ACU;break b;case 22:b=new ACT;break b;case 23:b=new AC4;break b;case 24:b=new AC3;break b;case 25:b=new AC2;break b;case 26:b=new AC1;break b;case 27:b=new AC$;break b;case 28:b=new AC9;break b;case 29:b=new AC8;break b;case 30:b=new AC7;break b;default:b=new AC6;break b;}b=new Ws;}return b;}
var AHe=G();
var JM=G(0);
var YR=G();
function ARz(a,b){return b.arrayBuffer();}
var YQ=G();
function AU7(a,b){var c,d;c=new AAf;d=new AAd;return $rt_globals.WebAssembly.instantiate(b,ATa(Bz(c,"f"),Bz(d,"f")));}
var YO=G();
function AVB(a,b){APV(b);}
var YN=G();
function A0M(a,b){AKe(b);}
function U6(){B.call(this);this.yP=null;}
function A8h(a,b){IH(a.yP.I,b);}
function AI4(){B.call(this);this.Cy=null;}
function A$s(a){var b=new AI4();A7v(b,a);return b;}
function A7v(a,b){a.Cy=b;}
function A3g(a,b){IH(a.Cy.K,b);}
var Ws=G();
function AXw(a,b){var c,d,e,f;c=new Q3;Fx(c,b,0);c.gc=ALq(c.n);d=Ho(c.s);c.jm=d;c.O=Fr(d);d=Fr(c.jm);c.U=d;c.nr=Xe(c.O,d);d=c.O;d.b8=1;KW(c.gc,d,c.U);d=c.O;e=new VE;e.Dy=c;d.gK=e;e=c.U;f=new VF;f.AU=c;e.gK=f;Gx(d,0);Gx(c.U,0);Ka(c.n,c.O);Y(b.m.fg,c);Y(b.m.bX,c);d=b.m.bA;e=new VG;e.Gz=c;Y(d,e);d=b.m.bA;e=new F1;f=new VC;f.wC=c;Gk(e,b,f);Y(d,e);Y(b.m.gr,c);Y(b.m.gO,c);b=b.m.cf;d=new VD;d.uk=c;Y(b,d);H6(c);return c;}
var Wr=G();
function AOY(a,b){return A9Z(b);}
var Wo=G();
function A1t(a,b){return A9$(b);}
var Wn=G();
function A4C(a,b){var c,d,e,f,g;c=new ADz;EC(c,b);d=(Jj()).bz.eI;c.G5=d;c.lZ=AN$(d);c.jF=new Bg;c.iH=new Bg;c.dN=Lz();c.en=Lz();c.n9=Eq(1);b=b.m.bX;d=new Yv;d.m3=c;Y(b,d);b=c.n9.data[D1()*c.n9.data.length|0];d=I8(c.y.V,b,10);c.nW=d;Cr(c.y.V.cv,d);e=EF(c.y.V.cv,C(163));d=c.y.V.cv;f=new J;L(f);Bq(f,43);H(f,b);g=C6(e+EF(d,K(f)));c.ki=g;c.jf=BV(c.jf,AGF(c,1,g,b,c.nW,c.y.V));c.je=BV(c.je,AGF(c,0,c.ki,b,c.nW,c.y.V));SA(c,c.dN,c.jf);SA(c,c.en,c.je);Cv(c.dN.bg,1.0,1.0,1.0,1.0);FL(c.dN,c.lZ);Cv(c.en.bg,1.0,1.0,1.0,1.0);FL(c.en,
c.lZ);b=Bh();g=c.ki;d=new J;L(d);V(H(d,C(164)),g);Bc(b,K(d));return c;}
var Wq=G();
function ARh(a,b){var c,d,e;c=new Zy;FH(c,b);d=new Yr;d.oY=new Bg;d.po=new Bg;c.Aq=d;c.fD=AMx();c.d5=AMx();c.pG=DC(C(165),25.0);Y(c.n.di,c);d=b.m.bA;e=new AD3;e.wd=c;Y(d,e);Y(b.m.bX,c);b=b.m.cf;d=new ADZ;d.w_=c;Y(b,d);AGH(c.d5);BN(c.dg,Cs(43));b=FI();Ko(c.fD,b);Ko(c.d5,b);b=c.fD;b.lC=new AD0;d=c.d5;d.lC=new AD1;d.qg=new Rg;d.yn=new Rh;N_(b,(Tb(0)).mu);N_(c.d5,(Tb(0)).mu);return c;}
var Wp=G();
function AYW(a,b){var c,d,e;c=new ACY;FH(c,b);Y(c.n.di,c);BN(c.dg,Cs(43));d=b.m.bA;e=new Wf;e.EU=c;Y(d,e);b=b.m.cf;d=new Wg;d.Dk=c;Y(b,d);return c;}
var Wv=G();
function AQW(a,b){var c,d,e;c=new YW;AE9(c,b);c.iy=BP();c.gW=BP();c.ti=S(C(166));c.kU=WM();c.ix=0;d=c.n.di;e=new P6;e.zF=c;Y(d,e);Y(b.m.bX,c);d=b.m.bA;e=new P5;e.xj=c;Y(d,e);b=I8(b.V,C(165),35);c.kZ=b;c.ne=ALa(Ft(b));BN(c.dg,S(C(167)));return c;}
var Wu=G();
function ATM(a,b){var c,d,e,f;c=new Up;EC(c,b);c.iA=AKd();c.fx=0;c.wr=500;c.tj=Jk(0,0,0,255,new B3);c.nt=20;c.y1=20;c.Cl=Jj();d=b.m.bX;e=new YH;e.my=c;f=new VB;f.Ce=e;e.s4=f;Y(d,e);d=b.m.fg;e=new ACf;e.CP=c;Y(d,e);c.e7=b.V;c.zk=SQ(b.bq);AAK(c.iA,I8(c.e7,C(165),c.y1),c.nt,c.e7.mR);c.jD=JT();return c;}
var Wx=G();
function A6b(a,b){var c,d,e;c=new LT;FH(c,b);c.z0=ALT();c.nn=Dh(16384);d=Bba.data.length;c.lk=BI(d);c.oP=BI(d);b=b.m.cf;e=new RY;e.uA=c;Y(b,e);b=c.n.di;e=new RX;e.Cx=c;Y(b,e);return c;}
var Ww=G();
function AOC(a,b){var c,d,e,f,g,h,i;c=new Zd;FH(c,b);d=b.m.cf;e=new S1;e.zI=c;Y(d,e);d=b.bq;f=new QT;f.FV=c;g=P(B,1);g.data[0]=C(168);CI(d,f,C(169),g);h=new QS;h.GX=c;g=P(B,1);g.data[0]=AL_([1,2,3,4,5]);CI(d,h,C(170),g);h=new QP;h.H1=c;i=P(B,1);i.data[0]=A9A([1,2,3,4,5]);CI(d,h,C(171),i);h=new QN;h.G8=c;g=P(B,1);g.data[0]=DL([1,2,3,4,5]);CI(d,h,C(172),g);d=b.m.bA;e=new F1;h=new S0;h.Ci=c;Gk(e,b,h);Y(d,e);return c;}
var ADg=G();
function AOR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=new Yx;Ku(c,b);c.fv=IS(0,0,300,300);c.hl=UK(0,0,3,3);d=b.V;b=b.m.bX;e=new AD_;e.n2=c;Y(b,e);b=AOf(d);c.C3=b;Gi(c.fv,b);Gu(c.fv);b=c.fv.bu;Gb();BN(b,Bbb);BN(c.fv.bg,DF(204,120,50));AIQ();e=BaN;f=Dh((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C4(d);AK5();switch(BaK.data[e.dF]){case 1:h=33321;break a;case 2:h=32856;break a;default:}b=
new Fq;Z(b);N(b);}b:{YK(m,5,5,h);b=m.d$.ev;switch(BaK.data[e.dF]){case 1:l=6403;break b;case 2:l=6408;break b;default:}b=new Fq;Z(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;e=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,e);c.oL=m;X(c.hl.v,BW(m),CX(c.oL));BN(c.hl.bu,c.q_);return c;}
var ADf=G();
function A3n(a,b){var c,d,e;c=new Un;Ku(c,b);c.hC=IS(0,0,300,300);c.nq=new Bg;c.lg=new Bg;c.ky=new Bg;d=b.V;b=b.m.bX;e=new ZG;e.lc=c;Y(b,e);b=AOf(d);c.sa=b;Gi(c.hC,b);Gu(c.hC);b=c.hC.bu;Gb();BN(b,Bbb);BN(c.hC.bg,DF(204,120,50));return c;}
var ADe=G();
function AUO(a,b){var c,d,e,f;c=new ACJ;EC(c,b);c.F7=20;c.HN=11;c.Gs=220;c.m1=new Bg;c.Hf=5000;c.iV=1;c.hv=I(H0,[Cs(0),Cs(255)]);c.fd=b.V;d=b.m.bX;e=new AAx;e.mO=c;f=new WI;f.uW=e;e.r1=f;Y(d,e);b=b.m.fg;d=new XU;d.sL=c;Y(b,d);b=Ip(c.fd,200,220);c.pO=b;Ib(b,C(165),20.0);b=Ip(c.fd,200,20);c.ho=b;Ib(b,C(165),20.0);c.i_=JT();return c;}
var AC0=G();
function ARD(a,b){var c,d,e;c=new K7;Ku(c,b);Y(b.m.bX,c);d=b.m.bA;e=new AFL;e.ym=c;Y(d,e);Y(b.m.gr,new AFK);d=b.m.gr;e=new AFJ;e.tM=c;Y(d,e);Y(b.m.gO,new AFI);d=b.m.gO;e=new AFM;e.B2=c;Y(d,e);b=!Xz(b.bq)?C(173):C(174);d=new J;L(d);H(H(d,C(175)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ACZ=G();
function AY_(a,b){var c,d;c=new T6;Ku(c,b);c.vQ=Cs(20);c.g5=IS(0,0,300,300);c.xn=DC(C(13),80.0);b=b.m.bA;d=new TK;d.Ga=c;Y(b,d);return c;}
var ACX=G();
function A7j(a,b){var c;c=new U1;PF(c,b);HV(c.cA,0,0,300,300);X(c.dP,300,300);return c;}
var ACW=G();
function ATX(a,b){var c;c=new U0;PF(c,b);c.gC=new Bg;c.g6=new Bg;X(c.eB,150,140);X(c.dP,500,100);X(c.fS,150,200);X(c.fc,500,250);return c;}
var ACV=G();
function A6d(a,b){var c,d,e;c=new X2;FH(c,b);c.EE=3;c.xX=DC(C(176),20.0);c.kM=WM();c.rv=1;Y(c.n.di,c);BN(c.dg,Cs(43));d=b.m.bA;e=new Qv;e.Bb=c;Y(d,e);b=b.m.cf;d=new Qx;d.xh=c;Y(b,d);return c;}
var ACU=G();
function AOt(a,b){return A$B(b);}
var ACT=G();
function A51(a,b){var c,d,e,f;c=new RF;KS(c,b);BN(c.dg,Cs(43));c.m2=Ho(c.s);d=b.m.bA;e=new F1;f=new Qy;f.Dx=c;Gk(e,b,f);Y(d,e);b=b.m.cf;d=new Qz;d.A9=c;Y(b,d);return c;}
var AC4=G();
function A5b(a,b){var c,d;c=new Tg;Fx(c,b,1);c.n$=FK();Y(c.n.di,c);BN(c.dg,Cs(43));b=b.m.cf;d=new Zz;d.zS=c;Y(b,d);return c;}
var AC3=G();
function AQr(a,b){var c,d,e,f;c=new Sw;Fx(c,b,1);c.ny=FK();Y(c.n.di,c);BN(c.dg,Cs(43));d=b.m.bA;e=new F1;f=new Q8;f.uD=c;Gk(e,b,f);Y(d,e);b=b.m.cf;d=new Q7;d.wX=c;Y(b,d);return c;}
var AC2=G();
function A2q(a,b){var c;c=new AAR;KS(c,b);c.xq=FK();BN(c.dg,Cs(43));return c;}
var AC1=G();
function ASz(a,b){return A$a(b);}
var AC$=G();
function ASA(a,b){var c,d,e;c=new QJ;KS(c,b);c.wQ=FK();BN(c.dg,Cs(43));d=b.m.cf;e=new Wm;e.ER=c;Y(d,e);b=b.m.bA;d=new Wl;d.vr=c;Y(b,d);return c;}
var AC9=G();
function AZR(a,b){var c,d,e;c=new ABC;KS(c,b);c.qf=FK();BN(c.dg,Cs(43));d=b.m.cf;e=new R0;e.Dn=c;Y(d,e);b=b.m.bA;d=new RZ;d.Fp=c;Y(b,d);return c;}
var AC8=G();
function AQF(a,b){var c,d;c=new Vy;FH(c,b);c.hG=FK();Y(c.n.di,c);BN(c.dg,Cs(43));b=b.m.cf;d=new ADi;d.r5=c;Y(b,d);return c;}
var AC7=G();
function A4_(a,b){var c;c=new Yy;Fx(c,b,0);c.DD=FK();return c;}
var AC6=G();
function AXP(a,b){var c;c=new PP;AKy(c,b);ANv(c.em);return c;}
function CJ(){var a=this;B.call(a);a.j=null;a.k=null;a.b4=0.0;}
function AYV(){var a=new CJ();Fo(a);return a;}
function Fo(a){a.j=new Bg;a.k=new Bg;}
function AWd(a){}
function A4s(a){return BK(0,0);}
function Kw(a,b,c,d){var e;if(!KD(a.j,b)){a.sS(b);Ct(a.j,b);}if(!KD(a.k,c)){a.p8(c);Ct(a.k,c);}e=a.b4;if(e!==d){a.b4=d;a.mk(e,d);}}
function DH(a,b){return Ci(b,a.b4);}
function BG(a,b){return GV(b,a.j,a.k);}
function AN5(a,b){var c,d,e,f;c=a.j;d=c.a;e=c.b;f=a.k;ASB();Bw(b,d,e,f,Bbc);}
function AEQ(a,b){var c;c=a.j;ME(b,c.a,c.b,a.k);}
function A0D(a,b){return 0;}
function ATQ(a,b){}
function AX4(a,b){}
function A5O(a,b,c){}
function AYa(a){}
function ASu(a,b,c,d){return 0;}
function AP7(a,b,c){return null;}
function AUA(a,b,c){return 0;}
function AXO(a,b){return 0;}
function A5E(a,b,c,d){return 0;}
function AHX(){var a=this;CJ.call(a);a.jd=null;a.l7=null;a.l8=null;a.l5=null;a.l6=null;a.dY=null;a.ha=null;a.hb=null;a.hI=null;}
function ALq(a){var b=new AHX();AQv(b,a);return b;}
function AQv(a,b){Fo(a);a.l7=new Bg;a.l8=new Bg;a.l5=new Bg;a.l6=new Bg;a.jd=b;}
function KW(a,b,c){a.ha=b;a.hb=c;}
function SS(a){AJh(a,a.jd.bS);}
function AJh(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.j;Bw(b,c.a,c.b,a.k,a.hI.bz.eI);if(a.dY===null)return;d=Cw(a.jd,2.0);e=Hn(a.dY,a.ha.l4(),1);f=Hn(a.dY,a.ha.ld(),1);g=Hn(a.dY,a.hb.l4(),0);h=Hn(a.dY,a.hb.ld(),0);i=Bf(e,g);j=Be(f,h);g=BR(i,j);if(g<=0)Cb(b,1);k=a.ha.lD();l=a.ha.mK();m=a.hb.mK();n=a.hb.lD();o=a.jd.rg;while(i<=j){p=a.dY.iY.data[i];if(p.p7){q=a.ha.ic(p.iF);r=a.ha.ic(p.iF+p.jG|0);s=a.hb.ic(p.iE);t=a.hb.ic(p.iE+p.jE|0);X(a.l7,a.j.a,q);X(a.l5,a.j.a,r);X(a.l8,a.j.a+a.k.a|0,s);X(a.l6,
a.j.a+a.k.a|0,t);u=Be(Bf(q,s),a.j.b);v=Bf(Be(r,t),a.j.b+a.k.b|0);if(v>u){X(o,a.k.a,v-u|0);c=a.hI;w=IG(c.d7,c,p.p7);if(q==r)St(a,b,q,s,d,k.a,l.a,w,a.l7,a.l5);if(s==t)St(a,b,s,q,d,n.a,m.a,w,a.l8,a.l6);AGO(b,a.j.a,u,o,a.l7,a.l8,a.l5,a.l6,w);}}i=i+1|0;}if(g<=0)Cb(b,0);}
function St(a,b,c,d,e,f,g,h,i,j){var k;k=a.jd.c_;X(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bw(b,f,c,k,h);}
function AIr(){var a=this;B.call(a);a.cm=null;a.dW=null;a.i3=null;}
function Ho(a){var b=new AIr();APv(b,a);return b;}
function APv(a,b){a.cm=b;}
function Fw(a,b){var c;a.i3=b;c=a.dW;if(c!==null)Ey(c,b.ce);c=a.cm.eA;if(c!==null)H4(c,b.ce,b.f3);}
function ABx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=ASR();i=c.q;j=0;while(j<i){if(f===null){k=(BL(c,j)).bw;l=ACb(Gd(Cg(g.i,k)));m=ACM(g.fQ);}else{n=f.data;k=n[j].qN.on;l=!BS(g.fQ,n[j].mS)?C(22):ACb(Gd(Cg(g.i,k)));m=ACM(n[j].mS);}if(M(l)>153){o=Cy(l,0,150);n=new J;L(n);H(H(n,o),C(177));l=K(n);}if(M(m)>153){n=Cy(m,0,150);o=new J;L(o);H(H(o,n),C(177));m=K(o);}n=Dr(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BL(c,j);}if(f!==null){q=new AFZ;q.tQ=d;q.tR=p;}else{q=new AF0;q.DG=d;q.DF
=o;}X_(h,m,n,l,q);j=j+1|0;}r=AFw(h);if(a.dW!==null)ADo(a);c=a.cm.F;g=new SJ;f=new ACH;f.rY=a;f.rZ=d;AN0(g,c,f);Y7(g,r);d=a.i3;X5(g,d.ce,d.DP);d=AG2(c);a.dW=d;d.iw=d.iw|1;d=Hj(g,c);f=a.i3.ce;JZ(d,f.nZ,f.pX);LZ(a.dW,d);Ey(a.dW,a.i3.ce);d=a.dW;f=new J;L(f);H(H(f,C(178)),e);CZ(d,K(f));DZ(a.cm,a.dW);d=a.dW;i=(d.W.k.b+Cw(d.bb,2.0)|0)+Cw(c,2.0)|0;s=(g.ex+g.fh|0)+g.ia|0;t=Cw(g.b7,5.0);e=BK(Fs(t,b.a,g.b7.bM.a-s|0),Fs(i,b.b,g.b7.bM.b-g.c5.b|0));AAr(g);LH(g);i=Ez(g);s=g.ci.data.length;i=Bb(i,s)+Bb(g.ej,s+1|0)|0;X(g.c5,
g.k.a,i);i=(g.ex+g.fh|0)+g.ia|0;b=g.b7;s=(b.bM.a-e.a|0)-Cw(b,5.0)|0;b=g.b7;t=(b.bM.b-e.b|0)-Cw(b,5.0)|0;d=BK(Bf(i,s),Bf(g.c5.b,t));Eh(a.dW,e,d);Cn(c,g);}
function ADo(a){I$(a.cm,a.dW);KE(a.dW);a.dW=null;}
function S_(a,b,c){var d,e;d=a.cm;e=a.i3;E7(d,e.ce,e.f3,b,c);}
function Gr(a,b,c,d,e,f,g){S_(a,b,AB4(JU(a,c,g,d,e,f),b));}
function JU(a,b,c,d,e,f){var g;g=new UF;g.g7=a;g.bE=b;g.sF=c;g.jS=e;g.px=f;g.ng=d;return g;}
function AHF(b){var c;c=new Tm;c.B5=b;return c;}
var FA=G(0);
function A4u(a){}
function ARJ(a){}
function AOz(a,b,c){return 0;}
function AYP(a){return null;}
var Sf=G(0);
var Nc=G(0);
function AH2(){var a=this;CJ.call(a);a.ck=null;a.br=null;a.lz=null;a.Ea=0;a.pv=null;a.ep=null;a.oR=0;a.h_=0.0;a.m$=null;a.Fu=null;a.gz=null;a.bd=0;a.dv=0;a.d=null;a.f0=null;a.eT=null;a.fm=null;a.C$=0;a.BR=0;a.dm=0;a.cw=0;a.cF=0;a.iO=null;a.gt=null;a.f4=null;a.j_=0;a.kR=0;a.HR=0;a.EO=0;a.lL=0;a.mH=0;a.q9=0;a.eG=0;a.dD=null;a.fX=null;a.fq=0;a.b8=0;a.EB=null;a.kP=null;a.A6=null;a.v3=null;a.gK=null;a.bG=0;a.dh=null;a.ma=null;a.tW=0;a.sH=null;a.wE=null;}
function Fr(a){var b=new AH2();AWb(b,a);return b;}
function AWb(a,b){var c,d,e;Fo(a);a.Ea=0;a.pv=P(T,10);a.ep=A2l();a.h_=16.0;a.m$=C(165);a.d=A$r(P(BD,0),null,null);c=new AGb;c.Ab=CW(P(Oe,0));c.D8=CW(P(Oe,0));c.rQ=CW(P(ADb,0));c.xb=CW(P(AAT,0));c.wS=CW(P(GM,0));c.CY=CW(P(T9,0));a.f0=c;a.fm=P(FV,0);a.iO=BK(1,0);a.gt=JT();a.f4=JT();a.j_=0;a.kR=1;a.lL=1;a.mH=1;a.q9=1;a.eG=3;a.dD=AKd();a.fX=C(179);a.fq=0;a.b8=0;c=DG();BE(c);d=new Zp;d.FP=c;a.kP=d;a.bG=0;c=new Zo;c.rC=a;a.sH=c;c=new Zn;c.uK=a;a.wE=c;c=b.cm.F;a.ck=c;a.br=c.bS;a.lz=b;b=ATy(c.cX);a.dh=b;a.gz=b.hL;e
=a.pv.data;b=new Zm;b.Dc=a;e[1]=b;b=new Zt;b.zd=a;e[2]=b;b=new Zs;b.vA=a;e[3]=b;b=new Zr;b.x_=a;e[4]=b;b=new Zq;b.ss=a;e[5]=b;b=new Zl;b.Br=a;e[6]=b;LP(a.d,a,He(a));}
function H3(a,b,c,d){Kw(a,b,c,d);ACO(a,b,c,d);}
function AVi(a,b,c){Xf(a,a.m$,a.h_);Q2(a.dh,c);}
function A8i(a,b,c){a.A6=b;a.v3=c;}
function ACO(a,b,c,d){var e;a.dm=Ci(80.0,d);a.cw=Ci(1.0,d);a.cF=Ci(10.0,d);e=!a.b8?b.a:(b.a+c.a|0)-I7(a)|0;X(a.ck.c_,e,b.b);TT(a.dD,a.ck.c_,Bf(I7(a),c.a),c.b,d);b=a.ep;e=Ci(2.0,d);b.fj.v.a=e;}
function A1N(a){a.oR=1;OP(a);}
function AZI(a){a.oR=0;}
function OP(a){AAE(a.ep,NH(He(a)));}
function Ed(a,b){var c,d;a.eT=b;c=a.ep;d=b.bz.D7;BN(c.fj.bg,d);c=a.gt;d=b.bz;IO(c,d.mr,d.mx);c=a.f4;b=b.bz;IO(c,b.mr,b.mx);}
function GU(a){Pr(a,a.dh.dy.pp,a.h_+1.0);}
function Hh(a){var b;b=a.h_;if(b<=7.0)return;Pr(a,a.dh.dy.pp,b-1.0);}
function Go(a,b){Pr(a,b,a.h_);}
function AV2(a,b){I5(a.ck,b);}
function Pr(a,b,c){if(a.ck.cd!==0.0){Xf(a,b,c);Kc(He(a));}a.h_=c;a.m$=b;}
function HR(a){var b,c,d;b=a.dh;c=a.ck.cX;d=a.br;b.jo=c;if(b.id.jY!=c&&b.d9)AGz(b,d);UB(a.fm);Ji(a.dD);OT(a);}
function Xf(a,b,c){var d,e,f,g,h,i,j;d=a.b4;e=c*d;Ci(c,d);f=a.dh.dy;d=f===null?0.0:f.p$;if(!(e===d&&BS(b,a.m$))){Ji(a.dD);Pl(a.fm);g=a.d.i.E.data;h=g.length;i=0;while(i<h){Fm(g[i]);i=i+1|0;}j=a.dh;f=a.br;j.dy=ALW(b,e,300,600,j.hL,f);f=a.dh;a.Fu=f.dy;a.bd=TX(f,1.25,a.br);a.dv=C6(a.dh.dy.rh);a.ep.fj.v.b=Ft(a.dh.dy);i=a.bd;f=new J;L(f);b=H(H(f,C(180)),b);Bq(b,32);V(H(Di(b,e),C(181)),i);$rt_globals.console.info($rt_ustr(K(f)));if(Bbd){h=N5(a.dh.dy,a.bd);b=new J;L(b);V(H(b,C(182)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iZ
=Hx(Gy(a),a.d.C,a.br.cv,a.gz);IQ(a);OT(a);}}
function AZ8(a){Pl(a.fm);AAk(a.dh);Ji(a.dD);}
function PG(a){return Bb(CR(a.d.i)+5|0,a.bd);}
function LG(a){return Be(PG(a)-a.k.b|0,0);}
function ADp(a){return Be(a.j_-GX(a)|0,0);}
function GX(a){var b;b=!a.b8?0:a.dv+a.cF|0;return Be(1,(a.k.a-a.dm|0)-b|0);}
function I7(a){return a.b8?a.dm:a.dm-a.cF|0;}
function EB(a){return a.k.b;}
function HG(a,b){var c,d,e;c=a.d.i;if(ADV(c)&&b-c.Ca>0.03125?1:0){d=a.tW;e=a.d.i.cI;if(d!=e){a.tW=e;ABW(a);}}if(a.bd)ADk(a);d=AD4((a.bG+a.HR|0)-a.EO|0,LG(a));e=a.bG==d?0:1;if(e)GA(a,d);return !ADr(a.ep,b)&&!e&&!a.Ea?0:1;}
function Jp(a,b){var c,d;b=AD4(b,ADp(a));c=a.d;d=b==c.ek?0:1;if(d)c.ek=b;if(d){c=a.A6;if(c!==null)c.e();}}
function GA(a,b){var c;if(AL$(a,b)){c=a.v3;if(c!==null)c.e();}}
function AL$(a,b){var c,d;c=AD4(b,LG(a));d=c==a.bG?0:1;if(d){a.bG=c;a.d.nB=c/a.bd;}return d;}
function AJU(a){return BK((I7(a)+a.cw|0)+a.cF|0,a.bd);}
function AWY(a){return a.bd;}
function A3T(a,b){Gj(a);}
function Gj(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=IR(a.k.b,a.bd)+7|0;c=a.fm;if(c.data.length<b)a.fm=ABl(b,c,a.dh,a.C$,a.BR,a.d.i);Cb(a.br,0);Oo(a.br,a.j,a.k);b=a.bd;d=a.ep;e=(b-d.fj.v.b|0)/2|0;b=a.d.iZ-(UD(d)/2|0)|0;d=a.d;f=b-d.ek|0;g=!a.b8?a.dm:(a.cw+a.cF|0)+a.dv|0;V2(a.ep,g+f|0,(e+Bb(d.z,a.bd)|0)-a.bG|0);h=CR(a.d.i);i=Vv(a);j=Vu(a);a.C$=i;a.BR=j;k=!a.b8?a.j.a+a.dm|0:((a.j.a+a.cw|0)+a.cF|0)+a.dv|0;l=GX(a);m=a.d.mm;n=DH(a,40.0);o=i;while(o<=j&&o<h){p=Cg(a.d.i,o);q=AET(a,o);ZA(q,p,a.br,a.bd,
l,a.d.ek,o,o%a.fm.data.length|0);a.j_=Be(a.j_,F8(p)+n|0);g=a.bd;r=Bb(g,o)-a.bG|0;s=m===null?null:m.data[o];r=a.j.b+r|0;t=a.br;u=a.d.ek;v=a.eT;d=AM8(Bm(a),o);if(d!==null){if(d.b==(-1))d.b=p.Y;d.a=Hx(p,d.a,a.br.cv,a.gz);d.b=Hx(p,d.b,a.br.cv,a.gz);}w=a.d;Rm(q,r,k,t,l,g,u,v,d,w.jw,w.ja,w.z!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.ck.c_;o=i;while(o<=j&&o<h&&a.lL){q=AET(a,o);r=Bb(a.bd,o)-a.bG|0;w=Bm(a);if(!DE(w))u=0;else{d=EI(w);w=GE(w);u=d.R<=o&&o<w.R?1:0;}d=a.eT;w=d.bz;t=w.uh;x=a.d.z==o&&m===null?1:0;a:{if(u)t=w.lJ;else
{if(m!==null){c=m.data;if(o<c.length&&c[o]!==null){t=IG(d.d7,d,c[o].fN);break a;}}if(x)t=w.g9;}}ALy(q,a.br,k,a.j.b+r|0,a.bd,v,a.d.ek,l,t);o=o+1|0;}if(a.kR){y=Bf(j+1|0,h);ANn(a,Bb(a.bd,y)-a.bG|0,l);}AJd(a);if(a.mH)AKt(a,i,j,h);if(a.oR&&f>=(( -UD(a.ep)|0)/2|0)&&AM2(a.ep,a.k))AEv(a.ep,a.br,a.j);AIZ(a);AIu(a);GL(a.br);AIH(a,i,j);}
function AKt(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.mm;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eT;h=IG(h.d7,h,g.fN);}else h=e!==null?a.eT.bz.eI:a.eT.bz.g9;if(!(a.d.z!=b&&g===null)){g=a.iO;i=a.b8;g.a=!i?(a.cF-a.cw|0)-a.eG|0:((a.cF+a.dv|0)+a.cw|0)-a.eG|0;j=a.bd;g.b=j;i=i?0:(a.dm-a.cF|0)+a.cw|0;j=Bb(j,b)-a.bG|0;k=a.br;l=a.j;Bw(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AIH(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Bf(d,Bb(CR(a.d.i),a.bd)-a.bG|0);f=a.dD;g=a.bG;h=a.d;i=h.mm===null?h.z:(-1);j=a.br;k=a.eT;Oo(j,f.hg,f.fW);Uz(f,j,b,d);AD6(f,b,j);ADj(f,g,e,k,j);l=k.l0;if(e<d){h=f.hg;Bw(j,h.a,h.b+e|0,BK(f.fW.a,d-e|0),l.lT);}if(b<=i&&i<=c){k=k.l0;c=i/20|0;h=f.dp;l=BL(h,c%h.q|0);h=f.hg;d=Bb(f.dp.q,f.hW);c=l.fV.b;b=((l.rq.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CX(l.c$)|0)|0;c=i%l.eE|0;e=l.cM;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;X(l.jV,l.fV.a,e);f=l.kD;c=i%l.eE|0;d=l.cM;Cv(f,0.0,
Bb(c,d),l.fV.a,d);N$(l,j,b,h,k.zl,k.rG);}GL(j);}
function Vv(a){return Bf(a.bG/a.bd|0,CR(a.d.i)-1|0);}
function Vu(a){return Bf(((a.bG+EB(a)|0)-1|0)/a.bd|0,CR(a.d.i)-1|0);}
function AVI(a,b){return (Bb(a.bd,b)-a.bG|0)+a.j.b|0;}
function AVv(a){return a.j;}
function AYM(a){return a.k;}
function OT(a){AAK(a.dD,a.dh.dy,a.bd,a.ck.cX);}
function AET(a,b){var c;c=a.fm.data;return c[b%c.length|0];}
function W2(a,b){var c,d,e,f;c=Fs(0,M(a.fX),Qn(b));if(!c)b=null;else{b=C(68);if(c<0){b=new BU;Z(b);N(b);}if(c!=1){d=b.cr.data.length;if(d&&c){e=B6(Bb(d,c));d=0;f=0;while(f<c){R$(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=Nh(e);}else b=A_3;}}return b;}
function Q9(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BI(i);k=A_v(i).data;Ke(j,c);c=0;l=k.length;if(c>l){f=new BU;Z(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.i;o.cI=o.cI+1|0;p=P(HM,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AW7(h[m],n[m],k[m],b[m],f.bw,f.bB);m=m+1|0;}BA(o.jj,p);c=0;while(c<i){b=e.data;N9(o,h[c],n[c],k[c],b[c]);g.rt(C5(h[c]),b[c]);c=c+1|0;}}
function AOg(a){var b;if(DE(Bm(a)))Hu(a);else{b=a.d;P2(b.i,b.z,b.C);}IQ(a);ES(a);return 1;}
function Dt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.fq)return 0;if(DE(Bm(a)))Hu(a);c=M2(AEE(b,C(183),C(22)),C(184),(-1));d=c.data;b=a.d;e=b.i;f=b.z;g=b.C;AGG(e,f,g,c);h=d.length;if(!h)b=A_3;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B6(i+Bb(h-1|0,M(C(184)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(184))){m=l+1|0;c[l]=Q(C(184),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Nh(k);}GD(e,f,g,0,b);b=a.d;f=b.z;m
=(f+h|0)-1|0;CY(a,m,m!=f?M(d[h-1|0]):b.C+M(d[0])|0,0);GH(a);ES(a);return 1;}
function Hu(a){var b,c,d;b=EI(Bm(a));c=a.d.i;d=Bm(a);P9(c,d,WK(c,d));CY(a,b.R,b.bj,0);GH(a);ES(a);}
function GH(a){var b,c;(Bm(a)).dV=0;b=(Bm(a)).bY;c=a.d;Cj(b,c.z,c.C);b=(Bm(a)).bP;c=a.d;Cj(b,c.z,c.C);}
function ANn(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.ck.c_;e.b=d-b|0;d=a.b8;e.a=!d?c+a.eG|0:c+a.cw|0;d=!d?(a.j.a+a.dm|0)-a.eG|0:(((a.j.a+a.cF|0)+a.dv|0)+a.cw|0)-a.eG|0;Bw(a.br,d,a.j.b+b|0,e,a.eT.bz.eI);}}
function AIZ(a){var b;b=a.b8?a.j.a+a.dv|0:a.j.a+a.k.a|0;K6(a.gt,a.bG,a.j.b,EB(a),PG(a),b,a.dv);b=!a.b8?a.j.a+a.dm|0:((a.j.a+a.cw|0)+a.cF|0)+a.dv|0;SR(a.f4,a.d.ek,b,GX(a),a.j_,a.j.b+EB(a)|0,a.dv);}
function AIu(a){var b,c;b=ABB(a.gt);c=ABB(a.f4);if(!(!b&&!c)){Cb(a.br,1);if(b)Hw(a.gt,a.br);if(c)Hw(a.f4,a.br);if(b)HB(a.gt,a.br);if(c)HB(a.f4,a.br);}}
function AJd(a){var b,c,d,e,f;b=a.iO;c=a.k;b.b=c.b;b.a=a.cw;d=!a.b8?a.dm-a.cF|0:(c.a-I7(a)|0)-a.cw|0;b=a.br;c=a.j;Bw(b,c.a+d|0,c.b,a.iO,a.eT.bz.wi);b=a.iO;d=a.b8;b.a=!d?(a.cF-a.cw|0)-a.eG|0:((a.cF+a.dv|0)+a.cw|0)-a.eG|0;e=d?0:(a.dm-a.cF|0)+a.cw|0;c=a.br;f=a.j;Bw(c,f.a+e|0,f.b,b,a.eT.bz.eI);}
function AD4(b,c){return Bf(Be(0,b),c);}
function He(a){return a.ck.cq;}
function Fu(a,b,c){var d,e,f;d=DJ(b);e=new J;L(e);H(H(e,C(185)),d);$rt_globals.console.info($rt_ustr(K(e)));CY(a,0,0,0);f=new AFg;f.AQ=a;f.AR=b;f.AP=c;c=DG();BE(c);d=new AFf;d.zc=c;WZ(b,f,d);}
function Kk(a,b,c,d,e){if(Jw(a,e))return 1;if(c&&d)return 1;if(c)GA(a,a.bG+((Bb(b,a.bd)*12|0)/10|0)|0);else if(!d){I6(a,a.d.z+b|0,e);AD8(a);}return 1;}
function TH(a,b,c,d){var e,f,g;if(Jw(a,d))return 1;e=Gy(a);if(!c)f=a.d.C+b|0;else if(b>=0)f=HJ(e,a.d.C);else{b=a.d.C;if(!b)f=(-1);else{c=K1(e,b);if(c>0&&e.eW.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eW.data[c-1|0];}}if(f>e.Y){e=a.d;if((e.z+1|0)<CR(e.i))CY(a,a.d.z+1|0,0,d);}else if(f>=0)DK(a,f,d);else{e=a.d;b=e.z;if(b>0){g=(Cg(e.i,b-1|0)).Y;CY(a,a.d.z-1|0,g,d);}}AE5(a);return 1;}
function Jw(a,b){if(DE(Bm(a))&&!b){GH(a);IQ(a);return 1;}if(!(b&&DE(Bm(a))))GH(a);return 0;}
function CY(a,b,c,d){a.d.C=c;return I6(a,b,d);}
function I6(a,b,c){var d;d=a.d;d.z=Fs(0,b,CR(d.i)-1|0);return DK(a,a.d.C,c);}
function DK(a,b,c){var d,e;a.d.C=Fs(0,b,(Gy(a)).Y);a.d.iZ=a.b4===0.0?0:Hx(Gy(a),a.d.C,a.br.cv,a.gz);OP(a);IQ(a);if(c)(Bm(a)).dV=1;d=Bm(a);e=a.d;OQ(d,e.z,e.C);(Bm(a)).dV=0;return 1;}
function Nj(a,b){var c;c=A0Y(Bm(a));DK(a,b,0);Ks(Bm(a),c);}
function IQ(a){AD8(a);AE5(a);}
function AD8(a){var b,c,d,e,f;b=a.bG;c=b+EB(a)|0;d=a.d.z;e=a.bd;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))GA(a,d-e|0);else if(f>(c-e|0))GA(a,(f-EB(a)|0)+a.bd|0);}
function AE5(a){var b,c,d,e,f;b=C6(a.ck.cd*30.0);c=a.d.ek;d=c+GX(a)|0;e=a.d.iZ;f=e+b|0;if(e<(c+b|0))Jp(a,e-b|0);else if(f>(d-b|0))Jp(a,(f-GX(a)|0)+b|0);}
function JB(a,b){var c,d;CY(a,b.bw,b.bB,0);c=HJ(Gy(a),a.d.C);Cj((Bm(a)).bP,a.d.z,c);b=(Bm(a)).bY;d=a.d;Cj(b,d.z,d.C);JF(a.d);}
function FZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.j;e=c-d.a|0;f=Fs(0,((b.b-d.b|0)+a.bG|0)/a.bd|0,CR(a.d.i)-1|0);g=!a.b8?a.dm:(a.cw+a.cF|0)+a.dv|0;h=Be(0,(e-g|0)+a.d.ek|0);b=Cg(a.d.i,f);d=a.br.cv;i=a.gz;if(!(b.fn!==null&&!b.hK))Oj(b,d,i);j=b.fn;e=b.t.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.Y;else{c=ADT(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.t.data.length)k=b.Y;else{j=ACi(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.t.data[e].x)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i
=j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(Bbe){b=new J;L(b);V(H(V(H(V(H(b,C(186)),e),C(187)),h),C(188)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return D2(f,k);}
function XC(a,b){var c,d;c=a.d;d=b.bw;c.z=d;c.C=b.bB;c.iZ=Hx(Cg(c.i,d),a.d.C,a.br.cv,a.gz);OP(a);}
function Gy(a){var b;b=a.d;return Cg(b.i,b.z);}
function HP(a,b,c,d){var e,f;e=C6((a.bd*4|0)*d/150.0);f=C6(c);if(e)GA(a,a.bG+e|0);if(f)Jp(a,a.d.ek+f|0);return 1;}
function JI(a,b,c){(Bm(a)).dV=0;return 1;}
function J7(a,b,c){var d;if(!Cz(a.ck,a))Cn(a.ck,a);if(c)return null;d=GC(a.gt,b.h,a.sH,1);if(d!==null)return d;d=GC(a.f4,b.h,a.wE,0);if(d!==null)return d;JY(a);XC(a,FZ(a,b.h));JF(a.d);if(!b.bW&&!(Bm(a)).dV){b=(Bm(a)).bY;d=a.d;Cj(b,d.z,d.C);}(Bm(a)).dV=1;b=Bm(a);d=a.d;OQ(b,d.z,d.C);b=new AF1;b.wP=a;return b;}
function I9(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cS){b=b.h;e=FZ(a,b);f=JS(a.d.i,e.bw,e.bB);g=Ur(a,f);h=Pm(a.f0,Ep(a.d),Ih(a.d));if(h!==null){i=a.d;c=e.bw;d=e.bB;e=new AFD;e.Fh=a;e.Fi=b;e.Fg=g;h.vg(i,c,d,e,a.kP);}else{e=CD(a.d.i.eg,f);if(e!==null){JB(a,e);c=1;}else{e=CD(a.d.i.d6,f);if(e!==null&&!EY(e)){if(e.q!=1){ABx(a.lz,b,e,a,g);c=1;}else{JB(a,BL(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FZ(a,b.h)).bw;g=Cg(a.d.i,c);c=Hm(g,a.d.C);d=HJ(g,a.d.C);b=Pc(g,c);if((d-1|0)==g.Y){Cj((Bm(a)).bY,
a.d.z,Qn(g));Cj((Bm(a)).bP,a.d.z,g.Y);}else{if(b!==null){b=b.x;j=0;c:{while(true){k=b.cr.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.C;if(c==j){c=Hm(g,c-1|0);d=HJ(g,c);}else{if(d!=j){RW(Bm(a),a.d.z);break b;}c=Hm(g,d+1|0);d=HJ(g,c);}}}Cj((Bm(a)).bY,a.d.z,c);(Bm(a)).dV=1;CY(a,a.d.z,d,0);(Bm(a)).dV=0;JY(a);}}break a;case 3:break;default:break a;}RW(Bm(a),a.d.z);AB5(a.d.iz);JY(a);}}return 1;}
function Kb(a,b){var c,d,e,f,g,h,i,j;c=a.ck.de;if(GJ(a.gt,b.h,c))return 1;if(GJ(a.f4,b.h,c))return 1;d=a.dD;if(GV(b.h,d.hg,d.fW)&&Hk(c)?1:0)return 1;e=b.h;f=!a.b8?a.dm:(a.cF+a.cw|0)+a.dv|0;a:{d=a.j;f=d.a+f|0;g=d.b;h=GX(a);i=EB(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Hk(c);if(b.cS){e=FZ(a,b.h);e.bB=Hm(Cg(a.d.i,e.bw),e.bB);b=a.d.i;if(!Ia(b.eg,e)&&!Ia(b.d6,e)?0:1)return D_(c,C(189));}return D_(c,C(190));}
function A7V(a,b){var c,d,e,f;c=a.ma;if(c!==null&&c.bm(b))return 1;d=b.cS;if(d&&b.be==65){d=CR(a.d.i)-1|0;e=Hc(a.d.i,d);Cj((Bm(a)).bY,0,0);Cj((Bm(a)).bP,CR(a.d.i)-1|0,e);return 1;}if(d&&b.be==80){M$(a.d);return 1;}if(!a.fq&&d&&b.be==90){if(DE(Bm(a)))GH(a);b=a.d.i;b.cI=b.cI+1|0;c=b.jj;e=c.q;if(!e)c=null;else{f=(E5(c,e-1|0)).data;c=YP(b,f[0]);d=1;while(d<f.length){YP(b,f[d]);d=d+1|0;}}if(c!==null){CY(a,c.a,c.b,0);ES(a);}return 1;}if(!d&&!b.dB){if(Bk(b.eH,C(191))){Dt(a,C(192));DK(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eH,
C(193))){Dt(a,C(194));DK(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eH,C(39))){Dt(a,C(23));DK(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eH,C(195))){Dt(a,C(196));DK(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eH,C(197))){Dt(a,C(198));DK(a,a.d.C-1|0,0);d=1;}else if(!Bk(b.eH,C(199)))d=0;else{Dt(a,C(200));DK(a,a.d.C-1|0,0);d=1;}}else d=0;if(d)return 1;a:{if(!(!b.dB&&!b.cS)){e=b.be;if(e>=48&&e<=57){d=e-48|0;c=a.pv.data[d];if(c!==null)c.e();d=1;break a;}}d=0;}if(d)return 1;b:{switch(b.be){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:d
=0;break b;}d=1;}if(d)return 1;if(AMk(a,b))return 1;if(AIW(a,b))return 1;if(b.cS&&b.be==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}if(!ASn(b.be)&&b.be!=27){if(!b.cS&&!b.dB&&!b.jb)return M(b.eH)>0&&Dt(a,b.eH)?1:0;return 0;}return 0;}
function ADk(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Vv(a);d=Vu(a);if(b.fB!=3&&b.hi==3){e=MG(b.qB);f=new YL;f.AA=c;f.Ax=d;g=new SL;g.tI=f;while(!g.nP&&OU(e,g)){}if(!g.nP&&Bk(C(201),Ep(b))){c=Be(0,c-100|0);d=Bf(CR(b.i)-1|0,d+100|0);BA(b.qB,BK(c,d));h=BI(3);i=h.data;i[0]=F7(b.i,c);e=b.i;j=0;d=Bf(d+1|0,e.E.data.length);k=0;while(k<d){j=j+Hc(e,k)|0;if(k!=(e.E.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.CA=ER();e=b.fz;l=new AE6;l.tA=b;i=P(B,3);m=i.data;m[0]=FD(b.i);m[1]=h;b=b.i.dH;g=BP();ADA(b,b.dE,
g);h=BI(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BL(g,o);d=k+1|0;n[k]=b.ca;q=d+1|0;n[d]=b.b$;k=q+1|0;n[q]=b.go;o=o+1|0;}m[2]=h;CI(e,l,C(202),i);}}}
function Na(a){M$(a.d);}
function ABW(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.gm){c=Fn(b);d=new J;L(d);H(H(d,c),C(203));$rt_globals.console.info($rt_ustr(K(d)));}c=Ep(b);if(c!==null&&!Bk(C(190),c)){d=b.i.dH;e=RS(d,d.dE);if(e===null){Pe(b);Lq(b.i);}else{f=DL([Du(e),Dk(e),e.b9.go]);g=FD(b.i);h=BI(1);h.data[0]=AKT(c);d=b.i.fu;if(d.f5===null){i=BI(0);j=B6(0);}else{c=AYu(A0R(e.cC,d.fA),e);Y5(c);i=c.pR;j=c.nS;}k=b.i.cI;c=b.fz;d=new PQ;d.CE=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BI(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CI(c,d,C(204),l);}}
else Lq(b.i);}
function GK(a,b,c){var d,e,f,g,h,i;if(c&&a.fq)return 0;d=EI(Bm(a));e=d.R;if(DE(Bm(a))){f=a.d.i;g=Bm(a);h=WK(f,g);if(c)P9(f,g,h);if(c){CY(a,d.R,d.bj,0);GH(a);ES(a);}}else{h=FX(Gd(a.d.i.E.data[e]),C(184));i=Bf(CR(a.d.i)-1|0,e);Cj((Bm(a)).bP,i,0);if(e>=(CR(a.d.i)-1|0))Cj((Bm(a)).bP,i,Hc(a.d.i,i));else Cj((Bm(a)).bY,i+1|0,0);if(c)Hu(a);else CY(a,e,0,0);}b.g(h);return 1;}
function AXV(a){var b;b=new V0;b.BY=a;return b;}
function AIW(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.fq)return 0;a:{switch(b.be){case 8:if(DE(Bm(a))){Hu(a);c=1;}else{b=a.d;d=b.C;if(!d&&!b.z)c=1;else{if(d){e=b.z;c=d-1|0;P2(b.i,e,c);}else{e=b.z-1|0;c=Hc(b.i,e);b=a.d.i;Mp(b,e);GD(b,e,Hc(b,e),1,C(184));}ES(a);c=CY(a,e,c,0);}}break a;case 9:if(!b.bW){if(!DE(Bm(a)))Dt(a,a.fX);else{f=EI(Bm(a));g=GE(Bm(a));c=g.R;d=f.R;e=(c-d|0)+1|0;h=BI(e);i=h.data;j=P(BD,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fX;d=d+1|0;e=l;}b=new AFa;m=a.d;AMF(b,m.z,m.C);m=new UU;m.wB
=a;Q9(a,h,0,0,j,b,m);f.bj=f.bj+M(a.fX)|0;g.bj=g.bj+M(a.fX)|0;Nj(a,a.d.C+M(a.fX)|0);ES(a);}c=1;}else b:{if(!DE(Bm(a))){b=a.d;f=Cg(b.i,b.z);if(f.t.data.length>0){g=W2(a,f);if(g===null){c=1;break b;}m=a.d;n=m.i;e=m.z;b=D2(e,m.C);n.cI=n.cI+1|0;o=n.jj;h=P(HM,1);h.data[0]=AW7(e,0,1,g,b.bw,b.bB);BA(o,h);N9(n,e,0,1,g);Is(f,0,M(g));Nj(a,a.d.C-M(g)|0);}}else{b=EI(Bm(a));f=GE(Bm(a));c=f.R;p=b.R;c=(c-p|0)+1|0;h=BI(c);k=h.data;j=P(BD,c);q=j.data;g=a.d;e=g.C;l=g.z;c=0;while(p<=f.R){g=Cg(a.d.i,p);if(g.t.data.length>0){g=W2(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=J1(h,c);j=CT(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.R)b.bj=Be(0,b.bj-M(g)|0);if(p==f.R){f.bj=Be(0,f.bj-M(g)|0);Nj(a,a.d.C-M(g)|0);}d=d+1|0;}b=D2(l,e);f=new VV;f.uR=a;Q9(a,h,0,1,j,b,f);}ES(a);c=1;}break a;case 13:if(DE(Bm(a)))Hu(a);b=a.d;Fm(Cg(b.i,b.z));b=a.d;ANM(b.i,b.z,b.C);ES(a);c=CY(a,a.d.z+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AOg(a);}return c;}
function AMk(a,b){var c,d,e,f;a:{switch(b.be){case 33:c=b.cS?I6(a,IR(a.bG,a.bd),b.bW):Kk(a,2-WS(EB(a),a.bd)|0,0,b.dB,b.bW);break a;case 34:c=!b.cS?Kk(a,WS(EB(a),a.bd)-2|0,0,b.dB,b.bW):I6(a,((a.bG+EB(a)|0)/a.bd|0)-1|0,b.bW);break a;case 35:if(!Jw(a,b.bW)&&!DK(a,(Gy(a)).Y,b.bW)){c=0;break a;}c=1;break a;case 36:if(!Jw(a,b.bW)&&!DK(a,0,b.bW)){c=0;break a;}c=1;break a;case 37:c=b.cS;if(c&&b.dB){JY(a);d=a.d.iz;e=d.ea;if(e<=0)d=null;else{f=d.fT.data;c=e-1|0;d.ea=c;d=f[c];}if(d===null)c=1;else{CY(a,MS(d),LB(d),0);Ks(Bm(a),
d.pN);c=1;}break a;}c=TH(a,(-1),c,b.bW);break a;case 38:c=Kk(a,(-1),b.cS,b.dB,b.bW);break a;case 39:c=b.cS;if(c&&b.dB){d=a.d.iz;e=d.ea;if(e==(d.fP-1|0))d=null;else{f=d.fT.data;c=e+1|0;d.ea=c;d=f[c];}if(d===null)c=1;else{CY(a,MS(d),LB(d),0);Ks(Bm(a),d.pN);c=1;}break a;}c=TH(a,1,c,b.bW);break a;case 40:c=Kk(a,1,b.cS,b.dB,b.bW);break a;default:}c=0;}if(c&&b.bW){b=(Bm(a)).bP;d=a.d;Cj(b,d.z,d.C);}if(c)JF(a.d);return c;}
function JY(a){var b,c,d,e,f,g,h;b=a.d;c=b.iz;d=c.ea;c=d<0?null:c.fT.data[d];if(c!==null&&b.z==MS(c)&&a.d.C==LB(c))return;c=a.d;e=c.iz;b=new OD;d=c.z;f=c.C;c=Bm(a);b.qL=D2(d,f);g=A0Y(c);b.pN=g;g.dV=0;f=e.ea;h=e.fP;if(f==(h-1|0))AEU(e,b);else{d=f+1|0;while(d<h){AB5(e);d=d+1|0;}AEU(e,b);}e.ea=e.ea+1|0;}
function ES(a){a.d.i.Ca=NH(He(a));}
function IH(a,b){var c,d,e,f;a.EB=null;My(a.dD,null);c=a.d;a.d=b;LP(c,null,null);LP(b,a,He(a));d=(B4(a.f0.wS)).data;e=d.length;f=0;while(f<e){d[f].rt(c,b);f=f+1|0;}a.bG=Hi(b.nB*a.bd);}
function Ur(a,b){var c;c=MN(a.d.i,b);if(c===null)return C(22);return c.x;}
function Fc(a,b){var c,d,e,f,g;a.d.mm=b;if(b===null){Bc(Bh(),C(205));My(a.dD,null);}else{b=b.data;c=Dh(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fN<<24>>24;e=e+1|0;}My(a.dD,c);}}
function Gx(a,b){a.d.rF=b;}
function Bm(a){return a.d.sM;}
function ML(a){var b;b=a.gK;if(b!==null)b.g(a);}
function A1f(a){var b,c,d;b=a.d.fQ;c=AHu(a);if(b!==null){b=b.gs;d=new J;L(d);H(H(H(d,c),C(206)),b);c=K(d);}return c;}
function AKU(){var a=this;B.call(a);a.ms=null;a.pe=null;a.fF=null;}
function Xe(a,b){var c=new AKU();A07(c,a,b);return c;}
function A07(a,b,c){var d,e;a.ms=b;a.pe=c;d=null;e=new WF;e.tK=a;b.qD(d,e);b=null;d=new WG;d.sR=a;c.qD(b,d);}
function AAF(a,b,c){var d,e,f,g,h,i,j;d=a.fF;if(d!==null&&d.iY!==null){e=b!==a.ms?0:1;f=b.l4();g=(b.ld()+f|0)/2|0;h=g-f|0;d=a.fF;d=d.iY.data[Hn(d,g,e)];i=g-(!e?d.iE:d.iF)|0;j= -(b.ic(f)-(b.lD()).b|0)|0;c.rp(Bb(((!e?d.iF:d.iE)+i|0)-h|0,c.qK())+j|0);return;}}
function Ss(){B.call(this);this.sE=null;}
function AWC(a,b){Vx(a.sE,b);}
function Sp(){B.call(this);this.uX=null;}
function AVy(a,b){Vx(a.uX,b);}
function Sq(){B.call(this);this.GZ=null;}
function AQ4(a,b){return b.be!=121?0:1;}
function F1(){var a=this;B.call(a);a.pS=null;a.tO=null;a.tb=null;}
function Bbf(a,b){var c=new F1();Gk(c,a,b);return c;}
function Gk(a,b,c){var d;d=null;a.pS=b.bq;a.tO=d;a.tb=c;}
function AUi(a,b){var c;if(!AES(b))return 0;c=a.tO;if(c!==null&&b.bW)GN(a.pS,c);else Fp(a.pS,a.tb);return 1;}
function AES(b){return b.cS&&b.be==79?1:0;}
function Sk(){B.call(this);this.CS=null;}
function A6G(a,b){var c,d,e;c=a.CS;d=Cz(c.n,c.I)?c.I:!Cz(c.n,c.K)?null:c.K;if(d!==null){e=new Xl;e.z2=c;e.z5=d;e.z3=b;Fu(d,b,e);c.le=null;c.nw.fF=null;c.gx.dY=null;}}
function Sl(){B.call(this);this.B9=null;}
function A4i(a,b){var c,d,e,f,g;c=a.B9;if(Cz(c.n,c.I)){d=c.jJ;e=b.h;f=c.I;g=new Sy;g.rK=c;Gr(d,e,f,c,c,c,g);}if(Cz(c.n,c.K)){d=c.jJ;b=b.h;e=c.K;f=new Sz;f.ub=c;Gr(d,b,e,c,c,c,f);}return 1;}
var CL=G(0);
function AF3(){var a=this;B.call(a);a.F=null;a.bC=null;a.eA=null;}
function E7(a,b,c,d,e){var f,g;f=ABa(a.F);H4(f,b,c);b=a.F;c=b.b2;g=new AFk;g.yF=b;g.yE=c;f.kH=g;TL(f,d,e);Ii(a,f);}
function Ii(a,b){var c;c=a.eA;if(c!==b)a.eA=BV(c,b);}
function DV(a,b){var c;c=new AE8;c.sb=a;c.sd=b;return c;}
function N1(a,b){var c;c=new AGd;c.zY=a;c.zZ=b;return c;}
function D4(a){var b;b=a.eA;if(b!==null){M_(b);Ii(a,null);}}
function DZ(a,b){var c,d,e,f;c=a.bC;if(c.cW>0)LJ(FR(c,0));c=a.bC;d=c.cW;e=c.dr;if(d==e.data.length)c.dr=CT(e,d+4|0);d=c.cW;f=d;while(0<f){e=c.dr.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dr.data[0]=b;c.cW=d+1|0;c.gP=null;Ln(b);return b;}
function I$(a,b){if(Po(a)!==b?0:1)LJ(b);TM(a.bC,b);b=a.bC;if(b.cW>0)Ln(FR(b,0));}
function Iv(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B4(a.bC)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.F.bS;d.ba.dZ(e);if(d.ba.j.b>0){f=d.W;g=d.gR.jU;if(!Tk(f)){if(!O9(f)&&!(!f.fb&&f.eq!==null)){f.fb=0;AEL(f);h=f.e2;i=(h.eR+h.fa+5.0)/10.0;j=Cw(f.gM,f.lu);h=e.cv;k=f.e2;l=f.ko;m=i*2.0;Cr(h,k);n=j+Mc(h,l,m)|0;f.iU=n;n=Fs(0,n,f.k.a);if(n){h=Ei(e,n,f.k.b,f.gM.cX);Cr(h,f.e2);k=f.ko;o=j;p=o+i;l=f.e2;i=l.eR;B1(h,k,p,o+i-(i+l.fa)/16.0);k=f.eq;if(k===null){k=C4(e);f.eq=k;}CU(k,h);ET(h);Cv(f.nD,0.0,0.0,BW(f.eq),
CX(f.eq));}}h=g.mU;k=f.eq;if(k===null)RT(f,e,0,f.k.a,h);else{n=BW(k);k=g.pk;g=f.j;j=g.a;q=g.b;g=f.eq;DT(e,j,q,g.ef,f.nD,g,k,h,f.gM.cX);j=f.k.a;if(n<j)RT(f,e,n,j-n|0,h);}}f=d.dI;if(f!==null){g=d.bb;l=d.W;h=d.gR.jU;if(f.jN!==null){if(f.dG===null)AI6(f,g);j=Cw(g,2.0);n=Be(0,((l.k.b-CX(f.dG)|0)/2|0)-j|0);f.gS.a=(((l.j.a+l.k.a|0)-n|0)-BW(f.dG)|0)-j|0;k=f.gS;q=l.j.b+n|0;n=j/2|0;k.b=q-n|0;k=f.ln;q=BW(f.dG);r=j*2|0;X(k,q+r|0,CX(f.dG)+r|0);k=g.bS;l=f.gS;Bw(k,l.a,l.b,f.ln,!f.mC?h.mU:h.kl);Cv(g.nk,0.0,0.0,BW(f.dG),CX(f.dG));k
=g.bS;l=f.gS;j=l.a+j|0;q=l.b+n|0;l=f.dG;DT(k,j,q,l.ef,g.nk,l,h.pk,!f.mC?h.mU:h.kl,0);}}}if(!AAS(d)){n=Cw(d.bb,2.0);j=Tk(d.W);h=d.bb;k=h.c_;h=h.rg;q=j?0:d.W.k.b;f=d.ba.k;X(h,f.a,f.b+q|0);Cb(e,1);ALM(e,h,!j?d.W.j:d.ba.j,d.gR.jU.kl, -n|0,k);h=d.ba;AM7(e,h.k,h.j,n,q,AAi(d.gR.mj,d.bb.cd),d.gR.mj.o_,k);}c=c+(-1)|0;}h=a.eA;if(h!==null)AG3(h);}
function F$(a,b){var c,d,e,f;c=a.F;if(c.cX==b)d=0;else{c.cX=b;Kc(c.cq);d=1;}if(d){c=a.eA;if(c!==null){c=B$(c.cu);while(Cc(c)){O2(Cd(c));}}e=(B4(a.bC)).data;b=e.length;f=0;while(f<b){c=e[f];c.W.fb=1;c.ba.kV();f=f+1|0;}}return d;}
function AZl(a,b){var c,d,e,f,g,h,i,j,k;c=a.eA;if(c!==null){d=0;e=c.cu.q-1|0;a:{while(e>=0){d=OF(BL(c.cu,e),b.h,c.c9.de);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B4(a.bC)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.h;if(BG(h.W,c)){i=h.dI;if(i!==null)i.mC=UV(i,c);e=D_(h.bb.de,null);}else{i=h.dI;if(i!==null)i.mC=0;e=Cw(h.bb,7.0);j=Cw(h.bb,25.0);if(NQ(h,c.a,e)){k=Zj(h,c.a,j);if(N0(h,c.b,e)){e=D_(h.bb.de,MT(k,C(207)));break b;}if(Lu(h,c.b,e)){e=D_(h.bb.de,MT( -k|0,C(207)));break b;}}if(O_(h,c.b,e)){j=AFS(h,
c.b,j);if(Px(h,c.a,e)){e=D_(h.bb.de,MT(j,C(208)));break b;}if(Nv(h,c.a,e)){e=D_(h.bb.de,MT( -j|0,C(208)));break b;}}e=0;}}c:{d:{if(!e){if(!BG(h.ba,b.h))break d;if(!h.ba.bZ(b)&&!D_(h.bb.de,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AQd(a,b,c,d){var e,f,g,h,i,j;e=a.eA;if(e!==null){f=0;g=e.cu.q-1|0;a:{while(g>=0){f=O5(BL(e.cu,g),b.h,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B4(a.bC)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!BG(i.W,b.h)&&!QQ(i,b.h)){if(!M0(i,b))break c;if(!i.ba.cD(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function ASw(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.eA;if(d!==null){e=null;f=d.cu.q-1|0;a:{while(f>=0){e=BL(d.cu,f);g=b.h;h=FE(e.cH,g);if(!h&&!L0(e.cH)){e=e.lC;if(e!==null)e.e();}e=!h?null:Bbg;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B4(a.bC);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.h;if(!c){c:{k=Cw(d.bb,7.0);l=Cw(d.bb,25.0);if(NQ(d,e.a,k)){m=Zj(d,e.a,l);if(N0(d,e.b,k)){g=KL(d,e,m,(-1));break c;}if(Lu(d,e.b,k)){g=KL(d,e,m,1);break c;}}if(O_(d,e.b,k)){f=AFS(d,e.b,l);if(Px(d,
e.a,k)){g=KL(d,e,(-1),f);break c;}if(Nv(d,e.a,k)){g=KL(d,e,1,f);break c;}}g=null;}if(g!==null)break b;if(BG(d.W,e)){g=d.dI;if(g!==null&&UV(g,e)){d.dI.jN.e();g=Bbg;break b;}g=d.ba.j;f=g.a;l=e.a;f=f-l|0;k=g.b;m=e.b;k=k-m|0;e=d.W.j;l=e.a-l|0;m=e.b-m|0;e=new Bg;g=new AEZ;g.Aw=d;g.AC=l;g.AB=m;g.Az=e;g.Ay=f;g.Av=k;break b;}}g=null;}f=g===null&&!M0(d,b)?0:1;k=!c&&d!==Po(a)&&f?1:0;if(k){e=a.bC;l=0;j=e.dr.data;m=j.length;d:{while(true){if(l>=m){l=(-1);break d;}if(d===j[l])break;l=l+1|0;}}if(l>0)VJ(a,l);}if(g===null&&
f)g=d.ba.ct(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function VJ(a,b){var c,d,e,f,g;LJ(FR(a.bC,0));c=a.bC;d=c.cW;if(d<=b){c=new Pa;Bn(c,II(b));N(c);}if(b){e=c.dr;f=e.data;g=f[b];while(b>0){f[b]=f[b-1|0];b=b+(-1)|0;}f[0]=g;f=c.gP;if(f!==null)Dc(e,0,f,0,d);}Ln(FR(a.bC,0));}
function AGx(a){var b;b=a.bC.cW;if(b>1)VJ(a,b-1|0);}
function A7L(a,b,c){var d,e,f,g,h;d=a.eA;if(d!==null&&J_(d))return 1;e=(B4(a.bC)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!BG(d.W,b.h)){if(!M0(d,b))break b;if(!d.ba.dC(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A28(a,b,c){var d,e,f,g,h;d=(B4(a.bC)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.ba;h.d1(h.j,h.k,c);h=g.W;if(h.h9!==null){h.e2=null;h.iU=0;h.fb=1;}Jb(g);h=g.dI;if(h!==null)OG(h);f=f+1|0;}}
function Po(a){var b;b=a.bC;return b.cW<=0?null:FR(b,0);}
function Vh(){var a=this;B.call(a);a.bS=null;a.cq=null;a.de=null;a.bM=null;a.cd=0.0;a.cX=0;a.b2=null;a.di=null;a.c_=null;a.rg=null;a.nk=null;a.Ex=null;}
function Lx(a){var b;b=a.b2;if(b!==null)b.v9();}
function LN(a){var b;b=a.b2;if(b!==null)b.x9();}
function Ka(a,b){var c;c=a.cq.eo!==(EP()).activeElement?0:1;if(c)LN(a);a.b2=b;if(c)Lx(a);}
function Cn(a,b){if(a.b2!==b){LN(a);a.b2=b;Lx(a);}}
function ADR(a,b){if(a.b2===b)a.b2=null;}
function Cz(a,b){return b!==a.b2?0:1;}
function K2(a){return a.bS.cv;}
function FM(a,b){return Ha(a.bS,b.iI,b.hB*a.cd,b.kO,0);}
function Cw(a,b){return Ci(b,a.cd);}
function I5(a,b){var c;c=a.bS;if(!a.cX)c.q5=b;else c.pr=b;Kc(a.cq);}
function A6B(a,b,c){var d;d=a.b2;return d!==null&&d.e6(b,c)?1:0;}
function A4t(a){var b;b=a.b2;return b===null?null:b.Bo();}
function Yd(){B.call(this);this.xD=null;}
function A7D(a,b,c,d){var e,f,g,h;e=(B4(a.xD.bC)).data;f=e.length;g=0;a:{while(g<f){if(e[g].ba.dz(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function Yc(){B.call(this);this.uU=null;}
function AQf(a,b){var c,d,e,f;c=a.uU;b=b.h;d=0;e=c.bC.cW;a:{while(d<e){f=FR(c.bC,d);if(!BG(f.W,b)&&!QQ(f,b)&&!AEK(f,b)?0:1){c=FR(c.bC,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.yv;if(c!==null&&AK$(c.yh,b)?1:0){d=1;break b;}}d=0;}return d;}
function AHP(){var a=this;B.call(a);a.fj=null;a.p9=0.0;a.i8=0.0;a.hT=0;}
function A2l(){var a=new AHP();AVG(a);return a;}
function AVG(a){var b;b=UK(0,0,2,20);a.fj=b;a.p9=0.5;a.i8=0.0;Jk(187,187,187,255,b.bg);}
function UD(a){return a.fj.v.a;}
function ADr(a,b){var c,d;a:{c=a.hT;if(b>a.i8)while(true){d=a.i8+a.p9;a.i8=d;a.hT=a.hT?0:1;if(b>d)continue;else break a;}}return a.hT==c?0:1;}
function V2(a,b,c){X(a.fj.w,b,c);}
function AAE(a,b){a.i8=b+a.p9*1.25;a.hT=1;}
function AM2(a,b){return AHr(a.fj.w,0,0,b);}
function AEv(a,b,c){if(a.hT)ABY(a.fj,b,c.a,c.b);}
function AGm(){var a=this;B.call(a);a.fQ=null;a.i=null;a.q4=null;a.sM=null;a.iz=null;a.j$=null;a.fz=null;a.mm=null;a.z=0;a.C=0;a.iZ=0;a.jw=null;a.ja=null;a.qB=null;a.fB=0;a.hi=0;a.hz=0;a.jH=Ga;a.CA=Ga;a.De=Ga;a.rF=0;a.GW=0;a.ek=0;a.nB=0.0;a.gm=0;}
function A$l(a,b,c){var d=new AGm();AN4(d,a,b,c);return d;}
function ARp(a,b){var c=new AGm();AU5(c,a,b);return c;}
function A$r(a,b,c){var d=new AGm();Xx(d,a,b,c);return d;}
function AN4(a,b,c,d){Xx(a,(ALm(b)).k0,c,d);}
function AU5(a,b,c){Xx(a,b,null,c);}
function Xx(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.sM=API();f=new Vf;f.fT=P(OD,16);f.fP=0;f.ea=(-1);a.iz=f;a.jw=null;a.ja=BP();a.qB=BP();a.fB=1;a.hi=1;a.hz=1;a.ek=0;a.nB=0.0;a.gm=0;a.fQ=d;a.q4=c;c=new ABZ;g=e.length;b=P(DS,Be(1,g));if(!g)b.data[0]=ZP(C(22));h=b.data;i=0;while(i<g){h[i]=ZP(e[i]);i=i+1|0;}d=new AAp;f=new OA;R2(f);d.fA=f;c.fu=d;c.eg=Kz();c.d6=Kz();c.jj=BP();if(!h.length){c=new BU;Z(c);N(c);}c.E=b;j=AEI(c);c.dH=AJz(AXD(LC(0,j,0),null,null));a.i=c;}
function Ep(a){var b;b=a.q4;if(b===null){b=a.fQ;b=b===null?C(190):AKA(b.gs);}return b;}
function Ih(a){var b;b=a.fQ;return b===null?null:b.la;}
function Nb(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hi=3;a.hz=3;a.fB=3;c=CP(b[0]);d=E$(b[1]);CP(b[2]);if(b.length<5)OW(a.i,c,d);else{e=CP(b[3]);f=e.data;g=E$(b[4]);Zw(a.i,c,d,e,g,0);Vq(a,J1(e,f.length),Pf(g));}if(a.gm){h=Fn(a);i=Kv(ER(),a.jH);j=new J;L(j);H(Ir(H(H(j,h),C(209)),i),C(210));$rt_globals.console.info($rt_ustr(K(j)));}h=a.j$;if(h!==null)ML(h);}
function JF(a){var b;T$(a,D2(a.z,a.C),JS(a.i,a.z,a.C));if(!(a.jw!==null&&!EY(a.ja))){b=a.C;if(b>0)T$(a,D2(a.z,b-1|0),JS(a.i,a.z,a.C-1|0));}}
function T$(a,b,c){var d,e,f,g,h,i,j,k;a.jw=null;Je(a.ja);d=CD(a.i.eg,c);if(d!==null)c=d;a:{e=CD(a.i.d6,c);if(e!==null){a.jw=MN(a.i,c);c=B$(e);while(true){if(!Cc(c))break a;f=Cd(c);BA(a.ja,MN(a.i,f));}}}c=a.j$;if(c!==null){g=b.bw;h=b.bB;b=c.f0;f=Ep(c.d);e=Ih(c.d);i=(B4(b.xb)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Dt(f,e)){b=b.Ge;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new PW;e.Fm=c;e.Fn=f;e.Fk=g;e.Fl=h;b.vg(f,g,h,e,c.kP);}}}
function Vq(a,b,c){var d,e,f,g,h;if(a.fz!==null){a.De=ER();d=a.i.cI;e=a.fz;f=new AAj;f.Ba=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BI(1);b.data[0]=d;h[2]=b;CI(e,f,C(211),g);}}
function LP(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.j$=b;a.fz=c;if(c===null){d=a.i.E.data;e=d.length;f=0;while(f<e){UZ(d[f]);f=f+1|0;}}else if(a.fB==1){a.jH=ER();b=Ep(a);if(BS(b,C(190))){a.hi=3;a.hz=3;a.fB=3;b=a.j$;if(b!==null)ML(b);}else{e=BS(b,C(201));f=BS(b,C(212));d=FD(a.i);g=d.data.length;h=!e?5120:10240;i=AKT(b);if(f)Kx(a,d,i);else if(g<=h)Kx(a,d,i);else if(!e){Xo(a,Pf(d),i);Kx(a,d,i);}else{Xo(a,Pf(d),i);j=Pf(d);k=a.fz;c=new Sg;c.Bc=a;l=P(B,2);m=l.data;m[0]=j;j=BI(1);j.data[0]=i;m[1]=j;CI(k,c,C(213),l);a.hi=
2;Kx(a,d,i);}}}}
function Xo(a,b,c){var d,e;d=a.fz;e=new WW;e.Bz=a;CI(d,e,C(214),I(B,[b,DL([c,250])]));a.hz=2;}
function Kx(a,b,c){var d,e,f,g;d=a.fz;e=new Y6;e.zD=a;f=P(B,2);g=f.data;g[0]=b;b=BI(1);b.data[0]=c;g[1]=b;CI(d,e,C(215),f);a.fB=2;}
function Fn(a){var b;b=a.fQ;return b===null?C(22):AEO(b);}
function M$(a){var b,c,d,e,f;if(a.gm){b=Fn(a);c=new J;L(c);H(H(c,b),C(216));$rt_globals.console.info($rt_ustr(K(c)));}b=Ep(a);if(b===null)d=null;else{a:{e=(-1);switch(KG(b)){case -1655966961:if(!Bk(b,C(212)))break a;e=3;break a;case 3401:if(!Bk(b,C(217)))break a;e=2;break a;case 98723:if(!Bk(b,C(218)))break a;e=1;break a;case 3254818:if(!Bk(b,C(201)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(219);break b;case 2:d=C(220);break b;case 3:d=C(221);break b;default:d=null;break b;}d=C(222);}}if
(d===null)ML(a.j$);else{a.jH=ER();b=a.fz;c=new ADK;c.wT=a;f=P(B,1);f.data[0]=FD(a.i);CI(b,c,d,f);}}
function Pe(a){var b;b=AYu(a.i.fu,null);Y5(b);Vq(a,b.pR,b.nS);}
function AGb(){var a=this;B.call(a);a.Ab=null;a.D8=null;a.rQ=null;a.xb=null;a.wS=null;a.CY=null;}
function Pm(a,b,c){return S4(a,B4(a.Ab),b,c);}
function ABh(a,b,c){return S4(a,B4(a.D8),b,c);}
function S4(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Dt(c,d))return g.G9;f=f+1|0;}return null;}
function AD$(a,b,c){var d,e,f,g;d=(B4(a.rQ)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Dt(b,c))return g.G4;f=f+1|0;}return null;}
function FV(){var a=this;B.call(a);a.cp=0;a.dx=null;a.c1=null;a.e8=null;a.d_=0;}
var Bbh=0;var Bbd=0;function ZA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.c1;j=i===b&&!i.jX?0:1;if(j){a.c1=b;Oj(b,c.cv,a.dx.hL);}k=IR(Bf(F8(b),e+2048|0),1024);l=a.e8;m=l.data.length;n=k<=m?0:1;if(n){a.e8=CT(l,k);while(m<k){a.e8.data[m]=C4(c);m=m+1|0;}}o=a.dx.id;if(!(!j&&!n)){if(Bbh){l=b.g4;$rt_globals.console.info("fMeasure"+l.data);Bbh=0;}if(!Bbd){c=o.dA;b="alphabetic";c.textBaseline=b;}else{b=o.dA;c="top";b.textBaseline=c;}a.d_=f/1024|0;p=0;while(p<k){KX(a,o,d,a.d_+p|0);p=p+1|0;}a.c1.jX=0;}e=a.e8.data.length;if
(e&&f<=F8(a.c1)){f=f/1024|0;g=a.d_;if(f!=g){if(Yj(f-g|0)>=e){g=0;while(g<e){KX(a,o,d,f+g|0);g=g+1|0;}a.d_=f;}else{while(true){g=a.d_;if(g>=f)break;KX(a,o,d,g+e|0);a.d_=a.d_+1|0;}while(true){g=a.d_;if(g<=f)break;KX(a,o,d,g-1|0);a.d_=a.d_-1|0;}}}}}
function KX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=AAh(a,e);g=a.c1;if(f>=g.t.data.length)return;h=g.g4;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cp;l=a.dx.hL;Fa(b);a:{while(true){g=a.c1;if(f>=g.t.data.length)break a;m=l.data;g=KB(g,f);n=m[Ll(g)];o=!Bbd?Mw(n,c):N5(n,c);m=h.data;Cr(b,n);B1(b,g.x,k,o);k=m[f]-j+a.cp;if(k>1024.0)break;f=f+1|0;}}h=a.e8.data;CU(h[d%h.length|0],b);}
function Rm(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.e8.data.length;if(!o)return;if(g>F8(a.c1))return;p=a.c1;q=p.fn;r=p.t;s=g/1024|0;t=AAh(a,g);u= -a.cp|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.e8.data[s%o|0];bb=w[t];bc=z[t]+a.cp|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Bf(bf,bc)-g|0;if(bd&&y)bg=bg+a.cp|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cp:2*a.cp|0;bj
=i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cp:2*a.cp|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bz.g9;if(bb===j)bo=h.bz.sI;if(k!==null){p=B$(k);d:{while(Cc(p)){if(BS(Cd(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bz.x8;}if(n!==null){w=n.oK;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AGJ(h.d7,h,bi,n.fN);}if(!bn&&!bl){i.b=Bf(i.b,F8(a.c1));AIF(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Bf(bc,bf)-i.a|0)-(!y?a.cp:0)|0,(g
+bg|0)<=(i.b+(!y?a.cp:2*a.cp|0)|0)?0:(Bf(bc,bf)-i.b|0)-(!y?a.cp:0)|0,g-x|0,bo);}else{bp=h.kt.data[bb.b_];p=bn?h.bz.lJ:UH(bo,YT(h,bp.nN));Cv(a.dx.j9,g-x|0,0.0,bg,v);X(a.dx.iQ,bg,f);HQ(a.dx,d,ba,u+c|0,b,bp.hJ,p);}if((bb.bO&12)>>2>0){bc=u+c|0;Cb(d,1);p=a.dx;bq=p.oM;bq.a=bg;x=b+p.vH|0;bk=x-p.DS|0;br=p.r0;bs=x+br;ba=p.gZ;VK();MX(d,bc,bk,bq,br,bs,ba,Bbi.lX.hJ);Cb(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AIF(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kt.data[h.b_];o=n.hJ;p=UH(m,YT(f,n.nN));q=f.bz.lJ;f=a.dx;r=f.j9;s=f.iQ;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);X(s,u,e);HQ(a.dx,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);X(s,k,e);f=a.dx;c=c+i|0;HQ(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);X(s,i,e);HQ(a.dx,b,g,c-j|0,d,o,q);}
function UH(b,c){if(b!==null)c=b;return c;}
function AAh(a,b){var c,d,e,f,g,h,i;c=a.c1;d=c.g4;e=0;f=c.t.data.length;g=b;b=BR(e,f);if(b>0){c=new BU;Z(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BR(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AGt(a){var b,c,d;b=a.e8.data;c=b.length;d=0;while(d<c){AI$(b[d]);d=d+1|0;}a.e8=a.dx.o1;a.c1=null;}
function ALy(a,b,c,d,e,f,g,h,i){var j,k;j=F8(a.c1);if(j)j=j+a.cp|0;if(!j)j=j-a.cp|0;k=Be( -a.cp|0,j-g|0);if(k>=h)return;X(f,h-k|0,e);Bw(b,c+k|0,d,f,i);}
function ABl(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FV,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.vK(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.c1===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FV;g.cp=3;g.d_=0;g.dx=d;g.e8=d.o1;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AGt(q);j=j+1|0;}return i;}
function UB(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].c1;if(e!==null)e.jX=1;d=d+1|0;}}
function Pl(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AGt(b[d]);d=d+1|0;}}
function AII(){Bbd=0;}
function AKl(){var a=this;B.call(a);a.gG=null;a.dQ=null;a.fw=null;a.f9=null;a.pJ=null;a.pw=null;}
function JT(){var a=new AKl();A2V(a);return a;}
function A2V(a){a.gG=new Bg;a.dQ=new Bg;a.fw=new Bg;a.f9=new Bg;a.pJ=new B3;a.pw=new B3;}
function ABB(a){var b;b=a.dQ;return !Bb(b.a,b.b)?0:1;}
function Jr(a,b){return GV(b,a.fw,a.f9);}
function GC(a,b,c,d){var e,f,g,h,i;e=Jr(a,b);f=GV(b,a.gG,a.dQ);if(!e&&!f)return null;if(!f){if(!d)c.g(W4(a,b.a-a.fw.a|0));else c.g(RV(a,b.b-a.fw.b|0));}g=!d?a.gG.a+(a.dQ.a/2|0)|0:a.gG.b+(a.dQ.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new TR;b.xt=a;b.xu=c;b.xs=i;}else{b=new TQ;b.s0=a;b.sY=c;b.sZ=i;}return b;}
function IO(a,b,c){if(c!==null)BN(a.pJ,c);if(b!==null)BN(a.pw,b);}
function AH0(b,c){var d;d=new AEi;d.uT=b;d.Eo=c;return d;}
function RV(a,b){var c,d,e;c=a.f9.b;d=a.dQ.b;e=c-d|0;return AH0(Bf(Be(0,b-(d/2|0)|0),e),e);}
function W4(a,b){var c,d,e;c=a.f9.a;d=a.dQ.a;e=c-d|0;return AH0(Bf(Be(0,b-(d/2|0)|0),e),e);}
function K6(a,b,c,d,e,f,g){W_(a,b,c,d,e,f,g,1);}
function SR(a,b,c,d,e,f,g){W_(a,b,c,d,e,f,g,0);}
function W_(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bf(i,d);j=Be(AAN(d,d,e),i);e=e-d|0;i=d-j|0;i=i?AAN(b,i,e):0;if(!h){k=a.gG;k.a=i+c|0;k.b=f-g|0;l=a.dQ;l.a=j;l.b=g;l=a.fw;l.a=c;l.b=k.b;k=a.f9;k.a=d;k.b=g;break a;}k=a.gG;k.a=f-g|0;k.b=i+c|0;l=a.dQ;l.a=g;l.b=j;l=a.fw;l.a=k.a;l.b=c;k=a.f9;k.a=g;k.b=d;break a;}}X(a.f9,0,0);X(a.dQ,0,0);}}
function Xq(a,b){Hw(a,b);HB(a,b);}
function Hw(a,b){var c;c=a.fw;Bw(b,c.a,c.b,a.f9,a.pJ);}
function HB(a,b){var c,d;c=a.dQ;c.a=c.a-2|0;c.b=c.b-2|0;d=a.gG;Bw(b,d.a+1|0,d.b+1|0,c,a.pw);b=a.dQ;b.a=b.a+2|0;b.b=b.b+2|0;}
function GJ(a,b,c){return Jr(a,b)&&Hk(c)?1:0;}
function AHO(){var a=this;B.call(a);a.Hj=20;a.hg=null;a.fW=null;a.mg=0.0;a.md=null;a.j3=0;a.lE=0;a.hW=0;a.dp=null;a.pL=null;a.fH=null;a.hs=null;a.hq=0;}
function AKd(){var a=new AHO();A71(a);return a;}
function A71(a){a.Hj=20;a.hg=new Bg;a.fW=new Bg;a.dp=BP();a.pL=Dh(0);}
function AD6(a,b,c){var d,e,f,g,h;d=a.hq;if(b==d)return;e=a.dp.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Be(0,(d-1|0)/20|0);g=Be(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Tl(a,b);a.hq=b;}else{ZN(a,c);if(a.hq>=b)while(true){if(h<g)break a;a.hq=Qp(BL(a.dp,h%e|0),a.fH,a.hs,a.hq,b,f,a.mg);h=h+(-1)|0;}while(g<=h){a.hq=Qp(BL(a.dp,g%e|0),a.fH,a.hs,a.hq,b,f,a.mg);g=g+1|0;}}}}
function My(a,b){if(b===null)b=Dh(0);a.pL=b;}
function ADj(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hW;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.dp;h=BL(h,g%h.q|0);i=a.hg;j=a.pL;k=h.fV.b;l=d.l0;m=b+f|0;n=h.cM;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&XZ(d,j,r,l)!==l.lT?0:1){k=Bb((q-p|0)+1|0,h.cM);X(h.jV,BW(h.c$),k);Cv(h.kD,0.0,Bb(p,h.cM),BW(h.c$),k);t=r;}else{u=XZ(d,j,r,l);N$(h,e,f+Bb(p,h.cM)|0,i,l.qa,u);X(h.jV,BW(h.c$),h.cM);Cv(h.kD,0.0,Bb(q,h.cM),BW(h.c$),h.cM);p=q;}q=q+1|0;r=t;}u=XZ(d,j,r,l);N$(h,
e,f+Bb(p,h.cM)|0,i,l.qa,u);g=g+1|0;f=f+a.hW|0;}}
function Uz(a,b,c,d){var e,f,g,h,i,j;e=a.dp.q;while(true){f=a.dp.q;g=Bb(f,a.hW);if(g>(d+a.lE|0))break;h=BK(0,g);i=new R1;g=a.fW.a;f=a.lE;j=a.md;i.jV=new Bg;i.kD=new B3;i.rq=h;i.eE=20;i.cM=f;i.fV=BK(g,20*f|0);i.h5=Mw(j,f);if(i.c$===null)i.c$=C4(b);BA(a.dp,i);}if(f==e)return;ZN(a,b);Tl(a,c);}
function Tl(a,b){var c,d,e,f,g,h,i,j,k;c=a.dp;d=c.q;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B$(c);while(Cc(c)){f=Cd(c);g=a.fH;h=a.mg;Fa(g);i=0;while(true){j=f.eE;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;Hq(f,g,Dr(e),Bb(f.cM,i)+f.h5|0,h);i=i+1|0;}CU(f.c$,g);f.yH=g.jY;}}
function AAK(a,b,c,d){a.md=b;a.lE=c;a.hW=c*20|0;a.j3=d;AAM(a);}
function ZN(a,b){var c;c=a.fH;if(!(c!==null&&c.jY==a.j3)){c=Ei(b,a.fW.a,a.hW,a.j3);a.fH=c;Cr(c,a.md);ACj(a.fH,2);}c=a.hs;if(!(c!==null&&c.jY==a.j3)){b=Ei(b,a.fW.a,a.lE,a.j3);a.hs=b;Cr(b,a.md);ACj(a.hs,2);}}
function Ji(a){FW(a.dp,new AF6);Je(a.dp);AAM(a);}
function AAM(a){a.fH=BV(a.fH,null);a.hs=BV(a.hs,null);}
function TT(a,b,c,d,e){Ct(a.hg,b);X(a.fW,c,d);a.mg=e;}
function Zp(){B.call(this);this.FP=null;}
function Zo(){B.call(this);this.rC=null;}
function APG(a,b){var c;c=a.rC;GA(c,Gq(b,LG(c)));}
function Zn(){B.call(this);this.uK=null;}
function AOU(a,b){var c;c=a.uK;Jp(c,Gq(b,ADp(c)));}
function AM9(){var a=this;B.call(a);a.j9=null;a.iQ=null;a.oM=null;a.gZ=null;a.uy=null;a.hL=null;a.o1=null;a.dy=null;a.id=null;a.r0=0.0;a.d9=0;a.vH=0;a.DS=0;a.jo=0;}
function ATy(a){var b=new AM9();AXn(b,a);return b;}
function AXn(a,b){a.j9=new B3;a.iQ=new Bg;a.oM=new Bg;a.gZ=new B3;a.uy=A0$(0);a.hL=P(Ml,4);a.o1=P(Lp,0);a.jo=b;Mo(a.gZ);}
function AAk(a){a.id=BV(a.id,null);}
function TX(a,b,c){var d,e;d=C6(Ft(a.dy)*b);a.d9=d;e=a.dy;a.vH= -( -((d+e.eR+e.fa)/2.0)|0)|0;AGz(a,c);return a.d9;}
function Q2(a,b){var c,d;Mo(a.gZ);c=a.gZ;WR(c,b,c);a.r0=Y3(a.gZ);c=a.gZ;d=c.bx+c.bk+1.5|0;a.DS=d;X(a.oM,0,d*2|0);}
function AGz(a,b){a.id=BV(a.id,Ei(b,1024,a.d9,a.jo));}
function HQ(a,b,c,d,e,f,g){var h,i;h=a.iQ;if(h.a&&h.b){i=a.j9;if(i.bH!==0.0&&i.bk!==0.0){DT(b,d,e,h,i,c,f,g,a.jo);return;}}}
function Zm(){B.call(this);this.Dc=null;}
function AZp(a){var b,c;b=a.Dc;c=b.kR?0:1;b.kR=c;b=new J;L(b);Kd(H(b,C(223)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Zt(){B.call(this);this.zd=null;}
function A1V(a){var b,c;b=a.zd;c=b.lL^1;b.lL=c;b=new J;L(b);Kd(H(b,C(224)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Zs(){B.call(this);this.vA=null;}
function A8X(a){var b,c,d,e,f;b=a.vA;c=(b.eG+3|0)%6|0;b.eG=c;d=b.fm.data;e=d.length;f=0;while(f<e){b=d[f];b.cp=c;b=b.c1;if(b!==null)b.jX=1;f=f+1|0;}}
function Zr(){B.call(this);this.x_=null;}
function ATG(a){var b;b=a.x_;b.b8=b.b8?0:1;Ji(b.dD);b.dD=AKd();OT(b);ACO(b,b.j,b.k,b.ck.cd);}
function Zq(){B.call(this);this.ss=null;}
function AVC(a){var b;b=a.ss;b.mH=b.mH?0:1;}
function Zl(){B.call(this);this.Br=null;}
function A8j(a){var b;b=a.Br;b.q9=b.q9?0:1;}
function WF(){B.call(this);this.tK=null;}
function ATI(a){var b;b=a.tK;AAF(b,b.ms,b.pe);}
function WG(){B.call(this);this.sR=null;}
function A47(a){var b;b=a.sR;AAF(b,b.pe,b.ms);}
var AHl=G(0);
function ALH(b,c,d){return Jk(b,c,d,255,new B3);}
function Jk(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Xg(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AR9(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bt=g+i;e.bx=h+i;e.bk=j+i;return e;}
function Jd(b,c,d,e,f){f=Xg(b,c,d,f);f.bH=e;return f;}
function IB(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var ACe=G();
function AVe(a,b){var c,d,e;c=b.cS;d=c&&!b.bW&&!b.dB&&!b.jb?1:0;a:{if(d){d=b.be;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bW&&!c&&!b.dB&&!b.jb?1:0;d=d&&b.be==46?1:0;}b:{if(!d){e=b.be;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.pW=1;}return 0;}
function ACd(){B.call(this);this.y$=null;}
function AYQ(a,b){var c;c=a.y$.b2;return c!==null&&c.bm(b)?1:0;}
function Vt(){var a=this;B.call(a);a.bb=null;a.yv=null;a.i$=null;a.i6=null;a.W=null;a.dI=null;a.ba=null;a.gR=null;a.iw=0;}
function AG2(a){var b=new Vt();AVp(b,a);return b;}
function A76(a,b){var c=new Vt();AHZ(c,a,b);return c;}
function AVp(a,b){AHZ(a,b,AYV());}
function AHZ(a,b,c){var d;a.bb=b;d=new Wc;Fo(d);d.nD=new B3;d.gM=b;a.W=d;a.ba=c;}
function U7(a,b){var c,d;if(a.dI===null){c=new RU;c.gS=new Bg;c.ln=new Bg;a.dI=c;d=a.gR;if(d!==null)ACD(c,d);}a.dI.jN=b;}
function Ln(a){var b;b=a.i$;if(b!==null)b.e();}
function LJ(a){var b;b=a.i6;if(b!==null)b.e();}
function CZ(a,b){var c;c=a.W;c.fb=c.fb|(BS(c.ko,b)?0:1);c.ko=b;Jb(a);}
function ACE(a,b,c){var d,e,f;d=a.W;e=BS(d.h9,b)?0:1;f=c===d.lu?0:1;if(e){d.h9=b;d.e2=null;RM(d,0);}d.fb=d.fb|(!e&&!f?0:1);d.lu=c;d.iU=0;Jb(a);}
function Ey(a,b){var c;a.gR=b;c=b.ot;BE(b);ACE(a,c,3.0);c=a.dI;if(c!==null)ACD(c,b);}
function KE(a){var b;b=a.W;b.eq=BV(b.eq,null);b.e2=null;a.ba=BV(a.ba,null);b=a.dI;if(b!==null){OG(b);b.jN=null;}}
function LZ(a,b){var c,d,e;c=a.ba;d=c.j;e=c.k;b=BV(c,b);a.ba=b;b.d1(d,e,a.bb.cd);}
function Eh(a,b,c){a.ba.d1(b,c,a.bb.cd);Jb(a);}
function Jb(a){var b,c,d;if(a.bb.cd!==0.0){b=a.W;if(b.h9!==null){c=a.ba.k.a;b.k.a=c;d=b.eq;if(d!==null&&c!=BW(d)&&!(c>=b.iU&&BW(b.eq)>=b.iU))b.fb=1;b=a.W;b.b4=a.bb.cd;if(O9(b))c=0;else{b=a.W;RM(b,Xw(b));c=b.k.b;}b=a.W.j;d=a.ba.j;X(b,d.a,d.b-c|0);b=a.dI;if(b!==null)Ct(b.gS,a.W.j);return;}}}
function AE2(a){return Xw(a.W);}
function M0(a,b){return AEK(a,b.h);}
function AEK(a,b){var c;c=!(a.iw&1)?0:1;return !c&&!BG(a.ba,b)?0:1;}
function MT(b,c){if(b<0)c=C(225);else if(b>0)c=C(226);return c;}
function Px(a,b,c){var d;d=a.W.j.a;return (d-c|0)<=b&&b<d?1:0;}
function Nv(a,b,c){var d,e;d=a.W;e=d.j.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function N0(a,b,c){var d;d=a.W.j.b;return (d-c|0)<=b&&b<d?1:0;}
function Lu(a,b,c){var d,e;d=a.ba;e=d.j.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function O_(a,b,c){var d,e,f;d=a.W.j.b-c|0;e=a.ba;f=(e.j.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function AFS(a,b,c){var d,e;d=a.W.j.b+c|0;e=a.ba;return AMa(b,d,(e.j.b+e.k.b|0)-c|0);}
function NQ(a,b,c){var d,e,f;d=a.W;e=d.j.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Zj(a,b,c){var d,e;d=a.W;e=d.j.a;return AMa(b,e+c|0,(e+d.k.a|0)-c|0);}
function AMa(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BR(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function QQ(a,b){var c;a:{b:{c:{c=Cw(a.bb,7.0);if(NQ(a,b.a,c)){if(N0(a,b.b,c))break c;if(Lu(a,b.b,c))break c;}if(!O_(a,b.b,c))break b;if(!Px(a,b.a,c)&&!Nv(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function KL(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.ba;i=b.j;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new AFX;b.uc=a;b.ud=e;b.ue=f;b.uf=c;b.uo=g;b.up=j;b.uq=l;b.ur=d;b.ul=h;b.um=k;b.Ev=m;return b;}
function NI(a){var b;b=a.dI;if(b!==null){b.jN.e();return;}b=new GB;Z(b);N(b);}
function AAS(a){return !(a.iw&2)?0:1;}
function Yq(a){var b,c;b=a.bb;c=b.bM;X(b.c_,0,0);Eh(a,a.bb.c_,c);}
function K4(){var a=this;B.call(a);a.w=null;a.v=null;a.bg=null;a.bu=null;}
function T2(){var a=new K4();AEw(a);return a;}
function UK(a,b,c,d){var e=new K4();AQi(e,a,b,c,d);return e;}
function AEw(a){a.w=new Bg;a.v=new Bg;a.bg=new B3;a.bu=new B3;}
function AQi(a,b,c,d,e){a.w=new Bg;a.v=new Bg;a.bg=new B3;a.bu=new B3;HV(a,b,c,d,e);}
function HV(a,b,c,d,e){X(a.w,b,c);X(a.v,d,e);}
function ADs(a){X(a.v,0,0);}
function L0(a){var b;b=a.v;return Bb(b.a,b.b)?0:1;}
function FE(a,b){return GV(b,a.w,a.v);}
function ABY(a,b,c,d){var e;e=a.w;Bw(b,e.a+c|0,e.b+d|0,a.v,a.bg);}
function XN(a,b,c,d,e,f){var g,h,i,j;g=a.w;d=g.a+d|0;e=g.b+e|0;g=a.v;h=a.bu;i=a.bg;G8(b,b.ju);Hg(b.ju,b.bh,d,e,g,b.df);OO(b.ju,b.bh,c);g=b.ju;j=b.bh;F6(j,g.xW,h);F6(j,g.xU,i);c=g.ug;j.uniform2f(c,f,0.0);Gz(b);}
var FP=G();
function Oe(){FP.call(this);this.G9=null;}
function ADb(){FP.call(this);this.G4=null;}
function AAT(){FP.call(this);this.Ge=null;}
var GM=G(0);
var T9=G(0);
function B3(){var a=this;B.call(a);a.bt=0.0;a.bx=0.0;a.bk=0.0;a.bH=0.0;}
function AGk(a,b,c,d){var e=new B3();A5L(e,a,b,c,d);return e;}
function AN$(a){var b=new B3();AM$(b,a);return b;}
function A5L(a,b,c,d,e){a.bt=b;a.bx=c;a.bk=d;a.bH=e;}
function Cv(a,b,c,d,e){a.bt=b;a.bx=c;a.bk=d;a.bH=e;}
function AM$(a,b){a.bt=b.bt;a.bx=b.bx;a.bk=b.bk;a.bH=b.bH;}
function BN(a,b){a.bt=b.bt;a.bx=b.bx;a.bk=b.bk;a.bH=b.bH;return a;}
function AYB(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BF(a)===BF(b)){b=b;if(b.bt===a.bt&&b.bx===a.bx&&b.bk===a.bk&&b.bH===a.bH?1:0){c=1;break a;}}c=0;}return c;}
function AQe(a){var b,c,d,e,f;b=a.bt;c=a.bx;d=a.bk;e=a.bH;f=new J;L(f);Di(H(Di(H(Di(H(Di(H(f,C(73)),b),C(74)),c),C(227)),d),C(228)),e);return K(f);}
var JO=G(0);
function ALe(){var a=this;EK.call(a);a.cx=null;a.q=0;}
function BP(){var a=new ALe();ARM(a);return a;}
function ARM(a){a.cx=P(B,10);}
function NC(a,b){var c,d;c=a.cx.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cx=CT(a.cx,d);}}
function BL(a,b){Li(a,b);return a.cx.data[b];}
function A4M(a){return a.q;}
function BA(a,b){var c,d;NC(a,a.q+1|0);c=a.cx.data;d=a.q;a.q=d+1|0;c[d]=b;a.cc=a.cc+1|0;return 1;}
function AMo(a,b,c){var d,e,f;RO(a,b);NC(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cx.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cx.data[b]=c;a.q=d+1|0;a.cc=a.cc+1|0;}
function E5(a,b){var c,d,e,f;Li(a,b);c=a.cx.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.cc=a.cc+1|0;return d;}
function AJN(a,b){var c;c=LW(a,b);if(c<0)return 0;E5(a,c);return 1;}
function Je(a){AHy(a.cx,0,a.q,null);a.q=0;a.cc=a.cc+1|0;}
function ALs(a,b,c){var d,e,f,g,h,i;RO(a,b);if(c.e_())return 0;NC(a,a.q+c.da()|0);d=c.da();e=a.q;f=e-1|0;while(f>=b){g=a.cx.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.cl();i=0;while(i<d){g=a.cx.data;e=b+1|0;g[b]=h.cn();i=i+1|0;b=e;}a.cc=a.cc+1|0;return 1;}
function Li(a,b){var c;if(b>=0&&b<a.q)return;c=new BM;Z(c);N(c);}
function RO(a,b){var c;if(b>=0&&b<=a.q)return;c=new BM;Z(c);N(c);}
function FW(a,b){var c;c=0;while(c<a.q){b.g(a.cx.data[c]);c=c+1|0;}}
function ANc(a){var b,c,d,e;b=a.q;if(!b)return C(23);c=b-1|0;d=new J;Gm(d,b*16|0);Bq(d,91);b=0;while(b<c){e=a.cx.data;BO(H(d,e[b]!==a?e[b]:C(229)),C(40));b=b+1|0;}e=a.cx.data;H(d,e[c]!==a?e[c]:C(229));Bq(d,93);return K(d);}
function Ix(){var a=this;B.call(a);a.fN=0;a.oK=null;}
function A0$(a){var b=new Ix();AT3(b,a);return b;}
function AT3(a,b){a.fN=b;}
function Ml(){var a=this;B.call(a);a.pp=null;a.EM=null;a.p$=0.0;a.EZ=0;a.Fd=0;a.uS=0;a.FU=0;a.eR=0.0;a.fa=0.0;a.EQ=0.0;a.rh=0.0;a.EV=0;a.r4=null;}
function Mw(a,b){return N5(a,b)+a.uS|0;}
function N5(a,b){return (b-Ft(a)|0)/2|0;}
function Ft(a){return C6(a.eR+a.fa);}
function N6(a,b){return C6((a.eR+a.fa)*b);}
function Lp(){var a=this;B.call(a);a.d$=null;a.gD=null;a.ef=null;a.kN=0;}
function AI$(a){var b,c;b=a.gD;if(b!==null){c=a.d$;c.k6=c.k6-1|0;c.gi=c.gi-a.kN|0;c.ev.deleteTexture(b);a.gD=null;a.kN=0;}}
function BW(a){return a.ef.a;}
function CX(a){return a.ef.b;}
function AKw(b,c,d){var e;a:{switch(d){case 32856:break;case 33321:e=1;break a;default:e=0;break a;}e=4;}return Bb(Bb(b,c),e);}
function UP(a,b,c,d){var e;e=a.ef;e.a=b;e.b=c;Ph(a);a.d$.ev.texStorage2D(3553,1,d,b,c);e=a.d$.ev;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Ph(a){var b,c;b=a.d$.ev;c=a.gD;b.bindTexture(3553,c);}
function CU(a,b){YK(a,b.o5,b.oq,32856);AAP(a,b,0,0);}
function YK(a,b,c,d){var e,f,g,h;a:{e=a.ef;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Ph(a);break a;}e=a.d$;e.gi=e.gi-a.kN|0;e=e.ev;h=a.gD;e.deleteTexture(h);a.gD=a.d$.ev.createTexture();UP(a,b,c,d);e=a.ef;b=AKw(e.a,e.b,d);a.kN=b;e=a.d$;e.gi=e.gi+b|0;break a;}}UP(a,b,c,d);e=a.ef;b=AKw(e.a,e.b,d);a.kN=b;e=a.d$;e.gi=e.gi+b|0;}}
function Kt(a,b,c,d){Ph(a);AAP(a,b,c,d);}
function AAP(a,b,c,d){var e;e=a.d$.ev;b=b.jO;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var AAJ=G(0);
var Bbj=0.0;function Mo(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function WR(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:J3(b.bH,J3(c,Bbj));Cv(d,b.bt/c,b.bx*c,AXY(b.bk*c,1.25),e);}
function Y3(b){var c;c=b.bx;return c-(c|0)>=0.25?0.0:0.5;}
function AG0(){Bbj=NW(NW(0.5,0.375),4.0);}
var PE=G(0);
function Hk(a){return D_(a,null);}
function SQ(b){var c;c=new AB9;c.w$=b;return c;}
function AA2(){B.call(this);this.u$=null;}
function A2x(a){Lx(a.u$);}
function AA1(){B.call(this);this.xN=null;}
function AY$(a){LN(a.xN);}
function ANX(){var a=this;B.call(a);a.bY=null;a.bP=null;a.dV=0;}
function API(){var a=new ANX();A8p(a);return a;}
function A0Y(a){var b=new ANX();AUL(b,a);return b;}
function A8p(a){a.bY=new HU;a.bP=new HU;}
function AUL(a,b){a.bY=new HU;a.bP=new HU;Ks(a,b);}
function Ks(a,b){AEl(a.bY,b.bY);AEl(a.bP,b.bP);a.dV=b.dV;}
function OQ(a,b,c){Cj(a.bP,b,c);if(!a.dV)Cj(a.bY,b,c);}
function RW(a,b){Cj(a.bY,b,0);Cj(a.bP,b+1|0,0);}
function EI(a){if(Tq(a.bY,a.bP)>0)return a.bP;return a.bY;}
function GE(a){if(Tq(a.bY,a.bP)<0)return a.bP;return a.bY;}
function AM8(a,b){var c,d,e,f;c=a.bY;d=c.R;e=a.bP;if(d==e.R&&c.bj==e.bj?1:0)return null;c=EI(a);e=GE(a);d=c.R;if(d<=b){f=BR(b,e.R);if(f<=0)return BK(b<=d?c.bj:0,f>=0?e.bj:(-1));}return null;}
function DE(a){var b,c;b=a.bY;c=a.bP;return (b.R==c.R&&b.bj==c.bj?1:0)?0:1;}
function Vf(){var a=this;B.call(a);a.fT=null;a.fP=0;a.ea=0;}
function AEU(a,b){var c,d,e;c=a.fP;d=a.fT;if(c==d.data.length)a.fT=CT(d,c+16|0);d=a.fT.data;e=a.fP;a.fP=e+1|0;d[e]=b;}
function AB5(a){var b,c,d,e;b=a.fP;if(b?0:1)return;c=a.ea;d=b-1|0;if(c==d)a.ea=c-1|0;e=a.fT.data;a.fP=d;e[d]=null;}
var HA=G();
function ABZ(){var a=this;HA.call(a);a.E=null;a.dH=null;a.fu=null;a.eg=null;a.d6=null;a.jj=null;a.mo=null;a.cI=0;a.ow=0;a.Ca=0.0;}
function Cg(a,b){return a.E.data[b];}
function CR(a){return a.E.data.length;}
function AEI(a){return F7(a,CR(a));}
function Hc(a,b){return a.E.data[b].Y;}
function ANM(a,b,c){var d,e,f,g,h;d=a.E;e=d.data;f=e[b];d=CT(d,e.length+1|0);e=d.data;a.E=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=El(P(CC,0));a.E.data[b+1|0]=f;}else if(c==f.Y){e[b]=f;e[b+1|0]=El(P(CC,0));}else{e=(Jx(f,c)).data;d=a.E.data;d[b]=e[0];d[b+1|0]=e[1];}GD(a,b,c,0,C(184));}
function Mp(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=El(MO(d.t,e.t));g=a.E;h=g.data.length;if(b<h&&b>=0){i=P(DS,h-1|0);c=i.data;ABS(g,b,i);c[b]=f;a.E=i;return;}d=new Bu;Z(d);N(d);}
function P2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].Y?0:1)){d=(Cg(a,b)).t.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.x)){e=Q(h.x,g);break a;}g=g-M(h.x)|0;f=f+1|0;}e=0;}GD(a,b,c,1,Oq(e));h=a.E.data[b];d=h.t;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].x);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].x)==1)h.t=ABS(d,e,P(CC,f-1|0));else{j=i[e];if(c<=0)k=Et(DD(j.x,1),j.b_,j.bO);else if(c>=(M(j.x)-1|0)){k=new CC;l=j.x;ADJ(k,Cy(l,0,M(l)-1|0),j.b_,j.bO);}else{d=B6(M(j.x)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.x,b);b=b+1|0;}b=m.length;while(c<b){k=j.x;n=c+1|0;m[c]=Q(k,n);c=n;}k=Et(GT(d),j.b_,j.bO);}i[e]=k;}h.Y=h.Y-1|0;Fm(h);}else if(b!=(d.length-1|0)){GD(a,b,c,1,C(184));Mp(a,b);}}
function AGG(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){ACn(a.E.data[b],c,e[0]);return;}g=f-1|0;d=(Jx(a.E.data[b],c)).data;h=d[0];i=d[1];d=a.E;j=CT(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.t.data;f=l.length;c=!f?0:M(l[f-1|0].x);Nn(h,h.t.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!G4(e[m])?ZP(e[m]):El(P(CC,0));d[b+m|0]=k;m=m+1|0;}Nn(i,0,0,e[g]);d[b+g|0]=i;a.E=j;}
function WK(a,b){var c,d,e,f,g,h,i;c=EI(b);d=GE(b);e=c.R;if(e==d.R)return Cy(Gd(a.E.data[e]),c.bj,d.bj);f=new J;L(f);b=a.E.data[c.R];e=c.bj;Bq(BO(f,DD(Gd(b),e)),10);g=a.E.data;e=c.R+1|0;h=d.R;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AGT(BO(f,Gd(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.E.data[d.R];h=d.bj;BO(f,Cy(Gd(b),0,h));return K(f);}b=new Pa;Z(b);N(b);}
function P9(a,b,c){var d;AFl(a,b);d=EI(b);GD(a,d.R,d.bj,1,c);}
function AFl(a,b){var c,d,e,f,g,h,i;a:{c=EI(b);d=GE(b);e=c.R;if(e==d.R)Is(a.E.data[e],c.bj,d.bj);else{b=a.E.data[e];Is(b,c.bj,b.Y);Is(a.E.data[d.R],0,d.bj);e=c.R+1|0;f=d.R;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DS,(h-f|0)+e|0);AIc(g,e,f,i);a.E=i;Mp(a,c.R);break a;}b=new Bu;Z(b);N(b);}b=new Bu;Z(b);N(b);}}}
function JS(a,b,c){return D2(b,Hm(Cg(a,b),c));}
function AFQ(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(Cg(a,c)).Y|0)>=b)return BK(c,b-d|0);d=d+((Cg(a,c)).Y+1|0)|0;c=c+1|0;}return BK(e,0);}
function F7(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+Hc(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function MN(a,b){return Pc(Cg(a,b.bw),b.bB);}
function FD(a){var b,c,d,e,f,g,h,i,j;b=B6(AEI(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].t.data;h=g.length;i=0;while(i<h){j=g[i].x;R$(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function GD(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cI=a.cI+1|0;f=a.jj;g=P(HM,1);h=new HM;h.eJ=b;h.fr=c;i=M2(e,C(184),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BK(b,c+M(i[0])|0);break a;}k=BK((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BK(b,c);}i=g.data;h.qH=k;h.ph=d;h.hx=e;i[0]=h;BA(f,g);N9(a,b,c,d,e);}
function N9(a,b,c,d,e){var f;f=F7(a,b)+c|0;if(!d){ZO(a.dH,f,M(e));Vn(a.fu,f,M(e));}else{W6(a.dH,f,M(e));Ql(a.fu,f,M(e));}}
function YP(a,b){var c,d,e;c=M2(b.hx,C(184),(-1));if(b.ph){AGG(a,b.eJ,b.fr,c);ZO(a.dH,F7(a,b.eJ)+b.fr|0,M(b.hx));Vn(a.fu,F7(a,b.eJ)+b.fr|0,M(b.hx));}else{c=c.data;d=API();Cj(d.bY,b.eJ,b.fr);e=c.length;if(e==1)Cj(d.bP,b.eJ,b.fr+M(c[0])|0);else Cj(d.bP,(b.eJ+e|0)-1|0,M(c[e-1|0]));AFl(a,d);W6(a.dH,F7(a,b.eJ)+b.fr|0,M(b.hx));Ql(a.fu,F7(a,b.eJ)+b.fr|0,M(b.hx));}return b.qH;}
function ADV(a){return a.ow==a.cI?0:1;}
function Lq(a){a.ow=a.cI;}
function N4(a){var b,c,d;a.mo=BI(a.E.data.length+1|0);b=0;while(b<a.E.data.length){c=a.mo.data;d=b+1|0;c[d]=(c[b]+(Cg(a,b)).Y|0)+1|0;b=d;}}
function XG(a,b){var c,d,e,f,g,h;c=a.mo;if(c===null){d=0;e=0;a:{while(true){c=a.E.data;f=c.length;if(e>=f)break;g=c[e].Y;if(b<=(d+g|0)){h=D2(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=D2(f,0);}return h;}d=AMZ(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=D2(d,b-(d<0?0:a.mo.data[d])|0);if(h.bB>=(Cg(a,h.bw)).Y){h.bw=h.bw+1|0;h.bB=0;}return h;}
function AB9(){B.call(this);this.w$=null;}
function D_(a,b){AB0(a.w$,b);return 1;}
function HU(){var a=this;B.call(a);a.R=0;a.bj=0;}
function Cj(a,b,c){a.R=b;a.bj=c;}
function AEl(a,b){a.R=b.R;a.bj=b.bj;}
function Tq(a,b){var c;c=BR(a.R,b.R);if(c)return c;return BR(a.bj,b.bj);}
function OD(){var a=this;B.call(a);a.qL=null;a.pN=null;}
function MS(a){return a.qL.bw;}
function LB(a){return a.qL.bB;}
function DS(){var a=this;B.call(a);a.t=null;a.Y=0;a.g4=null;a.fn=null;a.eW=null;a.iS=null;a.hK=0;a.jX=0;a.kh=0;}
var Bbk=0;var Bbl=0;var Bbe=0;function ZP(a){var b=new DS();ANg(b,a);return b;}
function El(a){var b=new DS();ABt(b,a);return b;}
function ANg(a,b){var c;c=P(CC,1);c.data[0]=ALQ(b);ABt(a,c);}
function ABt(a,b){var c,d,e,f;c=b.data;a.t=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].x)|0;f=f+1|0;}a.Y=d;Fm(a);}
function J8(a){return a.t.data.length;}
function KB(a,b){return a.t.data[b];}
function Hm(a,b){var c;c=K1(a,b);return c<=0?0:a.eW.data[c-1|0];}
function K1(a,b){var c,d,e,f;c=a.t.data.length;if(!c)return (-1);if(!(a.eW!==null&&!a.kh)){Xm(a);d=0;e=0;f=a.t.data.length;while(d<f){e=e+M(a.t.data[d].x)|0;a.eW.data[d]=e;d=d+1|0;}a.kh=0;}d=ADT(a.eW,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Pc(a,b){var c;c=a.t.data;if(!c.length)return null;return c[K1(a,b)];}
function Is(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.Y){a.t=P(CC,0);Fm(a);a.Y=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.t.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].x);i=M(a.t.data[f].x);j=BR(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.t.data[f];if(!b&&c==M(k.x)?1:0){g=a.t;a.t=ABS(g,e,P(CC,g.data.length-1|0));a.Y=a.Y-d|0;Fm(a);return;}a.t.data[e]=Et(FX(Cy(k.x,0,b),DD(k.x,c)),k.b_,k.bO);}else{g=a.t.data;l=g[e];m=g[f];if(b){if(b
!=M(l.x))a.t.data[e]=Et(Cy(l.x,0,b),l.b_,l.bO);e=e+1|0;}if(c==M(m.x))f=f+1|0;else if(c)a.t.data[f]=Et(DD(m.x,c),m.b_,m.bO);g=a.t;a.t=AIc(g,e,f,P(CC,(g.data.length-f|0)+e|0));}a.Y=a.Y-d|0;Fm(a);}
function Jx(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DS,[El(P(CC,0)),a]);if(b>=a.Y)return I(DS,[a,El(P(CC,0))]);c=a.t;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].x);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DS,[El(Mh(c,0,P(CC,d))),El(Mh(c,d,P(CC,f-d|0)))]);h=e[d];e=Mh(c,0,P(CC,d+1|0));i=e.data;j=Mh(c,d,P(CC,f-d|0));c=j.data;i[d]=Et(Cy(h.x,0,b),h.b_,h.bO);c[0]=Et(DD(h.x,b),h.b_,h.bO);return I(DS,[El(e),El(j)]);}
function ACn(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.t.data;if(e>=f.length)break a;g=M(f[d].x);if(b<=g)break;b=b-g|0;d=e;}}Nn(a,d,b,c);}
function Nn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(G4(d))return;e=a.t;f=e.data;g=f.length;if(!g){h=P(CC,1);h.data[0]=ALQ(d);a.t=h;}else if(!b&&!c){h=P(CC,g+1|0);f=h.data;Dc(e,0,h,1,g);f[0]=ALQ(d);a.t=h;}else{i=f[b];if(c<=0)j=Et(FX(d,i.x),i.b_,i.bO);else if(c>=M(i.x))j=Et(FX(i.x,d),i.b_,i.bO);else{k=M(d);l=k+c|0;m=M(i.x)-c|0;e=B6(M(i.x)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.x,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.x,g+c|0);g=g+1|0;}j=Et(GT(e),i.b_,i.bO);}f[b]=j;}a.Y=a.Y
+M(d)|0;Fm(a);}
function Qn(a){var b,c,d,e,f,g;b=0;c=a.t.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MW(f)){if(Q(f.x,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Oj(a,b,c){var d,e,f,g,h,i,j;d=a.t.data.length;e=a.g4;if(!(e!==null&&e.data.length>=d)){a.g4=AOH(d);a.fn=BI(d);a.hK=1;}Xm(a);if(!a.hK)Bbl=Bbl+1|0;else{f=0;g=0.0;Bbk=Bbk+1|0;h=0;while(h<d){i=c.data;j=a.t.data[h];f=f+M(j.x)|0;a.eW.data[h]=f;Cr(b,i[Ll(j)]);g=g+EF(b,j.x);a.g4.data[h]=g;a.fn.data[h]=g+0.5|0;h=h+1|0;}a.Y=f;a.hK=0;a.kh=0;}}
function Xm(a){var b;b=a.eW;if(!(b!==null&&b.data.length>=a.t.data.length)){a.eW=BI(a.t.data.length);a.kh=1;}}
function UZ(a){a.hK=1;a.iS=null;}
function Fm(a){UZ(a);a.jX=1;a.kh=1;}
function ACi(a,b,c,d){var e,f,g,h,i,j,k;if(a.iS===null)a.iS=P($rt_arraycls($rt_intcls()),a.t.data.length);e=a.iS.data[d];if(e===null){e=c.data;f=a.t.data[d];Cr(b,e[Ll(f)]);f=f.x;e=BI(M(f)-1|0);c=G5(f);g=!d?0.0:a.g4.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BD;k=i+1|0;PB(f,c,0,k);h[i]=g+EF(b,f)+0.5|0;i=k;}a.iS.data[d]=e;}return e;}
function Hx(a,b,c,d){var e,f,g,h,i;if(a.t.data.length&&b){if(!(!a.hK&&a.fn!==null))Oj(a,c,d);if(b>=a.Y)return a.fn.data[a.t.data.length-1|0];e=0;f=0;a:{while(true){g=a.t.data;if(f>=g.length)break a;h=e+M(g[f].x)|0;i=BR(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.fn.data[f];}return (ACi(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function F8(a){var b,c,d;a:{b=a.t.data.length;if(b){c=a.fn.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function HJ(a,b){var c;if(b>=a.Y)return b+1|0;c=K1(a,b);return a.eW.data[c];}
function Gd(a){var b,c,d,e;b=new J;Gm(b,a.Y);c=a.t.data;d=c.length;e=0;while(e<d){BO(b,c[e].x);e=e+1|0;}return K(b);}
function A42(a){var b,c,d,e;b=a.t.data;c=b.length;if(c==1)d=AH7(b[0]);else{d=new J;L(d);BO(d,C(39));e=0;while(e<c){if(e>0)BO(d,C(40));H(d,b[e]);e=e+1|0;}BO(d,C(41));d=K(d);}return d;}
function AIa(){Bbe=0;}
function AAp(){var a=this;B.call(a);a.f5=null;a.fA=null;}
function A0R(a,b){var c=new AAp();A16(c,a,b);return c;}
function A16(a,b,c){a.f5=b;a.fA=c;}
function Vn(a,b,c){var d;d=a.f5;if(d===null)return;ABn(a,d,b,c);}
function Ql(a,b,c){var d;d=a.f5;if(d===null)return;ADY(a,d,b,c);}
function ABn(a,b,c,d){var e,f,g,h;e=b.fp.cl();while(e.c0()){XK(a,e.cn(),c,d);}e=b.f7.cl();while(e.c0()){f=e.cn();g=new UW;g.AO=a;Fb(a,g,f,c,d);}h=b.ij.cl();while(h.c0()){e=h.cn();XK(a,e.mc,c,d);f=new UX;f.yK=a;Fb(a,f,e.lB,c,d);}b=b.c7.cl();while(b.c0()){ABn(a,b.cn(),c,d);}}
function XK(a,b,c,d){Ly(a,b.ey,c,d);}
function Fb(a,b,c,d,e){var f,g;a:{if(c instanceof In){f=c.fZ;g=new XX;g.sw=a;g.su=b;g.st=d;g.sv=e;FW(f,g);}else{if(!(c instanceof KY)){if(!(c instanceof J4))break a;f=c;Fb(a,b,f.iB,d,e);Fb(a,b,f.h8,d,e);return;}g=c.iM;f=new XY;f.Eg=a;f.Ef=b;f.Ee=d;f.Ed=e;FW(g,f);}}if(c!==null){c=c.e4;if(c!==null)b.mG(c,C5(d),C5(e));}}
function Ly(a,b,c,d){var e;e=b.dL;if(e>=c)b.dL=e+d|0;}
function ADY(a,b,c,d){var e,f,g,h;e=b.fp.cl();while(e.c0()){KA(a,(e.cn()).ey,c,d);}e=b.f7.cl();while(e.c0()){f=e.cn();g=new TW;g.wF=a;Fb(a,g,f,c,d);}h=b.ij.cl();while(h.c0()){e=h.cn();KA(a,e.mc.ey,c,d);f=new TY;f.Cz=a;Fb(a,f,e.lB,c,d);}b.fp.qS(new TV);b.f7.qS(new TU);b=b.c7.cl();while(b.c0()){ADY(a,b.cn(),c,d);}}
function KA(a,b,c,d){var e;e=b.dL;if(e>=c)b.dL=e-d|0;}
function L9(){var a=this;Ev.call(a);a.du=0;a.cj=null;a.dl=0;a.Eh=0.0;a.oj=0;}
function Kz(){var a=new L9();R2(a);return a;}
function A2f(a,b){return P(IA,b);}
function R2(a){var b;b=AKf(16);a.du=0;a.cj=P(IA,b);a.Eh=0.75;Vr(a);}
function AKf(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ff(a){var b;if(a.du>0){a.du=0;b=a.cj;AHy(b,0,b.data.length,null);a.dl=a.dl+1|0;}}
function Vr(a){a.oj=a.cj.data.length*a.Eh|0;}
function Ia(a,b){return ADm(a,b)===null?0:1;}
function OV(a){var b;b=new Vs;b.A5=a;return b;}
function CD(a,b){var c;c=ADm(a,b);if(c===null)return null;return c.c3;}
function ADm(a,b){var c,d;if(b===null)c=TP(a);else{d=b.rd();c=Sx(a,b,d&(a.cj.data.length-1|0),d);}return c;}
function Sx(a,b,c,d){var e;e=a.cj.data[c];while(e!==null&&!(e.mT==d&&AK8(b,e.cU))){e=e.dj;}return e;}
function TP(a){var b;b=a.cj.data[0];while(b!==null&&b.cU!==null){b=b.dj;}return b;}
function NZ(a){var b;if(a.qb===null){b=new RG;b.j0=a;a.qb=b;}return a.qb;}
function D6(a,b,c){var d,e,f,g;if(b===null){d=TP(a);if(d===null){a.dl=a.dl+1|0;d=Vl(a,null,0,0);e=a.du+1|0;a.du=e;if(e>a.oj)AEx(a);}}else{e=b.rd();f=e&(a.cj.data.length-1|0);d=Sx(a,b,f,e);if(d===null){a.dl=a.dl+1|0;d=Vl(a,b,f,e);e=a.du+1|0;a.du=e;if(e>a.oj)AEx(a);}}g=d.c3;d.c3=c;return g;}
function Vl(a,b,c,d){var e,f;e=new IA;XT(e,b,null);e.mT=d;f=a.cj.data;e.dj=f[c];f[c]=e;return e;}
function AL1(a,b){var c,d,e,f,g,h,i,j;c=AKf(!b?1:b<<1);d=P(IA,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cj.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.mT&b;j=h.dj;h.dj=e[i];e[i]=h;h=j;}f=f+1|0;}a.cj=d;Vr(a);}
function AEx(a){AL1(a,a.cj.data.length);}
function Mj(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.cj.data[0];while(e!==null){if(e.cU===null)break a;b=e.dj;d=e;e=b;}}else{f=KG(b);g=a.cj.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.mT==f&&AK8(b,e.cU))){h=e.dj;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.dj=e.dj;else a.cj.data[c]=e.dj;a.dl=a.dl+1|0;a.du=a.du-1|0;}if(e===null)return null;return e.c3;}
function AK8(b,c){return b!==c&&!b.bU(c)?0:1;}
function CC(){var a=this;B.call(a);a.x=null;a.b_=0;a.bO=0;}
function ALQ(a){var b=new CC();A1w(b,a);return b;}
function Et(a,b,c){var d=new CC();ADJ(d,a,b,c);return d;}
function A1w(a,b){ADJ(a,b,0,0);}
function ADJ(a,b,c,d){a.x=b;a.b_=c;a.bO=d;}
function Ll(a){return a.bO&3;}
function J5(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MW(a){return M(a.x);}
function AH7(a){var b,c,d,e;b=A8B(a.x);c=a.bO;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BO(b,C(230));if(d)BO(b,C(231));if(e)BO(b,C(232));return K(b);}
var OA=G(L9);
function AB6(){var a=this;B.call(a);a.dE=null;a.fy=0;}
var Bbm=null;function AJz(a){var b=new AB6();AJ0(b,a);return b;}
function AJ0(a,b){a.fy=0;a.dE=b;}
function RS(a,b){var c;if(b.ff)return b;b=B$(b.by);while(true){if(!Cc(b))return null;c=RS(a,Cd(b));if(c!==null)break;}return c;}
function Zi(a,b,c){var d,e,f,g;d=Or(a,a.dE,b);if(d===null)return;b=c.cC;e=b===null?Bbn:b.c7;f=c.by;c=a.dE;if(d===c){if(c.cC===null)c.cC=b;b=new ACm;b.AL=a;FW(f,b);b=new ACl;b.wD=a;e.fM(b);b=a.dE;b.by=f;b.cC.c7=e;b.ff=0;return;}if(!EY(f)){c=d.h2;if(c!==null){b=new ZL;b.sz=c;FW(f,b);g=LW(c.by,d);if(g==(-1))G9(c.by,f);else{E5(c.by,g);ALs(c.by,g,f);}}}b=d.cC;if(b!==null){b=b.hX;c=new T4;c.t5=b;e.fM(c);g=LW(b.c7,d.cC);if(g==(-1))G9(b.c7,e);else{b.c7.na(g);b.c7.v1(g,e);}}}
function Or(a,b,c){var d,e,f,g;d=b.b9;if(d.ca==c.ca&&d.b$==c.b$?1:0){d=B$(b.by);while(Cc(d)){e=Or(a,Cd(d),c);if(e!==null)return e;}return b;}b=B$(b.by);while(true){if(!Cc(b))return null;d=Cd(b);f=c.ca;g=c.b$;e=d.b9;if(e.ca<=f&&g<=e.b$?1:0){e=Or(a,d,c);if(e!==null)break;}}return e;}
function ADA(a,b,c){BA(c,b.b9);b=B$(b.by);while(Cc(b)){ADA(a,Cd(b),c);}}
function ZO(a,b,c){a.fy=0;Ma(a,a.dE,b,c);}
function Ma(a,b,c,d){var e;if(Dk(b)<c)return;a:{if(Du(b)>c){MI(b,d);H5(b,d);b=B$(b.by);while(Cc(b)){Ma(a,Cd(b),c,d);}}else{if(!NA(b,c)){if(a.fy)break a;if(Dk(b)!=c)break a;}H5(b,d);if(Du(b)==c&&a.fy)MI(b,d);e=B$(b.by);while(Cc(e)){Ma(a,Cd(e),c,d);}if(!a.fy){b.ff=1;a.fy=1;}}}}
function W6(a,b,c){a.fy=0;NE(a,a.dE,b,c);}
function NE(a,b,c,d){var e,f,g,h,i,j;if(Dk(b)<c)return;e=Du(b);f=c+d|0;if(e>f){e= -d|0;MI(b,e);H5(b,e);g=B$(b.by);while(Cc(g)){NE(a,Cd(g),c,d);}b.by=YB(a,b.by);}else{h=b.b9;if(c<=h.ca&&h.b$<=f?1:0){if(b===a.dE){MR(b,0);ND(b,0);h=b.cC;if(h!==null)h.c7.jW();}else{MR(b,(-1));ND(b,(-1));h=b.cC;if(h!==null){AGn(h);b.cC=null;}}Je(b.by);}else{e=NA(b,c);f=NA(b,f);if(e&&f)H5(b, -d|0);else if(e)ND(b,c);else{if(!f)return;MR(b,c);H5(b, -d|0);}h=B$(b.by);while(Cc(h)){NE(a,Cd(h),c,d);}h=MG(b.by);g=Z7(0);i=new Tw;j=new AEH;j.H0
=i;j.lo=g;while(OU(h,j)){}if(!j.lo.pu&&!a.fy)b.ff=1;else a.fy=1;b.by=YB(a,b.by);}}}
function YB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BP();d=null;e=Bbm;f=b.cx;g=b.q;if(e===null)e=A_Y;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}LO(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.cc=b.cc+1|0;b=B$(b);while(Cc(b)){m=Cd(b);if(Du(m)==Dk(m))continue;if(!m.ff){if(d!==null){BA(c,d);d=null;}BA(c,m);}else if(d===null)d=m;else{n=AXD(LC(Bf(Du(d),Du(m)),Be(Dk(d),Dk(m)),d.b9.go),d.h2,d.cC);n.ff=1;d=m.cC;if(d===null)d=n;else{AGn(d);d=n;}}}if(d!==null)BA(c,d);return c;}
function AFN(a,b,c,d){var e,f,g,h,i;if((Dk(c)-Du(c)|0)<43)e=Cy(d,Du(c),Dk(c));else{e=Cy(d,Du(c),Du(c)+20|0);f=Cy(d,Dk(c)-20|0,Dk(c));g=new J;L(g);H(H(H(g,e),C(177)),f);e=K(g);}e=AEE(e,C(184),C(233));f=Bh();g=new J;L(g);h=V(g,b);Bq(h,32);h=H(h,c);Bq(h,9);H(h,e);Bc(f,K(g));c=B$(c.by);i=b+1|0;while(Cc(c)){AFN(a,i,Cd(c),d);}}
function AJ6(){Bbm=new WT;}
function AOd(){var a=this;B.call(a);a.ca=0;a.b$=0;a.go=0;}
function LC(a,b,c){var d=new AOd();A1s(d,a,b,c);return d;}
function A1s(a,b,c,d){a.ca=b;a.b$=c;a.go=d;}
function AWM(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.ca==c.ca&&a.b$==c.b$&&a.go==c.go?1:0;}return 0;}
function AK3(a){var b,c,d,e;b=a.ca;c=a.b$;d=a.go;e=new J;L(e);Bq(e,40);Bq(V(H(V(H(V(e,b),C(40)),c),C(40)),d),41);return K(e);}
function A0C(a,b){var c;b=b;c=BR(a.ca,b.ca);if(!c)c=BR(b.b$,a.b$);return c;}
var WT=G();
function ATK(a,b,c){var d;b=b;c=c;b=b.b9;c=c.b9;d=BR(b.ca,c.ca);if(!d)d=BR(c.b$,b.b$);return d;}
function ABv(){var a=this;B.call(a);a.b9=null;a.h2=null;a.by=null;a.cC=null;a.ff=0;}
function AXD(a,b,c){var d=new ABv();AJx(d,a,b,c);return d;}
function AJx(a,b,c,d){a.ff=0;a.b9=b;a.h2=c;a.by=BP();a.cC=d;}
function AKo(b){return ABF(b,null);}
function ABF(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bd(b);e=Bd(b);f=Bd(b);g=Bd(b);h=Bd(b);i=LC(d,e,f);j=new ABv;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AJx(j,i,null,l);m=0;while(m<g){l=ABF(b,c);l.h2=j;BA(j.by,l);m=m+1|0;}return j;}
function AHc(b,c,d){var e,f,g,h,i;a:{e=b.b9;f=b.by;g=e.ca;h=e.b$;i=e.go;Bv(c,g);HD(c,h,i);Bv(c,f.q);if(d!==null){e=b.cC;if(e!==null&&AE_(d,e)){g=(Pi(d,b.cC)).bv;break a;}}g=(-1);}Bv(c,g);b=B$(f);while(Cc(b)){AHc(Cd(b),c,d);}}
function Du(a){return a.b9.ca;}
function Dk(a){return a.b9.b$;}
function MR(a,b){a.b9.ca=b;}
function ND(a,b){a.b9.b$=b;}
function MI(a,b){var c;c=a.b9;c.ca=c.ca+b|0;}
function H5(a,b){var c;c=a.b9;c.b$=c.b$+b|0;}
function NA(a,b){return Du(a)<=b&&b<Dk(a)?1:0;}
function APc(a){var b,c,d;b=AK3(a.b9);c=a.ff;d=new J;L(d);Kd(H(H(d,b),C(40)),c);return K(d);}
function AP3(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BS(a.b9,c.b9)&&BS(a.by,c.by)?1:0;}return 0;}
function Hy(){var a=this;B.call(a);a.cU=null;a.c3=null;}
function Bbo(a,b){var c=new Hy();XT(c,a,b);return c;}
function XT(a,b,c){a.cU=b;a.c3=c;}
function A05(a,b){var c,d;if(a===b)return 1;if(!E6(b,J6))return 0;a:{b:{c:{d:{c=b;b=a.cU;if(b!==null){if(!b.bU(c.cU))break c;else break d;}if(c.cU!==null)break c;}b=a.c3;if(b!==null){if(!b.bU(c.c3))break c;else break b;}if(c.c3===null)break b;}d=0;break a;}d=1;}return d;}
function AQH(a){var b,c,d;b=a.cU;c=a.c3;d=new J;L(d);b=H(d,b);Bq(b,61);H(b,c);return K(d);}
function IA(){var a=this;Hy.call(a);a.mT=0;a.dj=null;}
var AH3=G();
function Vd(){var a=this;B.call(a);a.sC=null;a.vP=null;a.CN=null;}
var PX=G();
function AYq(a,b){return b.text();}
function PZ(){var a=this;B.call(a);a.vb=null;a.va=null;}
function AXK(a,b){var c,d,e,f;c=a.vb;d=a.va;e=b.length;f=new Qs;f.CR=b;c.g(ARp((ANy(e,f)).k0,AEu(d)));}
var PY=G();
function AZU(a,b){AKe(b);}
function JD(){var a=this;B.call(a);a.bz=null;a.HK=null;a.ce=null;a.kt=null;a.l0=null;a.d7=null;a.f3=null;a.DP=null;a.qT=null;a.p0=null;}
function Bbp(a,b,c,d,e,f){var g=new JD();Mv(g,a,b,c,d,e,f);return g;}
function Jj(){var b,c,d,e,f,g,h,i,j;b=new JD;c=new KT;d=new H0;Gb();LF(d,Bbq);Ng(c,d,B0(Bbb),B0(Bbr),B0(Bbs),B0(Bbb),B0(Bbt),B0(Bbu),B0(Bbv),B0(Bbw),B0(Bbx),B0(Bby));e=AMs(S(C(234)));f=(AMy()).data;g=f.length;h=P(K9,g);i=h.data;j=0;while(j<g){i[j]=f[j].o9;j=j+1|0;}Mv(b,c,e,h,ANe(S(C(235)),S(C(236)),S(C(237)),S(C(238))),FI(),AGX(S(C(239)),S(C(240)),S(C(241)),S(C(242))));return b;}
function FK(){var b,c,d,e,f,g,h,i,j;b=new JD;c=new KT;d=new H0;ARx();LF(d,Bbz);Ng(c,d,B0(BbA),B0(BbB),B0(BbC),B0(BbA),B0(BbD),B0(BbE),B0(BbF),B0(BbG),B0(BbH),B0(BbI));e=AMs(S(C(243)));f=(AIk()).data;g=f.length;h=P(K9,g);i=h.data;j=0;while(j<g){i[j]=f[j].lX;j=j+1|0;}Mv(b,c,e,h,ANe(S(C(244)),S(C(245)),S(C(246)),S(C(247))),ALT(),AGX(S(C(239)),S(C(240)),S(C(241)),S(C(248))));return b;}
function Mv(a,b,c,d,e,f,g){var h;h=d.data;a.f3=DC(C(176),17.0);a.DP=DC(C(165),15.0);a.qT=DC(C(176),15.0);a.p0=DC(C(13),15.0);a.bz=b;a.HK=c;a.kt=d;a.l0=e;if(h.length>=15){a.ce=f;a.d7=g;return;}b=new BU;Z(b);N(b);}
function YT(a,b){if(b===null)b=a.bz.eI;return b;}
function Q3(){var a=this;B8.call(a);a.O=null;a.U=null;a.jm=null;a.j6=0;a.lU=null;a.nr=null;a.Bs=null;a.ok=null;a.gc=null;}
function X7(a,b){var c,d;if(a.O===b)a.j6=a.j6|1;if(a.U===b)a.j6=a.j6|2;if((a.j6&3)==3){Bc(Bh(),C(131));b=a.O.d.i;c=a.U.d.i;d=new Xk;d.tV=a;Zk(b,c,d,a.y.bq);}}
function A7J(a,b,c){if(Cz(a.n,a.O))return GK(a.O,b,c);if(!Cz(a.n,a.U))return 0;return GK(a.U,b,c);}
function XL(a,b){var c;c=new UA;c.tL=b;return c;}
function AWc(a,b){var c;c=LD(a,b);return HG(a.O,b)|HG(a.U,b)|c;}
function A3K(a){GW(a);Gj(a.O);Gj(a.U);SS(a.gc);Iv(a.s);}
function ABN(a){return Eq(0);}
function AWB(a){GU(a.O);GU(a.U);}
function A3E(a){Hh(a.O);Hh(a.U);}
function AXg(a,b){Go(a.O,b);Go(a.U,b);}
function A4E(a,b){I5(a.n,b);}
function AQE(a,b){if(F$(a.s,b)){HR(a.O);HR(a.U);}}
function ATn(a,b,c){var d,e,f,g,h,i;Gp(a,b,c);d=new Bg;e=Ci(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;LK(f,g-h|0,b.b);H3(a.O,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;H3(a.U,d,f,c);X(a.gc.j,f.a,d.b);X(a.gc.k,d.a-f.a|0,f.b);}
function APe(a,b){BE(b);Fw(a.jm,b);Ed(a.O,b);Ed(a.U,b);a.gc.hI=b;}
function A41(a,b){var c,d;c=BG(a.O,b.h)&&Kb(a.O,b)?1:0;d=BG(a.U,b.h)&&Kb(a.U,b)?1:0;return !c&&!d?0:1;}
function A2J(a,b,c,d){var e,f;e=BG(a.O,b.h)&&I9(a.O,b,c,d)?1:0;f=BG(a.U,b.h)&&I9(a.U,b,c,d)?1:0;return !e&&!f?0:1;}
function AUm(a,b,c){var d,e,f,g,h,i,j,k;d=BG(a.O,b.h);e=BG(a.U,b.h);f=a.n;g=f.b2;h=g!==null?0:1;i=a.O;j=g!==i?0:1;k=g!==a.U?0:1;if(d&&!(!h&&!k))Cn(f,i);if(e&&!(!h&&!j))Cn(a.n,a.U);if(d){i=J7(a.O,b,c);if(i!==null)return i;}return !e?null:J7(a.U,b,c);}
function A5z(a,b,c){var d,e,f,g;d=BG(a.O,b.h);e=BG(a.U,b.h);f=d&&JI(a.O,b,c)?1:0;g=e&&JI(a.U,b,c)?1:0;return !f&&!g?0:1;}
function AVM(a,b,c,d){var e,f,g,h;e=BG(a.O,b.h);f=BG(a.U,b.h);g=e&&HP(a.O,b,c,d)?1:0;h=f&&HP(a.U,b,c,d)?1:0;return !g&&!h?0:1;}
function A3b(a){return Cz(a.n,a.O)?XL(a,a.O):!Cz(a.n,a.U)?null:XL(a,a.U);}
function Lc(){var a=this;B8.call(a);a.em=null;a.o7=null;}
function A9Z(a){var b=new Lc();AKy(b,a);return b;}
function AKy(a,b){var c,d,e,f;Fx(a,b,0);c=Ho(a.s);a.o7=c;d=Fr(c);a.em=d;Ka(a.n,d);c=b.m.bA;d=new AAw;d.s1=a;Y(c,d);c=b.m.bA;d=new F1;e=new AAu;e.DE=a;Gk(d,b,e);Y(c,d);c=a.em;d=b.m;f=new AED;f.x6=c;Y(d.bX,c);Y(d.fg,f);b=b.m.cf;c=new AAv;c.zA=a;Y(b,c);H6(a);}
function AMh(a,b){var c,d;c=a.em;d=new AD5;d.wz=a;d.wA=b;Fu(c,b,d);}
function A2F(a,b){if(F$(a.s,b))HR(a.em);}
function A6F(a,b){var c;c=LD(a,b);return HG(a.em,b)|c;}
function ASe(a){GW(a);Gj(a.em);Iv(a.s);}
function A7$(a){return Eq(0);}
function AOA(a,b,c){var d;Gp(a,b,c);d=a.em;H3(d,d.j,b,c);}
function A1r(a,b){BE(b);Fw(a.o7,b);Ed(a.em,b);}
function AL4(a,b){if(b.be!=121)return 0;return 1;}
function AHi(a,b){var c,d,e;if(Cz(a.n,a.em)){c=a.o7;b=b.h;d=a.em;e=new ACG;e.Cd=a;Gr(c,b,d,a,d,a,e);}return 1;}
function AKX(){var a=this;CB.call(a);a.AD=null;a.qc=null;a.kX=null;a.eL=null;a.mF=null;a.h4=null;a.e5=null;a.ke=null;a.rD=null;a.jC=null;a.rk=null;a.rl=null;a.qE=null;a.AW=null;a.E7=null;a.ut=0;}
function A9$(a){var b=new AKX();A3D(b,a);return b;}
function A3D(a,b){var c,d,e,f;EC(a,b);c=(Jj()).bz.eI;a.AD=c;a.qc=AN$(c);a.kX=new Bg;a.eL=Lz();a.mF=Lz();a.h4=UK(0,0,3,3);a.e5=IS(0,0,300,300);a.ke=A2l();d=P(BD,4);e=d.data;e[0]=C(189);e[1]=C(190);e[2]=C(208);e[3]=C(207);a.rD=d;a.jC=P(K4,e.length);c=b.m.bX;f=new Vz;f.fY=a;Y(c,f);c=b.m.bA;f=new AAZ;f.Ei=a;Y(c,f);c=b.m.pE;f=new AAY;f.tD=a;Y(c,f);c=b.m.gr;f=new AAX;f.FS=a;Y(c,f);c=b.m.nd;f=new AAW;f.Gv=a;Y(c,f);c=b.m.cf;f=new AAV;f.G2=a;Y(c,f);b=b.m.fg;c=new AAU;c.C0=a;Y(b,c);a.rk=AE3(a,1);a.rl=AE3(a,0);Ty(a,a.eL,
a.rk);Ty(a,a.mF,a.rl);a.qE=AGl(a,0);a.AW=AGl(a,1);Gi(a.e5,a.qE);Gu(a.e5);If(a.e5,DF(169,183,198));FL(a.e5,a.AD);Cv(a.eL.bg,1.0,1.0,1.0,1.0);FL(a.eL,a.e5.bu);BN(a.h4.bu,a.qc);}
function Ty(a,b,c){Gi(b,c);Gu(b);}
function T3(a,b){Jd(D1(),0.5+D1()*0.5,0.5+D1()*0.5,1.0,b.bg);}
function AE3(a,b){var c,d;c=Ei(a.y.V,200,100,b);Ib(c,C(249),11.0);B1(c,C(250),0.0,20.0);KM(c,255,0,0);B1(c,C(250),0.25,40.0);KM(c,0,255,0);B1(c,C(250),0.5,60.0);KM(c,0,0,255);B1(c,C(250),0.75,80.0);d=C4(a.y.V);CU(d,c);ET(c);return d;}
function AGl(a,b){var c,d,e,f;c=Ei(a.y.V,255,100,b);Ib(c,C(176),10.0);d=Bh();e=$rt_str(c.dA.font);f=new J;L(f);H(H(f,C(251)),e);Bc(d,K(f));EF(c,C(252));B1(c,C(252),0.0,20.0);B1(c,C(252),0.25,40.0);B1(c,C(252),0.5,60.0);B1(c,C(252),0.75,80.0);e=C4(a.y.V);CU(e,c);ET(c);return e;}
function AO0(a,b){var c;a.ut=a.ut+1|0;c=b/5.0;Jd(c-(c|0),1.0,1.0,1.0,a.h4.bg);return ADr(a.ke,b);}
function AQZ(a){var b,c,d,e,f,g,h,i;b=a.y.V;E3(b,a.qc);c=a.jC.data;d=c.length;e=0;while(e<d){ABY(c[e],b,0,0);e=e+1|0;}f=a.e5;g=f.w;g.b=(a.kX.b-f.v.b|0)-5|0;g.a=0;Cb(b,0);h=0;while(h<7){f=a.e5;E1(f,b,a.qE,Bb(h,10+((10*f.v.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.e5;f.w.b=(a.kX.b-(f.v.b*2|0)|0)-10|0;h=0;while(h<7){g=a.AW;f=a.e5;f.w.a=Bb(h,10+((10*f.v.a|0)/15|0)|0)+5|0;Us(f,b,g,1);h=h+1|0;}Us(a.eL,b,a.rk,1);Cb(b,1);g=a.mF;f=a.rl;i=g.w;h=i.a;d=i.b;g=g.v;G8(b,b.lG);Hg(b.lG,b.bh,h,d,g,b.df);OO(b.lG,b.bh,f);Gz(b);Cb(b,0);f
=a.E7;if(f!==null)XN(a.h4,b,f,0,0,0.0);AEv(a.ke,b,new Bg);NK(b,C(253));}
function ATs(a,b,c){var d,e,f,g,h,i,j,k;d=Bh();e=new J;L(e);H(H(e,C(254)),b);Bc(d,K(e));e=Bh();f=new J;L(f);Di(H(f,C(255)),c);Bc(e,K(f));g=Ci(30.0,c);h=Ci(10.0,c);i=0;while(true){j=a.jC.data;if(i>=j.length)break;k=1+i|0;j[i]=UK(Bb(h,k)+Bb(g,i)|0,g,g,g);T3(a,a.jC.data[i]);i=k;}X(a.h4.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.eL;X(f.w,((b.a/2|0)-f.v.a|0)-10|0,50);X(a.mF.w,(b.a/2|0)+10|0,50);Ct(a.kX,b);}
function Y0(a,b){var c,d,e,f,g;c=Bh();d=!b.kw?C(256):C(257);e=b.eH;f=b.be;g=b.BX;b=new J;L(b);Kd(H(V(H(H(H(b,d),e),C(258)),f),C(259)),g);Bc(c,K(b));return 0;}
function ADz(){var a=this;CB.call(a);a.G5=null;a.lZ=null;a.jF=null;a.iH=null;a.dN=null;a.en=null;a.n9=null;a.nW=null;a.ki=0;a.jf=null;a.je=null;}
function SA(a,b,c){Gi(b,c);Gu(b);}
function AGF(a,b,c,d,e,f){var g,h;g=Ei(f,c,120,b);Cr(g,e);e=!b?C(260):C(261);h=new J;L(h);H(H(H(h,e),d),C(163));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C4(f);CU(h,g);ET(g);return h;}
function AU4(a,b){return 0;}
function A0s(a){var b,c,d,e,f,g,h,i;b=a.y.V;E3(b,a.lZ);Cb(b,0);c=a.jF;d=c.b;e=a.iH;f=d-e.b|0;g=c.a-e.a|0;Bw(b,0,0,e,a.dN.bu);Bw(b,g,0,a.iH,a.en.bu);Bw(b,0,f,a.iH,a.dN.bg);Bw(b,g,f,a.iH,a.en.bg);c=a.dN;e=c.w;h=e.b;i=((a.jF.b*3|0)/4|0)-(c.v.b/2|0)|0;Jf(c,b,e.a,h,a.jf,0,1);c=a.dN;Jf(c,b,c.w.a,i,a.jf,1,1);c=a.en;Jf(c,b,c.w.a,h,a.je,0,0);e=a.en;Jf(e,b,e.w.a,i,a.je,1,0);NK(b,C(253));}
function A1M(a,b,c){var d,e;Ct(a.jF,b);X(a.iH,b.a/2|0,b.b/2|0);d=a.jF.b/4|0;e=a.dN;d=d-(e.v.b/2|0)|0;X(e.w,(b.a/4|0)-(a.ki/2|0)|0,d);X(a.en.w,((b.a*3|0)/4|0)-(a.ki/2|0)|0,d);}
function Zy(){var a=this;B8.call(a);a.Aq=null;a.fD=null;a.d5=null;a.pG=null;}
function AST(a,b,c){var d;d=FM(a.n,a.pG);Km(a.fD,d,a.n);Km(a.d5,d,a.n);}
function Tb(b){return JJ(b,WM());}
function JJ(b,c){var d;d=UI();Pb(d,Oa(b,KQ(c,25)),!b?null:JJ(b-1|0,c));Pb(d,Oa(b,KQ(c,20)),!b?null:JJ(b-1|0,c));Pb(d,Oa(b,KQ(c,15)),!b?null:JJ(b-1|0,c));Pb(d,Oa(b,KQ(c,10)),!b?null:JJ(b-1|0,c));return JC(d);}
function Oa(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(30)),c);c=K(d);}return c;}
function Pb(b,c,d){if(d!==null)IK(b,c,d);else{d=new Xh;d.tn=c;EL(b,c,d);}}
function ARA(a,b,c){var d,e;Gp(a,b,c);b=a.n.bM;d=EV(a.fD);e=EV(a.d5);N7(a.fD,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);N7(a.d5,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function A1l(a){var b,c,d,e,f,g,h,i;GW(a);b=a.y.V;Cb(b,1);c=a.Aq;d=a.n;e=d.bM;X(c.oY,e.a,Ci(2.0,d.cd));X(c.po,Ci(2.0,d.cd),e.b);Gb();f=Bbx;g=d.bS;h=e.b/2|0;i=c.oY;Bw(g,0,h-(i.b/2|0)|0,i,f);g=d.bS;h=e.a/2|0;c=c.po;Bw(g,h-(c.a/2|0)|0,0,c,f);MZ(a.fD,a.n);MZ(a.d5,a.n);Iv(a.s);Cb(b,0);}
function ATu(a,b){var c,d;c=OF(a.fD,b.h,a.n.de);d=OF(a.d5,b.h,a.n.de);return !c&&!d?0:1;}
function APH(a,b,c,d){var e,f;e=O5(a.fD,b.h,c,d);f=O5(a.d5,b.h,c,d);return !e&&!f?0:1;}
function ACY(){B8.call(this);this.lm=null;}
function AQO(a,b,c){if(b===0.0)AA8(a);}
function AA8(a){var b,c,d,e,f,g,h,i;b=a.lm;if(b!==null){I$(a.s,b);KE(b);}b=(Jj()).ce;c=A_j(a.n,new W3);d=DC(C(165),14.0);e=ASR();f=0;while(f<300){g=Dr(f);h=new Ui;h.Dj=C(262);h.Dg=g;h.Dh=C(263);X_(e,C(262),g,C(263),h);f=f+1|0;}Y7(c,AFw(e));X5(c,b,d);g=AG2(a.n);i=Hj(c,a.n);JZ(i,b.nZ,b.pX);LZ(g,i);Ey(g,b);CZ(g,C(153));a.lm=g;DZ(a.s,g);RK(a);}
function APX(a,b,c){Gp(a,b,c);RK(a);}
function RK(a){var b,c,d;b=a.n.bM;Eh(a.lm,BK((b.a*2|0)/10|0,(b.b*4|0)/10|0),BK((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.lm;b=AKJ(c.ba.k);d=new J;L(d);H(H(d,C(264)),b);CZ(c,K(d));}
function YW(){var a=this;It.call(a);a.ne=null;a.iy=null;a.gW=null;a.kZ=null;a.ti=null;a.kU=null;a.iK=null;a.ih=null;a.mt=0;a.ix=0;}
function QH(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.iy.q>0){d=D1();e=a.iy;f=d*(e.q-1|0)|0;e=E5(e,f);E5(a.gW,f);f=a.ix;g=e.v;a.ix=f-Bb(g.a,g.b)|0;JG(a.ne,e.dX);}c=c+1|0;}}
function MP(a,b){var c,d,e,f,g,h,i,j;c=K2(a.n);Cr(c,a.kZ);d=0;while(d<b){e=KQ(a.kU,1+(D1()*19.0|0)|0);f=Lz();g=f.dX;h=a.ne;BE(c);i=new So;i.vX=c;BN(g,La(h,e,i));(Xg(D1(),1.0,1.0,f.bu)).bH=0.5;h=f.w;g=f.dX;X(h,g.bt|0,g.bx|0);h=f.v;g=f.dX;X(h,g.bk|0,g.bH|0);BA(a.gW,e);BA(a.iy,f);j=a.ix;h=f.v;a.ix=j+Bb(h.a,h.b)|0;d=d+1|0;}a.ih=Ny(a.ne);}
function A6a(a){var b,c,d,e,f,g,h,i;GW(a);b=a.y.V;Cb(b,1);c=a.n.bS;if(a.gW.q){d=a.ih;d=Ip(c,d.a,d.b);Cr(d,a.kZ);e=a.kZ.eR;Bw(c,0,0,a.ih,a.ti);f=0;while(f<a.gW.q){g=BL(a.iy,f);h=BL(a.gW,f);g=g.dX;B1(d,h,g.bt,g.bx+e);f=f+1|0;}g=a.iK;if(!(g!==null&&BW(g)==a.ih.a&&CX(a.iK)==a.ih.b))a.iK=BV(a.iK,C4(c));CU(a.iK,d);ET(d);i=0;while(i<a.gW.q){d=BL(a.iy,i);If(d,Cs(0));E1(d,c,a.iK,0,0);i=i+1|0;}}Cb(b,0);}
function AOS(a,b){var c,d;if(a.mt){c=a.ih;d=Bf(Bb(c.a,c.b),2211840);if(a.ix/d<=0.7)MP(a,Ej(a.kU,5));else QH(a,Ej(a.kU,5));}return a.mt;}
function Up(){var a=this;CB.call(a);a.e7=null;a.iA=null;a.jD=null;a.p3=null;a.fx=0;a.wr=0;a.tj=null;a.nt=0;a.y1=0;a.zk=null;a.Cl=null;}
function AOy(a){var b,c;b=a.fx;c=new J;L(c);V(H(c,C(265)),b);$rt_globals.console.info($rt_ustr(K(c)));E3(a.e7,a.tj);K6(a.jD,a.fx,0,H$(a),5000,a.p3.a,20);Cb(a.e7,1);Xq(a.jD,a.e7);Cb(a.e7,0);b=a.fx;c=new J;L(c);V(H(c,C(265)),b);$rt_globals.console.info($rt_ustr(K(c)));AD6(a.iA,a.fx/a.nt|0,a.e7);ADj(a.iA,a.fx,H$(a),a.Cl,a.e7);}
function AY5(a,b,c){a.p3=b;TT(a.iA,BK(0,0),50,H$(a),c);Uz(a.iA,a.e7,0,H$(a));}
function WE(a){return 5000-H$(a)|0;}
function H$(a){return Bf(a.wr,a.p3.b);}
function LT(){var a=this;B8.call(a);a.z0=null;a.mb=0;a.jk=0;a.nn=null;a.lk=null;a.oP=null;}
var Bba=null;function TN(a,b){var c,d,e,f,g,h,i,j;c=a.s;d=a.z0;e=d.ot;f=P(Bt,3);g=f.data;h=new Bt;i=new Rw;i.ua=a;B5(h,i,C(266));g[0]=h;j=new Bt;h=new Ry;h.wK=a;B5(j,h,C(267));g[1]=j;j=new Bt;h=new Rx;h.vL=a;B5(j,h,C(268));g[2]=j;E7(c,d,e,b,CN(f));return 1;}
function ANf(){Bba=DL([(-738792947),60747247,(-1998097526),1828170894,(-887988090),947829193,(-1999687713),(-701152478),(-2000527343),(-1881496555),540327628,290384918,566113323,(-1809286035),815515802,(-530444145),(-436772899),PU(Dh(0))]);}
var Zd=G(B8);
function HT(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.y.bq;f=new Sn;f.FE=a;f.vB=b;g=P(B,1);h=g.data;i=BI(1);i.data[0]=b;h[0]=i;CI(e,f,C(269),g);d=d+1|0;}}
function ANz(b){var c;c=b.data;ALb(c[0],c[1],Z3(Js(b,2)));}
function ALb(b,c,d){var e,f,g,h,i;e=d.data;f=Bh();g=new J;L(g);H(H(H(H(g,C(270)),b),C(271)),c);Bc(f,K(g));b=Bh();h=e.length;i=PU(d);c=new J;L(c);V(H(V(H(c,C(272)),h),C(273)),i);Bc(b,K(c));}
function Es(){var a=this;CB.call(a);a.q_=null;a.hA=null;a.rW=0.0;}
function BbJ(a){var b=new Es();Ku(b,a);return b;}
function Ku(a,b){EC(a,b);a.q_=ALH(0,0,64);a.hA=new Bg;EJ(b.bq,G6(BF(a)));}
function ACo(a){E3(a.y.V,a.q_);}
function Uj(a,b,c){Ct(a.hA,b);a.rW=c;}
function Yx(){var a=this;Es.call(a);a.fv=null;a.hl=null;a.oL=null;a.C3=null;a.rw=null;}
function ASt(a,b){b=b/5.0;Jd(b-(b|0),1.0,1.0,1.0,a.hl.bg);return 0;}
function A0_(a){ACo(a);E1(a.fv,a.y.V,a.C3,0,0);XN(a.hl,a.y.V,a.oL,0,0,0.0);NK(a.y.V,C(253));}
function A74(a,b,c){var d,e,f;Uj(a,b,c);X(a.hl.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.fv;e=d.w;f=b.a;d=d.v;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Un(){var a=this;Es.call(a);a.hC=null;a.sa=null;a.nq=null;a.lg=null;a.ky=null;}
function A8J(a){var b,c,d,e,f,g;ACo(a);b=a.y.V;c=a.lg;ME(b,c.a,c.b,a.ky);b=a.hC;c=a.sa;d=a.hA;e=a.y.V;f=0;while(true){g=0;while(true){E1(b,e,c,g,f);g=g+BW(c)|0;if(g>=d.a)break;}f=f+CX(c)|0;if(f>=d.b)break;}GL(a.y.V);}
function ASa(a,b,c){Uj(a,b,c);X(a.ky,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ACJ(){var a=this;CB.call(a);a.fd=null;a.pO=null;a.ho=null;a.cs=null;a.fL=0;a.i_=null;a.ga=0;a.F7=20;a.HN=11;a.Gs=220;a.m1=null;a.Hf=5000;a.iV=0;a.hv=null;}
function AXN(a){var b,c,d,e,f,g,h;b=a.i_;c=a.ga;d=a.m1;K6(b,c,0,d.b,5000,d.a,20);Cb(a.fd,1);Xq(a.i_,a.fd);if(a.cs===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.pO,Dr(e),0.0,c);}b=C4(a.fd);a.cs=b;CU(b,a.pO);}if(a.ga<=a.fL)while(true){f=a.fL;if(f<=a.ga)break;a.fL=f-20|0;b=a.ho;g=a.iV-1|0;a.iV=g;B1(b,Dr(g),0.0,20.0);Kt(a.cs,a.ho,0,a.fL%220|0);Fa(a.ho);}else while(a.fL<(a.ga-20|0)){b=a.ho;g=a.iV+1|0;a.iV=g;B1(b,Dr((g+11|0)-1|0),0.0,20.0);Kt(a.cs,a.ho,0,a.fL%220|0);Fa(a.ho);a.fL=a.fL+20|0;}b=IS(0,0,BW(a.cs),CX(a.cs));Jg(b,
0,0,BW(a.cs),CX(a.cs));If(b,a.hv.data[0]);FL(b,a.hv.data[1]);E1(b,a.fd,a.cs,400,0);g=a.ga%220|0;f=Bf(CX(a.cs)-g|0,200);d=IS(0,0,BW(a.cs),f);Jg(d,0,g,BW(a.cs),f);If(d,a.hv.data[0]);FL(d,a.hv.data[1]);E1(d,a.fd,a.cs,0,0);h=IS(0,f,BW(a.cs),(CX(a.cs)-f|0)-20|0);Jg(h,0,0,BW(a.cs),(CX(a.cs)-f|0)-20|0);If(h,a.hv.data[1]);FL(h,a.hv.data[0]);E1(h,a.fd,a.cs,0,0);}
function A1n(a,b,c){Ct(a.m1,b);}
function A5R(a,b){return 0;}
function ACg(a){return 5000-a.m1.b|0;}
function K7(){Es.call(this);this.eD=0;}
function ABX(a){var b,c;b=a.y.bq;c=new V$;c.zh=a;S6(b,c,YA(a));}
function RJ(a){var b,c,d,e;b=a.eD+1|0;a.eD=b;c=G6(F(K7));d=new J;L(d);H(H(V(H(d,C(274)),b),C(30)),c);e=K(d);c=a.y.bq;d=new XI;d.zt=e;Ve(c,e,d,YA(a));}
function YA(a){var b;b=new AA3;b.DX=a;return b;}
function ATg(a,b,c,d){a:{switch(c){case 0:break;case 2:RJ(a);break a;default:break a;}ABX(a);}return 1;}
function T6(){var a=this;Es.call(a);a.vQ=null;a.g5=null;a.ml=null;a.qx=null;a.xn=null;}
function AYA(a){var b,c,d,e,f,g,h,i;if(a.ml===null){b=a.y.V;c=a.xn;d=I8(b,c.iI,Ci(c.hB,a.rW));Cr(b.cv,d);e=C6(EF(b.cv,C(275)));f=Bh();g=d.p$;c=new J;L(c);Di(H(c,C(276)),g);Bc(f,K(c));h=N6(d,1.1799999475479126);c=Bh();i=new J;L(i);V(H(V(H(i,C(277)),e),C(181)),h);Bc(c,K(i));c=Ip(b,e,h);a.qx=c;Cr(c,d);B1(a.qx,C(275),0.0,d.eR);b=C4(b);a.ml=b;CU(b,a.qx);Gi(a.g5,a.ml);Gu(a.g5);b=a.g5.bu;Gb();BN(b,Bbb);BN(a.g5.bg,BbK);}b=a.y.V;E3(b,a.vQ);c=a.g5;i=c.w;f=a.hA;e=f.a;c=c.v;X(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);E1(a.g5,b,
a.ml,0,0);}
function HH(){var a=this;CB.call(a);a.wR=null;a.cA=null;a.eB=null;a.dP=null;a.fS=null;a.fc=null;}
function PF(a,b){var c,d;EC(a,b);a.wR=Cs(20);a.cA=T2();a.eB=new Bg;a.dP=new Bg;a.fS=new Bg;a.fc=new Bg;c=b.m.bA;d=new AEC;d.FW=a;Y(c,d);Y(b.m.bX,a);b=a.cA.bu;Gb();BN(b,Bbb);BN(a.cA.bg,BbK);}
function AHV(a){var b,c,d;b=a.y.V;E3(b,a.wR);c=a.cA;d=c.w;Bw(b,d.a,d.b,c.v,c.bu);Cb(b,1);c=a.cA;d=c.w;AGO(b,d.a,d.b,c.v,a.eB,a.dP,a.fS,a.fc,c.bg);Cb(b,0);}
function A3A(a,b){return 0;}
var U1=G(HH);
function A5B(a,b,c){var d,e,f;d=a.cA;e=d.w;f=b.a;d=d.v;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);X(a.eB,0,0);X(a.dP,Bf(b.a,b.b),Bf(b.a,b.b));b=a.fS;d=a.eB;X(b,d.a,d.b+20|0);b=a.fc;d=a.dP;X(b,d.a,d.b+40|0);}
function A6C(a,b){var c,d,e;Ct(a.eB,b.h);b=a.dP;c=a.cA;d=c.w;e=d.a;c=c.v;X(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fS;c=a.eB;X(b,c.a,c.b+20|0);b=a.fc;c=a.dP;X(b,c.a,c.b+40|0);return 0;}
function U0(){var a=this;HH.call(a);a.gC=null;a.g6=null;}
function A8k(a,b){var c;c=a.dP;b=b.h;c.b=b.b-50|0;a.fc.b=b.b+100|0;return 1;}
function AQJ(a){var b,c,d,e,f,g,h;b=Be(a.eB.a,a.fS.a);c=Bf(a.dP.a,a.fc.a);d=Bf(a.eB.b,a.dP.b)-50|0;e=Be(a.fS.b,a.fc.b)+50|0;HV(a.cA,b,d,c-b|0,e-d|0);AHV(a);f=a.cA.w.a-10|0;ACL(a,a.y.V,10,f,a.eB,a.fS);g=a.cA;h=g.w.a+g.v.a|0;ACL(a,a.y.V,h,f,a.dP,a.fc);}
function ACL(a,b,c,d,e,f){var g;X(a.gC,c,a.cA.w.b);X(a.g6,d,e.b-a.cA.w.b|0);g=a.gC;Bw(b,g.a,g.b,a.g6,a.cA.bu);X(a.gC,c,e.b);X(a.g6,d,f.b-e.b|0);e=a.gC;Bw(b,e.a,e.b,a.g6,a.cA.bg);X(a.gC,c,f.b);e=a.g6;g=a.cA;X(e,d,(g.w.b+g.v.b|0)-f.b|0);e=a.gC;Bw(b,e.a,e.b,a.g6,a.cA.bu);}
function APm(a,b,c){}
function X2(){var a=this;B8.call(a);a.EE=3;a.xX=null;a.kM=null;a.rv=0;}
function ASS(a,b,c){var d,e;if(b===0.0){DZ(a.s,AAQ(a));d=UC(a,0.5,0,C(278));e=a.n.bM;Eh(DZ(a.s,d),BK(e.a/10|0,e.b/10|0),BK((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function AAQ(a){var b,c,d,e,f,g;b=a.rv+1|0;a.rv=b;c=new J;L(c);V(H(c,C(279)),b);c=UC(a,1.0,1,K(c));d=a.n.bM;e=d.a/10|0;f=e+Ej(a.kM,e)|0;e=d.b/20|0;e=e+Ej(a.kM,e)|0;b=d.a;b=((b*7|0)/10|0)+Ej(a.kM,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+Ej(a.kM,g/10|0)|0;Eh(c,BK(f,e),BK(b,g));return c;}
function UC(a,b,c,d){var e,f,g;e=AG2(a.n);if(d===null)f=new AF8;else{f=new AF$;f.v4=e;f.v5=d;}g=new Ri;MB(g);g.m9=new B3;g.qY=new Bg;g.zW=f;g.tk=b;if(c){d=Hj(g,a.n);JZ(d,BbL,BbM);g=d;}LZ(e,g);Ey(e,FI());ACE(e,a.xX,3.0);d=new AF9;d.rU=a;d.rV=e;U7(e,d);return e;}
function EH(){B8.call(this);this.jh=null;}
function A$B(a){var b=new EH();KS(b,a);return b;}
function KS(a,b){FH(a,b);Y(a.n.di,a);BN(a.dg,Cs(43));}
function A0S(a){return AYV();}
function ATD(a){return 1;}
function AEj(a,b){Ey(a.jh,b);}
function ALv(a,b){var c,d,e;c=a.n.bM;d=!a.qF()?0:AE2(b);e=c.b-d|0;Eh(b,BK(c.a/20|0,d+(e/20|0)|0),BK((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A6j(a,b,c){if(b===0.0){a.jh=A76(a.n,a.j5());AEj(a,FI());if(a.qF())CZ(a.jh,Ig(BF(a)));DZ(a.s,a.jh);a.oW(a.jh);}}
function RF(){var a=this;EH.call(a);a.m2=null;a.gQ=null;}
function AP1(a){var b;b=Fr(a.m2);a.gQ=b;ANv(b);Ka(a.n,a.gQ);return a.gQ;}
function AZu(a){return 0;}
function A8m(a,b){ALv(a,b);H6(a);}
function AWE(a,b){BE(b);Fw(a.m2,b);Ed(a.gQ,b);AEj(a,b.ce);}
function AVY(a,b){F$(a.s,b);}
function Y1(){B.call(this);this.yg=null;}
function A59(a,b){D_(a.yg,null);return 0;}
var PP=G(Lc);
function A0w(a){return Eq(1);}
function Sw(){B8.call(this);this.ny=null;}
function A2a(a,b,c){if(b===0.0)LM(a);}
function LM(a){var b;b=AWP(a.s,a.ny,new Tp);Ld(b);return b;}
function Yy(){var a=this;B8.call(a);a.DD=null;a.HX=null;}
function AQM(a,b,c){var d,e,f,g;d=a.s.F.cd!==0.0?0:1;Gp(a,b,c);if(d){b=new Od;e=a.DD;f=a.s;g=new ZJ;g.F2=a;RN(b,e,f,g);a.HX=b;b=b.g0;b.iw=b.iw|2;Yq(b);}}
function QJ(){var a=this;EH.call(a);a.wQ=null;a.gk=null;}
function ALk(){var b;b=I(JV,[Ef(1,3,4,5,1),Ef(5,6,10,2,2),Ef(12,2,13,3,3),Ef(15,3,17,2,4)]);return A5r(P(Ix,0),P(Ix,0),b);}
function A1H(a){var b,c,d,e;b=ANR(a.n);a.gk=b;O$(b,a.wQ);c=a.gk.c8;BE(c);d=new ADv;d.so=c;b=QI(C(280),4,d);d=a.gk.cV;BE(d);e=new ADw;e.uO=d;c=QI(C(280),4,e);D$(a.gk.c8,b);D$(a.gk.cV,c);OH(a.gk,ALk());return a.gk;}
function Tg(){B8.call(this);this.n$=null;}
function A1p(a,b,c){if(b===0.0)AEd(a);}
function AEd(a){AFx(new Mx,a.s,a.n$,new AFy);}
function ABC(){var a=this;EH.call(a);a.qf=null;a.m6=null;}
function ASf(a){var b,c,d,e,f,g;b=ANR(a.n);a.m6=b;O$(b,a.qf);b=IM(C(281),1);c=new TA;c.vz=a;b.cE=c;DY(b);c=IM(C(282),1);d=new Tz;d.zp=a;c.cE=d;DY(c);e=IM(C(281),1);d=new TC;d.z8=a;e.cE=d;DY(e);f=IM(C(282),1);d=new TB;d.D0=a;f.cE=d;DY(f);d=ANk(C(283),0,I(Db,[b,c]));IE(d);g=ANk(C(284),0,I(Db,[e,f]));IE(g);D$(a.m6.c8,d);D$(a.m6.cV,g);return a.m6;}
function ADh(a){var b,c;b=a.s.F.cq;c=new V1;c.BM=a;GN(b,c);}
function AFW(a){var b,c;b=a.s.F.cq;c=new AAB;c.y8=a;GN(b,c);}
function AGa(a){var b,c;b=a.s.F.cq;c=new Qh;c.x2=a;Fp(b,c);}
function ABk(a){var b,c;b=a.s.F.cq;c=new Qw;c.FM=a;Fp(b,c);}
function Um(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bh();f=Ig(BF(d[c]));g=d[c];h=new J;L(h);H(H(H(H(V(H(h,C(285)),c),C(286)),f),C(30)),g);Bc(e,K(h));c=c+1|0;}}
function AE0(){var a=this;CB.call(a);a.uF=null;a.nM=null;a.fJ=null;a.p2=null;a.nK=0.0;a.hO=null;a.x1=null;a.vh=null;a.zP=null;a.AI=null;a.ty=null;a.rA=null;a.Ez=null;a.yp=null;a.mq=null;}
var BbN=0;function A$a(a){var b=new AE0();AYk(b,a);return b;}
function AYk(a,b){var c,d,e;EC(a,b);a.uF=new B3;a.nM=AGk(1.0,0.0,0.0,1.0);a.fJ=T2();a.p2=new Bg;a.nK=3.1415927410125732;c=AMJ();a.hO=c;a.x1=Im(c,1.25);a.vh=Im(a.hO,1.3333333730697632);a.zP=Im(a.hO,1.5);a.AI=Im(a.hO,1.6666666269302368);a.ty=Im(a.hO,2.0);a.rA=AGk(a.nK/24.0,15.0,3.0,0.5);c=AGk(a.nK/12.0,25.0,3.0,0.5);a.Ez=c;a.yp=DL([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.mq=I(B3,[a.hO,a.x1,a.vh,a.zP,a.AI,a.ty,a.rA,c]);c=b.m.bA;d=new R7;d.HL=a;Y(c,d);Y(b.m.bX,a);b=a.fJ.bg;Gb();BN(b,Bbb);HV(a.fJ,0,0,600,60);e
=NW(0.5,0.375);J3(0.375,e);J3(0.375,J3(3.0,NW(e,3.0)));Im(AMJ(),3.0);}
function A8f(a,b,c){var d,e,f;Ct(a.p2,b);d=a.fJ;e=d.w;f=b.a;d=d.v;X(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function Im(b,c){var d;d=new B3;WR(b,c,d);return d;}
function AMJ(){var b;b=new B3;Mo(b);return b;}
function A2w(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.y.V;E3(b,a.uF);Cb(b,1);c=a.fJ;d=c.w.a;e=c.v.b/2|0;f=0;while(true){g=a.mq.data;if(f>=g.length)break;h=a.yp.data[f];c=g[f];i=Y3(c);j=a.fJ;k=j.w;l=k.a;m=k.b;MX(b,l,m+h|0,j.v,d+i,((m+e|0)+h|0)+i,c,a.nM);f=f+1|0;}if(BbN){c=A93(1,2);n=0;while(n<1000){h=Ej(c,a.mq.data.length);l=Ej(c,a.p2.b-a.fJ.v.b|0);j=a.mq.data[h];i=j.bx;i=i-(i|0)>=0.25?0.0:0.5;k=a.fJ;MX(b,k.w.a,l,k.v,d+i,(e+l|0)+i,j,a.nM);n=n+1|0;}}Cb(b,0);}
function AWq(a,b){return BbN;}
function AAR(){var a=this;EH.call(a);a.kc=null;a.xq=null;}
function A4h(a){var b,c,d,e;a.kc=VA(a.n);b=new U8;b.uC=a;c=QI(C(280),4,b);b=Bh();d=PI(c);e=new J;L(e);V(H(e,C(287)),d);Bc(b,K(e));D$(a.kc,c);KP(a.kc,a.xq);c=a.kc;return Kn(c,Hj(c,a.n));}
function A5K(a,b){var c;c=a.n.bM;Eh(b,BK(c.a/30|0,c.b/10|0),BK((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function Vy(){B8.call(this);this.hG=null;}
function OI(){return Eq(1);}
function ABc(a){RN(new Od,a.hG,a.s,new W$);}
function AYg(a,b,c){if(b===0.0)ABc(a);}
function KT(){var a=this;B.call(a);a.D7=null;a.eI=null;a.wi=null;a.FD=null;a.uh=null;a.lJ=null;a.sI=null;a.x8=null;a.mx=null;a.mr=null;a.g9=null;}
function BbO(a,b,c,d,e,f,g,h,i,j,k){var l=new KT();Ng(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Ng(a,b,c,d,e,f,g,h,i,j,k,l){a.D7=b;a.eI=c;a.wi=d;a.FD=e;a.uh=f;a.lJ=g;a.sI=h;a.x8=i;a.mx=j;a.mr=k;a.g9=l;}
function AIl(){B.call(this);this.Hp=null;}
function AMs(a){var b=new AIl();AZi(b,a);return b;}
function AZi(a,b){a.Hp=b;}
var AHk=G(0);
function AKR(){var a=this;B.call(a);a.qa=null;a.lT=null;a.zl=null;a.rG=null;}
function ANe(a,b,c,d){var e=new AKR();A8r(e,a,b,c,d);return e;}
function A8r(a,b,c,d,e){a.qa=b;a.lT=c;a.zl=d;a.rG=e;}
var AIM=G(0);
function FI(){var b,c,d;b=new JE;c=new JN;A3Y();d=BbP;Pz(c,d,BbQ,BbR,BbS,BbT,d);MF(b,c,AKa(),AKk(S(C(288)),S(C(289)),S(C(290))),AKa(),AKL(1,0.125),BbU,BbV);return b;}
function ALT(){var b,c,d;b=new JE;c=new JN;AZt();d=BbW;Pz(c,d,BbX,BbY,BbZ,Bb0,d);MF(b,c,AJQ(),AKk(S(C(291)),S(C(289)),S(C(290))),AJQ(),AKL(1,0.17499999701976776),Bb1,Bb2);return b;}
function AKa(){var b,c;b=new K5;c=S(C(292));A3Y();LV(b,c,Bb3,Bb4);return b;}
function AJQ(){var b,c;b=new K5;c=S(C(290));AZt();LV(b,c,Bb5,Bb6);return b;}
function AN3(){var b,c;b=new K5;AJI();c=Bb7;AZE();LV(b,c,Bb8,Bb9);return b;}
function AKx(){var a=this;B.call(a);a.Bk=null;a.yf=null;a.wt=null;a.rS=null;}
function AGX(a,b,c,d){var e=new AKx();AZV(e,a,b,c,d);return e;}
function AZV(a,b,c,d,e){a.Bk=b;a.yf=c;a.wt=d;a.rS=e;}
function AGJ(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d7.yf;break a;case 3:if(c!=3){b=b.d7.rS;break a;}b=b.d7.wt;break a;default:b=b.bz.eI;break a;}b=b.d7.Bk;}return b;}
function IG(a,b,c){return AGJ(a,b,0,c);}
var AN6=G();
function APV(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new AAg;c=c.buffer;d.g2=c;d.rr=new $rt_globals.Int8Array(c);d.nA=new $rt_globals.Uint16Array(c);d.Cu=new $rt_globals.Int32Array(c);d.tF=new $rt_globals.Float32Array(c);d.tU=new $rt_globals.Float64Array(c);e=d.g2.byteLength;c=new J;L(c);V(H(c,C(293)),e);C2(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(294)),e);C2(K(c));f=b.callToCpp2();c=new J;L(c);Di(H(c,C(295)),f);C2(K(c));c=P3(d,b.getC8String());g=new J;L(g);H(H(g,C(296)),c);C2(K(g));c
=YF(d,b.getC16String());g=new J;L(g);H(H(g,C(297)),c);C2(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.g2,h,8));c=AJc(i);g=new J;L(g);H(H(g,C(298)),c);C2(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.g2,h,8));c=AWw(j);g=new J;L(g);H(H(g,C(299)),c);C2(K(g));k=AL3(d,b.getCDoubleArray8(),8);l=AYJ(k);c=new J;L(c);H(H(c,C(300)),l);C2(Eu(c));l=AYE(b.getC8String(),C(301),d);c=MU();H(H(c,C(302)),l);C2(Eu(c));l=AT_(b.getC16String(),C(303),
d);c=MU();H(H(c,C(304)),l);C2(Eu(c));c=A49(i,d,b.getCIntArray8(),DL([11,22,33,44,55,66,77,88]));g=MU();H(H(g,C(305)),c);C2(Eu(g));c=AWH(j,d,b.getCFloatArray8(),100,DL([111,222,333,444,555,666,777,888]));g=MU();H(H(g,C(306)),c);C2(Eu(g));b=A6A(k,d,b.getCDoubleArray8(),1000,DL([1111,2222,3333,4444,5555,6666,7777,8888]));c=MU();H(H(c,C(307)),b);C2(Eu(c));}
function AWH(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(308);h=0;i=e;a:{while(h<g){if(C6(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.tF[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(309);}return C(310);}
function A6A(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(308);h=0;i=e;a:{while(h<g){if(Hi(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.tU[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(309);}return C(310);}
function A49(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(308);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Cu[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(309);}return C(310);}
function AYE(b,c,d){var e,f,g,h;e=P3(d,b);if(!Bk(c,e))return C(311);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.rr[h])return C(312);f=f+1|0;}return C(309);}
function AT_(b,c,d){var e,f,g,h;e=YF(d,b);if(!Bk(c,e))return C(311);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.nA[h>>>1|0]&65535))return C(312);f=f+1|0;}return C(309);}
function C2(b){AAe(C(1),b);}
function ATa(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function VE(){B.call(this);this.Dy=null;}
function APq(a,b){X7(a.Dy,b);}
function VF(){B.call(this);this.AU=null;}
function A6L(a,b){X7(a.AU,b);}
function VG(){B.call(this);this.Gz=null;}
function A3f(a,b){return b.be!=121?0:1;}
function VC(){B.call(this);this.wC=null;}
function AUo(a,b){var c,d,e;c=a.wC;d=Cz(c.n,c.O)?c.O:!Cz(c.n,c.U)?null:c.U;if(d!==null){e=new S8;e.zM=c;e.zK=d;e.zL=b;Fu(d,b,e);c.lU=null;c.nr.fF=null;c.gc.dY=null;}}
function VD(){B.call(this);this.uk=null;}
function A7k(a,b){var c,d,e,f,g;c=a.uk;if(Cz(c.n,c.O)){d=c.jm;e=b.h;f=c.O;g=new P8;g.wy=c;Gr(d,e,f,c,c,c,g);}if(Cz(c.n,c.U)){d=c.jm;b=b.h;e=c.U;f=new P7;f.vE=c;Gr(d,b,e,c,c,c,f);}return 1;}
function AAw(){B.call(this);this.s1=null;}
function AXR(a,b){return AL4(a.s1,b);}
function AAu(){B.call(this);this.DE=null;}
function A11(a,b){AMh(a.DE,b);}
function AAv(){B.call(this);this.zA=null;}
function AW1(a,b){return AHi(a.zA,b);}
function AKr(){K4.call(this);this.dX=null;}
function Lz(){var a=new AKr();A7Z(a);return a;}
function IS(a,b,c,d){var e=new AKr();A25(e,a,b,c,d);return e;}
function A7Z(a){AEw(a);a.dX=new B3;}
function A25(a,b,c,d,e){AEw(a);a.dX=new B3;HV(a,b,c,d,e);}
function Gu(a){var b,c;b=a.v;c=a.dX;X(b,c.bk-c.bt|0,c.bH-c.bx|0);}
function Gi(a,b){Jg(a,0,0,BW(b),CX(b));}
function Jg(a,b,c,d,e){Cv(a.dX,b,c,d,e);}
function E1(a,b,c,d,e){var f;f=a.w;DT(b,f.a+d|0,f.b+e|0,a.v,a.dX,c,a.bg,a.bu,0);}
function Us(a,b,c,d){var e;e=a.w;DT(b,e.a,e.b,a.v,a.dX,c,a.bg,a.bu,d);}
function Jf(a,b,c,d,e,f,g){DT(b,c,d,a.v,a.dX,e,!f?a.bg:a.bu,!f?a.bu:a.bg,g);}
function If(a,b){BN(a.bg,b);}
function FL(a,b){BN(a.bu,b);}
function Vz(){B.call(this);this.fY=null;}
function A0t(a,b){var c,d,e,f,g,h;c=b.h;d=c.a;e=a.fY.h4;f=e.v;d=d-f.a|0;g=c.b-f.b|0;X(e.w,d,g);c=a.fY;e=c.y.bq;b=b.h;d=0;a:{while(true){h=c.jC.data;if(d>=h.length)break;if(FE(h[d],b)){b=c.rD.data[d];break a;}d=d+1|0;}b=null;}AB0(e,b);return 1;}
function AOL(a,b,c,d){if(!c&&d==2){b=a.fY;T3(b,b.eL);}return 1;}
function A0l(a,b,c){var d,e;d=Bh();e=new J;L(e);V(H(e,C(313)),c);Bc(d,K(e));if(c)return null;d=b.h;e=!FE(a.fY.eL,d)?null:d;V2(a.fY.ke,d.a,d.b);b=a.fY;AAE(b.ke,NH(b.y.bq));if(e===null)b=Bbg;else{b=new AEJ;b.t7=a;b.t8=e;}return b;}
function AZM(a,b,c){var d;b=Bh();d=new J;L(d);V(H(d,C(314)),c);Bc(b,K(d));return 1;}
function AAZ(){B.call(this);this.Ei=null;}
function A19(a,b){return Y0(a.Ei,b);}
function AAY(){B.call(this);this.tD=null;}
function ARK(a,b){return Y0(a.tD,b);}
function AAX(){B.call(this);this.FS=null;}
function A3d(a,b,c){var d,e;Bc(Bh(),C(315));d=!c?C(316):C(58);e=new J;L(e);H(H(H(e,C(317)),d),C(318));O6(b,K(e));return 1;}
function AAW(){B.call(this);this.Gv=null;}
function AZj(a){Bc(Bh(),C(319));}
function AAV(){B.call(this);this.G2=null;}
function AVa(a,b){Bc(Bh(),C(320));return 1;}
function AAU(){B.call(this);this.C0=null;}
function A69(a,b,c,d){var e,f,g;b=a.C0;e=( -d|0)/10|0;b=b.eL;f=b.v;f.a=f.a+e|0;f.b=f.b+e|0;b=b.w;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function H0(){var a=this;B3.call(a);a.hY=0;a.h1=0;a.hZ=0;a.h0=0;}
function Cs(a){var b=new H0();AYr(b,a);return b;}
function DF(a,b,c){var d=new H0();A1h(d,a,b,c);return d;}
function S(a){var b=new H0();A6n(b,a);return b;}
function Fj(a,b,c,d){var e=new H0();SY(e,a,b,c,d);return e;}
function B0(a){var b=new H0();LF(b,a);return b;}
function AYr(a,b){SY(a,b,b,b,255);}
function A1h(a,b,c,d){SY(a,b,c,d,255);}
function A6n(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hY=K8(Q(b,1))*17|0;a.h1=K8(Q(b,2))*17|0;a.hZ=K8(Q(b,3))*17|0;a.h0=255;}else{a.hY=MD(Q(b,1),Q(b,2));a.h1=MD(Q(b,3),Q(b,4));a.hZ=MD(Q(b,5),Q(b,6));a.h0=M(b)!=9?255:MD(Q(b,7),Q(b,8));}Jk(a.hY,a.h1,a.hZ,a.h0,a);return;}}
function SY(a,b,c,d,e){a.hY=b;a.h1=c;a.hZ=d;a.h0=e;Jk(b,c,d,e,a);}
function LF(a,b){a.hY=b.hY;a.h1=b.h1;a.hZ=b.hZ;a.h0=b.h0;BN(a,b);}
function K8(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function MD(b,c){return (16*K8(b)|0)+K8(c)|0;}
var AJp=G(0);
function Eq(b){return !b?I(BD,[C(165),C(176),C(321)]):I(BD,[C(165),C(176),C(321),C(36)]);}
function Yv(){B.call(this);this.m3=null;}
function ARl(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.m3.dN;e=D1();f=e-0.5+(D1()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+D1()*0.3;h=0.5+D1()*0.5;Jd(e,g,h,1.0,b.bg);Jd(f,g,h,1.0,b.bu);b=a.m3;BN(b.en.bg,b.dN.bg);b=a.m3;BN(b.en.bu,b.dN.bu);}return 1;}
function Yr(){var a=this;B.call(a);a.oY=null;a.po=null;}
function AIN(){var a=this;B.call(a);a.gF=null;a.cH=null;a.hw=null;a.is=null;a.o6=null;a.c2=null;a.ie=null;a.dn=0;a.gI=0;a.pn=0;a.k7=0;a.lj=0;a.il=0;a.lC=null;a.qg=null;a.yn=null;a.oU=null;}
function AMx(){var a=new AIN();AWO(a);return a;}
function AWO(a){a.cH=T2();a.hw=new Bg;a.is=new Bg;a.c2=Bb$;a.k7=(-1);a.lj=1;}
function N_(a,b){O2(a);a.c2=b;}
function Km(a,b,c){a.gF=b;AFb(a,c);O2(a);}
function Ko(a,b){var c;a.o6=b.mj;c=b.qk.q0;BN(a.cH.bg,c);c=b.jU.kl;BN(a.cH.bu,c);a.oU=b.qk;}
function NG(a){a.ie=BV(a.ie,null);X(a.hw,0,0);a.c2=Bb$;a.k7=(-1);ADs(a.cH);}
function AFb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=K2(b);d=b.cd;BE(a.gF);Cr(c,a.gF);e=N6(a.gF,1.25);f=0;a.dn=Ci(2.0,d);a.gI=Ci(3.0,d);a.pn=Ci(12.0,d);g=0;h=a.c2.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=L2(c,l.oH);n=a.pn;n=(n+m|0)+n|0;f=Be(f,n);b=l.fO;b.a=g;b.b=0;b=l.eZ;b.a=n;b.b=e;Cv(l.k1,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.hw;b.a=g;b.b=e;b=a.cH.v;n=a.il;if(!n){m=a.dn;m=(g+m|0)+Bb(m,a.c2.data.length)|0;}else m=(f+(a.dn*2|0)|0)+(a.gI*2|0)|0;b.a=m;if(!n)e=e+(a.dn*2|0)|0;else{n=a.dn;e=(Bb(e+n|0,a.c2.data.length)+n
|0)+(a.gI*2|0)|0;}b.b=e;}
function N7(a,b,c){var d,e,f,g,h,i,j;X(a.cH.w,b,c);d=a.dn+a.gI|0;e=a.c2.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fO;j.a=b+d|0;j.b=c+h|0;if(!a.il){if(!i.eZ.a)AG9();d=d+(i.eZ.a+a.dn|0)|0;}else{if(!i.eZ.b)AG9();h=h+(i.eZ.b+a.dn|0)|0;}g=g+1|0;}}
function AG9(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EV(a){var b,c;b=a.hw;if(b.a&&b.b)return a.cH.v;c=new Bu;Bn(c,C(322));N(c);}
function O2(a){a.lj=1;}
function MZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bS;if(!a.c2.data.length)return;if(a.ie===null)a.ie=C4(c);a:{if(!a.lj){d=a.hw;if(Bb(d.a,d.b))break a;}d=a.hw;if(!Bb(d.a,d.b))AFb(a,b);d=a.hw;e=d.a;f=d.b;if(!Bb(e,f))return;d=Ei(c,e,f,b.cX);Cr(d,a.gF);g=N6(a.gF,0.125);h=a.gF;i=h.eR;g=g+i-(i+h.fa)/16.0;j=a.c2.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.oH,h.k1.bt+a.pn,g);f=f+1|0;}CU(a.ie,d);a.lj=0;ET(d);}if(!L0(a.cH)){d=a.cH;ALM(c,d.v,d.w,d.bu,a.dn,a.is);d=a.cH;h=d.v;k=d.w;d=d.bg;e=a.dn;l=a.is;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;Bw(c,k.a+e|0,k.b+e|0,l,d);if(a.il){d=a.cH;AM7(c,d.v,d.w,0,0,AAi(a.o6,b.cd),a.o6.o_,a.is);}}j=a.c2.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fO;e=h.a;f=h.b;h=d.eZ;k=d.k1;l=a.ie;o=a.oU;DT(c,e,f,h,k,l,o.s5,Xc(o,d.lW),b.cX);n=n+1|0;}b:{if(a.il){j=a.c2.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.is;e=(a.cH.v.a-(a.dn*2|0)|0)-(a.gI*2|0)|0;h=d.eZ;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fO;Bw(c,k.a+h.a|0,k.b,b,Xc(a.oU,d.lW));}p=p+1|0;}}}}
function OF(a,b,c){var d,e,f,g,h,i;d=FE(a.cH,b);e=!d?(-1):Qt(a,b);f=a.k7;if(f!=e){if(f>=0){g=a.c2.data[f];g.lW=0;if(a.yn!==null){h=Bh();i=new J;L(i);H(H(V(H(i,C(323)),f),C(324)),g);Bc(h,K(i));}}if(e>=0){h=a.c2.data[e];g=a.qg;if(g!==null)g.ys(b,e,h);h.lW=1;}a.k7=e;}return d&&Hk(c)?1:0;}
function O5(a,b,c,d){var e,f;e=Qt(a,b);if(e>=0){f=a.c2.data[e];if(!AEz(f))f.nU.e();}return 1;}
function Qt(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c2.data;if(c>=d.length)return (-1);e=d[c];if(GV(b,e.fO,e.eZ))return c;if(a.il){f=e.fO;g=f.a;e=e.eZ;h=e.a;g=g+h|0;i=f.b;f=a.is;f.a=(a.cH.v.a-(a.dn*2|0)|0)-h|0;f.b=e.b;if(AHr(b,g,i,f))break;}c=c+1|0;}return c;}
function AGH(a){a.il=1;}
function ALN(){var a=this;B.call(a);a.iI=null;a.hB=0.0;a.kO=0;a.k3=0;}
function DC(a,b){var c=new ALN();AVq(c,a,b);return c;}
function AVq(a,b,c){a.iI=b;a.hB=c;a.kO=400;a.k3=700;}
function A6g(a,b){if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){b=b;return a.hB===b.hB&&a.kO==b.kO&&a.k3==b.k3&&BS(a.iI,b.iI)?1:0;}return 0;}
function AD3(){B.call(this);this.wd=null;}
function AUa(a,b){var c;c=a.wd;if(b.be==32)NG(c.d5);return 0;}
function ADZ(){B.call(this);this.w_=null;}
function AWJ(a,b){var c,d,e,f;c=a.w_;d=ABa(c.n);H4(d,FI(),c.pG);b=b.h;e=Tb(4);f=new WC;f.FT=c;No(d,b,e,f);Ii(c.s,d);return 1;}
var AD0=G();
function A8Q(a){Bc(Bh(),C(325));}
var AD1=G();
function APy(a){Bc(Bh(),C(326));}
function Bt(){var a=this;B.call(a);a.nU=null;a.k1=null;a.fO=null;a.eZ=null;a.og=null;a.ve=null;a.lW=0;a.oH=null;}
function Y$(a,b){var c=new Bt();B5(c,a,b);return c;}
function A$P(a,b,c,d){var e=new Bt();AMb(e,a,b,c,d);return e;}
function B5(a,b,c){AMb(a,b,c,null,null);}
function AMb(a,b,c,d,e){a.k1=new B3;a.fO=new Bg;a.eZ=new Bg;a.oH=c;a.ve=e;a.nU=b;a.og=d;}
function AEz(a){return a.og===null?0:1;}
function Wf(){B.call(this);this.EU=null;}
function AYC(a,b){return b.kw&&b.be==32?1:0;}
function Wg(){B.call(this);this.Dk=null;}
function APb(a,b){var c,d,e,f,g,h;c=a.Dk;d=ABa(c.n);H4(d,FI(),DC(C(165),25.0));b=b.h;e=P(Bt,1);f=e.data;g=new Bt;h=new AGy;h.DC=c;B5(g,h,C(327));f[0]=g;No(d,b,CN(e),Bb_);Ii(c.s,d);return 1;}
function AJ8(){var a=this;B.call(a);a.q$=0;a.ra=0;}
function WM(){var a=new AJ8();AXE(a);return a;}
function A93(a,b){var c=new AJ8();AOa(c,a,b);return c;}
function AXE(a){AOa(a,ANU(Hr((AJm()))),Hr((AJm()))^(-559038737));}
function AOa(a,b,c){var d;a.q$=b;a.ra=c;d=0;while(d<19){On(a);d=d+1|0;}}
function On(a){var b,c;b=a.q$;c=a.ra;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.q$=c;a.ra=b;return b;}
function ANU(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function ANp(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Ej(a,b){return WO(a)*b|0;}
function WO(a){return 5.9604644775390625E-8*(On(a)&16777215);}
function Sa(a,b){var c,d,e;c=ANp(On(a));d=AWD( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function P6(){B.call(this);this.zF=null;}
function AUT(a,b,c){var d;d=a.zF;if(b===0.0)MP(d,100);}
function P5(){B.call(this);this.xj=null;}
function ASv(a,b){var c,d,e;c=a.xj;d=b.be;if(d==32){c.mt=c.mt?0:1;e=1;}else if(d==13){MP(c,1);e=1;}else if(d!=8)e=0;else{QH(c,1);e=1;}return e;}
var ABU=G(0);
function AKS(b,c){var d;d=new WH;d.zr=b;d.zq=c;return d;}
function AKY(){var a=this;B.call(a);a.h$=null;a.iJ=0;a.mE=0;a.hU=0;}
function ALa(a){var b=new AKY();ARv(b,a);return b;}
function ARv(a,b){a.h$=BP();a.hU=0;a.mE=2048;a.iJ=b;}
function La(a,b,c){var d,e,f,g,h,i;d=c.Bi(b);e=a.mE;if(d>e){c=new Bu;f=new J;L(f);Bq(V(H(V(H(f,C(328)),d),C(329)),e),41);Bn(c,K(f));N(c);}if(!a.iJ){b=new BU;Bn(b,C(330));N(b);}a:{b=new B3;if(d){b:{c=a.h$;if(c.q>0){c=B$(c);g=d;while(true){if(!Cc(c))break b;f=Cd(c);if(f.bk>=g)break;}Cv(b,f.bt,f.bx,g,a.iJ);f.bt=f.bt+g;h=f.bk-g;f.bk=h;if(h===0.0)AJN(a.h$,f);break a;}}g=a.hU;i=d;Cv(b,0.0,g,i,a.iJ);BA(a.h$,AGk(i,a.hU,a.mE-d|0,a.iJ));a.hU=a.hU+a.iJ|0;}}return b;}
function JG(a,b){var c,d,e,f,g,h,i;a:{c=AN$(b);b=a.h$;if(b.q>0){d=B$(b);while(true){if(!Cc(d))break a;e=Cd(d);if(e.bx===c.bx){f=e.bt;g=e.bk;h=f+g;i=c.bt;if(h===i){c.bt=f;c.bk=c.bk+g;ABy(d);}else{h=c.bk;if(i+h===f){c.bk=h+g;ABy(d);}}}}}}BA(a.h$,c);}
function Ny(a){return BK(a.mE,a.hU);}
function YH(){var a=this;B.call(a);a.s4=null;a.my=null;}
function AZw(a,b,c){if(c)return Bbg;return GC(a.my.jD,b.h,a.s4,1);}
function AO8(a,b,c){return 1;}
function A1A(a,b){var c;c=a.my;return GJ(c.jD,b.h,c.zk);}
function ACf(){B.call(this);this.CP=null;}
function AUR(a,b,c,d){var e,f;b=a.CP;e=(Yj(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fx=Bf(Be(0,b.fx+Bb(e,f)|0),WE(b));return 1;}
function RY(){B.call(this);this.uA=null;}
function AUF(a,b){return TN(a.uA,b.h);}
function RX(){B.call(this);this.Cx=null;}
function AYH(a,b,c){var d,e;d=a.Cx;if(b===0.0){e=d.s.F.bM;TN(d,BK(e.a/3|0,e.b/3|0));}}
function S1(){B.call(this);this.zI=null;}
function AYD(a,b){var c,d,e,f,g,h,i,j,k;c=a.zI;d=c.s;e=FI();f=DC(C(165),25.0);g=b.h;h=P(Bt,5);i=h.data;b=new Bt;j=new VM;j.sN=c;B5(b,j,C(331));i[0]=b;b=new Bt;j=new VN;j.tx=c;B5(b,j,C(332));i[1]=b;b=new Bt;j=new VP;j.u8=c;B5(b,j,C(333));i[2]=b;b=new Bt;j=new VQ;j.za=c;B5(b,j,C(334));i[3]=b;b=new Bt;k=new VR;k.zH=c;B5(b,k,C(335));i[4]=b;E7(d,e,f,g,CN(h));return 1;}
function S0(){B.call(this);this.Ci=null;}
function A5V(a,b){var c,d,e;c=a.Ci.y.bq;d=new ZK;e=P(B,1);e.data[0]=b;CI(c,d,C(336),e);}
function AD_(){B.call(this);this.n2=null;}
function A40(a,b){var c,d,e,f,g,h;c=a.n2;d=c.rw;if(d!==null){e=c.fv.w;f=e.a;g=b.h;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.rw=g;}b=b.h;f=b.a;c=c.hl;d=c.v;f=f-d.a|0;h=b.b-d.b|0;X(c.w,f,h);return 1;}
function AYp(a,b,c){var d;if(!c){d=b.h;b=a.n2;if(!FE(b.fv,d))d=null;b.rw=d;}return Bbg;}
var AIV=G();
function AOf(b){var c,d;c=Ip(b,250,64);Ib(c,C(249),25.0);KM(c,187,187,187);B1(c,C(337),0.0,24.0);B1(c,C(337),0.25,56.0);d=C4(b);CU(d,c);ET(c);return d;}
var Do=G(0);
var Bbq=null;var BbK=null;var Bbr=null;var Bbb=null;var Bbt=null;var Bbs=null;var Bbv=null;var Bbu=null;var Bbx=null;var Bbw=null;var Bby=null;function Gb(){Gb=Bl(Do);AYF();}
function AYF(){Bbq=Cs(187);BbK=S(C(338));Bbr=Cs(55);Bbb=Cs(43);Bbt=DF(33,66,131);Bbs=DF(60,63,65);Bbv=S(C(339));Bbu=S(C(340));Bbx=Fj(85,85,85,128);Bbw=Fj(43,43,43,0);Bby=S(C(238));}
function AAx(){var a=this;B.call(a);a.r1=null;a.mO=null;}
function ASI(a,b,c){var d;if(!c){d=GC(a.mO.i_,b.h,a.r1,1);if(d!==null)return d;}return Bbg;}
function AZJ(a,b,c){return 1;}
function ARq(a,b){var c;c=a.mO;return GJ(c.i_,b.h,SQ(c.y.bq));}
function XU(){B.call(this);this.sL=null;}
function A66(a,b,c,d){var e,f;b=a.sL;e=(Yj(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.ga=Bf(Be(0,b.ga+Bb(e,f)|0),ACg(b));return 1;}
function AFL(){B.call(this);this.ym=null;}
function ASJ(a,b){var c,d;a:{c=a.ym;switch(b.be){case 67:RJ(c);d=1;break a;case 86:ABX(c);d=1;break a;default:}d=0;}return d;}
var AFK=G();
function A3m(a,b,c){return 0;}
function AFJ(){B.call(this);this.tM=null;}
function AQI(a,b,c){var d,e;d=a.tM;c=d.eD+1|0;d.eD=c;d=G6(F(K7));e=new J;L(e);H(H(V(e,c),C(341)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));O6(b,e);return 1;}
var AFI=G();
function AT2(a){return null;}
function AFM(){B.call(this);this.B2=null;}
function A6w(a){var b,c;b=a.B2;c=new XB;c.rX=b;return c;}
function TK(){B.call(this);this.Ga=null;}
function AQx(a,b){return 0;}
function Qv(){B.call(this);this.Bb=null;}
function A4n(a,b){var c;c=a.Bb;if(b.kw&&b.be==27){b=Po(c.s);if(b!==null)NI(b);}return 0;}
function Qx(){B.call(this);this.xh=null;}
function A2r(a,b){var c,d,e,f,g,h,i;c=a.xh;d=ABa(c.n);H4(d,FI(),DC(C(165),25.0));b=b.h;e=P(Bt,1);f=e.data;g=new Bt;h=c.s;i=new Zx;i.AH=c;B5(g,DV(h,i),C(342));f[0]=g;No(d,b,CN(e),Bb_);Ii(c.s,d);return 1;}
function Qy(){B.call(this);this.Dx=null;}
function A4Y(a,b){var c,d,e;c=a.Dx;d=c.gQ;if(d!==null){e=new AC_;e.Eb=c;e.Ec=b;Fu(d,b,e);}}
function Qz(){B.call(this);this.A9=null;}
function A6U(a,b){var c,d,e;c=a.A9;if(Cz(c.n,c.gQ)){d=c.m2;b=b.h;e=c.gQ;Gr(d,b,e,c,e,c,new YY);}return 1;}
var AJW=G(0);
function ANv(b){IH(b,A$l(C(343),C(201),AEu(C(344))));}
function Q8(){B.call(this);this.uD=null;}
function A6_(a,b){Me(LM(a.uD),b);}
function Q7(){B.call(this);this.wX=null;}
function A1B(a,b){var c,d,e,f,g,h;c=a.wX;d=P(Bt,1);e=d.data;f=new Bt;g=c.s;h=new Z6;h.wq=c;B5(f,DV(g,h),C(345));e[0]=f;f=CN(d);g=c.s;c=c.ny;E7(g,c.ce,c.f3,b.h,f);return 1;}
function Wm(){B.call(this);this.ER=null;}
function AVP(a,b){return 1;}
function Wl(){B.call(this);this.vr=null;}
function A6X(a,b){var c,d;c=a.vr;if(b.be!=32)d=0;else{OH(c.gk,ALk());d=1;}return d;}
function Zz(){B.call(this);this.zS=null;}
function AQ5(a,b){var c,d,e,f,g,h;c=a.zS;d=P(Bt,1);e=d.data;f=new Bt;g=c.s;h=new Tt;h.zi=c;B5(f,DV(g,h),C(346));e[0]=f;f=CN(d);g=c.s;c=c.n$;E7(g,c.ce,c.f3,b.h,f);return 1;}
function R0(){B.call(this);this.Dn=null;}
function AVA(a,b){var c,d,e,f,g,h,i,j,k;c=a.Dn;d=c.s;e=c.qf;f=e.ce;g=e.f3;h=b.h;i=P(Bt,4);j=i.data;b=new Bt;e=new Zc;e.tf=c;B5(b,DV(d,e),C(347));j[0]=b;b=new Bt;e=c.s;k=new Za;k.sB=c;B5(b,DV(e,k),C(348));j[1]=b;b=new Bt;e=c.s;k=new Y_;k.vt=c;B5(b,DV(e,k),C(349));j[2]=b;e=new Bt;k=c.s;b=new Zb;b.AY=c;B5(e,DV(k,b),C(350));j[3]=e;E7(d,f,g,h,CN(i));return 1;}
function RZ(){B.call(this);this.Fp=null;}
function A2U(a,b){return b.be!=32?0:1;}
function R7(){B.call(this);this.HL=null;}
function APn(a,b){return 0;}
function ADi(){B.call(this);this.r5=null;}
function AVO(a,b){var c,d,e,f,g,h;c=a.r5;d=P(Bt,4);e=d.data;f=new Bt;g=c.s;h=new ABq;h.Ct=c;B5(f,DV(g,h),C(351));e[0]=f;f=new Bt;h=c.s;g=new ABp;g.te=c;B5(f,DV(h,g),C(352));e[1]=f;f=new Bt;h=c.s;g=new ABs;g.xI=c;B5(f,DV(h,g),C(346));e[2]=f;f=new Bt;h=c.s;g=new ABr;g.wh=c;B5(f,DV(h,g),C(345));e[3]=f;f=CN(d);h=c.s;c=c.hG;E7(h,c.ce,c.f3,b.h,f);return 1;}
var Dv=G(0);
var Bbz=null;var Bca=null;var BbB=null;var BbA=null;var BbD=null;var BbC=null;var BbF=null;var BbE=null;var BbH=null;var BbG=null;var BbI=null;function ARx(){ARx=Bl(Dv);AW0();}
function AW0(){Bbz=Cs(206);Bca=S(C(353));BbB=S(C(354));BbA=S(C(245));BbD=S(C(355));BbC=S(C(234));BbF=S(C(356));BbE=S(C(357));BbH=Fj(107,106,107,128);BbG=Fj(30,31,34,0);BbI=S(C(247));}
function Cu(){CF.call(this);this.lX=null;}
var Bcb=null;var Bcc=null;var Bcd=null;var Bce=null;var Bcf=null;var Bbi=null;var Bcg=null;var Bch=null;var Bci=null;var Bcj=null;var Bck=null;var Bcl=null;var Bcm=null;var Bcn=null;var Bco=null;var Bcp=null;function VK(){VK=Bl(Cu);A3u();}
function D8(a,b,c){var d=new Cu();ACa(d,a,b,c);return d;}
function A$F(a,b,c,d){var e=new Cu();AFV(e,a,b,c,d);return e;}
function AIk(){VK();return Bcp.eh();}
function ACa(a,b,c,d){VK();Dx(a,b,c);a.lX=Kr(d,null);}
function AFV(a,b,c,d,e){VK();Dx(a,b,c);a.lX=Kr(d,e);}
function A3u(){var b,c;b=new Cu;ARx();ACa(b,C(358),0,Bca);Bcb=b;Bcc=D8(C(359),1,S(C(360)));Bcd=D8(C(361),2,S(C(362)));Bce=D8(C(363),3,S(C(364)));Bcf=D8(C(365),4,Bca);Bbi=D8(C(366),5,S(C(367)));Bcg=D8(C(368),6,S(C(369)));Bch=D8(C(370),7,S(C(371)));Bci=D8(C(372),8,S(C(373)));c=new Cu;Gb();AFV(c,C(374),9,BbK,S(C(356)));Bcj=c;Bck=A$F(C(375),10,BbK,S(C(291)));Bcl=D8(C(376),11,S(C(377)));Bcm=D8(C(378),12,S(C(379)));Bcn=D8(C(380),13,Bca);b=D8(C(381),14,S(C(382)));Bco=b;Bcp=I(Cu,[Bcb,Bcc,Bcd,Bce,Bcf,Bbi,Bcg,Bch,Bci,
Bcj,Bck,Bcl,Bcm,Bcn,b]);}
function K9(){var a=this;B.call(a);a.hJ=null;a.nN=null;}
function Kr(a,b){var c=new K9();A31(c,a,b);return c;}
function A31(a,b,c){a.hJ=b;a.nN=c;}
function JE(){var a=this;B.call(a);a.mj=null;a.ot=null;a.pM=null;a.Gy=3;a.jU=null;a.DO=null;a.HO=null;a.qk=null;a.nZ=null;a.pX=null;}
function Bcq(a,b,c,d,e,f,g){var h=new JE();MF(h,a,b,c,d,e,f,g);return h;}
function MF(a,b,c,d,e,f,g,h){a.ot=DC(C(176),16.0);a.pM=DC(C(13),16.0);a.Gy=3;a.DO=b;a.HO=c;a.jU=d;a.qk=e;a.mj=f;a.nZ=g;a.pX=h;}
function AMH(){var a=this;B.call(a);a.o_=null;a.uH=0;}
function AKL(a,b){var c=new AMH();A6l(c,a,b);return c;}
function A6l(a,b,c){var d;d=new B3;a.o_=d;a.uH=b;d.bH=c;}
function AAi(a,b){return Ci(a.uH,b);}
var D0=G(0);
var BbZ=null;var Bb0=null;var BbW=null;var BbX=null;var BbY=null;var Bb5=null;var Bb6=null;var Bb1=null;var Bb2=null;function AZt(){AZt=Bl(D0);A43();}
function A43(){BbZ=S(C(234));Bb0=S(C(383));BbW=S(C(290));BbX=S(C(369));BbY=S(C(353));Bb5=S(C(234));Bb6=S(C(384));Bb1=S(C(385));Bb2=DF(43,45,48);}
var Z4=G(0);
var AAf=G();
function A15(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(386)),d),C(387)),e);C2(K(b));return d+e|0;}
var Z5=G(0);
var AAd=G();
function A2R(a,b,c){var d,e;d=b;e=c;b=new J;L(b);Di(H(Di(H(b,C(388)),d),C(387)),e);C2(K(b));return d+e;}
var AHG=G();
var AKW=G(0);
function W7(){B.call(this);this.pt=null;}
var Bb$=null;function UI(){var a=new W7();ALu(a);return a;}
function ALu(a){a.pt=BP();}
function EL(a,b,c){NV(a,Dd(b,c));}
function Dd(b,c){return Y$(c,b);}
function IK(a,b,c){Mr(a,b,c,null);}
function Mr(a,b,c,d){NV(a,A$P(null,b,c,d));}
function NV(a,b){BA(a.pt,b);}
function JC(a){return CN(G0(a.pt,Bb$));}
function AK0(){Bb$=P(Bt,0);}
var D5=G(0);
var BbS=null;var BbT=null;var BbP=null;var BbQ=null;var BbR=null;var Bb3=null;var Bb4=null;var BbU=null;var BbV=null;function A3Y(){A3Y=Bl(D5);A4H();}
function A4H(){BbS=S(C(243));BbT=S(C(389));BbP=S(C(292));BbQ=S(C(390));BbR=S(C(338));Bb3=S(C(243));Bb4=S(C(389));BbU=Fj(118,121,122,128);BbV=DF(63,66,68);}
var IF=G(0);
var Rg=G();
function A5J(a,b,c,d){var e;b=Bh();e=new J;L(e);H(H(V(H(e,C(391)),c),C(324)),d);Bc(b,K(e));}
var Rh=G();
function VB(){B.call(this);this.Ce=null;}
function A4z(a,b){var c;c=a.Ce.my;c.fx=Gq(b,WE(c));}
function QT(){B.call(this);this.FV=null;}
function ARf(a,b){var c,d,e;c=b.data;b=Bh();d=c[0];e=new J;L(e);H(H(e,C(392)),d);Bc(b,K(e));b=Bh();c=c[1];e=new J;L(e);H(H(e,C(393)),c);Bc(b,K(e));}
function QS(){B.call(this);this.GX=null;}
function APQ(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bh();e=c[0];f=new J;L(f);H(H(f,C(394)),e);Bc(d,K(f));e=E$(Js(b,1));b=Bh();g=c[1];if(e===null)d=C(33);else{d=new J;L(d);BO(d,C(39));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BO(d,C(40));Bq(d,i[h]);h=h+1|0;}BO(d,C(41));d=K(d);}c=new J;L(c);H(H(H(H(c,C(395)),g),C(396)),d);Bc(b,K(c));}
function QP(){B.call(this);this.H1=null;}
function AOV(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bh();e=c[0];f=new J;L(f);H(H(f,C(397)),e);Bc(d,K(f));e=Z3(Js(b,1));b=Bh();g=c[1];if(e===null)d=C(33);else{d=new J;L(d);BO(d,C(39));h=0;while(true){i=e.data;if(h>=i.length)break;if(h>0)BO(d,C(40));V(d,i[h]);h=h+1|0;}BO(d,C(41));d=K(d);}c=new J;L(c);H(H(H(H(c,C(398)),g),C(399)),d);Bc(b,K(c));}
function QN(){B.call(this);this.G8=null;}
function A8l(a,b){var c,d,e,f,g;c=b.data;d=Bh();e=c[0];f=new J;L(f);H(H(f,C(400)),e);Bc(d,K(f));e=CP(Js(b,1));b=Bh();g=c[1];d=AJc(e);c=new J;L(c);H(H(H(H(c,C(179)),g),C(401)),d);Bc(b,K(c));}
var AKC=G();
function WI(){B.call(this);this.uW=null;}
function A2S(a,b){var c;c=a.uW.mO;c.ga=Gq(b,ACg(c));}
function AEC(){B.call(this);this.FW=null;}
function AZf(a,b){return 0;}
function AND(){var a=this;B.call(a);a.la=null;a.p_=null;a.gs=null;a.HA=null;}
function AEu(a){var b=new AND();A6c(b,a);return b;}
function A6c(a,b){var c,d,e;c=null;d=null;e=null;a.la=c;a.p_=d;a.gs=b;a.HA=e;}
function AEO(a){var b,c;b=a.gs;if(b===null)return C(22);c=AIg(b,C(402));return c==(-1)?a.gs:DD(a.gs,c+1|0);}
function A0W(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BS(a.la,c.la)&&BS(a.p_,c.p_)&&BS(a.gs,c.gs)?1:0;}return 0;}
function JN(){var a=this;B.call(a);a.vJ=null;a.sf=null;a.sU=null;a.CI=null;a.t4=null;a.l3=null;}
function Bcr(a,b,c,d,e,f){var g=new JN();Pz(g,a,b,c,d,e,f);return g;}
function Pz(a,b,c,d,e,f,g){a.vJ=b;a.sf=c;a.sU=d;a.CI=e;a.t4=f;a.l3=g;}
function K5(){var a=this;B.call(a);a.s5=null;a.q0=null;a.wo=null;}
function Bcs(a,b,c){var d=new K5();LV(d,a,b,c);return d;}
function LV(a,b,c,d){a.s5=b;a.q0=c;a.wo=d;}
function Xc(a,b){return !b?a.q0:a.wo;}
function ALn(){var a=this;B.call(a);a.kl=null;a.mU=null;a.pk=null;}
function AKk(a,b,c){var d=new ALn();A7n(d,a,b,c);return d;}
function A7n(a,b,c,d){a.kl=b;a.mU=c;a.pk=d;}
function Cx(){CF.call(this);this.o9=null;}
var Bct=null;var Bcu=null;var Bcv=null;var Bcw=null;var Bcx=null;var Bcy=null;var Bcz=null;var BcA=null;var BcB=null;var BcC=null;var BcD=null;var BcE=null;var BcF=null;var BcG=null;var BcH=null;var BcI=null;function AHT(){AHT=Bl(Cx);A2Y();}
function Er(a,b,c){var d=new Cx();ADH(d,a,b,c);return d;}
function A6o(a,b,c,d){var e=new Cx();AJX(e,a,b,c,d);return e;}
function AMy(){AHT();return BcI.eh();}
function ADH(a,b,c,d){AHT();Dx(a,b,c);a.o9=Kr(d,null);}
function AJX(a,b,c,d,e){AHT();Dx(a,b,c);a.o9=Kr(d,e);}
function A2Y(){var b;b=new Cx;Gb();ADH(b,C(358),0,BbK);Bct=b;Bcu=Er(C(359),1,S(C(403)));Bcv=Er(C(361),2,S(C(404)));Bcw=Er(C(363),3,S(C(405)));Bcx=Er(C(365),4,S(C(403)));Bcy=Er(C(366),5,DF(188,63,60));Bcz=Er(C(368),6,S(C(406)));BcA=Er(C(370),7,S(C(407)));BcB=Er(C(372),8,S(C(408)));BcC=A6o(C(374),9,BbK,DF(52,65,52));BcD=A6o(C(375),10,S(C(409)),S(C(410)));BcE=Er(C(376),11,S(C(411)));BcF=Er(C(378),12,S(C(412)));BcG=Er(C(380),13,BbK);b=Er(C(381),14,S(C(382)));BcH=b;BcI=I(Cx,[Bct,Bcu,Bcv,Bcw,Bcx,Bcy,Bcz,BcA,BcB,BcC,
BcD,BcE,BcF,BcG,b]);}
var AN_=G();
function KQ(b,c){var d,e,f;if(c<=0)return C(22);d=B6(c);e=d.data;e[0]=ANq(Ej(b,52));f=1;while(f<c){e[f]=ANq(Ej(b,62));f=f+1|0;}return GT(d);}
function ANq(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AH_=G();
var ADq=G(DM);
var BcJ=null;function AMW(){BcJ=F($rt_bytecls());}
function AOi(){var a=this;B.call(a);a.L9=null;a.RW=null;a.Ll=0;a.Su=0;}
var AGV=G(0);
function ANy(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BD,8);e=Dh(8);f=B6(16);g=0;h=0;i=0;while(true){j=BR(i,b);if(j>0)break;k=j>=0?10:(c.bc(C5(i))).nV;if(k==10){d=D3(EX(f,0,g),d,h);e=AEy(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Lt(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=D3(EX(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bc(C5(j))).nV==10){e=AEy(1,e,h);i=j;}else e=AEy(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ABI;d=AHJ(d,h);if(m.length!=h)e=Pg(e,h);c.k0=d;c.EY=e;return c;}
function ALm(b){var c,d;c=M(b);BE(b);d=new QF;d.vD=b;return ANy(c,d);}
var C$=G();
var AM0=G(C$);
var ANo=G(C$);
var ALE=G(C$);
var ALP=G(C$);
var ANG=G(C$);
function Xh(){B.call(this);this.tn=null;}
function AS$(a){var b;b=a.tn;Bc(Bh(),b);}
function QF(){B.call(this);this.vD=null;}
function AZK(a,b){return QE(Q(a.vD,b.bv));}
function ABI(){var a=this;B.call(a);a.k0=null;a.EY=null;}
function EG(){var a=this;B.call(a);a.L=null;a.hN=null;a.gV=null;}
function KR(a,b,c,d){a.L=b;a.gV=c;a.hN=d;}
function Lj(a,b,c){return UY(a,b,Ig(BF(a)),c);}
function UY(a,b,c,d){var e,f,g,h,i,j,k;e=A76(a.L.F,b);Ey(e,a.gV.ce);CZ(e,c);b=new Yp;b.xv=a;b.xw=e;U7(e,b);b=new Yo;b.yh=a;e.yv=b;b=e.bb.bM;f=AE2(e);g=Cw(e.bb,5.0);h=Cw(e.bb,d);i=h?h+f|0:0;c=BK(g+h|0,(g+i|0)+f|0);j=new Bg;k=b.a;g=g*2|0;LK(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);Eh(e,c,j);return e;}
function AK$(a,b){var c,d,e;c=a.nb(b);if(c!==null){d=a.L;e=a.gV;E7(d,e.ce,e.f3,b,c);}return c===null?0:1;}
function Od(){var a=this;EG.call(a);a.g0=null;a.tG=null;a.cz=null;a.eQ=null;a.er=null;a.k4=null;a.nO=null;a.q6=null;}
function BcK(a,b,c){var d=new Od();RN(d,a,b,c);return d;}
function RN(a,b,c,d){var e,f;KR(a,c,b,d);c=ANR(a.L.F);a.cz=c;O$(c,b);e=IM(C(413),0);f=IM(C(414),0);DY(e);DY(f);b=new Uh;b.ui=a;e.cE=b;b=new Uf;b.wM=a;f.cE=b;D$(a.cz.c8,e);D$(a.cz.cV,f);c=Lj(a,a.cz,0.0);a.g0=c;b=new Ug;b.ze=a;c.i$=b;b=new Ud;b.BQ=a;c.i6=b;DZ(a.L,c);a.k4=H7();a.nO=H7();b=new ABP;d=new Ue;d.D9=a;c=a.g0.bb.cq;e=new AGv;e.jr=0;b.f$=e;b.mJ=d;b.oe=c;a.q6=b;}
function AP2(a){var b;a.g0=null;a.cz=null;b=null;a.er=b;a.eQ=b;}
function A2z(a,b){var c,d,e,f;if(BG(a.cz.c8,b))return AB7(a,1,C(413));if(BG(a.cz.cV,b))return AB7(a,0,C(414));c=P(Bt,2);d=c.data;b=new Bt;e=new ABA;e.rJ=a;B5(b,e,C(413));d[0]=b;b=new Bt;f=new ABz;f.xE=a;B5(b,f,C(414));d[1]=b;return CN(c);}
function AB7(a,b,c){var d,e,f,g;d=P(Bt,1);e=d.data;f=new Bt;g=new AEX;g.BT=a;g.BU=b;B5(f,g,c);e[0]=f;return CN(d);}
function OY(a){var b,c,d,e;b=a.cz;c=b.c8;if(c!==null&&b.cV!==null){EU(c,a.k4);EU(a.cz.cV,a.nO);d=VX(a.cz.c8);e=VX(a.cz.cV);OH(a.cz,AIb(a.q6,d,e));return;}}
function IN(a,b){var c,d;c=a.L.F.cq;d=new SV;d.DW=a;d.D4=b;GN(c,d);}
function ZJ(){B.call(this);this.F2=null;}
function A5s(a){return Eq(0);}
var ALj=G();
function Ci(b,c){return C6(b*c);}
var ALp=G(0);
function AKA(b){if(b===null)return C(190);if(!DN(b,C(415))&&!DN(b,C(416))&&!DN(b,C(417))&&!DN(b,C(418))&&!DN(b,C(419))&&!DN(b,C(420))){if(DN(b,C(421)))return C(201);if(DN(b,C(422)))return C(217);if(DN(b,C(423)))return C(212);if(!DN(b,C(424))&&!DN(b,C(425)))return C(190);return C(426);}return C(218);}
function AKT(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(KG(b)){case -1655966961:if(!Bk(b,C(212)))break a;c=4;break a;case 3401:if(!Bk(b,C(217)))break a;c=3;break a;case 98723:if(!Bk(b,C(218)))break a;c=2;break a;case 3213227:if(!Bk(b,C(426)))break a;c=5;break a;case 3254818:if(!Bk(b,C(201)))break a;c=1;break a;case 3556653:if(!Bk(b,C(190)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=DG();e
=new J;L(e);H(H(e,C(427)),b);Bc(d,K(e));c=0;break b;}c=0;}return c;}
function AED(){B.call(this);this.x6=null;}
function AZm(a,b,c,d){return HP(a.x6,b,c,d);}
function ZG(){B.call(this);this.lc=null;}
function A8T(a,b){var c,d,e,f,g;c=a.lc;d=c.nq;if(d!==null){e=b.h;f=e.a-d.a|0;g=e.b-d.b|0;e=c.lg;e.a=Fs(0,e.a+f|0,c.hA.a-c.ky.a|0);c=a.lc;d=c.lg;d.b=Fs(0,d.b+g|0,c.hA.b-c.ky.b|0);}a.lc.nq=b.h;return 1;}
var AH9=G();
function MM(){return "clipboard" in $rt_globals.navigator?1:0;}
var T7=G(0);
var Bbg=null;function ANd(){Bbg=new SP;}
function AEJ(){var a=this;B.call(a);a.t7=null;a.t8=null;}
function A0F(a,b){var c,d,e;c=a.t7;d=a.t8;c=c.fY.eL.w;e=c.a;b=b.h;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
function AJR(){var a=this;B.call(a);a.c9=null;a.cu=null;a.lh=null;a.ly=null;a.pb=null;a.kH=null;}
function ABa(a){var b=new AJR();A5D(b,a);return b;}
function A5D(a,b){a.cu=BP();a.kH=Bb_;a.c9=b;Y(b.di,a);}
function H4(a,b,c){a.lh=c;a.pb=b;b=B$(a.cu);while(Cc(b)){Ko(Cd(b),a.pb);}}
function No(a,b,c,d){a.kH=d;TL(a,b,c);}
function TL(a,b,c){var d,e;d=a.c9;e=d.bM;if(Bb(e.a,e.b)&&d.cd!==0.0){if(a.lh!==null&&!J_(a)){a.ly=FM(a.c9,a.lh);d=Xj(a,b,c,null,null);b=new Tx;b.vw=a;d.lC=b;Cn(a.c9,a);return;}b=new BU;Z(b);N(b);}c=new CV;Bn(c,C(428));N(c);}
function M_(a){if(J_(a)){ADR(a.c9,a);ADI(a,null);a.kH.e();a.kH=Bb_;}}
function Xj(a,b,c,d,e){var f,g,h;f=AMx();AGH(f);N_(f,c.bN());Ko(f,a.pb);Km(f,a.ly,a.c9);if(d===null)g=b.a;else{g=b.a;g=a.c9.bM.a<((g+(EV(d)).a|0)+(EV(f)).a|0)?g-(EV(f)).a|0:(g+(EV(d)).a|0)-d.gI|0;}h=b.b;b=a.c9.bM;N7(f,Be(0,Bf(g,b.a-(EV(f)).a|0)),Be(0,Bf(h,b.b-(EV(f)).b|0)));b=new AEk;b.w9=a;b.w6=f;b.w7=e;f.qg=b;BA(a.cu,f);return f;}
function A8s(a,b,c){var d;a.ly=FM(a.c9,a.lh);d=B$(a.cu);while(Cc(d)){Km(Cd(d),a.ly,a.c9);}}
function AG3(a){var b,c;if(EY(a.cu))return;Cb(a.c9.bS,1);b=0;while(true){c=a.cu;if(b>=c.q)break;MZ(BL(c,b),a.c9);b=b+1|0;}}
function ATR(a,b){var c;if(!J_(a))return 0;a:{switch(b.be){case 27:M_(a);c=1;break a;default:}c=0;}return c;}
function ADI(a,b){var c,d;c=a.cu.q-1|0;a:{while(true){if(c<0)break a;d=BL(a.cu,c);if(b===d)break;E5(a.cu,c);NG(d);c=c+(-1)|0;}}}
function J_(a){return a.cu.q<=0?0:1;}
function AVV(a){var b,c;TM(a.c9.di,a);ADR(a.c9,a);b=a.cu;c=B$(b);while(Cc(c)){NG(Cd(c));}Je(b);}
function ID(){CJ.call(this);this.cB=null;}
function Nl(a,b){var c;if(a.cB===null){a.cB=b;return;}c=new DX;Z(c);N(c);}
function A4p(a){var b,c,d;b=a.cB.data;c=b.length;d=0;while(d<c){b[d].b1();d=d+1|0;}}
function AUx(a,b){var c,d,e;c=a.cB.data;d=c.length;e=0;while(e<d){c[e].dZ(b);e=e+1|0;}}
function AZH(a,b){var c,d,e,f;c=0;d=a.cB.data;e=d.length;f=0;while(f<e){c=c|d[f].cy(b);f=f+1|0;}return c;}
function AQR(a,b,c,d){Kw(a,b,c,d);a.D2();}
function A7i(a,b,c,d){var e,f,g,h,i;e=0;f=a.cB.data;g=f.length;h=0;while(h<g){i=f[h];if(BG(i,b.h))e=e|i.cD(b,c,d);h=h+1|0;}return e;}
function AXf(a,b,c){var d,e,f,g,h;d=a.cB.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(BG(g,b.h)){h=g.ct(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A7u(a,b,c){var d,e,f,g,h;d=0;e=a.cB.data;f=e.length;g=0;while(g<f){h=e[g];if(BG(h,b.h))d=d|h.dC(b,c);g=g+1|0;}return d;}
function A70(a,b){var c,d,e,f,g;c=0;d=a.cB.data;e=d.length;f=0;while(f<e){g=d[f];if(BG(g,b.h))c=c|g.bZ(b);f=f+1|0;}return c;}
function ARu(a,b,c,d){var e,f,g,h,i;e=0;f=a.cB.data;g=f.length;h=0;while(h<g){i=f[h];if(BG(i,b.h))e=e|i.dz(b,c,d);h=h+1|0;}return e;}
function A7G(a){var b,c,d;b=a.cB.data;c=b.length;d=0;while(d<c){b[d].kV();d=d+1|0;}}
function I0(){ID.call(this);this.e9=null;}
function Q6(a,b){Fo(a);a.e9=ALq(b);}
function ATF(a){var b,c,d,e;b=Ci(20.0,a.b4);c=(a.k.a-b|0)/2|0;d=AMN(a.j);e=BK(c,a.k.b);a.cB.data[0].d1(d,e,a.b4);d.a=(a.j.a+a.k.a|0)-c|0;a.cB.data[1].d1(d,e,a.b4);e.a=(a.k.a-c|0)-c|0;d.a=a.j.a+c|0;a.cB.data[2].d1(d,e,a.b4);}
function AIp(){var a=this;I0.call(a);a.c8=null;a.cV=null;a.ll=null;a.mD=null;a.w1=null;}
function ANR(a){var b=new AIp();A4y(b,a);return b;}
function A4y(a,b){var c,d;Q6(a,b);a.c8=VA(b);a.cV=VA(b);a.ll=Hj(a.c8,b);a.mD=Hj(a.cV,b);c=AO_(a.ll,a.c8);d=AO_(a.mD,a.cV);KW(a.e9,c,d);a.w1=Xe(c,d);Nl(a,I(CJ,[a.ll,a.mD,a.e9]));}
function O$(a,b){a.e9.hI=b;KP(a.c8,b);Kn(a.c8,a.ll);KP(a.cV,b);Kn(a.cV,a.mD);}
function OH(a,b){a.w1.fF=b;a.e9.dY=b;}
function H1(){var a=this;B.call(a);a.cE=null;a.f6=null;a.lR=null;a.hV=null;a.gn=0;a.h7=0;a.g3=0;a.cK=0;a.ib=0;}
function BcL(a,b){var c=new H1();UE(c,a,b);return c;}
function UE(a,b,c){a.hV=ZP(b);a.gn=c;a.h7=0;}
function De(a){return (KB(a.hV,0)).x;}
function AGS(a){a.h7=60084;}
function GI(a){return a.h7!=60084?0:1;}
function SX(a){return a.h7!=60086?0:1;}
function AHR(a){a.h7=60086;}
function LS(a){a.g3=60035;}
function HF(a){a.g3=60027;}
function R4(a){a.g3=60137;}
function DY(a){a.g3=60151;}
function I_(a){a.g3=60215;}
function AI8(a){var b;b=a.cE;if(b===null){b=a.lR;if(b===null)b=a.f6;}return b;}
function Db(){H1.call(this);this.e1=null;}
var BcM=null;var BcN=null;function IM(a,b){var c=new Db();KN(c,a,b);return c;}
function ANk(a,b,c){var d=new Db();ANx(d,a,b,c);return d;}
function KN(a,b,c){UE(a,b,c);a.e1=BcM;}
function ANx(a,b,c,d){UE(a,b,c);a.e1=BcM;a.e1=d;}
function A7T(a){return De(a);}
function PL(a,b){var c,d;c=P(H1,AGq(a));d=c.data;if(ADF(a,c,b,0)==d.length)return c;b=new Bu;Z(b);N(b);}
function E_(a){return a.e1.data.length;}
function AGq(a){var b,c,d,e;b=1;if(GI(a)){c=a.e1.data;d=c.length;e=0;while(e<d){b=b+AGq(c[e])|0;e=e+1|0;}}return b;}
function PI(a){var b,c,d,e;b=1;c=a.e1.data;d=c.length;e=0;while(e<d){b=b+PI(c[e])|0;e=e+1|0;}return b;}
function ADF(a,b,c,d){var e,f,g,h,i;e=c.iR!==null?0:1;f=c.kn!=2?0:1;g=b.data;a.ib=c.dK;a.cK=c.eX;h=d+1|0;g[d]=a;if(GI(a)){i=0;while(true){g=a.e1.data;if(i>=g.length)break;h=f?Lb(g[i],b,c.dK,c.eX,h):!e?ADF(g[i],b,C7(c,i),h):Lb(g[i],b,c.dK,0,h);i=i+1|0;}}return h;}
function Lb(a,b,c,d,e){var f,g,h;f=b.data;a.ib=c;a.cK=d;g=e+1|0;f[e]=a;if(GI(a)){f=a.e1.data;h=f.length;e=0;while(e<h){g=Lb(f[e],b,c,d,g);e=e+1|0;}}return g;}
function IE(a){AGS(a);DY(a);}
function Jl(a){AHR(a);LS(a);}
function We(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Pk(De(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AI1(){BcM=P(Db,0);BcN=new QC;}
function Uh(){B.call(this);this.ui=null;}
function A0r(a){IN(a.ui,1);}
function Uf(){B.call(this);this.wM=null;}
function AY0(a){IN(a.wM,0);}
function Ug(){B.call(this);this.ze=null;}
function A2I(a){var b;b=a.ze;Cn(b.L.F,b.tG);}
function Ud(){B.call(this);this.BQ=null;}
function AW2(a){var b,c,d;b=a.BQ;c=b.L.F.b2;d=b.cz;if(!(d.c8!==c&&d.cV!==c))b.tG=c;}
function ABL(){var a=this;B.call(a);a.rb=null;a.iR=null;a.kn=0;a.eX=0;a.dK=0;}
function VY(a){var b=new ABL();A3j(b,a);return b;}
function A3j(a,b){a.kn=0;a.eX=0;a.rb=b;}
function AC5(a,b){var c;a.iR=P(ABL,b);c=0;while(c<b){a.iR.data[c]=VY(a);c=c+1|0;}}
function C7(a,b){return a.iR.data[b];}
function Oz(a,b,c){var d;a.kn=1;a.eX=b;a.dK=H2(c);d=a.rb;if(d!==null)Oz(d,b,c);}
function MJ(a,b){var c,d,e,f;a.kn=2;a.eX=b;c=a.rb;if(c!==null)a.dK=c.dK;a:{d=a.iR;if(d!==null){d=d.data;e=d.length;f=0;while(true){if(f>=e)break a;MJ(d[f],b);f=f+1|0;}}}}
function H7(){var b;b=VY(null);b.kn=2;b.eX=0;return b;}
function ABP(){var a=this;B.call(a);a.mJ=null;a.f$=null;a.oe=null;}
function M7(a,b,c,d,e){var f,g,h,i;a:{if(b instanceof Gh){f=b;if(c instanceof Gh){g=c;I_(f);I_(g);c=a.oe;b=new PJ;b.v_=a;b.v$=f;b.wb=g;b.wa=d;b.v8=e;CI(c,b,C(429),I(B,[f.hj,g.hj]));break a;}}if(b instanceof Ja){h=b;if(c instanceof Ja){i=c;I_(h);I_(i);c=a.oe;b=new AGC;b.Ej=a;b.Ek=h;b.El=i;b.Em=d;b.En=e;CI(c,b,C(430),I(B,[h.eV,i.eV]));break a;}}c=new BU;Bn(c,C(431));N(c);}OX(a.mJ);}
function AIb(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=P(JV,1);e=0;f=0;g=0;a:{b:while(true){h=b.data;i=h.length;if(f>=i)break a;j=c.data;k=j.length;if(g>=k)break a;l=0;m=h[f].cK;n=0;o=0;while(f<i&&g<k){p=h[f].cK;if(p!=j[g].cK)break;if(p!=m)break;l=1;f=f+1|0;n=n+1|0;g=g+1|0;o=o+1|0;}if(l){q=Ef(f-n|0,n,g-o|0,o,m);p=e+1|0;d=D3(q,d,e);e=p;continue;}p=h[f].gn<=j[g].gn?0:1;c:{if(!p){q=Su(a,c,g,f);if(q!==null){g=g+q.jE|0;p=e+1|0;d=D3(q,d,e);e=p;continue b;}q=QW(a,b,f,g);if(q===null)break c;f=f+q.jG|0;p=e+1|0;d=D3(q,
d,e);e=p;continue b;}q=QW(a,b,f,g);if(q!==null){f=f+q.jG|0;p=e+1|0;d=D3(q,d,e);e=p;continue b;}q=Su(a,c,g,f);if(q!==null){g=g+q.jE|0;p=e+1|0;d=D3(q,d,e);e=p;continue b;}}if(h[f].cK&&h[f].cK!=3){if(j[g].cK&&j[g].cK!=3)break;q=Ef(f,0,g,1,j[g].cK);p=e+1|0;d=D3(q,d,e);g=g+1|0;}else{q=Ef(f,1,g,0,h[f].cK);p=e+1|0;d=D3(q,d,e);f=f+1|0;}e=p;}q=new CV;Z(q);N(q);}while(f<i){q=Ef(f,1,g,0,h[f].cK);p=e+1|0;d=D3(q,d,e);f=f+1|0;e=p;}while(true){b=c.data;if(g>=b.length)break;q=Ef(f,0,g,1,b[g].cK);p=e+1|0;d=D3(q,d,e);g=g+1|0;e
=p;}return A5r(null,null,CT(d,e));}
function QW(a,b,c,d){var e,f;b=b.data;if(b[c].cK!=1)return null;e=b[c].ib;f=0;while(c<b.length&&b[c].ib==e){c=c+1|0;f=f+1|0;}return Ef(c-f|0,f,d,0,1);}
function Su(a,b,c,d){var e,f;b=b.data;if(b[c].cK!=2)return null;e=b[c].ib;f=0;while(c<b.length&&b[c].ib==e){c=c+1|0;f=f+1|0;}return Ef(d,0,c-f|0,f,2);}
function ALz(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t;g=f.data;if(!g.length)return;g=CP(g[0]);h=g.data;i=h[0];j=h[1];k=2+i|0;l=AMm(g,2,k);m=AMm(g,k,k+j|0);k=1+i|0;h=AJY(f,1,k,F($rt_arraycls(HW)));n=AJY(f,k,k+j|0,F($rt_arraycls(HW)));AC5(d,i);AC5(e,j);o=0;p=0;q=1;a:while(true){if(!q){OX(a.mJ);if(E_(b))DY(b);else LS(b);if(E_(c))DY(c);else LS(c);return;}q=0;while(o<i&&p<j&&!l.data[o]&&!m.data[p]){b:{g=h.data;k=H2(a.f$);q=1;(C7(d,o)).dK=k;(C7(e,p)).dK=k;k=o+1|0;r=p+1|0;s=g[o];if(E6(s,Kg)){f=n.data;s=s;t=f[p];if
(E6(t,Kg)){t=t;M7(a,U_(a,b,s,o),U_(a,c,t,p),C7(d,o),C7(e,p));break b;}}s=g[o];if(!E6(s,JQ))break a;f=n.data;t=s;s=f[p];if(!E6(s,JQ))break a;s=s;M7(a,SZ(a,b,t,o),SZ(a,c,s,p),C7(d,o),C7(e,p));}o=k;p=r;}if(q)continue;r=H2(a.f$);while(o<i&&l.data[o]==1){q=1;(C7(d,o)).eX=1;(C7(d,o)).dK=r;MJ(C7(d,o),1);o=o+1|0;}if(q){O8(a.f$,d,e);continue;}while(p<j&&m.data[p]==2){q=1;(C7(e,p)).eX=2;(C7(e,p)).dK=r;MJ(C7(e,p),2);p=p+1|0;}if(q)O8(a.f$,d,e);}b=new CV;Z(b);N(b);}
function U_(a,b,c,d){return E_(b)<=0?AJJ(c,b.hc):b.eK.data[d];}
function SZ(a,b,c,d){return E_(b)<=0?A8C(DJ(c),b.gn+1|0,c):b.fC.data[d-b.eK.data.length|0];}
function Ue(){B.call(this);this.D9=null;}
function OX(a){OY(a.D9);}
function Y6(){B.call(this);this.zD=null;}
function ATz(a,b){Nb(a.zD,b);}
function WW(){B.call(this);this.Bz=null;}
function A77(a,b){var c,d,e,f;c=a.Bz;if(c.hi!=3&&c.fB!=3){b=b.data;c.hz=3;d=CP(b[0]);e=E$(b[1]);OW(c.i,d,e);if(c.gm){b=Fn(c);f=Kv(ER(),c.jH);c=new J;L(c);H(Ir(H(H(c,b),C(432)),f),C(210));$rt_globals.console.info($rt_ustr(K(c)));}}}
function Sg(){B.call(this);this.Bc=null;}
function A0e(a,b){var c,d,e,f,g,h;c=a.Bc;if(c.fB!=3){d=b.data;c.hi=3;if((CP(d[2])).data[0]!=1)Nb(c,b);else{e=CP(d[0]);f=E$(d[1]);g=c.hz!=3?0:1;ST(c.i,e,f,g);if(c.gm){b=Fn(c);h=Kv(ER(),c.jH);c=new J;L(c);H(Ir(H(H(c,b),C(433)),h),C(210));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function PR(){B.call(this);this.mu=null;}
function ART(a){return a.mu;}
function V$(){B.call(this);this.zh=null;}
function A7C(a,b){var c,d;c=a.zh;d=c.eD+1|0;c.eD=d;c=new J;L(c);H(H(V(c,d),C(434)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function XI(){B.call(this);this.zt=null;}
function A52(a){var b,c;b=a.zt;c=new J;L(c);H(H(H(c,C(435)),b),C(436));$rt_globals.console.info($rt_ustr(K(c)));}
function FS(){var a=this;CJ.call(a);a.c5=null;a.N=null;a.fE=null;}
function BcO(){var a=new FS();MB(a);return a;}
function MB(a){Fo(a);a.c5=new Bg;a.N=new Bg;}
function A2c(a,b){a.fE=b;}
function UR(a,b,c){X(a.c5,b,c);}
function JL(a){var b;b=a.fE;if(b!==null)AEV(b);}
function AIh(a){var b;b=a.N;b.a=YU(a,b.a);b=a.N;b.b=AFh(a,b.b);}
function AJw(a,b){var c,d;c=a.N.a;d=YU(a,b);a.N.a=d;return c==d?0:1;}
function PC(a,b){var c,d;c=a.N.b;d=AFh(a,b);a.N.b=d;return c==d?0:1;}
function AFh(a,b){return Be(0,Bf(b,a.c5.b-a.k.b|0));}
function YU(a,b){return Be(0,Bf(b,a.c5.a-a.k.a|0));}
function Mb(){var a=this;FS.call(a);a.eM=null;a.ch=null;a.cT=null;a.it=null;a.gb=null;a.mI=null;a.nF=null;a.CW=0;a.si=0;a.c6=null;a.gT=null;a.gU=null;a.hM=null;a.ii=null;a.io=null;a.j2=null;a.hn=null;a.oT=null;a.sX=0;a.kT=0;}
function AVt(a){Pl(a.it);AAk(a.ch);PS(a);}
function PS(a){a.gT=BV(a.gT,null);a.gU=BV(a.gU,null);a.hM=BV(a.hM,null);a.ii=BV(a.ii,null);a.io=BV(a.io,null);a.j2=BV(a.j2,null);a.hn=BV(a.hn,null);}
function Y4(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hM;break a;case 60084:c=a.gU;break a;case 60086:c=a.gT;break a;case 60136:c=a.hn;break a;case 60137:c=a.j2;break a;case 60151:c=a.ii;break a;case 60215:c=a.oT;break a;default:c=null;break a;}c=a.io;}return c;}
function VO(a,b){var c,d,e,f;c=APO(b);a.cT=c;d=a.c6;b=c.cO.data;e=b.length;f=0;a:{while(f<e){if(b[f]===d){e=1;break a;}f=f+1|0;}e=0;}if(!e)a.c6=null;if(a.b4!==0.0)Qm(a);}
function VX(a){return a.cT.cO;}
function KP(a,b){var c,d;a.gb=b;c=BS(a.mI,b.qT);d=BS(a.nF,b.p0);if(!(c&&d)){a.mI=b.qT;a.nF=b.p0;if(a.b4!==0.0)Ut(a);}}
function APC(a,b,c){Q2(a.ch,c);if(a.mI!==null)Ut(a);}
function Ut(a){var b,c,d,e,f;UB(a.it);b=a.ch;c=a.mI;d=a.b4;e=a.eM.bS;f=b.hL;b.dy=ALW(c.iI,c.hB*d,c.kO,c.k3,f,e);TX(a.ch,1.25,a.eM.bS);PS(a);b=FM(a.eM,a.nF);a.gT=BV(a.gT,Fi(a,60086,b));a.gU=BV(a.gU,Fi(a,60084,b));a.hM=BV(a.hM,Fi(a,60035,b));a.ii=BV(a.ii,Fi(a,60151,b));a.io=BV(a.io,Fi(a,60027,b));a.j2=BV(a.j2,Fi(a,60137,b));a.hn=BV(a.hn,Fi(a,60136,b));a.sX=Be(Be(Be(Be(BW(a.hM),BW(a.ii)),BW(a.io)),BW(a.hn)),BW(a.hn));a.oT=BV(a.oT,Fi(a,60215,b));a.kT=Be(BW(a.gU),BW(a.gT));Qm(a);}
function Qm(a){UR(a,a.c5.a,Bb(a.cT.cO.data.length,a.ch.d9));JL(a);}
function AAH(a){var b;b=a.cT.cO.data;a.c6=b.length<=0?null:b[0];}
function A3V(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=a.gb.bz.eI;d=a.j;Bw(b,d.a,d.b,a.k,c);BE(a.ch.dy);e=a.ch.d9;f=a.cT.cO.data.length;if(!f)return;g=Bf(f,IR(a.k.b,e)+7|0);h=a.it;if(h.data.length<g)a.it=ABl(g,h,a.ch,a.CW,a.si,a.cT);Oo(b,a.j,a.k);i=a.N.b;j=f-1|0;k=AIX(i,e,j);l=AIX((a.N.b+a.k.b|0)-1|0,e,j);a.CW=k;a.si=l;i=a.k.a;m=DH(a,4.0);n=DH(a,1.0)+a.kT|0;o=DH(a,3.0);p=DH(a,5.0);DH(a,1.0);q=0;r=a.j.a-a.N.a|0;s=DH(a,1.0);d=a.fE;t=s+(d===null?0:Gg(d))|0;while(k<=l){u
=a.cT.cO.data[k];v=u.cK;h=a.it.data;s=k%h.length|0;w=h[s];ZA(w,u.hV,b,e,i,0,k,s);s=Bb(e,k);x=s-a.N.b|0;if(!v)y=null;else{y=a.ch.uy;y.fN=v;}if(y===null)z=null;else{d=a.gb;z=IG(d.d7,d,y.fN);}ba=m+Bb(n,u.gn)|0;bb=a.c6!==u?0:1;if(y!==null){bc=s-a.N.b|0;X(a.eM.c_,a.k.a,e);d=a.j;Bw(b,d.a,d.b+bc|0,a.eM.c_,z);}else if(bb){bc=s-a.N.b|0;X(a.eM.c_,a.k.a,e);d=a.j;Bw(b,d.a,d.b+bc|0,a.eM.c_,a.gb.bz.g9);}bd=Y4(a,u.h7);be=Y4(a,u.g3);if(bd!==null){d=a.gb;bf=d.kt.data[0];AGI(a,b,bd,r+ba|0,a.j.b+x|0,y!==null?z:!bb?c:d.bz.g9,bf.hJ);}if
(be!==null){d=a.gb;bf=d.kt.data[0];bg=((r+ba|0)+a.kT|0)+o|0;s=a.j.b+x|0;if(y===null)z=!bb?c:d.bz.g9;AGI(a,b,be,bg,s,z,bf.hJ);}s=F8(u.hV);bh=(((ba+a.kT|0)+o|0)+a.sX|0)+p|0;q=Be(q,(bh+s|0)+t|0);Rm(w,a.j.b+x|0,r+bh|0,b,i,e,0,a.gb,null,null,null,bb,y===null?0:1,y);k=k+1|0;}d=a.c5;if(d.a!=q){d.a=q;JL(a);}GL(b);}
function AGI(a,b,c,d,e,f,g){Cv(a.ch.j9,0.0,0.0,BW(c),CX(c));Ct(a.ch.iQ,c.ef);HQ(a.ch,b,c,d,e,g,f);}
function A65(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.ch.d9;f=((b.h.b-a.j.b|0)+a.N.b|0)/e|0;if(f>=0){g=a.cT.cO.data;if(f<g.length){h=g[f];if(!Yu(a,b,f)){b=h.lR;if(b!==null)b.e();}}}}return 1;}
function AQB(a,b,c){var d,e,f,g;Cn(a.eM,a);d=a.ch.d9;e=((b.h.b-a.j.b|0)+a.N.b|0)/d|0;if(!c&&e>=0){f=a.cT.cO.data;if(e<f.length){g=f[e];if(Yu(a,b,e)){b=g.f6;if(b!==null)b.e();}else{a.c6=g;b=g.cE;if(b!==null)b.e();}}}return Bbg;}
function Yu(a,b,c){var d,e,f,g,h,i,j;d=a.cT.cO.data[c];e=DH(a,4.0);f=DH(a,1.0);g=Be(BW(a.gU),BW(a.gT));h=e+Bb(f+g|0,d.gn)|0;i=(a.j.a-a.N.a|0)+h|0;j=i+g|0;c=b.h.a;return i<=c&&c<j?1:0;}
function Fi(a,b,c){var d,e,f;d=a.eM.bS;e=Oq(b);f=a.ch;return AFR(d,e,c,1,f.d9,f.jo);}
function AIX(b,c,d){return Bf(b/c|0,d);}
function AR$(a,b){var c;a:{switch(b.be){case 13:b=a.c6;if(b!==null){b=AI8(b);if(b!==null)b.e();}c=1;break a;case 37:b=a.c6;if(b!==null&&GI(b))a.c6.f6.e();c=1;break a;case 38:c=AFC(a)-1|0;if(c<0)c=a.cT.cO.data.length-1|0;a.c6=a.cT.cO.data[c];Wa(a,c);c=1;break a;case 39:b=a.c6;if(b!==null&&SX(b)){a.c6.f6.e();c=1;}else c=ABV(a);break a;case 40:break;default:c=0;break a;}c=ABV(a);}return c;}
function ABV(a){var b;b=AFC(a)+1|0;if(!(b>0&&b<a.cT.cO.data.length))b=0;a.c6=a.cT.cO.data[b];Wa(a,b);return 1;}
function AFC(a){var b,c,d,e;b=a.cT.cO.data;c=a.c6;d=0;e=b.length;while(true){if(d>=e)return (-1);if(c===b[d])break;d=d+1|0;}return d;}
function Wa(a,b){var c,d;c=a.ch.d9;d=Bb(b,c);if(d<a.N.b){PC(a,d);JL(a);}b=d+c|0;c=a.N.b;d=a.k.b;if(b>(c+d|0)){PC(a,b-d|0);JL(a);}}
function A1Z(a,b,c){var d;d=a.c6;if(d===null)return 0;O6(b,De(d));return 1;}
function AMg(){Mb.call(this);this.nH=null;}
function VA(a){var b=new AMg();AXq(b,a);return b;}
function AXq(a,b){MB(a);a.cT=APO(P(H1,0));a.it=P(FV,0);a.eM=b;a.ch=ATy(b.cX);}
function Ul(a){VO(a,PL(a.nH,H7()));}
function EU(a,b){VO(a,PL(a.nH,b));}
function D$(a,b){a.nH=b;EU(a,H7());AAH(a);}
function Kn(a,b){var c;c=a.gb.bz;JZ(b,c.mr,c.mx);return b;}
function AHS(){var a=this;CJ.call(a);a.py=null;a.zu=null;a.CK=null;a.b0=null;a.dR=null;a.d4=null;a.vS=null;a.sn=null;a.xa=0.0;a.qJ=null;a.p1=null;}
function Hj(a,b){var c=new AHS();AZb(c,a,b);return c;}
function AZb(a,b,c){var d;c=c.de;Fo(a);d=new Q5;d.AJ=a;a.zu=d;d=new Q4;d.BG=a;a.CK=d;a.xa=10.0;a.b0=b;a.py=c;b.fE=a;}
function AWN(a){var b;b=a.b0;b.fE=null;a.b0=BV(b,null);}
function JZ(a,b,c){var d;a.p1=c;a.qJ=b;d=a.dR;if(d!==null)IO(d,b,c);b=a.d4;if(b!==null)IO(b,a.qJ,a.p1);}
function AR8(a,b,c,d){Kw(a,b,c,d);Kw(a.b0,b,c,d);if(d!==0.0)AEV(a);}
function J0(a,b,c){LY(a,b);Ms(a,c);}
function AEV(a){var b;AIh(a.b0);b=Gg(a)*3|0;if(ABE(a,b))VH(a);else a.d4=null;if(AGw(a,b))YM(a);else a.dR=null;}
function AGw(a,b){var c;c=a.k.b;return c>b&&a.b0.c5.b>c?1:0;}
function ABE(a,b){var c;c=a.k.a;return c>b&&a.b0.c5.a>c?1:0;}
function VH(a){var b,c,d,e,f,g;b=a.d4;if(b===null)b=JT();a.d4=b;P_(a,b);c=a.d4;b=a.b0;d=b.N.a;e=a.j;f=e.a;g=a.k;SR(c,d,f,g.a,b.c5.a,e.b+g.b|0,Gg(a));}
function YM(a){var b,c,d,e,f,g;b=a.dR;if(b===null)b=JT();a.dR=b;P_(a,b);c=a.dR;b=a.b0;d=b.N.b;e=a.j;f=e.b;g=a.k;K6(c,d,f,g.b,b.c5.b,e.a+g.a|0,Gg(a));}
function Gg(a){return DH(a,a.xa);}
function P_(a,b){IO(b,a.qJ,a.p1);}
function A5S(a,b){var c;a.b0.dZ(b);if(!(a.dR===null&&a.d4===null)){Cb(b,1);c=a.dR;if(c!==null)Hw(c,b);c=a.d4;if(c!==null)Hw(c,b);c=a.dR;if(c!==null)HB(c,b);c=a.d4;if(c!==null)HB(c,b);Cb(b,0);}}
function Vg(a,b){var c,d;a:{b:{c=a.dR;if(!(c!==null&&Jr(c,b))){c=a.d4;if(c===null)break b;if(!Jr(c,b))break b;}d=1;break a;}d=0;}return d;}
function AXc(a,b,c,d){return !Vg(a,b.h)&&!a.b0.cD(b,c,d)?0:1;}
function LY(a,b){var c;b=AJw(a.b0,b);if(ABE(a,Gg(a)*3|0))VH(a);if(b){c=a.vS;if(c!==null)c.e();}}
function Ms(a,b){var c;if(AFj(a,b)){c=a.sn;if(c!==null)c.e();}}
function AFj(a,b){var c;c=PC(a.b0,b);if(AGw(a,Gg(a)*3|0))YM(a);return c;}
function AWQ(a,b,c){var d,e;d=a.dR;if(d!==null){e=GC(d,b.h,a.zu,1);if(e!==null)return e;}d=a.d4;if(d!==null){e=GC(d,b.h,a.CK,0);if(e!==null)return e;}return a.b0.ct(b,c);}
function AUW(a,b,c){return Vg(a,b.h)?1:0;}
function AUG(a,b){var c,d,e;c=a.dR;d=c!==null&&GJ(c,b.h,a.py)?1:0;c=a.d4;e=c!==null&&GJ(c,b.h,a.py)?1:0;return !d&&!e&&!a.b0.bZ(b)?0:1;}
function A1J(a,b,c,d){var e,f;if(!BG(a,b.h))return 0;e=Ci(d*0.5,a.b4);f=Ci(c*0.5,a.b4);if(b.bW){f=f+e|0;e=0;}if(a.dR!==null&&e)Ms(a,a.b0.N.b+e|0);if(a.d4!==null&&f)LY(a,a.b0.N.a+f|0);return 1;}
function AKu(a){var b,c;b=Gg(a);c=a.b0.ir();c.a=Be(c.a,b);c.b=Be(c.b,b);return c;}
function AIG(){var a=this;B.call(a);a.oF=null;a.gA=null;}
function AO_(a,b){var c=new AIG();AQn(c,a,b);return c;}
function AQn(a,b,c){a.oF=b;a.gA=c;}
function AWZ(a){return a.gA.N.b/Np(a)|0;}
function A7f(a){var b;b=a.gA;return IR((b.N.b+b.k.b|0)-1|0,Np(a));}
function AX3(a,b){var c;b=Bb(b,Np(a));c=a.gA;return (b+c.j.b|0)-c.N.b|0;}
function ATt(a){return a.gA.j;}
function AZO(a){return a.gA.k;}
function AT7(a,b,c){var d;d=a.oF;d.vS=b;d.sn=c;}
function A4c(a,b){return AFj(a.oF,b);}
function Np(a){return a.gA.ch.d9;}
function AGv(){B.call(this);this.jr=0;}
function H2(a){var b;b=a.jr;a.jr=b+1|0;return b;}
function O8(a,b,c){var d;d=H2(a);Oz(b,3,a);a.jr=d+1|0;Oz(c,3,a);}
var SP=G();
function A4l(a,b){}
function WC(){B.call(this);this.FT=null;}
function APW(a){Bc(Bh(),C(437));}
var AGA=G(0);
var Bb_=null;function AJM(){Bb_=new Zf;}
function Tt(){B.call(this);this.zi=null;}
function A3R(a){AEd(a.zi);}
function Zc(){B.call(this);this.tf=null;}
function A7y(a){AGa(a.tf);}
function Za(){B.call(this);this.sB=null;}
function ARw(a){ADh(a.sB);}
function Y_(){B.call(this);this.vt=null;}
function APl(a){ABk(a.vt);}
function Zb(){B.call(this);this.AY=null;}
function A8U(a){AFW(a.AY);}
function Z6(){B.call(this);this.wq=null;}
function ATW(a){LM(a.wq);}
function ABq(){B.call(this);this.Ct=null;}
function AXh(a){ABc(a.Ct);}
function ABp(){B.call(this);this.te=null;}
function A3y(a){var b;b=a.te;Vi(new NU,b.s,b.hG,new X$);}
function ABs(){B.call(this);this.xI=null;}
function A45(a){var b;b=a.xI;AFx(new Mx,b.s,b.hG,new Ro);}
function ABr(){B.call(this);this.wh=null;}
function AXd(a){var b;b=a.wh;Ld(AWP(b.s,b.hG,new Ys));}
function AA3(){B.call(this);this.DX=null;}
function AZY(a,b){var c,d;c=a.DX;d=c.eD+1|0;c.eD=d;c=b.jt;b=new J;L(b);H(H(V(b,d),C(438)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function JV(){var a=this;B.call(a);a.iF=0;a.jG=0;a.iE=0;a.jE=0;a.p7=0;}
function Ef(a,b,c,d,e){var f=new JV();A6q(f,a,b,c,d,e);return f;}
function A6q(a,b,c,d,e,f){a.iF=b;a.jG=c;a.iE=d;a.jE=e;a.p7=f;}
function VZ(){var a=this;B.call(a);a.m7=null;a.m8=null;a.iY=null;}
function A5r(a,b,c){var d=new VZ();AIJ(d,a,b,c);return d;}
function AIJ(a,b,c,d){a.m7=b;a.m8=c;a.iY=d;}
function Hn(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iY.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bf(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.iE:i.iF;k=!c?i.jE:i.jG;l=BR(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
var QC=G();
function ATm(a,b,c){b=b;c=c;return Pk(De(b),De(c));}
var AMV=G(0);
function AGy(){B.call(this);this.DC=null;}
function A3i(a){AA8(a.DC);}
function Zx(){B.call(this);this.AH=null;}
function AZ5(a){var b;b=a.AH;DZ(b.s,AAQ(b));}
function Rw(){B.call(this);this.ua=null;}
function A1X(a){var b,c,d;b=a.ua;c=b.y.bq;d=new VL;d.B0=b;GN(c,d);}
function Ry(){B.call(this);this.wK=null;}
function A7Q(a){var b,c,d;b=a.wK;c=b.y.bq;d=new XJ;d.CL=b;Fp(c,d);}
function Rx(){B.call(this);this.vL=null;}
function AT8(a){var b,c,d;b=a.vL;Bc(Bh(),C(439));Bc(Bh(),C(440));c=b.y.bq;d=new AGf;d.yS=b;Fp(c,d);}
var MH=G(0);
function So(){B.call(this);this.vX=null;}
function A0E(a,b){return L2(a.vX,b);}
function AN9(){HA.call(this);this.cO=null;}
function APO(a){var b=new AN9();ARg(b,a);return b;}
function ARg(a,b){a.cO=b;}
function A8F(a,b){return a.cO.data[b].hV;}
function Q5(){B.call(this);this.AJ=null;}
function AO$(a,b){var c;c=a.AJ;Ms(c,Gq(b,c.b0.c5.b-c.k.b|0));}
function Q4(){B.call(this);this.BG=null;}
function APs(a,b){var c;c=a.BG;LY(c,Gq(b,c.b0.c5.a-c.k.a|0));}
function Qs(){B.call(this);this.CR=null;}
function A7c(a,b){var c,d;c=a.CR;d=b.bv;return QE(c.charCodeAt(d)&65535);}
var Zf=G();
function AYj(a){}
var CV=G(Bu);
var ANa=G(F0);
function A06(a){var b=new ANa();AUl(b,a);return b;}
function AUl(a,b){a.ls=1;a.lP=1;a.os=b;}
var AGZ=G();
function GV(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AHr(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function AF1(){B.call(this);this.wP=null;}
function AZe(a,b){var c,d;c=a.wP;XC(c,FZ(c,b.h));b=Bm(c);d=c.d;OQ(b,d.z,d.C);IQ(c);}
var AJV=G();
function AG4(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EP()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Va;d.addEventListener("change",Bz(e,"handleEvent"));d.click();}
var AMC=G();
var AJe=G();
function ALM(b,c,d,e,f,g){g.a=c.a;g.b=f;Bw(b,d.a,d.b,g,e);Bw(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bw(b,d.a,d.b+f|0,g,e);Bw(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AM7(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bw(b,j,k,i,h);Bw(b,j,k,i,h);Bw(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bw(b,l,j,i,h);Bw(b,l,j,i,h);Bw(b,l+g|0,j+g|0,i,h);}
function R1(){var a=this;B.call(a);a.c$=null;a.rq=null;a.fV=null;a.eE=0;a.cM=0;a.jV=null;a.kD=null;a.h5=0;a.yH=0;}
function Qp(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.eE;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}Fa(c);j=d+(-1)|0;b=Dr(d);d=Bb(j,a.cM)%a.fV.b|0;Hq(a,c,b,a.h5,g);Kt(a.c$,c,0,d);if(!(j%a.eE|0))break;d=j;}}else{Fa(b);k=a.eE-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Hq(a,b,Dr(j),Bb(a.cM,k)+a.h5|0,g);k=k+(-1)|0;j=h;}CU(a.c$,b);j=Be(i,e);}return j;}k=a.eE;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bf(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}Fa(c);b=Dr((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cM)%a.fV.b|0;Hq(a,c,b,a.h5,g);Kt(a.c$,c,0,d);if(!(j%a.eE|0))break;d=j;}}else{Fa(b);d=0;while(d<a.eE){h=h+1|0;Hq(a,b,Dr((h>e?h-f|0:h)+f|0),Bb(a.cM,d)+a.h5|0,g);d=d+1|0;}CU(a.c$,b);j=Bf(i,e);}return j;}
function XZ(b,c,d,e){c=c.data;return d<c.length&&c[d]?IG(b.d7,b,c[d]):e.lT;}
function N$(a,b,c,d,e,f){DT(b,a.rq.a+d.a|0,c+d.b|0,a.jV,a.kD,a.c$,e,f,a.yH);}
function Hq(a,b,c,d,e){B1(b,c,a.fV.a-20.0*e,d);}
var AKj=G();
var AJo=G();
function TR(){var a=this;B.call(a);a.xt=null;a.xu=null;a.xs=0;}
function A1u(a,b){var c,d,e;c=a.xt;d=a.xu;e=a.xs;d.g(W4(c,(b.h.a+e|0)-c.fw.a|0));}
function TQ(){var a=this;B.call(a);a.s0=null;a.sY=null;a.sZ=0;}
function A7z(a,b){var c,d,e;c=a.s0;d=a.sY;e=a.sZ;d.g(RV(c,(b.h.b+e|0)-c.fw.b|0));}
function Sy(){B.call(this);this.rK=null;}
function ATP(a){return Uu(a.rK);}
function Sz(){B.call(this);this.ub=null;}
function ARc(a){return Uu(a.ub);}
var Pa=G(BM);
function P8(){B.call(this);this.wy=null;}
function AV6(a){return ABN(a.wy);}
function P7(){B.call(this);this.vE=null;}
function A1d(a){return ABN(a.vE);}
function ACG(){B.call(this);this.Cd=null;}
function A4T(a){return a.Cd.lb();}
function XB(){B.call(this);this.rX=null;}
function AXG(a,b){var c,d;c=a.rX;d=c.eD+1|0;c.eD=d;c=new J;L(c);H(H(V(c,d),C(441)),b);$rt_globals.console.info($rt_ustr(K(c)));}
var YY=G();
function A5H(a){return Eq(1);}
function VI(){B.call(this);this.Ar=null;}
function AS3(a,b){a.Ar.g(F9(b));}
var AIm=G();
function Yh(){B.call(this);this.rT=null;}
function AVX(a,b){a.rT.e();}
var DX=G(Bu);
function AE8(){var a=this;B.call(a);a.sb=null;a.sd=null;}
function A78(a){var b,c;b=a.sb;c=a.sd;D4(b);c.e();}
var GQ=G(JP);
var AFY=G(F0);
var AHo=G(0);
function ASn(b){return 112<=b&&b<=123?1:0;}
function Xp(){B.call(this);this.Am=null;}
function AYh(a,b){var c;c=a.Am;Dt(c,b);Fc(c,null);Na(c);}
function AFa(){var a=this;B.call(a);a.bw=0;a.bB=0;}
function D2(a,b){var c=new AFa();AMF(c,a,b);return c;}
function AMF(a,b,c){a.bw=b;a.bB=c;}
function AOW(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.bw==c.bw&&a.bB==c.bB?1:0;}return 0;}
function AWa(a){var b,c,d,e;b=P(B,2).data;b[0]=C5(a.bw);b[1]=C5(a.bB);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bv)|0;d=d+1|0;}return c;}
function APu(a){var b,c,d;b=a.bw;c=a.bB;d=new J;L(d);Bq(d,40);Bq(V(H(V(d,b),C(40)),c),41);return K(d);}
function A5k(a,b){var c;b=b;c=BR(a.bw,b.bw);if(!c)c=BR(a.bB,b.bB);return c;}
var AGi=G();
function A5$(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AGh(){B.call(this);this.t3=null;}
function A1c(a,b){var c,d,e;c=a.t3;d=0;e=b.length;while(d<e){c.g(AJy(b[d],P(BD,0)));d=d+1|0;}}
function AFG(){B.call(this);this.DZ=null;}
function A2d(a,b){var c,d;c=a.DZ;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A8y(b,P(BD,0),P(BD,0)));}
function AEq(){var a=this;EG.call(a);a.iq=null;a.lq=null;a.d8=null;a.n6=null;a.rR=null;}
function AWP(a,b,c){var d=new AEq();ANB(d,a,b,c);return d;}
function ANB(a,b,c,d){KR(a,b,c,d);d=Ho(b);a.lq=d;b=Fr(d);a.d8=b;b=Lj(a,b,25.0);a.iq=b;d=new AFF;d.C8=a;b.i$=d;d=new AFE;d.sl=a;b.i6=d;a.d8.ma=a;AOl(a,c);DZ(a.L,a.iq);}
function Ld(a){Cn(a.L.F,a.d8);}
function UQ(a){return a.L.F.b2;}
function AOl(a,b){Ey(a.iq,b.ce);Fw(a.lq,b);Ed(a.d8,b);}
function Me(a,b){var c,d;c=a.d8;Cn(c.ck,c);c=a.d8;d=new Si;d.u0=a;d.uZ=b;Fu(c,b,d);}
function AP_(a){var b;if(UQ(a)===a.d8)Cn(a.L.F,null);b=a.rR;if(b!==null)b.g(a);a.iq=null;a.d8=null;a.lq=null;a.n6=null;a.rR=null;}
function A2h(a,b){var c,d,e,f,g,h;c=new Bt;d=new AEP;d.sp=a;B5(c,d,C(442));e=a.lq;f=a.d8;d=a.hN;g=a.L;BE(g);h=new AER;h.BC=g;return NY(JU(e,f,d,a,f,h),b,c);}
function ACx(a){var b,c,d;b=a.L;c=b.F.cq;d=new ACq;d.zy=a;Fp(c,N1(b,d));}
function A4b(a,b){if(AES(b)){ACx(a);return 1;}if(b.be!=27)return 0;if(!AA_(b))AGx(a.L);else NI(a.iq);return 1;}
var Tp=G();
function AUI(a){return Eq(1);}
var LI=G(0);
function APN(a,b,c){HF(b);}
function ANW(a,b){var c;c=new Tc;c.vV=a;c.vW=b;return c;}
function Mx(){var a=this;EG.call(a);a.lp=null;a.cN=null;a.yO=null;a.i4=null;a.f2=null;a.t2=null;}
function BcP(a,b,c){var d=new Mx();AFx(d,a,b,c);return d;}
function AFx(a,b,c,d){var e,f;KR(a,b,c,d);a.i4=Kz();a.f2=Kz();e=new Sb;Fo(e);e.jT=Ho(b);d=VA(b.F);e.eS=d;e.lx=Hj(d,b.F);d=new QG;Fo(d);f=new B3;ASB();AM$(f,Bbc);d.C9=f;e.pQ=d;d=Fr(e.jT);e.gv=d;e.Hs=a;Nl(e,I(CJ,[e.lx,e.pQ,d]));e.E8=Eq(1);a.cN=e;WY(e,c);f=IM(C(443),0);DY(f);c=new ACQ;c.s8=a;f.cE=c;D$(a.cN.eS,f);AAH(a.cN.eS);c=UY(a,a.cN,C(444),0.0);a.lp=c;d=new ACP;d.xL=a;c.i$=d;d=new ACR;d.vi=a;c.i6=d;DZ(b,c);Cn(b.F,a.cN.eS);}
function A0H(a,b){var c,d,e,f,g,h,i;if(BG(a.cN.gv,b)){c=a.cN;d=c.jT;c=c.gv;e=a.hN;f=a.L;BE(f);g=new WA;g.D3=f;return AB4(JU(d,c,e,a,c,g),b);}h=P(Bt,1);i=h.data;b=new Bt;c=new Wz;c.rO=a;B5(b,c,C(445));i[0]=b;return CN(h);}
function AF2(a){var b,c;b=a.L.F.cq;c=new SH;c.rN=a;GN(b,c);}
function A3k(a){a.lp=null;a.cN=null;a.i4=null;a.f2=null;}
function A1x(a,b){a.gV=b;Ey(a.lp,b.ce);WY(a.cN,b);}
function A1v(a,b){var c,d,e;c=b.eV;d=EW(c);a.yO=d;e=CD(a.i4,d);if(e!==null)Sc(a,e);else{b=Bh();e=new J;L(e);H(H(e,C(446)),d);Bc(b,K(e));if(Ia(a.f2,d)){b=new J;L(b);H(H(b,C(447)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D6(a.f2,d,d);b=new RQ;b.wH=a;b.wI=d;e=new RR;e.uv=a;e.uu=d;WZ(c,b,e);}}}
function Sc(a,b){IH(a.cN.gv,b);b=a.cN;Cn(b.jT.cm.F,b.gv);}
function APF(a,b,c){var d;ADd(b,c);if(E_(b)>0)EU(a.cN.eS,c);d=b.eK.data;if(d.length==1&&!b.fC.data.length)d[0].cE.e();}
function A1W(a,b,c){if(E_(b)>0)EU(a.cN.eS,c);Pw(b,c);}
function A4f(a,b,c){if(AKA(c)!==C(190))R4(b);else HF(b);}
var AFy=G();
function AYm(a){return Eq(1);}
var W$=G();
function AYv(a){return OI();}
var AGe=G(DM);
var BcQ=null;function Zg(b){var c;c=new J;L(c);return K(Di(c,b));}
function AI9(){BcQ=F($rt_floatcls());}
var G$=G();
var BcR=null;var BcS=null;var A__=null;var A_$=null;var A_9=null;function AMp(){BcR=DL([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BcS=ALr([Bs(1),Bs(10),Bs(100),Bs(1000),Bs(10000),Bs(100000),Bs(1000000),Bs(10000000),Bs(100000000),Bs(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A__=ALr([Bs(1),Bs(10),Bs(100),Bs(10000),Bs(100000000),
D(1874919424, 2328306)]);A_$=new AD2;A_9=new V4;}
var Kl=G();
var BcT=0;var BcU=null;var BcV=null;function AMQ(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.sq=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.n_=0;c.nX=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Jo(Dm(Bs(d),Bs(8388608)),Ga)){d=d<<1;f=f+(-1)|0;}}g=AMZ(BcV,f);if(g<0)g= -g|0;h=BcV.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ki(d,BcU.data[e],i);if(j<BcT){while($rt_ucmp(j,BcT)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=BcV.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Ki(d,
BcU.data[e],i);}e=d<<1;d=e+1|0;h=BcU.data;f=g+1|0;k=h[f];l=i-1|0;m=Ki(d,k,l);n=Ki(e-1|0,BcU.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DR(Bs(d),Bs(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.n_=d;c.nX=g-50|0;}
function Ki(b,c,d){return Hr(GO(Cm(Dm(Bs(b),D(4294967295, 0)),Dm(Bs(c),D(4294967295, 0))),32-d|0));}
function ALX(){BcT=$rt_udiv((-1),10);BcU=DL([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);BcV=DL([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function V4(){var a=this;B.call(a);a.n_=0;a.nX=0;a.sq=0;}
function UA(){B.call(this);this.tL=null;}
function AWF(a,b){var c;c=a.tL;Dt(c,b);Fc(c,null);Na(c);}
function VM(){B.call(this);this.sN=null;}
function APd(a){HT(a.sN,37,3);}
function VN(){B.call(this);this.tx=null;}
function ARs(a){HT(a.tx,40,3);}
function VP(){B.call(this);this.u8=null;}
function A7B(a){HT(a.u8,42,3);}
function VQ(){B.call(this);this.za=null;}
function ATY(a){HT(a.za,45,3);}
function VR(){B.call(this);this.zH=null;}
function AWl(a){HT(a.zH,45,5);}
function WU(){B.call(this);this.CZ=null;}
function ASP(a,b){var c,d;c=a.CZ;d=new Bu;Bn(d,$rt_str(b.message));c.g(d);}
var XE=G(0);
var Bat=null;function A9W(){A9W=Bl(XE);A5g();}
function A5g(){Bat=new $rt_globals.TextDecoder("utf-16");}
function Pj(){var a=this;B.call(a);a.GN=null;a.yo=0.0;a.Ff=0.0;a.g$=null;a.j4=null;a.o$=null;a.gN=0;}
function AN2(a,b){var c;if(b!==null){a.j4=b;return a;}c=new BU;Bn(c,C(448));N(c);}
function AIY(a,b){var c;if(b!==null){a.o$=b;return a;}c=new BU;Bn(c,C(448));N(c);}
function AA5(a,b,c,d){var e,f,g,$$je;e=a.gN;if(!(e==2&&!d)&&e!=3){a.gN=d?2:1;while(true){try{f=AJ2(a,b,c);}catch($$e){$$je=Fh($$e);if($$je instanceof Bu){g=$$je;N(A06(g));}else{throw $$e;}}if(IW(f))return f;if(JH(f)){if(d&&En(b)){g=a.j4;HZ();if(g===BaD)return EO(Cl(b));if(Cl(c)<=M(a.g$))return BaG;FY(b,b.bi+Cl(b)|0);if(a.j4===BaE)N8(c,a.g$);}return f;}if(SW(f)){g=a.j4;HZ();if(g===BaD)return f;if(g===BaE){if(Cl(c)<M(a.g$))return BaG;N8(c,a.g$);}FY(b,b.bi+LR(f)|0);}else if(M4(f)){g=a.o$;HZ();if(g===BaD)break;if
(g===BaE){if(Cl(c)<M(a.g$))return BaG;N8(c,a.g$);}FY(b,b.bi+LR(f)|0);}}return f;}b=new CV;Z(b);N(b);}
function ALt(a,b){var c,d,e,f;c=a.gN;if(c&&c!=3){b=new CV;Z(b);N(b);}if(!Cl(b))return AKs(0);if(a.gN)a.gN=0;d=AKs(Be(8,Cl(b)*a.yo|0));while(true){e=AA5(a,b,d,0);if(JH(e))break;if(IW(e))d=ACF(a,d);if(!Ot(e))continue;V3(e);}b=AA5(a,b,d,1);if(Ot(b))V3(b);while(true){f=a.gN;if(f!=3&&f!=2)break;a.gN=3;if(JH(BaH)){d.eO=d.bi;d.bi=0;d.kr=(-1);return d;}d=ACF(a,d);}b=new CV;Z(b);N(b);}
function ACF(a,b){var c,d,e;c=b.i9;d=Lt(c,Be(8,c.data.length*2|0));e=AMz(d,0,d.data.length);FY(e,b.bi);return e;}
var AIi=G(C$);
var Va=G();
function AZx(a,b){}
function SJ(){var a=this;FS.call(a);a.b7=null;a.ez=null;a.iL=null;a.CT=null;a.eN=null;a.ci=null;a.fs=null;a.gl=null;a.ej=0;a.gh=0;a.D1=null;a.ex=0;a.fh=0;a.ia=0;a.gJ=0;a.gy=0;a.db=0;a.ft=null;a.k8=null;a.AK=null;a.i7=null;}
function A_j(a,b){var c=new SJ();AN0(c,a,b);return c;}
function AN0(a,b,c){MB(a);a.ez=T2();a.iL=new Bg;a.ci=BcW;a.fs=P(KK,0);a.ex=0;a.fh=0;a.ia=0;a.gJ=0;a.gy=0;a.ft=ALa(0);a.i7=Kz();a.b7=b;a.k8=c;a.D1=c;RE(a);}
function RE(a){a.ej=Ci(2.0,a.b7.cd);}
function Xu(a){return a.ci.data.length?0:1;}
function Y7(a,b){U9(a);a.ci=b;}
function U9(a){X(a.iL,0,0);}
function X5(a,b,c){a.AK=b;a.CT=c;a.eN=null;a.ft=null;a.gh=0;U9(a);}
function A7A(a){a.gl=BV(a.gl,null);X(a.iL,0,0);Ff(a.i7);a.ft=null;a.ci=BcW;a.fs=null;a.ex=0;a.fh=0;a.ia=0;ADs(a.ez);a.k8=null;}
function A1k(a,b,c){AAr(a);RE(a);a.eN=null;a.ft=null;a.gh=0;}
function AZv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=K2(a.b7);if(Xu(a))return;LH(a);Cr(c,a.eN);d=Ez(a);e=AKS(c,a.gh);f=Bf(IR(a.k.b,d),a.ci.data.length)+30|0;g=a.AK.DO;h=a.fs.data;d=h.length;if(d<f){a:{i=a.gJ;j=a.gy;k=a.ci;l=a.ft;m=a.i7;n=P(KK,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hD!==c){AE1(l,q,m);o[f]=Nz(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Nz(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Nz(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){AE1(l,c,m);h[f]=null;}f=f+1|0;}a.fs=n;Ct(a.iL,Ny(a.ft));AAG(a,a.b7.bS);}a.gJ=Bf((a.N.b+a.ej|0)/(Ez(a)+a.ej|0)|0,a.ci.data.length-1|0);a.gy=Bf((((a.N.b+a.ez.v.b|0)-1|0)+a.ej|0)/(Ez(a)+a.ej|0)|0,a.ci.data.length-1|0);if(!a.fs.data.length)return;AKN(a,e);AEQ(a,b);q=g.CI;c=a.j;Bw(b,c.a,c.b,a.k,q);c=a.ez.w;i=c.a;j=c.b;p=Cw(a.b7,2.0);s=a.b7.c_;t=a.gJ;u=i+p|0;while(t<=a.gy){l=Z2(a,t);d=Bb(t,Ez(a));v
=t+1|0;w=d+Bb(v,a.ej)|0;x=u+a.ex|0;y=x+a.fh|0;z=a.db!=t?0:1;m=!z?q:g.t4;ba=!z?g.vJ:g.l3;bb=!z?g.sf:g.l3;bc=!z?g.sU:g.l3;bd=(j+w|0)-a.N.b|0;DT(b,u,bd,l.kb,l.uV,a.gl,ba,m,a.b7.cX);DT(b,x,bd,l.kG,l.l1,a.gl,bb,m,a.b7.cX);DT(b,y,bd,l.kd,l.lv,a.gl,bc,m,a.b7.cX);d=l.kb.a;be=u+d|0;X(s,Be(0,a.ex-d|0),l.kb.b);Bw(b,be,bd,s,m);d=u+a.ex|0;f=l.kG.a;bf=d+f|0;X(s,Be(0,a.fh-f|0),l.kG.b);Bw(b,bf,bd,s,m);d=l.kd.a;bg=y+d|0;X(s,Be(0,(((a.ez.v.a-d|0)-a.fh|0)-a.ex|0)-p|0),l.kd.b);Bw(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;X(s,p,Ez(a)+a.ej
|0);Bw(b,bh,bd,s,q);t=v;}GL(b);}
function AKN(a,b){var c,d,e,f,g,h;c=0;d=a.gJ;while(d<=a.gy){e=Z2(a,d);if(!(e!==null&&e.hD===a.ci.data[d])){f=a.fs.data;g=a.ci;e=a.ft;h=a.i7;c=d%f.length|0;if(f[c]!==null)AE1(e,f[c],h);f[c]=Nz(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.iL,Ny(a.ft));AAG(a,a.b7.bS);}}
function AAG(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.iL;c=Ei(b,c.a+150|0,c.b,a.b7.cX);Cr(c,a.eN);d=a.eN;e=d.eR;f=e-(e+d.fa)/16.0;g=a.fs.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hD.mh;k=d.l1;B1(c,j,k.bt+a.gh,f+k.bx);j=d.hD.mz;d=d.lv;B1(c,j,d.bt+a.gh,f+d.bx);}i=i+1|0;}a:{d=a.i7;if(d.du>0){h=d.dl;i=0;b:while(true){g=d.cj.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cU;l=j.c3;k=k;l=l.m0;B1(c,k,l.bt+a.gh,f+l.bx);j=j.dj;if(h!=d.dl)break b;}i=i+1|0;}b=new IT;Z(b);N(b);}}if(a.gl===null)a.gl=C4(b);CU(a.gl,
c);ET(c);}
function Z2(a,b){var c;c=a.fs.data;return c[b%c.length|0];}
function A5i(a,b){Ct(a.ez.v,b);}
function A6x(a,b){Ct(a.ez.w,b);}
function AAr(a){var b,c,d,e,f,g,h,i,j;b=K2(a.b7);if(Xu(a))return;LH(a);Cr(b,a.eN);c=AKS(b,a.gh);d=a.ci.data;e=d.length;f=0;while(f<e){g=d[f];h=Oh(c,g.ig);i=Oh(c,g.mh);j=Oh(c,g.mz);a.ex=Be(a.ex,h);a.fh=Be(a.fh,i);a.ia=Be(a.ia,j);f=f+1|0;}}
function ATH(a,b){var c;c=ACs(a,b.h);if(c>=0)a.db=c;return FE(a.ez,a.j)&&Hk(a.b7.de)?1:0;}
function ARC(a,b,c){if(!FE(a.ez,b.h)&&!L0(a.ez)){b=a.D1;if(b!==null)b.e();}return null;}
function AV3(a,b,c,d){var e;if(d==1){e=ACs(a,b.h);if(e>=0)Wt(a,a.ci.data[e]);}return 1;}
function Wt(a,b){a.k8.e();b.vy.e();}
function ACs(a,b){var c,d,e;if(!a.fs.data.length)return (-1);c=Ez(a);d=(b.b-a.j.b|0)+a.N.b|0;e=a.ej;e=(d+e|0)/(c+e|0)|0;if(e<a.ci.data.length)return e;return (-1);}
function Ez(a){return Ft(a.eN);}
function LH(a){var b;if(a.eN===null){b=FM(a.b7,a.CT);a.eN=b;a.ft=ALa(Ft(b));a.gh=C6(a.eN.rh);}}
function A6M(a,b){var c,d,e;a:{switch(b.be){case 13:Wt(a,a.ci.data[a.db]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.db=a.gJ;b=a.fE;c=a.N;J0(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.db=a.gy;b=a.fE;c=a.N;J0(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.db=a.ci.data.length-1|0;break a;case 36:case 37:a.db=0;break a;case 38:d=a.db;e=a.ci.data.length;a.db=((d+e|0)
-1|0)%e|0;break a;case 40:a.db=(a.db+1|0)%a.ci.data.length|0;break a;default:break a;}a.k8.e();return 0;}e=a.db;if(e<=a.gJ)J0(a.fE,a.N.a,Bb(e,Ez(a))+Bb(a.db,a.ej)|0);else if(e>=a.gy)J0(a.fE,a.N.a,(Bb(e+1|0,Ez(a))+Bb(a.db+2|0,a.ej)|0)-a.k.b|0);return 0;}
var W3=G();
function AX6(a){}
var AF8=G();
function AQS(a,b){}
function AF$(){var a=this;B.call(a);a.v4=null;a.v5=null;}
function AOX(a,b){var c,d,e;c=a.v4;d=a.v5;e=new J;L(e);H(H(H(e,d),C(30)),b);CZ(c,K(e));}
function Ri(){var a=this;FS.call(a);a.m9=null;a.qY=null;a.zW=null;a.tk=0.0;}
function AYd(a){var b;b=Ci(20.0,a.b4);return BK(b,b);}
function A5o(a,b){UR(a,b.a*3|0,b.b*5|0);a.zW.g(b);}
function AYy(a,b){var c,d,e,f,g,h,i,j,k,l,m;AN5(a,b);AEQ(a,b);c=Ci(30.0,a.b4);d=a.N;e=d.a;f=Bb(e/c|0,c);g=d.b;h=Bb(g/c|0,c);d=a.k;i=Bb(((e+d.a|0)-1|0)/c|0,c);e=Bb(((g+d.b|0)-1|0)/c|0,c);d=a.qY;d.b=c;d.a=c;a.m9.bH=1.0;while(h<=e){g=a.j.b-a.N.b|0;j=f;while(j<=i){k=a.j.a-a.N.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ANU(l);m=m+1|0;}Xg(ANp(l),0.75,a.tk,a.m9);Bw(b,k+j|0,g+h|0,a.qY,a.m9);j=j+c|0;}h=h+c|0;}GL(b);}
function AUe(a,b,c){return Bbg;}
function AF9(){var a=this;B.call(a);a.rU=null;a.rV=null;}
function AW5(a){var b,c;b=a.rU;c=a.rV;I$(b.s,c);KE(c);}
function Wc(){var a=this;CJ.call(a);a.gM=null;a.h9=null;a.ko=null;a.e2=null;a.lu=0.0;a.fb=0;a.iU=0;a.eq=null;a.nD=null;}
function Xw(a){var b;if(O9(a))return 0;AEL(a);b=Cw(a.gM,a.lu);return Ft(a.e2)+(b*2|0)|0;}
function Tk(a){var b;b=a.k;return b.a&&b.b?0:1;}
function O9(a){return a.h9!==null&&a.ko!==null?0:1;}
function RM(a,b){a.k.b=b;}
function RT(a,b,c,d,e){var f,g;f=a.gM.c_;X(f,d,a.k.b);g=a.j;Bw(b,g.a+c|0,g.b,f,e);}
function AEL(a){if(a.e2===null)a.e2=FM(a.gM,a.h9);}
function AFF(){B.call(this);this.C8=null;}
function ASC(a){var b;b=a.C8;Cn(b.L.F,b.n6);}
function AFE(){B.call(this);this.sl=null;}
function AW$(a){var b;b=a.sl;b.n6=b.d8!==UQ(b)?null:b.d8;}
function Sb(){var a=this;ID.call(a);a.E8=null;a.Hs=null;a.jT=null;a.pQ=null;a.lx=null;a.eS=null;a.gv=null;}
function AS4(a){var b,c,d,e;b=a.k.a/4|0;c=b+DH(a,1.0)|0;d=AMN(a.j);e=BK(b,a.k.b);a.cB.data[0].d1(d,e,a.b4);d.a=a.j.a+b|0;e.a=c-b|0;a.cB.data[1].d1(d,e,a.b4);d.a=a.j.a+c|0;e.a=a.k.a-c|0;a.cB.data[2].d1(d,e,a.b4);}
function WY(a,b){KP(a.eS,b);Kn(a.eS,a.lx);Fw(a.jT,b);Ed(a.gv,b);}
function A2u(a){var b,c;b=AJU(a.gv);c=AKu(a.lx);return BK((b.a+a.pQ.k.a|0)+c.a|0,b.b);}
function ACQ(){B.call(this);this.s8=null;}
function AQ2(a){AF2(a.s8);}
function ACP(){B.call(this);this.xL=null;}
function AVN(a){var b;b=a.xL;Cn(b.L.F,b.t2);}
function ACR(){B.call(this);this.vi=null;}
function A3_(a){var b,c;b=a.vi;c=b.L.F.b2;if(b.cN.gv!==c)c=null;b.t2=c;}
var ACh=G(DM);
var BcX=null;function Dl(b,c){return Long_udiv(b, c);}
function AK4(b,c){return Long_urem(b, c);}
function DR(b,c){return Long_ucompare(b, c);}
function AL5(){BcX=F($rt_longcls());}
function AEi(){var a=this;B.call(a);a.uT=0;a.Eo=0;}
function Gq(a,b){var c;c=a.Eo;if(c<=0)return 0;return AAN(a.uT,b,c);}
function ADU(){B.call(this);this.pj=null;}
var BcW=null;function ASR(){var a=new ADU();AHC(a);return a;}
function AHC(a){a.pj=BP();}
function X_(a,b,c,d,e){var f;f=new L1;f.vy=e;f.mh=c;f.mz=d;f.ig=b;BA(a.pj,f);}
function AFw(a){return G0(a.pj,BcW);}
function ACM(b){return b===null?C(22):AEO(b);}
function AN1(){BcW=P(L1,0);}
function KK(){var a=this;B.call(a);a.uV=null;a.l1=null;a.lv=null;a.kb=null;a.kG=null;a.kd=null;a.hD=null;}
function Nz(b,c,d,e){var f,g,h;f=new KK;f.kb=new Bg;f.kG=new Bg;f.kd=new Bg;f.hD=b;g=CD(e,b.ig);if(g!==null)g.jq=g.jq+1|0;else{g=new AE7;h=La(c,b.ig,d);g.jq=1;g.m0=h;D6(e,b.ig,g);}e=g.m0;f.uV=e;X(f.kb,e.bk|0,e.bH|0);e=La(c,b.mh,d);f.l1=e;X(f.kG,e.bk|0,e.bH|0);b=La(c,b.mz,d);f.lv=b;X(f.kd,b.bk|0,b.bH|0);return f;}
function AE1(b,c,d){var e,f,g;e=c.hD.ig;f=CD(d,e);g=f.jq-1|0;f.jq=g;if(!g){Mj(d,e);JG(b,f.m0);}JG(b,c.l1);JG(b,c.lv);}
var Pu=G(0);
var BbL=null;var BbM=null;function AIK(){BbL=Fj(40,40,40,200);BbM=Fj(43,43,43,128);}
function QG(){CJ.call(this);this.C9=null;}
function AO2(a,b){var c;c=a.j;Bw(b,c.a,c.b,a.k,a.C9);}
function AD2(){var a=this;B.call(a);a.oE=Ga;a.nG=0;a.sc=0;}
function Ui(){var a=this;B.call(a);a.Dj=null;a.Dg=null;a.Dh=null;}
function ATx(a){var b,c,d,e,f;b=a.Dj;c=a.Dg;d=a.Dh;e=Bh();f=new J;L(f);b=H(f,b);Bq(b,9);b=H(b,c);Bq(b,9);H(b,d);Bc(e,K(f));}
var Vo=G(0);
var Bbc=null;function ASB(){ASB=Bl(Vo);AX8();}
function AX8(){Bbc=S(C(243));}
function L1(){var a=this;B.call(a);a.vy=null;a.mh=null;a.mz=null;a.ig=null;}
function Ze(){var a=this;B.call(a);a.rH=null;a.At=null;a.wL=0;a.xK=0;}
function O3(a,b){return Cl(a.At)<b?0:1;}
function V0(){B.call(this);this.BY=null;}
function A79(a,b){Dt(a.BY,b);}
function AFD(){var a=this;B.call(a);a.Fh=null;a.Fi=null;a.Fg=null;}
function AOc(){var a=this;B.call(a);a.pR=null;a.nS=null;a.fe=null;a.nC=null;a.bI=null;a.qO=null;a.oO=null;a.gw=null;a.hu=null;a.kp=null;}
function AYu(a,b){var c=new AOc();A3Q(c,a,b);return c;}
function A3Q(a,b,c){var d,e,f;a.fe=b;a.nC=c;a.bI=A0p();b=new J;L(b);a.kp=b;a.gw=Kz();b=new Uk;d=ANS(16);b.hp=0;b.ew=P(Kj,d);b.zw=0.75;Wj(b);a.hu=b;b=new Wy;c=a.bI;e=a.kp;f=a.gw;b.d2=c;b.np=e;b.ux=f;a.qO=b;b=new Wd;b.dk=c;b.oi=e;b.tp=f;a.oO=b;}
function Y5(a){var b,c,d,e,f,g,h;a:{b=NZ(a.fe.fA);c=b.j0;if(c.du>0){d=c.dl;e=0;b:while(true){f=b.j0.cj.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cU;if(Ia(a.gw,g))CD(a.gw,g);else{h=a.gw;D6(h,g,C5(h.du));}c=c.dj;if(d!=b.j0.dl)break b;}e=e+1|0;}b=new IT;Z(b);N(b);}}b=a.fe.f5;if(b!==null)ABQ(a,b);Bv(a.bI,a.fe.fA.du);b=T5(NZ(a.fe.fA));while(FT(b)){c=Rr(b);HD(a.bI,a.kp.H,M(c));BO(a.kp,c);}b=T5(NZ(a.fe.fA));while(FT(b)){c=Rr(b);c=CD(a.fe.fA,c);Bv(a.bI,c.q);c=B$(c);while(Cc(c)){g=Cd(c);g=CD(a.gw,g);Bv(a.bI,
g.bv);}}if(a.fe.f5===null)Bv(a.bI,(-1));else{Bv(a.bI,a.hu.hp);ACy(a,a.fe.f5);}if(a.nC===null)Bv(a.bI,(-1));else{Bv(a.bI,1);AHc(a.nC,a.bI,a.hu);}a.pR=Sd(a.bI);a.nS=G5(K(a.kp));}
function ABQ(a,b){var c,d,e,f,g,h;if(AE_(a.hu,b))Pi(a.hu,b);else{c=a.hu;d=C5(c.hp);if(b===null){e=ABb(c);if(e===null){c.mZ=c.mZ+1|0;e=AFd(c,null,0,0);f=c.hp+1|0;c.hp=f;if(f>c.qP)YZ(c);}}else{g=Nr(b);h=g&(c.ew.data.length-1|0);e=Y8(c,b,h,g);if(e===null){c.mZ=c.mZ+1|0;e=AFd(c,b,h,g);f=c.hp+1|0;c.hp=f;if(f>c.qP)YZ(c);}}e.c3=d;}b=b.c7;if(b===null)return;c=new XM;c.tt=a;b.fM(c);}
function ACy(a,b){var c,d,e,f;c=(Pi(a.hu,b)).bv;Bv(a.bI,c);if(b instanceof Oy)Bv(a.bI,(-1));else if(!(b instanceof L3))Bv(a.bI,0);else Bv(a.bI,1);d=a.qO;Bv(d.d2,b.fp.da());e=b.fp;f=new X9;f.xJ=d;e.fM(f);d=a.oO;Bv(d.dk,b.f7.da());e=b.f7;f=new VT;f.wk=d;e.fM(f);d=b.l_;Bv(a.bI,d.da());e=new WP;e.C6=a;d.fM(e);d=b.ij;Bv(a.bI,d.da());d=d.cl();while(d.c0()){e=d.cn();Qi(a.qO,e.mc);HS(a.oO,e.lB);Bv(a.bI,e.s2);}d=b.wf;if(d===null)Bv(a.bI,(-1));else Bv(a.bI,(CD(a.gw,d)).bv);b=b.c7;Bv(a.bI,b.da());d=new Rn;d.rI=a;b.fM(d);}
function PQ(){B.call(this);this.CE=null;}
function AYX(a,b){var c,d,e,f,g,h,i,j;c=a.CE;if(c.gm){d=Fn(c);e=new J;L(e);H(H(e,d),C(449));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CP(b[0]);g=E$(b[1]);h=(CP(b[2])).data[0];if(c.i.cI==h){i=null;j=null;if(b.length>=5){i=CP(b[3]);j=E$(b[4]);}b=Ep(c);if(!Bk(b,C(212))&&!Bk(b,C(426))?0:1)OW(c.i,f,g);else{Yi(c.i,f,g,i,j);Ff(c.i.d6);Ff(c.i.eg);N4(c.i);Lq(c.i);Pe(c);}}}
function AE6(){B.call(this);this.tA=null;}
function A36(a,b){var c,d,e,f;c=a.tA;if(c.fB!=3){b=b.data;d=CP(b[0]);e=E$(b[1]);Yi(c.i,d,e,null,null);if(c.gm){b=Fn(c);f=Kv(ER(),c.CA);c=new J;L(c);H(Ir(H(H(c,b),C(450)),f),C(210));$rt_globals.console.info($rt_ustr(K(c)));}}}
var FJ=G(0);
function Y9(){var a=this;B.call(a);a.kB=0;a.rn=0;a.mn=0;a.ip=0;a.jZ=null;}
function Cc(a){return a.kB>=a.mn?0:1;}
function Cd(a){var b,c;RA(a);b=a.kB;a.ip=b;c=a.jZ;a.kB=b+1|0;return c.ji(b);}
function ABy(a){var b,c,d;if(a.ip<0){b=new CV;Z(b);N(b);}RA(a);a.jZ.na(a.ip);a.rn=a.jZ.cc;c=a.ip;d=a.kB;if(c<d)a.kB=d-1|0;a.mn=a.mn-1|0;a.ip=(-1);}
function RA(a){var b;if(a.rn>=a.jZ.cc)return;b=new IT;Z(b);N(b);}
function Tx(){B.call(this);this.vw=null;}
function A2C(a){M_(a.vw);}
function AFk(){var a=this;B.call(a);a.yF=null;a.yE=null;}
function AYe(a){Cn(a.yF,a.yE);}
function L7(){var a=this;Pj.call(a);a.y_=null;a.Cf=null;}
function AJ2(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.y_;e=0;f=0;g=a.Cf;a:{b:{while(true){if((e+32|0)>f&&En(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cl(b)+k|0;h=j.length;f=Bf(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BM;c=new J;L(c);V(H(V(H(c,C(451)),l),C(105)),h);Bn(b,K(c));N(b);}if(Cl(b)<m){b=new O7;Z(b);N(b);}if(m<0){b=new BM;c=new J;L(c);H(V(H(c,C(106)),m),C(107));Bn(b,K(c));N(b);}n=b.bi;h=n+b.ol|0;e=0;while(e<m){o=k+1|0;i=b.q1.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bi=n+m|0;e=0;}if(!En(c)){p=!En(b)&&e>=f?BaH:BaG;break a;}i=g.data;n=Cl(c);o=i.length;n=Bf(n,o);q=new AEB;q.u1=b;q.C2=c;p=AOb(a,d,e,f,g,0,n,q);e=q.xR;if(p===null&&0==q.nJ)p=BaH;k=q.nJ;h=0;if(c.rs){b=new K_;Z(b);N(b);}if(Cl(c)<k)break;if(h>o){b=new BM;c=new J;L(c);Bq(V(H(V(H(c,C(108)),h),C(102)),o),41);Bn(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BM;c=new J;L(c);V(H(V(H(c,C(110)),l),C(105)),o);Bn(b,K(c));N(b);}if(k<0){b=new BM;c=new J;L(c);H(V(H(c,C(106)),k),C(107));Bn(b,K(c));N(b);}o=c.bi;m=0;while
(m<k){l=o+1|0;n=h+1|0;ACu(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bi=c.bi+k|0;if(p!==null)break a;}b=new Kp;Z(b);N(b);}b=new BM;c=new J;L(c);Bq(V(H(V(H(c,C(108)),k),C(102)),h),41);Bn(b,K(c));N(b);}FY(b,b.bi-(f-e|0)|0);return p;}
var UM=G(L7);
function AOb(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Oi(h,2))break a;i=BaH;break a;}c=k+1|0;n=j[k];if(!Hb(a,n)){c=c+(-2)|0;i=EO(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Oi(h,3))break a;i=BaH;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Hb(a,n))break b;if(!Hb(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Pq(p)){c=k+(-3)|0;i=EO(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EO(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Oi(h,4))break a;i=BaH;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cl(h.C2)<2?0:1)break a;i=BaG;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Hb(a,n))break c;if(!Hb(a,o))break c;if(!Hb(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Ky(r);m=c+1|0;j[c]=JW(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EO(1);break a;}c=k+(-3)|0;i
=EO(1);}h.xR=c;h.nJ=f;return i;}
function Hb(a,b){return (b&192)!=128?0:1;}
function ADK(){B.call(this);this.wT=null;}
function AT$(a,b){Nb(a.wT,b);}
function ADv(){B.call(this);this.so=null;}
function AOs(a){Ul(a.so);}
var AHH=G();
function QI(b,c,d){return AJg(b,0,c,d,WM());}
function AJg(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BR(c,d);h=g>=0?0:1+Sa(f,2.0)|0;i=g>0?0:1+Sa(f,3.0)|0;j=P(Db,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(452)),g);k[g]=AJg(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Db;n=new J;L(n);V(H(n,C(453)),g);KN(m,K(n),l);n=new SD;n.u9=m;m.lR=n;switch((l+g|0)%3|0){case 0:break;case 1:R4(m);break a;case 2:m.g3=60136;break a;default:break a;}HF(m);}if(WO(f)<0.25){n=KB(m.hV,0);n.bO=n.bO|2;}k[h+g|0]=m;g=g+1|0;}n=ANk(b,c,j);b=new YE;b.x$=n;b.ya=e;n.f6=b;n.cE
=b;if((c+c|0)>d)Jl(n);else IE(n);return n;}
function ADw(){B.call(this);this.uO=null;}
function ASi(a){Ul(a.uO);}
function TA(){B.call(this);this.vz=null;}
function AV8(a){ADh(a.vz);}
function Tz(){B.call(this);this.zp=null;}
function A1L(a){AFW(a.zp);}
function TC(){B.call(this);this.z8=null;}
function A7x(a){AGa(a.z8);}
function TB(){B.call(this);this.D0=null;}
function AY8(a){ABk(a.D0);}
function U8(){B.call(this);this.uC=null;}
function AXA(a){EU(a.uC.kc,H7());}
function HM(){var a=this;B.call(a);a.eJ=0;a.fr=0;a.qH=null;a.ph=0;a.hx=null;}
function AW7(a,b,c,d,e,f){var g=new HM();A3t(g,a,b,c,d,e,f);return g;}
function A3t(a,b,c,d,e,f,g){a.eJ=b;a.fr=c;a.qH=BK(f,g);a.ph=d;a.hx=e;}
function RU(){var a=this;B.call(a);a.gS=null;a.ln=null;a.jN=null;a.ru=null;a.dG=null;a.mC=0;}
function ACD(a,b){if(!BS(b.pM,a.ru)){a.ru=b.pM;OG(a);}}
function OG(a){a.dG=BV(a.dG,null);}
function AI6(a,b){var c,d;c=FM(b,a.ru);d=Ft(c);a.dG=BV(a.dG,AFR(b.bS,Oq(60088),c,0,d,0));}
function UV(a,b){return a.dG!==null&&GV(b,a.gS,a.ln)?1:0;}
function Yp(){var a=this;B.call(a);a.xv=null;a.xw=null;}
function A1T(a){var b,c;b=a.xv;c=a.xw;I$(b.L,c);KE(c);b.b1();}
function Yo(){B.call(this);this.yh=null;}
var AKi=G();
function AJO(){var a=this;B.call(a);a.j7=null;a.oN=0;a.gH=0;}
function A0p(){var a=new AJO();AYs(a);return a;}
function AYs(a){a.oN=0;a.j7=BI(16);a.gH=0;}
function HD(a,b,c){Bv(a,b);Bv(a,c);}
function Bv(a,b){var c,d;c=a.j7;d=c.data.length;if(d==a.gH)a.j7=J1(c,d*2|0);c=a.j7.data;d=a.gH;a.gH=d+1|0;c[d]=b;}
function Sd(a){var b,c,d,e,f;b=a.oN;if(b&&a.gH!=b){c=DG();b=a.oN;d=a.gH;e=new J;L(e);H(V(H(V(H(e,C(454)),b),C(455)),d),C(456));Bc(c,K(e));}f=a.j7;b=f.data.length;d=a.gH;if(b!=d)f=J1(f,d);return f;}
function Uk(){var a=this;Ev.call(a);a.hp=0;a.ew=null;a.mZ=0;a.zw=0.0;a.qP=0;}
function ANS(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Wj(a){a.qP=a.ew.data.length*a.zw|0;}
function AE_(a,b){return XD(a,b)===null?0:1;}
function Pi(a,b){var c;c=XD(a,b);if(c===null)return null;return c.c3;}
function XD(a,b){var c,d;if(b===null)c=ABb(a);else{d=Nr(b);c=Y8(a,b,d&(a.ew.data.length-1|0),d);}return c;}
function Y8(a,b,c,d){var e;e=a.ew.data[c];while(e!==null&&!(e.oI==d&&(b!==e.cU?0:1))){e=e.iW;}return e;}
function ABb(a){var b;b=a.ew.data[0];while(b!==null&&b.cU!==null){b=b.iW;}return b;}
function AFd(a,b,c,d){var e,f;e=new Kj;XT(e,b,null);e.oI=d;f=a.ew.data;e.iW=f[c];f[c]=e;return e;}
function YZ(a){var b,c,d,e,f,g,h,i;b=a.ew.data.length;b=ANS(!b?1:b<<1);c=P(Kj,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ew.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.oI&f;i=h.iW;h.iW=d[b];d[b]=h;h=i;}e=e+1|0;}a.ew=c;Wj(a);}
function Wy(){var a=this;B.call(a);a.d2=null;a.np=null;a.ux=null;}
function Qi(a,b){var c;if(!(b instanceof M5)){Bv(a.d2,3);AFT(a,b);Bv(a.d2,b.ka);}else{c=b;Bv(a.d2,5);AFT(a,c);Bv(a.d2,c.ka);Bv(a.d2,c.yr);b=c.lK;Bv(a.d2,b.q);c=new YG;c.sm=a;FW(b,c);}}
function AFT(a,b){var c;c=b.ey.hd;HD(a.d2,a.np.H,M(c));Bv(a.d2,b.ey.dL);PM(a,b.kA);BO(a.np,c);}
function PM(a,b){if(b===null)Bv(a.d2,(-1));else Bv(a.d2,(CD(a.ux,b)).bv);}
function Wd(){var a=this;B.call(a);a.dk=null;a.oi=null;a.tp=null;}
function HS(a,b){var c,d,e;if(b instanceof In){c=b;Bv(a.dk,9);AAI(a,c.fZ);}else if(b instanceof KY){d=b;Bv(a.dk,3);ABe(a,d);Bv(a.dk,d.rP);AAI(a,d.iM);}else if(b instanceof J4){e=b;Bv(a.dk,4);HS(a,e.iB);HS(a,e.h8);}else if(b===null)Bv(a.dk,(-1));else{Bv(a.dk,5);ABe(a,b);Bv(a.dk,b.B6);}}
function ABe(a,b){var c;c=b.e4.hd;HD(a.dk,a.oi.H,M(c));Bv(a.dk,b.e4.dL);b=b.gq;if(b===null)Bv(a.dk,(-1));else Bv(a.dk,(CD(a.tp,b)).bv);BO(a.oi,c);}
function AAI(a,b){var c;Bv(a.dk,b.q);c=new XW;c.y5=a;FW(b,c);}
function YL(){var a=this;B.call(a);a.AA=0;a.Ax=0;}
function VL(){B.call(this);this.B0=null;}
function A0n(a,b){var c,d;c=a.B0;d=new J;L(d);H(H(d,C(457)),b);$rt_globals.console.info($rt_ustr(K(d)));d=new QM;d.EC=c;Io(b,d);}
function XJ(){B.call(this);this.CL=null;}
function A37(a,b){var c,d,e;c=a.CL;d=new J;L(d);H(H(d,C(458)),b);$rt_globals.console.info($rt_ustr(K(d)));d=new Zu;d.GK=c;d.zB=b;e=new Zv;e.GS=c;Qe(b,d,e);}
function UF(){var a=this;B.call(a);a.bE=null;a.sF=null;a.jS=null;a.px=null;a.ng=null;a.g7=null;}
function NY(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=UI();e=a.bE.d;f=Ep(e);e=Ih(e);g=a.bE.f0;if(ABh(g,f,e)!==null){h=new SG;h.s9=a;h.s$=b;EL(d,C(459),h);}if(Pm(g,f,e)!==null){h=new SE;h.B4=a;h.B3=b;EL(d,C(460),h);}if(AD$(g,f,e)!==null){e=new SI;e.An=a;e.Ao=b;EL(d,C(461),e);}e=new SF;e.Er=a;e.Eq=b;EL(d,C(462),e);Iz(a);if(MM()){if(!a.bE.fq){f=new T0;f.v0=a;EL(d,C(463),f);}f=new T1;f.yA=a;EL(d,C(464),f);if(!a.bE.fq&&Xz(Iz(a))){f=new TZ;f.s_=a;EL(d,C(465),f);}}if(c!==null)NV(d,c);f=UI();i=P(BD,5).data;i[0]=C(190);i[1]=
C(201);i[2]=C(218);i[3]=C(217);i[4]=C(212);j=i.length;k=0;while(k<j){b=i[k];e=new S7;e.Bn=a;e.Bm=b;EL(f,b,e);k=k+1|0;}IK(d,C(466),JC(f));c=UI();i=P(Bt,3);l=i.data;g=a.ng;BE(g);m=new RD;m.zN=g;l[0]=Dd(C(467),m);g=a.ng;BE(g);m=new RB;m.B$=g;l[1]=Dd(C(468),m);g=a.ng;BE(g);m=new RC;m.rz=g;l[2]=Dd(C(469),m);Mr(c,C(470),CN(i),BcY);i=P(Bt,2);l=i.data;g=a.jS;BE(g);m=new VS;m.Cc=g;l[0]=Dd(C(471),m);g=a.jS;BE(g);m=new VU;m.Ew=g;l[1]=Dd(C(472),m);IK(c,C(473),CN(i));g=new ABd;g.AM=a;Mr(c,C(474),g,BcY);if(a.bE.ck.bS.mR)
{i=P(Bt,2);l=i.data;g=new ABR;g.tE=a;l[0]=Dd(C(475),g);g=new ABO;g.CJ=a;l[1]=Dd(C(476),g);IK(c,C(477),CN(i));}IK(d,C(478),JC(c));return JC(d);}
function AB4(a,b){return NY(a,b,null);}
function Iz(a){return a.bE.ck.cq;}
function X4(a){var b;b=new Ta;b.vU=a;return b;}
function A2t(a){var b,c,d,e,f;b=P(Bt,5);c=b.data;d=a.bE;BE(d);e=new Uv;e.x0=d;c[0]=Dd(C(479),e);e=a.bE;BE(e);f=new Uw;f.tB=e;c[1]=Dd(C(480),f);d=a.bE;BE(d);e=new Ux;e.CB=d;c[2]=Dd(C(481),e);d=a.bE;BE(d);e=new Uy;e.yU=d;c[3]=Dd(C(482),e);d=a.bE;BE(d);e=new UL;e.Bf=d;c[4]=Dd(C(483),e);return CN(b);}
function Rz(a,b){var c;c=new PO;c.zn=a;c.zo=b;return c;}
function Ls(a,b,c){var d,e,f,g,h,i,j,k,l;a:{D4(a.g7.cm);d=a.bE.d;e=Ep(d);f=Ih(d);g=a.bE.f0;if(c===null)h=null;else{A$1();switch(BcZ.data[c.dF]){case 1:h=Pm(g,e,f);break a;case 2:h=ABh(g,e,f);break a;default:}b=new Fq;Z(b);N(b);}}c=a.bE;e=FZ(c,b);g=JS(c.d.i,e.bw,e.bB);f=Ur(c,g);if(h!==null){g=c.d;i=e.bw;j=e.bB;e=new ADx;e.HF=c;e.HE=b;e.HD=f;h.vg(g,i,j,e,c.kP);}else{e=CD(c.d.i.eg,g);if(e!==null)JB(c,e);else{e=CD(c.d.i.d6,g);if(e!==null&&!EY(e))ABx(c.lz,b,e,c,f);else{c=c.lz;k=P(Bt,1);l=k.data;e=new Bt;f=c.cm;BE(f);g
=new ADl;g.Dq=f;B5(e,g,C(484));l[0]=e;S_(c,b,CN(k));}}}}
var AAy=G(DM);
var Bc0=null;function ALx(){Bc0=F($rt_doublecls());}
var KO=G();
var Bc1=Ga;var Bc2=null;var Bc3=null;function AIs(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.sc=Jo(Dm(d,D(0, 2147483648)),Ga)?0:1;e=Dm(d,D(4294967295, 1048575));f=Hr(A$K(d,52))&2047;if(Jo(e,Ga)&&!f){c.oE=Ga;c.nG=0;return;}if(f)e=A9j(e,D(0, 1048576));else{e=Iw(e,1);while(Jo(Dm(e,D(0, 1048576)),Ga)){e=Iw(e,1);f=f+(-1)|0;}}g=Bc3.data;h=f<<16>>16;i=0;j=g.length;k=BR(i,j);if(k>0){c=new BU;Z(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BR(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jz(e,Bc2.data[h],i);if(AQ$(m,Bc1)){while(DR(m,Bc1)<=0){j=j+(-1)|0;m=C0(Cm(m,Bs(10)),Bs(9));}g=Bc3.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jz(e,Bc2.data[h],i);}e=Iw(e,1);d=C0(e,Bs(1));g=Bc2.data;h=j+1|0;n=g[h];f=i-1|0;n=Jz(d,n,f);o=Jz(Kv(e,Bs(1)),Bc2.data[h],f);p=Bs(1);while(true){q=Cm(p,Bs(10));if(DR(Dl(m,q),Dl(o,q))<=0)break;p=q;}r=Bs(1);while
(true){s=Cm(r,Bs(10));if(DR(Dl(m,s),Dl(n,s))>=0)break;r=s;}h=DR(p,r);e=h>0?Cm(Dl(m,p),p):h<0?C0(Cm(Dl(m,r),r),r):Cm(Dl(C0(m,AJr(r,Bs(2))),r),r);if(DR(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dl(e,Bs(10));if(DR(e,D(2808348672, 232830643))<0)break;}else if(DR(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cm(e,Bs(10));}c.oE=e;c.nG=j-330|0;}
function Jz(b,c,d){var e,f,g,h,i,j,k,l;e=Dm(b,Bs(65535));f=Dm(GO(b,16),Bs(65535));g=Dm(GO(b,32),Bs(65535));h=Dm(GO(b,48),Bs(65535));i=Dm(c,Bs(65535));j=Dm(GO(c,16),Bs(65535));k=Dm(GO(c,32),Bs(65535));l=Dm(GO(c,48),Bs(65535));return C0(C0(C0(Iw(Cm(l,h),32+d|0),Iw(C0(Cm(l,g),Cm(k,h)),16+d|0)),Iw(C0(C0(Cm(l,f),Cm(k,g)),Cm(j,h)),d)),GO(C0(C0(C0(Cm(k,e),Cm(j,f)),Cm(i,g)),Iw(C0(C0(C0(Cm(l,e),Cm(k,f)),Cm(j,g)),Cm(i,h)),16)),32-d|0));}
function AId(){Bc1=Dl(Bs(-1),Bs(10));Bc2=ALr([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);Bc3=A9_([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function AEk(){var a=this;B.call(a);a.w9=null;a.w6=null;a.w7=null;}
function ATC(a,b,c,d){var e,f,g,h;b=a.w9;e=a.w6;f=a.w7;ADI(b,e);if(f!==null)d.nU.e();if(AEz(d)){f=d.fO;g=e.dn;h=e.gI;Xj(b,BK((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.og,e,d.ve);}}
function UU(){B.call(this);this.wB=null;}
function ARX(a,b,c){var d,e;c=a.wB;d=c.d.i;e=b.bv;b=c.fX;ACn(d.E.data[e],0,b);}
function Sn(){var a=this;B.call(a);a.FE=null;a.vB=0;}
function AZ6(a,b){var c,d,e,f;c=a.vB;d=(CP(Js(b,0))).data;b=Bh();e=d[0];f=new J;L(f);V(H(V(H(f,C(485)),c),C(486)),e);Bc(b,K(f));b=Bh();e=d[1];f=new J;L(f);V(H(V(H(f,C(485)),c),C(487)),e);Bc(b,K(f));}
function SD(){B.call(this);this.u9=null;}
function A3$(a){var b,c,d;b=a.u9;c=Bh();d=De(b);b=new J;L(b);H(H(b,C(488)),d);Bc(c,K(b));}
function VV(){B.call(this);this.uR=null;}
function AV7(a,b,c){Is(Cg(a.uR.d.i,b.bv),0,M(c));}
function YE(){var a=this;B.call(a);a.x$=null;a.ya=null;}
function A34(a){var b,c;b=a.x$;c=a.ya;if(!GI(b))IE(b);else Jl(b);c.e();}
var K_=G(DX);
var Kp=G(Bu);
var O7=G(Bu);
function AKD(){B.call(this);this.UJ=null;}
function AGf(){B.call(this);this.yS=null;}
function A1O(a,b){var c,d,e,f,g,h,i;c=a.yS;d=new J;L(d);H(H(d,C(489)),b);$rt_globals.console.info($rt_ustr(K(d)));e=0;while(e<Bba.data.length){f=4080+e|0;g=Bb(f,c.nn.data.length);h=new AGM;h.BD=c;h.BE=e;h.BF=f;d=DG();BE(d);i=new AGP;i.sO=d;ADt(b,h,i,g,c.nn.data.length);e=e+1|0;}}
var AAq=G();
var Bc4=null;function OW(b,c,d){ST(b,c,d,0);}
function ST(b,c,d,e){Zw(b,c,d,null,null,e);}
function Zw(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=MV(c);i=Bd(h);j=Bd(h);k=Bd(h);l=CR(b);c=b.E;if(c.data.length<i)b.E=AHJ(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bd(h)|0;h.fG=h.fG+n|0;}else b.E.data[m]=El(AA4(h,d,0));m=m+1|0;}N4(b);if(j)b.dH=AJz(AKo(h));Ff(b.eg);Ff(b.d6);o=b.eg;g=0;while(g<k){D6(o,D2(Bd(h),Bd(h)),D2(Bd(h),Bd(h)));g=g+1|0;}p=b.eg;o=b.d6;q=NO(OV(p));while(FT(q)){r=Pt(q);s=r.cU;p=r.c3;BE(Bc4);r=CD(o,p);if(r===null){r=BP();D6(o,p,r);}BA(r,s);}if(o.qj===null){p=new RI;p.xZ=o;o.qj=p;}p=o.qj;r=new ABJ;OB(r,
p.xZ);while(FT(r)){ON(r);o=r.hS.c3;p=A_Y;c=P(B,o.q);d=c.data;G0(o,c);LO(c,p);g=0;t=d.length;while(g<t){p=d[g];Li(o,g);o.cx.data[g]=p;g=g+1|0;}}SO(h);if(e!==null&&f!==null){p=AUv(e,f);Q0(p);b.fu=A0R(p.qz,p.jv);b.dH=AJz(p.qW);}}
function Yi(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MV(c);i=Bd(h);j=Bd(h);k=Bd(h)!=1?0:1;l=Bd(h);m=Bd(h);n=AFQ(b,i);o=AFQ(b,j);p=(Jx(Cg(b,n.a),n.b)).data[0].t;q=(Jx(Cg(b,o.a),o.b)).data[1].t;r=0;s=l-1|0;while(r<l){g=AA4(h,d,i);if(!r)g=MO(p,g);if(r==s)g=MO(g,q);t=n.a+r|0;u=El(g);c=b.E.data;v=c[t];c[t]=u;if(!k&&J8(v)==J8(u)){t=0;while(t<J8(v)){o=v.t.data[t];w=u.t.data[t];x=o.b_;y=x!=5?0:1;if(!y&&x&&!w.b_){w.b_=x;w.bO=o.bO;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AKo(h);w=LC(i,j,(-1));Zi(b.dH,w,u);}else if(e!==null&&f!==null){v=AUv(e,f);Q0(v);w=LC(i,j,(-1));Zi(b.dH,w,v.qW);n=b.fu;n.f5=b.dH.dE.cC;n.fA=v.jv;}}SO(h);}
function AA4(b,c,d){var e,f,g,h,i,j,k,l;e=Bd(b);f=P(CC,e);g=f.data;h=0;while(h<e){i=Bd(b);j=Bd(b);k=Bd(b);l=Bd(b);g[h]=Et(EX(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ANm(){Bc4=new Xs;}
function PW(){var a=this;B.call(a);a.Fm=null;a.Fn=null;a.Fk=0;a.Fl=0;}
var ABm=G(0);
var Qq=G(0);
var Ge=G();
function ACr(){Ge.call(this);this.CG=null;}
function OU(a,b){var c,d,e;c=0;while(true){d=a.CG;if(d.kY===null)d.kY=B$(d.z4);if(!Cc(d.kY))e=0;else{c=b.bF(Cd(d.kY));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var SN=G(0);
var AF6=G();
function APE(a,b){b=b;b.c$=BV(b.c$,null);}
var AIv=G(0);
function ALW(b,c,d,e,f,g){f=f.data;f[J5(0,0)]=Ha(g,b,c,d,0);f[J5(0,1)]=Ha(g,b,c,d,2);f[J5(1,0)]=Ha(g,b,c,e,0);f[J5(1,1)]=Ha(g,b,c,e,2);return f[J5(0,0)];}
function Kj(){var a=this;Hy.call(a);a.oI=0;a.iW=null;}
var IT=G(Bu);
function AEZ(){var a=this;B.call(a);a.Aw=null;a.AC=0;a.AB=0;a.Az=null;a.Ay=0;a.Av=0;}
function A6K(a,b){var c,d,e,f,g,h,i,j;c=a.Aw;d=a.AC;e=a.AB;f=a.Az;g=a.Ay;h=a.Av;i=Cw(c.bb,5.0);d=Bf((c.bb.bM.a-d|0)-i|0,Be((i-d|0)-c.W.k.a|0,b.h.a));j=Bf((c.bb.bM.b-e|0)-i|0,Be((i-e|0)-c.W.k.b|0,b.h.b));X(f,d+g|0,j+h|0);Eh(c,f,c.ba.k);}
function AH1(){var a=this;Ge.call(a);a.TR=null;a.Vp=0;a.MP=0;a.K5=0;}
function ANh(){var a=this;B.call(a);a.i5=null;a.fG=0;}
function MV(a){var b=new ANh();AZa(b,a);return b;}
function AZa(a,b){a.i5=b;a.fG=0;}
function Bd(a){var b,c;b=a.i5.data;c=a.fG;a.fG=c+1|0;return b[c];}
function SO(a){var b,c,d,e;if(a.fG!=a.i5.data.length){b=DG();c=a.i5.data.length;d=a.fG;e=new J;L(e);H(V(H(V(H(e,C(454)),c),C(490)),d),C(491));Bc(b,K(e));}}
function Qh(){B.call(this);this.x2=null;}
function A8v(a,b){var c,d,e,f;c=a.x2;d=Bh();e=new J;L(e);H(H(e,C(492)),b);Bc(d,K(e));d=c.n.cq;e=new R8;f=P(B,1);f.data[0]=b;CI(d,e,C(336),f);}
function V1(){B.call(this);this.BM=null;}
function A1Q(a,b){var c,d,e,f;c=a.BM;d=Bh();e=new J;L(e);H(H(e,C(493)),b);Bc(d,K(e));d=c.n.cq;e=new ACN;e.BI=c;f=P(B,1);f.data[0]=b;CI(d,e,C(494),f);}
function Qw(){B.call(this);this.FM=null;}
function AUf(a,b){var c,d,e;c=Bh();d=new J;L(d);H(H(d,C(495)),b);Bc(c,K(d));d=new AGD;d.D$=b;c=DG();BE(c);e=new AGB;e.tw=c;Qe(b,d,e);}
function AAB(){B.call(this);this.y8=null;}
function AW8(a,b){var c,d,e,f;c=a.y8;d=Bh();e=new J;L(e);H(H(e,C(496)),b);Bc(d,K(e));d=new AEh;e=new TS;e.zx=c;d.kC=I4();c=BP();d.eF=c;d.jQ=1;d.jy=0;d.s3=e;BA(c,Jt(b));BA(d.eF,b);c=Bh();e=d.kC;f=new J;L(f);H(H(f,C(497)),e);Bc(c,K(f));Io(b,d);}
function NU(){var a=this;EG.call(a);a.eb=null;a.g8=null;a.yw=null;a.oA=null;a.BK=null;}
function Bc5(a,b,c){var d=new NU();Vi(d,a,b,c);return d;}
function Vi(a,b,c,d){var e;KR(a,b,c,d);b=new WB;c=a.L;Q6(b,c.F);d=Ho(c);b.i0=d;b.dd=Fr(d);c=Fr(b.i0);b.dc=c;KW(b.e9,b.dd,c);e=new PV;e.vm=b;c=b.dd;c.gK=e;b.dc.gK=e;Gx(c,0);Gx(b.dc,0);c=b.dd;c.b8=1;b.vl=Xe(c,b.dc);Nl(b,I(CJ,[b.dd,b.dc,b.e9]));a.eb=b;AA0(b,a.gV);b=Lj(a,a.eb,30.0);a.g8=b;c=new X1;c.wv=a;b.i$=c;c=new X0;c.vO=a;b.i6=c;DZ(a.L,b);b=a.eb;b.dd.ma=a;b.dc.ma=a;Cn(a.L.F,a);}
function Z8(a,b){var c;c=a.eb;return c.dd!==b&&c.dc!==b&&a!==b?0:1;}
function A6e(a,b){Ey(a.g8,b.ce);AA0(a.eb,b);}
function NP(a,b,c){var d,e;d=!c?a.eb.dc:a.eb.dd;e=new Ts;e.Bw=a;e.Bv=b;e.Bu=c;Fu(d,b,e);}
function A7l(a){if(Z8(a,a.L.F.b2))Cn(a.L.F,null);a.g8=null;a.eb=null;}
function AZ1(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.eb;d=c.dd;c=c.dc;e=BG(d,b);f=BG(c,b);if(!e&&!f)return CN(I(Bt,[NN(a,1,C(413)),NN(a,0,C(414))]));g=!e?C(414):C(413);if(e)c=d;d=NN(a,e,g);h=a.eb;i=h.i0;j=a.hN;k=new RH;g=h.dd;h=h.dc;l=i.cm.F;k.mM=g;k.mL=h;k.zQ=l;g=a.L;BE(g);h=new QY;h.rE=g;return NY(JU(i,c,j,a,k,h),b,d);}
function NN(a,b,c){var d,e;d=new Bt;e=new Tj;e.Bh=a;e.A4=b;B5(d,e,c);return d;}
function AAA(a,b){var c,d,e;c=a.L;d=c.F.cq;e=new Th;e.xP=a;e.xO=b;Fp(d,N1(c,e));}
function A7m(a,b){var c,d;if(!AES(b)){if(b.be!=27)return 0;if(!AA_(b))AGx(a.L);else NI(a.g8);return 1;}c=a.L.F.b2;b=a.eb;d=b.dd;if(!(d!==c&&b.dc!==c))AAA(a,d!==c?0:1);return 1;}
var X$=G();
function A6I(a){return OI();}
var Ro=G();
function ARY(a){return OI();}
var Ys=G();
function AQz(a){return OI();}
function Gv(){var a=this;B.call(a);a.hX=null;a.c7=null;a.f7=null;a.fp=null;a.ij=null;a.l_=null;a.wf=null;}
function A$c(a){var b=new Gv();AIP(b,a);return b;}
function AIP(a,b){a.hX=b;a.c7=BP();a.f7=BP();a.fp=BP();a.l_=BP();a.ij=BP();}
function AGn(a){var b;b=a.hX;if(b!==null)b.c7.r$(a);}
function Lg(){var a=this;B.call(a);a.ey=null;a.kA=null;a.ka=0;}
function A9R(a,b,c){var d=new Lg();AJl(d,a,b,c);return d;}
function AJl(a,b,c,d){a.ey=b;a.kA=c;a.ka=d;}
function A6m(a){var b,c,d;b=AMR(a.ey);c=a.kA;d=new J;L(d);H(H(H(d,b),C(30)),c);return K(d);}
function AMS(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BS(a.ey,c.ey)&&BS(a.kA,c.kA)&&BS(C5(a.ka),C5(c.ka))?1:0;}return 0;}
function Fy(){var a=this;B.call(a);a.e4=null;a.gq=null;a.B6=0;}
function A9e(a,b,c){var d=new Fy();OL(d,a,b,c);return d;}
function OL(a,b,c,d){a.e4=b;a.gq=c;a.B6=d;}
function AXS(a){var b,c,d;b=a.e4;c=a.gq;d=new J;L(d);H(H(H(d,b),C(30)),c);return K(d);}
function ALf(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BS(a.e4,c.e4)&&BS(a.gq,c.gq)?1:0;}return 0;}
var IC=G(0);
function UW(){B.call(this);this.AO=null;}
function A3X(a,b,c,d){Ly(a.AO,b,c.bv,d.bv);}
function R3(){var a=this;B.call(a);a.mc=null;a.lB=null;a.s2=0;}
function UX(){B.call(this);this.yK=null;}
function A2s(a,b,c,d){Ly(a.yK,b,c.bv,d.bv);}
function JA(){B.call(this);this.pu=0;}
var Bc6=null;var Bc7=null;var Bc8=null;function AVx(a){var b=new JA();AJb(b,a);return b;}
function AJb(a,b){a.pu=b;}
function Z7(b){return !b?Bc7:Bc6;}
function ALg(){Bc6=AVx(1);Bc7=AVx(0);Bc8=F($rt_booleancls());}
var LA=G(0);
var Tw=G();
var NT=G(0);
var AIw=G();
function TW(){B.call(this);this.wF=null;}
function A4v(a,b,c,d){KA(a.wF,b,c.bv,d.bv);}
var TV=G();
function AX1(a,b){return b.ey.dL>=0?0:1;}
var TU=G();
function AVW(a,b){var c;a:{b:{b=b;if(b!==null){b=b.e4;if(b===null)break b;if(b.dL>=0)break b;}c=1;break a;}c=0;}return c;}
function TY(){B.call(this);this.Cz=null;}
function A33(a,b,c,d){KA(a.Cz,b,c.bv,d.bv);}
function AFX(){var a=this;B.call(a);a.uc=null;a.ud=null;a.ue=null;a.uf=0;a.uo=0;a.up=0;a.uq=0;a.ur=0;a.ul=0;a.um=0;a.Ev=0;}
function AYT(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uc;d=a.ud;e=a.ue;f=a.uf;g=a.uo;h=a.up;i=a.uq;j=a.ur;k=a.ul;l=a.um;m=a.Ev;n=Cw(c.bb,5.0);o=c.ba.ir();Ct(d,c.ba.k);Ct(e,c.ba.j);switch(f){case -1:f=Bf(h+(b.h.a-g|0)|0,c.bb.bM.a-n|0);g=o.a;h=h+i|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Be((i+b.h.a|0)-g|0,Be(o.a,n-c.W.j.a|0));}b:{switch(j){case -1:f=Be(n,Bf(l+(b.h.b-k|0)|0,(c.bb.bM.b+c.W.k.b|0)-n|0));g=o.b;h=l+m|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Be((m+b.h.b|0)-k|0,o.b);}Eh(c,e,d);}
function AG8(){B.call(this);this.Sj=null;}
var Xs=G();
var Gf=G();
var Bc9=null;var Bc$=null;var Bbn=null;var Bc_=null;var Bda=null;var Bdb=null;function AMP(){Bc9=new V_;Bc$=new V8;Bbn=new V9;Bc_=new V6;Bda=new V7;Bdb=new X6;}
function ALc(){var a=this;B.call(a);a.qz=null;a.qW=null;a.jv=null;a.cZ=null;a.pV=null;a.oa=null;a.jR=null;a.oS=null;a.qR=null;}
function AUv(a,b){var c=new ALc();A7g(c,a,b);return c;}
function A7g(a,b,c){a.cZ=MV(b);a.pV=c;}
function Q0(a){var b,c,d,e,f,g,h,i;b=Bd(a.cZ);c=new OA;R2(c);a.jv=c;a.jR=BP();d=0;while(d<b){e=Bd(a.cZ);f=Bd(a.cZ);g=EX(a.pV,e,f);D6(a.jv,g,BP());BA(a.jR,g);d=d+1|0;}c=NO(OV(a.jv));while(FT(c)){G9((Pt(c)).c3,Qk(a));}d=Bd(a.cZ);if(d==(-1))a.qz=null;else{a.oa=P(Gv,d);c=new Yt;h=a.cZ;i=a.pV;g=a.jR;c.ei=h;c.Be=i;c.AG=g;a.oS=c;c=new S9;c.eY=h;c.C7=i;c.Dl=g;a.qR=c;a.qz=SU(a,null);}if(Bd(a.cZ)!=(-1))a.qW=ABF(a.cZ,a.oa);}
function SU(a,b){var c,d,e,f,g,h,i,j,k;c=Bd(a.cZ);d=Bd(a.cZ);e=a.oS;f=Bd(e.ei);g=BP();h=0;while(h<f){BA(g,P1(e));h=h+1|0;}a:{switch(d){case -1:i=new Oy;i.hX=b;b=Bbn;i.c7=b;i.f7=b;i.fp=b;i.l_=b;i.ij=b;break a;case 0:i=A$c(b);break a;case 1:i=new L3;AIP(i,b);G9(i.fp,g);break a;default:}b=new CV;i=new J;L(i);V(H(i,C(498)),d);Bn(b,K(i));N(b);}i.fp=g;b=a.qR;d=Bd(b.eY);e=BP();j=0;while(j<d){BA(e,H8(b));j=j+1|0;}i.f7=e;i.l_=Qk(a);d=Bd(a.cZ);b=BP();j=0;while(j<d){e=P1(a.oS);g=H8(a.qR);f=Bd(a.cZ);k=new R3;k.mc=e;k.lB
=g;k.s2=f;BA(b,k);j=j+1|0;}i.ij=b;j=Bd(a.cZ);i.wf=j==(-1)?null:BL(a.jR,j);d=Bd(a.cZ);b=BP();j=0;while(j<d){BA(b,SU(a,i));j=j+1|0;}i.c7=b;a.oa.data[c]=i;return i;}
function Qk(a){var b,c,d,e;b=Bd(a.cZ);c=BP();d=0;while(d<b){e=Bd(a.cZ);BA(c,BL(a.jR,e));d=d+1|0;}return c;}
function WB(){var a=this;I0.call(a);a.i0=null;a.dd=null;a.dc=null;a.vl=null;a.nI=null;a.kv=0;}
function AA0(a,b){Fw(a.i0,b);a.e9.hI=b;Ed(a.dd,b);Ed(a.dc,b);}
function X1(){B.call(this);this.wv=null;}
function A2P(a){var b;b=a.wv;Cn(b.L.F,b.BK);}
function X0(){B.call(this);this.vO=null;}
function ATL(a){var b,c;b=a.vO;c=b.L.F.b2;if(!Z8(b,c))c=null;b.BK=c;}
function AHw(){var a=this;B.call(a);a.mS=null;a.qN=null;}
function AOk(){var a=this;B.call(a);a.GU=0;a.F_=0;a.sT=0;a.on=0;}
function AFZ(){var a=this;B.call(a);a.tQ=null;a.tR=null;}
function AZP(a){var b,c,d,e,f,g;b=a.tQ;c=a.tR;if(BS(c.mS,b.d.fQ)){c=c.qN;CY(b,c.on,c.sT,0);Cj((Bm(b)).bY,c.on,c.sT);Cj((Bm(b)).bP,c.F_,c.GU);}else{d=(B4(b.f0.CY)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){He(b);b=new ZC;b.Ak=g;b.Al=c;BE(b);c=new QB;c.we=b;$rt_globals.setTimeout(Bz(c,"onTimer"),0);}}}
function AF0(){var a=this;B.call(a);a.DG=null;a.DF=null;}
function A2B(a){JB(a.DG,a.DF);}
function In(){Fy.call(this);this.fZ=null;}
function A35(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=MG(a.fZ);c=new ABG;c.Du=a;d=new S3;d.uz=b;d.s6=c;e=new ADB;e.x4=C(40);f=P(EN,0);g=new Ps;g.oC=F(EN);h=F(EN).dq;h.$clinit();g.nh=BI((((AUN(h)).data.length-1|0)/32|0)+1|0);BE(f);h=new Qj;h.qC=f;if(h instanceof Ps){i=h;if(g.oC===i.oC){j=0;while(true){f=g.nh.data;if(j>=f.length)break;k=f[j];l=i.nh.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}G9(g,h);}m=new J;L(m);while(true){h=new W5;h.yX=e;h.yY=m;g=d.uz;i=new UJ;i.th=d;i.tg=h;if(!OU(g,i))break;}AD7(m,
0,C(22),0,M(C(22)));return K(LU(m,C(22)));}
function KY(){var a=this;Fy.call(a);a.iM=null;a.rP=0;}
function A7F(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!ALf(a,b))return 0;c=b;return BS(a.iM,c.iM);}return 0;}
function XX(){var a=this;B.call(a);a.sw=null;a.su=null;a.st=0;a.sv=0;}
function A4A(a,b){b=b;Fb(a.sw,a.su,b,a.st,a.sv);}
function J4(){var a=this;Fy.call(a);a.iB=null;a.h8=null;}
function AUH(a){var b,c,d;b=a.iB.e4.hd;c=a.h8;d=new J;L(d);b=H(d,b);Bq(b,46);H(b,c);return K(d);}
function AZC(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BS(a.iB,c.iB)&&BS(a.h8,c.h8)?1:0;}return 0;}
function XY(){var a=this;B.call(a);a.Eg=null;a.Ef=null;a.Ee=0;a.Ed=0;}
function ARG(a,b){b=b;Fb(a.Eg,a.Ef,b,a.Ee,a.Ed);}
function AKg(){var a=this;B.call(a);a.hd=null;a.dL=0;}
function A1_(a,b){var c=new AKg();AOv(c,a,b);return c;}
function AOv(a,b,c){a.hd=b;a.dL=c;}
function AU1(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.dL==c.dL&&BS(a.hd,c.hd)?1:0;}return 0;}
function AMR(a){var b,c,d;b=a.hd;c=a.dL;d=new J;L(d);b=H(d,b);Bq(b,40);Bq(V(b,c),41);return K(d);}
function Xl(){var a=this;B.call(a);a.z2=null;a.z5=null;a.z3=null;}
function AUP(a){var b,c,d,e;b=a.z2;c=a.z5;d=a.z3;e=DJ(d);if(c!==b.I)b.o8=e;else b.t1=e;c=b.t1;if(c!==null&&b.o8!==null)EJ(b.y.bq,DJ(d));else{if(c!==null)EJ(b.y.bq,c);c=b.o8;if(c!==null)EJ(b.y.bq,c);}}
function S8(){var a=this;B.call(a);a.zM=null;a.zK=null;a.zL=null;}
function A17(a){var b,c,d,e;b=a.zM;c=a.zK;d=a.zL;e=DJ(d);if(c!==b.O)b.ok=e;else b.Bs=e;c=b.Bs;if(c!==null&&b.ok!==null)EJ(b.y.bq,DJ(d));else{if(c!==null)EJ(b.y.bq,c);c=b.ok;if(c!==null)EJ(b.y.bq,c);}}
var ZK=G();
function AUt(a,b){ANz(b);}
function AC_(){var a=this;B.call(a);a.Eb=null;a.Ec=null;}
function APA(a){var b,c;b=a.Eb;c=a.Ec;EJ(b.y.bq,EW(c));}
function XM(){B.call(this);this.tt=null;}
function AR1(a,b){b=b;ABQ(a.tt,b);}
var Oy=G(Gv);
var L3=G(Gv);
function PV(){B.call(this);this.vm=null;}
function A7p(a,b){var c,d,e;c=a.vm;d=c.dd;if(d===b)c.kv=c.kv|1;e=c.dc;if(e===b)c.kv=c.kv|2;if((c.kv&3)==3){b=d.d.i;d=e.d.i;e=new ZH;e.ye=c;Zk(b,d,e,c.i0.cm.F.cq);}}
function WP(){B.call(this);this.C6=null;}
function AZS(a,b){var c;b=b;c=a.C6;Bv(c.bI,(CD(c.gw,b)).bv);}
function Rn(){B.call(this);this.rI=null;}
function A3W(a,b){b=b;ACy(a.rI,b);}
var Rs=G(0);
var EM=G(F3);
var Ob=G(EM);
var V_=G(Ob);
var OS=G(Ev);
var V8=G(OS);
var Pd=G(EK);
function A08(a){var b;b=new DX;Z(b);N(b);}
function AUk(a,b){var c;c=new DX;Z(c);N(c);}
function ATc(a,b){b=new DX;Z(b);N(b);}
var V9=G(Pd);
function AUq(a,b){var c;c=new BM;Z(c);N(c);}
function ATw(a){return 0;}
function AQ9(a){return Bc_;}
function APh(a){return 1;}
var V6=G();
function AO1(a){return 0;}
function A4R(a){var b;b=new Ni;Z(b);N(b);}
function AWv(a){var b;b=new CV;Z(b);N(b);}
var AAo=G(0);
var V7=G();
var X6=G();
function SL(){var a=this;B.call(a);a.nP=0;a.tI=null;}
function A8Y(a,b){var c,d,e;c=a.tI;b=b;d=c.AA;e=c.Ax;d=b.a<=d&&e<=b.b?1:0;a.nP=d;return d?0:1;}
function ABH(){var a=this;B.call(a);a.l=null;a.es=0;a.nQ=null;a.sh=0;a.iu=0;a.gj=0;a.bL=0;a.oD=null;}
function N2(a){return a.l.b3;}
function XH(a,b,c,d){var e,f,g,h,i,j;e=BP();f=a.es;g=0;if(c!=f)a.es=c;a:{switch(b){case -1073741784:h=new Tv;c=a.bL+1|0;a.bL=c;G2(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new R5;c=a.bL+1|0;a.bL=c;G2(h,c);break a;case -33554392:h=new Uo;c=a.bL+1|0;a.bL=c;G2(h,c);break a;default:c=a.iu+1|0;a.iu=c;if(d!==null)h=A$7(c);else{h=new GF;G2(h,0);g=1;}c=a.iu;if(c<=(-1))break a;if(c>=10)break a;a.nQ.data[c]=h;break a;}h=new AGu;G2(h,(-1));}while(true){if(FN(a.l)&&a.l.o==(-536870788))
{d=A7d(Co(a,2),Co(a,64));while(!DO(a.l)&&FN(a.l)){i=a.l;j=i.o;if(j&&j!=(-536870788)&&j!=(-536870871))break;CQ(d,Bp(i));i=a.l;if(i.bs!=(-536870788))continue;Bp(i);}i=Md(a,d);i.Z(h);}else if(a.l.bs==(-536870788)){i=IJ(h);Bp(a.l);}else{i=AAb(a,h);d=a.l;if(d.bs==(-536870788))Bp(d);}if(i!==null)BA(e,i);if(DO(a.l))break;if(a.l.bs==(-536870871))break;}if(a.l.n4==(-536870788))BA(e,IJ(h));if(a.es!=f&&!g){a.es=f;d=a.l;d.hP=f;d.o=d.bs;d.fR=d.f1;j=d.dU;d.A=j+1|0;d.kg=j;Gl(d);}switch(b){case -1073741784:break;case -536870872:d
=new Yl;GG(d,e,h);return d;case -268435416:d=new AFe;GG(d,e,h);return d;case -134217688:d=new ABK;GG(d,e,h);return d;case -67108824:d=new UN;GG(d,e,h);return d;case -33554392:d=new Eo;GG(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A$0(BL(e,0),h);default:return A9y(e,h);}return IJ(h);}d=new K$;GG(d,e,h);return d;}
function ANA(a){var b,c,d,e,f,g,h;b=BI(4);c=(-1);d=(-1);if(!DO(a.l)&&FN(a.l)){e=b.data;c=Bp(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B6(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bs;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bp(f);f=a.l;g=f.bs;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bp(f);return A63(e,3);}return A63(e,2);}if(!Co(a,2))return AHK(b[0]);if(Co(a,64))return A5u(b[0]);return A0G(b[0]);}e=b.data;c=1;while(c<4&&!DO(a.l)&&FN(a.l)){h=c+1|0;e[c]=Bp(a.l);c=h;}if(c==1){h=e[0];if(!(Bdc.F5(h)==Bdd?0:1))return XA(a,e[0]);}if
(!Co(a,2))return A_u(b,c);if(Co(a,64)){f=new Xv;QO(f,b,c);return f;}f=new ADM;QO(f,b,c);return f;}
function AAb(a,b){var c,d,e,f,g,h,i;if(FN(a.l)&&!LE(a.l)&&Of(a.l.o)){if(Co(a,128)){c=ANA(a);if(!DO(a.l)){d=a.l;e=d.bs;if(!(e==(-536870871)&&!(b instanceof GF))&&e!=(-536870788)&&!FN(d))c=M8(a,b,c);}}else if(!ZE(a.l)&&!AEG(a.l)){f=new Q1;L(f);while(!DO(a.l)&&FN(a.l)&&!ZE(a.l)&&!AEG(a.l)){if(!(!LE(a.l)&&!a.l.o)&&!(!LE(a.l)&&Of(a.l.o))){g=a.l.o;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bp(a.l);if(!M6(e))Bq(f,e&65535);else KI(f,G3(e));}if(!Co(a,2)){c=new AB3;Eb(c);c.cG
=K(f);e=f.H;c.bT=e;c.qh=A4m(e);c.oG=A4m(c.bT);h=0;while(h<(c.bT-1|0)){Te(c.qh,Q(c.cG,h),(c.bT-h|0)-1|0);Te(c.oG,Q(c.cG,(c.bT-h|0)-1|0),(c.bT-h|0)-1|0);h=h+1|0;}}else if(Co(a,64))c=A_t(f);else{c=new Qg;Eb(c);c.ik=K(f);c.bT=f.H;}}else c=M8(a,b,AGg(a,b));}else{d=a.l;if(d.bs!=(-536870871))c=M8(a,b,AGg(a,b));else{if(b instanceof GF)N(Cp(C(22),d.b3,QZ(d)));c=IJ(b);}}a:{if(!DO(a.l)){e=a.l.bs;if(!(e==(-536870871)&&!(b instanceof GF))&&e!=(-536870788)){f=AAb(a,b);if(c instanceof Dj&&!(c instanceof Gn)&&!(c instanceof C9)
&&!(c instanceof Fv)){i=c;if(!f.cb(i.S)){c=new W1;FG(c,i.S,i.f,i.kx);c.S.Z(c);}}if((f.jA()&65535)!=43)c.Z(f);else c.Z(f.S);break a;}}if(c===null)return null;c.Z(b);}if((c.jA()&65535)!=43)return c;return c.S;}
function M8(a,b,c){var d,e,f,g,h;d=a.l;e=d.bs;if(c!==null&&!(c instanceof Cf)){switch(e){case -2147483606:Bp(d);d=new X8;DA(d,c,b,e);Pv();c.Z(Bde);return d;case -2147483605:Bp(d);d=new AAz;DA(d,c,b,(-2147483606));Pv();c.Z(Bde);return d;case -2147483585:Bp(d);d=new RL;DA(d,c,b,(-536870849));Pv();c.Z(Bde);return d;case -2147483525:f=new Qc;d=GY(d);g=a.gj+1|0;a.gj=g;Ns(f,d,c,b,(-536870849),g);Pv();c.Z(Bde);return f;case -1073741782:case -1073741781:Bp(d);d=new Tn;DA(d,c,b,e);c.Z(d);return d;case -1073741761:Bp(d);d
=new ABg;DA(d,c,b,(-536870849));c.Z(b);return d;case -1073741701:h=new Vw;d=GY(d);e=a.gj+1|0;a.gj=e;Ns(h,d,c,b,(-536870849),e);c.Z(h);return h;case -536870870:case -536870869:Bp(d);if(c.jA()!=(-2147483602)){d=new C9;DA(d,c,b,e);}else if(Co(a,32)){d=new To;DA(d,c,b,e);}else{d=new ZM;f=AAl(a.es);DA(d,c,b,e);d.n3=f;}c.Z(d);return d;case -536870849:Bp(d);d=new Hf;DA(d,c,b,(-536870849));c.Z(b);return d;case -536870789:h=new GZ;d=GY(d);e=a.gj+1|0;a.gj=e;Ns(h,d,c,b,(-536870849),e);c.Z(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bp(d);d=new AGN;FG(d,f,b,e);f.f=d;return d;case -2147483585:Bp(d);c=new WV;FG(c,f,b,(-2147483585));return c;case -2147483525:c=new AAa;TO(c,GY(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bp(d);d=new ABf;FG(d,f,b,e);f.f=d;return d;case -1073741761:Bp(d);c=new ADX;FG(c,f,b,(-1073741761));return c;case -1073741701:c=new Td;TO(c,GY(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bp(d);d=A9O(f,b,e);f.f=d;return d;case -536870849:Bp(d);c
=new Fv;FG(c,f,b,(-536870849));return c;case -536870789:return A$z(GY(d),f,b,(-536870789));default:}return c;}
function AGg(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof GF;while(true){a:{e=a.l;f=e.bs;if((f&(-2147418113))==(-2147483608)){Bp(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.es=g;else{if(f!=(-1073741784))g=a.es;c=XH(a,f,g,b);e=a.l;if(e.bs!=(-536870871))N(Cp(C(22),e.b3,e.dU));Bp(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bp(e);c
=A6Q(0);break a;case -2147483577:Bp(e);c=new ZI;B9(c);break a;case -2147483558:Bp(e);c=new Xr;h=a.bL+1|0;a.bL=h;ANN(c,h);break a;case -2147483550:Bp(e);c=A6Q(1);break a;case -2147483526:Bp(e);c=new AFB;B9(c);break a;case -536870876:Bp(e);a.bL=a.bL+1|0;if(Co(a,8)){if(Co(a,1)){c=A9q(a.bL);break a;}c=A88(a.bL);break a;}if(Co(a,1)){c=A9D(a.bL);break a;}c=A9Y(a.bL);break a;case -536870866:Bp(e);if(Co(a,32)){c=A95();break a;}c=A9V(AAl(a.es));break a;case -536870821:Bp(e);i=0;c=a.l;if(c.bs==(-536870818)){i=1;Bp(c);}c
=Md(a,Ic(a,i));c.Z(b);e=a.l;if(e.bs!=(-536870819))N(Cp(C(22),e.b3,e.dU));Z1(e,1);Bp(a.l);break a;case -536870818:Bp(e);a.bL=a.bL+1|0;if(!Co(a,8)){c=new L6;B9(c);break a;}c=new YS;e=AAl(a.es);B9(c);c.Bj=e;break a;case 0:j=e.f1;if(j!==null)c=Md(a,j);else{if(DO(e)){c=IJ(b);break a;}c=AHK(f&65535);}Bp(a.l);break a;default:break b;}Bp(e);c=new L6;B9(c);break a;}h=(f&2147483647)-48|0;if(a.iu<h)N(Cp(C(22),Gt(e),QZ(a.l)));Bp(e);a.bL=a.bL+1|0;c=!Co(a,2)?A$i(h,a.bL):Co(a,64)?A9r(h,a.bL):A_r(h,a.bL);a.nQ.data[h].p6=1;a.sh
=1;break a;}if(f>=0&&!HN(e)){c=XA(a,f);Bp(a.l);}else if(f==(-536870788))c=IJ(b);else{if(f!=(-536870871)){b=new KZ;c=!HN(a.l)?Xn(f&65535):a.l.f1.M();e=a.l;NB(b,c,e.b3,e.dU);N(b);}if(d){b=new KZ;e=a.l;NB(b,C(22),e.b3,e.dU);N(b);}c=IJ(b);}}}if(f!=(-16777176))break;}return c;}
function Ic(a,b){var c,d,e,f,g,h,i,j,$$je;c=A7d(Co(a,2),Co(a,64));E8(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DO(a.l))break a;h=a.l;b=h.bs;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CQ(c,d);d=Bp(a.l);h=a.l;if(h.bs!=(-536870874)){d=38;break d;}if(h.o==(-536870821)){Bp(h);e=1;d=(-1);break d;}Bp(h);if(g){c=Ic(a,0);break d;}if(a.l.bs==(-536870819))break d;Xb(c,Ic(a,0));break d;case -536870867:if(!g){b=h.o;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bp(h);h=a.l;i=h.bs;if(HN(h))break c;if
(i<0){j=a.l.o;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Of(i))break e;i=i&65535;break e;}catch($$e){$$je=Fh($$e);if($$je instanceof EQ){break b;}else{throw $$e;}}}try{Ce(c,d,i);}catch($$e){$$je=Fh($$e);if($$je instanceof EQ){break b;}else{throw $$e;}}Bp(a.l);d=(-1);break d;}}if(d>=0)CQ(c,d);d=45;Bp(a.l);break d;case -536870821:if(d>=0){CQ(c,d);d=(-1);}Bp(a.l);j=0;h=a.l;if(h.bs==(-536870818)){Bp(h);j=1;}if(!e)AKP(c,Ic(a,j));else Xb(c,Ic(a,j));e=0;Bp(a.l);break d;case -536870819:if(d>=0)CQ(c,
d);d=93;Bp(a.l);break d;case -536870818:if(d>=0)CQ(c,d);d=94;Bp(a.l);break d;case 0:if(d>=0)CQ(c,d);h=a.l.f1;if(h===null)d=0;else{AOj(c,h);d=(-1);}Bp(a.l);break d;default:}if(d>=0)CQ(c,d);d=Bp(a.l);}g=0;}N(Cp(C(22),N2(a),a.l.dU));}N(Cp(C(22),N2(a),a.l.dU));}if(!f){if(d>=0)CQ(c,d);return c;}N(Cp(C(22),N2(a),a.l.dU-1|0));}
function XA(a,b){var c,d,e;c=M6(b);if(Co(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A0G(b&65535);}if(Co(a,64)&&b>128){if(c){d=new Yf;Eb(d);d.bT=2;d.op=HE(HC(b));return d;}if(Rq(b))return AUX(b&65535);if(!T_(b))return A5u(b&65535);return A2O(b&65535);}}if(!c){if(Rq(b))return AUX(b&65535);if(!T_(b))return AHK(b&65535);return A2O(b&65535);}d=new Ew;Eb(d);d.bT=2;d.hE=b;e=(G3(b)).data;d.kL=e[0];d.j8=e[1];return d;}
function Md(a,b){var c,d,e;if(!AML(b)){if(!b.X){if(b.iX())return ASg(b);return AW_(b);}if(!b.iX())return A29(b);c=new Nt;AEb(c,b);return c;}c=AHa(b);d=new P0;B9(d);d.n7=c;d.yx=c.bp;if(!b.X){if(b.iX())return AI_(ASg(Kf(b)),d);return AI_(AW_(Kf(b)),d);}if(!b.iX())return AI_(A29(Kf(b)),d);c=new SB;e=new Nt;AEb(e,Kf(b));AKq(c,e,d);return c;}
function Kh(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Co(a,b){return (a.es&b)!=b?0:1;}
function AFg(){var a=this;B.call(a);a.AQ=null;a.AR=null;a.AP=null;}
function AOw(a,b){var c,d,e,f,g;c=a.AQ;d=a.AR;e=a.AP;f=new AGm;g=AEu(DJ(d));AN4(f,b,null,g);IH(c,f);e.e();}
function AFf(){B.call(this);this.zc=null;}
function AXl(a,b){Bc(a.zc,b);}
function ACq(){B.call(this);this.zy=null;}
function AYt(a,b){Me(a.zy,b);}
function AAj(){B.call(this);this.Ba=null;}
function A4S(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.Ba;d=CP(c[0]);e=(CP(c[1])).data[0];if(!ADV(b.i)){c=b.i;if(c.cI==e){e=b.rF;f=MV(d);Ff(c.eg);Ff(c.d6);N4(c);while(f.fG>=f.i5.data.length?0:1){if(Bd(f)==(-1))continue;g=XG(c,Bd(f));h=Pc(Cg(c,g.bw),g.bB);if(Bd(f)==(-1)){if(!e)continue;h.b_=0;h.bO=h.bO|4;continue;}i=XG(c,Bd(f));j=Bd(f);k=Bd(f);D6(c.eg,g,i);l=c.d6;m=BP();if(CD(l,i)===null)D6(l,i,m);BA(CD(c.d6,i),g);h.b_=j;h.bO=k;}JF(b);if(b.GW){n=Kv(ER(),b.De);if(A9f(n,Bs(100))){b=Fn(b);c=new J;L(c);H(Ir(H(H(c,
b),C(499)),n),C(210));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function ACH(){var a=this;B.call(a);a.rY=null;a.rZ=null;}
function AZQ(a){var b,c;b=a.rY;c=a.rZ;Cn(b.cm.F,c);ADo(b);}
function Sm(){var a=this;B.call(a);a.z4=null;a.kY=null;}
function S5(){B.call(this);this.As=null;}
function ARZ(a,b){var c,d;c=a.As;c.le=b;Fc(c.I,b.m7);Fc(c.K,c.le.m8);b=c.nw;d=c.le;b.fF=d;c.gx.dY=d;}
var AHb=G();
function AHz(b){var c,d,e,f,g,h,i,j;c=A0p();d=CR(b);Bv(c,d);e=0;f=0;while(f<d){g=Cg(b,f);h=J8(g);Bv(c,h);i=0;while(i<h){j=KB(g,i);HD(c,e,MW(j));e=e+MW(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return Sd(c);}
function AHh(b){var c,d,e,f,g,h,i,j,k;c=Bd(b);d=P(Ix,c);e=d.data;f=0;while(f<c){a:{g=Bd(b);if(g!=(-1)){h=Bd(b);i=Bd(b);if(i==(-1))e[g]=A0$(h);else{j=new Ix;j.fN=h;j.oK=BI(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].oK.data[k]=Bd(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function Zk(b,c,d,e){var f,g,h,i;f=FD(b);g=FD(c);h=AHz(b);i=AHz(c);b=new AEA;b.A_=d;CI(e,b,C(500),I(B,[f,h,g,i]));}
function Xk(){B.call(this);this.tV=null;}
function A2L(a,b){var c,d;c=a.tV;c.lU=b;Fc(c.O,b.m7);Fc(c.U,c.lU.m8);b=c.nr;d=c.lU;b.fF=d;c.gc.dY=d;}
var Jc=G(0);
function QM(){var a=this;B.call(a);a.l9=0;a.EC=null;}
function A5p(a,b){var c;c=new J;L(c);H(H(c,C(501)),b);$rt_globals.console.info($rt_ustr(K(c)));a.l9=a.l9+1|0;Io(b,a);}
function A2y(a,b){var c;c=new J;L(c);H(H(c,C(502)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AWA(a){var b;b=a.l9-1|0;a.l9=b;if(!b)Bc(Bh(),C(503));}
function Zu(){var a=this;B.call(a);a.GK=null;a.zB=null;}
function ARO(a,b){var c,d,e,f;c=b.data;b=a.zB;d=Bh();e=new J;L(e);H(H(e,C(504)),b);Bc(d,K(e));b=Bh();f=c.length;d=new J;L(d);V(H(d,C(505)),f);Bc(b,K(d));}
function Zv(){B.call(this);this.GS=null;}
function A5P(a,b){$rt_globals.console.info($rt_ustr(b));}
function AEH(){var a=this;B.call(a);a.H0=null;a.lo=null;}
function ARm(a,b){var c;c=a.lo;b=b;a.lo=Z7(!c.pu&&!b.ff?0:1);return 1;}
function AD5(){var a=this;B.call(a);a.wz=null;a.wA=null;}
function A6N(a){var b,c;b=a.wz;c=a.wA;EJ(b.y.bq,EW(c));}
function RG(){EM.call(this);this.j0=null;}
function T5(a){var b;b=new ACS;OB(b,a.j0);return b;}
function Vs(){EM.call(this);this.A5=null;}
function NO(a){var b;b=new Vk;OB(b,a.A5);return b;}
function RI(){F3.call(this);this.xZ=null;}
function Si(){var a=this;B.call(a);a.u0=null;a.uZ=null;}
function A3I(a){var b,c;b=a.u0;c=EW(a.uZ);CZ(b.iq,c);}
function X9(){B.call(this);this.xJ=null;}
function A1D(a,b){b=b;Qi(a.xJ,b);}
function VT(){B.call(this);this.wk=null;}
function A3w(a,b){b=b;HS(a.wk,b);}
function M5(){var a=this;Lg.call(a);a.lK=null;a.yr=0;}
function A0d(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AMS(a,b))return 0;c=b;return BS(a.lK,c.lK);}return 0;}
function Th(){var a=this;B.call(a);a.xP=null;a.xO=0;}
function A3N(a,b){NP(a.xP,b,a.xO);}
function AEA(){B.call(this);this.A_=null;}
function A3o(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.A_;d=CP(c[0]);c=MV(d);e=new VZ;d=AHh(c);f=AHh(c);g=Bd(c);h=P(JV,g);i=h.data;j=0;while(j<g){i[j]=Ef(Bd(c),Bd(c),Bd(c),Bd(c),Bd(c));j=j+1|0;}AIJ(e,d,f,h);b.g(e);}
function Yt(){var a=this;B.call(a);a.ei=null;a.Be=null;a.AG=null;}
function P1(a){var b,c,d,e,f,g,h,i;a:{b=Bd(a.ei);switch(b){case 3:break;case 5:c=QR(a);d=O1(a);b=Bd(a.ei);e=Bd(a.ei);f=Bd(a.ei);g=BP();h=0;while(h<f){BA(g,O1(a));h=h+1|0;}i=new M5;AJl(i,c,d,b);i.lK=g;i.yr=e;break a;default:c=new CV;d=new J;L(d);V(H(d,C(506)),b);Bn(c,K(d));N(c);}i=A9R(QR(a),O1(a),Bd(a.ei));}return i;}
function QR(a){var b,c;b=Bd(a.ei);c=Bd(a.ei);return A1_(EX(a.Be,b,c),Bd(a.ei));}
function O1(a){var b;b=Bd(a.ei);if(b==(-1))return null;return BL(a.AG,b);}
function S9(){var a=this;B.call(a);a.eY=null;a.C7=null;a.Dl=null;}
function H8(a){var b,c,d,e,f;a:{b:{b=Bd(a.eY);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=YX(a);d=R9(a);b=Bd(a.eY);e=T8(a);f=new KY;OL(f,c,d,2);f.rP=b;f.iM=e;break a;case 4:c=H8(a);d=H8(a);f=new J4;OL(f,c.e4,c.gq,9);f.iB=c;f.h8=d;break a;case 5:f=A9e(YX(a),R9(a),Bd(a.eY));break a;case 9:c=T8(a);f=new In;d=!EY(c)&&BL(c,0)!==null?(BL(c,0)).gq:null;OL(f,null,null,7);f.fZ=BP();c=B$(c);while(Cc(c)){e=Cd(c);if(!(e instanceof In))BA(f.fZ,e);else{e=e;G9(f.fZ,e.fZ);}}f.gq=d;break a;default:break b;}f
=null;break a;}c=new CV;d=new J;L(d);V(H(d,C(507)),b);Bn(c,K(d));N(c);}return f;}
function YX(a){var b,c;b=Bd(a.eY);c=Bd(a.eY);return A1_(EX(a.C7,b,c),Bd(a.eY));}
function R9(a){var b;b=Bd(a.eY);if(b==(-1))return null;return BL(a.Dl,b);}
function T8(a){var b,c,d;b=Bd(a.eY);c=BP();d=0;while(d<b){BA(c,H8(a));d=d+1|0;}return c;}
function BX(){var a=this;B.call(a);a.f=null;a.cR=0;a.qd=null;a.kx=0;}
var A_5=0;function B9(a){var b;b=A_5;A_5=b+1|0;a.qd=II(b);}
function Ov(a,b){var c;c=A_5;A_5=c+1|0;a.qd=II(c);a.f=b;}
function Jm(a,b,c,d){var e;e=d.B;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Ju(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A0T(a,b){a.kx=b;}
function A0q(a){return a.kx;}
function AIR(a){var b,c,d;b=a.qd;c=a.u();d=new J;L(d);Bq(d,60);b=H(d,b);Bq(b,58);Bq(H(b,c),62);return K(d);}
function AWf(a){return AIR(a);}
function AWG(a){return a.f;}
function AXo(a,b){a.f=b;}
function A67(a,b){return 1;}
function A72(a){return null;}
function Le(a){var b;a.cR=1;b=a.f;if(b!==null){if(!b.cR){b=b.hh();if(b!==null){a.f.cR=1;a.f=b;}a.f.fk();}else if(b instanceof Iy&&b.fo.p6)a.f=b.f;}}
function AKz(){A_5=1;}
function WH(){var a=this;B.call(a);a.zr=null;a.zq=0.0;}
function Oh(a,b){return Mc(a.zr,b,a.zq*2.0+0.875);}
function AGM(){var a=this;B.call(a);a.BD=null;a.BE=0;a.BF=0;}
function A5y(a,b){var c,d,e,f,g,h,i;c=b.data;d=a.BD;e=a.BE;f=a.BF;g=PU(b);d.lk.data[e]=g;d.oP.data[e]=c.length;h=Bba.data;if(h[f-4080|0]!=g)d.jk=d.jk+1|0;else d.mb=d.mb+1|0;if((d.mb+d.jk|0)==h.length){e=0;while(e<d.lk.data.length){b=Bh();f=4080+e|0;i=AGE(d.lk.data[e]);g=d.oP.data[e];c=new J;L(c);Bq(c,91);V(H(H(H(V(c,f),C(508)),i),C(509)),g);Bc(b,K(c));e=e+1|0;}if(!d.jk)Bc(Bh(),C(510));else{b=Bh();e=d.mb;c=new J;L(c);V(H(c,C(511)),e);Bc(b,K(c));b=Bh();e=d.jk;d=new J;L(d);V(H(d,C(512)),e);Bc(b,K(d));}}}
function AGP(){B.call(this);this.sO=null;}
function A60(a,b){Bc(a.sO,b);}
var R8=G();
function A2K(a,b){ANz(b);}
function ACN(){B.call(this);this.BI=null;}
function ATd(a,b){Um(a.BI,b);}
function AGD(){B.call(this);this.D$=null;}
function A6v(a,b){var c;c=a.D$;ALb(Om(c),c,b);}
function AGB(){B.call(this);this.tw=null;}
function AQq(a,b){Bc(a.tw,b);}
function AEh(){var a=this;B.call(a);a.s3=null;a.kC=null;a.eF=null;a.jQ=0;a.jy=0;}
function A6r(a,b){var c,d,e,f;if(a.kC!==I4()){b=new Bu;Z(b);N(b);}BA(a.eF,Jt(b));BA(a.eF,b);c=Bh();d=a.jy;a.jy=d+1|0;e=a.eF.q;f=new J;L(f);V(H(H(H(V(H(f,C(513)),d),C(286)),b),C(514)),e);Bc(c,K(f));a.jQ=a.jQ+1|0;Io(b,a);}
function AUK(a,b){var c,d,e,f;if(a.kC!==I4()){b=new Bu;Z(b);N(b);}BA(a.eF,Om(b));BA(a.eF,b);c=Bh();d=a.jy;a.jy=d+1|0;e=a.eF.q;f=new J;L(f);V(H(H(H(V(H(f,C(515)),d),C(286)),b),C(514)),e);Bc(c,K(f));}
function A1g(a){var b,c,d,e,f,g;if(a.kC!==I4()){b=new Bu;Z(b);N(b);}c=a.jQ-1|0;a.jQ=c;if(!c){b=Bh();c=a.eF.q;d=new J;L(d);V(H(d,C(516)),c);Bc(b,K(d));b=a.eF;d=a.s3;e=P(B,b.q);f=e.data;c=0;g=f.length;while(c<g){f[c]=BL(b,c);c=c+1|0;}Um(d.zx,e);}}
function TS(){B.call(this);this.zx=null;}
function YG(){B.call(this);this.sm=null;}
function A3v(a,b){b=b;PM(a.sm,b);}
function XW(){B.call(this);this.y5=null;}
function A8W(a,b){b=b;HS(a.y5,b);}
function C8(){var a=this;BX.call(a);a.p6=0;a.eP=0;}
var Bde=null;function Pv(){Pv=Bl(C8);A1F();}
function A$7(a){var b=new C8();G2(b,a);return b;}
function G2(a,b){Pv();B9(a);a.eP=b;}
function APz(a,b,c,d){var e,f;e=JR(d,a.eP);NM(d,a.eP,b);f=a.f.c(b,c,d);if(f<0)NM(d,a.eP,e);return f;}
function A3J(a){return a.eP;}
function ASl(a){return C(517);}
function APT(a,b){return 0;}
function A1F(){var b;b=new ZF;B9(b);Bde=b;}
function HI(){var a=this;B.call(a);a.bn=null;a.hP=0;a.fU=0;a.w8=0;a.n4=0;a.bs=0;a.o=0;a.BJ=0;a.f1=null;a.fR=null;a.A=0;a.kJ=0;a.dU=0;a.kg=0;a.b3=null;}
var Bdf=null;var Bdc=null;var Bdd=0;function Z1(a,b){if(b>0&&b<3)a.fU=b;if(b==1){a.o=a.bs;a.fR=a.f1;a.A=a.kg;a.kg=a.dU;Gl(a);}}
function HN(a){return a.f1===null?0:1;}
function LE(a){return a.fR===null?0:1;}
function Bp(a){Gl(a);return a.n4;}
function GY(a){var b;b=a.f1;Gl(a);return b;}
function Gl(a){var b,c,d,e,f,g,h,$$je;a.n4=a.bs;a.bs=a.o;a.f1=a.fR;a.dU=a.kg;a.kg=a.A;while(true){b=0;c=a.A>=a.bn.data.length?0:MK(a);a.o=c;a.fR=null;if(a.fU==4){if(c!=92)return;c=a.A;d=a.bn.data;c=c>=d.length?0:d[Ca(a)];a.o=c;switch(c){case 69:break;default:a.o=92;a.A=a.kJ;return;}a.fU=a.w8;a.o=a.A>(a.bn.data.length-2|0)?0:MK(a);}a:{c=a.o;if(c!=92){e=a.fU;if(e==1)switch(c){case 36:a.o=(-536870876);break a;case 40:if(a.bn.data[a.A]!=63){a.o=(-2147483608);break a;}Ca(a);c=a.bn.data[a.A];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.o=(-134217688);Ca(a);break b;default:N(Cp(C(22),Gt(a),a.A));}a.o=(-67108824);Ca(a);}else{switch(c){case 33:break;case 60:Ca(a);c=a.bn.data[a.A];e=1;break b;case 61:a.o=(-536870872);Ca(a);break b;case 62:a.o=(-33554392);Ca(a);break b;default:f=AOh(a);a.o=f;if(f<256){a.hP=f;f=f<<16;a.o=f;a.o=(-1073741784)|f;break b;}f=f&255;a.o=f;a.hP=f;f=f<<16;a.o=f;a.o=(-16777176)|f;break b;}a.o=(-268435416);Ca(a);}}if(!e)break;}break a;case 41:a.o=(-536870871);break a;case 42:case 43:case 63:e
=a.A;d=a.bn.data;switch(e>=d.length?42:d[e]){case 43:a.o=c|(-2147483648);Ca(a);break a;case 63:a.o=c|(-1073741824);Ca(a);break a;default:}a.o=c|(-536870912);break a;case 46:a.o=(-536870866);break a;case 91:a.o=(-536870821);Z1(a,2);break a;case 93:if(e!=2)break a;a.o=(-536870819);break a;case 94:a.o=(-536870818);break a;case 123:a.fR=AJ5(a,c);break a;case 124:a.o=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.o=(-536870874);break a;case 45:a.o=(-536870867);break a;case 91:a.o=(-536870821);break a;case 93:a.o
=(-536870819);break a;case 94:a.o=(-536870818);break a;default:}}else{c=a.A>=(a.bn.data.length-2|0)?(-1):MK(a);c:{a.o=c;switch(c){case -1:N(Cp(C(22),Gt(a),a.A));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.o
=AI2(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fU!=1)break a;a.o=(-2147483648)|c;break a;case 65:a.o=(-2147483583);break a;case 66:a.o=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cp(C(22),Gt(a),a.A));case 68:case 83:case 87:case 100:case 115:case 119:a.fR=TJ(EX(a.bn,
a.kJ,1),0);a.o=0;break a;case 71:a.o=(-2147483577);break a;case 80:case 112:break c;case 81:a.w8=a.fU;a.fU=4;b=1;break a;case 90:a.o=(-2147483558);break a;case 97:a.o=7;break a;case 98:a.o=(-2147483550);break a;case 99:c=a.A;d=a.bn.data;if(c>=(d.length-2|0))N(Cp(C(22),Gt(a),a.A));a.o=d[Ca(a)]&31;break a;case 101:a.o=27;break a;case 102:a.o=12;break a;case 110:a.o=10;break a;case 114:a.o=13;break a;case 116:a.o=9;break a;case 117:a.o=AAD(a,4);break a;case 120:a.o=AAD(a,2);break a;case 122:a.o=(-2147483526);break a;default:}break a;}g
=AMT(a);h=0;if(a.o==80)h=1;try{a.fR=TJ(g,h);}catch($$e){$$je=Fh($$e);if($$je instanceof Nw){N(Cp(C(22),Gt(a),a.A));}else{throw $$e;}}a.o=0;}}if(b)continue;else break;}}
function AMT(a){var b,c,d,e,f,g;b=new J;Gm(b,10);c=a.A;d=a.bn;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EX(d,Ca(a),1);f=new J;L(f);H(H(f,C(518)),b);return K(f);}Ca(a);c=0;a:{while(true){g=a.A;d=a.bn.data;if(g>=(d.length-2|0))break;c=d[Ca(a)];if(c==125)break a;Bq(b,c);}}if(c!=125)N(Cp(C(22),a.b3,a.A));}if(!b.H)N(Cp(C(22),a.b3,a.A));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(518)),f);return K(b);}b:{c:{if(M(f)>3){if(Ok(f,C(518)))break c;if(Ok(f,C(519)))break c;}break b;}f=DD(f,2);}return f;}
function AJ5(a,b){var c,d,e,f,g,$$je;c=new J;Gm(c,4);d=(-1);e=2147483647;a:{while(true){f=a.A;g=a.bn.data;if(f>=g.length)break a;b=g[Ca(a)];if(b==125)break a;if(b==44&&d<0)try{d=Lw(Eu(c),10);AJ_(c,0,ALh(c));continue;}catch($$e){$$je=Fh($$e);if($$je instanceof DB){break;}else{throw $$e;}}Bq(c,b&65535);}N(Cp(C(22),a.b3,a.A));}if(b!=125)N(Cp(C(22),a.b3,a.A));if(c.H>0)b:{try{e=Lw(Eu(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Fh($$e);if($$je instanceof DB){}else{throw $$e;}}N(Cp(C(22),a.b3,a.A));}else if
(d<0)N(Cp(C(22),a.b3,a.A));if((d|e|(e-d|0))<0)N(Cp(C(22),a.b3,a.A));b=a.A;g=a.bn.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.o=(-2147483525);Ca(a);break c;case 63:a.o=(-1073741701);Ca(a);break c;default:}a.o=(-536870789);}c=new Yz;c.gg=d;c.ge=e;return c;}
function Gt(a){return a.b3;}
function DO(a){return !a.bs&&!a.o&&a.A==a.BJ&&!HN(a)?1:0;}
function Of(b){return b<0?0:1;}
function FN(a){return !DO(a)&&!HN(a)&&Of(a.bs)?1:0;}
function ZE(a){var b;b=a.bs;return b<=56319&&b>=55296?1:0;}
function AEG(a){var b;b=a.bs;return b<=57343&&b>=56320?1:0;}
function T_(b){return b<=56319&&b>=55296?1:0;}
function Rq(b){return b<=57343&&b>=56320?1:0;}
function AAD(a,b){var c,d,e,f,$$je;c=new J;Gm(c,b);d=a.bn.data.length-2|0;e=0;while(true){f=BR(e,b);if(f>=0)break;if(a.A>=d)break;Bq(c,a.bn.data[Ca(a)]);e=e+1|0;}if(!f)a:{try{b=Lw(Eu(c),16);}catch($$e){$$je=Fh($$e);if($$je instanceof DB){break a;}else{throw $$e;}}return b;}N(Cp(C(22),a.b3,a.A));}
function AI2(a){var b,c,d,e,f,g;b=3;c=1;d=a.bn.data;e=d.length-2|0;f=AEn(d[a.A],8);switch(f){case -1:break;default:if(f>3)b=2;Ca(a);a:{while(true){if(c>=b)break a;g=a.A;if(g>=e)break a;g=AEn(a.bn.data[g],8);if(g<0)break;f=(f*8|0)+g|0;Ca(a);c=c+1|0;}}return f;}N(Cp(C(22),a.b3,a.A));}
function AOh(a){var b,c,d,e;b=1;c=a.hP;a:while(true){d=a.A;e=a.bn.data;if(d>=e.length)N(Cp(C(22),a.b3,d));b:{c:{switch(e[d]){case 41:Ca(a);return c|256;case 45:if(!b)N(Cp(C(22),a.b3,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Ca(a);}Ca(a);return c;}
function Ca(a){var b,c,d,e,f;b=a.A;a.kJ=b;if(!(a.hP&4))a.A=b+1|0;else{c=a.bn.data.length-2|0;a.A=b+1|0;a:while(true){d=a.A;if(d<c&&S$(a.bn.data[d])){a.A=a.A+1|0;continue;}d=a.A;if(d>=c)break;e=a.bn.data;if(e[d]!=35)break;a.A=d+1|0;while(true){f=a.A;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.A=f+1|0;}}}return a.kJ;}
function ANV(b){return Bdf.KN(b);}
function MK(a){var b,c,d,e;b=a.bn.data[Ca(a)];if(C1(b)){c=a.kJ+1|0;d=a.bn.data;if(c<d.length){e=d[c];if(Dq(e)){Ca(a);return E9(b,e);}}}return b;}
function QZ(a){return a.dU;}
function KZ(){var a=this;BU.call(a);a.FO=null;a.Fw=null;a.uj=0;}
function Cp(a,b,c){var d=new KZ();NB(d,a,b,c);return d;}
function NB(a,b,c,d){Z(a);a.uj=(-1);a.FO=b;a.Fw=c;a.uj=d;}
function F5(){var a=this;B.call(a);a.HQ=Ga;a.G$=Ga;a.GC=null;a.E6=null;a.Gx=0;a.HW=null;}
var Bdg=null;var Bdh=null;var Bdi=0;var Bdj=0;var Bdk=null;function AKv(){AKv=Bl(F5);APD();}
function AVK(b){AKv();if(Bdh!==b)Bdh=b;Bdh.G$=ER();}
function I4(){AKv();return Bdh;}
function APD(){var b,c,d;b=new F5;AKv();c=null;b.GC=new B;b.Gx=1;b.E6=C(520);b.HW=c;d=Bdi;Bdi=d+1|0;b.HQ=Bs(d);Bdg=b;Bdh=b;Bdi=1;Bdj=1;Bdk=new TI;}
function ZH(){B.call(this);this.ye=null;}
function AWo(a,b){var c,d;c=a.ye;c.nI=b;Fc(c.dd,b.m7);Fc(c.dc,c.nI.m8);b=c.vl;d=c.nI;b.fF=d;c.e9.dY=d;}
var Tv=G(C8);
function AZy(a,b,c,d){var e;e=a.eP;B2(d,e,b-DP(d,e)|0);return a.f.c(b,c,d);}
function A0Z(a){return C(521);}
function A5Y(a,b){return 0;}
var AGu=G(C8);
function A0Q(a,b,c,d){return b;}
function A2Z(a){return C(522);}
var R5=G(C8);
function APY(a,b,c,d){if(DP(d,a.eP)!=b)b=(-1);return b;}
function A6Z(a){return C(523);}
function Uo(){C8.call(this);this.yQ=0;}
function AZB(a,b,c,d){var e;e=a.eP;B2(d,e,b-DP(d,e)|0);a.yQ=b;return b;}
function AWI(a){return C(524);}
function A4U(a,b){return 0;}
var GF=G(C8);
function AXC(a,b,c,d){if(d.mY!=1&&b!=d.B)return (-1);d.lf=1;NM(d,0,b);return b;}
function A0A(a){return C(525);}
function Cf(){BX.call(this);this.bT=0;}
function Eb(a){B9(a);a.bT=1;}
function A8A(a,b,c,d){var e;if((b+a.co()|0)>d.B){d.ec=1;return (-1);}e=a.bK(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A6E(a){return a.bT;}
function ASU(a,b){return 1;}
var AJS=G(Cf);
function IJ(a){var b=new AJS();A3S(b,a);return b;}
function A3S(a,b){Ov(a,b);a.bT=1;a.kx=1;a.bT=0;}
function A6f(a,b,c){return 0;}
function A1I(a,b,c,d){var e,f,g;e=d.B;f=d.dw;while(true){g=BR(b,e);if(g>0)return (-1);if(g<0&&Dq(Q(c,b))&&b>f&&C1(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function A0N(a,b,c,d,e){var f,g;f=e.B;g=e.dw;while(true){if(c<b)return (-1);if(c<f&&Dq(Q(d,c))&&c>g&&C1(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ASm(a){return C(526);}
function AZA(a,b){return 0;}
function B_(){var a=this;BX.call(a);a.bV=null;a.fo=null;a.bf=0;}
function A9y(a,b){var c=new B_();GG(c,a,b);return c;}
function GG(a,b,c){B9(a);a.bV=b;a.fo=c;a.bf=c.eP;}
function AR5(a,b,c,d){var e,f,g,h;if(a.bV===null)return (-1);e=G_(d,a.bf);Ea(d,a.bf,b);f=a.bV.q;g=0;while(true){if(g>=f){Ea(d,a.bf,e);return (-1);}h=(BL(a.bV,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AVl(a,b){a.fo.f=b;}
function AS5(a){return C(527);}
function A3s(a,b){var c;a:{c=a.bV;if(c!==null){c=B$(c);while(true){if(!Cc(c))break a;if(!(Cd(c)).cb(b))continue;else return 1;}}}return 0;}
function AVS(a,b){return JR(b,a.bf)>=0&&G_(b,a.bf)==JR(b,a.bf)?0:1;}
function AQj(a){var b,c,d,e;a.cR=1;b=a.fo;if(b!==null&&!b.cR)Le(b);a:{b=a.bV;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BL(a.bV,d);e=b.hh();if(e===null)e=b;else{b.cR=1;E5(a.bV,d);AMo(a.bV,d,e);}if(!e.cR)e.fk();d=d+1|0;}}}if(a.f!==null)Le(a);}
var K$=G(B_);
function AU$(a,b,c,d){var e,f,g,h;e=DP(d,a.bf);B2(d,a.bf,b);f=a.bV.q;g=0;while(true){if(g>=f){B2(d,a.bf,e);return (-1);}h=(BL(a.bV,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATN(a){return C(528);}
function A5A(a,b){return !DP(b,a.bf)?0:1;}
var Eo=G(K$);
function A1a(a,b,c,d){var e,f,g;e=DP(d,a.bf);B2(d,a.bf,b);f=a.bV.q;g=0;while(g<f){if((BL(a.bV,g)).c(b,c,d)>=0)return a.f.c(a.fo.yQ,c,d);g=g+1|0;}B2(d,a.bf,e);return (-1);}
function A5q(a,b){a.f=b;}
function AO7(a){return C(528);}
var Yl=G(Eo);
function AVj(a,b,c,d){var e,f;e=a.bV.q;f=0;while(f<e){if((BL(a.bV,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AXt(a,b){return 0;}
function A7Y(a){return C(529);}
var AFe=G(Eo);
function APP(a,b,c,d){var e,f;e=a.bV.q;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BL(a.bV,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A6J(a,b){return 0;}
function AR0(a){return C(530);}
var ABK=G(Eo);
function AQh(a,b,c,d){var e,f,g,h;e=a.bV.q;f=d.li?0:d.dw;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.bf,b);h=0;while(true){if(h>=e)break a;if((BL(a.bV,h)).cY(f,b,c,d)>=0){B2(d,a.bf,(-1));return g;}h=h+1|0;}}}return (-1);}
function A8S(a,b){return 0;}
function AUZ(a){return C(531);}
var UN=G(Eo);
function AZc(a,b,c,d){var e,f;e=a.bV.q;B2(d,a.bf,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BL(a.bV,f)).cY(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A5N(a,b){return 0;}
function AP0(a){return C(532);}
function Iy(){B_.call(this);this.dJ=null;}
function A$0(a,b){var c=new Iy();AHI(c,a,b);return c;}
function AHI(a,b,c){B9(a);a.dJ=b;a.fo=c;a.bf=c.eP;}
function AOZ(a,b,c,d){var e,f;e=G_(d,a.bf);Ea(d,a.bf,b);f=a.dJ.c(b,c,d);if(f>=0)return f;Ea(d,a.bf,e);return (-1);}
function ATT(a,b,c,d){var e;e=a.dJ.cJ(b,c,d);if(e>=0)Ea(d,a.bf,e);return e;}
function A50(a,b,c,d,e){var f;f=a.dJ.cY(b,c,d,e);if(f>=0)Ea(e,a.bf,f);return f;}
function A3q(a,b){return a.dJ.cb(b);}
function A4Q(a){var b;b=new P$;AHI(b,a.dJ,a.fo);a.f=b;return b;}
function AX7(a){var b;a.cR=1;b=a.fo;if(b!==null&&!b.cR)Le(b);b=a.dJ;if(b!==null&&!b.cR){b=b.hh();if(b!==null){a.dJ.cR=1;a.dJ=b;}a.dJ.fk();}}
var HK=G();
function Ba(){var a=this;HK.call(a);a.bp=0;a.cQ=0;a.T=null;a.m5=null;a.nE=null;a.X=0;}
var Bdl=null;function Rj(){Rj=Bl(Ba);AQD();}
function BB(a){var b;Rj();b=new AFU;b.G=BI(64);a.T=b;}
function AZ_(a){return null;}
function AZN(a){return a.T;}
function AML(a){var b,c,d,e,f;if(!a.cQ)b=I1(a.T,0)>=2048?0:1;else{a:{c=a.T;b=0;d=c.bD;if(b<d){e=c.G.data;f=(e[0]^(-1))>>>0|0;if(f)b=JK(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+JK(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A2n(a){return a.X;}
function A6z(a){return a;}
function AHa(a){var b,c;if(a.nE===null){b=a.gp();c=new W0;c.HB=a;c.y3=b;BB(c);a.nE=c;E8(c,a.cQ);}return a.nE;}
function Kf(a){var b,c;if(a.m5===null){b=a.gp();c=new WX;c.FR=a;c.C1=b;c.xc=a;BB(c);a.m5=c;E8(c,a.bp);a.m5.X=a.X;}return a.m5;}
function A7X(a){return 0;}
function E8(a,b){var c;c=a.bp;if(c^b){a.bp=c?0:1;a.cQ=a.cQ?0:1;}if(!a.X)a.X=1;return a;}
function ARy(a){return a.bp;}
function Oc(b,c){Rj();return b.p(c);}
function KH(b,c){var d,e;Rj();if(b.el()!==null&&c.el()!==null){b=b.el();c=c.el();d=Bf(b.G.data.length,c.G.data.length);e=0;a:{while(e<d){if(b.G.data[e]&c.G.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function TJ(b,c){var d,e,f;Rj();d=0;while(true){AWj();e=Bdm.data;if(d>=e.length){f=new Nw;Bn(f,C(22));f.Gk=C(22);f.HG=b;N(f);}e=e[d].data;if(Bk(b,e[0]))break;d=d+1|0;}return ANt(e[1],c);}
function AQD(){var b;b=new HX;AWj();Bdl=b;}
function AHB(){var a=this;Ba.call(a);a.qQ=0;a.r7=0;a.iv=0;a.oo=0;a.e0=0;a.he=0;a.Q=null;a.bQ=null;}
function DQ(){var a=new AHB();AYG(a);return a;}
function A7d(a,b){var c=new AHB();AQs(c,a,b);return c;}
function AYG(a){BB(a);a.Q=A8V();}
function AQs(a,b,c){BB(a);a.Q=A8V();a.qQ=b;a.r7=c;}
function CQ(a,b){a:{if(a.qQ){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.e0){PA(a.Q,Kh(b&65535));break a;}MC(a.Q,Kh(b&65535));break a;}if(a.r7&&b>128){a.iv=1;b=HE(HC(b));}}}if(!(!T_(b)&&!Rq(b))){if(a.oo)PA(a.T,b-55296|0);else MC(a.T,b-55296|0);}if(a.e0)PA(a.Q,b);else MC(a.Q,b);if(!a.X&&M6(b))a.X=1;return a;}
function AOj(a,b){var c,d,e;if(!a.X&&b.X)a.X=1;if(a.oo){if(!b.cQ)GS(a.T,b.gp());else Dy(a.T,b.gp());}else if(!b.cQ)Hd(a.T,b.gp());else{G7(a.T,b.gp());Dy(a.T,b.gp());a.cQ=a.cQ?0:1;a.oo=1;}if(!a.he&&b.el()!==null){if(a.e0){if(!b.bp)GS(a.Q,b.el());else Dy(a.Q,b.el());}else if(!b.bp)Hd(a.Q,b.el());else{G7(a.Q,b.el());Dy(a.Q,b.el());a.bp=a.bp?0:1;a.e0=1;}}else{c=a.bp;d=a.bQ;if(d!==null){if(!c){e=new ZV;e.GH=a;e.DL=c;e.w3=d;e.wV=b;BB(e);a.bQ=e;}else{e=new ZW;e.HV=a;e.uN=c;e.AX=d;e.Ap=b;BB(e);a.bQ=e;}}else{if(c&&!a.e0
&&Pp(a.Q)){d=new ZS;d.G_=a;d.A2=b;BB(d);a.bQ=d;}else if(!c){d=new ZQ;d.qo=a;d.pK=c;d.zv=b;BB(d);a.bQ=d;}else{d=new ZR;d.oX=a;d.nv=c;d.wZ=b;BB(d);a.bQ=d;}a.he=1;}}return a;}
function Ce(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;Z(d);N(d);}a:{b:{if(!a.qQ){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CQ(a,b);b=b+1|0;}}if(!a.e0)Jy(a.Q,b,c+1|0);else{d=a.Q;c=c+1|0;if(b>c){d=new BM;Z(d);N(d);}e=d.bD;if(b<e){f=Bf(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.G.data;h[g]=h[g]&(KC(d,b)|Jq(d,f));}else{h=d.G.data;h[g]=h[g]&KC(d,b);e=g+1|0;while(e<c){d.G.data[e]=0;e=e+1|0;}if(f&31){h=d.G.data;h[c]=h[c]&Jq(d,f);}}HY(d);}}}}return a;}
function AKP(a,b){var c,d,e;if(!a.X&&b.X)a.X=1;if(b.iv)a.iv=1;c=a.cQ;if(!(c^b.cQ)){if(!c)Hd(a.T,b.T);else Dy(a.T,b.T);}else if(c)GS(a.T,b.T);else{G7(a.T,b.T);Dy(a.T,b.T);a.cQ=1;}if(!a.he&&Da(b)!==null){c=a.bp;if(!(c^b.bp)){if(!c)Hd(a.Q,Da(b));else Dy(a.Q,Da(b));}else if(c)GS(a.Q,Da(b));else{G7(a.Q,Da(b));Dy(a.Q,Da(b));a.bp=1;}}else{c=a.bp;d=a.bQ;if(d!==null){if(!c){e=new Rb;e.EH=a;e.wm=c;e.Da=d;e.xk=b;BB(e);a.bQ=e;}else{e=new Rv;e.EX=a;e.Dz=c;e.rM=d;e.r9=b;BB(e);a.bQ=e;}}else{if(!a.e0&&Pp(a.Q)){if(!c){d=new ZT;d.HY
=a;d.tH=b;BB(d);a.bQ=d;}else{d=new ZU;d.GL=a;d.Dp=b;BB(d);a.bQ=d;}}else if(!c){d=new ZX;d.wp=a;d.uY=b;d.A0=c;BB(d);a.bQ=d;}else{d=new ZY;d.vk=a;d.vu=b;d.B_=c;BB(d);a.bQ=d;}a.he=1;}}}
function Xb(a,b){var c,d,e;if(!a.X&&b.X)a.X=1;if(b.iv)a.iv=1;c=a.cQ;if(!(c^b.cQ)){if(!c)Dy(a.T,b.T);else Hd(a.T,b.T);}else if(!c)GS(a.T,b.T);else{G7(a.T,b.T);Dy(a.T,b.T);a.cQ=0;}if(!a.he&&Da(b)!==null){c=a.bp;if(!(c^b.bp)){if(!c)Dy(a.Q,Da(b));else Hd(a.Q,Da(b));}else if(!c)GS(a.Q,Da(b));else{G7(a.Q,Da(b));Dy(a.Q,Da(b));a.bp=0;}}else{c=a.bp;d=a.bQ;if(d!==null){if(!c){e=new Rd;e.GG=a;e.CH=c;e.y2=d;e.uL=b;BB(e);a.bQ=e;}else{e=new Re;e.GM=a;e.Cm=c;e.yy=d;e.CD=b;BB(e);a.bQ=e;}}else{if(!a.e0&&Pp(a.Q)){if(!c){d=new Q_;d.E0
=a;d.zX=b;BB(d);a.bQ=d;}else{d=new Ra;d.HT=a;d.tv=b;BB(d);a.bQ=d;}}else if(!c){d=new Rf;d.Es=a;d.DJ=b;d.vo=c;BB(d);a.bQ=d;}else{d=new Q$;d.vn=a;d.Cr=b;d.Bd=c;BB(d);a.bQ=d;}a.he=1;}}}
function Dg(a,b){var c;c=a.bQ;if(c!==null)return a.bp^c.p(b);return a.bp^D9(a.Q,b);}
function Da(a){if(!a.he)return a.Q;return null;}
function A1E(a){return a.T;}
function AXe(a){var b,c;if(a.bQ!==null)return a;b=Da(a);c=new Rc;c.Gu=a;c.me=b;BB(c);return E8(c,a.bp);}
function A38(a){var b,c,d;b=new J;L(b);c=I1(a.Q,0);while(c>=0){KI(b,G3(c));Bq(b,124);c=I1(a.Q,c+1|0);}d=b.H;if(d>0)WL(b,d-1|0);return K(b);}
function ARB(a){return a.iv;}
function Nw(){var a=this;Bu.call(a);a.Gk=null;a.HG=null;}
function ED(){BX.call(this);this.S=null;}
function DA(a,b,c,d){Ov(a,c);a.S=b;a.kx=d;}
function A8H(a){return a.S;}
function AWt(a,b){return !a.S.cb(b)&&!a.f.cb(b)?0:1;}
function A7e(a,b){return 1;}
function AUd(a){var b;a.cR=1;b=a.f;if(b!==null&&!b.cR){b=b.hh();if(b!==null){a.f.cR=1;a.f=b;}a.f.fk();}b=a.S;if(b!==null){if(!b.cR){b=b.hh();if(b!==null){a.S.cR=1;a.S=b;}a.S.fk();}else if(b instanceof Iy&&b.fo.p6)a.S=b.f;}}
function Dj(){ED.call(this);this.bl=null;}
function A9O(a,b,c){var d=new Dj();FG(d,a,b,c);return d;}
function FG(a,b,c,d){DA(a,b,c,d);a.bl=b;}
function AZd(a,b,c,d){var e,f;e=0;a:{while((b+a.bl.co()|0)<=d.B){f=a.bl.bK(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bl.co()|0;e=e+(-1)|0;}return f;}
function A0I(a){return C(533);}
function Gn(){Dj.call(this);this.jx=null;}
function A$z(a,b,c,d){var e=new Gn();TO(e,a,b,c,d);return e;}
function TO(a,b,c,d,e){FG(a,c,d,e);a.jx=b;}
function AZX(a,b,c,d){var e,f,g,h,i;e=a.jx;f=e.gg;g=e.ge;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bl.co()|0)>d.B)break a;i=a.bl.bK(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bl.co()|0;h=h+(-1)|0;}return i;}if((b+a.bl.co()|0)>d.B){d.ec=1;return (-1);}i=a.bl.bK(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function A0b(a){return ADu(a.jx);}
var C9=G(ED);
function AZr(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.S.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A2H(a){return C(534);}
var Fv=G(Dj);
function A3F(a,b,c,d){var e;e=a.S.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AYS(a,b){a.f=b;a.S.Z(b);}
var W1=G(Dj);
function A8u(a,b,c,d){while((b+a.bl.co()|0)<=d.B&&a.bl.bK(b,c)>0){b=b+a.bl.co()|0;}return a.f.c(b,c,d);}
function AUD(a,b,c,d){var e,f,g;e=a.f.cJ(b,c,d);if(e<0)return (-1);f=e-a.bl.co()|0;while(f>=b&&a.bl.bK(f,c)>0){g=f-a.bl.co()|0;e=f;f=g;}return e;}
var Qf=G(0);
var TI=G();
function Bi(){var a=this;B.call(a);a.oZ=null;a.n8=null;}
function ANt(a,b){if(!b&&a.oZ===null)a.oZ=a.J();else if(b&&a.n8===null)a.n8=E8(a.J(),1);if(b)return a.n8;return a.oZ;}
var DB=G(BU);
function Yz(){var a=this;HK.call(a);a.gg=0;a.ge=0;}
function ADu(a){var b,c,d,e,f;b=a.gg;c=a.ge;d=c!=2147483647?II(c):C(22);e=new J;L(e);Bq(e,123);f=V(e,b);Bq(f,44);Bq(H(f,d),125);return K(e);}
var ZF=G(BX);
function ATe(a,b,c,d){return b;}
function A4K(a){return C(535);}
function A4O(a,b){return 0;}
function AFU(){var a=this;B.call(a);a.G=null;a.bD=0;}
function A8V(){var a=new AFU();A0B(a);return a;}
function A0B(a){a.G=BI(0);}
function MC(a,b){var c,d;c=b/32|0;if(b>=a.bD){KJ(a,c+1|0);a.bD=b+1|0;}d=a.G.data;d[c]=d[c]|1<<(b%32|0);}
function Jy(a,b,c){var d,e,f,g,h;d=BR(b,c);if(d>0){e=new BM;Z(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bD){KJ(a,f+1|0);a.bD=c;}if(d==f){g=a.G.data;g[d]=g[d]|Jq(a,b)&KC(a,c);}else{g=a.G.data;g[d]=g[d]|Jq(a,b);h=d+1|0;while(h<f){a.G.data[h]=(-1);h=h+1|0;}if(c&31){g=a.G.data;g[f]=g[f]|KC(a,c);}}}
function Jq(a,b){return (-1)<<(b%32|0);}
function KC(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function PA(a,b){var c,d,e,f;c=b/32|0;d=a.G.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bD-1|0))HY(a);}}
function D9(a,b){var c,d;c=b/32|0;d=a.G.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function I1(a,b){var c,d,e,f;c=a.bD;if(b>=c)return (-1);d=b/32|0;e=a.G.data;f=e[d]>>>(b%32|0)|0;if(f)return JK(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+JK(e[f])|0;f=f+1|0;}return (-1);}
function KJ(a,b){var c;c=a.G.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.G=J1(a.G,c);}
function HY(a){var b,c,d;b=(a.bD+31|0)/32|0;a.bD=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Zh(a.G.data[c]);if(d<32)break;c=c+(-1)|0;a.bD=a.bD-32|0;}a.bD=a.bD-d|0;}}
function Dy(a,b){var c,d,e,f;c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&b.G.data[d];d=d+1|0;}while(true){f=a.G.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bD=Bf(a.bD,b.bD);HY(a);}
function GS(a,b){var c,d,e;c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&(b.G.data[d]^(-1));d=d+1|0;}HY(a);}
function Hd(a,b){var c,d,e;c=Be(a.bD,b.bD);a.bD=c;KJ(a,(c+31|0)/32|0);c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]|b.G.data[d];d=d+1|0;}}
function G7(a,b){var c,d,e;c=Be(a.bD,b.bD);a.bD=c;KJ(a,(c+31|0)/32|0);c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]^b.G.data[d];d=d+1|0;}HY(a);}
function Pp(a){return a.bD?0:1;}
function P0(){var a=this;B_.call(a);a.n7=null;a.yx=0;}
function A4V(a){var b,c,d;b=!a.yx?C(68):C(536);c=a.n7.M();d=new J;L(d);H(H(H(d,C(537)),b),c);return K(d);}
function SB(){var a=this;B_.call(a);a.lF=null;a.mV=null;}
function AI_(a,b){var c=new SB();AKq(c,a,b);return c;}
function AKq(a,b,c){B9(a);a.lF=b;a.mV=c;}
function APw(a,b,c,d){var e,f,g,h,i;e=a.lF.c(b,c,d);if(e<0)a:{f=a.mV;g=d.dw;e=d.B;h=b+1|0;e=BR(h,e);if(e>0){d.ec=1;e=(-1);}else{i=Q(c,b);if(!f.n7.p(i))e=(-1);else{if(C1(i)){if(e<0&&Dq(Q(c,h))){e=(-1);break a;}}else if(Dq(i)&&b>g&&C1(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A4G(a,b){a.f=b;a.mV.f=b;a.lF.Z(b);}
function A46(a){var b,c,d;b=a.lF;c=a.mV;d=new J;L(d);H(H(H(H(d,C(538)),b),C(539)),c);return K(d);}
function AP4(a,b){return 1;}
function APR(a,b){return 1;}
function Eg(){var a=this;B_.call(a);a.dO=null;a.ox=0;}
function A29(a){var b=new Eg();AEb(b,a);return b;}
function AEb(a,b){B9(a);a.dO=b.mQ();a.ox=b.bp;}
function A1y(a,b,c,d){var e,f,g,h;e=d.B;if(b<e){f=b+1|0;g=Q(c,b);if(a.p(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(J9(g,f)&&a.p(E9(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A7R(a){var b,c,d;b=!a.ox?C(68):C(536);c=a.dO.M();d=new J;L(d);H(H(H(d,C(537)),b),c);return K(d);}
function ARN(a,b){return a.dO.p(b);}
function APr(a,b){if(b instanceof Ew)return Oc(a.dO,b.hE);if(b instanceof E4)return Oc(a.dO,b.dM);if(b instanceof Eg)return KH(a.dO,b.dO);if(!(b instanceof EZ))return 1;return KH(a.dO,b.f_);}
function AS9(a){return a.dO;}
function A6s(a,b){a.f=b;}
function ARr(a,b){return 1;}
var Nt=G(Eg);
function ASV(a,b){return a.dO.p(HE(HC(b)));}
function AYb(a){var b,c,d;b=!a.ox?C(68):C(536);c=a.dO.M();d=new J;L(d);H(H(H(d,C(540)),b),c);return K(d);}
function AHv(){var a=this;Cf.call(a);a.qw=null;a.tT=0;}
function ASg(a){var b=new AHv();AUQ(b,a);return b;}
function AUQ(a,b){Eb(a);a.qw=b.mQ();a.tT=b.bp;}
function A3a(a,b,c){return !a.qw.p(Gc(FQ(Q(c,b))))?(-1):1;}
function A0f(a){var b,c,d;b=!a.tT?C(68):C(536);c=a.qw.M();d=new J;L(d);H(H(H(d,C(540)),b),c);return K(d);}
function EZ(){var a=this;Cf.call(a);a.f_=null;a.vx=0;}
function AW_(a){var b=new EZ();AVF(b,a);return b;}
function AVF(a,b){Eb(a);a.f_=b.mQ();a.vx=b.bp;}
function Ya(a,b,c){return !a.f_.p(Q(c,b))?(-1):1;}
function ATi(a){var b,c,d;b=!a.vx?C(68):C(536);c=a.f_.M();d=new J;L(d);H(H(H(d,C(537)),b),c);return K(d);}
function AVn(a,b){if(b instanceof E4)return Oc(a.f_,b.dM);if(b instanceof EZ)return KH(a.f_,b.f_);if(!(b instanceof Eg)){if(!(b instanceof Ew))return 1;return 0;}return KH(a.f_,b.dO);}
function Z0(){var a=this;B_.call(a);a.jP=null;a.rc=null;a.lA=0;}
function A63(a,b){var c=new Z0();AZs(c,a,b);return c;}
function AZs(a,b,c){B9(a);a.jP=b;a.lA=c;}
function AT0(a,b){a.f=b;}
function LX(a){if(a.rc===null)a.rc=GT(a.jP);return a.rc;}
function AWn(a){var b,c;b=LX(a);c=new J;L(c);H(H(c,C(541)),b);return K(c);}
function AOD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.B;f=BI(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DL([k,l]):DL([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.lA;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jP.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.lA==3){k=f[0];m=a.jP.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.lA==2){b=f[0];m=a.jP.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function A0i(a,b){return b instanceof Z0&&!Bk(LX(b),LX(a))?0:1;}
function AXj(a,b){return 1;}
function E4(){Cf.call(this);this.dM=0;}
function AHK(a){var b=new E4();AVJ(b,a);return b;}
function AVJ(a,b){Eb(a);a.dM=b;}
function A21(a){return 1;}
function ASd(a,b,c){return a.dM!=Q(c,b)?(-1):1;}
function ARd(a,b,c,d){var e,f,g;if(!(c instanceof BD))return Jm(a,b,c,d);e=d.B;while(true){if(b>=e)return (-1);f=KF(c,a.dM,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AS_(a,b,c,d,e){var f;if(!(d instanceof BD))return Ju(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=H_(d,a.dM,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AXv(a){var b,c;b=a.dM;c=new J;L(c);Bq(c,b);return K(c);}
function AXa(a,b){if(b instanceof E4)return b.dM!=a.dM?0:1;if(!(b instanceof EZ)){if(b instanceof Eg)return b.p(a.dM);if(!(b instanceof Ew))return 1;return 0;}return Ya(b,0,Xn(a.dM))<=0?0:1;}
function AKc(){Cf.call(this);this.pI=0;}
function A5u(a){var b=new AKc();A32(b,a);return b;}
function A32(a,b){Eb(a);a.pI=Gc(FQ(b));}
function AY2(a,b,c){return a.pI!=Gc(FQ(Q(c,b)))?(-1):1;}
function A4F(a){var b,c;b=a.pI;c=new J;L(c);Bq(H(c,C(542)),b);return K(c);}
function AGR(){var a=this;Cf.call(a);a.pq=0;a.y0=0;}
function A0G(a){var b=new AGR();AWg(b,a);return b;}
function AWg(a,b){Eb(a);a.pq=b;a.y0=Kh(b);}
function AOQ(a,b,c){return a.pq!=Q(c,b)&&a.y0!=Q(c,b)?(-1):1;}
function ASr(a){var b,c;b=a.pq;c=new J;L(c);Bq(H(c,C(543)),b);return K(c);}
function Gs(){var a=this;B_.call(a);a.kq=0;a.n0=null;a.ns=null;a.nl=0;}
function A_u(a,b){var c=new Gs();QO(c,a,b);return c;}
function QO(a,b,c){B9(a);a.kq=1;a.ns=b;a.nl=c;}
function A75(a,b){a.f=b;}
function AU9(a,b,c,d){var e,f,g,h,i,j,k,l;e=BI(4);f=d.B;if(b>=f)return (-1);g=L8(a,b,c,f);h=b+a.kq|0;i=ANV(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dc(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=L8(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ANV(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.kq|0;if(h>=f){b=k;break a;}g=L8(a,h,c,f);b=k;}}}if(b!=a.nl)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.ns.data[g])break;g=g+1|0;}return (-1);}
function M1(a){var b,c;if(a.n0===null){b=new J;L(b);c=0;while(c<a.nl){KI(b,G3(a.ns.data[c]));c=c+1|0;}a.n0=K(b);}return a.n0;}
function A4w(a){var b,c;b=M1(a);c=new J;L(c);H(H(c,C(544)),b);return K(c);}
function L8(a,b,c,d){var e,f,g;a.kq=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(J9(e,f)){g=B6(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&C1(g[0])&&Dq(g[1])?E9(g[0],g[1]):g[0];a.kq=2;}}return e;}
function ATf(a,b){return b instanceof Gs&&!Bk(M1(b),M1(a))?0:1;}
function A5t(a,b){return 1;}
var Xv=G(Gs);
var ADM=G(Gs);
var X8=G(C9);
function A0V(a,b,c,d){var e;while(true){e=a.S.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var AAz=G(C9);
function A3Z(a,b,c,d){var e;e=a.S.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.S.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var Hf=G(C9);
function A6p(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.S.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A7s(a,b){a.f=b;a.S.Z(b);}
var RL=G(Hf);
function AS7(a,b,c,d){var e;e=a.S.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A4g(a,b){a.f=b;}
function GZ(){var a=this;C9.call(a);a.gL=null;a.ed=0;}
function Bdn(a,b,c,d,e){var f=new GZ();Ns(f,a,b,c,d,e);return f;}
function Ns(a,b,c,d,e,f){DA(a,c,d,e);a.gL=b;a.ed=f;}
function A8P(a,b,c,d){var e,f;e=Yw(d,a.ed);if(!a.S.P(d))return a.f.c(b,c,d);if(e>=a.gL.ge)return a.f.c(b,c,d);f=a.ed;e=e+1|0;Fd(d,f,e);f=a.S.c(b,c,d);if(f>=0){Fd(d,a.ed,0);return f;}f=a.ed;e=e+(-1)|0;Fd(d,f,e);if(e>=a.gL.gg)return a.f.c(b,c,d);Fd(d,a.ed,0);return (-1);}
function AXI(a){return ADu(a.gL);}
var Qc=G(GZ);
function ASx(a,b,c,d){var e,f,g;e=0;f=a.gL.ge;a:{while(true){g=a.S.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gL.gg)return (-1);return a.f.c(b,c,d);}
var Tn=G(C9);
function AYc(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.S.c(b,c,d);}
var ABg=G(Hf);
function AP5(a,b,c,d){var e;if(!a.S.P(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.S.c(b,c,d);return e;}
var Vw=G(GZ);
function AZG(a,b,c,d){var e,f,g;e=Yw(d,a.ed);if(!a.S.P(d))return a.f.c(b,c,d);f=a.gL;if(e>=f.ge){Fd(d,a.ed,0);return a.f.c(b,c,d);}if(e<f.gg){Fd(d,a.ed,e+1|0);g=a.S.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){Fd(d,a.ed,0);return g;}Fd(d,a.ed,e+1|0);g=a.S.c(b,c,d);}return g;}
var To=G(ED);
function A8D(a,b,c,d){var e;e=d.B;if(e>b)return a.f.cY(b,e,c,d);return a.f.c(b,c,d);}
function AWT(a,b,c,d){var e;e=d.B;if(a.f.cY(b,e,c,d)>=0)return b;return (-1);}
function A5a(a){return C(545);}
function ZM(){ED.call(this);this.n3=null;}
function AVo(a,b,c,d){var e,f;e=d.B;f=AEs(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cY(b,e,c,d);return a.f.c(b,c,d);}
function AOF(a,b,c,d){var e,f,g,h;e=d.B;f=a.f.cJ(b,c,d);if(f<0)return (-1);g=AEs(a,f,e,c);if(g>=0)e=g;g=Be(f,a.f.cY(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.n3.js(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AEs(a,b,c,d){while(true){if(b>=c)return (-1);if(a.n3.js(Q(d,b)))break;b=b+1|0;}return b;}
function A5U(a){return C(546);}
var F2=G();
var Bdo=null;var Bdp=null;function AAl(b){var c;if(!(b&1)){c=Bdp;if(c!==null)return c;c=new AEN;Bdp=c;return c;}c=Bdo;if(c!==null)return c;c=new AEM;Bdo=c;return c;}
var AGN=G(Dj);
function APg(a,b,c,d){var e;a:{while(true){if((b+a.bl.co()|0)>d.B)break a;e=a.bl.bK(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var WV=G(Fv);
function AUs(a,b,c,d){var e;if((b+a.bl.co()|0)<=d.B){e=a.bl.bK(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var AAa=G(Gn);
function A53(a,b,c,d){var e,f,g,h,i;e=a.jx;f=e.gg;g=e.ge;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bl.co()|0)>d.B)break a;i=a.bl.bK(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bl.co()|0)>d.B){d.ec=1;return (-1);}i=a.bl.bK(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var ABf=G(Dj);
function AVk(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bl.co()|0)<=d.B){e=a.bl.bK(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ADX=G(Fv);
function APp(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.S.c(b,c,d);}
var Td=G(Gn);
function A6h(a,b,c,d){var e,f,g,h,i,j;e=a.jx;f=e.gg;g=e.ge;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bl.co()|0)<=d.B){i=a.bl.bK(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bl.co()|0)>d.B){d.ec=1;return (-1);}j=a.bl.bK(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var L6=G(BX);
function A3r(a,b,c,d){if(b&&!(d.hf&&b==d.dw))return (-1);return a.f.c(b,c,d);}
function A2Q(a,b){return 0;}
function AUu(a){return C(547);}
function AHQ(){BX.call(this);this.w5=0;}
function A6Q(a){var b=new AHQ();ASZ(b,a);return b;}
function ASZ(a,b){B9(a);a.w5=b;}
function AZ9(a,b,c,d){var e,f,g;e=b<d.B?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.li?0:d.dw;return (e!=32&&!ABj(a,e,b,g,c)?0:1)^(f!=32&&!ABj(a,f,b-1|0,g,c)?0:1)^a.w5?(-1):a.f.c(b,c,d);}
function A0g(a,b){return 0;}
function A8N(a){return C(548);}
function ABj(a,b,c,d,e){var f;if(!Lv(b)&&b!=95){a:{if(CO(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(Lv(f))return 0;if(CO(f)!=6)return 1;}}return 1;}return 0;}
var ZI=G(BX);
function ASY(a,b,c,d){if(b!=d.jz)return (-1);return a.f.c(b,c,d);}
function AYI(a,b){return 0;}
function AZZ(a){return C(549);}
function Xr(){BX.call(this);this.hR=0;}
function A9Y(a){var b=new Xr();ANN(b,a);return b;}
function ANN(a,b){B9(a);a.hR=b;}
function A5d(a,b,c,d){var e,f,g;e=!d.hf?M(c):d.B;if(b>=e){B2(d,a.hR,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hR,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hR,0);return a.f.c(b,c,d);}
function A0O(a,b){var c;c=!DP(b,a.hR)?0:1;B2(b,a.hR,(-1));return c;}
function A3G(a){return C(550);}
var AFB=G(BX);
function A4D(a,b,c,d){if(b<(d.li?M(c):d.B))return (-1);d.ec=1;d.Hv=1;return a.f.c(b,c,d);}
function AY1(a,b){return 0;}
function AR4(a){return C(551);}
function YS(){BX.call(this);this.Bj=null;}
function A0K(a,b,c,d){a:{if(b!=d.B){if(!b)break a;if(d.hf&&b==d.dw)break a;if(a.Bj.Cp(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function ARV(a,b){return 0;}
function AZT(a){return C(552);}
var AJ1=G(B_);
function A95(){var a=new AJ1();A4r(a);return a;}
function A4r(a){B9(a);}
function AYf(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;if(f>e){d.ec=1;return (-1);}g=Q(c,b);if(C1(g)){h=b+2|0;if(h<=e&&J9(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function AQT(a){return C(553);}
function A0k(a,b){a.f=b;}
function A4o(a){return (-2147483602);}
function A0j(a,b){return 1;}
function AHA(){B_.call(this);this.ou=null;}
function A9V(a){var b=new AHA();AQl(b,a);return b;}
function AQl(a,b){B9(a);a.ou=b;}
function A4x(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;if(f>e){d.ec=1;return (-1);}g=Q(c,b);if(C1(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(J9(g,h))return a.ou.js(E9(g,h))?(-1):a.f.c(b,c,d);}}return a.ou.js(g)?(-1):a.f.c(f,c,d);}
function A0U(a){return C(69);}
function A5T(a,b){a.f=b;}
function AOp(a){return (-2147483602);}
function AYw(a,b){return 1;}
function ANT(){BX.call(this);this.kj=0;}
function A9D(a){var b=new ANT();A14(b,a);return b;}
function A14(a,b){B9(a);a.kj=b;}
function ATh(a,b,c,d){var e;e=!d.hf?M(c):d.B;if(b>=e){B2(d,a.kj,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.kj,1);return a.f.c(b+1|0,c,d);}return (-1);}
function A13(a,b){var c;c=!DP(b,a.kj)?0:1;B2(b,a.kj,(-1));return c;}
function ATE(a){return C(550);}
function AMO(){BX.call(this);this.jg=0;}
function A9q(a){var b=new AMO();A2o(b,a);return b;}
function A2o(a,b){B9(a);a.jg=b;}
function AU2(a,b,c,d){if((!d.hf?M(c)-b|0:d.B-b|0)<=0){B2(d,a.jg,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.jg,1);return a.f.c(b+1|0,c,d);}
function A1U(a,b){var c;c=!DP(b,a.jg)?0:1;B2(b,a.jg,(-1));return c;}
function AO5(a){return C(554);}
function AKO(){BX.call(this);this.ht=0;}
function A88(a){var b=new AKO();A8R(b,a);return b;}
function A8R(a,b){B9(a);a.ht=b;}
function A2M(a,b,c,d){var e,f,g;e=!d.hf?M(c)-b|0:d.B-b|0;if(!e){B2(d,a.ht,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.ht,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.ht,0);return a.f.c(b,c,d);}B2(d,a.ht,0);return a.f.c(b,c,d);default:}return (-1);}
function AQp(a,b){var c;c=!DP(b,a.ht)?0:1;B2(b,a.ht,(-1));return c;}
function ARW(a){return C(555);}
function IV(){var a=this;B_.call(a);a.r2=0;a.h6=0;}
function A_r(a,b){var c=new IV();Rp(c,a,b);return c;}
function Rp(a,b,c){B9(a);a.r2=b;a.h6=c;}
function APj(a,b,c,d){var e,f,g,h;e=Hp(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=0;while(true){if(f>=M(e)){B2(d,a.h6,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&Kh(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A5n(a,b){a.f=b;}
function Hp(a,b){var c,d;c=a.r2;d=G_(b,c);c=JR(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.oy)?Cy(b.oy,d,c):null;}
function AZz(a){var b,c;b=a.bf;c=new J;L(c);V(H(c,C(556)),b);return K(c);}
function AV_(a,b){var c;c=!DP(b,a.h6)?0:1;B2(b,a.h6,(-1));return c;}
var ANZ=G(IV);
function A$i(a,b){var c=new ANZ();A7h(c,a,b);return c;}
function A7h(a,b,c){Rp(a,b,c);}
function AQu(a,b,c,d){var e,f;e=Hp(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=!AEa(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.h6,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AXr(a,b,c,d){var e,f;e=Hp(a,d);f=d.dw;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=AAC(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AO6(a,b,c,d,e){var f,g;f=Hp(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=R6(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A3U(a,b){return 1;}
function A7r(a){var b,c;b=a.bf;c=new J;L(c);V(H(c,C(557)),b);return K(c);}
function AL8(){IV.call(this);this.EJ=0;}
function A9r(a,b){var c=new AL8();ARS(c,a,b);return c;}
function ARS(a,b,c){Rp(a,b,c);}
function ATO(a,b,c,d){var e,f;e=Hp(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=0;while(true){if(f>=M(e)){B2(d,a.h6,M(e));return a.f.c(b+M(e)|0,c,d);}if(Gc(FQ(Q(e,f)))!=Gc(FQ(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function A0h(a){var b,c;b=a.EJ;c=new J;L(c);V(H(c,C(558)),b);return K(c);}
var Q1=G(Ht);
function ARE(a,b,c,d,e){YC(a,b,c,d,e);return a;}
function A0a(a,b,c,d){AF4(a,b,c,d);return a;}
function A0z(a,b){NL(a,b);}
function A6D(a,b,c){AGj(a,b,c);return a;}
function AB3(){var a=this;Cf.call(a);a.cG=null;a.qh=null;a.oG=null;}
function AQL(a,b,c){return !L4(a,c,b)?(-1):a.bT;}
function AZ7(a,b,c,d){var e,f,g;e=d.B;while(true){if(b>e)return (-1);f=Q(a.cG,a.bT-1|0);a:{while(true){g=a.bT;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&L4(a,c,b))break;b=b+ACI(a.qh,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bT|0,c,d)>=0)break;b=b+1|0;}return b;}
function A18(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cG,0);g=(M(d)-c|0)-a.bT|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&L4(a,d,c))break;c=c-ACI(a.oG,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bT|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AVf(a){var b,c;b=a.cG;c=new J;L(c);H(H(c,C(559)),b);return K(c);}
function ASj(a,b){var c;if(b instanceof E4)return b.dM!=Q(a.cG,0)?0:1;if(b instanceof EZ)return Ya(b,0,Cy(a.cG,0,1))<=0?0:1;if(!(b instanceof Eg)){if(!(b instanceof Ew))return 1;return M(a.cG)>1&&b.hE==E9(Q(a.cG,0),Q(a.cG,1))?1:0;}a:{b:{b=b;if(!b.p(Q(a.cG,0))){if(M(a.cG)<=1)break b;if(!b.p(E9(Q(a.cG,0),Q(a.cG,1))))break b;}c=1;break a;}c=0;}return c;}
function L4(a,b,c){var d;d=0;while(d<a.bT){if(Q(b,d+c|0)!=Q(a.cG,d))return 0;d=d+1|0;}return 1;}
function AGQ(){Cf.call(this);this.km=null;}
function A_t(a){var b=new AGQ();A6V(b,a);return b;}
function A6V(a,b){var c,d,e;Eb(a);c=new J;L(c);d=0;while(true){e=BR(d,b.H);if(e>=0){a.km=K(c);a.bT=c.H;return;}if(d<0)break;if(e>=0)break;Bq(c,Gc(FQ(b.D.data[d])));d=d+1|0;}b=new BM;Z(b);N(b);}
function ATU(a,b,c){var d;d=0;while(true){if(d>=M(a.km))return M(a.km);if(Q(a.km,d)!=Gc(FQ(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function ASs(a){var b,c;b=a.km;c=new J;L(c);H(H(c,C(560)),b);return K(c);}
function Qg(){Cf.call(this);this.ik=null;}
function A54(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.ik))return M(a.ik);e=Q(a.ik,d);f=b+d|0;if(e!=Q(c,f)&&Kh(Q(a.ik,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A6Y(a){var b,c;b=a.ik;c=new J;L(c);H(H(c,C(561)),b);return K(c);}
var HX=G();
var Bdq=null;var Bdr=null;var Bdm=null;function AWj(){AWj=Bl(HX);AQ3();}
function AQ3(){Bdq=A91();Bdr=A$M();Bdm=I($rt_arraycls(B),[I(B,[C(562),A98()]),I(B,[C(563),A86()]),I(B,[C(564),A_d()]),I(B,[C(565),A_i()]),I(B,[C(566),Bdr]),I(B,[C(567),A$T()]),I(B,[C(568),A9v()]),I(B,[C(569),A$k()]),I(B,[C(570),A$h()]),I(B,[C(571),A9b()]),I(B,[C(572),A9i()]),I(B,[C(573),A$n()]),I(B,[C(574),A9N()]),I(B,[C(575),A82()]),I(B,[C(576),A_g()]),I(B,[C(577),A9h()]),I(B,[C(578),A$R()]),I(B,[C(579),A$y()]),I(B,[C(580),A$S()]),I(B,[C(581),A9d()]),I(B,[C(582),A_l()]),I(B,[C(583),A$q()]),I(B,[C(584),A9F()]),
I(B,[C(585),A_b()]),I(B,[C(586),A$$()]),I(B,[C(587),A92()]),I(B,[C(588),A9c()]),I(B,[C(589),A$4()]),I(B,[C(590),Bdq]),I(B,[C(591),A9I()]),I(B,[C(592),A$m()]),I(B,[C(593),Bdq]),I(B,[C(594),A80()]),I(B,[C(595),Bdr]),I(B,[C(596),A9m()]),I(B,[C(597),R(0,127)]),I(B,[C(598),R(128,255)]),I(B,[C(599),R(256,383)]),I(B,[C(600),R(384,591)]),I(B,[C(601),R(592,687)]),I(B,[C(602),R(688,767)]),I(B,[C(603),R(768,879)]),I(B,[C(604),R(880,1023)]),I(B,[C(605),R(1024,1279)]),I(B,[C(606),R(1280,1327)]),I(B,[C(607),R(1328,1423)]),
I(B,[C(608),R(1424,1535)]),I(B,[C(609),R(1536,1791)]),I(B,[C(610),R(1792,1871)]),I(B,[C(611),R(1872,1919)]),I(B,[C(612),R(1920,1983)]),I(B,[C(613),R(2304,2431)]),I(B,[C(614),R(2432,2559)]),I(B,[C(615),R(2560,2687)]),I(B,[C(616),R(2688,2815)]),I(B,[C(617),R(2816,2943)]),I(B,[C(618),R(2944,3071)]),I(B,[C(619),R(3072,3199)]),I(B,[C(620),R(3200,3327)]),I(B,[C(621),R(3328,3455)]),I(B,[C(622),R(3456,3583)]),I(B,[C(623),R(3584,3711)]),I(B,[C(624),R(3712,3839)]),I(B,[C(625),R(3840,4095)]),I(B,[C(626),R(4096,4255)]),
I(B,[C(627),R(4256,4351)]),I(B,[C(628),R(4352,4607)]),I(B,[C(629),R(4608,4991)]),I(B,[C(630),R(4992,5023)]),I(B,[C(631),R(5024,5119)]),I(B,[C(632),R(5120,5759)]),I(B,[C(633),R(5760,5791)]),I(B,[C(634),R(5792,5887)]),I(B,[C(635),R(5888,5919)]),I(B,[C(636),R(5920,5951)]),I(B,[C(637),R(5952,5983)]),I(B,[C(638),R(5984,6015)]),I(B,[C(639),R(6016,6143)]),I(B,[C(640),R(6144,6319)]),I(B,[C(641),R(6400,6479)]),I(B,[C(642),R(6480,6527)]),I(B,[C(643),R(6528,6623)]),I(B,[C(644),R(6624,6655)]),I(B,[C(645),R(6656,6687)]),
I(B,[C(646),R(7424,7551)]),I(B,[C(647),R(7552,7615)]),I(B,[C(648),R(7616,7679)]),I(B,[C(649),R(7680,7935)]),I(B,[C(650),R(7936,8191)]),I(B,[C(651),R(8192,8303)]),I(B,[C(652),R(8304,8351)]),I(B,[C(653),R(8352,8399)]),I(B,[C(654),R(8400,8447)]),I(B,[C(655),R(8448,8527)]),I(B,[C(656),R(8528,8591)]),I(B,[C(657),R(8592,8703)]),I(B,[C(658),R(8704,8959)]),I(B,[C(659),R(8960,9215)]),I(B,[C(660),R(9216,9279)]),I(B,[C(661),R(9280,9311)]),I(B,[C(662),R(9312,9471)]),I(B,[C(663),R(9472,9599)]),I(B,[C(664),R(9600,9631)]),
I(B,[C(665),R(9632,9727)]),I(B,[C(666),R(9728,9983)]),I(B,[C(667),R(9984,10175)]),I(B,[C(668),R(10176,10223)]),I(B,[C(669),R(10224,10239)]),I(B,[C(670),R(10240,10495)]),I(B,[C(671),R(10496,10623)]),I(B,[C(672),R(10624,10751)]),I(B,[C(673),R(10752,11007)]),I(B,[C(674),R(11008,11263)]),I(B,[C(675),R(11264,11359)]),I(B,[C(676),R(11392,11519)]),I(B,[C(677),R(11520,11567)]),I(B,[C(678),R(11568,11647)]),I(B,[C(679),R(11648,11743)]),I(B,[C(680),R(11776,11903)]),I(B,[C(681),R(11904,12031)]),I(B,[C(682),R(12032,12255)]),
I(B,[C(683),R(12272,12287)]),I(B,[C(684),R(12288,12351)]),I(B,[C(685),R(12352,12447)]),I(B,[C(686),R(12448,12543)]),I(B,[C(687),R(12544,12591)]),I(B,[C(688),R(12592,12687)]),I(B,[C(689),R(12688,12703)]),I(B,[C(690),R(12704,12735)]),I(B,[C(691),R(12736,12783)]),I(B,[C(692),R(12784,12799)]),I(B,[C(693),R(12800,13055)]),I(B,[C(694),R(13056,13311)]),I(B,[C(695),R(13312,19893)]),I(B,[C(696),R(19904,19967)]),I(B,[C(697),R(19968,40959)]),I(B,[C(698),R(40960,42127)]),I(B,[C(699),R(42128,42191)]),I(B,[C(700),R(42752,
42783)]),I(B,[C(701),R(43008,43055)]),I(B,[C(702),R(44032,55203)]),I(B,[C(703),R(55296,56191)]),I(B,[C(704),R(56192,56319)]),I(B,[C(705),R(56320,57343)]),I(B,[C(706),R(57344,63743)]),I(B,[C(707),R(63744,64255)]),I(B,[C(708),R(64256,64335)]),I(B,[C(709),R(64336,65023)]),I(B,[C(710),R(65024,65039)]),I(B,[C(711),R(65040,65055)]),I(B,[C(712),R(65056,65071)]),I(B,[C(713),R(65072,65103)]),I(B,[C(714),R(65104,65135)]),I(B,[C(715),R(65136,65279)]),I(B,[C(716),R(65280,65519)]),I(B,[C(717),R(0,1114111)]),I(B,[C(718),
A$o()]),I(B,[C(719),B7(0,1)]),I(B,[C(720),K0(62,1)]),I(B,[C(721),B7(1,1)]),I(B,[C(722),B7(2,1)]),I(B,[C(723),B7(3,0)]),I(B,[C(724),B7(4,0)]),I(B,[C(725),B7(5,1)]),I(B,[C(726),K0(448,1)]),I(B,[C(727),B7(6,1)]),I(B,[C(728),B7(7,0)]),I(B,[C(729),B7(8,1)]),I(B,[C(730),K0(3584,1)]),I(B,[C(731),B7(9,1)]),I(B,[C(732),B7(10,1)]),I(B,[C(733),B7(11,1)]),I(B,[C(734),K0(28672,0)]),I(B,[C(735),B7(12,0)]),I(B,[C(736),B7(13,0)]),I(B,[C(737),B7(14,0)]),I(B,[C(738),A$J(983040,1,1)]),I(B,[C(739),B7(15,0)]),I(B,[C(740),B7(16,
1)]),I(B,[C(741),B7(18,1)]),I(B,[C(742),A9C(19,0,1)]),I(B,[C(743),K0(1643118592,1)]),I(B,[C(744),B7(20,0)]),I(B,[C(745),B7(21,0)]),I(B,[C(746),B7(22,0)]),I(B,[C(747),B7(23,0)]),I(B,[C(748),B7(24,1)]),I(B,[C(749),K0(2113929216,1)]),I(B,[C(750),B7(25,1)]),I(B,[C(751),B7(26,0)]),I(B,[C(752),B7(27,0)]),I(B,[C(753),B7(28,1)]),I(B,[C(754),B7(29,0)]),I(B,[C(755),B7(30,0)])]);}
function Yf(){Cf.call(this);this.op=0;}
function AWz(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.op!=HE(HC(E9(e,d)))?(-1):2;}
function A8M(a){var b,c;b=GT(G3(a.op));c=new J;L(c);H(H(c,C(542)),b);return K(c);}
function OE(){B_.call(this);this.gX=0;}
function AUX(a){var b=new OE();AP8(b,a);return b;}
function AP8(a,b){B9(a);a.gX=b;}
function A4L(a,b){a.f=b;}
function A0P(a,b,c,d){var e,f;e=b+1|0;if(e>d.B){d.ec=1;return (-1);}f=Q(c,b);if(b>d.dw&&C1(Q(c,b-1|0)))return (-1);if(a.gX!=f)return (-1);return a.f.c(e,c,d);}
function ASh(a,b,c,d){var e,f,g,h;if(!(c instanceof BD))return Jm(a,b,c,d);e=d.dw;f=d.B;while(true){if(b>=f)return (-1);g=KF(c,a.gX,b);if(g<0)return (-1);if(g>e&&C1(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function A1e(a,b,c,d,e){var f,g;if(!(d instanceof BD))return Ju(a,b,c,d,e);f=e.dw;a:{while(true){if(c<b)return (-1);g=H_(d,a.gX,c);if(g<0)break a;if(g<b)break a;if(g>f&&C1(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AWW(a){var b,c;b=a.gX;c=new J;L(c);Bq(c,b);return K(c);}
function AO3(a,b){if(b instanceof E4)return 0;if(b instanceof EZ)return 0;if(b instanceof Eg)return 0;if(b instanceof Ew)return 0;if(b instanceof OM)return 0;if(!(b instanceof OE))return 1;return b.gX!=a.gX?0:1;}
function AW3(a,b){return 1;}
function OM(){B_.call(this);this.gE=0;}
function A2O(a){var b=new OM();AU0(b,a);return b;}
function AU0(a,b){B9(a);a.gE=b;}
function A0y(a,b){a.f=b;}
function AOK(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;g=BR(f,e);if(g>0){d.ec=1;return (-1);}h=Q(c,b);if(g<0&&Dq(Q(c,f)))return (-1);if(a.gE!=h)return (-1);return a.f.c(f,c,d);}
function A4Z(a,b,c,d){var e,f;if(!(c instanceof BD))return Jm(a,b,c,d);e=d.B;while(true){if(b>=e)return (-1);f=KF(c,a.gE,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dq(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AWu(a,b,c,d,e){var f,g;if(!(d instanceof BD))return Ju(a,b,c,d,e);f=e.B;a:{while(true){if(c<b)return (-1);g=H_(d,a.gE,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dq(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A8e(a){var b,c;b=a.gE;c=new J;L(c);Bq(c,b);return K(c);}
function AQN(a,b){if(b instanceof E4)return 0;if(b instanceof EZ)return 0;if(b instanceof Eg)return 0;if(b instanceof Ew)return 0;if(b instanceof OE)return 0;if(!(b instanceof OM))return 1;return b.gE!=a.gE?0:1;}
function A48(a,b){return 1;}
function Ew(){var a=this;Cf.call(a);a.kL=0;a.j8=0;a.hE=0;}
function A5C(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.kL==e&&a.j8==d?2:(-1);}
function A39(a,b,c,d){var e,f;if(!(c instanceof BD))return Jm(a,b,c,d);e=d.B;while(b<e){b=KF(c,a.kL,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.j8==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AP9(a,b,c,d,e){var f;if(!(d instanceof BD))return Ju(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=H_(d,a.j8,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kL==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A7t(a){var b,c,d;b=a.kL;c=a.j8;d=new J;L(d);Bq(d,b);Bq(d,c);return K(d);}
function A5v(a,b){if(b instanceof Ew)return b.hE!=a.hE?0:1;if(b instanceof Eg)return b.p(a.hE);if(b instanceof E4)return 0;if(!(b instanceof EZ))return 1;return 0;}
var AEM=G(F2);
function AQc(a,b){return b!=10?0:1;}
function AV5(a,b,c){return b!=10?0:1;}
var AEN=G(F2);
function A6i(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AX2(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AJn(){var a=this;B.call(a);a.pz=null;a.nu=null;a.j1=0;a.x3=0;}
function A4m(a){var b=new AJn();ASX(b,a);return b;}
function ASX(a,b){var c,d;while(true){c=a.j1;if(b<c)break;a.j1=c<<1|1;}d=c<<1|1;a.j1=d;d=d+1|0;a.pz=BI(d);a.nu=BI(d);a.x3=b;}
function Te(a,b,c){var d,e,f,g;d=0;e=a.j1;f=b&e;while(true){g=a.pz.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.nu.data[f]=c;}
function ACI(a,b){var c,d,e,f;c=a.j1;d=b&c;e=0;while(true){f=a.pz.data[d];if(!f)break;if(f==b)return a.nu.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.x3;}
var AG5=G();
var OC=G(Bi);
function A91(){var a=new OC();ASy(a);return a;}
function ASy(a){}
function AMe(a){return CQ(Ce(DQ(),9,13),32);}
var N3=G(Bi);
function A$M(){var a=new N3();AWX(a);return a;}
function AWX(a){}
function AMK(a){return Ce(DQ(),48,57);}
var AJi=G(Bi);
function A98(){var a=new AJi();AR6(a);return a;}
function AR6(a){}
function A5X(a){return Ce(DQ(),97,122);}
var AJE=G(Bi);
function A86(){var a=new AJE();AS1(a);return a;}
function AS1(a){}
function AW6(a){return Ce(DQ(),65,90);}
var AJG=G(Bi);
function A_d(){var a=new AJG();APK(a);return a;}
function APK(a){}
function ARi(a){return Ce(DQ(),0,127);}
var Ox=G(Bi);
function A_i(){var a=new Ox();AQw(a);return a;}
function AQw(a){}
function AHD(a){return Ce(Ce(DQ(),97,122),65,90);}
var MA=G(Ox);
function A$T(){var a=new MA();ASH(a);return a;}
function ASH(a){}
function AH6(a){return Ce(AHD(a),48,57);}
var AKF=G(Bi);
function A9v(){var a=new AKF();A30(a);return a;}
function A30(a){}
function A2p(a){return Ce(Ce(Ce(DQ(),33,64),91,96),123,126);}
var PD=G(MA);
function A$k(){var a=new PD();AVR(a);return a;}
function AVR(a){}
function AKM(a){return Ce(Ce(Ce(AH6(a),33,64),91,96),123,126);}
var AMq=G(PD);
function A$h(){var a=new AMq();AWS(a);return a;}
function AWS(a){}
function AUg(a){return CQ(AKM(a),32);}
var AIz=G(Bi);
function A9b(){var a=new AIz();A55(a);return a;}
function A55(a){}
function A04(a){return CQ(CQ(DQ(),32),9);}
var AHM=G(Bi);
function A9i(){var a=new AHM();A7K(a);return a;}
function A7K(a){}
function AUb(a){return CQ(Ce(DQ(),0,31),127);}
var ALD=G(Bi);
function A$n(){var a=new ALD();APU(a);return a;}
function APU(a){}
function AX5(a){return Ce(Ce(Ce(DQ(),48,57),97,102),65,70);}
var ANF=G(Bi);
function A9N(){var a=new ANF();AZW(a);return a;}
function AZW(a){}
function A4k(a){var b;b=new ADc;b.G7=a;BB(b);b.X=1;return b;}
var AKI=G(Bi);
function A82(){var a=new AKI();AV1(a);return a;}
function AV1(a){}
function AY6(a){var b;b=new Yn;b.Ha=a;BB(b);b.X=1;return b;}
var ANl=G(Bi);
function A_g(){var a=new ANl();APM(a);return a;}
function APM(a){}
function ASD(a){var b;b=new TE;b.GV=a;BB(b);return b;}
var AJa=G(Bi);
function A9h(){var a=new AJa();AUc(a);return a;}
function AUc(a){}
function AWe(a){var b;b=new TD;b.E3=a;BB(b);return b;}
var AJT=G(Bi);
function A$R(){var a=new AJT();AQt(a);return a;}
function AQt(a){}
function A02(a){var b;b=new Xd;b.F6=a;BB(b);Jy(b.T,0,2048);b.X=1;return b;}
var AHf=G(Bi);
function A$y(){var a=new AHf();AQa(a);return a;}
function AQa(a){}
function AQY(a){var b;b=new Z$;b.Hm=a;BB(b);b.X=1;return b;}
var AKV=G(Bi);
function A$S(){var a=new AKV();ATS(a);return a;}
function ATS(a){}
function A7O(a){var b;b=new QX;b.Gm=a;BB(b);b.X=1;return b;}
var ANr=G(Bi);
function A9d(){var a=new ANr();AUw(a);return a;}
function AUw(a){}
function AY3(a){var b;b=new ABu;b.Fq=a;BB(b);return b;}
var AJA=G(Bi);
function A_l(){var a=new AJA();A2A(a);return a;}
function A2A(a){}
function ATj(a){var b;b=new Yk;b.Ey=a;BB(b);b.X=1;return b;}
var ALY=G(Bi);
function A$q(){var a=new ALY();AO9(a);return a;}
function AO9(a){}
function AQ6(a){var b;b=new Ym;b.FH=a;BB(b);b.X=1;return b;}
var AIB=G(Bi);
function A9F(){var a=new AIB();AQg(a);return a;}
function AQg(a){}
function A1$(a){var b;b=new QA;b.F3=a;BB(b);b.X=1;return b;}
var AKn=G(Bi);
function A_b(){var a=new AKn();ATq(a);return a;}
function ATq(a){}
function A3l(a){var b;b=new AAn;b.HJ=a;BB(b);b.X=1;return b;}
var ANw=G(Bi);
function A$$(){var a=new ANw();A4d(a);return a;}
function A4d(a){}
function AXk(a){var b;b=new AAs;b.E_=a;BB(b);return b;}
var AIf=G(Bi);
function A92(){var a=new AIf();AQb(a);return a;}
function AQb(a){}
function AVL(a){var b;b=new ADG;b.Ho=a;BB(b);return b;}
var AHY=G(Bi);
function A9c(){var a=new AHY();A5I(a);return a;}
function A5I(a){}
function AUJ(a){var b;b=new ACB;b.EA=a;BB(b);b.X=1;return b;}
var AKG=G(Bi);
function A$4(){var a=new AKG();A2v(a);return a;}
function A2v(a){}
function A5Q(a){var b;b=new P4;b.HZ=a;BB(b);b.X=1;return b;}
var Lm=G(Bi);
function A9I(){var a=new Lm();ARb(a);return a;}
function ARb(a){}
function AIA(a){return CQ(Ce(Ce(Ce(DQ(),97,122),65,90),48,57),95);}
var ANP=G(Lm);
function A$m(){var a=new ANP();A2D(a);return a;}
function A2D(a){}
function AUy(a){var b;b=E8(AIA(a),1);b.X=1;return b;}
var AMu=G(OC);
function A80(){var a=new AMu();AXH(a);return a;}
function AXH(a){}
function AZ4(a){var b;b=E8(AMe(a),1);b.X=1;return b;}
var AHW=G(N3);
function A9m(){var a=new AHW();A2_(a);return a;}
function A2_(a){}
function ASb(a){var b;b=E8(AMK(a),1);b.X=1;return b;}
function ALG(){var a=this;Bi.call(a);a.us=0;a.Bg=0;}
function R(a,b){var c=new ALG();A7N(c,a,b);return c;}
function A7N(a,b,c){a.us=b;a.Bg=c;}
function ATA(a){return Ce(DQ(),a.us,a.Bg);}
var ALR=G(Bi);
function A$o(){var a=new ALR();AX9(a);return a;}
function AX9(a){}
function AXQ(a){return Ce(Ce(DQ(),65279,65279),65520,65533);}
function AMj(){var a=this;Bi.call(a);a.re=0;a.pH=0;a.zE=0;}
function B7(a,b){var c=new AMj();AQo(c,a,b);return c;}
function A9C(a,b,c){var d=new AMj();AXZ(d,a,b,c);return d;}
function AQo(a,b,c){a.pH=c;a.re=b;}
function AXZ(a,b,c,d){a.zE=d;a.pH=c;a.re=b;}
function A1R(a){var b;b=A97(a.re);if(a.zE)Jy(b.T,0,2048);b.X=a.pH;return b;}
function AMr(){var a=this;Bi.call(a);a.pc=0;a.nx=0;a.r8=0;}
function K0(a,b){var c=new AMr();AQ7(c,a,b);return c;}
function A$J(a,b,c){var d=new AMr();AY4(d,a,b,c);return d;}
function AQ7(a,b,c){a.nx=c;a.pc=b;}
function AY4(a,b,c,d){a.r8=d;a.nx=c;a.pc=b;}
function AOu(a){var b;b=new AB$;AI3(b,a.pc);if(a.r8)Jy(b.T,0,2048);b.X=a.nx;return b;}
var ALJ=G();
var AHt=G();
function AIe(b){var c,d,e,f,g,h,i;c=AWr(G5(b));d=NS(c);e=BI(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+NS(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Qb(c);h=h+1|0;}return e;}
function Ol(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function YV(){var a=this;B.call(a);a.z7=0;a.u3=0;a.Ae=null;}
function ARF(a,b,c){var d=new YV();AWR(d,a,b,c);return d;}
function AWR(a,b,c,d){a.z7=b;a.u3=c;a.Ae=d;}
function AJt(){var a=this;B.call(a);a.zb=null;a.AN=0;}
function AWr(a){var b=new AJt();A1b(b,a);return b;}
function A1b(a,b){a.zb=b;}
var AL6=G();
function NS(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.zb.data;f=b.AN;b.AN=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Qb(b){var c,d;c=NS(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function F_(){var a=this;B.call(a);a.k$=0;a.vC=0;a.kz=null;a.hS=null;a.Ah=null;a.mW=null;}
function Bds(a){var b=new F_();OB(b,a);return b;}
function OB(a,b){a.mW=b;a.vC=b.dl;a.kz=null;}
function FT(a){var b,c;if(a.kz!==null)return 1;while(true){b=a.k$;c=a.mW.cj.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.k$=b+1|0;}return 0;}
function ALK(a){var b;if(a.vC==a.mW.dl)return;b=new IT;Z(b);N(b);}
function ON(a){var b,c,d,e;ALK(a);if(!FT(a)){b=new Ni;Z(b);N(b);}b=a.kz;if(b!==null){c=a.hS;if(c!==null)a.Ah=c;a.hS=b;a.kz=b.dj;}else{d=a.mW.cj.data;e=a.k$;a.k$=e+1|0;b=d[e];a.hS=b;a.kz=b.dj;a.Ah=null;}}
var ACS=G(F_);
function Rr(a){ON(a);return a.hS.cU;}
var Vk=G(F_);
function Pt(a){ON(a);return a.hS;}
var ABJ=G(F_);
function AHm(){var a=this;B.call(a);a.SA=null;a.V1=0;}
function ALw(){B.call(this);this.Wh=null;}
function W8(){B.call(this);this.uE=null;}
function AVE(a,b){a.uE.g(F9(b));}
function W9(){var a=this;B.call(a);a.BO=null;a.BN=null;}
function AVZ(a,b){var c,d;c=a.BO;d=a.BN;b.text().then(Bz(c,"f"),Bz(d,"f"));}
function AGd(){var a=this;B.call(a);a.zY=null;a.zZ=null;}
function A5G(a,b){var c,d;c=a.zY;d=a.zZ;D4(c);d.g(b);}
function AEW(){var a=this;B.call(a);a.Ac=null;a.lQ=null;a.oh=null;}
function ADL(a){var b,c;b=a.Ac.next();c=Bas;b.then(Bz(a,"f"),Bz(c,"f"));}
function AVT(a,b){var c;if(b.done?1:0)a.lQ.pF();else{ADL(a);c=b.value;if(c.kind==='file'?1:0){b=AJy(c,AAO(a.oh));a.lQ.pY(b);}else{b=A8y(c,AAO(a.oh),null);a.lQ.oV(b);}}}
function ACm(){B.call(this);this.AL=null;}
function AUh(a,b){b.h2=a.AL.dE;}
function ACl(){B.call(this);this.wD=null;}
function A5l(a,b){b.hX=a.wD.dE.cC;}
function AF5(){var a=this;B.call(a);a.xy=null;a.xx=0;a.xA=0;a.xz=null;a.xB=null;}
function AXz(a,b){XO(a.xy,a.xx,a.xA,a.xz,a.xB,b);}
function W0(){var a=this;Ba.call(a);a.y3=null;a.HB=null;}
function ARo(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cQ^D9(a.y3,c):0;}
function WX(){var a=this;Ba.call(a);a.C1=null;a.xc=null;a.FR=null;}
function AZq(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cQ^D9(a.C1,c):0;return a.xc.p(b)&&!d?1:0;}
function Rc(){var a=this;Ba.call(a);a.me=null;a.Gu=null;}
function ATr(a,b){return a.bp^D9(a.me,b);}
function A2b(a){var b,c,d;b=new J;L(b);c=I1(a.me,0);while(c>=0){KI(b,G3(c));Bq(b,124);c=I1(a.me,c+1|0);}d=b.H;if(d>0)WL(b,d-1|0);return K(b);}
function ZS(){var a=this;Ba.call(a);a.A2=null;a.G_=null;}
function A5F(a,b){return a.A2.p(b);}
function ZQ(){var a=this;Ba.call(a);a.pK=0;a.zv=null;a.qo=null;}
function AWy(a,b){return !(a.pK^D9(a.qo.Q,b))&&!(a.pK^a.qo.e0^a.zv.p(b))?0:1;}
function ZR(){var a=this;Ba.call(a);a.nv=0;a.wZ=null;a.oX=null;}
function A3C(a,b){return !(a.nv^D9(a.oX.Q,b))&&!(a.nv^a.oX.e0^a.wZ.p(b))?1:0;}
function ZV(){var a=this;Ba.call(a);a.DL=0;a.w3=null;a.wV=null;a.GH=null;}
function A1m(a,b){return a.DL^(!a.w3.p(b)&&!a.wV.p(b)?0:1);}
function ZW(){var a=this;Ba.call(a);a.uN=0;a.AX=null;a.Ap=null;a.HV=null;}
function AOq(a,b){return a.uN^(!a.AX.p(b)&&!a.Ap.p(b)?0:1)?0:1;}
function ZT(){var a=this;Ba.call(a);a.tH=null;a.HY=null;}
function AR7(a,b){return Dg(a.tH,b);}
function ZU(){var a=this;Ba.call(a);a.Dp=null;a.GL=null;}
function ATZ(a,b){return Dg(a.Dp,b)?0:1;}
function ZX(){var a=this;Ba.call(a);a.uY=null;a.A0=0;a.wp=null;}
function AXu(a,b){return !Dg(a.uY,b)&&!(a.A0^D9(a.wp.Q,b))?0:1;}
function ZY(){var a=this;Ba.call(a);a.vu=null;a.B_=0;a.vk=null;}
function A0X(a,b){return !Dg(a.vu,b)&&!(a.B_^D9(a.vk.Q,b))?1:0;}
function Rb(){var a=this;Ba.call(a);a.wm=0;a.Da=null;a.xk=null;a.EH=null;}
function A8Z(a,b){return !(a.wm^a.Da.p(b))&&!Dg(a.xk,b)?0:1;}
function Rv(){var a=this;Ba.call(a);a.Dz=0;a.rM=null;a.r9=null;a.EX=null;}
function AR_(a,b){return !(a.Dz^a.rM.p(b))&&!Dg(a.r9,b)?1:0;}
function Q_(){var a=this;Ba.call(a);a.zX=null;a.E0=null;}
function AQy(a,b){return Dg(a.zX,b);}
function Ra(){var a=this;Ba.call(a);a.tv=null;a.HT=null;}
function A10(a,b){return Dg(a.tv,b)?0:1;}
function Rf(){var a=this;Ba.call(a);a.DJ=null;a.vo=0;a.Es=null;}
function AS0(a,b){return Dg(a.DJ,b)&&a.vo^D9(a.Es.Q,b)?1:0;}
function Q$(){var a=this;Ba.call(a);a.Cr=null;a.Bd=0;a.vn=null;}
function A6R(a,b){return Dg(a.Cr,b)&&a.Bd^D9(a.vn.Q,b)?0:1;}
function Rd(){var a=this;Ba.call(a);a.CH=0;a.y2=null;a.uL=null;a.GG=null;}
function A0c(a,b){return a.CH^a.y2.p(b)&&Dg(a.uL,b)?1:0;}
function Re(){var a=this;Ba.call(a);a.Cm=0;a.yy=null;a.CD=null;a.GM=null;}
function AVD(a,b){return a.Cm^a.yy.p(b)&&Dg(a.CD,b)?0:1;}
function SH(){B.call(this);this.rN=null;}
function A4W(a,b){var c,d,e,f,g;c=a.rN;D4(c.L);Ff(c.i4);d=NO(OV(c.f2));while(FT(d)){e=Pt(d);f=c.f2;g=e.cU;e=null;if(Ia(f,g))D6(f,g,e);}e=Bh();d=new J;L(d);H(H(d,C(756)),b);Bc(e,K(d));e=AJJ(b,c);D$(c.cN.eS,e);e.f6.e();CZ(c.lp,FX(EW(b),C(757)));Cn(c.L.F,c.cN.eS);}
var MY=G(0);
function ACA(){var a=this;B.call(a);a.ET=null;a.Db=null;a.mv=null;a.c4=null;a.k9=0;a.ql=0;}
function PT(a,b){var c,d,e;c=M(a.mv);if(b>=0&&b<=c){AGr(a.c4,null,(-1),(-1));d=a.c4;d.mY=1;d.fi=b;c=d.jz;if(c<0)c=b;d.jz=c;b=a.Db.cJ(b,a.mv,d);if(b==(-1))a.c4.ec=1;if(b>=0){d=a.c4;if(d.lf){e=d.eC.data;if(e[0]==(-1)){c=d.fi;e[0]=c;e[1]=c;}d.jz=Nq(d);return 1;}}a.c4.fi=(-1);return 0;}d=new BM;Bn(d,Dr(b));N(d);}
function AKm(a){return Ru(a.c4,0);}
function ALU(a){return TG(a.c4,0);}
function AG$(a){return a.c4.li;}
function SG(){var a=this;B.call(a);a.s9=null;a.s$=null;}
function A5j(a){var b,c;b=a.s9;c=a.s$;Ub();Ls(b,c,Bdt);}
function SE(){var a=this;B.call(a);a.B4=null;a.B3=null;}
function AR2(a){var b,c;b=a.B4;c=a.B3;Ub();Ls(b,c,Bdu);}
function SF(){var a=this;B.call(a);a.Er=null;a.Eq=null;}
function AXF(a){Ls(a.Er,a.Eq,null);}
function SI(){var a=this;B.call(a);a.An=null;a.Ao=null;}
function AON(a){var b,c,d,e,f,g,h;b=a.An;c=a.Ao;d=Ep(b.bE.d);e=Ih(b.bE.d);d=AD$(b.bE.f0,d,e);D4(b.g7.cm);b=b.bE;e=FZ(b,c);if(d!==null){f=b.d;g=e.bw;h=e.bB;e=new AEp;e.Gf=b;e.Gg=c;d.MV(f,g,h,1,e,b.kP);}}
function T1(){B.call(this);this.yA=null;}
function AW9(a){var b;b=a.yA;D4(b.g7.cm);GK(b.bE,X4(b),0);}
function T0(){B.call(this);this.v0=null;}
function A3H(a){var b;b=a.v0;D4(b.g7.cm);GK(b.bE,X4(b),1);}
function TZ(){B.call(this);this.s_=null;}
function A5c(a){var b,c,d;b=a.s_;D4(b.g7.cm);c=Iz(b);b=b.bE;BE(b);d=new AFz;d.sD=b;S6(c,d,AHF(C(758)));}
function S7(){var a=this;B.call(a);a.Bn=null;a.Bm=null;}
function AYK(a){var b,c;b=a.Bn;c=a.Bm;b=b.bE.d;b.q4=c;M$(b);}
var Sj=G(0);
var BcY=null;function ANj(){BcY=new Vj;}
function AMc(){B.call(this);this.Hx=null;}
function A8o(a){var b,c,d,e;b=a.Hx;c=Iz(b);d=b.g7.cm;e=new TF;e.D5=b;Fp(c,N1(d,e));}
function WQ(){B.call(this);this.xF=null;}
function APS(a,b){a.xF.g($rt_str(b.message));}
function AMw(){var a=this;B.call(a);a.R1=null;a.RZ=null;a.R2=0.0;}
function ZL(){B.call(this);this.sz=null;}
function A01(a,b){b.h2=a.sz;}
function AA9(){B.call(this);this.tc=null;}
function AVu(a,b){a.tc.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function SV(){var a=this;B.call(a);a.DW=null;a.D4=0;}
function ATo(a,b){var c,d,e,f,g,h;c=a.DW;d=a.D4;e=!d?c.cz.cV:c.cz.c8;D4(c.L);f=Bh();g=EW(b);h=new J;L(h);H(H(h,C(759)),g);Bc(f,K(h));g=new ACk;g.ds=c;g.h3=d;g.od=e;f=AJJ(b,g);if(!d)c.er=f;else c.eQ=f;f.cE.e();D$(e,f);b=c.eQ;if(b!==null&&c.er===null)CZ(c.g0,De(b));if(c.eQ===null){b=c.er;if(b!==null)CZ(c.g0,De(b));}b=c.eQ;if(b!==null&&c.er!==null){e=c.g0;f=De(b);h=De(c.er);b=new J;L(b);H(H(H(b,f),C(760)),h);CZ(e,K(b));}if(c.eQ!==null&&c.er!==null){c.k4=VY(null);b=VY(null);c.nO=b;e=c.q6;f=c.eQ;g=c.er;c=c.k4;e.f$.jr
=0;if(!Bk(De(f),De(g))){c.eX=3;b.eX=3;}M7(e,f,g,c,b);}}
function RD(){B.call(this);this.zN=null;}
function AVz(a){AKh(a.zN);}
function RB(){B.call(this);this.B$=null;}
function A1S(a){H6(a.B$);}
function RC(){B.call(this);this.rz=null;}
function A7S(a){AK_(a.rz);}
function VS(){B.call(this);this.Cc=null;}
function A5x(a){a.Cc.nc();}
function VU(){B.call(this);this.Ew=null;}
function AUC(a){a.Ew.lN();}
function ABd(){B.call(this);this.AM=null;}
function A6H(a){var b,c,d,e,f,g,h,i;b=a.AM;c=(b.sF.bN()).data;d=P(Bt,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new R_;i.ts=b;i.tr=h;e[f]=Y$(i,h);f=f+1|0;}return d;}
function ABR(){B.call(this);this.tE=null;}
function APk(a){a.tE.px.fI(0);}
function ABO(){B.call(this);this.CJ=null;}
function AQK(a){a.CJ.px.fI(1);}
function Uv(){B.call(this);this.x0=null;}
function AX0(a){var b,c,d,e,f;b=a.x0.d.i;c=b.cI;d=new J;L(d);V(H(d,C(761)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.ow;d=new J;L(d);V(H(d,C(762)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dH;e=GT(FD(b));AFN(d,0,d.dE,e);b=Bh();f=b.nY;f.data[0]=10;ZD(b,f,0,1);}
function Uw(){B.call(this);this.tB=null;}
function APi(a){ABW(a.tB);}
function Ux(){B.call(this);this.CB=null;}
function AQC(a){ADk(a.CB);}
function Uy(){B.call(this);this.yU=null;}
function AXJ(a){Pe(a.yU.d);}
function UL(){B.call(this);this.Bf=null;}
function A3P(a){Na(a.Bf);}
function AIT(){B.call(this);this.HI=null;}
function A8q(a){var b,c,d,e,f,g,h;b=a.HI;c=P(Bt,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Y$(Rz(b,g),Zg(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Y$(Rz(b,g),Zg(g));e=h;}return c;}
function AE7(){var a=this;B.call(a);a.m0=null;a.jq=0;}
var Vj=G();
var P$=G(Iy);
function ARI(a,b,c,d){var e,f,g;e=0;f=d.B;a:{while(true){if(b>f){b=e;break a;}g=G_(d,a.bf);Ea(d,a.bf,b);e=a.dJ.c(b,c,d);if(e>=0)break;Ea(d,a.bf,g);b=b+1|0;}}return b;}
function A8O(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=G_(e,a.bf);Ea(e,a.bf,c);f=a.dJ.c(c,d,e);if(f>=0)break;Ea(e,a.bf,g);c=c+(-1)|0;}}return c;}
function AQm(a){return null;}
var Ni=G(Bu);
function AEP(){B.call(this);this.sp=null;}
function AXx(a){ACx(a.sp);}
function AER(){B.call(this);this.BC=null;}
function AYU(a,b){F$(a.BC,b);}
function Wz(){B.call(this);this.rO=null;}
function AYx(a){AF2(a.rO);}
function WA(){B.call(this);this.D3=null;}
function AWx(a,b){F$(a.D3,b);}
function T4(){B.call(this);this.t5=null;}
function A12(a,b){b.hX=a.t5;}
function ABG(){B.call(this);this.Du=null;}
var AMI=G();
function AEF(){var a=this;B.call(a);a.eC=null;a.lI=null;a.qI=null;a.oy=null;a.sW=0;a.lf=0;a.dw=0;a.B=0;a.fi=0;a.li=0;a.hf=0;a.ec=0;a.Hv=0;a.jz=0;a.mY=0;}
function B2(a,b,c){a.lI.data[b]=c;}
function DP(a,b){return a.lI.data[b];}
function Nq(a){return TG(a,0);}
function TG(a,b){AB8(a,b);return a.eC.data[(b*2|0)+1|0];}
function Ea(a,b,c){a.eC.data[b*2|0]=c;}
function NM(a,b,c){a.eC.data[(b*2|0)+1|0]=c;}
function G_(a,b){return a.eC.data[b*2|0];}
function JR(a,b){return a.eC.data[(b*2|0)+1|0];}
function AJj(a){return Ru(a,0);}
function Ru(a,b){AB8(a,b);return a.eC.data[b*2|0];}
function Yw(a,b){return a.qI.data[b];}
function Fd(a,b,c){a.qI.data[b]=c;}
function AB8(a,b){var c;if(!a.lf){c=new CV;Z(c);N(c);}if(b>=0&&b<a.sW)return;c=new BM;Bn(c,Dr(b));N(c);}
function AGr(a,b,c,d){a.lf=0;a.mY=2;Ke(a.eC,(-1));Ke(a.lI,(-1));if(b!==null)a.oy=b;if(c>=0){a.dw=c;a.B=d;}a.fi=a.dw;}
function AH8(a){return a.mY;}
function AEX(){var a=this;B.call(a);a.BT=null;a.BU=0;}
function A2j(a){IN(a.BT,a.BU);}
function ABA(){B.call(this);this.rJ=null;}
function AT5(a){IN(a.rJ,1);}
function ABz(){B.call(this);this.xE=null;}
function A4N(a){IN(a.xE,0);}
function Tj(){var a=this;B.call(a);a.Bh=null;a.A4=0;}
function A7I(a){AAA(a.Bh,a.A4);}
function QY(){B.call(this);this.rE=null;}
function A3x(a,b){F$(a.rE,b);}
function AFz(){B.call(this);this.sD=null;}
function ARU(a,b){Dt(a.sD,b);}
var Hl=G(CF);
var Bdu=null;var Bdt=null;var Bdv=null;function Ub(){Ub=Bl(Hl);A8E();}
function A58(a,b){var c=new Hl();AIj(c,a,b);return c;}
function AK9(){Ub();return Bdv.eh();}
function AIj(a,b,c){Ub();Dx(a,b,c);}
function A8E(){var b;Bdu=A58(C(763),0);b=A58(C(764),1);Bdt=b;Bdv=I(Hl,[Bdu,b]);}
function ADB(){B.call(this);this.x4=null;}
function AM5(){B.call(this);this.Jk=null;}
var AM6=G();
function AM4(){var a=this;B.call(a);a.V7=null;a.V6=null;}
var EN=G(CF);
var Bdw=null;var Bdx=null;var Bdy=null;var Bdz=null;function A0x(){A0x=Bl(EN);ASO();}
function AMd(a,b){var c=new EN();AIn(c,a,b);return c;}
function AY9(){A0x();return Bdz.eh();}
function AIn(a,b,c){A0x();Dx(a,b,c);}
function ASO(){var b;Bdw=AMd(C(765),0);Bdx=AMd(C(766),1);b=AMd(C(767),2);Bdy=b;Bdz=I(EN,[Bdw,Bdx,b]);}
var ZB=G(0);
function Gh(){var a=this;Db.call(a);a.hj=null;a.hc=null;a.eK=null;a.fC=null;}
var BdA=null;var BdB=null;function AJJ(a,b){var c=new Gh();AMG(c,a,b);return c;}
function BdC(a,b,c){var d=new Gh();Mz(d,a,b,c);return d;}
function AMG(a,b,c){Mz(a,b,0,c);}
function Mz(a,b,c,d){KN(a,J2(b),c);a.eK=BdA;a.fC=BdB;a.hj=b;a.hc=d;Pw(a,H7());Jl(a);}
function AXT(a){return Jt(a.hj);}
function SM(a,b){return We(a.eK,b);}
function Pw(a,b){var c;c=new Tu;c.t$=a;c.t9=b;a.cE=c;a.f6=c;a.e1=BcM;}
function ADd(a,b){var c;c=new AGK;c.vd=a;c.vc=b;a.cE=c;a.f6=c;}
function AJ3(){BdA=P(Gh,0);BdB=P(Ja,0);}
function R_(){var a=this;B.call(a);a.ts=null;a.tr=null;}
function A2i(a){var b,c;b=a.ts;c=a.tr;b.jS.lw(c);}
function Tm(){B.call(this);this.B5=null;}
function ARL(a,b){var c,d;c=a.B5;d=b.jt;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
var ADD=G();
var BcZ=null;function A$1(){A$1=Bl(ADD);AZL();}
function AZL(){var b,c;b=BI((AK9()).data.length);c=b.data;BcZ=b;c[Bdu.dF]=1;c[Bdt.dF]=2;}
function Ta(){B.call(this);this.vU=null;}
function APx(a,b){Ve(Iz(a.vU),b,Bb_,AHF(C(768)));}
var Py=G(EM);
function AIL(){var a=this;B.call(a);a.PY=null;a.UM=null;a.N2=null;a.Lz=null;a.QJ=null;}
function PO(){var a=this;B.call(a);a.zn=null;a.zo=0.0;}
function A2G(a){var b,c;b=a.zn;c=a.zo;b.jS.jc(c);}
function Ps(){var a=this;Py.call(a);a.oC=null;a.nh=null;}
function A5M(a,b){var c,d,e,f;c=b.dF;d=c/32|0;e=1<<(c%32|0);f=a.nh.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function Qj(){EK.call(this);this.qC=null;}
function AYY(a,b){return a.qC.data[b];}
function AU3(a){return a.qC.data.length;}
function Ja(){Db.call(this);this.eV=null;}
function A8C(a,b,c){var d=new Ja();A1o(d,a,b,c);return d;}
function A1o(a,b,c,d){KN(a,b,c);a.eV=d;}
function AQA(a){return Om(a.eV);}
function ACk(){var a=this;B.call(a);a.h3=0;a.od=null;a.ds=null;}
function ATp(a,b){var c,d,e,f,g;c=Bh();d=EW(b.eV);e=new J;L(e);H(H(e,C(769)),d);Bc(c,K(e));c=b.eV;d=SK(a,c.iD);if(d===null)f=null;else{c=DJ(c);f=We(d.fC,c);}if(f===null){c=new AEq;d=a.ds;ANB(c,d.L,d.gV,d.hN);Me(c,b.eV);Ld(c);}else{Mq(a,f);c=new NU;g=a.ds;Vi(c,g.L,g.gV,g.hN);NP(c,b.eV,a.h3);NP(c,f.eV,a.h3?0:1);}}
function A61(a,b,c){var d,e,f,g;ADd(b,c);d=Bh();e=Jt(b.hj);f=new J;L(f);H(H(f,C(770)),e);Bc(d,K(f));d=UT(a,b);Mq(a,d);if(d!==null&&SX(d))d.cE.e();if(E_(b)>0)EU(a.od,c);OY(a.ds);g=b.eK.data;if(g.length==1&&!b.fC.data.length)g[0].cE.e();}
function Mq(a,b){(!a.h3?a.ds.cz.c8:a.ds.cz.cV).c6=b;}
function APB(a,b,c){var d;if(E_(b)>0)EU(a.od,c);Pw(b,c);d=UT(a,b);Mq(a,d);if(d!==null&&GI(d))d.cE.e();OY(a.ds);}
function UT(a,b){var c,d;a:{c=a.h3;if(!(c&&b===a.ds.eQ)){if(c)break a;if(b!==a.ds.er)break a;}return !c?a.ds.eQ:a.ds.er;}b=b.hj;d=SK(a,b.f8);return d===null?null:SM(d,J2(b));}
function SK(a,b){var c,d,e;c=!a.h3?a.ds.eQ:a.ds.er;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=SM(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
var Sv=G(Bu);
var Xt=G(Bu);
function VW(){GQ.call(this);this.Gi=0;}
function Sh(){GQ.call(this);this.HM=0;}
function ADc(){Ba.call(this);this.G7=null;}
function AXB(a,b){return CO(b)!=2?0:1;}
function Yn(){Ba.call(this);this.Ha=null;}
function AZ2(a,b){return CO(b)!=1?0:1;}
function TE(){Ba.call(this);this.GV=null;}
function APo(a,b){return S$(b);}
function TD(){Ba.call(this);this.E3=null;}
function A1P(a,b){return 0;}
function Xd(){Ba.call(this);this.F6=null;}
function ASN(a,b){return !CO(b)?0:1;}
function Z$(){Ba.call(this);this.Hm=null;}
function A7o(a,b){return CO(b)!=9?0:1;}
function QX(){Ba.call(this);this.Gm=null;}
function AVd(a,b){return Iu(b);}
function ABu(){Ba.call(this);this.Fq=null;}
function AWi(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Yk(){Ba.call(this);this.Ey=null;}
function A8w(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function Ym(){Ba.call(this);this.FH=null;}
function AQP(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function QA(){Ba.call(this);this.F3=null;}
function AXL(a,b){a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function AAn(){Ba.call(this);this.HJ=null;}
function A3M(a,b){return Lv(b);}
function AAs(){Ba.call(this);this.E_=null;}
function A5m(a,b){return AAt(b);}
function ADG(){Ba.call(this);this.Ho=null;}
function A7a(a,b){return CO(b)!=3?0:1;}
function ACB(){Ba.call(this);this.EA=null;}
function AX_(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function P4(){Ba.call(this);this.HZ=null;}
function AQG(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Iu(b);}return b;}
function M9(){Ba.call(this);this.oQ=0;}
function A97(a){var b=new M9();AI3(b,a);return b;}
function AI3(a,b){BB(a);a.oQ=b;}
function AVg(a,b){return a.bp^(a.oQ!=CO(b&65535)?0:1);}
var AB$=G(M9);
function A6t(a,b){return a.bp^(!(a.oQ>>CO(b&65535)&1)?0:1);}
function AEB(){var a=this;B.call(a);a.u1=null;a.C2=null;a.xR=0;a.nJ=0;}
function Oi(a,b){return Cl(a.u1)<b?0:1;}
var AHs=G(0);
var AIS=G(0);
function L$(){Ge.call(this);this.uz=null;}
function S3(){L$.call(this);this.s6=null;}
function TF(){B.call(this);this.D5=null;}
function A6O(a,b){Fu(a.D5.bE,b,Bb_);}
function RH(){var a=this;B.call(a);a.mM=null;a.mL=null;a.zQ=null;}
function ARa(a){GU(a.mM);GU(a.mL);}
function AOI(a){Hh(a.mM);Hh(a.mL);}
function AWL(a,b){Go(a.mM,b);Go(a.mL,b);}
function AU6(a,b){I5(a.zQ,b);}
function ZC(){var a=this;B.call(a);a.Ak=null;a.Al=null;}
function ADx(){var a=this;B.call(a);a.HF=null;a.HE=null;a.HD=null;}
function AEp(){var a=this;B.call(a);a.Gf=null;a.Gg=null;}
function Tu(){var a=this;B.call(a);a.t$=null;a.t9=null;}
function AU8(a){var b,c,d,e,f;b=a.t$;c=a.t9;d=Bh();e=De(b);f=new J;L(f);H(H(f,C(771)),e);Bc(d,K(f));d=b.hj;f=new ADa;f.dt=b;f.Et=c;f.mA=BP();f.m_=BP();Io(d,f);}
var Df=G(0);
var BaU=null;var Bb7=null;var BaW=null;var BaV=null;var BaY=null;var BaX=null;var Ba0=null;var BaZ=null;var Ba2=null;var Ba1=null;var Ba3=null;function AJI(){AJI=Bl(Df);A7W();}
function A7W(){BaU=Cs(0);Bb7=DF(8,8,8);BaW=S(C(772));BaV=DF(255,255,255);BaY=S(C(773));BaX=S(C(774));Ba0=S(C(775));BaZ=S(C(776));Ba2=Fj(205,205,205,153);Ba1=Fj(255,255,255,0);Ba3=S(C(125));}
function CE(){CF.call(this);this.qG=null;}
var BdD=null;var BdE=null;var BdF=null;var BdG=null;var BdH=null;var BdI=null;var BdJ=null;var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;function AI5(){AI5=Bl(CE);A8n();}
function DW(a,b,c){var d=new CE();ABD(d,a,b,c);return d;}
function A7_(a,b,c,d){var e=new CE();AHp(e,a,b,c,d);return e;}
function ANH(){AI5();return BdS.eh();}
function ABD(a,b,c,d){AI5();Dx(a,b,c);a.qG=Kr(d,null);}
function AHp(a,b,c,d,e){AI5();Dx(a,b,c);a.qG=Kr(d,e);}
function A8n(){var b;b=new CE;AJI();ABD(b,C(358),0,Bb7);BdD=b;BdE=DW(C(359),1,S(C(777)));BdF=DW(C(361),2,S(C(778)));BdG=DW(C(363),3,S(C(779)));BdH=DW(C(365),4,Bb7);BdI=DW(C(366),5,S(C(780)));BdJ=DW(C(368),6,S(C(411)));BdK=DW(C(370),7,S(C(781)));BdL=DW(C(372),8,S(C(782)));BdM=A7_(C(374),9,Bb7,DF(237,235,252));BdN=A7_(C(375),10,S(C(409)),S(C(783)));BdO=DW(C(376),11,S(C(411)));BdP=DW(C(378),12,S(C(412)));BdQ=DW(C(380),13,S(C(784)));b=DW(C(381),14,S(C(382)));BdR=b;BdS=I(CE,[BdD,BdE,BdF,BdG,BdH,BdI,BdJ,BdK,BdL,BdM,
BdN,BdO,BdP,BdQ,b]);}
var Ec=G(0);
var Ba7=null;var Ba8=null;var Ba4=null;var Ba5=null;var Ba6=null;var Bb8=null;var Bb9=null;var Ba9=null;var Ba$=null;function AZE(){AZE=Bl(Ec);A1j();}
function A1j(){Ba7=S(C(123));Ba8=S(C(785));Ba4=S(C(786));Ba5=S(C(787));Ba6=S(C(788));Bb8=S(C(123));Bb9=S(C(785));Ba9=Fj(205,205,205,153);Ba$=DF(247,248,250);}
function W5(){var a=this;B.call(a);a.yX=null;a.yY=null;}
var AGc=G(0);
function QB(){B.call(this);this.we=null;}
function A26(a){var b,c;b=a.we;c=b.Ak;b=b.Al;c.Ik(b.mS,b.qN,null);}
function Ts(){var a=this;B.call(a);a.Bw=null;a.Bv=null;a.Bu=0;}
function AOP(a){var b,c,d,e;b=a.Bw;c=a.Bv;d=a.Bu;c=EW(c);if(!d)b.oA=c;else b.yw=c;e=b.yw;if(e!==null&&b.oA!==null)CZ(b.g8,c);else{if(e!==null)CZ(b.g8,e);c=b.oA;if(c!==null)CZ(b.g8,c);}}
function ADl(){B.call(this);this.Dq=null;}
function A23(a){D4(a.Dq);}
function ADa(){var a=this;B.call(a);a.mA=null;a.m_=null;a.Et=null;a.dt=null;}
function A64(a,b){var c,d;c=new Gh;d=a.dt;Mz(c,b,d.gn+1|0,d.hc);BA(a.mA,c);}
function AXs(a,b){var c,d;c=DJ(b);d=A8C(c,a.dt.gn+1|0,b);a.dt.hc.sV(d,c);d.lR=ANW(a.dt.hc,d);BA(a.m_,d);}
function A7q(a){var b,c,d,e,f,g,h;if(!(EY(a.mA)&&EY(a.m_))){a.dt.eK=G0(a.mA,BdA);a.dt.fC=G0(a.m_,BdB);LO(a.dt.eK,BcN);LO(a.dt.fC,BcN);b=a.dt;c=b.eK;d=c.data;e=b.fC;f=e.data;g=d.length;h=f.length;d=P(Db,g+h|0);Dc(c,0,d,0,g);Dc(e,0,d,g,h);a.dt.e1=d;}IE(a.dt);b=a.dt;b.hc.Dr(b,a.Et);}
function PJ(){var a=this;B.call(a);a.v_=null;a.v$=null;a.wb=null;a.wa=null;a.v8=null;}
function AYR(a,b){ALz(a.v_,a.v$,a.wb,a.wa,a.v8,b);}
function AGC(){var a=this;B.call(a);a.Ej=null;a.Ek=null;a.El=null;a.Em=null;a.En=null;}
function A7M(a,b){var c,d,e,f,g,h;c=b.data;b=a.Ej;d=a.Ek;e=a.El;f=a.Em;g=a.En;HF(d);HF(e);if(c.length==1&&!((CP(c[0])).data[0]!=1?0:1)){h=H2(b.f$);f.dK=h;g.dK=h;O8(b.f$,f,g);OX(b.mJ);}}
function UJ(){var a=this;B.call(a);a.th=null;a.tg=null;}
function APJ(a,b){var c,d;b=a.th;c=a.tg;d=ANc(b.s6.Du.fZ);b=c.yX;c=c.yY;b=b.x4;if(c.H>0)LU(c,b);LU(c,d);return 1;}
function Tc(){var a=this;B.call(a);a.vV=null;a.vW=null;}
function A7U(a){a.vV.BB(a.vW);}
var ALi=G();
function AGK(){var a=this;B.call(a);a.vd=null;a.vc=null;}
function A22(a){var b,c;b=a.vd;c=a.vc;Jl(b);b.hc.sg(b,c);b.eK=BdA;b.fC=BdB;}
function RQ(){var a=this;B.call(a);a.wH=null;a.wI=null;}
function A2e(a,b){var c,d,e;c=a.wH;d=a.wI;Mj(c.f2,d);b=ALm(b);e=ARp(b.k0,AEu(d));D6(c.i4,d,e);if(BS(c.yO,d))Sc(c,e);}
function RR(){var a=this;B.call(a);a.uv=null;a.uu=null;}
function A8x(a,b){var c,d,e;c=a.uv;d=a.uu;Mj(c.f2,d);c=DG();e=new J;L(e);H(H(H(H(e,C(789)),d),C(30)),b);Bc(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",14,"diff",11,"menu",10,"parser",17,"common",18,"tree",18,"graph",20,"node",21,"ref",21,"decl",10,"ui",24,"window",24,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bU",A_I(AT9),"M",A_H(AHu)],Tr,0,B,[],0,3,0,0,0,YI,0,B,[],3,3,0,0,0,Yg,0,B,[],3,3,0,0,0,AFi,0,B,[YI,Yg],0,3,0,0,0,ALC,0,B,[],4,0,0,0,0,ALo,0,B,[],4,3,0,0,0,Hz,0,B,[],0,3,0,0,0,EQ,0,Hz,[],0,3,0,0,0,Bu,0,EQ,[],0,3,0,0,0,AB2,0,Bu,[],0,3,0,0,0,C3,0,B,[],3,3,0,0,0,CM,0,B,[],3,3,0,0,0,K3,0,B,[],3,3,0,0,0,BD,"String",3,B,[C3,CM,K3],0,3,[0,0,0],Gw,["M",A_H(AP6),"bU",A_I(Bk),"rd",A_H(KG),"nj",A_I(ARH)],F0,0,Hz,[],0,3,0,0,0,I3,0,F0,[],0,3,0,0,0,AL7,0,I3,[],0,3,0,0,0,DM,0,B,[C3],1,3,0,0,
0,Il,0,DM,[CM],0,3,0,0,["M",A_H(AXM),"bU",A_I(A8d),"nj",A_I(A3h)],Ht,0,B,[C3,K3],0,0,0,0,["kI",A_I(NL),"M",A_H(K)],Kq,0,B,[],3,3,0,0,0,J,0,Ht,[Kq],0,3,0,0,["q2",A_L(A3c),"qr",A_K(AQX),"M",A_H(Eu),"kI",A_I(ATk),"rj",A_J(A3B)],Fq,0,I3,[],0,3,0,0,0,AM_,0,Fq,[],0,3,0,0,0,AL2,0,Fq,[],0,3,0,0,0,ADC,0,B,[],3,3,0,0,0,Dw,0,B,[],3,3,0,0,0,Z9,0,B,[],3,0,0,0,0,KU,0,B,[ADC,Dw,Z9],1,3,0,0,["b1",A_H(ET)],AB1,0,KU,[],0,3,0,0,0,AK2,0,B,[],0,3,0,0,0,ANQ,0,B,[],4,3,0,0,0,BY,0,B,[],3,3,0,0,0,Ch,0,B,[BY],3,3,0,0,0,ADO,0,B,[Ch],
0,3,0,0,["bo",A_I(A8t)],AI7,0,B,[],0,3,0,0,0,AME,0,B,[BY],1,3,0,0,0,AG_,0,B,[],3,3,0,0,0,ANC,0,B,[],3,3,0,0,0,AJD,0,B,[],3,3,0,0,0,MQ,"FontConfigJs",27,B,[],0,3,[0,0,0],0,0,AHE,0,B,[BY],1,3,0,0,0,ADP,0,B,[Ch],0,3,0,0,["bo",A_I(AOr)],ADN,0,B,[Ch],0,3,0,0,["bo",A_I(A7b)],Mu,0,B,[],4,3,0,0,0,AJC,0,B,[],4,3,0,0,0,ALV,0,B,[],0,3,0,0,0,AOo,0,B,[],4,3,0,0,0,YJ,0,B,[Ch],0,3,0,0,["bo",A_I(A4B)]]);
$rt_metadata([AJP,0,B,[BY],1,3,0,0,0,ALd,0,B,[],0,3,0,0,0,AEY,0,B,[BY],3,3,0,0,0,AMt,0,B,[AEY],1,3,0,0,["Oh",A_I(A2m),"Ve",A_H(AT4)],AIq,0,B,[BY],1,3,0,0,0,GR,0,B,[],3,3,0,0,0,Uq,0,B,[GR],0,3,0,0,0,BM,0,Bu,[],0,3,0,0,0,AMU,0,B,[],4,3,0,0,0,GB,0,Bu,[],0,3,0,0,0,JX,0,Bu,[],0,3,0,0,0,Ds,0,B,[CM],0,3,0,0,0,Yb,0,B,[BY],3,3,0,0,0,ACC,0,B,[Yb],3,3,0,0,0,Fk,0,B,[BY],3,3,0,0,0,AK6,0,B,[BY,ACC,Fk],1,3,0,0,["MW",A_H(A4e),"Nw",A_I(A6y),"V5",A_I(A6k),"Q7",A_I(A00),"Us",A_I(AOM),"PB",A_H(AQQ),"Vc",A_J(A6u),"NP",A_K(AS8),
"Oq",A_H(AZ0),"OJ",A_H(A44),"Ty",A_I(A68),"RP",A_H(AUp),"Wo",A_I(ASF),"Ly",A_H(AUM),"St",A_H(AYN),"Wi",A_H(ATB),"IL",A_I(APt),"NU",A_H(A8g),"TT",A_J(A2N),"RC",A_J(AUj),"U4",A_J(AXX),"UH",A_H(AZh),"Vw",A_H(ASo),"Ow",A_I(AQ0),"Te",A_I(ARR),"Q1",A_J(A2X),"Lc",A_H(ATJ),"Og",A_I(AZ3),"PO",A_H(ARQ),"OR",A_H(AVU),"QO",A_I(AOx),"Lx",A_I(AXi),"Wd",A_I(A0m),"KJ",A_H(A62),"Rr",A_J(A0v),"U0",A_I(A5f),"K2",A_H(AWm),"P$",A_J(AVb),"Jg",A_J(AUU),"Sc",A_H(AXb),"Ox",A_I(AYl),"Kn",A_K(A4q),"JH",A_H(AQV),"Kr",A_J(A0L),"RI",A_H(AZF),
"Ne",A_H(A8a),"Tv",A_H(AU_),"H5",A_H(AZD),"MO",A_J(AVc),"PP",A_I(A09),"Tb",A_I(AR3),"JB",A_H(A5W)],QD,0,B,[Ch],0,3,0,0,["bo",A_I(AVQ)],AMf,0,B,[],4,3,0,0,0,AAm,0,B,[Fk],3,3,0,0,0,Ti,0,B,[Fk],3,3,0,0,0,ABM,0,B,[Fk],3,3,0,0,0,UO,0,B,[Fk],3,3,0,0,0,AF7,0,B,[Fk],3,3,0,0,0,AEo,0,B,[Fk,AAm,Ti,ABM,UO,AF7],3,3,0,0,0,ALA,0,B,[BY,AEo],1,3,0,0,["T8",A_J(A4I),"VC",A_J(A3e),"JJ",A_K(ASq),"Rw",A_I(APL),"Ml",A_K(A1q)],BU,0,Bu,[],0,3,0,0,0,AGL,0,Bu,[],0,3,0,0,0,IY,0,BM,[],0,3,0,0,0,ALO,0,B,[],0,3,0,0,0,ABi,0,B,[],3,3,0,0,0,ZZ,
0,B,[ABi],3,3,0,0,0,ACK,0,B,[ZZ],0,3,0,0,0,BC,0,B,[],3,3,0,0,0,AMB,0,B,[BC],0,3,0,0,0,T,0,B,[],3,3,0,0,0,AB_,0,B,[T],0,3,0,0,0,ABT,0,B,[BY],3,3,0,0,0,U5,0,B,[ABT],0,3,0,0,["LA",A_I(A57)],U3,0,B,[T],0,3,0,0,0,AA$,0,B,[BY],3,3,0,0,0,U4,0,B,[AA$],0,3,0,0,["DU",A_J(AUY)],AJZ,0,B,[BY],1,3,0,0,0,CH,0,B,[BY],3,3,0,0,0,U2,0,B,[CH],0,3,0,0,["cP",A_I(AY7)],ACt,0,B,[],0,3,0,0,0,AHL,0,B,[],0,3,0,0,0,OJ,0,B,[],1,3,0,0,0,V5,0,OJ,[],0,3,0,0,0,WN,0,B,[],3,3,0,0,["fM",A_I(AYZ)],Id,0,B,[WN],3,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)]]);
$rt_metadata([F3,0,B,[Id],1,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24),"e_",A_H(EY),"r$",A_I(A5_)],Os,0,B,[Id],3,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],Nu,0,B,[Os],3,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],EK,0,F3,[Nu],1,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24),"qV",A_I(AV9),"cl",A_H(B$),"v1",A_J(AVr),"pA",A_J(A6T),"na",A_I(A5e),"bU",A_I(AUB)],M3,0,EK,[],1,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],PN,0,B,[Id],3,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],AGs,0,B,[PN,Os],3,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],Vm,0,M3,[AGs],0,3,0,0,["fM",A_I(AYZ),
"qS",A_I(A24)],Mi,0,B,[],3,3,0,0,0,Ev,0,B,[Mi],1,3,0,0,0,Ek,0,B,[],3,3,0,0,0,Xy,0,B,[Mi],3,3,0,0,0,Qa,0,B,[Xy],3,3,0,0,0,AAc,0,Ev,[Ek,C3,Qa],0,3,0,0,0,ACv,0,B,[BC],0,3,0,0,0,ACw,0,B,[Ch],0,3,0,0,["bo",A_I(AZg)],AAL,0,B,[],0,3,0,0,0,AFm,0,B,[CH],0,3,0,0,["cP",A_I(A4X)],AFn,0,B,[CH],0,3,0,0,["cP",A_I(A4$)],AFo,0,B,[CH],0,3,0,0,["cP",A_I(AUn)],AFp,0,B,[CH],0,3,0,0,["cP",A_I(A3z)],AFq,0,B,[CH],0,3,0,0,["cP",A_I(A3O)],AFr,0,B,[CH],0,3,0,0,["cP",A_I(AV0)],AFs,0,B,[CH],0,3,0,0,["cP",A_I(ASp)],AFt,0,B,[CH],0,3,0,0,
["cP",A_I(A8G)],AFu,0,B,[CH],0,3,0,0,["cP",A_I(ARP)],AFv,0,B,[CH],0,3,0,0,["cP",A_I(AWK)],XP,0,B,[CH],0,3,0,0,["cP",A_I(A8c)],XQ,0,B,[CH],0,3,0,0,["cP",A_I(AT1)],XR,0,B,[CH],0,3,0,0,["cP",A_I(AUr)],XS,0,B,[CH],0,3,0,0,["cP",A_I(A5h)],AD9,0,B,[],3,3,0,0,0,AEg,0,B,[AD9],0,3,0,0,0,AEf,0,B,[CH],0,3,0,0,["cP",A_I(ATb)],AJ9,0,B,[],0,3,0,0,0,Ck,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,["bZ",A_I(A2$),"ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w)],EA,0,B,[],3,3,0,0,0,DU,0,B,[],3,3,0,0,0,CK,0,B,[DU],3,3,0,0,0,Fg,0,B,[],3,3,0,0,
0,CA,0,B,[],3,3,0,0,0,Fz,0,B,[CA],3,3,0,0,0,SC,0,B,[Dw],0,3,0,0,0,Bg,"V2i",30,B,[],0,3,[0,0,0],0,["M",A_H(AKJ),"bU",A_I(AS2)],AFA,0,B,[],0,3,0,0,0,AJF,0,B,[],0,3,0,0,0,ALl,0,B,[],3,3,0,0,0,AA7,0,B,[],0,3,0,0,0,OZ,0,B,[],0,3,0,0,0]);
$rt_metadata([Dn,0,OZ,[],0,3,0,0,0,ANO,0,Dn,[],0,3,0,0,0,FU,0,Dn,[],0,3,0,0,0,ABw,0,Dn,[],0,3,0,0,0,AIt,0,FU,[],0,3,0,0,0,H9,0,FU,[],0,3,0,0,0,QK,0,H9,[],0,3,0,0,0,AKp,0,H9,[],0,3,0,0,0,ALB,0,FU,[],0,3,0,0,0,ANb,0,Dn,[],0,3,0,0,0,AHn,0,Dn,[],0,3,0,0,0,ACc,0,B,[BY],3,3,0,0,0,AOn,0,B,[ACc],3,3,0,0,0,Lh,0,B,[GR],0,3,0,0,["ro",A_J(NJ)],AA6,0,B,[Dw],0,3,0,0,0,Sr,0,B,[],0,3,0,0,0,CF,0,B,[CM,C3],1,3,0,0,0,HL,0,CF,[],12,3,0,Ie,0,Nd,0,B,[],3,3,0,0,0,UG,0,B,[Nd],3,3,0,0,0,AEm,0,B,[],3,3,0,0,0,Hv,0,B,[UG,AEm],1,3,0,0,
0,NF,0,Hv,[],0,3,0,0,0,AH$,0,NF,[],0,3,0,0,0,Ij,0,Hv,[],1,3,0,0,0,Mt,0,Ij,[],0,3,0,0,["nR",A_K(AS6)],Ex,0,CF,[],12,3,0,AN8,0,Nx,0,B,[CM],1,3,0,0,0,Nf,0,Nx,[],0,3,0,AH5,0,L5,0,B,[],32,0,0,AK5,0,AAg,0,B,[],0,3,0,0,0,IL,0,CF,[],12,0,0,AIO,0,Iq,0,CF,[],12,3,0,AIQ,0,Ou,0,Ij,[],0,3,0,0,["nR",A_K(ARt)],Wb,0,EQ,[],0,3,0,0,0,AJB,0,BU,[],0,3,0,0,0,CB,0,B,[Dw],1,3,0,0,["cy",A_I(A8b)],Ne,0,B,[BY],3,3,0,0,0,AGo,0,B,[Ne],0,3,0,0,["bo",A_I(AWs)],AGp,0,B,[Ne],0,3,0,0,["bo",A_I(APZ)],PK,0,B,[],0,3,0,0,0,IU,0,B,[],1,3,0,0,0,ACp,
0,B,[],3,3,0,0,0,Mm,0,IU,[CM,Kq,K3,ACp],1,3,0,0,0,NX,0,IU,[CM],1,3,0,0,0,Jn,0,B,[],0,3,0,HZ,0,AMv,0,B,[BY],1,3,0,0,0,LL,0,Mm,[],1,0,0,0,0,AIo,0,LL,[],0,0,0,0,0,Mf,0,B,[],1,3,0,0,0]);
$rt_metadata([O4,0,B,[],0,3,0,0,0,AFH,0,B,[],0,0,0,0,0,IX,0,B,[],0,3,0,0,0,Rt,0,IX,[],0,3,0,0,0,AJL,0,B,[],0,3,0,0,0,PH,0,IX,[],0,3,0,0,0,Vb,0,B,[BY],3,3,0,0,0,Qu,0,B,[Vb],0,3,0,0,["OD",A_I(A3p)],W,0,B,[],3,3,0,0,0,AEt,0,B,[W],0,3,0,0,["g",A_I(O6)],AFO,0,NX,[],0,0,0,0,0,AI0,0,B,[BY],1,3,0,0,0,Og,0,B,[],4,3,0,A2W,0,HW,"FsItem",10,B,[],3,3,0,0,0,JQ,0,B,[HW],3,3,0,0,0,Mk,"JsFileHandle",28,B,[JQ],0,3,[0,0,0],0,["u",A_H(DJ),"uQ",A_H(APf),"M",A_H(Om)],Kg,0,B,[HW],3,3,0,0,0,O0,"JsDirectoryHandle",28,B,[Kg],0,0,[0,0,0],
0,["u",A_H(J2),"uQ",A_H(A7E),"M",A_H(Jt)],AFc,0,B,[],3,3,0,0,0,AMM,"JsArrayView",28,B,[AFc],0,3,[0,0,0],0,["M",A_H(A03)],WD,0,B,[Ch],0,3,0,0,["bo",A_I(A27)],Ow,0,Mf,[],1,3,0,0,0,RP,0,Ow,[],0,3,0,0,0,JP,0,EQ,[],0,3,0,0,0,J6,0,B,[],3,3,0,0,0,Nm,0,B,[J6,C3],0,3,0,0,0,Lr,0,Nm,[],0,0,0,0,0,AG1,0,CB,[],0,3,0,0,["bJ",A_H(ATV),"b5",A_J(ASE)],It,0,CB,[],1,3,0,0,["b5",A_J(AIE)],B8,0,It,[],1,3,0,0,["bJ",A_H(ARn),"b5",A_J(Gp),"cy",A_I(LD)],E0,0,B,[],3,3,0,0,0,Ik,0,B,[],3,3,0,0,0,EE,0,B,[],3,3,0,0,0,Lf,0,B8,[CG,E0,Ik,EE,
EA,Fg,Fz],0,3,0,0,["e6",A_J(AX$),"cy",A_I(AUE),"bJ",A_H(AOB),"nc",A_H(ASL),"lN",A_H(ASK),"lw",A_I(A8L),"jc",A_I(A20),"fI",A_I(AOE),"b5",A_J(AOT),"d0",A_I(AYo),"bZ",A_I(A0u),"cD",A_K(AV$),"ct",A_J(ASW),"dC",A_J(A7P),"dz",A_K(ATv),"bN",A_H(A7H)],Wi,"DiffDemoJs",11,Lf,[],0,3,[0,0,0],0,0,AJ7,0,B,[],0,3,0,0,0,AHe,0,B,[],0,3,0,0,0,JM,0,B,[BY],3,3,0,0,0,YR,0,B,[JM],0,3,0,0,["bo",A_I(ARz)],YQ,0,B,[JM],0,3,0,0,["bo",A_I(AU7)],YO,0,B,[Ch],0,3,0,0,["bo",A_I(AVB)],YN,0,B,[Ch],0,3,0,0,["bo",A_I(A0M)],U6,0,B,[W],0,3,0,0,
["g",A_I(A8h)],AI4,0,B,[W],0,3,0,0,["g",A_I(A3g)],Ws,0,B,[BC],0,3,0,0,["bc",A_I(AXw)],Wr,0,B,[BC],0,3,0,0,["bc",A_I(AOY)],Wo,0,B,[BC],0,3,0,0,["bc",A_I(A1t)],Wn,0,B,[BC],0,3,0,0,["bc",A_I(A4C)],Wq,0,B,[BC],0,3,0,0,["bc",A_I(ARh)],Wp,0,B,[BC],0,3,0,0,["bc",A_I(AYW)]]);
$rt_metadata([Wv,0,B,[BC],0,3,0,0,["bc",A_I(AQW)],Wu,0,B,[BC],0,3,0,0,["bc",A_I(ATM)],Wx,0,B,[BC],0,3,0,0,["bc",A_I(A6b)],Ww,0,B,[BC],0,3,0,0,["bc",A_I(AOC)],ADg,0,B,[BC],0,3,0,0,["bc",A_I(AOR)],ADf,0,B,[BC],0,3,0,0,["bc",A_I(A3n)],ADe,0,B,[BC],0,3,0,0,["bc",A_I(AUO)],AC0,0,B,[BC],0,3,0,0,["bc",A_I(ARD)],ACZ,0,B,[BC],0,3,0,0,["bc",A_I(AY_)],ACX,0,B,[BC],0,3,0,0,["bc",A_I(A7j)],ACW,0,B,[BC],0,3,0,0,["bc",A_I(ATX)],ACV,0,B,[BC],0,3,0,0,["bc",A_I(A6d)],ACU,0,B,[BC],0,3,0,0,["bc",A_I(AOt)],ACT,0,B,[BC],0,3,0,0,
["bc",A_I(A51)],AC4,0,B,[BC],0,3,0,0,["bc",A_I(A5b)],AC3,0,B,[BC],0,3,0,0,["bc",A_I(AQr)],AC2,0,B,[BC],0,3,0,0,["bc",A_I(A2q)],AC1,0,B,[BC],0,3,0,0,["bc",A_I(ASz)],AC$,0,B,[BC],0,3,0,0,["bc",A_I(ASA)],AC9,0,B,[BC],0,3,0,0,["bc",A_I(AZR)],AC8,0,B,[BC],0,3,0,0,["bc",A_I(AQF)],AC7,0,B,[BC],0,3,0,0,["bc",A_I(A4_)],AC6,0,B,[BC],0,3,0,0,["bc",A_I(AXP)],CJ,0,B,[Dw],0,3,0,0,["b1",A_H(AWd),"ir",A_H(A4s),"d1",A_K(Kw),"dZ",A_I(AN5),"cy",A_I(A0D),"sS",A_I(ATQ),"p8",A_I(AX4),"mk",A_J(A5O),"kV",A_H(AYa),"cD",A_K(ASu),"ct",
A_J(AP7),"dC",A_J(AUA),"bZ",A_I(AXO),"dz",A_K(A5E)],AHX,0,CJ,[],0,3,0,0,["dZ",A_I(AJh)],AIr,0,B,[],0,3,0,0,0,FA,0,B,[Ck],3,3,0,0,["x9",A_H(A4u),"v9",A_H(ARJ),"e6",A_J(AOz),"Bo",A_H(AYP)],Sf,0,B,[],3,0,0,0,0,Nc,0,B,[FA],3,3,0,0,["x9",A_H(A4u),"v9",A_H(ARJ),"e6",A_J(AOz),"Bo",A_H(AYP)],AH2,"EditorComponent",11,CJ,[FA,CG,Ik,Sf,Nc],0,3,[0,0,0],0,["d1",A_K(H3),"mk",A_J(AVi),"qD",A_J(A8i),"v9",A_H(A1N),"x9",A_H(AZI),"nc",A_H(GU),"lN",A_H(Hh),"lw",A_I(Go),"jc",A_I(AV2),"kV",A_H(HR),"b1",A_H(AZ8),"cy",A_I(HG),"rp",
A_I(AL$),"ir",A_H(AJU),"qK",A_H(AWY),"dZ",A_I(A3T),"l4",A_H(Vv),"ld",A_H(Vu),"ic",A_I(AVI),"lD",A_H(AVv),"mK",A_H(AYM),"dz",A_K(HP),"dC",A_J(JI),"ct",A_J(J7),"cD",A_K(I9),"bZ",A_I(Kb),"bm",A_I(A7V),"e6",A_J(GK),"Bo",A_H(AXV),"M",A_H(A1f)],AKU,0,B,[],0,3,0,0,0,Ss,0,B,[W],0,3,0,0,["g",A_I(AWC)],Sp,0,B,[W],0,3,0,0,["g",A_I(AVy)],Sq,"Diff0$<init>$lambda$_0_2",29,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AQ4)],F1,"CtrlO",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AUi)],Sk,0,B,[W],0,3,0,0,["g",A_I(A6G)],Sl,"Diff0$<init>$lambda$_0_4",
29,B,[CK],0,3,[0,0,0],0,["bF",A_I(A4i)],CL,0,B,[],3,3,0,0,0,AF3,"WindowManager",25,B,[CG,CL],0,3,[0,0,0],0,["bZ",A_I(AZl),"cD",A_K(AQd),"ct",A_J(ASw),"dC",A_J(A7L),"eu",A_J(A28)],Vh,"UiContext",24,B,[Fg,Fz],0,3,[0,0,0],0,["e6",A_J(A6B),"bN",A_H(A4t)],Yd,"WindowScene$<init>$lambda$_1_0",11,B,[EA],0,3,[0,0,0],0,["dz",A_K(A7D)],Yc,"WindowScene$<init>$lambda$_1_1",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(AQf)],AHP,0,B,[],0,3,0,0,0,AGm,0,B,[],0,3,0,0,0,AGb,0,B,[],0,3,0,0,0,FV,0,B,[Dw],0,3,0,0,0,AKl,0,B,[],0,3,0,0,0,AHO,
0,B,[Dw],0,3,0,0,0,Zp,0,B,[W],0,3,0,0,0,Zo,0,B,[W],0,3,0,0,["g",A_I(APG)]]);
$rt_metadata([Zn,0,B,[W],0,3,0,0,["g",A_I(AOU)],AM9,0,B,[],0,3,0,0,0,Zm,0,B,[T],0,3,0,0,["e",A_H(AZp)],Zt,0,B,[T],0,3,0,0,["e",A_H(A1V)],Zs,0,B,[T],0,3,0,0,["e",A_H(A8X)],Zr,0,B,[T],0,3,0,0,["e",A_H(ATG)],Zq,0,B,[T],0,3,0,0,["e",A_H(AVC)],Zl,0,B,[T],0,3,0,0,["e",A_H(A8j)],WF,0,B,[T],0,3,0,0,["e",A_H(ATI)],WG,0,B,[T],0,3,0,0,["e",A_H(A47)],AHl,0,B,[],3,3,0,0,0,ACe,"Scene1$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AVe)],ACd,"Scene1$<init>$lambda$_0_1",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AYQ)],Vt,"Window",
25,B,[],0,3,[0,0,0],0,0,K4,0,B,[],0,3,0,0,0,FP,0,B,[],0,3,0,0,0,Oe,0,FP,[],0,3,0,0,0,ADb,0,FP,[],0,3,0,0,0,AAT,0,FP,[],0,3,0,0,0,GM,0,B,[],3,3,0,0,0,T9,0,B,[],3,3,0,0,0,B3,"V4f",30,B,[],0,3,[0,0,0],0,["bU",A_I(AYB),"M",A_H(AQe)],JO,0,B,[],3,3,0,0,0,ALe,0,EK,[Ek,C3,JO],0,3,0,0,["qS",A_I(A24),"ji",A_I(BL),"da",A_H(A4M),"qV",A_I(BA),"pA",A_J(AMo),"na",A_I(E5),"r$",A_I(AJN),"jW",A_H(Je),"v1",A_J(ALs),"fM",A_I(FW),"M",A_H(ANc)],Ix,0,B,[],0,3,0,0,0,Ml,0,B,[],0,3,0,0,0,Lp,"GL$Texture",10,B,[Dw],0,3,[ALl,0,"Texture"],
0,["b1",A_H(AI$)],AAJ,0,B,[],3,0,0,0,0,PE,0,B,[],3,3,0,0,0,AA2,"UiContext$<init>$lambda$_0_0",24,B,[T],0,3,[0,0,0],0,["e",A_H(A2x)],AA1,"UiContext$<init>$lambda$_0_1",24,B,[T],0,3,[0,0,0],0,["e",A_H(AY$)],ANX,0,B,[],0,3,0,0,0,Vf,0,B,[],0,3,0,0,0,HA,0,B,[],1,3,0,0,0,ABZ,0,HA,[],0,3,0,0,["vK",A_I(Cg)],AB9,0,B,[PE],0,3,0,0,0,HU,0,B,[CM],0,3,0,0,0,OD,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DS,"CodeLine",11,B,[],0,3,[0,0,0],0,["M",A_H(A42)],AAp,0,B,[],0,3,0,0,0,L9,0,Ev,[Ek,C3],0,3,0,0,0,CC,"CodeElement",11,B,
[],0,3,[0,0,0],0,["M",A_H(AH7)],OA,0,L9,[],0,3,0,0,0,AB6,0,B,[],0,3,0,0,0,AOd,"Interval",17,B,[CM],0,3,[0,0,0],0,["bU",A_I(AWM),"M",A_H(AK3),"nj",A_I(A0C)],WT,0,B,[GR],0,3,0,0,["ro",A_J(ATK)],ABv,"IntervalNode",19,B,[],0,3,[0,0,0],0,["M",A_H(APc),"bU",A_I(AP3)],Hy,0,B,[J6,Ek],0,0,0,0,["bU",A_I(A05),"M",A_H(AQH)],IA,"HashMap$HashEntry",1,Hy,[],0,0,[L9,0,0],0,0,AH3,0,B,[],4,3,0,0,0]);
$rt_metadata([Vd,0,B,[],0,0,0,0,0,PX,0,B,[JM],0,3,0,0,["bo",A_I(AYq)],PZ,0,B,[Ch],0,3,0,0,["bo",A_I(AXK)],PY,0,B,[Ch],0,3,0,0,["bo",A_I(AZU)],JD,0,B,[],0,3,0,0,0,Q3,"Diff0",11,B8,[CG,E0,Ik,EE,EA,Fg,Fz],0,3,[0,0,0],0,["e6",A_J(A7J),"cy",A_I(AWc),"bJ",A_H(A3K),"nc",A_H(AWB),"lN",A_H(A3E),"lw",A_I(AXg),"jc",A_I(A4E),"fI",A_I(AQE),"b5",A_J(ATn),"d0",A_I(APe),"bZ",A_I(A41),"cD",A_K(A2J),"ct",A_J(AUm),"dC",A_J(A5z),"dz",A_K(AVM),"bN",A_H(A3b)],Lc,0,B8,[E0,EE],0,3,0,0,["fI",A_I(A2F),"cy",A_I(A6F),"bJ",A_H(ASe),"lb",
A_H(A7$),"b5",A_J(AOA),"d0",A_I(A1r)],AKX,0,CB,[],0,3,0,0,["cy",A_I(AO0),"bJ",A_H(AQZ),"b5",A_J(ATs)],ADz,0,CB,[],0,3,0,0,["cy",A_I(AU4),"bJ",A_H(A0s),"b5",A_J(A1M)],Zy,"ToolbarDemo",16,B8,[CG,CL],0,3,[0,0,0],0,["ct",A_J(AXy),"dC",A_J(APa),"eu",A_J(AST),"b5",A_J(ARA),"bJ",A_H(A1l),"bZ",A_I(ATu),"cD",A_K(APH)],ACY,"FindUsagesDemo",16,B8,[CL],0,3,[0,0,0],0,["eu",A_J(AQO),"b5",A_J(APX)],YW,"RegionTextureAllocatorDemo",11,It,[CG],0,3,[0,0,0],0,["bZ",A_I(A2$),"ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"bJ",A_H(A6a),
"cy",A_I(AOS)],Up,0,CB,[],0,3,0,0,["bJ",A_H(AOy),"b5",A_J(AY5)],LT,0,B8,[],0,3,0,0,0,Zd,0,B8,[],0,3,0,0,0,Es,0,CB,[],0,3,0,0,["bJ",A_H(ACo),"b5",A_J(Uj)],Yx,"RenderTexture",11,Es,[],0,3,0,0,["cy",A_I(ASt),"bJ",A_H(A0_),"b5",A_J(A74)],Un,"ScissorDemo",11,Es,[],0,3,0,0,["bJ",A_H(A8J),"b5",A_J(ASa)],ACJ,0,CB,[],0,3,0,0,["bJ",A_H(AXN),"b5",A_J(A1n),"cy",A_I(A5R)],K7,"ClipboardTest",11,Es,[CG],0,3,[0,0,0],0,["bZ",A_I(A2$),"ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(ATg)],T6,"CodiconDemo",11,Es,[],0,3,0,0,["bJ",A_H(AYA)],HH,
0,CB,[CG],1,3,0,0,["bZ",A_I(A2$),"ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"bJ",A_H(AHV)],U1,"LineShaderDemo1",11,HH,[],0,3,[0,0,0],0,["ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"b5",A_J(A5B),"bZ",A_I(A6C)],U0,"LineShaderDemo2",11,HH,[],0,3,[0,0,0],0,["ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"bZ",A_I(A8k),"bJ",A_H(AQJ),"b5",A_J(APm)],X2,"WindowsDemo",13,B8,[CL],0,3,[0,0,0],0,["eu",A_J(ASS)],EH,"WindowDemo",24,B8,[CL],0,3,[0,0,0],0,["j5",A_H(A0S),"qF",A_H(ATD),"oW",A_I(ALv),"eu",A_J(A6j)],RF,"EditorInViewDemo",
11,EH,[CL,E0,EE],0,3,[0,0,0],0,["j5",A_H(AP1),"qF",A_H(AZu),"oW",A_I(A8m),"d0",A_I(AWE),"fI",A_I(AVY)],Y1,"UiContext$1",24,B,[CG],0,0,[Vh,0,0],0,["ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"bZ",A_I(A59)],PP,0,Lc,[],0,3,0,0,["lb",A_H(A0w)],Sw,"EditorWindowDemo",11,B8,[CL],0,3,[0,0,0],0,["eu",A_J(A2a)],Yy,0,B8,[],0,3,0,0,["b5",A_J(AQM)],QJ,"DiffMiddleDemo",29,EH,[CL],0,3,[0,0,0],0,["j5",A_H(A1H)],Tg,"ProjectViewDemo",11,B8,[CL],0,3,[0,0,0],0,["eu",A_J(A1p)],ABC,"FolderTransferDemo",29,EH,[CL],0,3,[0,0,0],0,["j5",
A_H(ASf)],AE0,"SinDemo",11,CB,[CG],0,3,[0,0,0],0,["bZ",A_I(A2$),"ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"b5",A_J(A8f),"bJ",A_H(A2w),"cy",A_I(AWq)],AAR,"FileViewDemo",24,EH,[CL],0,3,[0,0,0],0,["j5",A_H(A4h),"oW",A_I(A5K)],Vy,"FolderDiff",29,B8,[CL],0,3,[0,0,0],0,["eu",A_J(AYg)],KT,0,B,[],0,3,0,0,0,AIl,0,B,[],0,3,0,0,0,AHk,0,B,[],3,3,0,0,0,AKR,0,B,[],0,3,0,0,0,AIM,0,B,[],3,3,0,0,0,AKx,0,B,[],0,3,0,0,0,AN6,0,B,[],0,3,0,0,0,VE,0,B,[W],0,3,0,0,["g",A_I(APq)],VF,0,B,[W],0,3,0,0,["g",A_I(A6L)],VG,"Diff0$<init>$lambda$_0_2",
11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(A3f)],VC,0,B,[W],0,3,0,0,["g",A_I(AUo)],VD,"Diff0$<init>$lambda$_0_4",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(A7k)],AAw,"Editor0$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AXR)]]);
$rt_metadata([AAu,0,B,[W],0,3,0,0,["g",A_I(A11)],AAv,"Editor0$<init>$lambda$_0_2",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(AW1)],AKr,"TextRect",11,K4,[],0,3,[0,0,0],0,0,Vz,"DemoScene1$MyInputListener",11,B,[CG],0,0,[AKX,0,"MyInputListener"],0,["bZ",A_I(A0t),"cD",A_K(AOL),"ct",A_J(A0l),"dC",A_J(AZM)],AAZ,"DemoScene1$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(A19)],AAY,"DemoScene1$<init>$lambda$_0_1",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(ARK)],AAX,"DemoScene1$<init>$lambda$_0_2",11,B,[Fg],0,3,[0,0,0],0,["e6",
A_J(A3d)],AAW,"DemoScene1$<init>$lambda$_0_3",11,B,[T],0,3,[0,0,0],0,["e",A_H(AZj)],AAV,"DemoScene1$<init>$lambda$_0_4",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(AVa)],AAU,"DemoScene1$<init>$lambda$_0_5",11,B,[EA],0,3,[0,0,0],0,["dz",A_K(A69)],H0,0,B3,[],0,3,0,0,0,AJp,0,B,[],3,3,0,0,0,Yv,"CleartypeColors$MyInputListener",11,B,[CG],0,0,[ADz,0,"MyInputListener"],0,["bZ",A_I(A2$),"ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(ARl)],Yr,0,B,[],0,3,0,0,0,AIN,"Toolbar",24,B,[],0,3,[0,0,0],0,0,ALN,0,B,[],0,3,0,0,["bU",A_I(A6g)],AD3,
"ToolbarDemo$<init>$lambda$_0_0",16,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AUa)],ADZ,"ToolbarDemo$<init>$lambda$_0_1",16,B,[CK],0,3,[0,0,0],0,["bF",A_I(AWJ)],AD0,0,B,[T],0,3,0,0,["e",A_H(A8Q)],AD1,0,B,[T],0,3,0,0,["e",A_H(APy)],Bt,"ToolbarItem",24,B,[],0,3,[0,0,0],0,0,Wf,"FindUsagesDemo$<init>$lambda$_0_0",16,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AYC)],Wg,"FindUsagesDemo$<init>$lambda$_0_1",16,B,[CK],0,3,[0,0,0],0,["bF",A_I(APb)],AJ8,0,B,[],0,3,0,0,0,P6,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",11,B,[CL],0,3,[0,0,0],
0,["eu",A_J(AUT)],P5,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(ASv)],ABU,0,B,[],3,3,0,0,0,AKY,0,B,[ABU],0,3,0,0,0,YH,"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CG],0,0,[Up,0,"LineNumbersInputListener"],0,["cD",A_K(A5w),"ct",A_J(AZw),"dC",A_J(AO8),"bZ",A_I(A1A)],ACf,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[EA],0,3,[0,0,0],0,["dz",A_K(AUR)],RY,"SelectFileTest$<init>$lambda$_0_0",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(AUF)],RX,"SelectFileTest$<init>$lambda$_0_1",
11,B,[CL],0,3,[0,0,0],0,["eu",A_J(AYH)],S1,"WorkerTest$<init>$lambda$_0_0",14,B,[CK],0,3,[0,0,0],0,["bF",A_I(AYD)],S0,0,B,[W],0,3,0,0,["g",A_I(A5V)],AD_,"RenderTexture$MyInputListener",11,B,[CG],0,0,[Yx,0,"MyInputListener"],0,["dC",A_J(APa),"cD",A_K(A5w),"bZ",A_I(A40),"ct",A_J(AYp)],AIV,0,B,[],0,3,0,0,0,Do,0,B,[],3,3,0,Gb,0,AAx,"TextureRegionTestScene$MListener",11,B,[CG],0,0,[ACJ,0,"MListener"],0,["cD",A_K(A5w),"ct",A_J(ASI),"dC",A_J(AZJ),"bZ",A_I(ARq)],XU,"TextureRegionTestScene$<init>$lambda$_0_0",11,B,[EA],
0,3,[0,0,0],0,["dz",A_K(A66)],AFL,"ClipboardTest$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(ASJ)],AFK,"ClipboardTest$<init>$lambda$_0_1",11,B,[Fg],0,3,[0,0,0],0,["e6",A_J(A3m)],AFJ,"ClipboardTest$<init>$lambda$_0_2",11,B,[Fg],0,3,[0,0,0],0,["e6",A_J(AQI)],AFI,"ClipboardTest$<init>$lambda$_0_3",11,B,[Fz],0,3,[0,0,0],0,["bN",A_H(AT2)],AFM,"ClipboardTest$<init>$lambda$_0_4",11,B,[Fz],0,3,[0,0,0],0,["bN",A_H(A6w)],TK,"CodiconDemo$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AQx)],Qv,"WindowsDemo$<init>$lambda$_0_0",
13,B,[Ck],0,3,[0,0,0],0,["bm",A_I(A4n)],Qx,"WindowsDemo$<init>$lambda$_0_1",13,B,[CK],0,3,[0,0,0],0,["bF",A_I(A2r)],Qy,0,B,[W],0,3,0,0,["g",A_I(A4Y)],Qz,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(A6U)],AJW,0,B,[],3,3,0,0,0]);
$rt_metadata([Q8,0,B,[W],0,3,0,0,["g",A_I(A6_)],Q7,"EditorWindowDemo$<init>$lambda$_0_1",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(A1B)],Wm,"DiffMiddleDemo$<init>$lambda$_0_0",29,B,[CK],0,3,[0,0,0],0,["bF",A_I(AVP)],Wl,"DiffMiddleDemo$<init>$lambda$_0_1",29,B,[Ck],0,3,[0,0,0],0,["bm",A_I(A6X)],Zz,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CK],0,3,[0,0,0],0,["bF",A_I(AQ5)],R0,"FolderTransferDemo$<init>$lambda$_0_0",29,B,[CK],0,3,[0,0,0],0,["bF",A_I(AVA)],RZ,"FolderTransferDemo$<init>$lambda$_0_1",29,B,[Ck],0,3,[0,0,0],
0,["bm",A_I(A2U)],R7,"SinDemo$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(APn)],ADi,"FolderDiff$<init>$lambda$_0_0",29,B,[CK],0,3,[0,0,0],0,["bF",A_I(AVO)],Dv,0,B,[],3,3,0,ARx,0,Cu,0,CF,[],12,3,0,VK,0,K9,0,B,[],0,3,0,0,0,JE,0,B,[],0,3,0,0,0,AMH,0,B,[],0,3,0,0,0,D0,0,B,[],3,3,0,AZt,0,Z4,0,B,[BY],3,3,0,0,0,AAf,0,B,[Z4],0,3,0,0,["DU",A_J(A15)],Z5,0,B,[BY],3,3,0,0,0,AAd,0,B,[Z5],0,3,0,0,["DU",A_J(A2R)],AHG,0,B,[],0,3,0,0,0,AKW,0,B,[BY],3,3,0,0,0,W7,0,B,[],0,3,0,0,0,D5,0,B,[],3,3,0,A3Y,0,IF,0,B,[],3,3,
0,0,0,Rg,0,B,[IF],0,3,0,0,["ys",A_K(A5J)],Rh,0,B,[IF],0,3,0,0,0,VB,0,B,[W],0,3,0,0,["g",A_I(A4z)],QT,0,B,[W],0,3,0,0,["g",A_I(ARf)],QS,0,B,[W],0,3,0,0,["g",A_I(APQ)],QP,0,B,[W],0,3,0,0,["g",A_I(AOV)],QN,0,B,[W],0,3,0,0,["g",A_I(A8l)],AKC,0,B,[],0,3,0,0,0,WI,0,B,[W],0,3,0,0,["g",A_I(A2S)],AEC,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Ck],0,3,[0,0,0],0,["bm",A_I(AZf)],AND,0,B,[],0,3,0,0,["bU",A_I(A0W)],JN,0,B,[],0,3,0,0,0,K5,0,B,[],4,3,0,0,0,ALn,0,B,[],0,3,0,0,0,Cx,0,CF,[],12,3,0,AHT,0,AN_,0,B,[],0,3,0,0,0,AH_,
0,B,[BY],4,3,0,0,0,ADq,0,DM,[CM],0,3,0,0,0,AOi,0,B,[],0,3,0,0,0,AGV,0,B,[],3,3,0,0,0,C$,0,B,[BY],1,3,0,0,0,AM0,0,C$,[],1,3,0,0,0,ANo,0,C$,[],1,3,0,0,0,ALE,0,C$,[],1,3,0,0,0,ALP,0,C$,[],1,3,0,0,0,ANG,0,C$,[],1,3,0,0,0]);
$rt_metadata([Xh,0,B,[T],0,3,0,0,["e",A_H(AS$)],QF,0,B,[BC],0,3,0,0,["bc",A_I(AZK)],ABI,0,B,[],0,3,0,0,0,EG,0,B,[E0],1,3,0,0,0,Od,"FolderDiffWindow",29,EG,[],0,3,[0,0,0],0,["b1",A_H(AP2),"nb",A_I(A2z)],ZJ,0,B,[CA],0,3,0,0,["bN",A_H(A5s)],ALj,0,B,[],0,3,0,0,0,ALp,0,B,[],3,3,0,0,0,AED,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[EA],0,3,[0,0,0],0,["dz",A_K(AZm)],ZG,"ScissorDemo$1",11,B,[CG],0,0,[Un,0,0],0,["ct",A_J(AXy),"dC",A_J(APa),"cD",A_K(A5w),"bZ",A_I(A8T)],AH9,0,B,[BY],1,3,0,0,0,T7,0,B,[],3,3,
0,0,0,AEJ,0,B,[W],0,3,0,0,["g",A_I(A0F)],AJR,"PopupMenu",24,B,[CL,FA,Dw],0,3,[0,0,0],0,["x9",A_H(A4u),"v9",A_H(ARJ),"e6",A_J(AOz),"Bo",A_H(AYP),"eu",A_J(A8s),"bm",A_I(ATR),"b1",A_H(AVV)],ID,0,CJ,[],1,3,0,0,["b1",A_H(A4p),"dZ",A_I(AUx),"cy",A_I(AZH),"d1",A_K(AQR),"cD",A_K(A7i),"ct",A_J(AXf),"dC",A_J(A7u),"bZ",A_I(A70),"dz",A_K(ARu),"kV",A_H(A7G)],I0,0,ID,[],1,0,0,0,["D2",A_H(ATF)],AIp,0,I0,[E0],0,0,0,0,0,H1,0,B,[],0,3,0,0,0,Db,"FileTreeNode",24,H1,[],0,3,[0,0,0],0,0,Uh,0,B,[T],0,3,0,0,["e",A_H(A0r)],Uf,0,B,[T],
0,3,0,0,["e",A_H(AY0)],Ug,0,B,[T],0,3,0,0,["e",A_H(A2I)],Ud,0,B,[T],0,3,0,0,["e",A_H(AW2)],ABL,0,B,[],0,3,0,0,0,ABP,0,B,[],0,3,0,0,0,Ue,0,B,[T],0,3,0,0,0,Y6,0,B,[W],0,3,0,0,["g",A_I(ATz)],WW,0,B,[W],0,3,0,0,["g",A_I(A77)],Sg,0,B,[W],0,3,0,0,["g",A_I(A0e)],PR,0,B,[CA],0,3,0,0,["bN",A_H(ART)],V$,0,B,[W],0,3,0,0,["g",A_I(A7C)],XI,0,B,[T],0,3,0,0,["e",A_H(A52)],FS,0,CJ,[],0,3,0,0,0,Mb,0,FS,[FA],0,3,0,0,["x9",A_H(A4u),"v9",A_H(ARJ),"Bo",A_H(AYP),"b1",A_H(AVt),"mk",A_J(APC),"dZ",A_I(A3V),"cD",A_K(A65),"ct",A_J(AQB),
"bm",A_I(AR$),"e6",A_J(A1Z)],AMg,0,Mb,[],0,3,0,0,["x9",A_H(A4u),"v9",A_H(ARJ),"Bo",A_H(AYP)],AHS,0,CJ,[],0,3,0,0,["b1",A_H(AWN),"d1",A_K(AR8),"dZ",A_I(A5S),"cD",A_K(AXc),"ct",A_J(AWQ),"dC",A_J(AUW),"bZ",A_I(AUG),"dz",A_K(A1J),"ir",A_H(AKu)],AIG,0,B,[Nc],0,3,0,0,["x9",A_H(A4u),"v9",A_H(ARJ),"e6",A_J(AOz),"Bo",A_H(AYP),"l4",A_H(AWZ),"ld",A_H(A7f),"ic",A_I(AX3),"lD",A_H(ATt),"mK",A_H(AZO),"qD",A_J(AT7),"rp",A_I(A4c),"qK",A_H(Np)],AGv,0,B,[],0,3,0,0,0,SP,0,B,[W],0,3,0,0,["g",A_I(A4l)],WC,0,B,[T],0,3,0,0,["e",A_H(APW)],AGA,
0,B,[],3,3,0,0,0,Tt,0,B,[T],0,3,0,0,["e",A_H(A3R)],Zc,0,B,[T],0,3,0,0,["e",A_H(A7y)],Za,0,B,[T],0,3,0,0,["e",A_H(ARw)],Y_,0,B,[T],0,3,0,0,["e",A_H(APl)],Zb,0,B,[T],0,3,0,0,["e",A_H(A8U)],Z6,0,B,[T],0,3,0,0,["e",A_H(ATW)],ABq,0,B,[T],0,3,0,0,["e",A_H(AXh)],ABp,0,B,[T],0,3,0,0,["e",A_H(A3y)],ABs,0,B,[T],0,3,0,0,["e",A_H(A45)]]);
$rt_metadata([ABr,0,B,[T],0,3,0,0,["e",A_H(AXd)],AA3,0,B,[W],0,3,0,0,["g",A_I(AZY)],JV,"DiffRange",15,B,[],0,3,[0,0,0],0,0,VZ,0,B,[],0,3,0,0,0,QC,0,B,[GR],0,3,0,0,["ro",A_J(ATm)],AMV,0,B,[],3,3,0,0,0,AGy,0,B,[T],0,3,0,0,["e",A_H(A3i)],Zx,0,B,[T],0,3,0,0,["e",A_H(AZ5)],Rw,0,B,[T],0,3,0,0,["e",A_H(A1X)],Ry,0,B,[T],0,3,0,0,["e",A_H(A7Q)],Rx,0,B,[T],0,3,0,0,["e",A_H(AT8)],MH,0,B,[],3,3,0,0,0,So,0,B,[MH],0,3,0,0,["Bi",A_I(A0E)],AN9,0,HA,[],0,0,0,0,["vK",A_I(A8F)],Q5,0,B,[W],0,3,0,0,["g",A_I(AO$)],Q4,0,B,[W],0,3,
0,0,["g",A_I(APs)],Qs,0,B,[BC],0,3,0,0,["bc",A_I(A7c)],Zf,0,B,[T],0,3,0,0,["e",A_H(AYj)],CV,0,Bu,[],0,3,0,0,0,ANa,0,F0,[],0,3,0,0,0,AGZ,0,B,[],0,3,0,0,0,AF1,0,B,[W],0,3,0,0,["g",A_I(AZe)],AJV,0,B,[],0,3,0,0,0,AMC,0,B,[BC],0,3,0,0,0,AJe,0,B,[],0,3,0,0,0,R1,"LineNumbersTexture",11,B,[Dw],0,3,[0,0,0],0,0,AKj,0,B,[BC],0,3,0,0,0,AJo,0,B,[BC],0,3,0,0,0,TR,0,B,[W],0,3,0,0,["g",A_I(A1u)],TQ,0,B,[W],0,3,0,0,["g",A_I(A7z)],Sy,0,B,[CA],0,3,0,0,["bN",A_H(ATP)],Sz,0,B,[CA],0,3,0,0,["bN",A_H(ARc)],Pa,0,BM,[],0,3,0,0,0,P8,
0,B,[CA],0,3,0,0,["bN",A_H(AV6)],P7,0,B,[CA],0,3,0,0,["bN",A_H(A1d)],ACG,0,B,[CA],0,3,0,0,["bN",A_H(A4T)],XB,0,B,[W],0,3,0,0,["g",A_I(AXG)],YY,0,B,[CA],0,3,0,0,["bN",A_H(A5H)],VI,0,B,[Ch],0,3,0,0,["bo",A_I(AS3)],AIm,0,B,[BY],1,3,0,0,0,Yh,0,B,[Ch],0,3,0,0,["bo",A_I(AVX)],DX,0,Bu,[],0,3,0,0,0,AE8,0,B,[T],0,3,0,0,["e",A_H(A78)],GQ,0,JP,[],0,3,0,0,0,AFY,0,F0,[],0,3,0,0,0,AHo,0,B,[],3,3,0,0,0,Xp,0,B,[W],0,3,0,0,["g",A_I(AYh)],AFa,"Pos",18,B,[CM],0,3,[0,0,0],0,["bU",A_I(AOW),"rd",A_H(AWa),"M",A_H(APu),"nj",A_I(A5k)],AGi,
0,B,[Ch],0,3,0,0,["bo",A_I(A5$)],AGh,0,B,[Ch],0,3,0,0,["bo",A_I(A1c)]]);
$rt_metadata([AFG,0,B,[Ch],0,3,0,0,["bo",A_I(A2d)],AEq,"EditorWindow",11,EG,[Ck],0,3,[0,0,0],0,["d0",A_I(AOl),"b1",A_H(AP_),"nb",A_I(A2h),"bm",A_I(A4b)],Tp,0,B,[CA],0,3,0,0,["bN",A_H(AUI)],LI,0,B,[],3,3,0,0,["sV",A_J(APN)],Mx,0,EG,[LI],0,3,0,0,["nb",A_I(A0H),"b1",A_H(A3k),"d0",A_I(A1x),"BB",A_I(A1v),"Dr",A_J(APF),"sg",A_J(A1W),"sV",A_J(A4f)],AFy,0,B,[CA],0,3,0,0,["bN",A_H(AYm)],W$,0,B,[CA],0,3,0,0,["bN",A_H(AYv)],AGe,0,DM,[CM],0,3,0,0,0,G$,0,B,[],0,0,0,0,0,Kl,0,B,[],4,3,0,0,0,V4,0,B,[],0,3,0,0,0,UA,0,B,[W],
0,3,0,0,["g",A_I(AWF)],VM,0,B,[T],0,3,0,0,["e",A_H(APd)],VN,0,B,[T],0,3,0,0,["e",A_H(ARs)],VP,0,B,[T],0,3,0,0,["e",A_H(A7B)],VQ,0,B,[T],0,3,0,0,["e",A_H(ATY)],VR,0,B,[T],0,3,0,0,["e",A_H(AWl)],WU,0,B,[Ch],0,3,0,0,["bo",A_I(ASP)],XE,0,B,[],3,3,0,A9W,0,Pj,0,B,[],1,3,0,0,0,AIi,0,C$,[],1,3,0,0,0,Va,0,B,[CH],0,3,0,0,["cP",A_I(AZx)],SJ,0,FS,[FA],0,3,0,0,["x9",A_H(A4u),"v9",A_H(ARJ),"e6",A_J(AOz),"Bo",A_H(AYP),"b1",A_H(A7A),"mk",A_J(A1k),"dZ",A_I(AZv),"p8",A_I(A5i),"sS",A_I(A6x),"bZ",A_I(ATH),"ct",A_J(ARC),"cD",A_K(AV3),
"bm",A_I(A6M)],W3,0,B,[T],0,3,0,0,["e",A_H(AX6)],AF8,0,B,[W],0,3,0,0,["g",A_I(AQS)],AF$,0,B,[W],0,3,0,0,["g",A_I(AOX)],Ri,0,FS,[],0,3,0,0,["ir",A_H(AYd),"p8",A_I(A5o),"dZ",A_I(AYy),"ct",A_J(AUe)],AF9,0,B,[T],0,3,0,0,["e",A_H(AW5)],Wc,0,CJ,[],0,3,0,0,0,AFF,0,B,[T],0,3,0,0,["e",A_H(ASC)],AFE,0,B,[T],0,3,0,0,["e",A_H(AW$)],Sb,0,ID,[EE],0,3,0,0,["D2",A_H(AS4),"ir",A_H(A2u)],ACQ,0,B,[T],0,3,0,0,["e",A_H(AQ2)],ACP,0,B,[T],0,3,0,0,["e",A_H(AVN)],ACR,0,B,[T],0,3,0,0,["e",A_H(A3_)],ACh,0,DM,[CM],0,3,0,0,0,AEi,0,B,[],
0,3,0,0,0,ADU,0,B,[],0,3,0,0,0,KK,0,B,[],0,3,0,0,0,Pu,0,B,[],3,3,0,0,0,QG,0,CJ,[],0,3,0,0,["dZ",A_I(AO2)],AD2,0,B,[],0,3,0,0,0,Ui,0,B,[T],0,3,0,0,["e",A_H(ATx)],Vo,0,B,[],3,3,0,ASB,0,L1,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,Ze,0,B,[],0,3,0,0,0,V0,0,B,[W],0,3,0,0,["g",A_I(A79)],AFD,0,B,[W],0,3,0,0,0,AOc,0,B,[],0,3,0,0,0,PQ,0,B,[W],0,3,0,0,["g",A_I(AYX)]]);
$rt_metadata([AE6,0,B,[W],0,3,0,0,["g",A_I(A36)],FJ,0,B,[],3,3,0,0,0,Y9,0,B,[FJ],0,0,0,0,["c0",A_H(Cc),"cn",A_H(Cd),"qA",A_H(ABy)],Tx,0,B,[T],0,3,0,0,["e",A_H(A2C)],AFk,0,B,[T],0,3,0,0,["e",A_H(AYe)],L7,0,Pj,[],1,3,0,0,0,UM,0,L7,[],0,3,0,0,0,ADK,0,B,[W],0,3,0,0,["g",A_I(AT$)],ADv,0,B,[T],0,3,0,0,["e",A_H(AOs)],AHH,0,B,[],0,3,0,0,0,ADw,0,B,[T],0,3,0,0,["e",A_H(ASi)],TA,0,B,[T],0,3,0,0,["e",A_H(AV8)],Tz,0,B,[T],0,3,0,0,["e",A_H(A1L)],TC,0,B,[T],0,3,0,0,["e",A_H(A7x)],TB,0,B,[T],0,3,0,0,["e",A_H(AY8)],U8,0,B,[T],
0,3,0,0,["e",A_H(AXA)],HM,"Diff",11,B,[],0,3,[0,0,0],0,0,RU,0,B,[],0,3,0,0,0,Yp,0,B,[T],0,3,0,0,["e",A_H(A1T)],Yo,0,B,[DU],0,3,0,0,0,AKi,0,B,[],0,3,0,0,0,AJO,0,B,[],0,3,0,0,0,Uk,0,Ev,[Ek,C3],0,3,0,0,0,Wy,0,B,[],0,3,0,0,0,Wd,0,B,[],0,3,0,0,0,YL,0,B,[DU],0,3,0,0,0,VL,0,B,[W],0,3,0,0,["g",A_I(A0n)],XJ,0,B,[W],0,3,0,0,["g",A_I(A37)],UF,0,B,[],0,3,0,0,0,AAy,0,DM,[CM],0,3,0,0,0,KO,0,B,[],4,3,0,0,0,AEk,0,B,[IF],0,3,0,0,["ys",A_K(ATC)],UU,0,B,[GM],0,3,0,0,["rt",A_J(ARX)],Sn,0,B,[W],0,3,0,0,["g",A_I(AZ6)],SD,0,B,[T],
0,3,0,0,["e",A_H(A3$)],VV,0,B,[GM],0,3,0,0,["rt",A_J(AV7)],YE,0,B,[T],0,3,0,0,["e",A_H(A34)],K_,0,DX,[],0,3,0,0,0,Kp,0,Bu,[],0,3,0,0,0,O7,0,Bu,[],0,3,0,0,0,AKD,0,B,[W],0,3,0,0,0,AGf,0,B,[W],0,3,0,0,["g",A_I(A1O)],AAq,0,B,[],1,3,0,0,0,PW,0,B,[W],0,3,0,0,0,ABm,0,B,[Nd],3,3,0,0,0,Qq,0,B,[ABm],3,3,0,0,0,Ge,0,B,[Qq],1,3,0,0,0,ACr,0,Ge,[],0,3,0,0,0,SN,0,B,[],3,3,0,0,0,AF6,0,B,[W],0,3,0,0,["g",A_I(APE)]]);
$rt_metadata([AIv,0,B,[],3,3,0,0,0,Kj,0,Hy,[],0,0,0,0,0,IT,0,Bu,[],0,3,0,0,0,AEZ,0,B,[W],0,3,0,0,["g",A_I(A6K)],AH1,0,Ge,[],0,3,0,0,0,ANh,0,B,[],0,3,0,0,0,Qh,0,B,[W],0,3,0,0,["g",A_I(A8v)],V1,0,B,[W],0,3,0,0,["g",A_I(A1Q)],Qw,0,B,[W],0,3,0,0,["g",A_I(AUf)],AAB,0,B,[W],0,3,0,0,["g",A_I(AW8)],NU,"FileDiffWindow",29,EG,[FA],0,3,[0,0,0],0,["x9",A_H(A4u),"v9",A_H(ARJ),"e6",A_J(AOz),"Bo",A_H(AYP),"d0",A_I(A6e),"b1",A_H(A7l),"nb",A_I(AZ1),"bm",A_I(A7m)],X$,0,B,[CA],0,3,0,0,["bN",A_H(A6I)],Ro,0,B,[CA],0,3,0,0,["bN",
A_H(ARY)],Ys,0,B,[CA],0,3,0,0,["bN",A_H(AQz)],Gv,"ScopeNode",21,B,[],0,3,[0,0,0],0,0,Lg,"DeclNode",23,B,[],0,3,[0,0,0],0,["M",A_H(A6m),"bU",A_I(AMS)],Fy,"RefNode",22,B,[],0,3,[0,0,0],0,["M",A_H(AXS),"bU",A_I(ALf)],IC,0,B,[],3,3,0,0,0,UW,0,B,[IC],0,3,0,0,["mG",A_K(A3X)],R3,"InferenceNode",21,B,[],0,3,[0,0,0],0,0,UX,0,B,[IC],0,3,0,0,["mG",A_K(A2s)],JA,0,B,[C3,CM],0,3,0,0,0,LA,0,B,[],3,3,0,0,0,Tw,0,B,[LA],0,3,0,0,0,NT,0,B,[LA],3,3,0,0,0,AIw,0,B,[NT],0,3,0,0,0,TW,0,B,[IC],0,3,0,0,["mG",A_K(A4v)],TV,0,B,[DU],0,3,
0,0,["bF",A_I(AX1)],TU,0,B,[DU],0,3,0,0,["bF",A_I(AVW)],TY,0,B,[IC],0,3,0,0,["mG",A_K(A33)],AFX,0,B,[W],0,3,0,0,["g",A_I(AYT)],AG8,0,B,[W],0,3,0,0,0,Xs,0,B,[BC],0,3,0,0,0,Gf,0,B,[],0,3,0,0,0,ALc,0,B,[],0,3,0,0,0,WB,0,I0,[E0],0,0,0,0,0,X1,0,B,[T],0,3,0,0,["e",A_H(A2P)],X0,0,B,[T],0,3,0,0,["e",A_H(ATL)],AHw,0,B,[],0,3,0,0,0,AOk,0,B,[],0,3,0,0,0,AFZ,0,B,[T],0,3,0,0,["e",A_H(AZP)],AF0,0,B,[T],0,3,0,0,["e",A_H(A2B)],In,"ExprRefNode",22,Fy,[],0,3,[0,0,0],0,["M",A_H(A35)],KY,"MethodCallNode",22,Fy,[],0,3,[0,0,0],0,
["bU",A_I(A7F)],XX,0,B,[W],0,3,0,0,["g",A_I(A4A)],J4,"QualifiedRefNode",22,Fy,[],0,3,[0,0,0],0,["M",A_H(AUH),"bU",A_I(AZC)],XY,0,B,[W],0,3,0,0,["g",A_I(ARG)],AKg,0,B,[CM],0,3,0,0,["bU",A_I(AU1),"M",A_H(AMR)],Xl,0,B,[T],0,3,0,0,["e",A_H(AUP)],S8,0,B,[T],0,3,0,0,["e",A_H(A17)]]);
$rt_metadata([ZK,0,B,[W],0,3,0,0,["g",A_I(AUt)],AC_,0,B,[T],0,3,0,0,["e",A_H(APA)],XM,0,B,[W],0,3,0,0,["g",A_I(AR1)],Oy,"FakeNode",21,Gv,[],0,3,[0,0,0],0,0,L3,"MemberNode",21,Gv,[],0,3,[0,0,0],0,0,PV,0,B,[W],0,3,0,0,["g",A_I(A7p)],WP,0,B,[W],0,3,0,0,["g",A_I(AZS)],Rn,0,B,[W],0,3,0,0,["g",A_I(A3W)],Rs,0,B,[Id],3,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],EM,0,F3,[Rs],1,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],Ob,0,EM,[],1,0,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],V_,0,Ob,[],0,0,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],OS,0,Ev,[],1,0,
0,0,0,V8,0,OS,[],0,0,0,0,0,Pd,0,EK,[JO],1,0,0,0,["fM",A_I(AYZ),"jW",A_H(A08),"na",A_I(AUk),"qS",A_I(ATc)],V9,0,Pd,[],0,0,0,0,["fM",A_I(AYZ),"ji",A_I(AUq),"da",A_H(ATw),"cl",A_H(AQ9),"e_",A_H(APh)],V6,0,B,[FJ],0,0,0,0,["c0",A_H(AO1),"cn",A_H(A4R),"qA",A_H(AWv)],AAo,0,B,[FJ],3,3,0,0,0,V7,0,B,[AAo],0,0,0,0,0,X6,0,B,[GR],0,3,0,0,0,SL,0,B,[DU],0,3,0,0,["bF",A_I(A8Y)],ABH,0,B,[C3],4,3,0,0,0,AFg,0,B,[W],0,3,0,0,["g",A_I(AOw)],AFf,0,B,[W],0,3,0,0,["g",A_I(AXl)],ACq,0,B,[W],0,3,0,0,["g",A_I(AYt)],AAj,0,B,[W],0,3,0,0,
["g",A_I(A4S)],ACH,0,B,[T],0,3,0,0,["e",A_H(AZQ)],Sm,0,B,[SN],0,3,0,0,0,S5,0,B,[W],0,3,0,0,["g",A_I(ARZ)],AHb,0,B,[],0,3,0,0,0,Xk,0,B,[W],0,3,0,0,["g",A_I(A2L)],Jc,0,B,[],3,3,0,0,0,QM,0,B,[Jc],0,0,0,0,["oV",A_I(A5p),"pY",A_I(A2y),"pF",A_H(AWA)],Zu,0,B,[W],0,3,0,0,["g",A_I(ARO)],Zv,0,B,[W],0,3,0,0,["g",A_I(A5P)],AEH,0,B,[DU],0,0,0,0,["bF",A_I(ARm)],AD5,0,B,[T],0,3,0,0,["e",A_H(A6N)],RG,0,EM,[],0,0,0,0,["qS",A_I(A24)],Vs,0,EM,[],0,0,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],RI,0,F3,[],0,0,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],Si,
0,B,[T],0,3,0,0,["e",A_H(A3I)],X9,0,B,[W],0,3,0,0,["g",A_I(A1D)],VT,0,B,[W],0,3,0,0,["g",A_I(A3w)],M5,"MethodNode",23,Lg,[],0,3,[0,0,0],0,["bU",A_I(A0d)],Th,0,B,[W],0,3,0,0,["g",A_I(A3N)],AEA,0,B,[W],0,3,0,0,["g",A_I(A3o)],Yt,0,B,[],0,3,0,0,0,S9,0,B,[],0,3,0,0,0,BX,0,B,[],1,0,0,0,["cJ",A_K(Jm),"cY",A_L(Ju),"jA",A_H(A0q),"M",A_H(AWf),"Z",A_I(AXo),"cb",A_I(A67),"hh",A_H(A72),"fk",A_H(Le)],WH,0,B,[MH],0,3,0,0,["Bi",A_I(Oh)]]);
$rt_metadata([AGM,0,B,[W],0,3,0,0,["g",A_I(A5y)],AGP,0,B,[W],0,3,0,0,["g",A_I(A60)],R8,0,B,[W],0,3,0,0,["g",A_I(A2K)],ACN,0,B,[W],0,3,0,0,["g",A_I(ATd)],AGD,0,B,[W],0,3,0,0,["g",A_I(A6v)],AGB,0,B,[W],0,3,0,0,["g",A_I(AQq)],AEh,0,B,[Jc],0,3,0,0,["oV",A_I(A6r),"pY",A_I(AUK),"pF",A_H(A1g)],TS,0,B,[W],0,3,0,0,0,YG,0,B,[W],0,3,0,0,["g",A_I(A3v)],XW,0,B,[W],0,3,0,0,["g",A_I(A8W)],C8,"FSet",2,BX,[],0,0,[0,0,0],Pv,["c",A_K(APz),"u",A_H(ASl),"P",A_I(APT)],HI,0,B,[],0,0,0,0,0,KZ,0,BU,[],0,3,0,0,0,F5,0,B,[T],0,3,0,AKv,
0,ZH,0,B,[W],0,3,0,0,["g",A_I(AWo)],Tv,"NonCapFSet",2,C8,[],0,0,[0,0,0],0,["c",A_K(AZy),"u",A_H(A0Z),"P",A_I(A5Y)],AGu,"AheadFSet",2,C8,[],0,0,[0,0,0],0,["c",A_K(A0Q),"u",A_H(A2Z)],R5,"BehindFSet",2,C8,[],0,0,[0,0,0],0,["c",A_K(APY),"u",A_H(A6Z)],Uo,"AtomicFSet",2,C8,[],0,0,[0,0,0],0,["c",A_K(AZB),"u",A_H(AWI),"P",A_I(A4U)],GF,"FinalSet",2,C8,[],0,0,[0,0,0],0,["c",A_K(AXC),"u",A_H(A0A)],Cf,0,BX,[],1,0,0,0,["c",A_K(A8A),"co",A_H(A6E),"P",A_I(ASU)],AJS,"EmptySet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(A6f),"cJ",A_K(A1I),
"cY",A_L(A0N),"u",A_H(ASm),"P",A_I(AZA)],B_,"JointSet",2,BX,[],0,0,[0,0,0],0,["c",A_K(AR5),"Z",A_I(AVl),"u",A_H(AS5),"cb",A_I(A3s),"P",A_I(AVS),"fk",A_H(AQj)],K$,"NonCapJointSet",2,B_,[],0,0,[0,0,0],0,["c",A_K(AU$),"u",A_H(ATN),"P",A_I(A5A)],Eo,"AtomicJointSet",2,K$,[],0,0,[0,0,0],0,["c",A_K(A1a),"Z",A_I(A5q),"u",A_H(AO7)],Yl,"PositiveLookAhead",2,Eo,[],0,0,[0,0,0],0,["c",A_K(AVj),"P",A_I(AXt),"u",A_H(A7Y)],AFe,"NegativeLookAhead",2,Eo,[],0,0,[0,0,0],0,["c",A_K(APP),"P",A_I(A6J),"u",A_H(AR0)],ABK,"PositiveLookBehind",
2,Eo,[],0,0,[0,0,0],0,["c",A_K(AQh),"P",A_I(A8S),"u",A_H(AUZ)],UN,"NegativeLookBehind",2,Eo,[],0,0,[0,0,0],0,["c",A_K(AZc),"P",A_I(A5N),"u",A_H(AP0)],Iy,"SingleSet",2,B_,[],0,0,[0,0,0],0,["c",A_K(AOZ),"cJ",A_K(ATT),"cY",A_L(A50),"cb",A_I(A3q),"hh",A_H(A4Q),"fk",A_H(AX7)],HK,0,B,[],1,0,0,0,0,Ba,0,HK,[],1,0,0,Rj,["el",A_H(AZ_),"gp",A_H(AZN),"mQ",A_H(A6z),"iX",A_H(A7X)],AHB,0,Ba,[],0,0,0,0,["p",A_I(Dg),"el",A_H(Da),"gp",A_H(A1E),"mQ",A_H(AXe),"M",A_H(A38),"iX",A_H(ARB)],Nw,0,Bu,[],0,3,0,0,0,ED,0,BX,[],1,0,0,0,
["cb",A_I(AWt),"P",A_I(A7e),"fk",A_H(AUd)],Dj,"LeafQuantifierSet",2,ED,[],0,0,[0,0,0],0,["c",A_K(AZd),"u",A_H(A0I)],Gn,"CompositeQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_K(AZX),"u",A_H(A0b)],C9,"GroupQuantifierSet",2,ED,[],0,0,[0,0,0],0,["c",A_K(AZr),"u",A_H(A2H)],Fv,"AltQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_K(A3F),"Z",A_I(AYS)],W1,"UnifiedQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_K(A8u),"cJ",A_K(AUD)],Qf,0,B,[],3,3,0,0,0,TI,0,B,[Qf],0,3,0,0,0,Bi,0,B,[],1,0,0,0,0,DB,0,BU,[],0,3,0,0,0,Yz,0,HK,[Ek],
0,0,0,0,["M",A_H(ADu)],ZF,"FSet$PossessiveFSet",2,BX,[],0,0,[C8,0,0],0,["c",A_K(ATe),"u",A_H(A4K),"P",A_I(A4O)],AFU,0,B,[Ek,C3],0,3,0,0,0,P0,0,B_,[],0,0,0,0,["u",A_H(A4V)],SB,"CompositeRangeSet",2,B_,[],0,0,[0,0,0],0,["c",A_K(APw),"Z",A_I(A4G),"u",A_H(A46),"P",A_I(AP4),"cb",A_I(APR)],Eg,"SupplRangeSet",2,B_,[],0,0,[0,0,0],0,["c",A_K(A1y),"u",A_H(A7R),"p",A_I(ARN),"cb",A_I(APr),"Z",A_I(A6s),"P",A_I(ARr)]]);
$rt_metadata([Nt,"UCISupplRangeSet",2,Eg,[],0,0,[0,0,0],0,["p",A_I(ASV),"u",A_H(AYb)],AHv,"UCIRangeSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(A3a),"u",A_H(A0f)],EZ,"RangeSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(Ya),"u",A_H(ATi),"cb",A_I(AVn)],Z0,"HangulDecomposedCharSet",2,B_,[],0,0,[0,0,0],0,["Z",A_I(AT0),"u",A_H(AWn),"c",A_K(AOD),"cb",A_I(A0i),"P",A_I(AXj)],E4,"CharSet",2,Cf,[],0,0,[0,0,0],0,["co",A_H(A21),"bK",A_J(ASd),"cJ",A_K(ARd),"cY",A_L(AS_),"u",A_H(AXv),"cb",A_I(AXa)],AKc,"UCICharSet",2,Cf,[],0,0,[0,0,0],0,["bK",
A_J(AY2),"u",A_H(A4F)],AGR,"CICharSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(AOQ),"u",A_H(ASr)],Gs,"DecomposedCharSet",2,B_,[],0,0,[0,0,0],0,["Z",A_I(A75),"c",A_K(AU9),"u",A_H(A4w),"cb",A_I(ATf),"P",A_I(A5t)],Xv,"UCIDecomposedCharSet",2,Gs,[],0,0,[0,0,0],0,0,ADM,"CIDecomposedCharSet",2,Gs,[],0,0,[0,0,0],0,0,X8,"PossessiveGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_K(A0V)],AAz,"PosPlusGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_K(A3Z)],Hf,"AltGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_K(A6p),"Z",A_I(A7s)],RL,
"PosAltGroupQuantifierSet",2,Hf,[],0,0,[0,0,0],0,["c",A_K(AS7),"Z",A_I(A4g)],GZ,"CompositeGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_K(A8P),"u",A_H(AXI)],Qc,"PosCompositeGroupQuantifierSet",2,GZ,[],0,0,[0,0,0],0,["c",A_K(ASx)],Tn,"ReluctantGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_K(AYc)],ABg,"RelAltGroupQuantifierSet",2,Hf,[],0,0,[0,0,0],0,["c",A_K(AP5)],Vw,"RelCompositeGroupQuantifierSet",2,GZ,[],0,0,[0,0,0],0,["c",A_K(AZG)],To,"DotAllQuantifierSet",2,ED,[],0,0,[0,0,0],0,["c",A_K(A8D),"cJ",A_K(AWT),
"u",A_H(A5a)],ZM,"DotQuantifierSet",2,ED,[],0,0,[0,0,0],0,["c",A_K(AVo),"cJ",A_K(AOF),"u",A_H(A5U)],F2,0,B,[],1,0,0,0,0,AGN,"PossessiveQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_K(APg)],WV,"PossessiveAltQuantifierSet",2,Fv,[],0,0,[0,0,0],0,["c",A_K(AUs)],AAa,"PossessiveCompositeQuantifierSet",2,Gn,[],0,0,[0,0,0],0,["c",A_K(A53)],ABf,"ReluctantQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_K(AVk)],ADX,"ReluctantAltQuantifierSet",2,Fv,[],0,0,[0,0,0],0,["c",A_K(APp)],Td,"ReluctantCompositeQuantifierSet",2,Gn,[],
0,0,[0,0,0],0,["c",A_K(A6h)],L6,"SOLSet",2,BX,[],4,0,[0,0,0],0,["c",A_K(A3r),"P",A_I(A2Q),"u",A_H(AUu)],AHQ,"WordBoundary",2,BX,[],0,0,[0,0,0],0,["c",A_K(AZ9),"P",A_I(A0g),"u",A_H(A8N)],ZI,"PreviousMatch",2,BX,[],0,0,[0,0,0],0,["c",A_K(ASY),"P",A_I(AYI),"u",A_H(AZZ)],Xr,"EOLSet",2,BX,[],4,0,[0,0,0],0,["c",A_K(A5d),"P",A_I(A0O),"u",A_H(A3G)],AFB,"EOISet",2,BX,[],0,0,[0,0,0],0,["c",A_K(A4D),"P",A_I(AY1),"u",A_H(AR4)],YS,"MultiLineSOLSet",2,BX,[],0,0,[0,0,0],0,["c",A_K(A0K),"P",A_I(ARV),"u",A_H(AZT)],AJ1,"DotAllSet",
2,B_,[],0,0,[0,0,0],0,["c",A_K(AYf),"u",A_H(AQT),"Z",A_I(A0k),"jA",A_H(A4o),"P",A_I(A0j)],AHA,"DotSet",2,B_,[],4,0,[0,0,0],0,["c",A_K(A4x),"u",A_H(A0U),"Z",A_I(A5T),"jA",A_H(AOp),"P",A_I(AYw)],ANT,"UEOLSet",2,BX,[],4,0,[0,0,0],0,["c",A_K(ATh),"P",A_I(A13),"u",A_H(ATE)],AMO,"UMultiLineEOLSet",2,BX,[],0,0,[0,0,0],0,["c",A_K(AU2),"P",A_I(A1U),"u",A_H(AO5)],AKO,"MultiLineEOLSet",2,BX,[],0,0,[0,0,0],0,["c",A_K(A2M),"P",A_I(AQp),"u",A_H(ARW)],IV,"CIBackReferenceSet",2,B_,[],0,0,[0,0,0],0,["c",A_K(APj),"Z",A_I(A5n),
"u",A_H(AZz),"P",A_I(AV_)],ANZ,"BackReferenceSet",2,IV,[],0,0,[0,0,0],0,["c",A_K(AQu),"cJ",A_K(AXr),"cY",A_L(AO6),"cb",A_I(A3U),"u",A_H(A7r)],AL8,"UCIBackReferenceSet",2,IV,[],0,0,[0,0,0],0,["c",A_K(ATO),"u",A_H(A0h)],Q1,0,Ht,[Kq],0,3,0,0,["q2",A_L(ARE),"qr",A_K(A0a),"kI",A_I(A0z),"rj",A_J(A6D)],AB3,"SequenceSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(AQL),"cJ",A_K(AZ7),"cY",A_L(A18),"u",A_H(AVf),"cb",A_I(ASj)],AGQ,"UCISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(ATU),"u",A_H(ASs)],Qg,"CISequenceSet",2,Cf,[],0,0,[0,0,0],
0,["bK",A_J(A54),"u",A_H(A6Y)],HX,0,B,[],4,0,0,AWj,0,Yf,"UCISupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(AWz),"u",A_H(A8M)],OE,"LowSurrogateCharSet",2,B_,[],0,0,[0,0,0],0,["Z",A_I(A4L),"c",A_K(A0P),"cJ",A_K(ASh),"cY",A_L(A1e),"u",A_H(AWW),"cb",A_I(AO3),"P",A_I(AW3)],OM,"HighSurrogateCharSet",2,B_,[],0,0,[0,0,0],0,["Z",A_I(A0y),"c",A_K(AOK),"cJ",A_K(A4Z),"cY",A_L(AWu),"u",A_H(A8e),"cb",A_I(AQN),"P",A_I(A48)]]);
$rt_metadata([Ew,"SupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bK",A_J(A5C),"cJ",A_K(A39),"cY",A_L(AP9),"u",A_H(A7t),"cb",A_I(A5v)],AEM,0,F2,[],0,0,0,0,["js",A_I(AQc),"Cp",A_J(AV5)],AEN,0,F2,[],0,0,0,0,["js",A_I(A6i),"Cp",A_J(AX2)],AJn,0,B,[],0,0,0,0,0,AG5,0,B,[],0,0,0,0,0,OC,0,Bi,[],0,0,0,0,["J",A_H(AMe)],N3,0,Bi,[],0,0,0,0,["J",A_H(AMK)],AJi,0,Bi,[],0,0,0,0,["J",A_H(A5X)],AJE,0,Bi,[],0,0,0,0,["J",A_H(AW6)],AJG,0,Bi,[],0,0,0,0,["J",A_H(ARi)],Ox,0,Bi,[],0,0,0,0,["J",A_H(AHD)],MA,0,Ox,[],0,0,0,0,["J",A_H(AH6)],AKF,
0,Bi,[],0,0,0,0,["J",A_H(A2p)],PD,0,MA,[],0,0,0,0,["J",A_H(AKM)],AMq,0,PD,[],0,0,0,0,["J",A_H(AUg)],AIz,0,Bi,[],0,0,0,0,["J",A_H(A04)],AHM,0,Bi,[],0,0,0,0,["J",A_H(AUb)],ALD,0,Bi,[],0,0,0,0,["J",A_H(AX5)],ANF,0,Bi,[],0,0,0,0,["J",A_H(A4k)],AKI,0,Bi,[],0,0,0,0,["J",A_H(AY6)],ANl,0,Bi,[],0,0,0,0,["J",A_H(ASD)],AJa,0,Bi,[],0,0,0,0,["J",A_H(AWe)],AJT,0,Bi,[],0,0,0,0,["J",A_H(A02)],AHf,0,Bi,[],0,0,0,0,["J",A_H(AQY)],AKV,0,Bi,[],0,0,0,0,["J",A_H(A7O)],ANr,0,Bi,[],0,0,0,0,["J",A_H(AY3)],AJA,0,Bi,[],0,0,0,0,["J",A_H(ATj)],ALY,
0,Bi,[],0,0,0,0,["J",A_H(AQ6)],AIB,0,Bi,[],0,0,0,0,["J",A_H(A1$)],AKn,0,Bi,[],0,0,0,0,["J",A_H(A3l)],ANw,0,Bi,[],0,0,0,0,["J",A_H(AXk)],AIf,0,Bi,[],0,0,0,0,["J",A_H(AVL)],AHY,0,Bi,[],0,0,0,0,["J",A_H(AUJ)],AKG,0,Bi,[],0,0,0,0,["J",A_H(A5Q)],Lm,0,Bi,[],0,0,0,0,["J",A_H(AIA)],ANP,0,Lm,[],0,0,0,0,["J",A_H(AUy)],AMu,0,OC,[],0,0,0,0,["J",A_H(AZ4)],AHW,0,N3,[],0,0,0,0,["J",A_H(ASb)],ALG,0,Bi,[],0,0,0,0,["J",A_H(ATA)],ALR,0,Bi,[],0,0,0,0,["J",A_H(AXQ)],AMj,0,Bi,[],0,0,0,0,["J",A_H(A1R)],AMr,0,Bi,[],0,0,0,0,["J",A_H(AOu)],ALJ,
0,B,[],4,0,0,0,0,AHt,0,B,[],4,3,0,0,0,YV,"UnicodeHelper$Range",8,B,[],0,3,[AHt,0,"Range"],0,0,AJt,0,B,[],0,3,0,0,0,AL6,0,B,[],4,3,0,0,0,F_,0,B,[],0,0,0,0,0,ACS,0,F_,[FJ],0,0,0,0,0,Vk,0,F_,[FJ],0,0,0,0,0]);
$rt_metadata([ABJ,0,F_,[FJ],0,0,0,0,0,AHm,0,B,[W],0,0,0,0,0,ALw,0,B,[DU],0,3,0,0,0,W8,0,B,[Ch],0,3,0,0,["bo",A_I(AVE)],W9,0,B,[Ch],0,3,0,0,["bo",A_I(AVZ)],AGd,0,B,[W],0,3,0,0,["g",A_I(A5G)],AEW,0,B,[Ch],0,0,0,0,["bo",A_I(AVT)],ACm,0,B,[W],0,3,0,0,["g",A_I(AUh)],ACl,0,B,[W],0,3,0,0,["g",A_I(A5l)],AF5,0,B,[Ch],0,3,0,0,["bo",A_I(AXz)],W0,0,Ba,[],0,0,0,0,["p",A_I(ARo)],WX,0,Ba,[],0,0,0,0,["p",A_I(AZq)],Rc,0,Ba,[],0,0,0,0,["p",A_I(ATr),"M",A_H(A2b)],ZS,0,Ba,[],0,0,0,0,["p",A_I(A5F)],ZQ,0,Ba,[],0,0,0,0,["p",A_I(AWy)],ZR,
0,Ba,[],0,0,0,0,["p",A_I(A3C)],ZV,0,Ba,[],0,0,0,0,["p",A_I(A1m)],ZW,0,Ba,[],0,0,0,0,["p",A_I(AOq)],ZT,0,Ba,[],0,0,0,0,["p",A_I(AR7)],ZU,0,Ba,[],0,0,0,0,["p",A_I(ATZ)],ZX,0,Ba,[],0,0,0,0,["p",A_I(AXu)],ZY,0,Ba,[],0,0,0,0,["p",A_I(A0X)],Rb,0,Ba,[],0,0,0,0,["p",A_I(A8Z)],Rv,0,Ba,[],0,0,0,0,["p",A_I(AR_)],Q_,0,Ba,[],0,0,0,0,["p",A_I(AQy)],Ra,0,Ba,[],0,0,0,0,["p",A_I(A10)],Rf,0,Ba,[],0,0,0,0,["p",A_I(AS0)],Q$,0,Ba,[],0,0,0,0,["p",A_I(A6R)],Rd,0,Ba,[],0,0,0,0,["p",A_I(A0c)],Re,0,Ba,[],0,0,0,0,["p",A_I(AVD)],SH,0,
B,[W],0,3,0,0,["g",A_I(A4W)],MY,0,B,[],3,3,0,0,0,ACA,0,B,[MY],4,3,0,0,0,SG,0,B,[T],0,3,0,0,["e",A_H(A5j)],SE,0,B,[T],0,3,0,0,["e",A_H(AR2)],SF,0,B,[T],0,3,0,0,["e",A_H(AXF)],SI,0,B,[T],0,3,0,0,["e",A_H(AON)],T1,0,B,[T],0,3,0,0,["e",A_H(AW9)],T0,0,B,[T],0,3,0,0,["e",A_H(A3H)],TZ,0,B,[T],0,3,0,0,["e",A_H(A5c)],S7,0,B,[T],0,3,0,0,["e",A_H(AYK)],Sj,0,B,[],3,3,0,0,0,AMc,0,B,[T],0,3,0,0,["e",A_H(A8o)],WQ,0,B,[Ch],0,3,0,0,["bo",A_I(APS)],AMw,0,B,[GM],0,3,0,0,0,ZL,0,B,[W],0,3,0,0,["g",A_I(A01)],AA9,0,B,[Ch],0,3,0,0,
["bo",A_I(AVu)],SV,0,B,[W],0,3,0,0,["g",A_I(ATo)],RD,0,B,[T],0,3,0,0,["e",A_H(AVz)],RB,0,B,[T],0,3,0,0,["e",A_H(A1S)]]);
$rt_metadata([RC,0,B,[T],0,3,0,0,["e",A_H(A7S)],VS,0,B,[T],0,3,0,0,["e",A_H(A5x)],VU,0,B,[T],0,3,0,0,["e",A_H(AUC)],ABd,0,B,[CA],0,3,0,0,["bN",A_H(A6H)],ABR,0,B,[T],0,3,0,0,["e",A_H(APk)],ABO,0,B,[T],0,3,0,0,["e",A_H(AQK)],Uv,0,B,[T],0,3,0,0,["e",A_H(AX0)],Uw,0,B,[T],0,3,0,0,["e",A_H(APi)],Ux,0,B,[T],0,3,0,0,["e",A_H(AQC)],Uy,0,B,[T],0,3,0,0,["e",A_H(AXJ)],UL,0,B,[T],0,3,0,0,["e",A_H(A3P)],AIT,0,B,[CA],0,3,0,0,["bN",A_H(A8q)],AE7,0,B,[],0,3,0,0,0,Vj,0,B,[IF],0,3,0,0,0,P$,"BackReferencedSingleSet",2,Iy,[],0,
0,[0,0,0],0,["cJ",A_K(ARI),"cY",A_L(A8O),"hh",A_H(AQm)],Ni,0,Bu,[],0,3,0,0,0,AEP,0,B,[T],0,3,0,0,["e",A_H(AXx)],AER,0,B,[EE],0,3,0,0,["fI",A_I(AYU)],Wz,0,B,[T],0,3,0,0,["e",A_H(AYx)],WA,0,B,[EE],0,3,0,0,["fI",A_I(AWx)],T4,0,B,[W],0,3,0,0,["g",A_I(A12)],ABG,0,B,[BC],0,3,0,0,0,AMI,0,B,[],4,3,0,0,0,AEF,0,B,[MY],0,0,0,0,0,AEX,0,B,[T],0,3,0,0,["e",A_H(A2j)],ABA,0,B,[T],0,3,0,0,["e",A_H(AT5)],ABz,0,B,[T],0,3,0,0,["e",A_H(A4N)],Tj,0,B,[T],0,3,0,0,["e",A_H(A7I)],QY,0,B,[EE],0,3,0,0,["fI",A_I(A3x)],AFz,0,B,[W],0,3,0,
0,["g",A_I(ARU)],Hl,0,CF,[],12,0,0,Ub,0,ADB,0,B,[GM],0,3,0,0,0,AM5,0,B,[NT],0,3,0,0,0,AM6,0,B,[CA],0,3,0,0,0,AM4,0,B,[BC],0,3,0,0,0,EN,0,CF,[],12,3,0,A0x,0,ZB,0,B,[],3,3,0,0,0,Gh,"DirectoryNode",26,Db,[],0,3,[0,0,0],0,["M",A_H(AXT)],R_,0,B,[T],0,3,0,0,["e",A_H(A2i)],Tm,0,B,[W],0,3,0,0,["g",A_I(ARL)],ADD,0,B,[],32,0,0,A$1,0,Ta,0,B,[W],0,3,0,0,["g",A_I(APx)],Py,0,EM,[Ek,C3],1,3,0,0,["fM",A_I(AYZ),"qS",A_I(A24)],AIL,0,B,[ZB],0,0,0,0,0,PO,0,B,[T],0,3,0,0,["e",A_H(A2G)],Ps,0,Py,[],0,0,0,0,["fM",A_I(AYZ),"qS",A_I(A24),
"qV",A_I(A5M)],Qj,0,EK,[JO],0,0,0,0,["fM",A_I(AYZ),"qS",A_I(A24),"ji",A_I(AYY),"da",A_H(AU3)],Ja,"FileNode",26,Db,[],0,3,[0,0,0],0,["M",A_H(AQA)],ACk,0,B,[LI],0,0,0,0,["sV",A_J(APN),"BB",A_I(ATp),"Dr",A_J(A61),"sg",A_J(APB)],Sv,0,Bu,[],0,3,0,0,0]);
$rt_metadata([Xt,0,Bu,[],0,3,0,0,0,VW,0,GQ,[],0,3,0,0,0,Sh,0,GQ,[],0,3,0,0,0,ADc,0,Ba,[],0,0,0,0,["p",A_I(AXB)],Yn,0,Ba,[],0,0,0,0,["p",A_I(AZ2)],TE,0,Ba,[],0,0,0,0,["p",A_I(APo)],TD,0,Ba,[],0,0,0,0,["p",A_I(A1P)],Xd,0,Ba,[],0,0,0,0,["p",A_I(ASN)],Z$,0,Ba,[],0,0,0,0,["p",A_I(A7o)],QX,0,Ba,[],0,0,0,0,["p",A_I(AVd)],ABu,0,Ba,[],0,0,0,0,["p",A_I(AWi)],Yk,0,Ba,[],0,0,0,0,["p",A_I(A8w)],Ym,0,Ba,[],0,0,0,0,["p",A_I(AQP)],QA,0,Ba,[],0,0,0,0,["p",A_I(AXL)],AAn,0,Ba,[],0,0,0,0,["p",A_I(A3M)],AAs,0,Ba,[],0,0,0,0,["p",
A_I(A5m)],ADG,0,Ba,[],0,0,0,0,["p",A_I(A7a)],ACB,0,Ba,[],0,0,0,0,["p",A_I(AX_)],P4,0,Ba,[],0,0,0,0,["p",A_I(AQG)],M9,0,Ba,[],0,0,0,0,["p",A_I(AVg)],AB$,0,M9,[],0,0,0,0,["p",A_I(A6t)],AEB,0,B,[],0,3,0,0,0,AHs,0,B,[],3,3,0,0,0,AIS,0,B,[BY],3,3,0,0,0,L$,0,Ge,[],1,3,0,0,0,S3,0,L$,[],0,3,0,0,0,TF,0,B,[W],0,3,0,0,["g",A_I(A6O)],RH,0,B,[Ik],0,3,0,0,["nc",A_H(ARa),"lN",A_H(AOI),"lw",A_I(AWL),"jc",A_I(AU6)],ZC,0,B,[T],0,3,0,0,0,ADx,0,B,[W],0,3,0,0,0,AEp,0,B,[W],0,3,0,0,0,Tu,0,B,[T],0,3,0,0,["e",A_H(AU8)],Df,0,B,[],3,
3,0,AJI,0,CE,0,CF,[],12,3,0,AI5,0,Ec,0,B,[],3,3,0,AZE,0,W5,0,B,[DU],0,3,0,0,0,AGc,0,B,[BY],3,3,0,0,0,QB,0,B,[AGc],0,3,0,0,["K8",A_H(A26)],Ts,0,B,[T],0,3,0,0,["e",A_H(AOP)],ADl,0,B,[T],0,3,0,0,["e",A_H(A23)],ADa,0,B,[Jc],0,0,0,0,["oV",A_I(A64),"pY",A_I(AXs),"pF",A_H(A7q)],PJ,0,B,[W],0,3,0,0,["g",A_I(AYR)],AGC,0,B,[W],0,3,0,0,["g",A_I(A7M)],UJ,0,B,[DU],0,3,0,0,["bF",A_I(APJ)],Tc,0,B,[T],0,3,0,0,["e",A_H(A7U)],ALi,0,B,[],0,0,0,0,0,AGK,0,B,[T],0,3,0,0,["e",A_H(A22)],RQ,0,B,[W],0,3,0,0,["g",A_I(A2e)],RR,0,B,[W],
0,3,0,0,["g",A_I(A8x)]]);
function $rt_array(cls,data){this.a0u=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","connectToDom: called on already connected","#wasm","#diffDemo","ClassL.java","ClassR.java","","[]","Patter is null","0","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","null","false","true","JetBrains Mono","Either src or dest is null"," is not subtype of ","[",", ","]","navigator.clipboard is undefined","FATAL: WebGL is not enabled in the browser",
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
"BYTE","FLOAT","GRAYSCALE","RGBA","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA",
"sendToDiff","selectScene ","CodiconDemo","RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FolderTransferDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","EditorWindowDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","FolderDiffScene","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n",
"measured = ","Consolas","#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","ns-resize",
"ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","nwse-resize","nesw-resize",", z = ",", w = ","(this Collection)"," -"," bold"," italic","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47",
"#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","open folder ...","open file ...","read file in pages","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","","codicon.pixel.size = ",
"w = ","Window 1","Window ","Project root","- to worker ","- to edt ","folder","file","objects[","] = ","FileTreeView model size = ","#616161","#393B40","#DFE1E5","#43454A","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ",
"ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile",
"|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","new editor window","new project view","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new folder diff window","new file diff window","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85",
"annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ","WorkerTest: \n  got ","  methodWithStringResult = ","charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","Select left...","Select right...",
".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","asyncDiffUtils.compareFolders","asyncDiffUtils.compareFiles","TreeNodes left & right should have same type","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","onPopupClosed"," error: ","pageIndex = 4080","point to the file generated by org.sudu.experiments.FileTestGen"," onPastePlainText: ",
"Open ...","Open project...","Project view","Open project ...","request new model, file = ","request in progress ","newAction must be non-null","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst ","Folder ","ClassFile ","Expected "," ints to write, but "," written","dir: ","showOpenFilePicker -> ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >",
"Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP","Resolve","Rep","No definition or usages","fib(",") result = ",") time = ","open file ","readLargeFilePages -> "," ints to read, but "," read","openFile: ","dir = ","asyncWithDir","openFileEdt: ","dir on edt = ","Thread.currentThread() = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","  sub dir: ","  file: ","complete","file = ","file.content.length = ","Unexpected type: ","Unexpected ref node type: ","]: hash = 0x",
", l = ","test passed","passCnt = ","failCnt = ","dir[",", list.size = ","file[","asyncWithDir complete, size = ","fSet","Is","In","main","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>",
"<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll","<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter",
"javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar",
"Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators",
"MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals",
"IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms",
"ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","openDirectory: "," - project view","readClipboardText error: ","open dir = "," ↔ ","Current Version: ","Last Parsed Version: ",
"DEF","DECL","CONCURRENT","UNORDERED","IDENTITY_FINISH","writeClipboardText error: ","opening file ... ","folderOpened ","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Error fetching file "]);
BD.prototype.toString=function(){return $rt_ustr(this);};
BD.prototype.valueOf=BD.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AHu(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var C0=Long_add;var Kv=Long_sub;var Cm=Long_mul;var AJr=Long_div;var AZk=Long_rem;var A9j=Long_or;var Dm=Long_and;var BdT=Long_xor;var Iw=Long_shl;var A$K=Long_shr;var GO=Long_shru;var BdU=Long_compare;var Jo=Long_eq;var BdV=Long_ne;var A9g=Long_lt;var AQ$=Long_le;var BdW=Long_gt;var A9f=Long_ge;var BdX=Long_not;var A$V=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A$W);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ADO.prototype;c.f=c.bo;c=ADP.prototype;c.f=c.bo;c=ADN.prototype;c.f=c.bo;c=YJ.prototype;c.f=c.bo;c=AMt.prototype;c.get=c.Oh;Object.defineProperty(c,"length",{get:c.Ve});c=AK6.prototype;c.createEntityReference=c.Q7;c.getElementById=c.Ty;c.createTextNode=c.Te;c.hasChildNodes=c.Sc;c.querySelectorAll=c.QO;c.removeChild=c.U0;c.cloneNode=c.IL;c.createComment=c.Wd;c.insertBefore=c.Rr;c.getElementsByTagNameNS=c.Vc;c.hasAttributes=c.Ly;c.normalize=c.OR;c.hasChildNodesJS=c.OJ;c.getElementsByTagName
=c.Og;c.appendChild=c.PP;c.createAttributeNS=c.TT;c.dispatchEvent=c.Ow;c.replaceChild=c.Jg;c.createElementNS=c.Kr;c.createCDATASection=c.Nw;c.querySelector=c.Lx;c.createElement=c.Us;c.isSupported=c.U4;c.importNode=c.RC;c.removeEventListener=c.Kn;c.createAttribute=c.Ox;c.createDocumentFragment=c.H5;c.createProcessingInstruction=c.Q1;c.addEventListener=c.MO;Object.defineProperty(c,"nodeName",{get:c.PO});Object.defineProperty(c,"documentElement",{get:c.Lc});Object.defineProperty(c,"childNodes",{get:c.Ne});Object.defineProperty(c,
"prefix",{get:c.RI,set:c.Wo});Object.defineProperty(c,"implementation",{get:c.NU});Object.defineProperty(c,"textContent",{get:c.Wi,set:c.Tb});Object.defineProperty(c,"parentNode",{get:c.Tv});Object.defineProperty(c,"nextSibling",{get:c.K2});Object.defineProperty(c,"nodeType",{get:c.UH});Object.defineProperty(c,"doctype",{get:c.St});Object.defineProperty(c,"localName",{get:c.Vw});Object.defineProperty(c,"nodeValue",{get:c.KJ,set:c.V5});Object.defineProperty(c,"firstChild",{get:c.Oq});Object.defineProperty(c,
"lastChild",{get:c.MW});Object.defineProperty(c,"previousSibling",{get:c.PB});Object.defineProperty(c,"namespaceURI",{get:c.JB});Object.defineProperty(c,"attributes",{get:c.RP});Object.defineProperty(c,"ownerDocument",{get:c.JH});c=QD.prototype;c.f=c.bo;c=ALA.prototype;c.removeEventListener=c.JJ;c.dispatchEvent=c.Rw;c.addEventListener=c.Ml;c=U5.prototype;c.onAnimationFrame=c.LA;c=U4.prototype;c.f=c.DU;c=U2.prototype;c.handleEvent=c.cP;c=ACw.prototype;c.f=c.bo;c=AFm.prototype;c.handleEvent=c.cP;c=AFn.prototype;c.handleEvent
=c.cP;c=AFo.prototype;c.handleEvent=c.cP;c=AFp.prototype;c.handleEvent=c.cP;c=AFq.prototype;c.handleEvent=c.cP;c=AFr.prototype;c.handleEvent=c.cP;c=AFs.prototype;c.handleEvent=c.cP;c=AFt.prototype;c.handleEvent=c.cP;c=AFu.prototype;c.handleEvent=c.cP;c=AFv.prototype;c.handleEvent=c.cP;c=XP.prototype;c.handleEvent=c.cP;c=XQ.prototype;c.handleEvent=c.cP;c=XR.prototype;c.handleEvent=c.cP;c=XS.prototype;c.handleEvent=c.cP;c=AEf.prototype;c.handleEvent=c.cP;c=AGo.prototype;c.f=c.bo;c=AGp.prototype;c.f=c.bo;c=Qu.prototype;c.accept
=c.OD;c=WD.prototype;c.f=c.bo;c=YR.prototype;c.f=c.bo;c=YQ.prototype;c.f=c.bo;c=YO.prototype;c.f=c.bo;c=YN.prototype;c.f=c.bo;c=PX.prototype;c.f=c.bo;c=PZ.prototype;c.f=c.bo;c=PY.prototype;c.f=c.bo;c=AAf.prototype;c.f=c.DU;c=AAd.prototype;c.f=c.DU;c=VI.prototype;c.f=c.bo;c=Yh.prototype;c.f=c.bo;c=AGi.prototype;c.f=c.bo;c=AGh.prototype;c.f=c.bo;c=AFG.prototype;c.f=c.bo;c=WU.prototype;c.f=c.bo;c=Va.prototype;c.handleEvent=c.cP;c=W8.prototype;c.f=c.bo;c=W9.prototype;c.f=c.bo;c=AEW.prototype;c.f=c.bo;c=AF5.prototype;c.f
=c.bo;c=WQ.prototype;c.f=c.bo;c=AA9.prototype;c.f=c.bo;c=QB.prototype;c.onTimer=c.K8;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);