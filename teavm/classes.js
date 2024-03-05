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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hy=f;}
function $rt_cls(cls){return S1(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Hr(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.cb.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return ASh(t);}
function $rt_throwableCause(t){return A0t(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A5v());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A5w(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A5x());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BL=$rt_compare;var A5y=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var Jb=$rt_isInstance;var A5z=$rt_nativeThread;var A5A=$rt_suspending;var A5B=$rt_resuming;var A5C=$rt_invalidPointer;var C=$rt_s;var Bn=$rt_eraseClinit;var Bc=$rt_imul;var EX=$rt_wrapException;var A5D=$rt_checkBounds;var A5E=$rt_checkUpperBound;var A5F=$rt_checkLowerBound;var A5G=$rt_wrapFunction0;var A5H=$rt_wrapFunction1;var A5I=$rt_wrapFunction2;var A5J=$rt_wrapFunction3;var A5K=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AJf=$rt_createCharArrayFromData;var A3C=$rt_createByteArrayFromData;var A4a=$rt_createShortArrayFromData;var DX=$rt_createIntArrayFromData;var A5L=$rt_createBooleanArrayFromData;var A5M=$rt_createFloatArrayFromData;var A5N=$rt_createDoubleArrayFromData;var AIz=$rt_createLongArrayFromData;var A5u=$rt_createBooleanArray;var DL=$rt_createByteArray;var A5O=$rt_createShortArray;var B5=$rt_createCharArray;var BP=$rt_createIntArray;var A5P=$rt_createLongArray;var ALx=$rt_createFloatArray;var A5Q
=$rt_createDoubleArray;var BL=$rt_compare;var A5R=$rt_castToClass;var A5S=$rt_castToInterface;var A5T=Long_toNumber;var Bp=Long_fromInt;var A5U=Long_fromNumber;var D=Long_create;var FH=Long_ZERO;var A5V=Long_hi;var GR=Long_lo;
function B(){this.$id$=0;}
function BE(a){return S1(a.constructor);}
function AQg(a,b){return a!==b?0:1;}
function AMJ(a){var b,c,d,e,f,g,h,i,j;b=MB(a);if(!b)c=C(0);else{d=(((32-W$(b)|0)+4|0)-1|0)/4|0;e=B5(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=Ik((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Hr(e);}j=new K;M(j);H(H(j,C(1)),c);return L(j);}
function MB(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function APB(a){var b,c,d;if(!Jb(a,Ex)&&a.constructor.$meta.item===null){b=new T$;Y(b);N(b);}b=ALB(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function RS(){var a=this;B.call(a);a.BJ=0;a.qs=null;}
function A4U(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AKD();AIb();AFS();AGz();AHT();AIZ();AF1();AEi();AFv();AHk();AIa();AKc();AGk();AJt();AI3();AGZ();AGd();AI$();AKT();AF3();AIF();AFx();AKj();AJT();AKh();AIo();AHL();AHf();c=(AEw()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))X6(C(2),C(3));else{d=new RS;BJ(d);e=new ABg;e.Ao=d;f=new WB;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new Pz;j.yy=i;j.yz=g;j.yA
=3;j.yB=e;j.yv=f;k=Bv(j,"f");i.onmessage=k;h=h+1|0;}l=I(LZ,[E$(C(4),C(5),300),E$(C(6),C(7),300),E$(C(8),C(5),400),E$(C(9),C(7),400),E$(C(10),C(5),600),E$(C(11),C(7),600),E$(C(12),C(5),700),E$(C(13),C(7),700)]);m=Q(LZ,1);m.data[0]=ASL(C(14),Fs(C(15),C(16)),C(5),400);b=(LW(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.t9;f=c.th;i=new K;M(i);BN(H(H(i,C(17)),f),41);i=L(i);f=c.te;o=c.r8;c=AW5($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1
|0;}e=$rt_globals.Promise.all(g);BJ(d);c=new ABh;c.A2=d;g=new ABf;e.then(Bv(c,"f"),Bv(g,"f"));}}
function AGF(b){var c,d,e,f,g,h,i,j;c=new AAp;d=new T8;d.yi=c;c.tP=d;d=new T6;d.BR=c;c.op=d;e=new T7;e.zO=c;c.vs=new $rt_globals.ResizeObserver(Bv(e,"f"));d=new T5;d.rF=c;c.w_=d;c.ls=1;d=new Z9;d.mr=new Tr;e=new X4;e.DK=null;e.mj=A5W;d.st=e;BJ(e);f=new AAb;f.z1=e;d.BL=f;d.A_=b;g=b.length;h=0;while(h<g){e=b[h];i=new AAc;i.zk=d;i.zj=h;f=Bv(i,"f");e.onmessage=f;e=b[h];f=AJr();e.postMessage(f);h=h+1|0;}d.iw=0;d.pf=BP(g);c.Bp=d;c.qM=(Ev()).getElementById("canvasDiv");d=AEw();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.et=d;c.qM.appendChild(d);b=c.et;d=ARi(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)X6(C(2),C(18));else{c.pM=A4G(c.et,c.op);b=new TY;j=c.op;AKC(b,e,new ABM,1,2.25,0.625);b.DI=new ABL;b.C9=j;c.hQ=b;AR1(c.vs,c.et,AUO());d=$rt_globals.window;j=c.w_;d.addEventListener("resize",Bv(j,"handleEvent"));j=new OI;b=c.hQ;d=c.pM.cs;j.P=b;j.o=d;j.bw=c;d=$rt_str($rt_globals.window.location.hash);if(Bj(C(19),d)){b=new Pd;El(b,j);d=$rt_globals.fetch("test.wasm");j
=new WK;d=d.then(Bv(j,"f"));j=new WJ;e=d.then(Bv(j,"f"));j=new WH;d=new WG;e.then(Bv(j,"f"),Bv(d,"f"));}else b=Bj(C(20),d)?A4B(j):(A1j(J(d)<=0?C(21):Dv(d,1))).bb(j);c.gB=b;SQ(c);}c.et.focus();}
var WA=G(0);
var Wb=G(0);
function ACN(){var a=this;B.call(a);a.m1=null;a.vv=null;a.d5=null;}
function S1(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ACN;c.d5=b;d=c;b.classObject=d;}return c;}
function JO(a){if(a.m1===null)a.m1=AGW(a.d5);return a.m1;}
function M5(a){var b,c,d,e;b=a.vv;if(b===null){if(AK9(a.d5)===null?0:1){b=M5(HU(a));c=new K;M(c);H(H(c,b),C(22));b=L(c);}else{b=a.d5.$meta.enclosingClass;if((b===null?null:S1(b))!==null){b=$rt_str(a.d5.$meta.simpleName);if(b===null)b=C(21);}else{b=AGW(a.d5);d=RH(b,36);if(d==(-1)){e=RH(b,46);if(e!=(-1))b=Dv(b,e+1|0);}else{b=Dv(b,d+1|0);if(P(b,0)>=48&&P(b,0)<=57)b=C(21);}}}a.vv=b;}return b;}
function IO(a){return a.d5.$meta.primitive?1:0;}
function HU(a){return S1(AK9(a.d5));}
var AIJ=G();
function Bv(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fd(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AIw=G();
function ALB(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AJ8(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AJ8(d[e],c))return 1;e=e+1|0;}return 0;}
function AK9(b){return b.$meta.item;}
function AGW(b){return $rt_str(b.$meta.name);}
function GY(){var a=this;B.call(a);a.iQ=null;a.nm=null;a.kH=0;a.k3=0;}
function A5X(){var a=new GY();Y(a);return a;}
function A5Y(a){var b=new GY();Bm(b,a);return b;}
function Y(a){a.kH=1;a.k3=1;}
function Bm(a,b){a.kH=1;a.k3=1;a.iQ=b;}
function AWX(a){return a;}
function ASh(a){return a.iQ;}
function A0t(a){var b;b=a.nm;if(b===a)b=null;return b;}
var Ew=G(GY);
function A5Z(){var a=new Ew();AGs(a);return a;}
function AGs(a){Y(a);}
var Bu=G(Ew);
function A5w(a){var b=new Bu();A1S(b,a);return b;}
function A1S(a,b){Bm(a,b);}
var AJw=G(Bu);
var C7=G(0);
var CL=G(0);
var Kj=G(0);
function BK(){var a=this;B.call(a);a.cb=null;a.j6=0;}
var A50=null;var A51=null;var A52=null;function Fc(){Fc=Bn(BK);ATb();}
function AOz(){var a=new BK();AEg(a);return a;}
function Hr(a){var b=new BK();Jq(b,a);return b;}
function ED(a,b,c){var d=new BK();OB(d,a,b,c);return d;}
function AEg(a){Fc();a.cb=A50;}
function Jq(a,b){Fc();OB(a,b,0,b.data.length);}
function OB(a,b,c,d){var e;Fc();e=B5(d);a.cb=e;C6(b,c,e,0,d);}
function Ms(b){var c;Fc();c=AOz();c.cb=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.cb.data;if(b<c.length)return c[b];}d=new Ig;Y(d);N(d);}
function J(a){return a.cb.data.length;}
function Gq(a){return a.cb.data.length?0:1;}
function QS(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){C6(a.cb,b,d,e,c);return;}}g=new BH;Y(g);N(g);}
function Oo(a,b){var c,d,e;if(a===b)return 0;c=Be(J(a),J(b));d=0;while(true){if(d>=c)return J(a)-J(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ABH(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Nw(a,b){if(a===b)return 1;return ABH(a,b,0);}
function DA(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function JW(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.cb.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=JP(b);h=Jc(b);while(true){f=a.cb.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function Hw(a,b,c){var d,e,f,g,h;d=Be(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.cb.data[d]==e)break;d=d+(-1)|0;}return d;}f=JP(b);g=Jc(b);while(true){if(d<1)return (-1);h=a.cb.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function RH(a,b){return Hw(a,b,J(a)-1|0);}
function Yv(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function AZs(a,b){return Yv(a,b,0);}
function QP(a,b,c){var d,e;d=Be(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AFA(a,b){return QP(a,b,J(a));}
function Cv(a,b,c){var d,e;d=BL(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d){Fc();return A51;}if(!b&&c==J(a))return a;return ED(a.cb,b,c-b|0);}
function Dv(a,b){return Cv(a,b,J(a));}
function QY(a,b,c){return Cv(a,b,c);}
function Fs(a,b){var c,d,e,f,g,h;if(Gq(b))return a;if(Gq(a))return b;c=B5(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Ms(c);}
function AB8(a,b,c){var d,e,f,g;d=new K;M(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BN(d,P(a,f));}f=f+1|0;}H(d,Dv(a,f));return L(d);}
function ZQ(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cv(a,b,c+1|0);}
function AMH(a){return a;}
function Gs(a){var b,c,d,e,f;b=a.cb.data;c=B5(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function Cl(b){Fc();return b===null?C(23):b.cN();}
function NB(b){var c,d;Fc();c=new BK;d=B5(1);d.data[0]=b;Jq(c,d);return c;}
function Dl(b){var c;Fc();c=new K;M(c);return L(U(c,b));}
function Bj(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BK))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function NU(a){var b,c,d,e;a:{if(!a.j6){b=a.cb.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j6=(31*a.j6|0)+e|0;d=d+1|0;}}}return a.j6;}
function Mc(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new F2;Bm(b,C(24));N(b);}A53=1;d=new Zr;d.mQ=Q(C0,10);d.hX=(-1);d.fK=(-1);d.bA=(-1);e=new G7;e.fq=1;e.bQ=b;e.bg=B5(J(b)+2|0);C6(Gs(b),0,e.bg,0,J(b));f=e.bg.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.zL=g;e.g_=0;FP(e);FP(e);d.l=e;d.dX=0;d.nu=Vx(d,(-1),0,null);if(!DC(d.l)){b=new Kf;h=d.l;MM(b,C(21),h.bQ,h.ds);N(b);}if(d.q9)d.nu.eT();b=BM();h=new AAf;h.km=(-1);h.o5=(-1);h.Cx=d;h.A4=d.nu;h.lI=a;h.km=0;g=J(a);h.o5=g;e=new AB9;i=h.km;j=d.hX;k=d.fK+1|0;l=d.bA
+1|0;e.iU=(-1);m=j+1|0;e.rO=m;e.d_=BP(m*2|0);f=BP(l);e.kX=f;Ju(f,(-1));if(k>0)e.po=BP(k);Ju(e.d_,(-1));ADP(e,a,i,g);h.cH=e;e.gw=1;n=0;m=0;if(!J(a)){f=Q(BK,1);f.data[0]=C(21);}else{while(true){l=J(h.lI);if(!AEq(h))l=h.o5;e=h.cH;if(e.eP>=0&&AFr(e)==1){e=h.cH;e.eP=MA(e);if(MA(h.cH)==AGy(h.cH)){e=h.cH;e.eP=e.eP+1|0;}g=h.cH.eP;g=g<=l&&OQ(h,g)?1:0;}else g=OQ(h,h.km);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BB(b,QY(a,m,AHA(h)));m=AI0(h);n=g;}a:{BB(b,QY(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(BG(b,
g)))break a;EN(b,g);}}if(g<0)g=0;f=Go(b,Q(BK,g));}return f;}
function AOc(a,b){return Oo(a,b);}
function ATb(){A50=B5(0);A51=AOz();A52=new SF;}
var Fy=G(GY);
var Il=G(Fy);
var AJb=G(Il);
var Es=G();
function HF(){Es.call(this);this.bp=0;}
var A54=null;var A55=null;function A1e(a){var b=new HF();AE5(b,a);return b;}
function AE5(a,b){a.bp=b;}
function J0(b){return (WU(A5n(20),b,10)).cN();}
function KK(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dt;Bm(b,C(25));N(b);}d=J(b);if(0==d){b=new Dt;Bm(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dt;Y(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=X1(P(b,f));if(i<0){j=new Dt;k=Cv(b,0,d);b=new K;M(b);H(H(b,C(27)),k);Bm(j,L(b));N(j);}if(i>=c){j=new Dt;l=Cv(b,0,d);b=new K;M(b);H(H(U(H(b,C(28)),c),C(29)),l);Bm(j,L(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dt;k=Cv(b,0,d);b=new K;M(b);H(H(b,C(30)),k);Bm(j,L(b));N(j);}b=new Dt;j=new K;M(j);U(H(j,C(31)),c);Bm(b,L(j));N(b);}
function CY(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A55===null){A55=Q(HF,256);c=0;while(true){d=A55.data;if(c>=d.length)break a;d[c]=A1e(c-128|0);c=c+1|0;}}}return A55.data[b+128|0];}return A1e(b);}
function AUD(a){return a.bp;}
function A2p(a,b){if(a===b)return 1;return b instanceof HF&&b.bp==a.bp?1:0;}
function W$(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I4(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AYc(a,b){b=b;return BL(a.bp,b.bp);}
function AKD(){A54=F($rt_intcls());}
function GS(){var a=this;B.call(a);a.C=null;a.L=0;}
function A56(){var a=new GS();M(a);return a;}
function A5n(a){var b=new GS();GM(b,a);return b;}
function M(a){GM(a,16);}
function GM(a,b){a.C=B5(b);}
function WU(a,b,c){return AJm(a,a.L,b,c);}
function AJm(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cs(a,b,b+1|0);else{Cs(a,b,b+2|0);f=a.C.data;g=b+1|0;f[b]=45;b=g;}a.C.data[b]=Ik(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cs(a,b,b+i|0);if(e)e=b;else{f=a.C.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.C.data;b=e+1|0;f[e]=Ik($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AJ0(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cs(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cs(a,b,b+8|0);d=b;}else{Cs(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A57;AJU(c,f);d=f.m8;g=f.mX;h=f.rf;i=1;j=1;if(h)j=2;k=9;l=ASN(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cs(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.C.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.C.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.C.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.C.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AIS(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BL(c,0.0);if(!d){if(1.0/c===Infinity){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cs(a,b,b+4|0);e=a.C.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cs(a,b,b+3|0);e=a.C.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cs(a,b,b+8|0);d=b;}else{Cs(a,b,b+9|0);e=a.C.data;d=b+1|0;e[b]=45;}e=a.C.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A58;AFM(c,f);g=f.nv;h=f.mJ;i=f.q4;j=1;k=1;if(i)k=2;l=18;m=ARx(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cs(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.C.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.C.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANH(p,FH))d=0;else{d=GR(AGG(g,p));g=AUM(g,p);}e=a.C.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AGG(p,Bp(10));q=q+1|0;}if(h){e=a.C.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function ASN(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ARx(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A59.data;g=f.length-1|0;while(g>=0){if(II(AUM(b,Ci(c,f[g])),FH)){d=d|e;c=Ci(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BN(a,b){return a.p3(a.L,b);}
function ADG(a,b,c){Cs(a,b,b+1|0);a.C.data[b]=c;return a;}
function MX(a,b){var c,d;c=a.C.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.C=KG(a.C,d);}
function L(a){return ED(a.C,0,a.L);}
function ADq(a,b,c,d){return a.pL(a.L,b,c,d);}
function Wu(a,b,c,d,e){var f,g,h,i;Cs(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.C.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function JZ(a,b){return a.o_(b,0,b.data.length);}
function Cs(a,b,c){var d,e,f,g;d=a.L;e=d-b|0;a.j0((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.C.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.L=a.L+(c-b|0)|0;}
var JG=G(0);
var K=G(GS);
function L4(){var a=new K();A2d(a);return a;}
function A2d(a){M(a);}
function H(a,b){var c;c=a.L;if(b===null)b=C(23);Mv(a,c,b);return a;}
function BY(a,b){Mv(a,a.L,b);return a;}
function U(a,b){WU(a,b,10);return a;}
function HK(a,b){var c,d,e,f,g,h,i,j;c=a.L;d=1;if(A3k(b,FH)){d=0;b=A4T(b);}a:{if(DF(b,Bp(10))<0){if(d)Cs(a,c,c+1|0);else{Cs(a,c,c+2|0);e=a.C.data;f=c+1|0;e[c]=45;c=f;}a.C.data[c]=Ik(GR(b),10);}else{g=1;h=Bp(1);i=De(Bp(-1),Bp(10));b:{while(true){j=Ci(h,Bp(10));if(DF(j,b)>0){j=h;break b;}g=g+1|0;if(DF(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cs(a,c,c+g|0);if(d)f=c;else{e=a.C.data;f=c+1|0;e[c]=45;}while(true){if(II(j,FH))break a;e=a.C.data;c=f+1|0;e[f]=Ik(GR((De(b,j))),10);b=AId(b,j);j=De(j,Bp(10));f=c;}}}return a;}
function EH(a,b){AJ0(a,a.L,b);return a;}
function AEc(a,b){BN(a,b);return a;}
function Jt(a,b){Mv(a,a.L,!b?C(32):C(33));return a;}
function AHo(a,b,c){var d,e,f,g,h,i;d=BL(b,c);if(d<=0){e=a.L;if(b<=e){if(d){f=e-c|0;a.L=e-(c-b|0)|0;g=0;while(g<f){h=a.C.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ig;Y(i);N(i);}
function UC(a,b){var c,d,e,f;if(b>=0){c=a.L;if(b<c){c=c-1|0;a.L=c;while(b<c){d=a.C.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ig;Y(f);N(f);}
function AX$(a,b,c,d,e){Wu(a,b,c,d,e);return a;}
function ANv(a,b,c,d){ADq(a,b,c,d);return a;}
function AIp(a){return a.L;}
function Ed(a){return L(a);}
function APA(a,b){MX(a,b);}
function AYu(a,b,c){ADG(a,b,c);return a;}
function Mv(a,b,c){var d,e,f;if(b>=0&&b<=a.L){a:{if(c===null)c=C(23);else if(Gq(c))break a;MX(a,a.L+J(c)|0);d=a.L-1|0;while(d>=b){a.C.data[d+J(c)|0]=a.C.data[d];d=d+(-1)|0;}a.L=a.L+J(c)|0;d=0;while(d<J(c)){e=a.C.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Ig;Y(c);N(c);}
var E4=G(Il);
var AJ_=G(E4);
function A5$(a){var b=new AJ_();AMM(b,a);return b;}
function AMM(a,b){Bm(a,b);}
var AI7=G(E4);
function A5_(a){var b=new AI7();AMY(b,a);return b;}
function AMY(a,b){Bm(a,b);}
var AA8=G(0);
var C_=G(0);
function BV(b,c){if(b!==null)b.b4();return c;}
var XY=G(0);
function Ka(){var a=this;B.call(a);a.jf=0;a.nR=0;a.nk=0;}
var A6a=0;function EA(a){A6a=A6a-1|0;}
function Hx(a,b,c){Ky(a,AIP(b,c,400,0));}
function La(a,b){return Lm(a,b,0.875);}
function Lm(a,b,c){return Eo(a,b)+c|0;}
function ZG(){var a=this;Ka.call(a);a.i7=null;a.db=null;a.wW=null;}
function ER(a){var b,c,d;b=a.db;c=a.nR;d=a.nk;b.clearRect(0.0,0.0,c,d);}
function ZY(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.db;d="center";c.textAlign=d;break a;case 2:c=a.db;d="right";c.textAlign=d;break a;default:break a;}d=a.db;c="left";d.textAlign=c;}}
function Cn(a,b){Ky(a,b.qU);}
function Ky(a,b){var c;if(a.wW!==b){c=a.db;a.wW=b;c.font=b;}}
function AIP(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B0(a,b,c,d){var e,f,g;e=a.db;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Eo(a,b){var c;c=$rt_ustr(b);return a.db.measureText(c).width;}
function J4(a,b,c,d){var e,f;e=a.db;f=$rt_ustr(Hr(AJf([35,HW(b/16|0),HW(b%16|0),HW(c/16|0),HW(c%16|0),HW(d/16|0),HW(d%16|0)])));e.fillStyle=f;}
function AVy(){return {alpha:false};}
var AIc=G();
var AKJ=G();
function BO(b,c){if(b===c)return 1;return b!==null?b.bJ(c):c!==null?0:1;}
function AFE(b){return b!==null?b.gD():0;}
function BJ(b){if(b!==null)return b;b=new F2;Bm(b,C(21));N(b);}
var BT=G(0);
function Nl(b){return b;}
var Ce=G(0);
function ABg(){B.call(this);this.Ao=null;}
function A2D(a,b){var c;c=a.Ao;c.qs=b;if(c.BJ)AGF(b);}
var AGj=G();
function K3(b,c){return b.data[c];}
var AJJ=G();
var AEr=G(0);
function E$(b,c,d){return ASL(C(34),Fs(C(15),b),c,d);}
var AKx=G(0);
var AGQ=G(0);
function LW(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C8(b,f+g|0);C6(c,0,d,f,g);return d;}
function Lq(b,c,d){C6(b,c,d,0,d.data.length);return d;}
function Zx(b,c,d){var e;if(c>0)C6(b,0,d,0,c);e=d.data.length;if(c<e)C6(b,c+1|0,d,c,e-c|0);return d;}
function AFw(b,c,d,e){var f;if(c>0)C6(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)C6(b,d,e,c,f-d|0);}return e;}
function CR(b){var c;c=new PR;c.kf=b;return c;}
function AE1(b,c){if(b.data.length!=c)b=C8(b,c);return b;}
function AGP(b,c,d){var e;e=c.data.length;if(e==d)c=C8(c,e*2|0);c.data[d]=b;return c;}
function AB3(b,c,d){var e;e=c.data.length;if(e==d)c=Ok(c,e*2|0);c.data[d]=b;return c;}
function Oj(b){return KG(b,b.data.length);}
function LZ(){var a=this;B.call(a);a.t9=null;a.th=null;a.te=null;a.r8=0;}
function ASL(a,b,c,d){var e=new LZ();ASb(e,a,b,c,d);return e;}
function ASb(a,b,c,d,e){a.t9=b;a.th=c;a.te=d;a.r8=e;}
var AEW=G();
function AW5(b,c){return {style:b,weight:c};}
function ABh(){B.call(this);this.A2=null;}
function ALk(a,b){var c,d,e;c=a.A2;d=0;while(d<b.length){e=b[d];(Ev()).fonts.add(e);d=d+1|0;}c.BJ=1;b=c.qs;if(b!==null)AGF(b);}
var ABf=G();
function A1x(a,b){$rt_globals.console.info("font load error "+b);}
var LD=G();
var A6b=null;var A6c=null;function Bt(){if(A6b===null)A6b=AQH(A6d,0);return A6b;}
function En(){if(A6c===null)A6c=AQH(A6e,0);return A6c;}
function A3F(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N2(b)&&(e+f|0)<=N2(d)){a:{b:{if(b!==d){g=HU(BE(b));h=HU(BE(d));if(g!==null&&h!==null){if(g===h)break b;if(!IO(g)&&!IO(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.d5;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AJ8(n.constructor,o)?1:0)){NA(b,c,d,e,j);b=new Jd;Y(b);N(b);}j=j+1|0;k=m;}NA(b,c,d,e,f);return;}if(!IO(g))break a;if(IO(h))break b;else break a;}b=new Jd;Y(b);N(b);}}NA(b,c,
d,e,f);return;}b=new Jd;Y(b);N(b);}b=new BH;Y(b);N(b);}d=new F2;Bm(d,C(35));N(d);}
function C6(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=N2(b)&&(e+f|0)<=N2(d)){NA(b,c,d,e,f);return;}b=new BH;Y(b);N(b);}
function NA(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function E3(){return Long_fromNumber(new Date().getTime());}
function AGB(){return A5U($rt_globals.performance.now()*1000000.0);}
var AGO=G();
var AI1=G();
function X6(b,c){var d,e,f;d=(Ev()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ev()).getElementById($rt_ustr(b)).appendChild(d);}
function AEw(){return (Ev()).createElement("canvas");}
function AHt(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ARi(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var ALh=G();
var WB=G();
function AZk(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AG2=G();
function H3(b){return $rt_str(b);}
var AIl=G();
function KG(b,c){var d,e,f,g;b=b.data;d=B5(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ok(b,c){var d,e,f,g;b=b.data;d=DL(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Jh(b,c){var d,e,f,g;b=b.data;d=BP(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C8(b,c){var d,e,f,g;d=b.data;e=AGx(HU(BE(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AGp(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));U(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function ASq(b){var c,d,e;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));EH(c,e[d]);d=d+1|0;}BY(c,C(38));return L(c);}
function AUd(b){var c,d,e,f;if(b===null)return C(23);c=new K;M(c);BY(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BY(c,C(37));f=e[d];AIS(c,c.L,f);d=d+1|0;}BY(c,C(38));return L(c);}
function Ju(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;Y(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AEQ(b,c,d,e){var f,g;if(c>d){e=new BU;Y(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function K1(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A5W;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.p_(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AJ1(b,c){return ABl(b,0,b.data.length,c);}
function ABl(b,c,d,e){var f,g,h,i,j;f=BL(c,d);if(f>0){g=new BU;Y(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function AGu(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+AFE(e[d])|0;d=d+1|0;}return c;}
var ACr=G(0);
var AJy=G();
function AXn(a,b){return a.NB(b);}
function AQd(a){return a.Q0();}
var AFK=G();
var Ge=G(0);
var SF=G();
var BH=G(Bu);
var AJX=G();
function N2(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A6f());}return b.data.length;}
function AGx(b,c){if(b===null){b=new F2;Y(b);N(b);}if(b===F($rt_voidcls())){b=new BU;Y(b);N(b);}if(c>=0)return ATv(b.d5,c);b=new AD8;Y(b);N(b);}
function ATv(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var F2=G(Bu);
var Jd=G(Bu);
function Dm(){B.call(this);this.mV=0;}
var A6g=null;var A6h=null;var A6i=null;var A6j=null;var A6k=null;var A6l=null;var A6m=null;var A6n=null;var A6o=null;var A6p=null;function ATY(a){var b=new Dm();AFm(b,a);return b;}
function AFm(a,b){a.mV=b;}
function PA(b){var c,d;c=A6l.data;if(b>=c.length)return ATY(b);d=c[b];if(d===null){d=ATY(b);A6l.data[b]=d;}return d;}
function U_(b){var c,d;c=new BK;d=B5(1);d.data[0]=b;Jq(c,d);return c;}
function Mg(b){return b>=65536&&b<=1114111?1:0;}
function CT(b){return (b&64512)!=55296?0:1;}
function Dk(b){return (b&64512)!=56320?0:1;}
function Ot(b){return !CT(b)&&!Dk(b)?0:1;}
function Jp(b,c){return CT(b)&&Dk(c)?1:0;}
function EP(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JP(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jc(b){return (56320|b&1023)&65535;}
function FJ(b){return G4(b)&65535;}
function G4(b){if(A6j===null){if(A6m===null)A6m=AKg();A6j=AFy((A6m.value!==null?$rt_str(A6m.value):null));}return Sv(A6j,b);}
function Fm(b){return G2(b)&65535;}
function G2(b){if(A6i===null){if(A6n===null)A6n=AKE();A6i=AFy((A6n.value!==null?$rt_str(A6n.value):null));}return Sv(A6i,b);}
function Sv(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BL(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ABS(b,c){if(c>=2&&c<=36){b=X1(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function X1(b){var c,d,e,f,g,h,i,j,k,l;if(A6h===null){if(A6o===null)A6o=AJd();c=(A6o.value!==null?$rt_str(A6o.value):null);d=ASk(Gs(c));e=M2(d);f=BP(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+Pa(d)|0;j=j+Pa(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A6h=f;}g=A6h.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BL(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function Ik(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function HQ(b){var c;if(b<65536){c=B5(1);c.data[0]=b&65535;return c;}return AJf([JP(b),Jc(b)]);}
function CF(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ot(b&65535))return 19;if(A6k===null){if(A6p===null)A6p=AHQ();d=(A6p.value!==null?$rt_str(A6p.value):null);e=Q(WO,16384);f=e.data;g=DL(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Nx(P(d,l));if(m==64){l=l+1|0;m=Nx(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,Nx(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Nx(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AOa(k,k+i|0,Ok(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AOa(k,k+i|0,Ok(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A6k=C8(e,j);}e=A6k.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.tt)o=p+1|0;else{c=d.yw;if(b>=c)return d.yG.data[b-c|0];c=p-1|0;}}return 0;}
function KJ(b){a:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function HN(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CF(b)!=16?0:1;}
function Yo(b){switch(CF(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function RC(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Yo(b);}return 1;}
function AIb(){A6g=F($rt_charcls());A6l=Q(Dm,128);}
function AKg(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AKE(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AJd(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AHQ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var V8=G(0);
var AAh=G(0);
var EZ=G(0);
var AIe=G();
function Ev(){return $rt_globals.window.document;}
function AY2(a){return a.IA();}
function A00(a,b){return a.Ki($rt_str(b));}
function A0P(a,b){a.HP($rt_str(b));}
function AWh(a,b){return a.NL($rt_str(b));}
function ALA(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function ANn(a){return a.Rk();}
function A0X(a,b,c){return a.P$($rt_str(b),$rt_str(c));}
function APl(a,b,c,d){a.CY($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
function AVo(a){return a.O1();}
function AZI(a){return !!a.KH();}
function A1t(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AQx(a){return a.HY();}
function AOY(a,b){a.P2($rt_str(b));}
function AQQ(a){return !!a.HG();}
function AUh(a){return a.Kr();}
function APP(a){return $rt_ustr(a.FM());}
function AMb(a,b){return a.H9(b?1:0);}
function A2r(a){return a.KG();}
function AXL(a,b,c){return a.RV($rt_str(b),$rt_str(c));}
function AQp(a,b,c){return a.Oj(b,c?1:0);}
function ATx(a,b,c){return !!a.JU($rt_str(b),$rt_str(c));}
function AUJ(a){return a.I6();}
function AOJ(a){return $rt_ustr(a.LC());}
function ANy(a,b){return !!a.E5(b);}
function AOm(a,b){return a.L3($rt_str(b));}
function AXU(a,b,c){return a.Iy($rt_str(b),$rt_str(c));}
function APX(a){return a.MQ();}
function AVr(a,b){return a.Rq($rt_str(b));}
function AOl(a){return $rt_ustr(a.Mt());}
function ARS(a){a.HC();}
function ALq(a,b){return a.RY($rt_str(b));}
function AS6(a,b){return a.HU($rt_str(b));}
function AVM(a,b){return a.HA($rt_str(b));}
function A1l(a){return $rt_ustr(a.M2());}
function AVT(a,b,c){return a.PE(b,c);}
function AZQ(a,b){return a.FL(b);}
function ASg(a){return a.JG();}
function ARe(a,b,c){a.EB($rt_str(b),Fd(c,"handleEvent"));}
function AQZ(a,b,c){return a.GC(b,c);}
function AS1(a){return !!a.QY();}
function ATX(a,b){return a.Iu($rt_str(b));}
function AZa(a,b,c,d){a.Cm($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
function ANt(a){return a.JH();}
function AV5(a,b,c){return a.H8($rt_str(b),$rt_str(c));}
function AU7(a){return $rt_ustr(a.Nh());}
function A2m(a){return a.MH();}
function ARb(a){return a.MV();}
function AU5(a){return a.JV();}
function ARf(a,b,c){a.E4($rt_str(b),Fd(c,"handleEvent"));}
function AWq(a,b){return a.Lp(b);}
function AOq(a,b){a.F5($rt_str(b));}
function A0q(a){return $rt_ustr(a.Mm());}
function Pz(){var a=this;B.call(a);a.yy=null;a.yz=null;a.yA=0;a.yB=null;a.yv=null;}
function ARN(a,b){var c,d,e,f,g;c=a.yy;d=a.yz;e=a.yA;f=a.yB;g=a.yv;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AJj=G();
function ASv(b){return Math.exp(b);}
function AIf(b){return Math.log(b);}
function Jj(b,c){return AYC(b,c);}
function AYC(b,c){return Math.pow(b,c);}
function DQ(){return AT6();}
function AT6(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function ATy(b,c){return Math.max(b,c);}
function Wf(b){if(b<0)b= -b|0;return b;}
function AOv(b){return Math.abs(b);}
var Yf=G(0);
var RK=G(0);
var Zv=G(0);
var SY=G(0);
var ADt=G(0);
var ABU=G(0);
var AIH=G();
function AZr(a,b,c){a.E4($rt_str(b),Fd(c,"handleEvent"));}
function AYa(a,b,c){a.EB($rt_str(b),Fd(c,"handleEvent"));}
function AOL(a,b,c,d){a.Cm($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
function AMn(a,b){return !!a.E5(b);}
function AWF(a,b,c,d){a.CY($rt_str(b),Fd(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AD8=G(Bu);
var Ig=G(BH);
var AIV=G();
function AJr(){return "ping";}
function AHN(b){return b===AJr()?1:0;}
var Zb=G(0);
var XQ=G(0);
function AAp(){var a=this;B.call(a);a.tP=null;a.op=null;a.qM=null;a.et=null;a.vs=null;a.w_=null;a.pM=null;a.hQ=null;a.ls=0;a.EL=0;a.zD=null;a.gB=null;a.Bp=null;}
function Gi(a,b){var c;c=Ev();b=$rt_ustr(b);c.title=b;}
function SQ(a){a.EL=$rt_globals.requestAnimationFrame(Bv(a.tP,"onAnimationFrame"));}
function Js(a){a.ls=1;}
function AAW(a,b,c){var d,e;a.pM.eo=BF(b,c);d=a.et;e=b;d.width=e;d=a.et;e=c;d.height=e;d=a.hQ;W(d.c6,b,c);e=d.Y;d=d.c6;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gB.cd(a.hQ.c6,Lj(a));a.gB.bM();}
function ZF(a,b){var c,d,e;c=a.zD;d=a.et;if(BO(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.zD=b;}
function MS(a){return $rt_globals.performance.now()/1000.0;}
function Lj(a){return $rt_globals.window.devicePixelRatio;}
function Ja(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEl(null,b);else{c=new AC6;d=$rt_globals.window.showDirectoryPicker();e=new AC5;e.sk=b;e.sl=c;d.then(Bv(e,"f"),Bv(c,"f"));}}
function Kc(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AEl(b,null);else{c=new ADF;d=$rt_globals.window.showOpenFilePicker();e=new ADE;e.sJ=b;d.then(Bv(e,"f"),Bv(c,"f"));}}
function CV(a,b,c,d){var e,f,g,h;e=a.Bp;f=e.iw;if(f>0){g=e.pf.data;f=f-1|0;e.iw=f;Tg(e,b,c,d,g[f]);}else{h=e.mr;e=new AC7;e.uw=b;e.AO=c;e.Ad=d;b=new Th;b.rv=e;c=h.mq;b.AE=c;if(c===null)h.o$=b;else c.ud=b;h.mq=b;h.b2=h.b2+1|0;h.k$=h.k$+1|0;}}
function Rz(a,b,c){var d,e;if(!LU()){b=new Bu;Bm(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Z3;e.tb=b;b=ALe(c);d.then(Bv(e,"f"),Bv(b,"f"));}}
function Ti(a,b,c,d){var e,f,g;if(!LU()){b=new Bu;Bm(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=Gs(b);A3X();b=A6q;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ACw;e.vF=c;c=ALe(d);b.then(Bv(e,"f"),Bv(c,"f"));}}
function Vo(a){return LU()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function ALe(b){var c;c=new OS;c.Am=b;return c;}
var BD=G(0);
var AJF=G();
var V=G(0);
var AJG=G();
var Zy=G(0);
function T8(){B.call(this);this.yi=null;}
function AXK(a,b){var c,d;c=b;b=a.yi;if(!(!b.gB.ci(c/1000.0)&&!b.ls)){d=b.hQ.c6;if(Bc(d.a,d.b)){b.ls=0;b.gB.bM();}}SQ(b);}
function T6(){B.call(this);this.BR=null;}
function DB(a){Js(a.BR);}
var Y3=G(0);
function T7(){B.call(this);this.zO=null;}
function ANJ(a,b,c){var d,e,f,g;c=a.zO;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.et){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=Lj(c);AAW(c,GG(f.width*g),GG(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AAW(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AG_=G();
function AUO(){return {box:'device-pixel-content-box'};}
function AR1(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CA=G(0);
function T5(){B.call(this);this.rF=null;}
function ARR(a,b){b=a.rF;b.gB.cd(b.hQ.c6,Lj(b));b.gB.bM();}
function Z9(){var a=this;B.call(a);a.mr=null;a.A_=null;a.st=null;a.pf=null;a.xi=0;a.iw=0;a.BL=null;}
function Tg(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.xi+1|0;a.xi=f;g=a.st;h=CY(f);g.j2=Or(g,g.j2,h);h=ABV(g,h);V_(h,b);V_(h,b);g.mm=g.mm+1|0;b=a.A_[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BK)g=$rt_ustr(c);else if(Jb(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Jb(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Jb(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof SH)){b=new BU;c
=JO(BE(c));g=new K;M(g);H(H(g,C(40)),c);Bm(b,L(g));N(b);}c=c;g=c.ij;if(g===null)g=c.f8;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var UE=G(0);
function AUr(a,b){var c;c=a.b9();while(c.cC()){b.g(c.b$());}}
var Hz=G(0);
function TL(a){var b,c;b=new Z6;c=new Q4;c.ys=a;b.Az=c;return b;}
function AX0(a,b){var c,d;c=a.b9();d=0;while(c.cC()){if(b.H(c.b$())){c.ph();d=1;}}return d;}
var FA=G();
function EE(a){return a.c1()?0:1;}
function Go(a,b){var c,d,e,f,g,h;c=b.data;d=a.q;e=c.length;if(e<d)b=AGx(HU(BE(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B7(a);while(B_(f)){g=b.data;h=e+1|0;g[e]=Ca(f);e=h;}return b;}
function A0E(a,b){var c;c=a.b9();while(c.cC()){if(BO(c.b$(),b)){c.ph();return 1;}}return 0;}
function H1(a,b){var c,d;c=0;d=b.b9();while(d.cC()){if(!a.zY(d.b$()))continue;c=1;}return c;}
var ND=G(0);
var ME=G(0);
function Fo(){FA.call(this);this.b2=0;}
function AR4(a,b){a.oo(a.c1(),b);return 1;}
function B7(a){var b;b=new W3;b.jg=a;b.p9=a.b2;b.lB=a.c1();b.hT=(-1);return b;}
function ARt(a,b,c){var d,e;if(b>=0&&b<=a.c1()){if(c.eE())return 0;d=c.b9();while(d.cC()){e=b+1|0;a.oo(b,d.b$());b=e;}return 1;}c=new BU;Y(c);N(c);}
function A1f(a,b,c){c=new Eg;Y(c);N(c);}
function K7(a,b){var c,d;c=a.c1();d=0;while(true){if(d>=c)return (-1);if(BO(b,a.kB(d)))break;d=d+1|0;}return d;}
function AQJ(a,b){var c,d;if(!Jb(b,ME))return 0;c=b;if(a.q!=c.q)return 0;d=0;while(d<c.q){if(!BO(BG(a,d),BG(c,d)))return 0;d=d+1|0;}return 1;}
var Md=G(Fo);
var OL=G(0);
var ADQ=G(0);
function Tr(){var a=this;Md.call(a);a.o$=null;a.mq=null;a.k$=0;}
var Lr=G(0);
function Ee(){var a=this;B.call(a);a.oY=null;a.o3=null;}
var Ex=G(0);
var Vn=G(0);
var O_=G(0);
function X4(){var a=this;Ee.call(a);a.j2=null;a.mj=null;a.DK=null;a.mm=0;}
function AHg(a,b){var c;c=ABV(a,b);if(c===null)return null;a.j2=K4(a,a.j2,b);a.mm=a.mm+1|0;return c.ko;}
function ABV(a,b){var c,d;c=a.j2;while(true){if(c===null)return null;d=MT(a.mj,b,c.lY);if(!d)break;c=d>=0?c.b5:c.bU;}return c;}
function Or(a,b,c){var d,e;if(b===null){b=new KE;d=null;b.lY=c;b.ko=d;b.gI=1;b.gR=1;return b;}e=MT(a.mj,c,b.lY);if(!e)return b;if(e>=0)b.b5=Or(a,b.b5,c);else b.bU=Or(a,b.bU,c);E0(b);return M1(b);}
function K4(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=MT(a.mj,c,b.lY);if(d<0)b.bU=K4(a,b.bU,c);else if(d>0)b.b5=K4(a,b.b5,c);else{e=b.b5;if(e===null)return b.bU;f=b.bU;g=Q(KE,e.gI).data;h=0;while(true){b=e.bU;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b5;while(h>0){h=h+(-1)|0;j=g[h];j.bU=b;E0(j);b=M1(j);}e.b5=b;e.bU=f;E0(e);b=e;}E0(b);return M1(b);}
function AAb(){B.call(this);this.z1=null;}
function AAc(){var a=this;B.call(a);a.zk=null;a.zj=0;}
function AUI(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.zk;d=a.zj;AHN(b.data);e=c.mr;f=e.o$;if(f===null)g=null;else{g=f.ud;e.o$=g;if(g!==null)g.AE=null;else e.mq=null;e.k$=e.k$-1|0;e.b2=e.b2+1|0;g=f.rv;}if(g!==null)Tg(c,g.uw,g.AO,g.Ad,d);else{h=c.pf.data;i=c.iw;c.iw=i+1|0;h[i]=d;}c=c.BL;b=b.data;if(!AHN(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;Y(b);N(b);}if(b.length<1){b=new BU;AGs(b);N(b);}e=CY(b[0]);c=AHg(c.z1,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?H3(Nl(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A3o(Nl(e)):(e instanceof $rt_globals.File?1:0)?AJ4(null,Nl(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AJ4(Nl(e),null);k=l;}c.g(h);}}
function AE3(){var a=this;B.call(a);a.cs=null;a.jx=null;a.EV=null;a.eo=null;}
function A4G(a,b){var c=new AE3();A1b(c,a,b);return c;}
function A1b(a,b,c){var d,e,f,g;a.eo=null;a.jx=b;d=new YE;d.bG=CN(Q(Ct,0));d.os=CN(Q(Ct,0));d.bS=CN(Q(CE,0));d.fs=CN(Q(EK,0));d.cQ=CN(Q(CX,0));d.gL=CN(Q(EW,0));d.hc=CN(Q(E8,0));d.mh=CN(Q(V,0));d.mT=CN(Q(V,0));d.dq=c;a.cs=d;e=$rt_globals.window;f=Q(C_,14);g=f.data;d=new ACS;d.q6=a;g[0]=C4(a,b,C(41),d);d=new ACT;d.Aa=a;g[1]=C4(a,b,C(42),d);d=new ACU;d.x9=a;g[2]=C4(a,b,C(43),d);d=new ACV;d.wb=a;g[3]=C4(a,b,C(44),d);d=new ACW;d.tG=a;g[4]=C4(a,b,C(45),d);d=new ACX;d.rp=a;g[5]=C4(a,b,C(46),d);d=new ACY;d.BZ=a;g[6]
=C4(a,b,C(47),d);d=new ACZ;d.zQ=a;g[7]=C4(a,b,C(48),d);d=new AC0;d.xL=a;g[8]=C4(a,b,C(49),d);d=new AC1;d.vI=a;g[9]=C4(a,b,C(50),d);d=new VI;d.ve=a;g[10]=C4(a,b,C(51),d);d=new VJ;d.un=a;e.addEventListener("paste",Bv(d,"handleEvent"),!!1);g[11]=U7(a,e,C(52),d);d=new VK;d.wU=a;g[12]=C4(a,e,C(53),d);d=new VL;d.Bw=a;g[13]=C4(a,e,C(54),d);c=new Rb;c.CI=f;a.EV=c;e=new ADM;e.yJ=b;b.onpointerdown=Bv(e,"f");e=new ADN;e.xX=b;b.onpointerup=Bv(e,"f");}
function Wv(){return (Ev()).activeElement;}
function C4(a,b,c,d){b.addEventListener($rt_ustr(c),Bv(d,"handleEvent"));return U7(a,b,c,d);}
function U7(a,b,c,d){var e;e=new Y0;e.Ej=b;e.El=c;e.Ek=d;return e;}
function ABi(a,b){var c;c=new ABX;c.wa=b;return c;}
function E9(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jx.getBoundingClientRect();e=BF(GG((b.clientX-d.left)*c),GG((b.clientY-d.top)*c));f=AJR(a.eo);d=new OG;ABJ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.D_=f;return d;}
function VO(a,b,c){var d,e,f,g;d=new Qm;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ABJ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.oK=0;d.ee=e;d.bm=f;d.jO=c;d.zT=g;return d;}
function D8(a,b){b.stopPropagation();b.preventDefault();}
function NR(){var a=this;B.call(a);a.pt=null;a.cg=null;a.Y=null;a.l0=0;a.AD=null;a.EA=0;a.Dn=0;a.k5=null;a.kV=null;a.DH=null;a.E$=null;a.uN=null;a.xk=null;a.iR=null;a.ie=null;a.jW=null;a.DP=null;a.r9=null;a.c6=null;a.BD=null;a.pH=0;a.mB=0;a.n$=0;a.nX=0;a.lm=0;a.n5=null;a.of=0.0;a.pP=0.0;}
function AKC(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c6=new Bg;a.pH=0;a.n5=new AC3;a.pt=c;a.l0=d;g=$rt_str(b.getParameter(7938));h=new K;M(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(L(h)));a.Y=b;a.cg=KC(c,4,4,1);i=ALx(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B5(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Q7;Jv();c=A6r;m.eU=b;m.h3=c;m.tU=j.length/c.m$|0;m.By
=l.length;n=b.createBuffer();m.w8=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.wd=null;n=b.createBuffer();m.vO=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.r9=m;a.Dn=Nw(g,C(56));c=new Y1;c.dZ=b;a.AD=c;a.of=e;a.pP=f;d=b.getParameter(3379);a.EA=d;c=new K;M(c);U(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(L(c)));k=Q(Dh,9);i=k.data;c=A3r(b);a.k5=c;i[0]=c;c=A4j(b,C(58));a.kV=c;i[1]=c;c=new Zk;H7(c,b,C(59),
C(60),A6r);a.DH=c;i[2]=c;c=A4$(b);a.E$=c;i[3]=c;c=new PG;Vv(c,b,C(61),C(62));a.uN=c;i[4]=c;c=A5k(b);a.xk=c;i[5]=c;c=A31(b);a.iR=c;i[6]=c;c=A45(b);a.ie=c;i[7]=c;c=A46(b);a.jW=c;i[8]=c;a.DP=k;ADx(b,C(63));}
function Iq(a,b,c){return Gx(a,b,c,400,0);}
function HI(a,b,c){return KC(a.pt,b,c,0);}
function D5(a,b,c,d){return KC(a.pt,b,c,d);}
function ADf(a,b,c,d,e,f){var g,h;Cn(a.cg,c);g=D5(a,La(a.cg,b)+(d*2|0)|0,e,f);Cn(g,c);B0(g,b,d,LF(c,e));h=CW(a);CM(h,g);EA(g);return h;}
function EJ(a,b){var c,d,e,f,g;c=a.Y;d=b.bn;e=b.bs;f=b.bf;g=b.bC;c.clearColor(d,e,f,g);a.Y.clear(16384);}
function B$(a,b){var c;if(b==a.mB)return b;if(!b)a.Y.disable(3042);else{a.Y.enable(3042);a.Y.blendFuncSeparate(770,771,1,1);}c=a.mB;a.mB=b;return c;}
function Nz(a,b,c){LN(a,b.a,b.b,c);}
function LN(a,b,c,d){var e,f;e=d.a;f=d.b;a.nX=1;a.lm=1;d=a.n5;d.tw=b;d.tx=c;d.tv=e;d.tu=f;ABK(a);}
function Ga(a){a.nX=0;a.lm=0;ABK(a);}
function ABK(a){var b,c,d,e,f,g;b=a.n$;c=a.nX;if(b!=c){a.n$=c;if(!c)a.Y.disable(3089);else a.Y.enable(3089);}if(a.n$&&a.lm){a.lm=0;d=a.Y;e=a.n5;b=e.tw;c=a.c6.b-e.tx|0;f=e.tu;c=c-f|0;g=e.tv;d.scissor(b,c,g,f);}}
function F0(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.r9;c=a.pH;d=b.h3.Aj;e=b.eU;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eU;h=b.w8;e.bindBuffer(34962,h);i=b.h3.qo.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eU;m=k.jE;n=k.gt;o=b.h3.m$*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gt|0;j=j+1|0;}a:{e=b.wd;if(e!==null){c=0;b.eU.bindBuffer(34962,e);i=b.h3.zz.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eU;j=e.jE;p=e.gt;m=e.sd;n=b.h3.yH;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gt|0;g=g+1|0;}}}q=b.vO;if(q===null){c=b.tU;if(c>0)b.eU.drawArrays(4,0,c);}else{b.eU.bindBuffer(34963,q);k=b.eU;g=b.By;k.drawElements(4,g,5123,0);}a.pH=d;}
function Bs(a,b,c,d,e){Gu(a,a.k5);GF(a.k5,a.Y,b,c,d,a.c6);d=a.k5;FC(a.Y,d.Bd,e);F0(a);}
function AD$(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;Gu(a,a.ie);GF(a.ie,a.Y,b,c,d,a.c6);j=a.ie;d=a.Y;k=j.wF;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.wE;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.ie;FC(a.Y,d.xA,i);F0(a);}
function L8(a,b,c,d,e,f,g,h){var i,j;Gu(a,a.jW);GF(a.jW,a.Y,b,c,d,a.c6);d=a.jW;i=a.Y;j=d.tS;i.uniform2f(j,e,f);FC(i,d.yl,g);d=a.jW;FC(a.Y,d.w$,h);F0(a);}
function DI(a,b,c,d,e,f,g,h,i){var j;j=!i?a.uN:a.xk;Gu(a,j);AK0(j,a.Y,!i?a.pP:a.of);GF(j,a.Y,b,c,d,a.c6);NY(j,a.Y,f);AEd(j,a.Y,f,e);AJZ(j,a.Y,g,h);F0(a);}
function CW(a){var b,c;b=new Iv;c=a.AD;b.eS=new Bg;b.eJ=c;b.f1=c.dZ.createTexture();A6s=A6s+1|0;return b;}
function MW(a,b){ADx(a.Y,b);}
function Gu(a,b){var c,d;if(b!==a.BD){c=a.Y;d=b.bE;c.useProgram(d);a.BD=b;}}
function TY(){var a=this;NR.call(a);a.C9=null;a.DI=null;}
function Gx(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cg;g=AIP(b,c,d,e);Ky(f,g);h=f.db.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Eo(f,C(64));m=Eo(f,C(65));h=new Lv;n=g;h.oe=b;h.oV=c;h.CD=d;h.CT=e;h.em=i;h.eG=j;h.Ct=l;h.p1=k;h.qU=n;h.tj=CZ(i);h.Dx=CZ(h.eG);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Cz=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.Cp=b;return h;}
function Cw(){B.call(this);this.x=null;}
function El(a,b){a.x=b;}
function A2n(a,b){return 0;}
function YE(){var a=this;B.call(a);a.bG=null;a.os=null;a.bS=null;a.fs=null;a.cQ=null;a.gL=null;a.hc=null;a.mh=null;a.mT=null;a.dq=null;a.e$=null;a.xT=0;}
function Tb(a,b){var c,d,e,f;DB(a.dq);c=(B3(!b.jO?a.os:a.bG)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].H(b);if(f)break;if(b.oK)break;e=e+1|0;}return f;}
function Rx(a,b,c){var d,e,f;DB(a.dq);d=(B3(a.gL)).data;e=d.length;f=0;while(f<e){if(d[f].h8(b,c))return 1;f=f+1|0;}return 0;}
function ACS(){B.call(this);this.q6=null;}
function AZC(a,b){var c;c=a.q6;if(Tb(c.cs,VO(c,b,1)))D8(c,b);}
function ACT(){B.call(this);this.Aa=null;}
function AZM(a,b){var c;c=a.Aa;if(Tb(c.cs,VO(c,b,0)))D8(c,b);}
function ACU(){B.call(this);this.x9=null;}
function AQu(a,b){var c,d,e,f,g,h,i;c=a.x9;if(c.eo!==null){a:{b:{d=E9(c,b);e=c.cs;DB(e.dq);f=e.e$;if(f!==null)f.g(d);else{g=(B3(e.bS)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bT(d))break a;i=i+1|0;}}}}D8(c,b);}}
function ACV(){B.call(this);this.wb=null;}
function AYs(a,b){var c,d,e,f,g,h;c=a.wb;b.button;if(c.eo!==null)a:{d=E9(c,b);c=c.cs;e=b.button;DB(c.dq);if(c.e$===null){f=(B3(c.bS)).data;g=f.length;h=0;while(h<g){b=f[h].cm(d,e);if(b!==null){c.e$=b;c.xT=e;break a;}h=h+1|0;}}}}
function ACW(){B.call(this);this.tG=null;}
function AYE(a,b){var c,d,e,f,g,h,i;c=a.tG;b.button;if(c.eo!==null){d=E9(c,b);e=c.cs;f=b.button;DB(e.dq);if(f==e.xT&&e.e$!==null)e.e$=null;g=(B3(e.bS)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dB(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)D8(c,b);}}
function ACX(){B.call(this);this.rp=null;}
function ARW(a,b){var c,d,e,f,g,h,i,j,k;c=a.rp;if(c.eo!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cs;f=E9(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DB(e.dq);i=(B3(e.fs)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dy(f,d,h))break b;k=k+1|0;}}D8(c,b);}}
function ACY(){B.call(this);this.BZ=null;}
function AOK(a,b){var c,d,e,f,g,h,i,j;c=a.BZ;if(c.eo!==null){d=E9(c,b);e=c.cs;f=b.button;g=b.detail;DB(e.dq);h=(B3(e.bS)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cy(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)D8(c,b);}}
function ACZ(){B.call(this);this.zQ=null;}
function A2L(a,b){var c,d,e,f,g,h,i;c=a.zQ;if(c.eo!==null){d=E9(c,b);e=c.cs;DB(e.dq);f=(B3(e.cQ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].H(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)D8(c,b);}}
function AC0(){B.call(this);this.xL=null;}
function AOj(a,b){var c,d,e,f,g,h;b=a.xL.cs;if(b.e$!==null){c=En();d=Cl(b.e$);e=new K;M(e);H(H(e,C(67)),d);Bk(c,L(e));}f=(B3(b.mT)).data;g=f.length;h=0;while(h<g){f[h].f();h=h+1|0;}DB(b.dq);}
function AC1(){B.call(this);this.vI=null;}
function ASD(a,b){var c,d,e;b=a.vI.cs;c=(B3(b.mh)).data;d=c.length;e=0;while(e<d){c[e].f();e=e+1|0;}if(b.e$!==null)b.e$=null;DB(b.dq);}
function VI(){B.call(this);this.ve=null;}
function A2o(a,b){var c;c=a.ve;if(c.eo!==null)E9(c,b);}
function VJ(){B.call(this);this.un=null;}
function AQb(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.un;if(Wv()===c.jx){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B3(c.cs.hc)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].cY();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cs.dq;m=new Pt;m.vU=k;m.vV=l;g.getAsString(Bv(m,"accept"));D8(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new K;M(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(L(l)));}e=e+1
|0;}}}
function VK(){B.call(this);this.wU=null;}
function AQz(a,b){var c;c=a.wU;if(Wv()===c.jx&&Rx(c.cs,ABi(c,b),0))D8(c,b);}
function VL(){B.call(this);this.Bw=null;}
function AZS(a,b){var c;c=a.Bw;if(Wv()===c.jx&&Rx(c.cs,ABi(c,b),1))D8(c,b);}
var ABD=G(0);
var ABM=G();
function KC(a,b,c,d){var e,f,g,h,i;e=new ZG;e.jf=d;A6a=A6a+1|0;e.nR=b;e.nk=c;f=(Ev()).createElement("canvas");e.i7=f;g=b;f.width=g;h=e.i7;f=c;h.height=f;if(!d)g=e.i7.getContext("2d");else{i=e.i7;h=AVy();g=i.getContext("2d",h);}e.db=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var ABL=G();
function APq(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function OI(){var a=this;B.call(a);a.P=null;a.o=null;a.bw=null;}
var Kw=G();
var A5W=null;function MT(a,b,c){return b.mn(c);}
function AFS(){A5W=new Kw;}
function AHn(){var a=this;B.call(a);a.dm=null;a.f_=null;a.da=0;}
function CN(a){var b=new AHn();AOH(b,a);return b;}
function AOH(a,b){a.dm=b;}
function MH(a,b){return a.dm.data[b];}
function Ba(a,b){var c,d,e;c=a.da;d=a.dm;if(c==d.data.length)a.dm=C8(d,c+4|0);d=a.dm.data;e=a.da;a.da=e+1|0;d[e]=b;a.f_=null;}
function R$(a,b){var c,d,e,f;c=0;while(true){d=a.dm.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.da=a.da-1|0;a.f_=null;}c=c+1|0;}}
function B3(a){var b;b=a.f_;if(!(b!==null&&b.data.length==a.da))a.f_=C8(a.dm,a.da);return a.f_;}
var D$=G(0);
var Ct=G(0);
var CE=G(0);
function AX6(a,b){return 0;}
function ATi(a,b,c){return null;}
function ALX(a,b,c){return 0;}
function AZ5(a,b,c,d){return 0;}
var EK=G(0);
var CX=G(0);
var EW=G(0);
var DO=G(0);
var E8=G(0);
function Rb(){B.call(this);this.CI=null;}
function Bg(){var a=this;B.call(a);a.a=0;a.b=0;}
function BF(a,b){var c=new Bg();QH(c,a,b);return c;}
function AJR(a){var b=new Bg();ANs(b,a);return b;}
function QH(a,b,c){a.a=b;a.b=c;}
function ANs(a,b){a.a=b.a;a.b=b.b;}
function Co(a,b){a.a=b.a;a.b=b.b;}
function W(a,b,c){a.a=b;a.b=c;}
function AHV(a){var b,c,d;b=a.a;c=a.b;d=new K;M(d);U(H(U(H(d,C(70)),b),C(71)),c);return L(d);}
function APh(a,b){var c;a:{b:{if(a!==b){if(BE(b)!==BE(a))break b;if(!JU(a,b))break b;}c=1;break a;}c=0;}return c;}
function JU(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AC3(){var a=this;B.call(a);a.tw=0;a.tx=0;a.tv=0;a.tu=0;}
var AGS=G();
var AIt=G(0);
function Y1(){B.call(this);this.dZ=null;}
function N6(){var a=this;B.call(a);a.bE=null;a.Fa=null;}
function AJ3(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new K;M(h);H(H(h,f),g);g=L(h);b.deleteShader(e);Bk(Bt(),g);Bk(En(),C(74));Bk(En(),d);Bk(En(),C(74));b=new Bu;Bm(b,g);N(b);}
function Dh(){var a=this;N6.call(a);a.xK=null;a.sz=null;a.nN=null;}
function A6t(a,b,c,d){var e=new Dh();H7(e,a,b,c,d);return e;}
function H7(a,b,c,d,e){var f,g,h,i,j,k;a.Fa=e;f=AJ3(b,35633,c);d=AJ3(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bE=g;h=e.t7.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bE;k=c.jE;c=c.sH;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bE;b.linkProgram(c);if(b.getProgramParameter(c,35714)){ADx(b,C(75));a.nN=new Bg;c=a.bE;a.xK=b.getUniformLocation(c,"uResolution");c=a.bE;a.sz=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new K;M(c);H(H(c,C(76)),d);Bm(b,L(c));N(b);}
function AFa(a,b,c){var d,e,f;if(!JU(a.nN,c)){Co(a.nN,c);d=a.xK;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function GF(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.sz;b.uniform4f(e,i,l,h,j);AFa(a,b,f);}
function AKH(){Dh.call(this);this.Bd=null;}
function A3r(a){var b=new AKH();AXR(b,a);return b;}
function AXR(a,b){var c;Jv();H7(a,b,C(59),C(77),A6r);c=a.bE;a.Bd=b.getUniformLocation(c,"uColor");}
function Fp(){Dh.call(this);this.tB=null;}
function A4j(a,b){var c=new Fp();ABk(c,a,b);return c;}
function A6u(a,b,c){var d=new Fp();ABo(d,a,b,c);return d;}
function ABk(a,b,c){ABo(a,b,C(59),c);}
function ABo(a,b,c,d){Jv();H7(a,b,c,d,A6r);c=a.bE;a.tB=b.getUniformLocation(c,"sDiffuse");}
function NY(a,b,c){var d;d=a.tB;b.uniform1i(d,0);b.activeTexture(33984);c=c.f1;b.bindTexture(3553,c);}
var Zk=G(Dh);
function AFN(){Fp.call(this);this.Cj=null;}
function A4$(a){var b=new AFN();ARu(b,a);return b;}
function ARu(a,b){var c;ABk(a,b,C(78));c=a.bE;a.Cj=b.getUniformLocation(c,"uContrast");}
function Hu(){var a=this;Fp.call(a);a.r1=null;a.sP=null;a.tQ=null;a.Au=null;a.qC=0.0;}
function A6v(a,b,c){var d=new Hu();Vv(d,a,b,c);return d;}
function Vv(a,b,c,d){ABo(a,b,c,d);c=a.bE;a.r1=b.getUniformLocation(c,"uTexTransform");c=a.bE;a.sP=b.getUniformLocation(c,"uColor");c=a.bE;a.tQ=b.getUniformLocation(c,"uBgColor");c=a.bE;a.Au=b.getUniformLocation(c,"uTextPow");}
function AK0(a,b,c){var d;if(a.qC!==c){a.qC=c;d=a.Au;b.uniform2f(d,c,0.0);}}
function AJZ(a,b,c,d){FC(b,a.sP,c);FC(b,a.tQ,d);}
function AEd(a,b,c,d){var e,f,g,h,i,j;c=c.eS;e=c.a;f=c.b;g=d.bn;h=e;g=g/h;i=d.bs;j=f;i=i/j;h=d.bf/h;j=d.bC/j;c=a.r1;b.uniform4f(c,g,i,h,j);}
var PG=G(Hu);
var AHD=G(Hu);
function A5k(a){var b=new AHD();AWN(b,a);return b;}
function AWN(a,b){Vv(a,b,C(61),C(79));}
function AII(){var a=this;Fp.call(a);a.we=null;a.wc=null;a.sQ=null;}
function A31(a){var b=new AII();ANS(b,a);return b;}
function ANS(a,b){var c,d;ABk(a,b,C(80));c=a.bE;a.we=b.getUniformLocation(c,"uColorB");d=a.bE;a.wc=b.getUniformLocation(d,"uColorF");d=a.bE;a.sQ=b.getUniformLocation(d,"uContrast");}
function AKb(){var a=this;Dh.call(a);a.xA=null;a.wF=null;a.wE=null;}
function A45(a){var b=new AKb();AWP(b,a);return b;}
function AWP(a,b){var c;Jv();H7(a,b,C(59),C(81),A6r);c=a.bE;a.xA=b.getUniformLocation(c,"uColor");c=a.bE;a.wF=b.getUniformLocation(c,"uPoints1");c=a.bE;a.wE=b.getUniformLocation(c,"uPoints2");}
function AEH(){var a=this;Dh.call(a);a.w$=null;a.tS=null;a.yl=null;}
function A46(a){var b=new AEH();AVN(b,a);return b;}
function AVN(a,b){var c;Jv();H7(a,b,C(59),C(82),A6r);c=a.bE;a.w$=b.getUniformLocation(c,"uColor");c=a.bE;a.tS=b.getUniformLocation(c,"uBaseline");c=a.bE;a.yl=b.getUniformLocation(c,"uScaleHExp");}
var ZR=G(0);
var ALf=G(0);
function FC(b,c,d){var e,f,g,h;e=d.bn;f=d.bs;g=d.bf;h=d.bC;b.uniform4f(c,e,f,g,h);}
function ADx(b,c){var d,e;d=b.getError();if(d){b=Bt();e=new K;M(e);U(H(e,c),d);Bk(b,L(e));}}
function Y0(){var a=this;B.call(a);a.Ej=null;a.El=null;a.Ek=null;}
function Q7(){var a=this;B.call(a);a.eU=null;a.h3=null;a.w8=null;a.wd=null;a.vO=null;a.tU=0;a.By=0;}
function CI(){var a=this;B.call(a);a.Ei=null;a.fP=0;}
function DJ(a,b,c){a.Ei=b;a.fP=c;}
function G$(){var a=this;CI.call(a);a.t7=null;a.qo=null;a.zz=null;a.m$=0;a.yH=0;a.Aj=0;}
var A6r=null;var A6w=null;function Jv(){Jv=Bn(G$);AO5();}
function AO5(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new G$;c=Q(Ei,2);d=c.data;A1M();d[0]=A6x;d[1]=A6y;Jv();DJ(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.pZ.fP){case 0:f=f+l.gt|0;h=h+1|0;break a;case 1:e=e+l.gt|0;g=g+1|0;break a;default:}}i=i|1<<l.jE;k=k+1|0;}b.t7=c;b.m$=e;b.yH=f;b.Aj=i;c=Q(Ei,g);m=c.data;b.qo=c;c=Q(Ei,h);n=c.data;b.zz=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.pZ.fP){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A6r
=b;c=Q(G$,1);c.data[0]=b;A6w=c;}
var Mn=G(0);
var ST=G(0);
var ABR=G(0);
var GU=G();
function MQ(){GU.call(this);this.Ca=null;}
function AFt(){var a=this;MQ.call(a);a.Dl=0;a.nh=0;a.lD=null;a.mY=null;a.uJ=null;}
function AQH(a,b){var c=new AFt();A1v(c,a,b);return c;}
function A1v(a,b,c){a.Ca=b;b=new K;M(b);a.lD=b;a.mY=B5(32);a.Dl=c;AFn();a.uJ=A6z;}
function AA5(a,b,c,d){var e,$$je;e=a.Ca;if(e===null)a.nh=1;if(!(a.nh?0:1))return;a:{try{e.mR(b,c,d);break a;}catch($$e){$$je=EX($$e);if($$je instanceof I7){}else{throw $$e;}}a.nh=1;}}
function Xt(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AJD(b,c,d-c|0);e=DL(Bd(16,Be(e.length,1024)));g=AJq(e,0,e.data.length);h=a.uJ;i=new QC;b=DL(1);j=b.data;j[0]=63;Hm();k=A6A;i.nQ=k;i.nl=k;c=j.length;if(c&&c>=i.wD){i.Eh=h;i.sF=b.hy();i.Dg=2.0;i.wD=4.0;i.yq=B5(512);i.rm=DL(512);k=A6B;if(k===null){i=new BU;Bm(i,C(84));N(i);}i.nQ=k;i.nl=k;a:while(true){if(i.lv==3){f=new C$;Y(f);N(f);}i.lv=2;b:{while(true){try{k=AEz(i,f,g);}catch($$e){$$je=EX($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(I1(k))
{d=Ch(f);if(d<=0)break b;k=Eu(d);}else if(Id(k))break;h=!Me(k)?i.nQ:i.nl;c:{if(h!==A6B){if(h===A6C)break c;else break b;}d=Ch(g);b=i.sF;l=b.data.length;if(d<l){k=A6D;break b;}ADd(g,b,0,l);}Fv(f,f.Z+K5(k)|0);}}l=Id(k);AA5(a,e,0,g.Z);PQ(g);if(!l){while(true){d=i.lv;if(d!=2&&d!=4){f=new C$;Y(f);N(f);}f=A6E;if(f===f)i.lv=3;l=Id(f);AA5(a,e,0,g.Z);PQ(g);if(!l)break;}return;}}N(AWn(f));}i=new BU;Bm(i,C(85));N(i);}
function Bk(a,b){var c,d,e,f,g,h,i,j;BN(BY(a.lD,b),10);b=a.lD;c=b.L;d=a.mY;if(c>d.data.length)d=B5(c);e=0;f=0;if(e>c){b=new BH;Bm(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.C.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Xt(a,d,0,c);a.lD.L=0;}
function HE(){GU.call(this);this.E0=null;}
function VZ(a){a.E0=DL(1);}
var LB=G(HE);
var A6d=null;function APj(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGz(){var b;b=new LB;VZ(b);A6d=b;}
function Ei(){var a=this;CI.call(a);a.sH=null;a.pZ=null;a.gt=0;a.sd=0;a.jE=0;}
var A6x=null;var A6y=null;var A6F=null;function A1M(){A1M=Bn(Ei);AXl();}
function A3B(a,b,c,d,e,f,g){var h=new Ei();UA(h,a,b,c,d,e,f,g);return h;}
function UA(a,b,c,d,e,f,g,h){A1M();DJ(a,b,c);a.sH=d;a.pZ=e;a.gt=f;a.sd=g;a.jE=h;}
function AXl(){var b;b=new Ei;AQq();UA(b,C(87),0,C(88),A6G,2,0,0);A6x=b;b=A3B(C(89),1,C(90),A6G,2,0,1);A6y=b;A6F=I(Ei,[A6x,b]);}
function MI(){var a=this;B.call(a);a.D$=null;a.ED=null;}
function AGI(b){var c,d;if(Gq(b))N(AI5(b));if(!AKs(P(b,0)))N(AI5(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AKs(d))break a;else N(AI5(b));}}c=c+1|0;}}
function AKs(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Mq=G(MI);
var A6z=null;function AFn(){AFn=Bn(Mq);ANR();}
function AGU(a){var b,c;b=new SW;b.gr=C(91);Hm();c=A6A;b.jl=c;b.nV=c;b.Ey=a;b.wK=0.3333333432674408;b.CV=0.5;b.xE=DL(512);b.z$=B5(512);return b;}
function ANR(){var b,c,d,e,f;b=new Mq;AFn();c=Q(BK,0);d=c.data;AGI(C(92));e=d.length;f=0;while(f<e){AGI(d[f]);f=f+1|0;}b.D$=C(92);b.ED=c.hy();A6z=b;}
function X8(){var a=this;B.call(a);a.gh=null;a.qc=null;a.mC=null;a.An=null;a.sq=null;a.sC=null;}
function AI8(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gh,b,c));}
function O0(a,b){var c,d,e,f,g,h,i,$$je;c=new BK;d=b;while(a.qc[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gh,b,d));f=e.data;Fc();d=f.length;AFn();g=A6z;h=AJq(e,0,d);a:{try{i=AGU(g);Hm();g=AIB(AGa(AKV(i,A6B),A6B),h);break a;}catch($$e){$$je=EX($$e);if($$je instanceof Gd){g=$$je;}else{throw $$e;}}h=new ADm;h.kH=1;h.k3=1;h.iQ=C(93);h.nm=g;N(h);}if(!g.Z&&g.ek==g.og)c.cb=g.iC;else{f=B5(Ch(g));e=f.data;c.cb=f;Pn(g,f,0,e.length);}return c;}
function Wx(a,b){var c,d,e;c=new BK;d=b>>>1|0;e=d;while(a.mC[e]){e=e+1|0;}d=e-d|0;Jq(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gh,b,d)));return c;}
var H4=G(CI);
var A6H=null;var A6G=null;var A6I=null;function AQq(){AQq=Bn(H4);AWz();}
function ANM(a,b){var c=new H4();AKz(c,a,b);return c;}
function AKz(a,b,c){AQq();DJ(a,b,c);}
function AWz(){var b;A6H=ANM(C(94),0);b=ANM(C(95),1);A6G=b;A6I=I(H4,[A6H,b]);}
var NF=G(HE);
var A6e=null;function AN1(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AHT(){var b;b=new NF;VZ(b);A6e=b;}
function AGN(){BU.call(this);this.Co=null;}
function AI5(a){var b=new AGN();ASV(b,a);return b;}
function ASV(a,b){Y(a);a.Co=b;}
var T$=G(Ew);
var Mp=G(0);
function ADM(){B.call(this);this.yJ=null;}
function ASm(a,b){a.yJ.setPointerCapture(b.pointerId);}
function ADN(){B.call(this);this.xX=null;}
function AMB(a,b){a.xX.releasePointerCapture(b.pointerId);}
function Ia(){var a=this;B.call(a);a.og=0;a.Z=0;a.ek=0;a.jK=0;}
function ACD(a,b){a.jK=(-1);a.og=b;a.ek=b;}
function Fv(a,b){var c,d,e;if(b>=0&&b<=a.ek){a.Z=b;if(b<a.jK)a.jK=0;return a;}c=new BU;d=a.ek;e=new K;M(e);BN(U(H(U(H(e,C(96)),b),C(97)),d),93);Bm(c,L(e));N(c);}
function Ch(a){return a.ek-a.Z|0;}
function D9(a){return a.Z>=a.ek?0:1;}
var Z5=G(0);
var Lw=G(Ia);
function AHG(b){var c,d;if(b>=0)return ARE(0,b,B5(b),0,b,0);c=new BU;d=new K;M(d);U(H(d,C(98)),b);Bm(c,L(d));N(c);}
function AJD(b,c,d){return ARE(0,b.data.length,b,c,c+d|0,0);}
function Pn(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BH;i=new K;M(i);U(H(U(H(i,C(99)),g),C(100)),f);Bm(h,L(i));N(h);}if(Ch(a)<d){j=new Oa;Y(j);N(j);}if(d<0){j=new BH;k=new K;M(k);H(U(H(k,C(101)),d),C(102));Bm(j,L(k));N(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iC.data[m+a.p2|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BH;d=b.length;k=new K;M(k);BN(U(H(U(H(k,C(103)),c),C(97)),d),41);Bm(j,L(k));N(j);}
function Nf(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.qd){b=new Kr;Y(b);N(b);}e=d-c|0;if(Ch(a)<e){b=new JF;Y(b);N(b);}if(c>J(b)){f=new BH;d=J(b);b=new K;M(b);BN(U(H(U(H(b,C(104)),c),C(97)),d),41);Bm(f,L(b));N(f);}if(d>J(b)){f=new BH;c=J(b);b=new K;M(b);U(H(U(H(b,C(105)),d),C(106)),c);Bm(f,L(b));N(f);}if(c>d){b=new BH;f=new K;M(f);U(H(U(H(f,C(104)),c),C(107)),d);Bm(b,L(f));N(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;AAa(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function M6(){var a=this;Ia.call(a);a.ng=0;a.pK=null;a.C1=null;}
function AJq(b,c,d){var e,f,g;e=b.data;f=new ADc;g=e.length;d=c+d|0;ACD(f,g);AXT();f.C1=A6J;f.ng=0;f.pK=b;f.Z=c;f.ek=d;f.C5=0;f.w7=0;return f;}
function ADd(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.w7){e=new Kr;Y(e);N(e);}if(Ch(a)<d){e=new JF;Y(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BH;j=new K;M(j);U(H(U(H(j,C(108)),h),C(100)),g);Bm(i,L(j));N(i);}if(d<0){e=new BH;i=new K;M(i);H(U(H(i,C(101)),d),C(102));Bm(e,L(i));N(e);}h=a.Z;k=h+a.ng|0;l=0;while(l<d){b=a.pK.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BH;d=b.length;i=new K;M(i);BN(U(H(U(H(i,C(103)),c),C(97)),d),41);Bm(e,
L(i));N(e);}
function PQ(a){a.Z=0;a.ek=a.og;a.jK=(-1);return a;}
function IH(){B.call(this);this.DS=null;}
var A6C=null;var A6B=null;var A6A=null;function Hm(){Hm=Bn(IH);AQe();}
function AHq(a){var b=new IH();AKq(b,a);return b;}
function AKq(a,b){Hm();a.DS=b;}
function AQe(){A6C=AHq(C(109));A6B=AHq(C(110));A6A=AHq(C(111));}
var Pd=G(Cw);
function AP8(a){}
function AOX(a,b,c){}
function HM(){var a=this;Cw.call(a);a.dQ=null;a.r=null;}
function ACC(a,b){var c,d,e;El(a,b);a.dQ=AIO(0,0,64);c=new Tl;c.bO=new Bg;c.dS=CN(Q(C3,0));c.dD=new Bg;c.p0=new Bg;c.mo=new B2;c.Cc=new B2;d=b.P;c.bH=d;e=b.bw;c.e1=e;c.cz=d.l0;c.cT=Rl(e);d=b.o.mT;e=new YW;e.tA=c;Ba(d,e);d=b.o.mh;e=new YV;e.v9=c;Ba(d,e);a.r=c;Ba(b.o.bG,new ZT);b=b.o.bG;c=a.r;BJ(c);d=new ZS;d.xD=c;Ba(b,d);}
function HA(a){EJ(a.x.P,a.dQ);}
function AFX(a,b,c){var d,e,f,g,h;a:{d=a.r;Co(d.bO,b);e=d.ce;if(e!==c){d.ce=c;f=(B3(d.dS)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].fS(e,c);h=h+1|0;}}}}
function CH(){HM.call(this);this.M=null;}
function F9(a,b){KP(a,b,1);}
function KP(a,b,c){var d,e,f;ACC(a,b);d=new ADp;e=a.r;d.b7=CN(Q(Tx,0));d.cj=e;a.M=d;Ba(a.r.dS,d);Ba(b.o.bS,a.M);d=b.o.fs;e=a.M;BJ(e);f=new V$;f.v4=e;Ba(d,f);d=b.o.cQ;e=a.M;BJ(e);f=new V9;f.tl=e;Ba(d,f);if(c){b=b.o.bS;f=a.r.cT;d=new WT;d.wC=f;Ba(b,d);}}
function ANV(a){HA(a);JM(a.M);}
function IC(a,b,c){var d,e;AFX(a,b,c);d=(B3(a.M.b7)).data.length;e=0;while(e<d){e=e+1|0;}}
function AMv(a,b){var c,d,e,f,g;c=a.M;d=0;e=(B3(c.b7)).data;f=e.length;g=0;while(g<f){d=e[g].W.ci(b)|d;g=g+1|0;}return d;}
var Fa=G(0);
function AHw(a){a.gu(ID());}
function Hs(a){a.gu(Mb());}
function AIh(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IW;c=new J_;d=new Hn;AGV();KV(d,A6K);Mr(c,d,BZ(A6L),BZ(A6M),BZ(A6N),BZ(A6L),BZ(A6O),BZ(A6P),BZ(A6Q),BZ(A6R),BZ(A6S),BZ(A6T));e=AJx(S(C(112)));AGh();f=(A6U.hy()).data;g=f.length;h=Q(Kp,g);i=h.data;j=0;while(j<g){i[j]=f[j].pm;j=j+1|0;}k=AKd(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new IY;m=new I6;AU6();d=A6V;Oz(m,d,A6W,A6X,A6Y,A6Z,d);LO(l,m,AKW(),AHy(S(C(117)),S(C(112)),CD(0)),AKW(),AHW(1,0.07500000298023224),A60,A61);LE(b,c,e,h,k,l,AEf(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.gu(b);}
var Nd=G(0);
var F_=G(0);
function KS(){var a=this;CH.call(a);a.E=null;a.G=null;a.iL=null;a.jn=0;a.k7=null;a.mu=null;a.zC=null;a.nf=null;a.fF=null;}
function A47(a){var b=new KS();AFq(b,a);return b;}
function AFq(a,b){var c,d,e;KP(a,b,0);a.fF=AIy(a.r);c=KU(a.M);a.iL=c;a.E=If(c);c=If(a.iL);a.G=c;a.mu=AHj(a.E,c);c=a.E;c.b3=1;Oc(a.fF,c,a.G);c=a.E;d=new TH;d.Bn=a;c.iu=d;c=a.G;d=new TI;d.y$=a;c.iu=d;AHh(a,0);MV(a.r,a.E);Ba(b.o.fs,a);Ba(b.o.bS,a);c=b.o.bG;d=new TJ;d.xe=a;Ba(c,d);c=b.o.bG;d=new HR;e=new TF;e.u3=a;Is(d,b,e);Ba(c,d);Ba(b.o.gL,a);Ba(b.o.hc,a);b=b.o.cQ;c=new TG;c.sU=a;Ba(b,c);Hs(a);}
function V3(a,b){if(a.E===b)a.jn=a.jn|1;if(a.G===b)a.jn=a.jn|2;if((a.jn&3)==3)AK2(a);}
function AHh(a,b){IX(a.E,b);IX(a.G,b);}
function A10(a,b,c){if(DN(a.r,a.E))return Hd(a.E,b,c);if(!DN(a.r,a.G))return 0;return Hd(a.G,b,c);}
function AFJ(a){if(DN(a.r,a.E))return VF(a,a.E);if(!DN(a.r,a.G))return null;return VF(a,a.G);}
function VF(a,b){var c;c=new SL;c.sv=b;return c;}
function AFo(a,b,c){var d;d=DW(c);if(b!==a.E)a.nf=d;else a.zC=d;b=a.zC;if(b!==null&&a.nf!==null)Gi(a.x.bw,DW(c));else{if(b!==null)Gi(a.x.bw,b);b=a.nf;if(b!==null)Gi(a.x.bw,b);}}
function AK2(a){var b,c,d;Bk(Bt(),C(122));b=a.E.d.h;c=a.G.d.h;d=new U9;d.sD=a;AIj(b,c,d,a.x.bw);}
function AR9(a,b){var c,d;c=I0(a.E,b);d=I0(a.G,b);return !c&&!d?0:1;}
function AYB(a){var b;HA(a);In(a.E);In(a.G);b=a.fF;AGv(b,b.hg.bH);JM(a.M);}
function AXG(a){return GD(0);}
function ASu(a){W5(a.E);W5(a.G);}
function AYx(a){ADW(a.E);ADW(a.G);}
function AS5(a,b){PZ(a.E,b);PZ(a.G,b);}
function AZn(a,b){OJ(a.r,b);}
function ANf(a,b){if(J9(a.M,b)){LQ(a.E);LQ(a.G);}}
function APC(a,b,c){IC(a,b,c);AFW(a,b,c);}
function AFW(a,b,c){var d,e,f,g,h,i;d=new Bg;e=Cg(20.0,c);f=new Bg;g=b.a/2|0;h=e/2|0;QH(f,g-h|0,b.b);Mo(a.E,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;Mo(a.G,d,f,c);W(a.fF.i,f.a,d.b);W(a.fF.k,d.a-f.a|0,f.b);}
function AL1(a,b){BJ(b);Ir(a.iL,b);Ft(a.E,b);Ft(a.G,b);a.fF.im=b;}
function AHb(a,b){if(b.bm!=121)return 0;return 1;}
function AJp(a,b){var c,d,e,f;if(DN(a.r,a.E)){c=a.iL;d=b.j;e=a.E;f=new O6;f.uT=a;GP(c,d,e,a,a,a,f);}if(DN(a.r,a.G)){c=a.iL;b=b.j;d=a.G;e=new O5;e.t5=a;GP(c,b,d,a,a,a,e);}return 1;}
function AZG(a,b){var c,d;c=BW(a.E,b.j)&&Xk(a.E,b)?1:0;d=BW(a.G,b.j)&&Xk(a.G,b)?1:0;return !c&&!d?0:1;}
function AXH(a,b,c,d){var e,f;e=BW(a.E,b.j)&&O2(a.E,b,c,d)?1:0;f=BW(a.G,b.j)&&O2(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function AQt(a,b,c){var d,e,f,g,h,i,j,k;d=BW(a.E,b.j);e=BW(a.G,b.j);f=a.r;g=f.ea;h=g!==null?0:1;i=a.E;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))FL(f,i);if(e&&!(!h&&!j))FL(a.r,a.G);if(d){i=Wj(a.E,b,c);if(i!==null)return i;}return !e?null:Wj(a.G,b,c);}
function AZ7(a,b,c){var d,e,f,g;d=BW(a.E,b.j);e=BW(a.G,b.j);f=d&&SS(a.E,b,c)?1:0;g=e&&SS(a.G,b,c)?1:0;return !f&&!g?0:1;}
function ARI(a,b,c,d){var e,f,g,h;e=BW(a.E,b.j);f=BW(a.G,b.j);g=e&&LL(a.E,b,c,d)?1:0;h=f&&LL(a.G,b,c,d)?1:0;return !g&&!h?0:1;}
function AX9(a){return AFJ(a);}
var AGX=G(KS);
function A4B(a){var b=new AGX();A1Q(b,a);return b;}
function A1Q(a,b){var c;AFq(a,b);a.E.eZ=1;a.G.eZ=1;c=new S8;c.xg=a;Qe(a,c,C(123));c=new S$;c.Aq=a;Qe(a,c,C(124));}
function AQE(a){return GD(1);}
function Qe(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new OT;d=d.then(Bv(e,"f"));f=new OV;f.tD=b;f.tC=c;g=new OU;d.then(Bv(f,"f"),Bv(g,"f"));}
var AHl=G();
function A1j(b){var c,d;if(J(b)>0){c=new K;M(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(L(c)));}a:{d=(-1);switch(NU(b)){case -1570047148:if(!Bj(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bj(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bj(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bj(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bj(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bj(b,C(131)))break a;d=19;break a;case -811765794:if(!Bj(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bj(b,C(133)))break a;d=11;break a;case -695287066:if(!Bj(b,C(134)))break a;d=20;break a;case -631889171:if(!Bj(b,C(135)))break a;d=9;break a;case -536831301:if(!Bj(b,C(136)))break a;d=25;break a;case -439438829:if(!Bj(b,C(137)))break a;d=21;break a;case -357667878:if(!Bj(b,C(138)))break a;d=22;break a;case -223304637:if(!Bj(b,C(139)))break a;d=2;break a;case -193916863:if(!Bj(b,C(140)))break a;d=23;break a;case 2129957:if(!Bj(b,C(141)))break a;d=1;break a;case 3343967:if(!Bj(b,C(142)))break a;d=10;break a;case 3556498:if
(!Bj(b,C(143)))break a;d=4;break a;case 91636708:if(!Bj(b,C(144)))break a;d=24;break a;case 485517998:if(!Bj(b,C(145)))break a;d=7;break a;case 544901384:if(!Bj(b,C(146)))break a;d=3;break a;case 1030621992:if(!Bj(b,C(147)))break a;d=16;break a;case 1164939699:if(!Bj(b,C(148)))break a;d=27;break a;case 1465713255:if(!Bj(b,C(149)))break a;d=8;break a;case 1554501643:if(!Bj(b,C(150)))break a;d=15;break a;case 1609169232:if(!Bj(b,C(151)))break a;d=12;break a;case 2090248989:if(!Bj(b,C(152)))break a;d=26;break a;default:}}b:
{switch(d){case 1:break;case 2:b=new Ul;break b;case 3:case 4:b=new Ui;break b;case 5:b=new Uh;break b;case 6:b=new Uk;break b;case 7:b=new Uj;break b;case 8:b=new Up;break b;case 9:case 10:b=new Uo;break b;case 11:b=new Ur;break b;case 12:b=new Uq;break b;case 13:b=new AAO;break b;case 14:b=new AAN;break b;case 15:b=new AAM;break b;case 16:b=new AAB;break b;case 17:b=new AAA;break b;case 18:b=new AAy;break b;case 19:b=new AAx;break b;case 20:b=new AAw;break b;case 21:b=new AAv;break b;case 22:b=new AAu;break b;case 23:b
=new AAF;break b;case 24:b=new AAE;break b;case 25:b=new AAD;break b;case 26:b=new AAC;break b;case 27:b=new AAH;break b;default:b=new AAG;break b;}b=new Um;}return b;}
var AJA=G();
var KZ=G(Lw);
function AFH(){var a=this;KZ.call(a);a.qd=0;a.p2=0;a.iC=null;}
function ARE(a,b,c,d,e,f){var g=new AFH();AUj(g,a,b,c,d,e,f);return g;}
function AUj(a,b,c,d,e,f,g){ACD(a,c);a.Z=e;a.ek=f;a.p2=b;a.qd=g;a.iC=d;}
function AAa(a,b,c){a.iC.data[b+a.p2|0]=c;}
function Lo(){var a=this;B.call(a);a.Eh=null;a.sF=null;a.Dg=0.0;a.wD=0.0;a.nQ=null;a.nl=null;a.lv=0;}
function N$(){var a=this;B.call(a);a.h7=0;a.ka=0;}
var A6E=null;var A6D=null;function AED(a,b){var c=new N$();AIM(c,a,b);return c;}
function AIM(a,b,c){a.h7=b;a.ka=c;}
function I1(a){return a.h7?0:1;}
function Id(a){return a.h7!=1?0:1;}
function NE(a){return !Rq(a)&&!Me(a)?0:1;}
function Rq(a){return a.h7!=2?0:1;}
function Me(a){return a.h7!=3?0:1;}
function K5(a){var b;if(NE(a))return a.ka;b=new Eg;Y(b);N(b);}
function Eu(b){return AED(2,b);}
function TW(a){var b,c;switch(a.h7){case 0:b=new Q8;Y(b);N(b);case 1:b=new Vh;Y(b);N(b);case 2:b=new TT;c=a.ka;Y(b);b.D1=c;N(b);case 3:b=new Q2;c=a.ka;Y(b);b.Fq=c;N(b);default:}}
function AIZ(){A6E=AED(0,0);A6D=AED(1,0);}
var AEx=G();
var I5=G(0);
var WK=G();
function AN6(a,b){return b.arrayBuffer();}
var WJ=G();
function AQ9(a,b){var c,d;c=new X7;d=new X5;return $rt_globals.WebAssembly.instantiate(b,APp(Bv(c,"f"),Bv(d,"f")));}
var WH=G();
function ARz(a,b){AMx(b);}
var WG=G();
function AV6(a,b){AHt(b);}
var X=G(0);
function S8(){B.call(this);this.xg=null;}
function A2s(a,b){H0(a.xg.E,b);}
function S$(){B.call(this);this.Aq=null;}
function AYb(a,b){H0(a.Aq.G,b);}
var Um=G();
function ATh(a,b){return A47(b);}
var Ul=G();
function ALJ(a,b){return A30(b);}
var Ui=G();
function AWI(a,b){return A3_(b);}
var Uh=G();
function AZl(a,b){var c,d,e,f,g;c=new AA6;El(c,b);d=(ID()).br.ef;c.EO=d;c.k_=AK3(d);c.iZ=new Bg;c.h9=new Bg;c.dk=KN();c.dU=KN();c.m7=GD(1);b=b.o.bS;d=new Wo;d.mb=c;Ba(b,d);b=c.m7.data[DQ()*c.m7.data.length|0];d=Iq(c.x.P,b,10);c.mW=d;Cn(c.x.P.cg,d);e=Eo(c.x.P.cg,C(153));d=c.x.P.cg;f=new K;M(f);BN(f,43);H(f,b);g=CZ(e+Eo(d,L(f)));c.jB=g;c.iH=BV(c.iH,AD0(c,1,g,b,c.mW,c.x.P));c.iG=BV(c.iG,AD0(c,0,c.jB,b,c.mW,c.x.P));Q_(c,c.dk,c.iH);Q_(c,c.dU,c.iG);Cr(c.dk.X,1.0,1.0,1.0,1.0);Fh(c.dk,c.k_);Cr(c.dU.X,1.0,1.0,1.0,1.0);Fh(c.dU,
c.k_);b=Bt();g=c.jB;d=new K;M(d);U(H(d,C(154)),g);Bk(b,L(d));return c;}
var Uk=G();
function ANP(a,b){var c,d,e;c=new Xn;F9(c,b);d=new Wl;d.nL=new Bg;d.od=new Bg;c.yM=d;c.fd=AJC();c.dF=AJC();c.ou=Du(C(155),25.0);Ba(c.r.dS,c);d=b.o.bG;e=new ABx;e.uz=c;Ba(d,e);Ba(b.o.bS,c);b=b.o.cQ;d=new ABr;d.vD=c;Ba(b,d);AD3(c.dF);BR(c.dQ,CD(43));b=Ff();JE(c.fd,b);JE(c.dF,b);b=c.fd;b.kT=new ABs;d=c.dF;d.kT=new ABt;d.o1=new Qa;d.wI=new Qb;Nk(b,(RD(0)).kf);Nk(c.dF,(RD(0)).kf);return c;}
var Uj=G();
function AUn(a,b){var c,d,e;c=new AAz;F9(c,b);Ba(c.r.dS,c);BR(c.dQ,CD(43));d=b.o.bG;e=new Uc;e.Cy=c;Ba(d,e);b=b.o.cQ;d=new Ud;d.Bb=c;Ba(b,d);return c;}
var Up=G();
function ANu(a,b){var c,d,e;c=new WP;ACC(c,b);c.h0=BM();c.gf=BM();c.r5=S(C(156));c.j$=UD();c.hZ=0;d=c.r.dS;e=new O4;e.x8=c;Ba(d,e);Ba(b.o.bS,c);d=b.o.bG;e=new O3;e.vP=c;Ba(d,e);b=Iq(b.P,C(155),35);c.kd=b;c.mi=AIi(EB(b));BR(c.dQ,S(C(157)));return c;}
var Uo=G();
function APZ(a,b){var c,d,e,f;c=new SE;El(c,b);c.h2=AHs();c.e8=0;c.uM=500;c.r6=IE(0,0,0,255,new B2);c.mw=20;c.xo=20;c.Ae=ID();d=b.o.bS;e=new Wz;e.lL=c;f=new TE;f.z9=e;e.rV=f;Ba(d,e);d=b.o.fs;e=new ZU;e.AG=c;Ba(d,e);c.eB=b.P;c.xR=Rl(b.bw);YD(c.h2,Iq(c.eB,C(155),c.xo),c.mw,c.eB.l0);c.iY=I_();return c;}
var Ur=G();
function A0G(a,b){var c,d;c=new Q9;HO(c,b);b=b.o.bG;d=new QJ;d.s2=c;Ba(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var Uq=G();
function ALt(a,b){var c,d,e,f,g,h,i;c=new W6;F9(c,b);d=b.o.cQ;e=new Rt;e.x_=c;Ba(d,e);d=b.bw;f=new PP;f.Dy=c;g=Q(B,1);g.data[0]=C(158);CV(d,f,C(159),g);h=new PO;h.EI=c;g=Q(B,1);g.data[0]=AJf([1,2,3,4,5]);CV(d,h,C(160),g);h=new PL;h.Cb=c;i=Q(B,1);i.data[0]=A3C([1,2,3,4,5]);CV(d,h,C(161),i);h=new PJ;h.ER=c;g=Q(B,1);g.data[0]=DX([1,2,3,4,5]);CV(d,h,C(162),g);d=b.o.bG;e=new HR;h=new Rs;h.Ab=c;Is(e,b,h);Ba(d,e);return c;}
var AAO=G();
function ALD(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Wq;HO(c,b);c.e6=H$(0,0,300,300);c.gA=SV(0,0,3,3);d=b.P;b=b.o.bS;e=new ABG;e.m3=c;Ba(b,e);b=AK$(d);c.AV=b;FO(c.e6,b);FW(c.e6);b=c.e6.bl;FI();BR(b,A62);BR(c.e6.X,Dx(204,120,50));AQw();e=A63;f=DL((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CW(d);switch(e.fP){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new E4;Y(b);N(b);}b:
{WC(m,5,5,h);b=m.eJ.dZ;switch(e.fP){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new E4;Y(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nC=m;W(c.gA.t,BQ(m),CO(c.nC));BR(c.gA.bl,c.pU);return c;}
var AAN=G();
function AYg(a,b){var c,d,e;c=new SC;HO(c,b);c.gW=H$(0,0,300,300);c.mt=new Bg;c.kv=new Bg;c.jS=new Bg;d=b.P;b=b.o.bS;e=new Xw;e.kq=c;Ba(b,e);b=AK$(d);c.q2=b;FO(c.gW,b);FW(c.gW);b=c.gW.bl;FI();BR(b,A62);BR(c.gW.X,Dx(204,120,50));return c;}
var AAM=G();
function AQS(a,b){var c,d,e,f;c=new AAo;El(c,b);c.DN=20;c.Fr=11;c.Ea=220;c.l$=new Bg;c.EZ=5000;c.io=1;c.gO=I(Hn,[CD(0),CD(255)]);c.eL=b.P;d=b.o.bS;e=new Ys;e.lX=c;f=new Uz;f.tn=e;e.qR=f;Ba(d,e);b=b.o.fs;d=new VN;d.rC=c;Ba(b,d);b=HI(c.eL,200,220);c.oC=b;Hx(b,C(155),20.0);b=HI(c.eL,200,20);c.gE=b;Hx(b,C(155),20.0);c.iE=I_();return c;}
var AAB=G();
function AN$(a,b){var c,d,e;c=new Kn;HO(c,b);Ba(b.o.bS,c);d=b.o.bG;e=new AC_;e.wH=c;Ba(d,e);Ba(b.o.gL,new AC$);d=b.o.gL;e=new AC9;e.sw=c;Ba(d,e);Ba(b.o.hc,new AC8);d=b.o.hc;e=new ADa;e.zX=c;Ba(d,e);b=!Vo(b.bw)?C(163):C(164);d=new K;M(d);H(H(d,C(165)),b);$rt_globals.console.info($rt_ustr(L(d)));return c;}
var AAA=G();
function AUC(a,b){var c,d;c=new Sn;HO(c,b);c.ue=CD(20);c.gk=H$(0,0,300,300);c.vT=Du(C(14),80.0);b=b.o.bG;d=new R8;d.DU=c;Ba(b,d);return c;}
var AAy=G();
function A1F(a,b){var c;c=new S7;OE(c,b);Hi(c.ck,0,0,300,300);W(c.dl,300,300);return c;}
var AAx=G();
function AP9(a,b){var c;c=new S6;OE(c,b);c.f0=new Bg;c.gl=new Bg;W(c.d$,150,140);W(c.dl,500,100);W(c.fo,150,200);W(c.eK,500,250);return c;}
var AAw=G();
function A0J(a,b){var c,d,e;c=new VY;F9(c,b);c.Ci=3;c.wf=Du(C(166),20.0);c.j3=UD();c.qg=1;Ba(c.r.dS,c);BR(c.dQ,CD(43));d=b.o.bG;e=new Pu;e.zo=c;Ba(d,e);b=b.o.cQ;d=new Pv;d.vN=c;Ba(b,d);return c;}
var AAv=G();
function ALn(a,b){return A4y(b);}
var AAu=G();
function A0v(a,b){var c,d,e,f;c=new Qu;J$(c,b);BR(c.dQ,CD(43));c.l_=KU(c.M);d=b.o.bG;e=new HR;f=new Pw;f.Bm=c;Is(e,b,f);Ba(d,e);b=b.o.cQ;d=new Px;d.zl=c;Ba(b,d);return c;}
var AAF=G();
function AZN(a,b){var c,d;c=new RI;J$(c,b);c.pr=null;c.mI=JQ();c.jp=JQ();b=b.o.cQ;d=new Xo;d.yh=c;Ba(b,d);return c;}
var AAE=G();
function AM6(a,b){var c;c=new YM;J$(c,b);c.vX=Mb();BR(c.dQ,CD(43));return c;}
var AAD=G();
function AXs(a,b){return A4b(b);}
var AAC=G();
function AOS(a,b){var c,d,e;c=new PF;J$(c,b);c.vf=Mb();BR(c.dQ,CD(43));d=b.o.cQ;e=new Ug;e.Cu=c;Ba(d,e);b=b.o.bG;d=new Uf;d.tR=c;Ba(b,d);return c;}
var AAH=G();
function AOT(a,b){var c,d;c=new TB;F9(c,b);c.j_=Mb();Ba(c.r.dS,c);BR(c.dQ,CD(43));b=b.o.cQ;d=new AAQ;d.qV=c;Ba(b,d);return c;}
var AAG=G();
function AVh(a,b){var c;c=new ON;AHK(c,b);AKt(c.dx);return c;}
function AC7(){var a=this;B.call(a);a.uw=null;a.AO=null;a.Ad=null;}
function Ie(){var a=this;B.call(a);a.bL=0;a.cM=0;a.dA=0;a.ky=0;}
function A64(a,b,c,d){var e=new Ie();ABJ(e,a,b,c,d);return e;}
function ABJ(a,b,c,d,e){a.bL=d;a.cM=b;a.dA=c;a.ky=e;}
function Qm(){var a=this;Ie.call(a);a.ee=null;a.bm=0;a.jO=0;a.zT=0;a.oK=0;}
var AGY=G();
function UI(b,c){return (b+(c/2|0)|0)/c|0;}
function YH(b,c,d){if(b<(2147483647/c|0))return UI(Bc(b,c),d);return 0.5+c*b/d|0;}
function H9(b,c){return ((b+c|0)-1|0)/c|0;}
function GG(b){return b+0.5|0;}
function CZ(b){return b+0.5|0;}
function E5(b,c,d){return Bd(b,Be(c,d));}
function M4(b,c){return AIf(b)/AIf(c);}
function OG(){var a=this;Ie.call(a);a.j=null;a.D_=null;}
var Tf=G(0);
function Pt(){var a=this;B.call(a);a.vU=null;a.vV=null;}
function AYh(a,b){var c,d;c=a.vU;d=a.vV;$rt_globals.console.info("paste plain string "+b);c.g(H3(b));DB(d);}
function ABX(){B.call(this);this.wa=null;}
function ACK(a,b){a.wa.clipboardData.setData("text/plain",$rt_ustr(b));}
function ADc(){var a=this;M6.call(a);a.C5=0;a.w7=0;}
function CB(){var a=this;B.call(a);a.i=null;a.k=null;a.bR=0.0;}
function AUm(){var a=new CB();Ey(a);return a;}
function Ey(a){a.i=new Bg;a.k=new Bg;}
function AR$(a){}
function AZc(a){return BF(0,0);}
function JL(a,b,c,d){var e;if(!JU(a.i,b)){a.rJ(b);Co(a.i,b);}if(!JU(a.k,c)){a.oT(c);Co(a.k,c);}e=a.bR;if(e!==d){a.bR=d;a.ly(e,d);}}
function Dy(a,b){return Cg(b,a.bR);}
function BW(a,b){return Gj(b,a.i,a.k);}
function AKY(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AOV();Bs(b,d,e,f,A65);}
function ACj(a,b){var c;c=a.i;LN(b,c.a,c.b,a.k);}
function AVZ(a,b){return 0;}
function AP2(a,b){}
function ATE(a,b){}
function A0i(a,b,c){}
function ATO(a){}
function AON(a,b,c,d){return 0;}
function AMI(a,b,c){return null;}
function AQI(a,b,c){return 0;}
function ATt(a,b){return 0;}
function A0a(a,b,c,d){return 0;}
function AFd(){var a=this;CB.call(a);a.hg=null;a.lj=null;a.lk=null;a.lh=null;a.li=null;a.ep=null;a.hH=null;a.hI=null;a.im=null;}
function AIy(a){var b=new AFd();AM$(b,a);return b;}
function AM$(a,b){Ey(a);a.lj=new Bg;a.lk=new Bg;a.lh=new Bg;a.li=new Bg;a.hg=b;}
function Oc(a,b,c){a.hH=b;a.hI=c;}
function AGv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.i;Bs(b,c.a,c.b,a.k,a.im.br.ef);if(a.ep===null)return;d=Cy(a.hg,2.0);e=GN(a.ep,a.hH.lg(),1);f=GN(a.ep,a.hH.kr(),1);g=GN(a.ep,a.hI.lg(),0);h=GN(a.ep,a.hI.kr(),0);i=Be(e,g);j=Bd(f,h);h=BL(i,j);if(h<=0)B$(b,1);k=a.hH.n1();l=a.hI.px();m=a.hg.p0;while(i<=j){n=a.ep.ir.data[i];if(n.oS){o=a.hH.hE(n.h6);p=a.hH.hE(n.h6+n.oc|0);q=a.hI.hE(n.h5);r=a.hI.hE(n.h5+n.ob|0);W(a.lj,a.i.a,o);W(a.lh,a.i.a,p);W(a.lk,a.i.a+a.k.a|0,q);W(a.li,a.i.a+a.k.a|0,r);s=Bd(Be(o,q),
a.i.b);t=Be(Bd(p,r),a.i.b+a.k.b|0);if(t>s){W(m,a.k.a,t-s|0);c=a.im;u=JY(c.d2,c,n.oS);if(o==p){n=a.hg.dD;W(n,a.i.a-k.a|0,d);if(q>=o){c=a.lh;W(c,c.a,c.b+d|0);g=o;}else{g=o-d|0;c=a.lj;W(c,c.a,c.b-d|0);}Bs(b,k.a,g,n,u);}if(q==r){n=a.hg.dD;W(n,l.a,d);if(o>=q){c=a.li;W(c,c.a,c.b+d|0);}else{q=q-d|0;c=a.lk;W(c,c.a,c.b-d|0);}Bs(b,a.i.a+a.k.a|0,q,n,u);}AD$(b,a.i.a,s,m,a.lj,a.lk,a.lh,a.li,u);}}i=i+1|0;}if(h<=0)B$(b,0);}
function AFL(){var a=this;B.call(a);a.bY=null;a.du=null;a.ix=null;}
function KU(a){var b=new AFL();AMc(b,a);return b;}
function AMc(a,b){a.bY=b;}
function Ir(a,b){var c;a.ix=b;c=a.du;if(c!==null)FY(c,b.c4);c=a.bY.d9;if(c!==null)Gg(c,b.c4,b.i0);}
function Zl(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=AO9();i=c.q;j=0;while(j<i){if(f===null){k=(BG(c,j)).bq;l=ZQ(FK(Cd(g.h,k)));m=AAr(g.f$);}else{n=f.data;k=n[j].pu.ni;l=!BO(g.f$,n[j].l1)?C(21):ZQ(FK(Cd(g.h,k)));m=AAr(n[j].l1);}if(J(l)>153){o=Cv(l,0,150);n=new K;M(n);H(H(n,o),C(167));l=L(n);}if(J(m)>153){n=Cv(m,0,150);o=new K;M(o);H(H(o,n),C(167));m=L(o);}n=Dl(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BG(c,j);}if(f!==null){q=new ADn;q.sA=d;q.sB=p;}else{q=new ADo;q.Bv=d;q.Bu
=o;}V6(h,m,n,l,q);j=j+1|0;}r=AC2(h);if(a.du!==null)AAX(a);c=a.bY.cj;g=new Rd;f=new AAm;f.qO=a;f.qP=d;AKS(g,c,f);W1(g,r);d=a.ix;V1(g,d.c4,d.BH);d=AEj(c);a.du=d;d.pN=d.pN|1;d=GH(g,c);f=a.ix.c4;Jf(d,f.mZ,f.oL);K9(a.du,d);FY(a.du,a.ix.c4);d=a.du;f=new K;M(f);H(H(f,C(168)),e);DK(d,L(f));EI(a.bY,a.du);d=a.du;i=(d.Q.k.b+Cy(d.bd,2.0)|0)+Cy(c,2.0)|0;s=(g.d1+g.eO|0)+g.hD|0;t=Cy(g.bV,5.0);e=BF(E5(t,b.a,g.bV.bO.a-s|0),E5(i,b.b,g.bV.bO.b-g.cI.b|0));Ym(g);KX(g);i=Ej(g);s=g.b6.data.length;i=Bc(i,s)+Bc(g.dP,s+1|0)|0;W(g.cI,
g.k.a,i);i=(g.d1+g.eO|0)+g.hD|0;b=g.bV;s=(b.bO.a-e.a|0)-Cy(b,5.0)|0;b=g.bV;t=(b.bO.b-e.b|0)-Cy(b,5.0)|0;d=BF(Be(i,s),Be(g.cI.b,t));Et(a.du,e,d);FL(c,g);}
function AAX(a){It(a.bY,a.du);JV(a.du);a.du=null;}
function Ld(a,b,c){var d,e;d=a.bY;e=a.ix;L9(d,e.c4,e.i0,b,c);}
function GP(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=new SR;h.gn=a;h.bu=c;h.rw=g;h.i_=e;h.ol=f;h.ml=d;c=Lx();e=h.bu.d;d=Ea(e);e=HD(e);f=h.bu.fy;if(Za(f,d,e)!==null){i=new R0;i.xc=h;i.xd=b;D2(c,C(169),i);}if(Oq(f,d,e)!==null){i=new R1;i.y4=h;i.y5=b;D2(c,C(170),i);}if(ABF(f,d,e)!==null){e=new RZ;e.qz=h;e.qA=b;D2(c,C(171),e);}e=new RY;e.vr=h;e.vq=b;D2(c,C(172),e);HT(h);if(LU()){if(!h.bu.eZ){e=new Rv;e.Br=h;D2(c,C(173),e);}e=new Rw;e.rY=h;D2(c,C(174),e);if(!h.bu.eZ&&Vo(HT(h))){e=new Ru;e.z3=h;D2(c,C(175),e);}}e=Lx();j
=Q(BK,5).data;j[0]=C(176);j[1]=C(177);j[2]=C(178);j[3]=C(179);j[4]=C(180);k=j.length;l=0;while(l<k){f=j[l];g=new Qn;g.xa=h;g.xb=f;D2(e,f,g);l=l+1|0;}FF(c,C(181),GZ(e));m=Lx();j=Q(BC,3);n=j.data;f=h.ml;BJ(f);g=new Ph;g.rL=f;n[0]=C9(C(182),g);f=h.ml;BJ(f);g=new Pi;g.so=f;n[1]=C9(C(183),g);f=h.ml;BJ(f);g=new Pg;g.wm=f;n[2]=C9(C(184),g);I3(m,C(185),CR(j),A66);j=Q(BC,2);n=j.data;g=h.i_;BJ(g);i=new UX;i.yY=g;n[0]=C9(C(186),i);g=h.i_;BJ(g);i=new UW;i.u_=g;n[1]=C9(C(187),i);FF(m,C(188),CR(j));g=new X0;g.re=h;I3(m,C(189),
g,A66);if(h.bu.cJ.bH.l0){j=Q(BC,2);n=j.data;g=new Z$;g.xI=h;n[0]=C9(C(190),g);g=new Z_;g.yx=h;n[1]=C9(C(191),g);FF(m,C(192),CR(j));}FF(c,C(193),GZ(m));e=Lx();FF(e,C(194),AJa(h));g=new YG;g.wo=h;D2(e,C(195),g);i=new OM;i.xU=h;I3(e,C(196),i,A66);FF(c,C(197),GZ(e));Ld(a,b,GZ(c));}
function AEX(b){var c;c=new O7;c.uH=b;return c;}
var FS=G(0);
function AZd(a){}
function AOe(a){}
var Q0=G(0);
var Mm=G(0);
function AFj(){var a=this;CB.call(a);a.cJ=null;a.bj=null;a.kO=null;a.B0=0;a.oj=null;a.dc=null;a.nH=0;a.hC=0.0;a.mf=null;a.C4=null;a.fY=null;a.V=0;a.c9=0;a.d=null;a.fy=null;a.en=null;a.eV=null;a.A1=0;a.zP=0;a.c0=0;a.ch=0;a.cn=0;a.ig=null;a.fT=null;a.fA=null;a.js=0;a.j7=0;a.Ft=0;a.Cr=0;a.k0=0;a.lV=0;a.pS=0;a.ed=0;a.dd=null;a.fv=null;a.eZ=0;a.b3=0;a.Cg=null;a.j5=null;a.zi=null;a.ur=null;a.iu=null;a.bx=0;a.cL=null;a.sE=0;a.ry=null;a.u9=null;}
function If(a){var b=new AFj();AR8(b,a);return b;}
function AR8(a,b){var c,d,e;Ey(a);a.B0=0;a.oj=Q(V,10);a.dc=AXm();a.hC=16.0;a.mf=C(155);a.d=A4r(Q(BK,0),null,null);c=new ADy;c.yC=CN(Q(Nq,0));c.BY=CN(Q(Nq,0));c.qH=CN(Q(AAK,0));c.vG=CN(Q(YO,0));c.vh=CN(Q(Hg,0));c.AR=CN(Q(Sq,0));a.fy=c;a.eV=Q(Fq,0);a.ig=BF(1,0);a.fT=I_();a.fA=I_();a.js=0;a.j7=1;a.k0=1;a.lV=1;a.pS=1;a.ed=3;a.dd=AHs();a.fv=C(198);a.eZ=0;a.b3=0;c=En();BJ(c);d=new Xf;d.Dp=c;a.j5=d;a.bx=0;c=new Xe;c.qt=a;a.ry=c;c=new Xd;c.ta=a;a.u9=c;c=b.bY.cj;a.cJ=c;a.bj=c.bH;a.kO=b;b=APM(c.cz);a.cL=b;a.fY=b.g4;e
=a.oj.data;b=new Xc;b.A5=a;e[1]=b;b=new Xj;b.xJ=a;e[2]=b;b=new Xi;b.tX=a;e[3]=b;b=new Xh;b.wv=a;e[4]=b;b=new Xg;b.rh=a;e[5]=b;b=new Xb;b.zB=a;e[6]=b;K2(a.d,a,GC(a));}
function OZ(a,b){var c,d,e;c=new VU;c.wZ=a;d=new VT;d.yN=a;Ba(b.gL,c);Ba(b.hc,d);e=new VV;e.DD=b;e.DE=c;e.DF=d;return e;}
function Mo(a,b,c,d){JL(a,b,c,d);AAs(a,b,c,d);}
function ARj(a,b,c){U4(a,a.mf,a.hC);PY(a.cL,c);}
function A2t(a,b,c){a.zi=b;a.ur=c;}
function AAs(a,b,c,d){var e;a.c0=Cg(80.0,d);a.ch=Cg(1.0,d);a.cn=Cg(10.0,d);e=!a.b3?b.a:(b.a+c.a|0)-Ip(a)|0;W(a.cJ.dD,e,b.b);Sd(a.dd,a.cJ.dD,Be(Ip(a),c.a),c.b,d);b=a.dc;e=Cg(2.0,d);b.eQ.t.a=e;}
function AWZ(a){a.nH=1;N0(a);}
function AU$(a){a.nH=0;}
function N0(a){Yx(a.dc,MS(GC(a)));}
function Ft(a,b){var c,d;a.en=b;c=a.dc;d=b.br.BX;BR(c.eQ.X,d);c=a.fT;d=b.br;H6(c,d.lF,d.lK);c=a.fA;b=b.br;H6(c,b.lF,b.lK);}
function W5(a){Ov(a,a.cL.cV.oe,a.hC+1.0);}
function ADW(a){var b;b=a.hC;if(b<=7.0)return;Ov(a,a.cL.cV.oe,b-1.0);}
function PZ(a,b){Ov(a,b,a.hC);}
function ARZ(a,b){OJ(a.cJ,b);}
function Ov(a,b,c){if(a.cJ.ce!==0.0){U4(a,b,c);Js(GC(a));}a.hC=c;a.mf=b;}
function LQ(a){var b,c,d;b=a.cL;c=a.cJ.cz;d=a.bj;b.iN=c;if(b.hG.jf!=c&&b.d4)ADV(b,d);SM(a.eV);IB(a.dd);N4(a);}
function U4(a,b,c){var d,e,f,g,h,i,j,k;d=a.bR;e=c*d;Cg(c,d);f=a.cL.cV;d=f===null?0.0:f.oV;if(!(e===d&&BO(b,a.mf))){IB(a.dd);Op(a.eV);g=a.d.h.B.data;h=g.length;i=0;while(i<h){E1(g[i]);i=i+1|0;}j=a.cL;f=a.bj;j.cV=AI2(b,e,300,600,j.g4,f);f=a.cL;a.C4=f.cV;a.V=Sh(f,1.25,a.bj);a.c9=CZ(a.cL.cV.p1);a.dc.eQ.t.b=EB(a.cL.cV);h=EB(a.cL.cV);i=a.V;k=Vb(a.dc);f=new K;M(f);b=H(H(f,C(199)),b);BN(b,32);U(H(U(H(U(H(EH(b,e),C(200)),h),C(201)),i),C(202)),k);$rt_globals.console.info($rt_ustr(L(f)));if(A67){h=Na(a.cL.cV,a.V);b=new K;M(b);U(H(b,
C(203)),h);$rt_globals.console.info($rt_ustr(L(b)));}a.d.is=GW(FZ(a),a.d.A,a.bj.cg,a.fY);H8(a);N4(a);}}
function AVw(a){Op(a.eV);Yc(a.cL);IB(a.dd);}
function OF(a){return Bc(CK(a.d.h)+5|0,a.V);}
function KW(a){return Bd(OF(a)-a.k.b|0,0);}
function AAY(a){return Bd(a.js-Gk(a)|0,0);}
function Gk(a){var b;b=!a.b3?0:a.c9+a.cn|0;return Bd(1,(a.k.a-a.c0|0)-b|0);}
function Ip(a){return a.b3?a.c0:a.c0-a.cn|0;}
function Ek(a){return a.k.b;}
function I0(a,b){var c,d,e;c=a.d.h;if(ABn(c)&&b-c.z5>0.03125?1:0){d=a.sE;e=a.d.h.cp;if(d!=e){a.sE=e;ZB(a);}}if(a.V)AAS(a);d=ABy((a.bx+a.Ft|0)-a.Cr|0,KW(a));e=a.bx==d?0:1;if(e)F1(a,d);return !AAZ(a.dc,b)&&!e&&!a.B0?0:1;}
function IJ(a,b){var c,d;b=ABy(b,AAY(a));c=a.d;d=b==c.dR?0:1;if(d)c.dR=b;if(d){c=a.zi;if(c!==null)c.f();}}
function F1(a,b){var c;if(AJe(a,b)){c=a.ur;if(c!==null)c.f();}}
function AJe(a,b){var c,d;c=ABy(b,KW(a));d=c==a.bx?0:1;if(d){a.bx=c;a.d.mD=c/a.V;}return d;}
function AG7(a){return BF((Ip(a)+a.ch|0)+a.cn|0,a.V);}
function ASP(a){return a.V;}
function AYH(a,b){In(a);}
function In(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=H9(a.k.b,a.V)+7|0;c=a.eV;if(c.data.length<b)a.eV=Zd(b,c,a.cL,a.A1,a.zP,a.d.h);B$(a.bj,0);Nz(a.bj,a.i,a.k);d=(a.V-Vb(a.dc)|0)/2|0;b=a.d.is-(SO(a.dc)/2|0)|0;e=a.d;f=b-e.dR|0;g=!a.b3?a.c0:(a.ch+a.cn|0)+a.c9|0;TV(a.dc,g+f|0,(d+Bc(e.w,a.V)|0)-a.bx|0);h=CK(a.d.h);i=Tz(a);j=Ty(a);a.A1=i;a.zP=j;k=!a.b3?a.i.a+a.c0|0:((a.i.a+a.ch|0)+a.cn|0)+a.c9|0;l=Gk(a);c=a.d.lA;m=Dy(a,40.0);n=i;while(n<=j&&n<h){o=Cd(a.d.h,n);p=ACk(a,n);Xq(p,o,a.bj,a.V,l,a.d.dR,n,
n%a.eV.data.length|0);a.js=Bd(a.js,FE(o)+m|0);b=a.V;q=Bc(b,n)-a.bx|0;r=c===null?null:c.data[n];d=a.i.b+q|0;e=a.bj;g=a.d.dR;s=a.en;t=AJ7(Bi(a),n);if(t!==null){if(t.b==(-1))t.b=o.S;t.a=GW(o,t.a,a.bj.cg,a.fY);t.b=GW(o,t.b,a.bj.cg,a.fY);}o=a.d;Qg(p,d,k,e,l,b,g,s,t,o.iT,o.iF,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cJ.dD;n=i;while(n<=j&&n<h&&a.k0){p=ACk(a,n);q=Bc(a.V,n)-a.bx|0;r=Bi(a);if(!Dw(r))u=0;else{o=Er(r);r=F5(r);u=o.K<=n&&n<r.K?1:0;}s=a.en;r=s.br;v=r.sR;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.kY;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=JY(s.d2,s,x[n].g8);break a;}}if(w)v=r.gp;}}AIG(p,a.bj,k,a.i.b+q|0,a.V,e,a.d.dR,l,v);n=n+1|0;}if(a.j7){y=Be(j+1|0,h);AKk(a,Bc(a.V,y)-a.bx|0,l);}AGq(a);AF0(a,i,j);if(a.lV)AHH(a,i,j,h);if(a.nH&&f>=(( -SO(a.dc)|0)/2|0)){e=a.dc;p=a.k;if(AEK(e.eQ.u,0,0,p))ABZ(a.dc,a.bj,a.i);}AGb(a);AFO(a);Ga(a.bj);}
function AHH(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lA;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.en;h=JY(h.d2,h,g.g8);}else h=e!==null?a.en.br.ef:a.en.br.gp;if(!(a.d.w!=b&&g===null)){g=a.ig;i=a.b3;g.a=!i?(a.cn-a.ch|0)-a.ed|0:((a.cn+a.c9|0)+a.ch|0)-a.ed|0;j=a.V;g.b=j;i=i?0:(a.c0-a.cn|0)+a.ch|0;j=Bc(j,b)-a.bx|0;k=a.bj;l=a.i;Bs(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AF0(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CK(a.d.h),a.V)-a.bx|0);f=a.dd;g=a.bx;h=a.d;i=h.lA===null?h.w:(-1);j=a.bj;k=a.en;Nz(j,f.gx,f.ft);SK(f,j,b,d);ABA(f,b,j);AAR(f,g,e,k,j);l=k.la;if(e<d){h=f.gx;Bs(j,h.a,h.b+e|0,BF(f.ft.a,d-e|0),l.k6);}if(b<=i&&i<=c){k=k.la;c=i/20|0;h=f.c3;l=BG(h,c%h.q|0);h=f.gx;d=Bc(f.c3.q,f.hi);c=l.fr.b;b=((l.qb.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CO(l.cP)|0)|0;c=i%l.ec|0;e=l.ct;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;W(l.jb,l.fr.a,e);f=l.jV;c=i%l.ec|0;d=l.ct;Cr(f,0.0,
Bc(c,d),l.fr.a,d);Ni(l,j,b,h,k.xS,k.qw);}Ga(j);}
function Tz(a){return Be(a.bx/a.V|0,CK(a.d.h)-1|0);}
function Ty(a){return Be(((a.bx+Ek(a)|0)-1|0)/a.V|0,CK(a.d.h)-1|0);}
function ARF(a,b){return (Bc(a.V,b)-a.bx|0)+a.i.b|0;}
function ARw(a){return a.i;}
function AUg(a){return a.k;}
function N4(a){YD(a.dd,a.cL.cV,a.V,a.cJ.cz);}
function ACk(a,b){var c;c=a.eV.data;return c[b%c.length|0];}
function UR(a,b){var c,d,e,f;c=E5(0,J(a.fv),Pm(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BU;Y(b);N(b);}if(c!=1){d=b.cb.data.length;if(d&&c){e=B5(Bc(d,c));d=0;f=0;while(f<c){QS(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Ms(e);}else b=A51;}}return b;}
function P2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BP(i);k=A5u(i).data;Ju(j,c);c=0;l=k.length;if(c>l){f=new BU;Y(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cp=o.cp+1|0;p=Q(G_,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=ASY(h[m],n[m],k[m],b[m],f.bq,f.bv);m=m+1|0;}BB(o.iJ,p);c=0;while(c<i){b=e.data;Ng(o,h[c],n[c],k[c],b[c]);g.qe(CY(h[c]),b[c]);c=c+1|0;}}
function AK_(a){var b;if(Dw(Bi(a)))GT(a);else{b=a.d;OY(b.h,b.w,b.A);}H8(a);Ez(a);return 1;}
function DH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eZ)return 0;if(Dw(Bi(a)))GT(a);c=Mc(AB8(b,C(204),C(21)),C(205),(-1));d=c.data;b=a.d;e=b.h;f=b.w;g=b.A;AD1(e,f,g,c);h=d.length;if(!h)b=A51;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B5(i+Bc(h-1|0,J(C(205)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(205))){m=l+1|0;c[l]=P(C(205),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Ms(k);}F4(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CP(a,m,m!=f?J(d[h-1|0]):b.A+J(d[0])|0,0);F8(a);Ez(a);return 1;}
function GT(a){var b,c,d;b=Er(Bi(a));c=a.d.h;d=Bi(a);O8(c,d,UB(c,d));CP(a,b.K,b.ba,0);F8(a);Ez(a);}
function F8(a){var b,c;(Bi(a)).dt=0;b=(Bi(a)).bN;c=a.d;Cf(b,c.w,c.A);b=(Bi(a)).bB;c=a.d;Cf(b,c.w,c.A);}
function AKk(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cJ.dD;e.b=d-b|0;d=a.b3;e.a=!d?c+a.ed|0:c+a.ch|0;d=!d?(a.i.a+a.c0|0)-a.ed|0:(((a.i.a+a.cn|0)+a.c9|0)+a.ch|0)-a.ed|0;Bs(a.bj,d,a.i.b+b|0,e,a.en.br.ef);}}
function AGb(a){var b;b=a.b3?a.i.a+a.c9|0:a.i.a+a.k.a|0;Km(a.fT,a.bx,a.i.b,Ek(a),OF(a),b,a.c9);b=!a.b3?a.i.a+a.c0|0:((a.i.a+a.ch|0)+a.cn|0)+a.c9|0;Rm(a.fA,a.d.dR,b,Gk(a),a.js,a.i.b+Ek(a)|0,a.c9);}
function AFO(a){var b,c;b=Zn(a.fT);c=Zn(a.fA);if(!(!b&&!c)){B$(a.bj,1);if(b)GV(a.fT,a.bj);if(c)GV(a.fA,a.bj);if(b)G1(a.fT,a.bj);if(c)G1(a.fA,a.bj);}}
function AGq(a){var b,c,d,e,f;b=a.ig;c=a.k;b.b=c.b;b.a=a.ch;d=!a.b3?a.c0-a.cn|0:(c.a-Ip(a)|0)-a.ch|0;b=a.bj;c=a.i;Bs(b,c.a+d|0,c.b,a.ig,a.en.br.uC);b=a.ig;d=a.b3;b.a=!d?(a.cn-a.ch|0)-a.ed|0:((a.cn+a.c9|0)+a.ch|0)-a.ed|0;e=d?0:(a.c0-a.cn|0)+a.ch|0;c=a.bj;f=a.i;Bs(c,f.a+e|0,f.b,b,a.en.br.ef);}
function ABy(b,c){return Be(Bd(0,b),c);}
function GC(a){return a.cJ.e1;}
function GK(a,b,c){var d,e,f;d=DW(b);e=new K;M(e);H(H(e,C(206)),d);$rt_globals.console.info($rt_ustr(L(e)));CP(a,0,0,0);f=new Y7;f.w5=a;f.w4=b;f.w3=c;c=En();BJ(c);d=new Y6;d.At=c;UO(b,f,d);}
function JA(a,b,c,d,e){if(IP(a,e))return 1;if(c&&d)return 1;if(c)F1(a,a.bx+((Bc(b,a.V)*12|0)/10|0)|0);else if(!d){Io(a,a.d.w+b|0,e);ABB(a);}return 1;}
function R6(a,b,c,d){var e,f,g;if(IP(a,d))return 1;e=FZ(a);if(!c)f=a.d.A+b|0;else if(b>=0)f=G8(e,a.d.A);else{b=a.d.A;if(!b)f=(-1);else{c=Kh(e,b);if(c>0&&e.eu.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eu.data[c-1|0];}}if(f>e.S){e=a.d;if((e.w+1|0)<CK(e.h))CP(a,a.d.w+1|0,0,d);}else if(f>=0)Dz(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(Cd(e.h,b-1|0)).S;CP(a,a.d.w-1|0,g,d);}}ACx(a);return 1;}
function IP(a,b){if(Dw(Bi(a))&&!b){F8(a);H8(a);return 1;}if(!(b&&Dw(Bi(a))))F8(a);return 0;}
function CP(a,b,c,d){a.d.A=c;return Io(a,b,d);}
function Io(a,b,c){var d;d=a.d;d.w=E5(0,b,CK(d.h)-1|0);return Dz(a,a.d.A,c);}
function Dz(a,b,c){var d,e;a.d.A=E5(0,b,(FZ(a)).S);a.d.is=a.bR===0.0?0:GW(FZ(a),a.d.A,a.bj.cg,a.fY);N0(a);H8(a);if(c)(Bi(a)).dt=1;d=Bi(a);e=a.d;N1(d,e.w,e.A);(Bi(a)).dt=0;return 1;}
function Mu(a,b){var c;c=AWg(Bi(a));Dz(a,b,0);JI(Bi(a),c);}
function H8(a){ABB(a);ACx(a);}
function ABB(a){var b,c,d,e,f;b=a.bx;c=b+Ek(a)|0;d=a.d.w;e=a.V;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))F1(a,d-e|0);else if(f>(c-e|0))F1(a,(f-Ek(a)|0)+a.V|0);}
function ACx(a){var b,c,d,e,f;b=CZ(a.cJ.ce*30.0);c=a.d.dR;d=c+Gk(a)|0;e=a.d.is;f=e+b|0;if(e<(c+b|0))IJ(a,e-b|0);else if(f>(d-b|0))IJ(a,(f-Gk(a)|0)+b|0);}
function IV(a,b){var c,d;CP(a,b.bq,b.bv,0);c=G8(FZ(a),a.d.A);Cf((Bi(a)).bB,a.d.w,c);b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}
function Fw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=E5(0,((b.b-d.b|0)+a.bx|0)/a.V|0,CK(a.d.h)-1|0);g=!a.b3?a.c0:(a.ch+a.cn|0)+a.c9|0;h=Bd(0,(e-g|0)+a.d.dR|0);b=Cd(a.d.h,f);d=a.bj.cg;i=a.fY;if(!(b.eW!==null&&!b.g3))Nv(b,d,i);j=b.eW;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.S;else{c=ABl(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.S;else{j=ZX(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A68){b=new K;M(b);U(H(U(H(U(H(b,C(207)),e),C(208)),h),C(209)),m);$rt_globals.console.info($rt_ustr(L(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DR(f,k);}
function Vs(a,b){var c,d;c=a.d;d=b.bq;c.w=d;c.A=b.bv;c.is=GW(Cd(c.h,d),a.d.A,a.bj.cg,a.fY);N0(a);}
function FZ(a){var b;b=a.d;return Cd(b.h,b.w);}
function LL(a,b,c,d){var e,f;e=CZ((a.V*4|0)*d/150.0);f=CZ(c);if(e)F1(a,a.bx+e|0);if(f)IJ(a,a.d.dR+f|0);return 1;}
function SS(a,b,c){(Bi(a)).dt=0;return 1;}
function Wj(a,b,c){var d;if(c)return null;d=F3(a.fT,b.j,a.ry,1);if(d!==null)return d;d=F3(a.fA,b.j,a.u9,0);if(d!==null)return d;Je(a);Vs(a,Fw(a,b.j));Lt(a.d);if(!b.bL&&!(Bi(a)).dt){b=(Bi(a)).bN;d=a.d;Cf(b,d.w,d.A);}(Bi(a)).dt=1;b=Bi(a);d=a.d;N1(b,d.w,d.A);b=new ACA;b.zA=a;return b;}
function O2(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cM){b=b.j;e=Fw(a,b);f=I$(a.d.h,e.bq,e.bv);g=SG(a,f);h=Oq(a.fy,Ea(a.d),HD(a.d));if(h!==null){i=a.d;c=e.bq;d=e.bv;e=new Yb;e.Dd=a;e.Da=b;e.Db=g;h.tH(i,c,d,e,a.j5);}else{e=Cq(a.d.h.dN,f);if(e!==null){IV(a,e);c=1;}else{e=Cq(a.d.h.dG,f);if(e!==null&&!EE(e)){if(e.q!=1){Zl(a.kO,b,e,a,g);c=1;}else{IV(a,BG(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(Fw(a,b.j)).bq;g=Cd(a.d.h,c);c=GL(g,a.d.A);d=G8(g,a.d.A);b=Og(g,c);if((d-1|0)==g.S){Cf((Bi(a)).bN,
a.d.w,Pm(g));Cf((Bi(a)).bB,a.d.w,g.S);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.cb.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.A;if(c==j){c=GL(g,c-1|0);d=G8(g,c);}else{if(d!=j){QI(Bi(a),a.d.w);break b;}c=GL(g,d+1|0);d=G8(g,c);}}}Cf((Bi(a)).bN,a.d.w,c);(Bi(a)).dt=1;CP(a,a.d.w,d,0);(Bi(a)).dt=0;Je(a);}}break a;case 3:break;default:break a;}QI(Bi(a),a.d.w);ZI(a.d.h1);Je(a);}}return 1;}
function Xk(a,b){var c,d,e,f,g,h,i,j;c=a.cJ.cT;if(F$(a.fT,b.j,c))return 1;if(F$(a.fA,b.j,c))return 1;d=a.dd;if(Gj(b.j,d.gx,d.ft)&&GI(c)?1:0)return 1;e=b.j;f=!a.b3?a.c0:(a.cn+a.ch|0)+a.c9|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=Gk(a);i=Ek(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return GI(c);if(b.cM){e=Fw(a,b.j);e.bv=GL(Cd(a.d.h,e.bq),e.bv);b=a.d.h;if(!MU(b.dN,e)&&!MU(b.dG,e)?0:1)return DY(c,C(210));}return DY(c,C(176));}
function A17(a,b){var c,d,e,f,g;c=b.cM;if(c&&b.bm==65){c=CK(a.d.h)-1|0;d=Gz(a.d.h,c);Cf((Bi(a)).bN,0,0);Cf((Bi(a)).bB,CK(a.d.h)-1|0,d);return 1;}if(c&&b.bm==80){Mj(a.d);return 1;}if(!a.eZ&&c&&b.bm==90){if(Dw(Bi(a)))F8(a);b=a.d.h;b.cp=b.cp+1|0;e=b.iJ;d=e.q;if(!d)e=null;else{f=(EN(e,d-1|0)).data;e=WI(b,f[0]);c=1;while(c<f.length){WI(b,f[c]);c=c+1|0;}}if(e!==null){CP(a,e.a,e.b,0);Ez(a);}return 1;}if(!c&&!b.dA){if(Bj(b.ee,C(211))){DH(a,C(212));Dz(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ee,C(213))){DH(a,C(214));Dz(a,a.d.A
-1|0,0);c=1;}else if(Bj(b.ee,C(36))){DH(a,C(22));Dz(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ee,C(215))){DH(a,C(216));Dz(a,a.d.A-1|0,0);c=1;}else if(Bj(b.ee,C(217))){DH(a,C(218));Dz(a,a.d.A-1|0,0);c=1;}else if(!Bj(b.ee,C(219)))c=0;else{DH(a,C(220));Dz(a,a.d.A-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dA&&!b.cM)){d=b.bm;if(d>=48&&d<=57){c=d-48|0;e=a.oj.data[c];if(e!==null)e.f();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bm){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AJo(a,b))return 1;if(AF$(a,b))return 1;c=b.cM;if(c&&b.bm==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bm;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dA&&!b.ky)return J(b.ee)>0&&DH(a,b.ee)?1:0;return 0;}return 0;}
function AAS(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Tz(a);d=Ty(a);if(b.fc!=3&&b.gz==3){e=TL(b.pi);f=new WD;f.yR=c;f.yQ=d;g=new Rf;g.ss=f;while(!g.mP&&ABT(e,g)){}if(!g.mP&&Bj(C(177),Ea(b))){c=Bd(0,c-100|0);d=Be(CK(b.h)-1|0,d+100|0);BB(b.pi,BF(c,d));h=BP(3);i=h.data;i[0]=FD(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.B.data.length);k=0;while(k<d){j=j+Gz(e,k)|0;if(k!=(e.B.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.As=E3();e=b.fa;l=new ACy;l.sj=b;i=Q(B,3);m=i.data;m[0]=E_(b.h);m[1]=h;b=b.h.dg;g=BM();AA7(b,b.de,
g);h=BP(3*g.q|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BG(g,o);d=k+1|0;n[k]=b.b0;q=d+1|0;n[d]=b.bX;k=q+1|0;n[q]=b.fO;o=o+1|0;}m[2]=h;CV(e,l,C(221),i);}}}
function Vq(a){Mj(a.d);}
function ZB(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.fN){c=E2(b);d=new K;M(d);H(H(d,c),C(222));$rt_globals.console.info($rt_ustr(L(d)));}c=Ea(b);if(c!==null&&!Bj(C(176),c)){d=b.h.dg;e=QD(d,d.de);if(e===null){Oi(b);KD(b.h);}else{f=DX([Dn(e),Dd(e),e.bW.fO]);g=E_(b.h);h=BP(1);h.data[0]=AH5(c);d=b.h.e5;if(d.fB===null){i=BP(0);j=B5(0);}else{c=AT3(AWa(e.cl,d.fb),e);WX(c);i=c.oF;j=c.mS;}k=b.h.cp;c=b.fa;d=new OO;d.Ax=b;l=Q(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BP(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CV(c,d,C(223),l);}}
else KD(b.h);}
function Hd(a,b,c){var d,e,f,g,h,i;if(c&&a.eZ)return 0;d=Er(Bi(a));e=d.K;if(Dw(Bi(a))){f=a.d.h;g=Bi(a);h=UB(f,g);if(c)O8(f,g,h);if(c){CP(a,d.K,d.ba,0);F8(a);Ez(a);}}else{h=Fs(FK(a.d.h.B.data[e]),C(205));i=Be(CK(a.d.h)-1|0,e);Cf((Bi(a)).bB,i,0);if(e>=(CK(a.d.h)-1|0))Cf((Bi(a)).bB,i,Gz(a.d.h,i));else Cf((Bi(a)).bN,i+1|0,0);if(c)GT(a);else CP(a,e,0,0);}b.g(h);return 1;}
function AF$(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eZ)return 0;a:{switch(b.bm){case 8:if(Dw(Bi(a))){GT(a);c=1;}else{b=a.d;d=b.A;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;OY(b.h,e,c);}else{e=b.w-1|0;c=Gz(b.h,e);b=a.d.h;Lz(b,e);F4(b,e,Gz(b,e),1,C(205));}Ez(a);c=CP(a,e,c,0);}}break a;case 9:if(!b.bL){if(!Dw(Bi(a)))DH(a,a.fv);else{f=Er(Bi(a));g=F5(Bi(a));c=g.K;d=f.K;e=(c-d|0)+1|0;h=BP(e);i=h.data;j=Q(BK,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fv;d=d+1|0;e=l;}b=new ACF;m=a.d;AJK(b,m.w,m.A);m=new Z8;m.zw
=a;P2(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fv)|0;g.ba=g.ba+J(a.fv)|0;Mu(a,a.d.A+J(a.fv)|0);Ez(a);}c=1;}else b:{if(!Dw(Bi(a))){b=a.d;f=Cd(b.h,b.w);if(f.s.data.length>0){g=UR(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.w;b=DR(e,m.A);n.cp=n.cp+1|0;o=n.iJ;h=Q(G_,1);h.data[0]=ASY(e,0,1,g,b.bq,b.bv);BB(o,h);Ng(n,e,0,1,g);HL(f,0,J(g));Mu(a,a.d.A-J(g)|0);}}else{b=Er(Bi(a));f=F5(Bi(a));c=f.K;p=b.K;c=(c-p|0)+1|0;h=BP(c);k=h.data;j=Q(BK,c);q=j.data;g=a.d;e=g.A;l=g.w;c=0;while(p<=f.K){g=Cd(a.d.h,p);if(g.s.data.length>0){g=UR(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=Jh(h,c);j=C8(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.K)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.K){f.ba=Bd(0,f.ba-J(g)|0);Mu(a,a.d.A-J(g)|0);}d=d+1|0;}b=DR(l,e);f=new Rp;f.sp=a;P2(a,h,0,1,j,b,f);}Ez(a);c=1;}break a;case 13:if(Dw(Bi(a)))GT(a);b=a.d;E1(Cd(b.h,b.w));b=a.d;AKF(b.h,b.w,b.A);Ez(a);c=CP(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AK_(a);}return c;}
function AJo(a,b){var c,d,e,f;a:{switch(b.bm){case 33:c=b.cM?Io(a,H9(a.bx,a.V),b.bL):JA(a,2-UI(Ek(a),a.V)|0,0,b.dA,b.bL);break a;case 34:c=!b.cM?JA(a,UI(Ek(a),a.V)-2|0,0,b.dA,b.bL):Io(a,((a.bx+Ek(a)|0)/a.V|0)-1|0,b.bL);break a;case 35:if(!IP(a,b.bL)&&!Dz(a,(FZ(a)).S,b.bL)){c=0;break a;}c=1;break a;case 36:if(!IP(a,b.bL)&&!Dz(a,0,b.bL)){c=0;break a;}c=1;break a;case 37:c=b.cM;if(c&&b.dA){Je(a);d=a.d.h1;e=d.dK;if(e<=0)d=null;else{f=d.fp.data;c=e-1|0;d.dK=c;d=f[c];}if(d===null)c=1;else{CP(a,L1(d),KQ(d),0);JI(Bi(a),
d.oB);c=1;}break a;}c=R6(a,(-1),c,b.bL);break a;case 38:c=JA(a,(-1),b.cM,b.dA,b.bL);break a;case 39:c=b.cM;if(c&&b.dA){d=a.d.h1;e=d.dK;if(e==(d.fm-1|0))d=null;else{f=d.fp.data;c=e+1|0;d.dK=c;d=f[c];}if(d===null)c=1;else{CP(a,L1(d),KQ(d),0);JI(Bi(a),d.oB);c=1;}break a;}c=R6(a,1,c,b.bL);break a;case 40:c=JA(a,1,b.cM,b.dA,b.bL);break a;default:}c=0;}if(c&&b.bL){b=(Bi(a)).bB;d=a.d;Cf(b,d.w,d.A);}if(c)Lt(a.d);return c;}
function Je(a){var b,c,d,e,f,g,h;b=a.d;c=b.h1;d=c.dK;c=d<0?null:c.fp.data[d];if(c!==null&&b.w==L1(c)&&a.d.A==KQ(c))return;c=a.d;e=c.h1;b=new NN;d=c.w;f=c.A;c=Bi(a);b.ps=DR(d,f);g=AWg(c);b.oB=g;g.dt=0;f=e.dK;h=e.fm;if(f==(h-1|0))ACl(e,b);else{d=f+1|0;while(d<h){ZI(e);d=d+1|0;}ACl(e,b);}e.dK=e.dK+1|0;}
function Ez(a){a.d.h.z5=MS(GC(a));}
function H0(a,b){var c,d,e,f;a.Cg=null;LG(a.dd,null);ADY(a.d);c=a.d;a.d=b;K2(c,null,null);K2(b,a,GC(a));d=(B3(a.fy.vh)).data;e=d.length;f=0;while(f<e){d[f].qe(c,b);f=f+1|0;}a.bx=GG(b.mD*a.V);}
function SG(a,b){var c;c=LV(a.d.h,b);if(c===null)return C(21);return c.v;}
function HB(a,b){var c,d,e,f,g;a.d.lA=b;if(b===null){Bk(Bt(),C(224));LG(a.dd,null);}else{b=b.data;c=DL(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.g8<<24>>24;e=e+1|0;}LG(a.dd,c);}}
function IX(a,b){a.d.qv=b;}
function Bi(a){return a.d.rD;}
function LT(a){var b;b=a.iu;if(b!==null)b.g(a);}
function AH6(){var a=this;B.call(a);a.lG=null;a.n2=null;a.gU=null;}
function AHj(a,b){var c=new AH6();AWo(c,a,b);return c;}
function AWo(a,b,c){var d,e;a.lG=b;a.n2=c;d=null;e=new Uw;e.su=a;b.pj(d,e);b=null;d=new Ux;d.rI=a;c.pj(b,d);}
function Yz(a,b,c){var d,e,f,g,h,i,j;d=a.gU;if(d!==null&&d.ir!==null){e=b!==a.lG?0:1;f=b.lg();g=(b.kr()+f|0)/2|0;h=g-f|0;d=a.gU;d=d.ir.data[GN(d,g,e)];i=g-(!e?d.h5:d.h6)|0;j= -(b.hE(f)-(b.n1()).b|0)|0;c.qa(Bc(((!e?d.h6:d.h5)+i|0)-h|0,c.pq())+j|0);return;}}
function TH(){B.call(this);this.Bn=null;}
function AL$(a,b){V3(a.Bn,b);}
function TI(){B.call(this);this.y$=null;}
function A09(a,b){V3(a.y$,b);}
function TJ(){B.call(this);this.xe=null;}
function API(a,b){return AHb(a.xe,b);}
function HR(){var a=this;B.call(a);a.oG=null;a.sy=null;a.r2=null;}
function A69(a,b){var c=new HR();Is(c,a,b);return c;}
function Is(a,b,c){var d;d=null;a.oG=b.bw;a.sy=d;a.r2=c;}
function AOg(a,b){var c,d;if(b.cM&&b.bm==79){c=a.sy;if(c!==null&&b.bL)Ja(a.oG,c);else Kc(a.oG,a.r2);d=1;}else d=0;return d;}
function TF(){B.call(this);this.u3=null;}
function AQv(a,b){var c,d,e;c=a.u3;d=DN(c.r,c.E)?c.E:!DN(c.r,c.G)?null:c.G;if(d!==null){e=new RA;e.yd=c;e.yb=d;e.yc=b;GK(d,b,e);c.k7=null;c.mu.gU=null;c.fF.ep=null;}}
function TG(){B.call(this);this.sU=null;}
function A1G(a,b){b=b;return AJp(a.sU,b);}
var C3=G(0);
function ADp(){var a=this;B.call(a);a.cj=null;a.b7=null;a.d9=null;}
function L9(a,b,c,d,e){var f,g;f=Nn(a.cj);Gg(f,b,c);b=a.cj;c=b.ea;g=new ACP;g.w1=b;g.w0=c;f.jZ=g;R9(f,d,e);Gm(a,f);}
function Gm(a,b){var c;c=a.d9;if(c!==b)a.d9=BV(c,b);}
function Ou(a,b){var c;c=new ACB;c.q3=a;c.q5=b;return c;}
function Ye(a,b){var c;c=new ADA;c.yo=a;c.yp=b;return c;}
function DS(a){var b;b=a.d9;if(b!==null){Mk(b);Gm(a,null);}}
function EI(a,b){var c,d,e,f;c=a.b7;d=c.da;e=c.dm;if(d==e.data.length)c.dm=C8(e,d+4|0);d=c.da;f=d;while(0<f){e=c.dm.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dm.data[0]=b;c.da=d+1|0;c.f_=null;return b;}
function It(a,b){R$(a.b7,b);}
function JM(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B3(a.b7)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.cj.bH;d.W.dw(e);f=d.Q;g=d.ga.ja;if(!RL(f)){if(!Ob(f)&&!(!f.eH&&f.dV!==null)){f.eH=0;ACe(f);h=f.ey;i=(h.em+h.eG+5.0)/10.0;j=Cy(f.f7,f.kJ);h=e.cg;k=f.ey;l=f.jH;m=i*2.0;Cn(h,k);n=j+Lm(h,l,m)|0;f.ik=n;n=E5(0,n,f.k.a);if(n){h=D5(e,n,f.k.b,f.f7.cz);Cn(h,f.ey);k=f.jH;m=j;i=m+i;l=f.ey;o=l.em;B0(h,k,i,m+o-(o+l.eG)/16.0);k=f.dV;if(k===null){k=CW(e);f.dV=k;}CM(k,h);EA(h);Cr(f.mF,0.0,0.0,BQ(f.dV),CO(f.dV));}}h=g.l3;k
=f.dV;if(k===null)QE(f,e,0,f.k.a,h);else{j=BQ(k);g=g.n9;k=f.i;n=k.a;p=k.b;k=f.dV;DI(e,n,p,k.eS,f.mF,k,g,h,f.f7.cz);n=f.k.a;if(j<n)QE(f,e,j,n-j|0,h);}}l=d.dh;if(l!==null){q=d.bd;h=d.Q;k=d.ga.ja;if(l.i6!==null){if(l.df===null)AGi(l,q);n=Cy(q,2.0);j=Bd(0,((h.k.b-CO(l.df)|0)/2|0)-n|0);l.gb.a=(((h.i.a+h.k.a|0)-j|0)-BQ(l.df)|0)-n|0;f=l.gb;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.kD;j=BQ(l.df);r=n*2|0;W(f,j+r|0,CO(l.df)+r|0);f=q.bH;g=l.gb;Bs(f,g.a,g.b,l.kD,!l.lP?k.l3:k.jF);Cr(q.mo,0.0,0.0,BQ(l.df),CO(l.df));f=q.bH;g=l.gb;n
=g.a+n|0;p=g.b+p|0;g=l.df;DI(f,n,p,g.eS,q.mo,g,k.n9,!l.lP?k.l3:k.jF,0);}}B$(e,1);j=Cy(d.bd,2.0);n=RL(d.Q);f=d.bd;g=f.dD;f=f.p0;p=n?0:d.Q.k.b;h=d.W.k;W(f,h.a,h.b+p|0);AIT(e,f,!n?d.Q.i:d.W.i,d.ga.ja.jF, -j|0,g);f=d.W;AJ6(e,f.k,f.i,j,p,X$(d.ga.lx,d.bd.ce),d.ga.lx.nW,g);c=c+(-1)|0;}f=a.d9;if(f!==null)AEk(f);}
function J9(a,b){var c,d,e,f;c=a.cj;if(c.cz==b)d=0;else{c.cz=b;Js(c.e1);d=1;}if(d){c=a.d9;if(c!==null){c=B7(c.cf);while(B_(c)){N8(Ca(c));}}e=(B3(a.b7)).data;b=e.length;f=0;while(f<b){c=e[f];c.Q.eH=1;c.W.rn();f=f+1|0;}}return d;}
function AUN(a,b){var c,d,e,f,g,h,i,j,k;c=a.d9;if(c!==null){d=0;e=c.cf.q-1|0;a:{while(e>=0){d=NP(BG(c.cf,e),b.j,c.cO.cT);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B3(a.b7)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(BW(h.Q,c)){i=h.dh;if(i!==null)i.lP=S2(i,c);e=DY(h.bd.cT,null);}else{i=h.dh;if(i!==null)i.lP=0;e=Cy(h.bd,7.0);j=Cy(h.bd,25.0);if(M0(h,c.a,e)){k=Xa(h,c.a,j);if(M8(h,c.b,e)){e=DY(h.bd.cT,L2(k,C(225)));break b;}if(KI(h,c.b,e)){e=DY(h.bd.cT,L2( -k|0,C(225)));break b;}}if(Od(h,c.b,e)){j=ADg(h,
c.b,j);if(Oy(h,c.a,e)){e=DY(h.bd.cT,L2(j,C(226)));break b;}if(MF(h,c.a,e)){e=DY(h.bd.cT,L2( -j|0,C(226)));break b;}}e=0;}}c:{d:{if(!e){if(!BW(h.W,b.j))break d;if(!h.W.bT(b)&&!DY(h.bd.cT,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AMR(a,b,c,d){var e,f,g,h,i,j;e=a.d9;if(e!==null){f=0;g=e.cf.q-1|0;a:{while(g>=0){f=N_(BG(e.cf,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B3(a.b7)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!BW(i.Q,b.j)&&!PM(i,b.j)){if(!Ma(i,b))break c;if(!i.W.cy(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AOP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.d9;if(d!==null){e=null;f=d.cf.q-1|0;a:{while(f>=0){e=BG(d.cf,f);g=b.j;h=Fb(e.co,g);if(!h&&!K$(e.co)){e=e.kT;if(e!==null)e.f();}e=!h?null:A6$;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B3(a.b7);j=0;while(true){k=i.data;if(j>=k.length)break;b:{g=k[j];l=b.j;if(!c){c:{m=Cy(g.bd,7.0);n=Cy(g.bd,25.0);if(M0(g,l.a,m)){f=Xa(g,l.a,n);if(M8(g,l.b,m)){d=J3(g,l,f,(-1));break c;}if(KI(g,l.b,m)){d=J3(g,l,f,1);break c;}}if(Od(g,l.b,m)){h=ADg(g,l.b,n);if(Oy(g,l.a,
m)){d=J3(g,l,(-1),h);break c;}if(MF(g,l.a,m)){d=J3(g,l,1,h);break c;}}d=null;}if(d!==null)break b;if(BW(g.Q,l)){e=g.dh;if(e!==null&&S2(e,l)){g.dh.i6.f();d=A6$;break b;}e=g.W.i;f=e.a;h=l.a;f=f-h|0;m=e.b;n=l.b;m=m-n|0;e=g.Q.i;h=e.a-h|0;n=e.b-n|0;e=new Bg;d=new Ya;d.ql=g;d.qn=h;d.qm=n;d.qj=e;d.qi=f;d.qk=m;break b;}}d=!Ma(g,b)?null:g.W.cm(b,c);}if(d!==null){if(!c&&g!==ADl(a)){b=a.b7;f=0;k=b.dm;i=k.data;c=i.length;d:{while(true){if(f>=c){f=(-1);break d;}if(g===i[f])break;f=f+1|0;}}if(f>=0){h=b.da;if(h<=f){b=new Oe;Bm(b,
J0(f));N(b);}if(f){e=i[f];while(f>0){i[f]=i[f-1|0];f=f+(-1)|0;}i[0]=e;i=b.f_;if(i!==null)C6(k,0,i,0,h);}}}return d;}j=j+1|0;}return null;}
function A12(a,b,c){var d,e,f,g,h;d=a.d9;if(d!==null&&Jr(d))return 1;e=(B3(a.b7)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!BW(d.Q,b.j)){if(!Ma(d,b))break b;if(!d.W.dB(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function AX3(a,b,c){var d,e,f,g,h;d=(B3(a.b7)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.W;h.dz(h.i,h.k,c);h=g.Q;if(h.hA!==null){h.ey=null;h.ik=0;h.eH=1;}Iu(g);h=g.dh;if(h!==null)NQ(h);f=f+1|0;}}
function ADl(a){var b;b=a.b7;return b.da<=0?null:MH(b,0);}
function Tl(){var a=this;B.call(a);a.bH=null;a.e1=null;a.cT=null;a.bO=null;a.ce=0.0;a.cz=0;a.ea=null;a.dS=null;a.dD=null;a.p0=null;a.mo=null;a.Cc=null;}
function KL(a){var b;b=a.ea;if(b!==null)b.ux();}
function K0(a){var b;b=a.ea;if(b!==null)b.wt();}
function MV(a,b){var c;c=a.e1.et!==(Ev()).activeElement?0:1;if(c)K0(a);a.ea=b;if(c)KL(a);}
function FL(a,b){K0(a);a.ea=b;KL(a);}
function ABj(a,b){if(a.ea===b)a.ea=null;}
function DN(a,b){return b!==a.ea?0:1;}
function Ki(a){return a.bH.cg;}
function Fi(a,b){return Gx(a.bH,b.h$,b.gV*a.ce,b.j4,0);}
function Cy(a,b){return Cg(b,a.ce);}
function OJ(a,b){var c;c=a.bH;if(!a.cz)c.pP=b;else c.of=b;Js(a.e1);}
function V$(){B.call(this);this.v4=null;}
function A1X(a,b,c,d){var e,f,g,h;e=(B3(a.v4.b7)).data;f=e.length;g=0;a:{while(g<f){if(e[g].W.dy(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function V9(){B.call(this);this.tl=null;}
function AMS(a,b){var c,d,e,f;b=b;c=a.tl;b=b.j;d=0;e=c.b7.da;a:{while(d<e){f=MH(c.b7,d);if(!BW(f.Q,b)&&!PM(f,b)&&!ACd(f,b)?0:1){c=MH(c.b7,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.wR;if(c!==null&&AGe(c.xM,b)?1:0){d=1;break b;}}d=0;}return d;}
function AE7(){var a=this;B.call(a);a.eQ=null;a.oU=0.0;a.iB=0.0;a.hd=0;}
function AXm(){var a=new AE7();ARD(a);return a;}
function ARD(a){var b;b=SV(0,0,2,20);a.eQ=b;a.oU=0.5;a.iB=0.0;IE(187,187,187,255,b.X);}
function Vb(a){return a.eQ.t.b;}
function SO(a){return a.eQ.t.a;}
function AAZ(a,b){var c,d;a:{c=a.hd;if(b>a.iB)while(true){d=a.iB+a.oU;a.iB=d;a.hd=a.hd?0:1;if(b>d)continue;else break a;}}return a.hd==c?0:1;}
function TV(a,b,c){W(a.eQ.u,b,c);}
function Yx(a,b){a.iB=b+a.oU*1.25;a.hd=1;}
function ABZ(a,b,c){if(a.hd)ZD(a.eQ,b,c.a,c.b);}
function ADK(){var a=this;B.call(a);a.f$=null;a.h=null;a.pO=null;a.rD=null;a.h1=null;a.jr=null;a.fa=null;a.lA=null;a.w=0;a.A=0;a.is=0;a.iT=null;a.iF=null;a.pi=null;a.fc=0;a.gz=0;a.gS=0;a.i1=FH;a.As=FH;a.A7=FH;a.qv=0;a.EH=0;a.dR=0;a.mD=0.0;a.fN=0;}
function A4l(a,b,c){var d=new ADK();AKX(d,a,b,c);return d;}
function ANX(a,b){var c=new ADK();AQ8(c,a,b);return c;}
function A4r(a,b,c){var d=new ADK();Vm(d,a,b,c);return d;}
function AKX(a,b,c,d){Vm(a,(AIu(b)).ke,c,d);}
function AQ8(a,b,c){Vm(a,b,null,c);}
function Vm(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rD=AMl();f=new Tj;f.fp=Q(NN,16);f.fm=0;f.dK=(-1);a.h1=f;a.iT=null;a.iF=BM();a.pi=BM();a.fc=1;a.gz=1;a.gS=1;a.dR=0;a.mD=0.0;a.fN=0;a.f$=d;a.pO=c;c=new ZE;g=e.length;b=Q(DG,Bd(1,g));if(!g)b.data[0]=XE(C(21));h=b.data;i=0;while(i<g){h[i]=XE(e[i]);i=i+1|0;}d=new Yj;f=new NK;QL(f);d.fb=f;c.e5=d;c.dN=JQ();c.dG=JQ();c.iJ=BM();if(!h.length){c=new BU;Y(c);N(c);}c.B=b;j=ACb(c);c.dg=AGL(ATm(KR(0,j,0),null,null));a.h=c;}
function Ea(a){var b;b=a.pO;if(b===null){b=a.f$;b=b===null?C(176):AHM(b.gM);}return b;}
function HD(a){var b;b=a.f$;return b===null?null:b.kp;}
function Ml(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gz=3;a.gS=3;a.fc=3;c=CQ(b[0]);d=EQ(b[1]);CQ(b[2]);if(b.length<5)N5(a.h,c,d);else{e=CQ(b[3]);f=e.data;g=EQ(b[4]);Xl(a.h,c,d,e,g,0);Tu(a,Jh(e,f.length),Oj(g));}if(a.fN){h=E2(a);i=JK(E3(),a.i1);j=new K;M(j);H(HK(H(H(j,h),C(227)),i),C(228));$rt_globals.console.info($rt_ustr(L(j)));}h=a.jr;if(h!==null)LT(h);}
function Lt(a){var b;Sr(a,DR(a.w,a.A),I$(a.h,a.w,a.A));if(!(a.iT!==null&&!EE(a.iF))){b=a.A;if(b>0)Sr(a,DR(a.w,b-1|0),I$(a.h,a.w,a.A-1|0));}}
function Sr(a,b,c){var d,e,f,g,h,i,j,k;ADY(a);d=Cq(a.h.dN,c);if(d!==null)c=d;a:{e=Cq(a.h.dG,c);if(e!==null){a.iT=LV(a.h,c);c=B7(e);while(true){if(!B_(c))break a;f=Ca(c);BB(a.iF,LV(a.h,f));}}}c=a.jr;if(c!==null){g=b.bq;h=b.bv;b=c.fy;f=Ea(c.d);e=HD(c.d);i=(B3(b.vG)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Bj(f,e)){b=b.DY;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new P3;e.En=c;e.Ep=f;e.Eo=g;e.Em=h;b.tH(f,g,h,e,c.j5);}}}
function ADY(a){a.iT=null;Ix(a.iF);}
function Tu(a,b,c){var d,e,f,g,h;if(a.fa!==null){a.A7=E3();d=a.h.cp;e=a.fa;f=new X_;f.zn=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BP(1);b.data[0]=d;h[2]=b;CV(e,f,C(229),g);}}
function K2(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jr=b;a.fa=c;if(c===null){d=a.h.B.data;e=d.length;f=0;while(f<e){S5(d[f]);f=f+1|0;}}else if(a.fc==1){a.i1=E3();b=Ea(a);if(BO(b,C(176))){a.gz=3;a.gS=3;a.fc=3;b=a.jr;if(b!==null)LT(b);}else{e=BO(b,C(177));f=BO(b,C(180));d=E_(a.h);g=d.data.length;h=!e?5120:10240;i=AH5(b);if(f)JN(a,d,i);else if(g<=h)JN(a,d,i);else if(!e){Va(a,Oj(d),i);JN(a,d,i);}else{Va(a,Oj(d),i);j=Oj(d);k=a.fa;c=new Q1;c.zp=a;l=Q(B,2);m=l.data;m[0]=j;j=BP(1);j.data[0]=i;m[1]=j;CV(k,c,C(230),l);a.gz=
2;JN(a,d,i);}}}}
function Va(a,b,c){var d,e;d=a.fa;e=new UM;e.zG=a;CV(d,e,C(231),I(B,[b,DX([c,250])]));a.gS=2;}
function JN(a,b,c){var d,e,f,g;d=a.fa;e=new WY;e.x6=a;f=Q(B,2);g=f.data;g[0]=b;b=BP(1);b.data[0]=c;g[1]=b;CV(d,e,C(232),f);a.fc=2;}
function E2(a){var b;b=a.f$;return b===null?C(21):ACh(b);}
function Mj(a){var b,c,d,e,f;if(a.fN){b=E2(a);c=new K;M(c);H(H(c,b),C(233));$rt_globals.console.info($rt_ustr(L(c)));}b=Ea(a);if(b===null)d=null;else{a:{e=(-1);switch(NU(b)){case -1655966961:if(!Bj(b,C(180)))break a;e=3;break a;case 3401:if(!Bj(b,C(179)))break a;e=2;break a;case 98723:if(!Bj(b,C(178)))break a;e=1;break a;case 3254818:if(!Bj(b,C(177)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(234);break b;case 2:d=C(235);break b;case 3:d=C(236);break b;default:d=null;break b;}d=C(237);}}if
(d===null)LT(a.jr);else{a.i1=E3();b=a.fa;c=new ABc;c.vi=a;f=Q(B,1);f.data[0]=E_(a.h);CV(b,c,d,f);}}
function Oi(a){var b;b=AT3(a.h.e5,null);WX(b);Tu(a,b.oF,b.mS);}
function ADy(){var a=this;B.call(a);a.yC=null;a.BY=null;a.qH=null;a.vG=null;a.vh=null;a.AR=null;}
function Oq(a,b,c){return Ry(a,B3(a.yC),b,c);}
function Za(a,b,c){return Ry(a,B3(a.BY),b,c);}
function Ry(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Bj(c,d))return g.ES;f=f+1|0;}return null;}
function ABF(a,b,c){var d,e,f,g;d=(B3(a.qH)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Bj(b,c))return g.EN;f=f+1|0;}return null;}
function Fq(){var a=this;B.call(a);a.ca=0;a.c_=null;a.cD=null;a.eC=null;a.dJ=0;}
var A6_=0;var A67=0;function Xq(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cD;j=i===b&&!i.je?0:1;if(j){a.cD=b;Nv(b,c.cg,a.c_.g4);}k=H9(Be(FE(b),e+2048|0),1024);l=a.eC;m=l.data.length;n=k<=m?0:1;if(n){a.eC=C8(l,k);while(m<k){a.eC.data[m]=CW(c);m=m+1|0;}}o=a.c_.hG;if(!(!j&&!n)){if(A6_){l=b.gj;$rt_globals.console.info("fMeasure"+l.data);A6_=0;}if(!A67){c=o.db;b="alphabetic";c.textBaseline=b;}else{b=o.db;c="top";b.textBaseline=c;}a.dJ=f/1024|0;p=0;while(p<k){Kd(a,o,d,a.dJ+p|0);p=p+1|0;}a.cD.je=0;}e=a.eC.data.length;if
(e&&f<=FE(a.cD)){f=f/1024|0;g=a.dJ;if(f!=g){if(Wf(f-g|0)>=e){g=0;while(g<e){Kd(a,o,d,f+g|0);g=g+1|0;}a.dJ=f;}else{while(true){g=a.dJ;if(g>=f)break;Kd(a,o,d,g+e|0);a.dJ=a.dJ+1|0;}while(true){g=a.dJ;if(g<=f)break;Kd(a,o,d,g-1|0);a.dJ=a.dJ-1|0;}}}}}
function Kd(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=X9(a,e);g=a.cD;if(f>=g.s.data.length)return;h=g.gj;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.ca;l=a.c_.g4;ER(b);a:{while(true){g=a.cD;if(f>=g.s.data.length)break a;m=l.data;g=JS(g,f);n=m[Kz(g)];o=!A67?LF(n,c):Na(n,c);m=h.data;Cn(b,n);B0(b,g.v,k,o);k=m[f]-j+a.ca;if(k>1024.0)break;f=f+1|0;}}h=a.eC.data;CM(h[d%h.length|0],b);}
function Qg(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eC.data.length;if(!o)return;if(g>FE(a.cD))return;p=a.cD;q=p.eW;r=p.s;s=g/1024|0;t=X9(a,g);u= -a.ca|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eC.data[s%o|0];bb=w[t];bc=z[t]+a.ca|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.ca|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.ca:2*a.ca|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.ca:2*a.ca|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.br.gp;if(bb===j)bo=h.br.rz;if(k!==null){p=B7(k);d:{while(B_(p)){if(BO(Ca(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.br.wq;}if(n!==null){w=n.nB;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AD6(h.d2,h,bi,n.g8);}if(!bn&&!bl){i.b=Be(i.b,FE(a.cD));AFY(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.ca:0)|0,(g
+bg|0)<=(i.b+(!y?a.ca:2*a.ca|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.ca:0)|0,g-x|0,bo);}else{bp=h.jL.data[bb.bZ];p=bn?h.br.kY:SU(bo,WM(h,bp.mO));Cr(a.c_.jq,g-x|0,0.0,bg,v);W(a.c_.ih,bg,f);Hc(a.c_,d,ba,u+c|0,b,bp.g2,p);}if((bb.bF&12)>>2>0){bc=u+c|0;B$(d,1);p=a.c_;bq=p.nD;bq.a=bg;x=b+p.t8|0;bk=x-p.BK|0;br=p.qQ;bs=x+br;ba=p.hp;TM();L8(d,bc,bk,bq,br,bs,ba,A7a.k9.g2);B$(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AFY(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.jL.data[h.bZ];o=n.g2;p=SU(m,WM(f,n.mO));q=f.br.kY;f=a.c_;r=f.jq;s=f.ih;t=l;u=i-j|0;v=u;w=e;Cr(r,t,0.0,v,w);W(s,u,e);Hc(a.c_,b,g,c,d,o,p);l=l+i|0;Cr(r,l-k|0,0.0,k,w);W(s,k,e);f=a.c_;c=c+i|0;Hc(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cr(r,t,0.0,i,w);W(s,i,e);Hc(a.c_,b,g,c-j|0,d,o,q);}
function SU(b,c){if(b!==null)c=b;return c;}
function X9(a,b){var c,d,e,f,g,h,i;c=a.cD;d=c.gj;e=0;f=c.s.data.length;g=b;b=BL(e,f);if(b>0){c=new BU;Y(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BL(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ADR(a){var b,c,d;b=a.eC.data;c=b.length;d=0;while(d<c){AGl(b[d]);d=d+1|0;}a.eC=a.c_.nO;a.cD=null;}
function AIG(a,b,c,d,e,f,g,h,i){var j,k;j=FE(a.cD);if(j)j=j+a.ca|0;if(!j)j=j-a.ca|0;k=Bd( -a.ca|0,j-g|0);if(k>=h)return;W(f,h-k|0,e);Bs(b,c+k|0,d,f,i);}
function Zd(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=Q(Fq,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.t_(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cD===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new Fq;g.ca=3;g.dJ=0;g.c_=d;g.eC=d.nO;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)ADR(q);j=j+1|0;}return i;}
function SM(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cD;if(e!==null)e.je=1;d=d+1|0;}}
function Op(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){ADR(b[d]);d=d+1|0;}}
function AF1(){A67=0;}
function AHz(){var a=this;B.call(a);a.f3=null;a.dn=null;a.e7=null;a.fD=null;a.ox=null;a.ok=null;}
function I_(){var a=new AHz();AXS(a);return a;}
function AXS(a){a.f3=new Bg;a.dn=new Bg;a.e7=new Bg;a.fD=new Bg;a.ox=new B2;a.ok=new B2;}
function Zn(a){var b;b=a.dn;return !Bc(b.a,b.b)?0:1;}
function IL(a,b){return Gj(b,a.e7,a.fD);}
function F3(a,b,c,d){var e,f,g,h,i;e=IL(a,b);f=Gj(b,a.f3,a.dn);if(!e&&!f)return null;if(!f){if(!d)c.g(UT(a,b.a-a.e7.a|0));else c.g(QG(a,b.b-a.e7.b|0));}g=!d?a.f3.a+(a.dn.a/2|0)|0:a.f3.b+(a.dn.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new Sc;b.v1=a;b.v2=c;b.v0=i;}else{b=new Sb;b.rS=a;b.rQ=c;b.rR=i;}return b;}
function H6(a,b,c){if(c!==null)BR(a.ox,c);if(b!==null)BR(a.ok,b);}
function AFg(b,c){var d;d=new ABN;d.tk=b;d.B9=c;return d;}
function QG(a,b){var c,d,e;c=a.fD.b;d=a.dn.b;e=c-d|0;return AFg(Be(Bd(0,b-(d/2|0)|0),e),e);}
function UT(a,b){var c,d,e;c=a.fD.a;d=a.dn.a;e=c-d|0;return AFg(Be(Bd(0,b-(d/2|0)|0),e),e);}
function Km(a,b,c,d,e,f,g){UY(a,b,c,d,e,f,g,1);}
function Rm(a,b,c,d,e,f,g){UY(a,b,c,d,e,f,g,0);}
function UY(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(YH(d,d,e),i);e=e-d|0;i=d-j|0;i=i?YH(b,i,e):0;if(!h){k=a.f3;k.a=i+c|0;k.b=f-g|0;l=a.dn;l.a=j;l.b=g;l=a.e7;l.a=c;l.b=k.b;k=a.fD;k.a=d;k.b=g;break a;}k=a.f3;k.a=f-g|0;k.b=i+c|0;l=a.dn;l.a=g;l.b=j;l=a.e7;l.a=k.a;l.b=c;k=a.fD;k.a=g;k.b=d;break a;}}W(a.fD,0,0);W(a.dn,0,0);}}
function Vc(a,b){GV(a,b);G1(a,b);}
function GV(a,b){var c;c=a.e7;Bs(b,c.a,c.b,a.fD,a.ox);}
function G1(a,b){var c,d;c=a.dn;c.a=c.a-2|0;c.b=c.b-2|0;d=a.f3;Bs(b,d.a+1|0,d.b+1|0,c,a.ok);b=a.dn;b.a=b.a+2|0;b.b=b.b+2|0;}
function F$(a,b,c){return IL(a,b)&&GI(c)?1:0;}
function AE6(){var a=this;B.call(a);a.E3=20;a.gx=null;a.ft=null;a.lt=0.0;a.lq=null;a.jk=0;a.kU=0;a.hi=0;a.c3=null;a.oz=null;a.fg=null;a.gJ=null;a.gH=0;}
function AHs(){var a=new AE6();A2a(a);return a;}
function A2a(a){a.E3=20;a.gx=new Bg;a.ft=new Bg;a.c3=BM();a.oz=DL(0);}
function ABA(a,b,c){var d,e,f,g,h;d=a.gH;if(b==d)return;e=a.c3.q;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){RM(a,b);a.gH=b;}else{XC(a,c);if(a.gH>=b)while(true){if(h<g)break a;a.gH=Po(BG(a.c3,h%e|0),a.fg,a.gJ,a.gH,b,f,a.lt);h=h+(-1)|0;}while(g<=h){a.gH=Po(BG(a.c3,g%e|0),a.fg,a.gJ,a.gH,b,f,a.lt);g=g+1|0;}}}}
function LG(a,b){if(b===null)b=DL(0);a.oz=b;}
function AAR(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hi;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c3;h=BG(h,g%h.q|0);i=a.gx;j=a.oz;k=h.fr.b;l=d.la;m=b+f|0;n=h.ct;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&VS(d,j,r,l)!==l.k6?0:1){k=Bc((q-p|0)+1|0,h.ct);W(h.jb,BQ(h.cP),k);Cr(h.jV,0.0,Bc(p,h.ct),BQ(h.cP),k);t=r;}else{u=VS(d,j,r,l);Ni(h,e,f+Bc(p,h.ct)|0,i,l.oX,u);W(h.jb,BQ(h.cP),h.ct);Cr(h.jV,0.0,Bc(q,h.ct),BQ(h.cP),h.ct);p=q;}q=q+1|0;r=t;}u=VS(d,j,r,l);Ni(h,
e,f+Bc(p,h.ct)|0,i,l.oX,u);g=g+1|0;f=f+a.hi|0;}}
function SK(a,b,c,d){var e,f,g,h,i,j;e=a.c3.q;while(true){f=a.c3.q;g=Bc(f,a.hi);if(g>(d+a.kU|0))break;h=BF(0,g);i=new QK;g=a.ft.a;f=a.kU;j=a.lq;i.jb=new Bg;i.jV=new B2;i.qb=h;i.ec=20;i.ct=f;i.fr=BF(g,20*f|0);i.hu=LF(j,f);if(i.cP===null)i.cP=CW(b);BB(a.c3,i);}if(f==e)return;XC(a,b);RM(a,c);}
function RM(a,b){var c,d,e,f,g,h,i,j,k;c=a.c3;d=c.q;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B7(c);while(B_(c)){f=Ca(c);g=a.fg;h=a.lt;ER(g);i=0;while(true){j=f.ec;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;GQ(f,g,Dl(e),Bc(f.ct,i)+f.hu|0,h);i=i+1|0;}CM(f.cP,g);f.w6=g.jf;}}
function YD(a,b,c,d){a.lq=b;a.kU=c;a.hi=c*20|0;a.jk=d;YF(a);}
function XC(a,b){var c;c=a.fg;if(!(c!==null&&c.jf==a.jk)){c=D5(b,a.ft.a,a.hi,a.jk);a.fg=c;Cn(c,a.lq);ZY(a.fg,2);}c=a.gJ;if(!(c!==null&&c.jf==a.jk)){b=D5(b,a.ft.a,a.kU,a.jk);a.gJ=b;Cn(b,a.lq);ZY(a.gJ,2);}}
function IB(a){Fr(a.c3,new ADs);Ix(a.c3);YF(a);}
function YF(a){a.fg=BV(a.fg,null);a.gJ=BV(a.gJ,null);}
function Sd(a,b,c,d,e){Co(a.gx,b);W(a.ft,c,d);a.lt=e;}
function Xf(){B.call(this);this.Dp=null;}
function Xe(){B.call(this);this.qt=null;}
function AMj(a,b){var c;c=a.qt;F1(c,FT(b,KW(c)));}
function Xd(){B.call(this);this.ta=null;}
function ALF(a,b){var c;c=a.ta;IJ(c,FT(b,AAY(c)));}
function AJ9(){var a=this;B.call(a);a.jq=null;a.ih=null;a.nD=null;a.hp=null;a.g4=null;a.nO=null;a.cV=null;a.hG=null;a.qQ=0.0;a.d4=0;a.t8=0;a.BK=0;a.iN=0;}
function APM(a){var b=new AJ9();AS_(b,a);return b;}
function AS_(a,b){var c;a.jq=new B2;a.ih=new Bg;a.nD=new Bg;c=new B2;a.hp=c;a.g4=Q(Lv,4);a.nO=Q(Iv,0);a.iN=b;Ly(c);}
function Yc(a){a.hG=BV(a.hG,null);}
function Sh(a,b,c){var d,e;d=CZ(EB(a.cV)*b);a.d4=d;e=a.cV;a.t8= -( -((d+e.em+e.eG)/2.0)|0)|0;ADV(a,c);return a.d4;}
function PY(a,b){var c,d;Ly(a.hp);c=a.hp;UH(c,b,c);a.qQ=WV(a.hp);c=a.hp;d=c.bs+c.bf+1.5|0;a.BK=d;W(a.nD,0,d*2|0);}
function ADV(a,b){a.hG=BV(a.hG,D5(b,1024,a.d4,a.iN));}
function Hc(a,b,c,d,e,f,g){var h,i;h=a.ih;if(h.a&&h.b){i=a.jq;if(i.bC!==0.0&&i.bf!==0.0){DI(b,d,e,h,i,c,f,g,a.iN);return;}}}
function Xc(){B.call(this);this.A5=null;}
function AUP(a){var b,c;b=a.A5;c=b.j7?0:1;b.j7=c;b=new K;M(b);Jt(H(b,C(238)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xj(){B.call(this);this.xJ=null;}
function AW4(a){var b,c;b=a.xJ;c=b.k0^1;b.k0=c;b=new K;M(b);Jt(H(b,C(239)),c);$rt_globals.console.info($rt_ustr(L(b)));}
function Xi(){B.call(this);this.tX=null;}
function A20(a){var b,c,d,e,f;b=a.tX;c=(b.ed+3|0)%6|0;b.ed=c;d=b.eV.data;e=d.length;f=0;while(f<e){b=d[f];b.ca=c;b=b.cD;if(b!==null)b.je=1;f=f+1|0;}}
function Xh(){B.call(this);this.wv=null;}
function APT(a){var b;b=a.wv;b.b3=b.b3?0:1;IB(b.dd);b.dd=AHs();N4(b);AAs(b,b.i,b.k,b.cJ.ce);}
function Xg(){B.call(this);this.rh=null;}
function ARA(a){var b;b=a.rh;b.lV=b.lV?0:1;}
function Xb(){B.call(this);this.zB=null;}
function A2u(a){var b;b=a.zB;b.pS=b.pS?0:1;}
function Uw(){B.call(this);this.su=null;}
function APW(a){var b;b=a.su;Yz(b,b.lG,b.n2);}
function Ux(){B.call(this);this.rI=null;}
function AZJ(a){var b;b=a.rI;Yz(b,b.n2,b.lG);}
var AGc=G();
function Ns(){B.call(this);this.Di=null;}
var A6J=null;var A7b=null;function AXT(){AXT=Bn(Ns);A2N();}
function ANI(a){var b=new Ns();AHX(b,a);return b;}
function AHX(a,b){AXT();a.Di=b;}
function A2N(){A6J=ANI(C(240));A7b=ANI(C(241));}
var AEF=G(0);
function AIO(b,c,d){return IE(b,c,d,255,new B2);}
function IE(b,c,d,e,f){Cr(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function U5(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOv(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bn=g+i;e.bs=h+i;e.bf=j+i;return e;}
function Iw(b,c,d,e,f){f=U5(b,c,d,f);f.bC=e;return f;}
function HW(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var ZT=G();
function AOA(a,b){var c,d,e;c=b.cM;d=c&&!b.bL&&!b.dA&&!b.ky?1:0;a:{if(d){d=b.bm;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bL&&!c&&!b.dA&&!b.ky?1:0;d=d&&b.bm==46?1:0;}b:{if(!d){e=b.bm;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.oK=1;}return 0;}
function ZS(){B.call(this);this.xD=null;}
function AV4(a,b){var c;c=a.xD.ea;return c!==null&&c.it(b)?1:0;}
function Tx(){var a=this;B.call(a);a.bd=null;a.wR=null;a.CK=null;a.EY=null;a.Q=null;a.dh=null;a.W=null;a.ga=null;a.pN=0;}
function AEj(a){var b=new Tx();ARr(b,a);return b;}
function A2h(a,b){var c=new Tx();AFf(c,a,b);return c;}
function ARr(a,b){AFf(a,b,AUm());}
function AFf(a,b,c){var d;a.bd=b;d=new T_;Ey(d);d.mF=new B2;d.f7=b;a.Q=d;a.W=c;}
function S9(a,b){var c,d;if(a.dh===null){c=new QF;c.gb=new Bg;c.kD=new Bg;a.dh=c;d=a.ga;if(d!==null)AAi(c,d);}a.dh.i6=b;}
function DK(a,b){var c;c=a.Q;c.eH=c.eH|(BO(c.jH,b)?0:1);c.jH=b;Iu(a);}
function AAj(a,b,c){var d,e,f;d=a.Q;e=BO(d.hA,b)?0:1;f=c===d.kJ?0:1;if(e){d.hA=b;d.ey=null;QA(d,0);}d.eH=d.eH|(!e&&!f?0:1);d.kJ=c;d.ik=0;Iu(a);}
function FY(a,b){var c;a.ga=b;c=b.tc;BJ(b);AAj(a,c,3.0);c=a.dh;if(c!==null)AAi(c,b);}
function JV(a){var b;b=a.Q;b.dV=BV(b.dV,null);b.ey=null;a.W=BV(a.W,null);b=a.dh;if(b!==null){NQ(b);b.i6=null;}}
function K9(a,b){var c,d,e;c=a.W;d=c.i;e=c.k;b=BV(c,b);a.W=b;b.dz(d,e,a.bd.ce);}
function Et(a,b,c){a.W.dz(b,c,a.bd.ce);Iu(a);}
function Iu(a){var b,c,d;if(a.bd.ce!==0.0){b=a.Q;if(b.hA!==null){c=a.W.k.a;b.k.a=c;d=b.dV;if(d!==null&&c!=BQ(d)&&!(c>=b.ik&&BQ(b.dV)>=b.ik))b.eH=1;b=a.Q;b.bR=a.bd.ce;if(Ob(b))c=0;else{b=a.Q;QA(b,Vl(b));c=b.k.b;}b=a.Q.i;d=a.W.i;W(b,d.a,d.b-c|0);b=a.dh;if(b!==null)Co(b.gb,a.Q.i);return;}}}
function ACu(a){return Vl(a.Q);}
function Ma(a,b){return ACd(a,b.j);}
function ACd(a,b){var c;c=!(a.pN&1)?0:1;return !c&&!BW(a.W,b)?0:1;}
function L2(b,c){if(b<0)c=C(242);else if(b>0)c=C(243);return c;}
function Oy(a,b,c){var d;d=a.Q.i.a;return (d-c|0)<=b&&b<d?1:0;}
function MF(a,b,c){var d,e;d=a.Q;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function M8(a,b,c){var d;d=a.Q.i.b;return (d-c|0)<=b&&b<d?1:0;}
function KI(a,b,c){var d,e;d=a.W;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function Od(a,b,c){var d,e,f;d=a.Q.i.b-c|0;e=a.W;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function ADg(a,b,c){var d,e;d=a.Q.i.b+c|0;e=a.W;return AJg(b,d,(e.i.b+e.k.b|0)-c|0);}
function M0(a,b,c){var d,e,f;d=a.Q;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Xa(a,b,c){var d,e;d=a.Q;e=d.i.a;return AJg(b,e+c|0,(e+d.k.a|0)-c|0);}
function AJg(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BL(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function PM(a,b){var c;a:{b:{c:{c=Cy(a.bd,7.0);if(M0(a,b.a,c)){if(M8(a,b.b,c))break c;if(KI(a,b.b,c))break c;}if(!Od(a,b.b,c))break b;if(!Oy(a,b.a,c)&&!MF(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function J3(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bg;f=new Bg;g=b.a;h=b.b;b=a.W;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new Vi;b.uX=a;b.uY=e;b.u7=f;b.u8=c;b.u4=g;b.u5=j;b.u1=l;b.u2=d;b.uZ=h;b.u0=k;b.vL=m;return b;}
function Kk(){var a=this;B.call(a);a.u=null;a.t=null;a.X=null;a.bl=null;}
function Sj(){var a=new Kk();AB1(a);return a;}
function SV(a,b,c,d){var e=new Kk();AMV(e,a,b,c,d);return e;}
function AB1(a){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;}
function AMV(a,b,c,d,e){a.u=new Bg;a.t=new Bg;a.X=new B2;a.bl=new B2;Hi(a,b,c,d,e);}
function Hi(a,b,c,d,e){W(a.u,b,c);W(a.t,d,e);}
function AA1(a){W(a.t,0,0);}
function K$(a){var b;b=a.t;return Bc(b.a,b.b)?0:1;}
function Fb(a,b){return Gj(b,a.u,a.t);}
function ZD(a,b,c,d){var e;e=a.u;Bs(b,e.a+c|0,e.b+d|0,a.t,a.X);}
function VH(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.a+d|0;e=g.b+e|0;g=a.t;h=a.bl;i=a.X;Gu(b,b.iR);GF(b.iR,b.Y,d,e,g,b.c6);NY(b.iR,b.Y,c);g=b.iR;j=b.Y;FC(j,g.we,h);FC(j,g.wc,i);c=g.sQ;j.uniform2f(c,f,0.0);F0(b);}
var Fl=G();
function Nq(){Fl.call(this);this.ES=null;}
function AAK(){Fl.call(this);this.EN=null;}
function YO(){Fl.call(this);this.DY=null;}
var Hg=G(0);
var Sq=G(0);
function B2(){var a=this;B.call(a);a.bn=0.0;a.bs=0.0;a.bf=0.0;a.bC=0.0;}
function ADH(a,b,c,d){var e=new B2();A0g(e,a,b,c,d);return e;}
function AK3(a){var b=new B2();AJ$(b,a);return b;}
function A0g(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function Cr(a,b,c,d,e){a.bn=b;a.bs=c;a.bf=d;a.bC=e;}
function AJ$(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;}
function BR(a,b){a.bn=b.bn;a.bs=b.bs;a.bf=b.bf;a.bC=b.bC;return a;}
function AT8(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BE(a)===BE(b)){b=b;if(b.bn===a.bn&&b.bs===a.bs&&b.bf===a.bf&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
var LC=G(0);
function AIm(){var a=this;Fo.call(a);a.cG=null;a.q=0;}
function BM(){var a=new AIm();AOh(a);return a;}
function AOh(a){a.cG=Q(B,10);}
function MN(a,b){var c,d;c=a.cG.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cG=C8(a.cG,d);}}
function BG(a,b){Kx(a,b);return a.cG.data[b];}
function AZu(a){return a.q;}
function BB(a,b){var c,d;MN(a,a.q+1|0);c=a.cG.data;d=a.q;a.q=d+1|0;c[d]=b;a.b2=a.b2+1|0;return 1;}
function AJs(a,b,c){var d,e,f;QB(a,b);MN(a,a.q+1|0);d=a.q;e=d;while(e>b){f=a.cG.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cG.data[b]=c;a.q=d+1|0;a.b2=a.b2+1|0;}
function EN(a,b){var c,d,e,f;Kx(a,b);c=a.cG.data;d=c[b];e=a.q-1|0;a.q=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b2=a.b2+1|0;return d;}
function AG0(a,b){var c;c=K7(a,b);if(c<0)return 0;EN(a,c);return 1;}
function Ix(a){AEQ(a.cG,0,a.q,null);a.q=0;a.b2=a.b2+1|0;}
function AIA(a,b,c){var d,e,f,g,h,i;QB(a,b);if(c.eE())return 0;MN(a,a.q+c.c1()|0);d=c.c1();e=a.q;f=e-1|0;while(f>=b){g=a.cG.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.q=e+d|0;h=c.b9();i=0;while(i<d){g=a.cG.data;e=b+1|0;g[b]=h.b$();i=i+1|0;b=e;}a.b2=a.b2+1|0;return 1;}
function Kx(a,b){var c;if(b>=0&&b<a.q)return;c=new BH;Y(c);N(c);}
function QB(a,b){var c;if(b>=0&&b<=a.q)return;c=new BH;Y(c);N(c);}
function Fr(a,b){var c;c=0;while(c<a.q){b.g(a.cG.data[c]);c=c+1|0;}}
function Lv(){var a=this;B.call(a);a.oe=null;a.Cp=null;a.oV=0.0;a.CD=0;a.CT=0;a.tj=0;a.Dx=0;a.em=0.0;a.eG=0.0;a.Ct=0.0;a.p1=0.0;a.Cz=0;a.qU=null;}
function LF(a,b){return Na(a,b)+a.tj|0;}
function Na(a,b){return (b-EB(a)|0)/2|0;}
function EB(a){return CZ(a.em+a.eG);}
function Nc(a,b){return CZ((a.em+a.eG)*b);}
function Iv(){var a=this;B.call(a);a.eJ=null;a.f1=null;a.eS=null;}
var A6s=0;function AGl(a){var b;b=a.f1;if(b!==null){A6s=A6s-1|0;a.eJ.dZ.deleteTexture(b);a.f1=null;}}
function BQ(a){return a.eS.a;}
function CO(a){return a.eS.b;}
function SZ(a,b,c,d){var e;e=a.eS;e.a=b;e.b=c;Ol(a);a.eJ.dZ.texStorage2D(3553,1,d,b,c);e=a.eJ.dZ;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Ol(a){var b,c;b=a.eJ.dZ;c=a.f1;b.bindTexture(3553,c);}
function CM(a,b){WC(a,b.nR,b.nk,32856);YK(a,b,0,0);}
function WC(a,b,c,d){var e,f,g,h;a:{e=a.eS;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){Ol(a);break a;}e=a.eJ.dZ;h=a.f1;e.deleteTexture(h);a.f1=a.eJ.dZ.createTexture();SZ(a,b,c,d);break a;}}SZ(a,b,c,d);}}
function JJ(a,b,c,d){Ol(a);YK(a,b,c,d);}
function YK(a,b,c,d){var e;e=a.eJ.dZ;b=b.i7;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var YC=G(0);
var A7c=0.0;function Ly(b){Cr(b,1.0471975803375244,0.75,1.25,0.375);}
function UH(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:Jj(b.bC,Jj(c,A7c));Cr(d,b.bn/c,b.bs*c,ATy(b.bf*c,1.25),e);}
function WV(b){var c;c=b.bs;return c-(c|0)>=0.25?0.0:0.5;}
function AEi(){A7c=M4(M4(0.5,0.375),4.0);}
var OD=G(0);
function GI(a){return DY(a,null);}
function Rl(b){var c;c=new ZN;c.vC=b;return c;}
function YW(){B.call(this);this.tA=null;}
function AXy(a){KL(a.tA);}
function YV(){B.call(this);this.v9=null;}
function AUB(a){K0(a.v9);}
function AKP(){var a=this;B.call(a);a.bN=null;a.bB=null;a.dt=0;}
function AMl(){var a=new AKP();A2A(a);return a;}
function AWg(a){var b=new AKP();AQP(b,a);return b;}
function A2A(a){a.bN=new Hh;a.bB=new Hh;}
function AQP(a,b){a.bN=new Hh;a.bB=new Hh;JI(a,b);}
function JI(a,b){ABQ(a.bN,b.bN);ABQ(a.bB,b.bB);a.dt=b.dt;}
function N1(a,b,c){Cf(a.bB,b,c);if(!a.dt)Cf(a.bN,b,c);}
function QI(a,b){Cf(a.bN,b,0);Cf(a.bB,b+1|0,0);}
function Er(a){if(RR(a.bN,a.bB)>0)return a.bB;return a.bN;}
function F5(a){if(RR(a.bN,a.bB)<0)return a.bB;return a.bN;}
function AJ7(a,b){var c,d,e,f;c=a.bN;d=c.K;e=a.bB;if(d==e.K&&c.ba==e.ba?1:0)return null;c=Er(a);e=F5(a);d=c.K;if(d<=b){f=BL(b,e.K);if(f<=0)return BF(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dw(a){var b,c;b=a.bN;c=a.bB;return (b.K==c.K&&b.ba==c.ba?1:0)?0:1;}
function Tj(){var a=this;B.call(a);a.fp=null;a.fm=0;a.dK=0;}
function ACl(a,b){var c,d,e;c=a.fm;d=a.fp;if(c==d.data.length)a.fp=C8(d,c+16|0);d=a.fp.data;e=a.fm;a.fm=e+1|0;d[e]=b;}
function ZI(a){var b,c,d;b=a.dK;c=a.fm-1|0;if(b==c)a.dK=b-1|0;d=a.fp.data;a.fm=c;d[c]=null;}
var G0=G();
function ZE(){var a=this;G0.call(a);a.B=null;a.dg=null;a.e5=null;a.dN=null;a.dG=null;a.iJ=null;a.lC=null;a.cp=0;a.np=0;a.z5=0.0;}
function Cd(a,b){return a.B.data[b];}
function CK(a){return a.B.data.length;}
function ACb(a){return FD(a,CK(a));}
function Gz(a,b){return a.B.data[b].S;}
function AKF(a,b,c){var d,e,f,g,h;d=a.B;e=d.data;f=e[b];d=C8(d,e.length+1|0);e=d.data;a.B=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=D7(Q(Cx,0));a.B.data[b+1|0]=f;}else if(c==f.S){e[b]=f;e[b+1|0]=D7(Q(Cx,0));}else{e=(IQ(f,c)).data;d=a.B.data;d[b]=e[0];d[b+1|0]=e[1];}F4(a,b,c,0,C(205));}
function Lz(a,b){var c,d,e,f,g,h,i;c=a.B.data;d=c[b];e=c[b+1|0];f=D7(LW(d.s,e.s));g=a.B;h=g.data.length;if(b<h&&b>=0){i=Q(DG,h-1|0);c=i.data;Zx(g,b,i);c[b]=f;a.B=i;return;}d=new Bu;Y(d);N(d);}
function OY(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.B.data;if(!(c<d[b].S?0:1)){d=(Cd(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F4(a,b,c,1,NB(e));h=a.B.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=Zx(d,e,Q(Cx,f-1|0));else{j=i[e];if(c<=0)k=Ec(Dv(j.v,1),j.bZ,j.bF);else if(c>=(J(j.v)-1|0)){k=new Cx;l=j.v;ABb(k,Cv(l,0,J(l)-1|0),j.bZ,j.bF);}else{d=B5(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=Ec(Hr(d),j.bZ,j.bF);}i[e]=k;}h.S=h.S-1|0;E1(h);}else if(b!=(d.length-1|0)){F4(a,b,c,1,C(205));Lz(a,b);}}
function AD1(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){Z2(a.B.data[b],c,e[0]);return;}g=f-1|0;d=(IQ(a.B.data[b],c)).data;h=d[0];i=d[1];d=a.B;j=C8(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);My(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Gq(e[m])?XE(e[m]):D7(Q(Cx,0));d[b+m|0]=k;m=m+1|0;}My(i,0,0,e[g]);d[b+g|0]=i;a.B=j;}
function UB(a,b){var c,d,e,f,g,h,i;c=Er(b);d=F5(b);e=c.K;if(e==d.K)return Cv(FK(a.B.data[e]),c.ba,d.ba);f=new K;M(f);b=a.B.data[c.K];e=c.ba;BN(BY(f,Dv(FK(b),e)),10);g=a.B.data;e=c.K+1|0;h=d.K;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AEc(BY(f,FK(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.B.data[d.K];h=d.ba;BY(f,Cv(FK(b),0,h));return L(f);}b=new Oe;Y(b);N(b);}
function O8(a,b,c){var d;ACQ(a,b);d=Er(b);F4(a,d.K,d.ba,1,c);}
function ACQ(a,b){var c,d,e,f,g,h,i;a:{c=Er(b);d=F5(b);e=c.K;if(e==d.K)HL(a.B.data[e],c.ba,d.ba);else{b=a.B.data[e];HL(b,c.ba,b.S);HL(a.B.data[d.K],0,d.ba);e=c.K+1|0;f=d.K;g=a.B;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(DG,(h-f|0)+e|0);AFw(g,e,f,i);a.B=i;Lz(a,c.K);break a;}b=new Bu;Y(b);N(b);}b=new Bu;Y(b);N(b);}}}
function I$(a,b,c){return DR(b,GL(Cd(a,b),c));}
function ADe(a,b){var c,d,e;c=0;d=0;while(true){e=a.B.data.length;if(c>=e)break;if((d+(Cd(a,c)).S|0)>=b)return BF(c,b-d|0);d=d+((Cd(a,c)).S+1|0)|0;c=c+1|0;}return BF(e,0);}
function FD(a,b){var c,d,e;c=0;d=a.B.data.length;e=0;while(e<b){c=c+Gz(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function LV(a,b){return Og(Cd(a,b.bq),b.bv);}
function E_(a){var b,c,d,e,f,g,h,i,j;b=B5(ACb(a));c=b.data;d=a.B.data.length;e=0;f=0;while(e<d){g=a.B.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;QS(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F4(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cp=a.cp+1|0;f=a.iJ;g=Q(G_,1);h=new G_;h.eg=b;h.e0=c;i=Mc(e,C(205),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BF(b,c+J(i[0])|0);break a;}k=BF((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BF(b,c);}i=g.data;h.pn=k;h.n6=d;h.gQ=e;i[0]=h;BB(f,g);Ng(a,b,c,d,e);}
function Ng(a,b,c,d,e){var f;f=FD(a,b)+c|0;if(!d){XD(a.dg,f,J(e));Ts(a.e5,f,J(e));}else{UU(a.dg,f,J(e));Pk(a.e5,f,J(e));}}
function WI(a,b){var c,d,e;c=Mc(b.gQ,C(205),(-1));if(b.n6){AD1(a,b.eg,b.e0,c);XD(a.dg,FD(a,b.eg)+b.e0|0,J(b.gQ));Ts(a.e5,FD(a,b.eg)+b.e0|0,J(b.gQ));}else{c=c.data;d=AMl();Cf(d.bN,b.eg,b.e0);e=c.length;if(e==1)Cf(d.bB,b.eg,b.e0+J(c[0])|0);else Cf(d.bB,(b.eg+e|0)-1|0,J(c[e-1|0]));ACQ(a,d);UU(a.dg,FD(a,b.eg)+b.e0|0,J(b.gQ));Pk(a.e5,FD(a,b.eg)+b.e0|0,J(b.gQ));}return b.pn;}
function ABn(a){return a.np==a.cp?0:1;}
function KD(a){a.np=a.cp;}
function M_(a){var b,c,d;a.lC=BP(a.B.data.length+1|0);b=0;while(b<a.B.data.length){c=a.lC.data;d=b+1|0;c[d]=(c[b]+(Cd(a,b)).S|0)+1|0;b=d;}}
function Vw(a,b){var c,d,e,f,g,h;c=a.lC;if(c===null){d=0;e=0;a:{while(true){c=a.B.data;f=c.length;if(e>=f)break;g=c[e].S;if(b<=(d+g|0)){h=DR(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DR(f,0);}return h;}d=AJ1(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DR(d,b-(d<0?0:a.lC.data[d])|0);if(h.bv>=(Cd(a,h.bq)).S){h.bq=h.bq+1|0;h.bv=0;}return h;}
var L7=G(0);
function FR(a){return LX(a.ti(),a.o7());}
function LX(b,c){var d,e,f;b=b.data;d=b.length;if(!d)return c;e=new K;M(e);f=0;while(f<d){BN(BY(e,b[f]),47);f=f+1|0;}return L(BY(e,c));}
var Tn=G(0);
function SH(){var a=this;B.call(a);a.ij=null;a.f8=null;a.h4=null;}
function AJ4(a,b){var c=new SH();AO6(c,a,b);return c;}
function A3a(a,b,c){var d=new SH();AEC(d,a,b,c);return d;}
function AO6(a,b,c){AEC(a,b,c,Q(BK,0));}
function AEC(a,b,c,d){a.ij=b;a.f8=c;a.h4=d;}
function DW(a){var b;b=a.ij;return H3(b!==null?b.name:a.f8.name);}
function AL2(a){return a.h4;}
function UO(a,b,c){var d,e,f;d=AKQ(c);e=new Vf;e.q8=b;b=a.f8;if(b!==null)b.text().then(Bv(e,"f"),Bv(d,"f"));else{b=a.ij.getFile();f=new Vg;f.rZ=e;f.r0=d;b.then(Bv(f,"f"),Bv(d,"f"));}}
function AKQ(b){var c;c=new To;c.yr=b;return c;}
function AX2(a){var b,c,d,e,f,g,h,i;if(a.f8===null)b=LX(a.h4,DW(a));else{c=a.h4;b=DW(a);d=a.f8.size;e=d|0;if(e!==d){f=DW(a);g=new K;M(g);H(H(g,C(244)),f);$rt_globals.console.info($rt_ustr(L(g))+d);e=0;}if(c===null)f=C(23);else{g=new K;M(g);BY(g,C(36));h=0;while(true){i=c.data;if(h>=i.length)break;if(h>0)BY(g,C(37));H(g,i[h]);h=h+1|0;}BY(g,C(38));f=L(g);}g=new K;M(g);U(H(H(H(H(g,f),C(245)),b),C(246)),e);b=L(g);}return b;}
function ALP(a){return (AFE(DW(a))*31|0)+AGu(a.h4)|0;}
var ACH=G(0);
function AJQ(){B.call(this);this.iK=null;}
function A3o(a){var b=new AJQ();AY5(b,a);return b;}
function AY5(a,b){a.iK=b;}
function EQ(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iK));}
function CQ(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iK));}
function AWk(a){var b,c;b=a.iK.byteLength;c=new K;M(c);H(U(H(c,C(247)),b),C(248));return L(c);}
function ZN(){B.call(this);this.vC=null;}
function DY(a,b){ZF(a.vC,b);return 1;}
function Hh(){var a=this;B.call(a);a.K=0;a.ba=0;}
function Cf(a,b,c){a.K=b;a.ba=c;}
function ABQ(a,b){a.K=b.K;a.ba=b.ba;}
function RR(a,b){var c;c=BL(a.K,b.K);if(c)return c;return BL(a.ba,b.ba);}
function NN(){var a=this;B.call(a);a.ps=null;a.oB=null;}
function L1(a){return a.ps.bq;}
function KQ(a){return a.ps.bv;}
function DG(){var a=this;B.call(a);a.s=null;a.S=0;a.gj=null;a.eW=null;a.eu=null;a.ii=null;a.g3=0;a.je=0;a.jz=0;}
var A7d=0;var A7e=0;var A68=0;function XE(a){var b=new DG();AKe(b,a);return b;}
function D7(a){var b=new DG();Zh(b,a);return b;}
function AKe(a,b){var c;c=Q(Cx,1);c.data[0]=AIX(b);Zh(a,c);}
function Zh(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.S=d;E1(a);}
function Jo(a){return a.s.data.length;}
function JS(a,b){return a.s.data[b];}
function GL(a,b){var c;c=Kh(a,b);return c<=0?0:a.eu.data[c-1|0];}
function Kh(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eu!==null&&!a.jz)){U$(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.eu.data[d]=e;d=d+1|0;}a.jz=0;}d=ABl(a.eu,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function Og(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Kh(a,b)];}
function HL(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.S){a.s=Q(Cx,0);E1(a);a.S=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BL(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=Zx(g,e,Q(Cx,g.data.length-1|0));a.S=a.S-d|0;E1(a);return;}a.s.data[e]=Ec(Fs(Cv(k.v,0,b),Dv(k.v,c)),k.bZ,k.bF);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=Ec(Cv(l.v,0,b),l.bZ,l.bF);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=Ec(Dv(m.v,c),m.bZ,m.bF);g=a.s;a.s=AFw(g,e,f,Q(Cx,(g.data.length-f|0)+e|0));}a.S=a.S-d|0;E1(a);}
function IQ(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DG,[D7(Q(Cx,0)),a]);if(b>=a.S)return I(DG,[a,D7(Q(Cx,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DG,[D7(Lq(c,0,Q(Cx,d))),D7(Lq(c,d,Q(Cx,f-d|0)))]);h=e[d];e=Lq(c,0,Q(Cx,d+1|0));i=e.data;j=Lq(c,d,Q(Cx,f-d|0));c=j.data;i[d]=Ec(Cv(h.v,0,b),h.bZ,h.bF);c[0]=Ec(Dv(h.v,b),h.bZ,h.bF);return I(DG,[D7(e),D7(j)]);}
function Z2(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}My(a,d,b,c);}
function My(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Gq(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cx,1);h.data[0]=AIX(d);a.s=h;}else if(!b&&!c){h=Q(Cx,g+1|0);f=h.data;C6(e,0,h,1,g);f[0]=AIX(d);a.s=h;}else{i=f[b];if(c<=0)j=Ec(Fs(d,i.v),i.bZ,i.bF);else if(c>=J(i.v))j=Ec(Fs(i.v,d),i.bZ,i.bF);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B5(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=Ec(Hr(e),i.bZ,i.bF);}f[b]=j;}a.S=a.S
+J(d)|0;E1(a);}
function Pm(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<L6(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Nv(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gj;if(!(e!==null&&e.data.length>=d)){a.gj=ALx(d);a.eW=BP(d);a.g3=1;}U$(a);if(!a.g3)A7e=A7e+1|0;else{f=0;g=0.0;A7d=A7d+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.eu.data[h]=f;Cn(b,i[Kz(j)]);g=g+Eo(b,j.v);a.gj.data[h]=g;a.eW.data[h]=g+0.5|0;h=h+1|0;}a.S=f;a.g3=0;a.jz=0;}}
function U$(a){var b;b=a.eu;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eu=BP(a.s.data.length);a.jz=1;}}
function S5(a){a.g3=1;a.ii=null;}
function E1(a){S5(a);a.je=1;a.jz=1;}
function ZX(a,b,c,d){var e,f,g,h,i,j,k;if(a.ii===null)a.ii=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.ii.data[d];if(e===null){e=c.data;f=a.s.data[d];Cn(b,e[Kz(f)]);f=f.v;e=BP(J(f)-1|0);c=Gs(f);g=!d?0.0:a.gj.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BK;k=i+1|0;OB(f,c,0,k);h[i]=g+Eo(b,f)+0.5|0;i=k;}a.ii.data[d]=e;}return e;}
function GW(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.g3&&a.eW!==null))Nv(a,c,d);if(b>=a.S)return a.eW.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BL(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eW.data[f];}return (ZX(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FE(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eW.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function G8(a,b){var c;if(b>=a.S)return b+1|0;c=Kh(a,b);return a.eu.data[c];}
function FK(a){var b,c,d,e;b=new K;GM(b,a.S);c=a.s.data;d=c.length;e=0;while(e<d){BY(b,c[e].v);e=e+1|0;}return L(b);}
function AFv(){A68=0;}
function Yj(){var a=this;B.call(a);a.fB=null;a.fb=null;}
function AWa(a,b){var c=new Yj();AXa(c,a,b);return c;}
function AXa(a,b,c){a.fB=b;a.fb=c;}
function Ts(a,b,c){var d;d=a.fB;if(d===null)return;Zf(a,d,b,c);}
function Pk(a,b,c){var d;d=a.fB;if(d===null)return;ABq(a,d,b,c);}
function Zf(a,b,c,d){var e,f,g,h;e=b.eY.b9();while(e.cC()){VD(a,e.b$(),c,d);}e=b.fC.b9();while(e.cC()){f=e.b$();g=new S3;g.y7=a;ES(a,g,f,c,d);}h=b.hO.b9();while(h.cC()){e=h.b$();VD(a,e.lp,c,d);f=new S4;f.w9=a;ES(a,f,e.kQ,c,d);}b=b.cK.b9();while(b.cC()){Zf(a,b.b$(),c,d);}}
function VD(a,b,c,d){KM(a,b.eF,c,d);}
function ES(a,b,c,d,e){var f,g;a:{if(c instanceof HH){f=c.hs;g=new VQ;g.rl=a;g.rj=b;g.ri=d;g.rk=e;Fr(f,g);}else{if(!(c instanceof Ke)){if(!(c instanceof Jk))break a;f=c;ES(a,b,f.jR,d,e);ES(a,b,f.i9,d,e);return;}g=c.id;f=new VR;f.B6=a;f.B5=b;f.B4=d;f.B3=e;Fr(g,f);}}if(c!==null){c=c.fR;if(c!==null)b.lT(c,CY(d),CY(e));}}
function KM(a,b,c,d){var e;e=b.dH;if(e>=c)b.dH=e+d|0;}
function ABq(a,b,c,d){var e,f,g,h;e=b.eY.b9();while(e.cC()){JR(a,(e.b$()).eF,c,d);}e=b.fC.b9();while(e.cC()){f=e.b$();g=new Sg;g.u$=a;ES(a,g,f,c,d);}h=b.hO.b9();while(h.cC()){e=h.b$();JR(a,e.lp.eF,c,d);f=new Si;f.Ar=a;ES(a,f,e.kQ,c,d);}b.eY.pB(new Sf);b.fC.pB(new Se);b=b.cK.b9();while(b.cC()){ABq(a,b.b$(),c,d);}}
function JR(a,b,c,d){var e;e=b.dH;if(e>=c)b.dH=e-d|0;}
function Li(){var a=this;Ee.call(a);a.c7=0;a.b8=null;a.cZ=0;a.B7=0.0;a.ne=0;}
function JQ(){var a=new Li();QL(a);return a;}
function AXj(a,b){return Q(HV,b);}
function QL(a){var b;b=AHu(16);a.c7=0;a.b8=Q(HV,b);a.B7=0.75;Tv(a);}
function AHu(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fx(a){var b;if(a.c7>0){a.c7=0;b=a.b8;AEQ(b,0,b.data.length,null);a.cZ=a.cZ+1|0;}}
function Tv(a){a.ne=a.b8.data.length*a.B7|0;}
function MU(a,b){return AAV(a,b)===null?0:1;}
function AB5(a){var b;b=new Tw;b.zh=a;return b;}
function Cq(a,b){var c;c=AAV(a,b);if(c===null)return null;return c.cR;}
function AAV(a,b){var c,d;if(b===null)c=Sa(a);else{d=b.gD();c=Q$(a,b,d&(a.b8.data.length-1|0),d);}return c;}
function Q$(a,b,c,d){var e;e=a.b8.data[c];while(e!==null&&!(e.l2==d&&AIg(b,e.cU))){e=e.cW;}return e;}
function Sa(a){var b;b=a.b8.data[0];while(b!==null&&b.cU!==null){b=b.cW;}return b;}
function M7(a){var b;if(a.oY===null){b=new Qv;b.jh=a;a.oY=b;}return a.oY;}
function Ep(a,b,c){var d,e,f,g;if(b===null){d=Sa(a);if(d===null){a.cZ=a.cZ+1|0;d=Tq(a,null,0,0);e=a.c7+1|0;a.c7=e;if(e>a.ne)AB2(a);}}else{e=b.gD();f=e&(a.b8.data.length-1|0);d=Q$(a,b,f,e);if(d===null){a.cZ=a.cZ+1|0;d=Tq(a,b,f,e);e=a.c7+1|0;a.c7=e;if(e>a.ne)AB2(a);}}g=d.cR;d.cR=c;return g;}
function Tq(a,b,c,d){var e,f;e=new HV;VM(e,b,null);e.l2=d;f=a.b8.data;e.cW=f[c];f[c]=e;return e;}
function AI6(a,b){var c,d,e,f,g,h,i,j;c=AHu(!b?1:b<<1);d=Q(HV,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b8.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.l2&b;j=h.cW;h.cW=e[i];e[i]=h;h=j;}f=f+1|0;}a.b8=d;Tv(a);}
function AB2(a){AI6(a,a.b8.data.length);}
function Ls(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.b8.data[0];while(e!==null){if(e.cU===null)break a;b=e.cW;d=e;e=b;}}else{f=b.gD();g=a.b8.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.l2==f&&AIg(b,e.cU))){h=e.cW;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.cW=e.cW;else a.b8.data[c]=e.cW;a.cZ=a.cZ+1|0;a.c7=a.c7-1|0;}if(e===null)return null;return e.cR;}
function AIg(b,c){return b!==c&&!b.bJ(c)?0:1;}
function Cx(){var a=this;B.call(a);a.v=null;a.bZ=0;a.bF=0;}
function AIX(a){var b=new Cx();AWK(b,a);return b;}
function Ec(a,b,c){var d=new Cx();ABb(d,a,b,c);return d;}
function AWK(a,b){ABb(a,b,0,0);}
function ABb(a,b,c,d){a.v=b;a.bZ=c;a.bF=d;}
function Kz(a){return a.bF&3;}
function Jl(b,c){return (!b?0:2)+(!c?0:1)|0;}
function L6(a){return J(a.v);}
var NK=G(Li);
function ZJ(){var a=this;B.call(a);a.de=null;a.e9=0;}
var A7f=null;function AGL(a){var b=new ZJ();AHa(b,a);return b;}
function AHa(a,b){a.e9=0;a.de=b;}
function QD(a,b){var c;if(b.eN)return b;b=B7(b.bo);while(true){if(!B_(b))return null;c=QD(a,Ca(b));if(c!==null)break;}return c;}
function W_(a,b,c){var d,e,f,g;d=NC(a,a.de,b);if(d===null)return;b=c.cl;e=b===null?A7g:b.cK;f=c.bo;c=a.de;if(d===c){if(c.cl===null)c.cl=b;b=new Z1;b.y3=a;Fr(f,b);b=new Z0;b.u6=a;e.fk(b);b=a.de;b.bo=f;b.cl.cK=e;b.eN=0;return;}if(!EE(f)){c=d.hq;if(c!==null){b=new XA;b.rq=c;Fr(f,b);g=K7(c.bo,d);if(g==(-1))H1(c.bo,f);else{EN(c.bo,g);AIA(c.bo,g,f);}}}b=d.cl;if(b!==null){b=b.hj;c=new Sl;c.sL=b;e.fk(c);g=K7(b.cK,d.cl);if(g==(-1))H1(b.cK,e);else{b.cK.p$(g);b.cK.up(g,e);}}}
function NC(a,b,c){var d,e,f,g;d=b.bW;if(d.b0==c.b0&&d.bX==c.bX?1:0){d=B7(b.bo);while(B_(d)){e=NC(a,Ca(d),c);if(e!==null)return e;}return b;}b=B7(b.bo);while(true){if(!B_(b))return null;d=Ca(b);f=c.b0;g=c.bX;e=d.bW;if(e.b0<=f&&g<=e.bX?1:0){e=NC(a,d,c);if(e!==null)break;}}return e;}
function AA7(a,b,c){BB(c,b.bW);b=B7(b.bo);while(B_(b)){AA7(a,Ca(b),c);}}
function XD(a,b,c){a.e9=0;Lk(a,a.de,b,c);}
function Lk(a,b,c,d){var e;if(Dd(b)<c)return;a:{if(Dn(b)>c){LR(b,d);Hq(b,d);b=B7(b.bo);while(B_(b)){Lk(a,Ca(b),c,d);}}else{if(!ML(b,c)){if(a.e9)break a;if(Dd(b)!=c)break a;}Hq(b,d);if(Dn(b)==c&&a.e9)LR(b,d);e=B7(b.bo);while(B_(e)){Lk(a,Ca(e),c,d);}if(!a.e9){b.eN=1;a.e9=1;}}}}
function UU(a,b,c){a.e9=0;MP(a,a.de,b,c);}
function MP(a,b,c,d){var e,f,g,h,i,j;if(Dd(b)<c)return;e=Dn(b);f=c+d|0;if(e>f){e= -d|0;LR(b,e);Hq(b,e);g=B7(b.bo);while(B_(g)){MP(a,Ca(g),c,d);}b.bo=Wt(a,b.bo);}else{h=b.bW;if(c<=h.b0&&h.bX<=f?1:0){if(b===a.de){L0(b,0);MO(b,0);h=b.cl;if(h!==null)h.cK.jd();}else{L0(b,(-1));MO(b,(-1));h=b.cl;if(h!==null){ADL(h);b.cl=null;}}Ix(b.bo);}else{e=ML(b,c);f=ML(b,f);if(e&&f)Hq(b, -d|0);else if(e)MO(b,c);else{if(!f)return;L0(b,c);Hq(b, -d|0);}h=B7(b.bo);while(B_(h)){MP(a,Ca(h),c,d);}h=TL(b.bo);g=XX(0);i=new RV;j=new ACa;j.FA
=i;j.kE=g;while(ABT(h,j)){}if(!j.kE.oi&&!a.e9)b.eN=1;else a.e9=1;b.bo=Wt(a,b.bo);}}}
function Wt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BM();d=null;e=A7f;f=b.cG;g=b.q;if(e===null)e=A5W;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}K1(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b2=b.b2+1|0;b=B7(b);while(B_(b)){m=Ca(b);if(Dn(m)==Dd(m))continue;if(!m.eN){if(d!==null){BB(c,d);d=null;}BB(c,m);}else if(d===null)d=m;else{n=ATm(KR(Be(Dn(d),Dn(m)),Bd(Dd(d),Dd(m)),d.bW.fO),d.hq,d.cl);n.eN=1;d=m.cl;if(d===null)d=n;else{ADL(d);d=n;}}}if(d!==null)BB(c,d);return c;}
function ADb(a,b,c,d){var e,f,g,h,i,j;if((Dd(c)-Dn(c)|0)<43)e=Cv(d,Dn(c),Dd(c));else{e=Cv(d,Dn(c),Dn(c)+20|0);f=Cv(d,Dd(c)-20|0,Dd(c));g=new K;M(g);H(H(H(g,e),C(167)),f);e=L(g);}e=AB8(e,C(205),C(249));f=Bt();g=Cl(c);h=new K;M(h);i=U(h,b);BN(i,32);g=H(i,g);BN(g,9);H(g,e);Bk(f,L(h));c=B7(c.bo);j=b+1|0;while(B_(c)){ADb(a,j,Ca(c),d);}}
function AHk(){A7f=new UJ;}
function AK8(){var a=this;B.call(a);a.b0=0;a.bX=0;a.fO=0;}
function KR(a,b,c){var d=new AK8();AWH(d,a,b,c);return d;}
function AWH(a,b,c,d){a.b0=b;a.bX=c;a.fO=d;}
function ASE(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.b0==c.b0&&a.bX==c.bX&&a.fO==c.fO?1:0;}return 0;}
function AVY(a,b){var c;b=b;c=BL(a.b0,b.b0);if(!c)c=BL(b.bX,a.bX);return c;}
var UJ=G();
function APY(a,b,c){var d;b=b;c=c;b=b.bW;c=c.bW;d=BL(b.b0,c.b0);if(!d)d=BL(c.bX,b.bX);return d;}
function Zj(){var a=this;B.call(a);a.bW=null;a.hq=null;a.bo=null;a.cl=null;a.eN=0;}
function ATm(a,b,c){var d=new Zj();AGK(d,a,b,c);return d;}
function AGK(a,b,c,d){a.eN=0;a.bW=b;a.hq=c;a.bo=BM();a.cl=d;}
function AHC(b){return Zq(b,null);}
function Zq(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=KR(d,e,f);j=new Zj;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AGK(j,i,null,l);m=0;while(m<g){l=Zq(b,c);l.hq=j;BB(j.bo,l);m=m+1|0;}return j;}
function AEv(b,c,d){var e,f,g,h,i;a:{e=b.bW;f=b.bo;g=e.b0;h=e.bX;i=e.fO;Bq(c,g);G3(c,h,i);Bq(c,f.q);if(d!==null){e=b.cl;if(e!==null&&ACE(d,e)){g=(Om(d,b.cl)).bp;break a;}}g=(-1);}Bq(c,g);b=B7(f);while(B_(b)){AEv(Ca(b),c,d);}}
function Dn(a){return a.bW.b0;}
function Dd(a){return a.bW.bX;}
function L0(a,b){a.bW.b0=b;}
function MO(a,b){a.bW.bX=b;}
function LR(a,b){var c;c=a.bW;c.b0=c.b0+b|0;}
function Hq(a,b){var c;c=a.bW;c.bX=c.bX+b|0;}
function ML(a,b){return Dn(a)<=b&&b<Dd(a)?1:0;}
function ALZ(a){var b,c,d,e,f;b=a.bW;c=b.b0;d=b.bX;e=b.fO;b=new K;M(b);BN(b,40);BN(U(H(U(H(U(b,c),C(37)),d),C(37)),e),41);b=L(b);c=a.eN;f=new K;M(f);Jt(H(H(f,b),C(37)),c);return L(f);}
function AME(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.bW,c.bW)&&BO(a.bo,c.bo)?1:0;}return 0;}
var Jn=G(0);
function GX(){var a=this;B.call(a);a.cU=null;a.cR=null;}
function A7h(a,b){var c=new GX();VM(c,a,b);return c;}
function VM(a,b,c){a.cU=b;a.cR=c;}
function AWm(a,b){var c,d;if(a===b)return 1;if(!Jb(b,Jn))return 0;a:{b:{c:{d:{c=b;b=a.cU;if(b!==null){if(!b.bJ(c.cU))break c;else break d;}if(c.cU!==null)break c;}b=a.cR;if(b!==null){if(!b.bJ(c.cR))break c;else break b;}if(c.cR===null)break b;}d=0;break a;}d=1;}return d;}
function HV(){var a=this;GX.call(a);a.l2=0;a.cW=null;}
function NH(){var a=this;Lo.call(a);a.yq=null;a.rm=null;}
function AEz(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.yq;e=0;f=0;g=a.rm;a:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ch(b)+j|0,i.length);Pn(b,d,j,f-j|0);e=0;}if(!D9(c)){k=!D9(b)&&e>=f?A6E:A6D;break a;}i=g.data;j=Be(Ch(c),i.length);l=new W7;l.qx=b;l.yO=c;k=AFR(a,d,e,f,g,0,j,l);e=l.vc;j=l.v8;if(k===null){if(!D9(b)&&e>=f)k=A6E;else if(!D9(c)&&e>=f)k=A6D;}ADd(c,g,0,j);if(k!==null)break;}}Fv(b,b.Z-(f-e|0)|0);return k;}
var QC=G(NH);
function AFR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(N9(h,2))break a;i=A6D;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ot(l)){if((f+3|0)>g){j=j+(-1)|0;if(N9(h,3))break a;i=A6D;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CT(l)){i=Eu(1);break a;}if
(j>=d){if(D9(h.qx))break a;i=A6E;break a;}c=j+1|0;m=k[j];if(!Dk(m)){j=c+(-2)|0;i=Eu(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(N9(h,4))break a;i=A6D;break a;}k=e.data;o=EP(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.vc=j;h.v8=f;return i;}
var I7=G(Ew);
var OT=G();
function AT0(a,b){return b.text();}
function OV(){var a=this;B.call(a);a.tD=null;a.tC=null;}
function ATq(a,b){var c,d,e,f;c=a.tD;d=a.tC;e=b.length;f=new Pr;f.AI=b;c.g(ANX((AKv(e,f)).ke,ABY(d)));}
var OU=G();
function AVj(a,b){AHt(b);}
function IW(){var a=this;B.call(a);a.br=null;a.Fo=null;a.c4=null;a.jL=null;a.la=null;a.d2=null;a.i0=null;a.BH=null;a.pC=null;a.oN=null;}
function A7i(a,b,c,d,e,f){var g=new IW();LE(g,a,b,c,d,e,f);return g;}
function ID(){var b,c,d,e,f,g,h,i,j;b=new IW;c=new J_;d=new Hn;FI();KV(d,A7j);Mr(c,d,BZ(A62),BZ(A7k),BZ(A7l),BZ(A62),BZ(A7m),BZ(A7n),BZ(A7o),BZ(A7p),BZ(A7q),BZ(A7r));e=AJx(S(C(250)));AE_();f=(A7s.hy()).data;g=f.length;h=Q(Kp,g);i=h.data;j=0;while(j<g){i[j]=f[j].nU;j=j+1|0;}LE(b,c,e,h,AKd(S(C(251)),S(C(252)),S(C(253)),S(C(254))),Ff(),AEf(S(C(255)),S(C(256)),S(C(257)),S(C(258))));return b;}
function Mb(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IW;c=new J_;d=new Hn;AN4();KV(d,A7t);Mr(c,d,BZ(A7u),BZ(A7v),BZ(A7w),BZ(A7u),BZ(A7x),BZ(A7y),BZ(A7z),BZ(A7A),BZ(A7B),BZ(A7C));e=AJx(S(C(259)));TM();f=(A7D.hy()).data;g=f.length;h=Q(Kp,g);i=h.data;j=0;while(j<g){i[j]=f[j].k9;j=j+1|0;}k=AKd(S(C(260)),S(C(261)),S(C(262)),S(C(263)));l=new IY;d=new I6;AUT();m=A7E;Oz(d,m,A7F,A7G,A7H,A7I,m);LO(l,d,AG3(),AHy(S(C(264)),S(C(265)),S(C(266))),AG3(),AHW(1,0.17499999701976776),A7J,A7K);LE(b,c,e,h,k,l,AEf(S(C(255)),S(C(256)),
S(C(257)),S(C(267))));return b;}
function LE(a,b,c,d,e,f,g){var h;h=d.data;a.i0=Du(C(166),17.0);a.BH=Du(C(155),15.0);a.pC=Du(C(166),15.0);a.oN=Du(C(14),15.0);a.br=b;a.Fo=c;a.jL=d;a.la=e;if(h.length>=15){a.c4=f;a.d2=g;return;}b=new BU;Y(b);N(b);}
function WM(a,b){if(b===null)b=a.br.ef;return b;}
function Kt(){var a=this;CH.call(a);a.dx=null;a.nT=null;}
function A30(a){var b=new Kt();AHK(b,a);return b;}
function AHK(a,b){var c,d,e,f;KP(a,b,0);c=KU(a.M);a.nT=c;d=If(c);a.dx=d;MV(a.r,d);c=b.o.bG;d=new Yr;d.rT=a;Ba(c,d);c=b.o.bG;d=new HR;e=new Yp;e.Bt=a;Is(d,b,e);Ba(c,d);c=a.dx;d=b.o;f=new AA0;f.qF=c;Ba(d.bS,c);Ba(d.fs,f);OZ(a.dx,b.o);b=b.o.cQ;c=new Yq;c.x3=a;Ba(b,c);Hs(a);}
function AJl(a,b){var c,d;c=a.dx;d=new ABz;d.uU=a;d.uV=b;GK(c,b,d);}
function AXF(a,b){if(J9(a.M,b))LQ(a.dx);}
function A06(a,b){return I0(a.dx,b);}
function AOC(a){HA(a);In(a.dx);JM(a.M);}
function A2k(a){return GD(0);}
function ALs(a,b,c){var d;IC(a,b,c);d=a.dx;Mo(d,d.i,b,c);}
function AWG(a,b){BJ(b);Ir(a.nT,b);Ft(a.dx,b);}
function AI9(a,b){if(b.bm!=121)return 0;return 1;}
function AEB(a,b){var c,d,e;if(DN(a.r,a.dx)){c=a.nT;b=b.j;d=a.dx;e=new AAl;e.z8=a;GP(c,b,d,a,d,a,e);}return 1;}
function AH9(){var a=this;Cw.call(a);a.yS=null;a.oZ=null;a.kb=null;a.ei=null;a.lS=null;a.hr=null;a.eA=null;a.jw=null;a.qu=null;a.iX=null;a.p4=null;a.p5=null;a.pk=null;a.za=null;a.CL=null;a.sX=0;}
function A3_(a){var b=new AH9();AYw(b,a);return b;}
function AYw(a,b){var c,d,e,f;El(a,b);c=(ID()).br.ef;a.yS=c;a.oZ=AK3(c);a.kb=new Bg;a.ei=KN();a.lS=KN();a.hr=SV(0,0,3,3);a.eA=H$(0,0,300,300);a.jw=AXm();d=Q(BK,4);e=d.data;e[0]=C(210);e[1]=C(176);e[2]=C(226);e[3]=C(225);a.qu=d;a.iX=Q(Kk,e.length);c=b.o.bS;f=new TC;f.fw=a;Ba(c,f);c=b.o.bG;f=new YU;f.B8=a;Ba(c,f);c=b.o.os;f=new YT;f.sn=a;Ba(c,f);c=b.o.gL;f=new YS;f.Ds=a;Ba(c,f);c=b.o.mh;f=new YR;f.Ee=a;Ba(c,f);c=b.o.cQ;f=new YQ;f.EM=a;Ba(c,f);b=b.o.fs;c=new YP;c.AS=a;Ba(b,c);a.p4=ACv(a,1);a.p5=ACv(a,0);RX(a,a.ei,
a.p4);RX(a,a.lS,a.p5);a.pk=ADI(a,0);a.za=ADI(a,1);FO(a.eA,a.pk);FW(a.eA);HC(a.eA,Dx(169,183,198));Fh(a.eA,a.yS);Cr(a.ei.X,1.0,1.0,1.0,1.0);Fh(a.ei,a.eA.bl);BR(a.hr.bl,a.oZ);}
function RX(a,b,c){FO(b,c);FW(b);}
function Sk(a,b){Iw(DQ(),0.5+DQ()*0.5,0.5+DQ()*0.5,1.0,b.X);}
function ACv(a,b){var c,d;c=D5(a.x.P,200,100,b);Hx(c,C(268),11.0);B0(c,C(269),0.0,20.0);J4(c,255,0,0);B0(c,C(269),0.25,40.0);J4(c,0,255,0);B0(c,C(269),0.5,60.0);J4(c,0,0,255);B0(c,C(269),0.75,80.0);d=CW(a.x.P);CM(d,c);EA(c);return d;}
function ADI(a,b){var c,d,e,f;c=D5(a.x.P,255,100,b);Hx(c,C(166),10.0);d=Bt();e=$rt_str(c.db.font);f=new K;M(f);H(H(f,C(270)),e);Bk(d,L(f));Eo(c,C(271));B0(c,C(271),0.0,20.0);B0(c,C(271),0.25,40.0);B0(c,C(271),0.5,60.0);B0(c,C(271),0.75,80.0);e=CW(a.x.P);CM(e,c);EA(c);return e;}
function ALM(a,b){var c;a.sX=a.sX+1|0;c=b/5.0;Iw(c-(c|0),1.0,1.0,1.0,a.hr.X);return AAZ(a.jw,b);}
function ANx(a){var b,c,d,e,f,g,h,i;b=a.x.P;EJ(b,a.oZ);c=a.iX.data;d=c.length;e=0;while(e<d){ZD(c[e],b,0,0);e=e+1|0;}f=a.eA;g=f.u;g.b=(a.kb.b-f.t.b|0)-5|0;g.a=0;B$(b,0);h=0;while(h<7){f=a.eA;EG(f,b,a.pk,Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eA;f.u.b=(a.kb.b-(f.t.b*2|0)|0)-10|0;h=0;while(h<7){g=a.za;f=a.eA;f.u.a=Bc(h,10+((10*f.t.a|0)/15|0)|0)+5|0;SI(f,b,g,1);h=h+1|0;}SI(a.ei,b,a.p4,1);B$(b,1);g=a.lS;f=a.p5;i=g.u;h=i.a;d=i.b;g=g.t;Gu(b,b.kV);GF(b.kV,b.Y,h,d,g,b.c6);NY(b.kV,b.Y,f);F0(b);B$(b,0);f=
a.CL;if(f!==null)VH(a.hr,b,f,0,0,0.0);ABZ(a.jw,b,new Bg);MW(b,C(272));}
function APG(a,b,c){var d,e,f,g,h,i,j,k;d=Bt();e=Cl(b);f=new K;M(f);H(H(f,C(273)),e);Bk(d,L(f));d=Bt();f=new K;M(f);EH(H(f,C(274)),c);Bk(d,L(f));g=Cg(30.0,c);h=Cg(10.0,c);i=0;while(true){j=a.iX.data;if(i>=j.length)break;k=1+i|0;j[i]=SV(Bc(h,k)+Bc(g,i)|0,g,g,g);Sk(a,a.iX.data[i]);i=k;}W(a.hr.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.ei;W(f.u,((b.a/2|0)-f.t.a|0)-10|0,50);W(a.lS.u,(b.a/2|0)+10|0,50);Co(a.kb,b);}
function WS(a,b){var c,d,e,f,g;c=Bt();d=!b.jO?C(275):C(276);e=b.ee;f=b.bm;g=b.zT;b=new K;M(b);Jt(H(U(H(H(H(b,d),e),C(277)),f),C(278)),g);Bk(c,L(b));return 0;}
function AA6(){var a=this;Cw.call(a);a.EO=null;a.k_=null;a.iZ=null;a.h9=null;a.dk=null;a.dU=null;a.m7=null;a.mW=null;a.jB=0;a.iH=null;a.iG=null;}
function Q_(a,b,c){FO(b,c);FW(b);}
function AD0(a,b,c,d,e,f){var g,h;g=D5(f,c,120,b);Cn(g,e);e=!b?C(279):C(280);h=new K;M(h);H(H(H(h,e),d),C(153));d=L(h);B0(g,d,0.0,20.0);B0(g,d,0.25,40.0);B0(g,d,0.5,60.0);B0(g,d,0.75,80.0);B0(g,d,1.0,100.0);h=CW(f);CM(h,g);EA(g);return h;}
function AQ7(a,b){return 0;}
function AVR(a){var b,c,d,e,f,g,h,i;b=a.x.P;EJ(b,a.k_);B$(b,0);c=a.iZ;d=c.b;e=a.h9;f=d-e.b|0;g=c.a-e.a|0;Bs(b,0,0,e,a.dk.bl);Bs(b,g,0,a.h9,a.dU.bl);Bs(b,0,f,a.h9,a.dk.X);Bs(b,g,f,a.h9,a.dU.X);c=a.dk;e=c.u;h=e.b;i=((a.iZ.b*3|0)/4|0)-(c.t.b/2|0)|0;Iy(c,b,e.a,h,a.iH,0,1);c=a.dk;Iy(c,b,c.u.a,i,a.iH,1,1);c=a.dU;Iy(c,b,c.u.a,h,a.iG,0,0);e=a.dU;Iy(e,b,e.u.a,i,a.iG,1,0);MW(b,C(272));}
function AWY(a,b,c){var d,e;Co(a.iZ,b);W(a.h9,b.a/2|0,b.b/2|0);d=a.iZ.b/4|0;e=a.dk;d=d-(e.t.b/2|0)|0;W(e.u,(b.a/4|0)-(a.jB/2|0)|0,d);W(a.dU.u,((b.a*3|0)/4|0)-(a.jB/2|0)|0,d);}
function Xn(){var a=this;CH.call(a);a.yM=null;a.fd=null;a.dF=null;a.ou=null;}
function AO_(a,b,c){var d;d=Fi(a.r,a.ou);JC(a.fd,d,a.r);JC(a.dF,d,a.r);}
function RD(b){return I2(b,UD());}
function I2(b,c){var d;d=Lx();Of(d,Nm(b,J8(c,25)),!b?null:I2(b-1|0,c));Of(d,Nm(b,J8(c,20)),!b?null:I2(b-1|0,c));Of(d,Nm(b,J8(c,15)),!b?null:I2(b-1|0,c));Of(d,Nm(b,J8(c,10)),!b?null:I2(b-1|0,c));return GZ(d);}
function Nm(b,c){var d;if(b){d=new K;M(d);H(H(U(d,b),C(29)),c);c=L(d);}return c;}
function Of(b,c,d){if(d!==null)FF(b,c,d);else{d=new U6;d.r$=c;D2(b,c,d);}}
function AN7(a,b,c){var d,e;IC(a,b,c);b=a.r.bO;d=EC(a.fd);e=EC(a.dF);Ne(a.fd,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);Ne(a.dF,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AWC(a){var b,c,d,e,f,g,h,i;HA(a);b=a.x.P;B$(b,1);c=a.yM;d=a.r;e=d.bO;W(c.nL,e.a,Cg(2.0,d.ce));W(c.od,Cg(2.0,d.ce),e.b);FI();f=A7q;g=d.bH;h=e.b/2|0;i=c.nL;Bs(g,0,h-(i.b/2|0)|0,i,f);g=d.bH;h=e.a/2|0;c=c.od;Bs(g,h-(c.a/2|0)|0,0,c,f);L_(a.fd,a.r);L_(a.dF,a.r);JM(a.M);B$(b,0);}
function APJ(a,b){var c,d;c=NP(a.fd,b.j,a.r.cT);d=NP(a.dF,b.j,a.r.cT);return !c&&!d?0:1;}
function AMk(a,b,c,d){var e,f;e=N_(a.fd,b.j,c,d);f=N_(a.dF,b.j,c,d);return !e&&!f?0:1;}
function AAz(){CH.call(this);this.kC=null;}
function ANl(a,b,c){if(b===0.0)Y2(a);}
function Y2(a){var b,c,d,e,f,g,h,i;b=a.kC;if(b!==null){It(a.M,b);JV(b);}b=(ID()).c4;c=A5j(a.r,new US);d=Du(C(155),14.0);e=AO9();f=0;while(f<300){g=Dl(f);h=new Sy;h.Ba=C(281);h.A9=g;h.A$=C(282);V6(e,C(281),g,C(282),h);f=f+1|0;}W1(c,AC2(e));V1(c,b,d);g=AEj(a.r);i=GH(c,a.r);Jf(i,b.mZ,b.oL);K9(g,i);FY(g,b);DK(g,C(145));a.kC=g;EI(a.M,g);Qy(a);}
function AMz(a,b,c){IC(a,b,c);Qy(a);}
function Qy(a){var b,c,d;b=a.r.bO;Et(a.kC,BF((b.a*2|0)/10|0,(b.b*4|0)/10|0),BF((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.kC;b=AHV(c.W.k);d=new K;M(d);H(H(d,C(283)),b);DK(c,L(d));}
function WP(){var a=this;HM.call(a);a.mi=null;a.h0=null;a.gf=null;a.kd=null;a.r5=null;a.j$=null;a.ib=null;a.hM=null;a.lH=0;a.hZ=0;}
function PD(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.h0.q>0){d=DQ();e=a.h0;f=d*(e.q-1|0)|0;e=EN(e,f);EN(a.gf,f);f=a.hZ;g=e.t;a.hZ=f-Bc(g.a,g.b)|0;IZ(a.mi,e.dv);}c=c+1|0;}}
function LY(a,b){var c,d,e,f,g,h,i,j;c=Ki(a.r);Cn(c,a.kd);d=0;while(d<b){e=J8(a.j$,1+(DQ()*19.0|0)|0);f=KN();g=f.dv;h=a.mi;BJ(c);i=new Q6;i.uk=c;BR(g,Ks(h,e,i));(U5(DQ(),1.0,1.0,f.bl)).bC=0.5;h=f.u;g=f.dv;W(h,g.bn|0,g.bs|0);h=f.t;g=f.dv;W(h,g.bf|0,g.bC|0);BB(a.gf,e);BB(a.h0,f);j=a.hZ;h=f.t;a.hZ=j+Bc(h.a,h.b)|0;d=d+1|0;}a.hM=MJ(a.mi);}
function A0F(a){var b,c,d,e,f,g,h,i;HA(a);b=a.x.P;B$(b,1);c=a.r.bH;if(a.gf.q){d=a.hM;d=HI(c,d.a,d.b);Cn(d,a.kd);e=a.kd.em;Bs(c,0,0,a.hM,a.r5);f=0;while(f<a.gf.q){g=BG(a.h0,f);h=BG(a.gf,f);g=g.dv;B0(d,h,g.bn,g.bs+e);f=f+1|0;}g=a.ib;if(!(g!==null&&BQ(g)==a.hM.a&&CO(a.ib)==a.hM.b))a.ib=BV(a.ib,CW(c));CM(a.ib,d);EA(d);i=0;while(i<a.gf.q){d=BG(a.h0,i);HC(d,CD(0));EG(d,c,a.ib,0,0);i=i+1|0;}}B$(b,0);}
function ALE(a,b){var c,d;if(a.lH){c=a.hM;d=Be(Bc(c.a,c.b),2211840);if(a.hZ/d<=0.7)LY(a,D6(a.j$,5));else PD(a,D6(a.j$,5));}return a.lH;}
function SE(){var a=this;Cw.call(a);a.eB=null;a.h2=null;a.iY=null;a.oQ=null;a.e8=0;a.uM=0;a.r6=null;a.mw=0;a.xo=0;a.xR=null;a.Ae=null;}
function ALr(a){var b,c;b=a.e8;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));EJ(a.eB,a.r6);Km(a.iY,a.e8,0,Hv(a),5000,a.oQ.a,20);B$(a.eB,1);Vc(a.iY,a.eB);B$(a.eB,0);b=a.e8;c=new K;M(c);U(H(c,C(284)),b);$rt_globals.console.info($rt_ustr(L(c)));ABA(a.h2,a.e8/a.mw|0,a.eB);AAR(a.h2,a.e8,Hv(a),a.Ae,a.eB);}
function AUy(a,b,c){a.oQ=b;Sd(a.h2,BF(0,0),50,Hv(a),c);SK(a.h2,a.eB,0,Hv(a));}
function Uv(a){return 5000-Hv(a)|0;}
function Hv(a){return Be(a.uM,a.oQ.b);}
function Dr(){var a=this;Cw.call(a);a.pU=null;a.gT=null;a.qL=0.0;}
function A7L(a){var b=new Dr();HO(b,a);return b;}
function HO(a,b){El(a,b);a.pU=AIO(0,0,64);a.gT=new Bg;Gi(b.bw,JO(BE(a)));}
function Z4(a){EJ(a.x.P,a.pU);}
function SA(a,b,c){Co(a.gT,b);a.qL=c;}
var Q9=G(Dr);
var W6=G(CH);
function Hf(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.x.bw;f=new Q5;f.De=a;f.tY=b;g=Q(B,1);h=g.data;i=BP(1);i.data[0]=b;h[0]=i;CV(e,f,C(285),g);d=d+1|0;}}
function ADk(a,b){var c,d,e,f,g,h;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((K3(b,1)).iK));d=Bt();e=Cl(c[1]);if(b===null)f=C(23);else{f=new K;M(f);BY(f,C(36));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)BY(f,C(37));U(f,c[g]);g=g+1|0;}BY(f,C(38));f=L(f);}h=new K;M(h);H(H(H(H(h,C(287)),e),C(288)),f);Bk(d,L(h));}
function Wq(){var a=this;Dr.call(a);a.e6=null;a.gA=null;a.nC=null;a.AV=null;a.qh=null;}
function AOM(a,b){b=b/5.0;Iw(b-(b|0),1.0,1.0,1.0,a.gA.X);return 0;}
function AWr(a){Z4(a);EG(a.e6,a.x.P,a.AV,0,0);VH(a.gA,a.x.P,a.nC,0,0,0.0);MW(a.x.P,C(272));}
function A2e(a,b,c){var d,e,f;SA(a,b,c);W(a.gA.u,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.e6;e=d.u;f=b.a;d=d.t;W(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function SC(){var a=this;Dr.call(a);a.gW=null;a.q2=null;a.mt=null;a.kv=null;a.jS=null;}
function A2O(a){var b,c,d,e,f,g;Z4(a);b=a.x.P;c=a.kv;LN(b,c.a,c.b,a.jS);b=a.gW;c=a.q2;d=a.gT;e=a.x.P;f=0;while(true){g=0;while(true){EG(b,e,c,g,f);g=g+BQ(c)|0;if(g>=d.a)break;}f=f+CO(c)|0;if(f>=d.b)break;}Ga(a.x.P);}
function AOx(a,b,c){SA(a,b,c);W(a.jS,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function AAo(){var a=this;Cw.call(a);a.eL=null;a.oC=null;a.gE=null;a.cc=null;a.fj=0;a.iE=null;a.fE=0;a.DN=20;a.Fr=11;a.Ea=220;a.l$=null;a.EZ=5000;a.io=0;a.gO=null;}
function ATs(a){var b,c,d,e,f,g,h;b=a.iE;c=a.fE;d=a.l$;Km(b,c,0,d.b,5000,d.a,20);B$(a.eL,1);Vc(a.iE,a.eL);if(a.cc===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B0(a.oC,Dl(e),0.0,c);}b=CW(a.eL);a.cc=b;CM(b,a.oC);}if(a.fE<=a.fj)while(true){f=a.fj;if(f<=a.fE)break;a.fj=f-20|0;b=a.gE;g=a.io-1|0;a.io=g;B0(b,Dl(g),0.0,20.0);JJ(a.cc,a.gE,0,a.fj%220|0);ER(a.gE);}else while(a.fj<(a.fE-20|0)){b=a.gE;g=a.io+1|0;a.io=g;B0(b,Dl((g+11|0)-1|0),0.0,20.0);JJ(a.cc,a.gE,0,a.fj%220|0);ER(a.gE);a.fj=a.fj+20|0;}b=H$(0,0,BQ(a.cc),CO(a.cc));Iz(b,
0,0,BQ(a.cc),CO(a.cc));HC(b,a.gO.data[0]);Fh(b,a.gO.data[1]);EG(b,a.eL,a.cc,400,0);g=a.fE%220|0;f=Be(CO(a.cc)-g|0,200);d=H$(0,0,BQ(a.cc),f);Iz(d,0,g,BQ(a.cc),f);HC(d,a.gO.data[0]);Fh(d,a.gO.data[1]);EG(d,a.eL,a.cc,0,0);h=H$(0,f,BQ(a.cc),(CO(a.cc)-f|0)-20|0);Iz(h,0,0,BQ(a.cc),(CO(a.cc)-f|0)-20|0);HC(h,a.gO.data[1]);Fh(h,a.gO.data[0]);EG(h,a.eL,a.cc,0,0);}
function AWE(a,b,c){Co(a.l$,b);}
function A0k(a,b){return 0;}
function ZV(a){return 5000-a.l$.b|0;}
function Kn(){Dr.call(this);this.eb=0;}
function ZC(a){var b,c;b=a.x.bw;c=new T3;c.xN=a;Rz(b,c,Ws(a));}
function Qx(a){var b,c,d,e;b=a.eb+1|0;a.eb=b;c=JO(F(Kn));d=new K;M(d);H(H(U(H(d,C(289)),b),C(29)),c);e=L(d);c=a.x.bw;d=new Vy;d.xY=e;Ti(c,e,d,Ws(a));}
function Ws(a){var b;b=new YX;b.BQ=a;return b;}
function APw(a,b,c,d){a:{switch(c){case 0:break;case 2:Qx(a);break a;default:break a;}ZC(a);}return 1;}
function Sn(){var a=this;Dr.call(a);a.ue=null;a.gk=null;a.lz=null;a.pe=null;a.vT=null;}
function AT7(a){var b,c,d,e,f,g,h,i;if(a.lz===null){b=a.x.P;c=a.vT;d=Iq(b,c.h$,Cg(c.gV,a.qL));Cn(b.cg,d);e=CZ(Eo(b.cg,C(290)));f=Bt();g=d.oV;c=new K;M(c);EH(H(c,C(291)),g);Bk(f,L(c));h=Nc(d,1.1799999475479126);c=Bt();i=new K;M(i);U(H(U(H(i,C(292)),e),C(201)),h);Bk(c,L(i));c=HI(b,e,h);a.pe=c;Cn(c,d);B0(a.pe,C(290),0.0,d.em);b=CW(b);a.lz=b;CM(b,a.pe);FO(a.gk,a.lz);FW(a.gk);b=a.gk.bl;FI();BR(b,A62);BR(a.gk.X,A7M);}b=a.x.P;EJ(b,a.ue);c=a.gk;i=c.u;f=a.gT;e=f.a;c=c.t;W(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);EG(a.gk,b,a.lz,
0,0);}
function G6(){var a=this;Cw.call(a);a.vg=null;a.ck=null;a.d$=null;a.dl=null;a.fo=null;a.eK=null;}
function OE(a,b){var c,d;El(a,b);a.vg=CD(20);a.ck=Sj();a.d$=new Bg;a.dl=new Bg;a.fo=new Bg;a.eK=new Bg;c=b.o.bG;d=new AB7;d.Dz=a;Ba(c,d);Ba(b.o.bS,a);b=a.ck.bl;FI();BR(b,A62);BR(a.ck.X,A7M);}
function AFb(a){var b,c,d;b=a.x.P;EJ(b,a.vg);c=a.ck;d=c.u;Bs(b,d.a,d.b,c.t,c.bl);B$(b,1);c=a.ck;d=c.u;AD$(b,d.a,d.b,c.t,a.d$,a.dl,a.fo,a.eK,c.X);B$(b,0);}
function AYt(a,b){return 0;}
var S7=G(G6);
function AZ9(a,b,c){var d,e,f;d=a.ck;e=d.u;f=b.a;d=d.t;W(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);W(a.d$,0,0);W(a.dl,Be(b.a,b.b),Be(b.a,b.b));b=a.fo;d=a.d$;W(b,d.a,d.b+20|0);b=a.eK;d=a.dl;W(b,d.a,d.b+40|0);}
function A03(a,b){var c,d,e;Co(a.d$,b.j);b=a.dl;c=a.ck;d=c.u;e=d.a;c=c.t;W(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fo;c=a.d$;W(b,c.a,c.b+20|0);b=a.eK;c=a.dl;W(b,c.a,c.b+40|0);return 0;}
function S6(){var a=this;G6.call(a);a.f0=null;a.gl=null;}
function A2w(a,b){var c;c=a.dl;b=b.j;c.b=b.b-50|0;a.eK.b=b.b+100|0;return 1;}
function ANi(a){var b,c,d,e,f,g,h;b=Bd(a.d$.a,a.fo.a);c=Be(a.dl.a,a.eK.a);d=Be(a.d$.b,a.dl.b)-50|0;e=Bd(a.fo.b,a.eK.b)+50|0;Hi(a.ck,b,d,c-b|0,e-d|0);AFb(a);f=a.ck.u.a-10|0;AAq(a,a.x.P,10,f,a.d$,a.fo);g=a.ck;h=g.u.a+g.t.a|0;AAq(a,a.x.P,h,f,a.dl,a.eK);}
function AAq(a,b,c,d,e,f){var g;W(a.f0,c,a.ck.u.b);W(a.gl,d,e.b-a.ck.u.b|0);g=a.f0;Bs(b,g.a,g.b,a.gl,a.ck.bl);W(a.f0,c,e.b);W(a.gl,d,f.b-e.b|0);e=a.f0;Bs(b,e.a,e.b,a.gl,a.ck.X);W(a.f0,c,f.b);e=a.gl;g=a.ck;W(e,d,(g.u.b+g.t.b|0)-f.b|0);e=a.f0;Bs(b,e.a,e.b,a.gl,a.ck.bl);}
function AL6(a,b,c){}
function VY(){var a=this;CH.call(a);a.Ci=3;a.wf=null;a.j3=null;a.qg=0;}
function AO$(a,b,c){var d,e;if(b===0.0){EI(a.M,YL(a));d=SN(a,0.5,0,C(293));e=a.r.bO;Et(EI(a.M,d),BF(e.a/10|0,e.b/10|0),BF((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function YL(a){var b,c,d,e,f,g;b=a.qg+1|0;a.qg=b;c=new K;M(c);U(H(c,C(294)),b);c=SN(a,1.0,1,L(c));d=a.r.bO;e=d.a/10|0;f=e+D6(a.j3,e)|0;e=d.b/20|0;e=e+D6(a.j3,e)|0;b=d.a;b=((b*7|0)/10|0)+D6(a.j3,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+D6(a.j3,g/10|0)|0;Et(c,BF(f,e),BF(b,g));return c;}
function SN(a,b,c,d){var e,f,g;e=AEj(a.r);if(d===null)f=new ADu;else{f=new ADw;f.ut=e;f.uu=d;}g=new Qc;LJ(g);g.me=new B2;g.pG=new Bg;g.ym=f;g.r7=b;if(c){d=GH(g,a.r);Jf(d,A7N,A7O);g=d;}K9(e,g);FY(e,Ff());AAj(e,a.wf,3.0);d=new ADv;d.qJ=a;d.qK=e;S9(e,d);return e;}
function Eq(){CH.call(this);this.hh=null;}
function A4y(a){var b=new Eq();J$(b,a);return b;}
function J$(a,b){F9(a,b);Ba(a.r.dS,a);BR(a.dQ,CD(43));}
function AWb(a){return AUm();}
function APR(a){return 1;}
function NZ(a,b){FY(a.hh,b);}
function AID(a,b){var c,d,e;c=a.r.bO;d=!a.pl()?0:ACu(b);e=c.b-d|0;Et(b,BF(c.a/20|0,d+(e/20|0)|0),BF((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A0O(a,b,c){if(b===0.0){a.hh=A2h(a.r,a.jm());NZ(a,Ff());if(a.pl())DK(a.hh,M5(BE(a)));EI(a.M,a.hh);a.kF(a.hh);}}
function Qu(){var a=this;Eq.call(a);a.l_=null;a.eI=null;a.Ew=null;}
function AV$(a,b){var c;c=a.eI;return c!==null&&I0(c,b)?1:0;}
function AMC(a){var b;b=If(a.l_);a.eI=b;a.Ew=OZ(b,a.x.o);AKt(a.eI);MV(a.r,a.eI);return a.eI;}
function AUW(a){return 0;}
function A2y(a,b){AID(a,b);Hs(a);}
function ASy(a,b){BJ(b);Ir(a.l_,b);Ft(a.eI,b);NZ(a,b.c4);}
function ARV(a,b){J9(a.M,b);}
function WT(){B.call(this);this.wC=null;}
function A0C(a,b){DY(a.wC,null);return 0;}
var ON=G(Kt);
function AVU(a){return GD(1);}
var KY=G(0);
function AMp(a,b,c){Lu(b);}
function AKO(a,b){var c;c=new RE;c.ui=a;c.uj=b;return c;}
function RI(){var a=this;Eq.call(a);a.c8=null;a.pr=null;a.mI=null;a.jp=null;}
function AQT(a){var b,c,d,e;b=new QU;c=a.M;Ey(b);b.gm=KU(c);d=TD(c.cj);b.go=d;b.kM=GH(d,c.cj);e=new PC;Ey(e);c=new B2;AOV();AJ$(c,A65);e.A0=c;b.oE=e;d=If(b.gm);b.fV=d;b.Aw=a;Mw(b,I(CB,[b.kM,b.oE,d]));b.sa=GD(1);a.c8=b;b=AKl(C(295),0);IT(b);c=new RN;c.AX=a;b.er=c;ET(a.c8.go,b);return a.c8;}
function RO(a){var b,c;b=a.x.bw;c=new AB$;c.vu=a;Ja(b,c);}
function AQM(a,b){AJH(b);Hs(a);}
function AJH(b){var c,d,e,f,g,h,i;c=b.bd.bO;d=ACu(b);e=c.b-d|0;f=Cy(b.bd,5.0);g=BF(f,f+d|0);h=new Bg;i=c.a;d=f*2|0;QH(h,i-d|0,e-d|0);Et(b,g,h);}
function AYP(a,b){var c;NZ(a,b.c4);c=a.c8;J7(c.go,b);JD(c.go,c.kM);Ir(c.gm,b);Ft(c.fV,b);}
function ASi(a,b){var c,d,e;c=b.hF;a.pr=c;d=Cq(a.mI,c);if(d!==null)ADD(a,d);else{b=Bt();d=Cl(c);e=new K;M(e);H(H(e,C(296)),d);Bk(b,L(e));if(Cq(a.jp,c)!==null){b=Cl(c);c=new K;M(c);H(H(c,C(297)),b);$rt_globals.console.info($rt_ustr(L(c)));}else{Ep(a.jp,c,FR(c));b=new ABv;b.tq=a;b.tp=c;d=new ABu;d.xv=a;d.xx=c;UO(c,b,d);}}}
function ADD(a,b){H0(a.c8.fV,b);b=a.c8;FL(b.gm.bY.cj,b.fV);}
function ALL(a,b){ADr(b);if(Ji(b)>0)EL(a.c8.go);}
function AOf(a,b){if(Ji(b)>0)EL(a.c8.go);Lh(b);}
function AR6(a,b,c){if(AHM(c)!==C(176))QN(b);else Lu(b);}
function PF(){var a=this;Eq.call(a);a.vf=null;a.fL=null;}
function AIs(){var b;b=I(L3,[Nj(1,3,4,5,1),Nj(5,6,10,2,2),Nj(12,2,13,3,3),Nj(15,3,17,2,4)]);return A43(Q(Gr,0),Q(Gr,0),b);}
function AWU(a){var b,c,d,e;b=A08(a.r);a.fL=b;ACR(b,a.vf);c=a.fL.es;BJ(c);d=new AA2;d.rd=c;b=PE(C(298),4,d);d=a.fL.eq;BJ(d);e=new AA3;e.tg=d;c=PE(C(298),4,e);ET(a.fL.es,b);ET(a.fL.eq,c);AAP(a.fL,AIs());return a.fL;}
function TB(){CH.call(this);this.j_=null;}
function Y5(a){var b,c,d,e;b=new Y8;c=a.j_;ACL(b,a.M,c);d=A08(b.dj.cj);b.eR=d;ACR(d,c);c=AKl(C(299),0);d=AKl(C(300),0);IT(c);IT(d);e=new Sx;e.sS=b;c.er=e;e=new Sw;e.vd=b;d.er=e;ET(b.eR.es,c);ET(b.eR.eq,d);EI(b.dj,WF(b,b.eR));}
function ATT(a,b,c){if(b===0.0)Y5(a);}
function ACs(){var a=this;Cw.call(a);a.s6=null;a.mN=null;a.fh=null;a.oP=null;a.mM=0.0;a.g9=null;a.wk=null;a.tI=null;a.yf=null;a.y0=null;a.sg=null;a.qr=null;a.Ce=null;a.wL=null;a.lE=null;}
var A7P=0;function A4b(a){var b=new ACs();ATW(b,a);return b;}
function ATW(a,b){var c,d,e;El(a,b);a.s6=new B2;a.mN=ADH(1.0,0.0,0.0,1.0);a.fh=Sj();a.oP=new Bg;a.mM=3.1415927410125732;c=AJN();a.g9=c;a.wk=HG(c,1.25);a.tI=HG(a.g9,1.3333333730697632);a.yf=HG(a.g9,1.5);a.y0=HG(a.g9,1.6666666269302368);a.sg=HG(a.g9,2.0);a.qr=ADH(a.mM/24.0,15.0,3.0,0.5);c=ADH(a.mM/12.0,25.0,3.0,0.5);a.Ce=c;a.wL=DX([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.lE=I(B2,[a.g9,a.wk,a.tI,a.yf,a.y0,a.sg,a.qr,c]);c=b.o.bG;d=new QQ;d.Fp=a;Ba(c,d);Ba(b.o.bS,a);b=a.fh.X;FI();BR(b,A62);Hi(a.fh,0,0,600,60);e
=M4(0.5,0.375);Jj(0.375,e);Jj(0.375,Jj(3.0,M4(e,3.0)));HG(AJN(),3.0);}
function A2q(a,b,c){var d,e,f;Co(a.oP,b);d=a.fh;e=d.u;f=b.a;d=d.t;W(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HG(b,c){var d;d=new B2;UH(b,c,d);return d;}
function AJN(){var b;b=new B2;Ly(b);return b;}
function AXx(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.x.P;EJ(b,a.s6);B$(b,1);c=a.fh;d=c.u.a;e=c.t.b/2|0;f=0;while(true){g=a.lE.data;if(f>=g.length)break;h=a.wL.data[f];c=g[f];i=WV(c);j=a.fh;k=j.u;l=k.a;m=k.b;L8(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.mN);f=f+1|0;}if(A7P){c=A34(1,2);n=0;while(n<1000){h=D6(c,a.lE.data.length);l=D6(c,a.oP.b-a.fh.t.b|0);j=a.lE.data[h];i=j.bs;i=i-(i|0)>=0.25?0.0:0.5;k=a.fh;L8(b,k.u.a,l,k.t,d+i,(e+l|0)+i,j,a.mN);n=n+1|0;}}B$(b,0);}
function ASj(a,b){return A7P;}
function YM(){var a=this;Eq.call(a);a.lw=null;a.vX=null;}
function AY4(a){var b,c,d,e;b=TD(a.r);a.lw=b;BJ(b);c=new S_;c.s5=b;b=PE(C(298),4,c);d=Bt();e=OH(b);c=new K;M(c);U(H(c,C(301)),e);Bk(d,L(c));ET(a.lw,b);J7(a.lw,a.vX);b=a.lw;return JD(b,GH(b,a.r));}
function A0f(a,b){var c;c=a.r.bO;Et(b,BF(c.a/30|0,c.b/10|0),BF((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function J_(){var a=this;B.call(a);a.BX=null;a.ef=null;a.uC=null;a.Dc=null;a.sR=null;a.kY=null;a.rz=null;a.wq=null;a.lK=null;a.lF=null;a.gp=null;}
function A7Q(a,b,c,d,e,f,g,h,i,j,k){var l=new J_();Mr(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Mr(a,b,c,d,e,f,g,h,i,j,k,l){a.BX=b;a.ef=c;a.uC=d;a.Dc=e;a.sR=f;a.kY=g;a.rz=h;a.wq=i;a.lK=j;a.lF=k;a.gp=l;}
function AFF(){B.call(this);this.E9=null;}
function AJx(a){var b=new AFF();AUK(b,a);return b;}
function AUK(a,b){a.E9=b;}
var AEE=G(0);
function AH3(){var a=this;B.call(a);a.oX=null;a.k6=null;a.xS=null;a.qw=null;}
function AKd(a,b,c,d){var e=new AH3();A2B(e,a,b,c,d);return e;}
function A2B(a,b,c,d,e){a.oX=b;a.k6=c;a.xS=d;a.qw=e;}
var AF4=G(0);
function Ff(){var b,c,d;b=new IY;c=new I6;AYM();d=A7R;Oz(c,d,A7S,A7T,A7U,A7V,d);LO(b,c,AHp(),AHy(S(C(302)),S(C(265)),S(C(266))),AHp(),AHW(1,0.125),A7W,A7X);return b;}
function AHp(){var b,c;b=new Kl;c=S(C(303));AYM();K6(b,c,A7Y,A7Z);return b;}
function AG3(){var b,c;b=new Kl;c=S(C(266));AUT();K6(b,c,A70,A71);return b;}
function AKW(){var b,c;b=new Kl;AGV();c=A72;AU6();K6(b,c,A73,A74);return b;}
function AHJ(){var a=this;B.call(a);a.zv=null;a.wB=null;a.uO=null;a.qI=null;}
function AEf(a,b,c,d){var e=new AHJ();AVk(e,a,b,c,d);return e;}
function AVk(a,b,c,d,e){a.zv=b;a.wB=c;a.uO=d;a.qI=e;}
function AD6(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d2.wB;break a;case 3:if(c!=3){b=b.d2.qI;break a;}b=b.d2.uO;break a;default:b=b.br.ef;break a;}b=b.d2.zv;}return b;}
function JY(a,b,c){return AD6(a,b,0,c);}
function Mx(){var a=this;B.call(a);a.lY=null;a.ko=null;}
function V_(a,b){var c;c=a.ko;a.ko=b;return c;}
function KE(){var a=this;Mx.call(a);a.bU=null;a.b5=null;a.gI=0;a.gR=0;}
function M1(a){var b;b=Lp(a);if(b==2){if(Lp(a.b5)<0)a.b5=Pc(a.b5);return Qf(a);}if(b!=(-2))return a;if(Lp(a.bU)>0)a.bU=Qf(a.bU);return Pc(a);}
function Lp(a){var b,c;b=a.b5;c=b===null?0:b.gI;b=a.bU;return c-(b===null?0:b.gI)|0;}
function Pc(a){var b;b=a.bU;a.bU=b.b5;b.b5=a;E0(a);E0(b);return b;}
function Qf(a){var b;b=a.b5;a.b5=b.bU;b.bU=a;E0(a);E0(b);return b;}
function E0(a){var b,c,d;b=a.b5;c=b===null?0:b.gI;b=a.bU;d=b===null?0:b.gI;a.gI=Bd(c,d)+1|0;a.gR=1;b=a.bU;if(b!==null)a.gR=1+b.gR|0;b=a.b5;if(b!==null)a.gR=a.gR+b.gR|0;}
var AKZ=G();
function AMx(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new X8;c=c.buffer;d.gh=c;d.qc=new $rt_globals.Int8Array(c);d.mC=new $rt_globals.Uint16Array(c);d.An=new $rt_globals.Int32Array(c);d.sq=new $rt_globals.Float32Array(c);d.sC=new $rt_globals.Float64Array(c);e=d.gh.byteLength;c=new K;M(c);U(H(c,C(304)),e);CU(L(c));e=b.callToCpp1();c=new K;M(c);U(H(c,C(305)),e);CU(L(c));f=b.callToCpp2();c=new K;M(c);EH(H(c,C(306)),f);CU(L(c));c=O0(d,b.getC8String());g=new K;M(g);H(H(g,C(307)),c);CU(L(g));c
=Wx(d,b.getC16String());g=new K;M(g);H(H(g,C(308)),c);CU(L(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gh,h,8));c=AGp(i);g=new K;M(g);H(H(g,C(309)),c);CU(L(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gh,h,8));c=ASq(j);g=new K;M(g);H(H(g,C(310)),c);CU(L(g));k=AI8(d,b.getCDoubleArray8(),8);l=AUd(k);c=new K;M(c);H(H(c,C(311)),l);CU(Ed(c));l=AT$(b.getC8String(),C(312),d);c=L4();H(H(c,C(313)),l);CU(Ed(c));l=AQi(b.getC16String(),C(314),
d);c=L4();H(H(c,C(315)),l);CU(Ed(c));c=AZL(i,d,b.getCIntArray8(),DX([11,22,33,44,55,66,77,88]));g=L4();H(H(g,C(316)),c);CU(Ed(g));c=ASB(j,d,b.getCFloatArray8(),100,DX([111,222,333,444,555,666,777,888]));g=L4();H(H(g,C(317)),c);CU(Ed(g));b=A02(k,d,b.getCDoubleArray8(),1000,DX([1111,2222,3333,4444,5555,6666,7777,8888]));c=L4();H(H(c,C(318)),b);CU(Ed(c));}
function ASB(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(CZ(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sq[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function A02(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(319);h=0;i=e;a:{while(h<g){if(GG(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.sC[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(320);}return C(321);}
function AZL(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(319);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.An[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(320);}return C(321);}
function AT$(b,c,d){var e,f,g,h;e=O0(d,b);if(!Bj(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.qc[h])return C(323);f=f+1|0;}return C(320);}
function AQi(b,c,d){var e,f,g,h;e=Wx(d,b);if(!Bj(c,e))return C(322);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.mC[h>>>1|0]&65535))return C(323);f=f+1|0;}return C(320);}
function CU(b){X6(C(2),b);}
function APp(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Yr(){B.call(this);this.rT=null;}
function AVE(a,b){return AI9(a.rT,b);}
function Yp(){B.call(this);this.Bt=null;}
function AW7(a,b){AJl(a.Bt,b);}
function Yq(){B.call(this);this.x3=null;}
function AST(a,b){b=b;return AEB(a.x3,b);}
function AHF(){Kk.call(this);this.dv=null;}
function KN(){var a=new AHF();A1$(a);return a;}
function H$(a,b,c,d){var e=new AHF();AX1(e,a,b,c,d);return e;}
function A1$(a){AB1(a);a.dv=new B2;}
function AX1(a,b,c,d,e){AB1(a);a.dv=new B2;Hi(a,b,c,d,e);}
function FW(a){var b,c;b=a.t;c=a.dv;W(b,c.bf-c.bn|0,c.bC-c.bs|0);}
function FO(a,b){Iz(a,0,0,BQ(b),CO(b));}
function Iz(a,b,c,d,e){Cr(a.dv,b,c,d,e);}
function EG(a,b,c,d,e){var f;f=a.u;DI(b,f.a+d|0,f.b+e|0,a.t,a.dv,c,a.X,a.bl,0);}
function SI(a,b,c,d){var e;e=a.u;DI(b,e.a,e.b,a.t,a.dv,c,a.X,a.bl,d);}
function Iy(a,b,c,d,e,f,g){DI(b,c,d,a.t,a.dv,e,!f?a.X:a.bl,!f?a.bl:a.X,g);}
function HC(a,b){BR(a.X,b);}
function Fh(a,b){BR(a.bl,b);}
function TC(){B.call(this);this.fw=null;}
function AVS(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fw.hr;f=e.t;d=d-f.a|0;g=c.b-f.b|0;W(e.u,d,g);c=a.fw;e=c.x.bw;b=b.j;d=0;a:{while(true){h=c.iX.data;if(d>=h.length)break;if(Fb(h[d],b)){b=c.qu.data[d];break a;}d=d+1|0;}b=null;}ZF(e,b);return 1;}
function ALz(a,b,c,d){if(!c&&d==2){b=a.fw;Sk(b,b.ei);}return 1;}
function AVL(a,b,c){var d,e;d=Bt();e=new K;M(e);U(H(e,C(324)),c);Bk(d,L(e));if(c)return null;d=b.j;e=!Fb(a.fw.ei,d)?null:d;TV(a.fw.jw,d.a,d.b);b=a.fw;Yx(b.jw,MS(b.x.bw));if(e===null)b=A6$;else{b=new ACc;b.sM=a;b.sN=e;}return b;}
function AVc(a,b,c){var d;b=Bt();d=new K;M(d);U(H(d,C(325)),c);Bk(b,L(d));return 1;}
function YU(){B.call(this);this.B8=null;}
function A1n(a,b){return WS(a.B8,b);}
function YT(){B.call(this);this.sn=null;}
function AZO(a,b){return WS(a.sn,b);}
function YS(){B.call(this);this.Ds=null;}
function AX_(a,b,c){var d,e;Bk(Bt(),C(326));d=!c?C(327):C(54);e=new K;M(e);H(H(H(e,C(328)),d),C(329));ACK(b,L(e));return 1;}
function YR(){B.call(this);this.Ee=null;}
function AUL(a){Bk(Bt(),C(330));}
function YQ(){B.call(this);this.EM=null;}
function ARd(a,b){Bk(Bt(),C(331));return 1;}
function YP(){B.call(this);this.AS=null;}
function A1u(a,b,c,d){var e,f,g;b=a.AS;e=( -d|0)/10|0;b=b.ei;f=b.t;f.a=f.a+e|0;f.b=f.b+e|0;b=b.u;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function Hn(){var a=this;B2.call(a);a.hl=0;a.ho=0;a.hm=0;a.hn=0;}
function CD(a){var b=new Hn();AT1(b,a);return b;}
function Dx(a,b,c){var d=new Hn();AWy(d,a,b,c);return d;}
function S(a){var b=new Hn();A0R(b,a);return b;}
function EY(a,b,c,d){var e=new Hn();Rr(e,a,b,c,d);return e;}
function BZ(a){var b=new Hn();KV(b,a);return b;}
function AT1(a,b){Rr(a,b,b,b,255);}
function AWy(a,b,c,d){Rr(a,b,c,d,255);}
function A0R(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.hl=Ko(P(b,1))*17|0;a.ho=Ko(P(b,2))*17|0;a.hm=Ko(P(b,3))*17|0;a.hn=255;}else{a.hl=LM(P(b,1),P(b,2));a.ho=LM(P(b,3),P(b,4));a.hm=LM(P(b,5),P(b,6));a.hn=J(b)!=9?255:LM(P(b,7),P(b,8));}IE(a.hl,a.ho,a.hm,a.hn,a);return;}}
function Rr(a,b,c,d,e){a.hl=b;a.ho=c;a.hm=d;a.hn=e;IE(b,c,d,e,a);}
function KV(a,b){a.hl=b.hl;a.ho=b.ho;a.hm=b.hm;a.hn=b.hn;BR(a,b);}
function Ko(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function LM(b,c){return (16*Ko(b)|0)+Ko(c)|0;}
var AGE=G(0);
function GD(b){return !b?I(BK,[C(155),C(166),C(332)]):I(BK,[C(155),C(166),C(332),C(34)]);}
function Wo(){B.call(this);this.mb=null;}
function ANT(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mb.dk;e=DQ();f=e-0.5+(DQ()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DQ()*0.3;h=0.5+DQ()*0.5;Iw(e,g,h,1.0,b.X);Iw(f,g,h,1.0,b.bl);b=a.mb;BR(b.dU.X,b.dk.X);b=a.mb;BR(b.dU.bl,b.dk.bl);}return 1;}
function Wl(){var a=this;B.call(a);a.nL=null;a.od=null;}
function AF5(){var a=this;B.call(a);a.f2=null;a.co=null;a.gP=null;a.hV=null;a.nS=null;a.cE=null;a.hJ=null;a.c2=0;a.f5=0;a.oa=0;a.kk=0;a.kz=0;a.hP=0;a.kT=null;a.o1=null;a.wI=null;a.nJ=null;}
function AJC(){var a=new AF5();ASG(a);return a;}
function ASG(a){a.co=Sj();a.gP=new Bg;a.hV=new Bg;a.cE=A75;a.kk=(-1);a.kz=1;}
function Nk(a,b){N8(a);a.cE=b;}
function JC(a,b,c){a.f2=b;ACG(a,c);N8(a);}
function JE(a,b){var c;a.nS=b.lx;c=b.o4.pI;BR(a.co.X,c);c=b.ja.jF;BR(a.co.bl,c);a.nJ=b.o4;}
function MR(a){a.hJ=BV(a.hJ,null);W(a.gP,0,0);a.cE=A75;a.kk=(-1);AA1(a.co);}
function ACG(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Ki(b);d=b.ce;BJ(a.f2);Cn(c,a.f2);e=Nc(a.f2,1.25);f=0;a.c2=Cg(2.0,d);a.f5=Cg(3.0,d);a.oa=Cg(12.0,d);g=0;h=a.cE.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=La(c,l.ny);n=a.oa;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fl;b.a=g;b.b=0;b=l.ew;b.a=n;b.b=e;Cr(l.kg,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gP;b.a=g;b.b=e;b=a.co.t;n=a.hP;if(!n){m=a.c2;m=(g+m|0)+Bc(m,a.cE.data.length)|0;}else m=(f+(a.c2*2|0)|0)+(a.f5*2|0)|0;b.a=m;if(!n)e=e+(a.c2*2|0)|0;else{n=a.c2;e=(Bc(e+n|0,a.cE.data.length)+n
|0)+(a.f5*2|0)|0;}b.b=e;}
function Ne(a,b,c){var d,e,f,g,h,i,j;W(a.co.u,b,c);d=a.c2+a.f5|0;e=a.cE.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fl;j.a=b+d|0;j.b=c+h|0;if(!a.hP){if(!i.ew.a)AEp();d=d+(i.ew.a+a.c2|0)|0;}else{if(!i.ew.b)AEp();h=h+(i.ew.b+a.c2|0)|0;}g=g+1|0;}}
function AEp(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EC(a){var b,c;b=a.gP;if(b.a&&b.b)return a.co.t;c=new Bu;Bm(c,C(333));N(c);}
function N8(a){a.kz=1;}
function L_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bH;if(!a.cE.data.length)return;if(a.hJ===null)a.hJ=CW(c);a:{if(!a.kz){d=a.gP;if(Bc(d.a,d.b))break a;}d=a.gP;if(!Bc(d.a,d.b))ACG(a,b);d=a.gP;e=d.a;f=d.b;if(!Bc(e,f))return;d=D5(c,e,f,b.cz);Cn(d,a.f2);g=Nc(a.f2,0.125);h=a.f2;i=h.em;g=g+i-(i+h.eG)/16.0;j=a.cE.data;e=j.length;f=0;while(f<e){h=j[f];B0(d,h.ny,h.kg.bn+a.oa,g);f=f+1|0;}CM(a.hJ,d);a.kz=0;EA(d);}if(!K$(a.co)){d=a.co;AIT(c,d.t,d.u,d.bl,a.c2,a.hV);d=a.co;h=d.t;k=d.u;d=d.X;e=a.c2;l=a.hV;l.a=(h.a-e|0)-
e|0;l.b=(h.b-e|0)-e|0;Bs(c,k.a+e|0,k.b+e|0,l,d);if(a.hP){d=a.co;AJ6(c,d.t,d.u,0,0,X$(a.nS,b.ce),a.nS.nW,a.hV);}}j=a.cE.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fl;e=h.a;f=h.b;h=d.ew;k=d.kg;l=a.hJ;o=a.nJ;DI(c,e,f,h,k,l,o.rW,U2(o,d.k8),b.cz);n=n+1|0;}b:{if(a.hP){j=a.cE.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.hV;e=(a.co.t.a-(a.c2*2|0)|0)-(a.f5*2|0)|0;h=d.ew;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fl;Bs(c,k.a+h.a|0,k.b,b,U2(a.nJ,d.k8));}p=p+1|0;}}}}
function NP(a,b,c){var d,e,f,g,h,i;d=Fb(a.co,b);e=!d?(-1):Ps(a,b);f=a.kk;if(f!=e){if(f>=0){g=a.cE.data[f];g.k8=0;if(a.wI!==null){h=Bt();g=Cl(g);i=new K;M(i);H(H(U(H(i,C(334)),f),C(335)),g);Bk(h,L(i));}}if(e>=0){h=a.cE.data[e];g=a.o1;if(g!==null)g.wO(b,e,h);h.k8=1;}a.kk=e;}return d&&GI(c)?1:0;}
function N_(a,b,c,d){var e,f;e=Ps(a,b);if(e>=0){f=a.cE.data[e];if(!AB4(f))f.mU.f();}return 1;}
function Ps(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cE.data;if(c>=d.length)return (-1);e=d[c];if(Gj(b,e.fl,e.ew))return c;if(a.hP){f=e.fl;g=f.a;e=e.ew;h=e.a;g=g+h|0;i=f.b;f=a.hV;f.a=(a.co.t.a-(a.c2*2|0)|0)-h|0;f.b=e.b;if(AEK(b,g,i,f))break;}c=c+1|0;}return c;}
function AD3(a){a.hP=1;}
function AIU(){var a=this;B.call(a);a.h$=null;a.gV=0.0;a.j4=0;a.ki=0;}
function Du(a,b){var c=new AIU();ARs(c,a,b);return c;}
function ARs(a,b,c){a.h$=b;a.gV=c;a.j4=400;a.ki=700;}
function A0L(a,b){if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){b=b;return a.gV===b.gV&&a.j4==b.j4&&a.ki==b.ki&&BO(a.h$,b.h$)?1:0;}return 0;}
function ABx(){B.call(this);this.uz=null;}
function AQR(a,b){var c;c=a.uz;if(b.bm==32)MR(c.dF);return 0;}
function ABr(){B.call(this);this.vD=null;}
function ASC(a,b){var c,d,e,f;b=b;c=a.vD;d=Nn(c.r);Gg(d,Ff(),c.ou);b=b.j;e=RD(4);f=new Uu;f.Dt=c;Jm(d,b,e,f);Gm(c.M,d);return 1;}
var ABs=G();
function A2T(a){Bk(Bt(),C(336));}
var ABt=G();
function AMe(a){Bk(Bt(),C(337));}
function BC(){var a=this;B.call(a);a.mU=null;a.kg=null;a.fl=null;a.ew=null;a.nc=null;a.tF=null;a.k8=0;a.ny=null;}
function W4(a,b){var c=new BC();CC(c,a,b);return c;}
function A4N(a,b,c,d){var e=new BC();AJh(e,a,b,c,d);return e;}
function CC(a,b,c){AJh(a,b,c,null,null);}
function AJh(a,b,c,d,e){a.kg=new B2;a.fl=new Bg;a.ew=new Bg;a.ny=c;a.tF=e;a.mU=b;a.nc=d;}
function AB4(a){return a.nc===null?0:1;}
function Uc(){B.call(this);this.Cy=null;}
function AX5(a,b){return b.jO&&b.bm==32?1:0;}
function Ud(){B.call(this);this.Bb=null;}
function ALY(a,b){var c,d,e,f,g,h;b=b;c=a.Bb;d=Nn(c.r);Gg(d,Ff(),Du(C(155),25.0));b=b.j;e=Q(BC,1);f=e.data;g=new BC;h=new ADU;h.Bs=c;CC(g,h,C(338));f[0]=g;Jm(d,b,CR(e),A76);Gm(c.M,d);return 1;}
function AHm(){var a=this;B.call(a);a.pT=0;a.pV=0;}
function UD(){var a=new AHm();ATn(a);return a;}
function A34(a,b){var c=new AHm();AK5(c,a,b);return c;}
function ATn(a){AK5(a,AKM(GR((AGB()))),GR((AGB()))^(-559038737));}
function AK5(a,b,c){var d;a.pT=b;a.pV=c;d=0;while(d<19){Ny(a);d=d+1|0;}}
function Ny(a){var b,c;b=a.pT;c=a.pV;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.pT=c;a.pV=b;return b;}
function AKM(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AKn(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function D6(a,b){return UF(a)*b|0;}
function UF(a){return 5.960464477539063E-8*(Ny(a)&16777215);}
function QT(a,b){var c,d,e;c=AKn(Ny(a));d=ASv( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function O4(){B.call(this);this.x8=null;}
function AQY(a,b,c){var d;d=a.x8;if(b===0.0)LY(d,100);}
function O3(){B.call(this);this.vP=null;}
function AZp(a,b){var c,d,e;c=a.vP;d=b.bm;if(d==32){c.lH=c.lH?0:1;e=1;}else if(d==13){LY(c,1);e=1;}else if(d!=8)e=0;else{PD(c,1);e=1;}return e;}
var Zz=G(0);
function AH4(b,c){var d;d=new Uy;d.xW=b;d.xV=c;return d;}
function AH$(){var a=this;B.call(a);a.hB=null;a.h_=0;a.lR=0;a.he=0;}
function AIi(a){var b=new AH$();AN3(b,a);return b;}
function AN3(a,b){a.hB=BM();a.he=0;a.lR=2048;a.h_=b;}
function Ks(a,b,c){var d,e,f,g,h,i;d=c.zt(b);e=a.lR;if(d>e){c=new Bu;f=new K;M(f);BN(U(H(U(H(f,C(339)),d),C(340)),e),41);Bm(c,L(f));N(c);}if(!a.h_){b=new BU;Bm(b,C(341));N(b);}a:{b=new B2;if(d){b:{c=a.hB;if(c.q>0){c=B7(c);g=d;while(true){if(!B_(c))break b;f=Ca(c);if(f.bf>=g)break;}Cr(b,f.bn,f.bs,g,a.h_);f.bn=f.bn+g;h=f.bf-g;f.bf=h;if(h===0.0)AG0(a.hB,f);break a;}}g=a.he;i=d;Cr(b,0.0,g,i,a.h_);BB(a.hB,ADH(i,a.he,a.lR-d|0,a.h_));a.he=a.he+a.h_|0;}}return b;}
function IZ(a,b){var c,d,e,f,g,h,i;a:{c=AK3(b);b=a.hB;if(b.q>0){d=B7(b);while(true){if(!B_(d))break a;e=Ca(d);if(e.bs===c.bs){f=e.bn;g=e.bf;h=f+g;i=c.bn;if(h===i){c.bn=f;c.bf=c.bf+g;Zm(d);}else{h=c.bf;if(i+h===f){c.bf=h+g;Zm(d);}}}}}}BB(a.hB,c);}
function MJ(a){return BF(a.lR,a.he);}
function Wz(){var a=this;B.call(a);a.rV=null;a.lL=null;}
function AUY(a,b,c){if(c)return A6$;return F3(a.lL.iY,b.j,a.rV,1);}
function ALT(a,b,c){return 1;}
function AWO(a,b){var c;c=a.lL;return F$(c.iY,b.j,c.xR);}
function ZU(){B.call(this);this.AG=null;}
function AQW(a,b,c,d){var e,f;b=a.AG;e=(Wf(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e8=Be(Bd(0,b.e8+Bc(e,f)|0),Uv(b));return 1;}
function QJ(){B.call(this);this.s2=null;}
function AQL(a,b){var c,d,e;c=a.s2;if(b.cM&&b.bm==79){if(!b.bL){b=c.x.bw;d=new W0;d.uW=c;Kc(b,d);}else{b=c.x.bw;d=new WZ;d.xt=c;Ja(b,d);}e=1;}else e=0;return e;}
function Rt(){B.call(this);this.x_=null;}
function AT9(a,b){var c,d,e,f,g,h,i;b=b;c=a.x_;d=Nn(c.r);Gg(d,Ff(),Du(C(155),25.0));b=b.j;e=Q(BC,5);f=e.data;g=new BC;h=new TN;h.rE=c;CC(g,h,C(342));f[0]=g;g=new BC;h=new TO;h.sf=c;CC(g,h,C(343));f[1]=g;g=new BC;h=new TP;h.ty=c;CC(g,h,C(344));f[2]=g;h=new BC;i=new TQ;i.xG=c;CC(h,i,C(345));f[3]=h;h=new BC;i=new TR;i.x$=c;CC(h,i,C(346));f[4]=h;Jm(d,b,CR(e),A76);Gm(c.M,d);return 1;}
function Rs(){B.call(this);this.Ab=null;}
function A0p(a,b){var c,d,e,f;c=a.Ab;d=c.x.bw;e=new Xz;e.wX=c;f=Q(B,1);f.data[0]=b;CV(d,e,C(347),f);}
function ABG(){B.call(this);this.m3=null;}
function AZF(a,b){var c,d,e,f,g,h;c=a.m3;d=c.qh;if(d!==null){e=c.e6.u;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qh=g;}b=b.j;f=b.a;c=c.gA;d=c.t;f=f-d.a|0;h=b.b-d.b|0;W(c.u,f,h);return 1;}
function ATZ(a,b,c){var d;if(!c){d=b.j;b=a.m3;if(!Fb(b.e6,d))d=null;b.qh=d;}return A6$;}
var AF9=G();
function AK$(b){var c,d;c=HI(b,250,64);Hx(c,C(268),25.0);J4(c,187,187,187);B0(c,C(348),0.0,24.0);B0(c,C(348),0.25,56.0);d=CW(b);CM(d,c);EA(c);return d;}
var Di=G(0);
var A7j=null;var A7M=null;var A7k=null;var A62=null;var A7m=null;var A7l=null;var A7o=null;var A7n=null;var A7q=null;var A7p=null;var A7r=null;function FI(){FI=Bn(Di);AUa();}
function AUa(){A7j=CD(187);A7M=S(C(349));A7k=CD(55);A62=CD(43);A7m=Dx(33,66,131);A7l=Dx(60,63,65);A7o=S(C(350));A7n=S(C(351));A7q=EY(85,85,85,128);A7p=EY(43,43,43,0);A7r=S(C(254));}
function Ys(){var a=this;B.call(a);a.qR=null;a.lX=null;}
function AO1(a,b,c){var d;if(!c){d=F3(a.lX.iE,b.j,a.qR,1);if(d!==null)return d;}return A6$;}
function AU_(a,b,c){return 1;}
function ANY(a,b){var c;c=a.lX;return F$(c.iE,b.j,Rl(c.x.bw));}
function VN(){B.call(this);this.rC=null;}
function A1r(a,b,c,d){var e,f;b=a.rC;e=(Wf(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fE=Be(Bd(0,b.fE+Bc(e,f)|0),ZV(b));return 1;}
function AC_(){B.call(this);this.wH=null;}
function ANc(a,b){var c,d;a:{c=a.wH;switch(b.bm){case 67:Qx(c);d=1;break a;case 86:ZC(c);d=1;break a;default:}d=0;}return d;}
var AC$=G();
function AYf(a,b,c){return 0;}
function AC9(){B.call(this);this.sw=null;}
function ANh(a,b,c){var d,e;d=a.sw;c=d.eb+1|0;d.eb=c;d=JO(F(Kn));e=new K;M(e);H(H(U(e,c),C(352)),d);e=L(e);$rt_globals.console.info($rt_ustr(e));ACK(b,e);return 1;}
var AC8=G();
function AQc(a){return null;}
function ADa(){B.call(this);this.zX=null;}
function A0Y(a){var b,c;b=a.zX;c=new Vr;c.qN=b;return c;}
function R8(){B.call(this);this.DU=null;}
function ATB(a,b){return 0;}
function Pu(){B.call(this);this.zo=null;}
function ALO(a,b){var c;c=a.zo;if(b.jO&&b.bm==27){b=ADl(c.M);if(b!==null){b=b.dh;if(b===null){b=new F2;Y(b);N(b);}b.i6.f();}}return 0;}
function Pv(){B.call(this);this.vN=null;}
function AXt(a,b){var c,d,e,f,g,h,i;b=b;c=a.vN;d=Nn(c.r);Gg(d,Ff(),Du(C(155),25.0));b=b.j;e=Q(BC,1);f=e.data;g=new BC;h=c.M;i=new Xm;i.yZ=c;CC(g,Ou(h,i),C(353));f[0]=g;Jm(d,b,CR(e),A76);Gm(c.M,d);return 1;}
function Pw(){B.call(this);this.Bm=null;}
function AZD(a,b){var c,d,e;c=a.Bm;d=c.eI;if(d!==null){e=new AAI;e.B1=c;e.B2=b;GK(d,b,e);}}
function Px(){B.call(this);this.zl=null;}
function A1h(a,b){var c,d,e;b=b;c=a.zl;if(DN(c.r,c.eI)){d=c.l_;b=b.j;e=c.eI;GP(d,b,e,c,e,c,new Xx);}return 1;}
var AG9=G(0);
function AKt(b){H0(b,A4l(C(354),C(177),ABY(C(355))));}
function Xo(){B.call(this);this.yh=null;}
function ANC(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.yh;d=c.c8;if(d===null)e=1;else{if(!BW(d.fV,b.j)){d=c.c8.gm;f=b.j;g=Q(BC,1);h=g.data;b=new BC;i=new UK;i.vx=c;CC(b,i,C(356));h[0]=b;Ld(d,f,CR(g));}else{c=c.c8;b=b.j;if(BW(c.fV,b)){d=c.gm;f=c.fV;i=c.Aw;j=d.bY;BJ(j);k=new QW;k.qE=j;j=new QV;j.BV=c;GP(d,b,f,i,f,k,j);}}e=1;}return e;}
function Ug(){B.call(this);this.Cu=null;}
function ARL(a,b){return 1;}
function Uf(){B.call(this);this.tR=null;}
function ARc(a,b){var c,d;c=a.tR;if(b.bm!=32)d=0;else{AAP(c.fL,AIs());d=1;}return d;}
function AAQ(){B.call(this);this.qV=null;}
function ARK(a,b){var c,d,e,f,g,h;b=b;c=a.qV;d=Q(BC,2);e=d.data;f=new BC;g=c.M;h=new Yi;h.wr=c;CC(f,Ou(g,h),C(357));e[0]=f;g=new BC;f=c.M;h=new Yk;h.t2=c;CC(g,Ou(f,h),C(358));e[1]=g;f=CR(d);h=c.M;c=c.j_;L9(h,c.c4,c.i0,b.j,f);return 1;}
function QQ(){B.call(this);this.Fp=null;}
function APx(a,b){return 0;}
var Do=G(0);
var A7t=null;var A77=null;var A7v=null;var A7u=null;var A7x=null;var A7w=null;var A7z=null;var A7y=null;var A7B=null;var A7A=null;var A7C=null;function AN4(){AN4=Bn(Do);ASS();}
function ASS(){A7t=CD(206);A77=S(C(359));A7v=S(C(360));A7u=S(C(261));A7x=S(C(361));A7w=S(C(250));A7z=S(C(362));A7y=S(C(363));A7B=EY(107,106,107,128);A7A=EY(30,31,34,0);A7C=S(C(263));}
function Cp(){CI.call(this);this.k9=null;}
var A78=null;var A79=null;var A7$=null;var A7_=null;var A8a=null;var A7a=null;var A8b=null;var A8c=null;var A8d=null;var A8e=null;var A8f=null;var A8g=null;var A8h=null;var A8i=null;var A8j=null;var A7D=null;function TM(){TM=Bn(Cp);AYn();}
function DU(a,b,c){var d=new Cp();ZP(d,a,b,c);return d;}
function A4D(a,b,c,d){var e=new Cp();ADj(e,a,b,c,d);return e;}
function ZP(a,b,c,d){TM();DJ(a,b,c);a.k9=JH(d,null);}
function ADj(a,b,c,d,e){TM();DJ(a,b,c);a.k9=JH(d,e);}
function AYn(){var b,c;b=new Cp;AN4();ZP(b,C(364),0,A77);A78=b;A79=DU(C(365),1,S(C(366)));A7$=DU(C(367),2,S(C(368)));A7_=DU(C(369),3,S(C(370)));A8a=DU(C(371),4,A77);A7a=DU(C(372),5,S(C(373)));A8b=DU(C(374),6,S(C(375)));A8c=DU(C(376),7,S(C(377)));A8d=DU(C(378),8,S(C(379)));c=new Cp;FI();ADj(c,C(380),9,A7M,S(C(362)));A8e=c;A8f=A4D(C(381),10,A7M,S(C(264)));A8g=DU(C(382),11,S(C(383)));A8h=DU(C(384),12,S(C(385)));A8i=DU(C(386),13,A77);b=DU(C(387),14,S(C(388)));A8j=b;A7D=I(Cp,[A78,A79,A7$,A7_,A8a,A7a,A8b,A8c,A8d,
A8e,A8f,A8g,A8h,A8i,b]);}
function Kp(){var a=this;B.call(a);a.g2=null;a.mO=null;}
function JH(a,b){var c=new Kp();AYQ(c,a,b);return c;}
function AYQ(a,b,c){a.g2=b;a.mO=c;}
function IY(){var a=this;B.call(a);a.lx=null;a.tc=null;a.oA=null;a.Eg=3;a.ja=null;a.BG=null;a.Fs=null;a.o4=null;a.mZ=null;a.oL=null;}
function A8k(a,b,c,d,e,f,g){var h=new IY();LO(h,a,b,c,d,e,f,g);return h;}
function LO(a,b,c,d,e,f,g,h){a.tc=Du(C(166),16.0);a.oA=Du(C(14),16.0);a.Eg=3;a.BG=b;a.Fs=c;a.ja=d;a.o4=e;a.lx=f;a.mZ=g;a.oL=h;}
function AJM(){var a=this;B.call(a);a.nW=null;a.s9=0;}
function AHW(a,b){var c=new AJM();A0Q(c,a,b);return c;}
function A0Q(a,b,c){var d;d=new B2;a.nW=d;a.s9=b;d.bC=c;}
function X$(a,b){return Cg(a.s9,b);}
var DP=G(0);
var A7H=null;var A7I=null;var A7E=null;var A7F=null;var A7G=null;var A70=null;var A71=null;var A7J=null;var A7K=null;function AUT(){AUT=Bn(DP);AZH();}
function AZH(){A7H=S(C(250));A7I=S(C(389));A7E=S(C(266));A7F=S(C(375));A7G=S(C(359));A70=S(C(250));A71=S(C(390));A7J=S(C(391));A7K=Dx(43,45,48);}
var XV=G(0);
var X7=G();
function AW_(a,b,c){var d,e;d=b;e=c;b=new K;M(b);U(H(U(H(b,C(392)),d),C(393)),e);CU(L(b));return d+e|0;}
var XW=G(0);
var X5=G();
function AXP(a,b,c){var d,e;d=b;e=c;b=new K;M(b);EH(H(EH(H(b,C(394)),d),C(393)),e);CU(L(b));return d+e;}
var AEY=G();
var AH8=G(0);
function UV(){B.call(this);this.oh=null;}
var A75=null;function Lx(){var a=new UV();AIC(a);return a;}
function AIC(a){a.oh=BM();}
function D2(a,b,c){XT(a,C9(b,c));}
function C9(b,c){return W4(c,b);}
function FF(a,b,c){I3(a,b,c,null);}
function I3(a,b,c,d){XT(a,A4N(null,b,c,d));}
function XT(a,b){BB(a.oh,b);}
function GZ(a){return CR(Go(a.oh,A75));}
function AIa(){A75=Q(BC,0);}
var DT=G(0);
var A7U=null;var A7V=null;var A7R=null;var A7S=null;var A7T=null;var A7Y=null;var A7Z=null;var A7W=null;var A7X=null;function AYM(){AYM=Bn(DT);AZq();}
function AZq(){A7U=S(C(259));A7V=S(C(395));A7R=S(C(303));A7S=S(C(396));A7T=S(C(349));A7Y=S(C(259));A7Z=S(C(395));A7W=EY(118,121,122,128);A7X=Dx(63,66,68);}
var HZ=G(0);
var Qa=G();
function A0e(a,b,c,d){var e;b=Bt();d=Cl(d);e=new K;M(e);H(H(U(H(e,C(397)),c),C(335)),d);Bk(b,L(e));}
var Qb=G();
function TE(){B.call(this);this.z9=null;}
function AZi(a,b){var c;c=a.z9.lL;c.e8=FT(b,Uv(c));}
function PP(){B.call(this);this.Dy=null;}
function ANN(a,b){var c,d,e,f;c=b.data;b=Bt();d=Cl(c[0]);e=new K;M(e);H(H(e,C(286)),d);Bk(b,L(e));b=Bt();f=c[1];d=new K;M(d);H(H(d,C(398)),f);Bk(b,L(d));}
function PO(){B.call(this);this.EI=null;}
function AMs(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=EQ(K3(b,1));b=Bt();d=Cl(c[1]);if(g===null)c=C(23);else{c=new K;M(c);BY(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BY(c,C(37));BN(c,i[h]);h=h+1|0;}BY(c,C(38));c=L(c);}e=new K;M(e);H(H(H(H(e,C(399)),d),C(400)),c);Bk(b,L(e));}
function PL(){B.call(this);this.Cb=null;}
function ALG(a,b){ADk(a.Cb,b);}
function PJ(){B.call(this);this.ER=null;}
function A2x(a,b){var c,d,e,f,g;c=b.data;d=Bt();e=Cl(c[0]);f=new K;M(f);H(H(f,C(286)),e);Bk(d,L(f));g=CQ(K3(b,1));b=Bt();d=Cl(c[1]);c=AGp(g);e=new K;M(e);H(H(H(H(e,C(401)),d),C(402)),c);Bk(b,L(e));}
var AHO=G();
function Uz(){B.call(this);this.tn=null;}
function AXQ(a,b){var c;c=a.tn.lX;c.fE=FT(b,ZV(c));}
function AB7(){B.call(this);this.Dz=null;}
function AOI(a,b){return 0;}
function AKy(){var a=this;B.call(a);a.kp=null;a.oW=null;a.gM=null;a.Fg=null;}
function ABY(a){var b=new AKy();A0H(b,a);return b;}
function A0H(a,b){var c,d,e;c=null;d=null;e=null;a.kp=c;a.oW=d;a.gM=b;a.Fg=e;}
function ACh(a){var b,c;b=a.gM;if(b===null)return C(21);c=AFA(b,C(403));return c==(-1)?a.gM:Dv(a.gM,c+1|0);}
function AWe(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.kp,c.kp)&&BO(a.oW,c.oW)&&BO(a.gM,c.gM)?1:0;}return 0;}
function I6(){var a=this;B.call(a);a.t$=null;a.q7=null;a.rM=null;a.AB=null;a.sK=null;a.le=null;}
function A8l(a,b,c,d,e,f){var g=new I6();Oz(g,a,b,c,d,e,f);return g;}
function Oz(a,b,c,d,e,f,g){a.t$=b;a.q7=c;a.rM=d;a.AB=e;a.sK=f;a.le=g;}
function Kl(){var a=this;B.call(a);a.rW=null;a.pI=null;a.uK=null;}
function A8m(a,b,c){var d=new Kl();K6(d,a,b,c);return d;}
function K6(a,b,c,d){a.rW=b;a.pI=c;a.uK=d;}
function U2(a,b){return !b?a.pI:a.uK;}
function AIv(){var a=this;B.call(a);a.jF=null;a.l3=null;a.n9=null;}
function AHy(a,b,c){var d=new AIv();A1I(d,a,b,c);return d;}
function A1I(a,b,c,d){a.jF=b;a.l3=c;a.n9=d;}
function Cu(){CI.call(this);this.nU=null;}
var A8n=null;var A8o=null;var A8p=null;var A8q=null;var A8r=null;var A8s=null;var A8t=null;var A8u=null;var A8v=null;var A8w=null;var A8x=null;var A8y=null;var A8z=null;var A8A=null;var A8B=null;var A7s=null;function AE_(){AE_=Bn(Cu);AXV();}
function Eb(a,b,c){var d=new Cu();AA_(d,a,b,c);return d;}
function A0S(a,b,c,d){var e=new Cu();AG$(e,a,b,c,d);return e;}
function AA_(a,b,c,d){AE_();DJ(a,b,c);a.nU=JH(d,null);}
function AG$(a,b,c,d,e){AE_();DJ(a,b,c);a.nU=JH(d,e);}
function AXV(){var b;b=new Cu;FI();AA_(b,C(364),0,A7M);A8n=b;A8o=Eb(C(365),1,S(C(404)));A8p=Eb(C(367),2,S(C(405)));A8q=Eb(C(369),3,S(C(406)));A8r=Eb(C(371),4,S(C(404)));A8s=Eb(C(372),5,Dx(188,63,60));A8t=Eb(C(374),6,S(C(407)));A8u=Eb(C(376),7,S(C(408)));A8v=Eb(C(378),8,S(C(409)));A8w=A0S(C(380),9,A7M,Dx(52,65,52));A8x=A0S(C(381),10,S(C(410)),S(C(411)));A8y=Eb(C(382),11,S(C(412)));A8z=Eb(C(384),12,S(C(413)));A8A=Eb(C(386),13,A7M);b=Eb(C(387),14,S(C(388)));A8B=b;A7s=I(Cu,[A8n,A8o,A8p,A8q,A8r,A8s,A8t,A8u,A8v,A8w,
A8x,A8y,A8z,A8A,b]);}
var AK4=G();
function J8(b,c){var d,e,f;if(c<=0)return C(21);d=B5(c);e=d.data;e[0]=AKo(D6(b,52));f=1;while(f<c){e[f]=AKo(D6(b,62));f=f+1|0;}return Hr(d);}
function AKo(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AFu=G();
function ALb(){var a=this;B.call(a);a.Jr=null;a.OS=null;a.IG=0;a.Po=0;}
var AEe=G(0);
function AKv(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BK,8);e=DL(8);f=B5(16);g=0;h=0;i=0;while(true){j=BL(i,b);if(j>0)break;k=j>=0?10:(c.bb(CY(i))).mV;if(k==10){d=AGP(ED(f,0,g),d,h);e=AB3(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=KG(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AGP(ED(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bb(CY(j))).mV==10){e=AB3(1,e,h);i=j;}else e=AB3(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new Zs;d=AE1(d,h);if(m.length!=h)e=Ok(e,h);c.ke=d;c.CC=e;return c;}
function AIu(b){var c,d;c=J(b);BJ(b);d=new PB;d.t4=b;return AKv(c,d);}
var C2=G();
var AJ2=G(C2);
var AKm=G(C2);
var AIL=G(C2);
var AIW=G(C2);
var AKB=G(C2);
function U6(){B.call(this);this.r$=null;}
function APn(a){var b;b=a.r$;Bk(Bt(),b);}
var HJ=G(CI);
var A8C=null;var A63=null;var A8D=null;function AQw(){AQw=Bn(HJ);AWT();}
function A2Q(a,b){var c=new HJ();AEP(c,a,b);return c;}
function AEP(a,b,c){AQw();DJ(a,b,c);}
function AWT(){var b;A8C=A2Q(C(414),0);b=A2Q(C(415),1);A63=b;A8D=I(HJ,[A8C,b]);}
function PB(){B.call(this);this.t4=null;}
function AVa(a,b){return PA(P(a.t4,b.bp));}
function Zs(){var a=this;B.call(a);a.ke=null;a.CC=null;}
var AIr=G();
function Cg(b,c){return CZ(b*c);}
function Gr(){var a=this;B.call(a);a.g8=0;a.nB=null;}
var AFl=G();
function Th(){var a=this;B.call(a);a.rv=null;a.ud=null;a.AE=null;}
var AIx=G(0);
function AHM(b){if(b===null)return C(176);if(!DA(b,C(416))&&!DA(b,C(417))&&!DA(b,C(418))&&!DA(b,C(419))&&!DA(b,C(420))&&!DA(b,C(421))){if(DA(b,C(422)))return C(177);if(DA(b,C(423)))return C(179);if(DA(b,C(424)))return C(180);if(!DA(b,C(425))&&!DA(b,C(426)))return C(176);return C(427);}return C(178);}
function AH5(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(NU(b)){case -1655966961:if(!Bj(b,C(180)))break a;c=4;break a;case 3401:if(!Bj(b,C(179)))break a;c=3;break a;case 98723:if(!Bj(b,C(178)))break a;c=2;break a;case 3213227:if(!Bj(b,C(427)))break a;c=5;break a;case 3254818:if(!Bj(b,C(177)))break a;c=1;break a;case 3556653:if(!Bj(b,C(176)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=En();e
=new K;M(e);H(H(e,C(428)),b);Bk(d,L(e));c=0;break b;}c=0;}return c;}
function AA0(){B.call(this);this.qF=null;}
function APs(a,b,c,d){return LL(a.qF,b,c,d);}
function VU(){B.call(this);this.wZ=null;}
function A2g(a,b,c){return Hd(a.wZ,b,c);}
function VT(){B.call(this);this.yN=null;}
function AP6(a){var b,c;b=a.yN;c=new AB0;c.vM=b;return c;}
function VV(){var a=this;B.call(a);a.DD=null;a.DE=null;a.DF=null;}
function Xw(){B.call(this);this.kq=null;}
function A2W(a,b){var c,d,e,f,g;c=a.kq;d=c.mt;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kv;e.a=E5(0,e.a+f|0,c.gT.a-c.jS.a|0);c=a.kq;d=c.kv;d.b=E5(0,d.b+g|0,c.gT.b-c.jS.b|0);}a.kq.mt=b.j;return 1;}
var AFs=G();
function LU(){return "clipboard" in $rt_globals.navigator?1:0;}
function AG4(){var a=this;B.call(a);a.cO=null;a.cf=null;a.kw=null;a.kN=null;a.nY=null;a.jZ=null;}
function Nn(a){var b=new AG4();AZ_(b,a);return b;}
function AZ_(a,b){a.cf=BM();a.jZ=A76;a.cO=b;Ba(b.dS,a);}
function Gg(a,b,c){a.kw=c;a.nY=b;b=B7(a.cf);while(B_(b)){JE(Ca(b),a.nY);}}
function Jm(a,b,c,d){a.jZ=d;R9(a,b,c);}
function R9(a,b,c){var d,e;d=a.cO;e=d.bO;if(Bc(e.a,e.b)&&d.ce!==0.0){if(a.kw!==null&&!Jr(a)){a.kN=Fi(a.cO,a.kw);d=U8(a,b,c,null,null);b=new RW;b.tV=a;d.kT=b;FL(a.cO,a);return;}b=new BU;Y(b);N(b);}c=new C$;Bm(c,C(429));N(c);}
function Mk(a){if(Jr(a)){ABj(a.cO,a);ABa(a,null);a.jZ.f();a.jZ=A76;}}
function U8(a,b,c,d,e){var f,g,h;f=AJC();AD3(f);Nk(f,c.cY());JE(f,a.nY);JC(f,a.kN,a.cO);if(d===null)g=b.a;else{g=b.a;g=a.cO.bO.a<((g+(EC(d)).a|0)+(EC(f)).a|0)?g-(EC(f)).a|0:(g+(EC(d)).a|0)-d.f5|0;}h=b.b;b=a.cO.bO;Ne(f,Bd(0,Be(g,b.a-(EC(f)).a|0)),Bd(0,Be(h,b.b-(EC(f)).b|0)));b=new ABP;b.vB=a;b.vy=f;b.vz=e;f.o1=b;BB(a.cf,f);return f;}
function A2C(a,b,c){var d;a.kN=Fi(a.cO,a.kw);d=B7(a.cf);while(B_(d)){JC(Ca(d),a.kN,a.cO);}}
function AEk(a){var b,c;if(EE(a.cf))return;B$(a.cO.bH,1);b=0;while(true){c=a.cf;if(b>=c.q)break;L_(BG(c,b),a.cO);b=b+1|0;}}
function AP3(a,b){var c;if(!Jr(a))return 0;a:{switch(b.bm){case 27:Mk(a);c=1;break a;default:}c=0;}return c;}
function ABa(a,b){var c,d;c=a.cf.q-1|0;a:{while(true){if(c<0)break a;d=BG(a.cf,c);if(b===d)break;EN(a.cf,c);MR(d);c=c+(-1)|0;}}}
function Jr(a){return a.cf.q<=0?0:1;}
function ART(a){var b,c;R$(a.cO.dS,a);ABj(a.cO,a);b=a.cf;c=B7(b);while(B_(c)){MR(Ca(c));}Ix(b);}
function WY(){B.call(this);this.x6=null;}
function APN(a,b){Ml(a.x6,b);}
function UM(){B.call(this);this.zG=null;}
function A2i(a,b){var c,d,e,f;c=a.zG;if(c.gz!=3&&c.fc!=3){b=b.data;c.gS=3;d=CQ(b[0]);e=EQ(b[1]);N5(c.h,d,e);if(c.fN){b=E2(c);f=JK(E3(),c.i1);c=new K;M(c);H(HK(H(H(c,b),C(430)),f),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}
function Q1(){B.call(this);this.zp=null;}
function AVG(a,b){var c,d,e,f,g,h;c=a.zp;if(c.fc!=3){d=b.data;c.gz=3;if((CQ(d[2])).data[0]!=1)Ml(c,b);else{e=CQ(d[0]);f=EQ(d[1]);g=c.gS!=3?0:1;Rn(c.h,e,f,g);if(c.fN){b=E2(c);h=JK(E3(),c.i1);c=new K;M(c);H(HK(H(H(c,b),C(431)),h),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}}
function PR(){B.call(this);this.kf=null;}
function AU1(a){return a.kf;}
var AJY=G(0);
var LP=G(0);
function Q6(){B.call(this);this.uk=null;}
function AV0(a,b){return La(a.uk,b);}
function Pr(){B.call(this);this.AI=null;}
function A1y(a,b){var c,d;c=a.AI;d=b.bp;return PA(c.charCodeAt(d)&65535);}
var AGr=G();
function AIT(b,c,d,e,f,g){g.a=c.a;g.b=f;Bs(b,d.a,d.b,g,e);Bs(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bs(b,d.a,d.b+f|0,g,e);Bs(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function AJ6(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bs(b,j,k,i,h);Bs(b,j,k,i,h);Bs(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bs(b,l,j,i,h);Bs(b,l,j,i,h);Bs(b,l+g|0,j+g|0,i,h);}
function QK(){var a=this;B.call(a);a.cP=null;a.qb=null;a.fr=null;a.ec=0;a.ct=0;a.jb=null;a.jV=null;a.hu=0;a.w6=0;}
function Po(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.ec;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}ER(c);j=d+(-1)|0;b=Dl(d);d=Bc(j,a.ct)%a.fr.b|0;GQ(a,c,b,a.hu,g);JJ(a.cP,c,0,d);if(!(j%a.ec|0))break;d=j;}}else{ER(b);k=a.ec-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GQ(a,b,Dl(j),Bc(a.ct,k)+a.hu|0,g);k=k+(-1)|0;j=h;}CM(a.cP,b);j=Bd(i,e);}return j;}k=a.ec;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}ER(c);b=Dl((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.ct)%a.fr.b|0;GQ(a,c,b,a.hu,g);JJ(a.cP,c,0,d);if(!(j%a.ec|0))break;d=j;}}else{ER(b);d=0;while(d<a.ec){h=h+1|0;GQ(a,b,Dl((h>e?h-f|0:h)+f|0),Bc(a.ct,d)+a.hu|0,g);d=d+1|0;}CM(a.cP,b);j=Be(i,e);}return j;}
function VS(b,c,d,e){c=c.data;return d<c.length&&c[d]?JY(b.d2,b,c[d]):e.k6;}
function Ni(a,b,c,d,e,f){DI(b,a.qb.a+d.a|0,c+d.b|0,a.jb,a.jV,a.cP,e,f,a.w6);}
function GQ(a,b,c,d,e){B0(b,c,a.fr.a-20.0*e,d);}
var AEh=G();
function Gj(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AEK(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function TU(){var a=this;B.call(a);a.p6=null;a.p7=null;a.ir=null;}
function A43(a,b,c){var d=new TU();AF2(d,a,b,c);return d;}
function AF2(a,b,c,d){a.p6=b;a.p7=c;a.ir=d;}
function GN(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.ir.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.h5:i.h6;k=!c?i.ob:i.oc;l=BL(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function L3(){var a=this;B.call(a);a.h6=0;a.oc=0;a.h5=0;a.ob=0;a.oS=0;}
function Nj(a,b,c,d,e){var f=new L3();A0U(f,a,b,c,d,e);return f;}
function A0U(a,b,c,d,e,f){a.h6=b;a.oc=c;a.h5=d;a.ob=e;a.oS=f;}
var So=G(0);
var A6$=null;function AKc(){A6$=new Rj;}
function ACc(){var a=this;B.call(a);a.sM=null;a.sN=null;}
function AV1(a,b){var c,d,e;c=a.sM;d=a.sN;c=c.fw.ei.u;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Co(d,b);}
var Gd=G(I7);
var ADm=G(Fy);
function ACA(){B.call(this);this.zA=null;}
function AT_(a,b){var c,d;c=a.zA;Vs(c,Fw(c,b.j));b=Bi(c);d=c.d;N1(b,d.w,d.A);H8(c);}
function T3(){B.call(this);this.xN=null;}
function A1W(a,b){var c,d;c=a.xN;d=c.eb+1|0;c.eb=d;c=new K;M(c);H(H(U(c,d),C(432)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function Vy(){B.call(this);this.xY=null;}
function A0w(a){var b,c;b=a.xY;c=new K;M(c);H(H(H(c,C(433)),b),C(434));$rt_globals.console.info($rt_ustr(L(c)));}
function G5(){var a=this;B.call(a);a.dj=null;a.iA=null;}
function ACL(a,b,c){a.dj=b;a.iA=c;}
function WF(a,b){var c;c=A2h(a.dj.cj,b);FY(c,a.iA.c4);DK(c,M5(BE(a)));AJH(c);b=new PS;b.tZ=a;b.t0=c;S9(c,b);b=new PT;b.xM=a;c.wR=b;return c;}
function AGe(a,b){var c,d,e;c=a.BC(b);if(c!==null){d=a.dj;e=a.iA;L9(d,e.c4,e.i0,b,c);}return c===null?0:1;}
function Y8(){var a=this;G5.call(a);a.eR=null;a.oM=null;a.pW=null;}
function AMD(a){var b;a.eR=null;b=null;a.pW=b;a.oM=b;}
function AXA(a,b){var c,d,e,f;if(BW(a.eR.es,b))return ZK(a,1,C(299));if(BW(a.eR.eq,b))return ZK(a,0,C(300));c=Q(BC,2);d=c.data;b=new BC;e=new Xr;e.zV=a;CC(b,e,C(299));d[0]=b;b=new BC;f=new Xs;f.r3=a;CC(b,f,C(300));d[1]=b;return CR(c);}
function ZK(a,b,c){var d,e,f,g;d=Q(BC,1);e=d.data;f=new BC;g=new AAd;g.qq=a;g.qp=b;CC(f,g,c);e[0]=f;return CR(d);}
function H5(a,b){var c,d;c=a.dj.cj.e1;d=new ZA;d.yu=a;d.yt=b;Ja(c,d);}
var ADB=G(Es);
var A8E=null;function W9(b){var c;c=new K;M(c);return L(EH(c,b));}
function AGk(){A8E=F($rt_floatcls());}
var Gv=G();
var A8F=null;var A8G=null;var A59=null;var A58=null;var A57=null;function AJt(){A8F=DX([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A8G=AIz([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A59=AIz([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A58=new ABw;A57=new TX;}
var JB=G();
var A8H=0;var A8I=null;var A8J=null;function AJU(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.m8=0;c.mX=0;return;}if(f)d=e|8388608;else{d=e<<1;while(II(Df(Bp(d),Bp(8388608)),FH)){d=d<<1;f=f+(-1)|0;}}g=AJ1(A8J,f);if(g<0)g= -g|0;h=A8J.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jy(d,A8I.data[e],i);if(j<A8H){while($rt_ucmp(j,A8H)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A8J.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Jy(d,
A8I.data[e],i);}e=d<<1;d=e+1|0;h=A8I.data;f=g+1|0;k=h[f];l=i-1|0;m=Jy(d,k,l);n=Jy(e-1|0,A8I.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DF(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.m8=d;c.mX=g-50|0;}
function Jy(b,c,d){return GR(Gb(Ci(Df(Bp(b),D(4294967295, 0)),Df(Bp(c),D(4294967295, 0))),32-d|0));}
function AI3(){A8H=$rt_udiv((-1),10);A8I=DX([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A8J=DX([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function TX(){var a=this;B.call(a);a.m8=0;a.mX=0;a.rf=0;}
function On(){var a=this;B.call(a);a.Ey=null;a.wK=0.0;a.CV=0.0;a.gr=null;a.jl=null;a.nV=null;a.f9=0;}
function AKV(a,b){var c;if(b!==null){a.jl=b;return a;}c=new BU;Bm(c,C(435));N(c);}
function AGa(a,b){var c;if(b!==null){a.nV=b;return a;}c=new BU;Bm(c,C(435));N(c);}
function YZ(a,b,c,d){var e,f,g,$$je;e=a.f9;if(!(e==2&&!d)&&e!=3){a.f9=d?2:1;while(true){try{f=AHe(a,b,c);}catch($$e){$$je=EX($$e);if($$je instanceof Bu){g=$$je;N(AWn(g));}else{throw $$e;}}if(Id(f))return f;if(I1(f)){if(d&&D9(b)){g=a.jl;Hm();if(g===A6A)return Eu(Ch(b));if(Ch(c)<=J(a.gr))return A6D;Fv(b,b.Z+Ch(b)|0);if(a.jl===A6B)Nf(c,a.gr);}return f;}if(Rq(f)){g=a.jl;Hm();if(g===A6A)return f;if(g===A6B){if(Ch(c)<J(a.gr))return A6D;Nf(c,a.gr);}Fv(b,b.Z+K5(f)|0);}else if(Me(f)){g=a.nV;Hm();if(g===A6A)break;if(g
===A6B){if(Ch(c)<J(a.gr))return A6D;Nf(c,a.gr);}Fv(b,b.Z+K5(f)|0);}}return f;}b=new C$;Y(b);N(b);}
function AIB(a,b){var c,d,e,f;c=a.f9;if(c&&c!=3){b=new C$;Y(b);N(b);}if(!Ch(b))return AHG(0);if(a.f9)a.f9=0;d=AHG(Bd(8,Ch(b)*a.wK|0));while(true){e=YZ(a,b,d,0);if(I1(e))break;if(Id(e))d=AAk(a,d);if(!NE(e))continue;TW(e);}b=YZ(a,b,d,1);if(NE(b))TW(b);while(true){f=a.f9;if(f!=3&&f!=2)break;a.f9=3;if(I1(A6E)){d.ek=d.Z;d.Z=0;d.jK=(-1);return d;}d=AAk(a,d);}b=new C$;Y(b);N(b);}
function AAk(a,b){var c,d,e;c=b.iC;d=KG(c,Bd(8,c.data.length*2|0));e=AJD(d,0,d.data.length);Fv(e,b.Z);return e;}
function ACF(){var a=this;B.call(a);a.bq=0;a.bv=0;}
function DR(a,b){var c=new ACF();AJK(c,a,b);return c;}
function AJK(a,b,c){a.bq=b;a.bv=c;}
function ALH(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.bq==c.bq&&a.bv==c.bv?1:0;}return 0;}
function AR7(a){return AGu(I(B,[CY(a.bq),CY(a.bv)]));}
function AZU(a,b){var c;b=b;c=BL(a.bq,b.bq);if(!c)c=BL(a.bv,b.bv);return c;}
var AFC=G(C2);
function Uu(){B.call(this);this.Dt=null;}
function AMy(a){Bk(Bt(),C(436));}
var ADX=G(0);
var A76=null;function AGZ(){A76=new W8;}
function HY(){CB.call(this);this.cu=null;}
function Mw(a,b){var c;if(a.cu===null){a.cu=b;return;}c=new Eg;Y(c);N(c);}
function AY_(a){var b,c,d;b=a.cu.data;c=b.length;d=0;while(d<c){b[d].b4();d=d+1|0;}}
function AQF(a,b){var c,d,e;c=a.cu.data;d=c.length;e=0;while(e<d){c[e].dw(b);e=e+1|0;}}
function AU9(a,b){var c,d,e,f;c=0;d=a.cu.data;e=d.length;f=0;while(f<e){c=c|d[f].ci(b);f=f+1|0;}return c;}
function ANo(a,b,c,d){JL(a,b,c,d);a.BU();}
function A1E(a,b,c,d){var e,f,g,h,i;e=0;f=a.cu.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.cy(b,c,d);h=h+1|0;}return e;}
function AS4(a,b,c){var d,e,f,g,h;d=a.cu.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(BW(g,b.j)){h=g.cm(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A1P(a,b,c){var d,e,f,g,h;d=0;e=a.cu.data;f=e.length;g=0;while(g<f){h=e[g];if(BW(h,b.j))d=d|h.dB(b,c);g=g+1|0;}return d;}
function A1_(a,b){var c,d,e,f,g;c=0;d=a.cu.data;e=d.length;f=0;while(f<e){g=d[f];if(BW(g,b.j))c=c|g.bT(b);f=f+1|0;}return c;}
function AN2(a,b,c,d){var e,f,g,h,i;e=0;f=a.cu.data;g=f.length;h=0;while(h<g){i=f[h];if(BW(i,b.j))e=e|i.dy(b,c,d);h=h+1|0;}return e;}
function QU(){var a=this;HY.call(a);a.sa=null;a.Aw=null;a.gm=null;a.oE=null;a.kM=null;a.go=null;a.fV=null;}
function APi(a){var b,c,d,e;b=a.k.a/4|0;c=b+Dy(a,1.0)|0;d=AJR(a.i);e=BF(b,a.k.b);a.cu.data[0].dz(d,e,a.bR);d.a=a.i.a+b|0;e.a=c-b|0;a.cu.data[1].dz(d,e,a.bR);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.cu.data[2].dz(d,e,a.bR);}
function AXv(a){var b,c;b=AG7(a.fV);c=AHI(a.kM);return BF((b.a+a.oE.k.a|0)+c.a|0,b.b);}
function Yi(){B.call(this);this.wr=null;}
function AZ1(a){Y5(a.wr);}
function Yk(){B.call(this);this.t2=null;}
function AY$(a){var b;b=a.t2;T9(new M3,b.j_,b.M);}
function YX(){B.call(this);this.BQ=null;}
function AVn(a,b){var c,d;c=a.BQ;d=c.eb+1|0;c.eb=d;c=b.iQ;b=new K;M(b);H(H(U(b,d),C(437)),c);$rt_globals.console.info($rt_ustr(L(b)));}
var Rj=G();
function AY7(a,b){}
function Fn(){var a=this;CB.call(a);a.cI=null;a.U=null;a.fe=null;}
function A8K(){var a=new Fn();LJ(a);return a;}
function LJ(a){Ey(a);a.cI=new Bg;a.U=new Bg;}
function AXh(a,b){a.fe=b;}
function S0(a,b,c){W(a.cI,b,c);}
function Tc(a){var b;b=a.fe;if(b!==null)ACn(b);}
function AFB(a){var b;b=a.U;b.a=WN(a,b.a);b=a.U;b.b=ACM(a,b.b);}
function AGJ(a,b){var c,d;c=a.U.a;d=WN(a,b);a.U.a=d;return c==d?0:1;}
function ALg(a,b){var c,d;c=a.U.b;d=ACM(a,b);a.U.b=d;return c==d?0:1;}
function ACM(a,b){return Bd(0,Be(b,a.cI.b-a.k.b|0));}
function WN(a,b){return Bd(0,Be(b,a.cI.a-a.k.a|0));}
function Rd(){var a=this;Fn.call(a);a.bV=null;a.d3=null;a.ic=null;a.AK=null;a.ej=null;a.b6=null;a.e3=null;a.fM=null;a.dP=0;a.fJ=0;a.BT=null;a.d1=0;a.eO=0;a.hD=0;a.f6=0;a.fX=0;a.cS=0;a.e4=null;a.kl=null;a.y2=null;a.iz=null;}
function A5j(a,b){var c=new Rd();AKS(c,a,b);return c;}
function AKS(a,b,c){LJ(a);a.d3=Sj();a.ic=new Bg;a.b6=A8L;a.e3=Q(J2,0);a.d1=0;a.eO=0;a.hD=0;a.f6=0;a.fX=0;a.e4=AIi(0);a.iz=JQ();a.bV=b;a.kl=c;a.BT=c;Qt(a);}
function Qt(a){a.dP=Cg(2.0,a.bV.ce);}
function Vj(a){return a.b6.data.length?0:1;}
function W1(a,b){Ta(a);a.b6=b;}
function Ta(a){W(a.ic,0,0);}
function V1(a,b,c){a.y2=b;a.AK=c;a.ej=null;a.e4=null;a.fJ=0;Ta(a);}
function A1U(a){a.fM=BV(a.fM,null);W(a.ic,0,0);Fx(a.iz);a.e4=null;a.b6=A8L;a.e3=null;a.d1=0;a.eO=0;a.hD=0;AA1(a.d3);a.kl=null;}
function AWB(a,b,c){Ym(a);Qt(a);a.ej=null;a.e4=null;a.fJ=0;}
function AUX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Ki(a.bV);if(Vj(a))return;KX(a);Cn(c,a.ej);d=Ej(a);e=AH4(c,a.fJ);f=Be(H9(a.k.b,d),a.b6.data.length)+30|0;g=a.y2.BG;h=a.e3.data;d=h.length;if(d<f){a:{i=a.f6;j=a.fX;k=a.b6;l=a.e4;m=a.iz;n=Q(J2,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gX!==c){ACt(l,q,m);o[f]=MK(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=MK(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=MK(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ACt(l,c,m);h[f]=null;}f=f+1|0;}a.e3=n;Co(a.ic,MJ(a.e4));YA(a,a.bV.bH);}a.f6=Be((a.U.b+a.dP|0)/(Ej(a)+a.dP|0)|0,a.b6.data.length-1|0);a.fX=Be((((a.U.b+a.d3.t.b|0)-1|0)+a.dP|0)/(Ej(a)+a.dP|0)|0,a.b6.data.length-1|0);if(!a.e3.data.length)return;AHZ(a,e);ACj(a,b);q=g.AB;c=a.i;Bs(b,c.a,c.b,a.k,q);c=a.d3.u;i=c.a;j=c.b;p=Cy(a.bV,2.0);s=a.bV.dD;t=a.f6;u=i+p|0;while(t<=a.fX){l=XU(a,t);d=Bc(t,Ej(a));v
=t+1|0;w=d+Bc(v,a.dP)|0;x=u+a.d1|0;y=x+a.eO|0;z=a.cS!=t?0:1;m=!z?q:g.sK;ba=!z?g.t$:g.le;bb=!z?g.q7:g.le;bc=!z?g.rM:g.le;bd=(j+w|0)-a.U.b|0;DI(b,u,bd,l.ju,l.tm,a.fM,ba,m,a.bV.cz);DI(b,x,bd,l.jY,l.lb,a.fM,bb,m,a.bV.cz);DI(b,y,bd,l.jv,l.kL,a.fM,bc,m,a.bV.cz);d=l.ju.a;be=u+d|0;W(s,Bd(0,a.d1-d|0),l.ju.b);Bs(b,be,bd,s,m);d=u+a.d1|0;f=l.jY.a;bf=d+f|0;W(s,Bd(0,a.eO-f|0),l.jY.b);Bs(b,bf,bd,s,m);d=l.jv.a;bg=y+d|0;W(s,Bd(0,(((a.d3.t.a-d|0)-a.eO|0)-a.d1|0)-p|0),l.jv.b);Bs(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;W(s,p,Ej(a)+a.dP
|0);Bs(b,bh,bd,s,q);t=v;}Ga(b);}
function AHZ(a,b){var c,d,e,f,g,h;c=0;d=a.f6;while(d<=a.fX){e=XU(a,d);if(!(e!==null&&e.gX===a.b6.data[d])){f=a.e3.data;g=a.b6;e=a.e4;h=a.iz;c=d%f.length|0;if(f[c]!==null)ACt(e,f[c],h);f[c]=MK(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Co(a.ic,MJ(a.e4));YA(a,a.bV.bH);}}
function YA(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.ic;c=D5(b,c.a+150|0,c.b,a.bV.cz);Cn(c,a.ej);d=a.ej;e=d.em;f=e-(e+d.eG)/16.0;g=a.e3.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gX.lu;k=d.lb;B0(c,j,k.bn+a.fJ,f+k.bs);j=d.gX.lM;d=d.kL;B0(c,j,d.bn+a.fJ,f+d.bs);}i=i+1|0;}a:{d=a.iz;if(d.c7>0){h=d.cZ;i=0;b:while(true){g=d.b8.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cU;l=j.cR;k=k;l=l.l9;B0(c,k,l.bn+a.fJ,f+l.bs);j=j.cW;if(h!=d.cZ)break b;}i=i+1|0;}b=new H_;Y(b);N(b);}}if(a.fM===null)a.fM=CW(b);CM(a.fM,
c);EA(c);}
function XU(a,b){var c;c=a.e3.data;return c[b%c.length|0];}
function AZT(a,b){Co(a.d3.t,b);}
function A0Z(a,b){Co(a.d3.u,b);}
function Ym(a){var b,c,d,e,f,g,h,i,j;b=Ki(a.bV);if(Vj(a))return;KX(a);Cn(b,a.ej);c=AH4(b,a.fJ);d=a.b6.data;e=d.length;f=0;while(f<e){g=d[f];h=Nt(c,g.hK);i=Nt(c,g.lu);j=Nt(c,g.lM);a.d1=Bd(a.d1,h);a.eO=Bd(a.eO,i);a.hD=Bd(a.hD,j);f=f+1|0;}}
function APV(a,b){var c;c=Z7(a,b.j);if(c>=0)a.cS=c;return Fb(a.d3,a.i)&&GI(a.bV.cT)?1:0;}
function AN9(a,b,c){if(!Fb(a.d3,b.j)&&!K$(a.d3)){b=a.BT;if(b!==null)b.f();}return null;}
function AR0(a,b,c,d){var e;if(d==1){e=Z7(a,b.j);if(e>=0)Un(a,a.b6.data[e]);}return 1;}
function Un(a,b){a.kl.f();b.tW.f();}
function Z7(a,b){var c,d,e;if(!a.e3.data.length)return (-1);c=Ej(a);d=(b.b-a.i.b|0)+a.U.b|0;e=a.dP;e=(d+e|0)/(c+e|0)|0;if(e<a.b6.data.length)return e;return (-1);}
function Ej(a){return EB(a.ej);}
function KX(a){var b;if(a.ej===null){b=Fi(a.bV,a.AK);a.ej=b;a.e4=AIi(EB(b));a.fJ=CZ(a.ej.p1);}}
function A0$(a,b){var c,d,e;a:{switch(b.bm){case 13:Un(a,a.b6.data[a.cS]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cS=a.f6;b=a.fe;c=a.U;Jg(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.cS=a.fX;b=a.fe;c=a.U;Jg(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.cS=a.b6.data.length-1|0;break a;case 36:case 37:a.cS=0;break a;case 38:d=a.cS;e=a.b6.data.length;a.cS=((d+e|0)
-1|0)%e|0;break a;case 40:a.cS=(a.cS+1|0)%a.b6.data.length|0;break a;default:break a;}a.kl.f();return 0;}e=a.cS;if(e<=a.f6)Jg(a.fe,a.U.a,Bc(e,Ej(a))+Bc(a.cS,a.dP)|0);else if(e>=a.fX)Jg(a.fe,a.U.a,(Bc(e+1|0,Ej(a))+Bc(a.cS+2|0,a.dP)|0)-a.k.b|0);return 0;}
var US=G();
function ATG(a){}
function AE$(){var a=this;CB.call(a);a.om=null;a.xZ=null;a.AC=null;a.bP=null;a.dp=null;a.dE=null;a.ug=null;a.rc=null;a.vE=0.0;a.pp=null;a.oO=null;}
function GH(a,b){var c=new AE$();AUF(c,a,b);return c;}
function AUF(a,b,c){var d;c=c.cT;Ey(a);d=new P1;d.y1=a;a.xZ=d;d=new P0;d.zJ=a;a.AC=d;a.vE=10.0;a.bP=b;a.om=c;b.fe=a;}
function ASF(a){var b;b=a.bP;b.fe=null;a.bP=BV(b,null);}
function Jf(a,b,c){var d;a.oO=c;a.pp=b;d=a.dp;if(d!==null)H6(d,b,c);b=a.dE;if(b!==null)H6(b,a.pp,a.oO);}
function AOu(a,b,c,d){JL(a,b,c,d);JL(a.bP,b,c,d);if(d!==0.0)ACn(a);}
function Jg(a,b,c){K8(a,b);LA(a,c);}
function ACn(a){var b;AFB(a.bP);b=FN(a)*3|0;if(Zp(a,b))TK(a);else a.dE=null;if(ADT(a,b))WE(a);else a.dp=null;}
function ADT(a,b){var c;c=a.k.b;return c>b&&a.bP.cI.b>c?1:0;}
function Zp(a,b){var c;c=a.k.a;return c>b&&a.bP.cI.a>c?1:0;}
function TK(a){var b,c,d,e,f,g;b=a.dE;if(b===null)b=I_();a.dE=b;O$(a,b);c=a.dE;b=a.bP;d=b.U.a;e=a.i;f=e.a;g=a.k;Rm(c,d,f,g.a,b.cI.a,e.b+g.b|0,FN(a));}
function WE(a){var b,c,d,e,f,g;b=a.dp;if(b===null)b=I_();a.dp=b;O$(a,b);c=a.dp;b=a.bP;d=b.U.b;e=a.i;f=e.b;g=a.k;Km(c,d,f,g.b,b.cI.b,e.a+g.a|0,FN(a));}
function FN(a){return Dy(a,a.vE);}
function O$(a,b){H6(b,a.pp,a.oO);}
function A0n(a,b){var c;a.bP.dw(b);if(!(a.dp===null&&a.dE===null)){B$(b,1);c=a.dp;if(c!==null)GV(c,b);c=a.dE;if(c!==null)GV(c,b);c=a.dp;if(c!==null)G1(c,b);c=a.dE;if(c!==null)G1(c,b);B$(b,0);}}
function Tk(a,b){var c,d;a:{b:{c=a.dp;if(!(c!==null&&IL(c,b))){c=a.dE;if(c===null)break b;if(!IL(c,b))break b;}d=1;break a;}d=0;}return d;}
function AS2(a,b,c,d){return !Tk(a,b.j)&&!a.bP.cy(b,c,d)?0:1;}
function K8(a,b){var c;b=AGJ(a.bP,b);if(Zp(a,FN(a)*3|0))TK(a);if(b){c=a.ug;if(c!==null)c.f();}}
function LA(a,b){var c;if(ACO(a,b)){c=a.rc;if(c!==null)c.f();}}
function ACO(a,b){var c;c=ALg(a.bP,b);if(ADT(a,FN(a)*3|0))WE(a);return c;}
function ASH(a,b,c){var d,e;d=a.dp;if(d!==null){e=F3(d,b.j,a.xZ,1);if(e!==null)return e;}d=a.dE;if(d!==null){e=F3(d,b.j,a.AC,0);if(e!==null)return e;}return a.bP.cm(b,c);}
function AQ1(a,b,c){return Tk(a,b.j)?1:0;}
function AQN(a,b){var c,d,e;c=a.dp;d=c!==null&&F$(c,b.j,a.om)?1:0;c=a.dE;e=c!==null&&F$(c,b.j,a.om)?1:0;return !d&&!e&&!a.bP.bT(b)?0:1;}
function AWW(a,b,c,d){var e,f;if(!BW(a,b.j))return 0;e=Cg(d*0.5,a.bR);f=Cg(c*0.5,a.bR);if(b.bL){f=f+e|0;e=0;}if(a.dp!==null&&e)LA(a,a.bP.U.b+e|0);if(a.dE!==null&&f)K8(a,a.bP.U.a+f|0);return 1;}
function AHI(a){var b,c;b=FN(a);c=a.bP.hU();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var ADu=G();
function ANp(a,b){}
function ADw(){var a=this;B.call(a);a.ut=null;a.uu=null;}
function ALI(a,b){var c,d,e;c=a.ut;d=a.uu;b=Cl(b);e=new K;M(e);H(H(H(e,d),C(29)),b);DK(c,L(e));}
function Qc(){var a=this;Fn.call(a);a.me=null;a.pG=null;a.ym=null;a.r7=0.0;}
function ATQ(a){var b;b=Cg(20.0,a.bR);return BF(b,b);}
function AZY(a,b){S0(a,b.a*3|0,b.b*5|0);a.ym.g(b);}
function AT5(a,b){var c,d,e,f,g,h,i,j,k,l,m;AKY(a,b);ACj(a,b);c=Cg(30.0,a.bR);d=a.U;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.pG;d.b=c;d.a=c;a.me.bC=1.0;while(h<=e){g=a.i.b-a.U.b|0;j=f;while(j<=i){k=a.i.a-a.U.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AKM(l);m=m+1|0;}U5(AKn(l),0.75,a.r7,a.me);Bs(b,k+j|0,g+h|0,a.pG,a.me);j=j+c|0;}h=h+c|0;}Ga(b);}
function AQm(a,b,c){return A6$;}
function ADv(){var a=this;B.call(a);a.qJ=null;a.qK=null;}
function ASW(a){var b,c;b=a.qJ;c=a.qK;It(b.M,c);JV(c);}
function T_(){var a=this;CB.call(a);a.f7=null;a.hA=null;a.jH=null;a.ey=null;a.kJ=0.0;a.eH=0;a.ik=0;a.dV=null;a.mF=null;}
function Vl(a){var b;if(Ob(a))return 0;ACe(a);b=Cy(a.f7,a.kJ);return EB(a.ey)+(b*2|0)|0;}
function RL(a){var b;b=a.k;return b.a&&b.b?0:1;}
function Ob(a){return a.hA!==null&&a.jH!==null?0:1;}
function QA(a,b){a.k.b=b;}
function QE(a,b,c,d,e){var f,g;f=a.f7.dD;W(f,d,a.k.b);g=a.i;Bs(b,g.a+c|0,g.b,f,e);}
function ACe(a){if(a.ey===null)a.ey=Fi(a.f7,a.hA);}
var Ii=G(HY);
function APS(a){var b,c,d,e,f;b=Cg(20.0,a.bR);c=a.k.a;d=(c/2|0)-(b/2|0)|0;c=c-d|0;e=AJR(a.i);f=BF(d,a.k.b);a.cu.data[0].dz(e,f,a.bR);e.a=a.i.a+c|0;a.cu.data[2].dz(e,f,a.bR);e.a=a.i.a+d|0;f.a=c-d|0;a.cu.data[1].dz(e,f,a.bR);}
function AFI(){var a=this;Ii.call(a);a.es=null;a.eq=null;a.kA=null;a.lQ=null;a.jG=null;a.vp=null;}
function A08(a){var b=new AFI();AZg(b,a);return b;}
function AZg(a,b){var c,d;Ey(a);a.es=TD(b);a.eq=TD(b);a.kA=GH(a.es,b);a.lQ=GH(a.eq,b);a.jG=AIy(b);c=ALW(a.kA,a.es);d=ALW(a.lQ,a.eq);Oc(a.jG,c,d);a.vp=AHj(c,d);Mw(a,I(CB,[a.kA,a.jG,a.lQ]));}
function ACR(a,b){a.jG.im=b;J7(a.es,b);JD(a.es,a.kA);J7(a.eq,b);JD(a.eq,a.lQ);}
function AAP(a,b){a.vp.gU=b;a.jG.ep=b;}
function Ho(){var a=this;B.call(a);a.er=null;a.jc=null;a.ov=null;a.hf=null;a.jQ=0;a.hx=0;a.hv=0;}
function A8M(a,b){var c=new Ho();SP(c,a,b);return c;}
function SP(a,b,c){a.hf=XE(b);a.jQ=c;a.hx=0;}
function GB(a){return (JS(a.hf,0)).v;}
function AEb(a){a.hx=60084;}
function I9(a){return a.hx!=60084?0:1;}
function AE9(a){a.hx=60086;}
function AFh(a){a.hv=60035;}
function Lu(a){a.hv=60027;}
function QN(a){a.hv=60137;}
function IT(a){a.hv=60151;}
function Dg(){Ho.call(this);this.e_=null;}
var A8N=null;var A8O=null;function AKl(a,b){var c=new Dg();J5(c,a,b);return c;}
function J5(a,b,c){SP(a,b,c);a.e_=A8N;}
function A15(a){return GB(a);}
function AKU(a){var b,c,d;b=Q(Ho,ADO(a));c=b.data;if(QZ(a,b,0)==c.length)return b;d=new Bu;Y(d);N(d);}
function Ji(a){return a.e_.data.length;}
function ADO(a){var b,c,d,e;b=1;if(I9(a)){c=a.e_.data;d=c.length;e=0;while(e<d){b=b+ADO(c[e])|0;e=e+1|0;}}return b;}
function OH(a){var b,c,d,e;b=1;c=a.e_.data;d=c.length;e=0;while(e<d){b=b+OH(c[e])|0;e=e+1|0;}return b;}
function QZ(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(I9(a)){d=a.e_.data;c=d.length;f=0;while(f<c){e=QZ(d[f],b,e);f=f+1|0;}}return e;}
function NT(a){AEb(a);IT(a);}
function IF(a){AE9(a);AFh(a);}
function Ub(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Oo(GB(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AGd(){A8N=Q(Dg,0);A8O=new AD2;}
function Sx(){B.call(this);this.sS=null;}
function AVQ(a){H5(a.sS,1);}
function Sw(){B.call(this);this.vd=null;}
function AUs(a){H5(a.vd,0);}
var ZW=G(Es);
var A8P=null;function De(b,c){return Long_udiv(b, c);}
function AId(b,c){return Long_urem(b, c);}
function DF(b,c){return Long_ucompare(b, c);}
function AI$(){A8P=F($rt_longcls());}
function AB0(){B.call(this);this.vM=null;}
function A2v(a,b){DH(a.vM,b);}
function ADU(){B.call(this);this.Bs=null;}
function AYd(a){Y2(a.Bs);}
function Xm(){B.call(this);this.yZ=null;}
function AVt(a){var b;b=a.yZ;EI(b.M,YL(b));}
function UK(){B.call(this);this.vx=null;}
function A0I(a){RO(a.vx);}
function ABm(){B.call(this);this.n8=null;}
var A8L=null;function AO9(){var a=new ABm();AEU(a);return a;}
function AEU(a){a.n8=BM();}
function V6(a,b,c,d,e){var f;f=new K_;f.tW=e;f.lu=c;f.lM=d;f.hK=b;BB(a.n8,f);}
function AC2(a){return Go(a.n8,A8L);}
function AAr(b){return b===null?C(21):ACh(b);}
function AKT(){A8L=Q(K_,0);}
function J2(){var a=this;B.call(a);a.tm=null;a.lb=null;a.kL=null;a.ju=null;a.jY=null;a.jv=null;a.gX=null;}
function MK(b,c,d,e){var f,g,h;f=new J2;f.ju=new Bg;f.jY=new Bg;f.jv=new Bg;f.gX=b;g=Cq(e,b.hK);if(g!==null)g.iO=g.iO+1|0;else{g=new ACz;h=Ks(c,b.hK,d);g.iO=1;g.l9=h;Ep(e,b.hK,g);}e=g.l9;f.tm=e;W(f.ju,e.bf|0,e.bC|0);e=Ks(c,b.lu,d);f.lb=e;W(f.jY,e.bf|0,e.bC|0);b=Ks(c,b.lM,d);f.kL=b;W(f.jv,b.bf|0,b.bC|0);return f;}
function ACt(b,c,d){var e,f,g;e=c.gX.hK;f=Cq(d,e);g=f.iO-1|0;f.iO=g;if(!g){Ls(d,e);IZ(b,f.l9);}IZ(b,c.lb);IZ(b,c.kL);}
var Ow=G(0);
var A7N=null;var A7O=null;function AF3(){A7N=EY(40,40,40,200);A7O=EY(43,43,43,128);}
function Ll(){var a=this;Fn.call(a);a.gi=null;a.cr=null;a.e2=null;a.hW=null;a.gs=null;a.lW=null;a.mH=null;a.AP=0;a.q$=0;a.ot=0;a.gc=null;a.gd=null;a.g6=null;a.hN=null;a.hS=null;a.jj=null;a.gC=null;a.rP=0;a.j9=0;}
function ARv(a){Op(a.hW);Yc(a.cr);OP(a);}
function OP(a){a.gc=BV(a.gc,null);a.gd=BV(a.gd,null);a.g6=BV(a.g6,null);a.hN=BV(a.hN,null);a.hS=BV(a.hS,null);a.jj=BV(a.jj,null);a.gC=BV(a.gC,null);}
function WW(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.g6;break a;case 60084:c=a.gd;break a;case 60086:c=a.gc;break a;case 60136:c=a.gC;break a;case 60137:c=a.jj;break a;case 60151:c=a.hN;break a;default:c=null;break a;}c=a.hS;}return c;}
function J7(a,b){var c,d;a.gs=b;c=BO(a.lW,b.pC);d=BO(a.mH,b.oN);if(!(c&&d)){a.lW=b.pC;a.mH=b.oN;if(a.bR!==0.0)SJ(a);}}
function AMh(a,b,c){PY(a.cr,c);if(a.lW!==null)SJ(a);}
function SJ(a){var b,c,d,e,f;SM(a.hW);b=a.cr;c=a.lW;d=a.bR;e=a.gi.bH;f=b.g4;b.cV=AI2(c.h$,c.gV*d,c.j4,c.ki,f,e);Sh(a.cr,1.25,a.gi.bH);OP(a);b=Fi(a.gi,a.mH);a.gc=BV(a.gc,FB(a,60086,b));a.gd=BV(a.gd,FB(a,60084,b));a.g6=BV(a.g6,FB(a,60035,b));a.hN=BV(a.hN,FB(a,60151,b));a.hS=BV(a.hS,FB(a,60027,b));a.jj=BV(a.jj,FB(a,60137,b));a.gC=BV(a.gC,FB(a,60136,b));a.rP=Bd(Bd(Bd(Bd(BQ(a.g6),BQ(a.hN)),BQ(a.hS)),BQ(a.gC)),BQ(a.gC));a.j9=Bd(BQ(a.gd),BQ(a.gc));Pl(a);}
function Pl(a){S0(a,a.cI.a,Bc(a.e2.fx.data.length,a.cr.d4));Tc(a);}
function AYJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;c=a.gs.br.ef;d=a.i;Bs(b,d.a,d.b,a.k,c);BJ(a.cr.cV);e=a.cr.d4;f=a.e2.fx.data.length;if(!f)return;g=Be(f,H9(a.k.b,e)+7|0);h=a.hW;if(h.data.length<g)a.hW=Zd(g,h,a.cr,a.AP,a.q$,a.e2);Nz(b,a.i,a.k);i=a.U.b;j=f-1|0;k=AF_(i,e,j);i=AF_((a.U.b+a.k.b|0)-1|0,e,j);a.AP=k;a.q$=i;j=a.k.a;l=Dy(a,4.0);m=Dy(a,1.0)+a.j9|0;n=Dy(a,3.0);o=Dy(a,5.0);p=Dy(a,1.0);q=0;r=a.i.a-a.U.a|0;s=Dy(a,1.0);d=a.fe;t=s+(d===null?0:FN(d))|0;while(k<=i){u=a.e2.fx.data[k];h
=a.hW.data;s=k%h.length|0;v=h[s];Xq(v,u.hf,b,e,j,0,k,s);w=Bc(e,k)-a.U.b|0;x=null;y=l+Bc(m,u.jQ)|0;z=a.ot!=k?0:1;if(z){W(a.gi.dD,a.k.a,e);d=a.i;Bs(b,d.a,d.b+w|0,a.gi.dD,a.gs.br.gp);}ba=WW(a,u.hx);bb=WW(a,u.hv);if(ba!==null){d=a.gs;bc=d.jL.data[0];AD4(a,b,ba,r+y|0,(a.i.b+w|0)-p|0,!z?c:d.br.gp,bc.g2);}if(bb!==null){d=a.gs;bc=d.jL.data[0];AD4(a,b,bb,((r+y|0)+a.j9|0)+n|0,(a.i.b+w|0)-p|0,!z?c:d.br.gp,bc.g2);}bd=FE(u.hf);be=(((y+a.j9|0)+n|0)+a.rP|0)+o|0;q=Bd(q,(be+bd|0)+t|0);Qg(v,a.i.b+w|0,r+be|0,b,j,e,0,a.gs,null,
null,null,z,0,x);k=k+1|0;}d=a.cI;if(d.a!=q){d.a=q;Tc(a);}Ga(b);}
function AD4(a,b,c,d,e,f,g){Cr(a.cr.jq,0.0,0.0,BQ(c),CO(c));Co(a.cr.ih,c.eS);Hc(a.cr,b,c,d,e,g,f);}
function A1q(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cr.d4;f=((b.j.b-a.i.b|0)+a.U.b|0)/e|0;if(f>=0){g=a.e2.fx.data;if(f<g.length){h=g[f];if(!Wn(a,b,f)){b=h.ov;if(b!==null)b.f();}}}}return 1;}
function ANd(a,b,c){var d,e,f,g;d=a.cr.d4;e=((b.j.b-a.i.b|0)+a.U.b|0)/d|0;if(!c&&e>=0){f=a.e2.fx.data;if(e<f.length){g=f[e];if(Wn(a,b,e)){b=g.jc;if(b!==null)b.f();}else{a.ot=e;b=g.er;if(b!==null)b.f();}}}return A6$;}
function Wn(a,b,c){var d,e,f,g,h,i,j;d=a.e2.fx.data[c];e=Dy(a,4.0);f=Dy(a,1.0);g=Bd(BQ(a.gd),BQ(a.gc));h=e+Bc(f+g|0,d.jQ)|0;i=(a.i.a-a.U.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FB(a,b,c){var d,e,f;d=a.gi.bH;e=NB(b);f=a.cr;return ADf(d,e,c,1,f.d4,f.iN);}
function AF_(b,c,d){return Be(b/c|0,d);}
function AJk(){Ll.call(this);this.ro=null;}
function TD(a){var b=new AJk();ATc(b,a);return b;}
function ATc(a,b){LJ(a);a.e2=AMq(Q(Ho,0));a.hW=Q(Fq,0);a.ot=(-1);a.gi=b;a.cr=APM(b.cz);}
function EL(a){a.e2=AMq(AKU(a.ro));if(a.bR!==0.0)Pl(a);}
function ET(a,b){a.ro=b;EL(a);}
function JD(a,b){var c;c=a.gs.br;Jf(b,c.lF,c.lK);return b;}
function AFZ(){var a=this;B.call(a);a.nw=null;a.fZ=null;}
function ALW(a,b){var c=new AFZ();AM3(c,a,b);return c;}
function AM3(a,b,c){a.nw=b;a.fZ=c;}
function ASR(a){return a.fZ.U.b/Mz(a)|0;}
function A1B(a){var b;b=a.fZ;return H9((b.U.b+b.k.b|0)-1|0,Mz(a));}
function ATD(a,b){var c;b=Bc(b,Mz(a));c=a.fZ;return (b+c.i.b|0)-c.U.b|0;}
function APH(a){return a.fZ.i;}
function AVe(a){return a.fZ.k;}
function AQf(a,b,c){var d;d=a.nw;d.ug=b;d.rc=c;}
function AYZ(a,b){return ACO(a.nw,b);}
function Mz(a){return a.fZ.cr.d4;}
function ABw(){var a=this;B.call(a);a.nv=FH;a.mJ=0;a.q4=0;}
var W8=G();
function ATV(a){}
function Sy(){var a=this;B.call(a);a.Ba=null;a.A9=null;a.A$=null;}
function APL(a){var b,c,d,e,f;b=a.Ba;c=a.A9;d=a.A$;e=Bt();f=new K;M(f);b=H(f,b);BN(b,9);b=H(b,c);BN(b,9);H(b,d);Bk(e,L(f));}
function P1(){B.call(this);this.y1=null;}
function ALV(a,b){var c;c=a.y1;LA(c,FT(b,c.bP.cI.b-c.k.b|0));}
function P0(){B.call(this);this.zJ=null;}
function AMa(a,b){var c;c=a.zJ;K8(c,FT(b,c.bP.cI.a-c.k.a|0));}
var AD2=G();
function ASl(a,b,c){b=b;c=c;return Oo(GB(b),GB(c));}
function K_(){var a=this;B.call(a);a.tW=null;a.lu=null;a.lM=null;a.hK=null;}
function AK1(){G0.call(this);this.fx=null;}
function AMq(a){var b=new AK1();ANO(b,a);return b;}
function ANO(a,b){a.fx=b;}
function A2K(a,b){return a.fx.data[b].hf;}
var C$=G(Bu);
var AKa=G(Fy);
function AWn(a){var b=new AKa();AQs(b,a);return b;}
function AQs(a,b){a.kH=1;a.k3=1;a.nm=b;}
function AK7(){var a=this;B.call(a);a.oF=null;a.mS=null;a.eM=null;a.mE=null;a.by=null;a.pv=null;a.nF=null;a.fW=null;a.gN=null;a.jI=null;}
function AT3(a,b){var c=new AK7();AYF(c,a,b);return c;}
function AYF(a,b,c){var d,e,f;a.eM=b;a.mE=c;a.by=AVO();b=new K;M(b);a.jI=b;a.fW=JQ();b=new SB;d=AKK(16);b.gG=0;b.d0=Q(Jz,d);b.x1=0.75;Ue(b);a.gN=b;b=new Us;c=a.by;e=a.jI;f=a.fW;b.dC=c;b.ms=e;b.sZ=f;a.pv=b;b=new Ua;b.cX=c;b.nd=e;b.sb=f;a.nF=b;}
function WX(a){var b,c,d,e,f,g,h;a:{b=M7(a.eM.fb);c=b.jh;if(c.c7>0){d=c.cZ;e=0;b:while(true){f=b.jh.b8.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cU;if(MU(a.fW,g))Cq(a.fW,g);else{h=a.fW;Ep(h,g,CY(h.c7));}c=c.cW;if(d!=b.jh.cZ)break b;}e=e+1|0;}b=new H_;Y(b);N(b);}}b=a.eM.fB;if(b!==null)Zw(a,b);Bq(a.by,a.eM.fb.c7);b=Sm(M7(a.eM.fb));while(Gh(b)){c=Qk(b);G3(a.by,a.jI.L,J(c));BY(a.jI,c);}b=Sm(M7(a.eM.fb));while(Gh(b)){c=Qk(b);c=Cq(a.eM.fb,c);Bq(a.by,c.q);c=B7(c);while(B_(c)){g=Ca(c);g=Cq(a.fW,g);Bq(a.by,
g.bp);}}if(a.eM.fB===null)Bq(a.by,(-1));else{Bq(a.by,a.gN.gG);AAe(a,a.eM.fB);}if(a.mE===null)Bq(a.by,(-1));else{Bq(a.by,1);AEv(a.mE,a.by,a.gN);}a.oF=QX(a.by);a.mS=Gs(L(a.jI));}
function Zw(a,b){var c,d,e,f,g,h;if(ACE(a.gN,b))Om(a.gN,b);else{c=a.gN;d=CY(c.gG);if(b===null){e=Y4(c);if(e===null){c.l8=c.l8+1|0;e=ACI(c,null,0,0);f=c.gG+1|0;c.gG=f;if(f>c.pw)WR(c);}}else{g=MB(b);h=g&(c.d0.data.length-1|0);e=W2(c,b,h,g);if(e===null){c.l8=c.l8+1|0;e=ACI(c,b,h,g);f=c.gG+1|0;c.gG=f;if(f>c.pw)WR(c);}}e.cR=d;}b=b.cK;if(b===null)return;c=new VG;c.sc=a;b.fk(c);}
function AAe(a,b){var c,d,e,f;c=(Om(a.gN,b)).bp;Bq(a.by,c);if(b instanceof NJ)Bq(a.by,(-1));else if(!(b instanceof Lb))Bq(a.by,0);else Bq(a.by,1);d=a.pv;Bq(d.dC,b.eY.c1());e=b.eY;f=new V5;f.v7=d;e.fk(f);d=a.nF;Bq(d.cX,b.fC.c1());e=b.fC;f=new TS;f.uE=d;e.fk(f);d=b.ln;Bq(a.by,d.c1());e=new UG;e.AY=a;d.fk(e);d=b.hO;Bq(a.by,d.c1());d=d.b9();while(d.cC()){e=d.b$();Pf(a.pv,e.lp);He(a.nF,e.kQ);Bq(a.by,e.rU);}d=b.uA;if(d===null)Bq(a.by,(-1));else Bq(a.by,(Cq(a.fW,d)).bp);b=b.cK;Bq(a.by,b.c1());d=new Qh;d.qy=a;b.fk(d);}
function OO(){B.call(this);this.Ax=null;}
function AUp(a,b){var c,d,e,f,g,h,i,j;c=a.Ax;if(c.fN){d=E2(c);e=new K;M(e);H(H(e,d),C(438));$rt_globals.console.info($rt_ustr(L(e)));}b=b.data;f=CQ(b[0]);g=EQ(b[1]);h=(CQ(b[2])).data[0];if(c.h.cp==h){i=null;j=null;if(b.length>=5){i=CQ(b[3]);j=EQ(b[4]);}b=Ea(c);if(!Bj(b,C(180))&&!Bj(b,C(427))?0:1)N5(c.h,f,g);else{We(c.h,f,g,i,j);Fx(c.h.dG);Fx(c.h.dN);M_(c.h);KD(c.h);Oi(c);}}}
function ACy(){B.call(this);this.sj=null;}
function AYU(a,b){var c,d,e,f;c=a.sj;if(c.fc!=3){b=b.data;d=CQ(b[0]);e=EQ(b[1]);We(c.h,d,e,null,null);if(c.fN){b=E2(c);f=JK(E3(),c.As);c=new K;M(c);H(HK(H(H(c,b),C(439)),f),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}
var Oe=G(BH);
function Sc(){var a=this;B.call(a);a.v1=null;a.v2=null;a.v0=0;}
function AWJ(a,b){var c,d,e;c=a.v1;d=a.v2;e=a.v0;d.g(UT(c,(b.j.a+e|0)-c.e7.a|0));}
function Sb(){var a=this;B.call(a);a.rS=null;a.rQ=null;a.rR=0;}
function A1T(a,b){var c,d,e;c=a.rS;d=a.rQ;e=a.rR;d.g(QG(c,(b.j.b+e|0)-c.e7.b|0));}
var Fg=G(0);
function W3(){var a=this;B.call(a);a.jU=0;a.p9=0;a.lB=0;a.hT=0;a.jg=null;}
function B_(a){return a.jU>=a.lB?0:1;}
function Ca(a){var b,c;Qs(a);b=a.jU;a.hT=b;c=a.jg;a.jU=b+1|0;return c.kB(b);}
function Zm(a){var b,c,d;if(a.hT<0){b=new C$;Y(b);N(b);}Qs(a);a.jg.p$(a.hT);a.p9=a.jg.b2;c=a.hT;d=a.jU;if(c<d)a.jU=d-1|0;a.lB=a.lB-1|0;a.hT=(-1);}
function Qs(a){var b;if(a.p9>=a.jg.b2)return;b=new H_;Y(b);N(b);}
function Lf(){var a=this;On.call(a);a.xE=null;a.z$=null;}
function AHe(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.xE;e=0;f=0;g=a.z$;a:{b:{while(true){if((e+32|0)>f&&D9(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ch(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BH;c=new K;M(c);U(H(U(H(c,C(440)),l),C(100)),h);Bm(b,L(c));N(b);}if(Ch(b)<m){b=new Oa;Y(b);N(b);}if(m<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),m),C(102));Bm(b,L(c));N(b);}n=b.Z;h=n+b.ng|0;e=0;while(e<m){o=k+1|0;i=b.pK.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!D9(c)){p=!D9(b)&&e>=f?A6E:A6D;break a;}i=g.data;n=Ch(c);o=i.length;n=Be(n,o);q=new AB6;q.tr=b;q.AU=c;p=AK6(a,d,e,f,g,0,n,q);e=q.v_;if(p===null&&0==q.mL)p=A6E;k=q.mL;h=0;if(c.qd){b=new Kr;Y(b);N(b);}if(Ch(c)<k)break;if(h>o){b=new BH;c=new K;M(c);BN(U(H(U(H(c,C(103)),h),C(97)),o),41);Bm(b,L(c));N(b);}l=h+k|0;if(l>o){b=new BH;c=new K;M(c);U(H(U(H(c,C(105)),l),C(100)),o);Bm(b,L(c));N(b);}if(k<0){b=new BH;c=new K;M(c);H(U(H(c,C(101)),k),C(102));Bm(b,L(c));N(b);}o=c.Z;m=0;while(m
<k){l=o+1|0;n=h+1|0;AAa(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new JF;Y(b);N(b);}b=new BH;c=new K;M(c);BN(U(H(U(H(c,C(103)),k),C(97)),h),41);Bm(b,L(c));N(b);}Fv(b,b.Z-(f-e|0)|0);return p;}
var SW=G(Lf);
function AK6(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Nu(h,2))break a;i=A6E;break a;}c=k+1|0;n=j[k];if(!Gy(a,n)){c=c+(-2)|0;i=Eu(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Nu(h,3))break a;i=A6E;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Gy(a,n))break b;if(!Gy(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ot(p)){c=k+(-3)|0;i=Eu(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Eu(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Nu(h,4))break a;i=A6E;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ch(h.AU)<2?0:1)break a;i=A6D;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Gy(a,n))break c;if(!Gy(a,o))break c;if(!Gy(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=JP(r);m=c+1|0;j[c]=Jc(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Eu(1);break a;}c=k+(-3)|0;i
=Eu(1);}h.v_=c;h.mL=f;return i;}
function Gy(a,b){return (b&192)!=128?0:1;}
function Yb(){var a=this;B.call(a);a.Dd=null;a.Da=null;a.Db=null;}
function Vr(){B.call(this);this.qN=null;}
function ATo(a,b){var c,d;c=a.qN;d=c.eb+1|0;c.eb=d;c=new K;M(c);H(H(U(c,d),C(441)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function O6(){B.call(this);this.uT=null;}
function AR3(a){return a.uT.g$();}
function O5(){B.call(this);this.t5=null;}
function AWv(a){return a.t5.g$();}
function AAl(){B.call(this);this.z8=null;}
function AZz(a){return a.z8.g$();}
var Xx=G();
function AUz(a){return GD(1);}
function Z3(){B.call(this);this.tb=null;}
function A2b(a,b){a.tb.g(H3(b));}
var AFG=G();
function ACw(){B.call(this);this.vF=null;}
function AOk(a,b){a.vF.f();}
var AHx=G();
var AGD=G();
function W0(){B.call(this);this.uW=null;}
function ANa(a,b){var c,d,e,f;c=a.uW;d=Cl(b);e=new K;M(e);H(H(e,C(442)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new ABC;d.CX=c;d.s7=b;e=new ABE;e.Ff=c;c=AKQ(e);e=new ACm;e.xw=d;d=b.f8;if(d!==null)d.arrayBuffer().then(Bv(e,"f"),Bv(c,"f"));else{b=b.ij.getFile();f=new ACo;f.AM=e;f.AN=c;b.then(Bv(f,"f"),Bv(c,"f"));}}
function WZ(){B.call(this);this.xt=null;}
function ASx(a,b){var c,d,e;c=a.xt;d=Cl(b);e=new K;M(e);H(H(e,C(443)),d);$rt_globals.console.info($rt_ustr(L(e)));d=new PI;d.Ch=c;Nh(b,d);}
function RN(){B.call(this);this.AX=null;}
function AYq(a){RO(a.AX);}
function AA2(){B.call(this);this.rd=null;}
function ALl(a){EL(a.rd);}
var AEZ=G();
function PE(b,c,d){return AGt(b,0,c,d,UD());}
function AGt(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BL(c,d);h=g>=0?0:1+QT(f,2.0)|0;i=g>0?0:1+QT(f,3.0)|0;j=Q(Dg,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new K;M(m);U(H(m,C(444)),g);k[g]=AGt(L(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Dg;n=new K;M(n);U(H(n,C(445)),g);J5(m,L(n),l);n=new Rc;n.tz=m;m.ov=n;switch((l+g|0)%3|0){case 0:break;case 1:QN(m);break a;case 2:m.hv=60136;break a;default:break a;}Lu(m);}if(UF(f)<0.25){n=JS(m.hf,0);n.bF=n.bF|2;}k[h+g|0]=m;g=g+1|0;}n=new Dg;SP(n,b,c);n.e_=A8N;n.e_=j;b=new Ww;b.wu
=n;b.ww=e;n.jc=b;n.er=b;if((c+c|0)>d)IF(n);else NT(n);return n;}
function AA3(){B.call(this);this.tg=null;}
function AOF(a){EL(a.tg);}
function S_(){B.call(this);this.s5=null;}
function ATj(a){EL(a.s5);}
function ACB(){var a=this;B.call(a);a.q3=null;a.q5=null;}
function A2j(a){var b,c;b=a.q3;c=a.q5;DS(b);c.f();}
function QF(){var a=this;B.call(a);a.gb=null;a.kD=null;a.i6=null;a.qf=null;a.df=null;a.lP=0;}
function AAi(a,b){if(!BO(b.oA,a.qf)){a.qf=b.oA;NQ(a);}}
function NQ(a){a.df=BV(a.df,null);}
function AGi(a,b){var c,d;c=Fi(b,a.qf);d=EB(c);a.df=BV(a.df,ADf(b.bH,NB(60088),c,0,d,0));}
function S2(a,b){return a.df!==null&&Gj(b,a.gb,a.kD)?1:0;}
function PS(){var a=this;B.call(a);a.tZ=null;a.t0=null;}
function ANB(a){var b,c;b=a.tZ;c=a.t0;It(b.dj,c);JV(c);b.b4();}
function PT(){B.call(this);this.xM=null;}
var Eg=G(Bu);
function AG1(){var a=this;B.call(a);a.jo=null;a.nE=0;a.f4=0;}
function AVO(){var a=new AG1();AT2(a);return a;}
function AT2(a){a.nE=0;a.jo=BP(16);a.f4=0;}
function G3(a,b,c){Bq(a,b);Bq(a,c);}
function Bq(a,b){var c,d;c=a.jo;d=c.data.length;if(d==a.f4)a.jo=Jh(c,d*2|0);c=a.jo.data;d=a.f4;a.f4=d+1|0;c[d]=b;}
function QX(a){var b,c,d,e,f;b=a.nE;if(b&&a.f4!=b){c=En();b=a.nE;d=a.f4;e=new K;M(e);H(U(H(U(H(e,C(446)),b),C(447)),d),C(448));Bk(c,L(e));}f=a.jo;b=f.data.length;d=a.f4;if(b!=d)f=Jh(f,d);return f;}
function SB(){var a=this;Ee.call(a);a.gG=0;a.d0=null;a.l8=0;a.x1=0.0;a.pw=0;}
function AKK(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Ue(a){a.pw=a.d0.data.length*a.x1|0;}
function ACE(a,b){return Vt(a,b)===null?0:1;}
function Om(a,b){var c;c=Vt(a,b);if(c===null)return null;return c.cR;}
function Vt(a,b){var c,d;if(b===null)c=Y4(a);else{d=MB(b);c=W2(a,b,d&(a.d0.data.length-1|0),d);}return c;}
function W2(a,b,c,d){var e;e=a.d0.data[c];while(e!==null&&!(e.nz==d&&(b!==e.cU?0:1))){e=e.ip;}return e;}
function Y4(a){var b;b=a.d0.data[0];while(b!==null&&b.cU!==null){b=b.ip;}return b;}
function ACI(a,b,c,d){var e,f;e=new Jz;VM(e,b,null);e.nz=d;f=a.d0.data;e.ip=f[c];f[c]=e;return e;}
function WR(a){var b,c,d,e,f,g,h,i;b=a.d0.data.length;b=AKK(!b?1:b<<1);c=Q(Jz,b);d=c.data;e=0;f=b-1|0;while(true){g=a.d0.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nz&f;i=h.ip;h.ip=d[b];d[b]=h;h=i;}e=e+1|0;}a.d0=c;Ue(a);}
function Us(){var a=this;B.call(a);a.dC=null;a.ms=null;a.sZ=null;}
function Pf(a,b){var c;if(!(b instanceof Mf)){Bq(a.dC,3);ADh(a,b);Bq(a.dC,b.jt);}else{c=b;Bq(a.dC,5);ADh(a,c);Bq(a.dC,c.jt);Bq(a.dC,c.wN);b=c.kZ;Bq(a.dC,b.q);c=new Wy;c.rb=a;Fr(b,c);}}
function ADh(a,b){var c;c=b.eF.jC;G3(a.dC,a.ms.L,J(c));Bq(a.dC,b.eF.dH);OK(a,b.ma);BY(a.ms,c);}
function OK(a,b){if(b===null)Bq(a.dC,(-1));else Bq(a.dC,(Cq(a.sZ,b)).bp);}
function Ua(){var a=this;B.call(a);a.cX=null;a.nd=null;a.sb=null;}
function He(a,b){var c,d,e;if(b instanceof HH){c=b;Bq(a.cX,9);YB(a,c.hs);}else if(b instanceof Ke){d=b;Bq(a.cX,3);Y9(a,d);Bq(a.cX,d.qG);YB(a,d.id);}else if(b instanceof Jk){e=b;Bq(a.cX,4);He(a,e.jR);He(a,e.i9);}else if(b===null)Bq(a.cX,(-1));else{Bq(a.cX,5);Y9(a,b);Bq(a.cX,b.zZ);}}
function Y9(a,b){var c;c=b.fR.jC;G3(a.cX,a.nd.L,J(c));Bq(a.cX,b.fR.dH);b=b.gF;if(b===null)Bq(a.cX,(-1));else Bq(a.cX,(Cq(a.sb,b)).bp);BY(a.nd,c);}
function YB(a,b){var c;Bq(a.cX,b.q);c=new VP;c.xu=a;Fr(b,c);}
function WD(){var a=this;B.call(a);a.yR=0;a.yQ=0;}
function SL(){B.call(this);this.sv=null;}
function ASz(a,b){var c;c=a.sv;DH(c,b);HB(c,null);Vq(c);}
var Yt=G(Es);
var A8Q=null;function AIF(){A8Q=F($rt_doublecls());}
var J6=G();
var A8R=FH;var A8S=null;var A8T=null;function AFM(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.q4=II(Df(d,D(0, 2147483648)),FH)?0:1;e=Df(d,D(4294967295, 1048575));f=GR(A4I(d,52))&2047;if(II(e,FH)&&!f){c.nv=FH;c.mJ=0;return;}if(f)e=A3n(e,D(0, 1048576));else{e=HP(e,1);while(II(Df(e,D(0, 1048576)),FH)){e=HP(e,1);f=f+(-1)|0;}}g=A8T.data;h=f<<16>>16;i=0;j=g.length;k=BL(i,j);if(k>0){c=new BU;Y(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BL(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IS(e,A8S.data[h],i);if(ANH(m,A8R)){while(DF(m,A8R)<=0){j=j+(-1)|0;m=CS(Ci(m,Bp(10)),Bp(9));}g=A8T.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IS(e,A8S.data[h],i);}e=HP(e,1);d=CS(e,Bp(1));g=A8S.data;h=j+1|0;n=g[h];f=i-1|0;n=IS(d,n,f);o=IS(JK(e,Bp(1)),A8S.data[h],f);p=Bp(1);while(true){q=Ci(p,Bp(10));if(DF(De(m,q),De(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ci(r,Bp(10));if(DF(De(m,s),De(n,s))>=0)break;r=s;}h=DF(p,r);e=h>0?Ci(De(m,p),p):h<0?CS(Ci(De(m,r),r),r):Ci(De(CS(m,AGG(r,Bp(2))),r),r);if(DF(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=De(e,Bp(10));if(DF(e,D(2808348672, 232830643))<0)break;}else if(DF(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ci(e,Bp(10));}c.nv=e;c.mJ=j-330|0;}
function IS(b,c,d){var e,f,g,h,i,j,k,l;e=Df(b,Bp(65535));f=Df(Gb(b,16),Bp(65535));g=Df(Gb(b,32),Bp(65535));h=Df(Gb(b,48),Bp(65535));i=Df(c,Bp(65535));j=Df(Gb(c,16),Bp(65535));k=Df(Gb(c,32),Bp(65535));l=Df(Gb(c,48),Bp(65535));return CS(CS(CS(HP(Ci(l,h),32+d|0),HP(CS(Ci(l,g),Ci(k,h)),16+d|0)),HP(CS(CS(Ci(l,f),Ci(k,g)),Ci(j,h)),d)),Gb(CS(CS(CS(Ci(k,e),Ci(j,f)),Ci(i,g)),HP(CS(CS(CS(Ci(l,e),Ci(k,f)),Ci(j,g)),Ci(i,h)),16)),32-d|0));}
function AFx(){A8R=De(Bp(-1),Bp(10));A8S=AIz([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A8T=A4a([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function TN(){B.call(this);this.rE=null;}
function AL0(a){Hf(a.rE,37,3);}
function TO(){B.call(this);this.sf=null;}
function AN0(a){Hf(a.sf,40,3);}
function TP(){B.call(this);this.ty=null;}
function A1V(a){Hf(a.ty,42,3);}
function TQ(){B.call(this);this.xG=null;}
function AP$(a){Hf(a.xG,45,3);}
function TR(){B.call(this);this.x$=null;}
function ASf(a){Hf(a.x$,45,5);}
function OS(){B.call(this);this.Am=null;}
function A2Z(a,b){var c,d;c=a.Am;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var Vu=G(0);
var A6q=null;function A3X(){A3X=Bn(Vu);AZR();}
function AZR(){A6q=new $rt_globals.TextDecoder("utf-16");}
function PC(){CB.call(this);this.A0=null;}
function ALQ(a,b){var c;c=a.i;Bs(b,c.a,c.b,a.k,a.A0);}
function ABN(){var a=this;B.call(a);a.tk=0;a.B9=0;}
function FT(a,b){var c;c=a.B9;if(c<=0)return 0;return YH(a.tk,b,c);}
var Tt=G(0);
var A65=null;function AOV(){AOV=Bn(Tt);ATI();}
function ATI(){A65=S(C(259));}
function Rc(){B.call(this);this.tz=null;}
function AYX(a){var b,c,d;b=a.tz;c=Bt();d=GB(b);b=new K;M(b);H(H(b,C(449)),d);Bk(c,L(b));}
function Ww(){var a=this;B.call(a);a.wu=null;a.ww=null;}
function AYT(a){var b,c;b=a.wu;c=a.ww;if(!I9(b))NT(b);else IF(b);c.f();}
function QW(){B.call(this);this.qE=null;}
function A0m(a,b){J9(a.qE,b);}
function QV(){B.call(this);this.BV=null;}
function AWx(a){return a.BV.sa;}
function W7(){var a=this;B.call(a);a.qx=null;a.yO=null;a.vc=0;a.v8=0;}
function N9(a,b){return Ch(a.yO)<b?0:1;}
var AG8=G();
function AEt(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AEl(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(Ev()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Te;d.addEventListener("change",Bv(e,"handleEvent"));d.click();}
function SR(){var a=this;B.call(a);a.bu=null;a.rw=null;a.i_=null;a.ol=null;a.ml=null;a.gn=null;}
function HT(a){return a.bu.cJ.e1;}
function V0(a){var b;b=new Sz;b.Bx=a;return b;}
function AJa(a){var b,c,d,e,f;b=Q(BC,5);c=b.data;d=a.bu;BJ(d);e=new VE;e.z0=d;c[0]=C9(C(450),e);e=a.bu;BJ(e);f=new Vz;f.xy=e;c[1]=C9(C(451),f);d=a.bu;BJ(d);e=new VA;e.ya=d;c[2]=C9(C(452),e);d=a.bu;BJ(d);e=new VB;e.vY=d;c[3]=C9(C(453),e);d=a.bu;BJ(d);e=new VC;e.qB=d;c[4]=C9(C(454),e);return CR(b);}
function Qr(a,b){var c;c=new PH;c.wi=a;c.wj=b;return c;}
function KF(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DS(a.gn.bY);d=a.bu.d;e=Ea(d);f=HD(d);g=a.bu.fy;if(c===null)h=null;else{A40();switch(A8U.data[c.fP]){case 1:h=Oq(g,e,f);break a;case 2:h=Za(g,e,f);break a;default:}b=new E4;Y(b);N(b);}}c=a.bu;e=Fw(c,b);g=I$(c.d.h,e.bq,e.bv);f=SG(c,g);if(h!==null){g=c.d;i=e.bq;j=e.bv;e=new R2;e.Dw=c;e.Dv=b;e.Du=f;h.tH(g,i,j,e,c.j5);}else{e=Cq(c.d.h.dN,g);if(e!==null)IV(c,e);else{e=Cq(c.d.h.dG,g);if(e!==null&&!EE(e))Zl(c.kO,b,e,c,f);else{c=c.kO;k=Q(BC,1);l=k.data;e=new BC;f=c.bY;BJ(f);g
=new AAU;g.Bh=f;CC(e,g,C(455));l[0]=e;Ld(c,b,CR(k));}}}}
var AEI=G(0);
function RW(){B.call(this);this.tV=null;}
function AXD(a){Mk(a.tV);}
function ACP(){var a=this;B.call(a);a.w1=null;a.w0=null;}
function ATR(a){FL(a.w1,a.w0);}
var Yl=G();
var A8V=null;function N5(b,c,d){Rn(b,c,d,0);}
function Rn(b,c,d,e){Xl(b,c,d,null,null,e);}
function Xl(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=L5(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CK(b);c=b.B;if(c.data.length<i)b.B=AE1(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.ff=h.ff+n|0;}else b.B.data[m]=D7(YY(h,d,0));m=m+1|0;}M_(b);if(j)b.dg=AGL(AHC(h));Fx(b.dN);Fx(b.dG);o=b.dN;g=0;while(g<k){Ep(o,DR(Bb(h),Bb(h)),DR(Bb(h),Bb(h)));g=g+1|0;}p=b.dN;o=b.dG;q=Xp(AB5(p));while(Gh(q)){r=ADJ(q);s=r.cU;p=r.cR;BJ(A8V);r=Cq(o,p);if(r===null){r=BM();Ep(o,p,r);}BB(r,s);}if(o.o3===null){p=new Qw;p.wh=o;o.o3=p;}p=o.o3;r=new Zt;NL(r,
p.wh);while(Gh(r)){NX(r);o=r.hb.cR;p=A5W;c=Q(B,o.q);d=c.data;Go(o,c);K1(c,p);g=0;t=d.length;while(g<t){p=d[g];Kx(o,g);o.cG.data[g]=p;g=g+1|0;}}Ri(h);if(e!==null&&f!==null){p=AQC(e,f);PW(p);b.e5=AWa(p.pg,p.iS);b.dg=AGL(p.pE);}}
function We(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=L5(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=ADe(b,i);o=ADe(b,j);p=(IQ(Cd(b,n.a),n.b)).data[0].s;q=(IQ(Cd(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=YY(h,d,i);if(!r)g=LW(p,g);if(r==s)g=LW(g,q);t=n.a+r|0;u=D7(g);c=b.B.data;v=c[t];c[t]=u;if(!k&&Jo(v)==Jo(u)){t=0;while(t<Jo(v)){o=v.s.data[t];w=u.s.data[t];x=o.bZ;y=x!=5?0:1;if(!y&&x&&!w.bZ){w.bZ=x;w.bF=o.bF;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AHC(h);w=KR(i,j,(-1));W_(b.dg,w,u);}else if(e!==null&&f!==null){v=AQC(e,f);PW(v);w=KR(i,j,(-1));W_(b.dg,w,v.pE);n=b.e5;n.fB=b.dg.de.cl;n.fb=v.iS;}}Ri(h);}
function YY(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=Q(Cx,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=Ec(ED(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AKj(){A8V=new Ve;}
var Ze=G(0);
var Pp=G(0);
var Ib=G();
function Z6(){Ib.call(this);this.Az=null;}
function ABT(a,b){var c,d,e;c=0;while(true){d=a.Az;if(d.kc===null)d.kc=B7(d.ys);if(!B_(d.kc))e=0;else{c=b.H(Ca(d.kc));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Rh=G(0);
function P3(){var a=this;B.call(a);a.En=null;a.Ep=null;a.Eo=0;a.Em=0;}
var ADs=G();
function AMi(a,b){b=b;b.cP=BV(b.cP,null);}
var AFP=G(0);
function AI2(b,c,d,e,f,g){f=f.data;f[Jl(0,0)]=Gx(g,b,c,d,0);f[Jl(0,1)]=Gx(g,b,c,d,2);f[Jl(1,0)]=Gx(g,b,c,e,0);f[Jl(1,1)]=Gx(g,b,c,e,2);return f[Jl(0,0)];}
function Jz(){var a=this;GX.call(a);a.nz=0;a.ip=null;}
var H_=G(Bu);
function AB$(){B.call(this);this.vu=null;}
function ASQ(a,b){var c,d,e,f;c=a.vu;DS(c.c8.gm.bY);d=Bt();e=Cl(b);f=new K;M(f);H(H(f,C(456)),e);Bk(d,L(f));d=ASw(b,c);ET(c.c8.go,d);d.jc.f();b=LX(b.hz,Fs(Hp(b),C(457)));DK(c.hh,b);}
var ADF=G();
function A0D(a,b){AEt(b);}
function ADE(){B.call(this);this.sJ=null;}
function AWu(a,b){var c,d,e;c=a.sJ;d=0;e=b.length;while(d<e){c.g(AJ4(b[d],null));d=d+1|0;}}
var AC6=G();
function AXi(a,b){AEt(b);}
function AC5(){var a=this;B.call(a);a.sk=null;a.sl=null;}
function AXO(a,b){var c,d,e;c=a.sk;d=a.sl;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);c.g(A3N(b,d,Q(BK,0),Q(BK,0)));}
function ABP(){var a=this;B.call(a);a.vB=null;a.vy=null;a.vz=null;}
function APQ(a,b,c,d){var e,f,g,h;b=a.vB;e=a.vy;f=a.vz;ABa(b,e);if(f!==null)d.mU.f();if(AB4(d)){f=d.fl;g=e.c2;h=e.f5;U8(b,BF((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nc,e,d.tF);}}
function AKf(){var a=this;B.call(a);a.iy=null;a.ff=0;}
function L5(a){var b=new AKf();AUE(b,a);return b;}
function AUE(a,b){a.iy=b;a.ff=0;}
function Bb(a){var b,c;b=a.iy.data;c=a.ff;a.ff=c+1|0;return b[c];}
function Ri(a){var b,c,d,e;if(a.ff!=a.iy.data.length){b=En();c=a.iy.data.length;d=a.ff;e=new K;M(e);H(U(H(U(H(e,C(446)),c),C(458)),d),C(459));Bk(b,L(e));}}
function Q5(){var a=this;B.call(a);a.De=null;a.tY=0;}
function AVu(a,b){var c,d,e,f;c=a.tY;d=(CQ(K3(b,0))).data;b=Bt();e=d[0];f=new K;M(f);U(H(U(H(f,C(460)),c),C(461)),e);Bk(b,L(f));b=Bt();e=d[1];f=new K;M(f);U(H(U(H(f,C(460)),c),C(462)),e);Bk(b,L(f));}
function AEo(){B.call(this);this.Pe=null;}
var Te=G();
function AUZ(a,b){}
var Ve=G();
var FM=G();
var A8W=null;var A8X=null;var A7g=null;var A8Y=null;var A8Z=null;var A80=null;function AJT(){A8W=new T4;A8X=new T1;A7g=new T2;A8Y=new TZ;A8Z=new T0;A80=new V2;}
function AIk(){var a=this;B.call(a);a.pg=null;a.pE=null;a.iS=null;a.cB=null;a.oJ=null;a.m9=null;a.i$=null;a.nI=null;a.pz=null;}
function AQC(a,b){var c=new AIk();A1C(c,a,b);return c;}
function A1C(a,b,c){a.cB=L5(b);a.oJ=c;}
function PW(a){var b,c,d,e,f,g,h,i;b=Bb(a.cB);c=new NK;QL(c);a.iS=c;a.i$=BM();d=0;while(d<b){e=Bb(a.cB);f=Bb(a.cB);g=ED(a.oJ,e,f);Ep(a.iS,g,BM());BB(a.i$,g);d=d+1|0;}c=Xp(AB5(a.iS));while(Gh(c)){H1((ADJ(c)).cR,Pj(a));}d=Bb(a.cB);if(d==(-1))a.pg=null;else{a.m9=Q(FX,d);c=new Wm;h=a.cB;i=a.oJ;g=a.i$;c.dO=h;c.zr=i;c.yX=g;a.nI=c;c=new RB;c.ev=h;c.AZ=i;c.Bc=g;a.pz=c;a.pg=Ro(a,null);}if(Bb(a.cB)!=(-1))a.pE=Zq(a.cB,a.m9);}
function Ro(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cB);d=Bb(a.cB);e=a.nI;f=Bb(e.dO);g=BM();h=0;while(h<f){BB(g,OX(e));h=h+1|0;}a:{switch(d){case -1:i=new NJ;i.hj=b;b=A7g;i.cK=b;i.fC=b;i.eY=b;i.ln=b;i.hO=b;break a;case 0:i=A4c(b);break a;case 1:i=new Lb;AF6(i,b);H1(i.eY,g);break a;default:}b=new C$;i=new K;M(i);U(H(i,C(463)),d);Bm(b,L(i));N(b);}i.eY=g;b=a.pz;d=Bb(b.ev);e=BM();j=0;while(j<d){BB(e,Ht(b));j=j+1|0;}i.fC=e;i.ln=Pj(a);d=Bb(a.cB);b=BM();j=0;while(j<d){e=OX(a.nI);g=Ht(a.pz);f=Bb(a.cB);k=new QM;k.lp=e;k.kQ
=g;k.rU=f;BB(b,k);j=j+1|0;}i.hO=b;j=Bb(a.cB);i.uA=j==(-1)?null:BG(a.i$,j);d=Bb(a.cB);b=BM();j=0;while(j<d){BB(b,Ro(a,i));j=j+1|0;}i.cK=b;a.m9.data[c]=i;return i;}
function Pj(a){var b,c,d,e;b=Bb(a.cB);c=BM();d=0;while(d<b){e=Bb(a.cB);BB(c,BG(a.i$,e));d=d+1|0;}return c;}
function AEO(){var a=this;B.call(a);a.l1=null;a.pu=null;}
function ALd(){var a=this;B.call(a);a.EE=0;a.DT=0;a.rK=0;a.ni=0;}
function ADn(){var a=this;B.call(a);a.sA=null;a.sB=null;}
function AVf(a){var b,c,d,e,f,g;b=a.sA;c=a.sB;if(BO(c.l1,b.d.f$)){c=c.pu;CP(b,c.ni,c.rK,0);Cf((Bi(b)).bN,c.ni,c.rK);Cf((Bi(b)).bB,c.DT,c.EE);}else{d=(B3(b.fy.AR)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GC(b);b=new YI;b.s0=g;b.s1=c;BJ(b);c=new YN;c.wA=b;$rt_globals.setTimeout(Bv(c,"onTimer"),0);}}}
function ADo(){var a=this;B.call(a);a.Bv=null;a.Bu=null;}
function AXC(a){IV(a.Bv,a.Bu);}
function FX(){var a=this;B.call(a);a.hj=null;a.cK=null;a.fC=null;a.eY=null;a.hO=null;a.ln=null;a.uA=null;}
function A4c(a){var b=new FX();AF6(b,a);return b;}
function AF6(a,b){a.hj=b;a.cK=BM();a.fC=BM();a.eY=BM();a.ln=BM();a.hO=BM();}
function ADL(a){var b;b=a.hj;if(b!==null)b.cK.q0(a);}
function VG(){B.call(this);this.sc=null;}
function AOp(a,b){b=b;Zw(a.sc,b);}
var NJ=G(FX);
var Lb=G(FX);
function UG(){B.call(this);this.AY=null;}
function AVi(a,b){var c;b=b;c=a.AY;Bq(c.by,(Cq(c.fW,b)).bp);}
function QM(){var a=this;B.call(a);a.lp=null;a.kQ=null;a.rU=0;}
function Qh(){B.call(this);this.qy=null;}
function AYK(a,b){b=b;AAe(a.qy,b);}
var Ql=G(0);
var Fu=G(FA);
var No=G(Fu);
var T4=G(No);
var N3=G(Ee);
var T1=G(N3);
var Oh=G(Fo);
function AWp(a){var b;b=new Eg;Y(b);N(b);}
function AQr(a,b){var c;c=new Eg;Y(c);N(c);}
function APr(a,b){b=new Eg;Y(b);N(b);}
var T2=G(Oh);
function AQy(a,b){var c;c=new BH;Y(c);N(c);}
function APK(a){return 0;}
function ANG(a){return A8Y;}
function AL4(a){return 1;}
var TZ=G();
function ALN(a){return 0;}
function AZx(a){var b;b=new Mt;Y(b);N(b);}
function ASp(a){var b;b=new C$;Y(b);N(b);}
var Yh=G(0);
var T0=G();
var V2=G();
function Rf(){var a=this;B.call(a);a.mP=0;a.ss=null;}
function A21(a,b){var c,d,e;c=a.ss;b=b;d=c.yR;e=c.yQ;d=b.a<=d&&e<=b.b?1:0;a.mP=d;return d?0:1;}
var Kr=G(Eg);
var JF=G(Bu);
var Oa=G(Bu);
function X_(){B.call(this);this.zn=null;}
function AZy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.zn;d=CQ(c[0]);e=(CQ(c[1])).data[0];if(!ABn(b.h)){c=b.h;if(c.cp==e){e=b.qv;f=L5(d);Fx(c.dN);Fx(c.dG);M_(c);while(f.ff>=f.iy.data.length?0:1){if(Bb(f)==(-1))continue;g=Vw(c,Bb(f));h=Og(Cd(c,g.bq),g.bv);if(Bb(f)==(-1)){if(!e)continue;h.bZ=0;h.bF=h.bF|4;continue;}i=Vw(c,Bb(f));j=Bb(f);k=Bb(f);Ep(c.dN,g,i);l=c.dG;m=BM();if(Cq(l,i)===null)Ep(l,i,m);BB(Cq(c.dG,i),g);h.bZ=j;h.bF=k;}Lt(b);if(b.EH){n=JK(E3(),b.A7);if(A3j(n,Bp(100))){b=E2(b);c=new K;M(c);H(HK(H(H(c,
b),C(464)),n),C(228));$rt_globals.console.info($rt_ustr(L(c)));}}}}}
function AHP(){B.call(this);this.Rr=null;}
function ABc(){B.call(this);this.vi=null;}
function AQh(a,b){Ml(a.vi,b);}
function Q4(){var a=this;B.call(a);a.ys=null;a.kc=null;}
function U9(){B.call(this);this.sD=null;}
function AXI(a,b){var c,d;c=a.sD;c.k7=b;HB(c.E,b.p6);HB(c.G,c.k7.p7);b=c.mu;d=c.k7;b.gU=d;c.fF.ep=d;}
var AEu=G();
function AER(b){var c,d,e,f,g,h,i,j;c=AVO();d=CK(b);Bq(c,d);e=0;f=0;while(f<d){g=Cd(b,f);h=Jo(g);Bq(c,h);i=0;while(i<h){j=JS(g,i);G3(c,e,L6(j));e=e+L6(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return QX(c);}
function AEA(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=Q(Gr,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new Gr;j.g8=h;e[g]=j;}else{j=new Gr;j.g8=h;j.nB=BP(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].nB.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AIj(b,c,d,e){var f,g,h,i;f=E_(b);g=E_(c);h=AER(b);i=AER(c);b=new AAT;b.Bg=d;CV(e,b,C(465),I(B,[f,h,g,i]));}
function AAm(){var a=this;B.call(a);a.qO=null;a.qP=null;}
function AVg(a){var b,c;b=a.qO;c=a.qP;FL(b.bY.cj,c);AAX(b);}
function G_(){var a=this;B.call(a);a.eg=0;a.e0=0;a.pn=null;a.n6=0;a.gQ=null;}
function ASY(a,b,c,d,e,f){var g=new G_();AYm(g,a,b,c,d,e,f);return g;}
function AYm(a,b,c,d,e,f,g){a.eg=b;a.e0=c;a.pn=BF(f,g);a.n6=d;a.gQ=e;}
function Qv(){Fu.call(this);this.jh=null;}
function Sm(a){var b;b=new AAt;NL(b,a.jh);return b;}
function Tw(){Fu.call(this);this.zh=null;}
function Xp(a){var b;b=new Tp;NL(b,a.zh);return b;}
function Qw(){FA.call(this);this.wh=null;}
function V5(){B.call(this);this.v7=null;}
function AWQ(a,b){b=b;Pf(a.v7,b);}
function TS(){B.call(this);this.uE=null;}
function AYr(a,b){b=b;He(a.uE,b);}
function Kv(){var a=this;B.call(a);a.eF=null;a.ma=null;a.jt=0;}
function A3T(a,b,c){var d=new Kv();AGA(d,a,b,c);return d;}
function AGA(a,b,c,d){a.eF=b;a.ma=c;a.jt=d;}
function AJV(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.eF,c.eF)&&BO(a.ma,c.ma)&&BO(CY(a.jt),CY(c.jt))?1:0;}return 0;}
function Mf(){var a=this;Kv.call(a);a.kZ=null;a.wN=0;}
function AVF(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AJV(a,b))return 0;c=b;return BO(a.kZ,c.kZ);}return 0;}
function E7(){var a=this;B.call(a);a.fR=null;a.gF=null;a.zZ=0;}
function A3i(a,b,c){var d=new E7();NV(d,a,b,c);return d;}
function NV(a,b,c,d){a.fR=b;a.gF=c;a.zZ=d;}
function AIn(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.fR,c.fR)&&BO(a.gF,c.gF)?1:0;}return 0;}
function HH(){E7.call(this);this.hs=null;}
function Ke(){var a=this;E7.call(a);a.id=null;a.qG=0;}
function A1Z(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){if(!AIn(a,b))return 0;c=b;return BO(a.id,c.id);}return 0;}
function Jk(){var a=this;E7.call(a);a.jR=null;a.i9=null;}
function AU4(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return BO(a.jR,c.jR)&&BO(a.i9,c.i9)?1:0;}return 0;}
function Ya(){var a=this;B.call(a);a.ql=null;a.qn=0;a.qm=0;a.qj=null;a.qi=0;a.qk=0;}
function AZB(a,b){var c,d,e,f,g,h,i,j;c=a.ql;d=a.qn;e=a.qm;f=a.qj;g=a.qi;h=a.qk;i=Cy(c.bd,5.0);d=Be((c.bd.bO.a-d|0)-i|0,Bd((i-d|0)-c.Q.k.a|0,b.j.a));j=Be((c.bd.bO.b-e|0)-i|0,Bd((i-e|0)-c.Q.k.b|0,b.j.b));W(f,d+g|0,j+h|0);Et(c,f,c.W.k);}
function AFi(){var a=this;Ib.call(a);a.QF=null;a.R3=0;a.J8=0;a.Iq=0;}
function R0(){var a=this;B.call(a);a.xc=null;a.xd=null;}
function AOU(a){var b,c;b=a.xc;c=a.xd;Su();KF(b,c,A81);}
function R1(){var a=this;B.call(a);a.y4=null;a.y5=null;}
function AMX(a){var b,c;b=a.y4;c=a.y5;Su();KF(b,c,A82);}
function RY(){var a=this;B.call(a);a.vr=null;a.vq=null;}
function AL8(a){KF(a.vr,a.vq,null);}
function RZ(){var a=this;B.call(a);a.qz=null;a.qA=null;}
function AOO(a){var b,c,d,e,f,g,h;b=a.qz;c=a.qA;d=Ea(b.bu.d);e=HD(b.bu.d);d=ABF(b.bu.fy,d,e);DS(b.gn.bY);b=b.bu;e=Fw(b,c);if(d!==null){f=b.d;g=e.bq;h=e.bv;e=new AA4;e.Fk=b;e.Fj=c;d.Kc(f,g,h,1,e,b.j5);}}
function Rw(){B.call(this);this.rY=null;}
function AZ6(a){var b;b=a.rY;DS(b.gn.bY);Hd(b.bu,V0(b),0);}
function Rv(){B.call(this);this.Br=null;}
function AZh(a){var b;b=a.Br;DS(b.gn.bY);Hd(b.bu,V0(b),1);}
function Ru(){B.call(this);this.z3=null;}
function AUi(a){var b,c,d;b=a.z3;DS(b.gn.bY);c=HT(b);b=b.bu;BJ(b);d=new AD5;d.yE=b;Rz(c,d,AEX(C(466)));}
function Qn(){var a=this;B.call(a);a.xa=null;a.xb=null;}
function AQ3(a){var b,c;b=a.xa;c=a.xb;b=b.bu.d;b.pO=c;Mj(b);}
var Q3=G(0);
var A66=null;function AKh(){A66=new Tm;}
function YG(){B.call(this);this.wo=null;}
function AMN(a){var b,c,d,e;b=a.wo;c=HT(b);d=b.gn.bY;e=new RJ;e.uc=b;Kc(c,Ye(d,e));}
function AAT(){B.call(this);this.Bg=null;}
function ARq(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Bg;d=CQ(c[0]);c=L5(d);e=new TU;d=AEA(c);f=AEA(c);g=Bb(c);h=Q(L3,g);i=h.data;j=0;while(j<g){i[j]=Nj(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AF2(e,d,f,h);b.g(e);}
function M3(){var a=this;G5.call(a);a.ge=null;a.lf=null;a.wS=null;a.ns=null;}
function A83(a,b){var c=new M3();T9(c,a,b);return c;}
function T9(a,b,c){var d;ACL(a,c,b);b=new Ut;c=a.dj;Ey(b);b.kj=KU(c);b.iD=AIy(c.cj);b.d8=If(b.kj);c=If(b.kj);b.d7=c;Oc(b.iD,b.d8,c);d=new OR;d.tM=b;c=b.d8;c.iu=d;b.d7.iu=d;IX(c,0);IX(b.d7,0);c=b.d8;c.b3=1;b.tL=AHj(c,b.d7);Mw(b,I(CB,[b.d8,b.iD,b.d7]));a.ge=b;c=a.iA;b.iD.im=c;Ft(b.d8,c);Ft(b.d7,c);b=WF(a,a.ge);a.lf=b;c=new VX;c.DA=a;b.CK=c;c=new VW;c.Dk=a;b.EY=c;EI(a.dj,b);}
function MZ(a,b,c){var d,e;d=!c?a.ge.d7:a.ge.d8;e=new ABO;e.rt=a;e.rs=b;e.rr=c;GK(d,b,e);}
function A1H(a){a.ge=null;}
function AVp(a,b){var c,d,e,f;if(BW(a.ge.d8,b))return ZL(a,1,C(299));if(BW(a.ge.d7,b))return ZL(a,0,C(300));c=Q(BC,2);d=c.data;b=new BC;e=new Wc;e.yW=a;CC(b,e,C(299));d[0]=b;b=new BC;f=new Wd;f.AJ=a;CC(b,f,C(300));d[1]=b;return CR(c);}
function ZL(a,b,c){var d,e,f,g;d=Q(BC,1);e=d.data;f=new BC;g=new Yy;g.xQ=a;g.xP=b;CC(f,g,c);e[0]=f;return CR(d);}
function Nb(a,b){var c,d,e;c=a.dj;d=c.cj.e1;e=new Td;e.BO=a;e.BN=b;Kc(d,Ye(c,e));}
function Z8(){B.call(this);this.zw=null;}
function AUx(a,b,c){var d,e;c=a.zw;d=c.d.h;e=b.bp;b=c.fv;Z2(d.B.data[e],0,b);}
function Wm(){var a=this;B.call(a);a.dO=null;a.zr=null;a.yX=null;}
function OX(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.dO);switch(b){case 3:break;case 5:c=PN(a);d=N7(a);b=Bb(a.dO);e=Bb(a.dO);f=Bb(a.dO);g=BM();h=0;while(h<f){BB(g,N7(a));h=h+1|0;}i=new Mf;AGA(i,c,d,b);i.kZ=g;i.wN=e;break a;default:c=new C$;d=new K;M(d);U(H(d,C(467)),b);Bm(c,L(d));N(c);}i=A3T(PN(a),N7(a),Bb(a.dO));}return i;}
function PN(a){var b,c;b=Bb(a.dO);c=Bb(a.dO);return AXf(ED(a.zr,b,c),Bb(a.dO));}
function N7(a){var b;b=Bb(a.dO);if(b==(-1))return null;return BG(a.yX,b);}
function RB(){var a=this;B.call(a);a.ev=null;a.AZ=null;a.Bc=null;}
function Ht(a){var b,c,d,e,f;a:{b:{b=Bb(a.ev);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=WQ(a);d=QR(a);b=Bb(a.ev);e=Sp(a);f=new Ke;NV(f,c,d,2);f.qG=b;f.id=e;break a;case 4:c=Ht(a);d=Ht(a);f=new Jk;NV(f,c.fR,c.gF,9);f.jR=c;f.i9=d;break a;case 5:f=A3i(WQ(a),QR(a),Bb(a.ev));break a;case 9:c=Sp(a);f=new HH;d=!EE(c)&&BG(c,0)!==null?(BG(c,0)).gF:null;NV(f,null,null,7);f.hs=BM();c=B7(c);while(B_(c)){e=Ca(c);if(!(e instanceof HH))BB(f.hs,e);else{e=e;H1(f.hs,e.hs);}}f.gF=d;break a;default:break b;}f
=null;break a;}c=new C$;d=new K;M(d);U(H(d,C(468)),b);Bm(c,L(d));N(c);}return f;}
function WQ(a){var b,c;b=Bb(a.ev);c=Bb(a.ev);return AXf(ED(a.AZ,b,c),Bb(a.ev));}
function QR(a){var b;b=Bb(a.ev);if(b==(-1))return null;return BG(a.Bc,b);}
function Sp(a){var b,c,d;b=Bb(a.ev);c=BM();d=0;while(d<b){BB(c,Ht(a));d=d+1|0;}return c;}
function Vi(){var a=this;B.call(a);a.uX=null;a.uY=null;a.u7=null;a.u8=0;a.u4=0;a.u5=0;a.u1=0;a.u2=0;a.uZ=0;a.u0=0;a.vL=0;}
function ALm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.uX;d=a.uY;e=a.u7;f=a.u8;g=a.u4;h=a.u5;i=a.u1;j=a.u2;k=a.uZ;l=a.u0;m=a.vL;n=Cy(c.bd,5.0);o=c.W.hU();Co(d,c.W.k);Co(e,c.W.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bd.bO.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.Q.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bd.bO.b+c.Q.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}Et(c,e,d);}
function Uy(){var a=this;B.call(a);a.xW=null;a.xV=0.0;}
function Nt(a,b){return Lm(a.xW,b,a.xV*2.0+0.875);}
function Ph(){B.call(this);this.rL=null;}
function AXX(a){AHw(a.rL);}
function Pi(){B.call(this);this.so=null;}
function A1o(a){Hs(a.so);}
function Pg(){B.call(this);this.wm=null;}
function AUo(a){AIh(a.wm);}
function UX(){B.call(this);this.yY=null;}
function AP1(a){a.yY.BF();}
function UW(){B.call(this);this.u_=null;}
function A0l(a){a.u_.wn();}
function X0(){B.call(this);this.re=null;}
function ANq(a){var b,c,d,e,f,g,h,i;b=a.re;c=(b.rw.cY()).data;d=Q(BC,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new Qq;i.um=b;i.ul=h;e[f]=W4(i,h);f=f+1|0;}return d;}
function Z$(){B.call(this);this.xI=null;}
function AO2(a){a.xI.ol.il(0);}
function Z_(){B.call(this);this.yx=null;}
function A0_(a){a.yx.ol.il(1);}
function VE(){B.call(this);this.z0=null;}
function ALv(a){var b,c,d,e,f;b=a.z0.d.h;c=b.cp;d=new K;M(d);U(H(d,C(469)),c);$rt_globals.console.info($rt_ustr(L(d)));c=b.np;d=new K;M(d);U(H(d,C(470)),c);$rt_globals.console.info($rt_ustr(L(d)));d=b.dg;e=Hr(E_(b));ADb(d,0,d.de,e);b=Bt();f=b.mY;f.data[0]=10;Xt(b,f,0,1);}
function Vz(){B.call(this);this.xy=null;}
function AO3(a){ZB(a.xy);}
function VA(){B.call(this);this.ya=null;}
function ATK(a){AAS(a.ya);}
function VB(){B.call(this);this.vY=null;}
function AYz(a){Oi(a.vY.d);}
function VC(){B.call(this);this.qB=null;}
function AXp(a){Vq(a.qB);}
function OM(){B.call(this);this.xU=null;}
function AS7(a){var b,c,d,e,f,g,h;b=a.xU;c=Q(BC,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=W4(Qr(b,g),W9(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=W4(Qr(b,g),W9(g));e=h;}return c;}
function Ut(){var a=this;Ii.call(a);a.kj=null;a.d8=null;a.d7=null;a.iD=null;a.tL=null;a.mK=null;a.jM=0;}
function VX(){B.call(this);this.DA=null;}
function VW(){B.call(this);this.Dk=null;}
function Rp(){B.call(this);this.sp=null;}
function ANr(a,b,c){HL(Cd(a.sp.d.h,b.bp),0,J(c));}
var XL=G(0);
function ACi(){var a=this;B.call(a);a.mz=null;a.pD=null;a.hz=null;a.m2=null;}
function A3N(a,b,c,d){var e=new ACi();AHd(e,a,b,c,d);return e;}
function AHd(a,b,c,d,e){a.mz=b;a.pD=c;a.hz=d;a.m2=e;}
function Nh(a,b){var c,d;c=new ACq;d=a.mz.values();c.ks=a;c.yD=d;c.k4=b;ABd(c);}
function YJ(a){var b,c,d,e;b=a.m2;if(b===null){b=a.hz;c=b.data;d=Hp(a);e=c.length;b=C8(b,e+1|0);b.data[e]=d;b=b;a.m2=b;}return b;}
function Hp(a){return H3(a.mz.name);}
function A1Y(a){return a.hz;}
function AFk(a){return LX(a.hz,Hp(a));}
function AHv(){var a=this;B.call(a);a.jC=null;a.dH=0;}
function AXf(a,b){var c=new AHv();ALp(c,a,b);return c;}
function ALp(a,b,c){a.jC=b;a.dH=c;}
function AQ5(a,b){var c;if(a===b)return 1;if(b!==null&&BE(a)===BE(b)){c=b;return a.dH==c.dH&&BO(a.jC,c.jC)?1:0;}return 0;}
function Wy(){B.call(this);this.rb=null;}
function AYp(a,b){b=b;OK(a.rb,b);}
function VP(){B.call(this);this.xu=null;}
function A2Y(a,b){b=b;He(a.xu,b);}
var Tm=G();
function OR(){B.call(this);this.tM=null;}
function A1K(a,b){var c,d,e;c=a.tM;d=c.d8;if(d===b)c.jM=c.jM|1;e=c.d7;if(e===b)c.jM=c.jM|2;if((c.jM&3)==3){b=d.d.h;d=e.d.h;e=new ACp;e.z7=c;AIj(b,d,e,c.kj.bY.cj.e1);}}
function FG(){var a=this;B.call(a);a.kn=0;a.t3=0;a.jT=null;a.hb=null;a.yI=null;a.l4=null;}
function A84(a){var b=new FG();NL(b,a);return b;}
function NL(a,b){a.l4=b;a.t3=b.cZ;a.jT=null;}
function Gh(a){var b,c;if(a.jT!==null)return 1;while(true){b=a.kn;c=a.l4.b8.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kn=b+1|0;}return 0;}
function AIR(a){var b;if(a.t3==a.l4.cZ)return;b=new H_;Y(b);N(b);}
function NX(a){var b,c,d,e;AIR(a);if(!Gh(a)){b=new Mt;Y(b);N(b);}b=a.jT;if(b!==null){c=a.hb;if(c!==null)a.yI=c;a.hb=b;a.jT=b.cW;}else{d=a.l4.b8.data;e=a.kn;a.kn=e+1|0;b=d[e];a.hb=b;a.jT=b.cW;a.yI=null;}}
var AAt=G(FG);
function Qk(a){NX(a);return a.hb.cU;}
var Tp=G(FG);
function ADJ(a){NX(a);return a.hb;}
var Zt=G(FG);
function AEG(){var a=this;B.call(a);a.Pt=null;a.SB=0;}
function Zr(){var a=this;B.call(a);a.l=null;a.dX=0;a.mQ=null;a.q9=0;a.hX=0;a.fK=0;a.bA=0;a.nu=null;}
function M9(a){return a.l.bQ;}
function Vx(a,b,c,d){var e,f,g,h,i,j;e=BM();f=a.dX;g=0;if(c!=f)a.dX=c;a:{switch(b){case -1073741784:h=new RU;c=a.bA+1|0;a.bA=c;Gp(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new QO;c=a.bA+1|0;a.bA=c;Gp(h,c);break a;case -33554392:h=new SD;c=a.bA+1|0;a.bA=c;Gp(h,c);break a;default:c=a.hX+1|0;a.hX=c;if(d!==null)h=A48(c);else{h=new F6;Gp(h,0);g=1;}c=a.hX;if(c<=(-1))break a;if(c>=10)break a;a.mQ.data[c]=h;break a;}h=new ADS;Gp(h,(-1));}while(true){if(Fj(a.l)&&a.l.m==(-536870788))
{d=A1z(Ck(a,2),Ck(a,64));while(!DC(a.l)&&Fj(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CJ(d,Bl(i));i=a.l;if(i.bk!=(-536870788))continue;Bl(i);}i=Ln(a,d);i.T(h);}else if(a.l.bk==(-536870788)){i=H2(h);Bl(a.l);}else{i=X3(a,h);d=a.l;if(d.bk==(-536870788))Bl(d);}if(i!==null)BB(e,i);if(DC(a.l))break;if(a.l.bk==(-536870871))break;}if(a.l.m5==(-536870788))BB(e,H2(h));if(a.dX!=f&&!g){a.dX=f;d=a.l;d.g_=f;d.m=d.bk;d.fn=d.fz;j=d.ds;d.y=j+1|0;d.jy=j;FP(d);}switch(b){case -1073741784:break;case -536870872:d
=new Wh;F7(d,e,h);return d;case -268435416:d=new ACJ;F7(d,e,h);return d;case -134217688:d=new Zu;F7(d,e,h);return d;case -67108824:d=new SX;F7(d,e,h);return d;case -33554392:d=new D_;F7(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A4Z(BG(e,0),h);default:return A3A(e,h);}return H2(h);}d=new Kq;F7(d,e,h);return d;}
function AKw(a){var b,c,d,e,f,g,h;b=BP(4);c=(-1);d=(-1);if(!DC(a.l)&&Fj(a.l)){e=b.data;c=Bl(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B5(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bk;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bl(f);f=a.l;g=f.bk;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bl(f);return A1m(e,3);}return A1m(e,2);}if(!Ck(a,2))return AE2(b[0]);if(Ck(a,64))return AZ3(b[0]);return AV2(b[0]);}e=b.data;c=1;while(c<4&&!DC(a.l)&&Fj(a.l)){h=c+1|0;e[c]=Bl(a.l);c=h;}if(c==1){h=e[0];if(!(A85.DL(h)==A86?0:1))return Vp(a,e[0]);}if
(!Ck(a,2))return A5t(b,c);if(Ck(a,64)){f=new Vk;PK(f,b,c);return f;}f=new ABe;PK(f,b,c);return f;}
function X3(a,b){var c,d,e,f,g,h,i;if(Fj(a.l)&&!KT(a.l)&&Nr(a.l.m)){if(Ck(a,128)){c=AKw(a);if(!DC(a.l)){d=a.l;e=d.bk;if(!(e==(-536870871)&&!(b instanceof F6))&&e!=(-536870788)&&!Fj(d))c=Mh(a,b,c);}}else if(!Xu(a.l)&&!AB_(a.l)){f=new PX;M(f);while(!DC(a.l)&&Fj(a.l)&&!Xu(a.l)&&!AB_(a.l)){if(!(!KT(a.l)&&!a.l.m)&&!(!KT(a.l)&&Nr(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bl(a.l);if(!Mg(e))BN(f,e&65535);else JZ(f,HQ(e));}if(!Ck(a,2)){c=new ZH;D0(c);c.cF
=L(f);e=f.L;c.bI=e;c.o2=AY8(e);c.nx=AY8(c.bI);h=0;while(h<(c.bI-1|0)){RG(c.o2,P(c.cF,h),(c.bI-h|0)-1|0);RG(c.nx,P(c.cF,(c.bI-h|0)-1|0),(c.bI-h|0)-1|0);h=h+1|0;}}else if(Ck(a,64))c=A5s(f);else{c=new Pe;D0(c);c.jA=L(f);c.bI=f.L;}}else c=Mh(a,b,ADC(a,b));}else{d=a.l;if(d.bk!=(-536870871))c=Mh(a,b,ADC(a,b));else{if(b instanceof F6)N(Cm(C(21),d.bQ,PV(d)));c=H2(b);}}a:{if(!DC(a.l)){e=a.l.bk;if(!(e==(-536870871)&&!(b instanceof F6))&&e!=(-536870788)){f=X3(a,b);if(c instanceof Dc&&!(c instanceof FQ)&&!(c instanceof C1)
&&!(c instanceof E6)){i=c;if(!f.b1(i.N)){c=new UQ;Fe(c,i.N,i.e,i.jP);c.N.T(c);}}if((f.iV()&65535)!=43)c.T(f);else c.T(f.N);break a;}}if(c===null)return null;c.T(b);}if((c.iV()&65535)!=43)return c;return c.N;}
function Mh(a,b,c){var d,e,f,g,h;d=a.l;e=d.bk;if(c!==null&&!(c instanceof Cc)){switch(e){case -2147483606:Bl(d);d=new V4;Ds(d,c,b,e);Ox();c.T(A87);return d;case -2147483605:Bl(d);d=new Yu;Ds(d,c,b,(-2147483606));Ox();c.T(A87);return d;case -2147483585:Bl(d);d=new Qz;Ds(d,c,b,(-536870849));Ox();c.T(A87);return d;case -2147483525:f=new Pb;d=Gl(d);g=a.fK+1|0;a.fK=g;MC(f,d,c,b,(-536870849),g);Ox();c.T(A87);return f;case -1073741782:case -1073741781:Bl(d);d=new RP;Ds(d,c,b,e);c.T(d);return d;case -1073741761:Bl(d);d
=new Y_;Ds(d,c,b,(-536870849));c.T(b);return d;case -1073741701:h=new TA;d=Gl(d);e=a.fK+1|0;a.fK=e;MC(h,d,c,b,(-536870849),e);c.T(h);return h;case -536870870:case -536870869:Bl(d);if(c.iV()!=(-2147483602)){d=new C1;Ds(d,c,b,e);}else if(Ck(a,32)){d=new RQ;Ds(d,c,b,e);}else{d=new XB;f=Yd(a.dX);Ds(d,c,b,e);d.m4=f;}c.T(d);return d;case -536870849:Bl(d);d=new GE;Ds(d,c,b,(-536870849));c.T(b);return d;case -536870789:h=new Gn;d=Gl(d);e=a.fK+1|0;a.fK=e;MC(h,d,c,b,(-536870849),e);c.T(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bl(d);d=new AD9;Fe(d,f,b,e);f.e=d;return d;case -2147483585:Bl(d);c=new UL;Fe(c,f,b,(-2147483585));return c;case -2147483525:c=new X2;R_(c,Gl(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bl(d);d=new Y$;Fe(d,f,b,e);f.e=d;return d;case -1073741761:Bl(d);c=new ABp;Fe(c,f,b,(-1073741761));return c;case -1073741701:c=new RF;R_(c,Gl(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bl(d);d=A3Q(f,b,e);f.e=d;return d;case -536870849:Bl(d);c
=new E6;Fe(c,f,b,(-536870849));return c;case -536870789:return A4w(Gl(d),f,b,(-536870789));default:}return c;}
function ADC(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F6;while(true){a:{e=a.l;f=e.bk;if((f&(-2147418113))==(-2147483608)){Bl(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dX=g;else{if(f!=(-1073741784))g=a.dX;c=Vx(a,f,g,b);e=a.l;if(e.bk!=(-536870871))N(Cm(C(21),e.bQ,e.ds));Bl(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bl(e);c
=A1c(0);break a;case -2147483577:Bl(e);c=new Xy;B6(c);break a;case -2147483558:Bl(e);c=new Vd;h=a.bA+1|0;a.bA=h;AKG(c,h);break a;case -2147483550:Bl(e);c=A1c(1);break a;case -2147483526:Bl(e);c=new AC4;B6(c);break a;case -536870876:Bl(e);a.bA=a.bA+1|0;if(Ck(a,8)){if(Ck(a,1)){c=A3s(a.bA);break a;}c=A2_(a.bA);break a;}if(Ck(a,1)){c=A3E(a.bA);break a;}c=A3Z(a.bA);break a;case -536870866:Bl(e);if(Ck(a,32)){c=A36();break a;}c=A3W(Yd(a.dX));break a;case -536870821:Bl(e);i=0;c=a.l;if(c.bk==(-536870818)){i=1;Bl(c);}c
=Ln(a,Hy(a,i));c.T(b);e=a.l;if(e.bk!=(-536870819))N(Cm(C(21),e.bQ,e.ds));XS(e,1);Bl(a.l);break a;case -536870818:Bl(e);a.bA=a.bA+1|0;if(!Ck(a,8)){c=new Le;B6(c);break a;}c=new WL;e=Yd(a.dX);B6(c);c.zu=e;break a;case 0:j=e.fz;if(j!==null)c=Ln(a,j);else{if(DC(e)){c=H2(b);break a;}c=AE2(f&65535);}Bl(a.l);break a;default:break b;}Bl(e);c=new Le;B6(c);break a;}h=(f&2147483647)-48|0;if(a.hX<h)N(Cm(C(21),FV(e),PV(a.l)));Bl(e);a.bA=a.bA+1|0;c=!Ck(a,2)?A4i(h,a.bA):Ck(a,64)?A3t(h,a.bA):A5r(h,a.bA);a.mQ.data[h].oR=1;a.q9
=1;break a;}if(f>=0&&!Ha(e)){c=Vp(a,f);Bl(a.l);}else if(f==(-536870788))c=H2(b);else{if(f!=(-536870871)){b=new Kf;c=!Ha(a.l)?U_(f&65535):a.l.fz.cN();e=a.l;MM(b,c,e.bQ,e.ds);N(b);}if(d){b=new Kf;e=a.l;MM(b,C(21),e.bQ,e.ds);N(b);}c=H2(b);}}}if(f!=(-16777176))break;}return c;}
function Hy(a,b){var c,d,e,f,g,h,i,j,$$je;c=A1z(Ck(a,2),Ck(a,64));EO(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DC(a.l))break a;h=a.l;b=h.bk;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CJ(c,d);d=Bl(a.l);h=a.l;if(h.bk!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bl(h);e=1;d=(-1);break d;}Bl(h);if(g){c=Hy(a,0);break d;}if(a.l.bk==(-536870819))break d;U1(c,Hy(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bl(h);h=a.l;i=h.bk;if(Ha(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Nr(i))break e;i=i&65535;break e;}catch($$e){$$je=EX($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}}try{Cb(c,d,i);}catch($$e){$$je=EX($$e);if($$je instanceof Ew){break b;}else{throw $$e;}}Bl(a.l);d=(-1);break d;}}if(d>=0)CJ(c,d);d=45;Bl(a.l);break d;case -536870821:if(d>=0){CJ(c,d);d=(-1);}Bl(a.l);j=0;h=a.l;if(h.bk==(-536870818)){Bl(h);j=1;}if(!e)AH1(c,Hy(a,j));else U1(c,Hy(a,j));e=0;Bl(a.l);break d;case -536870819:if(d>=0)CJ(c,
d);d=93;Bl(a.l);break d;case -536870818:if(d>=0)CJ(c,d);d=94;Bl(a.l);break d;case 0:if(d>=0)CJ(c,d);h=a.l.fz;if(h===null)d=0;else{ALc(c,h);d=(-1);}Bl(a.l);break d;default:}if(d>=0)CJ(c,d);d=Bl(a.l);}g=0;}N(Cm(C(21),M9(a),a.l.ds));}N(Cm(C(21),M9(a),a.l.ds));}if(!f){if(d>=0)CJ(c,d);return c;}N(Cm(C(21),M9(a),a.l.ds-1|0));}
function Vp(a,b){var c,d,e;c=Mg(b);if(Ck(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AV2(b&65535);}if(Ck(a,64)&&b>128){if(c){d=new Wa;D0(d);d.bI=2;d.s3=G4(G2(b));return d;}if(Qj(b))return AQ2(b&65535);if(!Ss(b))return AZ3(b&65535);return AXM(b&65535);}}if(!c){if(Qj(b))return AQ2(b&65535);if(!Ss(b))return AE2(b&65535);return AXM(b&65535);}d=new Ef;D0(d);d.bI=2;d.gZ=b;e=(HQ(b)).data;d.mk=e[0];d.lo=e[1];return d;}
function Ln(a,b){var c,d,e;if(!AJP(b)){if(!b.R){if(b.iq())return AOD(b);return ASZ(b);}if(!b.iq())return AX4(b);c=new MD;ABI(c,b);return c;}c=AEs(b);d=new OW;B6(d);d.sh=c;d.Ec=c.bi;if(!b.R){if(b.iq())return AGm(AOD(Jw(b)),d);return AGm(ASZ(Jw(b)),d);}if(!b.iq())return AGm(AX4(Jw(b)),d);c=new Ra;e=new MD;ABI(e,Jw(b));AHE(c,e,d);return c;}
function Jx(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Ck(a,b){return (a.dX&b)!=b?0:1;}
function Z1(){B.call(this);this.y3=null;}
function AQo(a,b){b.hq=a.y3.de;}
function Z0(){B.call(this);this.u6=null;}
function AZV(a,b){b.hj=a.u6.de.cl;}
function XA(){B.call(this);this.rq=null;}
function AWi(a,b){b.hq=a.rq;}
var HX=G(0);
function S3(){B.call(this);this.y7=null;}
function AYL(a,b,c,d){KM(a.y7,b,c.bp,d.bp);}
function S4(){B.call(this);this.w9=null;}
function AXu(a,b,c,d){KM(a.w9,b,c.bp,d.bp);}
function IU(){B.call(this);this.oi=0;}
var A88=null;var A89=null;var A8$=null;function ARy(a){var b=new IU();AGo(b,a);return b;}
function AGo(a,b){a.oi=b;}
function XX(b){return !b?A89:A88;}
function AIo(){A88=ARy(1);A89=ARy(0);A8$=F($rt_booleancls());}
var KO=G(0);
var RV=G();
var XP=G(0);
var AFQ=G();
function Sg(){B.call(this);this.u$=null;}
function AZe(a,b,c,d){JR(a.u$,b,c.bp,d.bp);}
var Sf=G();
function ATA(a,b){return b.eF.dH>=0?0:1;}
var Se=G();
function ARU(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fR;if(b===null)break b;if(b.dH>=0)break b;}c=1;break a;}c=0;}return c;}
function Si(){B.call(this);this.Ar=null;}
function AYS(a,b,c,d){JR(a.Ar,b,c.bp,d.bp);}
var GJ=G(CI);
var A82=null;var A81=null;var A8_=null;function Su(){Su=Bn(GJ);A2J();}
function A0B(a,b){var c=new GJ();AFD(c,a,b);return c;}
function AFD(a,b,c){Su();DJ(a,b,c);}
function A2J(){var b;A82=A0B(C(471),0);b=A0B(C(472),1);A81=b;A8_=I(GJ,[A82,b]);}
function AD5(){B.call(this);this.yE=null;}
function AW1(a,b){DH(a.yE,b);}
function BS(){var a=this;B.call(a);a.e=null;a.cx=0;a.x5=null;a.jP=0;}
var A53=0;function B6(a){var b;b=A53;A53=b+1|0;a.x5=J0(b);}
function NG(a,b){var c;c=A53;A53=c+1|0;a.x5=J0(c);a.e=b;}
function IG(a,b,c,d){var e;e=d.z;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function IN(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AWc(a,b){a.jP=b;}
function AVP(a){return a.jP;}
function ASA(a){return a.e;}
function ATa(a,b){a.e=b;}
function A1s(a,b){return 1;}
function A2c(a){return null;}
function Ku(a){var b;a.cx=1;b=a.e;if(b!==null){if(!b.cx){b=b.gy();if(b!==null){a.e.cx=1;a.e=b;}a.e.eT();}else if(b instanceof HS&&b.eX.oR)a.e=b.e;}}
function AHL(){A53=1;}
function Qq(){var a=this;B.call(a);a.um=null;a.ul=null;}
function AUV(a){var b,c;b=a.um;c=a.ul;b.i_.uI(c);}
function VQ(){var a=this;B.call(a);a.rl=null;a.rj=null;a.ri=0;a.rk=0;}
function AZj(a,b){b=b;ES(a.rl,a.rj,b,a.ri,a.rk);}
function VR(){var a=this;B.call(a);a.B6=null;a.B5=null;a.B4=0;a.B3=0;}
function AOb(a,b){b=b;ES(a.B6,a.B5,b,a.B4,a.B3);}
function RA(){var a=this;B.call(a);a.yd=null;a.yb=null;a.yc=null;}
function AXb(a){AFo(a.yd,a.yb,a.yc);}
function Xz(){B.call(this);this.wX=null;}
function AQB(a,b){ADk(a.wX,b);}
function AAI(){var a=this;B.call(a);a.B1=null;a.B2=null;}
function AMg(a){var b,c;b=a.B1;c=a.B2;Gi(b.x.bw,FR(c));}
function Im(){var a=this;Dg.call(a);a.jN=null;a.hL=null;a.ht=null;a.ia=null;}
var A9a=null;var A9b=null;function ASw(a,b){var c=new Im();AJL(c,a,b);return c;}
function A9c(a,b,c){var d=new Im();LH(d,a,b,c);return d;}
function AJL(a,b,c){LH(a,b,0,c);}
function LH(a,b,c,d){J5(a,Hp(b),c);a.ht=A9a;a.ia=A9b;a.jN=b;a.hL=d;Lh(a);IF(a);}
function Rg(a,b){return Ub(a.ht,b);}
function Lh(a){var b;b=new RT;b.sO=a;a.er=b;a.jc=b;a.e_=A8N;}
function ADr(a){var b;b=new AD7;b.tE=a;a.er=b;a.jc=b;}
function AHf(){A9a=Q(Im,0);A9b=Q(KA,0);}
function Sz(){B.call(this);this.Bx=null;}
function ARX(a,b){Ti(HT(a.Bx),b,A76,AEX(C(473)));}
var AA9=G();
var A8U=null;function A40(){A40=Bn(AA9);AVb();}
function AVb(){var b,c;Su();b=BP((A8_.hy()).data.length);c=b.data;A8U=b;c[A82.fP]=1;c[A81.fP]=2;}
function O7(){B.call(this);this.uH=null;}
function AO4(a,b){var c,d;c=a.uH;d=b.iQ;b=new K;M(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(L(b)));}
function C0(){var a=this;BS.call(a);a.oR=0;a.el=0;}
var A87=null;function Ox(){Ox=Bn(C0);AWS();}
function A48(a){var b=new C0();Gp(b,a);return b;}
function Gp(a,b){Ox();B6(a);a.el=b;}
function AMf(a,b,c,d){var e,f;e=I8(d,a.el);MY(d,a.el,b);f=a.e.c(b,c,d);if(f<0)MY(d,a.el,e);return f;}
function AYA(a){return a.el;}
function AMu(a,b){return 0;}
function AWS(){var b;b=new Xv;B6(b);A87=b;}
function G7(){var a=this;B.call(a);a.bg=null;a.g_=0;a.fq=0;a.vA=0;a.m5=0;a.bk=0;a.m=0;a.zL=0;a.fz=null;a.fn=null;a.y=0;a.j1=0;a.ds=0;a.jy=0;a.bQ=null;}
var A9d=null;var A85=null;var A86=0;function XS(a,b){if(b>0&&b<3)a.fq=b;if(b==1){a.m=a.bk;a.fn=a.fz;a.y=a.jy;a.jy=a.ds;FP(a);}}
function Ha(a){return a.fz===null?0:1;}
function KT(a){return a.fn===null?0:1;}
function Bl(a){FP(a);return a.m5;}
function Gl(a){var b;b=a.fz;FP(a);return b;}
function FP(a){var b,c,d,e,f,g,h,$$je;a.m5=a.bk;a.bk=a.m;a.fz=a.fn;a.ds=a.jy;a.jy=a.y;while(true){b=0;c=a.y>=a.bg.data.length?0:LS(a);a.m=c;a.fn=null;if(a.fq==4){if(c!=92)return;c=a.y;d=a.bg.data;c=c>=d.length?0:d[B9(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.y=a.j1;return;}a.fq=a.vA;a.m=a.y>(a.bg.data.length-2|0)?0:LS(a);}a:{c=a.m;if(c!=92){e=a.fq;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bg.data[a.y]!=63){a.m=(-2147483608);break a;}B9(a);c=a.bg.data[a.y];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B9(a);break b;default:N(Cm(C(21),FV(a),a.y));}a.m=(-67108824);B9(a);}else{switch(c){case 33:break;case 60:B9(a);c=a.bg.data[a.y];e=1;break b;case 61:a.m=(-536870872);B9(a);break b;case 62:a.m=(-33554392);B9(a);break b;default:f=ALa(a);a.m=f;if(f<256){a.g_=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.g_=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B9(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.y;d=a.bg.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B9(a);break a;case 63:a.m=c|(-1073741824);B9(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);XS(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fn=AHi(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.y>=(a.bg.data.length-2|0)?(-1):LS(a);c:{a.m=c;switch(c){case -1:N(Cm(C(21),FV(a),a.y));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AGf(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fq!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cm(C(21),FV(a),a.y));case 68:case 83:case 87:case 100:case 115:case 119:a.fn=R7(ED(a.bg,
a.j1,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.vA=a.fq;a.fq=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.y;d=a.bg.data;if(c>=(d.length-2|0))N(Cm(C(21),FV(a),a.y));a.m=d[B9(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=Yw(a,4);break a;case 120:a.m=Yw(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AJW(a);h=0;if(a.m==80)h=1;try{a.fn=R7(g,h);}catch($$e){$$je=EX($$e);if($$je instanceof MG){N(Cm(C(21),FV(a),a.y));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AJW(a){var b,c,d,e,f,g;b=new K;GM(b,10);c=a.y;d=a.bg;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=ED(d,B9(a),1);f=new K;M(f);H(H(f,C(474)),b);return L(f);}B9(a);c=0;a:{while(true){g=a.y;d=a.bg.data;if(g>=(d.length-2|0))break;c=d[B9(a)];if(c==125)break a;BN(b,c);}}if(c!=125)N(Cm(C(21),a.bQ,a.y));}if(!b.L)N(Cm(C(21),a.bQ,a.y));f=L(b);if(J(f)==1){b=new K;M(b);H(H(b,C(474)),f);return L(b);}b:{c:{if(J(f)>3){if(Nw(f,C(474)))break c;if(Nw(f,C(475)))break c;}break b;}f=Dv(f,2);}return f;}
function AHi(a,b){var c,d,e,f,g,$$je;c=new K;GM(c,4);d=(-1);e=2147483647;a:{while(true){f=a.y;g=a.bg.data;if(f>=g.length)break a;b=g[B9(a)];if(b==125)break a;if(b==44&&d<0)try{d=KK(Ed(c),10);AHo(c,0,AIp(c));continue;}catch($$e){$$je=EX($$e);if($$je instanceof Dt){break;}else{throw $$e;}}BN(c,b&65535);}N(Cm(C(21),a.bQ,a.y));}if(b!=125)N(Cm(C(21),a.bQ,a.y));if(c.L>0)b:{try{e=KK(Ed(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EX($$e);if($$je instanceof Dt){}else{throw $$e;}}N(Cm(C(21),a.bQ,a.y));}else if
(d<0)N(Cm(C(21),a.bQ,a.y));if((d|e|(e-d|0))<0)N(Cm(C(21),a.bQ,a.y));b=a.y;g=a.bg.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B9(a);break c;case 63:a.m=(-1073741701);B9(a);break c;default:}a.m=(-536870789);}c=new Wr;c.fI=d;c.fH=e;return c;}
function FV(a){return a.bQ;}
function DC(a){return !a.bk&&!a.m&&a.y==a.zL&&!Ha(a)?1:0;}
function Nr(b){return b<0?0:1;}
function Fj(a){return !DC(a)&&!Ha(a)&&Nr(a.bk)?1:0;}
function Xu(a){var b;b=a.bk;return b<=56319&&b>=55296?1:0;}
function AB_(a){var b;b=a.bk;return b<=57343&&b>=56320?1:0;}
function Ss(b){return b<=56319&&b>=55296?1:0;}
function Qj(b){return b<=57343&&b>=56320?1:0;}
function Yw(a,b){var c,d,e,f,$$je;c=new K;GM(c,b);d=a.bg.data.length-2|0;e=0;while(true){f=BL(e,b);if(f>=0)break;if(a.y>=d)break;BN(c,a.bg.data[B9(a)]);e=e+1|0;}if(!f)a:{try{b=KK(Ed(c),16);}catch($$e){$$je=EX($$e);if($$je instanceof Dt){break a;}else{throw $$e;}}return b;}N(Cm(C(21),a.bQ,a.y));}
function AGf(a){var b,c,d,e,f,g;b=3;c=1;d=a.bg.data;e=d.length-2|0;f=ABS(d[a.y],8);switch(f){case -1:break;default:if(f>3)b=2;B9(a);a:{while(true){if(c>=b)break a;g=a.y;if(g>=e)break a;g=ABS(a.bg.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B9(a);c=c+1|0;}}return f;}N(Cm(C(21),a.bQ,a.y));}
function ALa(a){var b,c,d,e;b=1;c=a.g_;a:while(true){d=a.y;e=a.bg.data;if(d>=e.length)N(Cm(C(21),a.bQ,d));b:{c:{switch(e[d]){case 41:B9(a);return c|256;case 45:if(!b)N(Cm(C(21),a.bQ,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B9(a);}B9(a);return c;}
function B9(a){var b,c,d,e,f;b=a.y;a.j1=b;if(!(a.g_&4))a.y=b+1|0;else{c=a.bg.data.length-2|0;a.y=b+1|0;a:while(true){d=a.y;if(d<c&&RC(a.bg.data[d])){a.y=a.y+1|0;continue;}d=a.y;if(d>=c)break;e=a.bg.data;if(e[d]!=35)break;a.y=d+1|0;while(true){f=a.y;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.y=f+1|0;}}}return a.j1;}
function AKN(b){return A9d.H_(b);}
function LS(a){var b,c,d,e;b=a.bg.data[B9(a)];if(CT(b)){c=a.j1+1|0;d=a.bg.data;if(c<d.length){e=d[c];if(Dk(e)){B9(a);return EP(b,e);}}}return b;}
function PV(a){return a.ds;}
function Kf(){var a=this;BU.call(a);a.Do=null;a.C6=null;a.sT=0;}
function Cm(a,b,c){var d=new Kf();MM(d,a,b,c);return d;}
function MM(a,b,c,d){Y(a);a.sT=(-1);a.Do=b;a.C6=c;a.sT=d;}
function PH(){var a=this;B.call(a);a.wi=null;a.wj=0.0;}
function AUU(a){var b,c;b=a.wi;c=a.wj;b.i_.nA(c);}
function ACp(){B.call(this);this.z7=null;}
function A1k(a,b){var c,d;c=a.z7;c.mK=b;HB(c.d8,b.p6);HB(c.d7,c.mK.p7);b=c.tL;d=c.mK;b.gU=d;c.iD.ep=d;}
var RU=G(C0);
function AU0(a,b,c,d){var e;e=a.el;B1(d,e,b-DD(d,e)|0);return a.e.c(b,c,d);}
function A0s(a,b){return 0;}
var ADS=G(C0);
function AV_(a,b,c,d){return b;}
var QO=G(C0);
function AMA(a,b,c,d){if(DD(d,a.el)!=b)b=(-1);return b;}
function SD(){C0.call(this);this.xh=0;}
function AU3(a,b,c,d){var e;e=a.el;B1(d,e,b-DD(d,e)|0);a.xh=b;return b;}
function AZA(a,b){return 0;}
var F6=G(C0);
function ATl(a,b,c,d){if(d.l7!=1&&b!=d.z)return (-1);d.ku=1;MY(d,0,b);return b;}
function Cc(){BS.call(this);this.bI=0;}
function D0(a){B6(a);a.bI=1;}
function A2H(a,b,c,d){var e;if((b+a.b_()|0)>d.z){d.dL=1;return (-1);}e=a.bz(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function A05(a){return a.bI;}
function APa(a,b){return 1;}
var AG5=G(Cc);
function H2(a){var b=new AG5();AYG(b,a);return b;}
function AYG(a,b){NG(a,b);a.bI=1;a.jP=1;a.bI=0;}
function A0K(a,b,c){return 0;}
function AWV(a,b,c,d){var e,f,g;e=d.z;f=d.c$;while(true){g=BL(b,e);if(g>0)return (-1);if(g<0&&Dk(P(c,b))&&b>f&&CT(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AV7(a,b,c,d,e){var f,g;f=e.z;g=e.c$;while(true){if(c<b)return (-1);if(c<f&&Dk(P(d,c))&&c>g&&CT(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU2(a,b){return 0;}
function B8(){var a=this;BS.call(a);a.bK=null;a.eX=null;a.bc=0;}
function A3A(a,b){var c=new B8();F7(c,a,b);return c;}
function F7(a,b,c){B6(a);a.bK=b;a.eX=c;a.bc=c.el;}
function AOr(a,b,c,d){var e,f,g,h;if(a.bK===null)return (-1);e=Gw(d,a.bc);DZ(d,a.bc,b);f=a.bK.q;g=0;while(true){if(g>=f){DZ(d,a.bc,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ARm(a,b){a.eX.e=b;}
function AYl(a,b){var c;a:{c=a.bK;if(c!==null){c=B7(c);while(true){if(!B_(c))break a;if(!(Ca(c)).b1(b))continue;else return 1;}}}return 0;}
function ARP(a,b){return I8(b,a.bc)>=0&&Gw(b,a.bc)==I8(b,a.bc)?0:1;}
function AMW(a){var b,c,d,e;a.cx=1;b=a.eX;if(b!==null&&!b.cx)Ku(b);a:{b=a.bK;if(b!==null){c=b.q;d=0;while(true){if(d>=c)break a;b=BG(a.bK,d);e=b.gy();if(e===null)e=b;else{b.cx=1;EN(a.bK,d);AJs(a.bK,d,e);}if(!e.cx)e.eT();d=d+1|0;}}}if(a.e!==null)Ku(a);}
var Kq=G(B8);
function ARa(a,b,c,d){var e,f,g,h;e=DD(d,a.bc);B1(d,a.bc,b);f=a.bK.q;g=0;while(true){if(g>=f){B1(d,a.bc,e);return (-1);}h=(BG(a.bK,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AZ8(a,b){return !DD(b,a.bc)?0:1;}
var D_=G(Kq);
function AWs(a,b,c,d){var e,f,g;e=DD(d,a.bc);B1(d,a.bc,b);f=a.bK.q;g=0;while(g<f){if((BG(a.bK,g)).c(b,c,d)>=0)return a.e.c(a.eX.xh,c,d);g=g+1|0;}B1(d,a.bc,e);return (-1);}
function AZ0(a,b){a.e=b;}
var Wh=G(D_);
function ARk(a,b,c,d){var e,f;e=a.bK.q;f=0;while(f<e){if((BG(a.bK,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function ATf(a,b){return 0;}
var ACJ=G(D_);
function AMr(a,b,c,d){var e,f;e=a.bK.q;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A07(a,b){return 0;}
var Zu=G(D_);
function AMU(a,b,c,d){var e,f,g,h;e=a.bK.q;f=d.kx?0:d.c$;a:{g=a.e.c(b,c,d);if(g>=0){B1(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((BG(a.bK,h)).cA(f,b,c,d)>=0){B1(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function A2V(a,b){return 0;}
var SX=G(D_);
function AUG(a,b,c,d){var e,f;e=a.bK.q;B1(d,a.bc,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((BG(a.bK,f)).cA(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A0h(a,b){return 0;}
function HS(){B8.call(this);this.di=null;}
function A4Z(a,b){var c=new HS();AE0(c,a,b);return c;}
function AE0(a,b,c){B6(a);a.di=b;a.eX=c;a.bc=c.el;}
function ALK(a,b,c,d){var e,f;e=Gw(d,a.bc);DZ(d,a.bc,b);f=a.di.c(b,c,d);if(f>=0)return f;DZ(d,a.bc,e);return (-1);}
function AP5(a,b,c,d){var e;e=a.di.cq(b,c,d);if(e>=0)DZ(d,a.bc,e);return e;}
function A0u(a,b,c,d,e){var f;f=a.di.cA(b,c,d,e);if(f>=0)DZ(e,a.bc,f);return f;}
function AYi(a,b){return a.di.b1(b);}
function AZw(a){var b;b=new O9;AE0(b,a.di,a.eX);a.e=b;return b;}
function ATH(a){var b;a.cx=1;b=a.eX;if(b!==null&&!b.cx)Ku(b);b=a.di;if(b!==null&&!b.cx){b=b.gy();if(b!==null){a.di.cx=1;a.di=b;}a.di.eT();}}
function KA(){Dg.call(this);this.hF=null;}
var G9=G();
function Z(){var a=this;G9.call(a);a.bi=0;a.cw=0;a.O=null;a.md=null;a.mG=null;a.R=0;}
var A9e=null;function Qd(){Qd=Bn(Z);ANe();}
function By(a){var b;Qd();b=new ADi;b.D=BP(64);a.O=b;}
function AVz(a){return null;}
function AVd(a){return a.O;}
function AJP(a){var b,c,d,e,f;if(!a.cw)b=Ij(a.O,0)>=2048?0:1;else{a:{c=a.O;b=0;d=c.bt;if(b<d){e=c.D.data;f=(e[0]^(-1))>>>0|0;if(f)b=I4(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I4(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AXo(a){return a.R;}
function A01(a){return a;}
function AEs(a){var b,c;if(a.mG===null){b=a.fQ();c=new UP;c.Fh=a;c.xr=b;By(c);a.mG=c;EO(c,a.cw);}return a.mG;}
function Jw(a){var b,c;if(a.md===null){b=a.fQ();c=new UN;c.Dr=a;c.AT=b;c.vH=a;By(c);a.md=c;EO(c,a.bi);a.md.R=a.R;}return a.md;}
function A19(a){return 0;}
function EO(a,b){var c;c=a.bi;if(c^b){a.bi=c?0:1;a.cw=a.cw?0:1;}if(!a.R)a.R=1;return a;}
function AN5(a){return a.bi;}
function Np(b,c){Qd();return b.n(c);}
function JX(b,c){var d,e;Qd();if(b.dT()!==null&&c.dT()!==null){b=b.dT();c=c.dT();d=Be(b.D.data.length,c.D.data.length);e=0;a:{while(e<d){if(b.D.data[e]&c.D.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function R7(b,c){var d,e,f;Qd();d=0;while(true){ASd();e=A9f.data;if(d>=e.length){f=new MG;Bm(f,C(21));f.D3=C(21);f.Fl=b;N(f);}e=e[d].data;if(Bj(b,e[0]))break;d=d+1|0;}return AKr(e[1],c);}
function ANe(){var b;b=new Hj;ASd();A9e=b;}
function AET(){var a=this;Z.call(a);a.py=0;a.qX=0;a.hY=0;a.nj=0;a.ex=0;a.gv=0;a.J=null;a.bD=null;}
function DE(){var a=new AET();AUb(a);return a;}
function A1z(a,b){var c=new AET();AM7(c,a,b);return c;}
function AUb(a){By(a);a.J=A2X();}
function AM7(a,b,c){By(a);a.J=A2X();a.py=b;a.qX=c;}
function CJ(a,b){a:{if(a.py){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ex){OA(a.J,Jx(b&65535));break a;}LK(a.J,Jx(b&65535));break a;}if(a.qX&&b>128){a.hY=1;b=G4(G2(b));}}}if(!(!Ss(b)&&!Qj(b))){if(a.nj)OA(a.O,b-55296|0);else LK(a.O,b-55296|0);}if(a.ex)OA(a.J,b);else LK(a.J,b);if(!a.R&&Mg(b))a.R=1;return a;}
function ALc(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(a.nj){if(!b.cw)Gf(a.O,b.fQ());else Dp(a.O,b.fQ());}else if(!b.cw)GA(a.O,b.fQ());else{Gt(a.O,b.fQ());Dp(a.O,b.fQ());a.cw=a.cw?0:1;a.nj=1;}if(!a.gv&&b.dT()!==null){if(a.ex){if(!b.bi)Gf(a.J,b.dT());else Dp(a.J,b.dT());}else if(!b.bi)GA(a.J,b.dT());else{Gt(a.J,b.dT());Dp(a.J,b.dT());a.bi=a.bi?0:1;a.ex=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new XK;e.Er=a;e.BB=c;e.vt=d;e.vk=b;By(e);a.bD=e;}else{e=new XM;e.Fx=a;e.tf=c;e.zb=d;e.yL=b;By(e);a.bD=e;}}else{if(c&&!a.ex
&&Os(a.J)){d=new XH;d.ET=a;d.zf=b;By(d);a.bD=d;}else if(!c){d=new XF;d.o9=a;d.oy=c;d.x0=b;By(d);a.bD=d;}else{d=new XG;d.nK=a;d.my=c;d.vn=b;By(d);a.bD=d;}a.gv=1;}}return a;}
function Cb(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;Y(d);N(d);}a:{b:{if(!a.py){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CJ(a,b);b=b+1|0;}}if(!a.ex)IR(a.J,b,c+1|0);else{d=a.J;c=c+1|0;if(b>c){d=new BH;Y(d);N(d);}e=d.bt;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.D.data;h[g]=h[g]&(JT(d,b)|IK(d,f));}else{h=d.D.data;h[g]=h[g]&JT(d,b);e=g+1|0;while(e<c){d.D.data[e]=0;e=e+1|0;}if(f&31){h=d.D.data;h[c]=h[c]&IK(d,f);}}Hl(d);}}}}return a;}
function AH1(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.hY)a.hY=1;c=a.cw;if(!(c^b.cw)){if(!c)GA(a.O,b.O);else Dp(a.O,b.O);}else if(c)Gf(a.O,b.O);else{Gt(a.O,b.O);Dp(a.O,b.O);a.cw=1;}if(!a.gv&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)GA(a.J,C5(b));else Dp(a.J,C5(b));}else if(c)Gf(a.J,C5(b));else{Gt(a.J,C5(b));Dp(a.J,C5(b));a.bi=1;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P7;e.Cl=a;e.uG=c;e.A3=d;e.vQ=b;By(e);a.bD=e;}else{e=new Qp;e.CB=a;e.Bo=c;e.qD=d;e.qZ=b;By(e);a.bD=e;}}else{if(!a.ex&&Os(a.J)){if(!c){d=new XI;d.Fy
=a;d.sr=b;By(d);a.bD=d;}else{d=new XJ;d.Eu=a;d.Bf=b;By(d);a.bD=d;}}else if(!c){d=new XN;d.uL=a;d.to=b;d.zd=c;By(d);a.bD=d;}else{d=new XO;d.tK=a;d.tT=b;d.z4=c;By(d);a.bD=d;}a.gv=1;}}}
function U1(a,b){var c,d,e;if(!a.R&&b.R)a.R=1;if(b.hY)a.hY=1;c=a.cw;if(!(c^b.cw)){if(!c)Dp(a.O,b.O);else GA(a.O,b.O);}else if(!c)Gf(a.O,b.O);else{Gt(a.O,b.O);Dp(a.O,b.O);a.cw=0;}if(!a.gv&&C5(b)!==null){c=a.bi;if(!(c^b.bi)){if(!c)Dp(a.J,C5(b));else GA(a.J,C5(b));}else if(!c)Gf(a.J,C5(b));else{Gt(a.J,C5(b));Dp(a.J,C5(b));a.bi=0;}}else{c=a.bi;d=a.bD;if(d!==null){if(!c){e=new P9;e.Eq=a;e.AA=c;e.xp=d;e.td=b;By(e);a.bD=e;}else{e=new P$;e.Ex=a;e.Af=c;e.wT=d;e.Av=b;By(e);a.bD=e;}}else{if(!a.ex&&Os(a.J)){if(!c){d=new P5;d.CE
=a;d.yn=b;By(d);a.bD=d;}else{d=new P6;d.Fv=a;d.se=b;By(d);a.bD=d;}}else if(!c){d=new P_;d.B_=a;d.Bz=b;d.tO=c;By(d);a.bD=d;}else{d=new P4;d.tN=a;d.Ak=b;d.zq=c;By(d);a.bD=d;}a.gv=1;}}}
function Db(a,b){var c;c=a.bD;if(c!==null)return a.bi^c.n(b);return a.bi^DV(a.J,b);}
function C5(a){if(!a.gv)return a.J;return null;}
function AWR(a){return a.O;}
function AS3(a){var b,c;if(a.bD!==null)return a;b=C5(a);c=new P8;c.Ed=a;c.lr=b;By(c);return EO(c,a.bi);}
function AYV(a){var b,c,d;b=new K;M(b);c=Ij(a.J,0);while(c>=0){JZ(b,HQ(c));BN(b,124);c=Ij(a.J,c+1|0);}d=b.L;if(d>0)UC(b,d-1|0);return L(b);}
function AN8(a){return a.hY;}
function MG(){var a=this;Bu.call(a);a.D3=null;a.Fl=null;}
function Em(){BS.call(this);this.N=null;}
function Ds(a,b,c,d){NG(a,c);a.N=b;a.jP=d;}
function A2M(a){return a.N;}
function ASn(a,b){return !a.N.b1(b)&&!a.e.b1(b)?0:1;}
function A1A(a,b){return 1;}
function AQl(a){var b;a.cx=1;b=a.e;if(b!==null&&!b.cx){b=b.gy();if(b!==null){a.e.cx=1;a.e=b;}a.e.eT();}b=a.N;if(b!==null){if(!b.cx){b=b.gy();if(b!==null){a.N.cx=1;a.N=b;}a.N.eT();}else if(b instanceof HS&&b.eX.oR)a.N=b.e;}}
function Dc(){Em.call(this);this.be=null;}
function A3Q(a,b,c){var d=new Dc();Fe(d,a,b,c);return d;}
function Fe(a,b,c,d){Ds(a,b,c,d);a.be=b;}
function AUH(a,b,c,d){var e,f;e=0;a:{while((b+a.be.b_()|0)<=d.z){f=a.be.bz(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.be.b_()|0;e=e+(-1)|0;}return f;}
function FQ(){Dc.call(this);this.kS=null;}
function A4w(a,b,c,d){var e=new FQ();R_(e,a,b,c,d);return e;}
function R_(a,b,c,d,e){Fe(a,c,d,e);a.kS=b;}
function AVm(a,b,c,d){var e,f,g,h,i;e=a.kS;f=e.fI;g=e.fH;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.be.b_()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.be.b_()|0;h=h+(-1)|0;}return i;}if((b+a.be.b_()|0)>d.z){d.dL=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C1=G(Em);
function AUR(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var E6=G(Dc);
function AYy(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AUk(a,b){a.e=b;a.N.T(b);}
var UQ=G(Dc);
function A2E(a,b,c,d){while((b+a.be.b_()|0)<=d.z&&a.be.bz(b,c)>0){b=b+a.be.b_()|0;}return a.e.c(b,c,d);}
function AQK(a,b,c,d){var e,f,g;e=a.e.cq(b,c,d);if(e<0)return (-1);f=e-a.be.b_()|0;while(f>=b&&a.be.bz(f,c)>0){g=f-a.be.b_()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.nM=null;a.m6=null;}
function AKr(a,b){if(!b&&a.nM===null)a.nM=a.F();else if(b&&a.m6===null)a.m6=EO(a.F(),1);if(b)return a.m6;return a.nM;}
var Dt=G(BU);
function Wr(){var a=this;G9.call(a);a.fI=0;a.fH=0;}
function AY1(a){var b,c,d,e,f;b=a.fI;c=a.fH;d=c!=2147483647?J0(c):C(21);e=new K;M(e);BN(e,123);f=U(e,b);BN(f,44);BN(H(f,d),125);return L(e);}
var Xv=G(BS);
function APt(a,b,c,d){return b;}
function AZv(a,b){return 0;}
function ADi(){var a=this;B.call(a);a.D=null;a.bt=0;}
function A2X(){var a=new ADi();AVX(a);return a;}
function AVX(a){a.D=BP(0);}
function LK(a,b){var c,d;c=b/32|0;if(b>=a.bt){J1(a,c+1|0);a.bt=b+1|0;}d=a.D.data;d[c]=d[c]|1<<(b%32|0);}
function IR(a,b,c){var d,e,f,g,h;d=BL(b,c);if(d>0){e=new BH;Y(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bt){J1(a,f+1|0);a.bt=c;}if(d==f){g=a.D.data;g[d]=g[d]|IK(a,b)&JT(a,c);}else{g=a.D.data;g[d]=g[d]|IK(a,b);h=d+1|0;while(h<f){a.D.data[h]=(-1);h=h+1|0;}if(c&31){g=a.D.data;g[f]=g[f]|JT(a,c);}}}
function IK(a,b){return (-1)<<(b%32|0);}
function JT(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function OA(a,b){var c,d,e,f;c=b/32|0;d=a.D.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bt-1|0))Hl(a);}}
function DV(a,b){var c,d;c=b/32|0;d=a.D.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function Ij(a,b){var c,d,e,f;c=a.bt;if(b>=c)return (-1);d=b/32|0;e=a.D.data;f=e[d]>>>(b%32|0)|0;if(f)return I4(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I4(e[f])|0;f=f+1|0;}return (-1);}
function J1(a,b){var c;c=a.D.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.D=Jh(a.D,c);}
function Hl(a){var b,c,d;b=(a.bt+31|0)/32|0;a.bt=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=W$(a.D.data[c]);if(d<32)break;c=c+(-1)|0;a.bt=a.bt-32|0;}a.bt=a.bt-d|0;}}
function Dp(a,b){var c,d,e,f;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&b.D.data[d];d=d+1|0;}while(true){f=a.D.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bt=Be(a.bt,b.bt);Hl(a);}
function Gf(a,b){var c,d,e;c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]&(b.D.data[d]^(-1));d=d+1|0;}Hl(a);}
function GA(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J1(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]|b.D.data[d];d=d+1|0;}}
function Gt(a,b){var c,d,e;c=Bd(a.bt,b.bt);a.bt=c;J1(a,(c+31|0)/32|0);c=Be(a.D.data.length,b.D.data.length);d=0;while(d<c){e=a.D.data;e[d]=e[d]^b.D.data[d];d=d+1|0;}Hl(a);}
function Os(a){return a.bt?0:1;}
function OW(){var a=this;B8.call(a);a.sh=null;a.Ec=0;}
function Ra(){var a=this;B8.call(a);a.n3=null;a.pJ=null;}
function AGm(a,b){var c=new Ra();AHE(c,a,b);return c;}
function AHE(a,b,c){B6(a);a.n3=b;a.pJ=c;}
function AMd(a,b,c,d){var e,f,g,h,i;e=a.n3.c(b,c,d);if(e<0)a:{f=a.pJ;g=d.c$;e=d.z;h=b+1|0;e=BL(h,e);if(e>0){d.dL=1;e=(-1);}else{i=P(c,b);if(!f.sh.n(i))e=(-1);else{if(CT(i)){if(e<0&&Dk(P(c,h))){e=(-1);break a;}}else if(Dk(i)&&b>g&&CT(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function AZo(a,b){a.e=b;a.pJ.e=b;a.n3.T(b);}
function AMF(a,b){return 1;}
function AMt(a,b){return 1;}
function D4(){var a=this;B8.call(a);a.d6=null;a.CZ=0;}
function AX4(a){var b=new D4();ABI(b,a);return b;}
function ABI(a,b){B6(a);a.d6=b.lZ();a.CZ=b.bi;}
function AWM(a,b,c,d){var e,f,g,h;e=d.z;if(b<e){f=b+1|0;g=P(c,b);if(a.n(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(Jp(g,f)&&a.n(EP(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOi(a,b){return a.d6.n(b);}
function AL_(a,b){if(b instanceof Ef)return Np(a.d6,b.gZ);if(b instanceof EM)return Np(a.d6,b.dI);if(b instanceof D4)return JX(a.d6,b.d6);if(!(b instanceof EF))return 1;return JX(a.d6,b.gq);}
function APm(a){return a.d6;}
function A0V(a,b){a.e=b;}
function ANZ(a,b){return 1;}
var MD=G(D4);
function APb(a,b){return a.d6.n(G4(G2(b)));}
function AEN(){var a=this;Cc.call(a);a.yU=null;a.CP=0;}
function AOD(a){var b=new AEN();AQU(b,a);return b;}
function AQU(a,b){D0(a);a.yU=b.lZ();a.CP=b.bi;}
function AX8(a,b,c){return !a.yU.n(FJ(Fm(P(c,b))))?(-1):1;}
function EF(){var a=this;Cc.call(a);a.gq=null;a.C_=0;}
function ASZ(a){var b=new EF();ARC(b,a);return b;}
function ARC(a,b){D0(a);a.gq=b.lZ();a.C_=b.bi;}
function V7(a,b,c){return !a.gq.n(P(c,b))?(-1):1;}
function ARo(a,b){if(b instanceof EM)return Np(a.gq,b.dI);if(b instanceof EF)return JX(a.gq,b.gq);if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return 0;}return JX(a.gq,b.d6);}
function XR(){var a=this;B8.call(a);a.i8=null;a.pX=null;a.kP=0;}
function A1m(a,b){var c=new XR();AUS(c,a,b);return c;}
function AUS(a,b,c){B6(a);a.i8=b;a.kP=c;}
function AQa(a,b){a.e=b;}
function Rk(a){if(a.pX===null)a.pX=Hr(a.i8);return a.pX;}
function ALu(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.z;f=BP(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DX([k,l]):DX([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.kP;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.i8.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.kP==3){k=f[0];m=a.i8.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.kP==2){b=f[0];m=a.i8.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AVI(a,b){return b instanceof XR&&!Bj(Rk(b),Rk(a))?0:1;}
function AS8(a,b){return 1;}
function EM(){Cc.call(this);this.dI=0;}
function AE2(a){var b=new EM();ARG(b,a);return b;}
function ARG(a,b){D0(a);a.dI=b;}
function AXW(a){return 1;}
function AOB(a,b,c){return a.dI!=P(c,b)?(-1):1;}
function ANL(a,b,c,d){var e,f,g;if(!(c instanceof BK))return IG(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=JW(c,a.dI,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function APo(a,b,c,d,e){var f;if(!(d instanceof BK))return IN(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hw(d,a.dI,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AS0(a,b){if(b instanceof EM)return b.dI!=a.dI?0:1;if(!(b instanceof EF)){if(b instanceof D4)return b.n(a.dI);if(!(b instanceof Ef))return 1;return 0;}return V7(b,0,U_(a.dI))<=0?0:1;}
function AHr(){Cc.call(this);this.wJ=0;}
function AZ3(a){var b=new AHr();AYR(b,a);return b;}
function AYR(a,b){D0(a);a.wJ=FJ(Fm(b));}
function AUu(a,b,c){return a.wJ!=FJ(Fm(P(c,b)))?(-1):1;}
function AEa(){var a=this;Cc.call(a);a.vW=0;a.xn=0;}
function AV2(a){var b=new AEa();ASa(b,a);return b;}
function ASa(a,b){D0(a);a.vW=b;a.xn=Jx(b);}
function ALC(a,b,c){return a.vW!=P(c,b)&&a.xn!=P(c,b)?(-1):1;}
function FU(){var a=this;B8.call(a);a.jJ=0;a.m0=null;a.mv=null;a.mp=0;}
function A5t(a,b){var c=new FU();PK(c,a,b);return c;}
function PK(a,b,c){B6(a);a.jJ=1;a.mv=b;a.mp=c;}
function A2f(a,b){a.e=b;}
function AQ_(a,b,c,d){var e,f,g,h,i,j,k,l;e=BP(4);f=d.z;if(b>=f)return (-1);g=Lg(a,b,c,f);h=b+a.jJ|0;i=AKN(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;C6(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lg(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AKN(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.jJ|0;if(h>=f){b=k;break a;}g=Lg(a,h,c,f);b=k;}}}if(b!=a.mp)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.mv.data[g])break;g=g+1|0;}return (-1);}
function UZ(a){var b,c;if(a.m0===null){b=new K;M(b);c=0;while(c<a.mp){JZ(b,HQ(a.mv.data[c]));c=c+1|0;}a.m0=L(b);}return a.m0;}
function Lg(a,b,c,d){var e,f,g;a.jJ=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(Jp(e,f)){g=B5(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CT(g[0])&&Dk(g[1])?EP(g[0],g[1]):g[0];a.jJ=2;}}return e;}
function APu(a,b){return b instanceof FU&&!Bj(UZ(b),UZ(a))?0:1;}
function AZ2(a,b){return 1;}
var Vk=G(FU);
var ABe=G(FU);
var V4=G(C1);
function AWd(a,b,c,d){var e;while(true){e=a.N.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var Yu=G(C1);
function AYN(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.N.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var GE=G(C1);
function A0T(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.N.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function A1N(a,b){a.e=b;a.N.T(b);}
var Qz=G(GE);
function APk(a,b,c,d){var e;e=a.N.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function AY3(a,b){a.e=b;}
function Gn(){var a=this;C1.call(a);a.g7=null;a.dM=0;}
function A9g(a,b,c,d,e){var f=new Gn();MC(f,a,b,c,d,e);return f;}
function MC(a,b,c,d,e,f){Ds(a,c,d,e);a.g7=b;a.dM=f;}
function A2S(a,b,c,d){var e,f;e=Wp(d,a.dM);if(!a.N.I(d))return a.e.c(b,c,d);if(e>=a.g7.fH)return a.e.c(b,c,d);f=a.dM;e=e+1|0;EU(d,f,e);f=a.N.c(b,c,d);if(f>=0){EU(d,a.dM,0);return f;}f=a.dM;e=e+(-1)|0;EU(d,f,e);if(e>=a.g7.fI)return a.e.c(b,c,d);EU(d,a.dM,0);return (-1);}
var Pb=G(Gn);
function AOQ(a,b,c,d){var e,f,g;e=0;f=a.g7.fH;a:{while(true){g=a.N.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.g7.fI)return (-1);return a.e.c(b,c,d);}
var RP=G(C1);
function ATP(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var Y_=G(GE);
function AMG(a,b,c,d){var e;if(!a.N.I(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.N.c(b,c,d);return e;}
var TA=G(Gn);
function AU8(a,b,c,d){var e,f,g;e=Wp(d,a.dM);if(!a.N.I(d))return a.e.c(b,c,d);f=a.g7;if(e>=f.fH){EU(d,a.dM,0);return a.e.c(b,c,d);}if(e<f.fI){EU(d,a.dM,e+1|0);g=a.N.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){EU(d,a.dM,0);return g;}EU(d,a.dM,e+1|0);g=a.N.c(b,c,d);}return g;}
var RQ=G(Em);
function A2I(a,b,c,d){var e;e=d.z;if(e>b)return a.e.cA(b,e,c,d);return a.e.c(b,c,d);}
function ASK(a,b,c,d){var e;e=d.z;if(a.e.cA(b,e,c,d)>=0)return b;return (-1);}
function XB(){Em.call(this);this.m4=null;}
function ARp(a,b,c,d){var e,f;e=d.z;f=ABW(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cA(b,e,c,d);return a.e.c(b,c,d);}
function ALw(a,b,c,d){var e,f,g,h;e=d.z;f=a.e.cq(b,c,d);if(f<0)return (-1);g=ABW(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cA(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.m4.iP(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ABW(a,b,c,d){while(true){if(b>=c)return (-1);if(a.m4.iP(P(d,b)))break;b=b+1|0;}return b;}
var Fz=G();
var A9h=null;var A9i=null;function Yd(b){var c;if(!(b&1)){c=A9i;if(c!==null)return c;c=new ACg;A9i=c;return c;}c=A9h;if(c!==null)return c;c=new ACf;A9h=c;return c;}
var AD9=G(Dc);
function AL3(a,b,c,d){var e;a:{while(true){if((b+a.be.b_()|0)>d.z)break a;e=a.be.bz(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var UL=G(E6);
function AQA(a,b,c,d){var e;if((b+a.be.b_()|0)<=d.z){e=a.be.bz(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var X2=G(FQ);
function A0x(a,b,c,d){var e,f,g,h,i;e=a.kS;f=e.fI;g=e.fH;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.be.b_()|0)>d.z)break a;i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.be.b_()|0)>d.z){d.dL=1;return (-1);}i=a.be.bz(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var Y$=G(Dc);
function ARl(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.be.b_()|0)<=d.z){e=a.be.bz(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ABp=G(E6);
function AL9(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.N.c(b,c,d);}
var RF=G(FQ);
function A0M(a,b,c,d){var e,f,g,h,i,j;e=a.kS;f=e.fI;g=e.fH;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.be.b_()|0)<=d.z){i=a.be.bz(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.be.b_()|0)>d.z){d.dL=1;return (-1);}j=a.be.bz(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Le=G(BS);
function AYk(a,b,c,d){if(b&&!(d.gw&&b==d.c$))return (-1);return a.e.c(b,c,d);}
function AXN(a,b){return 0;}
function AE8(){BS.call(this);this.vw=0;}
function A1c(a){var b=new AE8();APe(b,a);return b;}
function APe(a,b){B6(a);a.vw=b;}
function AVx(a,b,c,d){var e,f,g;e=b<d.z?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.kx?0:d.c$;return (e!=32&&!Zc(a,e,b,g,c)?0:1)^(f!=32&&!Zc(a,f,b-1|0,g,c)?0:1)^a.vw?(-1):a.e.c(b,c,d);}
function AVH(a,b){return 0;}
function Zc(a,b,c,d,e){var f;if(!KJ(b)&&b!=95){a:{if(CF(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(KJ(f))return 0;if(CF(f)!=6)return 1;}}return 1;}return 0;}
var Xy=G(BS);
function APd(a,b,c,d){if(b!=d.iU)return (-1);return a.e.c(b,c,d);}
function AUc(a,b){return 0;}
function Vd(){BS.call(this);this.ha=0;}
function A3Z(a){var b=new Vd();AKG(b,a);return b;}
function AKG(a,b){B6(a);a.ha=b;}
function AZP(a,b,c,d){var e,f,g;e=!d.gw?J(c):d.z;if(b>=e){B1(d,a.ha,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){B1(d,a.ha,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B1(d,a.ha,0);return a.e.c(b,c,d);}
function AV8(a,b){var c;c=!DD(b,a.ha)?0:1;B1(b,a.ha,(-1));return c;}
var AC4=G(BS);
function AZm(a,b,c,d){if(b<(d.kx?J(c):d.z))return (-1);d.dL=1;d.Fb=1;return a.e.c(b,c,d);}
function AUt(a,b){return 0;}
function WL(){BS.call(this);this.zu=null;}
function AV3(a,b,c,d){a:{if(b!=d.z){if(!b)break a;if(d.gw&&b==d.c$)break a;if(a.zu.Ai(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOo(a,b){return 0;}
var AHc=G(B8);
function A36(){var a=new AHc();AZb(a);return a;}
function AZb(a){B6(a);}
function ATS(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dL=1;return (-1);}g=P(c,b);if(CT(g)){h=b+2|0;if(h<=e&&Jp(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function AVK(a,b){a.e=b;}
function AY9(a){return (-2147483602);}
function AVJ(a,b){return 1;}
function AES(){B8.call(this);this.nn=null;}
function A3W(a){var b=new AES();AM1(b,a);return b;}
function AM1(a,b){B6(a);a.nn=b;}
function AZf(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;if(f>e){d.dL=1;return (-1);}g=P(c,b);if(CT(g)){b=b+2|0;if(b<=e){h=P(c,f);if(Jp(g,h))return a.nn.iP(EP(g,h))?(-1):a.e.c(b,c,d);}}return a.nn.iP(g)?(-1):a.e.c(f,c,d);}
function A0o(a,b){a.e=b;}
function ALi(a){return (-2147483602);}
function AT4(a,b){return 1;}
function AKL(){BS.call(this);this.jD=0;}
function A3E(a){var b=new AKL();AW$(b,a);return b;}
function AW$(a,b){B6(a);a.jD=b;}
function APy(a,b,c,d){var e;e=!d.gw?J(c):d.z;if(b>=e){B1(d,a.jD,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){B1(d,a.jD,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AW9(a,b){var c;c=!DD(b,a.jD)?0:1;B1(b,a.jD,(-1));return c;}
function AJS(){BS.call(this);this.iI=0;}
function A3s(a){var b=new AJS();AXq(b,a);return b;}
function AXq(a,b){B6(a);a.iI=b;}
function AQ6(a,b,c,d){if((!d.gw?J(c)-b|0:d.z-b|0)<=0){B1(d,a.iI,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);B1(d,a.iI,1);return a.e.c(b+1|0,c,d);}
function AW3(a,b){var c;c=!DD(b,a.iI)?0:1;B1(b,a.iI,(-1));return c;}
function AH0(){BS.call(this);this.gK=0;}
function A2_(a){var b=new AH0();A2U(b,a);return b;}
function A2U(a,b){B6(a);a.gK=b;}
function AXJ(a,b,c,d){var e,f,g;e=!d.gw?J(c)-b|0:d.z-b|0;if(!e){B1(d,a.gK,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B1(d,a.gK,0);return a.e.c(b,c,d);case 13:if(g!=10){B1(d,a.gK,0);return a.e.c(b,c,d);}B1(d,a.gK,0);return a.e.c(b,c,d);default:}return (-1);}
function AM5(a,b){var c;c=!DD(b,a.gK)?0:1;B1(b,a.gK,(-1));return c;}
function Ic(){var a=this;B8.call(a);a.qS=0;a.hw=0;}
function A5r(a,b){var c=new Ic();Qi(c,a,b);return c;}
function Qi(a,b,c){B6(a);a.qS=b;a.hw=c;}
function AL5(a,b,c,d){var e,f,g,h;e=GO(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hw,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Jx(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AZX(a,b){a.e=b;}
function GO(a,b){var c,d;c=a.qS;d=Gw(b,c);c=I8(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nq)?Cv(b.nq,d,c):null;}
function AR5(a,b){var c;c=!DD(b,a.hw)?0:1;B1(b,a.hw,(-1));return c;}
var AKR=G(Ic);
function A4i(a,b){var c=new AKR();A1D(c,a,b);return c;}
function A1D(a,b,c){Qi(a,b,c);}
function AM9(a,b,c,d){var e,f;e=GO(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=!ABH(c,e,b)?(-1):J(e);if(f<0)return (-1);B1(d,a.hw,f);return a.e.c(b+f|0,c,d);}return (-1);}
function ATd(a,b,c,d){var e,f;e=GO(a,d);f=d.c$;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=Yv(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ALS(a,b,c,d,e){var f,g;f=GO(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=QP(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AYI(a,b){return 1;}
var AJc=G(Ic);
function A3t(a,b){var c=new AJc();AOn(c,a,b);return c;}
function AOn(a,b,c){Qi(a,b,c);}
function AP0(a,b,c,d){var e,f;e=GO(a,d);if(e!==null&&(b+J(e)|0)<=d.z){f=0;while(true){if(f>=J(e)){B1(d,a.hw,J(e));return a.e.c(b+J(e)|0,c,d);}if(FJ(Fm(P(e,f)))!=FJ(Fm(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var PX=G(GS);
function AN_(a,b,c,d,e){Wu(a,b,c,d,e);return a;}
function AVA(a,b,c,d){ADq(a,b,c,d);return a;}
function AVW(a,b){MX(a,b);}
function A04(a,b,c){ADG(a,b,c);return a;}
function ZH(){var a=this;Cc.call(a);a.cF=null;a.o2=null;a.nx=null;}
function ANj(a,b,c){return !Lc(a,c,b)?(-1):a.bI;}
function AVv(a,b,c,d){var e,f,g;e=d.z;while(true){if(b>e)return (-1);f=P(a.cF,a.bI-1|0);a:{while(true){g=a.bI;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lc(a,c,b))break;b=b+AAn(a.o2,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bI|0,c,d)>=0)break;b=b+1|0;}return b;}
function AXc(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cF,0);g=(J(d)-c|0)-a.bI|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lc(a,d,c))break;c=c-AAn(a.nx,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bI|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AOG(a,b){var c;if(b instanceof EM)return b.dI!=P(a.cF,0)?0:1;if(b instanceof EF)return V7(b,0,Cv(a.cF,0,1))<=0?0:1;if(!(b instanceof D4)){if(!(b instanceof Ef))return 1;return J(a.cF)>1&&b.gZ==EP(P(a.cF,0),P(a.cF,1))?1:0;}a:{b:{b=b;if(!b.n(P(a.cF,0))){if(J(a.cF)<=1)break b;if(!b.n(EP(P(a.cF,0),P(a.cF,1))))break b;}c=1;break a;}c=0;}return c;}
function Lc(a,b,c){var d;d=0;while(d<a.bI){if(P(b,d+c|0)!=P(a.cF,d))return 0;d=d+1|0;}return 1;}
function AD_(){Cc.call(this);this.lU=null;}
function A5s(a){var b=new AD_();A1i(b,a);return b;}
function A1i(a,b){var c,d,e;D0(a);c=new K;M(c);d=0;while(true){e=BL(d,b.L);if(e>=0){a.lU=L(c);a.bI=c.L;return;}if(d<0)break;if(e>=0)break;BN(c,FJ(Fm(b.C.data[d])));d=d+1|0;}b=new BH;Y(b);N(b);}
function AP7(a,b,c){var d;d=0;while(true){if(d>=J(a.lU))return J(a.lU);if(P(a.lU,d)!=FJ(Fm(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Pe(){Cc.call(this);this.jA=null;}
function A0y(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.jA))return J(a.jA);e=P(a.jA,d);f=b+d|0;if(e!=P(c,f)&&Jx(P(a.jA,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var Hj=G();
var A9j=null;var A9k=null;var A9f=null;function ASd(){ASd=Bn(Hj);ANA();}
function ANA(){A9j=A32();A9k=A4K();A9f=I($rt_arraycls(B),[I(B,[C(476),A39()]),I(B,[C(477),A29()]),I(B,[C(478),A5e()]),I(B,[C(479),A5i()]),I(B,[C(480),A9k]),I(B,[C(481),A4R()]),I(B,[C(482),A3x()]),I(B,[C(483),A4k()]),I(B,[C(484),A4h()]),I(B,[C(485),A3f()]),I(B,[C(486),A3m()]),I(B,[C(487),A4n()]),I(B,[C(488),A3P()]),I(B,[C(489),A25()]),I(B,[C(490),A5g()]),I(B,[C(491),A3l()]),I(B,[C(492),A4P()]),I(B,[C(493),A4v()]),I(B,[C(494),A4Q()]),I(B,[C(495),A3h()]),I(B,[C(496),A5l()]),I(B,[C(497),A4q()]),I(B,[C(498),A3G()]),
I(B,[C(499),A5c()]),I(B,[C(500),A4_()]),I(B,[C(501),A33()]),I(B,[C(502),A3g()]),I(B,[C(503),A44()]),I(B,[C(504),A9j]),I(B,[C(505),A3J()]),I(B,[C(506),A4m()]),I(B,[C(507),A9j]),I(B,[C(508),A23()]),I(B,[C(509),A9k]),I(B,[C(510),A3p()]),I(B,[C(511),R(0,127)]),I(B,[C(512),R(128,255)]),I(B,[C(513),R(256,383)]),I(B,[C(514),R(384,591)]),I(B,[C(515),R(592,687)]),I(B,[C(516),R(688,767)]),I(B,[C(517),R(768,879)]),I(B,[C(518),R(880,1023)]),I(B,[C(519),R(1024,1279)]),I(B,[C(520),R(1280,1327)]),I(B,[C(521),R(1328,1423)]),
I(B,[C(522),R(1424,1535)]),I(B,[C(523),R(1536,1791)]),I(B,[C(524),R(1792,1871)]),I(B,[C(525),R(1872,1919)]),I(B,[C(526),R(1920,1983)]),I(B,[C(527),R(2304,2431)]),I(B,[C(528),R(2432,2559)]),I(B,[C(529),R(2560,2687)]),I(B,[C(530),R(2688,2815)]),I(B,[C(531),R(2816,2943)]),I(B,[C(532),R(2944,3071)]),I(B,[C(533),R(3072,3199)]),I(B,[C(534),R(3200,3327)]),I(B,[C(535),R(3328,3455)]),I(B,[C(536),R(3456,3583)]),I(B,[C(537),R(3584,3711)]),I(B,[C(538),R(3712,3839)]),I(B,[C(539),R(3840,4095)]),I(B,[C(540),R(4096,4255)]),
I(B,[C(541),R(4256,4351)]),I(B,[C(542),R(4352,4607)]),I(B,[C(543),R(4608,4991)]),I(B,[C(544),R(4992,5023)]),I(B,[C(545),R(5024,5119)]),I(B,[C(546),R(5120,5759)]),I(B,[C(547),R(5760,5791)]),I(B,[C(548),R(5792,5887)]),I(B,[C(549),R(5888,5919)]),I(B,[C(550),R(5920,5951)]),I(B,[C(551),R(5952,5983)]),I(B,[C(552),R(5984,6015)]),I(B,[C(553),R(6016,6143)]),I(B,[C(554),R(6144,6319)]),I(B,[C(555),R(6400,6479)]),I(B,[C(556),R(6480,6527)]),I(B,[C(557),R(6528,6623)]),I(B,[C(558),R(6624,6655)]),I(B,[C(559),R(6656,6687)]),
I(B,[C(560),R(7424,7551)]),I(B,[C(561),R(7552,7615)]),I(B,[C(562),R(7616,7679)]),I(B,[C(563),R(7680,7935)]),I(B,[C(564),R(7936,8191)]),I(B,[C(565),R(8192,8303)]),I(B,[C(566),R(8304,8351)]),I(B,[C(567),R(8352,8399)]),I(B,[C(568),R(8400,8447)]),I(B,[C(569),R(8448,8527)]),I(B,[C(570),R(8528,8591)]),I(B,[C(571),R(8592,8703)]),I(B,[C(572),R(8704,8959)]),I(B,[C(573),R(8960,9215)]),I(B,[C(574),R(9216,9279)]),I(B,[C(575),R(9280,9311)]),I(B,[C(576),R(9312,9471)]),I(B,[C(577),R(9472,9599)]),I(B,[C(578),R(9600,9631)]),
I(B,[C(579),R(9632,9727)]),I(B,[C(580),R(9728,9983)]),I(B,[C(581),R(9984,10175)]),I(B,[C(582),R(10176,10223)]),I(B,[C(583),R(10224,10239)]),I(B,[C(584),R(10240,10495)]),I(B,[C(585),R(10496,10623)]),I(B,[C(586),R(10624,10751)]),I(B,[C(587),R(10752,11007)]),I(B,[C(588),R(11008,11263)]),I(B,[C(589),R(11264,11359)]),I(B,[C(590),R(11392,11519)]),I(B,[C(591),R(11520,11567)]),I(B,[C(592),R(11568,11647)]),I(B,[C(593),R(11648,11743)]),I(B,[C(594),R(11776,11903)]),I(B,[C(595),R(11904,12031)]),I(B,[C(596),R(12032,12255)]),
I(B,[C(597),R(12272,12287)]),I(B,[C(598),R(12288,12351)]),I(B,[C(599),R(12352,12447)]),I(B,[C(600),R(12448,12543)]),I(B,[C(601),R(12544,12591)]),I(B,[C(602),R(12592,12687)]),I(B,[C(603),R(12688,12703)]),I(B,[C(604),R(12704,12735)]),I(B,[C(605),R(12736,12783)]),I(B,[C(606),R(12784,12799)]),I(B,[C(607),R(12800,13055)]),I(B,[C(608),R(13056,13311)]),I(B,[C(609),R(13312,19893)]),I(B,[C(610),R(19904,19967)]),I(B,[C(611),R(19968,40959)]),I(B,[C(612),R(40960,42127)]),I(B,[C(613),R(42128,42191)]),I(B,[C(614),R(42752,
42783)]),I(B,[C(615),R(43008,43055)]),I(B,[C(616),R(44032,55203)]),I(B,[C(617),R(55296,56191)]),I(B,[C(618),R(56192,56319)]),I(B,[C(619),R(56320,57343)]),I(B,[C(620),R(57344,63743)]),I(B,[C(621),R(63744,64255)]),I(B,[C(622),R(64256,64335)]),I(B,[C(623),R(64336,65023)]),I(B,[C(624),R(65024,65039)]),I(B,[C(625),R(65040,65055)]),I(B,[C(626),R(65056,65071)]),I(B,[C(627),R(65072,65103)]),I(B,[C(628),R(65104,65135)]),I(B,[C(629),R(65136,65279)]),I(B,[C(630),R(65280,65519)]),I(B,[C(631),R(0,1114111)]),I(B,[C(632),
A4o()]),I(B,[C(633),B4(0,1)]),I(B,[C(634),Kg(62,1)]),I(B,[C(635),B4(1,1)]),I(B,[C(636),B4(2,1)]),I(B,[C(637),B4(3,0)]),I(B,[C(638),B4(4,0)]),I(B,[C(639),B4(5,1)]),I(B,[C(640),Kg(448,1)]),I(B,[C(641),B4(6,1)]),I(B,[C(642),B4(7,0)]),I(B,[C(643),B4(8,1)]),I(B,[C(644),Kg(3584,1)]),I(B,[C(645),B4(9,1)]),I(B,[C(646),B4(10,1)]),I(B,[C(647),B4(11,1)]),I(B,[C(648),Kg(28672,0)]),I(B,[C(649),B4(12,0)]),I(B,[C(650),B4(13,0)]),I(B,[C(651),B4(14,0)]),I(B,[C(652),A4H(983040,1,1)]),I(B,[C(653),B4(15,0)]),I(B,[C(654),B4(16,
1)]),I(B,[C(655),B4(18,1)]),I(B,[C(656),A3D(19,0,1)]),I(B,[C(657),Kg(1643118592,1)]),I(B,[C(658),B4(20,0)]),I(B,[C(659),B4(21,0)]),I(B,[C(660),B4(22,0)]),I(B,[C(661),B4(23,0)]),I(B,[C(662),B4(24,1)]),I(B,[C(663),Kg(2113929216,1)]),I(B,[C(664),B4(25,1)]),I(B,[C(665),B4(26,0)]),I(B,[C(666),B4(27,0)]),I(B,[C(667),B4(28,1)]),I(B,[C(668),B4(29,0)]),I(B,[C(669),B4(30,0)])]);}
function Wa(){Cc.call(this);this.s3=0;}
function ASs(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.s3!=G4(G2(EP(e,d)))?(-1):2;}
function NO(){B8.call(this);this.hk=0;}
function AQ2(a){var b=new NO();AMK(b,a);return b;}
function AMK(a,b){B6(a);a.hk=b;}
function AZt(a,b){a.e=b;}
function AV9(a,b,c,d){var e,f;e=b+1|0;if(e>d.z){d.dL=1;return (-1);}f=P(c,b);if(b>d.c$&&CT(P(c,b-1|0)))return (-1);if(a.hk!=f)return (-1);return a.e.c(e,c,d);}
function AOE(a,b,c,d){var e,f,g,h;if(!(c instanceof BK))return IG(a,b,c,d);e=d.c$;f=d.z;while(true){if(b>=f)return (-1);g=JW(c,a.hk,b);if(g<0)return (-1);if(g>e&&CT(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AWw(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IN(a,b,c,d,e);f=e.c$;a:{while(true){if(c<b)return (-1);g=Hw(d,a.hk,c);if(g<0)break a;if(g<b)break a;if(g>f&&CT(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ALR(a,b){if(b instanceof EM)return 0;if(b instanceof EF)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof NW)return 0;if(!(b instanceof NO))return 1;return b.hk!=a.hk?0:1;}
function ASU(a,b){return 1;}
function NW(){B8.call(this);this.g5=0;}
function AXM(a){var b=new NW();AQ4(b,a);return b;}
function AQ4(a,b){B6(a);a.g5=b;}
function AVV(a,b){a.e=b;}
function ALy(a,b,c,d){var e,f,g,h;e=d.z;f=b+1|0;g=BL(f,e);if(g>0){d.dL=1;return (-1);}h=P(c,b);if(g<0&&Dk(P(c,f)))return (-1);if(a.g5!=h)return (-1);return a.e.c(f,c,d);}
function AZE(a,b,c,d){var e,f;if(!(c instanceof BK))return IG(a,b,c,d);e=d.z;while(true){if(b>=e)return (-1);f=JW(c,a.g5,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dk(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function ASo(a,b,c,d,e){var f,g;if(!(d instanceof BK))return IN(a,b,c,d,e);f=e.z;a:{while(true){if(c<b)return (-1);g=Hw(d,a.g5,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dk(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ANk(a,b){if(b instanceof EM)return 0;if(b instanceof EF)return 0;if(b instanceof D4)return 0;if(b instanceof Ef)return 0;if(b instanceof NO)return 0;if(!(b instanceof NW))return 1;return b.g5!=a.g5?0:1;}
function AZK(a,b){return 1;}
function Ef(){var a=this;Cc.call(a);a.mk=0;a.lo=0;a.gZ=0;}
function AZ$(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.mk==e&&a.lo==d?2:(-1);}
function AYW(a,b,c,d){var e,f;if(!(c instanceof BK))return IG(a,b,c,d);e=d.z;while(b<e){b=JW(c,a.mk,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.lo==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AML(a,b,c,d,e){var f;if(!(d instanceof BK))return IN(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=Hw(d,a.lo,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.mk==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AZ4(a,b){if(b instanceof Ef)return b.gZ!=a.gZ?0:1;if(b instanceof D4)return b.n(a.gZ);if(b instanceof EM)return 0;if(!(b instanceof EF))return 1;return 0;}
var ACf=G(Fz);
function AMQ(a,b){return b!=10?0:1;}
function AR2(a,b,c){return b!=10?0:1;}
var ACg=G(Fz);
function A0N(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function ATC(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGC(){var a=this;B.call(a);a.on=null;a.mx=null;a.ji=0;a.wl=0;}
function AY8(a){var b=new AGC();APc(b,a);return b;}
function APc(a,b){var c,d;while(true){c=a.ji;if(b<c)break;a.ji=c<<1|1;}d=c<<1|1;a.ji=d;d=d+1|0;a.on=BP(d);a.mx=BP(d);a.wl=b;}
function RG(a,b,c){var d,e,f,g;d=0;e=a.ji;f=b&e;while(true){g=a.on.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mx.data[f]=c;}
function AAn(a,b){var c,d,e,f;c=a.ji;d=b&c;e=0;while(true){f=a.on.data[d];if(!f)break;if(f==b)return a.mx.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.wl;}
var AEm=G();
var NM=G(Bf);
function A32(){var a=new NM();AOR(a);return a;}
function AOR(a){}
function AJi(a){return CJ(Cb(DE(),9,13),32);}
var M$=G(Bf);
function A4K(){var a=new M$();ASO(a);return a;}
function ASO(a){}
function AJO(a){return Cb(DE(),48,57);}
var AGw=G(Bf);
function A39(){var a=new AGw();AOs(a);return a;}
function AOs(a){}
function A0r(a){return Cb(DE(),97,122);}
var AGR=G(Bf);
function A29(){var a=new AGR();APg(a);return a;}
function APg(a){}
function ASX(a){return Cb(DE(),65,90);}
var AGT=G(Bf);
function A5e(){var a=new AGT();AMm(a);return a;}
function AMm(a){}
function ANQ(a){return Cb(DE(),0,127);}
var NI=G(Bf);
function A5i(){var a=new NI();AM_(a);return a;}
function AM_(a){}
function AEV(a){return Cb(Cb(DE(),97,122),65,90);}
var LI=G(NI);
function A4R(){var a=new LI();AO0(a);return a;}
function AO0(a){}
function AFp(a){return Cb(AEV(a),48,57);}
var AHR=G(Bf);
function A3x(){var a=new AHR();AYO(a);return a;}
function AYO(a){}
function AXr(a){return Cb(Cb(Cb(DE(),33,64),91,96),123,126);}
var OC=G(LI);
function A4k(){var a=new OC();ARO(a);return a;}
function ARO(a){}
function AHY(a){return Cb(Cb(Cb(AFp(a),33,64),91,96),123,126);}
var AJu=G(OC);
function A4h(){var a=new AJu();ASJ(a);return a;}
function ASJ(a){}
function AQn(a){return CJ(AHY(a),32);}
var AFT=G(Bf);
function A3f(){var a=new AFT();A0z(a);return a;}
function A0z(a){}
function AWl(a){return CJ(CJ(DE(),32),9);}
var AE4=G(Bf);
function A3m(){var a=new AE4();A11(a);return a;}
function A11(a){}
function AQj(a){return CJ(Cb(DE(),0,31),127);}
var AIK=G(Bf);
function A4n(){var a=new AIK();AMw(a);return a;}
function AMw(a){}
function ATF(a){return Cb(Cb(Cb(DE(),48,57),97,102),65,70);}
var AKA=G(Bf);
function A3P(){var a=new AKA();AVl(a);return a;}
function AVl(a){}
function AY6(a){var b;b=new AAL;b.EQ=a;By(b);b.R=1;return b;}
var AHU=G(Bf);
function A25(){var a=new AHU();ARY(a);return a;}
function ARY(a){}
function AUA(a){var b;b=new Wk;b.EU=a;By(b);b.R=1;return b;}
var AKi=G(Bf);
function A5g(){var a=new AKi();AMo(a);return a;}
function AMo(a){}
function AOW(a){var b;b=new R4;b.EF=a;By(b);return b;}
var AGn=G(Bf);
function A3l(){var a=new AGn();AQk(a);return a;}
function AQk(a){}
function AR_(a){var b;b=new R3;b.CH=a;By(b);return b;}
var AG6=G(Bf);
function A4P(){var a=new AG6();AM8(a);return a;}
function AM8(a){}
function AWj(a){var b;b=new U3;b.DM=a;By(b);IR(b.O,0,2048);b.R=1;return b;}
var AEy=G(Bf);
function A4v(){var a=new AEy();AMO(a);return a;}
function AMO(a){}
function ANw(a){var b;b=new XZ;b.E6=a;By(b);b.R=1;return b;}
var AH7=G(Bf);
function A4Q(){var a=new AH7();AP4(a);return a;}
function AP4(a){}
function A14(a){var b;b=new PU;b.D5=a;By(b);b.R=1;return b;}
var AKp=G(Bf);
function A3h(){var a=new AKp();AQD(a);return a;}
function AQD(a){}
function AUv(a){var b;b=new Zi;b.C0=a;By(b);return b;}
var AGM=G(Bf);
function A5l(){var a=new AGM();AXB(a);return a;}
function AXB(a){}
function APz(a){var b;b=new Wg;b.Cd=a;By(b);b.R=1;return b;}
var AI4=G(Bf);
function A4q(){var a=new AI4();ALU(a);return a;}
function ALU(a){}
function AND(a){var b;b=new Wi;b.Dh=a;By(b);b.R=1;return b;}
var AFV=G(Bf);
function A3G(){var a=new AFV();AMT(a);return a;}
function AMT(a){}
function AXe(a){var b;b=new Py;b.DJ=a;By(b);b.R=1;return b;}
var AHB=G(Bf);
function A5c(){var a=new AHB();APE(a);return a;}
function APE(a){}
function AYe(a){var b;b=new Yg;b.Fn=a;By(b);b.R=1;return b;}
var AKu=G(Bf);
function A4_(){var a=new AKu();AY0(a);return a;}
function AY0(a){}
function AS9(a){var b;b=new Yn;b.CO=a;By(b);return b;}
var AFz=G(Bf);
function A33(){var a=new AFz();AMP(a);return a;}
function AMP(a){}
function ARH(a){var b;b=new AA$;b.E8=a;By(b);return b;}
var AFe=G(Bf);
function A3g(){var a=new AFe();A0d(a);return a;}
function A0d(a){}
function AQO(a){var b;b=new AAg;b.Cf=a;By(b);b.R=1;return b;}
var AHS=G(Bf);
function A44(){var a=new AHS();AXw(a);return a;}
function AXw(a){}
function A0j(a){var b;b=new O1;b.Fz=a;By(b);b.R=1;return b;}
var KB=G(Bf);
function A3J(){var a=new KB();ANK(a);return a;}
function ANK(a){}
function AFU(a){return CJ(Cb(Cb(Cb(DE(),97,122),65,90),48,57),95);}
var AKI=G(KB);
function A4m(){var a=new AKI();AXE(a);return a;}
function AXE(a){}
function AQG(a){var b;b=EO(AFU(a),1);b.R=1;return b;}
var AJz=G(NM);
function A23(){var a=new AJz();ATp(a);return a;}
function ATp(a){}
function AVs(a){var b;b=EO(AJi(a),1);b.R=1;return b;}
var AFc=G(M$);
function A3p(){var a=new AFc();AX7(a);return a;}
function AX7(a){}
function AOy(a){var b;b=EO(AJO(a),1);b.R=1;return b;}
function AIN(){var a=this;Bf.call(a);a.sW=0;a.zs=0;}
function R(a,b){var c=new AIN();A13(c,a,b);return c;}
function A13(a,b,c){a.sW=b;a.zs=c;}
function APO(a){return Cb(DE(),a.sW,a.zs);}
var AIY=G(Bf);
function A4o(){var a=new AIY();ATJ(a);return a;}
function ATJ(a){}
function ATu(a){return Cb(Cb(DE(),65279,65279),65520,65533);}
function AJn(){var a=this;Bf.call(a);a.pY=0;a.ow=0;a.x7=0;}
function B4(a,b){var c=new AJn();AM4(c,a,b);return c;}
function A3D(a,b,c){var d=new AJn();ATz(d,a,b,c);return d;}
function AM4(a,b,c){a.ow=c;a.pY=b;}
function ATz(a,b,c,d){a.x7=d;a.ow=c;a.pY=b;}
function AW2(a){var b;b=A38(a.pY);if(a.x7)IR(b.O,0,2048);b.R=a.ow;return b;}
function AJv(){var a=this;Bf.call(a);a.nZ=0;a.mA=0;a.qY=0;}
function Kg(a,b){var c=new AJv();ANE(c,a,b);return c;}
function A4H(a,b,c){var d=new AJv();AUw(d,a,b,c);return d;}
function ANE(a,b,c){a.mA=c;a.nZ=b;}
function AUw(a,b,c,d){a.qY=d;a.mA=c;a.nZ=b;}
function ALo(a){var b;b=new ZO;AGg(b,a.nZ);if(a.qY)IR(b.O,0,2048);b.R=a.mA;return b;}
var AIQ=G();
var AEM=G();
function AFy(b){var c,d,e,f,g,h,i;c=ASk(Gs(b));d=M2(c);e=BP(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+M2(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=Pa(c);h=h+1|0;}return e;}
function Nx(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function WO(){var a=this;B.call(a);a.yw=0;a.tt=0;a.yG=null;}
function AOa(a,b,c){var d=new WO();ASI(d,a,b,c);return d;}
function ASI(a,b,c,d){a.yw=b;a.tt=c;a.yG=d;}
function AGH(){var a=this;B.call(a);a.xH=null;a.y6=0;}
function ASk(a){var b=new AGH();AWt(b,a);return b;}
function AWt(a,b){a.xH=b;}
var AI_=G();
function M2(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.xH.data;f=b.y6;b.y6=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function Pa(b){var c,d;c=M2(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Mt=G(Bu);
function Y7(){var a=this;B.call(a);a.w5=null;a.w4=null;a.w3=null;}
function AYj(a,b){var c,d,e,f,g;c=a.w5;d=a.w4;e=a.w3;f=new ADK;g=ABY(DW(d));AKX(f,b,null,g);H0(c,f);e.f();}
function Y6(){B.call(this);this.At=null;}
function ATM(a,b){Bk(a.At,b);}
function AIE(){B.call(this);this.SS=null;}
function Sl(){B.call(this);this.sL=null;}
function AW8(a,b){b.hj=a.sL;}
function RJ(){B.call(this);this.uc=null;}
function AMZ(a,b){GK(a.uc.bu,b,A76);}
function ACa(){var a=this;B.call(a);a.FA=null;a.kE=null;}
function ANU(a,b){var c;c=a.kE;b=b;a.kE=XX(!c.oi&&!b.eN?0:1);return 1;}
function ABz(){var a=this;B.call(a);a.uU=null;a.uV=null;}
function A1a(a){var b,c;b=a.uU;c=a.uV;Gi(b.x.bw,FR(c));}
function ABC(){var a=this;B.call(a);a.CX=null;a.s7=null;}
function ABE(){B.call(this);this.Ff=null;}
function A1R(a,b){$rt_globals.console.info($rt_ustr(b));}
var KH=G(0);
function PI(){var a=this;B.call(a);a.ll=0;a.Ch=null;}
function AZZ(a,b){var c,d;c=Cl(b);d=new K;M(d);H(H(d,C(670)),c);$rt_globals.console.info($rt_ustr(L(d)));a.ll=a.ll+1|0;Nh(b,a);}
function AXz(a,b){var c;b=Cl(b);c=new K;M(c);H(H(c,C(671)),b);$rt_globals.console.info($rt_ustr(L(c)));}
function ASt(a){var b;b=a.ll-1|0;a.ll=b;if(!b)Bk(Bt(),C(672));}
function AA4(){var a=this;B.call(a);a.Fk=null;a.Fj=null;}
function R2(){var a=this;B.call(a);a.Dw=null;a.Dv=null;a.Du=null;}
function RT(){B.call(this);this.sO=null;}
function AQ$(a){var b,c,d,e;b=a.sO;c=Bt();d=GB(b);e=new K;M(e);H(H(e,C(673)),d);Bk(c,L(e));c=b.jN;e=new AAJ;e.c5=b;e.lN=BM();e.mg=BM();Nh(c,e);}
function UP(){var a=this;Z.call(a);a.xr=null;a.Fh=null;}
function ANW(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cw^DV(a.xr,c):0;}
function UN(){var a=this;Z.call(a);a.AT=null;a.vH=null;a.Dr=null;}
function AUQ(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cw^DV(a.AT,c):0;return a.vH.n(b)&&!d?1:0;}
function P8(){var a=this;Z.call(a);a.lr=null;a.Ed=null;}
function APF(a,b){return a.bi^DV(a.lr,b);}
function AXg(a){var b,c,d;b=new K;M(b);c=Ij(a.lr,0);while(c>=0){JZ(b,HQ(c));BN(b,124);c=Ij(a.lr,c+1|0);}d=b.L;if(d>0)UC(b,d-1|0);return L(b);}
function XH(){var a=this;Z.call(a);a.zf=null;a.ET=null;}
function A0b(a,b){return a.zf.n(b);}
function XF(){var a=this;Z.call(a);a.oy=0;a.x0=null;a.o9=null;}
function ASr(a,b){return !(a.oy^DV(a.o9.J,b))&&!(a.oy^a.o9.ex^a.x0.n(b))?0:1;}
function XG(){var a=this;Z.call(a);a.my=0;a.vn=null;a.nK=null;}
function AYv(a,b){return !(a.my^DV(a.nK.J,b))&&!(a.my^a.nK.ex^a.vn.n(b))?1:0;}
function XK(){var a=this;Z.call(a);a.BB=0;a.vt=null;a.vk=null;a.Er=null;}
function AWD(a,b){return a.BB^(!a.vt.n(b)&&!a.vk.n(b)?0:1);}
function XM(){var a=this;Z.call(a);a.tf=0;a.zb=null;a.yL=null;a.Fx=null;}
function ALj(a,b){return a.tf^(!a.zb.n(b)&&!a.yL.n(b)?0:1)?0:1;}
function XI(){var a=this;Z.call(a);a.sr=null;a.Fy=null;}
function AOt(a,b){return Db(a.sr,b);}
function XJ(){var a=this;Z.call(a);a.Bf=null;a.Eu=null;}
function AP_(a,b){return Db(a.Bf,b)?0:1;}
function XN(){var a=this;Z.call(a);a.to=null;a.zd=0;a.uL=null;}
function ATg(a,b){return !Db(a.to,b)&&!(a.zd^DV(a.uL.J,b))?0:1;}
function XO(){var a=this;Z.call(a);a.tT=null;a.z4=0;a.tK=null;}
function AWf(a,b){return !Db(a.tT,b)&&!(a.z4^DV(a.tK.J,b))?1:0;}
function P7(){var a=this;Z.call(a);a.uG=0;a.A3=null;a.vQ=null;a.Cl=null;}
function A22(a,b){return !(a.uG^a.A3.n(b))&&!Db(a.vQ,b)?0:1;}
function Qp(){var a=this;Z.call(a);a.Bo=0;a.qD=null;a.qZ=null;a.CB=null;}
function AOw(a,b){return !(a.Bo^a.qD.n(b))&&!Db(a.qZ,b)?1:0;}
function P5(){var a=this;Z.call(a);a.yn=null;a.CE=null;}
function ANb(a,b){return Db(a.yn,b);}
function P6(){var a=this;Z.call(a);a.se=null;a.Fv=null;}
function AW6(a,b){return Db(a.se,b)?0:1;}
function P_(){var a=this;Z.call(a);a.Bz=null;a.tO=0;a.B_=null;}
function APf(a,b){return Db(a.Bz,b)&&a.tO^DV(a.B_.J,b)?1:0;}
function P4(){var a=this;Z.call(a);a.Ak=null;a.zq=0;a.tN=null;}
function A1d(a,b){return Db(a.Ak,b)&&a.zq^DV(a.tN.J,b)?0:1;}
function P9(){var a=this;Z.call(a);a.AA=0;a.xp=null;a.td=null;a.Eq=null;}
function AVC(a,b){return a.AA^a.xp.n(b)&&Db(a.td,b)?1:0;}
function P$(){var a=this;Z.call(a);a.Af=0;a.wT=null;a.Av=null;a.Ex=null;}
function ARB(a,b){return a.Af^a.wT.n(b)&&Db(a.Av,b)?0:1;}
var L$=G(0);
function AAf(){var a=this;B.call(a);a.Cx=null;a.A4=null;a.lI=null;a.cH=null;a.km=0;a.o5=0;}
function OQ(a,b){var c,d,e;c=J(a.lI);if(b>=0&&b<=c){ADP(a.cH,null,(-1),(-1));d=a.cH;d.l7=1;d.eP=b;c=d.iU;if(c<0)c=b;d.iU=c;b=a.A4.cq(b,a.lI,d);if(b==(-1))a.cH.dL=1;if(b>=0){d=a.cH;if(d.ku){e=d.d_.data;if(e[0]==(-1)){c=d.eP;e[0]=c;e[1]=c;}d.iU=MA(d);return 1;}}a.cH.eP=(-1);return 0;}d=new BH;Bm(d,Dl(b));N(d);}
function AHA(a){return Qo(a.cH,0);}
function AI0(a){return R5(a.cH,0);}
function AEq(a){return a.cH.kx;}
function AJB(){var a=this;B.call(a);a.OX=null;a.OV=null;a.OY=0.0;}
var Da=G(0);
var A6K=null;var A72=null;var A6M=null;var A6L=null;var A6O=null;var A6N=null;var A6Q=null;var A6P=null;var A6S=null;var A6R=null;var A6T=null;function AGV(){AGV=Bn(Da);A18();}
function A18(){A6K=CD(0);A72=Dx(8,8,8);A6M=S(C(674));A6L=Dx(255,255,255);A6O=S(C(675));A6N=S(C(676));A6Q=S(C(677));A6P=S(C(678));A6S=EY(205,205,205,153);A6R=EY(255,255,255,0);A6T=S(C(116));}
function Cz(){CI.call(this);this.pm=null;}
var A9l=null;var A9m=null;var A9n=null;var A9o=null;var A9p=null;var A9q=null;var A9r=null;var A9s=null;var A9t=null;var A9u=null;var A9v=null;var A9w=null;var A9x=null;var A9y=null;var A9z=null;var A6U=null;function AGh(){AGh=Bn(Cz);A2z();}
function DM(a,b,c){var d=new Cz();Zo(d,a,b,c);return d;}
function A2l(a,b,c,d){var e=new Cz();AEJ(e,a,b,c,d);return e;}
function Zo(a,b,c,d){AGh();DJ(a,b,c);a.pm=JH(d,null);}
function AEJ(a,b,c,d,e){AGh();DJ(a,b,c);a.pm=JH(d,e);}
function A2z(){var b;b=new Cz;AGV();Zo(b,C(364),0,A72);A9l=b;A9m=DM(C(365),1,S(C(679)));A9n=DM(C(367),2,S(C(680)));A9o=DM(C(369),3,S(C(681)));A9p=DM(C(371),4,A72);A9q=DM(C(372),5,S(C(682)));A9r=DM(C(374),6,S(C(412)));A9s=DM(C(376),7,S(C(683)));A9t=DM(C(378),8,S(C(684)));A9u=A2l(C(380),9,A72,Dx(237,235,252));A9v=A2l(C(381),10,S(C(410)),S(C(685)));A9w=DM(C(382),11,S(C(412)));A9x=DM(C(384),12,S(C(413)));A9y=DM(C(386),13,S(C(686)));b=DM(C(387),14,S(C(388)));A9z=b;A6U=I(Cz,[A9l,A9m,A9n,A9o,A9p,A9q,A9r,A9s,A9t,A9u,
A9v,A9w,A9x,A9y,b]);}
var D1=G(0);
var A6Y=null;var A6Z=null;var A6V=null;var A6W=null;var A6X=null;var A73=null;var A74=null;var A60=null;var A61=null;function AU6(){AU6=Bn(D1);AWA();}
function AWA(){A6Y=S(C(114));A6Z=S(C(687));A6V=S(C(688));A6W=S(C(689));A6X=S(C(690));A73=S(C(114));A74=S(C(687));A60=EY(205,205,205,153);A61=Dx(247,248,250);}
function ACz(){var a=this;B.call(a);a.l9=null;a.iO=0;}
var O9=G(HS);
function AOd(a,b,c,d){var e,f,g;e=0;f=d.z;a:{while(true){if(b>f){b=e;break a;}g=Gw(d,a.bc);DZ(d,a.bc,b);e=a.di.c(b,c,d);if(e>=0)break;DZ(d,a.bc,g);b=b+1|0;}}return b;}
function A2R(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Gw(e,a.bc);DZ(e,a.bc,c);f=a.di.c(c,d,e);if(f>=0)break;DZ(e,a.bc,g);c=c+(-1)|0;}}return c;}
function AM2(a){return null;}
var Q8=G(Bu);
var Vh=G(Bu);
function TT(){Gd.call(this);this.D1=0;}
function Q2(){Gd.call(this);this.Fq=0;}
function Vf(){B.call(this);this.q8=null;}
function AXd(a,b){a.q8.g(H3(b));}
function Vg(){var a=this;B.call(a);a.rZ=null;a.r0=null;}
function AVB(a,b){var c,d;c=a.rZ;d=a.r0;b.text().then(Bv(c,"f"),Bv(d,"f"));}
function AB6(){var a=this;B.call(a);a.tr=null;a.AU=null;a.v_=0;a.mL=0;}
function Nu(a,b){return Ch(a.tr)<b?0:1;}
function ADA(){var a=this;B.call(a);a.yo=null;a.yp=null;}
function A0c(a,b){var c,d;c=a.yo;d=a.yp;DS(c);d.g(b);}
var AEL=G(0);
function ACm(){B.call(this);this.xw=null;}
function ARJ(a,b){var c,d,e,f;c=a.xw;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.s7;c=Bt();b=Cl(b);e=new K;M(e);H(H(e,C(691)),b);Bk(c,L(e));b=Bt();f=d.length;c=new K;M(c);U(H(c,C(692)),f);Bk(b,L(c));}
function ACo(){var a=this;B.call(a);a.AM=null;a.AN=null;}
function AQV(a,b){var c,d;c=a.AM;d=a.AN;b.arrayBuffer().then(Bv(c,"f"),Bv(d,"f"));}
function ACq(){var a=this;B.call(a);a.yD=null;a.k4=null;a.ks=null;}
function ABd(a){var b,c;b=a.yD.next();c=a.ks.pD;b.then(Bv(a,"f"),Bv(c,"f"));}
function ARQ(a,b){var c,d;if(b.done?1:0)a.k4.ws();else{ABd(a);c=b.value;if(c.kind==='file'?1:0){b=A3a(c,null,YJ(a.ks));a.k4.xq(b);}else{b=new ACi;d=a.ks;AHd(b,c,d.pD,YJ(d),null);a.k4.t1(b);}}}
function YI(){var a=this;B.call(a);a.s0=null;a.s1=null;}
function AAJ(){var a=this;B.call(a);a.lN=null;a.mg=null;a.c5=null;}
function A1p(a,b){var c,d;c=new Im;d=a.c5;LH(c,b,d.jQ+1|0,d.hL);BB(a.lN,c);}
function ATe(a,b){var c,d;c=DW(b);d=new KA;J5(d,c,a.c5.jQ+1|0);d.hF=b;a.c5.hL.rN(d,c);d.ov=AKO(a.c5.hL,d);BB(a.mg,d);}
function A1L(a){var b,c,d,e,f,g,h;if(!(EE(a.lN)&&EE(a.mg))){a.c5.ht=Go(a.lN,A9a);a.c5.ia=Go(a.mg,A9b);K1(a.c5.ht,A8O);K1(a.c5.ia,A8O);b=a.c5;c=b.ht;d=c.data;e=b.ia;f=e.data;g=d.length;h=f.length;d=Q(Dg,g+h|0);C6(c,0,d,0,g);C6(e,0,d,g,h);a.c5.e_=d;}NT(a.c5);b=a.c5;b.hL.xB(b);}
function AB9(){var a=this;B.call(a);a.d_=null;a.kX=null;a.po=null;a.nq=null;a.rO=0;a.ku=0;a.c$=0;a.z=0;a.eP=0;a.kx=0;a.gw=0;a.dL=0;a.Fb=0;a.iU=0;a.l7=0;}
function B1(a,b,c){a.kX.data[b]=c;}
function DD(a,b){return a.kX.data[b];}
function MA(a){return R5(a,0);}
function R5(a,b){ZM(a,b);return a.d_.data[(b*2|0)+1|0];}
function DZ(a,b,c){a.d_.data[b*2|0]=c;}
function MY(a,b,c){a.d_.data[(b*2|0)+1|0]=c;}
function Gw(a,b){return a.d_.data[b*2|0];}
function I8(a,b){return a.d_.data[(b*2|0)+1|0];}
function AGy(a){return Qo(a,0);}
function Qo(a,b){ZM(a,b);return a.d_.data[b*2|0];}
function Wp(a,b){return a.po.data[b];}
function EU(a,b,c){a.po.data[b]=c;}
function ZM(a,b){var c;if(!a.ku){c=new C$;Y(c);N(c);}if(b>=0&&b<a.rO)return;c=new BH;Bm(c,Dl(b));N(c);}
function ADP(a,b,c,d){a.ku=0;a.l7=2;Ju(a.d_,(-1));Ju(a.kX,(-1));if(b!==null)a.nq=b;if(c>=0){a.c$=c;a.z=d;}a.eP=a.c$;}
function AFr(a){return a.l7;}
function To(){B.call(this);this.yr=null;}
function AYo(a,b){a.yr.g($rt_str(b.message));}
function AAd(){var a=this;B.call(a);a.qq=null;a.qp=0;}
function A2P(a){H5(a.qq,a.qp);}
function Xr(){B.call(this);this.zV=null;}
function ARM(a){H5(a.zV,1);}
function Xs(){B.call(this);this.r3=null;}
function APv(a){H5(a.r3,0);}
function Yy(){var a=this;B.call(a);a.xQ=null;a.xP=0;}
function A1O(a){Nb(a.xQ,a.xP);}
function Wc(){B.call(this);this.yW=null;}
function ASM(a){Nb(a.yW,1);}
function Wd(){B.call(this);this.AJ=null;}
function AVD(a){Nb(a.AJ,0);}
function AAU(){B.call(this);this.Bh=null;}
function AXZ(a){DS(a.Bh);}
function ZA(){var a=this;B.call(a);a.yu=null;a.yt=0;}
function A1g(a,b){var c,d,e,f,g,h,i;c=a.yu;d=a.yt;e=!d?c.eR.eq:c.eR.es;DS(c.dj);f=Bt();g=FR(b);h=new K;M(h);H(H(h,C(693)),g);Bk(f,L(h));i=new ZZ;i.kK=c;i.kR=d;i.na=e;f=ASw(b,i);if(!d)c.pW=f;else c.oM=f;f.er.f();ET(e,f);}
function AAL(){Z.call(this);this.EQ=null;}
function ATk(a,b){return CF(b)!=2?0:1;}
function Wk(){Z.call(this);this.EU=null;}
function AVq(a,b){return CF(b)!=1?0:1;}
function R4(){Z.call(this);this.EF=null;}
function AL7(a,b){return RC(b);}
function R3(){Z.call(this);this.CH=null;}
function AW0(a,b){return 0;}
function U3(){Z.call(this);this.DM=null;}
function AO7(a,b){return !CF(b)?0:1;}
function XZ(){Z.call(this);this.E6=null;}
function A1J(a,b){return CF(b)!=9?0:1;}
function PU(){Z.call(this);this.D5=null;}
function ARg(a,b){return HN(b);}
function Zi(){Z.call(this);this.C0=null;}
function ASc(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Wg(){Z.call(this);this.Cd=null;}
function A2F(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function Wi(){Z.call(this);this.Dh=null;}
function ANm(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function Py(){Z.call(this);this.DJ=null;}
function ATr(a,b){a:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Yg(){Z.call(this);this.Fn=null;}
function AYD(a,b){return KJ(b);}
function Yn(){Z.call(this);this.CO=null;}
function AZW(a,b){return Yo(b);}
function AA$(){Z.call(this);this.E8=null;}
function A1w(a,b){return CF(b)!=3?0:1;}
function AAg(){Z.call(this);this.Cf=null;}
function ATL(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function O1(){Z.call(this);this.Fz=null;}
function ANg(a,b){a:{b:{switch(CF(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=HN(b);}return b;}
function Mi(){Z.call(this);this.nG=0;}
function A38(a){var b=new Mi();AGg(b,a);return b;}
function AGg(a,b){By(a);a.nG=b;}
function ARh(a,b){return a.bi^(a.nG!=CF(b&65535)?0:1);}
var ZO=G(Mi);
function A0W(a,b){return a.bi^(!(a.nG>>CF(b&65535)&1)?0:1);}
var ADz=G(0);
function YN(){B.call(this);this.wA=null;}
function APU(a){var b,c;b=a.wA;c=b.s0;b=b.s1;c.FU(b.l1,b.pu,null);}
function Td(){var a=this;B.call(a);a.BO=null;a.BN=0;}
function AWL(a,b){MZ(a.BO,b,a.BN);}
function ZZ(){var a=this;B.call(a);a.kR=0;a.na=null;a.kK=null;}
function APD(a,b){var c,d,e;c=Bt();d=FR(b.hF);e=new K;M(e);H(H(e,C(694)),d);Bk(c,L(e));c=new M3;d=a.kK;T9(c,d.iA,d.dj);MZ(c,b.hF,a.kR);b=b.hF;d=Re(a,b.h4);if(d===null)d=null;else{b=DW(b);d=Ub(d.ia,b);}if(d!==null)MZ(c,d.hF,a.kR?0:1);}
function AUe(a,b){var c,d,e;ADr(b);c=Bt();d=AFk(b.jN);e=new K;M(e);H(H(e,C(695)),d);Bk(c,L(e));c=ADZ(a,b.jN);if(c!==null&&(c.hx!=60086?0:1))c.er.f();if(Ji(b)>0)EL(a.na);}
function AUl(a,b){var c;if(Ji(b)>0)EL(a.na);Lh(b);c=ADZ(a,b.jN);if(c!==null&&I9(c))c.er.f();}
function Re(a,b){var c,d,e;c=!a.kR?a.kK.oM:a.kK.pW;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=Rg(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function ADZ(a,b){var c;c=Re(a,b.hz);return c===null?null:Rg(c,Hp(b));}
var AF7=G(0);
function ABO(){var a=this;B.call(a);a.rt=null;a.rs=null;a.rr=0;}
function AM0(a){var b,c,d,e;b=a.rt;c=a.rs;d=a.rr;c=FR(c);if(!d)b.ns=c;else b.wS=c;e=b.wS;if(e!==null&&b.ns!==null)DK(b.lf,c);else{if(e!==null)DK(b.lf,e);c=b.ns;if(c!==null)DK(b.lf,c);}}
function RE(){var a=this;B.call(a);a.ui=null;a.uj=null;}
function A16(a){a.ui.zI(a.uj);}
var AIq=G();
function AD7(){B.call(this);this.tE=null;}
function AXY(a){var b;b=a.tE;IF(b);b.hL.uQ(b);b.ht=A9a;b.ia=A9b;}
function ABv(){var a=this;B.call(a);a.tq=null;a.tp=null;}
function ATN(a,b){var c,d,e,f;c=a.tq;d=a.tp;e=Ls(c.jp,d);b=AIu(b);f=ANX(b.ke,ABY(e));Ep(c.mI,d,f);if(BO(c.pr,d))ADD(c,f);}
function ABu(){var a=this;B.call(a);a.xv=null;a.xx=null;}
function AUq(a,b){var c,d,e;c=a.xv;d=a.xx;c=Ls(c.jp,d);d=En();e=new K;M(e);H(H(H(H(e,C(696)),c),C(29)),b);Bk(d,L(e));}
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"ui",4,"js",4,"diff"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bJ",A5H(AQg),"cN",A5G(AMJ)],RS,0,B,[],0,3,0,0,0,WA,0,B,[],3,3,0,0,0,Wb,0,B,[],3,3,0,0,0,ACN,0,B,[WA,Wb],0,3,0,0,0,AIJ,0,B,[],4,0,0,0,0,AIw,0,B,[],4,3,0,0,0,GY,0,B,[],0,3,0,0,0,Ew,0,GY,[],0,3,0,0,0,Bu,0,Ew,[],0,3,0,0,0,AJw,0,Bu,[],0,3,0,0,0,C7,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,Kj,0,B,[],3,3,0,0,0,BK,"String",1,B,[C7,CL,Kj],0,3,0,Fc,["cN",A5G(AMH),"bJ",A5H(Bj),"gD",A5G(NU),"mn",A5H(AOc)],Fy,0,GY,[],0,3,0,0,0,Il,0,Fy,[],0,3,0,0,0,AJb,0,Il,[],0,3,0,0,0,Es,0,B,[C7],1,3,0,0,0,HF,
0,Es,[CL],0,3,0,0,["gD",A5G(AUD),"bJ",A5H(A2p),"mn",A5H(AYc)],GS,0,B,[C7,Kj],0,0,0,0,["j0",A5H(MX),"cN",A5G(L)],JG,0,B,[],3,3,0,0,0,K,0,GS,[JG],0,3,0,0,["pL",A5K(AX$),"o_",A5J(ANv),"cN",A5G(Ed),"j0",A5H(APA),"p3",A5I(AYu)],E4,0,Il,[],0,3,0,0,0,AJ_,0,E4,[],0,3,0,0,0,AI7,0,E4,[],0,3,0,0,0,AA8,0,B,[],3,3,0,0,0,C_,0,B,[],3,3,0,0,0,XY,0,B,[],3,0,0,0,0,Ka,0,B,[AA8,C_,XY],1,3,0,0,["b4",A5G(EA)],ZG,0,Ka,[],0,3,0,0,0,AIc,0,B,[],0,3,0,0,0,AKJ,0,B,[],4,3,0,0,0,BT,0,B,[],3,3,0,0,0,Ce,0,B,[BT],3,3,0,0,0,ABg,0,B,[Ce],0,3,
0,0,["bh",A5H(A2D)],AGj,0,B,[],0,3,0,0,0,AJJ,0,B,[BT],1,3,0,0,0,AEr,0,B,[],3,3,0,0,0,AKx,0,B,[],3,3,0,0,0,AGQ,0,B,[],3,3,0,0,0,LZ,0,B,[],0,3,0,0,0,AEW,0,B,[BT],1,3,0,0,0,ABh,0,B,[Ce],0,3,0,0,["bh",A5H(ALk)],ABf,0,B,[Ce],0,3,0,0,["bh",A5H(A1x)],LD,0,B,[],4,3,0,0,0,AGO,0,B,[],4,3,0,0,0,AI1,0,B,[],0,3,0,0,0,ALh,0,B,[],4,3,0,0,0,WB,0,B,[Ce],0,3,0,0,["bh",A5H(AZk)]]);
$rt_metadata([AG2,0,B,[BT],1,3,0,0,0,AIl,0,B,[],0,3,0,0,0,ACr,0,B,[BT],3,3,0,0,0,AJy,0,B,[ACr],1,3,0,0,["Lu",A5H(AXn),"RS",A5G(AQd)],AFK,0,B,[BT],1,3,0,0,0,Ge,0,B,[],3,3,0,0,0,SF,0,B,[Ge],0,3,0,0,0,BH,0,Bu,[],0,3,0,0,0,AJX,0,B,[],4,3,0,0,0,F2,0,Bu,[],0,3,0,0,0,Jd,0,Bu,[],0,3,0,0,0,Dm,0,B,[CL],0,3,0,0,0,V8,0,B,[BT],3,3,0,0,0,AAh,0,B,[V8],3,3,0,0,0,EZ,0,B,[BT],3,3,0,0,0,AIe,0,B,[BT,AAh,EZ],1,3,0,0,["Kd",A5G(AY2),"KN",A5H(A00),"SG",A5H(A0P),"N7",A5H(AWh),"Ra",A5H(ALA),"MI",A5G(ANn),"RQ",A5I(A0X),"K4",A5J(APl),
"LB",A5G(AVo),"LT",A5G(AZI),"Qn",A5H(A1t),"OL",A5G(AQx),"SZ",A5H(AOY),"IT",A5G(AQQ),"Pn",A5G(AUh),"ST",A5G(APP),"Gh",A5H(AMb),"K8",A5G(A2r),"QH",A5I(AXL),"Oy",A5I(AQp),"RI",A5I(ATx),"Rp",A5G(AUJ),"R$",A5G(AOJ),"LF",A5H(ANy),"P7",A5H(AOm),"N1",A5I(AXU),"Ix",A5G(APX),"Lt",A5H(AVr),"MW",A5G(AOl),"L0",A5G(ARS),"NO",A5H(ALq),"IS",A5H(AS6),"SO",A5H(AVM),"H7",A5G(A1l),"Oo",A5I(AVT),"RE",A5H(AZQ),"In",A5G(ASg),"Ne",A5I(ARe),"GL",A5I(AQZ),"O9",A5G(AS1),"LG",A5H(ATX),"HN",A5J(AZa),"G$",A5G(ANt),"HR",A5I(AV5),"OE",A5G(AU7),
"Kv",A5G(A2m),"Qk",A5G(ARb),"FD",A5G(AU5),"J7",A5I(ARf),"MX",A5H(AWq),"P5",A5H(AOq),"G3",A5G(A0q)],Pz,0,B,[Ce],0,3,0,0,["bh",A5H(ARN)],AJj,0,B,[],4,3,0,0,0,Yf,0,B,[EZ],3,3,0,0,0,RK,0,B,[EZ],3,3,0,0,0,Zv,0,B,[EZ],3,3,0,0,0,SY,0,B,[EZ],3,3,0,0,0,ADt,0,B,[EZ],3,3,0,0,0,ABU,0,B,[EZ,Yf,RK,Zv,SY,ADt],3,3,0,0,0,AIH,0,B,[BT,ABU],1,3,0,0,["QU",A5I(AZr),"Se",A5I(AYa),"Ha",A5J(AOL),"Ot",A5H(AMn),"JF",A5J(AWF)],BU,0,Bu,[],0,3,0,0,0,AD8,0,Bu,[],0,3,0,0,0,Ig,0,BH,[],0,3,0,0,0,AIV,0,B,[],0,3,0,0,0,Zb,0,B,[],3,3,0,0,0,XQ,0,
B,[Zb],3,3,0,0,0,AAp,0,B,[XQ],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,AJF,0,B,[BD],0,3,0,0,0,V,0,B,[],3,3,0,0,0,AJG,0,B,[V],0,3,0,0,0,Zy,0,B,[BT],3,3,0,0,0,T8,0,B,[Zy],0,3,0,0,["IU",A5H(AXK)],T6,0,B,[V],0,3,0,0,0,Y3,0,B,[BT],3,3,0,0,0,T7,0,B,[Y3],0,3,0,0,["BM",A5I(ANJ)],AG_,0,B,[BT],1,3,0,0,0,CA,0,B,[BT],3,3,0,0,0,T5,0,B,[CA],0,3,0,0,["cv",A5H(ARR)],Z9,0,B,[],0,3,0,0,0,UE,0,B,[],3,3,0,0,["fk",A5H(AUr)],Hz,0,B,[UE],3,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],FA,0,B,[Hz],1,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0),"eE",A5G(EE),"q0",
A5H(A0E)],ND,0,B,[Hz],3,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],ME,0,B,[ND],3,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)]]);
$rt_metadata([Fo,0,FA,[ME],1,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0),"zY",A5H(AR4),"b9",A5G(B7),"up",A5I(ARt),"oo",A5I(A1f),"bJ",A5H(AQJ)],Md,0,Fo,[],1,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],OL,0,B,[Hz],3,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],ADQ,0,B,[OL,ND],3,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],Tr,0,Md,[ADQ],0,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],Lr,0,B,[],3,3,0,0,0,Ee,0,B,[Lr],1,3,0,0,0,Ex,0,B,[],3,3,0,0,0,Vn,0,B,[Lr],3,3,0,0,0,O_,0,B,[Vn],3,3,0,0,0,X4,0,Ee,[Ex,C7,O_],0,3,0,0,0,AAb,0,B,[BD],0,3,0,0,0,AAc,0,B,[Ce],0,
3,0,0,["bh",A5H(AUI)],AE3,0,B,[],0,3,0,0,0,NR,0,B,[],1,3,0,0,0,TY,0,NR,[],0,3,0,0,0,Cw,0,B,[C_],1,3,0,0,["ci",A5H(A2n)],YE,0,B,[],0,3,0,0,0,ACS,0,B,[CA],0,3,0,0,["cv",A5H(AZC)],ACT,0,B,[CA],0,3,0,0,["cv",A5H(AZM)],ACU,0,B,[CA],0,3,0,0,["cv",A5H(AQu)],ACV,0,B,[CA],0,3,0,0,["cv",A5H(AYs)],ACW,0,B,[CA],0,3,0,0,["cv",A5H(AYE)],ACX,0,B,[CA],0,3,0,0,["cv",A5H(ARW)],ACY,0,B,[CA],0,3,0,0,["cv",A5H(AOK)],ACZ,0,B,[CA],0,3,0,0,["cv",A5H(A2L)],AC0,0,B,[CA],0,3,0,0,["cv",A5H(AOj)],AC1,0,B,[CA],0,3,0,0,["cv",A5H(ASD)],VI,
0,B,[CA],0,3,0,0,["cv",A5H(A2o)],VJ,0,B,[CA],0,3,0,0,["cv",A5H(AQb)],VK,0,B,[CA],0,3,0,0,["cv",A5H(AQz)],VL,0,B,[CA],0,3,0,0,["cv",A5H(AZS)],ABD,0,B,[],3,3,0,0,0,ABM,0,B,[ABD],0,3,0,0,0,ABL,0,B,[CA],0,3,0,0,["cv",A5H(APq)],OI,0,B,[],0,3,0,0,0,Kw,0,B,[Ge],0,3,0,0,["p_",A5I(MT)],AHn,0,B,[],0,3,0,0,0,D$,0,B,[],3,3,0,0,0,Ct,0,B,[D$],3,3,0,0,0,CE,0,B,[],3,3,0,0,["bT",A5H(AX6),"cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5)],EK,0,B,[],3,3,0,0,0,CX,0,B,[D$],3,3,0,0,0,EW,0,B,[],3,3,0,0,0,DO,0,B,[],3,3,0,0,0,E8,0,B,[DO],3,
3,0,0,0,Rb,0,B,[C_],0,3,0,0,0,Bg,0,B,[],0,3,0,0,["cN",A5G(AHV),"bJ",A5H(APh)],AC3,0,B,[],0,3,0,0,0,AGS,0,B,[],0,3,0,0,0]);
$rt_metadata([AIt,0,B,[],3,3,0,0,0,Y1,0,B,[],0,3,0,0,0,N6,0,B,[],0,3,0,0,0,Dh,0,N6,[],0,3,0,0,0,AKH,0,Dh,[],0,3,0,0,0,Fp,0,Dh,[],0,3,0,0,0,Zk,0,Dh,[],0,3,0,0,0,AFN,0,Fp,[],0,3,0,0,0,Hu,0,Fp,[],0,3,0,0,0,PG,0,Hu,[],0,3,0,0,0,AHD,0,Hu,[],0,3,0,0,0,AII,0,Fp,[],0,3,0,0,0,AKb,0,Dh,[],0,3,0,0,0,AEH,0,Dh,[],0,3,0,0,0,ZR,0,B,[BT],3,3,0,0,0,ALf,0,B,[ZR],3,3,0,0,0,Y0,0,B,[C_],0,3,0,0,0,Q7,0,B,[],0,3,0,0,0,CI,0,B,[CL,C7],1,3,0,0,0,G$,0,CI,[],12,3,0,Jv,0,Mn,0,B,[],3,3,0,0,0,ST,0,B,[Mn],3,3,0,0,0,ABR,0,B,[],3,3,0,0,0,GU,
0,B,[ST,ABR],1,3,0,0,0,MQ,0,GU,[],0,3,0,0,0,AFt,0,MQ,[],0,3,0,0,0,HE,0,GU,[],1,3,0,0,0,LB,0,HE,[],0,3,0,0,["mR",A5J(APj)],Ei,0,CI,[],12,3,0,A1M,0,MI,0,B,[CL],1,3,0,0,0,Mq,0,MI,[],0,3,0,AFn,0,X8,0,B,[],0,3,0,0,0,H4,0,CI,[],12,0,0,AQq,0,NF,0,HE,[],0,3,0,0,["mR",A5J(AN1)],AGN,0,BU,[],0,3,0,0,0,T$,0,Ew,[],0,3,0,0,0,Mp,0,B,[BT],3,3,0,0,0,ADM,0,B,[Mp],0,3,0,0,["bh",A5H(ASm)],ADN,0,B,[Mp],0,3,0,0,["bh",A5H(AMB)],Ia,0,B,[],1,3,0,0,0,Z5,0,B,[],3,3,0,0,0,Lw,0,Ia,[CL,JG,Kj,Z5],1,3,0,0,0,M6,0,Ia,[CL],1,3,0,0,0,IH,0,B,[],
0,3,0,Hm,0,Pd,0,Cw,[],0,3,0,0,["bM",A5G(AP8),"cd",A5I(AOX)],HM,0,Cw,[],1,3,0,0,["cd",A5I(AFX)],CH,0,HM,[],1,3,0,0,["bM",A5G(ANV),"cd",A5I(IC),"ci",A5H(AMv)],Fa,0,B,[],3,3,0,0,0,Nd,0,B,[],3,3,0,0,0,F_,0,B,[],3,3,0,0,0]);
$rt_metadata([KS,0,CH,[CE,Fa,Nd,F_,EK,EW,E8],0,3,0,0,["h8",A5I(A10),"ci",A5H(AR9),"bM",A5G(AYB),"g$",A5G(AXG),"BF",A5G(ASu),"wn",A5G(AYx),"uI",A5H(AS5),"nA",A5H(AZn),"il",A5H(ANf),"cd",A5I(APC),"gu",A5H(AL1),"bT",A5H(AZG),"cy",A5J(AXH),"cm",A5I(AQt),"dB",A5I(AZ7),"dy",A5J(ARI),"cY",A5G(AX9)],AGX,0,KS,[],0,3,0,0,["g$",A5G(AQE)],AHl,0,B,[],0,3,0,0,0,AJA,0,B,[BT],1,3,0,0,0,KZ,0,Lw,[],1,0,0,0,0,AFH,0,KZ,[],0,0,0,0,0,Lo,0,B,[],1,3,0,0,0,N$,0,B,[],0,3,0,0,0,AEx,0,B,[],0,3,0,0,0,I5,0,B,[BT],3,3,0,0,0,WK,0,B,[I5],0,
3,0,0,["bh",A5H(AN6)],WJ,0,B,[I5],0,3,0,0,["bh",A5H(AQ9)],WH,0,B,[Ce],0,3,0,0,["bh",A5H(ARz)],WG,0,B,[Ce],0,3,0,0,["bh",A5H(AV6)],X,0,B,[],3,3,0,0,0,S8,0,B,[X],0,3,0,0,["g",A5H(A2s)],S$,0,B,[X],0,3,0,0,["g",A5H(AYb)],Um,0,B,[BD],0,3,0,0,["bb",A5H(ATh)],Ul,0,B,[BD],0,3,0,0,["bb",A5H(ALJ)],Ui,0,B,[BD],0,3,0,0,["bb",A5H(AWI)],Uh,0,B,[BD],0,3,0,0,["bb",A5H(AZl)],Uk,0,B,[BD],0,3,0,0,["bb",A5H(ANP)],Uj,0,B,[BD],0,3,0,0,["bb",A5H(AUn)],Up,0,B,[BD],0,3,0,0,["bb",A5H(ANu)],Uo,0,B,[BD],0,3,0,0,["bb",A5H(APZ)],Ur,0,B,
[BD],0,3,0,0,["bb",A5H(A0G)],Uq,0,B,[BD],0,3,0,0,["bb",A5H(ALt)],AAO,0,B,[BD],0,3,0,0,["bb",A5H(ALD)],AAN,0,B,[BD],0,3,0,0,["bb",A5H(AYg)],AAM,0,B,[BD],0,3,0,0,["bb",A5H(AQS)],AAB,0,B,[BD],0,3,0,0,["bb",A5H(AN$)],AAA,0,B,[BD],0,3,0,0,["bb",A5H(AUC)],AAy,0,B,[BD],0,3,0,0,["bb",A5H(A1F)],AAx,0,B,[BD],0,3,0,0,["bb",A5H(AP9)],AAw,0,B,[BD],0,3,0,0,["bb",A5H(A0J)],AAv,0,B,[BD],0,3,0,0,["bb",A5H(ALn)],AAu,0,B,[BD],0,3,0,0,["bb",A5H(A0v)],AAF,0,B,[BD],0,3,0,0,["bb",A5H(AZN)],AAE,0,B,[BD],0,3,0,0,["bb",A5H(AM6)],AAD,
0,B,[BD],0,3,0,0,["bb",A5H(AXs)],AAC,0,B,[BD],0,3,0,0,["bb",A5H(AOS)],AAH,0,B,[BD],0,3,0,0,["bb",A5H(AOT)],AAG,0,B,[BD],0,3,0,0,["bb",A5H(AVh)],AC7,0,B,[],0,0,0,0,0,Ie,0,B,[],0,3,0,0,0,Qm,0,Ie,[],0,3,0,0,0,AGY,0,B,[],0,3,0,0,0,OG,0,Ie,[],0,3,0,0,0,Tf,0,B,[BT],3,3,0,0,0,Pt,0,B,[Tf],0,3,0,0,["LM",A5H(AYh)]]);
$rt_metadata([ABX,0,B,[X],0,3,0,0,["g",A5H(ACK)],ADc,0,M6,[],0,0,0,0,0,CB,0,B,[C_],0,3,0,0,["b4",A5G(AR$),"hU",A5G(AZc),"dz",A5J(JL),"dw",A5H(AKY),"ci",A5H(AVZ),"rJ",A5H(AP2),"oT",A5H(ATE),"ly",A5I(A0i),"rn",A5G(ATO),"cy",A5J(AON),"cm",A5I(AMI),"dB",A5I(AQI),"bT",A5H(ATt),"dy",A5J(A0a)],AFd,0,CB,[],0,3,0,0,["dw",A5H(AGv)],AFL,0,B,[],0,3,0,0,0,FS,0,B,[],3,3,0,0,["wt",A5G(AZd),"ux",A5G(AOe)],Q0,0,B,[],3,0,0,0,0,Mm,0,B,[FS],3,3,0,0,["wt",A5G(AZd),"ux",A5G(AOe)],AFj,0,CB,[FS,CE,Nd,Q0,Mm],0,3,0,0,["dz",A5J(Mo),"ly",
A5I(ARj),"pj",A5I(A2t),"ux",A5G(AWZ),"wt",A5G(AU$),"BF",A5G(W5),"wn",A5G(ADW),"uI",A5H(PZ),"nA",A5H(ARZ),"rn",A5G(LQ),"b4",A5G(AVw),"ci",A5H(I0),"qa",A5H(AJe),"hU",A5G(AG7),"pq",A5G(ASP),"dw",A5H(AYH),"lg",A5G(Tz),"kr",A5G(Ty),"hE",A5H(ARF),"n1",A5G(ARw),"px",A5G(AUg),"dy",A5J(LL),"dB",A5I(SS),"cm",A5I(Wj),"cy",A5J(O2),"bT",A5H(Xk),"it",A5H(A17)],AH6,0,B,[],0,3,0,0,0,TH,0,B,[X],0,3,0,0,["g",A5H(AL$)],TI,0,B,[X],0,3,0,0,["g",A5H(A09)],TJ,0,B,[Ct],0,3,0,0,["H",A5H(API)],HR,0,B,[Ct],0,3,0,0,["H",A5H(AOg)],TF,0,
B,[X],0,3,0,0,["g",A5H(AQv)],TG,0,B,[CX],0,3,0,0,["H",A5H(A1G)],C3,0,B,[],3,3,0,0,0,ADp,0,B,[CE,C3],0,3,0,0,["bT",A5H(AUN),"cy",A5J(AMR),"cm",A5I(AOP),"dB",A5I(A12),"fS",A5I(AX3)],Tl,0,B,[],0,3,0,0,0,V$,0,B,[EK],0,3,0,0,["dy",A5J(A1X)],V9,0,B,[CX],0,3,0,0,["H",A5H(AMS)],AE7,0,B,[],0,3,0,0,0,ADK,0,B,[],0,3,0,0,0,ADy,0,B,[],0,3,0,0,0,Fq,0,B,[C_],0,3,0,0,0,AHz,0,B,[],0,3,0,0,0,AE6,0,B,[C_],0,3,0,0,0,Xf,0,B,[X],0,3,0,0,0,Xe,0,B,[X],0,3,0,0,["g",A5H(AMj)],Xd,0,B,[X],0,3,0,0,["g",A5H(ALF)],AJ9,0,B,[],0,3,0,0,0,Xc,
0,B,[V],0,3,0,0,["f",A5G(AUP)],Xj,0,B,[V],0,3,0,0,["f",A5G(AW4)],Xi,0,B,[V],0,3,0,0,["f",A5G(A20)],Xh,0,B,[V],0,3,0,0,["f",A5G(APT)],Xg,0,B,[V],0,3,0,0,["f",A5G(ARA)],Xb,0,B,[V],0,3,0,0,["f",A5G(A2u)],Uw,0,B,[V],0,3,0,0,["f",A5G(APW)],Ux,0,B,[V],0,3,0,0,["f",A5G(AZJ)],AGc,0,B,[BT],1,3,0,0,0,Ns,0,B,[],4,3,0,AXT,0,AEF,0,B,[],3,3,0,0,0,ZT,0,B,[Ct],0,3,0,0,["H",A5H(AOA)],ZS,0,B,[Ct],0,3,0,0,["H",A5H(AV4)],Tx,0,B,[],0,3,0,0,0,Kk,0,B,[],0,3,0,0,0,Fl,0,B,[],0,3,0,0,0,Nq,0,Fl,[],0,3,0,0,0,AAK,0,Fl,[],0,3,0,0,0,YO,0,
Fl,[],0,3,0,0,0]);
$rt_metadata([Hg,0,B,[],3,3,0,0,0,Sq,0,B,[],3,3,0,0,0,B2,0,B,[],0,3,0,0,["bJ",A5H(AT8)],LC,0,B,[],3,3,0,0,0,AIm,0,Fo,[Ex,C7,LC],0,3,0,0,["pB",A5H(AX0),"kB",A5H(BG),"c1",A5G(AZu),"zY",A5H(BB),"oo",A5I(AJs),"p$",A5H(EN),"q0",A5H(AG0),"jd",A5G(Ix),"up",A5I(AIA),"fk",A5H(Fr)],Lv,0,B,[],0,3,0,0,0,Iv,0,B,[C_],0,3,0,0,["b4",A5G(AGl)],YC,0,B,[],3,0,0,0,0,OD,0,B,[],3,3,0,0,0,YW,0,B,[V],0,3,0,0,["f",A5G(AXy)],YV,0,B,[V],0,3,0,0,["f",A5G(AUB)],AKP,0,B,[],0,3,0,0,0,Tj,0,B,[],0,3,0,0,0,G0,0,B,[],1,3,0,0,0,ZE,0,G0,[],0,3,
0,0,["t_",A5H(Cd)],L7,0,B,[],3,3,0,0,0,Tn,0,B,[L7],3,3,0,0,0,SH,"JsFileHandle",7,B,[Tn],0,3,0,0,["o7",A5G(DW),"ti",A5G(AL2),"cN",A5G(AX2),"gD",A5G(ALP)],ACH,0,B,[],3,3,0,0,0,AJQ,0,B,[ACH],0,3,0,0,["cN",A5G(AWk)],ZN,0,B,[OD],0,3,0,0,0,Hh,0,B,[CL],0,3,0,0,0,NN,0,B,[],0,3,0,0,0,DG,0,B,[],0,3,0,0,0,Yj,0,B,[],0,3,0,0,0,Li,0,Ee,[Ex,C7],0,3,0,0,0,Cx,0,B,[],0,3,0,0,0,NK,0,Li,[],0,3,0,0,0,ZJ,0,B,[],0,3,0,0,0,AK8,0,B,[CL],0,3,0,0,["bJ",A5H(ASE),"mn",A5H(AVY)],UJ,0,B,[Ge],0,3,0,0,["p_",A5I(APY)],Zj,0,B,[],0,3,0,0,["cN",
A5G(ALZ),"bJ",A5H(AME)],Jn,0,B,[],3,3,0,0,0,GX,0,B,[Jn,Ex],0,0,0,0,["bJ",A5H(AWm)],HV,0,GX,[],0,0,0,0,0,NH,0,Lo,[],1,3,0,0,0,QC,0,NH,[],0,3,0,0,0,I7,0,Ew,[],0,3,0,0,0,OT,0,B,[I5],0,3,0,0,["bh",A5H(AT0)],OV,0,B,[Ce],0,3,0,0,["bh",A5H(ATq)],OU,0,B,[Ce],0,3,0,0,["bh",A5H(AVj)],IW,0,B,[],0,3,0,0,0,Kt,0,CH,[Fa,F_],0,3,0,0,["il",A5H(AXF),"ci",A5H(A06),"bM",A5G(AOC),"g$",A5G(A2k),"cd",A5I(ALs),"gu",A5H(AWG)],AH9,0,Cw,[],0,3,0,0,["ci",A5H(ALM),"bM",A5G(ANx),"cd",A5I(APG)],AA6,0,Cw,[],0,3,0,0,["ci",A5H(AQ7),"bM",A5G(AVR),
"cd",A5I(AWY)],Xn,0,CH,[CE,C3],0,3,0,0,["cm",A5I(ATi),"dB",A5I(ALX),"fS",A5I(AO_),"cd",A5I(AN7),"bM",A5G(AWC),"bT",A5H(APJ),"cy",A5J(AMk)],AAz,0,CH,[C3],0,3,0,0,["fS",A5I(ANl),"cd",A5I(AMz)],WP,0,HM,[CE],0,3,0,0,["bT",A5H(AX6),"cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5),"bM",A5G(A0F),"ci",A5H(ALE)],SE,0,Cw,[],0,3,0,0,["bM",A5G(ALr),"cd",A5I(AUy)],Dr,0,Cw,[],0,3,0,0,["bM",A5G(Z4),"cd",A5I(SA)]]);
$rt_metadata([Q9,"SelectFileTest",5,Dr,[],0,3,0,0,0,W6,0,CH,[],0,3,0,0,0,Wq,"RenderTexture",5,Dr,[],0,3,0,0,["ci",A5H(AOM),"bM",A5G(AWr),"cd",A5I(A2e)],SC,"ScissorDemo",5,Dr,[],0,3,0,0,["bM",A5G(A2O),"cd",A5I(AOx)],AAo,0,Cw,[],0,3,0,0,["bM",A5G(ATs),"cd",A5I(AWE),"ci",A5H(A0k)],Kn,"ClipboardTest",5,Dr,[CE],0,3,0,0,["bT",A5H(AX6),"cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(APw)],Sn,"CodiconDemo",5,Dr,[],0,3,0,0,["bM",A5G(AT7)],G6,0,Cw,[CE],1,3,0,0,["bT",A5H(AX6),"cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5),"bM",A5G(AFb)],S7,
0,G6,[],0,3,0,0,["cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5),"cd",A5I(AZ9),"bT",A5H(A03)],S6,0,G6,[],0,3,0,0,["cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5),"bT",A5H(A2w),"bM",A5G(ANi),"cd",A5I(AL6)],VY,0,CH,[C3],0,3,0,0,["fS",A5I(AO$)],Eq,"WindowDemo",6,CH,[C3],0,3,[0,0,0],0,["jm",A5G(AWb),"pl",A5G(APR),"kF",A5H(AID),"fS",A5I(A0O)],Qu,"EditorInViewDemo",5,Eq,[C3,Fa,F_],0,3,[0,0,0],0,["ci",A5H(AV$),"jm",A5G(AMC),"pl",A5G(AUW),"kF",A5H(A2y),"gu",A5H(ASy),"il",A5H(ARV)],WT,0,B,[CE],0,0,0,0,["cm",A5I(ATi),"dB",A5I(ALX),
"cy",A5J(AZ5),"bT",A5H(A0C)],ON,0,Kt,[],0,3,0,0,["g$",A5G(AVU)],KY,0,B,[],3,3,0,0,["rN",A5I(AMp)],RI,"ProjectViewDemo",5,Eq,[Fa,KY],0,3,[0,0,0],0,["jm",A5G(AQT),"kF",A5H(AQM),"gu",A5H(AYP),"zI",A5H(ASi),"xB",A5H(ALL),"uQ",A5H(AOf),"rN",A5I(AR6)],PF,"DiffMiddleDemo",8,Eq,[C3],0,3,[0,0,0],0,["jm",A5G(AWU)],TB,0,CH,[C3],0,3,0,0,["fS",A5I(ATT)],ACs,0,Cw,[CE],0,3,0,0,["bT",A5H(AX6),"cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5),"cd",A5I(A2q),"bM",A5G(AXx),"ci",A5H(ASj)],YM,"FileViewDemo",6,Eq,[C3],0,3,[0,0,0],0,["jm",
A5G(AY4),"kF",A5H(A0f)],J_,0,B,[],0,3,0,0,0,AFF,0,B,[],0,3,0,0,0,AEE,0,B,[],3,3,0,0,0,AH3,0,B,[],0,3,0,0,0,AF4,0,B,[],3,3,0,0,0,AHJ,0,B,[],0,3,0,0,0,Mx,0,B,[Jn,C7],0,3,0,0,0,KE,0,Mx,[],0,0,0,0,0,AKZ,0,B,[],0,3,0,0,0,Yr,0,B,[Ct],0,3,0,0,["H",A5H(AVE)],Yp,0,B,[X],0,3,0,0,["g",A5H(AW7)],Yq,0,B,[CX],0,3,0,0,["H",A5H(AST)],AHF,0,Kk,[],0,3,0,0,0,TC,0,B,[CE],0,0,0,0,["bT",A5H(AVS),"cy",A5J(ALz),"cm",A5I(AVL),"dB",A5I(AVc)],YU,0,B,[Ct],0,3,0,0,["H",A5H(A1n)],YT,0,B,[Ct],0,3,0,0,["H",A5H(AZO)],YS,0,B,[EW],0,3,0,0,["h8",
A5I(AX_)],YR,0,B,[V],0,3,0,0,["f",A5G(AUL)],YQ,0,B,[CX],0,3,0,0,["H",A5H(ARd)],YP,0,B,[EK],0,3,0,0,["dy",A5J(A1u)],Hn,0,B2,[],0,3,0,0,0,AGE,0,B,[],3,3,0,0,0,Wo,0,B,[CE],0,0,0,0,["bT",A5H(AX6),"cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(ANT)],Wl,0,B,[],0,3,0,0,0,AF5,0,B,[],0,3,0,0,0,AIU,0,B,[],0,3,0,0,["bJ",A5H(A0L)],ABx,0,B,[Ct],0,3,0,0,["H",A5H(AQR)],ABr,0,B,[CX],0,3,0,0,["H",A5H(ASC)],ABs,0,B,[V],0,3,0,0,["f",A5G(A2T)]]);
$rt_metadata([ABt,0,B,[V],0,3,0,0,["f",A5G(AMe)],BC,0,B,[],0,3,0,0,0,Uc,0,B,[Ct],0,3,0,0,["H",A5H(AX5)],Ud,0,B,[CX],0,3,0,0,["H",A5H(ALY)],AHm,0,B,[],0,3,0,0,0,O4,0,B,[C3],0,3,0,0,["fS",A5I(AQY)],O3,0,B,[Ct],0,3,0,0,["H",A5H(AZp)],Zz,0,B,[],3,3,0,0,0,AH$,0,B,[Zz],0,3,0,0,0,Wz,0,B,[CE],0,0,0,0,["cy",A5J(AZ5),"cm",A5I(AUY),"dB",A5I(ALT),"bT",A5H(AWO)],ZU,0,B,[EK],0,3,0,0,["dy",A5J(AQW)],QJ,0,B,[Ct],0,3,0,0,["H",A5H(AQL)],Rt,0,B,[CX],0,3,0,0,["H",A5H(AT9)],Rs,0,B,[X],0,3,0,0,["g",A5H(A0p)],ABG,0,B,[CE],0,0,0,0,
["dB",A5I(ALX),"cy",A5J(AZ5),"bT",A5H(AZF),"cm",A5I(ATZ)],AF9,0,B,[],0,3,0,0,0,Di,0,B,[],3,3,0,FI,0,Ys,0,B,[CE],0,0,0,0,["cy",A5J(AZ5),"cm",A5I(AO1),"dB",A5I(AU_),"bT",A5H(ANY)],VN,0,B,[EK],0,3,0,0,["dy",A5J(A1r)],AC_,0,B,[Ct],0,3,0,0,["H",A5H(ANc)],AC$,0,B,[EW],0,3,0,0,["h8",A5I(AYf)],AC9,0,B,[EW],0,3,0,0,["h8",A5I(ANh)],AC8,0,B,[E8],0,3,0,0,["cY",A5G(AQc)],ADa,0,B,[E8],0,3,0,0,["cY",A5G(A0Y)],R8,0,B,[Ct],0,3,0,0,["H",A5H(ATB)],Pu,0,B,[Ct],0,3,0,0,["H",A5H(ALO)],Pv,0,B,[CX],0,3,0,0,["H",A5H(AXt)],Pw,0,B,[X],
0,3,0,0,["g",A5H(AZD)],Px,0,B,[CX],0,3,0,0,["H",A5H(A1h)],AG9,0,B,[],3,3,0,0,0,Xo,0,B,[CX],0,3,0,0,["H",A5H(ANC)],Ug,0,B,[CX],0,3,0,0,["H",A5H(ARL)],Uf,0,B,[Ct],0,3,0,0,["H",A5H(ARc)],AAQ,0,B,[CX],0,3,0,0,["H",A5H(ARK)],QQ,0,B,[Ct],0,3,0,0,["H",A5H(APx)],Do,0,B,[],3,3,0,AN4,0,Cp,0,CI,[],12,3,0,TM,0,Kp,0,B,[],0,3,0,0,0,IY,0,B,[],0,3,0,0,0,AJM,0,B,[],0,3,0,0,0,DP,0,B,[],3,3,0,AUT,0,XV,0,B,[BT],3,3,0,0,0,X7,0,B,[XV],0,3,0,0,["BM",A5I(AW_)],XW,0,B,[BT],3,3,0,0,0,X5,0,B,[XW],0,3,0,0,["BM",A5I(AXP)],AEY,0,B,[],0,
3,0,0,0,AH8,0,B,[BT],3,3,0,0,0,UV,0,B,[],0,3,0,0,0,DT,0,B,[],3,3,0,AYM,0,HZ,0,B,[],3,3,0,0,0]);
$rt_metadata([Qa,0,B,[HZ],0,3,0,0,["wO",A5J(A0e)],Qb,0,B,[HZ],0,3,0,0,0,TE,0,B,[X],0,3,0,0,["g",A5H(AZi)],PP,0,B,[X],0,3,0,0,["g",A5H(ANN)],PO,0,B,[X],0,3,0,0,["g",A5H(AMs)],PL,0,B,[X],0,3,0,0,["g",A5H(ALG)],PJ,0,B,[X],0,3,0,0,["g",A5H(A2x)],AHO,0,B,[],0,3,0,0,0,Uz,0,B,[X],0,3,0,0,["g",A5H(AXQ)],AB7,0,B,[Ct],0,3,0,0,["H",A5H(AOI)],AKy,0,B,[],0,3,0,0,["bJ",A5H(AWe)],I6,0,B,[],0,3,0,0,0,Kl,0,B,[],4,3,0,0,0,AIv,0,B,[],0,3,0,0,0,Cu,0,CI,[],12,3,0,AE_,0,AK4,0,B,[],0,3,0,0,0,AFu,0,B,[BT],4,3,0,0,0,ALb,0,B,[],0,3,
0,0,0,AEe,0,B,[],3,3,0,0,0,C2,0,B,[BT],1,3,0,0,0,AJ2,0,C2,[],1,3,0,0,0,AKm,0,C2,[],1,3,0,0,0,AIL,0,C2,[],1,3,0,0,0,AIW,0,C2,[],1,3,0,0,0,AKB,0,C2,[],1,3,0,0,0,U6,0,B,[V],0,3,0,0,["f",A5G(APn)],HJ,0,CI,[],12,3,0,AQw,0,PB,0,B,[BD],0,3,0,0,["bb",A5H(AVa)],Zs,0,B,[],0,3,0,0,0,AIr,0,B,[],0,3,0,0,0,Gr,0,B,[],0,3,0,0,0,AFl,0,B,[],4,3,0,0,0,Th,0,B,[],0,0,0,0,0,AIx,0,B,[],3,3,0,0,0,AA0,0,B,[EK],0,3,0,0,["dy",A5J(APs)],VU,0,B,[EW],0,3,0,0,["h8",A5I(A2g)],VT,0,B,[E8],0,3,0,0,["cY",A5G(AP6)],VV,0,B,[C_],0,3,0,0,0,Xw,0,
B,[CE],0,0,0,0,["cm",A5I(ATi),"dB",A5I(ALX),"cy",A5J(AZ5),"bT",A5H(A2W)],AFs,0,B,[BT],1,3,0,0,0,AG4,0,B,[C3,FS,C_],0,3,0,0,["wt",A5G(AZd),"ux",A5G(AOe),"fS",A5I(A2C),"it",A5H(AP3),"b4",A5G(ART)],WY,0,B,[X],0,3,0,0,["g",A5H(APN)],UM,0,B,[X],0,3,0,0,["g",A5H(A2i)],Q1,0,B,[X],0,3,0,0,["g",A5H(AVG)],PR,0,B,[DO],0,3,0,0,["cY",A5G(AU1)],AJY,0,B,[],3,3,0,0,0,LP,0,B,[],3,3,0,0,0,Q6,0,B,[LP],0,3,0,0,["zt",A5H(AV0)],Pr,0,B,[BD],0,3,0,0,["bb",A5H(A1y)],AGr,0,B,[],0,3,0,0,0]);
$rt_metadata([QK,0,B,[C_],0,3,0,0,0,AEh,0,B,[],0,3,0,0,0,TU,0,B,[],0,3,0,0,0,L3,0,B,[],0,3,0,0,0,So,0,B,[],3,3,0,0,0,ACc,0,B,[X],0,3,0,0,["g",A5H(AV1)],Gd,0,I7,[],0,3,0,0,0,ADm,0,Fy,[],0,3,0,0,0,ACA,0,B,[X],0,3,0,0,["g",A5H(AT_)],T3,0,B,[X],0,3,0,0,["g",A5H(A1W)],Vy,0,B,[V],0,3,0,0,["f",A5G(A0w)],G5,0,B,[],1,0,0,0,0,Y8,"FolderDiffWindow",8,G5,[],0,3,[0,0,0],0,["b4",A5G(AMD),"BC",A5H(AXA)],ADB,0,Es,[CL],0,3,0,0,0,Gv,0,B,[],0,0,0,0,0,JB,0,B,[],4,3,0,0,0,TX,0,B,[],0,3,0,0,0,On,0,B,[],1,3,0,0,0,ACF,0,B,[CL],0,3,
0,0,["bJ",A5H(ALH),"gD",A5G(AR7),"mn",A5H(AZU)],AFC,0,C2,[],1,3,0,0,0,Uu,0,B,[V],0,3,0,0,["f",A5G(AMy)],ADX,0,B,[],3,3,0,0,0,HY,0,CB,[],1,3,0,0,["b4",A5G(AY_),"dw",A5H(AQF),"ci",A5H(AU9),"dz",A5J(ANo),"cy",A5J(A1E),"cm",A5I(AS4),"dB",A5I(A1P),"bT",A5H(A1_),"dy",A5J(AN2)],QU,0,HY,[F_],0,3,0,0,["BU",A5G(APi),"hU",A5G(AXv)],Yi,0,B,[V],0,3,0,0,["f",A5G(AZ1)],Yk,0,B,[V],0,3,0,0,["f",A5G(AY$)],YX,0,B,[X],0,3,0,0,["g",A5H(AVn)],Rj,0,B,[X],0,3,0,0,["g",A5H(AY7)],Fn,0,CB,[],0,3,0,0,0,Rd,0,Fn,[FS],0,3,0,0,["wt",A5G(AZd),
"ux",A5G(AOe),"b4",A5G(A1U),"ly",A5I(AWB),"dw",A5H(AUX),"oT",A5H(AZT),"rJ",A5H(A0Z),"bT",A5H(APV),"cm",A5I(AN9),"cy",A5J(AR0),"it",A5H(A0$)],US,0,B,[V],0,3,0,0,["f",A5G(ATG)],AE$,0,CB,[],0,3,0,0,["b4",A5G(ASF),"dz",A5J(AOu),"dw",A5H(A0n),"cy",A5J(AS2),"cm",A5I(ASH),"dB",A5I(AQ1),"bT",A5H(AQN),"dy",A5J(AWW),"hU",A5G(AHI)],ADu,0,B,[X],0,3,0,0,["g",A5H(ANp)],ADw,0,B,[X],0,3,0,0,["g",A5H(ALI)],Qc,0,Fn,[],0,3,0,0,["hU",A5G(ATQ),"oT",A5H(AZY),"dw",A5H(AT5),"cm",A5I(AQm)],ADv,0,B,[V],0,3,0,0,["f",A5G(ASW)],T_,0,CB,
[],0,3,0,0,0,Ii,0,HY,[],1,3,0,0,["BU",A5G(APS)],AFI,0,Ii,[Fa],0,0,0,0,0,Ho,0,B,[],0,3,0,0,0,Dg,0,Ho,[],0,3,0,0,0,Sx,0,B,[V],0,3,0,0,["f",A5G(AVQ)],Sw,0,B,[V],0,3,0,0,["f",A5G(AUs)],ZW,0,Es,[CL],0,3,0,0,0,AB0,0,B,[X],0,3,0,0,["g",A5H(A2v)],ADU,0,B,[V],0,3,0,0,["f",A5G(AYd)],Xm,0,B,[V],0,3,0,0,["f",A5G(AVt)],UK,0,B,[V],0,3,0,0,["f",A5G(A0I)],ABm,0,B,[],0,3,0,0,0,J2,0,B,[],0,3,0,0,0]);
$rt_metadata([Ow,0,B,[],3,3,0,0,0,Ll,0,Fn,[FS],0,3,0,0,["wt",A5G(AZd),"ux",A5G(AOe),"b4",A5G(ARv),"ly",A5I(AMh),"dw",A5H(AYJ),"cy",A5J(A1q),"cm",A5I(ANd)],AJk,0,Ll,[],0,3,0,0,["wt",A5G(AZd),"ux",A5G(AOe)],AFZ,0,B,[Mm],0,3,0,0,["wt",A5G(AZd),"ux",A5G(AOe),"lg",A5G(ASR),"kr",A5G(A1B),"hE",A5H(ATD),"n1",A5G(APH),"px",A5G(AVe),"pj",A5I(AQf),"qa",A5H(AYZ),"pq",A5G(Mz)],ABw,0,B,[],0,3,0,0,0,W8,0,B,[V],0,3,0,0,["f",A5G(ATV)],Sy,0,B,[V],0,3,0,0,["f",A5G(APL)],P1,0,B,[X],0,3,0,0,["g",A5H(ALV)],P0,0,B,[X],0,3,0,0,["g",
A5H(AMa)],AD2,0,B,[Ge],0,3,0,0,["p_",A5I(ASl)],K_,0,B,[],0,3,0,0,0,AK1,0,G0,[],0,0,0,0,["t_",A5H(A2K)],C$,0,Bu,[],0,3,0,0,0,AKa,0,Fy,[],0,3,0,0,0,AK7,0,B,[],0,3,0,0,0,OO,0,B,[X],0,3,0,0,["g",A5H(AUp)],ACy,0,B,[X],0,3,0,0,["g",A5H(AYU)],Oe,0,BH,[],0,3,0,0,0,Sc,0,B,[X],0,3,0,0,["g",A5H(AWJ)],Sb,0,B,[X],0,3,0,0,["g",A5H(A1T)],Fg,0,B,[],3,3,0,0,0,W3,0,B,[Fg],0,0,0,0,["cC",A5G(B_),"b$",A5G(Ca),"ph",A5G(Zm)],Lf,0,On,[],1,3,0,0,0,SW,0,Lf,[],0,3,0,0,0,Yb,0,B,[X],0,3,0,0,0,Vr,0,B,[X],0,3,0,0,["g",A5H(ATo)],O6,0,B,[DO],
0,3,0,0,["cY",A5G(AR3)],O5,0,B,[DO],0,3,0,0,["cY",A5G(AWv)],AAl,0,B,[DO],0,3,0,0,["cY",A5G(AZz)],Xx,0,B,[DO],0,3,0,0,["cY",A5G(AUz)],Z3,0,B,[Ce],0,3,0,0,["bh",A5H(A2b)],AFG,0,B,[BT],1,3,0,0,0,ACw,0,B,[Ce],0,3,0,0,["bh",A5H(AOk)],AHx,0,B,[BD],0,3,0,0,0,AGD,0,B,[BD],0,3,0,0,0,W0,0,B,[X],0,3,0,0,["g",A5H(ANa)],WZ,0,B,[X],0,3,0,0,["g",A5H(ASx)],RN,0,B,[V],0,3,0,0,["f",A5G(AYq)],AA2,0,B,[V],0,3,0,0,["f",A5G(ALl)],AEZ,0,B,[],0,3,0,0,0,AA3,0,B,[V],0,3,0,0,["f",A5G(AOF)],S_,0,B,[V],0,3,0,0,["f",A5G(ATj)],ACB,0,B,[V],
0,3,0,0,["f",A5G(A2j)],QF,0,B,[],0,3,0,0,0,PS,0,B,[V],0,3,0,0,["f",A5G(ANB)],PT,0,B,[D$],0,3,0,0,0,Eg,0,Bu,[],0,3,0,0,0,AG1,0,B,[],0,3,0,0,0,SB,0,Ee,[Ex,C7],0,3,0,0,0,Us,0,B,[],0,3,0,0,0]);
$rt_metadata([Ua,0,B,[],0,3,0,0,0,WD,0,B,[D$],0,3,0,0,0,SL,0,B,[X],0,3,0,0,["g",A5H(ASz)],Yt,0,Es,[CL],0,3,0,0,0,J6,0,B,[],4,3,0,0,0,TN,0,B,[V],0,3,0,0,["f",A5G(AL0)],TO,0,B,[V],0,3,0,0,["f",A5G(AN0)],TP,0,B,[V],0,3,0,0,["f",A5G(A1V)],TQ,0,B,[V],0,3,0,0,["f",A5G(AP$)],TR,0,B,[V],0,3,0,0,["f",A5G(ASf)],OS,0,B,[Ce],0,3,0,0,["bh",A5H(A2Z)],Vu,0,B,[],3,3,0,A3X,0,PC,0,CB,[],0,3,0,0,["dw",A5H(ALQ)],ABN,0,B,[],0,3,0,0,0,Tt,0,B,[],3,3,0,AOV,0,Rc,0,B,[V],0,3,0,0,["f",A5G(AYX)],Ww,0,B,[V],0,3,0,0,["f",A5G(AYT)],QW,0,
B,[F_],0,3,0,0,["il",A5H(A0m)],QV,0,B,[DO],0,3,0,0,["cY",A5G(AWx)],W7,0,B,[],0,3,0,0,0,AG8,0,B,[],0,3,0,0,0,SR,0,B,[],0,0,0,0,0,AEI,0,B,[],3,3,0,0,0,RW,0,B,[V],0,3,0,0,["f",A5G(AXD)],ACP,0,B,[V],0,3,0,0,["f",A5G(ATR)],Yl,0,B,[],1,3,0,0,0,Ze,0,B,[Mn],3,3,0,0,0,Pp,0,B,[Ze],3,3,0,0,0,Ib,0,B,[Pp],1,3,0,0,0,Z6,0,Ib,[],0,3,0,0,0,Rh,0,B,[],3,3,0,0,0,P3,0,B,[X],0,3,0,0,0,ADs,0,B,[X],0,3,0,0,["g",A5H(AMi)],AFP,0,B,[],3,3,0,0,0,Jz,0,GX,[],0,0,0,0,0,H_,0,Bu,[],0,3,0,0,0,AB$,0,B,[X],0,3,0,0,["g",A5H(ASQ)],ADF,0,B,[Ce],
0,3,0,0,["bh",A5H(A0D)],ADE,0,B,[Ce],0,3,0,0,["bh",A5H(AWu)],AC6,0,B,[Ce],0,3,0,0,["bh",A5H(AXi)],AC5,0,B,[Ce],0,3,0,0,["bh",A5H(AXO)],ABP,0,B,[HZ],0,3,0,0,["wO",A5J(APQ)],AKf,0,B,[],0,3,0,0,0,Q5,0,B,[X],0,3,0,0,["g",A5H(AVu)],AEo,0,B,[X],0,3,0,0,0,Te,0,B,[CA],0,3,0,0,["cv",A5H(AUZ)],Ve,0,B,[BD],0,3,0,0,0,FM,0,B,[],0,3,0,0,0,AIk,0,B,[],0,3,0,0,0,AEO,0,B,[],0,3,0,0,0]);
$rt_metadata([ALd,0,B,[],0,3,0,0,0,ADn,0,B,[V],0,3,0,0,["f",A5G(AVf)],ADo,0,B,[V],0,3,0,0,["f",A5G(AXC)],FX,0,B,[],0,3,0,0,0,VG,0,B,[X],0,3,0,0,["g",A5H(AOp)],NJ,0,FX,[],0,3,0,0,0,Lb,0,FX,[],0,3,0,0,0,UG,0,B,[X],0,3,0,0,["g",A5H(AVi)],QM,0,B,[],0,3,0,0,0,Qh,0,B,[X],0,3,0,0,["g",A5H(AYK)],Ql,0,B,[Hz],3,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],Fu,0,FA,[Ql],1,3,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],No,0,Fu,[],1,0,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],T4,0,No,[],0,0,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],N3,0,Ee,[],1,0,0,0,0,T1,
0,N3,[],0,0,0,0,0,Oh,0,Fo,[LC],1,0,0,0,["fk",A5H(AUr),"jd",A5G(AWp),"p$",A5H(AQr),"pB",A5H(APr)],T2,0,Oh,[],0,0,0,0,["fk",A5H(AUr),"kB",A5H(AQy),"c1",A5G(APK),"b9",A5G(ANG),"eE",A5G(AL4)],TZ,0,B,[Fg],0,0,0,0,["cC",A5G(ALN),"b$",A5G(AZx),"ph",A5G(ASp)],Yh,0,B,[Fg],3,3,0,0,0,T0,0,B,[Yh],0,0,0,0,0,V2,0,B,[Ge],0,3,0,0,0,Rf,0,B,[D$],0,3,0,0,["H",A5H(A21)],Kr,0,Eg,[],0,3,0,0,0,JF,0,Bu,[],0,3,0,0,0,Oa,0,Bu,[],0,3,0,0,0,X_,0,B,[X],0,3,0,0,["g",A5H(AZy)],AHP,0,B,[X],0,3,0,0,0,ABc,0,B,[X],0,3,0,0,["g",A5H(AQh)],Q4,0,
B,[Rh],0,3,0,0,0,U9,0,B,[X],0,3,0,0,["g",A5H(AXI)],AEu,0,B,[],0,3,0,0,0,AAm,0,B,[V],0,3,0,0,["f",A5G(AVg)],G_,0,B,[],0,3,0,0,0,Qv,0,Fu,[],0,0,0,0,["pB",A5H(AX0)],Tw,0,Fu,[],0,0,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],Qw,0,FA,[],0,0,0,0,["fk",A5H(AUr),"pB",A5H(AX0)],V5,0,B,[X],0,3,0,0,["g",A5H(AWQ)],TS,0,B,[X],0,3,0,0,["g",A5H(AYr)],Kv,0,B,[],0,3,0,0,["bJ",A5H(AJV)],Mf,0,Kv,[],0,3,0,0,["bJ",A5H(AVF)],E7,0,B,[],0,3,0,0,["bJ",A5H(AIn)],HH,0,E7,[],0,3,0,0,0,Ke,0,E7,[],0,3,0,0,["bJ",A5H(A1Z)],Jk,0,E7,[],0,3,0,0,["bJ",
A5H(AU4)],Ya,0,B,[X],0,3,0,0,["g",A5H(AZB)],AFi,0,Ib,[],0,3,0,0,0,R0,0,B,[V],0,3,0,0,["f",A5G(AOU)],R1,0,B,[V],0,3,0,0,["f",A5G(AMX)],RY,0,B,[V],0,3,0,0,["f",A5G(AL8)]]);
$rt_metadata([RZ,0,B,[V],0,3,0,0,["f",A5G(AOO)],Rw,0,B,[V],0,3,0,0,["f",A5G(AZ6)],Rv,0,B,[V],0,3,0,0,["f",A5G(AZh)],Ru,0,B,[V],0,3,0,0,["f",A5G(AUi)],Qn,0,B,[V],0,3,0,0,["f",A5G(AQ3)],Q3,0,B,[],3,3,0,0,0,YG,0,B,[V],0,3,0,0,["f",A5G(AMN)],AAT,0,B,[X],0,3,0,0,["g",A5H(ARq)],M3,"FileDiffWindow",8,G5,[],0,3,[0,0,0],0,["b4",A5G(A1H),"BC",A5H(AVp)],Z8,0,B,[Hg],0,3,0,0,["qe",A5I(AUx)],Wm,0,B,[],0,3,0,0,0,RB,0,B,[],0,3,0,0,0,Vi,0,B,[X],0,3,0,0,["g",A5H(ALm)],Uy,0,B,[LP],0,3,0,0,["zt",A5H(Nt)],Ph,0,B,[V],0,3,0,0,["f",
A5G(AXX)],Pi,0,B,[V],0,3,0,0,["f",A5G(A1o)],Pg,0,B,[V],0,3,0,0,["f",A5G(AUo)],UX,0,B,[V],0,3,0,0,["f",A5G(AP1)],UW,0,B,[V],0,3,0,0,["f",A5G(A0l)],X0,0,B,[DO],0,3,0,0,["cY",A5G(ANq)],Z$,0,B,[V],0,3,0,0,["f",A5G(AO2)],Z_,0,B,[V],0,3,0,0,["f",A5G(A0_)],VE,0,B,[V],0,3,0,0,["f",A5G(ALv)],Vz,0,B,[V],0,3,0,0,["f",A5G(AO3)],VA,0,B,[V],0,3,0,0,["f",A5G(ATK)],VB,0,B,[V],0,3,0,0,["f",A5G(AYz)],VC,0,B,[V],0,3,0,0,["f",A5G(AXp)],OM,0,B,[DO],0,3,0,0,["cY",A5G(AS7)],Ut,0,Ii,[Fa],0,0,0,0,0,VX,0,B,[EW],0,3,0,0,0,VW,0,B,[E8],
0,3,0,0,0,Rp,0,B,[Hg],0,3,0,0,["qe",A5I(ANr)],XL,0,B,[L7],3,3,0,0,0,ACi,0,B,[XL],0,0,0,0,["o7",A5G(Hp),"ti",A5G(A1Y),"cN",A5G(AFk)],AHv,0,B,[CL],0,3,0,0,["bJ",A5H(AQ5)],Wy,0,B,[X],0,3,0,0,["g",A5H(AYp)],VP,0,B,[X],0,3,0,0,["g",A5H(A2Y)],Tm,0,B,[HZ],0,3,0,0,0,OR,0,B,[X],0,3,0,0,["g",A5H(A1K)],FG,0,B,[],0,0,0,0,0,AAt,0,FG,[Fg],0,0,0,0,0,Tp,0,FG,[Fg],0,0,0,0,0,Zt,0,FG,[Fg],0,0,0,0,0,AEG,0,B,[X],0,0,0,0,0,Zr,0,B,[C7],4,3,0,0,0,Z1,0,B,[X],0,3,0,0,["g",A5H(AQo)],Z0,0,B,[X],0,3,0,0,["g",A5H(AZV)],XA,0,B,[X],0,3,0,
0,["g",A5H(AWi)],HX,0,B,[],3,3,0,0,0,S3,0,B,[HX],0,3,0,0,["lT",A5J(AYL)]]);
$rt_metadata([S4,0,B,[HX],0,3,0,0,["lT",A5J(AXu)],IU,0,B,[C7,CL],0,3,0,0,0,KO,0,B,[],3,3,0,0,0,RV,0,B,[KO],0,3,0,0,0,XP,0,B,[KO],3,3,0,0,0,AFQ,0,B,[XP],0,3,0,0,0,Sg,0,B,[HX],0,3,0,0,["lT",A5J(AZe)],Sf,0,B,[D$],0,3,0,0,["H",A5H(ATA)],Se,0,B,[D$],0,3,0,0,["H",A5H(ARU)],Si,0,B,[HX],0,3,0,0,["lT",A5J(AYS)],GJ,0,CI,[],12,0,0,Su,0,AD5,0,B,[X],0,3,0,0,["g",A5H(AW1)],BS,0,B,[],1,0,0,0,["cq",A5J(IG),"cA",A5K(IN),"iV",A5G(AVP),"T",A5H(ATa),"b1",A5H(A1s),"gy",A5G(A2c),"eT",A5G(Ku)],Qq,0,B,[V],0,3,0,0,["f",A5G(AUV)],VQ,
0,B,[X],0,3,0,0,["g",A5H(AZj)],VR,0,B,[X],0,3,0,0,["g",A5H(AOb)],RA,0,B,[V],0,3,0,0,["f",A5G(AXb)],Xz,0,B,[X],0,3,0,0,["g",A5H(AQB)],AAI,0,B,[V],0,3,0,0,["f",A5G(AMg)],Im,0,Dg,[],0,3,0,0,0,Sz,0,B,[X],0,3,0,0,["g",A5H(ARX)],AA9,0,B,[],32,0,0,A40,0,O7,0,B,[X],0,3,0,0,["g",A5H(AO4)],C0,0,BS,[],0,0,0,Ox,["c",A5J(AMf),"I",A5H(AMu)],G7,0,B,[],0,0,0,0,0,Kf,0,BU,[],0,3,0,0,0,PH,0,B,[V],0,3,0,0,["f",A5G(AUU)],ACp,0,B,[X],0,3,0,0,["g",A5H(A1k)],RU,0,C0,[],0,0,0,0,["c",A5J(AU0),"I",A5H(A0s)],ADS,0,C0,[],0,0,0,0,["c",A5J(AV_)],QO,
0,C0,[],0,0,0,0,["c",A5J(AMA)],SD,0,C0,[],0,0,0,0,["c",A5J(AU3),"I",A5H(AZA)],F6,0,C0,[],0,0,0,0,["c",A5J(ATl)],Cc,0,BS,[],1,0,0,0,["c",A5J(A2H),"b_",A5G(A05),"I",A5H(APa)],AG5,0,Cc,[],0,0,0,0,["bz",A5I(A0K),"cq",A5J(AWV),"cA",A5K(AV7),"I",A5H(AU2)],B8,0,BS,[],0,0,0,0,["c",A5J(AOr),"T",A5H(ARm),"b1",A5H(AYl),"I",A5H(ARP),"eT",A5G(AMW)],Kq,0,B8,[],0,0,0,0,["c",A5J(ARa),"I",A5H(AZ8)],D_,0,Kq,[],0,0,0,0,["c",A5J(AWs),"T",A5H(AZ0)],Wh,0,D_,[],0,0,0,0,["c",A5J(ARk),"I",A5H(ATf)],ACJ,0,D_,[],0,0,0,0,["c",A5J(AMr),
"I",A5H(A07)],Zu,0,D_,[],0,0,0,0,["c",A5J(AMU),"I",A5H(A2V)],SX,0,D_,[],0,0,0,0,["c",A5J(AUG),"I",A5H(A0h)],HS,0,B8,[],0,0,0,0,["c",A5J(ALK),"cq",A5J(AP5),"cA",A5K(A0u),"b1",A5H(AYi),"gy",A5G(AZw),"eT",A5G(ATH)],KA,0,Dg,[],0,3,0,0,0,G9,0,B,[],1,0,0,0,0,Z,0,G9,[],1,0,0,Qd,["dT",A5G(AVz),"fQ",A5G(AVd),"lZ",A5G(A01),"iq",A5G(A19)],AET,0,Z,[],0,0,0,0,["n",A5H(Db),"dT",A5G(C5),"fQ",A5G(AWR),"lZ",A5G(AS3),"cN",A5G(AYV),"iq",A5G(AN8)],MG,0,Bu,[],0,3,0,0,0,Em,0,BS,[],1,0,0,0,["b1",A5H(ASn),"I",A5H(A1A),"eT",A5G(AQl)],Dc,
0,Em,[],0,0,0,0,["c",A5J(AUH)]]);
$rt_metadata([FQ,0,Dc,[],0,0,0,0,["c",A5J(AVm)],C1,0,Em,[],0,0,0,0,["c",A5J(AUR)],E6,0,Dc,[],0,0,0,0,["c",A5J(AYy),"T",A5H(AUk)],UQ,0,Dc,[],0,0,0,0,["c",A5J(A2E),"cq",A5J(AQK)],Bf,0,B,[],1,0,0,0,0,Dt,0,BU,[],0,3,0,0,0,Wr,0,G9,[Ex],0,0,0,0,["cN",A5G(AY1)],Xv,0,BS,[],0,0,0,0,["c",A5J(APt),"I",A5H(AZv)],ADi,0,B,[Ex,C7],0,3,0,0,0,OW,0,B8,[],0,0,0,0,0,Ra,0,B8,[],0,0,0,0,["c",A5J(AMd),"T",A5H(AZo),"I",A5H(AMF),"b1",A5H(AMt)],D4,0,B8,[],0,0,0,0,["c",A5J(AWM),"n",A5H(AOi),"b1",A5H(AL_),"T",A5H(A0V),"I",A5H(ANZ)],MD,
0,D4,[],0,0,0,0,["n",A5H(APb)],AEN,0,Cc,[],0,0,0,0,["bz",A5I(AX8)],EF,0,Cc,[],0,0,0,0,["bz",A5I(V7),"b1",A5H(ARo)],XR,0,B8,[],0,0,0,0,["T",A5H(AQa),"c",A5J(ALu),"b1",A5H(AVI),"I",A5H(AS8)],EM,0,Cc,[],0,0,0,0,["b_",A5G(AXW),"bz",A5I(AOB),"cq",A5J(ANL),"cA",A5K(APo),"b1",A5H(AS0)],AHr,0,Cc,[],0,0,0,0,["bz",A5I(AUu)],AEa,0,Cc,[],0,0,0,0,["bz",A5I(ALC)],FU,0,B8,[],0,0,0,0,["T",A5H(A2f),"c",A5J(AQ_),"b1",A5H(APu),"I",A5H(AZ2)],Vk,0,FU,[],0,0,0,0,0,ABe,0,FU,[],0,0,0,0,0,V4,0,C1,[],0,0,0,0,["c",A5J(AWd)],Yu,0,C1,[],
0,0,0,0,["c",A5J(AYN)],GE,0,C1,[],0,0,0,0,["c",A5J(A0T),"T",A5H(A1N)],Qz,0,GE,[],0,0,0,0,["c",A5J(APk),"T",A5H(AY3)],Gn,0,C1,[],0,0,0,0,["c",A5J(A2S)],Pb,0,Gn,[],0,0,0,0,["c",A5J(AOQ)],RP,0,C1,[],0,0,0,0,["c",A5J(ATP)],Y_,0,GE,[],0,0,0,0,["c",A5J(AMG)],TA,0,Gn,[],0,0,0,0,["c",A5J(AU8)],RQ,0,Em,[],0,0,0,0,["c",A5J(A2I),"cq",A5J(ASK)],XB,0,Em,[],0,0,0,0,["c",A5J(ARp),"cq",A5J(ALw)],Fz,0,B,[],1,0,0,0,0,AD9,0,Dc,[],0,0,0,0,["c",A5J(AL3)],UL,0,E6,[],0,0,0,0,["c",A5J(AQA)],X2,0,FQ,[],0,0,0,0,["c",A5J(A0x)],Y$,0,Dc,
[],0,0,0,0,["c",A5J(ARl)],ABp,0,E6,[],0,0,0,0,["c",A5J(AL9)],RF,0,FQ,[],0,0,0,0,["c",A5J(A0M)],Le,0,BS,[],4,0,0,0,["c",A5J(AYk),"I",A5H(AXN)],AE8,0,BS,[],0,0,0,0,["c",A5J(AVx),"I",A5H(AVH)],Xy,0,BS,[],0,0,0,0,["c",A5J(APd),"I",A5H(AUc)],Vd,0,BS,[],4,0,0,0,["c",A5J(AZP),"I",A5H(AV8)],AC4,0,BS,[],0,0,0,0,["c",A5J(AZm),"I",A5H(AUt)],WL,0,BS,[],0,0,0,0,["c",A5J(AV3),"I",A5H(AOo)],AHc,0,B8,[],0,0,0,0,["c",A5J(ATS),"T",A5H(AVK),"iV",A5G(AY9),"I",A5H(AVJ)],AES,0,B8,[],4,0,0,0,["c",A5J(AZf),"T",A5H(A0o),"iV",A5G(ALi),
"I",A5H(AT4)],AKL,0,BS,[],4,0,0,0,["c",A5J(APy),"I",A5H(AW9)],AJS,0,BS,[],0,0,0,0,["c",A5J(AQ6),"I",A5H(AW3)]]);
$rt_metadata([AH0,0,BS,[],0,0,0,0,["c",A5J(AXJ),"I",A5H(AM5)],Ic,0,B8,[],0,0,0,0,["c",A5J(AL5),"T",A5H(AZX),"I",A5H(AR5)],AKR,0,Ic,[],0,0,0,0,["c",A5J(AM9),"cq",A5J(ATd),"cA",A5K(ALS),"b1",A5H(AYI)],AJc,0,Ic,[],0,0,0,0,["c",A5J(AP0)],PX,0,GS,[JG],0,3,0,0,["pL",A5K(AN_),"o_",A5J(AVA),"j0",A5H(AVW),"p3",A5I(A04)],ZH,0,Cc,[],0,0,0,0,["bz",A5I(ANj),"cq",A5J(AVv),"cA",A5K(AXc),"b1",A5H(AOG)],AD_,0,Cc,[],0,0,0,0,["bz",A5I(AP7)],Pe,0,Cc,[],0,0,0,0,["bz",A5I(A0y)],Hj,0,B,[],4,0,0,ASd,0,Wa,0,Cc,[],0,0,0,0,["bz",A5I(ASs)],NO,
0,B8,[],0,0,0,0,["T",A5H(AZt),"c",A5J(AV9),"cq",A5J(AOE),"cA",A5K(AWw),"b1",A5H(ALR),"I",A5H(ASU)],NW,0,B8,[],0,0,0,0,["T",A5H(AVV),"c",A5J(ALy),"cq",A5J(AZE),"cA",A5K(ASo),"b1",A5H(ANk),"I",A5H(AZK)],Ef,0,Cc,[],0,0,0,0,["bz",A5I(AZ$),"cq",A5J(AYW),"cA",A5K(AML),"b1",A5H(AZ4)],ACf,0,Fz,[],0,0,0,0,["iP",A5H(AMQ),"Ai",A5I(AR2)],ACg,0,Fz,[],0,0,0,0,["iP",A5H(A0N),"Ai",A5I(ATC)],AGC,0,B,[],0,0,0,0,0,AEm,0,B,[],0,0,0,0,0,NM,0,Bf,[],0,0,0,0,["F",A5G(AJi)],M$,0,Bf,[],0,0,0,0,["F",A5G(AJO)],AGw,0,Bf,[],0,0,0,0,["F",
A5G(A0r)],AGR,0,Bf,[],0,0,0,0,["F",A5G(ASX)],AGT,0,Bf,[],0,0,0,0,["F",A5G(ANQ)],NI,0,Bf,[],0,0,0,0,["F",A5G(AEV)],LI,0,NI,[],0,0,0,0,["F",A5G(AFp)],AHR,0,Bf,[],0,0,0,0,["F",A5G(AXr)],OC,0,LI,[],0,0,0,0,["F",A5G(AHY)],AJu,0,OC,[],0,0,0,0,["F",A5G(AQn)],AFT,0,Bf,[],0,0,0,0,["F",A5G(AWl)],AE4,0,Bf,[],0,0,0,0,["F",A5G(AQj)],AIK,0,Bf,[],0,0,0,0,["F",A5G(ATF)],AKA,0,Bf,[],0,0,0,0,["F",A5G(AY6)],AHU,0,Bf,[],0,0,0,0,["F",A5G(AUA)],AKi,0,Bf,[],0,0,0,0,["F",A5G(AOW)],AGn,0,Bf,[],0,0,0,0,["F",A5G(AR_)],AG6,0,Bf,[],0,0,
0,0,["F",A5G(AWj)],AEy,0,Bf,[],0,0,0,0,["F",A5G(ANw)],AH7,0,Bf,[],0,0,0,0,["F",A5G(A14)],AKp,0,Bf,[],0,0,0,0,["F",A5G(AUv)],AGM,0,Bf,[],0,0,0,0,["F",A5G(APz)],AI4,0,Bf,[],0,0,0,0,["F",A5G(AND)],AFV,0,Bf,[],0,0,0,0,["F",A5G(AXe)],AHB,0,Bf,[],0,0,0,0,["F",A5G(AYe)],AKu,0,Bf,[],0,0,0,0,["F",A5G(AS9)],AFz,0,Bf,[],0,0,0,0,["F",A5G(ARH)],AFe,0,Bf,[],0,0,0,0,["F",A5G(AQO)],AHS,0,Bf,[],0,0,0,0,["F",A5G(A0j)],KB,0,Bf,[],0,0,0,0,["F",A5G(AFU)],AKI,0,KB,[],0,0,0,0,["F",A5G(AQG)],AJz,0,NM,[],0,0,0,0,["F",A5G(AVs)],AFc,
0,M$,[],0,0,0,0,["F",A5G(AOy)]]);
$rt_metadata([AIN,0,Bf,[],0,0,0,0,["F",A5G(APO)],AIY,0,Bf,[],0,0,0,0,["F",A5G(ATu)],AJn,0,Bf,[],0,0,0,0,["F",A5G(AW2)],AJv,0,Bf,[],0,0,0,0,["F",A5G(ALo)],AIQ,0,B,[],4,0,0,0,0,AEM,0,B,[],4,3,0,0,0,WO,0,B,[],0,3,0,0,0,AGH,0,B,[],0,3,0,0,0,AI_,0,B,[],4,3,0,0,0,Mt,0,Bu,[],0,3,0,0,0,Y7,0,B,[X],0,3,0,0,["g",A5H(AYj)],Y6,0,B,[X],0,3,0,0,["g",A5H(ATM)],AIE,0,B,[D$],0,3,0,0,0,Sl,0,B,[X],0,3,0,0,["g",A5H(AW8)],RJ,0,B,[X],0,3,0,0,["g",A5H(AMZ)],ACa,0,B,[D$],0,0,0,0,["H",A5H(ANU)],ABz,0,B,[V],0,3,0,0,["f",A5G(A1a)],ABC,
0,B,[X],0,3,0,0,0,ABE,0,B,[X],0,3,0,0,["g",A5H(A1R)],KH,0,B,[],3,3,0,0,0,PI,0,B,[KH],0,0,0,0,["t1",A5H(AZZ),"xq",A5H(AXz),"ws",A5G(ASt)],AA4,0,B,[X],0,3,0,0,0,R2,0,B,[X],0,3,0,0,0,RT,0,B,[V],0,3,0,0,["f",A5G(AQ$)],UP,0,Z,[],0,0,0,0,["n",A5H(ANW)],UN,0,Z,[],0,0,0,0,["n",A5H(AUQ)],P8,0,Z,[],0,0,0,0,["n",A5H(APF),"cN",A5G(AXg)],XH,0,Z,[],0,0,0,0,["n",A5H(A0b)],XF,0,Z,[],0,0,0,0,["n",A5H(ASr)],XG,0,Z,[],0,0,0,0,["n",A5H(AYv)],XK,0,Z,[],0,0,0,0,["n",A5H(AWD)],XM,0,Z,[],0,0,0,0,["n",A5H(ALj)],XI,0,Z,[],0,0,0,0,["n",
A5H(AOt)],XJ,0,Z,[],0,0,0,0,["n",A5H(AP_)],XN,0,Z,[],0,0,0,0,["n",A5H(ATg)],XO,0,Z,[],0,0,0,0,["n",A5H(AWf)],P7,0,Z,[],0,0,0,0,["n",A5H(A22)],Qp,0,Z,[],0,0,0,0,["n",A5H(AOw)],P5,0,Z,[],0,0,0,0,["n",A5H(ANb)],P6,0,Z,[],0,0,0,0,["n",A5H(AW6)],P_,0,Z,[],0,0,0,0,["n",A5H(APf)],P4,0,Z,[],0,0,0,0,["n",A5H(A1d)],P9,0,Z,[],0,0,0,0,["n",A5H(AVC)],P$,0,Z,[],0,0,0,0,["n",A5H(ARB)],L$,0,B,[],3,3,0,0,0,AAf,0,B,[L$],4,3,0,0,0,AJB,0,B,[Hg],0,3,0,0,0,Da,0,B,[],3,3,0,AGV,0,Cz,0,CI,[],12,3,0,AGh,0,D1,0,B,[],3,3,0,AU6,0]);
$rt_metadata([ACz,0,B,[],0,3,0,0,0,O9,0,HS,[],0,0,0,0,["cq",A5J(AOd),"cA",A5K(A2R),"gy",A5G(AM2)],Q8,0,Bu,[],0,3,0,0,0,Vh,0,Bu,[],0,3,0,0,0,TT,0,Gd,[],0,3,0,0,0,Q2,0,Gd,[],0,3,0,0,0,Vf,0,B,[Ce],0,3,0,0,["bh",A5H(AXd)],Vg,0,B,[Ce],0,3,0,0,["bh",A5H(AVB)],AB6,0,B,[],0,3,0,0,0,ADA,0,B,[X],0,3,0,0,["g",A5H(A0c)],AEL,0,B,[],3,3,0,0,0,ACm,0,B,[Ce],0,3,0,0,["bh",A5H(ARJ)],ACo,0,B,[Ce],0,3,0,0,["bh",A5H(AQV)],ACq,0,B,[Ce],0,0,0,0,["bh",A5H(ARQ)],YI,0,B,[V],0,3,0,0,0,AAJ,0,B,[KH],0,0,0,0,["t1",A5H(A1p),"xq",A5H(ATe),
"ws",A5G(A1L)],AB9,0,B,[L$],0,0,0,0,0,To,0,B,[Ce],0,3,0,0,["bh",A5H(AYo)],AAd,0,B,[V],0,3,0,0,["f",A5G(A2P)],Xr,0,B,[V],0,3,0,0,["f",A5G(ARM)],Xs,0,B,[V],0,3,0,0,["f",A5G(APv)],Yy,0,B,[V],0,3,0,0,["f",A5G(A1O)],Wc,0,B,[V],0,3,0,0,["f",A5G(ASM)],Wd,0,B,[V],0,3,0,0,["f",A5G(AVD)],AAU,0,B,[V],0,3,0,0,["f",A5G(AXZ)],ZA,0,B,[X],0,3,0,0,["g",A5H(A1g)],AAL,0,Z,[],0,0,0,0,["n",A5H(ATk)],Wk,0,Z,[],0,0,0,0,["n",A5H(AVq)],R4,0,Z,[],0,0,0,0,["n",A5H(AL7)],R3,0,Z,[],0,0,0,0,["n",A5H(AW0)],U3,0,Z,[],0,0,0,0,["n",A5H(AO7)],XZ,
0,Z,[],0,0,0,0,["n",A5H(A1J)],PU,0,Z,[],0,0,0,0,["n",A5H(ARg)],Zi,0,Z,[],0,0,0,0,["n",A5H(ASc)],Wg,0,Z,[],0,0,0,0,["n",A5H(A2F)],Wi,0,Z,[],0,0,0,0,["n",A5H(ANm)],Py,0,Z,[],0,0,0,0,["n",A5H(ATr)],Yg,0,Z,[],0,0,0,0,["n",A5H(AYD)],Yn,0,Z,[],0,0,0,0,["n",A5H(AZW)],AA$,0,Z,[],0,0,0,0,["n",A5H(A1w)],AAg,0,Z,[],0,0,0,0,["n",A5H(ATL)],O1,0,Z,[],0,0,0,0,["n",A5H(ANg)],Mi,0,Z,[],0,0,0,0,["n",A5H(ARh)],ZO,0,Mi,[],0,0,0,0,["n",A5H(A0W)],ADz,0,B,[BT],3,3,0,0,0,YN,0,B,[ADz],0,3,0,0,["It",A5G(APU)],Td,0,B,[X],0,3,0,0,["g",
A5H(AWL)],ZZ,0,B,[KY],0,0,0,0,["rN",A5I(AMp),"zI",A5H(APD),"xB",A5H(AUe),"uQ",A5H(AUl)],AF7,0,B,[BT],3,3,0,0,0,ABO,0,B,[V],0,3,0,0,["f",A5G(AM0)]]);
$rt_metadata([RE,0,B,[V],0,3,0,0,["f",A5G(A16)],AIq,0,B,[],0,0,0,0,0,AD7,0,B,[V],0,3,0,0,["f",A5G(AXY)],ABv,0,B,[X],0,3,0,0,["g",A5H(ATN)],ABu,0,B,[X],0,3,0,0,["g",A5H(AUq)]]);
function $rt_array(cls,data){this.WN=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","java","cpp","js","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",", lineHeight = ",
", caretHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel","ns-resize","ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile",
"JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize","File is too large: "," name: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ",
"clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","","codicon.pixel.size = ","w = ","Window 1","Window ","Open project...","request new model, file = ","request in progress ","Project root","Select left...","Select right...","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ",
"callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown",
"onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","Open project ...","new folder diff window","new file diff window","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",
", b = ","jsToWasm2: a = ","#4B6EAF","#787878","onEnter item ","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ","trying to display with unknown screen size and dpr","/First lines parsed in ","/File structure parsed in "," readClipboardText: ",
" writeClipboardText \'","\' ok","newAction must be non-null","onPopupClosed"," error: ","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst "," onPastePlainText: ","showOpenFilePicker -> ","dir: ","Folder ","ClassFile ","Expected "," ints to write, but "," written","open file ","Int","Iter","VP","Resolve","Rep","No definition or usages","fileHandle = "," - project view"," ints to read, but "," read","fib(",") result = ",") time = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs",
"readClipboardText error: ","Unexpected type: ","Unexpected ref node type: ","Current Version: ","Last Parsed Version: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase",
"javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement",
"Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures",
"OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters",
"CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A",
"VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","  sub dir: ","  file: ","complete","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1",
"#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = ","open dir = ","opening file ... ","folderOpened ","Error fetching file "]);
BK.prototype.toString=function(){return $rt_ustr(this);};
BK.prototype.valueOf=BK.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AMJ(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CS=Long_add;var JK=Long_sub;var Ci=Long_mul;var AGG=Long_div;var AUM=Long_rem;var A3n=Long_or;var Df=Long_and;var A9A=Long_xor;var HP=Long_shl;var A4I=Long_shr;var Gb=Long_shru;var A9B=Long_compare;var II=Long_eq;var A9C=Long_ne;var A3k=Long_lt;var ANH=Long_le;var A9D=Long_gt;var A3j=Long_ge;var A9E=Long_not;var A4T=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A4U);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ABg.prototype;c.f=c.bh;c=ABh.prototype;c.f=c.bh;c=ABf.prototype;c.f=c.bh;c=WB.prototype;c.f=c.bh;c=AJy.prototype;c.get=c.Lu;Object.defineProperty(c,"length",{get:c.RS});c=AIe.prototype;c.createEntityReference=c.N7;c.getElementById=c.Qn;c.createTextNode=c.P7;c.hasChildNodes=c.O9;c.querySelectorAll=c.NO;c.removeChild=c.RE;c.cloneNode=c.Gh;c.createComment=c.SO;c.insertBefore=c.Oo;c.getElementsByTagNameNS=c.RQ;c.hasAttributes=c.IT;c.normalize=c.L0;c.hasChildNodesJS=c.LT;c.getElementsByTagName
=c.Lt;c.appendChild=c.MX;c.createAttributeNS=c.QH;c.dispatchEvent=c.LF;c.replaceChild=c.GL;c.createElementNS=c.HR;c.createCDATASection=c.KN;c.querySelector=c.IS;c.createElement=c.Ra;c.isSupported=c.RI;c.importNode=c.Oy;c.removeEventListener=c.HN;c.createAttribute=c.LG;c.createDocumentFragment=c.FD;c.createProcessingInstruction=c.N1;c.addEventListener=c.J7;Object.defineProperty(c,"nodeName",{get:c.MW});Object.defineProperty(c,"documentElement",{get:c.Ix});Object.defineProperty(c,"childNodes",{get:c.Kv});Object.defineProperty(c,
"prefix",{get:c.OE,set:c.SZ});Object.defineProperty(c,"implementation",{get:c.K8});Object.defineProperty(c,"textContent",{get:c.ST,set:c.P5});Object.defineProperty(c,"parentNode",{get:c.Qk});Object.defineProperty(c,"nextSibling",{get:c.In});Object.defineProperty(c,"nodeType",{get:c.Rp});Object.defineProperty(c,"doctype",{get:c.Pn});Object.defineProperty(c,"localName",{get:c.R$});Object.defineProperty(c,"nodeValue",{get:c.H7,set:c.SG});Object.defineProperty(c,"firstChild",{get:c.LB});Object.defineProperty(c,
"lastChild",{get:c.Kd});Object.defineProperty(c,"previousSibling",{get:c.MI});Object.defineProperty(c,"namespaceURI",{get:c.G3});Object.defineProperty(c,"attributes",{get:c.OL});Object.defineProperty(c,"ownerDocument",{get:c.G$});c=Pz.prototype;c.f=c.bh;c=AIH.prototype;c.removeEventListener=c.Ha;c.dispatchEvent=c.Ot;c.addEventListener=c.JF;c=T8.prototype;c.onAnimationFrame=c.IU;c=T7.prototype;c.f=c.BM;c=T5.prototype;c.handleEvent=c.cv;c=AAc.prototype;c.f=c.bh;c=ACS.prototype;c.handleEvent=c.cv;c=ACT.prototype;c.handleEvent
=c.cv;c=ACU.prototype;c.handleEvent=c.cv;c=ACV.prototype;c.handleEvent=c.cv;c=ACW.prototype;c.handleEvent=c.cv;c=ACX.prototype;c.handleEvent=c.cv;c=ACY.prototype;c.handleEvent=c.cv;c=ACZ.prototype;c.handleEvent=c.cv;c=AC0.prototype;c.handleEvent=c.cv;c=AC1.prototype;c.handleEvent=c.cv;c=VI.prototype;c.handleEvent=c.cv;c=VJ.prototype;c.handleEvent=c.cv;c=VK.prototype;c.handleEvent=c.cv;c=VL.prototype;c.handleEvent=c.cv;c=ABL.prototype;c.handleEvent=c.cv;c=ADM.prototype;c.f=c.bh;c=ADN.prototype;c.f=c.bh;c=WK.prototype;c.f
=c.bh;c=WJ.prototype;c.f=c.bh;c=WH.prototype;c.f=c.bh;c=WG.prototype;c.f=c.bh;c=Pt.prototype;c.accept=c.LM;c=OT.prototype;c.f=c.bh;c=OV.prototype;c.f=c.bh;c=OU.prototype;c.f=c.bh;c=X7.prototype;c.f=c.BM;c=X5.prototype;c.f=c.BM;c=Z3.prototype;c.f=c.bh;c=ACw.prototype;c.f=c.bh;c=OS.prototype;c.f=c.bh;c=ADF.prototype;c.f=c.bh;c=ADE.prototype;c.f=c.bh;c=AC6.prototype;c.f=c.bh;c=AC5.prototype;c.f=c.bh;c=Te.prototype;c.handleEvent=c.cv;c=Vf.prototype;c.f=c.bh;c=Vg.prototype;c.f=c.bh;c=ACm.prototype;c.f=c.bh;c=ACo.prototype;c.f
=c.bh;c=ACq.prototype;c.f=c.bh;c=To.prototype;c.f=c.bh;c=YN.prototype;c.onTimer=c.It;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);