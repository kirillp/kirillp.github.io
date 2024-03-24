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
function $rt_cls(cls){return T7(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Gz(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.ci.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AUM(t);}
function $rt_throwableCause(t){return A35(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A9u());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IE();}
function $rt_setThread(t){return AT6(t);}
function $rt_createException(message){return A9v(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A9w());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BP=$rt_compare;var A9x=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var Jy=$rt_isInstance;var A9y=$rt_nativeThread;var A9z=$rt_suspending;var A9A=$rt_resuming;var A9B=$rt_invalidPointer;var C=$rt_s;var Bm=$rt_eraseClinit;var Bc=$rt_imul;var E_=$rt_wrapException;var A9C=$rt_checkBounds;var A9D=$rt_checkUpperBound;var A9E=$rt_checkLowerBound;var A9F=$rt_wrapFunction0;var A9G=$rt_wrapFunction1;var A9H=$rt_wrapFunction2;var A9I=$rt_wrapFunction3;var A9J=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var AKO=$rt_createCharArrayFromData;var A7x=$rt_createByteArrayFromData;var A77=$rt_createShortArrayFromData;var D6=$rt_createIntArrayFromData;var A9K=$rt_createBooleanArrayFromData;var A9L=$rt_createFloatArrayFromData;var A9M=$rt_createDoubleArrayFromData;var AJ8=$rt_createLongArrayFromData;var A9t=$rt_createBooleanArray;var DS=$rt_createByteArray;var A9N=$rt_createShortArray;var B6=$rt_createCharArray;var BQ=$rt_createIntArray;var A9O=$rt_createLongArray;var ANk=$rt_createFloatArray;var A9P
=$rt_createDoubleArray;var BP=$rt_compare;var A9Q=$rt_castToClass;var A9R=$rt_castToInterface;var A9S=Long_toNumber;var Bq=Long_fromInt;var A9T=Long_fromNumber;var D=Long_create;var FV=Long_ZERO;var A9U=Long_hi;var G_=Long_lo;
function B(){this.$id$=0;}
function BG(a){return T7(a.constructor);}
function ASx(a,b){return a!==b?0:1;}
function AF_(a){var b,c,d,e,f,g,h,i,j;b=M7(a);if(!b)c=C(0);else{d=(((32-Yj(b)|0)+4|0)-1|0)/4|0;e=B6(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=IB((b>>>g|0)&15,16);g=g-4|0;h=i;}c=Gz(e);}j=new J;L(j);H(H(j,C(1)),c);return K(j);}
function M7(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ARP(a){var b,c,d;if(!Jy(a,Ed)&&a.constructor.$meta.item===null){b=new Vj;X(b);N(b);}b=ANr(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function SI(){var a=this;B.call(a);a.CM=0;a.qY=null;}
function A8S(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;AMm();AJH();AHg();AH3();AJn();AKw();AHq();AFH();AFD();AGU();AIO();AJG();ALU();AHP();AK4();AKA();AIs();AHJ();AKI();AMD();AHs();AKc();AGW();AL2();ALt();AJY();AJf();ALZ();ALA();AIJ();c=(AFV()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Zc(C(2),C(3));else{d=new SI;BD(d);e=new ACz;e.Bt=d;f=new XJ;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new P$;j.zn
=i;j.zo=g;j.zp=6;j.zq=e;j.zk=f;k=Bw(j,"f");i.onmessage=k;h=h+1|0;}l=I(Mt,[Fm(C(4),C(5),300),Fm(C(6),C(7),300),Fm(C(8),C(5),400),Fm(C(9),C(7),400),Fm(C(10),C(5),600),Fm(C(11),C(7),600),Fm(C(12),C(5),700),Fm(C(13),C(7),700)]);m=P(Mt,1);m.data[0]=AVj(C(14),FH(C(15),C(16)),C(5),400);b=(Mr(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.u5;f=c.ub;i=new J;L(i);Br(H(H(i,C(17)),f),41);i=K(i);f=c.t$;o=c.sD;c=A0d($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BD(d);c=new ACA;c.B6=d;g=new ACy;e.then(Bw(c,"f"),Bw(g,"f"));}}
function AH9(b){var c,d,e,f,g,h,i,j;c=new ABz;d=new Vi;d.y_=c;c.uL=d;d=new Vg;d.CU=c;c.oY=d;e=new Vh;e.AO=c;c.wl=new $rt_globals.ResizeObserver(Bw(e,"f"));d=new Vf;d.r7=c;c.x0=d;c.lO=1;d=new ABj;d.mS=new Uz;e=new Za;e.ER=null;e.mK=A9V;d.s8=e;BD(e);f=new ABl;f.A4=e;d.CO=f;d.Ce=b;g=b.length;h=0;while(h<g){e=b[h];i=new ABm;i.Ad=d;i.Ac=h;f=Bw(i,"f");e.onmessage=f;e=b[h];f=AK2();e.postMessage(f);h=h+1|0;}d.iM=0;d.pT=BQ(g);c.Cw=d;c.rf=(EG()).getElementById("canvasDiv");d=AFV();b=0;d.tabIndex=b;e=d.style;e.setProperty("width",
"100%");e.setProperty("height","100%");e.setProperty("outline","none");c.eA=d;c.rf.appendChild(d);b=c.eA;d=ATE(!!0,!!0,!!1,!!1);e=b.getContext("webgl2",d);if(e===null)Zc(C(2),C(18));else{c.qn=A8E(c.eA,c.oY);b=new U$;j=c.oY;AMl(b,e,new AC5,1,2.25,0.625);b.EP=new AC4;b.Eo=j;c.h5=b;AUp(c.wl,c.eA,AXH());d=$rt_globals.window;j=c.x0;d.addEventListener("resize",Bw(j,"handleEvent"));j=new Pg;b=c.h5;d=c.qn.cD;j.R=b;j.n=d;j.bH=c;d=$rt_str($rt_globals.window.location.hash);if(Bk(C(19),d)){b=new PN;Et(b,j);d=$rt_globals.fetch("test.wasm");j
=new XR;d=d.then(Bw(j,"f"));j=new XQ;e=d.then(Bw(j,"f"));j=new XO;d=new XN;e.then(Bw(j,"f"),Bw(d,"f"));}else b=Bk(C(20),d)?A8z(j):(A40(M(d)<=0?C(21):DC(d,1))).ba(j);c.gY=b;TT(c);}c.eA.focus();}
var XI=G(0);
var Xi=G(0);
function AD3(){var a=this;B.call(a);a.np=null;a.wn=null;a.dR=null;}
function T7(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AD3;c.dR=b;d=c;b.classObject=d;}return c;}
function Kb(a){if(a.np===null)a.np=AIp(a.dR);return a.np;}
function HT(a){var b,c,d,e;b=a.wn;if(b===null){if(AMU(a.dR)===null?0:1){b=HT(H_(a));c=new J;L(c);H(H(c,b),C(22));b=K(c);}else{b=a.dR.$meta.enclosingClass;if((b===null?null:T7(b))!==null){b=$rt_str(a.dR.$meta.simpleName);if(b===null)b=C(21);}else{b=AIp(a.dR);d=Sz(b,36);if(d==(-1)){e=Sz(b,46);if(e!=(-1))b=DC(b,e+1|0);}else{b=DC(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(21);}}}a.wn=b;}return b;}
function I9(a){return a.dR.$meta.primitive?1:0;}
function H_(a){return T7(AMU(a.dR));}
var AKg=G();
function Bw(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fr(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var AJ6=G();
function ANr(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ALN(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ALN(d[e],c))return 1;e=e+1|0;}return 0;}
function AS_(b){var c='$$enumConstants$$';Hr[c]=ANG;Ep[c]=ANj;Ik[c]=ASa;Cu[c]=AG3;Cx[c]=ALc;H2[c]=AUw;ED[c]=AXq;G4[c]=AJO;CC[c]=AMk;AS_=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return AS_(b);}
function AMU(b){return b.$meta.item;}
function AIp(b){return $rt_str(b.$meta.name);}
function Hh(){var a=this;B.call(a);a.i$=null;a.nQ=null;a.k7=0;a.lq=0;}
function A9W(){var a=new Hh();X(a);return a;}
function A9X(a){var b=new Hh();Bp(b,a);return b;}
function X(a){a.k7=1;a.lq=1;}
function Bp(a,b){a.k7=1;a.lq=1;a.i$=b;}
function AZ4(a){return a;}
function AUM(a){return a.i$;}
function A35(a){var b;b=a.nQ;if(b===a)b=null;return b;}
var EH=G(Hh);
function A9Y(){var a=new EH();AHX(a);return a;}
function AHX(a){X(a);}
var Bt=G(EH);
function A9v(a){var b=new Bt();A5y(b,a);return b;}
function A5y(a,b){Bp(a,b);}
var AK7=G(Bt);
var C0=G(0);
var CG=G(0);
var KI=G(0);
function BC(){var a=this;B.call(a);a.ci=null;a.ku=0;}
var A9Z=null;var A90=null;var A91=null;function Fq(){Fq=Bm(BC);AVQ();}
function AQL(){var a=new BC();AFF(a);return a;}
function Gz(a){var b=new BC();JO(b,a);return b;}
function EO(a,b,c){var d=new BC();O_(d,a,b,c);return d;}
function AFF(a){Fq();a.ci=A9Z;}
function JO(a,b){Fq();O_(a,b,0,b.data.length);}
function O_(a,b,c,d){var e;Fq();e=B6(d);a.ci=e;Da(b,c,e,0,d);}
function MX(b){var c;Fq();c=AQL();c.ci=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.ci.data;if(b<c.length)return c[b];}d=new Ix;X(d);N(d);}
function M(a){return a.ci.data.length;}
function GK(a){return a.ci.data.length?0:1;}
function RC(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Da(a.ci,b,d,e,c);return;}}g=new BJ;X(g);N(g);}
function OV(a,b){var c,d,e;if(a===b)return 0;c=Be(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ACZ(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function N0(a,b){if(a===b)return 1;return ACZ(a,b,0);}
function DI(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Kj(a,b,c){var d,e,f,g,h;d=Bd(0,c);if(b<65536){e=b&65535;while(true){f=a.ci.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kc(b);h=Jz(b);while(true){f=a.ci.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function HK(a,b,c){var d,e,f,g,h;d=Be(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.ci.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kc(b);g=Jz(b);while(true){if(d<1)return (-1);h=a.ci.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Sz(a,b){return HK(a,b,M(a)-1|0);}
function Zz(a,b,c){var d,e,f;d=Bd(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A2R(a,b){return Zz(a,b,0);}
function Ry(a,b,c){var d,e;d=Be(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AGZ(a,b){return Ry(a,b,M(a));}
function Cy(a,b,c){var d,e;d=BP(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d){Fq();return A90;}if(!b&&c==M(a))return a;return EO(a.ci,b,c-b|0);}
function DC(a,b){return Cy(a,b,M(a));}
function RI(a,b,c){return Cy(a,b,c);}
function FH(a,b){var c,d,e,f,g,h;if(GK(b))return a;if(GK(a))return b;c=B6(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return MX(c);}
function ADp(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Br(d,Q(a,f));}f=f+1|0;}H(d,DC(a,f));return K(d);}
function AA3(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cy(a,b,c+1|0);}
function AOG(a){return a;}
function GM(a){var b,c,d,e,f;b=a.ci.data;c=B6(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){Fq();return b===null?C(23):b.K();}
function N6(b){var c,d;Fq();c=new BC;d=B6(1);d.data[0]=b;JO(c,d);return c;}
function Do(b){var c;Fq();c=new J;L(c);return K(V(c,b));}
function Bk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function Kk(a){var b,c,d,e;a:{if(!a.ku){b=a.ci.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.ku=(31*a.ku|0)+e|0;d=d+1|0;}}}return a.ku;}
function MH(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gh;Bp(b,C(24));N(b);}A92=1;d=new AAC;d.ne=P(C6,10);d.ia=(-1);d.fZ=(-1);d.bF=(-1);e=new Ho;e.fA=1;e.bW=b;e.bl=B6(M(b)+2|0);Da(GM(b),0,e.bl,0,M(b));f=e.bl.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.AH=g;e.ht=0;F6(e);F6(e);d.l=e;d.d_=0;d.n0=WL(d,(-1),0,null);if(!DK(d.l)){b=new KE;h=d.l;Nf(b,C(21),h.bW,h.dC);N(b);}if(d.rB)d.n0.e2();b=BO();h=new ABp;h.kM=(-1);h.pH=(-1);h.DH=d;h.B8=d.n0;h.l4=a;h.kM=0;g=M(a);h.pH=g;e=new ADq;i=h.kM;j=d.ia;k=d.fZ+1|0;l=d.bF
+1|0;e.jg=(-1);m=j+1|0;e.sd=m;e.ek=BQ(m*2|0);f=BQ(l);e.lk=f;JT(f,(-1));if(k>0)e.p3=BQ(k);JT(e.ek,(-1));AFc(e,a,i,g);h.cT=e;e.gS=1;n=0;m=0;if(!M(a)){f=P(BC,1);f.data[0]=C(21);}else{while(true){l=M(h.l4);if(!AFQ(h))l=h.pH;e=h.cT;if(e.eZ>=0&&AGQ(e)==1){e=h.cT;e.eZ=M6(e);if(M6(h.cT)==AH2(h.cT)){e=h.cT;e.eZ=e.eZ+1|0;}g=h.cT.eZ;g=g<=l&&Pn(h,g)?1:0;}else g=Pn(h,h.kM);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BA(b,RI(a,m,AI5(h)));m=AKx(h);n=g;}a:{BA(b,RI(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BI(b,
g)))break a;EZ(b,g);}}if(g<0)g=0;f=GF(b,P(BC,g));}return f;}
function AQh(a,b){return OV(a,b);}
function AVQ(){A9Z=B6(0);A90=AQL();A91=new TD;}
var FK=G(Hh);
var IC=G(FK);
var AKK=G(IC);
var DH=G();
function HX(){DH.call(this);this.bs=0;}
var A93=null;var A94=null;function A4W(a){var b=new HX();AGs(b,a);return b;}
function AGs(a,b){a.bs=b;}
function Ih(b){return (X2(A9l(20),b,10)).K();}
function La(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new Dz;Bp(b,C(25));N(b);}d=M(b);if(0==d){b=new Dz;Bp(b,C(26));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new Dz;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=Y9(Q(b,f));if(i<0){j=new Dz;k=Cy(b,0,d);b=new J;L(b);H(H(b,C(27)),k);Bp(j,K(b));N(j);}if(i>=c){j=new Dz;l=Cy(b,0,d);b=new J;L(b);H(H(V(H(b,C(28)),c),C(29)),l);Bp(j,K(b));N(j);}g=Bc(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new Dz;k=Cy(b,0,d);b=new J;L(b);H(H(b,C(30)),k);Bp(j,K(b));N(j);}b=new Dz;j=new J;L(j);V(H(j,C(31)),c);Bp(b,K(j));N(b);}
function C4(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A94===null){A94=P(HX,256);c=0;while(true){d=A94.data;if(c>=d.length)break a;d[c]=A4W(c-128|0);c=c+1|0;}}}return A94.data[b+128|0];}return A4W(b);}
function AWa(a){return Ih(a.bs);}
function A6a(a,b){if(a===b)return 1;return b instanceof HX&&b.bs==a.bs?1:0;}
function Yj(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Jn(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A1v(a,b){b=b;return BP(a.bs,b.bs);}
function AMm(){A93=F($rt_intcls());}
function Hb(){var a=this;B.call(a);a.D=null;a.I=0;}
function A95(){var a=new Hb();L(a);return a;}
function A9l(a){var b=new Hb();F7(b,a);return b;}
function L(a){F7(a,16);}
function F7(a,b){a.D=B6(b);}
function X2(a,b,c){return AKX(a,a.I,b,c);}
function AKX(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Co(a,b,b+1|0);else{Co(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=IB(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bc(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Co(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=IB($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function ALC(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BP(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A96;ALu(c,f);d=f.ny;g=f.nl;h=f.rJ;i=1;j=1;if(h)j=2;k=9;l=AVk(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Bd(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Co(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function AKp(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BP(c,0.0);if(!d){if(1.0/c===Infinity){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Co(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Co(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Co(a,b,b+8|0);d=b;}else{Co(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A97;AHa(c,f);g=f.n1;h=f.m9;i=f.rx;j=1;k=1;if(i)k=2;l=18;m=ATT(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Bd(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Co(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(APK(p,FV))d=0;else{d=G_(AH$(g,p));g=AXD(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AH$(p,Bq(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AVk(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function ATT(b){var c,d,e,f,g;c=Bq(1);d=0;e=16;f=A98.data;g=f.length-1|0;while(g>=0){if(I2(AXD(b,Cl(c,f[g])),FV)){d=d|e;c=Cl(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Br(a,b){return a.qE(a.I,b);}
function AE6(a,b,c){Co(a,b,b+1|0);a.D.data[b]=c;return a;}
function Np(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.D=K9(a.D,d);}
function K(a){return EO(a.D,0,a.I);}
function AEO(a,b,c,d){return a.qm(a.I,b,c,d);}
function XC(a,b,c,d,e){var f,g,h,i;Co(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Kn(a,b){return a.pM(b,0,b.data.length);}
function Co(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.kn((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var J5=G(0);
var J=G(Hb);
function My(){var a=new J();A51(a);return a;}
function A6z(a){var b=new J();AXG(b,a);return b;}
function A51(a){L(a);}
function AXG(a,b){var c,d;a.D=B6(M(b));c=0;while(true){d=a.D.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.I=M(b);}
function H(a,b){M0(a,a.I,b===null?C(23):b.K());return a;}
function BM(a,b){M0(a,a.I,b);return a;}
function V(a,b){X2(a,b,10);return a;}
function H3(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(A7d(b,FV)){d=0;b=A8R(b);}a:{if(DN(b,Bq(10))<0){if(d)Co(a,c,c+1|0);else{Co(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=IB(G_(b),10);}else{g=1;h=Bq(1);i=Di(Bq(-1),Bq(10));b:{while(true){j=Cl(h,Bq(10));if(DN(j,b)>0){j=h;break b;}g=g+1|0;if(DN(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Co(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(I2(j,FV))break a;e=a.D.data;c=f+1|0;e[f]=IB(G_((Di(b,j))),10);b=AJK(b,j);j=Di(j,Bq(10));f=c;}}}return a;}
function Df(a,b){ALC(a,a.I,b);return a;}
function AFA(a,b){Br(a,b);return a;}
function Lv(a,b){var c;c=M(b);ACS(a,a.I,b,0,c);return a;}
function JS(a,b){M0(a,a.I,!b?C(32):C(33));return a;}
function AIS(a,b,c){var d,e,f,g,h,i;d=BP(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new Ix;X(i);N(i);}
function VR(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Ix;X(f);N(f);}
function A1r(a,b,c,d,e){XC(a,b,c,d,e);return a;}
function APy(a,b,c,d){AEO(a,b,c,d);return a;}
function ACS(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Co(a,b,(b+e|0)-d|0);while(d<e){f=a.D.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BJ;X(c);N(c);}
function AJZ(a){return a.I;}
function Em(a){return K(a);}
function ARO(a,b){Np(a,b);}
function A1M(a,b,c){AE6(a,b,c);return a;}
function M0(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(23);else if(GK(c))break a;Np(a,a.I+M(c)|0);d=a.I-1|0;while(d>=b){a.D.data[d+M(c)|0]=a.D.data[d];d=d+(-1)|0;}a.I=a.I+M(c)|0;d=0;while(d<M(c)){e=a.D.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new Ix;X(c);N(c);}
var Fg=G(IC);
var ALQ=G(Fg);
function A99(a){var b=new ALQ();AOK(b,a);return b;}
function AOK(a,b){Bp(a,b);}
var AKF=G(Fg);
function A9$(a){var b=new AKF();AOW(b,a);return b;}
function AOW(a,b){Bp(a,b);}
var ACp=G(0);
var Ds=G(0);
function BY(b,c){if(b!==null)b.bV();return c;}
var Y7=G(0);
function KA(){var a=this;B.call(a);a.jD=0;a.on=0;a.nO=0;}
var A9_=0;function EK(a){A9_=A9_-1|0;}
function HM(a,b,c){K0(a,AKm(b,c,400,0));}
function LD(a,b){return LQ(a,b,0.875);}
function LQ(a,b,c){return Ev(a,b)+c|0;}
function AAS(){var a=this;KA.call(a);a.js=null;a.dj=null;a.xQ=null;}
function E3(a){var b,c,d;b=a.dj;c=a.on;d=a.nO;b.clearRect(0.0,0.0,c,d);}
function AA_(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dj;d="center";c.textAlign=d;break a;case 2:c=a.dj;d="right";c.textAlign=d;break a;default:break a;}d=a.dj;c="left";d.textAlign=c;}}
function Cr(a,b){K0(a,b.rn);}
function K0(a,b){var c;if(a.xQ!==b){c=a.dj;a.xQ=b;c.font=b;}}
function AKm(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.dj;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function Ev(a,b){var c;c=$rt_ustr(b);return a.dj.measureText(c).width;}
function Kr(a,b,c,d){var e,f;e=a.dj;f=$rt_ustr(Gz(AKO([35,Ib(b/16|0),Ib(b%16|0),Ib(c/16|0),Ib(c%16|0),Ib(d/16|0),Ib(d%16|0)])));e.fillStyle=f;}
function AYs(){return {alpha:false};}
var AJI=G();
var AMs=G();
function BR(b,c){if(b===c)return 1;return b!==null?b.bO(c):c!==null?0:1;}
function BD(b){if(b!==null)return b;b=new Gh;Bp(b,C(21));N(b);}
var BW=G(0);
function GG(b){return b;}
var Ch=G(0);
function ACz(){B.call(this);this.Bt=null;}
function A6r(a,b){var c;c=a.Bt;c.qY=b;if(c.CM)AH9(b);}
var AHO=G();
function I6(b,c){return b.data[c];}
var ALi=G();
var AFR=G(0);
function Fm(b,c,d){return AVj(C(34),FH(C(15),b),c,d);}
var AMf=G(0);
var AIj=G(0);
function Mr(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=C1(b,f+g|0);Da(c,0,d,f,g);return d;}
function LU(b,c,d){Da(b,c,d,0,d.data.length);return d;}
function AAK(b,c,d){var e;if(c>0)Da(b,0,d,0,c);e=d.data.length;if(c<e)Da(b,c+1|0,d,c,e-c|0);return d;}
function AGV(b,c,d,e){var f;if(c>0)Da(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Da(b,d,e,c,f-d|0);}return e;}
function CN(b){var c;c=new Qq;c.kF=b;return c;}
function AGo(b,c){if(b.data.length!=c)b=C1(b,c);return b;}
function AIi(b,c,d){var e;e=c.data.length;if(e==d)c=C1(c,e*2|0);c.data[d]=b;return c;}
function ADk(b,c,d){var e;e=c.data.length;if(e==d)c=OR(c,e*2|0);c.data[d]=b;return c;}
function OQ(b){return K9(b,b.data.length);}
function Mt(){var a=this;B.call(a);a.u5=null;a.ub=null;a.t$=null;a.sD=0;}
function AVj(a,b,c,d){var e=new Mt();AUE(e,a,b,c,d);return e;}
function AUE(a,b,c,d,e){a.u5=b;a.ub=c;a.t$=d;a.sD=e;}
var AGj=G();
function A0d(b,c){return {style:b,weight:c};}
function ACA(){B.call(this);this.B6=null;}
function AM8(a,b){var c,d,e;c=a.B6;d=0;while(d<b.length){e=b[d];(EG()).fonts.add(e);d=d+1|0;}c.CM=1;b=c.qY;if(b!==null)AH9(b);}
var ACy=G();
function A5d(a,b){$rt_globals.console.info("font load error "+b);}
var L8=G();
var A$a=null;var A$b=null;function Bj(){if(A$a===null)A$a=ASZ(A$c,0);return A$a;}
function D0(){if(A$b===null)A$b=ASZ(A$d,0);return A$b;}
function A7A(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ot(b)&&(e+f|0)<=Ot(d)){a:{b:{if(b!==d){g=H_(BG(b));h=H_(BG(d));if(g!==null&&h!==null){if(g===h)break b;if(!I9(g)&&!I9(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dR;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ALN(n.constructor,o)?1:0)){N5(b,c,d,e,j);b=new JA;X(b);N(b);}j=j+1|0;k=m;}N5(b,c,d,e,f);return;}if(!I9(g))break a;if(I9(h))break b;else break a;}b=new JA;X(b);N(b);}}N5(b,c,
d,e,f);return;}b=new JA;X(b);N(b);}b=new BJ;X(b);N(b);}d=new Gh;Bp(d,C(35));N(d);}
function Da(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Ot(b)&&(e+f|0)<=Ot(d)){N5(b,c,d,e,f);return;}b=new BJ;X(b);N(b);}
function N5(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EI(){return Long_fromNumber(new Date().getTime());}
function AH5(){return A9T($rt_globals.performance.now()*1000000.0);}
var AIh=G();
var AKy=G();
function Zc(b,c){var d,e,f;d=(EG()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EG()).getElementById($rt_ustr(b)).appendChild(d);}
function AFV(){return (EG()).createElement("canvas");}
function AIX(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function ATE(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AM5=G();
var XJ=G();
function A2I(a,b){var c;c=new Bt;Bp(c,$rt_str(b.message));N(c);}
var AIv=G();
function FT(b){return $rt_str(b);}
var AJV=G();
function K9(b,c){var d,e,f,g;b=b.data;d=B6(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function OR(b,c){var d,e,f,g;b=b.data;d=DS(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JE(b,c){var d,e,f,g;b=b.data;d=BQ(c);e=d.data;f=Be(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function C1(b,c){var d,e,f,g;d=b.data;e=AH1(H_(BG(b)),c);f=Be(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AHU(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(37));V(c,e[d]);d=d+1|0;}BM(c,C(38));return K(c);}
function AUV(b){var c,d,e;if(b===null)return C(23);c=new J;L(c);BM(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(37));Df(c,e[d]);d=d+1|0;}BM(c,C(38));return K(c);}
function AW4(b){var c,d,e,f;if(b===null)return C(23);c=new J;L(c);BM(c,C(36));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BM(c,C(37));f=e[d];AKp(c,c.I,f);d=d+1|0;}BM(c,C(38));return K(c);}
function JT(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BX;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AGd(b,c,d,e){var f,g;if(c>d){e=new BX;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function Lr(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A9V;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Be(j,h+f|0);l=h+(2*f|0)|0;m=Be(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.qL(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function ALD(b,c){return ACE(b,0,b.data.length,c);}
function ACE(b,c,d,e){var f,g,h,i,j;f=BP(c,d);if(f>0){g=new BX;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
var ADH=G(0);
var AK9=G();
function A0C(a,b){return a.O3(b);}
function ASt(a){return a.Sx();}
var AG$=G();
var Gx=G(0);
var TD=G();
var BJ=G(Bt);
var ALy=G();
function Ot(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A$e());}return b.data.length;}
function AH1(b,c){if(b===null){b=new Gh;X(b);N(b);}if(b===F($rt_voidcls())){b=new BX;X(b);N(b);}if(c>=0)return AWg(b.dR,c);b=new AFu;X(b);N(b);}
function AWg(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gh=G(Bt);
var JA=G(Bt);
function Dp(){B.call(this);this.nj=0;}
var A$f=null;var A$g=null;var A$h=null;var A$i=null;var A$j=null;var A$k=null;var A$l=null;var A$m=null;var A$n=null;var A$o=null;function AWM(a){var b=new Dp();AGK(b,a);return b;}
function AGK(a,b){a.nj=b;}
function P_(b){var c,d;c=A$k.data;if(b>=c.length)return AWM(b);d=c[b];if(d===null){d=AWM(b);A$k.data[b]=d;}return d;}
function Wq(b){var c,d;c=new BC;d=B6(1);d.data[0]=b;JO(c,d);return c;}
function ML(b){return b>=65536&&b<=1114111?1:0;}
function CY(b){return (b&64512)!=55296?0:1;}
function Dn(b){return (b&64512)!=56320?0:1;}
function O1(b){return !CY(b)&&!Dn(b)?0:1;}
function JN(b,c){return CY(b)&&Dn(c)?1:0;}
function E1(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kc(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jz(b){return (56320|b&1023)&65535;}
function FX(b){return Hm(b)&65535;}
function Hm(b){if(A$i===null){if(A$l===null)A$l=ALY();A$i=AGX((A$l.value!==null?$rt_str(A$l.value):null));}return Tr(A$i,b);}
function FB(b){return Hk(b)&65535;}
function Hk(b){if(A$h===null){if(A$m===null)A$m=AMn();A$h=AGX((A$m.value!==null?$rt_str(A$m.value):null));}return Tr(A$h,b);}
function Tr(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BP(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function ADa(b,c){if(c>=2&&c<=36){b=Y9(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Y9(b){var c,d,e,f,g,h,i,j,k,l;if(A$g===null){if(A$n===null)A$n=AKM();c=(A$n.value!==null?$rt_str(A$n.value):null);d=AUO(GM(c));e=Nw(d);f=BQ(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+PK(d)|0;j=j+PK(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A$g=f;}g=A$g.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BP(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function IB(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GI(b){var c;if(b<65536){c=B6(1);c.data[0]=b&65535;return c;}return AKO([Kc(b),Jz(b)]);}
function CI(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&O1(b&65535))return 19;if(A$j===null){if(A$o===null)A$o=AJk();d=(A$o.value!==null?$rt_str(A$o.value):null);e=P(XV,16384);f=e.data;g=DS(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=N1(Q(d,l));if(m==64){l=l+1|0;m=N1(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bc(c,N1(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=N1(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=AQf(k,k+i|0,OR(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=AQf(k,k+i|0,OR(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A$j=C1(e,j);}e=A$j.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.uo)o=p+1|0;else{c=d.zl;if(b>=c)return d.zv.data[b-c|0];c=p-1|0;}}return 0;}
function K_(b){a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function H6(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CI(b)!=16?0:1;}
function Zr(b){switch(CI(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Ss(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return Zr(b);}return 1;}
function AJH(){A$f=F($rt_charcls());A$k=P(Dp,128);}
function ALY(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function AMn(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function AKM(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AJk(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var Xd=G(0);
var ABr=G(0);
var Fb=G(0);
var AJL=G();
function EG(){return $rt_globals.window.document;}
function A2n(a){return a.JT();}
function A4E(a,b){return a.LC($rt_str(b));}
function A4p(a,b){a.I6($rt_str(b));}
function AZj(a,b){return a.Pc($rt_str(b));}
function ANp(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function APr(a){return a.SU();}
function A4A(a,b,c){return a.RF($rt_str(b),$rt_str(c));}
function ARz(a,b,c,d){a.Ed($rt_str(b),Fr(c,"handleEvent"),d?1:0);}
function AYi(a){return a.Qt();}
function A3a(a){return !!a.L2();}
function A4$(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function ASO(a){return a.Jd();}
function ARc(a,b){a.Rw($rt_str(b));}
function AS$(a){return !!a.IX();}
function AW9(a){return a.LL();}
function AR3(a){return $rt_ustr(a.GY());}
function AN6(a,b){return a.Jp(b?1:0);}
function A6d(a){return a.L1();}
function A04(a,b,c){return a.Tv($rt_str(b),$rt_str(c));}
function ASH(a,b,c){return a.PN(b,c?1:0);}
function AWj(a,b,c){return !!a.Lc($rt_str(b),$rt_str(c));}
function AXz(a){return a.Ko();}
function AQY(a){return $rt_ustr(a.M2());}
function APB(a,b){return !!a.F7(b);}
function AQr(a,b){return a.Nt($rt_str(b));}
function A1b(a,b,c){return a.JR($rt_str(b),$rt_str(c));}
function ASb(a){return a.Oe();}
function AYl(a,b){return a.S0($rt_str(b));}
function AQq(a){return $rt_ustr(a.NU());}
function AUf(a){a.IT();}
function ANc(a,b){return a.Ty($rt_str(b));}
function AVJ(a,b){return a.I_($rt_str(b));}
function AYH(a,b){return a.IR($rt_str(b));}
function A43(a){return $rt_ustr(a.Oq());}
function AYO(a,b,c){return a.Q9(b,c);}
function A3o(a,b){return a.GX(b);}
function AUJ(a){return a.K0();}
function ATz(a,b,c){a.FC($rt_str(b),Fr(c,"handleEvent"));}
function ATg(a,b,c){return a.HR(b,c);}
function AVC(a){return !!a.Sv();}
function AWK(a,b){return a.JM($rt_str(b));}
function A2x(a,b,c,d){a.Dw($rt_str(b),Fr(c,"handleEvent"),d?1:0);}
function APw(a){return a.K1();}
function AY6(a,b,c){return a.Jo($rt_str(b),$rt_str(c));}
function AXZ(a){return $rt_ustr(a.OI());}
function A59(a){return a.N8();}
function ATw(a){return a.Oj();}
function AXX(a){return a.Ld();}
function ATA(a,b,c){a.F6($rt_str(b),Fr(c,"handleEvent"));}
function AZs(a,b){return a.MN(b);}
function AQB(a,b){a.Hh($rt_str(b));}
function A32(a){return $rt_ustr(a.NN());}
function P$(){var a=this;B.call(a);a.zn=null;a.zo=null;a.zp=0;a.zq=null;a.zk=null;}
function AUa(a,b){var c,d,e,f,g;c=a.zn;d=a.zo;e=a.zp;f=a.zq;g=a.zk;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AKU=G();
function AU1(b){return Math.exp(b);}
function AJM(b){return Math.log(b);}
function JH(b,c){return A1V(b,c);}
function A1V(b,c){return Math.pow(b,c);}
function DX(){return AWW();}
function AWW(){return Math.random();}
function Be(b,c){if(b<c)c=b;return c;}
function Bd(b,c){if(b>c)c=b;return c;}
function AWk(b,c){return Math.max(b,c);}
function Xk(b){if(b<0)b= -b|0;return b;}
function AQH(b){return Math.abs(b);}
var Zk=G(0);
var SB=G(0);
var AAG=G(0);
var T4=G(0);
var AET=G(0);
var ADb=G(0);
var AKe=G();
function A2Q(a,b,c){a.F6($rt_str(b),Fr(c,"handleEvent"));}
function A1t(a,b,c){a.FC($rt_str(b),Fr(c,"handleEvent"));}
function AQ0(a,b,c,d){a.Dw($rt_str(b),Fr(c,"handleEvent"),d?1:0);}
function AOl(a,b){return !!a.F7(b);}
function AZJ(a,b,c,d){a.Ed($rt_str(b),Fr(c,"handleEvent"),d?1:0);}
var BX=G(Bt);
var AFu=G(Bt);
var Ix=G(BJ);
var AKs=G();
function AK2(){return "ping";}
function AJh(b){return b===AK2()?1:0;}
var AAd=G(0);
var YZ=G(0);
function ABz(){var a=this;B.call(a);a.uL=null;a.oY=null;a.rf=null;a.eA=null;a.wl=null;a.x0=null;a.qn=null;a.h5=null;a.lO=0;a.FL=0;a.Ay=null;a.gY=null;a.Cw=null;}
function GA(a,b){var c;c=EG();b=$rt_ustr(b);c.title=b;}
function TT(a){a.FL=$rt_globals.requestAnimationFrame(Bw(a.uL,"onAnimationFrame"));}
function JR(a){a.lO=1;}
function ACb(a,b,c){var d,e;a.qn.ey=BK(b,c);d=a.eA;e=b;d.width=e;d=a.eA;e=c;d.height=e;d=a.h5;Y(d.dc,b,c);e=d.bd;d=d.dc;b=d.a;c=d.b;e.viewport(0,0,b,c);a.gY.ck(a.h5.dc,LM(a));a.gY.bR();}
function AAR(a,b){var c,d,e;c=a.Ay;d=a.eA;if(BR(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.Ay=b;}
function Nl(a){return $rt_globals.performance.now()/1000.0;}
function LM(a){return $rt_globals.window.devicePixelRatio;}
function Gs(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AFK(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AEp;d.CW=b;b=A$p;c.then(Bw(d,"f"),Bw(b,"f"));}}
function FY(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AFK(b,null);else{c=new AE5;d=$rt_globals.window.showOpenFilePicker();e=new AE4;e.tp=b;d.then(Bw(e,"f"),Bw(c,"f"));}}
function CO(a,b,c,d){var e,f,g,h;e=a.Cw;f=e.iM;if(f>0){g=e.pT.data;f=f-1|0;e.iM=f;Uo(e,b,c,d,g[f]);}else{h=e.mS;e=new AEq;e.vs=b;e.BS=c;e.Bh=d;b=new Up;b.rW=e;c=h.mR;b.BK=c;if(c===null)h.pL=b;else c.u_=b;h.mR=b;h.b7=h.b7+1|0;h.lx=h.lx+1|0;}}
function So(a,b,c){var d,e;if(!Mp()){b=new Bt;Bp(b,C(39));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new ABe;e.t7=b;b=AM2(c);d.then(Bw(e,"f"),Bw(b,"f"));}}
function Uq(a,b,c,d){var e,f,g;if(!Mp()){b=new Bt;Bp(b,C(39));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=GM(b);A7R();b=A$q;g=f.data;g=b.decode(g);b=e.writeText(g);e=new ADM;e.ww=c;c=AM2(d);b.then(Bw(e,"f"),Bw(c,"f"));}}
function WC(a){return Mp()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AM2(b){var c;c=new Ps;c.Bq=b;return c;}
var BE=G(0);
var ALf=G();
var T=G(0);
var ALg=G();
var AAL=G(0);
function Vi(){B.call(this);this.y_=null;}
function A03(a,b){var c,d;c=b;b=a.y_;if(!(!b.gY.cE(c/1000.0)&&!b.lO)){d=b.h5.dc;if(Bc(d.a,d.b)){b.lO=0;b.gY.bR();}}TT(b);}
function Vg(){B.call(this);this.CU=null;}
function DJ(a){JR(a.CU);}
var Z5=G(0);
function Vh(){B.call(this);this.AO=null;}
function APM(a,b,c){var d,e,f,g;c=a.AO;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.eA){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=LM(c);ACb(c,G1(f.width*g),G1(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];ACb(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AIE=G();
function AXH(){return {box:'device-pixel-content-box'};}
function AUp(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CE=G(0);
function Vf(){B.call(this);this.r7=null;}
function AUe(a,b){b=a.r7;b.gY.ck(b.h5.dc,LM(b));b.gY.bR();}
function ABj(){var a=this;B.call(a);a.mS=null;a.Ce=null;a.s8=null;a.pT=null;a.x6=0;a.iM=0;a.CO=null;}
function Uo(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.x6+1|0;a.x6=f;g=a.s8;h=C4(f);g.kp=OY(g,g.kp,h);h=ADd(g,h);Xg(h,b);Xg(h,b);g.mN=g.mN+1|0;b=a.Ce[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BC){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(Jy(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(Jy(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(Jy(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof LY)){if(!(c instanceof OA)){b=new BX;c=Kb(BG(c));g=new J;L(g);H(H(g,C(40)),c);Bp(b,K(g));N(b);}c=c;e=j+1|0;g=c.ix;j;h[j]=g;f=e+1|0;c=Qg(c.fP);e;h[e]=c;}else{c=c;g=c.iA;if(g===null){f=j+1|0;c=c.hu;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=Qg(c.ik);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
var VT=G(0);
function AXh(a,b){var c;c=a.cd();while(c.cP()){b.g(c.cf());}}
var HO=G(0);
function Mj(a){var b,c;b=new ABh;c=new RP;c.zj=a;b.BE=c;return b;}
function A1h(a,b){var c,d;c=a.cd();d=0;while(c.cP()){if(b.F(c.cf())){c.pV();d=1;}}return d;}
var FN=G();
function EP(a){return a.c0()?0:1;}
function GF(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=AH1(H_(BG(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B9(a);while(Cb(f)){g=b.data;h=e+1|0;g[e]=Cc(f);e=h;}return b;}
function A4e(a,b){var c;c=a.cd();while(c.cP()){if(BR(c.cf(),b)){c.pV();return 1;}}return 0;}
function GP(a,b){var c,d;c=0;d=b.cd();while(d.cP()){if(!a.qf(d.cf()))continue;c=1;}return c;}
var N8=G(0);
var M$=G(0);
function EA(){FN.call(this);this.b7=0;}
function AUu(a,b){a.oX(a.c0(),b);return 1;}
function B9(a){var b;b=new X_;b.jE=a;b.qK=a.b7;b.lX=a.c0();b.h8=(-1);return b;}
function ATP(a,b,c){var d,e;if(b>=0&&b<=a.c0()){if(c.eO())return 0;d=c.cd();while(d.cP()){e=b+1|0;a.oX(b,d.cf());b=e;}return 1;}c=new BX;X(c);N(c);}
function A4X(a,b,c){c=new DU;X(c);N(c);}
function A3n(a,b){var c;c=new DU;X(c);N(c);}
function Lx(a,b){var c,d;c=a.c0();d=0;while(true){if(d>=c)return (-1);if(BR(b,a.i2(d)))break;d=d+1|0;}return d;}
function AS1(a,b){var c,d;if(!Jy(b,M$))return 0;c=b;if(a.p!=c.p)return 0;d=0;while(d<c.p){if(!BR(BI(a,d),BI(c,d)))return 0;d=d+1|0;}return 1;}
var MI=G(EA);
var Pi=G(0);
var AFd=G(0);
function Uz(){var a=this;MI.call(a);a.pL=null;a.mR=null;a.lx=0;}
var LV=G(0);
function En(){var a=this;B.call(a);a.py=null;a.pF=null;}
var Ed=G(0);
var WB=G(0);
var PJ=G(0);
function Za(){var a=this;En.call(a);a.kp=null;a.mK=null;a.ER=null;a.mN=0;}
function AIK(a,b){var c;c=ADd(a,b);if(c===null)return null;a.kp=Lt(a,a.kp,b);a.mN=a.mN+1|0;return c.kO;}
function ADd(a,b){var c,d;c=a.kp;while(true){if(c===null)return null;d=Nm(a.mK,b,c.mk);if(!d)break;c=d>=0?c.b_:c.b0;}return c;}
function OY(a,b,c){var d,e;if(b===null){b=new K7;d=null;b.mk=c;b.kO=d;b.g3=1;b.ha=1;return b;}e=Nm(a.mK,c,b.mk);if(!e)return b;if(e>=0)b.b_=OY(a,b.b_,c);else b.b0=OY(a,b.b0,c);Fc(b);return Nv(b);}
function Lt(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=Nm(a.mK,c,b.mk);if(d<0)b.b0=Lt(a,b.b0,c);else if(d>0)b.b_=Lt(a,b.b_,c);else{e=b.b_;if(e===null)return b.b0;f=b.b0;g=P(K7,e.g3).data;h=0;while(true){b=e.b0;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.b_;while(h>0){h=h+(-1)|0;j=g[h];j.b0=b;Fc(j);b=Nv(j);}e.b_=b;e.b0=f;Fc(e);b=e;}Fc(b);return Nv(b);}
function ABl(){B.call(this);this.A4=null;}
function ABm(){var a=this;B.call(a);a.Ad=null;a.Ac=0;}
function AXy(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.Ad;d=a.Ac;AJh(b.data);e=c.mS;f=e.pL;if(f===null)g=null;else{g=f.u_;e.pL=g;if(g!==null)g.BK=null;else e.mR=null;e.lx=e.lx-1|0;e.b7=e.b7+1|0;g=f.rW;}if(g!==null)Uo(c,g.vs,g.BS,g.Bh,d);else{h=c.pT.data;i=c.iM;c.iM=i+1|0;h[i]=d;}c=c.CO;b=b.data;if(!AJh(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BX;X(b);N(b);}if(b.length<1){b=new BX;AHX(b);N(b);}e=C4(b[0]);f=AIK(c.A4,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=FT(GG(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A7h(GG(e));else if(e instanceof $rt_globals.File?1:0)k[i]=ANm(GG(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ABo(GG(b[m]));k[i]=AId(GG(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=GG(b[m]);k[i]=A8q(GG(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=C1(h,i);f.g(h);}}
function AGq(){var a=this;B.call(a);a.cD=null;a.jV=null;a.FX=null;a.ey=null;}
function A8E(a,b){var c=new AGq();A4T(c,a,b);return c;}
function A4T(a,b,c){var d,e,f,g;a.ey=null;a.jV=b;d=new ZH;d.bA=CP(P(Cp,0));d.o1=CP(P(Cp,0));d.bY=CP(P(CH,0));d.fC=CP(P(EV,0));d.cy=CP(P(CR,0));d.g6=CP(P(FL,0));d.hx=CP(P(F9,0));d.mI=CP(P(T,0));d.nh=CP(P(T,0));d.dA=c;a.cD=d;e=$rt_globals.window;f=P(Ds,14);g=f.data;d=new AD8;d.rz=a;g[0]=C9(a,b,C(41),d);d=new AD9;d.Be=a;g[1]=C9(a,b,C(42),d);d=new AD$;d.yX=a;g[2]=C9(a,b,C(43),d);d=new AD_;d.w7=a;g[3]=C9(a,b,C(44),d);d=new AEa;d.uB=a;g[4]=C9(a,b,C(45),d);d=new AEb;d.rS=a;g[5]=C9(a,b,C(46),d);d=new AEc;d.C7=a;g[6]
=C9(a,b,C(47),d);d=new AEd;d.AQ=a;g[7]=C9(a,b,C(48),d);d=new AEe;d.yx=a;g[8]=C9(a,b,C(49),d);d=new AEf;d.wz=a;g[9]=C9(a,b,C(50),d);d=new WR;d.v5=a;g[10]=C9(a,b,C(51),d);d=new WS;d.vi=a;e.addEventListener("paste",Bw(d,"handleEvent"),!!1);g[11]=Wl(a,e,C(52),d);d=new WT;d.xN=a;g[12]=C9(a,e,C(53),d);d=new WU;d.CC=a;g[13]=C9(a,e,C(54),d);c=new R1;c.DS=f;a.FX=c;e=new AE_;e.zz=b;b.onpointerdown=Bw(e,"f");e=new AFa;e.yJ=b;b.onpointerup=Bw(e,"f");}
function XD(){return (EG()).activeElement;}
function C9(a,b,c,d){b.addEventListener($rt_ustr(c),Bw(d,"handleEvent"));return Wl(a,b,c,d);}
function Wl(a,b,c,d){var e;e=new Z2;e.Fq=b;e.Fs=c;e.Fr=d;return e;}
function ACB(a,b){var c;c=new ADf;c.w6=b;return c;}
function Fl(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.jV.getBoundingClientRect();e=BK(G1((b.clientX-d.left)*c),G1((b.clientY-d.top)*c));f=ALr(a.ey);d=new Pe;AC1(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.Ff=f;return d;}
function WX(a,b,c){var d,e,f,g;d=new Q0;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;AC1(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.pj=0;d.ep=e;d.bk=f;d.ka=c;d.AV=g;return d;}
function Ef(a,b){b.stopPropagation();b.preventDefault();}
function Ol(){var a=this;B.call(a);a.p7=null;a.cn=null;a.bd=null;a.mm=0;a.BJ=null;a.FB=0;a.EB=0;a.ls=null;a.li=null;a.EO=null;a.Gb=null;a.vJ=null;a.x9=null;a.i_=null;a.iv=null;a.kj=null;a.EV=null;a.sE=null;a.dc=null;a.CH=null;a.qj=0;a.m2=0;a.oF=0;a.ou=0;a.lJ=0;a.oA=null;a.oN=0.0;a.qq=0.0;}
function AMl(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dc=new Bh;a.qj=0;a.oA=new AEk;a.p7=c;a.mm=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(55)),g);$rt_globals.console.info($rt_ustr(K(h)));a.bd=b;a.cn=K5(c,4,4,1);i=ANk(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B6(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new RS;HQ();c=A$r;m.e3=b;m.ij=c;m.uR=j.length/c.nA|0;m.CD
=l.length;n=b.createBuffer();m.xX=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.w9=null;n=b.createBuffer();m.wD=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.sE=m;a.EB=N0(g,C(56));c=new Z3;c.eb=b;a.BJ=c;a.oN=e;a.qq=f;d=b.getParameter(3379);a.FB=d;c=new J;L(c);V(H(c,C(57)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dk,9);i=k.data;c=A7m(b);a.ls=c;i[0]=c;c=A8f(b,C(58));a.li=c;i[1]=c;c=new AAr;Io(c,b,C(59),
C(60),A$r);a.EO=c;i[2]=c;c=A87(b);a.Gb=c;i[3]=c;c=new Qf;WJ(c,b,C(61),C(62));a.vJ=c;i[4]=c;c=A9i(b);a.x9=c;i[5]=c;c=A7W(b);a.i_=c;i[6]=c;c=A82(b);a.iv=c;i[7]=c;c=A83(b);a.kj=c;i[8]=c;a.EV=k;AEX(b,C(63));}
function II(a,b,c){return GS(a,b,c,400,0);}
function H1(a,b,c){return K5(a.p7,b,c,0);}
function Eb(a,b,c,d){return K5(a.p7,b,c,d);}
function AEA(a,b,c,d,e,f){var g,h;Cr(a.cn,c);g=Eb(a,LD(a.cn,b)+(d*2|0)|0,e,f);Cr(g,c);B1(g,b,d,L$(c,e));h=C3(a);CS(h,g);EK(g);return h;}
function EU(a,b){var c,d,e,f,g;c=a.bd;d=b.bq;e=b.bu;f=b.bh;g=b.bC;c.clearColor(d,e,f,g);a.bd.clear(16384);}
function Ca(a,b){var c;if(b==a.m2)return b;if(!b)a.bd.disable(3042);else{a.bd.enable(3042);a.bd.blendFuncSeparate(770,771,1,1);}c=a.m2;a.m2=b;return c;}
function N4(a,b,c){Mh(a,b.a,b.b,c);}
function Mh(a,b,c,d){var e,f;e=d.a;f=d.b;a.ou=1;a.lJ=1;d=a.oA;d.ur=b;d.us=c;d.uq=e;d.up=f;AC3(a);}
function Gq(a){a.ou=0;a.lJ=0;AC3(a);}
function AC3(a){var b,c,d,e,f,g;b=a.oF;c=a.ou;if(b!=c){a.oF=c;if(!c)a.bd.disable(3089);else a.bd.enable(3089);}if(a.oF&&a.lJ){a.lJ=0;d=a.bd;e=a.oA;b=e.ur;c=a.dc.b-e.us|0;f=e.up;c=c-f|0;g=e.uq;d.scissor(b,c,g,f);}}
function Gf(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.sE;c=a.qj;d=b.ij.Bn;e=b.e3;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.e3;h=b.xX;e.bindBuffer(34962,h);i=b.ij.qV.data;g=i.length;j=0;while(j<g){k=i[j];l=b.e3;m=k.j0;n=k.gN;o=b.ij.nA*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.gN|0;j=j+1|0;}a:{e=b.w9;if(e!==null){c=0;b.e3.bindBuffer(34962,e);i=b.ij.Av.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.e3;j=e.j0;p=e.gN;m=e.sM;n=b.ij.zx;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.gN|0;g=g+1|0;}}}q=b.wD;if(q===null){c=b.uR;if(c>0)b.e3.drawArrays(4,0,c);}else{b.e3.bindBuffer(34963,q);k=b.e3;g=b.CD;k.drawElements(4,g,5123,0);}a.qj=d;}
function Bv(a,b,c,d,e){GO(a,a.ls);G0(a.ls,a.bd,b,c,d,a.dc);d=a.ls;FQ(a.bd,d.Ci,e);Gf(a);}
function AFw(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;GO(a,a.iv);G0(a.iv,a.bd,b,c,d,a.dc);j=a.iv;d=a.bd;k=j.xy;l=e.a;m=e.b;n=f.a;o=f.b;d.uniform4f(k,l,m,n,o);e=j.xx;l=g.a;o=g.b;m=h.a;n=h.b;d.uniform4f(e,l,o,m,n);d=a.iv;FQ(a.bd,d.yk,i);Gf(a);}
function MC(a,b,c,d,e,f,g,h){var i,j;GO(a,a.kj);G0(a.kj,a.bd,b,c,d,a.dc);d=a.kj;i=a.bd;j=d.uO;i.uniform2f(j,e,f);FQ(i,d.zc,g);d=a.kj;FQ(a.bd,d.xZ,h);Gf(a);}
function DQ(a,b,c,d,e,f,g,h,i){var j;j=!i?a.vJ:a.x9;GO(a,j);AMK(j,a.bd,!i?a.qq:a.oN);G0(j,a.bd,b,c,d,a.dc);Oq(j,a.bd,f);AFB(j,a.bd,f,e);ALB(j,a.bd,g,h);Gf(a);}
function C3(a){var b,c;b=new IL;c=a.BJ;b.e1=new Bh;b.eS=c;b.gg=c.eb.createTexture();A$s=A$s+1|0;return b;}
function No(a,b){AEX(a.bd,b);}
function GO(a,b){var c,d;if(b!==a.CH){c=a.bd;d=b.bL;c.useProgram(d);a.CH=b;}}
function U$(){var a=this;Ol.call(a);a.Eo=null;a.EP=null;}
function GS(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cn;g=AKm(b,c,d,e);K0(f,g);h=f.dj.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=Ev(f,C(64));m=Ev(f,C(65));h=new LZ;n=g;h.oL=b;h.pv=c;h.DN=d;h.D3=e;h.ew=i;h.eP=j;h.DE=l;h.qC=k;h.rn=n;h.ue=C5(i);h.EI=C5(h.eP);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.DJ=d;switch(e){case 1:break;case 2:b=C(7);break a;default:b=C(5);break a;}b=C(66);}h.DA=b;return h;}
function Cz(){B.call(this);this.C=null;}
function Et(a,b){a.C=b;}
function A5$(a,b){return 0;}
function ZH(){var a=this;B.call(a);a.bA=null;a.o1=null;a.bY=null;a.fC=null;a.cy=null;a.g6=null;a.hx=null;a.mI=null;a.nh=null;a.dA=null;a.fg=null;a.yD=0;}
function Uj(a,b){var c,d,e,f;DJ(a.dA);c=(B5(!b.ka?a.o1:a.bA)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].F(b);if(f)break;if(b.pj)break;e=e+1|0;}return f;}
function Sl(a,b,c){var d,e,f;DJ(a.dA);d=(B5(a.g6)).data;e=d.length;f=0;while(f<e){if(d[f].f6(b,c))return 1;f=f+1|0;}return 0;}
function AD8(){B.call(this);this.rz=null;}
function A25(a,b){var c;c=a.rz;if(Uj(c.cD,WX(c,b,1)))Ef(c,b);}
function AD9(){B.call(this);this.Be=null;}
function A3g(a,b){var c;c=a.Be;if(Uj(c.cD,WX(c,b,0)))Ef(c,b);}
function AD$(){B.call(this);this.yX=null;}
function ASM(a,b){var c,d,e,f,g,h,i;c=a.yX;if(c.ey!==null){a:{b:{d=Fl(c,b);e=c.cD;DJ(e.dA);f=e.fg;if(f!==null)f.g(d);else{g=(B5(e.bY)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].bZ(d))break a;i=i+1|0;}}}}Ef(c,b);}}
function AD_(){B.call(this);this.w7=null;}
function A1K(a,b){var c,d,e,f,g,h;c=a.w7;b.button;if(c.ey!==null)a:{d=Fl(c,b);c=c.cD;e=b.button;DJ(c.dA);if(c.fg===null){f=(B5(c.bY)).data;g=f.length;h=0;while(h<g){b=f[h].cu(d,e);if(b!==null){c.fg=b;c.yD=e;break a;}h=h+1|0;}}}}
function AEa(){B.call(this);this.uB=null;}
function A1X(a,b){var c,d,e,f,g,h,i;c=a.uB;b.button;if(c.ey!==null){d=Fl(c,b);e=c.cD;f=b.button;DJ(e.dA);if(f==e.yD&&e.fg!==null)e.fg=null;g=(B5(e.bY)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dM(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Ef(c,b);}}
function AEb(){B.call(this);this.rS=null;}
function AUl(a,b){var c,d,e,f,g,h,i,j,k;c=a.rS;if(c.ey!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cD;f=Fl(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DJ(e.dA);i=(B5(e.fC)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dJ(f,d,h))break b;k=k+1|0;}}Ef(c,b);}}
function AEc(){B.call(this);this.C7=null;}
function AQZ(a,b){var c,d,e,f,g,h,i,j;c=a.C7;if(c.ey!==null){d=Fl(c,b);e=c.cD;f=b.button;g=b.detail;DJ(e.dA);h=(B5(e.bY)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cL(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Ef(c,b);}}
function AEd(){B.call(this);this.AQ=null;}
function A6D(a,b){var c,d,e,f,g,h,i;c=a.AQ;if(c.ey!==null){d=Fl(c,b);e=c.cD;DJ(e.dA);f=(B5(e.cy)).data;g=f.length;h=0;a:{while(h<g){if(f[h].F(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Ef(c,b);}}
function AEe(){B.call(this);this.yx=null;}
function AQo(a,b){var c,d,e,f,g,h;b=a.yx.cD;if(b.fg!==null){c=D0();d=BT(b.fg);e=new J;L(e);H(H(e,C(67)),d);Bf(c,K(e));}f=(B5(b.nh)).data;g=f.length;h=0;while(h<g){f[h].e();h=h+1|0;}DJ(b.dA);}
function AEf(){B.call(this);this.wz=null;}
function AU$(a,b){var c,d,e;b=a.wz.cD;c=(B5(b.mI)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.fg!==null)b.fg=null;DJ(b.dA);}
function WR(){B.call(this);this.v5=null;}
function A5_(a,b){var c;c=a.v5;if(c.ey!==null)Fl(c,b);}
function WS(){B.call(this);this.vi=null;}
function ASr(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vi;if(XD()===c.jV){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B5(c.cD.hx)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].b8();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cD.dA;m=new P3;m.wJ=k;m.wK=l;g.getAsString(Bw(m,"accept"));Ef(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(68)),k),C(69)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function WT(){B.call(this);this.xN=null;}
function ASQ(a,b){var c;c=a.xN;if(XD()===c.jV&&Sl(c.cD,ACB(c,b),0))Ef(c,b);}
function WU(){B.call(this);this.CC=null;}
function A3q(a,b){var c;c=a.CC;if(XD()===c.jV&&Sl(c.cD,ACB(c,b),1))Ef(c,b);}
var ACV=G(0);
var AC5=G();
function K5(a,b,c,d){var e,f,g,h,i;e=new AAS;e.jD=d;A9_=A9_+1|0;e.on=b;e.nO=c;f=(EG()).createElement("canvas");e.js=f;g=b;f.width=g;h=e.js;f=c;h.height=f;if(!d)g=e.js.getContext("2d");else{i=e.js;h=AYs();g=i.getContext("2d",h);}e.dj=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AC4=G();
function ARE(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function Pg(){var a=this;B.call(a);a.R=null;a.n=null;a.bH=null;}
var KX=G();
var A9V=null;function Nm(a,b,c){return b.mO(c);}
function AHg(){A9V=new KX;}
function AIR(){var a=this;B.call(a);a.c_=null;a.gq=null;a.cK=0;}
function CP(a){var b=new AIR();AQU(b,a);return b;}
function AQU(a,b){a.c_=b;}
function E5(a,b){return a.c_.data[b];}
function Z(a,b){var c,d,e;c=a.cK;d=a.c_;if(c==d.data.length)a.c_=C1(d,c+4|0);d=a.c_.data;e=a.cK;a.cK=e+1|0;d[e]=b;a.gq=null;}
function LP(a,b){var c,d,e,f;c=0;while(true){d=a.c_.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cK=a.cK-1|0;a.gq=null;}c=c+1|0;}}
function B5(a){var b;b=a.gq;if(!(b!==null&&b.data.length==a.cK))a.gq=C1(a.c_,a.cK);return a.gq;}
var Dt=G(0);
var Cp=G(0);
var CH=G(0);
function A1n(a,b){return 0;}
function AVY(a,b,c){return null;}
function ANO(a,b,c){return 0;}
function A3D(a,b,c,d){return 0;}
var EV=G(0);
var CR=G(0);
var FL=G(0);
var CL=G(0);
var F9=G(0);
function R1(){B.call(this);this.DS=null;}
function Bh(){var a=this;B.call(a);a.a=0;a.b=0;}
function BK(a,b){var c=new Bh();Ro(c,a,b);return c;}
function ALr(a){var b=new Bh();APv(b,a);return b;}
function Ro(a,b,c){a.a=b;a.b=c;}
function APv(a,b){a.a=b.a;a.b=b.b;}
function Ct(a,b){a.a=b.a;a.b=b.b;}
function Y(a,b,c){a.a=b;a.b=c;}
function AJp(a){var b,c,d;b=a.a;c=a.b;d=new J;L(d);V(H(V(H(d,C(70)),b),C(71)),c);return K(d);}
function ARu(a,b){var c;a:{b:{if(a!==b){if(BG(b)!==BG(a))break b;if(!Kh(a,b))break b;}c=1;break a;}c=0;}return c;}
function Kh(a,b){return a.a==b.a&&a.b==b.b?1:0;}
function AEk(){var a=this;B.call(a);a.ur=0;a.us=0;a.uq=0;a.up=0;}
var AIl=G();
var AJ3=G(0);
function Z3(){B.call(this);this.eb=null;}
function Oz(){var a=this;B.call(a);a.bL=null;a.Ge=null;}
function ALF(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(72):C(73);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bf(Bj(),g);Bf(D0(),C(74));Bf(D0(),d);Bf(D0(),C(74));b=new Bt;Bp(b,g);N(b);}
function Dk(){var a=this;Oz.call(a);a.yw=null;a.tc=null;a.oj=null;}
function A$t(a,b,c,d){var e=new Dk();Io(e,a,b,c,d);return e;}
function Io(a,b,c,d,e){var f,g,h,i,j,k;a.Ge=e;f=ALF(b,35633,c);d=ALF(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bL=g;h=e.u3.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bL;k=c.j0;c=c.tm;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bL;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AEX(b,C(75));a.oj=new Bh;c=a.bL;a.yw=b.getUniformLocation(c,"uResolution");c=a.bL;a.tc=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bt;c=new J;L(c);H(H(c,C(76)),d);Bp(b,K(c));N(b);}
function AGz(a,b,c){var d,e,f;if(!Kh(a.oj,c)){Ct(a.oj,c);d=a.yw;e=c.a;f=c.b;b.uniform2f(d,e,f);}}
function G0(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.a;h=f.a;i=g/h;j=e.b;k=f.b;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.tc;b.uniform4f(e,i,l,h,j);AGz(a,b,f);}
function AMq(){Dk.call(this);this.Ci=null;}
function A7m(a){var b=new AMq();A0$(b,a);return b;}
function A0$(a,b){var c;HQ();Io(a,b,C(59),C(77),A$r);c=a.bL;a.Ci=b.getUniformLocation(c,"uColor");}
function FE(){Dk.call(this);this.uw=null;}
function A8f(a,b){var c=new FE();ACD(c,a,b);return c;}
function A$u(a,b,c){var d=new FE();ACH(d,a,b,c);return d;}
function ACD(a,b,c){ACH(a,b,C(59),c);}
function ACH(a,b,c,d){HQ();Io(a,b,c,d,A$r);c=a.bL;a.uw=b.getUniformLocation(c,"sDiffuse");}
function Oq(a,b,c){var d;d=a.uw;b.uniform1i(d,0);b.activeTexture(33984);c=c.gg;b.bindTexture(3553,c);}
var AAr=G(Dk);
function AHb(){FE.call(this);this.Dt=null;}
function A87(a){var b=new AHb();ATQ(b,a);return b;}
function ATQ(a,b){var c;ACD(a,b,C(78));c=a.bL;a.Dt=b.getUniformLocation(c,"uContrast");}
function HI(){var a=this;FE.call(a);a.st=null;a.tv=null;a.uM=null;a.Bz=null;a.q6=0.0;}
function A$v(a,b,c){var d=new HI();WJ(d,a,b,c);return d;}
function WJ(a,b,c,d){ACH(a,b,c,d);c=a.bL;a.st=b.getUniformLocation(c,"uTexTransform");c=a.bL;a.tv=b.getUniformLocation(c,"uColor");c=a.bL;a.uM=b.getUniformLocation(c,"uBgColor");c=a.bL;a.Bz=b.getUniformLocation(c,"uTextPow");}
function AMK(a,b,c){var d;if(a.q6!==c){a.q6=c;d=a.Bz;b.uniform2f(d,c,0.0);}}
function ALB(a,b,c,d){FQ(b,a.tv,c);FQ(b,a.uM,d);}
function AFB(a,b,c,d){var e,f,g,h,i,j;c=c.e1;e=c.a;f=c.b;g=d.bq;h=e;g=g/h;i=d.bu;j=f;i=i/j;h=d.bh/h;j=d.bC/j;c=a.st;b.uniform4f(c,g,i,h,j);}
var Qf=G(HI);
var AI8=G(HI);
function A9i(a){var b=new AI8();AZS(b,a);return b;}
function AZS(a,b){WJ(a,b,C(61),C(79));}
function AKf(){var a=this;FE.call(a);a.w$=null;a.w8=null;a.tw=null;}
function A7W(a){var b=new AKf();APW(b,a);return b;}
function APW(a,b){var c,d;ACD(a,b,C(80));c=a.bL;a.w$=b.getUniformLocation(c,"uColorB");d=a.bL;a.w8=b.getUniformLocation(d,"uColorF");d=a.bL;a.tw=b.getUniformLocation(d,"uContrast");}
function ALS(){var a=this;Dk.call(a);a.yk=null;a.xy=null;a.xx=null;}
function A82(a){var b=new ALS();AZW(b,a);return b;}
function AZW(a,b){var c;HQ();Io(a,b,C(59),C(81),A$r);c=a.bL;a.yk=b.getUniformLocation(c,"uColor");c=a.bL;a.xy=b.getUniformLocation(c,"uPoints1");c=a.bL;a.xx=b.getUniformLocation(c,"uPoints2");}
function AF5(){var a=this;Dk.call(a);a.xZ=null;a.uO=null;a.zc=null;}
function A83(a){var b=new AF5();AYI(b,a);return b;}
function AYI(a,b){var c;HQ();Io(a,b,C(59),C(82),A$r);c=a.bL;a.xZ=b.getUniformLocation(c,"uColor");c=a.bL;a.uO=b.getUniformLocation(c,"uBaseline");c=a.bL;a.zc=b.getUniformLocation(c,"uScaleHExp");}
var AA4=G(0);
var AM3=G(0);
function FQ(b,c,d){var e,f,g,h;e=d.bq;f=d.bu;g=d.bh;h=d.bC;b.uniform4f(c,e,f,g,h);}
function AEX(b,c){var d,e;d=b.getError();if(d){b=Bj();e=new J;L(e);V(H(e,c),d);Bf(b,K(e));}}
function Z2(){var a=this;B.call(a);a.Fq=null;a.Fs=null;a.Fr=null;}
function RS(){var a=this;B.call(a);a.e3=null;a.ij=null;a.xX=null;a.w9=null;a.wD=null;a.uR=0;a.CD=0;}
function CD(){var a=this;B.call(a);a.Fo=null;a.fi=0;}
function Du(a,b,c){a.Fo=b;a.fi=c;}
function Hr(){var a=this;CD.call(a);a.u3=null;a.qV=null;a.Av=null;a.nA=0;a.zx=0;a.Bn=0;}
var A$r=null;var A$w=null;function HQ(){HQ=Bm(Hr);ARg();}
function ANG(){HQ();return A$w.dZ();}
function ARg(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new Hr;c=P(Ep,2);d=c.data;AML();d[0]=A$x;d[1]=A$y;HQ();Du(b,C(83),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.qA.fi){case 0:f=f+l.gN|0;h=h+1|0;break a;case 1:e=e+l.gN|0;g=g+1|0;break a;default:}}i=i|1<<l.j0;k=k+1|0;}b.u3=c;b.nA=e;b.zx=f;b.Bn=i;c=P(Ep,g);m=c.data;b.qV=c;c=P(Ep,h);n=c.data;b.Av=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.qA.fi){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A$r
=b;c=P(Hr,1);c.data[0]=b;A$w=c;}
var MS=G(0);
var TW=G(0);
var AC_=G(0);
var Hd=G();
function Nj(){Hd.call(this);this.Dk=null;}
function AGS(){var a=this;Nj.call(a);a.Ey=0;a.nK=0;a.lZ=null;a.nm=null;a.vF=null;}
function ASZ(a,b){var c=new AGS();A5a(c,a,b);return c;}
function A5a(a,b,c){a.Dk=b;b=new J;L(b);a.lZ=b;a.nm=B6(32);a.Ey=c;AGL();a.vF=A$z;}
function ACl(a,b,c,d){var e,$$je;e=a.Dk;if(e===null)a.nK=1;if(!(a.nK?0:1))return;a:{try{e.nf(b,c,d);break a;}catch($$e){$$je=E_($$e);if($$je instanceof Jr){}else{throw $$e;}}a.nK=1;}}
function YD(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=ALd(b,c,d-c|0);e=DS(Bd(16,Be(e.length,1024)));g=AK1(e,0,e.data.length);h=a.vF;i=new Rh;b=DS(1);j=b.data;j[0]=63;HC();k=A$A;i.om=k;i.nP=k;c=j.length;if(c&&c>=i.xw){i.Fn=h;i.tk=b.dZ();i.Eu=2.0;i.xw=4.0;i.zi=B6(512);i.rQ=DS(512);k=A$B;if(k===null){i=new BX;Bp(i,C(84));N(i);}i.om=k;i.nP=k;a:while(true){if(i.lR==3){f=new Dc;X(f);N(f);}i.lR=2;b:{while(true){try{k=AFY(i,f,g);}catch($$e){$$je=E_($$e);if($$je instanceof Bt){f=$$je;break a;}else{throw $$e;}}if(Jl(k))
{d=Ck(f);if(d<=0)break b;k=EF(d);}else if(Iv(k))break;h=!MJ(k)?i.om:i.nP;c:{if(h!==A$B){if(h===A$C)break c;else break b;}d=Ck(g);b=i.tk;l=b.data.length;if(d<l){k=A$D;break b;}AEy(g,b,0,l);}FI(f,f.be+Lu(k)|0);}}l=Iv(k);ACl(a,e,0,g.be);Qp(g);if(!l){while(true){d=i.lR;if(d!=2&&d!=4){f=new Dc;X(f);N(f);}f=A$E;if(f===f)i.lR=3;l=Iv(f);ACl(a,e,0,g.be);Qp(g);if(!l)break;}return;}}N(AZp(f));}i=new BX;Bp(i,C(85));N(i);}
function Bf(a,b){var c,d,e,f,g,h,i,j;Br(BM(a.lZ,b),10);b=a.lZ;c=b.I;d=a.nm;if(c>d.data.length)d=B6(c);e=0;f=0;if(e>c){b=new BJ;Bp(b,C(86));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}YD(a,d,0,c);a.lZ.I=0;}
function HW(){Hd.call(this);this.F1=null;}
function W5(a){a.F1=DS(1);}
var L7=G(HW);
var A$c=null;function ARx(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AH3(){var b;b=new L7;W5(b);A$c=b;}
function Ep(){var a=this;CD.call(a);a.tm=null;a.qA=null;a.gN=0;a.sM=0;a.j0=0;}
var A$x=null;var A$y=null;var A$F=null;function AML(){AML=Bm(Ep);A0A();}
function A7w(a,b,c,d,e,f,g){var h=new Ep();VP(h,a,b,c,d,e,f,g);return h;}
function ANj(){AML();return A$F.dZ();}
function VP(a,b,c,d,e,f,g,h){AML();Du(a,b,c);a.tm=d;a.qA=e;a.gN=f;a.sM=g;a.j0=h;}
function A0A(){var b;b=new Ep;AHw();VP(b,C(87),0,C(88),A$G,2,0,0);A$x=b;b=A7w(C(89),1,C(90),A$G,2,0,1);A$y=b;A$F=I(Ep,[A$x,b]);}
function Nb(){var a=this;B.call(a);a.Fe=null;a.FE=null;}
function AIa(b){var c,d;if(GK(b))N(AKD(b));if(!AL$(Q(b,0)))N(AKD(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AL$(d))break a;else N(AKD(b));}}c=c+1|0;}}
function AL$(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var MV=G(Nb);
var A$z=null;function AGL(){AGL=Bm(MV);APV();}
function AIn(a){var b,c;b=new T2;b.gL=C(91);HC();c=A$A;b.jJ=c;b.os=c;b.Fz=a;b.xC=0.3333333432674408;b.D5=0.5;b.yp=DS(512);b.Bc=B6(512);return b;}
function APV(){var b,c,d,e,f;b=new MV;AGL();c=P(BC,0);d=c.data;AIa(C(92));e=d.length;f=0;while(f<e){AIa(d[f]);f=f+1|0;}b.Fe=C(92);b.FE=c.dZ();A$z=b;}
function Ze(){var a=this;B.call(a);a.gC=null;a.qP=null;a.m3=null;a.Bs=null;a.sZ=null;a.th=null;}
function AKG(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gC,b,c));}
function Pz(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.qP[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gC,b,d));f=e.data;Fq();d=f.length;AGL();g=A$z;h=AK1(e,0,d);a:{try{i=AIn(g);HC();g=AJ$(AHG(AMF(i,A$B),A$B),h);break a;}catch($$e){$$je=E_($$e);if($$je instanceof Gw){g=$$je;}else{throw $$e;}}h=new AEI;h.k7=1;h.lq=1;h.i$=C(93);h.nQ=g;N(h);}if(!g.be&&g.eu==g.oO)c.ci=g.iT;else{f=B6(Ck(g));e=f.data;c.ci=f;PX(g,f,0,e.length);}return c;}
function XF(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.m3[e]){e=e+1|0;}d=e-d|0;JO(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gC,b,d)));return c;}
var Ik=G(CD);
var A$H=null;var A$G=null;var A$I=null;function AHw(){AHw=Bm(Ik);AZC();}
function APQ(a,b){var c=new Ik();AMh(c,a,b);return c;}
function ASa(){AHw();return A$I.dZ();}
function AMh(a,b,c){AHw();Du(a,b,c);}
function AZC(){var b;A$H=APQ(C(94),0);b=APQ(C(95),1);A$G=b;A$I=I(Ik,[A$H,b]);}
var N$=G(HW);
var A$d=null;function AP5(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AJn(){var b;b=new N$;W5(b);A$d=b;}
function AIg(){BX.call(this);this.Dz=null;}
function AKD(a){var b=new AIg();AVt(b,a);return b;}
function AVt(a,b){X(a);a.Dz=b;}
var Vj=G(EH);
var MU=G(0);
function AE_(){B.call(this);this.zz=null;}
function AUR(a,b){a.zz.setPointerCapture(b.pointerId);}
function AFa(){B.call(this);this.yJ=null;}
function AOz(a,b){a.yJ.releasePointerCapture(b.pointerId);}
function It(){var a=this;B.call(a);a.oO=0;a.be=0;a.eu=0;a.j7=0;}
function ADS(a,b){a.j7=(-1);a.oO=b;a.eu=b;}
function FI(a,b){var c,d,e;if(b>=0&&b<=a.eu){a.be=b;if(b<a.j7)a.j7=0;return a;}c=new BX;d=a.eu;e=new J;L(e);Br(V(H(V(H(e,C(96)),b),C(97)),d),93);Bp(c,K(e));N(c);}
function Ck(a){return a.eu-a.be|0;}
function Eg(a){return a.be>=a.eu?0:1;}
var ABg=G(0);
var L0=G(It);
function AI_(b){var c,d;if(b>=0)return AT3(0,b,B6(b),0,b,0);c=new BX;d=new J;L(d);V(H(d,C(98)),b);Bp(c,K(d));N(c);}
function ALd(b,c,d){return AT3(0,b.data.length,b,c,c+d|0,0);}
function PX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BJ;i=new J;L(i);V(H(V(H(i,C(99)),g),C(100)),f);Bp(h,K(i));N(h);}if(Ck(a)<d){j=new OG;X(j);N(j);}if(d<0){j=new BJ;k=new J;L(k);H(V(H(k,C(101)),d),C(102));Bp(j,K(k));N(j);}g=a.be;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.iT.data[m+a.qD|0];l=l+1|0;c=n;m=o;}a.be=g+d|0;return a;}}b=b.data;j=new BJ;d=b.length;k=new J;L(k);Br(V(H(V(H(k,C(103)),c),C(97)),d),41);Bp(j,K(k));N(j);}
function NM(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.qQ){b=new KQ;X(b);N(b);}e=d-c|0;if(Ck(a)<e){b=new J4;X(b);N(b);}if(c>M(b)){f=new BJ;d=M(b);b=new J;L(b);Br(V(H(V(H(b,C(104)),c),C(97)),d),41);Bp(f,K(b));N(f);}if(d>M(b)){f=new BJ;c=M(b);b=new J;L(b);V(H(V(H(b,C(105)),d),C(106)),c);Bp(f,K(b));N(f);}if(c>d){b=new BJ;f=new J;L(f);V(H(V(H(f,C(104)),c),C(107)),d);Bp(b,K(f));N(b);}g=a.be;while(c<d){h=g+1|0;i=c+1|0;ABk(a,g,Q(b,c));g=h;c=i;}a.be=a.be+e|0;return a;}
function NB(){var a=this;It.call(a);a.nJ=0;a.ql=null;a.Eg=null;}
function AK1(b,c,d){var e,f,g;e=b.data;f=new AEx;g=e.length;d=c+d|0;ADS(f,g);A1a();f.Eg=A$J;f.nJ=0;f.ql=b;f.be=c;f.eu=d;f.Ek=0;f.xW=0;return f;}
function AEy(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.xW){e=new KQ;X(e);N(e);}if(Ck(a)<d){e=new J4;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BJ;j=new J;L(j);V(H(V(H(j,C(108)),h),C(100)),g);Bp(i,K(j));N(i);}if(d<0){e=new BJ;i=new J;L(i);H(V(H(i,C(101)),d),C(102));Bp(e,K(i));N(e);}h=a.be;k=h+a.nJ|0;l=0;while(l<d){b=a.ql.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.be=h+d|0;return a;}}b=b.data;e=new BJ;d=b.length;i=new J;L(i);Br(V(H(V(H(i,C(103)),c),C(97)),d),41);Bp(e,
K(i));N(e);}
function Qp(a){a.be=0;a.eu=a.oO;a.j7=(-1);return a;}
function I1(){B.call(this);this.EX=null;}
var A$C=null;var A$B=null;var A$A=null;function HC(){HC=Bm(I1);ASv();}
function AIU(a){var b=new I1();AL8(b,a);return b;}
function AL8(a,b){HC();a.EX=b;}
function ASv(){A$C=AIU(C(109));A$B=AIU(C(110));A$A=AIU(C(111));}
var PN=G(Cz);
function ASm(a){}
function ARb(a,b,c){}
function H5(){var a=this;Cz.call(a);a.c3=null;a.q=null;}
function ADR(a,b){var c,d,e;Et(a,b);a.c3=AKl(0,0,64);c=new Ut;c.bT=new Bh;c.dh=CP(P(CM,0));c.d9=new Bh;c.qB=new Bh;c.mP=new B4;c.Dm=new B4;d=b.R;c.bM=d;e=b.bH;c.ct=e;c.cM=d.mm;c.c2=Sd(e);d=b.n.nh;e=new ZY;e.uv=c;Z(d,e);d=b.n.mI;e=new ZX;e.w3=c;Z(d,e);Z(b.n.g6,c);Z(b.n.hx,c);a.q=c;Z(b.n.bA,new AA6);b=b.n.bA;c=a.q;BD(c);d=new AA5;d.yo=c;Z(b,d);}
function HP(a){EU(a.C.R,a.c3);}
function AHm(a,b,c){var d,e,f,g,h;a:{d=a.q;Ct(d.bT,b);e=d.cl;if(e!==c){d.cl=c;f=(B5(d.dh)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eJ(e,c);h=h+1|0;}}}}
function Cq(){H5.call(this);this.v=null;}
function Go(a,b){G8(a,b,1);}
function G8(a,b,c){var d,e,f;ADR(a,b);d=new AEN;e=a.q;d.bI=CP(P(UF,0));d.Y=e;a.v=d;Z(a.q.dh,d);Z(b.n.bY,a.v);d=b.n.fC;e=a.v;BD(e);f=new Xf;f.wU=e;Z(d,f);d=b.n.cy;e=a.v;BD(e);f=new Xe;f.ug=e;Z(d,f);if(c){b=b.n.bY;f=a.q.c2;d=new X1;d.xu=f;Z(b,d);}}
function APZ(a){HP(a);J_(a.v);}
function IV(a,b,c){var d,e;AHm(a,b,c);d=(B5(a.v.bI)).data.length;e=0;while(e<d){e=e+1|0;}}
function Qz(a,b){var c,d,e,f,g;c=a.v;d=0;e=(B5(c.bI)).data;f=e.length;g=0;while(g<f){d=e[g].Z.cE(b)|d;g=g+1|0;}return d;}
var Fo=G(0);
function AI0(a){a.d4(IW());}
function JL(a){a.d4(Gu());}
function AJQ(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Jf;c=new Kz;d=new HD;AIo();Lj(d,A$K);MW(c,d,B0(A$L),B0(A$M),B0(A$N),B0(A$L),B0(A$O),B0(A$P),B0(A$Q),B0(A$R),B0(A$S),B0(A$T));e=AK8(S(C(112)));f=(AMk()).data;g=f.length;h=P(KO,g);i=h.data;j=0;while(j<g){i[j]=f[j].p1;j=j+1|0;}k=ALV(S(C(113)),S(C(114)),S(C(115)),S(C(116)));l=new Ji;m=new Jp;AXY();d=A$U;O9(m,d,A$V,A$W,A$X,A$Y,d);Mi(l,m,AMG(),AI3(S(C(117)),S(C(112)),Cs(0)),AMG(),AJq(1,0.07500000298023224),A$Z,A$0);L9(b,c,e,h,k,l,AFE(S(C(118)),S(C(119)),S(C(120)),
S(C(121))));a.d4(b);}
var J0=G(0);
var EY=G(0);
function Lh(){var a=this;Cq.call(a);a.H=null;a.L=null;a.i5=null;a.jL=0;a.lu=null;a.mV=null;a.Ax=null;a.nI=null;a.fU=null;}
function A84(a){var b=new Lh();AGO(b,a);return b;}
function AGO(a,b){var c,d,e;G8(a,b,0);a.fU=AYR(a.q);c=IT(a.v);a.i5=c;a.H=GW(c);c=GW(a.i5);a.L=c;a.mV=AIN(a.H,c);c=a.H;c.b9=1;OI(a.fU,c,a.L);c=a.H;d=new UQ;d.Cu=a;c.iK=d;c=a.L;d=new UR;d.z2=a;c.iK=d;AIL(a,0);Nn(a.q,a.H);Z(b.n.fC,a);Z(b.n.bY,a);c=b.n.bA;d=new US;d.x1=a;Z(c,d);c=b.n.bA;d=new GJ;e=new UO;e.vV=a;G5(d,b,e);Z(c,d);Z(b.n.g6,a);Z(b.n.hx,a);b=b.n.cy;c=new UP;c.tA=a;Z(b,c);JL(a);}
function W9(a,b){if(a.H===b)a.jL=a.jL|1;if(a.L===b)a.jL=a.jL|2;if((a.jL&3)==3)AMN(a);}
function AIL(a,b){Jg(a.H,b);Jg(a.L,b);}
function A5J(a,b,c){if(DA(a.q,a.H))return Ju(a.H,b,c);if(!DA(a.q,a.L))return 0;return Ju(a.L,b,c);}
function AG9(a){if(DA(a.q,a.H))return WO(a,a.H);if(!DA(a.q,a.L))return null;return WO(a,a.L);}
function WO(a,b){var c;c=new TN;c.s$=b;return c;}
function AGM(a,b,c){var d;d=E6(c);if(b!==a.H)a.nI=d;else a.Ax=d;b=a.Ax;if(b!==null&&a.nI!==null)GA(a.C.bH,E6(c));else{if(b!==null)GA(a.C.bH,b);b=a.nI;if(b!==null)GA(a.C.bH,b);}}
function AMN(a){var b,c,d;Bf(Bj(),C(122));b=a.H.d.h;c=a.L.d.h;d=new Wn;d.ti=a;AJT(b,c,d,a.C.bH);}
function AUz(a,b){var c;c=Qz(a,b);return L1(a.H,b)|L1(a.L,b)|c;}
function A1U(a){var b;HP(a);IF(a.H);IF(a.L);b=a.fU;AHZ(b,b.iX.bM);J_(a.v);}
function A0W(a){return EL(0);}
function AU0(a){JQ(a.H);JQ(a.L);}
function A1P(a){KS(a.H);KS(a.L);}
function AVH(a,b){IQ(a.H,b);IQ(a.L,b);}
function A2L(a,b){KT(a.q,b);}
function APg(a,b){if(GT(a.v,b)){Ml(a.H);Ml(a.L);}}
function ARQ(a,b,c){IV(a,b,c);AHk(a,b,c);}
function AHk(a,b,c){var d,e,f,g,h,i;d=new Bh;e=Cj(20.0,c);f=new Bh;g=b.a/2|0;h=e/2|0;Ro(f,g-h|0,b.b);MT(a.H,d,f,c);i=b.a;d.a=(i-(i/2|0)|0)+h|0;MT(a.L,d,f,c);Y(a.fU.i,f.a,d.b);Y(a.fU.k,d.a-f.a|0,f.b);}
function ANS(a,b){BD(b);F5(a.i5,b);E8(a.H,b);E8(a.L,b);a.fU.iC=b;}
function AIG(a,b){if(b.bk!=121)return 0;return 1;}
function AK0(a,b){var c,d,e,f;if(DA(a.q,a.H)){c=a.i5;d=b.j;e=a.H;f=new PF;f.vQ=a;I0(c,d,e,a,a,a,f);}if(DA(a.q,a.L)){c=a.i5;b=b.j;d=a.L;e=new PE;e.u1=a;I0(c,b,d,a,a,a,e);}return 1;}
function A29(a,b){var c,d;c=B3(a.H,b.j)&&Yv(a.H,b)?1:0;d=B3(a.L,b.j)&&Yv(a.L,b)?1:0;return !c&&!d?0:1;}
function A0Z(a,b,c,d){var e,f;e=B3(a.H,b.j)&&PB(a.H,b,c,d)?1:0;f=B3(a.L,b.j)&&PB(a.L,b,c,d)?1:0;return !e&&!f?0:1;}
function ASL(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.H,b.j);e=B3(a.L,b.j);f=a.q;g=f.cB;h=g!==null?0:1;i=a.H;j=g!==i?0:1;k=g!==a.L?0:1;if(d&&!(!h&&!k))C2(f,i);if(e&&!(!h&&!j))C2(a.q,a.L);if(d){i=Xo(a.H,b,c);if(i!==null)return i;}return !e?null:Xo(a.L,b,c);}
function A3G(a,b,c){var d,e,f,g;d=B3(a.H,b.j);e=B3(a.L,b.j);f=d&&TV(a.H,b,c)?1:0;g=e&&TV(a.L,b,c)?1:0;return !f&&!g?0:1;}
function AT8(a,b,c,d){var e,f,g,h;e=B3(a.H,b.j);f=B3(a.L,b.j);g=e&&Mf(a.H,b,c,d)?1:0;h=f&&Mf(a.L,b,c,d)?1:0;return !g&&!h?0:1;}
function A1q(a){return AG9(a);}
var AIq=G(Lh);
function A8z(a){var b=new AIq();A5w(b,a);return b;}
function A5w(a,b){var c;AGO(a,b);a.H.e8=1;a.L.e8=1;c=new Ue;c.x4=a;QR(a,c,C(123));c=new Ug;c.Bv=a;QR(a,c,C(124));}
function ASW(a){return EL(1);}
function QR(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new Pt;d=d.then(Bw(e,"f"));f=new Pv;f.uy=b;f.ux=c;g=new Pu;d.then(Bw(f,"f"),Bw(g,"f"));}
var AIP=G();
function A40(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(125)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(Kk(b)){case -1570047148:if(!Bk(b,C(126)))break a;d=17;break a;case -1509980539:if(!Bk(b,C(127)))break a;d=13;break a;case -1351411913:if(!Bk(b,C(128)))break a;d=5;break a;case -1073555521:if(!Bk(b,C(129)))break a;d=14;break a;case -1045861099:if(!Bk(b,C(130)))break a;d=18;break a;case -1045861098:if(!Bk(b,C(131)))break a;d=19;break a;case -811765794:if(!Bk(b,C(132)))break a;d=6;break a;case -785237654:if
(!Bk(b,C(133)))break a;d=11;break a;case -695287066:if(!Bk(b,C(134)))break a;d=20;break a;case -643550180:if(!Bk(b,C(135)))break a;d=28;break a;case -631889171:if(!Bk(b,C(136)))break a;d=9;break a;case -536831301:if(!Bk(b,C(137)))break a;d=26;break a;case -439438829:if(!Bk(b,C(138)))break a;d=21;break a;case -357667878:if(!Bk(b,C(139)))break a;d=22;break a;case -223304637:if(!Bk(b,C(140)))break a;d=2;break a;case -193916863:if(!Bk(b,C(141)))break a;d=23;break a;case 2129957:if(!Bk(b,C(142)))break a;d=1;break a;case 3343967:if
(!Bk(b,C(143)))break a;d=10;break a;case 3556498:if(!Bk(b,C(144)))break a;d=4;break a;case 91636708:if(!Bk(b,C(145)))break a;d=25;break a;case 485517998:if(!Bk(b,C(146)))break a;d=7;break a;case 544901384:if(!Bk(b,C(147)))break a;d=3;break a;case 654963552:if(!Bk(b,C(148)))break a;d=24;break a;case 1030621992:if(!Bk(b,C(149)))break a;d=16;break a;case 1164939699:if(!Bk(b,C(150)))break a;d=29;break a;case 1465713255:if(!Bk(b,C(151)))break a;d=8;break a;case 1554501643:if(!Bk(b,C(152)))break a;d=15;break a;case 1609169232:if
(!Bk(b,C(153)))break a;d=12;break a;case 2090248989:if(!Bk(b,C(154)))break a;d=27;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Vx;break b;case 3:case 4:b=new Vu;break b;case 5:b=new Vt;break b;case 6:b=new Vw;break b;case 7:b=new Vv;break b;case 8:b=new VB;break b;case 9:case 10:b=new VA;break b;case 11:b=new VD;break b;case 12:b=new VC;break b;case 13:b=new AB4;break b;case 14:b=new AB3;break b;case 15:b=new AB2;break b;case 16:b=new ABP;break b;case 17:b=new ABO;break b;case 18:b=new ABM;break b;case 19:b
=new ABL;break b;case 20:b=new ABK;break b;case 21:b=new ABJ;break b;case 22:b=new ABI;break b;case 23:b=new ABT;break b;case 24:b=new ABS;break b;case 25:b=new ABR;break b;case 26:b=new ABQ;break b;case 27:b=new ABX;break b;case 28:b=new ABW;break b;case 29:b=new ABV;break b;default:b=new ABU;break b;}b=new Vy;}return b;}
var AK_=G();
var Lo=G(L0);
function AG7(){var a=this;Lo.call(a);a.qQ=0;a.qD=0;a.iT=null;}
function AT3(a,b,c,d,e,f){var g=new AG7();AW$(g,a,b,c,d,e,f);return g;}
function AW$(a,b,c,d,e,f,g){ADS(a,c);a.be=e;a.eu=f;a.qD=b;a.qQ=g;a.iT=d;}
function ABk(a,b,c){a.iT.data[b+a.qD|0]=c;}
function LS(){var a=this;B.call(a);a.Fn=null;a.tk=null;a.Eu=0.0;a.xw=0.0;a.om=null;a.nP=null;a.lR=0;}
function OE(){var a=this;B.call(a);a.io=0;a.kA=0;}
var A$E=null;var A$D=null;function AF1(a,b){var c=new OE();AKj(c,a,b);return c;}
function AKj(a,b,c){a.io=b;a.kA=c;}
function Jl(a){return a.io?0:1;}
function Iv(a){return a.io!=1?0:1;}
function N9(a){return !Sh(a)&&!MJ(a)?0:1;}
function Sh(a){return a.io!=2?0:1;}
function MJ(a){return a.io!=3?0:1;}
function Lu(a){var b;if(N9(a))return a.kA;b=new DU;X(b);N(b);}
function EF(b){return AF1(2,b);}
function U8(a){var b,c;switch(a.io){case 0:b=new RU;X(b);N(b);case 1:b=new Ww;X(b);N(b);case 2:b=new U4;c=a.kA;X(b);b.E8=c;N(b);case 3:b=new RN;c=a.kA;X(b);b.Gx=c;N(b);default:}}
function AKw(){A$E=AF1(0,0);A$D=AF1(1,0);}
var AFW=G();
var Jo=G(0);
var XR=G();
function AP_(a,b){return b.arrayBuffer();}
var XQ=G();
function ATs(a,b){var c,d;c=new Zd;d=new Zb;return $rt_globals.WebAssembly.instantiate(b,ARD(Bw(c,"f"),Bw(d,"f")));}
var XO=G();
function ATX(a,b){AOv(b);}
var XN=G();
function AY7(a,b){AIX(b);}
var W=G(0);
function Ue(){B.call(this);this.x4=null;}
function A6e(a,b){Ig(a.x4.H,b);}
function Ug(){B.call(this);this.Bv=null;}
function A1u(a,b){Ig(a.Bv.L,b);}
var Vy=G();
function AVX(a,b){return A84(b);}
var Vx=G();
function ANz(a,b){return A7U(b);}
var Vu=G();
function AZM(a,b){return A76(b);}
var Vt=G();
function A2J(a,b){var c,d,e,f,g;c=new ACm;Et(c,b);d=(IW()).bw.eq;c.FP=d;c.ly=AMO(d);c.jl=new Bh;c.ip=new Bh;c.dt=Ld();c.d6=Ld();c.nw=EL(1);b=b.n.bY;d=new Xw;d.my=c;Z(b,d);b=c.nw.data[DX()*c.nw.data.length|0];d=II(c.C.R,b,10);c.nk=d;Cr(c.C.R.cn,d);e=Ev(c.C.R.cn,C(155));d=c.C.R.cn;f=new J;L(f);Br(f,43);H(f,b);g=C5(e+Ev(d,K(f)));c.jY=g;c.iZ=BY(c.iZ,AFn(c,1,g,b,c.nk,c.C.R));c.iY=BY(c.iY,AFn(c,0,c.jY,b,c.nk,c.C.R));RY(c,c.dt,c.iZ);RY(c,c.d6,c.iY);Cv(c.dt.bc,1.0,1.0,1.0,1.0);Fw(c.dt,c.ly);Cv(c.d6.bc,1.0,1.0,1.0,1.0);Fw(c.d6,
c.ly);b=Bj();g=c.jY;d=new J;L(d);V(H(d,C(156)),g);Bf(b,K(d));return c;}
var Vw=G();
function APT(a,b){var c,d,e;c=new Yy;Go(c,b);d=new Xs;d.oh=new Bh;d.oK=new Bh;c.zG=d;c.fm=ALb();c.dP=ALb();c.o4=DB(C(157),25.0);Z(c.q.dh,c);d=b.n.bA;e=new ACO;e.vv=c;Z(d,e);Z(b.n.bY,c);b=b.n.cy;d=new ACK;d.wu=c;Z(b,d);AFq(c.dP);BL(c.c3,Cs(43));b=Ft();J3(c.fm,b);J3(c.dP,b);b=c.fm;b.le=new ACL;d=c.dP;d.le=new ACM;d.pD=new QM;d.xB=new QN;NQ(b,(Sv(0)).kF);NQ(c.dP,(Sv(0)).kF);return c;}
var Vv=G();
function AXe(a,b){var c,d,e;c=new ABN;Go(c,b);Z(c.q.dh,c);BL(c.c3,Cs(43));d=b.n.bA;e=new Vn;e.DI=c;Z(d,e);b=b.n.cy;d=new Vo;d.Cg=c;Z(b,d);return c;}
var VB=G();
function APx(a,b){var c,d,e;c=new XW;ADR(c,b);c.id=BO();c.gx=BO();c.sA=S(C(158));c.ky=VS();c.ic=0;d=c.q.dh;e=new PD;e.yW=c;Z(d,e);Z(b.n.bY,c);d=b.n.bA;e=new PC;e.wE=c;Z(d,e);b=II(b.R,C(157),35);c.kD=b;c.mJ=AJR(Fi(b));BL(c.c3,S(C(159)));return c;}
var VA=G();
function ASe(a,b){var c,d,e,f;c=new TC;Et(c,b);c.ih=AIW();c.fe=0;c.vI=500;c.sB=IX(0,0,0,255,new B4);c.mX=20;c.yd=20;c.Bi=IW();d=b.n.bY;e=new XH;e.l7=c;f=new UN;f.Bb=e;e.sl=f;Z(d,e);d=b.n.fC;e=new AA7;e.BM=c;Z(d,e);c.eK=b.R;c.yB=Sd(b.bH);ZG(c.ih,II(c.eK,C(157),c.yd),c.mX,c.eK.mm);c.jk=Jw();return c;}
var VD=G();
function A4g(a,b){var c,d;c=new RV;H7(c,b);b=b.n.bA;d=new Rq;d.tJ=c;Z(b,d);$rt_globals.console.info("press Ctrl-Shift-O to open folder");$rt_globals.console.info("press Ctrl-O to open file");return c;}
var VC=G();
function ANg(a,b){var c,d,e,f,g,h,i;c=new Yf;Go(c,b);d=b.n.cy;e=new Sk;e.yZ=c;Z(d,e);d=b.bH;f=new Qo;f.EJ=c;g=P(B,1);g.data[0]=C(160);CO(d,f,C(161),g);h=new Qn;h.FI=c;g=P(B,1);g.data[0]=AKO([1,2,3,4,5]);CO(d,h,C(162),g);h=new Qk;h.GL=c;i=P(B,1);i.data[0]=A7x([1,2,3,4,5]);CO(d,h,C(163),i);h=new Qi;h.FS=c;g=P(B,1);g.data[0]=D6([1,2,3,4,5]);CO(d,h,C(164),g);d=b.n.bA;e=new GJ;h=new Sj;h.Bf=c;G5(e,b,h);Z(d,e);return c;}
var AB4=G();
function ANt(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Xy;H7(c,b);c.fc=Ir(0,0,300,300);c.gX=T0(0,0,3,3);d=b.R;b=b.n.bY;e=new ACY;e.nq=c;Z(b,e);b=AMV(d);c.BZ=b;F3(c.fc,b);Gc(c.fc);b=c.fc.br;FW();BL(b,A$1);BL(c.fc.bc,DE(204,120,50));AHy();e=A$2;f=DS((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C3(d);switch(e.fi){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Fg;X(b);N(b);}b:
{XK(m,5,5,h);b=m.eS.eb;switch(e.fi){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Fg;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.n8=m;Y(c.gX.u,BU(m),CT(c.n8));BL(c.gX.br,c.qv);return c;}
var AB3=G();
function A1A(a,b){var c,d,e;c=new TA;H7(c,b);c.hf=Ir(0,0,300,300);c.mU=new Bh;c.kU=new Bh;c.kd=new Bh;d=b.R;b=b.n.bY;e=new YG;e.kQ=c;Z(b,e);b=AMV(d);c.rv=b;F3(c.hf,b);Gc(c.hf);b=c.hf.br;FW();BL(b,A$1);BL(c.hf.bc,DE(204,120,50));return c;}
var AB2=G();
function ATb(a,b){var c,d,e,f;c=new ABy;Et(c,b);c.EU=20;c.Gy=11;c.Fg=220;c.mw=new Bh;c.F0=5000;c.iD=1;c.g8=I(HD,[Cs(0),Cs(255)]);c.eU=b.R;d=b.n.bY;e=new Zv;e.mj=c;f=new VO;f.uk=e;e.rk=f;Z(d,e);b=b.n.fC;d=new WW;d.r4=c;Z(b,d);b=H1(c.eU,200,220);c.pb=b;HM(b,C(157),20.0);b=H1(c.eU,200,20);c.g0=b;HM(b,C(157),20.0);c.iV=Jw();return c;}
var ABP=G();
function AQd(a,b){var c,d,e;c=new KM;H7(c,b);Z(b.n.bY,c);d=b.n.bA;e=new AEu;e.xA=c;Z(d,e);Z(b.n.g6,new AEt);d=b.n.g6;e=new AEs;e.s_=c;Z(d,e);Z(b.n.hx,new AEr);d=b.n.hx;e=new AEv;e.AY=c;Z(d,e);b=!WC(b.bH)?C(165):C(166);d=new J;L(d);H(H(d,C(167)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ABO=G();
function AXs(a,b){var c,d;c=new Tj;H7(c,b);c.va=Cs(20);c.gG=Ir(0,0,300,300);c.wI=DB(C(14),80.0);b=b.n.bA;d=new S0;d.EZ=c;Z(b,d);return c;}
var ABM=G();
function A5l(a,b){var c;c=new Ud;Pc(c,b);Hz(c.cq,0,0,300,300);Y(c.dx,300,300);return c;}
var ABL=G();
function ASn(a,b){var c;c=new Uc;Pc(c,b);c.ge=new Bh;c.gH=new Bh;Y(c.ej,150,140);Y(c.dx,500,100);Y(c.fy,150,200);Y(c.eT,500,250);return c;}
var ABK=G();
function A4i(a,b){var c,d,e;c=new W4;Go(c,b);c.Ds=3;c.w_=DB(C(168),20.0);c.kr=VS();c.qT=1;Z(c.q.dh,c);BL(c.c3,Cs(43));d=b.n.bA;e=new P4;e.Ah=c;Z(d,e);b=b.n.cy;d=new P6;d.wC=c;Z(b,d);return c;}
var ABJ=G();
function AM$(a,b){return A8w(b);}
var ABI=G();
function A37(a,b){var c,d,e,f;c=new Q9;Ky(c,b);BL(c.c3,Cs(43));c.mx=IT(c.v);d=b.n.bA;e=new GJ;f=new P7;f.Ct=c;G5(e,b,f);Z(d,e);b=b.n.cy;d=new P8;d.Ae=c;Z(b,d);return c;}
var ABT=G();
function A3j(a,b){var c,d;c=new SA;G8(c,b,1);c.nx=Gu();Z(c.q.dh,c);BL(c.c3,Cs(43));b=b.n.cy;d=new Yz;d.y9=c;Z(b,d);return c;}
var ABS=G();
function AO3(a,b){var c,d,e,f;c=new RW;G8(c,b,1);c.m1=Gu();c.mz=CP(P(Kv,0));Z(c.q.dh,c);BL(c.c3,Cs(43));d=b.n.bA;e=new GJ;f=new QC;f.tO=c;G5(e,b,f);Z(d,e);b=b.n.cy;d=new QB;d.wd=c;Z(b,d);return c;}
var ABR=G();
function A0G(a,b){var c;c=new ZN;Ky(c,b);c.wL=Gu();BL(c.c3,Cs(43));return c;}
var ABQ=G();
function AQ8(a,b){return A78(b);}
var ABX=G();
function AQ9(a,b){var c,d,e;c=new Qe;Ky(c,b);c.v8=Gu();BL(c.c3,Cs(43));d=b.n.cy;e=new Vs;e.DF=c;Z(d,e);b=b.n.bA;d=new Vr;d.uN=c;Z(b,d);return c;}
var ABW=G();
function AX_(a,b){var c,d,e;c=new AAx;Ky(c,b);c.pC=Gu();BL(c.c3,Cs(43));d=b.n.cy;e=new Rs;e.Cj=c;Z(d,e);b=b.n.bA;d=new Rr;d.Ee=c;Z(b,d);return c;}
var ABV=G();
function APh(a,b){var c,d;c=new UK;Go(c,b);c.hj=Gu();Z(c.q.dh,c);BL(c.c3,Cs(43));b=b.n.cy;d=new AB7;d.ro=c;Z(b,d);return c;}
var ABU=G();
function A3h(a,b){var c;c=new Pk;AJe(c,b);AL_(c.d5);return c;}
function AEq(){var a=this;B.call(a);a.vs=null;a.BS=null;a.Bh=null;}
function Iw(){var a=this;B.call(a);a.bQ=0;a.cW=0;a.dL=0;a.kX=0;}
function A$3(a,b,c,d){var e=new Iw();AC1(e,a,b,c,d);return e;}
function AC1(a,b,c,d,e){a.bQ=d;a.cW=b;a.dL=c;a.kX=e;}
function Q0(){var a=this;Iw.call(a);a.ep=null;a.bk=0;a.ka=0;a.AV=0;a.pj=0;}
var AIr=G();
function VX(b,c){return (b+(c/2|0)|0)/c|0;}
function ZJ(b,c,d){if(b<(2147483647/c|0))return VX(Bc(b,c),d);return 0.5+c*b/d|0;}
function Iq(b,c){return ((b+c|0)-1|0)/c|0;}
function G1(b){return b+0.5|0;}
function C5(b){return b+0.5|0;}
function Fh(b,c,d){return Bd(b,Be(c,d));}
function NA(b,c){return AJM(b)/AJM(c);}
function Pe(){var a=this;Iw.call(a);a.j=null;a.Ff=null;}
var Un=G(0);
function P3(){var a=this;B.call(a);a.wJ=null;a.wK=null;}
function A1B(a,b){var c,d;c=a.wJ;d=a.wK;$rt_globals.console.info("paste plain string "+b);c.g(FT(b));DJ(d);}
function ADf(){B.call(this);this.w6=null;}
function AD1(a,b){a.w6.clipboardData.setData("text/plain",$rt_ustr(b));}
function AEx(){var a=this;NB.call(a);a.Ek=0;a.xW=0;}
function CF(){var a=this;B.call(a);a.i=null;a.k=null;a.bX=0.0;}
function AXd(){var a=new CF();Ff(a);return a;}
function Ff(a){a.i=new Bh;a.k=new Bh;}
function AUA(a){}
function A2z(a){return BK(0,0);}
function J$(a,b,c,d){var e;if(!Kh(a.i,b)){a.r_(b);Ct(a.i,b);}if(!Kh(a.k,c)){a.pt(c);Ct(a.k,c);}e=a.bX;if(e!==d){a.bX=d;a.lU(e,d);}}
function DF(a,b){return Cj(b,a.bX);}
function B3(a,b){return GB(b,a.i,a.k);}
function AMI(a,b){var c,d,e,f;c=a.i;d=c.a;e=c.b;f=a.k;AQ$();Bv(b,d,e,f,A$4);}
function ADB(a,b){var c;c=a.i;Mh(b,c.a,c.b,a.k);}
function AYX(a,b){return 0;}
function ASh(a,b){}
function AWs(a,b){}
function A3V(a,b,c){}
function AWz(a){}
function AQ4(a,b,c,d){return 0;}
function AOH(a,b,c){return null;}
function AS0(a,b,c){return 0;}
function AWc(a,b){return 0;}
function A3L(a,b,c,d){return 0;}
function AGC(){var a=this;CF.call(a);a.iX=null;a.lG=null;a.lH=null;a.lE=null;a.lF=null;a.ez=null;a.gO=null;a.gP=null;a.iC=null;}
function AYR(a){var b=new AGC();AO8(b,a);return b;}
function AO8(a,b){Ff(a);a.lG=new Bh;a.lH=new Bh;a.lE=new Bh;a.lF=new Bh;a.iX=b;}
function OI(a,b,c){a.gO=b;a.gP=c;}
function AHZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bv(b,c.a,c.b,a.k,a.iC.bw.eq);if(a.ez===null)return;d=Cw(a.iX,2.0);e=G7(a.ez,a.gO.lD(),1);f=G7(a.ez,a.gO.kR(),1);g=G7(a.ez,a.gP.lD(),0);h=G7(a.ez,a.gP.kR(),0);i=Be(e,g);j=Bd(f,h);g=BP(i,j);if(g<=0)Ca(b,1);k=a.gO.lf();l=a.gO.mg();m=a.gP.mg();n=a.gP.lf();o=a.iX.qB;while(i<=j){p=a.ez.iG.data[i];if(p.ps){q=a.gO.hV(p.im);r=a.gO.hV(p.im+p.oJ|0);s=a.gP.hV(p.il);t=a.gP.hV(p.il+p.oI|0);Y(a.lG,a.i.a,q);Y(a.lE,a.i.a,r);Y(a.lH,a.i.a+a.k.a|0,s);Y(a.lF,
a.i.a+a.k.a|0,t);u=Bd(Be(q,s),a.i.b);v=Be(Bd(r,t),a.i.b+a.k.b|0);if(v>u){Y(o,a.k.a,v-u|0);c=a.iC;w=Km(c.ee,c,p.ps);if(q==r)RT(a,b,q,s,d,k.a,l.a,w,a.lG,a.lE);if(s==t)RT(a,b,s,q,d,n.a,m.a,w,a.lH,a.lF);AFw(b,a.i.a,u,o,a.lG,a.lH,a.lE,a.lF,w);}}i=i+1|0;}if(g<=0)Ca(b,0);}
function RT(a,b,c,d,e,f,g,h,i,j){var k;k=a.iX.d9;Y(k,g,e);if(d>=c)j.b=j.b+e|0;else{c=c-e|0;i.b=i.b-e|0;}Bv(b,f,c,k,h);}
function AG_(){var a=this;B.call(a);a.ce=null;a.dE=null;a.iN=null;}
function IT(a){var b=new AG_();AN8(b,a);return b;}
function AN8(a,b){a.ce=b;}
function F5(a,b){var c;a.iN=b;c=a.dE;if(c!==null)Eq(c,b.b$);c=a.ce.ei;if(c!==null)HF(c,b.b$,b.fL);}
function AAs(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=ARk();i=c.p;j=0;while(j<i){if(f===null){k=(BI(c,j)).bt;l=AA3(FZ(Cg(g.h,k)));m=ABB(g.fw);}else{n=f.data;k=n[j].p8.nL;l=!BR(g.fw,n[j].mn)?C(21):AA3(FZ(Cg(g.h,k)));m=ABB(n[j].mn);}if(M(l)>153){o=Cy(l,0,150);n=new J;L(n);H(H(n,o),C(169));l=K(n);}if(M(m)>153){n=Cy(m,0,150);o=new J;L(o);H(H(o,n),C(169));m=K(o);}n=Do(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BI(c,j);}if(f!==null){q=new AEJ;q.td=d;q.te=p;}else{q=new AEK;q.CB=d;q.CA
=o;}Xb(h,m,n,l,q);j=j+1|0;}r=AEg(h);if(a.dE!==null)ACc(a);c=a.ce.Y;g=new R8;f=new ABw;f.rh=a;f.ri=d;AMC(g,c,f);X9(g,r);d=a.iN;W7(g,d.b$,d.CK);d=AFI(c);a.dE=d;d.qo=d.qo|1;d=G2(g,c);f=a.iN.b$;JC(d,f.nn,f.pk);LA(a.dE,d);Eq(a.dE,a.iN.b$);d=a.dE;f=new J;L(f);H(H(f,C(170)),e);CW(d,K(f));DV(a.ce,a.dE);d=a.dE;i=(d.S.k.b+Cw(d.bg,2.0)|0)+Cw(c,2.0)|0;s=(g.ed+g.eY|0)+g.hU|0;t=Cw(g.b1,5.0);e=BK(Fh(t,b.a,g.b1.bT.a-s|0),Fh(i,b.b,g.b1.bT.b-g.cU.b|0));Zp(g);Ll(g);i=Er(g);s=g.ca.data.length;i=Bc(i,s)+Bc(g.d1,s+1|0)|0;Y(g.cU,
g.k.a,i);i=(g.ed+g.eY|0)+g.hU|0;b=g.b1;s=(b.bT.a-e.a|0)-Cw(b,5.0)|0;b=g.b1;t=(b.bT.b-e.b|0)-Cw(b,5.0)|0;d=BK(Be(i,s),Be(g.cU.b,t));EE(a.dE,e,d);C2(c,g);}
function ACc(a){IJ(a.ce,a.dE);Ki(a.dE);a.dE=null;}
function St(a,b,c){var d,e;d=a.ce;e=a.iN;Fv(d,e.b$,e.fL,b,c);}
function I0(a,b,c,d,e,f,g){St(a,b,AAU(Jx(a,c,g,d,e,f),b));}
function Jx(a,b,c,d,e,f){var g;g=new TU;g.gI=a;g.bz=b;g.rY=c;g.jw=e;g.oT=f;g.mL=d;return g;}
function AGk(b){var c;c=new SE;c.A1=b;return c;}
var F$=G(0);
function A2B(a){}
function AQj(a){}
function ANe(a,b,c){return 0;}
function AXa(a){return null;}
var RL=G(0);
var MR=G(0);
function AGI(){var a=this;CF.call(a);a.cc=null;a.bo=null;a.lb=null;a.C8=0;a.oR=null;a.d7=null;a.ob=0;a.hT=0.0;a.mE=null;a.Ej=null;a.gb=null;a.X=0;a.de=0;a.d=null;a.fI=null;a.ex=null;a.e4=null;a.B5=0;a.AP=0;a.c8=0;a.co=0;a.cv=0;a.iw=null;a.f8=null;a.fM=null;a.jQ=0;a.kv=0;a.GC=0;a.DC=0;a.ln=0;a.me=0;a.qt=0;a.eo=0;a.dk=null;a.fE=null;a.e8=0;a.b9=0;a.Dq=null;a.kt=null;a.Ab=null;a.vn=null;a.iK=null;a.bB=0;a.c4=null;a.tj=0;a.r0=null;a.vX=null;}
function GW(a){var b=new AGI();AUy(b,a);return b;}
function AUy(a,b){var c,d,e;Ff(a);a.C8=0;a.oR=P(T,10);a.d7=A0B();a.hT=16.0;a.mE=C(157);a.d=A8o(P(BC,0),null,null);c=new AEZ;c.zr=CP(P(NU,0));c.C5=CP(P(NU,0));c.q_=CP(P(AB0,0));c.wx=CP(P(ZP,0));c.v$=CP(P(Gr,0));c.BV=CP(P(Tm,0));a.fI=c;a.e4=P(FF,0);a.iw=BK(1,0);a.f8=Jw();a.fM=Jw();a.jQ=0;a.kv=1;a.ln=1;a.me=1;a.qt=1;a.eo=3;a.dk=AIW();a.fE=C(171);a.e8=0;a.b9=0;c=D0();BD(c);d=new Yq;d.ED=c;a.kt=d;a.bB=0;c=new Yp;c.qZ=a;a.r0=c;c=new Yo;c.t6=a;a.vX=c;c=b.ce.Y;a.cc=c;a.bo=c.bM;a.lb=b;b=AR0(c.cM);a.c4=b;a.gb=b.hn;e=
a.oR.data;b=new Yn;b.B9=a;e[1]=b;b=new Yu;b.yu=a;e[2]=b;b=new Yt;b.uX=a;e[3]=b;b=new Ys;b.xm=a;e[4]=b;b=new Yr;b.rL=a;e[5]=b;b=new Ym;b.Aw=a;e[6]=b;Ls(a.d,a,GY(a));}
function MT(a,b,c,d){J$(a,b,c,d);ABD(a,b,c,d);}
function ATF(a,b,c){Wi(a,a.mE,a.hT);Qw(a.c4,c);}
function A6f(a,b,c){a.Ab=b;a.vn=c;}
function ABD(a,b,c,d){var e;a.c8=Cj(80.0,d);a.co=Cj(1.0,d);a.cv=Cj(10.0,d);e=!a.b9?b.a:(b.a+c.a|0)-IH(a)|0;Y(a.cc.d9,e,b.b);S8(a.dk,a.cc.d9,Be(IH(a),c.a),c.b,d);b=a.d7;e=Cj(2.0,d);b.e0.u.a=e;}
function AZ7(a){a.ob=1;Or(a);}
function AX2(a){a.ob=0;}
function Or(a){ZB(a.d7,Nl(GY(a)));}
function E8(a,b){var c,d;a.ex=b;c=a.d7;d=b.bw.C4;BL(c.e0.bc,d);c=a.f8;d=b.bw;In(c,d.l1,d.l6);c=a.fM;b=b.bw;In(c,b.l1,b.l6);}
function JQ(a){O2(a,a.c4.di.oL,a.hT+1.0);}
function KS(a){var b;b=a.hT;if(b<=7.0)return;O2(a,a.c4.di.oL,b-1.0);}
function IQ(a,b){O2(a,b,a.hT);}
function AUn(a,b){KT(a.cc,b);}
function O2(a,b,c){if(a.cc.cl!==0.0){Wi(a,b,c);JR(GY(a));}a.hT=c;a.mE=b;}
function Ml(a){var b,c,d;b=a.c4;c=a.cc.cM;d=a.bo;b.i7=c;if(b.hW.jD!=c&&b.eh)AFi(b,d);TO(a.e4);IU(a.dk);Ov(a);}
function Wi(a,b,c){var d,e,f,g,h,i,j;d=a.bX;e=c*d;Cj(c,d);f=a.c4.di;d=f===null?0.0:f.pv;if(!(e===d&&BR(b,a.mE))){IU(a.dk);OW(a.e4);g=a.d.h.E.data;h=g.length;i=0;while(i<h){Fd(g[i]);i=i+1|0;}j=a.c4;f=a.bo;j.di=AKz(b,e,300,600,j.hn,f);f=a.c4;a.Ej=f.di;a.X=Ta(f,1.25,a.bo);a.de=C5(a.c4.di.qC);a.d7.e0.u.b=Fi(a.c4.di);i=a.X;f=new J;L(f);b=H(H(f,C(172)),b);Br(b,32);V(H(Df(b,e),C(173)),i);$rt_globals.console.info($rt_ustr(K(f)));if(A$5){h=NJ(a.c4.di,a.X);b=new J;L(b);V(H(b,C(174)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iH
=Hf(Ge(a),a.d.B,a.bo.cn,a.gb);Ip(a);Ov(a);}}
function AYq(a){OW(a.e4);Zi(a.c4);IU(a.dk);}
function Pd(a){return Bc(CK(a.d.h)+5|0,a.X);}
function Lk(a){return Bd(Pd(a)-a.k.b|0,0);}
function ACd(a){return Bd(a.jQ-GC(a)|0,0);}
function GC(a){var b;b=!a.b9?0:a.de+a.cv|0;return Bd(1,(a.k.a-a.c8|0)-b|0);}
function IH(a){return a.b9?a.c8:a.c8-a.cv|0;}
function Es(a){return a.k.b;}
function L1(a,b){var c,d,e;c=a.d.h;if(ACG(c)&&b-c.A9>0.03125?1:0){d=a.tj;e=a.d.h.cz;if(d!=e){a.tj=e;AAN(a);}}if(a.X)AB9(a);d=ACP((a.bB+a.GC|0)-a.DC|0,Lk(a));e=a.bB==d?0:1;if(e)Gg(a,d);return !ACf(a.d7,b)&&!e&&!a.C8?0:1;}
function I3(a,b){var c,d;b=ACP(b,ACd(a));c=a.d;d=b==c.d2?0:1;if(d)c.d2=b;if(d){c=a.Ab;if(c!==null)c.e();}}
function Gg(a,b){var c;if(AKN(a,b)){c=a.vn;if(c!==null)c.e();}}
function AKN(a,b){var c,d;c=ACP(b,Lk(a));d=c==a.bB?0:1;if(d){a.bB=c;a.d.m4=c/a.X;}return d;}
function AIA(a){return BK((IH(a)+a.co|0)+a.cv|0,a.X);}
function AVn(a){return a.X;}
function A12(a,b){IF(a);}
function IF(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=Iq(a.k.b,a.X)+7|0;c=a.e4;if(c.data.length<b)a.e4=AAg(b,c,a.c4,a.B5,a.AP,a.d.h);Ca(a.bo,0);N4(a.bo,a.i,a.k);b=a.X;d=a.d7;e=(b-d.e0.u.b|0)/2|0;b=a.d.iH-(TQ(d)/2|0)|0;d=a.d;f=b-d.d2|0;g=!a.b9?a.c8:(a.co+a.cv|0)+a.de|0;U7(a.d7,g+f|0,(e+Bc(d.y,a.X)|0)-a.bB|0);h=CK(a.d.h);i=UH(a);j=UG(a);a.B5=i;a.AP=j;k=!a.b9?a.i.a+a.c8|0:((a.i.a+a.co|0)+a.cv|0)+a.de|0;l=GC(a);m=a.d.lW;n=DF(a,40.0);o=i;while(o<=j&&o<h){p=Cg(a.d.h,o);q=ADC(a,o);YA(q,p,a.bo,a.X,l,
a.d.d2,o,o%a.e4.data.length|0);a.jQ=Bd(a.jQ,FS(p)+n|0);g=a.X;r=Bc(g,o)-a.bB|0;s=m===null?null:m.data[o];r=a.i.b+r|0;t=a.bo;u=a.d.d2;v=a.ex;d=ALM(Bl(a),o);if(d!==null){if(d.b==(-1))d.b=p.U;d.a=Hf(p,d.a,a.bo.cn,a.gb);d.b=Hf(p,d.b,a.bo.cn,a.gb);}w=a.d;QT(q,r,k,t,l,g,u,v,d,w.jb,w.iW,w.y!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.cc.d9;o=i;while(o<=j&&o<h&&a.ln){q=ADC(a,o);r=Bc(a.X,o)-a.bB|0;w=Bl(a);if(!DD(w))u=0;else{d=Ez(w);w=Gk(w);u=d.O<=o&&o<w.O?1:0;}d=a.ex;w=d.bw;t=w.tx;x=a.d.y==o&&m===null?1:0;a:{if(u)t=w.ll;else
{if(m!==null){c=m.data;if(o<c.length&&c[o]!==null){t=Km(d.ee,d,c[o].hq);break a;}}if(x)t=w.gK;}}AKd(q,a.bo,k,a.i.b+r|0,a.X,v,a.d.d2,l,t);o=o+1|0;}if(a.kv){y=Be(j+1|0,h);AL3(a,Bc(a.X,y)-a.bB|0,l);}AHV(a);if(a.me)AJa(a,i,j,h);if(a.ob&&f>=(( -TQ(a.d7)|0)/2|0)&&ALG(a.d7,a.k))ADh(a.d7,a.bo,a.i);AHH(a);AHc(a);Gq(a.bo);AHp(a,i,j);}
function AJa(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.lW;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.ex;h=Km(h.ee,h,g.hq);}else h=e!==null?a.ex.bw.eq:a.ex.bw.gK;if(!(a.d.y!=b&&g===null)){g=a.iw;i=a.b9;g.a=!i?(a.cv-a.co|0)-a.eo|0:((a.cv+a.de|0)+a.co|0)-a.eo|0;j=a.X;g.b=j;i=i?0:(a.c8-a.cv|0)+a.co|0;j=Bc(j,b)-a.bB|0;k=a.bo;l=a.i;Bv(k,l.a+i|0,l.b+j|0,g,h);}b=b+1|0;}}
function AHp(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.b;e=Be(d,Bc(CK(a.d.h),a.X)-a.bB|0);f=a.dk;g=a.bB;h=a.d;i=h.lW===null?h.y:(-1);j=a.bo;k=a.ex;N4(j,f.gT,f.fD);TM(f,j,b,d);ACR(f,b,j);AB8(f,g,e,k,j);l=k.lz;if(e<d){h=f.gT;Bv(j,h.a,h.b+e|0,BK(f.fD.a,d-e|0),l.lt);}if(b<=i&&i<=c){k=k.lz;c=i/20|0;h=f.c$;l=BI(h,c%h.p|0);h=f.gT;d=Bc(f.c$.p,f.hB);c=l.fB.b;b=((l.qO.b-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CT(l.cZ)|0)|0;c=i%l.em|0;e=l.cF;b=b+Bc(c,e)|0;if(b<( -e|0))b=b+d|0;Y(l.jz,l.fB.a,e);f=l.ki;c=i%l.em|0;d=l.cF;Cv(f,0.0,
Bc(c,d),l.fB.a,d);NO(l,j,b,h,k.yC,k.q2);}Gq(j);}
function UH(a){return Be(a.bB/a.X|0,CK(a.d.h)-1|0);}
function UG(a){return Be(((a.bB+Es(a)|0)-1|0)/a.X|0,CK(a.d.h)-1|0);}
function AT4(a,b){return (Bc(a.X,b)-a.bB|0)+a.i.b|0;}
function ATS(a){return a.i;}
function AW8(a){return a.k;}
function Ov(a){ZG(a.dk,a.c4.di,a.X,a.cc.cM);}
function ADC(a,b){var c;c=a.e4.data;return c[b%c.length|0];}
function V6(a,b){var c,d,e,f;c=Fh(0,M(a.fE),PW(b));if(!c)b=null;else{b=C(64);if(c<0){b=new BX;X(b);N(b);}if(c!=1){d=b.ci.data.length;if(d&&c){e=B6(Bc(d,c));d=0;f=0;while(f<c){RC(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=MX(e);}else b=A90;}}return b;}
function QD(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BQ(i);k=A9t(i).data;JT(j,c);c=0;l=k.length;if(c>l){f=new BX;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cz=o.cz+1|0;p=P(Hs,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AVw(h[m],n[m],k[m],b[m],f.bt,f.bx);m=m+1|0;}BA(o.i3,p);c=0;while(c<i){b=e.data;NN(o,h[c],n[c],k[c],b[c]);g.qR(C4(h[c]),b[c]);c=c+1|0;}}
function AMW(a){var b;if(DD(Bl(a)))Hc(a);else{b=a.d;Py(b.h,b.y,b.B);}Ip(a);EJ(a);return 1;}
function DP(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.e8)return 0;if(DD(Bl(a)))Hc(a);c=MH(ADp(b,C(175),C(21)),C(176),(-1));d=c.data;b=a.d;e=b.h;f=b.y;g=b.B;AFo(e,f,g,c);h=d.length;if(!h)b=A90;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B6(i+Bc(h-1|0,M(C(176)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(176))){m=l+1|0;c[l]=Q(C(176),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=MX(k);}Gj(e,f,g,0,b);b=a.d;f=b.y;m
=(f+h|0)-1|0;CU(a,m,m!=f?M(d[h-1|0]):b.B+M(d[0])|0,0);Gn(a);EJ(a);return 1;}
function Hc(a){var b,c,d;b=Ez(Bl(a));c=a.d.h;d=Bl(a);PG(c,d,VQ(c,d));CU(a,b.O,b.bf,0);Gn(a);EJ(a);}
function Gn(a){var b,c;(Bl(a)).dD=0;b=(Bl(a)).bS;c=a.d;Ci(b,c.y,c.B);b=(Bl(a)).bJ;c=a.d;Ci(b,c.y,c.B);}
function AL3(a,b,c){var d,e;d=a.k.b;if(b<d){e=a.cc.d9;e.b=d-b|0;d=a.b9;e.a=!d?c+a.eo|0:c+a.co|0;d=!d?(a.i.a+a.c8|0)-a.eo|0:(((a.i.a+a.cv|0)+a.de|0)+a.co|0)-a.eo|0;Bv(a.bo,d,a.i.b+b|0,e,a.ex.bw.eq);}}
function AHH(a){var b;b=a.b9?a.i.a+a.de|0:a.i.a+a.k.a|0;KL(a.f8,a.bB,a.i.b,Es(a),Pd(a),b,a.de);b=!a.b9?a.i.a+a.c8|0:((a.i.a+a.co|0)+a.cv|0)+a.de|0;Se(a.fM,a.d.d2,b,GC(a),a.jQ,a.i.b+Es(a)|0,a.de);}
function AHc(a){var b,c;b=AAw(a.f8);c=AAw(a.fM);if(!(!b&&!c)){Ca(a.bo,1);if(b)He(a.f8,a.bo);if(c)He(a.fM,a.bo);if(b)Hj(a.f8,a.bo);if(c)Hj(a.fM,a.bo);}}
function AHV(a){var b,c,d,e,f;b=a.iw;c=a.k;b.b=c.b;b.a=a.co;d=!a.b9?a.c8-a.cv|0:(c.a-IH(a)|0)-a.co|0;b=a.bo;c=a.i;Bv(b,c.a+d|0,c.b,a.iw,a.ex.bw.vA);b=a.iw;d=a.b9;b.a=!d?(a.cv-a.co|0)-a.eo|0:((a.cv+a.de|0)+a.co|0)-a.eo|0;e=d?0:(a.c8-a.cv|0)+a.co|0;c=a.bo;f=a.i;Bv(c,f.a+e|0,f.b,b,a.ex.bw.eq);}
function ACP(b,c){return Be(Bd(0,b),c);}
function GY(a){return a.cc.ct;}
function F4(a,b,c){var d,e,f;d=E6(b);e=new J;L(e);H(H(e,C(177)),d);$rt_globals.console.info($rt_ustr(K(e)));CU(a,0,0,0);f=new AD0;f.zY=a;f.zZ=b;f.zX=c;c=D0();BD(c);d=new ADZ;d.yt=c;V3(b,f,d);}
function JY(a,b,c,d,e){if(I$(a,e))return 1;if(c&&d)return 1;if(c)Gg(a,a.bB+((Bc(b,a.X)*12|0)/10|0)|0);else if(!d){IG(a,a.d.y+b|0,e);ACT(a);}return 1;}
function SX(a,b,c,d){var e,f,g;if(I$(a,d))return 1;e=Ge(a);if(!c)f=a.d.B+b|0;else if(b>=0)f=Hp(e,a.d.B);else{b=a.d.B;if(!b)f=(-1);else{c=KG(e,b);if(c>0&&e.eB.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eB.data[c-1|0];}}if(f>e.U){e=a.d;if((e.y+1|0)<CK(e.h))CU(a,a.d.y+1|0,0,d);}else if(f>=0)DG(a,f,d);else{e=a.d;b=e.y;if(b>0){g=(Cg(e.h,b-1|0)).U;CU(a,a.d.y-1|0,g,d);}}ADN(a);return 1;}
function I$(a,b){if(DD(Bl(a))&&!b){Gn(a);Ip(a);return 1;}if(!(b&&DD(Bl(a))))Gn(a);return 0;}
function CU(a,b,c,d){a.d.B=c;return IG(a,b,d);}
function IG(a,b,c){var d;d=a.d;d.y=Fh(0,b,CK(d.h)-1|0);return DG(a,a.d.B,c);}
function DG(a,b,c){var d,e;a.d.B=Fh(0,b,(Ge(a)).U);a.d.iH=a.bX===0.0?0:Hf(Ge(a),a.d.B,a.bo.cn,a.gb);Or(a);Ip(a);if(c)(Bl(a)).dD=1;d=Bl(a);e=a.d;Os(d,e.y,e.B);(Bl(a)).dD=0;return 1;}
function MZ(a,b){var c;c=AZh(Bl(a));DG(a,b,0);J7(Bl(a),c);}
function Ip(a){ACT(a);ADN(a);}
function ACT(a){var b,c,d,e,f;b=a.bB;c=b+Es(a)|0;d=a.d.y;e=a.X;d=Bc(d,e);f=d+e|0;if(d<(b+e|0))Gg(a,d-e|0);else if(f>(c-e|0))Gg(a,(f-Es(a)|0)+a.X|0);}
function ADN(a){var b,c,d,e,f;b=C5(a.cc.cl*30.0);c=a.d.d2;d=c+GC(a)|0;e=a.d.iH;f=e+b|0;if(e<(c+b|0))I3(a,e-b|0);else if(f>(d-b|0))I3(a,(f-GC(a)|0)+b|0);}
function Jd(a,b){var c,d;CU(a,b.bt,b.bx,0);c=Hp(Ge(a),a.d.B);Ci((Bl(a)).bJ,a.d.y,c);b=(Bl(a)).bS;d=a.d;Ci(b,d.y,d.B);Jj(a.d);}
function FJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.a;d=a.i;e=c-d.a|0;f=Fh(0,((b.b-d.b|0)+a.bB|0)/a.X|0,CK(a.d.h)-1|0);g=!a.b9?a.c8:(a.co+a.cv|0)+a.de|0;h=Bd(0,(e-g|0)+a.d.d2|0);b=Cg(a.d.h,f);d=a.bo.cn;i=a.gb;if(!(b.e5!==null&&!b.hm))NZ(b,d,i);j=b.e5;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.U;else{c=ACE(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.U;else{j=AA$(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.s.data[e].x)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i=
j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(A$6){b=new J;L(b);V(H(V(H(V(H(b,C(178)),e),C(179)),h),C(180)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return DY(f,k);}
function WG(a,b){var c,d;c=a.d;d=b.bt;c.y=d;c.B=b.bx;c.iH=Hf(Cg(c.h,d),a.d.B,a.bo.cn,a.gb);Or(a);}
function Ge(a){var b;b=a.d;return Cg(b.h,b.y);}
function Mf(a,b,c,d){var e,f;e=C5((a.X*4|0)*d/150.0);f=C5(c);if(e)Gg(a,a.bB+e|0);if(f)I3(a,a.d.d2+f|0);return 1;}
function TV(a,b,c){(Bl(a)).dD=0;return 1;}
function Xo(a,b,c){var d;if(!DA(a.cc,a))C2(a.cc,a);if(c)return null;d=Gi(a.f8,b.j,a.r0,1);if(d!==null)return d;d=Gi(a.fM,b.j,a.vX,0);if(d!==null)return d;JB(a);WG(a,FJ(a,b.j));Jj(a.d);if(!b.bQ&&!(Bl(a)).dD){b=(Bl(a)).bS;d=a.d;Ci(b,d.y,d.B);}(Bl(a)).dD=1;b=Bl(a);d=a.d;Os(b,d.y,d.B);b=new AEL;b.v7=a;return b;}
function PB(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cW){b=b.j;e=FJ(a,b);f=Jv(a.d.h,e.bt,e.bx);g=TE(a,f);h=OX(a.fI,Ej(a.d),HU(a.d));if(h!==null){i=a.d;c=e.bt;d=e.bx;e=new AEm;e.D7=a;e.D8=b;e.D6=g;h.uC(i,c,d,e,a.kt);}else{e=CB(a.d.h.dY,f);if(e!==null){Jd(a,e);c=1;}else{e=CB(a.d.h.dQ,f);if(e!==null&&!EP(e)){if(e.p!=1){AAs(a.lb,b,e,a,g);c=1;}else{Jd(a,BI(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FJ(a,b.j)).bt;g=Cg(a.d.h,c);c=G6(g,a.d.B);d=Hp(g,a.d.B);b=ON(g,c);if((d-1|0)==g.U){Ci((Bl(a)).bS,
a.d.y,PW(g));Ci((Bl(a)).bJ,a.d.y,g.U);}else{if(b!==null){b=b.x;j=0;c:{while(true){k=b.ci.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.B;if(c==j){c=G6(g,c-1|0);d=Hp(g,c);}else{if(d!=j){Rp(Bl(a),a.d.y);break b;}c=G6(g,d+1|0);d=Hp(g,c);}}}Ci((Bl(a)).bS,a.d.y,c);(Bl(a)).dD=1;CU(a,a.d.y,d,0);(Bl(a)).dD=0;JB(a);}}break a;case 3:break;default:break a;}Rp(Bl(a),a.d.y);AAV(a.d.ie);JB(a);}}return 1;}
function Yv(a,b){var c,d,e,f,g,h,i,j;c=a.cc.c2;if(Gp(a.f8,b.j,c))return 1;if(Gp(a.fM,b.j,c))return 1;d=a.dk;if(GB(b.j,d.gT,d.fD)&&G3(c)?1:0)return 1;e=b.j;f=!a.b9?a.c8:(a.cv+a.co|0)+a.de|0;a:{d=a.i;f=d.a+f|0;g=d.b;h=GC(a);i=Es(a);j=e.a;if(f<=j&&j<(f+h|0)){f=e.b;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return G3(c);if(b.cW){e=FJ(a,b.j);e.bx=G6(Cg(a.d.h,e.bt),e.bx);b=a.d.h;if(!HL(b.dY,e)&&!HL(b.dQ,e)?0:1)return D7(c,C(181));}return D7(c,C(182));}
function A5S(a,b){var c,d,e,f,g;c=b.cW;if(c&&b.bk==65){c=CK(a.d.h)-1|0;d=GV(a.d.h,c);Ci((Bl(a)).bS,0,0);Ci((Bl(a)).bJ,CK(a.d.h)-1|0,d);return 1;}if(c&&b.bk==80){MO(a.d);return 1;}if(!a.e8&&c&&b.bk==90){if(DD(Bl(a)))Gn(a);b=a.d.h;b.cz=b.cz+1|0;e=b.i3;d=e.p;if(!d)e=null;else{f=(EZ(e,d-1|0)).data;e=XP(b,f[0]);c=1;while(c<f.length){XP(b,f[c]);c=c+1|0;}}if(e!==null){CU(a,e.a,e.b,0);EJ(a);}return 1;}if(!c&&!b.dL){if(Bk(b.ep,C(183))){DP(a,C(184));DG(a,a.d.B-1|0,0);c=1;}else if(Bk(b.ep,C(185))){DP(a,C(186));DG(a,a.d.B
-1|0,0);c=1;}else if(Bk(b.ep,C(36))){DP(a,C(22));DG(a,a.d.B-1|0,0);c=1;}else if(Bk(b.ep,C(187))){DP(a,C(188));DG(a,a.d.B-1|0,0);c=1;}else if(Bk(b.ep,C(189))){DP(a,C(190));DG(a,a.d.B-1|0,0);c=1;}else if(!Bk(b.ep,C(191)))c=0;else{DP(a,C(192));DG(a,a.d.B-1|0,0);c=1;}}else c=0;if(c)return 1;a:{if(!(!b.dL&&!b.cW)){d=b.bk;if(d>=48&&d<=57){c=d-48|0;e=a.oR.data[c];if(e!==null)e.e();c=1;break a;}}c=0;}if(c)return 1;b:{switch(b.bk){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:c
=0;break b;}c=1;}if(c)return 1;if(AKZ(a,b))return 1;if(AHE(a,b))return 1;c=b.cW;if(c&&b.bk==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}d=b.bk;g=112<=d&&d<=123?1:0;if(!g&&d!=27){if(!c&&!b.dL&&!b.kX)return M(b.ep)>0&&DP(a,b.ep)?1:0;return 0;}return 0;}
function AB9(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=UH(a);d=UG(a);if(b.fl!=3&&b.gW==3){e=Mj(b.pW);f=new XL;f.zK=c;f.zJ=d;g=new R$;g.s7=f;while(!g.nd&&Ow(e,g)){}if(!g.nd&&Bk(C(193),Ej(b))){c=Bd(0,c-100|0);d=Be(CK(b.h)-1|0,d+100|0);BA(b.pW,BK(c,d));h=BQ(3);i=h.data;i[0]=FR(b.h,c);e=b.h;j=0;d=Be(d+1|0,e.E.data.length);k=0;while(k<d){j=j+GV(e,k)|0;if(k!=(e.E.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Bx=EI();e=b.fj;l=new ADO;l.sU=b;i=P(B,3);m=i.data;m[0]=Fn(b.h);m[1]=h;b=b.h.dn;g=BO();ACn(b,b.dl,
g);h=BQ(3*g.p|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BI(g,o);d=k+1|0;n[k]=b.b5;q=d+1|0;n[d]=b.b3;k=q+1|0;n[q]=b.f3;o=o+1|0;}m[2]=h;CO(e,l,C(194),i);}}}
function WE(a){MO(a.d);}
function AAN(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.f2){c=Fe(b);d=new J;L(d);H(H(d,c),C(195));$rt_globals.console.info($rt_ustr(K(d)));}c=Ej(b);if(c!==null&&!Bk(C(182),c)){d=b.h.dn;e=Rk(d,d.dl);if(e===null){OP(b);K6(b.h);}else{f=D6([Dq(e),Dh(e),e.b2.f3]);g=Fn(b.h);h=BQ(1);h.data[0]=AJz(c);d=b.h.fb;if(d.fN===null){i=BQ(0);j=B6(0);}else{c=AWR(AZa(e.cs,d.fk),e);X5(c);i=c.pe;j=c.ng;}k=b.h.cz;c=b.fj;d=new Pl;d.BC=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BQ(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CO(c,d,C(196),l);}}
else K6(b.h);}
function Ju(a,b,c){var d,e,f,g,h,i;if(c&&a.e8)return 0;d=Ez(Bl(a));e=d.O;if(DD(Bl(a))){f=a.d.h;g=Bl(a);h=VQ(f,g);if(c)PG(f,g,h);if(c){CU(a,d.O,d.bf,0);Gn(a);EJ(a);}}else{h=FH(FZ(a.d.h.E.data[e]),C(176));i=Be(CK(a.d.h)-1|0,e);Ci((Bl(a)).bJ,i,0);if(e>=(CK(a.d.h)-1|0))Ci((Bl(a)).bJ,i,GV(a.d.h,i));else Ci((Bl(a)).bS,i+1|0,0);if(c)Hc(a);else CU(a,e,0,0);}b.g(h);return 1;}
function AWh(a){var b;b=new Wo;b.vw=a;return b;}
function AHE(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.e8)return 0;a:{switch(b.bk){case 8:if(DD(Bl(a))){Hc(a);c=1;}else{b=a.d;d=b.B;if(!d&&!b.y)c=1;else{if(d){e=b.y;c=d-1|0;Py(b.h,e,c);}else{e=b.y-1|0;c=GV(b.h,e);b=a.d.h;L3(b,e);Gj(b,e,GV(b,e),1,C(176));}EJ(a);c=CU(a,e,c,0);}}break a;case 9:if(!b.bQ){if(!DD(Bl(a)))DP(a,a.fE);else{f=Ez(Bl(a));g=Gk(Bl(a));c=g.O;d=f.O;e=(c-d|0)+1|0;h=BQ(e);i=h.data;j=P(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fE;d=d+1|0;e=l;}b=new ADU;m=a.d;ALj(b,m.y,m.B);m=new T8;m.vU
=a;QD(a,h,0,0,j,b,m);f.bf=f.bf+M(a.fE)|0;g.bf=g.bf+M(a.fE)|0;MZ(a,a.d.B+M(a.fE)|0);EJ(a);}c=1;}else b:{if(!DD(Bl(a))){b=a.d;f=Cg(b.h,b.y);if(f.s.data.length>0){g=V6(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.y;b=DY(e,m.B);n.cz=n.cz+1|0;o=n.i3;h=P(Hs,1);h.data[0]=AVw(e,0,1,g,b.bt,b.bx);BA(o,h);NN(n,e,0,1,g);H4(f,0,M(g));MZ(a,a.d.B-M(g)|0);}}else{b=Ez(Bl(a));f=Gk(Bl(a));c=f.O;p=b.O;c=(c-p|0)+1|0;h=BQ(c);k=h.data;j=P(BC,c);q=j.data;g=a.d;e=g.B;l=g.y;c=0;while(p<=f.O){g=Cg(a.d.h,p);if(g.s.data.length>0){g=V6(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JE(h,c);j=C1(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.O)b.bf=Bd(0,b.bf-M(g)|0);if(p==f.O){f.bf=Bd(0,f.bf-M(g)|0);MZ(a,a.d.B-M(g)|0);}d=d+1|0;}b=DY(l,e);f=new U3;f.ud=a;QD(a,h,0,1,j,b,f);}EJ(a);c=1;}break a;case 13:if(DD(Bl(a)))Hc(a);b=a.d;Fd(Cg(b.h,b.y));b=a.d;AMo(b.h,b.y,b.B);EJ(a);c=CU(a,a.d.y+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AMW(a);}return c;}
function AKZ(a,b){var c,d,e,f;a:{switch(b.bk){case 33:c=b.cW?IG(a,Iq(a.bB,a.X),b.bQ):JY(a,2-VX(Es(a),a.X)|0,0,b.dL,b.bQ);break a;case 34:c=!b.cW?JY(a,VX(Es(a),a.X)-2|0,0,b.dL,b.bQ):IG(a,((a.bB+Es(a)|0)/a.X|0)-1|0,b.bQ);break a;case 35:if(!I$(a,b.bQ)&&!DG(a,(Ge(a)).U,b.bQ)){c=0;break a;}c=1;break a;case 36:if(!I$(a,b.bQ)&&!DG(a,0,b.bQ)){c=0;break a;}c=1;break a;case 37:c=b.cW;if(c&&b.dL){JB(a);d=a.d.ie;e=d.dT;if(e<=0)d=null;else{f=d.fz.data;c=e-1|0;d.dT=c;d=f[c];}if(d===null)c=1;else{CU(a,Mv(d),Lf(d),0);J7(Bl(a),
d.pa);c=1;}break a;}c=SX(a,(-1),c,b.bQ);break a;case 38:c=JY(a,(-1),b.cW,b.dL,b.bQ);break a;case 39:c=b.cW;if(c&&b.dL){d=a.d.ie;e=d.dT;if(e==(d.fv-1|0))d=null;else{f=d.fz.data;c=e+1|0;d.dT=c;d=f[c];}if(d===null)c=1;else{CU(a,Mv(d),Lf(d),0);J7(Bl(a),d.pa);c=1;}break a;}c=SX(a,1,c,b.bQ);break a;case 40:c=JY(a,1,b.cW,b.dL,b.bQ);break a;default:}c=0;}if(c&&b.bQ){b=(Bl(a)).bJ;d=a.d;Ci(b,d.y,d.B);}if(c)Jj(a.d);return c;}
function JB(a){var b,c,d,e,f,g,h;b=a.d;c=b.ie;d=c.dT;c=d<0?null:c.fz.data[d];if(c!==null&&b.y==Mv(c)&&a.d.B==Lf(c))return;c=a.d;e=c.ie;b=new Og;d=c.y;f=c.B;c=Bl(a);b.p6=DY(d,f);g=AZh(c);b.pa=g;g.dD=0;f=e.dT;h=e.fv;if(f==(h-1|0))ADD(e,b);else{d=f+1|0;while(d<h){AAV(e);d=d+1|0;}ADD(e,b);}e.dT=e.dT+1|0;}
function EJ(a){a.d.h.A9=Nl(GY(a));}
function Ig(a,b){var c,d,e,f;a.Dq=null;Ma(a.dk,null);c=a.d;a.d=b;Ls(c,null,null);Ls(b,a,GY(a));d=(B5(a.fI.v$)).data;e=d.length;f=0;while(f<e){d[f].qR(c,b);f=f+1|0;}a.bB=G1(b.m4*a.X);}
function TE(a,b){var c;c=Mq(a.d.h,b);if(c===null)return C(21);return c.x;}
function HR(a,b){var c,d,e,f,g;a.d.lW=b;if(b===null){Bf(Bj(),C(197));Ma(a.dk,null);}else{b=b.data;c=DS(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.hq<<24>>24;e=e+1|0;}Ma(a.dk,c);}}
function Jg(a,b){a.d.q1=b;}
function Bl(a){return a.d.r5;}
function Mo(a){var b;b=a.iK;if(b!==null)b.g(a);}
function AZz(a){var b,c,d;b=a.d.fw;c=AF_(a);if(b!==null){b=b.f7;d=new J;L(d);H(H(H(d,c),C(198)),b);c=K(d);}return c;}
function AJA(){var a=this;B.call(a);a.l2=null;a.oy=null;a.hd=null;}
function AIN(a,b){var c=new AJA();AZq(c,a,b);return c;}
function AZq(a,b,c){var d,e;a.l2=b;a.oy=c;d=null;e=new VL;e.s9=a;b.pY(d,e);b=null;d=new VM;d.r$=a;c.pY(b,d);}
function ZC(a,b,c){var d,e,f,g,h,i,j;d=a.hd;if(d!==null&&d.iG!==null){e=b!==a.l2?0:1;f=b.lD();g=(b.kR()+f|0)/2|0;h=g-f|0;d=a.hd;d=d.iG.data[G7(d,g,e)];i=g-(!e?d.il:d.im)|0;j= -(b.hV(f)-(b.lf()).b|0)|0;c.qM(Bc(((!e?d.im:d.il)+i|0)-h|0,c.p5())+j|0);return;}}
function UQ(){B.call(this);this.Cu=null;}
function AN3(a,b){W9(a.Cu,b);}
function UR(){B.call(this);this.z2=null;}
function A4P(a,b){W9(a.z2,b);}
function US(){B.call(this);this.x1=null;}
function ARW(a,b){return AIG(a.x1,b);}
function GJ(){var a=this;B.call(a);a.pf=null;a.tb=null;a.su=null;}
function A$7(a,b){var c=new GJ();G5(c,a,b);return c;}
function G5(a,b,c){var d;d=null;a.pf=b.bH;a.tb=d;a.su=c;}
function AQl(a,b){var c,d;if(b.cW&&b.bk==79){c=a.tb;if(c!==null&&b.bQ)Gs(a.pf,c);else FY(a.pf,a.su);d=1;}else d=0;return d;}
function UO(){B.call(this);this.vV=null;}
function ASN(a,b){var c,d,e;c=a.vV;d=DA(c.q,c.H)?c.H:!DA(c.q,c.L)?null:c.L;if(d!==null){e=new Sq;e.y3=c;e.y1=d;e.y2=b;F4(d,b,e);c.lu=null;c.mV.hd=null;c.fU.ez=null;}}
function UP(){B.call(this);this.tA=null;}
function A5m(a,b){b=b;return AK0(a.tA,b);}
var CM=G(0);
function AEN(){var a=this;B.call(a);a.Y=null;a.bI=null;a.ei=null;}
function Fv(a,b,c,d,e){var f,g;f=Z6(a.Y);HF(f,b,c);b=a.Y;c=b.cB;g=new AD5;g.xT=b;g.xS=c;f.km=g;S1(f,d,e);HV(a,f);}
function HV(a,b){var c;c=a.ei;if(c!==b)a.ei=BY(c,b);}
function DR(a,b){var c;c=new ADQ;c.rw=a;c.ry=b;return c;}
function NF(a,b){var c;c=new AE1;c.zg=a;c.zh=b;return c;}
function DZ(a){var b;b=a.ei;if(b!==null){MP(b);HV(a,null);}}
function DV(a,b){var c,d,e,f;c=a.bI;if(c.cK>0)Ln(E5(c,0));c=a.bI;d=c.cK;e=c.c_;if(d==e.data.length)c.c_=C1(e,d+4|0);d=c.cK;f=d;while(0<f){e=c.c_.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.c_.data[0]=b;c.cK=d+1|0;c.gq=null;K4(b);return b;}
function IJ(a,b){if(OZ(a)!==b?0:1)Ln(b);LP(a.bI,b);b=a.bI;if(b.cK>0)K4(E5(b,0));}
function J_(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B5(a.bI)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.Y.bM;d.Z.dH(e);f=d.S;g=d.gs.jy;if(!SC(f)){if(!OH(f)&&!(!f.eQ&&f.d8!==null)){f.eQ=0;ADw(f);h=f.eF;i=(h.ew+h.eP+5.0)/10.0;j=Cw(f.go,f.k9);h=e.cn;k=f.eF;l=f.j3;m=i*2.0;Cr(h,k);n=j+LQ(h,l,m)|0;f.iB=n;n=Fh(0,n,f.k.a);if(n){h=Eb(e,n,f.k.b,f.go.cM);Cr(h,f.eF);k=f.j3;m=j;i=m+i;l=f.eF;o=l.ew;B1(h,k,i,m+o-(o+l.eP)/16.0);k=f.d8;if(k===null){k=C3(e);f.d8=k;}CS(k,h);EK(h);Cv(f.m6,0.0,0.0,BU(f.d8),CT(f.d8));}}h=g.mp;k
=f.d8;if(k===null)Rl(f,e,0,f.k.a,h);else{j=BU(k);g=g.oE;k=f.i;n=k.a;p=k.b;k=f.d8;DQ(e,n,p,k.e1,f.m6,k,g,h,f.go.cM);n=f.k.a;if(j<n)Rl(f,e,j,n-j|0,h);}}l=d.dp;if(l!==null){q=d.bg;h=d.S;k=d.gs.jy;if(l.jr!==null){if(l.dm===null)AHN(l,q);n=Cw(q,2.0);j=Bd(0,((h.k.b-CT(l.dm)|0)/2|0)-n|0);l.gt.a=(((h.i.a+h.k.a|0)-j|0)-BU(l.dm)|0)-n|0;f=l.gt;r=h.i.b+j|0;p=n/2|0;f.b=r-p|0;f=l.k2;j=BU(l.dm);r=n*2|0;Y(f,j+r|0,CT(l.dm)+r|0);f=q.bM;g=l.gt;Bv(f,g.a,g.b,l.k2,!l.l_?k.mp:k.j1);Cv(q.mP,0.0,0.0,BU(l.dm),CT(l.dm));f=q.bM;g=l.gt;n
=g.a+n|0;p=g.b+p|0;g=l.dm;DQ(f,n,p,g.e1,q.mP,g,k.oE,!l.l_?k.mp:k.j1,0);}}Ca(e,1);j=Cw(d.bg,2.0);n=SC(d.S);f=d.bg;g=f.d9;f=f.qB;p=n?0:d.S.k.b;h=d.Z.k;Y(f,h.a,h.b+p|0);AKq(e,f,!n?d.S.i:d.Z.i,d.gs.jy.j1, -j|0,g);f=d.Z;ALL(e,f.k,f.i,j,p,Zg(d.gs.lT,d.bg.cl),d.gs.lT.ot,g);c=c+(-1)|0;}f=a.ei;if(f!==null)AFJ(f);}
function GT(a,b){var c,d,e,f;c=a.Y;if(c.cM==b)d=0;else{c.cM=b;JR(c.ct);d=1;}if(d){c=a.ei;if(c!==null){c=B9(c.cm);while(Cb(c)){OC(Cc(c));}}e=(B5(a.bI)).data;b=e.length;f=0;while(f<b){c=e[f];c.S.eQ=1;c.Z.kz();f=f+1|0;}}return d;}
function AXE(a,b){var c,d,e,f,g,h,i,j,k;c=a.ei;if(c!==null){d=0;e=c.cm.p-1|0;a:{while(e>=0){d=Oi(BI(c.cm,e),b.j,c.cY.c2);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B5(a.bI)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(B3(h.S,c)){i=h.dp;if(i!==null)i.l_=T9(i,c);e=D7(h.bg.c2,null);}else{i=h.dp;if(i!==null)i.l_=0;e=Cw(h.bg,7.0);j=Cw(h.bg,25.0);if(Nu(h,c.a,e)){k=Yl(h,c.a,j);if(NE(h,c.b,e)){e=D7(h.bg.c2,Mw(k,C(199)));break b;}if(K$(h,c.b,e)){e=D7(h.bg.c2,Mw( -k|0,C(199)));break b;}}if(OK(h,c.b,e)){j=AEB(h,
c.b,j);if(O7(h,c.a,e)){e=D7(h.bg.c2,Mw(j,C(200)));break b;}if(M_(h,c.a,e)){e=D7(h.bg.c2,Mw( -j|0,C(200)));break b;}}e=0;}}c:{d:{if(!e){if(!B3(h.Z,b.j))break d;if(!h.Z.bZ(b)&&!D7(h.bg.c2,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AOP(a,b,c,d){var e,f,g,h,i,j;e=a.ei;if(e!==null){f=0;g=e.cm.p-1|0;a:{while(g>=0){f=OF(BI(e.cm,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B5(a.bI)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B3(i.S,b.j)&&!Ql(i,b.j)){if(!MF(i,b))break c;if(!i.Z.cL(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function AQ5(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=a.ei;if(d!==null){e=null;f=d.cm.p-1|0;a:{while(f>=0){g=BI(d.cm,f);h=b.j;i=Fp(g.cx,h);if(!i&&!LB(g.cx)){g=g.le;if(g!==null)g.e();}e=!i?null:A$8;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}j=B5(a.bI);k=0;while(true){l=j.data;if(k>=l.length)return null;b:{g=l[k];d=b.j;if(!c){c:{m=Cw(g.bg,7.0);f=Cw(g.bg,25.0);if(Nu(g,d.a,m)){i=Yl(g,d.a,f);if(NE(g,d.b,m)){h=Kq(g,d,i,(-1));break c;}if(K$(g,d.b,m)){h=Kq(g,d,i,1);break c;}}if(OK(g,d.b,m)){f=AEB(g,d.b,f);if
(O7(g,d.a,m)){h=Kq(g,d,(-1),f);break c;}if(M_(g,d.a,m)){h=Kq(g,d,1,f);break c;}}h=null;}if(h!==null)break b;if(B3(g.S,d)){h=g.dp;if(h!==null&&T9(h,d)){g.dp.jr.e();h=A$8;break b;}h=g.Z.i;f=h.a;i=d.a;f=f-i|0;n=h.b;m=d.b;n=n-m|0;d=g.S.i;i=d.a-i|0;m=d.b-m|0;d=new Bh;h=new TS;h.s5=g;h.s6=i;h.s0=m;h.s2=d;h.s3=f;h.s4=n;break b;}}h=null;}f=h===null&&!MF(g,b)?0:1;i=!c&&g!==OZ(a)&&f?1:0;if(i){d=a.bI;n=0;l=d.c_.data;m=l.length;d:{while(true){if(n>=m){n=(-1);break d;}if(g===l[n])break;n=n+1|0;}}if(n>0){Ln(E5(d,0));d=a.bI;m
=d.cK;if(m<=n){b=new OL;Bp(b,Ih(n));N(b);}if(n){l=d.c_;o=l.data;e=o[n];while(n>0){o[n]=o[n-1|0];n=n+(-1)|0;}o[0]=e;o=d.gq;if(o!==null)Da(l,0,o,0,m);}K4(E5(a.bI,0));}}if(h===null&&f)h=g.Z.cu(b,c);if(h!==null)break;if(i)break;k=k+1|0;}return h;}
function A5L(a,b,c){var d,e,f,g,h;d=a.ei;if(d!==null&&JP(d))return 1;e=(B5(a.bI)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B3(d.S,b.j)){if(!MF(d,b))break b;if(!d.Z.dM(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A1k(a,b,c){var d,e,f,g,h;d=(B5(a.bI)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.Z;h.dK(h.i,h.k,c);h=g.S;if(h.hP!==null){h.eF=null;h.iB=0;h.eQ=1;}IK(g);h=g.dp;if(h!==null)Oj(h);f=f+1|0;}}
function OZ(a){var b;b=a.bI;return b.cK<=0?null:E5(b,0);}
function Ut(){var a=this;B.call(a);a.bM=null;a.ct=null;a.c2=null;a.bT=null;a.cl=0.0;a.cM=0;a.cB=null;a.dh=null;a.d9=null;a.qB=null;a.mP=null;a.Dm=null;}
function Lb(a){var b;b=a.cB;if(b!==null)b.vt();}
function Lq(a){var b;b=a.cB;if(b!==null)b.xk();}
function Nn(a,b){var c;c=a.ct.eA!==(EG()).activeElement?0:1;if(c)Lq(a);a.cB=b;if(c)Lb(a);}
function C2(a,b){Lq(a);a.cB=b;Lb(a);}
function ACC(a,b){if(a.cB===b)a.cB=null;}
function DA(a,b){return b!==a.cB?0:1;}
function KH(a){return a.bM.cn;}
function Fx(a,b){return GS(a.bM,b.iq,b.he*a.cl,b.ks,0);}
function Cw(a,b){return Cj(b,a.cl);}
function KT(a,b){var c;c=a.bM;if(!a.cM)c.qq=b;else c.oN=b;JR(a.ct);}
function A4H(a,b,c){var d;d=a.cB;return d!==null&&d.f6(b,c)?1:0;}
function A2A(a){var b;b=a.cB;return b===null?null:b.At();}
function Xf(){B.call(this);this.wU=null;}
function A5F(a,b,c,d){var e,f,g,h;e=(B5(a.wU.bI)).data;f=e.length;g=0;a:{while(g<f){if(e[g].Z.dJ(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function Xe(){B.call(this);this.ug=null;}
function AOR(a,b){var c,d,e,f;b=b;c=a.ug;b=b.j;d=0;e=c.bI.cK;a:{while(d<e){f=E5(c.bI,d);if(!B3(f.S,b)&&!Ql(f,b)&&!ADv(f,b)?0:1){c=E5(c.bI,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.xJ;if(c!==null&&AJP(c.xv,b)?1:0){d=1;break b;}}d=0;}return d;}
function AGu(){var a=this;B.call(a);a.e0=null;a.pu=0.0;a.iS=0.0;a.hy=0;}
function A0B(){var a=new AGu();AT2(a);return a;}
function AT2(a){var b;b=T0(0,0,2,20);a.e0=b;a.pu=0.5;a.iS=0.0;IX(187,187,187,255,b.bc);}
function TQ(a){return a.e0.u.a;}
function ACf(a,b){var c,d;a:{c=a.hy;if(b>a.iS)while(true){d=a.iS+a.pu;a.iS=d;a.hy=a.hy?0:1;if(b>d)continue;else break a;}}return a.hy==c?0:1;}
function U7(a,b,c){Y(a.e0.w,b,c);}
function ZB(a,b){a.iS=b+a.pu*1.25;a.hy=1;}
function ALG(a,b){return AF8(a.e0.w,0,0,b);}
function ADh(a,b,c){if(a.hy)AAP(a.e0,b,c.a,c.b);}
function AE9(){var a=this;B.call(a);a.fw=null;a.h=null;a.qp=null;a.r5=null;a.ie=null;a.jP=null;a.fj=null;a.lW=null;a.y=0;a.B=0;a.iH=0;a.jb=null;a.iW=null;a.pW=null;a.fl=0;a.gW=0;a.hb=0;a.jm=FV;a.Bx=FV;a.B_=FV;a.q1=0;a.FH=0;a.d2=0;a.m4=0.0;a.f2=0;}
function A8h(a,b,c){var d=new AE9();AMH(d,a,b,c);return d;}
function AP1(a,b){var c=new AE9();ATq(c,a,b);return c;}
function A8o(a,b,c){var d=new AE9();WA(d,a,b,c);return d;}
function AMH(a,b,c,d){WA(a,(AJ4(b)).kE,c,d);}
function ATq(a,b,c){WA(a,b,null,c);}
function WA(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.r5=AOi();f=new Ur;f.fz=P(Og,16);f.fv=0;f.dT=(-1);a.ie=f;a.jb=null;a.iW=BO();a.pW=BO();a.fl=1;a.gW=1;a.hb=1;a.d2=0;a.m4=0.0;a.f2=0;a.fw=d;a.qp=c;c=new AAQ;g=e.length;b=P(DO,Bd(1,g));if(!g)b.data[0]=YO(C(21));h=b.data;i=0;while(i<g){h[i]=YO(e[i]);i=i+1|0;}d=new Zn;f=new Od;Ru(f);d.fk=f;c.fb=d;c.dY=Kd();c.dQ=Kd();c.i3=BO();if(!h.length){c=new BX;X(c);N(c);}c.E=b;j=ADt(c);c.dn=AIe(AV3(Lg(0,j,0),null,null));a.h=c;}
function Ej(a){var b;b=a.qp;if(b===null){b=a.fw;b=b===null?C(182):AJg(b.f7);}return b;}
function HU(a){var b;b=a.fw;return b===null?null:b.kP;}
function MQ(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.gW=3;a.hb=3;a.fl=3;c=CV(b[0]);d=E2(b[1]);CV(b[2]);if(b.length<5)Oy(a.h,c,d);else{e=CV(b[3]);f=e.data;g=E2(b[4]);Yw(a.h,c,d,e,g,0);UC(a,JE(e,f.length),OQ(g));}if(a.f2){h=Fe(a);i=J9(EI(),a.jm);j=new J;L(j);H(H3(H(H(j,h),C(201)),i),C(202));$rt_globals.console.info($rt_ustr(K(j)));}h=a.jP;if(h!==null)Mo(h);}
function Jj(a){var b;Tn(a,DY(a.y,a.B),Jv(a.h,a.y,a.B));if(!(a.jb!==null&&!EP(a.iW))){b=a.B;if(b>0)Tn(a,DY(a.y,b-1|0),Jv(a.h,a.y,a.B-1|0));}}
function Tn(a,b,c){var d,e,f,g,h,i,j,k;a.jb=null;IO(a.iW);d=CB(a.h.dY,c);if(d!==null)c=d;a:{e=CB(a.h.dQ,c);if(e!==null){a.jb=Mq(a.h,c);c=B9(e);while(true){if(!Cb(c))break a;f=Cc(c);BA(a.iW,Mq(a.h,f));}}}c=a.jP;if(c!==null){g=b.bt;h=b.bx;b=c.fI;f=Ej(c.d);e=HU(c.d);i=(B5(b.wx)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Cp(f,e)){b=b.E3;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new Pr;e.Eb=c;e.Ec=f;e.D_=g;e.Ea=h;b.uC(f,g,h,e,c.kt);}}}
function UC(a,b,c){var d,e,f,g,h;if(a.fj!==null){a.B_=EI();d=a.h.cz;e=a.fj;f=new Zh;f.Ag=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BQ(1);b.data[0]=d;h[2]=b;CO(e,f,C(203),g);}}
function Ls(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.jP=b;a.fj=c;if(c===null){d=a.h.E.data;e=d.length;f=0;while(f<e){Ub(d[f]);f=f+1|0;}}else if(a.fl==1){a.jm=EI();b=Ej(a);if(BR(b,C(182))){a.gW=3;a.hb=3;a.fl=3;b=a.jP;if(b!==null)Mo(b);}else{e=BR(b,C(193));f=BR(b,C(204));d=Fn(a.h);g=d.data.length;h=!e?5120:10240;i=AJz(b);if(f)Ka(a,d,i);else if(g<=h)Ka(a,d,i);else if(!e){Wr(a,OQ(d),i);Ka(a,d,i);}else{Wr(a,OQ(d),i);j=OQ(d);k=a.fj;c=new RM;c.Ai=a;l=P(B,2);m=l.data;m[0]=j;j=BQ(1);j.data[0]=i;m[1]=j;CO(k,c,C(205),l);a.gW=
2;Ka(a,d,i);}}}}
function Wr(a,b,c){var d,e;d=a.fj;e=new V0;e.AB=a;CO(d,e,C(206),I(B,[b,D6([c,250])]));a.hb=2;}
function Ka(a,b,c){var d,e,f,g;d=a.fj;e=new X6;e.yU=a;f=P(B,2);g=f.data;g[0]=b;b=BQ(1);b.data[0]=c;g[1]=b;CO(d,e,C(207),f);a.fl=2;}
function Fe(a){var b;b=a.fw;return b===null?C(21):ADz(b);}
function MO(a){var b,c,d,e,f;if(a.f2){b=Fe(a);c=new J;L(c);H(H(c,b),C(208));$rt_globals.console.info($rt_ustr(K(c)));}b=Ej(a);if(b===null)d=null;else{a:{e=(-1);switch(Kk(b)){case -1655966961:if(!Bk(b,C(204)))break a;e=3;break a;case 3401:if(!Bk(b,C(209)))break a;e=2;break a;case 98723:if(!Bk(b,C(210)))break a;e=1;break a;case 3254818:if(!Bk(b,C(193)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(211);break b;case 2:d=C(212);break b;case 3:d=C(213);break b;default:d=null;break b;}d=C(214);}}if
(d===null)Mo(a.jP);else{a.jm=EI();b=a.fj;c=new ACv;c.v_=a;f=P(B,1);f.data[0]=Fn(a.h);CO(b,c,d,f);}}
function OP(a){var b;b=AWR(a.h.fb,null);X5(b);UC(a,b.pe,b.ng);}
function AEZ(){var a=this;B.call(a);a.zr=null;a.C5=null;a.q_=null;a.wx=null;a.v$=null;a.BV=null;}
function OX(a,b,c){return Sn(a,B5(a.zr),b,c);}
function AAc(a,b,c){return Sn(a,B5(a.C5),b,c);}
function Sn(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Cp(c,d))return g.FT;f=f+1|0;}return null;}
function ACX(a,b,c){var d,e,f,g;d=(B5(a.q_)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Cp(b,c))return g.FO;f=f+1|0;}return null;}
function FF(){var a=this;B.call(a);a.ch=0;a.dg=null;a.cQ=null;a.eL=null;a.dS=0;}
var A$9=0;var A$5=0;function YA(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cQ;j=i===b&&!i.jC?0:1;if(j){a.cQ=b;NZ(b,c.cn,a.dg.hn);}k=Iq(Be(FS(b),e+2048|0),1024);l=a.eL;m=l.data.length;n=k<=m?0:1;if(n){a.eL=C1(l,k);while(m<k){a.eL.data[m]=C3(c);m=m+1|0;}}o=a.dg.hW;if(!(!j&&!n)){if(A$9){l=b.gF;$rt_globals.console.info("fMeasure"+l.data);A$9=0;}if(!A$5){c=o.dj;b="alphabetic";c.textBaseline=b;}else{b=o.dj;c="top";b.textBaseline=c;}a.dS=f/1024|0;p=0;while(p<k){KC(a,o,d,a.dS+p|0);p=p+1|0;}a.cQ.jC=0;}e=a.eL.data.length;if
(e&&f<=FS(a.cQ)){f=f/1024|0;g=a.dS;if(f!=g){if(Xk(f-g|0)>=e){g=0;while(g<e){KC(a,o,d,f+g|0);g=g+1|0;}a.dS=f;}else{while(true){g=a.dS;if(g>=f)break;KC(a,o,d,g+e|0);a.dS=a.dS+1|0;}while(true){g=a.dS;if(g<=f)break;KC(a,o,d,g-1|0);a.dS=a.dS-1|0;}}}}}
function KC(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Zf(a,e);g=a.cQ;if(f>=g.s.data.length)return;h=g.gF;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.ch;l=a.dg.hn;E3(b);a:{while(true){g=a.cQ;if(f>=g.s.data.length)break a;m=l.data;g=Kf(g,f);n=m[K1(g)];o=!A$5?L$(n,c):NJ(n,c);m=h.data;Cr(b,n);B1(b,g.x,k,o);k=m[f]-j+a.ch;if(k>1024.0)break;f=f+1|0;}}h=a.eL.data;CS(h[d%h.length|0],b);}
function QT(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.eL.data.length;if(!o)return;if(g>FS(a.cQ))return;p=a.cQ;q=p.e5;r=p.s;s=g/1024|0;t=Zf(a,g);u= -a.ch|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.eL.data[s%o|0];bb=w[t];bc=z[t]+a.ch|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Be(bf,bc)-g|0;if(bd&&y)bg=bg+a.ch|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.ch:2*a.ch|0;bj=
i.a;bk=i.b;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.ch:2*a.ch|0;if(g>=i.a&&(g+bg|0)<=(i.b+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bw.gK;if(bb===j)bo=h.bw.r1;if(k!==null){p=B9(k);d:{while(Cb(p)){if(BR(Cc(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bw.xj;}if(n!==null){w=n.n7;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AFs(h.ee,h,bi,n.hq);}if(!bn&&!bl){i.b=Be(i.b,FS(a.cQ));AHn(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.a?bg:(Be(bc,bf)-i.a|0)-(!y?a.ch:0)|0,(g
+bg|0)<=(i.b+(!y?a.ch:2*a.ch|0)|0)?0:(Be(bc,bf)-i.b|0)-(!y?a.ch:0)|0,g-x|0,bo);}else{bp=h.j9.data[bb.b4];p=bn?h.bw.ll:TX(bo,XT(h,bp.nc));Cv(a.dg.jO,g-x|0,0.0,bg,v);Y(a.dg.iy,bg,f);Hv(a.dg,d,ba,u+c|0,b,bp.hl,p);}if((bb.bG&12)>>2>0){bc=u+c|0;Ca(d,1);p=a.dg;bq=p.n9;bq.a=bg;x=b+p.u4|0;bk=x-p.CN|0;br=p.rj;bs=x+br;ba=p.hH;UU();MC(d,bc,bk,bq,br,bs,ba,A$$.lw.hl);Ca(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AHn(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.j9.data[h.b4];o=n.hl;p=TX(m,XT(f,n.nc));q=f.bw.ll;f=a.dg;r=f.jO;s=f.iy;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);Y(s,u,e);Hv(a.dg,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.dg;c=c+i|0;Hv(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);Y(s,i,e);Hv(a.dg,b,g,c-j|0,d,o,q);}
function TX(b,c){if(b!==null)c=b;return c;}
function Zf(a,b){var c,d,e,f,g,h,i;c=a.cQ;d=c.gF;e=0;f=c.s.data.length;g=b;b=BP(e,f);if(b>0){c=new BX;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BP(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AFe(a){var b,c,d;b=a.eL.data;c=b.length;d=0;while(d<c){AHQ(b[d]);d=d+1|0;}a.eL=a.dg.ok;a.cQ=null;}
function AKd(a,b,c,d,e,f,g,h,i){var j,k;j=FS(a.cQ);if(j)j=j+a.ch|0;if(!j)j=j-a.ch|0;k=Bd( -a.ch|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bv(b,c+k|0,d,f,i);}
function AAg(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FF,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.u7(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cQ===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FF;g.ch=3;g.dS=0;g.dg=d;g.eL=d.ok;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AFe(q);j=j+1|0;}return i;}
function TO(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cQ;if(e!==null)e.jC=1;d=d+1|0;}}
function OW(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AFe(b[d]);d=d+1|0;}}
function AHq(){A$5=0;}
function AI4(){var a=this;B.call(a);a.gj=null;a.dy=null;a.fd=null;a.fQ=null;a.o8=null;a.oS=null;}
function Jw(){var a=new AI4();A0_(a);return a;}
function A0_(a){a.gj=new Bh;a.dy=new Bh;a.fd=new Bh;a.fQ=new Bh;a.o8=new B4;a.oS=new B4;}
function AAw(a){var b;b=a.dy;return !Bc(b.a,b.b)?0:1;}
function I5(a,b){return GB(b,a.fd,a.fQ);}
function Gi(a,b,c,d){var e,f,g,h,i;e=I5(a,b);f=GB(b,a.gj,a.dy);if(!e&&!f)return null;if(!f){if(!d)c.g(V8(a,b.a-a.fd.a|0));else c.g(Rn(a,b.b-a.fd.b|0));}g=!d?a.gj.a+(a.dy.a/2|0)|0:a.gj.b+(a.dy.b/2|0)|0;h=!d?b.a:b.b;i=!f?0:g-h|0;if(!d){b=new S6;b.wO=a;b.wP=c;b.wN=i;}else{b=new S5;b.sh=a;b.sf=c;b.sg=i;}return b;}
function In(a,b,c){if(c!==null)BL(a.o8,c);if(b!==null)BL(a.oS,b);}
function AGF(b,c){var d;d=new AC7;d.uf=b;d.Df=c;return d;}
function Rn(a,b){var c,d,e;c=a.fQ.b;d=a.dy.b;e=c-d|0;return AGF(Be(Bd(0,b-(d/2|0)|0),e),e);}
function V8(a,b){var c,d,e;c=a.fQ.a;d=a.dy.a;e=c-d|0;return AGF(Be(Bd(0,b-(d/2|0)|0),e),e);}
function KL(a,b,c,d,e,f,g){Wd(a,b,c,d,e,f,g,1);}
function Se(a,b,c,d,e,f,g){Wd(a,b,c,d,e,f,g,0);}
function Wd(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Be(i,d);j=Bd(ZJ(d,d,e),i);e=e-d|0;i=d-j|0;i=i?ZJ(b,i,e):0;if(!h){k=a.gj;k.a=i+c|0;k.b=f-g|0;l=a.dy;l.a=j;l.b=g;l=a.fd;l.a=c;l.b=k.b;k=a.fQ;k.a=d;k.b=g;break a;}k=a.gj;k.a=f-g|0;k.b=i+c|0;l=a.dy;l.a=g;l.b=j;l=a.fd;l.a=k.a;l.b=c;k=a.fQ;k.a=g;k.b=d;break a;}}Y(a.fQ,0,0);Y(a.dy,0,0);}}
function Wt(a,b){He(a,b);Hj(a,b);}
function He(a,b){var c;c=a.fd;Bv(b,c.a,c.b,a.fQ,a.o8);}
function Hj(a,b){var c,d;c=a.dy;c.a=c.a-2|0;c.b=c.b-2|0;d=a.gj;Bv(b,d.a+1|0,d.b+1|0,c,a.oS);b=a.dy;b.a=b.a+2|0;b.b=b.b+2|0;}
function Gp(a,b,c){return I5(a,b)&&G3(c)?1:0;}
function AGt(){var a=this;B.call(a);a.F5=20;a.gT=null;a.fD=null;a.lP=0.0;a.lM=null;a.jI=0;a.lg=0;a.hB=0;a.c$=null;a.o$=null;a.fp=null;a.g4=null;a.g2=0;}
function AIW(){var a=new AGt();A5Y(a);return a;}
function A5Y(a){a.F5=20;a.gT=new Bh;a.fD=new Bh;a.c$=BO();a.o$=DS(0);}
function ACR(a,b,c){var d,e,f,g,h;d=a.g2;if(b==d)return;e=a.c$.p;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Bd(0,(d-1|0)/20|0);g=Bd(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){SD(a,b);a.g2=b;}else{YM(a,c);if(a.g2>=b)while(true){if(h<g)break a;a.g2=PY(BI(a.c$,h%e|0),a.fp,a.g4,a.g2,b,f,a.lP);h=h+(-1)|0;}while(g<=h){a.g2=PY(BI(a.c$,g%e|0),a.fp,a.g4,a.g2,b,f,a.lP);g=g+1|0;}}}}
function Ma(a,b){if(b===null)b=DS(0);a.o$=b;}
function AB8(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hB;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.c$;h=BI(h,g%h.p|0);i=a.gT;j=a.o$;k=h.fB.b;l=d.lz;m=b+f|0;n=h.cF;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&W1(d,j,r,l)!==l.lt?0:1){k=Bc((q-p|0)+1|0,h.cF);Y(h.jz,BU(h.cZ),k);Cv(h.ki,0.0,Bc(p,h.cF),BU(h.cZ),k);t=r;}else{u=W1(d,j,r,l);NO(h,e,f+Bc(p,h.cF)|0,i,l.px,u);Y(h.jz,BU(h.cZ),h.cF);Cv(h.ki,0.0,Bc(q,h.cF),BU(h.cZ),h.cF);p=q;}q=q+1|0;r=t;}u=W1(d,j,r,l);NO(h,
e,f+Bc(p,h.cF)|0,i,l.px,u);g=g+1|0;f=f+a.hB|0;}}
function TM(a,b,c,d){var e,f,g,h,i,j;e=a.c$.p;while(true){f=a.c$.p;g=Bc(f,a.hB);if(g>(d+a.lg|0))break;h=BK(0,g);i=new Rt;g=a.fD.a;f=a.lg;j=a.lM;i.jz=new Bh;i.ki=new B4;i.qO=h;i.em=20;i.cF=f;i.fB=BK(g,20*f|0);i.hK=L$(j,f);if(i.cZ===null)i.cZ=C3(b);BA(a.c$,i);}if(f==e)return;YM(a,b);SD(a,c);}
function SD(a,b){var c,d,e,f,g,h,i,j,k;c=a.c$;d=c.p;e=Bc((b/(d*20|0)|0)+1|0,d)*20|0;c=B9(c);while(Cb(c)){f=Cc(c);g=a.fp;h=a.lP;E3(g);i=0;while(true){j=f.em;if(i>=j)break;k=e-Bc(d,j)|0;if(k<b)k=e;e=k+1|0;G$(f,g,Do(e),Bc(f.cF,i)+f.hK|0,h);i=i+1|0;}CS(f.cZ,g);f.xV=g.jD;}}
function ZG(a,b,c,d){a.lM=b;a.lg=c;a.hB=c*20|0;a.jI=d;ZI(a);}
function YM(a,b){var c;c=a.fp;if(!(c!==null&&c.jD==a.jI)){c=Eb(b,a.fD.a,a.hB,a.jI);a.fp=c;Cr(c,a.lM);AA_(a.fp,2);}c=a.g4;if(!(c!==null&&c.jD==a.jI)){b=Eb(b,a.fD.a,a.lg,a.jI);a.g4=b;Cr(b,a.lM);AA_(a.g4,2);}}
function IU(a){FG(a.c$,new AES);IO(a.c$);ZI(a);}
function ZI(a){a.fp=BY(a.fp,null);a.g4=BY(a.g4,null);}
function S8(a,b,c,d,e){Ct(a.gT,b);Y(a.fD,c,d);a.lP=e;}
function Yq(){B.call(this);this.ED=null;}
function Yp(){B.call(this);this.qZ=null;}
function AOg(a,b){var c;c=a.qZ;Gg(c,F_(b,Lk(c)));}
function Yo(){B.call(this);this.t6=null;}
function ANv(a,b){var c;c=a.t6;I3(c,F_(b,ACd(c)));}
function ALO(){var a=this;B.call(a);a.jO=null;a.iy=null;a.n9=null;a.hH=null;a.hn=null;a.ok=null;a.di=null;a.hW=null;a.rj=0.0;a.eh=0;a.u4=0;a.CN=0;a.i7=0;}
function AR0(a){var b=new ALO();AVO(b,a);return b;}
function AVO(a,b){var c;a.jO=new B4;a.iy=new Bh;a.n9=new Bh;c=new B4;a.hH=c;a.hn=P(LZ,4);a.ok=P(IL,0);a.i7=b;L2(c);}
function Zi(a){a.hW=BY(a.hW,null);}
function Ta(a,b,c){var d,e;d=C5(Fi(a.di)*b);a.eh=d;e=a.di;a.u4= -( -((d+e.ew+e.eP)/2.0)|0)|0;AFi(a,c);return a.eh;}
function Qw(a,b){var c,d;L2(a.hH);c=a.hH;VW(c,b,c);a.rj=X3(a.hH);c=a.hH;d=c.bu+c.bh+1.5|0;a.CN=d;Y(a.n9,0,d*2|0);}
function AFi(a,b){a.hW=BY(a.hW,Eb(b,1024,a.eh,a.i7));}
function Hv(a,b,c,d,e,f,g){var h,i;h=a.iy;if(h.a&&h.b){i=a.jO;if(i.bC!==0.0&&i.bh!==0.0){DQ(b,d,e,h,i,c,f,g,a.i7);return;}}}
function Yn(){B.call(this);this.B9=null;}
function AXI(a){var b,c;b=a.B9;c=b.kv?0:1;b.kv=c;b=new J;L(b);JS(H(b,C(215)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Yu(){B.call(this);this.yu=null;}
function A0c(a){var b,c;b=a.yu;c=b.ln^1;b.ln=c;b=new J;L(b);JS(H(b,C(216)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Yt(){B.call(this);this.uX=null;}
function A6U(a){var b,c,d,e,f;b=a.uX;c=(b.eo+3|0)%6|0;b.eo=c;d=b.e4.data;e=d.length;f=0;while(f<e){b=d[f];b.ch=c;b=b.cQ;if(b!==null)b.jC=1;f=f+1|0;}}
function Ys(){B.call(this);this.xm=null;}
function AR8(a){var b;b=a.xm;b.b9=b.b9?0:1;IU(b.dk);b.dk=AIW();Ov(b);ABD(b,b.i,b.k,b.cc.cl);}
function Yr(){B.call(this);this.rL=null;}
function ATY(a){var b;b=a.rL;b.me=b.me?0:1;}
function Ym(){B.call(this);this.Aw=null;}
function A6h(a){var b;b=a.Aw;b.qt=b.qt?0:1;}
function VL(){B.call(this);this.s9=null;}
function AR_(a){var b;b=a.s9;ZC(b,b.l2,b.oy);}
function VM(){B.call(this);this.r$=null;}
function A3d(a){var b;b=a.r$;ZC(b,b.oy,b.l2);}
var AHI=G();
function NW(){B.call(this);this.Ew=null;}
var A$J=null;var A$_=null;function A1a(){A1a=Bm(NW);A6F();}
function APL(a){var b=new NW();AJr(b,a);return b;}
function AJr(a,b){A1a();a.Ew=b;}
function A6F(){A$J=APL(C(217));A$_=APL(C(218));}
var AF3=G(0);
function AKl(b,c,d){return IX(b,c,d,255,new B4);}
function IX(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function Wj(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-AQH(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bq=g+i;e.bu=h+i;e.bh=j+i;return e;}
function IN(b,c,d,e,f){f=Wj(b,c,d,f);f.bC=e;return f;}
function Ib(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var AA6=G();
function AQM(a,b){var c,d,e;c=b.cW;d=c&&!b.bQ&&!b.dL&&!b.kX?1:0;a:{if(d){d=b.bk;if(!(d!=67&&d!=88&&d!=86&&d!=45)){d=1;break a;}}d=b.bQ&&!c&&!b.dL&&!b.kX?1:0;d=d&&b.bk==46?1:0;}b:{if(!d){e=b.bk;if(!(e!=122&&e!=123&&e!=116?0:1))break b;}b.pj=1;}return 0;}
function AA5(){B.call(this);this.yo=null;}
function AY5(a,b){var c;c=a.yo.cB;return c!==null&&c.iJ(b)?1:0;}
function UF(){var a=this;B.call(a);a.bg=null;a.xJ=null;a.iU=null;a.iQ=null;a.S=null;a.dp=null;a.Z=null;a.gs=null;a.qo=0;}
function AFI(a){var b=new UF();ATN(b,a);return b;}
function A54(a,b){var c=new UF();AGE(c,a,b);return c;}
function ATN(a,b){AGE(a,b,AXd());}
function AGE(a,b,c){var d;a.bg=b;d=new Vk;Ff(d);d.m6=new B4;d.go=b;a.S=d;a.Z=c;}
function Uf(a,b){var c,d;if(a.dp===null){c=new Rm;c.gt=new Bh;c.k2=new Bh;a.dp=c;d=a.gs;if(d!==null)ABs(c,d);}a.dp.jr=b;}
function K4(a){var b;b=a.iU;if(b!==null)b.e();}
function Ln(a){var b;b=a.iQ;if(b!==null)b.e();}
function CW(a,b){var c;c=a.S;c.eQ=c.eQ|(BR(c.j3,b)?0:1);c.j3=b;IK(a);}
function ABt(a,b,c){var d,e,f;d=a.S;e=BR(d.hP,b)?0:1;f=c===d.k9?0:1;if(e){d.hP=b;d.eF=null;Re(d,0);}d.eQ=d.eQ|(!e&&!f?0:1);d.k9=c;d.iB=0;IK(a);}
function Eq(a,b){var c;a.gs=b;c=b.t8;BD(b);ABt(a,c,3.0);c=a.dp;if(c!==null)ABs(c,b);}
function Ki(a){var b;b=a.S;b.d8=BY(b.d8,null);b.eF=null;a.Z=BY(a.Z,null);b=a.dp;if(b!==null){Oj(b);b.jr=null;}}
function LA(a,b){var c,d,e;c=a.Z;d=c.i;e=c.k;b=BY(c,b);a.Z=b;b.dK(d,e,a.bg.cl);}
function EE(a,b,c){a.Z.dK(b,c,a.bg.cl);IK(a);}
function IK(a){var b,c,d;if(a.bg.cl!==0.0){b=a.S;if(b.hP!==null){c=a.Z.k.a;b.k.a=c;d=b.d8;if(d!==null&&c!=BU(d)&&!(c>=b.iB&&BU(b.d8)>=b.iB))b.eQ=1;b=a.S;b.bX=a.bg.cl;if(OH(b))c=0;else{b=a.S;Re(b,Wz(b));c=b.k.b;}b=a.S.i;d=a.Z.i;Y(b,d.a,d.b-c|0);b=a.dp;if(b!==null)Ct(b.gt,a.S.i);return;}}}
function ADK(a){return Wz(a.S);}
function MF(a,b){return ADv(a,b.j);}
function ADv(a,b){var c;c=!(a.qo&1)?0:1;return !c&&!B3(a.Z,b)?0:1;}
function Mw(b,c){if(b<0)c=C(219);else if(b>0)c=C(220);return c;}
function O7(a,b,c){var d;d=a.S.i.a;return (d-c|0)<=b&&b<d?1:0;}
function M_(a,b,c){var d,e;d=a.S;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function NE(a,b,c){var d;d=a.S.i.b;return (d-c|0)<=b&&b<d?1:0;}
function K$(a,b,c){var d,e;d=a.Z;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function OK(a,b,c){var d,e,f;d=a.S.i.b-c|0;e=a.Z;f=(e.i.b+e.k.b|0)+c|0;return d<=b&&b<f?1:0;}
function AEB(a,b,c){var d,e;d=a.S.i.b+c|0;e=a.Z;return AKP(b,d,(e.i.b+e.k.b|0)-c|0);}
function Nu(a,b,c){var d,e,f;d=a.S;e=d.i.a;f=e-c|0;e=(e+d.k.a|0)+c|0;return f<=b&&b<e?1:0;}
function Yl(a,b,c){var d,e;d=a.S;e=d.i.a;return AKP(b,e+c|0,(e+d.k.a|0)-c|0);}
function AKP(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BP(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function Ql(a,b){var c;a:{b:{c:{c=Cw(a.bg,7.0);if(Nu(a,b.a,c)){if(NE(a,b.b,c))break c;if(K$(a,b.b,c))break c;}if(!OK(a,b.b,c))break b;if(!O7(a,b.a,c)&&!M_(a,b.a,c))break b;}c=1;break a;}c=0;}return c;}
function Kq(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bh;f=new Bh;g=b.a;h=b.b;b=a.Z;i=b.i;j=i.a;k=i.b;b=b.k;l=b.a;m=b.b;b=new UJ;b.tW=a;b.tT=e;b.tS=f;b.tV=c;b.tU=g;b.tZ=j;b.tY=l;b.t1=d;b.t0=h;b.tX=k;b.sP=m;return b;}
function KJ(){var a=this;B.call(a);a.w=null;a.u=null;a.bc=null;a.br=null;}
function Tf(){var a=new KJ();ADi(a);return a;}
function T0(a,b,c,d){var e=new KJ();AOU(e,a,b,c,d);return e;}
function ADi(a){a.w=new Bh;a.u=new Bh;a.bc=new B4;a.br=new B4;}
function AOU(a,b,c,d,e){a.w=new Bh;a.u=new Bh;a.bc=new B4;a.br=new B4;Hz(a,b,c,d,e);}
function Hz(a,b,c,d,e){Y(a.w,b,c);Y(a.u,d,e);}
function ACg(a){Y(a.u,0,0);}
function LB(a){var b;b=a.u;return Bc(b.a,b.b)?0:1;}
function Fp(a,b){return GB(b,a.w,a.u);}
function AAP(a,b,c,d){var e;e=a.w;Bv(b,e.a+c|0,e.b+d|0,a.u,a.bc);}
function WQ(a,b,c,d,e,f){var g,h,i,j;g=a.w;d=g.a+d|0;e=g.b+e|0;g=a.u;h=a.br;i=a.bc;GO(b,b.i_);G0(b.i_,b.bd,d,e,g,b.dc);Oq(b.i_,b.bd,c);g=b.i_;j=b.bd;FQ(j,g.w$,h);FQ(j,g.w8,i);c=g.tw;j.uniform2f(c,f,0.0);Gf(b);}
var FA=G();
function NU(){FA.call(this);this.FT=null;}
function AB0(){FA.call(this);this.FO=null;}
function ZP(){FA.call(this);this.E3=null;}
var Gr=G(0);
var Tm=G(0);
function B4(){var a=this;B.call(a);a.bq=0.0;a.bu=0.0;a.bh=0.0;a.bC=0.0;}
function AE7(a,b,c,d){var e=new B4();A3S(e,a,b,c,d);return e;}
function AMO(a){var b=new B4();ALP(b,a);return b;}
function A3S(a,b,c,d,e){a.bq=b;a.bu=c;a.bh=d;a.bC=e;}
function Cv(a,b,c,d,e){a.bq=b;a.bu=c;a.bh=d;a.bC=e;}
function ALP(a,b){a.bq=b.bq;a.bu=b.bu;a.bh=b.bh;a.bC=b.bC;}
function BL(a,b){a.bq=b.bq;a.bu=b.bu;a.bh=b.bh;a.bC=b.bC;return a;}
function AWY(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BG(a)===BG(b)){b=b;if(b.bq===a.bq&&b.bu===a.bu&&b.bh===a.bh&&b.bC===a.bC?1:0){c=1;break a;}}c=0;}return c;}
function AOQ(a){var b,c,d,e,f;b=a.bq;c=a.bu;d=a.bh;e=a.bC;f=new J;L(f);Df(H(Df(H(Df(H(Df(H(f,C(70)),b),C(71)),c),C(221)),d),C(222)),e);return K(f);}
var Jq=G(0);
function AJW(){var a=this;EA.call(a);a.cp=null;a.p=0;}
function BO(){var a=new AJW();AQm(a);return a;}
function AQm(a){a.cp=P(B,10);}
function Ng(a,b){var c,d;c=a.cp.data.length;if(c<b){d=c>=1073741823?2147483647:Bd(b,Bd(c*2|0,5));a.cp=C1(a.cp,d);}}
function BI(a,b){KY(a,b);return a.cp.data[b];}
function A2U(a){return a.p;}
function BA(a,b){var c,d;Ng(a,a.p+1|0);c=a.cp.data;d=a.p;a.p=d+1|0;c[d]=b;a.b7=a.b7+1|0;return 1;}
function AK3(a,b,c){var d,e,f;Rg(a,b);Ng(a,a.p+1|0);d=a.p;e=d;while(e>b){f=a.cp.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cp.data[b]=c;a.p=d+1|0;a.b7=a.b7+1|0;}
function EZ(a,b){var c,d,e,f;KY(a,b);c=a.cp.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b7=a.b7+1|0;return d;}
function AIt(a,b){var c;c=Lx(a,b);if(c<0)return 0;EZ(a,c);return 1;}
function IO(a){AGd(a.cp,0,a.p,null);a.p=0;a.b7=a.b7+1|0;}
function AJ9(a,b,c){var d,e,f,g,h,i;Rg(a,b);if(c.eO())return 0;Ng(a,a.p+c.c0()|0);d=c.c0();e=a.p;f=e-1|0;while(f>=b){g=a.cp.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.p=e+d|0;h=c.cd();i=0;while(i<d){g=a.cp.data;e=b+1|0;g[b]=h.cf();i=i+1|0;b=e;}a.b7=a.b7+1|0;return 1;}
function KY(a,b){var c;if(b>=0&&b<a.p)return;c=new BJ;X(c);N(c);}
function Rg(a,b){var c;if(b>=0&&b<=a.p)return;c=new BJ;X(c);N(c);}
function FG(a,b){var c;c=0;while(c<a.p){b.g(a.cp.data[c]);c=c+1|0;}}
function ALT(a){var b,c,d,e;b=a.p;if(!b)return C(22);c=b-1|0;d=new J;F7(d,b*16|0);Br(d,91);b=0;while(b<c){e=a.cp.data;BM(H(d,e[b]!==a?e[b]:C(223)),C(37));b=b+1|0;}e=a.cp.data;H(d,e[c]!==a?e[c]:C(223));Br(d,93);return K(d);}
function LZ(){var a=this;B.call(a);a.oL=null;a.DA=null;a.pv=0.0;a.DN=0;a.D3=0;a.ue=0;a.EI=0;a.ew=0.0;a.eP=0.0;a.DE=0.0;a.qC=0.0;a.DJ=0;a.rn=null;}
function L$(a,b){return NJ(a,b)+a.ue|0;}
function NJ(a,b){return (b-Fi(a)|0)/2|0;}
function Fi(a){return C5(a.ew+a.eP);}
function NK(a,b){return C5((a.ew+a.eP)*b);}
function IL(){var a=this;B.call(a);a.eS=null;a.gg=null;a.e1=null;}
var A$s=0;function AHQ(a){var b;b=a.gg;if(b!==null){A$s=A$s-1|0;a.eS.eb.deleteTexture(b);a.gg=null;}}
function BU(a){return a.e1.a;}
function CT(a){return a.e1.b;}
function T5(a,b,c,d){var e;e=a.e1;e.a=b;e.b=c;OS(a);a.eS.eb.texStorage2D(3553,1,d,b,c);e=a.eS.eb;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function OS(a){var b,c;b=a.eS.eb;c=a.gg;b.bindTexture(3553,c);}
function CS(a,b){XK(a,b.on,b.nO,32856);ZL(a,b,0,0);}
function XK(a,b,c,d){var e,f,g,h;a:{e=a.e1;f=e.a;if(f){g=e.b;if(g){if(f==b&&g==c?1:0){OS(a);break a;}e=a.eS.eb;h=a.gg;e.deleteTexture(h);a.gg=a.eS.eb.createTexture();T5(a,b,c,d);break a;}}T5(a,b,c,d);}}
function J8(a,b,c,d){OS(a);ZL(a,b,c,d);}
function ZL(a,b,c,d){var e;e=a.eS.eb;b=b.js;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var ZF=G(0);
var A_a=0.0;function L2(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function VW(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JH(b.bC,JH(c,A_a));Cv(d,b.bq/c,b.bu*c,AWk(b.bh*c,1.25),e);}
function X3(b){var c;c=b.bu;return c-(c|0)>=0.25?0.0:0.5;}
function AFH(){A_a=NA(NA(0.5,0.375),4.0);}
var Pb=G(0);
function G3(a){return D7(a,null);}
function Sd(b){var c;c=new AAZ;c.wt=b;return c;}
function ZY(){B.call(this);this.uv=null;}
function A0N(a){Lb(a.uv);}
function ZX(){B.call(this);this.w3=null;}
function AXr(a){Lq(a.w3);}
function AMz(){var a=this;B.call(a);a.bS=null;a.bJ=null;a.dD=0;}
function AOi(){var a=new AMz();A6n(a);return a;}
function AZh(a){var b=new AMz();AS9(b,a);return b;}
function A6n(a){a.bS=new Hy;a.bJ=new Hy;}
function AS9(a,b){a.bS=new Hy;a.bJ=new Hy;J7(a,b);}
function J7(a,b){AC$(a.bS,b.bS);AC$(a.bJ,b.bJ);a.dD=b.dD;}
function Os(a,b,c){Ci(a.bJ,b,c);if(!a.dD)Ci(a.bS,b,c);}
function Rp(a,b){Ci(a.bS,b,0);Ci(a.bJ,b+1|0,0);}
function Ez(a){if(SH(a.bS,a.bJ)>0)return a.bJ;return a.bS;}
function Gk(a){if(SH(a.bS,a.bJ)<0)return a.bJ;return a.bS;}
function ALM(a,b){var c,d,e,f;c=a.bS;d=c.O;e=a.bJ;if(d==e.O&&c.bf==e.bf?1:0)return null;c=Ez(a);e=Gk(a);d=c.O;if(d<=b){f=BP(b,e.O);if(f<=0)return BK(b<=d?c.bf:0,f>=0?e.bf:(-1));}return null;}
function DD(a){var b,c;b=a.bS;c=a.bJ;return (b.O==c.O&&b.bf==c.bf?1:0)?0:1;}
function Ur(){var a=this;B.call(a);a.fz=null;a.fv=0;a.dT=0;}
function ADD(a,b){var c,d,e;c=a.fv;d=a.fz;if(c==d.data.length)a.fz=C1(d,c+16|0);d=a.fz.data;e=a.fv;a.fv=e+1|0;d[e]=b;}
function AAV(a){var b,c,d,e;b=a.fv;if(b?0:1)return;c=a.dT;d=b-1|0;if(c==d)a.dT=c-1|0;e=a.fz.data;a.fv=d;e[d]=null;}
var Hi=G();
function AAQ(){var a=this;Hi.call(a);a.E=null;a.dn=null;a.fb=null;a.dY=null;a.dQ=null;a.i3=null;a.lY=null;a.cz=0;a.nT=0;a.A9=0.0;}
function Cg(a,b){return a.E.data[b];}
function CK(a){return a.E.data.length;}
function ADt(a){return FR(a,CK(a));}
function GV(a,b){return a.E.data[b].U;}
function AMo(a,b,c){var d,e,f,g,h;d=a.E;e=d.data;f=e[b];d=C1(d,e.length+1|0);e=d.data;a.E=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ee(P(CA,0));a.E.data[b+1|0]=f;}else if(c==f.U){e[b]=f;e[b+1|0]=Ee(P(CA,0));}else{e=(I_(f,c)).data;d=a.E.data;d[b]=e[0];d[b+1|0]=e[1];}Gj(a,b,c,0,C(176));}
function L3(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=Ee(Mr(d.s,e.s));g=a.E;h=g.data.length;if(b<h&&b>=0){i=P(DO,h-1|0);c=i.data;AAK(g,b,i);c[b]=f;a.E=i;return;}d=new Bt;X(d);N(d);}
function Py(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].U?0:1)){d=(Cg(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.x)){e=Q(h.x,g);break a;}g=g-M(h.x)|0;f=f+1|0;}e=0;}Gj(a,b,c,1,N6(e));h=a.E.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].x);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].x)==1)h.s=AAK(d,e,P(CA,f-1|0));else{j=i[e];if(c<=0)k=El(DC(j.x,1),j.b4,j.bG);else if(c>=(M(j.x)-1|0)){k=new CA;l=j.x;ACu(k,Cy(l,0,M(l)-1|0),j.b4,j.bG);}else{d=B6(M(j.x)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.x,b);b=b+1|0;}b=m.length;while(c<b){k=j.x;n=c+1|0;m[c]=Q(k,n);c=n;}k=El(Gz(d),j.b4,j.bG);}i[e]=k;}h.U=h.U-1|0;Fd(h);}else if(b!=(d.length-1|0)){Gj(a,b,c,1,C(176));L3(a,b);}}
function AFo(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){ABd(a.E.data[b],c,e[0]);return;}g=f-1|0;d=(I_(a.E.data[b],c)).data;h=d[0];i=d[1];d=a.E;j=C1(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:M(l[f-1|0].x);M3(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!GK(e[m])?YO(e[m]):Ee(P(CA,0));d[b+m|0]=k;m=m+1|0;}M3(i,0,0,e[g]);d[b+g|0]=i;a.E=j;}
function VQ(a,b){var c,d,e,f,g,h,i;c=Ez(b);d=Gk(b);e=c.O;if(e==d.O)return Cy(FZ(a.E.data[e]),c.bf,d.bf);f=new J;L(f);b=a.E.data[c.O];e=c.bf;Br(BM(f,DC(FZ(b),e)),10);g=a.E.data;e=c.O+1|0;h=d.O;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AFA(BM(f,FZ(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.E.data[d.O];h=d.bf;BM(f,Cy(FZ(b),0,h));return K(f);}b=new OL;X(b);N(b);}
function PG(a,b,c){var d;AD6(a,b);d=Ez(b);Gj(a,d.O,d.bf,1,c);}
function AD6(a,b){var c,d,e,f,g,h,i;a:{c=Ez(b);d=Gk(b);e=c.O;if(e==d.O)H4(a.E.data[e],c.bf,d.bf);else{b=a.E.data[e];H4(b,c.bf,b.U);H4(a.E.data[d.O],0,d.bf);e=c.O+1|0;f=d.O;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DO,(h-f|0)+e|0);AGV(g,e,f,i);a.E=i;L3(a,c.O);break a;}b=new Bt;X(b);N(b);}b=new Bt;X(b);N(b);}}}
function Jv(a,b,c){return DY(b,G6(Cg(a,b),c));}
function AEz(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(Cg(a,c)).U|0)>=b)return BK(c,b-d|0);d=d+((Cg(a,c)).U+1|0)|0;c=c+1|0;}return BK(e,0);}
function FR(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+GV(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function Mq(a,b){return ON(Cg(a,b.bt),b.bx);}
function Fn(a){var b,c,d,e,f,g,h,i,j;b=B6(ADt(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].x;RC(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gj(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cz=a.cz+1|0;f=a.i3;g=P(Hs,1);h=new Hs;h.er=b;h.e9=c;i=MH(e,C(176),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BK(b,c+M(i[0])|0);break a;}k=BK((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BK(b,c);}i=g.data;h.p2=k;h.oB=d;h.g_=e;i[0]=h;BA(f,g);NN(a,b,c,d,e);}
function NN(a,b,c,d,e){var f;f=FR(a,b)+c|0;if(!d){YN(a.dn,f,M(e));UA(a.fb,f,M(e));}else{V$(a.dn,f,M(e));PU(a.fb,f,M(e));}}
function XP(a,b){var c,d,e;c=MH(b.g_,C(176),(-1));if(b.oB){AFo(a,b.er,b.e9,c);YN(a.dn,FR(a,b.er)+b.e9|0,M(b.g_));UA(a.fb,FR(a,b.er)+b.e9|0,M(b.g_));}else{c=c.data;d=AOi();Ci(d.bS,b.er,b.e9);e=c.length;if(e==1)Ci(d.bJ,b.er,b.e9+M(c[0])|0);else Ci(d.bJ,(b.er+e|0)-1|0,M(c[e-1|0]));AD6(a,d);V$(a.dn,FR(a,b.er)+b.e9|0,M(b.g_));PU(a.fb,FR(a,b.er)+b.e9|0,M(b.g_));}return b.p2;}
function ACG(a){return a.nT==a.cz?0:1;}
function K6(a){a.nT=a.cz;}
function NI(a){var b,c,d;a.lY=BQ(a.E.data.length+1|0);b=0;while(b<a.E.data.length){c=a.lY.data;d=b+1|0;c[d]=(c[b]+(Cg(a,b)).U|0)+1|0;b=d;}}
function WK(a,b){var c,d,e,f,g,h;c=a.lY;if(c===null){d=0;e=0;a:{while(true){c=a.E.data;f=c.length;if(e>=f)break;g=c[e].U;if(b<=(d+g|0)){h=DY(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=DY(f,0);}return h;}d=ALD(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=DY(d,b-(d<0?0:a.lY.data[d])|0);if(h.bx>=(Cg(a,h.bt)).U){h.bt=h.bt+1|0;h.bx=0;}return h;}
var MB=G(0);
function EN(a){return Vq(a.uc(),a.t());}
function Vq(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AHl(b,c,d));}
function AHl(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Br(BM(d,b[f]),47);f=f+1|0;}return BM(d,c);}
var Uw=G(0);
function LY(){var a=this;B.call(a);a.iA=null;a.hu=null;a.ik=null;}
function AId(a,b){var c=new LY();AY3(c,a,b);return c;}
function A_b(a,b,c){var d=new LY();Qr(d,a,b,c);return d;}
function ANm(b){var c,d,e,f,g,h,i;c=new LY;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BC,0);else{f=P(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=FT(e[h]);h=h+1|0;}}}else f=P(BC,0);Qr(c,d,b,f);return c;}
function AY3(a,b,c){Qr(a,b,null,c);}
function Qr(a,b,c,d){a.iA=b;a.hu=c;a.ik=d;}
function E6(a){var b;b=a.iA;return FT(b!==null?b.name:a.hu.name);}
function ANT(a){return a.ik;}
function V3(a,b,c){var d,e,f;d=AMA(c);e=new Wa;e.tP=b;b=a.hu;if(b!==null)b.text().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iA.getFile();f=new Wb;f.AM=e;f.AL=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function Ws(a,b,c){var d,e,f;d=AMA(c);e=new AER;e.wS=b;b=a.hu;if(b!==null)b.arrayBuffer().then(Bw(e,"f"),Bw(d,"f"));else{b=a.iA.getFile();f=new AEQ;f.ui=e;f.uh=d;b.then(Bw(f,"f"),Bw(d,"f"));}}
function AMA(b){var c;c=new TG;c.uS=b;return c;}
function N2(a){var b,c,d;if(a.hu===null)b=Vq(a.ik,E6(a));else{b=HT(BG(a));c=a.ik;d=E6(a);b=BM(A6z(b),C(29));AHl(c,d,b);b=K(b);}return b;}
var YV=G(0);
function OA(){var a=this;B.call(a);a.ix=null;a.fP=null;a.kJ=null;}
var A$p=null;function A8q(a,b){var c=new OA();AFN(c,a,b);return c;}
function A6w(a,b,c){var d=new OA();AKC(d,a,b,c);return d;}
function AFN(a,b,c){a.ix=b;if(c.length)a.fP=ABo(c);else{a.fP=P(BC,0);a.kJ=P(BC,0);}}
function AKC(a,b,c,d){a.ix=b;a.fP=c;a.kJ=d;}
function ABo(b){var c,d,e,f;if(!b.length)c=P(BC,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BC,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=FT(b[e]);e=e+1|0;}}}return c;}
function H0(a,b){var c,d;c=new ADF;d=a.ix.values();c.nF=a;c.zs=d;c.lr=b;ACw(c);}
function ZK(a){var b,c,d,e;b=a.kJ;if(b===null){b=a.fP;c=b.data;d=JF(a);e=c.length;b=C1(b,e+1|0);b.data[e]=d;b=b;a.kJ=b;}return b;}
function JF(a){return FT(a.ix.name);}
function A5G(a){return a.fP;}
function I7(a){return Vq(a.fP,JF(a));}
function Qg(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AFD(){A$p=new VJ;}
var ADW=G(0);
function ALq(){B.call(this);this.i4=null;}
function A7h(a){var b=new ALq();A2r(b,a);return b;}
function A2r(a,b){a.i4=b;}
function Y3(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.i4));}
function E2(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.i4));}
function CV(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.i4));}
function AZm(a){var b,c;b=a.i4.byteLength;c=new J;L(c);H(V(H(c,C(224)),b),C(225));return K(c);}
function AAZ(){B.call(this);this.wt=null;}
function D7(a,b){AAR(a.wt,b);return 1;}
function Hy(){var a=this;B.call(a);a.O=0;a.bf=0;}
function Ci(a,b,c){a.O=b;a.bf=c;}
function AC$(a,b){a.O=b.O;a.bf=b.bf;}
function SH(a,b){var c;c=BP(a.O,b.O);if(c)return c;return BP(a.bf,b.bf);}
function Og(){var a=this;B.call(a);a.p6=null;a.pa=null;}
function Mv(a){return a.p6.bt;}
function Lf(a){return a.p6.bx;}
function DO(){var a=this;B.call(a);a.s=null;a.U=0;a.gF=null;a.e5=null;a.eB=null;a.iz=null;a.hm=0;a.jC=0;a.jX=0;}
var A_c=0;var A_d=0;var A$6=0;function YO(a){var b=new DO();ALW(b,a);return b;}
function Ee(a){var b=new DO();AAo(b,a);return b;}
function ALW(a,b){var c;c=P(CA,1);c.data[0]=AKu(b);AAo(a,c);}
function AAo(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].x)|0;f=f+1|0;}a.U=d;Fd(a);}
function JM(a){return a.s.data.length;}
function Kf(a,b){return a.s.data[b];}
function G6(a,b){var c;c=KG(a,b);return c<=0?0:a.eB.data[c-1|0];}
function KG(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eB!==null&&!a.jX)){Wp(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+M(a.s.data[d].x)|0;a.eB.data[d]=e;d=d+1|0;}a.jX=0;}d=ACE(a.eB,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function ON(a,b){var c;c=a.s.data;if(!c.length)return null;return c[KG(a,b)];}
function H4(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.U){a.s=P(CA,0);Fd(a);a.U=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].x);i=M(a.s.data[f].x);j=BP(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==M(k.x)?1:0){g=a.s;a.s=AAK(g,e,P(CA,g.data.length-1|0));a.U=a.U-d|0;Fd(a);return;}a.s.data[e]=El(FH(Cy(k.x,0,b),DC(k.x,c)),k.b4,k.bG);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b
!=M(l.x))a.s.data[e]=El(Cy(l.x,0,b),l.b4,l.bG);e=e+1|0;}if(c==M(m.x))f=f+1|0;else if(c)a.s.data[f]=El(DC(m.x,c),m.b4,m.bG);g=a.s;a.s=AGV(g,e,f,P(CA,(g.data.length-f|0)+e|0));}a.U=a.U-d|0;Fd(a);}
function I_(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DO,[Ee(P(CA,0)),a]);if(b>=a.U)return I(DO,[a,Ee(P(CA,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].x);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DO,[Ee(LU(c,0,P(CA,d))),Ee(LU(c,d,P(CA,f-d|0)))]);h=e[d];e=LU(c,0,P(CA,d+1|0));i=e.data;j=LU(c,d,P(CA,f-d|0));c=j.data;i[d]=El(Cy(h.x,0,b),h.b4,h.bG);c[0]=El(DC(h.x,b),h.b4,h.bG);return I(DO,[Ee(e),Ee(j)]);}
function ABd(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=M(f[d].x);if(b<=g)break;b=b-g|0;d=e;}}M3(a,d,b,c);}
function M3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(GK(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=P(CA,1);h.data[0]=AKu(d);a.s=h;}else if(!b&&!c){h=P(CA,g+1|0);f=h.data;Da(e,0,h,1,g);f[0]=AKu(d);a.s=h;}else{i=f[b];if(c<=0)j=El(FH(d,i.x),i.b4,i.bG);else if(c>=M(i.x))j=El(FH(i.x,d),i.b4,i.bG);else{k=M(d);l=k+c|0;m=M(i.x)-c|0;e=B6(M(i.x)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.x,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.x,g+c|0);g=g+1|0;}j=El(Gz(e),i.b4,i.bG);}f[b]=j;}a.U=a.U
+M(d)|0;Fd(a);}
function PW(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<MA(f)){if(Q(f.x,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function NZ(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gF;if(!(e!==null&&e.data.length>=d)){a.gF=ANk(d);a.e5=BQ(d);a.hm=1;}Wp(a);if(!a.hm)A_d=A_d+1|0;else{f=0;g=0.0;A_c=A_c+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+M(j.x)|0;a.eB.data[h]=f;Cr(b,i[K1(j)]);g=g+Ev(b,j.x);a.gF.data[h]=g;a.e5.data[h]=g+0.5|0;h=h+1|0;}a.U=f;a.hm=0;a.jX=0;}}
function Wp(a){var b;b=a.eB;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eB=BQ(a.s.data.length);a.jX=1;}}
function Ub(a){a.hm=1;a.iz=null;}
function Fd(a){Ub(a);a.jC=1;a.jX=1;}
function AA$(a,b,c,d){var e,f,g,h,i,j,k;if(a.iz===null)a.iz=P($rt_arraycls($rt_intcls()),a.s.data.length);e=a.iz.data[d];if(e===null){e=c.data;f=a.s.data[d];Cr(b,e[K1(f)]);f=f.x;e=BQ(M(f)-1|0);c=GM(f);g=!d?0.0:a.gF.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;O_(f,c,0,k);h[i]=g+Ev(b,f)+0.5|0;i=k;}a.iz.data[d]=e;}return e;}
function Hf(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.hm&&a.e5!==null))NZ(a,c,d);if(b>=a.U)return a.e5.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+M(g[f].x)|0;i=BP(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.e5.data[f];}return (AA$(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function FS(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.e5.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hp(a,b){var c;if(b>=a.U)return b+1|0;c=KG(a,b);return a.eB.data[c];}
function FZ(a){var b,c,d,e;b=new J;F7(b,a.U);c=a.s.data;d=c.length;e=0;while(e<d){BM(b,c[e].x);e=e+1|0;}return K(b);}
function A2$(a){var b,c,d,e;b=a.s.data;c=b.length;if(c==1)d=AGP(b[0]);else{d=new J;L(d);BM(d,C(36));e=0;while(e<c){if(e>0)BM(d,C(37));H(d,b[e]);e=e+1|0;}BM(d,C(38));d=K(d);}return d;}
function AGU(){A$6=0;}
function Zn(){var a=this;B.call(a);a.fN=null;a.fk=null;}
function AZa(a,b){var c=new Zn();A0k(c,a,b);return c;}
function A0k(a,b,c){a.fN=b;a.fk=c;}
function UA(a,b,c){var d;d=a.fN;if(d===null)return;AAi(a,d,b,c);}
function PU(a,b,c){var d;d=a.fN;if(d===null)return;ACJ(a,d,b,c);}
function AAi(a,b,c,d){var e,f,g,h;e=b.e7.cd();while(e.cP()){WN(a,e.cf(),c,d);}e=b.fO.cd();while(e.cP()){f=e.cf();g=new T$;g.zW=a;E4(a,g,f,c,d);}h=b.h2.cd();while(h.cP()){e=h.cf();WN(a,e.lL,c,d);f=new T_;f.xY=a;E4(a,f,e.ld,c,d);}b=b.cV.cd();while(b.cP()){AAi(a,b.cf(),c,d);}}
function WN(a,b,c,d){Lc(a,b.ef,c,d);}
function E4(a,b,c,d,e){var f,g;a:{if(c instanceof HZ){f=c.fG;g=new WZ;g.rP=a;g.rN=b;g.rM=d;g.rO=e;FG(f,g);}else{if(!(c instanceof KD)){if(!(c instanceof JI))break a;f=c;E4(a,b,f.ii,d,e);E4(a,b,f.hO,d,e);return;}g=c.iu;f=new W0;f.Dc=a;f.Db=b;f.Da=d;f.C_=e;FG(g,f);}}if(c!==null){c=c.eH;if(c!==null)b.md(c,C4(d),C4(e));}}
function Lc(a,b,c,d){var e;e=b.dr;if(e>=c)b.dr=e+d|0;}
function ACJ(a,b,c,d){var e,f,g,h;e=b.e7.cd();while(e.cP()){Ke(a,(e.cf()).ef,c,d);}e=b.fO.cd();while(e.cP()){f=e.cf();g=new S_;g.vY=a;E4(a,g,f,c,d);}h=b.h2.cd();while(h.cP()){e=h.cf();Ke(a,e.lL.ef,c,d);f=new Tb;f.Bw=a;E4(a,f,e.ld,c,d);}b.e7.qc(new S$);b.fO.qc(new S9);b=b.cV.cd();while(b.cP()){ACJ(a,b.cf(),c,d);}}
function Ke(a,b,c,d){var e;e=b.dr;if(e>=c)b.dr=e-d|0;}
function LK(){var a=this;En.call(a);a.dd=0;a.cb=null;a.c7=0;a.Dd=0.0;a.nH=0;}
function Kd(){var a=new LK();Ru(a);return a;}
function A0v(a,b){return P(Ia,b);}
function Ru(a){var b;b=AIY(16);a.dd=0;a.cb=P(Ia,b);a.Dd=0.75;UD(a);}
function AIY(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function E$(a){var b;if(a.dd>0){a.dd=0;b=a.cb;AGd(b,0,b.data.length,null);a.c7=a.c7+1|0;}}
function UD(a){a.nH=a.cb.data.length*a.Dd|0;}
function HL(a,b){return ACa(a,b)===null?0:1;}
function Ox(a){var b;b=new UE;b.Aa=a;return b;}
function CB(a,b){var c;c=ACa(a,b);if(c===null)return null;return c.cS;}
function ACa(a,b){var c,d;if(b===null)c=S4(a);else{d=b.qy();c=RX(a,b,d&(a.cb.data.length-1|0),d);}return c;}
function RX(a,b,c,d){var e;e=a.cb.data[c];while(e!==null&&!(e.mo==d&&AJN(b,e.cJ))){e=e.c5;}return e;}
function S4(a){var b;b=a.cb.data[0];while(b!==null&&b.cJ!==null){b=b.c5;}return b;}
function ND(a){var b;if(a.py===null){b=new Q$;b.jF=a;a.py=b;}return a.py;}
function D2(a,b,c){var d,e,f,g;if(b===null){d=S4(a);if(d===null){a.c7=a.c7+1|0;d=Uy(a,null,0,0);e=a.dd+1|0;a.dd=e;if(e>a.nH)ADj(a);}}else{e=b.qy();f=e&(a.cb.data.length-1|0);d=RX(a,b,f,e);if(d===null){a.c7=a.c7+1|0;d=Uy(a,b,f,e);e=a.dd+1|0;a.dd=e;if(e>a.nH)ADj(a);}}g=d.cS;d.cS=c;return g;}
function Uy(a,b,c,d){var e,f;e=new Ia;WV(e,b,null);e.mo=d;f=a.cb.data;e.c5=f[c];f[c]=e;return e;}
function AKE(a,b){var c,d,e,f,g,h,i,j;c=AIY(!b?1:b<<1);d=P(Ia,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cb.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.mo&b;j=h.c5;h.c5=e[i];e[i]=h;h=j;}f=f+1|0;}a.cb=d;UD(a);}
function ADj(a){AKE(a,a.cb.data.length);}
function LW(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.cb.data[0];while(e!==null){if(e.cJ===null)break a;b=e.c5;d=e;e=b;}}else{f=Kk(b);g=a.cb.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.mo==f&&AJN(b,e.cJ))){h=e.c5;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.c5=e.c5;else a.cb.data[c]=e.c5;a.c7=a.c7+1|0;a.dd=a.dd-1|0;}if(e===null)return null;return e.cS;}
function AJN(b,c){return b!==c&&!b.bO(c)?0:1;}
var VJ=G();
function A1j(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function CA(){var a=this;B.call(a);a.x=null;a.b4=0;a.bG=0;}
function AKu(a){var b=new CA();AZP(b,a);return b;}
function El(a,b,c){var d=new CA();ACu(d,a,b,c);return d;}
function AZP(a,b){ACu(a,b,0,0);}
function ACu(a,b,c,d){a.x=b;a.b4=c;a.bG=d;}
function K1(a){return a.bG&3;}
function JJ(b,c){return (!b?0:2)+(!c?0:1)|0;}
function MA(a){return M(a.x);}
function AGP(a){var b,c,d,e;b=A6z(a.x);c=a.bG;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BM(b,C(226));if(d)BM(b,C(227));if(e)BM(b,C(228));return K(b);}
var Od=G(LK);
function AAW(){var a=this;B.call(a);a.dl=null;a.ff=0;}
var A_e=null;function AIe(a){var b=new AAW();AIF(b,a);return b;}
function AIF(a,b){a.ff=0;a.dl=b;}
function Rk(a,b){var c;if(b.eX)return b;b=B9(b.bv);while(true){if(!Cb(b))return null;c=Rk(a,Cc(b));if(c!==null)break;}return c;}
function Yk(a,b,c){var d,e,f,g;d=N7(a,a.dl,b);if(d===null)return;b=c.cs;e=b===null?A_f:b.cV;f=c.bv;c=a.dl;if(d===c){if(c.cs===null)c.cs=b;b=new ABc;b.zT=a;FG(f,b);b=new ABb;b.vW=a;e.ft(b);b=a.dl;b.bv=f;b.cs.cV=e;b.eX=0;return;}if(!EP(f)){c=d.hI;if(c!==null){b=new YK;b.rT=c;FG(f,b);g=Lx(c.bv,d);if(g==(-1))GP(c.bv,f);else{EZ(c.bv,g);AJ9(c.bv,g,f);}}}b=d.cs;if(b!==null){b=b.hC;c=new Th;c.tr=b;e.ft(c);g=Lx(b.cV,d.cs);if(g==(-1))GP(b.cV,e);else{b.cV.mG(g);b.cV.vl(g,e);}}}
function N7(a,b,c){var d,e,f,g;d=b.b2;if(d.b5==c.b5&&d.b3==c.b3?1:0){d=B9(b.bv);while(Cb(d)){e=N7(a,Cc(d),c);if(e!==null)return e;}return b;}b=B9(b.bv);while(true){if(!Cb(b))return null;d=Cc(b);f=c.b5;g=c.b3;e=d.b2;if(e.b5<=f&&g<=e.b3?1:0){e=N7(a,d,c);if(e!==null)break;}}return e;}
function ACn(a,b,c){BA(c,b.b2);b=B9(b.bv);while(Cb(b)){ACn(a,Cc(b),c);}}
function YN(a,b,c){a.ff=0;LN(a,a.dl,b,c);}
function LN(a,b,c,d){var e;if(Dh(b)<c)return;a:{if(Dq(b)>c){Mm(b,d);HG(b,d);b=B9(b.bv);while(Cb(b)){LN(a,Cc(b),c,d);}}else{if(!Ne(b,c)){if(a.ff)break a;if(Dh(b)!=c)break a;}HG(b,d);if(Dq(b)==c&&a.ff)Mm(b,d);e=B9(b.bv);while(Cb(e)){LN(a,Cc(e),c,d);}if(!a.ff){b.eX=1;a.ff=1;}}}}
function V$(a,b,c){a.ff=0;Ni(a,a.dl,b,c);}
function Ni(a,b,c,d){var e,f,g,h,i,j;if(Dh(b)<c)return;e=Dq(b);f=c+d|0;if(e>f){e= -d|0;Mm(b,e);HG(b,e);g=B9(b.bv);while(Cb(g)){Ni(a,Cc(g),c,d);}b.bv=XB(a,b.bv);}else{h=b.b2;if(c<=h.b5&&h.b3<=f?1:0){if(b===a.dl){Mu(b,0);Nh(b,0);h=b.cs;if(h!==null)h.cV.jB();}else{Mu(b,(-1));Nh(b,(-1));h=b.cs;if(h!==null){AE$(h);b.cs=null;}}IO(b.bv);}else{e=Ne(b,c);f=Ne(b,f);if(e&&f)HG(b, -d|0);else if(e)Nh(b,c);else{if(!f)return;Mu(b,c);HG(b, -d|0);}h=B9(b.bv);while(Cb(h)){Ni(a,Cc(h),c,d);}h=Mj(b.bv);g=Y6(0);i=new SM;j=new ADs;j.GK
=i;j.k3=g;while(Ow(h,j)){}if(!j.k3.oQ&&!a.ff)b.eX=1;else a.ff=1;b.bv=XB(a,b.bv);}}}
function XB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BO();d=null;e=A_e;f=b.cp;g=b.p;if(e===null)e=A9V;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}Lr(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b7=b.b7+1|0;b=B9(b);while(Cb(b)){m=Cc(b);if(Dq(m)==Dh(m))continue;if(!m.eX){if(d!==null){BA(c,d);d=null;}BA(c,m);}else if(d===null)d=m;else{n=AV3(Lg(Be(Dq(d),Dq(m)),Bd(Dh(d),Dh(m)),d.b2.f3),d.hI,d.cs);n.eX=1;d=m.cs;if(d===null)d=n;else{AE$(d);d=n;}}}if(d!==null)BA(c,d);return c;}
function AEw(a,b,c,d){var e,f,g,h,i,j;if((Dh(c)-Dq(c)|0)<43)e=Cy(d,Dq(c),Dh(c));else{e=Cy(d,Dq(c),Dq(c)+20|0);f=Cy(d,Dh(c)-20|0,Dh(c));g=new J;L(g);H(H(H(g,e),C(169)),f);e=K(g);}e=ADp(e,C(176),C(229));f=Bj();g=BT(c);h=new J;L(h);i=V(h,b);Br(i,32);g=H(i,g);Br(g,9);H(g,e);Bf(f,K(h));c=B9(c.bv);j=b+1|0;while(Cb(c)){AEw(a,j,Cc(c),d);}}
function AIO(){A_e=new VY;}
function AMT(){var a=this;B.call(a);a.b5=0;a.b3=0;a.f3=0;}
function Lg(a,b,c){var d=new AMT();AZL(d,a,b,c);return d;}
function AZL(a,b,c,d){a.b5=b;a.b3=c;a.f3=d;}
function AVc(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.b5==c.b5&&a.b3==c.b3&&a.f3==c.f3?1:0;}return 0;}
function AJJ(a){var b,c,d,e;b=a.b5;c=a.b3;d=a.f3;e=new J;L(e);Br(e,40);Br(V(H(V(H(V(e,b),C(37)),c),C(37)),d),41);return K(e);}
function AYW(a,b){var c;b=b;c=BP(a.b5,b.b5);if(!c)c=BP(b.b3,a.b3);return c;}
var VY=G();
function ASc(a,b,c){var d;b=b;c=c;b=b.b2;c=c.b2;d=BP(b.b5,c.b5);if(!d)d=BP(c.b3,b.b3);return d;}
function AAq(){var a=this;B.call(a);a.b2=null;a.hI=null;a.bv=null;a.cs=null;a.eX=0;}
function AV3(a,b,c){var d=new AAq();AIc(d,a,b,c);return d;}
function AIc(a,b,c,d){a.eX=0;a.b2=b;a.hI=c;a.bv=BO();a.cs=d;}
function AI7(b){return AAA(b,null);}
function AAA(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bb(b);e=Bb(b);f=Bb(b);g=Bb(b);h=Bb(b);i=Lg(d,e,f);j=new AAq;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AIc(j,i,null,l);m=0;while(m<g){l=AAA(b,c);l.hI=j;BA(j.bv,l);m=m+1|0;}return j;}
function AFU(b,c,d){var e,f,g,h,i;a:{e=b.b2;f=b.bv;g=e.b5;h=e.b3;i=e.f3;Bu(c,g);Hl(c,h,i);Bu(c,f.p);if(d!==null){e=b.cs;if(e!==null&&ADT(d,e)){g=(OT(d,b.cs)).bs;break a;}}g=(-1);}Bu(c,g);b=B9(f);while(Cb(b)){AFU(Cc(b),c,d);}}
function Dq(a){return a.b2.b5;}
function Dh(a){return a.b2.b3;}
function Mu(a,b){a.b2.b5=b;}
function Nh(a,b){a.b2.b3=b;}
function Mm(a,b){var c;c=a.b2;c.b5=c.b5+b|0;}
function HG(a,b){var c;c=a.b2;c.b3=c.b3+b|0;}
function Ne(a,b){return Dq(a)<=b&&b<Dh(a)?1:0;}
function ANQ(a){var b,c,d;b=AJJ(a.b2);c=a.eX;d=new J;L(d);JS(H(H(d,b),C(37)),c);return K(d);}
function AOD(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.b2,c.b2)&&BR(a.bv,c.bv)?1:0;}return 0;}
var JK=G(0);
function Hg(){var a=this;B.call(a);a.cJ=null;a.cS=null;}
function A_g(a,b){var c=new Hg();WV(c,a,b);return c;}
function WV(a,b,c){a.cJ=b;a.cS=c;}
function AZo(a,b){var c,d;if(a===b)return 1;if(!Jy(b,JK))return 0;a:{b:{c:{d:{c=b;b=a.cJ;if(b!==null){if(!b.bO(c.cJ))break c;else break d;}if(c.cJ!==null)break c;}b=a.cS;if(b!==null){if(!b.bO(c.cS))break c;else break b;}if(c.cS===null)break b;}d=0;break a;}d=1;}return d;}
function APj(a){var b,c,d;b=a.cJ;c=a.cS;d=new J;L(d);b=H(d,b);Br(b,61);H(b,c);return K(d);}
function Ia(){var a=this;Hg.call(a);a.mo=0;a.c5=null;}
function Oa(){var a=this;LS.call(a);a.zi=null;a.rQ=null;}
function AFY(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.zi;e=0;f=0;g=a.rQ;a:{while(true){if((e+32|0)>f&&Eg(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Be(Ck(b)+j|0,i.length);PX(b,d,j,f-j|0);e=0;}if(!Eg(c)){k=!Eg(b)&&e>=f?A$E:A$D;break a;}i=g.data;j=Be(Ck(c),i.length);l=new Yg;l.q3=b;l.zH=c;k=AHf(a,d,e,f,g,0,j,l);e=l.v3;j=l.w0;if(k===null){if(!Eg(b)&&e>=f)k=A$E;else if(!Eg(c)&&e>=f)k=A$D;}AEy(c,g,0,j);if(k!==null)break;}}FI(b,b.be-(f-e|0)|0);return k;}
var Rh=G(Oa);
function AHf(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(OD(h,2))break a;i=A$D;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!O1(l)){if((f+3|0)>g){j=j+(-1)|0;if(OD(h,3))break a;i=A$D;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!CY(l)){i=EF(1);break a;}if
(j>=d){if(Eg(h.q3))break a;i=A$E;break a;}c=j+1|0;m=k[j];if(!Dn(m)){j=c+(-2)|0;i=EF(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(OD(h,4))break a;i=A$D;break a;}k=e.data;o=E1(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.v3=j;h.w0=f;return i;}
var Jr=G(EH);
var Pt=G();
function AWO(a,b){return b.text();}
function Pv(){var a=this;B.call(a);a.uy=null;a.ux=null;}
function AV$(a,b){var c,d,e,f;c=a.uy;d=a.ux;e=b.length;f=new P1;f.BO=b;c.g(AP1((AMc(e,f)).kE,ADg(d)));}
var Pu=G();
function AYc(a,b){AIX(b);}
function Jf(){var a=this;B.call(a);a.bw=null;a.Gv=null;a.b$=null;a.j9=null;a.lz=null;a.ee=null;a.fL=null;a.CK=null;a.qd=null;a.pn=null;}
function A_h(a,b,c,d,e,f){var g=new Jf();L9(g,a,b,c,d,e,f);return g;}
function IW(){var b,c,d,e,f,g,h,i,j;b=new Jf;c=new Kz;d=new HD;FW();Lj(d,A_i);MW(c,d,B0(A$1),B0(A_j),B0(A_k),B0(A$1),B0(A_l),B0(A_m),B0(A_n),B0(A_o),B0(A_p),B0(A_q));e=AK8(S(C(230)));f=(ALc()).data;g=f.length;h=P(KO,g);i=h.data;j=0;while(j<g){i[j]=f[j].or;j=j+1|0;}L9(b,c,e,h,ALV(S(C(231)),S(C(232)),S(C(233)),S(C(234))),Ft(),AFE(S(C(235)),S(C(236)),S(C(237)),S(C(238))));return b;}
function Gu(){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=new Jf;c=new Kz;d=new HD;AP9();Lj(d,A_r);MW(c,d,B0(A_s),B0(A_t),B0(A_u),B0(A_s),B0(A_v),B0(A_w),B0(A_x),B0(A_y),B0(A_z),B0(A_A));e=AK8(S(C(239)));f=(AG3()).data;g=f.length;h=P(KO,g);i=h.data;j=0;while(j<g){i[j]=f[j].lw;j=j+1|0;}k=ALV(S(C(240)),S(C(241)),S(C(242)),S(C(243)));l=new Ji;m=new Jp;AXM();n=A_B;O9(m,n,A_C,A_D,A_E,A_F,n);Mi(l,m,AIw(),AI3(S(C(244)),S(C(245)),S(C(246))),AIw(),AJq(1,0.17499999701976776),A_G,A_H);L9(b,c,e,h,k,l,AFE(S(C(235)),S(C(236)),S(C(237)),
S(C(247))));return b;}
function L9(a,b,c,d,e,f,g){var h;h=d.data;a.fL=DB(C(168),17.0);a.CK=DB(C(157),15.0);a.qd=DB(C(168),15.0);a.pn=DB(C(14),15.0);a.bw=b;a.Gv=c;a.j9=d;a.lz=e;if(h.length>=15){a.b$=f;a.ee=g;return;}b=new BX;X(b);N(b);}
function XT(a,b){if(b===null)b=a.bw.eq;return b;}
function KU(){var a=this;Cq.call(a);a.d5=null;a.oq=null;}
function A7U(a){var b=new KU();AJe(b,a);return b;}
function AJe(a,b){var c,d,e,f;G8(a,b,0);c=IT(a.v);a.oq=c;d=GW(c);a.d5=d;Nn(a.q,d);c=b.n.bA;d=new Zu;d.si=a;Z(c,d);c=b.n.bA;d=new GJ;e=new Zs;e.Cz=a;G5(d,b,e);Z(c,d);c=a.d5;d=b.n;f=new ADo;f.xh=c;Z(d.bY,c);Z(d.fC,f);b=b.n.cy;c=new Zt;c.yS=a;Z(b,c);JL(a);}
function AKW(a,b){var c,d;c=a.d5;d=new ACQ;d.vR=a;d.vS=b;F4(c,b,d);}
function A0U(a,b){if(GT(a.v,b))Ml(a.d5);}
function A4L(a,b){var c;c=Qz(a,b);return L1(a.d5,b)|c;}
function AQO(a){HP(a);IF(a.d5);J_(a.v);}
function A57(a){return EL(0);}
function ANf(a,b,c){var d;IV(a,b,c);d=a.d5;MT(d,d.i,b,c);}
function AZK(a,b){BD(b);F5(a.oq,b);E8(a.d5,b);}
function AKH(a,b){if(b.bk!=121)return 0;return 1;}
function AF0(a,b){var c,d,e;if(DA(a.q,a.d5)){c=a.oq;b=b.j;d=a.d5;e=new ABv;e.Ba=a;I0(c,b,d,a,d,a,e);}return 1;}
function AJD(){var a=this;Cz.call(a);a.zL=null;a.pz=null;a.kB=null;a.es=null;a.mc=null;a.hJ=null;a.eI=null;a.jU=null;a.q0=null;a.jj=null;a.qF=null;a.qG=null;a.pZ=null;a.z4=null;a.DV=null;a.tD=0;}
function A76(a){var b=new AJD();A1O(b,a);return b;}
function A1O(a,b){var c,d,e,f;Et(a,b);c=(IW()).bw.eq;a.zL=c;a.pz=AMO(c);a.kB=new Bh;a.es=Ld();a.mc=Ld();a.hJ=T0(0,0,3,3);a.eI=Ir(0,0,300,300);a.jU=A0B();d=P(BC,4);e=d.data;e[0]=C(181);e[1]=C(182);e[2]=C(200);e[3]=C(199);a.q0=d;a.jj=P(KJ,e.length);c=b.n.bY;f=new UL;f.fF=a;Z(c,f);c=b.n.bA;f=new ZV;f.De=a;Z(c,f);c=b.n.o1;f=new ZU;f.sX=a;Z(c,f);c=b.n.g6;f=new ZT;f.EG=a;Z(c,f);c=b.n.mI;f=new ZS;f.Fj=a;Z(c,f);c=b.n.cy;f=new ZR;f.FM=a;Z(c,f);b=b.n.fC;c=new ZQ;c.BW=a;Z(b,c);a.qF=ADL(a,1);a.qG=ADL(a,0);SO(a,a.es,a.qF);SO(a,
a.mc,a.qG);a.pZ=AE8(a,0);a.z4=AE8(a,1);F3(a.eI,a.pZ);Gc(a.eI);HS(a.eI,DE(169,183,198));Fw(a.eI,a.zL);Cv(a.es.bc,1.0,1.0,1.0,1.0);Fw(a.es,a.eI.br);BL(a.hJ.br,a.pz);}
function SO(a,b,c){F3(b,c);Gc(b);}
function Tg(a,b){IN(DX(),0.5+DX()*0.5,0.5+DX()*0.5,1.0,b.bc);}
function ADL(a,b){var c,d;c=Eb(a.C.R,200,100,b);HM(c,C(248),11.0);B1(c,C(249),0.0,20.0);Kr(c,255,0,0);B1(c,C(249),0.25,40.0);Kr(c,0,255,0);B1(c,C(249),0.5,60.0);Kr(c,0,0,255);B1(c,C(249),0.75,80.0);d=C3(a.C.R);CS(d,c);EK(c);return d;}
function AE8(a,b){var c,d,e,f;c=Eb(a.C.R,255,100,b);HM(c,C(168),10.0);d=Bj();e=$rt_str(c.dj.font);f=new J;L(f);H(H(f,C(250)),e);Bf(d,K(f));Ev(c,C(251));B1(c,C(251),0.0,20.0);B1(c,C(251),0.25,40.0);B1(c,C(251),0.5,60.0);B1(c,C(251),0.75,80.0);e=C3(a.C.R);CS(e,c);EK(c);return e;}
function ANB(a,b){var c;a.tD=a.tD+1|0;c=b/5.0;IN(c-(c|0),1.0,1.0,1.0,a.hJ.bc);return ACf(a.jU,b);}
function APA(a){var b,c,d,e,f,g,h,i;b=a.C.R;EU(b,a.pz);c=a.jj.data;d=c.length;e=0;while(e<d){AAP(c[e],b,0,0);e=e+1|0;}f=a.eI;g=f.w;g.b=(a.kB.b-f.u.b|0)-5|0;g.a=0;Ca(b,0);h=0;while(h<7){f=a.eI;ER(f,b,a.pZ,Bc(h,10+((10*f.u.a|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.eI;f.w.b=(a.kB.b-(f.u.b*2|0)|0)-10|0;h=0;while(h<7){g=a.z4;f=a.eI;f.w.a=Bc(h,10+((10*f.u.a|0)/15|0)|0)+5|0;TF(f,b,g,1);h=h+1|0;}TF(a.es,b,a.qF,1);Ca(b,1);g=a.mc;f=a.qG;i=g.w;h=i.a;d=i.b;g=g.u;GO(b,b.li);G0(b.li,b.bd,h,d,g,b.dc);Oq(b.li,b.bd,f);Gf(b);Ca(b,0);f
=a.DV;if(f!==null)WQ(a.hJ,b,f,0,0,0.0);ADh(a.jU,b,new Bh);No(b,C(252));}
function ARU(a,b,c){var d,e,f,g,h,i,j,k;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(253)),e);Bf(d,K(f));d=Bj();f=new J;L(f);Df(H(f,C(254)),c);Bf(d,K(f));g=Cj(30.0,c);h=Cj(10.0,c);i=0;while(true){j=a.jj.data;if(i>=j.length)break;k=1+i|0;j[i]=T0(Bc(h,k)+Bc(g,i)|0,g,g,g);Tg(a,a.jj.data[i]);i=k;}Y(a.hJ.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);f=a.es;Y(f.w,((b.a/2|0)-f.u.a|0)-10|0,50);Y(a.mc.w,(b.a/2|0)+10|0,50);Ct(a.kB,b);}
function X0(a,b){var c,d,e,f,g;c=Bj();d=!b.ka?C(255):C(256);e=b.ep;f=b.bk;g=b.AV;b=new J;L(b);JS(H(V(H(H(H(b,d),e),C(257)),f),C(258)),g);Bf(c,K(b));return 0;}
function ACm(){var a=this;Cz.call(a);a.FP=null;a.ly=null;a.jl=null;a.ip=null;a.dt=null;a.d6=null;a.nw=null;a.nk=null;a.jY=0;a.iZ=null;a.iY=null;}
function RY(a,b,c){F3(b,c);Gc(b);}
function AFn(a,b,c,d,e,f){var g,h;g=Eb(f,c,120,b);Cr(g,e);e=!b?C(259):C(260);h=new J;L(h);H(H(H(h,e),d),C(155));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C3(f);CS(h,g);EK(g);return h;}
function ATp(a,b){return 0;}
function AYM(a){var b,c,d,e,f,g,h,i;b=a.C.R;EU(b,a.ly);Ca(b,0);c=a.jl;d=c.b;e=a.ip;f=d-e.b|0;g=c.a-e.a|0;Bv(b,0,0,e,a.dt.br);Bv(b,g,0,a.ip,a.d6.br);Bv(b,0,f,a.ip,a.dt.bc);Bv(b,g,f,a.ip,a.d6.bc);c=a.dt;e=c.w;h=e.b;i=((a.jl.b*3|0)/4|0)-(c.u.b/2|0)|0;IP(c,b,e.a,h,a.iZ,0,1);c=a.dt;IP(c,b,c.w.a,i,a.iZ,1,1);c=a.d6;IP(c,b,c.w.a,h,a.iY,0,0);e=a.d6;IP(e,b,e.w.a,i,a.iY,1,0);No(b,C(252));}
function AZ6(a,b,c){var d,e;Ct(a.jl,b);Y(a.ip,b.a/2|0,b.b/2|0);d=a.jl.b/4|0;e=a.dt;d=d-(e.u.b/2|0)|0;Y(e.w,(b.a/4|0)-(a.jY/2|0)|0,d);Y(a.d6.w,((b.a*3|0)/4|0)-(a.jY/2|0)|0,d);}
function Yy(){var a=this;Cq.call(a);a.zG=null;a.fm=null;a.dP=null;a.o4=null;}
function ARm(a,b,c){var d;d=Fx(a.q,a.o4);J1(a.fm,d,a.q);J1(a.dP,d,a.q);}
function Sv(b){return Jm(b,VS());}
function Jm(b,c){var d;d=TY();OM(d,NR(b,Kw(c,25)),!b?null:Jm(b-1|0,c));OM(d,NR(b,Kw(c,20)),!b?null:Jm(b-1|0,c));OM(d,NR(b,Kw(c,15)),!b?null:Jm(b-1|0,c));OM(d,NR(b,Kw(c,10)),!b?null:Jm(b-1|0,c));return Je(d);}
function NR(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(29)),c);c=K(d);}return c;}
function OM(b,c,d){if(d!==null)Ij(b,c,d);else{d=new Wk;d.sF=c;EB(b,c,d);}}
function AQa(a,b,c){var d,e;IV(a,b,c);b=a.q.bT;d=EM(a.fm);e=EM(a.dP);NL(a.fm,(b.a-d.a|0)/2|0,((b.b-(3*d.b|0)|0)/2|0)-5|0);NL(a.dP,(b.a-e.a|0)/2|0,(b.b/2|0)+5|0);}
function AZF(a){var b,c,d,e,f,g,h,i;HP(a);b=a.C.R;Ca(b,1);c=a.zG;d=a.q;e=d.bT;Y(c.oh,e.a,Cj(2.0,d.cl));Y(c.oK,Cj(2.0,d.cl),e.b);FW();f=A_p;g=d.bM;h=e.b/2|0;i=c.oh;Bv(g,0,h-(i.b/2|0)|0,i,f);g=d.bM;h=e.a/2|0;c=c.oK;Bv(g,h-(c.a/2|0)|0,0,c,f);ME(a.fm,a.q);ME(a.dP,a.q);J_(a.v);Ca(b,0);}
function ARX(a,b){var c,d;c=Oi(a.fm,b.j,a.q.c2);d=Oi(a.dP,b.j,a.q.c2);return !c&&!d?0:1;}
function AOh(a,b,c,d){var e,f;e=OF(a.fm,b.j,c,d);f=OF(a.dP,b.j,c,d);return !e&&!f?0:1;}
function ABN(){Cq.call(this);this.k1=null;}
function APp(a,b,c){if(b===0.0)Z4(a);}
function Z4(a){var b,c,d,e,f,g,h,i;b=a.k1;if(b!==null){IJ(a.v,b);Ki(b);}b=(IW()).b$;c=A9h(a.q,new V7);d=DB(C(157),14.0);e=ARk();f=0;while(f<300){g=Do(f);h=new Tw;h.Cf=C(261);h.Cc=g;h.Cd=C(262);Xb(e,C(261),g,C(262),h);f=f+1|0;}X9(c,AEg(e));W7(c,b,d);g=AFI(a.q);i=G2(c,a.q);JC(i,b.nn,b.pk);LA(g,i);Eq(g,b);CW(g,C(146));a.k1=g;DV(a.v,g);Rc(a);}
function AOx(a,b,c){IV(a,b,c);Rc(a);}
function Rc(a){var b,c,d;b=a.q.bT;EE(a.k1,BK((b.a*2|0)/10|0,(b.b*4|0)/10|0),BK((b.a*7|0)/10|0,(b.b*3|0)/10|0));c=a.k1;b=AJp(c.Z.k);d=new J;L(d);H(H(d,C(263)),b);CW(c,K(d));}
function XW(){var a=this;H5.call(a);a.mJ=null;a.id=null;a.gx=null;a.kD=null;a.sA=null;a.ky=null;a.is=null;a.h0=null;a.l3=0;a.ic=0;}
function Qc(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.id.p>0){d=DX();e=a.id;f=d*(e.p-1|0)|0;e=EZ(e,f);EZ(a.gx,f);f=a.ic;g=e.u;a.ic=f-Bc(g.a,g.b)|0;Jk(a.mJ,e.dF);}c=c+1|0;}}
function Ms(a,b){var c,d,e,f,g,h,i,j;c=KH(a.q);Cr(c,a.kD);d=0;while(d<b){e=Kw(a.ky,1+(DX()*19.0|0)|0);f=Ld();g=f.dF;h=a.mJ;BD(c);i=new RR;i.vh=c;BL(g,KR(h,e,i));(Wj(DX(),1.0,1.0,f.br)).bC=0.5;h=f.w;g=f.dF;Y(h,g.bq|0,g.bu|0);h=f.u;g=f.dF;Y(h,g.bh|0,g.bC|0);BA(a.gx,e);BA(a.id,f);j=a.ic;h=f.u;a.ic=j+Bc(h.a,h.b)|0;d=d+1|0;}a.h0=Nc(a.mJ);}
function A4f(a){var b,c,d,e,f,g,h,i;HP(a);b=a.C.R;Ca(b,1);c=a.q.bM;if(a.gx.p){d=a.h0;d=H1(c,d.a,d.b);Cr(d,a.kD);e=a.kD.ew;Bv(c,0,0,a.h0,a.sA);f=0;while(f<a.gx.p){g=BI(a.id,f);h=BI(a.gx,f);g=g.dF;B1(d,h,g.bq,g.bu+e);f=f+1|0;}g=a.is;if(!(g!==null&&BU(g)==a.h0.a&&CT(a.is)==a.h0.b))a.is=BY(a.is,C3(c));CS(a.is,d);EK(d);i=0;while(i<a.gx.p){d=BI(a.id,i);HS(d,Cs(0));ER(d,c,a.is,0,0);i=i+1|0;}}Ca(b,0);}
function ANu(a,b){var c,d;if(a.l3){c=a.h0;d=Be(Bc(c.a,c.b),2211840);if(a.ic/d<=0.7)Ms(a,Ec(a.ky,5));else Qc(a,Ec(a.ky,5));}return a.l3;}
function TC(){var a=this;Cz.call(a);a.eK=null;a.ih=null;a.jk=null;a.pq=null;a.fe=0;a.vI=0;a.sB=null;a.mX=0;a.yd=0;a.yB=null;a.Bi=null;}
function ANd(a){var b,c;b=a.fe;c=new J;L(c);V(H(c,C(264)),b);$rt_globals.console.info($rt_ustr(K(c)));EU(a.eK,a.sB);KL(a.jk,a.fe,0,HJ(a),5000,a.pq.a,20);Ca(a.eK,1);Wt(a.jk,a.eK);Ca(a.eK,0);b=a.fe;c=new J;L(c);V(H(c,C(264)),b);$rt_globals.console.info($rt_ustr(K(c)));ACR(a.ih,a.fe/a.mX|0,a.eK);AB8(a.ih,a.fe,HJ(a),a.Bi,a.eK);}
function AXn(a,b,c){a.pq=b;S8(a.ih,BK(0,0),50,HJ(a),c);TM(a.ih,a.eK,0,HJ(a));}
function VK(a){return 5000-HJ(a)|0;}
function HJ(a){return Be(a.vI,a.pq.b);}
function Dx(){var a=this;Cz.call(a);a.qv=null;a.hc=null;a.re=0.0;}
function A_I(a){var b=new Dx();H7(b,a);return b;}
function H7(a,b){Et(a,b);a.qv=AKl(0,0,64);a.hc=new Bh;GA(b.bH,Kb(BG(a)));}
function ABf(a){EU(a.C.R,a.qv);}
function Tx(a,b,c){Ct(a.hc,b);a.re=c;}
var RV=G(Dx);
var Yf=G(Cq);
function Hx(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.C.bH;f=new RQ;f.Es=a;f.uY=b;g=P(B,1);h=g.data;i=BQ(1);i.data[0]=b;h[0]=i;CO(e,f,C(265),g);d=d+1|0;}}
function AMd(b){var c;c=b.data;AJS(c[0],c[1],Y3(I6(b,2)));}
function AJS(b,c,d){var e,f,g,h,i;d=d.data;e=Bj();b=BT(b);c=BT(c);f=new J;L(f);H(H(H(H(f,C(266)),b),C(267)),c);Bf(e,K(f));b=Bj();g=d.length;h=1;i=0;while(i<g){h=(31*h|0)+d[i]|0;i=i+1|0;}c=new J;L(c);V(H(V(H(c,C(268)),g),C(269)),h);Bf(b,K(c));}
function Xy(){var a=this;Dx.call(a);a.fc=null;a.gX=null;a.n8=null;a.BZ=null;a.qU=null;}
function AQ3(a,b){b=b/5.0;IN(b-(b|0),1.0,1.0,1.0,a.gX.bc);return 0;}
function AZt(a){ABf(a);ER(a.fc,a.C.R,a.BZ,0,0);WQ(a.gX,a.C.R,a.n8,0,0,0.0);No(a.C.R,C(252));}
function A52(a,b,c){var d,e,f;Tx(a,b,c);Y(a.gX.w,(b.a/2|0)-1|0,(b.b/2|0)-1|0);d=a.fc;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function TA(){var a=this;Dx.call(a);a.hf=null;a.rv=null;a.mU=null;a.kU=null;a.kd=null;}
function A6G(a){var b,c,d,e,f,g;ABf(a);b=a.C.R;c=a.kU;Mh(b,c.a,c.b,a.kd);b=a.hf;c=a.rv;d=a.hc;e=a.C.R;f=0;while(true){g=0;while(true){ER(b,e,c,g,f);g=g+BU(c)|0;if(g>=d.a)break;}f=f+CT(c)|0;if(f>=d.b)break;}Gq(a.C.R);}
function AQJ(a,b,c){Tx(a,b,c);Y(a.kd,(b.a*7|0)/10|0,(b.b*7|0)/10|0);}
function ABy(){var a=this;Cz.call(a);a.eU=null;a.pb=null;a.g0=null;a.cj=null;a.fs=0;a.iV=null;a.fS=0;a.EU=20;a.Gy=11;a.Fg=220;a.mw=null;a.F0=5000;a.iD=0;a.g8=null;}
function AWb(a){var b,c,d,e,f,g,h;b=a.iV;c=a.fS;d=a.mw;KL(b,c,0,d.b,5000,d.a,20);Ca(a.eU,1);Wt(a.iV,a.eU);if(a.cj===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.pb,Do(e),0.0,c);}b=C3(a.eU);a.cj=b;CS(b,a.pb);}if(a.fS<=a.fs)while(true){f=a.fs;if(f<=a.fS)break;a.fs=f-20|0;b=a.g0;g=a.iD-1|0;a.iD=g;B1(b,Do(g),0.0,20.0);J8(a.cj,a.g0,0,a.fs%220|0);E3(a.g0);}else while(a.fs<(a.fS-20|0)){b=a.g0;g=a.iD+1|0;a.iD=g;B1(b,Do((g+11|0)-1|0),0.0,20.0);J8(a.cj,a.g0,0,a.fs%220|0);E3(a.g0);a.fs=a.fs+20|0;}b=Ir(0,0,BU(a.cj),CT(a.cj));IR(b,
0,0,BU(a.cj),CT(a.cj));HS(b,a.g8.data[0]);Fw(b,a.g8.data[1]);ER(b,a.eU,a.cj,400,0);g=a.fS%220|0;f=Be(CT(a.cj)-g|0,200);d=Ir(0,0,BU(a.cj),f);IR(d,0,g,BU(a.cj),f);HS(d,a.g8.data[0]);Fw(d,a.g8.data[1]);ER(d,a.eU,a.cj,0,0);h=Ir(0,f,BU(a.cj),(CT(a.cj)-f|0)-20|0);IR(h,0,0,BU(a.cj),(CT(a.cj)-f|0)-20|0);HS(h,a.g8.data[1]);Fw(h,a.g8.data[0]);ER(h,a.eU,a.cj,0,0);}
function AZH(a,b,c){Ct(a.mw,b);}
function A3X(a,b){return 0;}
function AA8(a){return 5000-a.mw.b|0;}
function KM(){Dx.call(this);this.el=0;}
function AAO(a){var b,c;b=a.C.bH;c=new Vd;c.yy=a;So(b,c,XA(a));}
function Rb(a){var b,c,d,e;b=a.el+1|0;a.el=b;c=Kb(F(KM));d=new J;L(d);H(H(V(H(d,C(270)),b),C(29)),c);e=K(d);c=a.C.bH;d=new WM;d.yK=e;Uq(c,e,d,XA(a));}
function XA(a){var b;b=new ZZ;b.CT=a;return b;}
function ARJ(a,b,c,d){a:{switch(c){case 0:break;case 2:Rb(a);break a;default:break a;}AAO(a);}return 1;}
function Tj(){var a=this;Dx.call(a);a.va=null;a.gG=null;a.lV=null;a.pS=null;a.wI=null;}
function AWX(a){var b,c,d,e,f,g,h,i;if(a.lV===null){b=a.C.R;c=a.wI;d=II(b,c.iq,Cj(c.he,a.re));Cr(b.cn,d);e=C5(Ev(b.cn,C(271)));f=Bj();g=d.pv;c=new J;L(c);Df(H(c,C(272)),g);Bf(f,K(c));h=NK(d,1.1799999475479126);c=Bj();i=new J;L(i);V(H(V(H(i,C(273)),e),C(173)),h);Bf(c,K(i));c=H1(b,e,h);a.pS=c;Cr(c,d);B1(a.pS,C(271),0.0,d.ew);b=C3(b);a.lV=b;CS(b,a.pS);F3(a.gG,a.lV);Gc(a.gG);b=a.gG.br;FW();BL(b,A$1);BL(a.gG.bc,A_J);}b=a.C.R;EU(b,a.va);c=a.gG;i=c.w;f=a.hc;e=f.a;c=c.u;Y(i,(e-c.a|0)/2|0,(f.b-c.b|0)/2|0);ER(a.gG,b,
a.lV,0,0);}
function Hn(){var a=this;Cz.call(a);a.v9=null;a.cq=null;a.ej=null;a.dx=null;a.fy=null;a.eT=null;}
function Pc(a,b){var c,d;Et(a,b);a.v9=Cs(20);a.cq=Tf();a.ej=new Bh;a.dx=new Bh;a.fy=new Bh;a.eT=new Bh;c=b.n.bA;d=new ADn;d.EK=a;Z(c,d);Z(b.n.bY,a);b=a.cq.br;FW();BL(b,A$1);BL(a.cq.bc,A_J);}
function AGA(a){var b,c,d;b=a.C.R;EU(b,a.v9);c=a.cq;d=c.w;Bv(b,d.a,d.b,c.u,c.br);Ca(b,1);c=a.cq;d=c.w;AFw(b,d.a,d.b,c.u,a.ej,a.dx,a.fy,a.eT,c.bc);Ca(b,0);}
function A1L(a,b){return 0;}
var Ud=G(Hn);
function A3I(a,b,c){var d,e,f;d=a.cq;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);Y(a.ej,0,0);Y(a.dx,Be(b.a,b.b),Be(b.a,b.b));b=a.fy;d=a.ej;Y(b,d.a,d.b+20|0);b=a.eT;d=a.dx;Y(b,d.a,d.b+40|0);}
function A4I(a,b){var c,d,e;Ct(a.ej,b.j);b=a.dx;c=a.cq;d=c.w;e=d.a;c=c.u;Y(b,e+(c.a/2|0)|0,d.b+(c.b/2|0)|0);b=a.fy;c=a.ej;Y(b,c.a,c.b+20|0);b=a.eT;c=a.dx;Y(b,c.a,c.b+40|0);return 0;}
function Uc(){var a=this;Hn.call(a);a.ge=null;a.gH=null;}
function A6i(a,b){var c;c=a.dx;b=b.j;c.b=b.b-50|0;a.eT.b=b.b+100|0;return 1;}
function APl(a){var b,c,d,e,f,g,h;b=Bd(a.ej.a,a.fy.a);c=Be(a.dx.a,a.eT.a);d=Be(a.ej.b,a.dx.b)-50|0;e=Bd(a.fy.b,a.eT.b)+50|0;Hz(a.cq,b,d,c-b|0,e-d|0);AGA(a);f=a.cq.w.a-10|0;ABA(a,a.C.R,10,f,a.ej,a.fy);g=a.cq;h=g.w.a+g.u.a|0;ABA(a,a.C.R,h,f,a.dx,a.eT);}
function ABA(a,b,c,d,e,f){var g;Y(a.ge,c,a.cq.w.b);Y(a.gH,d,e.b-a.cq.w.b|0);g=a.ge;Bv(b,g.a,g.b,a.gH,a.cq.br);Y(a.ge,c,e.b);Y(a.gH,d,f.b-e.b|0);e=a.ge;Bv(b,e.a,e.b,a.gH,a.cq.bc);Y(a.ge,c,f.b);e=a.gH;g=a.cq;Y(e,d,(g.w.b+g.u.b|0)-f.b|0);e=a.ge;Bv(b,e.a,e.b,a.gH,a.cq.br);}
function AN0(a,b,c){}
function W4(){var a=this;Cq.call(a);a.Ds=3;a.w_=null;a.kr=null;a.qT=0;}
function ARl(a,b,c){var d,e;if(b===0.0){DV(a.v,ZM(a));d=TP(a,0.5,0,C(274));e=a.q.bT;EE(DV(a.v,d),BK(e.a/10|0,e.b/10|0),BK((e.a*6|0)/10|0,(e.b*6|0)/10|0));}}
function ZM(a){var b,c,d,e,f,g;b=a.qT+1|0;a.qT=b;c=new J;L(c);V(H(c,C(275)),b);c=TP(a,1.0,1,K(c));d=a.q.bT;e=d.a/10|0;f=e+Ec(a.kr,e)|0;e=d.b/20|0;e=e+Ec(a.kr,e)|0;b=d.a;b=((b*7|0)/10|0)+Ec(a.kr,b/10|0)|0;g=d.b;g=((g*7|0)/10|0)+Ec(a.kr,g/10|0)|0;EE(c,BK(f,e),BK(b,g));return c;}
function TP(a,b,c,d){var e,f,g;e=AFI(a.q);if(d===null)f=new AEU;else{f=new AEW;f.vp=e;f.vq=d;}g=new QO;Md(g);g.mD=new B4;g.qi=new Bh;g.zd=f;g.sC=b;if(c){d=G2(g,a.q);JC(d,A_K,A_L);g=d;}LA(e,g);Eq(e,Ft());ABt(e,a.w_,3.0);d=new AEV;d.rc=a;d.rd=e;Uf(e,d);return e;}
function Ey(){Cq.call(this);this.i1=null;}
function A8w(a){var b=new Ey();Ky(b,a);return b;}
function Ky(a,b){Go(a,b);Z(a.q.dh,a);BL(a.c3,Cs(43));}
function AZb(a){return AXd();}
function AR5(a){return 1;}
function AC8(a,b){Eq(a.i1,b);}
function AKa(a,b){var c,d,e;c=a.q.bT;d=!a.p0()?0:ADK(b);e=c.b-d|0;EE(b,BK(c.a/20|0,d+(e/20|0)|0),BK((c.a*9|0)/10|0,(e*9|0)/10|0));}
function A4o(a,b,c){if(b===0.0){a.i1=A54(a.q,a.jK());AC8(a,Ft());if(a.p0())CW(a.i1,HT(BG(a)));DV(a.v,a.i1);a.of(a.i1);}}
function Q9(){var a=this;Ey.call(a);a.mx=null;a.gr=null;}
function AOB(a){var b;b=GW(a.mx);a.gr=b;AL_(b);Nn(a.q,a.gr);return a.gr;}
function AXN(a){return 0;}
function A6k(a,b){AKa(a,b);JL(a);}
function AU4(a,b){BD(b);F5(a.mx,b);E8(a.gr,b);AC8(a,b.b$);}
function AUi(a,b){GT(a.v,b);}
function X1(){B.call(this);this.xu=null;}
function A4c(a,b){D7(a.xu,null);return 0;}
function AAx(){var a=this;Ey.call(a);a.pC=null;a.mC=null;}
function AQP(a){var b,c,d,e,f,g;b=AMt(a.q);a.mC=b;OJ(b,a.pC);b=Il(C(276),1);c=new SQ;c.uW=a;b.cX=c;ET(b);c=Il(C(277),1);d=new SP;d.yG=a;c.cX=d;ET(c);e=Il(C(276),1);d=new SS;d.zm=a;e.cX=d;ET(e);f=Il(C(277),1);d=new SR;d.CX=a;f.cX=d;ET(f);d=AL0(C(278),0,I(C_,[b,c]));Ie(d);g=AL0(C(279),0,I(C_,[e,f]));Ie(g);D5(a.mC.dI,d);D5(a.mC.dG,g);return a.mC;}
function AB6(a){var b,c;b=a.v.Y.ct;c=new U6;c.AK=a;Gs(b,c);}
function AEF(a){var b,c;b=a.v.Y.ct;c=new Zy;c.yl=a;Gs(b,c);}
function AEY(a){var b,c;b=a.v.Y.ct;c=new PQ;c.xe=a;FY(b,c);}
function AAf(a){var b,c;b=a.v.Y.ct;c=new P5;c.EA=a;FY(b,c);}
function Tz(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bj();f=HT(BG(d[c]));g=BT(d[c]);h=new J;L(h);H(H(H(H(V(H(h,C(280)),c),C(281)),f),C(29)),g);Bf(e,K(h));c=c+1|0;}}
function UK(){Cq.call(this);this.hj=null;}
function Ok(){return EL(1);}
function Z8(a){var b,c,d,e;b=new Z$;c=a.hj;Kx(b,a.v,c,new Wc);d=AMt(b.bj.Y);b.dW=d;OJ(d,c);c=Il(C(282),0);d=Il(C(283),0);ET(c);ET(d);e=new Tv;e.ty=b;c.cX=e;e=new Tt;e.v4=b;d.cX=e;D5(b.dW.dI,c);D5(b.dW.dG,d);d=KZ(b,b.dW,0.0);b.jc=d;c=new Tu;c.yv=b;d.iU=c;c=new Ts;c.F2=b;d.iQ=c;DV(b.bj,d);}
function AWG(a,b,c){if(b===0.0)Z8(a);}
function ZN(){var a=this;Ey.call(a);a.lS=null;a.wL=null;}
function A2q(a){var b,c,d,e;b=UM(a.q);a.lS=b;BD(b);c=new Uh;c.tL=b;b=Qd(C(284),4,c);d=Bj();e=Pf(b);c=new J;L(c);V(H(c,C(285)),e);Bf(d,K(c));D5(a.lS,b);Ku(a.lS,a.wL);b=a.lS;return J2(b,G2(b,a.q));}
function A3R(a,b){var c;c=a.q.bT;EE(b,BK(c.a/30|0,c.b/10|0),BK((c.a*3|0)/10|0,(c.b*8|0)/10|0));}
function ADI(){var a=this;Cz.call(a);a.tQ=null;a.nb=null;a.fq=null;a.pp=null;a.na=0.0;a.hr=null;a.xd=null;a.uD=null;a.y6=null;a.zQ=null;a.sS=null;a.qX=null;a.Do=null;a.xD=null;a.l0=null;}
var A_M=0;function A78(a){var b=new ADI();AWJ(b,a);return b;}
function AWJ(a,b){var c,d,e;Et(a,b);a.tQ=new B4;a.nb=AE7(1.0,0.0,0.0,1.0);a.fq=Tf();a.pp=new Bh;a.na=3.1415927410125732;c=ALn();a.hr=c;a.xd=HY(c,1.25);a.uD=HY(a.hr,1.3333333730697632);a.y6=HY(a.hr,1.5);a.zQ=HY(a.hr,1.6666666269302368);a.sS=HY(a.hr,2.0);a.qX=AE7(a.na/24.0,15.0,3.0,0.5);c=AE7(a.na/12.0,25.0,3.0,0.5);a.Do=c;a.xD=D6([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.l0=I(B4,[a.hr,a.xd,a.uD,a.y6,a.zQ,a.sS,a.qX,c]);c=b.n.bA;d=new Rz;d.Gw=a;Z(c,d);Z(b.n.bY,a);b=a.fq.bc;FW();BL(b,A$1);Hz(a.fq,0,0,600,60);e
=NA(0.5,0.375);JH(0.375,e);JH(0.375,JH(3.0,NA(e,3.0)));HY(ALn(),3.0);}
function A6c(a,b,c){var d,e,f;Ct(a.pp,b);d=a.fq;e=d.w;f=b.a;d=d.u;Y(e,(f-d.a|0)/2|0,(b.b-d.b|0)/2|0);}
function HY(b,c){var d;d=new B4;VW(b,c,d);return d;}
function ALn(){var b;b=new B4;L2(b);return b;}
function A0M(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.C.R;EU(b,a.tQ);Ca(b,1);c=a.fq;d=c.w.a;e=c.u.b/2|0;f=0;while(true){g=a.l0.data;if(f>=g.length)break;h=a.xD.data[f];c=g[f];i=X3(c);j=a.fq;k=j.w;l=k.a;m=k.b;MC(b,l,m+h|0,j.u,d+i,((m+e|0)+h|0)+i,c,a.nb);f=f+1|0;}if(A_M){c=A7Z(1,2);n=0;while(n<1000){h=Ec(c,a.l0.data.length);l=Ec(c,a.pp.b-a.fq.u.b|0);j=a.l0.data[h];i=j.bu;i=i-(i|0)>=0.25?0.0:0.5;k=a.fq;MC(b,k.w.a,l,k.u,d+i,(e+l|0)+i,j,a.nb);n=n+1|0;}}Ca(b,0);}
function AUN(a,b){return A_M;}
function RW(){var a=this;Cq.call(a);a.m1=null;a.mz=null;}
function A0p(a,b,c){if(b===0.0)Lp(a);}
function Lp(a){var b,c,d;b=A7V(a.v,a.m1,new Pp);Z(a.mz,b);c=a.mz;BD(c);d=new Pq;d.BA=c;b.ra=d;C2(b.bj.Y,b.eR);return b;}
var Pk=G(KU);
function AYP(a){return EL(1);}
function SA(){Cq.call(this);this.nx=null;}
function AZI(a,b,c){if(b===0.0)AC2(a);}
function AC2(a){AEh(new L_,a.v,a.nx,new AEi);}
function Qe(){var a=this;Ey.call(a);a.v8=null;a.f0=null;}
function AJ2(){var b;b=I(Mx,[NP(1,3,4,5,1),NP(5,6,10,2,2),NP(12,2,13,3,3),NP(15,3,17,2,4)]);return A80(P(GL,0),P(GL,0),b);}
function AZ1(a){var b,c,d,e;b=AMt(a.q);a.f0=b;OJ(b,a.v8);c=a.f0.dI;BD(c);d=new ACi;d.rI=c;b=Qd(C(284),4,d);d=a.f0.dG;BD(d);e=new ACj;e.ua=d;c=Qd(C(284),4,e);D5(a.f0.dI,b);D5(a.f0.dG,c);AB5(a.f0,AJ2());return a.f0;}
function Kz(){var a=this;B.call(a);a.C4=null;a.eq=null;a.vA=null;a.Er=null;a.tx=null;a.ll=null;a.r1=null;a.xj=null;a.l6=null;a.l1=null;a.gK=null;}
function A_N(a,b,c,d,e,f,g,h,i,j,k){var l=new Kz();MW(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function MW(a,b,c,d,e,f,g,h,i,j,k,l){a.C4=b;a.eq=c;a.vA=d;a.Er=e;a.tx=f;a.ll=g;a.r1=h;a.xj=i;a.l6=j;a.l1=k;a.gK=l;}
function AG4(){B.call(this);this.F_=null;}
function AK8(a){var b=new AG4();AXB(b,a);return b;}
function AXB(a,b){a.F_=b;}
var AF2=G(0);
function AJx(){var a=this;B.call(a);a.px=null;a.lt=null;a.yC=null;a.q2=null;}
function ALV(a,b,c,d){var e=new AJx();A6p(e,a,b,c,d);return e;}
function A6p(a,b,c,d,e){a.px=b;a.lt=c;a.yC=d;a.q2=e;}
var AHu=G(0);
function Ft(){var b,c,d;b=new Ji;c=new Jp;A17();d=A_O;O9(c,d,A_P,A_Q,A_R,A_S,d);Mi(b,c,AIT(),AI3(S(C(286)),S(C(245)),S(C(246))),AIT(),AJq(1,0.125),A_T,A_U);return b;}
function AIT(){var b,c;b=new KK;c=S(C(287));A17();Lw(b,c,A_V,A_W);return b;}
function AIw(){var b,c;b=new KK;c=S(C(246));AXM();Lw(b,c,A_X,A_Y);return b;}
function AMG(){var b,c;b=new KK;AIo();c=A_Z;AXY();Lw(b,c,A_0,A_1);return b;}
function AJd(){var a=this;B.call(a);a.Ap=null;a.xt=null;a.vK=null;a.rb=null;}
function AFE(a,b,c,d){var e=new AJd();AYd(e,a,b,c,d);return e;}
function AYd(a,b,c,d,e){a.Ap=b;a.xt=c;a.vK=d;a.rb=e;}
function AFs(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.ee.xt;break a;case 3:if(c!=3){b=b.ee.rb;break a;}b=b.ee.vK;break a;default:b=b.bw.eq;break a;}b=b.ee.Ap;}return b;}
function Km(a,b,c){return AFs(a,b,0,c);}
function M2(){var a=this;B.call(a);a.mk=null;a.kO=null;}
function Xg(a,b){var c;c=a.kO;a.kO=b;return c;}
function K7(){var a=this;M2.call(a);a.b0=null;a.b_=null;a.g3=0;a.ha=0;}
function Nv(a){var b;b=LT(a);if(b==2){if(LT(a.b_)<0)a.b_=PM(a.b_);return QS(a);}if(b!=(-2))return a;if(LT(a.b0)>0)a.b0=QS(a.b0);return PM(a);}
function LT(a){var b,c;b=a.b_;c=b===null?0:b.g3;b=a.b0;return c-(b===null?0:b.g3)|0;}
function PM(a){var b;b=a.b0;a.b0=b.b_;b.b_=a;Fc(a);Fc(b);return b;}
function QS(a){var b;b=a.b_;a.b_=b.b0;b.b0=a;Fc(a);Fc(b);return b;}
function Fc(a){var b,c,d;b=a.b_;c=b===null?0:b.g3;b=a.b0;d=b===null?0:b.g3;a.g3=Bd(c,d)+1|0;a.ha=1;b=a.b0;if(b!==null)a.ha=1+b.ha|0;b=a.b_;if(b!==null)a.ha=a.ha+b.ha|0;}
var AMJ=G();
function AOv(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Ze;c=c.buffer;d.gC=c;d.qP=new $rt_globals.Int8Array(c);d.m3=new $rt_globals.Uint16Array(c);d.Bs=new $rt_globals.Int32Array(c);d.sZ=new $rt_globals.Float32Array(c);d.th=new $rt_globals.Float64Array(c);e=d.gC.byteLength;c=new J;L(c);V(H(c,C(288)),e);CZ(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(289)),e);CZ(K(c));f=b.callToCpp2();c=new J;L(c);Df(H(c,C(290)),f);CZ(K(c));c=Pz(d,b.getC8String());g=new J;L(g);H(H(g,C(291)),c);CZ(K(g));c
=XF(d,b.getC16String());g=new J;L(g);H(H(g,C(292)),c);CZ(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gC,h,8));c=AHU(i);g=new J;L(g);H(H(g,C(293)),c);CZ(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gC,h,8));c=AUV(j);g=new J;L(g);H(H(g,C(294)),c);CZ(K(g));k=AKG(d,b.getCDoubleArray8(),8);l=AW4(k);c=new J;L(c);H(H(c,C(295)),l);CZ(Em(c));l=AW0(b.getC8String(),C(296),d);c=My();H(H(c,C(297)),l);CZ(Em(c));l=ASz(b.getC16String(),C(298),
d);c=My();H(H(c,C(299)),l);CZ(Em(c));c=A3f(i,d,b.getCIntArray8(),D6([11,22,33,44,55,66,77,88]));g=My();H(H(g,C(300)),c);CZ(Em(g));c=AU7(j,d,b.getCFloatArray8(),100,D6([111,222,333,444,555,666,777,888]));g=My();H(H(g,C(301)),c);CZ(Em(g));b=A4G(k,d,b.getCDoubleArray8(),1000,D6([1111,2222,3333,4444,5555,6666,7777,8888]));c=My();H(H(c,C(302)),b);CZ(Em(c));}
function AU7(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(303);h=0;i=e;a:{while(h<g){if(C5(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.sZ[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(304);}return C(305);}
function A4G(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(303);h=0;i=e;a:{while(h<g){if(G1(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.th[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(304);}return C(305);}
function A3f(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(303);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Bs[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(304);}return C(305);}
function AW0(b,c,d){var e,f,g,h;e=Pz(d,b);if(!Bk(c,e))return C(306);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.qP[h])return C(307);f=f+1|0;}return C(304);}
function ASz(b,c,d){var e,f,g,h;e=XF(d,b);if(!Bk(c,e))return C(306);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.m3[h>>>1|0]&65535))return C(307);f=f+1|0;}return C(304);}
function CZ(b){Zc(C(2),b);}
function ARD(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function Zu(){B.call(this);this.si=null;}
function AYx(a,b){return AKH(a.si,b);}
function Zs(){B.call(this);this.Cz=null;}
function A0f(a,b){AKW(a.Cz,b);}
function Zt(){B.call(this);this.yS=null;}
function AVq(a,b){b=b;return AF0(a.yS,b);}
function AI$(){KJ.call(this);this.dF=null;}
function Ld(){var a=new AI$();A5W(a);return a;}
function Ir(a,b,c,d){var e=new AI$();A1i(e,a,b,c,d);return e;}
function A5W(a){ADi(a);a.dF=new B4;}
function A1i(a,b,c,d,e){ADi(a);a.dF=new B4;Hz(a,b,c,d,e);}
function Gc(a){var b,c;b=a.u;c=a.dF;Y(b,c.bh-c.bq|0,c.bC-c.bu|0);}
function F3(a,b){IR(a,0,0,BU(b),CT(b));}
function IR(a,b,c,d,e){Cv(a.dF,b,c,d,e);}
function ER(a,b,c,d,e){var f;f=a.w;DQ(b,f.a+d|0,f.b+e|0,a.u,a.dF,c,a.bc,a.br,0);}
function TF(a,b,c,d){var e;e=a.w;DQ(b,e.a,e.b,a.u,a.dF,c,a.bc,a.br,d);}
function IP(a,b,c,d,e,f,g){DQ(b,c,d,a.u,a.dF,e,!f?a.bc:a.br,!f?a.br:a.bc,g);}
function HS(a,b){BL(a.bc,b);}
function Fw(a,b){BL(a.br,b);}
function UL(){B.call(this);this.fF=null;}
function AYN(a,b){var c,d,e,f,g,h;c=b.j;d=c.a;e=a.fF.hJ;f=e.u;d=d-f.a|0;g=c.b-f.b|0;Y(e.w,d,g);c=a.fF;e=c.C.bH;b=b.j;d=0;a:{while(true){h=c.jj.data;if(d>=h.length)break;if(Fp(h[d],b)){b=c.q0.data[d];break a;}d=d+1|0;}b=null;}AAR(e,b);return 1;}
function ANo(a,b,c,d){if(!c&&d==2){b=a.fF;Tg(b,b.es);}return 1;}
function AYG(a,b,c){var d,e;d=Bj();e=new J;L(e);V(H(e,C(308)),c);Bf(d,K(e));if(c)return null;d=b.j;e=!Fp(a.fF.es,d)?null:d;U7(a.fF.jU,d.a,d.b);b=a.fF;ZB(b.jU,Nl(b.C.bH));if(e===null)b=A$8;else{b=new ADu;b.ts=a;b.tt=e;}return b;}
function AX6(a,b,c){var d;b=Bj();d=new J;L(d);V(H(d,C(309)),c);Bf(b,K(d));return 1;}
function ZV(){B.call(this);this.De=null;}
function A45(a,b){return X0(a.De,b);}
function ZU(){B.call(this);this.sX=null;}
function A3k(a,b){return X0(a.sX,b);}
function ZT(){B.call(this);this.EG=null;}
function A1s(a,b,c){var d,e;Bf(Bj(),C(310));d=!c?C(311):C(54);e=new J;L(e);H(H(H(e,C(312)),d),C(313));AD1(b,K(e));return 1;}
function ZS(){B.call(this);this.Fj=null;}
function AXC(a){Bf(Bj(),C(314));}
function ZR(){B.call(this);this.FM=null;}
function ATy(a,b){Bf(Bj(),C(315));return 1;}
function ZQ(){B.call(this);this.BW=null;}
function A4_(a,b,c,d){var e,f,g;b=a.BW;e=( -d|0)/10|0;b=b.es;f=b.u;f.a=f.a+e|0;f.b=f.b+e|0;b=b.w;g=b.a;e=e/2|0;b.a=g-e|0;b.b=b.b-e|0;return 1;}
function HD(){var a=this;B4.call(a);a.hD=0;a.hG=0;a.hE=0;a.hF=0;}
function Cs(a){var b=new HD();AWP(b,a);return b;}
function DE(a,b,c){var d=new HD();AZB(d,a,b,c);return d;}
function S(a){var b=new HD();A4s(b,a);return b;}
function Fa(a,b,c,d){var e=new HD();Si(e,a,b,c,d);return e;}
function B0(a){var b=new HD();Lj(b,a);return b;}
function AWP(a,b){Si(a,b,b,b,255);}
function AZB(a,b,c,d){Si(a,b,c,d,255);}
function A4s(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hD=KN(Q(b,1))*17|0;a.hG=KN(Q(b,2))*17|0;a.hE=KN(Q(b,3))*17|0;a.hF=255;}else{a.hD=Mg(Q(b,1),Q(b,2));a.hG=Mg(Q(b,3),Q(b,4));a.hE=Mg(Q(b,5),Q(b,6));a.hF=M(b)!=9?255:Mg(Q(b,7),Q(b,8));}IX(a.hD,a.hG,a.hE,a.hF,a);return;}}
function Si(a,b,c,d,e){a.hD=b;a.hG=c;a.hE=d;a.hF=e;IX(b,c,d,e,a);}
function Lj(a,b){a.hD=b.hD;a.hG=b.hG;a.hE=b.hE;a.hF=b.hF;BL(a,b);}
function KN(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mg(b,c){return (16*KN(b)|0)+KN(c)|0;}
var AH8=G(0);
function EL(b){return !b?I(BC,[C(157),C(168),C(316)]):I(BC,[C(157),C(168),C(316),C(34)]);}
function Xw(){B.call(this);this.my=null;}
function APX(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.my.dt;e=DX();f=e-0.5+(DX()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+DX()*0.3;h=0.5+DX()*0.5;IN(e,g,h,1.0,b.bc);IN(f,g,h,1.0,b.br);b=a.my;BL(b.d6.bc,b.dt.bc);b=a.my;BL(b.d6.br,b.dt.br);}return 1;}
function Xs(){var a=this;B.call(a);a.oh=null;a.oK=null;}
function AHv(){var a=this;B.call(a);a.gi=null;a.cx=null;a.g$=null;a.h$=null;a.op=null;a.cR=null;a.hX=null;a.c9=0;a.gl=0;a.oH=0;a.kK=0;a.kY=0;a.h4=0;a.le=null;a.pD=null;a.xB=null;a.od=null;}
function ALb(){var a=new AHv();AVe(a);return a;}
function AVe(a){a.cx=Tf();a.g$=new Bh;a.h$=new Bh;a.cR=A_2;a.kK=(-1);a.kY=1;}
function NQ(a,b){OC(a);a.cR=b;}
function J1(a,b,c){a.gi=b;ADV(a,c);OC(a);}
function J3(a,b){var c;a.op=b.lT;c=b.pG.qk;BL(a.cx.bc,c);c=b.jy.j1;BL(a.cx.br,c);a.od=b.pG;}
function Nk(a){a.hX=BY(a.hX,null);Y(a.g$,0,0);a.cR=A_2;a.kK=(-1);ACg(a.cx);}
function ADV(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KH(b);d=b.cl;BD(a.gi);Cr(c,a.gi);e=NK(a.gi,1.25);f=0;a.c9=Cj(2.0,d);a.gl=Cj(3.0,d);a.oH=Cj(12.0,d);g=0;h=a.cR.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=LD(c,l.n4);n=a.oH;n=(n+m|0)+n|0;f=Bd(f,n);b=l.fu;b.a=g;b.b=0;b=l.eD;b.a=n;b.b=e;Cv(l.kG,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.g$;b.a=g;b.b=e;b=a.cx.u;n=a.h4;if(!n){m=a.c9;m=(g+m|0)+Bc(m,a.cR.data.length)|0;}else m=(f+(a.c9*2|0)|0)+(a.gl*2|0)|0;b.a=m;if(!n)e=e+(a.c9*2|0)|0;else{n=a.c9;e=(Bc(e+n|0,a.cR.data.length)+n
|0)+(a.gl*2|0)|0;}b.b=e;}
function NL(a,b,c){var d,e,f,g,h,i,j;Y(a.cx.w,b,c);d=a.c9+a.gl|0;e=a.cR.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fu;j.a=b+d|0;j.b=c+h|0;if(!a.h4){if(!i.eD.a)AFP();d=d+(i.eD.a+a.c9|0)|0;}else{if(!i.eD.b)AFP();h=h+(i.eD.b+a.c9|0)|0;}g=g+1|0;}}
function AFP(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function EM(a){var b,c;b=a.g$;if(b.a&&b.b)return a.cx.u;c=new Bt;Bp(c,C(317));N(c);}
function OC(a){a.kY=1;}
function ME(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bM;if(!a.cR.data.length)return;if(a.hX===null)a.hX=C3(c);a:{if(!a.kY){d=a.g$;if(Bc(d.a,d.b))break a;}d=a.g$;if(!Bc(d.a,d.b))ADV(a,b);d=a.g$;e=d.a;f=d.b;if(!Bc(e,f))return;d=Eb(c,e,f,b.cM);Cr(d,a.gi);g=NK(a.gi,0.125);h=a.gi;i=h.ew;g=g+i-(i+h.eP)/16.0;j=a.cR.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.n4,h.kG.bq+a.oH,g);f=f+1|0;}CS(a.hX,d);a.kY=0;EK(d);}if(!LB(a.cx)){d=a.cx;AKq(c,d.u,d.w,d.br,a.c9,a.h$);d=a.cx;h=d.u;k=d.w;d=d.bc;e=a.c9;l=a.h$;l.a=(h.a-e|0)
-e|0;l.b=(h.b-e|0)-e|0;Bv(c,k.a+e|0,k.b+e|0,l,d);if(a.h4){d=a.cx;ALL(c,d.u,d.w,0,0,Zg(a.op,b.cl),a.op.ot,a.h$);}}j=a.cR.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fu;e=h.a;f=h.b;h=d.eD;k=d.kG;l=a.hX;o=a.od;DQ(c,e,f,h,k,l,o.sm,Wg(o,d.lv),b.cM);n=n+1|0;}b:{if(a.h4){j=a.cR.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.h$;e=(a.cx.u.a-(a.c9*2|0)|0)-(a.gl*2|0)|0;h=d.eD;e=e-h.a|0;b.a=e;b.b=h.b;if(e>0){k=d.fu;Bv(c,k.a+h.a|0,k.b,b,Wg(a.od,d.lv));}p=p+1|0;}}}}
function Oi(a,b,c){var d,e,f,g,h,i;d=Fp(a.cx,b);e=!d?(-1):P2(a,b);f=a.kK;if(f!=e){if(f>=0){g=a.cR.data[f];g.lv=0;if(a.xB!==null){h=Bj();g=BT(g);i=new J;L(i);H(H(V(H(i,C(318)),f),C(319)),g);Bf(h,K(i));}}if(e>=0){h=a.cR.data[e];g=a.pD;if(g!==null)g.xG(b,e,h);h.lv=1;}a.kK=e;}return d&&G3(c)?1:0;}
function OF(a,b,c,d){var e,f;e=P2(a,b);if(e>=0){f=a.cR.data[e];if(!ADl(f))f.ni.e();}return 1;}
function P2(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.cR.data;if(c>=d.length)return (-1);e=d[c];if(GB(b,e.fu,e.eD))return c;if(a.h4){f=e.fu;g=f.a;e=e.eD;h=e.a;g=g+h|0;i=f.b;f=a.h$;f.a=(a.cx.u.a-(a.c9*2|0)|0)-h|0;f.b=e.b;if(AF8(b,g,i,f))break;}c=c+1|0;}return c;}
function AFq(a){a.h4=1;}
function AKr(){var a=this;B.call(a);a.iq=null;a.he=0.0;a.ks=0;a.kI=0;}
function DB(a,b){var c=new AKr();ATO(c,a,b);return c;}
function ATO(a,b,c){a.iq=b;a.he=c;a.ks=400;a.kI=700;}
function A4l(a,b){if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){b=b;return a.he===b.he&&a.ks==b.ks&&a.kI==b.kI&&BR(a.iq,b.iq)?1:0;}return 0;}
function ACO(){B.call(this);this.vv=null;}
function ATa(a,b){var c;c=a.vv;if(b.bk==32)Nk(c.dP);return 0;}
function ACK(){B.call(this);this.wu=null;}
function AU9(a,b){var c,d,e,f;b=b;c=a.wu;d=Z6(c.q);HF(d,Ft(),c.o4);b=b.j;e=Sv(4);f=new VI;f.EH=c;M4(d,b,e,f);HV(c.v,d);return 1;}
var ACL=G();
function A6M(a){Bf(Bj(),C(320));}
var ACM=G();
function AN_(a){Bf(Bj(),C(321));}
function By(){var a=this;B.call(a);a.ni=null;a.kG=null;a.fu=null;a.eD=null;a.nE=null;a.uA=null;a.lv=0;a.n4=null;}
function Ya(a,b){var c=new By();Ce(c,a,b);return c;}
function A8L(a,b,c,d){var e=new By();AKQ(e,a,b,c,d);return e;}
function Ce(a,b,c){AKQ(a,b,c,null,null);}
function AKQ(a,b,c,d,e){a.kG=new B4;a.fu=new Bh;a.eD=new Bh;a.n4=c;a.uA=e;a.ni=b;a.nE=d;}
function ADl(a){return a.nE===null?0:1;}
function Vn(){B.call(this);this.DI=null;}
function A1m(a,b){return b.ka&&b.bk==32?1:0;}
function Vo(){B.call(this);this.Cg=null;}
function ANP(a,b){var c,d,e,f,g,h;b=b;c=a.Cg;d=Z6(c.q);HF(d,Ft(),DB(C(157),25.0));b=b.j;e=P(By,1);f=e.data;g=new By;h=new AFh;h.Cy=c;Ce(g,h,C(322));f[0]=g;M4(d,b,CN(e),A_3);HV(c.v,d);return 1;}
function AIQ(){var a=this;B.call(a);a.qu=0;a.qw=0;}
function VS(){var a=new AIQ();AV4(a);return a;}
function A7Z(a,b){var c=new AIQ();AMQ(c,a,b);return c;}
function AV4(a){AMQ(a,AMw(G_((AH5()))),G_((AH5()))^(-559038737));}
function AMQ(a,b,c){var d;a.qu=b;a.qw=c;d=0;while(d<19){N3(a);d=d+1|0;}}
function N3(a){var b,c;b=a.qu;c=a.qw;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.qu=c;a.qw=b;return b;}
function AMw(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function AL5(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Ec(a,b){return VU(a)*b|0;}
function VU(a){return 5.960464477539063E-8*(N3(a)&16777215);}
function RE(a,b){var c,d,e;c=AL5(N3(a));d=AU1( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function PD(){B.call(this);this.yW=null;}
function ATf(a,b,c){var d;d=a.yW;if(b===0.0)Ms(d,100);}
function PC(){B.call(this);this.wE=null;}
function A2O(a,b){var c,d,e;c=a.wE;d=b.bk;if(d==32){c.l3=c.l3?0:1;e=1;}else if(d==13){Ms(c,1);e=1;}else if(d!=8)e=0;else{Qc(c,1);e=1;}return e;}
var AAM=G(0);
function AJy(b,c){var d;d=new VN;d.yI=b;d.yH=c;return d;}
function AJE(){var a=this;B.call(a);a.hS=null;a.ir=0;a.mb=0;a.hz=0;}
function AJR(a){var b=new AJE();AP7(b,a);return b;}
function AP7(a,b){a.hS=BO();a.hz=0;a.mb=2048;a.ir=b;}
function KR(a,b,c){var d,e,f,g,h,i;d=c.An(b);e=a.mb;if(d>e){c=new Bt;f=new J;L(f);Br(V(H(V(H(f,C(323)),d),C(324)),e),41);Bp(c,K(f));N(c);}if(!a.ir){b=new BX;Bp(b,C(325));N(b);}a:{b=new B4;if(d){b:{c=a.hS;if(c.p>0){c=B9(c);g=d;while(true){if(!Cb(c))break b;f=Cc(c);if(f.bh>=g)break;}Cv(b,f.bq,f.bu,g,a.ir);f.bq=f.bq+g;h=f.bh-g;f.bh=h;if(h===0.0)AIt(a.hS,f);break a;}}g=a.hz;i=d;Cv(b,0.0,g,i,a.ir);BA(a.hS,AE7(i,a.hz,a.mb-d|0,a.ir));a.hz=a.hz+a.ir|0;}}return b;}
function Jk(a,b){var c,d,e,f,g,h,i;a:{c=AMO(b);b=a.hS;if(b.p>0){d=B9(b);while(true){if(!Cb(d))break a;e=Cc(d);if(e.bu===c.bu){f=e.bq;g=e.bh;h=f+g;i=c.bq;if(h===i){c.bq=f;c.bh=c.bh+g;AAt(d);}else{h=c.bh;if(i+h===f){c.bh=h+g;AAt(d);}}}}}}BA(a.hS,c);}
function Nc(a){return BK(a.mb,a.hz);}
function XH(){var a=this;B.call(a);a.sl=null;a.l7=null;}
function AXP(a,b,c){if(c)return A$8;return Gi(a.l7.jk,b.j,a.sl,1);}
function ANK(a,b,c){return 1;}
function AZU(a,b){var c;c=a.l7;return Gp(c.jk,b.j,c.yB);}
function AA7(){B.call(this);this.BM=null;}
function ATd(a,b,c,d){var e,f;b=a.BM;e=(Xk(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fe=Be(Bd(0,b.fe+Bc(e,f)|0),VK(b));return 1;}
function Rq(){B.call(this);this.tJ=null;}
function AS4(a,b){var c,d,e;c=a.tJ;if(b.cW&&b.bk==79){if(!b.bQ){b=c.C.bH;d=new X8;d.vT=c;FY(b,d);}else{b=c.C.bH;d=new X7;d.yh=c;Gs(b,d);}e=1;}else e=0;return e;}
function Sk(){B.call(this);this.yZ=null;}
function AWZ(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.yZ;d=c.v;e=Ft();f=DB(C(157),25.0);g=b.j;h=P(By,5);i=h.data;b=new By;j=new UV;j.r6=c;Ce(b,j,C(326));i[0]=b;b=new By;j=new UW;j.sQ=c;Ce(b,j,C(327));i[1]=b;b=new By;j=new UX;j.ut=c;Ce(b,j,C(328));i[2]=b;b=new By;j=new UY;j.yr=c;Ce(b,j,C(329));i[3]=b;b=new By;k=new UZ;k.yY=c;Ce(b,k,C(330));i[4]=b;Fv(d,e,f,g,CN(h));return 1;}
function Sj(){B.call(this);this.Bf=null;}
function A31(a,b){var c,d,e;c=a.Bf.C.bH;d=new YJ;e=P(B,1);e.data[0]=b;CO(c,d,C(331),e);}
function ACY(){B.call(this);this.nq=null;}
function A28(a,b){var c,d,e,f,g,h;c=a.nq;d=c.qU;if(d!==null){e=c.fc.w;f=e.a;g=b.j;e.a=f+(g.a-d.a|0)|0;e.b=e.b+(g.b-d.b|0)|0;c.qU=g;}b=b.j;f=b.a;c=c.gX;d=c.u;f=f-d.a|0;h=b.b-d.b|0;Y(c.w,f,h);return 1;}
function AWN(a,b,c){var d;if(!c){d=b.j;b=a.nq;if(!Fp(b.fc,d))d=null;b.qU=d;}return A$8;}
var AHD=G();
function AMV(b){var c,d;c=H1(b,250,64);HM(c,C(248),25.0);Kr(c,187,187,187);B1(c,C(332),0.0,24.0);B1(c,C(332),0.25,56.0);d=C3(b);CS(d,c);EK(c);return d;}
var Dl=G(0);
var A_i=null;var A_J=null;var A_j=null;var A$1=null;var A_l=null;var A_k=null;var A_n=null;var A_m=null;var A_p=null;var A_o=null;var A_q=null;function FW(){FW=Bm(Dl);AW1();}
function AW1(){A_i=Cs(187);A_J=S(C(333));A_j=Cs(55);A$1=Cs(43);A_l=DE(33,66,131);A_k=DE(60,63,65);A_n=S(C(334));A_m=S(C(335));A_p=Fa(85,85,85,128);A_o=Fa(43,43,43,0);A_q=S(C(234));}
function Zv(){var a=this;B.call(a);a.rk=null;a.mj=null;}
function ARf(a,b,c){var d;if(!c){d=Gi(a.mj.iV,b.j,a.rk,1);if(d!==null)return d;}return A$8;}
function AX3(a,b,c){return 1;}
function AP2(a,b){var c;c=a.mj;return Gp(c.iV,b.j,Sd(c.C.bH));}
function WW(){B.call(this);this.r4=null;}
function A48(a,b,c,d){var e,f;b=a.r4;e=(Xk(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fS=Be(Bd(0,b.fS+Bc(e,f)|0),AA8(b));return 1;}
function AEu(){B.call(this);this.xA=null;}
function APb(a,b){var c,d;a:{c=a.xA;switch(b.bk){case 67:Rb(c);d=1;break a;case 86:AAO(c);d=1;break a;default:}d=0;}return d;}
var AEt=G();
function A1z(a,b,c){return 0;}
function AEs(){B.call(this);this.s_=null;}
function APk(a,b,c){var d,e;d=a.s_;c=d.el+1|0;d.el=c;d=Kb(F(KM));e=new J;L(e);H(H(V(e,c),C(336)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));AD1(b,e);return 1;}
var AEr=G();
function ASs(a){return null;}
function AEv(){B.call(this);this.AY=null;}
function A4C(a){var b,c;b=a.AY;c=new WF;c.rg=b;return c;}
function S0(){B.call(this);this.EZ=null;}
function AWo(a,b){return 0;}
function P4(){B.call(this);this.Ah=null;}
function AND(a,b){var c;c=a.Ah;if(b.ka&&b.bk==27){b=OZ(c.v);if(b!==null){b=b.dp;if(b===null){b=new Gh;X(b);N(b);}b.jr.e();}}return 0;}
function P6(){B.call(this);this.wC=null;}
function A0H(a,b){var c,d,e,f,g,h,i;b=b;c=a.wC;d=Z6(c.q);HF(d,Ft(),DB(C(157),25.0));b=b.j;e=P(By,1);f=e.data;g=new By;h=c.v;i=new Yx;i.zP=c;Ce(g,DR(h,i),C(337));f[0]=g;M4(d,b,CN(e),A_3);HV(c.v,d);return 1;}
function P7(){B.call(this);this.Ct=null;}
function A26(a,b){var c,d,e;c=a.Ct;d=c.gr;if(d!==null){e=new ABY;e.C9=c;e.C$=b;F4(d,b,e);}}
function P8(){B.call(this);this.Ae=null;}
function A4Y(a,b){var c,d,e;b=b;c=a.Ae;if(DA(c.q,c.gr)){d=c.mx;b=b.j;e=c.gr;I0(d,b,e,c,e,c,new XY);}return 1;}
function Rs(){B.call(this);this.Cj=null;}
function ATW(a,b){var c,d,e,f,g,h,i,j,k;b=b;c=a.Cj;d=c.v;e=c.pC;f=e.b$;g=e.fL;h=b.j;i=P(By,4);j=i.data;b=new By;e=new Ye;e.sx=c;Ce(b,DR(d,e),C(338));j[0]=b;k=new By;b=c.v;e=new Yc;e.rV=c;Ce(k,DR(b,e),C(339));j[1]=k;b=new By;e=c.v;k=new Yb;k.uP=c;Ce(b,DR(e,k),C(340));j[2]=b;b=new By;e=c.v;k=new Yd;k.z6=c;Ce(b,DR(e,k),C(341));j[3]=b;Fv(d,f,g,h,CN(i));return 1;}
function Rr(){B.call(this);this.Ee=null;}
function AWC(a,b){return b.bk!=32?0:1;}
function AB7(){B.call(this);this.ro=null;}
function AT$(a,b){var c,d,e,f,g,h;b=b;c=a.ro;d=P(By,4);e=d.data;f=new By;g=c.v;h=new AAl;h.Br=c;Ce(f,DR(g,h),C(342));e[0]=f;g=new By;f=c.v;h=new AAk;h.sw=c;Ce(g,DR(f,h),C(343));e[1]=g;f=new By;h=c.v;g=new AAn;g.wY=c;Ce(f,DR(h,g),C(344));e[2]=f;f=new By;h=c.v;g=new AAm;g.vz=c;Ce(f,DR(h,g),C(345));e[3]=f;f=CN(d);h=c.v;c=c.hj;Fv(h,c.b$,c.fL,b.j,f);return 1;}
function Rz(){B.call(this);this.Gw=null;}
function ARK(a,b){return 0;}
function Ew(){var a=this;B.call(a);a.bj=null;a.hp=null;a.gw=null;}
function Kx(a,b,c,d){a.bj=b;a.gw=c;a.hp=d;}
function KZ(a,b,c){return Ua(a,b,HT(BG(a)),c);}
function Ua(a,b,c,d){var e,f,g,h,i,j,k;e=A54(a.bj.Y,b);Eq(e,a.gw.b$);CW(e,c);b=new Xr;b.wQ=a;b.wR=e;Uf(e,b);b=new Xq;b.xv=a;e.xJ=b;b=e.bg.bT;f=ADK(e);g=Cw(e.bg,5.0);h=Cw(e.bg,d);i=h?h+f|0:0;c=BK(g+h|0,(g+i|0)+f|0);j=new Bh;k=b.a;g=g*2|0;Ro(j,(k-g|0)-h|0,((b.b-f|0)-g|0)-i|0);EE(e,c,j);return e;}
function AJP(a,b){var c,d,e;c=a.mH(b);if(c!==null){d=a.bj;e=a.gw;Fv(d,e.b$,e.fL,b,c);}return c===null?0:1;}
function Kv(){var a=this;Ew.call(a);a.j5=null;a.k5=null;a.eR=null;a.sR=null;a.ra=null;}
function A7V(a,b,c){var d=new Kv();ADA(d,a,b,c);return d;}
function ADA(a,b,c,d){Kx(a,b,c,d);d=IT(b);a.k5=d;b=GW(d);a.eR=b;b=KZ(a,b,25.0);a.j5=b;d=new AEo;d.B3=a;b.iU=d;d=new AEn;d.rF=a;b.iQ=d;AM1(a,c);DV(a.bj,a.j5);}
function AM1(a,b){Eq(a.j5,b.b$);F5(a.k5,b);E8(a.eR,b);}
function Jh(a,b){var c,d;c=a.eR;C2(c.cc,c);c=a.eR;d=new QP;d.yQ=a;d.yP=b;F4(c,b,d);}
function AOL(a){var b;b=a.ra;if(b!==null)LP(b.BA,a);a.j5=null;a.eR=null;a.k5=null;}
function A0x(a,b){var c,d,e,f,g,h;c=new By;d=new AEH;d.C1=a;Ce(c,d,C(346));e=a.k5;f=a.eR;d=a.hp;g=a.bj;BD(g);h=new AEG;h.zf=g;return NC(Jx(e,f,d,a,f,h),b,c);}
function QC(){B.call(this);this.tO=null;}
function A5b(a,b){var c,d,e,f;c=a.tO;d=c.q.cB;e=0;a:{while(true){f=c.mz;if(e>=f.cK){f=null;break a;}f=E5(f,e);if(f.eR===d)break;e=e+1|0;}}if(f!==null)Jh(f,b);else Jh(Lp(c),b);}
function QB(){B.call(this);this.wd=null;}
function AZV(a,b){var c,d,e,f,g,h;b=b;c=a.wd;d=P(By,1);e=d.data;f=new By;g=c.v;h=new AD7;h.Ca=c;Ce(f,DR(g,h),C(345));e[0]=f;f=CN(d);g=c.v;c=c.m1;Fv(g,c.b$,c.fL,b.j,f);return 1;}
var AIC=G(0);
function AL_(b){Ig(b,A8h(C(347),C(193),ADg(C(348))));}
function Yz(){B.call(this);this.y9=null;}
function APF(a,b){var c,d,e,f,g,h;b=b;c=a.y9;d=P(By,1);e=d.data;f=new By;g=c.v;h=new SJ;h.yz=c;Ce(f,DR(g,h),C(344));e[0]=f;f=CN(d);g=c.v;c=c.nx;Fv(g,c.b$,c.fL,b.j,f);return 1;}
function Vs(){B.call(this);this.DF=null;}
function AT_(a,b){return 1;}
function Vr(){B.call(this);this.uN=null;}
function ATx(a,b){var c,d;c=a.uN;if(b.bk!=32)d=0;else{AB5(c.f0,AJ2());d=1;}return d;}
var Dr=G(0);
var A_r=null;var A_4=null;var A_t=null;var A_s=null;var A_v=null;var A_u=null;var A_x=null;var A_w=null;var A_z=null;var A_y=null;var A_A=null;function AP9(){AP9=Bm(Dr);AVp();}
function AVp(){A_r=Cs(206);A_4=S(C(349));A_t=S(C(350));A_s=S(C(241));A_v=S(C(351));A_u=S(C(230));A_x=S(C(352));A_w=S(C(353));A_z=Fa(107,106,107,128);A_y=Fa(30,31,34,0);A_A=S(C(243));}
function Cu(){CD.call(this);this.lw=null;}
var A_5=null;var A_6=null;var A_7=null;var A_8=null;var A_9=null;var A$$=null;var A_$=null;var A__=null;var Baa=null;var Bab=null;var Bac=null;var Bad=null;var Bae=null;var Baf=null;var Bag=null;var Bah=null;function UU(){UU=Bm(Cu);A1G();}
function D3(a,b,c){var d=new Cu();AA1(d,a,b,c);return d;}
function A8B(a,b,c,d){var e=new Cu();AEE(e,a,b,c,d);return e;}
function AG3(){UU();return Bah.dZ();}
function AA1(a,b,c,d){UU();Du(a,b,c);a.lw=J6(d,null);}
function AEE(a,b,c,d,e){UU();Du(a,b,c);a.lw=J6(d,e);}
function A1G(){var b,c;b=new Cu;AP9();AA1(b,C(354),0,A_4);A_5=b;A_6=D3(C(355),1,S(C(356)));A_7=D3(C(357),2,S(C(358)));A_8=D3(C(359),3,S(C(360)));A_9=D3(C(361),4,A_4);A$$=D3(C(362),5,S(C(363)));A_$=D3(C(364),6,S(C(365)));A__=D3(C(366),7,S(C(367)));Baa=D3(C(368),8,S(C(369)));c=new Cu;FW();AEE(c,C(370),9,A_J,S(C(352)));Bab=c;Bac=A8B(C(371),10,A_J,S(C(244)));Bad=D3(C(372),11,S(C(373)));Bae=D3(C(374),12,S(C(375)));Baf=D3(C(376),13,A_4);b=D3(C(377),14,S(C(378)));Bag=b;Bah=I(Cu,[A_5,A_6,A_7,A_8,A_9,A$$,A_$,A__,Baa,
Bab,Bac,Bad,Bae,Baf,b]);}
function KO(){var a=this;B.call(a);a.hl=null;a.nc=null;}
function J6(a,b){var c=new KO();A1$(c,a,b);return c;}
function A1$(a,b,c){a.hl=b;a.nc=c;}
function Ji(){var a=this;B.call(a);a.lT=null;a.t8=null;a.o_=null;a.Fm=3;a.jy=null;a.CJ=null;a.Gz=null;a.pG=null;a.nn=null;a.pk=null;}
function Bai(a,b,c,d,e,f,g){var h=new Ji();Mi(h,a,b,c,d,e,f,g);return h;}
function Mi(a,b,c,d,e,f,g,h){a.t8=DB(C(168),16.0);a.o_=DB(C(14),16.0);a.Fm=3;a.CJ=b;a.Gz=c;a.jy=d;a.pG=e;a.lT=f;a.nn=g;a.pk=h;}
function ALl(){var a=this;B.call(a);a.ot=null;a.t3=0;}
function AJq(a,b){var c=new ALl();A4q(c,a,b);return c;}
function A4q(a,b,c){var d;d=new B4;a.ot=d;a.t3=b;d.bC=c;}
function Zg(a,b){return Cj(a.t3,b);}
var DW=G(0);
var A_E=null;var A_F=null;var A_B=null;var A_C=null;var A_D=null;var A_X=null;var A_Y=null;var A_G=null;var A_H=null;function AXM(){AXM=Bm(DW);A2_();}
function A2_(){A_E=S(C(230));A_F=S(C(379));A_B=S(C(246));A_C=S(C(365));A_D=S(C(349));A_X=S(C(230));A_Y=S(C(380));A_G=S(C(381));A_H=DE(43,45,48);}
var Y4=G(0);
var Zd=G();
function A0j(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(382)),d),C(383)),e);CZ(K(b));return d+e|0;}
var Y5=G(0);
var Zb=G();
function A08(a,b,c){var d,e;d=b;e=c;b=new J;L(b);Df(H(Df(H(b,C(384)),d),C(383)),e);CZ(K(b));return d+e;}
var AGl=G();
var AJC=G(0);
function V_(){B.call(this);this.oP=null;}
var A_2=null;function TY(){var a=new V_();AJ_(a);return a;}
function AJ_(a){a.oP=BO();}
function EB(a,b,c){Nz(a,Db(b,c));}
function Db(b,c){return Ya(c,b);}
function Ij(a,b,c){L5(a,b,c,null);}
function L5(a,b,c,d){Nz(a,A8L(null,b,c,d));}
function Nz(a,b){BA(a.oP,b);}
function Je(a){return CN(GF(a.oP,A_2));}
function AJG(){A_2=P(By,0);}
var D1=G(0);
var A_R=null;var A_S=null;var A_O=null;var A_P=null;var A_Q=null;var A_V=null;var A_W=null;var A_T=null;var A_U=null;function A17(){A17=Bm(D1);A2P();}
function A2P(){A_R=S(C(239));A_S=S(C(385));A_O=S(C(287));A_P=S(C(386));A_Q=S(C(333));A_V=S(C(239));A_W=S(C(385));A_T=Fa(118,121,122,128);A_U=DE(63,66,68);}
var If=G(0);
var QM=G();
function A3Q(a,b,c,d){var e;b=Bj();d=BT(d);e=new J;L(e);H(H(V(H(e,C(387)),c),C(319)),d);Bf(b,K(e));}
var QN=G();
function UN(){B.call(this);this.Bb=null;}
function A2G(a,b){var c;c=a.Bb.l7;c.fe=F_(b,VK(c));}
function Qo(){B.call(this);this.EJ=null;}
function APR(a,b){var c,d,e,f;c=b.data;b=Bj();d=BT(c[0]);e=new J;L(e);H(H(e,C(388)),d);Bf(b,K(e));b=Bj();f=c[1];d=new J;L(d);H(H(d,C(389)),f);Bf(b,K(d));}
function Qn(){B.call(this);this.FI=null;}
function AOq(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(390)),e);Bf(d,K(f));g=E2(I6(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(37));Br(c,i[h]);h=h+1|0;}BM(c,C(38));c=K(c);}e=new J;L(e);H(H(H(H(e,C(391)),d),C(392)),c);Bf(b,K(e));}
function Qk(){B.call(this);this.GL=null;}
function ANw(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(393)),e);Bf(d,K(f));g=Y3(I6(b,1));b=Bj();d=BT(c[1]);if(g===null)c=C(23);else{c=new J;L(c);BM(c,C(36));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BM(c,C(37));V(c,i[h]);h=h+1|0;}BM(c,C(38));c=K(c);}e=new J;L(e);H(H(H(H(e,C(394)),d),C(395)),c);Bf(b,K(e));}
function Qi(){B.call(this);this.FS=null;}
function A6j(a,b){var c,d,e,f,g;c=b.data;d=Bj();e=BT(c[0]);f=new J;L(f);H(H(f,C(396)),e);Bf(d,K(f));g=CV(I6(b,1));b=Bj();d=BT(c[1]);c=AHU(g);e=new J;L(e);H(H(H(H(e,C(171)),d),C(397)),c);Bf(b,K(e));}
var AJi=G();
function VO(){B.call(this);this.uk=null;}
function A09(a,b){var c;c=a.uk.mj;c.fS=F_(b,AA8(c));}
function ADn(){B.call(this);this.EK=null;}
function AQX(a,b){return 0;}
function AMg(){var a=this;B.call(a);a.kP=null;a.pw=null;a.f7=null;a.Gl=null;}
function ADg(a){var b=new AMg();A4h(b,a);return b;}
function A4h(a,b){var c,d,e;c=null;d=null;e=null;a.kP=c;a.pw=d;a.f7=b;a.Gl=e;}
function ADz(a){var b,c;b=a.f7;if(b===null)return C(21);c=AGZ(b,C(398));return c==(-1)?a.f7:DC(a.f7,c+1|0);}
function AZf(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.kP,c.kP)&&BR(a.pw,c.pw)&&BR(a.f7,c.f7)?1:0;}return 0;}
function Jp(){var a=this;B.call(a);a.u6=null;a.rA=null;a.sb=null;a.BG=null;a.tq=null;a.lC=null;}
function Baj(a,b,c,d,e,f){var g=new Jp();O9(g,a,b,c,d,e,f);return g;}
function O9(a,b,c,d,e,f,g){a.u6=b;a.rA=c;a.sb=d;a.BG=e;a.tq=f;a.lC=g;}
function KK(){var a=this;B.call(a);a.sm=null;a.qk=null;a.vG=null;}
function Bak(a,b,c){var d=new KK();Lw(d,a,b,c);return d;}
function Lw(a,b,c,d){a.sm=b;a.qk=c;a.vG=d;}
function Wg(a,b){return !b?a.qk:a.vG;}
function AJ5(){var a=this;B.call(a);a.j1=null;a.mp=null;a.oE=null;}
function AI3(a,b,c){var d=new AJ5();A5o(d,a,b,c);return d;}
function A5o(a,b,c,d){a.j1=b;a.mp=c;a.oE=d;}
function Cx(){CD.call(this);this.or=null;}
var Bal=null;var Bam=null;var Ban=null;var Bao=null;var Bap=null;var Baq=null;var Bar=null;var Bas=null;var Bat=null;var Bau=null;var Bav=null;var Baw=null;var Bax=null;var Bay=null;var Baz=null;var BaA=null;function AGy(){AGy=Bm(Cx);A1c();}
function Ek(a,b,c){var d=new Cx();ACs(d,a,b,c);return d;}
function A4t(a,b,c,d){var e=new Cx();AID(e,a,b,c,d);return e;}
function ALc(){AGy();return BaA.dZ();}
function ACs(a,b,c,d){AGy();Du(a,b,c);a.or=J6(d,null);}
function AID(a,b,c,d,e){AGy();Du(a,b,c);a.or=J6(d,e);}
function A1c(){var b;b=new Cx;FW();ACs(b,C(354),0,A_J);Bal=b;Bam=Ek(C(355),1,S(C(399)));Ban=Ek(C(357),2,S(C(400)));Bao=Ek(C(359),3,S(C(401)));Bap=Ek(C(361),4,S(C(399)));Baq=Ek(C(362),5,DE(188,63,60));Bar=Ek(C(364),6,S(C(402)));Bas=Ek(C(366),7,S(C(403)));Bat=Ek(C(368),8,S(C(404)));Bau=A4t(C(370),9,A_J,DE(52,65,52));Bav=A4t(C(371),10,S(C(405)),S(C(406)));Baw=Ek(C(372),11,S(C(407)));Bax=Ek(C(374),12,S(C(408)));Bay=Ek(C(376),13,A_J);b=Ek(C(377),14,S(C(378)));Baz=b;BaA=I(Cx,[Bal,Bam,Ban,Bao,Bap,Baq,Bar,Bas,Bat,Bau,
Bav,Baw,Bax,Bay,b]);}
var AMP=G();
function Kw(b,c){var d,e,f;if(c<=0)return C(21);d=B6(c);e=d.data;e[0]=AL6(Ec(b,52));f=1;while(f<c){e[f]=AL6(Ec(b,62));f=f+1|0;}return Gz(d);}
function AL6(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AGT=G();
function AMY(){var a=this;B.call(a);a.KM=null;a.Qk=null;a.JZ=0;a.QT=0;}
var AFC=G(0);
function AMc(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BC,8);e=DS(8);f=B6(16);g=0;h=0;i=0;while(true){j=BP(i,b);if(j>0)break;k=j>=0?10:(c.ba(C4(i))).nj;if(k==10){d=AIi(EO(f,0,g),d,h);e=ADk(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=K9(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=AIi(EO(f,0,g),d,h);j=i+1|0;if(j<b&&(c.ba(C4(j))).nj==10){e=ADk(1,e,h);i=j;}else e=ADk(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new AAD;d=AGo(d,h);if(m.length!=h)e=OR(e,h);c.kE=d;c.DM=e;return c;}
function AJ4(b){var c,d;c=M(b);BD(b);d=new Qa;d.u0=b;return AMc(c,d);}
var C8=G();
var ALE=G(C8);
var AL4=G(C8);
var AKi=G(C8);
var AKt=G(C8);
var AMj=G(C8);
function Wk(){B.call(this);this.sF=null;}
function ARB(a){var b;b=a.sF;Bf(Bj(),b);}
var H2=G(CD);
var BaB=null;var A$2=null;var BaC=null;function AHy(){AHy=Bm(H2);AZ0();}
function A6H(a,b){var c=new H2();AGc(c,a,b);return c;}
function AUw(){AHy();return BaC.dZ();}
function AGc(a,b,c){AHy();Du(a,b,c);}
function AZ0(){var b;BaB=A6H(C(409),0);b=A6H(C(410),1);A$2=b;BaC=I(H2,[BaB,b]);}
function Qa(){B.call(this);this.u0=null;}
function AX4(a,b){return P_(Q(a.u0,b.bs));}
function AAD(){var a=this;B.call(a);a.kE=null;a.DM=null;}
var AJ1=G();
function Cj(b,c){return C5(b*c);}
function GL(){var a=this;B.call(a);a.hq=0;a.n7=null;}
var AGJ=G();
function Up(){var a=this;B.call(a);a.rW=null;a.u_=null;a.BK=null;}
var AJ7=G(0);
function AJg(b){if(b===null)return C(182);if(!DI(b,C(411))&&!DI(b,C(412))&&!DI(b,C(413))&&!DI(b,C(414))&&!DI(b,C(415))&&!DI(b,C(416))){if(DI(b,C(417)))return C(193);if(DI(b,C(418)))return C(209);if(DI(b,C(419)))return C(204);if(!DI(b,C(420))&&!DI(b,C(421)))return C(182);return C(422);}return C(210);}
function AJz(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kk(b)){case -1655966961:if(!Bk(b,C(204)))break a;c=4;break a;case 3401:if(!Bk(b,C(209)))break a;c=3;break a;case 98723:if(!Bk(b,C(210)))break a;c=2;break a;case 3213227:if(!Bk(b,C(422)))break a;c=5;break a;case 3254818:if(!Bk(b,C(193)))break a;c=1;break a;case 3556653:if(!Bk(b,C(182)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=D0();e
=new J;L(e);H(H(e,C(423)),b);Bf(d,K(e));c=0;break b;}c=0;}return c;}
function ADo(){B.call(this);this.xh=null;}
function AXF(a,b,c,d){return Mf(a.xh,b,c,d);}
function YG(){B.call(this);this.kQ=null;}
function A6P(a,b){var c,d,e,f,g;c=a.kQ;d=c.mU;if(d!==null){e=b.j;f=e.a-d.a|0;g=e.b-d.b|0;e=c.kU;e.a=Fh(0,e.a+f|0,c.hc.a-c.kd.a|0);c=a.kQ;d=c.kU;d.b=Fh(0,d.b+g|0,c.hc.b-c.kd.b|0);}a.kQ.mU=b.j;return 1;}
var AGR=G();
function Mp(){return "clipboard" in $rt_globals.navigator?1:0;}
function AIx(){var a=this;B.call(a);a.cY=null;a.cm=null;a.kV=null;a.la=null;a.ov=null;a.km=null;}
function Z6(a){var b=new AIx();A3K(b,a);return b;}
function A3K(a,b){a.cm=BO();a.km=A_3;a.cY=b;Z(b.dh,a);}
function HF(a,b,c){a.kV=c;a.ov=b;b=B9(a.cm);while(Cb(b)){J3(Cc(b),a.ov);}}
function M4(a,b,c,d){a.km=d;S1(a,b,c);}
function S1(a,b,c){var d,e;d=a.cY;e=d.bT;if(Bc(e.a,e.b)&&d.cl!==0.0){if(a.kV!==null&&!JP(a)){a.la=Fx(a.cY,a.kV);d=Wm(a,b,c,null,null);b=new SN;b.uT=a;d.le=b;C2(a.cY,a);return;}b=new BX;X(b);N(b);}c=new Dc;Bp(c,C(424));N(c);}
function MP(a){if(JP(a)){ACC(a.cY,a);ACt(a,null);a.km.e();a.km=A_3;}}
function Wm(a,b,c,d,e){var f,g,h;f=ALb();AFq(f);NQ(f,c.b8());J3(f,a.ov);J1(f,a.la,a.cY);if(d===null)g=b.a;else{g=b.a;g=a.cY.bT.a<((g+(EM(d)).a|0)+(EM(f)).a|0)?g-(EM(f)).a|0:(g+(EM(d)).a|0)-d.gl|0;}h=b.b;b=a.cY.bT;NL(f,Bd(0,Be(g,b.a-(EM(f)).a|0)),Bd(0,Be(h,b.b-(EM(f)).b|0)));b=new AC9;b.ws=a;b.wp=f;b.wq=e;f.pD=b;BA(a.cm,f);return f;}
function A6q(a,b,c){var d;a.la=Fx(a.cY,a.kV);d=B9(a.cm);while(Cb(d)){J1(Cc(d),a.la,a.cY);}}
function AFJ(a){var b,c;if(EP(a.cm))return;Ca(a.cY.bM,1);b=0;while(true){c=a.cm;if(b>=c.p)break;ME(BI(c,b),a.cY);b=b+1|0;}}
function ASi(a,b){var c;if(!JP(a))return 0;a:{switch(b.bk){case 27:MP(a);c=1;break a;default:}c=0;}return c;}
function ACt(a,b){var c,d;c=a.cm.p-1|0;a:{while(true){if(c<0)break a;d=BI(a.cm,c);if(b===d)break;EZ(a.cm,c);Nk(d);c=c+(-1)|0;}}}
function JP(a){return a.cm.p<=0?0:1;}
function AUg(a){var b,c;LP(a.cY.dh,a);ACC(a.cY,a);b=a.cm;c=B9(b);while(Cb(c)){Nk(Cc(c));}IO(b);}
function X6(){B.call(this);this.yU=null;}
function AR1(a,b){MQ(a.yU,b);}
function V0(){B.call(this);this.AB=null;}
function A55(a,b){var c,d,e,f;c=a.AB;if(c.gW!=3&&c.fl!=3){b=b.data;c.hb=3;d=CV(b[0]);e=E2(b[1]);Oy(c.h,d,e);if(c.f2){b=Fe(c);f=J9(EI(),c.jm);c=new J;L(c);H(H3(H(H(c,b),C(425)),f),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}
function RM(){B.call(this);this.Ai=null;}
function AYz(a,b){var c,d,e,f,g,h;c=a.Ai;if(c.fl!=3){d=b.data;c.gW=3;if((CV(d[2])).data[0]!=1)MQ(c,b);else{e=CV(d[0]);f=E2(d[1]);g=c.hb!=3?0:1;Sf(c.h,e,f,g);if(c.f2){b=Fe(c);h=J9(EI(),c.jm);c=new J;L(c);H(H3(H(H(c,b),C(426)),h),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function Qq(){B.call(this);this.kF=null;}
function AXT(a){return a.kF;}
var ALz=G(0);
var Mk=G(0);
function RR(){B.call(this);this.vh=null;}
function AYY(a,b){return LD(a.vh,b);}
function P1(){B.call(this);this.BO=null;}
function A5e(a,b){var c,d;c=a.BO;d=b.bs;return P_(c.charCodeAt(d)&65535);}
var AHW=G();
function AKq(b,c,d,e,f,g){g.a=c.a;g.b=f;Bv(b,d.a,d.b,g,e);Bv(b,d.a,(d.b+c.b|0)-f|0,g,e);g.a=f;g.b=(c.b-f|0)-f|0;Bv(b,d.a,d.b+f|0,g,e);Bv(b,(d.a+c.a|0)-f|0,d.b+f|0,g,e);}
function ALL(b,c,d,e,f,g,h,i){var j,k,l;j=(d.a+g|0)-e|0;k=(d.b+c.b|0)+e|0;i.a=(c.a+e|0)+e|0;i.b=g;Bv(b,j,k,i,h);Bv(b,j,k,i,h);Bv(b,j+g|0,k+g|0,i,h);l=(d.a+c.a|0)+e|0;j=((d.b+g|0)-f|0)-e|0;i.a=g;i.b=(((c.b-g|0)+e|0)+e|0)+f|0;Bv(b,l,j,i,h);Bv(b,l,j,i,h);Bv(b,l+g|0,j+g|0,i,h);}
function Rt(){var a=this;B.call(a);a.cZ=null;a.qO=null;a.fB=null;a.em=0;a.cF=0;a.jz=null;a.ki=null;a.hK=0;a.xV=0;}
function PY(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.em;i=Bc(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Bd(i,e))a:{while(true){if(d<=e){j=d;break a;}E3(c);j=d+(-1)|0;b=Do(d);d=Bc(j,a.cF)%a.fB.b|0;G$(a,c,b,a.hK,g);J8(a.cZ,c,0,d);if(!(j%a.em|0))break;d=j;}}else{E3(b);k=a.em-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;G$(a,b,Do(j),Bc(a.cF,k)+a.hK|0,g);k=k+(-1)|0;j=h;}CS(a.cZ,b);j=Bd(i,e);}return j;}k=a.em;h=Bc(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Be(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}E3(c);b=Do((d+f|0)+1|0);j=d
+1|0;d=Bc(d,a.cF)%a.fB.b|0;G$(a,c,b,a.hK,g);J8(a.cZ,c,0,d);if(!(j%a.em|0))break;d=j;}}else{E3(b);d=0;while(d<a.em){h=h+1|0;G$(a,b,Do((h>e?h-f|0:h)+f|0),Bc(a.cF,d)+a.hK|0,g);d=d+1|0;}CS(a.cZ,b);j=Be(i,e);}return j;}
function W1(b,c,d,e){c=c.data;return d<c.length&&c[d]?Km(b.ee,b,c[d]):e.lt;}
function NO(a,b,c,d,e,f){DQ(b,a.qO.a+d.a|0,c+d.b|0,a.jz,a.ki,a.cZ,e,f,a.xV);}
function G$(a,b,c,d,e){B1(b,c,a.fB.a-20.0*e,d);}
var AFG=G();
function GB(b,c,d){var e,f;a:{e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=1;break a;}}e=0;}return e;}
function AF8(b,c,d,e){var f;a:{f=b.a;if(c<=f&&f<(c+e.a|0)){c=b.b;if(d<=c&&c<(d+e.b|0)){c=1;break a;}}c=0;}return c;}
function U5(){var a=this;B.call(a);a.qH=null;a.qI=null;a.iG=null;}
function A80(a,b,c){var d=new U5();AHr(d,a,b,c);return d;}
function AHr(a,b,c,d){a.qH=b;a.qI=c;a.iG=d;}
function G7(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iG.data;f=e.length-1|0;g=f;while(true){if(d>g)return Be(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.il:i.im;k=!c?i.oI:i.oJ;l=BP(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
function Mx(){var a=this;B.call(a);a.im=0;a.oJ=0;a.il=0;a.oI=0;a.ps=0;}
function NP(a,b,c,d,e){var f=new Mx();A4v(f,a,b,c,d,e);return f;}
function A4v(a,b,c,d,e,f){a.im=b;a.oJ=c;a.il=d;a.oI=e;a.ps=f;}
var Tk=G(0);
var A$8=null;function ALU(){A$8=new Sc;}
function ADu(){var a=this;B.call(a);a.ts=null;a.tt=null;}
function AYZ(a,b){var c,d,e;c=a.ts;d=a.tt;c=c.fF.es.w;e=c.a;b=b.j;c.a=e+(b.a-d.a|0)|0;c.b=c.b+(b.b-d.b|0)|0;Ct(d,b);}
var Gw=G(Jr);
var AEI=G(FK);
function AEL(){B.call(this);this.v7=null;}
function AXx(a,b){var c,d;c=a.v7;WG(c,FJ(c,b.j));b=Bl(c);d=c.d;Os(b,d.y,d.B);Ip(c);}
function Vd(){B.call(this);this.yy=null;}
function A5E(a,b){var c,d;c=a.yy;d=c.el+1|0;c.el=d;c=new J;L(c);H(H(V(c,d),C(427)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function WM(){B.call(this);this.yK=null;}
function A38(a){var b,c;b=a.yK;c=new J;L(c);H(H(H(c,C(428)),b),C(429));$rt_globals.console.info($rt_ustr(K(c)));}
function Z$(){var a=this;Ew.call(a);a.jc=null;a.dW=null;a.hQ=null;a.gV=null;}
function AOC(a){var b;a.jc=null;a.dW=null;b=null;a.gV=b;a.hQ=b;}
function A0P(a,b){var c,d,e,f;if(B3(a.dW.dI,b))return AAX(a,1,C(282));if(B3(a.dW.dG,b))return AAX(a,0,C(283));c=P(By,2);d=c.data;b=new By;e=new AAv;e.q5=a;Ce(b,e,C(282));d[0]=b;b=new By;f=new AAu;f.wV=a;Ce(b,f,C(283));d[1]=b;return CN(c);}
function AAX(a,b,c){var d,e,f,g;d=P(By,1);e=d.data;f=new By;g=new ADG;g.AR=a;g.AS=b;Ce(f,g,c);e[0]=f;return CN(d);}
function Im(a,b){var c,d;c=a.bj.Y.ct;d=new Ul;d.CQ=a;d.CR=b;Gs(c,d);}
var Wc=G();
function AWS(a){return Ok();}
var Pp=G();
function A0r(a){return EL(1);}
function Pq(){B.call(this);this.BA=null;}
var Lm=G(0);
function AOn(a,b,c){LX(b);}
function AMy(a,b){var c;c=new Sw;c.vf=a;c.vg=b;return c;}
function L_(){var a=this;Ew.call(a);a.k4=null;a.da=null;a.x3=null;a.iO=null;a.fK=null;a.to=null;}
function BaD(a,b,c){var d=new L_();AEh(d,a,b,c);return d;}
function AEh(a,b,c,d){var e,f;Kx(a,b,c,d);a.iO=Kd();a.fK=Kd();e=new RF;Ff(e);e.jx=IT(b);d=UM(b.Y);e.gJ=d;e.k_=G2(d,b.Y);d=new Qb;Ff(d);f=new B4;AQ$();ALP(f,A$4);d.B4=f;e.pd=d;d=GW(e.jx);e.f$=d;e.Gc=a;M1(e,I(CF,[e.k_,e.pd,d]));e.DW=EL(1);a.da=e;V2(e,c);f=Il(C(430),0);ET(f);c=new ABF;c.sp=a;f.cX=c;D5(a.da.gJ,f);c=Ua(a,a.da,C(431),0.0);a.k4=c;d=new ABE;d.w1=a;c.iU=d;d=new ABG;d.uE=a;c.iQ=d;DV(b,c);}
function AY1(a,b){var c,d,e,f,g,h,i;if(B3(a.da.f$,b)){c=a.da;d=c.jx;c=c.f$;e=a.hp;f=a.bj;BD(f);g=new VG;g.C0=f;return AAU(Jx(d,c,e,a,c,g),b);}h=P(By,1);i=h.data;b=new By;c=new VF;c.q9=a;Ce(b,c,C(432));i[0]=b;return CN(h);}
function AEM(a){var b,c;b=a.bj.Y.ct;c=new R6;c.q8=a;Gs(b,c);}
function A1x(a){a.k4=null;a.da=null;a.iO=null;a.fK=null;}
function AZQ(a,b){a.gw=b;Eq(a.k4,b.b$);V2(a.da,b);}
function AZO(a,b){var c,d,e;c=b.fT;d=EN(c);a.x3=d;e=CB(a.iO,d);if(e!==null)RG(a,e);else{b=Bj();e=new J;L(e);H(H(e,C(433)),d);Bf(b,K(e));if(HL(a.fK,d)){b=new J;L(b);H(H(b,C(434)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D2(a.fK,d,d);b=new Ri;b.v0=a;b.v1=d;e=new Rj;e.tF=a;e.tE=d;V3(c,b,e);}}}
function RG(a,b){Ig(a.da.f$,b);b=a.da;C2(b.jx.ce.Y,b.f$);}
function AVb(a,b){var c;AEP(b);if(JG(b)>0)EW(a.da.gJ);c=b.gD.data;if(c.length==1&&!b.g9.data.length)c[0].cX.e();}
function A2X(a,b){if(JG(b)>0)EW(a.da.gJ);LJ(b);}
function A2o(a,b,c){if(AJg(c)!==C(182))Rw(b);else LX(b);}
var AEi=G();
function AWL(a){return EL(1);}
var AE2=G(DH);
var BaE=null;function Yi(b){var c;c=new J;L(c);return K(Df(c,b));}
function AHP(){BaE=F($rt_floatcls());}
var GQ=G();
var BaF=null;var BaG=null;var A98=null;var A97=null;var A96=null;function AK4(){BaF=D6([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);BaG=AJ8([Bq(1),Bq(10),Bq(100),Bq(1000),Bq(10000),Bq(100000),Bq(1000000),Bq(10000000),Bq(100000000),Bq(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A98=AJ8([Bq(1),Bq(10),Bq(100),Bq(10000),Bq(100000000),
D(1874919424, 2328306)]);A97=new ACN;A96=new U9;}
var JZ=G();
var BaH=0;var BaI=null;var BaJ=null;function ALu(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.rJ=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.ny=0;c.nl=0;return;}if(f)d=e|8388608;else{d=e<<1;while(I2(Dj(Bq(d),Bq(8388608)),FV)){d=d<<1;f=f+(-1)|0;}}g=ALD(BaJ,f);if(g<0)g= -g|0;h=BaJ.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JW(d,BaI.data[e],i);if(j<BaH){while($rt_ucmp(j,BaH)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=BaJ.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=JW(d,
BaI.data[e],i);}e=d<<1;d=e+1|0;h=BaI.data;f=g+1|0;k=h[f];l=i-1|0;m=JW(d,k,l);n=JW(e-1|0,BaI.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bc($rt_udiv(j,o),o):q<0?Bc($rt_udiv(j,k),k)+k|0:Bc($rt_udiv((j+(k/2|0)|0),k),k);if(DN(Bq(d),Bq(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.ny=d;c.nl=g-50|0;}
function JW(b,c,d){return G_(Gt(Cl(Dj(Bq(b),D(4294967295, 0)),Dj(Bq(c),D(4294967295, 0))),32-d|0));}
function AKA(){BaH=$rt_udiv((-1),10);BaI=D6([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);BaJ=D6([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function U9(){var a=this;B.call(a);a.ny=0;a.nl=0;a.rJ=0;}
function OU(){var a=this;B.call(a);a.Fz=null;a.xC=0.0;a.D5=0.0;a.gL=null;a.jJ=null;a.os=null;a.gp=0;}
function AMF(a,b){var c;if(b!==null){a.jJ=b;return a;}c=new BX;Bp(c,C(435));N(c);}
function AHG(a,b){var c;if(b!==null){a.os=b;return a;}c=new BX;Bp(c,C(435));N(c);}
function Z1(a,b,c,d){var e,f,g,$$je;e=a.gp;if(!(e==2&&!d)&&e!=3){a.gp=d?2:1;while(true){try{f=AII(a,b,c);}catch($$e){$$je=E_($$e);if($$je instanceof Bt){g=$$je;N(AZp(g));}else{throw $$e;}}if(Iv(f))return f;if(Jl(f)){if(d&&Eg(b)){g=a.jJ;HC();if(g===A$A)return EF(Ck(b));if(Ck(c)<=M(a.gL))return A$D;FI(b,b.be+Ck(b)|0);if(a.jJ===A$B)NM(c,a.gL);}return f;}if(Sh(f)){g=a.jJ;HC();if(g===A$A)return f;if(g===A$B){if(Ck(c)<M(a.gL))return A$D;NM(c,a.gL);}FI(b,b.be+Lu(f)|0);}else if(MJ(f)){g=a.os;HC();if(g===A$A)break;if
(g===A$B){if(Ck(c)<M(a.gL))return A$D;NM(c,a.gL);}FI(b,b.be+Lu(f)|0);}}return f;}b=new Dc;X(b);N(b);}
function AJ$(a,b){var c,d,e,f;c=a.gp;if(c&&c!=3){b=new Dc;X(b);N(b);}if(!Ck(b))return AI_(0);if(a.gp)a.gp=0;d=AI_(Bd(8,Ck(b)*a.xC|0));while(true){e=Z1(a,b,d,0);if(Jl(e))break;if(Iv(e))d=ABu(a,d);if(!N9(e))continue;U8(e);}b=Z1(a,b,d,1);if(N9(b))U8(b);while(true){f=a.gp;if(f!=3&&f!=2)break;a.gp=3;if(Jl(A$E)){d.eu=d.be;d.be=0;d.j7=(-1);return d;}d=ABu(a,d);}b=new Dc;X(b);N(b);}
function ABu(a,b){var c,d,e;c=b.iT;d=K9(c,Bd(8,c.data.length*2|0));e=ALd(d,0,d.data.length);FI(e,b.be);return e;}
function ADU(){var a=this;B.call(a);a.bt=0;a.bx=0;}
function DY(a,b){var c=new ADU();ALj(c,a,b);return c;}
function ALj(a,b,c){a.bt=b;a.bx=c;}
function ANx(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.bt==c.bt&&a.bx==c.bx?1:0;}return 0;}
function AUx(a){var b,c,d,e;b=P(B,2).data;b[0]=C4(a.bt);b[1]=C4(a.bx);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bs)|0;d=d+1|0;}return c;}
function AN7(a){var b,c,d;b=a.bt;c=a.bx;d=new J;L(d);Br(d,40);Br(V(H(V(d,b),C(37)),c),41);return K(d);}
function A3t(a,b){var c;b=b;c=BP(a.bt,b.bt);if(!c)c=BP(a.bx,b.bx);return c;}
var AG1=G(C8);
function VI(){B.call(this);this.EH=null;}
function AOw(a){Bf(Bj(),C(436));}
var AFj=G(0);
var A_3=null;function AIs(){A_3=new Yh;}
function Ye(){B.call(this);this.sx=null;}
function A5A(a){AEY(a.sx);}
function Yc(){B.call(this);this.rV=null;}
function AP8(a){AB6(a.rV);}
function Yb(){B.call(this);this.uP=null;}
function ANZ(a){AAf(a.uP);}
function Yd(){B.call(this);this.z6=null;}
function A6Q(a){AEF(a.z6);}
function AAl(){B.call(this);this.Br=null;}
function AVI(a){Z8(a.Br);}
function AAk(){B.call(this);this.sw=null;}
function A1J(a){var b;b=a.sw;Uu(new Ny,b.v,b.hj,new Xa);}
function AAn(){B.call(this);this.wY=null;}
function A3b(a){var b;b=a.wY;AEh(new L_,b.v,b.hj,new QV);}
function AAm(){B.call(this);this.vz=null;}
function AVE(a){var b;b=a.vz;ADA(new Kv,b.v,b.hj,new Xt);}
function AD7(){B.call(this);this.Ca=null;}
function A3F(a){Lp(a.Ca);}
function SJ(){B.call(this);this.yz=null;}
function A10(a){AC2(a.yz);}
function ZZ(){B.call(this);this.CT=null;}
function AYg(a,b){var c,d;c=a.CT;d=c.el+1|0;c.el=d;c=b.i$;b=new J;L(b);H(H(V(b,d),C(437)),c);$rt_globals.console.info($rt_ustr(K(b)));}
var Sc=G();
function A2t(a,b){}
function FC(){var a=this;CF.call(a);a.cU=null;a.W=null;a.fn=null;}
function BaK(){var a=new FC();Md(a);return a;}
function Md(a){Ff(a);a.cU=new Bh;a.W=new Bh;}
function A0s(a,b){a.fn=b;}
function T6(a,b,c){Y(a.cU,b,c);}
function Uk(a){var b;b=a.fn;if(b!==null)ADE(b);}
function AG0(a){var b;b=a.W;b.a=XU(a,b.a);b=a.W;b.b=AD2(a,b.b);}
function AIb(a,b){var c,d;c=a.W.a;d=XU(a,b);a.W.a=d;return c==d?0:1;}
function AM4(a,b){var c,d;c=a.W.b;d=AD2(a,b);a.W.b=d;return c==d?0:1;}
function AD2(a,b){return Bd(0,Be(b,a.cU.b-a.k.b|0));}
function XU(a,b){return Bd(0,Be(b,a.cU.a-a.k.a|0));}
function R8(){var a=this;FC.call(a);a.b1=null;a.eg=null;a.it=null;a.BQ=null;a.et=null;a.ca=null;a.e_=null;a.f1=null;a.d1=0;a.fY=0;a.CY=null;a.ed=0;a.eY=0;a.hU=0;a.gm=0;a.ga=0;a.c1=0;a.fa=null;a.kL=null;a.zS=null;a.iR=null;}
function A9h(a,b){var c=new R8();AMC(c,a,b);return c;}
function AMC(a,b,c){Md(a);a.eg=Tf();a.it=new Bh;a.ca=BaL;a.e_=P(Kp,0);a.ed=0;a.eY=0;a.hU=0;a.gm=0;a.ga=0;a.fa=AJR(0);a.iR=Kd();a.b1=b;a.kL=c;a.CY=c;Q8(a);}
function Q8(a){a.d1=Cj(2.0,a.b1.cl);}
function Wx(a){return a.ca.data.length?0:1;}
function X9(a,b){Ui(a);a.ca=b;}
function Ui(a){Y(a.it,0,0);}
function W7(a,b,c){a.zS=b;a.BQ=c;a.et=null;a.fa=null;a.fY=0;Ui(a);}
function A5C(a){a.f1=BY(a.f1,null);Y(a.it,0,0);E$(a.iR);a.fa=null;a.ca=BaL;a.e_=null;a.ed=0;a.eY=0;a.hU=0;ACg(a.eg);a.kL=null;}
function AZE(a,b,c){Zp(a);Q8(a);a.et=null;a.fa=null;a.fY=0;}
function AXO(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KH(a.b1);if(Wx(a))return;Ll(a);Cr(c,a.et);d=Er(a);e=AJy(c,a.fY);f=Be(Iq(a.k.b,d),a.ca.data.length)+30|0;g=a.zS.CJ;h=a.e_.data;d=h.length;if(d<f){a:{i=a.gm;j=a.ga;k=a.ca;l=a.fa;m=a.iR;n=P(Kp,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hg!==c){ADJ(l,q,m);o[f]=Nd(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Nd(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Nd(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){ADJ(l,c,m);h[f]=null;}f=f+1|0;}a.e_=n;Ct(a.it,Nc(a.fa));ZD(a,a.b1.bM);}a.gm=Be((a.W.b+a.d1|0)/(Er(a)+a.d1|0)|0,a.ca.data.length-1|0);a.ga=Be((((a.W.b+a.eg.u.b|0)-1|0)+a.d1|0)/(Er(a)+a.d1|0)|0,a.ca.data.length-1|0);if(!a.e_.data.length)return;AJt(a,e);ADB(a,b);q=g.BG;c=a.i;Bv(b,c.a,c.b,a.k,q);c=a.eg.w;i=c.a;j=c.b;p=Cw(a.b1,2.0);s=a.b1.d9;t=a.gm;u=i+p|0;while(t<=a.ga){l=Y2(a,t);d=Bc(t,Er(a));v
=t+1|0;w=d+Bc(v,a.d1)|0;x=u+a.ed|0;y=x+a.eY|0;z=a.c1!=t?0:1;m=!z?q:g.tq;ba=!z?g.u6:g.lC;bb=!z?g.rA:g.lC;bc=!z?g.sb:g.lC;bd=(j+w|0)-a.W.b|0;DQ(b,u,bd,l.jS,l.uj,a.f1,ba,m,a.b1.cM);DQ(b,x,bd,l.kl,l.lA,a.f1,bb,m,a.b1.cM);DQ(b,y,bd,l.jT,l.k$,a.f1,bc,m,a.b1.cM);d=l.jS.a;be=u+d|0;Y(s,Bd(0,a.ed-d|0),l.jS.b);Bv(b,be,bd,s,m);d=u+a.ed|0;f=l.kl.a;bf=d+f|0;Y(s,Bd(0,a.eY-f|0),l.kl.b);Bv(b,bf,bd,s,m);d=l.jT.a;bg=y+d|0;Y(s,Bd(0,(((a.eg.u.a-d|0)-a.eY|0)-a.ed|0)-p|0),l.jT.b);Bv(b,bg,bd,s,m);bh=(i+a.k.a|0)-p|0;Y(s,p,Er(a)+a.d1
|0);Bv(b,bh,bd,s,q);t=v;}Gq(b);}
function AJt(a,b){var c,d,e,f,g,h;c=0;d=a.gm;while(d<=a.ga){e=Y2(a,d);if(!(e!==null&&e.hg===a.ca.data[d])){f=a.e_.data;g=a.ca;e=a.fa;h=a.iR;c=d%f.length|0;if(f[c]!==null)ADJ(e,f[c],h);f[c]=Nd(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.it,Nc(a.fa));ZD(a,a.b1.bM);}}
function ZD(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.it;c=Eb(b,c.a+150|0,c.b,a.b1.cM);Cr(c,a.et);d=a.et;e=d.ew;f=e-(e+d.eP)/16.0;g=a.e_.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hg.lQ;k=d.lA;B1(c,j,k.bq+a.fY,f+k.bu);j=d.hg.l8;d=d.k$;B1(c,j,d.bq+a.fY,f+d.bu);}i=i+1|0;}a:{d=a.iR;if(d.dd>0){h=d.c7;i=0;b:while(true){g=d.cb.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cJ;l=j.cS;k=k;l=l.mv;B1(c,k,l.bq+a.fY,f+l.bu);j=j.c5;if(h!=d.c7)break b;}i=i+1|0;}b=new Is;X(b);N(b);}}if(a.f1===null)a.f1=C3(b);CS(a.f1,
c);EK(c);}
function Y2(a,b){var c;c=a.e_.data;return c[b%c.length|0];}
function A3r(a,b){Ct(a.eg.u,b);}
function A4D(a,b){Ct(a.eg.w,b);}
function Zp(a){var b,c,d,e,f,g,h,i,j;b=KH(a.b1);if(Wx(a))return;Ll(a);Cr(b,a.et);c=AJy(b,a.fY);d=a.ca.data;e=d.length;f=0;while(f<e){g=d[f];h=NX(c,g.hY);i=NX(c,g.lQ);j=NX(c,g.l8);a.ed=Bd(a.ed,h);a.eY=Bd(a.eY,i);a.hU=Bd(a.hU,j);f=f+1|0;}}
function AR$(a,b){var c;c=ABi(a,b.j);if(c>=0)a.c1=c;return Fp(a.eg,a.i)&&G3(a.b1.c2)?1:0;}
function AQc(a,b,c){if(!Fp(a.eg,b.j)&&!LB(a.eg)){b=a.CY;if(b!==null)b.e();}return null;}
function AUo(a,b,c,d){var e;if(d==1){e=ABi(a,b.j);if(e>=0)Vz(a,a.ca.data[e]);}return 1;}
function Vz(a,b){a.kL.e();b.uV.e();}
function ABi(a,b){var c,d,e;if(!a.e_.data.length)return (-1);c=Er(a);d=(b.b-a.i.b|0)+a.W.b|0;e=a.d1;e=(d+e|0)/(c+e|0)|0;if(e<a.ca.data.length)return e;return (-1);}
function Er(a){return Fi(a.et);}
function Ll(a){var b;if(a.et===null){b=Fx(a.b1,a.BQ);a.et=b;a.fa=AJR(Fi(b));a.fY=C5(a.et.qC);}}
function A4Q(a,b){var c,d,e;a:{switch(b.bk){case 13:Vz(a,a.ca.data[a.c1]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.c1=a.gm;b=a.fn;c=a.W;JD(b,c.a,c.b-(a.k.b/2|0)|0);return 0;case 34:a.c1=a.ga;b=a.fn;c=a.W;JD(b,c.a,c.b+(a.k.b/2|0)|0);return 0;case 35:case 39:a.c1=a.ca.data.length-1|0;break a;case 36:case 37:a.c1=0;break a;case 38:d=a.c1;e=a.ca.data.length;a.c1=((d+e|0)
-1|0)%e|0;break a;case 40:a.c1=(a.c1+1|0)%a.ca.data.length|0;break a;default:break a;}a.kL.e();return 0;}e=a.c1;if(e<=a.gm)JD(a.fn,a.W.a,Bc(e,Er(a))+Bc(a.c1,a.d1)|0);else if(e>=a.ga)JD(a.fn,a.W.a,(Bc(e+1|0,Er(a))+Bc(a.c1+2|0,a.d1)|0)-a.k.b|0);return 0;}
var V7=G();
function AWu(a){}
function AGx(){var a=this;CF.call(a);a.oU=null;a.yL=null;a.BI=null;a.bU=null;a.dz=null;a.dO=null;a.vc=null;a.rH=null;a.wv=0.0;a.p4=null;a.po=null;}
function G2(a,b){var c=new AGx();AXu(c,a,b);return c;}
function AXu(a,b,c){var d;c=c.c2;Ff(a);d=new Qy;d.zR=a;a.yL=d;d=new Qx;d.AE=a;a.BI=d;a.wv=10.0;a.bU=b;a.oU=c;b.fn=a;}
function AVd(a){var b;b=a.bU;b.fn=null;a.bU=BY(b,null);}
function JC(a,b,c){var d;a.po=c;a.p4=b;d=a.dz;if(d!==null)In(d,b,c);b=a.dO;if(b!==null)In(b,a.p4,a.po);}
function AQG(a,b,c,d){J$(a,b,c,d);J$(a.bU,b,c,d);if(d!==0.0)ADE(a);}
function JD(a,b,c){Lz(a,b);L6(a,c);}
function ADE(a){var b;AG0(a.bU);b=F2(a)*3|0;if(AAz(a,b))UT(a);else a.dO=null;if(AFg(a,b))XM(a);else a.dz=null;}
function AFg(a,b){var c;c=a.k.b;return c>b&&a.bU.cU.b>c?1:0;}
function AAz(a,b){var c;c=a.k.a;return c>b&&a.bU.cU.a>c?1:0;}
function UT(a){var b,c,d,e,f,g;b=a.dO;if(b===null)b=Jw();a.dO=b;PI(a,b);c=a.dO;b=a.bU;d=b.W.a;e=a.i;f=e.a;g=a.k;Se(c,d,f,g.a,b.cU.a,e.b+g.b|0,F2(a));}
function XM(a){var b,c,d,e,f,g;b=a.dz;if(b===null)b=Jw();a.dz=b;PI(a,b);c=a.dz;b=a.bU;d=b.W.b;e=a.i;f=e.b;g=a.k;KL(c,d,f,g.b,b.cU.b,e.a+g.a|0,F2(a));}
function F2(a){return DF(a,a.wv);}
function PI(a,b){In(b,a.p4,a.po);}
function A3Y(a,b){var c;a.bU.dH(b);if(!(a.dz===null&&a.dO===null)){Ca(b,1);c=a.dz;if(c!==null)He(c,b);c=a.dO;if(c!==null)He(c,b);c=a.dz;if(c!==null)Hj(c,b);c=a.dO;if(c!==null)Hj(c,b);Ca(b,0);}}
function Us(a,b){var c,d;a:{b:{c=a.dz;if(!(c!==null&&I5(c,b))){c=a.dO;if(c===null)break b;if(!I5(c,b))break b;}d=1;break a;}d=0;}return d;}
function AVD(a,b,c,d){return !Us(a,b.j)&&!a.bU.cL(b,c,d)?0:1;}
function Lz(a,b){var c;b=AIb(a.bU,b);if(AAz(a,F2(a)*3|0))UT(a);if(b){c=a.vc;if(c!==null)c.e();}}
function L6(a,b){var c;if(AD4(a,b)){c=a.rH;if(c!==null)c.e();}}
function AD4(a,b){var c;c=AM4(a.bU,b);if(AFg(a,F2(a)*3|0))XM(a);return c;}
function AVf(a,b,c){var d,e;d=a.dz;if(d!==null){e=Gi(d,b.j,a.yL,1);if(e!==null)return e;}d=a.dO;if(d!==null){e=Gi(d,b.j,a.BI,0);if(e!==null)return e;}return a.bU.cu(b,c);}
function ATi(a,b,c){return Us(a,b.j)?1:0;}
function AS5(a,b){var c,d,e;c=a.dz;d=c!==null&&Gp(c,b.j,a.oU)?1:0;c=a.dO;e=c!==null&&Gp(c,b.j,a.oU)?1:0;return !d&&!e&&!a.bU.bZ(b)?0:1;}
function AZ3(a,b,c,d){var e,f;if(!B3(a,b.j))return 0;e=Cj(d*0.5,a.bX);f=Cj(c*0.5,a.bX);if(b.bQ){f=f+e|0;e=0;}if(a.dz!==null&&e)L6(a,a.bU.W.b+e|0);if(a.dO!==null&&f)Lz(a,a.bU.W.a+f|0);return 1;}
function AJb(a){var b,c;b=F2(a);c=a.bU.h9();c.a=Bd(c.a,b);c.b=Bd(c.b,b);return c;}
var AEU=G();
function APt(a,b){}
function AEW(){var a=this;B.call(a);a.vp=null;a.vq=null;}
function ANy(a,b){var c,d,e;c=a.vp;d=a.vq;b=BT(b);e=new J;L(e);H(H(H(e,d),C(29)),b);CW(c,K(e));}
function QO(){var a=this;FC.call(a);a.mD=null;a.qi=null;a.zd=null;a.sC=0.0;}
function AWD(a){var b;b=Cj(20.0,a.bX);return BK(b,b);}
function A3x(a,b){T6(a,b.a*3|0,b.b*5|0);a.zd.g(b);}
function AWV(a,b){var c,d,e,f,g,h,i,j,k,l,m;AMI(a,b);ADB(a,b);c=Cj(30.0,a.bX);d=a.W;e=d.a;f=Bc(e/c|0,c);g=d.b;h=Bc(g/c|0,c);d=a.k;i=Bc(((e+d.a|0)-1|0)/c|0,c);e=Bc(((g+d.b|0)-1|0)/c|0,c);d=a.qi;d.b=c;d.a=c;a.mD.bC=1.0;while(h<=e){g=a.i.b-a.W.b|0;j=f;while(j<=i){k=a.i.a-a.W.a|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=AMw(l);m=m+1|0;}Wj(AL5(l),0.75,a.sC,a.mD);Bv(b,k+j|0,g+h|0,a.qi,a.mD);j=j+c|0;}h=h+c|0;}Gq(b);}
function ASD(a,b,c){return A$8;}
function AEV(){var a=this;B.call(a);a.rc=null;a.rd=null;}
function AVu(a){var b,c;b=a.rc;c=a.rd;IJ(b.v,c);Ki(c);}
function Vk(){var a=this;CF.call(a);a.go=null;a.hP=null;a.j3=null;a.eF=null;a.k9=0.0;a.eQ=0;a.iB=0;a.d8=null;a.m6=null;}
function Wz(a){var b;if(OH(a))return 0;ADw(a);b=Cw(a.go,a.k9);return Fi(a.eF)+(b*2|0)|0;}
function SC(a){var b;b=a.k;return b.a&&b.b?0:1;}
function OH(a){return a.hP!==null&&a.j3!==null?0:1;}
function Re(a,b){a.k.b=b;}
function Rl(a,b,c,d,e){var f,g;f=a.go.d9;Y(f,d,a.k.b);g=a.i;Bv(b,g.a+c|0,g.b,f,e);}
function ADw(a){if(a.eF===null)a.eF=Fx(a.go,a.hP);}
function Id(){CF.call(this);this.cr=null;}
function M1(a,b){var c;if(a.cr===null){a.cr=b;return;}c=new DU;X(c);N(c);}
function A2w(a){var b,c,d;b=a.cr.data;c=b.length;d=0;while(d<c){b[d].bV();d=d+1|0;}}
function ASX(a,b){var c,d,e;c=a.cr.data;d=c.length;e=0;while(e<d){c[e].dH(b);e=e+1|0;}}
function AX1(a,b){var c,d,e,f;c=0;d=a.cr.data;e=d.length;f=0;while(f<e){c=c|d[f].cE(b);f=f+1|0;}return c;}
function APs(a,b,c,d){J$(a,b,c,d);a.CZ();}
function A5k(a,b,c,d){var e,f,g,h,i;e=0;f=a.cr.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.cL(b,c,d);h=h+1|0;}return e;}
function AVG(a,b,c){var d,e,f,g,h;d=a.cr.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.j)){h=g.cu(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A5v(a,b,c){var d,e,f,g,h;d=0;e=a.cr.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.j))d=d|h.dM(b,c);g=g+1|0;}return d;}
function A5X(a,b){var c,d,e,f,g;c=0;d=a.cr.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.j))c=c|g.bZ(b);f=f+1|0;}return c;}
function AP6(a,b,c,d){var e,f,g,h,i;e=0;f=a.cr.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.dJ(b,c,d);h=h+1|0;}return e;}
function A5I(a){var b,c,d;b=a.cr.data;c=b.length;d=0;while(d<c){b[d].kz();d=d+1|0;}}
function Iz(){Id.call(this);this.eM=null;}
function QA(a,b){Ff(a);a.eM=AYR(b);}
function AR7(a){var b,c,d,e;b=Cj(20.0,a.bX);c=(a.k.a-b|0)/2|0;d=ALr(a.i);e=BK(c,a.k.b);a.cr.data[0].dK(d,e,a.bX);d.a=(a.i.a+a.k.a|0)-c|0;a.cr.data[1].dK(d,e,a.bX);e.a=(a.k.a-c|0)-c|0;d.a=a.i.a+c|0;a.cr.data[2].dK(d,e,a.bX);}
function AG8(){var a=this;Iz.call(a);a.dI=null;a.dG=null;a.k0=null;a.ma=null;a.wh=null;}
function AMt(a){var b=new AG8();A2F(b,a);return b;}
function A2F(a,b){var c,d;QA(a,b);a.dI=UM(b);a.dG=UM(b);a.k0=G2(a.dI,b);a.ma=G2(a.dG,b);c=ANN(a.k0,a.dI);d=ANN(a.ma,a.dG);OI(a.eM,c,d);a.wh=AIN(c,d);M1(a,I(CF,[a.k0,a.ma,a.eM]));}
function OJ(a,b){a.eM.iC=b;Ku(a.dI,b);J2(a.dI,a.k0);Ku(a.dG,b);J2(a.dG,a.ma);}
function AB5(a,b){a.wh.hd=b;a.eM.ez=b;}
function HE(){var a=this;B.call(a);a.cX=null;a.jA=null;a.o5=null;a.hA=null;a.kc=0;a.hN=0;a.hL=0;}
function BaM(a,b){var c=new HE();TR(c,a,b);return c;}
function TR(a,b,c){a.hA=YO(b);a.kc=c;a.hN=0;}
function Ei(a){return (Kf(a.hA,0)).x;}
function AFz(a){a.hN=60084;}
function Jt(a){return a.hN!=60084?0:1;}
function AGw(a){a.hN=60086;}
function AGG(a){a.hL=60035;}
function LX(a){a.hL=60027;}
function Rw(a){a.hL=60137;}
function ET(a){a.hL=60151;}
function C_(){HE.call(this);this.fh=null;}
var BaN=null;var BaO=null;function Il(a,b){var c=new C_();Ks(c,a,b);return c;}
function AL0(a,b,c){var d=new C_();AMb(d,a,b,c);return d;}
function Ks(a,b,c){TR(a,b,c);a.fh=BaN;}
function AMb(a,b,c,d){TR(a,b,c);a.fh=BaN;a.fh=d;}
function A5Q(a){return Ei(a);}
function AME(a){var b,c,d;b=P(HE,AFb(a));c=b.data;if(RK(a,b,0)==c.length)return b;d=new Bt;X(d);N(d);}
function JG(a){return a.fh.data.length;}
function AFb(a){var b,c,d,e;b=1;if(Jt(a)){c=a.fh.data;d=c.length;e=0;while(e<d){b=b+AFb(c[e])|0;e=e+1|0;}}return b;}
function Pf(a){var b,c,d,e;b=1;c=a.fh.data;d=c.length;e=0;while(e<d){b=b+Pf(c[e])|0;e=e+1|0;}return b;}
function RK(a,b,c){var d,e,f;d=b.data;e=c+1|0;d[c]=a;if(Jt(a)){d=a.fh.data;c=d.length;f=0;while(f<c){e=RK(d[f],b,e);f=f+1|0;}}return e;}
function Ie(a){AFz(a);ET(a);}
function IY(a){AGw(a);AGG(a);}
function Vm(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=OV(Ei(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AHJ(){BaN=P(C_,0);BaO=new AFp;}
function Tv(){B.call(this);this.ty=null;}
function AYL(a){Im(a.ty,1);}
function Tt(){B.call(this);this.v4=null;}
function AXi(a){Im(a.v4,0);}
function Tu(){B.call(this);this.yv=null;}
function A0Y(a){C2(a.yv.bj.Y,null);}
function Ts(){B.call(this);this.F2=null;}
function AVr(a){}
function AEo(){B.call(this);this.B3=null;}
function AQ_(a){var b;b=a.B3;C2(b.bj.Y,b.sR);}
function AEn(){B.call(this);this.rF=null;}
function AVz(a){var b,c,d;b=a.rF;c=b.bj.Y.cB;d=b.eR;if(d!==c)d=null;b.sR=d;}
function RF(){var a=this;Id.call(a);a.DW=null;a.Gc=null;a.jx=null;a.pd=null;a.k_=null;a.gJ=null;a.f$=null;}
function ARv(a){var b,c,d,e;b=a.k.a/4|0;c=b+DF(a,1.0)|0;d=ALr(a.i);e=BK(b,a.k.b);a.cr.data[0].dK(d,e,a.bX);d.a=a.i.a+b|0;e.a=c-b|0;a.cr.data[1].dK(d,e,a.bX);d.a=a.i.a+c|0;e.a=a.k.a-c|0;a.cr.data[2].dK(d,e,a.bX);}
function V2(a,b){Ku(a.gJ,b);J2(a.gJ,a.k_);F5(a.jx,b);E8(a.f$,b);}
function A0K(a){var b,c;b=AIA(a.f$);c=AJb(a.k_);return BK((b.a+a.pd.k.a|0)+c.a|0,b.b);}
function ABF(){B.call(this);this.sp=null;}
function APD(a){AEM(a.sp);}
function ABE(){B.call(this);this.w1=null;}
function AT9(a){var b;b=a.w1;C2(b.bj.Y,b.to);}
function ABG(){B.call(this);this.uE=null;}
function A2j(a){var b,c;b=a.uE;c=b.bj.Y.cB;if(b.da.f$!==c)c=null;b.to=c;}
var AA9=G(DH);
var BaP=null;function Di(b,c){return Long_udiv(b, c);}
function AJK(b,c){return Long_urem(b, c);}
function DN(b,c){return Long_ucompare(b, c);}
function AKI(){BaP=F($rt_longcls());}
function AFh(){B.call(this);this.Cy=null;}
function A1w(a){Z4(a.Cy);}
function Yx(){B.call(this);this.zP=null;}
function AYn(a){var b;b=a.zP;DV(b.v,ZM(b));}
function ACF(){B.call(this);this.oD=null;}
var BaL=null;function ARk(){var a=new ACF();AGh(a);return a;}
function AGh(a){a.oD=BO();}
function Xb(a,b,c,d,e){var f;f=new LC;f.uV=e;f.lQ=c;f.l8=d;f.hY=b;BA(a.oD,f);}
function AEg(a){return GF(a.oD,BaL);}
function ABB(b){return b===null?C(21):ADz(b);}
function AMD(){BaL=P(LC,0);}
function Kp(){var a=this;B.call(a);a.uj=null;a.lA=null;a.k$=null;a.jS=null;a.kl=null;a.jT=null;a.hg=null;}
function Nd(b,c,d,e){var f,g,h;f=new Kp;f.jS=new Bh;f.kl=new Bh;f.jT=new Bh;f.hg=b;g=CB(e,b.hY);if(g!==null)g.i8=g.i8+1|0;else{g=new ADP;h=KR(c,b.hY,d);g.i8=1;g.mv=h;D2(e,b.hY,g);}e=g.mv;f.uj=e;Y(f.jS,e.bh|0,e.bC|0);e=KR(c,b.lQ,d);f.lA=e;Y(f.kl,e.bh|0,e.bC|0);b=KR(c,b.l8,d);f.k$=b;Y(f.jT,b.bh|0,b.bC|0);return f;}
function ADJ(b,c,d){var e,f,g;e=c.hg.hY;f=CB(d,e);g=f.i8-1|0;f.i8=g;if(!g){LW(d,e);Jk(b,f.mv);}Jk(b,c.lA);Jk(b,c.k$);}
var O5=G(0);
var A_K=null;var A_L=null;function AHs(){A_K=Fa(40,40,40,200);A_L=Fa(43,43,43,128);}
function LO(){var a=this;FC.call(a);a.gE=null;a.cC=null;a.e$=null;a.h_=null;a.gM=null;a.mf=null;a.m8=null;a.BT=0;a.rC=0;a.o3=null;a.gu=null;a.gv=null;a.ho=null;a.h1=null;a.h7=null;a.jH=null;a.gZ=null;a.se=0;a.kx=0;}
function ATR(a){OW(a.h_);Zi(a.cC);Pm(a);}
function Pm(a){a.gu=BY(a.gu,null);a.gv=BY(a.gv,null);a.ho=BY(a.ho,null);a.h1=BY(a.h1,null);a.h7=BY(a.h7,null);a.jH=BY(a.jH,null);a.gZ=BY(a.gZ,null);}
function X4(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.ho;break a;case 60084:c=a.gv;break a;case 60086:c=a.gu;break a;case 60136:c=a.gZ;break a;case 60137:c=a.jH;break a;case 60151:c=a.h1;break a;default:c=null;break a;}c=a.h7;}return c;}
function Ku(a,b){var c,d;a.gM=b;c=BR(a.mf,b.qd);d=BR(a.m8,b.pn);if(!(c&&d)){a.mf=b.qd;a.m8=b.pn;if(a.bX!==0.0)TH(a);}}
function AOd(a,b,c){Qw(a.cC,c);if(a.mf!==null)TH(a);}
function TH(a){var b,c,d,e,f;TO(a.h_);b=a.cC;c=a.mf;d=a.bX;e=a.gE.bM;f=b.hn;b.di=AKz(c.iq,c.he*d,c.ks,c.kI,f,e);Ta(a.cC,1.25,a.gE.bM);Pm(a);b=Fx(a.gE,a.m8);a.gu=BY(a.gu,FO(a,60086,b));a.gv=BY(a.gv,FO(a,60084,b));a.ho=BY(a.ho,FO(a,60035,b));a.h1=BY(a.h1,FO(a,60151,b));a.h7=BY(a.h7,FO(a,60027,b));a.jH=BY(a.jH,FO(a,60137,b));a.gZ=BY(a.gZ,FO(a,60136,b));a.se=Bd(Bd(Bd(Bd(BU(a.ho),BU(a.h1)),BU(a.h7)),BU(a.gZ)),BU(a.gZ));a.kx=Bd(BU(a.gv),BU(a.gu));PV(a);}
function PV(a){T6(a,a.cU.a,Bc(a.e$.fH.data.length,a.cC.eh));Uk(a);}
function A14(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;c=a.gM.bw.eq;d=a.i;Bv(b,d.a,d.b,a.k,c);BD(a.cC.di);e=a.cC.eh;f=a.e$.fH.data.length;if(!f)return;g=Be(f,Iq(a.k.b,e)+7|0);h=a.h_;if(h.data.length<g)a.h_=AAg(g,h,a.cC,a.BT,a.rC,a.e$);N4(b,a.i,a.k);i=a.W.b;j=f-1|0;k=AHF(i,e,j);i=AHF((a.W.b+a.k.b|0)-1|0,e,j);a.BT=k;a.rC=i;l=a.k.a;m=DF(a,4.0);n=DF(a,1.0)+a.kx|0;o=DF(a,3.0);p=DF(a,5.0);q=DF(a,1.0);r=0;s=a.i.a-a.W.a|0;t=DF(a,1.0);d=a.fn;u=t+(d===null?0:F2(d))|0;while(k<=i){v=a.e$.fH.data[k];h
=a.h_.data;t=k%h.length|0;w=h[t];YA(w,v.hA,b,e,l,0,k,t);x=Bc(e,k)-a.W.b|0;y=null;z=m+Bc(n,v.kc)|0;ba=a.o3!==v?0:1;if(ba){Y(a.gE.d9,a.k.a,e);d=a.i;Bv(b,d.a,d.b+x|0,a.gE.d9,a.gM.bw.gK);}bb=X4(a,v.hN);bc=X4(a,v.hL);if(bb!==null){d=a.gM;bd=d.j9.data[0];AFr(a,b,bb,s+z|0,(a.i.b+x|0)-q|0,!ba?c:d.bw.gK,bd.hl);}if(bc!==null){d=a.gM;bd=d.j9.data[0];AFr(a,b,bc,((s+z|0)+a.kx|0)+o|0,(a.i.b+x|0)-q|0,!ba?c:d.bw.gK,bd.hl);}be=FS(v.hA);bf=(((z+a.kx|0)+o|0)+a.se|0)+p|0;r=Bd(r,(bf+be|0)+u|0);QT(w,a.i.b+x|0,s+bf|0,b,l,e,0,a.gM,
null,null,null,ba,0,y);k=k+1|0;}d=a.cU;if(d.a!=r){d.a=r;Uk(a);}Gq(b);}
function AFr(a,b,c,d,e,f,g){Cv(a.cC.jO,0.0,0.0,BU(c),CT(c));Ct(a.cC.iy,c.e1);Hv(a.cC,b,c,d,e,g,f);}
function A47(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.cC.eh;f=((b.j.b-a.i.b|0)+a.W.b|0)/e|0;if(f>=0){g=a.e$.fH.data;if(f<g.length){h=g[f];if(!Xv(a,b,f)){b=h.o5;if(b!==null)b.e();}}}}return 1;}
function APd(a,b,c){var d,e,f,g;d=a.cC.eh;e=((b.j.b-a.i.b|0)+a.W.b|0)/d|0;if(!c&&e>=0){f=a.e$.fH.data;if(e<f.length){g=f[e];if(Xv(a,b,e)){b=g.jA;if(b!==null)b.e();}else{a.o3=g;b=g.cX;if(b!==null)b.e();}}}return A$8;}
function Xv(a,b,c){var d,e,f,g,h,i,j;d=a.e$.fH.data[c];e=DF(a,4.0);f=DF(a,1.0);g=Bd(BU(a.gv),BU(a.gu));h=e+Bc(f+g|0,d.kc)|0;i=(a.i.a-a.W.a|0)+h|0;j=i+g|0;c=b.j.a;return i<=c&&c<j?1:0;}
function FO(a,b,c){var d,e,f;d=a.gE.bM;e=N6(b);f=a.cC;return AEA(d,e,c,1,f.eh,f.i7);}
function AHF(b,c,d){return Be(b/c|0,d);}
function AKV(){LO.call(this);this.rR=null;}
function UM(a){var b=new AKV();AVR(b,a);return b;}
function AVR(a,b){Md(a);a.e$=AOo(P(HE,0));a.h_=P(FF,0);a.gE=b;a.cC=AR0(b.cM);}
function EW(a){a.e$=AOo(AME(a.rR));if(a.bX!==0.0)PV(a);}
function D5(a,b){a.rR=b;EW(a);}
function J2(a,b){var c;c=a.gM.bw;JC(b,c.l1,c.l6);return b;}
function AHo(){var a=this;B.call(a);a.n2=null;a.gc=null;}
function ANN(a,b){var c=new AHo();AOZ(c,a,b);return c;}
function AOZ(a,b,c){a.n2=b;a.gc=c;}
function AVo(a){return a.gc.W.b/M5(a)|0;}
function A5h(a){var b;b=a.gc;return Iq((b.W.b+b.k.b|0)-1|0,M5(a));}
function AWq(a,b){var c;b=Bc(b,M5(a));c=a.gc;return (b+c.i.b|0)-c.W.b|0;}
function ARV(a){return a.gc.i;}
function AX8(a){return a.gc.k;}
function ASw(a,b,c){var d;d=a.n2;d.vc=b;d.rH=c;}
function A2l(a,b){return AD4(a.n2,b);}
function M5(a){return a.gc.cC.eh;}
function Qb(){CF.call(this);this.B4=null;}
function ANE(a,b){var c;c=a.i;Bv(b,c.a,c.b,a.k,a.B4);}
function ACN(){var a=this;B.call(a);a.n1=FV;a.m9=0;a.rx=0;}
var Yh=G();
function AWI(a){}
function Tw(){var a=this;B.call(a);a.Cf=null;a.Cc=null;a.Cd=null;}
function ARZ(a){var b,c,d,e,f;b=a.Cf;c=a.Cc;d=a.Cd;e=Bj();f=new J;L(f);b=H(f,b);Br(b,9);b=H(b,c);Br(b,9);H(b,d);Bf(e,K(f));}
function Qy(){B.call(this);this.zR=null;}
function ANM(a,b){var c;c=a.zR;L6(c,F_(b,c.bU.cU.b-c.k.b|0));}
function Qx(){B.call(this);this.AE=null;}
function AN5(a,b){var c;c=a.AE;Lz(c,F_(b,c.bU.cU.a-c.k.a|0));}
var AFp=G();
function AUP(a,b,c){b=b;c=c;return OV(Ei(b),Ei(c));}
var UB=G(0);
var A$4=null;function AQ$(){AQ$=Bm(UB);AWw();}
function AWw(){A$4=S(C(239));}
function LC(){var a=this;B.call(a);a.uV=null;a.lQ=null;a.l8=null;a.hY=null;}
function AMM(){Hi.call(this);this.fH=null;}
function AOo(a){var b=new AMM();APS(b,a);return b;}
function APS(a,b){a.fH=b;}
function A6C(a,b){return a.fH.data[b].hA;}
var Dc=G(Bt);
var ALR=G(FK);
function AZp(a){var b=new ALR();ASK(b,a);return b;}
function ASK(a,b){a.k7=1;a.lq=1;a.nQ=b;}
function AMS(){var a=this;B.call(a);a.pe=null;a.ng=null;a.eV=null;a.m5=null;a.bD=null;a.p9=null;a.n_=null;a.f_=null;a.g7=null;a.j4=null;}
function AWR(a,b){var c=new AMS();A1Z(c,a,b);return c;}
function A1Z(a,b,c){var d,e,f;a.eV=b;a.m5=c;a.bD=AYJ();b=new J;L(b);a.j4=b;a.f_=Kd();b=new Ty;d=AMu(16);b.g1=0;b.ec=P(JX,d);b.yN=0.75;Vp(b);a.g7=b;b=new VE;c=a.bD;e=a.j4;f=a.f_;b.dN=c;b.mT=e;b.tH=f;a.p9=b;b=new Vl;b.c6=c;b.nG=e;b.sH=f;a.n_=b;}
function X5(a){var b,c,d,e,f,g,h;a:{b=ND(a.eV.fk);c=b.jF;if(c.dd>0){d=c.c7;e=0;b:while(true){f=b.jF.cb.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cJ;if(HL(a.f_,g))CB(a.f_,g);else{h=a.f_;D2(h,g,C4(h.dd));}c=c.c5;if(d!=b.jF.c7)break b;}e=e+1|0;}b=new Is;X(b);N(b);}}b=a.eV.fN;if(b!==null)AAI(a,b);Bu(a.bD,a.eV.fk.dd);b=Ti(ND(a.eV.fk));while(FD(b)){c=QY(b);Hl(a.bD,a.j4.I,M(c));BM(a.j4,c);}b=Ti(ND(a.eV.fk));while(FD(b)){c=QY(b);c=CB(a.eV.fk,c);Bu(a.bD,c.p);c=B9(c);while(Cb(c)){g=Cc(c);g=CB(a.f_,g);Bu(a.bD,
g.bs);}}if(a.eV.fN===null)Bu(a.bD,(-1));else{Bu(a.bD,a.g7.g1);ABn(a,a.eV.fN);}if(a.m5===null)Bu(a.bD,(-1));else{Bu(a.bD,1);AFU(a.m5,a.bD,a.g7);}a.pe=RH(a.bD);a.ng=GM(K(a.j4));}
function AAI(a,b){var c,d,e,f,g,h;if(ADT(a.g7,b))OT(a.g7,b);else{c=a.g7;d=C4(c.g1);if(b===null){e=Z7(c);if(e===null){c.mu=c.mu+1|0;e=ADX(c,null,0,0);f=c.g1+1|0;c.g1=f;if(f>c.p$)XZ(c);}}else{g=M7(b);h=g&(c.ec.data.length-1|0);e=X$(c,b,h,g);if(e===null){c.mu=c.mu+1|0;e=ADX(c,b,h,g);f=c.g1+1|0;c.g1=f;if(f>c.p$)XZ(c);}}e.cS=d;}b=b.cV;if(b===null)return;c=new WP;c.sL=a;b.ft(c);}
function ABn(a,b){var c,d,e,f;c=(OT(a.g7,b)).bs;Bu(a.bD,c);if(b instanceof Oc)Bu(a.bD,(-1));else if(!(b instanceof LE))Bu(a.bD,0);else Bu(a.bD,1);d=a.p9;Bu(d.dN,b.e7.c0());e=b.e7;f=new W_;f.wZ=d;e.ft(f);d=a.n_;Bu(d.c6,b.fO.c0());e=b.fO;f=new U1;f.vC=d;e.ft(f);d=b.lK;Bu(a.bD,d.c0());e=new VV;e.B1=a;d.ft(e);d=b.h2;Bu(a.bD,d.c0());d=d.cd();while(d.cP()){e=d.cf();PR(a.p9,e.lL);Hw(a.n_,e.ld);Bu(a.bD,e.sj);}d=b.vx;if(d===null)Bu(a.bD,(-1));else Bu(a.bD,(CB(a.f_,d)).bs);b=b.cV;Bu(a.bD,b.c0());d=new QU;d.q4=a;b.ft(d);}
function Pl(){B.call(this);this.BC=null;}
function AXf(a,b){var c,d,e,f,g,h,i,j;c=a.BC;if(c.f2){d=Fe(c);e=new J;L(e);H(H(e,d),C(438));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CV(b[0]);g=E2(b[1]);h=(CV(b[2])).data[0];if(c.h.cz==h){i=null;j=null;if(b.length>=5){i=CV(b[3]);j=E2(b[4]);}b=Ej(c);if(!Bk(b,C(204))&&!Bk(b,C(422))?0:1)Oy(c.h,f,g);else{Xj(c.h,f,g,i,j);E$(c.h.dQ);E$(c.h.dY);NI(c.h);K6(c.h);OP(c);}}}
function ADO(){B.call(this);this.sU=null;}
function A2e(a,b){var c,d,e,f;c=a.sU;if(c.fl!=3){b=b.data;d=CV(b[0]);e=E2(b[1]);Xj(c.h,d,e,null,null);if(c.f2){b=Fe(c);f=J9(EI(),c.Bx);c=new J;L(c);H(H3(H(H(c,b),C(439)),f),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}
var OL=G(BJ);
function S6(){var a=this;B.call(a);a.wO=null;a.wP=null;a.wN=0;}
function AZN(a,b){var c,d,e;c=a.wO;d=a.wP;e=a.wN;d.g(V8(c,(b.j.a+e|0)-c.fd.a|0));}
function S5(){var a=this;B.call(a);a.sh=null;a.sf=null;a.sg=0;}
function A5B(a,b){var c,d,e;c=a.sh;d=a.sf;e=a.sg;d.g(Rn(c,(b.j.b+e|0)-c.fd.b|0));}
var Fu=G(0);
function X_(){var a=this;B.call(a);a.kg=0;a.qK=0;a.lX=0;a.h8=0;a.jE=null;}
function Cb(a){return a.kg>=a.lX?0:1;}
function Cc(a){var b,c;Q4(a);b=a.kg;a.h8=b;c=a.jE;a.kg=b+1|0;return c.i2(b);}
function AAt(a){var b,c,d;if(a.h8<0){b=new Dc;X(b);N(b);}Q4(a);a.jE.mG(a.h8);a.qK=a.jE.b7;c=a.h8;d=a.kg;if(c<d)a.kg=d-1|0;a.lX=a.lX-1|0;a.h8=(-1);}
function Q4(a){var b;if(a.qK>=a.jE.b7)return;b=new Is;X(b);N(b);}
function LH(){var a=this;OU.call(a);a.yp=null;a.Bc=null;}
function AII(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.yp;e=0;f=0;g=a.Bc;a:{b:{while(true){if((e+32|0)>f&&Eg(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Ck(b)+k|0;h=j.length;f=Be(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BJ;c=new J;L(c);V(H(V(H(c,C(440)),l),C(100)),h);Bp(b,K(c));N(b);}if(Ck(b)<m){b=new OG;X(b);N(b);}if(m<0){b=new BJ;c=new J;L(c);H(V(H(c,C(101)),m),C(102));Bp(b,K(c));N(b);}n=b.be;h=n+b.nJ|0;e=0;while(e<m){o=k+1|0;i=b.ql.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.be=n+m|0;e=0;}if(!Eg(c)){p=!Eg(b)&&e>=f?A$E:A$D;break a;}i=g.data;n=Ck(c);o=i.length;n=Be(n,o);q=new ADm;q.um=b;q.BY=c;p=AMR(a,d,e,f,g,0,n,q);e=q.w5;if(p===null&&0==q.m_)p=A$E;k=q.m_;h=0;if(c.qQ){b=new KQ;X(b);N(b);}if(Ck(c)<k)break;if(h>o){b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(103)),h),C(97)),o),41);Bp(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BJ;c=new J;L(c);V(H(V(H(c,C(105)),l),C(100)),o);Bp(b,K(c));N(b);}if(k<0){b=new BJ;c=new J;L(c);H(V(H(c,C(101)),k),C(102));Bp(b,K(c));N(b);}o=c.be;m=0;while
(m<k){l=o+1|0;n=h+1|0;ABk(c,o,i[h]);m=m+1|0;o=l;h=n;}c.be=c.be+k|0;if(p!==null)break a;}b=new J4;X(b);N(b);}b=new BJ;c=new J;L(c);Br(V(H(V(H(c,C(103)),k),C(97)),h),41);Bp(b,K(c));N(b);}FI(b,b.be-(f-e|0)|0);return p;}
var T2=G(LH);
function AMR(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(NY(h,2))break a;i=A$E;break a;}c=k+1|0;n=j[k];if(!GU(a,n)){c=c+(-2)|0;i=EF(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(NY(h,3))break a;i=A$E;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!GU(a,n))break b;if(!GU(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(O1(p)){c=k+(-3)|0;i=EF(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EF(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(NY(h,4))break a;i=A$E;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Ck(h.BY)<2?0:1)break a;i=A$D;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!GU(a,n))break c;if(!GU(a,o))break c;if(!GU(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Kc(r);m=c+1|0;j[c]=Jz(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EF(1);break a;}c=k+(-3)|0;i
=EF(1);}h.w5=c;h.m_=f;return i;}
function GU(a,b){return (b&192)!=128?0:1;}
function AEm(){var a=this;B.call(a);a.D7=null;a.D8=null;a.D6=null;}
function WF(){B.call(this);this.rg=null;}
function AV6(a,b){var c,d;c=a.rg;d=c.el+1|0;c.el=d;c=new J;L(c);H(H(V(c,d),C(441)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function PF(){B.call(this);this.vQ=null;}
function AUr(a){return a.vQ.hs();}
function PE(){B.call(this);this.u1=null;}
function AZx(a){return a.u1.hs();}
function ABv(){B.call(this);this.Ba=null;}
function A21(a){return a.Ba.hs();}
var XY=G();
function A3O(a){return EL(1);}
function ABe(){B.call(this);this.t7=null;}
function A5Z(a,b){a.t7.g(FT(b));}
var AG5=G();
function ADM(){B.call(this);this.ww=null;}
function AQp(a,b){a.ww.e();}
var AI2=G();
var AH7=G();
function X8(){B.call(this);this.vT=null;}
function AO$(a,b){var c,d,e;c=a.vT;d=BT(b);e=new J;L(e);H(H(e,C(442)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new ACU;d.D$=c;d.tR=b;e=new ACW;e.Gk=c;Ws(b,d,e);}
function X7(){B.call(this);this.yh=null;}
function AU3(a,b){var c,d,e;c=a.yh;d=BT(b);e=new J;L(e);H(H(e,C(443)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new Qh;d.Dr=c;H0(b,d);}
function SQ(){B.call(this);this.uW=null;}
function AUt(a){AB6(a.uW);}
function SP(){B.call(this);this.yG=null;}
function AZ5(a){AEF(a.yG);}
function SS(){B.call(this);this.zm=null;}
function A5z(a){AEY(a.zm);}
function SR(){B.call(this);this.CX=null;}
function AXp(a){AAf(a.CX);}
function Uh(){B.call(this);this.tL=null;}
function AV0(a){EW(a.tL);}
var AGm=G();
function Qd(b,c,d){return AHY(b,0,c,d,VS());}
function AHY(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BP(c,d);h=g>=0?0:1+RE(f,2.0)|0;i=g>0?0:1+RE(f,3.0)|0;j=P(C_,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(444)),g);k[g]=AHY(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new C_;n=new J;L(n);V(H(n,C(445)),g);Ks(m,K(n),l);n=new R2;n.uu=m;m.o5=n;switch((l+g|0)%3|0){case 0:break;case 1:Rw(m);break a;case 2:m.hL=60136;break a;default:break a;}LX(m);}if(VU(f)<0.25){n=Kf(m.hA,0);n.bG=n.bG|2;}k[h+g|0]=m;g=g+1|0;}n=AL0(b,c,j);b=new XE;b.xl=n;b.xn=e;n.jA=b;n.cX
=b;if((c+c|0)>d)IY(n);else Ie(n);return n;}
function ACi(){B.call(this);this.rI=null;}
function AM9(a){EW(a.rI);}
function ACj(){B.call(this);this.ua=null;}
function AQS(a){EW(a.ua);}
function ADQ(){var a=this;B.call(a);a.rw=null;a.ry=null;}
function A56(a){var b,c;b=a.rw;c=a.ry;DZ(b);c.e();}
function Rm(){var a=this;B.call(a);a.gt=null;a.k2=null;a.jr=null;a.qS=null;a.dm=null;a.l_=0;}
function ABs(a,b){if(!BR(b.o_,a.qS)){a.qS=b.o_;Oj(a);}}
function Oj(a){a.dm=BY(a.dm,null);}
function AHN(a,b){var c,d;c=Fx(b,a.qS);d=Fi(c);a.dm=BY(a.dm,AEA(b.bM,N6(60088),c,0,d,0));}
function T9(a,b){return a.dm!==null&&GB(b,a.gt,a.k2)?1:0;}
function Xr(){var a=this;B.call(a);a.wQ=null;a.wR=null;}
function A0a(a){var b,c;b=a.wQ;c=a.wR;IJ(b.bj,c);Ki(c);b.bV();}
function Xq(){B.call(this);this.xv=null;}
var AI1=G();
var DU=G(Bt);
function AIu(){var a=this;B.call(a);a.jM=null;a.n$=0;a.gk=0;}
function AYJ(){var a=new AIu();AWQ(a);return a;}
function AWQ(a){a.n$=0;a.jM=BQ(16);a.gk=0;}
function Hl(a,b,c){Bu(a,b);Bu(a,c);}
function Bu(a,b){var c,d;c=a.jM;d=c.data.length;if(d==a.gk)a.jM=JE(c,d*2|0);c=a.jM.data;d=a.gk;a.gk=d+1|0;c[d]=b;}
function RH(a){var b,c,d,e,f;b=a.n$;if(b&&a.gk!=b){c=D0();b=a.n$;d=a.gk;e=new J;L(e);H(V(H(V(H(e,C(446)),b),C(447)),d),C(448));Bf(c,K(e));}f=a.jM;b=f.data.length;d=a.gk;if(b!=d)f=JE(f,d);return f;}
function Ty(){var a=this;En.call(a);a.g1=0;a.ec=null;a.mu=0;a.yN=0.0;a.p$=0;}
function AMu(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Vp(a){a.p$=a.ec.data.length*a.yN|0;}
function ADT(a,b){return WH(a,b)===null?0:1;}
function OT(a,b){var c;c=WH(a,b);if(c===null)return null;return c.cS;}
function WH(a,b){var c,d;if(b===null)c=Z7(a);else{d=M7(b);c=X$(a,b,d&(a.ec.data.length-1|0),d);}return c;}
function X$(a,b,c,d){var e;e=a.ec.data[c];while(e!==null&&!(e.n5==d&&(b!==e.cJ?0:1))){e=e.iE;}return e;}
function Z7(a){var b;b=a.ec.data[0];while(b!==null&&b.cJ!==null){b=b.iE;}return b;}
function ADX(a,b,c,d){var e,f;e=new JX;WV(e,b,null);e.n5=d;f=a.ec.data;e.iE=f[c];f[c]=e;return e;}
function XZ(a){var b,c,d,e,f,g,h,i;b=a.ec.data.length;b=AMu(!b?1:b<<1);c=P(JX,b);d=c.data;e=0;f=b-1|0;while(true){g=a.ec.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.n5&f;i=h.iE;h.iE=d[b];d[b]=h;h=i;}e=e+1|0;}a.ec=c;Vp(a);}
function VE(){var a=this;B.call(a);a.dN=null;a.mT=null;a.tH=null;}
function PR(a,b){var c;if(!(b instanceof MK)){Bu(a.dN,3);AEC(a,b);Bu(a.dN,b.jR);}else{c=b;Bu(a.dN,5);AEC(a,c);Bu(a.dN,c.jR);Bu(a.dN,c.xF);b=c.lm;Bu(a.dN,b.p);c=new XG;c.rG=a;FG(b,c);}}
function AEC(a,b){var c;c=b.ef.gQ;Hl(a.dN,a.mT.I,M(c));Bu(a.dN,b.ef.dr);Ph(a,b.kf);BM(a.mT,c);}
function Ph(a,b){if(b===null)Bu(a.dN,(-1));else Bu(a.dN,(CB(a.tH,b)).bs);}
function Vl(){var a=this;B.call(a);a.c6=null;a.nG=null;a.sH=null;}
function Hw(a,b){var c,d,e;if(b instanceof HZ){c=b;Bu(a.c6,9);ZE(a,c.fG);}else if(b instanceof KD){d=b;Bu(a.c6,3);Z_(a,d);Bu(a.c6,d.q$);ZE(a,d.iu);}else if(b instanceof JI){e=b;Bu(a.c6,4);Hw(a,e.ii);Hw(a,e.hO);}else if(b===null)Bu(a.c6,(-1));else{Bu(a.c6,5);Z_(a,b);Bu(a.c6,b.A2);}}
function Z_(a,b){var c;c=b.eH.gQ;Hl(a.c6,a.nG.I,M(c));Bu(a.c6,b.eH.dr);b=b.f5;if(b===null)Bu(a.c6,(-1));else Bu(a.c6,(CB(a.sH,b)).bs);BM(a.nG,c);}
function ZE(a,b){var c;Bu(a.c6,b.p);c=new WY;c.yi=a;FG(b,c);}
function XL(){var a=this;B.call(a);a.zK=0;a.zJ=0;}
function TN(){B.call(this);this.s$=null;}
function AU5(a,b){var c;c=a.s$;DP(c,b);HR(c,null);WE(c);}
var Zw=G(DH);
var BaQ=null;function AKc(){BaQ=F($rt_doublecls());}
var Kt=G();
var BaR=FV;var BaS=null;var BaT=null;function AHa(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.rx=I2(Dj(d,D(0, 2147483648)),FV)?0:1;e=Dj(d,D(4294967295, 1048575));f=G_(A8G(d,52))&2047;if(I2(e,FV)&&!f){c.n1=FV;c.m9=0;return;}if(f)e=A7g(e,D(0, 1048576));else{e=H8(e,1);while(I2(Dj(e,D(0, 1048576)),FV)){e=H8(e,1);f=f+(-1)|0;}}g=BaT.data;h=f<<16>>16;i=0;j=g.length;k=BP(i,j);if(k>0){c=new BX;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BP(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jb(e,BaS.data[h],i);if(APK(m,BaR)){while(DN(m,BaR)<=0){j=j+(-1)|0;m=CX(Cl(m,Bq(10)),Bq(9));}g=BaT.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jb(e,BaS.data[h],i);}e=H8(e,1);d=CX(e,Bq(1));g=BaS.data;h=j+1|0;n=g[h];f=i-1|0;n=Jb(d,n,f);o=Jb(J9(e,Bq(1)),BaS.data[h],f);p=Bq(1);while(true){q=Cl(p,Bq(10));if(DN(Di(m,q),Di(o,q))<=0)break;p=q;}r=Bq(1);while
(true){s=Cl(r,Bq(10));if(DN(Di(m,s),Di(n,s))>=0)break;r=s;}h=DN(p,r);e=h>0?Cl(Di(m,p),p):h<0?CX(Cl(Di(m,r),r),r):Cl(Di(CX(m,AH$(r,Bq(2))),r),r);if(DN(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Di(e,Bq(10));if(DN(e,D(2808348672, 232830643))<0)break;}else if(DN(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cl(e,Bq(10));}c.n1=e;c.m9=j-330|0;}
function Jb(b,c,d){var e,f,g,h,i,j,k,l;e=Dj(b,Bq(65535));f=Dj(Gt(b,16),Bq(65535));g=Dj(Gt(b,32),Bq(65535));h=Dj(Gt(b,48),Bq(65535));i=Dj(c,Bq(65535));j=Dj(Gt(c,16),Bq(65535));k=Dj(Gt(c,32),Bq(65535));l=Dj(Gt(c,48),Bq(65535));return CX(CX(CX(H8(Cl(l,h),32+d|0),H8(CX(Cl(l,g),Cl(k,h)),16+d|0)),H8(CX(CX(Cl(l,f),Cl(k,g)),Cl(j,h)),d)),Gt(CX(CX(CX(Cl(k,e),Cl(j,f)),Cl(i,g)),H8(CX(CX(CX(Cl(l,e),Cl(k,f)),Cl(j,g)),Cl(i,h)),16)),32-d|0));}
function AGW(){BaR=Di(Bq(-1),Bq(10));BaS=AJ8([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);BaT=A77([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function UV(){B.call(this);this.r6=null;}
function ANR(a){Hx(a.r6,37,3);}
function UW(){B.call(this);this.sQ=null;}
function AP4(a){Hx(a.sQ,40,3);}
function UX(){B.call(this);this.ut=null;}
function A5D(a){Hx(a.ut,42,3);}
function UY(){B.call(this);this.yr=null;}
function ASo(a){Hx(a.yr,45,3);}
function UZ(){B.call(this);this.yY=null;}
function AUI(a){Hx(a.yY,45,5);}
function Ps(){B.call(this);this.Bq=null;}
function A6T(a,b){var c,d;c=a.Bq;d=new Bt;Bp(d,$rt_str(b.message));c.g(d);}
var WI=G(0);
var A$q=null;function A7R(){A7R=Bm(WI);A3p();}
function A3p(){A$q=new $rt_globals.TextDecoder("utf-16");}
function AC7(){var a=this;B.call(a);a.uf=0;a.Df=0;}
function F_(a,b){var c;c=a.Df;if(c<=0)return 0;return ZJ(a.uf,b,c);}
function R2(){B.call(this);this.uu=null;}
function A2i(a){var b,c,d;b=a.uu;c=Bj();d=Ei(b);b=new J;L(b);H(H(b,C(449)),d);Bf(c,K(b));}
function XE(){var a=this;B.call(a);a.xl=null;a.xn=null;}
function A2b(a){var b,c;b=a.xl;c=a.xn;if(!Jt(b))Ie(b);else IY(b);c.e();}
function Yg(){var a=this;B.call(a);a.q3=null;a.zH=null;a.v3=0;a.w0=0;}
function OD(a,b){return Ck(a.zH)<b?0:1;}
function Wo(){B.call(this);this.vw=null;}
function AU_(a,b){DP(a.vw,b);}
var AIB=G();
function AFK(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EG()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new Um;d.addEventListener("change",Bw(e,"handleEvent"));d.click();}
var AF6=G(0);
function SN(){B.call(this);this.uT=null;}
function A0S(a){MP(a.uT);}
function AD5(){var a=this;B.call(a);a.xT=null;a.xS=null;}
function AWE(a){C2(a.xT,a.xS);}
var Zo=G();
var BaU=null;function Oy(b,c,d){Sf(b,c,d,0);}
function Sf(b,c,d,e){Yw(b,c,d,null,null,e);}
function Yw(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=Mz(c);i=Bb(h);j=Bb(h);k=Bb(h);l=CK(b);c=b.E;if(c.data.length<i)b.E=AGo(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bb(h)|0;h.fo=h.fo+n|0;}else b.E.data[m]=Ee(Z0(h,d,0));m=m+1|0;}NI(b);if(j)b.dn=AIe(AI7(h));E$(b.dY);E$(b.dQ);o=b.dY;g=0;while(g<k){D2(o,DY(Bb(h),Bb(h)),DY(Bb(h),Bb(h)));g=g+1|0;}p=b.dY;o=b.dQ;q=Ns(Ox(p));while(FD(q)){r=O4(q);s=r.cJ;p=r.cS;BD(BaU);r=CB(o,p);if(r===null){r=BO();D2(o,p,r);}BA(r,s);}if(o.pF===null){p=new Ra;p.xb=o;o.pF=p;}p=o.pF;r=new AAE;Oe(r,
p.xb);while(FD(r)){Op(r);o=r.hw.cS;p=A9V;c=P(B,o.p);d=c.data;GF(o,c);Lr(c,p);g=0;t=d.length;while(g<t){p=d[g];KY(o,g);o.cp.data[g]=p;g=g+1|0;}}Sb(h);if(e!==null&&f!==null){p=ASU(e,f);Qu(p);b.fb=AZa(p.pU,p.ja);b.dn=AIe(p.qg);}}
function Xj(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=Mz(c);i=Bb(h);j=Bb(h);k=Bb(h)!=1?0:1;l=Bb(h);m=Bb(h);n=AEz(b,i);o=AEz(b,j);p=(I_(Cg(b,n.a),n.b)).data[0].s;q=(I_(Cg(b,o.a),o.b)).data[1].s;r=0;s=l-1|0;while(r<l){g=Z0(h,d,i);if(!r)g=Mr(p,g);if(r==s)g=Mr(g,q);t=n.a+r|0;u=Ee(g);c=b.E.data;v=c[t];c[t]=u;if(!k&&JM(v)==JM(u)){t=0;while(t<JM(v)){o=v.s.data[t];w=u.s.data[t];x=o.b4;y=x!=5?0:1;if(!y&&x&&!w.b4){w.b4=x;w.bG=o.bG;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AI7(h);w=Lg(i,j,(-1));Yk(b.dn,w,u);}else if(e!==null&&f!==null){v=ASU(e,f);Qu(v);w=Lg(i,j,(-1));Yk(b.dn,w,v.qg);n=b.fb;n.fN=b.dn.dl.cs;n.fk=v.ja;}}Sb(h);}
function Z0(b,c,d){var e,f,g,h,i,j,k,l;e=Bb(b);f=P(CA,e);g=f.data;h=0;while(h<e){i=Bb(b);j=Bb(b);k=Bb(b);l=Bb(b);g[h]=El(EO(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function AL2(){BaU=new Wv;}
var AAh=G(0);
var PZ=G(0);
var F0=G();
function ABh(){F0.call(this);this.BE=null;}
function Ow(a,b){var c,d,e;c=0;while(true){d=a.BE;if(d.kC===null)d.kC=B9(d.zj);if(!Cb(d.kC))e=0;else{c=b.F(Cc(d.kC));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var Sa=G(0);
function Pr(){var a=this;B.call(a);a.Eb=null;a.Ec=null;a.D_=0;a.Ea=0;}
var AES=G();
function AOf(a,b){b=b;b.cZ=BY(b.cZ,null);}
var AHd=G(0);
function AKz(b,c,d,e,f,g){f=f.data;f[JJ(0,0)]=GS(g,b,c,d,0);f[JJ(0,1)]=GS(g,b,c,d,2);f[JJ(1,0)]=GS(g,b,c,e,0);f[JJ(1,1)]=GS(g,b,c,e,2);return f[JJ(0,0)];}
function JX(){var a=this;Hg.call(a);a.n5=0;a.iE=null;}
var Is=G(Bt);
var AE5=G();
function A4d(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AE4(){B.call(this);this.tp=null;}
function AZw(a,b){var c,d,e;c=a.tp;d=0;e=b.length;while(d<e){c.g(AId(b[d],P(BC,0)));d=d+1|0;}}
function AEp(){B.call(this);this.CW=null;}
function A0t(a,b){var c,d;c=a.CW;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A6w(b,P(BC,0),P(BC,0)));}
function TU(){var a=this;B.call(a);a.bz=null;a.rY=null;a.jw=null;a.oT=null;a.mL=null;a.gI=null;}
function NC(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=TY();e=a.bz.d;f=Ej(e);e=HU(e);g=a.bz.fI;if(AAc(g,f,e)!==null){h=new R5;h.sq=a;h.sr=b;EB(d,C(450),h);}if(OX(g,f,e)!==null){h=new R3;h.A0=a;h.AZ=b;EB(d,C(451),h);}if(ACX(g,f,e)!==null){e=new R7;e.zD=a;e.zE=b;EB(d,C(452),e);}e=new R4;e.Di=a;e.Dh=b;EB(d,C(453),e);H$(a);if(Mp()){if(!a.bz.e8){f=new Td;f.vk=a;EB(d,C(454),f);}f=new Te;f.xO=a;EB(d,C(455),f);if(!a.bz.e8&&WC(H$(a))){f=new Tc;f.ss=a;EB(d,C(456),f);}}if(c!==null)Nz(d,c);f=TY();i=P(BC,5).data;i[0]=C(182);i[1]=
C(193);i[2]=C(210);i[3]=C(209);i[4]=C(204);j=i.length;k=0;while(k<j){b=i[k];e=new Sp;e.As=a;e.Ar=b;EB(f,b,e);k=k+1|0;}Ij(d,C(457),Je(f));c=TY();i=P(By,3);l=i.data;g=a.mL;BD(g);m=new Q7;m.y4=g;l[0]=Db(C(458),m);g=a.mL;BD(g);m=new Q5;m.A7=g;l[1]=Db(C(459),m);g=a.mL;BD(g);m=new Q6;m.qW=g;l[2]=Db(C(460),m);L5(c,C(461),CN(i),BaV);i=P(By,2);l=i.data;g=a.jw;BD(g);m=new U0;m.A_=g;l[0]=Db(C(462),m);g=a.jw;BD(g);m=new U2;m.Dl=g;l[1]=Db(C(463),m);Ij(c,C(464),CN(i));g=new Z9;g.zU=a;L5(c,C(465),g,BaV);if(a.bz.cc.bM.mm){i
=P(By,2);l=i.data;g=new AAJ;g.sY=a;l[0]=Db(C(466),g);g=new AAH;g.BH=a;l[1]=Db(C(467),g);Ij(c,C(468),CN(i));}Ij(d,C(469),Je(c));return Je(d);}
function AAU(a,b){return NC(a,b,null);}
function H$(a){return a.bz.cc.ct;}
function W6(a){var b;b=new Su;b.ve=a;return b;}
function A0J(a){var b,c,d,e,f;b=P(By,5);c=b.data;d=a.bz;BD(d);e=new TI;e.xc=d;c[0]=Db(C(470),e);e=a.bz;BD(e);f=new TJ;f.sV=e;c[1]=Db(C(471),f);d=a.bz;BD(d);e=new TK;e.By=d;c[2]=Db(C(472),e);d=a.bz;BD(d);e=new TL;e.x8=d;c[3]=Db(C(473),e);d=a.bz;BD(d);e=new T1;e.Al=d;c[4]=Db(C(474),e);return CN(b);}
function Q3(a,b){var c;c=new Pj;c.yE=a;c.yF=b;return c;}
function K8(a,b,c){var d,e,f,g,h,i,j,k,l;a:{DZ(a.gI.ce);d=a.bz.d;e=Ej(d);f=HU(d);g=a.bz.fI;if(c===null)h=null;else{A8X();switch(BaW.data[c.fi]){case 1:h=OX(g,e,f);break a;case 2:h=AAc(g,e,f);break a;default:}b=new Fg;X(b);N(b);}}c=a.bz;e=FJ(c,b);g=Jv(c.d.h,e.bt,e.bx);f=TE(c,g);if(h!==null){g=c.d;i=e.bt;j=e.bx;e=new ACk;e.Gq=c;e.Gp=b;e.Go=f;h.uC(g,i,j,e,c.kt);}else{e=CB(c.d.h.dY,g);if(e!==null)Jd(c,e);else{e=CB(c.d.h.dQ,g);if(e!==null&&!EP(e))AAs(c.lb,b,e,c,f);else{c=c.lb;k=P(By,1);l=k.data;e=new By;f=c.ce;BD(f);g
=new AB_;g.Cn=f;Ce(e,g,C(475));l[0]=e;St(c,b,CN(k));}}}}
function AC9(){var a=this;B.call(a);a.ws=null;a.wp=null;a.wq=null;}
function AR4(a,b,c,d){var e,f,g,h;b=a.ws;e=a.wp;f=a.wq;ACt(b,e);if(f!==null)d.ni.e();if(ADl(d)){f=d.fu;g=e.c9;h=e.gl;Wm(b,BK((f.a-(g*3|0)|0)-h|0,(f.b-g|0)-h|0),d.nE,e,d.uA);}}
function ALX(){var a=this;B.call(a);a.iP=null;a.fo=0;}
function Mz(a){var b=new ALX();AXt(b,a);return b;}
function AXt(a,b){a.iP=b;a.fo=0;}
function Bb(a){var b,c;b=a.iP.data;c=a.fo;a.fo=c+1|0;return b[c];}
function Sb(a){var b,c,d,e;if(a.fo!=a.iP.data.length){b=D0();c=a.iP.data.length;d=a.fo;e=new J;L(e);H(V(H(V(H(e,C(446)),c),C(476)),d),C(477));Bf(b,K(e));}}
function RQ(){var a=this;B.call(a);a.Es=null;a.uY=0;}
function AYo(a,b){var c,d,e,f;c=a.uY;d=(CV(I6(b,0))).data;b=Bj();e=d[0];f=new J;L(f);V(H(V(H(f,C(478)),c),C(479)),e);Bf(b,K(f));b=Bj();e=d[1];f=new J;L(f);V(H(V(H(f,C(478)),c),C(480)),e);Bf(b,K(f));}
function AFO(){B.call(this);this.QJ=null;}
var Um=G();
function AXQ(a,b){}
var Wv=G();
var F1=G();
var BaX=null;var BaY=null;var A_f=null;var BaZ=null;var Ba0=null;var Ba1=null;function ALt(){BaX=new Ve;BaY=new Vb;A_f=new Vc;BaZ=new U_;Ba0=new Va;Ba1=new W8;}
function AJU(){var a=this;B.call(a);a.pU=null;a.qg=null;a.ja=null;a.cO=null;a.pi=null;a.nz=null;a.jv=null;a.oc=null;a.qa=null;}
function ASU(a,b){var c=new AJU();A5i(c,a,b);return c;}
function A5i(a,b,c){a.cO=Mz(b);a.pi=c;}
function Qu(a){var b,c,d,e,f,g,h,i;b=Bb(a.cO);c=new Od;Ru(c);a.ja=c;a.jv=BO();d=0;while(d<b){e=Bb(a.cO);f=Bb(a.cO);g=EO(a.pi,e,f);D2(a.ja,g,BO());BA(a.jv,g);d=d+1|0;}c=Ns(Ox(a.ja));while(FD(c)){GP((O4(c)).cS,PT(a));}d=Bb(a.cO);if(d==(-1))a.pU=null;else{a.nz=P(Gd,d);c=new Xu;h=a.cO;i=a.pi;g=a.jv;c.d0=h;c.Ak=i;c.zO=g;a.oc=c;c=new Sr;c.eC=h;c.B2=i;c.Ch=g;a.qa=c;a.pU=Sg(a,null);}if(Bb(a.cO)!=(-1))a.qg=AAA(a.cO,a.nz);}
function Sg(a,b){var c,d,e,f,g,h,i,j,k;c=Bb(a.cO);d=Bb(a.cO);e=a.oc;f=Bb(e.d0);g=BO();h=0;while(h<f){BA(g,Px(e));h=h+1|0;}a:{switch(d){case -1:i=new Oc;i.hC=b;b=A_f;i.cV=b;i.fO=b;i.e7=b;i.lK=b;i.h2=b;break a;case 0:i=A7$(b);break a;case 1:i=new LE;AHx(i,b);GP(i.e7,g);break a;default:}b=new Dc;i=new J;L(i);V(H(i,C(481)),d);Bp(b,K(i));N(b);}i.e7=g;b=a.qa;d=Bb(b.eC);e=BO();j=0;while(j<d){BA(e,HH(b));j=j+1|0;}i.fO=e;i.lK=PT(a);d=Bb(a.cO);b=BO();j=0;while(j<d){e=Px(a.oc);g=HH(a.qa);f=Bb(a.cO);k=new Rv;k.lL=e;k.ld
=g;k.sj=f;BA(b,k);j=j+1|0;}i.h2=b;j=Bb(a.cO);i.vx=j==(-1)?null:BI(a.jv,j);d=Bb(a.cO);b=BO();j=0;while(j<d){BA(b,Sg(a,i));j=j+1|0;}i.cV=b;a.nz.data[c]=i;return i;}
function PT(a){var b,c,d,e;b=Bb(a.cO);c=BO();d=0;while(d<b){e=Bb(a.cO);BA(c,BI(a.jv,e));d=d+1|0;}return c;}
function AGb(){var a=this;B.call(a);a.mn=null;a.p8=null;}
function AM0(){var a=this;B.call(a);a.FF=0;a.EY=0;a.sa=0;a.nL=0;}
function AEJ(){var a=this;B.call(a);a.td=null;a.te=null;}
function AX9(a){var b,c,d,e,f,g;b=a.td;c=a.te;if(BR(c.mn,b.d.fw)){c=c.p8;CU(b,c.nL,c.sa,0);Ci((Bl(b)).bS,c.nL,c.sa);Ci((Bl(b)).bJ,c.EY,c.FF);}else{d=(B5(b.fI.BV)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){GY(b);b=new YC;b.zB=g;b.zC=c;BD(b);c=new ZO;c.xr=b;$rt_globals.setTimeout(Bw(c,"onTimer"),0);}}}
function AEK(){var a=this;B.call(a);a.CB=null;a.CA=null;}
function A0R(a){Jd(a.CB,a.CA);}
function Gd(){var a=this;B.call(a);a.hC=null;a.cV=null;a.fO=null;a.e7=null;a.h2=null;a.lK=null;a.vx=null;}
function A7$(a){var b=new Gd();AHx(b,a);return b;}
function AHx(a,b){a.hC=b;a.cV=BO();a.fO=BO();a.e7=BO();a.lK=BO();a.h2=BO();}
function AE$(a){var b;b=a.hC;if(b!==null)b.cV.rt(a);}
function WP(){B.call(this);this.sL=null;}
function AQz(a,b){b=b;AAI(a.sL,b);}
var Oc=G(Gd);
var LE=G(Gd);
function VV(){B.call(this);this.B1=null;}
function AYa(a,b){var c;b=b;c=a.B1;Bu(c.bD,(CB(c.f_,b)).bs);}
function Rv(){var a=this;B.call(a);a.lL=null;a.ld=null;a.sj=0;}
function QU(){B.call(this);this.q4=null;}
function A15(a,b){b=b;ABn(a.q4,b);}
var QZ=G(0);
var EC=G(FN);
var NS=G(EC);
var Ve=G(NS);
var Ou=G(En);
var Vb=G(Ou);
var OO=G(EA);
function AZr(a){var b;b=new DU;X(b);N(b);}
function ASI(a,b){var c;c=new DU;X(c);N(c);}
function ARF(a,b){b=new DU;X(b);N(b);}
var Vc=G(OO);
function ASP(a,b){var c;c=new BJ;X(c);N(c);}
function ARY(a){return 0;}
function APJ(a){return BaZ;}
function ANV(a){return 1;}
var U_=G();
function ANC(a){return 0;}
function A2Z(a){var b;b=new MY;X(b);N(b);}
function AUU(a){var b;b=new Dc;X(b);N(b);}
var Zm=G(0);
var Va=G();
var W8=G();
function R$(){var a=this;B.call(a);a.nd=0;a.s7=null;}
function A6V(a,b){var c,d,e;c=a.s7;b=b;d=c.zK;e=c.zJ;d=b.a<=d&&e<=b.b?1:0;a.nd=d;return d?0:1;}
var KQ=G(DU);
var J4=G(Bt);
var OG=G(Bt);
function Zh(){B.call(this);this.Ag=null;}
function A20(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.Ag;d=CV(c[0]);e=(CV(c[1])).data[0];if(!ACG(b.h)){c=b.h;if(c.cz==e){e=b.q1;f=Mz(d);E$(c.dY);E$(c.dQ);NI(c);while(f.fo>=f.iP.data.length?0:1){if(Bb(f)==(-1))continue;g=WK(c,Bb(f));h=ON(Cg(c,g.bt),g.bx);if(Bb(f)==(-1)){if(!e)continue;h.b4=0;h.bG=h.bG|4;continue;}i=WK(c,Bb(f));j=Bb(f);k=Bb(f);D2(c.dY,g,i);l=c.dQ;m=BO();if(CB(l,i)===null)D2(l,i,m);BA(CB(c.dQ,i),g);h.b4=j;h.bG=k;}Jj(b);if(b.FH){n=J9(EI(),b.B_);if(A7c(n,Bq(100))){b=Fe(b);c=new J;L(c);H(H3(H(H(c,
b),C(482)),n),C(202));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function AJj(){B.call(this);this.S1=null;}
function ACv(){B.call(this);this.v_=null;}
function ASy(a,b){MQ(a.v_,b);}
function RP(){var a=this;B.call(a);a.zj=null;a.kC=null;}
function Wn(){B.call(this);this.ti=null;}
function A01(a,b){var c,d;c=a.ti;c.lu=b;HR(c.H,b.qH);HR(c.L,c.lu.qI);b=c.mV;d=c.lu;b.hd=d;c.fU.ez=d;}
var AFT=G();
function AGe(b){var c,d,e,f,g,h,i,j;c=AYJ();d=CK(b);Bu(c,d);e=0;f=0;while(f<d){g=Cg(b,f);h=JM(g);Bu(c,h);i=0;while(i<h){j=Kf(g,i);Hl(c,e,MA(j));e=e+MA(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return RH(c);}
function AFZ(b){var c,d,e,f,g,h,i,j,k;c=Bb(b);d=P(GL,c);e=d.data;f=0;while(f<c){a:{g=Bb(b);if(g!=(-1)){h=Bb(b);i=Bb(b);if(i==(-1)){j=new GL;j.hq=h;e[g]=j;}else{j=new GL;j.hq=h;j.n7=BQ(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].n7.data[k]=Bb(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AJT(b,c,d,e){var f,g,h,i;f=Fn(b);g=Fn(c);h=AGe(b);i=AGe(c);b=new AB$;b.Cm=d;CO(e,b,C(483),I(B,[f,h,g,i]));}
function ABw(){var a=this;B.call(a);a.rh=null;a.ri=null;}
function AX$(a){var b,c;b=a.rh;c=a.ri;C2(b.ce.Y,c);ACc(b);}
function Hs(){var a=this;B.call(a);a.er=0;a.e9=0;a.p2=null;a.oB=0;a.g_=null;}
function AVw(a,b,c,d,e,f){var g=new Hs();A1F(g,a,b,c,d,e,f);return g;}
function A1F(a,b,c,d,e,f,g){a.er=b;a.e9=c;a.p2=BK(f,g);a.oB=d;a.g_=e;}
function Q$(){EC.call(this);this.jF=null;}
function Ti(a){var b;b=new ABH;Oe(b,a.jF);return b;}
function UE(){EC.call(this);this.Aa=null;}
function Ns(a){var b;b=new Ux;Oe(b,a.Aa);return b;}
function Ra(){FN.call(this);this.xb=null;}
function W_(){B.call(this);this.wZ=null;}
function AZX(a,b){b=b;PR(a.wZ,b);}
function U1(){B.call(this);this.vC=null;}
function A1I(a,b){b=b;Hw(a.vC,b);}
function KW(){var a=this;B.call(a);a.ef=null;a.kf=null;a.jR=0;}
function A7N(a,b,c){var d=new KW();AH4(d,a,b,c);return d;}
function AH4(a,b,c,d){a.ef=b;a.kf=c;a.jR=d;}
function A4r(a){var b,c,d;b=ALv(a.ef);c=a.kf;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function ALw(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.ef,c.ef)&&BR(a.kf,c.kf)&&BR(C4(a.jR),C4(c.jR))?1:0;}return 0;}
function MK(){var a=this;KW.call(a);a.lm=null;a.xF=0;}
function AYy(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!ALw(a,b))return 0;c=b;return BR(a.lm,c.lm);}return 0;}
function Fk(){var a=this;B.call(a);a.eH=null;a.f5=null;a.A2=0;}
function A7b(a,b,c){var d=new Fk();On(d,a,b,c);return d;}
function On(a,b,c,d){a.eH=b;a.f5=c;a.A2=d;}
function AWe(a){var b,c,d;b=BT(a.eH);c=a.f5;d=new J;L(d);H(H(H(d,b),C(29)),c);return K(d);}
function AJX(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.eH,c.eH)&&BR(a.f5,c.f5)?1:0;}return 0;}
function HZ(){Fk.call(this);this.fG=null;}
function A2d(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=Mj(a.fG);c=new AAB;c.Cq=a;d=new Sm;d.tI=b;d.sn=c;e=new ACo;e.xg=C(37);f=P(ED,0);g=new O3;g.nZ=F(ED);h=F(ED).dR;h.$clinit();g.mM=BQ((((AS_(h)).data.length-1|0)/32|0)+1|0);BD(f);h=new PS;h.pX=f;if(h instanceof O3){i=h;if(g.nZ===i.nZ){j=0;while(true){f=g.mM.data;if(j>=f.length)break;k=f[j];l=i.mM.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}GP(g,h);}m=new J;L(m);while(true){h=new V9;h.x_=e;h.ya=m;g=d.tI;i=new TZ;i.sz=d;i.sy=h;if(!Ow(g,i))break;}ACS(m,
0,C(21),0,M(C(21)));return K(Lv(m,C(21)));}
function KD(){var a=this;Fk.call(a);a.iu=null;a.q$=0;}
function A5H(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){if(!AJX(a,b))return 0;c=b;return BR(a.iu,c.iu);}return 0;}
function JI(){var a=this;Fk.call(a);a.ii=null;a.hO=null;}
function AS6(a){var b,c,d;b=a.ii.eH.gQ;c=BT(a.hO);d=new J;L(d);b=H(d,b);Br(b,46);H(b,c);return K(d);}
function AXW(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return BR(a.ii,c.ii)&&BR(a.hO,c.hO)?1:0;}return 0;}
function TS(){var a=this;B.call(a);a.s5=null;a.s6=0;a.s0=0;a.s2=null;a.s3=0;a.s4=0;}
function AWr(a,b){var c,d,e,f,g,h,i,j;c=a.s5;d=a.s6;e=a.s0;f=a.s2;g=a.s3;h=a.s4;i=Cw(c.bg,5.0);d=Be((c.bg.bT.a-d|0)-i|0,Bd((i-d|0)-c.S.k.a|0,b.j.a));j=Be((c.bg.bT.b-e|0)-i|0,Bd((i-e|0)-c.S.k.b|0,b.j.b));Y(f,d+g|0,j+h|0);EE(c,f,c.Z.k);}
function AGH(){var a=this;F0.call(a);a.Sa=null;a.TD=0;a.Lq=0;a.JI=0;}
function AB$(){B.call(this);this.Cm=null;}
function ATM(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.Cm;d=CV(c[0]);c=Mz(d);e=new U5;d=AFZ(c);f=AFZ(c);g=Bb(c);h=P(Mx,g);i=h.data;j=0;while(j<g){i[j]=NP(Bb(c),Bb(c),Bb(c),Bb(c),Bb(c));j=j+1|0;}AHr(e,d,f,h);b.g(e);}
function PQ(){B.call(this);this.xe=null;}
function A6t(a,b){var c,d,e,f,g;c=a.xe;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(484)),e);Bf(d,K(f));d=c.q.ct;e=new RA;g=P(B,1);g.data[0]=b;CO(d,e,C(331),g);}
function U6(){B.call(this);this.AK=null;}
function AZ9(a,b){var c,d,e,f,g;c=a.AK;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(485)),e);Bf(d,K(f));e=c.q.ct;d=new ABC;d.AG=c;g=P(B,1);g.data[0]=b;CO(e,d,C(486),g);}
function P5(){B.call(this);this.EA=null;}
function ASE(a,b){var c,d,e;c=Bj();d=BT(b);e=new J;L(e);H(H(e,C(487)),d);Bf(c,K(e));d=new AFl;d.C6=b;c=D0();BD(c);e=new AFk;e.sO=c;Ws(b,d,e);}
function Zy(){B.call(this);this.yl=null;}
function AVx(a,b){var c,d,e,f;c=a.yl;d=Bj();e=BT(b);f=new J;L(f);H(H(f,C(488)),e);Bf(d,K(f));d=new AC6;e=new S7;e.yO=c;d.kh=IE();c=BO();d.en=c;d.ju=1;d.jf=0;d.sk=e;BA(c,I7(b));BA(d.en,b);e=Bj();c=BT(d.kh);f=new J;L(f);H(H(f,C(489)),c);Bf(e,K(f));H0(b,d);}
function Ny(){var a=this;Ew.call(a);a.eW=null;a.hR=null;a.xK=null;a.nX=null;a.AI=null;}
function Ba2(a,b,c){var d=new Ny();Uu(d,a,b,c);return d;}
function Uu(a,b,c,d){var e;Kx(a,b,c,d);b=new VH;c=a.bj;QA(b,c.Y);d=IT(c);b.iI=d;b.dw=GW(d);c=GW(b.iI);b.dv=c;OI(b.eM,b.dw,c);e=new Po;e.uI=b;c=b.dw;c.iK=e;b.dv.iK=e;Jg(c,0);Jg(b.dv,0);c=b.dw;c.b9=1;b.uH=AIN(c,b.dv);M1(b,I(CF,[b.dw,b.dv,b.eM]));a.eW=b;ZW(b,a.gw);b=KZ(a,a.eW,30.0);a.hR=b;c=new W3;c.vM=a;b.iU=c;c=new W2;c.u$=a;b.iQ=c;DV(a.bj,b);}
function A4j(a,b){Eq(a.hR,b.b$);ZW(a.eW,b);}
function Nt(a,b,c){var d,e;d=!c?a.eW.dv:a.eW.dw;e=new RZ;e.wi=a;e.wj=b;e.wk=c;F4(d,b,e);}
function A5n(a){a.hR=null;a.eW=null;}
function AYj(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.eW;d=c.dw;c=c.dv;e=B3(d,b);f=B3(c,b);if(!e&&!f)return CN(I(By,[Nr(a,1,C(282)),Nr(a,0,C(283))]));g=!e?C(283):C(282);if(e)c=d;d=Nr(a,e,g);h=a.eW;i=h.iI;j=a.hp;k=new Q_;g=h.dw;h=h.dv;l=i.ce.Y;k.mi=g;k.mh=h;k.y7=l;g=a.bj;BD(g);h=new Rf;h.zu=g;return NC(Jx(i,c,j,a,k,h),b,d);}
function Nr(a,b,c){var d,e;d=new By;e=new AA2;e.tN=a;e.tM=b;Ce(d,e,c);return d;}
var Xa=G();
function A4N(a){return Ok();}
var QV=G();
function AQx(a){return Ok();}
var Xt=G();
function APa(a){return Ok();}
function T8(){B.call(this);this.vU=null;}
function AQw(a,b,c){var d,e;c=a.vU;d=c.d.h;e=b.bs;b=c.fE;ABd(d.E.data[e],0,b);}
function Xu(){var a=this;B.call(a);a.d0=null;a.Ak=null;a.zO=null;}
function Px(a){var b,c,d,e,f,g,h,i;a:{b=Bb(a.d0);switch(b){case 3:break;case 5:c=Qm(a);d=OB(a);b=Bb(a.d0);e=Bb(a.d0);f=Bb(a.d0);g=BO();h=0;while(h<f){BA(g,OB(a));h=h+1|0;}i=new MK;AH4(i,c,d,b);i.lm=g;i.xF=e;break a;default:c=new Dc;d=new J;L(d);V(H(d,C(490)),b);Bp(c,K(d));N(c);}i=A7N(Qm(a),OB(a),Bb(a.d0));}return i;}
function Qm(a){var b,c;b=Bb(a.d0);c=Bb(a.d0);return A0o(EO(a.Ak,b,c),Bb(a.d0));}
function OB(a){var b;b=Bb(a.d0);if(b==(-1))return null;return BI(a.zO,b);}
function Sr(){var a=this;B.call(a);a.eC=null;a.B2=null;a.Ch=null;}
function HH(a){var b,c,d,e,f;a:{b:{b=Bb(a.eC);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=XX(a);d=RB(a);b=Bb(a.eC);e=Tl(a);f=new KD;On(f,c,d,2);f.q$=b;f.iu=e;break a;case 4:c=HH(a);d=HH(a);f=new JI;On(f,c.eH,c.f5,9);f.ii=c;f.hO=d;break a;case 5:f=A7b(XX(a),RB(a),Bb(a.eC));break a;case 9:c=Tl(a);f=new HZ;d=!EP(c)&&BI(c,0)!==null?(BI(c,0)).f5:null;On(f,null,null,7);f.fG=BO();c=B9(c);while(Cb(c)){e=Cc(c);if(!(e instanceof HZ))BA(f.fG,e);else{e=e;GP(f.fG,e.fG);}}f.f5=d;break a;default:break b;}f
=null;break a;}c=new Dc;d=new J;L(d);V(H(d,C(491)),b);Bp(c,K(d));N(c);}return f;}
function XX(a){var b,c;b=Bb(a.eC);c=Bb(a.eC);return A0o(EO(a.B2,b,c),Bb(a.eC));}
function RB(a){var b;b=Bb(a.eC);if(b==(-1))return null;return BI(a.Ch,b);}
function Tl(a){var b,c,d;b=Bb(a.eC);c=BO();d=0;while(d<b){BA(c,HH(a));d=d+1|0;}return c;}
function UJ(){var a=this;B.call(a);a.tW=null;a.tT=null;a.tS=null;a.tV=0;a.tU=0;a.tZ=0;a.tY=0;a.t1=0;a.t0=0;a.tX=0;a.sP=0;}
function A6g(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.tW;d=a.tT;e=a.tS;f=a.tV;g=a.tU;h=a.tZ;i=a.tY;j=a.t1;k=a.t0;l=a.tX;m=a.sP;n=Cw(c.bg,5.0);o=c.Z.h9();Ct(d,c.Z.k);Ct(e,c.Z.i);switch(f){case -1:f=Be(h+(b.j.a-g|0)|0,c.bg.bT.a-n|0);g=o.a;h=h+i|0;f=Bd(g,h-f|0);e.a=h-f|0;d.a=f;break a;case 1:break;default:break a;}d.a=Bd((i+b.j.a|0)-g|0,Bd(o.a,n-c.S.i.a|0));}b:{switch(j){case -1:f=Bd(n,Be(l+(b.j.b-k|0)|0,(c.bg.bT.b+c.S.k.b|0)-n|0));g=o.b;h=l+m|0;f=Bd(g,h-f|0);e.b=h-f|0;d.b=f;break b;case 1:break;default:break b;}d.b
=Bd((m+b.j.b|0)-k|0,o.b);}EE(c,e,d);}
function VN(){var a=this;B.call(a);a.yI=null;a.yH=0.0;}
function NX(a,b){return LQ(a.yI,b,a.yH*2.0+0.875);}
function VH(){var a=this;Iz.call(a);a.iI=null;a.dw=null;a.dv=null;a.uH=null;a.m$=null;a.j_=0;}
function ZW(a,b){F5(a.iI,b);a.eM.iC=b;E8(a.dw,b);E8(a.dv,b);}
function W3(){B.call(this);this.vM=null;}
function A06(a){var b;b=a.vM;C2(b.bj.Y,b.AI);}
function W2(){B.call(this);this.u$=null;}
function ASd(a){var b,c,d;b=a.u$;c=b.bj.Y.cB;d=b.eW;if(d.dw!==c&&d.dv!==c)c=null;b.AI=c;}
function U3(){B.call(this);this.ud=null;}
function AUs(a,b,c){H4(Cg(a.ud.d.h,b.bs),0,M(c));}
function AIZ(){var a=this;B.call(a);a.gQ=null;a.dr=0;}
function A0o(a,b){var c=new AIZ();ANa(c,a,b);return c;}
function ANa(a,b,c){a.gQ=b;a.dr=c;}
function ATm(a,b){var c;if(a===b)return 1;if(b!==null&&BG(a)===BG(b)){c=b;return a.dr==c.dr&&BR(a.gQ,c.gQ)?1:0;}return 0;}
function ALv(a){var b,c,d;b=a.gQ;c=a.dr;d=new J;L(d);b=H(d,b);Br(b,40);Br(V(b,c),41);return K(d);}
function XG(){B.call(this);this.rG=null;}
function A1H(a,b){b=b;Ph(a.rG,b);}
function WY(){B.call(this);this.yi=null;}
function A6S(a,b){b=b;Hw(a.yi,b);}
function Po(){B.call(this);this.uI=null;}
function A5q(a,b){var c,d,e;c=a.uI;d=c.dw;if(d===b)c.j_=c.j_|1;e=c.dv;if(e===b)c.j_=c.j_|2;if((c.j_&3)==3){b=d.d.h;d=e.d.h;e=new YH;e.xs=c;AJT(b,d,e,c.iI.ce.Y.ct);}}
function FU(){var a=this;B.call(a);a.kN=0;a.uZ=0;a.ke=null;a.hw=null;a.zy=null;a.mr=null;}
function Ba3(a){var b=new FU();Oe(b,a);return b;}
function Oe(a,b){a.mr=b;a.uZ=b.c7;a.ke=null;}
function FD(a){var b,c;if(a.ke!==null)return 1;while(true){b=a.kN;c=a.mr.cb.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.kN=b+1|0;}return 0;}
function AKo(a){var b;if(a.uZ==a.mr.c7)return;b=new Is;X(b);N(b);}
function Op(a){var b,c,d,e;AKo(a);if(!FD(a)){b=new MY;X(b);N(b);}b=a.ke;if(b!==null){c=a.hw;if(c!==null)a.zy=c;a.hw=b;a.ke=b.c5;}else{d=a.mr.cb.data;e=a.kN;a.kN=e+1|0;b=d[e];a.hw=b;a.ke=b.c5;a.zy=null;}}
var ABH=G(FU);
function QY(a){Op(a);return a.hw.cJ;}
var Ux=G(FU);
function O4(a){Op(a);return a.hw;}
var AAE=G(FU);
function AF4(){var a=this;B.call(a);a.QY=null;a.Uc=0;}
function AAC(){var a=this;B.call(a);a.l=null;a.d_=0;a.ne=null;a.rB=0;a.ia=0;a.fZ=0;a.bF=0;a.n0=null;}
function NG(a){return a.l.bW;}
function WL(a,b,c,d){var e,f,g,h,i,j;e=BO();f=a.d_;g=0;if(c!=f)a.d_=c;a:{switch(b){case -1073741784:h=new SL;c=a.bF+1|0;a.bF=c;GH(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Rx;c=a.bF+1|0;a.bF=c;GH(h,c);break a;case -33554392:h=new TB;c=a.bF+1|0;a.bF=c;GH(h,c);break a;default:c=a.ia+1|0;a.ia=c;if(d!==null)h=A85(c);else{h=new Gl;GH(h,0);g=1;}c=a.ia;if(c<=(-1))break a;if(c>=10)break a;a.ne.data[c]=h;break a;}h=new AFf;GH(h,(-1));}while(true){if(Fy(a.l)&&a.l.m==(-536870788))
{d=A5f(Cm(a,2),Cm(a,64));while(!DK(a.l)&&Fy(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CJ(d,Bo(i));i=a.l;if(i.bp!=(-536870788))continue;Bo(i);}i=LR(a,d);i.V(h);}else if(a.l.bp==(-536870788)){i=Ii(h);Bo(a.l);}else{i=Y_(a,h);d=a.l;if(d.bp==(-536870788))Bo(d);}if(i!==null)BA(e,i);if(DK(a.l))break;if(a.l.bp==(-536870871))break;}if(a.l.ns==(-536870788))BA(e,Ii(h));if(a.d_!=f&&!g){a.d_=f;d=a.l;d.ht=f;d.m=d.bp;d.fx=d.fJ;j=d.dC;d.z=j+1|0;d.jW=j;F6(d);}switch(b){case -1073741784:break;case -536870872:d
=new Xm;Gm(d,e,h);return d;case -268435416:d=new ADY;Gm(d,e,h);return d;case -134217688:d=new AAF;Gm(d,e,h);return d;case -67108824:d=new T3;Gm(d,e,h);return d;case -33554392:d=new Eh;Gm(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return A8W(BI(e,0),h);default:return A7v(e,h);}return Ii(h);}d=new KP;Gm(d,e,h);return d;}
function AMe(a){var b,c,d,e,f,g,h;b=BQ(4);c=(-1);d=(-1);if(!DK(a.l)&&Fy(a.l)){e=b.data;c=Bo(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B6(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bp;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bo(f);f=a.l;g=f.bp;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bo(f);return A44(e,3);}return A44(e,2);}if(!Cm(a,2))return AGp(b[0]);if(Cm(a,64))return A3B(b[0]);return AY0(b[0]);}e=b.data;c=1;while(c<4&&!DK(a.l)&&Fy(a.l)){h=c+1|0;e[c]=Bo(a.l);c=h;}if(c==1){h=e[0];if(!(Ba4.ES(h)==Ba5?0:1))return WD(a,e[0]);}if
(!Cm(a,2))return A9s(b,c);if(Cm(a,64)){f=new Wy;Qj(f,b,c);return f;}f=new ACx;Qj(f,b,c);return f;}
function Y_(a,b){var c,d,e,f,g,h,i;if(Fy(a.l)&&!Li(a.l)&&NV(a.l.m)){if(Cm(a,128)){c=AMe(a);if(!DK(a.l)){d=a.l;e=d.bp;if(!(e==(-536870871)&&!(b instanceof Gl))&&e!=(-536870788)&&!Fy(d))c=MM(a,b,c);}}else if(!YE(a.l)&&!ADr(a.l)){f=new Qv;L(f);while(!DK(a.l)&&Fy(a.l)&&!YE(a.l)&&!ADr(a.l)){if(!(!Li(a.l)&&!a.l.m)&&!(!Li(a.l)&&NV(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bo(a.l);if(!ML(e))Br(f,e&65535);else Kn(f,GI(e));}if(!Cm(a,2)){c=new AAT;D9(c);c.cw
=K(f);e=f.I;c.bN=e;c.pE=A2u(e);c.n3=A2u(c.bN);h=0;while(h<(c.bN-1|0)){Sy(c.pE,Q(c.cw,h),(c.bN-h|0)-1|0);Sy(c.n3,Q(c.cw,(c.bN-h|0)-1|0),(c.bN-h|0)-1|0);h=h+1|0;}}else if(Cm(a,64))c=A9r(f);else{c=new PP;D9(c);c.h3=K(f);c.bN=f.I;}}else c=MM(a,b,AE3(a,b));}else{d=a.l;if(d.bp!=(-536870871))c=MM(a,b,AE3(a,b));else{if(b instanceof Gl)N(Cn(C(21),d.bW,Qt(d)));c=Ii(b);}}a:{if(!DK(a.l)){e=a.l.bp;if(!(e==(-536870871)&&!(b instanceof Gl))&&e!=(-536870788)){f=Y_(a,b);if(c instanceof Dg&&!(c instanceof F8)&&!(c instanceof C7)
&&!(c instanceof Fj)){i=c;if(!f.b6(i.P)){c=new V5;Fs(c,i.P,i.f,i.kb);c.P.V(c);}}if((f.jh()&65535)!=43)c.V(f);else c.V(f.P);break a;}}if(c===null)return null;c.V(b);}if((c.jh()&65535)!=43)return c;return c.P;}
function MM(a,b,c){var d,e,f,g,h;d=a.l;e=d.bp;if(c!==null&&!(c instanceof Cf)){switch(e){case -2147483606:Bo(d);d=new W$;Dy(d,c,b,e);O6();c.V(Ba6);return d;case -2147483605:Bo(d);d=new Zx;Dy(d,c,b,(-2147483606));O6();c.V(Ba6);return d;case -2147483585:Bo(d);d=new Rd;Dy(d,c,b,(-536870849));O6();c.V(Ba6);return d;case -2147483525:f=new PL;d=GD(d);g=a.fZ+1|0;a.fZ=g;M8(f,d,c,b,(-536870849),g);O6();c.V(Ba6);return f;case -1073741782:case -1073741781:Bo(d);d=new SF;Dy(d,c,b,e);c.V(d);return d;case -1073741761:Bo(d);d
=new AAb;Dy(d,c,b,(-536870849));c.V(b);return d;case -1073741701:h=new UI;d=GD(d);e=a.fZ+1|0;a.fZ=e;M8(h,d,c,b,(-536870849),e);c.V(h);return h;case -536870870:case -536870869:Bo(d);if(c.jh()!=(-2147483602)){d=new C7;Dy(d,c,b,e);}else if(Cm(a,32)){d=new SG;Dy(d,c,b,e);}else{d=new YL;f=Zj(a.d_);Dy(d,c,b,e);d.nr=f;}c.V(d);return d;case -536870849:Bo(d);d=new GZ;Dy(d,c,b,(-536870849));c.V(b);return d;case -536870789:h=new GE;d=GD(d);e=a.fZ+1|0;a.fZ=e;M8(h,d,c,b,(-536870849),e);c.V(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bo(d);d=new AFv;Fs(d,f,b,e);f.f=d;return d;case -2147483585:Bo(d);c=new VZ;Fs(c,f,b,(-2147483585));return c;case -2147483525:c=new Y$;S2(c,GD(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bo(d);d=new AAa;Fs(d,f,b,e);f.f=d;return d;case -1073741761:Bo(d);c=new ACI;Fs(c,f,b,(-1073741761));return c;case -1073741701:c=new Sx;S2(c,GD(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bo(d);d=A7K(f,b,e);f.f=d;return d;case -536870849:Bo(d);c
=new Fj;Fs(c,f,b,(-536870849));return c;case -536870789:return A8u(GD(d),f,b,(-536870789));default:}return c;}
function AE3(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Gl;while(true){a:{e=a.l;f=e.bp;if((f&(-2147418113))==(-2147483608)){Bo(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.d_=g;else{if(f!=(-1073741784))g=a.d_;c=WL(a,f,g,b);e=a.l;if(e.bp!=(-536870871))N(Cn(C(21),e.bW,e.dC));Bo(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bo(e);c
=A4U(0);break a;case -2147483577:Bo(e);c=new YI;B8(c);break a;case -2147483558:Bo(e);c=new Wu;h=a.bF+1|0;a.bF=h;AMp(c,h);break a;case -2147483550:Bo(e);c=A4U(1);break a;case -2147483526:Bo(e);c=new AEl;B8(c);break a;case -536870876:Bo(e);a.bF=a.bF+1|0;if(Cm(a,8)){if(Cm(a,1)){c=A7n(a.bF);break a;}c=A65(a.bF);break a;}if(Cm(a,1)){c=A7z(a.bF);break a;}c=A7T(a.bF);break a;case -536870866:Bo(e);if(Cm(a,32)){c=A71();break a;}c=A7Q(Zj(a.d_));break a;case -536870821:Bo(e);i=0;c=a.l;if(c.bp==(-536870818)){i=1;Bo(c);}c
=LR(a,HN(a,i));c.V(b);e=a.l;if(e.bp!=(-536870819))N(Cn(C(21),e.bW,e.dC));Y1(e,1);Bo(a.l);break a;case -536870818:Bo(e);a.bF=a.bF+1|0;if(!Cm(a,8)){c=new LG;B8(c);break a;}c=new XS;e=Zj(a.d_);B8(c);c.Ao=e;break a;case 0:j=e.fJ;if(j!==null)c=LR(a,j);else{if(DK(e)){c=Ii(b);break a;}c=AGp(f&65535);}Bo(a.l);break a;default:break b;}Bo(e);c=new LG;B8(c);break a;}h=(f&2147483647)-48|0;if(a.ia<h)N(Cn(C(21),Gb(e),Qt(a.l)));Bo(e);a.bF=a.bF+1|0;c=!Cm(a,2)?A8e(h,a.bF):Cm(a,64)?A7o(h,a.bF):A9p(h,a.bF);a.ne.data[h].pr=1;a.rB
=1;break a;}if(f>=0&&!Ht(e)){c=WD(a,f);Bo(a.l);}else if(f==(-536870788))c=Ii(b);else{if(f!=(-536870871)){b=new KE;c=!Ht(a.l)?Wq(f&65535):a.l.fJ.K();e=a.l;Nf(b,c,e.bW,e.dC);N(b);}if(d){b=new KE;e=a.l;Nf(b,C(21),e.bW,e.dC);N(b);}c=Ii(b);}}}if(f!=(-16777176))break;}return c;}
function HN(a,b){var c,d,e,f,g,h,i,j,$$je;c=A5f(Cm(a,2),Cm(a,64));E0(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DK(a.l))break a;h=a.l;b=h.bp;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CJ(c,d);d=Bo(a.l);h=a.l;if(h.bp!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bo(h);e=1;d=(-1);break d;}Bo(h);if(g){c=HN(a,0);break d;}if(a.l.bp==(-536870819))break d;Wf(c,HN(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bo(h);h=a.l;i=h.bp;if(Ht(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(NV(i))break e;i=i&65535;break e;}catch($$e){$$je=E_($$e);if($$je instanceof EH){break b;}else{throw $$e;}}}try{Cd(c,d,i);}catch($$e){$$je=E_($$e);if($$je instanceof EH){break b;}else{throw $$e;}}Bo(a.l);d=(-1);break d;}}if(d>=0)CJ(c,d);d=45;Bo(a.l);break d;case -536870821:if(d>=0){CJ(c,d);d=(-1);}Bo(a.l);j=0;h=a.l;if(h.bp==(-536870818)){Bo(h);j=1;}if(!e)AJv(c,HN(a,j));else Wf(c,HN(a,j));e=0;Bo(a.l);break d;case -536870819:if(d>=0)CJ(c,
d);d=93;Bo(a.l);break d;case -536870818:if(d>=0)CJ(c,d);d=94;Bo(a.l);break d;case 0:if(d>=0)CJ(c,d);h=a.l.fJ;if(h===null)d=0;else{AMZ(c,h);d=(-1);}Bo(a.l);break d;default:}if(d>=0)CJ(c,d);d=Bo(a.l);}g=0;}N(Cn(C(21),NG(a),a.l.dC));}N(Cn(C(21),NG(a),a.l.dC));}if(!f){if(d>=0)CJ(c,d);return c;}N(Cn(C(21),NG(a),a.l.dC-1|0));}
function WD(a,b){var c,d,e;c=ML(b);if(Cm(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return AY0(b&65535);}if(Cm(a,64)&&b>128){if(c){d=new Xh;D9(d);d.bN=2;d.nN=Hm(Hk(b));return d;}if(QX(b))return ATj(b&65535);if(!To(b))return A3B(b&65535);return A05(b&65535);}}if(!c){if(QX(b))return ATj(b&65535);if(!To(b))return AGp(b&65535);return A05(b&65535);}d=new Eo;D9(d);d.bN=2;d.hh=b;e=(GI(b)).data;d.kq=e[0];d.jN=e[1];return d;}
function LR(a,b){var c,d,e;if(!ALp(b)){if(!b.T){if(b.iF())return AQQ(b);return AVA(b);}if(!b.iF())return A1l(b);c=new M9;AC0(c,b);return c;}c=AFS(b);d=new Pw;B8(d);d.nu=c;d.xL=c.bn;if(!b.T){if(b.iF())return AHR(AQQ(JU(b)),d);return AHR(AVA(JU(b)),d);}if(!b.iF())return AHR(A1l(JU(b)),d);c=new R0;e=new M9;AC0(e,JU(b));AI9(c,e,d);return c;}
function JV(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Cm(a,b){return (a.d_&b)!=b?0:1;}
function ABc(){B.call(this);this.zT=null;}
function ASG(a,b){b.hI=a.zT.dl;}
function ABb(){B.call(this);this.vW=null;}
function A3u(a,b){b.hC=a.vW.dl.cs;}
function YK(){B.call(this);this.rT=null;}
function AZk(a,b){b.hI=a.rT;}
var Ic=G(0);
function T$(){B.call(this);this.zW=null;}
function A16(a,b,c,d){Lc(a.zW,b,c.bs,d.bs);}
function T_(){B.call(this);this.xY=null;}
function A0I(a,b,c,d){Lc(a.xY,b,c.bs,d.bs);}
function Jc(){B.call(this);this.oQ=0;}
var Ba7=null;var Ba8=null;var Ba9=null;function ATU(a){var b=new Jc();AHT(b,a);return b;}
function AHT(a,b){a.oQ=b;}
function Y6(b){return !b?Ba8:Ba7;}
function AJY(){Ba7=ATU(1);Ba8=ATU(0);Ba9=F($rt_booleancls());}
var Le=G(0);
var SM=G();
var Nx=G(0);
var AHe=G();
function S_(){B.call(this);this.vY=null;}
function A2C(a,b,c,d){Ke(a.vY,b,c.bs,d.bs);}
var S$=G();
function AWn(a,b){return b.ef.dr>=0?0:1;}
var S9=G();
function AUh(a,b){var c;a:{b:{b=b;if(b!==null){b=b.eH;if(b===null)break b;if(b.dr>=0)break b;}c=1;break a;}c=0;}return c;}
function Tb(){B.call(this);this.Bw=null;}
function A2a(a,b,c,d){Ke(a.Bw,b,c.bs,d.bs);}
function BV(){var a=this;B.call(a);a.f=null;a.cI=0;a.pA=null;a.kb=0;}
var A92=0;function B8(a){var b;b=A92;A92=b+1|0;a.pA=Ih(b);}
function N_(a,b){var c;c=A92;A92=c+1|0;a.pA=Ih(c);a.f=b;}
function IZ(a,b,c,d){var e;e=d.A;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function I8(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZc(a,b){a.kb=b;}
function AYK(a){return a.kb;}
function AHz(a){var b,c,d;b=a.pA;c=a.t();d=new J;L(d);Br(d,60);b=H(d,b);Br(b,58);Br(H(b,c),62);return K(d);}
function AUC(a){return AHz(a);}
function AU6(a){return a.f;}
function AVP(a,b){a.f=b;}
function A49(a,b){return 1;}
function A50(a){return null;}
function KV(a){var b;a.cI=1;b=a.f;if(b!==null){if(!b.cI){b=b.gU();if(b!==null){a.f.cI=1;a.f=b;}a.f.e2();}else if(b instanceof H9&&b.e6.pr)a.f=b.f;}}
function AJf(){A92=1;}
var RA=G();
function A00(a,b){AMd(b);}
function ABC(){B.call(this);this.AG=null;}
function ARG(a,b){Tz(a.AG,b);}
function AFl(){B.call(this);this.C6=null;}
function A4B(a,b){var c;c=a.C6;AJS(N2(c),c,b);}
function AFk(){B.call(this);this.sO=null;}
function AO2(a,b){Bf(a.sO,b);}
var IM=G(0);
function AC6(){var a=this;B.call(a);a.sk=null;a.kh=null;a.en=null;a.ju=0;a.jf=0;}
function A4w(a,b){var c,d,e,f,g;if(a.kh!==IE()){b=new Bt;X(b);N(b);}BA(a.en,I7(b));BA(a.en,b);c=Bj();d=a.jf;a.jf=d+1|0;e=BT(b);f=a.en.p;g=new J;L(g);V(H(H(H(V(H(g,C(492)),d),C(281)),e),C(493)),f);Bf(c,K(g));a.ju=a.ju+1|0;H0(b,a);}
function AS8(a,b){var c,d,e,f;if(a.kh!==IE()){b=new Bt;X(b);N(b);}BA(a.en,N2(b));BA(a.en,b);c=Bj();d=a.jf;a.jf=d+1|0;b=BT(b);e=a.en.p;f=new J;L(f);V(H(H(H(V(H(f,C(494)),d),C(281)),b),C(493)),e);Bf(c,K(f));}
function AZA(a){var b,c,d,e,f,g;if(a.kh!==IE()){b=new Bt;X(b);N(b);}c=a.ju-1|0;a.ju=c;if(!c){b=Bj();c=a.en.p;d=new J;L(d);V(H(d,C(495)),c);Bf(b,K(d));b=a.en;d=a.sk;e=P(B,b.p);f=e.data;c=0;g=f.length;while(c<g){f[c]=BI(b,c);c=c+1|0;}Tz(d.yO,e);}}
function S7(){B.call(this);this.yO=null;}
function WZ(){var a=this;B.call(a);a.rP=null;a.rN=null;a.rM=0;a.rO=0;}
function A2H(a,b){b=b;E4(a.rP,a.rN,b,a.rM,a.rO);}
function W0(){var a=this;B.call(a);a.Dc=null;a.Db=null;a.Da=0;a.C_=0;}
function AQg(a,b){b=b;E4(a.Dc,a.Db,b,a.Da,a.C_);}
function Sq(){var a=this;B.call(a);a.y3=null;a.y1=null;a.y2=null;}
function A0l(a){AGM(a.y3,a.y1,a.y2);}
var YJ=G();
function ASS(a,b){AMd(b);}
function ABY(){var a=this;B.call(a);a.C9=null;a.C$=null;}
function AOb(a){var b,c;b=a.C9;c=a.C$;GA(b.C.bH,EN(c));}
function C6(){var a=this;BV.call(a);a.pr=0;a.ev=0;}
var Ba6=null;function O6(){O6=Bm(C6);AZZ();}
function A85(a){var b=new C6();GH(b,a);return b;}
function GH(a,b){O6();B8(a);a.ev=b;}
function AOa(a,b,c,d){var e,f;e=Js(d,a.ev);Nq(d,a.ev,b);f=a.f.c(b,c,d);if(f<0)Nq(d,a.ev,e);return f;}
function A1T(a){return a.ev;}
function AQV(a){return C(496);}
function AOt(a,b){return 0;}
function AZZ(){var b;b=new YF;B8(b);Ba6=b;}
function Ho(){var a=this;B.call(a);a.bl=null;a.ht=0;a.fA=0;a.wr=0;a.ns=0;a.bp=0;a.m=0;a.AH=0;a.fJ=null;a.fx=null;a.z=0;a.ko=0;a.dC=0;a.jW=0;a.bW=null;}
var Ba$=null;var Ba4=null;var Ba5=0;function Y1(a,b){if(b>0&&b<3)a.fA=b;if(b==1){a.m=a.bp;a.fx=a.fJ;a.z=a.jW;a.jW=a.dC;F6(a);}}
function Ht(a){return a.fJ===null?0:1;}
function Li(a){return a.fx===null?0:1;}
function Bo(a){F6(a);return a.ns;}
function GD(a){var b;b=a.fJ;F6(a);return b;}
function F6(a){var b,c,d,e,f,g,h,$$je;a.ns=a.bp;a.bp=a.m;a.fJ=a.fx;a.dC=a.jW;a.jW=a.z;while(true){b=0;c=a.z>=a.bl.data.length?0:Mn(a);a.m=c;a.fx=null;if(a.fA==4){if(c!=92)return;c=a.z;d=a.bl.data;c=c>=d.length?0:d[B_(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.z=a.ko;return;}a.fA=a.wr;a.m=a.z>(a.bl.data.length-2|0)?0:Mn(a);}a:{c=a.m;if(c!=92){e=a.fA;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bl.data[a.z]!=63){a.m=(-2147483608);break a;}B_(a);c=a.bl.data[a.z];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);B_(a);break b;default:N(Cn(C(21),Gb(a),a.z));}a.m=(-67108824);B_(a);}else{switch(c){case 33:break;case 60:B_(a);c=a.bl.data[a.z];e=1;break b;case 61:a.m=(-536870872);B_(a);break b;case 62:a.m=(-33554392);B_(a);break b;default:f=AMX(a);a.m=f;if(f<256){a.ht=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.ht=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);B_(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.z;d=a.bl.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);B_(a);break a;case 63:a.m=c|(-1073741824);B_(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);Y1(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fx=AIM(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.z>=(a.bl.data.length-2|0)?(-1):Mn(a);c:{a.m=c;switch(c){case -1:N(Cn(C(21),Gb(a),a.z));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AHK(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fA!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cn(C(21),Gb(a),a.z));case 68:case 83:case 87:case 100:case 115:case 119:a.fx=SZ(EO(a.bl,
a.ko,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.wr=a.fA;a.fA=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.z;d=a.bl.data;if(c>=(d.length-2|0))N(Cn(C(21),Gb(a),a.z));a.m=d[B_(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=ZA(a,4);break a;case 120:a.m=ZA(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=ALx(a);h=0;if(a.m==80)h=1;try{a.fx=SZ(g,h);}catch($$e){$$je=E_($$e);if($$je instanceof Na){N(Cn(C(21),Gb(a),a.z));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function ALx(a){var b,c,d,e,f,g;b=new J;F7(b,10);c=a.z;d=a.bl;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=EO(d,B_(a),1);f=new J;L(f);H(H(f,C(497)),b);return K(f);}B_(a);c=0;a:{while(true){g=a.z;d=a.bl.data;if(g>=(d.length-2|0))break;c=d[B_(a)];if(c==125)break a;Br(b,c);}}if(c!=125)N(Cn(C(21),a.bW,a.z));}if(!b.I)N(Cn(C(21),a.bW,a.z));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(497)),f);return K(b);}b:{c:{if(M(f)>3){if(N0(f,C(497)))break c;if(N0(f,C(498)))break c;}break b;}f=DC(f,2);}return f;}
function AIM(a,b){var c,d,e,f,g,$$je;c=new J;F7(c,4);d=(-1);e=2147483647;a:{while(true){f=a.z;g=a.bl.data;if(f>=g.length)break a;b=g[B_(a)];if(b==125)break a;if(b==44&&d<0)try{d=La(Em(c),10);AIS(c,0,AJZ(c));continue;}catch($$e){$$je=E_($$e);if($$je instanceof Dz){break;}else{throw $$e;}}Br(c,b&65535);}N(Cn(C(21),a.bW,a.z));}if(b!=125)N(Cn(C(21),a.bW,a.z));if(c.I>0)b:{try{e=La(Em(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=E_($$e);if($$je instanceof Dz){}else{throw $$e;}}N(Cn(C(21),a.bW,a.z));}else if
(d<0)N(Cn(C(21),a.bW,a.z));if((d|e|(e-d|0))<0)N(Cn(C(21),a.bW,a.z));b=a.z;g=a.bl.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);B_(a);break c;case 63:a.m=(-1073741701);B_(a);break c;default:}a.m=(-536870789);}c=new Xz;c.fX=d;c.fW=e;return c;}
function Gb(a){return a.bW;}
function DK(a){return !a.bp&&!a.m&&a.z==a.AH&&!Ht(a)?1:0;}
function NV(b){return b<0?0:1;}
function Fy(a){return !DK(a)&&!Ht(a)&&NV(a.bp)?1:0;}
function YE(a){var b;b=a.bp;return b<=56319&&b>=55296?1:0;}
function ADr(a){var b;b=a.bp;return b<=57343&&b>=56320?1:0;}
function To(b){return b<=56319&&b>=55296?1:0;}
function QX(b){return b<=57343&&b>=56320?1:0;}
function ZA(a,b){var c,d,e,f,$$je;c=new J;F7(c,b);d=a.bl.data.length-2|0;e=0;while(true){f=BP(e,b);if(f>=0)break;if(a.z>=d)break;Br(c,a.bl.data[B_(a)]);e=e+1|0;}if(!f)a:{try{b=La(Em(c),16);}catch($$e){$$je=E_($$e);if($$je instanceof Dz){break a;}else{throw $$e;}}return b;}N(Cn(C(21),a.bW,a.z));}
function AHK(a){var b,c,d,e,f,g;b=3;c=1;d=a.bl.data;e=d.length-2|0;f=ADa(d[a.z],8);switch(f){case -1:break;default:if(f>3)b=2;B_(a);a:{while(true){if(c>=b)break a;g=a.z;if(g>=e)break a;g=ADa(a.bl.data[g],8);if(g<0)break;f=(f*8|0)+g|0;B_(a);c=c+1|0;}}return f;}N(Cn(C(21),a.bW,a.z));}
function AMX(a){var b,c,d,e;b=1;c=a.ht;a:while(true){d=a.z;e=a.bl.data;if(d>=e.length)N(Cn(C(21),a.bW,d));b:{c:{switch(e[d]){case 41:B_(a);return c|256;case 45:if(!b)N(Cn(C(21),a.bW,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}B_(a);}B_(a);return c;}
function B_(a){var b,c,d,e,f;b=a.z;a.ko=b;if(!(a.ht&4))a.z=b+1|0;else{c=a.bl.data.length-2|0;a.z=b+1|0;a:while(true){d=a.z;if(d<c&&Ss(a.bl.data[d])){a.z=a.z+1|0;continue;}d=a.z;if(d>=c)break;e=a.bl.data;if(e[d]!=35)break;a.z=d+1|0;while(true){f=a.z;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.z=f+1|0;}}}return a.ko;}
function AMx(b){return Ba$.Jr(b);}
function Mn(a){var b,c,d,e;b=a.bl.data[B_(a)];if(CY(b)){c=a.ko+1|0;d=a.bl.data;if(c<d.length){e=d[c];if(Dn(e)){B_(a);return E1(b,e);}}}return b;}
function Qt(a){return a.dC;}
function KE(){var a=this;BX.call(a);a.EC=null;a.El=null;a.tz=0;}
function Cn(a,b,c){var d=new KE();Nf(d,a,b,c);return d;}
function Nf(a,b,c,d){X(a);a.tz=(-1);a.EC=b;a.El=c;a.tz=d;}
function FP(){var a=this;B.call(a);a.GB=FV;a.FU=FV;a.Fp=null;a.DU=null;a.Fl=0;a.GH=null;}
var Ba_=null;var Bba=null;var Bbb=0;var Bbc=0;var Bbd=null;function AJc(){AJc=Bm(FP);AOe();}
function AT6(b){AJc();if(Bba!==b)Bba=b;Bba.FU=EI();}
function IE(){AJc();return Bba;}
function AOe(){var b,c,d;b=new FP;AJc();c=null;b.Fp=new B;b.Fl=1;b.DU=C(499);b.GH=c;d=Bbb;Bbb=d+1|0;b.GB=Bq(d);Ba_=b;Bba=b;Bbb=1;Bbc=1;Bbd=new SY;}
function YH(){B.call(this);this.xs=null;}
function AUL(a,b){var c,d;c=a.xs;c.m$=b;HR(c.dw,b.qH);HR(c.dv,c.m$.qI);b=c.uH;d=c.m$;b.hd=d;c.eM.ez=d;}
var SL=G(C6);
function AXR(a,b,c,d){var e;e=a.ev;B2(d,e,b-DL(d,e)|0);return a.f.c(b,c,d);}
function AZi(a){return C(500);}
function A34(a,b){return 0;}
var AFf=G(C6);
function AY_(a,b,c,d){return b;}
function A1d(a){return C(501);}
var Rx=G(C6);
function AOy(a,b,c,d){if(DL(d,a.ev)!=b)b=(-1);return b;}
function A42(a){return C(502);}
function TB(){C6.call(this);this.x5=0;}
function AXV(a,b,c,d){var e;e=a.ev;B2(d,e,b-DL(d,e)|0);a.x5=b;return b;}
function AU8(a){return C(503);}
function A22(a,b){return 0;}
var Gl=G(C6);
function AV2(a,b,c,d){if(d.mt!=1&&b!=d.A)return (-1);d.kT=1;Nq(d,0,b);return b;}
function AYU(a){return C(504);}
function Cf(){BV.call(this);this.bN=0;}
function D9(a){B8(a);a.bN=1;}
function A6y(a,b,c,d){var e;if((b+a.cg()|0)>d.A){d.dU=1;return (-1);}e=a.bE(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A4K(a){return a.bN;}
function ARn(a,b){return 1;}
var AIy=G(Cf);
function Ii(a){var b=new AIy();A11(b,a);return b;}
function A11(a,b){N_(a,b);a.bN=1;a.kb=1;a.bN=0;}
function A4k(a,b,c){return 0;}
function AZ2(a,b,c,d){var e,f,g;e=d.A;f=d.df;while(true){g=BP(b,e);if(g>0)return (-1);if(g<0&&Dn(Q(c,b))&&b>f&&CY(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function AY8(a,b,c,d,e){var f,g;f=e.A;g=e.df;while(true){if(c<b)return (-1);if(c<f&&Dn(Q(d,c))&&c>g&&CY(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AQW(a){return C(505);}
function AXU(a,b){return 0;}
function B$(){var a=this;BV.call(a);a.bP=null;a.e6=null;a.bb=0;}
function A7v(a,b){var c=new B$();Gm(c,a,b);return c;}
function Gm(a,b,c){B8(a);a.bP=b;a.e6=c;a.bb=c.ev;}
function AQD(a,b,c,d){var e,f,g,h;if(a.bP===null)return (-1);e=GR(d,a.bb);D8(d,a.bb,b);f=a.bP.p;g=0;while(true){if(g>=f){D8(d,a.bb,e);return (-1);}h=(BI(a.bP,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATI(a,b){a.e6.f=b;}
function ARw(a){return C(506);}
function A1E(a,b){var c;a:{c=a.bP;if(c!==null){c=B9(c);while(true){if(!Cb(c))break a;if(!(Cc(c)).b6(b))continue;else return 1;}}}return 0;}
function AUc(a,b){return Js(b,a.bb)>=0&&GR(b,a.bb)==Js(b,a.bb)?0:1;}
function AOV(a){var b,c,d,e;a.cI=1;b=a.e6;if(b!==null&&!b.cI)KV(b);a:{b=a.bP;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break a;b=BI(a.bP,d);e=b.gU();if(e===null)e=b;else{b.cI=1;EZ(a.bP,d);AK3(a.bP,d,e);}if(!e.cI)e.e2();d=d+1|0;}}}if(a.f!==null)KV(a);}
var KP=G(B$);
function ATv(a,b,c,d){var e,f,g,h;e=DL(d,a.bb);B2(d,a.bb,b);f=a.bP.p;g=0;while(true){if(g>=f){B2(d,a.bb,e);return (-1);}h=(BI(a.bP,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ASf(a){return C(507);}
function A3H(a,b){return !DL(b,a.bb)?0:1;}
var Eh=G(KP);
function AZu(a,b,c,d){var e,f,g;e=DL(d,a.bb);B2(d,a.bb,b);f=a.bP.p;g=0;while(g<f){if((BI(a.bP,g)).c(b,c,d)>=0)return a.f.c(a.e6.x5,c,d);g=g+1|0;}B2(d,a.bb,e);return (-1);}
function A3z(a,b){a.f=b;}
function ANJ(a){return C(507);}
var Xm=G(Eh);
function ATG(a,b,c,d){var e,f;e=a.bP.p;f=0;while(f<e){if((BI(a.bP,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AVU(a,b){return 0;}
function A5V(a){return C(508);}
var ADY=G(Eh);
function AOp(a,b,c,d){var e,f;e=a.bP.p;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bP,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A4O(a,b){return 0;}
function AQy(a){return C(509);}
var AAF=G(Eh);
function AOT(a,b,c,d){var e,f,g,h;e=a.bP.p;f=d.kW?0:d.df;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.bb,b);h=0;while(true){if(h>=e)break a;if((BI(a.bP,h)).cN(f,b,c,d)>=0){B2(d,a.bb,(-1));return g;}h=h+1|0;}}}return (-1);}
function A6O(a,b){return 0;}
function ATk(a){return C(510);}
var T3=G(Eh);
function AXv(a,b,c,d){var e,f;e=a.bP.p;B2(d,a.bb,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BI(a.bP,f)).cN(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A3U(a,b){return 0;}
function AOA(a){return C(511);}
function H9(){B$.call(this);this.dq=null;}
function A8W(a,b){var c=new H9();AGn(c,a,b);return c;}
function AGn(a,b,c){B8(a);a.dq=b;a.e6=c;a.bb=c.ev;}
function ANA(a,b,c,d){var e,f;e=GR(d,a.bb);D8(d,a.bb,b);f=a.dq.c(b,c,d);if(f>=0)return f;D8(d,a.bb,e);return (-1);}
function ASk(a,b,c,d){var e;e=a.dq.cA(b,c,d);if(e>=0)D8(d,a.bb,e);return e;}
function A36(a,b,c,d,e){var f;f=a.dq.cN(b,c,d,e);if(f>=0)D8(e,a.bb,f);return f;}
function A1C(a,b){return a.dq.b6(b);}
function A2Y(a){var b;b=new PH;AGn(b,a.dq,a.e6);a.f=b;return b;}
function AWv(a){var b;a.cI=1;b=a.e6;if(b!==null&&!b.cI)KV(b);b=a.dq;if(b!==null&&!b.cI){b=b.gU();if(b!==null){a.dq.cI=1;a.dq=b;}a.dq.e2();}}
var Hq=G();
function Ba(){var a=this;Hq.call(a);a.bn=0;a.cH=0;a.Q=null;a.mB=null;a.m7=null;a.T=0;}
var Bbe=null;function QQ(){QQ=Bm(Ba);APf();}
function BB(a){var b;QQ();b=new AED;b.G=BQ(64);a.Q=b;}
function AYt(a){return null;}
function AX7(a){return a.Q;}
function ALp(a){var b,c,d,e,f;if(!a.cH)b=IA(a.Q,0)>=2048?0:1;else{a:{c=a.Q;b=0;d=c.by;if(b<d){e=c.G.data;f=(e[0]^(-1))>>>0|0;if(f)b=Jn(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Jn(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A0D(a){return a.T;}
function A4F(a){return a;}
function AFS(a){var b,c;if(a.m7===null){b=a.f4();c=new V4;c.Gm=a;c.yf=b;BB(c);a.m7=c;E0(c,a.cH);}return a.m7;}
function JU(a){var b,c;if(a.mB===null){b=a.f4();c=new V1;c.EF=a;c.BX=b;c.wy=a;BB(c);a.mB=c;E0(c,a.bn);a.mB.T=a.T;}return a.mB;}
function A5U(a){return 0;}
function E0(a,b){var c;c=a.bn;if(c^b){a.bn=c?0:1;a.cH=a.cH?0:1;}if(!a.T)a.T=1;return a;}
function AP$(a){return a.bn;}
function NT(b,c){QQ();return b.o(c);}
function Kl(b,c){var d,e;QQ();if(b.d3()!==null&&c.d3()!==null){b=b.d3();c=c.d3();d=Be(b.G.data.length,c.G.data.length);e=0;a:{while(e<d){if(b.G.data[e]&c.G.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function SZ(b,c){var d,e,f;QQ();d=0;while(true){AUG();e=Bbf.data;if(d>=e.length){f=new Na;Bp(f,C(21));f.E$=C(21);f.Gr=b;N(f);}e=e[d].data;if(Bk(b,e[0]))break;d=d+1|0;}return AL9(e[1],c);}
function APf(){var b;b=new HA;AUG();Bbe=b;}
function AGg(){var a=this;Ba.call(a);a.p_=0;a.rq=0;a.ib=0;a.nM=0;a.eE=0;a.gR=0;a.N=null;a.bK=null;}
function DM(){var a=new AGg();AW2(a);return a;}
function A5f(a,b){var c=new AGg();AO4(c,a,b);return c;}
function AW2(a){BB(a);a.N=A6R();}
function AO4(a,b,c){BB(a);a.N=A6R();a.p_=b;a.rq=c;}
function CJ(a,b){a:{if(a.p_){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eE){O$(a.N,JV(b&65535));break a;}Me(a.N,JV(b&65535));break a;}if(a.rq&&b>128){a.ib=1;b=Hm(Hk(b));}}}if(!(!To(b)&&!QX(b))){if(a.nM)O$(a.Q,b-55296|0);else Me(a.Q,b-55296|0);}if(a.eE)O$(a.N,b);else Me(a.N,b);if(!a.T&&ML(b))a.T=1;return a;}
function AMZ(a,b){var c,d,e;if(!a.T&&b.T)a.T=1;if(a.nM){if(!b.cH)Gy(a.Q,b.f4());else Dv(a.Q,b.f4());}else if(!b.cH)GX(a.Q,b.f4());else{GN(a.Q,b.f4());Dv(a.Q,b.f4());a.cH=a.cH?0:1;a.nM=1;}if(!a.gR&&b.d3()!==null){if(a.eE){if(!b.bn)Gy(a.N,b.d3());else Dv(a.N,b.d3());}else if(!b.bn)GX(a.N,b.d3());else{GN(a.N,b.d3());Dv(a.N,b.d3());a.bn=a.bn?0:1;a.eE=1;}}else{c=a.bn;d=a.bK;if(d!==null){if(!c){e=new YU;e.Fu=a;e.CG=c;e.wm=d;e.wb=b;BB(e);a.bK=e;}else{e=new YW;e.GG=a;e.t_=c;e.z5=d;e.zF=b;BB(e);a.bK=e;}}else{if(c&&!a.eE
&&O0(a.N)){d=new YR;d.FV=a;d.z$=b;BB(d);a.bK=d;}else if(!c){d=new YP;d.pK=a;d.o9=c;d.yM=b;BB(d);a.bK=d;}else{d=new YQ;d.og=a;d.mZ=c;d.wf=b;BB(d);a.bK=d;}a.gR=1;}}return a;}
function Cd(a,b,c){var d,e,f,g,h;if(b>c){d=new BX;X(d);N(d);}a:{b:{if(!a.p_){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CJ(a,b);b=b+1|0;}}if(!a.eE)Ja(a.N,b,c+1|0);else{d=a.N;c=c+1|0;if(b>c){d=new BJ;X(d);N(d);}e=d.by;if(b<e){f=Be(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.G.data;h[g]=h[g]&(Kg(d,b)|I4(d,f));}else{h=d.G.data;h[g]=h[g]&Kg(d,b);e=g+1|0;while(e<c){d.G.data[e]=0;e=e+1|0;}if(f&31){h=d.G.data;h[c]=h[c]&I4(d,f);}}HB(d);}}}}return a;}
function AJv(a,b){var c,d,e;if(!a.T&&b.T)a.T=1;if(b.ib)a.ib=1;c=a.cH;if(!(c^b.cH)){if(!c)GX(a.Q,b.Q);else Dv(a.Q,b.Q);}else if(c)Gy(a.Q,b.Q);else{GN(a.Q,b.Q);Dv(a.Q,b.Q);a.cH=1;}if(!a.gR&&C$(b)!==null){c=a.bn;if(!(c^b.bn)){if(!c)GX(a.N,C$(b));else Dv(a.N,C$(b));}else if(c)Gy(a.N,C$(b));else{GN(a.N,C$(b));Dv(a.N,C$(b));a.bn=1;}}else{c=a.bn;d=a.bK;if(d!==null){if(!c){e=new QH;e.Dv=a;e.vE=c;e.B7=d;e.wF=b;BB(e);a.bK=e;}else{e=new Q2;e.DL=a;e.Cv=c;e.q7=d;e.rs=b;BB(e);a.bK=e;}}else{if(!a.eE&&O0(a.N)){if(!c){d=new YS;d.GI
=a;d.s1=b;BB(d);a.bK=d;}else{d=new YT;d.Fx=a;d.Cl=b;BB(d);a.bK=d;}}else if(!c){d=new YX;d.vH=a;d.ul=b;d.z8=c;BB(d);a.bK=d;}else{d=new YY;d.uG=a;d.uQ=b;d.A8=c;BB(d);a.bK=d;}a.gR=1;}}}
function Wf(a,b){var c,d,e;if(!a.T&&b.T)a.T=1;if(b.ib)a.ib=1;c=a.cH;if(!(c^b.cH)){if(!c)Dv(a.Q,b.Q);else GX(a.Q,b.Q);}else if(!c)Gy(a.Q,b.Q);else{GN(a.Q,b.Q);Dv(a.Q,b.Q);a.cH=0;}if(!a.gR&&C$(b)!==null){c=a.bn;if(!(c^b.bn)){if(!c)Dv(a.N,C$(b));else GX(a.N,C$(b));}else if(!c)Gy(a.N,C$(b));else{GN(a.N,C$(b));Dv(a.N,C$(b));a.bn=0;}}else{c=a.bn;d=a.bK;if(d!==null){if(!c){e=new QJ;e.Ft=a;e.BF=c;e.ye=d;e.t9=b;BB(e);a.bK=e;}else{e=new QK;e.Fy=a;e.Bj=c;e.xM=d;e.BB=b;BB(e);a.bK=e;}}else{if(!a.eE&&O0(a.N)){if(!c){d=new QF;d.DO
=a;d.ze=b;BB(d);a.bK=d;}else{d=new QG;d.GE=a;d.sN=b;BB(d);a.bK=d;}}else if(!c){d=new QL;d.Dj=a;d.CE=b;d.uK=c;BB(d);a.bK=d;}else{d=new QE;d.uJ=a;d.Bo=b;d.Aj=c;BB(d);a.bK=d;}a.gR=1;}}}
function De(a,b){var c;c=a.bK;if(c!==null)return a.bn^c.o(b);return a.bn^D4(a.N,b);}
function C$(a){if(!a.gR)return a.N;return null;}
function AZY(a){return a.Q;}
function AVF(a){var b,c;if(a.bK!==null)return a;b=C$(a);c=new QI;c.Fi=a;c.lN=b;BB(c);return E0(c,a.bn);}
function A2f(a){var b,c,d;b=new J;L(b);c=IA(a.N,0);while(c>=0){Kn(b,GI(c));Br(b,124);c=IA(a.N,c+1|0);}d=b.I;if(d>0)VR(b,d-1|0);return K(b);}
function AQb(a){return a.ib;}
function Na(){var a=this;Bt.call(a);a.E$=null;a.Gr=null;}
function Eu(){BV.call(this);this.P=null;}
function Dy(a,b,c,d){N_(a,c);a.P=b;a.kb=d;}
function A6E(a){return a.P;}
function AUS(a,b){return !a.P.b6(b)&&!a.f.b6(b)?0:1;}
function A5g(a,b){return 1;}
function ASC(a){var b;a.cI=1;b=a.f;if(b!==null&&!b.cI){b=b.gU();if(b!==null){a.f.cI=1;a.f=b;}a.f.e2();}b=a.P;if(b!==null){if(!b.cI){b=b.gU();if(b!==null){a.P.cI=1;a.P=b;}a.P.e2();}else if(b instanceof H9&&b.e6.pr)a.P=b.f;}}
function Dg(){Eu.call(this);this.bi=null;}
function A7K(a,b,c){var d=new Dg();Fs(d,a,b,c);return d;}
function Fs(a,b,c,d){Dy(a,b,c,d);a.bi=b;}
function AXw(a,b,c,d){var e,f;e=0;a:{while((b+a.bi.cg()|0)<=d.A){f=a.bi.bE(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bi.cg()|0;e=e+(-1)|0;}return f;}
function AY2(a){return C(512);}
function F8(){Dg.call(this);this.je=null;}
function A8u(a,b,c,d){var e=new F8();S2(e,a,b,c,d);return e;}
function S2(a,b,c,d,e){Fs(a,c,d,e);a.je=b;}
function AYf(a,b,c,d){var e,f,g,h,i;e=a.je;f=e.fX;g=e.fW;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bi.cg()|0)>d.A)break a;i=a.bi.bE(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bi.cg()|0;h=h+(-1)|0;}return i;}if((b+a.bi.cg()|0)>d.A){d.dU=1;return (-1);}i=a.bi.bE(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AYv(a){return ACh(a.je);}
var C7=G(Eu);
function AXK(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.P.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A0X(a){return C(513);}
var Fj=G(Dg);
function A1Q(a,b,c,d){var e;e=a.P.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AXb(a,b){a.f=b;a.P.V(b);}
var V5=G(Dg);
function A6s(a,b,c,d){while((b+a.bi.cg()|0)<=d.A&&a.bi.bE(b,c)>0){b=b+a.bi.cg()|0;}return a.f.c(b,c,d);}
function AS3(a,b,c,d){var e,f,g;e=a.f.cA(b,c,d);if(e<0)return (-1);f=e-a.bi.cg()|0;while(f>=b&&a.bi.bE(f,c)>0){g=f-a.bi.cg()|0;e=f;f=g;}return e;}
var PO=G(0);
var SY=G();
function Bg(){var a=this;B.call(a);a.oi=null;a.nv=null;}
function AL9(a,b){if(!b&&a.oi===null)a.oi=a.J();else if(b&&a.nv===null)a.nv=E0(a.J(),1);if(b)return a.nv;return a.oi;}
var Dz=G(BX);
function Xz(){var a=this;Hq.call(a);a.fX=0;a.fW=0;}
function ACh(a){var b,c,d,e,f;b=a.fX;c=a.fW;d=c!=2147483647?Ih(c):C(21);e=new J;L(e);Br(e,123);f=V(e,b);Br(f,44);Br(H(f,d),125);return K(e);}
var YF=G(BV);
function ARH(a,b,c,d){return b;}
function A2S(a){return C(514);}
function A2W(a,b){return 0;}
function AED(){var a=this;B.call(a);a.G=null;a.by=0;}
function A6R(){var a=new AED();AYV(a);return a;}
function AYV(a){a.G=BQ(0);}
function Me(a,b){var c,d;c=b/32|0;if(b>=a.by){Ko(a,c+1|0);a.by=b+1|0;}d=a.G.data;d[c]=d[c]|1<<(b%32|0);}
function Ja(a,b,c){var d,e,f,g,h;d=BP(b,c);if(d>0){e=new BJ;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.by){Ko(a,f+1|0);a.by=c;}if(d==f){g=a.G.data;g[d]=g[d]|I4(a,b)&Kg(a,c);}else{g=a.G.data;g[d]=g[d]|I4(a,b);h=d+1|0;while(h<f){a.G.data[h]=(-1);h=h+1|0;}if(c&31){g=a.G.data;g[f]=g[f]|Kg(a,c);}}}
function I4(a,b){return (-1)<<(b%32|0);}
function Kg(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function O$(a,b){var c,d,e,f;c=b/32|0;d=a.G.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.by-1|0))HB(a);}}
function D4(a,b){var c,d;c=b/32|0;d=a.G.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function IA(a,b){var c,d,e,f;c=a.by;if(b>=c)return (-1);d=b/32|0;e=a.G.data;f=e[d]>>>(b%32|0)|0;if(f)return Jn(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Jn(e[f])|0;f=f+1|0;}return (-1);}
function Ko(a,b){var c;c=a.G.data.length;if(c>=b)return;c=Bd((b*3|0)/2|0,(c*2|0)+1|0);a.G=JE(a.G,c);}
function HB(a){var b,c,d;b=(a.by+31|0)/32|0;a.by=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Yj(a.G.data[c]);if(d<32)break;c=c+(-1)|0;a.by=a.by-32|0;}a.by=a.by-d|0;}}
function Dv(a,b){var c,d,e,f;c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&b.G.data[d];d=d+1|0;}while(true){f=a.G.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.by=Be(a.by,b.by);HB(a);}
function Gy(a,b){var c,d,e;c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&(b.G.data[d]^(-1));d=d+1|0;}HB(a);}
function GX(a,b){var c,d,e;c=Bd(a.by,b.by);a.by=c;Ko(a,(c+31|0)/32|0);c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]|b.G.data[d];d=d+1|0;}}
function GN(a,b){var c,d,e;c=Bd(a.by,b.by);a.by=c;Ko(a,(c+31|0)/32|0);c=Be(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]^b.G.data[d];d=d+1|0;}HB(a);}
function O0(a){return a.by?0:1;}
function Pw(){var a=this;B$.call(a);a.nu=null;a.xL=0;}
function A23(a){var b,c,d;b=!a.xL?C(64):C(515);c=a.nu.K();d=new J;L(d);H(H(H(d,C(516)),b),c);return K(d);}
function R0(){var a=this;B$.call(a);a.lh=null;a.mq=null;}
function AHR(a,b){var c=new R0();AI9(c,a,b);return c;}
function AI9(a,b,c){B8(a);a.lh=b;a.mq=c;}
function AN9(a,b,c,d){var e,f,g,h,i;e=a.lh.c(b,c,d);if(e<0)a:{f=a.mq;g=d.df;e=d.A;h=b+1|0;e=BP(h,e);if(e>0){d.dU=1;e=(-1);}else{i=Q(c,b);if(!f.nu.o(i))e=(-1);else{if(CY(i)){if(e<0&&Dn(Q(c,h))){e=(-1);break a;}}else if(Dn(i)&&b>g&&CY(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A2N(a,b){a.f=b;a.mq.f=b;a.lh.V(b);}
function A3c(a){var b,c,d;b=a.lh;c=a.mq;d=new J;L(d);H(H(H(H(d,C(517)),b),C(518)),c);return K(d);}
function AOE(a,b){return 1;}
function AOr(a,b){return 1;}
function Ea(){var a=this;B$.call(a);a.du=null;a.nU=0;}
function A1l(a){var b=new Ea();AC0(b,a);return b;}
function AC0(a,b){B8(a);a.du=b.ml();a.nU=b.bn;}
function AZR(a,b,c,d){var e,f,g,h;e=d.A;if(b<e){f=b+1|0;g=Q(c,b);if(a.o(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(JN(g,f)&&a.o(E1(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A5O(a){var b,c,d;b=!a.nU?C(64):C(515);c=a.du.K();d=new J;L(d);H(H(H(d,C(516)),b),c);return K(d);}
function AQn(a,b){return a.du.o(b);}
function AN4(a,b){if(b instanceof Eo)return NT(a.du,b.hh);if(b instanceof EX)return NT(a.du,b.ds);if(b instanceof Ea)return Kl(a.du,b.du);if(!(b instanceof EQ))return 1;return Kl(a.du,b.fR);}
function ARA(a){return a.du;}
function A4y(a,b){a.f=b;}
function AP3(a,b){return 1;}
var M9=G(Ea);
function ARo(a,b){return a.du.o(Hm(Hk(b)));}
function AWA(a){var b,c,d;b=!a.nU?C(64):C(515);c=a.du.K();d=new J;L(d);H(H(H(d,C(519)),b),c);return K(d);}
function AGa(){var a=this;Cf.call(a);a.pR=null;a.tg=0;}
function AQQ(a){var b=new AGa();ATc(b,a);return b;}
function ATc(a,b){D9(a);a.pR=b.ml();a.tg=b.bn;}
function A1p(a,b,c){return !a.pR.o(FX(FB(Q(c,b))))?(-1):1;}
function AYA(a){var b,c,d;b=!a.tg?C(64):C(515);c=a.pR.K();d=new J;L(d);H(H(H(d,C(519)),b),c);return K(d);}
function EQ(){var a=this;Cf.call(a);a.fR=null;a.uU=0;}
function AVA(a){var b=new EQ();AT1(b,a);return b;}
function AT1(a,b){D9(a);a.fR=b.ml();a.uU=b.bn;}
function Xc(a,b,c){return !a.fR.o(Q(c,b))?(-1):1;}
function ARM(a){var b,c,d;b=!a.uU?C(64):C(515);c=a.fR.K();d=new J;L(d);H(H(H(d,C(516)),b),c);return K(d);}
function ATK(a,b){if(b instanceof EX)return NT(a.fR,b.ds);if(b instanceof EQ)return Kl(a.fR,b.fR);if(!(b instanceof Ea)){if(!(b instanceof Eo))return 1;return 0;}return Kl(a.fR,b.du);}
function Y0(){var a=this;B$.call(a);a.jt=null;a.qx=null;a.lc=0;}
function A44(a,b){var c=new Y0();AXL(c,a,b);return c;}
function AXL(a,b,c){B8(a);a.jt=b;a.lc=c;}
function ASq(a,b){a.f=b;}
function Ly(a){if(a.qx===null)a.qx=Gz(a.jt);return a.qx;}
function AUK(a){var b,c;b=Ly(a);c=new J;L(c);H(H(c,C(520)),b);return K(c);}
function ANh(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.A;f=BQ(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?D6([k,l]):D6([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.lc;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jt.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.lc==3){k=f[0];m=a.jt.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.lc==2){b=f[0];m=a.jt.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AYD(a,b){return b instanceof Y0&&!Bk(Ly(b),Ly(a))?0:1;}
function AVK(a,b){return 1;}
function EX(){Cf.call(this);this.ds=0;}
function AGp(a){var b=new EX();AT5(b,a);return b;}
function AT5(a,b){D9(a);a.ds=b;}
function A1e(a){return 1;}
function AQN(a,b,c){return a.ds!=Q(c,b)?(-1):1;}
function APP(a,b,c,d){var e,f,g;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Kj(c,a.ds,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ARC(a,b,c,d,e){var f;if(!(d instanceof BC))return I8(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HK(d,a.ds,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AVW(a){var b,c;b=a.ds;c=new J;L(c);Br(c,b);return K(c);}
function AVB(a,b){if(b instanceof EX)return b.ds!=a.ds?0:1;if(!(b instanceof EQ)){if(b instanceof Ea)return b.o(a.ds);if(!(b instanceof Eo))return 1;return 0;}return Xc(b,0,Wq(a.ds))<=0?0:1;}
function AIV(){Cf.call(this);this.o7=0;}
function A3B(a){var b=new AIV();A1_(b,a);return b;}
function A1_(a,b){D9(a);a.o7=FX(FB(b));}
function AXk(a,b,c){return a.o7!=FX(FB(Q(c,b)))?(-1):1;}
function A2M(a){var b,c;b=a.o7;c=new J;L(c);Br(H(c,C(521)),b);return K(c);}
function AFy(){var a=this;Cf.call(a);a.oM=0;a.yc=0;}
function AY0(a){var b=new AFy();AUD(b,a);return b;}
function AUD(a,b){D9(a);a.oM=b;a.yc=JV(b);}
function ANs(a,b,c){return a.oM!=Q(c,b)&&a.yc!=Q(c,b)?(-1):1;}
function AQ1(a){var b,c;b=a.oM;c=new J;L(c);Br(H(c,C(522)),b);return K(c);}
function Ga(){var a=this;B$.call(a);a.j6=0;a.no=null;a.mW=null;a.mQ=0;}
function A9s(a,b){var c=new Ga();Qj(c,a,b);return c;}
function Qj(a,b,c){B8(a);a.j6=1;a.mW=b;a.mQ=c;}
function A53(a,b){a.f=b;}
function ATu(a,b,c,d){var e,f,g,h,i,j,k,l;e=BQ(4);f=d.A;if(b>=f)return (-1);g=LI(a,b,c,f);h=b+a.j6|0;i=AMx(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Da(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LI(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(AMx(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.j6|0;if(h>=f){b=k;break a;}g=LI(a,h,c,f);b=k;}}}if(b!=a.mQ)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.mW.data[g])break;g=g+1|0;}return (-1);}
function MG(a){var b,c;if(a.no===null){b=new J;L(b);c=0;while(c<a.mQ){Kn(b,GI(a.mW.data[c]));c=c+1|0;}a.no=K(b);}return a.no;}
function A2D(a){var b,c;b=MG(a);c=new J;L(c);H(H(c,C(523)),b);return K(c);}
function LI(a,b,c,d){var e,f,g;a.j6=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(JN(e,f)){g=B6(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&CY(g[0])&&Dn(g[1])?E1(g[0],g[1]):g[0];a.j6=2;}}return e;}
function ARI(a,b){return b instanceof Ga&&!Bk(MG(b),MG(a))?0:1;}
function A3A(a,b){return 1;}
var Wy=G(Ga);
var ACx=G(Ga);
var W$=G(C7);
function AZe(a,b,c,d){var e;while(true){e=a.P.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var Zx=G(C7);
function A18(a,b,c,d){var e;e=a.P.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.P.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var GZ=G(C7);
function A4u(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.P.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A5t(a,b){a.f=b;a.P.V(b);}
var Rd=G(GZ);
function ARy(a,b,c,d){var e;e=a.P.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A2p(a,b){a.f=b;}
function GE(){var a=this;C7.call(a);a.gn=null;a.dV=0;}
function Bbg(a,b,c,d,e){var f=new GE();M8(f,a,b,c,d,e);return f;}
function M8(a,b,c,d,e,f){Dy(a,c,d,e);a.gn=b;a.dV=f;}
function A6L(a,b,c,d){var e,f;e=Xx(d,a.dV);if(!a.P.M(d))return a.f.c(b,c,d);if(e>=a.gn.fW)return a.f.c(b,c,d);f=a.dV;e=e+1|0;E7(d,f,e);f=a.P.c(b,c,d);if(f>=0){E7(d,a.dV,0);return f;}f=a.dV;e=e+(-1)|0;E7(d,f,e);if(e>=a.gn.fX)return a.f.c(b,c,d);E7(d,a.dV,0);return (-1);}
function AV8(a){return ACh(a.gn);}
var PL=G(GE);
function AQ6(a,b,c,d){var e,f,g;e=0;f=a.gn.fW;a:{while(true){g=a.P.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gn.fX)return (-1);return a.f.c(b,c,d);}
var SF=G(C7);
function AWB(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.P.c(b,c,d);}
var AAb=G(GZ);
function AOF(a,b,c,d){var e;if(!a.P.M(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.P.c(b,c,d);return e;}
var UI=G(GE);
function AX0(a,b,c,d){var e,f,g;e=Xx(d,a.dV);if(!a.P.M(d))return a.f.c(b,c,d);f=a.gn;if(e>=f.fW){E7(d,a.dV,0);return a.f.c(b,c,d);}if(e<f.fX){E7(d,a.dV,e+1|0);g=a.P.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){E7(d,a.dV,0);return g;}E7(d,a.dV,e+1|0);g=a.P.c(b,c,d);}return g;}
var SG=G(Eu);
function A6A(a,b,c,d){var e;e=d.A;if(e>b)return a.f.cN(b,e,c,d);return a.f.c(b,c,d);}
function AVi(a,b,c,d){var e;e=d.A;if(a.f.cN(b,e,c,d)>=0)return b;return (-1);}
function A3i(a){return C(524);}
function YL(){Eu.call(this);this.nr=null;}
function ATL(a,b,c,d){var e,f;e=d.A;f=ADe(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cN(b,e,c,d);return a.f.c(b,c,d);}
function ANi(a,b,c,d){var e,f,g,h;e=d.A;f=a.f.cA(b,c,d);if(f<0)return (-1);g=ADe(a,f,e,c);if(g>=0)e=g;g=Bd(f,a.f.cN(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.nr.i9(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function ADe(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nr.i9(Q(d,b)))break;b=b+1|0;}return b;}
function A30(a){return C(525);}
var FM=G();
var Bbh=null;var Bbi=null;function Zj(b){var c;if(!(b&1)){c=Bbi;if(c!==null)return c;c=new ADy;Bbi=c;return c;}c=Bbh;if(c!==null)return c;c=new ADx;Bbh=c;return c;}
var AFv=G(Dg);
function ANU(a,b,c,d){var e;a:{while(true){if((b+a.bi.cg()|0)>d.A)break a;e=a.bi.bE(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var VZ=G(Fj);
function ASR(a,b,c,d){var e;if((b+a.bi.cg()|0)<=d.A){e=a.bi.bE(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var Y$=G(F8);
function A39(a,b,c,d){var e,f,g,h,i;e=a.je;f=e.fX;g=e.fW;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bi.cg()|0)>d.A)break a;i=a.bi.bE(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bi.cg()|0)>d.A){d.dU=1;return (-1);}i=a.bi.bE(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var AAa=G(Dg);
function ATH(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bi.cg()|0)<=d.A){e=a.bi.bE(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ACI=G(Fj);
function AN2(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.P.c(b,c,d);}
var Sx=G(F8);
function A4m(a,b,c,d){var e,f,g,h,i,j;e=a.je;f=e.fX;g=e.fW;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bi.cg()|0)<=d.A){i=a.bi.bE(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bi.cg()|0)>d.A){d.dU=1;return (-1);}j=a.bi.bE(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LG=G(BV);
function A1D(a,b,c,d){if(b&&!(d.gS&&b==d.df))return (-1);return a.f.c(b,c,d);}
function A07(a,b){return 0;}
function AST(a){return C(526);}
function AGv(){BV.call(this);this.wo=0;}
function A4U(a){var b=new AGv();ARr(b,a);return b;}
function ARr(a,b){B8(a);a.wo=b;}
function AYr(a,b,c,d){var e,f,g;e=b<d.A?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.kW?0:d.df;return (e!=32&&!AAe(a,e,b,g,c)?0:1)^(f!=32&&!AAe(a,f,b-1|0,g,c)?0:1)^a.wo?(-1):a.f.c(b,c,d);}
function AYB(a,b){return 0;}
function A6J(a){return C(527);}
function AAe(a,b,c,d,e){var f;if(!K_(b)&&b!=95){a:{if(CI(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(K_(f))return 0;if(CI(f)!=6)return 1;}}return 1;}return 0;}
var YI=G(BV);
function ARq(a,b,c,d){if(b!=d.jg)return (-1);return a.f.c(b,c,d);}
function AW3(a,b){return 0;}
function AYh(a){return C(528);}
function Wu(){BV.call(this);this.hv=0;}
function A7T(a){var b=new Wu();AMp(b,a);return b;}
function AMp(a,b){B8(a);a.hv=b;}
function A3m(a,b,c,d){var e,f,g;e=!d.gS?M(c):d.A;if(b>=e){B2(d,a.hv,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hv,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hv,0);return a.f.c(b,c,d);}
function AY9(a,b){var c;c=!DL(b,a.hv)?0:1;B2(b,a.hv,(-1));return c;}
function A1R(a){return C(529);}
var AEl=G(BV);
function A2K(a,b,c,d){if(b<(d.kW?M(c):d.A))return (-1);d.dU=1;d.Gf=1;return a.f.c(b,c,d);}
function AXj(a,b){return 0;}
function AQC(a){return C(530);}
function XS(){BV.call(this);this.Ao=null;}
function AY4(a,b,c,d){a:{if(b!=d.A){if(!b)break a;if(d.gS&&b==d.df)break a;if(a.Ao.Bm(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function AQu(a,b){return 0;}
function AYb(a){return C(531);}
var AIH=G(B$);
function A71(){var a=new AIH();A2y(a);return a;}
function A2y(a){B8(a);}
function AWF(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.dU=1;return (-1);}g=Q(c,b);if(CY(g)){h=b+2|0;if(h<=e&&JN(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function APu(a){return C(532);}
function AYF(a,b){a.f=b;}
function A2v(a){return (-2147483602);}
function AYE(a,b){return 1;}
function AGf(){B$.call(this);this.nR=null;}
function A7Q(a){var b=new AGf();AOX(b,a);return b;}
function AOX(a,b){B8(a);a.nR=b;}
function A2E(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;if(f>e){d.dU=1;return (-1);}g=Q(c,b);if(CY(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(JN(g,h))return a.nR.i9(E1(g,h))?(-1):a.f.c(b,c,d);}}return a.nR.i9(g)?(-1):a.f.c(f,c,d);}
function AZd(a){return C(65);}
function A3Z(a,b){a.f=b;}
function AM6(a){return (-2147483602);}
function AWT(a,b){return 1;}
function AMv(){BV.call(this);this.jZ=0;}
function A7z(a){var b=new AMv();A0i(b,a);return b;}
function A0i(a,b){B8(a);a.jZ=b;}
function ARL(a,b,c,d){var e;e=!d.gS?M(c):d.A;if(b>=e){B2(d,a.jZ,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.jZ,1);return a.f.c(b+1|0,c,d);}return (-1);}
function A0h(a,b){var c;c=!DL(b,a.jZ)?0:1;B2(b,a.jZ,(-1));return c;}
function AR6(a){return C(529);}
function ALs(){BV.call(this);this.i0=0;}
function A7n(a){var b=new ALs();A0E(b,a);return b;}
function A0E(a,b){B8(a);a.i0=b;}
function ATn(a,b,c,d){if((!d.gS?M(c)-b|0:d.A-b|0)<=0){B2(d,a.i0,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.i0,1);return a.f.c(b+1|0,c,d);}
function A0b(a,b){var c;c=!DL(b,a.i0)?0:1;B2(b,a.i0,(-1));return c;}
function ANH(a){return C(533);}
function AJu(){BV.call(this);this.g5=0;}
function A65(a){var b=new AJu();A6N(b,a);return b;}
function A6N(a,b){B8(a);a.g5=b;}
function A02(a,b,c,d){var e,f,g;e=!d.gS?M(c)-b|0:d.A-b|0;if(!e){B2(d,a.g5,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.g5,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.g5,0);return a.f.c(b,c,d);}B2(d,a.g5,0);return a.f.c(b,c,d);default:}return (-1);}
function AO1(a,b){var c;c=!DL(b,a.g5)?0:1;B2(b,a.g5,(-1));return c;}
function AQv(a){return C(534);}
function Iu(){var a=this;B$.call(a);a.rl=0;a.hM=0;}
function A9p(a,b){var c=new Iu();QW(c,a,b);return c;}
function QW(a,b,c){B8(a);a.rl=b;a.hM=c;}
function ANX(a,b,c,d){var e,f,g,h;e=G9(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.hM,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&JV(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A3w(a,b){a.f=b;}
function G9(a,b){var c,d;c=a.rl;d=GR(b,c);c=Js(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.nV)?Cy(b.nV,d,c):null;}
function AXS(a){var b,c;b=a.bb;c=new J;L(c);V(H(c,C(535)),b);return K(c);}
function AUv(a,b){var c;c=!DL(b,a.hM)?0:1;B2(b,a.hM,(-1));return c;}
var AMB=G(Iu);
function A8e(a,b){var c=new AMB();A5j(c,a,b);return c;}
function A5j(a,b,c){QW(a,b,c);}
function AO6(a,b,c,d){var e,f;e=G9(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=!ACZ(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.hM,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AVS(a,b,c,d){var e,f;e=G9(a,d);f=d.df;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=Zz(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function ANI(a,b,c,d,e){var f,g;f=G9(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=Ry(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A13(a,b){return 1;}
function A5s(a){var b,c;b=a.bb;c=new J;L(c);V(H(c,C(536)),b);return K(c);}
function AKL(){Iu.call(this);this.Dx=0;}
function A7o(a,b){var c=new AKL();AQs(c,a,b);return c;}
function AQs(a,b,c){QW(a,b,c);}
function ASg(a,b,c,d){var e,f;e=G9(a,d);if(e!==null&&(b+M(e)|0)<=d.A){f=0;while(true){if(f>=M(e)){B2(d,a.hM,M(e));return a.f.c(b+M(e)|0,c,d);}if(FX(FB(Q(e,f)))!=FX(FB(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AYC(a){var b,c;b=a.Dx;c=new J;L(c);V(H(c,C(537)),b);return K(c);}
var Qv=G(Hb);
function AQe(a,b,c,d,e){XC(a,b,c,d,e);return a;}
function AYu(a,b,c,d){AEO(a,b,c,d);return a;}
function AYT(a,b){Np(a,b);}
function A4J(a,b,c){AE6(a,b,c);return a;}
function AAT(){var a=this;Cf.call(a);a.cw=null;a.pE=null;a.n3=null;}
function APn(a,b,c){return !LF(a,c,b)?(-1):a.bN;}
function AYp(a,b,c,d){var e,f,g;e=d.A;while(true){if(b>e)return (-1);f=Q(a.cw,a.bN-1|0);a:{while(true){g=a.bN;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&LF(a,c,b))break;b=b+ABx(a.pE,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bN|0,c,d)>=0)break;b=b+1|0;}return b;}
function A0m(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cw,0);g=(M(d)-c|0)-a.bN|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&LF(a,d,c))break;c=c-ABx(a.n3,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bN|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ATC(a){var b,c;b=a.cw;c=new J;L(c);H(H(c,C(538)),b);return K(c);}
function AQT(a,b){var c;if(b instanceof EX)return b.ds!=Q(a.cw,0)?0:1;if(b instanceof EQ)return Xc(b,0,Cy(a.cw,0,1))<=0?0:1;if(!(b instanceof Ea)){if(!(b instanceof Eo))return 1;return M(a.cw)>1&&b.hh==E1(Q(a.cw,0),Q(a.cw,1))?1:0;}a:{b:{b=b;if(!b.o(Q(a.cw,0))){if(M(a.cw)<=1)break b;if(!b.o(E1(Q(a.cw,0),Q(a.cw,1))))break b;}c=1;break a;}c=0;}return c;}
function LF(a,b,c){var d;d=0;while(d<a.bN){if(Q(b,d+c|0)!=Q(a.cw,d))return 0;d=d+1|0;}return 1;}
function AFx(){Cf.call(this);this.j2=null;}
function A9r(a){var b=new AFx();A4Z(b,a);return b;}
function A4Z(a,b){var c,d,e;D9(a);c=new J;L(c);d=0;while(true){e=BP(d,b.I);if(e>=0){a.j2=K(c);a.bN=c.I;return;}if(d<0)break;if(e>=0)break;Br(c,FX(FB(b.D.data[d])));d=d+1|0;}b=new BJ;X(b);N(b);}
function ASl(a,b,c){var d;d=0;while(true){if(d>=M(a.j2))return M(a.j2);if(Q(a.j2,d)!=FX(FB(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function AQ2(a){var b,c;b=a.j2;c=new J;L(c);H(H(c,C(539)),b);return K(c);}
function PP(){Cf.call(this);this.h3=null;}
function A3$(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.h3))return M(a.h3);e=Q(a.h3,d);f=b+d|0;if(e!=Q(c,f)&&JV(Q(a.h3,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A41(a){var b,c;b=a.h3;c=new J;L(c);H(H(c,C(540)),b);return K(c);}
var HA=G();
var Bbj=null;var Bbk=null;var Bbf=null;function AUG(){AUG=Bm(HA);APE();}
function APE(){Bbj=A7X();Bbk=A8I();Bbf=I($rt_arraycls(B),[I(B,[C(541),A74()]),I(B,[C(542),A63()]),I(B,[C(543),A9b()]),I(B,[C(544),A9g()]),I(B,[C(545),Bbk]),I(B,[C(546),A8P()]),I(B,[C(547),A7s()]),I(B,[C(548),A8g()]),I(B,[C(549),A8d()]),I(B,[C(550),A6$()]),I(B,[C(551),A7f()]),I(B,[C(552),A8j()]),I(B,[C(553),A7J()]),I(B,[C(554),A6Z()]),I(B,[C(555),A9e()]),I(B,[C(556),A7e()]),I(B,[C(557),A8N()]),I(B,[C(558),A8t()]),I(B,[C(559),A8O()]),I(B,[C(560),A7a()]),I(B,[C(561),A9j()]),I(B,[C(562),A8n()]),I(B,[C(563),A7B()]),
I(B,[C(564),A8_()]),I(B,[C(565),A88()]),I(B,[C(566),A7Y()]),I(B,[C(567),A6_()]),I(B,[C(568),A81()]),I(B,[C(569),Bbj]),I(B,[C(570),A7E()]),I(B,[C(571),A8i()]),I(B,[C(572),Bbj]),I(B,[C(573),A6X()]),I(B,[C(574),Bbk]),I(B,[C(575),A7j()]),I(B,[C(576),R(0,127)]),I(B,[C(577),R(128,255)]),I(B,[C(578),R(256,383)]),I(B,[C(579),R(384,591)]),I(B,[C(580),R(592,687)]),I(B,[C(581),R(688,767)]),I(B,[C(582),R(768,879)]),I(B,[C(583),R(880,1023)]),I(B,[C(584),R(1024,1279)]),I(B,[C(585),R(1280,1327)]),I(B,[C(586),R(1328,1423)]),
I(B,[C(587),R(1424,1535)]),I(B,[C(588),R(1536,1791)]),I(B,[C(589),R(1792,1871)]),I(B,[C(590),R(1872,1919)]),I(B,[C(591),R(1920,1983)]),I(B,[C(592),R(2304,2431)]),I(B,[C(593),R(2432,2559)]),I(B,[C(594),R(2560,2687)]),I(B,[C(595),R(2688,2815)]),I(B,[C(596),R(2816,2943)]),I(B,[C(597),R(2944,3071)]),I(B,[C(598),R(3072,3199)]),I(B,[C(599),R(3200,3327)]),I(B,[C(600),R(3328,3455)]),I(B,[C(601),R(3456,3583)]),I(B,[C(602),R(3584,3711)]),I(B,[C(603),R(3712,3839)]),I(B,[C(604),R(3840,4095)]),I(B,[C(605),R(4096,4255)]),
I(B,[C(606),R(4256,4351)]),I(B,[C(607),R(4352,4607)]),I(B,[C(608),R(4608,4991)]),I(B,[C(609),R(4992,5023)]),I(B,[C(610),R(5024,5119)]),I(B,[C(611),R(5120,5759)]),I(B,[C(612),R(5760,5791)]),I(B,[C(613),R(5792,5887)]),I(B,[C(614),R(5888,5919)]),I(B,[C(615),R(5920,5951)]),I(B,[C(616),R(5952,5983)]),I(B,[C(617),R(5984,6015)]),I(B,[C(618),R(6016,6143)]),I(B,[C(619),R(6144,6319)]),I(B,[C(620),R(6400,6479)]),I(B,[C(621),R(6480,6527)]),I(B,[C(622),R(6528,6623)]),I(B,[C(623),R(6624,6655)]),I(B,[C(624),R(6656,6687)]),
I(B,[C(625),R(7424,7551)]),I(B,[C(626),R(7552,7615)]),I(B,[C(627),R(7616,7679)]),I(B,[C(628),R(7680,7935)]),I(B,[C(629),R(7936,8191)]),I(B,[C(630),R(8192,8303)]),I(B,[C(631),R(8304,8351)]),I(B,[C(632),R(8352,8399)]),I(B,[C(633),R(8400,8447)]),I(B,[C(634),R(8448,8527)]),I(B,[C(635),R(8528,8591)]),I(B,[C(636),R(8592,8703)]),I(B,[C(637),R(8704,8959)]),I(B,[C(638),R(8960,9215)]),I(B,[C(639),R(9216,9279)]),I(B,[C(640),R(9280,9311)]),I(B,[C(641),R(9312,9471)]),I(B,[C(642),R(9472,9599)]),I(B,[C(643),R(9600,9631)]),
I(B,[C(644),R(9632,9727)]),I(B,[C(645),R(9728,9983)]),I(B,[C(646),R(9984,10175)]),I(B,[C(647),R(10176,10223)]),I(B,[C(648),R(10224,10239)]),I(B,[C(649),R(10240,10495)]),I(B,[C(650),R(10496,10623)]),I(B,[C(651),R(10624,10751)]),I(B,[C(652),R(10752,11007)]),I(B,[C(653),R(11008,11263)]),I(B,[C(654),R(11264,11359)]),I(B,[C(655),R(11392,11519)]),I(B,[C(656),R(11520,11567)]),I(B,[C(657),R(11568,11647)]),I(B,[C(658),R(11648,11743)]),I(B,[C(659),R(11776,11903)]),I(B,[C(660),R(11904,12031)]),I(B,[C(661),R(12032,12255)]),
I(B,[C(662),R(12272,12287)]),I(B,[C(663),R(12288,12351)]),I(B,[C(664),R(12352,12447)]),I(B,[C(665),R(12448,12543)]),I(B,[C(666),R(12544,12591)]),I(B,[C(667),R(12592,12687)]),I(B,[C(668),R(12688,12703)]),I(B,[C(669),R(12704,12735)]),I(B,[C(670),R(12736,12783)]),I(B,[C(671),R(12784,12799)]),I(B,[C(672),R(12800,13055)]),I(B,[C(673),R(13056,13311)]),I(B,[C(674),R(13312,19893)]),I(B,[C(675),R(19904,19967)]),I(B,[C(676),R(19968,40959)]),I(B,[C(677),R(40960,42127)]),I(B,[C(678),R(42128,42191)]),I(B,[C(679),R(42752,
42783)]),I(B,[C(680),R(43008,43055)]),I(B,[C(681),R(44032,55203)]),I(B,[C(682),R(55296,56191)]),I(B,[C(683),R(56192,56319)]),I(B,[C(684),R(56320,57343)]),I(B,[C(685),R(57344,63743)]),I(B,[C(686),R(63744,64255)]),I(B,[C(687),R(64256,64335)]),I(B,[C(688),R(64336,65023)]),I(B,[C(689),R(65024,65039)]),I(B,[C(690),R(65040,65055)]),I(B,[C(691),R(65056,65071)]),I(B,[C(692),R(65072,65103)]),I(B,[C(693),R(65104,65135)]),I(B,[C(694),R(65136,65279)]),I(B,[C(695),R(65280,65519)]),I(B,[C(696),R(0,1114111)]),I(B,[C(697),
A8k()]),I(B,[C(698),B7(0,1)]),I(B,[C(699),KF(62,1)]),I(B,[C(700),B7(1,1)]),I(B,[C(701),B7(2,1)]),I(B,[C(702),B7(3,0)]),I(B,[C(703),B7(4,0)]),I(B,[C(704),B7(5,1)]),I(B,[C(705),KF(448,1)]),I(B,[C(706),B7(6,1)]),I(B,[C(707),B7(7,0)]),I(B,[C(708),B7(8,1)]),I(B,[C(709),KF(3584,1)]),I(B,[C(710),B7(9,1)]),I(B,[C(711),B7(10,1)]),I(B,[C(712),B7(11,1)]),I(B,[C(713),KF(28672,0)]),I(B,[C(714),B7(12,0)]),I(B,[C(715),B7(13,0)]),I(B,[C(716),B7(14,0)]),I(B,[C(717),A8F(983040,1,1)]),I(B,[C(718),B7(15,0)]),I(B,[C(719),B7(16,
1)]),I(B,[C(720),B7(18,1)]),I(B,[C(721),A7y(19,0,1)]),I(B,[C(722),KF(1643118592,1)]),I(B,[C(723),B7(20,0)]),I(B,[C(724),B7(21,0)]),I(B,[C(725),B7(22,0)]),I(B,[C(726),B7(23,0)]),I(B,[C(727),B7(24,1)]),I(B,[C(728),KF(2113929216,1)]),I(B,[C(729),B7(25,1)]),I(B,[C(730),B7(26,0)]),I(B,[C(731),B7(27,0)]),I(B,[C(732),B7(28,1)]),I(B,[C(733),B7(29,0)]),I(B,[C(734),B7(30,0)])]);}
function Xh(){Cf.call(this);this.nN=0;}
function AUY(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.nN!=Hm(Hk(E1(e,d)))?(-1):2;}
function A6I(a){var b,c;b=Gz(GI(a.nN));c=new J;L(c);H(H(c,C(521)),b);return K(c);}
function Oh(){B$.call(this);this.gy=0;}
function ATj(a){var b=new Oh();AOI(b,a);return b;}
function AOI(a,b){B8(a);a.gy=b;}
function A2T(a,b){a.f=b;}
function AY$(a,b,c,d){var e,f;e=b+1|0;if(e>d.A){d.dU=1;return (-1);}f=Q(c,b);if(b>d.df&&CY(Q(c,b-1|0)))return (-1);if(a.gy!=f)return (-1);return a.f.c(e,c,d);}
function AQR(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.df;f=d.A;while(true){if(b>=f)return (-1);g=Kj(c,a.gy,b);if(g<0)return (-1);if(g>e&&CY(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function AZy(a,b,c,d,e){var f,g;if(!(d instanceof BC))return I8(a,b,c,d,e);f=e.df;a:{while(true){if(c<b)return (-1);g=HK(d,a.gy,c);if(g<0)break a;if(g<b)break a;if(g>f&&CY(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AVl(a){var b,c;b=a.gy;c=new J;L(c);Br(c,b);return K(c);}
function ANF(a,b){if(b instanceof EX)return 0;if(b instanceof EQ)return 0;if(b instanceof Ea)return 0;if(b instanceof Eo)return 0;if(b instanceof Oo)return 0;if(!(b instanceof Oh))return 1;return b.gy!=a.gy?0:1;}
function AVs(a,b){return 1;}
function Oo(){B$.call(this);this.gh=0;}
function A05(a){var b=new Oo();ATl(b,a);return b;}
function ATl(a,b){B8(a);a.gh=b;}
function AYS(a,b){a.f=b;}
function ANn(a,b,c,d){var e,f,g,h;e=d.A;f=b+1|0;g=BP(f,e);if(g>0){d.dU=1;return (-1);}h=Q(c,b);if(g<0&&Dn(Q(c,f)))return (-1);if(a.gh!=h)return (-1);return a.f.c(f,c,d);}
function A27(a,b,c,d){var e,f;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.A;while(true){if(b>=e)return (-1);f=Kj(c,a.gh,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dn(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AUT(a,b,c,d,e){var f,g;if(!(d instanceof BC))return I8(a,b,c,d,e);f=e.A;a:{while(true){if(c<b)return (-1);g=HK(d,a.gh,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dn(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A6b(a){var b,c;b=a.gh;c=new J;L(c);Br(c,b);return K(c);}
function APo(a,b){if(b instanceof EX)return 0;if(b instanceof EQ)return 0;if(b instanceof Ea)return 0;if(b instanceof Eo)return 0;if(b instanceof Oh)return 0;if(!(b instanceof Oo))return 1;return b.gh!=a.gh?0:1;}
function A3e(a,b){return 1;}
function Eo(){var a=this;Cf.call(a);a.kq=0;a.jN=0;a.hh=0;}
function A3J(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.kq==e&&a.jN==d?2:(-1);}
function A2g(a,b,c,d){var e,f;if(!(c instanceof BC))return IZ(a,b,c,d);e=d.A;while(b<e){b=Kj(c,a.kq,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.jN==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AOJ(a,b,c,d,e){var f;if(!(d instanceof BC))return I8(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HK(d,a.jN,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kq==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A5u(a){var b,c,d;b=a.kq;c=a.jN;d=new J;L(d);Br(d,b);Br(d,c);return K(d);}
function A3C(a,b){if(b instanceof Eo)return b.hh!=a.hh?0:1;if(b instanceof Ea)return b.o(a.hh);if(b instanceof EX)return 0;if(!(b instanceof EQ))return 1;return 0;}
var ADx=G(FM);
function AOO(a,b){return b!=10?0:1;}
function AUq(a,b,c){return b!=10?0:1;}
var ADy=G(FM);
function A4n(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AWp(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AH6(){var a=this;B.call(a);a.oV=null;a.mY=null;a.jG=0;a.xf=0;}
function A2u(a){var b=new AH6();ARp(b,a);return b;}
function ARp(a,b){var c,d;while(true){c=a.jG;if(b<c)break;a.jG=c<<1|1;}d=c<<1|1;a.jG=d;d=d+1|0;a.oV=BQ(d);a.mY=BQ(d);a.xf=b;}
function Sy(a,b,c){var d,e,f,g;d=0;e=a.jG;f=b&e;while(true){g=a.oV.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.mY.data[f]=c;}
function ABx(a,b){var c,d,e,f;c=a.jG;d=b&c;e=0;while(true){f=a.oV.data[d];if(!f)break;if(f==b)return a.mY.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xf;}
var AFL=G();
var Of=G(Bg);
function A7X(){var a=new Of();AQ7(a);return a;}
function AQ7(a){}
function AKT(a){return CJ(Cd(DM(),9,13),32);}
var NH=G(Bg);
function A8I(){var a=new NH();AVm(a);return a;}
function AVm(a){}
function ALo(a){return Cd(DM(),48,57);}
var AH0=G(Bg);
function A74(){var a=new AH0();AQE(a);return a;}
function AQE(a){}
function A33(a){return Cd(DM(),97,122);}
var AIk=G(Bg);
function A63(){var a=new AIk();ARt(a);return a;}
function ARt(a){}
function AVv(a){return Cd(DM(),65,90);}
var AIm=G(Bg);
function A9b(){var a=new AIm();AOk(a);return a;}
function AOk(a){}
function APU(a){return Cd(DM(),0,127);}
var Ob=G(Bg);
function A9g(){var a=new Ob();AO9(a);return a;}
function AO9(a){}
function AGi(a){return Cd(Cd(DM(),97,122),65,90);}
var Mc=G(Ob);
function A8P(){var a=new Mc();ARe(a);return a;}
function ARe(a){}
function AGN(a){return Cd(AGi(a),48,57);}
var AJl=G(Bg);
function A7s(){var a=new AJl();A19(a);return a;}
function A19(a){}
function A0F(a){return Cd(Cd(Cd(DM(),33,64),91,96),123,126);}
var Pa=G(Mc);
function A8g(){var a=new Pa();AUb(a);return a;}
function AUb(a){}
function AJs(a){return Cd(Cd(Cd(AGN(a),33,64),91,96),123,126);}
var AK5=G(Pa);
function A8d(){var a=new AK5();AVh(a);return a;}
function AVh(a){}
function ASF(a){return CJ(AJs(a),32);}
var AHh=G(Bg);
function A6$(){var a=new AHh();A3_(a);return a;}
function A3_(a){}
function AZn(a){return CJ(CJ(DM(),32),9);}
var AGr=G(Bg);
function A7f(){var a=new AGr();A5K(a);return a;}
function A5K(a){}
function ASA(a){return CJ(Cd(DM(),0,31),127);}
var AKh=G(Bg);
function A8j(){var a=new AKh();AOu(a);return a;}
function AOu(a){}
function AWt(a){return Cd(Cd(Cd(DM(),48,57),97,102),65,70);}
var AMi=G(Bg);
function A7J(){var a=new AMi();AYe(a);return a;}
function AYe(a){}
function A2s(a){var b;b=new AB1;b.FR=a;BB(b);b.T=1;return b;}
var AJo=G(Bg);
function A6Z(){var a=new AJo();AUm(a);return a;}
function AUm(a){}
function AXo(a){var b;b=new Xp;b.FW=a;BB(b);b.T=1;return b;}
var AL1=G(Bg);
function A9e(){var a=new AL1();AOm(a);return a;}
function AOm(a){}
function ARa(a){var b;b=new SU;b.FG=a;BB(b);return b;}
var AHS=G(Bg);
function A7e(){var a=new AHS();ASB(a);return a;}
function ASB(a){}
function AUB(a){var b;b=new ST;b.DR=a;BB(b);return b;}
var AIz=G(Bg);
function A8N(){var a=new AIz();AO5(a);return a;}
function AO5(a){}
function AZl(a){var b;b=new Wh;b.ET=a;BB(b);Ja(b.Q,0,2048);b.T=1;return b;}
var AFX=G(Bg);
function A8t(){var a=new AFX();AOM(a);return a;}
function AOM(a){}
function APz(a){var b;b=new Y8;b.F8=a;BB(b);b.T=1;return b;}
var AJB=G(Bg);
function A8O(){var a=new AJB();ASj(a);return a;}
function ASj(a){}
function A5N(a){var b;b=new Qs;b.Fa=a;BB(b);b.T=1;return b;}
var AL7=G(Bg);
function A7a(){var a=new AL7();ASV(a);return a;}
function ASV(a){}
function AXl(a){var b;b=new AAp;b.Ef=a;BB(b);return b;}
var AIf=G(Bg);
function A9j(){var a=new AIf();A0Q(a);return a;}
function A0Q(a){}
function ARN(a){var b;b=new Xl;b.Dn=a;BB(b);b.T=1;return b;}
var AKB=G(Bg);
function A8n(){var a=new AKB();ANL(a);return a;}
function ANL(a){}
function APG(a){var b;b=new Xn;b.Ev=a;BB(b);b.T=1;return b;}
var AHj=G(Bg);
function A7B(){var a=new AHj();AOS(a);return a;}
function AOS(a){}
function A0n(a){var b;b=new P9;b.EQ=a;BB(b);b.T=1;return b;}
var AI6=G(Bg);
function A8_(){var a=new AI6();ARS(a);return a;}
function ARS(a){}
function A1y(a){var b;b=new Zl;b.Gu=a;BB(b);b.T=1;return b;}
var AMa=G(Bg);
function A88(){var a=new AMa();A2m(a);return a;}
function A2m(a){}
function AVL(a){var b;b=new Zq;b.DZ=a;BB(b);return b;}
var AGY=G(Bg);
function A7Y(){var a=new AGY();AON(a);return a;}
function AON(a){}
function AT7(a){var b;b=new ACr;b.F$=a;BB(b);return b;}
var AGD=G(Bg);
function A6_(){var a=new AGD();A3P(a);return a;}
function A3P(a){}
function AS7(a){var b;b=new ABq;b.Dp=a;BB(b);b.T=1;return b;}
var AJm=G(Bg);
function A81(){var a=new AJm();A0L(a);return a;}
function A0L(a){}
function A3W(a){var b;b=new PA;b.GJ=a;BB(b);b.T=1;return b;}
var K3=G(Bg);
function A7E(){var a=new K3();APO(a);return a;}
function APO(a){}
function AHi(a){return CJ(Cd(Cd(Cd(DM(),97,122),65,90),48,57),95);}
var AMr=G(K3);
function A8i(){var a=new AMr();A0T(a);return a;}
function A0T(a){}
function ASY(a){var b;b=E0(AHi(a),1);b.T=1;return b;}
var AK$=G(Of);
function A6X(){var a=new AK$();AV7(a);return a;}
function AV7(a){}
function AYm(a){var b;b=E0(AKT(a),1);b.T=1;return b;}
var AGB=G(NH);
function A7j(){var a=new AGB();A1o(a);return a;}
function A1o(a){}
function AQK(a){var b;b=E0(ALo(a),1);b.T=1;return b;}
function AKk(){var a=this;Bg.call(a);a.tC=0;a.Am=0;}
function R(a,b){var c=new AKk();A5M(c,a,b);return c;}
function A5M(a,b,c){a.tC=b;a.Am=c;}
function AR2(a){return Cd(DM(),a.tC,a.Am);}
var AKv=G(Bg);
function A8k(){var a=new AKv();AWx(a);return a;}
function AWx(a){}
function AWd(a){return Cd(Cd(DM(),65279,65279),65520,65533);}
function AKY(){var a=this;Bg.call(a);a.qz=0;a.o6=0;a.yV=0;}
function B7(a,b){var c=new AKY();AO0(c,a,b);return c;}
function A7y(a,b,c){var d=new AKY();AWl(d,a,b,c);return d;}
function AO0(a,b,c){a.o6=c;a.qz=b;}
function AWl(a,b,c,d){a.yV=d;a.o6=c;a.qz=b;}
function AZ$(a){var b;b=A73(a.qz);if(a.yV)Ja(b.Q,0,2048);b.T=a.o6;return b;}
function AK6(){var a=this;Bg.call(a);a.ow=0;a.m0=0;a.rr=0;}
function KF(a,b){var c=new AK6();APH(c,a,b);return c;}
function A8F(a,b,c){var d=new AK6();AXm(d,a,b,c);return d;}
function APH(a,b,c){a.m0=c;a.ow=b;}
function AXm(a,b,c,d){a.rr=d;a.m0=c;a.ow=b;}
function AM_(a){var b;b=new AA0;AHL(b,a.ow);if(a.rr)Ja(b.Q,0,2048);b.T=a.m0;return b;}
var AKn=G();
var AF$=G();
function AGX(b){var c,d,e,f,g,h,i;c=AUO(GM(b));d=Nw(c);e=BQ(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+Nw(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=PK(c);h=h+1|0;}return e;}
function N1(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function XV(){var a=this;B.call(a);a.zl=0;a.uo=0;a.zv=null;}
function AQf(a,b,c){var d=new XV();AVg(d,a,b,c);return d;}
function AVg(a,b,c,d){a.zl=b;a.uo=c;a.zv=d;}
function AH_(){var a=this;B.call(a);a.ys=null;a.zV=0;}
function AUO(a){var b=new AH_();AZv(b,a);return b;}
function AZv(a,b){a.ys=b;}
var AKJ=G();
function Nw(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.ys.data;f=b.zV;b.zV=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bc(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function PK(b){var c,d;c=Nw(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
var MY=G(Bt);
function AD0(){var a=this;B.call(a);a.zY=null;a.zZ=null;a.zX=null;}
function ANb(a,b){var c,d,e,f,g;c=a.zY;d=a.zZ;e=a.zX;f=new AE9;g=ADg(E6(d));AMH(f,b,null,g);Ig(c,f);e.e();}
function ADZ(){B.call(this);this.yt=null;}
function AVM(a,b){Bf(a.yt,b);}
function AKb(){B.call(this);this.Uv=null;}
function Th(){B.call(this);this.tr=null;}
function A0g(a,b){b.hC=a.tr;}
function ADs(){var a=this;B.call(a);a.GK=null;a.k3=null;}
function APY(a,b){var c;c=a.k3;b=b;a.k3=Y6(!c.oQ&&!b.eX?0:1);return 1;}
function ACQ(){var a=this;B.call(a);a.vR=null;a.vS=null;}
function A4R(a){var b,c;b=a.vR;c=a.vS;GA(b.C.bH,EN(c));}
function ACU(){var a=this;B.call(a);a.D$=null;a.tR=null;}
function AZT(a,b){var c,d,e,f;c=b.data;b=a.tR;d=Bj();b=BT(b);e=new J;L(e);H(H(e,C(735)),b);Bf(d,K(e));b=Bj();f=c.length;d=new J;L(d);V(H(d,C(736)),f);Bf(b,K(d));}
function ACW(){B.call(this);this.Gk=null;}
function A5x(a,b){$rt_globals.console.info($rt_ustr(b));}
function Qh(){var a=this;B.call(a);a.lI=0;a.Dr=null;}
function A3y(a,b){var c,d;c=BT(b);d=new J;L(d);H(H(d,C(737)),c);$rt_globals.console.info($rt_ustr(K(d)));a.lI=a.lI+1|0;H0(b,a);}
function A0O(a,b){var c;b=BT(b);c=new J;L(c);H(H(c,C(738)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AUZ(a){var b;b=a.lI-1|0;a.lI=b;if(!b)Bf(Bj(),C(739));}
function AER(){B.call(this);this.wS=null;}
function AVZ(a,b){a.wS.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function AEQ(){var a=this;B.call(a);a.ui=null;a.uh=null;}
function ASJ(a,b){var c,d;c=a.ui;d=a.uh;b.arrayBuffer().then(Bw(c,"f"),Bw(d,"f"));}
function ADF(){var a=this;B.call(a);a.zs=null;a.lr=null;a.nF=null;}
function ACw(a){var b,c;b=a.zs.next();c=A$p;b.then(Bw(a,"f"),Bw(c,"f"));}
function AUd(a,b){var c;if(b.done?1:0)a.lr.o2();else{ACw(a);c=b.value;if(c.kind==='file'?1:0){b=AId(c,ZK(a.nF));a.lr.pl(b);}else{b=A6w(c,ZK(a.nF),null);a.lr.oe(b);}}}
function QP(){var a=this;B.call(a);a.yQ=null;a.yP=null;}
function A2c(a){var b,c;b=a.yQ;c=EN(a.yP);CW(b.j5,c);}
function V4(){var a=this;Ba.call(a);a.yf=null;a.Gm=null;}
function AP0(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cH^D4(a.yf,c):0;}
function V1(){var a=this;Ba.call(a);a.BX=null;a.wy=null;a.EF=null;}
function AXJ(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cH^D4(a.BX,c):0;return a.wy.o(b)&&!d?1:0;}
function QI(){var a=this;Ba.call(a);a.lN=null;a.Fi=null;}
function ART(a,b){return a.bn^D4(a.lN,b);}
function A0q(a){var b,c,d;b=new J;L(b);c=IA(a.lN,0);while(c>=0){Kn(b,GI(c));Br(b,124);c=IA(a.lN,c+1|0);}d=b.I;if(d>0)VR(b,d-1|0);return K(b);}
function YR(){var a=this;Ba.call(a);a.z$=null;a.FV=null;}
function A3M(a,b){return a.z$.o(b);}
function YP(){var a=this;Ba.call(a);a.o9=0;a.yM=null;a.pK=null;}
function AUX(a,b){return !(a.o9^D4(a.pK.N,b))&&!(a.o9^a.pK.eE^a.yM.o(b))?0:1;}
function YQ(){var a=this;Ba.call(a);a.mZ=0;a.wf=null;a.og=null;}
function A1N(a,b){return !(a.mZ^D4(a.og.N,b))&&!(a.mZ^a.og.eE^a.wf.o(b))?1:0;}
function YU(){var a=this;Ba.call(a);a.CG=0;a.wm=null;a.wb=null;a.Fu=null;}
function AZG(a,b){return a.CG^(!a.wm.o(b)&&!a.wb.o(b)?0:1);}
function YW(){var a=this;Ba.call(a);a.t_=0;a.z5=null;a.zF=null;a.GG=null;}
function AM7(a,b){return a.t_^(!a.z5.o(b)&&!a.zF.o(b)?0:1)?0:1;}
function YS(){var a=this;Ba.call(a);a.s1=null;a.GI=null;}
function AQF(a,b){return De(a.s1,b);}
function YT(){var a=this;Ba.call(a);a.Cl=null;a.Fx=null;}
function ASp(a,b){return De(a.Cl,b)?0:1;}
function YX(){var a=this;Ba.call(a);a.ul=null;a.z8=0;a.vH=null;}
function AVV(a,b){return !De(a.ul,b)&&!(a.z8^D4(a.vH.N,b))?0:1;}
function YY(){var a=this;Ba.call(a);a.uQ=null;a.A8=0;a.uG=null;}
function AZg(a,b){return !De(a.uQ,b)&&!(a.A8^D4(a.uG.N,b))?1:0;}
function QH(){var a=this;Ba.call(a);a.vE=0;a.B7=null;a.wF=null;a.Dv=null;}
function A6W(a,b){return !(a.vE^a.B7.o(b))&&!De(a.wF,b)?0:1;}
function Q2(){var a=this;Ba.call(a);a.Cv=0;a.q7=null;a.rs=null;a.DL=null;}
function AQI(a,b){return !(a.Cv^a.q7.o(b))&&!De(a.rs,b)?1:0;}
function QF(){var a=this;Ba.call(a);a.ze=null;a.DO=null;}
function AO_(a,b){return De(a.ze,b);}
function QG(){var a=this;Ba.call(a);a.sN=null;a.GE=null;}
function A0e(a,b){return De(a.sN,b)?0:1;}
function QL(){var a=this;Ba.call(a);a.CE=null;a.uK=0;a.Dj=null;}
function ARs(a,b){return De(a.CE,b)&&a.uK^D4(a.Dj.N,b)?1:0;}
function QE(){var a=this;Ba.call(a);a.Bo=null;a.Aj=0;a.uJ=null;}
function A4V(a,b){return De(a.Bo,b)&&a.Aj^D4(a.uJ.N,b)?0:1;}
function QJ(){var a=this;Ba.call(a);a.BF=0;a.ye=null;a.t9=null;a.Ft=null;}
function AYw(a,b){return a.BF^a.ye.o(b)&&De(a.t9,b)?1:0;}
function QK(){var a=this;Ba.call(a);a.Bj=0;a.xM=null;a.BB=null;a.Fy=null;}
function ATZ(a,b){return a.Bj^a.xM.o(b)&&De(a.BB,b)?0:1;}
function AAB(){B.call(this);this.Cq=null;}
var ALm=G();
var MD=G(0);
function ABp(){var a=this;B.call(a);a.DH=null;a.B8=null;a.l4=null;a.cT=null;a.kM=0;a.pH=0;}
function Pn(a,b){var c,d,e;c=M(a.l4);if(b>=0&&b<=c){AFc(a.cT,null,(-1),(-1));d=a.cT;d.mt=1;d.eZ=b;c=d.jg;if(c<0)c=b;d.jg=c;b=a.B8.cA(b,a.l4,d);if(b==(-1))a.cT.dU=1;if(b>=0){d=a.cT;if(d.kT){e=d.ek.data;if(e[0]==(-1)){c=d.eZ;e[0]=c;e[1]=c;}d.jg=M6(d);return 1;}}a.cT.eZ=(-1);return 0;}d=new BJ;Bp(d,Do(b));N(d);}
function AI5(a){return Q1(a.cT,0);}
function AKx(a){return SW(a.cT,0);}
function AFQ(a){return a.cT.kW;}
function R5(){var a=this;B.call(a);a.sq=null;a.sr=null;}
function A3s(a){var b,c;b=a.sq;c=a.sr;Tq();K8(b,c,Bbl);}
function R3(){var a=this;B.call(a);a.A0=null;a.AZ=null;}
function AQA(a){var b,c;b=a.A0;c=a.AZ;Tq();K8(b,c,Bbm);}
function R4(){var a=this;B.call(a);a.Di=null;a.Dh=null;}
function AV5(a){K8(a.Di,a.Dh,null);}
function R7(){var a=this;B.call(a);a.zD=null;a.zE=null;}
function ANq(a){var b,c,d,e,f,g,h;b=a.zD;c=a.zE;d=Ej(b.bz.d);e=HU(b.bz.d);d=ACX(b.bz.fI,d,e);DZ(b.gI.ce);b=b.bz;e=FJ(b,c);if(d!==null){f=b.d;g=e.bt;h=e.bx;e=new ADc;e.E4=b;e.E5=c;d.Lw(f,g,h,1,e,b.kt);}}
function Te(){B.call(this);this.xO=null;}
function AVy(a){var b;b=a.xO;DZ(b.gI.ce);Ju(b.bz,W6(b),0);}
function Td(){B.call(this);this.vk=null;}
function A1S(a){var b;b=a.vk;DZ(b.gI.ce);Ju(b.bz,W6(b),1);}
function Tc(){B.call(this);this.ss=null;}
function A3l(a){var b,c,d;b=a.ss;DZ(b.gI.ce);c=H$(b);b=b.bz;BD(b);d=new AEj;d.rX=b;So(c,d,AGk(C(740)));}
function Sp(){var a=this;B.call(a);a.As=null;a.Ar=null;}
function AW6(a){var b,c;b=a.As;c=a.Ar;b=b.bz.d;b.qp=c;MO(b);}
var RO=G(0);
var BaV=null;function ALZ(){BaV=new Uv;}
function AKR(){B.call(this);this.Gh=null;}
function A6m(a){var b,c,d,e;b=a.Gh;c=H$(b);d=b.gI.ce;e=new SV;e.C2=b;FY(c,NF(d,e));}
function ALa(){var a=this;B.call(a);a.Qp=null;a.Qn=null;a.Qq=0.0;}
function TG(){B.call(this);this.uS=null;}
function A4x(a,b){a.uS.g($rt_str(b.message));}
function ACo(){B.call(this);this.xg=null;}
function ALJ(){B.call(this);this.H3=null;}
var ALK=G();
function ALI(){var a=this;B.call(a);a.Uj=null;a.Ui=null;}
var ED=G(CD);
var Bbn=null;var Bbo=null;var Bbp=null;var Bbq=null;function AYQ(){AYQ=Bm(ED);ARi();}
function AKS(a,b){var c=new ED();AG6(c,a,b);return c;}
function AXq(){AYQ();return Bbq.dZ();}
function AG6(a,b,c){AYQ();Du(a,b,c);}
function ARi(){var b;Bbn=AKS(C(741),0);Bbo=AKS(C(742),1);b=AKS(C(743),2);Bbp=b;Bbq=I(ED,[Bbn,Bbo,b]);}
var YB=G(0);
function Q7(){B.call(this);this.y4=null;}
function ATV(a){AI0(a.y4);}
function Q5(){B.call(this);this.A7=null;}
function AZ_(a){JL(a.A7);}
function Q6(){B.call(this);this.qW=null;}
function A5P(a){AJQ(a.qW);}
function U0(){B.call(this);this.A_=null;}
function A3E(a){a.A_.qN();}
function U2(){B.call(this);this.Dl=null;}
function AS2(a){a.Dl.oW();}
function Z9(){B.call(this);this.zU=null;}
function A4M(a){var b,c,d,e,f,g,h,i;b=a.zU;c=(b.rY.b8()).data;d=P(By,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new RD;i.sK=b;i.sJ=h;e[f]=Ya(i,h);f=f+1|0;}return d;}
function AAJ(){B.call(this);this.sY=null;}
function ANY(a){a.sY.oT.gf(0);}
function AAH(){B.call(this);this.BH=null;}
function APm(a){a.BH.oT.gf(1);}
function TI(){B.call(this);this.xc=null;}
function AWm(a){var b,c,d,e,f;b=a.xc.d.h;c=b.cz;d=new J;L(d);V(H(d,C(744)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.nT;d=new J;L(d);V(H(d,C(745)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dn;e=Gz(Fn(b));AEw(d,0,d.dl,e);b=Bj();f=b.nm;f.data[0]=10;YD(b,f,0,1);}
function TJ(){B.call(this);this.sV=null;}
function ANW(a){AAN(a.sV);}
function TK(){B.call(this);this.By=null;}
function APe(a){AB9(a.By);}
function TL(){B.call(this);this.x8=null;}
function AV9(a){OP(a.x8.d);}
function T1(){B.call(this);this.Al=null;}
function A1Y(a){WE(a.Al);}
function AHB(){B.call(this);this.Gt=null;}
function A6o(a){var b,c,d,e,f,g,h;b=a.Gt;c=P(By,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=Ya(Q3(b,g),Yi(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=Ya(Q3(b,g),Yi(g));e=h;}return c;}
function ADP(){var a=this;B.call(a);a.mv=null;a.i8=0;}
var O8=G(EC);
function AHt(){var a=this;B.call(a);a.Ou=null;a.S3=null;a.MB=null;a.Kb=null;a.Pa=null;}
var Uv=G();
function O3(){var a=this;O8.call(a);a.nZ=null;a.mM=null;}
function A3T(a,b){var c,d,e,f;c=b.fi;d=c/32|0;e=1<<(c%32|0);f=a.mM.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function PS(){EA.call(this);this.pX=null;}
function AXg(a,b){return a.pX.data[b];}
function ATo(a){return a.pX.data.length;}
var ACe=G(DH);
var Bbr=null;function ALA(){Bbr=F($rt_bytecls());}
var PH=G(H9);
function AQi(a,b,c,d){var e,f,g;e=0;f=d.A;a:{while(true){if(b>f){b=e;break a;}g=GR(d,a.bb);D8(d,a.bb,b);e=a.dq.c(b,c,d);if(e>=0)break;D8(d,a.bb,g);b=b+1|0;}}return b;}
function A6K(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=GR(e,a.bb);D8(e,a.bb,c);f=a.dq.c(c,d,e);if(f>=0)break;D8(e,a.bb,g);c=c+(-1)|0;}}return c;}
function AOY(a){return null;}
var RU=G(Bt);
var Ww=G(Bt);
function U4(){Gw.call(this);this.E8=0;}
function RN(){Gw.call(this);this.Gx=0;}
function Wa(){B.call(this);this.tP=null;}
function AT0(a,b){a.tP.g(FT(b));}
function Wb(){var a=this;B.call(a);a.AM=null;a.AL=null;}
function AUj(a,b){var c,d;c=a.AM;d=a.AL;b.text().then(Bw(c,"f"),Bw(d,"f"));}
function ADm(){var a=this;B.call(a);a.um=null;a.BY=null;a.w5=0;a.m_=0;}
function NY(a,b){return Ck(a.um)<b?0:1;}
var AF9=G(0);
function AEH(){B.call(this);this.C1=null;}
function AOs(a){var b,c,d,e;b=a.C1;c=b.bj;d=c.Y.ct;e=new S3;e.BP=b;FY(d,NF(c,e));}
function AEG(){B.call(this);this.zf=null;}
function AW_(a,b){GT(a.zf,b);}
function VF(){B.call(this);this.q9=null;}
function AWU(a){AEM(a.q9);}
function VG(){B.call(this);this.C0=null;}
function AUW(a,b){GT(a.C0,b);}
function LL(){F0.call(this);this.tI=null;}
function Sm(){LL.call(this);this.sn=null;}
function YC(){var a=this;B.call(a);a.zB=null;a.zC=null;}
function ADq(){var a=this;B.call(a);a.ek=null;a.lk=null;a.p3=null;a.nV=null;a.sd=0;a.kT=0;a.df=0;a.A=0;a.eZ=0;a.kW=0;a.gS=0;a.dU=0;a.Gf=0;a.jg=0;a.mt=0;}
function B2(a,b,c){a.lk.data[b]=c;}
function DL(a,b){return a.lk.data[b];}
function M6(a){return SW(a,0);}
function SW(a,b){AAY(a,b);return a.ek.data[(b*2|0)+1|0];}
function D8(a,b,c){a.ek.data[b*2|0]=c;}
function Nq(a,b,c){a.ek.data[(b*2|0)+1|0]=c;}
function GR(a,b){return a.ek.data[b*2|0];}
function Js(a,b){return a.ek.data[(b*2|0)+1|0];}
function AH2(a){return Q1(a,0);}
function Q1(a,b){AAY(a,b);return a.ek.data[b*2|0];}
function Xx(a,b){return a.p3.data[b];}
function E7(a,b,c){a.p3.data[b]=c;}
function AAY(a,b){var c;if(!a.kT){c=new Dc;X(c);N(c);}if(b>=0&&b<a.sd)return;c=new BJ;Bp(c,Do(b));N(c);}
function AFc(a,b,c,d){a.kT=0;a.mt=2;JT(a.ek,(-1));JT(a.lk,(-1));if(b!==null)a.nV=b;if(c>=0){a.df=c;a.A=d;}a.eZ=a.df;}
function AGQ(a){return a.mt;}
function R6(){B.call(this);this.q8=null;}
function A24(a,b){var c,d,e,f,g;c=a.q8;DZ(c.bj);E$(c.iO);d=Ns(Ox(c.fK));while(FD(d)){e=O4(d);f=c.fK;g=e.cJ;e=null;if(HL(f,g))D2(f,g,e);}e=Bj();d=BT(b);f=new J;L(f);H(H(f,C(746)),d);Bf(e,K(f));e=AU2(b,c);D5(c.da.gJ,e);e.jA.e();CW(c.k4,FH(EN(b),C(747)));}
function ADG(){var a=this;B.call(a);a.AR=null;a.AS=0;}
function A0z(a){Im(a.AR,a.AS);}
function AAv(){B.call(this);this.q5=null;}
function ASu(a){Im(a.q5,1);}
function AAu(){B.call(this);this.wV=null;}
function A2V(a){Im(a.wV,0);}
function AA2(){var a=this;B.call(a);a.tN=null;a.tM=0;}
function AUk(a){var b,c,d,e,f;b=a.tN;c=a.tM;d=b.bj;e=d.Y.ct;f=new RJ;f.A6=b;f.A3=c;FY(e,NF(d,f));}
function Rf(){B.call(this);this.zu=null;}
function AXA(a,b){GT(a.zu,b);}
function AEj(){B.call(this);this.rX=null;}
function AQt(a,b){DP(a.rX,b);}
var G4=G(CD);
var Bbm=null;var Bbl=null;var Bbs=null;function Tq(){Tq=Bm(G4);A6B();}
function A4b(a,b){var c=new G4();AG2(c,a,b);return c;}
function AJO(){Tq();return Bbs.dZ();}
function AG2(a,b,c){Tq();Du(a,b,c);}
function A6B(){var b;Bbm=A4b(C(748),0);b=A4b(C(749),1);Bbl=b;Bbs=I(G4,[Bbm,b]);}
function Ul(){var a=this;B.call(a);a.CQ=null;a.CR=0;}
function A2h(a,b){var c,d,e,f,g,h;c=a.CQ;d=a.CR;e=!d?c.dW.dG:c.dW.dI;DZ(c.bj);f=Bj();g=EN(b);h=new J;L(h);H(H(h,C(750)),g);Bf(f,K(h));f=new ABa;f.gA=c;f.jd=d;f.nC=e;g=AU2(b,f);if(!d)c.gV=g;else c.hQ=g;g.cX.e();D5(e,g);b=c.hQ;if(b!==null&&c.gV===null)CW(c.jc,Ei(b));if(c.hQ===null){b=c.gV;if(b!==null)CW(c.jc,Ei(b));}b=c.hQ;if(b!==null&&c.gV!==null){e=c.jc;b=Ei(b);g=Ei(c.gV);c=new J;L(c);H(H(H(c,b),C(751)),g);CW(e,K(c));}}
function RD(){var a=this;B.call(a);a.sK=null;a.sJ=null;}
function A0y(a){var b,c;b=a.sK;c=a.sJ;b.jw.oo(c);}
function SE(){B.call(this);this.A1=null;}
function AQk(a,b){var c,d;c=a.A1;d=b.i$;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
var ACq=G();
var BaW=null;function A8X(){A8X=Bm(ACq);AX5();}
function AX5(){var b,c;b=BQ((AJO()).data.length);c=b.data;BaW=b;c[Bbm.fi]=1;c[Bbl.fi]=2;}
function Su(){B.call(this);this.ve=null;}
function AN$(a,b){Uq(H$(a.ve),b,A_3,AGk(C(752)));}
function Pj(){var a=this;B.call(a);a.yE=null;a.yF=0.0;}
function A0V(a){var b,c;b=a.yE;c=a.yF;b.jw.kZ(c);}
function V9(){var a=this;B.call(a);a.x_=null;a.ya=null;}
function AB1(){Ba.call(this);this.FR=null;}
function AV1(a,b){return CI(b)!=2?0:1;}
function Xp(){Ba.call(this);this.FW=null;}
function AYk(a,b){return CI(b)!=1?0:1;}
function SU(){Ba.call(this);this.FG=null;}
function AN1(a,b){return Ss(b);}
function ST(){Ba.call(this);this.DR=null;}
function AZ8(a,b){return 0;}
function Wh(){Ba.call(this);this.ET=null;}
function ARh(a,b){return !CI(b)?0:1;}
function Y8(){Ba.call(this);this.F8=null;}
function A5p(a,b){return CI(b)!=9?0:1;}
function Qs(){Ba.call(this);this.Fa=null;}
function ATB(a,b){return H6(b);}
function AAp(){Ba.call(this);this.Ef=null;}
function AUF(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Xl(){Ba.call(this);this.Dn=null;}
function A6u(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function Xn(){Ba.call(this);this.Ev=null;}
function APq(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function P9(){Ba.call(this);this.EQ=null;}
function AV_(a,b){a:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Zl(){Ba.call(this);this.Gu=null;}
function A1W(a,b){return K_(b);}
function Zq(){Ba.call(this);this.DZ=null;}
function A3v(a,b){return Zr(b);}
function ACr(){Ba.call(this);this.F$=null;}
function A5c(a,b){return CI(b)!=3?0:1;}
function ABq(){Ba.call(this);this.Dp=null;}
function AWy(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function PA(){Ba.call(this);this.GJ=null;}
function APi(a,b){a:{b:{switch(CI(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=H6(b);}return b;}
function MN(){Ba.call(this);this.oa=0;}
function A73(a){var b=new MN();AHL(b,a);return b;}
function AHL(a,b){BB(a);a.oa=b;}
function ATD(a,b){return a.bn^(a.oa!=CI(b&65535)?0:1);}
var AA0=G(MN);
function A4z(a,b){return a.bn^(!(a.oa>>CI(b&65535)&1)?0:1);}
var AE0=G(0);
function ZO(){B.call(this);this.xr=null;}
function AR9(a){var b,c;b=a.xr;c=b.zB;b=b.zC;c.G7(b.mn,b.p8,null);}
var AHA=G(0);
function SV(){B.call(this);this.C2=null;}
function A4S(a,b){F4(a.C2.bz,b,A_3);}
function Q_(){var a=this;B.call(a);a.mi=null;a.mh=null;a.y7=null;}
function APN(a){JQ(a.mi);JQ(a.mh);}
function ANl(a){KS(a.mi);KS(a.mh);}
function AVa(a,b){IQ(a.mi,b);IQ(a.mh,b);}
function ATr(a,b){KT(a.y7,b);}
function ACk(){var a=this;B.call(a);a.Gq=null;a.Gp=null;a.Go=null;}
function ADc(){var a=this;B.call(a);a.E4=null;a.E5=null;}
function S3(){B.call(this);this.BP=null;}
function AUQ(a,b){Jh(a.BP,b);}
function RJ(){var a=this;B.call(a);a.A6=null;a.A3=0;}
function AO7(a,b){Nt(a.A6,b,a.A3);}
var Dd=G(0);
var A$K=null;var A_Z=null;var A$M=null;var A$L=null;var A$O=null;var A$N=null;var A$Q=null;var A$P=null;var A$S=null;var A$R=null;var A$T=null;function AIo(){AIo=Bm(Dd);A5T();}
function A5T(){A$K=Cs(0);A_Z=DE(8,8,8);A$M=S(C(753));A$L=DE(255,255,255);A$O=S(C(754));A$N=S(C(755));A$Q=S(C(756));A$P=S(C(757));A$S=Fa(205,205,205,153);A$R=Fa(255,255,255,0);A$T=S(C(116));}
function CC(){CD.call(this);this.p1=null;}
var Bbt=null;var Bbu=null;var Bbv=null;var Bbw=null;var Bbx=null;var Bby=null;var Bbz=null;var BbA=null;var BbB=null;var BbC=null;var BbD=null;var BbE=null;var BbF=null;var BbG=null;var BbH=null;var BbI=null;function AHM(){AHM=Bm(CC);A6l();}
function DT(a,b,c){var d=new CC();AAy(d,a,b,c);return d;}
function A58(a,b,c,d){var e=new CC();AF7(e,a,b,c,d);return e;}
function AMk(){AHM();return BbI.dZ();}
function AAy(a,b,c,d){AHM();Du(a,b,c);a.p1=J6(d,null);}
function AF7(a,b,c,d,e){AHM();Du(a,b,c);a.p1=J6(d,e);}
function A6l(){var b;b=new CC;AIo();AAy(b,C(354),0,A_Z);Bbt=b;Bbu=DT(C(355),1,S(C(758)));Bbv=DT(C(357),2,S(C(759)));Bbw=DT(C(359),3,S(C(760)));Bbx=DT(C(361),4,A_Z);Bby=DT(C(362),5,S(C(761)));Bbz=DT(C(364),6,S(C(407)));BbA=DT(C(366),7,S(C(762)));BbB=DT(C(368),8,S(C(763)));BbC=A58(C(370),9,A_Z,DE(237,235,252));BbD=A58(C(371),10,S(C(405)),S(C(764)));BbE=DT(C(372),11,S(C(407)));BbF=DT(C(374),12,S(C(408)));BbG=DT(C(376),13,S(C(765)));b=DT(C(377),14,S(C(378)));BbH=b;BbI=I(CC,[Bbt,Bbu,Bbv,Bbw,Bbx,Bby,Bbz,BbA,BbB,BbC,
BbD,BbE,BbF,BbG,b]);}
var D$=G(0);
var A$X=null;var A$Y=null;var A$U=null;var A$V=null;var A$W=null;var A_0=null;var A_1=null;var A$Z=null;var A$0=null;function AXY(){AXY=Bm(D$);AZD();}
function AZD(){A$X=S(C(114));A$Y=S(C(766));A$U=S(C(767));A$V=S(C(768));A$W=S(C(769));A_0=S(C(114));A_1=S(C(766));A$Z=Fa(205,205,205,153);A$0=DE(247,248,250);}
function ID(){var a=this;C_.call(a);a.ig=null;a.hZ=null;a.gD=null;a.g9=null;}
var BbJ=null;var BbK=null;function AU2(a,b){var c=new ID();ALk(c,a,b);return c;}
function BbL(a,b,c){var d=new ID();Mb(d,a,b,c);return d;}
function ALk(a,b,c){Mb(a,b,0,c);}
function Mb(a,b,c,d){Ks(a,JF(b),c);a.gD=BbJ;a.g9=BbK;a.ig=b;a.hZ=d;LJ(a);IY(a);}
function AWf(a){return I7(a.ig);}
function R_(a,b){return Vm(a.gD,b);}
function LJ(a){var b;b=new SK;b.tu=a;a.cX=b;a.jA=b;a.fh=BaN;}
function AEP(a){var b;b=new AFt;b.uz=a;a.cX=b;a.jA=b;}
function AIJ(){BbJ=P(ID,0);BbK=P(K2,0);}
function ABa(){var a=this;B.call(a);a.jd=0;a.nC=null;a.gA=null;}
function ARR(a,b){var c,d,e,f,g;c=Bj();d=EN(b.fT);e=new J;L(e);H(H(e,C(770)),d);Bf(c,K(e));c=b.fT;d=R9(a,c.ik);if(d===null)f=null;else{c=E6(c);f=Vm(d.g9,c);}if(f===null){c=new Kv;d=a.gA;ADA(c,d.bj,d.gw,d.hp);Jh(c,b.fT);}else{L4(a,f);c=new Ny;g=a.gA;Uu(c,g.bj,g.gw,g.hp);Nt(c,b.fT,a.jd);Nt(c,f.fT,a.jd?0:1);}}
function AW5(a,b){var c,d,e;AEP(b);c=Bj();d=I7(b.ig);e=new J;L(e);H(H(e,C(771)),d);Bf(c,K(e));c=AFm(a,b.ig);L4(a,c);if(c!==null&&(c.hN!=60086?0:1))c.cX.e();if(JG(b)>0)EW(a.nC);}
function L4(a,b){(!a.jd?a.gA.dW.dI:a.gA.dW.dG).o3=b;}
function AXc(a,b){var c;if(JG(b)>0)EW(a.nC);LJ(b);c=AFm(a,b.ig);L4(a,c);if(c!==null&&Jt(c))c.cX.e();}
function R9(a,b){var c,d,e;c=!a.jd?a.gA.hQ:a.gA.gV;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=R_(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
function AFm(a,b){var c;c=R9(a,b.fP);return c===null?null:R_(c,JF(b));}
function K2(){C_.call(this);this.fT=null;}
function APc(a){return N2(a.fT);}
function AE1(){var a=this;B.call(a);a.zg=null;a.zh=null;}
function A3N(a,b){var c,d;c=a.zg;d=a.zh;DZ(c);d.g(b);}
function SK(){B.call(this);this.tu=null;}
function ATt(a){var b,c,d,e;b=a.tu;c=Bj();d=Ei(b);e=new J;L(e);H(H(e,C(772)),d);Bf(c,K(e));c=b.ig;e=new ABZ;e.db=b;e.l9=BO();e.mF=BO();H0(c,e);}
function AB_(){B.call(this);this.Cn=null;}
function A1g(a){DZ(a.Cn);}
function TZ(){var a=this;B.call(a);a.sz=null;a.sy=null;}
function AOj(a,b){var c,d;b=a.sz;c=a.sy;d=ALT(b.sn.Cq.fG);b=c.x_;c=c.ya;b=b.xg;if(c.I>0)Lv(c,b);Lv(c,d);return 1;}
function ABZ(){var a=this;B.call(a);a.l9=null;a.mF=null;a.db=null;}
function A46(a,b){var c,d;c=new ID;d=a.db;Mb(c,b,d.kc+1|0,d.hZ);BA(a.l9,c);}
function AVT(a,b){var c,d;c=E6(b);d=new K2;Ks(d,c,a.db.kc+1|0);d.fT=b;a.db.hZ.sc(d,c);d.o5=AMy(a.db.hZ,d);BA(a.mF,d);}
function A5r(a){var b,c,d,e,f,g,h;if(!(EP(a.l9)&&EP(a.mF))){a.db.gD=GF(a.l9,BbJ);a.db.g9=GF(a.mF,BbK);Lr(a.db.gD,BaO);Lr(a.db.g9,BaO);b=a.db;c=b.gD;d=c.data;e=b.g9;f=e.data;g=d.length;h=f.length;d=P(C_,g+h|0);Da(c,0,d,0,g);Da(e,0,d,g,h);a.db.fh=d;}Ie(a.db);b=a.db;b.hZ.ym(b);}
var AJ0=G();
function Sw(){var a=this;B.call(a);a.vf=null;a.vg=null;}
function A5R(a){a.vf.AD(a.vg);}
function RZ(){var a=this;B.call(a);a.wi=null;a.wj=null;a.wk=0;}
function AOc(a){var b,c,d,e;b=a.wi;c=a.wj;d=a.wk;c=EN(c);if(!d)b.nX=c;else b.xK=c;e=b.xK;if(e!==null&&b.nX!==null)CW(b.hR,c);else{if(e!==null)CW(b.hR,e);c=b.nX;if(c!==null)CW(b.hR,c);}}
function AFt(){B.call(this);this.uz=null;}
function A1f(a){var b;b=a.uz;IY(b);b.hZ.vN(b);b.gD=BbJ;b.g9=BbK;}
function Ri(){var a=this;B.call(a);a.v0=null;a.v1=null;}
function A0u(a,b){var c,d,e;c=a.v0;d=a.v1;LW(c.fK,d);b=AJ4(b);e=AP1(b.kE,ADg(d));D2(c.iO,d,e);if(BR(c.x3,d))RG(c,e);}
function Rj(){var a=this;B.call(a);a.tF=null;a.tE=null;}
function A6v(a,b){var c,d,e;c=a.tF;d=a.tE;LW(c.fK,d);c=D0();e=new J;L(e);H(H(H(H(e,C(773)),d),C(29)),b);Bf(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",11,"menu",10,"parser",16,"common",17,"tree",17,"graph",19,"node",20,"ref",20,"decl",10,"ui",23,"window",23,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bO",A9G(ASx),"K",A9F(AF_)],SI,0,B,[],0,3,0,0,0,XI,0,B,[],3,3,0,0,0,Xi,0,B,[],3,3,0,0,0,AD3,0,B,[XI,Xi],0,3,0,0,0,AKg,0,B,[],4,0,0,0,0,AJ6,0,B,[],4,3,0,0,0,Hh,0,B,[],0,3,0,0,0,EH,0,Hh,[],0,3,0,0,0,Bt,0,EH,[],0,3,0,0,0,AK7,0,Bt,[],0,3,0,0,0,C0,0,B,[],3,3,0,0,0,CG,0,B,[],3,3,0,0,0,KI,0,B,[],3,3,0,0,0,BC,"String",3,B,[C0,CG,KI],0,3,[0,0,0],Fq,["K",A9F(AOG),"bO",A9G(Bk),"qy",A9F(Kk),"mO",A9G(AQh)],FK,0,Hh,[],0,3,0,0,0,IC,0,FK,[],0,3,0,0,0,AKK,0,IC,[],0,3,0,0,0,DH,0,B,[C0],1,3,0,0,
0,HX,0,DH,[CG],0,3,0,0,["K",A9F(AWa),"bO",A9G(A6a),"mO",A9G(A1v)],Hb,0,B,[C0,KI],0,0,0,0,["kn",A9G(Np),"K",A9F(K)],J5,0,B,[],3,3,0,0,0,J,0,Hb,[J5],0,3,0,0,["qm",A9J(A1r),"pM",A9I(APy),"K",A9F(Em),"kn",A9G(ARO),"qE",A9H(A1M)],Fg,0,IC,[],0,3,0,0,0,ALQ,0,Fg,[],0,3,0,0,0,AKF,0,Fg,[],0,3,0,0,0,ACp,0,B,[],3,3,0,0,0,Ds,0,B,[],3,3,0,0,0,Y7,0,B,[],3,0,0,0,0,KA,0,B,[ACp,Ds,Y7],1,3,0,0,["bV",A9F(EK)],AAS,0,KA,[],0,3,0,0,0,AJI,0,B,[],0,3,0,0,0,AMs,0,B,[],4,3,0,0,0,BW,0,B,[],3,3,0,0,0,Ch,0,B,[BW],3,3,0,0,0,ACz,0,B,[Ch],
0,3,0,0,["bm",A9G(A6r)],AHO,0,B,[],0,3,0,0,0,ALi,0,B,[BW],1,3,0,0,0,AFR,0,B,[],3,3,0,0,0,AMf,0,B,[],3,3,0,0,0,AIj,0,B,[],3,3,0,0,0,Mt,"FontConfigJs",26,B,[],0,3,[0,0,0],0,0,AGj,0,B,[BW],1,3,0,0,0,ACA,0,B,[Ch],0,3,0,0,["bm",A9G(AM8)],ACy,0,B,[Ch],0,3,0,0,["bm",A9G(A5d)],L8,0,B,[],4,3,0,0,0,AIh,0,B,[],4,3,0,0,0,AKy,0,B,[],0,3,0,0,0,AM5,0,B,[],4,3,0,0,0,XJ,0,B,[Ch],0,3,0,0,["bm",A9G(A2I)]]);
$rt_metadata([AIv,0,B,[BW],1,3,0,0,0,AJV,0,B,[],0,3,0,0,0,ADH,0,B,[BW],3,3,0,0,0,AK9,0,B,[ADH],1,3,0,0,["MS",A9G(A0C),"Ts",A9F(ASt)],AG$,0,B,[BW],1,3,0,0,0,Gx,0,B,[],3,3,0,0,0,TD,0,B,[Gx],0,3,0,0,0,BJ,0,Bt,[],0,3,0,0,0,ALy,0,B,[],4,3,0,0,0,Gh,0,Bt,[],0,3,0,0,0,JA,0,Bt,[],0,3,0,0,0,Dp,0,B,[CG],0,3,0,0,0,Xd,0,B,[BW],3,3,0,0,0,ABr,0,B,[Xd],3,3,0,0,0,Fb,0,B,[BW],3,3,0,0,0,AJL,0,B,[BW,ABr,Fb],1,3,0,0,["Lx",A9F(A2n),"L8",A9G(A4E),"Uh",A9G(A4p),"Py",A9G(AZj),"SK",A9G(ANp),"N9",A9F(APr),"Tq",A9H(A4A),"Mp",A9I(ARz),
"M1",A9F(AYi),"Ni",A9F(A3a),"RU",A9G(A4$),"Qd",A9F(ASO),"UC",A9G(ARc),"Ka",A9F(AS$),"QS",A9F(AW9),"Uw",A9F(AR3),"Hv",A9G(AN6),"Mt",A9F(A6d),"Sc",A9H(A04),"P2",A9H(ASH),"Ti",A9H(AWj),"SZ",A9F(AXz),"TK",A9F(AQY),"M6",A9G(APB),"RC",A9G(AQr),"Ps",A9H(A1b),"JQ",A9F(ASb),"MR",A9G(AYl),"Ok",A9F(AQq),"Nq",A9F(AUf),"Pf",A9G(ANc),"J_",A9G(AVJ),"Ur",A9G(AYH),"Jn",A9F(A43),"PS",A9H(AYO),"Te",A9G(A3o),"JF",A9F(AUJ),"OF",A9H(ATz),"H0",A9H(ATg),"QC",A9F(AVC),"M7",A9G(AWK),"I4",A9I(A2x),"In",A9F(APw),"I8",A9H(AY6),"P8",A9F(AXZ),
"LQ",A9F(A59),"RR",A9F(ATw),"GQ",A9F(AXX),"Lp",A9H(ATA),"Ol",A9G(AZs),"Rz",A9G(AQB),"Ih",A9F(A32)],P$,0,B,[Ch],0,3,0,0,["bm",A9G(AUa)],AKU,0,B,[],4,3,0,0,0,Zk,0,B,[Fb],3,3,0,0,0,SB,0,B,[Fb],3,3,0,0,0,AAG,0,B,[Fb],3,3,0,0,0,T4,0,B,[Fb],3,3,0,0,0,AET,0,B,[Fb],3,3,0,0,0,ADb,0,B,[Fb,Zk,SB,AAG,T4,AET],3,3,0,0,0,AKe,0,B,[BW,ADb],1,3,0,0,["Sr",A9H(A2Q),"TQ",A9H(A1t),"Ip",A9I(AQ0),"PX",A9G(AOl),"KZ",A9I(AZJ)],BX,0,Bt,[],0,3,0,0,0,AFu,0,Bt,[],0,3,0,0,0,Ix,0,BJ,[],0,3,0,0,0,AKs,0,B,[],0,3,0,0,0,AAd,0,B,[],3,3,0,0,0,YZ,
0,B,[AAd],3,3,0,0,0,ABz,0,B,[YZ],0,3,0,0,0,BE,0,B,[],3,3,0,0,0,ALf,0,B,[BE],0,3,0,0,0,T,0,B,[],3,3,0,0,0,ALg,0,B,[T],0,3,0,0,0,AAL,0,B,[BW],3,3,0,0,0,Vi,0,B,[AAL],0,3,0,0,["Kc",A9G(A03)],Vg,0,B,[T],0,3,0,0,0,Z5,0,B,[BW],3,3,0,0,0,Vh,0,B,[Z5],0,3,0,0,["CP",A9H(APM)],AIE,0,B,[BW],1,3,0,0,0,CE,0,B,[BW],3,3,0,0,0,Vf,0,B,[CE],0,3,0,0,["cG",A9G(AUe)],ABj,0,B,[],0,3,0,0,0,VT,0,B,[],3,3,0,0,["ft",A9G(AXh)],HO,0,B,[VT],3,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],FN,0,B,[HO],1,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h),"eO",A9F(EP),
"rt",A9G(A4e)],N8,0,B,[HO],3,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],M$,0,B,[N8],3,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)]]);
$rt_metadata([EA,0,FN,[M$],1,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h),"qf",A9G(AUu),"cd",A9F(B9),"vl",A9H(ATP),"oX",A9H(A4X),"mG",A9G(A3n),"bO",A9G(AS1)],MI,0,EA,[],1,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],Pi,0,B,[HO],3,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],AFd,0,B,[Pi,N8],3,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],Uz,0,MI,[AFd],0,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],LV,0,B,[],3,3,0,0,0,En,0,B,[LV],1,3,0,0,0,Ed,0,B,[],3,3,0,0,0,WB,0,B,[LV],3,3,0,0,0,PJ,0,B,[WB],3,3,0,0,0,Za,0,En,[Ed,C0,PJ],0,3,0,0,0,ABl,0,B,[BE],0,3,0,0,0,ABm,
0,B,[Ch],0,3,0,0,["bm",A9G(AXy)],AGq,0,B,[],0,3,0,0,0,Ol,0,B,[],1,3,0,0,0,U$,0,Ol,[],0,3,0,0,0,Cz,0,B,[Ds],1,3,0,0,["cE",A9G(A5$)],ZH,0,B,[],0,3,0,0,0,AD8,0,B,[CE],0,3,0,0,["cG",A9G(A25)],AD9,0,B,[CE],0,3,0,0,["cG",A9G(A3g)],AD$,0,B,[CE],0,3,0,0,["cG",A9G(ASM)],AD_,0,B,[CE],0,3,0,0,["cG",A9G(A1K)],AEa,0,B,[CE],0,3,0,0,["cG",A9G(A1X)],AEb,0,B,[CE],0,3,0,0,["cG",A9G(AUl)],AEc,0,B,[CE],0,3,0,0,["cG",A9G(AQZ)],AEd,0,B,[CE],0,3,0,0,["cG",A9G(A6D)],AEe,0,B,[CE],0,3,0,0,["cG",A9G(AQo)],AEf,0,B,[CE],0,3,0,0,["cG",A9G(AU$)],WR,
0,B,[CE],0,3,0,0,["cG",A9G(A5_)],WS,0,B,[CE],0,3,0,0,["cG",A9G(ASr)],WT,0,B,[CE],0,3,0,0,["cG",A9G(ASQ)],WU,0,B,[CE],0,3,0,0,["cG",A9G(A3q)],ACV,0,B,[],3,3,0,0,0,AC5,0,B,[ACV],0,3,0,0,0,AC4,0,B,[CE],0,3,0,0,["cG",A9G(ARE)],Pg,0,B,[],0,3,0,0,0,KX,0,B,[Gx],0,3,0,0,["qL",A9H(Nm)],AIR,0,B,[],0,3,0,0,0,Dt,0,B,[],3,3,0,0,0,Cp,0,B,[Dt],3,3,0,0,0,CH,0,B,[],3,3,0,0,["bZ",A9G(A1n),"cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D)],EV,0,B,[],3,3,0,0,0,CR,0,B,[Dt],3,3,0,0,0,FL,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,F9,0,B,[CL],3,
3,0,0,0,R1,0,B,[Ds],0,3,0,0,0,Bh,"V2i",29,B,[],0,3,[0,0,0],0,["K",A9F(AJp),"bO",A9G(ARu)],AEk,0,B,[],0,3,0,0,0,AIl,0,B,[],0,3,0,0,0]);
$rt_metadata([AJ3,0,B,[],3,3,0,0,0,Z3,0,B,[],0,3,0,0,0,Oz,0,B,[],0,3,0,0,0,Dk,0,Oz,[],0,3,0,0,0,AMq,0,Dk,[],0,3,0,0,0,FE,0,Dk,[],0,3,0,0,0,AAr,0,Dk,[],0,3,0,0,0,AHb,0,FE,[],0,3,0,0,0,HI,0,FE,[],0,3,0,0,0,Qf,0,HI,[],0,3,0,0,0,AI8,0,HI,[],0,3,0,0,0,AKf,0,FE,[],0,3,0,0,0,ALS,0,Dk,[],0,3,0,0,0,AF5,0,Dk,[],0,3,0,0,0,AA4,0,B,[BW],3,3,0,0,0,AM3,0,B,[AA4],3,3,0,0,0,Z2,0,B,[Ds],0,3,0,0,0,RS,0,B,[],0,3,0,0,0,CD,0,B,[CG,C0],1,3,0,0,0,Hr,0,CD,[],12,3,0,HQ,0,MS,0,B,[],3,3,0,0,0,TW,0,B,[MS],3,3,0,0,0,AC_,0,B,[],3,3,0,0,0,Hd,
0,B,[TW,AC_],1,3,0,0,0,Nj,0,Hd,[],0,3,0,0,0,AGS,0,Nj,[],0,3,0,0,0,HW,0,Hd,[],1,3,0,0,0,L7,0,HW,[],0,3,0,0,["nf",A9I(ARx)],Ep,0,CD,[],12,3,0,AML,0,Nb,0,B,[CG],1,3,0,0,0,MV,0,Nb,[],0,3,0,AGL,0,Ze,0,B,[],0,3,0,0,0,Ik,0,CD,[],12,0,0,AHw,0,N$,0,HW,[],0,3,0,0,["nf",A9I(AP5)],AIg,0,BX,[],0,3,0,0,0,Vj,0,EH,[],0,3,0,0,0,MU,0,B,[BW],3,3,0,0,0,AE_,0,B,[MU],0,3,0,0,["bm",A9G(AUR)],AFa,0,B,[MU],0,3,0,0,["bm",A9G(AOz)],It,0,B,[],1,3,0,0,0,ABg,0,B,[],3,3,0,0,0,L0,0,It,[CG,J5,KI,ABg],1,3,0,0,0,NB,0,It,[CG],1,3,0,0,0,I1,0,B,
[],0,3,0,HC,0,PN,0,Cz,[],0,3,0,0,["bR",A9F(ASm),"ck",A9H(ARb)],H5,0,Cz,[],1,3,0,0,["ck",A9H(AHm)],Cq,0,H5,[],1,3,0,0,["bR",A9F(APZ),"ck",A9H(IV),"cE",A9G(Qz)],Fo,0,B,[],3,3,0,0,0,J0,0,B,[],3,3,0,0,0,EY,0,B,[],3,3,0,0,0]);
$rt_metadata([Lh,"Diff0",11,Cq,[CH,Fo,J0,EY,EV,FL,F9],0,3,[0,0,0],0,["f6",A9H(A5J),"cE",A9G(AUz),"bR",A9F(A1U),"hs",A9F(A0W),"qN",A9F(AU0),"oW",A9F(A1P),"oo",A9G(AVH),"kZ",A9G(A2L),"gf",A9G(APg),"ck",A9H(ARQ),"d4",A9G(ANS),"bZ",A9G(A29),"cL",A9I(A0Z),"cu",A9H(ASL),"dM",A9H(A3G),"dJ",A9I(AT8),"b8",A9F(A1q)],AIq,"DiffDemoJs",11,Lh,[],0,3,[0,0,0],0,["hs",A9F(ASW)],AIP,0,B,[],0,3,0,0,0,AK_,0,B,[BW],1,3,0,0,0,Lo,0,L0,[],1,0,0,0,0,AG7,0,Lo,[],0,0,0,0,0,LS,0,B,[],1,3,0,0,0,OE,0,B,[],0,3,0,0,0,AFW,0,B,[],0,3,0,0,0,Jo,
0,B,[BW],3,3,0,0,0,XR,0,B,[Jo],0,3,0,0,["bm",A9G(AP_)],XQ,0,B,[Jo],0,3,0,0,["bm",A9G(ATs)],XO,0,B,[Ch],0,3,0,0,["bm",A9G(ATX)],XN,0,B,[Ch],0,3,0,0,["bm",A9G(AY7)],W,0,B,[],3,3,0,0,0,Ue,0,B,[W],0,3,0,0,["g",A9G(A6e)],Ug,0,B,[W],0,3,0,0,["g",A9G(A1u)],Vy,0,B,[BE],0,3,0,0,["ba",A9G(AVX)],Vx,0,B,[BE],0,3,0,0,["ba",A9G(ANz)],Vu,0,B,[BE],0,3,0,0,["ba",A9G(AZM)],Vt,0,B,[BE],0,3,0,0,["ba",A9G(A2J)],Vw,0,B,[BE],0,3,0,0,["ba",A9G(APT)],Vv,0,B,[BE],0,3,0,0,["ba",A9G(AXe)],VB,0,B,[BE],0,3,0,0,["ba",A9G(APx)],VA,0,B,[BE],
0,3,0,0,["ba",A9G(ASe)],VD,0,B,[BE],0,3,0,0,["ba",A9G(A4g)],VC,0,B,[BE],0,3,0,0,["ba",A9G(ANg)],AB4,0,B,[BE],0,3,0,0,["ba",A9G(ANt)],AB3,0,B,[BE],0,3,0,0,["ba",A9G(A1A)],AB2,0,B,[BE],0,3,0,0,["ba",A9G(ATb)],ABP,0,B,[BE],0,3,0,0,["ba",A9G(AQd)],ABO,0,B,[BE],0,3,0,0,["ba",A9G(AXs)],ABM,0,B,[BE],0,3,0,0,["ba",A9G(A5l)],ABL,0,B,[BE],0,3,0,0,["ba",A9G(ASn)],ABK,0,B,[BE],0,3,0,0,["ba",A9G(A4i)],ABJ,0,B,[BE],0,3,0,0,["ba",A9G(AM$)],ABI,0,B,[BE],0,3,0,0,["ba",A9G(A37)],ABT,0,B,[BE],0,3,0,0,["ba",A9G(A3j)],ABS,0,B,[BE],
0,3,0,0,["ba",A9G(AO3)],ABR,0,B,[BE],0,3,0,0,["ba",A9G(A0G)],ABQ,0,B,[BE],0,3,0,0,["ba",A9G(AQ8)],ABX,0,B,[BE],0,3,0,0,["ba",A9G(AQ9)],ABW,0,B,[BE],0,3,0,0,["ba",A9G(AX_)],ABV,0,B,[BE],0,3,0,0,["ba",A9G(APh)],ABU,0,B,[BE],0,3,0,0,["ba",A9G(A3h)],AEq,0,B,[],0,0,0,0,0,Iw,0,B,[],0,3,0,0,0,Q0,0,Iw,[],0,3,0,0,0,AIr,0,B,[],0,3,0,0,0,Pe,0,Iw,[],0,3,0,0,0]);
$rt_metadata([Un,0,B,[BW],3,3,0,0,0,P3,0,B,[Un],0,3,0,0,["Nb",A9G(A1B)],ADf,0,B,[W],0,3,0,0,["g",A9G(AD1)],AEx,0,NB,[],0,0,0,0,0,CF,0,B,[Ds],0,3,0,0,["bV",A9F(AUA),"h9",A9F(A2z),"dK",A9I(J$),"dH",A9G(AMI),"cE",A9G(AYX),"r_",A9G(ASh),"pt",A9G(AWs),"lU",A9H(A3V),"kz",A9F(AWz),"cL",A9I(AQ4),"cu",A9H(AOH),"dM",A9H(AS0),"bZ",A9G(AWc),"dJ",A9I(A3L)],AGC,0,CF,[],0,3,0,0,["dH",A9G(AHZ)],AG_,0,B,[],0,3,0,0,0,F$,0,B,[],3,3,0,0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa)],RL,0,B,[],3,0,0,0,0,MR,0,B,[F$],3,
3,0,0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa)],AGI,"EditorComponent",11,CF,[F$,CH,J0,RL,MR],0,3,[0,0,0],0,["dK",A9I(MT),"lU",A9H(ATF),"pY",A9H(A6f),"vt",A9F(AZ7),"xk",A9F(AX2),"qN",A9F(JQ),"oW",A9F(KS),"oo",A9G(IQ),"kZ",A9G(AUn),"kz",A9F(Ml),"bV",A9F(AYq),"cE",A9G(L1),"qM",A9G(AKN),"h9",A9F(AIA),"p5",A9F(AVn),"dH",A9G(A12),"lD",A9F(UH),"kR",A9F(UG),"hV",A9G(AT4),"lf",A9F(ATS),"mg",A9F(AW8),"dJ",A9I(Mf),"dM",A9H(TV),"cu",A9H(Xo),"cL",A9I(PB),"bZ",A9G(Yv),"iJ",A9G(A5S),"f6",A9H(Ju),"At",A9F(AWh),
"K",A9F(AZz)],AJA,0,B,[],0,3,0,0,0,UQ,0,B,[W],0,3,0,0,["g",A9G(AN3)],UR,0,B,[W],0,3,0,0,["g",A9G(A4P)],US,"Diff0$<init>$lambda$_0_2",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(ARW)],GJ,"CtrlO",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AQl)],UO,0,B,[W],0,3,0,0,["g",A9G(ASN)],UP,"Diff0$<init>$lambda$_0_4",11,B,[CR],0,3,[0,0,0],0,["F",A9G(A5m)],CM,0,B,[],3,3,0,0,0,AEN,"WindowManager",24,B,[CH,CM],0,3,[0,0,0],0,["bZ",A9G(AXE),"cL",A9I(AOP),"cu",A9H(AQ5),"dM",A9H(A5L),"eJ",A9H(A1k)],Ut,"UiContext",23,B,[FL,F9],0,3,[0,0,0],0,["f6",
A9H(A4H),"b8",A9F(A2A)],Xf,"WindowScene$<init>$lambda$_1_0",11,B,[EV],0,3,[0,0,0],0,["dJ",A9I(A5F)],Xe,"WindowScene$<init>$lambda$_1_1",11,B,[CR],0,3,[0,0,0],0,["F",A9G(AOR)],AGu,0,B,[],0,3,0,0,0,AE9,0,B,[],0,3,0,0,0,AEZ,0,B,[],0,3,0,0,0,FF,0,B,[Ds],0,3,0,0,0,AI4,0,B,[],0,3,0,0,0,AGt,0,B,[Ds],0,3,0,0,0,Yq,0,B,[W],0,3,0,0,0,Yp,0,B,[W],0,3,0,0,["g",A9G(AOg)],Yo,0,B,[W],0,3,0,0,["g",A9G(ANv)],ALO,0,B,[],0,3,0,0,0,Yn,0,B,[T],0,3,0,0,["e",A9F(AXI)],Yu,0,B,[T],0,3,0,0,["e",A9F(A0c)],Yt,0,B,[T],0,3,0,0,["e",A9F(A6U)],Ys,
0,B,[T],0,3,0,0,["e",A9F(AR8)],Yr,0,B,[T],0,3,0,0,["e",A9F(ATY)],Ym,0,B,[T],0,3,0,0,["e",A9F(A6h)],VL,0,B,[T],0,3,0,0,["e",A9F(AR_)],VM,0,B,[T],0,3,0,0,["e",A9F(A3d)],AHI,0,B,[BW],1,3,0,0,0,NW,0,B,[],4,3,0,A1a,0,AF3,0,B,[],3,3,0,0,0,AA6,"Scene1$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AQM)],AA5,"Scene1$<init>$lambda$_0_1",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AY5)],UF,"Window",24,B,[],0,3,[0,0,0],0,0,KJ,0,B,[],0,3,0,0,0,FA,0,B,[],0,3,0,0,0,NU,0,FA,[],0,3,0,0,0]);
$rt_metadata([AB0,0,FA,[],0,3,0,0,0,ZP,0,FA,[],0,3,0,0,0,Gr,0,B,[],3,3,0,0,0,Tm,0,B,[],3,3,0,0,0,B4,"V4f",29,B,[],0,3,[0,0,0],0,["bO",A9G(AWY),"K",A9F(AOQ)],Jq,0,B,[],3,3,0,0,0,AJW,0,EA,[Ed,C0,Jq],0,3,0,0,["qc",A9G(A1h),"i2",A9G(BI),"c0",A9F(A2U),"qf",A9G(BA),"oX",A9H(AK3),"mG",A9G(EZ),"rt",A9G(AIt),"jB",A9F(IO),"vl",A9H(AJ9),"ft",A9G(FG),"K",A9F(ALT)],LZ,0,B,[],0,3,0,0,0,IL,"GL$Texture",10,B,[Ds],0,3,[AJ3,0,"Texture"],0,["bV",A9F(AHQ)],ZF,0,B,[],3,0,0,0,0,Pb,0,B,[],3,3,0,0,0,ZY,"UiContext$<init>$lambda$_0_0",
23,B,[T],0,3,[0,0,0],0,["e",A9F(A0N)],ZX,"UiContext$<init>$lambda$_0_1",23,B,[T],0,3,[0,0,0],0,["e",A9F(AXr)],AMz,0,B,[],0,3,0,0,0,Ur,0,B,[],0,3,0,0,0,Hi,0,B,[],1,3,0,0,0,AAQ,0,Hi,[],0,3,0,0,["u7",A9G(Cg)],MB,0,B,[],3,3,0,0,0,Uw,0,B,[MB],3,3,0,0,0,LY,"JsFileHandle",27,B,[Uw],0,3,[0,0,0],0,["t",A9F(E6),"uc",A9F(ANT),"K",A9F(N2)],YV,0,B,[MB],3,3,0,0,0,OA,"JsDirectoryHandle",27,B,[YV],0,0,[0,0,0],0,["t",A9F(JF),"uc",A9F(A5G),"K",A9F(I7)],ADW,0,B,[],3,3,0,0,0,ALq,"JsArrayView",27,B,[ADW],0,3,[0,0,0],0,["K",A9F(AZm)],AAZ,
0,B,[Pb],0,3,0,0,0,Hy,0,B,[CG],0,3,0,0,0,Og,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DO,"CodeLine",11,B,[],0,3,[0,0,0],0,["K",A9F(A2$)],Zn,0,B,[],0,3,0,0,0,LK,0,En,[Ed,C0],0,3,0,0,0,VJ,0,B,[Ch],0,3,0,0,["bm",A9G(A1j)],CA,"CodeElement",11,B,[],0,3,[0,0,0],0,["K",A9F(AGP)],Od,0,LK,[],0,3,0,0,0,AAW,0,B,[],0,3,0,0,0,AMT,"Interval",16,B,[CG],0,3,[0,0,0],0,["bO",A9G(AVc),"K",A9F(AJJ),"mO",A9G(AYW)],VY,0,B,[Gx],0,3,0,0,["qL",A9H(ASc)],AAq,"IntervalNode",18,B,[],0,3,[0,0,0],0,["K",A9F(ANQ),"bO",A9G(AOD)],JK,0,B,
[],3,3,0,0,0,Hg,0,B,[JK,Ed],0,0,0,0,["bO",A9G(AZo),"K",A9F(APj)],Ia,"HashMap$HashEntry",1,Hg,[],0,0,[LK,0,0],0,0,Oa,0,LS,[],1,3,0,0,0,Rh,0,Oa,[],0,3,0,0,0,Jr,0,EH,[],0,3,0,0,0,Pt,0,B,[Jo],0,3,0,0,["bm",A9G(AWO)],Pv,0,B,[Ch],0,3,0,0,["bm",A9G(AV$)],Pu,0,B,[Ch],0,3,0,0,["bm",A9G(AYc)],Jf,0,B,[],0,3,0,0,0,KU,0,Cq,[Fo,EY],0,3,0,0,["gf",A9G(A0U),"cE",A9G(A4L),"bR",A9F(AQO),"hs",A9F(A57),"ck",A9H(ANf),"d4",A9G(AZK)],AJD,0,Cz,[],0,3,0,0,["cE",A9G(ANB),"bR",A9F(APA),"ck",A9H(ARU)],ACm,0,Cz,[],0,3,0,0,["cE",A9G(ATp),
"bR",A9F(AYM),"ck",A9H(AZ6)]]);
$rt_metadata([Yy,"ToolbarDemo",15,Cq,[CH,CM],0,3,[0,0,0],0,["cu",A9H(AVY),"dM",A9H(ANO),"eJ",A9H(ARm),"ck",A9H(AQa),"bR",A9F(AZF),"bZ",A9G(ARX),"cL",A9I(AOh)],ABN,"FindUsagesDemo",15,Cq,[CM],0,3,[0,0,0],0,["eJ",A9H(APp),"ck",A9H(AOx)],XW,"RegionTextureAllocatorDemo",11,H5,[CH],0,3,[0,0,0],0,["bZ",A9G(A1n),"cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"bR",A9F(A4f),"cE",A9G(ANu)],TC,0,Cz,[],0,3,0,0,["bR",A9F(ANd),"ck",A9H(AXn)],Dx,0,Cz,[],0,3,0,0,["bR",A9F(ABf),"ck",A9H(Tx)],RV,"SelectFileTest",11,Dx,[],0,3,0,0,
0,Yf,0,Cq,[],0,3,0,0,0,Xy,"RenderTexture",11,Dx,[],0,3,0,0,["cE",A9G(AQ3),"bR",A9F(AZt),"ck",A9H(A52)],TA,"ScissorDemo",11,Dx,[],0,3,0,0,["bR",A9F(A6G),"ck",A9H(AQJ)],ABy,0,Cz,[],0,3,0,0,["bR",A9F(AWb),"ck",A9H(AZH),"cE",A9G(A3X)],KM,"ClipboardTest",11,Dx,[CH],0,3,[0,0,0],0,["bZ",A9G(A1n),"cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(ARJ)],Tj,"CodiconDemo",11,Dx,[],0,3,0,0,["bR",A9F(AWX)],Hn,0,Cz,[CH],1,3,0,0,["bZ",A9G(A1n),"cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"bR",A9F(AGA)],Ud,"LineShaderDemo1",11,Hn,[],0,3,[0,0,0],
0,["cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"ck",A9H(A3I),"bZ",A9G(A4I)],Uc,"LineShaderDemo2",11,Hn,[],0,3,[0,0,0],0,["cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"bZ",A9G(A6i),"bR",A9F(APl),"ck",A9H(AN0)],W4,"WindowsDemo",13,Cq,[CM],0,3,[0,0,0],0,["eJ",A9H(ARl)],Ey,"WindowDemo",23,Cq,[CM],0,3,[0,0,0],0,["jK",A9F(AZb),"p0",A9F(AR5),"of",A9G(AKa),"eJ",A9H(A4o)],Q9,"EditorInViewDemo",11,Ey,[CM,Fo,EY],0,3,[0,0,0],0,["jK",A9F(AOB),"p0",A9F(AXN),"of",A9G(A6k),"d4",A9G(AU4),"gf",A9G(AUi)],X1,"UiContext$1",23,B,[CH],
0,0,[Ut,0,0],0,["cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"bZ",A9G(A4c)],AAx,"FolderTransferDemo",28,Ey,[CM],0,3,[0,0,0],0,["jK",A9F(AQP)],UK,"FolderDiff",28,Cq,[CM],0,3,[0,0,0],0,["eJ",A9H(AWG)],ZN,"FileViewDemo",23,Ey,[CM],0,3,[0,0,0],0,["jK",A9F(A2q),"of",A9G(A3R)],ADI,"SinDemo",11,Cz,[CH],0,3,[0,0,0],0,["bZ",A9G(A1n),"cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"ck",A9H(A6c),"bR",A9F(A0M),"cE",A9G(AUN)],RW,"EditorWindowDemo",11,Cq,[CM],0,3,[0,0,0],0,["eJ",A9H(A0p)],Pk,0,KU,[],0,3,0,0,["hs",A9F(AYP)],SA,"ProjectViewDemo",
11,Cq,[CM],0,3,[0,0,0],0,["eJ",A9H(AZI)],Qe,"DiffMiddleDemo",28,Ey,[CM],0,3,[0,0,0],0,["jK",A9F(AZ1)],Kz,0,B,[],0,3,0,0,0,AG4,0,B,[],0,3,0,0,0,AF2,0,B,[],3,3,0,0,0,AJx,0,B,[],0,3,0,0,0,AHu,0,B,[],3,3,0,0,0,AJd,0,B,[],0,3,0,0,0,M2,0,B,[JK,C0],0,3,0,0,0,K7,0,M2,[],0,0,0,0,0,AMJ,0,B,[],0,3,0,0,0,Zu,"Editor0$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AYx)],Zs,0,B,[W],0,3,0,0,["g",A9G(A0f)],Zt,"Editor0$<init>$lambda$_0_2",11,B,[CR],0,3,[0,0,0],0,["F",A9G(AVq)],AI$,"TextRect",11,KJ,[],0,3,[0,0,0],0,0,UL,
"DemoScene1$MyInputListener",11,B,[CH],0,0,[AJD,0,"MyInputListener"],0,["bZ",A9G(AYN),"cL",A9I(ANo),"cu",A9H(AYG),"dM",A9H(AX6)],ZV,"DemoScene1$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(A45)],ZU,"DemoScene1$<init>$lambda$_0_1",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(A3k)],ZT,"DemoScene1$<init>$lambda$_0_2",11,B,[FL],0,3,[0,0,0],0,["f6",A9H(A1s)],ZS,"DemoScene1$<init>$lambda$_0_3",11,B,[T],0,3,[0,0,0],0,["e",A9F(AXC)],ZR,"DemoScene1$<init>$lambda$_0_4",11,B,[CR],0,3,[0,0,0],0,["F",A9G(ATy)],ZQ,"DemoScene1$<init>$lambda$_0_5",
11,B,[EV],0,3,[0,0,0],0,["dJ",A9I(A4_)],HD,0,B4,[],0,3,0,0,0,AH8,0,B,[],3,3,0,0,0,Xw,"CleartypeColors$MyInputListener",11,B,[CH],0,0,[ACm,0,"MyInputListener"],0,["bZ",A9G(A1n),"cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(APX)]]);
$rt_metadata([Xs,0,B,[],0,3,0,0,0,AHv,"Toolbar",23,B,[],0,3,[0,0,0],0,0,AKr,0,B,[],0,3,0,0,["bO",A9G(A4l)],ACO,"ToolbarDemo$<init>$lambda$_0_0",15,B,[Cp],0,3,[0,0,0],0,["F",A9G(ATa)],ACK,"ToolbarDemo$<init>$lambda$_0_1",15,B,[CR],0,3,[0,0,0],0,["F",A9G(AU9)],ACL,0,B,[T],0,3,0,0,["e",A9F(A6M)],ACM,0,B,[T],0,3,0,0,["e",A9F(AN_)],By,"ToolbarItem",23,B,[],0,3,[0,0,0],0,0,Vn,"FindUsagesDemo$<init>$lambda$_0_0",15,B,[Cp],0,3,[0,0,0],0,["F",A9G(A1m)],Vo,"FindUsagesDemo$<init>$lambda$_0_1",15,B,[CR],0,3,[0,0,0],0,["F",
A9G(ANP)],AIQ,0,B,[],0,3,0,0,0,PD,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",11,B,[CM],0,3,[0,0,0],0,["eJ",A9H(ATf)],PC,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(A2O)],AAM,0,B,[],3,3,0,0,0,AJE,0,B,[AAM],0,3,0,0,0,XH,"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CH],0,0,[TC,0,"LineNumbersInputListener"],0,["cL",A9I(A3D),"cu",A9H(AXP),"dM",A9H(ANK),"bZ",A9G(AZU)],AA7,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[EV],0,3,[0,0,0],0,["dJ",A9I(ATd)],Rq,
"SelectFileTest$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AS4)],Sk,"WorkerTest$<init>$lambda$_0_0",14,B,[CR],0,3,[0,0,0],0,["F",A9G(AWZ)],Sj,0,B,[W],0,3,0,0,["g",A9G(A31)],ACY,"RenderTexture$MyInputListener",11,B,[CH],0,0,[Xy,0,"MyInputListener"],0,["dM",A9H(ANO),"cL",A9I(A3D),"bZ",A9G(A28),"cu",A9H(AWN)],AHD,0,B,[],0,3,0,0,0,Dl,0,B,[],3,3,0,FW,0,Zv,"TextureRegionTestScene$MListener",11,B,[CH],0,0,[ABy,0,"MListener"],0,["cL",A9I(A3D),"cu",A9H(ARf),"dM",A9H(AX3),"bZ",A9G(AP2)],WW,"TextureRegionTestScene$<init>$lambda$_0_0",
11,B,[EV],0,3,[0,0,0],0,["dJ",A9I(A48)],AEu,"ClipboardTest$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(APb)],AEt,"ClipboardTest$<init>$lambda$_0_1",11,B,[FL],0,3,[0,0,0],0,["f6",A9H(A1z)],AEs,"ClipboardTest$<init>$lambda$_0_2",11,B,[FL],0,3,[0,0,0],0,["f6",A9H(APk)],AEr,"ClipboardTest$<init>$lambda$_0_3",11,B,[F9],0,3,[0,0,0],0,["b8",A9F(ASs)],AEv,"ClipboardTest$<init>$lambda$_0_4",11,B,[F9],0,3,[0,0,0],0,["b8",A9F(A4C)],S0,"CodiconDemo$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AWo)],P4,
"WindowsDemo$<init>$lambda$_0_0",13,B,[Cp],0,3,[0,0,0],0,["F",A9G(AND)],P6,"WindowsDemo$<init>$lambda$_0_1",13,B,[CR],0,3,[0,0,0],0,["F",A9G(A0H)],P7,0,B,[W],0,3,0,0,["g",A9G(A26)],P8,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CR],0,3,[0,0,0],0,["F",A9G(A4Y)],Rs,"FolderTransferDemo$<init>$lambda$_0_0",28,B,[CR],0,3,[0,0,0],0,["F",A9G(ATW)],Rr,"FolderTransferDemo$<init>$lambda$_0_1",28,B,[Cp],0,3,[0,0,0],0,["F",A9G(AWC)],AB7,"FolderDiff$<init>$lambda$_0_0",28,B,[CR],0,3,[0,0,0],0,["F",A9G(AT$)],Rz,"SinDemo$<init>$lambda$_0_0",
11,B,[Cp],0,3,[0,0,0],0,["F",A9G(ARK)],Ew,0,B,[Fo],1,3,0,0,0,Kv,"EditorWindow",11,Ew,[],0,3,[0,0,0],0,["d4",A9G(AM1),"bV",A9F(AOL),"mH",A9G(A0x)],QC,0,B,[W],0,3,0,0,["g",A9G(A5b)],QB,"EditorWindowDemo$<init>$lambda$_0_1",11,B,[CR],0,3,[0,0,0],0,["F",A9G(AZV)],AIC,0,B,[],3,3,0,0,0,Yz,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CR],0,3,[0,0,0],0,["F",A9G(APF)],Vs,"DiffMiddleDemo$<init>$lambda$_0_0",28,B,[CR],0,3,[0,0,0],0,["F",A9G(AT_)],Vr,"DiffMiddleDemo$<init>$lambda$_0_1",28,B,[Cp],0,3,[0,0,0],0,["F",A9G(ATx)],Dr,
0,B,[],3,3,0,AP9,0,Cu,0,CD,[],12,3,0,UU,0,KO,0,B,[],0,3,0,0,0]);
$rt_metadata([Ji,0,B,[],0,3,0,0,0,ALl,0,B,[],0,3,0,0,0,DW,0,B,[],3,3,0,AXM,0,Y4,0,B,[BW],3,3,0,0,0,Zd,0,B,[Y4],0,3,0,0,["CP",A9H(A0j)],Y5,0,B,[BW],3,3,0,0,0,Zb,0,B,[Y5],0,3,0,0,["CP",A9H(A08)],AGl,0,B,[],0,3,0,0,0,AJC,0,B,[BW],3,3,0,0,0,V_,0,B,[],0,3,0,0,0,D1,0,B,[],3,3,0,A17,0,If,0,B,[],3,3,0,0,0,QM,0,B,[If],0,3,0,0,["xG",A9I(A3Q)],QN,0,B,[If],0,3,0,0,0,UN,0,B,[W],0,3,0,0,["g",A9G(A2G)],Qo,0,B,[W],0,3,0,0,["g",A9G(APR)],Qn,0,B,[W],0,3,0,0,["g",A9G(AOq)],Qk,0,B,[W],0,3,0,0,["g",A9G(ANw)],Qi,0,B,[W],0,3,0,0,
["g",A9G(A6j)],AJi,0,B,[],0,3,0,0,0,VO,0,B,[W],0,3,0,0,["g",A9G(A09)],ADn,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Cp],0,3,[0,0,0],0,["F",A9G(AQX)],AMg,0,B,[],0,3,0,0,["bO",A9G(AZf)],Jp,0,B,[],0,3,0,0,0,KK,0,B,[],4,3,0,0,0,AJ5,0,B,[],0,3,0,0,0,Cx,0,CD,[],12,3,0,AGy,0,AMP,0,B,[],0,3,0,0,0,AGT,0,B,[BW],4,3,0,0,0,AMY,0,B,[],0,3,0,0,0,AFC,0,B,[],3,3,0,0,0,C8,0,B,[BW],1,3,0,0,0,ALE,0,C8,[],1,3,0,0,0,AL4,0,C8,[],1,3,0,0,0,AKi,0,C8,[],1,3,0,0,0,AKt,0,C8,[],1,3,0,0,0,AMj,0,C8,[],1,3,0,0,0,Wk,0,B,[T],0,3,0,0,["e",
A9F(ARB)],H2,0,CD,[],12,3,0,AHy,0,Qa,0,B,[BE],0,3,0,0,["ba",A9G(AX4)],AAD,0,B,[],0,3,0,0,0,AJ1,0,B,[],0,3,0,0,0,GL,0,B,[],0,3,0,0,0,AGJ,0,B,[],4,3,0,0,0,Up,0,B,[],0,0,0,0,0,AJ7,0,B,[],3,3,0,0,0,ADo,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[EV],0,3,[0,0,0],0,["dJ",A9I(AXF)],YG,"ScissorDemo$1",11,B,[CH],0,0,[TA,0,0],0,["cu",A9H(AVY),"dM",A9H(ANO),"cL",A9I(A3D),"bZ",A9G(A6P)],AGR,0,B,[BW],1,3,0,0,0,AIx,"PopupMenu",23,B,[CM,F$,Ds],0,3,[0,0,0],0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa),
"eJ",A9H(A6q),"iJ",A9G(ASi),"bV",A9F(AUg)]]);
$rt_metadata([X6,0,B,[W],0,3,0,0,["g",A9G(AR1)],V0,0,B,[W],0,3,0,0,["g",A9G(A55)],RM,0,B,[W],0,3,0,0,["g",A9G(AYz)],Qq,0,B,[CL],0,3,0,0,["b8",A9F(AXT)],ALz,0,B,[],3,3,0,0,0,Mk,0,B,[],3,3,0,0,0,RR,0,B,[Mk],0,3,0,0,["An",A9G(AYY)],P1,0,B,[BE],0,3,0,0,["ba",A9G(A5e)],AHW,0,B,[],0,3,0,0,0,Rt,"LineNumbersTexture",11,B,[Ds],0,3,[0,0,0],0,0,AFG,0,B,[],0,3,0,0,0,U5,0,B,[],0,3,0,0,0,Mx,0,B,[],0,3,0,0,0,Tk,0,B,[],3,3,0,0,0,ADu,0,B,[W],0,3,0,0,["g",A9G(AYZ)],Gw,0,Jr,[],0,3,0,0,0,AEI,0,FK,[],0,3,0,0,0,AEL,0,B,[W],0,3,0,
0,["g",A9G(AXx)],Vd,0,B,[W],0,3,0,0,["g",A9G(A5E)],WM,0,B,[T],0,3,0,0,["e",A9F(A38)],Z$,"FolderDiffWindow",28,Ew,[],0,3,[0,0,0],0,["bV",A9F(AOC),"mH",A9G(A0P)],Wc,0,B,[CL],0,3,0,0,["b8",A9F(AWS)],Pp,0,B,[CL],0,3,0,0,["b8",A9F(A0r)],Pq,0,B,[W],0,3,0,0,0,Lm,0,B,[],3,3,0,0,["sc",A9H(AOn)],L_,0,Ew,[Lm],0,3,0,0,["mH",A9G(AY1),"bV",A9F(A1x),"d4",A9G(AZQ),"AD",A9G(AZO),"ym",A9G(AVb),"vN",A9G(A2X),"sc",A9H(A2o)],AEi,0,B,[CL],0,3,0,0,["b8",A9F(AWL)],AE2,0,DH,[CG],0,3,0,0,0,GQ,0,B,[],0,0,0,0,0,JZ,0,B,[],4,3,0,0,0,U9,
0,B,[],0,3,0,0,0,OU,0,B,[],1,3,0,0,0,ADU,"Pos",17,B,[CG],0,3,[0,0,0],0,["bO",A9G(ANx),"qy",A9F(AUx),"K",A9F(AN7),"mO",A9G(A3t)],AG1,0,C8,[],1,3,0,0,0,VI,0,B,[T],0,3,0,0,["e",A9F(AOw)],AFj,0,B,[],3,3,0,0,0,Ye,0,B,[T],0,3,0,0,["e",A9F(A5A)],Yc,0,B,[T],0,3,0,0,["e",A9F(AP8)],Yb,0,B,[T],0,3,0,0,["e",A9F(ANZ)],Yd,0,B,[T],0,3,0,0,["e",A9F(A6Q)],AAl,0,B,[T],0,3,0,0,["e",A9F(AVI)],AAk,0,B,[T],0,3,0,0,["e",A9F(A1J)],AAn,0,B,[T],0,3,0,0,["e",A9F(A3b)],AAm,0,B,[T],0,3,0,0,["e",A9F(AVE)],AD7,0,B,[T],0,3,0,0,["e",A9F(A3F)],SJ,
0,B,[T],0,3,0,0,["e",A9F(A10)],ZZ,0,B,[W],0,3,0,0,["g",A9G(AYg)],Sc,0,B,[W],0,3,0,0,["g",A9G(A2t)],FC,0,CF,[],0,3,0,0,0,R8,0,FC,[F$],0,3,0,0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa),"bV",A9F(A5C),"lU",A9H(AZE),"dH",A9G(AXO),"pt",A9G(A3r),"r_",A9G(A4D),"bZ",A9G(AR$),"cu",A9H(AQc),"cL",A9I(AUo),"iJ",A9G(A4Q)]]);
$rt_metadata([V7,0,B,[T],0,3,0,0,["e",A9F(AWu)],AGx,0,CF,[],0,3,0,0,["bV",A9F(AVd),"dK",A9I(AQG),"dH",A9G(A3Y),"cL",A9I(AVD),"cu",A9H(AVf),"dM",A9H(ATi),"bZ",A9G(AS5),"dJ",A9I(AZ3),"h9",A9F(AJb)],AEU,0,B,[W],0,3,0,0,["g",A9G(APt)],AEW,0,B,[W],0,3,0,0,["g",A9G(ANy)],QO,0,FC,[],0,3,0,0,["h9",A9F(AWD),"pt",A9G(A3x),"dH",A9G(AWV),"cu",A9H(ASD)],AEV,0,B,[T],0,3,0,0,["e",A9F(AVu)],Vk,0,CF,[],0,3,0,0,0,Id,0,CF,[],1,3,0,0,["bV",A9F(A2w),"dH",A9G(ASX),"cE",A9G(AX1),"dK",A9I(APs),"cL",A9I(A5k),"cu",A9H(AVG),"dM",A9H(A5v),
"bZ",A9G(A5X),"dJ",A9I(AP6),"kz",A9F(A5I)],Iz,0,Id,[],1,0,0,0,["CZ",A9F(AR7)],AG8,0,Iz,[Fo],0,0,0,0,0,HE,0,B,[],0,3,0,0,0,C_,"FileTreeNode",23,HE,[],0,3,[0,0,0],0,0,Tv,0,B,[T],0,3,0,0,["e",A9F(AYL)],Tt,0,B,[T],0,3,0,0,["e",A9F(AXi)],Tu,0,B,[T],0,3,0,0,["e",A9F(A0Y)],Ts,0,B,[T],0,3,0,0,["e",A9F(AVr)],AEo,0,B,[T],0,3,0,0,["e",A9F(AQ_)],AEn,0,B,[T],0,3,0,0,["e",A9F(AVz)],RF,0,Id,[EY],0,3,0,0,["CZ",A9F(ARv),"h9",A9F(A0K)],ABF,0,B,[T],0,3,0,0,["e",A9F(APD)],ABE,0,B,[T],0,3,0,0,["e",A9F(AT9)],ABG,0,B,[T],0,3,0,0,
["e",A9F(A2j)],AA9,0,DH,[CG],0,3,0,0,0,AFh,0,B,[T],0,3,0,0,["e",A9F(A1w)],Yx,0,B,[T],0,3,0,0,["e",A9F(AYn)],ACF,0,B,[],0,3,0,0,0,Kp,0,B,[],0,3,0,0,0,O5,0,B,[],3,3,0,0,0,LO,0,FC,[F$],0,3,0,0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa),"bV",A9F(ATR),"lU",A9H(AOd),"dH",A9G(A14),"cL",A9I(A47),"cu",A9H(APd)],AKV,0,LO,[],0,3,0,0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa)],AHo,0,B,[MR],0,3,0,0,["xk",A9F(A2B),"vt",A9F(AQj),"f6",A9H(ANe),"At",A9F(AXa),"lD",A9F(AVo),"kR",A9F(A5h),"hV",A9G(AWq),
"lf",A9F(ARV),"mg",A9F(AX8),"pY",A9H(ASw),"qM",A9G(A2l),"p5",A9F(M5)],Qb,0,CF,[],0,3,0,0,["dH",A9G(ANE)],ACN,0,B,[],0,3,0,0,0,Yh,0,B,[T],0,3,0,0,["e",A9F(AWI)],Tw,0,B,[T],0,3,0,0,["e",A9F(ARZ)],Qy,0,B,[W],0,3,0,0,["g",A9G(ANM)],Qx,0,B,[W],0,3,0,0,["g",A9G(AN5)],AFp,0,B,[Gx],0,3,0,0,["qL",A9H(AUP)],UB,0,B,[],3,3,0,AQ$,0,LC,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,AMM,0,Hi,[],0,0,0,0,["u7",A9G(A6C)],Dc,0,Bt,[],0,3,0,0,0,ALR,0,FK,[],0,3,0,0,0,AMS,0,B,[],0,3,0,0,0,Pl,0,B,[W],0,3,0,0,["g",A9G(AXf)],ADO,0,B,[W],
0,3,0,0,["g",A9G(A2e)],OL,0,BJ,[],0,3,0,0,0,S6,0,B,[W],0,3,0,0,["g",A9G(AZN)],S5,0,B,[W],0,3,0,0,["g",A9G(A5B)],Fu,0,B,[],3,3,0,0,0]);
$rt_metadata([X_,0,B,[Fu],0,0,0,0,["cP",A9F(Cb),"cf",A9F(Cc),"pV",A9F(AAt)],LH,0,OU,[],1,3,0,0,0,T2,0,LH,[],0,3,0,0,0,AEm,0,B,[W],0,3,0,0,0,WF,0,B,[W],0,3,0,0,["g",A9G(AV6)],PF,0,B,[CL],0,3,0,0,["b8",A9F(AUr)],PE,0,B,[CL],0,3,0,0,["b8",A9F(AZx)],ABv,0,B,[CL],0,3,0,0,["b8",A9F(A21)],XY,0,B,[CL],0,3,0,0,["b8",A9F(A3O)],ABe,0,B,[Ch],0,3,0,0,["bm",A9G(A5Z)],AG5,0,B,[BW],1,3,0,0,0,ADM,0,B,[Ch],0,3,0,0,["bm",A9G(AQp)],AI2,0,B,[BE],0,3,0,0,0,AH7,0,B,[BE],0,3,0,0,0,X8,0,B,[W],0,3,0,0,["g",A9G(AO$)],X7,0,B,[W],0,3,0,
0,["g",A9G(AU3)],SQ,0,B,[T],0,3,0,0,["e",A9F(AUt)],SP,0,B,[T],0,3,0,0,["e",A9F(AZ5)],SS,0,B,[T],0,3,0,0,["e",A9F(A5z)],SR,0,B,[T],0,3,0,0,["e",A9F(AXp)],Uh,0,B,[T],0,3,0,0,["e",A9F(AV0)],AGm,0,B,[],0,3,0,0,0,ACi,0,B,[T],0,3,0,0,["e",A9F(AM9)],ACj,0,B,[T],0,3,0,0,["e",A9F(AQS)],ADQ,0,B,[T],0,3,0,0,["e",A9F(A56)],Rm,0,B,[],0,3,0,0,0,Xr,0,B,[T],0,3,0,0,["e",A9F(A0a)],Xq,0,B,[Dt],0,3,0,0,0,AI1,0,B,[],0,3,0,0,0,DU,0,Bt,[],0,3,0,0,0,AIu,0,B,[],0,3,0,0,0,Ty,0,En,[Ed,C0],0,3,0,0,0,VE,0,B,[],0,3,0,0,0,Vl,0,B,[],0,3,
0,0,0,XL,0,B,[Dt],0,3,0,0,0,TN,0,B,[W],0,3,0,0,["g",A9G(AU5)],Zw,0,DH,[CG],0,3,0,0,0,Kt,0,B,[],4,3,0,0,0,UV,0,B,[T],0,3,0,0,["e",A9F(ANR)],UW,0,B,[T],0,3,0,0,["e",A9F(AP4)],UX,0,B,[T],0,3,0,0,["e",A9F(A5D)],UY,0,B,[T],0,3,0,0,["e",A9F(ASo)],UZ,0,B,[T],0,3,0,0,["e",A9F(AUI)],Ps,0,B,[Ch],0,3,0,0,["bm",A9G(A6T)],WI,0,B,[],3,3,0,A7R,0,AC7,0,B,[],0,3,0,0,0,R2,0,B,[T],0,3,0,0,["e",A9F(A2i)],XE,0,B,[T],0,3,0,0,["e",A9F(A2b)],Yg,0,B,[],0,3,0,0,0,Wo,0,B,[W],0,3,0,0,["g",A9G(AU_)]]);
$rt_metadata([AIB,0,B,[],0,3,0,0,0,AF6,0,B,[],3,3,0,0,0,SN,0,B,[T],0,3,0,0,["e",A9F(A0S)],AD5,0,B,[T],0,3,0,0,["e",A9F(AWE)],Zo,0,B,[],1,3,0,0,0,AAh,0,B,[MS],3,3,0,0,0,PZ,0,B,[AAh],3,3,0,0,0,F0,0,B,[PZ],1,3,0,0,0,ABh,0,F0,[],0,3,0,0,0,Sa,0,B,[],3,3,0,0,0,Pr,0,B,[W],0,3,0,0,0,AES,0,B,[W],0,3,0,0,["g",A9G(AOf)],AHd,0,B,[],3,3,0,0,0,JX,0,Hg,[],0,0,0,0,0,Is,0,Bt,[],0,3,0,0,0,AE5,0,B,[Ch],0,3,0,0,["bm",A9G(A4d)],AE4,0,B,[Ch],0,3,0,0,["bm",A9G(AZw)],AEp,0,B,[Ch],0,3,0,0,["bm",A9G(A0t)],TU,0,B,[],0,3,0,0,0,AC9,0,B,
[If],0,3,0,0,["xG",A9I(AR4)],ALX,0,B,[],0,3,0,0,0,RQ,0,B,[W],0,3,0,0,["g",A9G(AYo)],AFO,0,B,[W],0,3,0,0,0,Um,0,B,[CE],0,3,0,0,["cG",A9G(AXQ)],Wv,0,B,[BE],0,3,0,0,0,F1,0,B,[],0,3,0,0,0,AJU,0,B,[],0,3,0,0,0,AGb,0,B,[],0,3,0,0,0,AM0,0,B,[],0,3,0,0,0,AEJ,0,B,[T],0,3,0,0,["e",A9F(AX9)],AEK,0,B,[T],0,3,0,0,["e",A9F(A0R)],Gd,"ScopeNode",20,B,[],0,3,[0,0,0],0,0,WP,0,B,[W],0,3,0,0,["g",A9G(AQz)],Oc,"FakeNode",20,Gd,[],0,3,[0,0,0],0,0,LE,"MemberNode",20,Gd,[],0,3,[0,0,0],0,0,VV,0,B,[W],0,3,0,0,["g",A9G(AYa)],Rv,"InferenceNode",
20,B,[],0,3,[0,0,0],0,0,QU,0,B,[W],0,3,0,0,["g",A9G(A15)],QZ,0,B,[HO],3,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],EC,0,FN,[QZ],1,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],NS,0,EC,[],1,0,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],Ve,0,NS,[],0,0,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],Ou,0,En,[],1,0,0,0,0,Vb,0,Ou,[],0,0,0,0,0,OO,0,EA,[Jq],1,0,0,0,["ft",A9G(AXh),"jB",A9F(AZr),"mG",A9G(ASI),"qc",A9G(ARF)],Vc,0,OO,[],0,0,0,0,["ft",A9G(AXh),"i2",A9G(ASP),"c0",A9F(ARY),"cd",A9F(APJ),"eO",A9F(ANV)],U_,0,B,[Fu],0,0,0,0,["cP",A9F(ANC),"cf",A9F(A2Z),
"pV",A9F(AUU)],Zm,0,B,[Fu],3,3,0,0,0,Va,0,B,[Zm],0,0,0,0,0,W8,0,B,[Gx],0,3,0,0,0]);
$rt_metadata([R$,0,B,[Dt],0,3,0,0,["F",A9G(A6V)],KQ,0,DU,[],0,3,0,0,0,J4,0,Bt,[],0,3,0,0,0,OG,0,Bt,[],0,3,0,0,0,Zh,0,B,[W],0,3,0,0,["g",A9G(A20)],AJj,0,B,[W],0,3,0,0,0,ACv,0,B,[W],0,3,0,0,["g",A9G(ASy)],RP,0,B,[Sa],0,3,0,0,0,Wn,0,B,[W],0,3,0,0,["g",A9G(A01)],AFT,0,B,[],0,3,0,0,0,ABw,0,B,[T],0,3,0,0,["e",A9F(AX$)],Hs,"Diff",11,B,[],0,3,[0,0,0],0,0,Q$,0,EC,[],0,0,0,0,["qc",A9G(A1h)],UE,0,EC,[],0,0,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],Ra,0,FN,[],0,0,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],W_,0,B,[W],0,3,0,0,["g",A9G(AZX)],U1,
0,B,[W],0,3,0,0,["g",A9G(A1I)],KW,"DeclNode",22,B,[],0,3,[0,0,0],0,["K",A9F(A4r),"bO",A9G(ALw)],MK,"MethodNode",22,KW,[],0,3,[0,0,0],0,["bO",A9G(AYy)],Fk,"RefNode",21,B,[],0,3,[0,0,0],0,["K",A9F(AWe),"bO",A9G(AJX)],HZ,"ExprRefNode",21,Fk,[],0,3,[0,0,0],0,["K",A9F(A2d)],KD,"MethodCallNode",21,Fk,[],0,3,[0,0,0],0,["bO",A9G(A5H)],JI,"QualifiedRefNode",21,Fk,[],0,3,[0,0,0],0,["K",A9F(AS6),"bO",A9G(AXW)],TS,0,B,[W],0,3,0,0,["g",A9G(AWr)],AGH,0,F0,[],0,3,0,0,0,AB$,0,B,[W],0,3,0,0,["g",A9G(ATM)],PQ,0,B,[W],0,3,0,0,
["g",A9G(A6t)],U6,0,B,[W],0,3,0,0,["g",A9G(AZ9)],P5,0,B,[W],0,3,0,0,["g",A9G(ASE)],Zy,0,B,[W],0,3,0,0,["g",A9G(AVx)],Ny,"FileDiffWindow",28,Ew,[],0,3,[0,0,0],0,["d4",A9G(A4j),"bV",A9F(A5n),"mH",A9G(AYj)],Xa,0,B,[CL],0,3,0,0,["b8",A9F(A4N)],QV,0,B,[CL],0,3,0,0,["b8",A9F(AQx)],Xt,0,B,[CL],0,3,0,0,["b8",A9F(APa)],T8,0,B,[Gr],0,3,0,0,["qR",A9H(AQw)],Xu,0,B,[],0,3,0,0,0,Sr,0,B,[],0,3,0,0,0,UJ,0,B,[W],0,3,0,0,["g",A9G(A6g)],VN,0,B,[Mk],0,3,0,0,["An",A9G(NX)],VH,0,Iz,[Fo],0,0,0,0,0,W3,0,B,[T],0,3,0,0,["e",A9F(A06)],W2,
0,B,[T],0,3,0,0,["e",A9F(ASd)],U3,0,B,[Gr],0,3,0,0,["qR",A9H(AUs)],AIZ,0,B,[CG],0,3,0,0,["bO",A9G(ATm),"K",A9F(ALv)],XG,0,B,[W],0,3,0,0,["g",A9G(A1H)],WY,0,B,[W],0,3,0,0,["g",A9G(A6S)],Po,0,B,[W],0,3,0,0,["g",A9G(A5q)],FU,0,B,[],0,0,0,0,0,ABH,0,FU,[Fu],0,0,0,0,0,Ux,0,FU,[Fu],0,0,0,0,0]);
$rt_metadata([AAE,0,FU,[Fu],0,0,0,0,0,AF4,0,B,[W],0,0,0,0,0,AAC,0,B,[C0],4,3,0,0,0,ABc,0,B,[W],0,3,0,0,["g",A9G(ASG)],ABb,0,B,[W],0,3,0,0,["g",A9G(A3u)],YK,0,B,[W],0,3,0,0,["g",A9G(AZk)],Ic,0,B,[],3,3,0,0,0,T$,0,B,[Ic],0,3,0,0,["md",A9I(A16)],T_,0,B,[Ic],0,3,0,0,["md",A9I(A0I)],Jc,0,B,[C0,CG],0,3,0,0,0,Le,0,B,[],3,3,0,0,0,SM,0,B,[Le],0,3,0,0,0,Nx,0,B,[Le],3,3,0,0,0,AHe,0,B,[Nx],0,3,0,0,0,S_,0,B,[Ic],0,3,0,0,["md",A9I(A2C)],S$,0,B,[Dt],0,3,0,0,["F",A9G(AWn)],S9,0,B,[Dt],0,3,0,0,["F",A9G(AUh)],Tb,0,B,[Ic],0,3,
0,0,["md",A9I(A2a)],BV,0,B,[],1,0,0,0,["cA",A9I(IZ),"cN",A9J(I8),"jh",A9F(AYK),"K",A9F(AUC),"V",A9G(AVP),"b6",A9G(A49),"gU",A9F(A50),"e2",A9F(KV)],RA,0,B,[W],0,3,0,0,["g",A9G(A00)],ABC,0,B,[W],0,3,0,0,["g",A9G(ARG)],AFl,0,B,[W],0,3,0,0,["g",A9G(A4B)],AFk,0,B,[W],0,3,0,0,["g",A9G(AO2)],IM,0,B,[],3,3,0,0,0,AC6,0,B,[IM],0,3,0,0,["oe",A9G(A4w),"pl",A9G(AS8),"o2",A9F(AZA)],S7,0,B,[W],0,3,0,0,0,WZ,0,B,[W],0,3,0,0,["g",A9G(A2H)],W0,0,B,[W],0,3,0,0,["g",A9G(AQg)],Sq,0,B,[T],0,3,0,0,["e",A9F(A0l)],YJ,0,B,[W],0,3,0,0,
["g",A9G(ASS)],ABY,0,B,[T],0,3,0,0,["e",A9F(AOb)],C6,"FSet",2,BV,[],0,0,[0,0,0],O6,["c",A9I(AOa),"t",A9F(AQV),"M",A9G(AOt)],Ho,0,B,[],0,0,0,0,0,KE,0,BX,[],0,3,0,0,0,FP,0,B,[T],0,3,0,AJc,0,YH,0,B,[W],0,3,0,0,["g",A9G(AUL)],SL,"NonCapFSet",2,C6,[],0,0,[0,0,0],0,["c",A9I(AXR),"t",A9F(AZi),"M",A9G(A34)],AFf,"AheadFSet",2,C6,[],0,0,[0,0,0],0,["c",A9I(AY_),"t",A9F(A1d)],Rx,"BehindFSet",2,C6,[],0,0,[0,0,0],0,["c",A9I(AOy),"t",A9F(A42)],TB,"AtomicFSet",2,C6,[],0,0,[0,0,0],0,["c",A9I(AXV),"t",A9F(AU8),"M",A9G(A22)],Gl,
"FinalSet",2,C6,[],0,0,[0,0,0],0,["c",A9I(AV2),"t",A9F(AYU)],Cf,0,BV,[],1,0,0,0,["c",A9I(A6y),"cg",A9F(A4K),"M",A9G(ARn)],AIy,"EmptySet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(A4k),"cA",A9I(AZ2),"cN",A9J(AY8),"t",A9F(AQW),"M",A9G(AXU)],B$,"JointSet",2,BV,[],0,0,[0,0,0],0,["c",A9I(AQD),"V",A9G(ATI),"t",A9F(ARw),"b6",A9G(A1E),"M",A9G(AUc),"e2",A9F(AOV)],KP,"NonCapJointSet",2,B$,[],0,0,[0,0,0],0,["c",A9I(ATv),"t",A9F(ASf),"M",A9G(A3H)],Eh,"AtomicJointSet",2,KP,[],0,0,[0,0,0],0,["c",A9I(AZu),"V",A9G(A3z),"t",A9F(ANJ)],Xm,
"PositiveLookAhead",2,Eh,[],0,0,[0,0,0],0,["c",A9I(ATG),"M",A9G(AVU),"t",A9F(A5V)],ADY,"NegativeLookAhead",2,Eh,[],0,0,[0,0,0],0,["c",A9I(AOp),"M",A9G(A4O),"t",A9F(AQy)],AAF,"PositiveLookBehind",2,Eh,[],0,0,[0,0,0],0,["c",A9I(AOT),"M",A9G(A6O),"t",A9F(ATk)],T3,"NegativeLookBehind",2,Eh,[],0,0,[0,0,0],0,["c",A9I(AXv),"M",A9G(A3U),"t",A9F(AOA)]]);
$rt_metadata([H9,"SingleSet",2,B$,[],0,0,[0,0,0],0,["c",A9I(ANA),"cA",A9I(ASk),"cN",A9J(A36),"b6",A9G(A1C),"gU",A9F(A2Y),"e2",A9F(AWv)],Hq,0,B,[],1,0,0,0,0,Ba,0,Hq,[],1,0,0,QQ,["d3",A9F(AYt),"f4",A9F(AX7),"ml",A9F(A4F),"iF",A9F(A5U)],AGg,0,Ba,[],0,0,0,0,["o",A9G(De),"d3",A9F(C$),"f4",A9F(AZY),"ml",A9F(AVF),"K",A9F(A2f),"iF",A9F(AQb)],Na,0,Bt,[],0,3,0,0,0,Eu,0,BV,[],1,0,0,0,["b6",A9G(AUS),"M",A9G(A5g),"e2",A9F(ASC)],Dg,"LeafQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9I(AXw),"t",A9F(AY2)],F8,"CompositeQuantifierSet",
2,Dg,[],0,0,[0,0,0],0,["c",A9I(AYf),"t",A9F(AYv)],C7,"GroupQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9I(AXK),"t",A9F(A0X)],Fj,"AltQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9I(A1Q),"V",A9G(AXb)],V5,"UnifiedQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9I(A6s),"cA",A9I(AS3)],PO,0,B,[],3,3,0,0,0,SY,0,B,[PO],0,3,0,0,0,Bg,0,B,[],1,0,0,0,0,Dz,0,BX,[],0,3,0,0,0,Xz,0,Hq,[Ed],0,0,0,0,["K",A9F(ACh)],YF,"FSet$PossessiveFSet",2,BV,[],0,0,[C6,0,0],0,["c",A9I(ARH),"t",A9F(A2S),"M",A9G(A2W)],AED,0,B,[Ed,C0],0,3,0,0,0,Pw,0,
B$,[],0,0,0,0,["t",A9F(A23)],R0,"CompositeRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A9I(AN9),"V",A9G(A2N),"t",A9F(A3c),"M",A9G(AOE),"b6",A9G(AOr)],Ea,"SupplRangeSet",2,B$,[],0,0,[0,0,0],0,["c",A9I(AZR),"t",A9F(A5O),"o",A9G(AQn),"b6",A9G(AN4),"V",A9G(A4y),"M",A9G(AP3)],M9,"UCISupplRangeSet",2,Ea,[],0,0,[0,0,0],0,["o",A9G(ARo),"t",A9F(AWA)],AGa,"UCIRangeSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(A1p),"t",A9F(AYA)],EQ,"RangeSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(Xc),"t",A9F(ARM),"b6",A9G(ATK)],Y0,"HangulDecomposedCharSet",
2,B$,[],0,0,[0,0,0],0,["V",A9G(ASq),"t",A9F(AUK),"c",A9I(ANh),"b6",A9G(AYD),"M",A9G(AVK)],EX,"CharSet",2,Cf,[],0,0,[0,0,0],0,["cg",A9F(A1e),"bE",A9H(AQN),"cA",A9I(APP),"cN",A9J(ARC),"t",A9F(AVW),"b6",A9G(AVB)],AIV,"UCICharSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(AXk),"t",A9F(A2M)],AFy,"CICharSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(ANs),"t",A9F(AQ1)],Ga,"DecomposedCharSet",2,B$,[],0,0,[0,0,0],0,["V",A9G(A53),"c",A9I(ATu),"t",A9F(A2D),"b6",A9G(ARI),"M",A9G(A3A)],Wy,"UCIDecomposedCharSet",2,Ga,[],0,0,[0,0,0],0,0,ACx,
"CIDecomposedCharSet",2,Ga,[],0,0,[0,0,0],0,0,W$,"PossessiveGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9I(AZe)],Zx,"PosPlusGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9I(A18)],GZ,"AltGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9I(A4u),"V",A9G(A5t)],Rd,"PosAltGroupQuantifierSet",2,GZ,[],0,0,[0,0,0],0,["c",A9I(ARy),"V",A9G(A2p)],GE,"CompositeGroupQuantifierSet",2,C7,[],0,0,[0,0,0],0,["c",A9I(A6L),"t",A9F(AV8)],PL,"PosCompositeGroupQuantifierSet",2,GE,[],0,0,[0,0,0],0,["c",A9I(AQ6)],SF,"ReluctantGroupQuantifierSet",
2,C7,[],0,0,[0,0,0],0,["c",A9I(AWB)],AAb,"RelAltGroupQuantifierSet",2,GZ,[],0,0,[0,0,0],0,["c",A9I(AOF)],UI,"RelCompositeGroupQuantifierSet",2,GE,[],0,0,[0,0,0],0,["c",A9I(AX0)],SG,"DotAllQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9I(A6A),"cA",A9I(AVi),"t",A9F(A3i)],YL,"DotQuantifierSet",2,Eu,[],0,0,[0,0,0],0,["c",A9I(ATL),"cA",A9I(ANi),"t",A9F(A30)],FM,0,B,[],1,0,0,0,0,AFv,"PossessiveQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9I(ANU)],VZ,"PossessiveAltQuantifierSet",2,Fj,[],0,0,[0,0,0],0,["c",A9I(ASR)],Y$,
"PossessiveCompositeQuantifierSet",2,F8,[],0,0,[0,0,0],0,["c",A9I(A39)],AAa,"ReluctantQuantifierSet",2,Dg,[],0,0,[0,0,0],0,["c",A9I(ATH)],ACI,"ReluctantAltQuantifierSet",2,Fj,[],0,0,[0,0,0],0,["c",A9I(AN2)],Sx,"ReluctantCompositeQuantifierSet",2,F8,[],0,0,[0,0,0],0,["c",A9I(A4m)],LG,"SOLSet",2,BV,[],4,0,[0,0,0],0,["c",A9I(A1D),"M",A9G(A07),"t",A9F(AST)]]);
$rt_metadata([AGv,"WordBoundary",2,BV,[],0,0,[0,0,0],0,["c",A9I(AYr),"M",A9G(AYB),"t",A9F(A6J)],YI,"PreviousMatch",2,BV,[],0,0,[0,0,0],0,["c",A9I(ARq),"M",A9G(AW3),"t",A9F(AYh)],Wu,"EOLSet",2,BV,[],4,0,[0,0,0],0,["c",A9I(A3m),"M",A9G(AY9),"t",A9F(A1R)],AEl,"EOISet",2,BV,[],0,0,[0,0,0],0,["c",A9I(A2K),"M",A9G(AXj),"t",A9F(AQC)],XS,"MultiLineSOLSet",2,BV,[],0,0,[0,0,0],0,["c",A9I(AY4),"M",A9G(AQu),"t",A9F(AYb)],AIH,"DotAllSet",2,B$,[],0,0,[0,0,0],0,["c",A9I(AWF),"t",A9F(APu),"V",A9G(AYF),"jh",A9F(A2v),"M",A9G(AYE)],AGf,
"DotSet",2,B$,[],4,0,[0,0,0],0,["c",A9I(A2E),"t",A9F(AZd),"V",A9G(A3Z),"jh",A9F(AM6),"M",A9G(AWT)],AMv,"UEOLSet",2,BV,[],4,0,[0,0,0],0,["c",A9I(ARL),"M",A9G(A0h),"t",A9F(AR6)],ALs,"UMultiLineEOLSet",2,BV,[],0,0,[0,0,0],0,["c",A9I(ATn),"M",A9G(A0b),"t",A9F(ANH)],AJu,"MultiLineEOLSet",2,BV,[],0,0,[0,0,0],0,["c",A9I(A02),"M",A9G(AO1),"t",A9F(AQv)],Iu,"CIBackReferenceSet",2,B$,[],0,0,[0,0,0],0,["c",A9I(ANX),"V",A9G(A3w),"t",A9F(AXS),"M",A9G(AUv)],AMB,"BackReferenceSet",2,Iu,[],0,0,[0,0,0],0,["c",A9I(AO6),"cA",A9I(AVS),
"cN",A9J(ANI),"b6",A9G(A13),"t",A9F(A5s)],AKL,"UCIBackReferenceSet",2,Iu,[],0,0,[0,0,0],0,["c",A9I(ASg),"t",A9F(AYC)],Qv,0,Hb,[J5],0,3,0,0,["qm",A9J(AQe),"pM",A9I(AYu),"kn",A9G(AYT),"qE",A9H(A4J)],AAT,"SequenceSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(APn),"cA",A9I(AYp),"cN",A9J(A0m),"t",A9F(ATC),"b6",A9G(AQT)],AFx,"UCISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(ASl),"t",A9F(AQ2)],PP,"CISequenceSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(A3$),"t",A9F(A41)],HA,0,B,[],4,0,0,AUG,0,Xh,"UCISupplCharSet",2,Cf,[],0,0,[0,0,0],
0,["bE",A9H(AUY),"t",A9F(A6I)],Oh,"LowSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["V",A9G(A2T),"c",A9I(AY$),"cA",A9I(AQR),"cN",A9J(AZy),"t",A9F(AVl),"b6",A9G(ANF),"M",A9G(AVs)],Oo,"HighSurrogateCharSet",2,B$,[],0,0,[0,0,0],0,["V",A9G(AYS),"c",A9I(ANn),"cA",A9I(A27),"cN",A9J(AUT),"t",A9F(A6b),"b6",A9G(APo),"M",A9G(A3e)],Eo,"SupplCharSet",2,Cf,[],0,0,[0,0,0],0,["bE",A9H(A3J),"cA",A9I(A2g),"cN",A9J(AOJ),"t",A9F(A5u),"b6",A9G(A3C)],ADx,0,FM,[],0,0,0,0,["i9",A9G(AOO),"Bm",A9H(AUq)],ADy,0,FM,[],0,0,0,0,["i9",A9G(A4n),
"Bm",A9H(AWp)],AH6,0,B,[],0,0,0,0,0,AFL,0,B,[],0,0,0,0,0,Of,0,Bg,[],0,0,0,0,["J",A9F(AKT)],NH,0,Bg,[],0,0,0,0,["J",A9F(ALo)],AH0,0,Bg,[],0,0,0,0,["J",A9F(A33)],AIk,0,Bg,[],0,0,0,0,["J",A9F(AVv)],AIm,0,Bg,[],0,0,0,0,["J",A9F(APU)],Ob,0,Bg,[],0,0,0,0,["J",A9F(AGi)],Mc,0,Ob,[],0,0,0,0,["J",A9F(AGN)],AJl,0,Bg,[],0,0,0,0,["J",A9F(A0F)],Pa,0,Mc,[],0,0,0,0,["J",A9F(AJs)],AK5,0,Pa,[],0,0,0,0,["J",A9F(ASF)],AHh,0,Bg,[],0,0,0,0,["J",A9F(AZn)],AGr,0,Bg,[],0,0,0,0,["J",A9F(ASA)],AKh,0,Bg,[],0,0,0,0,["J",A9F(AWt)],AMi,0,
Bg,[],0,0,0,0,["J",A9F(A2s)],AJo,0,Bg,[],0,0,0,0,["J",A9F(AXo)],AL1,0,Bg,[],0,0,0,0,["J",A9F(ARa)],AHS,0,Bg,[],0,0,0,0,["J",A9F(AUB)],AIz,0,Bg,[],0,0,0,0,["J",A9F(AZl)],AFX,0,Bg,[],0,0,0,0,["J",A9F(APz)],AJB,0,Bg,[],0,0,0,0,["J",A9F(A5N)],AL7,0,Bg,[],0,0,0,0,["J",A9F(AXl)],AIf,0,Bg,[],0,0,0,0,["J",A9F(ARN)],AKB,0,Bg,[],0,0,0,0,["J",A9F(APG)],AHj,0,Bg,[],0,0,0,0,["J",A9F(A0n)]]);
$rt_metadata([AI6,0,Bg,[],0,0,0,0,["J",A9F(A1y)],AMa,0,Bg,[],0,0,0,0,["J",A9F(AVL)],AGY,0,Bg,[],0,0,0,0,["J",A9F(AT7)],AGD,0,Bg,[],0,0,0,0,["J",A9F(AS7)],AJm,0,Bg,[],0,0,0,0,["J",A9F(A3W)],K3,0,Bg,[],0,0,0,0,["J",A9F(AHi)],AMr,0,K3,[],0,0,0,0,["J",A9F(ASY)],AK$,0,Of,[],0,0,0,0,["J",A9F(AYm)],AGB,0,NH,[],0,0,0,0,["J",A9F(AQK)],AKk,0,Bg,[],0,0,0,0,["J",A9F(AR2)],AKv,0,Bg,[],0,0,0,0,["J",A9F(AWd)],AKY,0,Bg,[],0,0,0,0,["J",A9F(AZ$)],AK6,0,Bg,[],0,0,0,0,["J",A9F(AM_)],AKn,0,B,[],4,0,0,0,0,AF$,0,B,[],4,3,0,0,0,XV,
"UnicodeHelper$Range",8,B,[],0,3,[AF$,0,"Range"],0,0,AH_,0,B,[],0,3,0,0,0,AKJ,0,B,[],4,3,0,0,0,MY,0,Bt,[],0,3,0,0,0,AD0,0,B,[W],0,3,0,0,["g",A9G(ANb)],ADZ,0,B,[W],0,3,0,0,["g",A9G(AVM)],AKb,0,B,[Dt],0,3,0,0,0,Th,0,B,[W],0,3,0,0,["g",A9G(A0g)],ADs,0,B,[Dt],0,0,0,0,["F",A9G(APY)],ACQ,0,B,[T],0,3,0,0,["e",A9F(A4R)],ACU,0,B,[W],0,3,0,0,["g",A9G(AZT)],ACW,0,B,[W],0,3,0,0,["g",A9G(A5x)],Qh,0,B,[IM],0,0,0,0,["oe",A9G(A3y),"pl",A9G(A0O),"o2",A9F(AUZ)],AER,0,B,[Ch],0,3,0,0,["bm",A9G(AVZ)],AEQ,0,B,[Ch],0,3,0,0,["bm",
A9G(ASJ)],ADF,0,B,[Ch],0,0,0,0,["bm",A9G(AUd)],QP,0,B,[T],0,3,0,0,["e",A9F(A2c)],V4,0,Ba,[],0,0,0,0,["o",A9G(AP0)],V1,0,Ba,[],0,0,0,0,["o",A9G(AXJ)],QI,0,Ba,[],0,0,0,0,["o",A9G(ART),"K",A9F(A0q)],YR,0,Ba,[],0,0,0,0,["o",A9G(A3M)],YP,0,Ba,[],0,0,0,0,["o",A9G(AUX)],YQ,0,Ba,[],0,0,0,0,["o",A9G(A1N)],YU,0,Ba,[],0,0,0,0,["o",A9G(AZG)],YW,0,Ba,[],0,0,0,0,["o",A9G(AM7)],YS,0,Ba,[],0,0,0,0,["o",A9G(AQF)],YT,0,Ba,[],0,0,0,0,["o",A9G(ASp)],YX,0,Ba,[],0,0,0,0,["o",A9G(AVV)],YY,0,Ba,[],0,0,0,0,["o",A9G(AZg)],QH,0,Ba,[],
0,0,0,0,["o",A9G(A6W)],Q2,0,Ba,[],0,0,0,0,["o",A9G(AQI)],QF,0,Ba,[],0,0,0,0,["o",A9G(AO_)],QG,0,Ba,[],0,0,0,0,["o",A9G(A0e)],QL,0,Ba,[],0,0,0,0,["o",A9G(ARs)],QE,0,Ba,[],0,0,0,0,["o",A9G(A4V)]]);
$rt_metadata([QJ,0,Ba,[],0,0,0,0,["o",A9G(AYw)],QK,0,Ba,[],0,0,0,0,["o",A9G(ATZ)],AAB,0,B,[BE],0,3,0,0,0,ALm,0,B,[],4,3,0,0,0,MD,0,B,[],3,3,0,0,0,ABp,0,B,[MD],4,3,0,0,0,R5,0,B,[T],0,3,0,0,["e",A9F(A3s)],R3,0,B,[T],0,3,0,0,["e",A9F(AQA)],R4,0,B,[T],0,3,0,0,["e",A9F(AV5)],R7,0,B,[T],0,3,0,0,["e",A9F(ANq)],Te,0,B,[T],0,3,0,0,["e",A9F(AVy)],Td,0,B,[T],0,3,0,0,["e",A9F(A1S)],Tc,0,B,[T],0,3,0,0,["e",A9F(A3l)],Sp,0,B,[T],0,3,0,0,["e",A9F(AW6)],RO,0,B,[],3,3,0,0,0,AKR,0,B,[T],0,3,0,0,["e",A9F(A6m)],ALa,0,B,[Gr],0,3,
0,0,0,TG,0,B,[Ch],0,3,0,0,["bm",A9G(A4x)],ACo,0,B,[Gr],0,3,0,0,0,ALJ,0,B,[Nx],0,3,0,0,0,ALK,0,B,[CL],0,3,0,0,0,ALI,0,B,[BE],0,3,0,0,0,ED,0,CD,[],12,3,0,AYQ,0,YB,0,B,[],3,3,0,0,0,Q7,0,B,[T],0,3,0,0,["e",A9F(ATV)],Q5,0,B,[T],0,3,0,0,["e",A9F(AZ_)],Q6,0,B,[T],0,3,0,0,["e",A9F(A5P)],U0,0,B,[T],0,3,0,0,["e",A9F(A3E)],U2,0,B,[T],0,3,0,0,["e",A9F(AS2)],Z9,0,B,[CL],0,3,0,0,["b8",A9F(A4M)],AAJ,0,B,[T],0,3,0,0,["e",A9F(ANY)],AAH,0,B,[T],0,3,0,0,["e",A9F(APm)],TI,0,B,[T],0,3,0,0,["e",A9F(AWm)],TJ,0,B,[T],0,3,0,0,["e",
A9F(ANW)],TK,0,B,[T],0,3,0,0,["e",A9F(APe)],TL,0,B,[T],0,3,0,0,["e",A9F(AV9)],T1,0,B,[T],0,3,0,0,["e",A9F(A1Y)],AHB,0,B,[CL],0,3,0,0,["b8",A9F(A6o)],ADP,0,B,[],0,3,0,0,0,O8,0,EC,[Ed,C0],1,3,0,0,["ft",A9G(AXh),"qc",A9G(A1h)],AHt,0,B,[YB],0,0,0,0,0,Uv,0,B,[If],0,3,0,0,0,O3,0,O8,[],0,0,0,0,["ft",A9G(AXh),"qc",A9G(A1h),"qf",A9G(A3T)],PS,0,EA,[Jq],0,0,0,0,["ft",A9G(AXh),"qc",A9G(A1h),"i2",A9G(AXg),"c0",A9F(ATo)],ACe,0,DH,[CG],0,3,0,0,0,PH,"BackReferencedSingleSet",2,H9,[],0,0,[0,0,0],0,["cA",A9I(AQi),"cN",A9J(A6K),
"gU",A9F(AOY)],RU,0,Bt,[],0,3,0,0,0,Ww,0,Bt,[],0,3,0,0,0,U4,0,Gw,[],0,3,0,0,0,RN,0,Gw,[],0,3,0,0,0]);
$rt_metadata([Wa,0,B,[Ch],0,3,0,0,["bm",A9G(AT0)],Wb,0,B,[Ch],0,3,0,0,["bm",A9G(AUj)],ADm,0,B,[],0,3,0,0,0,AF9,0,B,[],3,3,0,0,0,AEH,0,B,[T],0,3,0,0,["e",A9F(AOs)],AEG,0,B,[EY],0,3,0,0,["gf",A9G(AW_)],VF,0,B,[T],0,3,0,0,["e",A9F(AWU)],VG,0,B,[EY],0,3,0,0,["gf",A9G(AUW)],LL,0,F0,[],1,3,0,0,0,Sm,0,LL,[],0,3,0,0,0,YC,0,B,[T],0,3,0,0,0,ADq,0,B,[MD],0,0,0,0,0,R6,0,B,[W],0,3,0,0,["g",A9G(A24)],ADG,0,B,[T],0,3,0,0,["e",A9F(A0z)],AAv,0,B,[T],0,3,0,0,["e",A9F(ASu)],AAu,0,B,[T],0,3,0,0,["e",A9F(A2V)],AA2,0,B,[T],0,3,0,
0,["e",A9F(AUk)],Rf,0,B,[EY],0,3,0,0,["gf",A9G(AXA)],AEj,0,B,[W],0,3,0,0,["g",A9G(AQt)],G4,0,CD,[],12,0,0,Tq,0,Ul,0,B,[W],0,3,0,0,["g",A9G(A2h)],RD,0,B,[T],0,3,0,0,["e",A9F(A0y)],SE,0,B,[W],0,3,0,0,["g",A9G(AQk)],ACq,0,B,[],32,0,0,A8X,0,Su,0,B,[W],0,3,0,0,["g",A9G(AN$)],Pj,0,B,[T],0,3,0,0,["e",A9F(A0V)],V9,0,B,[Dt],0,3,0,0,0,AB1,0,Ba,[],0,0,0,0,["o",A9G(AV1)],Xp,0,Ba,[],0,0,0,0,["o",A9G(AYk)],SU,0,Ba,[],0,0,0,0,["o",A9G(AN1)],ST,0,Ba,[],0,0,0,0,["o",A9G(AZ8)],Wh,0,Ba,[],0,0,0,0,["o",A9G(ARh)],Y8,0,Ba,[],0,0,
0,0,["o",A9G(A5p)],Qs,0,Ba,[],0,0,0,0,["o",A9G(ATB)],AAp,0,Ba,[],0,0,0,0,["o",A9G(AUF)],Xl,0,Ba,[],0,0,0,0,["o",A9G(A6u)],Xn,0,Ba,[],0,0,0,0,["o",A9G(APq)],P9,0,Ba,[],0,0,0,0,["o",A9G(AV_)],Zl,0,Ba,[],0,0,0,0,["o",A9G(A1W)],Zq,0,Ba,[],0,0,0,0,["o",A9G(A3v)],ACr,0,Ba,[],0,0,0,0,["o",A9G(A5c)],ABq,0,Ba,[],0,0,0,0,["o",A9G(AWy)],PA,0,Ba,[],0,0,0,0,["o",A9G(APi)],MN,0,Ba,[],0,0,0,0,["o",A9G(ATD)],AA0,0,MN,[],0,0,0,0,["o",A9G(A4z)],AE0,0,B,[BW],3,3,0,0,0,ZO,0,B,[AE0],0,3,0,0,["JL",A9F(AR9)],AHA,0,B,[BW],3,3,0,0,
0,SV,0,B,[W],0,3,0,0,["g",A9G(A4S)],Q_,0,B,[J0],0,3,0,0,["qN",A9F(APN),"oW",A9F(ANl),"oo",A9G(AVa),"kZ",A9G(ATr)]]);
$rt_metadata([ACk,0,B,[W],0,3,0,0,0,ADc,0,B,[W],0,3,0,0,0,S3,0,B,[W],0,3,0,0,["g",A9G(AUQ)],RJ,0,B,[W],0,3,0,0,["g",A9G(AO7)],Dd,0,B,[],3,3,0,AIo,0,CC,0,CD,[],12,3,0,AHM,0,D$,0,B,[],3,3,0,AXY,0,ID,"DirectoryNode",25,C_,[],0,3,[0,0,0],0,["K",A9F(AWf)],ABa,0,B,[Lm],0,0,0,0,["sc",A9H(AOn),"AD",A9G(ARR),"ym",A9G(AW5),"vN",A9G(AXc)],K2,"FileNode",25,C_,[],0,3,[0,0,0],0,["K",A9F(APc)],AE1,0,B,[W],0,3,0,0,["g",A9G(A3N)],SK,0,B,[T],0,3,0,0,["e",A9F(ATt)],AB_,0,B,[T],0,3,0,0,["e",A9F(A1g)],TZ,0,B,[Dt],0,3,0,0,["F",A9G(AOj)],ABZ,
0,B,[IM],0,0,0,0,["oe",A9G(A46),"pl",A9G(AVT),"o2",A9F(A5r)],AJ0,0,B,[],0,0,0,0,0,Sw,0,B,[T],0,3,0,0,["e",A9F(A5R)],RZ,0,B,[T],0,3,0,0,["e",A9F(AOc)],AFt,0,B,[T],0,3,0,0,["e",A9F(A1f)],Ri,0,B,[W],0,3,0,0,["g",A9G(A0u)],Rj,0,B,[W],0,3,0,0,["g",A9G(A6v)]]);
function $rt_array(cls,data){this.Yy=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
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
"ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FolderTransferDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","EditorWindowDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n","measured = ","Consolas",
"#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","ns-resize","ew-resize","/Full file parsed in ",
"ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","BIG_ENDIAN","LITTLE_ENDIAN","nwse-resize","nesw-resize",", z = ",", w = ","(this Collection)","JsArrayView{ buffer.byteLength = "," }"," -"," bold"," italic","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232",
"#484A4A","#294436","#385570","#303C47","#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#43454A","#393B40","#DFE1E5","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","",
"codicon.pixel.size = ","w = ","Window 1","Window ","- to worker ","- to edt ","folder","file","objects[","] = ","Select left...","Select right...","Project root","FileTreeView model size = ","#616161","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ",
"fail: length differ","ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5",
"asyncWithFile","|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new folder diff window","new file diff window","new project view","new editor window","Open ...","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
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
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AF_(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var CX=Long_add;var J9=Long_sub;var Cl=Long_mul;var AH$=Long_div;var AXD=Long_rem;var A7g=Long_or;var Dj=Long_and;var BbM=Long_xor;var H8=Long_shl;var A8G=Long_shr;var Gt=Long_shru;var BbN=Long_compare;var I2=Long_eq;var BbO=Long_ne;var A7d=Long_lt;var APK=Long_le;var BbP=Long_gt;var A7c=Long_ge;var BbQ=Long_not;var A8R=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A8S);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ACz.prototype;c.f=c.bm;c=ACA.prototype;c.f=c.bm;c=ACy.prototype;c.f=c.bm;c=XJ.prototype;c.f=c.bm;c=AK9.prototype;c.get=c.MS;Object.defineProperty(c,"length",{get:c.Ts});c=AJL.prototype;c.createEntityReference=c.Py;c.getElementById=c.RU;c.createTextNode=c.RC;c.hasChildNodes=c.QC;c.querySelectorAll=c.Pf;c.removeChild=c.Te;c.cloneNode=c.Hv;c.createComment=c.Ur;c.insertBefore=c.PS;c.getElementsByTagNameNS=c.Tq;c.hasAttributes=c.Ka;c.normalize=c.Nq;c.hasChildNodesJS=c.Ni;c.getElementsByTagName
=c.MR;c.appendChild=c.Ol;c.createAttributeNS=c.Sc;c.dispatchEvent=c.M6;c.replaceChild=c.H0;c.createElementNS=c.I8;c.createCDATASection=c.L8;c.querySelector=c.J_;c.createElement=c.SK;c.isSupported=c.Ti;c.importNode=c.P2;c.removeEventListener=c.I4;c.createAttribute=c.M7;c.createDocumentFragment=c.GQ;c.createProcessingInstruction=c.Ps;c.addEventListener=c.Lp;Object.defineProperty(c,"nodeName",{get:c.Ok});Object.defineProperty(c,"documentElement",{get:c.JQ});Object.defineProperty(c,"childNodes",{get:c.LQ});Object.defineProperty(c,
"prefix",{get:c.P8,set:c.UC});Object.defineProperty(c,"implementation",{get:c.Mt});Object.defineProperty(c,"textContent",{get:c.Uw,set:c.Rz});Object.defineProperty(c,"parentNode",{get:c.RR});Object.defineProperty(c,"nextSibling",{get:c.JF});Object.defineProperty(c,"nodeType",{get:c.SZ});Object.defineProperty(c,"doctype",{get:c.QS});Object.defineProperty(c,"localName",{get:c.TK});Object.defineProperty(c,"nodeValue",{get:c.Jn,set:c.Uh});Object.defineProperty(c,"firstChild",{get:c.M1});Object.defineProperty(c,
"lastChild",{get:c.Lx});Object.defineProperty(c,"previousSibling",{get:c.N9});Object.defineProperty(c,"namespaceURI",{get:c.Ih});Object.defineProperty(c,"attributes",{get:c.Qd});Object.defineProperty(c,"ownerDocument",{get:c.In});c=P$.prototype;c.f=c.bm;c=AKe.prototype;c.removeEventListener=c.Ip;c.dispatchEvent=c.PX;c.addEventListener=c.KZ;c=Vi.prototype;c.onAnimationFrame=c.Kc;c=Vh.prototype;c.f=c.CP;c=Vf.prototype;c.handleEvent=c.cG;c=ABm.prototype;c.f=c.bm;c=AD8.prototype;c.handleEvent=c.cG;c=AD9.prototype;c.handleEvent
=c.cG;c=AD$.prototype;c.handleEvent=c.cG;c=AD_.prototype;c.handleEvent=c.cG;c=AEa.prototype;c.handleEvent=c.cG;c=AEb.prototype;c.handleEvent=c.cG;c=AEc.prototype;c.handleEvent=c.cG;c=AEd.prototype;c.handleEvent=c.cG;c=AEe.prototype;c.handleEvent=c.cG;c=AEf.prototype;c.handleEvent=c.cG;c=WR.prototype;c.handleEvent=c.cG;c=WS.prototype;c.handleEvent=c.cG;c=WT.prototype;c.handleEvent=c.cG;c=WU.prototype;c.handleEvent=c.cG;c=AC4.prototype;c.handleEvent=c.cG;c=AE_.prototype;c.f=c.bm;c=AFa.prototype;c.f=c.bm;c=XR.prototype;c.f
=c.bm;c=XQ.prototype;c.f=c.bm;c=XO.prototype;c.f=c.bm;c=XN.prototype;c.f=c.bm;c=P3.prototype;c.accept=c.Nb;c=VJ.prototype;c.f=c.bm;c=Pt.prototype;c.f=c.bm;c=Pv.prototype;c.f=c.bm;c=Pu.prototype;c.f=c.bm;c=Zd.prototype;c.f=c.CP;c=Zb.prototype;c.f=c.CP;c=ABe.prototype;c.f=c.bm;c=ADM.prototype;c.f=c.bm;c=Ps.prototype;c.f=c.bm;c=AE5.prototype;c.f=c.bm;c=AE4.prototype;c.f=c.bm;c=AEp.prototype;c.f=c.bm;c=Um.prototype;c.handleEvent=c.cG;c=AER.prototype;c.f=c.bm;c=AEQ.prototype;c.f=c.bm;c=ADF.prototype;c.f=c.bm;c=TG.prototype;c.f
=c.bm;c=Wa.prototype;c.f=c.bm;c=Wb.prototype;c.f=c.bm;c=ZO.prototype;c.onTimer=c.JL;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);