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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.hx=f;}
function $rt_cls(cls){return AGi(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gr(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b7.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AVf(t);}
function $rt_throwableCause(t){return AVm(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A1$());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A1_(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A2a());}
function $rt_throwCCE(){}
var A=Object.create(null);
var K=$rt_throw;var BG=$rt_compare;var A2b=$rt_nullCheck;var F=$rt_cls;var Q=$rt_createArray;var Jn=$rt_isInstance;var A2c=$rt_nativeThread;var A2d=$rt_suspending;var A2e=$rt_resuming;var A2f=$rt_invalidPointer;var C=$rt_s;var Bq=$rt_eraseClinit;var Bb=$rt_imul;var EA=$rt_wrapException;var A2g=$rt_checkBounds;var A2h=$rt_checkUpperBound;var A2i=$rt_checkLowerBound;var A2j=$rt_wrapFunction0;var A2k=$rt_wrapFunction1;var A2l=$rt_wrapFunction2;var A2m=$rt_wrapFunction3;var A2n=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AE4=$rt_createCharArrayFromData;var A0N=$rt_createByteArrayFromData;var A15=$rt_createShortArrayFromData;var DD=$rt_createIntArrayFromData;var A2o=$rt_createBooleanArrayFromData;var A2p=$rt_createFloatArrayFromData;var A2q=$rt_createDoubleArrayFromData;var ADA=$rt_createLongArrayFromData;var A18=$rt_createBooleanArray;var DE=$rt_createByteArray;var A2r=$rt_createShortArray;var B1=$rt_createCharArray;var BJ=$rt_createIntArray;var A2s=$rt_createLongArray;var AJu=$rt_createFloatArray;var A2t
=$rt_createDoubleArray;var BG=$rt_compare;var A2u=$rt_castToClass;var A2v=$rt_castToInterface;var A2w=Long_toNumber;var Bp=Long_fromInt;var A2x=Long_fromNumber;var D=Long_create;var Fr=Long_ZERO;var A2y=Long_hi;var GM=Long_lo;
function B(){this.$id$=0;}
function BI(a){return AGi(a.constructor);}
function ARx(a,b){return a!==b?0:1;}
function ALE(a){var b,c,d,e,f,g,h,i,j;b=JT(a);if(!b)c=C(0);else{d=(((32-PB(b)|0)+4|0)-1|0)/4|0;e=B1(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=HW((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gr(e);}j=new L;N(j);H(H(j,C(1)),c);return M(j);}
function JT(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AQI(a){var b,c,d;if(!Jn(a,En)&&a.constructor.$meta.item===null){b=new YD;X(b);K(b);}b=AJC(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Ug(){var a=this;B.call(a);a.zi=0;a.px=null;}
function A03(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AHy();ACP();AFE();AGP();AI4();AEj();AFQ();AHA();ACH();AEK();AIa();ACM();AGw();AGy();AFl();AEr();AEO();AH0();AFT();ADM();AEQ();AGV();AGG();AF0();ADe();AIN();c=(AC3()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Rp(C(2),C(3));else{d=new Ug;BQ(d);e=new WK;e.wN=d;f=new OO;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<3){i=new $rt_globals.Worker(c);j=new PG;j.sS=i;j.sT=g;j.sU=3;j.sV=e;j.sN
=f;k=Bl(j,"f");i.onmessage=k;h=h+1|0;}l=I(MM,[E3(C(4),C(5),300),E3(C(6),C(7),300),E3(C(8),C(5),400),E3(C(9),C(7),400),E3(C(10),C(5),600),E3(C(11),C(7),600),E3(C(12),C(5),700),E3(C(13),C(7),700)]);m=Q(MM,1);m.data[0]=AWl(C(14),FM(C(15),C(16)),C(5),400);b=(MI(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.v3;f=c.uG;i=new L;N(i);BL(H(H(i,C(17)),f),41);i=M(i);f=c.uB;o=c.sy;c=AOh($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n=n+1|0;}e=$rt_globals.Promise.all(g);BQ(d);c
=new WL;c.x3=d;g=new WJ;e.then(Bl(c,"f"),Bl(g,"f"));}}
function AGZ(b){var c,d,e,f,g,h,i,j;c=new Vz;d=new YC;d.sr=c;c.vz=d;d=new Yz;d.zA=c;c.o4=d;e=new YA;e.vt=c;c.yd=new $rt_globals.ResizeObserver(Bl(e,"f"));d=new Yy;d.rJ=c;c.qc=d;c.j6=1;d=new U$;d.lz=new XB;e=new Rn;e.CF=null;e.ll=A2z;d.tc=e;BQ(e);f=new Vf;f.vQ=e;d.zk=f;d.yi=b;g=b.length;h=0;while(h<g){e=b[h];i=new Vg;i.uw=d;i.uv=h;f=Bl(i,"f");e.onmessage=f;e=b[h];f=AFk();e.postMessage(f);h=h+1|0;}d.h9=0;d.m0=BJ(g);c.yI=d;c.p3=(Ek()).getElementById("canvasDiv");d=AC3();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.d3=d;c.p3.appendChild(d);b=c.d3;d=ATq(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Rp(C(2),C(18));else{c.nZ=A0z(c.d3,c.o4);b=new Yr;j=c.o4;AHx(b,e,new Xp,1,2.25,0.625);b.CC=new Xo;b.BU=j;c.gZ=b;AUJ(c.yd,c.d3,AJK());d=$rt_globals.window;j=c.qc;d.addEventListener("resize",Bl(j,"handleEvent"));j=new NS;b=c.gZ;d=c.nZ.cr;j.H=b;j.o=d;j.cd=c;d=$rt_str($rt_globals.window.location.hash);if(Bo(C(19),d)){b=new ON;DR(b,j);d=$rt_globals.fetch("test.wasm");j
=new OY;d=d.then(Bl(j,"f"));j=new OX;e=d.then(Bl(j,"f"));j=new OV;d=new OU;e.then(Bl(j,"f"),Bl(d,"f"));}else b=Bo(C(20),d)?A0q(j):(AWO(J(d)<=0?C(21):Ed(d,1))).bj(j);c.f6=b;Wf(c);}c.d3.focus();}
var OI=G(0);
var NY=G(0);
function ZH(){var a=this;B.call(a);a.mv=null;a.gI=null;}
function AGi(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new ZH;c.gI=b;d=c;b.classObject=d;}return c;}
function IQ(a){if(a.mv===null)a.mv=$rt_str(a.gI.$meta.name);return a.mv;}
function IA(a){return a.gI.$meta.primitive?1:0;}
function IU(a){return AGi(a.gI.$meta.item);}
var ADS=G();
function Bl(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fk(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ADv=G();
function AJC(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function AGl(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(AGl(d[e],c))return 1;e=e+1|0;}return 0;}
function G6(){var a=this;B.call(a);a.iP=null;a.nb=null;a.kT=0;a.lq=0;}
function A2A(){var a=new G6();X(a);return a;}
function A2B(a){var b=new G6();Bm(b,a);return b;}
function X(a){a.kT=1;a.lq=1;}
function Bm(a,b){a.kT=1;a.lq=1;a.iP=b;}
function ANR(a){return a;}
function AVf(a){return a.iP;}
function AVm(a){var b;b=a.nb;if(b===a)b=null;return b;}
var Em=G(G6);
function A2C(){var a=new Em();AGK(a);return a;}
function AGK(a){X(a);}
var Bt=G(Em);
function A1_(a){var b=new Bt();AXI(b,a);return b;}
function AXI(a,b){Bm(a,b);}
var AFo=G(Bt);
var CV=G(0);
var CH=G(0);
var Jy=G(0);
function BC(){var a=this;B.call(a);a.b7=null;a.jq=0;}
var A2D=null;var A2E=null;var A2F=null;function Fg(){Fg=Bq(BC);AW7();}
function AOQ(){var a=new BC();ACD(a);return a;}
function Gr(a){var b=new BC();H7(b,a);return b;}
function Ev(a,b,c){var d=new BC();ND(d,a,b,c);return d;}
function ACD(a){Fg();a.b7=A2D;}
function H7(a,b){Fg();ND(a,b,0,b.data.length);}
function ND(a,b,c,d){var e;Fg();e=B1(d);a.b7=e;DC(b,c,e,0,d);}
function Nw(b){var c;Fg();c=AOQ();c.b7=b;return c;}
function P(a,b){var c,d;if(b>=0){c=a.b7.data;if(b<c.length)return c[b];}d=new HT;X(d);K(d);}
function J(a){return a.b7.data.length;}
function Fe(a){return a.b7.data.length?0:1;}
function Sq(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=J(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){DC(a.b7,b,d,e,c);return;}}g=new BD;X(g);K(g);}
function Xi(a,b,c){var d,e,f;if((c+J(b)|0)>J(a))return 0;d=0;while(d<J(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Lx(a,b){if(a===b)return 1;return Xi(a,b,0);}
function D_(a,b){var c,d,e,f;if(a===b)return 1;if(J(b)>J(a))return 0;c=0;d=J(a)-J(b)|0;while(d<J(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function I4(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.b7.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=IS(b);h=Jr(b);while(true){f=a.b7.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function H$(a,b,c){var d,e,f,g,h;d=Bc(c,J(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.b7.data[d]==e)break;d=d+(-1)|0;}return d;}f=IS(b);g=Jr(b);while(true){if(d<1)return (-1);h=a.b7.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function R9(a,b,c){var d,e,f;d=Bd(0,c);e=J(a)-J(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=J(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function ATn(a,b){return R9(a,b,0);}
function Sl(a,b,c){var d,e;d=Bc(c,J(a)-J(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=J(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AEW(a,b){return Sl(a,b,J(a));}
function Cr(a,b,c){var d,e;d=BG(b,c);if(d>0){e=new BD;X(e);K(e);}if(!d){Fg();return A2E;}if(!b&&c==J(a))return a;return Ev(a.b7,b,c-b|0);}
function Ed(a,b){return Cr(a,b,J(a));}
function SF(a,b,c){return Cr(a,b,c);}
function FM(a,b){var c,d,e,f,g,h;if(Fe(b))return a;if(Fe(a))return b;c=B1(J(a)+J(b)|0);d=c.data;e=0;f=0;while(f<J(a)){g=e+1|0;d[e]=P(a,f);f=f+1|0;e=g;}g=0;while(g<J(b)){h=e+1|0;d[e]=P(b,g);g=g+1|0;e=h;}return Nw(c);}
function X_(a,b,c){var d,e,f,g;d=new L;N(d);e=J(a)-J(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=J(b)){H(d,c);f=f+(J(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}BL(d,P(a,f));}f=f+1|0;}H(d,Ed(a,f));return M(d);}
function Uv(a){var b,c;b=0;c=J(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return Cr(a,b,c+1|0);}
function ALC(a){return a;}
function FV(a){var b,c,d,e,f;b=a.b7.data;c=B1(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function CE(b){Fg();return b===null?C(22):b.cQ();}
function LD(b){var c,d;Fg();c=new BC;d=B1(1);d.data[0]=b;H7(c,d);return c;}
function Db(b){var c;Fg();c=new L;N(c);return M(U(c,b));}
function Bo(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(J(c)!=J(a))return 0;d=0;while(d<J(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function I5(a){var b,c,d,e;a:{if(!a.jq){b=a.b7.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.jq=(31*a.jq|0)+e|0;d=d+1|0;}}}return a.jq;}
function M6(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Hc;Bm(b,C(23));K(b);}A2G=1;d=new TM;d.mc=Q(CZ,10);d.g8=(-1);d.fk=(-1);d.bB=(-1);e=new Hi;e.fh=1;e.bN=b;e.be=B1(J(b)+2|0);DC(FV(b),0,e.be,0,J(b));f=e.be.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.ve=g;e.gR=0;FD(e);FD(e);d.k=e;d.dL=0;d.np=ABA(d,(-1),0,null);if(!Dp(d.k)){b=new Jt;h=d.k;Ka(b,C(21),h.bN,h.dr);K(b);}if(d.qL)d.np.eT();b=BM();h=new Vn;h.j5=(-1);h.mB=(-1);h.AO=d;h.x9=d.np;h.kq=a;h.j5=0;g=J(a);h.mB=g;e=new Yb;i=h.j5;j=d.g8;k=d.fk+1|0;l=d.bB
+1|0;e.iY=(-1);m=j+1|0;e.r0=m;e.d2=BJ(m*2|0);f=BJ(l);e.le=f;Ic(f,(-1));if(k>0)e.nc=BJ(k);Ic(e.d2,(-1));ABn(e,a,i,g);h.cF=e;e.fZ=1;n=0;m=0;if(!J(a)){f=Q(BC,1);f.data[0]=C(21);}else{while(true){l=J(h.kq);if(!ACU(h))l=h.mB;e=h.cF;if(e.eN>=0&&AED(e)==1){e=h.cF;e.eN=JQ(e);if(JQ(h.cF)==AGO(h.cF)){e=h.cF;e.eN=e.eN+1|0;}g=h.cF.eN;g=g<=l&&N8(h,g)?1:0;}else g=N8(h,h.j5);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BF(b,SF(a,m,AIB(h)));m=AEn(h);n=g;}a:{BF(b,SF(a,m,J(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(J(Bw(b,
g)))break a;EJ(b,g);}}if(g<0)g=0;f=Iu(b,Q(BC,g));}return f;}
function AN9(a,b){var c,d,e;a:{b=b;if(a===b)c=0;else{d=Bc(J(a),J(b));e=0;while(true){if(e>=d){c=J(a)-J(b)|0;break a;}c=P(a,e)-P(b,e)|0;if(c)break;e=e+1|0;}}}return c;}
function AW7(){A2D=B1(0);A2E=AOQ();A2F=new VX;}
var Fc=G(G6);
var HX=G(Fc);
var AEV=G(HX);
var D$=G();
function GN(){D$.call(this);this.bs=0;}
var A2H=null;var A2I=null;function AWI(a){var b=new GN();AD_(b,a);return b;}
function AD_(a,b){a.bs=b;}
function Mj(b){return (Pc(A1V(20),b,10)).cQ();}
function Kp(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dn;Bm(b,C(24));K(b);}d=J(b);if(0==d){b=new Dn;Bm(b,C(25));K(b);}if(c>=2&&c<=36){a:{e=0;switch(P(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dn;X(b);K(b);}b:{c:{while(f<d){h=f+1|0;i=Rh(P(b,f));if(i<0){j=new Dn;k=Cr(b,0,d);b=new L;N(b);H(H(b,C(26)),k);Bm(j,M(b));K(j);}if(i>=c){j=new Dn;l=Cr(b,0,d);b=new L;N(b);H(H(U(H(b,C(27)),c),C(28)),l);Bm(j,M(b));K(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dn;k=Cr(b,0,d);b=new L;N(b);H(H(b,C(29)),k);Bm(j,M(b));K(j);}b=new Dn;j=new L;N(j);U(H(j,C(30)),c);Bm(b,M(j));K(b);}
function CT(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A2I===null){A2I=Q(GN,256);c=0;while(true){d=A2I.data;if(c>=d.length)break a;d[c]=AWI(c-128|0);c=c+1|0;}}}return A2I.data[b+128|0];}return AWI(b);}
function AYu(a,b){if(a===b)return 1;return b instanceof GN&&b.bs==a.bs?1:0;}
function PB(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function I7(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function AQC(a,b){b=b;return BG(a.bs,b.bs);}
function AHy(){A2H=F($rt_intcls());}
function GT(){var a=this;B.call(a);a.B=null;a.K=0;}
function A2J(){var a=new GT();N(a);return a;}
function A1V(a){var b=new GT();Gy(b,a);return b;}
function N(a){Gy(a,16);}
function Gy(a,b){a.B=B1(b);}
function Pc(a,b,c){return AFb(a,a.K,b,c);}
function AFb(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cl(a,b,b+1|0);else{Cl(a,b,b+2|0);f=a.B.data;g=b+1|0;f[b]=45;b=g;}a.B.data[b]=HW(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cl(a,b,b+i|0);if(e)e=b;else{f=a.B.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.B.data;b=e+1|0;f[e]=HW($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AF$(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cl(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cl(a,b,b+8|0);d=b;}else{Cl(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A2K;AF1(c,f);d=f.mJ;g=f.mo;h=f.q4;i=1;j=1;if(h)j=2;k=9;l=AWq(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cl(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.B.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.B.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.B.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.B.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AD7(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BG(c,0.0);if(!d){if(1.0/c===Infinity){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cl(a,b,b+4|0);e=a.B.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cl(a,b,b+3|0);e=a.B.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cl(a,b,b+8|0);d=b;}else{Cl(a,b,b+9|0);e=a.B.data;d=b+1|0;e[b]=45;}e=a.B.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A2L;AFf(c,f);g=f.nr;h=f.l1;i=f.qE;j=1;k=1;if(i)k=2;l=18;m=ATR(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cl(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.B.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.B.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(ANk(p,Fr))d=0;else{d=GM(AG2(g,p));g=AJG(g,p);}e=a.B.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AG2(p,Bp(10));q=q+1|0;}if(h){e=a.B.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AWq(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ATR(b){var c,d,e,f,g;c=Bp(1);d=0;e=16;f=A2M.data;g=f.length-1|0;while(g>=0){if(Io(AJG(b,Ce(c,f[g])),Fr)){d=d|e;c=Ce(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function BL(a,b){return a.oB(a.K,b);}
function AA_(a,b,c){Cl(a,b,b+1|0);a.B.data[b]=c;return a;}
function Kv(a,b){var c,d;c=a.B.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.B=Kl(a.B,d);}
function M(a){return Ev(a.B,0,a.K);}
function AAU(a,b,c,d){return a.nY(a.K,b,c,d);}
function Oz(a,b,c,d,e){var f,g,h,i;Cl(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.B.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function I$(a,b){return a.mR(b,0,b.data.length);}
function Cl(a,b,c){var d,e,f,g;d=a.K;e=d-b|0;a.jd((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.B.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.K=a.K+(c-b|0)|0;}
var IE=G(0);
var L=G(GT);
function MS(){var a=new L();AYe(a);return a;}
function AYe(a){N(a);}
function H(a,b){var c;c=a.K;if(b===null)b=C(22);Nz(a,c,b);return a;}
function B0(a,b){Nz(a,a.K,b);return a;}
function U(a,b){Pc(a,b,10);return a;}
function GU(a,b){var c,d,e,f,g,h,i,j;c=a.K;d=1;if(A0f(b,Fr)){d=0;b=A0Z(b);}a:{if(Du(b,Bp(10))<0){if(d)Cl(a,c,c+1|0);else{Cl(a,c,c+2|0);e=a.B.data;f=c+1|0;e[c]=45;c=f;}a.B.data[c]=HW(GM(b),10);}else{g=1;h=Bp(1);i=Dh(Bp(-1),Bp(10));b:{while(true){j=Ce(h,Bp(10));if(Du(j,b)>0){j=h;break b;}g=g+1|0;if(Du(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cl(a,c,c+g|0);if(d)f=c;else{e=a.B.data;f=c+1|0;e[c]=45;}while(true){if(Io(j,Fr))break a;e=a.B.data;c=f+1|0;e[f]=HW(GM((Dh(b,j))),10);b=ACT(b,j);j=Dh(j,Bp(10));f=c;}}}return a;}
function E$(a,b){AF$(a,a.K,b);return a;}
function ACv(a,b){BL(a,b);return a;}
function Ib(a,b){Nz(a,a.K,!b?C(31):C(32));return a;}
function AIg(a,b,c){var d,e,f,g,h,i;d=BG(b,c);if(d<=0){e=a.K;if(b<=e){if(d){f=e-c|0;a.K=e-(c-b|0)|0;g=0;while(g<f){h=a.B.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new HT;X(i);K(i);}
function Zr(a,b){var c,d,e,f;if(b>=0){c=a.K;if(b<c){c=c-1|0;a.K=c;while(b<c){d=a.B.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new HT;X(f);K(f);}
function AQu(a,b,c,d,e){Oz(a,b,c,d,e);return a;}
function AM3(a,b,c,d){AAU(a,b,c,d);return a;}
function ADf(a){return a.K;}
function D7(a){return M(a);}
function AQE(a,b){Kv(a,b);}
function ARd(a,b,c){AA_(a,b,c);return a;}
function Nz(a,b,c){var d,e,f;if(b>=0&&b<=a.K){a:{if(c===null)c=C(22);else if(Fe(c))break a;Kv(a,a.K+J(c)|0);d=a.K-1|0;while(d>=b){a.B.data[d+J(c)|0]=a.B.data[d];d=d+(-1)|0;}a.K=a.K+J(c)|0;d=0;while(d<J(c)){e=a.B.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new HT;X(c);K(c);}
var EM=G(HX);
var AGp=G(EM);
function A2N(a){var b=new AGp();ALP(b,a);return b;}
function ALP(a,b){Bm(a,b);}
var AEI=G(EM);
function A2O(a){var b=new AEI();AL7(b,a);return b;}
function AL7(a,b){Bm(a,b);}
var Ww=G(0);
var Dx=G(0);
function Cx(b,c){if(b!==null)b.dd();return c;}
var Rb=G(0);
function Jm(){var a=this;B.call(a);a.hQ=0;a.ob=0;a.m9=0;}
var A2P=0;function Er(a){A2P=A2P-1|0;}
function GB(a,b,c){J5(a,AD2(b,c,400,0));}
function Ll(a,b){return LL(a,b,0.875);}
function LL(a,b,c){return DX(a,b)+c|0;}
function Ua(){var a=this;Jm.call(a);a.jm=null;a.c5=null;a.pN=null;}
function ET(a){var b,c,d;b=a.c5;c=a.ob;d=a.m9;b.clearRect(0.0,0.0,c,d);}
function UL(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.c5;d="center";c.textAlign=d;break a;case 2:c=a.c5;d="right";c.textAlign=d;break a;default:break a;}d=a.c5;c="left";d.textAlign=c;}}
function Ck(a,b){J5(a,b.qo);}
function J5(a,b){var c;if(a.pN!==b){c=a.c5;a.pN=b;c.font=b;}}
function AD2(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function BS(a,b,c,d){var e,f,g;e=a.c5;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function DX(a,b){var c;c=$rt_ustr(b);return a.c5.measureText(c).width;}
function Je(a,b,c,d){var e,f;e=a.c5;f=$rt_ustr(Gr(AE4([35,He(b/16|0),He(b%16|0),He(c/16|0),He(c%16|0),He(d/16|0),He(d%16|0)])));e.fillStyle=f;}
function AK4(){return {alpha:false};}
var ACQ=G();
var AHO=G();
function BV(b,c){if(b===c)return 1;return b!==null?b.bH(c):c!==null?0:1;}
function BQ(b){if(b!==null)return b;b=new Hc;Bm(b,C(21));K(b);}
var BO=G(0);
function K_(b){return b;}
var BY=G(0);
function WK(){B.call(this);this.wN=null;}
function AYP(a,b){var c;c=a.wN;c.px=b;if(c.zi)AGZ(b);}
var AGu=G();
function K3(b,c){return b.data[c];}
var AFC=G();
var ACW=G(0);
function E3(b,c,d){return AWl(C(33),FM(C(15),b),c,d);}
var AHn=G(0);
var AHk=G(0);
function MI(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C$(b,f+g|0);DC(c,0,d,f,g);return d;}
function LY(b,c,d){DC(b,c,d,0,d.data.length);return d;}
function TZ(b,c,d){var e;if(c>0)DC(b,0,d,0,c);e=d.data.length;if(c<e)DC(b,c+1|0,d,c,e-c|0);return d;}
function AEP(b,c,d,e){var f;if(c>0)DC(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)DC(b,d,e,c,f-d|0);}return e;}
function ER(b){var c;c=new Y_;c.kB=b;return c;}
function ADW(b,c){if(b.data.length!=c)b=C$(b,c);return b;}
function AHj(b,c,d){var e;e=c.data.length;if(e==d)c=C$(c,e*2|0);c.data[d]=b;return c;}
function X2(b,c,d){var e;e=c.data.length;if(e==d)c=M5(c,e*2|0);c.data[d]=b;return c;}
function M4(b){return Kl(b,b.data.length);}
function MM(){var a=this;B.call(a);a.v3=null;a.uG=null;a.uB=null;a.sy=0;}
function AWl(a,b,c,d){var e=new MM();AU2(e,a,b,c,d);return e;}
function AU2(a,b,c,d,e){a.v3=b;a.uG=c;a.uB=d;a.sy=e;}
var ADO=G();
function AOh(b,c){return {style:b,weight:c};}
function WL(){B.call(this);this.x3=null;}
function AI$(a,b){var c,d,e;c=a.x3;d=0;while(d<b.length){e=b[d];(Ek()).fonts.add(e);d=d+1|0;}c.zi=1;b=c.px;if(b!==null)AGZ(b);}
var WJ=G();
function AXc(a,b){$rt_globals.console.info("font load error "+b);}
var Mi=G();
var A2Q=null;var A2R=null;function Bz(){if(A2Q===null)A2Q=ASd(A2S,0);return A2Q;}
function EL(){if(A2R===null)A2R=ASd(A2T,0);return A2R;}
function A0S(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mo(b)&&(e+f|0)<=Mo(d)){a:{b:{if(b!==d){g=IU(BI(b));h=IU(BI(d));if(g!==null&&h!==null){if(g===h)break b;if(!IA(g)&&!IA(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.gI;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&AGl(n.constructor,o)?1:0)){LB(b,c,d,e,j);b=new Js;X(b);K(b);}j=j+1|0;k=m;}LB(b,c,d,e,f);return;}if(!IA(g))break a;if(IA(h))break b;else break a;}b=new Js;X(b);K(b);}}LB(b,c,
d,e,f);return;}b=new Js;X(b);K(b);}b=new BD;X(b);K(b);}d=new Hc;Bm(d,C(34));K(d);}
function DC(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Mo(b)&&(e+f|0)<=Mo(d)){LB(b,c,d,e,f);return;}b=new BD;X(b);K(b);}
function LB(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EK(){return Long_fromNumber(new Date().getTime());}
function AGR(){return A2x($rt_globals.performance.now()*1000000.0);}
var AHg=G();
var AEo=G();
function Rp(b,c){var d,e,f;d=(Ek()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(Ek()).getElementById($rt_ustr(b)).appendChild(d);}
function AC3(){return (Ek()).createElement("canvas");}
function AIo(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ATq(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AI3=G();
var OO=G();
function AS3(a,b){var c;c=new Bt;Bm(c,$rt_str(b.message));K(c);}
var AHC=G();
function Fo(b){return $rt_str(b);}
var AC8=G();
function Kl(b,c){var d,e,f,g;b=b.data;d=B1(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function M5(b,c){var d,e,f,g;b=b.data;d=DE(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JI(b,c){var d,e,f,g;b=b.data;d=BJ(c);e=d.data;f=Bc(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C$(b,c){var d,e,f,g;d=b.data;e=AGN(IU(BI(b)),c);f=Bc(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AD0(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));H(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AGH(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));U(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AVA(b){var c,d,e;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));E$(c,e[d]);d=d+1|0;}B0(c,C(37));return M(c);}
function AZj(b){var c,d,e,f;if(b===null)return C(22);c=new L;N(c);B0(c,C(35));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)B0(c,C(36));f=e[d];AD7(c,c.K,f);d=d+1|0;}B0(c,C(37));return M(c);}
function Ic(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BR;X(f);K(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ADB(b,c,d,e){var f,g;if(c>d){e=new BR;X(e);K(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function AEl(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A2z;e=Q(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bc(j,h+f|0);l=h+(2*f|0)|0;m=Bc(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.y9(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AF_(b,c){return WS(b,0,b.data.length,c);}
function WS(b,c,d,e){var f,g,h,i,j;f=BG(c,d);if(f>0){g=new BR;X(g);K(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var YO=G(0);
var AFp=G();
function AOV(a,b){return a.F3(b);}
function ARt(a){return a.LS();}
var AFa=G();
var HS=G(0);
var VX=G();
var BD=G(Bt);
var AF6=G();
function Mo(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A2U());}return b.data.length;}
function AGN(b,c){if(b===null){b=new Hc;X(b);K(b);}if(b===F($rt_voidcls())){b=new BR;X(b);K(b);}if(c>=0)return AXT(b.gI,c);b=new ACe;X(b);K(b);}
function AXT(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Hc=G(Bt);
var Js=G(Bt);
function Dd(){B.call(this);this.mm=0;}
var A2V=null;var A2W=null;var A2X=null;var A2Y=null;var A2Z=null;var A20=null;var A21=null;var A22=null;var A23=null;var A24=null;function AYM(a){var b=new Dd();AEy(b,a);return b;}
function AEy(a,b){a.mm=b;}
function PH(b){var c,d;c=A20.data;if(b>=c.length)return AYM(b);d=c[b];if(d===null){d=AYM(b);A20.data[b]=d;}return d;}
function AAx(b){var c,d;c=new BC;d=B1(1);d.data[0]=b;H7(c,d);return c;}
function Nc(b){return b>=65536&&b<=1114111?1:0;}
function CN(b){return (b&64512)!=55296?0:1;}
function Da(b){return (b&64512)!=56320?0:1;}
function Ng(b){return !CN(b)&&!Da(b)?0:1;}
function H5(b,c){return CN(b)&&Da(c)?1:0;}
function EP(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function IS(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jr(b){return (56320|b&1023)&65535;}
function Ft(b){return Hb(b)&65535;}
function Hb(b){if(A2Y===null){if(A21===null)A21=AGF();A2Y=AES((A21.value!==null?$rt_str(A21.value):null));}return Vt(A2Y,b);}
function EV(b){return G_(b)&65535;}
function G_(b){if(A2X===null){if(A22===null)A22=AHz();A2X=AES((A22.value!==null?$rt_str(A22.value):null));}return Vt(A2X,b);}
function Vt(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BG(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function XG(b,c){if(c>=2&&c<=36){b=Rh(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Rh(b){var c,d,e,f,g,h,i,j,k,l;if(A2W===null){if(A23===null)A23=AEY();c=(A23.value!==null?$rt_str(A23.value):null);d=AVn(FV(c));e=KE(d);f=BJ(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+OJ(d)|0;j=j+OJ(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A2W=f;}g=A2W.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BG(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function HW(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function G3(b){var c;if(b<65536){c=B1(1);c.data[0]=b&65535;return c;}return AE4([IS(b),Jr(b)]);}
function CA(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Ng(b&65535))return 19;if(A2Z===null){if(A24===null)A24=AIU();d=(A24.value!==null?$rt_str(A24.value):null);e=Q(O5,16384);f=e.data;g=DE(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<J(d)){m=Ly(P(d,l));if(m==64){l=l+1|0;m=Ly(P(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Ly(P(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Ly(P(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AN4(k,k+i|0,M5(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AN4(k,k+i|0,M5(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A2Z=C$(e,j);}e=A2Z.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.uZ)o=p+1|0;else{c=d.sO;if(b>=c)return d.s7.data[b-c|0];c=p-1|0;}}return 0;}
function Km(b){a:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function GW(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CA(b)!=16?0:1;}
function RW(b){switch(CA(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function TP(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return RW(b);}return 1;}
function ACP(){A2V=F($rt_charcls());A20=Q(Dd,128);}
function AGF(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AHz(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AEY(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AIU(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var NO=G(0);
var Vs=G(0);
var EE=G(0);
var ACV=G();
function Ek(){return $rt_globals.window.document;}
function ASt(a){return a.Jv();}
function AWe(a,b){return a.Mz($rt_str(b));}
function AVY(a,b){a.HO($rt_str(b));}
function AMx(a,b){return a.Gq($rt_str(b));}
function AJB(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AMV(a){return a.MD();}
function AV9(a,b,c){return a.KF($rt_str(b),$rt_str(c));}
function AP$(a,b,c,d){a.BC($rt_str(b),Fk(c,"handleEvent"),d?1:0);}
function AKP(a){return a.Iq();}
function ATU(a){return !!a.Nd();}
function AW6(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ARZ(a){return a.Ig();}
function APB(a,b){a.Ks($rt_str(b));}
function ASv(a){return !!a.Hr();}
function AZm(a){return a.MP();}
function AQ0(a){return $rt_ustr(a.DJ());}
function AKD(a,b){return a.IJ(b?1:0);}
function AYw(a){return a.Nc();}
function APx(a,b,c){return a.NP($rt_str(b),$rt_str(c));}
function ARM(a,b,c){return a.Ho(b,c?1:0);}
function AXY(a,b,c){return !!a.LV($rt_str(b),$rt_str(c));}
function AJE(a){return a.Ki();}
function APc(a){return $rt_ustr(a.Oz());}
function AM9(a,b){return !!a.B7(b);}
function AOj(a,b){return a.PB($rt_str(b));}
function APU(a,b,c){return a.Js($rt_str(b),$rt_str(c));}
function AQ7(a){return a.ET();}
function AKS(a,b){return a.MK($rt_str(b));}
function AOi(a){return $rt_ustr(a.D5());}
function AUv(a){a.Hk();}
function AJk(a,b){return a.NU($rt_str(b));}
function AWS(a,b){return a.H0($rt_str(b));}
function ALr(a,b){return a.Hj($rt_str(b));}
function AWV(a){return $rt_ustr(a.E$());}
function ALF(a,b,c){return a.JA(b,c);}
function AUh(a,b){return a.DI(b);}
function AU$(a){return a.Lr();}
function ATh(a,b,c){a.A8($rt_str(b),Fk(c,"handleEvent"));}
function ASK(a,b,c){return a.E_(b,c);}
function AWM(a){return !!a.LQ();}
function AYK(a,b){return a.Jm($rt_str(b));}
function ASP(a,b,c,d){a.Aw($rt_str(b),Fk(c,"handleEvent"),d?1:0);}
function AMZ(a){return a.Lw();}
function AL4(a,b,c){return a.IH($rt_str(b),$rt_str(c));}
function AKg(a){return $rt_ustr(a.FA());}
function AYp(a){return a.ED();}
function ATd(a){return a.EZ();}
function AKc(a){return a.LW();}
function ATi(a,b,c){a.B1($rt_str(b),Fk(c,"handleEvent"));}
function AML(a,b){return a.Oi(b);}
function AOE(a,b){a.D_($rt_str(b));}
function AVi(a){return $rt_ustr(a.DS());}
function PG(){var a=this;B.call(a);a.sS=null;a.sT=null;a.sU=0;a.sV=null;a.sN=null;}
function AUg(a,b){var c,d,e,f,g;c=a.sS;d=a.sT;e=a.sU;f=a.sV;g=a.sN;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AE8=G();
function AVN(b){return Math.exp(b);}
function ACX(b){return Math.log(b);}
function JN(b,c){return ARC(b,c);}
function ARC(b,c){return Math.pow(b,c);}
function DP(){return AY3();}
function AY3(){return Math.random();}
function Bc(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AX0(b,c){return Math.max(b,c);}
function ADu(b,c){return AX0(b,c);}
function N4(b){if(b<0)b= -b|0;return b;}
function AOK(b){return Math.abs(b);}
var RJ=G(0);
var T8=G(0);
var TW=G(0);
var Ws=G(0);
var AAW=G(0);
var XI=G(0);
var ADP=G();
function ATm(a,b,c){a.B1($rt_str(b),Fk(c,"handleEvent"));}
function AQA(a,b,c){a.A8($rt_str(b),Fk(c,"handleEvent"));}
function APe(a,b,c,d){a.Aw($rt_str(b),Fk(c,"handleEvent"),d?1:0);}
function AK0(a,b){return !!a.B7(b);}
function ANd(a,b,c,d){a.BC($rt_str(b),Fk(c,"handleEvent"),d?1:0);}
var BR=G(Bt);
var ACe=G(Bt);
var HT=G(BD);
var AEa=G();
function AFk(){return "ping";}
function AIR(b){return b===AFk()?1:0;}
var Tg=G(0);
var QU=G(0);
function Vz(){var a=this;B.call(a);a.vz=null;a.o4=null;a.p3=null;a.d3=null;a.yd=null;a.qc=null;a.nZ=null;a.gZ=null;a.j6=0;a.Bw=0;a.uU=null;a.f6=null;a.yI=null;}
function Ph(a,b){var c;c=Ek();b=$rt_ustr(b);c.title=b;}
function Wf(a){a.Bw=$rt_globals.requestAnimationFrame(Bl(a.vz,"onAnimationFrame"));}
function Ia(a){a.j6=1;}
function Wd(a,b,c){var d,e;a.nZ.dX=BH(b,c);d=a.d3;e=b;d.width=e;d=a.d3;e=c;d.height=e;d=a.gZ;V(d.c$,b,c);e=d.W;d=d.c$;b=d.b;c=d.a;e.viewport(0,0,b,c);a.f6.bR(a.gZ.c$,LC(a));a.f6.bg();}
function T$(a,b){var c,d,e;c=a.uU;d=a.d3;if(BV(b,c))b=c;else{e=d.style;if(b!==null&&J(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.uU=b;}
function Kj(a){return $rt_globals.performance.now()/1000.0;}
function LC(a){return $rt_globals.window.devicePixelRatio;}
function Za(a,b){var c,d,e;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AIv(b,1);else{c=new Z8;d=$rt_globals.window.showDirectoryPicker();e=new Z7;e.sY=b;e.sZ=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function MW(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AIv(b,0);else{c=new AA$;d=$rt_globals.window.showOpenFilePicker();e=new AA9;e.tB=b;e.tA=c;d.then(Bl(e,"f"),Bl(c,"f"));}}
function CP(a,b,c,d){var e,f,g,h;e=a.yI;f=e.h9;if(f>0){g=e.m0.data;f=f-1|0;e.h9=f;Xc(e,b,c,d,g[f]);}else{h=e.lz;e=new Z9;e.wQ=b;e.xy=c;e.we=d;b=new Xh;b.rj=e;c=h.lx;b.xl=c;if(c===null)h.mQ=b;else c.wh=b;h.lx=b;h.b0=h.b0+1|0;h.jw=h.jw+1|0;}}
function TJ(a,b,c){var d,e;if(!MD()){b=new Bt;Bm(b,C(38));c.h(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new U0;e.us=b;b=AIY(c);d.then(Bl(e,"f"),Bl(b,"f"));}}
function Xk(a,b,c,d){var e,f,g;if(!MD()){b=new Bt;Bm(b,C(38));d.h(b);}else{e=$rt_globals.navigator.clipboard;f=FV(b);A1s();b=A25;g=f.data;g=b.decode(g);b=e.writeText(g);e=new Y8;e.ys=c;c=AIY(d);b.then(Bl(e,"f"),Bl(c,"f"));}}
function ABl(a){return MD()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AIY(b){var c;c=new Ob;c.wE=b;return c;}
var BK=G(0);
var AFy=G();
var Be=G(0);
var AFz=G();
var T0=G(0);
function YC(){B.call(this);this.sr=null;}
function APw(a,b){var c,d;c=b;b=a.sr;if(!(!b.f6.cG(c/1000.0)&&!b.j6)){d=b.gZ.c$;if(Bb(d.b,d.a)){b.j6=0;b.f6.bg();}}Wf(b);}
function Yz(){B.call(this);this.zA=null;}
function Do(a){Ia(a.zA);}
var SY=G(0);
function YA(){B.call(this);this.vt=null;}
function ANm(a,b,c){var d,e,f,g;c=a.vt;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.d3){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=LC(c);Wd(c,Gq(f.width*g),Gq(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];Wd(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AHU=G();
function AJK(){return {box:'device-pixel-content-box'};}
function AUJ(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var Cw=G(0);
function Yy(){B.call(this);this.rJ=null;}
function AUs(a,b){b=a.rJ;b.f6.bR(b.gZ.c$,LC(b));b.f6.bg();}
function U$(){var a=this;B.call(a);a.lz=null;a.yi=null;a.tc=null;a.m0=null;a.qy=0;a.h9=0;a.zk=null;}
function Xc(a,b,c,d,e){var f,g,h,i,j;d=d.data;f=a.qy+1|0;a.qy=f;g=a.tc;h=CT(f);g.jh=Ne(g,g.jh,h);h=XO(g,h);NT(h,b);NT(h,b);g.lr=g.lr+1|0;b=a.yi[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=new $rt_globals.Array();f=0;while(f<i){c=d[f];if(c instanceof BC)g=$rt_ustr(c);else if(Jn(c,$rt_arraycls($rt_bytecls())))g=c.data.buffer;else if(Jn(c,$rt_arraycls($rt_charcls())))g=c.data.buffer;else if(Jn(c,$rt_arraycls($rt_intcls())))g=c.data.buffer;else{if(!(c instanceof L3)){b=new BR;c
=IQ(BI(c));g=new L;N(g);H(H(g,C(39)),c);Bm(b,M(g));K(b);}c=c;g=c.hM;if(g===null)g=c.fT;}e=f+2|0;e;h[e]=g;if(g instanceof $rt_globals.ArrayBuffer?1:0)j.push(g);f=f+1|0;}b.postMessage(h,j);}
var Zt=G(0);
function AI_(a,b){var c;c=a.ca();while(c.cy()){b.h(c.b2());}}
var GD=G(0);
function X4(a){var b,c;b=new U4;c=new SO;c.sM=a;b.xd=c;return b;}
function AQb(a,b){var c,d;c=a.ca();d=0;while(c.cy()){if(b.T(c.b2())){c.m3();d=1;}}return d;}
var Fh=G();
function FO(a){return a.cX()?0:1;}
function Iu(a,b){var c,d,e,f,g,h;c=b.data;d=a.m;e=c.length;if(e<d)b=AGN(IU(BI(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B8(a);while(B_(f)){g=b.data;h=e+1|0;g[e]=Ca(f);e=h;}return b;}
function AVI(a,b){var c;c=a.ca();while(c.cy()){if(BV(c.b2(),b)){c.m3();return 1;}}return 0;}
function Hj(a,b){var c,d;c=0;d=b.ca();while(d.cy()){if(!a.vL(d.b2()))continue;c=1;}return c;}
var LG=G(0);
var J2=G(0);
function EZ(){Fh.call(this);this.b0=0;}
function AUP(a,b){a.o3(a.cX(),b);return 1;}
function B8(a){var b;b=new Pn;b.hR=a;b.oK=a.b0;b.kf=a.cX();b.g2=(-1);return b;}
function ATJ(a,b,c){var d,e;if(b>=0&&b<=a.cX()){if(c.en())return 0;d=c.ca();while(d.cy()){e=b+1|0;a.o3(b,d.b2());b=e;}return 1;}c=new BR;X(c);K(c);}
function AWJ(a,b,c){c=new Ea;X(c);K(c);}
function Lg(a,b){var c,d;c=a.cX();d=0;while(true){if(d>=c)return (-1);if(BV(b,a.nK(d)))break;d=d+1|0;}return d;}
function ASf(a,b){var c,d;if(!Jn(b,J2))return 0;c=b;if(a.m!=c.m)return 0;d=0;while(d<c.m){if(!BV(Bw(a,d),Bw(c,d)))return 0;d=d+1|0;}return 1;}
var M9=G(EZ);
var NZ=G(0);
var ABo=G(0);
function XB(){var a=this;M9.call(a);a.mQ=null;a.lx=null;a.jw=0;}
var L1=G(0);
function D8(){var a=this;B.call(a);a.mq=null;a.mz=null;}
var En=G(0);
var ABk=G(0);
var OG=G(0);
function Rn(){var a=this;D8.call(a);a.jh=null;a.ll=null;a.CF=null;a.lr=0;}
function AH6(a,b){var c;c=XO(a,b);if(c===null)return null;a.jh=K4(a,a.jh,b);a.lr=a.lr+1|0;return c.j9;}
function XO(a,b){var c,d;c=a.jh;while(true){if(c===null)return null;d=Ko(a.ll,b,c.kH);if(!d)break;c=d>=0?c.b8:c.bT;}return c;}
function Ne(a,b,c){var d,e;if(b===null){b=new Ki;d=null;b.kH=c;b.j9=d;b.gb=1;b.gp=1;return b;}e=Ko(a.ll,c,b.kH);if(!e)return b;if(e>=0)b.b8=Ne(a,b.b8,c);else b.bT=Ne(a,b.bT,c);EF(b);return KD(b);}
function K4(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Ko(a.ll,c,b.kH);if(d<0)b.bT=K4(a,b.bT,c);else if(d>0)b.b8=K4(a,b.b8,c);else{e=b.b8;if(e===null)return b.bT;f=b.bT;g=Q(Ki,e.gb).data;h=0;while(true){b=e.bT;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b8;while(h>0){h=h+(-1)|0;j=g[h];j.bT=b;EF(j);b=KD(j);}e.b8=b;e.bT=f;EF(e);b=e;}EF(b);return KD(b);}
function Vf(){B.call(this);this.vQ=null;}
function Vg(){var a=this;B.call(a);a.uw=null;a.uv=0;}
function AJD(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.uw;d=a.uv;AIR(b.data);e=c.lz;f=e.mQ;if(f===null)g=null;else{g=f.wh;e.mQ=g;if(g!==null)g.xl=null;else e.lx=null;e.jw=e.jw-1|0;e.b0=e.b0+1|0;g=f.rj;}if(g!==null)Xc(c,g.wQ,g.xy,g.we,d);else{h=c.m0.data;i=c.h9;c.h9=i+1|0;h[i]=d;}c=c.zk;b=b.data;if(!AIR(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BR;X(b);K(b);}if(b.length<1){b=new BR;AGK(b);K(b);}e=CT(b[0]);c=AH6(c.vQ,e);h=Q(B,b.length-1|0);j=h.data;k=0;i=j.length;while(k<i){l=k+1|0;e=b[l];j[k]=(typeof e==='string'
?1:0)?Fo(K_(e)):(e instanceof $rt_globals.ArrayBuffer?1:0)?A0p(K_(e)):(e instanceof $rt_globals.File?1:0)?AGd(null,K_(e)):!(e instanceof $rt_globals.FileSystemFileHandle?1:0)?null:AGd(K_(e),null);k=l;}c.h(h);}}
function AD5(){var a=this;B.call(a);a.cr=null;a.im=null;a.BR=null;a.dX=null;}
function A0z(a,b){var c=new AD5();AWE(c,a,b);return c;}
function AWE(a,b,c){var d,e,f,g;a.dX=null;a.im=b;d=new Sk;d.bP=CQ(Q(Cm,0));d.o7=CQ(Q(Cm,0));d.br=CQ(Q(Cs,0));d.d7=CQ(Q(Eg,0));d.dZ=CQ(Q(D3,0));d.gg=CQ(Q(Fd,0));d.gU=CQ(Q(FH,0));d.lg=CQ(Q(Be,0));d.mj=CQ(Q(Be,0));d.dl=c;a.cr=d;e=$rt_globals.window;f=Q(Dx,14);g=f.data;d=new ZN;d.qF=a;g[0]=C2(a,b,C(40),d);d=new ZO;d.wb=a;g[1]=C2(a,b,C(41),d);d=new ZP;d.sd=a;g[2]=C2(a,b,C(42),d);d=new ZQ;d.zr=a;g[3]=C2(a,b,C(43),d);d=new ZR;d.vb=a;g[4]=C2(a,b,C(44),d);d=new ZS;d.re=a;g[5]=C2(a,b,C(45),d);d=new ZT;d.zP=a;g[6]=C2(a,
b,C(46),d);d=new ZU;d.vv=a;g[7]=C2(a,b,C(47),d);d=new ZV;d.ru=a;g[8]=C2(a,b,C(48),d);d=new ZW;d.yy=a;g[9]=C2(a,b,C(49),d);d=new ABR;d.xV=a;g[10]=C2(a,b,C(50),d);d=new ABS;d.wG=a;e.addEventListener("paste",Bl(d,"handleEvent"),!!1);g[11]=AAo(a,e,C(51),d);d=new ABT;d.pJ=a;g[12]=C2(a,e,C(52),d);d=new ABU;d.y2=a;g[13]=C2(a,e,C(53),d);c=new S7;c.A2=f;a.BR=c;e=new ABh;e.tf=b;b.onpointerdown=Bl(e,"f");e=new ABi;e.rR=b;b.onpointerup=Bl(e,"f");}
function OB(){return (Ek()).activeElement;}
function C2(a,b,c,d){b.addEventListener($rt_ustr(c),Bl(d,"handleEvent"));return AAo(a,b,c,d);}
function AAo(a,b,c,d){var e;e=new ST;e.AC=b;e.AF=c;e.AE=d;return e;}
function WM(a,b){var c;c=new XQ;c.zq=b;return c;}
function E2(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.im.getBoundingClientRect();e=BH(Gq((b.clientX-d.left)*c),Gq((b.clientY-d.top)*c));f=ARI(a.dX);d=new NM;Xm(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.i=e;d.Af=f;return d;}
function ABY(a,b,c){var d,e,f,g;d=new Rg;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;Xm(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.lY=0;d.d9=e;d.bl=f;d.iS=c;d.vC=g;return d;}
function DV(a,b){b.stopPropagation();b.preventDefault();}
function Mb(){var a=this;B.call(a);a.nn=null;a.ch=null;a.W=null;a.kJ=0;a.xj=null;a.A7=0;a.Ck=0;a.lu=null;a.la=null;a.CB=null;a.Cq=null;a.xh=null;a.qH=null;a.iR=null;a.hF=null;a.i9=null;a.CL=null;a.sz=null;a.c$=null;a.y$=null;a.nS=0;a.lP=0;a.oD=0;a.oj=0;a.jS=0;a.oy=null;a.oO=0.0;a.n2=0.0;}
function AHx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.c$=new Bh;a.nS=0;a.oy=new ZZ;a.nn=c;a.kJ=d;g=$rt_str(b.getParameter(7938));h=new L;N(h);H(H(h,C(54)),g);$rt_globals.console.info($rt_ustr(M(h)));a.W=b;a.ch=Kh(c,4,4,1);i=AJu(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B1(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new SV;Ie();c=A26;m.eU=b;m.hm=c;m.vJ=j.length/c.mN|0;m.y4
=l.length;n=b.createBuffer();m.p8=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.zt=null;n=b.createBuffer();m.yL=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sz=m;a.Ck=Lx(g,C(55));c=new SW;c.dP=b;a.xj=c;a.oO=e;a.n2=f;d=b.getParameter(3379);a.A7=d;c=new L;N(c);U(H(c,C(56)),d);$rt_globals.console.info($rt_ustr(M(c)));k=Q(C5,9);i=k.data;c=A0w(b);a.lu=c;i[0]=c;c=AZZ(b,C(57));a.la=c;i[1]=c;c=new TC;Hz(c,b,C(58),
C(59),A26);a.CB=c;i[2]=c;c=A1x(b);a.Cq=c;i[3]=c;c=new P0;ABy(c,b,C(60),C(61));a.xh=c;i[4]=c;c=A1P(b);a.qH=c;i[5]=c;c=A1H(b);a.iR=c;i[6]=c;c=A1q(b);a.hF=c;i[7]=c;c=A1r(b);a.i9=c;i[8]=c;a.CL=k;AAY(b,C(62));}
function Gu(a,b,c){return Ht(a,b,c,400,0);}
function GQ(a,b,c){return Kh(a.nn,b,c,0);}
function DQ(a,b,c,d){return Kh(a.nn,b,c,d);}
function EC(a,b){var c,d,e,f,g;c=a.W;d=b.bm;e=b.bq;f=b.bd;g=b.bD;c.clearColor(d,e,f,g);a.W.clear(16384);}
function B2(a,b){var c;if(b==a.lP)return b;if(!b)a.W.disable(3042);else{a.W.enable(3042);a.W.blendFuncSeparate(770,771,1,1);}c=a.lP;a.lP=b;return c;}
function LA(a,b,c){Mw(a,b.b,b.a,c);}
function Mw(a,b,c,d){var e,f;e=d.b;f=d.a;a.oj=1;a.jS=1;d=a.oy;d.u2=b;d.u4=c;d.u1=e;d.u0=f;Xn(a);}
function Gc(a){a.oj=0;a.jS=0;Xn(a);}
function Xn(a){var b,c,d,e,f,g;b=a.oD;c=a.oj;if(b!=c){a.oD=c;if(!c)a.W.disable(3089);else a.W.enable(3089);}if(a.oD&&a.jS){a.jS=0;d=a.W;e=a.oy;b=e.u2;c=a.c$.a-e.u4|0;f=e.u0;c=c-f|0;g=e.u1;d.scissor(b,c,g,f);}}
function FY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sz;c=a.nS;d=b.hm.wA;e=b.eU;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.eU;h=b.p8;e.bindBuffer(34962,h);i=b.hm.pb.data;g=i.length;j=0;while(j<g){k=i[j];l=b.eU;m=k.iy;n=k.fR;o=b.hm.mN*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.fR|0;j=j+1|0;}a:{e=b.zt;if(e!==null){c=0;b.eU.bindBuffer(34962,e);i=b.hm.uP.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.eU;j=e.iy;p=e.fR;m=e.sJ;n=b.hm.s_;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.fR|0;g=g+1|0;}}}q=b.yL;if(q===null){c=b.vJ;if(c>0)b.eU.drawArrays(4,0,c);}else{b.eU.bindBuffer(34963,q);k=b.eU;g=b.y4;k.drawElements(4,g,5123,0);}a.nS=d;}
function Bu(a,b,c,d,e){F1(a,a.lu);Go(a.lu,a.W,b,c,d,a.c$);d=a.lu;Fi(a.W,d.yp,e);FY(a);}
function ACh(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;F1(a,a.hF);Go(a.hF,a.W,b,c,d,a.c$);j=a.hF;d=a.W;k=j.ph;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.pg;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.hF;Fi(a.W,d.rd,i);FY(a);}
function MX(a,b,c,d,e,f,g,h){var i,j;F1(a,a.i9);Go(a.i9,a.W,b,c,d,a.c$);d=a.i9;i=a.W;j=d.vG;i.uniform2f(j,e,f);Fi(i,d.sw,g);d=a.i9;Fi(a.W,d.qb,h);FY(a);}
function DU(a,b,c,d,e,f,g,h,i){var j;j=!i?a.xh:a.qH;F1(a,j);AIb(j,a.W,!i?a.n2:a.oO);Go(j,a.W,b,c,d,a.c$);Ml(j,a.W,f);ACx(j,a.W,f,e);AF8(j,a.W,g,h);FY(a);}
function CS(a){var b,c;b=new H8;c=a.xj;b.fw=new Bh;b.eC=c;b.fJ=c.dP.createTexture();A27=A27+1|0;return b;}
function Ks(a,b){AAY(a.W,b);}
function F1(a,b){var c,d;if(b!==a.y$){c=a.W;d=b.bG;c.useProgram(d);a.y$=b;}}
function Yr(){var a=this;Mb.call(a);a.BU=null;a.CC=null;}
function Ht(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.ch;g=AD2(b,c,d,e);J5(f,g);h=f.c5.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=DX(f,C(63));m=DX(f,C(64));h=new L4;n=g;h.oM=b;h.rB=c;h.AV=d;h.Bt=e;h.db=i;h.er=j;h.AL=l;h.ou=k;h.qo=n;h.uK=CU(i);h.Cs=CU(h.er);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.AR=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(65);}h.AB=b;return h;}
function Ci(){B.call(this);this.D=null;}
function DR(a,b){a.D=b;}
function AYr(a,b){return 0;}
function Sk(){var a=this;B.call(a);a.bP=null;a.o7=null;a.br=null;a.d7=null;a.dZ=null;a.gg=null;a.gU=null;a.lg=null;a.mj=null;a.dl=null;a.iQ=null;a.rF=0;}
function WV(a,b){var c,d,e,f;Do(a.dl);c=(Cz(!b.iS?a.o7:a.bP)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].T(b);if(f)break;if(b.lY)break;e=e+1|0;}return f;}
function TD(a,b,c){var d,e,f;Do(a.dl);d=(Cz(a.gg)).data;e=d.length;f=0;while(f<e){if(d[f].hq(b,c))return 1;f=f+1|0;}return 0;}
function ZN(){B.call(this);this.qF=null;}
function ATL(a,b){var c;c=a.qF;if(WV(c.cr,ABY(c,b,1)))DV(c,b);}
function ZO(){B.call(this);this.wb=null;}
function AT3(a,b){var c;c=a.wb;if(WV(c.cr,ABY(c,b,0)))DV(c,b);}
function ZP(){B.call(this);this.sd=null;}
function ARU(a,b){var c,d,e,f,g,h,i;c=a.sd;if(c.dX!==null){a:{b:{d=E2(c,b);e=c.cr;Do(e.dl);f=e.iQ;if(f!==null)f.h(d);else{g=(Cz(e.br)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bz(d))break a;i=i+1|0;}}}}DV(c,b);}}
function ZQ(){B.call(this);this.zr=null;}
function AQ$(a,b){var c,d,e,f,g,h;c=a.zr;b.button;if(c.dX!==null)a:{d=E2(c,b);c=c.cr;e=b.button;Do(c.dl);if(c.iQ===null){f=(Cz(c.br)).data;g=f.length;h=0;while(h<g){b=f[h].bQ(d,e);if(b!==null){c.iQ=b;c.rF=e;break a;}h=h+1|0;}}}}
function ZR(){B.call(this);this.vb=null;}
function ARE(a,b){var c,d,e,f,g,h,i;c=a.vb;b.button;if(c.dX!==null){d=E2(c,b);e=c.cr;f=b.button;Do(e.dl);if(f==e.rF&&e.iQ!==null)e.iQ=null;g=(Cz(e.br)).data;h=g.length;i=0;a:{while(i<h){if(g[i].cH(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)DV(c,b);}}
function ZS(){B.call(this);this.re=null;}
function AUC(a,b){var c,d,e,f,g,h,i,j,k;c=a.re;if(c.dX!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cr;f=E2(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;Do(e.dl);i=(Cz(e.d7)).data;j=i.length;k=0;b:{while(k<j){if(i[k].c4(f,d,h))break b;k=k+1|0;}}DV(c,b);}}
function ZT(){B.call(this);this.zP=null;}
function APd(a,b){var c,d,e,f,g,h,i,j;c=a.zP;if(c.dX!==null){d=E2(c,b);e=c.cr;f=b.button;g=b.detail;Do(e.dl);h=(Cz(e.br)).data;i=h.length;j=0;a:{while(j<i){if(h[j].b6(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)DV(c,b);}}
function ZU(){B.call(this);this.vv=null;}
function AZb(a,b){var c,d,e,f,g,h,i;c=a.vv;if(c.dX!==null){d=E2(c,b);e=c.cr;Do(e.dl);f=(Cz(e.dZ)).data;g=f.length;h=0;a:{while(h<g){if(f[h].T(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)DV(c,b);}}
function ZV(){B.call(this);this.ru=null;}
function AOf(a,b){var c,d,e;b=a.ru.cr;c=(Cz(b.mj)).data;d=c.length;e=0;while(e<d){c[e].l();e=e+1|0;}Do(b.dl);}
function ZW(){B.call(this);this.yy=null;}
function AV1(a,b){var c,d,e;b=a.yy.cr;c=(Cz(b.lg)).data;d=c.length;e=0;while(e<d){c[e].l();e=e+1|0;}Do(b.dl);}
function ABR(){B.call(this);this.xV=null;}
function AYs(a,b){var c;c=a.xV;if(c.dX!==null)E2(c,b);}
function ABS(){B.call(this);this.wG=null;}
function ARr(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.wG;if(OB()===c.im){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(Cz(c.cr.gU)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].dn();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cr.dl;m=new Py;m.yS=k;m.yT=l;g.getAsString(Bl(m,"accept"));DV(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new L;N(l);H(H(H(H(l,C(66)),k),C(67)),g);$rt_globals.console.info($rt_ustr(M(l)));}e=e+1
|0;}}}
function ABT(){B.call(this);this.pJ=null;}
function AR1(a,b){var c;c=a.pJ;if(OB()===c.im&&TD(c.cr,WM(c,b),0))DV(c,b);}
function ABU(){B.call(this);this.y2=null;}
function AUk(a,b){var c;c=a.y2;if(OB()===c.im&&TD(c.cr,WM(c,b),1))DV(c,b);}
var W$=G(0);
var Xp=G();
function Kh(a,b,c,d){var e,f,g,h,i;e=new Ua;e.hQ=d;A2P=A2P+1|0;e.ob=b;e.m9=c;f=(Ek()).createElement("canvas");e.jm=f;g=b;f.width=g;h=e.jm;f=c;h.height=f;if(!d)g=e.jm.getContext("2d");else{i=e.jm;h=AK4();g=i.getContext("2d",h);}e.c5=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var Xo=G();
function AQi(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function NS(){var a=this;B.call(a);a.H=null;a.o=null;a.cd=null;}
var JY=G();
var A2z=null;function Ko(a,b,c){return b.lt(c);}
function AFE(){A2z=new JY;}
function AIe(){var a=this;B.call(a);a.iv=null;a.kp=null;a.ia=0;}
function CQ(a){var b=new AIe();AO9(b,a);return b;}
function AO9(a,b){a.iv=b;}
function Y(a,b){var c,d,e;c=a.ia;d=a.iv;if(c==d.data.length)a.iv=C$(d,c+4|0);d=a.iv.data;e=a.ia;a.ia=e+1|0;d[e]=b;a.kp=null;}
function Cz(a){var b;b=a.kp;if(!(b!==null&&b.data.length==a.ia))a.kp=C$(a.iv,a.ia);return a.kp;}
var Ep=G(0);
var Cm=G(0);
var Cs=G(0);
function AQn(a,b){return 0;}
function AXh(a,b,c){return null;}
function AJ$(a,b,c){return 0;}
function AUB(a,b,c,d){return 0;}
var Eg=G(0);
var D3=G(0);
var Fd=G(0);
var EB=G(0);
var FH=G(0);
function S7(){B.call(this);this.A2=null;}
function Bh(){var a=this;B.call(a);a.b=0;a.a=0;}
function BH(a,b){var c=new Bh();AD9(c,a,b);return c;}
function ARI(a){var b=new Bh();AMY(b,a);return b;}
function AD9(a,b,c){a.b=b;a.a=c;}
function AMY(a,b){a.b=b.b;a.a=b.a;}
function Co(a,b){a.b=b.b;a.a=b.a;}
function V(a,b,c){a.b=b;a.a=c;}
function ACj(a){var b,c,d;b=a.b;c=a.a;d=new L;N(d);U(H(U(H(d,C(68)),b),C(69)),c);return M(d);}
function AP5(a,b){var c;a:{b:{if(a!==b){if(BI(b)!==BI(a))break b;if(!I0(a,b))break b;}c=1;break a;}c=0;}return c;}
function I0(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function ZZ(){var a=this;B.call(a);a.u2=0;a.u4=0;a.u1=0;a.u0=0;}
var AHm=G();
var ADp=G(0);
function SW(){B.call(this);this.dP=null;}
function MC(){var a=this;B.call(a);a.bG=null;a.Cv=null;}
function AGc(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(70):C(71);g=$rt_str(b.getShaderInfoLog(e));h=new L;N(h);H(H(h,f),g);g=M(h);b.deleteShader(e);Br(Bz(),g);Br(EL(),C(72));Br(EL(),d);Br(EL(),C(72));b=new Bt;Bm(b,g);K(b);}
function C5(){var a=this;MC.call(a);a.rt=null;a.tl=null;a.n4=null;}
function A28(a,b,c,d){var e=new C5();Hz(e,a,b,c,d);return e;}
function Hz(a,b,c,d,e){var f,g,h,i,j,k;a.Cv=e;f=AGc(b,35633,c);d=AGc(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bG=g;h=e.vY.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bG;k=c.iy;c=c.tv;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bG;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AAY(b,C(73));a.n4=new Bh;c=a.bG;a.rt=b.getUniformLocation(c,"uResolution");c=a.bG;a.tl=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new L;N(c);H(H(c,C(74)),d);Bm(b,M(c));K(b);}
function AEi(a,b,c){var d,e,f;if(!I0(a.n4,c)){Co(a.n4,c);d=a.rt;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function Go(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.tl;b.uniform4f(e,i,l,h,j);AEi(a,b,f);}
function AHK(){C5.call(this);this.yp=null;}
function A0w(a){var b=new AHK();APO(b,a);return b;}
function APO(a,b){var c;Ie();Hz(a,b,C(58),C(75),A26);c=a.bG;a.yp=b.getUniformLocation(c,"uColor");}
function E1(){C5.call(this);this.u9=null;}
function AZZ(a,b){var c=new E1();WQ(c,a,b);return c;}
function A29(a,b,c){var d=new E1();WX(d,a,b,c);return d;}
function WQ(a,b,c){WX(a,b,C(58),c);}
function WX(a,b,c,d){Ie();Hz(a,b,c,d,A26);c=a.bG;a.u9=b.getUniformLocation(c,"sDiffuse");}
function Ml(a,b,c){var d;d=a.u9;b.uniform1i(d,0);b.activeTexture(33984);c=c.fJ;b.bindTexture(3553,c);}
var TC=G(C5);
function AFh(){E1.call(this);this.An=null;}
function A1x(a){var b=new AFh();ATK(b,a);return b;}
function ATK(a,b){var c;WQ(a,b,C(76));c=a.bG;a.An=b.getUniformLocation(c,"uContrast");}
function Gz(){var a=this;E1.call(a);a.sp=null;a.tL=null;a.vB=null;a.w0=null;a.pS=0.0;}
function A2$(a,b,c){var d=new Gz();ABy(d,a,b,c);return d;}
function ABy(a,b,c,d){WX(a,b,c,d);c=a.bG;a.sp=b.getUniformLocation(c,"uTexTransform");c=a.bG;a.tL=b.getUniformLocation(c,"uColor");c=a.bG;a.vB=b.getUniformLocation(c,"uBgColor");c=a.bG;a.w0=b.getUniformLocation(c,"uTextPow");}
function AIb(a,b,c){var d;if(a.pS!==c){a.pS=c;d=a.w0;b.uniform2f(d,c,0.0);}}
function AF8(a,b,c,d){Fi(b,a.tL,c);Fi(b,a.vB,d);}
function ACx(a,b,c,d){var e,f,g,h,i,j;c=c.fw;e=c.b;f=c.a;g=d.bm;h=e;g=g/h;i=d.bq;j=f;i=i/j;h=d.bd/h;j=d.bD/j;c=a.sp;b.uniform4f(c,g,i,h,j);}
var P0=G(Gz);
var AIE=G(Gz);
function A1P(a){var b=new AIE();ANy(b,a);return b;}
function ANy(a,b){ABy(a,b,C(60),C(77));}
function ADR(){var a=this;E1.call(a);a.zw=null;a.zs=null;a.tO=null;}
function A1H(a){var b=new ADR();ANB(b,a);return b;}
function ANB(a,b){var c,d;WQ(a,b,C(78));c=a.bG;a.zw=b.getUniformLocation(c,"uColorB");d=a.bG;a.zs=b.getUniformLocation(d,"uColorF");d=a.bG;a.tO=b.getUniformLocation(d,"uContrast");}
function AGt(){var a=this;C5.call(a);a.rd=null;a.ph=null;a.pg=null;}
function A1q(a){var b=new AGt();ANE(b,a);return b;}
function ANE(a,b){var c;Ie();Hz(a,b,C(58),C(79),A26);c=a.bG;a.rd=b.getUniformLocation(c,"uColor");c=a.bG;a.ph=b.getUniformLocation(c,"uPoints1");c=a.bG;a.pg=b.getUniformLocation(c,"uPoints2");}
function ADm(){var a=this;C5.call(a);a.qb=null;a.vG=null;a.sw=null;}
function A1r(a){var b=new ADm();ALt(b,a);return b;}
function ALt(a,b){var c;Ie();Hz(a,b,C(58),C(80),A26);c=a.bG;a.qb=b.getUniformLocation(c,"uColor");c=a.bG;a.vG=b.getUniformLocation(c,"uBaseline");c=a.bG;a.sw=b.getUniformLocation(c,"uScaleHExp");}
var Uy=G(0);
var AIZ=G(0);
function Fi(b,c,d){var e,f,g,h;e=d.bm;f=d.bq;g=d.bd;h=d.bD;b.uniform4f(c,e,f,g,h);}
function AAY(b,c){var d,e;d=b.getError();if(d){b=Bz();e=new L;N(e);U(H(e,c),d);Br(b,M(e));}}
function ST(){var a=this;B.call(a);a.AC=null;a.AF=null;a.AE=null;}
function SV(){var a=this;B.call(a);a.eU=null;a.hm=null;a.p8=null;a.zt=null;a.yL=null;a.vJ=0;a.y4=0;}
function CC(){var a=this;B.call(a);a.Az=null;a.fr=0;}
function Dy(a,b,c){a.Az=b;a.fr=c;}
function Hn(){var a=this;CC.call(a);a.vY=null;a.pb=null;a.uP=null;a.mN=0;a.s_=0;a.wA=0;}
var A26=null;var A2_=null;function Ie(){Ie=Bq(Hn);APL();}
function APL(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hn;c=Q(Ee,2);d=c.data;AXA();d[0]=A3a;d[1]=A3b;Ie();Dy(b,C(81),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.on.fr){case 0:f=f+l.fR|0;h=h+1|0;break a;case 1:e=e+l.fR|0;g=g+1|0;break a;default:}}i=i|1<<l.iy;k=k+1|0;}b.vY=c;b.mN=e;b.s_=f;b.wA=i;c=Q(Ee,g);m=c.data;b.pb=c;c=Q(Ee,h);n=c.data;b.uP=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.on.fr){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A26
=b;c=Q(Hn,1);c.data[0]=b;A2_=c;}
var Np=G(0);
var Wj=G(0);
var XC=G(0);
var GY=G();
function Kg(){GY.call(this);this.z9=null;}
function AEF(){var a=this;Kg.call(a);a.Ch=0;a.m1=0;a.kh=null;a.mp=null;a.w_=null;}
function ASd(a,b){var c=new AEF();AW$(c,a,b);return c;}
function AW$(a,b,c){a.z9=b;b=new L;N(b);a.kh=b;a.mp=B1(32);a.Ch=c;AEz();a.w_=A3c;}
function Wp(a,b,c,d){var e,$$je;e=a.z9;if(e===null)a.m1=1;if(!(a.m1?0:1))return;a:{try{e.md(b,c,d);break a;}catch($$e){$$je=EA($$e);if($$je instanceof Jf){}else{throw $$e;}}a.m1=1;}}
function Qc(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AFu(b,c,d-c|0);e=DE(Bd(16,Bc(e.length,1024)));g=AFi(e,0,e.data.length);h=a.w_;i=new RS;b=DE(1);j=b.data;j[0]=63;HO();k=A3d;i.n9=k;i.m$=k;c=j.length;if(c&&c>=i.pf){i.Av=h;i.tt=b.hx();i.Cb=2.0;i.pf=4.0;i.sI=B1(512);i.rb=DE(512);k=A3e;if(k===null){i=new BR;Bm(i,C(82));K(i);}i.n9=k;i.m$=k;a:while(true){if(i.kb==3){f=new CY;X(f);K(f);}i.kb=2;b:{while(true){try{k=AC9(i,f,g);}catch($$e){$$je=EA($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(I1(k))
{d=Cf(f);if(d<=0)break b;k=Ej(d);}else if(HL(k))break;h=!M_(k)?i.n9:i.m$;c:{if(h!==A3e){if(h===A3f)break c;else break b;}d=Cf(g);b=i.tt;l=b.data.length;if(d<l){k=A3g;break b;}AAr(g,b,0,l);}E8(f,f.Z+K6(k)|0);}}l=HL(k);Wp(a,e,0,g.Z);Qa(g);if(!l){while(true){d=i.kb;if(d!=2&&d!=4){f=new CY;X(f);K(f);}f=A3h;if(f===f)i.kb=3;l=HL(f);Wp(a,e,0,g.Z);Qa(g);if(!l)break;}return;}}K(AMH(f));}i=new BR;Bm(i,C(83));K(i);}
function Br(a,b){var c,d,e,f,g,h,i,j;BL(B0(a.kh,b),10);b=a.kh;c=b.K;d=a.mp;if(c>d.data.length)d=B1(c);e=0;f=0;if(e>c){b=new BD;Bm(b,C(84));K(b);}while(e<c){g=d.data;h=f+1|0;i=b.B.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Qc(a,d,0,c);a.kh.K=0;}
function GL(){GY.call(this);this.BW=null;}
function AB5(a){a.BW=DE(1);}
var Mg=G(GL);
var A2S=null;function AP8(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AGP(){var b;b=new Mg;AB5(b);A2S=b;}
function Ee(){var a=this;CC.call(a);a.tv=null;a.on=null;a.fR=0;a.sJ=0;a.iy=0;}
var A3a=null;var A3b=null;var A3i=null;function AXA(){AXA=Bq(Ee);AOR();}
function A0M(a,b,c,d,e,f,g){var h=new Ee();Zl(h,a,b,c,d,e,f,g);return h;}
function Zl(a,b,c,d,e,f,g,h){AXA();Dy(a,b,c);a.tv=d;a.on=e;a.fR=f;a.sJ=g;a.iy=h;}
function AOR(){var b;b=new Ee;ARO();Zl(b,C(85),0,C(86),A3j,2,0,0);A3a=b;b=A0M(C(87),1,C(88),A3j,2,0,1);A3b=b;A3i=I(Ee,[A3a,b]);}
function J7(){var a=this;B.call(a);a.Ae=null;a.Bd=null;}
function AG9(b){var c,d;if(Fe(b))K(AEB(b));if(!AG_(P(b,0)))K(AEB(b));c=1;while(c<J(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AG_(d))break a;else K(AEB(b));}}c=c+1|0;}}
function AG_(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var Nu=G(J7);
var A3c=null;function AEz(){AEz=Bq(Nu);ANz();}
function AHp(a){var b,c;b=new Wq;b.fN=C(89);HO();c=A3d;b.h1=c;b.of=c;b.A4=a;b.pn=0.3333333432674408;b.Bv=0.5;b.rm=DE(512);b.v_=B1(512);return b;}
function ANz(){var b,c,d,e,f;b=new Nu;AEz();c=Q(BC,0);d=c.data;AG9(C(90));e=d.length;f=0;while(f<e){AG9(d[f]);f=f+1|0;}b.Ae=C(90);b.Bd=c.hx();A3c=b;}
function Rs(){var a=this;B.call(a);a.ga=null;a.oY=null;a.lS=null;a.wM=null;a.s$=null;a.to=null;}
function AEL(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.ga,b,c));}
function On(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.oY[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.ga,b,d));f=e.data;Fg();d=f.length;AEz();g=A3c;h=AFi(e,0,d);a:{try{i=AHp(g);HO();g=ADF(AGf(AH2(i,A3e),A3e),h);break a;}catch($$e){$$je=EA($$e);if($$je instanceof Gm){g=$$je;}else{throw $$e;}}h=new AAO;h.kT=1;h.lq=1;h.iP=C(91);h.nb=g;K(h);}if(!g.Z&&g.dS==g.oQ)c.b7=g.ix;else{f=B1(Cf(g));e=f.data;c.b7=f;Pe(g,f,0,e.length);}return c;}
function OD(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.lS[e]){e=e+1|0;}d=e-d|0;H7(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.ga,b,d)));return c;}
var Hs=G(CC);
var A3k=null;var A3j=null;var A3l=null;function ARO(){ARO=Bq(Hs);AM2();}
function ANs(a,b){var c=new Hs();AHs(c,a,b);return c;}
function AHs(a,b,c){ARO();Dy(a,b,c);}
function AM2(){var b;A3k=ANs(C(92),0);b=ANs(C(93),1);A3j=b;A3l=I(Hs,[A3k,b]);}
var LJ=G(GL);
var A2T=null;function ANM(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AI4(){var b;b=new LJ;AB5(b);A2T=b;}
function AHf(){BR.call(this);this.Ay=null;}
function AEB(a){var b=new AHf();AWw(b,a);return b;}
function AWw(a,b){X(a);a.Ay=b;}
var YD=G(Em);
var Nt=G(0);
function ABh(){B.call(this);this.tf=null;}
function AVo(a,b){a.tf.setPointerCapture(b.pointerId);}
function ABi(){B.call(this);this.rR=null;}
function ALs(a,b){a.rR.releasePointerCapture(b.pointerId);}
function HH(){var a=this;B.call(a);a.oQ=0;a.Z=0;a.dS=0;a.iI=0;}
function Zg(a,b){a.iI=(-1);a.oQ=b;a.dS=b;}
function E8(a,b){var c,d,e;if(b>=0&&b<=a.dS){a.Z=b;if(b<a.iI)a.iI=0;return a;}c=new BR;d=a.dS;e=new L;N(e);BL(U(H(U(H(e,C(94)),b),C(95)),d),93);Bm(c,M(e));K(c);}
function Cf(a){return a.dS-a.Z|0;}
function DY(a){return a.Z>=a.dS?0:1;}
var U3=G(0);
var L5=G(HH);
function AIH(b){var c,d;if(b>=0)return AT7(0,b,B1(b),0,b,0);c=new BR;d=new L;N(d);U(H(d,C(96)),b);Bm(c,M(d));K(c);}
function AFu(b,c,d){return AT7(0,b.data.length,b,c,c+d|0,0);}
function Pe(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BD;i=new L;N(i);U(H(U(H(i,C(97)),g),C(98)),f);Bm(h,M(i));K(h);}if(Cf(a)<d){j=new MU;X(j);K(j);}if(d<0){j=new BD;k=new L;N(k);H(U(H(k,C(99)),d),C(100));Bm(j,M(k));K(j);}g=a.Z;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.ix.data[m+a.ow|0];l=l+1|0;c=n;m=o;}a.Z=g+d|0;return a;}}b=b.data;j=new BD;d=b.length;k=new L;N(k);BL(U(H(U(H(k,C(101)),c),C(95)),d),41);Bm(j,M(k));K(j);}
function K1(a,b){var c,d,e,f,g,h,i;c=0;d=J(b);if(a.o0){b=new JL;X(b);K(b);}e=d-c|0;if(Cf(a)<e){b=new IC;X(b);K(b);}if(c>J(b)){f=new BD;d=J(b);b=new L;N(b);BL(U(H(U(H(b,C(102)),c),C(95)),d),41);Bm(f,M(b));K(f);}if(d>J(b)){f=new BD;c=J(b);b=new L;N(b);U(H(U(H(b,C(103)),d),C(104)),c);Bm(f,M(b));K(f);}if(c>d){b=new BD;f=new L;N(f);U(H(U(H(f,C(102)),c),C(105)),d);Bm(b,M(f));K(b);}g=a.Z;while(c<d){h=g+1|0;i=c+1|0;Vd(a,g,P(b,c));g=h;c=i;}a.Z=a.Z+e|0;return a;}
function KL(){var a=this;HH.call(a);a.mZ=0;a.nX=null;a.BH=null;}
function AFi(b,c,d){var e,f,g;e=b.data;f=new AAq;g=e.length;d=c+d|0;Zg(f,g);APS();f.BH=A3m;f.mZ=0;f.nX=b;f.Z=c;f.dS=d;f.BN=0;f.p2=0;return f;}
function AAr(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.p2){e=new JL;X(e);K(e);}if(Cf(a)<d){e=new IC;X(e);K(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BD;j=new L;N(j);U(H(U(H(j,C(106)),h),C(98)),g);Bm(i,M(j));K(i);}if(d<0){e=new BD;i=new L;N(i);H(U(H(i,C(99)),d),C(100));Bm(e,M(i));K(e);}h=a.Z;k=h+a.mZ|0;l=0;while(l<d){b=a.nX.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.Z=h+d|0;return a;}}b=b.data;e=new BD;d=b.length;i=new L;N(i);BL(U(H(U(H(i,C(101)),c),C(95)),d),41);Bm(e,M(i));K(e);}
function Qa(a){a.Z=0;a.dS=a.oQ;a.iI=(-1);return a;}
function In(){B.call(this);this.CS=null;}
var A3f=null;var A3e=null;var A3d=null;function HO(){HO=Bq(In);ARu();}
function AIj(a){var b=new In();AG6(b,a);return b;}
function AG6(a,b){HO();a.CS=b;}
function ARu(){A3f=AIj(C(107));A3e=AIj(C(108));A3d=AIj(C(109));}
var ON=G(Ci);
function ARk(a){}
function APA(a,b,c){}
function CW(){var a=this;Ci.call(a);a.em=null;a.q=null;}
function Gd(a,b){var c,d,e;DR(a,b);a.em=AD1(0,0,64);c=new Xt;c.bS=new Bh;c.dA=CQ(Q(Dz,0));c.c9=new Bh;c.oq=new Bh;c.Ab=new BZ;c.Ac=new BZ;d=b.H;c.bY=d;e=b.cd;c.gB=e;c.cs=d.kJ;c.cI=Ti(e);d=b.o.mj;e=new SL;e.u7=c;Y(d,e);d=b.o.lg;e=new SK;e.zm=c;Y(d,e);a.q=c;Y(b.o.bP,new UG);b=b.o.bP;c=a.q;BQ(c);d=new UF;d.rl=c;Y(b,d);}
function F9(a){EC(a.D.H,a.em);}
function IT(a,b,c){var d,e,f,g,h;a:{d=a.q;Co(d.bS,b);e=d.ce;if(e!==c){d.ce=c;f=(Cz(d.dA)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eV(e,c);h=h+1|0;}}}}
var QS=G(0);
var KT=G(0);
function AIK(a){a.ka(Ij());}
function K7(a){a.ka(Z1());}
function AFB(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IR;c=new Jl;d=new HP;AHr();KH(d,A3n);Nv(c,d,BU(A3o),BU(A3p),BU(A3q),BU(A3o),BU(A3r),BU(A3s),BU(A3t),BU(A3u),BU(A3v),BU(A3w));AGq();e=(A3x.hx()).data;f=e.length;g=Q(JH,f);h=g.data;i=0;while(i<f){h[i]=e[i].m_;i=i+1|0;}j=AGx(S(C(110)),S(C(111)),S(C(112)),S(C(113)));k=new IV;l=new Ja;AKd();m=A3y;NA(l,m,A3z,A3A,A3B,A3C,m);Mx(k,l,AH5(),AIz(S(C(114)),S(C(115)),CI(0)),AH5(),ACl(1,0.07500000298023224),A3D,A3E);JS(b,c,g,j,k,ACC(S(C(116)),S(C(117)),S(C(118)),S(C(119))));a.ka(b);}
var KX=G(0);
var MA=G(0);
function KB(){var a=this;CW.call(a);a.F=null;a.G=null;a.eK=null;a.h3=0;a.jp=null;a.lE=null;a.e9=null;}
function A1t(a){var b=new KB();AEC(b,a);return b;}
function AEC(a,b){var c,d,e;Gd(a,b);a.e9=ALJ(a.q);c=AVX(a.q);a.eK=c;a.F=AEJ(a.q,c);c=AEJ(a.q,a.eK);a.G=c;a.lE=AXn(a.F,c);c=a.F;c.cb=1;ZJ(a.e9,c,a.G);c=a.F;d=new XY;d.yG=a;c.my=d;c=a.G;d=new XZ;d.t_=a;c.my=d;AH7(a,0);PR(a.q,a.F);Y(b.o.br,a.eK);Y(b.o.d7,a.eK);Y(b.o.d7,a);Y(b.o.br,a);c=b.o.bP;d=new X0;d.qm=a;Y(c,d);c=b.o.bP;d=new IL;e=new XV;e.xF=a;Oy(d,b,e);Y(c,d);Y(b.o.gg,a);Y(b.o.gU,a);b=b.o.dZ;c=new XX;c.tR=a;Y(b,c);K7(a);}
function ACb(a,b){if(a.F===b)a.h3=a.h3|1;if(a.G===b)a.h3=a.h3|2;if((a.h3&3)==3)AIi(a);}
function AH7(a,b){UN(a.F,b);UN(a.G,b);}
function AXU(a,b,c){if(Eb(a.q,a.F))return Hv(a.F,b,c);if(!Eb(a.q,a.G))return 0;return Hv(a.G,b,c);}
function AE$(a){if(Eb(a.q,a.F))return ABI(a,a.F);if(!Eb(a.q,a.G))return null;return ABI(a,a.G);}
function ABI(a,b){var c;c=new V_;c.tg=b;return c;}
function AIi(a){var b,c,d,e,f,g;Br(Bz(),C(120));b=a.F.d.f;c=a.G.d.f;d=E6(b);e=E6(c);f=ADE(b);g=ADE(c);b=a.D.cd;c=new RL;c.rn=a;CP(b,c,C(121),I(B,[d,f,e,g]));}
function AUW(a,b){var c,d;c=L6(a.F,b);d=L6(a.G,b);return !c&&!d?0:1;}
function ARB(a){var b;F9(a);JP(a.F);JP(a.G);b=a.e9;AGL(b,b.g1.bY);ABQ(a.eK);}
function APo(a){return JJ(0);}
function AVG(a){Ps(a.F);Ps(a.G);}
function ARp(a){ABO(a.F);ABO(a.G);}
function AWR(a,b){Qm(a.F,b);Qm(a.G,b);}
function AS8(a,b){NU(a.q,b);}
function AMz(a,b){if(AAk(a.q,b)){T4(a.eK);LH(a.F,b);LH(a.G,b);}}
function AQJ(a,b,c){IT(a,b,c);AFL(a,b,c);}
function AFL(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Cd(20.0,c);f=new Bh;g=b.b/2|0;h=e/2|0;AD9(f,g-h|0,b.a);Nq(a.F,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;Nq(a.G,d,f,c);V(a.e9.g,f.b,d.a);V(a.e9.j,d.b-f.b|0,f.a);}
function AKf(a,b){BQ(b);Os(a.eK,b);K0(a.F,b);K0(a.G,b);a.e9.jQ=b;}
function AH1(a,b){if(b.bl!=121)return 0;return 1;}
function AFg(a,b){var c,d,e;if(Eb(a.q,a.F)){c=a.eK;d=a.F;e=new QY;e.pr=a;Kn(c,b,d,a,a,a,e);}if(Eb(a.q,a.G)){c=a.eK;d=a.G;e=new QX;e.zf=a;Kn(c,b,d,a,a,a,e);}return 1;}
function ATQ(a,b){var c,d;c=B$(a.F,b.i)&&PU(a.F,b)?1:0;d=B$(a.G,b.i)&&PU(a.G,b)?1:0;return !c&&!d?0:1;}
function APs(a,b,c,d){var e,f;e=B$(a.F,b.i)&&Oq(a.F,b,c,d)?1:0;f=B$(a.G,b.i)&&Oq(a.G,b,c,d)?1:0;return !e&&!f?0:1;}
function ARS(a,b,c){var d,e,f,g,h,i,j,k;d=B$(a.F,b.i);e=B$(a.G,b.i);f=a.q;g=f.eF;h=g!==null?0:1;i=a.F;j=g!==i?0:1;k=g!==a.G?0:1;if(d&&!(!h&&!k))Gi(f,i);if(e&&!(!h&&!j))Gi(a.q,a.G);if(d){i=N_(a.F,b,c);if(i!==null)return i;}return !e?null:N_(a.G,b,c);}
function AUM(a,b,c){var d,e,f,g;d=B$(a.F,b.i);e=B$(a.G,b.i);f=d&&Wh(a.F,b,c)?1:0;g=e&&Wh(a.G,b,c)?1:0;return !f&&!g?0:1;}
function AUc(a,b,c,d){var e,f,g,h;e=B$(a.F,b.i);f=B$(a.G,b.i);g=e&&KF(a.F,c,d)?1:0;h=f&&KF(a.G,c,d)?1:0;return !g&&!h?0:1;}
function AQt(a){return AE$(a);}
var AHv=G(KB);
function A0q(a){var b=new AHv();AXF(b,a);return b;}
function AXF(a,b){var c;AEC(a,b);a.F.eq=1;a.G.eq=1;c=new WO;c.qv=a;Q1(a,c,C(122));c=new WP;c.wS=a;Q1(a,c,C(123));}
function AR$(a){return JJ(1);}
function Q1(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Oc;d=d.then(Bl(e,"f"));f=new Of;f.u_=b;f.u$=c;g=new Od;d.then(Bl(f,"f"),Bl(g,"f"));}
var AIc=G();
function AWO(b){var c,d;if(J(b)>0){c=new L;N(c);H(H(c,C(124)),b);$rt_globals.console.info($rt_ustr(M(c)));}a:{d=(-1);switch(I5(b)){case -1570047148:if(!Bo(b,C(125)))break a;d=17;break a;case -1509980539:if(!Bo(b,C(126)))break a;d=13;break a;case -1351411913:if(!Bo(b,C(127)))break a;d=5;break a;case -1073555521:if(!Bo(b,C(128)))break a;d=14;break a;case -1045861099:if(!Bo(b,C(129)))break a;d=18;break a;case -1045861098:if(!Bo(b,C(130)))break a;d=19;break a;case -811765794:if(!Bo(b,C(131)))break a;d=6;break a;case -785237654:if
(!Bo(b,C(132)))break a;d=11;break a;case -749978331:if(!Bo(b,C(133)))break a;d=21;break a;case -631889171:if(!Bo(b,C(134)))break a;d=9;break a;case -536831301:if(!Bo(b,C(135)))break a;d=23;break a;case -439438829:if(!Bo(b,C(136)))break a;d=20;break a;case -223304637:if(!Bo(b,C(137)))break a;d=2;break a;case 2129957:if(!Bo(b,C(138)))break a;d=1;break a;case 3343967:if(!Bo(b,C(139)))break a;d=10;break a;case 3556498:if(!Bo(b,C(140)))break a;d=4;break a;case 91636708:if(!Bo(b,C(141)))break a;d=22;break a;case 485517998:if
(!Bo(b,C(142)))break a;d=7;break a;case 544901384:if(!Bo(b,C(143)))break a;d=3;break a;case 1030621992:if(!Bo(b,C(144)))break a;d=16;break a;case 1465713255:if(!Bo(b,C(145)))break a;d=8;break a;case 1554501643:if(!Bo(b,C(146)))break a;d=15;break a;case 1609169232:if(!Bo(b,C(147)))break a;d=12;break a;case 2090248989:if(!Bo(b,C(148)))break a;d=24;break a;default:}}b:{switch(d){case 1:break;case 2:b=new YW;break b;case 3:case 4:b=new YT;break b;case 5:b=new YS;break b;case 6:b=new YV;break b;case 7:b=new YU;break b;case 8:b
=new Y1;break b;case 9:case 10:b=new Y0;break b;case 11:b=new Y3;break b;case 12:b=new Y2;break b;case 13:b=new V2;break b;case 14:b=new V1;break b;case 15:b=new V0;break b;case 16:b=new VR;break b;case 17:b=new VQ;break b;case 18:b=new VO;break b;case 19:b=new VN;break b;case 20:b=new VM;break b;case 21:b=new VL;break b;case 22:b=new VK;break b;case 23:b=new VU;break b;case 24:b=new VT;break b;default:b=new VS;break b;}b=new YY;}return b;}
var AFr=G();
var KU=G(L5);
function AE9(){var a=this;KU.call(a);a.o0=0;a.ow=0;a.ix=null;}
function AT7(a,b,c,d,e,f){var g=new AE9();AZr(g,a,b,c,d,e,f);return g;}
function AZr(a,b,c,d,e,f,g){Zg(a,c);a.Z=e;a.dS=f;a.ow=b;a.o0=g;a.ix=d;}
function Vd(a,b,c){a.ix.data[b+a.ow|0]=c;}
function LR(){var a=this;B.call(a);a.Av=null;a.tt=null;a.Cb=0.0;a.pf=0.0;a.n9=null;a.m$=null;a.kb=0;}
function ML(){var a=this;B.call(a);a.hp=0;a.jI=0;}
var A3h=null;var A3g=null;function ADh(a,b){var c=new ML();ADY(c,a,b);return c;}
function ADY(a,b,c){a.hp=b;a.jI=c;}
function I1(a){return a.hp?0:1;}
function HL(a){return a.hp!=1?0:1;}
function LI(a){return !Ts(a)&&!M_(a)?0:1;}
function Ts(a){return a.hp!=2?0:1;}
function M_(a){return a.hp!=3?0:1;}
function K6(a){var b;if(LI(a))return a.jI;b=new Ea;X(b);K(b);}
function Ej(b){return ADh(2,b);}
function Yp(a){var b,c;switch(a.hp){case 0:b=new S0;X(b);K(b);case 1:b=new AAX;X(b);K(b);case 2:b=new Yd;c=a.jI;X(b);b.C8=c;K(b);case 3:b=new SI;c=a.jI;X(b);b.C2=c;K(b);default:}}
function AEj(){A3h=ADh(0,0);A3g=ADh(1,0);}
var AC4=G();
var I_=G(0);
var OY=G();
function ANX(a,b){return b.arrayBuffer();}
var OX=G();
function AS9(a,b){var c,d;c=new Rq;d=new Ro;return $rt_globals.WebAssembly.instantiate(b,AQf(Bl(c,"f"),Bl(d,"f")));}
var OV=G();
function ATX(a,b){ALi(b);}
var OU=G();
function AL6(a,b){AIo(b);}
var Z=G(0);
function WO(){B.call(this);this.qv=null;}
function AYx(a,b){I9(a.qv.F,b);}
function WP(){B.call(this);this.wS=null;}
function AQB(a,b){I9(a.wS.G,b);}
var YY=G();
function AXd(a,b){return A1t(b);}
var YW=G();
function AJQ(a,b){return A1B(b);}
var YT=G();
function ANn(a,b){return A14(b);}
var YS=G();
function AS5(a,b){var c,d,e,f,g;c=new Wt;DR(c,b);d=(Ij()).bp.eb;c.BB=d;c.jx=AIl(d);c.i4=new Bh;c.hs=new Bh;c.de=Ku();c.dF=Ku();c.mH=JJ(1);b=b.o.br;d=new Ok;d.k$=c;Y(b,d);b=c.mH.data[DP()*c.mH.data.length|0];d=Gu(c.D.H,b,10);c.mn=d;Ck(c.D.H.ch,d);e=DX(c.D.H.ch,C(149));d=c.D.H.ch;f=new L;N(f);BL(f,43);H(f,b);g=CU(e+DX(d,M(f)));c.is=g;c.iD=Cx(c.iD,AB6(c,1,g,b,c.mn,c.D.H));c.iC=Cx(c.iC,AB6(c,0,c.is,b,c.mn,c.D.H));S4(c,c.de,c.iD);S4(c,c.dF,c.iC);Ct(c.de.U,1.0,1.0,1.0,1.0);Fw(c.de,c.jx);Ct(c.dF.U,1.0,1.0,1.0,1.0);Fw(c.dF,
c.jx);b=Bz();g=c.is;d=new L;N(d);U(H(d,C(150)),g);Br(b,M(d));return c;}
var YV=G();
function ANv(a,b){var c,d,e;c=new P1;Gd(c,b);d=new Oe;d.n0=new Bh;d.oL=new Bh;c.ts=d;c.eW=AFt();c.dp=AFt();c.eI=Lb(c.q);Y(c.q.dA,c);d=b.o.bP;e=new W5;e.wX=c;Y(d,e);Y(b.o.br,c);b=b.o.dZ;d=new W1;d.yk=c;Y(b,d);AB9(c.dp);c.o9=Ec(C(151),25.0);HZ(c.eI,Fn(),c.o9);BT(c.em,CI(43));b=Fn();Iy(c.eW,b);Iy(c.dp,b);b=c.eW;b.k4=new W2;d=c.dp;d.k4=new W3;d.mw=new QD;d.pl=new QF;K$(b,(TQ(0)).kB);K$(c.dp,(TQ(0)).kB);return c;}
var YU=G();
function AI8(a,b){var c,d,e;c=new VP;Hr(c,b);c.mg=Ec(C(152),15.0);Y(c.q.dA,c);BT(c.em,CI(43));d=Lb(c.q);c.ji=d;HZ(d,Fn(),Ec(C(151),25.0));d=b.o.bP;e=new YM;e.AP=c;Y(d,e);d=b.o.dZ;e=new YN;e.yl=c;Y(d,e);Y(b.o.br,Sa(c.ji));return c;}
var Y1=G();
function AM0(a,b){var c,d,e;c=new O7;Gd(c,b);c.hd=BM();c.f0=BM();c.su=S(C(153));c.jD=AHJ();c.hc=0;d=c.q.dA;e=new Ot;e.sc=c;Y(d,e);Y(b.o.br,c);d=b.o.bP;e=new Or;e.yN=c;Y(d,e);b=Gu(b.H,C(151),35);c.jR=b;c.lk=AC6(EU(b));BT(c.em,S(C(154)));return c;}
var Y0=G();
function AQ9(a,b){var c,d,e,f;c=new VJ;DR(c,b);c.hi=AIn();c.eB=0;c.xe=500;c.sv=Ik(0,0,0,255,new BZ);c.lI=20;c.qS=20;c.wg=Ij();d=b.o.br;e=new OH;e.ks=c;f=new XU;f.v8=e;e.sf=f;Y(d,e);d=b.o.d7;e=new UH;e.xn=c;Y(d,e);c.ei=b.H;c.rC=Ti(b.cd);Sj(c.hi,Gu(c.ei,C(151),c.qS),c.lI,c.ei.kJ);c.i3=Jk();return c;}
var Y3=G();
function AVK(a,b){var c,d;c=new S1;IJ(c,b);b=b.o.bP;d=new R7;d.t7=c;Y(b,d);return c;}
var Y2=G();
function AJn(a,b){var c,d,e,f,g,h,i;c=new Pu;Gd(c,b);d=Lb(c.q);c.jc=d;HZ(d,Fn(),Ec(C(151),25.0));Y(b.o.br,Sa(c.jc));e=b.o.dZ;d=new Tx;d.se=c;Y(e,d);e=b.cd;f=new P$;f.Ct=c;g=Q(B,1);g.data[0]=C(155);CP(e,f,C(156),g);h=new P8;h.Bl=c;g=Q(B,1);g.data[0]=AE4([1,2,3,4,5]);CP(e,h,C(157),g);h=new P5;h.z$=c;i=Q(B,1);i.data[0]=A0N([1,2,3,4,5]);CP(e,h,C(158),i);h=new P3;h.BI=c;g=Q(B,1);g.data[0]=DD([1,2,3,4,5]);CP(e,h,C(159),g);e=b.o.bP;d=new IL;h=new Tw;h.Cf=c;f=new Ty;f.pB=c;AAK(d,b,h,f);Y(e,d);return c;}
var V2=G();
function AJI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Oo;IJ(c,b);c.ez=HE(0,0,300,300);c.f5=Wo(0,0,3,3);d=b.H;b=b.o.br;e=new Xg;e.mC=c;Y(b,e);b=AIJ(d);c.xO=b;FB(c.ez,b);FR(c.ez);b=c.ez.bk;Fs();BT(b,A3F);BT(c.ez.U,Dr(204,120,50));ARX();e=A3G;f=DE((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=CS(d);switch(e.fr){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new EM;X(b);K(b);}b:
{OP(m,5,5,h);b=m.eC.dP;switch(e.fr){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new EM;X(b);K(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.nz=m;V(c.f5.t,Cc(m),De(c.nz));BT(c.f5.bk,c.n_);return c;}
var V1=G();
function AQH(a,b){var c,d,e;c=new VE;IJ(c,b);c.gq=HE(0,0,300,300);c.lB=new Bh;c.kt=new Bh;c.iX=new Bh;d=b.H;b=b.o.br;e=new Qk;e.kc=c;Y(b,e);b=AIJ(d);c.qD=b;FB(c.gq,b);FR(c.gq);b=c.gq.bk;Fs();BT(b,A3F);BT(c.gq.U,Dr(204,120,50));return c;}
var V0=G();
function ASz(a,b){var c,d,e,f;c=new Vy;DR(c,b);c.CI=20;c.C4=11;c.Ai=220;c.k7=new Bh;c.BV=5000;c.hX=1;c.gj=I(HP,[CI(0),CI(255)]);c.eE=b.H;d=b.o.br;e=new R4;e.kG=c;f=new Zi;f.uR=e;e.qi=f;Y(d,e);b=b.o.d7;d=new ABW;d.rH=c;Y(b,d);b=GQ(c.eE,200,220);c.lJ=b;GB(b,C(151),20.0);b=GQ(c.eE,200,20);c.f7=b;GB(b,C(151),20.0);c.iA=Jk();return c;}
var VR=G();
function AN2(a,b){var c,d,e;c=new JD;IJ(c,b);Y(b.o.br,c);d=b.o.bP;e=new AAh;e.pk=c;Y(d,e);Y(b.o.gg,new AAg);d=b.o.gg;e=new AAf;e.ti=c;Y(d,e);Y(b.o.gU,new AAe);d=b.o.gU;e=new AAi;e.vH=c;Y(d,e);b=!ABl(b.cd)?C(160):C(161);d=new L;N(d);H(H(d,C(162)),b);$rt_globals.console.info($rt_ustr(M(d)));return c;}
var VQ=G();
function AJt(a,b){var c,d,e,f,g,h;c=new Ve;DR(c,b);c.wv=CI(20);c.gl=HE(0,0,300,300);d=b.o.bP;e=new UD;e.CX=c;Y(d,e);b=b.H;d=Gu(b,C(14),88);Ck(b.ch,d);f=CU(ADu(DX(b.ch,C(163)),DX(b.ch,C(164))));g=KW(d,1.1799999475479126);h=Bz();e=new L;N(e);U(H(U(H(e,C(165)),f),C(166)),g);Br(h,M(e));e=GQ(b,f,g*3|0);c.ik=e;Ck(e,d);BS(c.ik,C(163),0.0,d.db);BS(c.ik,C(164),0.0,g+d.db);BS(c.ik,C(167),0.0,(g*2|0)+d.db);b=CS(b);c.mO=b;CJ(b,c.ik);FB(c.gl,c.mO);FR(c.gl);b=c.gl.bk;Fs();BT(b,A3F);BT(c.gl.U,A3H);return c;}
var VO=G();
function AXq(a,b){var c;c=new WF;NK(c,b);HG(c.cg,0,0,300,300);V(c.df,300,300);return c;}
var VN=G();
function ARl(a,b){var c;c=new WE;NK(c,b);c.fI=new Bh;c.go=new Bh;V(c.d1,150,140);V(c.df,500,100);V(c.fe,150,200);V(c.eD,500,250);return c;}
var VM=G();
function AVM(a,b){var c,d,e;c=new AAF;Hr(c,b);c.rS=Ec(C(152),20.0);Y(c.q.dA,c);BT(c.em,CI(43));d=Lb(c.q);c.iq=d;HZ(d,Fn(),Ec(C(151),25.0));d=b.o.bP;e=new ABL;e.BX=c;Y(d,e);d=b.o.dZ;e=new ABM;e.t4=c;Y(d,e);Y(b.o.br,Sa(c.iq));return c;}
var VL=G();
function AJe(a,b){var c;c=new YE;Hr(c,b);Y(c.q.dA,c);BT(c.em,CI(43));b=H6(c.q);c.ko=b;b.dD=Fn();E9(c.ko,C(133),Ec(C(151),15.0),3.0);EX(c.cL,c.ko);return c;}
var VK=G();
function AVr(a,b){var c,d,e,f,g;c=new Su;Hr(c,b);Y(c.q.dA,c);BT(c.em,CI(43));c.gx=H6(c.q);b=Z1();c.oN=b;c.gx.dD=b.ew;AGv(new R3,C(151),15.0);d=A1l(C(152),15.0,400,700);E9(c.gx,C(141),d,3.0);b=new UE;e=c.q;Mt(b);b.et=AK3(Q(HQ,0));b.g6=Q(E4,0);b.o8=(-1);b.gf=e;b.cq=AQV(e.cs);c.jZ=b;f=new O9;f.xK=c;c.nN=ACk(C(168),0,4,f,AHJ());b=Bz();g=NP(c.nN);e=new L;N(e);U(H(e,C(169)),g);Br(b,M(e));X7(c);b=c.jZ;b.gG=c.oN;if(!BV(b.nu,d)){b.nu=d;if(b.bO!==0.0)V6(b);}b=c.gx;d=NQ(c.jZ,c.q);e=c.oN.bp;HY(d,e.il,e.it);GS(b,d);EX(c.cL,
c.gx);return c;}
var VU=G();
function AT8(a,b){return A19(b);}
var VT=G();
function AMi(a,b){var c,d,e,f,g,h,i;c=new PZ;Hr(c,b);c.or=Z1();d=new ABt;e=c.q;f=ASm(e);g=ALJ(e);h=ASm(e);i=I(CR,[f,g,h]);Gb(d);d.dO=i;d.lD=g;d.xr=f;d.wW=h;ZJ(g,f.iJ,h.iJ);d.pP=AXn(f.iJ,h.iJ);c.kP=d;c.jj=H6(c.q);Y(c.q.dA,c);BT(c.em,CI(43));d=b.o.dZ;e=new YR;e.AM=c;Y(d,e);b=b.o.bP;d=new YQ;d.vD=c;Y(b,d);b=c.jj;d=c.or;b.dD=d.ew;E9(b,C(170),d.op,2.0);GS(c.jj,c.kP);EX(c.cL,c.jj);b=c.kP;d=c.or;b.lD.jQ=d;AA0(b.xr,d);AA0(b.wW,d);return c;}
var VS=G();
function AO4(a,b){var c;c=new N2;AIM(c,b);I9(c.cO,AZ1(C(171),C(172),AG0(C(173))));return c;}
function Z9(){var a=this;B.call(a);a.wQ=null;a.xy=null;a.we=null;}
function HN(){var a=this;B.call(a);a.bJ=0;a.cD=0;a.di=0;a.kz=0;}
function A3I(a,b,c,d){var e=new HN();Xm(e,a,b,c,d);return e;}
function Xm(a,b,c,d,e){a.bJ=d;a.cD=b;a.di=c;a.kz=e;}
function Rg(){var a=this;HN.call(a);a.d9=null;a.bl=0;a.iS=0;a.vC=0;a.lY=0;}
var AHw=G();
function Zy(b,c){return (b+(c/2|0)|0)/c|0;}
function Sr(b,c,d){if(b<(2147483647/c|0))return Zy(Bb(b,c),d);return 0.5+c*b/d|0;}
function HD(b,c){return ((b+c|0)-1|0)/c|0;}
function Gq(b){return b+0.5|0;}
function CU(b){return b+0.5|0;}
function ES(b,c,d){return Bd(b,Bc(c,d));}
function KJ(b,c){return ACX(b)/ACX(c);}
function NM(){var a=this;HN.call(a);a.i=null;a.Af=null;}
var Xb=G(0);
function Py(){var a=this;B.call(a);a.yS=null;a.yT=null;}
function AQM(a,b){var c,d;c=a.yS;d=a.yT;$rt_globals.console.info("paste plain string "+b);c.h(Fo(b));Do(d);}
function XQ(){B.call(this);this.zq=null;}
function Zx(a,b){a.zq.clipboardData.setData("text/plain",$rt_ustr(b));}
function AAq(){var a=this;KL.call(a);a.BN=0;a.p2=0;}
function CR(){var a=this;B.call(a);a.g=null;a.j=null;a.bO=0.0;}
function AZF(){var a=new CR();Gb(a);return a;}
function Gb(a){a.g=new Bh;a.j=new Bh;}
function AUY(a){}
function ASR(a){return BH(0,0);}
function GZ(a,b,c,d){var e;if(!I0(a.g,b)){a.mk(b);Co(a.g,b);}if(!I0(a.j,c)){a.l_(c);Co(a.j,c);}e=a.bO;if(e!==d){a.bO=d;a.ih(e,d);}}
function EN(a,b){return Cd(b,a.bO);}
function B$(a,b){return GF(b,a.g,a.j);}
function AH$(a,b){var c,d,e,f;c=a.g;d=c.b;e=c.a;f=a.j;A0C();Bu(b,d,e,f,A3J);}
function YB(a,b){var c;c=a.g;Mw(b,c.b,c.a,a.j);}
function ALQ(a,b){return 0;}
function ARe(a,b){}
function AX8(a,b){}
function AU9(a,b,c){}
function AYn(a){}
function APl(a,b,c,d){return 0;}
function ALD(a,b,c){return null;}
function ASe(a,b,c){return 0;}
function AXO(a,b){return 0;}
function AUU(a,b,c,d){return 0;}
function AEq(){var a=this;CR.call(a);a.g1=null;a.jM=null;a.jN=null;a.jJ=null;a.jK=null;a.ev=null;a.gJ=null;a.gK=null;a.jQ=null;}
function ALJ(a){var b=new AEq();AMn(b,a);return b;}
function AMn(a,b){Gb(a);a.jM=new Bh;a.jN=new Bh;a.jJ=new Bh;a.jK=new Bh;a.g1=b;}
function ZJ(a,b,c){a.gJ=b;a.gK=c;}
function AGL(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c=a.g;Bu(b,c.b,c.a,a.j,a.jQ.bp.eb);if(a.ev===null)return;d=CG(a.g1,2.0);e=GE(a.ev,a.gJ.jH(),1);f=GE(a.ev,a.gJ.kj(),1);g=GE(a.ev,a.gK.jH(),0);h=GE(a.ev,a.gK.kj(),0);i=Bc(e,g);j=Bd(f,h);h=BG(i,j);if(h<=0)B2(b,1);k=a.gJ.xU();l=a.gK.nC();m=a.g1.oq;while(i<=j){n=a.ev.h2.data[i];if(n.l8){o=a.gJ.gF(n.ho);p=a.gJ.gF(n.ho+n.oH|0);q=a.gK.gF(n.hn);r=a.gK.gF(n.hn+n.oG|0);V(a.jM,a.g.b,o);V(a.jJ,a.g.b,p);V(a.jN,a.g.b+a.j.b|0,q);V(a.jK,a.g.b+a.j.b|0,r);s=Bd(Bc(o,q),
a.g.a);t=Bc(Bd(p,r),a.g.a+a.j.a|0);if(t>s){V(m,a.j.b,t-s|0);c=a.jQ;u=I8(c.dU,c,n.l8);if(o==p){n=a.g1.c9;V(n,a.g.b-k.b|0,d);if(q>=o){c=a.jJ;V(c,c.b,c.a+d|0);g=o;}else{g=o-d|0;c=a.jM;V(c,c.b,c.a-d|0);}Bu(b,k.b,g,n,u);}if(q==r){n=a.g1.c9;V(n,l.b,d);if(o>=q){c=a.jK;V(c,c.b,c.a+d|0);}else{q=q-d|0;c=a.jN;V(c,c.b,c.a-d|0);}Bu(b,a.g.b+a.j.b|0,q,n,u);}ACh(b,a.g.b,s,m,a.jM,a.jN,a.jJ,a.jK,u);}}i=i+1|0;}if(h<=0)B2(b,0);}
function AFe(){var a=this;B.call(a);a.eP=null;a.eg=null;a.dt=null;a.b5=null;a.h$=null;}
function AVX(a){var b=new AFe();AT_(b,a);return b;}
function AT_(a,b){a.eg=ASk();a.eP=b;a.b5=Lb(b);}
function Os(a,b){var c;a.h$=b;c=a.dt;if(c!==null)c.dD=b.ew;HZ(a.b5,b.ew,b.yz);}
function T4(a){var b,c,d;b=B8(a.b5.cf);while(B_(b)){MH(Ca(b));}b=a.eg;c=0;while(true){d=b.cR;if(c>=d.m)break;(Bw(d,c)).Q.gE=1;c=c+1|0;}}
function ABQ(a){Wl(a.eg,a.eP.bY);Gw(a.b5);}
function ATW(a,b){return !ACB(a.eg,b)&&!LX(a.b5,b)?0:1;}
function AXP(a,b,c,d){return !ADC(a.eg,b,c,d)&&!KI(a.b5,b,c,d)?0:1;}
function AU_(a,b,c){var d;d=Ns(a.b5,b,c);if(d!==null)return d;return AE_(a.eg,b,c);}
function AQR(a,b,c){return !AIs(a.eg,b,c)&&!Dk(a.b5)?0:1;}
function TE(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=APT();i=c.m;j=0;while(j<i){if(f===null){k=(Bw(c,j)).bo;l=Uv(Fu(B7(g.f,k)));m=VD(g.fV);}else{n=f.data;k=n[j].nq.m4;l=!BV(g.fV,n[j].kK)?C(21):Uv(Fu(B7(g.f,k)));m=VD(n[j].kK);}if(J(l)>153){o=Cr(l,0,150);n=new L;N(n);H(H(n,o),C(174));l=M(n);}if(J(m)>153){n=Cr(m,0,150);o=new L;N(o);H(H(o,n),C(174));m=M(o);}n=Db(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=Bw(c,j);}if(f!==null){q=new AAS;q.tm=d;q.tn=p;}else{q=new AAT;q.yW=d;q.yV=
o;}NI(h,m,n,l,q);j=j+1|0;}r=ZY(h);if(a.dt!==null)We(a);c=new S8;n=a.eP;f=new SP;f.pE=a;f.pF=d;AHY(c,n,f);Pk(c,r);d=a.h$;AB$(c,d.ew,d.zd);a.dt=H6(a.eP);d=NQ(c,a.eP);n=a.h$.ew;HY(d,n.mr,n.lZ);GS(a.dt,d);d=a.dt;n=new L;N(n);H(H(n,C(175)),e);E9(d,M(n),a.h$.op,4.0);d=a.dt;d.dD=a.h$.ew;EX(a.eg,d);d=a.dt;s=(d.Q.j.a+CG(d.bt,2.0)|0)+CG(a.eP,2.0)|0;t=(c.dR+c.eL|0)+c.gz|0;i=CG(c.bU,5.0);d=BH(ES(i,b.b,c.bU.bS.b-t|0),ES(s,b.a,c.bU.bS.a-c.cP.a|0));RU(c);KP(c);s=Ef(c);t=c.b$.data.length;s=Bb(s,t)+Bb(c.dw,t+1|0)|0;V(c.cP,c.j.b,
s);s=(c.dR+c.eL|0)+c.gz|0;b=c.bU;t=(b.bS.b-d.b|0)-CG(b,5.0)|0;b=c.bU;i=(b.bS.a-d.a|0)-CG(b,5.0)|0;e=BH(Bc(s,t),Bc(c.cP.a,i));Ei(a.dt,d,e);Gi(a.eP,c);}
function We(a){J6(a.eg,a.dt);L$(a.dt);a.dt=null;}
function Tn(a,b){var c;c=new S2;c.qe=a;c.qf=b;return c;}
function Kn(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;if(!Dk(a.b5)){h=a.b5;i=b.i;b=new Wg;b.fH=a;b.bu=c;b.rk=g;b.hG=e;b.oX=f;b.lp=d;j=L7();e=b.bu.d;d=Eq(e);e=GI(e);f=b.bu.fu;if(Tf(f,d,e)!==null){k=new Ut;k.qj=b;k.qk=i;DK(j,C(176),k);}if(Nd(f,d,e)!==null){k=new Uu;k.t1=b;k.t2=i;DK(j,C(177),k);}if(Xd(f,d,e)!==null){e=new Us;e.pO=b;e.pQ=i;DK(j,C(178),e);}e=new Ur;e.yc=b;e.yb=i;DK(j,C(179),e);G9(b);if(MD()){if(!b.bu.eq){e=new TA;e.yM=b;DK(j,C(180),e);}e=new TB;e.sj=b;DK(j,C(181),e);if(!b.bu.eq&&ABl(G9(b))){e=new Tz;e.vV
=b;DK(j,C(182),e);}}e=L7();l=Q(BC,4).data;l[0]=C(183);l[1]=C(172);l[2]=C(184);l[3]=C(185);m=l.length;n=0;while(n<m){f=l[n];g=new Ri;g.qg=b;g.qh=f;DK(e,f,g);n=n+1|0;}Fm(j,C(186),G7(e));d=L7();l=Q(Cn,3);o=l.data;g=b.lp;BQ(g);p=new O0;p.rV=g;o[0]=CX(C(187),p);g=b.lp;BQ(g);p=new O1;p.s8=g;o[1]=CX(C(188),p);g=b.lp;BQ(g);p=new OZ;p.zI=g;o[2]=CX(C(189),p);I3(d,C(190),ER(l),A3K);l=Q(Cn,2);o=l.data;g=b.hG;BQ(g);p=new Z6;p.tN=g;o[0]=CX(C(191),p);g=b.hG;BQ(g);p=new Z5;p.xL=g;o[1]=CX(C(192),p);Fm(d,C(193),ER(l));g=new Rd;g.q2
=b;I3(d,C(194),g,A3K);if(b.bu.cv.bY.kJ){l=Q(Cn,2);o=l.data;g=new Vb;g.rr=b;o[0]=CX(C(195),g);g=new Vc;g.sR=b;o[1]=CX(C(196),g);Fm(d,C(197),ER(l));}Fm(j,C(198),G7(d));g=L7();Fm(g,C(199),AET(b));e=new Sp;e.zL=b;DK(g,C(200),e);e=new N1;e.rK=b;I3(g,C(201),e,A3K);Fm(j,C(202),G7(g));FP(h,i,G7(j),Tn(a,c));}}
function AVx(a,b,c,d){return V5(a.eg,b,c,d);}
function ADQ(b){var c;c=new ABw;c.pu=b;return c;}
var GG=G(0);
function AST(a){}
function AN_(a){}
var SH=G(0);
var Nn=G(0);
function AEw(){var a=this;CR.call(a);a.cv=null;a.bh=null;a.kZ=null;a.zS=0;a.oV=null;a.c6=null;a.nM=0;a.gv=0.0;a.ld=null;a.BM=null;a.fG=null;a.Y=0;a.cY=0;a.d=null;a.fu=null;a.dV=null;a.fB=null;a.xY=0;a.vu=0;a.cV=0;a.cj=0;a.ct=0;a.hH=null;a.fz=null;a.fC=null;a.ib=0;a.jz=0;a.Db=0;a.AH=0;a.lj=0;a.kE=0;a.n8=0;a.d8=0;a.dj=null;a.fn=null;a.eq=0;a.cb=0;a.Am=null;a.jn=null;a.uu=null;a.wK=null;a.my=null;a.bw=0;a.cK=null;a.tp=0;a.ry=null;a.xI=null;}
function AEJ(a,b){var c=new AEw();AUH(c,a,b);return c;}
function AUH(a,b,c){var d,e,f;Gb(a);a.zS=0;a.oV=Q(Be,10);a.c6=AOS();a.gv=16.0;a.ld=C(151);a.d=A0a(Q(BC,0),null,null);d=new AA1;d.sX=CQ(Q(Le,0));d.zO=CQ(Q(Le,0));d.pZ=CQ(Q(VW,0));d.yu=CQ(Q(Sx,0));d.xX=CQ(Q(HB,0));d.xB=CQ(Q(Vj,0));a.fu=d;a.fB=Q(E4,0);a.hH=BH(1,0);a.fz=Jk();a.fC=Jk();a.ib=0;a.jz=1;a.lj=1;a.kE=1;a.n8=1;a.d8=3;a.dj=AIn();a.fn=C(203);a.eq=0;a.cb=0;e=EL();BQ(e);d=new PN;d.Cm=e;a.jn=d;a.bw=0;e=new PM;e.py=a;a.ry=e;e=new PL;e.ur=a;a.xI=e;a.cv=b;a.bh=b.bY;a.kZ=c;c=AQV(b.cs);a.cK=c;a.fG=c.gC;f=a.oV.data;b
=new PK;b.x$=a;f[1]=b;b=new PS;b.rs=a;f[2]=b;b=new PQ;b.vP=a;f[3]=b;b=new PP;b.z0=a;f[4]=b;b=new PO;b.q7=a;f[5]=b;b=new PJ;b.uT=a;f[6]=b;}
function Nq(a,b,c,d){GZ(a,b,c,d);VF(a,b,c,d);}
function ATs(a,b,c){AAl(a,a.ld,a.gv);Ql(a.cK,c);}
function AYz(a,b,c){a.uu=b;a.wK=c;}
function VF(a,b,c,d){var e;a.cV=Cd(80.0,d);a.cj=Cd(1.0,d);a.ct=Cd(10.0,d);if(!a.cb)Co(a.cv.c9,a.g);else V(a.cv.c9,(b.b+c.b|0)-JW(a)|0,b.a);UU(a.dj,a.cv.c9,JW(a),c.a,d);b=a.c6;e=Cd(2.0,d);b.eO.t.b=e;}
function ANY(a){a.nM=1;Mm(a);}
function AKl(a){a.nM=0;}
function Mm(a){R_(a.c6,Kj(Gl(a)));}
function K0(a,b){var c,d;a.dV=b;c=a.c6;d=b.bp.zN;BT(c.eO.U,d);c=a.fz;d=b.bp;Hw(c,d.il,d.it);c=a.fC;b=b.bp;Hw(c,b.il,b.it);}
function Ps(a){Nh(a,a.cK.cc.oM,a.gv+1.0);}
function ABO(a){var b;b=a.gv;if(b<=7.0)return;Nh(a,a.cK.cc.oM,b-1.0);}
function Qm(a,b){Nh(a,b,a.gv);}
function AUF(a,b){NU(a.cv,b);}
function Nh(a,b,c){if(a.cv.ce!==0.0){AAl(a,b,c);Ia(Gl(a));}a.gv=c;a.ld=b;}
function LH(a,b){var c,d;c=a.cK;b=a.cv.cs;d=a.bh;c.iM=b;if(c.e$.hQ!=b&&c.dY)ABN(c,d);Wa(a.fB);KK(a.dj);Ms(a);}
function AAl(a,b,c){var d,e,f,g,h,i,j,k;d=a.bO;e=c*d;Cd(c,d);f=a.cK.cc;d=f===null?0.0:f.rB;if(!(e===d&&BV(b,a.ld))){KK(a.dj);AAz(a.fB);g=a.d.f.A.data;h=g.length;i=0;while(i<h){EG(g[i]);i=i+1|0;}j=a.cK;f=a.bh;j.cc=AEp(b,e,300,600,j.gC,f);f=a.cK;a.BM=f.cc;a.Y=UY(f,1.25,a.bh);a.cY=CU(a.cK.cc.ou);a.c6.eO.t.a=EU(a.cK.cc);h=EU(a.cK.cc);i=a.Y;k=AAA(a.c6);f=new L;N(f);b=H(H(f,C(204)),b);BL(b,32);U(H(U(H(U(H(E$(b,e),C(205)),h),C(166)),i),C(206)),k);$rt_globals.console.info($rt_ustr(M(f)));if(A3L){h=LN(a.cK.cc,a.Y);b
=new L;N(b);U(H(b,C(207)),h);$rt_globals.console.info($rt_ustr(M(b)));}a.d.h5=G1(FX(a),a.d.z,a.bh.ch,a.fG);HA(a);Ms(a);}}
function NL(a){return Bb(CF(a.d.f)+5|0,a.Y);}
function KM(a){return Bd(NL(a)-a.j.a|0,0);}
function Wi(a){return Bd(a.ib-FI(a)|0,0);}
function FI(a){var b;b=!a.cb?0:a.cY+a.ct|0;return Bd(1,(a.j.b-a.cV|0)-b|0);}
function JW(a){return a.cb?a.cV:a.cV-a.ct|0;}
function Eh(a){return a.j.a;}
function L6(a,b){var c,d,e;c=a.d.f;if(WW(c)&&b-c.v0>0.03125?1:0){d=a.tp;e=a.d.f.co;if(d!=e){a.tp=e;T5(a);}}V8(a);d=W6((a.bw+a.Db|0)-a.AH|0,KM(a));e=a.bw==d?0:1;if(e)FZ(a,d);return !Wm(a.c6,b)&&!e&&!a.zS?0:1;}
function Ip(a,b){var c,d;b=W6(b,Wi(a));c=a.d;d=b==c.dy?0:1;if(d)c.dy=b;if(d){c=a.uu;if(c!==null)c.l();}}
function FZ(a,b){var c;if(AE2(a,b)){c=a.wK;if(c!==null)c.l();}}
function AE2(a,b){var c,d;c=W6(b,KM(a));d=c==a.bw?0:1;if(d){a.bw=c;a.d.lT=c/a.Y;}return d;}
function AWs(a){return a.Y;}
function JP(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=HD(a.j.a,a.Y)+7|0;c=a.fB;if(c.data.length<b)a.fB=Tj(b,c,a.cK,a.xY,a.vu,a.d.f);B2(a.bh,0);LA(a.bh,a.g,a.j);d=(a.Y-AAA(a.c6)|0)/2|0;b=a.d.h5-(Wb(a.c6)/2|0)|0;e=a.d;f=b-e.dy|0;g=!a.cb?a.cV:(a.cj+a.ct|0)+a.cY|0;Yo(a.c6,g+f|0,(d+Bb(e.w,a.Y)|0)-a.bw|0);h=CF(a.d.f);i=XM(a);j=XL(a);a.xY=i;a.vu=j;k=!a.cb?a.g.b+a.cV|0:((a.g.b+a.cj|0)+a.ct|0)+a.cY|0;l=FI(a);c=a.d.ke;m=EN(a,40.0);n=i;while(n<=j&&n<h){o=B7(a.d.f,n);p=YF(a,n);P_(p,o,a.bh,a.Y,l,a.d.dy,n,
n%a.fB.data.length|0);a.ib=Bd(a.ib,F5(o)+m|0);b=a.Y;q=Bb(b,n)-a.bw|0;r=c===null?null:c.data[n];d=a.g.a+q|0;e=a.bh;g=a.d.dy;s=a.dV;t=AGk(Bj(a),n);if(t!==null){if(t.a==(-1))t.a=o.P;t.b=G1(o,t.b,a.bh.ch,a.fG);t.a=G1(o,t.a,a.bh.ch,a.fG);}o=a.d;Q4(p,d,k,e,l,b,g,s,t,o.iV,o.iB,o.w!=n?0:1,c===null?0:1,r);n=n+1|0;}e=a.cv.c9;n=i;while(n<=j&&n<h&&a.lj){p=YF(a,n);q=Bb(a.Y,n)-a.bw|0;r=Bj(a);if(!Dq(r))u=0;else{o=D5(r);r=F3(r);u=o.J<=n&&n<r.J?1:0;}s=a.dV;r=s.bp;v=r.tP;w=a.d.w==n&&c===null?1:0;a:{if(u)v=r.lf;else{if(c!==null)
{x=c.data;if(n<x.length&&x[n]!==null){v=I8(s.dU,s,x[n].gL);break a;}}if(w)v=r.gy;}}ADN(p,a.bh,k,a.g.a+q|0,a.Y,e,a.d.dy,l,v);n=n+1|0;}if(a.jz){y=Bc(j+1|0,h);AGW(a,Bb(a.Y,y)-a.bw|0,l);}AGI(a);AFP(a,i,j);if(a.kE)AII(a,i,j,h);if(a.nM&&f>=(( -Wb(a.c6)|0)/2|0)){e=a.c6;p=a.j;if(ADq(e.eO.u,0,0,p))XS(a.c6,a.bh,a.g);}AGg(a);AFj(a);Gc(a.bh);}
function AII(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.ke;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.dV;h=I8(h.dU,h,g.gL);}else h=e!==null?a.dV.bp.eb:a.dV.bp.gy;if(!(a.d.w!=b&&g===null)){g=a.hH;i=a.cb;g.b=!i?(a.ct-a.cj|0)-a.d8|0:((a.ct+a.cY|0)+a.cj|0)-a.d8|0;j=a.Y;g.a=j;i=i?0:(a.cV-a.ct|0)+a.cj|0;j=Bb(j,b)-a.bw|0;k=a.bh;l=a.g;Bu(k,l.b+i|0,l.a+j|0,g,h);}b=b+1|0;}}
function AFP(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.j.a;e=Bc(d,Bb(CF(a.d.f),a.Y)-a.bw|0);f=a.dj;g=a.bw;h=a.d;i=h.ke===null?h.w:(-1);j=a.bh;k=a.dV;LA(j,f.f2,f.fl);V$(f,j,b,d);W7(f,b,j);V7(f,g,e,k,j);l=k.jB;if(e<d){h=f.f2;Bu(j,h.b,h.a+e|0,BH(f.fl.b,d-e|0),l.jo);}if(b<=i&&i<=c){k=k.jB;c=i/20|0;h=f.c2;l=Bw(h,c%h.m|0);h=f.f2;d=Bb(f.c2.m,f.g3);c=l.fj.a;b=((l.oU.a-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%De(l.cJ)|0)|0;c=i%l.d6|0;e=l.cu;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;V(l.hJ,l.fj.b,e);f=l.i7;c=i%l.d6|0;d=l.cu;Ct(f,0.0,
Bb(c,d),l.fj.b,d);K8(l,j,b,h,k.rD,k.pI);}Gc(j);}
function XM(a){return Bc(a.bw/a.Y|0,CF(a.d.f)-1|0);}
function XL(a){return Bc(((a.bw+Eh(a)|0)-1|0)/a.Y|0,CF(a.d.f)-1|0);}
function AT9(a,b){return Bb(a.Y,b)-a.bw|0;}
function ATN(a){return a.g;}
function AZl(a){return a.j;}
function Ms(a){Sj(a.dj,a.cK.cc,a.Y,a.cv.cs);}
function YF(a,b){var c;c=a.fB.data;return c[b%c.length|0];}
function ZG(a,b){var c,d,e,f;c=ES(0,J(a.fn),Pd(b));if(!c)b=null;else{b=C(63);if(c<0){b=new BR;X(b);K(b);}if(c!=1){d=b.b7.data.length;if(d&&c){e=B1(Bb(d,c));d=0;f=0;while(f<c){Sq(b,0,J(b),e,d);d=d+J(b)|0;f=f+1|0;}b=Nw(e);}else b=A2E;}}return b;}
function Qr(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BJ(i);k=A18(i).data;Ic(j,c);c=0;l=k.length;if(c>l){f=new BR;X(f);K(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.f;o.co=o.co+1|0;p=Q(Ho,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AWA(h[m],n[m],k[m],b[m],f.bo,f.by);m=m+1|0;}BF(o.iH,p);c=0;while(c<i){b=e.data;K5(o,h[c],n[c],k[c],b[c]);g.o1(CT(h[c]),b[c]);c=c+1|0;}}
function AIO(a){var b;if(Dq(Bj(a)))GX(a);else{b=a.d;Ol(b.f,b.w,b.z);}HA(a);Eo(a);return 1;}
function Dw(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.eq)return 0;if(Dq(Bj(a)))GX(a);c=M6(X_(b,C(208),C(21)),C(209),(-1));d=c.data;b=a.d;e=b.f;f=b.w;g=b.z;AB7(e,f,g,c);h=d.length;if(!h)b=A2E;else{i=0;j=0;while(j<h){i=i+J(d[j])|0;j=j+1|0;}k=B1(i+Bb(h-1|0,J(C(209)))|0);c=k.data;l=0;b=d[0];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<J(C(209))){m=l+1|0;c[l]=P(C(209),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<J(b)){m=l+1|0;c[l]=P(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Nw(k);}F2(e,f,g,0,b);b=a.d;f=b.w;m
=(f+h|0)-1|0;CK(a,m,m!=f?J(d[h-1|0]):b.z+J(d[0])|0,0);F$(a);Eo(a);return 1;}
function GX(a){var b,c,d;b=D5(Bj(a));c=a.d.f;d=Bj(a);OA(c,d,Zp(c,d));CK(a,b.J,b.ba,0);F$(a);Eo(a);}
function F$(a){var b,c;(Bj(a)).ds=0;b=(Bj(a)).bL;c=a.d;Cb(b,c.w,c.z);b=(Bj(a)).bC;c=a.d;Cb(b,c.w,c.z);}
function AGW(a,b,c){var d,e;d=a.j.a;if(b<d){e=a.cv.c9;e.a=d-b|0;d=a.cb;e.b=!d?c+a.d8|0:c+a.cj|0;d=!d?(a.g.b+a.cV|0)-a.d8|0:(((a.g.b+a.ct|0)+a.cY|0)+a.cj|0)-a.d8|0;Bu(a.bh,d,a.g.a+b|0,e,a.dV.bp.eb);}}
function AGg(a){var b;b=a.cb?a.g.b+a.cY|0:a.g.b+a.j.b|0;JC(a.fz,a.bw,a.g.a,Eh(a),NL(a),b,a.cY);b=!a.cb?a.g.b+a.cV|0:((a.g.b+a.cj|0)+a.ct|0)+a.cY|0;Tl(a.fC,a.d.dy,b,FI(a),a.ib,a.g.a+Eh(a)|0,a.cY);}
function AFj(a){var b,c;b=TI(a.fz);c=TI(a.fC);if(!(!b&&!c)){B2(a.bh,1);if(b)G0(a.fz,a.bh);if(c)G0(a.fC,a.bh);if(b)G$(a.fz,a.bh);if(c)G$(a.fC,a.bh);}}
function AGI(a){var b,c,d,e,f;b=a.hH;c=a.j;b.a=c.a;b.b=a.cj;d=!a.cb?a.cV-a.ct|0:(c.b-JW(a)|0)-a.cj|0;b=a.bh;c=a.g;Bu(b,c.b+d|0,c.a,a.hH,a.dV.bp.w3);b=a.hH;d=a.cb;b.b=!d?(a.ct-a.cj|0)-a.d8|0:((a.ct+a.cY|0)+a.cj|0)-a.d8|0;e=d?0:(a.cV-a.ct|0)+a.cj|0;c=a.bh;f=a.g;Bu(c,f.b+e|0,f.a,b,a.dV.bp.eb);}
function W6(b,c){return Bc(Bd(0,b),c);}
function Gl(a){return a.cv.gB;}
function JV(a,b){var c,d,e,f;c=FG(b);d=new L;N(d);H(H(d,C(210)),c);$rt_globals.console.info($rt_ustr(M(d)));Ph(Gl(a),FG(b));CK(a,0,0,0);c=new TU;c.pG=a;c.pD=b;d=EL();BQ(d);e=new TV;e.w9=d;d=AHW(e);e=new AAJ;e.qJ=c;c=b.fT;if(c!==null)c.text().then(Bl(e,"f"),Bl(d,"f"));else{b=b.hM.getFile();f=new AAL;f.sl=e;f.sm=d;b.then(Bl(f,"f"),Bl(d,"f"));}}
function Ir(a,b,c,d,e){if(IB(a,e))return 1;if(c&&d)return 1;if(c)FZ(a,a.bw+((Bb(b,a.Y)*12|0)/10|0)|0);else if(!d){H3(a,a.d.w+b|0,e);W8(a);}return 1;}
function UB(a,b,c,d){var e,f,g;if(IB(a,d))return 1;e=FX(a);if(!c)f=a.d.z+b|0;else if(b>=0)f=Hk(e,a.d.z);else{b=a.d.z;if(!b)f=(-1);else{c=Jw(e,b);if(c>0&&e.d4.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.d4.data[c-1|0];}}if(f>e.P){e=a.d;if((e.w+1|0)<CF(e.f))CK(a,a.d.w+1|0,0,d);}else if(f>=0)Dl(a,f,d);else{e=a.d;b=e.w;if(b>0){g=(B7(e.f,b-1|0)).P;CK(a,a.d.w-1|0,g,d);}}Y9(a);return 1;}
function IB(a,b){if(Dq(Bj(a))&&!b){F$(a);HA(a);return 1;}if(!(b&&Dq(Bj(a))))F$(a);return 0;}
function CK(a,b,c,d){a.d.z=c;return H3(a,b,d);}
function H3(a,b,c){var d;d=a.d;d.w=ES(0,b,CF(d.f)-1|0);return Dl(a,a.d.z,c);}
function Dl(a,b,c){var d,e;a.d.z=ES(0,b,(FX(a)).P);a.d.h5=a.bO===0.0?0:G1(FX(a),a.d.z,a.bh.ch,a.fG);Mm(a);HA(a);if(c)(Bj(a)).ds=1;d=Bj(a);e=a.d;Mn(d,e.w,e.z);(Bj(a)).ds=0;return 1;}
function Ny(a,b){var c;c=AMv(Bj(a));Dl(a,b,0);IH(Bj(a),c);}
function HA(a){W8(a);Y9(a);}
function W8(a){var b,c,d,e,f;b=a.bw;c=b+Eh(a)|0;d=a.d.w;e=a.Y;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))FZ(a,d-e|0);else if(f>(c-e|0))FZ(a,(f-Eh(a)|0)+a.Y|0);}
function Y9(a){var b,c,d,e,f;b=CU(a.cv.ce*30.0);c=a.d.dy;d=c+FI(a)|0;e=a.d.h5;f=e+b|0;if(e<(c+b|0))Ip(a,e-b|0);else if(f>(d-b|0))Ip(a,(f-FI(a)|0)+b|0);}
function IP(a,b){var c,d;CK(a,b.bo,b.by,0);c=Hk(FX(a),a.d.z);Cb((Bj(a)).bC,a.d.w,c);b=(Bj(a)).bL;d=a.d;Cb(b,d.w,d.z);}
function E_(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.g;e=c-d.b|0;f=ES(0,((b.a-d.a|0)+a.bw|0)/a.Y|0,CF(a.d.f)-1|0);g=!a.cb?a.cV:(a.cj+a.ct|0)+a.cY|0;h=Bd(0,(e-g|0)+a.d.dy|0);b=B7(a.d.f,f);d=a.bh.ch;i=a.fG;if(!(b.eX!==null&&!b.gA))Lv(b,d,i);j=b.eX;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.P;else{c=WS(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.P;else{j=UK(b,d,i,c);k=0;e=0;while(e<c){k=k+J(b.s.data[e].v)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=j.data;if
(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A3M){b=new L;N(b);U(H(U(H(U(H(b,C(211)),e),C(212)),h),C(213)),m);$rt_globals.console.info($rt_ustr(M(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DS(f,k);}
function ABu(a,b){var c,d;c=a.d;d=b.bo;c.w=d;c.z=b.by;c.h5=G1(B7(c.f,d),a.d.z,a.bh.ch,a.fG);Mm(a);}
function FX(a){var b;b=a.d;return B7(b.f,b.w);}
function KF(a,b,c){var d,e;d=CU((a.Y*4|0)*c/150.0);e=CU(b);if(d)FZ(a,a.bw+d|0);if(e)Ip(a,a.d.dy+e|0);return 1;}
function Wh(a,b,c){(Bj(a)).ds=0;return 1;}
function N_(a,b,c){var d;if(c)return null;d=F0(a.fz,b.i,a.ry,1);if(d!==null)return d;d=F0(a.fC,b.i,a.xI,0);if(d!==null)return d;Jv(a);ABu(a,E_(a,b.i));L2(a.d);if(!b.bJ&&!(Bj(a)).ds){b=(Bj(a)).bL;d=a.d;Cb(b,d.w,d.z);}(Bj(a)).ds=1;b=Bj(a);d=a.d;Mn(b,d.w,d.z);b=new Z4;b.wk=a;return b;}
function Oq(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cD){b=b.i;e=E_(a,b);f=Jj(a.d.f,e.bo,e.by);g=VY(a,f);h=Nd(a.fu,Eq(a.d),GI(a.d));if(h!==null){i=a.d;c=e.bo;d=e.by;e=new U9;e.B5=a;e.B4=b;e.B3=g;h.vc(i,c,d,e,a.jn);}else{e=Cy(a.d.f.dM,f);if(e!==null){IP(a,e);c=1;}else{e=Cy(a.d.f.du,f);if(e!==null&&!FO(e)){if(e.m!=1){TE(a.kZ,b,e,a,g);c=1;}else{IP(a,Bw(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(E_(a,b.i)).bo;g=B7(a.d.f,c);c=Gv(g,a.d.z);d=Hk(g,a.d.z);b=M1(g,c);if((d-1|0)==g.P){Cb((Bj(a)).bL,
a.d.w,Pd(g));Cb((Bj(a)).bC,a.d.w,g.P);}else{if(b!==null){b=b.v;j=0;c:{while(true){k=b.b7.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.z;if(c==j){c=Gv(g,c-1|0);d=Hk(g,c);}else{if(d!=j){R5(Bj(a),a.d.w);break b;}c=Gv(g,d+1|0);d=Hk(g,c);}}}Cb((Bj(a)).bL,a.d.w,c);(Bj(a)).ds=1;CK(a,a.d.w,d,0);(Bj(a)).ds=0;Jv(a);}}break a;case 3:break;default:break a;}R5(Bj(a),a.d.w);Uh(a.d.he);Jv(a);}}return 1;}
function PU(a,b){var c,d,e,f,g,h,i,j;c=a.cv.cI;if(Ga(a.fz,b.i,c))return 1;if(Ga(a.fC,b.i,c))return 1;d=a.dj;if(GF(b.i,d.f2,d.fl)&&Gs(c)?1:0)return 1;e=b.i;f=!a.cb?a.cV:(a.ct+a.cj|0)+a.cY|0;a:{d=a.g;f=d.b+f|0;g=d.a;h=FI(a);i=Eh(a);j=e.b;if(f<=j&&j<(f+h|0)){f=e.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Gs(c);if(b.cD){e=E_(a,b.i);e.by=Gv(B7(a.d.f,e.bo),e.by);b=a.d.f;if(!Kq(b.dM,e)&&!Kq(b.du,e)?0:1)return DF(c,C(214));}return DF(c,C(183));}
function AX6(a,b){var c,d,e,f,g;c=b.cD;if(c&&b.bl==65){c=CF(a.d.f)-1|0;d=Gf(a.d.f,c);Cb((Bj(a)).bL,0,0);Cb((Bj(a)).bC,CF(a.d.f)-1|0,d);return 1;}if(c&&b.bl==80){JE(a.d);return 1;}if(!a.eq&&c&&b.bl==90){if(Dq(Bj(a)))F$(a);b=a.d.f;b.co=b.co+1|0;e=b.iH;d=e.m;if(!d)e=null;else{f=(EJ(e,d-1|0)).data;e=OW(b,f[0]);c=1;while(c<f.length){OW(b,f[c]);c=c+1|0;}}if(e!==null){CK(a,e.b,e.a,0);Eo(a);}return 1;}if(!c&&!b.di){if(Bo(b.d9,C(215))){Dw(a,C(216));Dl(a,a.d.z-1|0,0);c=1;}else if(Bo(b.d9,C(217))){Dw(a,C(218));Dl(a,a.d.z
-1|0,0);c=1;}else if(Bo(b.d9,C(35))){Dw(a,C(219));Dl(a,a.d.z-1|0,0);c=1;}else if(Bo(b.d9,C(220))){Dw(a,C(221));Dl(a,a.d.z-1|0,0);c=1;}else if(Bo(b.d9,C(222))){Dw(a,C(223));Dl(a,a.d.z-1|0,0);c=1;}else if(!Bo(b.d9,C(224)))c=0;else{Dw(a,C(225));Dl(a,a.d.z-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.di&&!b.cD)){d=b.bl;if(d>=48&&d<=57){c=d-48|0;e=a.oV.data[c];if(e!==null)e.l();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bl){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AFd(a,b))return 1;if(AF9(a,b))return 1;c=b.cD;if(c&&b.bl==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bl;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.di&&!b.kz)return J(b.d9)>0&&Dw(a,b.d9)?1:0;return 0;}return 0;}
function V8(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=XM(a);d=XL(a);if(b.fy!=3&&b.hg==3){e=X4(b.m5);f=new RQ;f.wT=c;f.wU=d;g=new S_;g.tb=f;while(!g.ma&&XH(e,g)){}if(!g.ma&&Bo(C(172),Eq(b))){c=Bd(0,c-100|0);d=Bc(CF(b.f)-1|0,d+100|0);BF(b.m5,BH(c,d));h=BJ(3);i=h.data;i[0]=Fj(b.f,c);e=b.f;j=0;d=Bc(d+1|0,e.A.data.length);k=0;while(k<d){j=j+Gf(e,k)|0;if(k!=(e.A.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.wZ=EK();e=b.eQ;l=new Xf;l.po=b;i=Q(B,3);m=i.data;m[0]=E6(b.f);m[1]=h;b=b.f.c_;g=BM();Wv(b,b.c8,g);h
=BJ(3*g.m|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=Bw(g,o);d=k+1|0;n[k]=b.bV;q=d+1|0;n[d]=b.bZ;k=q+1|0;n[q]=b.fq;o=o+1|0;}m[2]=h;CP(e,l,C(226),i);}}}
function ABq(a){JE(a.d);}
function T5(a){AG7(a.d);}
function Hv(a,b,c){var d,e,f,g,h,i;if(c&&a.eq)return 0;d=D5(Bj(a));e=d.J;if(Dq(Bj(a))){f=a.d.f;g=Bj(a);h=Zp(f,g);if(c)OA(f,g,h);if(c){CK(a,d.J,d.ba,0);F$(a);Eo(a);}}else{h=FM(Fu(a.d.f.A.data[e]),C(209));i=Bc(CF(a.d.f)-1|0,e);Cb((Bj(a)).bC,i,0);if(e>=(CF(a.d.f)-1|0))Cb((Bj(a)).bC,i,Gf(a.d.f,i));else Cb((Bj(a)).bL,i+1|0,0);if(c)GX(a);else CK(a,e,0,0);}b.h(h);return 1;}
function AF9(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.eq)return 0;a:{switch(b.bl){case 8:if(Dq(Bj(a))){GX(a);c=1;}else{b=a.d;d=b.z;if(!d&&!b.w)c=1;else{if(d){e=b.w;c=d-1|0;Ol(b.f,e,c);}else{e=b.w-1|0;c=Gf(b.f,e);b=a.d.f;L9(b,e);F2(b,e,Gf(b,e),1,C(209));}Eo(a);c=CK(a,e,c,0);}}break a;case 9:if(!b.bJ){if(!Dq(Bj(a)))Dw(a,a.fn);else{f=D5(Bj(a));g=F3(Bj(a));c=g.J;d=f.J;e=(c-d|0)+1|0;h=BJ(e);i=h.data;j=Q(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fn;d=d+1|0;e=l;}b=new Zk;m=a.d;AFF(b,m.w,m.z);m=new SU;m.wj
=a;Qr(a,h,0,0,j,b,m);f.ba=f.ba+J(a.fn)|0;g.ba=g.ba+J(a.fn)|0;Ny(a,a.d.z+J(a.fn)|0);Eo(a);}c=1;}else b:{if(!Dq(Bj(a))){b=a.d;f=B7(b.f,b.w);if(f.s.data.length>0){g=ZG(a,f);if(g===null){c=1;break b;}m=a.d;n=m.f;e=m.w;b=DS(e,m.z);n.co=n.co+1|0;o=n.iH;h=Q(Ho,1);h.data[0]=AWA(e,0,1,g,b.bo,b.by);BF(o,h);K5(n,e,0,1,g);GV(f,0,J(g));Ny(a,a.d.z-J(g)|0);}}else{b=D5(Bj(a));f=F3(Bj(a));c=f.J;p=b.J;c=(c-p|0)+1|0;h=BJ(c);k=h.data;j=Q(BC,c);q=j.data;g=a.d;e=g.z;l=g.w;c=0;while(p<=f.J){g=B7(a.d.f,p);if(g.s.data.length>0){g=ZG(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JI(h,c);j=C$(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.J)b.ba=Bd(0,b.ba-J(g)|0);if(p==f.J){f.ba=Bd(0,f.ba-J(g)|0);Ny(a,a.d.z-J(g)|0);}d=d+1|0;}b=DS(l,e);f=new YG;f.ww=a;Qr(a,h,0,1,j,b,f);}Eo(a);c=1;}break a;case 13:if(Dq(Bj(a)))GX(a);b=a.d;EG(B7(b.f,b.w));b=a.d;AHF(b.f,b.w,b.z);Eo(a);c=CK(a,a.d.w+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AIO(a);}return c;}
function AFd(a,b){var c,d,e,f;a:{switch(b.bl){case 33:c=b.cD?H3(a,HD(a.bw,a.Y),b.bJ):Ir(a,2-Zy(Eh(a),a.Y)|0,0,b.di,b.bJ);break a;case 34:c=!b.cD?Ir(a,Zy(Eh(a),a.Y)-2|0,0,b.di,b.bJ):H3(a,((a.bw+Eh(a)|0)/a.Y|0)-1|0,b.bJ);break a;case 35:if(!IB(a,b.bJ)&&!Dl(a,(FX(a)).P,b.bJ)){c=0;break a;}c=1;break a;case 36:if(!IB(a,b.bJ)&&!Dl(a,0,b.bJ)){c=0;break a;}c=1;break a;case 37:c=b.cD;if(c&&b.di){Jv(a);d=a.d.he;e=d.dG;if(e<=0)d=null;else{f=d.ff.data;c=e-1|0;d.dG=c;d=f[c];}if(d===null)c=1;else{CK(a,MO(d),Kz(d),0);IH(Bj(a),
d.lH);c=1;}break a;}c=UB(a,(-1),c,b.bJ);break a;case 38:c=Ir(a,(-1),b.cD,b.di,b.bJ);break a;case 39:c=b.cD;if(c&&b.di){d=a.d.he;e=d.dG;if(e==(d.fb-1|0))d=null;else{f=d.ff.data;c=e+1|0;d.dG=c;d=f[c];}if(d===null)c=1;else{CK(a,MO(d),Kz(d),0);IH(Bj(a),d.lH);c=1;}break a;}c=UB(a,1,c,b.bJ);break a;case 40:c=Ir(a,1,b.cD,b.di,b.bJ);break a;default:}c=0;}if(c&&b.bJ){b=(Bj(a)).bC;d=a.d;Cb(b,d.w,d.z);}if(c)L2(a.d);return c;}
function Jv(a){var b,c,d,e,f,g,h;b=a.d;c=b.he;d=c.dG;c=d<0?null:c.ff.data[d];if(c!==null&&b.w==MO(c)&&a.d.z==Kz(c))return;c=a.d;e=c.he;b=new LW;d=c.w;f=c.z;c=Bj(a);b.nl=DS(d,f);g=AMv(c);b.lH=g;g.ds=0;f=e.dG;h=e.fb;if(f==(h-1|0))YI(e,b);else{d=f+1|0;while(d<h){Uh(e);d=d+1|0;}YI(e,b);}e.dG=e.dG+1|0;}
function Eo(a){a.d.f.v0=Kj(Gl(a));}
function I9(a,b){var c,d,e,f;a.Am=null;Mq(a.dj,null);ABZ(a.d);c=a.d;a.d=b;Sv(c,null,null);Sv(b,a,Gl(a));d=(Cz(a.fu.xX)).data;e=d.length;f=0;while(f<e){d[f].o1(c,b);f=f+1|0;}a.bw=Gq(b.lT*a.Y);}
function VY(a,b){var c;c=MF(a.d.f,b);if(c===null)return C(21);return c.v;}
function KG(a,b){var c,d,e,f,g;a.d.ke=b;if(b===null){Br(Bz(),C(227));Mq(a.dj,null);}else{b=b.data;c=DE(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.gL<<24>>24;e=e+1|0;}Mq(a.dj,c);}}
function UN(a,b){a.d.pC=b;}
function Bj(a){return a.d.rI;}
function Yn(a){var b;b=a.my;if(b!==null)b.h(a);}
function ACF(){var a=this;B.call(a);a.kl=null;a.os=null;a.hC=null;}
function AXn(a,b){var c=new ACF();AMI(c,a,b);return c;}
function AMI(a,b,c){var d,e;a.kl=b;a.os=c;d=null;e=new Zd;e.te=a;b.m7(d,e);b=null;d=new Ze;d.rO=a;c.m7(b,d);}
function Sc(a,b,c){var d,e,f,g,h,i,j;d=a.hC;if(d!==null&&d.h2!==null){e=b!==a.kl?0:1;f=b.jH();g=(b.kj()+f|0)/2|0;h=g-f|0;d=a.hC;d=d.h2.data[GE(d,g,e)];i=g-(!e?d.hn:d.ho)|0;j= -b.gF(f)|0;c.oS(Bb(((!e?d.ho:d.hn)+i|0)-h|0,c.ni())+j|0);return;}}
function XY(){B.call(this);this.yG=null;}
function AKz(a,b){ACb(a.yG,b);}
function XZ(){B.call(this);this.t_=null;}
function AWy(a,b){ACb(a.t_,b);}
function X0(){B.call(this);this.qm=null;}
function AQP(a,b){return AH1(a.qm,b);}
function IL(){var a=this;B.call(a);a.lQ=null;a.tk=null;a.sq=null;}
function A3N(a,b){var c=new IL();Oy(c,a,b);return c;}
function A3O(a,b,c){var d=new IL();AAK(d,a,b,c);return d;}
function Oy(a,b,c){AAK(a,b,null,c);}
function AAK(a,b,c,d){a.lQ=b.cd;a.tk=c;a.sq=d;}
function AOc(a,b){var c,d;if(b.cD&&b.bl==79){c=a.tk;if(c!==null&&b.bJ)Za(a.lQ,c);else MW(a.lQ,a.sq);d=1;}else d=0;return d;}
function XV(){B.call(this);this.xF=null;}
function ARV(a,b){var c,d;c=a.xF;d=Eb(c.q,c.F)?c.F:!Eb(c.q,c.G)?null:c.G;if(d!==null){JV(d,b);c.jp=null;c.lE.hC=null;c.e9.ev=null;}}
function XX(){B.call(this);this.tR=null;}
function AXr(a,b){b=b;return AFg(a.tR,b);}
var ADk=G(0);
function AD1(b,c,d){return Ik(b,c,d,255,new BZ);}
function Ik(b,c,d,e,f){Ct(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function AAm(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AOK(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bm=g+i;e.bq=h+i;e.bd=j+i;return e;}
function H_(b,c,d,e,f){f=AAm(b,c,d,f);f.bD=e;return f;}
function He(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
function Xt(){var a=this;B.call(a);a.bY=null;a.gB=null;a.cI=null;a.bS=null;a.ce=0.0;a.cs=0;a.eF=null;a.dA=null;a.c9=null;a.oq=null;a.Ab=null;a.Ac=null;}
function Kr(a){var b;b=a.eF;if(b!==null)b.wR();}
function KZ(a){var b;b=a.eF;if(b!==null)b.zZ();}
function PR(a,b){var c;c=a.gB.d3!==(Ek()).activeElement?0:1;if(c)KZ(a);a.eF=b;if(c)Kr(a);}
function Gi(a,b){KZ(a);a.eF=b;Kr(a);}
function Eb(a,b){return b!==a.eF?0:1;}
function Jx(a){return a.bY.ch;}
function HR(a,b){return Gu(a.bY,b.i$,Cd(b.hI,a.ce));}
function CG(a,b){return Cd(b,a.ce);}
function AAk(a,b){if(a.cs==b)return 0;a.cs=b;Ia(a.gB);return 1;}
function NU(a,b){var c;c=a.bY;if(!a.cs)c.n2=b;else c.oO=b;Ia(a.gB);}
var UG=G();
function AOT(a,b){var c,d,e;c=b.cD;d=c&&!b.bJ&&!b.di&&!b.kz?1:0;a:{if(d){d=b.bl;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bJ&&!c&&!b.di&&!b.kz?1:0;d=d&&b.bl==46?1:0;}b:{if(!d){e=b.bl;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.lY=1;}return 0;}
function UF(){B.call(this);this.rl=null;}
function AL2(a,b){var c;c=a.rl.eF;return c!==null&&c.h7(b)?1:0;}
var Dz=G(0);
function AIq(){B.call(this);this.cR=null;}
function ASk(){var a=new AIq();AVb(a);return a;}
function AVb(a){a.cR=BM();}
function EX(a,b){Ub(a.cR,0,b);}
function J6(a,b){Y$(a.cR,b);}
function Wl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=a.cR.m-1|0;while(c>=0){d=Bw(a.cR,c);d.S.dB(b);e=d.Q;f=d.dD.ju;if(!Lu(e)){if(!ZF(e)&&!(!e.gE&&e.dI!==null)){e.gE=0;Yh(e);g=e.ec;h=(g.db+g.er+5.0)/10.0;i=CG(e.fS,e.kW);g=b.ch;j=e.ec;k=e.hT;l=h*2.0;Ck(g,j);m=i+LL(g,k,l)|0;e.hU=m;m=ES(0,m,e.j.b);if(m){g=DQ(b,m,e.j.a,e.fS.cs);Ck(g,e.ec);j=e.hT;l=i;h=l+h;k=e.ec;n=k.db;BS(g,j,h,l+n-(n+k.er)/16.0);j=e.dI;if(j===null){j=CS(b);e.dI=j;}CJ(j,g);Er(g);Ct(e.lX,0.0,0.0,Cc(e.dI),De(e.dI));}}g=f.vK;j=e.dI;if(j===null)RY(e,b,
0,e.j.b,g);else{i=Cc(j);f=f.yo;j=e.g;m=j.b;o=j.a;j=e.dI;DU(b,m,o,j.fw,e.lX,j,f,g,e.fS.cs);m=e.j.b;if(i<m)RY(e,b,i,m-i|0,g);}}B2(b,1);i=CG(d.bt,2.0);m=Lu(d.Q);f=d.bt;e=f.c9;f=f.oq;p=m?0:d.Q.j.a;g=d.S.j;V(f,g.b,g.a+p|0);AD$(b,f,!m?d.Q.g:d.S.g,d.dD.ju.nh, -i|0,e);f=d.S;AGj(b,f.j,f.g,i,p,Rw(d.dD.kd,d.bt.ce),d.dD.kd.oi,e);c=c+(-1)|0;}}
function ACB(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cR;if(c>=d.m)break;a:{e=Bw(d,c);f=b.i;if(B$(e.Q,f))g=DF(e.bt.cI,null);else{g=CG(e.bt,7.0);h=CG(e.bt,25.0);if(Qg(e,f.b,g)){i=PD(e,f.b,h);if(RE(e,f.a,g)){g=DF(e.bt.cI,MP(i,C(228)));break a;}if(Pv(e,f.a,g)){g=DF(e.bt.cI,MP( -i|0,C(228)));break a;}}if(ZM(e,f.a,g)){h=AAu(e,f.a,h);if(ABX(e,f.b,g)){g=DF(e.bt.cI,MP(h,C(229)));break a;}if(Ou(e,f.b,g)){g=DF(e.bt.cI,MP( -h|0,C(229)));break a;}}g=0;}}b:{c:{if(!g){if(!B$(e.S,b.i))break c;if(!e.S.bz(b)&&!DF(e.bt.cI,
null))break c;}g=1;break b;}g=0;}if(g)return 1;c=c+1|0;}return 0;}
function ADC(a,b,c,d){var e,f,g,h;e=0;while(true){f=a.cR;if(e>=f.m)break;a:{b:{g=Bw(f,e);if(!B$(g.Q,b.i)){if(!B$(g.S,b.i))break b;if(!g.S.b6(b,c,d))break b;}h=1;break a;}h=0;}if(h)return 1;e=e+1|0;}return 0;}
function AE_(a,b,c){var d,e,f,g,h,i,j,k;d=0;while(true){e=a.cR;if(d>=e.m)return null;a:{f=Bw(e,d);if(!c){b:{e=b.i;if(!Lu(f.Q)&&B$(f.Q,e)){g=f.S.g;h=g.b;i=e.b;h=h-i|0;j=g.a;k=e.a;j=j-k|0;e=f.Q.g;i=e.b-i|0;k=e.a-k|0;g=new Bh;e=new RN;e.wu=f;e.wm=i;e.wl=k;e.wo=g;e.wn=h;e.wp=j;}else{h=CG(f.bt,7.0);i=CG(f.bt,25.0);if(Qg(f,e.b,h)){j=PD(f,e.b,i);if(RE(f,e.a,h)){e=Jd(f,e,j,(-1));break b;}if(Pv(f,e.a,h)){e=Jd(f,e,j,1);break b;}}if(ZM(f,e.a,h)){i=AAu(f,e.a,i);if(ABX(f,e.b,h)){e=Jd(f,e,(-1),i);break b;}if(Ou(f,e.b,h))
{e=Jd(f,e,1,i);break b;}}e=null;}}if(e!==null)break a;}e=B$(f.Q,b.i)?A3P:!B$(f.S,b.i)?null:f.S.bQ(b,c);}if(e!==null)break;d=d+1|0;}return e;}
function AIs(a,b,c){var d,e,f,g;d=0;while(true){e=a.cR;if(d>=e.m)break;a:{b:{f=Bw(e,d);if(!B$(f.Q,b.i)){if(!B$(f.S,b.i))break b;if(!f.S.cH(b,c))break b;}g=1;break a;}g=0;}if(g)return 1;d=d+1|0;}return 0;}
function V5(a,b,c,d){var e,f;e=0;while(true){f=a.cR;if(e>=f.m)break;if((Bw(f,e)).S.c4(b,c,d))return 1;e=e+1|0;}return 0;}
function AQk(a,b,c){var d,e,f;d=0;while(true){e=a.cR;if(d>=e.m)break;f=Bw(e,d);e=f.S;e.eJ(e.g,e.j,c);e=f.Q;if(e.hO!==null){e.ec=null;e.hU=0;e.gE=1;}Ke(f);d=d+1|0;}}
function AHD(){var a=this;B.call(a);a.c7=null;a.cf=null;a.kw=null;a.kY=null;a.ok=null;a.lh=null;}
function Lb(a){var b=new AHD();AUT(b,a);return b;}
function AUT(a,b){a.cf=BM();a.lh=A3Q;a.c7=b;Y(b.dA,a);}
function HZ(a,b,c){a.kw=c;a.ok=b;b=B8(a.cf);while(B_(b)){Iy(Ca(b),a.ok);}}
function FP(a,b,c,d){var e,f;e=a.c7;f=e.bS;if(Bb(f.b,f.a)&&e.ce!==0.0){if(a.kw!==null&&!Dk(a)){a.lh=d;a.kY=HR(a.c7,a.kw);e=Qq(a,b,c,null);b=new Y5;b.v4=a;e.k4=b;Gi(a.c7,a);return;}b=new BR;X(b);K(b);}c=new CY;Bm(c,C(230));K(c);}
function D0(a){var b;if(Dk(a)){b=a.c7;if(b.eF===a)b.eF=null;WG(a,null);a.lh.l();a.lh=A3Q;}}
function AAp(a,b,c,d,e){var f,g,h;f=AFt();AB9(f);K$(f,c.dn());Iy(f,a.ok);It(f,a.kY,a.c7);if(d===null)g=b.b;else{g=b.b;g=a.c7.bS.b<((g+(Eu(d)).b|0)+(Eu(f)).b|0)?g-(Eu(f)).b|0:(g+(Eu(d)).b|0)-d.fP|0;}h=b.a;b=a.c7.bS;KY(f,Bd(0,Bc(g,b.b-(Eu(f)).b|0)),Bd(0,Bc(h,b.a-(Eu(f)).a|0)));b=new AAZ;b.r9=a;b.r$=f;b.r_=e;f.mw=b;BF(a.cf,f);return f;}
function Qq(a,b,c,d){return AAp(a,b,c,d,null);}
function AYO(a,b,c){var d;a.kY=HR(a.c7,a.kw);d=B8(a.cf);while(B_(d)){It(Ca(d),a.kY,a.c7);}}
function Gw(a){var b,c;if(FO(a.cf))return;B2(a.c7.bY,1);b=0;while(true){c=a.cf;if(b>=c.m)break;MZ(Bw(c,b),a.c7);b=b+1|0;}}
function LX(a,b){var c,d;c=0;d=a.cf.m-1|0;a:{while(d>=0){c=L0(Bw(a.cf,d),b.i,a.c7.cI);if(c)break a;d=d+(-1)|0;}}return c;}
function KI(a,b,c,d){var e,f;e=0;f=a.cf.m-1|0;a:{while(f>=0){e=MQ(Bw(a.cf,f),b.i,c,d);if(e)break a;f=f+(-1)|0;}}return e;}
function Ns(a,b,c){var d,e,f;d=null;e=a.cf.m-1|0;a:{while(e>=0){f=Bw(a.cf,e);d=b.i;c=Fb(f.cn,d);if(!c&&!Li(f.cn)){d=f.k4;if(d!==null)d.l();}d=!c?null:A3P;if(d!==null)break a;e=e+(-1)|0;}}return d;}
function ARf(a,b){var c;if(!Dk(a))return 0;a:{switch(b.bl){case 27:D0(a);c=1;break a;default:}c=0;}return c;}
function AEM(b,c){var d,e,f;d=b.e_;e=c.c1;f=c.fP;return BH((d.b-(e*3|0)|0)-f|0,(d.a-e|0)-f|0);}
function WG(a,b){var c,d;c=a.cf.m-1|0;a:{while(true){if(c<0)break a;d=Bw(a.cf,c);if(b===d)break;EJ(a.cf,c);Pp(d);c=c+(-1)|0;}}}
function Dk(a){return a.cf.m<=0?0:1;}
function AEd(){var a=this;B.call(a);a.eO=null;a.me=0.0;a.ii=0.0;a.gV=0;}
function AOS(){var a=new AEd();AT5(a);return a;}
function AT5(a){var b;b=Wo(0,0,2,20);a.eO=b;a.me=0.5;a.ii=0.0;Ik(187,187,187,255,b.U);}
function AAA(a){return a.eO.t.a;}
function Wb(a){return a.eO.t.b;}
function Wm(a,b){var c,d;a:{c=a.gV;if(b>a.ii)while(true){d=a.ii+a.me;a.ii=d;a.gV=a.gV?0:1;if(b>d)continue;else break a;}}return a.gV==c?0:1;}
function Yo(a,b,c){V(a.eO.u,b,c);}
function R_(a,b){a.ii=b+a.me*1.25;a.gV=1;}
function XS(a,b,c){if(a.gV)T7(a.eO,b,c.b,c.a);}
function Nl(){var a=this;B.call(a);a.fV=null;a.f=null;a.n1=null;a.rI=null;a.he=null;a.j0=null;a.eQ=null;a.ke=null;a.w=0;a.z=0;a.h5=0;a.iV=null;a.iB=null;a.m5=null;a.fy=0;a.hg=0;a.hA=0;a.i5=Fr;a.wZ=Fr;a.ya=Fr;a.pC=0;a.Bj=0;a.dy=0;a.lT=0.0;a.fo=0;}
function AZ1(a,b,c){var d=new Nl();AH9(d,a,b,c);return d;}
function A0a(a,b,c){var d=new Nl();ABf(d,a,b,c);return d;}
function AH9(a,b,c,d){var e,f;e=J(b);BQ(b);f=new PI;f.vW=b;ABf(a,(AHh(e,f)).mb,c,d);}
function ABf(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.rI=AKX();f=new Xl;f.ff=Q(LW,16);f.fb=0;f.dG=(-1);a.he=f;a.iV=null;a.iB=BM();a.m5=BM();a.fy=1;a.hg=1;a.hA=1;a.dy=0;a.lT=0.0;a.fo=0;a.fV=d;a.n1=c;c=new T9;g=e.length;b=Q(Dv,Bd(1,g));if(!g)b.data[0]=QH(C(21));h=b.data;i=0;while(i<g){h[i]=QH(e[i]);i=i+1|0;}d=new RR;f=new LT;Sd(f);d.eR=f;c.ey=d;c.dM=U2();c.du=U2();c.iH=BM();if(!h.length){c=new BR;X(c);K(c);}c.A=b;j=Yf(c);c.c_=AHd(AXy(KA(0,j,0),null,null));a.f=c;}
function Eq(a){var b;b=a.n1;if(b===null){b=a.fV;if(b===null)b=C(183);else{b=b.gh;b=b===null?C(183):!D_(b,C(231))&&!D_(b,C(232))&&!D_(b,C(233))&&!D_(b,C(234))&&!D_(b,C(235))&&!D_(b,C(236))?(D_(b,C(237))?C(172):D_(b,C(238))?C(239):!D_(b,C(240))?C(183):C(185)):C(184);}}return b;}
function GI(a){var b;b=a.fV;return b===null?null:b.j$;}
function Nm(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hg=3;a.hA=3;a.fy=3;c=CL(b[0]);d=EQ(b[1]);CL(b[2]);if(b.length<5)X8(a.f,c,d);else{e=CL(b[3]);f=e.data;g=EQ(b[4]);PY(a.f,c,d,e,g,0);XF(a,JI(e,f.length),M4(g));}if(a.fo){h=EH(a);i=IK(EK(),a.i5);j=new L;N(j);H(GU(H(H(j,h),C(241)),i),C(242));$rt_globals.console.info($rt_ustr(M(j)));}h=a.j0;if(h!==null)Yn(h);}
function L2(a){var b;Vk(a,DS(a.w,a.z),Jj(a.f,a.w,a.z));if(!(a.iV!==null&&!FO(a.iB))){b=a.z;if(b>0)Vk(a,DS(a.w,b-1|0),Jj(a.f,a.w,a.z-1|0));}}
function Vk(a,b,c){var d,e,f,g,h,i,j,k;ABZ(a);d=Cy(a.f.dM,c);if(d!==null)c=d;a:{e=Cy(a.f.du,c);if(e!==null){a.iV=MF(a.f,c);c=B8(e);while(true){if(!B_(c))break a;f=Ca(c);BF(a.iB,MF(a.f,f));}}}c=a.j0;if(c!==null){g=b.bo;h=b.by;b=c.fu;f=Eq(c.d);e=GI(c.d);i=(Cz(b.yu)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.yx(f,e)){b=b.C3;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new WT;e.Dt=c;e.Dr=f;e.Ds=g;e.Dq=h;b.vc(f,g,h,e,c.jn);}}}
function ABZ(a){a.iV=null;Kx(a.iB);}
function XF(a,b,c){var d,e,f,g,h;if(a.eQ!==null){a.ya=EK();d=a.f.co;e=a.eQ;f=new RC;f.uz=a;g=Q(B,3);h=g.data;h[0]=b;h[1]=c;b=BJ(1);b.data[0]=d;h[2]=b;CP(e,f,C(243),g);}}
function Sv(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.j0=b;a.eQ=c;if(c===null){d=a.f.A.data;e=d.length;f=0;while(f<e){WB(d[f]);f=f+1|0;}}else if(a.fy==1){a.i5=EK();b=Eq(a);e=BV(b,C(172));f=BV(b,C(185));d=E6(a.f);g=d.data.length;h=!e?5120:10240;i=ACA(b);if(f)IN(a,d,i);else if(g<=h)IN(a,d,i);else if(!e){AAy(a,M4(d),i);IN(a,d,i);}else{AAy(a,M4(d),i);j=M4(d);c=a.eQ;k=new Xe;k.v7=a;l=Q(B,2);m=l.data;m[0]=j;j=BJ(1);j.data[0]=i;m[1]=j;CP(c,k,C(244),l);a.hg=2;IN(a,d,i);}}}
function AAy(a,b,c){var d,e;d=a.eQ;e=new Q5;e.xD=a;CP(d,e,C(245),I(B,[b,DD([c,250])]));a.hA=2;}
function IN(a,b,c){var d,e,f,g;d=a.eQ;e=new AB0;e.qP=a;f=Q(B,2);g=f.data;g[0]=b;b=BJ(1);b.data[0]=c;g[1]=b;CP(d,e,C(246),f);a.fy=2;}
function EH(a){var b;b=a.fV;return b===null?C(21):Yk(b);}
function JE(a){var b,c,d,e,f;if(a.fo){b=EH(a);c=new L;N(c);H(H(c,b),C(247));$rt_globals.console.info($rt_ustr(M(c)));}b=Eq(a);if(b===null)d=null;else{a:{e=(-1);switch(I5(b)){case -1655966961:if(!Bo(b,C(185)))break a;e=3;break a;case 3401:if(!Bo(b,C(239)))break a;e=2;break a;case 98723:if(!Bo(b,C(184)))break a;e=1;break a;case 3254818:if(!Bo(b,C(172)))break a;e=0;break a;case 3556653:if(!Bo(b,C(183)))break a;e=4;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(248);break b;case 2:d=C(249);break b;case 3:d
=C(250);break b;case 4:d=C(251);break b;default:d=null;break b;}d=C(252);}}if(d===null)Yn(a.j0);else{a.i5=EK();b=a.eQ;c=new Yl;c.pi=a;f=Q(B,1);f.data[0]=E6(a.f);CP(b,c,d,f);}}
function AG7(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.fo){b=EH(a);c=new L;N(c);H(H(c,b),C(253));$rt_globals.console.info($rt_ustr(M(c)));}b=Eq(a);if(b!==null&&!Bo(C(183),b)){if(Bo(C(185),b)){JE(a);H9(a.f);}else{c=a.f.c_;d=RX(c,c.c8);if(d===null){M3(a);H9(a.f);return;}e=DD([Df(d),Dc(d),d.bW.fq]);f=E6(a.f);g=BJ(1);g.data[0]=ACA(b);c=a.f.ey;if(c.fE===null){h=BJ(0);i=B1(0);}else{j=AYX(AMh(d.ci,c.eR),d);Pg(j);h=j.lO;i=j.mf;}k=a.f.co;d=a.eQ;c=new UA;c.yJ=a;l=Q(B,6);m=l.data;m[0]=f;m[1]=g;m[2]=e;e=BJ(1);e.data[0]=k;m[3]
=e;m[4]=h;m[5]=i;CP(d,c,C(254),l);}}else H9(a.f);}
function M3(a){var b;b=AYX(a.f.ey,null);Pg(b);XF(a,b.lO,b.mf);}
function AA1(){var a=this;B.call(a);a.sX=null;a.zO=null;a.pZ=null;a.yu=null;a.xX=null;a.xB=null;}
function Nd(a,b,c){return TG(a,Cz(a.sX),b,c);}
function Tf(a,b,c){return TG(a,Cz(a.zO),b,c);}
function TG(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.yx(c,d))return g.BJ;f=f+1|0;}return null;}
function Xd(a,b,c){var d,e,f,g;d=(Cz(a.pZ)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.yx(b,c))return g.BA;f=f+1|0;}return null;}
function E4(){var a=this;B.call(a);a.b4=0;a.c0=null;a.cA=null;a.el=null;a.dE=0;}
var A3R=0;var A3L=0;function P_(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cA;j=i===b&&!i.hN?0:1;if(j){a.cA=b;Lv(b,c.ch,a.c0.gC);}k=HD(Bc(F5(b),e+2048|0),1024);l=a.el;m=l.data.length;n=k<=m?0:1;if(n){a.el=C$(l,k);while(m<k){a.el.data[m]=CS(c);m=m+1|0;}}o=a.c0.e$;if(!(!j&&!n)){if(A3R){l=b.gk;$rt_globals.console.info("fMeasure"+l.data);A3R=0;}if(!A3L){c=o.c5;b="alphabetic";c.textBaseline=b;}else{b=o.c5;c="top";b.textBaseline=c;}a.dE=f/1024|0;p=0;while(p<k){Jp(a,o,d,a.dE+p|0);p=p+1|0;}a.cA.hN=0;}e=a.el.data.length;if
(e&&f<=F5(a.cA)){f=f/1024|0;g=a.dE;if(f!=g){if(N4(f-g|0)>=e){g=0;while(g<e){Jp(a,o,d,f+g|0);g=g+1|0;}a.dE=f;}else{while(true){g=a.dE;if(g>=f)break;Jp(a,o,d,g+e|0);a.dE=a.dE+1|0;}while(true){g=a.dE;if(g<=f)break;Jp(a,o,d,g-1|0);a.dE=a.dE-1|0;}}}}}
function LN(b,c){return (c-EU(b)|0)/2|0;}
function J3(b,c){return LN(b,c)+b.uK|0;}
function Jp(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Rt(a,e);g=a.cA;if(f>=g.s.data.length)return;h=g.gk;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.b4;l=a.c0.gC;ET(b);a:{while(true){g=a.cA;if(f>=g.s.data.length)break a;m=l.data;g=IY(g,f);n=m[J8(g)];o=!A3L?J3(n,c):LN(n,c);m=h.data;Ck(b,n);BS(b,g.v,k,o);k=m[f]-j+a.b4;if(k>1024.0)break;f=f+1|0;}}h=a.el.data;CJ(h[d%h.length|0],b);}
function Q4(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.el.data.length;if(!o)return;if(g>F5(a.cA))return;p=a.cA;q=p.eX;r=p.s;s=g/1024|0;t=Rt(a,g);u= -a.b4|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.el.data[s%o|0];bb=w[t];bc=z[t]+a.b4|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Bc(bf,bc)-g|0;if(bd&&y)bg=bg+a.b4|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.b4:2*a.b4|0;bj=
i.b;bk=i.a;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.b4:2*a.b4|0;if(g>=i.b&&(g+bg|0)<=(i.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bp.gy;if(bb===j)bo=h.bp.rA;if(k!==null){p=B8(k);d:{while(B_(p)){if(BV(Ca(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bp.zR;}if(n!==null){w=n.ny;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=ACd(h.dU,h,bi,n.gL);}if(!bn&&!bl){i.a=Bc(i.a,F5(a.cA));AFO(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.b?bg:(Bc(bc,bf)-i.b|0)-(!y?a.b4:0)|0,(g
+bg|0)<=(i.a+(!y?a.b4:2*a.b4|0)|0)?0:(Bc(bc,bf)-i.a|0)-(!y?a.b4:0)|0,g-x|0,bo);}else{bp=h.kU.data[bb.b1];p=bn?h.bp.lf:Wk(bo,O3(h,bp.l$));Ct(a.c0.h6,g-x|0,0.0,bg,v);V(a.c0.hK,bg,f);Hu(a.c0,d,ba,u+c|0,b,bp.hW,p);}if((bb.bK&12)>>2>0){bc=u+c|0;B2(d,1);p=a.c0;bq=p.nB;bq.b=bg;x=b+p.v1|0;bk=x-p.zj|0;br=p.qd;bs=x+br;ba=p.hf;X$();MX(d,bc,bk,bq,br,bs,ba,A3S.jv.hW);B2(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AFO(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kU.data[h.b1];o=n.hW;p=Wk(m,O3(f,n.l$));q=f.bp.lf;f=a.c0;r=f.h6;s=f.hK;t=l;u=i-j|0;v=u;w=e;Ct(r,t,0.0,v,w);V(s,u,e);Hu(a.c0,b,g,c,d,o,p);l=l+i|0;Ct(r,l-k|0,0.0,k,w);V(s,k,e);f=a.c0;c=c+i|0;Hu(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Ct(r,t,0.0,i,w);V(s,i,e);Hu(a.c0,b,g,c-j|0,d,o,q);}
function Wk(b,c){if(b!==null)c=b;return c;}
function Rt(a,b){var c,d,e,f,g,h,i;c=a.cA;d=c.gk;e=0;f=c.s.data.length;g=b;b=BG(e,f);if(b>0){c=new BR;X(c);K(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BG(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function ABp(a){var b,c,d;b=a.el.data;c=b.length;d=0;while(d<c){AGz(b[d]);d=d+1|0;}a.el=a.c0.n5;a.cA=null;}
function ADN(a,b,c,d,e,f,g,h,i){var j,k;j=F5(a.cA);if(j)j=j+a.b4|0;if(!j)j=j-a.b4|0;k=Bd( -a.b4|0,j-g|0);if(k>=h)return;V(f,h-k|0,e);Bu(b,c+k|0,d,f,i);}
function Tj(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;a:{c=c.data;h=Bz();i=new L;N(i);U(H(i,C(255)),b);Br(h,M(i));j=Q(E4,b);k=0;l=c.length;if(l>0){m=j.data;while(true){if(e>f)break a;h=g.v9(e);n=e%m.length|0;o=e%l|0;i=c[o];if(i.cA===h&&m[n]===null){m[n]=i;c[o]=null;}e=e+1|0;}}}m=j.data;e=0;f=m.length;while(e<f){if(m[e]===null){if(k>=l)p=null;else{b=k+1|0;p=c[k];k=b;}while(k<l&&p===null){b=k+1|0;p=c[k];k=b;}if(p!==null){m[e]=p;c[k-1|0]=null;}else{g=new E4;g.b4=3;g.dE=0;g.c0=d;g.el=d.n5;m[e]=g;}}e=e+1|0;}while(k<l){p
=c[k];if(p!==null)ABp(p);k=k+1|0;}return j;}
function Wa(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cA;if(e!==null)e.hN=1;d=d+1|0;}}
function AAz(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){ABp(b[d]);d=d+1|0;}}
function AFQ(){A3L=0;}
function AIA(){var a=this;B.call(a);a.fM=null;a.dg=null;a.eA=null;a.e3=null;a.ly=null;a.oW=null;}
function Jk(){var a=new AIA();APQ(a);return a;}
function APQ(a){a.fM=new Bh;a.dg=new Bh;a.eA=new Bh;a.e3=new Bh;a.ly=new BZ;a.oW=new BZ;}
function TI(a){var b;b=a.dg;return !Bb(b.b,b.a)?0:1;}
function Iw(a,b){return GF(b,a.eA,a.e3);}
function F0(a,b,c,d){var e,f,g,h,i;e=Iw(a,b);f=GF(b,a.fM,a.dg);if(!e&&!f)return null;if(!f){if(!d)c.h(ZL(a,b.b-a.eA.b|0));else c.h(R2(a,b.a-a.eA.a|0));}g=!d?a.fM.b+(a.dg.b/2|0)|0:a.fM.a+(a.dg.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new US;b.y0=a;b.y1=c;b.yZ=i;}else{b=new UR;b.r6=a;b.r4=c;b.r5=i;}return b;}
function Hw(a,b,c){if(c!==null)BT(a.ly,c);if(b!==null)BT(a.oW,b);}
function AEu(b,c){var d;d=new Xq;d.uM=b;d.z3=c;return d;}
function R2(a,b){var c,d,e;c=a.e3.a;d=a.dg.a;e=c-d|0;return AEu(Bc(Bd(0,b-(d/2|0)|0),e),e);}
function ZL(a,b){var c,d,e;c=a.e3.b;d=a.dg.b;e=c-d|0;return AEu(Bc(Bd(0,b-(d/2|0)|0),e),e);}
function JC(a,b,c,d,e,f,g){Z$(a,b,c,d,e,f,g,1);}
function Tl(a,b,c,d,e,f,g){Z$(a,b,c,d,e,f,g,0);}
function Z$(a,b,c,d,e,f,g,h){var i,j,k,l;if(e<=d){V(a.e3,0,0);V(a.dg,0,0);}else{i=Bc(g*3|0,d);j=Bd(Sr(d,d,e),i);e=e-d|0;i=d-j|0;i=i?Sr(b,i,e):0;if(!h){k=a.fM;k.b=i+c|0;k.a=f-g|0;l=a.dg;l.b=j;l.a=g;l=a.eA;l.b=c;l.a=k.a;k=a.e3;k.b=d;k.a=g;}else{k=a.fM;k.b=f-g|0;k.a=i+c|0;l=a.dg;l.b=g;l.a=j;l=a.eA;l.b=k.b;l.a=c;k=a.e3;k.b=g;k.a=d;}}}
function AAD(a,b){G0(a,b);G$(a,b);}
function G0(a,b){var c;c=a.eA;Bu(b,c.b,c.a,a.e3,a.ly);}
function G$(a,b){var c,d;c=a.dg;c.b=c.b-2|0;c.a=c.a-2|0;d=a.fM;Bu(b,d.b+1|0,d.a+1|0,c,a.oW);b=a.dg;b.b=b.b+2|0;b.a=b.a+2|0;}
function Ga(a,b,c){return Iw(a,b)&&Gs(c)?1:0;}
function AEb(){var a=this;B.call(a);a.B0=20;a.f2=null;a.fl=null;a.j8=0.0;a.j1=null;a.h0=0;a.k8=0;a.g3=0;a.c2=null;a.lG=null;a.e2=null;a.gd=null;a.f$=0;}
function AIn(){var a=new AEb();AYb(a);return a;}
function AYb(a){a.B0=20;a.f2=new Bh;a.fl=new Bh;a.c2=BM();a.lG=DE(0);}
function W7(a,b,c){var d,e,f,g,h;d=a.f$;if(b==d)return;e=a.c2.m;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){T_(a,b);a.f$=b;}else{QE(a,c);if(a.f$>=b)while(true){if(h<g)break a;a.f$=Pm(Bw(a.c2,h%e|0),a.e2,a.gd,a.f$,b,f,a.j8);h=h+(-1)|0;}while(g<=h){a.f$=Pm(Bw(a.c2,g%e|0),a.e2,a.gd,a.f$,b,f,a.j8);g=g+1|0;}}}}
function Mq(a,b){if(b===null)b=DE(0);a.lG=b;}
function V7(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.g3;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c2;h=Bw(h,g%h.m|0);i=a.f2;j=a.lG;k=h.fj.a;l=d.jB;m=b+f|0;n=h.cu;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&AB4(d,j,r,l)!==l.jo?0:1){k=Bb((q-p|0)+1|0,h.cu);V(h.hJ,Cc(h.cJ),k);Ct(h.i7,0.0,Bb(p,h.cu),Cc(h.cJ),k);t=r;}else{u=AB4(d,j,r,l);K8(h,e,f+Bb(p,h.cu)|0,i,l.mi,u);V(h.hJ,Cc(h.cJ),h.cu);Ct(h.i7,0.0,Bb(q,h.cu),Cc(h.cJ),h.cu);p=q;}q=q+1|0;r=t;}u=AB4(d,j,r,
l);K8(h,e,f+Bb(p,h.cu)|0,i,l.mi,u);g=g+1|0;f=f+a.g3|0;}}
function V$(a,b,c,d){var e,f,g,h,i,j;e=a.c2.m;while(true){f=a.c2.m;g=Bb(f,a.g3);if(g>(d+a.k8|0))break;h=BH(0,g);i=new Sb;g=a.fl.b;f=a.k8;j=a.j1;i.hJ=new Bh;i.i7=new BZ;i.oU=h;i.d6=20;i.cu=f;i.fj=BH(g,20*f|0);i.hr=J3(j,f);if(i.cJ===null)i.cJ=CS(b);BF(a.c2,i);}if(f==e)return;QE(a,b);T_(a,c);}
function T_(a,b){var c,d,e,f,g,h,i,j,k;c=a.c2;d=c.m;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B8(c);while(B_(c)){f=Ca(c);g=a.e2;h=a.j8;ET(g);i=0;while(true){j=f.d6;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;GK(f,g,Db(e),Bb(f.cu,i)+f.hr|0,h);i=i+1|0;}CJ(f.cJ,g);f.p0=g.hQ;}}
function Sj(a,b,c,d){a.j1=b;a.k8=c;a.g3=c*20|0;a.h0=d;Sn(a);}
function QE(a,b){var c;c=a.e2;if(!(c!==null&&c.hQ==a.h0)){c=DQ(b,a.fl.b,a.g3,a.h0);a.e2=c;Ck(c,a.j1);UL(a.e2,2);}c=a.gd;if(!(c!==null&&c.hQ==a.h0)){b=DQ(b,a.fl.b,a.k8,a.h0);a.gd=b;Ck(b,a.j1);UL(a.gd,2);}}
function KK(a){E5(a.c2,new AAV);Kx(a.c2);Sn(a);}
function Sn(a){a.e2=Cx(a.e2,null);a.gd=Cx(a.gd,null);}
function UU(a,b,c,d,e){Co(a.f2,b);V(a.fl,c,d);a.j8=e;}
function PN(){B.call(this);this.Cm=null;}
function PM(){B.call(this);this.py=null;}
function AKV(a,b){var c;c=a.py;FZ(c,FK(b,KM(c)));}
function PL(){B.call(this);this.ur=null;}
function AJM(a,b){var c;c=a.ur;Ip(c,FK(b,Wi(c)));}
function AGm(){var a=this;B.call(a);a.h6=null;a.hK=null;a.nB=null;a.hf=null;a.gC=null;a.n5=null;a.cc=null;a.e$=null;a.qd=0.0;a.dY=0;a.v1=0;a.zj=0;a.iM=0;}
function AQV(a){var b=new AGm();AW4(b,a);return b;}
function AW4(a,b){var c;a.h6=new BZ;a.hK=new Bh;a.nB=new Bh;c=new BZ;a.hf=c;a.gC=Q(L4,4);a.n5=Q(H8,0);a.iM=b;L8(c);}
function UY(a,b,c){var d,e;d=CU(EU(a.cc)*b);a.dY=d;e=a.cc;a.v1= -( -((d+e.db+e.er)/2.0)|0)|0;ABN(a,c);return a.dY;}
function Ql(a,b){var c,d;L8(a.hf);c=a.hf;Zw(c,b,c);a.qd=Pf(a.hf);c=a.hf;d=c.bq+c.bd+1.5|0;a.zj=d;V(a.nB,0,d*2|0);}
function ABN(a,b){a.e$=Cx(a.e$,DQ(b,1024,a.dY,a.iM));}
function Hu(a,b,c,d,e,f,g){var h,i;h=a.hK;if(h.b&&h.a){i=a.h6;if(i.bD!==0.0&&i.bd!==0.0){DU(b,d,e,h,i,c,f,g,a.iM);return;}}}
function WZ(a,b,c,d){var e,f;Ck(a.e$,a.cc);e=DQ(d,Ll(a.e$,b)+(c*2|0)|0,a.dY,a.iM);Ck(e,a.cc);BS(e,b,c,J3(a.cc,a.dY));f=CS(d);CJ(f,e);Er(e);return f;}
function PK(){B.call(this);this.x$=null;}
function AJL(a){var b,c;b=a.x$;c=b.jz?0:1;b.jz=c;b=new L;N(b);Ib(H(b,C(256)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function PS(){B.call(this);this.rs=null;}
function AOb(a){var b,c;b=a.rs;c=b.lj^1;b.lj=c;b=new L;N(b);Ib(H(b,C(257)),c);$rt_globals.console.info($rt_ustr(M(b)));}
function PQ(){B.call(this);this.vP=null;}
function AZA(a){var b,c,d,e,f;b=a.vP;c=(b.d8+3|0)%6|0;b.d8=c;d=b.fB.data;e=d.length;f=0;while(f<e){b=d[f];b.b4=c;b=b.cA;if(b!==null)b.hN=1;f=f+1|0;}}
function PP(){B.call(this);this.z0=null;}
function AQ2(a){var b;b=a.z0;b.cb=b.cb?0:1;KK(b.dj);b.dj=AIn();Ms(b);VF(b,b.g,b.j,b.cv.ce);}
function PO(){B.call(this);this.q7=null;}
function ATY(a){var b;b=a.q7;b.kE=b.kE?0:1;}
function PJ(){B.call(this);this.uT=null;}
function AYB(a){var b;b=a.uT;b.n8=b.n8?0:1;}
function Zd(){B.call(this);this.te=null;}
function AQ6(a){var b;b=a.te;Sc(b,b.kl,b.os);}
function Ze(){B.call(this);this.rO=null;}
function AT0(a){var b;b=a.rO;Sc(b,b.os,b.kl);}
var AGh=G();
function Ln(){B.call(this);this.Ce=null;}
var A3m=null;var A3T=null;function APS(){APS=Bq(Ln);AZf();}
function ANl(a){var b=new Ln();ACm(b,a);return b;}
function ACm(a,b){APS();a.Ce=b;}
function AZf(){A3m=ANl(C(258));A3T=ANl(C(259));}
function BZ(){var a=this;B.call(a);a.bm=0.0;a.bq=0.0;a.bd=0.0;a.bD=0.0;}
function ABa(a,b,c,d){var e=new BZ();AU4(e,a,b,c,d);return e;}
function AIl(a){var b=new BZ();ASX(b,a);return b;}
function AU4(a,b,c,d,e){a.bm=b;a.bq=c;a.bd=d;a.bD=e;}
function Ct(a,b,c,d,e){a.bm=b;a.bq=c;a.bd=d;a.bD=e;}
function ASX(a,b){a.bm=b.bm;a.bq=b.bq;a.bd=b.bd;a.bD=b.bD;}
function BT(a,b){a.bm=b.bm;a.bq=b.bq;a.bd=b.bd;a.bD=b.bD;return a;}
function AY5(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BI(a)===BI(b)){b=b;if(b.bm===a.bm&&b.bq===a.bq&&b.bd===a.bd&&b.bD===a.bD?1:0){c=1;break a;}}c=0;}return c;}
var NH=G(0);
function Gs(a){return DF(a,null);}
function Ti(b){var c;c=new Ul;c.yj=b;return c;}
function SL(){B.call(this);this.u7=null;}
function APb(a){Kr(a.u7);}
function SK(){B.call(this);this.zm=null;}
function AJr(a){KZ(a.zm);}
var Mh=G(0);
function ADa(){var a=this;EZ.call(a);a.cE=null;a.m=0;}
function BM(){var a=new ADa();AOd(a);return a;}
function AOd(a){a.cE=Q(B,10);}
function Kb(a,b){var c,d;c=a.cE.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cE=C$(a.cE,d);}}
function Bw(a,b){J0(a,b);return a.cE.data[b];}
function ATu(a){return a.m;}
function BF(a,b){var c,d;Kb(a,a.m+1|0);c=a.cE.data;d=a.m;a.m=d+1|0;c[d]=b;a.b0=a.b0+1|0;return 1;}
function Ub(a,b,c){var d,e,f;RM(a,b);Kb(a,a.m+1|0);d=a.m;e=d;while(e>b){f=a.cE.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cE.data[b]=c;a.m=d+1|0;a.b0=a.b0+1|0;}
function EJ(a,b){var c,d,e,f;J0(a,b);c=a.cE.data;d=c[b];e=a.m-1|0;a.m=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b0=a.b0+1|0;return d;}
function Y$(a,b){var c;c=Lg(a,b);if(c<0)return 0;EJ(a,c);return 1;}
function Kx(a){ADB(a.cE,0,a.m,null);a.m=0;a.b0=a.b0+1|0;}
function ADD(a,b,c){var d,e,f,g,h,i;RM(a,b);if(c.en())return 0;Kb(a,a.m+c.cX()|0);d=c.cX();e=a.m;f=e-1|0;while(f>=b){g=a.cE.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.m=e+d|0;h=c.ca();i=0;while(i<d){g=a.cE.data;e=b+1|0;g[b]=h.b2();i=i+1|0;b=e;}a.b0=a.b0+1|0;return 1;}
function J0(a,b){var c;if(b>=0&&b<a.m)return;c=new BD;X(c);K(c);}
function RM(a,b){var c;if(b>=0&&b<=a.m)return;c=new BD;X(c);K(c);}
function E5(a,b){var c;c=0;while(c<a.m){b.h(a.cE.data[c]);c=c+1|0;}}
var ABP=G(0);
var A3Q=null;function AHA(){A3Q=new Pz;}
function JA(){var a=this;B.call(a);a.u=null;a.t=null;a.U=null;a.bk=null;}
function U6(){var a=new JA();XT(a);return a;}
function Wo(a,b,c,d){var e=new JA();AL0(e,a,b,c,d);return e;}
function XT(a){a.u=new Bh;a.t=new Bh;a.U=new BZ;a.bk=new BZ;}
function AL0(a,b,c,d,e){a.u=new Bh;a.t=new Bh;a.U=new BZ;a.bk=new BZ;HG(a,b,c,d,e);}
function HG(a,b,c,d,e){V(a.u,b,c);V(a.t,d,e);}
function Wn(a){V(a.t,0,0);}
function Li(a){var b;b=a.t;return Bb(b.b,b.a)?0:1;}
function Fb(a,b){return GF(b,a.u,a.t);}
function T7(a,b,c,d){var e;e=a.u;Bu(b,e.b+c|0,e.a+d|0,a.t,a.U);}
function ABK(a,b,c,d,e,f){var g,h,i,j;g=a.u;d=g.b+d|0;e=g.a+e|0;g=a.t;h=a.bk;i=a.U;F1(b,b.iR);Go(b.iR,b.W,d,e,g,b.c$);Ml(b.iR,b.W,c);g=b.iR;j=b.W;Fi(j,g.zw,h);Fi(j,g.zs,i);c=g.tO;j.uniform2f(c,f,0.0);FY(b);}
var FA=G();
function Le(){FA.call(this);this.BJ=null;}
function VW(){FA.call(this);this.BA=null;}
function Sx(){FA.call(this);this.C3=null;}
var HB=G(0);
var Vj=G(0);
function L4(){var a=this;B.call(a);a.oM=null;a.AB=null;a.rB=0.0;a.AV=0;a.Bt=0;a.uK=0;a.Cs=0;a.db=0.0;a.er=0.0;a.AL=0.0;a.ou=0.0;a.AR=0;a.qo=null;}
function EU(a){return CU(a.db+a.er);}
function KW(a,b){return CU((a.db+a.er)*b);}
function H8(){var a=this;B.call(a);a.eC=null;a.fJ=null;a.fw=null;}
var A27=0;function AGz(a){var b;b=a.fJ;if(b!==null){A27=A27-1|0;a.eC.dP.deleteTexture(b);a.fJ=null;}}
function Cc(a){return a.fw.b;}
function De(a){return a.fw.a;}
function Wu(a,b,c,d){var e;e=a.fw;e.b=b;e.a=c;M8(a);a.eC.dP.texStorage2D(3553,1,d,b,c);e=a.eC.dP;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function M8(a){var b,c;b=a.eC.dP;c=a.fJ;b.bindTexture(3553,c);}
function CJ(a,b){OP(a,b.ob,b.m9,32856);Ss(a,b,0,0);}
function OP(a,b,c,d){var e,f,g,h;a:{e=a.fw;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){M8(a);break a;}e=a.eC.dP;h=a.fJ;e.deleteTexture(h);a.fJ=a.eC.dP.createTexture();Wu(a,b,c,d);break a;}}Wu(a,b,c,d);}}
function II(a,b,c,d){M8(a);Ss(a,b,c,d);}
function Ss(a,b,c,d){var e;e=a.eC.dP;b=b.jm;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var Si=G(0);
var A3U=0.0;function L8(b){Ct(b,1.0471975803375244,0.75,1.25,0.375);}
function Zw(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JN(b.bD,JN(c,A3U));Ct(d,b.bm/c,b.bq*c,ADu(b.bd*c,1.25),e);}
function Pf(b){var c;c=b.bq;return c-(c|0)>=0.25?0.0:0.5;}
function ACH(){A3U=KJ(KJ(0.5,0.375),4.0);}
function Ul(){B.call(this);this.yj=null;}
function DF(a,b){T$(a.yj,b);return 1;}
function AHV(){var a=this;B.call(a);a.bL=null;a.bC=null;a.ds=0;}
function AKX(){var a=new AHV();AYL(a);return a;}
function AMv(a){var b=new AHV();ASu(b,a);return b;}
function AYL(a){a.bL=new HC;a.bC=new HC;}
function ASu(a,b){a.bL=new HC;a.bC=new HC;IH(a,b);}
function IH(a,b){Xy(a.bL,b.bL);Xy(a.bC,b.bC);a.ds=b.ds;}
function Mn(a,b,c){Cb(a.bC,b,c);if(!a.ds)Cb(a.bL,b,c);}
function R5(a,b){Cb(a.bL,b,0);Cb(a.bC,b+1|0,0);}
function D5(a){if(Ue(a.bL,a.bC)>0)return a.bC;return a.bL;}
function F3(a){if(Ue(a.bL,a.bC)<0)return a.bC;return a.bL;}
function AGk(a,b){var c,d,e,f;c=a.bL;d=c.J;e=a.bC;if(d==e.J&&c.ba==e.ba?1:0)return null;c=D5(a);e=F3(a);d=c.J;if(d<=b){f=BG(b,e.J);if(f<=0)return BH(b<=d?c.ba:0,f>=0?e.ba:(-1));}return null;}
function Dq(a){var b,c;b=a.bL;c=a.bC;return (b.J==c.J&&b.ba==c.ba?1:0)?0:1;}
function Xl(){var a=this;B.call(a);a.ff=null;a.fb=0;a.dG=0;}
function YI(a,b){var c,d,e;c=a.fb;d=a.ff;if(c==d.data.length)a.ff=C$(d,c+16|0);d=a.ff.data;e=a.fb;a.fb=e+1|0;d[e]=b;}
function Uh(a){var b,c,d;b=a.dG;c=a.fb-1|0;if(b==c)a.dG=b-1|0;d=a.ff.data;a.fb=c;d[c]=null;}
var G8=G();
function T9(){var a=this;G8.call(a);a.A=null;a.c_=null;a.ey=null;a.dM=null;a.du=null;a.iH=null;a.kg=null;a.co=0;a.ng=0;a.v0=0.0;}
function B7(a,b){return a.A.data[b];}
function CF(a){return a.A.data.length;}
function Yf(a){return Fj(a,CF(a));}
function Gf(a,b){return a.A.data[b].P;}
function AHF(a,b,c){var d,e,f,g,h;d=a.A;e=d.data;f=e[b];d=C$(d,e.length+1|0);e=d.data;a.A=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=DT(Q(Cu,0));a.A.data[b+1|0]=f;}else if(c==f.P){e[b]=f;e[b+1|0]=DT(Q(Cu,0));}else{e=(ID(f,c)).data;d=a.A.data;d[b]=e[0];d[b+1|0]=e[1];}F2(a,b,c,0,C(209));}
function L9(a,b){var c,d,e,f,g,h,i;c=a.A.data;d=c[b];e=c[b+1|0];f=DT(MI(d.s,e.s));g=a.A;h=g.data.length;if(b<h&&b>=0){i=Q(Dv,h-1|0);c=i.data;TZ(g,b,i);c[b]=f;a.A=i;return;}d=new Bt;X(d);K(d);}
function Ol(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.A.data;if(!(c<d[b].P?0:1)){d=(B7(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<J(h.v)){e=P(h.v,g);break a;}g=g-J(h.v)|0;f=f+1|0;}e=0;}F2(a,b,c,1,LD(e));h=a.A.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=J(i[e].v);if(c<b)break;c=c-b|0;e=e+1|0;}}if(J(i[e].v)==1)h.s=TZ(d,e,Q(Cu,f-1|0));else{j=i[e];if(c<=0)k=D6(Ed(j.v,1),j.b1,j.bK);else if(c>=(J(j.v)-1|0)){k=new Cu;l=j.v;WH(k,Cr(l,0,J(l)-1|0),j.b1,j.bK);}else{d=B1(J(j.v)-1|0);m
=d.data;b=0;while(b<c){m[b]=P(j.v,b);b=b+1|0;}b=m.length;while(c<b){k=j.v;n=c+1|0;m[c]=P(k,n);c=n;}k=D6(Gr(d),j.b1,j.bK);}i[e]=k;}h.P=h.P-1|0;EG(h);}else if(b!=(d.length-1|0)){F2(a,b,c,1,C(209));L9(a,b);}}
function AB7(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){UT(a.A.data[b],c,e[0]);return;}g=f-1|0;d=(ID(a.A.data[b],c)).data;h=d[0];i=d[1];d=a.A;j=C$(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:J(l[f-1|0].v);NF(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!Fe(e[m])?QH(e[m]):DT(Q(Cu,0));d[b+m|0]=k;m=m+1|0;}NF(i,0,0,e[g]);d[b+g|0]=i;a.A=j;}
function Zp(a,b){var c,d,e,f,g,h,i;c=D5(b);d=F3(b);e=c.J;if(e==d.J)return Cr(Fu(a.A.data[e]),c.ba,d.ba);f=new L;N(f);b=a.A.data[c.J];e=c.ba;BL(B0(f,Ed(Fu(b),e)),10);g=a.A.data;e=c.J+1|0;h=d.J;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;ACv(B0(f,Fu(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.A.data[d.J];h=d.ba;B0(f,Cr(Fu(b),0,h));return M(f);}b=new ZX;X(b);K(b);}
function OA(a,b,c){var d;ZK(a,b);d=D5(b);F2(a,d.J,d.ba,1,c);}
function ZK(a,b){var c,d,e,f,g,h,i;a:{c=D5(b);d=F3(b);e=c.J;if(e==d.J)GV(a.A.data[e],c.ba,d.ba);else{b=a.A.data[e];GV(b,c.ba,b.P);GV(a.A.data[d.J],0,d.ba);e=c.J+1|0;f=d.J;g=a.A;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=Q(Dv,(h-f|0)+e|0);AEP(g,e,f,i);a.A=i;L9(a,c.J);break a;}b=new Bt;X(b);K(b);}b=new Bt;X(b);K(b);}}}
function Jj(a,b,c){return DS(b,Gv(B7(a,b),c));}
function AAs(a,b){var c,d,e;c=0;d=0;while(true){e=a.A.data.length;if(c>=e)break;if((d+(B7(a,c)).P|0)>=b)return BH(c,b-d|0);d=d+((B7(a,c)).P+1|0)|0;c=c+1|0;}return BH(e,0);}
function Fj(a,b){var c,d,e;c=0;d=a.A.data.length;e=0;while(e<b){c=c+Gf(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function MF(a,b){return M1(B7(a,b.bo),b.by);}
function E6(a){var b,c,d,e,f,g,h,i,j;b=B1(Yf(a));c=b.data;d=a.A.data.length;e=0;f=0;while(e<d){g=a.A.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].v;Sq(j,0,J(j),b,f);f=f+J(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function F2(a,b,c,d,e){var f,g,h,i,j,k;a:{a.co=a.co+1|0;f=a.iH;g=Q(Ho,1);h=new Ho;h.ed=b;h.es=c;i=M6(e,C(209),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BH(b,c+J(i[0])|0);break a;}k=BH((b+j|0)-1|0,J(i[j-1|0]));break a;}}k=BH(b,c);}i=g.data;h.na=k;h.oz=d;h.gn=e;i[0]=h;BF(f,g);K5(a,b,c,d,e);}
function K5(a,b,c,d,e){var f;f=Fj(a,b)+c|0;if(!d){QG(a.c_,f,J(e));XD(a.ey,f,J(e));}else{Z0(a.c_,f,J(e));O$(a.ey,f,J(e));}}
function OW(a,b){var c,d,e;c=M6(b.gn,C(209),(-1));if(b.oz){AB7(a,b.ed,b.es,c);QG(a.c_,Fj(a,b.ed)+b.es|0,J(b.gn));XD(a.ey,Fj(a,b.ed)+b.es|0,J(b.gn));}else{c=c.data;d=AKX();Cb(d.bL,b.ed,b.es);e=c.length;if(e==1)Cb(d.bC,b.ed,b.es+J(c[0])|0);else Cb(d.bC,(b.ed+e|0)-1|0,J(c[e-1|0]));ZK(a,d);Z0(a.c_,Fj(a,b.ed)+b.es|0,J(b.gn));O$(a.ey,Fj(a,b.ed)+b.es|0,J(b.gn));}return b.na;}
function WW(a){return a.ng==a.co?0:1;}
function H9(a){a.ng=a.co;}
function KS(a){var b,c,d;a.kg=BJ(a.A.data.length+1|0);b=0;while(b<a.A.data.length){c=a.kg.data;d=b+1|0;c[d]=(c[b]+(B7(a,b)).P|0)+1|0;b=d;}}
function ABz(a,b){var c,d,e,f,g,h;c=a.kg;if(c===null){d=0;e=0;a:{while(true){c=a.A.data;f=c.length;if(e>=f)break;g=c[e].P;if(b<=(d+g|0)){h=DS(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DS(f,0);}return h;}d=AF_(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DS(d,b-(d<0?0:a.kg.data[d])|0);if(h.by>=(B7(a,h.bo)).P){h.bo=h.bo+1|0;h.by=0;}return h;}
var Xw=G(0);
function L3(){var a=this;B.call(a);a.hM=null;a.fT=null;a.ot=null;}
function AGd(a,b){var c=new L3();APM(c,a,b);return c;}
function AZT(a,b,c){var d=new L3();Qb(d,a,b,c);return d;}
function ACu(b){var c,d,e,f,g,h,i;c=new L3;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=Q(BC,0);else{f=Q(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=Fo(e[h]);h=h+1|0;}}}else f=Q(BC,0);Qb(c,d,b,f);return c;}
function APM(a,b,c){Qb(a,b,c,Q(BC,0));}
function Qb(a,b,c,d){a.hM=b;a.fT=c;a.ot=d;}
function FG(a){var b;b=a.hM;return Fo(b!==null?b.name:a.fT.name);}
function AHW(b){var c;c=new Xx;c.sL=b;return c;}
function AQe(a){var b,c,d,e,f,g;if(a.fT===null){b=a.ot;c=FG(a);d=AD0(b);e=new L;N(e);H(H(H(e,d),C(260)),c);c=M(e);}else{b=a.ot;c=FG(a);f=a.fT.size;g=f|0;if(g!==f){d=FG(a);e=new L;N(e);H(H(e,C(261)),d);$rt_globals.console.info($rt_ustr(M(e))+f);g=0;}d=AD0(b);e=new L;N(e);U(H(H(H(H(e,d),C(260)),c),C(262)),g);c=M(e);}return c;}
var Zn=G(0);
function AFU(){B.call(this);this.iK=null;}
function A0p(a){var b=new AFU();ASy(b,a);return b;}
function ASy(a,b){a.iK=b;}
function EQ(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.iK));}
function CL(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.iK));}
function AMD(a){var b,c;b=a.iK.byteLength;c=new L;N(c);H(U(H(c,C(263)),b),C(264));return M(c);}
var Pz=G();
function AYG(a){}
function HC(){var a=this;B.call(a);a.J=0;a.ba=0;}
function Cb(a,b,c){a.J=b;a.ba=c;}
function Xy(a,b){a.J=b.J;a.ba=b.ba;}
function Ue(a,b){var c;c=BG(a.J,b.J);if(c)return c;return BG(a.ba,b.ba);}
function LW(){var a=this;B.call(a);a.nl=null;a.lH=null;}
function MO(a){return a.nl.bo;}
function Kz(a){return a.nl.by;}
function Dv(){var a=this;B.call(a);a.s=null;a.P=0;a.gk=null;a.eX=null;a.d4=null;a.hL=null;a.gA=0;a.hN=0;a.ip=0;}
var A3V=0;var A3W=0;var A3M=0;function QH(a){var b=new Dv();AGB(b,a);return b;}
function DT(a){var b=new Dv();Tr(b,a);return b;}
function AGB(a,b){var c;c=Q(Cu,1);c.data[0]=AEf(b);Tr(a,c);}
function Tr(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+J(c[f].v)|0;f=f+1|0;}a.P=d;EG(a);}
function H4(a){return a.s.data.length;}
function IY(a,b){return a.s.data[b];}
function Gv(a,b){var c;c=Jw(a,b);return c<=0?0:a.d4.data[c-1|0];}
function Jw(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.d4!==null&&!a.ip)){AAt(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+J(a.s.data[d].v)|0;a.d4.data[d]=e;d=d+1|0;}a.ip=0;}d=WS(a.d4,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function M1(a,b){var c;c=a.s.data;if(!c.length)return null;return c[Jw(a,b)];}
function GV(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.P){a.s=Q(Cu,0);EG(a);a.P=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=J(g[e].v);i=J(a.s.data[f].v);j=BG(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==J(k.v)?1:0){g=a.s;a.s=TZ(g,e,Q(Cu,g.data.length-1|0));a.P=a.P-d|0;EG(a);return;}a.s.data[e]=D6(FM(Cr(k.v,0,b),Ed(k.v,c)),k.b1,k.bK);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b!=
J(l.v))a.s.data[e]=D6(Cr(l.v,0,b),l.b1,l.bK);e=e+1|0;}if(c==J(m.v))f=f+1|0;else if(c)a.s.data[f]=D6(Ed(m.v,c),m.b1,m.bK);g=a.s;a.s=AEP(g,e,f,Q(Cu,(g.data.length-f|0)+e|0));}a.P=a.P-d|0;EG(a);}
function ID(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(Dv,[DT(Q(Cu,0)),a]);if(b>=a.P)return I(Dv,[a,DT(Q(Cu,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=J(e[d].v);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(Dv,[DT(LY(c,0,Q(Cu,d))),DT(LY(c,d,Q(Cu,f-d|0)))]);h=e[d];e=LY(c,0,Q(Cu,d+1|0));i=e.data;j=LY(c,d,Q(Cu,f-d|0));c=j.data;i[d]=D6(Cr(h.v,0,b),h.b1,h.bK);c[0]=D6(Ed(h.v,b),h.b1,h.bK);return I(Dv,[DT(e),DT(j)]);}
function UT(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=J(f[d].v);if(b<=g)break;b=b-g|0;d=e;}}NF(a,d,b,c);}
function NF(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(Fe(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=Q(Cu,1);h.data[0]=AEf(d);a.s=h;}else if(!b&&!c){h=Q(Cu,g+1|0);f=h.data;DC(e,0,h,1,g);f[0]=AEf(d);a.s=h;}else{i=f[b];if(c<=0)j=D6(FM(d,i.v),i.b1,i.bK);else if(c>=J(i.v))j=D6(FM(i.v,d),i.b1,i.bK);else{k=J(d);l=k+c|0;m=J(i.v)-c|0;e=B1(J(i.v)+k|0);h=e.data;n=0;while(n<c){h[n]=P(i.v,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=P(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=P(i.v,g+c|0);g=g+1|0;}j=D6(Gr(e),i.b1,i.bK);}f[b]=j;}a.P=a.P
+J(d)|0;EG(a);}
function Pd(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MV(f)){if(P(f.v,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Lv(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gk;if(!(e!==null&&e.data.length>=d)){a.gk=AJu(d);a.eX=BJ(d);a.gA=1;}AAt(a);if(!a.gA)A3W=A3W+1|0;else{f=0;g=0.0;A3V=A3V+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+J(j.v)|0;a.d4.data[h]=f;Ck(b,i[J8(j)]);g=g+DX(b,j.v);a.gk.data[h]=g;a.eX.data[h]=g+0.5|0;h=h+1|0;}a.P=f;a.gA=0;a.ip=0;}}
function AAt(a){var b;b=a.d4;if(!(b!==null&&b.data.length>=a.s.data.length)){a.d4=BJ(a.s.data.length);a.ip=1;}}
function WB(a){a.gA=1;a.hL=null;}
function EG(a){WB(a);a.hN=1;a.ip=1;}
function UK(a,b,c,d){var e,f,g,h,i,j,k;if(a.hL===null)a.hL=Q($rt_arraycls($rt_intcls()),a.s.data.length);e=a.hL.data[d];if(e===null){e=c.data;f=a.s.data[d];Ck(b,e[J8(f)]);f=f.v;e=BJ(J(f)-1|0);c=FV(f);g=!d?0.0:a.gk.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;ND(f,c,0,k);h[i]=g+DX(b,f)+0.5|0;i=k;}a.hL.data[d]=e;}return e;}
function G1(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.gA&&a.eX!==null))Lv(a,c,d);if(b>=a.P)return a.eX.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+J(g[f].v)|0;i=BG(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.eX.data[f];}return (UK(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function F5(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.eX.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hk(a,b){var c;if(b>=a.P)return b+1|0;c=Jw(a,b);return a.d4.data[c];}
function Fu(a){var b,c,d,e;b=new L;Gy(b,a.P);c=a.s.data;d=c.length;e=0;while(e<d){B0(b,c[e].v);e=e+1|0;}return M(b);}
function AEK(){A3M=0;}
function RR(){var a=this;B.call(a);a.fE=null;a.eR=null;}
function AMh(a,b){var c=new RR();AOs(c,a,b);return c;}
function AOs(a,b,c){a.fE=b;a.eR=c;}
function XD(a,b,c){var d;d=a.fE;if(d===null)return;Tm(a,d,b,c);}
function O$(a,b,c){var d;d=a.fE;if(d===null)return;W0(a,d,b,c);}
function Tm(a,b,c,d){var e,f,g,h;e=b.eo.ca();while(e.cy()){ABG(a,e.b2(),c,d);}e=b.e0.ca();while(e.cy()){f=e.b2();g=new Wz;g.t5=a;Et(a,g,f,c,d);}h=b.gW.ca();while(h.cy()){e=h.b2();ABG(a,e.jY,c,d);f=new WA;f.qa=a;Et(a,f,e.k1,c,d);}b=b.cz.ca();while(b.cy()){Tm(a,b.b2(),c,d);}}
function ABG(a,b,c,d){Kt(a,b.ep,c,d);}
function Et(a,b,c,d,e){var f,g;a:{if(c instanceof GP){f=c.hl;g=new AB2;g.ra=a;g.q$=b;g.q9=d;g.q_=e;E5(f,g);}else{if(!(c instanceof Jq)){if(!(c instanceof JO))break a;f=c;Et(a,b,f.iW,d,e);Et(a,b,f.hD,d,e);return;}g=c.hz;f=new AB3;f.zW=a;f.zV=b;f.zU=d;f.zT=e;E5(g,f);}}if(c!==null){c=c.fx;if(c!==null)b.kC(c,CT(d),CT(e));}}
function Kt(a,b,c,d){var e;e=b.dx;if(e>=c)b.dx=e+d|0;}
function W0(a,b,c,d){var e,f,g,h;e=b.eo.ca();while(e.cy()){IW(a,(e.b2()).ep,c,d);}e=b.e0.ca();while(e.cy()){f=e.b2();g=new UX;g.xJ=a;Et(a,g,f,c,d);}h=b.gW.ca();while(h.cy()){e=h.b2();IW(a,e.jY.ep,c,d);f=new UZ;f.wY=a;Et(a,f,e.k1,c,d);}b.eo.nL(new UW);b.e0.nL(new UV);b=b.cz.ca();while(b.cy()){W0(a,b.b2(),c,d);}}
function IW(a,b,c,d){var e;e=b.dx;if(e>=c)b.dx=e-d|0;}
function Lw(){var a=this;D8.call(a);a.cW=0;a.b_=null;a.cU=0;a.zX=0.0;a.mY=0;}
function U2(){var a=new Lw();Sd(a);return a;}
function AOL(a,b){return Q(Hd,b);}
function Sd(a){var b;b=AIp(16);a.cW=0;a.b_=Q(Hd,b);a.zX=0.75;XJ(a);}
function AIp(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fa(a){var b;if(a.cW>0){a.cW=0;b=a.b_;ADB(b,0,b.data.length,null);a.cU=a.cU+1|0;}}
function XJ(a){a.mY=a.b_.data.length*a.zX|0;}
function Kq(a,b){return V9(a,b)===null?0:1;}
function X5(a){var b;b=new XK;b.ut=a;return b;}
function Cy(a,b){var c;c=V9(a,b);if(c===null)return null;return c.c3;}
function V9(a,b){var c,d;if(b===null)c=UQ(a);else{d=b.oh();c=S3(a,b,d&(a.b_.data.length-1|0),d);}return c;}
function S3(a,b,c,d){var e;e=a.b_.data[c];while(e!==null&&!(e.kL==d&&ACY(b,e.cM))){e=e.cS;}return e;}
function UQ(a){var b;b=a.b_.data[0];while(b!==null&&b.cM!==null){b=b.cS;}return b;}
function KN(a){var b;if(a.mq===null){b=new Rz;b.hS=a;a.mq=b;}return a.mq;}
function Fv(a,b,c){var d,e,f,g;if(b===null){d=UQ(a);if(d===null){a.cU=a.cU+1|0;d=XA(a,null,0,0);e=a.cW+1|0;a.cW=e;if(e>a.mY)XW(a);}}else{e=b.oh();f=e&(a.b_.data.length-1|0);d=S3(a,b,f,e);if(d===null){a.cU=a.cU+1|0;d=XA(a,b,f,e);e=a.cW+1|0;a.cW=e;if(e>a.mY)XW(a);}}g=d.c3;d.c3=c;return g;}
function XA(a,b,c,d){var e,f;e=new Hd;ABV(e,b,null);e.kL=d;f=a.b_.data;e.cS=f[c];f[c]=e;return e;}
function AEG(a,b){var c,d,e,f,g,h,i,j;c=AIp(!b?1:b<<1);d=Q(Hd,c);e=d.data;f=0;b=c-1|0;while(true){g=a.b_.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.kL&b;j=h.cS;h.cS=e[i];e[i]=h;h=j;}f=f+1|0;}a.b_=d;XJ(a);}
function XW(a){AEG(a,a.b_.data.length);}
function ACY(b,c){return b!==c&&!b.bH(c)?0:1;}
function Cu(){var a=this;B.call(a);a.v=null;a.b1=0;a.bK=0;}
function AEf(a){var b=new Cu();ANq(b,a);return b;}
function D6(a,b,c){var d=new Cu();WH(d,a,b,c);return d;}
function ANq(a,b){WH(a,b,0,0);}
function WH(a,b,c,d){a.v=b;a.b1=c;a.bK=d;}
function J8(a){return a.bK&3;}
function H1(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MV(a){return J(a.v);}
var LT=G(Lw);
function Ui(){var a=this;B.call(a);a.c8=null;a.eM=0;}
var A3X=null;function AHd(a){var b=new Ui();AHZ(b,a);return b;}
function AHZ(a,b){a.eM=0;a.c8=b;}
function RX(a,b){var c;if(b.eH)return b;b=B8(b.bn);while(true){if(!B_(b))return null;c=RX(a,Ca(b));if(c!==null)break;}return c;}
function PC(a,b,c){var d,e,f,g;d=LF(a,a.c8,b);if(d===null)return;b=c.ci;e=b===null?A3Y:b.cz;f=c.bn;c=a.c8;if(d===c){if(c.ci===null)c.ci=b;b=new UP;b.tZ=a;E5(f,b);b=new UO;b.xG=a;e.e8(b);b=a.c8;b.bn=f;b.ci.cz=e;b.eH=0;return;}if(!FO(f)){c=d.hj;if(c!==null){b=new Qs;b.rf=c;E5(f,b);g=Lg(c.bn,d);if(g==(-1))Hj(c.bn,f);else{EJ(c.bn,g);ADD(c.bn,g,f);}}}b=d.ci;if(b!==null){b=b.g4;c=new U8;c.tE=b;e.e8(c);g=Lg(b.cz,d.ci);if(g==(-1))Hj(b.cz,e);else{b.cz.oP(g);b.cz.wI(g,e);}}}
function LF(a,b,c){var d,e,f,g;d=b.bW;if(d.bV==c.bV&&d.bZ==c.bZ?1:0){d=B8(b.bn);while(B_(d)){e=LF(a,Ca(d),c);if(e!==null)return e;}return b;}b=B8(b.bn);while(true){if(!B_(b))return null;d=Ca(b);f=c.bV;g=c.bZ;e=d.bW;if(e.bV<=f&&g<=e.bZ?1:0){e=LF(a,d,c);if(e!==null)break;}}return e;}
function Wv(a,b,c){BF(c,b.bW);b=B8(b.bn);while(B_(b)){Wv(a,Ca(b),c);}}
function QG(a,b,c){a.eM=0;LE(a,a.c8,b,c);}
function LE(a,b,c,d){var e;if(Dc(b)<c)return;a:{if(Df(b)>c){Mz(b,d);H0(b,d);b=B8(b.bn);while(B_(b)){LE(a,Ca(b),c,d);}}else{if(!J_(b,c)){if(a.eM)break a;if(Dc(b)!=c)break a;}H0(b,d);if(Df(b)==c&&a.eM)Mz(b,d);e=B8(b.bn);while(B_(e)){LE(a,Ca(e),c,d);}if(!a.eM){b.eH=1;a.eM=1;}}}}
function Z0(a,b,c){a.eM=0;Kf(a,a.c8,b,c);}
function Kf(a,b,c,d){var e,f,g,h,i,j;if(Dc(b)<c)return;e=Df(b);f=c+d|0;if(e>f){e= -d|0;Mz(b,e);H0(b,e);g=B8(b.bn);while(B_(g)){Kf(a,Ca(g),c,d);}b.bn=Ox(a,b.bn);}else{h=b.bW;if(c<=h.bV&&h.bZ<=f?1:0){if(b===a.c8){MN(b,0);Kc(b,0);h=b.ci;if(h!==null)h.cz.jy();}else{MN(b,(-1));Kc(b,(-1));h=b.ci;if(h!==null){ABg(h);b.ci=null;}}Kx(b.bn);}else{e=J_(b,c);f=J_(b,f);if(e&&f)H0(b, -d|0);else if(e)Kc(b,c);else{if(!f)return;MN(b,c);H0(b, -d|0);}h=B8(b.bn);while(B_(h)){Kf(a,Ca(h),c,d);}h=X4(b.bn);g=Q9(0);i=new Un;j=new Ye;j.Dn
=i;j.kO=g;while(XH(h,j)){}if(!j.kO.oT&&!a.eM)b.eH=1;else a.eM=1;b.bn=Ox(a,b.bn);}}}
function Ox(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BM();d=null;e=A3X;f=b.cE;g=b.m;if(e===null)e=A2z;h=Q(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}AEl(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b0=b.b0+1|0;b=B8(b);while(B_(b)){m=Ca(b);if(Df(m)==Dc(m))continue;if(!m.eH){if(d!==null){BF(c,d);d=null;}BF(c,m);}else if(d===null)d=m;else{n=AXy(KA(Bc(Df(d),Df(m)),Bd(Dc(d),Dc(m)),d.bW.fq),d.hj,d.ci);n.eH=1;d=m.ci;if(d===null)d=n;else{ABg(d);d=n;}}}if(d!==null)BF(c,d);return c;}
function AAj(a,b,c,d){var e,f,g,h,i,j;if((Dc(c)-Df(c)|0)<43)e=Cr(d,Df(c),Dc(c));else{e=Cr(d,Df(c),Df(c)+20|0);f=Cr(d,Dc(c)-20|0,Dc(c));g=new L;N(g);H(H(H(g,e),C(174)),f);e=M(g);}e=X_(e,C(209),C(265));f=Bz();g=CE(c);h=new L;N(h);i=U(h,b);BL(i,32);g=H(i,g);BL(g,9);H(g,e);Br(f,M(h));c=B8(c.bn);j=b+1|0;while(B_(c)){AAj(a,j,Ca(c),d);}}
function AIa(){A3X=new Zz;}
function AIy(){var a=this;B.call(a);a.bV=0;a.bZ=0;a.fq=0;}
function KA(a,b,c){var d=new AIy();ANj(d,a,b,c);return d;}
function ANj(a,b,c,d){a.bV=b;a.bZ=c;a.fq=d;}
function AV6(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bV==c.bV&&a.bZ==c.bZ&&a.fq==c.fq?1:0;}return 0;}
function ALO(a,b){var c;b=b;c=BG(a.bV,b.bV);if(!c)c=BG(b.bZ,a.bZ);return c;}
var Zz=G();
function AQ8(a,b,c){var d;b=b;c=c;b=b.bW;c=c.bW;d=BG(b.bV,c.bV);if(!d)d=BG(c.bZ,b.bZ);return d;}
function Tv(){var a=this;B.call(a);a.bW=null;a.hj=null;a.bn=null;a.ci=null;a.eH=0;}
function AXy(a,b,c){var d=new Tv();AHc(d,a,b,c);return d;}
function AHc(a,b,c,d){a.eH=0;a.bW=b;a.hj=c;a.bn=BM();a.ci=d;}
function AID(b){return TL(b,null);}
function TL(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Ba(b);e=Ba(b);f=Ba(b);g=Ba(b);h=Ba(b);i=KA(d,e,f);j=new Tv;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AHc(j,i,null,l);m=0;while(m<g){l=TL(b,c);l.hj=j;BF(j.bn,l);m=m+1|0;}return j;}
function AC2(b,c,d){var e,f,g,h,i;a:{e=b.bW;f=b.bn;g=e.bV;h=e.bZ;i=e.fq;Bs(c,g);Ha(c,h,i);Bs(c,f.m);if(d!==null){e=b.ci;if(e!==null&&Zj(d,e)){g=(M$(d,b.ci)).bs;break a;}}g=(-1);}Bs(c,g);b=B8(f);while(B_(b)){AC2(Ca(b),c,d);}}
function Df(a){return a.bW.bV;}
function Dc(a){return a.bW.bZ;}
function MN(a,b){a.bW.bV=b;}
function Kc(a,b){a.bW.bZ=b;}
function Mz(a,b){var c;c=a.bW;c.bV=c.bV+b|0;}
function H0(a,b){var c;c=a.bW;c.bZ=c.bZ+b|0;}
function J_(a,b){return Df(a)<=b&&b<Dc(a)?1:0;}
function AKa(a){var b,c,d,e,f;b=a.bW;c=b.bV;d=b.bZ;e=b.fq;b=new L;N(b);BL(b,40);BL(U(H(U(H(U(b,c),C(36)),d),C(36)),e),41);b=M(b);c=a.eH;f=new L;N(f);Ib(H(H(f,b),C(36)),c);return M(f);}
function ALw(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BV(a.bW,c.bW)&&BV(a.bn,c.bn)?1:0;}return 0;}
var H2=G(0);
function G4(){var a=this;B.call(a);a.cM=null;a.c3=null;}
function A3Z(a,b){var c=new G4();ABV(c,a,b);return c;}
function ABV(a,b,c){a.cM=b;a.c3=c;}
function AMG(a,b){var c,d;if(a===b)return 1;if(!Jn(b,H2))return 0;a:{b:{c:{d:{c=b;b=a.cM;if(b!==null){if(!b.bH(c.cM))break c;else break d;}if(c.cM!==null)break c;}b=a.c3;if(b!==null){if(!b.bH(c.c3))break c;else break b;}if(c.c3===null)break b;}d=0;break a;}d=1;}return d;}
function Hd(){var a=this;G4.call(a);a.kL=0;a.cS=null;}
function LO(){var a=this;LR.call(a);a.sI=null;a.rb=null;}
function AC9(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.sI;e=0;f=0;g=a.rb;a:{while(true){if((e+32|0)>f&&DY(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bc(Cf(b)+j|0,i.length);Pe(b,d,j,f-j|0);e=0;}if(!DY(c)){k=!DY(b)&&e>=f?A3h:A3g;break a;}i=g.data;j=Bc(Cf(c),i.length);l=new Px;l.pK=b;l.ty=c;k=AFD(a,d,e,f,g,0,j,l);e=l.xR;j=l.zh;if(k===null){if(!DY(b)&&e>=f)k=A3h;else if(!DY(c)&&e>=f)k=A3g;}AAr(c,g,0,j);if(k!==null)break;}}E8(b,b.Z-(f-e|0)|0);return k;}
var RS=G(LO);
function AFD(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(MJ(h,2))break a;i=A3g;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Ng(l)){if((f+3|0)>g){j=j+(-1)|0;if(MJ(h,3))break a;i=A3g;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CN(l)){i=Ej(1);break a;}if
(j>=d){if(DY(h.pK))break a;i=A3h;break a;}c=j+1|0;m=k[j];if(!Da(m)){j=c+(-2)|0;i=Ej(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(MJ(h,4))break a;i=A3g;break a;}k=e.data;o=EP(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.xR=j;h.zh=f;return i;}
var Jf=G(Em);
var Oc=G();
function AYS(a,b){return b.text();}
function Of(){var a=this;B.call(a);a.u_=null;a.u$=null;}
function AXH(a,b){var c,d,e,f,g;c=a.u_;d=a.u$;e=b.length;f=new Pt;f.xq=b;g=(AHh(e,f)).mb;b=new Nl;f=AG0(d);ABf(b,g,null,f);c.h(b);}
var Od=G();
function AKG(a,b){AIo(b);}
function IR(){var a=this;B.call(a);a.bp=null;a.ew=null;a.kU=null;a.jB=null;a.dU=null;a.op=null;a.yz=null;a.zd=null;}
function A30(a,b,c,d,e){var f=new IR();JS(f,a,b,c,d,e);return f;}
function Ij(){var b,c,d,e,f,g,h,i;b=new IR;c=new Jl;d=new HP;Fs();KH(d,A31);Nv(c,d,BU(A3F),BU(A32),BU(A33),BU(A3F),BU(A34),BU(A35),BU(A36),BU(A37),BU(A38),BU(A39));AEg();e=(A3$.hx()).data;f=e.length;g=Q(JH,f);h=g.data;i=0;while(i<f){h[i]=e[i].od;i=i+1|0;}JS(b,c,g,AGx(S(C(266)),S(C(267)),S(C(268)),S(C(269))),Fn(),ACC(S(C(270)),S(C(271)),S(C(272)),S(C(273))));return b;}
function Z1(){var b,c,d,e,f,g,h,i,j,k,l,m;b=new IR;c=new Jl;d=new HP;ANV();KH(d,A3_);Nv(c,d,BU(A4a),BU(A4b),BU(A4c),BU(A4a),BU(A4d),BU(A4e),BU(A4f),BU(A4g),BU(A4h),BU(A4i));X$();e=(A4j.hx()).data;f=e.length;g=Q(JH,f);h=g.data;i=0;while(i<f){h[i]=e[i].jv;i=i+1|0;}j=AGx(S(C(274)),S(C(275)),S(C(276)),S(C(277)));k=new IV;l=new Ja;AJU();m=A4k;NA(l,m,A4l,A4m,A4n,A4o,m);Mx(k,l,AHE(),AIz(S(C(278)),S(C(279)),S(C(280))),AHE(),ACl(1,0.17499999701976776),A4p,A4q);JS(b,c,g,j,k,ACC(S(C(270)),S(C(271)),S(C(272)),S(C(281))));return b;}
function JS(a,b,c,d,e,f){var g;g=c.data;a.op=Ec(C(152),16.0);a.yz=Ec(C(152),17.0);a.zd=Ec(C(151),15.0);a.bp=b;a.kU=c;a.jB=d;if(g.length>=15){a.ew=e;a.dU=f;return;}b=new BR;X(b);K(b);}
function O3(a,b){if(b===null)b=a.bp.eb;return b;}
function JR(){var a=this;CW.call(a);a.cO=null;a.f4=null;}
function A1B(a){var b=new JR();AIM(b,a);return b;}
function AIM(a,b){var c,d,e,f;Gd(a,b);c=AVX(a.q);a.f4=c;d=AEJ(a.q,c);a.cO=d;PR(a.q,d);Y(b.o.br,a.f4);Y(b.o.d7,a.f4);Y(b.o.br,a.cO);c=b.o.bP;d=new R1;d.r7=a;Y(c,d);c=b.o.bP;d=new IL;e=a.cO;BQ(e);f=new RZ;f.yR=e;Oy(d,b,f);Y(c,d);c=b.o.gg;d=a.cO;BQ(d);e=new R0;e.r2=d;Y(c,e);c=b.o.gU;d=new PV;d.s9=a;Y(c,d);c=b.o.d7;d=new PW;d.zK=a;Y(c,d);b=b.o.dZ;c=new PT;c.qt=a;Y(b,c);K7(a);}
function APm(a,b){if(AAk(a.q,b)){T4(a.f4);LH(a.cO,b);}}
function AWp(a,b){return L6(a.cO,b);}
function AOW(a){F9(a);JP(a.cO);ABQ(a.f4);}
function AYm(a){return JJ(0);}
function AJm(a,b,c){IT(a,b,c);a.nm(b,c);}
function AGs(a,b,c){var d;d=a.cO;Nq(d,d.g,b,c);}
function ANe(a,b){BQ(b);Os(a.f4,b);K0(a.cO,b);}
function AEN(a,b){if(b.bl!=121)return 0;return 1;}
function ADb(a,b){var c,d,e;if(Eb(a.q,a.cO)){c=a.f4;d=a.cO;e=new Vv;e.v5=a;Kn(c,b,d,a,d,a,e);}return 1;}
function ACJ(){var a=this;Ci.call(a);a.tC=null;a.ms=null;a.jL=null;a.ef=null;a.kA=null;a.hk=null;a.eh=null;a.ij=null;a.pz=null;a.i2=null;a.oI=null;a.oJ=null;a.m8=null;a.ub=null;a.A9=null;a.tW=0;}
function A14(a){var b=new ACJ();ARn(b,a);return b;}
function ARn(a,b){var c,d,e,f;DR(a,b);c=(Ij()).bp.eb;a.tC=c;a.ms=AIl(c);a.jL=new Bh;a.ef=Ku();a.kA=Ku();a.hk=Wo(0,0,3,3);a.eh=HE(0,0,300,300);a.ij=AOS();d=Q(BC,4);e=d.data;e[0]=C(214);e[1]=C(183);e[2]=C(229);e[3]=C(228);a.pz=d;a.i2=Q(JA,e.length);c=b.o.br;f=new XR;f.fp=a;Y(c,f);c=b.o.bP;f=new SD;f.zY=a;Y(c,f);c=b.o.o7;f=new SC;f.s6=a;Y(c,f);c=b.o.gg;f=new SB;f.Cp=a;Y(c,f);c=b.o.lg;f=new SA;f.Ar=a;Y(c,f);c=b.o.dZ;f=new Sz;f.Bx=a;Y(c,f);b=b.o.d7;c=new Sy;c.xE=a;Y(b,c);a.oI=Y7(a,1);a.oJ=Y7(a,0);Up(a,a.ef,a.oI);Up(a,
a.kA,a.oJ);a.m8=ABb(a,0);a.ub=ABb(a,1);FB(a.eh,a.m8);FR(a.eh);GH(a.eh,Dr(169,183,198));Fw(a.eh,a.tC);Ct(a.ef.U,1.0,1.0,1.0,1.0);Fw(a.ef,a.eh.bk);BT(a.hk.bk,a.ms);}
function Up(a,b,c){FB(b,c);FR(b);}
function U7(a,b){H_(DP(),0.5+DP()*0.5,0.5+DP()*0.5,1.0,b.U);}
function Y7(a,b){var c,d;c=DQ(a.D.H,200,100,b);GB(c,C(282),11.0);BS(c,C(283),0.0,20.0);Je(c,255,0,0);BS(c,C(283),0.25,40.0);Je(c,0,255,0);BS(c,C(283),0.5,60.0);Je(c,0,0,255);BS(c,C(283),0.75,80.0);d=CS(a.D.H);CJ(d,c);Er(c);return d;}
function ABb(a,b){var c,d,e,f;c=DQ(a.D.H,255,100,b);GB(c,C(152),10.0);d=Bz();e=$rt_str(c.c5.font);f=new L;N(f);H(H(f,C(284)),e);Br(d,M(f));DX(c,C(285));BS(c,C(285),0.0,20.0);BS(c,C(285),0.25,40.0);BS(c,C(285),0.5,60.0);BS(c,C(285),0.75,80.0);e=CS(a.D.H);CJ(e,c);Er(c);return e;}
function AJV(a,b){var c;a.tW=a.tW+1|0;c=b/5.0;H_(c-(c|0),1.0,1.0,1.0,a.hk.U);return Wm(a.ij,b);}
function AM8(a){var b,c,d,e,f,g,h,i;b=a.D.H;EC(b,a.ms);c=a.i2.data;d=c.length;e=0;while(e<d){T7(c[e],b,0,0);e=e+1|0;}f=a.eh;g=f.u;g.a=(a.jL.a-f.t.a|0)-5|0;g.b=0;B2(b,0);h=0;while(h<7){f=a.eh;Ey(f,b,a.m8,Bb(h,10+((10*f.t.b|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eh;f.u.a=(a.jL.a-(f.t.a*2|0)|0)-10|0;h=0;while(h<7){g=a.ub;f=a.eh;f.u.b=Bb(h,10+((10*f.t.b|0)/15|0)|0)+5|0;V3(f,b,g,1);h=h+1|0;}V3(a.ef,b,a.oI,1);B2(b,1);g=a.kA;f=a.oJ;i=g.u;h=i.b;d=i.a;g=g.t;F1(b,b.la);Go(b.la,b.W,h,d,g,b.c$);Ml(b.la,b.W,f);FY(b);B2(b,0);f=
a.A9;if(f!==null)ABK(a.hk,b,f,0,0,0.0);XS(a.ij,b,new Bh);Ks(b,C(286));}
function AQO(a,b,c){var d,e,f,g,h,i,j,k;d=Bz();e=CE(b);f=new L;N(f);H(H(f,C(287)),e);Br(d,M(f));d=Bz();f=new L;N(f);E$(H(f,C(288)),c);Br(d,M(f));g=Cd(30.0,c);h=Cd(10.0,c);i=0;while(true){j=a.i2.data;if(i>=j.length)break;k=1+i|0;j[i]=Wo(Bb(h,k)+Bb(g,i)|0,g,g,g);U7(a,a.i2.data[i]);i=k;}V(a.hk.u,(b.b/2|0)-1|0,(b.a/2|0)-1|0);f=a.ef;V(f.u,((b.b/2|0)-f.t.b|0)-10|0,50);V(a.kA.u,(b.b/2|0)+10|0,50);Co(a.jL,b);}
function Pa(a,b){var c,d,e,f,g;c=Bz();d=!b.iS?C(289):C(290);e=b.d9;f=b.bl;g=b.vC;b=new L;N(b);Ib(H(U(H(H(H(b,d),e),C(291)),f),C(292)),g);Br(c,M(b));return 0;}
function Wt(){var a=this;Ci.call(a);a.BB=null;a.jx=null;a.i4=null;a.hs=null;a.de=null;a.dF=null;a.mH=null;a.mn=null;a.is=0;a.iD=null;a.iC=null;}
function S4(a,b,c){FB(b,c);FR(b);}
function AB6(a,b,c,d,e,f){var g,h;g=DQ(f,c,120,b);Ck(g,e);e=!b?C(293):C(294);h=new L;N(h);H(H(H(h,e),d),C(149));d=M(h);BS(g,d,0.0,20.0);BS(g,d,0.25,40.0);BS(g,d,0.5,60.0);BS(g,d,0.75,80.0);BS(g,d,1.0,100.0);h=CS(f);CJ(h,g);Er(g);return h;}
function AS6(a,b){return 0;}
function ALz(a){var b,c,d,e,f,g,h,i;b=a.D.H;EC(b,a.jx);B2(b,0);c=a.i4;d=c.a;e=a.hs;f=d-e.a|0;g=c.b-e.b|0;Bu(b,0,0,e,a.de.bk);Bu(b,g,0,a.hs,a.dF.bk);Bu(b,0,f,a.hs,a.de.U);Bu(b,g,f,a.hs,a.dF.U);c=a.de;e=c.u;h=e.a;i=((a.i4.a*3|0)/4|0)-(c.t.a/2|0)|0;Id(c,b,e.b,h,a.iD,0,1);c=a.de;Id(c,b,c.u.b,i,a.iD,1,1);c=a.dF;Id(c,b,c.u.b,h,a.iC,0,0);e=a.dF;Id(e,b,e.u.b,i,a.iC,1,0);Ks(b,C(286));}
function ANS(a,b,c){var d,e;Co(a.i4,b);V(a.hs,b.b/2|0,b.a/2|0);d=a.i4.a/4|0;e=a.de;d=d-(e.t.a/2|0)|0;V(e.u,(b.b/4|0)-(a.is/2|0)|0,d);V(a.dF.u,((b.b*3|0)/4|0)-(a.is/2|0)|0,d);}
function P1(){var a=this;CW.call(a);a.ts=null;a.eW=null;a.dp=null;a.eI=null;a.o9=null;}
function APW(a,b,c){var d;d=HR(a.q,a.o9);It(a.eW,d,a.q);It(a.dp,d,a.q);}
function TQ(b){return I2(b,AHJ());}
function I2(b,c){var d;d=L7();M0(d,La(b,Ji(c,25)),!b?null:I2(b-1|0,c));M0(d,La(b,Ji(c,20)),!b?null:I2(b-1|0,c));M0(d,La(b,Ji(c,15)),!b?null:I2(b-1|0,c));M0(d,La(b,Ji(c,10)),!b?null:I2(b-1|0,c));return G7(d);}
function La(b,c){var d;if(b){d=new L;N(d);H(H(U(d,b),C(28)),c);c=M(d);}return c;}
function M0(b,c,d){if(d!==null)Fm(b,c,d);else{d=new AAn;d.sC=c;DK(b,c,d);}}
function ANZ(a,b,c){var d,e;IT(a,b,c);b=a.q.bS;d=Eu(a.eW);e=Eu(a.dp);KY(a.eW,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);KY(a.dp,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function AM$(a){var b,c,d,e,f,g,h,i;F9(a);b=a.D.H;B2(b,1);c=a.ts;d=a.q;e=d.bS;V(c.n0,e.b,Cd(2.0,d.ce));V(c.oL,Cd(2.0,d.ce),e.a);Fs();f=A38;g=d.bY;h=e.a/2|0;i=c.n0;Bu(g,0,h-(i.a/2|0)|0,i,f);g=d.bY;h=e.b/2|0;c=c.oL;Bu(g,h-(c.b/2|0)|0,0,c,f);MZ(a.eW,a.q);MZ(a.dp,a.q);Gw(a.eI);B2(b,0);}
function AQQ(a,b){var c,d,e;c=LX(a.eI,b);d=L0(a.eW,b.i,a.q.cI);e=L0(a.dp,b.i,a.q.cI);return !c&&!d&&!e?0:1;}
function AWD(a,b,c){return Ns(a.eI,b,c);}
function AVT(a,b,c){return Dk(a.eI);}
function AKW(a,b,c,d){var e,f,g;e=KI(a.eI,b,c,d);f=MQ(a.eW,b.i,c,d);g=MQ(a.dp,b.i,c,d);return !e&&!f&&!g?0:1;}
function DA(){CW.call(this);this.cL=null;}
function Hr(a,b){var c,d,e;Gd(a,b);c=ASk();a.cL=c;Y(a.q.dA,c);Y(b.o.br,a.cL);c=b.o.br;d=a.q.cI;e=new Pb;e.pa=d;Y(c,e);b=b.o.d7;c=a.cL;BQ(c);d=new TF;d.rL=c;Y(b,d);}
function K2(a){F9(a);Wl(a.cL,a.D.H);}
function Ru(a,b,c){var d,e;IT(a,b,c);b=a.cL;d=0;while(true){e=b.cR;if(d>=e.m)break;Bw(e,d);d=d+1|0;}}
function ALf(a,b){var c,d,e,f;c=a.cL;d=0;e=0;while(true){f=c.cR;if(e>=f.m)break;d=(Bw(f,e)).S.cG(b)|d;e=e+1|0;}return d;}
function VP(){var a=this;DA.call(a);a.ji=null;a.kM=null;a.mg=null;}
function AMO(a,b,c){if(b===0.0)SX(a);}
function ATI(a){K2(a);Gw(a.ji);}
function SX(a){var b,c,d,e,f,g,h;b=a.kM;if(b!==null){J6(a.cL,b);L$(b);}b=(Ij()).ew;c=A1O(a.q,new OL);d=Ec(C(151),14.0);e=APT();f=0;while(f<300){g=Db(f);h=new VG;h.q1=C(295);h.q0=g;h.qZ=C(296);NI(e,C(295),g,C(296),h);f=f+1|0;}Pk(c,ZY(e));AB$(c,b,d);g=H6(a.q);h=NQ(c,a.q);HY(h,b.mr,b.lZ);GS(g,h);g.dD=b;E9(g,C(297),a.mg,2.0);a.kM=g;EX(a.cL,g);RD(a);}
function ALk(a,b,c){Ru(a,b,c);RD(a);}
function RD(a){var b,c,d;b=a.q.bS;Ei(a.kM,BH((b.b*2|0)/10|0,(b.a*4|0)/10|0),BH((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.kM;b=ACj(c.S.j);d=new L;N(d);H(H(d,C(298)),b);E9(c,M(d),a.mg,2.0);}
function O7(){var a=this;CW.call(a);a.lk=null;a.hd=null;a.f0=null;a.jR=null;a.su=null;a.jD=null;a.hv=null;a.gQ=null;a.kn=0;a.hc=0;}
function PX(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.hd.m>0){d=DP();e=a.hd;f=d*(e.m-1|0)|0;e=EJ(e,f);EJ(a.f0,f);f=a.hc;g=e.t;a.hc=f-Bb(g.b,g.a)|0;IX(a.lk,e.dc);}c=c+1|0;}}
function MK(a,b){var c,d,e,f,g,h,i,j;c=Jx(a.q);Ck(c,a.jR);d=0;while(d<b){e=Ji(a.jD,1+(DP()*19.0|0)|0);f=Ku();g=f.dc;h=a.lk;BQ(c);i=new SS;i.wF=c;BT(g,JM(h,e,i));(AAm(DP(),1.0,1.0,f.bk)).bD=0.5;h=f.u;g=f.dc;V(h,g.bm|0,g.bq|0);h=f.t;g=f.dc;V(h,g.bd|0,g.bD|0);BF(a.f0,e);BF(a.hd,f);j=a.hc;h=f.t;a.hc=j+Bb(h.b,h.a)|0;d=d+1|0;}a.gQ=J9(a.lk);}
function AVJ(a){var b,c,d,e,f,g,h,i;F9(a);b=a.D.H;B2(b,1);c=a.q.bY;if(a.f0.m){d=a.gQ;d=GQ(c,d.b,d.a);Ck(d,a.jR);e=a.jR.db;Bu(c,0,0,a.gQ,a.su);f=0;while(f<a.f0.m){g=Bw(a.hd,f);h=Bw(a.f0,f);g=g.dc;BS(d,h,g.bm,g.bq+e);f=f+1|0;}g=a.hv;if(!(g!==null&&Cc(g)==a.gQ.b&&De(a.hv)==a.gQ.a))a.hv=Cx(a.hv,CS(c));CJ(a.hv,d);Er(d);i=0;while(i<a.f0.m){d=Bw(a.hd,i);GH(d,CI(0));Ey(d,c,a.hv,0,0);i=i+1|0;}}B2(b,0);}
function AJJ(a,b){var c,d;if(a.kn){c=a.gQ;d=Bc(Bb(c.b,c.a),2211840);if(a.hc/d<=0.7)MK(a,F7(a.jD,5));else PX(a,F7(a.jD,5));}return a.kn;}
function VJ(){var a=this;Ci.call(a);a.ei=null;a.hi=null;a.i3=null;a.l4=null;a.eB=0;a.xe=0;a.sv=null;a.lI=0;a.qS=0;a.rC=null;a.wg=null;}
function AJl(a){var b,c;b=a.eB;c=new L;N(c);U(H(c,C(299)),b);$rt_globals.console.info($rt_ustr(M(c)));EC(a.ei,a.sv);JC(a.i3,a.eB,0,GA(a),5000,a.l4.b,20);B2(a.ei,1);AAD(a.i3,a.ei);B2(a.ei,0);b=a.eB;c=new L;N(c);U(H(c,C(299)),b);$rt_globals.console.info($rt_ustr(M(c)));W7(a.hi,a.eB/a.lI|0,a.ei);V7(a.hi,a.eB,GA(a),a.wg,a.ei);}
function AJj(a,b,c){a.l4=b;UU(a.hi,BH(0,0),50,GA(a),c);V$(a.hi,a.ei,0,GA(a));}
function Zc(a){return 5000-GA(a)|0;}
function GA(a){return Bc(a.xe,a.l4.a);}
function D4(){var a=this;Ci.call(a);a.n_=null;a.hB=null;a.At=0.0;}
function A4r(a){var b=new D4();IJ(b,a);return b;}
function IJ(a,b){DR(a,b);a.n_=AD1(0,0,64);a.hB=new Bh;Ph(b.cd,IQ(BI(a)));}
function U1(a){EC(a.D.H,a.n_);}
function VA(a,b,c){Co(a.hB,b);a.At=c;}
var S1=G(D4);
function Pu(){CW.call(this);this.jc=null;}
function AXR(a){F9(a);Gw(a.jc);}
function Hy(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.D.cd;f=new NR;f.Dm=a;f.z1=b;g=Q(B,1);h=g.data;i=BJ(1);i.data[0]=b;h[0]=i;CP(e,f,C(300),g);d=d+1|0;}}
function AAG(a,b){var c,d,e,f,g,h;c=b.data;d=Bz();e=CE(c[0]);f=new L;N(f);H(H(f,C(301)),e);Br(d,M(f));b=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array((K3(b,1)).iK));d=Bz();e=CE(c[1]);if(b===null)f=C(22);else{f=new L;N(f);B0(f,C(35));g=0;while(true){c=b.data;if(g>=c.length)break;if(g>0)B0(f,C(36));U(f,c[g]);g=g+1|0;}B0(f,C(37));f=M(f);}h=new L;N(h);H(H(H(H(h,C(302)),e),C(303)),f);Br(d,M(h));}
function Oo(){var a=this;D4.call(a);a.ez=null;a.f5=null;a.nz=null;a.xO=null;a.o$=null;}
function APk(a,b){b=b/5.0;H_(b-(b|0),1.0,1.0,1.0,a.f5.U);return 0;}
function AMP(a){U1(a);Ey(a.ez,a.D.H,a.xO,0,0);ABK(a.f5,a.D.H,a.nz,0,0,0.0);Ks(a.D.H,C(286));}
function AYf(a,b,c){var d,e,f;VA(a,b,c);V(a.f5.u,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.ez;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function VE(){var a=this;D4.call(a);a.gq=null;a.qD=null;a.lB=null;a.kt=null;a.iX=null;}
function AZg(a){var b,c,d,e,f,g;U1(a);b=a.D.H;c=a.kt;Mw(b,c.b,c.a,a.iX);b=a.gq;c=a.qD;d=a.hB;e=a.D.H;f=0;while(true){g=0;while(true){Ey(b,e,c,g,f);g=g+Cc(c)|0;if(g>=d.b)break;}f=f+De(c)|0;if(f>=d.a)break;}Gc(a.D.H);}
function AOO(a,b,c){VA(a,b,c);V(a.iX,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function Vy(){var a=this;Ci.call(a);a.eE=null;a.lJ=null;a.f7=null;a.b9=null;a.e7=0;a.iA=null;a.e6=0;a.CI=20;a.C4=11;a.Ai=220;a.k7=null;a.BV=5000;a.hX=0;a.gj=null;}
function AXM(a){var b,c,d,e,f,g,h;b=a.iA;c=a.e6;d=a.k7;JC(b,c,0,d.a,5000,d.b,20);B2(a.eE,1);AAD(a.iA,a.eE);if(a.b9===null){e=0;while(e<11){e=e+1|0;c=20*e|0;BS(a.lJ,Db(e),0.0,c);}b=CS(a.eE);a.b9=b;CJ(b,a.lJ);}if(a.e6<=a.e7)while(true){f=a.e7;if(f<=a.e6)break;a.e7=f-20|0;b=a.f7;g=a.hX-1|0;a.hX=g;BS(b,Db(g),0.0,20.0);II(a.b9,a.f7,0,a.e7%220|0);ET(a.f7);}else while(a.e7<(a.e6-20|0)){b=a.f7;g=a.hX+1|0;a.hX=g;BS(b,Db((g+11|0)-1|0),0.0,20.0);II(a.b9,a.f7,0,a.e7%220|0);ET(a.f7);a.e7=a.e7+20|0;}b=HE(0,0,Cc(a.b9),De(a.b9));Ig(b,
0,0,Cc(a.b9),De(a.b9));GH(b,a.gj.data[0]);Fw(b,a.gj.data[1]);Ey(b,a.eE,a.b9,400,0);g=a.e6%220|0;f=Bc(De(a.b9)-g|0,200);d=HE(0,0,Cc(a.b9),f);Ig(d,0,g,Cc(a.b9),f);GH(d,a.gj.data[0]);Fw(d,a.gj.data[1]);Ey(d,a.eE,a.b9,0,0);h=HE(0,f,Cc(a.b9),(De(a.b9)-f|0)-20|0);Ig(h,0,0,Cc(a.b9),(De(a.b9)-f|0)-20|0);GH(h,a.gj.data[1]);Fw(h,a.gj.data[0]);Ey(h,a.eE,a.b9,0,0);}
function ANb(a,b,c){Co(a.k7,b);}
function AVc(a,b){return 0;}
function UI(a){return 5000-a.k7.a|0;}
function JD(){D4.call(this);this.d5=0;}
function T6(a){var b,c;b=a.D.cd;c=new Yw;c.rx=a;TJ(b,c,Ow(a));}
function RB(a){var b,c,d,e;b=a.d5+1|0;a.d5=b;c=IQ(F(JD));d=new L;N(d);H(H(U(H(d,C(304)),b),C(28)),c);e=M(d);c=a.D.cd;d=new ABB;d.rT=e;Xk(c,e,d,Ow(a));}
function Ow(a){var b;b=new SM;b.zz=a;return b;}
function AQv(a,b,c,d){a:{switch(c){case 0:break;case 2:RB(a);break a;default:break a;}T6(a);}return 1;}
function Ve(){var a=this;Ci.call(a);a.wv=null;a.gl=null;a.mO=null;a.ik=null;}
function AY4(a){var b;b=a.D.H;EC(b,a.wv);Ey(a.gl,b,a.mO,0,0);}
function AS$(a,b,c){var d,e,f;d=a.gl;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Hg(){var a=this;Ci.call(a);a.xW=null;a.cg=null;a.d1=null;a.df=null;a.fe=null;a.eD=null;}
function NK(a,b){var c,d;DR(a,b);a.xW=CI(20);a.cg=U6();a.d1=new Bh;a.df=new Bh;a.fe=new Bh;a.eD=new Bh;c=b.o.bP;d=new X9;d.Cu=a;Y(c,d);Y(b.o.br,a);b=a.cg.bk;Fs();BT(b,A3F);BT(a.cg.U,A3H);}
function AEk(a){var b,c,d;b=a.D.H;EC(b,a.xW);c=a.cg;d=c.u;Bu(b,d.b,d.a,c.t,c.bk);B2(b,1);c=a.cg;d=c.u;ACh(b,d.b,d.a,c.t,a.d1,a.df,a.fe,a.eD,c.U);B2(b,0);}
function ARb(a,b){return 0;}
var WF=G(Hg);
function AUQ(a,b,c){var d,e,f;d=a.cg;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);V(a.d1,0,0);V(a.df,Bc(b.b,b.a),Bc(b.b,b.a));b=a.fe;d=a.d1;V(b,d.b,d.a+20|0);b=a.eD;d=a.df;V(b,d.b,d.a+40|0);}
function AWm(a,b){var c,d,e;Co(a.d1,b.i);b=a.df;c=a.cg;d=c.u;e=d.b;c=c.t;V(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.fe;c=a.d1;V(b,c.b,c.a+20|0);b=a.eD;c=a.df;V(b,c.b,c.a+40|0);return 0;}
function WE(){var a=this;Hg.call(a);a.fI=null;a.go=null;}
function AYE(a,b){var c;c=a.df;b=b.i;c.a=b.a-50|0;a.eD.a=b.a+100|0;return 1;}
function AMK(a){var b,c,d,e,f,g,h;b=Bd(a.d1.b,a.fe.b);c=Bc(a.df.b,a.eD.b);d=Bc(a.d1.a,a.df.a)-50|0;e=Bd(a.fe.a,a.eD.a)+50|0;HG(a.cg,b,d,c-b|0,e-d|0);AEk(a);f=a.cg.u.b-10|0;VC(a,a.D.H,10,f,a.d1,a.fe);g=a.cg;h=g.u.b+g.t.b|0;VC(a,a.D.H,h,f,a.df,a.eD);}
function VC(a,b,c,d,e,f){var g;V(a.fI,c,a.cg.u.a);V(a.go,d,e.a-a.cg.u.a|0);g=a.fI;Bu(b,g.b,g.a,a.go,a.cg.bk);V(a.fI,c,e.a);V(a.go,d,f.a-e.a|0);e=a.fI;Bu(b,e.b,e.a,a.go,a.cg.U);V(a.fI,c,f.a);e=a.go;g=a.cg;V(e,d,(g.u.a+g.t.a|0)-f.a|0);e=a.fI;Bu(b,e.b,e.a,a.go,a.cg.bk);}
function AKq(a,b,c){}
function AAF(){var a=this;DA.call(a);a.iq=null;a.jr=null;a.js=null;a.rS=null;}
function ANU(a,b,c){if(b===0.0)Xs(a);}
function AXj(a){K2(a);Gw(a.iq);}
function Xs(a){T1(a,a.jr);T1(a,a.js);a.jr=AAC(a,0.5,0,C(305));a.js=AAC(a,1.0,1,C(306));EX(a.cL,a.jr);EX(a.cL,a.js);Zs(a);}
function T1(a,b){if(b!==null){J6(a.cL,b);L$(b);}}
function AAC(a,b,c,d){var e,f,g;e=H6(a.q);f=new QT;g=new RH;g.pc=a;g.pe=e;g.pd=d;Mt(f);f.lb=new BZ;f.nR=new Bh;f.sA=g;f.sx=b;if(c){g=NQ(f,a.q);HY(g,A4s,A4t);f=g;}GS(e,f);e.dD=Fn();return e;}
function AWh(a,b,c){Ru(a,b,c);Zs(a);}
function Zs(a){var b;b=a.q.bS;Ei(a.js,BH((b.b*2|0)/10|0,(b.a*2|0)/10|0),BH((b.b*7|0)/10|0,(b.a*7|0)/10|0));Ei(a.jr,BH(b.b/10|0,b.a/10|0),BH((b.b*6|0)/10|0,(b.a*6|0)/10|0));}
function YE(){DA.call(this);this.ko=null;}
function AUI(a){K2(a);}
function AQg(a,b,c){var d;if(b===0.0){d=a.q.bS;Ei(a.ko,BH(d.b/10|0,d.a/10|0),BH((d.b*6|0)/10|0,(d.a*6|0)/10|0));}}
function Su(){var a=this;DA.call(a);a.gx=null;a.nN=null;a.jZ=null;a.oN=null;}
function ACk(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=BG(c,d);h=g>=0?0:1+St(f,2.0)|0;i=g>0?0:1+St(f,3.0)|0;j=Q(FC,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new L;N(m);U(H(m,C(307)),g);k[g]=ACk(M(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){n=new FC;m=new L;N(m);U(H(m,C(308)),g);Wc(n,M(m),c);o=Q(FC,0);n.yq=o;n.hh=o;m=new PE;m.qN=n;n.z8=m;if(Zu(f)<0.25){m=IY(n.iz,0);m.bK=m.bK|2;}k[h+g|0]=n;g=g+1|0;}m=new FC;Wc(m,b,c);k=Q(FC,0);m.yq=k;m.hh=k;m.hh=j;b=new SZ;b.zu=m;b.zv=e;m.p4=b;m.tx=b;if((c+c|0)>d)RO(m);else Wy(m);return m;}
function X7(a){var b,c,d,e;b=a.jZ;c=a.nN;d=Q(HQ,ABj(c));e=d.data;if(SG(c,d,0)!=e.length){b=new Bt;X(b);K(b);}b.et=AK3(d);if(b.bO!==0.0)NV(b);}
function AVH(a,b,c){var d;if(b===0.0){d=a.q.bS;Ei(a.gx,BH(d.b/30|0,d.a/10|0),BH((d.b*3|0)/10|0,(d.a*8|0)/10|0));}}
var N2=G(JR);
function ALG(a){return JJ(1);}
function AZu(a,b,c){AGs(a,b,c);}
function PZ(){var a=this;DA.call(a);a.or=null;a.kP=null;a.jj=null;}
function AXo(a,b,c){var d,e,f,g;if(b===0.0){d=a.jj;e=a.q.bS;f=ABd(d.Q);g=e.a-f|0;Ei(d,BH(e.b/20|0,f+(g/20|0)|0),BH((e.b*9|0)/10|0,(g*9|0)/10|0));}}
function YX(){var a=this;Ci.call(a);a.uf=null;a.l9=null;a.e4=null;a.l3=null;a.l6=0.0;a.gO=null;a.zF=null;a.vd=null;a.sn=null;a.tS=null;a.sP=null;a.pv=null;a.Ag=null;a.pp=null;a.ki=null;}
var A4u=0;function A19(a){var b=new YX();AYI(b,a);return b;}
function AYI(a,b){var c,d,e;DR(a,b);a.uf=new BZ;a.l9=ABa(1.0,0.0,0.0,1.0);a.e4=U6();a.l3=new Bh;a.l6=3.1415927410125732;c=AFM();a.gO=c;a.zF=GO(c,1.25);a.vd=GO(a.gO,1.3333333730697632);a.sn=GO(a.gO,1.5);a.tS=GO(a.gO,1.6666666269302368);a.sP=GO(a.gO,2.0);a.pv=ABa(a.l6/24.0,15.0,3.0,0.5);c=ABa(a.l6/12.0,25.0,3.0,0.5);a.Ag=c;a.pp=DD([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.ki=I(BZ,[a.gO,a.zF,a.vd,a.sn,a.tS,a.sP,a.pv,c]);c=b.o.bP;d=new Sm;d.C0=a;Y(c,d);Y(b.o.br,a);b=a.e4.U;Fs();BT(b,A3F);HG(a.e4,0,0,600,60);e
=KJ(0.5,0.375);JN(0.375,e);JN(0.375,JN(3.0,KJ(e,3.0)));GO(AFM(),3.0);}
function AYv(a,b,c){var d,e,f;Co(a.l3,b);d=a.e4;e=d.u;f=b.b;d=d.t;V(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function GO(b,c){var d;d=new BZ;Zw(b,c,d);return d;}
function AFM(){var b;b=new BZ;L8(b);return b;}
function APa(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.D.H;EC(b,a.uf);B2(b,1);c=a.e4;d=c.u.b;e=c.t.a/2|0;f=0;while(true){g=a.ki.data;if(f>=g.length)break;h=a.pp.data[f];c=g[f];i=Pf(c);j=a.e4;k=j.u;l=k.b;m=k.a;MX(b,l,m+h|0,j.t,d+i,((m+e|0)+h|0)+i,c,a.l9);f=f+1|0;}if(A4u){c=A1Q(1,2);n=0;while(n<1000){h=F7(c,a.ki.data.length);l=F7(c,a.l3.a-a.e4.t.a|0);j=a.ki.data[h];i=j.bq;i=i-(i|0)>=0.25?0.0:0.5;k=a.e4;MX(b,k.u.b,l,k.t,d+i,(e+l|0)+i,j,a.l9);n=n+1|0;}}B2(b,0);}
function AVk(a,b){return A4u;}
function Jl(){var a=this;B.call(a);a.zN=null;a.eb=null;a.w3=null;a.B8=null;a.tP=null;a.lf=null;a.rA=null;a.zR=null;a.it=null;a.il=null;a.gy=null;}
function A4v(a,b,c,d,e,f,g,h,i,j,k){var l=new Jl();Nv(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function Nv(a,b,c,d,e,f,g,h,i,j,k,l){a.zN=b;a.eb=c;a.w3=d;a.B8=e;a.tP=f;a.lf=g;a.rA=h;a.zR=i;a.it=j;a.il=k;a.gy=l;}
var ADj=G(0);
function ACw(){var a=this;B.call(a);a.mi=null;a.jo=null;a.rD=null;a.pI=null;}
function AGx(a,b,c,d){var e=new ACw();AYN(e,a,b,c,d);return e;}
function AYN(a,b,c,d,e){a.mi=b;a.jo=c;a.rD=d;a.pI=e;}
var AFV=G(0);
function Fn(){var b,c,d;b=new IV;c=new Ja;AR4();d=A4w;NA(c,d,A4x,A4y,A4z,A4A,d);Mx(b,c,AIh(),AIz(S(C(309)),S(C(279)),S(C(280))),AIh(),ACl(1,0.125),A4B,A4C);return b;}
function AIh(){var b,c;b=new JB;c=S(C(310));AR4();Lf(b,c,A4D,A4E);return b;}
function AHE(){var b,c;b=new JB;c=S(C(280));AJU();Lf(b,c,A4F,A4G);return b;}
function AH5(){var b,c;b=new JB;AHr();c=A4H;AKd();Lf(b,c,A4I,A4J);return b;}
function AIL(){var a=this;B.call(a);a.uL=null;a.o_=null;a.xk=null;a.p1=null;}
function ACC(a,b,c,d){var e=new AIL();AKH(e,a,b,c,d);return e;}
function AKH(a,b,c,d,e){a.uL=b;a.o_=c;a.xk=d;a.p1=e;}
function ACd(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.dU.o_;break a;case 3:if(c!=3){b=b.dU.p1;break a;}b=b.dU.xk;break a;default:b=b.bp.eb;break a;}b=b.dU.uL;}return b;}
function I8(a,b,c){return ACd(a,b,0,c);}
function NB(){var a=this;B.call(a);a.kH=null;a.j9=null;}
function NT(a,b){var c;c=a.j9;a.j9=b;return c;}
function Ki(){var a=this;NB.call(a);a.bT=null;a.b8=null;a.gb=0;a.gp=0;}
function KD(a){var b;b=LS(a);if(b==2){if(LS(a.b8)<0)a.b8=OM(a.b8);return Q3(a);}if(b!=(-2))return a;if(LS(a.bT)>0)a.bT=Q3(a.bT);return OM(a);}
function LS(a){var b,c;b=a.b8;c=b===null?0:b.gb;b=a.bT;return c-(b===null?0:b.gb)|0;}
function OM(a){var b;b=a.bT;a.bT=b.b8;b.b8=a;EF(a);EF(b);return b;}
function Q3(a){var b;b=a.b8;a.b8=b.bT;b.bT=a;EF(a);EF(b);return b;}
function EF(a){var b,c,d;b=a.b8;c=b===null?0:b.gb;b=a.bT;d=b===null?0:b.gb;a.gb=Bd(c,d)+1|0;a.gp=1;b=a.bT;if(b!==null)a.gp=1+b.gp|0;b=a.b8;if(b!==null)a.gp=a.gp+b.gp|0;}
var AH_=G();
function ALi(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Rs;c=c.buffer;d.ga=c;d.oY=new $rt_globals.Int8Array(c);d.lS=new $rt_globals.Uint16Array(c);d.wM=new $rt_globals.Int32Array(c);d.s$=new $rt_globals.Float32Array(c);d.to=new $rt_globals.Float64Array(c);e=d.ga.byteLength;c=new L;N(c);U(H(c,C(311)),e);CO(M(c));e=b.callToCpp1();c=new L;N(c);U(H(c,C(312)),e);CO(M(c));f=b.callToCpp2();c=new L;N(c);E$(H(c,C(313)),f);CO(M(c));c=On(d,b.getC8String());g=new L;N(g);H(H(g,C(314)),c);CO(M(g));c
=OD(d,b.getC16String());g=new L;N(g);H(H(g,C(315)),c);CO(M(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.ga,h,8));c=AGH(i);g=new L;N(g);H(H(g,C(316)),c);CO(M(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.ga,h,8));c=AVA(j);g=new L;N(g);H(H(g,C(317)),c);CO(M(g));k=AEL(d,b.getCDoubleArray8(),8);l=AZj(k);c=new L;N(c);H(H(c,C(318)),l);CO(D7(c));l=AY9(b.getC8String(),C(319),d);c=MS();H(H(c,C(320)),l);CO(D7(c));l=ARA(b.getC16String(),C(321),
d);c=MS();H(H(c,C(322)),l);CO(D7(c));c=AT2(i,d,b.getCIntArray8(),DD([11,22,33,44,55,66,77,88]));g=MS();H(H(g,C(323)),c);CO(D7(g));c=AVW(j,d,b.getCFloatArray8(),100,DD([111,222,333,444,555,666,777,888]));g=MS();H(H(g,C(324)),c);CO(D7(g));b=AWi(k,d,b.getCDoubleArray8(),1000,DD([1111,2222,3333,4444,5555,6666,7777,8888]));c=MS();H(H(c,C(325)),b);CO(D7(c));}
function AVW(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(326);h=0;i=e;a:{while(h<g){if(CU(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.s$[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(327);}return C(328);}
function AWi(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(326);h=0;i=e;a:{while(h<g){if(Gq(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.to[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(327);}return C(328);}
function AT2(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(326);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.wM[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(327);}return C(328);}
function AY9(b,c,d){var e,f,g,h;e=On(d,b);if(!Bo(c,e))return C(329);f=0;while(f<J(e)){g=P(e,f);h=b+f|0;if(g!=d.oY[h])return C(330);f=f+1|0;}return C(327);}
function ARA(b,c,d){var e,f,g,h;e=OD(d,b);if(!Bo(c,e))return C(329);f=0;while(f<J(e)){g=P(e,f);h=b+(f*2|0)|0;if(g!=(d.lS[h>>>1|0]&65535))return C(330);f=f+1|0;}return C(327);}
function CO(b){Rp(C(2),b);}
function AQf(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function R1(){B.call(this);this.r7=null;}
function ALd(a,b){return AEN(a.r7,b);}
function RZ(){B.call(this);this.yR=null;}
function AOm(a,b){JV(a.yR,b);}
function R0(){B.call(this);this.r2=null;}
function AWC(a,b,c){return Hv(a.r2,b,c);}
function PV(){B.call(this);this.s9=null;}
function AT6(a){var b,c;b=a.s9.cO;BQ(b);c=new P7;c.qK=b;return c;}
function PW(){B.call(this);this.zK=null;}
function AQh(a,b,c,d){return KF(a.zK.cO,c,d);}
function PT(){B.call(this);this.qt=null;}
function AQ_(a,b){b=b;return ADb(a.qt,b);}
function AIG(){JA.call(this);this.dc=null;}
function Ku(){var a=new AIG();AX_(a);return a;}
function HE(a,b,c,d){var e=new AIG();AQc(e,a,b,c,d);return e;}
function AX_(a){XT(a);a.dc=new BZ;}
function AQc(a,b,c,d,e){XT(a);a.dc=new BZ;HG(a,b,c,d,e);}
function FR(a){var b,c;b=a.t;c=a.dc;V(b,c.bd-c.bm|0,c.bD-c.bq|0);}
function FB(a,b){Ig(a,0,0,Cc(b),De(b));}
function Ig(a,b,c,d,e){Ct(a.dc,b,c,d,e);}
function Ey(a,b,c,d,e){var f;f=a.u;DU(b,f.b+d|0,f.a+e|0,a.t,a.dc,c,a.U,a.bk,0);}
function V3(a,b,c,d){var e;e=a.u;DU(b,e.b,e.a,a.t,a.dc,c,a.U,a.bk,d);}
function Id(a,b,c,d,e,f,g){DU(b,c,d,a.t,a.dc,e,!f?a.U:a.bk,!f?a.bk:a.U,g);}
function GH(a,b){BT(a.U,b);}
function Fw(a,b){BT(a.bk,b);}
function XR(){B.call(this);this.fp=null;}
function ALA(a,b){var c,d,e,f,g,h;c=b.i;d=c.b;e=a.fp.hk;f=e.t;d=d-f.b|0;g=c.a-f.a|0;V(e.u,d,g);c=a.fp;e=c.D.cd;b=b.i;d=0;a:{while(true){h=c.i2.data;if(d>=h.length)break;if(Fb(h[d],b)){b=c.pz.data[d];break a;}d=d+1|0;}b=null;}T$(e,b);return 1;}
function AJA(a,b,c,d){if(!c&&d==2){b=a.fp;U7(b,b.ef);}return 1;}
function ALp(a,b,c){var d,e;d=Bz();e=new L;N(e);U(H(e,C(331)),c);Br(d,M(e));if(c)return null;d=b.i;e=!Fb(a.fp.ef,d)?null:d;Yo(a.fp.ij,d.b,d.a);b=a.fp;R_(b.ij,Kj(b.D.cd));if(e===null)b=A3P;else{b=new Yg;b.tF=a;b.tG=e;}return b;}
function AKs(a,b,c){var d;b=Bz();d=new L;N(d);U(H(d,C(332)),c);Br(b,M(d));return 1;}
function SD(){B.call(this);this.zY=null;}
function AWX(a,b){return Pa(a.zY,b);}
function SC(){B.call(this);this.s6=null;}
function AT$(a,b){return Pa(a.s6,b);}
function SB(){B.call(this);this.Cp=null;}
function AQx(a,b,c){var d,e;Br(Bz(),C(333));d=!c?C(334):C(53);e=new L;N(e);H(H(H(e,C(335)),d),C(336));Zx(b,M(e));return 1;}
function SA(){B.call(this);this.Ar=null;}
function AJF(a){Br(Bz(),C(337));}
function Sz(){B.call(this);this.Bx=null;}
function ATf(a,b){Br(Bz(),C(338));return 1;}
function Sy(){B.call(this);this.xE=null;}
function AW9(a,b,c,d){var e,f,g;b=a.xE;e=( -d|0)/10|0;b=b.ef;f=b.t;f.b=f.b+e|0;f.a=f.a+e|0;b=b.u;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function HP(){var a=this;BZ.call(a);a.g$=0;a.hb=0;a.g_=0;a.ha=0;}
function CI(a){var b=new HP();AYU(b,a);return b;}
function Dr(a,b,c){var d=new HP();AM1(d,a,b,c);return d;}
function S(a){var b=new HP();AV2(b,a);return b;}
function ED(a,b,c,d){var e=new HP();Tu(e,a,b,c,d);return e;}
function BU(a){var b=new HP();KH(b,a);return b;}
function AYU(a,b){Tu(a,b,b,b,255);}
function AM1(a,b,c,d){Tu(a,b,c,d,255);}
function AV2(a,b){if(!(J(b)!=4&&J(b)!=7&&J(b)!=9)&&P(b,0)==35){if(J(b)==4){a.g$=JF(P(b,1))*17|0;a.hb=JF(P(b,2))*17|0;a.g_=JF(P(b,3))*17|0;a.ha=255;}else{a.g$=Mv(P(b,1),P(b,2));a.hb=Mv(P(b,3),P(b,4));a.g_=Mv(P(b,5),P(b,6));a.ha=J(b)!=9?255:Mv(P(b,7),P(b,8));}Ik(a.g$,a.hb,a.g_,a.ha,a);return;}}
function Tu(a,b,c,d,e){a.g$=b;a.hb=c;a.g_=d;a.ha=e;Ik(b,c,d,e,a);}
function KH(a,b){a.g$=b.g$;a.hb=b.hb;a.g_=b.g_;a.ha=b.ha;BT(a,b);}
function JF(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mv(b,c){return (16*JF(b)|0)+JF(c)|0;}
var AGY=G(0);
function JJ(b){return !b?I(BC,[C(151),C(152),C(339)]):I(BC,[C(151),C(152),C(339),C(33)]);}
function Ok(){B.call(this);this.k$=null;}
function ANC(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.k$.de;e=DP();f=e-0.5+(DP()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DP()*0.3;h=0.5+DP()*0.5;H_(e,g,h,1.0,b.U);H_(f,g,h,1.0,b.bk);b=a.k$;BT(b.dF.U,b.de.U);b=a.k$;BT(b.dF.bk,b.de.bk);}return 1;}
function Oe(){var a=this;B.call(a);a.n0=null;a.oL=null;}
function AFW(){var a=this;B.call(a);a.fL=null;a.cn=null;a.gm=null;a.g5=null;a.oc=null;a.cB=null;a.gM=null;a.c1=0;a.fP=0;a.oF=0;a.j2=0;a.kF=0;a.gY=0;a.k4=null;a.mw=null;a.pl=null;a.nT=null;}
function AFt(){var a=new AFW();AV_(a);return a;}
function AV_(a){a.cn=U6();a.gm=new Bh;a.g5=new Bh;a.cB=A4K;a.j2=(-1);a.kF=1;}
function K$(a,b){MH(a);a.cB=b;}
function It(a,b,c){a.fL=b;Zm(a,c);MH(a);}
function Iy(a,b){var c;a.oc=b.kd;c=b.mA.nV;BT(a.cn.U,c);c=b.ju.nh;BT(a.cn.bk,c);a.nT=b.mA;}
function Pp(a){a.gM=Cx(a.gM,null);V(a.gm,0,0);a.cB=A4K;a.j2=(-1);Wn(a.cn);}
function Zm(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=Jx(b);d=b.ce;BQ(a.fL);Ck(c,a.fL);e=KW(a.fL,1.25);f=0;a.c1=Cd(2.0,d);a.fP=Cd(3.0,d);a.oF=Cd(12.0,d);g=0;h=a.cB.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=Ll(c,l.nt);n=a.oF;n=(n+m|0)+n|0;f=Bd(f,n);b=l.e_;b.b=g;b.a=0;b=l.d_;b.b=n;b.a=e;Ct(l.jU,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.gm;b.b=g;b.a=e;b=a.cn.t;n=a.gY;if(!n){m=a.c1;m=(g+m|0)+Bb(m,a.cB.data.length)|0;}else m=(f+(a.c1*2|0)|0)+(a.fP*2|0)|0;b.b=m;if(!n)e=e+(a.c1*2|0)|0;else{n=a.c1;e=(Bb(e+n|0,a.cB.data.length)+n|
0)+(a.fP*2|0)|0;}b.a=e;}
function KY(a,b,c){var d,e,f,g,h,i,j;V(a.cn.u,b,c);d=a.c1+a.fP|0;e=a.cB.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.e_;j.b=b+d|0;j.a=c+h|0;if(!a.gY){if(!i.d_.b)ACS();d=d+(i.d_.b+a.c1|0)|0;}else{if(!i.d_.a)ACS();h=h+(i.d_.a+a.c1|0)|0;}g=g+1|0;}}
function ACS(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function Eu(a){var b,c;b=a.gm;if(b.b&&b.a)return a.cn.t;c=new Bt;Bm(c,C(340));K(c);}
function MH(a){a.kF=1;}
function MZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bY;if(!a.cB.data.length)return;if(a.gM===null)a.gM=CS(c);a:{if(!a.kF){d=a.gm;if(Bb(d.b,d.a))break a;}d=a.gm;if(!Bb(d.b,d.a))Zm(a,b);d=a.gm;e=d.b;f=d.a;if(!Bb(e,f))return;d=DQ(c,e,f,b.cs);Ck(d,a.fL);g=KW(a.fL,0.125);h=a.fL;i=h.db;g=g+i-(i+h.er)/16.0;j=a.cB.data;e=j.length;f=0;while(f<e){h=j[f];BS(d,h.nt,h.jU.bm+a.oF,g);f=f+1|0;}CJ(a.gM,d);a.kF=0;Er(d);}if(!Li(a.cn)){d=a.cn;AD$(c,d.t,d.u,d.bk,a.c1,a.g5);d=a.cn;h=d.t;k=d.u;d=d.U;e=a.c1;l=a.g5;l.b=(h.b-e|0)-e
|0;l.a=(h.a-e|0)-e|0;Bu(c,k.b+e|0,k.a+e|0,l,d);if(a.gY){d=a.cn;AGj(c,d.t,d.u,0,0,Rw(a.oc,b.ce),a.oc.oi,a.g5);}}j=a.cB.data;m=j.length;n=0;while(n<m){d=j[n];h=d.e_;e=h.b;f=h.a;h=d.d_;k=d.jU;l=a.gM;o=a.nT;DU(c,e,f,h,k,l,o.sg,AAc(o,d.jt),b.cs);n=n+1|0;}b:{if(a.gY){j=a.cB.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.g5;e=(a.cn.t.b-(a.c1*2|0)|0)-(a.fP*2|0)|0;h=d.d_;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.e_;Bu(c,k.b+h.b|0,k.a,b,AAc(a.nT,d.jt));}p=p+1|0;}}}}
function L0(a,b,c){var d,e,f,g,h,i;d=Fb(a.cn,b);e=!d?(-1):Pw(a,b);f=a.j2;if(f!=e){if(f>=0){g=a.cB.data[f];g.jt=0;if(a.pl!==null){h=Bz();g=CE(g);i=new L;N(i);H(H(U(H(i,C(341)),f),C(342)),g);Br(h,M(i));}}if(e>=0){h=a.cB.data[e];g=a.mw;if(g!==null)g.pt(b,e,h);h.jt=1;}a.j2=e;}return d&&Gs(c)?1:0;}
function MQ(a,b,c,d){var e,f;e=Pw(a,b);if(e>=0){f=a.cB.data[e];if(!X3(f))f.ml.l();}return 1;}
function Pw(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cB.data;if(c>=d.length)return (-1);e=d[c];if(GF(b,e.e_,e.d_))return c;if(a.gY){f=e.e_;g=f.b;e=e.d_;h=e.b;g=g+h|0;i=f.a;f=a.g5;f.b=(a.cn.t.b-(a.c1*2|0)|0)-h|0;f.a=e.a;if(ADq(b,g,i,f))break;}c=c+1|0;}return c;}
function AB9(a){a.gY=1;}
function W5(){B.call(this);this.wX=null;}
function ASx(a,b){var c;c=a.wX;if(b.bl==32)Pp(c.dp);return 0;}
function W1(){B.call(this);this.yk=null;}
function AVZ(a,b){var c,d,e,f;b=b;c=a.yk;Br(Bz(),C(343));if(!Dk(c.eI)){d=c.eI;b=b.i;e=TQ(4);f=new V4;f.Bo=c;FP(d,b,e,f);}return 1;}
function R3(){var a=this;B.call(a);a.i$=null;a.hI=0.0;a.ls=0;a.jW=0;}
function Ec(a,b){var c=new R3();AGv(c,a,b);return c;}
function A1l(a,b,c,d){var e=new R3();AI0(e,a,b,c,d);return e;}
function AGv(a,b,c){AI0(a,b,c,300,600);}
function AI0(a,b,c,d,e){a.i$=b;a.hI=c;a.ls=d;a.jW=e;}
function AVP(a,b){if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){b=b;return a.hI===b.hI&&a.ls==b.ls&&a.jW==b.jW&&BV(a.i$,b.i$)?1:0;}return 0;}
var W2=G();
function AZq(a){Br(Bz(),C(344));}
var W3=G();
function AKI(a){Br(Bz(),C(345));}
function Cn(){var a=this;B.call(a);a.ml=null;a.jU=null;a.e_=null;a.d_=null;a.kk=null;a.nE=null;a.jt=0;a.nt=null;}
function Pq(a,b){var c=new Cn();Es(c,a,b);return c;}
function A0Q(a,b,c,d){var e=new Cn();AE6(e,a,b,c,d);return e;}
function Es(a,b,c){AE6(a,b,c,null,null);}
function AE6(a,b,c,d,e){a.jU=new BZ;a.e_=new Bh;a.d_=new Bh;a.nt=c;a.nE=e;a.ml=b;a.kk=d;}
function X3(a){return a.kk===null?0:1;}
function YM(){B.call(this);this.AP=null;}
function AQm(a,b){return b.iS&&b.bl==32?1:0;}
function YN(){B.call(this);this.yl=null;}
function AJ_(a,b){var c,d,e,f,g,h;b=b;c=a.yl;if(!Dk(c.ji)){d=c.ji;b=b.i;e=Q(Cn,1);f=e.data;g=new Cn;h=new Q_;h.p9=c;Es(g,h,C(346));f[0]=g;FP(d,b,ER(e),A3Q);}return 1;}
var AF4=G();
function AIJ(b){var c,d;c=GQ(b,250,64);GB(c,C(282),25.0);Je(c,187,187,187);BS(c,C(347),0.0,24.0);BS(c,C(347),0.25,56.0);d=CS(b);CJ(d,c);Er(c);return d;}
function Sa(b){var c;c=new Uo;c.i8=b;return c;}
function AId(){var a=this;B.call(a);a.n$=0;a.oa=0;}
function AHJ(){var a=new AId();AXz(a);return a;}
function A1Q(a,b){var c=new AId();AIt(c,a,b);return c;}
function AXz(a){AIt(a,AHS(GM((AGR()))),GM((AGR()))^(-559038737));}
function AIt(a,b,c){var d;a.n$=b;a.oa=c;d=0;while(d<19){Lz(a);d=d+1|0;}}
function Lz(a){var b,c;b=a.n$;c=a.oa;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.n$=c;a.oa=b;return b;}
function AHS(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AG3(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function F7(a,b){return Zu(a)*b|0;}
function Zu(a){return 5.960464477539063E-8*(Lz(a)&16777215);}
function St(a,b){var c,d,e;c=AG3(Lz(a));d=AVN( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function Ot(){B.call(this);this.sc=null;}
function ASI(a,b,c){var d;d=a.sc;if(b===0.0)MK(d,100);}
function Or(){B.call(this);this.yN=null;}
function ATj(a,b){var c,d,e;c=a.yN;d=b.bl;if(d==32){c.kn=c.kn?0:1;e=1;}else if(d==13){MK(c,1);e=1;}else if(d!=8)e=0;else{PX(c,1);e=1;}return e;}
var T2=G(0);
function ACz(b,c){var d;d=new Zf;d.rQ=b;d.rP=c;return d;}
function ACK(){var a=this;B.call(a);a.gu=null;a.hu=0;a.kx=0;a.gX=0;}
function AC6(a){var b=new ACK();ANQ(b,a);return b;}
function ANQ(a,b){a.gu=BM();a.gX=0;a.kx=2048;a.hu=b;}
function JM(a,b,c){var d,e,f,g,h,i;d=c.uI(b);e=a.kx;if(d>e){c=new Bt;f=new L;N(f);BL(U(H(U(H(f,C(348)),d),C(349)),e),41);Bm(c,M(f));K(c);}if(!a.hu){b=new BR;Bm(b,C(350));K(b);}a:{b=new BZ;if(d){b:{c=a.gu;if(c.m>0){c=B8(c);g=d;while(true){if(!B_(c))break b;f=Ca(c);if(f.bd>=g)break;}Ct(b,f.bm,f.bq,g,a.hu);f.bm=f.bm+g;h=f.bd-g;f.bd=h;if(h===0.0)Y$(a.gu,f);break a;}}g=a.gX;i=d;Ct(b,0.0,g,i,a.hu);BF(a.gu,ABa(i,a.gX,a.kx-d|0,a.hu));a.gX=a.gX+a.hu|0;}}return b;}
function IX(a,b){var c,d,e,f,g,h,i;a:{c=AIl(b);b=a.gu;if(b.m>0){d=B8(b);while(true){if(!B_(d))break a;e=Ca(d);if(e.bq===c.bq){f=e.bm;g=e.bd;h=f+g;i=c.bm;if(h===i){c.bm=f;c.bd=c.bd+g;TH(d);}else{h=c.bd;if(i+h===f){c.bd=h+g;TH(d);}}}}}}BF(a.gu,c);}
function J9(a){return BH(a.kx,a.gX);}
function OH(){var a=this;B.call(a);a.sf=null;a.ks=null;}
function AJZ(a,b,c){if(c)return A3P;return F0(a.ks.i3,b.i,a.sf,1);}
function AJ3(a,b,c){return 1;}
function ANA(a,b){var c;c=a.ks;return Ga(c.i3,b.i,c.rC);}
function UH(){B.call(this);this.xn=null;}
function ASG(a,b,c,d){var e,f;b=a.xn;e=(N4(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.eB=Bc(Bd(0,b.eB+Bb(e,f)|0),Zc(b));return 1;}
function R7(){B.call(this);this.t7=null;}
function ASj(a,b){var c,d,e;c=a.t7;if(b.cD&&b.bl==79){if(!b.bJ){b=c.D.cd;d=new Pj;d.xC=c;MW(b,d);}else{b=c.D.cd;d=new Pi;d.AA=c;Za(b,d);}e=1;}else e=0;return e;}
function Tx(){B.call(this);this.se=null;}
function AY6(a,b){var c,d,e,f,g,h;b=b;c=a.se;if(!Dk(c.jc)){d=c.jc;b=b.i;e=Q(Cn,5);f=e.data;g=new Cn;h=new AAM;h.tq=c;Es(g,h,C(351));f[0]=g;g=new Cn;h=new AAN;h.xZ=c;Es(g,h,C(352));f[1]=g;g=new Cn;h=new AAP;h.rh=c;Es(g,h,C(353));f[2]=g;g=new Cn;h=new AAQ;h.u5=c;Es(g,h,C(354));f[3]=g;g=new Cn;h=new AAR;h.zG=c;Es(g,h,C(355));f[4]=g;FP(d,b,ER(e),A3Q);}return 1;}
function Tw(){B.call(this);this.Cf=null;}
function AVh(a,b){var c,d;c=EL();b=CE(b);d=new L;N(d);H(H(d,C(356)),b);Br(c,M(d));b=new Ea;X(b);K(b);}
function Ty(){B.call(this);this.pB=null;}
function ALI(a,b){var c,d,e,f;c=a.pB;d=c.D.cd;e=new ABe;e.uc=c;f=Q(B,1);f.data[0]=b;CP(d,e,C(357),f);}
function Xg(){B.call(this);this.mC=null;}
function ATP(a,b){var c,d,e,f,g,h;c=a.mC;d=c.o$;if(d!==null){e=c.ez.u;f=e.b;g=b.i;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.o$=g;}b=b.i;f=b.b;c=c.f5;d=c.t;f=f-d.b|0;h=b.a-d.a|0;V(c.u,f,h);return 1;}
function AYQ(a,b,c){var d;if(!c){d=b.i;b=a.mC;if(!Fb(b.ez,d))d=null;b.o$=d;}return A3P;}
var C7=G(0);
var A31=null;var A3H=null;var A32=null;var A3F=null;var A34=null;var A33=null;var A36=null;var A35=null;var A38=null;var A37=null;var A39=null;function Fs(){Fs=Bq(C7);AZc();}
function AZc(){A31=CI(187);A3H=S(C(358));A32=CI(55);A3F=CI(43);A34=Dr(33,66,131);A33=Dr(60,63,65);A36=S(C(359));A35=S(C(360));A38=ED(85,85,85,128);A37=ED(43,43,43,0);A39=S(C(269));}
function R4(){var a=this;B.call(a);a.qi=null;a.kG=null;}
function APE(a,b,c){var d;if(!c){d=F0(a.kG.iA,b.i,a.qi,1);if(d!==null)return d;}return A3P;}
function AKm(a,b,c){return 1;}
function ANJ(a,b){var c;c=a.kG;return Ga(c.iA,b.i,Ti(c.D.cd));}
function ABW(){B.call(this);this.rH=null;}
function AW2(a,b,c,d){var e,f;b=a.rH;e=(N4(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.e6=Bc(Bd(0,b.e6+Bb(e,f)|0),UI(b));return 1;}
function AAh(){B.call(this);this.pk=null;}
function AMu(a,b){var c,d;a:{c=a.pk;switch(b.bl){case 67:RB(c);d=1;break a;case 86:T6(c);d=1;break a;default:}d=0;}return d;}
var AAg=G();
function AQG(a,b,c){return 0;}
function AAf(){B.call(this);this.ti=null;}
function AMF(a,b,c){var d,e;d=a.ti;c=d.d5+1|0;d.d5=c;d=IQ(F(JD));e=new L;N(e);H(H(U(e,c),C(361)),d);e=M(e);$rt_globals.console.info($rt_ustr(e));Zx(b,e);return 1;}
var AAe=G();
function ARs(a){return null;}
function AAi(){B.call(this);this.vH=null;}
function AWa(a){var b,c;b=a.vH;c=new ABs;c.p$=b;return c;}
function UD(){B.call(this);this.CX=null;}
function AX4(a,b){return 0;}
function ABL(){B.call(this);this.BX=null;}
function AMc(a,b){return b.iS&&b.bl==32?1:0;}
function ABM(){B.call(this);this.t4=null;}
function AJ5(a,b){var c,d,e,f,g,h;b=b;c=a.t4;if(!Dk(c.iq)){d=c.iq;b=b.i;e=Q(Cn,1);f=e.data;g=new Cn;h=new Rk;h.uA=c;Es(g,h,C(346));f[0]=g;FP(d,b,ER(e),A3Q);}return 1;}
function AGS(){var a=this;B.call(a);a.bt=null;a.Q=null;a.S=null;a.dD=null;}
function H6(a){var b=new AGS();ATH(b,a);return b;}
function ATH(a,b){var c;a.S=AZF();a.bt=b;c=new YH;Gb(c);c.lX=new BZ;c.fS=b;a.Q=c;}
function E9(a,b,c,d){var e,f,g,h;e=a.Q;f=BV(e.hO,c)?0:1;g=BV(e.hT,b)?0:1;h=d===e.kW?0:1;if(f){e.hO=c;e.ec=null;RG(e,0);}e.gE=!f&&!g&&!h?0:1;e.hT=b;e.kW=d;e.hU=0;Ke(a);}
function L$(a){var b;b=a.Q;b.dI=Cx(b.dI,null);b.ec=null;a.S=Cx(a.S,null);}
function GS(a,b){var c,d,e;c=a.S;d=c.g;e=c.j;b=Cx(c,b);a.S=b;b.eJ(d,e,a.bt.ce);}
function Ei(a,b,c){var d;d=a.S;d.eJ(b,c,d.bO);Ke(a);}
function Ke(a){var b,c,d;if(a.bt.ce===0.0)return;b=a.Q;c=a.S.j.b;b.j.b=c;d=b.dI;if(d!==null&&c!=Cc(d)&&!(c>=b.hU&&Cc(b.dI)>=b.hU))b.gE=1;b=a.Q;b.bO=a.bt.ce;if(ZF(b))c=0;else{b=a.Q;RG(b,ABd(b));c=b.j.a;}b=a.Q.g;d=a.S.g;V(b,d.b,d.a-c|0);}
function MP(b,c){if(b<0)c=C(362);else if(b>0)c=C(363);return c;}
function ABX(a,b,c){var d;d=a.Q.g.b;return (d-c|0)<=b&&b<d?1:0;}
function Ou(a,b,c){var d,e;d=a.Q;e=d.g.b+d.j.b|0;return e<=b&&b<(e+c|0)?1:0;}
function RE(a,b,c){var d;d=a.Q.g.a;return (d-c|0)<=b&&b<d?1:0;}
function Pv(a,b,c){var d,e;d=a.S;e=d.g.a+d.j.a|0;return e<=b&&b<(e+c|0)?1:0;}
function ZM(a,b,c){var d,e,f;d=a.Q.g.a-c|0;e=a.S;f=(e.g.a+e.j.a|0)+c|0;return d<=b&&b<f?1:0;}
function AAu(a,b,c){var d,e;d=a.Q.g.a+c|0;e=a.S;return AE5(b,d,(e.g.a+e.j.a|0)-c|0);}
function Qg(a,b,c){var d,e,f;d=a.Q;e=d.g.b;f=e-c|0;e=(e+d.j.b|0)+c|0;return f<=b&&b<e?1:0;}
function PD(a,b,c){var d,e;d=a.Q;e=d.g.b;return AE5(b,e+c|0,(e+d.j.b|0)-c|0);}
function AE5(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BG(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Jd(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.b;h=b.a;b=a.S;i=b.g;j=i.b;k=i.a;b=b.j;l=b.b;m=b.a;b=new AA6;b.vl=a;b.vk=e;b.vn=f;b.vm=c;b.vp=g;b.vo=j;b.vr=l;b.vq=d;b.vh=h;b.vg=k;b.u6=m;return b;}
function EY(){var a=this;CR.call(a);a.cP=null;a.V=null;a.ek=null;}
function ASS(){var a=new EY();Mt(a);return a;}
function Mt(a){Gb(a);a.cP=new Bh;a.V=new Bh;}
function AOD(a,b){a.ek=b;}
function Ma(a,b,c){V(a.cP,b,c);}
function AEZ(a){var b;b=a.V;b.b=O4(a,b.b);b=a.V;b.a=ZB(a,b.a);}
function AHb(a,b){var c,d;c=a.V.b;d=O4(a,b);a.V.b=d;return c==d?0:1;}
function AI2(a,b){var c,d;c=a.V.a;d=ZB(a,b);a.V.a=d;return c==d?0:1;}
function ZB(a,b){return Bd(0,Bc(b,a.cP.a-a.j.a|0));}
function O4(a,b){return Bd(0,Bc(b,a.cP.b-a.j.b|0));}
function UE(){var a=this;EY.call(a);a.gf=null;a.cq=null;a.et=null;a.g6=null;a.gG=null;a.nu=null;a.xz=0;a.qQ=0;a.o8=0;a.fX=null;a.fY=null;}
function ATM(a){var b;AAz(a.g6);b=a.cq;b.e$=Cx(b.e$,null);VV(a);}
function VV(a){a.fX=Cx(a.fX,null);a.fY=Cx(a.fY,null);}
function AKR(a,b,c){Ql(a.cq,c);V6(a);}
function V6(a){var b,c,d,e,f;Wa(a.g6);b=a.cq;c=a.nu;d=a.bO;e=a.gf.bY;f=b.gC;b.cc=AEp(c.i$,c.hI*d,c.ls,c.jW,f,e);UY(a.cq,1.25,a.gf.bY);VV(a);a.fX=Cx(a.fX,WZ(a.cq,LD(707),2,a.gf.bY));a.fY=Cx(a.fY,WZ(a.cq,LD(709),2,a.gf.bY));NV(a);}
function NV(a){var b;Ma(a,0,Bb(a.et.ft.data.length,a.cq.dY));b=a.ek;if(b!==null)MG(b);}
function ART(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;c=a.gG.bp.eb;d=a.g;Bu(b,d.b,d.a,a.j,c);BQ(a.cq.cc);e=a.cq.dY;f=HD(a.j.a,e)+7|0;g=a.g6;if(g.data.length<f)a.g6=Tj(f,g,a.cq,a.xz,a.qQ,a.et);B2(b,0);LA(b,a.g,a.j);h=a.et.ft.data.length;i=a.V.a;j=h-1|0;k=AGb(i,e,j);i=AGb((a.V.a+a.j.a|0)-1|0,e,j);a.xz=k;a.qQ=i;l=a.j.b;m=EN(a,15.0);n=EN(a,10.0);o=EN(a,8.0);p=Bd(Cc(a.fY),Cc(a.fX));f=n+p|0;while(k<=i){q=a.et.ft.data[k];g=a.g6.data;n=k%g.length|0;r=g[n];P_(r,q.iz,b,e,l,0,k,n);s=Bb(e,k)-a.V.a|0;t=null;u
=m+Bb(f,q.oe)|0;v=a.o8!=k?0:1;if(v){V(a.gf.c9,a.j.b,e);d=a.g;Bu(b,d.b,d.a+s|0,a.gf.c9,a.gG.bp.gy);}a:{switch(q.jk){case 1:break;case 2:w=a.fY;break a;default:w=null;break a;}w=a.fX;}if(w!==null){x=a.gG.kU.data[0];Ct(a.cq.h6,0.0,0.0,Cc(w),De(w));Co(a.cq.hK,w.fw);d=a.cq;q=a.g;Hu(d,b,w,q.b+u|0,q.a+s|0,x.hW,!v?c:a.gG.bp.gy);}d=a.g;Q4(r,d.a+s|0,((d.b+u|0)+p|0)+o|0,b,l,e,0,a.gG,null,null,null,v,0,t);k=k+1|0;}Gc(b);}
function AW0(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cq.dY;f=((b.i.a-a.g.a|0)+a.V.a|0)/e|0;if(f>=0){g=a.et.ft.data;if(f<g.length){h=g[f];if(!Oi(a,b,f)){b=h.z8;if(b!==null)b.l();}}}}return 1;}
function AMw(a,b,c){var d,e,f,g;d=a.cq.dY;e=((b.i.a-a.g.a|0)+a.V.a|0)/d|0;if(!c&&e>=0){f=a.et.ft.data;if(e<f.length){g=f[e];if(Oi(a,b,e)){b=g.p4;if(b!==null)Vm(b);}else{a.o8=e;b=g.tx;if(b!==null)Vm(b);}}}return A3P;}
function Oi(a,b,c){var d,e,f,g,h,i,j;d=a.et.ft.data[c];e=EN(a,15.0);f=EN(a,10.0);g=Bd(Cc(a.fY),Cc(a.fX));h=e+Bb(f+g|0,d.oe)|0;i=(a.g.b-a.V.b|0)+h|0;j=i+g|0;c=b.i.b;return i<=c&&c<j?1:0;}
function AGb(b,c,d){return Bc(b/c|0,d);}
function O9(){B.call(this);this.xK=null;}
function KV(){var a=this;CR.call(a);a.oZ=null;a.rW=null;a.xi=null;a.bE=null;a.dh=null;a.dm=null;a.wy=null;a.qW=null;a.yn=0.0;a.nd=null;a.l2=null;}
function NQ(a,b){var c=new KV();AJw(c,a,b);return c;}
function A4L(a,b){var c=new KV();WN(c,a,b);return c;}
function AJw(a,b,c){WN(a,b,c.cI);}
function WN(a,b,c){var d;Gb(a);d=new Qo;d.tU=a;a.rW=d;d=new Qn;d.u8=a;a.xi=d;a.yn=10.0;a.bE=b;a.oZ=c;b.ek=a;}
function AV$(a){var b;b=a.bE;b.ek=null;a.bE=Cx(b,null);}
function HY(a,b,c){var d;a.l2=c;a.nd=b;d=a.dh;if(d!==null)Hw(d,b,c);b=a.dm;if(b!==null)Hw(b,a.nd,a.l2);}
function AOI(a,b,c,d){GZ(a,b,c,d);GZ(a.bE,b,c,d);if(d!==0.0)MG(a);}
function JG(a,b,c){Lh(a,b);Me(a,c);}
function MG(a){AEZ(a.bE);if(Zh(a))X1(a);else a.dm=null;if(Qt(a))OR(a);else a.dh=null;}
function Qt(a){var b;b=a.j.a;return b>0&&a.bE.cP.a>b?1:0;}
function Zh(a){var b;b=a.j.b;return b>0&&a.bE.cP.b>b?1:0;}
function X1(a){var b,c,d,e,f,g;b=a.dm;if(b===null)b=Jk();a.dm=b;OE(a,b);c=a.dm;b=a.bE;d=b.V.b;e=a.g;f=e.b;g=a.j;Tl(c,d,f,g.b,b.cP.b,e.a+g.a|0,Ni(a));}
function OR(a){var b,c,d,e,f,g;b=a.dh;if(b===null)b=Jk();a.dh=b;OE(a,b);c=a.dh;b=a.bE;d=b.V.a;e=a.g;f=e.a;g=a.j;JC(c,d,f,g.a,b.cP.a,e.b+g.b|0,Ni(a));}
function Ni(a){return EN(a,a.yn);}
function OE(a,b){Hw(b,a.nd,a.l2);}
function AVe(a,b){var c;a.bE.dB(b);if(!(a.dh===null&&a.dm===null)){B2(b,1);c=a.dh;if(c!==null)G0(c,b);c=a.dm;if(c!==null)G0(c,b);c=a.dh;if(c!==null)G$(c,b);c=a.dm;if(c!==null)G$(c,b);B2(b,0);}}
function Xr(a,b){var c,d;a:{b:{c=a.dh;if(!(c!==null&&Iw(c,b))){c=a.dm;if(c===null)break b;if(!Iw(c,b))break b;}d=1;break a;}d=0;}return d;}
function AWN(a,b,c,d){return !Xr(a,b.i)&&!a.bE.b6(b,c,d)?0:1;}
function Lh(a,b){var c;if(AIx(a,b)){c=a.wy;if(c!==null)c.l();}}
function Me(a,b){var c;if(ZI(a,b)){c=a.qW;if(c!==null)c.l();}}
function AIx(a,b){var c;c=AHb(a.bE,b);if(Zh(a))X1(a);return c;}
function ZI(a,b){var c;c=AI2(a.bE,b);if(Qt(a))OR(a);return c;}
function AWb(a,b,c){var d,e;d=a.dh;if(d!==null){e=F0(d,b.i,a.rW,1);if(e!==null)return e;}d=a.dm;if(d!==null){e=F0(d,b.i,a.xi,0);if(e!==null)return e;}return a.bE.bQ(b,c);}
function ASN(a,b,c){return Xr(a,b.i)?1:0;}
function ASl(a,b){var c,d,e;c=a.dh;d=c!==null&&Ga(c,b.i,a.oZ)?1:0;c=a.dm;e=c!==null&&Ga(c,b.i,a.oZ)?1:0;return !d&&!e&&!a.bE.bz(b)?0:1;}
function ANP(a,b,c,d){var e,f;if(!B$(a,b.i))return 0;e=Cd(d*0.25,a.bO);f=Cd(c*0.25,a.bO);if(b.bJ){f=f+e|0;e=0;}if(a.dh!==null&&e)Me(a,a.bE.V.a+e|0);if(a.dm!==null&&f)Lh(a,a.bE.V.b+f|0);return 1;}
function AYt(a){var b,c;b=Ni(a);c=a.bE.kN();c.b=Bd(c.b,b);c.a=Bd(c.a,b);return c;}
function AHq(){var a=this;B.call(a);a.j$=null;a.mh=null;a.gh=null;a.CO=null;}
function AG0(a){var b=new AHq();AVL(b,a);return b;}
function AVL(a,b){var c,d,e;c=null;d=null;e=null;a.j$=c;a.mh=d;a.gh=b;a.CO=e;}
function Yk(a){var b,c;b=a.gh;if(b===null)return C(21);c=AEW(b,C(364));return c==(-1)?a.gh:Ed(a.gh,c+1|0);}
function AMp(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BV(a.j$,c.j$)&&BV(a.mh,c.mh)&&BV(a.gh,c.gh)?1:0;}return 0;}
function L_(){CR.call(this);this.dO=null;}
function ASJ(a){var b,c,d;b=a.dO.data;c=b.length;d=0;while(d<c){b[d].dd();d=d+1|0;}}
function AR_(a,b){var c,d,e;c=a.dO.data;d=c.length;e=0;while(e<d){c[e].dB(b);e=e+1|0;}}
function AKk(a,b){var c,d,e;c=0;d=a.dO.data.length;e=0;while(e<d){c=c|0;e=e+1|0;}return c;}
function AMW(a,b,c,d){var e,f,g;GZ(a,b,c,d);e=Cd(20.0,a.bO);f=a.j.b;g=(f/2|0)-(e/2|0)|0;e=f-g|0;b=ARI(a.g);c=BH(g,a.j.a);a.dO.data[0].eJ(b,c,a.bO);b.b=a.g.b+e|0;a.dO.data[2].eJ(b,c,a.bO);b.b=a.g.b+g|0;c.b=e-g|0;a.dO.data[1].eJ(b,c,a.bO);}
function AXp(a,b,c,d){return 0;}
function AWQ(a,b,c){var d,e,f,g,h;d=a.dO.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B$(g,b.i)){h=g.bQ(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function AXE(a,b,c){var d,e,f,g,h;d=0;e=a.dO.data;f=e.length;g=0;while(g<f){h=e[g];if(B$(h,b.i))d=d|h.cH(b,c);g=g+1|0;}return d;}
function AYa(a,b){var c,d,e,f,g;c=0;d=a.dO.data;e=d.length;f=0;while(f<e){g=d[f];if(B$(g,b.i))c=c|g.bz(b);f=f+1|0;}return c;}
function ANN(a,b,c,d){var e,f,g,h,i;e=0;f=a.dO.data;g=f.length;h=0;while(h<g){i=f[h];if(B$(i,b.i))e=e|i.c4(b,c,d);h=h+1|0;}return e;}
function ABt(){var a=this;L_.call(a);a.lD=null;a.xr=null;a.wW=null;a.pP=null;}
function YR(){B.call(this);this.AM=null;}
function AUf(a,b){return 1;}
function YQ(){B.call(this);this.vD=null;}
function ATe(a,b){var c,d,e,f;c=a.vD;if(b.bl!=32)d=0;else{b=c.kP;e=I(MR,[K9(1,3,4,5,1),K9(5,6,10,2,2),K9(12,2,13,3,3),K9(15,3,17,2,4)]);f=A1j(Q(FU,0),Q(FU,0),e);b.pP.hC=f;b.lD.ev=f;d=1;}return d;}
function Sm(){B.call(this);this.C0=null;}
function AQy(a,b){return 0;}
var Dg=G(0);
var A3_=null;var A4M=null;var A4b=null;var A4a=null;var A4d=null;var A4c=null;var A4f=null;var A4e=null;var A4h=null;var A4g=null;var A4i=null;function ANV(){ANV=Bq(Dg);AWt();}
function AWt(){A3_=CI(206);A4M=S(C(365));A4b=S(C(366));A4a=S(C(275));A4d=S(C(367));A4c=S(C(368));A4f=S(C(369));A4e=S(C(370));A4h=ED(107,106,107,128);A4g=ED(30,31,34,0);A4i=S(C(277));}
function Cp(){CC.call(this);this.jv=null;}
var A4N=null;var A4O=null;var A4P=null;var A4Q=null;var A4R=null;var A3S=null;var A4S=null;var A4T=null;var A4U=null;var A4V=null;var A4W=null;var A4X=null;var A4Y=null;var A4Z=null;var A40=null;var A4j=null;function X$(){X$=Bq(Cp);AQY();}
function D2(a,b,c){var d=new Cp();Uq(d,a,b,c);return d;}
function A0t(a,b,c,d){var e=new Cp();AAB(e,a,b,c,d);return e;}
function Uq(a,b,c,d){X$();Dy(a,b,c);a.jv=IG(d,null);}
function AAB(a,b,c,d,e){X$();Dy(a,b,c);a.jv=IG(d,e);}
function AQY(){var b,c;b=new Cp;ANV();Uq(b,C(371),0,A4M);A4N=b;A4O=D2(C(372),1,S(C(373)));A4P=D2(C(374),2,S(C(375)));A4Q=D2(C(376),3,S(C(377)));A4R=D2(C(378),4,A4M);A3S=D2(C(379),5,S(C(380)));A4S=D2(C(381),6,S(C(382)));A4T=D2(C(383),7,S(C(384)));A4U=D2(C(385),8,S(C(386)));c=new Cp;Fs();AAB(c,C(387),9,A3H,S(C(369)));A4V=c;A4W=A0t(C(388),10,A3H,S(C(278)));A4X=D2(C(389),11,S(C(390)));A4Y=D2(C(391),12,S(C(392)));A4Z=D2(C(393),13,A4M);b=D2(C(394),14,S(C(395)));A40=b;A4j=I(Cp,[A4N,A4O,A4P,A4Q,A4R,A3S,A4S,A4T,A4U,
A4V,A4W,A4X,A4Y,A4Z,b]);}
function JH(){var a=this;B.call(a);a.hW=null;a.l$=null;}
function IG(a,b){var c=new JH();AR9(c,a,b);return c;}
function AR9(a,b,c){a.hW=b;a.l$=c;}
function IV(){var a=this;B.call(a);a.kd=null;a.ju=null;a.zc=null;a.C5=null;a.mA=null;a.mr=null;a.lZ=null;}
function A41(a,b,c,d,e,f,g){var h=new IV();Mx(h,a,b,c,d,e,f,g);return h;}
function Mx(a,b,c,d,e,f,g,h){a.zc=b;a.C5=c;a.ju=d;a.mA=e;a.kd=f;a.mr=g;a.lZ=h;}
function AFJ(){var a=this;B.call(a);a.oi=null;a.uk=0;}
function ACl(a,b){var c=new AFJ();AV0(c,a,b);return c;}
function AV0(a,b,c){var d;d=new BZ;a.oi=d;a.uk=b;d.bD=c;}
function Rw(a,b){return Cd(a.uk,b);}
var DO=G(0);
var A4n=null;var A4o=null;var A4k=null;var A4l=null;var A4m=null;var A4F=null;var A4G=null;var A4p=null;var A4q=null;function AJU(){AJU=Bq(DO);ATT();}
function ATT(){A4n=S(C(368));A4o=S(C(396));A4k=S(C(280));A4l=S(C(382));A4m=S(C(365));A4F=S(C(368));A4G=S(C(397));A4p=S(C(398));A4q=Dr(43,45,48);}
var Q7=G(0);
var Rq=G();
function AOr(a,b,c){var d,e;d=b;e=c;b=new L;N(b);U(H(U(H(b,C(399)),d),C(400)),e);CO(M(b));return d+e|0;}
var Q8=G(0);
var Ro=G();
function API(a,b,c){var d,e;d=b;e=c;b=new L;N(b);E$(H(E$(H(b,C(401)),d),C(400)),e);CO(M(b));return d+e;}
var ADT=G();
var ACI=G(0);
function Z3(){B.call(this);this.oR=null;}
var A4K=null;function L7(){var a=new Z3();ADG(a);return a;}
function ADG(a){a.oR=BM();}
function DK(a,b,c){Q0(a,CX(b,c));}
function CX(b,c){return Pq(c,b);}
function Fm(a,b,c){I3(a,b,c,null);}
function I3(a,b,c,d){Q0(a,A0Q(null,b,c,d));}
function Q0(a,b){BF(a.oR,b);}
function G7(a){return ER(Iu(a.oR,A4K));}
function ACM(){A4K=Q(Cn,0);}
var DW=G(0);
var A4z=null;var A4A=null;var A4w=null;var A4x=null;var A4y=null;var A4D=null;var A4E=null;var A4B=null;var A4C=null;function AR4(){AR4=Bq(DW);ATk();}
function ATk(){A4z=S(C(402));A4A=S(C(403));A4w=S(C(310));A4x=S(C(404));A4y=S(C(358));A4D=S(C(402));A4E=S(C(403));A4B=ED(118,121,122,128);A4C=Dr(63,66,68);}
var Hh=G(0);
var QD=G();
function AU3(a,b,c,d){var e;b=Bz();d=CE(d);e=new L;N(e);H(H(U(H(e,C(405)),c),C(342)),d);Br(b,M(e));}
var QF=G();
function TF(){B.call(this);this.rL=null;}
function AUN(a,b,c,d){return V5(a.rL,b,c,d);}
function Uo(){B.call(this);this.i8=null;}
function AY0(a,b){return LX(a.i8,b);}
function AUi(a,b,c,d){return KI(a.i8,b,c,d);}
function AYH(a,b,c){return Ns(a.i8,b,c);}
function ARW(a,b,c){return Dk(a.i8);}
function XU(){B.call(this);this.v8=null;}
function AS1(a,b){var c;c=a.v8.ks;c.eB=FK(b,Zc(c));}
function P$(){B.call(this);this.Ct=null;}
function ANt(a,b){var c,d,e,f;c=b.data;b=Bz();d=CE(c[0]);e=new L;N(e);H(H(e,C(301)),d);Br(b,M(e));b=Bz();f=c[1];d=new L;N(d);H(H(d,C(406)),f);Br(b,M(d));}
function P8(){B.call(this);this.Bl=null;}
function AK6(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bz();e=CE(c[0]);f=new L;N(f);H(H(f,C(301)),e);Br(d,M(f));g=EQ(K3(b,1));b=Bz();d=CE(c[1]);if(g===null)c=C(22);else{c=new L;N(c);B0(c,C(35));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)B0(c,C(36));BL(c,i[h]);h=h+1|0;}B0(c,C(37));c=M(c);}e=new L;N(e);H(H(H(H(e,C(407)),d),C(408)),c);Br(b,M(e));}
function P5(){B.call(this);this.z$=null;}
function AJN(a,b){AAG(a.z$,b);}
function P3(){B.call(this);this.BI=null;}
function AYF(a,b){var c,d,e,f,g;c=b.data;d=Bz();e=CE(c[0]);f=new L;N(f);H(H(f,C(301)),e);Br(d,M(f));g=CL(K3(b,1));b=Bz();d=CE(c[1]);c=AGH(g);e=new L;N(e);H(H(H(H(e,C(409)),d),C(410)),c);Br(b,M(e));}
var AIS=G();
function Zi(){B.call(this);this.uR=null;}
function APK(a,b){var c;c=a.uR.kG;c.e6=FK(b,UI(c));}
function X9(){B.call(this);this.Cu=null;}
function AO$(a,b){return 0;}
function YH(){var a=this;CR.call(a);a.fS=null;a.hT=null;a.hO=null;a.ec=null;a.kW=0.0;a.gE=0;a.hU=0;a.dI=null;a.lX=null;}
function ABd(a){var b;Yh(a);b=CG(a.fS,a.kW);return EU(a.ec)+(b*2|0)|0;}
function Lu(a){var b;b=a.j;return b.b&&b.a?0:1;}
function ZF(a){var b,c;a:{if(a.hO!==null){b=a.hT;if(b!==null&&!Fe(b)){c=0;break a;}}c=1;}return c;}
function RG(a,b){a.j.a=b;}
function RY(a,b,c,d,e){var f,g;f=a.fS.c9;V(f,d,a.j.a);g=a.g;Bu(b,g.b+c|0,g.a,f,e);}
function Yh(a){if(a.ec===null)a.ec=HR(a.fS,a.hO);}
function AIf(){G8.call(this);this.ft=null;}
function AK3(a){var b=new AIf();ANu(b,a);return b;}
function ANu(a,b){a.ft=b;}
function AZa(a,b){return a.ft.data[b].iz;}
function HQ(){var a=this;B.call(a);a.iz=null;a.tx=null;a.p4=null;a.z8=null;a.oe=0;a.jk=0;}
function A42(a,b){var c=new HQ();Wc(c,a,b);return c;}
function Wc(a,b,c){a.iz=QH(b);a.oe=c;a.jk=0;}
function FC(){var a=this;HQ.call(a);a.yq=null;a.hh=null;}
function M7(a){return a.jk!=2?0:1;}
function ABj(a){var b,c,d,e;b=1;if(M7(a)){c=a.hh.data;d=c.length;e=0;while(e<d){b=b+ABj(c[e])|0;e=e+1|0;}}return b;}
function NP(a){var b,c,d,e;b=1;c=a.hh.data;d=c.length;e=0;while(e<d){b=b+NP(c[e])|0;e=e+1|0;}return b;}
function SG(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(M7(a)){d=a.hh.data;c=d.length;f=0;while(f<c){e=SG(d[f],b,e);f=f+1|0;}}return e;}
function Wy(a){a.jk=2;}
function RO(a){a.jk=1;}
function PE(){B.call(this);this.qN=null;}
function AS_(a){var b,c,d;b=a.qN;c=Bz();d=(IY(b.iz,0)).v;b=new L;N(b);H(H(b,C(411)),d);Br(c,M(b));}
var ACy=G(0);
function AHh(b,c){var d,e,f,g,h,i,j,k,l,m;d=Q(BC,8);e=DE(8);f=B1(16);g=0;h=0;i=0;while(true){j=BG(i,b);if(j>0)break;k=j>=0?10:(c.bj(CT(i))).mm;if(k==10){d=AHj(Ev(f,0,g),d,h);e=X2(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Kl(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AHj(Ev(f,0,g),d,h);j=i+1|0;if(j<b&&(c.bj(CT(j))).mm==10){e=X2(1,e,h);i=j;}else e=X2(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new TN;d=ADW(d,h);if(m.length!=h)e=M5(e,h);c.mb=d;c.AU=e;return c;}
function AHN(){var a=this;KV.call(a);a.wD=null;a.iJ=null;}
function ASm(a){var b=new AHN();ATg(b,a);return b;}
function ATg(a,b){var c;WN(a,ASS(),b.cI);b=ASS();a.wD=b;c=new N0;c.tJ=15.0;c.mI=a;c.gc=b;a.iJ=c;c=a.bE;if(c!==b){c.ek=null;a.bE=Cx(c,b);b.ek=a;GZ(b,a.g,a.j,a.bO);if(a.bO!==0.0)MG(a);}}
function APh(a,b,c){if(b===0.0)Ma(a.wD,700,1600);}
function AA0(a,b){b=b.bp;HY(a,b.il,b.it);}
function Ja(){var a=this;B.call(a);a.v6=null;a.qG=null;a.rZ=null;a.xg=null;a.tD=null;a.jG=null;}
function A43(a,b,c,d,e,f){var g=new Ja();NA(g,a,b,c,d,e,f);return g;}
function NA(a,b,c,d,e,f,g){a.v6=b;a.qG=c;a.rZ=d;a.xg=e;a.tD=f;a.jG=g;}
function JB(){var a=this;B.call(a);a.sg=null;a.nV=null;a.xa=null;}
function A44(a,b,c){var d=new JB();Lf(d,a,b,c);return d;}
function Lf(a,b,c,d){a.sg=b;a.nV=c;a.xa=d;}
function AAc(a,b){return !b?a.nV:a.xa;}
function ADs(){var a=this;B.call(a);a.nh=null;a.vK=null;a.yo=null;}
function AIz(a,b,c){var d=new ADs();AXw(d,a,b,c);return d;}
function AXw(a,b,c,d){a.nh=b;a.vK=c;a.yo=d;}
function Cq(){CC.call(this);this.od=null;}
var A45=null;var A46=null;var A47=null;var A48=null;var A49=null;var A4$=null;var A4_=null;var A5a=null;var A5b=null;var A5c=null;var A5d=null;var A5e=null;var A5f=null;var A5g=null;var A5h=null;var A3$=null;function AEg(){AEg=Bq(Cq);APV();}
function D1(a,b,c){var d=new Cq();WD(d,a,b,c);return d;}
function AV3(a,b,c,d){var e=new Cq();AHR(e,a,b,c,d);return e;}
function WD(a,b,c,d){AEg();Dy(a,b,c);a.od=IG(d,null);}
function AHR(a,b,c,d,e){AEg();Dy(a,b,c);a.od=IG(d,e);}
function APV(){var b;b=new Cq;Fs();WD(b,C(371),0,A3H);A45=b;A46=D1(C(372),1,S(C(412)));A47=D1(C(374),2,S(C(413)));A48=D1(C(376),3,S(C(414)));A49=D1(C(378),4,S(C(412)));A4$=D1(C(379),5,Dr(188,63,60));A4_=D1(C(381),6,S(C(415)));A5a=D1(C(383),7,S(C(416)));A5b=D1(C(385),8,S(C(417)));A5c=AV3(C(387),9,A3H,Dr(52,65,52));A5d=AV3(C(388),10,S(C(418)),S(C(419)));A5e=D1(C(389),11,S(C(420)));A5f=D1(C(391),12,S(C(421)));A5g=D1(C(393),13,A3H);b=D1(C(394),14,S(C(395)));A5h=b;A3$=I(Cq,[A45,A46,A47,A48,A49,A4$,A4_,A5a,A5b,A5c,
A5d,A5e,A5f,A5g,b]);}
var AIm=G();
function Ji(b,c){var d,e,f;if(c<=0)return C(21);d=B1(c);e=d.data;e[0]=AG4(F7(b,52));f=1;while(f<c){e[f]=AG4(F7(b,62));f=f+1|0;}return Gr(d);}
function AG4(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AEH=G();
function AIQ(){var a=this;B.call(a);a.K4=null;a.Ic=null;a.JD=0;a.I4=0;}
function Qo(){B.call(this);this.tU=null;}
function AJ7(a,b){var c;c=a.tU;Me(c,FK(b,c.bE.cP.a-c.j.a|0));}
function Qn(){B.call(this);this.u8=null;}
function AKC(a,b){var c;c=a.u8;Lh(c,FK(b,c.bE.cP.b-c.j.b|0));}
function PI(){B.call(this);this.vW=null;}
function AKn(a,b){return PH(P(a.vW,b.bs));}
function TN(){var a=this;B.call(a);a.mb=null;a.AU=null;}
function N0(){var a=this;B.call(a);a.mI=null;a.gc=null;a.tJ=0.0;}
function AXe(a){return a.gc.V.a/KO(a)|0;}
function AUr(a){return HD(a.gc.cP.a,KO(a));}
function AY7(a,b){var c;b=Bb(b,KO(a));c=a.gc;return (b+c.g.a|0)-c.V.a|0;}
function AQr(a){return a.gc.g;}
function ATp(a){return a.gc.j;}
function AOA(a,b,c){var d;d=a.mI;d.wy=b;d.qW=c;}
function AOo(a,b){return ZI(a.mI,b);}
function KO(a){return EN(a.gc,a.tJ);}
var C1=G();
var AGa=G(C1);
var AG1=G(C1);
var ADX=G(C1);
var AEc=G(C1);
var AHu=G(C1);
function AAn(){B.call(this);this.sC=null;}
function AQa(a){var b;b=a.sC;Br(Bz(),b);}
var GR=G(CC);
var A5i=null;var A3G=null;var A5j=null;function ARX(){ARX=Bq(GR);ANK();}
function AZh(a,b){var c=new GR();ADz(c,a,b);return c;}
function ADz(a,b,c){ARX();Dy(a,b,c);}
function ANK(){var b;A5i=AZh(C(422),0);b=AZh(C(423),1);A3G=b;A5j=I(GR,[A5i,b]);}
var ADi=G();
function Cd(b,c){return CU(b*c);}
function FU(){var a=this;B.call(a);a.gL=0;a.ny=null;}
var AEx=G();
function Xh(){var a=this;B.call(a);a.rj=null;a.wh=null;a.xl=null;}
function Qk(){B.call(this);this.kc=null;}
function AZv(a,b){var c,d,e,f,g;c=a.kc;d=c.lB;if(d!==null){e=b.i;f=e.b-d.b|0;g=e.a-d.a|0;e=c.kt;e.b=ES(0,e.b+f|0,c.hB.b-c.iX.b|0);c=a.kc;d=c.kt;d.a=ES(0,d.a+g|0,c.hB.a-c.iX.a|0);}a.kc.lB=b.i;return 1;}
var AEE=G();
function MD(){return "clipboard" in $rt_globals.navigator?1:0;}
function Pb(){B.call(this);this.pa=null;}
function AVC(a,b){return DF(a.pa,null);}
function Y_(){B.call(this);this.kB=null;}
function AYT(a){return a.kB;}
var AF7=G(0);
var My=G(0);
function SS(){B.call(this);this.wF=null;}
function ALS(a,b){return Ll(a.wF,b);}
function Pt(){B.call(this);this.xq=null;}
function AXf(a,b){var c,d;c=a.xq;d=b.bs;return PH(c.charCodeAt(d)&65535);}
var AGJ=G();
function AD$(b,c,d,e,f,g){g.b=c.b;g.a=f;Bu(b,d.b,d.a,g,e);Bu(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bu(b,d.b,d.a+f|0,g,e);Bu(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AGj(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bu(b,j,k,i,h);Bu(b,j,k,i,h);Bu(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bu(b,l,j,i,h);Bu(b,l,j,i,h);Bu(b,l+g|0,j+g|0,i,h);}
function Sb(){var a=this;B.call(a);a.cJ=null;a.oU=null;a.fj=null;a.d6=0;a.cu=0;a.hJ=null;a.i7=null;a.hr=0;a.p0=0;}
function Pm(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.d6;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}ET(c);j=d+(-1)|0;b=Db(d);d=Bb(j,a.cu)%a.fj.a|0;GK(a,c,b,a.hr,g);II(a.cJ,c,0,d);if(!(j%a.d6|0))break;d=j;}}else{ET(b);k=a.d6-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;GK(a,b,Db(j),Bb(a.cu,k)+a.hr|0,g);k=k+(-1)|0;j=h;}CJ(a.cJ,b);j=Bd(i,e);}return j;}k=a.d6;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bc(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}ET(c);b=Db((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cu)%a.fj.a|0;GK(a,c,b,a.hr,g);II(a.cJ,c,0,d);if(!(j%a.d6|0))break;d=j;}}else{ET(b);d=0;while(d<a.d6){h=h+1|0;GK(a,b,Db((h>e?h-f|0:h)+f|0),Bb(a.cu,d)+a.hr|0,g);d=d+1|0;}CJ(a.cJ,b);j=Bc(i,e);}return j;}
function AB4(b,c,d,e){c=c.data;return d<c.length&&c[d]?I8(b.dU,b,c[d]):e.jo;}
function K8(a,b,c,d,e,f){DU(b,a.oU.b+d.b|0,c+d.a|0,a.hJ,a.i7,a.cJ,e,f,a.p0);}
function GK(a,b,c,d,e){BS(b,c,a.fj.b-20.0*e,d);}
var ACE=G();
function GF(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function ADq(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function Ym(){var a=this;B.call(a);a.yD=null;a.yE=null;a.h2=null;}
function A1j(a,b,c){var d=new Ym();AFS(d,a,b,c);return d;}
function AFS(a,b,c,d){a.yD=b;a.yE=c;a.h2=d;}
function GE(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.h2.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bc(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.hn:i.ho;k=!c?i.oG:i.oH;l=BG(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function MR(){var a=this;B.call(a);a.ho=0;a.oH=0;a.hn=0;a.oG=0;a.l8=0;}
function K9(a,b,c,d,e){var f=new MR();AV5(f,a,b,c,d,e);return f;}
function AV5(a,b,c,d,e,f){a.ho=b;a.oH=c;a.hn=d;a.oG=e;a.l8=f;}
function Z4(){B.call(this);this.wk=null;}
function ARv(a,b){var c,d;c=a.wk;ABu(c,E_(c,b.i));b=Bj(c);d=c.d;Mn(b,d.w,d.z);HA(c);}
var Vh=G(0);
var A3P=null;function AGw(){A3P=new Tc;}
function Yg(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function ALT(a,b){var c,d,e;c=a.tF;d=a.tG;c=c.fp.ef.u;e=c.b;b=b.i;c.b=e+(b.b-d.b|0)|0;c.a=c.a+(b.a-d.a|0)|0;Co(d,b);}
var Fp=G(0);
function Pn(){var a=this;B.call(a);a.i6=0;a.oK=0;a.kf=0;a.g2=0;a.hR=null;}
function B_(a){return a.i6>=a.kf?0:1;}
function Ca(a){var b,c;Rx(a);b=a.i6;a.g2=b;c=a.hR;a.i6=b+1|0;return c.nK(b);}
function TH(a){var b,c,d;if(a.g2<0){b=new CY;X(b);K(b);}Rx(a);a.hR.oP(a.g2);a.oK=a.hR.b0;c=a.g2;d=a.i6;if(c<d)a.i6=d-1|0;a.kf=a.kf-1|0;a.g2=(-1);}
function Rx(a){var b;if(a.oK>=a.hR.b0)return;b=new HF;X(b);K(b);}
function SZ(){var a=this;B.call(a);a.zu=null;a.zv=null;}
function Vm(a){var b,c;b=a.zu;c=a.zv;if(!M7(b))Wy(b);else RO(b);X7(c.xK);}
var AFv=G(0);
function AEp(b,c,d,e,f,g){f=f.data;f[H1(0,0)]=Ht(g,b,c,d,0);f[H1(0,1)]=Ht(g,b,c,d,2);f[H1(1,0)]=Ht(g,b,c,e,0);f[H1(1,1)]=Ht(g,b,c,e,2);return f[H1(0,0)];}
var Gm=G(Jf);
var AAO=G(Fc);
function Yw(){B.call(this);this.rx=null;}
function AXN(a,b){var c,d;c=a.rx;d=c.d5+1|0;c.d5=d;c=new L;N(c);H(H(U(c,d),C(424)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function ABB(){B.call(this);this.rT=null;}
function AVs(a){var b,c;b=a.rT;c=new L;N(c);H(H(H(c,C(425)),b),C(426));$rt_globals.console.info($rt_ustr(M(c)));}
function Zk(){var a=this;B.call(a);a.bo=0;a.by=0;}
function DS(a,b){var c=new Zk();AFF(c,a,b);return c;}
function AFF(a,b,c){a.bo=b;a.by=c;}
function AJP(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.bo==c.bo&&a.by==c.by?1:0;}return 0;}
function AUV(a){var b,c,d,e;b=Q(B,2).data;b[0]=CT(a.bo);b[1]=CT(a.by);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bs)|0;d=d+1|0;}return c;}
function AUo(a,b){var c;b=b;c=BG(a.bo,b.bo);if(!c)c=BG(a.by,b.by);return c;}
var AA3=G(D$);
var A5k=null;function PA(b){var c;c=new L;N(c);return M(E$(c,b));}
function AGy(){A5k=F($rt_floatcls());}
var F8=G();
var A5l=null;var A5m=null;var A2M=null;var A2L=null;var A2K=null;function AFl(){A5l=DD([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A5m=ADA([Bp(1),Bp(10),Bp(100),Bp(1000),Bp(10000),Bp(100000),Bp(1000000),Bp(10000000),Bp(100000000),Bp(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A2M=ADA([Bp(1),Bp(10),Bp(100),Bp(10000),Bp(100000000),
D(1874919424, 2328306)]);A2L=new W4;A2K=new Yq;}
var Is=G();
var A5n=0;var A5o=null;var A5p=null;function AF1(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.q4=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.mJ=0;c.mo=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Io(C4(Bp(d),Bp(8388608)),Fr)){d=d<<1;f=f+(-1)|0;}}g=AF_(A5p,f);if(g<0)g= -g|0;h=A5p.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Il(d,A5o.data[e],i);if(j<A5n){while($rt_ucmp(j,A5n)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=A5p.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=Il(d,
A5o.data[e],i);}e=d<<1;d=e+1|0;h=A5o.data;f=g+1|0;k=h[f];l=i-1|0;m=Il(d,k,l);n=Il(e-1|0,A5o.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(Du(Bp(d),Bp(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.mJ=d;c.mo=g-50|0;}
function Il(b,c,d){return GM(Gg(Ce(C4(Bp(b),D(4294967295, 0)),C4(Bp(c),D(4294967295, 0))),32-d|0));}
function AEr(){A5n=$rt_udiv((-1),10);A5o=DD([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);A5p=DD([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function Yq(){var a=this;B.call(a);a.mJ=0;a.mo=0;a.q4=0;}
function Nb(){var a=this;B.call(a);a.A4=null;a.pn=0.0;a.Bv=0.0;a.fN=null;a.h1=null;a.of=null;a.fU=0;}
function AH2(a,b){var c;if(b!==null){a.h1=b;return a;}c=new BR;Bm(c,C(427));K(c);}
function AGf(a,b){var c;if(b!==null){a.of=b;return a;}c=new BR;Bm(c,C(427));K(c);}
function SR(a,b,c,d){var e,f,g,$$je;e=a.fU;if(!(e==2&&!d)&&e!=3){a.fU=d?2:1;while(true){try{f=AH4(a,b,c);}catch($$e){$$je=EA($$e);if($$je instanceof Bt){g=$$je;K(AMH(g));}else{throw $$e;}}if(HL(f))return f;if(I1(f)){if(d&&DY(b)){g=a.h1;HO();if(g===A3d)return Ej(Cf(b));if(Cf(c)<=J(a.fN))return A3g;E8(b,b.Z+Cf(b)|0);if(a.h1===A3e)K1(c,a.fN);}return f;}if(Ts(f)){g=a.h1;HO();if(g===A3d)return f;if(g===A3e){if(Cf(c)<J(a.fN))return A3g;K1(c,a.fN);}E8(b,b.Z+K6(f)|0);}else if(M_(f)){g=a.of;HO();if(g===A3d)break;if(g
===A3e){if(Cf(c)<J(a.fN))return A3g;K1(c,a.fN);}E8(b,b.Z+K6(f)|0);}}return f;}b=new CY;X(b);K(b);}
function ADF(a,b){var c,d,e,f;c=a.fU;if(c&&c!=3){b=new CY;X(b);K(b);}if(!Cf(b))return AIH(0);if(a.fU)a.fU=0;d=AIH(Bd(8,Cf(b)*a.pn|0));while(true){e=SR(a,b,d,0);if(I1(e))break;if(HL(e))d=Vu(a,d);if(!LI(e))continue;Yp(e);}b=SR(a,b,d,1);if(LI(b))Yp(b);while(true){f=a.fU;if(f!=3&&f!=2)break;a.fU=3;if(I1(A3h)){d.dS=d.Z;d.Z=0;d.iI=(-1);return d;}d=Vu(a,d);}b=new CY;X(b);K(b);}
function Vu(a,b){var c,d,e;c=b.ix;d=Kl(c,Bd(8,c.data.length*2|0));e=AFu(d,0,d.data.length);E8(e,b.Z);return e;}
var AE0=G(C1);
function P7(){B.call(this);this.qK=null;}
function AK_(a,b){Dw(a.qK,b);}
function SM(){B.call(this);this.zz=null;}
function AKN(a,b){var c,d;c=a.zz;d=c.d5+1|0;c.d5=d;c=b.iP;b=new L;N(b);H(H(U(b,d),C(428)),c);$rt_globals.console.info($rt_ustr(M(b)));}
var Tc=G();
function ASB(a,b){}
function S8(){var a=this;EY.call(a);a.bU=null;a.dW=null;a.hw=null;a.xu=null;a.ej=null;a.b$=null;a.eu=null;a.fm=null;a.dw=0;a.fi=0;a.zE=null;a.dR=0;a.eL=0;a.gz=0;a.fQ=0;a.fF=0;a.cN=0;a.ex=null;a.j3=null;a.tX=null;a.ie=null;}
function A1O(a,b){var c=new S8();AHY(c,a,b);return c;}
function AHY(a,b,c){Mt(a);a.dW=U6();a.hw=new Bh;a.b$=A5q;a.eu=Q(Jc,0);a.dR=0;a.eL=0;a.gz=0;a.fQ=0;a.fF=0;a.ex=AC6(0);a.ie=U2();a.bU=b;a.j3=c;a.zE=c;Ry(a);}
function Ry(a){a.dw=Cd(2.0,a.bU.ce);}
function AA2(a){return a.b$.data.length?0:1;}
function Pk(a,b){WR(a);a.b$=b;}
function WR(a){V(a.hw,0,0);}
function AB$(a,b,c){a.tX=b;a.xu=c;a.ej=null;a.ex=null;a.fi=0;WR(a);}
function AXL(a){a.fm=Cx(a.fm,null);V(a.hw,0,0);Fa(a.ie);a.ex=null;a.b$=A5q;a.eu=null;a.dR=0;a.eL=0;a.gz=0;Wn(a.dW);a.j3=null;}
function AM7(a,b,c){RU(a);Ry(a);a.ej=null;a.ex=null;a.fi=0;}
function AJX(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=Jx(a.bU);if(AA2(a))return;KP(a);Ck(c,a.ej);d=Ef(a);e=ACz(c,a.fi);f=Bc(HD(a.j.a,d),a.b$.data.length)+30|0;g=a.tX.zc;h=a.eu.data;d=h.length;if(d<f){a:{i=a.fQ;j=a.fF;k=a.b$;l=a.ex;m=a.ie;n=Q(Jc,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.gr!==c){Y4(l,q,m);o[f]=J$(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=J$(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=J$(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){Y4(l,c,m);h[f]=null;}f=f+1|0;}a.eu=n;Co(a.hw,J9(a.ex));Sf(a,a.bU.bY);}a.fQ=Bc((a.V.a+a.dw|0)/(Ef(a)+a.dw|0)|0,a.b$.data.length-1|0);a.fF=Bc((((a.V.a+a.dW.t.a|0)-1|0)+a.dw|0)/(Ef(a)+a.dw|0)|0,a.b$.data.length-1|0);if(!a.eu.data.length)return;ACo(a,e);YB(a,b);q=g.xg;c=a.g;Bu(b,c.b,c.a,a.j,q);c=a.dW.u;i=c.b;j=c.a;p=CG(a.bU,2.0);s=a.bU.c9;t=a.fQ;u=i+p|0;while(t<=a.fF){l=Q2(a,t);d=Bb(t,Ef(a));v
=t+1|0;w=d+Bb(v,a.dw)|0;x=u+a.dR|0;y=x+a.eL|0;z=a.cN!=t?0:1;m=!z?q:g.tD;ba=!z?g.v6:g.jG;bb=!z?g.qG:g.jG;bc=!z?g.rZ:g.jG;bd=(j+w|0)-a.V.a|0;DU(b,u,bd,l.id,l.uQ,a.fm,ba,m,a.bU.cs);DU(b,x,bd,l.ja,l.jC,a.fm,bb,m,a.bU.cs);DU(b,y,bd,l.ig,l.kX,a.fm,bc,m,a.bU.cs);d=l.id.b;be=u+d|0;V(s,Bd(0,a.dR-d|0),l.id.a);Bu(b,be,bd,s,m);d=u+a.dR|0;f=l.ja.b;bf=d+f|0;V(s,Bd(0,a.eL-f|0),l.ja.a);Bu(b,bf,bd,s,m);d=l.ig.b;bg=y+d|0;V(s,Bd(0,(((a.dW.t.b-d|0)-a.eL|0)-a.dR|0)-p|0),l.ig.a);Bu(b,bg,bd,s,m);bh=(i+a.j.b|0)-p|0;V(s,p,Ef(a)+a.dw
|0);Bu(b,bh,bd,s,q);t=v;}Gc(b);}
function ACo(a,b){var c,d,e,f,g,h;c=0;d=a.fQ;while(d<=a.fF){e=Q2(a,d);if(!(e!==null&&e.gr===a.b$.data[d])){f=a.eu.data;g=a.b$;e=a.ex;h=a.ie;c=d%f.length|0;if(f[c]!==null)Y4(e,f[c],h);f[c]=J$(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Co(a.hw,J9(a.ex));Sf(a,a.bU.bY);}}
function Sf(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.hw;c=DQ(b,c.b+150|0,c.a,a.bU.cs);Ck(c,a.ej);d=a.ej;e=d.db;f=e-(e+d.er)/16.0;g=a.eu.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.gr.j_;k=d.jC;BS(c,j,k.bm+a.fi,f+k.bq);j=d.gr.ku;d=d.kX;BS(c,j,d.bm+a.fi,f+d.bq);}i=i+1|0;}a:{d=a.ie;if(d.cW>0){h=d.cU;i=0;b:while(true){g=d.b_.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cM;l=j.c3;k=k;l=l.k6;BS(c,k,l.bm+a.fi,f+l.bq);j=j.cS;if(h!=d.cU)break b;}i=i+1|0;}b=new HF;X(b);K(b);}}if(a.fm===null)a.fm=CS(b);CJ(a.fm,
c);Er(c);}
function Q2(a,b){var c;c=a.eu.data;return c[b%c.length|0];}
function AUl(a,b){Co(a.dW.t,b);}
function AWc(a,b){Co(a.dW.u,b);}
function RU(a){var b,c,d,e,f,g,h,i,j;b=Jx(a.bU);if(AA2(a))return;KP(a);Ck(b,a.ej);c=ACz(b,a.fi);d=a.b$.data;e=d.length;f=0;while(f<e){g=d[f];h=Lo(c,g.gN);i=Lo(c,g.j_);j=Lo(c,g.ku);a.dR=Bd(a.dR,h);a.eL=Bd(a.eL,i);a.gz=Bd(a.gz,j);f=f+1|0;}}
function AQ5(a,b){var c;c=U5(a,b.i);if(c>=0)a.cN=c;return Fb(a.dW,a.g)&&Gs(a.bU.cI)?1:0;}
function AN1(a,b,c){if(!Fb(a.dW,b.i)&&!Li(a.dW)){b=a.zE;if(b!==null)b.l();}return null;}
function AUG(a,b,c,d){var e;if(d==1){e=U5(a,b.i);if(e>=0)YZ(a,a.b$.data[e]);}return 1;}
function YZ(a,b){a.j3.l();b.vN.l();}
function U5(a,b){var c,d,e;if(!a.eu.data.length)return (-1);c=Ef(a);d=(b.a-a.g.a|0)+a.V.a|0;e=a.dw;e=(d+e|0)/(c+e|0)|0;if(e<a.b$.data.length)return e;return (-1);}
function Ef(a){return EU(a.ej);}
function KP(a){var b;if(a.ej===null){b=HR(a.bU,a.xu);a.ej=b;a.ex=AC6(EU(b));a.fi=CU(a.ej.ou);}}
function AWz(a,b){var c,d,e;a:{switch(b.bl){case 13:YZ(a,a.b$.data[a.cN]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.cN=a.fQ;b=a.ek;c=a.V;JG(b,c.b,c.a-(a.j.a/2|0)|0);return 0;case 34:a.cN=a.fF;b=a.ek;c=a.V;JG(b,c.b,c.a+(a.j.a/2|0)|0);return 0;case 35:case 39:a.cN=a.b$.data.length-1|0;break a;case 36:case 37:a.cN=0;break a;case 38:d=a.cN;e=a.b$.data.length;a.cN=((d+e|0)
-1|0)%e|0;break a;case 40:a.cN=(a.cN+1|0)%a.b$.data.length|0;break a;default:break a;}a.j3.l();return 0;}e=a.cN;if(e<=a.fQ)JG(a.ek,a.V.b,Bb(e,Ef(a))+Bb(a.cN,a.dw)|0);else if(e>=a.fF)JG(a.ek,a.V.b,(Bb(e+1|0,Ef(a))+Bb(a.cN+2|0,a.dw)|0)-a.j.a|0);return 0;}
var OL=G();
function AOv(a){}
function QT(){var a=this;EY.call(a);a.lb=null;a.nR=null;a.sA=null;a.sx=0.0;}
function AYy(a){var b;b=Cd(20.0,a.bO);return BH(b,b);}
function AUu(a,b){var c,d,e,f;Ma(a,b.b*3|0,b.a*5|0);c=a.sA;d=c.pc;e=c.pe;c=c.pd;b=CE(b);f=new L;N(f);H(H(H(f,c),C(28)),b);E9(e,M(f),d.rS,3.0);}
function AY2(a,b){var c,d,e,f,g,h,i,j,k,l,m;AH$(a,b);YB(a,b);c=Cd(30.0,a.bO);d=a.V;e=d.b;f=Bb(e/c|0,c);g=d.a;h=Bb(g/c|0,c);d=a.j;i=Bb(((e+d.b|0)-1|0)/c|0,c);e=Bb(((g+d.a|0)-1|0)/c|0,c);d=a.nR;d.a=c;d.b=c;a.lb.bD=1.0;while(h<=e){g=a.g.a-a.V.a|0;j=f;while(j<=i){k=a.g.b-a.V.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AHS(l);m=m+1|0;}AAm(AG3(l),0.75,a.sx,a.lb);Bu(b,k+j|0,g+h|0,a.nR,a.lb);j=j+c|0;}h=h+c|0;}Gc(b);}
function AKr(a,b){}
function RH(){var a=this;B.call(a);a.pc=null;a.pe=null;a.pd=null;}
var UJ=G(D$);
var A5r=null;function Dh(b,c){return Long_udiv(b, c);}
function ACT(b,c){return Long_urem(b, c);}
function Du(b,c){return Long_ucompare(b, c);}
function AEO(){A5r=F($rt_longcls());}
function Q_(){B.call(this);this.p9=null;}
function AWk(a){SX(a.p9);}
function Rk(){B.call(this);this.uA=null;}
function AKM(a){Xs(a.uA);}
function WU(){B.call(this);this.oC=null;}
var A5q=null;function APT(){var a=new WU();ADK(a);return a;}
function ADK(a){a.oC=BM();}
function NI(a,b,c,d,e){var f;f=new Lk;f.vN=e;f.j_=c;f.ku=d;f.gN=b;BF(a.oC,f);}
function ZY(a){return Iu(a.oC,A5q);}
function VD(b){return b===null?C(21):Yk(b);}
function AH0(){A5q=Q(Lk,0);}
function Jc(){var a=this;B.call(a);a.uQ=null;a.jC=null;a.kX=null;a.id=null;a.ja=null;a.ig=null;a.gr=null;}
function J$(b,c,d,e){var f,g,h;f=new Jc;f.id=new Bh;f.ja=new Bh;f.ig=new Bh;f.gr=b;g=Cy(e,b.gN);if(g!==null)g.iN=g.iN+1|0;else{g=new Zb;h=JM(c,b.gN,d);g.iN=1;g.k6=h;Fv(e,b.gN,g);}e=g.k6;f.uQ=e;V(f.id,e.bd|0,e.bD|0);e=JM(c,b.j_,d);f.jC=e;V(f.ja,e.bd|0,e.bD|0);b=JM(c,b.ku,d);f.kX=b;V(f.ig,b.bd|0,b.bD|0);return f;}
function Y4(b,c,d){var e,f,g,h,i,j,k,l,m;e=c.gr.gN;f=Cy(d,e);g=f.iN-1|0;f.iN=g;if(!g){a:{h=0;i=null;if(e===null){j=d.b_.data[0];while(j!==null){if(j.cM===null)break a;e=j.cS;i=j;j=e;}}else{k=I5(e);l=d.b_.data;h=k&(l.length-1|0);j=l[h];while(j!==null&&!(j.kL==k&&ACY(e,j.cM))){m=j.cS;i=j;j=m;}}}if(j===null)j=null;else{if(i!==null)i.cS=j.cS;else d.b_.data[h]=j.cS;d.cU=d.cU+1|0;d.cW=d.cW-1|0;}IX(b,f.k6);}IX(b,c.jC);IX(b,c.kX);}
var No=G(0);
var A4s=null;var A4t=null;function AFT(){A4s=ED(40,40,40,200);A4t=ED(43,43,43,128);}
function W4(){var a=this;B.call(a);a.nr=Fr;a.l1=0;a.qE=0;}
function VG(){var a=this;B.call(a);a.q1=null;a.q0=null;a.qZ=null;}
function AK9(a){var b,c,d,e,f;b=a.q1;c=a.q0;d=a.qZ;e=Bz();f=new L;N(f);b=H(f,b);BL(b,9);b=H(b,c);BL(b,9);H(b,d);Br(e,M(f));}
function Lk(){var a=this;B.call(a);a.vN=null;a.j_=null;a.ku=null;a.gN=null;}
var CY=G(Bt);
var AGr=G(Fc);
function AMH(a){var b=new AGr();ARQ(b,a);return b;}
function ARQ(a,b){a.kT=1;a.lq=1;a.nb=b;}
function Xf(){B.call(this);this.po=null;}
function APv(a,b){var c,d,e,f;c=a.po;if(c.fy!=3){b=b.data;d=CL(b[0]);e=EQ(b[1]);N3(c.f,d,e,null,null);if(c.fo){b=EH(c);f=IK(EK(),c.wZ);c=new L;N(c);H(GU(H(H(c,b),C(429)),f),C(242));$rt_globals.console.info($rt_ustr(M(c)));}}}
var ADx=G(0);
function ACA(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(I5(b)){case -1655966961:if(!Bo(b,C(185)))break a;c=4;break a;case 3401:if(!Bo(b,C(239)))break a;c=3;break a;case 98723:if(!Bo(b,C(184)))break a;c=2;break a;case 3254818:if(!Bo(b,C(172)))break a;c=1;break a;case 3556653:if(!Bo(b,C(183)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;default:d=EL();e=new L;N(e);H(H(e,C(430)),b);Br(d,M(e));c=0;break b;}c=0;}return c;}
function AIw(){var a=this;B.call(a);a.lO=null;a.mf=null;a.eG=null;a.lW=null;a.bx=null;a.nv=null;a.nG=null;a.fD=null;a.gi=null;a.iE=null;}
function AYX(a,b){var c=new AIw();ARF(c,a,b);return c;}
function ARF(a,b,c){var d,e,f;a.eG=b;a.lW=c;a.bx=ALu();b=new L;N(b);a.iE=b;a.fD=U2();b=new VB;d=AHP(16);b.f9=0;b.dQ=Q(Iq,d);b.rY=0.75;YP(b);a.gi=b;b=new Y6;c=a.bx;e=a.iE;f=a.fD;b.dk=c;b.lA=e;b.t0=f;a.nv=b;b=new YK;b.cT=c;b.mX=e;b.sE=f;a.nG=b;}
function Pg(a){var b,c,d,e,f,g,h;a:{b=KN(a.eG.eR);c=b.hS;if(c.cW>0){d=c.cU;e=0;b:while(true){f=b.hS.b_.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cM;if(Kq(a.fD,g))Cy(a.fD,g);else{h=a.fD;Fv(h,g,CT(h.cW));}c=c.cS;if(d!=b.hS.cU)break b;}e=e+1|0;}b=new HF;X(b);K(b);}}b=a.eG.fE;if(b!==null)TY(a,b);Bs(a.bx,a.eG.eR.cW);b=U_(KN(a.eG.eR));while(FE(b)){c=Re(b);Ha(a.bx,a.iE.K,J(c));B0(a.iE,c);}b=U_(KN(a.eG.eR));while(FE(b)){c=Re(b);c=Cy(a.eG.eR,c);Bs(a.bx,c.m);c=B8(c);while(B_(c)){g=Ca(c);g=Cy(a.fD,g);Bs(a.bx,
g.bs);}}if(a.eG.fE===null)Bs(a.bx,(-1));else{Bs(a.bx,a.gi.f9);Vl(a,a.eG.fE);}if(a.lW===null)Bs(a.bx,(-1));else{Bs(a.bx,1);AC2(a.lW,a.bx,a.gi);}a.lO=SE(a.bx);a.mf=FV(M(a.iE));}
function TY(a,b){var c,d,e,f,g,h;if(Zj(a.gi,b))M$(a.gi,b);else{c=a.gi;d=CT(c.f9);if(b===null){e=S6(c);if(e===null){c.k5=c.k5+1|0;e=Zo(c,null,0,0);f=c.f9+1|0;c.f9=f;if(f>c.nA)O_(c);}}else{g=JT(b);h=g&(c.dQ.data.length-1|0);e=Pl(c,b,h,g);if(e===null){c.k5=c.k5+1|0;e=Zo(c,b,h,g);f=c.f9+1|0;c.f9=f;if(f>c.nA)O_(c);}}e.c3=d;}b=b.cz;if(b===null)return;c=new ABJ;c.sH=a;b.e8(c);}
function Vl(a,b){var c,d,e,f;c=(M$(a.gi,b)).bs;Bs(a.bx,c);if(b instanceof LQ)Bs(a.bx,(-1));else if(!(b instanceof Lm))Bs(a.bx,0);else Bs(a.bx,1);d=a.nv;Bs(d.dk,b.eo.cX());e=b.eo;f=new NG;f.ze=d;e.e8(f);d=a.nG;Bs(d.cT,b.e0.cX());e=b.e0;f=new Ya;f.w5=d;e.e8(f);d=b.jT;Bs(a.bx,d.cX());e=new Zv;e.xS=a;d.e8(e);d=b.gW;Bs(a.bx,d.cX());d=d.ca();while(d.cy()){e=d.b2();OT(a.nv,e.jY);Hx(a.nG,e.k1);Bs(a.bx,e.r8);}d=b.w1;if(d===null)Bs(a.bx,(-1));else Bs(a.bx,(Cy(a.fD,d)).bs);b=b.cz;Bs(a.bx,b.cX());d=new Q6;d.pL=a;b.e8(d);}
function UA(){B.call(this);this.yJ=null;}
function ASL(a,b){var c,d,e,f,g,h,i,j;c=a.yJ;if(c.fo){d=EH(c);e=new L;N(e);H(H(e,d),C(431));$rt_globals.console.info($rt_ustr(M(e)));}b=b.data;f=CL(b[0]);g=EQ(b[1]);h=(CL(b[2])).data[0];if(c.f.co==h){i=null;j=null;if(b.length>=5){i=CL(b[3]);j=EQ(b[4]);}N3(c.f,f,g,i,j);Fa(c.f.du);Fa(c.f.dM);KS(c.f);H9(c.f);M3(c);}}
function U9(){var a=this;B.call(a);a.B5=null;a.B4=null;a.B3=null;}
function US(){var a=this;B.call(a);a.y0=null;a.y1=null;a.yZ=0;}
function ANp(a,b){var c,d,e;c=a.y0;d=a.y1;e=a.yZ;d.h(ZL(c,(b.i.b+e|0)-c.eA.b|0));}
function UR(){var a=this;B.call(a);a.r6=null;a.r4=null;a.r5=0;}
function AXK(a,b){var c,d,e;c=a.r6;d=a.r4;e=a.r5;d.h(R2(c,(b.i.a+e|0)-c.eA.a|0));}
function Lr(){var a=this;Nb.call(a);a.rm=null;a.v_=null;}
function AH4(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.rm;e=0;f=0;g=a.v_;a:{b:{while(true){if((e+32|0)>f&&DY(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cf(b)+k|0;h=j.length;f=Bc(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BD;c=new L;N(c);U(H(U(H(c,C(432)),l),C(98)),h);Bm(b,M(c));K(b);}if(Cf(b)<m){b=new MU;X(b);K(b);}if(m<0){b=new BD;c=new L;N(c);H(U(H(c,C(99)),m),C(100));Bm(b,M(c));K(b);}n=b.Z;h=n+b.mZ|0;e=0;while(e<m){o=k+1|0;i=b.nX.data;l=h+1|0;j[k]=i[h];e=
e+1|0;k=o;h=l;}b.Z=n+m|0;e=0;}if(!DY(c)){p=!DY(b)&&e>=f?A3h:A3g;break a;}i=g.data;n=Cf(c);o=i.length;n=Bc(n,o);q=new X6;q.uW=b;q.xN=c;p=AIu(a,d,e,f,g,0,n,q);e=q.zp;if(p===null&&0==q.l5)p=A3h;k=q.l5;h=0;if(c.o0){b=new JL;X(b);K(b);}if(Cf(c)<k)break;if(h>o){b=new BD;c=new L;N(c);BL(U(H(U(H(c,C(101)),h),C(95)),o),41);Bm(b,M(c));K(b);}l=h+k|0;if(l>o){b=new BD;c=new L;N(c);U(H(U(H(c,C(103)),l),C(98)),o);Bm(b,M(c));K(b);}if(k<0){b=new BD;c=new L;N(c);H(U(H(c,C(99)),k),C(100));Bm(b,M(c));K(b);}o=c.Z;m=0;while(m<k)
{l=o+1|0;n=h+1|0;Vd(c,o,i[h]);m=m+1|0;o=l;h=n;}c.Z=c.Z+k|0;if(p!==null)break a;}b=new IC;X(b);K(b);}b=new BD;c=new L;N(c);BL(U(H(U(H(c,C(101)),k),C(95)),h),41);Bm(b,M(c));K(b);}E8(b,b.Z-(f-e|0)|0);return p;}
var Wq=G(Lr);
function AIu(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Ls(h,2))break a;i=A3h;break a;}c=k+1|0;n=j[k];if(!Ge(a,n)){c=c+(-2)|0;i=Ej(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Ls(h,3))break a;i=A3h;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!Ge(a,n))break b;if(!Ge(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Ng(p)){c=k+(-3)|0;i=Ej(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=Ej(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Ls(h,4))break a;i=A3h;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cf(h.xN)<2?0:1)break a;i=A3g;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!Ge(a,n))break c;if(!Ge(a,o))break c;if(!Ge(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=IS(r);m=c+1|0;j[c]=Jr(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=Ej(1);break a;}c=k+(-3)|0;i
=Ej(1);}h.zp=c;h.l5=f;return i;}
function Ge(a,b){return (b&192)!=128?0:1;}
function ABs(){B.call(this);this.p$=null;}
function AXC(a,b){var c,d;c=a.p$;d=c.d5+1|0;c.d5=d;c=new L;N(c);H(H(U(c,d),C(433)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function QY(){B.call(this);this.pr=null;}
function AKe(a){return a.pr.gP();}
function QX(){B.call(this);this.zf=null;}
function ANT(a){return a.zf.gP();}
function Vv(){B.call(this);this.v5=null;}
function ATF(a){return a.v5.gP();}
function V4(){B.call(this);this.Bo=null;}
function AXs(a){Br(Bz(),C(434));}
function U0(){B.call(this);this.us=null;}
function AYc(a,b){a.us.h(Fo(b));}
var AE3=G();
function Y8(){B.call(this);this.ys=null;}
function AOg(a,b){a.ys.l();}
var AFI=G();
var AGX=G();
function Pj(){B.call(this);this.xC=null;}
function AMr(a,b){var c,d,e,f;c=a.xC;d=CE(b);e=new L;N(e);H(H(e,C(435)),d);$rt_globals.console.info($rt_ustr(M(e)));d=new W9;d.Bz=c;d.ug=b;e=new Xa;e.CN=c;c=AHW(e);e=new YJ;e.q6=d;d=b.fT;if(d!==null)d.arrayBuffer().then(Bl(e,"f"),Bl(c,"f"));else{b=b.hM.getFile();f=new YL;f.xw=e;f.xx=c;b.then(Bl(f,"f"),Bl(c,"f"));}}
function Pi(){B.call(this);this.AA=null;}
function AVQ(a,b){var c;b=CE(b);c=new L;N(c);H(H(c,C(436)),b);$rt_globals.console.info($rt_ustr(M(c)));}
function Y5(){B.call(this);this.v4=null;}
function ALo(a){D0(a.v4);}
var HF=G(Bt);
function RQ(){var a=this;B.call(a);a.wT=0;a.wU=0;}
function AHB(){var a=this;B.call(a);a.h4=null;a.nD=0;a.fO=0;}
function ALu(){var a=new AHB();AYW(a);return a;}
function AYW(a){a.nD=0;a.h4=BJ(16);a.fO=0;}
function Ha(a,b,c){Bs(a,b);Bs(a,c);}
function Bs(a,b){var c,d;c=a.h4;d=c.data.length;if(d==a.fO)a.h4=JI(c,d*2|0);c=a.h4.data;d=a.fO;a.fO=d+1|0;c[d]=b;}
function SE(a){var b,c,d,e,f;b=a.nD;if(b&&a.fO!=b){c=EL();b=a.nD;d=a.fO;e=new L;N(e);H(U(H(U(H(e,C(437)),b),C(438)),d),C(439));Br(c,M(e));}f=a.h4;b=f.data.length;d=a.fO;if(b!=d)f=JI(f,d);return f;}
function VB(){var a=this;D8.call(a);a.f9=0;a.dQ=null;a.k5=0;a.rY=0.0;a.nA=0;}
function AHP(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function YP(a){a.nA=a.dQ.data.length*a.rY|0;}
function Zj(a,b){return ABv(a,b)===null?0:1;}
function M$(a,b){var c;c=ABv(a,b);if(c===null)return null;return c.c3;}
function ABv(a,b){var c,d;if(b===null)c=S6(a);else{d=JT(b);c=Pl(a,b,d&(a.dQ.data.length-1|0),d);}return c;}
function Pl(a,b,c,d){var e;e=a.dQ.data[c];while(e!==null&&!(e.nw==d&&(b!==e.cM?0:1))){e=e.hY;}return e;}
function S6(a){var b;b=a.dQ.data[0];while(b!==null&&b.cM!==null){b=b.hY;}return b;}
function Zo(a,b,c,d){var e,f;e=new Iq;ABV(e,b,null);e.nw=d;f=a.dQ.data;e.hY=f[c];f[c]=e;return e;}
function O_(a){var b,c,d,e,f,g,h,i;b=a.dQ.data.length;b=AHP(!b?1:b<<1);c=Q(Iq,b);d=c.data;e=0;f=b-1|0;while(true){g=a.dQ.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.nw&f;i=h.hY;h.hY=d[b];d[b]=h;h=i;}e=e+1|0;}a.dQ=c;YP(a);}
function Y6(){var a=this;B.call(a);a.dk=null;a.lA=null;a.t0=null;}
function OT(a,b){var c;if(!(b instanceof Na)){Bs(a.dk,3);AAv(a,b);Bs(a.dk,b.ic);}else{c=b;Bs(a.dk,5);AAv(a,c);Bs(a.dk,c.ic);Bs(a.dk,c.ps);b=c.li;Bs(a.dk,b.m);c=new OF;c.qV=a;E5(b,c);}}
function AAv(a,b){var c;c=b.ep.iu;Ha(a.dk,a.lA.K,J(c));Bs(a.dk,b.ep.dx);NW(a,b.k9);B0(a.lA,c);}
function NW(a,b){if(b===null)Bs(a.dk,(-1));else Bs(a.dk,(Cy(a.t0,b)).bs);}
function YK(){var a=this;B.call(a);a.cT=null;a.mX=null;a.sE=null;}
function Hx(a,b){var c,d,e;if(b instanceof GP){c=b;Bs(a.cT,9);Sh(a,c.hl);}else if(b instanceof Jq){d=b;Bs(a.cT,3);S9(a,d);Bs(a.cT,d.pY);Sh(a,d.hz);}else if(b instanceof JO){e=b;Bs(a.cT,4);Hx(a,e.iW);Hx(a,e.hD);}else if(b===null)Bs(a.cT,(-1));else{Bs(a.cT,5);S9(a,b);Bs(a.cT,b.vM);}}
function S9(a,b){var c;c=b.fx.iu;Ha(a.cT,a.mX.K,J(c));Bs(a.cT,b.fx.dx);b=b.f8;if(b===null)Bs(a.cT,(-1));else Bs(a.cT,(Cy(a.sE,b)).bs);B0(a.mX,c);}
function Sh(a,b){var c;Bs(a.cT,b.m);c=new AB1;c.q3=a;E5(b,c);}
function V_(){B.call(this);this.tg=null;}
function AVU(a,b){var c;c=a.tg;Dw(c,b);KG(c,null);ABq(c);}
function AB0(){B.call(this);this.qP=null;}
function APn(a,b){Nm(a.qP,b);}
function Q5(){B.call(this);this.xD=null;}
function AY8(a,b){var c,d,e,f;c=a.xD;if(c.hg!=3&&c.fy!=3){b=b.data;c.hA=3;d=CL(b[0]);e=EQ(b[1]);X8(c.f,d,e);if(c.fo){b=EH(c);f=IK(EK(),c.i5);c=new L;N(c);H(GU(H(H(c,b),C(440)),f),C(242));$rt_globals.console.info($rt_ustr(M(c)));}}}
function Xe(){B.call(this);this.v7=null;}
function ASi(a,b){var c,d,e,f,g,h;c=a.v7;if(c.fy!=3){d=b.data;c.hg=3;if((CL(d[2])).data[0]!=1)Nm(c,b);else{e=CL(d[0]);f=EQ(d[1]);g=c.hA!=3?0:1;To(c.f,e,f,g);if(c.fo){b=EH(c);h=IK(EK(),c.i5);c=new L;N(c);H(GU(H(H(c,b),C(441)),h),C(242));$rt_globals.console.info($rt_ustr(M(c)));}}}}
var R6=G(D$);
var A5s=null;function ADM(){A5s=F($rt_doublecls());}
var Jg=G();
var A5t=Fr;var A5u=null;var A5v=null;function AFf(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.qE=Io(C4(d,D(0, 2147483648)),Fr)?0:1;e=C4(d,D(4294967295, 1048575));f=GM(A0D(d,52))&2047;if(Io(e,Fr)&&!f){c.nr=Fr;c.l1=0;return;}if(f)e=A0k(e,D(0, 1048576));else{e=G2(e,1);while(Io(C4(e,D(0, 1048576)),Fr)){e=G2(e,1);f=f+(-1)|0;}}g=A5v.data;h=f<<16>>16;i=0;j=g.length;k=BG(i,j);if(k>0){c=new BR;X(c);K(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BG(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=IM(e,A5u.data[h],i);if(ANk(m,A5t)){while(Du(m,A5t)<=0){j=j+(-1)|0;m=CM(Ce(m,Bp(10)),Bp(9));}g=A5v.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=IM(e,A5u.data[h],i);}e=G2(e,1);d=CM(e,Bp(1));g=A5u.data;h=j+1|0;n=g[h];f=i-1|0;n=IM(d,n,f);o=IM(IK(e,Bp(1)),A5u.data[h],f);p=Bp(1);while(true){q=Ce(p,Bp(10));if(Du(Dh(m,q),Dh(o,q))<=0)break;p=q;}r=Bp(1);while
(true){s=Ce(r,Bp(10));if(Du(Dh(m,s),Dh(n,s))>=0)break;r=s;}h=Du(p,r);e=h>0?Ce(Dh(m,p),p):h<0?CM(Ce(Dh(m,r),r),r):Ce(Dh(CM(m,AG2(r,Bp(2))),r),r);if(Du(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dh(e,Bp(10));if(Du(e,D(2808348672, 232830643))<0)break;}else if(Du(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Ce(e,Bp(10));}c.nr=e;c.l1=j-330|0;}
function IM(b,c,d){var e,f,g,h,i,j,k,l;e=C4(b,Bp(65535));f=C4(Gg(b,16),Bp(65535));g=C4(Gg(b,32),Bp(65535));h=C4(Gg(b,48),Bp(65535));i=C4(c,Bp(65535));j=C4(Gg(c,16),Bp(65535));k=C4(Gg(c,32),Bp(65535));l=C4(Gg(c,48),Bp(65535));return CM(CM(CM(G2(Ce(l,h),32+d|0),G2(CM(Ce(l,g),Ce(k,h)),16+d|0)),G2(CM(CM(Ce(l,f),Ce(k,g)),Ce(j,h)),d)),Gg(CM(CM(CM(Ce(k,e),Ce(j,f)),Ce(i,g)),G2(CM(CM(CM(Ce(l,e),Ce(k,f)),Ce(j,g)),Ce(i,h)),16)),32-d|0));}
function AEQ(){A5t=Dh(Bp(-1),Bp(10));A5u=ADA([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);A5v=A15([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function AAM(){B.call(this);this.tq=null;}
function AZE(a){Hy(a.tq,37,3);}
function AAN(){B.call(this);this.xZ=null;}
function AJb(a){Hy(a.xZ,40,3);}
function AAP(){B.call(this);this.rh=null;}
function ALx(a){Hy(a.rh,42,3);}
function AAQ(){B.call(this);this.u5=null;}
function AYC(a){Hy(a.u5,45,3);}
function AAR(){B.call(this);this.zG=null;}
function ARy(a){Hy(a.zG,45,5);}
function Ob(){B.call(this);this.wE=null;}
function AZz(a,b){var c,d;c=a.wE;d=new Bt;Bm(d,$rt_str(b.message));c.h(d);}
var ABx=G(0);
var A25=null;function A1s(){A1s=Bq(ABx);AUj();}
function AUj(){A25=new $rt_globals.TextDecoder("utf-16");}
function Zf(){var a=this;B.call(a);a.rQ=null;a.rP=0.0;}
function Lo(a,b){return LL(a.rQ,b,a.rP*2.0+0.875);}
function Xq(){var a=this;B.call(a);a.uM=0;a.z3=0;}
function FK(a,b){return Sr(a.uM,b,a.z3);}
function RN(){var a=this;B.call(a);a.wu=null;a.wm=0;a.wl=0;a.wo=null;a.wn=0;a.wp=0;}
function AMf(a,b){var c,d,e,f,g,h,i,j;c=a.wu;d=a.wm;e=a.wl;f=a.wo;g=a.wn;h=a.wp;i=CG(c.bt,5.0);d=Bc((c.bt.bS.b-d|0)-i|0,Bd((i-d|0)-c.Q.j.b|0,b.i.b));j=Bc((c.bt.bS.a-e|0)-i|0,Bd((i-e|0)-c.Q.j.a|0,b.i.a));V(f,d+g|0,j+h|0);Ei(c,f,c.S.j);}
function AA6(){var a=this;B.call(a);a.vl=null;a.vk=null;a.vn=null;a.vm=0;a.vp=0;a.vo=0;a.vr=0;a.vq=0;a.vh=0;a.vg=0;a.u6=0;}
function ASb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.vl;d=a.vk;e=a.vn;f=a.vm;g=a.vp;h=a.vo;i=a.vr;j=a.vq;k=a.vh;l=a.vg;m=a.u6;n=CG(c.bt,5.0);o=c.S.kN();Co(d,c.S.j);Co(e,c.S.g);switch(f){case -1:f=Bc(h+(b.i.b-g|0)|0,c.bt.bS.b-n|0);g=o.b;h=h+i|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Bd((i+b.i.b|0)-g|0,Bd(o.b,n-c.Q.g.b|0));}b:{switch(j){case -1:f=Bd(n,Bc(l+(b.i.a-k|0)|0,(c.bt.bS.a+c.Q.j.a|0)-n|0));g=o.a;h=l+m|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Bd((m+b.i.a|0)-k|0,o.a);}Ei(c,e,d);}
function AAZ(){var a=this;B.call(a);a.r9=null;a.r$=null;a.r_=null;}
function AXX(a,b,c,d){var e,f;b=a.r9;e=a.r$;f=a.r_;WG(b,e);if(f!==null)d.ml.l();if(X3(d)){if(d.nE===null)Qq(b,AEM(d,e),d.kk,e);else AAp(b,AEM(d,e),d.kk,e,d.nE);}}
var Ea=G(Bt);
function Px(){var a=this;B.call(a);a.pK=null;a.ty=null;a.xR=0;a.zh=0;}
function MJ(a,b){return Cf(a.ty)<b?0:1;}
var XE=G(0);
var A3J=null;function A0C(){A0C=Bq(XE);AYi();}
function AYi(){A3J=S(C(402));}
function Yl(){B.call(this);this.pi=null;}
function ALj(a,b){Nm(a.pi,b);}
var AHL=G();
function Xu(b,c,d,e){var f,g;f=b.next();g=new AA8;g.p6=b;g.p5=c;g.p_=d;g.p7=e;f.then(Bl(g,"f"),Bl(d,"f"));}
function AC0(b){$rt_globals.console.info("JsFileDialog: "+b);}
function AIv(b,c){var d,e,f;$rt_globals.console.info("openFileDialog....");d=(Ek()).createElement("input");e="file";d.type=e;if(c){e=!!1;d.webkitdirectory=e;}f=new AA4;f.ul=b;f.um=d;d.addEventListener("change",Bl(f,"handleEvent"));d.click();}
function AC_(b,c){var d;if(c.isFile?1:0)b.h(ACu(c.file()));else{c=c.createReader();d=new AAI;d.x4=b;c.readEntries(Bl(d,"f"));}}
function Wg(){var a=this;B.call(a);a.bu=null;a.rk=null;a.hG=null;a.oX=null;a.lp=null;a.fH=null;}
function G9(a){return a.bu.cv.gB;}
function AB8(a){var b;b=new Vx;b.y3=a;return b;}
function AET(a){var b,c,d,e,f;b=Q(Cn,5);c=b.data;d=a.bu;BQ(d);e=new ABH;e.vO=d;c[0]=CX(C(442),e);e=a.bu;BQ(e);f=new ABC;f.q8=e;c[1]=CX(C(443),f);d=a.bu;BQ(d);e=new ABD;e.sh=d;c[2]=CX(C(444),e);d=a.bu;BQ(d);e=new ABE;e.yX=d;c[3]=CX(C(445),e);d=a.bu;BQ(d);e=new ABF;e.pR=d;c[4]=CX(C(446),e);return ER(b);}
function Rv(a,b){var c;c=new P2;c.zC=a;c.zD=b;return c;}
function Kk(a,b,c){var d,e,f,g,h,i,j,k,l;a:{D0(a.fH.b5);d=a.bu.d;e=Eq(d);f=GI(d);g=a.bu.fu;if(c===null)h=null;else{A1b();switch(A5w.data[c.fr]){case 1:h=Nd(g,e,f);break a;case 2:h=Tf(g,e,f);break a;default:}b=new EM;X(b);K(b);}}c=a.bu;e=E_(c,b);f=Jj(c.d.f,e.bo,e.by);g=VY(c,f);if(h!==null){f=c.d;i=e.bo;j=e.by;e=new AB_;e.A$=c;e.A_=b;e.Ba=g;h.vc(f,i,j,e,c.jn);}else{e=Cy(c.d.f.dM,f);if(e!==null)IP(c,e);else{e=Cy(c.d.f.du,f);if(e!==null&&!FO(e))TE(c.kZ,b,e,c,g);else{g=c.kZ;D0(g.b5);h=g.b5;k=Q(Cn,1);l=k.data;d=new Cn;BQ(h);f
=new N6;f.z4=h;Es(d,f,C(447));l[0]=d;FP(h,b,ER(k),Tn(g,c));}}}}
var ADn=G(0);
var AAV=G();
function AKT(a,b){b=b;b.cJ=Cx(b.cJ,null);}
var Tk=G(0);
var Po=G(0);
var HI=G();
function U4(){HI.call(this);this.xd=null;}
function XH(a,b){var c,d,e;c=0;while(true){d=a.xd;if(d.jO===null)d.jO=B8(d.sM);if(!B_(d.jO))e=0;else{c=b.T(Ca(d.jO));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Ta=G(0);
function WT(){var a=this;B.call(a);a.Dt=null;a.Dr=null;a.Ds=0;a.Dq=0;}
function Iq(){var a=this;G4.call(a);a.nw=0;a.hY=null;}
var AA$=G();
function AVF(a,b){AC0(b);}
function AA9(){var a=this;B.call(a);a.tB=null;a.tA=null;}
function AMS(a,b){var c,d,e,f,g,h,i;c=a.tB;d=a.tA;e=0;f=b.length;while(e<f){g=b[e];h=g.getFile();i=new SJ;i.rw=c;i.rv=g;h.then(Bl(i,"f"),Bl(d,"f"));e=e+1|0;}}
var Z8=G();
function AOJ(a,b){AC0(b);}
function Z7(){var a=this;B.call(a);a.sY=null;a.sZ=null;}
function APH(a,b){var c,d,e,f,g;c=a.sY;d=a.sZ;e=b.name;$rt_globals.console.info("showDirectoryPicker result: "+e);f=b.values();g=Q(BC,1);g.data[0]=Fo(b.name);Xu(f,c,d,g);}
function NR(){var a=this;B.call(a);a.Dm=null;a.z1=0;}
function AKO(a,b){var c,d,e,f;c=a.z1;d=(CL(K3(b,0))).data;b=Bz();e=d[0];f=new L;N(f);U(H(U(H(f,C(448)),c),C(449)),e);Br(b,M(f));b=Bz();e=d[1];f=new L;N(f);U(H(U(H(f,C(448)),c),C(450)),e);Br(b,M(f));}
function ACR(){B.call(this);this.IQ=null;}
function AA4(){var a=this;B.call(a);a.ul=null;a.um=null;}
function AOx(a,b){var c,d,e,f,g,h;b=a.ul;c=a.um;d=c.webkitEntries;if(d.length>0){e=d.length;$rt_globals.console.info("webkitEntries.length = "+e);}f=0;while(f<d.length){g=d[f];h=new N9;h.pW=b;h.pV=g;$rt_globals.setTimeout(Bl(h,"onTimer"),0);f=f+1|0;}d=c.files;f=0;while(f<d.length){c=ACu(d.item(f));g=new NN;g.vR=b;g.vS=c;$rt_globals.setTimeout(Bl(g,"onTimer"),0);f=f+1|0;}}
function ADy(){var a=this;B.call(a);a.kK=null;a.nq=null;}
function AIX(){var a=this;B.call(a);a.Be=0;a.CV=0;a.rU=0;a.m4=0;}
function AAS(){var a=this;B.call(a);a.tm=null;a.tn=null;}
function AKv(a){var b,c,d,e,f,g;b=a.tm;c=a.tn;if(BV(c.kK,b.d.fV)){c=c.nq;CK(b,c.m4,c.rU,0);Cb((Bj(b)).bL,c.m4,c.rU);Cb((Bj(b)).bC,c.CV,c.Be);}else{d=(Cz(b.fu.xB)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){Gl(b);b=new ACi;b.qq=g;b.qp=c;BQ(b);c=new Sw;c.Aa=b;$rt_globals.setTimeout(Bl(c,"onTimer"),0);}}}
function AAT(){var a=this;B.call(a);a.yW=null;a.yV=null;}
function APg(a){IP(a.yW,a.yV);}
function FS(){var a=this;B.call(a);a.g4=null;a.cz=null;a.e0=null;a.eo=null;a.gW=null;a.jT=null;a.w1=null;}
function AZK(a){var b=new FS();AFY(b,a);return b;}
function AFY(a,b){a.g4=b;a.cz=BM();a.e0=BM();a.eo=BM();a.jT=BM();a.gW=BM();}
function ABg(a){var b;b=a.g4;if(b!==null)b.cz.qA(a);}
function ABJ(){B.call(this);this.sH=null;}
function AOB(a,b){b=b;TY(a.sH,b);}
var LQ=G(FS);
var Lm=G(FS);
function Zv(){B.call(this);this.xS=null;}
function AKB(a,b){var c;b=b;c=a.xS;Bs(c.bx,(Cy(c.fD,b)).bs);}
function Se(){var a=this;B.call(a);a.jY=null;a.k1=null;a.r8=0;}
function Q6(){B.call(this);this.pL=null;}
function ARY(a,b){b=b;Vl(a.pL,b);}
function S_(){var a=this;B.call(a);a.ma=0;a.tb=null;}
function AZB(a,b){var c,d,e;c=a.tb;b=b;d=c.wT;e=c.wU;d=b.b<=d&&e<=b.a?1:0;a.ma=d;return d?0:1;}
var JL=G(Ea);
var IC=G(Bt);
var MU=G(Bt);
function RC(){B.call(this);this.uz=null;}
function ATE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.uz;d=CL(c[0]);e=(CL(c[1])).data[0];if(!WW(b.f)){c=b.f;if(c.co==e){e=b.pC;f=MT(d);Fa(c.dM);Fa(c.du);KS(c);while(f.e1>=f.h_.data.length?0:1){if(Ba(f)==(-1))continue;g=ABz(c,Ba(f));h=M1(B7(c,g.bo),g.by);if(Ba(f)==(-1)){if(!e)continue;h.b1=0;h.bK=h.bK|4;continue;}i=ABz(c,Ba(f));j=Ba(f);k=Ba(f);Fv(c.dM,g,i);l=c.du;m=BM();if(Cy(l,i)===null)Fv(l,i,m);BF(Cy(c.du,i),g);h.b1=j;h.bK=k;}L2(b);if(b.Bj){n=IK(EK(),b.ya);if(A0c(n,Bp(100))){b=EH(b);c=new L;N(c);H(GU(H(H(c,
b),C(451)),n),C(242));$rt_globals.console.info($rt_ustr(M(c)));}}}}}
function AIT(){B.call(this);this.MM=null;}
function S2(){var a=this;B.call(a);a.qe=null;a.qf=null;}
function AZD(a){var b,c;b=a.qe;c=a.qf;Gi(b.eP,c);}
function SO(){var a=this;B.call(a);a.sM=null;a.jO=null;}
function SP(){var a=this;B.call(a);a.pE=null;a.pF=null;}
function AKE(a){var b,c;b=a.pE;c=a.pF;Gi(b.eP,c);We(b);}
var RT=G();
var A5x=null;function X8(b,c,d){To(b,c,d,0);}
function To(b,c,d,e){PY(b,c,d,null,null,e);}
function PY(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=MT(c);i=Ba(h);j=Ba(h);k=Ba(h);l=CF(b);c=b.A;if(c.data.length<i)b.A=ADW(c,i);m=0;while(m<i){if(g&&m<l){n=4*Ba(h)|0;h.e1=h.e1+n|0;}else b.A.data[m]=DT(SQ(h,d,0));m=m+1|0;}KS(b);if(j)b.c_=AHd(AID(h));Fa(b.dM);Fa(b.du);o=b.dM;g=0;while(g<k){Fv(o,DS(Ba(h),Ba(h)),DS(Ba(h),Ba(h)));g=g+1|0;}p=b.dM;o=b.du;q=P9(X5(p));while(FE(q)){r=ABc(q);s=r.cM;p=r.c3;BQ(A5x);r=Cy(o,p);if(r===null){r=BM();Fv(o,p,r);}BF(r,s);}if(o.mz===null){p=new RA;p.zy=o;o.mz=p;}p=o.mz;r=new TR;LU(r,
p.zy);while(FE(r)){Mk(r);o=r.gT.c3;p=A2z;c=Q(B,o.m);d=c.data;Iu(o,c);AEl(c,p);g=0;t=d.length;while(g<t){p=d[g];J0(o,g);o.cE.data[g]=p;g=g+1|0;}}Tb(h);if(e!==null&&f!==null){p=AR6(e,f);Qh(p);b.ey=AMh(p.m2,p.iU);b.c_=AHd(p.nP);}}
function N3(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MT(c);i=Ba(h);j=Ba(h);k=Ba(h)!=1?0:1;l=Ba(h);m=Ba(h);n=AAs(b,i);o=AAs(b,j);p=(ID(B7(b,n.b),n.a)).data[0].s;q=(ID(B7(b,o.b),o.a)).data[1].s;r=0;s=l-1|0;while(r<l){g=SQ(h,d,i);if(!r)g=MI(p,g);if(r==s)g=MI(g,q);t=n.b+r|0;u=DT(g);c=b.A.data;v=c[t];c[t]=u;if(!k&&H4(v)==H4(u)){t=0;while(t<H4(v)){w=v.s.data[t];o=u.s.data[t];x=w.b1;if(x!=5&&x&&!o.b1){o.b1=x;o.bK=w.bK;}t=t+1|0;}}r=r+1|0;}if(k){if(m){w=AID(h);v
=KA(i,j,(-1));PC(b.c_,v,w);}else if(e!==null&&f!==null){u=AR6(e,f);Qh(u);v=KA(i,j,(-1));PC(b.c_,v,u.nP);n=b.ey;n.fE=b.c_.c8.ci;n.eR=u.iU;}}Tb(h);}
function SQ(b,c,d){var e,f,g,h,i,j,k,l;e=Ba(b);f=Q(Cu,e);g=f.data;h=0;while(h<e){i=Ba(b);j=Ba(b);k=Ba(b);l=Ba(b);g[h]=D6(Ev(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AGV(){A5x=new AAH;}
function Ho(){var a=this;B.call(a);a.ed=0;a.es=0;a.na=null;a.oz=0;a.gn=null;}
function AWA(a,b,c,d,e,f){var g=new Ho();AQX(g,a,b,c,d,e,f);return g;}
function AQX(a,b,c,d,e,f,g){a.ed=b;a.es=c;a.na=BH(f,g);a.oz=d;a.gn=e;}
var Rf=G(0);
var E7=G(Fh);
function Rz(){E7.call(this);this.hS=null;}
function U_(a){var b;b=new VH;LU(b,a.hS);return b;}
function NG(){B.call(this);this.ze=null;}
function ANG(a,b){b=b;OT(a.ze,b);}
function Ya(){B.call(this);this.w5=null;}
function AQ3(a,b){b=b;Hx(a.w5,b);}
function JX(){var a=this;B.call(a);a.ep=null;a.k9=null;a.ic=0;}
function A1k(a,b,c){var d=new JX();AGQ(d,a,b,c);return d;}
function AGQ(a,b,c,d){a.ep=b;a.k9=c;a.ic=d;}
function AF2(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BV(a.ep,c.ep)&&BV(a.k9,c.k9)&&BV(CT(a.ic),CT(c.ic))?1:0;}return 0;}
function Na(){var a=this;JX.call(a);a.li=null;a.ps=0;}
function ALe(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!AF2(a,b))return 0;c=b;return BV(a.li,c.li);}return 0;}
function E0(){var a=this;B.call(a);a.fx=null;a.f8=null;a.vM=0;}
function AZ$(a,b,c){var d=new E0();Md(d,a,b,c);return d;}
function Md(a,b,c,d){a.fx=b;a.f8=c;a.vM=d;}
function ADc(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BV(a.fx,c.fx)&&BV(a.f8,c.f8)?1:0;}return 0;}
function GP(){E0.call(this);this.hl=null;}
function Jq(){var a=this;E0.call(a);a.hz=null;a.pY=0;}
function AXS(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){if(!ADc(a,b))return 0;c=b;return BV(a.hz,c.hz);}return 0;}
function JO(){var a=this;E0.call(a);a.iW=null;a.hD=null;}
function AKb(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return BV(a.iW,c.iW)&&BV(a.hD,c.hD)?1:0;}return 0;}
function AFs(){var a=this;B.call(a);a.Il=null;a.Ij=null;a.In=0.0;}
function AEv(){var a=this;HI.call(a);a.Lq=null;a.N6=0;a.Md=0;a.Jf=0;}
function Ut(){var a=this;B.call(a);a.qj=null;a.qk=null;}
function APu(a){var b,c;b=a.qj;c=a.qk;Vr();Kk(b,c,A5y);}
function Uu(){var a=this;B.call(a);a.t1=null;a.t2=null;}
function AL5(a){var b,c;b=a.t1;c=a.t2;Vr();Kk(b,c,A5z);}
function Ur(){var a=this;B.call(a);a.yc=null;a.yb=null;}
function AKw(a){Kk(a.yc,a.yb,null);}
function Us(){var a=this;B.call(a);a.pO=null;a.pQ=null;}
function APp(a){var b,c,d,e,f,g,h;b=a.pO;c=a.pQ;d=Eq(b.bu.d);e=GI(b.bu.d);d=Xd(b.bu.fu,d,e);D0(b.fH.b5);b=b.bu;e=E_(b,c);if(d!==null){f=b.d;g=e.bo;h=e.by;e=new Va;e.Ap=b;e.Ao=c;d.Mq(f,g,h,1,e,b.jn);}}
function TB(){B.call(this);this.sj=null;}
function AUL(a){var b;b=a.sj;D0(b.fH.b5);Hv(b.bu,AB8(b),0);}
function TA(){B.call(this);this.yM=null;}
function ASZ(a){var b;b=a.yM;D0(b.fH.b5);Hv(b.bu,AB8(b),1);}
function Tz(){B.call(this);this.vV=null;}
function AZn(a){var b,c,d;b=a.vV;D0(b.fH.b5);c=G9(b);b=b.bu;BQ(b);d=new ACc;d.s0=b;TJ(c,d,ADQ(C(452)));}
function Ri(){var a=this;B.call(a);a.qg=null;a.qh=null;}
function ASU(a){var b,c;b=a.qg;c=a.qh;b=b.bu.d;b.n1=c;JE(b);}
var SN=G(0);
var A3K=null;function AGG(){A3K=new Xv;}
function Sp(){B.call(this);this.zL=null;}
function ALR(a){var b,c,d;b=a.zL;D0(b.fH.b5);c=G9(b);b=b.bu;BQ(b);d=new T3;d.wf=b;MW(c,d);}
function AGD(){var a=this;B.call(a);a.h_=null;a.e1=0;}
function MT(a){var b=new AGD();AJv(b,a);return b;}
function AJv(a,b){a.h_=b;a.e1=0;}
function Ba(a){var b,c;b=a.h_.data;c=a.e1;a.e1=c+1|0;return b[c];}
function Tb(a){var b,c,d,e;if(a.e1!=a.h_.data.length){b=EL();c=a.h_.data.length;d=a.e1;e=new L;N(e);H(U(H(U(H(e,C(437)),c),C(453)),d),C(454));Br(b,M(e));}}
function AC7(){var a=this;B.call(a);a.m2=null;a.nP=null;a.iU=null;a.cx=null;a.lV=null;a.mL=null;a.hE=null;a.nO=null;a.nH=null;}
function AR6(a,b){var c=new AC7();AXl(c,a,b);return c;}
function AXl(a,b,c){a.cx=MT(b);a.lV=c;}
function Qh(a){var b,c,d,e,f,g,h,i;b=Ba(a.cx);c=new LT;Sd(c);a.iU=c;a.hE=BM();d=0;while(d<b){e=Ba(a.cx);f=Ba(a.cx);g=Ev(a.lV,e,f);Fv(a.iU,g,BM());BF(a.hE,g);d=d+1|0;}c=P9(X5(a.iU));while(FE(c)){Hj((ABc(c)).c3,O6(a));}d=Ba(a.cx);if(d==(-1))a.m2=null;else{a.mL=Q(FS,d);c=new Og;h=a.cx;i=a.lV;g=a.hE;c.dv=h;c.uE=i;c.tM=g;a.nO=c;c=new TO;c.d$=h;c.xT=i;c.ym=g;a.nH=c;a.m2=Tq(a,null);}if(Ba(a.cx)!=(-1))a.nP=TL(a.cx,a.mL);}
function Tq(a,b){var c,d,e,f,g,h,i,j,k;c=Ba(a.cx);d=Ba(a.cx);e=a.nO;f=Ba(e.dv);g=BM();h=0;while(h<f){BF(g,Oj(e));h=h+1|0;}a:{switch(d){case -1:i=new LQ;i.g4=b;b=A3Y;i.cz=b;i.e0=b;i.eo=b;i.jT=b;i.gW=b;break a;case 0:i=AZK(b);break a;case 1:i=new Lm;AFY(i,b);Hj(i.eo,g);break a;default:}b=new CY;i=new L;N(i);U(H(i,C(455)),d);Bm(b,M(i));K(b);}i.eo=g;b=a.nH;d=Ba(b.d$);e=BM();j=0;while(j<d){BF(e,Gx(b));j=j+1|0;}i.e0=e;i.jT=O6(a);d=Ba(a.cx);b=BM();j=0;while(j<d){e=Oj(a.nO);g=Gx(a.nH);f=Ba(a.cx);k=new Se;k.jY=e;k.k1
=g;k.r8=f;BF(b,k);j=j+1|0;}i.gW=b;j=Ba(a.cx);i.w1=j==(-1)?null:Bw(a.hE,j);d=Ba(a.cx);b=BM();j=0;while(j<d){BF(b,Tq(a,i));j=j+1|0;}i.cz=b;a.mL.data[c]=i;return i;}
function O6(a){var b,c,d,e;b=Ba(a.cx);c=BM();d=0;while(d<b){e=Ba(a.cx);BF(c,Bw(a.hE,e));d=d+1|0;}return c;}
function SU(){B.call(this);this.wj=null;}
function AP3(a,b,c){var d,e;c=a.wj;d=c.d.f;e=b.bs;b=c.fn;UT(d.A.data[e],0,b);}
function Zb(){var a=this;B.call(a);a.k6=null;a.iN=0;}
var ZX=G(BD);
function O0(){B.call(this);this.rV=null;}
function AP7(a){AIK(a.rV);}
function O1(){B.call(this);this.s8=null;}
function AWZ(a){K7(a.s8);}
function OZ(){B.call(this);this.zI=null;}
function AI9(a){AFB(a.zI);}
function Z6(){B.call(this);this.tN=null;}
function ARc(a){a.tN.za();}
function Z5(){B.call(this);this.xL=null;}
function AVd(a){a.xL.zJ();}
function Rd(){B.call(this);this.q2=null;}
function AMX(a){var b,c,d,e,f,g,h,i;b=a.q2;c=(b.rk.dn()).data;d=Q(Cn,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new OS;i.sG=b;i.sF=h;e[f]=Pq(i,h);f=f+1|0;}return d;}
function Vb(){B.call(this);this.rr=null;}
function APF(a){a.rr.oX.jP(0);}
function Vc(){B.call(this);this.sR=null;}
function AWB(a){a.sR.oX.jP(1);}
function ABH(){B.call(this);this.vO=null;}
function AJq(a){var b,c,d,e,f;b=a.vO.d.f;c=b.co;d=new L;N(d);U(H(d,C(456)),c);$rt_globals.console.info($rt_ustr(M(d)));c=b.ng;d=new L;N(d);U(H(d,C(457)),c);$rt_globals.console.info($rt_ustr(M(d)));d=b.c_;e=Gr(E6(b));AAj(d,0,d.c8,e);b=Bz();f=b.mp;f.data[0]=10;Qc(b,f,0,1);}
function ABC(){B.call(this);this.q8=null;}
function APJ(a){T5(a.q8);}
function ABD(){B.call(this);this.sh=null;}
function AYk(a){V8(a.sh);}
function ABE(){B.call(this);this.yX=null;}
function ARw(a){M3(a.yX.d);}
function ABF(){B.call(this);this.pR=null;}
function AOZ(a){ABq(a.pR);}
function N1(){B.call(this);this.rK=null;}
function AWT(a){var b,c,d,e,f,g,h;b=a.rK;c=Q(Cn,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Pq(Rv(b,g),PA(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Pq(Rv(b,g),PA(g));e=h;}return c;}
var AAH=G();
function YG(){B.call(this);this.ww=null;}
function AJ8(a,b,c){GV(B7(a.ww.d.f,b.bs),0,J(c));}
var Fx=G();
var A5A=null;var A5B=null;var A3Y=null;var A5C=null;var A5D=null;var A5E=null;function AF0(){A5A=new Yx;A5B=new Yu;A3Y=new Yv;A5C=new Ys;A5D=new Yt;A5E=new ACa;}
function SJ(){var a=this;B.call(a);a.rw=null;a.rv=null;}
function AM6(a,b){a.rw.h(AGd(a.rv,b));}
function AIr(){var a=this;B.call(a);a.iu=null;a.dx=0;}
function AOz(a,b){var c=new AIr();AJi(c,a,b);return c;}
function AJi(a,b,c){a.iu=b;a.dx=c;}
function AS0(a,b){var c;if(a===b)return 1;if(b!==null&&BI(a)===BI(b)){c=b;return a.dx==c.dx&&BV(a.iu,c.iu)?1:0;}return 0;}
function OF(){B.call(this);this.qV=null;}
function AQ1(a,b){b=b;NW(a.qV,b);}
function AB1(){B.call(this);this.q3=null;}
function AZx(a,b){b=b;Hx(a.q3,b);}
var Jz=G(0);
function N9(){var a=this;B.call(a);a.pW=null;a.pV=null;}
function APN(a){AC_(a.pW,a.pV);}
function NN(){var a=this;B.call(a);a.vR=null;a.vS=null;}
function AJc(a){a.vR.h(a.vS);}
var Xv=G();
function AA8(){var a=this;B.call(a);a.p6=null;a.p5=null;a.p_=null;a.p7=null;}
function AO6(a,b){var c,d,e,f,g,h,i;c=a.p6;d=a.p5;e=a.p_;f=a.p7;if(!(b.done?1:0)){Xu(c,d,e,f);g=b.value;if(g.kind==='file'?1:0){b=g.getFile();c=new W_;c.s2=d;c.s3=g;c.s4=f;b.then(Bl(c,"f"),Bl(e,"f"));}else{h=f.data;c=g.values();b=Fo(g.name);i=h.length;f=C$(f,i+1|0);f.data[i]=b;Xu(c,d,e,f);}}}
var Lc=G(E7);
var Yx=G(Lc);
var Mp=G(D8);
var Yu=G(Mp);
var M2=G(EZ);
function AMJ(a){var b;b=new Ea;X(b);K(b);}
function ARP(a,b){var c;c=new Ea;X(c);K(c);}
function AQj(a,b){b=new Ea;X(b);K(b);}
var Yv=G(M2);
function AR0(a,b){var c;c=new BD;X(c);K(c);}
function AQT(a){return 0;}
function ANi(a){return A5C;}
function AKj(a){return 1;}
var Ys=G();
function AJY(a){return 0;}
function ATD(a){var b;b=new Nx;X(b);K(b);}
function AVv(a){var b;b=new CY;X(b);K(b);}
var RP=G(0);
var Yt=G();
var ACa=G();
function Fq(){var a=this;B.call(a);a.j7=0;a.vU=0;a.iZ=null;a.gT=null;a.td=null;a.kQ=null;}
function A5F(a){var b=new Fq();LU(b,a);return b;}
function LU(a,b){a.kQ=b;a.vU=b.cU;a.iZ=null;}
function FE(a){var b,c;if(a.iZ!==null)return 1;while(true){b=a.j7;c=a.kQ.b_.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.j7=b+1|0;}return 0;}
function AD6(a){var b;if(a.vU==a.kQ.cU)return;b=new HF;X(b);K(b);}
function Mk(a){var b,c,d,e;AD6(a);if(!FE(a)){b=new Nx;X(b);K(b);}b=a.iZ;if(b!==null){c=a.gT;if(c!==null)a.td=c;a.gT=b;a.iZ=b.cS;}else{d=a.kQ.b_.data;e=a.j7;a.j7=e+1|0;b=d[e];a.gT=b;a.iZ=b.cS;a.td=null;}}
var VH=G(Fq);
function Re(a){Mk(a);return a.gT.cM;}
function ADl(){var a=this;B.call(a);a.Jb=null;a.O3=0;}
function TM(){var a=this;B.call(a);a.k=null;a.dL=0;a.mc=null;a.qL=0;a.g8=0;a.fk=0;a.bB=0;a.np=null;}
function KQ(a){return a.k.bN;}
function ABA(a,b,c,d){var e,f,g,h,i,j;e=BM();f=a.dL;g=0;if(c!=f)a.dL=c;a:{switch(b){case -1073741784:h=new Uj;c=a.bB+1|0;a.bB=c;FT(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Sg;c=a.bB+1|0;a.bB=c;FT(h,c);break a;case -33554392:h=new VI;c=a.bB+1|0;a.bB=c;FT(h,c);break a;default:c=a.g8+1|0;a.g8=c;if(d!==null)h=A1u(c);else{h=new F4;FT(h,0);g=1;}c=a.g8;if(c<=(-1))break a;if(c>=10)break a;a.mc.data[c]=h;break a;}h=new ABr;FT(h,(-1));}while(true){if(Fy(a.k)&&a.k.n==(-536870788))
{d=AXi(Cj(a,2),Cj(a,64));while(!Dp(a.k)&&Fy(a.k)){i=a.k;j=i.n;if(j&&j!=(-536870788)&&j!=(-536870871))break;CD(d,Bk(i));i=a.k;if(i.bi!=(-536870788))continue;Bk(i);}i=LM(a,d);i.R(h);}else if(a.k.bi==(-536870788)){i=Hm(h);Bk(a.k);}else{i=Rm(a,h);d=a.k;if(d.bi==(-536870788))Bk(d);}if(i!==null)BF(e,i);if(Dp(a.k))break;if(a.k.bi==(-536870871))break;}if(a.k.mE==(-536870788))BF(e,Hm(h));if(a.dL!=f&&!g){a.dL=f;d=a.k;d.gR=f;d.n=d.bi;d.fd=d.fv;j=d.dr;d.x=j+1|0;d.io=j;FD(d);}switch(b){case -1073741784:break;case -536870872:d
=new N7;F6(d,e,h);return d;case -268435416:d=new Zq;F6(d,e,h);return d;case -134217688:d=new TS;F6(d,e,h);return d;case -67108824:d=new Wr;F6(d,e,h);return d;case -33554392:d=new DZ;F6(d,e,h);return d;default:switch(e.m){case 0:break;case 1:return A1a(Bw(e,0),h);default:return A0L(e,h);}return Hm(h);}d=new JK;F6(d,e,h);return d;}
function AHi(a){var b,c,d,e,f,g,h;b=BJ(4);c=(-1);d=(-1);if(!Dp(a.k)&&Fy(a.k)){e=b.data;c=Bk(a.k);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B1(3);b=e.data;b[0]=c&65535;f=a.k;g=f.bi;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bk(f);f=a.k;g=f.bi;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bk(f);return AWW(e,3);}return AWW(e,2);}if(!Cj(a,2))return AD4(b[0]);if(Cj(a,64))return AUz(b[0]);return ALW(b[0]);}e=b.data;c=1;while(c<4&&!Dp(a.k)&&Fy(a.k)){h=c+1|0;e[c]=Bk(a.k);c=h;}if(c==1){h=e[0];if(!(A5G.CG(h)==A5H?0:1))return ABm(a,e[0]);}if
(!Cj(a,2))return A17(b,c);if(Cj(a,64)){f=new AA7;P4(f,b,c);return f;}f=new WI;P4(f,b,c);return f;}
function Rm(a,b){var c,d,e,f,g,h,i;if(Fy(a.k)&&!KC(a.k)&&Lj(a.k.n)){if(Cj(a,128)){c=AHi(a);if(!Dp(a.k)){d=a.k;e=d.bi;if(!(e==(-536870871)&&!(b instanceof F4))&&e!=(-536870788)&&!Fy(d))c=Nj(a,b,c);}}else if(!Qf(a.k)&&!Yc(a.k)){f=new Qi;N(f);while(!Dp(a.k)&&Fy(a.k)&&!Qf(a.k)&&!Yc(a.k)){if(!(!KC(a.k)&&!a.k.n)&&!(!KC(a.k)&&Lj(a.k.n))){g=a.k.n;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bk(a.k);if(!Nc(e))BL(f,e&65535);else I$(f,G3(e));}if(!Cj(a,2)){c=new Uf;DH(c);c.cC
=M(f);e=f.K;c.bM=e;c.mx=ASC(e);c.ns=ASC(c.bM);h=0;while(h<(c.bM-1|0)){TX(c.mx,P(c.cC,h),(c.bM-h|0)-1|0);TX(c.ns,P(c.cC,(c.bM-h|0)-1|0),(c.bM-h|0)-1|0);h=h+1|0;}}else if(Cj(a,64))c=A16(f);else{c=new OQ;DH(c);c.ir=M(f);c.bM=f.K;}}else c=Nj(a,b,AA5(a,b));}else{d=a.k;if(d.bi!=(-536870871))c=Nj(a,b,AA5(a,b));else{if(b instanceof F4)K(Ch(C(21),d.bN,Qe(d)));c=Hm(b);}}a:{if(!Dp(a.k)){e=a.k.bi;if(!(e==(-536870871)&&!(b instanceof F4))&&e!=(-536870788)){f=Rm(a,b);if(c instanceof C9&&!(c instanceof FF)&&!(c instanceof C0)
&&!(c instanceof EW)){i=c;if(!f.bX(i.M)){c=new ZE;Fl(c,i.M,i.e,i.iT);c.M.R(c);}}if((f.i0()&65535)!=43)c.R(f);else c.R(f.M);break a;}}if(c===null)return null;c.R(b);}if((c.i0()&65535)!=43)return c;return c.M;}
function Nj(a,b,c){var d,e,f,g,h;d=a.k;e=d.bi;if(c!==null&&!(c instanceof B9)){switch(e){case -2147483606:Bk(d);d=new ACf;Dm(d,c,b,e);Nr();c.R(A5I);return d;case -2147483605:Bk(d);d=new R8;Dm(d,c,b,(-2147483606));Nr();c.R(A5I);return d;case -2147483585:Bk(d);d=new RF;Dm(d,c,b,(-536870849));Nr();c.R(A5I);return d;case -2147483525:f=new OK;d=FJ(d);g=a.fk+1|0;a.fk=g;JZ(f,d,c,b,(-536870849),g);Nr();c.R(A5I);return f;case -1073741782:case -1073741781:Bk(d);d=new Uc;Dm(d,c,b,e);c.R(d);return d;case -1073741761:Bk(d);d
=new Td;Dm(d,c,b,(-536870849));c.R(b);return d;case -1073741701:h=new XN;d=FJ(d);e=a.fk+1|0;a.fk=e;JZ(h,d,c,b,(-536870849),e);c.R(h);return h;case -536870870:case -536870869:Bk(d);if(c.i0()!=(-2147483602)){d=new C0;Dm(d,c,b,e);}else if(Cj(a,32)){d=new Ud;Dm(d,c,b,e);}else{d=new Qu;f=RI(a.dL);Dm(d,c,b,e);d.mD=f;}c.R(d);return d;case -536870849:Bk(d);d=new Gn;Dm(d,c,b,(-536870849));c.R(b);return d;case -536870789:h=new FL;d=FJ(d);e=a.fk+1|0;a.fk=e;JZ(h,d,c,b,(-536870849),e);c.R(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bk(d);d=new ACg;Fl(d,f,b,e);f.e=d;return d;case -2147483585:Bk(d);c=new ZA;Fl(c,f,b,(-2147483585));return c;case -2147483525:c=new Rl;UM(c,FJ(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bk(d);d=new S$;Fl(d,f,b,e);f.e=d;return d;case -1073741761:Bk(d);c=new WY;Fl(c,f,b,(-1073741761));return c;case -1073741701:c=new TT;UM(c,FJ(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bk(d);d=A1f(f,b,e);f.e=d;return d;case -536870849:Bk(d);c
=new EW;Fl(c,f,b,(-536870849));return c;case -536870789:return A0h(FJ(d),f,b,(-536870789));default:}return c;}
function AA5(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof F4;while(true){a:{e=a.k;f=e.bi;if((f&(-2147418113))==(-2147483608)){Bk(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.dL=g;else{if(f!=(-1073741784))g=a.dL;c=ABA(a,f,g,b);e=a.k;if(e.bi!=(-536870871))K(Ch(C(21),e.bN,e.dr));Bk(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bk(e);c
=AWF(0);break a;case -2147483577:Bk(e);c=new Qp;B3(c);break a;case -2147483558:Bk(e);c=new AAE;h=a.bB+1|0;a.bB=h;AHH(c,h);break a;case -2147483550:Bk(e);c=AWF(1);break a;case -2147483526:Bk(e);c=new Z2;B3(c);break a;case -536870876:Bk(e);a.bB=a.bB+1|0;if(Cj(a,8)){if(Cj(a,1)){c=A0x(a.bB);break a;}c=AZS(a.bB);break a;}if(Cj(a,1)){c=A0R(a.bB);break a;}c=A1y(a.bB);break a;case -536870866:Bk(e);if(Cj(a,32)){c=A1T();break a;}c=A1p(RI(a.dL));break a;case -536870821:Bk(e);i=0;c=a.k;if(c.bi==(-536870818)){i=1;Bk(c);}c
=LM(a,GC(a,i));c.R(b);e=a.k;if(e.bi!=(-536870819))K(Ch(C(21),e.bN,e.dr));QZ(e,1);Bk(a.k);break a;case -536870818:Bk(e);a.bB=a.bB+1|0;if(!Cj(a,8)){c=new Lq;B3(c);break a;}c=new O2;e=RI(a.dL);B3(c);c.uJ=e;break a;case 0:j=e.fv;if(j!==null)c=LM(a,j);else{if(Dp(e)){c=Hm(b);break a;}c=AD4(f&65535);}Bk(a.k);break a;default:break b;}Bk(e);c=new Lq;B3(c);break a;}h=(f&2147483647)-48|0;if(a.g8<h)K(Ch(C(21),FQ(e),Qe(a.k)));Bk(e);a.bB=a.bB+1|0;c=!Cj(a,2)?AZX(h,a.bB):Cj(a,64)?A0y(h,a.bB):A11(h,a.bB);a.mc.data[h].l7=1;a.qL
=1;break a;}if(f>=0&&!Hp(e)){c=ABm(a,f);Bk(a.k);}else if(f==(-536870788))c=Hm(b);else{if(f!=(-536870871)){b=new Jt;c=!Hp(a.k)?AAx(f&65535):a.k.fv.cQ();e=a.k;Ka(b,c,e.bN,e.dr);K(b);}if(d){b=new Jt;e=a.k;Ka(b,C(21),e.bN,e.dr);K(b);}c=Hm(b);}}}if(f!=(-16777176))break;}return c;}
function GC(a,b){var c,d,e,f,g,h,i,j,$$je;c=AXi(Cj(a,2),Cj(a,64));EO(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(Dp(a.k))break a;h=a.k;b=h.bi;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CD(c,d);d=Bk(a.k);h=a.k;if(h.bi!=(-536870874)){d=38;break d;}if(h.n==(-536870821)){Bk(h);e=1;d=(-1);break d;}Bk(h);if(g){c=GC(a,0);break d;}if(a.k.bi==(-536870819))break d;AAb(c,GC(a,0));break d;case -536870867:if(!g){b=h.n;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bk(h);h=a.k;i=h.bi;if(Hp(h))break c;if
(i<0){j=a.k.n;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(Lj(i))break e;i=i&65535;break e;}catch($$e){$$je=EA($$e);if($$je instanceof Em){break b;}else{throw $$e;}}}try{B5(c,d,i);}catch($$e){$$je=EA($$e);if($$je instanceof Em){break b;}else{throw $$e;}}Bk(a.k);d=(-1);break d;}}if(d>=0)CD(c,d);d=45;Bk(a.k);break d;case -536870821:if(d>=0){CD(c,d);d=(-1);}Bk(a.k);j=0;h=a.k;if(h.bi==(-536870818)){Bk(h);j=1;}if(!e)ACr(c,GC(a,j));else AAb(c,GC(a,j));e=0;Bk(a.k);break d;case -536870819:if(d>=0)CD(c,
d);d=93;Bk(a.k);break d;case -536870818:if(d>=0)CD(c,d);d=94;Bk(a.k);break d;case 0:if(d>=0)CD(c,d);h=a.k.fv;if(h===null)d=0;else{AIW(c,h);d=(-1);}Bk(a.k);break d;default:}if(d>=0)CD(c,d);d=Bk(a.k);}g=0;}K(Ch(C(21),KQ(a),a.k.dr));}K(Ch(C(21),KQ(a),a.k.dr));}if(!f){if(d>=0)CD(c,d);return c;}K(Ch(C(21),KQ(a),a.k.dr-1|0));}
function ABm(a,b){var c,d,e;c=Nc(b);if(Cj(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return ALW(b&65535);}if(Cj(a,64)&&b>128){if(c){d=new NX;DH(d);d.bM=2;d.t9=Hb(G_(b));return d;}if(Ra(b))return ASO(b&65535);if(!Vp(b))return AUz(b&65535);return APy(b&65535);}}if(!c){if(Ra(b))return ASO(b&65535);if(!Vp(b))return AD4(b&65535);return APy(b&65535);}d=new D9;DH(d);d.bM=2;d.gs=b;e=(G3(b)).data;d.ln=e[0];d.jX=e[1];return d;}
function LM(a,b){var c,d,e;if(!AFR(b)){if(!b.O){if(b.hZ())return AO0(b);return AWG(b);}if(!b.hZ())return AQl(b);c=new J1;Xj(c,b);return c;}c=ACZ(b);d=new Oh;B3(d);d.sQ=c;d.Ak=c.bf;if(!b.O){if(b.hZ())return AGA(AO0(If(b)),d);return AGA(AWG(If(b)),d);}if(!b.hZ())return AGA(AQl(If(b)),d);c=new S5;e=new J1;Xj(e,If(b));AIF(c,e,d);return c;}
function Ii(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cj(a,b){return (a.dL&b)!=b?0:1;}
function UP(){B.call(this);this.tZ=null;}
function ARL(a,b){b.hj=a.tZ.c8;}
function UO(){B.call(this);this.xG=null;}
function AUp(a,b){b.g4=a.xG.c8.ci;}
function XK(){E7.call(this);this.ut=null;}
function P9(a){var b;b=new Xz;LU(b,a.ut);return b;}
function RA(){Fh.call(this);this.zy=null;}
function Qs(){B.call(this);this.rf=null;}
function AMA(a,b){b.hj=a.rf;}
function Og(){var a=this;B.call(a);a.dv=null;a.uE=null;a.tM=null;}
function Oj(a){var b,c,d,e,f,g,h,i;a:{b=Ba(a.dv);switch(b){case 3:break;case 5:c=P6(a);d=ME(a);b=Ba(a.dv);e=Ba(a.dv);f=Ba(a.dv);g=BM();h=0;while(h<f){BF(g,ME(a));h=h+1|0;}i=new Na;AGQ(i,c,d,b);i.li=g;i.ps=e;break a;default:c=new CY;d=new L;N(d);U(H(d,C(458)),b);Bm(c,M(d));K(c);}i=A1k(P6(a),ME(a),Ba(a.dv));}return i;}
function P6(a){var b,c;b=Ba(a.dv);c=Ba(a.dv);return AOz(Ev(a.uE,b,c),Ba(a.dv));}
function ME(a){var b;b=Ba(a.dv);if(b==(-1))return null;return Bw(a.tM,b);}
function TO(){var a=this;B.call(a);a.d$=null;a.xT=null;a.ym=null;}
function Gx(a){var b,c,d,e,f;a:{b:{b=Ba(a.d$);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=O8(a);d=So(a);b=Ba(a.d$);e=Vi(a);f=new Jq;Md(f,c,d,2);f.pY=b;f.hz=e;break a;case 4:c=Gx(a);d=Gx(a);f=new JO;Md(f,c.fx,c.f8,9);f.iW=c;f.hD=d;break a;case 5:f=AZ$(O8(a),So(a),Ba(a.d$));break a;case 9:c=Vi(a);f=new GP;d=!FO(c)&&Bw(c,0)!==null?(Bw(c,0)).f8:null;Md(f,null,null,7);f.hl=BM();c=B8(c);while(B_(c)){e=Ca(c);if(!(e instanceof GP))BF(f.hl,e);else{e=e;Hj(f.hl,e.hl);}}f.f8=d;break a;default:break b;}f
=null;break a;}c=new CY;d=new L;N(d);U(H(d,C(459)),b);Bm(c,M(d));K(c);}return f;}
function O8(a){var b,c;b=Ba(a.d$);c=Ba(a.d$);return AOz(Ev(a.xT,b,c),Ba(a.d$));}
function So(a){var b;b=Ba(a.d$);if(b==(-1))return null;return Bw(a.ym,b);}
function Vi(a){var b,c,d;b=Ba(a.d$);c=BM();d=0;while(d<b){BF(c,Gx(a));d=d+1|0;}return c;}
var Hf=G(0);
function Wz(){B.call(this);this.t5=null;}
function AR3(a,b,c,d){Kt(a.t5,b,c.bs,d.bs);}
function WA(){B.call(this);this.qa=null;}
function AO7(a,b,c,d){Kt(a.qa,b,c.bs,d.bs);}
function IO(){B.call(this);this.oT=0;}
var A5J=null;var A5K=null;var A5L=null;function ATS(a){var b=new IO();AGE(b,a);return b;}
function AGE(a,b){a.oT=b;}
function Q9(b){return !b?A5K:A5J;}
function ADe(){A5J=ATS(1);A5K=ATS(0);A5L=F($rt_booleancls());}
var Ky=G(0);
var Un=G();
var QR=G(0);
var AFw=G();
function UX(){B.call(this);this.xJ=null;}
function ASV(a,b,c,d){IW(a.xJ,b,c.bs,d.bs);}
var UW=G();
function AX3(a,b){return b.ep.dx>=0?0:1;}
var UV=G();
function AUy(a,b){var c;a:{b:{b=b;if(b!==null){b=b.fx;if(b===null)break b;if(b.dx>=0)break b;}c=1;break a;}c=0;}return c;}
function UZ(){B.call(this);this.wY=null;}
function ASg(a,b,c,d){IW(a.wY,b,c.bs,d.bs);}
var Gt=G(CC);
var A5z=null;var A5y=null;var A5M=null;function Vr(){Vr=Bq(Gt);AY_();}
function AVB(a,b){var c=new Gt();AE1(c,a,b);return c;}
function AE1(a,b,c){Vr();Dy(a,b,c);}
function AY_(){var b;A5z=AVB(C(460),0);b=AVB(C(461),1);A5y=b;A5M=I(Gt,[A5z,b]);}
function ACc(){B.call(this);this.s0=null;}
function AN6(a,b){Dw(a.s0,b);}
function BP(){var a=this;B.call(a);a.e=null;a.cm=0;a.sa=null;a.iT=0;}
var A2G=0;function B3(a){var b;b=A2G;A2G=b+1|0;a.sa=Mj(b);}
function LK(a,b){var c;c=A2G;A2G=c+1|0;a.sa=Mj(c);a.e=b;}
function Im(a,b,c,d){var e;e=d.y;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Iz(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AMk(a,b){a.iT=b;}
function ALv(a){return a.iT;}
function AVV(a){return a.e;}
function AW5(a,b){a.e=b;}
function AW3(a,b){return 1;}
function AYd(a){return null;}
function JU(a){var b;a.cm=1;b=a.e;if(b!==null){if(!b.cm){b=b.f3();if(b!==null){a.e.cm=1;a.e=b;}a.e.eT();}else if(b instanceof G5&&b.eY.l7)a.e=b.e;}}
function AIN(){A2G=1;}
function OS(){var a=this;B.call(a);a.sG=null;a.sF=null;}
function AOX(a){var b,c;b=a.sG;c=a.sF;b.hG.w$(c);}
function AB2(){var a=this;B.call(a);a.ra=null;a.q$=null;a.q9=0;a.q_=0;}
function AS2(a,b){b=b;Et(a.ra,a.q$,b,a.q9,a.q_);}
function AB3(){var a=this;B.call(a);a.zW=null;a.zV=null;a.zU=0;a.zT=0;}
function AN8(a,b){b=b;Et(a.zW,a.zV,b,a.zU,a.zT);}
var Wx=G();
var A5w=null;function A1b(){A1b=Bq(Wx);AKo();}
function AKo(){var b,c;Vr();b=BJ((A5M.hx()).data.length);c=b.data;A5w=b;c[A5z.fr]=1;c[A5y.fr]=2;}
function Vx(){B.call(this);this.y3=null;}
function AUD(a,b){Xk(G9(a.y3),b,A3Q,ADQ(C(462)));}
function ABw(){B.call(this);this.pu=null;}
function AXg(a,b){var c,d;c=a.pu;d=b.iP;b=new L;N(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(M(b)));}
function CZ(){var a=this;BP.call(a);a.l7=0;a.dT=0;}
var A5I=null;function Nr(){Nr=Bq(CZ);ANI();}
function A1u(a){var b=new CZ();FT(b,a);return b;}
function FT(a,b){Nr();B3(a);a.dT=b;}
function AKJ(a,b,c,d){var e,f;e=Jh(d,a.dT);Kw(d,a.dT,b);f=a.e.c(b,c,d);if(f<0)Kw(d,a.dT,e);return f;}
function ARz(a){return a.dT;}
function ALa(a,b){return 0;}
function ANI(){var b;b=new Qj;B3(b);A5I=b;}
function Hi(){var a=this;B.call(a);a.be=null;a.gR=0;a.fh=0;a.yh=0;a.mE=0;a.bi=0;a.n=0;a.ve=0;a.fv=null;a.fd=null;a.x=0;a.je=0;a.dr=0;a.io=0;a.bN=null;}
var A5N=null;var A5G=null;var A5H=0;function QZ(a,b){if(b>0&&b<3)a.fh=b;if(b==1){a.n=a.bi;a.fd=a.fv;a.x=a.io;a.io=a.dr;FD(a);}}
function Hp(a){return a.fv===null?0:1;}
function KC(a){return a.fd===null?0:1;}
function Bk(a){FD(a);return a.mE;}
function FJ(a){var b;b=a.fv;FD(a);return b;}
function FD(a){var b,c,d,e,f,g,h,$$je;a.mE=a.bi;a.bi=a.n;a.fv=a.fd;a.dr=a.io;a.io=a.x;while(true){b=0;c=a.x>=a.be.data.length?0:MB(a);a.n=c;a.fd=null;if(a.fh==4){if(c!=92)return;c=a.x;d=a.be.data;c=c>=d.length?0:d[B6(a)];a.n=c;switch(c){case 69:break;default:a.n=92;a.x=a.je;return;}a.fh=a.yh;a.n=a.x>(a.be.data.length-2|0)?0:MB(a);}a:{c=a.n;if(c!=92){e=a.fh;if(e==1)switch(c){case 36:a.n=(-536870876);break a;case 40:if(a.be.data[a.x]!=63){a.n=(-2147483608);break a;}B6(a);c=a.be.data[a.x];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.n=(-134217688);B6(a);break b;default:K(Ch(C(21),FQ(a),a.x));}a.n=(-67108824);B6(a);}else{switch(c){case 33:break;case 60:B6(a);c=a.be.data[a.x];e=1;break b;case 61:a.n=(-536870872);B6(a);break b;case 62:a.n=(-33554392);B6(a);break b;default:f=AIP(a);a.n=f;if(f<256){a.gR=f;f=f<<16;a.n=f;a.n=(-1073741784)|f;break b;}f=f&255;a.n=f;a.gR=f;f=f<<16;a.n=f;a.n=(-16777176)|f;break b;}a.n=(-268435416);B6(a);}}if(!e)break;}break a;case 41:a.n=(-536870871);break a;case 42:case 43:case 63:e
=a.x;d=a.be.data;switch(e>=d.length?42:d[e]){case 43:a.n=c|(-2147483648);B6(a);break a;case 63:a.n=c|(-1073741824);B6(a);break a;default:}a.n=c|(-536870912);break a;case 46:a.n=(-536870866);break a;case 91:a.n=(-536870821);QZ(a,2);break a;case 93:if(e!=2)break a;a.n=(-536870819);break a;case 94:a.n=(-536870818);break a;case 123:a.fd=AH8(a,c);break a;case 124:a.n=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.n=(-536870874);break a;case 45:a.n=(-536870867);break a;case 91:a.n=(-536870821);break a;case 93:a.n
=(-536870819);break a;case 94:a.n=(-536870818);break a;default:}}else{c=a.x>=(a.be.data.length-2|0)?(-1):MB(a);c:{a.n=c;switch(c){case -1:K(Ch(C(21),FQ(a),a.x));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.n
=AGn(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fh!=1)break a;a.n=(-2147483648)|c;break a;case 65:a.n=(-2147483583);break a;case 66:a.n=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:K(Ch(C(21),FQ(a),a.x));case 68:case 83:case 87:case 100:case 115:case 119:a.fd=UC(Ev(a.be,
a.je,1),0);a.n=0;break a;case 71:a.n=(-2147483577);break a;case 80:case 112:break c;case 81:a.yh=a.fh;a.fh=4;b=1;break a;case 90:a.n=(-2147483558);break a;case 97:a.n=7;break a;case 98:a.n=(-2147483550);break a;case 99:c=a.x;d=a.be.data;if(c>=(d.length-2|0))K(Ch(C(21),FQ(a),a.x));a.n=d[B6(a)]&31;break a;case 101:a.n=27;break a;case 102:a.n=12;break a;case 110:a.n=10;break a;case 114:a.n=13;break a;case 116:a.n=9;break a;case 117:a.n=R$(a,4);break a;case 120:a.n=R$(a,2);break a;case 122:a.n=(-2147483526);break a;default:}break a;}g
=AF5(a);h=0;if(a.n==80)h=1;try{a.fd=UC(g,h);}catch($$e){$$je=EA($$e);if($$je instanceof J4){K(Ch(C(21),FQ(a),a.x));}else{throw $$e;}}a.n=0;}}if(b)continue;else break;}}
function AF5(a){var b,c,d,e,f,g;b=new L;Gy(b,10);c=a.x;d=a.be;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=Ev(d,B6(a),1);f=new L;N(f);H(H(f,C(463)),b);return M(f);}B6(a);c=0;a:{while(true){g=a.x;d=a.be.data;if(g>=(d.length-2|0))break;c=d[B6(a)];if(c==125)break a;BL(b,c);}}if(c!=125)K(Ch(C(21),a.bN,a.x));}if(!b.K)K(Ch(C(21),a.bN,a.x));f=M(b);if(J(f)==1){b=new L;N(b);H(H(b,C(463)),f);return M(b);}b:{c:{if(J(f)>3){if(Lx(f,C(463)))break c;if(Lx(f,C(464)))break c;}break b;}f=Ed(f,2);}return f;}
function AH8(a,b){var c,d,e,f,g,$$je;c=new L;Gy(c,4);d=(-1);e=2147483647;a:{while(true){f=a.x;g=a.be.data;if(f>=g.length)break a;b=g[B6(a)];if(b==125)break a;if(b==44&&d<0)try{d=Kp(D7(c),10);AIg(c,0,ADf(c));continue;}catch($$e){$$je=EA($$e);if($$je instanceof Dn){break;}else{throw $$e;}}BL(c,b&65535);}K(Ch(C(21),a.bN,a.x));}if(b!=125)K(Ch(C(21),a.bN,a.x));if(c.K>0)b:{try{e=Kp(D7(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=EA($$e);if($$je instanceof Dn){}else{throw $$e;}}K(Ch(C(21),a.bN,a.x));}else if
(d<0)K(Ch(C(21),a.bN,a.x));if((d|e|(e-d|0))<0)K(Ch(C(21),a.bN,a.x));b=a.x;g=a.be.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.n=(-2147483525);B6(a);break c;case 63:a.n=(-1073741701);B6(a);break c;default:}a.n=(-536870789);}c=new Ov;c.fg=d;c.fc=e;return c;}
function FQ(a){return a.bN;}
function Dp(a){return !a.bi&&!a.n&&a.x==a.ve&&!Hp(a)?1:0;}
function Lj(b){return b<0?0:1;}
function Fy(a){return !Dp(a)&&!Hp(a)&&Lj(a.bi)?1:0;}
function Qf(a){var b;b=a.bi;return b<=56319&&b>=55296?1:0;}
function Yc(a){var b;b=a.bi;return b<=57343&&b>=56320?1:0;}
function Vp(b){return b<=56319&&b>=55296?1:0;}
function Ra(b){return b<=57343&&b>=56320?1:0;}
function R$(a,b){var c,d,e,f,$$je;c=new L;Gy(c,b);d=a.be.data.length-2|0;e=0;while(true){f=BG(e,b);if(f>=0)break;if(a.x>=d)break;BL(c,a.be.data[B6(a)]);e=e+1|0;}if(!f)a:{try{b=Kp(D7(c),16);}catch($$e){$$je=EA($$e);if($$je instanceof Dn){break a;}else{throw $$e;}}return b;}K(Ch(C(21),a.bN,a.x));}
function AGn(a){var b,c,d,e,f,g;b=3;c=1;d=a.be.data;e=d.length-2|0;f=XG(d[a.x],8);switch(f){case -1:break;default:if(f>3)b=2;B6(a);a:{while(true){if(c>=b)break a;g=a.x;if(g>=e)break a;g=XG(a.be.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B6(a);c=c+1|0;}}return f;}K(Ch(C(21),a.bN,a.x));}
function AIP(a){var b,c,d,e;b=1;c=a.gR;a:while(true){d=a.x;e=a.be.data;if(d>=e.length)K(Ch(C(21),a.bN,d));b:{c:{switch(e[d]){case 41:B6(a);return c|256;case 45:if(!b)K(Ch(C(21),a.bN,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B6(a);}B6(a);return c;}
function B6(a){var b,c,d,e,f;b=a.x;a.je=b;if(!(a.gR&4))a.x=b+1|0;else{c=a.be.data.length-2|0;a.x=b+1|0;a:while(true){d=a.x;if(d<c&&TP(a.be.data[d])){a.x=a.x+1|0;continue;}d=a.x;if(d>=c)break;e=a.be.data;if(e[d]!=35)break;a.x=d+1|0;while(true){f=a.x;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.x=f+1|0;}}}return a.je;}
function AHT(b){return A5N.IN(b);}
function MB(a){var b,c,d,e;b=a.be.data[B6(a)];if(CN(b)){c=a.je+1|0;d=a.be.data;if(c<d.length){e=d[c];if(Da(e)){B6(a);return EP(b,e);}}}return b;}
function Qe(a){return a.dr;}
function Jt(){var a=this;BR.call(a);a.Cl=null;a.BP=null;a.tQ=0;}
function Ch(a,b,c){var d=new Jt();Ka(d,a,b,c);return d;}
function Ka(a,b,c,d){X(a);a.tQ=(-1);a.Cl=b;a.BP=c;a.tQ=d;}
function P2(){var a=this;B.call(a);a.zC=null;a.zD=0.0;}
function AJW(a){var b,c;b=a.zC;c=a.zD;b.hG.nx(c);}
function AAI(){B.call(this);this.x4=null;}
function ATV(a,b){var c,d;c=a.x4;d=0;while(d<b.length){AC_(c,b[d]);d=d+1|0;}}
var AFZ=G(0);
function W_(){var a=this;B.call(a);a.s2=null;a.s3=null;a.s4=null;}
function ATw(a,b){a.s2.h(AZT(a.s3,b,a.s4));}
var Uj=G(CZ);
function AJ1(a,b,c,d){var e;e=a.dT;BW(d,e,b-Ds(d,e)|0);return a.e.c(b,c,d);}
function AVl(a,b){return 0;}
var ABr=G(CZ);
function AMg(a,b,c,d){return b;}
var Sg=G(CZ);
function ALq(a,b,c,d){if(Ds(d,a.dT)!=b)b=(-1);return b;}
function VI(){CZ.call(this);this.qw=0;}
function AJ9(a,b,c,d){var e;e=a.dT;BW(d,e,b-Ds(d,e)|0);a.qw=b;return b;}
function ATG(a,b){return 0;}
var F4=G(CZ);
function AXv(a,b,c,d){if(d.k3!=1&&b!=d.y)return (-1);d.kr=1;Kw(d,0,b);return b;}
function B9(){BP.call(this);this.bM=0;}
function DH(a){B3(a);a.bM=1;}
function AY1(a,b,c,d){var e;if((b+a.b3()|0)>d.y){d.dH=1;return (-1);}e=a.bA(b,c);if(e<0)return (-1);return a.e.c(b+e|0,c,d);}
function AWo(a){return a.bM;}
function APX(a,b){return 1;}
var AHG=G(B9);
function Hm(a){var b=new AHG();ARN(b,a);return b;}
function ARN(a,b){LK(a,b);a.bM=1;a.iT=1;a.bM=0;}
function AVO(a,b,c){return 0;}
function ANO(a,b,c,d){var e,f,g;e=d.y;f=d.cZ;while(true){g=BG(b,e);if(g>0)return (-1);if(g<0&&Da(P(c,b))&&b>f&&CN(P(c,b-1|0))){b=b+1|0;continue;}if(a.e.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AL9(a,b,c,d,e){var f,g;f=e.y;g=e.cZ;while(true){if(c<b)return (-1);if(c<f&&Da(P(d,c))&&c>g&&CN(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AJ6(a,b){return 0;}
function B4(){var a=this;BP.call(a);a.bI=null;a.eY=null;a.bb=0;}
function A0L(a,b){var c=new B4();F6(c,a,b);return c;}
function F6(a,b,c){B3(a);a.bI=b;a.eY=c;a.bb=c.dT;}
function AOF(a,b,c,d){var e,f,g,h;if(a.bI===null)return (-1);e=F_(d,a.bb);DG(d,a.bb,b);f=a.bI.m;g=0;while(true){if(g>=f){DG(d,a.bb,e);return (-1);}h=(Bw(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATy(a,b){a.eY.e=b;}
function AQU(a,b){var c;a:{c=a.bI;if(c!==null){c=B8(c);while(true){if(!B_(c))break a;if(!(Ca(c)).bX(b))continue;else return 1;}}}return 0;}
function AUn(a,b){return Jh(b,a.bb)>=0&&F_(b,a.bb)==Jh(b,a.bb)?0:1;}
function AL3(a){var b,c,d,e;a.cm=1;b=a.eY;if(b!==null&&!b.cm)JU(b);a:{b=a.bI;if(b!==null){c=b.m;d=0;while(true){if(d>=c)break a;b=Bw(a.bI,d);e=b.f3();if(e===null)e=b;else{b.cm=1;EJ(a.bI,d);Ub(a.bI,d,e);}if(!e.cm)e.eT();d=d+1|0;}}}if(a.e!==null)JU(a);}
var JK=G(B4);
function ATc(a,b,c,d){var e,f,g,h;e=Ds(d,a.bb);BW(d,a.bb,b);f=a.bI.m;g=0;while(true){if(g>=f){BW(d,a.bb,e);return (-1);}h=(Bw(a.bI,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AUO(a,b){return !Ds(b,a.bb)?0:1;}
var DZ=G(JK);
function AMQ(a,b,c,d){var e,f,g;e=Ds(d,a.bb);BW(d,a.bb,b);f=a.bI.m;g=0;while(g<f){if((Bw(a.bI,g)).c(b,c,d)>=0)return a.e.c(a.eY.qw,c,d);g=g+1|0;}BW(d,a.bb,e);return (-1);}
function AUw(a,b){a.e=b;}
var N7=G(DZ);
function ATt(a,b,c,d){var e,f;e=a.bI.m;f=0;while(f<e){if((Bw(a.bI,f)).c(b,c,d)>=0)return a.e.c(b,c,d);f=f+1|0;}return (-1);}
function AW_(a,b){return 0;}
var Zq=G(DZ);
function AK5(a,b,c,d){var e,f;e=a.bI.m;f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bI,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AWu(a,b){return 0;}
var TS=G(DZ);
function ALZ(a,b,c,d){var e,f,g,h;e=a.bI.m;f=d.ky?0:d.cZ;a:{g=a.e.c(b,c,d);if(g>=0){BW(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((Bw(a.bI,h)).cw(f,b,c,d)>=0){BW(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function AZt(a,b){return 0;}
var Wr=G(DZ);
function AJx(a,b,c,d){var e,f;e=a.bI.m;BW(d,a.bb,b);f=0;while(true){if(f>=e)return a.e.c(b,c,d);if((Bw(a.bI,f)).cw(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function AU8(a,b){return 0;}
function G5(){B4.call(this);this.da=null;}
function A1a(a,b){var c=new G5();ADV(c,a,b);return c;}
function ADV(a,b,c){B3(a);a.da=b;a.eY=c;a.bb=c.dT;}
function AJS(a,b,c,d){var e,f;e=F_(d,a.bb);DG(d,a.bb,b);f=a.da.c(b,c,d);if(f>=0)return f;DG(d,a.bb,e);return (-1);}
function ARh(a,b,c,d){var e;e=a.da.cp(b,c,d);if(e>=0)DG(d,a.bb,e);return e;}
function AVp(a,b,c,d,e){var f;f=a.da.cw(b,c,d,e);if(f>=0)DG(e,a.bb,f);return f;}
function AQN(a,b){return a.da.bX(b);}
function ATB(a){var b;b=new OC;ADV(b,a.da,a.eY);a.e=b;return b;}
function AYh(a){var b;a.cm=1;b=a.eY;if(b!==null&&!b.cm)JU(b);b=a.da;if(b!==null&&!b.cm){b=b.f3();if(b!==null){a.da.cm=1;a.da=b;}a.da.eT();}}
var Hl=G();
function W(){var a=this;Hl.call(a);a.bf=0;a.cl=0;a.N=null;a.k_=null;a.l0=null;a.O=0;}
var A5O=null;function QV(){QV=Bq(W);AMy();}
function By(a){var b;QV();b=new AAw;b.C=BJ(64);a.N=b;}
function AK8(a){return null;}
function AKt(a){return a.N;}
function AFR(a){var b,c,d,e,f;if(!a.cl)b=HV(a.N,0)>=2048?0:1;else{a:{c=a.N;b=0;d=c.bv;if(b<d){e=c.C.data;f=(e[0]^(-1))>>>0|0;if(f)b=I7(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+I7(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function AOY(a){return a.O;}
function AWg(a){return a;}
function ACZ(a){var b,c;if(a.l0===null){b=a.fs();c=new ZD;c.CP=a;c.qX=b;By(c);a.l0=c;EO(c,a.cl);}return a.l0;}
function If(a){var b,c;if(a.k_===null){b=a.fs();c=new ZC;c.Co=a;c.xH=b;c.yv=a;By(c);a.k_=c;EO(c,a.bf);a.k_.O=a.O;}return a.k_;}
function AX$(a){return 0;}
function EO(a,b){var c;c=a.bf;if(c^b){a.bf=c?0:1;a.cl=a.cl?0:1;}if(!a.O)a.O=1;return a;}
function ANW(a){return a.bf;}
function Ld(b,c){QV();return b.p(c);}
function I6(b,c){var d,e;QV();if(b.dC()!==null&&c.dC()!==null){b=b.dC();c=c.dC();d=Bc(b.C.data.length,c.C.data.length);e=0;a:{while(e<d){if(b.C.data[e]&c.C.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function UC(b,c){var d,e,f;QV();d=0;while(true){AU6();e=A5P.data;if(d>=e.length){f=new J4;Bm(f,C(21));f.C_=C(21);f.CT=b;K(f);}e=e[d].data;if(Bo(b,e[0]))break;d=d+1|0;}return AG$(e[1],c);}
function AMy(){var b;b=new HJ;AU6();A5O=b;}
function ADJ(){var a=this;W.call(a);a.nF=0;a.qu=0;a.g9=0;a.m6=0;a.ea=0;a.fW=0;a.I=null;a.bF=null;}
function Dt(){var a=new ADJ();AZe(a);return a;}
function AXi(a,b){var c=new ADJ();AMj(c,a,b);return c;}
function AZe(a){By(a);a.I=AZw();}
function AMj(a,b,c){By(a);a.I=AZw();a.nF=b;a.qu=c;}
function CD(a,b){a:{if(a.nF){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.ea){NC(a.I,Ii(b&65535));break a;}Mu(a.I,Ii(b&65535));break a;}if(a.qu&&b>128){a.g9=1;b=Hb(G_(b));}}}if(!(!Vp(b)&&!Ra(b))){if(a.m6)NC(a.N,b-55296|0);else Mu(a.N,b-55296|0);}if(a.ea)NC(a.I,b);else Mu(a.I,b);if(!a.O&&Nc(b))a.O=1;return a;}
function AIW(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(a.m6){if(!b.cl)Gp(a.N,b.fs());else Di(a.N,b.fs());}else if(!b.cl)Gk(a.N,b.fs());else{FW(a.N,b.fs());Di(a.N,b.fs());a.cl=a.cl?0:1;a.m6=1;}if(!a.fW&&b.dC()!==null){if(a.ea){if(!b.bf)Gp(a.I,b.dC());else Di(a.I,b.dC());}else if(!b.bf)Gk(a.I,b.dC());else{FW(a.I,b.dC());Di(a.I,b.dC());a.bf=a.bf?0:1;a.ea=1;}}else{c=a.bf;d=a.bF;if(d!==null){if(!c){e=new QN;e.AK=a;e.y8=c;e.ye=d;e.x1=b;By(e);a.bF=e;}else{e=new QO;e.Di=a;e.uC=c;e.ud=d;e.tr=b;By(e);a.bF=e;}}else{if(c&&!a.ea
&&Nf(a.I)){d=new QK;d.BO=a;d.up=b;By(d);a.bF=d;}else if(!c){d=new QI;d.mM=a;d.lC=c;d.rX=b;By(d);a.bF=d;}else{d=new QJ;d.nU=a;d.lM=c;d.x7=b;By(d);a.bF=d;}a.fW=1;}}return a;}
function B5(a,b,c){var d,e,f,g,h;if(b>c){d=new BR;X(d);K(d);}a:{b:{if(!a.nF){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CD(a,b);b=b+1|0;}}if(!a.ea)IF(a.I,b,c+1|0);else{d=a.I;c=c+1|0;if(b>c){d=new BD;X(d);K(d);}e=d.bv;if(b<e){f=Bc(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.C.data;h[g]=h[g]&(IZ(d,b)|Iv(d,f));}else{h=d.C.data;h[g]=h[g]&IZ(d,b);e=g+1|0;while(e<c){d.C.data[e]=0;e=e+1|0;}if(f&31){h=d.C.data;h[c]=h[c]&Iv(d,f);}}HM(d);}}}}return a;}
function ACr(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(b.g9)a.g9=1;c=a.cl;if(!(c^b.cl)){if(!c)Gk(a.N,b.N);else Di(a.N,b.N);}else if(c)Gp(a.N,b.N);else{FW(a.N,b.N);Di(a.N,b.N);a.cl=1;}if(!a.fW&&C3(b)!==null){c=a.bf;if(!(c^b.bf)){if(!c)Gk(a.I,C3(b));else Di(a.I,C3(b));}else if(c)Gp(a.I,C3(b));else{FW(a.I,C3(b));Di(a.I,C3(b));a.bf=1;}}else{c=a.bf;d=a.bF;if(d!==null){if(!c){e=new Qy;e.Au=a;e.w8=c;e.x6=d;e.yO=b;By(e);a.bF=e;}else{e=new Rr;e.AT=a;e.yH=c;e.pU=d;e.qz=b;By(e);a.bF=e;}}else{if(!a.ea&&Nf(a.I)){if(!c){d=new QL;d.Dj
=a;d.ta=b;By(d);a.bF=d;}else{d=new QM;d.AX=a;d.yt=b;By(d);a.bF=d;}}else if(!c){d=new QP;d.xb=a;d.uS=b;d.uh=c;By(d);a.bF=d;}else{d=new QQ;d.vi=a;d.vI=b;d.vZ=c;By(d);a.bF=d;}a.fW=1;}}}
function AAb(a,b){var c,d,e;if(!a.O&&b.O)a.O=1;if(b.g9)a.g9=1;c=a.cl;if(!(c^b.cl)){if(!c)Di(a.N,b.N);else Gk(a.N,b.N);}else if(!c)Gp(a.N,b.N);else{FW(a.N,b.N);Di(a.N,b.N);a.cl=0;}if(!a.fW&&C3(b)!==null){c=a.bf;if(!(c^b.bf)){if(!c)Di(a.I,C3(b));else Gk(a.I,C3(b));}else if(!c)Gp(a.I,C3(b));else{FW(a.I,C3(b));Di(a.I,C3(b));a.bf=0;}}else{c=a.bf;d=a.bF;if(d!==null){if(!c){e=new QA;e.AJ=a;e.xf=c;e.qU=d;e.ux=b;By(e);a.bF=e;}else{e=new QB;e.A3=a;e.wi=c;e.pH=d;e.w6=b;By(e);a.bF=e;}}else{if(!a.ea&&Nf(a.I)){if(!c){d=new Qw;d.AY
=a;d.sB=b;By(d);a.bF=d;}else{d=new Qx;d.Df=a;d.sK=b;By(d);a.bF=d;}}else if(!c){d=new QC;d.z7=a;d.y5=b;d.vy=c;By(d);a.bF=d;}else{d=new Qv;d.vw=a;d.wB=b;d.uD=c;By(d);a.bF=d;}a.fW=1;}}}
function C8(a,b){var c;c=a.bF;if(c!==null)return a.bf^c.p(b);return a.bf^DB(a.I,b);}
function C3(a){if(!a.fW)return a.I;return null;}
function ANH(a){return a.N;}
function AWP(a){var b,c;if(a.bF!==null)return a;b=C3(a);c=new Qz;c.Al=a;c.j4=b;By(c);return EO(c,a.bf);}
function ASn(a){var b,c,d;b=new L;N(b);c=HV(a.I,0);while(c>=0){I$(b,G3(c));BL(b,124);c=HV(a.I,c+1|0);}d=b.K;if(d>0)Zr(b,d-1|0);return M(b);}
function AN0(a){return a.g9;}
function J4(){var a=this;Bt.call(a);a.C_=null;a.CT=null;}
function El(){BP.call(this);this.M=null;}
function Dm(a,b,c,d){LK(a,c);a.M=b;a.iT=d;}
function AZd(a){return a.M;}
function AVq(a,b){return !a.M.bX(b)&&!a.e.bX(b)?0:1;}
function AXk(a,b){return 1;}
function ARJ(a){var b;a.cm=1;b=a.e;if(b!==null&&!b.cm){b=b.f3();if(b!==null){a.e.cm=1;a.e=b;}a.e.eT();}b=a.M;if(b!==null){if(!b.cm){b=b.f3();if(b!==null){a.M.cm=1;a.M=b;}a.M.eT();}else if(b instanceof G5&&b.eY.l7)a.M=b.e;}}
function C9(){El.call(this);this.bc=null;}
function A1f(a,b,c){var d=new C9();Fl(d,a,b,c);return d;}
function Fl(a,b,c,d){Dm(a,b,c,d);a.bc=b;}
function AJz(a,b,c,d){var e,f;e=0;a:{while((b+a.bc.b3()|0)<=d.y){f=a.bc.bA(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.e.c(b,c,d);if(f>=0)break;b=b-a.bc.b3()|0;e=e+(-1)|0;}return f;}
function FF(){C9.call(this);this.k2=null;}
function A0h(a,b,c,d){var e=new FF();UM(e,a,b,c,d);return e;}
function UM(a,b,c,d,e){Fl(a,c,d,e);a.k2=b;}
function AKL(a,b,c,d){var e,f,g,h,i;e=a.k2;f=e.fg;g=e.fc;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bc.b3()|0)>d.y)break a;i=a.bc.bA(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.e.c(b,c,d);if(i>=0)break;b=b-a.bc.b3()|0;h=h+(-1)|0;}return i;}if((b+a.bc.b3()|0)>d.y){d.dH=1;return (-1);}i=a.bc.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var C0=G(El);
function AJR(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
var EW=G(C9);
function ARq(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)e=a.e.c(b,c,d);return e;}
function AZy(a,b){a.e=b;a.M.R(b);}
var ZE=G(C9);
function AYR(a,b,c,d){while((b+a.bc.b3()|0)<=d.y&&a.bc.bA(b,c)>0){b=b+a.bc.b3()|0;}return a.e.c(b,c,d);}
function ASh(a,b,c,d){var e,f,g;e=a.e.cp(b,c,d);if(e<0)return (-1);f=e-a.bc.b3()|0;while(f>=b&&a.bc.bA(f,c)>0){g=f-a.bc.b3()|0;e=f;f=g;}return e;}
function Bf(){var a=this;B.call(a);a.n3=null;a.mG=null;}
function AG$(a,b){if(!b&&a.n3===null)a.n3=a.E();else if(b&&a.mG===null)a.mG=EO(a.E(),1);if(b)return a.mG;return a.n3;}
var Dn=G(BR);
function Ov(){var a=this;Hl.call(a);a.fg=0;a.fc=0;}
function ASs(a){var b,c,d,e,f;b=a.fg;c=a.fc;d=c!=2147483647?Mj(c):C(21);e=new L;N(e);BL(e,123);f=U(e,b);BL(f,44);BL(H(f,d),125);return M(e);}
var Qj=G(BP);
function AQp(a,b,c,d){return b;}
function ATx(a,b){return 0;}
function AAw(){var a=this;B.call(a);a.C=null;a.bv=0;}
function AZw(){var a=new AAw();ALN(a);return a;}
function ALN(a){a.C=BJ(0);}
function Mu(a,b){var c,d;c=b/32|0;if(b>=a.bv){Jb(a,c+1|0);a.bv=b+1|0;}d=a.C.data;d[c]=d[c]|1<<(b%32|0);}
function IF(a,b,c){var d,e,f,g,h;d=BG(b,c);if(d>0){e=new BD;X(e);K(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bv){Jb(a,f+1|0);a.bv=c;}if(d==f){g=a.C.data;g[d]=g[d]|Iv(a,b)&IZ(a,c);}else{g=a.C.data;g[d]=g[d]|Iv(a,b);h=d+1|0;while(h<f){a.C.data[h]=(-1);h=h+1|0;}if(c&31){g=a.C.data;g[f]=g[f]|IZ(a,c);}}}
function Iv(a,b){return (-1)<<(b%32|0);}
function IZ(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function NC(a,b){var c,d,e,f;c=b/32|0;d=a.C.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bv-1|0))HM(a);}}
function DB(a,b){var c,d;c=b/32|0;d=a.C.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function HV(a,b){var c,d,e,f;c=a.bv;if(b>=c)return (-1);d=b/32|0;e=a.C.data;f=e[d]>>>(b%32|0)|0;if(f)return I7(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+I7(e[f])|0;f=f+1|0;}return (-1);}
function Jb(a,b){var c;c=a.C.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.C=JI(a.C,c);}
function HM(a){var b,c,d;b=(a.bv+31|0)/32|0;a.bv=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=PB(a.C.data[c]);if(d<32)break;c=c+(-1)|0;a.bv=a.bv-32|0;}a.bv=a.bv-d|0;}}
function Di(a,b){var c,d,e,f;c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&b.C.data[d];d=d+1|0;}while(true){f=a.C.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bv=Bc(a.bv,b.bv);HM(a);}
function Gp(a,b){var c,d,e;c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]&(b.C.data[d]^(-1));d=d+1|0;}HM(a);}
function Gk(a,b){var c,d,e;c=Bd(a.bv,b.bv);a.bv=c;Jb(a,(c+31|0)/32|0);c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]|b.C.data[d];d=d+1|0;}}
function FW(a,b){var c,d,e;c=Bd(a.bv,b.bv);a.bv=c;Jb(a,(c+31|0)/32|0);c=Bc(a.C.data.length,b.C.data.length);d=0;while(d<c){e=a.C.data;e[d]=e[d]^b.C.data[d];d=d+1|0;}HM(a);}
function Nf(a){return a.bv?0:1;}
function Oh(){var a=this;B4.call(a);a.sQ=null;a.Ak=0;}
function S5(){var a=this;B4.call(a);a.ov=null;a.nW=null;}
function AGA(a,b){var c=new S5();AIF(c,a,b);return c;}
function AIF(a,b,c){B3(a);a.ov=b;a.nW=c;}
function AKF(a,b,c,d){var e,f,g,h,i;e=a.ov.c(b,c,d);if(e<0)a:{f=a.nW;g=d.cZ;e=d.y;h=b+1|0;e=BG(h,e);if(e>0){d.dH=1;e=(-1);}else{i=P(c,b);if(!f.sQ.p(i))e=(-1);else{if(CN(i)){if(e<0&&Da(P(c,h))){e=(-1);break a;}}else if(Da(i)&&b>g&&CN(P(c,b-1|0))){e=(-1);break a;}e=f.e.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function ATa(a,b){a.e=b;a.nW.e=b;a.ov.R(b);}
function ALy(a,b){return 1;}
function AK7(a,b){return 1;}
function DM(){var a=this;B4.call(a);a.d0=null;a.BF=0;}
function AQl(a){var b=new DM();Xj(b,a);return b;}
function Xj(a,b){B3(a);a.d0=b.kI();a.BF=b.bf;}
function ANw(a,b,c,d){var e,f,g,h;e=d.y;if(b<e){f=b+1|0;g=P(c,b);if(a.p(g)){h=a.e.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=P(c,f);if(H5(g,f)&&a.p(EP(g,f)))return a.e.c(b,c,d);}}return (-1);}
function AOe(a,b){return a.d0.p(b);}
function AKA(a,b){if(b instanceof D9)return Ld(a.d0,b.gs);if(b instanceof EI)return Ld(a.d0,b.dz);if(b instanceof DM)return I6(a.d0,b.d0);if(!(b instanceof Ex))return 1;return I6(a.d0,b.fK);}
function AP_(a){return a.d0;}
function AV7(a,b){a.e=b;}
function ANL(a,b){return 1;}
var J1=G(DM);
function APY(a,b){return a.d0.p(Hb(G_(b)));}
function ADw(){var a=this;B9.call(a);a.tI=null;a.Bm=0;}
function AO0(a){var b=new ADw();ASD(b,a);return b;}
function ASD(a,b){DH(a);a.tI=b.kI();a.Bm=b.bf;}
function AQq(a,b,c){return !a.tI.p(Ft(EV(P(c,b))))?(-1):1;}
function Ex(){var a=this;B9.call(a);a.fK=null;a.B6=0;}
function AWG(a){var b=new Ex();AT4(b,a);return b;}
function AT4(a,b){DH(a);a.fK=b.kI();a.B6=b.bf;}
function NJ(a,b,c){return !a.fK.p(P(c,b))?(-1):1;}
function ATA(a,b){if(b instanceof EI)return Ld(a.fK,b.dz);if(b instanceof Ex)return I6(a.fK,b.fK);if(!(b instanceof DM)){if(!(b instanceof D9))return 1;return 0;}return I6(a.fK,b.d0);}
function QW(){var a=this;B4.call(a);a.hy=null;a.og=null;a.k0=0;}
function AWW(a,b){var c=new QW();AJT(c,a,b);return c;}
function AJT(a,b,c){B3(a);a.hy=b;a.k0=c;}
function ARo(a,b){a.e=b;}
function Te(a){if(a.og===null)a.og=Gr(a.hy);return a.og;}
function AJo(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.y;f=BJ(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DD([k,l]):DD([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.k0;if(b!=n)return (-1);while(true){if(l>=n)return a.e.c(i,c,d);if(m[l]!=a.hy.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.k0==3){k=f[0];m=a.hy.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.e.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.k0==2){b=f[0];m=a.hy.data;if(b==m[0]&&f[1]==m[1]){b=a.e.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function ALl(a,b){return b instanceof QW&&!Bo(Te(b),Te(a))?0:1;}
function AWU(a,b){return 1;}
function EI(){B9.call(this);this.dz=0;}
function AD4(a){var b=new EI();AUa(b,a);return b;}
function AUa(a,b){DH(a);a.dz=b;}
function AP6(a){return 1;}
function AOU(a,b,c){return a.dz!=P(c,b)?(-1):1;}
function ANr(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Im(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=I4(c,a.dz,b);if(f<0)return (-1);g=a.e;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function AQd(a,b,c,d,e){var f;if(!(d instanceof BC))return Iz(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=H$(d,a.dz,c);if(f<0)break a;if(f<b)break a;if(a.e.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AWK(a,b){if(b instanceof EI)return b.dz!=a.dz?0:1;if(!(b instanceof Ex)){if(b instanceof DM)return b.p(a.dz);if(!(b instanceof D9))return 1;return 0;}return NJ(b,0,AAx(a.dz))<=0?0:1;}
function AIk(){B9.call(this);this.pm=0;}
function AUz(a){var b=new AIk();ASc(b,a);return b;}
function ASc(a,b){DH(a);a.pm=Ft(EV(b));}
function AJd(a,b,c){return a.pm!=Ft(EV(P(c,b)))?(-1):1;}
function ACt(){var a=this;B9.call(a);a.yU=0;a.qO=0;}
function ALW(a){var b=new ACt();AU1(b,a);return b;}
function AU1(a,b){DH(a);a.yU=b;a.qO=Ii(b);}
function AJH(a,b,c){return a.yU!=P(c,b)&&a.qO!=P(c,b)?(-1):1;}
function FN(){var a=this;B4.call(a);a.iG=0;a.mu=null;a.lF=null;a.lw=0;}
function A17(a,b){var c=new FN();P4(c,a,b);return c;}
function P4(a,b,c){B3(a);a.iG=1;a.lF=b;a.lw=c;}
function AYg(a,b){a.e=b;}
function ATb(a,b,c,d){var e,f,g,h,i,j,k,l;e=BJ(4);f=d.y;if(b>=f)return (-1);g=Lt(a,b,c,f);h=b+a.iG|0;i=AHT(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;DC(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Lt(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AHT(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.iG|0;if(h>=f){b=k;break a;}g=Lt(a,h,c,f);b=k;}}}if(b!=a.lw)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.e.c(h,c,d);if(i[g]!=a.lF.data[g])break;g=g+1|0;}return (-1);}
function Z_(a){var b,c;if(a.mu===null){b=new L;N(b);c=0;while(c<a.lw){I$(b,G3(a.lF.data[c]));c=c+1|0;}a.mu=M(b);}return a.mu;}
function Lt(a,b,c,d){var e,f,g;a.iG=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(H5(e,f)){g=B1(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CN(g[0])&&Da(g[1])?EP(g[0],g[1]):g[0];a.iG=2;}}return e;}
function AQs(a,b){return b instanceof FN&&!Bo(Z_(b),Z_(a))?0:1;}
function AUx(a,b){return 1;}
var AA7=G(FN);
var WI=G(FN);
var ACf=G(C0);
function AMo(a,b,c,d){var e;while(true){e=a.M.c(b,c,d);if(e<=0)break;b=e;}return a.e.c(b,c,d);}
var R8=G(C0);
function AR5(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.M.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.e.c(b,c,d);}
var Gn=G(C0);
function AV4(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.M.c(b,c,d);if(e>=0)return e;return a.e.c(b,c,d);}
function AXB(a,b){a.e=b;a.M.R(b);}
var RF=G(Gn);
function AP9(a,b,c,d){var e;e=a.M.c(b,c,d);if(e<=0)e=b;return a.e.c(e,c,d);}
function ASw(a,b){a.e=b;}
function FL(){var a=this;C0.call(a);a.gH=null;a.dJ=0;}
function A5Q(a,b,c,d,e){var f=new FL();JZ(f,a,b,c,d,e);return f;}
function JZ(a,b,c,d,e,f){Dm(a,c,d,e);a.gH=b;a.dJ=f;}
function AZp(a,b,c,d){var e,f;e=Om(d,a.dJ);if(!a.M.L(d))return a.e.c(b,c,d);if(e>=a.gH.fc)return a.e.c(b,c,d);f=a.dJ;e=e+1|0;Ew(d,f,e);f=a.M.c(b,c,d);if(f>=0){Ew(d,a.dJ,0);return f;}f=a.dJ;e=e+(-1)|0;Ew(d,f,e);if(e>=a.gH.fg)return a.e.c(b,c,d);Ew(d,a.dJ,0);return (-1);}
var OK=G(FL);
function APq(a,b,c,d){var e,f,g;e=0;f=a.gH.fc;a:{while(true){g=a.M.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gH.fg)return (-1);return a.e.c(b,c,d);}
var Uc=G(C0);
function AYq(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var Td=G(Gn);
function ALB(a,b,c,d){var e;if(!a.M.L(d))return a.e.c(b,c,d);e=a.e.c(b,c,d);if(e<0)e=a.M.c(b,c,d);return e;}
var XN=G(FL);
function AKh(a,b,c,d){var e,f,g;e=Om(d,a.dJ);if(!a.M.L(d))return a.e.c(b,c,d);f=a.gH;if(e>=f.fc){Ew(d,a.dJ,0);return a.e.c(b,c,d);}if(e<f.fg){Ew(d,a.dJ,e+1|0);g=a.M.c(b,c,d);}else{g=a.e.c(b,c,d);if(g>=0){Ew(d,a.dJ,0);return g;}Ew(d,a.dJ,e+1|0);g=a.M.c(b,c,d);}return g;}
var Ud=G(El);
function AY$(a,b,c,d){var e;e=d.y;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function AWj(a,b,c,d){var e;e=d.y;if(a.e.cw(b,e,c,d)>=0)return b;return (-1);}
function Qu(){El.call(this);this.mD=null;}
function ATC(a,b,c,d){var e,f;e=d.y;f=XP(a,b,e,c);if(f>=0)e=f;if(e>b)return a.e.cw(b,e,c,d);return a.e.c(b,c,d);}
function AJs(a,b,c,d){var e,f,g,h;e=d.y;f=a.e.cp(b,c,d);if(f<0)return (-1);g=XP(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.e.cw(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.mD.iO(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function XP(a,b,c,d){while(true){if(b>=c)return (-1);if(a.mD.iO(P(d,b)))break;b=b+1|0;}return b;}
var Ff=G();
var A5R=null;var A5S=null;function RI(b){var c;if(!(b&1)){c=A5S;if(c!==null)return c;c=new Yj;A5S=c;return c;}c=A5R;if(c!==null)return c;c=new Yi;A5R=c;return c;}
var ACg=G(C9);
function AKi(a,b,c,d){var e;a:{while(true){if((b+a.bc.b3()|0)>d.y)break a;e=a.bc.bA(b,c);if(e<1)break;b=b+e|0;}}return a.e.c(b,c,d);}
var ZA=G(EW);
function AR2(a,b,c,d){var e;if((b+a.bc.b3()|0)<=d.y){e=a.bc.bA(b,c);if(e>=1)b=b+e|0;}return a.e.c(b,c,d);}
var Rl=G(FF);
function AVt(a,b,c,d){var e,f,g,h,i;e=a.k2;f=e.fg;g=e.fc;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bc.b3()|0)>d.y)break a;i=a.bc.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.e.c(b,c,d);}if((b+a.bc.b3()|0)>d.y){d.dH=1;return (-1);}i=a.bc.bA(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var S$=G(C9);
function ATv(a,b,c,d){var e;while(true){e=a.e.c(b,c,d);if(e>=0)break;if((b+a.bc.b3()|0)<=d.y){e=a.bc.bA(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var WY=G(EW);
function AKx(a,b,c,d){var e;e=a.e.c(b,c,d);if(e>=0)return e;return a.M.c(b,c,d);}
var TT=G(FF);
function AVR(a,b,c,d){var e,f,g,h,i,j;e=a.k2;f=e.fg;g=e.fc;h=0;while(true){if(h>=f){a:{while(true){i=a.e.c(b,c,d);if(i>=0)break;if((b+a.bc.b3()|0)<=d.y){i=a.bc.bA(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bc.b3()|0)>d.y){d.dH=1;return (-1);}j=a.bc.bA(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var Lq=G(BP);
function AQS(a,b,c,d){if(b&&!(d.fZ&&b==d.cZ))return (-1);return a.e.c(b,c,d);}
function APG(a,b){return 0;}
function AEe(){BP.call(this);this.yg=0;}
function AWF(a){var b=new AEe();AP1(b,a);return b;}
function AP1(a,b){B3(a);a.yg=b;}
function AK2(a,b,c,d){var e,f,g;e=b<d.y?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.ky?0:d.cZ;return (e!=32&&!Th(a,e,b,g,c)?0:1)^(f!=32&&!Th(a,f,b-1|0,g,c)?0:1)^a.yg?(-1):a.e.c(b,c,d);}
function ALh(a,b){return 0;}
function Th(a,b,c,d,e){var f;if(!Km(b)&&b!=95){a:{if(CA(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Km(f))return 0;if(CA(f)!=6)return 1;}}return 1;}return 0;}
var Qp=G(BP);
function AP0(a,b,c,d){if(b!=d.iY)return (-1);return a.e.c(b,c,d);}
function AZi(a,b){return 0;}
function AAE(){BP.call(this);this.gS=0;}
function A1y(a){var b=new AAE();AHH(b,a);return b;}
function AHH(a,b){B3(a);a.gS=b;}
function AUe(a,b,c,d){var e,f,g;e=!d.fZ?J(c):d.y;if(b>=e){BW(d,a.gS,0);return a.e.c(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){BW(d,a.gS,0);return a.e.c(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}BW(d,a.gS,0);return a.e.c(b,c,d);}
function AMa(a,b){var c;c=!Ds(b,a.gS)?0:1;BW(b,a.gS,(-1));return c;}
var Z2=G(BP);
function AS7(a,b,c,d){if(b<(d.ky?J(c):d.y))return (-1);d.dH=1;d.Cy=1;return a.e.c(b,c,d);}
function AJa(a,b){return 0;}
function O2(){BP.call(this);this.uJ=null;}
function AL1(a,b,c,d){a:{if(b!=d.y){if(!b)break a;if(d.fZ&&b==d.cZ)break a;if(a.uJ.wt(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.e.c(b,c,d);}
function AOu(a,b){return 0;}
var AH3=G(B4);
function A1T(){var a=new AH3();ASQ(a);return a;}
function ASQ(a){B3(a);}
function AYA(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dH=1;return (-1);}g=P(c,b);if(CN(g)){h=b+2|0;if(h<=e&&H5(g,P(c,f)))return a.e.c(h,c,d);}return a.e.c(f,c,d);}
function ALn(a,b){a.e=b;}
function ASE(a){return (-2147483602);}
function ALm(a,b){return 1;}
function ADH(){B4.call(this);this.ne=null;}
function A1p(a){var b=new ADH();AL$(b,a);return b;}
function AL$(a,b){B3(a);a.ne=b;}
function ASW(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;if(f>e){d.dH=1;return (-1);}g=P(c,b);if(CN(g)){b=b+2|0;if(b<=e){h=P(c,f);if(H5(g,h))return a.ne.iO(EP(g,h))?(-1):a.e.c(b,c,d);}}return a.ne.iO(g)?(-1):a.e.c(f,c,d);}
function AVg(a,b){a.e=b;}
function AI6(a){return (-2147483602);}
function AYY(a,b){return 1;}
function AHQ(){BP.call(this);this.iw=0;}
function A0R(a){var b=new AHQ();AOq(b,a);return b;}
function AOq(a,b){B3(a);a.iw=b;}
function AQz(a,b,c,d){var e;e=!d.fZ?J(c):d.y;if(b>=e){BW(d,a.iw,0);return a.e.c(b,c,d);}if((e-b|0)==1&&P(c,b)==10){BW(d,a.iw,1);return a.e.c(b+1|0,c,d);}return (-1);}
function AOp(a,b){var c;c=!Ds(b,a.iw)?0:1;BW(b,a.iw,(-1));return c;}
function AFX(){BP.call(this);this.iF=0;}
function A0x(a){var b=new AFX();AO1(b,a);return b;}
function AO1(a,b){B3(a);a.iF=b;}
function AS4(a,b,c,d){if((!d.fZ?J(c)-b|0:d.y-b|0)<=0){BW(d,a.iF,0);return a.e.c(b,c,d);}if(P(c,b)!=10)return (-1);BW(d,a.iF,1);return a.e.c(b+1|0,c,d);}
function AOa(a,b){var c;c=!Ds(b,a.iF)?0:1;BW(b,a.iF,(-1));return c;}
function ACq(){BP.call(this);this.ge=0;}
function AZS(a){var b=new ACq();AZs(b,a);return b;}
function AZs(a,b){B3(a);a.ge=b;}
function APt(a,b,c,d){var e,f,g;e=!d.fZ?J(c)-b|0:d.y-b|0;if(!e){BW(d,a.ge,0);return a.e.c(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:BW(d,a.ge,0);return a.e.c(b,c,d);case 13:if(g!=10){BW(d,a.ge,0);return a.e.c(b,c,d);}BW(d,a.ge,0);return a.e.c(b,c,d);default:}return (-1);}
function AMe(a,b){var c;c=!Ds(b,a.ge)?0:1;BW(b,a.ge,(-1));return c;}
function HK(){var a=this;B4.call(a);a.ql=0;a.ht=0;}
function A11(a,b){var c=new HK();Q$(c,a,b);return c;}
function Q$(a,b,c){B3(a);a.ql=b;a.ht=c;}
function AKp(a,b,c,d){var e,f,g,h;e=GJ(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BW(d,a.ht,J(e));return a.e.c(b+J(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Ii(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function AUt(a,b){a.e=b;}
function GJ(a,b){var c,d;c=a.ql;d=F_(b,c);c=Jh(b,c);return (c|d|(c-d|0))>=0&&c<=J(b.nj)?Cr(b.nj,d,c):null;}
function AUR(a,b){var c;c=!Ds(b,a.ht)?0:1;BW(b,a.ht,(-1));return c;}
var AHX=G(HK);
function AZX(a,b){var c=new AHX();AXm(c,a,b);return c;}
function AXm(a,b,c){Q$(a,b,c);}
function AMm(a,b,c,d){var e,f;e=GJ(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=!Xi(c,e,b)?(-1):J(e);if(f<0)return (-1);BW(d,a.ht,f);return a.e.c(b+f|0,c,d);}return (-1);}
function AW8(a,b,c,d){var e,f;e=GJ(a,d);f=d.cZ;if(e!==null&&(b+J(e)|0)<=f){while(true){if(b>f)return (-1);b=R9(c,e,b);if(b<0)return (-1);if(a.e.c(b+J(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AJ2(a,b,c,d,e){var f,g;f=GJ(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Sl(d,f,c);if(g<0)break a;if(g<b)break a;if(a.e.c(g+J(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function ARR(a,b){return 1;}
var AEX=G(HK);
function A0y(a,b){var c=new AEX();AOl(c,a,b);return c;}
function AOl(a,b,c){Q$(a,b,c);}
function ARa(a,b,c,d){var e,f;e=GJ(a,d);if(e!==null&&(b+J(e)|0)<=d.y){f=0;while(true){if(f>=J(e)){BW(d,a.ht,J(e));return a.e.c(b+J(e)|0,c,d);}if(Ft(EV(P(e,f)))!=Ft(EV(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
var Qi=G(GT);
function AN3(a,b,c,d,e){Oz(a,b,c,d,e);return a;}
function AK$(a,b,c,d){AAU(a,b,c,d);return a;}
function ALM(a,b){Kv(a,b);}
function AWn(a,b,c){AA_(a,b,c);return a;}
function Uf(){var a=this;B9.call(a);a.cC=null;a.mx=null;a.ns=null;}
function AMM(a,b,c){return !Lp(a,c,b)?(-1):a.bM;}
function AKY(a,b,c,d){var e,f,g;e=d.y;while(true){if(b>e)return (-1);f=P(a.cC,a.bM-1|0);a:{while(true){g=a.bM;if(b>(e-g|0)){b=(-1);break a;}g=P(c,(b+g|0)-1|0);if(g==f&&Lp(a,c,b))break;b=b+Vw(a.mx,g)|0;}}if(b<0)return (-1);if(a.e.c(b+a.bM|0,c,d)>=0)break;b=b+1|0;}return b;}
function AOt(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=P(a.cC,0);g=(J(d)-c|0)-a.bM|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=P(d,c);if(g==f&&Lp(a,d,c))break;c=c-Vw(a.ns,g)|0;}}if(c<0)return (-1);if(a.e.c(c+a.bM|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AO8(a,b){var c;if(b instanceof EI)return b.dz!=P(a.cC,0)?0:1;if(b instanceof Ex)return NJ(b,0,Cr(a.cC,0,1))<=0?0:1;if(!(b instanceof DM)){if(!(b instanceof D9))return 1;return J(a.cC)>1&&b.gs==EP(P(a.cC,0),P(a.cC,1))?1:0;}a:{b:{b=b;if(!b.p(P(a.cC,0))){if(J(a.cC)<=1)break b;if(!b.p(EP(P(a.cC,0),P(a.cC,1))))break b;}c=1;break a;}c=0;}return c;}
function Lp(a,b,c){var d;d=0;while(d<a.bM){if(P(b,d+c|0)!=P(a.cC,d))return 0;d=d+1|0;}return 1;}
function ACp(){B9.call(this);this.kD=null;}
function A16(a){var b=new ACp();AWL(b,a);return b;}
function AWL(a,b){var c,d,e;DH(a);c=new L;N(c);d=0;while(true){e=BG(d,b.K);if(e>=0){a.kD=M(c);a.bM=c.K;return;}if(d<0)break;if(e>=0)break;BL(c,Ft(EV(b.B.data[d])));d=d+1|0;}b=new BD;X(b);K(b);}
function ARj(a,b,c){var d;d=0;while(true){if(d>=J(a.kD))return J(a.kD);if(P(a.kD,d)!=Ft(EV(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function OQ(){B9.call(this);this.ir=null;}
function AVw(a,b,c){var d,e,f;d=0;while(true){if(d>=J(a.ir))return J(a.ir);e=P(a.ir,d);f=b+d|0;if(e!=P(c,f)&&Ii(P(a.ir,d))!=P(c,f))break;d=d+1|0;}return (-1);}
var HJ=G();
var A5T=null;var A5U=null;var A5P=null;function AU6(){AU6=Bq(HJ);ANc();}
function ANc(){A5T=A1I();A5U=A0K();A5P=I($rt_arraycls(B),[I(B,[C(465),A12()]),I(B,[C(466),AZP()]),I(B,[C(467),A1F()]),I(B,[C(468),A1M()]),I(B,[C(469),A5U]),I(B,[C(470),A0W()]),I(B,[C(471),A0H()]),I(B,[C(472),AZ0()]),I(B,[C(473),AZW()]),I(B,[C(474),AZ6()]),I(B,[C(475),A0j()]),I(B,[C(476),AZ4()]),I(B,[C(477),A1e()]),I(B,[C(478),AZJ()]),I(B,[C(479),A1J()]),I(B,[C(480),A0i()]),I(B,[C(481),A0U()]),I(B,[C(482),A0g()]),I(B,[C(483),A0V()]),I(B,[C(484),AZ9()]),I(B,[C(485),A1S()]),I(B,[C(486),AZ_()]),I(B,[C(487),A00()]),
I(B,[C(488),A1D()]),I(B,[C(489),A1z()]),I(B,[C(490),A1N()]),I(B,[C(491),AZ8()]),I(B,[C(492),A1n()]),I(B,[C(493),A5T]),I(B,[C(494),A05()]),I(B,[C(495),AZ2()]),I(B,[C(496),A5T]),I(B,[C(497),AZG()]),I(B,[C(498),A5U]),I(B,[C(499),A0s()]),I(B,[C(500),R(0,127)]),I(B,[C(501),R(128,255)]),I(B,[C(502),R(256,383)]),I(B,[C(503),R(384,591)]),I(B,[C(504),R(592,687)]),I(B,[C(505),R(688,767)]),I(B,[C(506),R(768,879)]),I(B,[C(507),R(880,1023)]),I(B,[C(508),R(1024,1279)]),I(B,[C(509),R(1280,1327)]),I(B,[C(510),R(1328,1423)]),
I(B,[C(511),R(1424,1535)]),I(B,[C(512),R(1536,1791)]),I(B,[C(513),R(1792,1871)]),I(B,[C(514),R(1872,1919)]),I(B,[C(515),R(1920,1983)]),I(B,[C(516),R(2304,2431)]),I(B,[C(517),R(2432,2559)]),I(B,[C(518),R(2560,2687)]),I(B,[C(519),R(2688,2815)]),I(B,[C(520),R(2816,2943)]),I(B,[C(521),R(2944,3071)]),I(B,[C(522),R(3072,3199)]),I(B,[C(523),R(3200,3327)]),I(B,[C(524),R(3328,3455)]),I(B,[C(525),R(3456,3583)]),I(B,[C(526),R(3584,3711)]),I(B,[C(527),R(3712,3839)]),I(B,[C(528),R(3840,4095)]),I(B,[C(529),R(4096,4255)]),
I(B,[C(530),R(4256,4351)]),I(B,[C(531),R(4352,4607)]),I(B,[C(532),R(4608,4991)]),I(B,[C(533),R(4992,5023)]),I(B,[C(534),R(5024,5119)]),I(B,[C(535),R(5120,5759)]),I(B,[C(536),R(5760,5791)]),I(B,[C(537),R(5792,5887)]),I(B,[C(538),R(5888,5919)]),I(B,[C(539),R(5920,5951)]),I(B,[C(540),R(5952,5983)]),I(B,[C(541),R(5984,6015)]),I(B,[C(542),R(6016,6143)]),I(B,[C(543),R(6144,6319)]),I(B,[C(544),R(6400,6479)]),I(B,[C(545),R(6480,6527)]),I(B,[C(546),R(6528,6623)]),I(B,[C(547),R(6624,6655)]),I(B,[C(548),R(6656,6687)]),
I(B,[C(549),R(7424,7551)]),I(B,[C(550),R(7552,7615)]),I(B,[C(551),R(7616,7679)]),I(B,[C(552),R(7680,7935)]),I(B,[C(553),R(7936,8191)]),I(B,[C(554),R(8192,8303)]),I(B,[C(555),R(8304,8351)]),I(B,[C(556),R(8352,8399)]),I(B,[C(557),R(8400,8447)]),I(B,[C(558),R(8448,8527)]),I(B,[C(559),R(8528,8591)]),I(B,[C(560),R(8592,8703)]),I(B,[C(561),R(8704,8959)]),I(B,[C(562),R(8960,9215)]),I(B,[C(563),R(9216,9279)]),I(B,[C(564),R(9280,9311)]),I(B,[C(565),R(9312,9471)]),I(B,[C(566),R(9472,9599)]),I(B,[C(567),R(9600,9631)]),
I(B,[C(568),R(9632,9727)]),I(B,[C(569),R(9728,9983)]),I(B,[C(570),R(9984,10175)]),I(B,[C(571),R(10176,10223)]),I(B,[C(572),R(10224,10239)]),I(B,[C(573),R(10240,10495)]),I(B,[C(574),R(10496,10623)]),I(B,[C(575),R(10624,10751)]),I(B,[C(576),R(10752,11007)]),I(B,[C(577),R(11008,11263)]),I(B,[C(578),R(11264,11359)]),I(B,[C(579),R(11392,11519)]),I(B,[C(580),R(11520,11567)]),I(B,[C(581),R(11568,11647)]),I(B,[C(582),R(11648,11743)]),I(B,[C(583),R(11776,11903)]),I(B,[C(584),R(11904,12031)]),I(B,[C(585),R(12032,12255)]),
I(B,[C(586),R(12272,12287)]),I(B,[C(587),R(12288,12351)]),I(B,[C(588),R(12352,12447)]),I(B,[C(589),R(12448,12543)]),I(B,[C(590),R(12544,12591)]),I(B,[C(591),R(12592,12687)]),I(B,[C(592),R(12688,12703)]),I(B,[C(593),R(12704,12735)]),I(B,[C(594),R(12736,12783)]),I(B,[C(595),R(12784,12799)]),I(B,[C(596),R(12800,13055)]),I(B,[C(597),R(13056,13311)]),I(B,[C(598),R(13312,19893)]),I(B,[C(599),R(19904,19967)]),I(B,[C(600),R(19968,40959)]),I(B,[C(601),R(40960,42127)]),I(B,[C(602),R(42128,42191)]),I(B,[C(603),R(42752,
42783)]),I(B,[C(604),R(43008,43055)]),I(B,[C(605),R(44032,55203)]),I(B,[C(606),R(55296,56191)]),I(B,[C(607),R(56192,56319)]),I(B,[C(608),R(56320,57343)]),I(B,[C(609),R(57344,63743)]),I(B,[C(610),R(63744,64255)]),I(B,[C(611),R(64256,64335)]),I(B,[C(612),R(64336,65023)]),I(B,[C(613),R(65024,65039)]),I(B,[C(614),R(65040,65055)]),I(B,[C(615),R(65056,65071)]),I(B,[C(616),R(65072,65103)]),I(B,[C(617),R(65104,65135)]),I(B,[C(618),R(65136,65279)]),I(B,[C(619),R(65280,65519)]),I(B,[C(620),R(0,1114111)]),I(B,[C(621),
AZ5()]),I(B,[C(622),BX(0,1)]),I(B,[C(623),Ju(62,1)]),I(B,[C(624),BX(1,1)]),I(B,[C(625),BX(2,1)]),I(B,[C(626),BX(3,0)]),I(B,[C(627),BX(4,0)]),I(B,[C(628),BX(5,1)]),I(B,[C(629),Ju(448,1)]),I(B,[C(630),BX(6,1)]),I(B,[C(631),BX(7,0)]),I(B,[C(632),BX(8,1)]),I(B,[C(633),Ju(3584,1)]),I(B,[C(634),BX(9,1)]),I(B,[C(635),BX(10,1)]),I(B,[C(636),BX(11,1)]),I(B,[C(637),Ju(28672,0)]),I(B,[C(638),BX(12,0)]),I(B,[C(639),BX(13,0)]),I(B,[C(640),BX(14,0)]),I(B,[C(641),A0B(983040,1,1)]),I(B,[C(642),BX(15,0)]),I(B,[C(643),BX(16,
1)]),I(B,[C(644),BX(18,1)]),I(B,[C(645),A0P(19,0,1)]),I(B,[C(646),Ju(1643118592,1)]),I(B,[C(647),BX(20,0)]),I(B,[C(648),BX(21,0)]),I(B,[C(649),BX(22,0)]),I(B,[C(650),BX(23,0)]),I(B,[C(651),BX(24,1)]),I(B,[C(652),Ju(2113929216,1)]),I(B,[C(653),BX(25,1)]),I(B,[C(654),BX(26,0)]),I(B,[C(655),BX(27,0)]),I(B,[C(656),BX(28,1)]),I(B,[C(657),BX(29,0)]),I(B,[C(658),BX(30,0)])]);}
function NX(){B9.call(this);this.t9=0;}
function AVE(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.t9!=Hb(G_(EP(e,d)))?(-1):2;}
function LZ(){B4.call(this);this.g7=0;}
function ASO(a){var b=new LZ();ALH(b,a);return b;}
function ALH(a,b){B3(a);a.g7=b;}
function ATr(a,b){a.e=b;}
function AMb(a,b,c,d){var e,f;e=b+1|0;if(e>d.y){d.dH=1;return (-1);}f=P(c,b);if(b>d.cZ&&CN(P(c,b-1|0)))return (-1);if(a.g7!=f)return (-1);return a.e.c(e,c,d);}
function AO5(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Im(a,b,c,d);e=d.cZ;f=d.y;while(true){if(b>=f)return (-1);g=I4(c,a.g7,b);if(g<0)return (-1);if(g>e&&CN(P(c,g-1|0))){b=g+1|0;continue;}h=a.e;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AMU(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Iz(a,b,c,d,e);f=e.cZ;a:{while(true){if(c<b)return (-1);g=H$(d,a.g7,c);if(g<0)break a;if(g<b)break a;if(g>f&&CN(P(d,g-1|0))){c=g+(-2)|0;continue;}if(a.e.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AJ0(a,b){if(b instanceof EI)return 0;if(b instanceof Ex)return 0;if(b instanceof DM)return 0;if(b instanceof D9)return 0;if(b instanceof Mf)return 0;if(!(b instanceof LZ))return 1;return b.g7!=a.g7?0:1;}
function AWv(a,b){return 1;}
function Mf(){B4.call(this);this.gD=0;}
function APy(a){var b=new Mf();ASY(b,a);return b;}
function ASY(a,b){B3(a);a.gD=b;}
function ALL(a,b){a.e=b;}
function AJy(a,b,c,d){var e,f,g,h;e=d.y;f=b+1|0;g=BG(f,e);if(g>0){d.dH=1;return (-1);}h=P(c,b);if(g<0&&Da(P(c,f)))return (-1);if(a.gD!=h)return (-1);return a.e.c(f,c,d);}
function ATO(a,b,c,d){var e,f;if(!(c instanceof BC))return Im(a,b,c,d);e=d.y;while(true){if(b>=e)return (-1);f=I4(c,a.gD,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Da(P(c,b))){b=f+2|0;continue;}if(a.e.c(b,c,d)>=0)break;}return f;}
function AVu(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Iz(a,b,c,d,e);f=e.y;a:{while(true){if(c<b)return (-1);g=H$(d,a.gD,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Da(P(d,c))){c=g+(-1)|0;continue;}if(a.e.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AMN(a,b){if(b instanceof EI)return 0;if(b instanceof Ex)return 0;if(b instanceof DM)return 0;if(b instanceof D9)return 0;if(b instanceof LZ)return 0;if(!(b instanceof Mf))return 1;return b.gD!=a.gD?0:1;}
function AT1(a,b){return 1;}
function D9(){var a=this;B9.call(a);a.ln=0;a.jX=0;a.gs=0;}
function AUS(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.ln==e&&a.jX==d?2:(-1);}
function ASo(a,b,c,d){var e,f;if(!(c instanceof BC))return Im(a,b,c,d);e=d.y;while(b<e){b=I4(c,a.ln,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=P(c,b);if(a.jX==f&&a.e.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function ALK(a,b,c,d,e){var f;if(!(d instanceof BC))return Iz(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=H$(d,a.jX,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.ln==P(d,f)&&a.e.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AUA(a,b){if(b instanceof D9)return b.gs!=a.gs?0:1;if(b instanceof DM)return b.p(a.gs);if(b instanceof EI)return 0;if(!(b instanceof Ex))return 1;return 0;}
var Yi=G(Ff);
function ALX(a,b){return b!=10?0:1;}
function AUK(a,b,c){return b!=10?0:1;}
var Yj=G(Ff);
function AVS(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AX5(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AGT(){var a=this;B.call(a);a.o2=null;a.lL=null;a.hV=0;a.zH=0;}
function ASC(a){var b=new AGT();APZ(b,a);return b;}
function APZ(a,b){var c,d;while(true){c=a.hV;if(b<c)break;a.hV=c<<1|1;}d=c<<1|1;a.hV=d;d=d+1|0;a.o2=BJ(d);a.lL=BJ(d);a.zH=b;}
function TX(a,b,c){var d,e,f,g;d=0;e=a.hV;f=b&e;while(true){g=a.o2.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.lL.data[f]=c;}
function Vw(a,b){var c,d,e,f;c=a.hV;d=b&c;e=0;while(true){f=a.o2.data[d];if(!f)break;if(f==b)return a.lL.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.zH;}
var ACN=G();
var LV=G(Bf);
function A1I(){var a=new LV();APr(a);return a;}
function APr(a){}
function AE7(a){return CD(B5(Dt(),9,13),32);}
var KR=G(Bf);
function A0K(){var a=new KR();AWr(a);return a;}
function AWr(a){}
function AFN(a){return B5(Dt(),48,57);}
var AGM=G(Bf);
function A12(){var a=new AGM();AOG(a);return a;}
function AOG(a){}
function AVj(a){return B5(Dt(),97,122);}
var AHl=G(Bf);
function AZP(){var a=new AHl();AP4(a);return a;}
function AP4(a){}
function AWx(a){return B5(Dt(),65,90);}
var AHo=G(Bf);
function A1F(){var a=new AHo();AKZ(a);return a;}
function AKZ(a){}
function ANx(a){return B5(Dt(),0,127);}
var LP=G(Bf);
function A1M(){var a=new LP();AMq(a);return a;}
function AMq(a){}
function ADL(a){return B5(B5(Dt(),97,122),65,90);}
var Mr=G(LP);
function A0W(){var a=new Mr();APD(a);return a;}
function APD(a){}
function AEA(a){return B5(ADL(a),48,57);}
var AIV=G(Bf);
function A0H(){var a=new AIV();AR7(a);return a;}
function AR7(a){}
function AO3(a){return B5(B5(B5(Dt(),33,64),91,96),123,126);}
var NE=G(Mr);
function AZ0(){var a=new NE();AUm(a);return a;}
function AUm(a){}
function ACn(a){return B5(B5(B5(AEA(a),33,64),91,96),123,126);}
var AFm=G(NE);
function AZW(){var a=new AFm();AWf(a);return a;}
function AWf(a){}
function ARK(a){return CD(ACn(a),32);}
var AFG=G(Bf);
function AZ6(){var a=new AFG();AVy(a);return a;}
function AVy(a){}
function AME(a){return CD(CD(Dt(),32),9);}
var AD8=G(Bf);
function A0j(){var a=new AD8();AXV(a);return a;}
function AXV(a){}
function ARG(a){return CD(B5(Dt(),0,31),127);}
var ADU=G(Bf);
function AZ4(){var a=new ADU();ALg(a);return a;}
function ALg(a){}
function AX9(a){return B5(B5(B5(Dt(),48,57),97,102),65,70);}
var AHt=G(Bf);
function A1e(){var a=new AHt();AKK(a);return a;}
function AKK(a){}
function ASA(a){var b;b=new VZ;b.BE=a;By(b);b.O=1;return b;}
var AI5=G(Bf);
function AZJ(){var a=new AI5();AUE(a);return a;}
function AUE(a){}
function AJp(a){var b;b=new Oa;b.BQ=a;By(b);b.O=1;return b;}
var AGU=G(Bf);
function A1J(){var a=new AGU();AK1(a);return a;}
function AK1(a){}
function APz(a){var b;b=new Ux;b.Bh=a;By(b);return b;}
var AGC=G(Bf);
function A0i(){var a=new AGC();ARH(a);return a;}
function ARH(a){}
function AUZ(a){var b;b=new Uw;b.A0=a;By(b);return b;}
var AHI=G(Bf);
function A0U(){var a=new AHI();AMl(a);return a;}
function AMl(a){}
function AMB(a){var b;b=new AAd;b.CH=a;By(b);IF(b.N,0,2048);b.O=1;return b;}
var AC5=G(Bf);
function A0g(){var a=new AC5();ALU(a);return a;}
function ALU(a){}
function AM5(a){var b;b=new Rc;b.B$=a;By(b);b.O=1;return b;}
var ACG=G(Bf);
function A0V(){var a=new ACG();ARg(a);return a;}
function ARg(a){}
function AX2(a){var b;b=new Qd;b.Dc=a;By(b);b.O=1;return b;}
var AG5=G(Bf);
function AZ9(){var a=new AG5();AR8(a);return a;}
function AR8(a){}
function AJf(a){var b;b=new Tt;b.BG=a;By(b);return b;}
var AHe=G(Bf);
function A1S(){var a=new AHe();APf(a);return a;}
function APf(a){}
function AQD(a){var b;b=new N5;b.Ad=a;By(b);b.O=1;return b;}
var AEt=G(Bf);
function AZ_(){var a=new AEt();AJ4(a);return a;}
function AJ4(a){}
function ANf(a){var b;b=new N$;b.Cc=a;By(b);b.O=1;return b;}
var AFK=G(Bf);
function A00(){var a=new AFK();ALY(a);return a;}
function ALY(a){}
function AOy(a){var b;b=new PF;b.CE=a;By(b);b.O=1;return b;}
var AIC=G(Bf);
function A1D(){var a=new AIC();AQK(a);return a;}
function AQK(a){}
function AQF(a){var b;b=new RK;b.CW=a;By(b);b.O=1;return b;}
var AHa=G(Bf);
function A1z(){var a=new AHa();ASr(a);return a;}
function ASr(a){}
function AWY(a){var b;b=new RV;b.Bk=a;By(b);return b;}
var AEU=G(Bf);
function A1N(){var a=new AEU();ALV(a);return a;}
function ALV(a){}
function AUb(a){var b;b=new WC;b.Cj=a;By(b);return b;}
var AEs=G(Bf);
function AZ8(){var a=new AEs();AU0(a);return a;}
function AU0(a){}
function ASp(a){var b;b=new Vo;b.Ah=a;By(b);b.O=1;return b;}
var AI1=G(Bf);
function A1n(){var a=new AI1();AO_(a);return a;}
function AO_(a){}
function AVa(a){var b;b=new Op;b.Dk=a;By(b);b.O=1;return b;}
var Kd=G(Bf);
function A05(){var a=new Kd();ANo(a);return a;}
function ANo(a){}
function AFH(a){return CD(B5(B5(B5(Dt(),97,122),65,90),48,57),95);}
var AHM=G(Kd);
function AZ2(){var a=new AHM();APj(a);return a;}
function APj(a){}
function ASa(a){var b;b=EO(AFH(a),1);b.O=1;return b;}
var AFq=G(LV);
function AZG(){var a=new AFq();AXD(a);return a;}
function AXD(a){}
function AKU(a){var b;b=EO(AE7(a),1);b.O=1;return b;}
var AEm=G(KR);
function A0s(){var a=new AEm();AQo(a);return a;}
function AQo(a){}
function AOP(a){var b;b=EO(AFN(a),1);b.O=1;return b;}
function ADZ(){var a=this;Bf.call(a);a.tV=0;a.uF=0;}
function R(a,b){var c=new ADZ();AXZ(c,a,b);return c;}
function AXZ(a,b,c){a.tV=b;a.uF=c;}
function AQW(a){return B5(Dt(),a.tV,a.uF);}
var AEh=G(Bf);
function AZ5(){var a=new AEh();AYj(a);return a;}
function AYj(a){}
function AXQ(a){return B5(B5(Dt(),65279,65279),65520,65533);}
function AFc(){var a=this;Bf.call(a);a.om=0;a.lv=0;a.sb=0;}
function BX(a,b){var c=new AFc();AMd(c,a,b);return c;}
function A0P(a,b,c){var d=new AFc();AX1(d,a,b,c);return d;}
function AMd(a,b,c){a.lv=c;a.om=b;}
function AX1(a,b,c,d){a.sb=d;a.lv=c;a.om=b;}
function AN7(a){var b;b=A1Y(a.om);if(a.sb)IF(b.N,0,2048);b.O=a.lv;return b;}
function AFn(){var a=this;Bf.call(a);a.ol=0;a.lN=0;a.qx=0;}
function Ju(a,b){var c=new AFn();ANg(c,a,b);return c;}
function A0B(a,b,c){var d=new AFn();AJh(d,a,b,c);return d;}
function ANg(a,b,c){a.lN=c;a.ol=b;}
function AJh(a,b,c,d){a.qx=d;a.lN=c;a.ol=b;}
function AJg(a){var b;b=new Um;AGo(b,a.ol);if(a.qx)IF(b.N,0,2048);b.O=a.lN;return b;}
var AD3=G();
var ADt=G();
function AES(b){var c,d,e,f,g,h,i;c=AVn(FV(b));d=KE(c);e=BJ(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+KE(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=OJ(c);h=h+1|0;}return e;}
function Ly(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function O5(){var a=this;B.call(a);a.sO=0;a.uZ=0;a.s7=null;}
function AN4(a,b,c){var d=new O5();AWd(d,a,b,c);return d;}
function AWd(a,b,c,d){a.sO=b;a.uZ=c;a.s7=d;}
function AG8(){var a=this;B.call(a);a.rq=null;a.t3=0;}
function AVn(a){var b=new AG8();AMR(b,a);return b;}
function AMR(a,b){a.rq=b;}
var AER=G();
function KE(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.rq.data;f=b.t3;b.t3=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function OJ(b){var c,d;c=KE(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var Xz=G(Fq);
function ABc(a){Mk(a);return a.gT;}
var TR=G(Fq);
function ADI(){B.call(this);this.Pr=null;}
function U8(){B.call(this);this.tE=null;}
function AOn(a,b){b.g4=a.tE;}
function T3(){B.call(this);this.wf=null;}
function AL8(a,b){JV(a.wf,b);}
function ACi(){var a=this;B.call(a);a.qq=null;a.qp=null;}
function Ye(){var a=this;B.call(a);a.Dn=null;a.kO=null;}
function AND(a,b){var c;c=a.kO;b=b;a.kO=Q9(!c.oT&&!b.eH?0:1);return 1;}
function Va(){var a=this;B.call(a);a.Ap=null;a.Ao=null;}
function AB_(){var a=this;B.call(a);a.A$=null;a.A_=null;a.Ba=null;}
function ZD(){var a=this;W.call(a);a.qX=null;a.CP=null;}
function ANF(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cl^DB(a.qX,c):0;}
function ZC(){var a=this;W.call(a);a.xH=null;a.yv=null;a.Co=null;}
function AJO(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cl^DB(a.xH,c):0;return a.yv.p(b)&&!d?1:0;}
function Qz(){var a=this;W.call(a);a.j4=null;a.Al=null;}
function AQL(a,b){return a.bf^DB(a.j4,b);}
function AOC(a){var b,c,d;b=new L;N(b);c=HV(a.j4,0);while(c>=0){I$(b,G3(c));BL(b,124);c=HV(a.j4,c+1|0);}d=b.K;if(d>0)Zr(b,d-1|0);return M(b);}
function QK(){var a=this;W.call(a);a.up=null;a.BO=null;}
function AUX(a,b){return a.up.p(b);}
function QI(){var a=this;W.call(a);a.lC=0;a.rX=null;a.mM=null;}
function AVD(a,b){return !(a.lC^DB(a.mM.I,b))&&!(a.lC^a.mM.ea^a.rX.p(b))?0:1;}
function QJ(){var a=this;W.call(a);a.lM=0;a.x7=null;a.nU=null;}
function ARi(a,b){return !(a.lM^DB(a.nU.I,b))&&!(a.lM^a.nU.ea^a.x7.p(b))?1:0;}
function QN(){var a=this;W.call(a);a.y8=0;a.ye=null;a.x1=null;a.AK=null;}
function AM_(a,b){return a.y8^(!a.ye.p(b)&&!a.x1.p(b)?0:1);}
function QO(){var a=this;W.call(a);a.uC=0;a.ud=null;a.tr=null;a.Di=null;}
function AI7(a,b){return a.uC^(!a.ud.p(b)&&!a.tr.p(b)?0:1)?0:1;}
function QL(){var a=this;W.call(a);a.ta=null;a.Dj=null;}
function AOH(a,b){return C8(a.ta,b);}
function QM(){var a=this;W.call(a);a.yt=null;a.AX=null;}
function ARm(a,b){return C8(a.yt,b)?0:1;}
function QP(){var a=this;W.call(a);a.uS=null;a.uh=0;a.xb=null;}
function AXa(a,b){return !C8(a.uS,b)&&!(a.uh^DB(a.xb.I,b))?0:1;}
function QQ(){var a=this;W.call(a);a.vI=null;a.vZ=0;a.vi=null;}
function AMt(a,b){return !C8(a.vI,b)&&!(a.vZ^DB(a.vi.I,b))?1:0;}
function Qy(){var a=this;W.call(a);a.w8=0;a.x6=null;a.yO=null;a.Au=null;}
function AZC(a,b){return !(a.w8^a.x6.p(b))&&!C8(a.yO,b)?0:1;}
function Rr(){var a=this;W.call(a);a.yH=0;a.pU=null;a.qz=null;a.AT=null;}
function AON(a,b){return !(a.yH^a.pU.p(b))&&!C8(a.qz,b)?1:0;}
function Qw(){var a=this;W.call(a);a.sB=null;a.AY=null;}
function AMs(a,b){return C8(a.sB,b);}
function Qx(){var a=this;W.call(a);a.sK=null;a.Df=null;}
function AOk(a,b){return C8(a.sK,b)?0:1;}
function QC(){var a=this;W.call(a);a.y5=null;a.vy=0;a.z7=null;}
function AP2(a,b){return C8(a.y5,b)&&a.vy^DB(a.z7.I,b)?1:0;}
function Qv(){var a=this;W.call(a);a.wB=null;a.uD=0;a.vw=null;}
function AWH(a,b){return C8(a.wB,b)&&a.uD^DB(a.vw.I,b)?0:1;}
function QA(){var a=this;W.call(a);a.xf=0;a.qU=null;a.ux=null;a.AJ=null;}
function ALc(a,b){return a.xf^a.qU.p(b)&&C8(a.ux,b)?1:0;}
function QB(){var a=this;W.call(a);a.wi=0;a.pH=null;a.w6=null;a.A3=null;}
function ATZ(a,b){return a.wi^a.pH.p(b)&&C8(a.w6,b)?0:1;}
var MY=G(0);
function Vn(){var a=this;B.call(a);a.AO=null;a.x9=null;a.kq=null;a.cF=null;a.j5=0;a.mB=0;}
function N8(a,b){var c,d,e;c=J(a.kq);if(b>=0&&b<=c){ABn(a.cF,null,(-1),(-1));d=a.cF;d.k3=1;d.eN=b;c=d.iY;if(c<0)c=b;d.iY=c;b=a.x9.cp(b,a.kq,d);if(b==(-1))a.cF.dH=1;if(b>=0){d=a.cF;if(d.kr){e=d.d2.data;if(e[0]==(-1)){c=d.eN;e[0]=c;e[1]=c;}d.iY=JQ(d);return 1;}}a.cF.eN=(-1);return 0;}d=new BD;Bm(d,Db(b));K(d);}
function AIB(a){return Rj(a.cF,0);}
function AEn(a){return Uz(a.cF,0);}
function ACU(a){return a.cF.ky;}
var C6=G(0);
var A3n=null;var A4H=null;var A3p=null;var A3o=null;var A3r=null;var A3q=null;var A3t=null;var A3s=null;var A3v=null;var A3u=null;var A3w=null;function AHr(){AHr=Bq(C6);AX7();}
function AX7(){A3n=CI(0);A4H=Dr(8,8,8);A3p=S(C(659));A3o=Dr(255,255,255);A3r=S(C(660));A3q=S(C(661));A3t=S(C(662));A3s=S(C(663));A3v=ED(205,205,205,153);A3u=ED(255,255,255,0);A3w=S(C(113));}
function Cv(){CC.call(this);this.m_=null;}
var A5V=null;var A5W=null;var A5X=null;var A5Y=null;var A5Z=null;var A50=null;var A51=null;var A52=null;var A53=null;var A54=null;var A55=null;var A56=null;var A57=null;var A58=null;var A59=null;var A3x=null;function AGq(){AGq=Bq(Cv);AYJ();}
function DJ(a,b,c){var d=new Cv();TK(d,a,b,c);return d;}
function AYo(a,b,c,d){var e=new Cv();ADo(e,a,b,c,d);return e;}
function TK(a,b,c,d){AGq();Dy(a,b,c);a.m_=IG(d,null);}
function ADo(a,b,c,d,e){AGq();Dy(a,b,c);a.m_=IG(d,e);}
function AYJ(){var b;b=new Cv;AHr();TK(b,C(371),0,A4H);A5V=b;A5W=DJ(C(372),1,S(C(664)));A5X=DJ(C(374),2,S(C(665)));A5Y=DJ(C(376),3,S(C(666)));A5Z=DJ(C(378),4,A4H);A50=DJ(C(379),5,S(C(667)));A51=DJ(C(381),6,S(C(420)));A52=DJ(C(383),7,S(C(668)));A53=DJ(C(385),8,S(C(669)));A54=AYo(C(387),9,A4H,Dr(237,235,252));A55=AYo(C(388),10,S(C(418)),S(C(670)));A56=DJ(C(389),11,S(C(420)));A57=DJ(C(391),12,S(C(421)));A58=DJ(C(393),13,S(C(671)));b=DJ(C(394),14,S(C(395)));A59=b;A3x=I(Cv,[A5V,A5W,A5X,A5Y,A5Z,A50,A51,A52,A53,A54,
A55,A56,A57,A58,b]);}
var DI=G(0);
var A3B=null;var A3C=null;var A3y=null;var A3z=null;var A3A=null;var A4I=null;var A4J=null;var A3D=null;var A3E=null;function AKd(){AKd=Bq(DI);AM4();}
function AM4(){A3B=S(C(111));A3C=S(C(672));A3y=S(C(673));A3z=S(C(674));A3A=S(C(675));A4I=S(C(111));A4J=S(C(672));A3D=ED(205,205,205,153);A3E=Dr(247,248,250);}
function ABe(){B.call(this);this.uc=null;}
function AXt(a,b){AAG(a.uc,b);}
var OC=G(G5);
function AN$(a,b,c,d){var e,f,g;e=0;f=d.y;a:{while(true){if(b>f){b=e;break a;}g=F_(d,a.bb);DG(d,a.bb,b);e=a.da.c(b,c,d);if(e>=0)break;DG(d,a.bb,g);b=b+1|0;}}return b;}
function AZo(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=F_(e,a.bb);DG(e,a.bb,c);f=a.da.c(c,d,e);if(f>=0)break;DG(e,a.bb,g);c=c+(-1)|0;}}return c;}
function AL_(a){return null;}
var S0=G(Bt);
var AAX=G(Bt);
function Yd(){Gm.call(this);this.C8=0;}
function SI(){Gm.call(this);this.C2=0;}
var Nx=G(Bt);
function TU(){var a=this;B.call(a);a.pG=null;a.pD=null;}
function TV(){B.call(this);this.w9=null;}
function AKy(a,b){Br(a.w9,b);}
function X6(){var a=this;B.call(a);a.uW=null;a.xN=null;a.zp=0;a.l5=0;}
function Ls(a,b){return Cf(a.uW)<b?0:1;}
var AC1=G();
function ADE(b){var c,d,e,f,g,h,i,j;c=ALu();d=CF(b);Bs(c,d);e=0;f=0;while(f<d){g=B7(b,f);h=H4(g);Bs(c,h);i=0;while(i<h){j=IY(g,i);Ha(c,e,MV(j));e=e+MV(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return SE(c);}
function AC$(b){var c,d,e,f,g,h,i,j,k;c=Ba(b);d=Q(FU,c);e=d.data;f=0;while(f<c){a:{g=Ba(b);if(g!=(-1)){h=Ba(b);i=Ba(b);if(i==(-1)){j=new FU;j.gL=h;e[g]=j;}else{j=new FU;j.gL=h;j.ny=BJ(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].ny.data[k]=Ba(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function RL(){B.call(this);this.rn=null;}
function AQw(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.rn;d=CL(c[0]);c=MT(d);e=new Ym;d=AC$(c);f=AC$(c);g=Ba(c);h=Q(MR,g);i=h.data;j=0;while(j<g){i[j]=K9(Ba(c),Ba(c),Ba(c),Ba(c),Ba(c));j=j+1|0;}AFS(e,d,f,h);b.jp=e;KG(b.F,e.yD);KG(b.G,b.jp.yE);c=b.lE;e=b.jp;c.hC=e;b.e9.ev=e;}
var ADr=G(0);
function Sw(){B.call(this);this.Aa=null;}
function AQ4(a){var b,c;b=a.Aa;c=b.qq;b=b.qp;c.DT(b.kK,b.nq,null);}
function W9(){var a=this;B.call(a);a.Bz=null;a.ug=null;}
function Xa(){B.call(this);this.CN=null;}
function AXG(a,b){$rt_globals.console.info($rt_ustr(b));}
function Yb(){var a=this;B.call(a);a.d2=null;a.le=null;a.nc=null;a.nj=null;a.r0=0;a.kr=0;a.cZ=0;a.y=0;a.eN=0;a.ky=0;a.fZ=0;a.dH=0;a.Cy=0;a.iY=0;a.k3=0;}
function BW(a,b,c){a.le.data[b]=c;}
function Ds(a,b){return a.le.data[b];}
function JQ(a){return Uz(a,0);}
function Uz(a,b){Uk(a,b);return a.d2.data[(b*2|0)+1|0];}
function DG(a,b,c){a.d2.data[b*2|0]=c;}
function Kw(a,b,c){a.d2.data[(b*2|0)+1|0]=c;}
function F_(a,b){return a.d2.data[b*2|0];}
function Jh(a,b){return a.d2.data[(b*2|0)+1|0];}
function AGO(a){return Rj(a,0);}
function Rj(a,b){Uk(a,b);return a.d2.data[b*2|0];}
function Om(a,b){return a.nc.data[b];}
function Ew(a,b,c){a.nc.data[b]=c;}
function Uk(a,b){var c;if(!a.kr){c=new CY;X(c);K(c);}if(b>=0&&b<a.r0)return;c=new BD;Bm(c,Db(b));K(c);}
function ABn(a,b,c,d){a.kr=0;a.k3=2;Ic(a.d2,(-1));Ic(a.le,(-1));if(b!==null)a.nj=b;if(c>=0){a.cZ=c;a.y=d;}a.eN=a.cZ;}
function AED(a){return a.k3;}
function N6(){B.call(this);this.z4=null;}
function AO2(a){D0(a.z4);}
function VZ(){W.call(this);this.BE=null;}
function AXu(a,b){return CA(b)!=2?0:1;}
function Oa(){W.call(this);this.BQ=null;}
function AKQ(a,b){return CA(b)!=1?0:1;}
function Ux(){W.call(this);this.Bh=null;}
function AKu(a,b){return TP(b);}
function Uw(){W.call(this);this.A0=null;}
function AN5(a,b){return 0;}
function AAd(){W.call(this);this.CH=null;}
function APP(a,b){return !CA(b)?0:1;}
function Rc(){W.call(this);this.B$=null;}
function AXx(a,b){return CA(b)!=9?0:1;}
function Qd(){W.call(this);this.Dc=null;}
function ATl(a,b){return GW(b);}
function Tt(){W.call(this);this.BG=null;}
function AU5(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function N5(){W.call(this);this.Ad=null;}
function AYV(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GW(b);}return b;}
function N$(){W.call(this);this.Cc=null;}
function AMT(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=GW(b);}return b;}
function PF(){W.call(this);this.CE=null;}
function AXJ(a,b){a:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function RK(){W.call(this);this.CW=null;}
function ARD(a,b){return Km(b);}
function RV(){W.call(this);this.Bk=null;}
function AUq(a,b){return RW(b);}
function WC(){W.call(this);this.Cj=null;}
function AXb(a,b){return CA(b)!=3?0:1;}
function Vo(){W.call(this);this.Ah=null;}
function AYl(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=GW(b);}return b;}
function Op(){W.call(this);this.Dk=null;}
function AMC(a,b){a:{b:{switch(CA(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=GW(b);}return b;}
function Nk(){W.call(this);this.nJ=0;}
function A1Y(a){var b=new Nk();AGo(b,a);return b;}
function AGo(a,b){By(a);a.nJ=b;}
function ATo(a,b){return a.bf^(a.nJ!=CA(b&65535)?0:1);}
var Um=G(Nk);
function AV8(a,b){return a.bf^(!(a.nJ>>CA(b&65535)&1)?0:1);}
function AAJ(){B.call(this);this.qJ=null;}
function AOw(a,b){var c,d,e,f;c=a.qJ;b=Fo(b);d=c.pG;c=c.pD;e=new Nl;f=AG0(FG(c));AH9(e,b,null,f);I9(d,e);}
function AAL(){var a=this;B.call(a);a.sl=null;a.sm=null;}
function ALb(a,b){var c,d;c=a.sl;d=a.sm;b.text().then(Bl(c,"f"),Bl(d,"f"));}
function YJ(){B.call(this);this.q6=null;}
function AUd(a,b){var c,d,e,f;c=a.q6;d=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)).data;b=c.ug;c=Bz();b=CE(b);e=new L;N(e);H(H(e,C(676)),b);Br(c,M(e));b=Bz();f=d.length;c=new L;N(c);U(H(c,C(677)),f);Br(b,M(c));}
function YL(){var a=this;B.call(a);a.xw=null;a.xx=null;}
function ASF(a,b){var c,d;c=a.xw;d=a.xx;b.arrayBuffer().then(Bl(c,"f"),Bl(d,"f"));}
function Xx(){B.call(this);this.sL=null;}
function AQZ(a,b){a.sL.h($rt_str(b.message));}
var ADg=G();
$rt_packages([-1,"java",0,"lang",-1,"org",2,"sudu",3,"experiments",4,"editor",4,"js"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bH",A2k(ARx),"cQ",A2j(ALE)],Ug,0,B,[],0,3,0,0,0,OI,0,B,[],3,3,0,0,0,NY,0,B,[],3,3,0,0,0,ZH,0,B,[OI,NY],0,3,0,0,0,ADS,0,B,[],4,0,0,0,0,ADv,0,B,[],4,3,0,0,0,G6,0,B,[],0,3,0,0,0,Em,0,G6,[],0,3,0,0,0,Bt,0,Em,[],0,3,0,0,0,AFo,0,Bt,[],0,3,0,0,0,CV,0,B,[],3,3,0,0,0,CH,0,B,[],3,3,0,0,0,Jy,0,B,[],3,3,0,0,0,BC,"String",1,B,[CV,CH,Jy],0,3,0,Fg,["cQ",A2j(ALC),"bH",A2k(Bo),"oh",A2j(I5),"lt",A2k(AN9)],Fc,0,G6,[],0,3,0,0,0,HX,0,Fc,[],0,3,0,0,0,AEV,0,HX,[],0,3,0,0,0,D$,0,B,[CV],1,3,0,0,0,GN,
0,D$,[CH],0,3,0,0,["bH",A2k(AYu),"lt",A2k(AQC)],GT,0,B,[CV,Jy],0,0,0,0,["jd",A2k(Kv),"cQ",A2j(M)],IE,0,B,[],3,3,0,0,0,L,0,GT,[IE],0,3,0,0,["nY",A2n(AQu),"mR",A2m(AM3),"cQ",A2j(D7),"jd",A2k(AQE),"oB",A2l(ARd)],EM,0,HX,[],0,3,0,0,0,AGp,0,EM,[],0,3,0,0,0,AEI,0,EM,[],0,3,0,0,0,Ww,0,B,[],3,3,0,0,0,Dx,0,B,[],3,3,0,0,0,Rb,0,B,[],3,0,0,0,0,Jm,0,B,[Ww,Dx,Rb],1,3,0,0,["dd",A2j(Er)],Ua,0,Jm,[],0,3,0,0,0,ACQ,0,B,[],0,3,0,0,0,AHO,0,B,[],4,3,0,0,0,BO,0,B,[],3,3,0,0,0,BY,0,B,[BO],3,3,0,0,0,WK,0,B,[BY],0,3,0,0,["X",A2k(AYP)],AGu,
0,B,[],0,3,0,0,0,AFC,0,B,[BO],1,3,0,0,0,ACW,0,B,[],3,3,0,0,0,AHn,0,B,[],3,3,0,0,0,AHk,0,B,[],3,3,0,0,0,MM,0,B,[],0,3,0,0,0,ADO,0,B,[BO],1,3,0,0,0,WL,0,B,[BY],0,3,0,0,["X",A2k(AI$)],WJ,0,B,[BY],0,3,0,0,["X",A2k(AXc)],Mi,0,B,[],4,3,0,0,0,AHg,0,B,[],4,3,0,0,0,AEo,0,B,[],0,3,0,0,0,AI3,0,B,[],4,3,0,0,0,OO,0,B,[BY],0,3,0,0,["X",A2k(AS3)]]);
$rt_metadata([AHC,0,B,[BO],1,3,0,0,0,AC8,0,B,[],0,3,0,0,0,YO,0,B,[BO],3,3,0,0,0,AFp,0,B,[YO],1,3,0,0,["Op",A2k(AOV),"NI",A2j(ARt)],AFa,0,B,[BO],1,3,0,0,0,HS,0,B,[],3,3,0,0,0,VX,0,B,[HS],0,3,0,0,0,BD,0,Bt,[],0,3,0,0,0,AF6,0,B,[],4,3,0,0,0,Hc,0,Bt,[],0,3,0,0,0,Js,0,Bt,[],0,3,0,0,0,Dd,0,B,[CH],0,3,0,0,0,NO,0,B,[BO],3,3,0,0,0,Vs,0,B,[NO],3,3,0,0,0,EE,0,B,[BO],3,3,0,0,0,ACV,0,B,[BO,Vs,EE],1,3,0,0,["Mr",A2j(ASt),"Nl",A2k(AWe),"O8",A2k(AVY),"GZ",A2k(AMx),"Mg",A2k(AJB),"EE",A2j(AMV),"ND",A2l(AV9),"NJ",A2m(AP$),"Oy",
A2j(AKP),"Pi",A2j(ATU),"KY",A2k(AW6),"H6",A2j(ARZ),"PM",A2k(APB),"J3",A2j(ASv),"I2",A2j(AZm),"Pv",A2j(AQ0),"Ev",A2k(AKD),"NR",A2j(AYw),"Lt",A2l(APx),"HP",A2l(ARM),"Nn",A2l(AXY),"MI",A2j(AJE),"Oh",A2j(APc),"OQ",A2k(AM9),"Kx",A2k(AOj),"GR",A2l(APU),"Jq",A2j(AQ7),"Oo",A2k(AKS),"E0",A2j(AOi),"Py",A2j(AUv),"Gu",A2k(AJk),"J2",A2k(AWS),"Pm",A2k(ALr),"IF",A2j(AWV),"Hu",A2l(ALF),"M$",A2k(AUh),"Jc",A2j(AU$),"Ft",A2l(ATh),"Fy",A2l(ASK),"ID",A2j(AWM),"OU",A2k(AYK),"HG",A2m(ASP),"Gn",A2j(AMZ),"HS",A2l(AL4),"HZ",A2j(AKg),
"MY",A2j(AYp),"KU",A2j(ATd),"Dw",A2j(AKc),"Mc",A2l(ATi),"E1",A2k(AML),"Kv",A2k(AOE),"F_",A2j(AVi)],PG,0,B,[BY],0,3,0,0,["X",A2k(AUg)],AE8,0,B,[],4,3,0,0,0,RJ,0,B,[EE],3,3,0,0,0,T8,0,B,[EE],3,3,0,0,0,TW,0,B,[EE],3,3,0,0,0,Ws,0,B,[EE],3,3,0,0,0,AAW,0,B,[EE],3,3,0,0,0,XI,0,B,[EE,RJ,T8,TW,Ws,AAW],3,3,0,0,0,ADP,0,B,[BO,XI],1,3,0,0,["LL",A2l(ATm),"Ow",A2l(AQA),"Gw",A2m(APe),"HD",A2k(AK0),"Ln",A2m(ANd)],BR,0,Bt,[],0,3,0,0,0,ACe,0,Bt,[],0,3,0,0,0,HT,0,BD,[],0,3,0,0,0,AEa,0,B,[],0,3,0,0,0,Tg,0,B,[],3,3,0,0,0,QU,0,B,
[Tg],3,3,0,0,0,Vz,0,B,[QU],0,3,0,0,0,BK,0,B,[],3,3,0,0,0,AFy,0,B,[BK],0,3,0,0,0,Be,0,B,[],3,3,0,0,0,AFz,0,B,[Be],0,3,0,0,0,T0,0,B,[BO],3,3,0,0,0,YC,0,B,[T0],0,3,0,0,["J5",A2k(APw)],Yz,0,B,[Be],0,3,0,0,0,SY,0,B,[BO],3,3,0,0,0,YA,0,B,[SY],0,3,0,0,["zl",A2l(ANm)],AHU,0,B,[BO],1,3,0,0,0,Cw,0,B,[BO],3,3,0,0,0,Yy,0,B,[Cw],0,3,0,0,["ck",A2k(AUs)],U$,0,B,[],0,3,0,0,0,Zt,0,B,[],3,3,0,0,["e8",A2k(AI_)],GD,0,B,[Zt],3,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],Fh,0,B,[GD],1,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb),"en",A2j(FO),"qA",
A2k(AVI)],LG,0,B,[GD],3,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],J2,0,B,[LG],3,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)]]);
$rt_metadata([EZ,0,Fh,[J2],1,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb),"vL",A2k(AUP),"ca",A2j(B8),"wI",A2l(ATJ),"o3",A2l(AWJ),"bH",A2k(ASf)],M9,0,EZ,[],1,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],NZ,0,B,[GD],3,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],ABo,0,B,[NZ,LG],3,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],XB,0,M9,[ABo],0,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],L1,0,B,[],3,3,0,0,0,D8,0,B,[L1],1,3,0,0,0,En,0,B,[],3,3,0,0,0,ABk,0,B,[L1],3,3,0,0,0,OG,0,B,[ABk],3,3,0,0,0,Rn,0,D8,[En,CV,OG],0,3,0,0,0,Vf,0,B,[BK],0,3,0,0,0,Vg,0,B,[BY],0,
3,0,0,["X",A2k(AJD)],AD5,0,B,[],0,3,0,0,0,Mb,0,B,[],1,3,0,0,0,Yr,0,Mb,[],0,3,0,0,0,Ci,0,B,[Dx],1,3,0,0,["cG",A2k(AYr)],Sk,0,B,[],0,3,0,0,0,ZN,0,B,[Cw],0,3,0,0,["ck",A2k(ATL)],ZO,0,B,[Cw],0,3,0,0,["ck",A2k(AT3)],ZP,0,B,[Cw],0,3,0,0,["ck",A2k(ARU)],ZQ,0,B,[Cw],0,3,0,0,["ck",A2k(AQ$)],ZR,0,B,[Cw],0,3,0,0,["ck",A2k(ARE)],ZS,0,B,[Cw],0,3,0,0,["ck",A2k(AUC)],ZT,0,B,[Cw],0,3,0,0,["ck",A2k(APd)],ZU,0,B,[Cw],0,3,0,0,["ck",A2k(AZb)],ZV,0,B,[Cw],0,3,0,0,["ck",A2k(AOf)],ZW,0,B,[Cw],0,3,0,0,["ck",A2k(AV1)],ABR,0,B,[Cw],
0,3,0,0,["ck",A2k(AYs)],ABS,0,B,[Cw],0,3,0,0,["ck",A2k(ARr)],ABT,0,B,[Cw],0,3,0,0,["ck",A2k(AR1)],ABU,0,B,[Cw],0,3,0,0,["ck",A2k(AUk)],W$,0,B,[],3,3,0,0,0,Xp,0,B,[W$],0,3,0,0,0,Xo,0,B,[Cw],0,3,0,0,["ck",A2k(AQi)],NS,0,B,[],0,3,0,0,0,JY,0,B,[HS],0,3,0,0,["y9",A2l(Ko)],AIe,0,B,[],0,3,0,0,0,Ep,0,B,[],3,3,0,0,0,Cm,0,B,[Ep],3,3,0,0,0,Cs,0,B,[],3,3,0,0,["bz",A2k(AQn),"bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB)],Eg,0,B,[],3,3,0,0,0,D3,0,B,[Ep],3,3,0,0,0,Fd,0,B,[],3,3,0,0,0,EB,0,B,[],3,3,0,0,0,FH,0,B,[EB],3,3,0,0,0,S7,
0,B,[Dx],0,3,0,0,0,Bh,0,B,[],0,3,0,0,["cQ",A2j(ACj),"bH",A2k(AP5)],ZZ,0,B,[],0,3,0,0,0,AHm,0,B,[],0,3,0,0,0]);
$rt_metadata([ADp,0,B,[],3,3,0,0,0,SW,0,B,[],0,3,0,0,0,MC,0,B,[],0,3,0,0,0,C5,0,MC,[],0,3,0,0,0,AHK,0,C5,[],0,3,0,0,0,E1,0,C5,[],0,3,0,0,0,TC,0,C5,[],0,3,0,0,0,AFh,0,E1,[],0,3,0,0,0,Gz,0,E1,[],0,3,0,0,0,P0,0,Gz,[],0,3,0,0,0,AIE,0,Gz,[],0,3,0,0,0,ADR,0,E1,[],0,3,0,0,0,AGt,0,C5,[],0,3,0,0,0,ADm,0,C5,[],0,3,0,0,0,Uy,0,B,[BO],3,3,0,0,0,AIZ,0,B,[Uy],3,3,0,0,0,ST,0,B,[Dx],0,3,0,0,0,SV,0,B,[],0,3,0,0,0,CC,0,B,[CH,CV],1,3,0,0,0,Hn,0,CC,[],12,3,0,Ie,0,Np,0,B,[],3,3,0,0,0,Wj,0,B,[Np],3,3,0,0,0,XC,0,B,[],3,3,0,0,0,GY,
0,B,[Wj,XC],1,3,0,0,0,Kg,0,GY,[],0,3,0,0,0,AEF,0,Kg,[],0,3,0,0,0,GL,0,GY,[],1,3,0,0,0,Mg,0,GL,[],0,3,0,0,["md",A2m(AP8)],Ee,0,CC,[],12,3,0,AXA,0,J7,0,B,[CH],1,3,0,0,0,Nu,0,J7,[],0,3,0,AEz,0,Rs,0,B,[],0,3,0,0,0,Hs,0,CC,[],12,0,0,ARO,0,LJ,0,GL,[],0,3,0,0,["md",A2m(ANM)],AHf,0,BR,[],0,3,0,0,0,YD,0,Em,[],0,3,0,0,0,Nt,0,B,[BO],3,3,0,0,0,ABh,0,B,[Nt],0,3,0,0,["X",A2k(AVo)],ABi,0,B,[Nt],0,3,0,0,["X",A2k(ALs)],HH,0,B,[],1,3,0,0,0,U3,0,B,[],3,3,0,0,0,L5,0,HH,[CH,IE,Jy,U3],1,3,0,0,0,KL,0,HH,[CH],1,3,0,0,0,In,0,B,[],0,
3,0,HO,0,ON,0,Ci,[],0,3,0,0,["bg",A2j(ARk),"bR",A2l(APA)],CW,0,Ci,[],1,3,0,0,["bR",A2l(IT)],QS,0,B,[],3,3,0,0,0,KT,0,B,[QS],3,3,0,0,0,KX,0,B,[],3,3,0,0,0,MA,0,B,[],3,3,0,0,0]);
$rt_metadata([KB,0,CW,[Cs,KT,KX,MA,Eg,Fd,FH],0,3,0,0,["hq",A2l(AXU),"cG",A2k(AUW),"bg",A2j(ARB),"gP",A2j(APo),"za",A2j(AVG),"zJ",A2j(ARp),"w$",A2k(AWR),"nx",A2k(AS8),"jP",A2k(AMz),"bR",A2l(AQJ),"ka",A2k(AKf),"bz",A2k(ATQ),"b6",A2m(APs),"bQ",A2l(ARS),"cH",A2l(AUM),"c4",A2m(AUc),"dn",A2j(AQt)],AHv,0,KB,[],0,3,0,0,["gP",A2j(AR$)],AIc,0,B,[],0,3,0,0,0,AFr,0,B,[BO],1,3,0,0,0,KU,0,L5,[],1,0,0,0,0,AE9,0,KU,[],0,0,0,0,0,LR,0,B,[],1,3,0,0,0,ML,0,B,[],0,3,0,0,0,AC4,0,B,[],0,3,0,0,0,I_,0,B,[BO],3,3,0,0,0,OY,0,B,[I_],0,
3,0,0,["X",A2k(ANX)],OX,0,B,[I_],0,3,0,0,["X",A2k(AS9)],OV,0,B,[BY],0,3,0,0,["X",A2k(ATX)],OU,0,B,[BY],0,3,0,0,["X",A2k(AL6)],Z,0,B,[],3,3,0,0,0,WO,0,B,[Z],0,3,0,0,["h",A2k(AYx)],WP,0,B,[Z],0,3,0,0,["h",A2k(AQB)],YY,0,B,[BK],0,3,0,0,["bj",A2k(AXd)],YW,0,B,[BK],0,3,0,0,["bj",A2k(AJQ)],YT,0,B,[BK],0,3,0,0,["bj",A2k(ANn)],YS,0,B,[BK],0,3,0,0,["bj",A2k(AS5)],YV,0,B,[BK],0,3,0,0,["bj",A2k(ANv)],YU,0,B,[BK],0,3,0,0,["bj",A2k(AI8)],Y1,0,B,[BK],0,3,0,0,["bj",A2k(AM0)],Y0,0,B,[BK],0,3,0,0,["bj",A2k(AQ9)],Y3,0,B,[BK],
0,3,0,0,["bj",A2k(AVK)],Y2,0,B,[BK],0,3,0,0,["bj",A2k(AJn)],V2,0,B,[BK],0,3,0,0,["bj",A2k(AJI)],V1,0,B,[BK],0,3,0,0,["bj",A2k(AQH)],V0,0,B,[BK],0,3,0,0,["bj",A2k(ASz)],VR,0,B,[BK],0,3,0,0,["bj",A2k(AN2)],VQ,0,B,[BK],0,3,0,0,["bj",A2k(AJt)],VO,0,B,[BK],0,3,0,0,["bj",A2k(AXq)],VN,0,B,[BK],0,3,0,0,["bj",A2k(ARl)],VM,0,B,[BK],0,3,0,0,["bj",A2k(AVM)],VL,0,B,[BK],0,3,0,0,["bj",A2k(AJe)],VK,0,B,[BK],0,3,0,0,["bj",A2k(AVr)],VU,0,B,[BK],0,3,0,0,["bj",A2k(AT8)],VT,0,B,[BK],0,3,0,0,["bj",A2k(AMi)],VS,0,B,[BK],0,3,0,0,
["bj",A2k(AO4)],Z9,0,B,[],0,0,0,0,0,HN,0,B,[],0,3,0,0,0,Rg,0,HN,[],0,3,0,0,0,AHw,0,B,[],0,3,0,0,0,NM,0,HN,[],0,3,0,0,0,Xb,0,B,[BO],3,3,0,0,0,Py,0,B,[Xb],0,3,0,0,["O9",A2k(AQM)],XQ,0,B,[Z],0,3,0,0,["h",A2k(Zx)],AAq,0,KL,[],0,0,0,0,0,CR,0,B,[Dx],0,3,0,0,["dd",A2j(AUY),"kN",A2j(ASR),"eJ",A2m(GZ),"dB",A2k(AH$),"cG",A2k(ALQ),"mk",A2k(ARe),"l_",A2k(AX8),"ih",A2l(AU9),"b6",A2m(APl),"bQ",A2l(ALD),"cH",A2l(ASe),"bz",A2k(AXO),"c4",A2m(AUU)]]);
$rt_metadata([AEq,0,CR,[],0,3,0,0,["dB",A2k(AGL)],AFe,0,B,[Cs,Eg],0,0,0,0,["bz",A2k(ATW),"b6",A2m(AXP),"bQ",A2l(AU_),"cH",A2l(AQR),"c4",A2m(AVx)],GG,0,B,[],3,3,0,0,["zZ",A2j(AST),"wR",A2j(AN_)],SH,0,B,[],3,0,0,0,0,Nn,0,B,[GG],3,3,0,0,["zZ",A2j(AST),"wR",A2j(AN_)],AEw,0,CR,[GG,Cs,KX,SH,Nn],0,3,0,0,["ih",A2l(ATs),"m7",A2l(AYz),"wR",A2j(ANY),"zZ",A2j(AKl),"za",A2j(Ps),"zJ",A2j(ABO),"w$",A2k(Qm),"nx",A2k(AUF),"oS",A2k(AE2),"ni",A2j(AWs),"jH",A2j(XM),"kj",A2j(XL),"gF",A2k(AT9),"xU",A2j(ATN),"nC",A2j(AZl),"cH",A2l(Wh),
"bQ",A2l(N_),"b6",A2m(Oq),"bz",A2k(PU),"h7",A2k(AX6)],ACF,0,B,[],0,3,0,0,0,XY,0,B,[Z],0,3,0,0,["h",A2k(AKz)],XZ,0,B,[Z],0,3,0,0,["h",A2k(AWy)],X0,0,B,[Cm],0,3,0,0,["T",A2k(AQP)],IL,0,B,[Cm],0,3,0,0,["T",A2k(AOc)],XV,0,B,[Z],0,3,0,0,["h",A2k(ARV)],XX,0,B,[D3],0,3,0,0,["T",A2k(AXr)],ADk,0,B,[],3,3,0,0,0,Xt,0,B,[],0,3,0,0,0,UG,0,B,[Cm],0,3,0,0,["T",A2k(AOT)],UF,0,B,[Cm],0,3,0,0,["T",A2k(AL2)],Dz,0,B,[],3,3,0,0,0,AIq,0,B,[Cs,Dz],0,3,0,0,["bz",A2k(ACB),"b6",A2m(ADC),"bQ",A2l(AE_),"cH",A2l(AIs),"eV",A2l(AQk)],AHD,
0,B,[Dz,GG],0,3,0,0,["zZ",A2j(AST),"wR",A2j(AN_),"eV",A2l(AYO),"h7",A2k(ARf)],AEd,0,B,[],0,3,0,0,0,Nl,0,B,[],0,3,0,0,0,AA1,0,B,[],0,3,0,0,0,E4,0,B,[Dx],0,3,0,0,0,AIA,0,B,[],0,3,0,0,0,AEb,0,B,[Dx],0,3,0,0,0,PN,0,B,[Z],0,3,0,0,0,PM,0,B,[Z],0,3,0,0,["h",A2k(AKV)],PL,0,B,[Z],0,3,0,0,["h",A2k(AJM)],AGm,0,B,[],0,3,0,0,0,PK,0,B,[Be],0,3,0,0,["l",A2j(AJL)],PS,0,B,[Be],0,3,0,0,["l",A2j(AOb)],PQ,0,B,[Be],0,3,0,0,["l",A2j(AZA)],PP,0,B,[Be],0,3,0,0,["l",A2j(AQ2)],PO,0,B,[Be],0,3,0,0,["l",A2j(ATY)],PJ,0,B,[Be],0,3,0,0,["l",
A2j(AYB)],Zd,0,B,[Be],0,3,0,0,["l",A2j(AQ6)],Ze,0,B,[Be],0,3,0,0,["l",A2j(AT0)],AGh,0,B,[BO],1,3,0,0,0,Ln,0,B,[],4,3,0,APS,0,BZ,0,B,[],0,3,0,0,["bH",A2k(AY5)],NH,0,B,[],3,3,0,0,0,SL,0,B,[Be],0,3,0,0,["l",A2j(APb)],SK,0,B,[Be],0,3,0,0,["l",A2j(AJr)],Mh,0,B,[],3,3,0,0,0,ADa,0,EZ,[En,CV,Mh],0,3,0,0,["nL",A2k(AQb),"nK",A2k(Bw),"cX",A2j(ATu),"vL",A2k(BF),"o3",A2l(Ub),"oP",A2k(EJ),"qA",A2k(Y$),"jy",A2j(Kx),"wI",A2l(ADD),"e8",A2k(E5)],ABP,0,B,[],3,3,0,0,0,JA,0,B,[],0,3,0,0,0,FA,0,B,[],0,3,0,0,0,Le,0,FA,[],0,3,0,0,
0]);
$rt_metadata([VW,0,FA,[],0,3,0,0,0,Sx,0,FA,[],0,3,0,0,0,HB,0,B,[],3,3,0,0,0,Vj,0,B,[],3,3,0,0,0,L4,0,B,[],0,3,0,0,0,H8,0,B,[Dx],0,3,0,0,["dd",A2j(AGz)],Si,0,B,[],3,0,0,0,0,Ul,0,B,[NH],0,3,0,0,0,AHV,0,B,[],0,3,0,0,0,Xl,0,B,[],0,3,0,0,0,G8,0,B,[],1,3,0,0,0,T9,0,G8,[],0,3,0,0,["v9",A2k(B7)],Xw,0,B,[],3,3,0,0,0,L3,"JsFileHandle",6,B,[Xw],0,3,0,0,["cQ",A2j(AQe)],Zn,0,B,[],3,3,0,0,0,AFU,0,B,[Zn],0,3,0,0,["cQ",A2j(AMD)],Pz,0,B,[Be],0,3,0,0,["l",A2j(AYG)],HC,0,B,[CH],0,3,0,0,0,LW,0,B,[],0,3,0,0,0,Dv,0,B,[],0,3,0,0,
0,RR,0,B,[],0,3,0,0,0,Lw,0,D8,[En,CV],0,3,0,0,0,Cu,0,B,[],0,3,0,0,0,LT,0,Lw,[],0,3,0,0,0,Ui,0,B,[],0,3,0,0,0,AIy,0,B,[CH],0,3,0,0,["bH",A2k(AV6),"lt",A2k(ALO)],Zz,0,B,[HS],0,3,0,0,["y9",A2l(AQ8)],Tv,0,B,[],0,3,0,0,["cQ",A2j(AKa),"bH",A2k(ALw)],H2,0,B,[],3,3,0,0,0,G4,0,B,[H2,En],0,0,0,0,["bH",A2k(AMG)],Hd,0,G4,[],0,0,0,0,0,LO,0,LR,[],1,3,0,0,0,RS,0,LO,[],0,3,0,0,0,Jf,0,Em,[],0,3,0,0,0,Oc,0,B,[I_],0,3,0,0,["X",A2k(AYS)],Of,0,B,[BY],0,3,0,0,["X",A2k(AXH)],Od,0,B,[BY],0,3,0,0,["X",A2k(AKG)],IR,0,B,[],0,3,0,0,0,JR,
0,CW,[KT,MA],0,3,0,0,["jP",A2k(APm),"cG",A2k(AWp),"bg",A2j(AOW),"gP",A2j(AYm),"bR",A2l(AJm),"nm",A2l(AGs),"ka",A2k(ANe)],ACJ,0,Ci,[],0,3,0,0,["cG",A2k(AJV),"bg",A2j(AM8),"bR",A2l(AQO)],Wt,0,Ci,[],0,3,0,0,["cG",A2k(AS6),"bg",A2j(ALz),"bR",A2l(ANS)],P1,0,CW,[Cs,Dz],0,3,0,0,["eV",A2l(APW),"bR",A2l(ANZ),"bg",A2j(AM$),"bz",A2k(AQQ),"bQ",A2l(AWD),"cH",A2l(AVT),"b6",A2m(AKW)],DA,0,CW,[],1,3,0,0,["bg",A2j(K2),"bR",A2l(Ru),"cG",A2k(ALf)],VP,0,DA,[Dz],0,3,0,0,["eV",A2l(AMO),"bg",A2j(ATI),"bR",A2l(ALk)],O7,0,CW,[Cs],0,
3,0,0,["bz",A2k(AQn),"bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB),"bg",A2j(AVJ),"cG",A2k(AJJ)],VJ,0,Ci,[],0,3,0,0,["bg",A2j(AJl),"bR",A2l(AJj)],D4,0,Ci,[],0,3,0,0,["bg",A2j(U1),"bR",A2l(VA)],S1,"SelectFileTest",5,D4,[],0,3,0,0,0,Pu,0,CW,[],0,3,0,0,["bg",A2j(AXR)],Oo,"RenderTexture",5,D4,[],0,3,0,0,["cG",A2k(APk),"bg",A2j(AMP),"bR",A2l(AYf)]]);
$rt_metadata([VE,"ScissorDemo",5,D4,[],0,3,0,0,["bg",A2j(AZg),"bR",A2l(AOO)],Vy,0,Ci,[],0,3,0,0,["bg",A2j(AXM),"bR",A2l(ANb),"cG",A2k(AVc)],JD,"ClipboardTest",5,D4,[Cs],0,3,0,0,["bz",A2k(AQn),"bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AQv)],Ve,0,Ci,[],0,3,0,0,["bg",A2j(AY4),"bR",A2l(AS$)],Hg,0,Ci,[Cs],1,3,0,0,["bz",A2k(AQn),"bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB),"bg",A2j(AEk)],WF,0,Hg,[],0,3,0,0,["bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB),"bR",A2l(AUQ),"bz",A2k(AWm)],WE,0,Hg,[],0,3,0,0,["bQ",A2l(AXh),"cH",A2l(AJ$),
"b6",A2m(AUB),"bz",A2k(AYE),"bg",A2j(AMK),"bR",A2l(AKq)],AAF,0,DA,[Dz],0,3,0,0,["eV",A2l(ANU),"bg",A2j(AXj),"bR",A2l(AWh)],YE,0,DA,[Dz],0,3,0,0,["bg",A2j(AUI),"eV",A2l(AQg)],Su,0,DA,[Dz],0,3,0,0,["eV",A2l(AVH)],N2,0,JR,[],0,3,0,0,["gP",A2j(ALG),"nm",A2l(AZu)],PZ,0,DA,[Dz],0,3,0,0,["eV",A2l(AXo)],YX,0,Ci,[Cs],0,3,0,0,["bz",A2k(AQn),"bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB),"bR",A2l(AYv),"bg",A2j(APa),"cG",A2k(AVk)],Jl,0,B,[],0,3,0,0,0,ADj,0,B,[],3,3,0,0,0,ACw,0,B,[],0,3,0,0,0,AFV,0,B,[],3,3,0,0,0,AIL,0,B,[],
0,3,0,0,0,NB,0,B,[H2,CV],0,3,0,0,0,Ki,0,NB,[],0,0,0,0,0,AH_,0,B,[],0,3,0,0,0,R1,0,B,[Cm],0,3,0,0,["T",A2k(ALd)],RZ,0,B,[Z],0,3,0,0,["h",A2k(AOm)],R0,0,B,[Fd],0,3,0,0,["hq",A2l(AWC)],PV,0,B,[FH],0,3,0,0,["dn",A2j(AT6)],PW,0,B,[Eg],0,3,0,0,["c4",A2m(AQh)],PT,0,B,[D3],0,3,0,0,["T",A2k(AQ_)],AIG,0,JA,[],0,3,0,0,0,XR,0,B,[Cs],0,0,0,0,["bz",A2k(ALA),"b6",A2m(AJA),"bQ",A2l(ALp),"cH",A2l(AKs)],SD,0,B,[Cm],0,3,0,0,["T",A2k(AWX)],SC,0,B,[Cm],0,3,0,0,["T",A2k(AT$)],SB,0,B,[Fd],0,3,0,0,["hq",A2l(AQx)],SA,0,B,[Be],0,3,0,
0,["l",A2j(AJF)],Sz,0,B,[D3],0,3,0,0,["T",A2k(ATf)],Sy,0,B,[Eg],0,3,0,0,["c4",A2m(AW9)],HP,0,BZ,[],0,3,0,0,0,AGY,0,B,[],3,3,0,0,0,Ok,0,B,[Cs],0,0,0,0,["bz",A2k(AQn),"bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(ANC)],Oe,0,B,[],0,3,0,0,0,AFW,0,B,[],0,3,0,0,0,W5,0,B,[Cm],0,3,0,0,["T",A2k(ASx)],W1,0,B,[D3],0,3,0,0,["T",A2k(AVZ)],R3,0,B,[],0,3,0,0,["bH",A2k(AVP)],W2,0,B,[Be],0,3,0,0,["l",A2j(AZq)],W3,0,B,[Be],0,3,0,0,["l",A2j(AKI)],Cn,0,B,[],0,3,0,0,0,YM,0,B,[Cm],0,3,0,0,["T",A2k(AQm)],YN,0,B,[D3],0,3,0,0,["T",A2k(AJ_)],AF4,
0,B,[],0,3,0,0,0,AId,0,B,[],0,3,0,0,0]);
$rt_metadata([Ot,0,B,[Dz],0,3,0,0,["eV",A2l(ASI)],Or,0,B,[Cm],0,3,0,0,["T",A2k(ATj)],T2,0,B,[],3,3,0,0,0,ACK,0,B,[T2],0,3,0,0,0,OH,0,B,[Cs],0,0,0,0,["b6",A2m(AUB),"bQ",A2l(AJZ),"cH",A2l(AJ3),"bz",A2k(ANA)],UH,0,B,[Eg],0,3,0,0,["c4",A2m(ASG)],R7,0,B,[Cm],0,3,0,0,["T",A2k(ASj)],Tx,0,B,[D3],0,3,0,0,["T",A2k(AY6)],Tw,0,B,[Z],0,3,0,0,["h",A2k(AVh)],Ty,0,B,[Z],0,3,0,0,["h",A2k(ALI)],Xg,0,B,[Cs],0,0,0,0,["cH",A2l(AJ$),"b6",A2m(AUB),"bz",A2k(ATP),"bQ",A2l(AYQ)],C7,0,B,[],3,3,0,Fs,0,R4,0,B,[Cs],0,0,0,0,["b6",A2m(AUB),
"bQ",A2l(APE),"cH",A2l(AKm),"bz",A2k(ANJ)],ABW,0,B,[Eg],0,3,0,0,["c4",A2m(AW2)],AAh,0,B,[Cm],0,3,0,0,["T",A2k(AMu)],AAg,0,B,[Fd],0,3,0,0,["hq",A2l(AQG)],AAf,0,B,[Fd],0,3,0,0,["hq",A2l(AMF)],AAe,0,B,[FH],0,3,0,0,["dn",A2j(ARs)],AAi,0,B,[FH],0,3,0,0,["dn",A2j(AWa)],UD,0,B,[Cm],0,3,0,0,["T",A2k(AX4)],ABL,0,B,[Cm],0,3,0,0,["T",A2k(AMc)],ABM,0,B,[D3],0,3,0,0,["T",A2k(AJ5)],AGS,0,B,[],0,3,0,0,0,EY,0,CR,[],0,3,0,0,0,UE,0,EY,[],0,3,0,0,["dd",A2j(ATM),"ih",A2l(AKR),"dB",A2k(ART),"b6",A2m(AW0),"bQ",A2l(AMw)],O9,0,B,[Be],
0,3,0,0,0,KV,0,CR,[],0,3,0,0,["dd",A2j(AV$),"eJ",A2m(AOI),"dB",A2k(AVe),"b6",A2m(AWN),"bQ",A2l(AWb),"cH",A2l(ASN),"bz",A2k(ASl),"c4",A2m(ANP),"kN",A2j(AYt)],AHq,0,B,[],0,3,0,0,["bH",A2k(AMp)],L_,0,CR,[],1,3,0,0,["dd",A2j(ASJ),"dB",A2k(AR_),"cG",A2k(AKk),"eJ",A2m(AMW),"b6",A2m(AXp),"bQ",A2l(AWQ),"cH",A2l(AXE),"bz",A2k(AYa),"c4",A2m(ANN)],ABt,0,L_,[],0,0,0,0,0,YR,0,B,[D3],0,3,0,0,["T",A2k(AUf)],YQ,0,B,[Cm],0,3,0,0,["T",A2k(ATe)],Sm,0,B,[Cm],0,3,0,0,["T",A2k(AQy)],Dg,0,B,[],3,3,0,ANV,0,Cp,0,CC,[],12,3,0,X$,0,JH,
0,B,[],0,3,0,0,0,IV,0,B,[],0,3,0,0,0,AFJ,0,B,[],0,3,0,0,0,DO,0,B,[],3,3,0,AJU,0,Q7,0,B,[BO],3,3,0,0,0,Rq,0,B,[Q7],0,3,0,0,["zl",A2l(AOr)],Q8,0,B,[BO],3,3,0,0,0,Ro,0,B,[Q8],0,3,0,0,["zl",A2l(API)],ADT,0,B,[],0,3,0,0,0,ACI,0,B,[BO],3,3,0,0,0,Z3,0,B,[],0,3,0,0,0,DW,0,B,[],3,3,0,AR4,0,Hh,0,B,[],3,3,0,0,0,QD,0,B,[Hh],0,3,0,0,["pt",A2m(AU3)],QF,0,B,[Hh],0,3,0,0,0]);
$rt_metadata([TF,0,B,[Eg],0,3,0,0,["c4",A2m(AUN)],Uo,0,B,[Cs],0,0,0,0,["bz",A2k(AY0),"b6",A2m(AUi),"bQ",A2l(AYH),"cH",A2l(ARW)],XU,0,B,[Z],0,3,0,0,["h",A2k(AS1)],P$,0,B,[Z],0,3,0,0,["h",A2k(ANt)],P8,0,B,[Z],0,3,0,0,["h",A2k(AK6)],P5,0,B,[Z],0,3,0,0,["h",A2k(AJN)],P3,0,B,[Z],0,3,0,0,["h",A2k(AYF)],AIS,0,B,[],0,3,0,0,0,Zi,0,B,[Z],0,3,0,0,["h",A2k(APK)],X9,0,B,[Cm],0,3,0,0,["T",A2k(AO$)],YH,0,CR,[],0,3,0,0,0,AIf,0,G8,[],0,0,0,0,["v9",A2k(AZa)],HQ,0,B,[],0,3,0,0,0,FC,0,HQ,[],0,3,0,0,0,PE,0,B,[Be],0,3,0,0,["l",A2j(AS_)],ACy,
0,B,[],3,3,0,0,0,AHN,0,KV,[],0,0,0,0,["ih",A2l(APh)],Ja,0,B,[],0,3,0,0,0,JB,0,B,[],4,3,0,0,0,ADs,0,B,[],0,3,0,0,0,Cq,0,CC,[],12,3,0,AEg,0,AIm,0,B,[],0,3,0,0,0,AEH,0,B,[BO],4,3,0,0,0,AIQ,0,B,[],0,3,0,0,0,Qo,0,B,[Z],0,3,0,0,["h",A2k(AJ7)],Qn,0,B,[Z],0,3,0,0,["h",A2k(AKC)],PI,0,B,[BK],0,3,0,0,["bj",A2k(AKn)],TN,0,B,[],0,3,0,0,0,N0,0,B,[Nn],0,0,0,0,["zZ",A2j(AST),"wR",A2j(AN_),"jH",A2j(AXe),"kj",A2j(AUr),"gF",A2k(AY7),"xU",A2j(AQr),"nC",A2j(ATp),"m7",A2l(AOA),"oS",A2k(AOo),"ni",A2j(KO)],C1,0,B,[BO],1,3,0,0,0,AGa,
0,C1,[],1,3,0,0,0,AG1,0,C1,[],1,3,0,0,0,ADX,0,C1,[],1,3,0,0,0,AEc,0,C1,[],1,3,0,0,0,AHu,0,C1,[],1,3,0,0,0,AAn,0,B,[Be],0,3,0,0,["l",A2j(AQa)],GR,0,CC,[],12,3,0,ARX,0,ADi,0,B,[],0,3,0,0,0,FU,0,B,[],0,3,0,0,0,AEx,0,B,[],4,3,0,0,0,Xh,0,B,[],0,0,0,0,0,Qk,0,B,[Cs],0,0,0,0,["bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB),"bz",A2k(AZv)],AEE,0,B,[BO],1,3,0,0,0,Pb,0,B,[Cs],0,0,0,0,["bQ",A2l(AXh),"cH",A2l(AJ$),"b6",A2m(AUB),"bz",A2k(AVC)],Y_,0,B,[EB],0,3,0,0,["dn",A2j(AYT)],AF7,0,B,[],3,3,0,0,0,My,0,B,[],3,3,0,0,0,SS,0,B,[My],
0,3,0,0,["uI",A2k(ALS)],Pt,0,B,[BK],0,3,0,0,["bj",A2k(AXf)],AGJ,0,B,[],0,3,0,0,0]);
$rt_metadata([Sb,0,B,[Dx],0,3,0,0,0,ACE,0,B,[],0,3,0,0,0,Ym,0,B,[],0,3,0,0,0,MR,0,B,[],0,3,0,0,0,Z4,0,B,[Z],0,3,0,0,["h",A2k(ARv)],Vh,0,B,[],3,3,0,0,0,Yg,0,B,[Z],0,3,0,0,["h",A2k(ALT)],Fp,0,B,[],3,3,0,0,0,Pn,0,B,[Fp],0,0,0,0,["cy",A2j(B_),"b2",A2j(Ca),"m3",A2j(TH)],SZ,0,B,[Be],0,3,0,0,["l",A2j(Vm)],AFv,0,B,[],3,3,0,0,0,Gm,0,Jf,[],0,3,0,0,0,AAO,0,Fc,[],0,3,0,0,0,Yw,0,B,[Z],0,3,0,0,["h",A2k(AXN)],ABB,0,B,[Be],0,3,0,0,["l",A2j(AVs)],Zk,0,B,[CH],0,3,0,0,["bH",A2k(AJP),"oh",A2j(AUV),"lt",A2k(AUo)],AA3,0,D$,[CH],
0,3,0,0,0,F8,0,B,[],0,0,0,0,0,Is,0,B,[],4,3,0,0,0,Yq,0,B,[],0,3,0,0,0,Nb,0,B,[],1,3,0,0,0,AE0,0,C1,[],1,3,0,0,0,P7,0,B,[Z],0,3,0,0,["h",A2k(AK_)],SM,0,B,[Z],0,3,0,0,["h",A2k(AKN)],Tc,0,B,[Z],0,3,0,0,["h",A2k(ASB)],S8,0,EY,[GG],0,3,0,0,["zZ",A2j(AST),"wR",A2j(AN_),"dd",A2j(AXL),"ih",A2l(AM7),"dB",A2k(AJX),"l_",A2k(AUl),"mk",A2k(AWc),"bz",A2k(AQ5),"bQ",A2l(AN1),"b6",A2m(AUG),"h7",A2k(AWz)],OL,0,B,[Be],0,3,0,0,["l",A2j(AOv)],QT,0,EY,[],0,3,0,0,["kN",A2j(AYy),"l_",A2k(AUu),"dB",A2k(AY2),"mk",A2k(AKr)],RH,0,B,[Z],
0,3,0,0,0,UJ,0,D$,[CH],0,3,0,0,0,Q_,0,B,[Be],0,3,0,0,["l",A2j(AWk)],Rk,0,B,[Be],0,3,0,0,["l",A2j(AKM)],WU,0,B,[],0,3,0,0,0,Jc,0,B,[],0,3,0,0,0,No,0,B,[],3,3,0,0,0,W4,0,B,[],0,3,0,0,0,VG,0,B,[Be],0,3,0,0,["l",A2j(AK9)],Lk,0,B,[],0,3,0,0,0,CY,0,Bt,[],0,3,0,0,0,AGr,0,Fc,[],0,3,0,0,0,Xf,0,B,[Z],0,3,0,0,["h",A2k(APv)],ADx,0,B,[],3,3,0,0,0,AIw,0,B,[],0,3,0,0,0,UA,0,B,[Z],0,3,0,0,["h",A2k(ASL)],U9,0,B,[Z],0,3,0,0,0,US,0,B,[Z],0,3,0,0,["h",A2k(ANp)],UR,0,B,[Z],0,3,0,0,["h",A2k(AXK)],Lr,0,Nb,[],1,3,0,0,0,Wq,0,Lr,[],
0,3,0,0,0,ABs,0,B,[Z],0,3,0,0,["h",A2k(AXC)]]);
$rt_metadata([QY,0,B,[EB],0,3,0,0,["dn",A2j(AKe)],QX,0,B,[EB],0,3,0,0,["dn",A2j(ANT)],Vv,0,B,[EB],0,3,0,0,["dn",A2j(ATF)],V4,0,B,[Be],0,3,0,0,["l",A2j(AXs)],U0,0,B,[BY],0,3,0,0,["X",A2k(AYc)],AE3,0,B,[BO],1,3,0,0,0,Y8,0,B,[BY],0,3,0,0,["X",A2k(AOg)],AFI,0,B,[BK],0,3,0,0,0,AGX,0,B,[BK],0,3,0,0,0,Pj,0,B,[Z],0,3,0,0,["h",A2k(AMr)],Pi,0,B,[Z],0,3,0,0,["h",A2k(AVQ)],Y5,0,B,[Be],0,3,0,0,["l",A2j(ALo)],HF,0,Bt,[],0,3,0,0,0,RQ,0,B,[Ep],0,3,0,0,0,AHB,0,B,[],0,3,0,0,0,VB,0,D8,[En,CV],0,3,0,0,0,Y6,0,B,[],0,3,0,0,0,YK,
0,B,[],0,3,0,0,0,V_,0,B,[Z],0,3,0,0,["h",A2k(AVU)],AB0,0,B,[Z],0,3,0,0,["h",A2k(APn)],Q5,0,B,[Z],0,3,0,0,["h",A2k(AY8)],Xe,0,B,[Z],0,3,0,0,["h",A2k(ASi)],R6,0,D$,[CH],0,3,0,0,0,Jg,0,B,[],4,3,0,0,0,AAM,0,B,[Be],0,3,0,0,["l",A2j(AZE)],AAN,0,B,[Be],0,3,0,0,["l",A2j(AJb)],AAP,0,B,[Be],0,3,0,0,["l",A2j(ALx)],AAQ,0,B,[Be],0,3,0,0,["l",A2j(AYC)],AAR,0,B,[Be],0,3,0,0,["l",A2j(ARy)],Ob,0,B,[BY],0,3,0,0,["X",A2k(AZz)],ABx,0,B,[],3,3,0,A1s,0,Zf,0,B,[My],0,3,0,0,["uI",A2k(Lo)],Xq,0,B,[],0,3,0,0,0,RN,0,B,[Z],0,3,0,0,["h",
A2k(AMf)],AA6,0,B,[Z],0,3,0,0,["h",A2k(ASb)],AAZ,0,B,[Hh],0,3,0,0,["pt",A2m(AXX)],Ea,0,Bt,[],0,3,0,0,0,Px,0,B,[],0,3,0,0,0,XE,0,B,[],3,3,0,A0C,0,Yl,0,B,[Z],0,3,0,0,["h",A2k(ALj)],AHL,0,B,[],0,3,0,0,0,Wg,0,B,[],0,0,0,0,0,ADn,0,B,[],3,3,0,0,0,AAV,0,B,[Z],0,3,0,0,["h",A2k(AKT)],Tk,0,B,[Np],3,3,0,0,0,Po,0,B,[Tk],3,3,0,0,0,HI,0,B,[Po],1,3,0,0,0,U4,0,HI,[],0,3,0,0,0,Ta,0,B,[],3,3,0,0,0,WT,0,B,[Z],0,3,0,0,0]);
$rt_metadata([Iq,0,G4,[],0,0,0,0,0,AA$,0,B,[BY],0,3,0,0,["X",A2k(AVF)],AA9,0,B,[BY],0,3,0,0,["X",A2k(AMS)],Z8,0,B,[BY],0,3,0,0,["X",A2k(AOJ)],Z7,0,B,[BY],0,3,0,0,["X",A2k(APH)],NR,0,B,[Z],0,3,0,0,["h",A2k(AKO)],ACR,0,B,[Z],0,3,0,0,0,AA4,0,B,[Cw],0,3,0,0,["ck",A2k(AOx)],ADy,0,B,[],0,3,0,0,0,AIX,0,B,[],0,3,0,0,0,AAS,0,B,[Be],0,3,0,0,["l",A2j(AKv)],AAT,0,B,[Be],0,3,0,0,["l",A2j(APg)],FS,0,B,[],0,3,0,0,0,ABJ,0,B,[Z],0,3,0,0,["h",A2k(AOB)],LQ,0,FS,[],0,3,0,0,0,Lm,0,FS,[],0,3,0,0,0,Zv,0,B,[Z],0,3,0,0,["h",A2k(AKB)],Se,
0,B,[],0,3,0,0,0,Q6,0,B,[Z],0,3,0,0,["h",A2k(ARY)],S_,0,B,[Ep],0,3,0,0,["T",A2k(AZB)],JL,0,Ea,[],0,3,0,0,0,IC,0,Bt,[],0,3,0,0,0,MU,0,Bt,[],0,3,0,0,0,RC,0,B,[Z],0,3,0,0,["h",A2k(ATE)],AIT,0,B,[Z],0,3,0,0,0,S2,0,B,[Be],0,3,0,0,["l",A2j(AZD)],SO,0,B,[Ta],0,3,0,0,0,SP,0,B,[Be],0,3,0,0,["l",A2j(AKE)],RT,0,B,[],1,3,0,0,0,Ho,0,B,[],0,3,0,0,0,Rf,0,B,[GD],3,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],E7,0,Fh,[Rf],1,3,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],Rz,0,E7,[],0,0,0,0,["nL",A2k(AQb)],NG,0,B,[Z],0,3,0,0,["h",A2k(ANG)],Ya,0,
B,[Z],0,3,0,0,["h",A2k(AQ3)],JX,0,B,[],0,3,0,0,["bH",A2k(AF2)],Na,0,JX,[],0,3,0,0,["bH",A2k(ALe)],E0,0,B,[],0,3,0,0,["bH",A2k(ADc)],GP,0,E0,[],0,3,0,0,0,Jq,0,E0,[],0,3,0,0,["bH",A2k(AXS)],JO,0,E0,[],0,3,0,0,["bH",A2k(AKb)],AFs,0,B,[HB],0,3,0,0,0,AEv,0,HI,[],0,3,0,0,0,Ut,0,B,[Be],0,3,0,0,["l",A2j(APu)],Uu,0,B,[Be],0,3,0,0,["l",A2j(AL5)],Ur,0,B,[Be],0,3,0,0,["l",A2j(AKw)],Us,0,B,[Be],0,3,0,0,["l",A2j(APp)],TB,0,B,[Be],0,3,0,0,["l",A2j(AUL)],TA,0,B,[Be],0,3,0,0,["l",A2j(ASZ)],Tz,0,B,[Be],0,3,0,0,["l",A2j(AZn)]]);
$rt_metadata([Ri,0,B,[Be],0,3,0,0,["l",A2j(ASU)],SN,0,B,[],3,3,0,0,0,Sp,0,B,[Be],0,3,0,0,["l",A2j(ALR)],AGD,0,B,[],0,3,0,0,0,AC7,0,B,[],0,3,0,0,0,SU,0,B,[HB],0,3,0,0,["o1",A2l(AP3)],Zb,0,B,[],0,3,0,0,0,ZX,0,BD,[],0,3,0,0,0,O0,0,B,[Be],0,3,0,0,["l",A2j(AP7)],O1,0,B,[Be],0,3,0,0,["l",A2j(AWZ)],OZ,0,B,[Be],0,3,0,0,["l",A2j(AI9)],Z6,0,B,[Be],0,3,0,0,["l",A2j(ARc)],Z5,0,B,[Be],0,3,0,0,["l",A2j(AVd)],Rd,0,B,[EB],0,3,0,0,["dn",A2j(AMX)],Vb,0,B,[Be],0,3,0,0,["l",A2j(APF)],Vc,0,B,[Be],0,3,0,0,["l",A2j(AWB)],ABH,0,B,
[Be],0,3,0,0,["l",A2j(AJq)],ABC,0,B,[Be],0,3,0,0,["l",A2j(APJ)],ABD,0,B,[Be],0,3,0,0,["l",A2j(AYk)],ABE,0,B,[Be],0,3,0,0,["l",A2j(ARw)],ABF,0,B,[Be],0,3,0,0,["l",A2j(AOZ)],N1,0,B,[EB],0,3,0,0,["dn",A2j(AWT)],AAH,0,B,[BK],0,3,0,0,0,YG,0,B,[HB],0,3,0,0,["o1",A2l(AJ8)],Fx,0,B,[],0,3,0,0,0,SJ,0,B,[BY],0,3,0,0,["X",A2k(AM6)],AIr,0,B,[CH],0,3,0,0,["bH",A2k(AS0)],OF,0,B,[Z],0,3,0,0,["h",A2k(AQ1)],AB1,0,B,[Z],0,3,0,0,["h",A2k(AZx)],Jz,0,B,[BO],3,3,0,0,0,N9,0,B,[Jz],0,3,0,0,["uH",A2j(APN)],NN,0,B,[Jz],0,3,0,0,["uH",
A2j(AJc)],Xv,0,B,[Hh],0,3,0,0,0,AA8,0,B,[BY],0,3,0,0,["X",A2k(AO6)],Lc,0,E7,[],1,0,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],Yx,0,Lc,[],0,0,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],Mp,0,D8,[],1,0,0,0,0,Yu,0,Mp,[],0,0,0,0,0,M2,0,EZ,[Mh],1,0,0,0,["e8",A2k(AI_),"jy",A2j(AMJ),"oP",A2k(ARP),"nL",A2k(AQj)],Yv,0,M2,[],0,0,0,0,["e8",A2k(AI_),"nK",A2k(AR0),"cX",A2j(AQT),"ca",A2j(ANi),"en",A2j(AKj)],Ys,0,B,[Fp],0,0,0,0,["cy",A2j(AJY),"b2",A2j(ATD),"m3",A2j(AVv)],RP,0,B,[Fp],3,3,0,0,0,Yt,0,B,[RP],0,0,0,0,0,ACa,0,B,[HS],0,3,0,0,0,Fq,
0,B,[],0,0,0,0,0,VH,0,Fq,[Fp],0,0,0,0,0,ADl,0,B,[Z],0,0,0,0,0,TM,0,B,[CV],4,3,0,0,0,UP,0,B,[Z],0,3,0,0,["h",A2k(ARL)],UO,0,B,[Z],0,3,0,0,["h",A2k(AUp)]]);
$rt_metadata([XK,0,E7,[],0,0,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],RA,0,Fh,[],0,0,0,0,["e8",A2k(AI_),"nL",A2k(AQb)],Qs,0,B,[Z],0,3,0,0,["h",A2k(AMA)],Og,0,B,[],0,3,0,0,0,TO,0,B,[],0,3,0,0,0,Hf,0,B,[],3,3,0,0,0,Wz,0,B,[Hf],0,3,0,0,["kC",A2m(AR3)],WA,0,B,[Hf],0,3,0,0,["kC",A2m(AO7)],IO,0,B,[CV,CH],0,3,0,0,0,Ky,0,B,[],3,3,0,0,0,Un,0,B,[Ky],0,3,0,0,0,QR,0,B,[Ky],3,3,0,0,0,AFw,0,B,[QR],0,3,0,0,0,UX,0,B,[Hf],0,3,0,0,["kC",A2m(ASV)],UW,0,B,[Ep],0,3,0,0,["T",A2k(AX3)],UV,0,B,[Ep],0,3,0,0,["T",A2k(AUy)],UZ,0,B,[Hf],0,3,
0,0,["kC",A2m(ASg)],Gt,0,CC,[],12,0,0,Vr,0,ACc,0,B,[Z],0,3,0,0,["h",A2k(AN6)],BP,0,B,[],1,0,0,0,["cp",A2m(Im),"cw",A2n(Iz),"i0",A2j(ALv),"R",A2k(AW5),"bX",A2k(AW3),"f3",A2j(AYd),"eT",A2j(JU)],OS,0,B,[Be],0,3,0,0,["l",A2j(AOX)],AB2,0,B,[Z],0,3,0,0,["h",A2k(AS2)],AB3,0,B,[Z],0,3,0,0,["h",A2k(AN8)],Wx,0,B,[],32,0,0,A1b,0,Vx,0,B,[Z],0,3,0,0,["h",A2k(AUD)],ABw,0,B,[Z],0,3,0,0,["h",A2k(AXg)],CZ,0,BP,[],0,0,0,Nr,["c",A2m(AKJ),"L",A2k(ALa)],Hi,0,B,[],0,0,0,0,0,Jt,0,BR,[],0,3,0,0,0,P2,0,B,[Be],0,3,0,0,["l",A2j(AJW)],AAI,
0,B,[BY],0,3,0,0,["X",A2k(ATV)],AFZ,0,B,[BO],3,3,0,0,0,W_,0,B,[BY],0,3,0,0,["X",A2k(ATw)],Uj,0,CZ,[],0,0,0,0,["c",A2m(AJ1),"L",A2k(AVl)],ABr,0,CZ,[],0,0,0,0,["c",A2m(AMg)],Sg,0,CZ,[],0,0,0,0,["c",A2m(ALq)],VI,0,CZ,[],0,0,0,0,["c",A2m(AJ9),"L",A2k(ATG)],F4,0,CZ,[],0,0,0,0,["c",A2m(AXv)],B9,0,BP,[],1,0,0,0,["c",A2m(AY1),"b3",A2j(AWo),"L",A2k(APX)],AHG,0,B9,[],0,0,0,0,["bA",A2l(AVO),"cp",A2m(ANO),"cw",A2n(AL9),"L",A2k(AJ6)],B4,0,BP,[],0,0,0,0,["c",A2m(AOF),"R",A2k(ATy),"bX",A2k(AQU),"L",A2k(AUn),"eT",A2j(AL3)],JK,
0,B4,[],0,0,0,0,["c",A2m(ATc),"L",A2k(AUO)],DZ,0,JK,[],0,0,0,0,["c",A2m(AMQ),"R",A2k(AUw)],N7,0,DZ,[],0,0,0,0,["c",A2m(ATt),"L",A2k(AW_)],Zq,0,DZ,[],0,0,0,0,["c",A2m(AK5),"L",A2k(AWu)],TS,0,DZ,[],0,0,0,0,["c",A2m(ALZ),"L",A2k(AZt)],Wr,0,DZ,[],0,0,0,0,["c",A2m(AJx),"L",A2k(AU8)],G5,0,B4,[],0,0,0,0,["c",A2m(AJS),"cp",A2m(ARh),"cw",A2n(AVp),"bX",A2k(AQN),"f3",A2j(ATB),"eT",A2j(AYh)],Hl,0,B,[],1,0,0,0,0,W,0,Hl,[],1,0,0,QV,["dC",A2j(AK8),"fs",A2j(AKt),"kI",A2j(AWg),"hZ",A2j(AX$)]]);
$rt_metadata([ADJ,0,W,[],0,0,0,0,["p",A2k(C8),"dC",A2j(C3),"fs",A2j(ANH),"kI",A2j(AWP),"cQ",A2j(ASn),"hZ",A2j(AN0)],J4,0,Bt,[],0,3,0,0,0,El,0,BP,[],1,0,0,0,["bX",A2k(AVq),"L",A2k(AXk),"eT",A2j(ARJ)],C9,0,El,[],0,0,0,0,["c",A2m(AJz)],FF,0,C9,[],0,0,0,0,["c",A2m(AKL)],C0,0,El,[],0,0,0,0,["c",A2m(AJR)],EW,0,C9,[],0,0,0,0,["c",A2m(ARq),"R",A2k(AZy)],ZE,0,C9,[],0,0,0,0,["c",A2m(AYR),"cp",A2m(ASh)],Bf,0,B,[],1,0,0,0,0,Dn,0,BR,[],0,3,0,0,0,Ov,0,Hl,[En],0,0,0,0,["cQ",A2j(ASs)],Qj,0,BP,[],0,0,0,0,["c",A2m(AQp),"L",A2k(ATx)],AAw,
0,B,[En,CV],0,3,0,0,0,Oh,0,B4,[],0,0,0,0,0,S5,0,B4,[],0,0,0,0,["c",A2m(AKF),"R",A2k(ATa),"L",A2k(ALy),"bX",A2k(AK7)],DM,0,B4,[],0,0,0,0,["c",A2m(ANw),"p",A2k(AOe),"bX",A2k(AKA),"R",A2k(AV7),"L",A2k(ANL)],J1,0,DM,[],0,0,0,0,["p",A2k(APY)],ADw,0,B9,[],0,0,0,0,["bA",A2l(AQq)],Ex,0,B9,[],0,0,0,0,["bA",A2l(NJ),"bX",A2k(ATA)],QW,0,B4,[],0,0,0,0,["R",A2k(ARo),"c",A2m(AJo),"bX",A2k(ALl),"L",A2k(AWU)],EI,0,B9,[],0,0,0,0,["b3",A2j(AP6),"bA",A2l(AOU),"cp",A2m(ANr),"cw",A2n(AQd),"bX",A2k(AWK)],AIk,0,B9,[],0,0,0,0,["bA",
A2l(AJd)],ACt,0,B9,[],0,0,0,0,["bA",A2l(AJH)],FN,0,B4,[],0,0,0,0,["R",A2k(AYg),"c",A2m(ATb),"bX",A2k(AQs),"L",A2k(AUx)],AA7,0,FN,[],0,0,0,0,0,WI,0,FN,[],0,0,0,0,0,ACf,0,C0,[],0,0,0,0,["c",A2m(AMo)],R8,0,C0,[],0,0,0,0,["c",A2m(AR5)],Gn,0,C0,[],0,0,0,0,["c",A2m(AV4),"R",A2k(AXB)],RF,0,Gn,[],0,0,0,0,["c",A2m(AP9),"R",A2k(ASw)],FL,0,C0,[],0,0,0,0,["c",A2m(AZp)],OK,0,FL,[],0,0,0,0,["c",A2m(APq)],Uc,0,C0,[],0,0,0,0,["c",A2m(AYq)],Td,0,Gn,[],0,0,0,0,["c",A2m(ALB)],XN,0,FL,[],0,0,0,0,["c",A2m(AKh)],Ud,0,El,[],0,0,0,
0,["c",A2m(AY$),"cp",A2m(AWj)],Qu,0,El,[],0,0,0,0,["c",A2m(ATC),"cp",A2m(AJs)],Ff,0,B,[],1,0,0,0,0,ACg,0,C9,[],0,0,0,0,["c",A2m(AKi)],ZA,0,EW,[],0,0,0,0,["c",A2m(AR2)],Rl,0,FF,[],0,0,0,0,["c",A2m(AVt)],S$,0,C9,[],0,0,0,0,["c",A2m(ATv)],WY,0,EW,[],0,0,0,0,["c",A2m(AKx)],TT,0,FF,[],0,0,0,0,["c",A2m(AVR)],Lq,0,BP,[],4,0,0,0,["c",A2m(AQS),"L",A2k(APG)],AEe,0,BP,[],0,0,0,0,["c",A2m(AK2),"L",A2k(ALh)],Qp,0,BP,[],0,0,0,0,["c",A2m(AP0),"L",A2k(AZi)],AAE,0,BP,[],4,0,0,0,["c",A2m(AUe),"L",A2k(AMa)],Z2,0,BP,[],0,0,0,0,
["c",A2m(AS7),"L",A2k(AJa)],O2,0,BP,[],0,0,0,0,["c",A2m(AL1),"L",A2k(AOu)]]);
$rt_metadata([AH3,0,B4,[],0,0,0,0,["c",A2m(AYA),"R",A2k(ALn),"i0",A2j(ASE),"L",A2k(ALm)],ADH,0,B4,[],4,0,0,0,["c",A2m(ASW),"R",A2k(AVg),"i0",A2j(AI6),"L",A2k(AYY)],AHQ,0,BP,[],4,0,0,0,["c",A2m(AQz),"L",A2k(AOp)],AFX,0,BP,[],0,0,0,0,["c",A2m(AS4),"L",A2k(AOa)],ACq,0,BP,[],0,0,0,0,["c",A2m(APt),"L",A2k(AMe)],HK,0,B4,[],0,0,0,0,["c",A2m(AKp),"R",A2k(AUt),"L",A2k(AUR)],AHX,0,HK,[],0,0,0,0,["c",A2m(AMm),"cp",A2m(AW8),"cw",A2n(AJ2),"bX",A2k(ARR)],AEX,0,HK,[],0,0,0,0,["c",A2m(ARa)],Qi,0,GT,[IE],0,3,0,0,["nY",A2n(AN3),
"mR",A2m(AK$),"jd",A2k(ALM),"oB",A2l(AWn)],Uf,0,B9,[],0,0,0,0,["bA",A2l(AMM),"cp",A2m(AKY),"cw",A2n(AOt),"bX",A2k(AO8)],ACp,0,B9,[],0,0,0,0,["bA",A2l(ARj)],OQ,0,B9,[],0,0,0,0,["bA",A2l(AVw)],HJ,0,B,[],4,0,0,AU6,0,NX,0,B9,[],0,0,0,0,["bA",A2l(AVE)],LZ,0,B4,[],0,0,0,0,["R",A2k(ATr),"c",A2m(AMb),"cp",A2m(AO5),"cw",A2n(AMU),"bX",A2k(AJ0),"L",A2k(AWv)],Mf,0,B4,[],0,0,0,0,["R",A2k(ALL),"c",A2m(AJy),"cp",A2m(ATO),"cw",A2n(AVu),"bX",A2k(AMN),"L",A2k(AT1)],D9,0,B9,[],0,0,0,0,["bA",A2l(AUS),"cp",A2m(ASo),"cw",A2n(ALK),
"bX",A2k(AUA)],Yi,0,Ff,[],0,0,0,0,["iO",A2k(ALX),"wt",A2l(AUK)],Yj,0,Ff,[],0,0,0,0,["iO",A2k(AVS),"wt",A2l(AX5)],AGT,0,B,[],0,0,0,0,0,ACN,0,B,[],0,0,0,0,0,LV,0,Bf,[],0,0,0,0,["E",A2j(AE7)],KR,0,Bf,[],0,0,0,0,["E",A2j(AFN)],AGM,0,Bf,[],0,0,0,0,["E",A2j(AVj)],AHl,0,Bf,[],0,0,0,0,["E",A2j(AWx)],AHo,0,Bf,[],0,0,0,0,["E",A2j(ANx)],LP,0,Bf,[],0,0,0,0,["E",A2j(ADL)],Mr,0,LP,[],0,0,0,0,["E",A2j(AEA)],AIV,0,Bf,[],0,0,0,0,["E",A2j(AO3)],NE,0,Mr,[],0,0,0,0,["E",A2j(ACn)],AFm,0,NE,[],0,0,0,0,["E",A2j(ARK)],AFG,0,Bf,[],
0,0,0,0,["E",A2j(AME)],AD8,0,Bf,[],0,0,0,0,["E",A2j(ARG)],ADU,0,Bf,[],0,0,0,0,["E",A2j(AX9)],AHt,0,Bf,[],0,0,0,0,["E",A2j(ASA)],AI5,0,Bf,[],0,0,0,0,["E",A2j(AJp)],AGU,0,Bf,[],0,0,0,0,["E",A2j(APz)],AGC,0,Bf,[],0,0,0,0,["E",A2j(AUZ)],AHI,0,Bf,[],0,0,0,0,["E",A2j(AMB)],AC5,0,Bf,[],0,0,0,0,["E",A2j(AM5)],ACG,0,Bf,[],0,0,0,0,["E",A2j(AX2)],AG5,0,Bf,[],0,0,0,0,["E",A2j(AJf)],AHe,0,Bf,[],0,0,0,0,["E",A2j(AQD)],AEt,0,Bf,[],0,0,0,0,["E",A2j(ANf)],AFK,0,Bf,[],0,0,0,0,["E",A2j(AOy)],AIC,0,Bf,[],0,0,0,0,["E",A2j(AQF)],AHa,
0,Bf,[],0,0,0,0,["E",A2j(AWY)],AEU,0,Bf,[],0,0,0,0,["E",A2j(AUb)],AEs,0,Bf,[],0,0,0,0,["E",A2j(ASp)],AI1,0,Bf,[],0,0,0,0,["E",A2j(AVa)]]);
$rt_metadata([Kd,0,Bf,[],0,0,0,0,["E",A2j(AFH)],AHM,0,Kd,[],0,0,0,0,["E",A2j(ASa)],AFq,0,LV,[],0,0,0,0,["E",A2j(AKU)],AEm,0,KR,[],0,0,0,0,["E",A2j(AOP)],ADZ,0,Bf,[],0,0,0,0,["E",A2j(AQW)],AEh,0,Bf,[],0,0,0,0,["E",A2j(AXQ)],AFc,0,Bf,[],0,0,0,0,["E",A2j(AN7)],AFn,0,Bf,[],0,0,0,0,["E",A2j(AJg)],AD3,0,B,[],4,0,0,0,0,ADt,0,B,[],4,3,0,0,0,O5,0,B,[],0,3,0,0,0,AG8,0,B,[],0,3,0,0,0,AER,0,B,[],4,3,0,0,0,Xz,0,Fq,[Fp],0,0,0,0,0,TR,0,Fq,[Fp],0,0,0,0,0,ADI,0,B,[Ep],0,3,0,0,0,U8,0,B,[Z],0,3,0,0,["h",A2k(AOn)],T3,0,B,[Z],0,
3,0,0,["h",A2k(AL8)],ACi,0,B,[Be],0,3,0,0,0,Ye,0,B,[Ep],0,0,0,0,["T",A2k(AND)],Va,0,B,[Z],0,3,0,0,0,AB_,0,B,[Z],0,3,0,0,0,ZD,0,W,[],0,0,0,0,["p",A2k(ANF)],ZC,0,W,[],0,0,0,0,["p",A2k(AJO)],Qz,0,W,[],0,0,0,0,["p",A2k(AQL),"cQ",A2j(AOC)],QK,0,W,[],0,0,0,0,["p",A2k(AUX)],QI,0,W,[],0,0,0,0,["p",A2k(AVD)],QJ,0,W,[],0,0,0,0,["p",A2k(ARi)],QN,0,W,[],0,0,0,0,["p",A2k(AM_)],QO,0,W,[],0,0,0,0,["p",A2k(AI7)],QL,0,W,[],0,0,0,0,["p",A2k(AOH)],QM,0,W,[],0,0,0,0,["p",A2k(ARm)],QP,0,W,[],0,0,0,0,["p",A2k(AXa)],QQ,0,W,[],0,0,
0,0,["p",A2k(AMt)],Qy,0,W,[],0,0,0,0,["p",A2k(AZC)],Rr,0,W,[],0,0,0,0,["p",A2k(AON)],Qw,0,W,[],0,0,0,0,["p",A2k(AMs)],Qx,0,W,[],0,0,0,0,["p",A2k(AOk)],QC,0,W,[],0,0,0,0,["p",A2k(AP2)],Qv,0,W,[],0,0,0,0,["p",A2k(AWH)],QA,0,W,[],0,0,0,0,["p",A2k(ALc)],QB,0,W,[],0,0,0,0,["p",A2k(ATZ)],MY,0,B,[],3,3,0,0,0,Vn,0,B,[MY],4,3,0,0,0,C6,0,B,[],3,3,0,AHr,0,Cv,0,CC,[],12,3,0,AGq,0,DI,0,B,[],3,3,0,AKd,0,ABe,0,B,[Z],0,3,0,0,["h",A2k(AXt)],OC,0,G5,[],0,0,0,0,["cp",A2m(AN$),"cw",A2n(AZo),"f3",A2j(AL_)],S0,0,Bt,[],0,3,0,0,0]);
$rt_metadata([AAX,0,Bt,[],0,3,0,0,0,Yd,0,Gm,[],0,3,0,0,0,SI,0,Gm,[],0,3,0,0,0,Nx,0,Bt,[],0,3,0,0,0,TU,0,B,[Z],0,3,0,0,0,TV,0,B,[Z],0,3,0,0,["h",A2k(AKy)],X6,0,B,[],0,3,0,0,0,AC1,0,B,[],0,3,0,0,0,RL,0,B,[Z],0,3,0,0,["h",A2k(AQw)],ADr,0,B,[],3,3,0,0,0,Sw,0,B,[Jz],0,3,0,0,["uH",A2j(AQ4)],W9,0,B,[Z],0,3,0,0,0,Xa,0,B,[Z],0,3,0,0,["h",A2k(AXG)],Yb,0,B,[MY],0,0,0,0,0,N6,0,B,[Be],0,3,0,0,["l",A2j(AO2)],VZ,0,W,[],0,0,0,0,["p",A2k(AXu)],Oa,0,W,[],0,0,0,0,["p",A2k(AKQ)],Ux,0,W,[],0,0,0,0,["p",A2k(AKu)],Uw,0,W,[],0,0,0,
0,["p",A2k(AN5)],AAd,0,W,[],0,0,0,0,["p",A2k(APP)],Rc,0,W,[],0,0,0,0,["p",A2k(AXx)],Qd,0,W,[],0,0,0,0,["p",A2k(ATl)],Tt,0,W,[],0,0,0,0,["p",A2k(AU5)],N5,0,W,[],0,0,0,0,["p",A2k(AYV)],N$,0,W,[],0,0,0,0,["p",A2k(AMT)],PF,0,W,[],0,0,0,0,["p",A2k(AXJ)],RK,0,W,[],0,0,0,0,["p",A2k(ARD)],RV,0,W,[],0,0,0,0,["p",A2k(AUq)],WC,0,W,[],0,0,0,0,["p",A2k(AXb)],Vo,0,W,[],0,0,0,0,["p",A2k(AYl)],Op,0,W,[],0,0,0,0,["p",A2k(AMC)],Nk,0,W,[],0,0,0,0,["p",A2k(ATo)],Um,0,Nk,[],0,0,0,0,["p",A2k(AV8)],AAJ,0,B,[BY],0,3,0,0,["X",A2k(AOw)],AAL,
0,B,[BY],0,3,0,0,["X",A2k(ALb)],YJ,0,B,[BY],0,3,0,0,["X",A2k(AUd)],YL,0,B,[BY],0,3,0,0,["X",A2k(ASF)],Xx,0,B,[BY],0,3,0,0,["X",A2k(AQZ)],ADg,0,B,[],0,0,0,0,0]);
function $rt_array(cls,data){this.Tz=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowMinDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","Editor0","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","ClipboardTest","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas","Segoe UI","#e3c8ab","#39322b","hello string","withString",
"withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","","","w = ",", lineHeight = ","","Project root","root.countAll() = ","DiffMiddleLine","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","java","example.java","...","Usages of ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","text","cpp","activity","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","parser >","open ...","font pow >","Development >","  ","Set editor font to: ",", ascent+descent = ",
", caretHeight = ","topBase(font, lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","{","{}","(","()","[]","<","<>","\"","\"\"","\'","\'\'","JavaProxy.parseViewport","deleteDiffModel","ns-resize","ew-resize","trying to display with unknown screen size and dpr",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js","js",".activity","/Full file parsed in ","ms","ScopeUtils.resolveAll","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","CppProxy.parseFullFileScopes",
"JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","LineParser.parse","JavaProxy.parseFullFileScopes","/Model::iterativeParsing","asyncIterativeParsing","allocRenderLines to ","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN"," name: ","File is too large: ",", size = ","JsArrayView{ buffer.byteLength = "," }","\\n","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New",
"jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","FindUsagesView1","Window 1: ","scrollPos: ","fibonacci","WorkerTest: \n  got ","  methodWithBytesResult: ",", bytes = ","writeClipboardText ","Window 1","Window 2","Folder ","ClassFile ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ",
"getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","onContextMenu",
"tbH onClickOutside","tbV onClickOutside","newWindow","|The sample text","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","todo: add directory worker test ","asyncWithFile","#A9B7C6","#344134","#40332B"," on Copy","nwse-resize","nesw-resize","/","#BCBEC4","#313438","#214283","#2B2D30","#373B39","#402F33","defaultText","keyword","#CF8E6D",
"field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ","#3C3F41","#4B6EAF","#787878","onEnter item ","  methodWithStringResult = ","  methodWithCharsResult: ",", chars = ","methodWithIntsResult: ",", ints = ","open file ","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D",
"#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA"," readClipboardText: "," writeClipboardText \'","\' ok","newAction must be non-null"," error: ","/Viewport parsed in ","Illegal language: ","/Model::onFileIterativeParsed","The last byte in dst "," onPastePlainText: ","onPopupClosed","showOpenFilePicker -> ","showDirectoryPicker -> ","Expected "," ints to write, but "," written","/First lines parsed in ","/File structure parsed in ","Int","Iter","VP","Resolve","Rep","No definition or usages","fib(",
") result = ",") time = ","/Resolved in ","readClipboardText error: "," ints to read, but "," read","Unknown scope type: ","Current Version: ","Last Parsed Version: ","Unexpected type: ","Unexpected ref node type: ","DEF","DECL","writeClipboardText error: ","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart",
"javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam",
"Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols",
"NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation",
"CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea",
"CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3",
"#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","file = ","file.content.length = "]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(ALE(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CM=Long_add;var IK=Long_sub;var Ce=Long_mul;var AG2=Long_div;var AJG=Long_rem;var A0k=Long_or;var C4=Long_and;var A5$=Long_xor;var G2=Long_shl;var A0D=Long_shr;var Gg=Long_shru;var A5_=Long_compare;var Io=Long_eq;var A6a=Long_ne;var A0f=Long_lt;var ANk=Long_le;var A6b=Long_gt;var A0c=Long_ge;var A6c=Long_not;var A0Z=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A03);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=WK.prototype;c.f=c.X;c=WL.prototype;c.f=c.X;c=WJ.prototype;c.f=c.X;c=OO.prototype;c.f=c.X;c=AFp.prototype;c.get=c.Op;Object.defineProperty(c,"length",{get:c.NI});c=ACV.prototype;c.createEntityReference=c.GZ;c.getElementById=c.KY;c.createTextNode=c.Kx;c.hasChildNodes=c.ID;c.querySelectorAll=c.Gu;c.removeChild=c.M$;c.cloneNode=c.Ev;c.createComment=c.Pm;c.insertBefore=c.Hu;c.getElementsByTagNameNS=c.ND;c.hasAttributes=c.J3;c.normalize=c.Py;c.hasChildNodesJS=c.Pi;c.getElementsByTagName=c.Oo;c.appendChild
=c.E1;c.createAttributeNS=c.Lt;c.dispatchEvent=c.OQ;c.replaceChild=c.Fy;c.createElementNS=c.HS;c.createCDATASection=c.Nl;c.querySelector=c.J2;c.createElement=c.Mg;c.isSupported=c.Nn;c.importNode=c.HP;c.removeEventListener=c.HG;c.createAttribute=c.OU;c.createDocumentFragment=c.Dw;c.createProcessingInstruction=c.GR;c.addEventListener=c.Mc;Object.defineProperty(c,"nodeName",{get:c.E0});Object.defineProperty(c,"documentElement",{get:c.Jq});Object.defineProperty(c,"childNodes",{get:c.MY});Object.defineProperty(c,
"prefix",{get:c.HZ,set:c.PM});Object.defineProperty(c,"implementation",{get:c.NR});Object.defineProperty(c,"textContent",{get:c.Pv,set:c.Kv});Object.defineProperty(c,"parentNode",{get:c.KU});Object.defineProperty(c,"nextSibling",{get:c.Jc});Object.defineProperty(c,"nodeType",{get:c.MI});Object.defineProperty(c,"doctype",{get:c.I2});Object.defineProperty(c,"localName",{get:c.Oh});Object.defineProperty(c,"nodeValue",{get:c.IF,set:c.O8});Object.defineProperty(c,"firstChild",{get:c.Oy});Object.defineProperty(c,
"lastChild",{get:c.Mr});Object.defineProperty(c,"previousSibling",{get:c.EE});Object.defineProperty(c,"namespaceURI",{get:c.F_});Object.defineProperty(c,"attributes",{get:c.H6});Object.defineProperty(c,"ownerDocument",{get:c.Gn});c=PG.prototype;c.f=c.X;c=ADP.prototype;c.removeEventListener=c.Gw;c.dispatchEvent=c.HD;c.addEventListener=c.Ln;c=YC.prototype;c.onAnimationFrame=c.J5;c=YA.prototype;c.f=c.zl;c=Yy.prototype;c.handleEvent=c.ck;c=Vg.prototype;c.f=c.X;c=ZN.prototype;c.handleEvent=c.ck;c=ZO.prototype;c.handleEvent
=c.ck;c=ZP.prototype;c.handleEvent=c.ck;c=ZQ.prototype;c.handleEvent=c.ck;c=ZR.prototype;c.handleEvent=c.ck;c=ZS.prototype;c.handleEvent=c.ck;c=ZT.prototype;c.handleEvent=c.ck;c=ZU.prototype;c.handleEvent=c.ck;c=ZV.prototype;c.handleEvent=c.ck;c=ZW.prototype;c.handleEvent=c.ck;c=ABR.prototype;c.handleEvent=c.ck;c=ABS.prototype;c.handleEvent=c.ck;c=ABT.prototype;c.handleEvent=c.ck;c=ABU.prototype;c.handleEvent=c.ck;c=Xo.prototype;c.handleEvent=c.ck;c=ABh.prototype;c.f=c.X;c=ABi.prototype;c.f=c.X;c=OY.prototype;c.f
=c.X;c=OX.prototype;c.f=c.X;c=OV.prototype;c.f=c.X;c=OU.prototype;c.f=c.X;c=Py.prototype;c.accept=c.O9;c=Oc.prototype;c.f=c.X;c=Of.prototype;c.f=c.X;c=Od.prototype;c.f=c.X;c=Rq.prototype;c.f=c.zl;c=Ro.prototype;c.f=c.zl;c=U0.prototype;c.f=c.X;c=Y8.prototype;c.f=c.X;c=Ob.prototype;c.f=c.X;c=AA$.prototype;c.f=c.X;c=AA9.prototype;c.f=c.X;c=Z8.prototype;c.f=c.X;c=Z7.prototype;c.f=c.X;c=AA4.prototype;c.handleEvent=c.ck;c=SJ.prototype;c.f=c.X;c=N9.prototype;c.onTimer=c.uH;c=NN.prototype;c.onTimer=c.uH;c=AA8.prototype;c.f
=c.X;c=AAI.prototype;c.f=c.X;c=W_.prototype;c.f=c.X;c=Sw.prototype;c.onTimer=c.uH;c=AAJ.prototype;c.f=c.X;c=AAL.prototype;c.f=c.X;c=YJ.prototype;c.f=c.X;c=YL.prototype;c.f=c.X;c=Xx.prototype;c.f=c.X;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);