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
{$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.ed=f;}
function $rt_cls(cls){return UM(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return GI(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.co.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return AV$(t);}
function $rt_throwableCause(t){return A5v(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A$2());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return IQ();}
function $rt_setThread(t){return AVv(t);}
function $rt_createException(message){return A$3(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){$rt_throw(A$4());}
function $rt_throwCCE(){}
var A=Object.create(null);
var N=$rt_throw;var BQ=$rt_compare;var A$5=$rt_nullCheck;var F=$rt_cls;var P=$rt_createArray;var E4=$rt_isInstance;var A$6=$rt_nativeThread;var A$7=$rt_suspending;var A$8=$rt_resuming;var A$9=$rt_invalidPointer;var C=$rt_s;var Bl=$rt_eraseClinit;var Bb=$rt_imul;var Fe=$rt_wrapException;var A$$=$rt_checkBounds;var A$_=$rt_checkUpperBound;var A_a=$rt_checkLowerBound;var A_b=$rt_wrapFunction0;var A_c=$rt_wrapFunction1;var A_d=$rt_wrapFunction2;var A_e=$rt_wrapFunction3;var A_f=$rt_wrapFunction4;var G=$rt_classWithoutFields;var I
=$rt_createArrayFromData;var ALZ=$rt_createCharArrayFromData;var A85=$rt_createByteArrayFromData;var A9E=$rt_createShortArrayFromData;var DK=$rt_createIntArrayFromData;var A_g=$rt_createBooleanArrayFromData;var A_h=$rt_createFloatArrayFromData;var A_i=$rt_createDoubleArrayFromData;var ALe=$rt_createLongArrayFromData;var A$1=$rt_createBooleanArray;var Dh=$rt_createByteArray;var A_j=$rt_createShortArray;var B7=$rt_createCharArray;var BI=$rt_createIntArray;var A_k=$rt_createLongArray;var AOx=$rt_createFloatArray;var A_l
=$rt_createDoubleArray;var BQ=$rt_compare;var A_m=$rt_castToClass;var A_n=$rt_castToInterface;var A_o=Long_toNumber;var Bs=Long_fromInt;var A_p=Long_fromNumber;var D=Long_create;var F4=Long_ZERO;var A_q=Long_hi;var Hi=Long_lo;
function B(){this.$id$=0;}
function A_r(){var a=new B();AEP(a);return a;}
function AEP(a){}
function BF(a){return UM(a.constructor);}
function ATU(a,b){return a!==b?0:1;}
function AHi(a){var b,c;b=AGr(Nk(a));c=new J;L(c);H(H(c,C(0)),b);return K(c);}
function Nk(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function AS9(a){var b,c,d;if(!E4(a,Ei)&&a.constructor.$meta.item===null){b=new V4;X(b);N(b);}b=AOE(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function Tn(){var a=this;B.call(a);a.Dx=0;a.rr=null;}
function A$q(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;ANy();AKO();AIm();AI_();AKu();ALH();AGJ();AIv();AGN();AH0();AJU();AML();AM6();AKN();AM4();AIP();AJz();AIY();AMd();ALM();ALT();ANR();AIx();ALk();AH3();ANb();AK6();AME();AKm();AM$();AJQ();c=(AG3()).getContext("2d").measureText("");if(!(("fontBoundingBoxAscent" in c?1:0)&&("fontBoundingBoxDescent" in c?1:0)?1:0))Z4(C(1),C(2));else{d=new Tn;BG(d);e=new ADz;e.Cd=d;f=new Yy;c="teavm/worker.js";g=new $rt_globals.Array();h=0;while(h<6){i=new $rt_globals.Worker(c);j=new Qw;j.zV
=i;j.zW=g;j.zX=6;j.zY=e;j.zS=f;k=Bz(j,"f");i.onmessage=k;h=h+1|0;}l=I(MK,[Fu(C(3),C(4),300),Fu(C(5),C(6),300),Fu(C(7),C(4),400),Fu(C(8),C(6),400),Fu(C(9),C(4),600),Fu(C(10),C(6),600),Fu(C(11),C(4),700),Fu(C(12),C(6),700)]);m=P(MK,1);m.data[0]=AWC(C(13),FQ(C(14),C(15)),C(4),400);b=(MI(l,m)).data;g=new $rt_globals.Array();h=b.length;n=0;while(n<h){c=b[n];e=c.vu;f=c.uD;i=new J;L(i);Bq(H(H(i,C(16)),f),41);i=K(i);f=c.uA;o=c.tb;c=A1E($rt_ustr(f),o);c=(new $rt_globals.FontFace($rt_ustr(e),$rt_ustr(i),c)).load();g.push(c);n
=n+1|0;}e=$rt_globals.Promise.all(g);BG(d);c=new ADA;c.CT=d;g=new ADy;e.then(Bz(c,"f"),Bz(g,"f"));}}
function AJe(b){var c,d,e,f,g,h,i,j,k;c=new ACv;d=new ABW;e="canvasDiv";f=new UZ;f.CN=c;c.vc=f;f=new UX;f.tW=c;c.ps=f;g=new UY;g.rn=c;c.wP=new $rt_globals.ResizeObserver(Bz(g,"f"));f=new UW;f.w4=c;c.yz=f;c.mc=1;c.pU=e;h=new ACf;f=new Vh;AEP(f);h.nh=f;f=new Z2;f.FG=null;f.m$=A_s;h.tz=f;BG(f);g=new ACh;g.BQ=f;h.Dz=g;h.C2=b;i=b.length;j=0;while(j<i){f=b[j];k=new ACi;k.AS=h;k.AR=j;g=Bz(k,"f");f.onmessage=g;f=b[j];g=AMb();f.postMessage(g);j=j+1|0;}h.i1=0;h.ql=BI(i);c.Dg=h;k=AG3();b=0;k.tabIndex=b;h=k.style;h.setProperty("width",
"100%");h.setProperty("height","100%");h.setProperty("outline","none");c.ek=k;f=AU4(!!0,!!0,!!1,!!1);g=k.getContext("webgl2",f);if(g!==null){if(c.ek.parentNode!==null)Bc(DG(),C(17));else{if((e?1:0)?1:0)c.pU=e;b=EM();f=c.pU;k=b.getElementById(f);if(k!==null){b=c.ek;k.appendChild(b);Me(c);}}c.qR=A$b(c.ek,c.ps);b=new VW;f=c.ps;ANx(b,g,new AD3,1,2.25,0.625);b.FD=new AD2;b.Fc=f;c.ga=b;AVO(c.wP,c.ek,AY7());g=$rt_globals.window;f=c.yz;g.addEventListener("resize",Bz(f,"handleEvent"));}b=c.ga;if(b!==null){f=new PF;g
=c.qR.cH;f.T=b;f.n=g;f.bw=c;g=$rt_str($rt_globals.window.location.hash);if(Bk(C(18),g))b=A86(f);else if(Bk(C(19),g)){b=new V_;AHe(b,f);ANB(b,1);g=new U0;AEP(g);g.yC=b;Rd(b,g,C(20));Rd(b,A9X(b),C(21));}else b=(A6r(M(g)<=0?C(22):DD(g,1))).ba(f);c.hg=b;Me(c);}if(!(c.ga===null?0:1))AJY(d);AJg(c);}
var Yx=G(0);
var X6=G(0);
function AE5(){var a=this;B.call(a);a.nT=null;a.wR=null;a.dn=null;}
function UM(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new AE5;c.dn=b;d=c;b.classObject=d;}return c;}
function GV(a){if(a.nT===null)a.nT=AJx(a.dn);return a.nT;}
function H5(a){var b,c,d,e;b=a.wR;if(b===null){if(AN6(a.dn)===null?0:1){b=H5(FX(a));c=new J;L(c);H(H(c,b),C(23));b=K(c);}else{b=a.dn.$meta.enclosingClass;if((b===null?null:UM(b))!==null){b=$rt_str(a.dn.$meta.simpleName);if(b===null)b=C(22);}else{b=AJx(a.dn);d=Ta(b,36);if(d==(-1)){e=Ta(b,46);if(e!=(-1))b=DD(b,e+1|0);}else{b=DD(b,d+1|0);if(Q(b,0)>=48&&Q(b,0)<=57)b=C(22);}}}a.wR=b;}return b;}
function Jj(a){return a.dn.$meta.primitive?1:0;}
function FX(a){return UM(AN6(a.dn));}
var ALq=G();
function Bz(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Fy(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var ALc=G();
function AOE(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function ADo(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(ADo(d[e],c))return 1;e=e+1|0;}return 0;}
function AUy(b){var c='$$enumConstants$$';HA[c]=AOU;Ev[c]=AOw;Ix[c]=ATt;Cu[c]=AH$;Cy[c]=AMn;Ic[c]=AVV;Hb[c]=AKW;EK[c]=AYQ;CD[c]=ANw;AUy=function(cls){if(!cls.hasOwnProperty(c)){return null;}if(typeof cls[c]==="function"){cls[c]=cls[c]();}return cls[c];};return AUy(b);}
function AN6(b){return b.$meta.item;}
function AJx(b){return $rt_str(b.$meta.name);}
function Hq(){var a=this;B.call(a);a.jr=null;a.oj=null;a.lr=0;a.lM=0;}
function A_t(){var a=new Hq();X(a);return a;}
function A_u(a){var b=new Hq();Bm(b,a);return b;}
function X(a){a.lr=1;a.lM=1;}
function Bm(a,b){a.lr=1;a.lM=1;a.jr=b;}
function A1r(a){return a;}
function AV$(a){return a.jr;}
function A5v(a){var b;b=a.oj;if(b===a)b=null;return b;}
var EN=G(Hq);
function A_v(){var a=new EN();AI6(a);return a;}
function AI6(a){X(a);}
var Bu=G(EN);
function A$3(a){var b=new Bu();A62(b,a);return b;}
function A62(a,b){Bm(a,b);}
var ABN=G(Bu);
var C4=G(0);
var CL=G(0);
var KT=G(0);
function BC(){var a=this;B.call(a);a.co=null;a.kP=0;}
var A_w=null;var A_x=null;var A_y=null;function Fx(){Fx=Bl(BC);AW7();}
function AR0(){var a=new BC();AGL(a);return a;}
function GI(a){var b=new BC();J0(b,a);return b;}
function ET(a,b,c){var d=new BC();Pw(d,a,b,c);return d;}
function AGL(a){Fx();a.co=A_w;}
function J0(a,b){Fx();Pw(a,b,0,b.data.length);}
function Pw(a,b,c,d){var e;Fx();e=B7(d);a.co=e;Dc(b,c,e,0,d);}
function Na(b){var c;Fx();c=AR0();c.co=b;return c;}
function Q(a,b){var c,d;if(b>=0){c=a.co.data;if(b<c.length)return c[b];}d=new IK;X(d);N(d);}
function M(a){return a.co.data.length;}
function GT(a){return a.co.data.length?0:1;}
function R5(a,b,c,d,e){var f,g;if(b>=0&&b<=c&&c<=M(a)&&e>=0){f=d.data;c=c-b|0;if((e+c|0)<=f.length){Dc(a.co,b,d,e,c);return;}}g=new BL;X(g);N(g);}
function Pg(a,b){var c,d,e;if(a===b)return 0;c=Bf(M(a),M(b));d=0;while(true){if(d>=c)return M(a)-M(b)|0;e=Q(a,d)-Q(b,d)|0;if(e)break;d=d+1|0;}return e;}
function ADX(a,b,c){var d,e,f;if((c+M(b)|0)>M(a))return 0;d=0;while(d<M(b)){e=Q(b,d);f=c+1|0;if(e!=Q(a,c))return 0;d=d+1|0;c=f;}return 1;}
function Of(a,b){if(a===b)return 1;return ADX(a,b,0);}
function DM(a,b){var c,d,e,f;if(a===b)return 1;if(M(b)>M(a))return 0;c=0;d=M(a)-M(b)|0;while(d<M(a)){e=Q(a,d);f=c+1|0;if(e!=Q(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Kw(a,b,c){var d,e,f,g,h;d=Be(0,c);if(b<65536){e=b&65535;while(true){f=a.co.data;if(d>=f.length)return (-1);if(f[d]==e)break;d=d+1|0;}return d;}g=Kq(b);h=JN(b);while(true){f=a.co.data;if(d>=(f.length-1|0))return (-1);if(f[d]==g&&f[d+1|0]==h)break;d=d+1|0;}return d;}
function HW(a,b,c){var d,e,f,g,h;d=Bf(c,M(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.co.data[d]==e)break;d=d+(-1)|0;}return d;}f=Kq(b);g=JN(b);while(true){if(d<1)return (-1);h=a.co.data;if(h[d]==g){b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Ta(a,b){return HW(a,b,M(a)-1|0);}
function AAp(a,b,c){var d,e,f;d=Be(0,c);e=M(a)-M(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=M(b))break a;if(Q(a,d+f|0)!=Q(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function A4h(a,b){return AAp(a,b,0);}
function R1(a,b,c){var d,e;d=Bf(c,M(a)-M(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=M(b))break a;if(Q(a,d+e|0)!=Q(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AH6(a,b){return R1(a,b,M(a));}
function Cz(a,b,c){var d,e;d=BQ(b,c);if(d>0){e=new BL;X(e);N(e);}if(!d){Fx();return A_x;}if(!b&&c==M(a))return a;return ET(a.co,b,c-b|0);}
function DD(a,b){return Cz(a,b,M(a));}
function R_(a,b,c){return Cz(a,b,c);}
function FQ(a,b){var c,d,e,f,g,h;if(GT(b))return a;if(GT(a))return b;c=B7(M(a)+M(b)|0);d=c.data;e=0;f=0;while(f<M(a)){g=e+1|0;d[e]=Q(a,f);f=f+1|0;e=g;}g=0;while(g<M(b)){h=e+1|0;d[e]=Q(b,g);g=g+1|0;e=h;}return Na(c);}
function AEp(a,b,c){var d,e,f,g;d=new J;L(d);e=M(a)-M(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=M(b)){H(d,c);f=f+(M(b)-1|0)|0;break a;}if(Q(a,f+g|0)!=Q(b,g))break;g=g+1|0;}Bq(d,Q(a,f));}f=f+1|0;}H(d,DD(a,f));return K(d);}
function ABZ(a){var b,c;b=0;c=M(a)-1|0;a:{while(b<=c){if(Q(a,b)>32)break a;b=b+1|0;}}while(b<=c&&Q(a,c)<=32){c=c+(-1)|0;}return Cz(a,b,c+1|0);}
function APS(a){return a;}
function GU(a){var b,c,d,e,f;b=a.co.data;c=B7(b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=b[e];e=e+1|0;}return c;}
function BT(b){Fx();return b===null?C(24):b.K();}
function Ol(b){var c,d;Fx();c=new BC;d=B7(1);d.data[0]=b;J0(c,d);return c;}
function Dr(b){var c;Fx();c=new J;L(c);return K(V(c,b));}
function Bk(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(Q(a,d)!=Q(c,d))return 0;d=d+1|0;}return 1;}
function Kx(a){var b,c,d,e;a:{if(!a.kP){b=a.co.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.kP=(31*a.kP|0)+e|0;d=d+1|0;}}}return a.kP;}
function MV(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(b===null){b=new Gq;Bm(b,C(25));N(b);}A_z=1;d=new ABu;d.nI=P(C8,10);d.ir=(-1);d.ge=(-1);d.bG=(-1);e=new Hx;e.fP=1;e.bX=b;e.bk=B7(M(b)+2|0);Dc(GU(b),0,e.bk,0,M(b));f=e.bk.data;g=f.length;f[g-1|0]=0;f[g-2|0]=0;e.Bs=g;e.hL=0;Gd(e);Gd(e);d.l=e;d.eo=0;d.ou=Xx(d,(-1),0,null);if(!DN(d.l)){b=new KP;h=d.l;Nu(b,C(22),h.bX,h.dP);N(b);}if(d.r8)d.ou.ff();b=BO();h=new ACm;h.k8=(-1);h.p_=(-1);h.Ew=d;h.CV=d.ou;h.ms=a;h.k8=0;g=M(a);h.p_=g;e=new AEq;i=h.k8;j=d.ir;k=d.ge+1|0;l=d.bG
+1|0;e.jx=(-1);m=j+1|0;e.sL=m;e.ey=BI(m*2|0);f=BI(l);e.lG=f;J5(f,(-1));if(k>0)e.qv=BI(k);J5(e.ey,(-1));AGd(e,a,i,g);h.c2=e;e.g_=1;n=0;m=0;if(!M(a)){f=P(BC,1);f.data[0]=C(22);}else{while(true){l=M(h.ms);if(!AGY(h))l=h.p_;e=h.c2;if(e.fd>=0&&AHW(e)==1){e=h.c2;e.fd=Nj(e);if(Nj(h.c2)==AI$(h.c2)){e=h.c2;e.fd=e.fd+1|0;}g=h.c2.fd;g=g<=l&&PO(h,g)?1:0;}else g=PO(h,h.k8);if(!g)break;g=n+1|0;if(g>=c&&c>0)break;BA(b,R_(a,m,AJ_(h)));m=ALJ(h);n=g;}a:{BA(b,R_(a,m,M(a)));g=n+1|0;if(!c)while(true){g=g+(-1)|0;if(g<0)break;if(M(BK(b,
g)))break a;E3(b,g);}}if(g<0)g=0;f=GO(b,P(BC,g));}return f;}
function ARt(a,b){return Pg(a,b);}
function AW7(){A_w=B7(0);A_x=AR0();A_y=new Ul;}
var FT=G(Hq);
var IP=G(FT);
var ALV=G(IP);
var DL=G();
function H9(){DL.call(this);this.bs=0;}
var A_A=null;var A_B=null;function A6n(a){var b=new H9();AHB(b,a);return b;}
function AHB(a,b){a.bs=b;}
function AGr(b){var c,d,e,f,g,h;if(!b)c=C(26);else{d=(((32-Y7(b)|0)+4|0)-1|0)/4|0;e=B7(d);f=e.data;g=(d-1|0)*4|0;d=0;while(g>=0){h=d+1|0;f[d]=IO((b>>>g|0)&15,16);g=g-4|0;d=h;}c=GI(e);}return c;}
function Iu(b){return (YQ(A$T(20),b,10)).K();}
function Lp(b,c){var d,e,f,g,h,i,j,k,l;if(b===null){b=new DA;Bm(b,C(27));N(b);}d=M(b);if(0==d){b=new DA;Bm(b,C(28));N(b);}if(c>=2&&c<=36){a:{e=0;switch(Q(b,0)){case 43:break;case 45:e=1;f=1;break a;default:f=0;break a;}f=1;}g=0;if(f==d){b=new DA;X(b);N(b);}b:{c:{while(f<d){h=f+1|0;i=ZZ(Q(b,f));if(i<0){j=new DA;k=Cz(b,0,d);b=new J;L(b);H(H(b,C(29)),k);Bm(j,K(b));N(j);}if(i>=c){j=new DA;l=Cz(b,0,d);b=new J;L(b);H(H(V(H(b,C(30)),c),C(31)),l);Bm(j,K(b));N(j);}g=Bb(c,g)+i|0;if(g<0){if(h!=d)break b;if(g!=(-2147483648))break b;if
(!e)break b;g=(-2147483648);break c;}f=h;}if(e)g= -g|0;}return g;}j=new DA;k=Cz(b,0,d);b=new J;L(b);H(H(b,C(32)),k);Bm(j,K(b));N(j);}b=new DA;j=new J;L(j);V(H(j,C(33)),c);Bm(b,K(j));N(b);}
function C6(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A_B===null){A_B=P(H9,256);c=0;while(true){d=A_B.data;if(c>=d.length)break a;d[c]=A6n(c-128|0);c=c+1|0;}}}return A_B.data[b+128|0];}return A6n(b);}
function AXs(a){return Iu(a.bs);}
function A7I(a,b){if(a===b)return 1;return b instanceof H9&&b.bs==a.bs?1:0;}
function Y7(b){var c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;}
function Jz(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function A2T(a,b){b=b;return BQ(a.bs,b.bs);}
function ANy(){A_A=F($rt_intcls());}
function Hk(){var a=this;B.call(a);a.D=null;a.I=0;}
function A_C(){var a=new Hk();L(a);return a;}
function A$T(a){var b=new Hk();Ge(b,a);return b;}
function L(a){Ge(a,16);}
function Ge(a,b){a.D=B7(b);}
function YQ(a,b,c){return AL8(a,a.I,b,c);}
function AL8(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if($rt_ucmp(c,d)<0){if(e)Cq(a,b,b+1|0);else{Cq(a,b,b+2|0);f=a.D.data;g=b+1|0;f[b]=45;b=g;}a.D.data[b]=IO(c,d);}else{h=1;i=1;j=$rt_udiv((-1),d);b:{while(true){k=Bb(h,d);if($rt_ucmp(k,c)>0){k=h;break b;}i=i+1|0;if($rt_ucmp(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Cq(a,b,b+i|0);if(e)e=b;else{f=a.D.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.D.data;b=e+1|0;f[e]=IO($rt_udiv(c,k),d);c=$rt_umod(c,k);k=$rt_udiv(k,d);e=b;}}}return a;}
function AMN(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BQ(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A_D;AMF(c,f);d=f.n3;g=f.nP;h=f.sf;i=1;j=1;if(h)j=2;k=9;l=AWD(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Be(k,i+1|0);g=0;}else{i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Cq(a,b,b+(j+(k+m|0)|0)|0);if(!h)h=b;else{e=a.D.data;h=b+1|0;e[b]=45;}o=100000000;if(n){e=a.D.data;b=h+1|0;e[h]=48;h=b+1|0;e[b]=46;while(true){b=m+(-1)
|0;if(m<=0)break;p=h+1|0;e[h]=48;m=b;h=p;}}q=0;while(q<k){if(o<=0)p=0;else{p=d/o|0;d=d%o|0;}e=a.D.data;b=h+1|0;e[h]=(48+p|0)&65535;i=i+(-1)|0;if(i)h=b;else{h=b+1|0;e[b]=46;}o=o/10|0;q=q+1|0;}if(g){e=a.D.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)p=d;else{p=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[p]=(48+(g%10|0)|0)&65535;}return a;}
function ALz(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=BQ(c,0.0);if(!d){if(1.0/c===Infinity){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Cq(a,b,b+4|0);e=a.D.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){Cq(a,b,b+3|0);e=a.D.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){Cq(a,b,b+8|0);d=b;}else{Cq(a,b,b+9|0);e=a.D.data;d=b+1|0;e[b]=45;}e=a.D.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b
=d+1|0;e[d]=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A_E;AIg(c,f);g=f.ov;h=f.ny;i=f.r4;j=1;k=1;if(i)k=2;l=18;m=AVh(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=Be(l,j+1|0);h=0;}else{j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Cq(a,b,b+(k+(l+n|0)|0)|0);if(!i)k=b;else{e=a.D.data;k=b+1|0;e[b]=45;}p=D(1569325056, 23283064);if(o){e=a.D.data;b=k+1|
0;e[k]=48;k=b+1|0;e[b]=46;while(true){b=n+(-1)|0;if(n<=0)break;d=k+1|0;e[k]=48;n=b;k=d;}}q=0;while(q<l){if(AQW(p,F4))d=0;else{d=Hi(AJf(g,p));g=AY3(g,p);}e=a.D.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}p=AJf(p,Bs(10));q=q+1|0;}if(h){e=a.D.data;i=k+1|0;e[k]=69;if(h>=0)d=i;else{h= -h|0;d=i+1|0;e[i]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;i=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)i=d;else{i=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[i]=(48+(h%10|0)|0)&65535;}return a;}
function AWD(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function AVh(b){var c,d,e,f,g;c=Bs(1);d=0;e=16;f=A_F.data;g=f.length-1|0;while(g>=0){if(Jc(AY3(b,Cm(c,f[g])),F4)){d=d|e;c=Cm(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;}
function Bq(a,b){return a.q8(a.I,b);}
function AF7(a,b,c){Cq(a,b,b+1|0);a.D.data[b]=c;return a;}
function NF(a,b){var c,d;c=a.D.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.D=Lm(a.D,d);}
function K(a){return ET(a.D,0,a.I);}
function AFP(a,b,c,d){return a.qQ(a.I,b,c,d);}
function Yr(a,b,c,d,e){var f,g,h,i;Cq(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.D.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Kz(a,b){return a.qe(b,0,b.data.length);}
function Cq(a,b,c){var d,e,f,g;d=a.I;e=d-b|0;a.kG((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.D.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.I=a.I+(c-b|0)|0;}
var Kh=G(0);
var J=G(Hk);
function MO(){var a=new J();A7w(a);return a;}
function A76(a){var b=new J();AY6(b,a);return b;}
function A7w(a){L(a);}
function AY6(a,b){var c,d;a.D=B7(M(b));c=0;while(true){d=a.D.data;if(c>=d.length)break;d[c]=Q(b,c);c=c+1|0;}a.I=M(b);}
function H(a,b){Nd(a,a.I,b===null?C(24):b.K());return a;}
function BN(a,b){Nd(a,a.I,b);return a;}
function V(a,b){YQ(a,b,10);return a;}
function Id(a,b){var c,d,e,f,g,h,i,j;c=a.I;d=1;if(A8L(b,F4)){d=0;b=A$p(b);}a:{if(DQ(b,Bs(10))<0){if(d)Cq(a,c,c+1|0);else{Cq(a,c,c+2|0);e=a.D.data;f=c+1|0;e[c]=45;c=f;}a.D.data[c]=IO(Hi(b),10);}else{g=1;h=Bs(1);i=Dl(Bs(-1),Bs(10));b:{while(true){j=Cm(h,Bs(10));if(DQ(j,b)>0){j=h;break b;}g=g+1|0;if(DQ(j,i)>0)break;h=j;}}if(!d)g=g+1|0;Cq(a,c,c+g|0);if(d)f=c;else{e=a.D.data;f=c+1|0;e[c]=45;}while(true){if(Jc(j,F4))break a;e=a.D.data;c=f+1|0;e[f]=IO(Hi((Dl(b,j))),10);b=AKR(b,j);j=Dl(j,Bs(10));f=c;}}}return a;}
function Di(a,b){AMN(a,a.I,b);return a;}
function AGG(a,b){Bq(a,b);return a;}
function LK(a,b){var c;c=M(b);ADS(a,a.I,b,0,c);return a;}
function J4(a,b){Nd(a,a.I,!b?C(34):C(35));return a;}
function AJZ(a,b,c){var d,e,f,g,h,i;d=BQ(b,c);if(d<=0){e=a.I;if(b<=e){if(d){f=e-c|0;a.I=e-(c-b|0)|0;g=0;while(g<f){h=a.D.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}}return a;}}i=new IK;X(i);N(i);}
function WC(a,b){var c,d,e,f;if(b>=0){c=a.I;if(b<c){c=c-1|0;a.I=c;while(b<c){d=a.D.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new IK;X(f);N(f);}
function A2P(a,b,c,d,e){Yr(a,b,c,d,e);return a;}
function AQJ(a,b,c,d){AFP(a,b,c,d);return a;}
function ADS(a,b,c,d,e){var f,g;if(d<=e&&e<=M(c)&&d>=0){Cq(a,b,(b+e|0)-d|0);while(d<e){f=a.D.data;g=b+1|0;f[b]=Q(c,d);d=d+1|0;b=g;}return a;}c=new BL;X(c);N(c);}
function AK7(a){return a.I;}
function Es(a){return K(a);}
function AS8(a,b){NF(a,b);}
function A3a(a,b,c){AF7(a,b,c);return a;}
function Nd(a,b,c){var d,e,f;if(b>=0&&b<=a.I){a:{if(c===null)c=C(24);else if(GT(c))break a;NF(a,a.I+M(c)|0);d=a.I-1|0;while(d>=b){a.D.data[d+M(c)|0]=a.D.data[d];d=d+(-1)|0;}a.I=a.I+M(c)|0;d=0;while(d<M(c)){e=a.D.data;f=b+1|0;e[b]=Q(c,d);d=d+1|0;b=f;}}return a;}c=new IK;X(c);N(c);}
var Fn=G(IP);
var AM0=G(Fn);
function A_G(a){var b=new AM0();APW(b,a);return b;}
function APW(a,b){Bm(a,b);}
var ALR=G(Fn);
function A_H(a){var b=new ALR();AP8(b,a);return b;}
function AP8(a,b){Bm(a,b);}
var ADm=G(0);
var Dv=G(0);
function BR(b,c){if(b!==null)b.bW();return c;}
var ZX=G(0);
function KL(){var a=this;B.call(a);a.jW=0;a.oU=0;a.oh=0;}
var A_I=0;function EQ(a){A_I=A_I-1|0;}
function HY(a,b,c){Ld(a,ALw(b,c,400,0));}
function LS(a,b){return L4(a,b,0.875);}
function L4(a,b,c){return EC(a,b)+c|0;}
function ABM(){var a=this;KL.call(a);a.jM=null;a.dx=null;a.yp=null;}
function E$(a){var b,c,d;b=a.dx;c=a.oU;d=a.oh;b.clearRect(0.0,0.0,c,d);}
function AB7(a,b){var c,d;a:{switch(b){case 0:break;case 1:c=a.dx;d="center";c.textAlign=d;break a;case 2:c=a.dx;d="right";c.textAlign=d;break a;default:break a;}d=a.dx;c="left";d.textAlign=c;}}
function Cr(a,b){Ld(a,b.rU);}
function Ld(a,b){var c;if(a.yp!==b){c=a.dx;a.yp=b;c.font=b;}}
function ALw(b,c,d,e){var f;a:{switch(e){case 1:break;case 2:f='italic ';break a;default:f='';break a;}f='oblique ';}return f+d+' '+c+'px '+$rt_ustr(b);}
function B1(a,b,c,d){var e,f,g;e=a.dx;f=c;g=d;e.fillText($rt_ustr(b),f,g);}
function EC(a,b){var c;c=$rt_ustr(b);return a.dx.measureText(c).width;}
function KD(a,b,c,d){var e,f;e=a.dx;f=$rt_ustr(GI(ALZ([35,In(b/16|0),In(b%16|0),In(c/16|0),In(c%16|0),In(d/16|0),In(d%16|0)])));e.fillStyle=f;}
function AZR(){return {alpha:false};}
var AKP=G();
var ANG=G();
function BV(b,c){if(b===c)return 1;return b!==null?b.bQ(c):c!==null?0:1;}
function BG(b){if(b!==null)return b;b=new Gq;Bm(b,C(22));N(b);}
var BY=G(0);
function GP(b){return b;}
var Ci=G(0);
function ADz(){B.call(this);this.Cd=null;}
function A7Y(a,b){var c;c=a.Cd;c.rr=b;if(c.Dx)AJe(b);}
var AIW=G();
function Jg(b,c){return b.data[c];}
var AMs=G();
var AGZ=G(0);
function Fu(b,c,d){return AWC(C(36),FQ(C(14),b),c,d);}
var ANr=G(0);
var AJq=G(0);
function MI(b,c){var d,e,f,g;d=b.data;e=c.data;f=d.length;g=e.length;d=CV(b,f+g|0);Dc(c,0,d,f,g);return d;}
function L9(b,c,d){Dc(b,c,d,0,d.data.length);return d;}
function ABD(b,c,d){var e;if(c>0)Dc(b,0,d,0,c);e=d.data.length;if(c<e)Dc(b,c+1|0,d,c,e-c|0);return d;}
function AH2(b,c,d,e){var f;if(c>0)Dc(b,0,e,0,c);if(d>0){f=b.data.length;if(d<=f)Dc(b,d,e,c,f-d|0);}return e;}
function CM(b){var c;c=new PM;c.mr=b;return c;}
function AHx(b,c){if(b.data.length!=c)b=CV(b,c);return b;}
function D2(b,c,d){var e;e=c.data.length;if(e==d)c=CV(c,e*2|0);c.data[d]=b;return c;}
function AEj(b,c,d){var e;e=c.data.length;if(e==d)c=Pc(c,e*2|0);c.data[d]=b;return c;}
function Pb(b){return Lm(b,b.data.length);}
function MK(){var a=this;B.call(a);a.vu=null;a.uD=null;a.uA=null;a.tb=0;}
function AWC(a,b,c,d){var e=new MK();AV2(e,a,b,c,d);return e;}
function AV2(a,b,c,d,e){a.vu=b;a.uD=c;a.uA=d;a.tb=e;}
var AHs=G();
function A1E(b,c){return {style:b,weight:c};}
function ADA(){B.call(this);this.CT=null;}
function AOh(a,b){var c,d,e;c=a.CT;d=0;while(d<b.length){e=b[d];(EM()).fonts.add(e);d=d+1|0;}c.Dx=1;b=c.rr;if(b!==null)AJe(b);}
var ADy=G();
function A6I(a,b){$rt_globals.console.info("font load error "+b);}
var Ml=G();
var A_J=null;var A_K=null;function Bg(){if(A_J===null)A_J=AUj(A_L,0);return A_J;}
function DG(){if(A_K===null)A_K=AUj(A_M,0);return A_K;}
function A89(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OM(b)&&(e+f|0)<=OM(d)){a:{b:{if(b!==d){g=FX(BF(b));h=FX(BF(d));if(g!==null&&h!==null){if(g===h)break b;if(!Jj(g)&&!Jj(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;n=l[k];o=h.dn;if(!(n!==null&&!(typeof n.constructor.$meta==='undefined'?1:0)&&ADo(n.constructor,o)?1:0)){Ok(b,c,d,e,j);b=new JO;X(b);N(b);}j=j+1|0;k=m;}Ok(b,c,d,e,f);return;}if(!Jj(g))break a;if(Jj(h))break b;else break a;}b=new JO;X(b);N(b);}}Ok(b,c,
d,e,f);return;}b=new JO;X(b);N(b);}b=new BL;X(b);N(b);}d=new Gq;Bm(d,C(37));N(d);}
function Dc(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=OM(b)&&(e+f|0)<=OM(d)){Ok(b,c,d,e,f);return;}b=new BL;X(b);N(b);}
function Ok(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function EO(){return Long_fromNumber(new Date().getTime());}
function AJb(){return A_p($rt_globals.performance.now()*1000000.0);}
var AJp=G();
var ALK=G();
function Z4(b,c){var d,e,f;d=(EM()).createElement("pre");e=$rt_ustr(c);d.innerHTML=e;f=d.style;f.setProperty("padding-left","10px");f.setProperty("padding-right","10px");(EM()).getElementById($rt_ustr(b)).appendChild(d);}
function AG3(){return (EM()).createElement("canvas");}
function AJ4(b){b=$rt_ustr($rt_str(b.message));$rt_globals.console.info("on error "+b);}
function AU4(b,c,d,e){return {antialias:b,stencil:c,premultipliedAlpha:d,alpha:e};}
var AOe=G();
var Yy=G();
function A4a(a,b){var c;c=new Bu;Bm(c,$rt_str(b.message));N(c);}
var AJC=G();
function F2(b){return $rt_str(b);}
var AK3=G();
function Lm(b,c){var d,e,f,g;b=b.data;d=B7(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Pc(b,c){var d,e,f,g;b=b.data;d=Dh(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function JS(b,c){var d,e,f,g;b=b.data;d=BI(c);e=d.data;f=Bf(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function CV(b,c){var d,e,f,g;d=b.data;e=Vl(FX(BF(b)),c);f=Bf(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function AMa(b,c,d){var e,f,g,h;e=BI(d-c|0);f=e.data;g=c;while(g<d){h=b.data;f[g-c|0]=h[g];g=g+1|0;}return e;}
function AJL(b,c,d,e){var f,g,h,i,j,k,l,m;f=Vl(FX(e),d-c|0);g=c;while(g<d){h=b.data;i=g-c|0;j=FX(e);k=h[g];if(k!==null&&!ADo((BF(k)).dn,j.dn)){e=new ABN;k=GV(BF(k));l=GV(j);m=new J;L(m);H(H(H(m,k),C(38)),l);Bm(e,K(m));N(e);}f.data[i]=k;g=g+1|0;}return f;}
function AI3(b){var c,d,e;if(b===null)return C(24);c=new J;L(c);BN(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,C(40));V(c,e[d]);d=d+1|0;}BN(c,C(41));return K(c);}
function AWf(b){var c,d,e;if(b===null)return C(24);c=new J;L(c);BN(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,C(40));Di(c,e[d]);d=d+1|0;}BN(c,C(41));return K(c);}
function AYo(b){var c,d,e,f;if(b===null)return C(24);c=new J;L(c);BN(c,C(39));d=0;while(true){e=b.data;if(d>=e.length)break;if(d>0)BN(c,C(40));f=e[d];ALz(c,c.I,f);d=d+1|0;}BN(c,C(41));return K(c);}
function J5(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BU;X(f);N(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AHm(b,c,d,e){var f,g;if(c>d){e=new BU;X(e);N(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function LF(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;if(c===null)c=A_s;e=P(B,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=Bf(j,h+f|0);l=h+(2*f|0)|0;m=Bf(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.rd(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f
=f*2|0;i=g;g=e;e=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function AMO(b,c){return ADE(b,0,b.data.length,c);}
function ADE(b,c,d,e){var f,g,h,i,j;f=BQ(c,d);if(f>0){g=new BU;X(g);N(g);}if(!f)return (-1);f=d-1|0;while(true){h=b.data;i=(c+f|0)/2|0;j=h[i];if(j==e)break;if(e>=j){c=i+1|0;if(c>f)return ( -i|0)-2|0;}else{f=i-1|0;if(f<c)return ( -i|0)-1|0;}}return i;}
function PP(b){var c,d,e;if(b===null)return 0;c=1;d=0;while(true){e=b.data;if(d>=e.length)break;c=(31*c|0)+e[d]|0;d=d+1|0;}return c;}
var AEJ=G(0);
var AMi=G();
function A12(a,b){return a.Qe(b);}
function ATP(a){return a.TX();}
var AIe=G();
var GG=G(0);
var Ul=G();
var BL=G(Bu);
var AMJ=G();
function OM(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(A_N());}return b.data.length;}
function Vl(b,c){if(b===null){b=new Gq;X(b);N(b);}if(b===F($rt_voidcls())){b=new BU;X(b);N(b);}if(c>=0)return AXz(b.dn,c);b=new AGy;X(b);N(b);}
function AXz(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
var Gq=G(Bu);
var JO=G(Bu);
function Ds(){B.call(this);this.nN=0;}
var A_O=null;var A_P=null;var A_Q=null;var A_R=null;var A_S=null;var A_T=null;var A_U=null;var A_V=null;var A_W=null;var A_X=null;function AX4(a){var b=new Ds();AHS(b,a);return b;}
function AHS(a,b){a.nN=b;}
function Qx(b){var c,d;c=A_T.data;if(b>=c.length)return AX4(b);d=c[b];if(d===null){d=AX4(b);A_T.data[b]=d;}return d;}
function Xc(b){var c,d;c=new BC;d=B7(1);d.data[0]=b;J0(c,d);return c;}
function MZ(b){return b>=65536&&b<=1114111?1:0;}
function C2(b){return (b&64512)!=55296?0:1;}
function Dq(b){return (b&64512)!=56320?0:1;}
function Pm(b){return !C2(b)&&!Dq(b)?0:1;}
function JZ(b,c){return C2(b)&&Dq(c)?1:0;}
function E7(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function Kq(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function JN(b){return (56320|b&1023)&65535;}
function F6(b){return Hv(b)&65535;}
function Hv(b){if(A_R===null){if(A_U===null)A_U=AM9();A_R=AH4((A_U.value!==null?$rt_str(A_U.value):null));}return T$(A_R,b);}
function FJ(b){return Ht(b)&65535;}
function Ht(b){if(A_Q===null){if(A_V===null)A_V=ANz();A_Q=AH4((A_V.value!==null?$rt_str(A_V.value):null));}return T$(A_Q,b);}
function T$(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length/2|0;f=e-1|0;a:{while(true){g=(d+f|0)/2|0;h=BQ(b[g*2|0],c);if(!h)break;if(h<=0){d=g+1|0;if(d>f)break a;}else{g=g-1|0;if(g<d)break a;f=g;}}}if(g>=0&&g<e)return c+b[(g*2|0)+1|0]|0;return 0;}
function AD$(b,c){if(c>=2&&c<=36){b=ZZ(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function ZZ(b){var c,d,e,f,g,h,i,j,k,l;if(A_P===null){if(A_W===null)A_W=ALX();c=(A_W.value!==null?$rt_str(A_W.value):null);d=AWa(GU(c));e=NM(d);f=BI(e*2|0);g=f.data;h=0;i=0;j=0;k=0;while(k<e){i=i+P7(d)|0;j=j+P7(d)|0;l=h+1|0;g[h]=i;h=l+1|0;g[l]=j;k=k+1|0;}A_P=f;}g=A_P.data;l=0;h=(g.length/2|0)-1|0;while(h>=l){i=(l+h|0)/2|0;e=i*2|0;j=BQ(b,g[e]);if(j>0)l=i+1|0;else{if(j>=0)return g[e+1|0];h=i-1|0;}}return (-1);}
function IO(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function GR(b){var c;if(b<65536){c=B7(1);c.data[0]=b&65535;return c;}return ALZ([Kq(b),JN(b)]);}
function CO(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b>0&&b<=65535?1:0;if(c&&Pm(b&65535))return 19;if(A_S===null){if(A_X===null)A_X=AKr();d=(A_X.value!==null?$rt_str(A_X.value):null);e=P(YJ,16384);f=e.data;g=Dh(16384);h=g.data;i=0;j=0;k=0;l=0;while(l<M(d)){m=Og(Q(d,l));if(m==64){l=l+1|0;m=Og(Q(d,l));n=0;c=1;o=0;while(o<3){l=l+1|0;n=n|Bb(c,Og(Q(d,l)));c=c*64|0;o=o+1|0;}}else if(m<32)n=1;else{m=(m-32|0)<<24>>24;l=l+1|0;n=Og(Q(d,l));}if(!m&&n>=128){if(i>0){c=j+1|0;f[j]=ARr(k,k+i|0,Pc(g,i));j=c;}k=k+(i+n|0)|0;i=0;}
else{c=i+n|0;if(c<h.length)o=j;else{o=j+1|0;f[j]=ARr(k,k+i|0,Pc(g,i));k=k+c|0;i=0;}while(true){c=n+(-1)|0;if(n<=0)break;p=i+1|0;h[i]=m;i=p;n=c;}j=o;}l=l+1|0;}A_S=CV(e,j);}e=A_S.data;o=0;c=e.length-1|0;while(o<=c){p=(o+c|0)/2|0;d=e[p];if(b>=d.uR)o=p+1|0;else{c=d.zT;if(b>=c)return d.z2.data[b-c|0];c=p-1|0;}}return 0;}
function Lo(b){a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function Ig(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return CO(b)!=16?0:1;}
function AAh(b){switch(CO(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function S5(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return AAh(b);}return 1;}
function AKO(){A_O=F($rt_charcls());A_T=P(Ds,128);}
function AM9(){return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};}
function ANz(){return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};}
function ALX(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};}
function AKr(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
var X1=G(0);
var ACo=G(0);
var Fh=G(0);
var AKS=G();
function EM(){return $rt_globals.window.document;}
function A3P(a){return a.KT();}
function A56(a,b){return a.ME($rt_str(b));}
function A5S(a,b){a.J2($rt_str(b));}
function A0I(a,b){return a.Qq($rt_str(b));}
function AOC(a,b){b=$rt_str(b);return a.createElement($rt_ustr(b));}
function AQC(a){return a.Uk();}
function A52(a,b,c){return a.S2($rt_str(b),$rt_str(c));}
function ASU(a,b,c,d){a.E3($rt_str(b),Fy(c,"handleEvent"),d?1:0);}
function AZH(a){return a.RK();}
function A4A(a){return !!a.M4();}
function A6D(a,b){b=$rt_str(b);return a.getElementById($rt_ustr(b));}
function AT$(a){return a.J_();}
function ASr(a,b){a.SS($rt_str(b));}
function AUx(a){return !!a.JS();}
function AYt(a){return a.MN();}
function ATl(a){return $rt_ustr(a.HN());}
function APh(a,b){return a.Km(b?1:0);}
function A7L(a){return a.M3();}
function A2p(a,b,c){return a.U1($rt_str(b),$rt_str(c));}
function AT6(a,b,c){return a.Q3(b,c?1:0);}
function AXC(a,b,c){return !!a.Md($rt_str(b),$rt_str(c));}
function AY0(a){return a.Ln();}
function AR_(a){return $rt_ustr(a.N6());}
function AQM(a,b){return !!a.GX(b);}
function ARD(a,b){return a.Oy($rt_str(b));}
function A2z(a,b,c){return a.KR($rt_str(b),$rt_str(c));}
function ATu(a){return a.Pn();}
function AZK(a,b){return a.Uq($rt_str(b));}
function ARC(a){return $rt_ustr(a.O3());}
function AVE(a){a.JO();}
function AOn(a,b){return a.U4($rt_str(b));}
function AW0(a,b){return a.J7($rt_str(b));}
function AZ5(a,b){return a.JM($rt_str(b));}
function A6x(a){return $rt_ustr(a.PA());}
function A0c(a,b,c){return a.Sr(b,c);}
function A4O(a,b){return a.HM(b);}
function AV7(a){return a.L1();}
function AUY(a,b,c){a.Gs($rt_str(b),Fy(c,"handleEvent"));}
function AUF(a,b,c){return a.II(b,c);}
function AWU(a){return !!a.TV();}
function AX2(a,b){return a.KM($rt_str(b));}
function A31(a,b,c,d){a.El($rt_str(b),Fy(c,"handleEvent"),d?1:0);}
function AQH(a){return a.L2();}
function A0t(a,b,c){return a.Kl($rt_str(b),$rt_str(c));}
function AZm(a){return $rt_ustr(a.PU());}
function A7F(a){return a.Pf();}
function AUW(a){return a.Ps();}
function AZk(a){return a.Me();}
function AUZ(a,b,c){a.GW($rt_str(b),Fy(c,"handleEvent"));}
function A0R(a,b){return a.NR(b);}
function ARP(a,b){a.H9($rt_str(b));}
function A5s(a){return $rt_ustr(a.OU());}
function Qw(){var a=this;B.call(a);a.zV=null;a.zW=null;a.zX=0;a.zY=null;a.zS=null;}
function AVA(a,b){var c,d,e,f,g;c=a.zV;d=a.zW;e=a.zX;f=a.zY;g=a.zS;if(!(b.data==="started"?1:0)){b=new $rt_globals.JSError("worker is not started");g.f(b);}else{b=null;c.onmessage=b;d.push(c);if(d.length==e)f.f(d);}}
var AL5=G();
function AWl(b){return Math.exp(b);}
function AKU(b){return Math.log(b);}
function JU(b,c){return A3j(b,c);}
function A3j(b,c){return Math.pow(b,c);}
function D0(){return AYe();}
function AYe(){return Math.random();}
function Bf(b,c){if(b<c)c=b;return c;}
function Be(b,c){if(b>c)c=b;return c;}
function AXD(b,c){return Math.max(b,c);}
function X9(b){if(b<0)b= -b|0;return b;}
function ARV(b){return Math.abs(b);}
var AAa=G(0);
var Td=G(0);
var ABy=G(0);
var UI=G(0);
var AFT=G(0);
var AD_=G(0);
var ALo=G();
function A4g(a,b,c){a.GW($rt_str(b),Fy(c,"handleEvent"));}
function A2R(a,b,c){a.Gs($rt_str(b),Fy(c,"handleEvent"));}
function ASb(a,b,c,d){a.El($rt_str(b),Fy(c,"handleEvent"),d?1:0);}
function APx(a,b){return !!a.GX(b);}
function A09(a,b,c,d){a.E3($rt_str(b),Fy(c,"handleEvent"),d?1:0);}
var BU=G(Bu);
var AGy=G(Bu);
var IK=G(BL);
var ALC=G();
function AMb(){return "ping";}
function AKo(b){return b===AMb()?1:0;}
var AA7=G(0);
var ZN=G(0);
function ACv(){var a=this;B.call(a);a.vc=null;a.ps=null;a.ek=null;a.wP=null;a.yz=null;a.pU=null;a.qR=null;a.ga=null;a.mc=0;a.GC=0;a.Bc=null;a.hg=null;a.Dg=null;}
function AJg(a){a.ek.focus();}
function GJ(a,b){var c;c=EM();b=$rt_ustr(b);c.title=b;}
function Me(a){a.GC=$rt_globals.requestAnimationFrame(Bz(a.vc,"onAnimationFrame"));}
function J3(a){a.mc=1;}
function AC9(a,b,c){var d,e,f,g,h,i;a.qR.eQ=BJ(b,c);d=b&&c?1:0;if(d){e=a.ek;f=b;e.width=f;f=a.ek;g=c;f.height=g;}f=a.ga;Y(f.dd,b,c);e=f.be;f=f.dd;h=f.b;i=f.a;e.viewport(0,0,h,i);a.hg.b9(a.ga.dd,L1(a));if(d)a.hg.bT();}
function ABL(a,b){var c,d,e;c=a.Bc;d=a.ek;if(BV(b,c))b=c;else{e=d.style;if(b!==null&&M(b)>0)e.setProperty("cursor",$rt_ustr(b));else e.removeProperty("cursor");}a.Bc=b;}
function NA(a){return $rt_globals.performance.now()/1000.0;}
function L1(a){return $rt_globals.window.devicePixelRatio;}
function GC(a,b){var c,d;if(!(("showDirectoryPicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGS(null,b);else{c=$rt_globals.window.showDirectoryPicker();d=new AFr;d.DF=b;b=A_Y;c.then(Bz(d,"f"),Bz(b,"f"));}}
function Fm(a,b){var c,d,e;if(!(("showOpenFilePicker" in $rt_globals.window?1:0)&&($rt_globals.window.top===$rt_globals.self?1:0)?1:0))AGS(b,null);else{c=new AF6;d=$rt_globals.window.showOpenFilePicker();e=new AF5;e.tT=b;d.then(Bz(e,"f"),Bz(c,"f"));}}
function CG(a,b,c,d){var e,f,g,h;e=a.Dg;f=e.i1;if(f>0){g=e.ql.data;f=f-1|0;e.i1=f;U9(e,b,c,d,g[f]);}else{h=e.nh;e=new AFs;e.vV=b;e.CD=c;e.B4=d;b=new U$;b.sr=e;c=h.nf;b.Cv=c;if(c===null)h.qd=b;else c.vB=b;h.nf=b;h.b_=h.b_+1|0;h.lU=h.lU+1|0;}}
function S2(a,b,c){var d,e;if(!MF()){b=new Bu;Bm(b,C(42));c.g(b);}else{d=$rt_globals.navigator.clipboard.readText();e=new Vz;e.Ae=b;b=AOc(c);d.then(Bz(e,"f"),Bz(b,"f"));}}
function U_(a,b,c,d){var e,f,g;if(!MF()){b=new Bu;Bm(b,C(42));d.g(b);}else{e=$rt_globals.navigator.clipboard;f=GU(b);A9p();b=A_Z;g=f.data;g=b.decode(g);b=e.writeText(g);e=new X7;e.rJ=c;c=AOc(d);b.then(Bz(e,"f"),Bz(c,"f"));}}
function Xo(a){return MF()&&("readText" in $rt_globals.navigator.clipboard?1:0)?1:0;}
function AOc(b){var c;c=new WL;c.CH=b;return c;}
function U6(a,b,c){$rt_globals.console.info("Window.addChild is not for web");return 0;}
var BD=G(0);
var AMq=G();
var T=G(0);
var ABW=G();
function AJY(a){Z4(C(1),C(43));}
var ABE=G(0);
function UZ(){B.call(this);this.CN=null;}
function A5D(a,b){var c,d;c=b;b=a.CN;if(!(!b.hg.cI(c/1000.0)&&!b.mc)){d=b.ga.dd;if(Bb(d.b,d.a)){b.mc=0;b.hg.bT();}}Me(b);}
function UX(){B.call(this);this.tW=null;}
function DI(a){J3(a.tW);}
var AAX=G(0);
function UY(){B.call(this);this.rn=null;}
function AUJ(a,b,c){var d,e,f,g;c=a.rn;d=0;e=b.length;while(d<e){f=b[d];if(f.target===c.ek){if(!("devicePixelContentBoxSize" in f?1:0)){f=f.contentRect;g=L1(c);AC9(c,G$(f.width*g),G$(f.height*g));}else if(f.devicePixelContentBoxSize.length==1){f=f.devicePixelContentBoxSize[0];AC9(c,f.inlineSize|0,f.blockSize|0);}}d=d+1|0;}}
var AJM=G();
function AY7(){return {box:'device-pixel-content-box'};}
function AVO(b,c,d){try {b.observe(c,d);}catch(error){$rt_globals.console.error(error);b.observe(c);}}
var CF=G(0);
function UW(){B.call(this);this.w4=null;}
function AYO(a,b){var c;b=a.w4;b.hg.b9(b.ga.dd,L1(b));c=b.ga.dd;if(Bb(c.b,c.a))b.hg.bT();}
function ACf(){var a=this;B.call(a);a.nh=null;a.C2=null;a.tz=null;a.ql=null;a.yE=0;a.i1=0;a.Dz=null;}
function U9(a,b,c,d,e){var f,g,h,i,j,k,l,m;d=d.data;f=a.yE+1|0;a.yE=f;g=a.tz;h=C6(f);g.kI=Pj(g,g.kI,h);h=AEc(g,h);X4(h,b);X4(h,b);g.nb=g.nb+1|0;b=a.C2[e];i=d.length;h=new $rt_globals.Array(i+2|0);g=f;0;h[0]=g;c=$rt_ustr(c);1;h[1]=c;j=2;k=new $rt_globals.Array();l=0;while(l<i){c=d[l];if(c instanceof BC){c=c;f=j+1|0;c=$rt_ustr(c);j;h[j]=c;}else if(E4(c,$rt_arraycls($rt_bytecls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E4(c,$rt_arraycls($rt_charcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(E4(c,
$rt_arraycls($rt_intcls()))){m=c;f=j+1|0;c=m.data.buffer;j;h[j]=c;}else if(!(c instanceof Ma)){if(!(c instanceof OV)){b=new BU;c=GV(BF(c));g=new J;L(g);H(H(g,C(44)),c);Bm(b,K(g));N(b);}c=c;e=j+1|0;g=c.iN;j;h[j]=g;f=e+1|0;c=QE(c.f4);e;h[e]=c;}else{c=c;g=c.iQ;if(g===null){f=j+1|0;c=c.hM;j;h[j]=c;}else{e=j+1|0;j;h[j]=g;f=e+1|0;c=QE(c.iB);e;h[e]=c;}}c=h[j];if(c instanceof $rt_globals.ArrayBuffer?1:0)k.push(c);l=l+1|0;j=f;}b.postMessage(h,k);}
function AHz(){var a=this;B.call(a);a.cH=null;a.kc=null;a.GO=null;a.eQ=null;}
function A$b(a,b){var c=new AHz();A6k(c,a,b);return c;}
function A6k(a,b,c){var d,e,f,g;a.eQ=null;a.kc=b;d=new AAy;d.bK=CX(P(Cn,0));d.pv=CX(P(Cn,0));d.bZ=CX(P(CN,0));d.fR=CX(P(E0,0));d.ct=CX(P(CQ,0));d.ho=CX(P(FU,0));d.hP=CX(P(Gh,0));d.m8=CX(P(T,0));d.nL=CX(P(T,0));d.dN=c;a.cH=d;e=$rt_globals.window;f=P(Dv,14);g=f.data;d=new AE9;d.r6=a;g[0]=C_(a,b,C(45),d);d=new AE$;d.B1=a;g[1]=C_(a,b,C(46),d);d=new AE_;d.zu=a;g[2]=C_(a,b,C(47),d);d=new AFa;d.xG=a;g[3]=C_(a,b,C(48),d);d=new AFb;d.u4=a;g[4]=C_(a,b,C(49),d);d=new AFc;d.sn=a;g[5]=C_(a,b,C(50),d);d=new AFd;d.DR=a;g[6]
=C_(a,b,C(51),d);d=new AFe;d.BB=a;g[7]=C_(a,b,C(52),d);d=new AFf;d.y7=a;g[8]=C_(a,b,C(53),d);d=new AFg;d.w2=a;g[9]=C_(a,b,C(54),d);d=new XE;d.wA=a;g[10]=C_(a,b,C(55),d);d=new XF;d.vL=a;e.addEventListener("paste",Bz(d,"handleEvent"),!!1);g[11]=W$(a,e,C(56),d);d=new XG;d.ym=a;g[12]=C_(a,e,C(57),d);d=new XH;d.Dn=a;g[13]=C_(a,e,C(58),d);c=new Sy;c.EH=f;a.GO=c;e=new AGa;e.z6=b;b.onpointerdown=Bz(e,"f");e=new AGb;e.zh=b;b.onpointerup=Bz(e,"f");}
function Ys(){return (EM()).activeElement;}
function C_(a,b,c,d){b.addEventListener($rt_ustr(c),Bz(d,"handleEvent"));return W$(a,b,c,d);}
function W$(a,b,c,d){var e;e=new AAT;e.Gf=b;e.Gh=c;e.Gg=d;return e;}
function ADB(a,b){var c;c=new AEe;c.xF=b;return c;}
function Ft(a,b){var c,d,e,f;c=$rt_globals.window.devicePixelRatio;d=a.kc.getBoundingClientRect();e=BJ(G$((b.clientX-d.left)*c),G$((b.clientY-d.top)*c));f=AMC(a.eQ);d=new PC;ADZ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.j=e;d.F6=f;return d;}
function XK(a,b,c){var d,e,f,g;d=new Rm;e=$rt_str(b.key);f=b.keyCode;g=b.repeat?1:0;ADZ(d,b.ctrlKey?1:0,b.altKey?1:0,b.shiftKey?1:0,b.metaKey?1:0);d.lW=0;d.eD=e;d.bh=f;d.ku=c;d.BG=g;return d;}
function Ek(a,b){b.stopPropagation();b.preventDefault();}
function OE(){var a=this;B.call(a);a.qz=null;a.cr=null;a.be=null;a.mN=0;a.Cu=null;a.Gr=0;a.Fp=0;a.lP=null;a.lE=null;a.FC=null;a.G3=null;a.wg=null;a.yI=null;a.js=null;a.iL=null;a.kC=null;a.FK=null;a.tc=null;a.dd=null;a.Ds=null;a.qN=0;a.nr=0;a.pb=0;a.o2=0;a.l7=0;a.o8=null;a.ph=0.0;a.qT=0.0;}
function ANx(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a.dd=new Bi;a.qN=0;a.o8=new AFl;a.qz=c;a.mN=d;g=$rt_str(b.getParameter(7938));h=new J;L(h);H(H(h,C(59)),g);$rt_globals.console.info($rt_ustr(K(h)));a.be=b;a.cr=Lh(c,4,4,1);i=AOx(16);j=i.data;j[0]=1.0;j[1]=(-1.0);j[2]=1.0;j[3]=1.0;j[4]=1.0;j[5]=1.0;j[6]=1.0;j[7]=0.0;j[8]=(-1.0);j[9]=(-1.0);j[10]=0.0;j[11]=1.0;j[12]=(-1.0);j[13]=1.0;j[14]=0.0;j[15]=0.0;k=B7(6);l=k.data;l[0]=0;l[1]=1;l[2]=2;l[3]=1;l[4]=2;l[5]=3;m=new Sn;H2();c=A_0;m.fg=b;m.iA=c;m.vi=j.length/c.n5|0;m.Do
=l.length;n=b.createBuffer();m.yw=n;b.bindBuffer(34962,n);c=i.data;b.bufferData(34962,c,35044);m.xI=null;n=b.createBuffer();m.w7=n;if(n!==null){b.bindBuffer(34963,n);c=k.data;b.bufferData(34963,c,35044);}n=null;b.bindBuffer(34962,n);n=null;b.bindBuffer(34963,n);a.tc=m;a.Fp=Of(g,C(60));c=new AAU;c.er=b;a.Cu=c;a.ph=e;a.qT=f;d=b.getParameter(3379);a.Gr=d;c=new J;L(c);V(H(c,C(61)),d);$rt_globals.console.info($rt_ustr(K(c)));k=P(Dn,9);i=k.data;c=A8U(b);a.lP=c;i[0]=c;c=A9O(b,C(62));a.lE=c;i[1]=c;c=new ABj;IB(c,b,
C(63),C(64),A_0);a.FC=c;i[2]=c;c=A$D(b);a.G3=c;i[3]=c;c=new QD;Xv(c,b,C(65),C(66));a.wg=c;i[4]=c;c=A$Q(b);a.yI=c;i[5]=c;c=A9t(b);a.js=c;i[6]=c;c=A$z(b);a.iL=c;i[7]=c;c=A$A(b);a.kC=c;i[8]=c;a.FK=k;AFX(b,C(67));}
function IV(a,b,c){return G1(a,b,c,400,0);}
function Ib(a,b,c){return Lh(a.qz,b,c,0);}
function Eg(a,b,c,d){return Lh(a.qz,b,c,d);}
function AFC(a,b,c,d,e,f){var g,h;Cr(a.cr,c);g=Eg(a,LS(a.cr,b)+(d*2|0)|0,e,f);Cr(g,c);B1(g,b,d,Mn(c,e));h=C5(a);CW(h,g);EQ(g);return h;}
function EZ(a,b){var c,d,e,f,g;c=a.be;d=b.bp;e=b.bu;f=b.bi;g=b.bD;c.clearColor(d,e,f,g);a.be.clear(16384);}
function Cc(a,b){var c;if(b==a.nr)return b;if(!b)a.be.disable(3042);else{a.be.enable(3042);a.be.blendFuncSeparate(770,771,1,1);}c=a.nr;a.nr=b;return c;}
function Oj(a,b,c){Mw(a,b.b,b.a,c);}
function Mw(a,b,c,d){var e,f;e=d.b;f=d.a;a.o2=1;a.l7=1;d=a.o8;d.uU=b;d.uV=c;d.uT=e;d.uS=f;AD1(a);}
function GA(a){a.o2=0;a.l7=0;AD1(a);}
function AD1(a){var b,c,d,e,f,g;b=a.pb;c=a.o2;if(b!=c){a.pb=c;if(!c)a.be.disable(3089);else a.be.enable(3089);}if(a.pb&&a.l7){a.l7=0;d=a.be;e=a.o8;b=e.uU;c=a.dd.a-e.uV|0;f=e.uS;c=c-f|0;g=e.uT;d.scissor(b,c,g,f);}}
function Go(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.tc;c=a.qN;d=b.iA.B$;e=b.fg;c=c^d;f=0;while(c){g=1<<f;if(c&g){if(!(d&g))e.disableVertexAttribArray(f);else e.enableVertexAttribArray(f);c=c^g;}f=f+1|0;}c=0;e=b.fg;h=b.yw;e.bindBuffer(34962,h);i=b.iA.ro.data;g=i.length;j=0;while(j<g){k=i[j];l=b.fg;m=k.kh;n=k.g5;o=b.iA.n5*4|0;f=c*4|0;l.vertexAttribPointer(m,n,5126,!!0,o,f);c=c+k.g5|0;j=j+1|0;}a:{e=b.xI;if(e!==null){c=0;b.fg.bindBuffer(34962,e);i=b.iA.Ba.data;f=i.length;g=0;while(true){if(g>=f)break a;e=i[g];h
=b.fg;j=e.kh;p=e.g5;m=e.tk;n=b.iA.z4;h.vertexAttribPointer(j,p,5121,!!m,n,c);c=c+e.g5|0;g=g+1|0;}}}q=b.w7;if(q===null){c=b.vi;if(c>0)b.fg.drawArrays(4,0,c);}else{b.fg.bindBuffer(34963,q);k=b.fg;g=b.Do;k.drawElements(4,g,5123,0);}a.qN=d;}
function Bw(a,b,c,d,e){GX(a,a.lP);G9(a.lP,a.be,b,c,d,a.dd);d=a.lP;FZ(a.be,d.C6,e);Go(a);}
function AGB(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o;GX(a,a.iL);G9(a.iL,a.be,b,c,d,a.dd);j=a.iL;d=a.be;k=j.x9;l=e.b;m=e.a;n=f.b;o=f.a;d.uniform4f(k,l,m,n,o);e=j.x8;l=g.b;o=g.a;m=h.b;n=h.a;d.uniform4f(e,l,o,m,n);d=a.iL;FZ(a.be,d.yU,i);Go(a);}
function MQ(a,b,c,d,e,f,g,h){var i,j;GX(a,a.kC);G9(a.kC,a.be,b,c,d,a.dd);d=a.kC;i=a.be;j=d.vf;i.uniform2f(j,e,f);FZ(i,d.zH,g);d=a.kC;FZ(a.be,d.yy,h);Go(a);}
function DT(a,b,c,d,e,f,g,h,i){var j;j=!i?a.wg:a.yI;GX(a,j);ANX(j,a.be,!i?a.qT:a.ph);G9(j,a.be,b,c,d,a.dd);OJ(j,a.be,f);AGH(j,a.be,f,e);AMM(j,a.be,g,h);Go(a);}
function C5(a){var b,c;b=new Li;c=a.Cu;b.eb=new Bi;b.d6=c;b.gz=c.er.createTexture();c.k5=c.k5+1|0;return b;}
function NE(a,b){AFX(a.be,b);}
function GX(a,b){var c,d;if(b!==a.Ds){c=a.be;d=b.bN;c.useProgram(d);a.Ds=b;}}
function VW(){var a=this;OE.call(a);a.Fc=null;a.FD=null;}
function G1(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p;f=a.cr;g=ALw(b,c,d,e);Ld(f,g);h=f.dx.measureText("W");i=h.fontBoundingBoxAscent;j=h.fontBoundingBoxDescent;k=h.width;l=EC(f,C(68));m=EC(f,C(69));h=new Mb;n=g;h.pf=b;h.pZ=c;h.EC=d;h.ES=e;h.eN=i;h.e8=j;h.Et=l;h.q6=k;h.rU=n;h.uG=C7(i);h.Fw=C7(h.e8);d=m*32.0|0;o=l*32.0|0;p=k*32.0|0;d=o==d&&o==p?1:0;a:{h.Ey=d;switch(e){case 1:break;case 2:b=C(6);break a;default:b=C(4);break a;}b=C(70);}h.Ep=b;return h;}
var WE=G(0);
function AYG(a,b){var c;c=a.ci();while(c.cY()){b.g(c.ck());}}
var H0=G(0);
function My(a){var b,c;b=new ACd;c=new Sh;c.zQ=a;b.Co=c;return b;}
function A2G(a,b){var c,d;c=a.ci();d=0;while(c.cY()){if(b.bI(c.ck())){c.qn();d=1;}}return d;}
var FW=G();
function EU(a){return a.c$()?0:1;}
function GO(a,b){var c,d,e,f,g,h;c=b.data;d=a.p;e=c.length;if(e<d)b=Vl(FX(BF(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=B_(a);while(Cd(f)){g=b.data;h=e+1|0;g[e]=Ce(f);e=h;}return b;}
function A5H(a,b){var c;c=a.ci();while(c.cY()){if(BV(c.ck(),b)){c.qn();return 1;}}return 0;}
function GY(a,b){var c,d;c=0;d=b.ci();while(d.cY()){if(!a.qJ(d.ck()))continue;c=1;}return c;}
var On=G(0);
var Nn=G(0);
function EH(){FW.call(this);this.b_=0;}
function AVS(a,b){a.pr(a.c$(),b);return 1;}
function B_(a){var b;b=new YX;b.jX=a;b.rc=a.b_;b.mk=a.c$();b.il=(-1);return b;}
function AVc(a,b,c){var d,e;if(b>=0&&b<=a.c$()){if(c.e7())return 0;d=c.ci();while(d.cY()){e=b+1|0;a.pr(b,d.ck());b=e;}return 1;}c=new BU;X(c);N(c);}
function A6o(a,b,c){c=new DX;X(c);N(c);}
function A4N(a,b){var c;c=new DX;X(c);N(c);}
function LM(a,b){var c,d;c=a.c$();d=0;while(true){if(d>=c)return (-1);if(BV(b,a.jg(d)))break;d=d+1|0;}return d;}
function AUl(a,b){var c,d;if(!E4(b,Nn))return 0;c=b;if(a.p!=c.p)return 0;d=0;while(d<c.p){if(!BV(BK(a,d),BK(c,d)))return 0;d=d+1|0;}return 1;}
var MW=G(EH);
var PI=G(0);
var AGe=G(0);
function Vh(){var a=this;MW.call(a);a.qd=null;a.nf=null;a.lU=0;}
var L$=G(0);
function Et(){var a=this;B.call(a);a.p2=null;a.p9=null;}
var Ei=G(0);
var Xn=G(0);
var P6=G(0);
function Z2(){var a=this;Et.call(a);a.kI=null;a.m$=null;a.FG=null;a.nb=0;}
function AJR(a,b){var c;c=AEc(a,b);if(c===null)return null;a.kI=LH(a,a.kI,b);a.nb=a.nb+1|0;return c.k$;}
function AEc(a,b){var c,d;c=a.kI;while(true){if(c===null)return null;d=NC(a.m$,b,c.mL);if(!d)break;c=d>=0?c.cd:c.b2;}return c;}
function Pj(a,b,c){var d,e;if(b===null){b=new Lk;d=null;b.mL=c;b.k$=d;b.hl=1;b.ht=1;return b;}e=NC(a.m$,c,b.mL);if(!e)return b;if(e>=0)b.cd=Pj(a,b.cd,c);else b.b2=Pj(a,b.b2,c);Fi(b);return NL(b);}
function LH(a,b,c){var d,e,f,g,h,i,j;if(b===null)return null;d=NC(a.m$,c,b.mL);if(d<0)b.b2=LH(a,b.b2,c);else if(d>0)b.cd=LH(a,b.cd,c);else{e=b.cd;if(e===null)return b.b2;f=b.b2;g=P(Lk,e.hl).data;h=0;while(true){b=e.b2;if(b===null)break;i=h+1|0;g[h]=e;h=i;e=b;}b=e.cd;while(h>0){h=h+(-1)|0;j=g[h];j.b2=b;Fi(j);b=NL(j);}e.cd=b;e.b2=f;Fi(e);b=e;}Fi(b);return NL(b);}
function ACh(){B.call(this);this.BQ=null;}
function ACi(){var a=this;B.call(a);a.AS=null;a.AR=0;}
function AYZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.AS;d=a.AR;AKo(b.data);e=c.nh;f=e.qd;if(f===null)g=null;else{g=f.vB;e.qd=g;if(g!==null)g.Cv=null;else e.nf=null;e.lU=e.lU-1|0;e.b_=e.b_+1|0;g=f.sr;}if(g!==null)U9(c,g.vV,g.CD,g.B4,d);else{h=c.ql.data;i=c.i1;c.i1=i+1|0;h[i]=d;}c=c.Dz;b=b.data;if(!AKo(b)){if(!(b instanceof $rt_globals.Array?1:0)){b=new BU;X(b);N(b);}if(b.length<1){b=new BU;AI6(b);N(b);}e=C6(b[0]);f=AJR(c.BQ,e);d=1;j=b.length;h=P(B,j-d|0);k=h.data;i=0;while(d<j){l=i+1|0;m=d+1|0;e=b[d];if(typeof e
==='string'?1:0)k[i]=F2(GP(e));else if(e instanceof $rt_globals.ArrayBuffer?1:0)k[i]=A8P(GP(e));else if(e instanceof $rt_globals.File?1:0)k[i]=AOz(GP(e));else if(e instanceof $rt_globals.FileSystemFileHandle?1:0){d=m+1|0;n=ACl(GP(b[m]));k[i]=AJl(GP(e),n);m=d;}else if(e instanceof $rt_globals.FileSystemDirectoryHandle?1:0){d=m+1|0;c=GP(b[m]);k[i]=A90(GP(e),c);m=d;}i=l;d=m;}if(i!=k.length)h=CV(h,i);f.g(h);}}
function AAy(){var a=this;B.call(a);a.bK=null;a.pv=null;a.bZ=null;a.fR=null;a.ct=null;a.ho=null;a.hP=null;a.m8=null;a.nL=null;a.dN=null;a.he=null;a.zb=0;}
function U4(a,b){var c,d,e,f;DI(a.dN);c=(B5(!b.ku?a.pv:a.bK)).data;d=c.length;e=0;while(true){if(e>=d)return 0;f=c[e].br(b);if(f)break;if(b.lW)break;e=e+1|0;}return f;}
function SY(a,b,c){var d,e,f;DI(a.dN);d=(B5(a.ho)).data;e=d.length;f=0;while(f<e){if(d[f].fy(b,c))return 1;f=f+1|0;}return 0;}
function AE9(){B.call(this);this.r6=null;}
function A4u(a,b){var c;c=a.r6;if(U4(c.cH,XK(c,b,1)))Ek(c,b);}
function AE$(){B.call(this);this.B1=null;}
function A4G(a,b){var c;c=a.B1;if(U4(c.cH,XK(c,b,0)))Ek(c,b);}
function AE_(){B.call(this);this.zu=null;}
function AT9(a,b){var c,d,e,f,g,h,i;c=a.zu;if(c.eQ!==null){a:{b:{d=Ft(c,b);e=c.cH;DI(e.dN);f=e.he;if(f!==null)f.g(d);else{g=(B5(e.bZ)).data;h=g.length;i=0;while(true){if(i>=h)break b;if(g[i].b0(d))break a;i=i+1|0;}}}}Ek(c,b);}}
function AFa(){B.call(this);this.xG=null;}
function A2$(a,b){var c,d,e,f,g,h;c=a.xG;b.button;if(c.eQ!==null)a:{d=Ft(c,b);c=c.cH;e=b.button;DI(c.dN);if(c.he===null){f=(B5(c.bZ)).data;g=f.length;h=0;while(h<g){b=f[h].cA(d,e);if(b!==null){c.he=b;c.zb=e;break a;}h=h+1|0;}}}}
function AFb(){B.call(this);this.u4=null;}
function A3m(a,b){var c,d,e,f,g,h,i;c=a.u4;b.button;if(c.eQ!==null){d=Ft(c,b);e=c.cH;f=b.button;DI(e.dN);if(f==e.zb&&e.he!==null)e.he=null;g=(B5(e.bZ)).data;h=g.length;i=0;a:{while(i<h){if(g[i].dX(d,f)){h=1;break a;}i=i+1|0;}h=0;}if(h)Ek(c,b);}}
function AFc(){B.call(this);this.sn=null;}
function AVK(a,b){var c,d,e,f,g,h,i,j,k;c=a.sn;if(c.eQ!==null){a:{switch(b.deltaMode){case 0:break;case 1:d=25.0;break a;case 2:d=250.0;break a;default:d=0.0;break a;}d=1.0;}e=c.cH;f=Ft(c,b);g=d;d=g*b.deltaX;h=g*b.deltaY;DI(e.dN);i=(B5(e.fR)).data;j=i.length;k=0;b:{while(k<j){if(i[k].dV(f,d,h))break b;k=k+1|0;}}Ek(c,b);}}
function AFd(){B.call(this);this.DR=null;}
function ASa(a,b){var c,d,e,f,g,h,i,j;c=a.DR;if(c.eQ!==null){d=Ft(c,b);e=c.cH;f=b.button;g=b.detail;DI(e.dN);h=(B5(e.bZ)).data;i=h.length;j=0;a:{while(j<i){if(h[j].cU(d,f,g)){g=1;break a;}j=j+1|0;}g=0;}if(g)Ek(c,b);}}
function AFe(){B.call(this);this.BB=null;}
function A7_(a,b){var c,d,e,f,g,h,i;c=a.BB;if(c.eQ!==null){d=Ft(c,b);e=c.cH;DI(e.dN);f=(B5(e.ct)).data;g=f.length;h=0;a:{while(h<g){if(f[h].bI(d)){i=1;break a;}h=h+1|0;}i=0;}if(i)Ek(c,b);}}
function AFf(){B.call(this);this.y7=null;}
function ARB(a,b){var c,d,e;b=a.y7.cH;c=(B5(b.nL)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}DI(b.dN);}
function AFg(){B.call(this);this.w2=null;}
function AWr(a,b){var c,d,e;b=a.w2.cH;c=(B5(b.m8)).data;d=c.length;e=0;while(e<d){c[e].e();e=e+1|0;}if(b.he!==null)b.he=null;DI(b.dN);}
function XE(){B.call(this);this.wA=null;}
function A7H(a,b){var c;c=a.wA;if(c.eQ!==null)Ft(c,b);}
function XF(){B.call(this);this.vL=null;}
function ATM(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=a.vL;if(Ys()===c.kc){d=b.clipboardData.items;e=0;f=d.length;while(e<f){g=d[e];if((g.kind=='string'?1:0)&&(g.type=='text/plain'?1:0)){h=(B5(c.cH.hP)).data;i=h.length;j=0;a:{while(true){if(j>=i){k=null;break a;}k=h[j].b1();if(k!==null)break;j=j+1|0;}}if(k!==null){l=c.cH.dN;m=new Qo;m.xb=k;m.xc=l;g.getAsString(Bz(m,"accept"));Ek(c,b);}}else{k=$rt_str(g.type);g=$rt_str(g.kind);l=new J;L(l);H(H(H(H(l,C(71)),k),C(72)),g);$rt_globals.console.info($rt_ustr(K(l)));}e=e+1
|0;}}}
function XG(){B.call(this);this.ym=null;}
function AUa(a,b){var c;c=a.ym;if(Ys()===c.kc&&SY(c.cH,ADB(c,b),0))Ek(c,b);}
function XH(){B.call(this);this.Dn=null;}
function A4Q(a,b){var c;c=a.Dn;if(Ys()===c.kc&&SY(c.cH,ADB(c,b),1))Ek(c,b);}
var ADU=G(0);
var AD3=G();
function Lh(a,b,c,d){var e,f,g,h,i;e=new ABM;e.jW=d;A_I=A_I+1|0;e.oU=b;e.oh=c;f=(EM()).createElement("canvas");e.jM=f;g=b;f.width=g;h=e.jM;f=c;h.height=f;if(!d)g=e.jM.getContext("2d");else{i=e.jM;h=AZR();g=i.getContext("2d",h);}e.dx=g;if(d){h="#FFFFFF";g.fillStyle=h;}return e;}
var AD2=G();
function ASZ(a,b){b=b.message;$rt_globals.console.info("Error loading image: "+b);}
function AJX(){var a=this;B.call(a);a.dp=null;a.gJ=null;a.cT=0;}
function CX(a){var b=new AJX();AR8(b,a);return b;}
function AR8(a,b){a.dp=b;}
function FK(a,b){return a.dp.data[b];}
function Z(a,b){var c,d,e;c=a.cT;d=a.dp;if(c==d.data.length)a.dp=CV(d,c+4|0);d=a.dp.data;e=a.cT;a.cT=e+1|0;d[e]=b;a.gJ=null;}
function TI(a,b){var c,d,e,f;c=0;while(true){d=a.dp.data;e=d.length;if(c>=e)break;if(d[c]===b){while(true){f=c+1|0;if(f>=e)break;d[c]=d[f];c=f;}d[c]=null;a.cT=a.cT-1|0;a.gJ=null;}c=c+1|0;}}
function B5(a){var b;b=a.gJ;if(!(b!==null&&b.data.length==a.cT))a.gJ=CV(a.dp,a.cT);return a.gJ;}
var Cn=G(0);
var CN=G(0);
function A2M(a,b){return 0;}
function AXe(a,b,c){return null;}
function AO2(a,b,c){return 0;}
function A45(a,b,c,d){return 0;}
var E0=G(0);
var DU=G(0);
var CQ=G(0);
var FU=G(0);
var CJ=G(0);
var Gh=G(0);
function Sy(){B.call(this);this.EH=null;}
function Bi(){var a=this;B.call(a);a.b=0;a.a=0;}
function BJ(a,b){var c=new Bi();RQ(c,a,b);return c;}
function AMC(a){var b=new Bi();AQG(b,a);return b;}
function RQ(a,b,c){a.b=b;a.a=c;}
function AQG(a,b){a.b=b.b;a.a=b.a;}
function Ct(a,b){a.b=b.b;a.a=b.a;}
function Y(a,b,c){a.b=b;a.a=c;}
function AKw(a){var b,c,d;b=a.b;c=a.a;d=new J;L(d);V(H(V(H(d,C(73)),b),C(74)),c);return K(d);}
function ASO(a,b){var c;a:{b:{if(a!==b){if(BF(b)!==BF(a))break b;if(!Ku(a,b))break b;}c=1;break a;}c=0;}return c;}
function Ku(a,b){return a.b==b.b&&a.a==b.a?1:0;}
function AFl(){var a=this;B.call(a);a.uU=0;a.uV=0;a.uT=0;a.uS=0;}
var AJs=G();
var AK_=G(0);
function AAU(){var a=this;B.call(a);a.er=null;a.k5=0;a.gd=0;}
function OU(){var a=this;B.call(a);a.bN=null;a.G6=null;}
function AMQ(b,c,d){var e,f,g,h;e=b.createShader(c);b.shaderSource(e,$rt_ustr(d));b.compileShader(e);if(b.getShaderParameter(e,35713))return e;f=c!=35633?C(75):C(76);g=$rt_str(b.getShaderInfoLog(e));h=new J;L(h);H(H(h,f),g);g=K(h);b.deleteShader(e);Bc(Bg(),g);Bc(DG(),C(77));Bc(DG(),d);Bc(DG(),C(77));b=new Bu;Bm(b,g);N(b);}
function Dn(){var a=this;OU.call(a);a.y6=null;a.tE=null;a.oQ=null;}
function A_1(a,b,c,d){var e=new Dn();IB(e,a,b,c,d);return e;}
function IB(a,b,c,d,e){var f,g,h,i,j,k;a.G6=e;f=AMQ(b,35633,c);d=AMQ(b,35632,d);g=b.createProgram();b.attachShader(g,f);b.attachShader(g,d);b.deleteShader(f);b.deleteShader(d);a.bN=g;h=e.vs.data;i=h.length;j=0;while(j<i){c=h[j];d=a.bN;k=c.kh;c=c.tN;b.bindAttribLocation(d,k,$rt_ustr(c));j=j+1|0;}c=a.bN;b.linkProgram(c);if(b.getProgramParameter(c,35714)){AFX(b,C(78));a.oQ=new Bi;c=a.bN;a.y6=b.getUniformLocation(c,"uResolution");c=a.bN;a.tE=b.getUniformLocation(c,"uSizePos");return;}d=$rt_str(b.getProgramInfoLog(c));b.deleteProgram(c);b
=new Bu;c=new J;L(c);H(H(c,C(79)),d);Bm(b,K(c));N(b);}
function AHI(a,b,c){var d,e,f;if(!Ku(a.oQ,c)){Ct(a.oQ,c);d=a.y6;e=c.b;f=c.a;b.uniform2f(d,e,f);}}
function G9(a,b,c,d,e,f){var g,h,i,j,k,l;g=e.b;h=f.b;i=g/h;j=e.a;k=f.a;l=j/k;h=(c*2.0+g)/h-1.0;j=1.0-(d*2.0+j)/k;e=a.tE;b.uniform4f(e,i,l,h,j);AHI(a,b,f);}
function ANE(){Dn.call(this);this.C6=null;}
function A8U(a){var b=new ANE();A2v(b,a);return b;}
function A2v(a,b){var c;H2();IB(a,b,C(63),C(80),A_0);c=a.bN;a.C6=b.getUniformLocation(c,"uColor");}
function FN(){Dn.call(this);this.uZ=null;}
function A9O(a,b){var c=new FN();ADD(c,a,b);return c;}
function A_2(a,b,c){var d=new FN();ADH(d,a,b,c);return d;}
function ADD(a,b,c){ADH(a,b,C(63),c);}
function ADH(a,b,c,d){H2();IB(a,b,c,d,A_0);c=a.bN;a.uZ=b.getUniformLocation(c,"sDiffuse");}
function OJ(a,b,c){var d;d=a.uZ;b.uniform1i(d,0);b.activeTexture(33984);c=c.gz;b.bindTexture(3553,c);}
var ABj=G(Dn);
function AIh(){FN.call(this);this.Ei=null;}
function A$D(a){var b=new AIh();AVd(b,a);return b;}
function AVd(a,b){var c;ADD(a,b,C(81));c=a.bN;a.Ei=b.getUniformLocation(c,"uContrast");}
function HU(){var a=this;FN.call(a);a.s2=null;a.t0=null;a.vd=null;a.Ck=null;a.rB=0.0;}
function A_3(a,b,c){var d=new HU();Xv(d,a,b,c);return d;}
function Xv(a,b,c,d){ADH(a,b,c,d);c=a.bN;a.s2=b.getUniformLocation(c,"uTexTransform");c=a.bN;a.t0=b.getUniformLocation(c,"uColor");c=a.bN;a.vd=b.getUniformLocation(c,"uBgColor");c=a.bN;a.Ck=b.getUniformLocation(c,"uTextPow");}
function ANX(a,b,c){var d;if(a.rB!==c){a.rB=c;d=a.Ck;b.uniform2f(d,c,0.0);}}
function AMM(a,b,c,d){FZ(b,a.t0,c);FZ(b,a.vd,d);}
function AGH(a,b,c,d){var e,f,g,h,i,j;c=c.eb;e=c.b;f=c.a;g=d.bp;h=e;g=g/h;i=d.bu;j=f;i=i/j;h=d.bi/h;j=d.bD/j;c=a.s2;b.uniform4f(c,g,i,h,j);}
var QD=G(HU);
var AKc=G(HU);
function A$Q(a){var b=new AKc();A1g(b,a);return b;}
function A1g(a,b){Xv(a,b,C(65),C(82));}
function ALp(){var a=this;FN.call(a);a.xJ=null;a.xH=null;a.t7=null;}
function A9t(a){var b=new ALp();AQ8(b,a);return b;}
function AQ8(a,b){var c,d;ADD(a,b,C(83));c=a.bN;a.xJ=b.getUniformLocation(c,"uColorB");d=a.bN;a.xH=b.getUniformLocation(d,"uColorF");d=a.bN;a.t7=b.getUniformLocation(d,"uContrast");}
function AM2(){var a=this;Dn.call(a);a.yU=null;a.x9=null;a.x8=null;}
function A$z(a){var b=new AM2();A1j(b,a);return b;}
function A1j(a,b){var c;H2();IB(a,b,C(63),C(84),A_0);c=a.bN;a.yU=b.getUniformLocation(c,"uColor");c=a.bN;a.x9=b.getUniformLocation(c,"uPoints1");c=a.bN;a.x8=b.getUniformLocation(c,"uPoints2");}
function AHb(){var a=this;Dn.call(a);a.yy=null;a.vf=null;a.zH=null;}
function A$A(a){var b=new AHb();AZ7(b,a);return b;}
function AZ7(a,b){var c;H2();IB(a,b,C(63),C(85),A_0);c=a.bN;a.yy=b.getUniformLocation(c,"uColor");c=a.bN;a.vf=b.getUniformLocation(c,"uBaseline");c=a.bN;a.zH=b.getUniformLocation(c,"uScaleHExp");}
var AB0=G(0);
var AOd=G(0);
function FZ(b,c,d){var e,f,g,h;e=d.bp;f=d.bu;g=d.bi;h=d.bD;b.uniform4f(c,e,f,g,h);}
function AFX(b,c){var d,e;d=b.getError();if(d){b=Bg();e=new J;L(e);V(H(e,c),d);Bc(b,K(e));}}
var La=G();
var A_s=null;function NC(a,b,c){return b.nc(c);}
function AIm(){A_s=new La;}
function AAT(){var a=this;B.call(a);a.Gf=null;a.Gh=null;a.Gg=null;}
function Sn(){var a=this;B.call(a);a.fg=null;a.iA=null;a.yw=null;a.xI=null;a.w7=null;a.vi=0;a.Do=0;}
function CE(){var a=this;B.call(a);a.Gd=null;a.fu=0;}
function Dw(a,b,c){a.Gd=b;a.fu=c;}
function HA(){var a=this;CE.call(a);a.vs=null;a.ro=null;a.Ba=null;a.n5=0;a.z4=0;a.B$=0;}
var A_0=null;var A_4=null;function H2(){H2=Bl(HA);ASy();}
function AOU(){H2();return A_4.ed();}
function ASy(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=new HA;c=P(Ev,2);d=c.data;ANY();d[0]=A_5;d[1]=A_6;H2();Dw(b,C(86),0);e=0;f=0;g=0;h=0;i=0;j=d.length;k=0;while(k<j){a:{l=d[k];switch(l.q4.fu){case 0:f=f+l.g5|0;h=h+1|0;break a;case 1:e=e+l.g5|0;g=g+1|0;break a;default:}}i=i|1<<l.kh;k=k+1|0;}b.vs=c;b.n5=e;b.z4=f;b.B$=i;c=P(Ev,g);m=c.data;b.ro=c;c=P(Ev,h);n=c.data;b.Ba=c;e=0;o=0;f=e;while(o<j){b:{l=d[o];switch(l.q4.fu){case 0:g=e+1|0;n[e]=l;break b;case 1:g=f+1|0;m[f]=l;f=g;g=e;break b;default:}g=e;}o=o+1|0;e=g;}A_0
=b;c=P(HA,1);c.data[0]=b;A_4=c;}
var M7=G(0);
var UA=G(0);
var AD9=G(0);
var Hm=G();
function Ny(){Hm.call(this);this.D9=null;}
function AHY(){var a=this;Ny.call(a);a.Fm=0;a.od=0;a.mm=null;a.nQ=null;a.wb=null;}
function AUj(a,b){var c=new AHY();A6F(c,a,b);return c;}
function A6F(a,b,c){a.D9=b;b=new J;L(b);a.mm=b;a.nQ=B7(32);a.Fm=c;AHT();a.wb=A_7;}
function ADi(a,b,c,d){var e,$$je;e=a.D9;if(e===null)a.od=1;if(!(a.od?0:1))return;a:{try{e.nJ(b,c,d);break a;}catch($$e){$$je=Fe($$e);if($$je instanceof JE){}else{throw $$e;}}a.od=1;}}
function Zr(a,b,c,d){var e,f,g,h,i,j,k,l,$$je;e=b.data;f=AMo(b,c,d-c|0);e=Dh(Be(16,Bf(e.length,1024)));g=AL_(e,0,e.data.length);h=a.wb;i=new RJ;b=Dh(1);j=b.data;j[0]=63;HM();k=A_8;i.oT=k;i.oi=k;c=j.length;if(c&&c>=i.x7){i.Gc=h;i.tL=b.ed();i.Fi=2.0;i.x7=4.0;i.zN=B7(512);i.sm=Dh(512);k=A_9;if(k===null){i=new BU;Bm(i,C(87));N(i);}i.oT=k;i.oi=k;a:while(true){if(i.mf==3){f=new CS;X(f);N(f);}i.mf=2;b:{while(true){try{k=AG6(i,f,g);}catch($$e){$$je=Fe($$e);if($$je instanceof Bu){f=$$je;break a;}else{throw $$e;}}if(Jx(k))
{d=Cl(f);if(d<=0)break b;k=EL(d);}else if(II(k))break;h=!MX(k)?i.oT:i.oi;c:{if(h!==A_9){if(h===A_$)break c;else break b;}d=Cl(g);b=i.tL;l=b.data.length;if(d<l){k=A__;break b;}AFA(g,b,0,l);}FR(f,f.bf+LI(k)|0);}}l=II(k);ADi(a,e,0,g.bf);QN(g);if(!l){while(true){d=i.mf;if(d!=2&&d!=4){f=new CS;X(f);N(f);}f=Baa;if(f===f)i.mf=3;l=II(f);ADi(a,e,0,g.bf);QN(g);if(!l)break;}return;}}N(A0O(f));}i=new BU;Bm(i,C(88));N(i);}
function Bc(a,b){var c,d,e,f,g,h,i,j;Bq(BN(a.mm,b),10);b=a.mm;c=b.I;d=a.nQ;if(c>d.data.length)d=B7(c);e=0;f=0;if(e>c){b=new BL;Bm(b,C(89));N(b);}while(e<c){g=d.data;h=f+1|0;i=b.D.data;j=e+1|0;g[f]=i[e];f=h;e=j;}Zr(a,d,0,c);a.mm.I=0;}
function H8(){Hm.call(this);this.GS=null;}
function XS(a){a.GS=Dh(1);}
var Mk=G(H8);
var A_L=null;function ASS(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}}
function AI_(){var b;b=new Mk;XS(b);A_L=b;}
function Ev(){var a=this;CE.call(a);a.tN=null;a.q4=null;a.g5=0;a.tk=0;a.kh=0;}
var A_5=null;var A_6=null;var Bab=null;function ANY(){ANY=Bl(Ev);A10();}
function A84(a,b,c,d,e,f,g){var h=new Ev();WA(h,a,b,c,d,e,f,g);return h;}
function AOw(){ANY();return Bab.ed();}
function WA(a,b,c,d,e,f,g,h){ANY();Dw(a,b,c);a.tN=d;a.q4=e;a.g5=f;a.tk=g;a.kh=h;}
function A10(){var b;b=new Ev;AIB();WA(b,C(90),0,C(91),Bac,2,0,0);A_5=b;b=A84(C(92),1,C(93),Bac,2,0,1);A_6=b;Bab=I(Ev,[A_5,b]);}
function Nq(){var a=this;B.call(a);a.F5=null;a.Gv=null;}
function AJi(b){var c,d;if(GT(b))N(ALP(b));if(!ANj(Q(b,0)))N(ALP(b));c=1;while(c<M(b)){a:{d=Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(ANj(d))break a;else N(ALP(b));}}c=c+1|0;}}
function ANj(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
var M$=G(Nq);
var A_7=null;function AHT(){AHT=Bl(M$);AQ7();}
function AJu(a){var b,c;b=new UG;b.g4=C(94);HM();c=A_8;b.j2=c;b.o0=c;b.Gp=a;b.yb=0.3333333432674408;b.EU=0.5;b.yZ=Dh(512);b.BZ=B7(512);return b;}
function AQ7(){var b,c,d,e,f;b=new M$;AHT();c=P(BC,0);d=c.data;AJi(C(95));e=d.length;f=0;while(f<e){AJi(d[f]);f=f+1|0;}b.F5=C(95);b.Gv=c.ed();A_7=b;}
function Z6(){var a=this;B.call(a);a.gW=null;a.rh=null;a.ns=null;a.Cc=null;a.tv=null;a.tJ=null;}
function ALS(a,b,c){return $rt_wrapArray($rt_doublecls(),new $rt_globals.Float64Array(a.gW,b,c));}
function PY(a,b){var c,d,e,f,g,h,i,$$je;c=new BC;d=b;while(a.rh[d]){d=d+1|0;}d=d-b|0;e=$rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.gW,b,d));f=e.data;Fx();d=f.length;AHT();g=A_7;h=AL_(e,0,d);a:{try{i=AJu(g);HM();g=ALg(AIM(ANS(i,A_9),A_9),h);break a;}catch($$e){$$je=Fe($$e);if($$je instanceof GF){g=$$je;}else{throw $$e;}}h=new AFJ;h.lr=1;h.lM=1;h.jr=C(96);h.oj=g;N(h);}if(!g.bf&&g.eK==g.pi)c.co=g.i8;else{f=B7(Cl(g));e=f.data;c.co=f;Qi(g,f,0,e.length);}return c;}
function Yu(a,b){var c,d,e;c=new BC;d=b>>>1|0;e=d;while(a.ns[e]){e=e+1|0;}d=e-d|0;J0(c,$rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.gW,b,d)));return c;}
var Ix=G(CE);
var Bad=null;var Bac=null;var Bae=null;function AIB(){AIB=Bl(Ix);A01();}
function AQ2(a,b){var c=new Ix();ANt(c,a,b);return c;}
function ATt(){AIB();return Bae.ed();}
function ANt(a,b,c){AIB();Dw(a,b,c);}
function A01(){var b;Bad=AQ2(C(97),0);b=AQ2(C(98),1);Bac=b;Bae=I(Ix,[Bad,b]);}
var Op=G(H8);
var A_M=null;function ARf(a,b,c,d){var e;e=0;while(e<d){$rt_putStderr(b.data[e+c|0]&255);e=e+1|0;}}
function AKu(){var b;b=new Op;XS(b);A_M=b;}
function AJo(){BU.call(this);this.Eo=null;}
function ALP(a){var b=new AJo();AWL(b,a);return b;}
function AWL(a,b){X(a);a.Eo=b;}
var V4=G(EN);
function CA(){B.call(this);this.z=null;}
function EA(a,b){a.z=b;}
function A7G(a,b){return 0;}
var M9=G(0);
function AGa(){B.call(this);this.z6=null;}
function AWb(a,b){a.z6.setPointerCapture(b.pointerId);}
function AGb(){B.call(this);this.zh=null;}
function APL(a,b){a.zh.releasePointerCapture(b.pointerId);}
function PF(){var a=this;B.call(a);a.T=null;a.n=null;a.bw=null;}
function IG(){var a=this;B.call(a);a.pi=0;a.bf=0;a.eK=0;a.kp=0;}
function AEV(a,b){a.kp=(-1);a.pi=b;a.eK=b;}
function FR(a,b){var c,d,e;if(b>=0&&b<=a.eK){a.bf=b;if(b<a.kp)a.kp=0;return a;}c=new BU;d=a.eK;e=new J;L(e);Bq(V(H(V(H(e,C(99)),b),C(100)),d),93);Bm(c,K(e));N(c);}
function Cl(a){return a.eK-a.bf|0;}
function El(a){return a.bf>=a.eK?0:1;}
var ACb=G(0);
var Mc=G(IG);
function AKf(b){var c,d;if(b>=0)return AVs(0,b,B7(b),0,b,0);c=new BU;d=new J;L(d);V(H(d,C(101)),b);Bm(c,K(d));N(c);}
function AMo(b,c,d){return AVs(0,b.data.length,b,c,c+d|0,0);}
function Qi(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(c>=0){e=b.data;f=e.length;if(c<=f){g=c+d|0;if(g>f){h=new BL;i=new J;L(i);V(H(V(H(i,C(102)),g),C(103)),f);Bm(h,K(i));N(h);}if(Cl(a)<d){j=new O2;X(j);N(j);}if(d<0){j=new BL;k=new J;L(k);H(V(H(k,C(104)),d),C(105));Bm(j,K(k));N(j);}g=a.bf;l=0;m=g;while(l<d){n=c+1|0;o=m+1|0;e[c]=a.i8.data[m+a.q7|0];l=l+1|0;c=n;m=o;}a.bf=g+d|0;return a;}}b=b.data;j=new BL;d=b.length;k=new J;L(k);Bq(V(H(V(H(k,C(106)),c),C(100)),d),41);Bm(j,K(k));N(j);}
function N2(a,b){var c,d,e,f,g,h,i;c=0;d=M(b);if(a.ri){b=new K1;X(b);N(b);}e=d-c|0;if(Cl(a)<e){b=new Kg;X(b);N(b);}if(c>M(b)){f=new BL;d=M(b);b=new J;L(b);Bq(V(H(V(H(b,C(107)),c),C(100)),d),41);Bm(f,K(b));N(f);}if(d>M(b)){f=new BL;c=M(b);b=new J;L(b);V(H(V(H(b,C(108)),d),C(109)),c);Bm(f,K(b));N(f);}if(c>d){b=new BL;f=new J;L(f);V(H(V(H(f,C(107)),c),C(110)),d);Bm(b,K(f));N(b);}g=a.bf;while(c<d){h=g+1|0;i=c+1|0;ACg(a,g,Q(b,c));g=h;c=i;}a.bf=a.bf+e|0;return a;}
function NR(){var a=this;IG.call(a);a.oc=0;a.qP=null;a.E6=null;}
function AL_(b,c,d){var e,f,g;e=b.data;f=new AFz;g=e.length;d=c+d|0;AEV(f,g);A2y();f.E6=Baf;f.oc=0;f.qP=b;f.bf=c;f.eK=d;f.E$=0;f.yv=0;return f;}
function AFA(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.yv){e=new K1;X(e);N(e);}if(Cl(a)<d){e=new Kg;X(e);N(e);}if(c>=0){f=b.data;g=f.length;if(c<=g){h=c+d|0;if(h>g){i=new BL;j=new J;L(j);V(H(V(H(j,C(111)),h),C(103)),g);Bm(i,K(j));N(i);}if(d<0){e=new BL;i=new J;L(i);H(V(H(i,C(104)),d),C(105));Bm(e,K(i));N(e);}h=a.bf;k=h+a.oc|0;l=0;while(l<d){b=a.qP.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.bf=h+d|0;return a;}}b=b.data;e=new BL;d=b.length;i=new J;L(i);Bq(V(H(V(H(i,C(106)),c),C(100)),d),41);Bm(e,
K(i));N(e);}
function QN(a){a.bf=0;a.eK=a.pi;a.kp=(-1);return a;}
function Jb(){B.call(this);this.FM=null;}
var A_$=null;var A_9=null;var A_8=null;function HM(){HM=Bl(Jb);ATR();}
function AJ1(a){var b=new Jb();ANh(b,a);return b;}
function ANh(a,b){HM();a.FM=b;}
function ATR(){A_$=AJ1(C(112));A_9=AJ1(C(113));A_8=AJ1(C(114));}
var AMk=G();
var LC=G(Mc);
function AIc(){var a=this;LC.call(a);a.ri=0;a.q7=0;a.i8=null;}
function AVs(a,b,c,d,e,f){var g=new AIc();AYu(g,a,b,c,d,e,f);return g;}
function AYu(a,b,c,d,e,f,g){AEV(a,c);a.bf=e;a.eK=f;a.q7=b;a.ri=g;a.i8=d;}
function ACg(a,b,c){a.i8.data[b+a.q7|0]=c;}
function L7(){var a=this;B.call(a);a.Gc=null;a.tL=null;a.Fi=0.0;a.x7=0.0;a.oT=null;a.oi=null;a.mf=0;}
function OZ(){var a=this;B.call(a);a.iE=0;a.kV=0;}
var Baa=null;var A__=null;function AG9(a,b){var c=new OZ();ALt(c,a,b);return c;}
function ALt(a,b,c){a.iE=b;a.kV=c;}
function Jx(a){return a.iE?0:1;}
function II(a){return a.iE!=1?0:1;}
function Oo(a){return !SS(a)&&!MX(a)?0:1;}
function SS(a){return a.iE!=2?0:1;}
function MX(a){return a.iE!=3?0:1;}
function LI(a){var b;if(Oo(a))return a.kV;b=new DX;X(b);N(b);}
function EL(b){return AG9(2,b);}
function VU(a){var b,c;switch(a.iE){case 0:b=new Sr;X(b);N(b);case 1:b=new Xi;X(b);N(b);case 2:b=new VN;c=a.kV;X(b);b.FX=c;N(b);case 3:b=new Sc;c=a.kV;X(b);b.Hm=c;N(b);default:}}
function ALH(){Baa=AG9(0,0);A__=AG9(1,0);}
function AFs(){var a=this;B.call(a);a.vV=null;a.CD=null;a.B4=null;}
function IJ(){var a=this;B.call(a);a.bS=0;a.cP=0;a.dy=0;a.ja=0;}
function Bag(a,b,c,d){var e=new IJ();ADZ(e,a,b,c,d);return e;}
function ADZ(a,b,c,d,e){a.bS=d;a.cP=b;a.dy=c;a.ja=e;}
function ADp(a){return a.cP&&!a.bS&&!a.dy&&!a.ja?1:0;}
function AAY(a){return !a.cP&&!a.bS&&!a.dy&&!a.ja?1:0;}
function Rm(){var a=this;IJ.call(a);a.eD=null;a.bh=0;a.ku=0;a.BG=0;a.lW=0;}
var AJy=G();
function WJ(b,c){return (b+(c/2|0)|0)/c|0;}
function AAA(b,c,d){if(b<(2147483647/c|0))return WJ(Bb(b,c),d);return 0.5+c*b/d|0;}
function ID(b,c){return ((b+c|0)-1|0)/c|0;}
function G$(b){return b+0.5|0;}
function C7(b){return b+0.5|0;}
function Fo(b,c,d){return Be(b,Bf(c,d));}
function NQ(b,c){return AKU(b)/AKU(c);}
function PC(){var a=this;IJ.call(a);a.j=null;a.F6=null;}
var U8=G(0);
function Qo(){var a=this;B.call(a);a.xb=null;a.xc=null;}
function A20(a,b){var c,d;c=a.xb;d=a.xc;$rt_globals.console.info("paste plain string "+b);c.g(F2(b));DI(d);}
var W=G(0);
function AEe(){B.call(this);this.xF=null;}
function O1(a,b){a.xF.clipboardData.setData("text/plain",$rt_ustr(b));}
function AFz(){var a=this;NR.call(a);a.E$=0;a.yv=0;}
var AIO=G();
function Oa(){B.call(this);this.Fk=null;}
var Baf=null;var Bah=null;function A2y(){A2y=Bl(Oa);A8b();}
function AQX(a){var b=new Oa();AKx(b,a);return b;}
function AKx(a,b){A2y();a.Fk=b;}
function A8b(){Baf=AQX(C(115));Bah=AQX(C(116));}
var HJ=G(0);
function ES(a){return Wb(a.uE(),a.t());}
function Wb(b,c){var d;if(!b.data.length)return c;d=new J;L(d);return K(AIq(b,c,d));}
function AIq(b,c,d){var e,f;b=b.data;e=b.length;f=0;while(f<e){Bq(BN(d,b[f]),47);f=f+1|0;}return BN(d,c);}
var JF=G(0);
function P$(a,b,c){ADd(a,b,c,0,(-1));}
function Ma(){var a=this;B.call(a);a.iQ=null;a.hM=null;a.iB=null;}
function AJl(a,b){var c=new Ma();A0r(c,a,b);return c;}
function Bai(a,b,c){var d=new Ma();QO(d,a,b,c);return d;}
function AOz(b){var c,d,e,f,g,h,i;c=new Ma;d=null;e=b.webkitRelativePath;if(!(typeof e==='undefined'?1:0)&&e!==null&&e.length){e=e.split("/");if(!e.length)f=P(BC,0);else{f=P(BC,e.length-1|0);g=f.data;h=0;i=g.length;while(h<i){g[h]=F2(e[h]);h=h+1|0;}}}else f=P(BC,0);QO(c,d,b,f);return c;}
function A0r(a,b,c){QO(a,b,null,c);}
function QO(a,b,c,d){a.iQ=b;a.hM=c;a.iB=d;}
function EG(a){var b;b=a.iQ;return F2(b!==null?b.name:a.hM.name);}
function AO6(a){return a.iB;}
function WQ(a,b,c){var d,e,f;d=ANO(c);e=new WZ;e.us=b;b=a.hM;if(b!==null)b.text().then(Bz(e,"f"),Bz(d,"f"));else{b=a.iQ.getFile();f=new W0;f.Bx=e;f.Bw=d;b.then(Bz(f,"f"),Bz(d,"f"));}}
function ADd(a,b,c,d,e){var f,g;f=ANO(c);c=new AAW;c.s4=b;b=a.hM;if(b!==null)XD(a,d,e,c,f,b);else{g=a.iQ.getFile();b=new AFR;b.xl=a;b.xk=d;b.xn=e;b.xm=c;b.xo=f;g.then(Bz(b,"f"),Bz(f,"f"));}}
function XD(a,b,c,d,e,f){if(c>=0){c=b+c|0;f=f.slice(b,c);}else if(b)f=f.slice(b);f.arrayBuffer().then(Bz(d,"f"),Bz(e,"f"));}
function ANO(b){var c;c=new WH;c.xs=b;return c;}
function Oh(a){var b,c,d;if(a.hM===null)b=Wb(a.iB,EG(a));else{b=H5(BF(a));c=a.iB;d=EG(a);b=BN(A76(b),C(31));AIq(c,d,b);b=K(b);}return b;}
var J7=G(0);
function OV(){var a=this;B.call(a);a.iN=null;a.f4=null;a.k4=null;}
var A_Y=null;function A90(a,b){var c=new OV();AGV(c,a,b);return c;}
function A73(a,b,c){var d=new OV();ALO(d,a,b,c);return d;}
function AGV(a,b,c){a.iN=b;if(c.length)a.f4=ACl(c);else{a.f4=P(BC,0);a.k4=P(BC,0);}}
function ALO(a,b,c,d){a.iN=b;a.f4=c;a.k4=d;}
function ACl(b){var c,d,e,f;if(!b.length)c=P(BC,0);else{b=b.split('/');if(b===null)c=null;else{c=P(BC,b.length);d=c.data;e=0;f=d.length;while(e<f){d[e]=F2(b[e]);e=e+1|0;}}}return c;}
function Ia(a,b){var c,d;c=new AEH;d=a.iN.values();c.n_=a;c.z0=d;c.lN=b;ADw(c);}
function AAB(a){var b,c,d,e;b=a.k4;if(b===null){b=a.f4;c=b.data;d=JT(a);e=c.length;b=CV(b,e+1|0);b.data[e]=d;b=b;a.k4=b;}return b;}
function JT(a){return F2(a.iN.name);}
function A6$(a){return a.f4;}
function Jh(a){return Wb(a.f4,JT(a));}
function QE(b){var c,d,e;b=b.data;c=b.length;if(!c)return "";d=$rt_ustr(b[0]);e=1;while(e<c){d=d+'/'+$rt_ustr(b[e]);e=e+1|0;}return d;}
function AGJ(){A_Y=new Wu;}
var AEZ=G(0);
function AMB(){B.call(this);this.jk=null;}
function A8P(a){var b=new AMB();A3U(b,a);return b;}
function A3U(a,b){a.jk=b;}
function ZR(a){return $rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(a.jk));}
function E8(a){return $rt_wrapArray($rt_charcls(),new $rt_globals.Uint16Array(a.jk));}
function CP(a){return $rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(a.jk));}
function A0L(a){var b,c;b=a.jk.byteLength;c=new J;L(c);H(V(H(c,C(117)),b),C(118));return K(c);}
var Wu=G();
function A2J(a,b){$rt_globals.console.info("JsDirectoryHandle: "+b);}
function Or(){var a=this;L7.call(a);a.zN=null;a.sm=null;}
function AG6(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.zN;e=0;f=0;g=a.sm;a:{while(true){if((e+32|0)>f&&El(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;f=Bf(Cl(b)+j|0,i.length);Qi(b,d,j,f-j|0);e=0;}if(!El(c)){k=!El(b)&&e>=f?Baa:A__;break a;}i=g.data;j=Bf(Cl(c),i.length);l=new Y4;l.rx=b;l.Ag=c;k=AIl(a,d,e,f,g,0,j,l);e=l.wy;j=l.xx;if(k===null){if(!El(b)&&e>=f)k=Baa;else if(!El(c)&&e>=f)k=A__;}AFA(c,g,0,j);if(k!==null)break;}}FR(b,b.bf-(f-e|0)|0);return k;}
var RJ=G(Or);
function AIl(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(OY(h,2))break a;i=A__;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!Pm(l)){if((f+3|0)>g){j=j+(-1)|0;if(OY(h,3))break a;i=A__;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!C2(l)){i=EL(1);break a;}if
(j>=d){if(El(h.rx))break a;i=Baa;break a;}c=j+1|0;m=k[j];if(!Dq(m)){j=c+(-2)|0;i=EL(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(OY(h,4))break a;i=A__;break a;}k=e.data;o=E7(l,m);m=f+1|0;k[f]=(240|o>>18)<<24>>24;n=m+1|0;k[m]=(128|o>>12&63)<<24>>24;f=n+1|0;k[n]=(128|o>>6&63)<<24>>24;m=f+1|0;k[f]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.wy=j;h.xx=f;return i;}
var JE=G(EN);
var JX=G(0);
function Nf(){var a=this;B.call(a);a.mL=null;a.k$=null;}
function X4(a,b){var c;c=a.k$;a.k$=b;return c;}
function Lk(){var a=this;Nf.call(a);a.b2=null;a.cd=null;a.hl=0;a.ht=0;}
function NL(a){var b;b=L8(a);if(b==2){if(L8(a.cd)<0)a.cd=P9(a.cd);return Re(a);}if(b!=(-2))return a;if(L8(a.b2)>0)a.b2=Re(a.b2);return P9(a);}
function L8(a){var b,c;b=a.cd;c=b===null?0:b.hl;b=a.b2;return c-(b===null?0:b.hl)|0;}
function P9(a){var b;b=a.b2;a.b2=b.cd;b.cd=a;Fi(a);Fi(b);return b;}
function Re(a){var b;b=a.cd;a.cd=b.b2;b.b2=a;Fi(a);Fi(b);return b;}
function Fi(a){var b,c,d;b=a.cd;c=b===null?0:b.hl;b=a.b2;d=b===null?0:b.hl;a.hl=Be(c,d)+1|0;a.ht=1;b=a.b2;if(b!==null)a.ht=1+b.ht|0;b=a.cd;if(b!==null)a.ht=a.ht+b.ht|0;}
var AGO=G(CA);
function A86(a){var b=new AGO();A2i(b,a);return b;}
function A2i(a,b){var c,d;EA(a,b);b=$rt_globals.fetch("test.wasm");c=new YF;b=b.then(Bz(c,"f"));c=new YE;b=b.then(Bz(c,"f"));c=new YC;d=new YB;b.then(Bz(c,"f"),Bz(d,"f"));}
function ATG(a){}
function ASq(a,b,c){}
function If(){var a=this;CA.call(a);a.de=null;a.q=null;}
function AEU(a,b){var c,d,e;EA(a,b);a.de=ALv(0,0,64);c=new Vc;c.bH=new Bi;c.dg=CX(P(CK,0));c.c9=new Bi;c.q5=new Bi;c.nd=new B4;c.Ea=new B4;d=b.T;c.bO=d;e=b.bw;c.cn=e;c.cV=d.mN;c.dc=SN(e);d=b.n.nL;e=new AAP;e.uY=c;Z(d,e);d=b.n.m8;e=new AAO;e.xA=c;Z(d,e);Z(b.n.ho,c);Z(b.n.hP,c);a.q=c;Z(b.n.bK,new AB2);b=b.n.bK;c=a.q;BG(c);d=new AB1;d.yY=c;Z(b,d);}
function H1(a){EZ(a.z.T,a.de);}
function AIr(a,b,c){var d,e,f,g,h;a:{d=a.q;Ct(d.bH,b);e=d.ca;if(e!==c){d.ca=c;f=(B5(d.dg)).data;g=f.length;h=0;while(true){if(h>=g)break a;f[h].eq(e,c);h=h+1|0;}}}}
function Cg(){If.call(this);this.u=null;}
function FA(a,b){Gg(a,b,1);}
function Gg(a,b,c){var d,e,f;AEU(a,b);d=new AFO;e=a.q;d.bz=CX(P(Vp,0));d.F=e;a.u=d;Z(a.q.dg,d);Z(b.n.bZ,a.u);d=b.n.fR;e=a.u;BG(e);f=new X3;f.xq=e;Z(d,f);d=b.n.ct;e=a.u;BG(e);f=new X2;f.uI=e;Z(d,f);if(c){b=b.n.bZ;f=a.q.dc;d=new YP;d.x5=f;Z(b,d);}}
function AQ_(a){H1(a);Ko(a.u);}
function Hf(a,b,c){var d,e,f;AIr(a,b,c);d=(B5(a.u.bz)).data;e=d.length;f=0;while(f<e){b=d[f];if(AAF(b))Yf(b);f=f+1|0;}}
function QY(a,b){var c,d,e,f,g;c=a.u;d=0;e=(B5(c.bz)).data;f=e.length;g=0;while(g<f){d=e[g].Y.cI(b)|d;g=g+1|0;}return d;}
var EW=G(0);
function AJ7(a){a.ei(I8());}
function JY(a){a.ei(FD());}
function AKY(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=new Jr;c=new KK;d=new HN;AJv();Lx(d,Baj);M_(c,d,B0(Bak),B0(Bal),B0(Bam),B0(Bak),B0(Ban),B0(Bao),B0(Bap),B0(Baq),B0(Bar),B0(Bas));e=AMh(S(C(119)));f=(ANw()).data;g=f.length;h=P(KZ,g);i=h.data;j=0;while(j<g){i[j]=f[j].qt;j=j+1|0;}k=AM5(S(C(120)),S(C(121)),S(C(122)),S(C(123)));l=new Jt;m=new JC;AZl();d=Bat;Pu(m,d,Bau,Bav,Baw,Bax,d);Mx(l,m,ANT(),AJ9(S(C(124)),S(C(119)),Cs(0)),ANT(),AKy(1,0.07500000298023224),Bay,Baz);Mm(b,c,e,h,k,l,AGK(S(C(125)),S(C(126)),S(C(127)),
S(C(128))));a.ei(b);}
var Kc=G(0);
var E2=G(0);
function K$(){var a=this;Cg.call(a);a.H=null;a.L=null;a.jH=null;a.jn=0;a.lc=null;a.no=null;a.tP=null;a.oY=null;a.gr=null;}
function A$o(a){var b=new K$();AHe(b,a);return b;}
function AHe(a,b){var c,d,e;Gg(a,b,0);a.gr=A0f(a.q);c=I6(a.u);a.jH=c;a.H=G5(c);c=G5(a.jH);a.L=c;a.no=AJT(a.H,c);c=a.H;c.cb=1;O5(a.gr,c,a.L);c=a.H;d=new So;d.st=a;c.iZ=d;c=a.L;d=new Sl;d.uL=a;c.iZ=d;AMe(a,0);ND(a.q,a.H);Z(b.n.fR,a);Z(b.n.bZ,a);c=b.n.bK;d=new Sm;d.Ac=a;Z(c,d);c=b.n.bK;d=new GS;e=new Sf;e.CA=a;Hc(d,b,e);Z(c,d);Z(b.n.ho,a);Z(b.n.hP,a);b=b.n.ct;c=new Sg;c.BS=a;Z(b,c);JY(a);}
function Vt(a,b){if(a.H===b)a.jn=a.jn|1;if(a.L===b)a.jn=a.jn|2;if((a.jn&3)==3)AIV(a);}
function AMe(a,b){Js(a.H,b);Js(a.L,b);}
function AXP(a,b,c){if(DB(a.q,a.H))return JH(a.H,b,c);if(!DB(a.q,a.L))return 0;return JH(a.L,b,c);}
function ANA(a){if(DB(a.q,a.H))return V$(a,a.H);if(!DB(a.q,a.L))return null;return V$(a,a.L);}
function V$(a,b){var c;c=new Xe;c.z$=b;return c;}
function ALG(a,b,c){var d;d=EG(c);if(b!==a.H)a.oY=d;else a.tP=d;b=a.tP;if(b!==null&&a.oY!==null)GJ(a.z.bw,EG(c));else{if(b!==null)GJ(a.z.bw,b);b=a.oY;if(b!==null)GJ(a.z.bw,b);}}
function AIV(a){var b,c,d;Bc(Bg(),C(129));b=a.H.d.h;c=a.L.d.h;d=new S1;d.Af=a;AK1(b,c,d,a.z.bw);}
function ANB(a,b){a.H.fl=b;a.L.fl=b;}
function AUo(a,b){var c;c=QY(a,b);return Md(a.H,b)|Md(a.L,b)|c;}
function AOr(a){var b;H1(a);IR(a.H);IR(a.L);b=a.gr;AI8(b,b.jb.bO);Ko(a.u);}
function ASl(a){return Eo(0);}
function ASx(a){J2(a.H);J2(a.L);}
function ASw(a){K4(a.H);K4(a.L);}
function A8e(a,b){I3(a.H,b);I3(a.L,b);}
function A2C(a,b){K5(a.q,b);}
function AOu(a,b){if(G2(a.u,b)){MA(a.H);MA(a.L);}}
function AOJ(a,b,c){Hf(a,b,c);AIK(a,b,c);}
function AIK(a,b,c){var d,e,f,g,h,i;d=new Bi;e=Ck(20.0,c);f=new Bi;g=b.b/2|0;h=e/2|0;RQ(f,g-h|0,b.a);M8(a.H,d,f,c);i=b.b;d.b=(i-(i/2|0)|0)+h|0;M8(a.L,d,f,c);Y(a.gr.i,f.b,d.a);Y(a.gr.k,d.b-f.b|0,f.a);}
function AX5(a,b){BG(b);Gc(a.jH,b);Fb(a.H,b);Fb(a.L,b);a.gr.iS=b;}
function AKT(a,b){if(b.bh!=121)return 0;U6(a.z.bw,C(130),new ABX);return 1;}
function ALm(a,b){var c,d,e,f;if(DB(a.q,a.H)){c=a.jH;d=b.j;e=a.H;f=new Su;f.rA=a;Ja(c,d,e,a,a,a,f);}if(DB(a.q,a.L)){c=a.jH;b=b.j;d=a.L;e=new Sv;e.t2=a;Ja(c,b,d,a,a,a,e);}return 1;}
function A0b(a,b){var c,d;c=B3(a.H,b.j)&&Zi(a.H,b)?1:0;d=B3(a.L,b.j)&&Zi(a.L,b)?1:0;return !c&&!d?0:1;}
function AVT(a,b,c,d){var e,f;e=B3(a.H,b.j)&&P0(a.H,b,c,d)?1:0;f=B3(a.L,b.j)&&P0(a.L,b,c,d)?1:0;return !e&&!f?0:1;}
function ASI(a,b,c){var d,e,f,g,h,i,j,k;d=B3(a.H,b.j);e=B3(a.L,b.j);f=a.q;g=f.b5;h=g!==null?0:1;i=a.H;j=g!==i?0:1;k=g!==a.L?0:1;if(d&&!(!h&&!k))Cx(f,i);if(e&&!(!h&&!j))Cx(a.q,a.L);if(d){i=Yb(a.H,b,c);if(i!==null)return i;}return !e?null:Yb(a.L,b,c);}
function A7i(a,b,c){var d,e,f,g;d=B3(a.H,b.j);e=B3(a.L,b.j);f=d&&Uz(a.H,b,c)?1:0;g=e&&Uz(a.L,b,c)?1:0;return !f&&!g?0:1;}
function ATf(a,b,c,d){var e,f,g,h;e=B3(a.H,b.j);f=B3(a.L,b.j);g=e&&Mu(a.H,b,c,d)?1:0;h=f&&Mu(a.L,b,c,d)?1:0;return !g&&!h?0:1;}
function A7b(a){return ANA(a);}
var V_=G(K$);
function AUg(a){return Eo(1);}
function Rd(a,b,c){var d,e,f,g;d=$rt_globals.fetch($rt_ustr(c));e=new PS;d=d.then(Bz(e,"f"));f=new PU;f.u1=b;f.u0=c;g=new PT;d.then(Bz(f,"f"),Bz(g,"f"));}
var AJV=G();
function A6r(b){var c,d;if(M(b)>0){c=new J;L(c);H(H(c,C(131)),b);$rt_globals.console.info($rt_ustr(K(c)));}a:{d=(-1);switch(Kx(b)){case -1570047148:if(!Bk(b,C(132)))break a;d=17;break a;case -1509980539:if(!Bk(b,C(133)))break a;d=13;break a;case -1351411913:if(!Bk(b,C(134)))break a;d=5;break a;case -1073555521:if(!Bk(b,C(135)))break a;d=14;break a;case -1045861099:if(!Bk(b,C(136)))break a;d=18;break a;case -1045861098:if(!Bk(b,C(137)))break a;d=19;break a;case -811765794:if(!Bk(b,C(138)))break a;d=6;break a;case -785237654:if
(!Bk(b,C(139)))break a;d=11;break a;case -695287066:if(!Bk(b,C(140)))break a;d=20;break a;case -643550180:if(!Bk(b,C(141)))break a;d=28;break a;case -631889171:if(!Bk(b,C(142)))break a;d=9;break a;case -536831301:if(!Bk(b,C(143)))break a;d=26;break a;case -439438829:if(!Bk(b,C(144)))break a;d=21;break a;case -357667878:if(!Bk(b,C(145)))break a;d=22;break a;case -223304637:if(!Bk(b,C(146)))break a;d=2;break a;case -193916863:if(!Bk(b,C(147)))break a;d=23;break a;case 2129957:if(!Bk(b,C(148)))break a;d=1;break a;case 3343967:if
(!Bk(b,C(149)))break a;d=10;break a;case 3556498:if(!Bk(b,C(150)))break a;d=4;break a;case 91636708:if(!Bk(b,C(151)))break a;d=25;break a;case 485517998:if(!Bk(b,C(152)))break a;d=7;break a;case 544901384:if(!Bk(b,C(153)))break a;d=3;break a;case 654963552:if(!Bk(b,C(154)))break a;d=24;break a;case 1030621992:if(!Bk(b,C(155)))break a;d=16;break a;case 1164939699:if(!Bk(b,C(156)))break a;d=29;break a;case 1465713255:if(!Bk(b,C(157)))break a;d=8;break a;case 1554501643:if(!Bk(b,C(158)))break a;d=15;break a;case 1609169232:if
(!Bk(b,C(159)))break a;d=12;break a;case 1826008729:if(!Bk(b,C(160)))break a;d=30;break a;case 2090248989:if(!Bk(b,C(161)))break a;d=27;break a;default:}}b:{switch(d){case 1:break;case 2:b=new Wi;break b;case 3:case 4:b=new Wf;break b;case 5:b=new We;break b;case 6:b=new Wh;break b;case 7:b=new Wg;break b;case 8:b=new Wm;break b;case 9:case 10:b=new Wl;break b;case 11:b=new Wo;break b;case 12:b=new Wn;break b;case 13:b=new AC2;break b;case 14:b=new AC1;break b;case 15:b=new AC0;break b;case 16:b=new ACL;break b;case 17:b
=new ACK;break b;case 18:b=new ACI;break b;case 19:b=new ACH;break b;case 20:b=new ACG;break b;case 21:b=new ACF;break b;case 22:b=new ACE;break b;case 23:b=new ACP;break b;case 24:b=new ACO;break b;case 25:b=new ACN;break b;case 26:b=new ACM;break b;case 27:b=new ACV;break b;case 28:b=new ACU;break b;case 29:b=new ACT;break b;case 30:b=new ACS;break b;default:b=new ACR;break b;}b=new Wj;}return b;}
var AG4=G();
var JB=G(0);
var YF=G();
function ARl(a,b){return b.arrayBuffer();}
var YE=G();
function AUS(a,b){var c,d;c=new Z5;d=new Z3;return $rt_globals.WebAssembly.instantiate(b,ASY(Bz(c,"f"),Bz(d,"f")));}
var YC=G();
function AVm(a,b){APH(b);}
var YB=G();
function A0u(a,b){AJ4(b);}
function U0(){B.call(this);this.yC=null;}
function A7M(a,b){It(a.yC.H,b);}
function AIS(){B.call(this);this.Cg=null;}
function A9X(a){var b=new AIS();A61(b,a);return b;}
function A61(a,b){a.Cg=b;}
function A2S(a,b){It(a.Cg.L,b);}
var Wj=G();
function AXc(a,b){return A$o(b);}
var Wi=G();
function AOO(a,b){return A9s(b);}
var Wf=G();
function A1a(a,b){return A9D(b);}
var We=G();
function A4b(a,b){var c,d,e,f,g;c=new ADj;EA(c,b);d=(I8()).bx.eE;c.GG=d;c.lV=AN0(d);c.jD=new Bi;c.iF=new Bi;c.dI=Ls();c.ej=Ls();c.n1=Eo(1);b=b.n.bZ;d=new Yk;d.mZ=c;Z(b,d);b=c.n1.data[D0()*c.n1.data.length|0];d=IV(c.z.T,b,10);c.nO=d;Cr(c.z.T.cr,d);e=EC(c.z.T.cr,C(162));d=c.z.T.cr;f=new J;L(f);Bq(f,43);H(f,b);g=C7(e+EC(d,K(f)));c.kf=g;c.jd=BR(c.jd,AGs(c,1,g,b,c.nO,c.z.T));c.jc=BR(c.jc,AGs(c,0,c.kf,b,c.nO,c.z.T));Sw(c,c.dI,c.jd);Sw(c,c.ej,c.jc);Cv(c.dI.bd,1.0,1.0,1.0,1.0);FE(c.dI,c.lV);Cv(c.ej.bd,1.0,1.0,1.0,1.0);FE(c.ej,
c.lV);b=Bg();g=c.kf;d=new J;L(d);V(H(d,C(163)),g);Bc(b,K(d));return c;}
var Wh=G();
function AQ5(a,b){var c,d,e;c=new Zm;FA(c,b);d=new Yg;d.oO=new Bi;d.pe=new Bi;c.Ad=d;c.fA=AMm();c.d1=AMm();c.px=DC(C(164),25.0);Z(c.q.dg,c);d=b.n.bK;e=new ADO;e.v3=c;Z(d,e);Z(b.n.bZ,c);b=b.n.ct;d=new ADK;d.wY=c;Z(b,d);AGu(c.d1);BM(c.de,Cs(43));b=FB();Kf(c.fA,b);Kf(c.d1,b);b=c.fA;b.lA=new ADL;d=c.d1;d.lA=new ADM;d.p7=new Q_;d.ya=new Ra;N5(b,(S8(0)).mr);N5(c.d1,(S8(0)).mr);return c;}
var Wg=G();
function AYD(a,b){var c,d,e;c=new ACJ;FA(c,b);Z(c.q.dg,c);BM(c.de,Cs(43));d=b.n.bK;e=new V8;e.Ex=c;Z(d,e);b=b.n.ct;d=new V9;d.C4=c;Z(b,d);return c;}
var Wm=G();
function AQI(a,b){var c,d,e;c=new YK;AEU(c,b);c.iv=BO();c.gQ=BO();c.s$=S(C(165));c.kT=WD();c.iu=0;d=c.q.dg;e=new P2;e.zt=c;Z(d,e);Z(b.n.bZ,c);d=b.n.bK;e=new P1;e.w8=c;Z(d,e);b=IV(b.T,C(164),35);c.kY=b;c.m9=AKZ(Fp(b));BM(c.de,S(C(166)));return c;}
var Wl=G();
function ATx(a,b){var c,d,e,f;c=new Uk;EA(c,b);c.iy=AJ3();c.fs=0;c.wf=500;c.s_=I9(0,0,0,255,new B4);c.nl=20;c.yO=20;c.B5=I8();d=b.n.bZ;e=new Yw;e.mv=c;f=new Vx;f.BY=e;e.sT=f;Z(d,e);d=b.n.fR;e=new AB3;e.Cx=c;Z(d,e);c.e3=b.T;c.y_=SN(b.bw);AAx(c.iy,IV(c.e3,C(164),c.yO),c.nl,c.e3.mN);c.jB=JJ();return c;}
var Wo=G();
function A5J(a,b){var c,d,e;c=new LJ;FA(c,b);c.zM=ALI();c.ng=Dh(16384);d=BaA.data.length;c.lj=BI(d);c.oG=BI(d);b=b.n.ct;e=new RT;e.uo=c;Z(b,e);b=c.q.dg;e=new RS;e.Cf=c;Z(b,e);return c;}
var Wn=G();
function AOs(a,b){var c,d,e,f,g,h,i;c=new Y3;FA(c,b);d=b.n.ct;e=new SX;e.zw=c;Z(d,e);d=b.bw;f=new QM;f.Fx=c;g=P(B,1);g.data[0]=C(167);CG(d,f,C(168),g);h=new QL;h.Gz=c;g=P(B,1);g.data[0]=ALZ([1,2,3,4,5]);CG(d,h,C(169),g);h=new QI;h.HB=c;i=P(B,1);i.data[0]=A85([1,2,3,4,5]);CG(d,h,C(170),i);h=new QG;h.GJ=c;g=P(B,1);g.data[0]=DK([1,2,3,4,5]);CG(d,h,C(171),g);d=b.n.bK;e=new GS;h=new SW;h.B2=c;Hc(e,b,h);Z(d,e);return c;}
var AC2=G();
function AOH(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=new Ym;Kl(c,b);c.fq=IE(0,0,300,300);c.hf=UE(0,0,3,3);d=b.T;b=b.n.bZ;e=new ADW;e.nU=c;Z(b,e);b=AN7(d);c.CL=b;Ga(c.fq,b);Gl(c.fq);b=c.fq.bq;F5();BM(b,BaB);BM(c.fq.bd,DF(204,120,50));AID();e=BaC;f=Dh((e===e?20:8)*5|0);g=f.data;h=0;i=0;while(h<5){j=0;while(j<5){k=((j^h)&1?0:255)<<24>>24;l=i+1|0;g[i]=k;i=l+1|0;g[l]=k;l=i+1|0;g[i]=k;i=l+1|0;g[l]=(-1);j=j+1|0;}h=h+1|0;}a:{m=C5(d);switch(e.fu){case 0:h=33321;break a;case 1:h=32856;break a;default:}b=new Fn;X(b);N(b);}b:
{Yz(m,5,5,h);b=m.d6.er;switch(e.fu){case 0:l=6403;break b;case 1:l=6408;break b;default:}b=new Fn;X(b);N(b);}d=f.data;e=d.buffer;n=d.byteOffset;o=d.byteLength;p=new $rt_globals.Uint8Array(e,n,o);b.texSubImage2D(3553,0,0,0,5,5,l,5121,p);c.oC=m;Y(c.hf.v,BW(m),CY(c.oC));BM(c.hf.bq,c.qZ);return c;}
var AC1=G();
function A2Y(a,b){var c,d,e;c=new Ui;Kl(c,b);c.hy=IE(0,0,300,300);c.nj=new Bi;c.le=new Bi;c.kw=new Bi;d=b.T;b=b.n.bZ;e=new Zu;e.la=c;Z(b,e);b=AN7(d);c.r2=b;Ga(c.hy,b);Gl(c.hy);b=c.hy.bq;F5();BM(b,BaB);BM(c.hy.bd,DF(204,120,50));return c;}
var AC0=G();
function AUz(a,b){var c,d,e,f;c=new ACu;EA(c,b);c.FJ=20;c.Hn=11;c.F7=220;c.mX=new Bi;c.GR=5000;c.iT=1;c.hq=I(HN,[Cs(0),Cs(255)]);c.e_=b.T;d=b.n.bZ;e=new AAk;e.mK=c;f=new Wz;f.uK=e;e.rR=f;Z(d,e);b=b.n.fR;d=new XJ;d.sA=c;Z(b,d);b=Ib(c.e_,200,220);c.pF=b;HY(b,C(164),20.0);b=Ib(c.e_,200,20);c.hi=b;HY(b,C(164),20.0);c.i$=JJ();return c;}
var ACL=G();
function ARp(a,b){var c,d,e;c=new KX;Kl(c,b);Z(b.n.bZ,c);d=b.n.bK;e=new AFw;e.x_=c;Z(d,e);Z(b.n.ho,new AFv);d=b.n.ho;e=new AFu;e.tB=c;Z(d,e);Z(b.n.hP,new AFt);d=b.n.hP;e=new AFx;e.BL=c;Z(d,e);b=!Xo(b.bw)?C(172):C(173);d=new J;L(d);H(H(d,C(174)),b);$rt_globals.console.info($rt_ustr(K(d)));return c;}
var ACK=G();
function AYS(a,b){var c,d;c=new T2;Kl(c,b);c.vD=Cs(20);c.gZ=IE(0,0,300,300);c.xa=DC(C(13),80.0);b=b.n.bK;d=new TG;d.FO=c;Z(b,d);return c;}
var ACI=G();
function A6Q(a,b){var c;c=new UV;PA(c,b);HI(c.cw,0,0,300,300);Y(c.dK,300,300);return c;}
var ACH=G();
function ATI(a,b){var c;c=new UU;PA(c,b);c.gx=new Bi;c.g0=new Bi;Y(c.ex,150,140);Y(c.dK,500,100);Y(c.fN,150,200);Y(c.e$,500,250);return c;}
var ACG=G();
function A5L(a,b){var c,d,e;c=new XR;FA(c,b);c.Eh=3;c.xK=DC(C(175),20.0);c.kK=WD();c.rl=1;Z(c.q.dg,c);BM(c.de,Cs(43));d=b.n.bK;e=new Qp;e.AX=c;Z(d,e);b=b.n.ct;d=new Qr;d.w6=c;Z(b,d);return c;}
var ACF=G();
function AOj(a,b){return A96(b);}
var ACE=G();
function A5x(a,b){var c,d,e,f;c=new Ry;KJ(c,b);BM(c.de,Cs(43));c.mY=I6(c.u);d=b.n.bK;e=new GS;f=new Qs;f.De=c;Hc(e,b,f);Z(d,e);b=b.n.ct;d=new Qt;d.AT=c;Z(b,d);return c;}
var ACP=G();
function A4J(a,b){var c,d;c=new Tb;Gg(c,b,1);c.n2=FD();Z(c.q.dg,c);BM(c.de,Cs(43));b=b.n.ct;d=new Zn;d.zD=c;Z(b,d);return c;}
var ACO=G();
function AQd(a,b){var c,d,e,f;c=new Ss;Gg(c,b,1);c.nq=FD();Z(c.q.dg,c);BM(c.de,Cs(43));d=b.n.bK;e=new GS;f=new Q1;f.ur=c;Hc(e,b,f);Z(d,e);b=b.n.ct;d=new Q0;d.wK=c;Z(b,d);return c;}
var ACN=G();
function A16(a,b){var c;c=new AAE;KJ(c,b);c.xd=FD();BM(c.de,Cs(43));return c;}
var ACM=G();
function ASk(a,b){return A9F(b);}
var ACV=G();
function ASm(a,b){var c,d,e;c=new QC;KJ(c,b);c.wD=FD();BM(c.de,Cs(43));d=b.n.ct;e=new Wd;e.Eu=c;Z(d,e);b=b.n.bK;d=new Wc;d.ve=c;Z(b,d);return c;}
var ACU=G();
function AZy(a,b){var c,d,e;c=new ABp;KJ(c,b);c.p6=FD();BM(c.de,Cs(43));d=b.n.ct;e=new RV;e.C7=c;Z(d,e);b=b.n.bK;d=new RU;d.E4=c;Z(b,d);return c;}
var ACT=G();
function AQq(a,b){var c,d;c=new Vu;FA(c,b);c.hC=FD();Z(c.q.dg,c);BM(c.de,Cs(43));b=b.n.ct;d=new AC4;d.rV=c;Z(b,d);return c;}
var ACS=G();
function A4H(a,b){var c;c=new Yn;Gg(c,b,0);c.Dj=FD();return c;}
var ACR=G();
function AXv(a,b){var c,d;c=new PK;AKl(c,b);ANk(c.dU);b=b.n.bK;d=new Vj;d.s0=c;Z(b,d);return c;}
function CH(){var a=this;B.call(a);a.i=null;a.k=null;a.bY=0.0;}
function AYC(){var a=new CH();Fl(a);return a;}
function Fl(a){a.i=new Bi;a.k=new Bi;}
function AVY(a){}
function A33(a){return BJ(0,0);}
function Kn(a,b,c,d){var e;if(!Ku(a.i,b)){a.sH(b);Ct(a.i,b);}if(!Ku(a.k,c)){a.pX(c);Ct(a.k,c);}e=a.bY;if(e!==d){a.bY=d;a.mh(e,d);}}
function DH(a,b){return Ck(b,a.bY);}
function B3(a,b){return GK(b,a.i,a.k);}
function ANV(a,b){var c,d,e,f;c=a.i;d=c.b;e=c.a;f=a.k;ASn();Bw(b,d,e,f,BaD);}
function AEB(a,b){var c;c=a.i;Mw(b,c.b,c.a,a.k);}
function A0l(a,b){return 0;}
function ATB(a,b){}
function AXJ(a,b){}
function A5k(a,b,c){}
function AXR(a){}
function ASf(a,b,c,d){return 0;}
function APT(a,b,c){return null;}
function AUk(a,b,c){return 0;}
function AXu(a,b){return 0;}
function A5a(a,b,c,d){return 0;}
function AHL(){var a=this;CH.call(a);a.jb=null;a.l4=null;a.l5=null;a.l2=null;a.l3=null;a.eR=null;a.g6=null;a.g7=null;a.iS=null;}
function A0f(a){var b=new AHL();AQh(b,a);return b;}
function AQh(a,b){Fl(a);a.l4=new Bi;a.l5=new Bi;a.l2=new Bi;a.l3=new Bi;a.jb=b;}
function O5(a,b,c){a.g6=b;a.g7=c;}
function AI8(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=a.i;Bw(b,c.b,c.a,a.k,a.iS.bx.eE);if(a.eR===null)return;d=Cw(a.jb,2.0);e=He(a.eR,a.g6.l1(),1);f=He(a.eR,a.g6.lb(),1);g=He(a.eR,a.g7.l1(),0);h=He(a.eR,a.g7.lb(),0);i=Bf(e,g);j=Be(f,h);g=BQ(i,j);if(g<=0)Cc(b,1);k=a.g6.lB();l=a.g6.mH();m=a.g7.mH();n=a.g7.lB();o=a.jb.q5;while(i<=j){p=a.eR.iW.data[i];if(p.pW){q=a.g6.h_(p.iD);r=a.g6.h_(p.iD+p.jE|0);s=a.g7.h_(p.iC);t=a.g7.h_(p.iC+p.jC|0);Y(a.l4,a.i.b,q);Y(a.l2,a.i.b,r);Y(a.l5,a.i.b+a.k.b|0,s);Y(a.l3,
a.i.b+a.k.b|0,t);u=Be(Bf(q,s),a.i.a);v=Bf(Be(r,t),a.i.a+a.k.a|0);if(v>u){Y(o,a.k.b,v-u|0);c=a.iS;w=Is(c.d3,c,p.pW);if(q==r)Sp(a,b,q,s,d,k.b,l.b,w,a.l4,a.l2);if(s==t)Sp(a,b,s,q,d,n.b,m.b,w,a.l5,a.l3);AGB(b,a.i.b,u,o,a.l4,a.l5,a.l2,a.l3,w);}}i=i+1|0;}if(g<=0)Cc(b,0);}
function Sp(a,b,c,d,e,f,g,h,i,j){var k;k=a.jb.c9;Y(k,g,e);if(d>=c)j.a=j.a+e|0;else{c=c-e|0;i.a=i.a-e|0;}Bw(b,f,c,k,h);}
function AIf(){var a=this;B.call(a);a.cj=null;a.dR=null;a.i2=null;}
function I6(a){var b=new AIf();APj(b,a);return b;}
function APj(a,b){a.cj=b;}
function Gc(a,b){var c;a.i2=b;c=a.dR;if(c!==null)Ex(c,b.cc);c=a.cj.ew;if(c!==null)HQ(c,b.cc,b.fZ);}
function ABk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;f=null;g=d.d;h=ASD();i=c.p;j=0;while(j<i){if(f===null){k=(BK(c,j)).bt;l=ABZ(F7(B9(g.h,k)));m=ACx(g.fL);}else{n=f.data;k=n[j].qA.oe;l=!BV(g.fL,n[j].mO)?C(22):ABZ(F7(B9(g.h,k)));m=ACx(n[j].mO);}if(M(l)>153){o=Cz(l,0,150);n=new J;L(n);H(H(n,o),C(176));l=K(n);}if(M(m)>153){n=Cz(m,0,150);o=new J;L(o);H(H(o,n),C(176));m=K(o);}n=Dr(k+1|0);if(f!==null){p=f.data;o=null;p=p[j];}else{p=null;o=BK(c,j);}if(f!==null){q=new AFK;q.tF=d;q.tG=p;}else{q=new AFL;q.Dm=d;q.Dl
=o;}XZ(h,m,n,l,q);j=j+1|0;}r=AFh(h);if(a.dR!==null)AC$(a);c=a.cj.F;g=new SF;f=new ACs;f.rO=a;f.rP=d;ANQ(g,c,f);YV(g,r);d=a.i2;XU(g,d.cc,d.Dv);d=AGP(c);a.dR=d;d.it=d.it|1;d=G_(g,c);f=a.i2.cc;JQ(d,f.nR,f.pN);LP(a.dR,d);Ex(a.dR,a.i2.cc);d=a.dR;f=new J;L(f);H(H(f,C(177)),e);C0(d,K(f));DY(a.cj,a.dR);d=a.dR;i=(d.U.k.a+Cw(d.Z,2.0)|0)+Cw(c,2.0)|0;s=(g.et+g.fc|0)+g.h9|0;t=Cw(g.b3,5.0);e=BJ(Fo(t,b.b,g.b3.bH.b-s|0),Fo(i,b.a,g.b3.bH.a-g.c3.a|0));AAf(g);Lz(g);i=Ey(g);s=g.cf.data.length;i=Bb(i,s)+Bb(g.ef,s+1|0)|0;Y(g.c3,
g.k.b,i);i=(g.et+g.fc|0)+g.h9|0;b=g.b3;s=(b.bH.b-e.b|0)-Cw(b,5.0)|0;b=g.b3;t=(b.bH.a-e.a|0)-Cw(b,5.0)|0;d=BJ(Bf(i,s),Bf(g.c3.a,t));Ef(a.dR,e,d);Cx(c,g);}
function AC$(a){IW(a.cj,a.dR);Kv(a.dR);a.dR=null;}
function S6(a,b,c){var d,e;d=a.cj;e=a.i2;E5(d,e.cc,e.fZ,b,c);}
function Ja(a,b,c,d,e,f,g){S6(a,b,ABP(JK(a,c,g,d,e,f),b));}
function JK(a,b,c,d,e,f){var g;g=new Uy;g.g1=a;g.bB=b;g.su=c;g.jQ=e;g.pn=f;g.m_=d;return g;}
function AHt(b){var c;c=new Ti;c.BO=b;return c;}
var Fs=G(0);
function A35(a){}
function ARv(a){}
function AOp(a,b,c){return 0;}
function AYv(a){return null;}
var Sa=G(0);
var M6=G(0);
function AHQ(){var a=this;CH.call(a);a.ch=null;a.bn=null;a.lx=null;a.DS=0;a.pl=null;a.el=null;a.oI=0;a.h8=0.0;a.m4=null;a.E9=null;a.gt=null;a.bb=0;a.dt=0;a.d=null;a.fW=null;a.eP=null;a.fh=null;a.CS=0;a.BA=0;a.dk=0;a.cs=0;a.cB=0;a.iM=null;a.gn=null;a.f0=null;a.j8=0;a.kQ=0;a.Hr=0;a.Er=0;a.lJ=0;a.mE=0;a.qX=0;a.eC=0;a.dz=null;a.fT=null;a.fl=0;a.cb=0;a.Ee=null;a.kO=null;a.AQ=null;a.vQ=null;a.iZ=null;a.bC=0;a.df=null;a.l9=null;a.tK=0;a.sw=null;a.wr=null;}
function G5(a){var b=new AHQ();AVX(b,a);return b;}
function AVX(a,b){var c,d,e;Fl(a);a.DS=0;a.pl=P(T,10);a.el=A11();a.h8=16.0;a.m4=C(164);a.d=A9W(P(BC,0),null,null);c=new AFZ;c.zZ=CX(P(N$,0));c.DO=CX(P(N$,0));c.rG=CX(P(ACY,0));c.w0=CX(P(AAG,0));c.wF=CX(P(GB,0));c.CG=CX(P(T5,0));a.fW=c;a.fh=P(FO,0);a.iM=BJ(1,0);a.gn=JJ();a.f0=JJ();a.j8=0;a.kQ=1;a.lJ=1;a.mE=1;a.qX=1;a.eC=3;a.dz=AJ3();a.fT=C(178);a.fl=0;a.cb=0;c=DG();BG(c);d=new Zc;d.Fr=c;a.kO=d;a.bC=0;c=new Zb;c.rs=a;a.sw=c;c=new Za;c.uy=a;a.wr=c;c=b.cj.F;a.ch=c;a.bn=c.bO;a.lx=b;b=ATi(c.cV);a.df=b;a.gt=b.hG;e
=a.pl.data;b=new Y_;b.CW=a;e[1]=b;b=new Zg;b.y4=a;e[2]=b;b=new Zf;b.vn=a;e[3]=b;b=new Ze;b.xY=a;e[4]=b;b=new Zd;b.sh=a;e[5]=b;b=new Y$;b.Bb=a;e[6]=b;LG(a.d,a,G7(a));}
function M8(a,b,c,d){Kn(a,b,c,d);ACz(a,b,c,d);}
function AU5(a,b,c){W7(a,a.m4,a.h8);QV(a.df,c);}
function A7N(a,b,c){a.AQ=b;a.vQ=c;}
function ACz(a,b,c,d){var e;a.dk=Ck(80.0,d);a.cs=Ck(1.0,d);a.cB=Ck(10.0,d);e=!a.cb?b.b:(b.b+c.b|0)-IT(a)|0;Y(a.ch.c9,e,b.a);TP(a.dz,a.ch.c9,Bf(IT(a),c.b),c.a,d);b=a.el;e=Ck(2.0,d);b.fe.v.b=e;}
function A1u(a){a.oI=1;OK(a);}
function AZp(a){a.oI=0;}
function OK(a){AAr(a.el,NA(G7(a)));}
function Fb(a,b){var c,d;a.eP=b;c=a.el;d=b.bx.DN;BM(c.fe.bd,d);c=a.gn;d=b.bx;IA(c,d.mo,d.mu);c=a.f0;b=b.bx;IA(c,b.mo,b.mu);}
function J2(a){Pn(a,a.df.dw.pf,a.h8+1.0);}
function K4(a){var b;b=a.h8;if(b<=7.0)return;Pn(a,a.df.dw.pf,b-1.0);}
function I3(a,b){Pn(a,b,a.h8);}
function AVM(a,b){K5(a.ch,b);}
function Pn(a,b,c){if(a.ch.ca!==0.0){W7(a,b,c);J3(G7(a));}a.h8=c;a.m4=b;}
function MA(a){var b,c,d;b=a.df;c=a.ch.cV;d=a.bn;b.jm=c;if(b.ia.jW!=c&&b.d5)AGm(b,d);Uu(a.fh);I7(a.dz);OO(a);}
function W7(a,b,c){var d,e,f,g,h,i,j;d=a.bY;e=c*d;Ck(c,d);f=a.df.dw;d=f===null?0.0:f.pZ;if(!(e===d&&BV(b,a.m4))){I7(a.dz);Ph(a.fh);g=a.d.h.E.data;h=g.length;i=0;while(i<h){Fj(g[i]);i=i+1|0;}j=a.df;f=a.bn;j.dw=ALL(b,e,300,600,j.hG,f);f=a.df;a.E9=f.dw;a.bb=TT(f,1.25,a.bn);a.dt=C7(a.df.dw.q6);a.el.fe.v.a=Fp(a.df.dw);i=a.bb;f=new J;L(f);b=H(H(f,C(179)),b);Bq(b,32);V(H(Di(b,e),C(180)),i);$rt_globals.console.info($rt_ustr(K(f)));if(BaE){h=NZ(a.df.dw,a.bb);b=new J;L(b);V(H(b,C(181)),h);$rt_globals.console.info($rt_ustr(K(b)));}a.d.iX
=Ho(Gn(a),a.d.C,a.bn.cr,a.gt);IC(a);OO(a);}}
function AZP(a){Ph(a.fh);Z$(a.df);I7(a.dz);}
function PB(a){return Bb(CI(a.d.h)+5|0,a.bb);}
function Ly(a){return Be(PB(a)-a.k.a|0,0);}
function AC_(a){return Be(a.j8-GL(a)|0,0);}
function GL(a){var b;b=!a.cb?0:a.dt+a.cB|0;return Be(1,(a.k.b-a.dk|0)-b|0);}
function IT(a){return a.cb?a.dk:a.dk-a.cB|0;}
function Ez(a){return a.k.a;}
function Md(a,b){var c,d,e;c=a.d.h;if(ADG(c)&&b-c.BV>0.03125?1:0){d=a.tK;e=a.d.h.cE;if(d!=e){a.tK=e;ABH(a);}}if(a.bb)AC6(a);d=ADP((a.bC+a.Hr|0)-a.Er|0,Ly(a));e=a.bC==d?0:1;if(e)Gp(a,d);return !ADb(a.el,b)&&!e&&!a.DS?0:1;}
function Jd(a,b){var c,d;b=ADP(b,AC_(a));c=a.d;d=b==c.eg?0:1;if(d)c.eg=b;if(d){c=a.AQ;if(c!==null)c.e();}}
function Gp(a,b){var c;if(ALY(a,b)){c=a.vQ;if(c!==null)c.e();}}
function ALY(a,b){var c,d;c=ADP(b,Ly(a));d=c==a.bC?0:1;if(d){a.bC=c;a.d.nt=c/a.bb;}return d;}
function AJH(a){return BJ((IT(a)+a.cs|0)+a.cB|0,a.bb);}
function AWG(a){return a.bb;}
function A3r(a,b){IR(a);}
function IR(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;b=ID(a.k.a,a.bb)+7|0;c=a.fh;if(c.data.length<b)a.fh=AA$(b,c,a.df,a.CS,a.BA,a.d.h);Cc(a.bn,0);Oj(a.bn,a.i,a.k);b=a.bb;d=a.el;e=(b-d.fe.v.a|0)/2|0;b=a.d.iX-(Uw(d)/2|0)|0;d=a.d;f=b-d.eg|0;g=!a.cb?a.dk:(a.cs+a.cB|0)+a.dt|0;VT(a.el,g+f|0,(e+Bb(d.y,a.bb)|0)-a.bC|0);h=CI(a.d.h);i=Vr(a);j=Vq(a);a.CS=i;a.BA=j;k=!a.cb?a.i.b+a.dk|0:((a.i.b+a.cs|0)+a.cB|0)+a.dt|0;l=GL(a);m=a.d.mj;n=DH(a,40.0);o=i;while(o<=j&&o<h){p=B9(a.d.h,o);q=AEE(a,o);Zo(q,p,a.bn,a.bb,
l,a.d.eg,o,o%a.fh.data.length|0);a.j8=Be(a.j8,F1(p)+n|0);g=a.bb;r=Bb(g,o)-a.bC|0;s=m===null?null:m.data[o];r=a.i.a+r|0;t=a.bn;u=a.d.eg;v=a.eP;d=AMX(Bn(a),o);if(d!==null){if(d.a==(-1))d.a=p.W;d.b=Ho(p,d.b,a.bn.cr,a.gt);d.a=Ho(p,d.a,a.bn.cr,a.gt);}w=a.d;Rf(q,r,k,t,l,g,u,v,d,w.ju,w.i_,w.y!=o?0:1,m===null?0:1,s);o=o+1|0;}v=a.ch.c9;o=i;while(o<=j&&o<h&&a.lJ){q=AEE(a,o);r=Bb(a.bb,o)-a.bC|0;w=Bn(a);if(!DE(w))u=0;else{d=EF(w);w=Gu(w);u=d.Q<=o&&o<w.Q?1:0;}d=a.eP;w=d.bx;t=w.t8;x=a.d.y==o&&m===null?1:0;a:{if(u)t=w.lH;else
{if(m!==null){c=m.data;if(o<c.length&&c[o]!==null){t=Is(d.d3,d,c[o].fI);break a;}}if(x)t=w.g3;}}ALl(q,a.bn,k,a.i.a+r|0,a.bb,v,a.d.eg,l,t);o=o+1|0;}if(a.kQ){y=Bf(j+1|0,h);ANc(a,Bb(a.bb,y)-a.bC|0,l);}AI4(a);if(a.mE)AKg(a,i,j,h);if(a.oI&&f>=(( -Uw(a.el)|0)/2|0)&&AMR(a.el,a.k))AEg(a.el,a.bn,a.i);AIN(a);AIi(a);GA(a.bn);AIu(a,i,j);}
function AKg(a,b,c,d){var e,f,g,h,i,j,k,l;e=a.d.mj;while(b<=c&&b<d){a:{if(e!==null){f=e.data;if(b<f.length){g=f[b];break a;}}g=null;}if(g!==null){h=a.eP;h=Is(h.d3,h,g.fI);}else h=e!==null?a.eP.bx.eE:a.eP.bx.g3;if(!(a.d.y!=b&&g===null)){g=a.iM;i=a.cb;g.b=!i?(a.cB-a.cs|0)-a.eC|0:((a.cB+a.dt|0)+a.cs|0)-a.eC|0;j=a.bb;g.a=j;i=i?0:(a.dk-a.cB|0)+a.cs|0;j=Bb(j,b)-a.bC|0;k=a.bn;l=a.i;Bw(k,l.b+i|0,l.a+j|0,g,h);}b=b+1|0;}}
function AIu(a,b,c){var d,e,f,g,h,i,j,k,l;d=a.k.a;e=Bf(d,Bb(CI(a.d.h),a.bb)-a.bC|0);f=a.dz;g=a.bC;h=a.d;i=h.mj===null?h.y:(-1);j=a.bn;k=a.eP;Oj(j,f.ha,f.fS);Ut(f,j,b,d);ADR(f,b,j);AC5(f,g,e,k,j);l=k.lX;if(e<d){h=f.ha;Bw(j,h.b,h.a+e|0,BJ(f.fS.b,d-e|0),l.lQ);}if(b<=i&&i<=c){k=k.lX;c=i/20|0;h=f.dm;l=BK(h,c%h.p|0);h=f.ha;d=Bb(f.dm.p,f.hT);c=l.fQ.a;b=((l.rg.a-(g%d|0)|0)+d|0)%d|0;if((b+c|0)>d)b= -(g%CY(l.c8)|0)|0;c=i%l.eA|0;e=l.cJ;b=b+Bb(c,e)|0;if(b<( -e|0))b=b+d|0;Y(l.jT,l.fQ.b,e);f=l.kB;c=i%l.eA|0;d=l.cJ;Cv(f,0.0,
Bb(c,d),l.fQ.b,d);N4(l,j,b,h,k.za,k.rw);}GA(j);}
function Vr(a){return Bf(a.bC/a.bb|0,CI(a.d.h)-1|0);}
function Vq(a){return Bf(((a.bC+Ez(a)|0)-1|0)/a.bb|0,CI(a.d.h)-1|0);}
function AVt(a,b){return (Bb(a.bb,b)-a.bC|0)+a.i.a|0;}
function AVg(a){return a.i;}
function AYs(a){return a.k;}
function OO(a){AAx(a.dz,a.df.dw,a.bb,a.ch.cV);}
function AEE(a,b){var c;c=a.fh.data;return c[b%c.length|0];}
function WT(a,b){var c,d,e,f;c=Fo(0,M(a.fT),Qh(b));if(!c)b=null;else{b=C(68);if(c<0){b=new BU;X(b);N(b);}if(c!=1){d=b.co.data.length;if(d&&c){e=B7(Bb(d,c));d=0;f=0;while(f<c){R5(b,0,M(b),e,d);d=d+M(b)|0;f=f+1|0;}b=Na(e);}else b=A_x;}}return b;}
function Q2(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p;h=b.data;i=h.length;if(!i)return;j=BI(i);k=A$1(i).data;J5(j,c);c=0;l=k.length;if(c>l){f=new BU;X(f);N(f);}while(c<l){m=c+1|0;k[c]=d;c=m;}n=j.data;o=a.d.h;o.cE=o.cE+1|0;p=P(HB,i);j=p.data;m=0;while(m<i){b=e.data;j[m]=AWO(h[m],n[m],k[m],b[m],f.bt,f.by);m=m+1|0;}BA(o.jh,p);c=0;while(c<i){b=e.data;N3(o,h[c],n[c],k[c],b[c]);g.rj(C6(h[c]),b[c]);c=c+1|0;}}
function AN8(a){var b;if(DE(Bn(a)))Hl(a);else{b=a.d;PX(b.h,b.y,b.C);}IC(a);EP(a);return 1;}
function DS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;if(a.fl)return 0;if(DE(Bn(a)))Hl(a);c=MV(AEp(b,C(182),C(22)),C(183),(-1));d=c.data;b=a.d;e=b.h;f=b.y;g=b.C;AGt(e,f,g,c);h=d.length;if(!h)b=A_x;else{i=0;j=0;while(j<h){i=i+M(d[j])|0;j=j+1|0;}k=B7(i+Bb(h-1|0,M(C(183)))|0);c=k.data;l=0;b=d[0];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=1;while(n<h){j=0;while(j<M(C(183))){m=l+1|0;c[l]=Q(C(183),j);j=j+1|0;l=m;}b=d[n];j=0;while(j<M(b)){m=l+1|0;c[l]=Q(b,j);j=j+1|0;l=m;}n=n+1|0;}b=Na(k);}Gt(e,f,g,0,b);b=a.d;f=b.y;m
=(f+h|0)-1|0;CZ(a,m,m!=f?M(d[h-1|0]):b.C+M(d[0])|0,0);Gx(a);EP(a);return 1;}
function Hl(a){var b,c,d;b=EF(Bn(a));c=a.d.h;d=Bn(a);P3(c,d,WB(c,d));CZ(a,b.Q,b.bg,0);Gx(a);EP(a);}
function Gx(a){var b,c;(Bn(a)).dQ=0;b=(Bn(a)).bU;c=a.d;Cj(b,c.y,c.C);b=(Bn(a)).bL;c=a.d;Cj(b,c.y,c.C);}
function ANc(a,b,c){var d,e;d=a.k.a;if(b<d){e=a.ch.c9;e.a=d-b|0;d=a.cb;e.b=!d?c+a.eC|0:c+a.cs|0;d=!d?(a.i.b+a.dk|0)-a.eC|0:(((a.i.b+a.cB|0)+a.dt|0)+a.cs|0)-a.eC|0;Bw(a.bn,d,a.i.a+b|0,e,a.eP.bx.eE);}}
function AIN(a){var b;b=a.cb?a.i.b+a.dt|0:a.i.b+a.k.b|0;KW(a.gn,a.bC,a.i.a,Ez(a),PB(a),b,a.dt);b=!a.cb?a.i.b+a.dk|0:((a.i.b+a.cs|0)+a.cB|0)+a.dt|0;SO(a.f0,a.d.eg,b,GL(a),a.j8,a.i.a+Ez(a)|0,a.dt);}
function AIi(a){var b,c;b=ABo(a.gn);c=ABo(a.f0);if(!(!b&&!c)){Cc(a.bn,1);if(b)Hn(a.gn,a.bn);if(c)Hn(a.f0,a.bn);if(b)Hs(a.gn,a.bn);if(c)Hs(a.f0,a.bn);}}
function AI4(a){var b,c,d,e,f;b=a.iM;c=a.k;b.a=c.a;b.b=a.cs;d=!a.cb?a.dk-a.cB|0:(c.b-IT(a)|0)-a.cs|0;b=a.bn;c=a.i;Bw(b,c.b+d|0,c.a,a.iM,a.eP.bx.v8);b=a.iM;d=a.cb;b.b=!d?(a.cB-a.cs|0)-a.eC|0:((a.cB+a.dt|0)+a.cs|0)-a.eC|0;e=d?0:(a.dk-a.cB|0)+a.cs|0;c=a.bn;f=a.i;Bw(c,f.b+e|0,f.a,b,a.eP.bx.eE);}
function ADP(b,c){return Bf(Be(0,b),c);}
function G7(a){return a.ch.cn;}
function Gb(a,b,c){var d,e,f;d=EG(b);e=new J;L(e);H(H(e,C(184)),d);$rt_globals.console.info($rt_ustr(K(e)));CZ(a,0,0,0);f=new AE3;f.AB=a;f.AC=b;f.AA=c;c=DG();BG(c);d=new AE2;d.y3=c;WQ(b,f,d);}
function Ka(a,b,c,d,e){if(Jk(a,e))return 1;if(c&&d)return 1;if(c)Gp(a,a.bC+((Bb(b,a.bb)*12|0)/10|0)|0);else if(!d){IS(a,a.d.y+b|0,e);ADT(a);}return 1;}
function TD(a,b,c,d){var e,f,g;if(Jk(a,d))return 1;e=Gn(a);if(!c)f=a.d.C+b|0;else if(b>=0)f=Hy(e,a.d.C);else{b=a.d.C;if(!b)f=(-1);else{c=KR(e,b);if(c>0&&e.eT.data[c-1|0]==b)c=c+(-1)|0;f=c<=0?0:e.eT.data[c-1|0];}}if(f>e.W){e=a.d;if((e.y+1|0)<CI(e.h))CZ(a,a.d.y+1|0,0,d);}else if(f>=0)DJ(a,f,d);else{e=a.d;b=e.y;if(b>0){g=(B9(e.h,b-1|0)).W;CZ(a,a.d.y-1|0,g,d);}}AEQ(a);return 1;}
function Jk(a,b){if(DE(Bn(a))&&!b){Gx(a);IC(a);return 1;}if(!(b&&DE(Bn(a))))Gx(a);return 0;}
function CZ(a,b,c,d){a.d.C=c;return IS(a,b,d);}
function IS(a,b,c){var d;d=a.d;d.y=Fo(0,b,CI(d.h)-1|0);return DJ(a,a.d.C,c);}
function DJ(a,b,c){var d,e;a.d.C=Fo(0,b,(Gn(a)).W);a.d.iX=a.bY===0.0?0:Ho(Gn(a),a.d.C,a.bn.cr,a.gt);OK(a);IC(a);if(c)(Bn(a)).dQ=1;d=Bn(a);e=a.d;OL(d,e.y,e.C);(Bn(a)).dQ=0;return 1;}
function Nc(a,b){var c;c=A0G(Bn(a));DJ(a,b,0);Kj(Bn(a),c);}
function IC(a){ADT(a);AEQ(a);}
function ADT(a){var b,c,d,e,f;b=a.bC;c=b+Ez(a)|0;d=a.d.y;e=a.bb;d=Bb(d,e);f=d+e|0;if(d<(b+e|0))Gp(a,d-e|0);else if(f>(c-e|0))Gp(a,(f-Ez(a)|0)+a.bb|0);}
function AEQ(a){var b,c,d,e,f;b=C7(a.ch.ca*30.0);c=a.d.eg;d=c+GL(a)|0;e=a.d.iX;f=e+b|0;if(e<(c+b|0))Jd(a,e-b|0);else if(f>(d-b|0))Jd(a,(f-GL(a)|0)+b|0);}
function Jp(a,b){var c,d;CZ(a,b.bt,b.by,0);c=Hy(Gn(a),a.d.C);Cj((Bn(a)).bL,a.d.y,c);b=(Bn(a)).bU;d=a.d;Cj(b,d.y,d.C);Ju(a.d);}
function FS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.b;d=a.i;e=c-d.b|0;f=Fo(0,((b.a-d.a|0)+a.bC|0)/a.bb|0,CI(a.d.h)-1|0);g=!a.cb?a.dk:(a.cs+a.cB|0)+a.dt|0;h=Be(0,(e-g|0)+a.d.eg|0);b=B9(a.d.h,f);d=a.bn.cr;i=a.gt;if(!(b.fi!==null&&!b.hF))Oe(b,d,i);j=b.fi;e=b.s.data.length;if(!e)k=0;else if(h<=0)k=0;else{l=j.data;if(h>=l[e-1|0])k=b.W;else{c=ADE(j,0,e,h);if(c<0)c=( -c|0)-1|0;if(c==b.s.data.length)k=b.W;else{j=AB6(b,d,i,c);k=0;e=0;while(e<c){k=k+M(b.s.data[e].x)|0;e=e+1|0;}e=!c?0:l[c-1|0];c=l[c];g=0;a:{while(true){i
=j.data;if(g>=i.length){m=c;break a;}m=i[g];if(h<m)break;k=k+1|0;g=g+1|0;c=m;e=m;}}if(BaF){b=new J;L(b);V(H(V(H(V(H(b,C(185)),e),C(186)),h),C(187)),m);$rt_globals.console.info($rt_ustr(K(b)));n=k;$rt_globals.console.info(" pos = "+n);}if((h-e|0)>(m-h|0))k=k+1|0;}}}return D1(f,k);}
function Xs(a,b){var c,d;c=a.d;d=b.bt;c.y=d;c.C=b.by;c.iX=Ho(B9(c.h,d),a.d.C,a.bn.cr,a.gt);OK(a);}
function Gn(a){var b;b=a.d;return B9(b.h,b.y);}
function Mu(a,b,c,d){var e,f;e=C7((a.bb*4|0)*d/150.0);f=C7(c);if(e)Gp(a,a.bC+e|0);if(f)Jd(a,a.d.eg+f|0);return 1;}
function Uz(a,b,c){(Bn(a)).dQ=0;return 1;}
function Yb(a,b,c){var d;if(!DB(a.ch,a))Cx(a.ch,a);if(c)return null;d=Gs(a.gn,b.j,a.sw,1);if(d!==null)return d;d=Gs(a.f0,b.j,a.wr,0);if(d!==null)return d;JP(a);Xs(a,FS(a,b.j));Ju(a.d);if(!b.bS&&!(Bn(a)).dQ){b=(Bn(a)).bU;d=a.d;Cj(b,d.y,d.C);}(Bn(a)).dQ=1;b=Bn(a);d=a.d;OL(b,d.y,d.C);b=new AFM;b.wC=a;return b;}
function P0(a,b,c,d){var e,f,g,h,i,j,k;a:{if(!c){switch(d){case 1:if(b.cP){b=b.j;e=FS(a,b);f=JI(a.d.h,e.bt,e.by);g=Um(a,f);h=Pi(a.fW,En(a.d),H6(a.d));if(h!==null){i=a.d;c=e.bt;d=e.by;e=new AFo;e.EW=a;e.EX=b;e.EV=g;h.u5(i,c,d,e,a.kO);}else{e=CC(a.d.h.ec,f);if(e!==null){Jp(a,e);c=1;}else{e=CC(a.d.h.d2,f);if(e!==null&&!EU(e)){if(e.p!=1){ABk(a.lx,b,e,a,g);c=1;}else{Jp(a,BK(e,0));c=1;}}else c=0;}}}break a;case 2:b:{c=(FS(a,b.j)).bt;g=B9(a.d.h,c);c=Hd(g,a.d.C);d=Hy(g,a.d.C);b=O$(g,c);if((d-1|0)==g.W){Cj((Bn(a)).bU,
a.d.y,Qh(g));Cj((Bn(a)).bL,a.d.y,g.W);}else{if(b!==null){b=b.x;j=0;c:{while(true){k=b.co.data;if(j>=k.length)break;if(k[j]!=32){j=0;break c;}j=j+1|0;}j=1;}if(j){j=a.d.C;if(c==j){c=Hd(g,c-1|0);d=Hy(g,c);}else{if(d!=j){RR(Bn(a),a.d.y);break b;}c=Hd(g,d+1|0);d=Hy(g,c);}}}Cj((Bn(a)).bU,a.d.y,c);(Bn(a)).dQ=1;CZ(a,a.d.y,d,0);(Bn(a)).dQ=0;JP(a);}}break a;case 3:break;default:break a;}RR(Bn(a),a.d.y);ABQ(a.d.iw);JP(a);}}return 1;}
function Zi(a,b){var c,d,e,f,g,h,i,j;c=a.ch.dc;if(Gz(a.gn,b.j,c))return 1;if(Gz(a.f0,b.j,c))return 1;d=a.dz;if(GK(b.j,d.ha,d.fS)&&Ha(c)?1:0)return 1;e=b.j;f=!a.cb?a.dk:(a.cB+a.cs|0)+a.dt|0;a:{d=a.i;f=d.b+f|0;g=d.a;h=GL(a);i=Ez(a);j=e.b;if(f<=j&&j<(f+h|0)){f=e.a;if(g<=f&&f<(g+i|0)){f=1;break a;}}f=0;}if(!f)return Ha(c);if(b.cP){e=FS(a,b.j);e.by=Hd(B9(a.d.h,e.bt),e.by);b=a.d.h;if(!HX(b.ec,e)&&!HX(b.d2,e)?0:1)return D$(c,C(188));}return D$(c,C(189));}
function A7o(a,b){var c,d,e,f,g;c=a.l9;if(c!==null){if(c.br(b))return 1;if(b.lW)return 0;}d=b.cP;if(d&&b.bh==65){d=CI(a.d.h)-1|0;e=G4(a.d.h,d);Cj((Bn(a)).bU,0,0);Cj((Bn(a)).bL,CI(a.d.h)-1|0,e);return 1;}if(!a.fl&&d&&b.bh==90){if(DE(Bn(a)))Gx(a);b=a.d.h;b.cE=b.cE+1|0;c=b.jh;e=c.p;if(!e)c=null;else{f=(E3(c,e-1|0)).data;c=YD(b,f[0]);d=1;while(d<f.length){YD(b,f[d]);d=d+1|0;}}if(c!==null){CZ(a,c.b,c.a,0);EP(a);}return 1;}if(!d&&!b.dy){if(Bk(b.eD,C(190))){DS(a,C(191));DJ(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eD,C(192)))
{DS(a,C(193));DJ(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eD,C(39))){DS(a,C(23));DJ(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eD,C(194))){DS(a,C(195));DJ(a,a.d.C-1|0,0);d=1;}else if(Bk(b.eD,C(196))){DS(a,C(197));DJ(a,a.d.C-1|0,0);d=1;}else if(!Bk(b.eD,C(198)))d=0;else{DS(a,C(199));DJ(a,a.d.C-1|0,0);d=1;}}else d=0;if(d)return 1;a:{if(!(!b.dy&&!b.cP)){e=b.bh;if(e>=48&&e<=57){d=e-48|0;c=a.pl.data[d];if(c!==null)c.e();d=1;break a;}}d=0;}if(d)return 1;b:{switch(b.bh){case 16:case 17:case 18:case 19:case 20:case 45:case 91:case 144:case 145:break;default:d
=0;break b;}d=1;}if(d)return 1;if(AL$(a,b))return 1;if(AIJ(a,b))return 1;d=b.cP;if(d&&b.bh==87){$rt_globals.console.info("Ctrl-W is not possible ;)");return 1;}e=b.bh;g=112<=e&&e<=123?1:0;if(!g&&e!=27){if(!d&&!b.dy&&!b.ja)return M(b.eD)>0&&DS(a,b.eD)?1:0;return 0;}return 0;}
function AC6(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;b=a.d;c=Vr(a);d=Vq(a);if(b.fx!=3&&b.hc==3){e=My(b.qo);f=new AGg;f.tR=c;f.tQ=d;g=new SI;g.ty=f;while(!g.nH&&OP(e,g)){}if(!g.nH&&Bk(C(200),En(b))){c=Be(0,c-100|0);d=Bf(CI(b.h)-1|0,d+100|0);BA(b.qo,BJ(c,d));h=BI(3);i=h.data;i[0]=F0(b.h,c);e=b.h;j=0;d=Bf(d+1|0,e.E.data.length);k=0;while(k<d){j=j+G4(e,k)|0;if(k!=(e.E.data.length-1|0))j=j+1|0;k=k+1|0;}i[1]=j;i[2]=c;b.Ci=EO();e=b.fv;l=new AER;l.tq=b;i=P(B,3);m=i.data;m[0]=Fv(b.h);m[1]=h;b=b.h.dC;g=BO();ADk(b,b.dA,
g);h=BI(3*g.p|0);n=h.data;k=0;o=0;p=n.length;while(k<p){b=BK(g,o);d=k+1|0;n[k]=b.b8;q=d+1|0;n[d]=b.b6;k=q+1|0;n[q]=b.gj;o=o+1|0;}m[2]=h;CG(e,l,C(201),i);}}}
function Xq(a){M3(a.d);}
function ABH(a){var b,c,d,e,f,g,h,i,j,k,l,m;b=a.d;if(b.gh){c=Fk(b);d=new J;L(d);H(H(d,c),C(202));$rt_globals.console.info($rt_ustr(K(d)));}c=En(b);if(c!==null&&!Bk(C(189),c)){d=b.h.dC;e=RM(d,d.dA);if(e===null){Pa(b);Lj(b.h);}else{f=DK([Dt(e),Dk(e),e.b4.gj]);g=Fv(b.h);h=BI(1);h.data[0]=AKG(c);d=b.h.fp;if(d.f1===null){i=BI(0);j=B7(0);}else{c=AX_(A0z(e.cy,d.fw),e);YT(c);i=c.pI;j=c.nK;}k=b.h.cE;c=b.fv;d=new PL;d.Cm=b;l=P(B,6);m=l.data;m[0]=g;m[1]=h;m[2]=f;f=BI(1);f.data[0]=k;m[3]=f;m[4]=i;m[5]=j;CG(c,d,C(203),l);}}
else Lj(b.h);}
function JH(a,b,c){var d,e,f,g,h,i;if(c&&a.fl)return 0;d=EF(Bn(a));e=d.Q;if(DE(Bn(a))){f=a.d.h;g=Bn(a);h=WB(f,g);if(c)P3(f,g,h);if(c){CZ(a,d.Q,d.bg,0);Gx(a);EP(a);}}else{h=FQ(F7(a.d.h.E.data[e]),C(183));i=Bf(CI(a.d.h)-1|0,e);Cj((Bn(a)).bL,i,0);if(e>=(CI(a.d.h)-1|0))Cj((Bn(a)).bL,i,G4(a.d.h,i));else Cj((Bn(a)).bU,i+1|0,0);if(c)Hl(a);else CZ(a,e,0,0);}b.g(h);return 1;}
function AXA(a){var b;b=new VR;b.BH=a;return b;}
function AIJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;if(a.fl)return 0;a:{switch(b.bh){case 8:if(DE(Bn(a))){Hl(a);c=1;}else{b=a.d;d=b.C;if(!d&&!b.y)c=1;else{if(d){e=b.y;c=d-1|0;PX(b.h,e,c);}else{e=b.y-1|0;c=G4(b.h,e);b=a.d.h;Mg(b,e);Gt(b,e,G4(b,e),1,C(183));}EP(a);c=CZ(a,e,c,0);}}break a;case 9:if(!b.bS){if(!DE(Bn(a)))DS(a,a.fT);else{f=EF(Bn(a));g=Gu(Bn(a));c=g.Q;d=f.Q;e=(c-d|0)+1|0;h=BI(e);i=h.data;j=P(BC,e);k=j.data;e=0;while(d<=c){i[e]=d;l=e+1|0;k[e]=a.fT;d=d+1|0;e=l;}b=new AEX;m=a.d;AMu(b,m.y,m.C);m=new UO;m.wp
=a;Q2(a,h,0,0,j,b,m);f.bg=f.bg+M(a.fT)|0;g.bg=g.bg+M(a.fT)|0;Nc(a,a.d.C+M(a.fT)|0);EP(a);}c=1;}else b:{if(!DE(Bn(a))){b=a.d;f=B9(b.h,b.y);if(f.s.data.length>0){g=WT(a,f);if(g===null){c=1;break b;}m=a.d;n=m.h;e=m.y;b=D1(e,m.C);n.cE=n.cE+1|0;o=n.jh;h=P(HB,1);h.data[0]=AWO(e,0,1,g,b.bt,b.by);BA(o,h);N3(n,e,0,1,g);Ie(f,0,M(g));Nc(a,a.d.C-M(g)|0);}}else{b=EF(Bn(a));f=Gu(Bn(a));c=f.Q;p=b.Q;c=(c-p|0)+1|0;h=BI(c);k=h.data;j=P(BC,c);q=j.data;g=a.d;e=g.C;l=g.y;c=0;while(p<=f.Q){g=B9(a.d.h,p);if(g.s.data.length>0){g=WT(a,
g);if(g!==null){k[c]=p;d=c+1|0;q[c]=g;c=d;}}p=p+1|0;}h=JS(h,c);j=CV(j,c);d=0;while(d<c){k=h.data;g=j.data[d];p=k[d];if(p==b.Q)b.bg=Be(0,b.bg-M(g)|0);if(p==f.Q){f.bg=Be(0,f.bg-M(g)|0);Nc(a,a.d.C-M(g)|0);}d=d+1|0;}b=D1(l,e);f=new VM;f.uF=a;Q2(a,h,0,1,j,b,f);}EP(a);c=1;}break a;case 13:if(DE(Bn(a)))Hl(a);b=a.d;Fj(B9(b.h,b.y));b=a.d;ANC(b.h,b.y,b.C);EP(a);c=CZ(a,a.d.y+1|0,0,0);break a;case 46:break;default:c=0;break a;}c=AN8(a);}return c;}
function AL$(a,b){var c,d,e,f;a:{switch(b.bh){case 33:c=b.cP?IS(a,ID(a.bC,a.bb),b.bS):Ka(a,2-WJ(Ez(a),a.bb)|0,0,b.dy,b.bS);break a;case 34:c=!b.cP?Ka(a,WJ(Ez(a),a.bb)-2|0,0,b.dy,b.bS):IS(a,((a.bC+Ez(a)|0)/a.bb|0)-1|0,b.bS);break a;case 35:if(!Jk(a,b.bS)&&!DJ(a,(Gn(a)).W,b.bS)){c=0;break a;}c=1;break a;case 36:if(!Jk(a,b.bS)&&!DJ(a,0,b.bS)){c=0;break a;}c=1;break a;case 37:c=b.cP;if(c&&b.dy){JP(a);d=a.d.iw;e=d.d8;if(e<=0)d=null;else{f=d.fO.data;c=e-1|0;d.d8=c;d=f[c];}if(d===null)c=1;else{CZ(a,MM(d),Lu(d),0);Kj(Bn(a),
d.pE);c=1;}break a;}c=TD(a,(-1),c,b.bS);break a;case 38:c=Ka(a,(-1),b.cP,b.dy,b.bS);break a;case 39:c=b.cP;if(c&&b.dy){d=a.d.iw;e=d.d8;if(e==(d.fK-1|0))d=null;else{f=d.fO.data;c=e+1|0;d.d8=c;d=f[c];}if(d===null)c=1;else{CZ(a,MM(d),Lu(d),0);Kj(Bn(a),d.pE);c=1;}break a;}c=TD(a,1,c,b.bS);break a;case 40:c=Ka(a,1,b.cP,b.dy,b.bS);break a;default:}c=0;}if(c&&b.bS){b=(Bn(a)).bL;d=a.d;Cj(b,d.y,d.C);}if(c)Ju(a.d);return c;}
function JP(a){var b,c,d,e,f,g,h;b=a.d;c=b.iw;d=c.d8;c=d<0?null:c.fO.data[d];if(c!==null&&b.y==MM(c)&&a.d.C==Lu(c))return;c=a.d;e=c.iw;b=new Oy;d=c.y;f=c.C;c=Bn(a);b.qy=D1(d,f);g=A0G(c);b.pE=g;g.dQ=0;f=e.d8;h=e.fK;if(f==(h-1|0))AEF(e,b);else{d=f+1|0;while(d<h){ABQ(e);d=d+1|0;}AEF(e,b);}e.d8=e.d8+1|0;}
function EP(a){a.d.h.BV=NA(G7(a));}
function It(a,b){var c,d,e,f;a.Ee=null;Mp(a.dz,null);c=a.d;a.d=b;LG(c,null,null);LG(b,a,G7(a));d=(B5(a.fW.wF)).data;e=d.length;f=0;while(f<e){d[f].rj(c,b);f=f+1|0;}a.bC=G$(b.nt*a.bb);}
function Um(a,b){var c;c=MG(a.d.h,b);if(c===null)return C(22);return c.x;}
function H3(a,b){var c,d,e,f,g;a.d.mj=b;if(b===null){Bc(Bg(),C(204));Mp(a.dz,null);}else{b=b.data;c=Dh(b.length);d=c.data;e=0;f=d.length;while(e<f){g=b[e];d[e]=g===null?0:g.fI<<24>>24;e=e+1|0;}Mp(a.dz,c);}}
function Js(a,b){a.d.rv=b;}
function Bn(a){return a.d.sB;}
function ME(a){var b;b=a.iZ;if(b!==null)b.g(a);}
function A0Y(a){var b,c,d;b=a.d.fL;c=AHi(a);if(b!==null){b=b.gm;d=new J;L(d);H(H(H(d,c),C(205)),b);c=K(d);}return c;}
function AKH(){var a=this;B.call(a);a.mp=null;a.o6=null;a.hw=null;}
function AJT(a,b){var c=new AKH();A0P(c,a,b);return c;}
function A0P(a,b,c){var d,e;a.mp=b;a.o6=c;d=null;e=new Ww;e.tA=a;b.qq(d,e);b=null;d=new Wx;d.sG=a;c.qq(b,d);}
function AAs(a,b,c){var d,e,f,g,h,i,j;d=a.hw;if(d!==null&&d.iW!==null){e=b!==a.mp?0:1;f=b.l1();g=(b.lb()+f|0)/2|0;h=g-f|0;d=a.hw;d=d.iW.data[He(d,g,e)];i=g-(!e?d.iC:d.iD)|0;j= -(b.h_(f)-(b.lB()).a|0)|0;c.re(Bb(((!e?d.iD:d.iC)+i|0)-h|0,c.qx())+j|0);return;}}
function So(){B.call(this);this.st=null;}
function AWk(a,b){Vt(a.st,b);}
function Sl(){B.call(this);this.uL=null;}
function AVj(a,b){Vt(a.uL,b);}
function Sm(){B.call(this);this.Ac=null;}
function AQQ(a,b){return AKT(a.Ac,b);}
function GS(){var a=this;B.call(a);a.pJ=null;a.tD=null;a.s3=null;}
function BaG(a,b){var c=new GS();Hc(c,a,b);return c;}
function Hc(a,b,c){var d;d=null;a.pJ=b.bw;a.tD=d;a.s3=c;}
function AT5(a,b){var c;if(!AED(b))return 0;c=a.tD;if(c!==null&&b.bS)GC(a.pJ,c);else Fm(a.pJ,a.s3);return 1;}
function AED(b){return b.cP&&b.bh==79?1:0;}
function Sf(){B.call(this);this.CA=null;}
function A6c(a,b){var c,d,e;c=a.CA;d=DB(c.q,c.H)?c.H:!DB(c.q,c.L)?null:c.L;if(d!==null){e=new Xa;e.zO=c;e.zR=d;e.zP=b;Gb(d,b,e);c.lc=null;c.no.hw=null;c.gr.eR=null;}}
function Sg(){B.call(this);this.BS=null;}
function A3T(a,b){return ALm(a.BS,b);}
var CK=G(0);
function AFO(){var a=this;B.call(a);a.F=null;a.bz=null;a.ew=null;}
function E5(a,b,c,d,e){var f,g;f=AAZ(a.F);HQ(f,b,c);b=a.F;c=b.b5;g=new AE7;g.ys=b;g.yr=c;f.kF=g;TH(f,d,e);H7(a,f);}
function H7(a,b){var c;c=a.ew;if(c!==b)a.ew=BR(c,b);}
function DV(a,b){var c;c=new AET;c.r3=a;c.r5=b;return c;}
function NV(a,b){var c;c=new AF1;c.zK=a;c.zL=b;return c;}
function D3(a){var b;b=a.ew;if(b!==null){M4(b);H7(a,null);}}
function DY(a,b){var c,d,e,f;c=a.bz;if(c.cT>0)LB(FK(c,0));c=a.bz;d=c.cT;e=c.dp;if(d==e.data.length)c.dp=CV(e,d+4|0);d=c.cT;f=d;while(0<f){e=c.dp.data;e[f]=e[f-1|0];f=f+(-1)|0;}c.dp.data[0]=b;c.cT=d+1|0;c.gJ=null;Lg(b);return b;}
function IW(a,b){if(Pk(a)!==b?0:1)LB(b);TI(a.bz,b);b=a.bz;if(b.cT>0)Lg(FK(b,0));}
function Ko(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(B5(a.bz)).data;c=b.length-1|0;while(c>=0){d=b[c];e=a.F.bO;d.Y.dT(e);if(d.Y.i.a>0){f=d.U;g=d.gL.jS;if(!Tg(f)){if(!O4(f)&&!(!f.e9&&f.em!==null)){f.e9=0;AEw(f);h=f.eZ;i=(h.eN+h.e8+5.0)/10.0;j=Cw(f.gH,f.lt);h=e.cr;k=f.eZ;l=f.kl;m=i*2.0;Cr(h,k);n=j+L4(h,l,m)|0;f.iR=n;n=Fo(0,n,f.k.b);if(n){h=Eg(e,n,f.k.a,f.gH.cV);Cr(h,f.eZ);k=f.kl;o=j;p=o+i;l=f.eZ;i=l.eN;B1(h,k,p,o+i-(i+l.e8)/16.0);k=f.em;if(k===null){k=C5(e);f.em=k;}CW(k,h);EQ(h);Cv(f.nv,0.0,0.0,BW(f.em),CY(f.em));}}h
=g.mQ;k=f.em;if(k===null)RN(f,e,0,f.k.b,h);else{n=BW(k);k=g.pa;g=f.i;j=g.b;q=g.a;g=f.em;DT(e,j,q,g.eb,f.nv,g,k,h,f.gH.cV);j=f.k.b;if(n<j)RN(f,e,n,j-n|0,h);}}f=d.dD;if(f!==null){g=d.Z;l=d.U;h=d.gL.jS;if(f.jL!==null){if(f.dB===null)AIU(f,g);j=Cw(g,2.0);n=Be(0,((l.k.a-CY(f.dB)|0)/2|0)-j|0);f.gM.b=(((l.i.b+l.k.b|0)-n|0)-BW(f.dB)|0)-j|0;k=f.gM;q=l.i.a+n|0;n=j/2|0;k.a=q-n|0;k=f.lm;q=BW(f.dB);r=j*2|0;Y(k,q+r|0,CY(f.dB)+r|0);k=g.bO;l=f.gM;Bw(k,l.b,l.a,f.lm,!f.mz?h.mQ:h.ki);Cv(g.nd,0.0,0.0,BW(f.dB),CY(f.dB));k=g.bO;l
=f.gM;j=l.b+j|0;q=l.a+n|0;l=f.dB;DT(k,j,q,l.eb,g.nd,l,h.pa,!f.mz?h.mQ:h.ki,0);}}}if(!AAF(d)){n=Cw(d.Z,2.0);j=Tg(d.U);h=d.Z;k=h.c9;h=h.q5;q=j?0:d.U.k.a;f=d.Y.k;Y(h,f.b,f.a+q|0);Cc(e,1);ALA(e,h,!j?d.U.i:d.Y.i,d.gL.jS.ki, -n|0,k);h=d.Y;AMW(e,h.k,h.i,n,q,Z8(d.gL.mg,d.Z.ca),d.gL.mg.o1,k);}c=c+(-1)|0;}h=a.ew;if(h!==null)AGQ(h);}
function G2(a,b){var c,d,e,f;c=a.F;if(c.cV==b)d=0;else{c.cV=b;J3(c.cn);d=1;}if(d){c=a.ew;if(c!==null){c=B_(c.cq);while(Cd(c)){OX(Ce(c));}}e=(B5(a.bz)).data;b=e.length;f=0;while(f<b){c=e[f];c.U.e9=1;c.Y.kU();f=f+1|0;}}return d;}
function AY4(a,b){var c,d,e,f,g,h,i,j,k;c=a.ew;if(c!==null){d=0;e=c.cq.p-1|0;a:{while(e>=0){d=OA(BK(c.cq,e),b.j,c.c7.dc);if(d)break a;e=e+(-1)|0;}}if(d)return 1;}f=(B5(a.bz)).data;d=f.length;g=0;while(g<d){b:{h=f[g];c=b.j;if(B3(h.U,c)){i=h.dD;if(i!==null)i.mz=UP(i,c);e=D$(h.Z.dc,null);}else{i=h.dD;if(i!==null)i.mz=0;e=Cw(h.Z,7.0);j=Cw(h.Z,25.0);if(NK(h,c.b,e)){k=Y9(h,c.b,j);if(NU(h,c.a,e)){e=D$(h.Z.dc,MN(k,C(206)));break b;}if(Ln(h,c.a,e)){e=D$(h.Z.dc,MN( -k|0,C(206)));break b;}}if(O7(h,c.a,e)){j=AFD(h,c.a,
j);if(Ps(h,c.b,e)){e=D$(h.Z.dc,MN(j,C(207)));break b;}if(No(h,c.b,e)){e=D$(h.Z.dc,MN( -j|0,C(207)));break b;}}e=0;}}c:{d:{if(!e){if(!B3(h.Y,b.j))break d;if(!h.Y.b0(b)&&!D$(h.Z.dc,null))break d;}e=1;break c;}e=0;}if(e)return 1;g=g+1|0;}return 0;}
function AP1(a,b,c,d){var e,f,g,h,i,j;e=a.ew;if(e!==null){f=0;g=e.cq.p-1|0;a:{while(g>=0){f=O0(BK(e.cq,g),b.j,c,d);if(f)break a;g=g+(-1)|0;}}if(f)return 1;}h=(B5(a.bz)).data;f=h.length;g=0;while(g<f){b:{c:{i=h[g];if(!B3(i.U,b.j)&&!QJ(i,b.j)){if(!MT(i,b))break c;if(!i.Y.cU(b,c,d))break c;}j=1;break b;}j=0;}if(j)return 1;g=g+1|0;}return 0;}
function ASh(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=a.ew;if(d!==null){e=null;f=d.cq.p-1|0;a:{while(f>=0){e=BK(d.cq,f);g=b.j;h=Fw(e.cD,g);if(!h&&!LQ(e.cD)){e=e.lA;if(e!==null)e.e();}e=!h?null:BaH;if(e!==null)break a;f=f+(-1)|0;}}if(e!==null)return e;}i=B5(a.bz);h=0;while(true){j=i.data;if(h>=j.length)return null;b:{d=j[h];e=b.j;if(!c){c:{k=Cw(d.Z,7.0);l=Cw(d.Z,25.0);if(NK(d,e.b,k)){m=Y9(d,e.b,l);if(NU(d,e.a,k)){g=KC(d,e,m,(-1));break c;}if(Ln(d,e.a,k)){g=KC(d,e,m,1);break c;}}if(O7(d,e.a,k)){f=AFD(d,e.a,l);if(Ps(d,
e.b,k)){g=KC(d,e,(-1),f);break c;}if(No(d,e.b,k)){g=KC(d,e,1,f);break c;}}g=null;}if(g!==null)break b;if(B3(d.U,e)){g=d.dD;if(g!==null&&UP(g,e)){d.dD.jL.e();g=BaH;break b;}g=d.Y.i;f=g.b;l=e.b;f=f-l|0;k=g.a;m=e.a;k=k-m|0;e=d.U.i;l=e.b-l|0;m=e.a-m|0;e=new Bi;g=new AEK;g.Aj=d;g.An=l;g.Am=m;g.Al=e;g.Ak=f;g.Ai=k;break b;}}g=null;}f=g===null&&!MT(d,b)?0:1;k=!c&&d!==Pk(a)&&f?1:0;if(k){e=a.bz;l=0;j=e.dp.data;m=j.length;d:{while(true){if(l>=m){l=(-1);break d;}if(d===j[l])break;l=l+1|0;}}if(l>0)VA(a,l);}if(g===null&&
f)g=d.Y.cA(b,c);if(g!==null)break;if(k)break;h=h+1|0;}return g;}
function VA(a,b){var c,d,e,f,g;LB(FK(a.bz,0));c=a.bz;d=c.cT;if(d<=b){c=new O8;Bm(c,Iu(b));N(c);}if(b){e=c.dp;f=e.data;g=f[b];while(b>0){f[b]=f[b-1|0];b=b+(-1)|0;}f[0]=g;f=c.gJ;if(f!==null)Dc(e,0,f,0,d);}Lg(FK(a.bz,0));}
function AGk(a){var b;b=a.bz.cT;if(b>1)VA(a,b-1|0);}
function A7e(a,b,c){var d,e,f,g,h;d=a.ew;if(d!==null&&J1(d))return 1;e=(B5(a.bz)).data;f=e.length;g=0;while(g<f){a:{b:{d=e[g];if(!B3(d.U,b.j)){if(!MT(d,b))break b;if(!d.Y.dX(b,c))break b;}h=1;break a;}h=0;}if(h)return 1;g=g+1|0;}return 0;}
function A2K(a,b,c){var d,e,f,g,h;d=(B5(a.bz)).data;e=d.length;f=0;while(f<e){g=d[f];h=g.Y;h.dW(h.i,h.k,c);h=g.U;if(h.h6!==null){h.eZ=null;h.iR=0;h.e9=1;}IY(g);h=g.dD;if(h!==null)OB(h);f=f+1|0;}}
function Pk(a){var b;b=a.bz;return b.cT<=0?null:FK(b,0);}
function Vc(){var a=this;B.call(a);a.bO=null;a.cn=null;a.dc=null;a.bH=null;a.ca=0.0;a.cV=0;a.b5=null;a.dg=null;a.c9=null;a.q5=null;a.nd=null;a.Ea=null;}
function Lq(a){var b;b=a.b5;if(b!==null)b.vX();}
function LE(a){var b;b=a.b5;if(b!==null)b.xW();}
function ND(a,b){var c;c=a.cn.ek!==(EM()).activeElement?0:1;if(c)LE(a);a.b5=b;if(c)Lq(a);}
function Cx(a,b){if(a.b5!==b){LE(a);a.b5=b;Lq(a);}}
function ADC(a,b){if(a.b5===b)a.b5=null;}
function DB(a,b){return b!==a.b5?0:1;}
function KS(a){return a.bO.cr;}
function FF(a,b){return G1(a.bO,b.iG,b.hx*a.ca,b.kN,0);}
function Cw(a,b){return Ck(b,a.ca);}
function K5(a,b){var c;c=a.bO;if(!a.cV)c.qT=b;else c.ph=b;J3(a.cn);}
function A59(a,b,c){var d;d=a.b5;return d!==null&&d.fy(b,c)?1:0;}
function A34(a){var b;b=a.b5;return b===null?null:b.A$();}
function X3(){B.call(this);this.xq=null;}
function A69(a,b,c,d){var e,f,g,h;e=(B5(a.xq.bz)).data;f=e.length;g=0;a:{while(g<f){if(e[g].Y.dV(b,c,d)){h=1;break a;}g=g+1|0;}h=0;}return h;}
function X2(){B.call(this);this.uI=null;}
function AP3(a,b){var c,d,e,f;c=a.uI;b=b.j;d=0;e=c.bz.cT;a:{while(d<e){f=FK(c.bz,d);if(!B3(f.U,b)&&!QJ(f,b)&&!AEv(f,b)?0:1){c=FK(c.bz,d);break a;}d=d+1|0;}c=null;}b:{if(c!==null){c=c.yi;if(c!==null&&AKX(c.x6,b)?1:0){d=1;break b;}}d=0;}return d;}
function AHD(){var a=this;B.call(a);a.fe=null;a.pY=0.0;a.i7=0.0;a.hQ=0;}
function A11(){var a=new AHD();AVr(a);return a;}
function AVr(a){var b;b=UE(0,0,2,20);a.fe=b;a.pY=0.5;a.i7=0.0;I9(187,187,187,255,b.bd);}
function Uw(a){return a.fe.v.b;}
function ADb(a,b){var c,d;a:{c=a.hQ;if(b>a.i7)while(true){d=a.i7+a.pY;a.i7=d;a.hQ=a.hQ?0:1;if(b>d)continue;else break a;}}return a.hQ==c?0:1;}
function VT(a,b,c){Y(a.fe.w,b,c);}
function AAr(a,b){a.i7=b+a.pY*1.25;a.hQ=1;}
function AMR(a,b){return AHf(a.fe.w,0,0,b);}
function AEg(a,b,c){if(a.hQ)ABJ(a.fe,b,c.b,c.a);}
function AF$(){var a=this;B.call(a);a.fL=null;a.h=null;a.qS=null;a.sB=null;a.iw=null;a.j7=null;a.fv=null;a.mj=null;a.y=0;a.C=0;a.iX=0;a.ju=null;a.i_=null;a.qo=null;a.fx=0;a.hc=0;a.hu=0;a.jF=F4;a.Ci=F4;a.CY=F4;a.rv=0;a.Gy=0;a.eg=0;a.nt=0.0;a.gh=0;}
function A9Q(a,b,c){var d=new AF$();ANU(d,a,b,c);return d;}
function ARb(a,b){var c=new AF$();AUQ(c,a,b);return c;}
function A9W(a,b,c){var d=new AF$();Xm(d,a,b,c);return d;}
function ANU(a,b,c,d){Xm(a,(ALa(b)).kZ,c,d);}
function AUQ(a,b,c){Xm(a,b,null,c);}
function Xm(a,b,c,d){var e,f,g,h,i,j;e=b.data;a.sB=APu();f=new Va;f.fO=P(Oy,16);f.fK=0;f.d8=(-1);a.iw=f;a.ju=null;a.i_=BO();a.qo=BO();a.fx=1;a.hc=1;a.hu=1;a.eg=0;a.nt=0.0;a.gh=0;a.fL=d;a.qS=c;c=new ABK;g=e.length;b=P(DR,Be(1,g));if(!g)b.data[0]=ZD(C(22));h=b.data;i=0;while(i<g){h[i]=ZD(e[i]);i=i+1|0;}d=new AAd;f=new Ov;RX(f);d.fw=f;c.fp=d;c.ec=Kr();c.d2=Kr();c.jh=BO();if(!h.length){c=new BU;X(c);N(c);}c.E=b;j=AEt(c);c.dC=AJm(AXj(Lv(0,j,0),null,null));a.h=c;}
function En(a){var b;b=a.qS;if(b===null){b=a.fL;b=b===null?C(189):AKn(b.gm);}return b;}
function H6(a){var b;b=a.fL;return b===null?null:b.k_;}
function M5(a,b){var c,d,e,f,g,h,i,j;b=b.data;a.hc=3;a.hu=3;a.fx=3;c=CP(b[0]);d=E8(b[1]);CP(b[2]);if(b.length<5)OR(a.h,c,d);else{e=CP(b[3]);f=e.data;g=E8(b[4]);Zk(a.h,c,d,e,g,0);Vm(a,JS(e,f.length),Pb(g));}if(a.gh){h=Fk(a);i=Km(EO(),a.jF);j=new J;L(j);H(Id(H(H(j,h),C(208)),i),C(209));$rt_globals.console.info($rt_ustr(K(j)));}h=a.j7;if(h!==null)ME(h);}
function Ju(a){var b;T6(a,D1(a.y,a.C),JI(a.h,a.y,a.C));if(!(a.ju!==null&&!EU(a.i_))){b=a.C;if(b>0)T6(a,D1(a.y,b-1|0),JI(a.h,a.y,a.C-1|0));}}
function T6(a,b,c){var d,e,f,g,h,i,j,k;a.ju=null;I1(a.i_);d=CC(a.h.ec,c);if(d!==null)c=d;a:{e=CC(a.h.d2,c);if(e!==null){a.ju=MG(a.h,c);c=B_(e);while(true){if(!Cd(c))break a;f=Ce(c);BA(a.i_,MG(a.h,f));}}}c=a.j7;if(c!==null){g=b.bt;h=b.by;b=c.fW;f=En(c.d);e=H6(c.d);i=(B5(b.w0)).data;j=i.length;k=0;b:{while(k<j){b=i[k];if(b.Da(f,e)){b=b.FS;break b;}k=k+1|0;}b=null;}if(b!==null){f=c.d;e=new PR;e.E1=c;e.E2=f;e.EZ=g;e.E0=h;b.u5(f,g,h,e,c.kO);}}}
function Vm(a,b,c){var d,e,f,g,h;if(a.fv!==null){a.CY=EO();d=a.h.cE;e=a.fv;f=new Z9;f.AW=a;g=P(B,3);h=g.data;h[0]=b;h[1]=c;b=BI(1);b.data[0]=d;h[2]=b;CG(e,f,C(210),g);}}
function LG(a,b,c){var d,e,f,g,h,i,j,k,l,m;a.j7=b;a.fv=c;if(c===null){d=a.h.E.data;e=d.length;f=0;while(f<e){UT(d[f]);f=f+1|0;}}else if(a.fx==1){if(CI(a.h)==1&&HS(B9(a.h,0))==1&&!JM(Il(B9(a.h,0),0))?1:0){a.hc=3;a.hu=3;a.fx=3;b=a.j7;if(b!==null)ME(b);}else{a.jF=EO();b=En(a);e=BV(b,C(200));f=BV(b,C(211));d=Fv(a.h);g=d.data.length;h=!e?5120:10240;i=AKG(b);if(f)Kp(a,d,i);else if(g<=h)Kp(a,d,i);else if(!e){Xd(a,Pb(d),i);Kp(a,d,i);}else{Xd(a,Pb(d),i);j=Pb(d);c=a.fv;k=new Sb;k.AY=a;l=P(B,2);m=l.data;m[0]=j;j=BI(1);j.data[0]
=i;m[1]=j;CG(c,k,C(212),l);a.hc=2;Kp(a,d,i);}}}}
function Xd(a,b,c){var d,e;d=a.fv;e=new WN;e.Bi=a;CG(d,e,C(213),I(B,[b,DK([c,250])]));a.hu=2;}
function Kp(a,b,c){var d,e,f,g;d=a.fv;e=new YU;e.zr=a;f=P(B,2);g=f.data;g[0]=b;b=BI(1);b.data[0]=c;g[1]=b;CG(d,e,C(214),f);a.fx=2;}
function Fk(a){var b;b=a.fL;return b===null?C(22):AEz(b);}
function M3(a){var b,c,d,e,f;if(a.gh){b=Fk(a);c=new J;L(c);H(H(c,b),C(215));$rt_globals.console.info($rt_ustr(K(c)));}b=En(a);if(b===null)d=null;else{a:{e=(-1);switch(Kx(b)){case -1655966961:if(!Bk(b,C(211)))break a;e=3;break a;case 3401:if(!Bk(b,C(216)))break a;e=2;break a;case 98723:if(!Bk(b,C(217)))break a;e=1;break a;case 3254818:if(!Bk(b,C(200)))break a;e=0;break a;default:}}b:{switch(e){case 0:break;case 1:d=C(218);break b;case 2:d=C(219);break b;case 3:d=C(220);break b;default:d=null;break b;}d=C(221);}}if
(d===null)ME(a.j7);else{a.jF=EO();b=a.fv;c=new ADv;c.wG=a;f=P(B,1);f.data[0]=Fv(a.h);CG(b,c,d,f);}}
function Pa(a){var b;b=AX_(a.h.fp,null);YT(b);Vm(a,b.pI,b.nK);}
function AFZ(){var a=this;B.call(a);a.zZ=null;a.DO=null;a.rG=null;a.w0=null;a.wF=null;a.CG=null;}
function Pi(a,b,c){return S0(a,B5(a.zZ),b,c);}
function AA6(a,b,c){return S0(a,B5(a.DO),b,c);}
function S0(a,b,c,d){var e,f,g;b=b.data;e=b.length;f=0;while(f<e){g=b[f];if(g.Da(c,d))return g.GK;f=f+1|0;}return null;}
function ADV(a,b,c){var d,e,f,g;d=(B5(a.rG)).data;e=d.length;f=0;while(f<e){g=d[f];if(g.Da(b,c))return g.GF;f=f+1|0;}return null;}
function FO(){var a=this;B.call(a);a.cm=0;a.dv=null;a.cZ=null;a.e4=null;a.d7=0;}
var BaI=0;var BaE=0;function Zo(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;i=a.cZ;j=i===b&&!i.jV?0:1;if(j){a.cZ=b;Oe(b,c.cr,a.dv.hG);}k=ID(Bf(F1(b),e+2048|0),1024);l=a.e4;m=l.data.length;n=k<=m?0:1;if(n){a.e4=CV(l,k);while(m<k){a.e4.data[m]=C5(c);m=m+1|0;}}o=a.dv.ia;if(!(!j&&!n)){if(BaI){l=b.gY;$rt_globals.console.info("fMeasure"+l.data);BaI=0;}if(!BaE){c=o.dx;b="alphabetic";c.textBaseline=b;}else{b=o.dx;c="top";b.textBaseline=c;}a.d7=f/1024|0;p=0;while(p<k){KN(a,o,d,a.d7+p|0);p=p+1|0;}a.cZ.jV=0;}e=a.e4.data.length;if
(e&&f<=F1(a.cZ)){f=f/1024|0;g=a.d7;if(f!=g){if(X9(f-g|0)>=e){g=0;while(g<e){KN(a,o,d,f+g|0);g=g+1|0;}a.d7=f;}else{while(true){g=a.d7;if(g>=f)break;KN(a,o,d,g+e|0);a.d7=a.d7+1|0;}while(true){g=a.d7;if(g<=f)break;KN(a,o,d,g-1|0);a.d7=a.d7-1|0;}}}}}
function KN(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d*1024|0;f=Z7(a,e);g=a.cZ;if(f>=g.s.data.length)return;h=g.gY;i=!f?0.0:h.data[f-1|0];j=e;k=i-j+a.cm;l=a.dv.hG;E$(b);a:{while(true){g=a.cZ;if(f>=g.s.data.length)break a;m=l.data;g=Il(g,f);n=m[Le(g)];o=!BaE?Mn(n,c):NZ(n,c);m=h.data;Cr(b,n);B1(b,g.x,k,o);k=m[f]-j+a.cm;if(k>1024.0)break;f=f+1|0;}}h=a.e4.data;CW(h[d%h.length|0],b);}
function Rf(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs;o=a.e4.data.length;if(!o)return;if(g>F1(a.cZ))return;p=a.cZ;q=p.fi;r=p.s;s=g/1024|0;t=Z7(a,g);u= -a.cm|0;v=f;a:{while(true){w=r.data;x=w.length;if(t>=x)break a;y=t!=(x-1|0)?0:1;if(u>=e)break;z=q.data;ba=a.e4.data[s%o|0];bb=w[t];bc=z[t]+a.cm|0;x=s*1024|0;bd=(bc-x|0)>1024?0:1;be=s+1|0;bf=be*1024|0;bg=Bf(bf,bc)-g|0;if(bd&&y)bg=bg+a.cm|0;bh=i!==null?0:1;b:{if(!bh){bi=!y?a.cm:2*a.cm|0;bj=
i.b;bk=i.a;if(!(bj<bk&&g<=bk&&(g+bg|0)>(bj+bi|0)?0:1)){bl=0;break b;}}bl=1;}c:{if(!bh){bm=!y?a.cm:2*a.cm|0;if(g>=i.b&&(g+bg|0)<=(i.a+bm|0)?1:0){bn=1;break c;}}bn=0;}bo=null;if(l&&!m)bo=h.bx.g3;if(bb===j)bo=h.bx.sx;if(k!==null){p=B_(k);d:{while(Cd(p)){if(BV(Ce(p),bb)){bk=1;break d;}}bk=0;}if(bk)bo=h.bx.xV;}if(n!==null){w=n.oB;if(w===null)bi=0;else{w=w.data;bi=t>=w.length?0:w[t];}bo=AGw(h.d3,h,bi,n.fI);}if(!bn&&!bl){i.a=Bf(i.a,F1(a.cZ));AIs(a,d,u+c|0,b,f,h,ba,bb,bg,g>=i.b?bg:(Bf(bc,bf)-i.b|0)-(!y?a.cm:0)|0,(g
+bg|0)<=(i.a+(!y?a.cm:2*a.cm|0)|0)?0:(Bf(bc,bf)-i.a|0)-(!y?a.cm:0)|0,g-x|0,bo);}else{bp=h.kr.data[bb.b7];p=bn?h.bx.lH:UB(bo,YH(h,bp.nF));Cv(a.dv.j6,g-x|0,0.0,bg,v);Y(a.dv.iO,bg,f);HE(a.dv,d,ba,u+c|0,b,bp.hE,p);}if((bb.bJ&12)>>2>0){bc=u+c|0;Cc(d,1);p=a.dv;bq=p.oD;bq.b=bg;x=b+p.vt|0;bk=x-p.Dy|0;br=p.rQ;bs=x+br;ba=p.gT;VB();MQ(d,bc,bk,bq,br,bs,ba,BaJ.lT.hE);Cc(d,0);}g=g+bg|0;u=u+bg|0;if(!bd){t=t+(-1)|0;s=be;}t=t+1|0;}}}
function AIs(a,b,c,d,e,f,g,h,i,j,k,l,m){var n,o,p,q,r,s,t,u,v,w;n=f.kr.data[h.b7];o=n.hE;p=UB(m,YH(f,n.nF));q=f.bx.lH;f=a.dv;r=f.j6;s=f.iO;t=l;u=i-j|0;v=u;w=e;Cv(r,t,0.0,v,w);Y(s,u,e);HE(a.dv,b,g,c,d,o,p);l=l+i|0;Cv(r,l-k|0,0.0,k,w);Y(s,k,e);f=a.dv;c=c+i|0;HE(f,b,g,c-k|0,d,o,p);t=l-j|0;i=j-k|0;Cv(r,t,0.0,i,w);Y(s,i,e);HE(a.dv,b,g,c-j|0,d,o,q);}
function UB(b,c){if(b!==null)c=b;return c;}
function Z7(a,b){var c,d,e,f,g,h,i;c=a.cZ;d=c.gY;e=0;f=c.s.data.length;g=b;b=BQ(e,f);if(b>0){c=new BU;X(c);N(c);}a:{if(!b)f=(-1);else{b=f-1|0;while(true){h=d.data;f=(e+b|0)/2|0;i=BQ(h[f],g);if(!i)break;if(i<=0){e=f+1|0;if(e>b){f=( -f|0)-2|0;break a;}}else{b=f-1|0;if(b<e){f=( -f|0)-1|0;break a;}}}}}if(f<0)f=( -f|0)-1|0;return f;}
function AGf(a){var b,c,d;b=a.e4.data;c=b.length;d=0;while(d<c){AIZ(b[d]);d=d+1|0;}a.e4=a.dv.oR;a.cZ=null;}
function ALl(a,b,c,d,e,f,g,h,i){var j,k;j=F1(a.cZ);if(j)j=j+a.cm|0;if(!j)j=j-a.cm|0;k=Be( -a.cm|0,j-g|0);if(k>=h)return;Y(f,h-k|0,e);Bw(b,c+k|0,d,f,i);}
function AA$(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;a:{h=c.data;i=P(FO,b);j=0;k=h.length;if(k>0){c=i.data;while(true){if(e>f)break a;l=g.vw(e);m=e%c.length|0;n=e%k|0;o=h[n];if(o.cZ===l&&c[m]===null){c[m]=o;h[n]=null;}e=e+1|0;}}}p=i.data;e=0;f=p.length;while(e<f){if(p[e]===null){if(j>=k)q=null;else{b=j+1|0;q=h[j];j=b;}while(j<k&&q===null){b=j+1|0;q=h[j];j=b;}if(q!==null){p[e]=q;h[j-1|0]=null;}else{g=new FO;g.cm=3;g.d7=0;g.dv=d;g.e4=d.oR;p[e]=g;}}e=e+1|0;}while(j<k){q=h[j];if(q!==null)AGf(q);j=j+1|0;}return i;}
function Uu(b){var c,d,e;b=b.data;c=b.length;d=0;while(d<c){e=b[d].cZ;if(e!==null)e.jV=1;d=d+1|0;}}
function Ph(b){var c,d;b=b.data;c=b.length;d=0;while(d<c){AGf(b[d]);d=d+1|0;}}
function AIv(){BaE=0;}
function AJ$(){var a=this;B.call(a);a.gC=null;a.dL=null;a.fr=null;a.f5=null;a.pA=null;a.pm=null;}
function JJ(){var a=new AJ$();A2x(a);return a;}
function A2x(a){a.gC=new Bi;a.dL=new Bi;a.fr=new Bi;a.f5=new Bi;a.pA=new B4;a.pm=new B4;}
function ABo(a){var b;b=a.dL;return !Bb(b.b,b.a)?0:1;}
function Jf(a,b){return GK(b,a.fr,a.f5);}
function Gs(a,b,c,d){var e,f,g,h,i;e=Jf(a,b);f=GK(b,a.gC,a.dL);if(!e&&!f)return null;if(!f){if(!d)c.g(WV(a,b.b-a.fr.b|0));else c.g(RP(a,b.a-a.fr.a|0));}g=!d?a.gC.b+(a.dL.b/2|0)|0:a.gC.a+(a.dL.a/2|0)|0;h=!d?b.b:b.a;i=!f?0:g-h|0;if(!d){b=new TN;b.xg=a;b.xh=c;b.xf=i;}else{b=new TM;b.sP=a;b.sN=c;b.sO=i;}return b;}
function IA(a,b,c){if(c!==null)BM(a.pA,c);if(b!==null)BM(a.pm,b);}
function AHO(b,c){var d;d=new AD5;d.uH=b;d.D4=c;return d;}
function RP(a,b){var c,d,e;c=a.f5.a;d=a.dL.a;e=c-d|0;return AHO(Bf(Be(0,b-(d/2|0)|0),e),e);}
function WV(a,b){var c,d,e;c=a.f5.b;d=a.dL.b;e=c-d|0;return AHO(Bf(Be(0,b-(d/2|0)|0),e),e);}
function KW(a,b,c,d,e,f,g){W2(a,b,c,d,e,f,g,1);}
function SO(a,b,c,d,e,f,g){W2(a,b,c,d,e,f,g,0);}
function W2(a,b,c,d,e,f,g,h){var i,j,k,l;a:{if(e>d){i=g*3|0;if(d>i){i=Bf(i,d);j=Be(AAA(d,d,e),i);e=e-d|0;i=d-j|0;i=i?AAA(b,i,e):0;if(!h){k=a.gC;k.b=i+c|0;k.a=f-g|0;l=a.dL;l.b=j;l.a=g;l=a.fr;l.b=c;l.a=k.a;k=a.f5;k.b=d;k.a=g;break a;}k=a.gC;k.b=f-g|0;k.a=i+c|0;l=a.dL;l.b=g;l.a=j;l=a.fr;l.b=k.b;l.a=c;k=a.f5;k.b=g;k.a=d;break a;}}Y(a.f5,0,0);Y(a.dL,0,0);}}
function Xf(a,b){Hn(a,b);Hs(a,b);}
function Hn(a,b){var c;c=a.fr;Bw(b,c.b,c.a,a.f5,a.pA);}
function Hs(a,b){var c,d;c=a.dL;c.b=c.b-2|0;c.a=c.a-2|0;d=a.gC;Bw(b,d.b+1|0,d.a+1|0,c,a.pm);b=a.dL;b.b=b.b+2|0;b.a=b.a+2|0;}
function Gz(a,b,c){return Jf(a,b)&&Ha(c)?1:0;}
function AHC(){var a=this;B.call(a);a.GV=20;a.ha=null;a.fS=null;a.md=0.0;a.ma=null;a.j1=0;a.lC=0;a.hT=0;a.dm=null;a.pC=null;a.fD=null;a.hm=null;a.hk=0;}
function AJ3(){var a=new AHC();A7u(a);return a;}
function A7u(a){a.GV=20;a.ha=new Bi;a.fS=new Bi;a.dm=BO();a.pC=Dh(0);}
function ADR(a,b,c){var d,e,f,g,h;d=a.hk;if(b==d)return;e=a.dm.p;f=e*20|0;if(d<b){g=d/20|0;h=b/20|0;}else{h=Be(0,(d-1|0)/20|0);g=Be(0,(b-1|0)/20|0);}a:{if((h-g|0)>=e){Th(a,b);a.hk=b;}else{ZB(a,c);if(a.hk>=b)while(true){if(h<g)break a;a.hk=Qj(BK(a.dm,h%e|0),a.fD,a.hm,a.hk,b,f,a.md);h=h+(-1)|0;}while(g<=h){a.hk=Qj(BK(a.dm,g%e|0),a.fD,a.hm,a.hk,b,f,a.md);g=g+1|0;}}}}
function Mp(a,b){if(b===null)b=Dh(0);a.pC=b;}
function AC5(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;f=a.hT;g=b/f|0;f= -(b%f|0)|0;while(f<c){h=a.dm;h=BK(h,g%h.p|0);i=a.ha;j=a.pC;k=h.fQ.a;l=d.lX;m=b+f|0;n=h.cJ;m=m/n|0;o=k/n|0;p=0;q=0;r=0;while(q<o){s=j.data;t=m+q|0;k=s.length;if(t<k?(s[r]!=s[t]?0:1):r<k&&XO(d,j,r,l)!==l.lQ?0:1){k=Bb((q-p|0)+1|0,h.cJ);Y(h.jT,BW(h.c8),k);Cv(h.kB,0.0,Bb(p,h.cJ),BW(h.c8),k);t=r;}else{u=XO(d,j,r,l);N4(h,e,f+Bb(p,h.cJ)|0,i,l.p1,u);Y(h.jT,BW(h.c8),h.cJ);Cv(h.kB,0.0,Bb(q,h.cJ),BW(h.c8),h.cJ);p=q;}q=q+1|0;r=t;}u=XO(d,j,r,l);N4(h,
e,f+Bb(p,h.cJ)|0,i,l.p1,u);g=g+1|0;f=f+a.hT|0;}}
function Ut(a,b,c,d){var e,f,g,h,i,j;e=a.dm.p;while(true){f=a.dm.p;g=Bb(f,a.hT);if(g>(d+a.lC|0))break;h=BJ(0,g);i=new RW;g=a.fS.b;f=a.lC;j=a.ma;i.jT=new Bi;i.kB=new B4;i.rg=h;i.eA=20;i.cJ=f;i.fQ=BJ(g,20*f|0);i.h2=Mn(j,f);if(i.c8===null)i.c8=C5(b);BA(a.dm,i);}if(f==e)return;ZB(a,b);Th(a,c);}
function Th(a,b){var c,d,e,f,g,h,i,j,k;c=a.dm;d=c.p;e=Bb((b/(d*20|0)|0)+1|0,d)*20|0;c=B_(c);while(Cd(c)){f=Ce(c);g=a.fD;h=a.md;E$(g);i=0;while(true){j=f.eA;if(i>=j)break;k=e-Bb(d,j)|0;if(k<b)k=e;e=k+1|0;Hh(f,g,Dr(e),Bb(f.cJ,i)+f.h2|0,h);i=i+1|0;}CW(f.c8,g);f.yu=g.jW;}}
function AAx(a,b,c,d){a.ma=b;a.lC=c;a.hT=c*20|0;a.j1=d;AAz(a);}
function ZB(a,b){var c;c=a.fD;if(!(c!==null&&c.jW==a.j1)){c=Eg(b,a.fS.b,a.hT,a.j1);a.fD=c;Cr(c,a.ma);AB7(a.fD,2);}c=a.hm;if(!(c!==null&&c.jW==a.j1)){b=Eg(b,a.fS.b,a.lC,a.j1);a.hm=b;Cr(b,a.ma);AB7(a.hm,2);}}
function I7(a){FP(a.dm,new AFS);I1(a.dm);AAz(a);}
function AAz(a){a.fD=BR(a.fD,null);a.hm=BR(a.hm,null);}
function TP(a,b,c,d,e){Ct(a.ha,b);Y(a.fS,c,d);a.md=e;}
function Zc(){B.call(this);this.Fr=null;}
function Zb(){B.call(this);this.rs=null;}
function APs(a,b){var c;c=a.rs;Gp(c,Gi(b,Ly(c)));}
function Za(){B.call(this);this.uy=null;}
function AOK(a,b){var c;c=a.uy;Jd(c,Gi(b,AC_(c)));}
function AMY(){var a=this;B.call(a);a.j6=null;a.iO=null;a.oD=null;a.gT=null;a.um=null;a.hG=null;a.oR=null;a.dw=null;a.ia=null;a.rQ=0.0;a.d5=0;a.vt=0;a.Dy=0;a.jm=0;}
function ATi(a){var b=new AMY();AW5(b,a);return b;}
function AW5(a,b){a.j6=new B4;a.iO=new Bi;a.oD=new Bi;a.gT=new B4;a.um=A0S(0);a.hG=P(Mb,4);a.oR=P(Li,0);a.jm=b;Mf(a.gT);}
function Z$(a){a.ia=BR(a.ia,null);}
function TT(a,b,c){var d,e;d=C7(Fp(a.dw)*b);a.d5=d;e=a.dw;a.vt= -( -((d+e.eN+e.e8)/2.0)|0)|0;AGm(a,c);return a.d5;}
function QV(a,b){var c,d;Mf(a.gT);c=a.gT;WI(c,b,c);a.rQ=YR(a.gT);c=a.gT;d=c.bu+c.bi+1.5|0;a.Dy=d;Y(a.oD,0,d*2|0);}
function AGm(a,b){a.ia=BR(a.ia,Eg(b,1024,a.d5,a.jm));}
function HE(a,b,c,d,e,f,g){var h,i;h=a.iO;if(h.b&&h.a){i=a.j6;if(i.bD!==0.0&&i.bi!==0.0){DT(b,d,e,h,i,c,f,g,a.jm);return;}}}
function Y_(){B.call(this);this.CW=null;}
function AY8(a){var b,c;b=a.CW;c=b.kQ?0:1;b.kQ=c;b=new J;L(b);J4(H(b,C(222)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Zg(){B.call(this);this.y4=null;}
function A1C(a){var b,c;b=a.y4;c=b.lJ^1;b.lJ=c;b=new J;L(b);J4(H(b,C(223)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function Zf(){B.call(this);this.vn=null;}
function A8q(a){var b,c,d,e,f;b=a.vn;c=(b.eC+3|0)%6|0;b.eC=c;d=b.fh.data;e=d.length;f=0;while(f<e){b=d[f];b.cm=c;b=b.cZ;if(b!==null)b.jV=1;f=f+1|0;}}
function Ze(){B.call(this);this.xY=null;}
function ATq(a){var b;b=a.xY;b.cb=b.cb?0:1;I7(b.dz);b.dz=AJ3();OO(b);ACz(b,b.i,b.k,b.ch.ca);}
function Zd(){B.call(this);this.sh=null;}
function AVn(a){var b;b=a.sh;b.mE=b.mE?0:1;}
function Y$(){B.call(this);this.Bb=null;}
function A7O(a){var b;b=a.Bb;b.qX=b.qX?0:1;}
function Ww(){B.call(this);this.tA=null;}
function ATs(a){var b;b=a.tA;AAs(b,b.mp,b.o6);}
function Wx(){B.call(this);this.sG=null;}
function A4D(a){var b;b=a.sG;AAs(b,b.o6,b.mp);}
var AG_=G(0);
function ALv(b,c,d){return I9(b,c,d,255,new B4);}
function I9(b,c,d,e,f){Cv(f,b/255.0,c/255.0,d/255.0,e/255.0);return f;}
function W8(b,c,d,e){var f,g,h,i,j;f=b*6.0;g=d*c;h=g*(1.0-ARV(f%2.0-1.0));i=d-g;j=0.0;if(f>=1.0){if(f<2.0){b=g;g=h;h=b;}else if(f<3.0){b=g;j=h;g=0.0;h=b;}else if(f<4.0){j=g;g=0.0;}else if(f>=5.0){j=h;h=0.0;}else{j=g;g=h;h=0.0;}}e.bp=g+i;e.bu=h+i;e.bi=j+i;return e;}
function I0(b,c,d,e,f){f=W8(b,c,d,f);f.bD=e;return f;}
function In(b){return (b<10?b+48|0:(b+65|0)-10|0)&65535;}
var AB2=G();
function AU1(a,b){var c,d;a:{if(ADp(b)){c=b.bh;if(!(c!=67&&c!=88&&c!=86&&c!=45)){c=1;break a;}}c=b.bS&&!b.cP&&!b.dy&&!b.ja?1:0;c=c&&b.bh==46?1:0;}b:{if(!c){d=b.bh;if(!(d!=122&&d!=123&&d!=116?0:1))break b;}b.lW=1;}return 0;}
function AB1(){B.call(this);this.yY=null;}
function AYw(a,b){var c;c=a.yY.b5;return c!==null&&c.br(b)?1:0;}
function Vp(){var a=this;B.call(a);a.Z=null;a.yi=null;a.i9=null;a.i5=null;a.U=null;a.dD=null;a.Y=null;a.gL=null;a.it=0;}
function AGP(a){var b=new Vp();AVa(b,a);return b;}
function A7z(a,b){var c=new Vp();AHN(c,a,b);return c;}
function AVa(a,b){AHN(a,b,AYC());}
function AHN(a,b,c){var d;a.Z=b;d=new V5;Fl(d);d.nv=new B4;d.gH=b;a.U=d;a.Y=c;}
function U1(a,b){var c,d;if(a.dD===null){c=new RO;c.gM=new Bi;c.lm=new Bi;a.dD=c;d=a.gL;if(d!==null)ACp(c,d);}a.dD.jL=b;}
function Lg(a){var b;b=a.i9;if(b!==null)b.e();}
function LB(a){var b;b=a.i5;if(b!==null)b.e();}
function C0(a,b){var c;c=a.U;c.e9=c.e9|(BV(c.kl,b)?0:1);c.kl=b;IY(a);}
function ACq(a,b,c){var d,e,f;d=a.U;e=BV(d.h6,b)?0:1;f=c===d.lt?0:1;if(e){d.h6=b;d.eZ=null;RG(d,0);}d.e9=d.e9|(!e&&!f?0:1);d.lt=c;d.iR=0;IY(a);}
function Ex(a,b){var c;a.gL=b;c=b.ok;BG(b);ACq(a,c,3.0);c=a.dD;if(c!==null)ACp(c,b);}
function Kv(a){var b;b=a.U;b.em=BR(b.em,null);b.eZ=null;a.Y=BR(a.Y,null);b=a.dD;if(b!==null){OB(b);b.jL=null;}}
function LP(a,b){var c,d,e;c=a.Y;d=c.i;e=c.k;b=BR(c,b);a.Y=b;b.dW(d,e,a.Z.ca);}
function Ef(a,b,c){a.Y.dW(b,c,a.Z.ca);IY(a);}
function IY(a){var b,c,d;if(a.Z.ca!==0.0){b=a.U;if(b.h6!==null){c=a.Y.k.b;b.k.b=c;d=b.em;if(d!==null&&c!=BW(d)&&!(c>=b.iR&&BW(b.em)>=b.iR))b.e9=1;b=a.U;b.bY=a.Z.ca;if(O4(b))c=0;else{b=a.U;RG(b,Xl(b));c=b.k.a;}b=a.U.i;d=a.Y.i;Y(b,d.b,d.a-c|0);b=a.dD;if(b!==null)Ct(b.gM,a.U.i);return;}}}
function AEN(a){return Xl(a.U);}
function MT(a,b){return AEv(a,b.j);}
function AEv(a,b){var c;c=!(a.it&1)?0:1;return !c&&!B3(a.Y,b)?0:1;}
function MN(b,c){if(b<0)c=C(224);else if(b>0)c=C(225);return c;}
function Ps(a,b,c){var d;d=a.U.i.b;return (d-c|0)<=b&&b<d?1:0;}
function No(a,b,c){var d,e;d=a.U;e=d.i.b+d.k.b|0;return e<=b&&b<(e+c|0)?1:0;}
function NU(a,b,c){var d;d=a.U.i.a;return (d-c|0)<=b&&b<d?1:0;}
function Ln(a,b,c){var d,e;d=a.Y;e=d.i.a+d.k.a|0;return e<=b&&b<(e+c|0)?1:0;}
function O7(a,b,c){var d,e,f;d=a.U.i.a-c|0;e=a.Y;f=(e.i.a+e.k.a|0)+c|0;return d<=b&&b<f?1:0;}
function AFD(a,b,c){var d,e;d=a.U.i.a+c|0;e=a.Y;return AL0(b,d,(e.i.a+e.k.a|0)-c|0);}
function NK(a,b,c){var d,e,f;d=a.U;e=d.i.b;f=e-c|0;e=(e+d.k.b|0)+c|0;return f<=b&&b<e?1:0;}
function Y9(a,b,c){var d,e;d=a.U;e=d.i.b;return AL0(b,e+c|0,(e+d.k.b|0)-c|0);}
function AL0(b,c,d){a:{if(c<d){if(b<c)return (-1);if(b<=d)break a;return 1;}b=BQ(b*2|0,c+d|0);if(b<0)return (-1);if(b>0)return 1;}return 0;}
function QJ(a,b){var c;a:{b:{c:{c=Cw(a.Z,7.0);if(NK(a,b.b,c)){if(NU(a,b.a,c))break c;if(Ln(a,b.a,c))break c;}if(!O7(a,b.a,c))break b;if(!Ps(a,b.b,c)&&!No(a,b.b,c))break b;}c=1;break a;}c=0;}return c;}
function KC(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=new Bi;f=new Bi;g=b.b;h=b.a;b=a.Y;i=b.i;j=i.b;k=i.a;b=b.k;l=b.b;m=b.a;b=new AFI;b.t3=a;b.t4=e;b.t5=f;b.t6=c;b.uc=g;b.ud=j;b.ue=l;b.uf=d;b.t_=h;b.ua=k;b.D$=m;return b;}
function NB(a){var b;b=a.dD;if(b!==null){b.jL.e();return;}b=new Gq;X(b);N(b);}
function AAF(a){return !(a.it&2)?0:1;}
function Yf(a){var b,c;b=a.Z;c=b.bH;Y(b.c9,0,0);Ef(a,a.Z.c9,c);}
function KU(){var a=this;B.call(a);a.w=null;a.v=null;a.bd=null;a.bq=null;}
function TY(){var a=new KU();AEh(a);return a;}
function UE(a,b,c,d){var e=new KU();AP6(e,a,b,c,d);return e;}
function AEh(a){a.w=new Bi;a.v=new Bi;a.bd=new B4;a.bq=new B4;}
function AP6(a,b,c,d,e){a.w=new Bi;a.v=new Bi;a.bd=new B4;a.bq=new B4;HI(a,b,c,d,e);}
function HI(a,b,c,d,e){Y(a.w,b,c);Y(a.v,d,e);}
function ADc(a){Y(a.v,0,0);}
function LQ(a){var b;b=a.v;return Bb(b.b,b.a)?0:1;}
function Fw(a,b){return GK(b,a.w,a.v);}
function ABJ(a,b,c,d){var e;e=a.w;Bw(b,e.b+c|0,e.a+d|0,a.v,a.bd);}
function XC(a,b,c,d,e,f){var g,h,i,j;g=a.w;d=g.b+d|0;e=g.a+e|0;g=a.v;h=a.bq;i=a.bd;GX(b,b.js);G9(b.js,b.be,d,e,g,b.dd);OJ(b.js,b.be,c);g=b.js;j=b.be;FZ(j,g.xJ,h);FZ(j,g.xH,i);c=g.t7;j.uniform2f(c,f,0.0);Go(b);}
var FI=G();
function N$(){FI.call(this);this.GK=null;}
function ACY(){FI.call(this);this.GF=null;}
function AAG(){FI.call(this);this.FS=null;}
var GB=G(0);
var T5=G(0);
function B4(){var a=this;B.call(a);a.bp=0.0;a.bu=0.0;a.bi=0.0;a.bD=0.0;}
function AF8(a,b,c,d){var e=new B4();A5h(e,a,b,c,d);return e;}
function AN0(a){var b=new B4();AMZ(b,a);return b;}
function A5h(a,b,c,d,e){a.bp=b;a.bu=c;a.bi=d;a.bD=e;}
function Cv(a,b,c,d,e){a.bp=b;a.bu=c;a.bi=d;a.bD=e;}
function AMZ(a,b){a.bp=b.bp;a.bu=b.bu;a.bi=b.bi;a.bD=b.bD;}
function BM(a,b){a.bp=b.bp;a.bu=b.bu;a.bi=b.bi;a.bD=b.bD;return a;}
function AYg(a,b){var c;if(a===b)return 1;a:{if(b!==null&&BF(a)===BF(b)){b=b;if(b.bp===a.bp&&b.bu===a.bu&&b.bi===a.bi&&b.bD===a.bD?1:0){c=1;break a;}}c=0;}return c;}
function AP2(a){var b,c,d,e,f;b=a.bp;c=a.bu;d=a.bi;e=a.bD;f=new J;L(f);Di(H(Di(H(Di(H(Di(H(f,C(73)),b),C(74)),c),C(226)),d),C(227)),e);return K(f);}
var JD=G(0);
function AK4(){var a=this;EH.call(a);a.cu=null;a.p=0;}
function BO(){var a=new AK4();ARy(a);return a;}
function ARy(a){a.cu=P(B,10);}
function Nv(a,b){var c,d;c=a.cu.data.length;if(c<b){d=c>=1073741823?2147483647:Be(b,Be(c*2|0,5));a.cu=CV(a.cu,d);}}
function BK(a,b){Lb(a,b);return a.cu.data[b];}
function A4k(a){return a.p;}
function BA(a,b){var c,d;Nv(a,a.p+1|0);c=a.cu.data;d=a.p;a.p=d+1|0;c[d]=b;a.b_=a.b_+1|0;return 1;}
function AMc(a,b,c){var d,e,f;RI(a,b);Nv(a,a.p+1|0);d=a.p;e=d;while(e>b){f=a.cu.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.cu.data[b]=c;a.p=d+1|0;a.b_=a.b_+1|0;}
function E3(a,b){var c,d,e,f;Lb(a,b);c=a.cu.data;d=c[b];e=a.p-1|0;a.p=e;while(b<e){f=b+1|0;c[b]=c[f];b=f;}c[e]=null;a.b_=a.b_+1|0;return d;}
function AJA(a,b){var c;c=LM(a,b);if(c<0)return 0;E3(a,c);return 1;}
function I1(a){AHm(a.cu,0,a.p,null);a.p=0;a.b_=a.b_+1|0;}
function ALf(a,b,c){var d,e,f,g,h,i;RI(a,b);if(c.e7())return 0;Nv(a,a.p+c.c$()|0);d=c.c$();e=a.p;f=e-1|0;while(f>=b){g=a.cu.data;g[f+d|0]=g[f];f=f+(-1)|0;}a.p=e+d|0;h=c.ci();i=0;while(i<d){g=a.cu.data;e=b+1|0;g[b]=h.ck();i=i+1|0;b=e;}a.b_=a.b_+1|0;return 1;}
function Lb(a,b){var c;if(b>=0&&b<a.p)return;c=new BL;X(c);N(c);}
function RI(a,b){var c;if(b>=0&&b<=a.p)return;c=new BL;X(c);N(c);}
function FP(a,b){var c;c=0;while(c<a.p){b.g(a.cu.data[c]);c=c+1|0;}}
function AM3(a){var b,c,d,e;b=a.p;if(!b)return C(23);c=b-1|0;d=new J;Ge(d,b*16|0);Bq(d,91);b=0;while(b<c){e=a.cu.data;BN(H(d,e[b]!==a?e[b]:C(228)),C(40));b=b+1|0;}e=a.cu.data;H(d,e[c]!==a?e[c]:C(228));Bq(d,93);return K(d);}
function Ii(){var a=this;B.call(a);a.fI=0;a.oB=null;}
function A0S(a){var b=new Ii();ATO(b,a);return b;}
function ATO(a,b){a.fI=b;}
function Mb(){var a=this;B.call(a);a.pf=null;a.Ep=null;a.pZ=0.0;a.EC=0;a.ES=0;a.uG=0;a.Fw=0;a.eN=0.0;a.e8=0.0;a.Et=0.0;a.q6=0.0;a.Ey=0;a.rU=null;}
function Mn(a,b){return NZ(a,b)+a.uG|0;}
function NZ(a,b){return (b-Fp(a)|0)/2|0;}
function Fp(a){return C7(a.eN+a.e8);}
function N0(a,b){return C7((a.eN+a.e8)*b);}
function Li(){var a=this;B.call(a);a.d6=null;a.gz=null;a.eb=null;a.kM=0;}
function AIZ(a){var b,c;b=a.gz;if(b!==null){c=a.d6;c.k5=c.k5-1|0;c.gd=c.gd-a.kM|0;c.er.deleteTexture(b);a.gz=null;a.kM=0;}}
function BW(a){return a.eb.b;}
function CY(a){return a.eb.a;}
function AKj(b,c,d){var e;a:{switch(d){case 32856:break;case 33321:e=1;break a;default:e=0;break a;}e=4;}return Bb(Bb(b,c),e);}
function UJ(a,b,c,d){var e;e=a.eb;e.b=b;e.a=c;Pd(a);a.d6.er.texStorage2D(3553,1,d,b,c);e=a.d6.er;e.texParameteri(3553,10242,33071);e.texParameteri(3553,10243,33071);e.texParameteri(3553,10241,9729);e.texParameteri(3553,10240,9729);}
function Pd(a){var b,c;b=a.d6.er;c=a.gz;b.bindTexture(3553,c);}
function CW(a,b){Yz(a,b.oU,b.oh,32856);AAC(a,b,0,0);}
function Yz(a,b,c,d){var e,f,g,h;a:{e=a.eb;f=e.b;if(f){g=e.a;if(g){if(f==b&&g==c?1:0){Pd(a);break a;}e=a.d6;e.gd=e.gd-a.kM|0;e=e.er;h=a.gz;e.deleteTexture(h);a.gz=a.d6.er.createTexture();UJ(a,b,c,d);e=a.eb;b=AKj(e.b,e.a,d);a.kM=b;e=a.d6;e.gd=e.gd+b|0;break a;}}UJ(a,b,c,d);e=a.eb;b=AKj(e.b,e.a,d);a.kM=b;e=a.d6;e.gd=e.gd+b|0;}}
function Kk(a,b,c,d){Pd(a);AAC(a,b,c,d);}
function AAC(a,b,c,d){var e;e=a.d6.er;b=b.jM;e.texSubImage2D(3553,0,c,d,6408,5121,b);}
var AAw=G(0);
var BaK=0.0;function Mf(b){Cv(b,1.0471975803375244,0.75,1.25,0.375);}
function WI(b,c,d){var e;if(c<0.5)c=0.25;e=c>=4.0?0.5:JU(b.bD,JU(c,BaK));Cv(d,b.bp/c,b.bu*c,AXD(b.bi*c,1.25),e);}
function YR(b){var c;c=b.bu;return c-(c|0)>=0.25?0.0:0.5;}
function AGN(){BaK=NQ(NQ(0.5,0.375),4.0);}
var Pz=G(0);
function Ha(a){return D$(a,null);}
function SN(b){var c;c=new ABU;c.wX=b;return c;}
function AAP(){B.call(this);this.uY=null;}
function A2b(a){Lq(a.uY);}
function AAO(){B.call(this);this.xA=null;}
function AYR(a){LE(a.xA);}
function ANN(){var a=this;B.call(a);a.bU=null;a.bL=null;a.dQ=0;}
function APu(){var a=new ANN();A7U(a);return a;}
function A0G(a){var b=new ANN();AUw(b,a);return b;}
function A7U(a){a.bU=new HH;a.bL=new HH;}
function AUw(a,b){a.bU=new HH;a.bL=new HH;Kj(a,b);}
function Kj(a,b){AD8(a.bU,b.bU);AD8(a.bL,b.bL);a.dQ=b.dQ;}
function OL(a,b,c){Cj(a.bL,b,c);if(!a.dQ)Cj(a.bU,b,c);}
function RR(a,b){Cj(a.bU,b,0);Cj(a.bL,b+1|0,0);}
function EF(a){if(Tm(a.bU,a.bL)>0)return a.bL;return a.bU;}
function Gu(a){if(Tm(a.bU,a.bL)<0)return a.bL;return a.bU;}
function AMX(a,b){var c,d,e,f;c=a.bU;d=c.Q;e=a.bL;if(d==e.Q&&c.bg==e.bg?1:0)return null;c=EF(a);e=Gu(a);d=c.Q;if(d<=b){f=BQ(b,e.Q);if(f<=0)return BJ(b<=d?c.bg:0,f>=0?e.bg:(-1));}return null;}
function DE(a){var b,c;b=a.bU;c=a.bL;return (b.Q==c.Q&&b.bg==c.bg?1:0)?0:1;}
function Va(){var a=this;B.call(a);a.fO=null;a.fK=0;a.d8=0;}
function AEF(a,b){var c,d,e;c=a.fK;d=a.fO;if(c==d.data.length)a.fO=CV(d,c+16|0);d=a.fO.data;e=a.fK;a.fK=e+1|0;d[e]=b;}
function ABQ(a){var b,c,d,e;b=a.fK;if(b?0:1)return;c=a.d8;d=b-1|0;if(c==d)a.d8=c-1|0;e=a.fO.data;a.fK=d;e[d]=null;}
var Hr=G();
function ABK(){var a=this;Hr.call(a);a.E=null;a.dC=null;a.fp=null;a.ec=null;a.d2=null;a.jh=null;a.ml=null;a.cE=0;a.on=0;a.BV=0.0;}
function B9(a,b){return a.E.data[b];}
function CI(a){return a.E.data.length;}
function AEt(a){return F0(a,CI(a));}
function G4(a,b){return a.E.data[b].W;}
function ANC(a,b,c){var d,e,f,g,h;d=a.E;e=d.data;f=e[b];d=CV(d,e.length+1|0);e=d.data;a.E=d;g=e.length-1|0;while(true){h=g-1|0;if(h<=b)break;e[g]=e[h];g=g+(-1)|0;}if(!c){e[b]=Ej(P(CB,0));a.E.data[b+1|0]=f;}else if(c==f.W){e[b]=f;e[b+1|0]=Ej(P(CB,0));}else{e=(Jl(f,c)).data;d=a.E.data;d[b]=e[0];d[b+1|0]=e[1];}Gt(a,b,c,0,C(183));}
function Mg(a,b){var c,d,e,f,g,h,i;c=a.E.data;d=c[b];e=c[b+1|0];f=Ej(MI(d.s,e.s));g=a.E;h=g.data.length;if(b<h&&b>=0){i=P(DR,h-1|0);c=i.data;ABD(g,b,i);c[b]=f;a.E=i;return;}d=new Bu;X(d);N(d);}
function PX(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;d=a.E.data;if(!(c<d[b].W?0:1)){d=(B9(a,b)).s.data;e=d.length;f=0;g=c;a:{while(f<e){h=d[f];if(g<M(h.x)){e=Q(h.x,g);break a;}g=g-M(h.x)|0;f=f+1|0;}e=0;}Gt(a,b,c,1,Ol(e));h=a.E.data[b];d=h.s;e=0;b:{while(true){i=d.data;f=i.length;if(e>=f)break b;b=M(i[e].x);if(c<b)break;c=c-b|0;e=e+1|0;}}if(M(i[e].x)==1)h.s=ABD(d,e,P(CB,f-1|0));else{j=i[e];if(c<=0)k=Er(DD(j.x,1),j.b7,j.bJ);else if(c>=(M(j.x)-1|0)){k=new CB;l=j.x;ADu(k,Cz(l,0,M(l)-1|0),j.b7,j.bJ);}else{d=B7(M(j.x)-1|
0);m=d.data;b=0;while(b<c){m[b]=Q(j.x,b);b=b+1|0;}b=m.length;while(c<b){k=j.x;n=c+1|0;m[c]=Q(k,n);c=n;}k=Er(GI(d),j.b7,j.bJ);}i[e]=k;}h.W=h.W-1|0;Fj(h);}else if(b!=(d.length-1|0)){Gt(a,b,c,1,C(183));Mg(a,b);}}
function AGt(a,b,c,d){var e,f,g,h,i,j,k,l,m;e=d.data;f=e.length;if(!f)return;if(f==1){AB_(a.E.data[b],c,e[0]);return;}g=f-1|0;d=(Jl(a.E.data[b],c)).data;h=d[0];i=d[1];d=a.E;j=CV(d,d.data.length+g|0);d=j.data;f=d.length-1|0;while(true){c=f-g|0;if(c<=b)break;d[f]=d[c];f=f+(-1)|0;}k=e[0];l=h.s.data;f=l.length;c=!f?0:M(l[f-1|0].x);Ng(h,h.s.data.length-1|0,c,k);d[b]=h;m=1;while(m<g){k=!GT(e[m])?ZD(e[m]):Ej(P(CB,0));d[b+m|0]=k;m=m+1|0;}Ng(i,0,0,e[g]);d[b+g|0]=i;a.E=j;}
function WB(a,b){var c,d,e,f,g,h,i;c=EF(b);d=Gu(b);e=c.Q;if(e==d.Q)return Cz(F7(a.E.data[e]),c.bg,d.bg);f=new J;L(f);b=a.E.data[c.Q];e=c.bg;Bq(BN(f,DD(F7(b),e)),10);g=a.E.data;e=c.Q+1|0;h=d.Q;i=g.length;if(e>=0&&h>=e&&h<=i){while(true){while(e<h){i=e+1|0;AGG(BN(f,F7(g[e])),10);e=i;}if(!(e>=h?0:1))break;}b=a.E.data[d.Q];h=d.bg;BN(f,Cz(F7(b),0,h));return K(f);}b=new O8;X(b);N(b);}
function P3(a,b,c){var d;AE8(a,b);d=EF(b);Gt(a,d.Q,d.bg,1,c);}
function AE8(a,b){var c,d,e,f,g,h,i;a:{c=EF(b);d=Gu(b);e=c.Q;if(e==d.Q)Ie(a.E.data[e],c.bg,d.bg);else{b=a.E.data[e];Ie(b,c.bg,b.W);Ie(a.E.data[d.Q],0,d.bg);e=c.Q+1|0;f=d.Q;g=a.E;h=g.data.length;if(e<h&&e>=0){if(f<=h&&f>=0){i=P(DR,(h-f|0)+e|0);AH2(g,e,f,i);a.E=i;Mg(a,c.Q);break a;}b=new Bu;X(b);N(b);}b=new Bu;X(b);N(b);}}}
function JI(a,b,c){return D1(b,Hd(B9(a,b),c));}
function AFB(a,b){var c,d,e;c=0;d=0;while(true){e=a.E.data.length;if(c>=e)break;if((d+(B9(a,c)).W|0)>=b)return BJ(c,b-d|0);d=d+((B9(a,c)).W+1|0)|0;c=c+1|0;}return BJ(e,0);}
function F0(a,b){var c,d,e;c=0;d=a.E.data.length;e=0;while(e<b){c=c+G4(a,e)|0;e=e+1|0;if(e>=d)continue;c=c+1|0;}return c;}
function MG(a,b){return O$(B9(a,b.bt),b.by);}
function Fv(a){var b,c,d,e,f,g,h,i,j;b=B7(AEt(a));c=b.data;d=a.E.data.length;e=0;f=0;while(e<d){g=a.E.data[e].s.data;h=g.length;i=0;while(i<h){j=g[i].x;R5(j,0,M(j),b,f);f=f+M(j)|0;i=i+1|0;}e=e+1|0;if(e>=d)continue;h=f+1|0;c[f]=10;f=h;}return b;}
function Gt(a,b,c,d,e){var f,g,h,i,j,k;a:{a.cE=a.cE+1|0;f=a.jh;g=P(HB,1);h=new HB;h.eF=b;h.fm=c;i=MV(e,C(183),0);if(d){i=i.data;j=i.length;if(j>0){if(j==1){k=BJ(b,c+M(i[0])|0);break a;}k=BJ((b+j|0)-1|0,M(i[j-1|0]));break a;}}k=BJ(b,c);}i=g.data;h.qu=k;h.o9=d;h.hs=e;i[0]=h;BA(f,g);N3(a,b,c,d,e);}
function N3(a,b,c,d,e){var f;f=F0(a,b)+c|0;if(!d){ZC(a.dC,f,M(e));Vi(a.fp,f,M(e));}else{WX(a.dC,f,M(e));Qf(a.fp,f,M(e));}}
function YD(a,b){var c,d,e;c=MV(b.hs,C(183),(-1));if(b.o9){AGt(a,b.eF,b.fm,c);ZC(a.dC,F0(a,b.eF)+b.fm|0,M(b.hs));Vi(a.fp,F0(a,b.eF)+b.fm|0,M(b.hs));}else{c=c.data;d=APu();Cj(d.bU,b.eF,b.fm);e=c.length;if(e==1)Cj(d.bL,b.eF,b.fm+M(c[0])|0);else Cj(d.bL,(b.eF+e|0)-1|0,M(c[e-1|0]));AE8(a,d);WX(a.dC,F0(a,b.eF)+b.fm|0,M(b.hs));Qf(a.fp,F0(a,b.eF)+b.fm|0,M(b.hs));}return b.qu;}
function ADG(a){return a.on==a.cE?0:1;}
function Lj(a){a.on=a.cE;}
function NY(a){var b,c,d;a.ml=BI(a.E.data.length+1|0);b=0;while(b<a.E.data.length){c=a.ml.data;d=b+1|0;c[d]=(c[b]+(B9(a,b)).W|0)+1|0;b=d;}}
function Xw(a,b){var c,d,e,f,g,h;c=a.ml;if(c===null){d=0;e=0;a:{while(true){c=a.E.data;f=c.length;if(e>=f)break;g=c[e].W;if(b<=(d+g|0)){h=D1(e,b-d|0);break a;}d=d+(g+1|0)|0;e=e+1|0;}h=D1(f,0);}return h;}d=AMO(c,b);if(d<0)d=( -d|0)-1|0;d=d-1|0;h=D1(d,b-(d<0?0:a.ml.data[d])|0);if(h.by>=(B9(a,h.bt)).W){h.bt=h.bt+1|0;h.by=0;}return h;}
function ABU(){B.call(this);this.wX=null;}
function D$(a,b){ABL(a.wX,b);return 1;}
function HH(){var a=this;B.call(a);a.Q=0;a.bg=0;}
function Cj(a,b,c){a.Q=b;a.bg=c;}
function AD8(a,b){a.Q=b.Q;a.bg=b.bg;}
function Tm(a,b){var c;c=BQ(a.Q,b.Q);if(c)return c;return BQ(a.bg,b.bg);}
function Oy(){var a=this;B.call(a);a.qy=null;a.pE=null;}
function MM(a){return a.qy.bt;}
function Lu(a){return a.qy.by;}
function DR(){var a=this;B.call(a);a.s=null;a.W=0;a.gY=null;a.fi=null;a.eT=null;a.iP=null;a.hF=0;a.jV=0;a.ke=0;}
var BaL=0;var BaM=0;var BaF=0;function ZD(a){var b=new DR();AM7(b,a);return b;}
function Ej(a){var b=new DR();ABg(b,a);return b;}
function AM7(a,b){var c;c=P(CB,1);c.data[0]=ALE(b);ABg(a,c);}
function ABg(a,b){var c,d,e,f;c=b.data;a.s=b;d=0;e=c.length;f=0;while(f<e){d=d+M(c[f].x)|0;f=f+1|0;}a.W=d;Fj(a);}
function HS(a){return a.s.data.length;}
function Il(a,b){return a.s.data[b];}
function Hd(a,b){var c;c=KR(a,b);return c<=0?0:a.eT.data[c-1|0];}
function KR(a,b){var c,d,e,f;c=a.s.data.length;if(!c)return (-1);if(!(a.eT!==null&&!a.ke)){Xb(a);d=0;e=0;f=a.s.data.length;while(d<f){e=e+M(a.s.data[d].x)|0;a.eT.data[d]=e;d=d+1|0;}a.ke=0;}d=ADE(a.eT,0,c-1|0,b);return d>=0?d+1|0:( -d|0)-1|0;}
function O$(a,b){var c;c=a.s.data;if(!c.length)return null;return c[KR(a,b)];}
function Ie(a,b,c){var d,e,f,g,h,i,j,k,l,m;if(b<=0&&c>=a.W){a.s=P(CB,0);Fj(a);a.W=0;return;}if(b>=c)return;d=c-b|0;e=0;f=0;a:{while(true){g=a.s.data;h=g.length;if(e>=h)break a;if(f>=h)break a;h=M(g[e].x);i=M(a.s.data[f].x);j=BQ(b,h);if(j<=0&&c<=i)break;if(j>0){b=b-h|0;e=e+1|0;}if(c>i){c=c-i|0;f=f+1|0;}}}if(e==f){k=a.s.data[f];if(!b&&c==M(k.x)?1:0){g=a.s;a.s=ABD(g,e,P(CB,g.data.length-1|0));a.W=a.W-d|0;Fj(a);return;}a.s.data[e]=Er(FQ(Cz(k.x,0,b),DD(k.x,c)),k.b7,k.bJ);}else{g=a.s.data;l=g[e];m=g[f];if(b){if(b
!=M(l.x))a.s.data[e]=Er(Cz(l.x,0,b),l.b7,l.bJ);e=e+1|0;}if(c==M(m.x))f=f+1|0;else if(c)a.s.data[f]=Er(DD(m.x,c),m.b7,m.bJ);g=a.s;a.s=AH2(g,e,f,P(CB,(g.data.length-f|0)+e|0));}a.W=a.W-d|0;Fj(a);}
function Jl(a,b){var c,d,e,f,g,h,i,j;if(b<=0)return I(DR,[Ej(P(CB,0)),a]);if(b>=a.W)return I(DR,[a,Ej(P(CB,0))]);c=a.s;d=0;a:{while(true){e=c.data;f=e.length;if(d>=f)break a;g=M(e[d].x);if(b<g)break;b=b-g|0;d=d+1|0;}}if(!b)return I(DR,[Ej(L9(c,0,P(CB,d))),Ej(L9(c,d,P(CB,f-d|0)))]);h=e[d];e=L9(c,0,P(CB,d+1|0));i=e.data;j=L9(c,d,P(CB,f-d|0));c=j.data;i[d]=Er(Cz(h.x,0,b),h.b7,h.bJ);c[0]=Er(DD(h.x,b),h.b7,h.bJ);return I(DR,[Ej(e),Ej(j)]);}
function AB_(a,b,c){var d,e,f,g;d=0;a:{while(true){e=d+1|0;f=a.s.data;if(e>=f.length)break a;g=M(f[d].x);if(b<=g)break;b=b-g|0;d=e;}}Ng(a,d,b,c);}
function Ng(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;if(GT(d))return;e=a.s;f=e.data;g=f.length;if(!g){h=P(CB,1);h.data[0]=ALE(d);a.s=h;}else if(!b&&!c){h=P(CB,g+1|0);f=h.data;Dc(e,0,h,1,g);f[0]=ALE(d);a.s=h;}else{i=f[b];if(c<=0)j=Er(FQ(d,i.x),i.b7,i.bJ);else if(c>=M(i.x))j=Er(FQ(i.x,d),i.b7,i.bJ);else{k=M(d);l=k+c|0;m=M(i.x)-c|0;e=B7(M(i.x)+k|0);h=e.data;n=0;while(n<c){h[n]=Q(i.x,n);n=n+1|0;}o=0;while(o<k){h[o+c|0]=Q(d,o);o=o+1|0;}g=0;while(g<m){h[g+l|0]=Q(i.x,g+c|0);g=g+1|0;}j=Er(GI(e),i.b7,i.bJ);}f[b]=j;}a.W=a.W
+M(d)|0;Fj(a);}
function Qh(a){var b,c,d,e,f,g;b=0;c=a.s.data;d=c.length;e=0;while(e<d){f=c[e];g=0;while(g<JM(f)){if(Q(f.x,g)!=32)return b;b=b+1|0;g=g+1|0;}e=e+1|0;}return b;}
function Oe(a,b,c){var d,e,f,g,h,i,j;d=a.s.data.length;e=a.gY;if(!(e!==null&&e.data.length>=d)){a.gY=AOx(d);a.fi=BI(d);a.hF=1;}Xb(a);if(!a.hF)BaM=BaM+1|0;else{f=0;g=0.0;BaL=BaL+1|0;h=0;while(h<d){i=c.data;j=a.s.data[h];f=f+M(j.x)|0;a.eT.data[h]=f;Cr(b,i[Le(j)]);g=g+EC(b,j.x);a.gY.data[h]=g;a.fi.data[h]=g+0.5|0;h=h+1|0;}a.W=f;a.hF=0;a.ke=0;}}
function Xb(a){var b;b=a.eT;if(!(b!==null&&b.data.length>=a.s.data.length)){a.eT=BI(a.s.data.length);a.ke=1;}}
function UT(a){a.hF=1;a.iP=null;}
function Fj(a){UT(a);a.jV=1;a.ke=1;}
function AB6(a,b,c,d){var e,f,g,h,i,j,k;if(a.iP===null)a.iP=P($rt_arraycls($rt_intcls()),a.s.data.length);e=a.iP.data[d];if(e===null){e=c.data;f=a.s.data[d];Cr(b,e[Le(f)]);f=f.x;e=BI(M(f)-1|0);c=GU(f);g=!d?0.0:a.gY.data[d-1|0];h=e.data;i=0;j=h.length;while(i<j){f=new BC;k=i+1|0;Pw(f,c,0,k);h[i]=g+EC(b,f)+0.5|0;i=k;}a.iP.data[d]=e;}return e;}
function Ho(a,b,c,d){var e,f,g,h,i;if(a.s.data.length&&b){if(!(!a.hF&&a.fi!==null))Oe(a,c,d);if(b>=a.W)return a.fi.data[a.s.data.length-1|0];e=0;f=0;a:{while(true){g=a.s.data;if(f>=g.length)break a;h=e+M(g[f].x)|0;i=BQ(b,h);if(i<0)break a;if(!i)break;f=f+1|0;e=h;}return a.fi.data[f];}return (AB6(a,c,d,f)).data[(b-e|0)-1|0];}return 0;}
function F1(a){var b,c,d;a:{b=a.s.data.length;if(b){c=a.fi.data;if(c.length){d=c[b-1|0];break a;}}d=0;}return d;}
function Hy(a,b){var c;if(b>=a.W)return b+1|0;c=KR(a,b);return a.eT.data[c];}
function F7(a){var b,c,d,e;b=new J;Ge(b,a.W);c=a.s.data;d=c.length;e=0;while(e<d){BN(b,c[e].x);e=e+1|0;}return K(b);}
function A4y(a){var b,c,d,e;b=a.s.data;c=b.length;if(c==1)d=AHV(b[0]);else{d=new J;L(d);BN(d,C(39));e=0;while(e<c){if(e>0)BN(d,C(40));H(d,b[e]);e=e+1|0;}BN(d,C(41));d=K(d);}return d;}
function AH0(){BaF=0;}
function AAd(){var a=this;B.call(a);a.f1=null;a.fw=null;}
function A0z(a,b){var c=new AAd();A1L(c,a,b);return c;}
function A1L(a,b,c){a.f1=b;a.fw=c;}
function Vi(a,b,c){var d;d=a.f1;if(d===null)return;ABa(a,d,b,c);}
function Qf(a,b,c){var d;d=a.f1;if(d===null)return;ADJ(a,d,b,c);}
function ABa(a,b,c,d){var e,f,g,h;e=b.fk.ci();while(e.cY()){XA(a,e.ck(),c,d);}e=b.f3.ci();while(e.cY()){f=e.ck();g=new UQ;g.Az=a;E_(a,g,f,c,d);}h=b.ig.ci();while(h.cY()){e=h.ck();XA(a,e.l_,c,d);f=new UR;f.yx=a;E_(a,f,e.lz,c,d);}b=b.c5.ci();while(b.cY()){ABa(a,b.ck(),c,d);}}
function XA(a,b,c,d){Lr(a,b.eu,c,d);}
function E_(a,b,c,d,e){var f,g;a:{if(c instanceof H_){f=c.fV;g=new XM;g.sl=a;g.sj=b;g.si=d;g.sk=e;FP(f,g);}else{if(!(c instanceof KO)){if(!(c instanceof JV))break a;f=c;E_(a,b,f.iz,d,e);E_(a,b,f.h5,d,e);return;}g=c.iK;f=new XN;f.DY=a;f.DX=b;f.DW=d;f.DV=e;FP(g,f);}}if(c!==null){c=c.e1;if(c!==null)b.mD(c,C6(d),C6(e));}}
function Lr(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e+d|0;}
function ADJ(a,b,c,d){var e,f,g,h;e=b.fk.ci();while(e.cY()){Ks(a,(e.ck()).eu,c,d);}e=b.f3.ci();while(e.cY()){f=e.ck();g=new TS;g.ws=a;E_(a,g,f,c,d);}h=b.ig.ci();while(h.cY()){e=h.ck();Ks(a,e.l_.eu,c,d);f=new TU;f.Ch=a;E_(a,f,e.lz,c,d);}b.fk.qG(new TR);b.f3.qG(new TQ);b=b.c5.ci();while(b.cY()){ADJ(a,b.ck(),c,d);}}
function Ks(a,b,c,d){var e;e=b.dG;if(e>=c)b.dG=e-d|0;}
function LZ(){var a=this;Et.call(a);a.ds=0;a.cg=null;a.dj=0;a.DZ=0.0;a.ob=0;}
function Kr(){var a=new LZ();RX(a);return a;}
function A1V(a,b){return P(Im,b);}
function RX(a){var b;b=AJ5(16);a.ds=0;a.cg=P(Im,b);a.DZ=0.75;Vn(a);}
function AJ5(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Fd(a){var b;if(a.ds>0){a.ds=0;b=a.cg;AHm(b,0,b.data.length,null);a.dj=a.dj+1|0;}}
function Vn(a){a.ob=a.cg.data.length*a.DZ|0;}
function HX(a,b){return AC8(a,b)===null?0:1;}
function OQ(a){var b;b=new Vo;b.AP=a;return b;}
function CC(a,b){var c;c=AC8(a,b);if(c===null)return null;return c.c1;}
function AC8(a,b){var c,d;if(b===null)c=TL(a);else{d=b.q2();c=St(a,b,d&(a.cg.data.length-1|0),d);}return c;}
function St(a,b,c,d){var e;e=a.cg.data[c];while(e!==null&&!(e.mP==d&&AKV(b,e.cR))){e=e.dh;}return e;}
function TL(a){var b;b=a.cg.data[0];while(b!==null&&b.cR!==null){b=b.dh;}return b;}
function NT(a){var b;if(a.p2===null){b=new Rz;b.jY=a;a.p2=b;}return a.p2;}
function D5(a,b,c){var d,e,f,g;if(b===null){d=TL(a);if(d===null){a.dj=a.dj+1|0;d=Vg(a,null,0,0);e=a.ds+1|0;a.ds=e;if(e>a.ob)AEi(a);}}else{e=b.q2();f=e&(a.cg.data.length-1|0);d=St(a,b,f,e);if(d===null){a.dj=a.dj+1|0;d=Vg(a,b,f,e);e=a.ds+1|0;a.ds=e;if(e>a.ob)AEi(a);}}g=d.c1;d.c1=c;return g;}
function Vg(a,b,c,d){var e,f;e=new Im;XI(e,b,null);e.mP=d;f=a.cg.data;e.dh=f[c];f[c]=e;return e;}
function ALQ(a,b){var c,d,e,f,g,h,i,j;c=AJ5(!b?1:b<<1);d=P(Im,c);e=d.data;f=0;b=c-1|0;while(true){g=a.cg.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.mP&b;j=h.dh;h.dh=e[i];e[i]=h;h=j;}f=f+1|0;}a.cg=d;Vn(a);}
function AEi(a){ALQ(a,a.cg.data.length);}
function L_(a,b){var c,d,e,f,g,h;a:{c=0;d=null;if(b===null){e=a.cg.data[0];while(e!==null){if(e.cR===null)break a;b=e.dh;d=e;e=b;}}else{f=Kx(b);g=a.cg.data;c=f&(g.length-1|0);e=g[c];while(e!==null&&!(e.mP==f&&AKV(b,e.cR))){h=e.dh;d=e;e=h;}}}if(e===null)e=null;else{if(d!==null)d.dh=e.dh;else a.cg.data[c]=e.dh;a.dj=a.dj+1|0;a.ds=a.ds-1|0;}if(e===null)return null;return e.c1;}
function AKV(b,c){return b!==c&&!b.bQ(c)?0:1;}
function CB(){var a=this;B.call(a);a.x=null;a.b7=0;a.bJ=0;}
function ALE(a){var b=new CB();A1d(b,a);return b;}
function Er(a,b,c){var d=new CB();ADu(d,a,b,c);return d;}
function A1d(a,b){ADu(a,b,0,0);}
function ADu(a,b,c,d){a.x=b;a.b7=c;a.bJ=d;}
function Le(a){return a.bJ&3;}
function JW(b,c){return (!b?0:2)+(!c?0:1)|0;}
function JM(a){return M(a.x);}
function AHV(a){var b,c,d,e;b=A76(a.x);c=a.bJ;d=!(c&2)?0:1;e=!(c&1)?0:1;if(!(!d&&!e))BN(b,C(229));if(d)BN(b,C(230));if(e)BN(b,C(231));return K(b);}
var Ov=G(LZ);
function ABR(){var a=this;B.call(a);a.dA=null;a.ft=0;}
var BaN=null;function AJm(a){var b=new ABR();AJN(b,a);return b;}
function AJN(a,b){a.ft=0;a.dA=b;}
function RM(a,b){var c;if(b.fb)return b;b=B_(b.bv);while(true){if(!Cd(b))return null;c=RM(a,Ce(b));if(c!==null)break;}return c;}
function Y8(a,b,c){var d,e,f,g;d=Om(a,a.dA,b);if(d===null)return;b=c.cy;e=b===null?BaO:b.c5;f=c.bv;c=a.dA;if(d===c){if(c.cy===null)c.cy=b;b=new AB$;b.Aw=a;FP(f,b);b=new AB9;b.wq=a;e.fH(b);b=a.dA;b.bv=f;b.cy.c5=e;b.fb=0;return;}if(!EU(f)){c=d.hZ;if(c!==null){b=new Zz;b.so=c;FP(f,b);g=LM(c.bv,d);if(g==(-1))GY(c.bv,f);else{E3(c.bv,g);ALf(c.bv,g,f);}}}b=d.cy;if(b!==null){b=b.hU;c=new T0;c.tV=b;e.fH(c);g=LM(b.c5,d.cy);if(g==(-1))GY(b.c5,e);else{b.c5.m6(g);b.c5.vO(g,e);}}}
function Om(a,b,c){var d,e,f,g;d=b.b4;if(d.b8==c.b8&&d.b6==c.b6?1:0){d=B_(b.bv);while(Cd(d)){e=Om(a,Ce(d),c);if(e!==null)return e;}return b;}b=B_(b.bv);while(true){if(!Cd(b))return null;d=Ce(b);f=c.b8;g=c.b6;e=d.b4;if(e.b8<=f&&g<=e.b6?1:0){e=Om(a,d,c);if(e!==null)break;}}return e;}
function ADk(a,b,c){BA(c,b.b4);b=B_(b.bv);while(Cd(b)){ADk(a,Ce(b),c);}}
function ZC(a,b,c){a.ft=0;L2(a,a.dA,b,c);}
function L2(a,b,c,d){var e;if(Dk(b)<c)return;a:{if(Dt(b)>c){MB(b,d);HR(b,d);b=B_(b.bv);while(Cd(b)){L2(a,Ce(b),c,d);}}else{if(!Nt(b,c)){if(a.ft)break a;if(Dk(b)!=c)break a;}HR(b,d);if(Dt(b)==c&&a.ft)MB(b,d);e=B_(b.bv);while(Cd(e)){L2(a,Ce(e),c,d);}if(!a.ft){b.fb=1;a.ft=1;}}}}
function WX(a,b,c){a.ft=0;Nx(a,a.dA,b,c);}
function Nx(a,b,c,d){var e,f,g,h,i,j;if(Dk(b)<c)return;e=Dt(b);f=c+d|0;if(e>f){e= -d|0;MB(b,e);HR(b,e);g=B_(b.bv);while(Cd(g)){Nx(a,Ce(g),c,d);}b.bv=Yq(a,b.bv);}else{h=b.b4;if(c<=h.b8&&h.b6<=f?1:0){if(b===a.dA){ML(b,0);Nw(b,0);h=b.cy;if(h!==null)h.c5.jU();}else{ML(b,(-1));Nw(b,(-1));h=b.cy;if(h!==null){AF_(h);b.cy=null;}}I1(b.bv);}else{e=Nt(b,c);f=Nt(b,f);if(e&&f)HR(b, -d|0);else if(e)Nw(b,c);else{if(!f)return;ML(b,c);HR(b, -d|0);}h=B_(b.bv);while(Cd(h)){Nx(a,Ce(h),c,d);}h=My(b.bv);g=ZV(0);i=new Ts;j=new AEs;j.HA
=i;j.ln=g;while(OP(h,j)){}if(!j.ln.pk&&!a.ft)b.fb=1;else a.ft=1;b.bv=Yq(a,b.bv);}}}
function Yq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=BO();d=null;e=BaN;f=b.cu;g=b.p;if(e===null)e=A_s;h=P(B,g-0|0);i=h.data;j=0;while(j<g){k=f.data;i[j-0|0]=k[j];j=j+1|0;}LF(h,e);l=0;while(l<g){f.data[l]=i[l-0|0];l=l+1|0;}b.b_=b.b_+1|0;b=B_(b);while(Cd(b)){m=Ce(b);if(Dt(m)==Dk(m))continue;if(!m.fb){if(d!==null){BA(c,d);d=null;}BA(c,m);}else if(d===null)d=m;else{n=AXj(Lv(Bf(Dt(d),Dt(m)),Be(Dk(d),Dk(m)),d.b4.gj),d.hZ,d.cy);n.fb=1;d=m.cy;if(d===null)d=n;else{AF_(d);d=n;}}}if(d!==null)BA(c,d);return c;}
function AFy(a,b,c,d){var e,f,g,h,i,j;if((Dk(c)-Dt(c)|0)<43)e=Cz(d,Dt(c),Dk(c));else{e=Cz(d,Dt(c),Dt(c)+20|0);f=Cz(d,Dk(c)-20|0,Dk(c));g=new J;L(g);H(H(H(g,e),C(176)),f);e=K(g);}e=AEp(e,C(183),C(232));f=Bg();g=BT(c);h=new J;L(h);i=V(h,b);Bq(i,32);g=H(i,g);Bq(g,9);H(g,e);Bc(f,K(h));c=B_(c.bv);j=b+1|0;while(Cd(c)){AFy(a,j,Ce(c),d);}}
function AJU(){BaN=new WK;}
function AN5(){var a=this;B.call(a);a.b8=0;a.b6=0;a.gj=0;}
function Lv(a,b,c){var d=new AN5();A0_(d,a,b,c);return d;}
function A0_(a,b,c,d){a.b8=b;a.b6=c;a.gj=d;}
function AWu(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.b8==c.b8&&a.b6==c.b6&&a.gj==c.gj?1:0;}return 0;}
function AKQ(a){var b,c,d,e;b=a.b8;c=a.b6;d=a.gj;e=new J;L(e);Bq(e,40);Bq(V(H(V(H(V(e,b),C(40)),c),C(40)),d),41);return K(e);}
function A0k(a,b){var c;b=b;c=BQ(a.b8,b.b8);if(!c)c=BQ(b.b6,a.b6);return c;}
var WK=G();
function ATv(a,b,c){var d;b=b;c=c;b=b.b4;c=c.b4;d=BQ(b.b8,c.b8);if(!d)d=BQ(c.b6,b.b6);return d;}
function ABi(){var a=this;B.call(a);a.b4=null;a.hZ=null;a.bv=null;a.cy=null;a.fb=0;}
function AXj(a,b,c){var d=new ABi();AJk(d,a,b,c);return d;}
function AJk(a,b,c,d){a.fb=0;a.b4=b;a.hZ=c;a.bv=BO();a.cy=d;}
function AKb(b){return ABs(b,null);}
function ABs(b,c){var d,e,f,g,h,i,j,k,l,m;a:{d=Bd(b);e=Bd(b);f=Bd(b);g=Bd(b);h=Bd(b);i=Lv(d,e,f);j=new ABi;if(c!==null&&h>=0){k=c.data;if(h<=k.length){l=k[h];break a;}}l=null;}AJk(j,i,null,l);m=0;while(m<g){l=ABs(b,c);l.hZ=j;BA(j.bv,l);m=m+1|0;}return j;}
function AG2(b,c,d){var e,f,g,h,i;a:{e=b.b4;f=b.bv;g=e.b8;h=e.b6;i=e.gj;Bv(c,g);Hu(c,h,i);Bv(c,f.p);if(d!==null){e=b.cy;if(e!==null&&AEW(d,e)){g=(Pe(d,b.cy)).bs;break a;}}g=(-1);}Bv(c,g);b=B_(f);while(Cd(b)){AG2(Ce(b),c,d);}}
function Dt(a){return a.b4.b8;}
function Dk(a){return a.b4.b6;}
function ML(a,b){a.b4.b8=b;}
function Nw(a,b){a.b4.b6=b;}
function MB(a,b){var c;c=a.b4;c.b8=c.b8+b|0;}
function HR(a,b){var c;c=a.b4;c.b6=c.b6+b|0;}
function Nt(a,b){return Dt(a)<=b&&b<Dk(a)?1:0;}
function AO4(a){var b,c,d;b=AKQ(a.b4);c=a.fb;d=new J;L(d);J4(H(H(d,b),C(40)),c);return K(d);}
function APP(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BV(a.b4,c.b4)&&BV(a.bv,c.bv)?1:0;}return 0;}
function Hp(){var a=this;B.call(a);a.cR=null;a.c1=null;}
function BaP(a,b){var c=new Hp();XI(c,a,b);return c;}
function XI(a,b,c){a.cR=b;a.c1=c;}
function A0N(a,b){var c,d;if(a===b)return 1;if(!E4(b,JX))return 0;a:{b:{c:{d:{c=b;b=a.cR;if(b!==null){if(!b.bQ(c.cR))break c;else break d;}if(c.cR!==null)break c;}b=a.c1;if(b!==null){if(!b.bQ(c.c1))break c;else break b;}if(c.c1===null)break b;}d=0;break a;}d=1;}return d;}
function AQs(a){var b,c,d;b=a.cR;c=a.c1;d=new J;L(d);b=H(d,b);Bq(b,61);H(b,c);return K(d);}
function Im(){var a=this;Hp.call(a);a.mP=0;a.dh=null;}
var AHR=G();
function U$(){var a=this;B.call(a);a.sr=null;a.vB=null;a.Cv=null;}
var PS=G();
function AX7(a,b){return b.text();}
function PU(){var a=this;B.call(a);a.u1=null;a.u0=null;}
function AXq(a,b){var c,d,e,f;c=a.u1;d=a.u0;e=b.length;f=new Qm;f.Cz=b;c.g(ARb((ANn(e,f)).kZ,AEf(d)));}
var PT=G();
function AZB(a,b){AJ4(b);}
function Jr(){var a=this;B.call(a);a.bx=null;a.Hk=null;a.cc=null;a.kr=null;a.lX=null;a.d3=null;a.fZ=null;a.Dv=null;a.qH=null;a.pQ=null;}
function BaQ(a,b,c,d,e,f){var g=new Jr();Mm(g,a,b,c,d,e,f);return g;}
function I8(){var b,c,d,e,f,g,h,i,j;b=new Jr;c=new KK;d=new HN;F5();Lx(d,BaR);M_(c,d,B0(BaB),B0(BaS),B0(BaT),B0(BaB),B0(BaU),B0(BaV),B0(BaW),B0(BaX),B0(BaY),B0(BaZ));e=AMh(S(C(233)));f=(AMn()).data;g=f.length;h=P(KZ,g);i=h.data;j=0;while(j<g){i[j]=f[j].oZ;j=j+1|0;}Mm(b,c,e,h,AM5(S(C(234)),S(C(235)),S(C(236)),S(C(237))),FB(),AGK(S(C(238)),S(C(239)),S(C(240)),S(C(241))));return b;}
function FD(){var b,c,d,e,f,g,h,i,j;b=new Jr;c=new KK;d=new HN;ARj();Lx(d,Ba0);M_(c,d,B0(Ba1),B0(Ba2),B0(Ba3),B0(Ba1),B0(Ba4),B0(Ba5),B0(Ba6),B0(Ba7),B0(Ba8),B0(Ba9));e=AMh(S(C(242)));f=(AH$()).data;g=f.length;h=P(KZ,g);i=h.data;j=0;while(j<g){i[j]=f[j].lT;j=j+1|0;}Mm(b,c,e,h,AM5(S(C(243)),S(C(244)),S(C(245)),S(C(246))),ALI(),AGK(S(C(238)),S(C(239)),S(C(240)),S(C(247))));return b;}
function Mm(a,b,c,d,e,f,g){var h;h=d.data;a.fZ=DC(C(175),17.0);a.Dv=DC(C(164),15.0);a.qH=DC(C(175),15.0);a.pQ=DC(C(13),15.0);a.bx=b;a.Hk=c;a.kr=d;a.lX=e;if(h.length>=15){a.cc=f;a.d3=g;return;}b=new BU;X(b);N(b);}
function YH(a,b){if(b===null)b=a.bx.eE;return b;}
function K7(){var a=this;Cg.call(a);a.dU=null;a.oX=null;}
function A9s(a){var b=new K7();AKl(b,a);return b;}
function AKl(a,b){var c,d,e,f;Gg(a,b,0);c=I6(a.u);a.oX=c;d=G5(c);a.dU=d;ND(a.q,d);c=b.n.bK;d=new GS;e=new AAj;e.sQ=a;Hc(d,b,e);Z(c,d);c=a.dU;d=b.n;f=new AEo;f.xT=c;Z(d.bZ,c);Z(d.fR,f);b=b.n.ct;c=new AAi;c.Dk=a;Z(b,c);JY(a);}
function AL7(a,b){var c,d;c=a.dU;d=new ADQ;d.wn=a;d.wo=b;Gb(c,b,d);}
function A2j(a,b){if(G2(a.u,b))MA(a.dU);}
function A6b(a,b){var c;c=QY(a,b);return Md(a.dU,b)|c;}
function AR2(a){H1(a);IR(a.dU);Ko(a.u);}
function A7D(a){return Eo(0);}
function AOq(a,b,c){var d;Hf(a,b,c);d=a.dU;M8(d,d.i,b,c);}
function A0$(a,b){BG(b);Gc(a.oX,b);Fb(a.dU,b);}
function AG8(a,b){var c,d,e;if(DB(a.q,a.dU)){c=a.oX;b=b.j;d=a.dU;e=new Te;e.vC=a;Ja(c,b,d,a,d,a,e);}return 1;}
function AKK(){var a=this;CA.call(a);a.Ao=null;a.p3=null;a.kW=null;a.eH=null;a.mC=null;a.h1=null;a.e2=null;a.kb=null;a.rt=null;a.jA=null;a.q9=null;a.q$=null;a.qr=null;a.AG=null;a.EK=null;a.uh=0;}
function A9D(a){var b=new AKK();A3c(b,a);return b;}
function A3c(a,b){var c,d,e,f;EA(a,b);c=(I8()).bx.eE;a.Ao=c;a.p3=AN0(c);a.kW=new Bi;a.eH=Ls();a.mC=Ls();a.h1=UE(0,0,3,3);a.e2=IE(0,0,300,300);a.kb=A11();d=P(BC,4);e=d.data;e[0]=C(188);e[1]=C(189);e[2]=C(207);e[3]=C(206);a.rt=d;a.jA=P(KU,e.length);c=b.n.bZ;f=new Vv;f.fU=a;Z(c,f);c=b.n.bK;f=new AAM;f.D0=a;Z(c,f);c=b.n.pv;f=new AAL;f.tt=a;Z(c,f);c=b.n.ho;f=new AAK;f.Fu=a;Z(c,f);c=b.n.m8;f=new AAJ;f.F$=a;Z(c,f);c=b.n.ct;f=new AAI;f.GD=a;Z(c,f);b=b.n.fR;c=new AAH;c.CI=a;Z(b,c);a.q9=AEO(a,1);a.q$=AEO(a,0);Tu(a,a.eH,
a.q9);Tu(a,a.mC,a.q$);a.qr=AF9(a,0);a.AG=AF9(a,1);Ga(a.e2,a.qr);Gl(a.e2);H4(a.e2,DF(169,183,198));FE(a.e2,a.Ao);Cv(a.eH.bd,1.0,1.0,1.0,1.0);FE(a.eH,a.e2.bq);BM(a.h1.bq,a.p3);}
function Tu(a,b,c){Ga(b,c);Gl(b);}
function TZ(a,b){I0(D0(),0.5+D0()*0.5,0.5+D0()*0.5,1.0,b.bd);}
function AEO(a,b){var c,d;c=Eg(a.z.T,200,100,b);HY(c,C(248),11.0);B1(c,C(249),0.0,20.0);KD(c,255,0,0);B1(c,C(249),0.25,40.0);KD(c,0,255,0);B1(c,C(249),0.5,60.0);KD(c,0,0,255);B1(c,C(249),0.75,80.0);d=C5(a.z.T);CW(d,c);EQ(c);return d;}
function AF9(a,b){var c,d,e,f;c=Eg(a.z.T,255,100,b);HY(c,C(175),10.0);d=Bg();e=$rt_str(c.dx.font);f=new J;L(f);H(H(f,C(250)),e);Bc(d,K(f));EC(c,C(251));B1(c,C(251),0.0,20.0);B1(c,C(251),0.25,40.0);B1(c,C(251),0.5,60.0);B1(c,C(251),0.75,80.0);e=C5(a.z.T);CW(e,c);EQ(c);return e;}
function AOQ(a,b){var c;a.uh=a.uh+1|0;c=b/5.0;I0(c-(c|0),1.0,1.0,1.0,a.h1.bd);return ADb(a.kb,b);}
function AQL(a){var b,c,d,e,f,g,h,i;b=a.z.T;EZ(b,a.p3);c=a.jA.data;d=c.length;e=0;while(e<d){ABJ(c[e],b,0,0);e=e+1|0;}f=a.e2;g=f.w;g.a=(a.kW.a-f.v.a|0)-5|0;g.b=0;Cc(b,0);h=0;while(h<7){f=a.e2;EX(f,b,a.qr,Bb(h,10+((10*f.v.b|0)/15|0)|0)+5|0,0);h=h+1|0;}f=a.e2;f.w.a=(a.kW.a-(f.v.a*2|0)|0)-10|0;h=0;while(h<7){g=a.AG;f=a.e2;f.w.b=Bb(h,10+((10*f.v.b|0)/15|0)|0)+5|0;Un(f,b,g,1);h=h+1|0;}Un(a.eH,b,a.q9,1);Cc(b,1);g=a.mC;f=a.q$;i=g.w;h=i.b;d=i.a;g=g.v;GX(b,b.lE);G9(b.lE,b.be,h,d,g,b.dd);OJ(b.lE,b.be,f);Go(b);Cc(b,0);f
=a.EK;if(f!==null)XC(a.h1,b,f,0,0,0.0);AEg(a.kb,b,new Bi);NE(b,C(252));}
function ATc(a,b,c){var d,e,f,g,h,i,j,k;d=Bg();e=BT(b);f=new J;L(f);H(H(f,C(253)),e);Bc(d,K(f));d=Bg();f=new J;L(f);Di(H(f,C(254)),c);Bc(d,K(f));g=Ck(30.0,c);h=Ck(10.0,c);i=0;while(true){j=a.jA.data;if(i>=j.length)break;k=1+i|0;j[i]=UE(Bb(h,k)+Bb(g,i)|0,g,g,g);TZ(a,a.jA.data[i]);i=k;}Y(a.h1.w,(b.b/2|0)-1|0,(b.a/2|0)-1|0);f=a.eH;Y(f.w,((b.b/2|0)-f.v.b|0)-10|0,50);Y(a.mC.w,(b.b/2|0)+10|0,50);Ct(a.kW,b);}
function YO(a,b){var c,d,e,f,g;c=Bg();d=!b.ku?C(255):C(256);e=b.eD;f=b.bh;g=b.BG;b=new J;L(b);J4(H(V(H(H(H(b,d),e),C(257)),f),C(258)),g);Bc(c,K(b));return 0;}
function ADj(){var a=this;CA.call(a);a.GG=null;a.lV=null;a.jD=null;a.iF=null;a.dI=null;a.ej=null;a.n1=null;a.nO=null;a.kf=0;a.jd=null;a.jc=null;}
function Sw(a,b,c){Ga(b,c);Gl(b);}
function AGs(a,b,c,d,e,f){var g,h;g=Eg(f,c,120,b);Cr(g,e);e=!b?C(259):C(260);h=new J;L(h);H(H(H(h,e),d),C(162));d=K(h);B1(g,d,0.0,20.0);B1(g,d,0.25,40.0);B1(g,d,0.5,60.0);B1(g,d,0.75,80.0);B1(g,d,1.0,100.0);h=C5(f);CW(h,g);EQ(g);return h;}
function AUP(a,b){return 0;}
function AZ_(a){var b,c,d,e,f,g,h,i;b=a.z.T;EZ(b,a.lV);Cc(b,0);c=a.jD;d=c.a;e=a.iF;f=d-e.a|0;g=c.b-e.b|0;Bw(b,0,0,e,a.dI.bq);Bw(b,g,0,a.iF,a.ej.bq);Bw(b,0,f,a.iF,a.dI.bd);Bw(b,g,f,a.iF,a.ej.bd);c=a.dI;e=c.w;h=e.a;i=((a.jD.a*3|0)/4|0)-(c.v.a/2|0)|0;I2(c,b,e.b,h,a.jd,0,1);c=a.dI;I2(c,b,c.w.b,i,a.jd,1,1);c=a.ej;I2(c,b,c.w.b,h,a.jc,0,0);e=a.ej;I2(e,b,e.w.b,i,a.jc,1,0);NE(b,C(252));}
function A1t(a,b,c){var d,e;Ct(a.jD,b);Y(a.iF,b.b/2|0,b.a/2|0);d=a.jD.a/4|0;e=a.dI;d=d-(e.v.a/2|0)|0;Y(e.w,(b.b/4|0)-(a.kf/2|0)|0,d);Y(a.ej.w,((b.b*3|0)/4|0)-(a.kf/2|0)|0,d);}
function Zm(){var a=this;Cg.call(a);a.Ad=null;a.fA=null;a.d1=null;a.px=null;}
function ASF(a,b,c){var d;d=FF(a.q,a.px);Kd(a.fA,d,a.q);Kd(a.d1,d,a.q);}
function S8(b){return Jy(b,WD());}
function Jy(b,c){var d;d=UC();O9(d,N6(b,KH(c,25)),!b?null:Jy(b-1|0,c));O9(d,N6(b,KH(c,20)),!b?null:Jy(b-1|0,c));O9(d,N6(b,KH(c,15)),!b?null:Jy(b-1|0,c));O9(d,N6(b,KH(c,10)),!b?null:Jy(b-1|0,c));return Jq(d);}
function N6(b,c){var d;if(b){d=new J;L(d);H(H(V(d,b),C(31)),c);c=K(d);}return c;}
function O9(b,c,d){if(d!==null)Iw(b,c,d);else{d=new W9;d.td=c;EI(b,c,d);}}
function ARm(a,b,c){var d,e;Hf(a,b,c);b=a.q.bH;d=ER(a.fA);e=ER(a.d1);N1(a.fA,(b.b-d.b|0)/2|0,((b.a-(3*d.a|0)|0)/2|0)-5|0);N1(a.d1,(b.b-e.b|0)/2|0,(b.a/2|0)+5|0);}
function A04(a){var b,c,d,e,f,g,h,i;H1(a);b=a.z.T;Cc(b,1);c=a.Ad;d=a.q;e=d.bH;Y(c.oO,e.b,Ck(2.0,d.ca));Y(c.pe,Ck(2.0,d.ca),e.a);F5();f=BaY;g=d.bO;h=e.a/2|0;i=c.oO;Bw(g,0,h-(i.a/2|0)|0,i,f);g=d.bO;h=e.b/2|0;c=c.pe;Bw(g,h-(c.b/2|0)|0,0,c,f);MS(a.fA,a.q);MS(a.d1,a.q);Ko(a.u);Cc(b,0);}
function ATe(a,b){var c,d;c=OA(a.fA,b.j,a.q.dc);d=OA(a.d1,b.j,a.q.dc);return !c&&!d?0:1;}
function APt(a,b,c,d){var e,f;e=O0(a.fA,b.j,c,d);f=O0(a.d1,b.j,c,d);return !e&&!f?0:1;}
function ACJ(){Cg.call(this);this.ll=null;}
function AQA(a,b,c){if(b===0.0)AAV(a);}
function AAV(a){var b,c,d,e,f,g,h,i;b=a.ll;if(b!==null){IW(a.u,b);Kv(b);}b=(I8()).cc;c=A$P(a.q,new WU);d=DC(C(164),14.0);e=ASD();f=0;while(f<300){g=Dr(f);h=new Ue;h.C3=C(261);h.C0=g;h.C1=C(262);XZ(e,C(261),g,C(262),h);f=f+1|0;}YV(c,AFh(e));XU(c,b,d);g=AGP(a.q);i=G_(c,a.q);JQ(i,b.nR,b.pN);LP(g,i);Ex(g,b);C0(g,C(152));a.ll=g;DY(a.u,g);RD(a);}
function APJ(a,b,c){Hf(a,b,c);RD(a);}
function RD(a){var b,c,d;b=a.q.bH;Ef(a.ll,BJ((b.b*2|0)/10|0,(b.a*4|0)/10|0),BJ((b.b*7|0)/10|0,(b.a*3|0)/10|0));c=a.ll;b=AKw(c.Y.k);d=new J;L(d);H(H(d,C(263)),b);C0(c,K(d));}
function YK(){var a=this;If.call(a);a.m9=null;a.iv=null;a.gQ=null;a.kY=null;a.s$=null;a.kT=null;a.iI=null;a.id=null;a.mq=0;a.iu=0;}
function QA(a,b){var c,d,e,f,g;c=0;while(c<b){if(a.iv.p>0){d=D0();e=a.iv;f=d*(e.p-1|0)|0;e=E3(e,f);E3(a.gQ,f);f=a.iu;g=e.v;a.iu=f-Bb(g.b,g.a)|0;Jw(a.m9,e.dS);}c=c+1|0;}}
function MJ(a,b){var c,d,e,f,g,h,i,j;c=KS(a.q);Cr(c,a.kY);d=0;while(d<b){e=KH(a.kT,1+(D0()*19.0|0)|0);f=Ls();g=f.dS;h=a.m9;BG(c);i=new Sk;i.vK=c;BM(g,K3(h,e,i));(W8(D0(),1.0,1.0,f.bq)).bD=0.5;h=f.w;g=f.dS;Y(h,g.bp|0,g.bu|0);h=f.v;g=f.dS;Y(h,g.bi|0,g.bD|0);BA(a.gQ,e);BA(a.iv,f);j=a.iu;h=f.v;a.iu=j+Bb(h.b,h.a)|0;d=d+1|0;}a.id=Nr(a.m9);}
function A5I(a){var b,c,d,e,f,g,h,i;H1(a);b=a.z.T;Cc(b,1);c=a.q.bO;if(a.gQ.p){d=a.id;d=Ib(c,d.b,d.a);Cr(d,a.kY);e=a.kY.eN;Bw(c,0,0,a.id,a.s$);f=0;while(f<a.gQ.p){g=BK(a.iv,f);h=BK(a.gQ,f);g=g.dS;B1(d,h,g.bp,g.bu+e);f=f+1|0;}g=a.iI;if(!(g!==null&&BW(g)==a.id.b&&CY(a.iI)==a.id.a))a.iI=BR(a.iI,C5(c));CW(a.iI,d);EQ(d);i=0;while(i<a.gQ.p){d=BK(a.iv,i);H4(d,Cs(0));EX(d,c,a.iI,0,0);i=i+1|0;}}Cc(b,0);}
function AOI(a,b){var c,d;if(a.mq){c=a.id;d=Bf(Bb(c.b,c.a),2211840);if(a.iu/d<=0.7)MJ(a,Eh(a.kT,5));else QA(a,Eh(a.kT,5));}return a.mq;}
function Uk(){var a=this;CA.call(a);a.e3=null;a.iy=null;a.jB=null;a.pT=null;a.fs=0;a.wf=0;a.s_=null;a.nl=0;a.yO=0;a.y_=null;a.B5=null;}
function AOo(a){var b,c;b=a.fs;c=new J;L(c);V(H(c,C(264)),b);$rt_globals.console.info($rt_ustr(K(c)));EZ(a.e3,a.s_);KW(a.jB,a.fs,0,HV(a),5000,a.pT.b,20);Cc(a.e3,1);Xf(a.jB,a.e3);Cc(a.e3,0);b=a.fs;c=new J;L(c);V(H(c,C(264)),b);$rt_globals.console.info($rt_ustr(K(c)));ADR(a.iy,a.fs/a.nl|0,a.e3);AC5(a.iy,a.fs,HV(a),a.B5,a.e3);}
function AYM(a,b,c){a.pT=b;TP(a.iy,BJ(0,0),50,HV(a),c);Ut(a.iy,a.e3,0,HV(a));}
function Wv(a){return 5000-HV(a)|0;}
function HV(a){return Bf(a.wf,a.pT.a);}
function LJ(){var a=this;Cg.call(a);a.zM=null;a.l$=0;a.jj=0;a.ng=null;a.lj=null;a.oG=null;}
var BaA=null;function TJ(a,b){var c,d,e,f,g,h,i,j;c=a.u;d=a.zM;e=d.ok;f=P(Bt,3);g=f.data;h=new Bt;i=new Rp;i.t1=a;B6(h,i,C(265));g[0]=h;j=new Bt;h=new Rr;h.wx=a;B6(j,h,C(266));g[1]=j;j=new Bt;h=new Rq;h.vx=a;B6(j,h,C(267));g[2]=j;E5(c,d,e,b,CM(f));return 1;}
function AM6(){BaA=DK([(-738792947),60747247,(-1998097526),1828170894,(-887988090),947829193,(-1999687713),(-701152478),(-2000527343),(-1881496555),540327628,290384918,566113323,(-1809286035),815515802,(-530444145),(-436772899),PP(Dh(0))]);}
var Y3=G(Cg);
function HG(a,b,c){var d,e,f,g,h,i;d=0;while(d<c){e=a.z.bw;f=new Sj;f.Fg=a;f.vo=b;g=P(B,1);h=g.data;i=BI(1);i.data[0]=b;h[0]=i;CG(e,f,C(268),g);d=d+1|0;}}
function ANo(b){var c;c=b.data;AK0(c[0],c[1],ZR(Jg(b,2)));}
function AK0(b,c,d){var e,f,g,h,i;e=d.data;f=Bg();b=BT(b);c=BT(c);g=new J;L(g);H(H(H(H(g,C(269)),b),C(270)),c);Bc(f,K(g));b=Bg();h=e.length;i=PP(d);c=new J;L(c);V(H(V(H(c,C(271)),h),C(272)),i);Bc(b,K(c));}
function Eq(){var a=this;CA.call(a);a.qZ=null;a.hv=null;a.rM=0.0;}
function Ba$(a){var b=new Eq();Kl(b,a);return b;}
function Kl(a,b){EA(a,b);a.qZ=ALv(0,0,64);a.hv=new Bi;GJ(b.bw,GV(BF(a)));}
function ACa(a){EZ(a.z.T,a.qZ);}
function Uf(a,b,c){Ct(a.hv,b);a.rM=c;}
function Ym(){var a=this;Eq.call(a);a.fq=null;a.hf=null;a.oC=null;a.CL=null;a.rm=null;}
function ASe(a,b){b=b/5.0;I0(b-(b|0),1.0,1.0,1.0,a.hf.bd);return 0;}
function A0T(a){ACa(a);EX(a.fq,a.z.T,a.CL,0,0);XC(a.hf,a.z.T,a.oC,0,0,0.0);NE(a.z.T,C(252));}
function A7x(a,b,c){var d,e,f;Uf(a,b,c);Y(a.hf.w,(b.b/2|0)-1|0,(b.a/2|0)-1|0);d=a.fq;e=d.w;f=b.b;d=d.v;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function Ui(){var a=this;Eq.call(a);a.hy=null;a.r2=null;a.nj=null;a.le=null;a.kw=null;}
function A8c(a){var b,c,d,e,f,g;ACa(a);b=a.z.T;c=a.le;Mw(b,c.b,c.a,a.kw);b=a.hy;c=a.r2;d=a.hv;e=a.z.T;f=0;while(true){g=0;while(true){EX(b,e,c,g,f);g=g+BW(c)|0;if(g>=d.b)break;}f=f+CY(c)|0;if(f>=d.a)break;}GA(a.z.T);}
function ARY(a,b,c){Uf(a,b,c);Y(a.kw,(b.b*7|0)/10|0,(b.a*7|0)/10|0);}
function ACu(){var a=this;CA.call(a);a.e_=null;a.pF=null;a.hi=null;a.cp=null;a.fG=0;a.i$=null;a.f8=0;a.FJ=20;a.Hn=11;a.F7=220;a.mX=null;a.GR=5000;a.iT=0;a.hq=null;}
function AXt(a){var b,c,d,e,f,g,h;b=a.i$;c=a.f8;d=a.mX;KW(b,c,0,d.a,5000,d.b,20);Cc(a.e_,1);Xf(a.i$,a.e_);if(a.cp===null){e=0;while(e<11){e=e+1|0;c=20*e|0;B1(a.pF,Dr(e),0.0,c);}b=C5(a.e_);a.cp=b;CW(b,a.pF);}if(a.f8<=a.fG)while(true){f=a.fG;if(f<=a.f8)break;a.fG=f-20|0;b=a.hi;g=a.iT-1|0;a.iT=g;B1(b,Dr(g),0.0,20.0);Kk(a.cp,a.hi,0,a.fG%220|0);E$(a.hi);}else while(a.fG<(a.f8-20|0)){b=a.hi;g=a.iT+1|0;a.iT=g;B1(b,Dr((g+11|0)-1|0),0.0,20.0);Kk(a.cp,a.hi,0,a.fG%220|0);E$(a.hi);a.fG=a.fG+20|0;}b=IE(0,0,BW(a.cp),CY(a.cp));I4(b,
0,0,BW(a.cp),CY(a.cp));H4(b,a.hq.data[0]);FE(b,a.hq.data[1]);EX(b,a.e_,a.cp,400,0);g=a.f8%220|0;f=Bf(CY(a.cp)-g|0,200);d=IE(0,0,BW(a.cp),f);I4(d,0,g,BW(a.cp),f);H4(d,a.hq.data[0]);FE(d,a.hq.data[1]);EX(d,a.e_,a.cp,0,0);h=IE(0,f,BW(a.cp),(CY(a.cp)-f|0)-20|0);I4(h,0,0,BW(a.cp),(CY(a.cp)-f|0)-20|0);H4(h,a.hq.data[1]);FE(h,a.hq.data[0]);EX(h,a.e_,a.cp,0,0);}
function A06(a,b,c){Ct(a.mX,b);}
function A5n(a,b){return 0;}
function AB4(a){return 5000-a.mX.a|0;}
function KX(){Eq.call(this);this.ez=0;}
function ABI(a){var b,c;b=a.z.bw;c=new V1;c.y8=a;S2(b,c,Yp(a));}
function RC(a){var b,c,d,e;b=a.ez+1|0;a.ez=b;c=GV(F(KX));d=new J;L(d);H(H(V(H(d,C(273)),b),C(31)),c);e=K(d);c=a.z.bw;d=new Xy;d.zi=e;U_(c,e,d,Yp(a));}
function Yp(a){var b;b=new AAQ;b.DD=a;return b;}
function AS4(a,b,c,d){a:{switch(c){case 0:break;case 2:RC(a);break a;default:break a;}ABI(a);}return 1;}
function T2(){var a=this;Eq.call(a);a.vD=null;a.gZ=null;a.mi=null;a.qk=null;a.xa=null;}
function AYf(a){var b,c,d,e,f,g,h,i;if(a.mi===null){b=a.z.T;c=a.xa;d=IV(b,c.iG,Ck(c.hx,a.rM));Cr(b.cr,d);e=C7(EC(b.cr,C(274)));f=Bg();g=d.pZ;c=new J;L(c);Di(H(c,C(275)),g);Bc(f,K(c));h=N0(d,1.1799999475479126);c=Bg();i=new J;L(i);V(H(V(H(i,C(276)),e),C(180)),h);Bc(c,K(i));c=Ib(b,e,h);a.qk=c;Cr(c,d);B1(a.qk,C(274),0.0,d.eN);b=C5(b);a.mi=b;CW(b,a.qk);Ga(a.gZ,a.mi);Gl(a.gZ);b=a.gZ.bq;F5();BM(b,BaB);BM(a.gZ.bd,Ba_);}b=a.z.T;EZ(b,a.vD);c=a.gZ;i=c.w;f=a.hv;e=f.b;c=c.v;Y(i,(e-c.b|0)/2|0,(f.a-c.a|0)/2|0);EX(a.gZ,b,
a.mi,0,0);}
function Hw(){var a=this;CA.call(a);a.wE=null;a.cw=null;a.ex=null;a.dK=null;a.fN=null;a.e$=null;}
function PA(a,b){var c,d;EA(a,b);a.wE=Cs(20);a.cw=TY();a.ex=new Bi;a.dK=new Bi;a.fN=new Bi;a.e$=new Bi;c=b.n.bK;d=new AEn;d.Fy=a;Z(c,d);Z(b.n.bZ,a);b=a.cw.bq;F5();BM(b,BaB);BM(a.cw.bd,Ba_);}
function AHJ(a){var b,c,d;b=a.z.T;EZ(b,a.wE);c=a.cw;d=c.w;Bw(b,d.b,d.a,c.v,c.bq);Cc(b,1);c=a.cw;d=c.w;AGB(b,d.b,d.a,c.v,a.ex,a.dK,a.fN,a.e$,c.bd);Cc(b,0);}
function A2_(a,b){return 0;}
var UV=G(Hw);
function A49(a,b,c){var d,e,f;d=a.cw;e=d.w;f=b.b;d=d.v;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);Y(a.ex,0,0);Y(a.dK,Bf(b.b,b.a),Bf(b.b,b.a));b=a.fN;d=a.ex;Y(b,d.b,d.a+20|0);b=a.e$;d=a.dK;Y(b,d.b,d.a+40|0);}
function A5$(a,b){var c,d,e;Ct(a.ex,b.j);b=a.dK;c=a.cw;d=c.w;e=d.b;c=c.v;Y(b,e+(c.b/2|0)|0,d.a+(c.a/2|0)|0);b=a.fN;c=a.ex;Y(b,c.b,c.a+20|0);b=a.e$;c=a.dK;Y(b,c.b,c.a+40|0);return 0;}
function UU(){var a=this;Hw.call(a);a.gx=null;a.g0=null;}
function A7P(a,b){var c;c=a.dK;b=b.j;c.a=b.a-50|0;a.e$.a=b.a+100|0;return 1;}
function AQv(a){var b,c,d,e,f,g,h;b=Be(a.ex.b,a.fN.b);c=Bf(a.dK.b,a.e$.b);d=Bf(a.ex.a,a.dK.a)-50|0;e=Be(a.fN.a,a.e$.a)+50|0;HI(a.cw,b,d,c-b|0,e-d|0);AHJ(a);f=a.cw.w.b-10|0;ACw(a,a.z.T,10,f,a.ex,a.fN);g=a.cw;h=g.w.b+g.v.b|0;ACw(a,a.z.T,h,f,a.dK,a.e$);}
function ACw(a,b,c,d,e,f){var g;Y(a.gx,c,a.cw.w.a);Y(a.g0,d,e.a-a.cw.w.a|0);g=a.gx;Bw(b,g.b,g.a,a.g0,a.cw.bq);Y(a.gx,c,e.a);Y(a.g0,d,f.a-e.a|0);e=a.gx;Bw(b,e.b,e.a,a.g0,a.cw.bd);Y(a.gx,c,f.a);e=a.g0;g=a.cw;Y(e,d,(g.w.a+g.v.a|0)-f.a|0);e=a.gx;Bw(b,e.b,e.a,a.g0,a.cw.bq);}
function APb(a,b,c){}
function XR(){var a=this;Cg.call(a);a.Eh=3;a.xK=null;a.kK=null;a.rl=0;}
function ASE(a,b,c){var d,e;if(b===0.0){DY(a.u,AAD(a));d=Uv(a,0.5,0,C(277));e=a.q.bH;Ef(DY(a.u,d),BJ(e.b/10|0,e.a/10|0),BJ((e.b*6|0)/10|0,(e.a*6|0)/10|0));}}
function AAD(a){var b,c,d,e,f,g;b=a.rl+1|0;a.rl=b;c=new J;L(c);V(H(c,C(278)),b);c=Uv(a,1.0,1,K(c));d=a.q.bH;e=d.b/10|0;f=e+Eh(a.kK,e)|0;e=d.a/20|0;e=e+Eh(a.kK,e)|0;b=d.b;b=((b*7|0)/10|0)+Eh(a.kK,b/10|0)|0;g=d.a;g=((g*7|0)/10|0)+Eh(a.kK,g/10|0)|0;Ef(c,BJ(f,e),BJ(b,g));return c;}
function Uv(a,b,c,d){var e,f,g;e=AGP(a.q);if(d===null)f=new AFU;else{f=new AFW;f.vS=e;f.vT=d;}g=new Rb;Ms(g);g.m3=new B4;g.qM=new Bi;g.zI=f;g.ta=b;if(c){d=G_(g,a.q);JQ(d,Bba,Bbb);g=d;}LP(e,g);Ex(e,FB());ACq(e,a.xK,3.0);d=new AFV;d.rK=a;d.rL=e;U1(e,d);return e;}
function EE(){Cg.call(this);this.jf=null;}
function A96(a){var b=new EE();KJ(b,a);return b;}
function KJ(a,b){FA(a,b);Z(a.q.dg,a);BM(a.de,Cs(43));}
function A0A(a){return AYC();}
function ATn(a){return 1;}
function AD6(a,b){Ex(a.jf,b);}
function ALi(a,b){var c,d,e;c=a.q.bH;d=!a.qs()?0:AEN(b);e=c.a-d|0;Ef(b,BJ(c.b/20|0,d+(e/20|0)|0),BJ((c.b*9|0)/10|0,(e*9|0)/10|0));}
function A5R(a,b,c){if(b===0.0){a.jf=A7z(a.q,a.j3());AD6(a,FB());if(a.qs())C0(a.jf,H5(BF(a)));DY(a.u,a.jf);a.oM(a.jf);}}
function Ry(){var a=this;EE.call(a);a.mY=null;a.gK=null;}
function APN(a){var b;b=G5(a.mY);a.gK=b;ANk(b);ND(a.q,a.gK);return a.gK;}
function AZb(a){return 0;}
function A7R(a,b){ALi(a,b);JY(a);}
function AWm(a,b){BG(b);Gc(a.mY,b);Fb(a.gK,b);AD6(a,b.cc);}
function AVI(a,b){G2(a.u,b);}
function YP(){B.call(this);this.x5=null;}
function A5F(a,b){D$(a.x5,null);return 0;}
function AAE(){var a=this;EE.call(a);a.j_=null;a.xd=null;}
function A3S(a){var b,c,d,e;a.j_=Vw(a.q);b=new U2;b.uq=a;c=QB(C(279),4,b);b=Bg();d=PD(c);e=new J;L(e);V(H(e,C(280)),d);Bc(b,K(e));D9(a.j_,c);KG(a.j_,a.xd);c=a.j_;return Ke(c,G_(c,a.q));}
function A5g(a,b){var c;c=a.q.bH;Ef(b,BJ(c.b/30|0,c.a/10|0),BJ((c.b*3|0)/10|0,(c.a*8|0)/10|0));}
function ABp(){var a=this;EE.call(a);a.p6=null;a.m2=null;}
function AR3(a){var b,c,d,e,f,g;b=ANH(a.q);a.m2=b;O6(b,a.p6);b=Iy(C(281),1);c=new Tw;c.vm=a;b.cz=c;Ew(b);c=Iy(C(282),1);d=new Tv;d.ze=a;c.cz=d;Ew(c);e=Iy(C(281),1);d=new Ty;d.zU=a;e.cz=d;Ew(e);f=Iy(C(282),1);d=new Tx;d.DG=a;f.cz=d;Ew(f);d=AM_(C(283),0,I(Db,[b,c]));Iq(d);g=AM_(C(284),0,I(Db,[e,f]));Iq(g);D9(a.m2.c6,d);D9(a.m2.cS,g);return a.m2;}
function AC3(a){var b,c;b=a.u.F.cn;c=new VS;c.Bv=a;GC(b,c);}
function AFH(a){var b,c;b=a.u.F.cn;c=new AAo;c.yV=a;GC(b,c);}
function AFY(a){var b,c;b=a.u.F.cn;c=new Qb;c.xP=a;Fm(b,c);}
function AA9(a){var b,c;b=a.u.F.cn;c=new Qq;c.Fo=a;Fm(b,c);}
function Uh(a,b){var c,d,e,f,g,h;c=0;while(true){d=b.data;if(c>=d.length)break;e=Bg();f=H5(BF(d[c]));g=BT(d[c]);h=new J;L(h);H(H(H(H(V(H(h,C(285)),c),C(286)),f),C(31)),g);Bc(e,K(h));c=c+1|0;}}
function Vu(){Cg.call(this);this.hC=null;}
function OD(){return Eo(1);}
function AA1(a){RH(new N9,a.hC,a.u,new W1);}
function AXX(a,b,c){if(b===0.0)AA1(a);}
function AEL(){var a=this;CA.call(a);a.ut=null;a.nE=null;a.fE=null;a.pS=null;a.nC=0.0;a.hJ=null;a.xO=null;a.u6=null;a.zA=null;a.At=null;a.to=null;a.rq=null;a.Ec=null;a.yc=null;a.mn=null;}
var Bbc=0;function A9F(a){var b=new AEL();AX1(b,a);return b;}
function AX1(a,b){var c,d,e;EA(a,b);a.ut=new B4;a.nE=AF8(1.0,0.0,0.0,1.0);a.fE=TY();a.pS=new Bi;a.nC=3.1415927410125732;c=AMy();a.hJ=c;a.xO=H$(c,1.25);a.u6=H$(a.hJ,1.3333333730697632);a.zA=H$(a.hJ,1.5);a.At=H$(a.hJ,1.6666666269302368);a.to=H$(a.hJ,2.0);a.rq=AF8(a.nC/24.0,15.0,3.0,0.5);c=AF8(a.nC/12.0,25.0,3.0,0.5);a.Ec=c;a.yc=DK([(-120),(-95),(-70),(-45),(-20),5,80,150]);a.mn=I(B4,[a.hJ,a.xO,a.u6,a.zA,a.At,a.to,a.rq,c]);c=b.n.bK;d=new R2;d.Hl=a;Z(c,d);Z(b.n.bZ,a);b=a.fE.bd;F5();BM(b,BaB);HI(a.fE,0,0,600,60);e
=NQ(0.5,0.375);JU(0.375,e);JU(0.375,JU(3.0,NQ(e,3.0)));H$(AMy(),3.0);}
function A7K(a,b,c){var d,e,f;Ct(a.pS,b);d=a.fE;e=d.w;f=b.b;d=d.v;Y(e,(f-d.b|0)/2|0,(b.a-d.a|0)/2|0);}
function H$(b,c){var d;d=new B4;WI(b,c,d);return d;}
function AMy(){var b;b=new B4;Mf(b);return b;}
function A2a(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;b=a.z.T;EZ(b,a.ut);Cc(b,1);c=a.fE;d=c.w.b;e=c.v.a/2|0;f=0;while(true){g=a.mn.data;if(f>=g.length)break;h=a.yc.data[f];c=g[f];i=YR(c);j=a.fE;k=j.w;l=k.b;m=k.a;MQ(b,l,m+h|0,j.v,d+i,((m+e|0)+h|0)+i,c,a.nE);f=f+1|0;}if(Bbc){c=A9w(1,2);n=0;while(n<1000){h=Eh(c,a.mn.data.length);l=Eh(c,a.pS.a-a.fE.v.a|0);j=a.mn.data[h];i=j.bu;i=i-(i|0)>=0.25?0.0:0.5;k=a.fE;MQ(b,k.w.b,l,k.v,d+i,(e+l|0)+i,j,a.nE);n=n+1|0;}}Cc(b,0);}
function AV_(a,b){return Bbc;}
function Tb(){Cg.call(this);this.n2=null;}
function A08(a,b,c){if(b===0.0)AD0(a);}
function AD0(a){AFi(new Mo,a.u,a.n2,new AFj);}
function QC(){var a=this;EE.call(a);a.wD=null;a.gf=null;}
function AK$(){var b;b=I(JL,[Ed(1,3,4,5,1),Ed(5,6,10,2,2),Ed(12,2,13,3,3),Ed(15,3,17,2,4)]);return A40(P(Ii,0),P(Ii,0),b);}
function A1o(a){var b,c,d,e;b=ANH(a.q);a.gf=b;O6(b,a.wD);c=a.gf.c6;BG(c);d=new ADf;d.sd=c;b=QB(C(279),4,d);d=a.gf.cS;BG(d);e=new ADg;e.uC=d;c=QB(C(279),4,e);D9(a.gf.c6,b);D9(a.gf.cS,c);OC(a.gf,AK$());return a.gf;}
var PK=G(K7);
function A0d(a){return Eo(1);}
function Ss(){Cg.call(this);this.nq=null;}
function A1Q(a,b,c){if(b===0.0)LD(a);}
function LD(a){var b;b=AWx(a.u,a.nq,new Tl);K8(b);return b;}
function Yn(){var a=this;Cg.call(a);a.Dj=null;a.Hx=null;}
function AQy(a,b,c){var d,e,f,g;d=a.u.F.ca!==0.0?0:1;Hf(a,b,c);if(d){b=new N9;e=a.Dj;f=a.u;g=new Zx;g.FE=a;RH(b,e,f,g);a.Hx=b;b=b.gU;b.it=b.it|2;Yf(b);}}
function KK(){var a=this;B.call(a);a.DN=null;a.eE=null;a.v8=null;a.Ff=null;a.t8=null;a.lH=null;a.sx=null;a.xV=null;a.mu=null;a.mo=null;a.g3=null;}
function Bbd(a,b,c,d,e,f,g,h,i,j,k){var l=new KK();M_(l,a,b,c,d,e,f,g,h,i,j,k);return l;}
function M_(a,b,c,d,e,f,g,h,i,j,k,l){a.DN=b;a.eE=c;a.v8=d;a.Ff=e;a.t8=f;a.lH=g;a.sx=h;a.xV=i;a.mu=j;a.mo=k;a.g3=l;}
function AH_(){B.call(this);this.G1=null;}
function AMh(a){var b=new AH_();AY1(b,a);return b;}
function AY1(a,b){a.G1=b;}
var AG$=G(0);
function AKE(){var a=this;B.call(a);a.p1=null;a.lQ=null;a.za=null;a.rw=null;}
function AM5(a,b,c,d){var e=new AKE();A7W(e,a,b,c,d);return e;}
function A7W(a,b,c,d,e){a.p1=b;a.lQ=c;a.za=d;a.rw=e;}
var AIz=G(0);
function FB(){var b,c,d;b=new Jt;c=new JC;A3w();d=Bbe;Pu(c,d,Bbf,Bbg,Bbh,Bbi,d);Mx(b,c,AJ0(),AJ9(S(C(287)),S(C(288)),S(C(289))),AJ0(),AKy(1,0.125),Bbj,Bbk);return b;}
function ALI(){var b,c,d;b=new Jt;c=new JC;AZa();d=Bbl;Pu(c,d,Bbm,Bbn,Bbo,Bbp,d);Mx(b,c,AJD(),AJ9(S(C(290)),S(C(288)),S(C(289))),AJD(),AKy(1,0.17499999701976776),Bbq,Bbr);return b;}
function AJ0(){var b,c;b=new KV;c=S(C(291));A3w();LL(b,c,Bbs,Bbt);return b;}
function AJD(){var b,c;b=new KV;c=S(C(289));AZa();LL(b,c,Bbu,Bbv);return b;}
function ANT(){var b,c;b=new KV;AJv();c=Bbw;AZl();LL(b,c,Bbx,Bby);return b;}
function AKk(){var a=this;B.call(a);a.A6=null;a.x4=null;a.wh=null;a.rI=null;}
function AGK(a,b,c,d){var e=new AKk();AZC(e,a,b,c,d);return e;}
function AZC(a,b,c,d,e){a.A6=b;a.x4=c;a.wh=d;a.rI=e;}
function AGw(a,b,c,d){if(c)d=c;a:{switch(d){case 1:break;case 2:b=b.d3.x4;break a;case 3:if(c!=3){b=b.d3.rI;break a;}b=b.d3.wh;break a;default:b=b.bx.eE;break a;}b=b.d3.A6;}return b;}
function Is(a,b,c){return AGw(a,b,0,c);}
var ANW=G();
function APH(b){var c,d,e,f,g,h,i,j,k,l;b=b.instance.exports;c=b.memory;d=new Z6;c=c.buffer;d.gW=c;d.rh=new $rt_globals.Int8Array(c);d.ns=new $rt_globals.Uint16Array(c);d.Cc=new $rt_globals.Int32Array(c);d.tv=new $rt_globals.Float32Array(c);d.tJ=new $rt_globals.Float64Array(c);e=d.gW.byteLength;c=new J;L(c);V(H(c,C(292)),e);C3(K(c));e=b.callToCpp1();c=new J;L(c);V(H(c,C(293)),e);C3(K(c));f=b.callToCpp2();c=new J;L(c);Di(H(c,C(294)),f);C3(K(c));c=PY(d,b.getC8String());g=new J;L(g);H(H(g,C(295)),c);C3(K(g));c
=Yu(d,b.getC16String());g=new J;L(g);H(H(g,C(296)),c);C3(K(g));h=b.getCIntArray8();i=$rt_wrapArray($rt_intcls(),new $rt_globals.Int32Array(d.gW,h,8));c=AI3(i);g=new J;L(g);H(H(g,C(297)),c);C3(K(g));h=b.getCFloatArray8();j=$rt_wrapArray($rt_floatcls(),new $rt_globals.Float32Array(d.gW,h,8));c=AWf(j);g=new J;L(g);H(H(g,C(298)),c);C3(K(g));k=ALS(d,b.getCDoubleArray8(),8);l=AYo(k);c=new J;L(c);H(H(c,C(299)),l);C3(Es(c));l=AYj(b.getC8String(),C(300),d);c=MO();H(H(c,C(301)),l);C3(Es(c));l=ATW(b.getC16String(),C(302),
d);c=MO();H(H(c,C(303)),l);C3(Es(c));c=A4F(i,d,b.getCIntArray8(),DK([11,22,33,44,55,66,77,88]));g=MO();H(H(g,C(304)),c);C3(Es(g));c=AWo(j,d,b.getCFloatArray8(),100,DK([111,222,333,444,555,666,777,888]));g=MO();H(H(g,C(305)),c);C3(Es(g));b=A58(k,d,b.getCDoubleArray8(),1000,DK([1111,2222,3333,4444,5555,6666,7777,8888]));c=MO();H(H(c,C(306)),b);C3(Es(c));}
function AWo(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(307);h=0;i=e;a:{while(h<g){if(C7(b[h]*i)!=f[h])break a;e=d+(h*4|0)|0;if(c.tv[e>>>2|0]!==b[h])break a;h=h+1|0;}return C(308);}return C(309);}
function A58(b,c,d,e,f){var g,h,i;b=b.data;f=f.data;g=b.length;if(g!=f.length)return C(307);h=0;i=e;a:{while(h<g){if(G$(b[h]*i)!=f[h])break a;e=d+(h*8|0)|0;if(c.tJ[e>>>3|0]!==b[h])break a;h=h+1|0;}return C(308);}return C(309);}
function A4F(b,c,d,e){var f,g,h;b=b.data;e=e.data;f=b.length;if(f!=e.length)return C(307);g=0;a:{while(g<f){if(b[g]!=e[g])break a;h=d+(g*4|0)|0;if(c.Cc[h>>>2|0]!=b[g])break a;g=g+1|0;}return C(308);}return C(309);}
function AYj(b,c,d){var e,f,g,h;e=PY(d,b);if(!Bk(c,e))return C(310);f=0;while(f<M(e)){g=Q(e,f);h=b+f|0;if(g!=d.rh[h])return C(311);f=f+1|0;}return C(308);}
function ATW(b,c,d){var e,f,g,h;e=Yu(d,b);if(!Bk(c,e))return C(310);f=0;while(f<M(e)){g=Q(e,f);h=b+(f*2|0)|0;if(g!=(d.ns[h>>>1|0]&65535))return C(311);f=f+1|0;}return C(308);}
function C3(b){Z4(C(1),b);}
function ASY(b,c){return {env:{jsFunction1:b,jsFunction2:c}};}
function AAj(){B.call(this);this.sQ=null;}
function A3e(a,b){AL7(a.sQ,b);}
function AAi(){B.call(this);this.Dk=null;}
function AUr(a,b){return AG8(a.Dk,b);}
function AKe(){KU.call(this);this.dS=null;}
function Ls(){var a=new AKe();A7s(a);return a;}
function IE(a,b,c,d){var e=new AKe();A2H(e,a,b,c,d);return e;}
function A7s(a){AEh(a);a.dS=new B4;}
function A2H(a,b,c,d,e){AEh(a);a.dS=new B4;HI(a,b,c,d,e);}
function Gl(a){var b,c;b=a.v;c=a.dS;Y(b,c.bi-c.bp|0,c.bD-c.bu|0);}
function Ga(a,b){I4(a,0,0,BW(b),CY(b));}
function I4(a,b,c,d,e){Cv(a.dS,b,c,d,e);}
function EX(a,b,c,d,e){var f;f=a.w;DT(b,f.b+d|0,f.a+e|0,a.v,a.dS,c,a.bd,a.bq,0);}
function Un(a,b,c,d){var e;e=a.w;DT(b,e.b,e.a,a.v,a.dS,c,a.bd,a.bq,d);}
function I2(a,b,c,d,e,f,g){DT(b,c,d,a.v,a.dS,e,!f?a.bd:a.bq,!f?a.bq:a.bd,g);}
function H4(a,b){BM(a.bd,b);}
function FE(a,b){BM(a.bq,b);}
function Vv(){B.call(this);this.fU=null;}
function A0a(a,b){var c,d,e,f,g,h;c=b.j;d=c.b;e=a.fU.h1;f=e.v;d=d-f.b|0;g=c.a-f.a|0;Y(e.w,d,g);c=a.fU;e=c.z.bw;b=b.j;d=0;a:{while(true){h=c.jA.data;if(d>=h.length)break;if(Fw(h[d],b)){b=c.rt.data[d];break a;}d=d+1|0;}b=null;}ABL(e,b);return 1;}
function AOB(a,b,c,d){if(!c&&d==2){b=a.fU;TZ(b,b.eH);}return 1;}
function AZ4(a,b,c){var d,e;d=Bg();e=new J;L(e);V(H(e,C(312)),c);Bc(d,K(e));if(c)return null;d=b.j;e=!Fw(a.fU.eH,d)?null:d;VT(a.fU.kb,d.b,d.a);b=a.fU;AAr(b.kb,NA(b.z.bw));if(e===null)b=BaH;else{b=new AEu;b.tX=a;b.tY=e;}return b;}
function AZt(a,b,c){var d;b=Bg();d=new J;L(d);V(H(d,C(313)),c);Bc(b,K(d));return 1;}
function AAM(){B.call(this);this.D0=null;}
function A1N(a,b){return YO(a.D0,b);}
function AAL(){B.call(this);this.tt=null;}
function ARw(a,b){return YO(a.tt,b);}
function AAK(){B.call(this);this.Fu=null;}
function A2Q(a,b,c){var d,e;Bc(Bg(),C(314));d=!c?C(315):C(58);e=new J;L(e);H(H(H(e,C(316)),d),C(317));O1(b,K(e));return 1;}
function AAJ(){B.call(this);this.F$=null;}
function AY2(a){Bc(Bg(),C(318));}
function AAI(){B.call(this);this.GD=null;}
function AUX(a,b){Bc(Bg(),C(319));return 1;}
function AAH(){B.call(this);this.CI=null;}
function A6E(a,b,c,d){var e,f,g;b=a.CI;e=( -d|0)/10|0;b=b.eH;f=b.v;f.b=f.b+e|0;f.a=f.a+e|0;b=b.w;g=b.b;e=e/2|0;b.b=g-e|0;b.a=b.a-e|0;return 1;}
function HN(){var a=this;B4.call(a);a.hV=0;a.hY=0;a.hW=0;a.hX=0;}
function Cs(a){var b=new HN();AX8(b,a);return b;}
function DF(a,b,c){var d=new HN();A00(d,a,b,c);return d;}
function S(a){var b=new HN();A5V(b,a);return b;}
function Fg(a,b,c,d){var e=new HN();SU(e,a,b,c,d);return e;}
function B0(a){var b=new HN();Lx(b,a);return b;}
function AX8(a,b){SU(a,b,b,b,255);}
function A00(a,b,c,d){SU(a,b,c,d,255);}
function A5V(a,b){if(!(M(b)!=4&&M(b)!=7&&M(b)!=9)&&Q(b,0)==35){if(M(b)==4){a.hV=KY(Q(b,1))*17|0;a.hY=KY(Q(b,2))*17|0;a.hW=KY(Q(b,3))*17|0;a.hX=255;}else{a.hV=Mv(Q(b,1),Q(b,2));a.hY=Mv(Q(b,3),Q(b,4));a.hW=Mv(Q(b,5),Q(b,6));a.hX=M(b)!=9?255:Mv(Q(b,7),Q(b,8));}I9(a.hV,a.hY,a.hW,a.hX,a);return;}}
function SU(a,b,c,d,e){a.hV=b;a.hY=c;a.hW=d;a.hX=e;I9(b,c,d,e,a);}
function Lx(a,b){a.hV=b.hV;a.hY=b.hY;a.hW=b.hW;a.hX=b.hX;BM(a,b);}
function KY(b){return 48<=b&&b<=57?b-48|0:65<=b&&b<=70?(b-65|0)+10|0:97<=b&&b<=102?(b-97|0)+10|0:0;}
function Mv(b,c){return (16*KY(b)|0)+KY(c)|0;}
var AJd=G(0);
function Eo(b){return !b?I(BC,[C(164),C(175),C(320)]):I(BC,[C(164),C(175),C(320),C(36)]);}
function Yk(){B.call(this);this.mZ=null;}
function AQ9(a,b,c,d){var e,f,g,h;if(!c&&d==2){b=a.mZ.dI;e=D0();f=e-0.5+(D0()-0.5)*0.125;if(f>1.0)f=f-(f|0);else if(f<0.0)f=f+1.0-(f|0);g=0.7+D0()*0.3;h=0.5+D0()*0.5;I0(e,g,h,1.0,b.bd);I0(f,g,h,1.0,b.bq);b=a.mZ;BM(b.ej.bd,b.dI.bd);b=a.mZ;BM(b.ej.bq,b.dI.bq);}return 1;}
function Yg(){var a=this;B.call(a);a.oO=null;a.pe=null;}
function AIA(){var a=this;B.call(a);a.gB=null;a.cD=null;a.hr=null;a.ip=null;a.oW=null;a.c0=null;a.ib=null;a.dl=0;a.gE=0;a.pd=0;a.k6=0;a.lh=0;a.ii=0;a.lA=null;a.p7=null;a.ya=null;a.oK=null;}
function AMm(){var a=new AIA();AWw(a);return a;}
function AWw(a){a.cD=TY();a.hr=new Bi;a.ip=new Bi;a.c0=Bbz;a.k6=(-1);a.lh=1;}
function N5(a,b){OX(a);a.c0=b;}
function Kd(a,b,c){a.gB=b;AEY(a,c);OX(a);}
function Kf(a,b){var c;a.oW=b.mg;c=b.p$.qO;BM(a.cD.bd,c);c=b.jS.ki;BM(a.cD.bq,c);a.oK=b.p$;}
function Nz(a){a.ib=BR(a.ib,null);Y(a.hr,0,0);a.c0=Bbz;a.k6=(-1);ADc(a.cD);}
function AEY(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=KS(b);d=b.ca;BG(a.gB);Cr(c,a.gB);e=N0(a.gB,1.25);f=0;a.dl=Ck(2.0,d);a.gE=Ck(3.0,d);a.pd=Ck(12.0,d);g=0;h=a.c0.data;i=h.length;j=0;k=e;while(j<i){l=h[j];m=LS(c,l.oy);n=a.pd;n=(n+m|0)+n|0;f=Be(f,n);b=l.fJ;b.b=g;b.a=0;b=l.eW;b.b=n;b.a=e;Cv(l.k0,g,0.0,n,k);g=g+n|0;j=j+1|0;}b=a.hr;b.b=g;b.a=e;b=a.cD.v;n=a.ii;if(!n){m=a.dl;m=(g+m|0)+Bb(m,a.c0.data.length)|0;}else m=(f+(a.dl*2|0)|0)+(a.gE*2|0)|0;b.b=m;if(!n)e=e+(a.dl*2|0)|0;else{n=a.dl;e=(Bb(e+n|0,a.c0.data.length)+n
|0)+(a.gE*2|0)|0;}b.a=e;}
function N1(a,b,c){var d,e,f,g,h,i,j;Y(a.cD.w,b,c);d=a.dl+a.gE|0;e=a.c0.data;f=e.length;g=0;h=d;while(g<f){i=e[g];j=i.fJ;j.b=b+d|0;j.a=c+h|0;if(!a.ii){if(!i.eW.b)AGX();d=d+(i.eW.b+a.dl|0)|0;}else{if(!i.eW.a)AGX();h=h+(i.eW.a+a.dl|0)|0;}g=g+1|0;}}
function AGX(){$rt_globals.console.info("Toolbar.setPos: tRect.size == 0");}
function ER(a){var b,c;b=a.hr;if(b.b&&b.a)return a.cD.v;c=new Bu;Bm(c,C(321));N(c);}
function OX(a){a.lh=1;}
function MS(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;c=b.bO;if(!a.c0.data.length)return;if(a.ib===null)a.ib=C5(c);a:{if(!a.lh){d=a.hr;if(Bb(d.b,d.a))break a;}d=a.hr;if(!Bb(d.b,d.a))AEY(a,b);d=a.hr;e=d.b;f=d.a;if(!Bb(e,f))return;d=Eg(c,e,f,b.cV);Cr(d,a.gB);g=N0(a.gB,0.125);h=a.gB;i=h.eN;g=g+i-(i+h.e8)/16.0;j=a.c0.data;e=j.length;f=0;while(f<e){h=j[f];B1(d,h.oy,h.k0.bp+a.pd,g);f=f+1|0;}CW(a.ib,d);a.lh=0;EQ(d);}if(!LQ(a.cD)){d=a.cD;ALA(c,d.v,d.w,d.bq,a.dl,a.ip);d=a.cD;h=d.v;k=d.w;d=d.bd;e=a.dl;l=a.ip;l.b=(h.b-e|0)
-e|0;l.a=(h.a-e|0)-e|0;Bw(c,k.b+e|0,k.a+e|0,l,d);if(a.ii){d=a.cD;AMW(c,d.v,d.w,0,0,Z8(a.oW,b.ca),a.oW.o1,a.ip);}}j=a.c0.data;m=j.length;n=0;while(n<m){d=j[n];h=d.fJ;e=h.b;f=h.a;h=d.eW;k=d.k0;l=a.ib;o=a.oK;DT(c,e,f,h,k,l,o.sU,W5(o,d.lS),b.cV);n=n+1|0;}b:{if(a.ii){j=a.c0.data;n=j.length;p=0;while(true){if(p>=n)break b;d=j[p];b=a.ip;e=(a.cD.v.b-(a.dl*2|0)|0)-(a.gE*2|0)|0;h=d.eW;e=e-h.b|0;b.b=e;b.a=h.a;if(e>0){k=d.fJ;Bw(c,k.b+h.b|0,k.a,b,W5(a.oK,d.lS));}p=p+1|0;}}}}
function OA(a,b,c){var d,e,f,g,h,i;d=Fw(a.cD,b);e=!d?(-1):Qn(a,b);f=a.k6;if(f!=e){if(f>=0){g=a.c0.data[f];g.lS=0;if(a.ya!==null){h=Bg();g=BT(g);i=new J;L(i);H(H(V(H(i,C(322)),f),C(323)),g);Bc(h,K(i));}}if(e>=0){h=a.c0.data[e];g=a.p7;if(g!==null)g.yf(b,e,h);h.lS=1;}a.k6=e;}return d&&Ha(c)?1:0;}
function O0(a,b,c,d){var e,f;e=Qn(a,b);if(e>=0){f=a.c0.data[e];if(!AEk(f))f.nM.e();}return 1;}
function Qn(a,b){var c,d,e,f,g,h,i;c=0;while(true){d=a.c0.data;if(c>=d.length)return (-1);e=d[c];if(GK(b,e.fJ,e.eW))return c;if(a.ii){f=e.fJ;g=f.b;e=e.eW;h=e.b;g=g+h|0;i=f.a;f=a.ip;f.b=(a.cD.v.b-(a.dl*2|0)|0)-h|0;f.a=e.a;if(AHf(b,g,i,f))break;}c=c+1|0;}return c;}
function AGu(a){a.ii=1;}
function ALB(){var a=this;B.call(a);a.iG=null;a.hx=0.0;a.kN=0;a.k2=0;}
function DC(a,b){var c=new ALB();AVb(c,a,b);return c;}
function AVb(a,b,c){a.iG=b;a.hx=c;a.kN=400;a.k2=700;}
function A5O(a,b){if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){b=b;return a.hx===b.hx&&a.kN==b.kN&&a.k2==b.k2&&BV(a.iG,b.iG)?1:0;}return 0;}
function ADO(){B.call(this);this.v3=null;}
function ATX(a,b){var c;c=a.v3;if(b.bh==32)Nz(c.d1);return 0;}
function ADK(){B.call(this);this.wY=null;}
function AWq(a,b){var c,d,e,f;c=a.wY;d=AAZ(c.q);HQ(d,FB(),c.px);b=b.j;e=S8(4);f=new Wt;f.Fv=c;Nh(d,b,e,f);H7(c.u,d);return 1;}
var ADL=G();
function A8j(a){Bc(Bg(),C(324));}
var ADM=G();
function APm(a){Bc(Bg(),C(325));}
function Bt(){var a=this;B.call(a);a.nM=null;a.k0=null;a.fJ=null;a.eW=null;a.n$=null;a.u3=null;a.lS=0;a.oy=null;}
function YY(a,b){var c=new Bt();B6(c,a,b);return c;}
function A$i(a,b,c,d){var e=new Bt();AL1(e,a,b,c,d);return e;}
function B6(a,b,c){AL1(a,b,c,null,null);}
function AL1(a,b,c,d,e){a.k0=new B4;a.fJ=new Bi;a.eW=new Bi;a.oy=c;a.u3=e;a.nM=b;a.n$=d;}
function AEk(a){return a.n$===null?0:1;}
function V8(){B.call(this);this.Ex=null;}
function AYh(a,b){return b.ku&&b.bh==32?1:0;}
function V9(){B.call(this);this.C4=null;}
function AO3(a,b){var c,d,e,f,g,h;c=a.C4;d=AAZ(c.q);HQ(d,FB(),DC(C(164),25.0));b=b.j;e=P(Bt,1);f=e.data;g=new Bt;h=new AGl;h.Di=c;B6(g,h,C(326));f[0]=g;Nh(d,b,CM(e),BbA);H7(c.u,d);return 1;}
function AJW(){var a=this;B.call(a);a.qY=0;a.q0=0;}
function WD(){var a=new AJW();AXk(a);return a;}
function A9w(a,b){var c=new AJW();AN2(c,a,b);return c;}
function AXk(a){AN2(a,ANK(Hi((AJb()))),Hi((AJb()))^(-559038737));}
function AN2(a,b,c){var d;a.qY=b;a.q0=c;d=0;while(d<19){Oi(a);d=d+1|0;}}
function Oi(a){var b,c;b=a.qY;c=a.q0;b=b^b<<2;b=b^(b>>>7|0);b=c^(c>>>3|0)^b;a.qY=c;a.q0=b;return b;}
function ANK(b){b=b^b<<7;b=b^(b>>>1|0);return b^b<<9;}
function ANe(b){var c;c=2.3283064365386963E-10*b;if(c<0.0)c=c+1.0;return c;}
function Eh(a,b){return WF(a)*b|0;}
function WF(a){return 5.960464477539063E-8*(Oi(a)&16777215);}
function R7(a,b){var c,d,e;c=ANe(Oi(a));d=AWl( -b);c=c-d;e=0;while(c>=0.0){e=e+1|0;d=d*b/e;c=c-d;}return e;}
function P2(){B.call(this);this.zt=null;}
function AUE(a,b,c){var d;d=a.zt;if(b===0.0)MJ(d,100);}
function P1(){B.call(this);this.w8=null;}
function ASg(a,b){var c,d,e;c=a.w8;d=b.bh;if(d==32){c.mq=c.mq?0:1;e=1;}else if(d==13){MJ(c,1);e=1;}else if(d!=8)e=0;else{QA(c,1);e=1;}return e;}
var ABF=G(0);
function AKF(b,c){var d;d=new Wy;d.zg=b;d.zf=c;return d;}
function AKL(){var a=this;B.call(a);a.h7=null;a.iH=0;a.mB=0;a.hR=0;}
function AKZ(a){var b=new AKL();ARh(b,a);return b;}
function ARh(a,b){a.h7=BO();a.hR=0;a.mB=2048;a.iH=b;}
function K3(a,b,c){var d,e,f,g,h,i;d=c.A4(b);e=a.mB;if(d>e){c=new Bu;f=new J;L(f);Bq(V(H(V(H(f,C(327)),d),C(328)),e),41);Bm(c,K(f));N(c);}if(!a.iH){b=new BU;Bm(b,C(329));N(b);}a:{b=new B4;if(d){b:{c=a.h7;if(c.p>0){c=B_(c);g=d;while(true){if(!Cd(c))break b;f=Ce(c);if(f.bi>=g)break;}Cv(b,f.bp,f.bu,g,a.iH);f.bp=f.bp+g;h=f.bi-g;f.bi=h;if(h===0.0)AJA(a.h7,f);break a;}}g=a.hR;i=d;Cv(b,0.0,g,i,a.iH);BA(a.h7,AF8(i,a.hR,a.mB-d|0,a.iH));a.hR=a.hR+a.iH|0;}}return b;}
function Jw(a,b){var c,d,e,f,g,h,i;a:{c=AN0(b);b=a.h7;if(b.p>0){d=B_(b);while(true){if(!Cd(d))break a;e=Ce(d);if(e.bu===c.bu){f=e.bp;g=e.bi;h=f+g;i=c.bp;if(h===i){c.bp=f;c.bi=c.bi+g;ABl(d);}else{h=c.bi;if(i+h===f){c.bi=h+g;ABl(d);}}}}}}BA(a.h7,c);}
function Nr(a){return BJ(a.mB,a.hR);}
function Yw(){var a=this;B.call(a);a.sT=null;a.mv=null;}
function AZd(a,b,c){if(c)return BaH;return Gs(a.mv.jB,b.j,a.sT,1);}
function AOY(a,b,c){return 1;}
function A1h(a,b){var c;c=a.mv;return Gz(c.jB,b.j,c.y_);}
function AB3(){B.call(this);this.Cx=null;}
function AUC(a,b,c,d){var e,f;b=a.Cx;e=(X9(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.fs=Bf(Be(0,b.fs+Bb(e,f)|0),Wv(b));return 1;}
function RT(){B.call(this);this.uo=null;}
function AUp(a,b){return TJ(a.uo,b.j);}
function RS(){B.call(this);this.Cf=null;}
function AYm(a,b,c){var d,e;d=a.Cf;if(b===0.0){e=d.u.F.bH;TJ(d,BJ(e.b/3|0,e.a/3|0));}}
function SX(){B.call(this);this.zw=null;}
function AYi(a,b){var c,d,e,f,g,h,i,j,k;c=a.zw;d=c.u;e=FB();f=DC(C(164),25.0);g=b.j;h=P(Bt,5);i=h.data;b=new Bt;j=new VD;j.sC=c;B6(b,j,C(330));i[0]=b;b=new Bt;j=new VE;j.tn=c;B6(b,j,C(331));i[1]=b;b=new Bt;j=new VG;j.uW=c;B6(b,j,C(332));i[2]=b;b=new Bt;j=new VH;j.y1=c;B6(b,j,C(333));i[3]=b;b=new Bt;k=new VI;k.zv=c;B6(b,k,C(334));i[4]=b;E5(d,e,f,g,CM(h));return 1;}
function SW(){B.call(this);this.B2=null;}
function A5r(a,b){var c,d,e;c=a.B2.z.bw;d=new Zy;e=P(B,1);e.data[0]=b;CG(c,d,C(335),e);}
function ADW(){B.call(this);this.nU=null;}
function A4x(a,b){var c,d,e,f,g,h;c=a.nU;d=c.rm;if(d!==null){e=c.fq.w;f=e.b;g=b.j;e.b=f+(g.b-d.b|0)|0;e.a=e.a+(g.a-d.a|0)|0;c.rm=g;}b=b.j;f=b.b;c=c.hf;d=c.v;f=f-d.b|0;h=b.a-d.a|0;Y(c.w,f,h);return 1;}
function AX6(a,b,c){var d;if(!c){d=b.j;b=a.nU;if(!Fw(b.fq,d))d=null;b.rm=d;}return BaH;}
var AII=G();
function AN7(b){var c,d;c=Ib(b,250,64);HY(c,C(248),25.0);KD(c,187,187,187);B1(c,C(336),0.0,24.0);B1(c,C(336),0.25,56.0);d=C5(b);CW(d,c);EQ(c);return d;}
var Do=G(0);
var BaR=null;var Ba_=null;var BaS=null;var BaB=null;var BaU=null;var BaT=null;var BaW=null;var BaV=null;var BaY=null;var BaX=null;var BaZ=null;function F5(){F5=Bl(Do);AYk();}
function AYk(){BaR=Cs(187);Ba_=S(C(337));BaS=Cs(55);BaB=Cs(43);BaU=DF(33,66,131);BaT=DF(60,63,65);BaW=S(C(338));BaV=S(C(339));BaY=Fg(85,85,85,128);BaX=Fg(43,43,43,0);BaZ=S(C(237));}
function AAk(){var a=this;B.call(a);a.rR=null;a.mK=null;}
function ASu(a,b,c){var d;if(!c){d=Gs(a.mK.i$,b.j,a.rR,1);if(d!==null)return d;}return BaH;}
function AZq(a,b,c){return 1;}
function ARc(a,b){var c;c=a.mK;return Gz(c.i$,b.j,SN(c.z.bw));}
function XJ(){B.call(this);this.sA=null;}
function A6B(a,b,c,d){var e,f;b=a.sA;e=(X9(d|0)+4|0)/2|0;f=d>=0.0?1:(-1);b.f8=Bf(Be(0,b.f8+Bb(e,f)|0),AB4(b));return 1;}
function AFw(){B.call(this);this.x_=null;}
function ASv(a,b){var c,d;a:{c=a.x_;switch(b.bh){case 67:RC(c);d=1;break a;case 86:ABI(c);d=1;break a;default:}d=0;}return d;}
var AFv=G();
function A2X(a,b,c){return 0;}
function AFu(){B.call(this);this.tB=null;}
function AQu(a,b,c){var d,e;d=a.tB;c=d.ez+1|0;d.ez=c;d=GV(F(KX));e=new J;L(e);H(H(V(e,c),C(340)),d);e=K(e);$rt_globals.console.info($rt_ustr(e));O1(b,e);return 1;}
var AFt=G();
function ATN(a){return null;}
function AFx(){B.call(this);this.BL=null;}
function A54(a){var b,c;b=a.BL;c=new Xr;c.rN=b;return c;}
function TG(){B.call(this);this.FO=null;}
function AQj(a,b){return 0;}
function Qp(){B.call(this);this.AX=null;}
function A3Y(a,b){var c;c=a.AX;if(b.ku&&b.bh==27){b=Pk(c.u);if(b!==null)NB(b);}return 0;}
function Qr(){B.call(this);this.w6=null;}
function A17(a,b){var c,d,e,f,g,h,i;c=a.w6;d=AAZ(c.q);HQ(d,FB(),DC(C(164),25.0));b=b.j;e=P(Bt,1);f=e.data;g=new Bt;h=c.u;i=new Zl;i.As=c;B6(g,DV(h,i),C(341));f[0]=g;Nh(d,b,CM(e),BbA);H7(c.u,d);return 1;}
function Qs(){B.call(this);this.De=null;}
function A4v(a,b){var c,d,e;c=a.De;d=c.gK;if(d!==null){e=new ACW;e.DT=c;e.DU=b;Gb(d,b,e);}}
function Qt(){B.call(this);this.AT=null;}
function A6p(a,b){var c,d,e;c=a.AT;if(DB(c.q,c.gK)){d=c.mY;b=b.j;e=c.gK;Ja(d,b,e,c,e,c,new YM);}return 1;}
function RV(){B.call(this);this.C7=null;}
function AVl(a,b){var c,d,e,f,g,h,i,j,k;c=a.C7;d=c.u;e=c.p6;f=e.cc;g=e.fZ;h=b.j;i=P(Bt,4);j=i.data;b=new Bt;e=new Y2;e.s7=c;B6(b,DV(d,e),C(342));j[0]=b;b=new Bt;e=c.u;k=new Y0;k.sq=c;B6(b,DV(e,k),C(343));j[1]=b;b=new Bt;e=c.u;k=new YZ;k.vg=c;B6(b,DV(e,k),C(344));j[2]=b;e=new Bt;k=c.u;b=new Y1;b.AI=c;B6(e,DV(k,b),C(345));j[3]=e;E5(d,f,g,h,CM(i));return 1;}
function RU(){B.call(this);this.E4=null;}
function A2w(a,b){return b.bh!=32?0:1;}
function AC4(){B.call(this);this.rV=null;}
function AVy(a,b){var c,d,e,f,g,h;c=a.rV;d=P(Bt,4);e=d.data;f=new Bt;g=c.u;h=new ABd;h.Cb=c;B6(f,DV(g,h),C(346));e[0]=f;f=new Bt;h=c.u;g=new ABc;g.s6=c;B6(f,DV(h,g),C(347));e[1]=f;f=new Bt;h=c.u;g=new ABf;g.xv=c;B6(f,DV(h,g),C(348));e[2]=f;f=new Bt;h=c.u;g=new ABe;g.v7=c;B6(f,DV(h,g),C(349));e[3]=f;f=CM(d);h=c.u;c=c.hC;E5(h,c.cc,c.fZ,b.j,f);return 1;}
function R2(){B.call(this);this.Hl=null;}
function APc(a,b){return 0;}
function Zn(){B.call(this);this.zD=null;}
function AQR(a,b){var c,d,e,f,g,h;c=a.zD;d=P(Bt,1);e=d.data;f=new Bt;g=c.u;h=new Tp;h.y9=c;B6(f,DV(g,h),C(348));e[0]=f;f=CM(d);g=c.u;c=c.n2;E5(g,c.cc,c.fZ,b.j,f);return 1;}
function Wd(){B.call(this);this.Eu=null;}
function AVz(a,b){return 1;}
function Wc(){B.call(this);this.ve=null;}
function A6s(a,b){var c,d;c=a.ve;if(b.bh!=32)d=0;else{OC(c.gf,AK$());d=1;}return d;}
var AJJ=G(0);
function ANk(b){It(b,A9Q(C(350),C(200),AEf(C(351))));}
function Vj(){B.call(this);this.s0=null;}
function A4K(a,b){var c,d;c=a.s0;if(b.bh==121){U6(c.z.bw,C(130),new SH);d=1;}else if(ADp(b)&&b.bh==80){Bc(Bg(),C(352));M3(c.dU.d);d=1;}else d=0;return d;}
function Q1(){B.call(this);this.ur=null;}
function A6G(a,b){L6(LD(a.ur),b);}
function Q0(){B.call(this);this.wK=null;}
function A1i(a,b){var c,d,e,f,g,h;c=a.wK;d=P(Bt,1);e=d.data;f=new Bt;g=c.u;h=new ZU;h.we=c;B6(f,DV(g,h),C(349));e[0]=f;f=CM(d);g=c.u;c=c.nq;E5(g,c.cc,c.fZ,b.j,f);return 1;}
var Du=G(0);
var Ba0=null;var BbB=null;var Ba2=null;var Ba1=null;var Ba4=null;var Ba3=null;var Ba6=null;var Ba5=null;var Ba8=null;var Ba7=null;var Ba9=null;function ARj(){ARj=Bl(Du);AWI();}
function AWI(){Ba0=Cs(206);BbB=S(C(353));Ba2=S(C(354));Ba1=S(C(244));Ba4=S(C(355));Ba3=S(C(233));Ba6=S(C(356));Ba5=S(C(357));Ba8=Fg(107,106,107,128);Ba7=Fg(30,31,34,0);Ba9=S(C(246));}
function Cu(){CE.call(this);this.lT=null;}
var BbC=null;var BbD=null;var BbE=null;var BbF=null;var BbG=null;var BaJ=null;var BbH=null;var BbI=null;var BbJ=null;var BbK=null;var BbL=null;var BbM=null;var BbN=null;var BbO=null;var BbP=null;var BbQ=null;function VB(){VB=Bl(Cu);A25();}
function D7(a,b,c){var d=new Cu();ABY(d,a,b,c);return d;}
function A9$(a,b,c,d){var e=new Cu();AFG(e,a,b,c,d);return e;}
function AH$(){VB();return BbQ.ed();}
function ABY(a,b,c,d){VB();Dw(a,b,c);a.lT=Ki(d,null);}
function AFG(a,b,c,d,e){VB();Dw(a,b,c);a.lT=Ki(d,e);}
function A25(){var b,c;b=new Cu;ARj();ABY(b,C(358),0,BbB);BbC=b;BbD=D7(C(359),1,S(C(360)));BbE=D7(C(361),2,S(C(362)));BbF=D7(C(363),3,S(C(364)));BbG=D7(C(365),4,BbB);BaJ=D7(C(366),5,S(C(367)));BbH=D7(C(368),6,S(C(369)));BbI=D7(C(370),7,S(C(371)));BbJ=D7(C(372),8,S(C(373)));c=new Cu;F5();AFG(c,C(374),9,Ba_,S(C(356)));BbK=c;BbL=A9$(C(375),10,Ba_,S(C(290)));BbM=D7(C(376),11,S(C(377)));BbN=D7(C(378),12,S(C(379)));BbO=D7(C(380),13,BbB);b=D7(C(381),14,S(C(382)));BbP=b;BbQ=I(Cu,[BbC,BbD,BbE,BbF,BbG,BaJ,BbH,BbI,BbJ,
BbK,BbL,BbM,BbN,BbO,b]);}
function KZ(){var a=this;B.call(a);a.hE=null;a.nF=null;}
function Ki(a,b){var c=new KZ();A3z(c,a,b);return c;}
function A3z(a,b,c){a.hE=b;a.nF=c;}
function Jt(){var a=this;B.call(a);a.mg=null;a.ok=null;a.pD=null;a.Gb=3;a.jS=null;a.Du=null;a.Ho=null;a.p$=null;a.nR=null;a.pN=null;}
function BbR(a,b,c,d,e,f,g){var h=new Jt();Mx(h,a,b,c,d,e,f,g);return h;}
function Mx(a,b,c,d,e,f,g,h){a.ok=DC(C(175),16.0);a.pD=DC(C(13),16.0);a.Gb=3;a.Du=b;a.Ho=c;a.jS=d;a.p$=e;a.mg=f;a.nR=g;a.pN=h;}
function AMw(){var a=this;B.call(a);a.o1=null;a.uv=0;}
function AKy(a,b){var c=new AMw();A5T(c,a,b);return c;}
function A5T(a,b,c){var d;d=new B4;a.o1=d;a.uv=b;d.bD=c;}
function Z8(a,b){return Ck(a.uv,b);}
var DZ=G(0);
var Bbo=null;var Bbp=null;var Bbl=null;var Bbm=null;var Bbn=null;var Bbu=null;var Bbv=null;var Bbq=null;var Bbr=null;function AZa(){AZa=Bl(DZ);A4z();}
function A4z(){Bbo=S(C(233));Bbp=S(C(383));Bbl=S(C(289));Bbm=S(C(369));Bbn=S(C(353));Bbu=S(C(233));Bbv=S(C(384));Bbq=S(C(385));Bbr=DF(43,45,48);}
var ZS=G(0);
var Z5=G();
function A1K(a,b,c){var d,e;d=b;e=c;b=new J;L(b);V(H(V(H(b,C(386)),d),C(387)),e);C3(K(b));return d+e|0;}
var ZT=G(0);
var Z3=G();
function A2t(a,b,c){var d,e;d=b;e=c;b=new J;L(b);Di(H(Di(H(b,C(388)),d),C(387)),e);C3(K(b));return d+e;}
var AHu=G();
var AKJ=G(0);
function WY(){B.call(this);this.pj=null;}
var Bbz=null;function UC(){var a=new WY();ALh(a);return a;}
function ALh(a){a.pj=BO();}
function EI(a,b,c){NP(a,Dd(b,c));}
function Dd(b,c){return YY(c,b);}
function Iw(a,b,c){Mi(a,b,c,null);}
function Mi(a,b,c,d){NP(a,A$i(null,b,c,d));}
function NP(a,b){BA(a.pj,b);}
function Jq(a){return CM(GO(a.pj,Bbz));}
function AKN(){Bbz=P(Bt,0);}
var D4=G(0);
var Bbh=null;var Bbi=null;var Bbe=null;var Bbf=null;var Bbg=null;var Bbs=null;var Bbt=null;var Bbj=null;var Bbk=null;function A3w(){A3w=Bl(D4);A4f();}
function A4f(){Bbh=S(C(242));Bbi=S(C(389));Bbe=S(C(291));Bbf=S(C(390));Bbg=S(C(337));Bbs=S(C(242));Bbt=S(C(389));Bbj=Fg(118,121,122,128);Bbk=DF(63,66,68);}
var Ir=G(0);
var Q_=G();
function A5f(a,b,c,d){var e;b=Bg();d=BT(d);e=new J;L(e);H(H(V(H(e,C(391)),c),C(323)),d);Bc(b,K(e));}
var Ra=G();
function Vx(){B.call(this);this.BY=null;}
function A3$(a,b){var c;c=a.BY.mv;c.fs=Gi(b,Wv(c));}
function QM(){B.call(this);this.Fx=null;}
function AQ3(a,b){var c,d,e,f;c=b.data;b=Bg();d=BT(c[0]);e=new J;L(e);H(H(e,C(392)),d);Bc(b,K(e));b=Bg();f=c[1];d=new J;L(d);H(H(d,C(393)),f);Bc(b,K(d));}
function QL(){B.call(this);this.Gz=null;}
function APC(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bg();e=BT(c[0]);f=new J;L(f);H(H(f,C(394)),e);Bc(d,K(f));g=E8(Jg(b,1));b=Bg();d=BT(c[1]);if(g===null)c=C(24);else{c=new J;L(c);BN(c,C(39));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BN(c,C(40));Bq(c,i[h]);h=h+1|0;}BN(c,C(41));c=K(c);}e=new J;L(e);H(H(H(H(e,C(395)),d),C(396)),c);Bc(b,K(e));}
function QI(){B.call(this);this.HB=null;}
function AOL(a,b){var c,d,e,f,g,h,i;c=b.data;d=Bg();e=BT(c[0]);f=new J;L(f);H(H(f,C(397)),e);Bc(d,K(f));g=ZR(Jg(b,1));b=Bg();d=BT(c[1]);if(g===null)c=C(24);else{c=new J;L(c);BN(c,C(39));h=0;while(true){i=g.data;if(h>=i.length)break;if(h>0)BN(c,C(40));V(c,i[h]);h=h+1|0;}BN(c,C(41));c=K(c);}e=new J;L(e);H(H(H(H(e,C(398)),d),C(399)),c);Bc(b,K(e));}
function QG(){B.call(this);this.GJ=null;}
function A7Q(a,b){var c,d,e,f,g;c=b.data;d=Bg();e=BT(c[0]);f=new J;L(f);H(H(f,C(400)),e);Bc(d,K(f));g=CP(Jg(b,1));b=Bg();d=BT(c[1]);c=AI3(g);e=new J;L(e);H(H(H(H(e,C(178)),d),C(401)),c);Bc(b,K(e));}
var AKp=G();
function Wz(){B.call(this);this.uK=null;}
function A2u(a,b){var c;c=a.uK.mK;c.f8=Gi(b,AB4(c));}
function AEn(){B.call(this);this.Fy=null;}
function AYY(a,b){return 0;}
function ANs(){var a=this;B.call(a);a.k_=null;a.p0=null;a.gm=null;a.Ha=null;}
function AEf(a){var b=new ANs();A5K(b,a);return b;}
function A5K(a,b){var c,d,e;c=null;d=null;e=null;a.k_=c;a.p0=d;a.gm=b;a.Ha=e;}
function AEz(a){var b,c;b=a.gm;if(b===null)return C(22);c=AH6(b,C(402));return c==(-1)?a.gm:DD(a.gm,c+1|0);}
function A0E(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BV(a.k_,c.k_)&&BV(a.p0,c.p0)&&BV(a.gm,c.gm)?1:0;}return 0;}
function JC(){var a=this;B.call(a);a.vv=null;a.r7=null;a.sJ=null;a.Cq=null;a.tU=null;a.l0=null;}
function BbS(a,b,c,d,e,f){var g=new JC();Pu(g,a,b,c,d,e,f);return g;}
function Pu(a,b,c,d,e,f,g){a.vv=b;a.r7=c;a.sJ=d;a.Cq=e;a.tU=f;a.l0=g;}
function KV(){var a=this;B.call(a);a.sU=null;a.qO=null;a.wc=null;}
function BbT(a,b,c){var d=new KV();LL(d,a,b,c);return d;}
function LL(a,b,c,d){a.sU=b;a.qO=c;a.wc=d;}
function W5(a,b){return !b?a.qO:a.wc;}
function ALb(){var a=this;B.call(a);a.ki=null;a.mQ=null;a.pa=null;}
function AJ9(a,b,c){var d=new ALb();A6T(d,a,b,c);return d;}
function A6T(a,b,c,d){a.ki=b;a.mQ=c;a.pa=d;}
function Cy(){CE.call(this);this.oZ=null;}
var BbU=null;var BbV=null;var BbW=null;var BbX=null;var BbY=null;var BbZ=null;var Bb0=null;var Bb1=null;var Bb2=null;var Bb3=null;var Bb4=null;var Bb5=null;var Bb6=null;var Bb7=null;var Bb8=null;var Bb9=null;function AHH(){AHH=Bl(Cy);A2A();}
function Ep(a,b,c){var d=new Cy();ADs(d,a,b,c);return d;}
function A5W(a,b,c,d){var e=new Cy();AJK(e,a,b,c,d);return e;}
function AMn(){AHH();return Bb9.ed();}
function ADs(a,b,c,d){AHH();Dw(a,b,c);a.oZ=Ki(d,null);}
function AJK(a,b,c,d,e){AHH();Dw(a,b,c);a.oZ=Ki(d,e);}
function A2A(){var b;b=new Cy;F5();ADs(b,C(358),0,Ba_);BbU=b;BbV=Ep(C(359),1,S(C(403)));BbW=Ep(C(361),2,S(C(404)));BbX=Ep(C(363),3,S(C(405)));BbY=Ep(C(365),4,S(C(403)));BbZ=Ep(C(366),5,DF(188,63,60));Bb0=Ep(C(368),6,S(C(406)));Bb1=Ep(C(370),7,S(C(407)));Bb2=Ep(C(372),8,S(C(408)));Bb3=A5W(C(374),9,Ba_,DF(52,65,52));Bb4=A5W(C(375),10,S(C(409)),S(C(410)));Bb5=Ep(C(376),11,S(C(411)));Bb6=Ep(C(378),12,S(C(412)));Bb7=Ep(C(380),13,Ba_);b=Ep(C(381),14,S(C(382)));Bb8=b;Bb9=I(Cy,[BbU,BbV,BbW,BbX,BbY,BbZ,Bb0,Bb1,Bb2,Bb3,
Bb4,Bb5,Bb6,Bb7,b]);}
var AN1=G();
function KH(b,c){var d,e,f;if(c<=0)return C(22);d=B7(c);e=d.data;e[0]=ANf(Eh(b,52));f=1;while(f<c){e[f]=ANf(Eh(b,62));f=f+1|0;}return GI(d);}
function ANf(b){return (b<26?97+b|0:b>=52?(-4)+b|0:39+b|0)&65535;}
var AHZ=G();
var ADa=G(DL);
var Bb$=null;function AML(){Bb$=F($rt_bytecls());}
function AN$(){var a=this;B.call(a);a.LM=null;a.RB=null;a.KZ=0;a.R_=0;}
var AGI=G(0);
function ANn(b,c){var d,e,f,g,h,i,j,k,l,m;d=P(BC,8);e=Dh(8);f=B7(16);g=0;h=0;i=0;while(true){j=BQ(i,b);if(j>0)break;k=j>=0?10:(c.ba(C6(i))).nN;if(k==10){d=D2(ET(f,0,g),d,h);e=AEj(0,e,h);h=h+1|0;g=0;}else if(k!=13){l=f.data.length;if(l==g)f=Lm(f,l*2|0);m=f.data;j=g+1|0;m[g]=k;g=j;}else{d=D2(ET(f,0,g),d,h);j=i+1|0;if(j<b&&(c.ba(C6(j))).nN==10){e=AEj(1,e,h);i=j;}else e=AEj(2,e,h);h=h+1|0;g=0;}i=i+1|0;}m=e.data;c=new ABv;d=AHx(d,h);if(m.length!=h)e=Pc(e,h);c.kZ=d;c.EB=e;return c;}
function ALa(b){var c,d;c=M(b);BG(b);d=new Qy;d.vq=b;return ANn(c,d);}
var C$=G();
var AMP=G(C$);
var ANd=G(C$);
var ALs=G(C$);
var ALD=G(C$);
var ANv=G(C$);
function W9(){B.call(this);this.td=null;}
function ASW(a){var b;b=a.td;Bc(Bg(),b);}
var Ic=G(CE);
var Bb_=null;var BaC=null;var Bca=null;function AID(){AID=Bl(Ic);A1n();}
function A8d(a,b){var c=new Ic();AHl(c,a,b);return c;}
function AVV(){AID();return Bca.ed();}
function AHl(a,b,c){AID();Dw(a,b,c);}
function A1n(){var b;Bb_=A8d(C(413),0);b=A8d(C(414),1);BaC=b;Bca=I(Ic,[Bb_,b]);}
function Qy(){B.call(this);this.vq=null;}
function AZr(a,b){return Qx(Q(a.vq,b.bs));}
function ABv(){var a=this;B.call(a);a.kZ=null;a.EB=null;}
var AK9=G();
function Ck(b,c){return C7(b*c);}
function ED(){var a=this;B.call(a);a.M=null;a.hI=null;a.gP=null;}
function KI(a,b,c,d){a.M=b;a.gP=c;a.hI=d;}
function Lc(a,b,c){return US(a,b,H5(BF(a)),c);}
function US(a,b,c,d){var e,f,g,h,i,j,k;e=A7z(a.M.F,b);Ex(e,a.gP.cc);C0(e,c);b=new Ye;b.xi=a;b.xj=e;U1(e,b);b=new Yd;b.x6=a;e.yi=b;b=e.Z.bH;f=AEN(e);g=Cw(e.Z,5.0);h=Cw(e.Z,d);i=h?h+f|0:0;c=BJ(g+h|0,(g+i|0)+f|0);j=new Bi;k=b.b;g=g*2|0;RQ(j,(k-g|0)-h|0,((b.a-f|0)-g|0)-i|0);Ef(e,c,j);return e;}
function AKX(a,b){var c,d,e;c=a.m7(b);if(c!==null){d=a.M;e=a.gP;E5(d,e.cc,e.fZ,b,c);}return c===null?0:1;}
function N9(){var a=this;ED.call(a);a.gU=null;a.tw=null;a.cv=null;a.eM=null;a.en=null;a.k3=null;a.nG=null;a.qU=null;}
function Bcb(a,b,c){var d=new N9();RH(d,a,b,c);return d;}
function RH(a,b,c,d){var e,f;KI(a,c,b,d);c=ANH(a.M.F);a.cv=c;O6(c,b);e=Iy(C(415),0);f=Iy(C(416),0);Ew(e);Ew(f);b=new Ud;b.t9=a;e.cz=b;b=new Ub;b.wz=a;f.cz=b;D9(a.cv.c6,e);D9(a.cv.cS,f);c=Lc(a,a.cv,0.0);a.gU=c;b=new Uc;b.y5=a;c.i9=b;b=new T_;b.Bz=a;c.i5=b;DY(a.M,c);J9();b=Bcc;a.k3=b;a.nG=b;b=new ABA;d=new Ua;d.DP=a;c=a.gU.Z.cn;e=new AGi;e.jp=0;b.f6=e;b.mG=d;b.n8=c;a.qU=b;}
function APO(a){var b;a.gU=null;a.cv=null;b=null;a.en=b;a.eM=b;}
function A2d(a,b){var c,d,e,f;if(B3(a.cv.c6,b))return ABS(a,1,C(415));if(B3(a.cv.cS,b))return ABS(a,0,C(416));c=P(Bt,2);d=c.data;b=new Bt;e=new ABn;e.rz=a;B6(b,e,C(415));d[0]=b;b=new Bt;f=new ABm;f.xr=a;B6(b,f,C(416));d[1]=b;return CM(c);}
function ABS(a,b,c){var d,e,f,g;d=P(Bt,1);e=d.data;f=new Bt;g=new AEI;g.BC=a;g.BD=b;B6(f,g,c);e[0]=f;return CM(d);}
function OT(a){var b,c,d,e;b=a.cv;c=b.c6;if(c!==null&&b.cS!==null){IU(c,a.k3);IU(a.cv.cS,a.nG);d=VO(a.cv.c6);e=VO(a.cv.cS);OC(a.cv,AH1(a.qU,d,e));return;}}
function Iz(a,b){var c,d;c=a.M.F.cn;d=new SR;d.DC=a;d.DK=b;GC(c,d);}
function Zx(){B.call(this);this.FE=null;}
function A41(a){return Eo(0);}
var ALd=G(0);
function AKn(b){if(b===null)return C(189);if(!DM(b,C(417))&&!DM(b,C(418))&&!DM(b,C(419))&&!DM(b,C(420))&&!DM(b,C(421))&&!DM(b,C(422))){if(DM(b,C(423)))return C(200);if(DM(b,C(424)))return C(216);if(DM(b,C(425)))return C(211);if(!DM(b,C(426))&&!DM(b,C(427)))return C(189);return C(428);}return C(217);}
function AKG(b){var c,d,e;if(b===null)return 0;a:{c=(-1);switch(Kx(b)){case -1655966961:if(!Bk(b,C(211)))break a;c=4;break a;case 3401:if(!Bk(b,C(216)))break a;c=3;break a;case 98723:if(!Bk(b,C(217)))break a;c=2;break a;case 3213227:if(!Bk(b,C(428)))break a;c=5;break a;case 3254818:if(!Bk(b,C(200)))break a;c=1;break a;case 3556653:if(!Bk(b,C(189)))break a;c=0;break a;default:}}b:{switch(c){case 0:break;case 1:c=1;break b;case 2:c=2;break b;case 3:c=3;break b;case 4:c=4;break b;case 5:c=5;break b;default:d=DG();e
=new J;L(e);H(H(e,C(429)),b);Bc(d,K(e));c=0;break b;}c=0;}return c;}
function AEo(){B.call(this);this.xT=null;}
function AY5(a,b,c,d){return Mu(a.xT,b,c,d);}
function Zu(){B.call(this);this.la=null;}
function A8m(a,b){var c,d,e,f,g;c=a.la;d=c.nj;if(d!==null){e=b.j;f=e.b-d.b|0;g=e.a-d.a|0;e=c.le;e.b=Fo(0,e.b+f|0,c.hv.b-c.kw.b|0);c=a.la;d=c.le;d.a=Fo(0,d.a+g|0,c.hv.a-c.kw.a|0);}a.la.nj=b.j;return 1;}
var AHX=G();
function MF(){return "clipboard" in $rt_globals.navigator?1:0;}
var T3=G(0);
var BaH=null;function AM4(){BaH=new SM;}
function AEu(){var a=this;B.call(a);a.tX=null;a.tY=null;}
function A0n(a,b){var c,d,e;c=a.tX;d=a.tY;c=c.fU.eH.w;e=c.b;b=b.j;c.b=e+(b.b-d.b|0)|0;c.a=c.a+(b.a-d.a|0)|0;Ct(d,b);}
function AJE(){var a=this;B.call(a);a.c7=null;a.cq=null;a.lf=null;a.lw=null;a.o3=null;a.kF=null;}
function AAZ(a){var b=new AJE();A4_(b,a);return b;}
function A4_(a,b){a.cq=BO();a.kF=BbA;a.c7=b;Z(b.dg,a);}
function HQ(a,b,c){a.lf=c;a.o3=b;b=B_(a.cq);while(Cd(b)){Kf(Ce(b),a.o3);}}
function Nh(a,b,c,d){a.kF=d;TH(a,b,c);}
function TH(a,b,c){var d,e;d=a.c7;e=d.bH;if(Bb(e.b,e.a)&&d.ca!==0.0){if(a.lf!==null&&!J1(a)){a.lw=FF(a.c7,a.lf);d=W_(a,b,c,null,null);b=new Tt;b.vj=a;d.lA=b;Cx(a.c7,a);return;}b=new BU;X(b);N(b);}c=new CS;Bm(c,C(430));N(c);}
function M4(a){if(J1(a)){ADC(a.c7,a);ADt(a,null);a.kF.e();a.kF=BbA;}}
function W_(a,b,c,d,e){var f,g,h;f=AMm();AGu(f);N5(f,c.b1());Kf(f,a.o3);Kd(f,a.lw,a.c7);if(d===null)g=b.b;else{g=b.b;g=a.c7.bH.b<((g+(ER(d)).b|0)+(ER(f)).b|0)?g-(ER(f)).b|0:(g+(ER(d)).b|0)-d.gE|0;}h=b.a;b=a.c7.bH;N1(f,Be(0,Bf(g,b.b-(ER(f)).b|0)),Be(0,Bf(h,b.a-(ER(f)).a|0)));b=new AD7;b.wW=a;b.wT=f;b.wU=e;f.p7=b;BA(a.cq,f);return f;}
function A7X(a,b,c){var d;a.lw=FF(a.c7,a.lf);d=B_(a.cq);while(Cd(d)){Kd(Ce(d),a.lw,a.c7);}}
function AGQ(a){var b,c;if(EU(a.cq))return;Cc(a.c7.bO,1);b=0;while(true){c=a.cq;if(b>=c.p)break;MS(BK(c,b),a.c7);b=b+1|0;}}
function ATC(a,b){var c;if(!J1(a))return 0;a:{switch(b.bh){case 27:M4(a);c=1;break a;default:}c=0;}return c;}
function ADt(a,b){var c,d;c=a.cq.p-1|0;a:{while(true){if(c<0)break a;d=BK(a.cq,c);if(b===d)break;E3(a.cq,c);Nz(d);c=c+(-1)|0;}}}
function J1(a){return a.cq.p<=0?0:1;}
function AVF(a){var b,c;TI(a.c7.dg,a);ADC(a.c7,a);b=a.cq;c=B_(b);while(Cd(c)){Nz(Ce(c));}I1(b);}
function Ip(){CH.call(this);this.cx=null;}
function Ne(a,b){var c;if(a.cx===null){a.cx=b;return;}c=new DX;X(c);N(c);}
function A30(a){var b,c,d;b=a.cx.data;c=b.length;d=0;while(d<c){b[d].bW();d=d+1|0;}}
function AUh(a,b){var c,d,e;c=a.cx.data;d=c.length;e=0;while(e<d){c[e].dT(b);e=e+1|0;}}
function AZo(a,b){var c,d,e,f;c=0;d=a.cx.data;e=d.length;f=0;while(f<e){c=c|d[f].cI(b);f=f+1|0;}return c;}
function AQD(a,b,c,d){Kn(a,b,c,d);a.DI();}
function A6P(a,b,c,d){var e,f,g,h,i;e=0;f=a.cx.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.cU(b,c,d);h=h+1|0;}return e;}
function AWY(a,b,c){var d,e,f,g,h;d=a.cx.data;e=d.length;f=0;while(true){if(f>=e)return null;g=d[f];if(B3(g,b.j)){h=g.cA(b,c);if(h!==null)break;}f=f+1|0;}return h;}
function A60(a,b,c){var d,e,f,g,h;d=0;e=a.cx.data;f=e.length;g=0;while(g<f){h=e[g];if(B3(h,b.j))d=d|h.dX(b,c);g=g+1|0;}return d;}
function A7t(a,b){var c,d,e,f,g;c=0;d=a.cx.data;e=d.length;f=0;while(f<e){g=d[f];if(B3(g,b.j))c=c|g.b0(b);f=f+1|0;}return c;}
function ARg(a,b,c,d){var e,f,g,h,i;e=0;f=a.cx.data;g=f.length;h=0;while(h<g){i=f[h];if(B3(i,b.j))e=e|i.dV(b,c,d);h=h+1|0;}return e;}
function A7a(a){var b,c,d;b=a.cx.data;c=b.length;d=0;while(d<c){b[d].kU();d=d+1|0;}}
function IM(){Ip.call(this);this.e5=null;}
function QZ(a,b){Fl(a);a.e5=A0f(b);}
function ATp(a){var b,c,d,e;b=Ck(20.0,a.bY);c=(a.k.b-b|0)/2|0;d=AMC(a.i);e=BJ(c,a.k.a);a.cx.data[0].dW(d,e,a.bY);d.b=(a.i.b+a.k.b|0)-c|0;a.cx.data[1].dW(d,e,a.bY);e.b=(a.k.b-c|0)-c|0;d.b=a.i.b+c|0;a.cx.data[2].dW(d,e,a.bY);}
function AId(){var a=this;IM.call(a);a.c6=null;a.cS=null;a.lk=null;a.mA=null;a.wO=null;}
function ANH(a){var b=new AId();A39(b,a);return b;}
function A39(a,b){var c,d;QZ(a,b);a.c6=Vw(b);a.cS=Vw(b);a.lk=G_(a.c6,b);a.mA=G_(a.cS,b);c=AO1(a.lk,a.c6);d=AO1(a.mA,a.cS);O5(a.e5,c,d);a.wO=AJT(c,d);Ne(a,I(CH,[a.lk,a.mA,a.e5]));}
function O6(a,b){a.e5.iS=b;KG(a.c6,b);Ke(a.c6,a.lk);KG(a.cS,b);Ke(a.cS,a.mA);}
function OC(a,b){a.wO.hw=b;a.e5.eR=b;}
function HO(){var a=this;B.call(a);a.cz=null;a.f2=null;a.lO=null;a.hS=null;a.gi=0;a.h4=0;a.gX=0;a.cG=0;a.h$=0;}
function Bcd(a,b){var c=new HO();Ux(c,a,b);return c;}
function Ux(a,b,c){a.hS=ZD(b);a.gi=c;a.h4=0;}
function De(a){return (Il(a.hS,0)).x;}
function AGF(a){a.h4=60084;}
function Gy(a){return a.h4!=60084?0:1;}
function ST(a){return a.h4!=60086?0:1;}
function AHF(a){a.h4=60086;}
function Si(a){a.gX=60035;}
function Jv(a){a.gX=60027;}
function RZ(a){a.gX=60137;}
function Ew(a){a.gX=60151;}
function AGR(a){a.gX=60215;}
function AIX(a){var b;b=a.cz;if(b===null){b=a.lO;if(b===null)b=a.f2;}return b;}
function Db(){HO.call(this);this.eY=null;}
var Bce=null;var Bcf=null;function Iy(a,b){var c=new Db();KE(c,a,b);return c;}
function AM_(a,b,c){var d=new Db();ANm(d,a,b,c);return d;}
function KE(a,b,c){Ux(a,b,c);a.eY=Bce;}
function ANm(a,b,c,d){Ux(a,b,c);a.eY=Bce;a.eY=d;}
function A7m(a){return De(a);}
function PG(a,b){var c,d;c=P(HO,AGc(a));d=c.data;if(ADq(a,c,b,0)==d.length)return c;b=new Bu;X(b);N(b);}
function E9(a){return a.eY.data.length;}
function AGc(a){var b,c,d,e;b=1;if(Gy(a)){c=a.eY.data;d=c.length;e=0;while(e<d){b=b+AGc(c[e])|0;e=e+1|0;}}return b;}
function PD(a){var b,c,d,e;b=1;c=a.eY.data;d=c.length;e=0;while(e<d){b=b+PD(c[e])|0;e=e+1|0;}return b;}
function ADq(a,b,c,d){var e,f,g,h,i;e=c.gu!==null?0:1;f=c.kk!=2?0:1;g=b.data;a.h$=c.dF;a.cG=c.eU;h=d+1|0;g[d]=a;if(!E9(a)&&!c.kL)AGR(a);else if(E9(a))Ew(a);else if(c.gu!==null?0:1)Jv(a);else Si(a);if(Gy(a)){i=0;while(true){g=a.eY.data;if(i>=g.length)break;h=f?K6(g[i],b,c.dF,c.eU,h):!e?ADq(g[i],b,CU(c,i),h):K6(g[i],b,c.dF,0,h);i=i+1|0;}}return h;}
function K6(a,b,c,d,e){var f,g,h;f=b.data;a.h$=c;a.cG=d;g=e+1|0;f[e]=a;if(Gy(a)){f=a.eY.data;h=f.length;e=0;while(e<h){g=K6(f[e],b,c,d,g);e=e+1|0;}}return g;}
function Iq(a){AGF(a);Ew(a);}
function I$(a){AHF(a);Si(a);}
function V7(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length-1|0;while(true){if(d>e)return null;f=(d+e|0)>>>1|0;g=b[f];h=Pg(De(g),c);if(h<0)d=f+1|0;else{if(h<=0)break;e=f-1|0;}}return g;}
function AIP(){Bce=P(Db,0);Bcf=new RE;}
function Ud(){B.call(this);this.t9=null;}
function AZ$(a){Iz(a.t9,1);}
function Ub(){B.call(this);this.wz=null;}
function AYH(a){Iz(a.wz,0);}
function Uc(){B.call(this);this.y5=null;}
function A2m(a){var b;b=a.y5;Cx(b.M.F,b.tw);}
function T_(){B.call(this);this.Bz=null;}
function AWJ(a){var b,c,d;b=a.Bz;c=b.M.F.b5;d=b.cv;if(!(d.c6!==c&&d.cS!==c))b.tw=c;}
function Oc(){var a=this;B.call(a);a.ix=null;a.gu=null;a.nD=0;a.kL=0;a.kk=0;a.eU=0;a.dF=0;}
var Bcc=null;function J9(){J9=Bl(Oc);A3C();}
function VP(a){var b=new Oc();AMt(b,a);return b;}
function AMt(a,b){J9();a.kk=0;a.eU=0;a.ix=b;}
function ACQ(a,b){var c,d;a.gu=P(Oc,b);a.nD=0;c=0;while(c<b){a.gu.data[c]=VP(a);c=c+1|0;}if(!b){a.kL=1;d=a.ix;if(d!==null)MH(d);}}
function K2(a){var b,c;a.kL=1;b=a.ix;if(b!==null){MH(b);return;}c=new CS;Bm(c,C(431));N(c);}
function MH(a){var b,c;b=a.nD+1|0;a.nD=b;if(!(a.gu.data.length!=b?0:1))return;a.kL=1;c=a.ix;if(c!==null)MH(c);}
function CU(a,b){return a.gu.data[b];}
function Ou(a,b,c){var d;a.kk=1;a.eU=b;a.dF=HP(c);d=a.ix;if(d!==null)Ou(d,b,c);}
function MC(a,b){var c,d,e,f;a.kk=2;a.eU=b;c=a.ix;if(c!==null)a.dF=c.dF;a:{d=a.gu;if(d!==null){d=d.data;e=d.length;f=0;while(true){if(f>=e)break a;MC(d[f],b);f=f+1|0;}}}}
function A3C(){var b;J9();b=VP(null);b.kk=2;b.eU=0;b.kL=1;Bcc=b;}
function ABA(){var a=this;B.call(a);a.mG=null;a.f6=null;a.n8=null;}
function M0(a,b,c,d,e){var f,g,h,i;a:{if(b instanceof F_){f=b;if(c instanceof F_){g=c;c=a.n8;b=new PE;b.vZ=a;b.vY=f;b.v1=g;b.v0=d;b.vW=e;CG(c,b,C(432),I(B,[f.hd,g.hd]));break a;}}if(b instanceof IX){h=b;if(c instanceof IX){i=c;c=a.n8;b=new AGp;b.D1=a;b.D2=d;b.D3=e;CG(c,b,C(433),I(B,[h.eS,i.eS]));break a;}}c=new BU;Bm(c,C(434));N(c);}OS(a.mG);}
function AH1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=P(JL,1);e=0;f=0;g=0;a:{b:while(true){h=b.data;i=h.length;if(f>=i)break a;j=c.data;k=j.length;if(g>=k)break a;l=0;m=h[f].cG;n=0;o=0;while(f<i&&g<k){p=h[f].cG;if(p!=j[g].cG)break;if(p!=m)break;l=1;f=f+1|0;n=n+1|0;g=g+1|0;o=o+1|0;}if(l){q=Ed(f-n|0,n,g-o|0,o,m);p=e+1|0;d=D2(q,d,e);e=p;continue;}p=h[f].gi<=j[g].gi?0:1;c:{if(!p){q=Sq(a,c,g,f);if(q!==null){g=g+q.jC|0;p=e+1|0;d=D2(q,d,e);e=p;continue b;}q=QP(a,b,f,g);if(q===null)break c;f=f+q.jE|0;p=e+1|0;d=D2(q,
d,e);e=p;continue b;}q=QP(a,b,f,g);if(q!==null){f=f+q.jE|0;p=e+1|0;d=D2(q,d,e);e=p;continue b;}q=Sq(a,c,g,f);if(q!==null){g=g+q.jC|0;p=e+1|0;d=D2(q,d,e);e=p;continue b;}}if(h[f].cG&&h[f].cG!=3){if(j[g].cG&&j[g].cG!=3)break;q=Ed(f,0,g,1,j[g].cG);p=e+1|0;d=D2(q,d,e);g=g+1|0;}else{q=Ed(f,1,g,0,h[f].cG);p=e+1|0;d=D2(q,d,e);f=f+1|0;}e=p;}q=new CS;X(q);N(q);}while(f<i){q=Ed(f,1,g,0,h[f].cG);p=e+1|0;d=D2(q,d,e);f=f+1|0;e=p;}while(true){b=c.data;if(g>=b.length)break;q=Ed(f,0,g,1,b[g].cG);p=e+1|0;d=D2(q,d,e);g=g+1|0;e
=p;}return A40(null,null,CV(d,e));}
function QP(a,b,c,d){var e,f;b=b.data;if(b[c].cG!=1)return null;e=b[c].h$;f=0;while(c<b.length&&b[c].h$==e){c=c+1|0;f=f+1|0;}return Ed(c-f|0,f,d,0,1);}
function Sq(a,b,c,d){var e,f;b=b.data;if(b[c].cG!=2)return null;e=b[c].h$;f=0;while(c<b.length&&b[c].h$==e){c=c+1|0;f=f+1|0;}return Ed(d,0,c-f|0,f,2);}
function ALn(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;g=f.data;if(!g.length)return;g=CP(g[0]);h=g.data;i=h[0];j=h[1];k=2+i|0;h=AMa(g,2,k);l=AMa(g,k,k+j|0);k=1+i|0;m=AJL(f,1,k,F($rt_arraycls(HJ)));n=AJL(f,k,k+j|0,F($rt_arraycls(HJ)));ACQ(d,i);ACQ(e,j);o=0;p=0;q=1;a:{while(q){q=0;while(o<i&&p<j&&!h.data[o]&&!l.data[p]){b:{g=m.data;r=HP(a.f6);q=1;(CU(d,o)).dF=r;(CU(e,p)).dF=r;k=o+1|0;s=p+1|0;t=g[o];if(E4(t,J7)){f=n.data;t=t;u=f[p];if(E4(u,J7)){u=u;M0(a,U5(a,b,t,o),U5(a,c,u,p),CU(d,o),CU(e,p));break b;}}t
=g[o];if(!E4(t,JF))break a;f=n.data;t=t;u=f[p];if(!E4(u,JF))break a;u=u;M0(a,SV(a,b,t,o),SV(a,c,u,p),CU(d,o),CU(e,p));}o=k;p=s;}if(q)continue;s=HP(a.f6);while(o<i&&h.data[o]==1){q=1;(CU(d,o)).eU=1;(CU(d,o)).dF=s;MC(CU(d,o),1);K2(CU(d,o));o=o+1|0;}if(q){O3(a.f6,d,e);continue;}while(p<j&&l.data[p]==2){q=1;(CU(e,p)).eU=2;(CU(e,p)).dF=s;MC(CU(e,p),2);K2(CU(e,p));p=p+1|0;}if(q)O3(a.f6,d,e);}OS(a.mG);return;}b=new CS;X(b);N(b);}
function U5(a,b,c,d){return E9(b)<=0?AJw(c,b.g8):b.eG.data[d];}
function SV(a,b,c,d){return E9(b)<=0?A77(EG(c),b.gi+1|0,c):b.fz.data[d-b.eG.data.length|0];}
function Ua(){B.call(this);this.DP=null;}
function OS(a){OT(a.DP);}
function YU(){B.call(this);this.zr=null;}
function ATj(a,b){M5(a.zr,b);}
function WN(){B.call(this);this.Bi=null;}
function A7A(a,b){var c,d,e,f;c=a.Bi;if(c.hc!=3&&c.fx!=3){b=b.data;c.hu=3;d=CP(b[0]);e=E8(b[1]);OR(c.h,d,e);if(c.gh){b=Fk(c);f=Km(EO(),c.jF);c=new J;L(c);H(Id(H(H(c,b),C(435)),f),C(209));$rt_globals.console.info($rt_ustr(K(c)));}}}
function Sb(){B.call(this);this.AY=null;}
function AZX(a,b){var c,d,e,f,g,h;c=a.AY;if(c.fx!=3){d=b.data;c.hc=3;if((CP(d[2])).data[0]!=1)M5(c,b);else{e=CP(d[0]);f=E8(d[1]);g=c.hu!=3?0:1;SP(c.h,e,f,g);if(c.gh){b=Fk(c);h=Km(EO(),c.jF);c=new J;L(c);H(Id(H(H(c,b),C(436)),h),C(209));$rt_globals.console.info($rt_ustr(K(c)));}}}}
function PM(){B.call(this);this.mr=null;}
function ARF(a){return a.mr;}
function V1(){B.call(this);this.y8=null;}
function A68(a,b){var c,d;c=a.y8;d=c.ez+1|0;c.ez=d;c=new J;L(c);H(H(V(c,d),C(437)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function Xy(){B.call(this);this.zi=null;}
function A5y(a){var b,c;b=a.zi;c=new J;L(c);H(H(H(c,C(438)),b),C(439));$rt_globals.console.info($rt_ustr(K(c)));}
function FL(){var a=this;CH.call(a);a.c3=null;a.N=null;a.fB=null;}
function Bcg(){var a=new FL();Ms(a);return a;}
function Ms(a){Fl(a);a.c3=new Bi;a.N=new Bi;}
function A1S(a,b){a.fB=b;}
function UL(a,b,c){Y(a.c3,b,c);}
function JA(a){var b;b=a.fB;if(b!==null)AEG(b);}
function AH7(a){var b;b=a.N;b.b=YI(a,b.b);b=a.N;b.a=AE4(a,b.a);}
function AJj(a,b){var c,d;c=a.N.b;d=YI(a,b);a.N.b=d;return c==d?0:1;}
function Px(a,b){var c,d;c=a.N.a;d=AE4(a,b);a.N.a=d;return c==d?0:1;}
function AE4(a,b){return Be(0,Bf(b,a.c3.a-a.k.a|0));}
function YI(a,b){return Be(0,Bf(b,a.c3.b-a.k.b|0));}
function L3(){var a=this;FL.call(a);a.eI=null;a.ce=null;a.cQ=null;a.iq=null;a.f9=null;a.mF=null;a.nx=null;a.CE=0;a.r9=0;a.c4=null;a.gN=null;a.gO=null;a.hH=null;a.ie=null;a.ik=null;a.j0=null;a.hh=null;a.ji=null;a.sM=0;a.kS=0;}
function AVe(a){Ph(a.iq);Z$(a.ce);PN(a);}
function PN(a){a.gN=BR(a.gN,null);a.gO=BR(a.gO,null);a.hH=BR(a.hH,null);a.ie=BR(a.ie,null);a.ik=BR(a.ik,null);a.j0=BR(a.j0,null);a.hh=BR(a.hh,null);a.ji=BR(a.ji,null);}
function YS(a,b){var c;a:{switch(b){case 60027:break;case 60035:c=a.hH;break a;case 60084:c=a.gO;break a;case 60086:c=a.gN;break a;case 60136:c=a.hh;break a;case 60137:c=a.j0;break a;case 60151:c=a.ie;break a;case 60215:c=a.ji;break a;default:c=null;break a;}c=a.ik;}return c;}
function VF(a,b){var c,d,e,f;c=APA(b);a.cQ=c;d=a.c4;b=c.cL.data;e=b.length;f=0;a:{while(f<e){if(b[f]===d){e=1;break a;}f=f+1|0;}e=0;}if(!e)a.c4=null;if(a.bY!==0.0)Qg(a);}
function VO(a){return a.cQ.cL;}
function KG(a,b){var c,d;a.f9=b;c=BV(a.mF,b.qH);d=BV(a.nx,b.pQ);if(!(c&&d)){a.mF=b.qH;a.nx=b.pQ;if(a.bY!==0.0)Uo(a);}}
function APp(a,b,c){QV(a.ce,c);if(a.mF!==null)Uo(a);}
function Uo(a){var b,c,d,e,f;Uu(a.iq);b=a.ce;c=a.mF;d=a.bY;e=a.eI.bO;f=b.hG;b.dw=ALL(c.iG,c.hx*d,c.kN,c.k2,f,e);TT(a.ce,1.25,a.eI.bO);PN(a);b=FF(a.eI,a.nx);a.gN=BR(a.gN,Ff(a,60086,b));a.gO=BR(a.gO,Ff(a,60084,b));a.hH=BR(a.hH,Ff(a,60035,b));a.ie=BR(a.ie,Ff(a,60151,b));a.ik=BR(a.ik,Ff(a,60027,b));a.j0=BR(a.j0,Ff(a,60137,b));a.hh=BR(a.hh,Ff(a,60136,b));a.sM=Be(Be(Be(Be(BW(a.hH),BW(a.ie)),BW(a.ik)),BW(a.hh)),BW(a.hh));a.ji=BR(a.ji,Ff(a,60215,b));a.kS=Be(BW(a.gO),BW(a.gN));Qg(a);}
function Qg(a){UL(a,a.c3.b,Bb(a.cQ.cL.data.length,a.ce.d5));JA(a);}
function AAu(a){var b;b=a.cQ.cL.data;a.c4=b.length<=0?null:b[0];}
function A3t(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=a.f9.bx.eE;d=a.i;Bw(b,d.b,d.a,a.k,c);BG(a.ce.dw);e=a.ce.d5;f=a.cQ.cL.data.length;if(!f)return;g=Bf(f,ID(a.k.a,e)+7|0);h=a.iq;if(h.data.length<g)a.iq=AA$(g,h,a.ce,a.CE,a.r9,a.cQ);Oj(b,a.i,a.k);i=a.N.a;j=f-1|0;k=AIL(i,e,j);l=AIL((a.N.a+a.k.a|0)-1|0,e,j);a.CE=k;a.r9=l;i=a.k.b;m=DH(a,4.0);n=DH(a,1.0)+a.kS|0;o=DH(a,3.0);p=DH(a,5.0);DH(a,1.0);q=0;r=a.i.b-a.N.b|0;s=DH(a,1.0);d=a.fB;t=s+(d===null?0:F$(d))|0;while(k<=l){u
=a.cQ.cL.data[k];v=u.cG;h=a.iq.data;s=k%h.length|0;w=h[s];Zo(w,u.hS,b,e,i,0,k,s);s=Bb(e,k);x=s-a.N.a|0;if(!v)y=null;else{y=a.ce.um;y.fI=v;}if(y===null)z=null;else{d=a.f9;z=Is(d.d3,d,y.fI);}ba=m+Bb(n,u.gi)|0;bb=a.c4!==u?0:1;if(y!==null){bc=s-a.N.a|0;Y(a.eI.c9,a.k.b,e);d=a.i;Bw(b,d.b,d.a+bc|0,a.eI.c9,z);}else if(bb){bc=s-a.N.a|0;Y(a.eI.c9,a.k.b,e);d=a.i;Bw(b,d.b,d.a+bc|0,a.eI.c9,a.f9.bx.g3);}bd=YS(a,u.h4);be=YS(a,u.gX);if(bd!==null){d=a.f9;bf=d.kr.data[0];AGv(a,b,bd,r+ba|0,a.i.a+x|0,y!==null?z:!bb?c:d.bx.g3,bf.hE);}if
(be!==null){d=a.f9;bf=d.kr.data[0];bg=((r+ba|0)+a.kS|0)+o|0;s=a.i.a+x|0;if(y===null)z=!bb?c:d.bx.g3;AGv(a,b,be,bg,s,z,bf.hE);}s=F1(u.hS);bh=(((ba+a.kS|0)+o|0)+a.sM|0)+p|0;q=Be(q,(bh+s|0)+t|0);Rf(w,a.i.a+x|0,r+bh|0,b,i,e,0,a.f9,null,null,null,bb,y===null?0:1,y);k=k+1|0;}d=a.c3;if(d.b!=q){d.b=q;JA(a);}GA(b);}
function AGv(a,b,c,d,e,f,g){Cv(a.ce.j6,0.0,0.0,BW(c),CY(c));Ct(a.ce.iO,c.eb);HE(a.ce,b,c,d,e,g,f);}
function A6A(a,b,c,d){var e,f,g,h;if(!c&&d==2){e=a.ce.d5;f=((b.j.a-a.i.a|0)+a.N.a|0)/e|0;if(f>=0){g=a.cQ.cL.data;if(f<g.length){h=g[f];if(!Yj(a,b,f)){b=h.lO;if(b!==null)b.e();}}}}return 1;}
function AQn(a,b,c){var d,e,f,g;Cx(a.eI,a);d=a.ce.d5;e=((b.j.a-a.i.a|0)+a.N.a|0)/d|0;if(!c&&e>=0){f=a.cQ.cL.data;if(e<f.length){g=f[e];if(Yj(a,b,e)){b=g.f2;if(b!==null)b.e();}else{a.c4=g;b=g.cz;if(b!==null)b.e();}}}return BaH;}
function Yj(a,b,c){var d,e,f,g,h,i,j;d=a.cQ.cL.data[c];e=DH(a,4.0);f=DH(a,1.0);g=Be(BW(a.gO),BW(a.gN));h=e+Bb(f+g|0,d.gi)|0;i=(a.i.b-a.N.b|0)+h|0;j=i+g|0;c=b.j.b;return i<=c&&c<j?1:0;}
function Ff(a,b,c){var d,e,f;d=a.eI.bO;e=Ol(b);f=a.ce;return AFC(d,e,c,1,f.d5,f.jm);}
function AIL(b,c,d){return Bf(b/c|0,d);}
function ARW(a,b){var c;a:{switch(b.bh){case 13:b=a.c4;if(b!==null){b=AIX(b);if(b!==null)b.e();}c=1;break a;case 37:b=a.c4;if(b!==null&&Gy(b))a.c4.f2.e();c=1;break a;case 38:c=AFn(a)-1|0;if(c<0)c=a.cQ.cL.data.length-1|0;a.c4=a.cQ.cL.data[c];V3(a,c);c=1;break a;case 39:b=a.c4;if(b!==null&&ST(b)){a.c4.f2.e();c=1;}else c=ABG(a);break a;case 40:break;default:c=0;break a;}c=ABG(a);}return c;}
function ABG(a){var b;b=AFn(a)+1|0;if(!(b>0&&b<a.cQ.cL.data.length))b=0;a.c4=a.cQ.cL.data[b];V3(a,b);return 1;}
function AFn(a){var b,c,d,e;b=a.cQ.cL.data;c=a.c4;d=0;e=b.length;while(true){if(d>=e)return (-1);if(c===b[d])break;d=d+1|0;}return d;}
function V3(a,b){var c,d;c=a.ce.d5;d=Bb(b,c);if(d<a.N.a){Px(a,d);JA(a);}b=d+c|0;c=a.N.a;d=a.k.a;if(b>(c+d|0)){Px(a,b-d|0);JA(a);}}
function A1F(a,b,c){var d;d=a.c4;if(d===null)return 0;O1(b,De(d));return 1;}
function AL6(){L3.call(this);this.nz=null;}
function Vw(a){var b=new AL6();AW8(b,a);return b;}
function AW8(a,b){Ms(a);a.cQ=APA(P(HO,0));a.iq=P(FO,0);a.eI=b;a.ce=ATi(b.cV);}
function Gr(a){var b;b=a.nz;J9();VF(a,PG(b,Bcc));}
function IU(a,b){VF(a,PG(a.nz,b));}
function D9(a,b){a.nz=b;J9();IU(a,Bcc);AAu(a);}
function Ke(a,b){var c;c=a.f9.bx;JQ(b,c.mo,c.mu);return b;}
function AHG(){var a=this;CH.call(a);a.po=null;a.zj=null;a.Cs=null;a.bV=null;a.dM=null;a.d0=null;a.vF=null;a.sc=null;a.wZ=0.0;a.qw=null;a.pR=null;}
function G_(a,b){var c=new AHG();AYU(c,a,b);return c;}
function AYU(a,b,c){var d;c=c.dc;Fl(a);d=new QX;d.Au=a;a.zj=d;d=new QW;d.Bp=a;a.Cs=d;a.wZ=10.0;a.bV=b;a.po=c;b.fB=a;}
function AWv(a){var b;b=a.bV;b.fB=null;a.bV=BR(b,null);}
function JQ(a,b,c){var d;a.pR=c;a.qw=b;d=a.dM;if(d!==null)IA(d,b,c);b=a.d0;if(b!==null)IA(b,a.qw,a.pR);}
function ARU(a,b,c,d){Kn(a,b,c,d);Kn(a.bV,b,c,d);if(d!==0.0)AEG(a);}
function JR(a,b,c){LO(a,b);Mj(a,c);}
function AEG(a){var b;AH7(a.bV);b=F$(a)*3|0;if(ABr(a,b))Vy(a);else a.d0=null;if(AGj(a,b))YA(a);else a.dM=null;}
function AGj(a,b){var c;c=a.k.a;return c>b&&a.bV.c3.a>c?1:0;}
function ABr(a,b){var c;c=a.k.b;return c>b&&a.bV.c3.b>c?1:0;}
function Vy(a){var b,c,d,e,f,g;b=a.d0;if(b===null)b=JJ();a.d0=b;P5(a,b);c=a.d0;b=a.bV;d=b.N.b;e=a.i;f=e.b;g=a.k;SO(c,d,f,g.b,b.c3.b,e.a+g.a|0,F$(a));}
function YA(a){var b,c,d,e,f,g;b=a.dM;if(b===null)b=JJ();a.dM=b;P5(a,b);c=a.dM;b=a.bV;d=b.N.a;e=a.i;f=e.a;g=a.k;KW(c,d,f,g.a,b.c3.a,e.b+g.b|0,F$(a));}
function F$(a){return DH(a,a.wZ);}
function P5(a,b){IA(b,a.qw,a.pR);}
function A5o(a,b){var c;a.bV.dT(b);if(!(a.dM===null&&a.d0===null)){Cc(b,1);c=a.dM;if(c!==null)Hn(c,b);c=a.d0;if(c!==null)Hn(c,b);c=a.dM;if(c!==null)Hs(c,b);c=a.d0;if(c!==null)Hs(c,b);Cc(b,0);}}
function Vb(a,b){var c,d;a:{b:{c=a.dM;if(!(c!==null&&Jf(c,b))){c=a.d0;if(c===null)break b;if(!Jf(c,b))break b;}d=1;break a;}d=0;}return d;}
function AWV(a,b,c,d){return !Vb(a,b.j)&&!a.bV.cU(b,c,d)?0:1;}
function LO(a,b){var c;b=AJj(a.bV,b);if(ABr(a,F$(a)*3|0))Vy(a);if(b){c=a.vF;if(c!==null)c.e();}}
function Mj(a,b){var c;if(AE6(a,b)){c=a.sc;if(c!==null)c.e();}}
function AE6(a,b){var c;c=Px(a.bV,b);if(AGj(a,F$(a)*3|0))YA(a);return c;}
function AWy(a,b,c){var d,e;d=a.dM;if(d!==null){e=Gs(d,b.j,a.zj,1);if(e!==null)return e;}d=a.d0;if(d!==null){e=Gs(d,b.j,a.Cs,0);if(e!==null)return e;}return a.bV.cA(b,c);}
function AUH(a,b,c){return Vb(a,b.j)?1:0;}
function AUq(a,b){var c,d,e;c=a.dM;d=c!==null&&Gz(c,b.j,a.po)?1:0;c=a.d0;e=c!==null&&Gz(c,b.j,a.po)?1:0;return !d&&!e&&!a.bV.b0(b)?0:1;}
function A1q(a,b,c,d){var e,f;if(!B3(a,b.j))return 0;e=Ck(d*0.5,a.bY);f=Ck(c*0.5,a.bY);if(b.bS){f=f+e|0;e=0;}if(a.dM!==null&&e)Mj(a,a.bV.N.a+e|0);if(a.d0!==null&&f)LO(a,a.bV.N.b+f|0);return 1;}
function AKh(a){var b,c;b=F$(a);c=a.bV.io();c.b=Be(c.b,b);c.a=Be(c.a,b);return c;}
function AIt(){var a=this;B.call(a);a.ow=null;a.gv=null;}
function AO1(a,b){var c=new AIt();AP_(c,a,b);return c;}
function AP_(a,b,c){a.ow=b;a.gv=c;}
function AWH(a){return a.gv.N.a/Ni(a)|0;}
function A6M(a){var b;b=a.gv;return ID((b.N.a+b.k.a|0)-1|0,Ni(a));}
function AXI(a,b){var c;b=Bb(b,Ni(a));c=a.gv;return (b+c.i.a|0)-c.N.a|0;}
function ATd(a){return a.gv.i;}
function AZv(a){return a.gv.k;}
function ATS(a,b,c){var d;d=a.ow;d.vF=b;d.sc=c;}
function A3N(a,b){return AE6(a.ow,b);}
function Ni(a){return a.gv.ce.d5;}
function AGi(){B.call(this);this.jp=0;}
function HP(a){var b;b=a.jp;a.jp=b+1|0;return b;}
function O3(a,b,c){var d;d=HP(a);Ou(b,3,a);a.jp=d+1|0;Ou(c,3,a);}
var SM=G();
function A3W(a,b){}
function Wt(){B.call(this);this.Fv=null;}
function API(a){Bc(Bg(),C(440));}
function ABd(){B.call(this);this.Cb=null;}
function AWZ(a){AA1(a.Cb);}
function ABc(){B.call(this);this.s6=null;}
function A29(a){var b;b=a.s6;Vd(new NO,b.u,b.hC,new XY);}
function ABf(){B.call(this);this.xv=null;}
function A4B(a){var b;b=a.xv;AFi(new Mo,b.u,b.hC,new Rh);}
function ABe(){B.call(this);this.v7=null;}
function AWW(a){var b;b=a.v7;K8(AWx(b.u,b.hC,new Yh));}
function Tp(){B.call(this);this.y9=null;}
function A3p(a){AD0(a.y9);}
function Y2(){B.call(this);this.s7=null;}
function A64(a){AFY(a.s7);}
function Y0(){B.call(this);this.sq=null;}
function ARi(a){AC3(a.sq);}
function YZ(){B.call(this);this.vg=null;}
function APa(a){AA9(a.vg);}
function Y1(){B.call(this);this.AI=null;}
function A8n(a){AFH(a.AI);}
var AGn=G(0);
var BbA=null;function AJz(){BbA=new Y5;}
function ZU(){B.call(this);this.we=null;}
function ATH(a){LD(a.we);}
function AAQ(){B.call(this);this.DD=null;}
function AZF(a,b){var c,d;c=a.DD;d=c.ez+1|0;c.ez=d;c=b.jr;b=new J;L(b);H(H(V(b,d),C(441)),c);$rt_globals.console.info($rt_ustr(K(b)));}
function JL(){var a=this;B.call(a);a.iD=0;a.jE=0;a.iC=0;a.jC=0;a.pW=0;}
function Ed(a,b,c,d,e){var f=new JL();A5Y(f,a,b,c,d,e);return f;}
function A5Y(a,b,c,d,e,f){a.iD=b;a.jE=c;a.iC=d;a.jC=e;a.pW=f;}
function VQ(){var a=this;B.call(a);a.q_=null;a.ra=null;a.iW=null;}
function A40(a,b,c){var d=new VQ();AIw(d,a,b,c);return d;}
function AIw(a,b,c,d){a.q_=b;a.ra=c;a.iW=d;}
function He(a,b,c){var d,e,f,g,h,i,j,k,l;d=0;e=a.iW.data;f=e.length-1|0;g=f;while(true){if(d>g)return Bf(d,f);h=(d+g|0)>>>1|0;i=e[h];j=!c?i.iC:i.iD;k=!c?i.jC:i.jE;l=BQ(j,b);if(l<=0&&b<(j+k|0))return h;if(l<0)d=h+1|0;else{if(l<=0)break;g=h-1|0;}}return h;}
var RE=G();
function AQt(a,b,c){b=b;c=c;return Pg(De(b),De(c));}
var AMK=G(0);
function Zl(){B.call(this);this.As=null;}
function AZM(a){var b;b=a.As;DY(b.u,AAD(b));}
function Rp(){B.call(this);this.t1=null;}
function A1D(a){var b,c,d;b=a.t1;c=b.z.bw;d=new VC;d.BJ=b;GC(c,d);}
function Rr(){B.call(this);this.wx=null;}
function A7j(a){var b,c,d;b=a.wx;c=b.z.bw;d=new Xz;d.Ct=b;Fm(c,d);}
function Rq(){B.call(this);this.vx=null;}
function ATT(a){var b,c,d;b=a.vx;Bc(Bg(),C(442));Bc(Bg(),C(443));c=b.z.bw;d=new AF3;d.yF=b;Fm(c,d);}
function AGl(){B.call(this);this.Di=null;}
function A2U(a){AAV(a.Di);}
var Mz=G(0);
function Sk(){B.call(this);this.vK=null;}
function A0m(a,b){return LS(a.vK,b);}
function ANZ(){Hr.call(this);this.cL=null;}
function APA(a){var b=new ANZ();AQ4(b,a);return b;}
function AQ4(a,b){a.cL=b;}
function A7$(a,b){return a.cL.data[b].hS;}
function QX(){B.call(this);this.Au=null;}
function AO0(a,b){var c;c=a.Au;Mj(c,Gi(b,c.bV.c3.a-c.k.a|0));}
function QW(){B.call(this);this.Bp=null;}
function APg(a,b){var c;c=a.Bp;LO(c,Gi(b,c.bV.c3.b-c.k.b|0));}
function Qm(){B.call(this);this.Cz=null;}
function A6J(a,b){var c,d;c=a.Cz;d=b.bs;return Qx(c.charCodeAt(d)&65535);}
var Y5=G();
function AX0(a){}
var CS=G(Bu);
var AM1=G(FT);
function A0O(a){var b=new AM1();AT8(b,a);return b;}
function AT8(a,b){a.lr=1;a.lM=1;a.oj=b;}
var AGM=G();
function GK(b,c,d){var e,f;a:{e=c.b;f=b.b;if(e<=f&&f<(e+d.b|0)){e=c.a;f=b.a;if(e<=f&&f<(e+d.a|0)){e=1;break a;}}e=0;}return e;}
function AHf(b,c,d,e){var f;a:{f=b.b;if(c<=f&&f<(c+e.b|0)){c=b.a;if(d<=c&&c<(d+e.a|0)){c=1;break a;}}c=0;}return c;}
function AFM(){B.call(this);this.wC=null;}
function AYX(a,b){var c,d;c=a.wC;Xs(c,FS(c,b.j));b=Bn(c);d=c.d;OL(b,d.y,d.C);IC(c);}
var AJI=G();
function AGS(b,c){var d,e;$rt_globals.console.info("openFileDialog....");d=(EM()).createElement("input");b="file";d.type=b;if(c!==null){b=!!1;d.webkitdirectory=b;}e=new U7;d.addEventListener("change",Bz(e,"handleEvent"));d.click();}
var ABX=G();
var AI5=G();
function ALA(b,c,d,e,f,g){g.b=c.b;g.a=f;Bw(b,d.b,d.a,g,e);Bw(b,d.b,(d.a+c.a|0)-f|0,g,e);g.b=f;g.a=(c.a-f|0)-f|0;Bw(b,d.b,d.a+f|0,g,e);Bw(b,(d.b+c.b|0)-f|0,d.a+f|0,g,e);}
function AMW(b,c,d,e,f,g,h,i){var j,k,l;j=(d.b+g|0)-e|0;k=(d.a+c.a|0)+e|0;i.b=(c.b+e|0)+e|0;i.a=g;Bw(b,j,k,i,h);Bw(b,j,k,i,h);Bw(b,j+g|0,k+g|0,i,h);l=(d.b+c.b|0)+e|0;j=((d.a+g|0)-f|0)-e|0;i.b=g;i.a=(((c.a-g|0)+e|0)+e|0)+f|0;Bw(b,l,j,i,h);Bw(b,l,j,i,h);Bw(b,l+g|0,j+g|0,i,h);}
function RW(){var a=this;B.call(a);a.c8=null;a.rg=null;a.fQ=null;a.eA=0;a.cJ=0;a.jT=null;a.kB=null;a.h2=0;a.yu=0;}
function Qj(a,b,c,d,e,f,g){var h,i,j,k;if(e<=d){h=a.eA;i=Bb(d/h|0,h);j=i+h|0;if((d-(h/3|0)|0)<=Be(i,e))a:{while(true){if(d<=e){j=d;break a;}E$(c);j=d+(-1)|0;b=Dr(d);d=Bb(j,a.cJ)%a.fQ.a|0;Hh(a,c,b,a.h2,g);Kk(a.c8,c,0,d);if(!(j%a.eA|0))break;d=j;}}else{E$(b);k=a.eA-1|0;while(k>=0){h=j+(-1)|0;if(j<=e)j=j+f|0;Hh(a,b,Dr(j),Bb(a.cJ,k)+a.h2|0,g);k=k+(-1)|0;j=h;}CW(a.c8,b);j=Be(i,e);}return j;}k=a.eA;h=Bb(d/k|0,k);i=h+k|0;if((d+(k/3|0)|0)>=Bf(i,e-1|0))b:{while(true){if(d>=e){j=d;break b;}E$(c);b=Dr((d+f|0)+1|0);j=d
+1|0;d=Bb(d,a.cJ)%a.fQ.a|0;Hh(a,c,b,a.h2,g);Kk(a.c8,c,0,d);if(!(j%a.eA|0))break;d=j;}}else{E$(b);d=0;while(d<a.eA){h=h+1|0;Hh(a,b,Dr((h>e?h-f|0:h)+f|0),Bb(a.cJ,d)+a.h2|0,g);d=d+1|0;}CW(a.c8,b);j=Bf(i,e);}return j;}
function XO(b,c,d,e){c=c.data;return d<c.length&&c[d]?Is(b.d3,b,c[d]):e.lQ;}
function N4(a,b,c,d,e,f){DT(b,a.rg.b+d.b|0,c+d.a|0,a.jT,a.kB,a.c8,e,f,a.yu);}
function Hh(a,b,c,d,e){B1(b,c,a.fQ.b-20.0*e,d);}
function TN(){var a=this;B.call(a);a.xg=null;a.xh=null;a.xf=0;}
function A1b(a,b){var c,d,e;c=a.xg;d=a.xh;e=a.xf;d.g(WV(c,(b.j.b+e|0)-c.fr.b|0));}
function TM(){var a=this;B.call(a);a.sP=null;a.sN=null;a.sO=0;}
function A65(a,b){var c,d,e;c=a.sP;d=a.sN;e=a.sO;d.g(RP(c,(b.j.a+e|0)-c.fr.a|0));}
var SH=G();
function Su(){B.call(this);this.rA=null;}
function ATA(a){return a.rA.hK();}
function Sv(){B.call(this);this.t2=null;}
function AQ0(a){return a.t2.hK();}
var O8=G(BL);
function Te(){B.call(this);this.vC=null;}
function A6v(a){return a.vC.hK();}
function Xr(){B.call(this);this.rN=null;}
function AXm(a,b){var c,d;c=a.rN;d=c.ez+1|0;c.ez=d;c=new J;L(c);H(H(V(c,d),C(444)),b);$rt_globals.console.info($rt_ustr(K(c)));}
var YM=G();
function A5d(a){return Eo(1);}
function Vz(){B.call(this);this.Ae=null;}
function ASP(a,b){a.Ae.g(F2(b));}
var AIa=G();
function X7(){B.call(this);this.rJ=null;}
function AVH(a,b){a.rJ.e();}
var DX=G(Bu);
function AET(){var a=this;B.call(a);a.r3=null;a.r5=null;}
function A7B(a){var b,c;b=a.r3;c=a.r5;D3(b);c.e();}
var GF=G(JE);
var AFJ=G(FT);
var AHc=G(0);
function Xe(){B.call(this);this.z$=null;}
function AXY(a,b){var c;c=a.z$;DS(c,b);H3(c,null);Xq(c);}
function AEX(){var a=this;B.call(a);a.bt=0;a.by=0;}
function D1(a,b){var c=new AEX();AMu(c,a,b);return c;}
function AMu(a,b,c){a.bt=b;a.by=c;}
function AOM(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.bt==c.bt&&a.by==c.by?1:0;}return 0;}
function AVW(a){var b,c,d,e;b=P(B,2).data;b[0]=C6(a.bt);b[1]=C6(a.by);c=1;d=0;while(d<b.length){c=31*c|0;e=b[d];c=c+(e===null?0:e.bs)|0;d=d+1|0;}return c;}
function APi(a){var b,c,d;b=a.bt;c=a.by;d=new J;L(d);Bq(d,40);Bq(V(H(V(d,b),C(40)),c),41);return K(d);}
function A4T(a,b){var c;b=b;c=BQ(a.bt,b.bt);if(!c)c=BQ(a.by,b.by);return c;}
var AF6=G();
function A5G(a,b){$rt_globals.console.info("JsFileDialog: "+b);}
function AF5(){B.call(this);this.tT=null;}
function A0W(a,b){var c,d,e;c=a.tT;d=0;e=b.length;while(d<e){c.g(AJl(b[d],P(BC,0)));d=d+1|0;}}
function AFr(){B.call(this);this.DF=null;}
function A1T(a,b){var c,d;c=a.DF;d=b.name;$rt_globals.console.info("showDirectoryPicker result: "+d);c.g(A73(b,P(BC,0),P(BC,0)));}
var W1=G();
function AYa(a){return OD();}
var LA=G(0);
function APz(a,b,c){Jv(b);}
function ANM(a,b){var c;c=new S9;c.vI=a;c.vJ=b;return c;}
function Mo(){var a=this;ED.call(a);a.lo=null;a.cK=null;a.yB=null;a.i3=null;a.fY=null;a.tS=null;}
function Bch(a,b,c){var d=new Mo();AFi(d,a,b,c);return d;}
function AFi(a,b,c,d){var e,f;KI(a,b,c,d);a.i3=Kr();a.fY=Kr();e=new R8;Fl(e);e.jR=I6(b);d=Vw(b.F);e.eO=d;e.lv=G_(d,b.F);d=new Qz;Fl(d);f=new B4;ASn();AMZ(f,BaD);d.CR=f;e.pH=d;d=G5(e.jR);e.gp=d;e.G4=a;Ne(e,I(CH,[e.lv,e.pH,d]));e.EL=Eo(1);a.cK=e;WP(e,c);f=Iy(C(445),0);Ew(f);c=new ACB;c.sX=a;f.cz=c;D9(a.cK.eO,f);AAu(a.cK.eO);c=US(a,a.cK,C(446),0.0);a.lo=c;d=new ACA;d.xy=a;c.i9=d;d=new ACC;d.u7=a;c.i5=d;DY(b,c);Cx(b.F,a.cK.eO);}
function A0p(a,b){var c,d,e,f,g,h,i;if(B3(a.cK.gp,b)){c=a.cK;d=c.jR;c=c.gp;e=a.hI;f=a.M;BG(f);g=new Wr;g.DJ=f;return ABP(JK(d,c,e,a,c,g),b);}h=P(Bt,1);i=h.data;b=new Bt;c=new Wq;c.rE=a;B6(b,c,C(447));i[0]=b;return CM(h);}
function AFN(a){var b,c;b=a.M.F.cn;c=new SD;c.rD=a;GC(b,c);}
function A2V(a){a.lo=null;a.cK=null;a.i3=null;a.fY=null;}
function A1e(a,b){a.gP=b;Ex(a.lo,b.cc);WP(a.cK,b);}
function A1c(a,b){var c,d,e;c=b.eS;d=ES(c);a.yB=d;e=CC(a.i3,d);if(e!==null)R9(a,e);else{b=Bg();e=new J;L(e);H(H(e,C(448)),d);Bc(b,K(e));if(HX(a.fY,d)){b=new J;L(b);H(H(b,C(449)),d);$rt_globals.console.info($rt_ustr(K(b)));}else{D5(a.fY,d,d);b=new RK;b.wu=a;b.wv=d;e=new RL;e.uj=a;e.ui=d;WQ(c,b,e);}}}
function R9(a,b){It(a.cK.gp,b);b=a.cK;Cx(b.jR.cj.F,b.gp);}
function AWt(a,b){var c;AFQ(b);if(E9(b)>0)Gr(a.cK.eO);c=b.eG.data;if(c.length==1&&!b.fz.data.length)c[0].cz.e();}
function A4n(a,b){if(E9(b)>0)Gr(a.cK.eO);LY(b);}
function A3Q(a,b,c){if(AKn(c)!==C(189))RZ(b);else Jv(b);}
var AFj=G();
function AX3(a){return Eo(1);}
function AEb(){var a=this;ED.call(a);a.im=null;a.lp=null;a.d4=null;a.nY=null;a.rH=null;}
function AWx(a,b,c){var d=new AEb();ANq(d,a,b,c);return d;}
function ANq(a,b,c,d){KI(a,b,c,d);d=I6(b);a.lp=d;b=G5(d);a.d4=b;b=Lc(a,b,25.0);a.im=b;d=new AFq;d.CQ=a;b.i9=d;d=new AFp;d.sa=a;b.i5=d;a.d4.l9=a;AOb(a,c);DY(a.M,a.im);}
function K8(a){Cx(a.M.F,a.d4);}
function UK(a){return a.M.F.b5;}
function AOb(a,b){Ex(a.im,b.cc);Gc(a.lp,b);Fb(a.d4,b);}
function L6(a,b){var c,d;c=a.d4;Cx(c.ch,c);c=a.d4;d=new Sd;d.uO=a;d.uN=b;Gb(c,b,d);}
function APX(a){var b;if(UK(a)===a.d4)Cx(a.M.F,null);b=a.rH;if(b!==null)b.g(a);a.im=null;a.d4=null;a.lp=null;a.nY=null;a.rH=null;}
function A1X(a,b){var c,d,e,f,g,h;c=new Bt;d=new AEA;d.se=a;B6(c,d,C(450));e=a.lp;f=a.d4;d=a.hI;g=a.M;BG(g);h=new AEC;h.Bl=g;return NS(JK(e,f,d,a,f,h),b,c);}
function ACj(a){var b,c,d;b=a.M;c=b.F.cn;d=new ACc;d.zn=a;Fm(c,NV(b,d));}
function A3M(a,b){if(AED(b)){ACj(a);return 1;}if(b.bh!=27)return 0;if(!AAY(b))AGk(a.M);else NB(a.im);return 1;}
var Tl=G();
function AUt(a){return Eo(1);}
var AF2=G(DL);
var Bci=null;function Y6(b){var c;c=new J;L(c);return K(Di(c,b));}
function AIY(){Bci=F($rt_floatcls());}
var GZ=G();
var Bcj=null;var Bck=null;var A_F=null;var A_E=null;var A_D=null;function AMd(){Bcj=DK([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);Bck=ALe([Bs(1),Bs(10),Bs(100),Bs(1000),Bs(10000),Bs(100000),Bs(1000000),Bs(10000000),Bs(100000000),Bs(1000000000),D(1410065408, 2),D(1215752192, 23),D(3567587328, 232),D(1316134912, 2328),D(276447232, 23283),D(2764472320, 232830),D(1874919424, 2328306),D(1569325056, 23283064),D(2808348672, 232830643)]);A_F=ALe([Bs(1),Bs(10),Bs(100),Bs(10000),Bs(100000000),
D(1874919424, 2328306)]);A_E=new ADN;A_D=new VV;}
var Kb=G();
var Bcl=0;var Bcm=null;var Bcn=null;function AMF(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=($rt_globals.isNaN(b)?1:0)?2143289344:$rt_floatToRawIntBits(b);c.sf=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.n3=0;c.nP=0;return;}if(f)d=e|8388608;else{d=e<<1;while(Jc(Dm(Bs(d),Bs(8388608)),F4)){d=d<<1;f=f+(-1)|0;}}g=AMO(Bcn,f);if(g<0)g= -g|0;h=Bcn.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=J$(d,Bcm.data[e],i);if(j<Bcl){while($rt_ucmp(j,Bcl)<=0){g=g+(-1)|0;j=(j*10|0)+9|0;}h=Bcn.data;e=g+1|0;i=9+(f-h[e]|0)|0;j=J$(d,
Bcm.data[e],i);}e=d<<1;d=e+1|0;h=Bcm.data;f=g+1|0;k=h[f];l=i-1|0;m=J$(d,k,l);n=J$(e-1|0,Bcm.data[f],l);o=1;while(true){p=o*10|0;if($rt_ucmp($rt_udiv(j,p),$rt_udiv(n,p))<=0)break;o=p;}k=1;while(true){l=k*10|0;if($rt_ucmp($rt_udiv(j,l),$rt_udiv(m,l))>=0)break;k=l;}q=$rt_ucmp(o,k);d=q>0?Bb($rt_udiv(j,o),o):q<0?Bb($rt_udiv(j,k),k)+k|0:Bb($rt_udiv((j+(k/2|0)|0),k),k);if(DQ(Bs(d),Bs(1000000000))>=0)while(true){g=g+1|0;d=$rt_udiv(d,10);if($rt_ucmp(d,1000000000)<0)break;}else if($rt_ucmp(d,100000000)<0){g=g+(-1)|0;d
=d*10|0;}c.n3=d;c.nP=g-50|0;}
function J$(b,c,d){return Hi(GD(Cm(Dm(Bs(b),D(4294967295, 0)),Dm(Bs(c),D(4294967295, 0))),32-d|0));}
function ALM(){Bcl=$rt_udiv((-1),10);Bcm=DK([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),
(-742253618),(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),
(-1272652747),(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);Bcn=DK([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,
79,82,85,89,92,95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);}
function VV(){var a=this;B.call(a);a.n3=0;a.nP=0;a.sf=0;}
function VD(){B.call(this);this.sC=null;}
function AO5(a){HG(a.sC,37,3);}
function VE(){B.call(this);this.tn=null;}
function ARe(a){HG(a.tn,40,3);}
function VG(){B.call(this);this.uW=null;}
function A67(a){HG(a.uW,42,3);}
function VH(){B.call(this);this.y1=null;}
function ATJ(a){HG(a.y1,45,3);}
function VI(){B.call(this);this.zv=null;}
function AV6(a){HG(a.zv,45,5);}
function WL(){B.call(this);this.CH=null;}
function ASB(a,b){var c,d;c=a.CH;d=new Bu;Bm(d,$rt_str(b.message));c.g(d);}
var Xu=G(0);
var A_Z=null;function A9p(){A9p=Bl(Xu);A4P();}
function A4P(){A_Z=new $rt_globals.TextDecoder("utf-16");}
function Pf(){var a=this;B.call(a);a.Gp=null;a.yb=0.0;a.EU=0.0;a.g4=null;a.j2=null;a.o0=null;a.gI=0;}
function ANS(a,b){var c;if(b!==null){a.j2=b;return a;}c=new BU;Bm(c,C(451));N(c);}
function AIM(a,b){var c;if(b!==null){a.o0=b;return a;}c=new BU;Bm(c,C(451));N(c);}
function AAS(a,b,c,d){var e,f,g,$$je;e=a.gI;if(!(e==2&&!d)&&e!=3){a.gI=d?2:1;while(true){try{f=AJP(a,b,c);}catch($$e){$$je=Fe($$e);if($$je instanceof Bu){g=$$je;N(A0O(g));}else{throw $$e;}}if(II(f))return f;if(Jx(f)){if(d&&El(b)){g=a.j2;HM();if(g===A_8)return EL(Cl(b));if(Cl(c)<=M(a.g4))return A__;FR(b,b.bf+Cl(b)|0);if(a.j2===A_9)N2(c,a.g4);}return f;}if(SS(f)){g=a.j2;HM();if(g===A_8)return f;if(g===A_9){if(Cl(c)<M(a.g4))return A__;N2(c,a.g4);}FR(b,b.bf+LI(f)|0);}else if(MX(f)){g=a.o0;HM();if(g===A_8)break;if
(g===A_9){if(Cl(c)<M(a.g4))return A__;N2(c,a.g4);}FR(b,b.bf+LI(f)|0);}}return f;}b=new CS;X(b);N(b);}
function ALg(a,b){var c,d,e,f;c=a.gI;if(c&&c!=3){b=new CS;X(b);N(b);}if(!Cl(b))return AKf(0);if(a.gI)a.gI=0;d=AKf(Be(8,Cl(b)*a.yb|0));while(true){e=AAS(a,b,d,0);if(Jx(e))break;if(II(e))d=ACr(a,d);if(!Oo(e))continue;VU(e);}b=AAS(a,b,d,1);if(Oo(b))VU(b);while(true){f=a.gI;if(f!=3&&f!=2)break;a.gI=3;if(Jx(Baa)){d.eK=d.bf;d.bf=0;d.kp=(-1);return d;}d=ACr(a,d);}b=new CS;X(b);N(b);}
function ACr(a,b){var c,d,e;c=b.i8;d=Lm(c,Be(8,c.data.length*2|0));e=AMo(d,0,d.data.length);FR(e,b.bf);return e;}
var AH8=G(C$);
var U7=G();
function AZe(a,b){}
function SF(){var a=this;FL.call(a);a.b3=null;a.ev=null;a.iJ=null;a.CB=null;a.eJ=null;a.cf=null;a.fn=null;a.gg=null;a.ef=0;a.gc=0;a.DH=null;a.et=0;a.fc=0;a.h9=0;a.gF=0;a.gs=0;a.c_=0;a.fo=null;a.k7=null;a.Av=null;a.i6=null;}
function A$P(a,b){var c=new SF();ANQ(c,a,b);return c;}
function ANQ(a,b,c){Ms(a);a.ev=TY();a.iJ=new Bi;a.cf=Bco;a.fn=P(KB,0);a.et=0;a.fc=0;a.h9=0;a.gF=0;a.gs=0;a.fo=AKZ(0);a.i6=Kr();a.b3=b;a.k7=c;a.DH=c;Rx(a);}
function Rx(a){a.ef=Ck(2.0,a.b3.ca);}
function Xj(a){return a.cf.data.length?0:1;}
function YV(a,b){U3(a);a.cf=b;}
function U3(a){Y(a.iJ,0,0);}
function XU(a,b,c){a.Av=b;a.CB=c;a.eJ=null;a.fo=null;a.gc=0;U3(a);}
function A66(a){a.gg=BR(a.gg,null);Y(a.iJ,0,0);Fd(a.i6);a.fo=null;a.cf=Bco;a.fn=null;a.et=0;a.fc=0;a.h9=0;ADc(a.ev);a.k7=null;}
function A03(a,b,c){AAf(a);Rx(a);a.eJ=null;a.fo=null;a.gc=0;}
function AZc(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh;c=KS(a.b3);if(Xj(a))return;Lz(a);Cr(c,a.eJ);d=Ey(a);e=AKF(c,a.gc);f=Bf(ID(a.k.a,d),a.cf.data.length)+30|0;g=a.Av.Du;h=a.fn.data;d=h.length;if(d<f){a:{i=a.gF;j=a.gs;k=a.cf;l=a.fo;m=a.i6;n=P(KB,f);if(d>0){o=n.data;while(i<=j){c=k.data[i];f=i%o.length|0;p=i%d|0;q=h[p];if(q!==null&&q.hz!==c){AEM(l,q,m);o[f]=Ns(c,l,e,m);h[p]=null;}else if(q!==null&&o[f]===null){o[f]=q;h[p]=null;}else o[f]=Ns(c,l,e,m);i=i+1|0;}}else if(f
>0){r=n.data;while(true){if(i>j)break a;r[i%r.length|0]=Ns(k.data[i],l,e,m);i=i+1|0;}}}f=0;while(f<d){c=h[f];if(c!==null){AEM(l,c,m);h[f]=null;}f=f+1|0;}a.fn=n;Ct(a.iJ,Nr(a.fo));AAt(a,a.b3.bO);}a.gF=Bf((a.N.a+a.ef|0)/(Ey(a)+a.ef|0)|0,a.cf.data.length-1|0);a.gs=Bf((((a.N.a+a.ev.v.a|0)-1|0)+a.ef|0)/(Ey(a)+a.ef|0)|0,a.cf.data.length-1|0);if(!a.fn.data.length)return;AKA(a,e);AEB(a,b);q=g.Cq;c=a.i;Bw(b,c.b,c.a,a.k,q);c=a.ev.w;i=c.b;j=c.a;p=Cw(a.b3,2.0);s=a.b3.c9;t=a.gF;u=i+p|0;while(t<=a.gs){l=ZQ(a,t);d=Bb(t,Ey(a));v
=t+1|0;w=d+Bb(v,a.ef)|0;x=u+a.et|0;y=x+a.fc|0;z=a.c_!=t?0:1;m=!z?q:g.tU;ba=!z?g.vv:g.l0;bb=!z?g.r7:g.l0;bc=!z?g.sJ:g.l0;bd=(j+w|0)-a.N.a|0;DT(b,u,bd,l.j$,l.uJ,a.gg,ba,m,a.b3.cV);DT(b,x,bd,l.kE,l.lY,a.gg,bb,m,a.b3.cV);DT(b,y,bd,l.ka,l.lu,a.gg,bc,m,a.b3.cV);d=l.j$.b;be=u+d|0;Y(s,Be(0,a.et-d|0),l.j$.a);Bw(b,be,bd,s,m);d=u+a.et|0;f=l.kE.b;bf=d+f|0;Y(s,Be(0,a.fc-f|0),l.kE.a);Bw(b,bf,bd,s,m);d=l.ka.b;bg=y+d|0;Y(s,Be(0,(((a.ev.v.b-d|0)-a.fc|0)-a.et|0)-p|0),l.ka.a);Bw(b,bg,bd,s,m);bh=(i+a.k.b|0)-p|0;Y(s,p,Ey(a)+a.ef
|0);Bw(b,bh,bd,s,q);t=v;}GA(b);}
function AKA(a,b){var c,d,e,f,g,h;c=0;d=a.gF;while(d<=a.gs){e=ZQ(a,d);if(!(e!==null&&e.hz===a.cf.data[d])){f=a.fn.data;g=a.cf;e=a.fo;h=a.i6;c=d%f.length|0;if(f[c]!==null)AEM(e,f[c],h);f[c]=Ns(g.data[d],e,b,h);c=1;}d=d+1|0;}if(c){Ct(a.iJ,Nr(a.fo));AAt(a,a.b3.bO);}}
function AAt(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.iJ;c=Eg(b,c.b+150|0,c.a,a.b3.cV);Cr(c,a.eJ);d=a.eJ;e=d.eN;f=e-(e+d.e8)/16.0;g=a.fn.data;h=g.length;i=0;while(i<h){d=g[i];if(d!==null){j=d.hz.me;k=d.lY;B1(c,j,k.bp+a.gc,f+k.bu);j=d.hz.mw;d=d.lu;B1(c,j,d.bp+a.gc,f+d.bu);}i=i+1|0;}a:{d=a.i6;if(d.ds>0){h=d.dj;i=0;b:while(true){g=d.cg.data;if(i>=g.length)break a;j=g[i];while(j!==null){k=j.cR;l=j.c1;k=k;l=l.mW;B1(c,k,l.bp+a.gc,f+l.bu);j=j.dh;if(h!=d.dj)break b;}i=i+1|0;}b=new IF;X(b);N(b);}}if(a.gg===null)a.gg=C5(b);CW(a.gg,
c);EQ(c);}
function ZQ(a,b){var c;c=a.fn.data;return c[b%c.length|0];}
function A4R(a,b){Ct(a.ev.v,b);}
function A55(a,b){Ct(a.ev.w,b);}
function AAf(a){var b,c,d,e,f,g,h,i,j;b=KS(a.b3);if(Xj(a))return;Lz(a);Cr(b,a.eJ);c=AKF(b,a.gc);d=a.cf.data;e=d.length;f=0;while(f<e){g=d[f];h=Ob(c,g.ic);i=Ob(c,g.me);j=Ob(c,g.mw);a.et=Be(a.et,h);a.fc=Be(a.fc,i);a.h9=Be(a.h9,j);f=f+1|0;}}
function ATr(a,b){var c;c=ACe(a,b.j);if(c>=0)a.c_=c;return Fw(a.ev,a.i)&&Ha(a.b3.dc)?1:0;}
function ARo(a,b,c){if(!Fw(a.ev,b.j)&&!LQ(a.ev)){b=a.DH;if(b!==null)b.e();}return null;}
function AVN(a,b,c,d){var e;if(d==1){e=ACe(a,b.j);if(e>=0)Wk(a,a.cf.data[e]);}return 1;}
function Wk(a,b){a.k7.e();b.vl.e();}
function ACe(a,b){var c,d,e;if(!a.fn.data.length)return (-1);c=Ey(a);d=(b.a-a.i.a|0)+a.N.a|0;e=a.ef;e=(d+e|0)/(c+e|0)|0;if(e<a.cf.data.length)return e;return (-1);}
function Ey(a){return Fp(a.eJ);}
function Lz(a){var b;if(a.eJ===null){b=FF(a.b3,a.CB);a.eJ=b;a.fo=AKZ(Fp(b));a.gc=C7(a.eJ.q6);}}
function A6h(a,b){var c,d,e;a:{switch(b.bh){case 13:Wk(a,a.cf.data[a.c_]);return 0;case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 32:break a;case 27:break;case 33:a.c_=a.gF;b=a.fB;c=a.N;JR(b,c.b,c.a-(a.k.a/2|0)|0);return 0;case 34:a.c_=a.gs;b=a.fB;c=a.N;JR(b,c.b,c.a+(a.k.a/2|0)|0);return 0;case 35:case 39:a.c_=a.cf.data.length-1|0;break a;case 36:case 37:a.c_=0;break a;case 38:d=a.c_;e=a.cf.data.length;a.c_=((d+e|0)
-1|0)%e|0;break a;case 40:a.c_=(a.c_+1|0)%a.cf.data.length|0;break a;default:break a;}a.k7.e();return 0;}e=a.c_;if(e<=a.gF)JR(a.fB,a.N.b,Bb(e,Ey(a))+Bb(a.c_,a.ef)|0);else if(e>=a.gs)JR(a.fB,a.N.b,(Bb(e+1|0,Ey(a))+Bb(a.c_+2|0,a.ef)|0)-a.k.a|0);return 0;}
var WU=G();
function AXL(a){}
var AFU=G();
function AQE(a,b){}
function AFW(){var a=this;B.call(a);a.vS=null;a.vT=null;}
function AON(a,b){var c,d,e;c=a.vS;d=a.vT;b=BT(b);e=new J;L(e);H(H(H(e,d),C(31)),b);C0(c,K(e));}
function Rb(){var a=this;FL.call(a);a.m3=null;a.qM=null;a.zI=null;a.ta=0.0;}
function AXU(a){var b;b=Ck(20.0,a.bY);return BJ(b,b);}
function A4X(a,b){UL(a,b.b*3|0,b.a*5|0);a.zI.g(b);}
function AYd(a,b){var c,d,e,f,g,h,i,j,k,l,m;ANV(a,b);AEB(a,b);c=Ck(30.0,a.bY);d=a.N;e=d.b;f=Bb(e/c|0,c);g=d.a;h=Bb(g/c|0,c);d=a.k;i=Bb(((e+d.b|0)-1|0)/c|0,c);e=Bb(((g+d.a|0)-1|0)/c|0,c);d=a.qM;d.a=c;d.b=c;a.m3.bD=1.0;while(h<=e){g=a.i.a-a.N.a|0;j=f;while(j<=i){k=a.i.b-a.N.b|0;l=((37*j|0)+(17*h|0)|0)+9|0;m=0;while(m<17){l=ANK(l);m=m+1|0;}W8(ANe(l),0.75,a.ta,a.m3);Bw(b,k+j|0,g+h|0,a.qM,a.m3);j=j+c|0;}h=h+c|0;}GA(b);}
function AT1(a,b,c){return BaH;}
function AFV(){var a=this;B.call(a);a.rK=null;a.rL=null;}
function AWM(a){var b,c;b=a.rK;c=a.rL;IW(b.u,c);Kv(c);}
function V5(){var a=this;CH.call(a);a.gH=null;a.h6=null;a.kl=null;a.eZ=null;a.lt=0.0;a.e9=0;a.iR=0;a.em=null;a.nv=null;}
function Xl(a){var b;if(O4(a))return 0;AEw(a);b=Cw(a.gH,a.lt);return Fp(a.eZ)+(b*2|0)|0;}
function Tg(a){var b;b=a.k;return b.b&&b.a?0:1;}
function O4(a){return a.h6!==null&&a.kl!==null?0:1;}
function RG(a,b){a.k.a=b;}
function RN(a,b,c,d,e){var f,g;f=a.gH.c9;Y(f,d,a.k.a);g=a.i;Bw(b,g.b+c|0,g.a,f,e);}
function AEw(a){if(a.eZ===null)a.eZ=FF(a.gH,a.h6);}
function R8(){var a=this;Ip.call(a);a.EL=null;a.G4=null;a.jR=null;a.pH=null;a.lv=null;a.eO=null;a.gp=null;}
function ASQ(a){var b,c,d,e;b=a.k.b/4|0;c=b+DH(a,1.0)|0;d=AMC(a.i);e=BJ(b,a.k.a);a.cx.data[0].dW(d,e,a.bY);d.b=a.i.b+b|0;e.b=c-b|0;a.cx.data[1].dW(d,e,a.bY);d.b=a.i.b+c|0;e.b=a.k.b-c|0;a.cx.data[2].dW(d,e,a.bY);}
function WP(a,b){KG(a.eO,b);Ke(a.eO,a.lv);Gc(a.jR,b);Fb(a.gp,b);}
function A1$(a){var b,c;b=AJH(a.gp);c=AKh(a.lv);return BJ((b.b+a.pH.k.b|0)+c.b|0,b.a);}
function ACB(){B.call(this);this.sX=null;}
function AQO(a){AFN(a.sX);}
function ACA(){B.call(this);this.xy=null;}
function AVx(a){var b;b=a.xy;Cx(b.M.F,b.tS);}
function ACC(){B.call(this);this.u7=null;}
function A3K(a){var b,c;b=a.u7;c=b.M.F.b5;if(b.cK.gp!==c)c=null;b.tS=c;}
function AFq(){B.call(this);this.CQ=null;}
function ASo(a){var b;b=a.CQ;Cx(b.M.F,b.nY);}
function AFp(){B.call(this);this.sa=null;}
function AWR(a){var b;b=a.sa;b.nY=b.d4!==UK(b)?null:b.d4;}
var AB5=G(DL);
var Bcp=null;function Dl(b,c){return Long_udiv(b, c);}
function AKR(b,c){return Long_urem(b, c);}
function DQ(b,c){return Long_ucompare(b, c);}
function ALT(){Bcp=F($rt_longcls());}
function AD5(){var a=this;B.call(a);a.uH=0;a.D4=0;}
function Gi(a,b){var c;c=a.D4;if(c<=0)return 0;return AAA(a.uH,b,c);}
function ADF(){B.call(this);this.o_=null;}
var Bco=null;function ASD(){var a=new ADF();AHq(a);return a;}
function AHq(a){a.o_=BO();}
function XZ(a,b,c,d,e){var f;f=new LR;f.vl=e;f.me=c;f.mw=d;f.ic=b;BA(a.o_,f);}
function AFh(a){return GO(a.o_,Bco);}
function ACx(b){return b===null?C(22):AEz(b);}
function ANR(){Bco=P(LR,0);}
function KB(){var a=this;B.call(a);a.uJ=null;a.lY=null;a.lu=null;a.j$=null;a.kE=null;a.ka=null;a.hz=null;}
function Ns(b,c,d,e){var f,g,h;f=new KB;f.j$=new Bi;f.kE=new Bi;f.ka=new Bi;f.hz=b;g=CC(e,b.ic);if(g!==null)g.jo=g.jo+1|0;else{g=new AES;h=K3(c,b.ic,d);g.jo=1;g.mW=h;D5(e,b.ic,g);}e=g.mW;f.uJ=e;Y(f.j$,e.bi|0,e.bD|0);e=K3(c,b.me,d);f.lY=e;Y(f.kE,e.bi|0,e.bD|0);b=K3(c,b.mw,d);f.lu=b;Y(f.ka,b.bi|0,b.bD|0);return f;}
function AEM(b,c,d){var e,f,g;e=c.hz.ic;f=CC(d,e);g=f.jo-1|0;f.jo=g;if(!g){L_(d,e);Jw(b,f.mW);}Jw(b,c.lY);Jw(b,c.lu);}
var Pq=G(0);
var Bba=null;var Bbb=null;function AIx(){Bba=Fg(40,40,40,200);Bbb=Fg(43,43,43,128);}
function Qz(){CH.call(this);this.CR=null;}
function AOS(a,b){var c;c=a.i;Bw(b,c.b,c.a,a.k,a.CR);}
function ADN(){var a=this;B.call(a);a.ov=F4;a.ny=0;a.r4=0;}
function Ue(){var a=this;B.call(a);a.C3=null;a.C0=null;a.C1=null;}
function ATh(a){var b,c,d,e,f;b=a.C3;c=a.C0;d=a.C1;e=Bg();f=new J;L(f);b=H(f,b);Bq(b,9);b=H(b,c);Bq(b,9);H(b,d);Bc(e,K(f));}
var Vk=G(0);
var BaD=null;function ASn(){ASn=Bl(Vk);AXN();}
function AXN(){BaD=S(C(242));}
function LR(){var a=this;B.call(a);a.vl=null;a.me=null;a.mw=null;a.ic=null;}
function Y4(){var a=this;B.call(a);a.rx=null;a.Ag=null;a.wy=0;a.xx=0;}
function OY(a,b){return Cl(a.Ag)<b?0:1;}
function VR(){B.call(this);this.BH=null;}
function A7C(a,b){DS(a.BH,b);}
function AFo(){var a=this;B.call(a);a.EW=null;a.EX=null;a.EV=null;}
function AN4(){var a=this;B.call(a);a.pI=null;a.nK=null;a.fa=null;a.nu=null;a.bE=null;a.qB=null;a.oF=null;a.gq=null;a.hp=null;a.kn=null;}
function AX_(a,b){var c=new AN4();A3o(c,a,b);return c;}
function A3o(a,b,c){var d,e,f;a.fa=b;a.nu=c;a.bE=AZ8();b=new J;L(b);a.kn=b;a.gq=Kr();b=new Ug;d=ANI(16);b.hj=0;b.es=P(J_,d);b.zl=0.75;Wa(b);a.hp=b;b=new Wp;c=a.bE;e=a.kn;f=a.gq;b.dY=c;b.ni=e;b.ul=f;a.qB=b;b=new V6;b.di=c;b.oa=e;b.tf=f;a.oF=b;}
function YT(a){var b,c,d,e,f,g,h;a:{b=NT(a.fa.fw);c=b.jY;if(c.ds>0){d=c.dj;e=0;b:while(true){f=b.jY.cg.data;if(e>=f.length)break a;c=f[e];while(c!==null){g=c.cR;if(HX(a.gq,g))CC(a.gq,g);else{h=a.gq;D5(h,g,C6(h.ds));}c=c.dh;if(d!=b.jY.dj)break b;}e=e+1|0;}b=new IF;X(b);N(b);}}b=a.fa.f1;if(b!==null)ABB(a,b);Bv(a.bE,a.fa.fw.ds);b=T1(NT(a.fa.fw));while(FM(b)){c=Rk(b);Hu(a.bE,a.kn.I,M(c));BN(a.kn,c);}b=T1(NT(a.fa.fw));while(FM(b)){c=Rk(b);c=CC(a.fa.fw,c);Bv(a.bE,c.p);c=B_(c);while(Cd(c)){g=Ce(c);g=CC(a.gq,g);Bv(a.bE,
g.bs);}}if(a.fa.f1===null)Bv(a.bE,(-1));else{Bv(a.bE,a.hp.hj);ACk(a,a.fa.f1);}if(a.nu===null)Bv(a.bE,(-1));else{Bv(a.bE,1);AG2(a.nu,a.bE,a.hp);}a.pI=R$(a.bE);a.nK=GU(K(a.kn));}
function ABB(a,b){var c,d,e,f,g,h;if(AEW(a.hp,b))Pe(a.hp,b);else{c=a.hp;d=C6(c.hj);if(b===null){e=AA0(c);if(e===null){c.mV=c.mV+1|0;e=AE0(c,null,0,0);f=c.hj+1|0;c.hj=f;if(f>c.qC)YN(c);}}else{g=Nk(b);h=g&(c.es.data.length-1|0);e=YW(c,b,h,g);if(e===null){c.mV=c.mV+1|0;e=AE0(c,b,h,g);f=c.hj+1|0;c.hj=f;if(f>c.qC)YN(c);}}e.c1=d;}b=b.c5;if(b===null)return;c=new XB;c.tj=a;b.fH(c);}
function ACk(a,b){var c,d,e,f;c=(Pe(a.hp,b)).bs;Bv(a.bE,c);if(b instanceof Ot)Bv(a.bE,(-1));else if(!(b instanceof LT))Bv(a.bE,0);else Bv(a.bE,1);d=a.qB;Bv(d.dY,b.fk.c$());e=b.fk;f=new XX;f.xw=d;e.fH(f);d=a.oF;Bv(d.di,b.f3.c$());e=b.f3;f=new VK;f.v$=d;e.fH(f);d=b.l8;Bv(a.bE,d.c$());e=new WG;e.CO=a;d.fH(e);d=b.ig;Bv(a.bE,d.c$());d=d.ci();while(d.cY()){e=d.ck();Qc(a.qB,e.l_);HF(a.oF,e.lz);Bv(a.bE,e.sR);}d=b.v5;if(d===null)Bv(a.bE,(-1));else Bv(a.bE,(CC(a.gq,d)).bs);b=b.c5;Bv(a.bE,b.c$());d=new Rg;d.ry=a;b.fH(d);}
function PL(){B.call(this);this.Cm=null;}
function AYE(a,b){var c,d,e,f,g,h,i,j;c=a.Cm;if(c.gh){d=Fk(c);e=new J;L(e);H(H(e,d),C(452));$rt_globals.console.info($rt_ustr(K(e)));}b=b.data;f=CP(b[0]);g=E8(b[1]);h=(CP(b[2])).data[0];if(c.h.cE==h){i=null;j=null;if(b.length>=5){i=CP(b[3]);j=E8(b[4]);}b=En(c);if(!Bk(b,C(211))&&!Bk(b,C(428))?0:1)OR(c.h,f,g);else{X8(c.h,f,g,i,j);Fd(c.h.d2);Fd(c.h.ec);NY(c.h);Lj(c.h);Pa(c);}}}
function AER(){B.call(this);this.tq=null;}
function A3F(a,b){var c,d,e,f;c=a.tq;if(c.fx!=3){b=b.data;d=CP(b[0]);e=E8(b[1]);X8(c.h,d,e,null,null);if(c.gh){b=Fk(c);f=Km(EO(),c.Ci);c=new J;L(c);H(Id(H(H(c,b),C(453)),f),C(209));$rt_globals.console.info($rt_ustr(K(c)));}}}
function ADv(){B.call(this);this.wG=null;}
function ATV(a,b){M5(a.wG,b);}
var FC=G(0);
function YX(){var a=this;B.call(a);a.kz=0;a.rc=0;a.mk=0;a.il=0;a.jX=null;}
function Cd(a){return a.kz>=a.mk?0:1;}
function Ce(a){var b,c;Rt(a);b=a.kz;a.il=b;c=a.jX;a.kz=b+1|0;return c.jg(b);}
function ABl(a){var b,c,d;if(a.il<0){b=new CS;X(b);N(b);}Rt(a);a.jX.m6(a.il);a.rc=a.jX.b_;c=a.il;d=a.kz;if(c<d)a.kz=d-1|0;a.mk=a.mk-1|0;a.il=(-1);}
function Rt(a){var b;if(a.rc>=a.jX.b_)return;b=new IF;X(b);N(b);}
function Tt(){B.call(this);this.vj=null;}
function A2g(a){M4(a.vj);}
function AE7(){var a=this;B.call(a);a.ys=null;a.yr=null;}
function AXV(a){Cx(a.ys,a.yr);}
function LW(){var a=this;Pf.call(a);a.yZ=null;a.BZ=null;}
function AJP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=a.yZ;e=0;f=0;g=a.BZ;a:{b:{while(true){if((e+32|0)>f&&El(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}j=d.data;k=f-e|0;l=Cl(b)+k|0;h=j.length;f=Bf(l,h);m=f-k|0;if(k<0)break b;if(k>h)break b;l=k+m|0;if(l>h){b=new BL;c=new J;L(c);V(H(V(H(c,C(454)),l),C(103)),h);Bm(b,K(c));N(b);}if(Cl(b)<m){b=new O2;X(b);N(b);}if(m<0){b=new BL;c=new J;L(c);H(V(H(c,C(104)),m),C(105));Bm(b,K(c));N(b);}n=b.bf;h=n+b.oc|0;e=0;while(e<m){o=k+1|0;i=b.qP.data;l=h+1|0;j[k]=i[h];e
=e+1|0;k=o;h=l;}b.bf=n+m|0;e=0;}if(!El(c)){p=!El(b)&&e>=f?Baa:A__;break a;}i=g.data;n=Cl(c);o=i.length;n=Bf(n,o);q=new AEm;q.uP=b;q.CK=c;p=AN3(a,d,e,f,g,0,n,q);e=q.xE;if(p===null&&0==q.nB)p=Baa;k=q.nB;h=0;if(c.ri){b=new K1;X(b);N(b);}if(Cl(c)<k)break;if(h>o){b=new BL;c=new J;L(c);Bq(V(H(V(H(c,C(106)),h),C(100)),o),41);Bm(b,K(c));N(b);}l=h+k|0;if(l>o){b=new BL;c=new J;L(c);V(H(V(H(c,C(108)),l),C(103)),o);Bm(b,K(c));N(b);}if(k<0){b=new BL;c=new J;L(c);H(V(H(c,C(104)),k),C(105));Bm(b,K(c));N(b);}o=c.bf;m=0;while
(m<k){l=o+1|0;n=h+1|0;ACg(c,o,i[h]);m=m+1|0;o=l;h=n;}c.bf=c.bf+k|0;if(p!==null)break a;}b=new Kg;X(b);N(b);}b=new BL;c=new J;L(c);Bq(V(H(V(H(c,C(106)),k),C(100)),h),41);Bm(b,K(c));N(b);}FR(b,b.bf-(f-e|0)|0);return p;}
var UG=G(LW);
function AN3(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(Od(h,2))break a;i=Baa;break a;}c=k+1|0;n=j[k];if(!G3(a,n)){c=c+(-2)|0;i=EL(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|n&63)&65535;k=c;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(Od(h,3))break a;i=Baa;break a;}c=k+1|0;n=j[k];k=c+1|0;o=j[c];if(!G3(a,n))break b;if(!G3(a,o))break b;p=((l&15)<<
12|(n&63)<<6|o&63)&65535;if(Pm(p)){c=k+(-3)|0;i=EL(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=EL(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(Od(h,4))break a;i=Baa;break a;}if((f+2|0)>g){c=k+(-1)|0;if(Cl(h.CK)<2?0:1)break a;i=A__;break a;}c=k+1|0;n=j[k];q=c+1|0;o=j[c];k=q+1|0;q=j[q];if(!G3(a,n))break c;if(!G3(a,o))break c;if(!G3(a,q))break c;j=e.data;r=(l&7)<<18|(n&63)<<12|(o&63)<<6|q&63;c=f+1|0;j[f]=Kq(r);m=c+1|0;j[c]=JN(r);}c=k;f=m;}break a;}c=k+(-3)|0;i=EL(1);break a;}c=k+(-3)|0;i
=EL(1);}h.xE=c;h.nB=f;return i;}
function G3(a,b){return (b&192)!=128?0:1;}
function U2(){B.call(this);this.uq=null;}
function AXg(a){var b;b=a.uq.j_;J9();IU(b,Bcc);}
var AHv=G();
function QB(b,c,d){return AI7(b,0,c,d,WD());}
function AI7(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=BQ(c,d);h=g>=0?0:1+R7(f,2.0)|0;i=g>0?0:1+R7(f,3.0)|0;j=P(Db,h+i|0);k=j.data;g=0;l=c+1|0;while(g<h){m=new J;L(m);V(H(m,C(455)),g);k[g]=AI7(K(m),l,d,e,f);g=g+1|0;}g=0;while(g<i){a:{m=new Db;n=new J;L(n);V(H(n,C(456)),g);KE(m,K(n),l);n=new Sz;n.uX=m;m.lO=n;switch((l+g|0)%3|0){case 0:break;case 1:RZ(m);break a;case 2:m.gX=60136;break a;default:break a;}Jv(m);}if(WF(f)<0.25){n=Il(m.hS,0);n.bJ=n.bJ|2;}k[h+g|0]=m;g=g+1|0;}n=AM_(b,c,j);b=new Yt;b.xX=n;b.xZ=e;n.f2=b;n.cz
=b;if((c+c|0)>d)I$(n);else Iq(n);return n;}
function Tw(){B.call(this);this.vm=null;}
function AVR(a){AC3(a.vm);}
function Tv(){B.call(this);this.ze=null;}
function A1s(a){AFH(a.ze);}
function Ty(){B.call(this);this.zU=null;}
function A63(a){AFY(a.zU);}
function Tx(){B.call(this);this.DG=null;}
function AYP(a){AA9(a.DG);}
function ADf(){B.call(this);this.sd=null;}
function AOi(a){Gr(a.sd);}
function ADg(){B.call(this);this.uC=null;}
function AR6(a){Gr(a.uC);}
function HB(){var a=this;B.call(a);a.eF=0;a.fm=0;a.qu=null;a.o9=0;a.hs=null;}
function AWO(a,b,c,d,e,f){var g=new HB();A24(g,a,b,c,d,e,f);return g;}
function A24(a,b,c,d,e,f,g){a.eF=b;a.fm=c;a.qu=BJ(f,g);a.o9=d;a.hs=e;}
function RO(){var a=this;B.call(a);a.gM=null;a.lm=null;a.jL=null;a.rk=null;a.dB=null;a.mz=0;}
function ACp(a,b){if(!BV(b.pD,a.rk)){a.rk=b.pD;OB(a);}}
function OB(a){a.dB=BR(a.dB,null);}
function AIU(a,b){var c,d;c=FF(b,a.rk);d=Fp(c);a.dB=BR(a.dB,AFC(b.bO,Ol(60088),c,0,d,0));}
function UP(a,b){return a.dB!==null&&GK(b,a.gM,a.lm)?1:0;}
function Ye(){var a=this;B.call(a);a.xi=null;a.xj=null;}
function A1A(a){var b,c;b=a.xi;c=a.xj;IW(b.M,c);Kv(c);b.bW();}
function Yd(){B.call(this);this.x6=null;}
var AJ8=G();
function AJB(){var a=this;B.call(a);a.j4=null;a.oE=0;a.gD=0;}
function AZ8(){var a=new AJB();AX9(a);return a;}
function AX9(a){a.oE=0;a.j4=BI(16);a.gD=0;}
function Hu(a,b,c){Bv(a,b);Bv(a,c);}
function Bv(a,b){var c,d;c=a.j4;d=c.data.length;if(d==a.gD)a.j4=JS(c,d*2|0);c=a.j4.data;d=a.gD;a.gD=d+1|0;c[d]=b;}
function R$(a){var b,c,d,e,f;b=a.oE;if(b&&a.gD!=b){c=DG();b=a.oE;d=a.gD;e=new J;L(e);H(V(H(V(H(e,C(457)),b),C(458)),d),C(459));Bc(c,K(e));}f=a.j4;b=f.data.length;d=a.gD;if(b!=d)f=JS(f,d);return f;}
function Ug(){var a=this;Et.call(a);a.hj=0;a.es=null;a.mV=0;a.zl=0.0;a.qC=0;}
function ANI(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Wa(a){a.qC=a.es.data.length*a.zl|0;}
function AEW(a,b){return Xt(a,b)===null?0:1;}
function Pe(a,b){var c;c=Xt(a,b);if(c===null)return null;return c.c1;}
function Xt(a,b){var c,d;if(b===null)c=AA0(a);else{d=Nk(b);c=YW(a,b,d&(a.es.data.length-1|0),d);}return c;}
function YW(a,b,c,d){var e;e=a.es.data[c];while(e!==null&&!(e.oz==d&&(b!==e.cR?0:1))){e=e.iU;}return e;}
function AA0(a){var b;b=a.es.data[0];while(b!==null&&b.cR!==null){b=b.iU;}return b;}
function AE0(a,b,c,d){var e,f;e=new J_;XI(e,b,null);e.oz=d;f=a.es.data;e.iU=f[c];f[c]=e;return e;}
function YN(a){var b,c,d,e,f,g,h,i;b=a.es.data.length;b=ANI(!b?1:b<<1);c=P(J_,b);d=c.data;e=0;f=b-1|0;while(true){g=a.es.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.oz&f;i=h.iU;h.iU=d[b];d[b]=h;h=i;}e=e+1|0;}a.es=c;Wa(a);}
function Wp(){var a=this;B.call(a);a.dY=null;a.ni=null;a.ul=null;}
function Qc(a,b){var c;if(!(b instanceof MY)){Bv(a.dY,3);AFE(a,b);Bv(a.dY,b.j9);}else{c=b;Bv(a.dY,5);AFE(a,c);Bv(a.dY,c.j9);Bv(a.dY,c.ye);b=c.lI;Bv(a.dY,b.p);c=new Yv;c.sb=a;FP(b,c);}}
function AFE(a,b){var c;c=b.eu.g9;Hu(a.dY,a.ni.I,M(c));Bv(a.dY,b.eu.dG);PH(a,b.ky);BN(a.ni,c);}
function PH(a,b){if(b===null)Bv(a.dY,(-1));else Bv(a.dY,(CC(a.ul,b)).bs);}
function V6(){var a=this;B.call(a);a.di=null;a.oa=null;a.tf=null;}
function HF(a,b){var c,d,e;if(b instanceof H_){c=b;Bv(a.di,9);AAv(a,c.fV);}else if(b instanceof KO){d=b;Bv(a.di,3);AA3(a,d);Bv(a.di,d.rF);AAv(a,d.iK);}else if(b instanceof JV){e=b;Bv(a.di,4);HF(a,e.iz);HF(a,e.h5);}else if(b===null)Bv(a.di,(-1));else{Bv(a.di,5);AA3(a,b);Bv(a.di,b.BP);}}
function AA3(a,b){var c;c=b.e1.g9;Hu(a.di,a.oa.I,M(c));Bv(a.di,b.e1.dG);b=b.gl;if(b===null)Bv(a.di,(-1));else Bv(a.di,(CC(a.tf,b)).bs);BN(a.oa,c);}
function AAv(a,b){var c;Bv(a.di,b.p);c=new XL;c.yS=a;FP(b,c);}
function AGg(){var a=this;B.call(a);a.tR=0;a.tQ=0;}
function VC(){B.call(this);this.BJ=null;}
function AZ6(a,b){var c,d,e;c=a.BJ;d=BT(b);e=new J;L(e);H(H(e,C(460)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new QF;d.Ef=c;Ia(b,d);}
function Xz(){B.call(this);this.Ct=null;}
function A3G(a,b){var c,d,e;c=a.Ct;d=BT(b);e=new J;L(e);H(H(e,C(461)),d);$rt_globals.console.info($rt_ustr(K(e)));d=new Zh;d.Gm=c;d.zp=b;e=new Zj;e.Gu=c;P$(b,d,e);}
function Uy(){var a=this;B.call(a);a.bB=null;a.su=null;a.jQ=null;a.pn=null;a.m_=null;a.g1=null;}
function NS(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=UC();e=a.bB.d;f=En(e);e=H6(e);g=a.bB.fW;if(AA6(g,f,e)!==null){h=new SC;h.sY=a;h.sZ=b;EI(d,C(462),h);}if(Pi(g,f,e)!==null){h=new SA;h.BN=a;h.BM=b;EI(d,C(463),h);}if(ADV(g,f,e)!==null){e=new SE;e.z_=a;e.Aa=b;EI(d,C(464),e);}e=new SB;e.D7=a;e.D6=b;EI(d,C(465),e);Ik(a);if(MF()){if(!a.bB.fl){f=new TW;f.vN=a;EI(d,C(466),f);}f=new TX;f.yn=a;EI(d,C(467),f);if(!a.bB.fl&&Xo(Ik(a))){f=new TV;f.s1=a;EI(d,C(468),f);}}if(c!==null)NP(d,c);f=UC();i=P(BC,5).data;i[0]=C(189);i[1]=
C(200);i[2]=C(217);i[3]=C(216);i[4]=C(211);j=i.length;k=0;while(k<j){b=i[k];e=new S3;e.A9=a;e.A8=b;EI(f,b,e);k=k+1|0;}Iw(d,C(469),Jq(f));c=UC();i=P(Bt,3);l=i.data;g=a.m_;BG(g);m=new Rw;m.zy=g;l[0]=Dd(C(470),m);g=a.m_;BG(g);m=new Ru;m.BT=g;l[1]=Dd(C(471),m);g=a.m_;BG(g);m=new Rv;m.rp=g;l[2]=Dd(C(472),m);Mi(c,C(473),CM(i),Bcq);i=P(Bt,2);l=i.data;g=a.jQ;BG(g);m=new VJ;m.BX=g;l[0]=Dd(C(474),m);g=a.jQ;BG(g);m=new VL;m.D_=g;l[1]=Dd(C(475),m);Iw(c,C(476),CM(i));g=new AA2;g.Ax=a;Mi(c,C(477),g,Bcq);if(a.bB.ch.bO.mN)
{i=P(Bt,2);l=i.data;g=new ABC;g.tu=a;l[0]=Dd(C(478),g);g=new ABz;g.Cr=a;l[1]=Dd(C(479),g);Iw(c,C(480),CM(i));}Iw(d,C(481),Jq(c));return Jq(d);}
function ABP(a,b){return NS(a,b,null);}
function Ik(a){return a.bB.ch.cn;}
function XT(a){var b;b=new S7;b.vH=a;return b;}
function A19(a){var b,c,d,e,f;b=P(Bt,5);c=b.data;d=a.bB;BG(d);e=new Up;e.xN=d;c[0]=Dd(C(482),e);e=a.bB;BG(e);f=new Uq;f.tr=e;c[1]=Dd(C(483),f);d=a.bB;BG(d);e=new Ur;e.Cj=d;c[2]=Dd(C(484),e);d=a.bB;BG(d);e=new Us;e.yH=d;c[3]=Dd(C(485),e);d=a.bB;BG(d);e=new UF;e.A1=d;c[4]=Dd(C(486),e);return CM(b);}
function Rs(a,b){var c;c=new PJ;c.zc=a;c.zd=b;return c;}
function Ll(a,b,c){var d,e,f,g,h,i,j,k,l;a:{D3(a.g1.cj);d=a.bB.d;e=En(d);f=H6(d);g=a.bB.fW;if(c===null)h=null;else{A$v();switch(Bcr.data[c.fu]){case 1:h=Pi(g,e,f);break a;case 2:h=AA6(g,e,f);break a;default:}b=new Fn;X(b);N(b);}}c=a.bB;e=FS(c,b);g=JI(c.d.h,e.bt,e.by);f=Um(c,g);if(h!==null){g=c.d;i=e.bt;j=e.by;e=new ADh;e.Hf=c;e.He=b;e.Hd=f;h.u5(g,i,j,e,c.kO);}else{e=CC(c.d.h.ec,g);if(e!==null)Jp(c,e);else{e=CC(c.d.h.d2,g);if(e!==null&&!EU(e))ABk(c.lx,b,e,c,f);else{c=c.lx;k=P(Bt,1);l=k.data;e=new Bt;f=c.cj;BG(f);g
=new AC7;g.C$=f;B6(e,g,C(487));l[0]=e;S6(c,b,CM(k));}}}}
var AAl=G(DL);
var Bcs=null;function ALk(){Bcs=F($rt_doublecls());}
var KF=G();
var Bct=F4;var Bcu=null;var Bcv=null;function AIg(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=!($rt_globals.isNaN(b)?1:0)?$rt_doubleToRawLongBits(b):D(0, 2146959360);c.r4=Jc(Dm(d,D(0, 2147483648)),F4)?0:1;e=Dm(d,D(4294967295, 1048575));f=Hi(A$d(d,52))&2047;if(Jc(e,F4)&&!f){c.ov=F4;c.ny=0;return;}if(f)e=A8O(e,D(0, 1048576));else{e=Ih(e,1);while(Jc(Dm(e,D(0, 1048576)),F4)){e=Ih(e,1);f=f+(-1)|0;}}g=Bcv.data;h=f<<16>>16;i=0;j=g.length;k=BQ(i,j);if(k>0){c=new BU;X(c);N(c);}a:{if(!k)j=(-1);else{k=j-1|0;while(true)
{j=(i+k|0)/2|0;l=BQ(g[j],h);if(!l)break;if(l<=0){i=j+1|0;if(i>k){j=( -j|0)-2|0;break a;}}else{k=j-1|0;if(k<i){j=( -j|0)-1|0;break a;}}}}}if(j<0)j= -j|0;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jn(e,Bcu.data[h],i);if(AQW(m,Bct)){while(DQ(m,Bct)<=0){j=j+(-1)|0;m=C1(Cm(m,Bs(10)),Bs(9));}g=Bcv.data;h=j+1|0;i=12+(f-g[h]|0)|0;m=Jn(e,Bcu.data[h],i);}e=Ih(e,1);d=C1(e,Bs(1));g=Bcu.data;h=j+1|0;n=g[h];f=i-1|0;n=Jn(d,n,f);o=Jn(Km(e,Bs(1)),Bcu.data[h],f);p=Bs(1);while(true){q=Cm(p,Bs(10));if(DQ(Dl(m,q),Dl(o,q))<=0)break;p=q;}r=Bs(1);while
(true){s=Cm(r,Bs(10));if(DQ(Dl(m,s),Dl(n,s))>=0)break;r=s;}h=DQ(p,r);e=h>0?Cm(Dl(m,p),p):h<0?C1(Cm(Dl(m,r),r),r):Cm(Dl(C1(m,AJf(r,Bs(2))),r),r);if(DQ(e,D(2808348672, 232830643))>=0)while(true){j=j+1|0;e=Dl(e,Bs(10));if(DQ(e,D(2808348672, 232830643))<0)break;}else if(DQ(e,D(1569325056, 23283064))<0){j=j+(-1)|0;e=Cm(e,Bs(10));}c.ov=e;c.ny=j-330|0;}
function Jn(b,c,d){var e,f,g,h,i,j,k,l;e=Dm(b,Bs(65535));f=Dm(GD(b,16),Bs(65535));g=Dm(GD(b,32),Bs(65535));h=Dm(GD(b,48),Bs(65535));i=Dm(c,Bs(65535));j=Dm(GD(c,16),Bs(65535));k=Dm(GD(c,32),Bs(65535));l=Dm(GD(c,48),Bs(65535));return C1(C1(C1(Ih(Cm(l,h),32+d|0),Ih(C1(Cm(l,g),Cm(k,h)),16+d|0)),Ih(C1(C1(Cm(l,f),Cm(k,g)),Cm(j,h)),d)),GD(C1(C1(C1(Cm(k,e),Cm(j,f)),Cm(i,g)),Ih(C1(C1(C1(Cm(l,e),Cm(k,f)),Cm(j,g)),Cm(i,h)),16)),32-d|0));}
function AH3(){Bct=Dl(Bs(-1),Bs(10));Bcu=ALe([D(3251292512, 2194092222),D(1766094183, 3510547556),D(553881887, 2808438045),D(443105509, 2246750436),D(3285949193, 3594800697),D(910772436, 2875840558),D(2446604867, 2300672446),D(2196580869, 3681075914),D(2616258154, 2944860731),D(1234013064, 2355888585),D(1974420903, 3769421736),D(720543263, 3015537389),D(1435428070, 2412429911),D(578697993, 3859887858),D(2180945313, 3087910286),D(885762791, 2470328229),D(3135207384, 3952525166),D(1649172448, 3162020133),D(3037324877, 2529616106),
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
D(3348809418, 2876309015),D(2679047534, 2301047212),D(850502218, 3681675540),D(680401775, 2945340432),D(3121301797, 2356272345),D(699115580, 3770035753),D(2277279382, 3016028602),D(103836587, 2412822882),D(1025131999, 3860516611),D(4256079436, 3088413288),D(827883168, 2470730631),D(3901593088, 3953169009)]);Bcv=A9E([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);}
function AD7(){var a=this;B.call(a);a.wW=null;a.wT=null;a.wU=null;}
function ATm(a,b,c,d){var e,f,g,h;b=a.wW;e=a.wT;f=a.wU;ADt(b,e);if(f!==null)d.nM.e();if(AEk(d)){f=d.fJ;g=e.dl;h=e.gE;W_(b,BJ((f.b-(g*3|0)|0)-h|0,(f.a-g|0)-h|0),d.n$,e,d.u3);}}
function UO(){B.call(this);this.wp=null;}
function ARJ(a,b,c){var d,e;c=a.wp;d=c.d.h;e=b.bs;b=c.fT;AB_(d.E.data[e],0,b);}
function Sj(){var a=this;B.call(a);a.Fg=null;a.vo=0;}
function AZN(a,b){var c,d,e,f;c=a.vo;d=(CP(Jg(b,0))).data;b=Bg();e=d[0];f=new J;L(f);V(H(V(H(f,C(488)),c),C(489)),e);Bc(b,K(f));b=Bg();e=d[1];f=new J;L(f);V(H(V(H(f,C(488)),c),C(490)),e);Bc(b,K(f));}
function Sz(){B.call(this);this.uX=null;}
function A3J(a){var b,c,d;b=a.uX;c=Bg();d=De(b);b=new J;L(b);H(H(b,C(491)),d);Bc(c,K(b));}
function VM(){B.call(this);this.uF=null;}
function AVQ(a,b,c){Ie(B9(a.uF.d.h,b.bs),0,M(c));}
function Yt(){var a=this;B.call(a);a.xX=null;a.xZ=null;}
function A3D(a){var b,c;b=a.xX;c=a.xZ;if(!Gy(b))Iq(b);else I$(b);c.e();}
var K1=G(DX);
var Kg=G(Bu);
var O2=G(Bu);
function AKq(){B.call(this);this.Ur=null;}
function AF3(){B.call(this);this.yF=null;}
function A1v(a,b){var c,d,e,f,g,h,i;c=a.yF;d=BT(b);e=new J;L(e);H(H(e,C(492)),d);$rt_globals.console.info($rt_ustr(K(e)));f=0;while(f<BaA.data.length){g=4080+f|0;h=Bb(g,c.ng.data.length);e=new AGz;e.Bm=c;e.Bn=f;e.Bo=g;d=DG();BG(d);i=new AGC;i.sD=d;ADd(b,e,i,h,c.ng.data.length);f=f+1|0;}}
var AAe=G();
var Bcw=null;function OR(b,c,d){SP(b,c,d,0);}
function SP(b,c,d,e){Zk(b,c,d,null,null,e);}
function Zk(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t;h=MP(c);i=Bd(h);j=Bd(h);k=Bd(h);l=CI(b);c=b.E;if(c.data.length<i)b.E=AHx(c,i);m=0;while(m<i){if(g&&m<l){n=4*Bd(h)|0;h.fC=h.fC+n|0;}else b.E.data[m]=Ej(AAR(h,d,0));m=m+1|0;}NY(b);if(j)b.dC=AJm(AKb(h));Fd(b.ec);Fd(b.d2);o=b.ec;g=0;while(g<k){D5(o,D1(Bd(h),Bd(h)),D1(Bd(h),Bd(h)));g=g+1|0;}p=b.ec;o=b.d2;q=NI(OQ(p));while(FM(q)){r=Pp(q);s=r.cR;p=r.c1;BG(Bcw);r=CC(o,p);if(r===null){r=BO();D5(o,p,r);}BA(r,s);}if(o.p9===null){p=new RB;p.xM=o;o.p9=p;}p=o.p9;r=new ABw;Ow(r,
p.xM);while(FM(r)){OI(r);o=r.hO.c1;p=A_s;c=P(B,o.p);d=c.data;GO(o,c);LF(c,p);g=0;t=d.length;while(g<t){p=d[g];Lb(o,g);o.cu.data[g]=p;g=g+1|0;}}SL(h);if(e!==null&&f!==null){p=AUe(e,f);QT(p);b.fp=A0z(p.qm,p.jt);b.dC=AJm(p.qK);}}
function X8(b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;g=c.data;if(g.length==1&&g[0]==(-1))return;h=MP(c);i=Bd(h);j=Bd(h);k=Bd(h)!=1?0:1;l=Bd(h);m=Bd(h);n=AFB(b,i);o=AFB(b,j);p=(Jl(B9(b,n.b),n.a)).data[0].s;q=(Jl(B9(b,o.b),o.a)).data[1].s;r=0;s=l-1|0;while(r<l){g=AAR(h,d,i);if(!r)g=MI(p,g);if(r==s)g=MI(g,q);t=n.b+r|0;u=Ej(g);c=b.E.data;v=c[t];c[t]=u;if(!k&&HS(v)==HS(u)){t=0;while(t<HS(v)){o=v.s.data[t];w=u.s.data[t];x=o.b7;y=x!=5?0:1;if(!y&&x&&!w.b7){w.b7=x;w.bJ=o.bJ;}t=t+1|0;}}r=r+1|0;}if(k){if(m)
{u=AKb(h);w=Lv(i,j,(-1));Y8(b.dC,w,u);}else if(e!==null&&f!==null){v=AUe(e,f);QT(v);w=Lv(i,j,(-1));Y8(b.dC,w,v.qK);n=b.fp;n.f1=b.dC.dA.cy;n.fw=v.jt;}}SL(h);}
function AAR(b,c,d){var e,f,g,h,i,j,k,l;e=Bd(b);f=P(CB,e);g=f.data;h=0;while(h<e){i=Bd(b);j=Bd(b);k=Bd(b);l=Bd(b);g[h]=Er(ET(c,d+i|0,j-i|0),k,l);h=h+1|0;}return f;}
function ANb(){Bcw=new Xh;}
function PR(){var a=this;B.call(a);a.E1=null;a.E2=null;a.EZ=0;a.E0=0;}
var AA_=G(0);
var Qk=G(0);
var F8=G();
function ACd(){F8.call(this);this.Co=null;}
function OP(a,b){var c,d,e;c=0;while(true){d=a.Co;if(d.kX===null)d.kX=B_(d.zQ);if(!Cd(d.kX))e=0;else{c=b.bI(Ce(d.kX));e=1;}if(!e)return 0;if(!c)break;}return 1;}
var SK=G(0);
var AFS=G();
function APr(a,b){b=b;b.c8=BR(b.c8,null);}
var AIj=G(0);
function ALL(b,c,d,e,f,g){f=f.data;f[JW(0,0)]=G1(g,b,c,d,0);f[JW(0,1)]=G1(g,b,c,d,2);f[JW(1,0)]=G1(g,b,c,e,0);f[JW(1,1)]=G1(g,b,c,e,2);return f[JW(0,0)];}
function J_(){var a=this;Hp.call(a);a.oz=0;a.iU=null;}
var IF=G(Bu);
function AEK(){var a=this;B.call(a);a.Aj=null;a.An=0;a.Am=0;a.Al=null;a.Ak=0;a.Ai=0;}
function A6g(a,b){var c,d,e,f,g,h,i,j;c=a.Aj;d=a.An;e=a.Am;f=a.Al;g=a.Ak;h=a.Ai;i=Cw(c.Z,5.0);d=Bf((c.Z.bH.b-d|0)-i|0,Be((i-d|0)-c.U.k.b|0,b.j.b));j=Bf((c.Z.bH.a-e|0)-i|0,Be((i-e|0)-c.U.k.a|0,b.j.a));Y(f,d+g|0,j+h|0);Ef(c,f,c.Y.k);}
function AHP(){var a=this;F8.call(a);a.Tz=null;a.U9=0;a.Mr=0;a.KH=0;}
function AM8(){var a=this;B.call(a);a.i4=null;a.fC=0;}
function MP(a){var b=new AM8();AYT(b,a);return b;}
function AYT(a,b){a.i4=b;a.fC=0;}
function Bd(a){var b,c;b=a.i4.data;c=a.fC;a.fC=c+1|0;return b[c];}
function SL(a){var b,c,d,e;if(a.fC!=a.i4.data.length){b=DG();c=a.i4.data.length;d=a.fC;e=new J;L(e);H(V(H(V(H(e,C(457)),c),C(493)),d),C(494));Bc(b,K(e));}}
function NO(){var a=this;ED.call(a);a.d9=null;a.g2=null;a.yj=null;a.or=null;a.Bt=null;}
function Bcx(a,b,c){var d=new NO();Vd(d,a,b,c);return d;}
function Vd(a,b,c,d){var e;KI(a,b,c,d);b=new Ws;c=a.M;QZ(b,c.F);d=I6(c);b.iY=d;b.db=G5(d);c=G5(b.iY);b.da=c;O5(b.e5,b.db,c);e=new PQ;e.u_=b;c=b.db;c.iZ=e;b.da.iZ=e;Js(c,0);Js(b.da,0);c=b.db;c.cb=1;b.u$=AJT(c,b.da);Ne(b,I(CH,[b.db,b.da,b.e5]));a.d9=b;AAN(b,a.gP);b=Lc(a,a.d9,30.0);a.g2=b;c=new XQ;c.wj=a;b.i9=c;c=new XP;c.vA=a;b.i5=c;DY(a.M,b);b=a.d9;b.db.l9=a;b.da.l9=a;Cx(a.M.F,a);}
function ZW(a,b){var c;c=a.d9;return c.db!==b&&c.da!==b&&a!==b?0:1;}
function A5M(a,b){Ex(a.g2,b.cc);AAN(a.d9,b);}
function NJ(a,b,c){var d,e;d=!c?a.d9.da:a.d9.db;e=new To;e.Bf=a;e.Be=b;e.Bd=c;Gb(d,b,e);}
function A6R(a){if(ZW(a,a.M.F.b5))Cx(a.M.F,null);a.g2=null;a.d9=null;}
function AZI(a,b){var c,d,e,f,g,h,i,j,k,l;c=a.d9;d=c.db;c=c.da;e=B3(d,b);f=B3(c,b);if(!e&&!f)return CM(I(Bt,[NH(a,1,C(415)),NH(a,0,C(416))]));g=!e?C(416):C(415);if(e)c=d;d=NH(a,e,g);h=a.d9;i=h.iY;j=a.hI;k=new RA;g=h.db;h=h.da;l=i.cj.F;k.mJ=g;k.mI=h;k.zB=l;g=a.M;BG(g);h=new QR;h.ru=g;return NS(JK(i,c,j,a,k,h),b,d);}
function NH(a,b,c){var d,e;d=new Bt;e=new Tf;e.A3=a;e.AO=b;B6(d,e,c);return d;}
function AAn(a,b){var c,d,e;c=a.M;d=c.F.cn;e=new Tc;e.xC=a;e.xB=b;Fm(d,NV(c,e));}
function A6S(a,b){var c,d;if(!AED(b)){if(b.bh!=27)return 0;if(!AAY(b))AGk(a.M);else NB(a.g2);return 1;}c=a.M.F.b5;b=a.d9;d=b.db;if(!(d!==c&&b.da!==c))AAn(a,d!==c?0:1);return 1;}
var XY=G();
function A6e(a){return OD();}
var Rh=G();
function ARK(a){return OD();}
var Yh=G();
function AQl(a){return OD();}
function Qb(){B.call(this);this.xP=null;}
function A70(a,b){var c,d,e,f,g;c=a.xP;d=Bg();e=BT(b);f=new J;L(f);H(H(f,C(495)),e);Bc(d,K(f));d=c.q.cn;e=new R3;g=P(B,1);g.data[0]=b;CG(d,e,C(335),g);}
function VS(){B.call(this);this.Bv=null;}
function A1x(a,b){var c,d,e,f,g;c=a.Bv;d=Bg();e=BT(b);f=new J;L(f);H(H(f,C(496)),e);Bc(d,K(f));e=c.q.cn;d=new ACy;d.Br=c;g=P(B,1);g.data[0]=b;CG(e,d,C(497),g);}
function Qq(){B.call(this);this.Fo=null;}
function AT2(a,b){var c,d,e;c=Bg();d=BT(b);e=new J;L(e);H(H(e,C(498)),d);Bc(c,K(e));d=new AGq;d.DQ=b;c=DG();BG(c);e=new AGo;e.tm=c;P$(b,d,e);}
function AAo(){B.call(this);this.yV=null;}
function AWP(a,b){var c,d,e,f;c=a.yV;d=Bg();e=BT(b);f=new J;L(f);H(H(f,C(499)),e);Bc(d,K(f));d=new AD4;e=new TO;e.zm=c;d.kA=IQ();c=BO();d.eB=c;d.jO=1;d.jw=0;d.sS=e;BA(c,Jh(b));BA(d.eB,b);e=Bg();c=BT(d.kA);f=new J;L(f);H(H(f,C(500)),c);Bc(e,K(f));Ia(b,d);}
function Gm(){var a=this;B.call(a);a.hU=null;a.c5=null;a.f3=null;a.fk=null;a.ig=null;a.l8=null;a.v5=null;}
function A9H(a){var b=new Gm();AIC(b,a);return b;}
function AIC(a,b){a.hU=b;a.c5=BO();a.f3=BO();a.fk=BO();a.l8=BO();a.ig=BO();}
function AF_(a){var b;b=a.hU;if(b!==null)b.c5.r0(a);}
function K_(){var a=this;B.call(a);a.eu=null;a.ky=null;a.j9=0;}
function A9k(a,b,c){var d=new K_();AJa(d,a,b,c);return d;}
function AJa(a,b,c,d){a.eu=b;a.ky=c;a.j9=d;}
function A5U(a){var b,c,d;b=AMG(a.eu);c=a.ky;d=new J;L(d);H(H(H(d,b),C(31)),c);return K(d);}
function AMH(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BV(a.eu,c.eu)&&BV(a.ky,c.ky)&&BV(C6(a.j9),C6(c.j9))?1:0;}return 0;}
function Fr(){var a=this;B.call(a);a.e1=null;a.gl=null;a.BP=0;}
function A8J(a,b,c){var d=new Fr();OG(d,a,b,c);return d;}
function OG(a,b,c,d){a.e1=b;a.gl=c;a.BP=d;}
function AXx(a){var b,c,d;b=BT(a.e1);c=a.gl;d=new J;L(d);H(H(H(d,b),C(31)),c);return K(d);}
function AK5(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BV(a.e1,c.e1)&&BV(a.gl,c.gl)?1:0;}return 0;}
var Io=G(0);
function UQ(){B.call(this);this.Az=null;}
function A3v(a,b,c,d){Lr(a.Az,b,c.bs,d.bs);}
function RY(){var a=this;B.call(a);a.l_=null;a.lz=null;a.sR=0;}
function UR(){B.call(this);this.yx=null;}
function A18(a,b,c,d){Lr(a.yx,b,c.bs,d.bs);}
function Jo(){B.call(this);this.pk=0;}
var Bcy=null;var Bcz=null;var BcA=null;function AVi(a){var b=new Jo();AI2(b,a);return b;}
function AI2(a,b){a.pk=b;}
function ZV(b){return !b?Bcz:Bcy;}
function AK6(){Bcy=AVi(1);Bcz=AVi(0);BcA=F($rt_booleancls());}
var Lt=G(0);
var Ts=G();
var NN=G(0);
var AIk=G();
function TS(){B.call(this);this.ws=null;}
function A36(a,b,c,d){Ks(a.ws,b,c.bs,d.bs);}
var TR=G();
function AXG(a,b){return b.eu.dG>=0?0:1;}
var TQ=G();
function AVG(a,b){var c;a:{b:{b=b;if(b!==null){b=b.e1;if(b===null)break b;if(b.dG>=0)break b;}c=1;break a;}c=0;}return c;}
function TU(){B.call(this);this.Ch=null;}
function A3B(a,b,c,d){Ks(a.Ch,b,c.bs,d.bs);}
function AFI(){var a=this;B.call(a);a.t3=null;a.t4=null;a.t5=null;a.t6=0;a.uc=0;a.ud=0;a.ue=0;a.uf=0;a.t_=0;a.ua=0;a.D$=0;}
function AYz(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;a:{c=a.t3;d=a.t4;e=a.t5;f=a.t6;g=a.uc;h=a.ud;i=a.ue;j=a.uf;k=a.t_;l=a.ua;m=a.D$;n=Cw(c.Z,5.0);o=c.Y.io();Ct(d,c.Y.k);Ct(e,c.Y.i);switch(f){case -1:f=Bf(h+(b.j.b-g|0)|0,c.Z.bH.b-n|0);g=o.b;h=h+i|0;f=Be(g,h-f|0);e.b=h-f|0;d.b=f;break a;case 1:break;default:break a;}d.b=Be((i+b.j.b|0)-g|0,Be(o.b,n-c.U.i.b|0));}b:{switch(j){case -1:f=Be(n,Bf(l+(b.j.a-k|0)|0,(c.Z.bH.a+c.U.k.a|0)-n|0));g=o.a;h=l+m|0;f=Be(g,h-f|0);e.a=h-f|0;d.a=f;break b;case 1:break;default:break b;}d.a
=Be((m+b.j.a|0)-k|0,o.a);}Ef(c,e,d);}
function AGW(){B.call(this);this.R0=null;}
var Xh=G();
var F9=G();
var BcB=null;var BcC=null;var BaO=null;var BcD=null;var BcE=null;var BcF=null;function AME(){BcB=new V2;BcC=new VZ;BaO=new V0;BcD=new VX;BcE=new VY;BcF=new XV;}
function AK2(){var a=this;B.call(a);a.qm=null;a.qK=null;a.jt=null;a.cX=null;a.pM=null;a.n4=null;a.jP=null;a.oJ=null;a.qE=null;}
function AUe(a,b){var c=new AK2();A6N(c,a,b);return c;}
function A6N(a,b,c){a.cX=MP(b);a.pM=c;}
function QT(a){var b,c,d,e,f,g,h,i;b=Bd(a.cX);c=new Ov;RX(c);a.jt=c;a.jP=BO();d=0;while(d<b){e=Bd(a.cX);f=Bd(a.cX);g=ET(a.pM,e,f);D5(a.jt,g,BO());BA(a.jP,g);d=d+1|0;}c=NI(OQ(a.jt));while(FM(c)){GY((Pp(c)).c1,Qe(a));}d=Bd(a.cX);if(d==(-1))a.qm=null;else{a.n4=P(Gm,d);c=new Yi;h=a.cX;i=a.pM;g=a.jP;c.ee=h;c.A0=i;c.Ar=g;a.oJ=c;c=new S4;c.eV=h;c.CP=i;c.C5=g;a.qE=c;a.qm=SQ(a,null);}if(Bd(a.cX)!=(-1))a.qK=ABs(a.cX,a.n4);}
function SQ(a,b){var c,d,e,f,g,h,i,j,k;c=Bd(a.cX);d=Bd(a.cX);e=a.oJ;f=Bd(e.ee);g=BO();h=0;while(h<f){BA(g,PW(e));h=h+1|0;}a:{switch(d){case -1:i=new Ot;i.hU=b;b=BaO;i.c5=b;i.f3=b;i.fk=b;i.l8=b;i.ig=b;break a;case 0:i=A9H(b);break a;case 1:i=new LT;AIC(i,b);GY(i.fk,g);break a;default:}b=new CS;i=new J;L(i);V(H(i,C(501)),d);Bm(b,K(i));N(b);}i.fk=g;b=a.qE;d=Bd(b.eV);e=BO();j=0;while(j<d){BA(e,HT(b));j=j+1|0;}i.f3=e;i.l8=Qe(a);d=Bd(a.cX);b=BO();j=0;while(j<d){e=PW(a.oJ);g=HT(a.qE);f=Bd(a.cX);k=new RY;k.l_=e;k.lz
=g;k.sR=f;BA(b,k);j=j+1|0;}i.ig=b;j=Bd(a.cX);i.v5=j==(-1)?null:BK(a.jP,j);d=Bd(a.cX);b=BO();j=0;while(j<d){BA(b,SQ(a,i));j=j+1|0;}i.c5=b;a.n4.data[c]=i;return i;}
function Qe(a){var b,c,d,e;b=Bd(a.cX);c=BO();d=0;while(d<b){e=Bd(a.cX);BA(c,BK(a.jP,e));d=d+1|0;}return c;}
function Ws(){var a=this;IM.call(a);a.iY=null;a.db=null;a.da=null;a.u$=null;a.nA=null;a.kt=0;}
function AAN(a,b){Gc(a.iY,b);a.e5.iS=b;Fb(a.db,b);Fb(a.da,b);}
function XQ(){B.call(this);this.wj=null;}
function A2r(a){var b;b=a.wj;Cx(b.M.F,b.Bt);}
function XP(){B.call(this);this.vA=null;}
function ATw(a){var b,c;b=a.vA;c=b.M.F.b5;if(!ZW(b,c))c=null;b.Bt=c;}
function AHk(){var a=this;B.call(a);a.mO=null;a.qA=null;}
function AOa(){var a=this;B.call(a);a.Gw=0;a.FN=0;a.sI=0;a.oe=0;}
function AFK(){var a=this;B.call(a);a.tF=null;a.tG=null;}
function AZw(a){var b,c,d,e,f,g;b=a.tF;c=a.tG;if(BV(c.mO,b.d.fL)){c=c.qA;CZ(b,c.oe,c.sI,0);Cj((Bn(b)).bU,c.oe,c.sI);Cj((Bn(b)).bL,c.FN,c.Gw);}else{d=(B5(b.fW.CG)).data;e=d.length;f=0;a:{while(true){if(f>=e){g=null;break a;}g=d[f];if(g!==null)break;f=f+1|0;}}if(g!==null){G7(b);b=new Zq;b.z8=g;b.z9=c;BG(b);c=new Qv;c.v4=b;$rt_globals.setTimeout(Bz(c,"onTimer"),0);}}}
function AFL(){var a=this;B.call(a);a.Dm=null;a.Dl=null;}
function A2f(a){Jp(a.Dm,a.Dl);}
function H_(){Fr.call(this);this.fV=null;}
function A3E(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=My(a.fV);c=new ABt;c.Db=a;d=new SZ;d.un=b;d.sV=c;e=new ADl;e.xR=C(40);f=P(EK,0);g=new Po;g.ot=F(EK);h=F(EK).dn;h.$clinit();g.na=BI((((AUy(h)).data.length-1|0)/32|0)+1|0);BG(f);h=new Qd;h.qp=f;if(h instanceof Po){i=h;if(g.ot===i.ot){j=0;while(true){f=g.na.data;if(j>=f.length)break;k=f[j];l=i.na.data;if((k|l[j])!=f[j])f[j]=f[j]|l[j];j=j+1|0;}break a;}}GY(g,h);}m=new J;L(m);while(true){h=new WW;h.yK=e;h.yL=m;g=d.un;i=new UD;i.s9=d;i.s8=h;if(!OP(g,i))break;}ADS(m,
0,C(22),0,M(C(22)));return K(LK(m,C(22)));}
function KO(){var a=this;Fr.call(a);a.iK=null;a.rF=0;}
function A6_(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AK5(a,b))return 0;c=b;return BV(a.iK,c.iK);}return 0;}
function XM(){var a=this;B.call(a);a.sl=null;a.sj=null;a.si=0;a.sk=0;}
function A3_(a,b){b=b;E_(a.sl,a.sj,b,a.si,a.sk);}
function JV(){var a=this;Fr.call(a);a.iz=null;a.h5=null;}
function AUs(a){var b,c,d;b=a.iz.e1.g9;c=BT(a.h5);d=new J;L(d);b=H(d,b);Bq(b,46);H(b,c);return K(d);}
function AZj(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return BV(a.iz,c.iz)&&BV(a.h5,c.h5)?1:0;}return 0;}
function XN(){var a=this;B.call(a);a.DY=null;a.DX=null;a.DW=0;a.DV=0;}
function ARs(a,b){b=b;E_(a.DY,a.DX,b,a.DW,a.DV);}
function AJ6(){var a=this;B.call(a);a.g9=null;a.dG=0;}
function A1P(a,b){var c=new AJ6();AOl(c,a,b);return c;}
function AOl(a,b,c){a.g9=b;a.dG=c;}
function AUM(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){c=b;return a.dG==c.dG&&BV(a.g9,c.g9)?1:0;}return 0;}
function AMG(a){var b,c,d;b=a.g9;c=a.dG;d=new J;L(d);b=H(d,b);Bq(b,40);Bq(V(b,c),41);return K(d);}
function Xa(){var a=this;B.call(a);a.zO=null;a.zR=null;a.zP=null;}
function AUA(a){ALG(a.zO,a.zR,a.zP);}
var Zy=G();
function AUc(a,b){ANo(b);}
function ACW(){var a=this;B.call(a);a.DT=null;a.DU=null;}
function APo(a){var b,c;b=a.DT;c=a.DU;GJ(b.z.bw,ES(c));}
function XB(){B.call(this);this.tj=null;}
function ARN(a,b){b=b;ABB(a.tj,b);}
var Ot=G(Gm);
var LT=G(Gm);
function PQ(){B.call(this);this.u_=null;}
function A6V(a,b){var c,d,e;c=a.u_;d=c.db;if(d===b)c.kt=c.kt|1;e=c.da;if(e===b)c.kt=c.kt|2;if((c.kt&3)==3){b=d.d.h;d=e.d.h;e=new Zv;e.x3=c;AK1(b,d,e,c.iY.cj.F.cn);}}
function WG(){B.call(this);this.CO=null;}
function AZz(a,b){var c;b=b;c=a.CO;Bv(c.bE,(CC(c.gq,b)).bs);}
function Rg(){B.call(this);this.ry=null;}
function A3u(a,b){b=b;ACk(a.ry,b);}
var Rl=G(0);
var EJ=G(FW);
var N7=G(EJ);
var V2=G(N7);
var ON=G(Et);
var VZ=G(ON);
var O_=G(EH);
function A0Q(a){var b;b=new DX;X(b);N(b);}
function AT7(a,b){var c;c=new DX;X(c);N(c);}
function AS0(a,b){b=new DX;X(b);N(b);}
var V0=G(O_);
function AT_(a,b){var c;c=new BL;X(c);N(c);}
function ATg(a){return 0;}
function AQV(a){return BcD;}
function AO8(a){return 1;}
var VX=G();
function AOR(a){return 0;}
function A4p(a){var b;b=new Nb;X(b);N(b);}
function AWe(a){var b;b=new CS;X(b);N(b);}
var AAc=G(0);
var VY=G();
var XV=G();
function SI(){var a=this;B.call(a);a.nH=0;a.ty=null;}
function A8r(a,b){var c,d,e;c=a.ty;b=b;d=c.tR;e=c.tQ;d=b.b<=d&&e<=b.a?1:0;a.nH=d;return d?0:1;}
function ABu(){var a=this;B.call(a);a.l=null;a.eo=0;a.nI=null;a.r8=0;a.ir=0;a.ge=0;a.bG=0;a.ou=null;}
function NW(a){return a.l.bX;}
function Xx(a,b,c,d){var e,f,g,h,i,j;e=BO();f=a.eo;g=0;if(c!=f)a.eo=c;a:{switch(b){case -1073741784:h=new Tr;c=a.bG+1|0;a.bG=c;GQ(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new R0;c=a.bG+1|0;a.bG=c;GQ(h,c);break a;case -33554392:h=new Uj;c=a.bG+1|0;a.bG=c;GQ(h,c);break a;default:c=a.ir+1|0;a.ir=c;if(d!==null)h=A$B(c);else{h=new Gv;GQ(h,0);g=1;}c=a.ir;if(c<=(-1))break a;if(c>=10)break a;a.nI.data[c]=h;break a;}h=new AGh;GQ(h,(-1));}while(true){if(FG(a.l)&&a.l.m==(-536870788))
{d=A6K(Co(a,2),Co(a,64));while(!DN(a.l)&&FG(a.l)){i=a.l;j=i.m;if(j&&j!=(-536870788)&&j!=(-536870871))break;CR(d,Bp(i));i=a.l;if(i.bo!=(-536870788))continue;Bp(i);}i=L5(a,d);i.X(h);}else if(a.l.bo==(-536870788)){i=Iv(h);Bp(a.l);}else{i=Z1(a,h);d=a.l;if(d.bo==(-536870788))Bp(d);}if(i!==null)BA(e,i);if(DN(a.l))break;if(a.l.bo==(-536870871))break;}if(a.l.nW==(-536870788))BA(e,Iv(h));if(a.eo!=f&&!g){a.eo=f;d=a.l;d.hL=f;d.m=d.bo;d.fM=d.fX;j=d.dP;d.A=j+1|0;d.kd=j;Gd(d);}switch(b){case -1073741784:break;case -536870872:d
=new X_;Gw(d,e,h);return d;case -268435416:d=new AE1;Gw(d,e,h);return d;case -134217688:d=new ABx;Gw(d,e,h);return d;case -67108824:d=new UH;Gw(d,e,h);return d;case -33554392:d=new Em;Gw(d,e,h);return d;default:switch(e.p){case 0:break;case 1:return A$u(BK(e,0),h);default:return A83(e,h);}return Iv(h);}d=new K0;Gw(d,e,h);return d;}
function ANp(a){var b,c,d,e,f,g,h;b=BI(4);c=(-1);d=(-1);if(!DN(a.l)&&FG(a.l)){e=b.data;c=Bp(a.l);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=B7(3);b=e.data;b[0]=c&65535;f=a.l;g=f.bo;h=g-4449|0;if(h>=0&&h<21){b[1]=g&65535;Bp(f);f=a.l;g=f.bo;c=g-4519|0;if(c>=0&&c<28){b[2]=g&65535;Bp(f);return A6y(e,3);}return A6y(e,2);}if(!Co(a,2))return AHy(b[0]);if(Co(a,64))return A43(b[0]);return A0o(b[0]);}e=b.data;c=1;while(c<4&&!DN(a.l)&&FG(a.l)){h=c+1|0;e[c]=Bp(a.l);c=h;}if(c==1){h=e[0];if(!(BcG.FH(h)==BcH?0:1))return Xp(a,e[0]);}if
(!Co(a,2))return A$0(b,c);if(Co(a,64)){f=new Xk;QH(f,b,c);return f;}f=new ADx;QH(f,b,c);return f;}
function Z1(a,b){var c,d,e,f,g,h,i;if(FG(a.l)&&!Lw(a.l)&&N_(a.l.m)){if(Co(a,128)){c=ANp(a);if(!DN(a.l)){d=a.l;e=d.bo;if(!(e==(-536870871)&&!(b instanceof Gv))&&e!=(-536870788)&&!FG(d))c=M1(a,b,c);}}else if(!Zs(a.l)&&!AEr(a.l)){f=new QU;L(f);while(!DN(a.l)&&FG(a.l)&&!Zs(a.l)&&!AEr(a.l)){if(!(!Lw(a.l)&&!a.l.m)&&!(!Lw(a.l)&&N_(a.l.m))){g=a.l.m;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}e=Bp(a.l);if(!MZ(e))Bq(f,e&65535);else Kz(f,GR(e));}if(!Co(a,2)){c=new ABO;Ea(c);c.cC
=K(f);e=f.I;c.bP=e;c.p8=A3X(e);c.ox=A3X(c.bP);h=0;while(h<(c.bP-1|0)){S_(c.p8,Q(c.cC,h),(c.bP-h|0)-1|0);S_(c.ox,Q(c.cC,(c.bP-h|0)-1|0),(c.bP-h|0)-1|0);h=h+1|0;}}else if(Co(a,64))c=A$Z(f);else{c=new Qa;Ea(c);c.ih=K(f);c.bP=f.I;}}else c=M1(a,b,AF4(a,b));}else{d=a.l;if(d.bo!=(-536870871))c=M1(a,b,AF4(a,b));else{if(b instanceof Gv)N(Cp(C(22),d.bX,QS(d)));c=Iv(b);}}a:{if(!DN(a.l)){e=a.l.bo;if(!(e==(-536870871)&&!(b instanceof Gv))&&e!=(-536870788)){f=Z1(a,b);if(c instanceof Dj&&!(c instanceof Gf)&&!(c instanceof C9)
&&!(c instanceof Fq)){i=c;if(!f.b$(i.R)){c=new WS;Fz(c,i.R,i.f,i.kv);c.R.X(c);}}if((f.jy()&65535)!=43)c.X(f);else c.X(f.R);break a;}}if(c===null)return null;c.X(b);}if((c.jy()&65535)!=43)return c;return c.R;}
function M1(a,b,c){var d,e,f,g,h;d=a.l;e=d.bo;if(c!==null&&!(c instanceof Ch)){switch(e){case -2147483606:Bp(d);d=new XW;Dz(d,c,b,e);Pr();c.X(BcI);return d;case -2147483605:Bp(d);d=new AAm;Dz(d,c,b,(-2147483606));Pr();c.X(BcI);return d;case -2147483585:Bp(d);d=new RF;Dz(d,c,b,(-536870849));Pr();c.X(BcI);return d;case -2147483525:f=new P8;d=GM(d);g=a.ge+1|0;a.ge=g;Nl(f,d,c,b,(-536870849),g);Pr();c.X(BcI);return f;case -1073741782:case -1073741781:Bp(d);d=new Tj;Dz(d,c,b,e);c.X(d);return d;case -1073741761:Bp(d);d
=new AA5;Dz(d,c,b,(-536870849));c.X(b);return d;case -1073741701:h=new Vs;d=GM(d);e=a.ge+1|0;a.ge=e;Nl(h,d,c,b,(-536870849),e);c.X(h);return h;case -536870870:case -536870869:Bp(d);if(c.jy()!=(-2147483602)){d=new C9;Dz(d,c,b,e);}else if(Co(a,32)){d=new Tk;Dz(d,c,b,e);}else{d=new ZA;f=Z_(a.eo);Dz(d,c,b,e);d.nV=f;}c.X(d);return d;case -536870849:Bp(d);d=new G8;Dz(d,c,b,(-536870849));c.X(b);return d;case -536870789:h=new GN;d=GM(d);e=a.ge+1|0;a.ge=e;Nl(h,d,c,b,(-536870849),e);c.X(h);return h;default:}return c;}f
=null;if(c!==null)f=c;switch(e){case -2147483606:case -2147483605:Bp(d);d=new AGA;Fz(d,f,b,e);f.f=d;return d;case -2147483585:Bp(d);c=new WM;Fz(c,f,b,(-2147483585));return c;case -2147483525:c=new Z0;TK(c,GM(d),f,b,(-2147483525));return c;case -1073741782:case -1073741781:Bp(d);d=new AA4;Fz(d,f,b,e);f.f=d;return d;case -1073741761:Bp(d);c=new ADI;Fz(c,f,b,(-1073741761));return c;case -1073741701:c=new S$;TK(c,GM(d),f,b,(-1073741701));return c;case -536870870:case -536870869:Bp(d);d=A9h(f,b,e);f.f=d;return d;case -536870849:Bp(d);c
=new Fq;Fz(c,f,b,(-536870849));return c;case -536870789:return A94(GM(d),f,b,(-536870789));default:}return c;}
function AF4(a,b){var c,d,e,f,g,h,i,j;c=null;d=b instanceof Gv;while(true){a:{e=a.l;f=e.bo;if((f&(-2147418113))==(-2147483608)){Bp(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.eo=g;else{if(f!=(-1073741784))g=a.eo;c=Xx(a,f,g,b);e=a.l;if(e.bo!=(-536870871))N(Cp(C(22),e.bX,e.dP));Bp(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:break c;case -2147483583:break;case -2147483582:Bp(e);c
=A6l(0);break a;case -2147483577:Bp(e);c=new Zw;B$(c);break a;case -2147483558:Bp(e);c=new Xg;h=a.bG+1|0;a.bG=h;AND(c,h);break a;case -2147483550:Bp(e);c=A6l(1);break a;case -2147483526:Bp(e);c=new AFm;B$(c);break a;case -536870876:Bp(e);a.bG=a.bG+1|0;if(Co(a,8)){if(Co(a,1)){c=A8V(a.bG);break a;}c=A8B(a.bG);break a;}if(Co(a,1)){c=A88(a.bG);break a;}c=A9r(a.bG);break a;case -536870866:Bp(e);if(Co(a,32)){c=A9y();break a;}c=A9o(Z_(a.eo));break a;case -536870821:Bp(e);i=0;c=a.l;if(c.bo==(-536870818)){i=1;Bp(c);}c
=L5(a,HZ(a,i));c.X(b);e=a.l;if(e.bo!=(-536870819))N(Cp(C(22),e.bX,e.dP));ZP(e,1);Bp(a.l);break a;case -536870818:Bp(e);a.bG=a.bG+1|0;if(!Co(a,8)){c=new LV;B$(c);break a;}c=new YG;e=Z_(a.eo);B$(c);c.A5=e;break a;case 0:j=e.fX;if(j!==null)c=L5(a,j);else{if(DN(e)){c=Iv(b);break a;}c=AHy(f&65535);}Bp(a.l);break a;default:break b;}Bp(e);c=new LV;B$(c);break a;}h=(f&2147483647)-48|0;if(a.ir<h)N(Cp(C(22),Gk(e),QS(a.l)));Bp(e);a.bG=a.bG+1|0;c=!Co(a,2)?A9N(h,a.bG):Co(a,64)?A8W(h,a.bG):A$X(h,a.bG);a.nI.data[h].pV=1;a.r8
=1;break a;}if(f>=0&&!HC(e)){c=Xp(a,f);Bp(a.l);}else if(f==(-536870788))c=Iv(b);else{if(f!=(-536870871)){b=new KP;c=!HC(a.l)?Xc(f&65535):a.l.fX.K();e=a.l;Nu(b,c,e.bX,e.dP);N(b);}if(d){b=new KP;e=a.l;Nu(b,C(22),e.bX,e.dP);N(b);}c=Iv(b);}}}if(f!=(-16777176))break;}return c;}
function HZ(a,b){var c,d,e,f,g,h,i,j,$$je;c=A6K(Co(a,2),Co(a,64));E6(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(DN(a.l))break a;h=a.l;b=h.bo;f=b==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(b){case -536870874:if(d>=0)CR(c,d);d=Bp(a.l);h=a.l;if(h.bo!=(-536870874)){d=38;break d;}if(h.m==(-536870821)){Bp(h);e=1;d=(-1);break d;}Bp(h);if(g){c=HZ(a,0);break d;}if(a.l.bo==(-536870819))break d;W4(c,HZ(a,0));break d;case -536870867:if(!g){b=h.m;if(b!=(-536870819)&&b!=(-536870821)&&d>=0){Bp(h);h=a.l;i=h.bo;if(HC(h))break c;if
(i<0){j=a.l.m;if(j!=(-536870819)&&j!=(-536870821)&&d>=0)break c;}e:{try{if(N_(i))break e;i=i&65535;break e;}catch($$e){$$je=Fe($$e);if($$je instanceof EN){break b;}else{throw $$e;}}}try{Cf(c,d,i);}catch($$e){$$je=Fe($$e);if($$je instanceof EN){break b;}else{throw $$e;}}Bp(a.l);d=(-1);break d;}}if(d>=0)CR(c,d);d=45;Bp(a.l);break d;case -536870821:if(d>=0){CR(c,d);d=(-1);}Bp(a.l);j=0;h=a.l;if(h.bo==(-536870818)){Bp(h);j=1;}if(!e)AKC(c,HZ(a,j));else W4(c,HZ(a,j));e=0;Bp(a.l);break d;case -536870819:if(d>=0)CR(c,
d);d=93;Bp(a.l);break d;case -536870818:if(d>=0)CR(c,d);d=94;Bp(a.l);break d;case 0:if(d>=0)CR(c,d);h=a.l.fX;if(h===null)d=0;else{AN_(c,h);d=(-1);}Bp(a.l);break d;default:}if(d>=0)CR(c,d);d=Bp(a.l);}g=0;}N(Cp(C(22),NW(a),a.l.dP));}N(Cp(C(22),NW(a),a.l.dP));}if(!f){if(d>=0)CR(c,d);return c;}N(Cp(C(22),NW(a),a.l.dP-1|0));}
function Xp(a,b){var c,d,e;c=MZ(b);if(Co(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A0o(b&65535);}if(Co(a,64)&&b>128){if(c){d=new X5;Ea(d);d.bP=2;d.og=Hv(Ht(b));return d;}if(Rj(b))return AUI(b&65535);if(!T7(b))return A43(b&65535);return A2q(b&65535);}}if(!c){if(Rj(b))return AUI(b&65535);if(!T7(b))return AHy(b&65535);return A2q(b&65535);}d=new Eu;Ea(d);d.bP=2;d.hA=b;e=(GR(b)).data;d.kJ=e[0];d.j5=e[1];return d;}
function L5(a,b){var c,d,e;if(!AMA(b)){if(!b.V){if(b.iV())return AR4(b);return AWS(b);}if(!b.iV())return A2L(b);c=new Nm;ADY(c,b);return c;}c=AG0(b);d=new PV;B$(d);d.nZ=c;d.yk=c.bm;if(!b.V){if(b.iV())return AI0(AR4(J6(b)),d);return AI0(AWS(J6(b)),d);}if(!b.iV())return AI0(A2L(J6(b)),d);c=new Sx;e=new Nm;ADY(e,J6(b));AKd(c,e,d);return c;}
function J8(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Co(a,b){return (a.eo&b)!=b?0:1;}
function AE3(){var a=this;B.call(a);a.AB=null;a.AC=null;a.AA=null;}
function AOm(a,b){var c,d,e,f,g;c=a.AB;d=a.AC;e=a.AA;f=new AF$;g=AEf(EG(d));ANU(f,b,null,g);It(c,f);e.e();}
function AE2(){B.call(this);this.y3=null;}
function AW3(a,b){Bc(a.y3,b);}
function ACc(){B.call(this);this.zn=null;}
function AX$(a,b){L6(a.zn,b);}
function Z9(){B.call(this);this.AW=null;}
function A4q(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.data;b=a.AW;d=CP(c[0]);e=(CP(c[1])).data[0];if(!ADG(b.h)){c=b.h;if(c.cE==e){e=b.rv;f=MP(d);Fd(c.ec);Fd(c.d2);NY(c);while(f.fC>=f.i4.data.length?0:1){if(Bd(f)==(-1))continue;g=Xw(c,Bd(f));h=O$(B9(c,g.bt),g.by);if(Bd(f)==(-1)){if(!e)continue;h.b7=0;h.bJ=h.bJ|4;continue;}i=Xw(c,Bd(f));j=Bd(f);k=Bd(f);D5(c.ec,g,i);l=c.d2;m=BO();if(CC(l,i)===null)D5(l,i,m);BA(CC(c.d2,i),g);h.b7=j;h.bJ=k;}Ju(b);if(b.Gy){n=Km(EO(),b.CY);if(A8K(n,Bs(100))){b=Fk(b);c=new J;L(c);H(Id(H(H(c,
b),C(502)),n),C(209));$rt_globals.console.info($rt_ustr(K(c)));}}}}}
function ACs(){var a=this;B.call(a);a.rO=null;a.rP=null;}
function AZx(a){var b,c;b=a.rO;c=a.rP;Cx(b.cj.F,c);AC$(b);}
function Sh(){var a=this;B.call(a);a.zQ=null;a.kX=null;}
function S1(){B.call(this);this.Af=null;}
function ARL(a,b){var c,d;c=a.Af;c.lc=b;H3(c.H,b.q_);H3(c.L,c.lc.ra);b=c.no;d=c.lc;b.hw=d;c.gr.eR=d;}
var AG1=G();
function AHn(b){var c,d,e,f,g,h,i,j;c=AZ8();d=CI(b);Bv(c,d);e=0;f=0;while(f<d){g=B9(b,f);h=HS(g);Bv(c,h);i=0;while(i<h){j=Il(g,i);Hu(c,e,JM(j));e=e+JM(j)|0;i=i+1|0;}e=e+1|0;f=f+1|0;}return R$(c);}
function AG7(b){var c,d,e,f,g,h,i,j,k;c=Bd(b);d=P(Ii,c);e=d.data;f=0;while(f<c){a:{g=Bd(b);if(g!=(-1)){h=Bd(b);i=Bd(b);if(i==(-1))e[g]=A0S(h);else{j=new Ii;j.fI=h;j.oB=BI(i);e[g]=j;k=0;while(true){if(k>=i)break a;e[g].oB.data[k]=Bd(b);k=k+1|0;}}}}f=f+1|0;}return d;}
function AK1(b,c,d,e){var f,g,h,i;f=Fv(b);g=Fv(c);h=AHn(b);i=AHn(c);b=new AEl;b.AV=d;CG(e,b,C(503),I(B,[f,h,g,i]));}
var IZ=G(0);
function QF(){var a=this;B.call(a);a.l6=0;a.Ef=null;}
function A4Y(a,b){var c,d;c=BT(b);d=new J;L(d);H(H(d,C(504)),c);$rt_globals.console.info($rt_ustr(K(d)));a.l6=a.l6+1|0;Ia(b,a);}
function A2c(a,b){var c;b=BT(b);c=new J;L(c);H(H(c,C(505)),b);$rt_globals.console.info($rt_ustr(K(c)));}
function AWj(a){var b;b=a.l6-1|0;a.l6=b;if(!b)Bc(Bg(),C(506));}
function Zh(){var a=this;B.call(a);a.Gm=null;a.zp=null;}
function ARA(a,b){var c,d,e,f;c=b.data;b=a.zp;d=Bg();b=BT(b);e=new J;L(e);H(H(e,C(507)),b);Bc(d,K(e));b=Bg();f=c.length;d=new J;L(d);V(H(d,C(508)),f);Bc(b,K(d));}
function Zj(){B.call(this);this.Gu=null;}
function A5l(a,b){$rt_globals.console.info($rt_ustr(b));}
function AEs(){var a=this;B.call(a);a.HA=null;a.ln=null;}
function AQ$(a,b){var c;c=a.ln;b=b;a.ln=ZV(!c.pk&&!b.fb?0:1);return 1;}
function ADQ(){var a=this;B.call(a);a.wn=null;a.wo=null;}
function A6i(a){var b,c;b=a.wn;c=a.wo;GJ(b.z.bw,ES(c));}
function Rz(){EJ.call(this);this.jY=null;}
function T1(a){var b;b=new ACD;Ow(b,a.jY);return b;}
function Vo(){EJ.call(this);this.AP=null;}
function NI(a){var b;b=new Vf;Ow(b,a.AP);return b;}
function RB(){FW.call(this);this.xM=null;}
function Sd(){var a=this;B.call(a);a.uO=null;a.uN=null;}
function A3h(a){var b,c;b=a.uO;c=ES(a.uN);C0(b.im,c);}
function XX(){B.call(this);this.xw=null;}
function A1k(a,b){b=b;Qc(a.xw,b);}
function VK(){B.call(this);this.v$=null;}
function A27(a,b){b=b;HF(a.v$,b);}
function MY(){var a=this;K_.call(a);a.lI=null;a.ye=0;}
function AZW(a,b){var c;if(a===b)return 1;if(b!==null&&BF(a)===BF(b)){if(!AMH(a,b))return 0;c=b;return BV(a.lI,c.lI);}return 0;}
function Tc(){var a=this;B.call(a);a.xC=null;a.xB=0;}
function A3l(a,b){NJ(a.xC,b,a.xB);}
function AEl(){B.call(this);this.AV=null;}
function A2Z(a,b){var c,d,e,f,g,h,i,j;c=b.data;b=a.AV;d=CP(c[0]);c=MP(d);e=new VQ;d=AG7(c);f=AG7(c);g=Bd(c);h=P(JL,g);i=h.data;j=0;while(j<g){i[j]=Ed(Bd(c),Bd(c),Bd(c),Bd(c),Bd(c));j=j+1|0;}AIw(e,d,f,h);b.g(e);}
function Yi(){var a=this;B.call(a);a.ee=null;a.A0=null;a.Ar=null;}
function PW(a){var b,c,d,e,f,g,h,i;a:{b=Bd(a.ee);switch(b){case 3:break;case 5:c=QK(a);d=OW(a);b=Bd(a.ee);e=Bd(a.ee);f=Bd(a.ee);g=BO();h=0;while(h<f){BA(g,OW(a));h=h+1|0;}i=new MY;AJa(i,c,d,b);i.lI=g;i.ye=e;break a;default:c=new CS;d=new J;L(d);V(H(d,C(509)),b);Bm(c,K(d));N(c);}i=A9k(QK(a),OW(a),Bd(a.ee));}return i;}
function QK(a){var b,c;b=Bd(a.ee);c=Bd(a.ee);return A1P(ET(a.A0,b,c),Bd(a.ee));}
function OW(a){var b;b=Bd(a.ee);if(b==(-1))return null;return BK(a.Ar,b);}
function S4(){var a=this;B.call(a);a.eV=null;a.CP=null;a.C5=null;}
function HT(a){var b,c,d,e,f;a:{b:{b=Bd(a.eV);switch(b){case -1:break;case 0:case 1:case 2:case 6:case 7:case 8:break b;case 3:c=YL(a);d=R4(a);b=Bd(a.eV);e=T4(a);f=new KO;OG(f,c,d,2);f.rF=b;f.iK=e;break a;case 4:c=HT(a);d=HT(a);f=new JV;OG(f,c.e1,c.gl,9);f.iz=c;f.h5=d;break a;case 5:f=A8J(YL(a),R4(a),Bd(a.eV));break a;case 9:c=T4(a);f=new H_;d=!EU(c)&&BK(c,0)!==null?(BK(c,0)).gl:null;OG(f,null,null,7);f.fV=BO();c=B_(c);while(Cd(c)){e=Ce(c);if(!(e instanceof H_))BA(f.fV,e);else{e=e;GY(f.fV,e.fV);}}f.gl=d;break a;default:break b;}f
=null;break a;}c=new CS;d=new J;L(d);V(H(d,C(510)),b);Bm(c,K(d));N(c);}return f;}
function YL(a){var b,c;b=Bd(a.eV);c=Bd(a.eV);return A1P(ET(a.CP,b,c),Bd(a.eV));}
function R4(a){var b;b=Bd(a.eV);if(b==(-1))return null;return BK(a.C5,b);}
function T4(a){var b,c,d;b=Bd(a.eV);c=BO();d=0;while(d<b){BA(c,HT(a));d=d+1|0;}return c;}
function BX(){var a=this;B.call(a);a.f=null;a.cO=0;a.p4=null;a.kv=0;}
var A_z=0;function B$(a){var b;b=A_z;A_z=b+1|0;a.p4=Iu(b);}
function Oq(a,b){var c;c=A_z;A_z=c+1|0;a.p4=Iu(c);a.f=b;}
function I_(a,b,c,d){var e;e=d.B;while(true){if(b>e)return (-1);if(a.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function Ji(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A0B(a,b){a.kv=b;}
function AZ9(a){return a.kv;}
function AIE(a){var b,c,d;b=a.p4;c=a.t();d=new J;L(d);Bq(d,60);b=H(d,b);Bq(b,58);Bq(H(b,c),62);return K(d);}
function AV0(a){return AIE(a);}
function AWn(a){return a.f;}
function AW6(a,b){a.f=b;}
function A6C(a,b){return 1;}
function A7v(a){return null;}
function K9(a){var b;a.cO=1;b=a.f;if(b!==null){if(!b.cO){b=b.hb();if(b!==null){a.f.cO=1;a.f=b;}a.f.ff();}else if(b instanceof Ij&&b.fj.pV)a.f=b.f;}}
function AKm(){A_z=1;}
function Wy(){var a=this;B.call(a);a.zg=null;a.zf=0.0;}
function Ob(a,b){return L4(a.zg,b,a.zf*2.0+0.875);}
function AGz(){var a=this;B.call(a);a.Bm=null;a.Bn=0;a.Bo=0;}
function A47(a,b){var c,d,e,f,g,h,i;c=b.data;d=a.Bm;e=a.Bn;f=a.Bo;g=PP(b);d.lj.data[e]=g;d.oG.data[e]=c.length;h=BaA.data;if(h[f-4080|0]!=g)d.jj=d.jj+1|0;else d.l$=d.l$+1|0;if((d.l$+d.jj|0)==h.length){e=0;while(e<d.lj.data.length){b=Bg();f=4080+e|0;i=AGr(d.lj.data[e]);g=d.oG.data[e];c=new J;L(c);Bq(c,91);V(H(H(H(V(c,f),C(511)),i),C(512)),g);Bc(b,K(c));e=e+1|0;}if(!d.jj)Bc(Bg(),C(513));else{b=Bg();e=d.l$;c=new J;L(c);V(H(c,C(514)),e);Bc(b,K(c));b=Bg();e=d.jj;d=new J;L(d);V(H(d,C(515)),e);Bc(b,K(d));}}}
function AGC(){B.call(this);this.sD=null;}
function A6w(a,b){Bc(a.sD,b);}
var R3=G();
function A2n(a,b){ANo(b);}
function ACy(){B.call(this);this.Br=null;}
function AS1(a,b){Uh(a.Br,b);}
function AGq(){B.call(this);this.DQ=null;}
function A53(a,b){var c;c=a.DQ;AK0(Oh(c),c,b);}
function AGo(){B.call(this);this.tm=null;}
function AQc(a,b){Bc(a.tm,b);}
function AD4(){var a=this;B.call(a);a.sS=null;a.kA=null;a.eB=null;a.jO=0;a.jw=0;}
function A5Z(a,b){var c,d,e,f,g;if(a.kA!==IQ()){b=new Bu;X(b);N(b);}BA(a.eB,Jh(b));BA(a.eB,b);c=Bg();d=a.jw;a.jw=d+1|0;e=BT(b);f=a.eB.p;g=new J;L(g);V(H(H(H(V(H(g,C(516)),d),C(286)),e),C(517)),f);Bc(c,K(g));a.jO=a.jO+1|0;Ia(b,a);}
function AUv(a,b){var c,d,e,f;if(a.kA!==IQ()){b=new Bu;X(b);N(b);}BA(a.eB,Oh(b));BA(a.eB,b);c=Bg();d=a.jw;a.jw=d+1|0;b=BT(b);e=a.eB.p;f=new J;L(f);V(H(H(H(V(H(f,C(518)),d),C(286)),b),C(517)),e);Bc(c,K(f));}
function A0Z(a){var b,c,d,e,f,g;if(a.kA!==IQ()){b=new Bu;X(b);N(b);}c=a.jO-1|0;a.jO=c;if(!c){b=Bg();c=a.eB.p;d=new J;L(d);V(H(d,C(519)),c);Bc(b,K(d));b=a.eB;d=a.sS;e=P(B,b.p);f=e.data;c=0;g=f.length;while(c<g){f[c]=BK(b,c);c=c+1|0;}Uh(d.zm,e);}}
function TO(){B.call(this);this.zm=null;}
function Yv(){B.call(this);this.sb=null;}
function A26(a,b){b=b;PH(a.sb,b);}
function XL(){B.call(this);this.yS=null;}
function A8p(a,b){b=b;HF(a.yS,b);}
function C8(){var a=this;BX.call(a);a.pV=0;a.eL=0;}
var BcI=null;function Pr(){Pr=Bl(C8);A1m();}
function A$B(a){var b=new C8();GQ(b,a);return b;}
function GQ(a,b){Pr();B$(a);a.eL=b;}
function APn(a,b,c,d){var e,f;e=JG(d,a.eL);NG(d,a.eL,b);f=a.f.c(b,c,d);if(f<0)NG(d,a.eL,e);return f;}
function A3i(a){return a.eL;}
function AR9(a){return C(520);}
function APF(a,b){return 0;}
function A1m(){var b;b=new Zt;B$(b);BcI=b;}
function Hx(){var a=this;B.call(a);a.bk=null;a.hL=0;a.fP=0;a.wV=0;a.nW=0;a.bo=0;a.m=0;a.Bs=0;a.fX=null;a.fM=null;a.A=0;a.kH=0;a.dP=0;a.kd=0;a.bX=null;}
var BcJ=null;var BcG=null;var BcH=0;function ZP(a,b){if(b>0&&b<3)a.fP=b;if(b==1){a.m=a.bo;a.fM=a.fX;a.A=a.kd;a.kd=a.dP;Gd(a);}}
function HC(a){return a.fX===null?0:1;}
function Lw(a){return a.fM===null?0:1;}
function Bp(a){Gd(a);return a.nW;}
function GM(a){var b;b=a.fX;Gd(a);return b;}
function Gd(a){var b,c,d,e,f,g,h,$$je;a.nW=a.bo;a.bo=a.m;a.fX=a.fM;a.dP=a.kd;a.kd=a.A;while(true){b=0;c=a.A>=a.bk.data.length?0:MD(a);a.m=c;a.fM=null;if(a.fP==4){if(c!=92)return;c=a.A;d=a.bk.data;c=c>=d.length?0:d[Cb(a)];a.m=c;switch(c){case 69:break;default:a.m=92;a.A=a.kH;return;}a.fP=a.wV;a.m=a.A>(a.bk.data.length-2|0)?0:MD(a);}a:{c=a.m;if(c!=92){e=a.fP;if(e==1)switch(c){case 36:a.m=(-536870876);break a;case 40:if(a.bk.data[a.A]!=63){a.m=(-2147483608);break a;}Cb(a);c=a.bk.data[a.A];e=0;while(true){b:{if
(e){e=0;switch(c){case 33:break;case 61:a.m=(-134217688);Cb(a);break b;default:N(Cp(C(22),Gk(a),a.A));}a.m=(-67108824);Cb(a);}else{switch(c){case 33:break;case 60:Cb(a);c=a.bk.data[a.A];e=1;break b;case 61:a.m=(-536870872);Cb(a);break b;case 62:a.m=(-33554392);Cb(a);break b;default:f=AN9(a);a.m=f;if(f<256){a.hL=f;f=f<<16;a.m=f;a.m=(-1073741784)|f;break b;}f=f&255;a.m=f;a.hL=f;f=f<<16;a.m=f;a.m=(-16777176)|f;break b;}a.m=(-268435416);Cb(a);}}if(!e)break;}break a;case 41:a.m=(-536870871);break a;case 42:case 43:case 63:e
=a.A;d=a.bk.data;switch(e>=d.length?42:d[e]){case 43:a.m=c|(-2147483648);Cb(a);break a;case 63:a.m=c|(-1073741824);Cb(a);break a;default:}a.m=c|(-536870912);break a;case 46:a.m=(-536870866);break a;case 91:a.m=(-536870821);ZP(a,2);break a;case 93:if(e!=2)break a;a.m=(-536870819);break a;case 94:a.m=(-536870818);break a;case 123:a.fM=AJS(a,c);break a;case 124:a.m=(-536870788);break a;default:}else if(e==2)switch(c){case 38:a.m=(-536870874);break a;case 45:a.m=(-536870867);break a;case 91:a.m=(-536870821);break a;case 93:a.m
=(-536870819);break a;case 94:a.m=(-536870818);break a;default:}}else{c=a.A>=(a.bk.data.length-2|0)?(-1):MD(a);c:{a.m=c;switch(c){case -1:N(Cp(C(22),Gk(a),a.A));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.m
=AIQ(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.fP!=1)break a;a.m=(-2147483648)|c;break a;case 65:a.m=(-2147483583);break a;case 66:a.m=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:N(Cp(C(22),Gk(a),a.A));case 68:case 83:case 87:case 100:case 115:case 119:a.fM=TF(ET(a.bk,
a.kH,1),0);a.m=0;break a;case 71:a.m=(-2147483577);break a;case 80:case 112:break c;case 81:a.wV=a.fP;a.fP=4;b=1;break a;case 90:a.m=(-2147483558);break a;case 97:a.m=7;break a;case 98:a.m=(-2147483550);break a;case 99:c=a.A;d=a.bk.data;if(c>=(d.length-2|0))N(Cp(C(22),Gk(a),a.A));a.m=d[Cb(a)]&31;break a;case 101:a.m=27;break a;case 102:a.m=12;break a;case 110:a.m=10;break a;case 114:a.m=13;break a;case 116:a.m=9;break a;case 117:a.m=AAq(a,4);break a;case 120:a.m=AAq(a,2);break a;case 122:a.m=(-2147483526);break a;default:}break a;}g
=AMI(a);h=0;if(a.m==80)h=1;try{a.fM=TF(g,h);}catch($$e){$$je=Fe($$e);if($$je instanceof Np){N(Cp(C(22),Gk(a),a.A));}else{throw $$e;}}a.m=0;}}if(b)continue;else break;}}
function AMI(a){var b,c,d,e,f,g;b=new J;Ge(b,10);c=a.A;d=a.bk;e=d.data;if(c<(e.length-2|0)){if(e[c]!=123){b=ET(d,Cb(a),1);f=new J;L(f);H(H(f,C(521)),b);return K(f);}Cb(a);c=0;a:{while(true){g=a.A;d=a.bk.data;if(g>=(d.length-2|0))break;c=d[Cb(a)];if(c==125)break a;Bq(b,c);}}if(c!=125)N(Cp(C(22),a.bX,a.A));}if(!b.I)N(Cp(C(22),a.bX,a.A));f=K(b);if(M(f)==1){b=new J;L(b);H(H(b,C(521)),f);return K(b);}b:{c:{if(M(f)>3){if(Of(f,C(521)))break c;if(Of(f,C(522)))break c;}break b;}f=DD(f,2);}return f;}
function AJS(a,b){var c,d,e,f,g,$$je;c=new J;Ge(c,4);d=(-1);e=2147483647;a:{while(true){f=a.A;g=a.bk.data;if(f>=g.length)break a;b=g[Cb(a)];if(b==125)break a;if(b==44&&d<0)try{d=Lp(Es(c),10);AJZ(c,0,AK7(c));continue;}catch($$e){$$je=Fe($$e);if($$je instanceof DA){break;}else{throw $$e;}}Bq(c,b&65535);}N(Cp(C(22),a.bX,a.A));}if(b!=125)N(Cp(C(22),a.bX,a.A));if(c.I>0)b:{try{e=Lp(Es(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Fe($$e);if($$je instanceof DA){}else{throw $$e;}}N(Cp(C(22),a.bX,a.A));}else if
(d<0)N(Cp(C(22),a.bX,a.A));if((d|e|(e-d|0))<0)N(Cp(C(22),a.bX,a.A));b=a.A;g=a.bk.data;f=b>=g.length?42:g[b];c:{switch(f){case 43:a.m=(-2147483525);Cb(a);break c;case 63:a.m=(-1073741701);Cb(a);break c;default:}a.m=(-536870789);}c=new Yo;c.gb=d;c.f_=e;return c;}
function Gk(a){return a.bX;}
function DN(a){return !a.bo&&!a.m&&a.A==a.Bs&&!HC(a)?1:0;}
function N_(b){return b<0?0:1;}
function FG(a){return !DN(a)&&!HC(a)&&N_(a.bo)?1:0;}
function Zs(a){var b;b=a.bo;return b<=56319&&b>=55296?1:0;}
function AEr(a){var b;b=a.bo;return b<=57343&&b>=56320?1:0;}
function T7(b){return b<=56319&&b>=55296?1:0;}
function Rj(b){return b<=57343&&b>=56320?1:0;}
function AAq(a,b){var c,d,e,f,$$je;c=new J;Ge(c,b);d=a.bk.data.length-2|0;e=0;while(true){f=BQ(e,b);if(f>=0)break;if(a.A>=d)break;Bq(c,a.bk.data[Cb(a)]);e=e+1|0;}if(!f)a:{try{b=Lp(Es(c),16);}catch($$e){$$je=Fe($$e);if($$je instanceof DA){break a;}else{throw $$e;}}return b;}N(Cp(C(22),a.bX,a.A));}
function AIQ(a){var b,c,d,e,f,g;b=3;c=1;d=a.bk.data;e=d.length-2|0;f=AD$(d[a.A],8);switch(f){case -1:break;default:if(f>3)b=2;Cb(a);a:{while(true){if(c>=b)break a;g=a.A;if(g>=e)break a;g=AD$(a.bk.data[g],8);if(g<0)break;f=(f*8|0)+g|0;Cb(a);c=c+1|0;}}return f;}N(Cp(C(22),a.bX,a.A));}
function AN9(a){var b,c,d,e;b=1;c=a.hL;a:while(true){d=a.A;e=a.bk.data;if(d>=e.length)N(Cp(C(22),a.bX,d));b:{c:{switch(e[d]){case 41:Cb(a);return c|256;case 45:if(!b)N(Cp(C(22),a.bX,d));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Cb(a);}Cb(a);return c;}
function Cb(a){var b,c,d,e,f;b=a.A;a.kH=b;if(!(a.hL&4))a.A=b+1|0;else{c=a.bk.data.length-2|0;a.A=b+1|0;a:while(true){d=a.A;if(d<c&&S5(a.bk.data[d])){a.A=a.A+1|0;continue;}d=a.A;if(d>=c)break;e=a.bk.data;if(e[d]!=35)break;a.A=d+1|0;while(true){f=a.A;if(f>=c)continue a;b=e[f];if(b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1)continue a;a.A=f+1|0;}}}return a.kH;}
function ANL(b){return BcJ.Ko(b);}
function MD(a){var b,c,d,e;b=a.bk.data[Cb(a)];if(C2(b)){c=a.kH+1|0;d=a.bk.data;if(c<d.length){e=d[c];if(Dq(e)){Cb(a);return E7(b,e);}}}return b;}
function QS(a){return a.dP;}
function KP(){var a=this;BU.call(a);a.Fq=null;a.E_=null;a.t$=0;}
function Cp(a,b,c){var d=new KP();Nu(d,a,b,c);return d;}
function Nu(a,b,c,d){X(a);a.t$=(-1);a.Fq=b;a.E_=c;a.t$=d;}
function FY(){var a=this;B.call(a);a.Hq=F4;a.GL=F4;a.Ge=null;a.EJ=null;a.Ga=0;a.Hw=null;}
var BcK=null;var BcL=null;var BcM=0;var BcN=0;var BcO=null;function AKi(){AKi=Bl(FY);APq();}
function AVv(b){AKi();if(BcL!==b)BcL=b;BcL.GL=EO();}
function IQ(){AKi();return BcL;}
function APq(){var b,c,d;b=new FY;AKi();c=null;b.Ge=new B;b.Ga=1;b.EJ=C(523);b.Hw=c;d=BcM;BcM=d+1|0;b.Hq=Bs(d);BcK=b;BcL=b;BcM=1;BcN=1;BcO=new TE;}
function Zv(){B.call(this);this.x3=null;}
function AV9(a,b){var c,d;c=a.x3;c.nA=b;H3(c.db,b.q_);H3(c.da,c.nA.ra);b=c.u$;d=c.nA;b.hw=d;c.e5.eR=d;}
var Tr=G(C8);
function AZf(a,b,c,d){var e;e=a.eL;B2(d,e,b-DO(d,e)|0);return a.f.c(b,c,d);}
function A0H(a){return C(524);}
function A5u(a,b){return 0;}
var AGh=G(C8);
function A0y(a,b,c,d){return b;}
function A2B(a){return C(525);}
var R0=G(C8);
function APK(a,b,c,d){if(DO(d,a.eL)!=b)b=(-1);return b;}
function A6u(a){return C(526);}
function Uj(){C8.call(this);this.yD=0;}
function AZi(a,b,c,d){var e;e=a.eL;B2(d,e,b-DO(d,e)|0);a.yD=b;return b;}
function AWp(a){return C(527);}
function A4r(a,b){return 0;}
var Gv=G(C8);
function AXi(a,b,c,d){if(d.mU!=1&&b!=d.B)return (-1);d.ld=1;NG(d,0,b);return b;}
function A0i(a){return C(528);}
function Ch(){BX.call(this);this.bP=0;}
function Ea(a){B$(a);a.bP=1;}
function A75(a,b,c,d){var e;if((b+a.cl()|0)>d.B){d.d$=1;return (-1);}e=a.bF(b,c);if(e<0)return (-1);return a.f.c(b+e|0,c,d);}
function A6a(a){return a.bP;}
function ASG(a,b){return 1;}
var AJF=G(Ch);
function Iv(a){var b=new AJF();A3q(b,a);return b;}
function A3q(a,b){Oq(a,b);a.bP=1;a.kv=1;a.bP=0;}
function A5N(a,b,c){return 0;}
function A1p(a,b,c,d){var e,f,g;e=d.B;f=d.du;while(true){g=BQ(b,e);if(g>0)return (-1);if(g<0&&Dq(Q(c,b))&&b>f&&C2(Q(c,b-1|0))){b=b+1|0;continue;}if(a.f.c(b,c,d)>=0)break;b=b+1|0;}return b;}
function A0v(a,b,c,d,e){var f,g;f=e.B;g=e.du;while(true){if(c<b)return (-1);if(c<f&&Dq(Q(d,c))&&c>g&&C2(Q(d,c-1|0))){c=c+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AR$(a){return C(529);}
function AZh(a,b){return 0;}
function Ca(){var a=this;BX.call(a);a.bR=null;a.fj=null;a.bc=0;}
function A83(a,b){var c=new Ca();Gw(c,a,b);return c;}
function Gw(a,b,c){B$(a);a.bR=b;a.fj=c;a.bc=c.eL;}
function ARR(a,b,c,d){var e,f,g,h;if(a.bR===null)return (-1);e=G0(d,a.bc);D_(d,a.bc,b);f=a.bR.p;g=0;while(true){if(g>=f){D_(d,a.bc,e);return (-1);}h=(BK(a.bR,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AU8(a,b){a.fj.f=b;}
function ASR(a){return C(530);}
function A23(a,b){var c;a:{c=a.bR;if(c!==null){c=B_(c);while(true){if(!Cd(c))break a;if(!(Ce(c)).b$(b))continue;else return 1;}}}return 0;}
function AVC(a,b){return JG(b,a.bc)>=0&&G0(b,a.bc)==JG(b,a.bc)?0:1;}
function AP7(a){var b,c,d,e;a.cO=1;b=a.fj;if(b!==null&&!b.cO)K9(b);a:{b=a.bR;if(b!==null){c=b.p;d=0;while(true){if(d>=c)break a;b=BK(a.bR,d);e=b.hb();if(e===null)e=b;else{b.cO=1;E3(a.bR,d);AMc(a.bR,d,e);}if(!e.cO)e.ff();d=d+1|0;}}}if(a.f!==null)K9(a);}
var K0=G(Ca);
function AUV(a,b,c,d){var e,f,g,h;e=DO(d,a.bc);B2(d,a.bc,b);f=a.bR.p;g=0;while(true){if(g>=f){B2(d,a.bc,e);return (-1);}h=(BK(a.bR,g)).c(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function ATy(a){return C(531);}
function A48(a,b){return !DO(b,a.bc)?0:1;}
var Em=G(K0);
function A0U(a,b,c,d){var e,f,g;e=DO(d,a.bc);B2(d,a.bc,b);f=a.bR.p;g=0;while(g<f){if((BK(a.bR,g)).c(b,c,d)>=0)return a.f.c(a.fj.yD,c,d);g=g+1|0;}B2(d,a.bc,e);return (-1);}
function A4Z(a,b){a.f=b;}
function AOX(a){return C(531);}
var X_=G(Em);
function AU6(a,b,c,d){var e,f;e=a.bR.p;f=0;while(f<e){if((BK(a.bR,f)).c(b,c,d)>=0)return a.f.c(b,c,d);f=f+1|0;}return (-1);}
function AW_(a,b){return 0;}
function A7r(a){return C(532);}
var AE1=G(Em);
function APB(a,b,c,d){var e,f;e=a.bR.p;f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BK(a.bR,f)).c(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A6f(a,b){return 0;}
function ARM(a){return C(533);}
var ABx=G(Em);
function AP5(a,b,c,d){var e,f,g,h;e=a.bR.p;f=d.lg?0:d.du;a:{g=a.f.c(b,c,d);if(g>=0){B2(d,a.bc,b);h=0;while(true){if(h>=e)break a;if((BK(a.bR,h)).cW(f,b,c,d)>=0){B2(d,a.bc,(-1));return g;}h=h+1|0;}}}return (-1);}
function A8l(a,b){return 0;}
function AUK(a){return C(534);}
var UH=G(Em);
function AYV(a,b,c,d){var e,f;e=a.bR.p;B2(d,a.bc,b);f=0;while(true){if(f>=e)return a.f.c(b,c,d);if((BK(a.bR,f)).cW(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A5j(a,b){return 0;}
function APM(a){return C(535);}
function Ij(){Ca.call(this);this.dE=null;}
function A$u(a,b){var c=new Ij();AHw(c,a,b);return c;}
function AHw(a,b,c){B$(a);a.dE=b;a.fj=c;a.bc=c.eL;}
function AOP(a,b,c,d){var e,f;e=G0(d,a.bc);D_(d,a.bc,b);f=a.dE.c(b,c,d);if(f>=0)return f;D_(d,a.bc,e);return (-1);}
function ATE(a,b,c,d){var e;e=a.dE.cF(b,c,d);if(e>=0)D_(d,a.bc,e);return e;}
function A5w(a,b,c,d,e){var f;f=a.dE.cW(b,c,d,e);if(f>=0)D_(e,a.bc,f);return f;}
function A21(a,b){return a.dE.b$(b);}
function A4o(a){var b;b=new P4;AHw(b,a.dE,a.fj);a.f=b;return b;}
function AXM(a){var b;a.cO=1;b=a.fj;if(b!==null&&!b.cO)K9(b);b=a.dE;if(b!==null&&!b.cO){b=b.hb();if(b!==null){a.dE.cO=1;a.dE=b;}a.dE.ff();}}
var Hz=G();
function Ba(){var a=this;Hz.call(a);a.bm=0;a.cN=0;a.S=null;a.m1=null;a.nw=null;a.V=0;}
var BcP=null;function Rc(){Rc=Bl(Ba);AQp();}
function BB(a){var b;Rc();b=new AFF;b.G=BI(64);a.S=b;}
function AZS(a){return null;}
function AZu(a){return a.S;}
function AMA(a){var b,c,d,e,f;if(!a.cN)b=IN(a.S,0)>=2048?0:1;else{a:{c=a.S;b=0;d=c.bA;if(b<d){e=c.G.data;f=(e[0]^(-1))>>>0|0;if(f)b=Jz(f)+b|0;else{b=(d+31|0)/32|0;f=1;while(f<b){if(e[f]!=(-1)){b=(f*32|0)+Jz(e[f]^(-1))|0;break a;}f=f+1|0;}b=d;}}}b=b>=2048?0:1;}return b;}
function A13(a){return a.V;}
function A57(a){return a;}
function AG0(a){var b,c;if(a.nw===null){b=a.gk();c=new WR;c.Hb=a;c.yQ=b;BB(c);a.nw=c;E6(c,a.cN);}return a.nw;}
function J6(a){var b,c;if(a.m1===null){b=a.gk();c=new WO;c.Ft=a;c.CJ=b;c.w1=a;BB(c);a.m1=c;E6(c,a.bm);a.m1.V=a.V;}return a.m1;}
function A7q(a){return 0;}
function E6(a,b){var c;c=a.bm;if(c^b){a.bm=c?0:1;a.cN=a.cN?0:1;}if(!a.V)a.V=1;return a;}
function ARk(a){return a.bm;}
function N8(b,c){Rc();return b.o(c);}
function Ky(b,c){var d,e;Rc();if(b.eh()!==null&&c.eh()!==null){b=b.eh();c=c.eh();d=Bf(b.G.data.length,c.G.data.length);e=0;a:{while(e<d){if(b.G.data[e]&c.G.data[e]){d=1;break a;}e=e+1|0;}d=0;}return d;}return 1;}
function TF(b,c){var d,e,f;Rc();d=0;while(true){AV4();e=BcQ.data;if(d>=e.length){f=new Np;Bm(f,C(22));f.FZ=C(22);f.Hg=b;N(f);}e=e[d].data;if(Bk(b,e[0]))break;d=d+1|0;}return ANi(e[1],c);}
function AQp(){var b;b=new HK;AV4();BcP=b;}
function AHp(){var a=this;Ba.call(a);a.qD=0;a.rX=0;a.is=0;a.of=0;a.eX=0;a.g$=0;a.P=null;a.bM=null;}
function DP(){var a=new AHp();AYl(a);return a;}
function A6K(a,b){var c=new AHp();AQe(c,a,b);return c;}
function AYl(a){BB(a);a.P=A8o();}
function AQe(a,b,c){BB(a);a.P=A8o();a.qD=b;a.rX=c;}
function CR(a,b){a:{if(a.qD){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.eX){Pv(a.P,J8(b&65535));break a;}Mt(a.P,J8(b&65535));break a;}if(a.rX&&b>128){a.is=1;b=Hv(Ht(b));}}}if(!(!T7(b)&&!Rj(b))){if(a.of)Pv(a.S,b-55296|0);else Mt(a.S,b-55296|0);}if(a.eX)Pv(a.P,b);else Mt(a.P,b);if(!a.V&&MZ(b))a.V=1;return a;}
function AN_(a,b){var c,d,e;if(!a.V&&b.V)a.V=1;if(a.of){if(!b.cN)GH(a.S,b.gk());else Dx(a.S,b.gk());}else if(!b.cN)G6(a.S,b.gk());else{GW(a.S,b.gk());Dx(a.S,b.gk());a.cN=a.cN?0:1;a.of=1;}if(!a.g$&&b.eh()!==null){if(a.eX){if(!b.bm)GH(a.P,b.eh());else Dx(a.P,b.eh());}else if(!b.bm)G6(a.P,b.eh());else{GW(a.P,b.eh());Dx(a.P,b.eh());a.bm=a.bm?0:1;a.eX=1;}}else{c=a.bm;d=a.bM;if(d!==null){if(!c){e=new ZJ;e.Gj=a;e.Dr=c;e.wQ=d;e.wI=b;BB(e);a.bM=e;}else{e=new ZK;e.Hv=a;e.uB=c;e.AH=d;e.Ab=b;BB(e);a.bM=e;}}else{if(c&&!a.eX
&&Pl(a.P)){d=new ZG;d.GM=a;d.AM=b;BB(d);a.bM=d;}else if(!c){d=new ZE;d.qc=a;d.pB=c;d.zk=b;BB(d);a.bM=d;}else{d=new ZF;d.oN=a;d.nn=c;d.wM=b;BB(d);a.bM=d;}a.g$=1;}}return a;}
function Cf(a,b,c){var d,e,f,g,h;if(b>c){d=new BU;X(d);N(d);}a:{b:{if(!a.qD){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;CR(a,b);b=b+1|0;}}if(!a.eX)Jm(a.P,b,c+1|0);else{d=a.P;c=c+1|0;if(b>c){d=new BL;X(d);N(d);}e=d.bA;if(b<e){f=Bf(e,c);if(b!=f){g=b/32|0;c=f/32|0;if(g==c){h=d.G.data;h[g]=h[g]&(Kt(d,b)|Je(d,f));}else{h=d.G.data;h[g]=h[g]&Kt(d,b);e=g+1|0;while(e<c){d.G.data[e]=0;e=e+1|0;}if(f&31){h=d.G.data;h[c]=h[c]&Je(d,f);}}HL(d);}}}}return a;}
function AKC(a,b){var c,d,e;if(!a.V&&b.V)a.V=1;if(b.is)a.is=1;c=a.cN;if(!(c^b.cN)){if(!c)G6(a.S,b.S);else Dx(a.S,b.S);}else if(c)GH(a.S,b.S);else{GW(a.S,b.S);Dx(a.S,b.S);a.cN=1;}if(!a.g$&&Da(b)!==null){c=a.bm;if(!(c^b.bm)){if(!c)G6(a.P,Da(b));else Dx(a.P,Da(b));}else if(c)GH(a.P,Da(b));else{GW(a.P,Da(b));Dx(a.P,Da(b));a.bm=1;}}else{c=a.bm;d=a.bM;if(d!==null){if(!c){e=new Q6;e.Ek=a;e.wa=c;e.CU=d;e.w9=b;BB(e);a.bM=e;}else{e=new Ro;e.EA=a;e.Df=c;e.rC=d;e.rZ=b;BB(e);a.bM=e;}}else{if(!a.eX&&Pl(a.P)){if(!c){d=new ZH;d.Hy
=a;d.tx=b;BB(d);a.bM=d;}else{d=new ZI;d.Gn=a;d.C9=b;BB(d);a.bM=d;}}else if(!c){d=new ZL;d.wd=a;d.uM=b;d.AK=c;BB(d);a.bM=d;}else{d=new ZM;d.u9=a;d.vh=b;d.BU=c;BB(d);a.bM=d;}a.g$=1;}}}
function W4(a,b){var c,d,e;if(!a.V&&b.V)a.V=1;if(b.is)a.is=1;c=a.cN;if(!(c^b.cN)){if(!c)Dx(a.S,b.S);else G6(a.S,b.S);}else if(!c)GH(a.S,b.S);else{GW(a.S,b.S);Dx(a.S,b.S);a.cN=0;}if(!a.g$&&Da(b)!==null){c=a.bm;if(!(c^b.bm)){if(!c)Dx(a.P,Da(b));else G6(a.P,Da(b));}else if(!c)GH(a.P,Da(b));else{GW(a.P,Da(b));Dx(a.P,Da(b));a.bm=0;}}else{c=a.bm;d=a.bM;if(d!==null){if(!c){e=new Q8;e.Gi=a;e.Cp=c;e.yP=d;e.uz=b;BB(e);a.bM=e;}else{e=new Q9;e.Go=a;e.B6=c;e.yl=d;e.Cl=b;BB(e);a.bM=e;}}else{if(!a.eX&&Pl(a.P)){if(!c){d=new Q4;d.ED
=a;d.zJ=b;BB(d);a.bM=d;}else{d=new Q5;d.Ht=a;d.tl=b;BB(d);a.bM=d;}}else if(!c){d=new Q$;d.D8=a;d.Dp=b;d.vb=c;BB(d);a.bM=d;}else{d=new Q3;d.va=a;d.B_=b;d.AZ=c;BB(d);a.bM=d;}a.g$=1;}}}
function Dg(a,b){var c;c=a.bM;if(c!==null)return a.bm^c.o(b);return a.bm^D8(a.P,b);}
function Da(a){if(!a.g$)return a.P;return null;}
function A1l(a){return a.S;}
function AWX(a){var b,c;if(a.bM!==null)return a;b=Da(a);c=new Q7;c.F9=a;c.mb=b;BB(c);return E6(c,a.bm);}
function A3H(a){var b,c,d;b=new J;L(b);c=IN(a.P,0);while(c>=0){Kz(b,GR(c));Bq(b,124);c=IN(a.P,c+1|0);}d=b.I;if(d>0)WC(b,d-1|0);return K(b);}
function ARn(a){return a.is;}
function Np(){var a=this;Bu.call(a);a.FZ=null;a.Hg=null;}
function EB(){BX.call(this);this.R=null;}
function Dz(a,b,c,d){Oq(a,c);a.R=b;a.kv=d;}
function A8a(a){return a.R;}
function AWc(a,b){return !a.R.b$(b)&&!a.f.b$(b)?0:1;}
function A6L(a,b){return 1;}
function AT0(a){var b;a.cO=1;b=a.f;if(b!==null&&!b.cO){b=b.hb();if(b!==null){a.f.cO=1;a.f=b;}a.f.ff();}b=a.R;if(b!==null){if(!b.cO){b=b.hb();if(b!==null){a.R.cO=1;a.R=b;}a.R.ff();}else if(b instanceof Ij&&b.fj.pV)a.R=b.f;}}
function Dj(){EB.call(this);this.bj=null;}
function A9h(a,b,c){var d=new Dj();Fz(d,a,b,c);return d;}
function Fz(a,b,c,d){Dz(a,b,c,d);a.bj=b;}
function AYW(a,b,c,d){var e,f;e=0;a:{while((b+a.bj.cl()|0)<=d.B){f=a.bj.bF(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.f.c(b,c,d);if(f>=0)break;b=b-a.bj.cl()|0;e=e+(-1)|0;}return f;}
function A0q(a){return C(536);}
function Gf(){Dj.call(this);this.jv=null;}
function A94(a,b,c,d){var e=new Gf();TK(e,a,b,c,d);return e;}
function TK(a,b,c,d,e){Fz(a,c,d,e);a.jv=b;}
function AZE(a,b,c,d){var e,f,g,h,i;e=a.jv;f=e.gb;g=e.f_;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.bj.cl()|0)>d.B)break a;i=a.bj.bF(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.f.c(b,c,d);if(i>=0)break;b=b-a.bj.cl()|0;h=h+(-1)|0;}return i;}if((b+a.bj.cl()|0)>d.B){d.d$=1;return (-1);}i=a.bj.bF(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
function AZU(a){return ADe(a.jv);}
var C9=G(EB);
function AY$(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.R.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A2l(a){return C(537);}
var Fq=G(Dj);
function A3d(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<0)e=a.f.c(b,c,d);return e;}
function AYy(a,b){a.f=b;a.R.X(b);}
var WS=G(Dj);
function A7Z(a,b,c,d){while((b+a.bj.cl()|0)<=d.B&&a.bj.bF(b,c)>0){b=b+a.bj.cl()|0;}return a.f.c(b,c,d);}
function AUn(a,b,c,d){var e,f,g;e=a.f.cF(b,c,d);if(e<0)return (-1);f=e-a.bj.cl()|0;while(f>=b&&a.bj.bF(f,c)>0){g=f-a.bj.cl()|0;e=f;f=g;}return e;}
var P_=G(0);
var TE=G();
function Bh(){var a=this;B.call(a);a.oP=null;a.n0=null;}
function ANi(a,b){if(!b&&a.oP===null)a.oP=a.J();else if(b&&a.n0===null)a.n0=E6(a.J(),1);if(b)return a.n0;return a.oP;}
var DA=G(BU);
function Yo(){var a=this;Hz.call(a);a.gb=0;a.f_=0;}
function ADe(a){var b,c,d,e,f;b=a.gb;c=a.f_;d=c!=2147483647?Iu(c):C(22);e=new J;L(e);Bq(e,123);f=V(e,b);Bq(f,44);Bq(H(f,d),125);return K(e);}
var Zt=G(BX);
function AS2(a,b,c,d){return b;}
function A4i(a){return C(538);}
function A4m(a,b){return 0;}
function AFF(){var a=this;B.call(a);a.G=null;a.bA=0;}
function A8o(){var a=new AFF();A0j(a);return a;}
function A0j(a){a.G=BI(0);}
function Mt(a,b){var c,d;c=b/32|0;if(b>=a.bA){KA(a,c+1|0);a.bA=b+1|0;}d=a.G.data;d[c]=d[c]|1<<(b%32|0);}
function Jm(a,b,c){var d,e,f,g,h;d=BQ(b,c);if(d>0){e=new BL;X(e);N(e);}if(!d)return;d=b/32|0;f=c/32|0;if(c>a.bA){KA(a,f+1|0);a.bA=c;}if(d==f){g=a.G.data;g[d]=g[d]|Je(a,b)&Kt(a,c);}else{g=a.G.data;g[d]=g[d]|Je(a,b);h=d+1|0;while(h<f){a.G.data[h]=(-1);h=h+1|0;}if(c&31){g=a.G.data;g[f]=g[f]|Kt(a,c);}}}
function Je(a,b){return (-1)<<(b%32|0);}
function Kt(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0)|0;}
function Pv(a,b){var c,d,e,f;c=b/32|0;d=a.G.data;if(c<d.length){e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|((-2)>>>(32-f|0)|0));if(b==(a.bA-1|0))HL(a);}}
function D8(a,b){var c,d;c=b/32|0;d=a.G.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;}
function IN(a,b){var c,d,e,f;c=a.bA;if(b>=c)return (-1);d=b/32|0;e=a.G.data;f=e[d]>>>(b%32|0)|0;if(f)return Jz(f)+b|0;c=(c+31|0)/32|0;f=d+1|0;while(f<c){if(e[f])return (f*32|0)+Jz(e[f])|0;f=f+1|0;}return (-1);}
function KA(a,b){var c;c=a.G.data.length;if(c>=b)return;c=Be((b*3|0)/2|0,(c*2|0)+1|0);a.G=JS(a.G,c);}
function HL(a){var b,c,d;b=(a.bA+31|0)/32|0;a.bA=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Y7(a.G.data[c]);if(d<32)break;c=c+(-1)|0;a.bA=a.bA-32|0;}a.bA=a.bA-d|0;}}
function Dx(a,b){var c,d,e,f;c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&b.G.data[d];d=d+1|0;}while(true){f=a.G.data;if(c>=f.length)break;f[c]=0;c=c+1|0;}a.bA=Bf(a.bA,b.bA);HL(a);}
function GH(a,b){var c,d,e;c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]&(b.G.data[d]^(-1));d=d+1|0;}HL(a);}
function G6(a,b){var c,d,e;c=Be(a.bA,b.bA);a.bA=c;KA(a,(c+31|0)/32|0);c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]|b.G.data[d];d=d+1|0;}}
function GW(a,b){var c,d,e;c=Be(a.bA,b.bA);a.bA=c;KA(a,(c+31|0)/32|0);c=Bf(a.G.data.length,b.G.data.length);d=0;while(d<c){e=a.G.data;e[d]=e[d]^b.G.data[d];d=d+1|0;}HL(a);}
function Pl(a){return a.bA?0:1;}
function PV(){var a=this;Ca.call(a);a.nZ=null;a.yk=0;}
function A4s(a){var b,c,d;b=!a.yk?C(68):C(539);c=a.nZ.K();d=new J;L(d);H(H(H(d,C(540)),b),c);return K(d);}
function Sx(){var a=this;Ca.call(a);a.lD=null;a.mR=null;}
function AI0(a,b){var c=new Sx();AKd(c,a,b);return c;}
function AKd(a,b,c){B$(a);a.lD=b;a.mR=c;}
function APk(a,b,c,d){var e,f,g,h,i;e=a.lD.c(b,c,d);if(e<0)a:{f=a.mR;g=d.du;e=d.B;h=b+1|0;e=BQ(h,e);if(e>0){d.d$=1;e=(-1);}else{i=Q(c,b);if(!f.nZ.o(i))e=(-1);else{if(C2(i)){if(e<0&&Dq(Q(c,h))){e=(-1);break a;}}else if(Dq(i)&&b>g&&C2(Q(c,b-1|0))){e=(-1);break a;}e=f.f.c(h,c,d);}}}if(e>=0)return e;return (-1);}
function A4e(a,b){a.f=b;a.mR.f=b;a.lD.X(b);}
function A4C(a){var b,c,d;b=a.lD;c=a.mR;d=new J;L(d);H(H(H(H(d,C(541)),b),C(542)),c);return K(d);}
function APQ(a,b){return 1;}
function APD(a,b){return 1;}
function Ee(){var a=this;Ca.call(a);a.dJ=null;a.oo=0;}
function A2L(a){var b=new Ee();ADY(b,a);return b;}
function ADY(a,b){B$(a);a.dJ=b.mM();a.oo=b.bm;}
function A1f(a,b,c,d){var e,f,g,h;e=d.B;if(b<e){f=b+1|0;g=Q(c,b);if(a.o(g)){h=a.f.c(f,c,d);if(h>0)return h;}if(f<e){b=f+1|0;f=Q(c,f);if(JZ(g,f)&&a.o(E7(g,f)))return a.f.c(b,c,d);}}return (-1);}
function A7k(a){var b,c,d;b=!a.oo?C(68):C(539);c=a.dJ.K();d=new J;L(d);H(H(H(d,C(540)),b),c);return K(d);}
function ARz(a,b){return a.dJ.o(b);}
function APf(a,b){if(b instanceof Eu)return N8(a.dJ,b.hA);if(b instanceof E1)return N8(a.dJ,b.dH);if(b instanceof Ee)return Ky(a.dJ,b.dJ);if(!(b instanceof EV))return 1;return Ky(a.dJ,b.f7);}
function ASV(a){return a.dJ;}
function A50(a,b){a.f=b;}
function ARd(a,b){return 1;}
var Nm=G(Ee);
function ASH(a,b){return a.dJ.o(Hv(Ht(b)));}
function AXS(a){var b,c,d;b=!a.oo?C(68):C(539);c=a.dJ.K();d=new J;L(d);H(H(H(d,C(543)),b),c);return K(d);}
function AHj(){var a=this;Ch.call(a);a.qj=null;a.tI=0;}
function AR4(a){var b=new AHj();AUB(b,a);return b;}
function AUB(a,b){Ea(a);a.qj=b.mM();a.tI=b.bm;}
function A2O(a,b,c){return !a.qj.o(F6(FJ(Q(c,b))))?(-1):1;}
function AZY(a){var b,c,d;b=!a.tI?C(68):C(539);c=a.qj.K();d=new J;L(d);H(H(H(d,C(543)),b),c);return K(d);}
function EV(){var a=this;Ch.call(a);a.f7=null;a.vk=0;}
function AWS(a){var b=new EV();AVq(b,a);return b;}
function AVq(a,b){Ea(a);a.f7=b.mM();a.vk=b.bm;}
function X0(a,b,c){return !a.f7.o(Q(c,b))?(-1):1;}
function AS6(a){var b,c,d;b=!a.vk?C(68):C(539);c=a.f7.K();d=new J;L(d);H(H(H(d,C(540)),b),c);return K(d);}
function AU$(a,b){if(b instanceof E1)return N8(a.f7,b.dH);if(b instanceof EV)return Ky(a.f7,b.f7);if(!(b instanceof Ee)){if(!(b instanceof Eu))return 1;return 0;}return Ky(a.f7,b.dJ);}
function ZO(){var a=this;Ca.call(a);a.jN=null;a.q1=null;a.ly=0;}
function A6y(a,b){var c=new ZO();AY_(c,a,b);return c;}
function AY_(a,b,c){B$(a);a.jN=b;a.ly=c;}
function ATL(a,b){a.f=b;}
function LN(a){if(a.q1===null)a.q1=GI(a.jN);return a.q1;}
function AV8(a){var b,c;b=LN(a);c=new J;L(c);H(H(c,C(544)),b);return K(c);}
function AOt(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;e=d.B;f=BI(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=Q(c,b);b=j-44032|0;if(b>=0&&b<11172){k=4352+(b/588|0)|0;l=4449+((b%588|0)/28|0)|0;b=b%28|0;m=!b?DK([k,l]):DK([k,l,4519+b|0]);}else m=null;if(m!==null){m=m.data;l=0;b=m.length;n=a.ly;if(b!=n)return (-1);while(true){if(l>=n)return a.f.c(i,c,d);if(m[l]!=a.jN.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=Q(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=Q(c,k);h
=j-4519|0;}if(h>=0&&h<28){a:{b=k+1|0;f[2]=j;if(a.ly==3){k=f[0];m=a.jN.data;if(k==m[0]&&f[1]==m[1]&&f[2]==m[2]){b=a.f.c(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.ly==2){b=f[0];m=a.jN.data;if(b==m[0]&&f[1]==m[1]){b=a.f.c(k,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}
function AZ1(a,b){return b instanceof ZO&&!Bk(LN(b),LN(a))?0:1;}
function AW1(a,b){return 1;}
function E1(){Ch.call(this);this.dH=0;}
function AHy(a){var b=new E1();AVu(b,a);return b;}
function AVu(a,b){Ea(a);a.dH=b;}
function A2D(a){return 1;}
function AR1(a,b,c){return a.dH!=Q(c,b)?(-1):1;}
function AQ1(a,b,c,d){var e,f,g;if(!(c instanceof BC))return I_(a,b,c,d);e=d.B;while(true){if(b>=e)return (-1);f=Kw(c,a.dH,b);if(f<0)return (-1);g=a.f;b=f+1|0;if(g.c(b,c,d)>=0)break;}return f;}
function ASX(a,b,c,d,e){var f;if(!(d instanceof BC))return Ji(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HW(d,a.dH,c);if(f<0)break a;if(f<b)break a;if(a.f.c(f+1|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function AXb(a){var b,c;b=a.dH;c=new J;L(c);Bq(c,b);return K(c);}
function AWT(a,b){if(b instanceof E1)return b.dH!=a.dH?0:1;if(!(b instanceof EV)){if(b instanceof Ee)return b.o(a.dH);if(!(b instanceof Eu))return 1;return 0;}return X0(b,0,Xc(a.dH))<=0?0:1;}
function AJ2(){Ch.call(this);this.pz=0;}
function A43(a){var b=new AJ2();A3A(b,a);return b;}
function A3A(a,b){Ea(a);a.pz=F6(FJ(b));}
function AYJ(a,b,c){return a.pz!=F6(FJ(Q(c,b)))?(-1):1;}
function A4d(a){var b,c;b=a.pz;c=new J;L(c);Bq(H(c,C(545)),b);return K(c);}
function AGE(){var a=this;Ch.call(a);a.pg=0;a.yN=0;}
function A0o(a){var b=new AGE();AV1(b,a);return b;}
function AV1(a,b){Ea(a);a.pg=b;a.yN=J8(b);}
function AOG(a,b,c){return a.pg!=Q(c,b)&&a.yN!=Q(c,b)?(-1):1;}
function ASc(a){var b,c;b=a.pg;c=new J;L(c);Bq(H(c,C(546)),b);return K(c);}
function Gj(){var a=this;Ca.call(a);a.ko=0;a.nS=null;a.nk=null;a.ne=0;}
function A$0(a,b){var c=new Gj();QH(c,a,b);return c;}
function QH(a,b,c){B$(a);a.ko=1;a.nk=b;a.ne=c;}
function A7y(a,b){a.f=b;}
function AUU(a,b,c,d){var e,f,g,h,i,j,k,l;e=BI(4);f=d.B;if(b>=f)return (-1);g=LX(a,b,c,f);h=b+a.ko|0;i=ANL(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;Dc(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=LX(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=(ANL(g)).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.ko|0;if(h>=f){b=k;break a;}g=LX(a,h,c,f);b=k;}}}if(b!=a.ne)return (-1);i=e.data;g=0;while(true){if(g
>=b)return a.f.c(h,c,d);if(i[g]!=a.nk.data[g])break;g=g+1|0;}return (-1);}
function MU(a){var b,c;if(a.nS===null){b=new J;L(b);c=0;while(c<a.ne){Kz(b,GR(a.nk.data[c]));c=c+1|0;}a.nS=K(b);}return a.nS;}
function A37(a){var b,c;b=MU(a);c=new J;L(c);H(H(c,C(547)),b);return K(c);}
function LX(a,b,c,d){var e,f,g;a.ko=1;if(b>=(d-1|0))e=Q(c,b);else{d=b+1|0;e=Q(c,b);f=Q(c,d);if(JZ(e,f)){g=B7(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&C2(g[0])&&Dq(g[1])?E7(g[0],g[1]):g[0];a.ko=2;}}return e;}
function AS3(a,b){return b instanceof Gj&&!Bk(MU(b),MU(a))?0:1;}
function A42(a,b){return 1;}
var Xk=G(Gj);
var ADx=G(Gj);
var XW=G(C9);
function A0D(a,b,c,d){var e;while(true){e=a.R.c(b,c,d);if(e<=0)break;b=e;}return a.f.c(b,c,d);}
var AAm=G(C9);
function A3x(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.R.c(e,c,d);if(b<=e)break;e=b;}b=e;}return a.f.c(b,c,d);}
var G8=G(C9);
function A5X(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.R.c(b,c,d);if(e>=0)return e;return a.f.c(b,c,d);}
function A6Y(a,b){a.f=b;a.R.X(b);}
var RF=G(G8);
function AST(a,b,c,d){var e;e=a.R.c(b,c,d);if(e<=0)e=b;return a.f.c(e,c,d);}
function A3R(a,b){a.f=b;}
function GN(){var a=this;C9.call(a);a.gG=null;a.d_=0;}
function BcR(a,b,c,d,e){var f=new GN();Nl(f,a,b,c,d,e);return f;}
function Nl(a,b,c,d,e,f){Dz(a,c,d,e);a.gG=b;a.d_=f;}
function A8i(a,b,c,d){var e,f;e=Yl(d,a.d_);if(!a.R.O(d))return a.f.c(b,c,d);if(e>=a.gG.f_)return a.f.c(b,c,d);f=a.d_;e=e+1|0;Fa(d,f,e);f=a.R.c(b,c,d);if(f>=0){Fa(d,a.d_,0);return f;}f=a.d_;e=e+(-1)|0;Fa(d,f,e);if(e>=a.gG.gb)return a.f.c(b,c,d);Fa(d,a.d_,0);return (-1);}
function AXo(a){return ADe(a.gG);}
var P8=G(GN);
function ASi(a,b,c,d){var e,f,g;e=0;f=a.gG.f_;a:{while(true){g=a.R.c(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.gG.gb)return (-1);return a.f.c(b,c,d);}
var Tj=G(C9);
function AXT(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e>=0)return e;return a.R.c(b,c,d);}
var AA5=G(G8);
function APR(a,b,c,d){var e;if(!a.R.O(d))return a.f.c(b,c,d);e=a.f.c(b,c,d);if(e<0)e=a.R.c(b,c,d);return e;}
var Vs=G(GN);
function AZn(a,b,c,d){var e,f,g;e=Yl(d,a.d_);if(!a.R.O(d))return a.f.c(b,c,d);f=a.gG;if(e>=f.f_){Fa(d,a.d_,0);return a.f.c(b,c,d);}if(e<f.gb){Fa(d,a.d_,e+1|0);g=a.R.c(b,c,d);}else{g=a.f.c(b,c,d);if(g>=0){Fa(d,a.d_,0);return g;}Fa(d,a.d_,e+1|0);g=a.R.c(b,c,d);}return g;}
var Tk=G(EB);
function A78(a,b,c,d){var e;e=d.B;if(e>b)return a.f.cW(b,e,c,d);return a.f.c(b,c,d);}
function AWB(a,b,c,d){var e;e=d.B;if(a.f.cW(b,e,c,d)>=0)return b;return (-1);}
function A4I(a){return C(548);}
function ZA(){EB.call(this);this.nV=null;}
function AU_(a,b,c,d){var e,f;e=d.B;f=AEd(a,b,e,c);if(f>=0)e=f;if(e>b)return a.f.cW(b,e,c,d);return a.f.c(b,c,d);}
function AOv(a,b,c,d){var e,f,g,h;e=d.B;f=a.f.cF(b,c,d);if(f<0)return (-1);g=AEd(a,f,e,c);if(g>=0)e=g;g=Be(f,a.f.cW(f,e,c,d));if(g<=0)h=g?(-1):0;else{h=g-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.nV.jq(Q(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=g?h:h+1|0;return b;}
function AEd(a,b,c,d){while(true){if(b>=c)return (-1);if(a.nV.jq(Q(d,b)))break;b=b+1|0;}return b;}
function A5q(a){return C(549);}
var FV=G();
var BcS=null;var BcT=null;function Z_(b){var c;if(!(b&1)){c=BcT;if(c!==null)return c;c=new AEy;BcT=c;return c;}c=BcS;if(c!==null)return c;c=new AEx;BcS=c;return c;}
var AGA=G(Dj);
function AO7(a,b,c,d){var e;a:{while(true){if((b+a.bj.cl()|0)>d.B)break a;e=a.bj.bF(b,c);if(e<1)break;b=b+e|0;}}return a.f.c(b,c,d);}
var WM=G(Fq);
function AUb(a,b,c,d){var e;if((b+a.bj.cl()|0)<=d.B){e=a.bj.bF(b,c);if(e>=1)b=b+e|0;}return a.f.c(b,c,d);}
var Z0=G(Gf);
function A5z(a,b,c,d){var e,f,g,h,i;e=a.jv;f=e.gb;g=e.f_;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.bj.cl()|0)>d.B)break a;i=a.bj.bF(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.f.c(b,c,d);}if((b+a.bj.cl()|0)>d.B){d.d$=1;return (-1);}i=a.bj.bF(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);}
var AA4=G(Dj);
function AU7(a,b,c,d){var e;while(true){e=a.f.c(b,c,d);if(e>=0)break;if((b+a.bj.cl()|0)<=d.B){e=a.bj.bF(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
var ADI=G(Fq);
function APe(a,b,c,d){var e;e=a.f.c(b,c,d);if(e>=0)return e;return a.R.c(b,c,d);}
var S$=G(Gf);
function A5P(a,b,c,d){var e,f,g,h,i,j;e=a.jv;f=e.gb;g=e.f_;h=0;while(true){if(h>=f){a:{while(true){i=a.f.c(b,c,d);if(i>=0)break;if((b+a.bj.cl()|0)<=d.B){i=a.bj.bF(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.bj.cl()|0)>d.B){d.d$=1;return (-1);}j=a.bj.bF(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);}
var LV=G(BX);
function A22(a,b,c,d){if(b&&!(d.g_&&b==d.du))return (-1);return a.f.c(b,c,d);}
function A2s(a,b){return 0;}
function AUd(a){return C(550);}
function AHE(){BX.call(this);this.wS=0;}
function A6l(a){var b=new AHE();ASL(b,a);return b;}
function ASL(a,b){B$(a);a.wS=b;}
function AZQ(a,b,c,d){var e,f,g;e=b<d.B?Q(c,b):32;f=!b?32:Q(c,b-1|0);g=d.lg?0:d.du;return (e!=32&&!AA8(a,e,b,g,c)?0:1)^(f!=32&&!AA8(a,f,b-1|0,g,c)?0:1)^a.wS?(-1):a.f.c(b,c,d);}
function AZZ(a,b){return 0;}
function A8g(a){return C(551);}
function AA8(a,b,c,d,e){var f;if(!Lo(b)&&b!=95){a:{if(CO(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=Q(e,c);if(Lo(f))return 0;if(CO(f)!=6)return 1;}}return 1;}return 0;}
var Zw=G(BX);
function ASK(a,b,c,d){if(b!=d.jx)return (-1);return a.f.c(b,c,d);}
function AYn(a,b){return 0;}
function AZG(a){return C(552);}
function Xg(){BX.call(this);this.hN=0;}
function A9r(a){var b=new Xg();AND(b,a);return b;}
function AND(a,b){B$(a);a.hN=b;}
function A4M(a,b,c,d){var e,f,g;e=!d.g_?M(c):d.B;if(b>=e){B2(d,a.hN,0);return a.f.c(b,c,d);}f=e-b|0;if(f==2&&Q(c,b)==13&&Q(c,b+1|0)==10){B2(d,a.hN,0);return a.f.c(b,c,d);}a:{if(f==1){g=Q(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}B2(d,a.hN,0);return a.f.c(b,c,d);}
function A0w(a,b){var c;c=!DO(b,a.hN)?0:1;B2(b,a.hN,(-1));return c;}
function A3f(a){return C(553);}
var AFm=G(BX);
function A4c(a,b,c,d){if(b<(d.lg?M(c):d.B))return (-1);d.d$=1;d.G7=1;return a.f.c(b,c,d);}
function AYI(a,b){return 0;}
function ARQ(a){return C(554);}
function YG(){BX.call(this);this.A5=null;}
function A0s(a,b,c,d){a:{if(b!=d.B){if(!b)break a;if(d.g_&&b==d.du)break a;if(a.A5.B9(Q(c,b-1|0),Q(c,b)))break a;}return (-1);}return a.f.c(b,c,d);}
function ARH(a,b){return 0;}
function AZA(a){return C(555);}
var AJO=G(Ca);
function A9y(){var a=new AJO();A32(a);return a;}
function A32(a){B$(a);}
function AXW(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;if(f>e){d.d$=1;return (-1);}g=Q(c,b);if(C2(g)){h=b+2|0;if(h<=e&&JZ(g,Q(c,f)))return a.f.c(h,c,d);}return a.f.c(f,c,d);}
function AQF(a){return C(556);}
function AZ3(a,b){a.f=b;}
function A3Z(a){return (-2147483602);}
function AZ2(a,b){return 1;}
function AHo(){Ca.call(this);this.ol=null;}
function A9o(a){var b=new AHo();AP9(b,a);return b;}
function AP9(a,b){B$(a);a.ol=b;}
function A38(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;if(f>e){d.d$=1;return (-1);}g=Q(c,b);if(C2(g)){b=b+2|0;if(b<=e){h=Q(c,f);if(JZ(g,h))return a.ol.jq(E7(g,h))?(-1):a.f.c(b,c,d);}}return a.ol.jq(g)?(-1):a.f.c(f,c,d);}
function A0C(a){return C(69);}
function A5p(a,b){a.f=b;}
function AOf(a){return (-2147483602);}
function AYb(a,b){return 1;}
function ANJ(){BX.call(this);this.kg=0;}
function A88(a){var b=new ANJ();A1J(b,a);return b;}
function A1J(a,b){B$(a);a.kg=b;}
function AS5(a,b,c,d){var e;e=!d.g_?M(c):d.B;if(b>=e){B2(d,a.kg,0);return a.f.c(b,c,d);}if((e-b|0)==1&&Q(c,b)==10){B2(d,a.kg,1);return a.f.c(b+1|0,c,d);}return (-1);}
function A1I(a,b){var c;c=!DO(b,a.kg)?0:1;B2(b,a.kg,(-1));return c;}
function ATo(a){return C(553);}
function AMD(){BX.call(this);this.je=0;}
function A8V(a){var b=new AMD();A14(b,a);return b;}
function A14(a,b){B$(a);a.je=b;}
function AUN(a,b,c,d){if((!d.g_?M(c)-b|0:d.B-b|0)<=0){B2(d,a.je,0);return a.f.c(b,c,d);}if(Q(c,b)!=10)return (-1);B2(d,a.je,1);return a.f.c(b+1|0,c,d);}
function A1B(a,b){var c;c=!DO(b,a.je)?0:1;B2(b,a.je,(-1));return c;}
function AOV(a){return C(557);}
function AKB(){BX.call(this);this.hn=0;}
function A8B(a){var b=new AKB();A8k(b,a);return b;}
function A8k(a,b){B$(a);a.hn=b;}
function A2o(a,b,c,d){var e,f,g;e=!d.g_?M(c)-b|0:d.B-b|0;if(!e){B2(d,a.hn,0);return a.f.c(b,c,d);}if(e<2){f=Q(c,b);g=97;}else{f=Q(c,b);g=Q(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:B2(d,a.hn,0);return a.f.c(b,c,d);case 13:if(g!=10){B2(d,a.hn,0);return a.f.c(b,c,d);}B2(d,a.hn,0);return a.f.c(b,c,d);default:}return (-1);}
function AQb(a,b){var c;c=!DO(b,a.hn)?0:1;B2(b,a.hn,(-1));return c;}
function ARI(a){return C(558);}
function IH(){var a=this;Ca.call(a);a.rS=0;a.h3=0;}
function A$X(a,b){var c=new IH();Ri(c,a,b);return c;}
function Ri(a,b,c){B$(a);a.rS=b;a.h3=c;}
function AO$(a,b,c,d){var e,f,g,h;e=Hg(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=0;while(true){if(f>=M(e)){B2(d,a.h3,M(e));return a.f.c(b+M(e)|0,c,d);}g=Q(e,f);h=b+f|0;if(g!=Q(c,h)&&J8(Q(e,f))!=Q(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A4W(a,b){a.f=b;}
function Hg(a,b){var c,d;c=a.rS;d=G0(b,c);c=JG(b,c);return (c|d|(c-d|0))>=0&&c<=M(b.op)?Cz(b.op,d,c):null;}
function AZg(a){var b,c;b=a.bc;c=new J;L(c);V(H(c,C(559)),b);return K(c);}
function AVU(a,b){var c;c=!DO(b,a.h3)?0:1;B2(b,a.h3,(-1));return c;}
var ANP=G(IH);
function A9N(a,b){var c=new ANP();A6O(c,a,b);return c;}
function A6O(a,b,c){Ri(a,b,c);}
function AQg(a,b,c,d){var e,f;e=Hg(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=!ADX(c,e,b)?(-1):M(e);if(f<0)return (-1);B2(d,a.h3,f);return a.f.c(b+f|0,c,d);}return (-1);}
function AW9(a,b,c,d){var e,f;e=Hg(a,d);f=d.du;if(e!==null&&(b+M(e)|0)<=f){while(true){if(b>f)return (-1);b=AAp(c,e,b);if(b<0)return (-1);if(a.f.c(b+M(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function AOW(a,b,c,d,e){var f,g;f=Hg(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=R1(d,f,c);if(g<0)break a;if(g<b)break a;if(a.f.c(g+M(f)|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A3s(a,b){return 1;}
function A6X(a){var b,c;b=a.bc;c=new J;L(c);V(H(c,C(560)),b);return K(c);}
function ALW(){IH.call(this);this.Em=0;}
function A8W(a,b){var c=new ALW();ARE(c,a,b);return c;}
function ARE(a,b,c){Ri(a,b,c);}
function ATz(a,b,c,d){var e,f;e=Hg(a,d);if(e!==null&&(b+M(e)|0)<=d.B){f=0;while(true){if(f>=M(e)){B2(d,a.h3,M(e));return a.f.c(b+M(e)|0,c,d);}if(F6(FJ(Q(e,f)))!=F6(FJ(Q(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AZ0(a){var b,c;b=a.Em;c=new J;L(c);V(H(c,C(561)),b);return K(c);}
var QU=G(Hk);
function ARq(a,b,c,d,e){Yr(a,b,c,d,e);return a;}
function AZT(a,b,c,d){AFP(a,b,c,d);return a;}
function A0h(a,b){NF(a,b);}
function A5_(a,b,c){AF7(a,b,c);return a;}
function ABO(){var a=this;Ch.call(a);a.cC=null;a.p8=null;a.ox=null;}
function AQx(a,b,c){return !LU(a,c,b)?(-1):a.bP;}
function AZO(a,b,c,d){var e,f,g;e=d.B;while(true){if(b>e)return (-1);f=Q(a.cC,a.bP-1|0);a:{while(true){g=a.bP;if(b>(e-g|0)){b=(-1);break a;}g=Q(c,(b+g|0)-1|0);if(g==f&&LU(a,c,b))break;b=b+ACt(a.p8,g)|0;}}if(b<0)return (-1);if(a.f.c(b+a.bP|0,c,d)>=0)break;b=b+1|0;}return b;}
function A1M(a,b,c,d,e){var f,g;while(true){if(c<b)return (-1);f=Q(a.cC,0);g=(M(d)-c|0)-a.bP|0;if(g<=0)c=c+g|0;a:{while(true){if(c<b){c=(-1);break a;}g=Q(d,c);if(g==f&&LU(a,d,c))break;c=c-ACt(a.ox,g)|0;}}if(c<0)return (-1);if(a.f.c(c+a.bP|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AU2(a){var b,c;b=a.cC;c=new J;L(c);H(H(c,C(562)),b);return K(c);}
function AR7(a,b){var c;if(b instanceof E1)return b.dH!=Q(a.cC,0)?0:1;if(b instanceof EV)return X0(b,0,Cz(a.cC,0,1))<=0?0:1;if(!(b instanceof Ee)){if(!(b instanceof Eu))return 1;return M(a.cC)>1&&b.hA==E7(Q(a.cC,0),Q(a.cC,1))?1:0;}a:{b:{b=b;if(!b.o(Q(a.cC,0))){if(M(a.cC)<=1)break b;if(!b.o(E7(Q(a.cC,0),Q(a.cC,1))))break b;}c=1;break a;}c=0;}return c;}
function LU(a,b,c){var d;d=0;while(d<a.bP){if(Q(b,d+c|0)!=Q(a.cC,d))return 0;d=d+1|0;}return 1;}
function AGD(){Ch.call(this);this.kj=null;}
function A$Z(a){var b=new AGD();A6q(b,a);return b;}
function A6q(a,b){var c,d,e;Ea(a);c=new J;L(c);d=0;while(true){e=BQ(d,b.I);if(e>=0){a.kj=K(c);a.bP=c.I;return;}if(d<0)break;if(e>=0)break;Bq(c,F6(FJ(b.D.data[d])));d=d+1|0;}b=new BL;X(b);N(b);}
function ATF(a,b,c){var d;d=0;while(true){if(d>=M(a.kj))return M(a.kj);if(Q(a.kj,d)!=F6(FJ(Q(c,b+d|0))))break;d=d+1|0;}return (-1);}
function ASd(a){var b,c;b=a.kj;c=new J;L(c);H(H(c,C(563)),b);return K(c);}
function Qa(){Ch.call(this);this.ih=null;}
function A5A(a,b,c){var d,e,f;d=0;while(true){if(d>=M(a.ih))return M(a.ih);e=Q(a.ih,d);f=b+d|0;if(e!=Q(c,f)&&J8(Q(a.ih,d))!=Q(c,f))break;d=d+1|0;}return (-1);}
function A6t(a){var b,c;b=a.ih;c=new J;L(c);H(H(c,C(564)),b);return K(c);}
var HK=G();
var BcU=null;var BcV=null;var BcQ=null;function AV4(){AV4=Bl(HK);AQP();}
function AQP(){BcU=A9u();BcV=A$f();BcQ=I($rt_arraycls(B),[I(B,[C(565),A9B()]),I(B,[C(566),A8z()]),I(B,[C(567),A$J()]),I(B,[C(568),A$O()]),I(B,[C(569),BcV]),I(B,[C(570),A$m()]),I(B,[C(571),A80()]),I(B,[C(572),A9P()]),I(B,[C(573),A9M()]),I(B,[C(574),A8G()]),I(B,[C(575),A8N()]),I(B,[C(576),A9S()]),I(B,[C(577),A9g()]),I(B,[C(578),A8v()]),I(B,[C(579),A$M()]),I(B,[C(580),A8M()]),I(B,[C(581),A$k()]),I(B,[C(582),A93()]),I(B,[C(583),A$l()]),I(B,[C(584),A8I()]),I(B,[C(585),A$R()]),I(B,[C(586),A9V()]),I(B,[C(587),A8$()]),
I(B,[C(588),A$H()]),I(B,[C(589),A$E()]),I(B,[C(590),A9v()]),I(B,[C(591),A8H()]),I(B,[C(592),A$y()]),I(B,[C(593),BcU]),I(B,[C(594),A9b()]),I(B,[C(595),A9R()]),I(B,[C(596),BcU]),I(B,[C(597),A8t()]),I(B,[C(598),BcV]),I(B,[C(599),A8R()]),I(B,[C(600),R(0,127)]),I(B,[C(601),R(128,255)]),I(B,[C(602),R(256,383)]),I(B,[C(603),R(384,591)]),I(B,[C(604),R(592,687)]),I(B,[C(605),R(688,767)]),I(B,[C(606),R(768,879)]),I(B,[C(607),R(880,1023)]),I(B,[C(608),R(1024,1279)]),I(B,[C(609),R(1280,1327)]),I(B,[C(610),R(1328,1423)]),
I(B,[C(611),R(1424,1535)]),I(B,[C(612),R(1536,1791)]),I(B,[C(613),R(1792,1871)]),I(B,[C(614),R(1872,1919)]),I(B,[C(615),R(1920,1983)]),I(B,[C(616),R(2304,2431)]),I(B,[C(617),R(2432,2559)]),I(B,[C(618),R(2560,2687)]),I(B,[C(619),R(2688,2815)]),I(B,[C(620),R(2816,2943)]),I(B,[C(621),R(2944,3071)]),I(B,[C(622),R(3072,3199)]),I(B,[C(623),R(3200,3327)]),I(B,[C(624),R(3328,3455)]),I(B,[C(625),R(3456,3583)]),I(B,[C(626),R(3584,3711)]),I(B,[C(627),R(3712,3839)]),I(B,[C(628),R(3840,4095)]),I(B,[C(629),R(4096,4255)]),
I(B,[C(630),R(4256,4351)]),I(B,[C(631),R(4352,4607)]),I(B,[C(632),R(4608,4991)]),I(B,[C(633),R(4992,5023)]),I(B,[C(634),R(5024,5119)]),I(B,[C(635),R(5120,5759)]),I(B,[C(636),R(5760,5791)]),I(B,[C(637),R(5792,5887)]),I(B,[C(638),R(5888,5919)]),I(B,[C(639),R(5920,5951)]),I(B,[C(640),R(5952,5983)]),I(B,[C(641),R(5984,6015)]),I(B,[C(642),R(6016,6143)]),I(B,[C(643),R(6144,6319)]),I(B,[C(644),R(6400,6479)]),I(B,[C(645),R(6480,6527)]),I(B,[C(646),R(6528,6623)]),I(B,[C(647),R(6624,6655)]),I(B,[C(648),R(6656,6687)]),
I(B,[C(649),R(7424,7551)]),I(B,[C(650),R(7552,7615)]),I(B,[C(651),R(7616,7679)]),I(B,[C(652),R(7680,7935)]),I(B,[C(653),R(7936,8191)]),I(B,[C(654),R(8192,8303)]),I(B,[C(655),R(8304,8351)]),I(B,[C(656),R(8352,8399)]),I(B,[C(657),R(8400,8447)]),I(B,[C(658),R(8448,8527)]),I(B,[C(659),R(8528,8591)]),I(B,[C(660),R(8592,8703)]),I(B,[C(661),R(8704,8959)]),I(B,[C(662),R(8960,9215)]),I(B,[C(663),R(9216,9279)]),I(B,[C(664),R(9280,9311)]),I(B,[C(665),R(9312,9471)]),I(B,[C(666),R(9472,9599)]),I(B,[C(667),R(9600,9631)]),
I(B,[C(668),R(9632,9727)]),I(B,[C(669),R(9728,9983)]),I(B,[C(670),R(9984,10175)]),I(B,[C(671),R(10176,10223)]),I(B,[C(672),R(10224,10239)]),I(B,[C(673),R(10240,10495)]),I(B,[C(674),R(10496,10623)]),I(B,[C(675),R(10624,10751)]),I(B,[C(676),R(10752,11007)]),I(B,[C(677),R(11008,11263)]),I(B,[C(678),R(11264,11359)]),I(B,[C(679),R(11392,11519)]),I(B,[C(680),R(11520,11567)]),I(B,[C(681),R(11568,11647)]),I(B,[C(682),R(11648,11743)]),I(B,[C(683),R(11776,11903)]),I(B,[C(684),R(11904,12031)]),I(B,[C(685),R(12032,12255)]),
I(B,[C(686),R(12272,12287)]),I(B,[C(687),R(12288,12351)]),I(B,[C(688),R(12352,12447)]),I(B,[C(689),R(12448,12543)]),I(B,[C(690),R(12544,12591)]),I(B,[C(691),R(12592,12687)]),I(B,[C(692),R(12688,12703)]),I(B,[C(693),R(12704,12735)]),I(B,[C(694),R(12736,12783)]),I(B,[C(695),R(12784,12799)]),I(B,[C(696),R(12800,13055)]),I(B,[C(697),R(13056,13311)]),I(B,[C(698),R(13312,19893)]),I(B,[C(699),R(19904,19967)]),I(B,[C(700),R(19968,40959)]),I(B,[C(701),R(40960,42127)]),I(B,[C(702),R(42128,42191)]),I(B,[C(703),R(42752,
42783)]),I(B,[C(704),R(43008,43055)]),I(B,[C(705),R(44032,55203)]),I(B,[C(706),R(55296,56191)]),I(B,[C(707),R(56192,56319)]),I(B,[C(708),R(56320,57343)]),I(B,[C(709),R(57344,63743)]),I(B,[C(710),R(63744,64255)]),I(B,[C(711),R(64256,64335)]),I(B,[C(712),R(64336,65023)]),I(B,[C(713),R(65024,65039)]),I(B,[C(714),R(65040,65055)]),I(B,[C(715),R(65056,65071)]),I(B,[C(716),R(65072,65103)]),I(B,[C(717),R(65104,65135)]),I(B,[C(718),R(65136,65279)]),I(B,[C(719),R(65280,65519)]),I(B,[C(720),R(0,1114111)]),I(B,[C(721),
A9T()]),I(B,[C(722),B8(0,1)]),I(B,[C(723),KQ(62,1)]),I(B,[C(724),B8(1,1)]),I(B,[C(725),B8(2,1)]),I(B,[C(726),B8(3,0)]),I(B,[C(727),B8(4,0)]),I(B,[C(728),B8(5,1)]),I(B,[C(729),KQ(448,1)]),I(B,[C(730),B8(6,1)]),I(B,[C(731),B8(7,0)]),I(B,[C(732),B8(8,1)]),I(B,[C(733),KQ(3584,1)]),I(B,[C(734),B8(9,1)]),I(B,[C(735),B8(10,1)]),I(B,[C(736),B8(11,1)]),I(B,[C(737),KQ(28672,0)]),I(B,[C(738),B8(12,0)]),I(B,[C(739),B8(13,0)]),I(B,[C(740),B8(14,0)]),I(B,[C(741),A$c(983040,1,1)]),I(B,[C(742),B8(15,0)]),I(B,[C(743),B8(16,
1)]),I(B,[C(744),B8(18,1)]),I(B,[C(745),A87(19,0,1)]),I(B,[C(746),KQ(1643118592,1)]),I(B,[C(747),B8(20,0)]),I(B,[C(748),B8(21,0)]),I(B,[C(749),B8(22,0)]),I(B,[C(750),B8(23,0)]),I(B,[C(751),B8(24,1)]),I(B,[C(752),KQ(2113929216,1)]),I(B,[C(753),B8(25,1)]),I(B,[C(754),B8(26,0)]),I(B,[C(755),B8(27,0)]),I(B,[C(756),B8(28,1)]),I(B,[C(757),B8(29,0)]),I(B,[C(758),B8(30,0)])]);}
function X5(){Ch.call(this);this.og=0;}
function AWi(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.og!=Hv(Ht(E7(e,d)))?(-1):2;}
function A8f(a){var b,c;b=GI(GR(a.og));c=new J;L(c);H(H(c,C(545)),b);return K(c);}
function Oz(){Ca.call(this);this.gR=0;}
function AUI(a){var b=new Oz();APU(b,a);return b;}
function APU(a,b){B$(a);a.gR=b;}
function A4j(a,b){a.f=b;}
function A0x(a,b,c,d){var e,f;e=b+1|0;if(e>d.B){d.d$=1;return (-1);}f=Q(c,b);if(b>d.du&&C2(Q(c,b-1|0)))return (-1);if(a.gR!=f)return (-1);return a.f.c(e,c,d);}
function AR5(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return I_(a,b,c,d);e=d.du;f=d.B;while(true){if(b>=f)return (-1);g=Kw(c,a.gR,b);if(g<0)return (-1);if(g>e&&C2(Q(c,g-1|0))){b=g+1|0;continue;}h=a.f;b=g+1|0;if(h.c(b,c,d)>=0)break;}return g;}
function A0X(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Ji(a,b,c,d,e);f=e.du;a:{while(true){if(c<b)return (-1);g=HW(d,a.gR,c);if(g<0)break a;if(g<b)break a;if(g>f&&C2(Q(d,g-1|0))){c=g+(-2)|0;continue;}if(a.f.c(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AWE(a){var b,c;b=a.gR;c=new J;L(c);Bq(c,b);return K(c);}
function AOT(a,b){if(b instanceof E1)return 0;if(b instanceof EV)return 0;if(b instanceof Ee)return 0;if(b instanceof Eu)return 0;if(b instanceof OH)return 0;if(!(b instanceof Oz))return 1;return b.gR!=a.gR?0:1;}
function AWK(a,b){return 1;}
function OH(){Ca.call(this);this.gA=0;}
function A2q(a){var b=new OH();AUL(b,a);return b;}
function AUL(a,b){B$(a);a.gA=b;}
function A0g(a,b){a.f=b;}
function AOA(a,b,c,d){var e,f,g,h;e=d.B;f=b+1|0;g=BQ(f,e);if(g>0){d.d$=1;return (-1);}h=Q(c,b);if(g<0&&Dq(Q(c,f)))return (-1);if(a.gA!=h)return (-1);return a.f.c(f,c,d);}
function A4w(a,b,c,d){var e,f;if(!(c instanceof BC))return I_(a,b,c,d);e=d.B;while(true){if(b>=e)return (-1);f=Kw(c,a.gA,b);if(f<0)return (-1);b=f+1|0;if(b<e&&Dq(Q(c,b))){b=f+2|0;continue;}if(a.f.c(b,c,d)>=0)break;}return f;}
function AWd(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Ji(a,b,c,d,e);f=e.B;a:{while(true){if(c<b)return (-1);g=HW(d,a.gA,c);if(g<0)break a;if(g<b)break a;c=g+1|0;if(c<f&&Dq(Q(d,c))){c=g+(-1)|0;continue;}if(a.f.c(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function A7J(a){var b,c;b=a.gA;c=new J;L(c);Bq(c,b);return K(c);}
function AQz(a,b){if(b instanceof E1)return 0;if(b instanceof EV)return 0;if(b instanceof Ee)return 0;if(b instanceof Eu)return 0;if(b instanceof Oz)return 0;if(!(b instanceof OH))return 1;return b.gA!=a.gA?0:1;}
function A4E(a,b){return 1;}
function Eu(){var a=this;Ch.call(a);a.kJ=0;a.j5=0;a.hA=0;}
function A4$(a,b,c){var d,e;d=b+1|0;e=Q(c,b);d=Q(c,d);return a.kJ==e&&a.j5==d?2:(-1);}
function A3I(a,b,c,d){var e,f;if(!(c instanceof BC))return I_(a,b,c,d);e=d.B;while(b<e){b=Kw(c,a.kJ,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;f=Q(c,b);if(a.j5==f&&a.f.c(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function APV(a,b,c,d,e){var f;if(!(d instanceof BC))return Ji(a,b,c,d,e);a:{while(true){if(c<b)return (-1);f=HW(d,a.j5,c)+(-1)|0;if(f<0)break a;if(f<b)break a;if(a.kJ==Q(d,f)&&a.f.c(f+2|0,d,e)>=0)break;c=f+(-1)|0;}return f;}return (-1);}
function A6Z(a){var b,c,d;b=a.kJ;c=a.j5;d=new J;L(d);Bq(d,b);Bq(d,c);return K(d);}
function A44(a,b){if(b instanceof Eu)return b.hA!=a.hA?0:1;if(b instanceof Ee)return b.o(a.hA);if(b instanceof E1)return 0;if(!(b instanceof EV))return 1;return 0;}
var AEx=G(FV);
function AP0(a,b){return b!=10?0:1;}
function AVP(a,b,c){return b!=10?0:1;}
var AEy=G(FV);
function A5Q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AXH(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AJc(){var a=this;B.call(a);a.pp=null;a.nm=null;a.jZ=0;a.xQ=0;}
function A3X(a){var b=new AJc();ASJ(b,a);return b;}
function ASJ(a,b){var c,d;while(true){c=a.jZ;if(b<c)break;a.jZ=c<<1|1;}d=c<<1|1;a.jZ=d;d=d+1|0;a.pp=BI(d);a.nm=BI(d);a.xQ=b;}
function S_(a,b,c){var d,e,f,g;d=0;e=a.jZ;f=b&e;while(true){g=a.pp.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.nm.data[f]=c;}
function ACt(a,b){var c,d,e,f;c=a.jZ;d=b&c;e=0;while(true){f=a.pp.data[d];if(!f)break;if(f==b)return a.nm.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.xQ;}
var AGT=G();
var Ox=G(Bh);
function A9u(){var a=new Ox();ASj(a);return a;}
function ASj(a){}
function AL4(a){return CR(Cf(DP(),9,13),32);}
var NX=G(Bh);
function A$f(){var a=new NX();AWF(a);return a;}
function AWF(a){}
function AMz(a){return Cf(DP(),48,57);}
var AI9=G(Bh);
function A9B(){var a=new AI9();ARS(a);return a;}
function ARS(a){}
function A5t(a){return Cf(DP(),97,122);}
var AJr=G(Bh);
function A8z(){var a=new AJr();ASN(a);return a;}
function ASN(a){}
function AWN(a){return Cf(DP(),65,90);}
var AJt=G(Bh);
function A$J(){var a=new AJt();APw(a);return a;}
function APw(a){}
function AQ6(a){return Cf(DP(),0,127);}
var Os=G(Bh);
function A$O(){var a=new Os();AQi(a);return a;}
function AQi(a){}
function AHr(a){return Cf(Cf(DP(),97,122),65,90);}
var Mr=G(Os);
function A$m(){var a=new Mr();ASt(a);return a;}
function ASt(a){}
function AHU(a){return Cf(AHr(a),48,57);}
var AKs=G(Bh);
function A80(){var a=new AKs();A3y(a);return a;}
function A3y(a){}
function A15(a){return Cf(Cf(Cf(DP(),33,64),91,96),123,126);}
var Py=G(Mr);
function A9P(){var a=new Py();AVB(a);return a;}
function AVB(a){}
function AKz(a){return Cf(Cf(Cf(AHU(a),33,64),91,96),123,126);}
var AMf=G(Py);
function A9M(){var a=new AMf();AWA(a);return a;}
function AWA(a){}
function AT3(a){return CR(AKz(a),32);}
var AIn=G(Bh);
function A8G(){var a=new AIn();A5B(a);return a;}
function A5B(a){}
function A0M(a){return CR(CR(DP(),32),9);}
var AHA=G(Bh);
function A8N(){var a=new AHA();A7d(a);return a;}
function A7d(a){}
function ATY(a){return CR(Cf(DP(),0,31),127);}
var ALr=G(Bh);
function A9S(){var a=new ALr();APG(a);return a;}
function APG(a){}
function AXK(a){return Cf(Cf(Cf(DP(),48,57),97,102),65,70);}
var ANu=G(Bh);
function A9g(){var a=new ANu();AZD(a);return a;}
function AZD(a){}
function A3V(a){var b;b=new ACZ;b.GI=a;BB(b);b.V=1;return b;}
var AKv=G(Bh);
function A8v(){var a=new AKv();AVL(a);return a;}
function AVL(a){}
function AYN(a){var b;b=new Yc;b.GN=a;BB(b);b.V=1;return b;}
var ANa=G(Bh);
function A$M(){var a=new ANa();APy(a);return a;}
function APy(a){}
function ASp(a){var b;b=new TA;b.Gx=a;BB(b);return b;}
var AI1=G(Bh);
function A8M(){var a=new AI1();ATZ(a);return a;}
function ATZ(a){}
function AVZ(a){var b;b=new Tz;b.EG=a;BB(b);return b;}
var AJG=G(Bh);
function A$k(){var a=new AJG();AQf(a);return a;}
function AQf(a){}
function A0K(a){var b;b=new W6;b.FI=a;BB(b);Jm(b.S,0,2048);b.V=1;return b;}
var AG5=G(Bh);
function A93(){var a=new AG5();APY(a);return a;}
function APY(a){}
function AQK(a){var b;b=new ZY;b.GY=a;BB(b);b.V=1;return b;}
var AKI=G(Bh);
function A$l(){var a=new AKI();ATD(a);return a;}
function ATD(a){}
function A7h(a){var b;b=new QQ;b.F1=a;BB(b);b.V=1;return b;}
var ANg=G(Bh);
function A8I(){var a=new ANg();AUf(a);return a;}
function AUf(a){}
function AYK(a){var b;b=new ABh;b.E5=a;BB(b);return b;}
var AJn=G(Bh);
function A$R(){var a=new AJn();A2e(a);return a;}
function A2e(a){}
function AS7(a){var b;b=new X$;b.Eb=a;BB(b);b.V=1;return b;}
var ALN=G(Bh);
function A9V(){var a=new ALN();AOZ(a);return a;}
function AOZ(a){}
function AQS(a){var b;b=new Ya;b.Fj=a;BB(b);b.V=1;return b;}
var AIp=G(Bh);
function A8$(){var a=new AIp();AP4(a);return a;}
function AP4(a){}
function A1O(a){var b;b=new Qu;b.FF=a;BB(b);b.V=1;return b;}
var AKa=G(Bh);
function A$H(){var a=new AKa();ATa(a);return a;}
function ATa(a){}
function A2W(a){var b;b=new AAb;b.Hj=a;BB(b);b.V=1;return b;}
var ANl=G(Bh);
function A$E(){var a=new ANl();A3O(a);return a;}
function A3O(a){}
function AW2(a){var b;b=new AAg;b.EO=a;BB(b);return b;}
var AH5=G(Bh);
function A9v(){var a=new AH5();APZ(a);return a;}
function APZ(a){}
function AVw(a){var b;b=new ADr;b.G0=a;BB(b);return b;}
var AHM=G(Bh);
function A8H(){var a=new AHM();A5e(a);return a;}
function A5e(a){}
function AUu(a){var b;b=new ACn;b.Ed=a;BB(b);b.V=1;return b;}
var AKt=G(Bh);
function A$y(){var a=new AKt();A1_(a);return a;}
function A1_(a){}
function A5m(a){var b;b=new PZ;b.Hz=a;BB(b);b.V=1;return b;}
var Lf=G(Bh);
function A9b(){var a=new Lf();AQZ(a);return a;}
function AQZ(a){}
function AIo(a){return CR(Cf(Cf(Cf(DP(),97,122),65,90),48,57),95);}
var ANF=G(Lf);
function A9R(){var a=new ANF();A2h(a);return a;}
function A2h(a){}
function AUi(a){var b;b=E6(AIo(a),1);b.V=1;return b;}
var AMj=G(Ox);
function A8t(){var a=new AMj();AXn(a);return a;}
function AXn(a){}
function AZL(a){var b;b=E6(AL4(a),1);b.V=1;return b;}
var AHK=G(NX);
function A8R(){var a=new AHK();A2N(a);return a;}
function A2N(a){}
function ARZ(a){var b;b=E6(AMz(a),1);b.V=1;return b;}
function ALu(){var a=this;Bh.call(a);a.ug=0;a.A2=0;}
function R(a,b){var c=new ALu();A7g(c,a,b);return c;}
function A7g(a,b,c){a.ug=b;a.A2=c;}
function ATk(a){return Cf(DP(),a.ug,a.A2);}
var ALF=G(Bh);
function A9T(){var a=new ALF();AXO(a);return a;}
function AXO(a){}
function AXw(a){return Cf(Cf(DP(),65279,65279),65520,65533);}
function AL9(){var a=this;Bh.call(a);a.q3=0;a.py=0;a.zs=0;}
function B8(a,b){var c=new AL9();AQa(c,a,b);return c;}
function A87(a,b,c){var d=new AL9();AXE(d,a,b,c);return d;}
function AQa(a,b,c){a.py=c;a.q3=b;}
function AXE(a,b,c,d){a.zs=d;a.py=c;a.q3=b;}
function A1y(a){var b;b=A9A(a.q3);if(a.zs)Jm(b.S,0,2048);b.V=a.py;return b;}
function AMg(){var a=this;Bh.call(a);a.o4=0;a.np=0;a.rY=0;}
function KQ(a,b){var c=new AMg();AQT(c,a,b);return c;}
function A$c(a,b,c){var d=new AMg();AYL(d,a,b,c);return d;}
function AQT(a,b,c){a.np=c;a.o4=b;}
function AYL(a,b,c,d){a.rY=d;a.np=c;a.o4=b;}
function AOk(a){var b;b=new ABV;AIR(b,a.o4);if(a.rY)Jm(b.S,0,2048);b.V=a.np;return b;}
var ALx=G();
var AHh=G();
function AH4(b){var c,d,e,f,g,h,i;c=AWa(GU(b));d=NM(c);e=BI(d*2|0);f=e.data;g=0;h=0;while(h<d){g=g+NM(c)|0;i=h*2|0;f[i]=g;f[i+1|0]=P7(c);h=h+1|0;}return e;}
function Og(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function YJ(){var a=this;B.call(a);a.zT=0;a.uR=0;a.z2=null;}
function ARr(a,b,c){var d=new YJ();AWz(d,a,b,c);return d;}
function AWz(a,b,c,d){a.zT=b;a.uR=c;a.z2=d;}
function AJh(){var a=this;B.call(a);a.y2=null;a.Ay=0;}
function AWa(a){var b=new AJh();A0V(b,a);return b;}
function A0V(a,b){a.y2=b;}
var ALU=G();
function NM(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.y2.data;f=b.Ay;b.Ay=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+Bb(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function P7(b){var c,d;c=NM(b);d=c/2|0;if(c%2|0)d= -d|0;return d;}
function F3(){var a=this;B.call(a);a.k9=0;a.vp=0;a.kx=null;a.hO=null;a.z5=null;a.mS=null;}
function BcW(a){var b=new F3();Ow(b,a);return b;}
function Ow(a,b){a.mS=b;a.vp=b.dj;a.kx=null;}
function FM(a){var b,c;if(a.kx!==null)return 1;while(true){b=a.k9;c=a.mS.cg.data;if(b>=c.length)break;if(c[b]!==null)return 1;a.k9=b+1|0;}return 0;}
function ALy(a){var b;if(a.vp==a.mS.dj)return;b=new IF;X(b);N(b);}
function OI(a){var b,c,d,e;ALy(a);if(!FM(a)){b=new Nb;X(b);N(b);}b=a.kx;if(b!==null){c=a.hO;if(c!==null)a.z5=c;a.hO=b;a.kx=b.dh;}else{d=a.mS.cg.data;e=a.k9;a.k9=e+1|0;b=d[e];a.hO=b;a.kx=b.dh;a.z5=null;}}
var ACD=G(F3);
function Rk(a){OI(a);return a.hO.cR;}
var Vf=G(F3);
function Pp(a){OI(a);return a.hO;}
var ABw=G(F3);
function AHa(){var a=this;B.call(a);a.Sf=null;a.VK=0;}
function ALj(){B.call(this);this.V3=null;}
function WZ(){B.call(this);this.us=null;}
function AVp(a,b){a.us.g(F2(b));}
function W0(){var a=this;B.call(a);a.Bx=null;a.Bw=null;}
function AVJ(a,b){var c,d;c=a.Bx;d=a.Bw;b.text().then(Bz(c,"f"),Bz(d,"f"));}
function AF1(){var a=this;B.call(a);a.zK=null;a.zL=null;}
function A5c(a,b){var c,d;c=a.zK;d=a.zL;D3(c);d.g(b);}
function AEH(){var a=this;B.call(a);a.z0=null;a.lN=null;a.n_=null;}
function ADw(a){var b,c;b=a.z0.next();c=A_Y;b.then(Bz(a,"f"),Bz(c,"f"));}
function AVD(a,b){var c;if(b.done?1:0)a.lN.pw();else{ADw(a);c=b.value;if(c.kind==='file'?1:0){b=AJl(c,AAB(a.n_));a.lN.pO(b);}else{b=A73(c,AAB(a.n_),null);a.lN.oL(b);}}}
function AB$(){B.call(this);this.Aw=null;}
function AT4(a,b){b.hZ=a.Aw.dA;}
function AB9(){B.call(this);this.wq=null;}
function A4U(a,b){b.hU=a.wq.dA.cy;}
function AFR(){var a=this;B.call(a);a.xl=null;a.xk=0;a.xn=0;a.xm=null;a.xo=null;}
function AXf(a,b){XD(a.xl,a.xk,a.xn,a.xm,a.xo,b);}
function WR(){var a=this;Ba.call(a);a.yQ=null;a.Hb=null;}
function ARa(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.cN^D8(a.yQ,c):0;}
function WO(){var a=this;Ba.call(a);a.CJ=null;a.w1=null;a.Ft=null;}
function AY9(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.cN^D8(a.CJ,c):0;return a.w1.o(b)&&!d?1:0;}
function Q7(){var a=this;Ba.call(a);a.mb=null;a.F9=null;}
function ATb(a,b){return a.bm^D8(a.mb,b);}
function A1R(a){var b,c,d;b=new J;L(b);c=IN(a.mb,0);while(c>=0){Kz(b,GR(c));Bq(b,124);c=IN(a.mb,c+1|0);}d=b.I;if(d>0)WC(b,d-1|0);return K(b);}
function ZG(){var a=this;Ba.call(a);a.AM=null;a.GM=null;}
function A5b(a,b){return a.AM.o(b);}
function ZE(){var a=this;Ba.call(a);a.pB=0;a.zk=null;a.qc=null;}
function AWh(a,b){return !(a.pB^D8(a.qc.P,b))&&!(a.pB^a.qc.eX^a.zk.o(b))?0:1;}
function ZF(){var a=this;Ba.call(a);a.nn=0;a.wM=null;a.oN=null;}
function A3b(a,b){return !(a.nn^D8(a.oN.P,b))&&!(a.nn^a.oN.eX^a.wM.o(b))?1:0;}
function ZJ(){var a=this;Ba.call(a);a.Dr=0;a.wQ=null;a.wI=null;a.Gj=null;}
function A05(a,b){return a.Dr^(!a.wQ.o(b)&&!a.wI.o(b)?0:1);}
function ZK(){var a=this;Ba.call(a);a.uB=0;a.AH=null;a.Ab=null;a.Hv=null;}
function AOg(a,b){return a.uB^(!a.AH.o(b)&&!a.Ab.o(b)?0:1)?0:1;}
function ZH(){var a=this;Ba.call(a);a.tx=null;a.Hy=null;}
function ART(a,b){return Dg(a.tx,b);}
function ZI(){var a=this;Ba.call(a);a.C9=null;a.Gn=null;}
function ATK(a,b){return Dg(a.C9,b)?0:1;}
function ZL(){var a=this;Ba.call(a);a.uM=null;a.AK=0;a.wd=null;}
function AXa(a,b){return !Dg(a.uM,b)&&!(a.AK^D8(a.wd.P,b))?0:1;}
function ZM(){var a=this;Ba.call(a);a.vh=null;a.BU=0;a.u9=null;}
function A0F(a,b){return !Dg(a.vh,b)&&!(a.BU^D8(a.u9.P,b))?1:0;}
function Q6(){var a=this;Ba.call(a);a.wa=0;a.CU=null;a.w9=null;a.Ek=null;}
function A8s(a,b){return !(a.wa^a.CU.o(b))&&!Dg(a.w9,b)?0:1;}
function Ro(){var a=this;Ba.call(a);a.Df=0;a.rC=null;a.rZ=null;a.EA=null;}
function ARX(a,b){return !(a.Df^a.rC.o(b))&&!Dg(a.rZ,b)?1:0;}
function Q4(){var a=this;Ba.call(a);a.zJ=null;a.ED=null;}
function AQk(a,b){return Dg(a.zJ,b);}
function Q5(){var a=this;Ba.call(a);a.tl=null;a.Ht=null;}
function A1G(a,b){return Dg(a.tl,b)?0:1;}
function Q$(){var a=this;Ba.call(a);a.Dp=null;a.vb=0;a.D8=null;}
function ASM(a,b){return Dg(a.Dp,b)&&a.vb^D8(a.D8.P,b)?1:0;}
function Q3(){var a=this;Ba.call(a);a.B_=null;a.AZ=0;a.va=null;}
function A6m(a,b){return Dg(a.B_,b)&&a.AZ^D8(a.va.P,b)?0:1;}
function Q8(){var a=this;Ba.call(a);a.Cp=0;a.yP=null;a.uz=null;a.Gi=null;}
function AZV(a,b){return a.Cp^a.yP.o(b)&&Dg(a.uz,b)?1:0;}
function Q9(){var a=this;Ba.call(a);a.B6=0;a.yl=null;a.Cl=null;a.Go=null;}
function AVo(a,b){return a.B6^a.yl.o(b)&&Dg(a.Cl,b)?0:1;}
function SD(){B.call(this);this.rD=null;}
function A4t(a,b){var c,d,e,f,g;c=a.rD;D3(c.M);Fd(c.i3);d=NI(OQ(c.fY));while(FM(d)){e=Pp(d);f=c.fY;g=e.cR;e=null;if(HX(f,g))D5(f,g,e);}e=Bg();d=BT(b);f=new J;L(f);H(H(f,C(759)),d);Bc(e,K(f));e=AJw(b,c);D9(c.cK.eO,e);e.f2.e();C0(c.lo,FQ(ES(b),C(760)));Cx(c.M.F,c.cK.eO);}
var MR=G(0);
function ACm(){var a=this;B.call(a);a.Ew=null;a.CV=null;a.ms=null;a.c2=null;a.k8=0;a.p_=0;}
function PO(a,b){var c,d,e;c=M(a.ms);if(b>=0&&b<=c){AGd(a.c2,null,(-1),(-1));d=a.c2;d.mU=1;d.fd=b;c=d.jx;if(c<0)c=b;d.jx=c;b=a.CV.cF(b,a.ms,d);if(b==(-1))a.c2.d$=1;if(b>=0){d=a.c2;if(d.ld){e=d.ey.data;if(e[0]==(-1)){c=d.fd;e[0]=c;e[1]=c;}d.jx=Nj(d);return 1;}}a.c2.fd=(-1);return 0;}d=new BL;Bm(d,Dr(b));N(d);}
function AJ_(a){return Rn(a.c2,0);}
function ALJ(a){return TC(a.c2,0);}
function AGY(a){return a.c2.lg;}
function SC(){var a=this;B.call(a);a.sY=null;a.sZ=null;}
function A4S(a){var b,c;b=a.sY;c=a.sZ;T9();Ll(b,c,BcX);}
function SA(){var a=this;B.call(a);a.BN=null;a.BM=null;}
function ARO(a){var b,c;b=a.BN;c=a.BM;T9();Ll(b,c,BcY);}
function SB(){var a=this;B.call(a);a.D7=null;a.D6=null;}
function AXl(a){Ll(a.D7,a.D6,null);}
function SE(){var a=this;B.call(a);a.z_=null;a.Aa=null;}
function AOD(a){var b,c,d,e,f,g,h;b=a.z_;c=a.Aa;d=En(b.bB.d);e=H6(b.bB.d);d=ADV(b.bB.fW,d,e);D3(b.g1.cj);b=b.bB;e=FS(b,c);if(d!==null){f=b.d;g=e.bt;h=e.by;e=new AEa;e.FT=b;e.FU=c;d.Mx(f,g,h,1,e,b.kO);}}
function TX(){B.call(this);this.yn=null;}
function AWQ(a){var b;b=a.yn;D3(b.g1.cj);JH(b.bB,XT(b),0);}
function TW(){B.call(this);this.vN=null;}
function A3g(a){var b;b=a.vN;D3(b.g1.cj);JH(b.bB,XT(b),1);}
function TV(){B.call(this);this.s1=null;}
function A4L(a){var b,c,d;b=a.s1;D3(b.g1.cj);c=Ik(b);b=b.bB;BG(b);d=new AFk;d.ss=b;S2(c,d,AHt(C(761)));}
function S3(){var a=this;B.call(a);a.A9=null;a.A8=null;}
function AYq(a){var b,c;b=a.A9;c=a.A8;b=b.bB.d;b.qS=c;M3(b);}
var Se=G(0);
var Bcq=null;function AM$(){Bcq=new Ve;}
function AL2(){B.call(this);this.G9=null;}
function A7T(a){var b,c,d,e;b=a.G9;c=Ik(b);d=b.g1.cj;e=new TB;e.DL=b;Fm(c,NV(d,e));}
function WH(){B.call(this);this.xs=null;}
function APE(a,b){a.xs.g($rt_str(b.message));}
function AMl(){var a=this;B.call(a);a.RG=null;a.RE=null;a.RH=0.0;}
function Zz(){B.call(this);this.so=null;}
function A0J(a,b){b.hZ=a.so;}
function AAW(){B.call(this);this.s4=null;}
function AVf(a,b){a.s4.g($rt_wrapArray($rt_bytecls(),new $rt_globals.Int8Array(b)));}
function SR(){var a=this;B.call(a);a.DC=null;a.DK=0;}
function AS$(a,b){var c,d,e,f,g,h;c=a.DC;d=a.DK;e=!d?c.cv.cS:c.cv.c6;D3(c.M);f=Bg();g=ES(b);h=new J;L(h);H(H(h,C(762)),g);Bc(f,K(h));g=new AB8;g.dq=c;g.h0=d;g.n7=e;f=AJw(b,g);if(!d)c.en=f;else c.eM=f;f.cz.e();D9(e,f);b=c.eM;if(b!==null&&c.en===null)C0(c.gU,De(b));if(c.eM===null){b=c.en;if(b!==null)C0(c.gU,De(b));}b=c.eM;if(b!==null&&c.en!==null){e=c.gU;f=De(b);h=De(c.en);b=new J;L(b);H(H(H(b,f),C(763)),h);C0(e,K(b));}if(c.eM!==null&&c.en!==null){c.k3=VP(null);b=VP(null);c.nG=b;e=c.qU;f=c.eM;g=c.en;c=c.k3;e.f6.jp
=0;if(!Bk(De(f),De(g))){c.eU=3;b.eU=3;}M0(e,f,g,c,b);}}
function Rw(){B.call(this);this.zy=null;}
function AVk(a){AJ7(a.zy);}
function Ru(){B.call(this);this.BT=null;}
function A1z(a){JY(a.BT);}
function Rv(){B.call(this);this.rp=null;}
function A7l(a){AKY(a.rp);}
function VJ(){B.call(this);this.BX=null;}
function A46(a){a.BX.rf();}
function VL(){B.call(this);this.D_=null;}
function AUm(a){a.D_.pq();}
function AA2(){B.call(this);this.Ax=null;}
function A6d(a){var b,c,d,e,f,g,h,i;b=a.Ax;c=(b.su.b1()).data;d=P(Bt,c.length);e=d.data;f=0;g=e.length;while(f<g){h=c[f];i=new R6;i.ti=b;i.th=h;e[f]=YY(i,h);f=f+1|0;}return d;}
function ABC(){B.call(this);this.tu=null;}
function AO_(a){a.tu.pn.gy(0);}
function ABz(){B.call(this);this.Cr=null;}
function AQw(a){a.Cr.pn.gy(1);}
function Up(){B.call(this);this.xN=null;}
function AXF(a){var b,c,d,e,f;b=a.xN.d.h;c=b.cE;d=new J;L(d);V(H(d,C(764)),c);$rt_globals.console.info($rt_ustr(K(d)));c=b.on;d=new J;L(d);V(H(d,C(765)),c);$rt_globals.console.info($rt_ustr(K(d)));d=b.dC;e=GI(Fv(b));AFy(d,0,d.dA,e);b=Bg();f=b.nQ;f.data[0]=10;Zr(b,f,0,1);}
function Uq(){B.call(this);this.tr=null;}
function AO9(a){ABH(a.tr);}
function Ur(){B.call(this);this.Cj=null;}
function AQo(a){AC6(a.Cj);}
function Us(){B.call(this);this.yH=null;}
function AXp(a){Pa(a.yH.d);}
function UF(){B.call(this);this.A1=null;}
function A3n(a){Xq(a.A1);}
function AIG(){B.call(this);this.Hi=null;}
function A7V(a){var b,c,d,e,f,g,h;b=a.Hi;c=P(Bt,17);d=c.data;e=0;f=0;while(f<5){g=(4+f|0)/8.0;h=e+1|0;d[e]=YY(Rs(b,g),Y6(g));f=f+1|0;e=h;}f=0;while(f<12){f=1+f|0;g=1.0+f/4.0;h=e+1|0;d[e]=YY(Rs(b,g),Y6(g));e=h;}return c;}
function AES(){var a=this;B.call(a);a.mW=null;a.jo=0;}
var Ve=G();
var P4=G(Ij);
function ARu(a,b,c,d){var e,f,g;e=0;f=d.B;a:{while(true){if(b>f){b=e;break a;}g=G0(d,a.bc);D_(d,a.bc,b);e=a.dE.c(b,c,d);if(e>=0)break;D_(d,a.bc,g);b=b+1|0;}}return b;}
function A8h(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=G0(e,a.bc);D_(e,a.bc,c);f=a.dE.c(c,d,e);if(f>=0)break;D_(e,a.bc,g);c=c+(-1)|0;}}return c;}
function AP$(a){return null;}
var Nb=G(Bu);
function Wq(){B.call(this);this.rE=null;}
function AYc(a){AFN(a.rE);}
function Wr(){B.call(this);this.DJ=null;}
function AWg(a,b){G2(a.DJ,b);}
function AEA(){B.call(this);this.se=null;}
function AXd(a){ACj(a.se);}
function AEC(){B.call(this);this.Bl=null;}
function AYB(a,b){G2(a.Bl,b);}
function T0(){B.call(this);this.tV=null;}
function A1H(a,b){b.hU=a.tV;}
function ABt(){B.call(this);this.Db=null;}
var AMx=G();
function AEq(){var a=this;B.call(a);a.ey=null;a.lG=null;a.qv=null;a.op=null;a.sL=0;a.ld=0;a.du=0;a.B=0;a.fd=0;a.lg=0;a.g_=0;a.d$=0;a.G7=0;a.jx=0;a.mU=0;}
function B2(a,b,c){a.lG.data[b]=c;}
function DO(a,b){return a.lG.data[b];}
function Nj(a){return TC(a,0);}
function TC(a,b){ABT(a,b);return a.ey.data[(b*2|0)+1|0];}
function D_(a,b,c){a.ey.data[b*2|0]=c;}
function NG(a,b,c){a.ey.data[(b*2|0)+1|0]=c;}
function G0(a,b){return a.ey.data[b*2|0];}
function JG(a,b){return a.ey.data[(b*2|0)+1|0];}
function AI$(a){return Rn(a,0);}
function Rn(a,b){ABT(a,b);return a.ey.data[b*2|0];}
function Yl(a,b){return a.qv.data[b];}
function Fa(a,b,c){a.qv.data[b]=c;}
function ABT(a,b){var c;if(!a.ld){c=new CS;X(c);N(c);}if(b>=0&&b<a.sL)return;c=new BL;Bm(c,Dr(b));N(c);}
function AGd(a,b,c,d){a.ld=0;a.mU=2;J5(a.ey,(-1));J5(a.lG,(-1));if(b!==null)a.op=b;if(c>=0){a.du=c;a.B=d;}a.fd=a.du;}
function AHW(a){return a.mU;}
function AEI(){var a=this;B.call(a);a.BC=null;a.BD=0;}
function A1Z(a){Iz(a.BC,a.BD);}
function ABn(){B.call(this);this.rz=null;}
function ATQ(a){Iz(a.rz,1);}
function ABm(){B.call(this);this.xr=null;}
function A4l(a){Iz(a.xr,0);}
function Tf(){var a=this;B.call(a);a.A3=null;a.AO=0;}
function A7c(a){AAn(a.A3,a.AO);}
function QR(){B.call(this);this.ru=null;}
function A28(a,b){G2(a.ru,b);}
var Hb=G(CE);
var BcY=null;var BcX=null;var BcZ=null;function T9(){T9=Bl(Hb);A79();}
function A5E(a,b){var c=new Hb();AH9(c,a,b);return c;}
function AKW(){T9();return BcZ.ed();}
function AH9(a,b,c){T9();Dw(a,b,c);}
function A79(){var b;BcY=A5E(C(766),0);b=A5E(C(767),1);BcX=b;BcZ=I(Hb,[BcY,b]);}
function AFk(){B.call(this);this.ss=null;}
function ARG(a,b){DS(a.ss,b);}
function ADl(){B.call(this);this.xR=null;}
function AMU(){B.call(this);this.IW=null;}
var AMV=G();
function AMT(){var a=this;B.call(a);a.VR=null;a.VQ=null;}
var EK=G(CE);
var Bc0=null;var Bc1=null;var Bc2=null;var Bc3=null;function A0e(){A0e=Bl(EK);ASA();}
function AL3(a,b){var c=new EK();AIb(c,a,b);return c;}
function AYQ(){A0e();return Bc3.ed();}
function AIb(a,b,c){A0e();Dw(a,b,c);}
function ASA(){var b;Bc0=AL3(C(768),0);Bc1=AL3(C(769),1);b=AL3(C(770),2);Bc2=b;Bc3=I(EK,[Bc0,Bc1,b]);}
var Zp=G(0);
function F_(){var a=this;Db.call(a);a.hd=null;a.g8=null;a.eG=null;a.fz=null;}
var Bc4=null;var Bc5=null;function AJw(a,b){var c=new F_();AMv(c,a,b);return c;}
function Bc6(a,b,c){var d=new F_();Mq(d,a,b,c);return d;}
function AMv(a,b,c){Mq(a,b,0,c);}
function Mq(a,b,c,d){KE(a,JT(b),c);a.eG=Bc4;a.fz=Bc5;a.hd=b;a.g8=d;LY(a);I$(a);}
function AXy(a){return Jh(a.hd);}
function SJ(a,b){return V7(a.eG,b);}
function LY(a){var b;b=new Tq;b.tZ=a;a.cz=b;a.f2=b;a.eY=Bce;}
function AFQ(a){var b;b=new AGx;b.u2=a;a.cz=b;a.f2=b;}
function AJQ(){Bc4=P(F_,0);Bc5=P(IX,0);}
function R6(){var a=this;B.call(a);a.ti=null;a.th=null;}
function A1Y(a){var b,c;b=a.ti;c=a.th;b.jQ.oV(c);}
function S7(){B.call(this);this.vH=null;}
function APl(a,b){U_(Ik(a.vH),b,BbA,AHt(C(771)));}
var ADn=G();
var Bcr=null;function A$v(){A$v=Bl(ADn);AZs();}
function AZs(){var b,c;b=BI((AKW()).data.length);c=b.data;Bcr=b;c[BcY.fu]=1;c[BcX.fu]=2;}
function Ti(){B.call(this);this.BO=null;}
function ARx(a,b){var c,d;c=a.BO;d=b.jr;b=new J;L(b);H(H(b,c),d);$rt_globals.console.info($rt_ustr(K(b)));}
var Pt=G(EJ);
function AIy(){var a=this;B.call(a);a.PE=null;a.Uu=null;a.NF=null;a.Lb=null;a.Qo=null;}
function PJ(){var a=this;B.call(a);a.zc=null;a.zd=0.0;}
function A2k(a){var b,c;b=a.zc;c=a.zd;b.jQ.li(c);}
function Po(){var a=this;Pt.call(a);a.ot=null;a.na=null;}
function A5i(a,b){var c,d,e,f;c=b.fu;d=c/32|0;e=1<<(c%32|0);f=a.na.data;if(f[d]&e)e=0;else{f[d]=f[d]|e;e=1;}return e;}
function Qd(){EH.call(this);this.qp=null;}
function AYF(a,b){return a.qp.data[b];}
function AUO(a){return a.qp.data.length;}
function IX(){Db.call(this);this.eS=null;}
function A77(a,b,c){var d=new IX();A07(d,a,b,c);return d;}
function A07(a,b,c,d){KE(a,b,c);a.eS=d;}
function AQm(a){return Oh(a.eS);}
function AB8(){var a=this;B.call(a);a.h0=0;a.n7=null;a.dq=null;}
function AS_(a,b){var c,d,e,f,g;c=Bg();d=ES(b.eS);e=new J;L(e);H(H(e,C(772)),d);Bc(c,K(e));c=b.eS;d=SG(a,c.iB);if(d===null)f=null;else{c=EG(c);f=V7(d.fz,c);}if(f===null){c=new AEb;d=a.dq;ANq(c,d.M,d.gP,d.hI);L6(c,b.eS);K8(c);}else{Mh(a,f);c=new NO;g=a.dq;Vd(c,g.M,g.gP,g.hI);NJ(c,b.eS,a.h0);NJ(c,f.eS,a.h0?0:1);}}
function AYp(a,b){var c,d,e,f;AFQ(b);c=Bg();d=Jh(b.hd);e=new J;L(e);H(H(e,C(773)),d);Bc(c,K(e));c=UN(a,b);Mh(a,c);if(c!==null&&ST(c))c.cz.e();if(E9(b)>0)Gr(a.n7);OT(a.dq);f=b.eG.data;if(f.length==1&&!b.fz.data.length)f[0].cz.e();}
function Mh(a,b){(!a.h0?a.dq.cv.c6:a.dq.cv.cS).c4=b;}
function AYA(a,b){var c;if(E9(b)>0)Gr(a.n7);LY(b);c=UN(a,b);Mh(a,c);if(c!==null&&Gy(c))c.cz.e();OT(a.dq);}
function UN(a,b){var c,d;a:{c=a.h0;if(!(c&&b===a.dq.eM)){if(c)break a;if(b!==a.dq.en)break a;}return !c?a.dq.eM:a.dq.en;}b=b.hd;d=SG(a,b.f4);return d===null?null:SJ(d,JT(b));}
function SG(a,b){var c,d,e;c=!a.h0?a.dq.eM:a.dq.en;if(c===null)return null;b=b.data;d=b.length;e=0;while(e<d){c=SJ(c,b[e]);if(c===null)return null;e=e+1|0;}return c;}
var Sr=G(Bu);
var Xi=G(Bu);
function VN(){GF.call(this);this.FX=0;}
function Sc(){GF.call(this);this.Hm=0;}
function ACZ(){Ba.call(this);this.GI=null;}
function AXh(a,b){return CO(b)!=2?0:1;}
function Yc(){Ba.call(this);this.GN=null;}
function AZJ(a,b){return CO(b)!=1?0:1;}
function TA(){Ba.call(this);this.Gx=null;}
function APd(a,b){return S5(b);}
function Tz(){Ba.call(this);this.EG=null;}
function A1w(a,b){return 0;}
function W6(){Ba.call(this);this.FI=null;}
function ASz(a,b){return !CO(b)?0:1;}
function ZY(){Ba.call(this);this.GY=null;}
function A6U(a,b){return CO(b)!=9?0:1;}
function QQ(){Ba.call(this);this.F1=null;}
function AU0(a,b){return Ig(b);}
function ABh(){Ba.call(this);this.E5=null;}
function AV3(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function X$(){Ba.call(this);this.Eb=null;}
function A71(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function Ya(){Ba.call(this);this.Fj=null;}
function AQB(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function Qu(){Ba.call(this);this.FF=null;}
function AXr(a,b){a:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function AAb(){Ba.call(this);this.Hj=null;}
function A3k(a,b){return Lo(b);}
function AAg(){Ba.call(this);this.EO=null;}
function A4V(a,b){return AAh(b);}
function ADr(){Ba.call(this);this.G0=null;}
function A6H(a,b){return CO(b)!=3?0:1;}
function ACn(){Ba.call(this);this.Ed=null;}
function AXQ(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function PZ(){Ba.call(this);this.Hz=null;}
function AQr(a,b){a:{b:{switch(CO(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=Ig(b);}return b;}
function M2(){Ba.call(this);this.oH=0;}
function A9A(a){var b=new M2();AIR(b,a);return b;}
function AIR(a,b){BB(a);a.oH=b;}
function AU3(a,b){return a.bm^(a.oH!=CO(b&65535)?0:1);}
var ABV=G(M2);
function A51(a,b){return a.bm^(!(a.oH>>CO(b&65535)&1)?0:1);}
function AEm(){var a=this;B.call(a);a.uP=null;a.CK=null;a.xE=0;a.nB=0;}
function Od(a,b){return Cl(a.uP)<b?0:1;}
var AHg=G(0);
var AIF=G(0);
function L0(){F8.call(this);this.un=null;}
function SZ(){L0.call(this);this.sV=null;}
function TB(){B.call(this);this.DL=null;}
function A6j(a,b){Gb(a.DL.bB,b,BbA);}
function RA(){var a=this;B.call(a);a.mJ=null;a.mI=null;a.zB=null;}
function AQY(a){J2(a.mJ);J2(a.mI);}
function AOy(a){K4(a.mJ);K4(a.mI);}
function AWs(a,b){I3(a.mJ,b);I3(a.mI,b);}
function AUR(a,b){K5(a.zB,b);}
function Zq(){var a=this;B.call(a);a.z8=null;a.z9=null;}
function ADh(){var a=this;B.call(a);a.Hf=null;a.He=null;a.Hd=null;}
function AEa(){var a=this;B.call(a);a.FT=null;a.FU=null;}
function Tq(){B.call(this);this.tZ=null;}
function AUT(a){var b,c,d,e;b=a.tZ;c=Bg();d=De(b);e=new J;L(e);H(H(e,C(774)),d);Bc(c,K(e));c=b.hd;e=new ACX;e.dr=b;e.mx=BO();e.m5=BO();Ia(c,e);}
var Df=G(0);
var Baj=null;var Bbw=null;var Bal=null;var Bak=null;var Ban=null;var Bam=null;var Bap=null;var Bao=null;var Bar=null;var Baq=null;var Bas=null;function AJv(){AJv=Bl(Df);A7p();}
function A7p(){Baj=Cs(0);Bbw=DF(8,8,8);Bal=S(C(775));Bak=DF(255,255,255);Ban=S(C(776));Bam=S(C(777));Bap=S(C(778));Bao=S(C(779));Bar=Fg(205,205,205,153);Baq=Fg(255,255,255,0);Bas=S(C(123));}
function CD(){CE.call(this);this.qt=null;}
var Bc7=null;var Bc8=null;var Bc9=null;var Bc$=null;var Bc_=null;var Bda=null;var Bdb=null;var Bdc=null;var Bdd=null;var Bde=null;var Bdf=null;var Bdg=null;var Bdh=null;var Bdi=null;var Bdj=null;var Bdk=null;function AIT(){AIT=Bl(CD);A7S();}
function DW(a,b,c){var d=new CD();ABq(d,a,b,c);return d;}
function A7E(a,b,c,d){var e=new CD();AHd(e,a,b,c,d);return e;}
function ANw(){AIT();return Bdk.ed();}
function ABq(a,b,c,d){AIT();Dw(a,b,c);a.qt=Ki(d,null);}
function AHd(a,b,c,d,e){AIT();Dw(a,b,c);a.qt=Ki(d,e);}
function A7S(){var b;b=new CD;AJv();ABq(b,C(358),0,Bbw);Bc7=b;Bc8=DW(C(359),1,S(C(780)));Bc9=DW(C(361),2,S(C(781)));Bc$=DW(C(363),3,S(C(782)));Bc_=DW(C(365),4,Bbw);Bda=DW(C(366),5,S(C(783)));Bdb=DW(C(368),6,S(C(411)));Bdc=DW(C(370),7,S(C(784)));Bdd=DW(C(372),8,S(C(785)));Bde=A7E(C(374),9,Bbw,DF(237,235,252));Bdf=A7E(C(375),10,S(C(409)),S(C(786)));Bdg=DW(C(376),11,S(C(411)));Bdh=DW(C(378),12,S(C(412)));Bdi=DW(C(380),13,S(C(787)));b=DW(C(381),14,S(C(382)));Bdj=b;Bdk=I(CD,[Bc7,Bc8,Bc9,Bc$,Bc_,Bda,Bdb,Bdc,Bdd,Bde,
Bdf,Bdg,Bdh,Bdi,b]);}
var Eb=G(0);
var Baw=null;var Bax=null;var Bat=null;var Bau=null;var Bav=null;var Bbx=null;var Bby=null;var Bay=null;var Baz=null;function AZl(){AZl=Bl(Eb);A02();}
function A02(){Baw=S(C(121));Bax=S(C(788));Bat=S(C(789));Bau=S(C(790));Bav=S(C(791));Bbx=S(C(121));Bby=S(C(788));Bay=Fg(205,205,205,153);Baz=DF(247,248,250);}
function WW(){var a=this;B.call(a);a.yK=null;a.yL=null;}
var AF0=G(0);
function Qv(){B.call(this);this.v4=null;}
function A2I(a){var b,c;b=a.v4;c=b.z8;b=b.z9;c.HW(b.mO,b.qA,null);}
function To(){var a=this;B.call(a);a.Bf=null;a.Be=null;a.Bd=0;}
function AOF(a){var b,c,d,e;b=a.Bf;c=a.Be;d=a.Bd;c=ES(c);if(!d)b.or=c;else b.yj=c;e=b.yj;if(e!==null&&b.or!==null)C0(b.g2,c);else{if(e!==null)C0(b.g2,e);c=b.or;if(c!==null)C0(b.g2,c);}}
function ACX(){var a=this;B.call(a);a.mx=null;a.m5=null;a.dr=null;}
function A6z(a,b){var c,d;c=new F_;d=a.dr;Mq(c,b,d.gi+1|0,d.g8);BA(a.mx,c);}
function AW$(a,b){var c,d;c=EG(b);d=A77(c,a.dr.gi+1|0,b);a.dr.g8.sK(d,c);d.lO=ANM(a.dr.g8,d);BA(a.m5,d);}
function A6W(a){var b,c,d,e,f,g,h;if(!(EU(a.mx)&&EU(a.m5))){a.dr.eG=GO(a.mx,Bc4);a.dr.fz=GO(a.m5,Bc5);LF(a.dr.eG,Bcf);LF(a.dr.fz,Bcf);b=a.dr;c=b.eG;d=c.data;e=b.fz;f=e.data;g=d.length;h=f.length;d=P(Db,g+h|0);Dc(c,0,d,0,g);Dc(e,0,d,g,h);a.dr.eY=d;}Iq(a.dr);b=a.dr;b.g8.yW(b);}
function AC7(){B.call(this);this.C$=null;}
function A2F(a){D3(a.C$);}
function PE(){var a=this;B.call(a);a.vZ=null;a.vY=null;a.v1=null;a.v0=null;a.vW=null;}
function AYx(a,b){ALn(a.vZ,a.vY,a.v1,a.v0,a.vW,b);}
function AGp(){var a=this;B.call(a);a.D1=null;a.D2=null;a.D3=null;}
function A7f(a,b){var c,d,e,f;c=b.data;b=a.D1;d=a.D2;e=a.D3;K2(d);K2(e);if(c.length==1){if(!((CP(c[0])).data[0]!=1?0:1)){f=HP(b.f6);d.dF=f;e.dF=f;O3(b.f6,d,e);}OS(b.mG);}}
function UD(){var a=this;B.call(a);a.s9=null;a.s8=null;}
function APv(a,b){var c,d;b=a.s9;c=a.s8;d=AM3(b.sV.Db.fV);b=c.yK;c=c.yL;b=b.xR;if(c.I>0)LK(c,b);LK(c,d);return 1;}
function S9(){var a=this;B.call(a);a.vI=null;a.vJ=null;}
function A7n(a){a.vI.Bk(a.vJ);}
var AK8=G();
function AGx(){B.call(this);this.u2=null;}
function A2E(a){var b;b=a.u2;I$(b);b.g8.wk(b);b.eG=Bc4;b.fz=Bc5;}
function RK(){var a=this;B.call(a);a.wu=null;a.wv=null;}
function A1U(a,b){var c,d,e;c=a.wu;d=a.wv;L_(c.fY,d);b=ALa(b);e=ARb(b.kZ,AEf(d));D5(c.i3,d,e);if(BV(c.yB,d))R9(c,e);}
function RL(){var a=this;B.call(a);a.uj=null;a.ui=null;}
function A72(a,b){var c,d,e;c=a.uj;d=a.ui;L_(c.fY,d);c=DG();e=new J;L(e);H(H(H(H(e,C(792)),d),C(31)),b);Bc(c,K(e));}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang",-1,"org",4,"teavm",5,"classlib",6,"impl",7,"unicode",4,"sudu",9,"experiments",10,"editor",11,"ui",12,"window",11,"worker",14,"diff",11,"menu",10,"parser",17,"common",18,"tree",18,"graph",20,"node",21,"ref",21,"decl",10,"ui",24,"window",24,"fs",10,"fonts",10,"js",10,"diff",10,"math"]);
$rt_metadata([B,0,0,[],0,3,0,0,["bQ",A_c(ATU),"K",A_b(AHi)],Tn,0,B,[],0,3,0,0,0,Yx,0,B,[],3,3,0,0,0,X6,0,B,[],3,3,0,0,0,AE5,0,B,[Yx,X6],0,3,0,0,0,ALq,0,B,[],4,0,0,0,0,ALc,0,B,[],4,3,0,0,0,Hq,0,B,[],0,3,0,0,0,EN,0,Hq,[],0,3,0,0,0,Bu,0,EN,[],0,3,0,0,0,ABN,0,Bu,[],0,3,0,0,0,C4,0,B,[],3,3,0,0,0,CL,0,B,[],3,3,0,0,0,KT,0,B,[],3,3,0,0,0,BC,"String",3,B,[C4,CL,KT],0,3,[0,0,0],Fx,["K",A_b(APS),"bQ",A_c(Bk),"q2",A_b(Kx),"nc",A_c(ARt)],FT,0,Hq,[],0,3,0,0,0,IP,0,FT,[],0,3,0,0,0,ALV,0,IP,[],0,3,0,0,0,DL,0,B,[C4],1,3,0,0,
0,H9,0,DL,[CL],0,3,0,0,["K",A_b(AXs),"bQ",A_c(A7I),"nc",A_c(A2T)],Hk,0,B,[C4,KT],0,0,0,0,["kG",A_c(NF),"K",A_b(K)],Kh,0,B,[],3,3,0,0,0,J,0,Hk,[Kh],0,3,0,0,["qQ",A_f(A2P),"qe",A_e(AQJ),"K",A_b(Es),"kG",A_c(AS8),"q8",A_d(A3a)],Fn,0,IP,[],0,3,0,0,0,AM0,0,Fn,[],0,3,0,0,0,ALR,0,Fn,[],0,3,0,0,0,ADm,0,B,[],3,3,0,0,0,Dv,0,B,[],3,3,0,0,0,ZX,0,B,[],3,0,0,0,0,KL,0,B,[ADm,Dv,ZX],1,3,0,0,["bW",A_b(EQ)],ABM,0,KL,[],0,3,0,0,0,AKP,0,B,[],0,3,0,0,0,ANG,0,B,[],4,3,0,0,0,BY,0,B,[],3,3,0,0,0,Ci,0,B,[BY],3,3,0,0,0,ADz,0,B,[Ci],
0,3,0,0,["bl",A_c(A7Y)],AIW,0,B,[],0,3,0,0,0,AMs,0,B,[BY],1,3,0,0,0,AGZ,0,B,[],3,3,0,0,0,ANr,0,B,[],3,3,0,0,0,AJq,0,B,[],3,3,0,0,0,MK,"FontConfigJs",27,B,[],0,3,[0,0,0],0,0,AHs,0,B,[BY],1,3,0,0,0,ADA,0,B,[Ci],0,3,0,0,["bl",A_c(AOh)],ADy,0,B,[Ci],0,3,0,0,["bl",A_c(A6I)],Ml,0,B,[],4,3,0,0,0,AJp,0,B,[],4,3,0,0,0,ALK,0,B,[],0,3,0,0,0,AOe,0,B,[],4,3,0,0,0,Yy,0,B,[Ci],0,3,0,0,["bl",A_c(A4a)]]);
$rt_metadata([AJC,0,B,[BY],1,3,0,0,0,AK3,0,B,[],0,3,0,0,0,AEJ,0,B,[BY],3,3,0,0,0,AMi,0,B,[AEJ],1,3,0,0,["NW",A_c(A12),"UY",A_b(ATP)],AIe,0,B,[BY],1,3,0,0,0,GG,0,B,[],3,3,0,0,0,Ul,0,B,[GG],0,3,0,0,0,BL,0,Bu,[],0,3,0,0,0,AMJ,0,B,[],4,3,0,0,0,Gq,0,Bu,[],0,3,0,0,0,JO,0,Bu,[],0,3,0,0,0,Ds,0,B,[CL],0,3,0,0,0,X1,0,B,[BY],3,3,0,0,0,ACo,0,B,[X1],3,3,0,0,0,Fh,0,B,[BY],3,3,0,0,0,AKS,0,B,[BY,ACo,Fh],1,3,0,0,["My",A_b(A3P),"M_",A_c(A56),"VP",A_c(A5S),"QM",A_c(A0I),"Ua",A_c(AOC),"Pg",A_b(AQC),"UW",A_d(A52),"Ns",A_e(ASU),
"N5",A_b(AZH),"Om",A_b(A4A),"Tg",A_c(A6D),"Ru",A_b(AT$),"V$",A_c(ASr),"La",A_b(AUx),"R$",A_b(AYt),"V4",A_b(ATl),"Il",A_c(APh),"Nx",A_b(A7L),"TB",A_d(A2p),"Rh",A_d(AT6),"UM",A_d(AXC),"Up",A_b(AY0),"Ve",A_b(AR_),"N_",A_c(AQM),"SY",A_c(ARD),"QG",A_d(A2z),"KQ",A_b(ATu),"NV",A_c(AZK),"Pt",A_b(ARC),"Ov",A_b(AVE),"Qt",A_c(AOn),"K_",A_c(AW0),"VZ",A_c(AZ5),"Kk",A_b(A6x),"Q8",A_d(A0c),"UI",A_c(A4O),"KE",A_b(AV7),"PQ",A_d(AUY),"IS",A_d(AUF),"RT",A_b(AWU),"Oa",A_c(AX2),"J0",A_e(A31),"Jh",A_b(AQH),"J4",A_d(A0t),"Rn",A_b(AZm),
"MS",A_b(A7F),"Td",A_b(AUW),"HF",A_b(AZk),"Mq",A_d(AUZ),"Pu",A_c(A0R),"SV",A_c(ARP),"Jb",A_b(A5s)],Qw,0,B,[Ci],0,3,0,0,["bl",A_c(AVA)],AL5,0,B,[],4,3,0,0,0,AAa,0,B,[Fh],3,3,0,0,0,Td,0,B,[Fh],3,3,0,0,0,ABy,0,B,[Fh],3,3,0,0,0,UI,0,B,[Fh],3,3,0,0,0,AFT,0,B,[Fh],3,3,0,0,0,AD_,0,B,[Fh,AAa,Td,ABy,UI,AFT],3,3,0,0,0,ALo,0,B,[BY,AD_],1,3,0,0,["TQ",A_d(A4g),"Vk",A_d(A2R),"Jj",A_e(ASb),"Rb",A_c(APx),"L0",A_e(A09)],BU,0,Bu,[],0,3,0,0,0,AGy,0,Bu,[],0,3,0,0,0,IK,0,BL,[],0,3,0,0,0,ALC,0,B,[],0,3,0,0,0,AA7,0,B,[],3,3,0,0,0,ZN,
0,B,[AA7],3,3,0,0,0,ACv,0,B,[ZN],0,3,0,0,0,BD,0,B,[],3,3,0,0,0,AMq,0,B,[BD],0,3,0,0,0,T,0,B,[],3,3,0,0,0,ABW,0,B,[T],0,3,0,0,0,ABE,0,B,[BY],3,3,0,0,0,UZ,0,B,[ABE],0,3,0,0,["Lc",A_c(A5D)],UX,0,B,[T],0,3,0,0,0,AAX,0,B,[BY],3,3,0,0,0,UY,0,B,[AAX],0,3,0,0,["DA",A_d(AUJ)],AJM,0,B,[BY],1,3,0,0,0,CF,0,B,[BY],3,3,0,0,0,UW,0,B,[CF],0,3,0,0,["cM",A_c(AYO)],ACf,0,B,[],0,3,0,0,0,AHz,0,B,[],0,3,0,0,0,OE,0,B,[],1,3,0,0,0,VW,0,OE,[],0,3,0,0,0,WE,0,B,[],3,3,0,0,["fH",A_c(AYG)],H0,0,B,[WE],3,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)]]);
$rt_metadata([FW,0,B,[H0],1,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G),"e7",A_b(EU),"r0",A_c(A5H)],On,0,B,[H0],3,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],Nn,0,B,[On],3,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],EH,0,FW,[Nn],1,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G),"qJ",A_c(AVS),"ci",A_b(B_),"vO",A_d(AVc),"pr",A_d(A6o),"m6",A_c(A4N),"bQ",A_c(AUl)],MW,0,EH,[],1,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],PI,0,B,[H0],3,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],AGe,0,B,[PI,On],3,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],Vh,0,MW,[AGe],0,3,0,0,["fH",A_c(AYG),
"qG",A_c(A2G)],L$,0,B,[],3,3,0,0,0,Et,0,B,[L$],1,3,0,0,0,Ei,0,B,[],3,3,0,0,0,Xn,0,B,[L$],3,3,0,0,0,P6,0,B,[Xn],3,3,0,0,0,Z2,0,Et,[Ei,C4,P6],0,3,0,0,0,ACh,0,B,[BD],0,3,0,0,0,ACi,0,B,[Ci],0,3,0,0,["bl",A_c(AYZ)],AAy,0,B,[],0,3,0,0,0,AE9,0,B,[CF],0,3,0,0,["cM",A_c(A4u)],AE$,0,B,[CF],0,3,0,0,["cM",A_c(A4G)],AE_,0,B,[CF],0,3,0,0,["cM",A_c(AT9)],AFa,0,B,[CF],0,3,0,0,["cM",A_c(A2$)],AFb,0,B,[CF],0,3,0,0,["cM",A_c(A3m)],AFc,0,B,[CF],0,3,0,0,["cM",A_c(AVK)],AFd,0,B,[CF],0,3,0,0,["cM",A_c(ASa)],AFe,0,B,[CF],0,3,0,0,["cM",
A_c(A7_)],AFf,0,B,[CF],0,3,0,0,["cM",A_c(ARB)],AFg,0,B,[CF],0,3,0,0,["cM",A_c(AWr)],XE,0,B,[CF],0,3,0,0,["cM",A_c(A7H)],XF,0,B,[CF],0,3,0,0,["cM",A_c(ATM)],XG,0,B,[CF],0,3,0,0,["cM",A_c(AUa)],XH,0,B,[CF],0,3,0,0,["cM",A_c(A4Q)],ADU,0,B,[],3,3,0,0,0,AD3,0,B,[ADU],0,3,0,0,0,AD2,0,B,[CF],0,3,0,0,["cM",A_c(ASZ)],AJX,0,B,[],0,3,0,0,0,Cn,0,B,[],3,3,0,0,0,CN,0,B,[],3,3,0,0,["b0",A_c(A2M),"cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45)],E0,0,B,[],3,3,0,0,0,DU,0,B,[],3,3,0,0,0,CQ,0,B,[DU],3,3,0,0,0,FU,0,B,[],3,3,0,0,0,CJ,
0,B,[],3,3,0,0,0,Gh,0,B,[CJ],3,3,0,0,0,Sy,0,B,[Dv],0,3,0,0,0,Bi,"V2i",30,B,[],0,3,[0,0,0],0,["K",A_b(AKw),"bQ",A_c(ASO)],AFl,0,B,[],0,3,0,0,0,AJs,0,B,[],0,3,0,0,0,AK_,0,B,[],3,3,0,0,0,AAU,0,B,[],0,3,0,0,0,OU,0,B,[],0,3,0,0,0]);
$rt_metadata([Dn,0,OU,[],0,3,0,0,0,ANE,0,Dn,[],0,3,0,0,0,FN,0,Dn,[],0,3,0,0,0,ABj,0,Dn,[],0,3,0,0,0,AIh,0,FN,[],0,3,0,0,0,HU,0,FN,[],0,3,0,0,0,QD,0,HU,[],0,3,0,0,0,AKc,0,HU,[],0,3,0,0,0,ALp,0,FN,[],0,3,0,0,0,AM2,0,Dn,[],0,3,0,0,0,AHb,0,Dn,[],0,3,0,0,0,AB0,0,B,[BY],3,3,0,0,0,AOd,0,B,[AB0],3,3,0,0,0,La,0,B,[GG],0,3,0,0,["rd",A_d(NC)],AAT,0,B,[Dv],0,3,0,0,0,Sn,0,B,[],0,3,0,0,0,CE,0,B,[CL,C4],1,3,0,0,0,HA,0,CE,[],12,3,0,H2,0,M7,0,B,[],3,3,0,0,0,UA,0,B,[M7],3,3,0,0,0,AD9,0,B,[],3,3,0,0,0,Hm,0,B,[UA,AD9],1,3,0,0,
0,Ny,0,Hm,[],0,3,0,0,0,AHY,0,Ny,[],0,3,0,0,0,H8,0,Hm,[],1,3,0,0,0,Mk,0,H8,[],0,3,0,0,["nJ",A_e(ASS)],Ev,0,CE,[],12,3,0,ANY,0,Nq,0,B,[CL],1,3,0,0,0,M$,0,Nq,[],0,3,0,AHT,0,Z6,0,B,[],0,3,0,0,0,Ix,0,CE,[],12,0,0,AIB,0,Op,0,H8,[],0,3,0,0,["nJ",A_e(ARf)],AJo,0,BU,[],0,3,0,0,0,V4,0,EN,[],0,3,0,0,0,CA,0,B,[Dv],1,3,0,0,["cI",A_c(A7G)],M9,0,B,[BY],3,3,0,0,0,AGa,0,B,[M9],0,3,0,0,["bl",A_c(AWb)],AGb,0,B,[M9],0,3,0,0,["bl",A_c(APL)],PF,0,B,[],0,3,0,0,0,IG,0,B,[],1,3,0,0,0,ACb,0,B,[],3,3,0,0,0,Mc,0,IG,[CL,Kh,KT,ACb],1,3,
0,0,0,NR,0,IG,[CL],1,3,0,0,0,Jb,0,B,[],0,3,0,HM,0,AMk,0,B,[BY],1,3,0,0,0,LC,0,Mc,[],1,0,0,0,0,AIc,0,LC,[],0,0,0,0,0,L7,0,B,[],1,3,0,0,0,OZ,0,B,[],0,3,0,0,0,AFs,0,B,[],0,0,0,0,0]);
$rt_metadata([IJ,0,B,[],0,3,0,0,0,Rm,0,IJ,[],0,3,0,0,0,AJy,0,B,[],0,3,0,0,0,PC,0,IJ,[],0,3,0,0,0,U8,0,B,[BY],3,3,0,0,0,Qo,0,B,[U8],0,3,0,0,["Og",A_c(A20)],W,0,B,[],3,3,0,0,0,AEe,0,B,[W],0,3,0,0,["g",A_c(O1)],AFz,0,NR,[],0,0,0,0,0,AIO,0,B,[BY],1,3,0,0,0,Oa,0,B,[],4,3,0,A2y,0,HJ,"FsItem",10,B,[],3,3,0,0,0,JF,0,B,[HJ],3,3,0,0,0,Ma,"JsFileHandle",28,B,[JF],0,3,[0,0,0],0,["t",A_b(EG),"uE",A_b(AO6),"K",A_b(Oh)],J7,0,B,[HJ],3,3,0,0,0,OV,"JsDirectoryHandle",28,B,[J7],0,0,[0,0,0],0,["t",A_b(JT),"uE",A_b(A6$),"K",A_b(Jh)],AEZ,
0,B,[],3,3,0,0,0,AMB,"JsArrayView",28,B,[AEZ],0,3,[0,0,0],0,["K",A_b(A0L)],Wu,0,B,[Ci],0,3,0,0,["bl",A_c(A2J)],Or,0,L7,[],1,3,0,0,0,RJ,0,Or,[],0,3,0,0,0,JE,0,EN,[],0,3,0,0,0,JX,0,B,[],3,3,0,0,0,Nf,0,B,[JX,C4],0,3,0,0,0,Lk,0,Nf,[],0,0,0,0,0,AGO,0,CA,[],0,3,0,0,["bT",A_b(ATG),"b9",A_d(ASq)],If,0,CA,[],1,3,0,0,["b9",A_d(AIr)],Cg,0,If,[],1,3,0,0,["bT",A_b(AQ_),"b9",A_d(Hf),"cI",A_c(QY)],EW,0,B,[],3,3,0,0,0,Kc,0,B,[],3,3,0,0,0,E2,0,B,[],3,3,0,0,0,K$,"Diff0",29,Cg,[CN,EW,Kc,E2,E0,FU,Gh],0,3,[0,0,0],0,["fy",A_d(AXP),
"cI",A_c(AUo),"bT",A_b(AOr),"hK",A_b(ASl),"rf",A_b(ASx),"pq",A_b(ASw),"oV",A_c(A8e),"li",A_c(A2C),"gy",A_c(AOu),"b9",A_d(AOJ),"ei",A_c(AX5),"b0",A_c(A0b),"cU",A_e(AVT),"cA",A_d(ASI),"dX",A_d(A7i),"dV",A_e(ATf),"b1",A_b(A7b)],V_,"DiffDemoJs",11,K$,[],0,3,[0,0,0],0,["hK",A_b(AUg)],AJV,0,B,[],0,3,0,0,0,AG4,0,B,[],0,3,0,0,0,JB,0,B,[BY],3,3,0,0,0,YF,0,B,[JB],0,3,0,0,["bl",A_c(ARl)],YE,0,B,[JB],0,3,0,0,["bl",A_c(AUS)],YC,0,B,[Ci],0,3,0,0,["bl",A_c(AVm)],YB,0,B,[Ci],0,3,0,0,["bl",A_c(A0u)],U0,0,B,[W],0,3,0,0,["g",
A_c(A7M)],AIS,0,B,[W],0,3,0,0,["g",A_c(A2S)],Wj,0,B,[BD],0,3,0,0,["ba",A_c(AXc)],Wi,0,B,[BD],0,3,0,0,["ba",A_c(AOO)],Wf,0,B,[BD],0,3,0,0,["ba",A_c(A1a)],We,0,B,[BD],0,3,0,0,["ba",A_c(A4b)],Wh,0,B,[BD],0,3,0,0,["ba",A_c(AQ5)],Wg,0,B,[BD],0,3,0,0,["ba",A_c(AYD)],Wm,0,B,[BD],0,3,0,0,["ba",A_c(AQI)],Wl,0,B,[BD],0,3,0,0,["ba",A_c(ATx)]]);
$rt_metadata([Wo,0,B,[BD],0,3,0,0,["ba",A_c(A5J)],Wn,0,B,[BD],0,3,0,0,["ba",A_c(AOs)],AC2,0,B,[BD],0,3,0,0,["ba",A_c(AOH)],AC1,0,B,[BD],0,3,0,0,["ba",A_c(A2Y)],AC0,0,B,[BD],0,3,0,0,["ba",A_c(AUz)],ACL,0,B,[BD],0,3,0,0,["ba",A_c(ARp)],ACK,0,B,[BD],0,3,0,0,["ba",A_c(AYS)],ACI,0,B,[BD],0,3,0,0,["ba",A_c(A6Q)],ACH,0,B,[BD],0,3,0,0,["ba",A_c(ATI)],ACG,0,B,[BD],0,3,0,0,["ba",A_c(A5L)],ACF,0,B,[BD],0,3,0,0,["ba",A_c(AOj)],ACE,0,B,[BD],0,3,0,0,["ba",A_c(A5x)],ACP,0,B,[BD],0,3,0,0,["ba",A_c(A4J)],ACO,0,B,[BD],0,3,0,
0,["ba",A_c(AQd)],ACN,0,B,[BD],0,3,0,0,["ba",A_c(A16)],ACM,0,B,[BD],0,3,0,0,["ba",A_c(ASk)],ACV,0,B,[BD],0,3,0,0,["ba",A_c(ASm)],ACU,0,B,[BD],0,3,0,0,["ba",A_c(AZy)],ACT,0,B,[BD],0,3,0,0,["ba",A_c(AQq)],ACS,0,B,[BD],0,3,0,0,["ba",A_c(A4H)],ACR,0,B,[BD],0,3,0,0,["ba",A_c(AXv)],CH,0,B,[Dv],0,3,0,0,["bW",A_b(AVY),"io",A_b(A33),"dW",A_e(Kn),"dT",A_c(ANV),"cI",A_c(A0l),"sH",A_c(ATB),"pX",A_c(AXJ),"mh",A_d(A5k),"kU",A_b(AXR),"cU",A_e(ASf),"cA",A_d(APT),"dX",A_d(AUk),"b0",A_c(AXu),"dV",A_e(A5a)],AHL,0,CH,[],0,3,0,
0,["dT",A_c(AI8)],AIf,0,B,[],0,3,0,0,0,Fs,0,B,[Cn],3,3,0,0,["xW",A_b(A35),"vX",A_b(ARv),"fy",A_d(AOp),"A$",A_b(AYv)],Sa,0,B,[],3,0,0,0,0,M6,0,B,[Fs],3,3,0,0,["xW",A_b(A35),"vX",A_b(ARv),"fy",A_d(AOp),"A$",A_b(AYv)],AHQ,"EditorComponent",11,CH,[Fs,CN,Kc,Sa,M6],0,3,[0,0,0],0,["dW",A_e(M8),"mh",A_d(AU5),"qq",A_d(A7N),"vX",A_b(A1u),"xW",A_b(AZp),"rf",A_b(J2),"pq",A_b(K4),"oV",A_c(I3),"li",A_c(AVM),"kU",A_b(MA),"bW",A_b(AZP),"cI",A_c(Md),"re",A_c(ALY),"io",A_b(AJH),"qx",A_b(AWG),"dT",A_c(A3r),"l1",A_b(Vr),"lb",A_b(Vq),
"h_",A_c(AVt),"lB",A_b(AVg),"mH",A_b(AYs),"dV",A_e(Mu),"dX",A_d(Uz),"cA",A_d(Yb),"cU",A_e(P0),"b0",A_c(Zi),"br",A_c(A7o),"fy",A_d(JH),"A$",A_b(AXA),"K",A_b(A0Y)],AKH,0,B,[],0,3,0,0,0,So,0,B,[W],0,3,0,0,["g",A_c(AWk)],Sl,0,B,[W],0,3,0,0,["g",A_c(AVj)],Sm,"Diff0$<init>$lambda$_0_2",29,B,[Cn],0,3,[0,0,0],0,["br",A_c(AQQ)],GS,"CtrlO",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(AT5)],Sf,0,B,[W],0,3,0,0,["g",A_c(A6c)],Sg,"Diff0$<init>$lambda$_0_4",29,B,[CQ],0,3,[0,0,0],0,["bI",A_c(A3T)],CK,0,B,[],3,3,0,0,0,AFO,"WindowManager",
25,B,[CN,CK],0,3,[0,0,0],0,["b0",A_c(AY4),"cU",A_e(AP1),"cA",A_d(ASh),"dX",A_d(A7e),"eq",A_d(A2K)],Vc,"UiContext",24,B,[FU,Gh],0,3,[0,0,0],0,["fy",A_d(A59),"b1",A_b(A34)],X3,"WindowScene$<init>$lambda$_1_0",11,B,[E0],0,3,[0,0,0],0,["dV",A_e(A69)],X2,"WindowScene$<init>$lambda$_1_1",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AP3)],AHD,0,B,[],0,3,0,0,0,AF$,0,B,[],0,3,0,0,0,AFZ,0,B,[],0,3,0,0,0,FO,0,B,[Dv],0,3,0,0,0,AJ$,0,B,[],0,3,0,0,0,AHC,0,B,[Dv],0,3,0,0,0,Zc,0,B,[W],0,3,0,0,0,Zb,0,B,[W],0,3,0,0,["g",A_c(APs)],Za,0,
B,[W],0,3,0,0,["g",A_c(AOK)],AMY,0,B,[],0,3,0,0,0]);
$rt_metadata([Y_,0,B,[T],0,3,0,0,["e",A_b(AY8)],Zg,0,B,[T],0,3,0,0,["e",A_b(A1C)],Zf,0,B,[T],0,3,0,0,["e",A_b(A8q)],Ze,0,B,[T],0,3,0,0,["e",A_b(ATq)],Zd,0,B,[T],0,3,0,0,["e",A_b(AVn)],Y$,0,B,[T],0,3,0,0,["e",A_b(A7O)],Ww,0,B,[T],0,3,0,0,["e",A_b(ATs)],Wx,0,B,[T],0,3,0,0,["e",A_b(A4D)],AG_,0,B,[],3,3,0,0,0,AB2,"Scene1$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(AU1)],AB1,"Scene1$<init>$lambda$_0_1",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(AYw)],Vp,"Window",25,B,[],0,3,[0,0,0],0,0,KU,0,B,[],0,3,0,0,0,FI,0,
B,[],0,3,0,0,0,N$,0,FI,[],0,3,0,0,0,ACY,0,FI,[],0,3,0,0,0,AAG,0,FI,[],0,3,0,0,0,GB,0,B,[],3,3,0,0,0,T5,0,B,[],3,3,0,0,0,B4,"V4f",30,B,[],0,3,[0,0,0],0,["bQ",A_c(AYg),"K",A_b(AP2)],JD,0,B,[],3,3,0,0,0,AK4,0,EH,[Ei,C4,JD],0,3,0,0,["qG",A_c(A2G),"jg",A_c(BK),"c$",A_b(A4k),"qJ",A_c(BA),"pr",A_d(AMc),"m6",A_c(E3),"r0",A_c(AJA),"jU",A_b(I1),"vO",A_d(ALf),"fH",A_c(FP),"K",A_b(AM3)],Ii,0,B,[],0,3,0,0,0,Mb,0,B,[],0,3,0,0,0,Li,"GL$Texture",10,B,[Dv],0,3,[AK_,0,"Texture"],0,["bW",A_b(AIZ)],AAw,0,B,[],3,0,0,0,0,Pz,0,B,
[],3,3,0,0,0,AAP,"UiContext$<init>$lambda$_0_0",24,B,[T],0,3,[0,0,0],0,["e",A_b(A2b)],AAO,"UiContext$<init>$lambda$_0_1",24,B,[T],0,3,[0,0,0],0,["e",A_b(AYR)],ANN,0,B,[],0,3,0,0,0,Va,0,B,[],0,3,0,0,0,Hr,0,B,[],1,3,0,0,0,ABK,0,Hr,[],0,3,0,0,["vw",A_c(B9)],ABU,0,B,[Pz],0,3,0,0,0,HH,0,B,[CL],0,3,0,0,0,Oy,"NavigationContext",11,B,[],0,3,[0,0,0],0,0,DR,"CodeLine",11,B,[],0,3,[0,0,0],0,["K",A_b(A4y)],AAd,0,B,[],0,3,0,0,0,LZ,0,Et,[Ei,C4],0,3,0,0,0,CB,"CodeElement",11,B,[],0,3,[0,0,0],0,["K",A_b(AHV)],Ov,0,LZ,[],0,
3,0,0,0,ABR,0,B,[],0,3,0,0,0,AN5,"Interval",17,B,[CL],0,3,[0,0,0],0,["bQ",A_c(AWu),"K",A_b(AKQ),"nc",A_c(A0k)],WK,0,B,[GG],0,3,0,0,["rd",A_d(ATv)],ABi,"IntervalNode",19,B,[],0,3,[0,0,0],0,["K",A_b(AO4),"bQ",A_c(APP)],Hp,0,B,[JX,Ei],0,0,0,0,["bQ",A_c(A0N),"K",A_b(AQs)],Im,"HashMap$HashEntry",1,Hp,[],0,0,[LZ,0,0],0,0,AHR,0,B,[],4,3,0,0,0,U$,0,B,[],0,0,0,0,0,PS,0,B,[JB],0,3,0,0,["bl",A_c(AX7)]]);
$rt_metadata([PU,0,B,[Ci],0,3,0,0,["bl",A_c(AXq)],PT,0,B,[Ci],0,3,0,0,["bl",A_c(AZB)],Jr,0,B,[],0,3,0,0,0,K7,0,Cg,[EW,E2],0,3,0,0,["gy",A_c(A2j),"cI",A_c(A6b),"bT",A_b(AR2),"hK",A_b(A7D),"b9",A_d(AOq),"ei",A_c(A0$)],AKK,0,CA,[],0,3,0,0,["cI",A_c(AOQ),"bT",A_b(AQL),"b9",A_d(ATc)],ADj,0,CA,[],0,3,0,0,["cI",A_c(AUP),"bT",A_b(AZ_),"b9",A_d(A1t)],Zm,"ToolbarDemo",16,Cg,[CN,CK],0,3,[0,0,0],0,["cA",A_d(AXe),"dX",A_d(AO2),"eq",A_d(ASF),"b9",A_d(ARm),"bT",A_b(A04),"b0",A_c(ATe),"cU",A_e(APt)],ACJ,"FindUsagesDemo",16,
Cg,[CK],0,3,[0,0,0],0,["eq",A_d(AQA),"b9",A_d(APJ)],YK,"RegionTextureAllocatorDemo",11,If,[CN],0,3,[0,0,0],0,["b0",A_c(A2M),"cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"bT",A_b(A5I),"cI",A_c(AOI)],Uk,0,CA,[],0,3,0,0,["bT",A_b(AOo),"b9",A_d(AYM)],LJ,0,Cg,[],0,3,0,0,0,Y3,0,Cg,[],0,3,0,0,0,Eq,0,CA,[],0,3,0,0,["bT",A_b(ACa),"b9",A_d(Uf)],Ym,"RenderTexture",11,Eq,[],0,3,0,0,["cI",A_c(ASe),"bT",A_b(A0T),"b9",A_d(A7x)],Ui,"ScissorDemo",11,Eq,[],0,3,0,0,["bT",A_b(A8c),"b9",A_d(ARY)],ACu,0,CA,[],0,3,0,0,["bT",A_b(AXt),
"b9",A_d(A06),"cI",A_c(A5n)],KX,"ClipboardTest",11,Eq,[CN],0,3,[0,0,0],0,["b0",A_c(A2M),"cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(AS4)],T2,"CodiconDemo",11,Eq,[],0,3,0,0,["bT",A_b(AYf)],Hw,0,CA,[CN],1,3,0,0,["b0",A_c(A2M),"cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"bT",A_b(AHJ)],UV,"LineShaderDemo1",11,Hw,[],0,3,[0,0,0],0,["cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"b9",A_d(A49),"b0",A_c(A5$)],UU,"LineShaderDemo2",11,Hw,[],0,3,[0,0,0],0,["cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"b0",A_c(A7P),"bT",A_b(AQv),"b9",A_d(APb)],XR,
"WindowsDemo",13,Cg,[CK],0,3,[0,0,0],0,["eq",A_d(ASE)],EE,"WindowDemo",24,Cg,[CK],0,3,[0,0,0],0,["j3",A_b(A0A),"qs",A_b(ATn),"oM",A_c(ALi),"eq",A_d(A5R)],Ry,"EditorInViewDemo",11,EE,[CK,EW,E2],0,3,[0,0,0],0,["j3",A_b(APN),"qs",A_b(AZb),"oM",A_c(A7R),"ei",A_c(AWm),"gy",A_c(AVI)],YP,"UiContext$1",24,B,[CN],0,0,[Vc,0,0],0,["cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"b0",A_c(A5F)],AAE,"FileViewDemo",24,EE,[CK],0,3,[0,0,0],0,["j3",A_b(A3S),"oM",A_c(A5g)],ABp,"FolderTransferDemo",29,EE,[CK],0,3,[0,0,0],0,["j3",A_b(AR3)],Vu,
"FolderDiff",29,Cg,[CK],0,3,[0,0,0],0,["eq",A_d(AXX)],AEL,"SinDemo",11,CA,[CN],0,3,[0,0,0],0,["b0",A_c(A2M),"cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"b9",A_d(A7K),"bT",A_b(A2a),"cI",A_c(AV_)],Tb,"ProjectViewDemo",11,Cg,[CK],0,3,[0,0,0],0,["eq",A_d(A08)],QC,"DiffMiddleDemo",29,EE,[CK],0,3,[0,0,0],0,["j3",A_b(A1o)],PK,0,K7,[],0,3,0,0,["hK",A_b(A0d)],Ss,"EditorWindowDemo",11,Cg,[CK],0,3,[0,0,0],0,["eq",A_d(A1Q)],Yn,0,Cg,[EW],0,3,0,0,["b9",A_d(AQy)],KK,0,B,[],0,3,0,0,0,AH_,0,B,[],0,3,0,0,0,AG$,0,B,[],3,3,0,0,0,AKE,
0,B,[],0,3,0,0,0,AIz,0,B,[],3,3,0,0,0,AKk,0,B,[],0,3,0,0,0,ANW,0,B,[],0,3,0,0,0,AAj,0,B,[W],0,3,0,0,["g",A_c(A3e)],AAi,"Editor0$<init>$lambda$_0_1",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AUr)],AKe,"TextRect",11,KU,[],0,3,[0,0,0],0,0,Vv,"DemoScene1$MyInputListener",11,B,[CN],0,0,[AKK,0,"MyInputListener"],0,["b0",A_c(A0a),"cU",A_e(AOB),"cA",A_d(AZ4),"dX",A_d(AZt)],AAM,"DemoScene1$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(A1N)],AAL,"DemoScene1$<init>$lambda$_0_1",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(ARw)],AAK,
"DemoScene1$<init>$lambda$_0_2",11,B,[FU],0,3,[0,0,0],0,["fy",A_d(A2Q)],AAJ,"DemoScene1$<init>$lambda$_0_3",11,B,[T],0,3,[0,0,0],0,["e",A_b(AY2)],AAI,"DemoScene1$<init>$lambda$_0_4",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AUX)]]);
$rt_metadata([AAH,"DemoScene1$<init>$lambda$_0_5",11,B,[E0],0,3,[0,0,0],0,["dV",A_e(A6E)],HN,0,B4,[],0,3,0,0,0,AJd,0,B,[],3,3,0,0,0,Yk,"CleartypeColors$MyInputListener",11,B,[CN],0,0,[ADj,0,"MyInputListener"],0,["b0",A_c(A2M),"cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(AQ9)],Yg,0,B,[],0,3,0,0,0,AIA,"Toolbar",24,B,[],0,3,[0,0,0],0,0,ALB,0,B,[],0,3,0,0,["bQ",A_c(A5O)],ADO,"ToolbarDemo$<init>$lambda$_0_0",16,B,[Cn],0,3,[0,0,0],0,["br",A_c(ATX)],ADK,"ToolbarDemo$<init>$lambda$_0_1",16,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AWq)],ADL,
0,B,[T],0,3,0,0,["e",A_b(A8j)],ADM,0,B,[T],0,3,0,0,["e",A_b(APm)],Bt,"ToolbarItem",24,B,[],0,3,[0,0,0],0,0,V8,"FindUsagesDemo$<init>$lambda$_0_0",16,B,[Cn],0,3,[0,0,0],0,["br",A_c(AYh)],V9,"FindUsagesDemo$<init>$lambda$_0_1",16,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AO3)],AJW,0,B,[],0,3,0,0,0,P2,"RegionTextureAllocatorDemo$<init>$lambda$_0_0",11,B,[CK],0,3,[0,0,0],0,["eq",A_d(AUE)],P1,"RegionTextureAllocatorDemo$<init>$lambda$_0_1",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(ASg)],ABF,0,B,[],3,3,0,0,0,AKL,0,B,[ABF],0,3,0,0,0,Yw,
"ManyTexturesLineNumbersScene$LineNumbersInputListener",11,B,[CN],0,0,[Uk,0,"LineNumbersInputListener"],0,["cU",A_e(A45),"cA",A_d(AZd),"dX",A_d(AOY),"b0",A_c(A1h)],AB3,"ManyTexturesLineNumbersScene$<init>$lambda$_0_0",11,B,[E0],0,3,[0,0,0],0,["dV",A_e(AUC)],RT,"SelectFileTest$<init>$lambda$_0_0",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AUp)],RS,"SelectFileTest$<init>$lambda$_0_1",11,B,[CK],0,3,[0,0,0],0,["eq",A_d(AYm)],SX,"WorkerTest$<init>$lambda$_0_0",14,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AYi)],SW,0,B,[W],0,3,0,0,["g",
A_c(A5r)],ADW,"RenderTexture$MyInputListener",11,B,[CN],0,0,[Ym,0,"MyInputListener"],0,["dX",A_d(AO2),"cU",A_e(A45),"b0",A_c(A4x),"cA",A_d(AX6)],AII,0,B,[],0,3,0,0,0,Do,0,B,[],3,3,0,F5,0,AAk,"TextureRegionTestScene$MListener",11,B,[CN],0,0,[ACu,0,"MListener"],0,["cU",A_e(A45),"cA",A_d(ASu),"dX",A_d(AZq),"b0",A_c(ARc)],XJ,"TextureRegionTestScene$<init>$lambda$_0_0",11,B,[E0],0,3,[0,0,0],0,["dV",A_e(A6B)],AFw,"ClipboardTest$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(ASv)],AFv,"ClipboardTest$<init>$lambda$_0_1",
11,B,[FU],0,3,[0,0,0],0,["fy",A_d(A2X)],AFu,"ClipboardTest$<init>$lambda$_0_2",11,B,[FU],0,3,[0,0,0],0,["fy",A_d(AQu)],AFt,"ClipboardTest$<init>$lambda$_0_3",11,B,[Gh],0,3,[0,0,0],0,["b1",A_b(ATN)],AFx,"ClipboardTest$<init>$lambda$_0_4",11,B,[Gh],0,3,[0,0,0],0,["b1",A_b(A54)],TG,"CodiconDemo$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(AQj)],Qp,"WindowsDemo$<init>$lambda$_0_0",13,B,[Cn],0,3,[0,0,0],0,["br",A_c(A3Y)],Qr,"WindowsDemo$<init>$lambda$_0_1",13,B,[CQ],0,3,[0,0,0],0,["bI",A_c(A17)],Qs,0,B,
[W],0,3,0,0,["g",A_c(A4v)],Qt,"EditorInViewDemo$<init>$lambda$_0_1",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(A6p)],RV,"FolderTransferDemo$<init>$lambda$_0_0",29,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AVl)],RU,"FolderTransferDemo$<init>$lambda$_0_1",29,B,[Cn],0,3,[0,0,0],0,["br",A_c(A2w)],AC4,"FolderDiff$<init>$lambda$_0_0",29,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AVy)],R2,"SinDemo$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(APc)],Zn,"ProjectViewDemo$<init>$lambda$_0_0",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AQR)],Wd,"DiffMiddleDemo$<init>$lambda$_0_0",
29,B,[CQ],0,3,[0,0,0],0,["bI",A_c(AVz)],Wc,"DiffMiddleDemo$<init>$lambda$_0_1",29,B,[Cn],0,3,[0,0,0],0,["br",A_c(A6s)],AJJ,0,B,[],3,3,0,0,0,Vj,"Editor1$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(A4K)],Q1,0,B,[W],0,3,0,0,["g",A_c(A6G)]]);
$rt_metadata([Q0,"EditorWindowDemo$<init>$lambda$_0_1",11,B,[CQ],0,3,[0,0,0],0,["bI",A_c(A1i)],Du,0,B,[],3,3,0,ARj,0,Cu,0,CE,[],12,3,0,VB,0,KZ,0,B,[],0,3,0,0,0,Jt,0,B,[],0,3,0,0,0,AMw,0,B,[],0,3,0,0,0,DZ,0,B,[],3,3,0,AZa,0,ZS,0,B,[BY],3,3,0,0,0,Z5,0,B,[ZS],0,3,0,0,["DA",A_d(A1K)],ZT,0,B,[BY],3,3,0,0,0,Z3,0,B,[ZT],0,3,0,0,["DA",A_d(A2t)],AHu,0,B,[],0,3,0,0,0,AKJ,0,B,[BY],3,3,0,0,0,WY,0,B,[],0,3,0,0,0,D4,0,B,[],3,3,0,A3w,0,Ir,0,B,[],3,3,0,0,0,Q_,0,B,[Ir],0,3,0,0,["yf",A_e(A5f)],Ra,0,B,[Ir],0,3,0,0,0,Vx,0,B,[W],
0,3,0,0,["g",A_c(A3$)],QM,0,B,[W],0,3,0,0,["g",A_c(AQ3)],QL,0,B,[W],0,3,0,0,["g",A_c(APC)],QI,0,B,[W],0,3,0,0,["g",A_c(AOL)],QG,0,B,[W],0,3,0,0,["g",A_c(A7Q)],AKp,0,B,[],0,3,0,0,0,Wz,0,B,[W],0,3,0,0,["g",A_c(A2u)],AEn,"LineShaderDemo0$<init>$lambda$_0_0",11,B,[Cn],0,3,[0,0,0],0,["br",A_c(AYY)],ANs,0,B,[],0,3,0,0,["bQ",A_c(A0E)],JC,0,B,[],0,3,0,0,0,KV,0,B,[],4,3,0,0,0,ALb,0,B,[],0,3,0,0,0,Cy,0,CE,[],12,3,0,AHH,0,AN1,0,B,[],0,3,0,0,0,AHZ,0,B,[BY],4,3,0,0,0,ADa,0,DL,[CL],0,3,0,0,0,AN$,0,B,[],0,3,0,0,0,AGI,0,B,
[],3,3,0,0,0,C$,0,B,[BY],1,3,0,0,0,AMP,0,C$,[],1,3,0,0,0,ANd,0,C$,[],1,3,0,0,0,ALs,0,C$,[],1,3,0,0,0,ALD,0,C$,[],1,3,0,0,0,ANv,0,C$,[],1,3,0,0,0,W9,0,B,[T],0,3,0,0,["e",A_b(ASW)],Ic,0,CE,[],12,3,0,AID,0,Qy,0,B,[BD],0,3,0,0,["ba",A_c(AZr)],ABv,0,B,[],0,3,0,0,0,AK9,0,B,[],0,3,0,0,0,ED,0,B,[EW],1,3,0,0,0,N9,"FolderDiffWindow",29,ED,[],0,3,[0,0,0],0,["bW",A_b(APO),"m7",A_c(A2d)],Zx,0,B,[CJ],0,3,0,0,["b1",A_b(A41)]]);
$rt_metadata([ALd,0,B,[],3,3,0,0,0,AEo,"EditorComponent$registerMouseScroll$lambda$_1_0",11,B,[E0],0,3,[0,0,0],0,["dV",A_e(AY5)],Zu,"ScissorDemo$1",11,B,[CN],0,0,[Ui,0,0],0,["cA",A_d(AXe),"dX",A_d(AO2),"cU",A_e(A45),"b0",A_c(A8m)],AHX,0,B,[BY],1,3,0,0,0,T3,0,B,[],3,3,0,0,0,AEu,0,B,[W],0,3,0,0,["g",A_c(A0n)],AJE,"PopupMenu",24,B,[CK,Fs,Dv],0,3,[0,0,0],0,["xW",A_b(A35),"vX",A_b(ARv),"fy",A_d(AOp),"A$",A_b(AYv),"eq",A_d(A7X),"br",A_c(ATC),"bW",A_b(AVF)],Ip,0,CH,[],1,3,0,0,["bW",A_b(A30),"dT",A_c(AUh),"cI",A_c(AZo),
"dW",A_e(AQD),"cU",A_e(A6P),"cA",A_d(AWY),"dX",A_d(A60),"b0",A_c(A7t),"dV",A_e(ARg),"kU",A_b(A7a)],IM,0,Ip,[],1,0,0,0,["DI",A_b(ATp)],AId,0,IM,[EW],0,0,0,0,0,HO,0,B,[],0,3,0,0,0,Db,"FileTreeNode",24,HO,[],0,3,[0,0,0],0,0,Ud,0,B,[T],0,3,0,0,["e",A_b(AZ$)],Ub,0,B,[T],0,3,0,0,["e",A_b(AYH)],Uc,0,B,[T],0,3,0,0,["e",A_b(A2m)],T_,0,B,[T],0,3,0,0,["e",A_b(AWJ)],Oc,0,B,[],0,3,0,J9,0,ABA,0,B,[],0,3,0,0,0,Ua,0,B,[T],0,3,0,0,0,YU,0,B,[W],0,3,0,0,["g",A_c(ATj)],WN,0,B,[W],0,3,0,0,["g",A_c(A7A)],Sb,0,B,[W],0,3,0,0,["g",
A_c(AZX)],PM,0,B,[CJ],0,3,0,0,["b1",A_b(ARF)],V1,0,B,[W],0,3,0,0,["g",A_c(A68)],Xy,0,B,[T],0,3,0,0,["e",A_b(A5y)],FL,0,CH,[],0,3,0,0,0,L3,0,FL,[Fs],0,3,0,0,["xW",A_b(A35),"vX",A_b(ARv),"A$",A_b(AYv),"bW",A_b(AVe),"mh",A_d(APp),"dT",A_c(A3t),"cU",A_e(A6A),"cA",A_d(AQn),"br",A_c(ARW),"fy",A_d(A1F)],AL6,0,L3,[],0,3,0,0,["xW",A_b(A35),"vX",A_b(ARv),"A$",A_b(AYv)],AHG,0,CH,[],0,3,0,0,["bW",A_b(AWv),"dW",A_e(ARU),"dT",A_c(A5o),"cU",A_e(AWV),"cA",A_d(AWy),"dX",A_d(AUH),"b0",A_c(AUq),"dV",A_e(A1q),"io",A_b(AKh)],AIt,
0,B,[M6],0,3,0,0,["xW",A_b(A35),"vX",A_b(ARv),"fy",A_d(AOp),"A$",A_b(AYv),"l1",A_b(AWH),"lb",A_b(A6M),"h_",A_c(AXI),"lB",A_b(ATd),"mH",A_b(AZv),"qq",A_d(ATS),"re",A_c(A3N),"qx",A_b(Ni)],AGi,0,B,[],0,3,0,0,0,SM,0,B,[W],0,3,0,0,["g",A_c(A3W)],Wt,0,B,[T],0,3,0,0,["e",A_b(API)],ABd,0,B,[T],0,3,0,0,["e",A_b(AWZ)],ABc,0,B,[T],0,3,0,0,["e",A_b(A29)],ABf,0,B,[T],0,3,0,0,["e",A_b(A4B)],ABe,0,B,[T],0,3,0,0,["e",A_b(AWW)],Tp,0,B,[T],0,3,0,0,["e",A_b(A3p)],Y2,0,B,[T],0,3,0,0,["e",A_b(A64)],Y0,0,B,[T],0,3,0,0,["e",A_b(ARi)],YZ,
0,B,[T],0,3,0,0,["e",A_b(APa)],Y1,0,B,[T],0,3,0,0,["e",A_b(A8n)],AGn,0,B,[],3,3,0,0,0,ZU,0,B,[T],0,3,0,0,["e",A_b(ATH)],AAQ,0,B,[W],0,3,0,0,["g",A_c(AZF)],JL,"DiffRange",15,B,[],0,3,[0,0,0],0,0,VQ,0,B,[],0,3,0,0,0,RE,0,B,[GG],0,3,0,0,["rd",A_d(AQt)],AMK,0,B,[],3,3,0,0,0,Zl,0,B,[T],0,3,0,0,["e",A_b(AZM)]]);
$rt_metadata([Rp,0,B,[T],0,3,0,0,["e",A_b(A1D)],Rr,0,B,[T],0,3,0,0,["e",A_b(A7j)],Rq,0,B,[T],0,3,0,0,["e",A_b(ATT)],AGl,0,B,[T],0,3,0,0,["e",A_b(A2U)],Mz,0,B,[],3,3,0,0,0,Sk,0,B,[Mz],0,3,0,0,["A4",A_c(A0m)],ANZ,0,Hr,[],0,0,0,0,["vw",A_c(A7$)],QX,0,B,[W],0,3,0,0,["g",A_c(AO0)],QW,0,B,[W],0,3,0,0,["g",A_c(APg)],Qm,0,B,[BD],0,3,0,0,["ba",A_c(A6J)],Y5,0,B,[T],0,3,0,0,["e",A_b(AX0)],CS,0,Bu,[],0,3,0,0,0,AM1,0,FT,[],0,3,0,0,0,AGM,0,B,[],0,3,0,0,0,AFM,0,B,[W],0,3,0,0,["g",A_c(AYX)],AJI,0,B,[],0,3,0,0,0,ABX,0,B,[BD],
0,3,0,0,0,AI5,0,B,[],0,3,0,0,0,RW,"LineNumbersTexture",11,B,[Dv],0,3,[0,0,0],0,0,TN,0,B,[W],0,3,0,0,["g",A_c(A1b)],TM,0,B,[W],0,3,0,0,["g",A_c(A65)],SH,0,B,[BD],0,3,0,0,0,Su,0,B,[CJ],0,3,0,0,["b1",A_b(ATA)],Sv,0,B,[CJ],0,3,0,0,["b1",A_b(AQ0)],O8,0,BL,[],0,3,0,0,0,Te,0,B,[CJ],0,3,0,0,["b1",A_b(A6v)],Xr,0,B,[W],0,3,0,0,["g",A_c(AXm)],YM,0,B,[CJ],0,3,0,0,["b1",A_b(A5d)],Vz,0,B,[Ci],0,3,0,0,["bl",A_c(ASP)],AIa,0,B,[BY],1,3,0,0,0,X7,0,B,[Ci],0,3,0,0,["bl",A_c(AVH)],DX,0,Bu,[],0,3,0,0,0,AET,0,B,[T],0,3,0,0,["e",A_b(A7B)],GF,
0,JE,[],0,3,0,0,0,AFJ,0,FT,[],0,3,0,0,0,AHc,0,B,[],3,3,0,0,0,Xe,0,B,[W],0,3,0,0,["g",A_c(AXY)],AEX,"Pos",18,B,[CL],0,3,[0,0,0],0,["bQ",A_c(AOM),"q2",A_b(AVW),"K",A_b(APi),"nc",A_c(A4T)],AF6,0,B,[Ci],0,3,0,0,["bl",A_c(A5G)],AF5,0,B,[Ci],0,3,0,0,["bl",A_c(A0W)],AFr,0,B,[Ci],0,3,0,0,["bl",A_c(A1T)],W1,0,B,[CJ],0,3,0,0,["b1",A_b(AYa)],LA,0,B,[],3,3,0,0,["sK",A_d(APz)],Mo,0,ED,[LA],0,3,0,0,["m7",A_c(A0p),"bW",A_b(A2V),"ei",A_c(A1e),"Bk",A_c(A1c),"yW",A_c(AWt),"wk",A_c(A4n),"sK",A_d(A3Q)],AFj,0,B,[CJ],0,3,0,0,["b1",
A_b(AX3)],AEb,"EditorWindow",11,ED,[Cn],0,3,[0,0,0],0,["ei",A_c(AOb),"bW",A_b(APX),"m7",A_c(A1X),"br",A_c(A3M)],Tl,0,B,[CJ],0,3,0,0,["b1",A_b(AUt)],AF2,0,DL,[CL],0,3,0,0,0,GZ,0,B,[],0,0,0,0,0,Kb,0,B,[],4,3,0,0,0]);
$rt_metadata([VV,0,B,[],0,3,0,0,0,VD,0,B,[T],0,3,0,0,["e",A_b(AO5)],VE,0,B,[T],0,3,0,0,["e",A_b(ARe)],VG,0,B,[T],0,3,0,0,["e",A_b(A67)],VH,0,B,[T],0,3,0,0,["e",A_b(ATJ)],VI,0,B,[T],0,3,0,0,["e",A_b(AV6)],WL,0,B,[Ci],0,3,0,0,["bl",A_c(ASB)],Xu,0,B,[],3,3,0,A9p,0,Pf,0,B,[],1,3,0,0,0,AH8,0,C$,[],1,3,0,0,0,U7,0,B,[CF],0,3,0,0,["cM",A_c(AZe)],SF,0,FL,[Fs],0,3,0,0,["xW",A_b(A35),"vX",A_b(ARv),"fy",A_d(AOp),"A$",A_b(AYv),"bW",A_b(A66),"mh",A_d(A03),"dT",A_c(AZc),"pX",A_c(A4R),"sH",A_c(A55),"b0",A_c(ATr),"cA",A_d(ARo),
"cU",A_e(AVN),"br",A_c(A6h)],WU,0,B,[T],0,3,0,0,["e",A_b(AXL)],AFU,0,B,[W],0,3,0,0,["g",A_c(AQE)],AFW,0,B,[W],0,3,0,0,["g",A_c(AON)],Rb,0,FL,[],0,3,0,0,["io",A_b(AXU),"pX",A_c(A4X),"dT",A_c(AYd),"cA",A_d(AT1)],AFV,0,B,[T],0,3,0,0,["e",A_b(AWM)],V5,0,CH,[],0,3,0,0,0,R8,0,Ip,[E2],0,3,0,0,["DI",A_b(ASQ),"io",A_b(A1$)],ACB,0,B,[T],0,3,0,0,["e",A_b(AQO)],ACA,0,B,[T],0,3,0,0,["e",A_b(AVx)],ACC,0,B,[T],0,3,0,0,["e",A_b(A3K)],AFq,0,B,[T],0,3,0,0,["e",A_b(ASo)],AFp,0,B,[T],0,3,0,0,["e",A_b(AWR)],AB5,0,DL,[CL],0,3,0,
0,0,AD5,0,B,[],0,3,0,0,0,ADF,0,B,[],0,3,0,0,0,KB,0,B,[],0,3,0,0,0,Pq,0,B,[],3,3,0,0,0,Qz,0,CH,[],0,3,0,0,["dT",A_c(AOS)],ADN,0,B,[],0,3,0,0,0,Ue,0,B,[T],0,3,0,0,["e",A_b(ATh)],Vk,0,B,[],3,3,0,ASn,0,LR,"FindUsagesItemData",12,B,[],0,3,[0,0,0],0,0,Y4,0,B,[],0,3,0,0,0,VR,0,B,[W],0,3,0,0,["g",A_c(A7C)],AFo,0,B,[W],0,3,0,0,0,AN4,0,B,[],0,3,0,0,0,PL,0,B,[W],0,3,0,0,["g",A_c(AYE)],AER,0,B,[W],0,3,0,0,["g",A_c(A3F)],ADv,0,B,[W],0,3,0,0,["g",A_c(ATV)],FC,0,B,[],3,3,0,0,0,YX,0,B,[FC],0,0,0,0,["cY",A_b(Cd),"ck",A_b(Ce),
"qn",A_b(ABl)],Tt,0,B,[T],0,3,0,0,["e",A_b(A2g)],AE7,0,B,[T],0,3,0,0,["e",A_b(AXV)],LW,0,Pf,[],1,3,0,0,0,UG,0,LW,[],0,3,0,0,0,U2,0,B,[T],0,3,0,0,["e",A_b(AXg)],AHv,0,B,[],0,3,0,0,0,Tw,0,B,[T],0,3,0,0,["e",A_b(AVR)]]);
$rt_metadata([Tv,0,B,[T],0,3,0,0,["e",A_b(A1s)],Ty,0,B,[T],0,3,0,0,["e",A_b(A63)],Tx,0,B,[T],0,3,0,0,["e",A_b(AYP)],ADf,0,B,[T],0,3,0,0,["e",A_b(AOi)],ADg,0,B,[T],0,3,0,0,["e",A_b(AR6)],HB,"Diff",11,B,[],0,3,[0,0,0],0,0,RO,0,B,[],0,3,0,0,0,Ye,0,B,[T],0,3,0,0,["e",A_b(A1A)],Yd,0,B,[DU],0,3,0,0,0,AJ8,0,B,[],0,3,0,0,0,AJB,0,B,[],0,3,0,0,0,Ug,0,Et,[Ei,C4],0,3,0,0,0,Wp,0,B,[],0,3,0,0,0,V6,0,B,[],0,3,0,0,0,AGg,0,B,[DU],0,3,0,0,0,VC,0,B,[W],0,3,0,0,["g",A_c(AZ6)],Xz,0,B,[W],0,3,0,0,["g",A_c(A3G)],Uy,0,B,[],0,3,0,0,
0,AAl,0,DL,[CL],0,3,0,0,0,KF,0,B,[],4,3,0,0,0,AD7,0,B,[Ir],0,3,0,0,["yf",A_e(ATm)],UO,0,B,[GB],0,3,0,0,["rj",A_d(ARJ)],Sj,0,B,[W],0,3,0,0,["g",A_c(AZN)],Sz,0,B,[T],0,3,0,0,["e",A_b(A3J)],VM,0,B,[GB],0,3,0,0,["rj",A_d(AVQ)],Yt,0,B,[T],0,3,0,0,["e",A_b(A3D)],K1,0,DX,[],0,3,0,0,0,Kg,0,Bu,[],0,3,0,0,0,O2,0,Bu,[],0,3,0,0,0,AKq,0,B,[W],0,3,0,0,0,AF3,0,B,[W],0,3,0,0,["g",A_c(A1v)],AAe,0,B,[],1,3,0,0,0,PR,0,B,[W],0,3,0,0,0,AA_,0,B,[M7],3,3,0,0,0,Qk,0,B,[AA_],3,3,0,0,0,F8,0,B,[Qk],1,3,0,0,0,ACd,0,F8,[],0,3,0,0,0,SK,
0,B,[],3,3,0,0,0,AFS,0,B,[W],0,3,0,0,["g",A_c(APr)],AIj,0,B,[],3,3,0,0,0,J_,0,Hp,[],0,0,0,0,0,IF,0,Bu,[],0,3,0,0,0,AEK,0,B,[W],0,3,0,0,["g",A_c(A6g)],AHP,0,F8,[],0,3,0,0,0,AM8,0,B,[],0,3,0,0,0,NO,"FileDiffWindow",29,ED,[Fs],0,3,[0,0,0],0,["xW",A_b(A35),"vX",A_b(ARv),"fy",A_d(AOp),"A$",A_b(AYv),"ei",A_c(A5M),"bW",A_b(A6R),"m7",A_c(AZI),"br",A_c(A6S)],XY,0,B,[CJ],0,3,0,0,["b1",A_b(A6e)],Rh,0,B,[CJ],0,3,0,0,["b1",A_b(ARK)],Yh,0,B,[CJ],0,3,0,0,["b1",A_b(AQl)],Qb,0,B,[W],0,3,0,0,["g",A_c(A70)]]);
$rt_metadata([VS,0,B,[W],0,3,0,0,["g",A_c(A1x)],Qq,0,B,[W],0,3,0,0,["g",A_c(AT2)],AAo,0,B,[W],0,3,0,0,["g",A_c(AWP)],Gm,"ScopeNode",21,B,[],0,3,[0,0,0],0,0,K_,"DeclNode",23,B,[],0,3,[0,0,0],0,["K",A_b(A5U),"bQ",A_c(AMH)],Fr,"RefNode",22,B,[],0,3,[0,0,0],0,["K",A_b(AXx),"bQ",A_c(AK5)],Io,0,B,[],3,3,0,0,0,UQ,0,B,[Io],0,3,0,0,["mD",A_e(A3v)],RY,"InferenceNode",21,B,[],0,3,[0,0,0],0,0,UR,0,B,[Io],0,3,0,0,["mD",A_e(A18)],Jo,0,B,[C4,CL],0,3,0,0,0,Lt,0,B,[],3,3,0,0,0,Ts,0,B,[Lt],0,3,0,0,0,NN,0,B,[Lt],3,3,0,0,0,AIk,
0,B,[NN],0,3,0,0,0,TS,0,B,[Io],0,3,0,0,["mD",A_e(A36)],TR,0,B,[DU],0,3,0,0,["bI",A_c(AXG)],TQ,0,B,[DU],0,3,0,0,["bI",A_c(AVG)],TU,0,B,[Io],0,3,0,0,["mD",A_e(A3B)],AFI,0,B,[W],0,3,0,0,["g",A_c(AYz)],AGW,0,B,[W],0,3,0,0,0,Xh,0,B,[BD],0,3,0,0,0,F9,0,B,[],0,3,0,0,0,AK2,0,B,[],0,3,0,0,0,Ws,0,IM,[EW],0,0,0,0,0,XQ,0,B,[T],0,3,0,0,["e",A_b(A2r)],XP,0,B,[T],0,3,0,0,["e",A_b(ATw)],AHk,0,B,[],0,3,0,0,0,AOa,0,B,[],0,3,0,0,0,AFK,0,B,[T],0,3,0,0,["e",A_b(AZw)],AFL,0,B,[T],0,3,0,0,["e",A_b(A2f)],H_,"ExprRefNode",22,Fr,[],
0,3,[0,0,0],0,["K",A_b(A3E)],KO,"MethodCallNode",22,Fr,[],0,3,[0,0,0],0,["bQ",A_c(A6_)],XM,0,B,[W],0,3,0,0,["g",A_c(A3_)],JV,"QualifiedRefNode",22,Fr,[],0,3,[0,0,0],0,["K",A_b(AUs),"bQ",A_c(AZj)],XN,0,B,[W],0,3,0,0,["g",A_c(ARs)],AJ6,0,B,[CL],0,3,0,0,["bQ",A_c(AUM),"K",A_b(AMG)],Xa,0,B,[T],0,3,0,0,["e",A_b(AUA)],Zy,0,B,[W],0,3,0,0,["g",A_c(AUc)],ACW,0,B,[T],0,3,0,0,["e",A_b(APo)],XB,0,B,[W],0,3,0,0,["g",A_c(ARN)],Ot,"FakeNode",21,Gm,[],0,3,[0,0,0],0,0,LT,"MemberNode",21,Gm,[],0,3,[0,0,0],0,0,PQ,0,B,[W],0,3,
0,0,["g",A_c(A6V)],WG,0,B,[W],0,3,0,0,["g",A_c(AZz)],Rg,0,B,[W],0,3,0,0,["g",A_c(A3u)],Rl,0,B,[H0],3,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],EJ,0,FW,[Rl],1,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],N7,0,EJ,[],1,0,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],V2,0,N7,[],0,0,0,0,["fH",A_c(AYG),"qG",A_c(A2G)]]);
$rt_metadata([ON,0,Et,[],1,0,0,0,0,VZ,0,ON,[],0,0,0,0,0,O_,0,EH,[JD],1,0,0,0,["fH",A_c(AYG),"jU",A_b(A0Q),"m6",A_c(AT7),"qG",A_c(AS0)],V0,0,O_,[],0,0,0,0,["fH",A_c(AYG),"jg",A_c(AT_),"c$",A_b(ATg),"ci",A_b(AQV),"e7",A_b(AO8)],VX,0,B,[FC],0,0,0,0,["cY",A_b(AOR),"ck",A_b(A4p),"qn",A_b(AWe)],AAc,0,B,[FC],3,3,0,0,0,VY,0,B,[AAc],0,0,0,0,0,XV,0,B,[GG],0,3,0,0,0,SI,0,B,[DU],0,3,0,0,["bI",A_c(A8r)],ABu,0,B,[C4],4,3,0,0,0,AE3,0,B,[W],0,3,0,0,["g",A_c(AOm)],AE2,0,B,[W],0,3,0,0,["g",A_c(AW3)],ACc,0,B,[W],0,3,0,0,["g",
A_c(AX$)],Z9,0,B,[W],0,3,0,0,["g",A_c(A4q)],ACs,0,B,[T],0,3,0,0,["e",A_b(AZx)],Sh,0,B,[SK],0,3,0,0,0,S1,0,B,[W],0,3,0,0,["g",A_c(ARL)],AG1,0,B,[],0,3,0,0,0,IZ,0,B,[],3,3,0,0,0,QF,0,B,[IZ],0,0,0,0,["oL",A_c(A4Y),"pO",A_c(A2c),"pw",A_b(AWj)],Zh,0,B,[W],0,3,0,0,["g",A_c(ARA)],Zj,0,B,[W],0,3,0,0,["g",A_c(A5l)],AEs,0,B,[DU],0,0,0,0,["bI",A_c(AQ$)],ADQ,0,B,[T],0,3,0,0,["e",A_b(A6i)],Rz,0,EJ,[],0,0,0,0,["qG",A_c(A2G)],Vo,0,EJ,[],0,0,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],RB,0,FW,[],0,0,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],Sd,
0,B,[T],0,3,0,0,["e",A_b(A3h)],XX,0,B,[W],0,3,0,0,["g",A_c(A1k)],VK,0,B,[W],0,3,0,0,["g",A_c(A27)],MY,"MethodNode",23,K_,[],0,3,[0,0,0],0,["bQ",A_c(AZW)],Tc,0,B,[W],0,3,0,0,["g",A_c(A3l)],AEl,0,B,[W],0,3,0,0,["g",A_c(A2Z)],Yi,0,B,[],0,3,0,0,0,S4,0,B,[],0,3,0,0,0,BX,0,B,[],1,0,0,0,["cF",A_e(I_),"cW",A_f(Ji),"jy",A_b(AZ9),"K",A_b(AV0),"X",A_c(AW6),"b$",A_c(A6C),"hb",A_b(A7v),"ff",A_b(K9)],Wy,0,B,[Mz],0,3,0,0,["A4",A_c(Ob)],AGz,0,B,[W],0,3,0,0,["g",A_c(A47)],AGC,0,B,[W],0,3,0,0,["g",A_c(A6w)],R3,0,B,[W],0,3,0,
0,["g",A_c(A2n)],ACy,0,B,[W],0,3,0,0,["g",A_c(AS1)],AGq,0,B,[W],0,3,0,0,["g",A_c(A53)],AGo,0,B,[W],0,3,0,0,["g",A_c(AQc)],AD4,0,B,[IZ],0,3,0,0,["oL",A_c(A5Z),"pO",A_c(AUv),"pw",A_b(A0Z)],TO,0,B,[W],0,3,0,0,0,Yv,0,B,[W],0,3,0,0,["g",A_c(A26)],XL,0,B,[W],0,3,0,0,["g",A_c(A8p)],C8,"FSet",2,BX,[],0,0,[0,0,0],Pr,["c",A_e(APn),"t",A_b(AR9),"O",A_c(APF)],Hx,0,B,[],0,0,0,0,0,KP,0,BU,[],0,3,0,0,0]);
$rt_metadata([FY,0,B,[T],0,3,0,AKi,0,Zv,0,B,[W],0,3,0,0,["g",A_c(AV9)],Tr,"NonCapFSet",2,C8,[],0,0,[0,0,0],0,["c",A_e(AZf),"t",A_b(A0H),"O",A_c(A5u)],AGh,"AheadFSet",2,C8,[],0,0,[0,0,0],0,["c",A_e(A0y),"t",A_b(A2B)],R0,"BehindFSet",2,C8,[],0,0,[0,0,0],0,["c",A_e(APK),"t",A_b(A6u)],Uj,"AtomicFSet",2,C8,[],0,0,[0,0,0],0,["c",A_e(AZi),"t",A_b(AWp),"O",A_c(A4r)],Gv,"FinalSet",2,C8,[],0,0,[0,0,0],0,["c",A_e(AXi),"t",A_b(A0i)],Ch,0,BX,[],1,0,0,0,["c",A_e(A75),"cl",A_b(A6a),"O",A_c(ASG)],AJF,"EmptySet",2,Ch,[],0,0,
[0,0,0],0,["bF",A_d(A5N),"cF",A_e(A1p),"cW",A_f(A0v),"t",A_b(AR$),"O",A_c(AZh)],Ca,"JointSet",2,BX,[],0,0,[0,0,0],0,["c",A_e(ARR),"X",A_c(AU8),"t",A_b(ASR),"b$",A_c(A23),"O",A_c(AVC),"ff",A_b(AP7)],K0,"NonCapJointSet",2,Ca,[],0,0,[0,0,0],0,["c",A_e(AUV),"t",A_b(ATy),"O",A_c(A48)],Em,"AtomicJointSet",2,K0,[],0,0,[0,0,0],0,["c",A_e(A0U),"X",A_c(A4Z),"t",A_b(AOX)],X_,"PositiveLookAhead",2,Em,[],0,0,[0,0,0],0,["c",A_e(AU6),"O",A_c(AW_),"t",A_b(A7r)],AE1,"NegativeLookAhead",2,Em,[],0,0,[0,0,0],0,["c",A_e(APB),"O",
A_c(A6f),"t",A_b(ARM)],ABx,"PositiveLookBehind",2,Em,[],0,0,[0,0,0],0,["c",A_e(AP5),"O",A_c(A8l),"t",A_b(AUK)],UH,"NegativeLookBehind",2,Em,[],0,0,[0,0,0],0,["c",A_e(AYV),"O",A_c(A5j),"t",A_b(APM)],Ij,"SingleSet",2,Ca,[],0,0,[0,0,0],0,["c",A_e(AOP),"cF",A_e(ATE),"cW",A_f(A5w),"b$",A_c(A21),"hb",A_b(A4o),"ff",A_b(AXM)],Hz,0,B,[],1,0,0,0,0,Ba,0,Hz,[],1,0,0,Rc,["eh",A_b(AZS),"gk",A_b(AZu),"mM",A_b(A57),"iV",A_b(A7q)],AHp,0,Ba,[],0,0,0,0,["o",A_c(Dg),"eh",A_b(Da),"gk",A_b(A1l),"mM",A_b(AWX),"K",A_b(A3H),"iV",A_b(ARn)],Np,
0,Bu,[],0,3,0,0,0,EB,0,BX,[],1,0,0,0,["b$",A_c(AWc),"O",A_c(A6L),"ff",A_b(AT0)],Dj,"LeafQuantifierSet",2,EB,[],0,0,[0,0,0],0,["c",A_e(AYW),"t",A_b(A0q)],Gf,"CompositeQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_e(AZE),"t",A_b(AZU)],C9,"GroupQuantifierSet",2,EB,[],0,0,[0,0,0],0,["c",A_e(AY$),"t",A_b(A2l)],Fq,"AltQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_e(A3d),"X",A_c(AYy)],WS,"UnifiedQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_e(A7Z),"cF",A_e(AUn)],P_,0,B,[],3,3,0,0,0,TE,0,B,[P_],0,3,0,0,0,Bh,0,B,[],1,0,0,
0,0,DA,0,BU,[],0,3,0,0,0,Yo,0,Hz,[Ei],0,0,0,0,["K",A_b(ADe)],Zt,"FSet$PossessiveFSet",2,BX,[],0,0,[C8,0,0],0,["c",A_e(AS2),"t",A_b(A4i),"O",A_c(A4m)],AFF,0,B,[Ei,C4],0,3,0,0,0,PV,0,Ca,[],0,0,0,0,["t",A_b(A4s)],Sx,"CompositeRangeSet",2,Ca,[],0,0,[0,0,0],0,["c",A_e(APk),"X",A_c(A4e),"t",A_b(A4C),"O",A_c(APQ),"b$",A_c(APD)],Ee,"SupplRangeSet",2,Ca,[],0,0,[0,0,0],0,["c",A_e(A1f),"t",A_b(A7k),"o",A_c(ARz),"b$",A_c(APf),"X",A_c(A50),"O",A_c(ARd)],Nm,"UCISupplRangeSet",2,Ee,[],0,0,[0,0,0],0,["o",A_c(ASH),"t",A_b(AXS)],AHj,
"UCIRangeSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(A2O),"t",A_b(AZY)],EV,"RangeSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(X0),"t",A_b(AS6),"b$",A_c(AU$)],ZO,"HangulDecomposedCharSet",2,Ca,[],0,0,[0,0,0],0,["X",A_c(ATL),"t",A_b(AV8),"c",A_e(AOt),"b$",A_c(AZ1),"O",A_c(AW1)],E1,"CharSet",2,Ch,[],0,0,[0,0,0],0,["cl",A_b(A2D),"bF",A_d(AR1),"cF",A_e(AQ1),"cW",A_f(ASX),"t",A_b(AXb),"b$",A_c(AWT)],AJ2,"UCICharSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(AYJ),"t",A_b(A4d)],AGE,"CICharSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(AOG),"t",A_b(ASc)],Gj,
"DecomposedCharSet",2,Ca,[],0,0,[0,0,0],0,["X",A_c(A7y),"c",A_e(AUU),"t",A_b(A37),"b$",A_c(AS3),"O",A_c(A42)],Xk,"UCIDecomposedCharSet",2,Gj,[],0,0,[0,0,0],0,0,ADx,"CIDecomposedCharSet",2,Gj,[],0,0,[0,0,0],0,0,XW,"PossessiveGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_e(A0D)],AAm,"PosPlusGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_e(A3x)],G8,"AltGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_e(A5X),"X",A_c(A6Y)]]);
$rt_metadata([RF,"PosAltGroupQuantifierSet",2,G8,[],0,0,[0,0,0],0,["c",A_e(AST),"X",A_c(A3R)],GN,"CompositeGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_e(A8i),"t",A_b(AXo)],P8,"PosCompositeGroupQuantifierSet",2,GN,[],0,0,[0,0,0],0,["c",A_e(ASi)],Tj,"ReluctantGroupQuantifierSet",2,C9,[],0,0,[0,0,0],0,["c",A_e(AXT)],AA5,"RelAltGroupQuantifierSet",2,G8,[],0,0,[0,0,0],0,["c",A_e(APR)],Vs,"RelCompositeGroupQuantifierSet",2,GN,[],0,0,[0,0,0],0,["c",A_e(AZn)],Tk,"DotAllQuantifierSet",2,EB,[],0,0,[0,0,0],0,["c",
A_e(A78),"cF",A_e(AWB),"t",A_b(A4I)],ZA,"DotQuantifierSet",2,EB,[],0,0,[0,0,0],0,["c",A_e(AU_),"cF",A_e(AOv),"t",A_b(A5q)],FV,0,B,[],1,0,0,0,0,AGA,"PossessiveQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_e(AO7)],WM,"PossessiveAltQuantifierSet",2,Fq,[],0,0,[0,0,0],0,["c",A_e(AUb)],Z0,"PossessiveCompositeQuantifierSet",2,Gf,[],0,0,[0,0,0],0,["c",A_e(A5z)],AA4,"ReluctantQuantifierSet",2,Dj,[],0,0,[0,0,0],0,["c",A_e(AU7)],ADI,"ReluctantAltQuantifierSet",2,Fq,[],0,0,[0,0,0],0,["c",A_e(APe)],S$,"ReluctantCompositeQuantifierSet",
2,Gf,[],0,0,[0,0,0],0,["c",A_e(A5P)],LV,"SOLSet",2,BX,[],4,0,[0,0,0],0,["c",A_e(A22),"O",A_c(A2s),"t",A_b(AUd)],AHE,"WordBoundary",2,BX,[],0,0,[0,0,0],0,["c",A_e(AZQ),"O",A_c(AZZ),"t",A_b(A8g)],Zw,"PreviousMatch",2,BX,[],0,0,[0,0,0],0,["c",A_e(ASK),"O",A_c(AYn),"t",A_b(AZG)],Xg,"EOLSet",2,BX,[],4,0,[0,0,0],0,["c",A_e(A4M),"O",A_c(A0w),"t",A_b(A3f)],AFm,"EOISet",2,BX,[],0,0,[0,0,0],0,["c",A_e(A4c),"O",A_c(AYI),"t",A_b(ARQ)],YG,"MultiLineSOLSet",2,BX,[],0,0,[0,0,0],0,["c",A_e(A0s),"O",A_c(ARH),"t",A_b(AZA)],AJO,
"DotAllSet",2,Ca,[],0,0,[0,0,0],0,["c",A_e(AXW),"t",A_b(AQF),"X",A_c(AZ3),"jy",A_b(A3Z),"O",A_c(AZ2)],AHo,"DotSet",2,Ca,[],4,0,[0,0,0],0,["c",A_e(A38),"t",A_b(A0C),"X",A_c(A5p),"jy",A_b(AOf),"O",A_c(AYb)],ANJ,"UEOLSet",2,BX,[],4,0,[0,0,0],0,["c",A_e(AS5),"O",A_c(A1I),"t",A_b(ATo)],AMD,"UMultiLineEOLSet",2,BX,[],0,0,[0,0,0],0,["c",A_e(AUN),"O",A_c(A1B),"t",A_b(AOV)],AKB,"MultiLineEOLSet",2,BX,[],0,0,[0,0,0],0,["c",A_e(A2o),"O",A_c(AQb),"t",A_b(ARI)],IH,"CIBackReferenceSet",2,Ca,[],0,0,[0,0,0],0,["c",A_e(AO$),
"X",A_c(A4W),"t",A_b(AZg),"O",A_c(AVU)],ANP,"BackReferenceSet",2,IH,[],0,0,[0,0,0],0,["c",A_e(AQg),"cF",A_e(AW9),"cW",A_f(AOW),"b$",A_c(A3s),"t",A_b(A6X)],ALW,"UCIBackReferenceSet",2,IH,[],0,0,[0,0,0],0,["c",A_e(ATz),"t",A_b(AZ0)],QU,0,Hk,[Kh],0,3,0,0,["qQ",A_f(ARq),"qe",A_e(AZT),"kG",A_c(A0h),"q8",A_d(A5_)],ABO,"SequenceSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(AQx),"cF",A_e(AZO),"cW",A_f(A1M),"t",A_b(AU2),"b$",A_c(AR7)],AGD,"UCISequenceSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(ATF),"t",A_b(ASd)],Qa,"CISequenceSet",
2,Ch,[],0,0,[0,0,0],0,["bF",A_d(A5A),"t",A_b(A6t)],HK,0,B,[],4,0,0,AV4,0,X5,"UCISupplCharSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(AWi),"t",A_b(A8f)],Oz,"LowSurrogateCharSet",2,Ca,[],0,0,[0,0,0],0,["X",A_c(A4j),"c",A_e(A0x),"cF",A_e(AR5),"cW",A_f(A0X),"t",A_b(AWE),"b$",A_c(AOT),"O",A_c(AWK)],OH,"HighSurrogateCharSet",2,Ca,[],0,0,[0,0,0],0,["X",A_c(A0g),"c",A_e(AOA),"cF",A_e(A4w),"cW",A_f(AWd),"t",A_b(A7J),"b$",A_c(AQz),"O",A_c(A4E)],Eu,"SupplCharSet",2,Ch,[],0,0,[0,0,0],0,["bF",A_d(A4$),"cF",A_e(A3I),"cW",A_f(APV),
"t",A_b(A6Z),"b$",A_c(A44)],AEx,0,FV,[],0,0,0,0,["jq",A_c(AP0),"B9",A_d(AVP)],AEy,0,FV,[],0,0,0,0,["jq",A_c(A5Q),"B9",A_d(AXH)],AJc,0,B,[],0,0,0,0,0,AGT,0,B,[],0,0,0,0,0,Ox,0,Bh,[],0,0,0,0,["J",A_b(AL4)],NX,0,Bh,[],0,0,0,0,["J",A_b(AMz)],AI9,0,Bh,[],0,0,0,0,["J",A_b(A5t)],AJr,0,Bh,[],0,0,0,0,["J",A_b(AWN)],AJt,0,Bh,[],0,0,0,0,["J",A_b(AQ6)],Os,0,Bh,[],0,0,0,0,["J",A_b(AHr)],Mr,0,Os,[],0,0,0,0,["J",A_b(AHU)],AKs,0,Bh,[],0,0,0,0,["J",A_b(A15)]]);
$rt_metadata([Py,0,Mr,[],0,0,0,0,["J",A_b(AKz)],AMf,0,Py,[],0,0,0,0,["J",A_b(AT3)],AIn,0,Bh,[],0,0,0,0,["J",A_b(A0M)],AHA,0,Bh,[],0,0,0,0,["J",A_b(ATY)],ALr,0,Bh,[],0,0,0,0,["J",A_b(AXK)],ANu,0,Bh,[],0,0,0,0,["J",A_b(A3V)],AKv,0,Bh,[],0,0,0,0,["J",A_b(AYN)],ANa,0,Bh,[],0,0,0,0,["J",A_b(ASp)],AI1,0,Bh,[],0,0,0,0,["J",A_b(AVZ)],AJG,0,Bh,[],0,0,0,0,["J",A_b(A0K)],AG5,0,Bh,[],0,0,0,0,["J",A_b(AQK)],AKI,0,Bh,[],0,0,0,0,["J",A_b(A7h)],ANg,0,Bh,[],0,0,0,0,["J",A_b(AYK)],AJn,0,Bh,[],0,0,0,0,["J",A_b(AS7)],ALN,0,Bh,
[],0,0,0,0,["J",A_b(AQS)],AIp,0,Bh,[],0,0,0,0,["J",A_b(A1O)],AKa,0,Bh,[],0,0,0,0,["J",A_b(A2W)],ANl,0,Bh,[],0,0,0,0,["J",A_b(AW2)],AH5,0,Bh,[],0,0,0,0,["J",A_b(AVw)],AHM,0,Bh,[],0,0,0,0,["J",A_b(AUu)],AKt,0,Bh,[],0,0,0,0,["J",A_b(A5m)],Lf,0,Bh,[],0,0,0,0,["J",A_b(AIo)],ANF,0,Lf,[],0,0,0,0,["J",A_b(AUi)],AMj,0,Ox,[],0,0,0,0,["J",A_b(AZL)],AHK,0,NX,[],0,0,0,0,["J",A_b(ARZ)],ALu,0,Bh,[],0,0,0,0,["J",A_b(ATk)],ALF,0,Bh,[],0,0,0,0,["J",A_b(AXw)],AL9,0,Bh,[],0,0,0,0,["J",A_b(A1y)],AMg,0,Bh,[],0,0,0,0,["J",A_b(AOk)],ALx,
0,B,[],4,0,0,0,0,AHh,0,B,[],4,3,0,0,0,YJ,"UnicodeHelper$Range",8,B,[],0,3,[AHh,0,"Range"],0,0,AJh,0,B,[],0,3,0,0,0,ALU,0,B,[],4,3,0,0,0,F3,0,B,[],0,0,0,0,0,ACD,0,F3,[FC],0,0,0,0,0,Vf,0,F3,[FC],0,0,0,0,0,ABw,0,F3,[FC],0,0,0,0,0,AHa,0,B,[W],0,0,0,0,0,ALj,0,B,[DU],0,3,0,0,0,WZ,0,B,[Ci],0,3,0,0,["bl",A_c(AVp)],W0,0,B,[Ci],0,3,0,0,["bl",A_c(AVJ)],AF1,0,B,[W],0,3,0,0,["g",A_c(A5c)],AEH,0,B,[Ci],0,0,0,0,["bl",A_c(AVD)],AB$,0,B,[W],0,3,0,0,["g",A_c(AT4)],AB9,0,B,[W],0,3,0,0,["g",A_c(A4U)],AFR,0,B,[Ci],0,3,0,0,["bl",
A_c(AXf)],WR,0,Ba,[],0,0,0,0,["o",A_c(ARa)],WO,0,Ba,[],0,0,0,0,["o",A_c(AY9)],Q7,0,Ba,[],0,0,0,0,["o",A_c(ATb),"K",A_b(A1R)]]);
$rt_metadata([ZG,0,Ba,[],0,0,0,0,["o",A_c(A5b)],ZE,0,Ba,[],0,0,0,0,["o",A_c(AWh)],ZF,0,Ba,[],0,0,0,0,["o",A_c(A3b)],ZJ,0,Ba,[],0,0,0,0,["o",A_c(A05)],ZK,0,Ba,[],0,0,0,0,["o",A_c(AOg)],ZH,0,Ba,[],0,0,0,0,["o",A_c(ART)],ZI,0,Ba,[],0,0,0,0,["o",A_c(ATK)],ZL,0,Ba,[],0,0,0,0,["o",A_c(AXa)],ZM,0,Ba,[],0,0,0,0,["o",A_c(A0F)],Q6,0,Ba,[],0,0,0,0,["o",A_c(A8s)],Ro,0,Ba,[],0,0,0,0,["o",A_c(ARX)],Q4,0,Ba,[],0,0,0,0,["o",A_c(AQk)],Q5,0,Ba,[],0,0,0,0,["o",A_c(A1G)],Q$,0,Ba,[],0,0,0,0,["o",A_c(ASM)],Q3,0,Ba,[],0,0,0,0,["o",
A_c(A6m)],Q8,0,Ba,[],0,0,0,0,["o",A_c(AZV)],Q9,0,Ba,[],0,0,0,0,["o",A_c(AVo)],SD,0,B,[W],0,3,0,0,["g",A_c(A4t)],MR,0,B,[],3,3,0,0,0,ACm,0,B,[MR],4,3,0,0,0,SC,0,B,[T],0,3,0,0,["e",A_b(A4S)],SA,0,B,[T],0,3,0,0,["e",A_b(ARO)],SB,0,B,[T],0,3,0,0,["e",A_b(AXl)],SE,0,B,[T],0,3,0,0,["e",A_b(AOD)],TX,0,B,[T],0,3,0,0,["e",A_b(AWQ)],TW,0,B,[T],0,3,0,0,["e",A_b(A3g)],TV,0,B,[T],0,3,0,0,["e",A_b(A4L)],S3,0,B,[T],0,3,0,0,["e",A_b(AYq)],Se,0,B,[],3,3,0,0,0,AL2,0,B,[T],0,3,0,0,["e",A_b(A7T)],WH,0,B,[Ci],0,3,0,0,["bl",A_c(APE)],AMl,
0,B,[GB],0,3,0,0,0,Zz,0,B,[W],0,3,0,0,["g",A_c(A0J)],AAW,0,B,[Ci],0,3,0,0,["bl",A_c(AVf)],SR,0,B,[W],0,3,0,0,["g",A_c(AS$)],Rw,0,B,[T],0,3,0,0,["e",A_b(AVk)],Ru,0,B,[T],0,3,0,0,["e",A_b(A1z)],Rv,0,B,[T],0,3,0,0,["e",A_b(A7l)],VJ,0,B,[T],0,3,0,0,["e",A_b(A46)],VL,0,B,[T],0,3,0,0,["e",A_b(AUm)],AA2,0,B,[CJ],0,3,0,0,["b1",A_b(A6d)],ABC,0,B,[T],0,3,0,0,["e",A_b(AO_)],ABz,0,B,[T],0,3,0,0,["e",A_b(AQw)],Up,0,B,[T],0,3,0,0,["e",A_b(AXF)],Uq,0,B,[T],0,3,0,0,["e",A_b(AO9)],Ur,0,B,[T],0,3,0,0,["e",A_b(AQo)],Us,0,B,[T],
0,3,0,0,["e",A_b(AXp)],UF,0,B,[T],0,3,0,0,["e",A_b(A3n)],AIG,0,B,[CJ],0,3,0,0,["b1",A_b(A7V)],AES,0,B,[],0,3,0,0,0]);
$rt_metadata([Ve,0,B,[Ir],0,3,0,0,0,P4,"BackReferencedSingleSet",2,Ij,[],0,0,[0,0,0],0,["cF",A_e(ARu),"cW",A_f(A8h),"hb",A_b(AP$)],Nb,0,Bu,[],0,3,0,0,0,Wq,0,B,[T],0,3,0,0,["e",A_b(AYc)],Wr,0,B,[E2],0,3,0,0,["gy",A_c(AWg)],AEA,0,B,[T],0,3,0,0,["e",A_b(AXd)],AEC,0,B,[E2],0,3,0,0,["gy",A_c(AYB)],T0,0,B,[W],0,3,0,0,["g",A_c(A1H)],ABt,0,B,[BD],0,3,0,0,0,AMx,0,B,[],4,3,0,0,0,AEq,0,B,[MR],0,0,0,0,0,AEI,0,B,[T],0,3,0,0,["e",A_b(A1Z)],ABn,0,B,[T],0,3,0,0,["e",A_b(ATQ)],ABm,0,B,[T],0,3,0,0,["e",A_b(A4l)],Tf,0,B,[T],0,
3,0,0,["e",A_b(A7c)],QR,0,B,[E2],0,3,0,0,["gy",A_c(A28)],Hb,0,CE,[],12,0,0,T9,0,AFk,0,B,[W],0,3,0,0,["g",A_c(ARG)],ADl,0,B,[GB],0,3,0,0,0,AMU,0,B,[NN],0,3,0,0,0,AMV,0,B,[CJ],0,3,0,0,0,AMT,0,B,[BD],0,3,0,0,0,EK,0,CE,[],12,3,0,A0e,0,Zp,0,B,[],3,3,0,0,0,F_,"DirectoryNode",26,Db,[],0,3,[0,0,0],0,["K",A_b(AXy)],R6,0,B,[T],0,3,0,0,["e",A_b(A1Y)],S7,0,B,[W],0,3,0,0,["g",A_c(APl)],ADn,0,B,[],32,0,0,A$v,0,Ti,0,B,[W],0,3,0,0,["g",A_c(ARx)],Pt,0,EJ,[Ei,C4],1,3,0,0,["fH",A_c(AYG),"qG",A_c(A2G)],AIy,0,B,[Zp],0,0,0,0,0,PJ,
0,B,[T],0,3,0,0,["e",A_b(A2k)],Po,0,Pt,[],0,0,0,0,["fH",A_c(AYG),"qG",A_c(A2G),"qJ",A_c(A5i)],Qd,0,EH,[JD],0,0,0,0,["fH",A_c(AYG),"qG",A_c(A2G),"jg",A_c(AYF),"c$",A_b(AUO)],IX,"FileNode",26,Db,[],0,3,[0,0,0],0,["K",A_b(AQm)],AB8,0,B,[LA],0,0,0,0,["sK",A_d(APz),"Bk",A_c(AS_),"yW",A_c(AYp),"wk",A_c(AYA)],Sr,0,Bu,[],0,3,0,0,0,Xi,0,Bu,[],0,3,0,0,0,VN,0,GF,[],0,3,0,0,0,Sc,0,GF,[],0,3,0,0,0,ACZ,0,Ba,[],0,0,0,0,["o",A_c(AXh)],Yc,0,Ba,[],0,0,0,0,["o",A_c(AZJ)],TA,0,Ba,[],0,0,0,0,["o",A_c(APd)],Tz,0,Ba,[],0,0,0,0,["o",
A_c(A1w)],W6,0,Ba,[],0,0,0,0,["o",A_c(ASz)],ZY,0,Ba,[],0,0,0,0,["o",A_c(A6U)],QQ,0,Ba,[],0,0,0,0,["o",A_c(AU0)],ABh,0,Ba,[],0,0,0,0,["o",A_c(AV3)],X$,0,Ba,[],0,0,0,0,["o",A_c(A71)],Ya,0,Ba,[],0,0,0,0,["o",A_c(AQB)]]);
$rt_metadata([Qu,0,Ba,[],0,0,0,0,["o",A_c(AXr)],AAb,0,Ba,[],0,0,0,0,["o",A_c(A3k)],AAg,0,Ba,[],0,0,0,0,["o",A_c(A4V)],ADr,0,Ba,[],0,0,0,0,["o",A_c(A6H)],ACn,0,Ba,[],0,0,0,0,["o",A_c(AXQ)],PZ,0,Ba,[],0,0,0,0,["o",A_c(AQr)],M2,0,Ba,[],0,0,0,0,["o",A_c(AU3)],ABV,0,M2,[],0,0,0,0,["o",A_c(A51)],AEm,0,B,[],0,3,0,0,0,AHg,0,B,[],3,3,0,0,0,AIF,0,B,[BY],3,3,0,0,0,L0,0,F8,[],1,3,0,0,0,SZ,0,L0,[],0,3,0,0,0,TB,0,B,[W],0,3,0,0,["g",A_c(A6j)],RA,0,B,[Kc],0,3,0,0,["rf",A_b(AQY),"pq",A_b(AOy),"oV",A_c(AWs),"li",A_c(AUR)],Zq,
0,B,[T],0,3,0,0,0,ADh,0,B,[W],0,3,0,0,0,AEa,0,B,[W],0,3,0,0,0,Tq,0,B,[T],0,3,0,0,["e",A_b(AUT)],Df,0,B,[],3,3,0,AJv,0,CD,0,CE,[],12,3,0,AIT,0,Eb,0,B,[],3,3,0,AZl,0,WW,0,B,[DU],0,3,0,0,0,AF0,0,B,[BY],3,3,0,0,0,Qv,0,B,[AF0],0,3,0,0,["KK",A_b(A2I)],To,0,B,[T],0,3,0,0,["e",A_b(AOF)],ACX,0,B,[IZ],0,0,0,0,["oL",A_c(A6z),"pO",A_c(AW$),"pw",A_b(A6W)],AC7,0,B,[T],0,3,0,0,["e",A_b(A2F)],PE,0,B,[W],0,3,0,0,["g",A_c(AYx)],AGp,0,B,[W],0,3,0,0,["g",A_c(A7f)],UD,0,B,[DU],0,3,0,0,["bI",A_c(APv)],S9,0,B,[T],0,3,0,0,["e",A_b(A7n)],AK8,
0,B,[],0,0,0,0,0,AGx,0,B,[T],0,3,0,0,["e",A_b(A2E)],RK,0,B,[W],0,3,0,0,["g",A_c(A1U)],RL,0,B,[W],0,3,0,0,["g",A_c(A72)]]);
function $rt_array(cls,data){this.a0b=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["<java_object>@","panelDiv","This Browser does not support FontMetrics API.\nPlease enable the API in FireFox settings:\n  open about:config and enable dom.textMetrics.fontBoundingBox.enabled","JetBrainsMono-Light.ttf","normal","JetBrainsMono-LightItalic.ttf","italic","JetBrainsMono-Regular.ttf","JetBrainsMono-Italic.ttf","JetBrainsMono-SemiBold.ttf","JetBrainsMono-SemiBoldItalic.ttf","JetBrainsMono-Bold.ttf",
"JetBrainsMono-BoldItalic.ttf","codicon","fonts/","codicon.ttf","url(","connectToDom: called on already connected","#wasm","#diffDemo","ClassL.java","ClassR.java","","[]","null","Patter is null","0","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ",": ","The value is too big for int type: ","Illegal radix: ","false","true","JetBrains Mono","Either src or dest is null"," is not subtype of ","[",", ","]","navigator.clipboard is undefined","FATAL: WebGL is not enabled in the browser",
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
"BYTE","FLOAT","New position "," is outside of range [0;","Capacity is negative: ","The last char in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Start ","The last char in src "," is outside of string of size "," must be before end ","The last byte in src ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","JsArrayView{ buffer.byteLength = "," }","#F7F8FA","#AEB3C2","#FFFFFF","#767A8A","#F5F8FE","#B9BDC9","#D6D6D6","#BEE6BE","#C2D8F2","#E7EFFA","sendToDiff","child",
"selectScene ","CodiconDemo","RenderTexture","CleartypeColors","ScissorDemo","LineShaderDemo1","LineShaderDemo2","ToolbarDemo","SelectFileTest","WindowsDemo","FolderTransferDemo","ManyTexturesLineNumbersScene","SinDemo","WindowDemo","EditorInViewDemo","Editor0","ProjectViewDemo","Diff","many","test","FileViewDemo","FindUsagesDemo","DemoScene1","EditorWindowDemo","ClipboardTest","FolderDiff","RegionTextureAllocatorDemo","TextureRegionTestScene","WorkerTest","FolderDiffScene","DiffMiddleDemo"," Cleartype text test: 3.14159265358979, IDE编码//背后就是莫斯科，我们已无退路。不抛弃、不放弃。\n",
"measured = ","Consolas","#e3c8ab","#39322b","hello string","withString","withChars","withBytes","withInts","unsupported","supported","ReadClipboardText is ","Segoe UI","...","Usages of ","  ","editor font: ",", lineHeight = ","font.topBase(lineHeight) = ","\r","\n","opening file ","prev = "," pixelLocation = ",", next = ","pointer","text","{","{}","(","()","<","<>","\"","\"\"","\'","\'\'","java","JavaProxy.parseViewport","/Model::iterativeParsing","asyncIterativeParsing","deleteDiffModel"," - ","ns-resize",
"ew-resize","/Full file parsed in ","ms","ScopeUtils.resolveAll","activity","asyncParseFile","asyncParseFirstLines","asyncFullParseFile","/Model::parseFullFile","js","cpp","CppProxy.parseFullFileScopes","JavaScriptProxy.parseFullFile","ActivityParser.parseFullFile","JavaProxy.parseFullFileScopes","renderBlankLines = ","drawTails = ","nwse-resize","nesw-resize",", z = ",", w = ","(this Collection)"," -"," bold"," italic","\\n","#2B2D30","#606366","#2B2B2B","#A4A3A3","#323232","#484A4A","#294436","#385570","#303C47",
"#3C3F41","#4B5059","#1E1F22","#A1A3AB","#26282E","#283541","Courier New","jsCanvas.setFont(11, CourierNew);","canvas.getFont() = "," HuaweЙ KeyModifiers 收件人 |","paint complete ","clientRect = ","dpr = ","key up = ","key down = ",", keyCode = ",", isRepeated = ","-","+","main.java","private static void foo (...);","Window 1: ","scrollPos: ","open folder ...","open file ...","read file in pages","fibonacci","fileResult: \"","\", file ","  content: "," bytes, hash = ","writeClipboardText ","","codicon.pixel.size = ",
"w = ","Window 1","Window ","Project root","FileTreeView model size = ","- to worker ","- to edt ","folder","file","objects[","] = ","#616161","#393B40","#DFE1E5","#43454A","#BBBBBB","wasm memory size = ","callToCpp1 = ","callToCpp2 = ","getC8String = ","getC16String = ","int array: ","float array: ","double array: ","this is a C/C++ string","c8String memory test ","this is a C/C++ char16_t string 新年快乐","c16String memory test ","int memory read test ","float memory read test ","double memory read test ","fail: length differ",
"ok","fail: not equal to expected","fail: not expected","fail","mouseDown b=","mouseUp b=","onCopy","copied","This is a "," text sample","focus lost","menu","Verdana","toolbar size is unknown","onLeave item ",", item ","tbH onClickOutside","tbV onClickOutside","newWindow","RegionTexture: current width(",") greater than the allowable value of texture width(","RegionTexture: Text height cannot be zero.","fibonacci(37) x3","fibonacci(40) x3","fibonacci(42) x3","fibonacci(45) x3","fibonacci(45) x5","asyncWithFile",
"|The sample text","#A9B7C6","#344134","#40332B"," on Copy","addWindow","file - to worker ","dir - to worker ","file - to edt ","dir - to edt ","new folder diff window","new file diff window","new project view","new editor window","package sudu.editor;\n\n/*\n* This is multiplatform lightweight code editor\n*/\n\npublic class Main {\n\n  private static String helloWorld = \"Hello,\\tWorld\\u3000\";\n  private static char n = \'\\n\';\n  private static int a;\n\n  public int field;\n\n  public static void main(String[] args) {\n    sum(a + a);\n    var g = g(a + a);\n    g.a;\n    var array = new int[field];\n    for (var a: array) {\n      sum(a);\n    }\n  }\n\n  @Deprecated\n  private static void sum() {\n    G g = new G(12);\n    g.a;\n  }\n\n  @Deprecated\n  private s"
+"tatic int sum(int a) {\n    int b = 10;\n    int c = a + b;\n    return c;\n  }\n\n  public int sumField(int field) {\n    return field + this.field;\n  }\n\n  public G g(int a) {\n    return new G(a);\n  }\n\n  public class G {\n    int a;\n    public G(int a) {\n      this.a = a;\n    }\n  }\n\n  public interface I {\n    int sumField(int field);\n\n    default void foo(int a) {\n      sumField(a);\n    }\n  }\n\n  public class C {\n    int field;\n  }\n\n  public class A extends C implements I {\n    public void a() {\n      foo(field);\n "
+"   }\n\n    @Override\n    public int sumField(int field) {\n      return 0;\n    }\n  }\n}\n","example.java","Ctrl P -> parseFullFile","#BCBEC4","#313438","#214283","#373B39","#402F33","defaultText","keyword","#CF8E6D","field","#C77DBB","string","#6AAB73","comma","error","#F75464","unused","#6F737A","number","#2AACB8","method","#56A8F5","showUsage","braceMatch","comment","#7A7E85","annotation","#B3AE60","type","operator","#5F8C8A","#2E436E","#2E426D","#4D4E51","jsToWasm1: a = ",", b = ","jsToWasm2: a = ",
"#4B6EAF","#787878","onEnter item ","WorkerTest: \n  got ","  methodWithStringResult = ","charsResult: \n  got ","  methodWithCharsResult: ",", chars = ","bytesResult: \n  got ","  methodWithBytesResult: ",", bytes = ","integersResult: \n  got ",", integers = ","/","#CC7832","#9876AA","#6A8759","#72737A","#6897BB","#FFC66D","#FFEF28","#3B514D","#808080","#BBB529","GRAYSCALE","RGBA","Select left...","Select right...",".cpp",".cc",".cxx",".hpp",".c",".h",".java",".js",".activity",".html",".xml","html","Illegal language: ",
"trying to display with unknown screen size and dpr","File must have a parent","asyncDiffUtils.compareFolders","asyncDiffUtils.compareFiles","TreeNodes left & right should have same type","/First lines parsed in ","/File structure parsed in "," readClipboardText: "," writeClipboardText \'","\' ok","onPopupClosed"," error: ","pageIndex = 4080","point to the file generated by org.sudu.experiments.FileTestGen"," onPastePlainText: ","Open project...","Project view","Open project ...","request new model, file = ",
"request in progress ","Open ...","newAction must be non-null","/Model::onFileIterativeParsed","/Viewport parsed in ","The last byte in dst ","Folder ","ClassFile ","Expected "," ints to write, but "," written","dir: ","showOpenFilePicker -> ","Go to Declaration","Go to Definition","Go to References","Go to (local)","Cut","Copy","Paste","Language >","Darcula","Dark","Light","Theme >","↑ increase","↓ decrease","Font size >","Fonts >","Greyscale","Subpixel","Text antialiasing >","Settings >","Int","Iter","VP",
"Resolve","Rep","No definition or usages","fib(",") result = ",") time = ","open file ","readLargeFilePages -> "," ints to read, but "," read","openFile: ","dir = ","asyncWithDir","openFileEdt: ","dir on edt = ","Thread.currentThread() = ","Unknown scope type: ","/Resolved in ","DiffUtils.findDiffs","  sub dir: ","  file: ","complete","file = ","file.content.length = ","Unexpected type: ","Unexpected ref node type: ","]: hash = 0x",", l = ","test passed","passCnt = ","failCnt = ","dir[",", list.size = ","file[",
"asyncWithDir complete, size = ","fSet","Is","In","main","NonCapFSet","AheadFSet","BehindFSet","AtomicFSet","FinalSet","<Empty set>","JointSet","NonCapJointSet","PosLookaheadJointSet","NegLookaheadJointSet","PosBehindJointSet","NegBehindJointSet","<Quant>","<GroupQuant>","posFSet","^ ","range:","CompositeRangeSet:  <nonsurrogate> "," <surrogate> ","UCI range:","decomposed Hangul syllable:","UCI ","CI ","decomposed char:","<DotAllQuant>","<DotQuant>","<SOL>","WordBoundary","PreviousMatch","<EOL>","EOI","^","DotAll",
"<Unix MultiLine $>","<MultiLine $>","CI back reference: ","back reference: ","UCI back reference: ","sequence: ","UCI sequence: ","CI sequence: ","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart",
"javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics",
"Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics",
"BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo",
"HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks",
"CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","openDirectory: "," - project view","readClipboardText error: ","open dir = "," ↔ ","Current Version: ","Last Parsed Version: ","DEF","DECL","CONCURRENT","UNORDERED","IDENTITY_FINISH","writeClipboardText error: ",
"opening file ... ","folderOpened ","readDirectory: ","#EBECF0","#A6D2FF","#F8F9FB","#edebfc","#FCE8F4","#0033b3","#871094","#3C7C16","#F93900","#164FF1","#396179","#93D9D9","#287BDE","#D4E2FF","#000000","#818594","#080808","Error fetching file "]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;B.prototype.toString=function(){return $rt_ustr(AHi(this));};
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
=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var C1=Long_add;var Km=Long_sub;var Cm=Long_mul;var AJf=Long_div;var AY3=Long_rem;var A8O=Long_or;var Dm=Long_and;var Bdl=Long_xor;var Ih=Long_shl;var A$d=Long_shr;var GD=Long_shru;var Bdm=Long_compare;var Jc=Long_eq;var Bdn=Long_ne;var A8L=Long_lt;var AQW=Long_le;var Bdo=Long_gt;var A8K=Long_ge;var Bdp=Long_not;var A$p=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(A$q);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=ADz.prototype;c.f=c.bl;c=ADA.prototype;c.f=c.bl;c=ADy.prototype;c.f=c.bl;c=Yy.prototype;c.f=c.bl;c=AMi.prototype;c.get=c.NW;Object.defineProperty(c,"length",{get:c.UY});c=AKS.prototype;c.createEntityReference=c.QM;c.getElementById=c.Tg;c.createTextNode=c.SY;c.hasChildNodes=c.RT;c.querySelectorAll=c.Qt;c.removeChild=c.UI;c.cloneNode=c.Il;c.createComment=c.VZ;c.insertBefore=c.Q8;c.getElementsByTagNameNS=c.UW;c.hasAttributes=c.La;c.normalize=c.Ov;c.hasChildNodesJS=c.Om;c.getElementsByTagName
=c.NV;c.appendChild=c.Pu;c.createAttributeNS=c.TB;c.dispatchEvent=c.N_;c.replaceChild=c.IS;c.createElementNS=c.J4;c.createCDATASection=c.M_;c.querySelector=c.K_;c.createElement=c.Ua;c.isSupported=c.UM;c.importNode=c.Rh;c.removeEventListener=c.J0;c.createAttribute=c.Oa;c.createDocumentFragment=c.HF;c.createProcessingInstruction=c.QG;c.addEventListener=c.Mq;Object.defineProperty(c,"nodeName",{get:c.Pt});Object.defineProperty(c,"documentElement",{get:c.KQ});Object.defineProperty(c,"childNodes",{get:c.MS});Object.defineProperty(c,
"prefix",{get:c.Rn,set:c.V$});Object.defineProperty(c,"implementation",{get:c.Nx});Object.defineProperty(c,"textContent",{get:c.V4,set:c.SV});Object.defineProperty(c,"parentNode",{get:c.Td});Object.defineProperty(c,"nextSibling",{get:c.KE});Object.defineProperty(c,"nodeType",{get:c.Up});Object.defineProperty(c,"doctype",{get:c.R$});Object.defineProperty(c,"localName",{get:c.Ve});Object.defineProperty(c,"nodeValue",{get:c.Kk,set:c.VP});Object.defineProperty(c,"firstChild",{get:c.N5});Object.defineProperty(c,
"lastChild",{get:c.My});Object.defineProperty(c,"previousSibling",{get:c.Pg});Object.defineProperty(c,"namespaceURI",{get:c.Jb});Object.defineProperty(c,"attributes",{get:c.Ru});Object.defineProperty(c,"ownerDocument",{get:c.Jh});c=Qw.prototype;c.f=c.bl;c=ALo.prototype;c.removeEventListener=c.Jj;c.dispatchEvent=c.Rb;c.addEventListener=c.L0;c=UZ.prototype;c.onAnimationFrame=c.Lc;c=UY.prototype;c.f=c.DA;c=UW.prototype;c.handleEvent=c.cM;c=ACi.prototype;c.f=c.bl;c=AE9.prototype;c.handleEvent=c.cM;c=AE$.prototype;c.handleEvent
=c.cM;c=AE_.prototype;c.handleEvent=c.cM;c=AFa.prototype;c.handleEvent=c.cM;c=AFb.prototype;c.handleEvent=c.cM;c=AFc.prototype;c.handleEvent=c.cM;c=AFd.prototype;c.handleEvent=c.cM;c=AFe.prototype;c.handleEvent=c.cM;c=AFf.prototype;c.handleEvent=c.cM;c=AFg.prototype;c.handleEvent=c.cM;c=XE.prototype;c.handleEvent=c.cM;c=XF.prototype;c.handleEvent=c.cM;c=XG.prototype;c.handleEvent=c.cM;c=XH.prototype;c.handleEvent=c.cM;c=AD2.prototype;c.handleEvent=c.cM;c=AGa.prototype;c.f=c.bl;c=AGb.prototype;c.f=c.bl;c=Qo.prototype;c.accept
=c.Og;c=Wu.prototype;c.f=c.bl;c=YF.prototype;c.f=c.bl;c=YE.prototype;c.f=c.bl;c=YC.prototype;c.f=c.bl;c=YB.prototype;c.f=c.bl;c=PS.prototype;c.f=c.bl;c=PU.prototype;c.f=c.bl;c=PT.prototype;c.f=c.bl;c=Z5.prototype;c.f=c.DA;c=Z3.prototype;c.f=c.DA;c=Vz.prototype;c.f=c.bl;c=X7.prototype;c.f=c.bl;c=AF6.prototype;c.f=c.bl;c=AF5.prototype;c.f=c.bl;c=AFr.prototype;c.f=c.bl;c=WL.prototype;c.f=c.bl;c=U7.prototype;c.handleEvent=c.cM;c=WZ.prototype;c.f=c.bl;c=W0.prototype;c.f=c.bl;c=AEH.prototype;c.f=c.bl;c=AFR.prototype;c.f
=c.bl;c=WH.prototype;c.f=c.bl;c=AAW.prototype;c.f=c.bl;c=Qv.prototype;c.onTimer=c.KK;})();
})(typeof self!=='undefined'?self:this,typeof self!=='undefined'?self:this);